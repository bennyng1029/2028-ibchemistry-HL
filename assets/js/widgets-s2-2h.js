/* ==========================================================================
   Widgets for topic 2.2 (Additional HL) — The covalent model.
   s2-2h.resonance   step through contributing structures, then the delocalized picture
   s2-2h.hydro       enthalpy of hydrogenation of benzene, drawn to scale
   s2-2h.benzene     evidence board: physical / chemical / fits both models
   s2-2h.vsepr       3-D shapes for five and six electron domains, with a predict-first mode
   s2-2h.fc-calc     formal charge trainer: FC = V − N − ½B, atom by atom
   s2-2h.fc-choose   choose the preferred Lewis formula from alternatives
   s2-2h.overlap     head-on (sigma) and sideways (pi) overlap of atomic orbitals
   s2-2h.sigmapi     count the sigma and pi bonds in a molecule
   s2-2h.hybrid      pick an atom: electron domains → hybridization → geometry
   s2-2h.complex     coordination bonds in a transition element complex ion
   Static Lewis and structural figures in the page use data-s22h-fig="name".

   Data sources. Single- and double-bond lengths are the IB data booklet values
   (section 11). Bond lengths in the resonance species (CO3 2− 129 pm, NO3− 124 pm,
   O3 128 pm, HCOO− 127 pm, benzene 140 pm), the bond angles of SF4, ClF3 and BrF5
   and the enthalpies of hydrogenation (cyclohexene −120, benzene −208 kJ mol−1) are
   rounded measured values from standard references; they are not in the booklet
   and are labelled "measured" or "about" wherever they are shown.
   Formal charges, electron domains, hybridization and bond counts are computed
   from the structure data, never typed in.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el, M = S1.mol;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  if (!M) { if (window.console) console.error('widgets-s2-2h.js needs mol.js'); return; }
  var NS = 'http://www.w3.org/2000/svg', MINUS = '−', DEG = '°';
  var INK = 'var(--ink)', INK2 = 'var(--ink-2)', ACC = 'var(--accent)';

  /* ---------- small helpers --------------------------------------------------- */
  function svgEl(tag, attrs, parent, text) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  }
  function signed(n) { return n === 0 ? '0' : (n > 0 ? '+' : MINUS) + Math.abs(n); }
  /** Formula with Unicode subscripts and superscript charge, for plain-text places (select options, SVG). */
  var SUBS = '₀₁₂₃₄₅₆₇₈₉';
  function uni(f) {
    return f.replace(/\^(\d?)([+-])/, function (_, d, s) { return (d ? { '2': '²', '3': '³' }[d] : '') + (s === '+' ? '⁺' : '⁻'); })
      .replace(/(\D)(\d+)/g, function (_, a, d) { return a + d.split('').map(function (c) { return SUBS[+c]; }).join(''); });
  }
  /** Segmented button group. items: [{value, label}] → {value, set(v), el}. */
  function seg(parent, label, items, value, onChange) {
    var id = S1.util.uid('seg');
    var group = el('div', { class: 'seg s22h-seg', role: 'group', 'aria-labelledby': id });
    var state = { value: value, buttons: [] };
    items.forEach(function (it) {
      var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(it.value === value), html: it.label });
      b.addEventListener('click', function () { state.set(it.value); if (onChange) onChange(it.value); });
      b._value = it.value; state.buttons.push(b); group.appendChild(b);
    });
    state.set = function (v) { state.value = v; state.buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b._value === v)); }); };
    state.el = el('div', { class: 'control s22h-ctl' }, [el('span', { class: 'control__label', id: id, html: label }), group]);
    parent.appendChild(state.el);
    return state;
  }
  /** Message box (aria-live). tone: 'ok' | 'bad' | 'warn' | 'info'. */
  function msgBox(parent) {
    var box = el('div', { class: 's22h-msg', role: 'status', 'aria-live': 'polite', hidden: true });
    parent.appendChild(box);
    return {
      el: box,
      show: function (tone, html) { box.hidden = false; box.setAttribute('data-tone', tone); box.innerHTML = '<p>' + html + '</p>'; },
      hide: function () { box.hidden = true; box.innerHTML = ''; }
    };
  }

  /* ---------- structure data --------------------------------------------------
     A structure is {atoms: [{el, x, y, lone}], bonds: [{a, b, order}], bracket, charge, scale}.
     Everything below is derived from that: formal charge, domains, hybridization, σ and π counts. */
  var VALENCE = { H: 1, C: 4, N: 5, O: 6, F: 7, P: 5, S: 6, Cl: 7, Br: 7, I: 7, Xe: 8 };
  var GROUP = { H: 1, C: 14, N: 15, O: 16, F: 17, P: 15, S: 16, Cl: 17, Br: 17, I: 17, Xe: 18 };
  function bondSum(s, i) { var n = 0; s.bonds.forEach(function (b) { if (b.a === i || b.b === i) n += (b.order || 1); }); return n; }
  function neighbours(s, i) { var n = 0; s.bonds.forEach(function (b) { if (b.a === i || b.b === i) n++; }); return n; }
  function fcParts(s, i) {
    var a = s.atoms[i], V = VALENCE[a.el], N = 2 * (a.lone || 0), B = 2 * bondSum(s, i);
    return { V: V, N: N, B: B, fc: V - N - B / 2 };
  }
  function withCharges(s, only) {
    var c = { atoms: s.atoms.map(function (a, i) { var o = {}; for (var k in a) o[k] = a[k]; if (!only || only[i]) { var f = fcParts(s, i).fc; if (f !== 0) o.charge = f; } return o; }),
      bonds: s.bonds, bracket: s.bracket, charge: s.charge, scale: s.scale, label: s.label };
    return c;
  }
  var TRI = [[0, -1.25], [-1.08, 0.63], [1.08, 0.63]];
  /** Central atom with three outer atoms; the double bond goes to outer atom k. */
  function trig(central, outer, k, charge, centralLone) {
    var atoms = [{ el: central, x: 0, y: 0, lone: centralLone || 0 }], bonds = [];
    outer.forEach(function (sym, i) {
      atoms.push({ el: sym, x: TRI[i][0], y: TRI[i][1], lone: sym === 'H' ? 0 : (i === k ? 2 : 3) });
      bonds.push({ a: 0, b: i + 1, order: i === k ? 2 : 1 });
    });
    return { atoms: atoms, bonds: bonds, bracket: !!charge, charge: charge };
  }
  /** Bent three-atom species (ozone, sulfur dioxide, nitrite): orders [left, right]. */
  function bent(central, outer, orders, charge, centralLone) {
    return { atoms: [{ el: central, x: 0, y: 0, lone: centralLone == null ? 1 : centralLone },
      { el: outer, x: -1.12, y: 0.62, lone: 4 - orders[0] }, { el: outer, x: 1.12, y: 0.62, lone: 4 - orders[1] }],
      bonds: [{ a: 0, b: 1, order: orders[0] }, { a: 0, b: 2, order: orders[1] }], bracket: !!charge, charge: charge };
  }
  /** Linear three-atom species: symbols [a, b, c], orders [o1, o2], lone pairs [l1, l2, l3]. */
  function lin3(sym, orders, lone, charge) {
    return { atoms: [{ el: sym[0], x: -1.3, y: 0, lone: lone[0] }, { el: sym[1], x: 0, y: 0, lone: lone[1] }, { el: sym[2], x: 1.3, y: 0, lone: lone[2] }],
      bonds: [{ a: 0, b: 1, order: orders[0] }, { a: 1, b: 2, order: orders[1] }], bracket: !!charge, charge: charge };
  }
  /** Sulfate-type ion: central atom, four oxygens (left, right, bottom, top); doubles = indexes with a double bond. */
  function tetra(central, doubles, charge) {
    var P = [[-1.25, 0], [1.25, 0], [0, 1.25], [0, -1.25]], atoms = [{ el: central, x: 0, y: 0 }], bonds = [];
    P.forEach(function (p, i) { var d = doubles.indexOf(i) > -1; atoms.push({ el: 'O', x: p[0], y: p[1], lone: d ? 2 : 3 }); bonds.push({ a: 0, b: i + 1, order: d ? 2 : 1 }); });
    return { atoms: atoms, bonds: bonds, bracket: !!charge, charge: charge };
  }
  /** Benzene, one Kekulé structure (k = 0 or 1), with hydrogens. */
  function benzene(k) {
    var atoms = [], bonds = [], i, a;
    for (i = 0; i < 6; i++) { a = -Math.PI / 2 + i * Math.PI / 3; atoms.push({ el: 'C', x: 1.25 * Math.cos(a), y: 1.25 * Math.sin(a) }); }
    for (i = 0; i < 6; i++) { a = -Math.PI / 2 + i * Math.PI / 3; atoms.push({ el: 'H', x: 2.3 * Math.cos(a), y: 2.3 * Math.sin(a) }); }
    for (i = 0; i < 6; i++) { bonds.push({ a: i, b: (i + 1) % 6, order: i % 2 === k ? 2 : 1 }); bonds.push({ a: i, b: i + 6, order: 1 }); }
    return { atoms: atoms, bonds: bonds, scale: 34 };
  }
  /** Central atom with n outer atoms on a regular polygon and lone pairs at given angles (degrees, 0 = right, 90 = up). */
  function radial(central, outer, n, slots, loneAngles, charge, scale) {
    var atoms = [{ el: central, x: 0, y: 0, lone: loneAngles || 0 }], bonds = [];
    for (var i = 0; i < n; i++) {
      var a = slots[i] * Math.PI / 180;
      atoms.push({ el: outer, x: 1.3 * Math.cos(a), y: -1.3 * Math.sin(a), lone: 3 });
      bonds.push({ a: 0, b: i + 1, order: 1 });
    }
    return { atoms: atoms, bonds: bonds, bracket: !!charge, charge: charge, scale: scale || 42 };
  }
  var MOLS = {
    ethane: function () { return { atoms: [{ el: 'C', x: -0.65, y: 0 }, { el: 'C', x: 0.65, y: 0 }, { el: 'H', x: -0.65, y: -1.05 }, { el: 'H', x: -1.7, y: 0 }, { el: 'H', x: -0.65, y: 1.05 }, { el: 'H', x: 0.65, y: -1.05 }, { el: 'H', x: 1.7, y: 0 }, { el: 'H', x: 0.65, y: 1.05 }],
      bonds: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 1, b: 5 }, { a: 1, b: 6 }, { a: 1, b: 7 }] }; },
    ethene: function () { return { atoms: [{ el: 'C', x: -0.65, y: 0 }, { el: 'C', x: 0.65, y: 0 }, { el: 'H', x: -1.25, y: -0.92 }, { el: 'H', x: -1.25, y: 0.92 }, { el: 'H', x: 1.25, y: -0.92 }, { el: 'H', x: 1.25, y: 0.92 }],
      bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 5 }] }; },
    ethyne: function () { return { atoms: [{ el: 'H', x: -1.8, y: 0 }, { el: 'C', x: -0.68, y: 0 }, { el: 'C', x: 0.68, y: 0 }, { el: 'H', x: 1.8, y: 0 }],
      bonds: [{ a: 0, b: 1 }, { a: 1, b: 2, order: 3 }, { a: 2, b: 3 }] }; },
    co2: function () { return lin3(['O', 'C', 'O'], [2, 2], [2, 0, 2]); },
    hcn: function () { return { atoms: [{ el: 'H', x: -1.12, y: 0 }, { el: 'C', x: 0, y: 0 }, { el: 'N', x: 1.32, y: 0, lone: 1 }], bonds: [{ a: 0, b: 1 }, { a: 1, b: 2, order: 3 }] }; },
    methanal: function () { return trig('C', ['O', 'H', 'H'], 0); },
    benzene: function () { return benzene(0); },
    nh3: function () { return { atoms: [{ el: 'N', x: 0, y: 0, lone: 1 }, { el: 'H', x: -1.1, y: 0.45 }, { el: 'H', x: 0, y: 1.15 }, { el: 'H', x: 1.1, y: 0.45 }], bonds: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }] }; },
    h2o: function () { return { atoms: [{ el: 'O', x: 0, y: 0, lone: 2 }, { el: 'H', x: -0.95, y: 0.62 }, { el: 'H', x: 0.95, y: 0.62 }], bonds: [{ a: 0, b: 1 }, { a: 0, b: 2 }] }; },
    nh4: function () { var P = [[-1.15, 0], [1.15, 0], [0, 1.15], [0, -1.15]], s = { atoms: [{ el: 'N', x: 0, y: 0 }], bonds: [], bracket: true, charge: '+' };
      P.forEach(function (p, i) { s.atoms.push({ el: 'H', x: p[0], y: p[1] }); s.bonds.push({ a: 0, b: i + 1 }); }); return s; },
    ethanoic: function () { return { atoms: [{ el: 'C', x: -1.3, y: 0 }, { el: 'C', x: 0, y: 0 }, { el: 'O', x: 0.2, y: -1.3, lone: 2 }, { el: 'O', x: 1.25, y: 0.55, lone: 2 }, { el: 'H', x: 2.3, y: 0.25 },
      { el: 'H', x: -1.3, y: -1.05 }, { el: 'H', x: -2.35, y: 0 }, { el: 'H', x: -1.3, y: 1.05 }],
      bonds: [{ a: 0, b: 1 }, { a: 1, b: 2, order: 2 }, { a: 1, b: 3 }, { a: 3, b: 4 }, { a: 0, b: 5 }, { a: 0, b: 6 }, { a: 0, b: 7 }] }; },
    ethanoate: function (k) { return { atoms: [{ el: 'C', x: -1.3, y: 0 }, { el: 'C', x: 0, y: 0 }, { el: 'O', x: 0.75, y: -1.1, lone: k === 0 ? 2 : 3 }, { el: 'O', x: 0.75, y: 1.1, lone: k === 0 ? 3 : 2 },
      { el: 'H', x: -1.3, y: -1.05 }, { el: 'H', x: -2.35, y: 0 }, { el: 'H', x: -1.3, y: 1.05 }],
      bonds: [{ a: 0, b: 1 }, { a: 1, b: 2, order: k === 0 ? 2 : 1 }, { a: 1, b: 3, order: k === 0 ? 1 : 2 }, { a: 0, b: 4 }, { a: 0, b: 5 }, { a: 0, b: 6 }], bracket: true, charge: '-', scale: 38 }; }
  };
  // exposed read-only for the page's checking script (no new global: it hangs off the widget registry namespace)
  S1.widgets._s22h = { fcParts: fcParts, trig: trig, bent: bent, lin3: lin3, tetra: tetra, benzene: benzene, MOLS: MOLS, bondSum: bondSum, neighbours: neighbours };

  /* ---------- delocalized picture (local SVG: mol.js has no partial-bond style) -- */
  function drawDeloc(host, s, deloc, label, ring) {
    var S = s.scale || 46, pad = 30, minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    var pts = s.atoms.map(function (a) { var p = { x: a.x * S, y: a.y * S }; minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); return p; });
    var bx = s.bracket ? 16 : 0, extra = s.bracket && s.charge ? 30 : 0;
    var x0 = minX - pad - bx, y0 = minY - pad - (s.bracket ? 10 : 0), W = maxX - minX + 2 * pad + 2 * bx + extra, H = maxY - minY + 2 * pad + (s.bracket ? 14 : 0);
    host.innerHTML = ''; host.classList.add('mol'); host.setAttribute('data-i18n', 'off');
    var svg = svgEl('svg', { viewBox: [x0, y0, W, H].join(' '), width: W, height: H, role: 'img', 'aria-label': label, class: 'mol__svg' }, host);
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    s.bonds.forEach(function (b, bi) {
      var p = pts[b.a], q = pts[b.b], ang = Math.atan2(q.y - p.y, q.x - p.x), ux = Math.cos(ang), uy = Math.sin(ang), nx = -uy, ny = ux, c = 12;
      var isD = deloc.indexOf(bi) > -1 && !ring, o = isD ? 3.2 : 0;
      svgEl('line', { x1: p.x + ux * c - nx * o, y1: p.y + uy * c - ny * o, x2: q.x - ux * c - nx * o, y2: q.y - uy * c - ny * o, style: 'stroke:' + INK + ';stroke-width:1.8;stroke-linecap:round' }, svg);
      if (isD) svgEl('line', { x1: p.x + ux * c + nx * o, y1: p.y + uy * c + ny * o, x2: q.x - ux * c + nx * o, y2: q.y - uy * c + ny * o, style: 'stroke:' + ACC + ';stroke-width:2;stroke-dasharray:4 4' }, svg);
    });
    if (ring) svgEl('circle', { cx: 0, cy: 0, r: ring * S, style: 'fill:none;stroke:' + ACC + ';stroke-width:2;stroke-dasharray:5 4' }, svg);
    s.atoms.forEach(function (a, i) {
      svgEl('text', { x: pts[i].x, y: pts[i].y, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:var(--font-body);font-size:19px;font-weight:700' }, svg, a.el);
    });
    if (s.bracket) {
      var L = minX - pad - 6, R = maxX + pad + 6, T = minY - pad + 2, B = maxY + pad - 2, st = 'fill:none;stroke:' + INK + ';stroke-width:1.8';
      svgEl('path', { d: 'M' + (L + 8) + ' ' + T + ' H' + L + ' V' + B + ' H' + (L + 8), style: st }, svg);
      svgEl('path', { d: 'M' + (R - 8) + ' ' + T + ' H' + R + ' V' + B + ' H' + (R - 8), style: st }, svg);
      if (s.charge) svgEl('text', { x: R + 5, y: T + 6, style: 'fill:' + INK + ';font-family:var(--font-body);font-size:18px;font-weight:700' }, svg, String(s.charge).replace(/-/g, MINUS));
    }
  }

  /* ---------- static figures: <div data-s22h-fig="name"></div> ------------------- */
  function arrowSpan(sym) { return el('span', { class: 's22h-arrow', 'aria-hidden': 'true', text: sym }); }
  var FIGS = {
    'no2-res': function (host) {
      [bent('N', 'O', [2, 1], '-'), bent('N', 'O', [1, 2], '-')].forEach(function (s, i) {
        if (i) host.appendChild(arrowSpan('↔'));
        var d = el('div'); host.appendChild(d); s = withCharges(s); s.scale = 40;
        s.label = i ? t('Lewis formula of the nitrite ion with the double bond on the right') : t('Lewis formula of the nitrite ion with the double bond on the left');
        M.lewis(d, s);
      });
    },
    'scn-abc': function (host) {
      var list = [lin3(['N', 'C', 'S'], [2, 2], [2, 0, 2], '-'), lin3(['N', 'C', 'S'], [3, 1], [1, 0, 3], '-'), lin3(['N', 'C', 'S'], [1, 3], [3, 0, 1], '-')];
      var labels = [t('Structure A of the thiocyanate ion: two double bonds'), t('Structure B of the thiocyanate ion: triple bond to nitrogen, single bond to sulfur'), t('Structure C of the thiocyanate ion: single bond to nitrogen, triple bond to sulfur')];
      list.forEach(function (s, i) {
        var d = el('div'), cell = el('div', { class: 's22h-alt' }, [el('p', { class: 's22h-alt__name', text: 'ABC'[i] }), d]);
        host.appendChild(cell); s.scale = 40; s.label = labels[i]; M.lewis(d, s);
      });
    },
    'sf4': function (host) { var s = radial('S', 'F', 4, [0, 90, 180, 270], [45]); s.label = t('Lewis formula of sulfur tetrafluoride: four S–F bonds and one lone pair on sulfur'); M.lewis(host, s); },
    'icl4': function (host) { var s = radial('I', 'Cl', 4, [0, 90, 180, 270], [45, 225], '-'); s.label = t('Lewis formula of the tetrachloroiodate ion: four I–Cl bonds and two lone pairs on iodine'); M.lewis(host, s); },
    'so4-ab': function (host) {
      [tetra('S', [], '2-'), tetra('S', [2, 3], '2-')].forEach(function (s, i) {
        var d = el('div'), cell = el('div', { class: 's22h-alt' }, [el('p', { class: 's22h-alt__name', text: 'AB'[i] }), d]);
        host.appendChild(cell); s = withCharges(s); s.scale = 40;
        s.label = i ? t('Sulfate ion drawn with two double bonds: formal charge 0 on sulfur') : t('Sulfate ion drawn with four single bonds: formal charge +2 on sulfur');
        M.lewis(d, s);
      });
    },
    'propenoic': function (host) { M.structural(host, { chain: ['C', 'C', 'C', 'O'], bonds: [2, 1, 1], subs: { 2: ['=O'] }, label: t('Full structural formula of propenoic acid, CH2=CH–COOH') }); },
    'ethanoic': function (host) { var s = MOLS.ethanoic(); s.label = t('Lewis formula of ethanoic acid, with two lone pairs on each oxygen atom'); M.lewis(host, s); },
    'ethanoate-res': function (host) {
      [0, 1].forEach(function (k) {
        if (k) host.appendChild(arrowSpan('↔'));
        var d = el('div'); host.appendChild(d); var s = withCharges(MOLS.ethanoate(k)); s.scale = 38;
        s.label = k ? t('Lewis formula of the ethanoate ion with the double bond to the lower oxygen') : t('Lewis formula of the ethanoate ion with the double bond to the upper oxygen');
        M.lewis(d, s);
      });
    },
    'triple': function (host) {
      // one sigma and two pi bonds in a triple bond, as a labelled sketch
      var svg = svgEl('svg', { viewBox: '0 0 420 150', width: 420, height: 150, role: 'img', class: 'mol__svg', 'aria-label': t('Three sketches: a single bond is one sigma bond; a double bond is one sigma and one pi bond; a triple bond is one sigma and two pi bonds') }, host);
      svg.style.maxWidth = '100%'; svg.style.height = 'auto';
      [['C', 'C', 1], ['C', 'C', 2], ['N', 'N', 3]].forEach(function (r, i) {
        var x = 70 + i * 140, y = 52, st = 'fill:' + INK + ';font-family:var(--font-body);font-size:19px;font-weight:700';
        svgEl('text', { x: x - 34, y: y, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: st }, svg, r[0]);
        svgEl('text', { x: x + 34, y: y, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: st }, svg, r[1]);
        var offs = r[2] === 1 ? [0] : r[2] === 2 ? [-4, 4] : [-7, 0, 7];
        offs.forEach(function (o, j) {
          var sigma = (r[2] === 2 ? j === 0 : o === 0);
          svgEl('line', { x1: x - 20, y1: y + o, x2: x + 20, y2: y + o, style: 'stroke:' + (sigma ? INK : ACC) + ';stroke-width:2.2' + (sigma ? '' : ';stroke-dasharray:5 3') }, svg);
        });
        var lab = 'fill:' + INK2 + ';font-family:var(--font-mono);font-size:13px';
        svgEl('text', { x: x, y: 100, 'text-anchor': 'middle', style: lab }, svg, r[2] === 1 ? '1 σ' : r[2] === 2 ? '1 σ + 1 π' : '1 σ + 2 π');
        svgEl('text', { x: x, y: 122, 'text-anchor': 'middle', style: 'fill:' + INK2 + ';font-family:var(--font-body);font-size:13px' }, svg, r[2] === 1 ? t('single bond') : r[2] === 2 ? t('double bond') : t('triple bond'));
      });
    }
  };
  function renderFigs(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll('[data-s22h-fig]'), function (host) {
      var f = FIGS[host.getAttribute('data-s22h-fig')];
      if (!f) return;
      host.innerHTML = ''; host.setAttribute('data-i18n', 'off'); host.classList.add('s22h-figrow');
      f(host);
    });
  }
  S1.ready(function () { renderFigs(); });
  if (S1.i18n && S1.i18n.onChange) S1.i18n.onChange(function () { renderFigs(); });

  /* ==========================================================================
     s2-2h.resonance — contributing structures, then the delocalized picture
     ========================================================================== */
  S1.widgets.register('s2-2h.resonance', function (w) {
    var DATA = [
      { id: 'co3', f: 'CO3^2-', name: t('carbonate ion'), forms: [0, 1, 2].map(function (k) { return trig('C', ['O', 'O', 'O'], k, '2-'); }), deloc: [0, 1, 2],
        single: ['C–O', 143], dbl: ['C=O', 122], real: 129, bonds: t('three carbon–oxygen bonds'), pi: t('The π electrons are spread over the carbon atom and all three oxygen atoms.') },
      { id: 'no3', f: 'NO3^-', name: t('nitrate ion'), forms: [0, 1, 2].map(function (k) { return trig('N', ['O', 'O', 'O'], k, '-'); }), deloc: [0, 1, 2],
        single: ['N–O', 136], dbl: ['N=O', 114], real: 124, bonds: t('three nitrogen–oxygen bonds'), pi: t('The π electrons are spread over the nitrogen atom and all three oxygen atoms.') },
      { id: 'o3', f: 'O3', name: t('ozone'), forms: [bent('O', 'O', [2, 1]), bent('O', 'O', [1, 2])], deloc: [0, 1],
        single: ['O–O', 148], dbl: ['O=O', 121], real: 128, bonds: t('two oxygen–oxygen bonds'), pi: t('The π electrons are spread over all three oxygen atoms.') },
      { id: 'hcoo', f: 'HCOO^-', name: t('methanoate ion'), forms: [trig('C', ['H', 'O', 'O'], 1, '-'), trig('C', ['H', 'O', 'O'], 2, '-')], deloc: [1, 2],
        single: ['C–O', 143], dbl: ['C=O', 122], real: 127, bonds: t('two carbon–oxygen bonds'), pi: t('The π electrons are spread over the carbon atom and both oxygen atoms.') },
      { id: 'c6h6', f: 'C6H6', name: t('benzene'), forms: [benzene(0), benzene(1)], deloc: [], ring: 0.72,
        single: ['C–C', 154], dbl: ['C=C', 134], real: 140, bonds: t('six carbon–carbon bonds'), pi: t('Six π electrons are spread over all six carbon atoms, above and below the ring.') }
    ];
    var cur = DATA[0], step = 0;
    var sel = w.select({ label: t('Species'), value: cur.id, options: DATA.map(function (d) { return { value: d.id, label: uni(d.f) + ' ' + d.name }; }),
      onChange: function (v) { cur = DATA.filter(function (d) { return d.id === v; })[0]; step = 0; update(); } });
    var prev = w.button(t('Previous'), function () { step = Math.max(0, step - 1); update(); });
    var next = w.button(t('Next'), function () { step = Math.min(cur.forms.length, step + 1); update(); }, { primary: true });
    var draw = el('div', { class: 's22h-draw' }), scale = el('div', { class: 's22h-scale' });
    var note = msgBox(w.stage);
    w.stage.insertBefore(draw, note.el); w.stage.insertBefore(scale, note.el);
    var setStep = w.readoutItem(t('Showing'), { text: true });
    var setPred = w.readoutItem(t('Data booklet bond lengths'), { text: true });
    var setReal = w.readoutItem(t('Measured bond length'), { text: true });

    function drawScale(showReal) {
      scale.innerHTML = '';
      var lo = 105, hi = 165, W = 560, X = function (v) { return 30 + (v - lo) / (hi - lo) * (W - 60); };
      var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' 92', role: 'img', 'aria-label': showReal
        ? t('Bond length scale: double bond {d} pm, single bond {s} pm, measured {r} pm', { d: cur.dbl[1], s: cur.single[1], r: cur.real })
        : t('Bond length scale: double bond {d} pm, single bond {s} pm', { d: cur.dbl[1], s: cur.single[1] }) }, scale);
      svg.style.width = '100%'; svg.style.maxWidth = W + 'px'; svg.style.height = 'auto';
      var lab = 'fill:' + INK2 + ';font-family:var(--font-mono);font-size:13px';
      svgEl('line', { x1: X(lo), y1: 50, x2: X(hi), y2: 50, style: 'stroke:' + INK2 + ';stroke-width:1.5' }, svg);
      for (var v = 110; v <= 160; v += 10) { svgEl('line', { x1: X(v), y1: 46, x2: X(v), y2: 54, style: 'stroke:' + INK2 + ';stroke-width:1' }, svg); svgEl('text', { x: X(v), y: 70, 'text-anchor': 'middle', style: lab }, svg, String(v)); }
      svgEl('text', { x: X(hi), y: 88, 'text-anchor': 'end', style: lab }, svg, t('bond length / pm'));
      [cur.dbl, cur.single].forEach(function (b) {
        svgEl('line', { x1: X(b[1]), y1: 30, x2: X(b[1]), y2: 50, style: 'stroke:' + INK + ';stroke-width:2.2' }, svg);
        svgEl('text', { x: X(b[1]), y: 22, 'text-anchor': 'middle', style: 'fill:' + INK + ';font-family:var(--font-mono);font-size:13px;font-weight:600' }, svg, b[0] + ' ' + b[1]);
      });
      if (showReal) {
        var x = X(cur.real);
        svgEl('path', { d: 'M' + x + ' 50 L' + (x - 7) + ' 36 L' + (x + 7) + ' 36 Z', style: 'fill:' + ACC }, svg);
        svgEl('text', { x: x, y: 88, 'text-anchor': 'middle', style: 'fill:var(--accent-ink);font-family:var(--font-mono);font-size:13px;font-weight:600' }, svg, t('measured {r}', { r: cur.real }));
      }
    }
    function update() {
      var n = cur.forms.length, last = step === n;
      prev.disabled = step === 0; next.disabled = last;
      if (!last) {
        var s = withCharges(cur.forms[step]);
        s.label = t('Resonance structure {k} of {n} of the {name}', { k: step + 1, n: n, name: cur.name });
        M.lewis(draw, s);
        setStep(t('Resonance structure {k} of {n}', { k: step + 1, n: n }));
        setReal(t('Step to the end to see it'));
        note.show('info', t('This one structure predicts two different bond lengths: {d} pm for the double bond and {s} pm for each single bond. Press Next to move the double bond.', { d: cur.dbl[1], s: cur.single[1] }));
      } else {
        drawDeloc(draw, cur.forms[0], cur.deloc, t('Delocalized picture of the {name}: all the {bonds} are the same', { name: cur.name, bonds: cur.bonds }), cur.ring);
        setStep(t('Delocalized picture'));
        setReal(t('All {bonds}: about {r} pm', { bonds: cur.bonds, r: cur.real }));
        note.show('ok', t('The real particle is none of the separate structures. All the {bonds} are equal, at about {r} pm. That is between the single bond ({s} pm) and the double bond ({d} pm). {pi} This spreading out is delocalization. (The dashed lines are not a Lewis formula: no lone pairs are shown.)',
          { bonds: cur.bonds, r: cur.real, s: cur.single[1], d: cur.dbl[1], pi: cur.pi }));
      }
      setPred(cur.single[0] + ' ' + cur.single[1] + ' pm, ' + cur.dbl[0] + ' ' + cur.dbl[1] + ' pm');
      drawScale(last);
    }
    update();
  });

  /* ==========================================================================
     s2-2h.hydro — enthalpy of hydrogenation of benzene (to scale)
     ========================================================================== */
  S1.widgets.register('s2-2h.hydro', function (w) {
    var svg = w.svg('0 0 600 300', { label: t('Enthalpy level diagram. Cyclohexane is the lowest level. Real benzene plus hydrogen is 208 kJ per mole above it. The model with three separate double bonds is predicted to be 360 kJ per mole above it, which is 152 kJ per mole higher than real benzene.') });
    var k = 200 / 360, y0 = 262, yB = y0 - 208 * k, yK = y0 - 360 * k;
    var lab = 'fill:' + INK + ';font-family:var(--font-body);font-size:14px', num = 'fill:' + INK + ';font-family:var(--font-mono);font-size:14px;font-weight:600';
    function level(x1, x2, y, text, anchorX, dash) {
      svgEl('line', { x1: x1, y1: y, x2: x2, y2: y, style: 'stroke:' + INK + ';stroke-width:2.2' + (dash ? ';stroke-dasharray:6 4' : '') }, svg);
      svgEl('text', { x: anchorX, y: y - 8, 'text-anchor': 'middle', style: lab }, svg, text);
    }
    function arrow(x, ya, yb, text, right) {
      svgEl('line', { x1: x, y1: ya, x2: x, y2: yb - 9, style: 'stroke:' + ACC + ';stroke-width:2' }, svg);
      svgEl('path', { d: 'M' + x + ' ' + yb + ' L' + (x - 5.5) + ' ' + (yb - 11) + ' L' + (x + 5.5) + ' ' + (yb - 11) + ' Z', style: 'fill:' + ACC }, svg);
      svgEl('text', { x: x + (right ? 9 : -9), y: (ya + yb) / 2 + 5, 'text-anchor': right ? 'start' : 'end', style: num }, svg, text);
    }
    level(60, 540, y0, t('cyclohexane, C₆H₁₂'), 300);
    level(330, 540, yB, t('real benzene + 3H₂'), 435);
    level(60, 270, yK, t('three C=C model + 3H₂ (predicted)'), 165, true);
    arrow(120, yK, y0, MINUS + '360', true);
    arrow(480, yB, y0, MINUS + '208', false);
    // the gap
    svgEl('line', { x1: 270, y1: yK, x2: 330, y2: yK, style: 'stroke:' + INK2 + ';stroke-width:1;stroke-dasharray:3 3' }, svg);
    svgEl('line', { x1: 300, y1: yK + 4, x2: 300, y2: yB - 4, style: 'stroke:' + INK2 + ';stroke-width:1.5' }, svg);
    svgEl('text', { x: 308, y: (yK + yB) / 2 + 5, style: 'fill:' + INK2 + ';font-family:var(--font-mono);font-size:14px' }, svg, '152');
    svgEl('text', { x: 16, y: 20, style: 'fill:' + INK2 + ';font-family:var(--font-body);font-size:13px' }, svg, t('Enthalpy (kJ mol⁻¹, to scale)'));
    w.readoutItem(t('Cyclohexene + H₂'))(MINUS + '120 kJ mol<sup>' + MINUS + '1</sup>');
    w.readoutItem(t('Predicted for three C=C'))('3 × (' + MINUS + '120) = ' + MINUS + '360 kJ mol<sup>' + MINUS + '1</sup>');
    w.readoutItem(t('Measured for benzene'))(MINUS + '208 kJ mol<sup>' + MINUS + '1</sup>');
    w.readoutItem(t('Benzene is more stable by'))('152 kJ mol<sup>' + MINUS + '1</sup>');
  });

  /* ==========================================================================
     s2-2h.benzene — evidence board
     ========================================================================== */
  S1.widgets.register('s2-2h.benzene', function (w) {
    var CARDS = [
      { a: 'p', text: t('All six carbon–carbon bonds in benzene have the same length, about 140 pm.'), why: t('Physical evidence. Alternating single and double bonds would give two different lengths.') },
      { a: 'p', text: t('The carbon–carbon bond length in benzene is between C–C (154 pm) and C=C (134 pm).'), why: t('Physical evidence. Each bond is between a single and a double bond.') },
      { a: 'c', text: t('Benzene reacts by substitution, not by addition.'), why: t('Chemical evidence. Real C=C double bonds react by addition.') },
      { a: 'n', text: t('Benzene reacts with hydrogen to form cyclohexane, C₆H₁₂.'), why: t('This fits both models. A molecule with three C=C bonds would also add three H₂. It does not tell the models apart.') },
      { a: 'c', text: t('The enthalpy of hydrogenation of benzene (−208 kJ mol⁻¹) is less exothermic than three times that of cyclohexene (−360 kJ mol⁻¹).'), why: t('Chemical (energy) evidence. Benzene is more stable than a molecule with three separate C=C bonds.') },
      { a: 'p', text: t('Benzene is a planar, regular hexagon. All bond angles are 120°.'), why: t('Physical evidence. A ring with alternating short and long bonds would not be a regular hexagon.') },
      { a: 'c', text: t('Benzene does not readily decolourize bromine water.'), why: t('Chemical evidence. Alkenes decolourize bromine water quickly by addition.') },
      { a: 'n', text: t('The molecular formula of benzene is C₆H₆, so it is unsaturated.'), why: t('This fits both models. Both drawings have the formula C₆H₆.') },
      { a: 'p', text: t('Only one compound with the name 1,2-dibromobenzene exists.'), why: t('Structural (physical) evidence. Alternating bonds would give two different 1,2-isomers: one with a single bond between the two C–Br carbons, one with a double bond.') }
    ];
    var OPTS = [{ value: 'p', label: t('Physical') }, { value: 'c', label: t('Chemical') }, { value: 'n', label: t('Fits both models') }];
    var list = el('div', { class: 's22h-cards' }), rows = [];
    w.stage.appendChild(list);
    var setScore = w.readoutItem(t('Sorted correctly'));
    CARDS.forEach(function (c, i) {
      var card = el('div', { class: 's22h-card' }), fb = el('p', { class: 's22h-card__fb', hidden: true });
      card.appendChild(el('p', { class: 's22h-card__text', html: '<span class="s22h-card__n">' + (i + 1) + '</span> ' + c.text }));
      var s = seg(card, t('Card {n} is', { n: i + 1 }), OPTS, null, function () { card.removeAttribute('data-tone'); fb.hidden = true; });
      s.el.querySelector('.control__label').classList.add('sr-only');
      card.appendChild(fb); list.appendChild(card);
      rows.push({ card: card, seg: s, fb: fb, c: c });
    });
    var note = msgBox(w.stage);
    w.button(t('Check my sorting'), function () {
      var right = 0, done = 0;
      rows.forEach(function (r) {
        if (r.seg.value == null) { r.card.removeAttribute('data-tone'); r.fb.hidden = true; return; }
        done++;
        var ok = r.seg.value === r.c.a; if (ok) right++;
        r.card.setAttribute('data-tone', ok ? 'ok' : 'bad');
        r.fb.hidden = false; r.fb.innerHTML = '<strong>' + (ok ? t('Correct.') : t('Not this one.')) + '</strong> ' + r.c.why;
      });
      setScore(right + ' / ' + CARDS.length);
      if (done < CARDS.length) note.show('warn', t('You have sorted {d} of {n} cards. Sort the rest, then check again.', { d: done, n: CARDS.length }));
      else if (right === CARDS.length) note.show('ok', t('All correct. In an exam, give one physical and one chemical piece of evidence. Equal bond lengths and substitution instead of addition are the safest pair.'));
      else note.show('bad', t('{r} of {n} correct. Read the notes on the cards marked wrong and change them.', { r: right, n: CARDS.length }));
    }, { primary: true });
    w.button(t('Start again'), function () {
      rows.forEach(function (r) { r.seg.set(null); r.card.removeAttribute('data-tone'); r.fb.hidden = true; });
      setScore('0 / ' + CARDS.length); note.hide();
    });
    setScore('0 / ' + CARDS.length);
  });

  /* ==========================================================================
     s2-2h.vsepr — five and six electron domains
     ========================================================================== */
  function shapeName(key) {
    switch (key) {
      case '5-0': return t('trigonal bipyramidal');
      case '5-1': return t('seesaw');
      case '5-2': return t('T-shaped');
      case '5-3': return t('linear');
      case '6-0': return t('octahedral');
      case '6-1': return t('square pyramidal');
      default: return t('square planar');
    }
  }
  S1.widgets.register('s2-2h.vsepr', function (w) {
    var R3 = Math.sqrt(3);
    var DATA = [
      { id: 'PCl5', central: 'P', outer: 'Cl', d: 5, lp: 0, polar: 'no', count: t('P has 5 valence electrons. All 5 are used in the five P–Cl bonds. No lone pairs.'), angle: t('90° and 120° (and 180° between the two axial bonds)') },
      { id: 'SF4', central: 'S', outer: 'F', d: 5, lp: 1, polar: 'yes', count: t('S has 6 valence electrons. 4 are used in the four S–F bonds. 2 are left: one lone pair.'), angle: t('less than 90° and less than 120° (measured: about 102° and about 173°)'),
        alt: t('Wrong position, for comparison: an axial lone pair is at 90° to three bonding pairs. In the real molecule the lone pair is equatorial, at 90° to only two bonding pairs. Less repulsion.') },
      { id: 'ClF3', central: 'Cl', outer: 'F', d: 5, lp: 2, polar: 'yes', count: t('Cl has 7 valence electrons. 3 are used in the three Cl–F bonds. 4 are left: two lone pairs.'), angle: t('less than 90° (measured: about 87.5°)'),
        alt: t('Wrong position, for comparison: two axial lone pairs are each at 90° to three bonding pairs. In the real molecule both lone pairs are equatorial. Less repulsion.') },
      { id: 'XeF2', central: 'Xe', outer: 'F', d: 5, lp: 3, polar: 'no', count: t('Xe has 8 valence electrons. 2 are used in the two Xe–F bonds. 6 are left: three lone pairs.'), angle: '180°' },
      { id: 'I3^-', central: 'I', outer: 'I', d: 5, lp: 3, polar: 'ion', count: t('The central I has 7 valence electrons, plus 1 for the negative charge: 8. 2 are used in the two I–I bonds. 6 are left: three lone pairs.'), angle: '180°' },
      { id: 'SF6', central: 'S', outer: 'F', d: 6, lp: 0, polar: 'no', count: t('S has 6 valence electrons. All 6 are used in the six S–F bonds. No lone pairs.'), angle: t('90° (and 180° between opposite bonds)') },
      { id: 'BrF5', central: 'Br', outer: 'F', d: 6, lp: 1, polar: 'yes', count: t('Br has 7 valence electrons. 5 are used in the five Br–F bonds. 2 are left: one lone pair.'), angle: t('less than 90° (measured: about 85°)') },
      { id: 'XeF4', central: 'Xe', outer: 'F', d: 6, lp: 2, polar: 'no', count: t('Xe has 8 valence electrons. 4 are used in the four Xe–F bonds. 4 are left: two lone pairs.'), angle: t('90° (and 180° between opposite bonds)'),
        alt: t('Wrong position, for comparison: lone pairs next to each other are only 90° apart. In the real molecule they are opposite each other, 180° apart. Less repulsion.') }
    ];
    var SHAPE_KEYS = ['5-0', '5-1', '5-2', '5-3', '6-0', '6-1', '6-2'];
    var cur = DATA[1], mode = 'predict', answered = false, altOn = false, fb = null;
    w.select({ label: t('Species'), value: cur.id, options: DATA.map(function (d) { return { value: d.id, label: uni(d.id) }; }),
      onChange: function (v) { cur = DATA.filter(function (d) { return d.id === v; })[0]; answered = false; altOn = false; fb = null; update(); } });
    seg(w.controls, t('Mode'), [{ value: 'predict', label: t('Predict first') }, { value: 'explore', label: t('Explore') }], mode, function (v) { mode = v; answered = false; altOn = false; fb = null; update(); });
    var altBtn = w.button(t('Try the other lone pair position'), function () { altOn = !altOn; update(); });
    var ask = el('div', { class: 's22h-ask' }), box = el('div', { class: 's22h-view' }), note = msgBox(w.stage);
    w.stage.insertBefore(ask, note.el); w.stage.insertBefore(box, note.el);
    var view = null;
    w.onCleanup(function () { if (view) view.spin(false); });
    var setDom = w.readoutItem(t('Electron domains'), { text: true });
    var setEdg = w.readoutItem(t('Electron domain geometry'), { text: true });
    var setMg = w.readoutItem(t('Molecular geometry'), { text: true });
    var setAng = w.readoutItem(t('Bond angles'), { text: true });
    var setPol = w.readoutItem(t('Polarity'), { text: true });

    function altSpec(d) {
      var eq = [[1, 0, 0], [-0.5, 0, R3 / 2], [-0.5, 0, -R3 / 2]], ax = [[0, 1, 0], [0, -1, 0]], lone, pos, L = 1.5;
      if (d.d === 5 && d.lp === 1) { lone = [ax[0]]; pos = eq.concat([ax[1]]); }
      else if (d.d === 5) { lone = ax; pos = eq; }
      else { lone = [[0, 1, 0], [1, 0, 0]]; pos = [[0, -1, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]; }
      var atoms = [{ el: d.central, x: 0, y: 0, z: 0 }], bonds = [];
      pos.forEach(function (p, i) { atoms.push({ el: d.outer, x: p[0] * L, y: p[1] * L, z: p[2] * L }); bonds.push({ a: 0, b: i + 1, order: 1 }); });
      return { atoms: atoms, bonds: bonds, lonePairs: lone.map(function (p) { return { on: 0, dir: p }; }) };
    }
    function update() {
      var key = cur.d + '-' + cur.lp, show = mode === 'explore' || answered;
      var f = S1.chem.formula(cur.id);
      altBtn.hidden = !(show && cur.alt);
      altBtn.setAttribute('aria-pressed', String(altOn));
      ask.innerHTML = '';
      ask.appendChild(el('p', { class: 's22h-ask__count', html: '<strong class="chem">' + f + '</strong>: ' + cur.count }));
      if (mode === 'predict' && !answered) {
        ask.appendChild(el('p', { class: 's22h-ask__q', html: t('{b} bonding domains and {l} lone pairs. Predict the molecular geometry.', { b: cur.d - cur.lp, l: cur.lp }) }));
        var row = el('div', { class: 'btn-row' });
        SHAPE_KEYS.forEach(function (k) {
          row.appendChild(el('button', { class: 'btn btn--small', type: 'button', text: shapeName(k), onclick: function () {
            answered = true;
            fb = k === key ? ['ok', t('Correct. {f} is {shape}.', { f: f, shape: shapeName(key) })]
              : ['bad', t('Not quite. You chose {yours}. With {b} bonding domains and {l} lone pairs out of {d} domains, {f} is {shape}. Turn the model to see why.', { yours: shapeName(k), b: cur.d - cur.lp, l: cur.lp, d: cur.d, f: f, shape: shapeName(key) })];
            update();
          } }));
        });
        ask.appendChild(row);
        box.hidden = true; note.hide();
        setDom(t('{d} ({b} bonding + {l} lone pairs)', { d: cur.d, b: cur.d - cur.lp, l: cur.lp }));
        setEdg('?'); setMg('?'); setAng('?'); setPol('?');
        return;
      }
      box.hidden = false;
      var spec = M.vsepr({ domains: cur.d, lonePairs: cur.lp, central: cur.central, outer: cur.outer });
      if (altOn && cur.alt) { spec = altSpec(cur); spec.label = t('{f} drawn with the lone pairs in the wrong position, for comparison', { f: uni(cur.id) }); }
      else spec.label = t('Ball-and-stick model of {f}: {shape}', { f: uni(cur.id), shape: shapeName(key) });
      spec.height = 290;
      if (view) view.setSpec(spec); else view = M.viewer3d(box, spec);
      setDom(t('{d} ({b} bonding + {l} lone pairs)', { d: cur.d, b: cur.d - cur.lp, l: cur.lp }));
      setEdg(cur.d === 5 ? t('trigonal bipyramidal') : t('octahedral'));
      setMg(shapeName(key));
      setAng(cur.angle);
      setPol(cur.polar === 'yes' ? t('polar: the bond dipoles do not cancel') : cur.polar === 'no' ? t('non-polar: the bond dipoles cancel') : t('an ion: it has an overall charge'));
      if (altOn && cur.alt) note.show('warn', cur.alt);
      else if (fb) note.show(fb[0], fb[1]);
      else note.hide();
    }
    update();
  });

  /* ==========================================================================
     Formal charge: shared structure sets
     ========================================================================== */
  function posName(sym, where) {
    switch (where) {
      case 'l': return t('{el} (left)', { el: sym });
      case 'r': return t('{el} (right)', { el: sym });
      case 't': return t('{el} (top)', { el: sym });
      case 'b': return t('{el} (bottom)', { el: sym });
      case 'c': return t('{el} (centre)', { el: sym });
      case 'bl': return t('{el} (bottom left)', { el: sym });
      case 'br': return t('{el} (bottom right)', { el: sym });
      default: return sym;
    }
  }
  /** Draw a Lewis formula and return per-atom highlight rings (for a selectable drawing). */
  function drawPickable(host, s, onPick) {
    var svg = M.lewis(host, s), S = s.scale || 46, rings = [];
    s.atoms.forEach(function (a, i) {
      var c = svgEl('circle', { cx: a.x * S, cy: a.y * S, r: 17, class: 's22h-pick' }, svg);
      c.addEventListener('click', function () { onPick(i); });
      rings.push(c);
    });
    return function (sel) { rings.forEach(function (c, i) { c.setAttribute('data-on', String(i === sel)); }); };
  }

  /* ==========================================================================
     s2-2h.fc-calc — formal charge, atom by atom
     ========================================================================== */
  S1.widgets.register('s2-2h.fc-calc', function (w) {
    var DATA = [
      { id: 'CO2', s: lin3(['O', 'C', 'O'], [2, 2], [2, 0, 2]), pos: ['l', '', 'r'], total: 0 },
      { id: 'O3', s: bent('O', 'O', [2, 1]), pos: ['c', 'l', 'r'], total: 0 },
      { id: 'NH4^+', s: MOLS.nh4(), pos: ['', 'l', 'r', 'b', 't'], total: 1, only: [0, 1] },
      { id: 'N2O', s: lin3(['N', 'N', 'O'], [3, 1], [1, 0, 3]), pos: ['l', 'c', ''], total: 0 },
      { id: 'SO2', s: bent('S', 'O', [2, 1]), pos: ['', 'l', 'r'], total: 0 },
      { id: 'SO4^2-', s: tetra('S', [], '2-'), pos: ['', 'l', 'r', 'b', 't'], total: -2, only: [0, 1] }
    ];
    var cur = DATA[0], pick = 0, solved = {};
    w.select({ label: t('Lewis formula'), value: cur.id, options: DATA.map(function (d) { return { value: d.id, label: uni(d.id) }; }),
      onChange: function (v) { cur = DATA.filter(function (d) { return d.id === v; })[0]; pick = 0; solved = {}; build(); } });
    var draw = el('div', { class: 's22h-draw' }), atomRow = el('div', { class: 's22h-atomrow' }), form = el('form', { class: 's22h-form', novalidate: true });
    w.stage.appendChild(draw); w.stage.appendChild(atomRow); w.stage.appendChild(form);
    var note = msgBox(w.stage), working = el('div', { class: 's22h-working', hidden: true });
    w.stage.appendChild(working);
    var setFound = w.readoutItem(t('Formal charges found'), { text: true });
    var setSum = w.readoutItem(t('Overall charge of the species'));
    var inputs = {}, setRing = null, atomSeg = null;
    [['V', t('V: valence electrons of the free atom')], ['N', t('N: non-bonding electrons on this atom')], ['B', t('B: bonding electrons around this atom')], ['FC', t('Formal charge = V − N − ½B')]].forEach(function (f) {
      var id = S1.util.uid('fc');
      inputs[f[0]] = el('input', { class: 'input input--num s22h-num', id: id, type: 'text', inputmode: 'text', autocomplete: 'off' });
      form.appendChild(el('div', { class: 's22h-field' }, [el('label', { class: 'field-label', for: id, html: f[1] }), inputs[f[0]]]));
    });
    var btns = el('div', { class: 'btn-row' }, [el('button', { class: 'btn btn--primary btn--small', type: 'submit', text: t('Check') }),
      el('button', { class: 'btn btn--small', type: 'button', text: t('Show the working'), onclick: function () { reveal(true); } })]);
    form.appendChild(btns);
    form.addEventListener('submit', function (e) { e.preventDefault(); check(); });

    function atomName(i) { return posName(cur.s.atoms[i].el, cur.pos[i]); }
    function pickable() { return cur.s.atoms.map(function (a, i) { return i; }).filter(function (i) { return !cur.only || cur.only.indexOf(i) > -1; }); }
    function redraw() {
      var shown = {}; Object.keys(solved).forEach(function (k) { shown[k] = true; });
      var s = withCharges(cur.s, shown);
      s.label = t('Lewis formula of {f}. Choose an atom to find its formal charge.', { f: uni(cur.id) });
      setRing = drawPickable(draw, s, function (i) { select(cur.only && cur.only.indexOf(i) < 0 ? cur.only[1] : i); });
      setRing(pick);
    }
    function workingHtml(i) {
      var p = fcParts(cur.s, i), a = cur.s.atoms[i];
      return '<p>' + t('{atom}: group {g}, so V = {V}. It has {lp} lone pairs, so N = {N}. The bonds around it hold {B} electrons (2 for each line), so B = {B}.', { atom: atomName(i), g: GROUP[a.el], V: p.V, lp: a.lone || 0, N: p.N, B: p.B }) + '</p>' +
        '<div class="worked__math">FC = ' + p.V + ' ' + MINUS + ' ' + p.N + ' ' + MINUS + ' ½(' + p.B + ') = <b>' + signed(p.fc) + '</b></div>';
    }
    function done() {
      var ids = pickable(), all = ids.every(function (i) { return solved[i]; });
      setFound(ids.filter(function (i) { return solved[i]; }).map(function (i) { return atomName(i) + ' ' + signed(fcParts(cur.s, i).fc); }).join(', ') || t('none yet'));
      if (all) {
        var sum = 0; cur.s.atoms.forEach(function (a, i) { sum += fcParts(cur.s, i).fc; });
        note.show('ok', t('All found. Check: the formal charges of all the atoms add up to {sum}. This equals the overall charge of {f}.', { sum: signed(sum), f: S1.chem.formula(cur.id) }) +
          (cur.only ? ' ' + t('(The other outer atoms are the same as the one you worked out.)') : ''));
      }
    }
    function reveal(markSolved) {
      working.hidden = false; working.innerHTML = workingHtml(pick);
      if (markSolved) { solved[pick] = true; redraw(); note.hide(); done(); }
    }
    function check() {
      var p = fcParts(cur.s, pick), wrong = [], vals = {};
      ['V', 'N', 'B', 'FC'].forEach(function (k) {
        var r = S1.chem.parseNumber(inputs[k].value); vals[k] = r ? r.value : null;
        var ok = r && r.value === (k === 'FC' ? p.fc : p[k]);
        inputs[k].setAttribute('aria-invalid', String(!ok));
        if (!ok) wrong.push(k);
      });
      if (!wrong.length) { solved[pick] = true; redraw(); note.show('ok', t('Correct. The formal charge on {atom} is {fc}.', { atom: atomName(pick), fc: signed(p.fc) })); reveal(false); done(); return; }
      var a = cur.s.atoms[pick], hint;
      if (wrong[0] === 'V') hint = t('V is the number of valence electrons in the free atom. {el} is in group {g}.', { el: a.el, g: GROUP[a.el] });
      else if (wrong[0] === 'N') hint = vals.N === (a.lone || 0) ? t('N counts electrons, not pairs. Each lone pair is 2 electrons.') : t('N counts only the dots drawn on this atom: its lone pair electrons.');
      else if (wrong[0] === 'B') hint = vals.B === p.B / 2 ? t('B counts electrons, not bonds. Each line is 2 electrons, so a double bond is 4.') : t('B counts every electron in the bonds touching this atom: 2 for each line.');
      else hint = vals.FC === -p.fc ? t('Check the sign. Start from V, then subtract.') : t('V, N and B are right. Now calculate V − N − ½B. Halve B before you subtract it.');
      note.show('bad', t('Not yet.') + ' ' + hint);
    }
    function select(i) {
      pick = i; if (atomSeg) atomSeg.set(i); if (setRing) setRing(i);
      ['V', 'N', 'B', 'FC'].forEach(function (k) { inputs[k].value = ''; inputs[k].removeAttribute('aria-invalid'); });
      working.hidden = true; note.hide();
      if (solved[i]) reveal(false);
    }
    function build() {
      atomRow.innerHTML = ''; pick = pickable()[0];
      atomSeg = seg(atomRow, t('Atom'), pickable().map(function (i) { return { value: i, label: atomName(i) }; }), pick, select);
      setSum(S1.chem.formula(cur.id) + ': ' + signed(cur.total));
      redraw(); select(pick); done();
    }
    build();
  });

  /* ==========================================================================
     s2-2h.fc-choose — choose the preferred Lewis formula
     ========================================================================== */
  S1.widgets.register('s2-2h.fc-choose', function (w) {
    var SETS = [
      { id: 'CO2', best: 0, alts: [lin3(['O', 'C', 'O'], [2, 2], [2, 0, 2]), lin3(['O', 'C', 'O'], [3, 1], [1, 0, 3])],
        why: t('In A every atom has formal charge 0. B has +1 on one oxygen and −1 on the other. Charges closest to zero win, so A is preferred.') },
      { id: 'N2O', best: 0, alts: [lin3(['N', 'N', 'O'], [3, 1], [1, 0, 3]), lin3(['N', 'N', 'O'], [2, 2], [2, 0, 2]), lin3(['N', 'N', 'O'], [1, 3], [3, 0, 1])],
        why: t('C has the largest charges (−2, +1, +1), so reject it. A and B both have one +1 and one −1. In A the −1 is on oxygen, the more electronegative atom, so A is preferred.') },
      { id: 'SO2', best: 1, alts: [bent('S', 'O', [2, 1]), bent('S', 'O', [2, 2])],
        why: t('A keeps the octet on sulfur but has +1 on S and −1 on one O. In B every atom has formal charge 0, so formal charge prefers B. Sulfur is in period 3, so it can have an expanded octet.') },
      { id: 'SO4^2-', best: 1, alts: [tetra('S', [], '2-'), tetra('S', [2, 3], '2-')],
        why: t('A has +2 on S and −1 on all four O atoms. B has 0 on S and −1 on only two O atoms. B has formal charges closest to zero, so formal charge prefers B. Both add up to −2.') }
    ];
    var cur = SETS[0], show = false;
    w.select({ label: t('Species'), value: cur.id, options: SETS.map(function (d) { return { value: d.id, label: uni(d.id) }; }),
      onChange: function (v) { cur = SETS.filter(function (d) { return d.id === v; })[0]; show = false; build(); } });
    var fcBtn = w.button(t('Show formal charges'), function () { show = !show; build(true); });
    var grid = el('div', { class: 's22h-alts' }), note = msgBox(w.stage);
    w.stage.insertBefore(grid, note.el);
    var setRule = w.readoutItem(t('Rule'), { text: true });
    setRule(t('Prefer formal charges closest to zero. Then put any negative formal charge on the more electronegative atom.'));
    function fcList(s) { return s.atoms.map(function (a, i) { return a.el + ' ' + signed(fcParts(s, i).fc); }).join(', '); }
    function build(keepNote) {
      fcBtn.setAttribute('aria-pressed', String(show));
      grid.innerHTML = ''; if (!keepNote) note.hide();
      cur.alts.forEach(function (s, i) {
        var L = 'ABC'[i], d = el('div'), spec = show ? withCharges(s) : { atoms: s.atoms, bonds: s.bonds, bracket: s.bracket, charge: s.charge };
        spec.scale = 40; spec.label = t('Lewis formula {L} of {f}', { L: L, f: uni(cur.id) });
        var cell = el('div', { class: 's22h-alt' }, [el('p', { class: 's22h-alt__name', text: L }), d]);
        if (show) cell.appendChild(el('p', { class: 's22h-alt__fc mono', text: fcList(s) }));
        cell.appendChild(el('button', { class: 'btn btn--small', type: 'button', text: t('Choose {L}', { L: L }), onclick: function () {
          show = true; build(true);
          if (i === cur.best) note.show('ok', t('Correct: {L} is the preferred Lewis formula.', { L: L }) + ' ' + cur.why);
          else note.show('bad', t('{L} is not the preferred formula.', { L: L }) + ' ' + cur.why);
        } }));
        grid.appendChild(cell);
        M.lewis(d, spec);
      });
    }
    build();
  });

  /* ==========================================================================
     s2-2h.overlap — head-on and sideways overlap of atomic orbitals
     ========================================================================== */
  S1.widgets.register('s2-2h.overlap', function (w) {
    var TYPES = {
      ss: { far: 230, near: 62, a: 's', b: 's', la: '1s', lb: '1s', ex: t('H–H in H₂') },
      sp: { far: 270, near: 112, a: 's', b: 'px', la: '1s', lb: '3p', ex: t('H–Cl in HCl') },
      pp: { far: 320, near: 152, a: 'px', b: 'px', la: '2p', lb: '2p', ex: t('F–F in F₂') },
      pi: { far: 170, near: 34, a: 'py', b: 'py', la: '2p', lb: '2p', ex: t('the second bond in C=C') }
    };
    var type = 'ss', uid = S1.util.uid('ov');
    w.select({ label: t('Orbitals'), value: type, options: [{ value: 'ss', label: t('s and s, head-on') }, { value: 'sp', label: t('s and p, head-on') }, { value: 'pp', label: t('p and p, head-on') }, { value: 'pi', label: t('p and p, sideways') }],
      onChange: function (v) { type = v; draw(); } });
    var sl = w.slider({ label: t('Bring the atoms together'), min: 0, max: 100, step: 5, value: 0, unit: '%', onInput: draw });
    var svg = w.svg('0 0 600 250', { label: t('Two atomic orbitals on a bond axis') });
    var setType = w.readoutItem(t('Overlap'), { text: true }), setBond = w.readoutItem(t('Bond formed'), { text: true }), setDens = w.readoutItem(t('Electron density'), { text: true });
    function shapes(kind, x, y) {
      if (kind === 's') return [{ cx: x, cy: y, rx: 46, ry: 46 }];
      if (kind === 'px') return [{ cx: x - 50, cy: y, rx: 50, ry: 25 }, { cx: x + 50, cy: y, rx: 50, ry: 25 }];
      return [{ cx: x, cy: y - 50, rx: 26, ry: 50 }, { cx: x, cy: y + 50, rx: 26, ry: 50 }];
    }
    function draw() {
      var T = TYPES[type], p = sl.value / 100, d = T.far + (T.near - T.far) * p, y = 122, xa = 300 - d / 2, xb = 300 + d / 2;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var A = shapes(T.a, xa, y), B = shapes(T.b, xb, y);
      var defs = svgEl('defs', {}, svg), clip = svgEl('clipPath', { id: uid }, defs);
      A.forEach(function (s) { svgEl('ellipse', s, clip); });
      svgEl('line', { x1: 20, y1: y, x2: 580, y2: y, style: 'stroke:' + INK2 + ';stroke-width:1.2;stroke-dasharray:6 5' }, svg);
      svgEl('text', { x: 580, y: y - 8, 'text-anchor': 'end', style: 'fill:' + INK2 + ';font-family:var(--font-body);font-size:13px' }, svg, t('bond axis'));
      A.concat(B).forEach(function (s) { svgEl('ellipse', { cx: s.cx, cy: s.cy, rx: s.rx, ry: s.ry, style: 'fill:var(--surface-2);fill-opacity:0.55;stroke:' + INK + ';stroke-width:1.6' }, svg); });
      B.forEach(function (s) { svgEl('ellipse', { cx: s.cx, cy: s.cy, rx: s.rx, ry: s.ry, 'clip-path': 'url(#' + uid + ')', style: 'fill:' + ACC + ';fill-opacity:0.85;stroke:' + INK + ';stroke-width:1.6' }, svg); });
      [xa, xb].forEach(function (x) { svgEl('circle', { cx: x, cy: y, r: 4, style: 'fill:' + INK }, svg); });
      var lab = 'fill:' + INK + ';font-family:var(--font-mono);font-size:14px;font-weight:600';
      svgEl('text', { x: Math.min(xa, 300 - 40), y: 240, 'text-anchor': 'middle', style: lab }, svg, T.la);
      svgEl('text', { x: Math.max(xb, 300 + 40), y: 240, 'text-anchor': 'middle', style: lab }, svg, T.lb);
      svgEl('text', { x: 20, y: 22, style: 'fill:' + INK2 + ';font-family:var(--font-body);font-size:13px' }, svg, t('Example: {ex}', { ex: T.ex }));
      // does anything overlap yet?
      var reachA = T.a === 's' ? 46 : T.a === 'px' ? 100 : 26, reachB = T.b === 's' ? 46 : T.b === 'px' ? 100 : 26, over = d < reachA + reachB - 2;
      if (over) {
        var note = 'fill:var(--accent-ink);font-family:var(--font-body);font-size:13px;font-weight:700';
        if (type === 'pi') {
          svgEl('text', { x: 352, y: 76, style: note }, svg, t('overlap above the axis'));
          svgEl('text', { x: 352, y: 176, style: note }, svg, t('overlap below the axis'));
        } else svgEl('text', { x: 300, y: 52, 'text-anchor': 'middle', style: note }, svg, t('overlap on the axis, between the nuclei'));
      }
      setType(type === 'pi' ? t('sideways (lateral)') : t('head-on (end to end)'));
      setBond(!over ? t('none yet: the orbitals do not overlap') : type === 'pi' ? t('pi (π) bond: the two regions together are one bond') : t('sigma (σ) bond'));
      setDens(!over ? MINUS : type === 'pi' ? t('on opposite sides of the bond axis') : t('along the bond axis'));
    }
    draw();
  });

  /* ==========================================================================
     s2-2h.sigmapi — count the sigma and pi bonds
     ========================================================================== */
  S1.widgets.register('s2-2h.sigmapi', function (w) {
    // s, d, tr = numbers of single, double and triple bonds; ch = how many of the single bonds are bonds to hydrogen
    var DATA = [
      { id: 'ethene', name: t('ethene'), f: 'C2H4', kind: 'st', spec: { chain: ['C', 'C'], bonds: [2] }, s: 4, d: 1, tr: 0, ch: 4 },
      { id: 'ethyne', name: t('ethyne'), f: 'C2H2', kind: 'st', spec: { chain: ['C', 'C'], bonds: [3] }, s: 2, d: 0, tr: 1, ch: 2 },
      { id: 'n2', name: t('nitrogen'), f: 'N2', kind: 'st', spec: { chain: ['N', 'N'], bonds: [3] }, s: 0, d: 0, tr: 1, ch: 0 },
      { id: 'co2', name: t('carbon dioxide'), f: 'CO2', kind: 'st', spec: { chain: ['O', 'C', 'O'], bonds: [2, 2] }, s: 0, d: 2, tr: 0, ch: 0 },
      { id: 'hcn', name: t('hydrogen cyanide'), f: 'HCN', kind: 'st', spec: { chain: ['C', 'N'], bonds: [3] }, s: 1, d: 0, tr: 1, ch: 1 },
      { id: 'methanal', name: t('methanal'), f: 'HCHO', kind: 'st', spec: { chain: ['C'], subs: { 0: ['=O'] } }, s: 2, d: 1, tr: 0, ch: 2 },
      { id: 'propene', name: t('propene'), f: 'CH2=CHCH3', kind: 'st', spec: { chain: ['C', 'C', 'C'], bonds: [2, 1] }, s: 7, d: 1, tr: 0, ch: 6 },
      { id: 'ethanoic', name: t('ethanoic acid'), f: 'CH3COOH', kind: 'st', spec: { chain: ['C', 'C', 'O'], subs: { 1: ['=O'] } }, s: 6, d: 1, tr: 0, ch: 4 },
      { id: 'nitrile', name: t('propanenitrile'), f: 'CH3CH2CN', kind: 'st', spec: { chain: ['C', 'C', 'C', 'N'], bonds: [1, 1, 3] }, s: 7, d: 0, tr: 1, ch: 5 },
      { id: 'co3', name: t('carbonate ion (one resonance structure)'), f: 'CO3^2-', kind: 'lw', spec: trig('C', ['O', 'O', 'O'], 0, '2-'), s: 2, d: 1, tr: 0, ch: 0 },
      { id: 'benzene', name: t('benzene (one resonance structure)'), f: 'C6H6', kind: 'lw', spec: benzene(0), s: 9, d: 3, tr: 0, ch: 6 }
    ];
    var cur = DATA[0];
    var sel = w.select({ label: t('Molecule or ion'), value: cur.id, options: DATA.map(function (d) { return { value: d.id, label: d.name }; }),
      onChange: function (v) { cur = DATA.filter(function (d) { return d.id === v; })[0]; build(); } });
    w.button(t('Next molecule'), function () { cur = DATA[(DATA.indexOf(cur) + 1) % DATA.length]; sel.set(cur.id); build(); });
    var draw = el('div', { class: 's22h-draw' }), form = el('form', { class: 's22h-form', novalidate: true });
    w.stage.appendChild(draw); w.stage.appendChild(form);
    var note = msgBox(w.stage);
    var inS = el('input', { class: 'input input--num s22h-num', id: S1.util.uid('sg'), type: 'text', inputmode: 'numeric', autocomplete: 'off' });
    var inP = el('input', { class: 'input input--num s22h-num', id: S1.util.uid('pi'), type: 'text', inputmode: 'numeric', autocomplete: 'off' });
    form.appendChild(el('div', { class: 's22h-field' }, [el('label', { class: 'field-label', for: inS.id, text: t('Number of σ bonds') }), inS]));
    form.appendChild(el('div', { class: 's22h-field' }, [el('label', { class: 'field-label', for: inP.id, text: t('Number of π bonds') }), inP]));
    form.appendChild(el('div', { class: 'btn-row' }, [el('button', { class: 'btn btn--primary btn--small', type: 'submit', text: t('Check') }),
      el('button', { class: 'btn btn--small', type: 'button', text: t('Show the count'), onclick: function () { note.show('info', explain()); } })]));
    var setScore = w.readoutItem(t('Molecules counted correctly')), right = {};
    function explain() {
      var sig = cur.s + cur.d + cur.tr, pi = cur.d + 2 * cur.tr;
      return t('{s} single, {d} double and {tr} triple bonds. Every bond has one σ bond: σ = {s} + {d} + {tr} = {sig}. Each double bond adds one π bond and each triple bond adds two: π = {d} + 2 × {tr} = {pi}.', { s: cur.s, d: cur.d, tr: cur.tr, sig: sig, pi: pi });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var sig = cur.s + cur.d + cur.tr, pi = cur.d + 2 * cur.tr;
      var a = S1.chem.parseNumber(inS.value), b = S1.chem.parseNumber(inP.value);
      if (!a || !b) { note.show('warn', t('Type a whole number in both boxes.')); return; }
      var okS = a.value === sig, okP = b.value === pi;
      inS.setAttribute('aria-invalid', String(!okS)); inP.setAttribute('aria-invalid', String(!okP));
      if (okS && okP) { right[cur.id] = true; setScore(Object.keys(right).length + ' / ' + DATA.length); note.show('ok', t('Correct.') + ' ' + explain()); return; }
      var hints = [];
      if (!okS) {
        if (cur.ch && a.value === sig - cur.ch) hints.push(t('σ: did you count the bonds to hydrogen? Every single bond is a σ bond.'));
        else if ((cur.d || cur.tr) && a.value === cur.s) hints.push(t('σ: a double or triple bond also contains one σ bond.'));
        else if (a.value === cur.s + 2 * cur.d + 3 * cur.tr) hints.push(t('σ: you counted every line. Only one line in each double or triple bond is a σ bond.'));
        else hints.push(t('σ: count one σ bond for every pair of atoms joined together.'));
      }
      if (!okP) {
        if (cur.tr && b.value === cur.d + cur.tr) hints.push(t('π: a triple bond has two π bonds.'));
        else if (b.value === 2 * cur.d + 3 * cur.tr) hints.push(t('π: not every line in a multiple bond is π. One of them is the σ bond.'));
        else hints.push(t('π: one for each double bond, two for each triple bond, none for single bonds.'));
      }
      note.show('bad', t('Not yet.') + ' ' + hints.join(' '));
    });
    function build() {
      var spec = {}; for (var k in cur.spec) spec[k] = cur.spec[k];
      spec.label = t('Structure of {name}, showing every bond', { name: cur.name });
      if (cur.kind === 'st') M.structural(draw, spec); else M.lewis(draw, spec);
      inS.value = ''; inP.value = ''; inS.removeAttribute('aria-invalid'); inP.removeAttribute('aria-invalid'); note.hide();
    }
    setScore('0 / ' + DATA.length);
    build();
  });

  /* ==========================================================================
     s2-2h.hybrid — electron domains → hybridization → geometry
     ========================================================================== */
  S1.widgets.register('s2-2h.hybrid', function (w) {
    var DATA = [
      { id: 'ethane', name: t('ethane'), f: 'C2H6' }, { id: 'ethene', name: t('ethene'), f: 'C2H4' }, { id: 'ethyne', name: t('ethyne'), f: 'C2H2' },
      { id: 'co2', name: t('carbon dioxide'), f: 'CO2' }, { id: 'hcn', name: t('hydrogen cyanide'), f: 'HCN' }, { id: 'methanal', name: t('methanal'), f: 'HCHO' },
      { id: 'benzene', name: t('benzene (one resonance structure)'), f: 'C6H6' }, { id: 'nh3', name: t('ammonia'), f: 'NH3' }, { id: 'h2o', name: t('water'), f: 'H2O' }
    ];
    var cur = DATA[1], s = null, pick = 0, setRing = null, atomSeg = null;
    w.select({ label: t('Molecule'), value: cur.id, options: DATA.map(function (d) { return { value: d.id, label: uni(d.f) + ' ' + d.name }; }),
      onChange: function (v) { cur = DATA.filter(function (d) { return d.id === v; })[0]; build(); } });
    var atomRow = el('div', { class: 's22h-atomrow' });
    w.controls.appendChild(atomRow);
    var draw = el('div', { class: 's22h-draw' }), chain = el('p', { class: 's22h-chain' }), diag = el('div', { class: 's22h-diag' });
    w.stage.appendChild(draw); w.stage.appendChild(chain); w.stage.appendChild(diag);
    var setDom = w.readoutItem(t('Electron domains'), { text: true }), setHyb = w.readoutItem(t('Hybridization')), setGeo = w.readoutItem(t('Electron domain geometry'), { text: true }), setBonds = w.readoutItem(t('Bonds from this atom'), { text: true });

    // one button per different kind of atom: the first of each (element, domains, lone pairs) combination
    function kinds() {
      var seen = {}, out = [];
      s.atoms.forEach(function (a, i) { var k = a.el + neighbours(s, i) + '-' + (a.lone || 0) + '-' + bondSum(s, i); if (!seen[k]) { seen[k] = true; out.push(i); } });
      return out;
    }
    function box(svg, x, y, n, label) {
      svgEl('rect', { x: x, y: y, width: 30, height: 30, style: 'fill:var(--surface);stroke:' + INK + ';stroke-width:1.6' }, svg);
      if (n) svgEl('text', { x: x + 15, y: y + 16, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:var(--font-mono);font-size:17px' }, svg, n === 2 ? '↑↓' : '↑');
    }
    function text(svg, x, y, str, anchor, bold) { return svgEl('text', { x: x, y: y, 'text-anchor': anchor || 'start', style: 'fill:' + (bold ? INK : INK2) + ';font-family:var(--font-body);font-size:13px' + (bold ? ';font-weight:700' : '') }, svg, str); }
    function diagram(a, dom, lp, piN, hyb) {
      diag.innerHTML = '';
      var V = VALENCE[a.el], yS = 180, yP = 62, nMix = dom - 1, yH = yS - (yS - yP) * nMix / dom, i;
      var svg = svgEl('svg', { viewBox: '0 0 600 250', role: 'img', 'aria-label': t('Energy diagram: one s orbital and {n} p orbitals mix to form {d} {h} hybrid orbitals of equal energy. {p} p orbitals are left unmixed.', { n: nMix, d: dom, h: hyb, p: 3 - nMix }) }, diag);
      svg.style.width = '100%'; svg.style.maxWidth = '600px'; svg.style.height = 'auto';
      svgEl('line', { x1: 22, y1: 232, x2: 22, y2: 30, style: 'stroke:' + INK2 + ';stroke-width:1.4' }, svg);
      svgEl('path', { d: 'M22 22 L17 34 L27 34 Z', style: 'fill:' + INK2 }, svg);
      text(svg, 34, 30, t('energy'));
      text(svg, 130, 244, t('{el} atom: orbitals before mixing', { el: a.el }), 'middle', true);
      text(svg, 440, 244, t('{el} in the molecule: after mixing', { el: a.el }), 'middle', true);
      // left: ground state, 2s then 2p by Hund's rule
      var pe = V - 2, pfill = [0, 0, 0];
      for (i = 0; i < pe; i++) pfill[i % 3]++;
      box(svg, 115, yS, 2); text(svg, 108, yS + 20, '2s', 'end');
      for (i = 0; i < 3; i++) box(svg, 83 + i * 32, yP, pfill[i]);
      text(svg, 76, yP + 20, '2p', 'end');
      // arrow
      svgEl('line', { x1: 215, y1: 130, x2: 268, y2: 130, style: 'stroke:' + ACC + ';stroke-width:2' }, svg);
      svgEl('path', { d: 'M280 130 L267 124.5 L267 135.5 Z', style: 'fill:' + ACC }, svg);
      text(svg, 247, 118, t('mix'), 'middle');
      // right: hybrids (lone pairs first), then unmixed p
      var x0 = 440 - dom * 16;
      for (i = 0; i < dom; i++) box(svg, x0 + i * 32, yH, i < lp ? 2 : 1);
      text(svg, x0 - 7, yH + 20, hyb, 'end', true);
      text(svg, 440, yH + 48, lp ? t('{d} hybrid orbitals: {l} hold lone pairs, {b} form σ bonds', { d: dom, l: lp, b: dom - lp }) : t('{d} hybrid orbitals: each forms one σ bond', { d: dom }), 'middle');
      var np = 3 - nMix, xp = 440 - np * 16;
      for (i = 0; i < np; i++) box(svg, xp + i * 32, yP, 1);
      if (np) { text(svg, xp - 7, yP + 20, '2p', 'end'); text(svg, 440, yP - 9, np === 1 ? t('1 unmixed p orbital: forms the π bond') : t('2 unmixed p orbitals: form two π bonds'), 'middle'); }
    }
    function select(i) {
      pick = i; if (atomSeg) atomSeg.set(i); if (setRing) setRing(i);
      var a = s.atoms[i];
      if (a.el === 'H') {
        chain.innerHTML = t('Hydrogen uses its 1s orbital to form one σ bond. It is not hybridized.');
        diag.innerHTML = ''; setDom(MINUS); setHyb(MINUS); setGeo(MINUS); setBonds(t('1 σ'));
        return;
      }
      var nb = neighbours(s, i), lp = a.lone || 0, dom = nb + lp, piN = bondSum(s, i) - nb;
      var hyb = dom === 4 ? 'sp³' : dom === 3 ? 'sp²' : 'sp', geo = dom === 4 ? t('tetrahedral (109.5°)') : dom === 3 ? t('trigonal planar (120°)') : t('linear (180°)');
      chain.innerHTML = t('{atom}: {nb} bonded atoms + {lp} lone pairs = <strong>{dom} electron domains</strong> → <strong>{hyb}</strong> → domains arranged {geo}.', { atom: a.el, nb: nb, lp: lp, dom: dom, hyb: hyb, geo: geo }) +
        (piN ? ' ' + t('A double or triple bond counts as one domain.') : '');
      setDom(t('{dom} ({nb} bonded atoms + {lp} lone pairs)', { dom: dom, nb: nb, lp: lp }));
      setHyb(hyb); setGeo(geo);
      setBonds(t('{sg} σ and {pi} π', { sg: nb, pi: piN }));
      diagram(a, dom, lp, piN, hyb);
    }
    function build() {
      s = MOLS[cur.id]();
      s.label = t('Lewis formula of {name}. Choose an atom.', { name: cur.name });
      setRing = drawPickable(draw, s, select);
      atomRow.innerHTML = '';
      var ks = kinds(), count = {};
      atomSeg = seg(atomRow, t('Atom'), ks.map(function (i) {
        var e = s.atoms[i].el; count[e] = (count[e] || 0) + 1;
        var many = ks.filter(function (j) { return s.atoms[j].el === e; }).length > 1;
        return { value: i, label: e + (many ? ' ' + count[e] : '') };
      }), ks[0], select);
      select(ks[0]);
    }
    build();
  });

  /* ==========================================================================
     s2-2h.complex — coordination bonds in a complex ion (static sketch)
     ========================================================================== */
  S1.widgets.register('s2-2h.complex', function (w) {
    var svg = w.svg('0 0 420 300', { label: t('The complex ion hexaaquacopper(II): a copper 2+ ion in the centre. Six water molecules each donate a lone pair from oxygen to the copper ion, shown as six arrows pointing to the copper.') });
    svg.style.maxWidth = '420px';
    var cx = 200, cy = 150, R = 96, st = 'fill:' + INK + ';font-family:var(--font-body);font-size:19px;font-weight:700';
    svgEl('text', { x: cx, y: cy, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: st }, svg, 'Cu');
    [0, 60, 120, 180, 240, 300].forEach(function (deg) {
      var a = deg * Math.PI / 180, ux = Math.cos(a), uy = -Math.sin(a), right = ux > 0;
      var x1 = cx + ux * (R - 6), y1 = cy + uy * (R - 6), x2 = cx + ux * 24, y2 = cy + uy * 24, nx = -uy, ny = ux;
      svgEl('line', { x1: x1, y1: y1, x2: x2 + ux * 6, y2: y2 + uy * 6, style: 'stroke:' + INK + ';stroke-width:1.8' }, svg);
      svgEl('path', { d: 'M' + x2 + ' ' + y2 + ' L' + (x2 + ux * 10 + nx * 5) + ' ' + (y2 + uy * 10 + ny * 5) + ' L' + (x2 + ux * 10 - nx * 5) + ' ' + (y2 + uy * 10 - ny * 5) + ' Z', style: 'fill:' + INK }, svg);
      // lone pair dots at the oxygen end
      [-4, 4].forEach(function (o) { svgEl('circle', { cx: cx + ux * (R + 1) + nx * o, cy: cy + uy * (R + 1) + ny * o, r: 2.3, style: 'fill:' + ACC }, svg); });
      svgEl('text', { x: cx + ux * (R + 9), y: cy + uy * (R + 12), 'text-anchor': right ? 'start' : 'end', 'dominant-baseline': 'central', style: st }, svg, right ? 'OH₂' : 'H₂O');
    });
    var b = 'fill:none;stroke:' + INK + ';stroke-width:1.8';
    svgEl('path', { d: 'M40 14 H30 V286 H40', style: b }, svg);
    svgEl('path', { d: 'M360 14 H370 V286 H360', style: b }, svg);
    svgEl('text', { x: 376, y: 28, style: st }, svg, '2+');
    w.readoutItem(t('Coordination bonds'))('6');
    w.readoutItem(t('Both electrons in each bond come from'), { text: true })(t('the oxygen atom of a water molecule'));
  });
})();
