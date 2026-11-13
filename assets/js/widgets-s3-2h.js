/* ==========================================================================
   Widgets for topic 3.2 (Additional HL) — stereoisomers and spectroscopy.
   s3-2h.cistrans     cis–trans explorer: pairs of 3-D models
   s3-2h.ctest        "can it show cis–trans isomerism?" tester
   s3-2h.mirror       chirality lab: a molecule, its mirror image, try to superimpose
   s3-2h.spotter      click the chiral carbon
   s3-2h.wedge        wedge–dash drawing guide for a pair of enantiomers
   s3-2h.polarimeter  rotation of plane-polarized light (illustration)
   s3-2h.ms           mass spectrum interpreter
   s3-2h.ir           infrared interpreter and "which compound is it?"
   s3-2h.nmr          proton NMR tutor with a predict-first mode
   s3-2h.detective    combined-analysis problems with a deduction notebook
   Static drawings in the page: <div data-s32h-fig="name"></div>.

   Data sources.
   - Infrared ranges, 1H NMR shift ranges and "mass spectral fragments lost" are the
     IB chemistry data booklet (first assessment 2025) sections 20, 21 and 22.
   - Mass spectra: m/z and relative abundance (rounded to 1 %) of the major peaks
     are from the NIST Chemistry WebBook electron-ionization spectra (NIST Mass
     Spectrometry Data Center). Small peaks are left out, so every mass spectrum
     here is a simplified sketch.
   - Infrared and NMR spectra are schematic. Band positions are typical values
     chosen inside the booklet ranges. NMR signals are drawn inside the booklet
     ranges (topic policy, the same in the page, the widgets and the question bank), because IB exam data
     are consistent with the booklet. Measured shifts can differ slightly, e.g. the CH3 of an ethyl group
     bonded to O or C=O is measured at 1.1–1.3 ppm but is drawn at 1.0 ppm here.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var SVGNS = 'http://www.w3.org/2000/svg';
  var INK = 'var(--ink)';

  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(n);
    return n;
  }
  /** Formula text → HTML: digits become subscripts, a trailing + becomes a superscript charge. */
  function fm(s) {
    var h = String(s).replace(/([A-Za-z\)])(\d+)/g, '$1<sub>$2</sub>').replace(/\+$/, '<sup>+</sup>');
    return '<span class="s32h-f" data-i18n="off">' + h + '</span>';
  }
  var SPAN = '<span>';   // button text goes in one span, so that <sup> and <i> inside it are not laid out as separate flex items
  function setAria(node, text) { node.setAttribute('aria-label', text); }
  function feedback(kind, html) {
    return el('div', { class: 'feedback' + (kind ? ' feedback--' + kind : ''), html: html });
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  /** Segmented button group. items: [{value, label}] → {value, set(v), el}. */
  function seg(parent, label, items, value, onChange) {
    var id = S1.util.uid('seg');
    var group = el('div', { class: 'seg s32h-seg', role: 'group', 'aria-labelledby': id });
    var state = { value: value, buttons: [] };
    items.forEach(function (it) {
      var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(it.value === value), html: SPAN + it.label });
      b.addEventListener('click', function () { state.set(it.value); if (onChange) onChange(it.value); });
      b._value = it.value; state.buttons.push(b); group.appendChild(b);
    });
    state.set = function (v) { state.value = v; state.buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b._value === v)); }); };
    state.el = el('div', { class: 'control' }, [el('span', { class: 'control__label', id: id, html: label }), group]);
    parent.appendChild(state.el);
    return state;
  }

  /* ---------- Data booklet tables (sections 20, 21, 22) --------------------- */
  function irRows() {
    return [
      { id: 'ci', bond: 'C–I', lo: 490, hi: 620, where: t('iodoalkanes'), inten: t('strong') },
      { id: 'cbr', bond: 'C–Br', lo: 500, hi: 600, where: t('bromoalkanes'), inten: t('strong') },
      { id: 'ccl', bond: 'C–Cl', lo: 600, hi: 800, where: t('chloroalkanes'), inten: t('strong') },
      { id: 'cf', bond: 'C–F', lo: 1000, hi: 1400, where: t('fluoroalkanes'), inten: t('strong') },
      { id: 'co', bond: 'C–O', lo: 1050, hi: 1410, where: t('alcohols, esters, ethers'), inten: t('strong') },
      { id: 'cc2', bond: 'C=C', lo: 1620, hi: 1680, where: t('alkenes'), inten: t('medium-weak; multiple bands') },
      { id: 'co2', bond: 'C=O', lo: 1700, hi: 1750, where: t('aldehydes, ketones, carboxylic acids and esters'), inten: t('strong') },
      { id: 'cc3', bond: 'C≡C', lo: 2100, hi: 2260, where: t('alkynes'), inten: t('variable') },
      { id: 'oh_acid', bond: 'O–H', lo: 2500, hi: 3000, where: t('carboxylic acids (with hydrogen bonding)'), inten: t('strong, very broad') },
      { id: 'ch', bond: 'C–H', lo: 2850, hi: 3090, where: t('alkanes, alkenes, arenes'), inten: t('strong') },
      { id: 'oh_alc', bond: 'O–H', lo: 3200, hi: 3600, where: t('alcohols and phenols (with hydrogen bonding)'), inten: t('strong, broad') },
      { id: 'nh', bond: 'N–H', lo: 3300, hi: 3500, where: t('primary amines'), inten: t('medium; two bands') }
    ];
  }
  function irRow(id) { return irRows().filter(function (r) { return r.id === id; })[0]; }
  var IR_RANGE = { ci: [490, 620], cbr: [500, 600], ccl: [600, 800], cf: [1000, 1400], co: [1050, 1410], cc2: [1620, 1680], co2: [1700, 1750], cc3: [2100, 2260], oh_acid: [2500, 3000], ch: [2850, 3090], oh_alc: [3200, 3600], nh: [3300, 3500] };

  /* Type of proton → chemical shift range / ppm. `h` is the HTML of the booklet's "type of proton". */
  var NMR_RANGE = {
    ch3: [0.9, 1.0], ch2r: [1.3, 1.4], chr2: [1.5, 1.5], ester_a: [2.0, 2.5], keto_a: [2.2, 2.7], benz: [2.5, 3.5], alkyne: [1.8, 3.1],
    hal: [3.5, 4.4], ether: [3.3, 3.7], ester_o: [3.7, 4.8], acid: [9.0, 13.0], alcohol: [1.0, 6.0], alkene: [4.5, 6.0], phenol: [4.0, 12.0], arene: [6.9, 9.0], ald: [9.4, 10.0]
  };
  function nmrRows() {
    return [
      { id: 'ch3', h: '–C<b>H</b><sub>3</sub>', words: t('H in a CH<sub>3</sub> group on an alkyl chain') },
      { id: 'ch2r', h: '–C<b>H</b><sub>2</sub>–R', words: t('H in a CH<sub>2</sub> group in an alkyl chain') },
      { id: 'chr2', h: '–C<b>H</b>R<sub>2</sub>', words: t('H in a CH group in an alkyl chain') },
      { id: 'ester_a', h: 'RO–C(=O)–C<b>H</b><sub>2</sub>–', words: t('H on the carbon next to the C=O of an ester or acid') },
      { id: 'keto_a', h: 'R–C(=O)–C<b>H</b><sub>2</sub>–', words: t('H on the carbon next to the C=O of a ketone or aldehyde') },
      { id: 'benz', h: 'C<sub>6</sub>H<sub>5</sub>–C<b>H</b><sub>3</sub>', words: t('H in a CH<sub>3</sub> group on a benzene ring') },
      { id: 'alkyne', h: '–C≡C–<b>H</b>', words: t('H on a triple-bonded carbon') },
      { id: 'hal', h: '–C<b>H</b><sub>2</sub>–Hal', words: t('H on a carbon bonded to a halogen') },
      { id: 'ether', h: 'R–O–C<b>H</b><sub>2</sub>–', words: t('H on a carbon bonded to the O of an alcohol or ether') },
      { id: 'ester_o', h: 'R–C(=O)–O–C<b>H</b><sub>2</sub>–', words: t('H on the carbon bonded to the single-bonded O of an ester') },
      { id: 'acid', h: 'R–C(=O)–O–<b>H</b>', words: t('H of a carboxyl group') },
      { id: 'alcohol', h: 'R–O–<b>H</b>', words: t('H of a hydroxyl group in an alcohol') },
      { id: 'alkene', h: '–C<b>H</b>=C<b>H</b><sub>2</sub>', words: t('H on a double-bonded carbon') },
      { id: 'phenol', h: 'C<sub>6</sub>H<sub>5</sub>–O<b>H</b>', words: t('H of the OH group in a phenol') },
      { id: 'arene', h: 'C<sub>6</sub>H<sub>5</sub>–<b>H</b>', words: t('H on a benzene ring') },
      { id: 'ald', h: 'R–C(=O)–<b>H</b>', words: t('H of an aldehyde group') }
    ];
  }
  function nmrRow(id) { return nmrRows().filter(function (r) { return r.id === id; })[0]; }
  function rangeText(r) { return r[0] === r[1] ? chem.fixed(r[0], 1) : chem.fixed(r[0], 1) + '–' + chem.fixed(r[1], 1); }

  /* Mass lost → possible neutral fragment(s) lost. */
  var MS_LOST = { 15: ['•CH3'], 17: ['•OH'], 18: ['H2O'], 28: ['CH2=CH2', 'CO'], 29: ['•CH2CH3', '•CHO'], 31: ['•OCH3'], 45: ['•COOH'] };
  function lostHtml(mass) { return (MS_LOST[mass] || []).map(fm).join(' ' + t('or') + ' '); }

  /* ---------- Local 2-D structure drawing ----------------------------------
     mol2d(host, {atoms: [{x, y, label, env, pick, aria}], bonds: [{a, b, order, stereo}], scale, label, onPick, envOn})
     x, y in bond lengths (y grows downwards). An atom with no label is a carbon vertex (skeletal style).
     env: 'a' | 'b' … draws a lettered outline round the group (equivalent hydrogen atoms share a letter).
     pick: true makes the atom a keyboard-operable button; onPick(index) is called.
     stereo on a bond: 'wedge' or 'hash', narrow end at atom a.
     Returns {svg, mark(index, 'yes' | 'no')}. */
  var ENV_STYLE = {
    a: 'fill:var(--accent-soft);stroke:var(--accent);stroke-width:2',
    b: 'fill:none;stroke:var(--ink);stroke-width:2',
    c: 'fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:5 3',
    d: 'fill:none;stroke:var(--ink);stroke-width:2;stroke-dasharray:5 3',
    e: 'fill:none;stroke:var(--ink-2);stroke-width:2;stroke-dasharray:2 3'
  };
  function labelParts(label) {
    var out = [], re = /(\d+)|([^\d]+)/g, m;
    while ((m = re.exec(label))) out.push({ s: m[0], sub: !!m[1] });
    return out;
  }
  function labelWidth(label) {
    return labelParts(label).reduce(function (sum, p) { return sum + p.s.length * (p.sub ? 6.6 : 10.6); }, 0);
  }
  function mol2d(host, spec) {
    var S = spec.scale || 40, atoms = spec.atoms, bonds = spec.bonds || [];
    var pts = atoms.map(function (a) { return { x: a.x * S, y: a.y * S }; });
    var hw = atoms.map(function (a) { return a.label ? labelWidth(a.label) / 2 + 3 : 0; });
    var anyEnv = atoms.some(function (a) { return a.env; }), anyPick = atoms.some(function (a) { return a.pick; });
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    pts.forEach(function (p, i) {
      var e = Math.max(hw[i], 9) + (atoms[i].pick ? 14 : 3);
      minX = Math.min(minX, p.x - e); maxX = Math.max(maxX, p.x + e);
      minY = Math.min(minY, p.y - (anyEnv ? 31 : anyPick ? 22 : 15)); maxY = Math.max(maxY, p.y + (anyPick ? 20 : 15));
    });
    if (spec.mirrorAt != null) { minY -= 4; maxY += 4; }
    var pad = 8, w = maxX - minX + 2 * pad, h = maxY - minY + 2 * pad;
    clear(host); host.classList.add('s32h-mol'); host.setAttribute('data-i18n', 'off');
    var svg = svgEl('svg', { viewBox: [minX - pad, minY - pad, w, h].join(' '), width: w, height: h, role: anyPick ? 'group' : 'img', 'class': 's32h-mol__svg' }, host);
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    if (spec.label) setAria(svg, spec.label);
    function gap(i, ux, uy) {
      if (!atoms[i].label) return 0;
      return Math.min(hw[i] / (Math.abs(ux) || 1e-6), 11.5 / (Math.abs(uy) || 1e-6)) + 1.5;
    }
    var line = 'stroke:' + INK + ';stroke-width:1.8;stroke-linecap:round;fill:none';
    if (spec.mirrorAt != null) {
      var mx = spec.mirrorAt * S;
      svgEl('line', { x1: mx, y1: minY, x2: mx, y2: maxY, style: 'stroke:var(--ink-3);stroke-width:1.5;stroke-dasharray:6 5' }, svg);
    }
    bonds.forEach(function (b) {
      var p = pts[b.a], q = pts[b.b], len = Math.hypot(q.x - p.x, q.y - p.y) || 1, ux = (q.x - p.x) / len, uy = (q.y - p.y) / len, nx = -uy, ny = ux;
      var ga = gap(b.a, ux, uy), gb = gap(b.b, ux, uy);
      var a1 = { x: p.x + ux * ga, y: p.y + uy * ga }, a2 = { x: q.x - ux * gb, y: q.y - uy * gb };
      if (b.stereo === 'wedge') {
        svgEl('path', { d: 'M' + a1.x + ' ' + a1.y + ' L' + (a2.x + nx * 5) + ' ' + (a2.y + ny * 5) + ' L' + (a2.x - nx * 5) + ' ' + (a2.y - ny * 5) + ' Z', style: 'fill:' + INK + ';stroke:' + INK + ';stroke-width:1;stroke-linejoin:round' }, svg);
        return;
      }
      if (b.stereo === 'hash') {
        var l2 = Math.hypot(a2.x - a1.x, a2.y - a1.y), steps = Math.max(4, Math.round(l2 / 4.2));
        for (var s = 1; s <= steps; s++) {
          var f = s / steps, half = 0.8 + 4.2 * f, cx = a1.x + (a2.x - a1.x) * f, cy = a1.y + (a2.y - a1.y) * f;
          svgEl('line', { x1: cx + nx * half, y1: cy + ny * half, x2: cx - nx * half, y2: cy - ny * half, style: 'stroke:' + INK + ';stroke-width:1.5' }, svg);
        }
        return;
      }
      var order = b.order || 1, offs = order === 2 ? [-3, 3] : order === 3 ? [-5, 0, 5] : [0];
      offs.forEach(function (o) { svgEl('line', { x1: a1.x + nx * o, y1: a1.y + ny * o, x2: a2.x + nx * o, y2: a2.y + ny * o, style: line }, svg); });
    });
    var groups = [];
    atoms.forEach(function (a, i) {
      var p = pts[i], g = svgEl('g', {}, svg), half = Math.max(hw[i], 9);
      groups.push(g);
      if (a.env) {
        var on = spec.envOn === a.env;
        var r = svgEl('rect', { x: p.x - half - 2, y: p.y - 13, width: 2 * half + 4, height: 26, rx: 5, style: ENV_STYLE[a.env] || ENV_STYLE.e }, g);
        if (on) r.style.strokeWidth = '4';
        svgEl('text', { x: p.x, y: p.y - 21, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:var(--font-mono);font-size:12px;font-weight:600', text: a.env }, g);
      }
      if (a.pick) {
        g.setAttribute('class', 's32h-hit'); g.setAttribute('role', 'button'); g.setAttribute('tabindex', '0');
        setAria(g, a.aria || a.label || t('carbon atom'));
        svgEl('rect', { 'class': 's32h-hit__ring', x: p.x - half - 6, y: p.y - 17, width: 2 * half + 12, height: 34, rx: 9 }, g);
        g.addEventListener('click', function () { if (spec.onPick) spec.onPick(i); });
        g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (spec.onPick) spec.onPick(i); } });
      }
      if (a.label) {
        var tx = svgEl('text', { x: p.x, y: p.y, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:var(--font-body);font-size:16px;font-weight:700' }, g);
        var shifted = false;
        labelParts(a.label).forEach(function (part) {
          var ts = svgEl('tspan', { text: part.s }, tx);
          if (part.sub) { ts.setAttribute('dy', '4'); ts.setAttribute('style', 'font-size:11px'); shifted = true; }
          else if (shifted) { ts.setAttribute('dy', '-4'); shifted = false; }
        });
      } else if (a.pick) {
        svgEl('circle', { cx: p.x, cy: p.y, r: 2.4, style: 'fill:' + INK }, g);
      }
      if (a.star) svgEl('text', { x: p.x + half + 3, y: p.y - 12, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:var(--font-mono);font-size:17px;font-weight:700', text: '*' }, g);
    });
    return {
      svg: svg,
      mark: function (i, kind) {
        var g = groups[i], p = pts[i], half = Math.max(hw[i], 9);
        var ring = g.querySelector('.s32h-hit__ring');
        if (ring) ring.setAttribute('style', 'stroke-dasharray:none;stroke-width:2.5;stroke:' + (kind === 'yes' ? 'var(--ok)' : 'var(--bad)'));
        var old = g.querySelector('.s32h-mark'); if (old) g.removeChild(old);
        svgEl('text', { 'class': 's32h-mark', x: p.x + half + 12, y: p.y - 17, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + (kind === 'yes' ? 'var(--ok)' : 'var(--bad)') + ';font-family:var(--font-mono);font-size:17px;font-weight:700', text: kind === 'yes' ? '*' : '×' }, g);
      }
    };
  }

  /* Builders for 2-D specs ---------------------------------------------------- */
  /** Horizontal chain. items: [{l, env, pick, why, up, down}]; up/down: 'OH' | '=O' | {l, env, pick, why}. */
  function chain(items, gapX) {
    var atoms = [], bonds = [], dx = gapX || 1.5;
    function side(parent, s, dy) {
      if (!s) return;
      var o = typeof s === 'string' ? { l: s } : s, order = 1, lab = o.l;
      if (lab.charAt(0) === '=') { order = 2; lab = lab.slice(1); }
      atoms.push({ x: atoms[parent].x, y: dy, label: lab, env: o.env, pick: o.pick, why: o.why, chiral: o.chiral, aria: o.aria });
      bonds.push({ a: parent, b: atoms.length - 1, order: order });
    }
    var prev = -1;
    items.forEach(function (it, i) {
      atoms.push({ x: i * dx, y: 0, label: it.l, env: it.env, pick: it.pick, why: it.why, chiral: it.chiral, aria: it.aria, star: it.star });
      var me = atoms.length - 1;
      if (prev >= 0) bonds.push({ a: prev, b: me, order: it.order || 1 });
      side(me, it.up, -1.2); side(me, it.down, 1.2);
      prev = me;
    });
    return { atoms: atoms, bonds: bonds };
  }
  /** Alkene X(Y)C=C(Z)W: s = [top-left, bottom-left, top-right, bottom-right] labels. */
  function alkene(s) {
    return {
      atoms: [{ x: 0, y: 0, label: 'C' }, { x: 1.15, y: 0, label: 'C' },
        { x: -0.8, y: -0.85, label: s[0] }, { x: -0.8, y: 0.85, label: s[1] }, { x: 1.95, y: -0.85, label: s[2] }, { x: 1.95, y: 0.85, label: s[3] }],
      bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 5 }]
    };
  }
  /** Small ring (3 or 4 carbons) with substituents. subs: [{at: vertex, l: 'CH3', stereo: 'wedge' | 'hash' | undefined, turn: degrees}]. */
  function ring(n, subs) {
    var verts = n === 3 ? [[0, 0], [1.1, 0], [0.55, -0.95]] : [[0, 0], [1.1, 0], [1.1, -1.1], [0, -1.1]];
    var cx = n === 3 ? 0.55 : 0.55, cy = n === 3 ? -0.32 : -0.55;
    var atoms = verts.map(function (v) { return { x: v[0], y: v[1] }; }), bonds = [];
    for (var i = 0; i < n; i++) bonds.push({ a: i, b: (i + 1) % n });
    subs.forEach(function (s) {
      var v = verts[s.at], ang = Math.atan2(v[1] - cy, v[0] - cx) + (s.turn || 0) * Math.PI / 180;
      atoms.push({ x: v[0] + Math.cos(ang) * 1.05, y: v[1] + Math.sin(ang) * 1.05, label: s.l });
      bonds.push({ a: s.at, b: atoms.length - 1, stereo: s.stereo });
    });
    return { atoms: atoms, bonds: bonds };
  }
  /** Zig-zag skeletal chain of n carbons; subs: {index: {l, pick…}} (0-based). Every vertex takes the per-vertex info in `info`. */
  function zig(n, subs, info) {
    var atoms = [], bonds = [];
    for (var i = 0; i < n; i++) {
      var a = { x: i * 0.9, y: i % 2 ? -0.52 : 0 }, extra = (info && info[i]) || {};
      Object.keys(extra).forEach(function (k) { a[k] = extra[k]; });
      atoms.push(a);
      if (i) bonds.push({ a: i - 1, b: i });
    }
    Object.keys(subs || {}).forEach(function (k) {
      var i2 = Number(k), s = subs[k], up = i2 % 2 === 1;
      atoms.push({ x: atoms[i2].x, y: atoms[i2].y + (up ? -1.05 : 1.05), label: s.l, pick: s.pick, why: s.why, chiral: s.chiral, aria: s.aria });
      bonds.push({ a: i2, b: atoms.length - 1, order: s.order || 1 });
    });
    return { atoms: atoms, bonds: bonds };
  }
  function withLabel(spec, label, scale) { spec.label = label; if (scale) spec.scale = scale; return spec; }

  /* ---------- 3-D model builders --------------------------------------------- */
  function vnorm(v) { var m = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / m, v[1] / m, v[2] / m]; }
  function vadd(a, b, k) { k = k == null ? 1 : k; return [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k]; }
  function vcross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  /** Three directions that complete a tetrahedron when one bond already points along `back`. */
  function tetraDirs(back, phi) {
    var a = vnorm(back), ref = Math.abs(a[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    var u = vnorm(vcross(a, ref)), v = vcross(a, u), out = [], k = Math.sqrt(8) / 3;
    for (var i = 0; i < 3; i++) {
      var ang = (phi || 0) + i * 2 * Math.PI / 3;
      out.push(vnorm([-a[0] / 3 + k * (u[0] * Math.cos(ang) + v[0] * Math.sin(ang)), -a[1] / 3 + k * (u[1] * Math.cos(ang) + v[1] * Math.sin(ang)), -a[2] / 3 + k * (u[2] * Math.cos(ang) + v[2] * Math.sin(ang))]));
    }
    return out;
  }
  var BOND = { H: 1.0, F: 1.3, Cl: 1.6, Br: 1.75, I: 1.9 };
  function Model() { this.atoms = []; this.bonds = []; }
  Model.prototype.atom = function (elx, pos) { this.atoms.push({ el: elx, x: pos[0], y: pos[1], z: pos[2] }); return this.atoms.length - 1; };
  Model.prototype.pos = function (i) { var a = this.atoms[i]; return [a.x, a.y, a.z]; };
  /** Attach a group to atom `parent` along unit direction `dir`. Returns the index of the first atom of the group. */
  Model.prototype.attach = function (parent, dir, group, tag) {
    var self = this, p = this.pos(parent), d = vnorm(dir), first, back = [-d[0], -d[1], -d[2]];
    function put(elx, len, order) { var i = self.atom(elx, vadd(p, d, len)); self.bonds.push({ a: parent, b: i, order: order || 1 }); self.atoms[i].tag = tag; return i; }
    if (BOND[group]) return put(group, BOND[group]);
    if (group === 'CH3') { first = put('C', 1.45); tetraDirs(back).forEach(function (h) { self.attach(first, h, 'H', tag); }); return first; }
    if (group === 'OH') { first = put('O', 1.35); self.attach(first, tetraDirs(back)[0], 'H', tag); return first; }
    if (group === 'NH2') { first = put('N', 1.4); var nd = tetraDirs(back); self.attach(first, nd[0], 'H', tag); self.attach(first, nd[1], 'H', tag); return first; }
    if (group === 'C2H5') { first = put('C', 1.45); var ed = tetraDirs(back); self.attach(first, ed[0], 'CH3', tag); self.attach(first, ed[1], 'H', tag); self.attach(first, ed[2], 'H', tag); return first; }
    if (group === 'COOH') {
      first = put('C', 1.45);
      var ref = Math.abs(d[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0], u = vnorm(vcross(d, ref));
      var d1 = vnorm(vadd([d[0] * 0.5, d[1] * 0.5, d[2] * 0.5], u, 0.866)), d2 = vnorm(vadd([d[0] * 0.5, d[1] * 0.5, d[2] * 0.5], u, -0.866));
      var o1 = self.atom('O', vadd(self.pos(first), d1, 1.2)); self.bonds.push({ a: first, b: o1, order: 2 }); self.atoms[o1].tag = tag;
      var o2 = self.atom('O', vadd(self.pos(first), d2, 1.3)); self.bonds.push({ a: first, b: o2, order: 1 }); self.atoms[o2].tag = tag;
      var hh = self.atom('H', vadd(self.pos(o2), d, 0.95)); self.bonds.push({ a: o2, b: hh, order: 1 }); self.atoms[hh].tag = tag;
      return first;
    }
    return put(group, 1.5);
  };
  Model.prototype.spec = function (label, height) { return { atoms: this.atoms, bonds: this.bonds, label: label, height: height || 230, controls: true }; };

  /** X(Y)C=C(Z)W in the xy plane. s = [up-left, down-left, up-right, down-right]. */
  function alkene3d(s) {
    var m = new Model(), c1 = m.atom('C', [-0.67, 0, 0]), c2 = m.atom('C', [0.67, 0, 0]);
    m.bonds.push({ a: c1, b: c2, order: 2 });
    m.attach(c1, [-0.5, 0.866, 0], s[0]); m.attach(c1, [-0.5, -0.866, 0], s[1]);
    m.attach(c2, [0.5, 0.866, 0], s[2]); m.attach(c2, [0.5, -0.866, 0], s[3]);
    return m;
  }
  /** Ring of n carbons lying flat (xz plane). subs[i] = [group above, group below] for ring carbon i. */
  function ring3d(n, subs) {
    var m = new Model(), R = 1.5 / (2 * Math.sin(Math.PI / n)), idx = [], i, tilt = 57 * Math.PI / 180;
    for (i = 0; i < n; i++) { var th = 2 * Math.PI * i / n + Math.PI / 2; idx.push(m.atom('C', [R * Math.cos(th), 0, R * Math.sin(th)])); }
    for (i = 0; i < n; i++) {
      m.bonds.push({ a: idx[i], b: idx[(i + 1) % n], order: 1 });
      var p = m.pos(idx[i]), o = vnorm([p[0], 0, p[2]]);
      m.attach(idx[i], [o[0] * Math.cos(tilt), Math.sin(tilt), o[2] * Math.cos(tilt)], subs[i][0]);
      m.attach(idx[i], [o[0] * Math.cos(tilt), -Math.sin(tilt), o[2] * Math.cos(tilt)], subs[i][1]);
    }
    return m;
  }

  /* ---------- Enantiomer pair in wedge–dash notation ---------------------------- */
  var FLIP = { CH3: 'H3C', OH: 'HO', NH2: 'H2N', COOH: 'HOOC', CH2CH3: 'CH3CH2', CHO: 'OHC' };
  function flipL(l) { return FLIP[l] || l; }
  /** g = {up, side, wedge, hash}. step 1…5 builds the drawing in stages; 5 adds the mirror line and the mirror image. */
  function enantPair(g, step) {
    step = step || 5;
    var atoms = [], bonds = [];
    function one(sign, x0) {
      var c = atoms.push({ x: x0, y: 0, label: 'C' }) - 1;
      function add(dx, dy, lab, stereo) {
        var left = dx * sign < 0, text = left ? flipL(lab) : lab;
        var L = 1.15 + Math.max(0, labelWidth(text) / 2 - 9) / 40 * Math.abs(dx);
        atoms.push({ x: x0 + sign * dx * L, y: dy * L, label: text });
        bonds.push({ a: c, b: atoms.length - 1, stereo: stereo });
      }
      if (step >= 2) { add(0, -1, g.up); add(-0.94, 0.34, g.side); }
      if (step >= 3) add(0.5, 0.87, g.wedge, 'wedge');
      if (step >= 4) add(0.97, 0.26, g.hash, 'hash');
    }
    one(1, 0);
    var spec = { atoms: atoms, bonds: bonds };
    if (step >= 5) { spec.mirrorAt = 2.7; one(-1, 5.4); }
    return spec;
  }

  /* ---------- Static figures in the page ---------------------------------------- */
  function figRow(host, items) {
    clear(host); host.classList.add('s32h-figrow');
    items.forEach(function (it) {
      var cell = el('div', { class: 's32h-figrow__cell' }), box = el('div');
      cell.appendChild(box);
      if (it.draw) it.draw(box); else mol2d(box, it.spec);
      if (it.cap) cell.appendChild(el('p', { class: 's32h-figrow__cap', html: it.cap }));
      host.appendChild(cell);
    });
  }
  var FIGS = {
    'but2ene': function (h) {
      figRow(h, [
        { spec: withLabel(alkene(['H3C', 'H', 'CH3', 'H']), t('cis-but-2-ene: both CH3 groups are above the double bond')), cap: t('<i>cis</i>-but-2-ene: the two CH<sub>3</sub> groups are on the same side.') },
        { spec: withLabel(alkene(['H3C', 'H', 'H', 'CH3']), t('trans-but-2-ene: one CH3 group is above and one is below the double bond')), cap: t('<i>trans</i>-but-2-ene: the two CH<sub>3</sub> groups are on opposite sides.') }
      ]);
    },
    'ring-pair': function (h) {
      figRow(h, [
        { spec: withLabel(ring(3, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'wedge' }]), t('cis-1,2-dimethylcyclopropane: both CH3 groups on wedge bonds')), cap: t('<i>cis</i>-1,2-dimethylcyclopropane: both CH<sub>3</sub> groups are on the same face of the ring.') },
        { spec: withLabel(ring(3, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'hash' }]), t('trans-1,2-dimethylcyclopropane: one CH3 group on a wedge bond and one on a hashed bond')), cap: t('<i>trans</i>-1,2-dimethylcyclopropane: the CH<sub>3</sub> groups are on opposite faces.') }
      ]);
    },
    'we-pent2ene': function (h) {
      figRow(h, [
        { spec: withLabel(alkene(['H3C', 'H', 'CH2CH3', 'H']), t('cis-pent-2-ene')), cap: t('<i>cis</i>-pent-2-ene') },
        { spec: withLabel(alkene(['H3C', 'H', 'H', 'CH2CH3']), t('trans-pent-2-ene')), cap: t('<i>trans</i>-pent-2-ene') }
      ]);
    },
    'we-pent2ene-flat': function (h) { mol2d(h, withLabel(chain([{ l: 'CH3' }, { l: 'CH' }, { l: 'CH', order: 2 }, { l: 'CH2' }, { l: 'CH3' }]), t('Structural formula of pent-2-ene: CH3CH=CHCH2CH3'))); },
    'we-2mb2e': function (h) { mol2d(h, withLabel(alkene(['H3C', 'H3C', 'CH3', 'H']), t('2-methylbut-2-ene: the left carbon of the double bond has two CH3 groups'))); },
    'we-2clbutane': function (h) {
      mol2d(h, withLabel(chain([{ l: 'CH3' }, { l: 'C', up: 'H', down: 'Cl', star: true }, { l: 'CH2' }, { l: 'CH3' }]), t('2-chlorobutane with the chiral carbon, carbon 2, marked with an asterisk')));
    },
    'we-2clbutane-pair': function (h) { mol2d(h, withLabel(enantPair({ up: 'CH3', side: 'Cl', wedge: 'H', hash: 'CH2CH3' }), t('The two enantiomers of 2-chlorobutane drawn as mirror images with wedge and hashed bonds'))); },
    'butan2ol-pair': function (h) { mol2d(h, withLabel(enantPair({ up: 'CH3', side: 'OH', wedge: 'H', hash: 'CH2CH3' }), t('The two enantiomers of butan-2-ol drawn as mirror images with wedge and hashed bonds'))); },
    'we-ms': function (h) {
      S1.chart.massSpectrum(h, { label: t('Simplified mass spectrum with peaks at m/z 15, 42, 43 and 58. The tallest peak is at 43.'), peaks: [[15, 12, '15'], [42, 10], [43, 100, '43'], [58, 25, '58']], xMin: 10, xMax: 65, height: 230 });
    },
    'we-ir': function (h) {
      S1.chart.ir(h, { label: t('Sketch of an infrared spectrum with a very broad absorption from 2500 to 3000, a strong sharp absorption at 1715 and a strong absorption at 1240 wavenumbers'), height: 240, peaks: [
        { at: 2900, depth: 60, width: 260, label: 'A' }, { at: 1715, depth: 88, width: 22, label: 'B' }, { at: 1240, depth: 62, width: 30, label: 'C' }, { at: 1420, depth: 28, width: 25 }, { at: 930, depth: 30, width: 35 }] });
    },
    'we-nmr1': function (h) { mol2d(h, withLabel(chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'C', up: '=O' }, { l: 'OH', env: 'c' }]), t('Propanoic acid with three hydrogen environments labelled a, b and c'))); },
    'we-nmr2': function (h) { mol2d(h, withLabel(chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'c' }]), t('Ethyl ethanoate with three hydrogen environments labelled a, b and c'))); },
    'we-combo-ms': function (h) {
      S1.chart.massSpectrum(h, { label: t('Simplified mass spectrum of compound X: peaks at m/z 27, 29, 57 and 86. The tallest peak is at 57.'), peaks: [[27, 12], [29, 59, '29'], [57, 100, '57'], [86, 21, '86']], xMin: 20, xMax: 95, height: 220 });
    },
    'we-combo-ir': function (h) {
      S1.chart.ir(h, { label: t('Sketch of the infrared spectrum of compound X: absorptions near 2980 and 1715 wavenumbers, and nothing between 3200 and 3600'), height: 230, peaks: [
        { at: 2980, depth: 45, width: 30, label: '2980' }, { at: 2900, depth: 28, width: 30 }, { at: 1715, depth: 88, width: 20, label: '1715' }, { at: 1460, depth: 30, width: 20 }, { at: 1120, depth: 30, width: 25 }] });
    },
    'we-combo-nmr': function (h) {
      S1.chart.nmr(h, { label: t('Sketch of the proton NMR spectrum of compound X: a triplet at 1.0 ppm and a quartet at 2.4 ppm with areas in the ratio 3 to 2'), max: 5, height: 220, signals: [
        { shift: 1.0, h: 3, split: 3, label: t('triplet, area 3') }, { shift: 2.4, h: 2, split: 4, label: t('quartet, area 2') }] });
    },
    'we-combo-answer': function (h) { mol2d(h, withLabel(chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'C', up: '=O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'a' }]), t('Pentan-3-one: CH3CH2COCH2CH3, with the two hydrogen environments labelled a and b'))); },
    'ch2-same': function (h) { mol2d(h, withLabel(chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'OH', env: 'c' }]), t('Ethanol with three hydrogen environments labelled a, b and c'))); }
  };
  function drawFigs() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-s32h-fig]'), function (h) {
      var f = FIGS[h.getAttribute('data-s32h-fig')];
      if (f) { try { f(h); } catch (e) { if (window.console) console.error(e); } }
    });
  }
  if (S1.ready) S1.ready(drawFigs); else document.addEventListener('DOMContentLoaded', drawFigs);
  if (S1.i18n && S1.i18n.onChange) S1.i18n.onChange(drawFigs);

  /* ==========================================================================
     s3-2h.cistrans — pairs of 3-D models
     ========================================================================== */
  S1.widgets.register('s3-2h.cistrans', function (w) {
    var PAIRS = [
      { id: 'butene', name: t('but-2-ene'), group: 'CH3', lock: t('the C=C double bond'),
        cis: function () { return alkene3d(['CH3', 'H', 'CH3', 'H']); }, trans: function () { return alkene3d(['CH3', 'H', 'H', 'CH3']); },
        cis2: alkene(['H3C', 'H', 'CH3', 'H']), trans2: alkene(['H3C', 'H', 'H', 'CH3']) },
      { id: 'dce', name: t('1,2-dichloroethene'), group: 'Cl', lock: t('the C=C double bond'),
        cis: function () { return alkene3d(['Cl', 'H', 'Cl', 'H']); }, trans: function () { return alkene3d(['Cl', 'H', 'H', 'Cl']); },
        cis2: alkene(['Cl', 'H', 'Cl', 'H']), trans2: alkene(['Cl', 'H', 'H', 'Cl']) },
      { id: 'c3', name: t('1,2-dimethylcyclopropane'), group: 'CH3', lock: t('the ring'), ringNote: true,
        cis: function () { return ring3d(3, [['H', 'H'], ['CH3', 'H'], ['CH3', 'H']]); }, trans: function () { return ring3d(3, [['H', 'H'], ['CH3', 'H'], ['H', 'CH3']]); },
        cis2: ring(3, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'wedge' }]), trans2: ring(3, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'hash' }]) },
      { id: 'c4', name: t('1,2-dimethylcyclobutane'), group: 'CH3', lock: t('the ring'), ringNote: true, flat: true,
        cis: function () { return ring3d(4, [['H', 'H'], ['CH3', 'H'], ['CH3', 'H'], ['H', 'H']]); }, trans: function () { return ring3d(4, [['H', 'H'], ['CH3', 'H'], ['H', 'CH3'], ['H', 'H']]); },
        cis2: ring(4, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'wedge' }]), trans2: ring(4, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'hash' }]) }
    ];
    var setSame = w.readoutItem(t('Same in both'), { text: true }), setDiff = w.readoutItem(t('Different'), { text: true }), setLock = w.readoutItem(t('Why they cannot swap'), { text: true });
    var grid = el('div', { class: 's32h-pair' });
    var cells = ['cis', 'trans'].map(function (k) {
      var head = el('p', { class: 's32h-pair__head' }), v = el('div'), d = el('div', { class: 's32h-pair__2d' });
      grid.appendChild(el('div', { class: 's32h-pair__cell' }, [head, v, d]));
      return { head: head, v: v, d: d, view: null };
    });
    w.stage.appendChild(grid);
    var note = el('p', { class: 'small muted s32h-note' }); w.stage.appendChild(note);
    var sel = w.select({ label: t('Pair of isomers'), options: PAIRS.map(function (p) { return { value: p.id, label: p.name }; }), value: w.options.start || 'butene', onChange: update });
    function update() {
      var p = PAIRS.filter(function (x) { return x.id === sel.value; })[0] || PAIRS[0];
      [['cis', p.cis, p.cis2], ['trans', p.trans, p.trans2]].forEach(function (row, i) {
        var c = cells[i], name = (i ? 'trans-' : 'cis-') + p.name;
        c.head.innerHTML = '<i>' + (i ? 'trans' : 'cis') + '</i>-' + p.name;
        var spec = row[1]().spec(t('Ball-and-stick model of {name}', { name: name }), 220);
        if (c.view) c.view.setSpec(spec); else c.view = S1.mol.viewer3d(c.v, spec);
        mol2d(c.d, withLabel(row[2], t('Drawing of {name}', { name: name }), 34));
      });
      setSame(t('Molecular formula, and which atom is bonded to which.'));
      setDiff(p.ringNote ? t('cis: both {g} groups on the same face of the ring. trans: on opposite faces.', { g: p.group }) : t('cis: both {g} groups on the same side of the double bond. trans: on opposite sides.', { g: p.group }));
      setLock(t('Atoms cannot rotate around {lock}, so one isomer cannot turn into the other without breaking a bond.', { lock: p.lock }));
      note.innerHTML = p.flat ? t('Model note: the ring of cyclobutane is drawn flat here. The real ring is slightly bent. In the drawings, a wedge bond points towards you and a hashed bond points away from you.') : p.ringNote ? t('In the drawings, a wedge bond points towards you and a hashed bond points away from you.') : t('Turn each model. However you turn it, you cannot make one model look like the other.');
    }
    update();
  });

  /* ==========================================================================
     s3-2h.ctest — can this molecule show cis–trans isomerism?
     ========================================================================== */
  S1.widgets.register('s3-2h.ctest', function (w) {
    var ITEMS = [
      { name: t('but-1-ene'), spec: alkene(['H', 'H', 'CH2CH3', 'H']), yes: false, why: t('No. One carbon of the C=C has two H atoms. Swapping two identical groups changes nothing.') },
      { name: t('but-2-ene'), spec: alkene(['H3C', 'H', 'CH3', 'H']), yes: true, why: t('Yes. Each carbon of the C=C has two different groups: H and CH<sub>3</sub>.'),
        pair: [alkene(['H3C', 'H', 'CH3', 'H']), alkene(['H3C', 'H', 'H', 'CH3'])] },
      { name: t('2-methylpropene'), spec: alkene(['H', 'H', 'CH3', 'CH3']), yes: false, why: t('No. One carbon of the C=C has two H atoms and the other has two CH<sub>3</sub> groups.') },
      { name: t('1,2-dichloroethene'), spec: alkene(['Cl', 'H', 'Cl', 'H']), yes: true, why: t('Yes. Each carbon of the C=C has two different groups: H and Cl.'),
        pair: [alkene(['Cl', 'H', 'Cl', 'H']), alkene(['Cl', 'H', 'H', 'Cl'])] },
      { name: t('1,1-dichloroethene'), spec: alkene(['Cl', 'Cl', 'H', 'H']), yes: false, why: t('No. One carbon has two Cl atoms and the other has two H atoms.') },
      { name: t('2-methylbut-2-ene'), spec: alkene(['H3C', 'H3C', 'CH3', 'H']), yes: false, why: t('No. The left carbon of the C=C has two CH<sub>3</sub> groups. One carbon with two identical groups is enough to rule it out.') },
      { name: t('pent-2-ene'), spec: alkene(['H3C', 'H', 'CH2CH3', 'H']), yes: true, why: t('Yes. One carbon has H and CH<sub>3</sub>. The other has H and CH<sub>2</sub>CH<sub>3</sub>. The groups do not need to match across the double bond.'),
        pair: [alkene(['H3C', 'H', 'CH2CH3', 'H']), alkene(['H3C', 'H', 'H', 'CH2CH3'])] },
      { name: t('1-chloropropene'), spec: alkene(['Cl', 'H', 'CH3', 'H']), yes: true, why: t('Yes. One carbon has H and Cl. The other has H and CH<sub>3</sub>.'),
        pair: [alkene(['Cl', 'H', 'CH3', 'H']), alkene(['Cl', 'H', 'H', 'CH3'])] },
      { name: t('1,2-dimethylcyclopropane'), spec: ring(3, [{ at: 0, l: 'H3C' }, { at: 1, l: 'CH3' }]), yes: true, why: t('Yes. Two ring carbons each have two different groups: H and CH<sub>3</sub>. The ring stops rotation.'),
        pair: [ring(3, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'wedge' }]), ring(3, [{ at: 0, l: 'H3C', stereo: 'wedge' }, { at: 1, l: 'CH3', stereo: 'hash' }])] },
      { name: t('1,1-dimethylcyclopropane'), spec: ring(3, [{ at: 2, l: 'H3C', turn: -38 }, { at: 2, l: 'CH3', turn: 38 }]), yes: false, why: t('No. Both CH<sub>3</sub> groups are on the same ring carbon. No ring carbon has two different groups.') },
      { name: t('1,2-dichlorocyclobutane'), spec: ring(4, [{ at: 0, l: 'Cl' }, { at: 1, l: 'Cl' }]), yes: true, why: t('Yes. Two ring carbons each have two different groups: H and Cl. The ring stops rotation.'),
        pair: [ring(4, [{ at: 0, l: 'Cl', stereo: 'wedge' }, { at: 1, l: 'Cl', stereo: 'wedge' }]), ring(4, [{ at: 0, l: 'Cl', stereo: 'wedge' }, { at: 1, l: 'Cl', stereo: 'hash' }])] },
      { name: t('methylcyclobutane'), spec: ring(4, [{ at: 0, l: 'H3C' }]), yes: false, why: t('No. Only one ring carbon has two different groups. You need two such ring carbons.') }
    ];
    var i = 0, score = 0, done = {}, setScore = w.readoutItem(t('Correct first time'));
    var title = el('p', { class: 's32h-q' }), draw = el('div', { class: 's32h-center' }), row = el('div', { class: 'btn-row' }), out = el('div', { 'aria-live': 'polite' });
    w.stage.appendChild(title); w.stage.appendChild(draw); w.stage.appendChild(row); w.stage.appendChild(out);
    var yes = el('button', { class: 'btn', type: 'button', html: SPAN + t('Yes, it has <i>cis</i>–<i>trans</i> isomers') }), no = el('button', { class: 'btn', type: 'button', html: SPAN + t('No, it does not') });
    var next = el('button', { class: 'btn btn--primary', type: 'button', html: SPAN + t('Next molecule') });
    row.appendChild(yes); row.appendChild(no); row.appendChild(next);
    function show() {
      var it = ITEMS[i];
      title.innerHTML = t('Molecule {n} of {total}: {name}. Can it show <i>cis</i>–<i>trans</i> isomerism?', { n: i + 1, total: ITEMS.length, name: '<b>' + it.name + '</b>' });
      mol2d(draw, withLabel(it.spec, t('Structure of {name}', { name: it.name })));
      clear(out); yes.disabled = no.disabled = false;
      setScore(score + ' / ' + Object.keys(done).length);
    }
    function answer(val) {
      var it = ITEMS[i], right = val === it.yes;
      if (!(i in done)) { done[i] = right; if (right) score++; }
      clear(out);
      out.appendChild(feedback(right ? 'right' : 'wrong', '<p><b>' + (right ? t('Correct.') : t('Not quite.')) + '</b> ' + it.why + '</p>'));
      if (it.pair) {
        var host = el('div'); out.appendChild(host);
        figRow(host, [{ spec: withLabel(it.pair[0], t('cis isomer of {name}', { name: it.name })), cap: '<i>cis</i>' }, { spec: withLabel(it.pair[1], t('trans isomer of {name}', { name: it.name })), cap: '<i>trans</i>' }]);
      }
      yes.disabled = no.disabled = true;
      setScore(score + ' / ' + Object.keys(done).length);
    }
    yes.addEventListener('click', function () { answer(true); });
    no.addEventListener('click', function () { answer(false); });
    next.addEventListener('click', function () { i = (i + 1) % ITEMS.length; show(); });
    show();
  });

  /* ==========================================================================
     s3-2h.mirror — a molecule and its mirror image: try to superimpose
     ========================================================================== */
  S1.widgets.register('s3-2h.mirror', function (w) {
    var a = Math.sqrt(2 / 3), b = Math.sqrt(1 / 3);
    var T = [[0, a, b], [0, -a, b], [-a, 0, -b], [a, 0, -b]];                 // top, bottom, left, right (left and right point away from you)
    var PLACE = [t('top'), t('bottom'), t('left'), t('right')];
    var MOLS = [
      { id: 'butan2ol', name: t('butan-2-ol'), g: ['OH', 'H', 'CH3', 'C2H5'], chiral: true },
      { id: 'lactic', name: t('2-hydroxypropanoic acid'), g: ['OH', 'H', 'CH3', 'COOH'], chiral: true },
      { id: 'chfclbr', name: t('bromochlorofluoromethane'), g: ['F', 'H', 'Cl', 'Br'], chiral: true },
      { id: 'propan2ol', name: t('propan-2-ol (two groups the same)'), g: ['OH', 'H', 'CH3', 'CH3'] },
      { id: 'ch2brcl', name: t('bromochloromethane (two groups the same)'), g: ['Br', 'Cl', 'H', 'H'] }
    ];
    var GNAME = { C2H5: 'CH<sub>2</sub>CH<sub>3</sub>', CH3: 'CH<sub>3</sub>' };
    function gname(g) { return GNAME[g] || g; }
    var mol, baseB, R, perm, anim = null, moves = 0;
    var setMatch = w.readoutItem(t('Groups in the same place')), setWhich = w.readoutItem(t('Matching groups'), { text: true }), setVerdict = w.readoutItem(t('What this shows'), { text: true });
    var grid = el('div', { class: 's32h-pair s32h-pair--mirror' });
    var hA = el('p', { class: 's32h-pair__head', html: t('Molecule A') }), hB = el('p', { class: 's32h-pair__head', html: t('Mirror image of A (molecule B)') });
    var vA = el('div'), vB = el('div');
    grid.appendChild(el('div', { class: 's32h-pair__cell' }, [hA, vA])); grid.appendChild(el('div', { class: 's32h-pair__cell s32h-pair__cell--mirror' }, [hB, vB]));
    w.stage.appendChild(grid);
    var viewA = null, viewB = null;
    function build(m) {
      var M = new Model(), c = M.atom('C', [0, 0, 0]);
      m.g.forEach(function (g, k) { M.attach(c, T[k], g, k); });
      return M;
    }
    function apply(Rm, p) { return [Rm[0][0] * p[0] + Rm[0][1] * p[1] + Rm[0][2] * p[2], Rm[1][0] * p[0] + Rm[1][1] * p[1] + Rm[1][2] * p[2], Rm[2][0] * p[0] + Rm[2][1] * p[1] + Rm[2][2] * p[2]]; }
    function rotM(axis, ang) {
      var u = vnorm(axis), c = Math.cos(ang), s = Math.sin(ang), k = 1 - c, x = u[0], y = u[1], z = u[2];
      return [[c + x * x * k, x * y * k - z * s, x * z * k + y * s], [y * x * k + z * s, c + y * y * k, y * z * k - x * s], [z * x * k - y * s, z * y * k + x * s, c + z * z * k]];
    }
    function mul(A, B) { var o = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) for (var k = 0; k < 3; k++) o[i][j] += A[i][k] * B[k][j]; return o; }
    function specB(Rm) {
      return { atoms: baseB.atoms.map(function (at) { var p = apply(Rm, [at.x, at.y, at.z]); return { el: at.el, x: p[0], y: p[1], z: p[2] }; }), bonds: baseB.bonds, height: 240, controls: false,
        label: t('Ball-and-stick model of the mirror image of {name}', { name: mol.name }) };
    }
    function load() {
      mol = MOLS.filter(function (m) { return m.id === sel.value; })[0] || MOLS[0];
      var A = build(mol);
      baseB = { atoms: A.atoms.map(function (at) { return { el: at.el, x: -at.x, y: at.y, z: at.z }; }), bonds: A.bonds };
      R = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; perm = [0, 1, 3, 2]; moves = 0; anim = null;
      var sA = A.spec(t('Ball-and-stick model of {name}', { name: mol.name }), 240); sA.controls = false;
      if (viewA) { viewA.setSpec(sA); viewB.setSpec(specB(R)); }
      else {
        viewA = S1.mol.viewer3d(vA, sA); viewB = S1.mol.viewer3d(vB, specB(R));
        viewA.rotate(0.5, -0.2); viewB.rotate(0.5, -0.2);                 // face-on, so that B looks like the reflection of A
      }
      report();
    }
    function report() {
      var same = [], k;
      for (k = 0; k < 4; k++) if (mol.g[perm[k]] === mol.g[k]) same.push(gname(mol.g[k]) + ' (' + PLACE[k] + ')');
      setMatch(same.length + ' / 4');
      setWhich(same.length ? same.join(', ') : t('none'));
      if (same.length === 4) setVerdict(t('All four groups match. B can be placed exactly on A, so B is the same molecule as A. This molecule is not chiral.'));
      else if (!mol.chiral) setVerdict(t('Keep rotating B. For this molecule you can make all four groups match, because two of the groups are the same.'));
      else if (moves < 2) setVerdict(t('Rotate B and try to make all four groups match A.'));
      else setVerdict(t('You can match two groups at most. When you fix the other two, the first two no longer match. A and B are non-superimposable mirror images: a pair of enantiomers.'));
    }
    function move(axis, ang) {
      if (anim) return;
      var Rstep = rotM(axis, ang), next = [];
      for (var k = 0; k < 4; k++) {                                         // where does the group at place k go?
        var p = apply(Rstep, T[k]), best = 0, bd = -2;
        for (var j = 0; j < 4; j++) { var d = p[0] * T[j][0] + p[1] * T[j][1] + p[2] * T[j][2]; if (d > bd) { bd = d; best = j; } }
        next[best] = perm[k];
      }
      moves++;
      if (w.reducedMotion) { R = mul(Rstep, R); perm = next; viewB.setSpec(specB(R)); report(); return; }
      anim = { axis: axis, total: ang, done: 0, from: R, next: next, to: mul(Rstep, R) };
      loop.start(true);
    }
    var loop = w.loop(function (dt) {
      if (!anim) { loop.stop(); return; }
      anim.done = Math.min(1, anim.done + dt / 0.6);
      if (anim.done >= 1) { R = anim.to; perm = anim.next; anim = null; viewB.setSpec(specB(R)); report(); loop.stop(); return; }
      var e = anim.done * anim.done * (3 - 2 * anim.done);
      viewB.setSpec(specB(mul(rotM(anim.axis, anim.total * e), anim.from)));
    });
    var sel = w.select({ label: t('Molecule'), options: MOLS.map(function (m) { return { value: m.id, label: m.name }; }), value: w.options.start || 'butan2ol', onChange: load });
    w.button(t('Spin B about its top bond (120°)'), function () { move(T[0], 2 * Math.PI / 3); });
    w.button(t('Spin B about its left bond (120°)'), function () { move(T[2], 2 * Math.PI / 3); });
    w.button(t('Turn B upside down (180°)'), function () { move([0, 0, 1], Math.PI); });
    w.button(t('Start again'), load);
    var turn = el('div', { class: 'btn-row s32h-turn' });
    var lb = el('button', { class: 'btn btn--small btn--quiet', type: 'button', html: SPAN + t('Turn both models left') }), rb = el('button', { class: 'btn btn--small btn--quiet', type: 'button', html: SPAN + t('Turn both models right') });
    lb.addEventListener('click', function () { viewA.rotate(-0.3, 0); viewB.rotate(-0.3, 0); });
    rb.addEventListener('click', function () { viewA.rotate(0.3, 0); viewB.rotate(0.3, 0); });
    turn.appendChild(lb); turn.appendChild(rb); w.stage.appendChild(turn);
    load();
    // The two models share one viewpoint: dragging either canvas turns both by the same amount.
    [vA, vB].forEach(function (host) {
      var cv = host.querySelector('canvas'); if (!cv) return;
      cv.style.pointerEvents = 'none'; cv.tabIndex = -1; host.style.cursor = 'grab'; host.style.touchAction = 'pan-y';
      var drag = null;
      w.listen(host, 'pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY }; });
      w.listen(host, 'pointermove', function (e) { if (!drag) return; var dx = (e.clientX - drag.x) * 0.01, dy = (e.clientY - drag.y) * 0.01; drag = { x: e.clientX, y: e.clientY }; viewA.rotate(dx, dy); viewB.rotate(dx, dy); });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) { w.listen(host, ev, function () { drag = null; }); });
    });
  });

  /* ==========================================================================
     s3-2h.spotter — click the chiral carbon
     ========================================================================== */
  S1.widgets.register('s3-2h.spotter', function (w) {
    var H3 = t('This carbon has three H atoms. A chiral carbon needs four different groups.');
    var H2 = t('This carbon has two H atoms, so two of its four groups are the same.');
    var DBL = t('This carbon has a double bond, so it is bonded to only three groups. A chiral carbon is bonded to four different groups.');
    function c(l, why, extra) { var o = { l: l, pick: true, why: why }; if (extra) Object.keys(extra).forEach(function (k) { o[k] = extra[k]; }); return o; }
    var ITEMS = [
      { name: t('butan-2-ol'), style: t('structural formula'),
        spec: chain([c('CH3', H3), c('C', t('Correct. Its four groups are all different: H, OH, CH<sub>3</sub> and CH<sub>2</sub>CH<sub>3</sub>.'), { chiral: true, up: 'H', down: 'OH' }), c('CH2', H2), c('CH3', H3)]) },
      { name: t('propan-2-ol'), style: t('structural formula'), none: t('Correct. The middle carbon has H, OH and two CH<sub>3</sub> groups. Two groups are the same, so no carbon is chiral.'),
        spec: chain([c('CH3', H3), c('C', t('Look again. This carbon has H, OH and two CH<sub>3</sub> groups. Two of its groups are the same.'), { up: 'H', down: 'OH' }), c('CH3', H3)]) },
      { name: t('2-hydroxypropanoic acid'), style: t('structural formula'),
        spec: chain([c('CH3', H3), c('C', t('Correct. Its four groups are all different: H, OH, CH<sub>3</sub> and COOH.'), { chiral: true, up: 'H', down: 'OH' }), c('COOH', DBL)]) },
      { name: t('3-methylpentane'), style: t('structural formula'), none: t('Correct. Carbon 3 has H, CH<sub>3</sub> and two CH<sub>2</sub>CH<sub>3</sub> groups. Two groups are the same, so no carbon is chiral.'),
        spec: chain([c('CH3', H3), c('CH2', H2), c('C', t('Look again. Compare the whole group on each side: this carbon has two CH<sub>2</sub>CH<sub>3</sub> groups.'), { up: 'H', down: c('CH3', H3) }), c('CH2', H2), c('CH3', H3)], 1.45) },
      { name: t('pentan-2-ol'), style: t('skeletal formula'),
        spec: zig(5, { 1: { l: 'OH' } }, [
          { pick: true, aria: t('carbon 1'), why: t('Carbon 1 is a CH<sub>3</sub> group: three H atoms. Skeletal formulas do not show the H atoms.') },
          { pick: true, aria: t('carbon 2'), chiral: true, why: t('Correct. Carbon 2 has four different groups: H (not drawn), OH, CH<sub>3</sub> and CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>.') },
          { pick: true, aria: t('carbon 3'), why: t('Carbon 3 is a CH<sub>2</sub> group: two H atoms that are not drawn.') },
          { pick: true, aria: t('carbon 4'), why: t('Carbon 4 is a CH<sub>2</sub> group: two H atoms that are not drawn.') },
          { pick: true, aria: t('carbon 5'), why: t('Carbon 5 is a CH<sub>3</sub> group: three H atoms.') }]) },
      { name: t('3-methylhexane'), style: t('skeletal formula'),
        spec: zig(6, { 2: { l: '', pick: true, aria: t('carbon of the methyl branch'), why: t('The branch is a CH<sub>3</sub> group: three H atoms.') } }, [
          { pick: true, aria: t('carbon 1'), why: t('Carbon 1 is a CH<sub>3</sub> group: three H atoms.') },
          { pick: true, aria: t('carbon 2'), why: t('Carbon 2 is a CH<sub>2</sub> group: two H atoms that are not drawn.') },
          { pick: true, aria: t('carbon 3'), chiral: true, why: t('Correct. Carbon 3 has four different groups: H (not drawn), CH<sub>3</sub>, CH<sub>2</sub>CH<sub>3</sub> and CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>.') },
          { pick: true, aria: t('carbon 4'), why: t('Carbon 4 is a CH<sub>2</sub> group: two H atoms that are not drawn.') },
          { pick: true, aria: t('carbon 5'), why: t('Carbon 5 is a CH<sub>2</sub> group: two H atoms that are not drawn.') },
          { pick: true, aria: t('carbon 6'), why: t('Carbon 6 is a CH<sub>3</sub> group: three H atoms.') }]) },
      { name: t('2,3-dihydroxybutanal'), style: t('structural formula'),
        spec: chain([c('CH3', H3),
          c('C', t('Correct. Its four groups are all different: H, OH, CH<sub>3</sub> and CH(OH)CHO.'), { chiral: true, up: 'H', down: 'OH' }),
          c('C', t('Correct. Its four groups are all different: H, OH, CHO and CH(OH)CH<sub>3</sub>.'), { chiral: true, up: 'H', down: 'OH' }),
          c('CHO', DBL)]) }
    ];
    var i = 0, found, api, setFound = w.readoutItem(t('Chiral carbons found'));
    var title = el('p', { class: 's32h-q' }), draw = el('div', { class: 's32h-center' }), row = el('div', { class: 'btn-row' }), out = el('div', { 'aria-live': 'polite' });
    w.stage.appendChild(title); w.stage.appendChild(draw); w.stage.appendChild(row); w.stage.appendChild(out);
    var none = el('button', { class: 'btn', type: 'button', html: SPAN + t('This molecule has no chiral carbon') });
    var all = el('button', { class: 'btn', type: 'button', html: SPAN + t('I have found them all') });
    var next = el('button', { class: 'btn btn--primary', type: 'button', html: SPAN + t('Next molecule') });
    row.appendChild(none); row.appendChild(all); row.appendChild(next);
    function total(it) { return it.spec.atoms.filter(function (a) { return a.chiral; }).length; }
    function say(kind, html) { clear(out); out.appendChild(feedback(kind, '<p>' + html + '</p>')); }
    function show() {
      var it = ITEMS[i]; found = {};
      title.innerHTML = t('Molecule {n} of {total}: {name} ({style}). Click every chiral carbon.', { n: i + 1, total: ITEMS.length, name: '<b>' + it.name + '</b>', style: it.style });
      var spec = withLabel({ atoms: it.spec.atoms, bonds: it.spec.bonds }, t('{style} of {name}. Each carbon atom is a button.', { style: it.style, name: it.name }));
      spec.onPick = function (k) {
        var a = it.spec.atoms[k];
        if (a.chiral) { found[k] = true; api.mark(k, 'yes'); say('right', a.why); } else { api.mark(k, 'no'); say('wrong', a.why); }
        setFound(String(Object.keys(found).length));
      };
      api = mol2d(draw, spec);
      clear(out); setFound('0');
    }
    none.addEventListener('click', function () {
      var it = ITEMS[i], n = total(it);
      if (n === 0) say('right', it.none);
      else say('wrong', t('Look again. This molecule has at least one carbon bonded to four different groups.'));
    });
    all.addEventListener('click', function () {
      var it = ITEMS[i], n = total(it), got = Object.keys(found).length;
      if (n === 0) say('wrong', t('There is nothing to find here. Check each carbon: does any have four different groups?'));
      else if (got === n) say('right', n === 1 ? t('Yes. This molecule has one chiral carbon.') : t('Yes. This molecule has {n} chiral carbons.', { n: n }));
      else say('wrong', t('Not yet. There is another chiral carbon to find.'));
    });
    next.addEventListener('click', function () { i = (i + 1) % ITEMS.length; show(); });
    show();
  });

  /* ==========================================================================
     s3-2h.wedge — how to draw a pair of enantiomers
     ========================================================================== */
  S1.widgets.register('s3-2h.wedge', function (w) {
    var MOLS = [
      { id: 'butan2ol', name: t('butan-2-ol'), g: { up: 'CH3', side: 'OH', wedge: 'H', hash: 'CH2CH3' } },
      { id: 'lactic', name: t('2-hydroxypropanoic acid'), g: { up: 'COOH', side: 'OH', wedge: 'H', hash: 'CH3' } },
      { id: 'alanine', name: t('2-aminopropanoic acid'), g: { up: 'COOH', side: 'NH2', wedge: 'H', hash: 'CH3' } }
    ];
    var STEPS = [
      t('Step 1. Write the chiral carbon in the centre.'),
      t('Step 2. Draw two bonds as plain lines. These two bonds lie in the plane of the paper. Keep the angle between them wider than 90°, close to the tetrahedral angle of 109.5°.'),
      t('Step 3. Draw one bond as a solid wedge. A wedge bond points out of the paper, towards you. The narrow end is at the chiral carbon.'),
      t('Step 4. Draw the last bond as a hashed (dashed) wedge. It points into the paper, away from you. All four groups must be different.'),
      t('Step 5. Draw a dashed mirror line. Then draw the reflection: each group is the same distance from the line on the other side. The two drawings are the pair of enantiomers.')
    ];
    var step = 1, setStep = w.readoutItem(t('What to do'), { text: true });
    var draw = el('div', { class: 's32h-center s32h-wedge' }); w.stage.appendChild(draw);
    var sel = w.select({ label: t('Molecule'), options: MOLS.map(function (m) { return { value: m.id, label: m.name }; }), value: 'butan2ol', onChange: function () { step = 1; update(); } });
    var back = w.button(t('Back'), function () { step = Math.max(1, step - 1); update(); });
    var fwd = w.button(t('Next step'), function () { step = Math.min(5, step + 1); update(); }, { primary: true });
    function update() {
      var m = MOLS.filter(function (x) { return x.id === sel.value; })[0] || MOLS[0];
      var full = enantPair(m.g, 5), part = enantPair(m.g, step);
      // keep the picture the same size at every step: add invisible corner points from the full drawing
      var xs = full.atoms.map(function (a) { return a.x; }), ys = full.atoms.map(function (a) { return a.y; });
      part.atoms.push({ x: Math.min.apply(null, xs) - 0.6, y: Math.min.apply(null, ys) }, { x: Math.max.apply(null, xs) + 0.6, y: Math.max.apply(null, ys) });
      mol2d(draw, withLabel(part, t('Wedge–dash drawing of {name}, step {n} of 5', { name: m.name, n: step })));
      setStep(STEPS[step - 1]);
      if (back && back.el) back.el.disabled = step === 1; else if (back && 'disabled' in back) back.disabled = step === 1;
      if (fwd && fwd.el) fwd.el.disabled = step === 5; else if (fwd && 'disabled' in fwd) fwd.disabled = step === 5;
    }
    update();
  });

  /* ==========================================================================
     s3-2h.polarimeter — rotation of plane-polarized light (illustration)
     ========================================================================== */
  S1.widgets.register('s3-2h.polarimeter', function (w) {
    var SAMPLES = [
      { id: 'a', label: t('One enantiomer'), ang: 25, text: t('The plane of polarization is rotated clockwise.') },
      { id: 'b', label: t('The other enantiomer'), ang: -25, text: t('The plane of polarization is rotated anticlockwise, by the same angle.') },
      { id: 'rac', label: t('Racemic mixture'), ang: 0, text: t('No rotation. The two enantiomers are present in equal amounts, so their rotations cancel.') },
      { id: 'none', label: t('A substance that is not chiral'), ang: 0, text: t('No rotation. The substance is not optically active.') }
    ];
    var setRot = w.readoutItem(t('What is observed'), { text: true }), setAct = w.readoutItem(t('Optically active?'));
    var svg = w.svg('0 0 360 156', { label: t('Diagram of a polarimeter: light source, polarizer, sample tube and analyser') });
    svg.style.maxWidth = '34rem';
    var cur = 'a';
    var s = seg(w.controls, t('Sample in the tube'), SAMPLES.map(function (x) { return { value: x.id, label: x.label }; }), cur, function (v) { cur = v; update(); });
    s.el.classList.add('s32h-wrapseg');
    var legend = el('ol', { class: 's32h-legend small' }, [
      el('li', { html: t('Light source. Ordinary light vibrates in all planes.') }),
      el('li', { html: t('Polarizer. Only light vibrating in one plane passes: plane-polarized light.') }),
      el('li', { html: t('Tube holding a solution of the sample.') }),
      el('li', { html: t('Analyser. It is turned to find the new plane, and the angle is read.') })
    ]);
    w.stage.appendChild(legend);
    function arrow2(cx, cy, len, deg, col) {
      var r = deg * Math.PI / 180, dx = Math.sin(r) * len / 2, dy = -Math.cos(r) * len / 2, g = svgEl('g', {}, svg);
      svgEl('line', { x1: cx - dx, y1: cy - dy, x2: cx + dx, y2: cy + dy, style: 'stroke:' + col + ';stroke-width:2.5;stroke-linecap:round' }, g);
      [[1, dx, dy], [-1, -dx, -dy]].forEach(function (e) {
        var ex = cx + e[1], ey = cy + e[2], ux = e[1] / (len / 2), uy = e[2] / (len / 2), nx = -uy, ny = ux;
        svgEl('path', { d: 'M' + ex + ' ' + ey + ' L' + (ex - ux * 8 + nx * 4.5) + ' ' + (ey - uy * 8 + ny * 4.5) + ' L' + (ex - ux * 8 - nx * 4.5) + ' ' + (ey - uy * 8 - ny * 4.5) + ' Z', style: 'fill:' + col }, g);
      });
    }
    function num(x, n) { svgEl('text', { x: x, y: 146, 'text-anchor': 'middle', style: 'fill:var(--ink-2);font-family:var(--font-mono);font-size:13px;font-weight:600', text: String(n) }, svg); }
    function update() {
      var smp = SAMPLES.filter(function (x) { return x.id === cur; })[0];
      clear(svg);
      var y = 84, ln = 'stroke:var(--ink-3);stroke-width:1.5;stroke-dasharray:4 4';
      svgEl('line', { x1: 22, y1: y, x2: 338, y2: y, style: ln }, svg);
      // 1 light source with light vibrating in all planes
      svgEl('circle', { cx: 22, cy: y, r: 12, style: 'fill:var(--surface-2);stroke:var(--ink);stroke-width:1.8' }, svg);
      [0, 45, 90, 135].forEach(function (d) { arrow2(62, y, 40, d, 'var(--ink-2)'); });
      // 2 polarizer
      svgEl('rect', { x: 98, y: y - 38, width: 10, height: 76, style: 'fill:var(--surface-2);stroke:var(--ink);stroke-width:1.8' }, svg);
      arrow2(132, y, 52, 0, 'var(--accent)');
      // 3 sample tube
      svgEl('rect', { x: 160, y: y - 20, width: 86, height: 40, rx: 6, style: 'fill:var(--accent-soft);stroke:var(--ink);stroke-width:1.8' }, svg);
      arrow2(272, y, 52, smp.ang, 'var(--accent)');
      // 4 analyser dial
      svgEl('circle', { cx: 322, cy: y, r: 30, style: 'fill:var(--surface);stroke:var(--ink);stroke-width:1.8' }, svg);
      svgEl('line', { x1: 322, y1: y - 30, x2: 322, y2: y - 22, style: 'stroke:var(--ink);stroke-width:2' }, svg);
      svgEl('text', { x: 322, y: y - 36, 'text-anchor': 'middle', style: 'fill:var(--ink-2);font-family:var(--font-mono);font-size:11px', text: '0°' }, svg);
      var r = smp.ang * Math.PI / 180;
      svgEl('line', { x1: 322, y1: y, x2: 322 + Math.sin(r) * 24, y2: y - Math.cos(r) * 24, style: 'stroke:var(--accent);stroke-width:3;stroke-linecap:round' }, svg);
      svgEl('circle', { cx: 322, cy: y, r: 3, style: 'fill:var(--ink)' }, svg);
      num(22, 1); num(103, 2); num(203, 3); num(322, 4);
      setRot(smp.text);
      setAct(smp.ang ? t('yes') : t('no'));
    }
    update();
  });

  /* ==========================================================================
     Spectra data
     ========================================================================== */
  /* Mass spectra: [m/z, relative abundance %, ion, note]. Major peaks from the NIST Chemistry WebBook. */
  function msData() {
    var H1 = t('A hydrogen atom, mass 1, is lost. This loss is not in the booklet table.');
    var NOT43 = t('The piece lost is CH<sub>3</sub>CO•, mass 43. It is not in the booklet table.');
    return [
      { id: 'ethanol', name: t('ethanol'), f: 'CH3CH2OH', M: 46, peaks: [
        [15, 7, 'CH3+', t('The booklet suggests •OCH<sub>3</sub> for a loss of 31. Ethanol has no OCH<sub>3</sub> group. Here the piece lost is •CH<sub>2</sub>OH, which also has a mass of 31. The table lists possible pieces only: they must fit the structure.')],
        [27, 22], [29, 30, 'CH3CH2+'], [31, 100, 'CH2OH+'], [45, 51, 'CH3CHOH+', H1], [46, 22] ] },
      { id: 'propan1ol', name: t('propan-1-ol'), f: 'CH3CH2CH2OH', M: 60, mNote: t('The molecular ion peak is small here. It is not the tallest peak. Look for it at the highest m/z.'), peaks: [
        [27, 16], [29, 18, 'CH3CH2+', t('The booklet suggests •OCH<sub>3</sub> for a loss of 31. Propan-1-ol has no OCH<sub>3</sub> group. Here the piece lost is •CH<sub>2</sub>OH, which also has a mass of 31.')],
        [31, 100, 'CH2OH+'], [42, 14, 'C3H6+'], [59, 11, 'CH3CH2CHOH+', H1], [60, 7] ] },
      { id: 'propanal', name: t('propanal'), f: 'CH3CH2CHO', M: 58, mNote: t('Here the molecular ion peak is also the tallest peak. That is not usual.'), peaks: [
        [27, 47], [28, 58], [29, 88, 'CH3CH2+', t('Two different ions have m/z = 29 here. CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> forms when the molecule loses •CHO. CHO<sup>+</sup> forms when it loses •CH<sub>2</sub>CH<sub>3</sub>. Both losses have a mass of 29.')],
        [57, 30, 'CH3CH2CO+', H1], [58, 100] ] },
      { id: 'propanone', name: t('propanone'), f: 'CH3COCH3', M: 58, peaks: [
        [15, 12, 'CH3+', NOT43], [42, 10], [43, 100, 'CH3CO+'], [58, 25] ] },
      { id: 'butanone', name: t('butanone'), f: 'CH3COCH2CH3', M: 72, peaks: [
        [27, 8], [29, 17, 'CH3CH2+', NOT43], [43, 100, 'CH3CO+', t('The booklet gives two possible pieces for a loss of 29. A ketone has no CHO group, so the piece lost is •CH<sub>2</sub>CH<sub>3</sub>.')], [57, 8, 'CH3CH2CO+'], [72, 25] ] },
      { id: 'pentan3one', name: t('pentan-3-one'), f: 'CH3CH2COCH2CH3', M: 86, peaks: [
        [27, 12], [29, 59, 'CH3CH2+', t('The piece lost is CH<sub>3</sub>CH<sub>2</sub>CO•, mass 57. It is not in the booklet table.')],
        [57, 100, 'CH3CH2CO+', t('The booklet gives two possible pieces for a loss of 29. A ketone has no CHO group, so the piece lost is •CH<sub>2</sub>CH<sub>3</sub>.')], [86, 21] ] },
      { id: 'ethanoic', name: t('ethanoic acid'), f: 'CH3COOH', M: 60, peaks: [
        [15, 17, 'CH3+'], [42, 13, 'CH2CO+'], [43, 100, 'CH3CO+'], [45, 90, 'COOH+'], [60, 75] ] },
      { id: 'methylethanoate', name: t('methyl ethanoate'), f: 'CH3COOCH3', M: 74, peaks: [
        [15, 7, 'CH3+', t('The piece lost has a mass of 59. It is not in the booklet table.')], [42, 13], [43, 100, 'CH3CO+'], [59, 11, 'COOCH3+'], [74, 25] ] },
      { id: 'butane', name: t('butane'), f: 'CH3CH2CH2CH3', M: 58, peaks: [
        [15, 6, 'CH3+', t('The piece lost has a mass of 43. It is not in the booklet table.')], [27, 39], [28, 32], [29, 43, 'CH3CH2+', t('The booklet gives two possible pieces for a loss of 29. Butane has no oxygen, so the piece lost is •CH<sub>2</sub>CH<sub>3</sub>.')],
        [41, 29], [42, 12], [43, 100, 'CH3CH2CH2+'], [58, 12] ] }
    ];
  }

  /* Infrared: bands [{at, depth, width, row, twin, why}] can be clicked; `extra` bands are drawn but not assigned. */
  function irData() {
    var SHARP = t('Two booklet rows include this wavenumber. The band is sharp, not very broad, so it is C–H. The O–H of a carboxylic acid gives a very broad band.');
    var CF = t('Two booklet rows include this wavenumber: C–O and C–F. The molecule contains no fluorine, so the bond is C–O.');
    return [
      { id: 'hexane', name: t('hexane'), cls: 'alkane', bands: [{ at: 2930, depth: 74, width: 45, row: 'ch', why: SHARP }],
        extra: [{ at: 1465, depth: 34, width: 14 }, { at: 1380, depth: 24, width: 10 }, { at: 725, depth: 14, width: 10 }] },
      { id: 'hexene', name: t('hex-1-ene'), cls: 'alkene', bands: [{ at: 2930, depth: 72, width: 42, row: 'ch', why: SHARP }, { at: 1640, depth: 42, width: 11, row: 'cc2', why: t('Only the C=C row includes this wavenumber. The band is of medium strength.') }],
        extra: [{ at: 3080, depth: 30, width: 10 }, { at: 1460, depth: 32, width: 14 }, { at: 995, depth: 34, width: 10 }, { at: 910, depth: 48, width: 10 }] },
      { id: 'propan2ol', name: t('propan-2-ol'), cls: 'alcohol', bands: [
        { at: 3350, depth: 66, width: 150, row: 'oh_alc', why: t('Two booklet rows include this wavenumber: O–H in alcohols and N–H. The band is one broad, strong band, so it is O–H. N–H in a primary amine gives two bands of medium strength.') },
        { at: 2970, depth: 70, width: 26, row: 'ch', why: SHARP }, { at: 1130, depth: 66, width: 26, row: 'co', why: CF }],
        extra: [{ at: 1465, depth: 30, width: 12 }, { at: 1380, depth: 40, width: 12 }, { at: 950, depth: 44, width: 14 }, { at: 815, depth: 22, width: 12 }] },
      { id: 'propanone', name: t('propanone'), cls: 'ketone', bands: [
        { at: 2970, depth: 24, width: 30, row: 'ch', why: SHARP }, { at: 1715, depth: 92, width: 18, row: 'co2', why: t('Only the C=O row includes this wavenumber. The band is strong and sharp.') }],
        extra: [{ at: 1420, depth: 26, width: 12 }, { at: 1360, depth: 36, width: 12 }, { at: 1220, depth: 34, width: 12 }, { at: 530, depth: 28, width: 12 }] },
      { id: 'propanal', name: t('propanal'), cls: 'aldehyde', bands: [
        { at: 2970, depth: 44, width: 32, row: 'ch', why: SHARP }, { at: 1730, depth: 90, width: 18, row: 'co2', why: t('Only the C=O row includes this wavenumber. The band is strong and sharp.') }],
        extra: [{ at: 1460, depth: 28, width: 12 }, { at: 1390, depth: 30, width: 12 }, { at: 850, depth: 24, width: 14 }] },
      { id: 'ethanoic', name: t('ethanoic acid'), cls: 'acid', bands: [
        { at: 2900, depth: 62, width: 300, row: 'oh_acid', why: t('Two booklet rows include this wavenumber. The band is very broad, so it is the O–H of a carboxylic acid. The sharper C–H band is hidden under it.') },
        { at: 1710, depth: 90, width: 22, row: 'co2', why: t('Only the C=O row includes this wavenumber. The band is strong and sharp.') }, { at: 1290, depth: 62, width: 28, row: 'co', why: CF }],
        extra: [{ at: 1415, depth: 34, width: 18 }, { at: 935, depth: 36, width: 34 }, { at: 620, depth: 26, width: 14 }] },
      { id: 'ethylethanoate', name: t('ethyl ethanoate'), cls: 'ester', bands: [
        { at: 2985, depth: 34, width: 24, row: 'ch', why: SHARP }, { at: 1740, depth: 92, width: 18, row: 'co2', why: t('Only the C=O row includes this wavenumber. The band is strong and sharp.') }, { at: 1240, depth: 88, width: 24, row: 'co', why: CF }],
        extra: [{ at: 1375, depth: 44, width: 10 }, { at: 1045, depth: 52, width: 16 }, { at: 850, depth: 18, width: 12 }] },
      { id: 'propylamine', name: t('propan-1-amine'), cls: 'amine', bands: [
        { at: 3370, twin: 3300, depth: 40, width: 24, row: 'nh', why: t('Two booklet rows include this wavenumber: O–H in alcohols and N–H. There are two bands of medium strength, so it is the N–H of a primary amine. O–H gives one broad band.') },
        { at: 2930, depth: 72, width: 42, row: 'ch', why: SHARP }],
        extra: [{ at: 1600, depth: 22, width: 26 }, { at: 1460, depth: 30, width: 14 }, { at: 800, depth: 28, width: 60 }] },
      { id: 'chlorobutane', name: t('1-chlorobutane'), cls: 'halogenoalkane', bands: [
        { at: 2960, depth: 70, width: 32, row: 'ch', why: SHARP }, { at: 730, twin: 650, depth: 56, width: 14, row: 'ccl', why: t('Only the C–Cl row includes this wavenumber. The absorption is strong.') }],
        extra: [{ at: 1465, depth: 38, width: 14 }, { at: 1290, depth: 22, width: 12 }] },
      { id: 'ethoxyethane', name: t('ethoxyethane'), cls: 'ether', bands: [
        { at: 2975, depth: 70, width: 30, row: 'ch', why: SHARP }, { at: 1120, depth: 88, width: 28, row: 'co', why: CF }],
        extra: [{ at: 2865, depth: 52, width: 18 }, { at: 1445, depth: 28, width: 12 }, { at: 1380, depth: 46, width: 10 }, { at: 845, depth: 20, width: 12 }] }
    ];
  }
  function irPeaks(c, labels) {
    var out = [];
    c.bands.forEach(function (b, i) {
      out.push({ at: b.at, depth: b.depth, width: b.width, label: labels ? labels[i] : null });
      if (b.twin) out.push({ at: b.twin, depth: b.depth, width: b.width });
    });
    return out.concat(c.extra || []);
  }

  /* Proton NMR: environments {k, h, row, shift, adj: [letters of environments on neighbouring carbon atoms], group}. */
  function nmrMols() {
    function E(k, h, row, shift, adj, group) { return { k: k, h: h, row: row, shift: shift, adj: adj || [], group: group }; }
    return [
      { id: 'ethanol', name: t('ethanol'), groups: 3, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'OH', env: 'c' }]),
        envs: [E('a', 3, 'ch3', 1.0, ['b'], 'CH3'), E('b', 2, 'ether', 3.6, ['a'], 'CH2'), E('c', 1, 'alcohol', 2.6, [], 'OH')] },
      { id: 'propanone', name: t('propanone'), groups: 2, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'CH3', env: 'a' }]),
        envs: [E('a', 6, 'keto_a', 2.2, [], 'CH3')] },
      { id: 'ethanal', name: t('ethanal'), groups: 2, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'H', env: 'b' }]),
        envs: [E('a', 3, 'keto_a', 2.2, ['b'], 'CH3'), E('b', 1, 'ald', 9.8, ['a'], 'CHO')] },
      { id: 'ethanoic', name: t('ethanoic acid'), groups: 2, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'OH', env: 'b' }]),
        envs: [E('a', 3, 'ester_a', 2.1, [], 'CH3'), E('b', 1, 'acid', 11.5, [], 'COOH')] },
      { id: 'methylethanoate', name: t('methyl ethanoate'), groups: 2, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH3', env: 'b' }]),
        envs: [E('a', 3, 'ester_a', 2.1, [], 'CH3'), E('b', 3, 'ester_o', 3.7, [], 'OCH3')] },
      { id: 'ethylethanoate', name: t('ethyl ethanoate'), groups: 3, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'c' }]),
        envs: [E('a', 3, 'ester_a', 2.0, [], 'CH3'), E('b', 2, 'ester_o', 4.1, ['c'], 'OCH2'), E('c', 3, 'ch3', 1.0, ['b'], 'CH3')] },
      { id: 'butanone', name: t('butanone'), groups: 3, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'c' }]),
        envs: [E('a', 3, 'keto_a', 2.2, [], 'CH3'), E('b', 2, 'keto_a', 2.5, ['c'], 'CH2'), E('c', 3, 'ch3', 1.0, ['b'], 'CH3')] },
      { id: 'tbutanol', name: t('2-methylpropan-2-ol'), groups: 4, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: { l: 'CH3', env: 'a' }, down: { l: 'CH3', env: 'a' } }, { l: 'OH', env: 'b' }]),
        envs: [E('a', 9, 'ch3', 1.0, [], 'CH3'), E('b', 1, 'alcohol', 2.0, [], 'OH')] },
      { id: 'chloroethane', name: t('chloroethane'), groups: 2, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'Cl' }]),
        envs: [E('a', 3, 'ch3', 1.0, ['b'], 'CH3'), E('b', 2, 'hal', 3.5, ['a'], 'CH2')] },
      { id: 'ethoxyethane', name: t('ethoxyethane'), groups: 4, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'a' }]),
        envs: [E('a', 6, 'ch3', 1.0, ['b'], 'CH3'), E('b', 4, 'ether', 3.4, ['a'], 'OCH2')], perGroup: { a: 3, b: 2 } },
      { id: 'propanoic', name: t('propanoic acid'), groups: 3, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'C', up: '=O' }, { l: 'OH', env: 'c' }]),
        envs: [E('a', 3, 'ch3', 1.0, ['b'], 'CH3'), E('b', 2, 'ester_a', 2.4, ['a'], 'CH2'), E('c', 1, 'acid', 11.7, [], 'COOH')] },
      { id: 'neopentane', name: t('2,2-dimethylpropane'), groups: 4, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: { l: 'CH3', env: 'a' }, down: { l: 'CH3', env: 'a' } }, { l: 'CH3', env: 'a' }]),
        envs: [E('a', 12, 'ch3', 0.9, [], 'CH3')] }
    ];
  }
  /** Number of H atoms on neighbouring carbon atoms that split this signal. Equivalent groups on both sides (perGroup) count once per side. */
  function neighbours(mol, env) {
    return env.adj.reduce(function (n, k) {
      var other = mol.envs.filter(function (e) { return e.k === k; })[0];
      return n + (mol.perGroup && mol.perGroup[k] ? mol.perGroup[k] : other.h);
    }, 0);
  }
  function splitName(lines) { return [null, t('singlet'), t('doublet'), t('triplet'), t('quartet')][lines] || t('more than four lines'); }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function ratioOf(envs) { var g = envs.reduce(function (acc, e) { return gcd(acc, e.h); }, 0); return envs.map(function (e) { return e.h / g; }); }
  function nmrSignals(mol, labelFn) {
    return mol.envs.map(function (e) { return { shift: e.shift, h: e.h, split: neighbours(mol, e) + 1, label: labelFn ? labelFn(e) : e.k }; });
  }
  function nmrMax(envs) { var m = Math.max.apply(null, envs.map(function (e) { return e.shift; })); return m > 10 ? 13 : m > 5 ? 10 : 5; }

  /** Map a click on an S1.chart canvas to an x value (the chart's own margins: left 56, or 48 below 420 px; right 16). */
  function chartX(canvas, evt, xmin, xmax, reverse) {
    var r = canvas.getBoundingClientRect(), W = r.width, ml = W < 420 ? 48 : 56, f = (evt.clientX - r.left - ml) / (W - ml - 16);
    if (reverse) f = 1 - f;
    return xmin + f * (xmax - xmin);
  }

  /* ==========================================================================
     s3-2h.ms — mass spectrum interpreter
     ========================================================================== */
  S1.widgets.register('s3-2h.ms', function (w) {
    var DATA = msData(), cur, selMz = null, chart = null;
    var setMz = w.readoutItem('m/z'), setLost = w.readoutItem(t('Mass lost from M<sup>+</sup>')), setMatch = w.readoutItem(t('Booklet: possible piece lost'));
    var host = el('div'), btns = el('div', { class: 'btn-row s32h-peaks', role: 'group', 'aria-label': t('Peaks in the spectrum') }), out = el('div', { 'aria-live': 'polite' });
    w.stage.appendChild(host); w.stage.appendChild(el('p', { class: 'small muted s32h-note', html: t('Click a peak in the spectrum, or use the buttons.') })); w.stage.appendChild(btns); w.stage.appendChild(out);
    var sel = w.select({ label: t('Compound'), options: DATA.map(function (c) { return { value: c.id, label: c.name }; }), value: w.options.start || 'ethanol', onChange: load });
    function xMax() { return Math.ceil((cur.M + 6) / 10) * 10; }
    function spec() {
      var series = [{ type: 'stick', width: 3, color: '--accent', data: cur.peaks.map(function (p) { return [p[0], p[1], p[0] === cur.M && p[0] !== selMz ? 'M⁺' : null]; }) }];
      if (selMz != null) { var p = cur.peaks.filter(function (q) { return q[0] === selMz; })[0]; series.push({ type: 'stick', width: 5, color: '--ink', data: [[p[0], p[1], String(p[0])]] }); }
      return { height: 250, label: t('Simplified mass spectrum of {name}. Peaks at m/z {list}.', { name: cur.name, list: cur.peaks.map(function (q) { return q[0]; }).join(', ') }),
        x: { label: 'm/z', min: 10, max: xMax() }, y: { label: 'Relative abundance / %', min: 0, max: 100, step: 20 }, series: series };
    }
    function pick(mz) {
      selMz = mz; chart.update(spec());
      Array.prototype.forEach.call(btns.children, function (b) { b.setAttribute('aria-pressed', String(Number(b.getAttribute('data-mz')) === mz)); });
      var p = cur.peaks.filter(function (q) { return q[0] === mz; })[0], lost = cur.M - mz, html = '';
      setMz(mz + ' (' + p[1] + ' %)');
      if (lost === 0) {
        setLost('0'); setMatch('—');
        html = '<p>' + t('This is the <b>molecular ion peak</b>. The molecular ion is the whole molecule with one electron removed: {ion}. Its m/z gives the relative molecular mass: <i>M</i><sub>r</sub> = {m}.', { ion: fm(cur.f + '+'), m: cur.M }) + '</p>';
        if (cur.mNote) html += '<p>' + cur.mNote + '</p>';
      } else {
        setLost(cur.M + ' − ' + mz + ' = ' + lost);
        var match = MS_LOST[lost];
        setMatch(match ? lostHtml(lost) : t('no entry for {n}', { n: lost }));
        if (p[2]) {
          html = '<p>' + (match ? t('The molecular ion lost a piece of mass {n}. The booklet gives {piece} as a possible piece.', { n: lost, piece: lostHtml(lost) }) : t('The molecular ion lost a piece of mass {n}.', { n: lost }))
            + ' ' + t('The ion detected at m/z = {mz} is {ion}. Write the positive charge every time.', { mz: mz, ion: fm(p[2]) }) + '</p>';
          if (p[3]) html += '<p>' + p[3] + '</p>';
        } else {
          html = '<p>' + t('This peak does not come from one simple loss. It forms in more than one step. You would not be asked to explain it.') + '</p>';
          if (match) html += '<p>' + t('Take care: the booklet lists {piece} for a loss of {n}, but that piece does not fit this molecule. A match in the table is only a suggestion.', { piece: lostHtml(lost), n: lost }) + '</p>';
        }
      }
      clear(out); out.appendChild(feedback('', html));
    }
    function load() {
      cur = DATA.filter(function (c) { return c.id === sel.value; })[0] || DATA[0]; selMz = null;
      if (chart) chart.update(spec()); else {
        chart = S1.chart.plot(host, spec());
        w.listen(chart.canvas, 'click', function (e) {
          var x = chartX(chart.canvas, e, 10, xMax()), best = null, bd = 2.6;
          cur.peaks.forEach(function (p) { var d = Math.abs(p[0] - x); if (d < bd) { bd = d; best = p[0]; } });
          if (best != null) pick(best);
        });
        chart.canvas.style.cursor = 'pointer';
      }
      clear(btns);
      cur.peaks.forEach(function (p) {
        var b = el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': 'false', 'data-mz': p[0], html: SPAN + 'm/z ' + p[0] });
        b.addEventListener('click', function () { pick(p[0]); });
        btns.appendChild(b);
      });
      pick(cur.M);
    }
    load();
  });

  /* ==========================================================================
     s3-2h.ir — infrared interpreter and "which compound is it?"
     ========================================================================== */
  S1.widgets.register('s3-2h.ir', function (w) {
    var DATA = irData(), ROWS = irRows(), cur, chart = null, mode = 'explore', selBand = -1, mi = 0;
    var MYSTERY = ['propanone', 'propan2ol', 'ethylethanoate', 'hexane', 'ethanoic'];
    var CLASSES = [{ id: 'alkane', label: t('alkane') }, { id: 'alcohol', label: t('alcohol') }, { id: 'acid', label: t('carboxylic acid') }, { id: 'ketone', label: t('ketone') }, { id: 'ester', label: t('ester') }];
    var NEED = { alkane: { oh_alc: 0, oh_acid: 0, co2: 0, co: 0 }, alcohol: { oh_alc: 1, oh_acid: 0, co2: 0, co: 1 }, acid: { oh_alc: 0, oh_acid: 1, co2: 1, co: 1 }, ketone: { oh_alc: 0, oh_acid: 0, co2: 1, co: 0 }, ester: { oh_alc: 0, oh_acid: 0, co2: 1, co: 1 } };
    var setBand = w.readoutItem(t('Band')), setBond = w.readoutItem(t('Bond'));
    var modeSeg = seg(w.controls, t('Mode'), [{ value: 'explore', label: t('Explore') }, { value: 'mystery', label: t('Which compound is it?') }], mode, function (v) { mode = v; mi = 0; load(); });
    var sel = w.select({ label: t('Compound'), options: DATA.map(function (c) { return { value: c.id, label: c.name }; }), value: w.options.start || 'propan2ol', onChange: load });
    var host = el('div'), hint = el('p', { class: 'small muted s32h-note' }), btns = el('div', { class: 'btn-row s32h-peaks' }), out = el('div', { 'aria-live': 'polite' });
    var tableHost = el('div', { class: 'table-scroll s32h-irtable' });
    w.stage.appendChild(host); w.stage.appendChild(hint); w.stage.appendChild(btns); w.stage.appendChild(out); w.stage.appendChild(tableHost);
    function table(onId) {
      var h = '<table class="data"><caption>' + t('Data booklet, section 20: infrared data') + '</caption><thead><tr><th scope="col">' + t('Bond') + '</th><th scope="col">' + t('Types of organic molecules') + '</th><th scope="col" class="num">' + t('Wavenumber / cm<sup>−1</sup>') + '</th><th scope="col">' + t('Intensity') + '</th></tr></thead><tbody>';
      ROWS.forEach(function (r) {
        var on = r.id === onId;
        h += '<tr' + (on ? ' class="s32h-rowon"' : '') + '><th scope="row">' + (on ? '▸ ' : '') + r.bond + '</th><td>' + r.where + '</td><td class="num">' + r.lo + '–' + r.hi + '</td><td>' + r.inten + '</td></tr>';
      });
      tableHost.innerHTML = h + '</tbody></table>';
    }
    function letters() { return cur.bands.map(function (b, i) { return String.fromCharCode(65 + i); }); }
    function draw() {
      var labels = mode === 'explore' ? cur.bands.map(function (b, i) { return i === selBand ? irRow(b.row).bond : String.fromCharCode(65 + i); }) : letters();
      var label = mode === 'explore' ? t('Sketch of the infrared spectrum of {name}. Main absorptions near {list} wavenumbers.', { name: cur.name, list: cur.bands.map(function (b) { return b.at; }).join(', ') })
        : t('Sketch of the infrared spectrum of an unknown compound. Main absorptions near {list} wavenumbers.', { list: cur.bands.map(function (b) { return b.at; }).join(', ') });
      var peaks = irPeaks(cur, labels), pts = [];
      for (var v = 4000; v >= 400; v -= 4) {
        var tr = 97;
        peaks.forEach(function (p) { var wd = p.width || 20; tr -= (p.depth || 60) * (wd * wd) / ((v - p.at) * (v - p.at) + wd * wd); });
        pts.push([v, Math.max(2, tr)]);
      }
      var spec = { height: 270, label: label,
        x: { label: 'Wavenumber / cm⁻¹', min: 400, max: 4000, reverse: true, ticks: [4000, 3500, 3000, 2500, 2000, 1500, 1000, 500] },
        y: { label: 'Transmittance / %', min: 0, max: 100, step: 20 },
        series: [{ type: 'line', data: pts, color: '--accent', width: 1.8 }, { type: 'line', data: [[1500, 0], [1500, 100]], color: '--line-strong', width: 1 }],
        annotations: peaks.filter(function (p) { return p.label; }).map(function (p) { return { x: p.at, y: Math.max(4, 97 - p.depth), text: p.label, dy: 14 }; }).concat([{ x: 950, y: 99, text: t('fingerprint region'), dy: 2 }]) };
      if (chart) chart.update(spec); else {
        chart = S1.chart.plot(host, spec);
        chart.canvas.style.cursor = 'pointer';
        w.listen(chart.canvas, 'click', function (e) {
          var x = chartX(chart.canvas, e, 400, 4000, true), best = -1, bd = Infinity;
          cur.bands.forEach(function (b, i) { [b.at, b.twin].forEach(function (at) { if (at == null) return; var d = Math.abs(at - x); if (d < Math.max(110, b.width * 1.2) && d < bd) { bd = d; best = i; } }); });
          if (best >= 0) pick(best);
        });
      }
    }
    function bandButtons() {
      clear(btns);
      cur.bands.forEach(function (b, i) {
        var bt = el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': String(i === selBand), html: SPAN + t('Band {letter}: near {v} cm<sup>−1</sup>', { letter: String.fromCharCode(65 + i), v: b.at }) });
        bt.addEventListener('click', function () { pick(i); });
        btns.appendChild(bt);
      });
    }
    function pick(i) {
      selBand = i;
      var b = cur.bands[i], row = irRow(b.row);
      setBand(t('{letter}: about {v} cm<sup>−1</sup>', { letter: String.fromCharCode(65 + i), v: b.twin ? b.twin + ' ' + t('and') + ' ' + b.at : b.at }));
      bandButtons(); table(b.row);
      if (mode === 'explore') {
        setBond(row.bond); draw();
        clear(out);
        out.appendChild(feedback('', '<p>' + t('<b>{bond}</b> in {where}. Booklet range: {lo}–{hi} cm<sup>−1</sup> ({inten}).', { bond: row.bond, where: row.where, lo: row.lo, hi: row.hi, inten: row.inten }) + '</p><p>' + b.why + '</p>'));
      } else {
        setBond(t('you decide'));
        var fits = ROWS.filter(function (r) { return b.at >= r.lo && b.at <= r.hi; }).map(function (r) { return r.bond + ' (' + r.lo + '–' + r.hi + ')'; });
        showAsk('<p>' + t('Band {letter} is near {v} cm<sup>−1</sup>. Booklet rows that include this wavenumber: {rows}. Look at the shape of the band to choose.', { letter: String.fromCharCode(65 + i), v: b.at, rows: fits.join('; ') }) + '</p>');
      }
    }
    function has(c, row) { return c.bands.some(function (b) { return b.row === row; }) ? 1 : 0; }
    var RANGE_TXT = { oh_alc: '3200–3600', oh_acid: '2500–3000', co2: '1700–1750', co: '1050–1410' };
    function judge(cls) {
      var need = NEED[cls], keys = ['co2', 'oh_acid', 'oh_alc', 'co'], k, i;
      if (cls === cur.cls) {
        var ev = cur.bands.map(function (b) { var r = irRow(b.row); return r.bond + ' (' + r.lo + '–' + r.hi + ' cm<sup>−1</sup>)'; }).join(', ');
        return { ok: true, html: t('Correct. The compound is {name}. Evidence: {ev}.', { name: '<b>' + cur.name + '</b>', ev: ev }) + (cur.cls === 'ketone' ? ' ' + t('There is a C=O band, no O–H band and no strong C–O band.') : cur.cls === 'alkane' ? ' ' + t('There is no O–H band and no C=O band.') : cur.cls === 'ester' ? ' ' + t('There is no O–H band, so it is not an acid.') : '') };
      }
      for (i = 0; i < keys.length; i++) {
        k = keys[i];
        var rowB = irRow(k).bond;
        if (need[k] && !has(cur, k)) return { ok: false, html: t('Not this one. That class would show a strong {bond} absorption at {r} cm<sup>−1</sup>. This spectrum has no strong absorption there.', { bond: rowB, r: RANGE_TXT[k] }) };
        if (!need[k] && has(cur, k)) return { ok: false, html: t('Not this one. The spectrum has a strong {bond} absorption at {r} cm<sup>−1</sup>. That class does not have this bond.', { bond: rowB, r: RANGE_TXT[k] }) };
      }
      return { ok: false, html: t('Not this one. Check each band against the booklet table.') };
    }
    var askNote = '';
    function showAsk(noteHtml, resHtml, kind) {
      if (noteHtml != null) askNote = noteHtml;
      clear(out);
      out.appendChild(el('p', { class: 's32h-q', html: t('Unknown {n} of {total}. Which class of compound gave this spectrum?', { n: mi + 1, total: MYSTERY.length }) }));
      var row = el('div', { class: 'btn-row' });
      CLASSES.forEach(function (c) {
        var b = el('button', { class: 'btn', type: 'button', html: SPAN + c.label });
        b.addEventListener('click', function () { var j = judge(c.id); showAsk(null, '<p>' + j.html + '</p>', j.ok ? 'right' : 'wrong'); });
        row.appendChild(b);
      });
      var nx = el('button', { class: 'btn btn--primary', type: 'button', html: SPAN + t('Next unknown') });
      nx.addEventListener('click', function () { mi = (mi + 1) % MYSTERY.length; load(); });
      row.appendChild(nx); out.appendChild(row);
      if (resHtml) out.appendChild(feedback(kind, resHtml));
      if (askNote) out.appendChild(feedback('', askNote));
    }
    function load() {
      var id = mode === 'explore' ? sel.value : MYSTERY[mi];
      cur = DATA.filter(function (c) { return c.id === id; })[0] || DATA[0]; selBand = -1; askNote = '';
      sel.el.style.display = mode === 'explore' ? '' : 'none';
      hint.innerHTML = mode === 'explore' ? t('Click a labelled band in the spectrum, or use the buttons.') : t('Click a band to see which booklet rows fit it. Then choose the class.');
      if (mode === 'explore') pick(0);
      else { setBand('—'); setBond(t('you decide')); draw(); bandButtons(); table(null); showAsk(''); }
    }
    load();
  });

  /* ==========================================================================
     s3-2h.nmr — proton NMR tutor
     ========================================================================== */
  S1.widgets.register('s3-2h.nmr', function (w) {
    var MOLS = nmrMols(), mol, mode = 'show', stage = 0, chart = null, envOn = null;
    var setN = w.readoutItem(t('Number of signals')), setRatio = w.readoutItem(t('Ratio of areas')), setH = w.readoutItem(t('H atoms in the molecule'));
    seg(w.controls, t('Mode'), [{ value: 'show', label: t('Show me') }, { value: 'predict', label: t('Predict first') }], mode, function (v) { mode = v; load(); });
    var sel = w.select({ label: t('Molecule'), options: MOLS.map(function (m) { return { value: m.id, label: m.name }; }), value: w.options.start || 'ethanol', onChange: load });
    var draw = el('div', { class: 's32h-center' }), ask = el('div', { 'aria-live': 'polite' }), tableHost = el('div', { class: 'table-scroll' }), chartHost = el('div'), note = el('p', { class: 'small muted s32h-note' });
    w.stage.appendChild(draw); w.stage.appendChild(ask); w.stage.appendChild(tableHost); w.stage.appendChild(chartHost); w.stage.appendChild(note);
    function totalH() { return mol.envs.reduce(function (n, e) { return n + e.h; }, 0); }
    function drawMol(withEnv) {
      var atoms = mol.spec.atoms.map(function (a) { var c = {}; Object.keys(a).forEach(function (k) { c[k] = a[k]; }); if (!withEnv) delete c.env; return c; });
      mol2d(draw, { atoms: atoms, bonds: mol.spec.bonds, envOn: envOn, label: withEnv
        ? t('Structure of {name}. Equivalent hydrogen atoms share a letter: {n} environments.', { name: mol.name, n: mol.envs.length })
        : t('Structure of {name}', { name: mol.name }) });
    }
    function table(withSplit) {
      var h = '<table class="data"><caption>' + t('Predicted <sup>1</sup>H NMR signals of {name}', { name: mol.name }) + '</caption><thead><tr><th scope="col">' + t('Signal') + '</th><th scope="col" class="num">' + t('H atoms') + '</th><th scope="col">' + t('Type of proton') + '</th><th scope="col" class="num">' + t('Shift / ppm') + '</th><th scope="col">' + t('Splitting') + '</th></tr></thead><tbody>';
      mol.envs.forEach(function (e) {
        var n = neighbours(mol, e), oh = e.row === 'alcohol' || e.row === 'acid';
        var split = !withSplit ? '?' : oh ? splitName(1) : t('n = {n}: {name}', { n: n, name: splitName(n + 1) });
        h += '<tr><th scope="row">' + e.k + ': ' + fm(e.group) + '</th><td class="num">' + e.h + '</td><td><span class="s32h-f" data-i18n="off">' + nmrRow(e.row).h + '</span></td><td class="num">' + rangeText(NMR_RANGE[e.row]) + '</td><td>' + split + '</td></tr>';
      });
      tableHost.innerHTML = h + '</tbody></table>';
    }
    function spectrum() {
      var spec = { label: t('Sketch of the proton NMR spectrum of {name}: {list}', { name: mol.name, list: mol.envs.map(function (e) { return splitName(neighbours(mol, e) + 1) + ' ' + t('at about {s} ppm, area {h}', { s: chem.fixed(e.shift, 1), h: e.h }); }).join('; ') }),
        max: nmrMax(mol.envs), height: 230, signals: nmrSignals(mol, function (e) { return e.k + ' (' + e.h + 'H)'; }) };
      clear(chartHost); chart = S1.chart.nmr(chartHost, spec);
    }
    function reveal() {
      var ohNote = mol.envs.some(function (e) { return e.row === 'alcohol' || e.row === 'acid'; });
      drawMol(true); table(true); spectrum();
      tableHost.style.display = ''; chartHost.style.display = '';
      setN(String(mol.envs.length)); setRatio(mol.envs.length > 1 ? ratioOf(mol.envs).join(' : ') : t('one signal only')); setH(String(totalH()));
      note.innerHTML = t('The spectrum is a sketch. Each signal is drawn inside the booklet range for its type of proton, as in exam data. Measured values can differ a little.') + (ohNote ? ' ' + t('The H of an O–H group is shown as a singlet, and it is not counted as a neighbour.') : '');
    }
    function btnRow(labels, fn) {
      var row = el('div', { class: 'btn-row' });
      labels.forEach(function (l, i) { var b = el('button', { class: 'btn', type: 'button', html: SPAN + l }); b.addEventListener('click', function () { fn(i, b); }); row.appendChild(b); });
      return row;
    }
    function askSignals(msg, kind) {
      clear(ask);
      ask.appendChild(el('p', { class: 's32h-q', html: t('Step 1. How many signals does the <sup>1</sup>H NMR spectrum of {name} have?', { name: mol.name }) }));
      ask.appendChild(btnRow(['1', '2', '3', '4', '5', '6+'], function (i) {
        var guess = i + 1, n = mol.envs.length;
        if (guess === n) { stage = 1; drawMol(true); setN(String(n)); setRatio(n > 1 ? ratioOf(mol.envs).join(' : ') : t('one signal only')); setH(String(totalH())); askSplit(); return; }
        var m = t('Not yet. Look for groups of H atoms that have exactly the same surroundings. Each different group gives one signal.');
        if (guess >= 6 && totalH() >= 6) m = t('That is closer to the number of hydrogen atoms. Count the different environments instead. All the H atoms in one CH<sub>3</sub> group are equivalent.');
        else if (guess === mol.groups && mol.groups !== n) m = t('You counted every group that contains H. Some of these groups are equivalent because the molecule is symmetrical. Equivalent H atoms give one signal.');
        askSignals(m, 'wrong');
      }));
      if (msg) ask.appendChild(feedback(kind, '<p>' + msg + '</p>'));
    }
    function askSplit(results) {
      clear(ask);
      ask.appendChild(feedback('right', '<p>' + (mol.envs.length === 1 ? t('Correct: 1 signal. All {h} H atoms are equivalent.', { h: totalH() }) : t('Correct: {n} signals. The areas are in the ratio {r}.', { n: mol.envs.length, r: ratioOf(mol.envs).join(' : ') })) + '</p>'));
      ask.appendChild(el('p', { class: 's32h-q', html: t('Step 2. Predict the splitting of each signal. Count the H atoms on the neighbouring carbon atoms, then add 1.') }));
      var names = [t('singlet'), t('doublet'), t('triplet'), t('quartet')], selects = [], box = el('div', { class: 's32h-splits' });
      mol.envs.forEach(function (e, i) {
        var id = S1.util.uid('split'), s = el('select', { class: 'select', id: id });
        s.appendChild(el('option', { value: '', text: t('choose…') }));
        names.forEach(function (nm, k) { s.appendChild(el('option', { value: String(k + 1), text: nm })); });
        if (results) s.value = results[i].v;
        selects.push(s);
        var line = el('div', { class: 'control' }, [el('label', { class: 'control__label', 'for': id, html: t('Signal {k}: {group}', { k: e.k, group: fm(e.group) }) }), s]);
        if (results && results[i].v) line.appendChild(el('span', { class: 's32h-tick', html: results[i].ok ? t('correct') : t('look again') }));
        box.appendChild(line);
      });
      ask.appendChild(box);
      var row = el('div', { class: 'btn-row' });
      var check = el('button', { class: 'btn btn--primary', type: 'button', html: SPAN + t('Check splitting') }), show = el('button', { class: 'btn', type: 'button', html: SPAN + t('Show the answer') });
      check.addEventListener('click', function () {
        var res = mol.envs.map(function (e, i) { return { v: selects[i].value, ok: Number(selects[i].value) === neighbours(mol, e) + 1 }; });
        if (res.every(function (r) { return r.ok; })) finish(true); else askSplit(res);
      });
      show.addEventListener('click', function () { finish(false); });
      row.appendChild(check); row.appendChild(show); ask.appendChild(row);
      if (results) ask.appendChild(feedback('wrong', '<p>' + t('Some are not right yet. Do not count the H atoms in the group itself. Count only H atoms on the carbon atoms next to it. No H on the next atom means a singlet.') + '</p>'));
    }
    function finish(allRight) {
      stage = 2; clear(ask);
      ask.appendChild(feedback(allRight ? 'right' : '', '<p>' + (allRight ? t('All correct. The table and the sketch show the full prediction.') : t('The table and the sketch show the full prediction.')) + '</p>'));
      reveal();
    }
    function load() {
      mol = MOLS.filter(function (m) { return m.id === sel.value; })[0] || MOLS[0]; stage = 0; envOn = null;
      clear(ask);
      if (mode === 'show') { reveal(); return; }
      drawMol(false); tableHost.style.display = 'none'; chartHost.style.display = 'none'; note.innerHTML = '';
      setN('?'); setRatio('?'); setH(String(totalH()));
      askSignals();
    }
    load();
  });

  /* ==========================================================================
     s3-2h.detective — combined analysis with a deduction notebook
     ========================================================================== */
  function problems() {
    function E(k, h, row, shift, adj, group) { return { k: k, h: h, row: row, shift: shift, adj: adj || [], group: group }; }
    var ETHYL = { kind: 'ethyl' }, SINGLE = { kind: 'singlets' };
    return [
      { id: 'p1', formula: { C: 2, H: 6, O: 1 }, emp: 'C2H6O', empOptions: ['CH3O', 'C2H6O', 'C2H5O', 'CH4O'], M: 46, name: t('ethanol'),
        ms: [[15, 7], [27, 22], [29, 30], [31, 100], [45, 51], [46, 22]],
        frag: { mz: 31, lost: 15, options: ['•OH', '•CH3', 'H2O', '•CH2CH3'], answer: 1, note: t('MS: the peak at m/z = 31 is M − 15. The molecule can lose •CH<sub>3</sub>, so it contains a CH<sub>3</sub> group. The ion is CH<sub>2</sub>OH<sup>+</sup>.') },
        ir: [{ at: 3350, depth: 66, width: 150, row: 'oh_alc' }, { at: 2970, depth: 68, width: 28, row: 'ch' }, { at: 1090, depth: 70, width: 28, row: 'co' }], irExtra: [{ at: 1380, depth: 30, width: 12 }, { at: 880, depth: 34, width: 12 }], irAnswer: 0,
        irNote: t('IR: broad O–H at 3200–3600 cm<sup>−1</sup> and C–O at 1050–1410 cm<sup>−1</sup>. No C=O. The compound is an alcohol.'),
        envs: [E('a', 3, 'ch3', 1.0, ['b'], 'CH3'), E('b', 2, 'ether', 3.6, ['a'], 'CH2'), E('c', 1, 'alcohol', 2.6, [], 'OH')], split: ETHYL,
        splitNote: t('NMR splitting: triplet (3 H) and quartet (2 H) show CH<sub>3</sub>–CH<sub>2</sub>. The 1 H singlet is the O–H.'),
        structs: [
          { name: t('ethanol'), ok: true, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'OH', env: 'c' }]) },
          { name: t('methoxymethane'), spec: chain([{ l: 'CH3' }, { l: 'O' }, { l: 'CH3' }]), why: t('Methoxymethane has the same molecular formula. But all six H atoms are equivalent, so it gives one signal. It has no O–H bond, so its IR spectrum has no broad band at 3200–3600 cm<sup>−1</sup>.') }] },
      { id: 'p2', formula: { C: 4, H: 8, O: 1 }, emp: 'C4H8O', empOptions: ['C2H4O', 'C4H8O', 'C3H8O', 'C4H10O'], M: 72, name: t('butanone'),
        ms: [[27, 8], [29, 17], [43, 100], [57, 8], [72, 25]],
        frag: { mz: 43, lost: 29, options: ['•CH3', '•OCH3', '•CH2CH3 or •CHO', '•COOH'], answer: 2, note: t('MS: the peak at m/z = 43 is M − 29. The piece lost is •CH<sub>2</sub>CH<sub>3</sub> or •CHO. The NMR spectrum will decide. The small peak at m/z = 57 is M − 15: loss of •CH<sub>3</sub>.') },
        ir: [{ at: 2980, depth: 40, width: 30, row: 'ch' }, { at: 1715, depth: 90, width: 18, row: 'co2' }], irExtra: [{ at: 1460, depth: 28, width: 12 }, { at: 1365, depth: 36, width: 12 }, { at: 1170, depth: 34, width: 14 }], irAnswer: 1,
        irNote: t('IR: strong C=O at 1700–1750 cm<sup>−1</sup>. No O–H. With one O atom, the compound is an aldehyde or a ketone.'),
        envs: [E('a', 3, 'keto_a', 2.2, [], 'CH3'), E('b', 2, 'keto_a', 2.5, ['c'], 'CH2'), E('c', 3, 'ch3', 1.0, ['b'], 'CH3')], split: ETHYL,
        splitNote: t('NMR splitting: triplet (3 H) and quartet (2 H) show CH<sub>3</sub>–CH<sub>2</sub>. The 3 H singlet at 2.2 ppm is a CH<sub>3</sub> next to C=O with no H on the neighbouring carbon. No signal at 9.4–10.0 ppm, so there is no CHO group.'),
        structs: [
          { name: t('butanal'), spec: chain([{ l: 'CH3' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'C', up: '=O' }, { l: 'H' }]), why: t('Butanal is an aldehyde. It would give a signal at 9.4–10.0 ppm for the CHO hydrogen, and four signals in total. The spectrum has three signals and none above 3 ppm.') },
          { name: t('butanone'), ok: true, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: '=O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'c' }]) },
          { name: t('2-methylpropanal'), spec: chain([{ l: 'CH3' }, { l: 'C', up: 'H', down: 'CH3' }, { l: 'C', up: '=O' }, { l: 'H' }]), why: t('2-methylpropanal is an aldehyde. It would give a signal at 9.4–10.0 ppm, and its areas would be in the ratio 6 : 1 : 1.') }] },
      { id: 'p3', formula: { C: 3, H: 6, O: 2 }, emp: 'C3H6O2', empOptions: ['C3H6O2', 'CH2O', 'C2H3O', 'C3H8O2'], M: 74, name: t('propanoic acid'),
        ms: [[27, 64], [28, 93], [29, 83], [45, 90], [57, 47], [73, 65], [74, 100]],
        frag: { mz: 29, lost: 45, options: ['•CH3', '•OCH3', '•OH', '•COOH'], answer: 3, note: t('MS: the peak at m/z = 29 is M − 45: loss of •COOH. The ion is CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>. The peak at m/z = 57 is M − 17: loss of •OH.') },
        ir: [{ at: 2900, depth: 60, width: 300, row: 'oh_acid' }, { at: 1715, depth: 90, width: 22, row: 'co2' }, { at: 1240, depth: 60, width: 28, row: 'co' }], irExtra: [{ at: 1420, depth: 32, width: 18 }, { at: 935, depth: 34, width: 34 }], irAnswer: 2,
        irNote: t('IR: very broad O–H at 2500–3000 cm<sup>−1</sup> and strong C=O at 1700–1750 cm<sup>−1</sup>. The compound is a carboxylic acid.'),
        envs: [E('a', 3, 'ch3', 1.0, ['b'], 'CH3'), E('b', 2, 'ester_a', 2.4, ['a'], 'CH2'), E('c', 1, 'acid', 11.7, [], 'COOH')], split: ETHYL,
        splitNote: t('NMR splitting: triplet (3 H) and quartet (2 H) show CH<sub>3</sub>–CH<sub>2</sub>. The 1 H singlet at 11.7 ppm is in the range 9.0–13.0 ppm: the H of COOH.'),
        structs: [
          { name: t('methyl ethanoate'), spec: chain([{ l: 'CH3' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH3' }]), why: t('Methyl ethanoate is an ester. It has no O–H bond, so it would not give the very broad IR band. Its NMR spectrum would be two singlets.') },
          { name: t('ethyl methanoate'), spec: chain([{ l: 'H' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH2' }, { l: 'CH3' }]), why: t('Ethyl methanoate is an ester. It has no O–H bond, so it would not give the very broad IR band at 2500–3000 cm<sup>−1</sup>. It cannot lose •COOH.') },
          { name: t('propanoic acid'), ok: true, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'C', up: '=O' }, { l: 'OH', env: 'c' }]) }] },
      { id: 'p4', formula: { C: 4, H: 10, O: 1 }, emp: 'C4H10O', empOptions: ['C2H5O', 'C4H8O', 'C4H10O', 'C3H10O'], M: 74, name: t('ethoxyethane'),
        ms: [[27, 19], [29, 43], [31, 100], [45, 45], [59, 67], [74, 44]],
        frag: { mz: 59, lost: 15, options: ['•CH3', '•OH', 'H2O', '•OCH3'], answer: 0, note: t('MS: the peak at m/z = 59 is M − 15: loss of •CH<sub>3</sub>. The peak at m/z = 45 is M − 29: loss of •CH<sub>2</sub>CH<sub>3</sub>. The molecule contains an ethyl group.') },
        ir: [{ at: 2975, depth: 70, width: 30, row: 'ch' }, { at: 1120, depth: 88, width: 28, row: 'co' }], irExtra: [{ at: 2865, depth: 50, width: 18 }, { at: 1445, depth: 28, width: 12 }, { at: 1380, depth: 44, width: 10 }], irAnswer: 3,
        irNote: t('IR: strong C–O at 1050–1410 cm<sup>−1</sup>. No O–H and no C=O. With one O atom, the compound is an ether, not an alcohol.'),
        envs: [E('a', 6, 'ch3', 1.0, ['b'], 'CH3'), E('b', 4, 'ether', 3.4, ['a'], 'OCH2')], perGroup: { a: 3, b: 2 }, split: ETHYL,
        splitNote: t('NMR splitting: triplet and quartet show CH<sub>3</sub>–CH<sub>2</sub>. There are 6 H and 4 H, so there are two equivalent CH<sub>3</sub>–CH<sub>2</sub> groups. The quartet at 3.4 ppm fits R–O–CH<sub>2</sub> (3.3–3.7 ppm).'),
        structs: [
          { name: t('butan-1-ol'), spec: chain([{ l: 'CH3' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'OH' }]), why: t('Butan-1-ol is an alcohol. Its IR spectrum would show a broad O–H band at 3200–3600 cm<sup>−1</sup>, and its NMR spectrum would have five signals.') },
          { name: t('ethoxyethane'), ok: true, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'O' }, { l: 'CH2', env: 'b' }, { l: 'CH3', env: 'a' }]) },
          { name: t('1-methoxypropane'), spec: chain([{ l: 'CH3' }, { l: 'O' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'CH3' }]), why: t('1-methoxypropane is an ether, so the IR fits. But it is not symmetrical. It would give four signals, and one of them would be a 3 H singlet for O–CH<sub>3</sub>.') }] },
      { id: 'p5', formula: { C: 4, H: 8, O: 2 }, emp: 'C2H4O', empOptions: ['CH2O', 'C2H4O', 'C4H8O2', 'C2H6O'], M: 88, name: t('methyl propanoate'),
        ms: [[27, 34], [29, 100], [57, 84], [59, 31], [88, 50]],
        frag: { mz: 57, lost: 31, options: ['•CH3', '•OCH3', '•COOH', 'H2O'], answer: 1, note: t('MS: the peak at m/z = 57 is M − 31: loss of •OCH<sub>3</sub>. The molecule contains an O–CH<sub>3</sub> group. The peak at m/z = 59 is M − 29: loss of •CH<sub>2</sub>CH<sub>3</sub>.') },
        ir: [{ at: 2980, depth: 36, width: 26, row: 'ch' }, { at: 1740, depth: 92, width: 18, row: 'co2' }, { at: 1200, depth: 86, width: 26, row: 'co' }], irExtra: [{ at: 1440, depth: 36, width: 12 }, { at: 1360, depth: 30, width: 10 }, { at: 1085, depth: 40, width: 14 }], irAnswer: 1,
        irNote: t('IR: strong C=O at 1700–1750 cm<sup>−1</sup> and strong C–O at 1050–1410 cm<sup>−1</sup>. No O–H. With two O atoms, the compound is an ester.'),
        envs: [E('a', 3, 'ch3', 1.0, ['b'], 'CH3'), E('b', 2, 'ester_a', 2.3, ['a'], 'CH2'), E('c', 3, 'ester_o', 3.7, [], 'OCH3')], split: ETHYL,
        splitNote: t('NMR splitting: triplet (3 H) and quartet (2 H) show CH<sub>3</sub>–CH<sub>2</sub>. The quartet at 2.3 ppm fits CH<sub>2</sub> next to C=O (2.0–2.5 ppm). The 3 H singlet at 3.7 ppm fits O–CH<sub>3</sub> of an ester (3.7–4.8 ppm).'),
        structs: [
          { name: t('ethyl ethanoate'), spec: chain([{ l: 'CH3' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH2' }, { l: 'CH3' }]), why: t('Ethyl ethanoate also gives a triplet, a quartet and a singlet. But its quartet would be at 3.7–4.8 ppm (O–CH<sub>2</sub>) and its singlet at 2.0–2.5 ppm. It has no O–CH<sub>3</sub> group to lose, so M − 31 would not fit.') },
          { name: t('methyl propanoate'), ok: true, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'CH2', env: 'b' }, { l: 'C', up: '=O' }, { l: 'O' }, { l: 'CH3', env: 'c' }]) },
          { name: t('butanoic acid'), spec: chain([{ l: 'CH3' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'C', up: '=O' }, { l: 'OH' }]), why: t('Butanoic acid has an O–H bond. Its IR spectrum would show a very broad band at 2500–3000 cm<sup>−1</sup>, and its NMR spectrum would have a signal at 9.0–13.0 ppm.') }] },
      { id: 'p6', formula: { C: 5, H: 10, O: 1 }, emp: 'C5H10O', empOptions: ['C5H10O', 'C5H12O', 'C4H10O', 'C6H10O'], M: 86, name: t('2,2-dimethylpropanal'),
        ms: [[27, 16], [29, 51], [41, 83], [43, 27], [57, 100], [86, 18]],
        frag: { mz: 57, lost: 29, options: ['•CH3', '•CH2CH3 or •CHO', '•OH', '•OCH3'], answer: 1, note: t('MS: the peak at m/z = 57 is M − 29. The piece lost is •CH<sub>2</sub>CH<sub>3</sub> or •CHO. The NMR spectrum will decide.') },
        ir: [{ at: 2970, depth: 60, width: 30, row: 'ch' }, { at: 1725, depth: 90, width: 18, row: 'co2' }], irExtra: [{ at: 1480, depth: 30, width: 12 }, { at: 1365, depth: 32, width: 10 }, { at: 880, depth: 20, width: 12 }], irAnswer: 1,
        irNote: t('IR: strong C=O at 1700–1750 cm<sup>−1</sup>. No O–H. With one O atom, the compound is an aldehyde or a ketone.'),
        envs: [E('a', 9, 'ch3', 1.0, [], 'CH3'), E('b', 1, 'ald', 9.5, [], 'CHO')], split: SINGLE,
        splitNote: t('NMR: the 1 H signal at 9.5 ppm is in the range 9.4–10.0 ppm: an aldehyde H. So the piece of mass 29 lost in the mass spectrum is •CHO. Nine equivalent H at 1.0 ppm are three CH<sub>3</sub> groups on one carbon. Both signals are singlets: no H on the carbon atom between them.'),
        structs: [
          { name: t('pentanal'), spec: chain([{ l: 'CH3' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'CH2' }, { l: 'CHO' }], 1.45), why: t('Pentanal is an aldehyde, but it has five hydrogen environments. The spectrum has only two signals.') },
          { name: t('pentan-3-one'), spec: chain([{ l: 'CH3' }, { l: 'CH2' }, { l: 'C', up: '=O' }, { l: 'CH2' }, { l: 'CH3' }], 1.45), why: t('Pentan-3-one has two environments, but the ratio would be 3 : 2 with a triplet and a quartet. It has no H that gives a signal at 9.4–10.0 ppm.') },
          { name: t('2,2-dimethylpropanal'), ok: true, spec: chain([{ l: 'CH3', env: 'a' }, { l: 'C', up: { l: 'CH3', env: 'a' }, down: { l: 'CH3', env: 'a' } }, { l: 'C', up: '=O' }, { l: 'H', env: 'b' }]) }] }
    ];
  }
  function formulaText(f) { return ['C', 'H', 'O'].map(function (k) { return f[k] ? k + (f[k] > 1 ? f[k] : '') : ''; }).join(''); }
  function formulaMass(f) { return f.C * chem.element('C').ar + f.H * chem.element('H').ar + (f.O || 0) * chem.element('O').ar; }
  function percent(f) { var M = formulaMass(f); return { C: 100 * f.C * chem.element('C').ar / M, H: 100 * f.H * chem.element('H').ar / M, O: 100 * (f.O || 0) * chem.element('O').ar / M }; }

  S1.widgets.register('s3-2h.detective', function (w) {
    var PROBS = problems(), p, step, notes;
    var setStep = w.readoutItem(t('Step')), setKnown = w.readoutItem(t('Molecular formula'));
    var sel = w.select({ label: t('Problem'), options: PROBS.map(function (q, i) { return { value: q.id, label: t('Unknown compound {n}', { n: i + 1 }) }; }), value: 'p1', onChange: load });
    w.button(t('Start this problem again'), function () { load(); });
    var data = el('div', { class: 's32h-data' }), ask = el('div', { class: 's32h-ask', 'aria-live': 'polite' }), book = el('div', { class: 's32h-book' });
    w.stage.appendChild(data); w.stage.appendChild(ask); w.stage.appendChild(book);
    function mol() { return { envs: p.envs, perGroup: p.perGroup }; }
    function pc(x) { return chem.fixed(x, 2); }
    function showData() {
      clear(data);
      var pr = percent(p.formula);
      data.appendChild(el('p', { class: 's32h-data__h', html: t('Data for the unknown compound') }));
      data.appendChild(el('p', { html: t('Percentage composition by mass: C {c} %, H {h} %, O {o} %.', { c: pc(pr.C), h: pc(pr.H), o: pc(pr.O) }) }));
      var grid = el('div', { class: 's32h-spectra' }), m1 = el('div'), m2 = el('div'), m3 = el('div');
      [[m1, t('Mass spectrum (simplified)')], [m2, t('Infrared spectrum (sketch)')], [m3, t('<sup>1</sup>H NMR spectrum (sketch)')]].forEach(function (c) {
        grid.appendChild(el('div', { class: 's32h-spectra__cell' }, [el('p', { class: 's32h-spectra__h', html: c[1] }), c[0]]));
      });
      data.appendChild(grid);
      var xmax = Math.ceil((p.M + 6) / 10) * 10;
      var lab = p.ms.map(function (q) { return p.ms.some(function (r) { return r !== q && Math.abs(r[0] - q[0]) <= 2 && (r[1] > q[1] || (r[1] === q[1] && r[0] > q[0])); }) ? null : String(q[0]); });
      S1.chart.plot(m1, { height: 220, label: t('Simplified mass spectrum of the unknown compound. Peaks at m/z {list}. The peak at the highest m/z is {m}.', { list: p.ms.map(function (q) { return q[0] + ' (' + q[1] + ' %)'; }).join(', '), m: p.M }),
        x: { label: 'm/z', min: 10, max: xmax, ticks: [20, 40, 60, 80].filter(function (v) { return v <= xmax; }) }, y: { label: 'Relative abundance / %', min: 0, max: 100, step: 20 },
        series: [{ type: 'stick', width: 3, color: '--accent', data: p.ms.map(function (q, i) { return [q[0], q[1], lab[i]]; }) }] });
      m1.parentNode.appendChild(el('p', { class: 'small s32h-note', html: t('Peaks at m/z = {list}.', { list: p.ms.map(function (q) { return q[0]; }).join(', ') }) }));
      var irp = p.ir.map(function (b) { return { at: b.at, depth: b.depth, width: b.width, label: String(b.at) }; }).concat(p.irExtra || []);
      S1.chart.ir(m2, { height: 220, peaks: irp, label: t('Sketch of the infrared spectrum of the unknown compound. Main absorptions near {list} wavenumbers.', { list: p.ir.map(function (b) { return b.at; }).join(', ') }) });
      S1.chart.nmr(m3, { height: 220, max: nmrMax(p.envs), signals: nmrSignals(mol(), function (e) { return chem.fixed(e.shift, 1); }),
        label: t('Sketch of the proton NMR spectrum of the unknown compound. See the table of signals.') });
      var h = '<table class="data"><caption>' + t('<sup>1</sup>H NMR signals') + '</caption><thead><tr><th scope="col" class="num">' + t('Shift / ppm') + '</th><th scope="col" class="num">' + t('Relative area') + '</th><th scope="col">' + t('Splitting') + '</th></tr></thead><tbody>';
      var ratio = ratioOf(p.envs);
      p.envs.forEach(function (e, i) { h += '<tr><td class="num">' + chem.fixed(e.shift, 1) + '</td><td class="num">' + ratio[i] + '</td><td>' + splitName(neighbours(mol(), e) + 1) + '</td></tr>'; });
      data.appendChild(el('div', { class: 'table-scroll', html: h + '</tbody></table>' }));
    }
    function note(html) { notes.push(html); renderBook(); }
    function renderBook() {
      clear(book);
      book.appendChild(el('p', { class: 's32h-book__h', html: t('Deduction notebook') }));
      if (!notes.length) { book.appendChild(el('p', { class: 'small muted', html: t('Your deductions appear here as you solve each step.') })); return; }
      var ol = el('ol', { class: 's32h-book__list' });
      notes.forEach(function (n) { ol.appendChild(el('li', { html: n })); });
      book.appendChild(ol);
    }
    /* ---- steps: each returns {q, options: [html], answer, wrong(i) → html, done() → notebook html} ---- */
    function empWork() {
      var pr = percent(p.formula), ar = { C: chem.element('C').ar, H: chem.element('H').ar, O: chem.element('O').ar };
      var n = { C: pr.C / ar.C, H: pr.H / ar.H, O: pr.O / ar.O }, small = Math.min(n.C, n.H, n.O), mult = 1;
      var r = { C: n.C / small, H: n.H / small, O: n.O / small };
      [1, 2, 3].some(function (m) { mult = m; return ['C', 'H', 'O'].every(function (k) { return Math.abs(r[k] * m - Math.round(r[k] * m)) < 0.06; }); });
      var s = t('Composition: in 100 g there are {c} mol C, {h} mol H and {o} mol O. Dividing by the smallest gives C : H : O = {rc} : {rh} : {ro}.', { c: chem.fixed(n.C, 2), h: chem.fixed(n.H, 2), o: chem.fixed(n.O, 2), rc: chem.fixed(r.C, 2), rh: chem.fixed(r.H, 2), ro: chem.fixed(r.O, 2) });
      if (mult > 1) s += ' ' + t('Multiply by {m} to get whole numbers.', { m: mult });
      return s + ' ' + t('Empirical formula: {f}.', { f: fm(p.emp) });
    }
    function empParse() { return chem.parseFormula(p.emp); }
    function steps() {
      var empM = empParse().M, k = Math.round(p.M / empM), ec = empParse().counts, ratio = ratioOf(p.envs), totalH = p.formula.H, sum = ratio.reduce(function (a2, b2) { return a2 + b2; }, 0);
      function times(m) { return formulaText({ C: ec.C * m, H: ec.H * m, O: ec.O * m }); }
      var IRO = [t('O–H of an alcohol (broad, 3200–3600 cm<sup>−1</sup>) and C–O. No C=O.'), t('C=O (1700–1750 cm<sup>−1</sup>). No O–H.'), t('O–H of a carboxylic acid (very broad, 2500–3000 cm<sup>−1</sup>) and C=O.'), t('C–O (1050–1410 cm<sup>−1</sup>). No O–H and no C=O.')];
      function hasRow(row) { return p.ir.some(function (b) { return b.row === row; }); }
      var list = [
        { name: t('Empirical formula'), q: t('Use the percentage composition. What is the empirical formula?'), options: p.empOptions.map(fm), answer: p.empOptions.indexOf(p.emp),
          wrong: function () { return t('Not this one. Divide each percentage by the relative atomic mass (C 12.01, H 1.01, O 16.00). Then divide every answer by the smallest one. If you get a value such as 1.5, multiply all of them by 2.'); },
          done: empWork },
        { name: t('Molecular formula'), q: t('The molecular ion peak is at m/z = {m}. What is the molecular formula?', { m: p.M }), options: [1, 2, 3].map(function (m) { return fm(times(m)); }), answer: k - 1,
          wrong: function () { return t('Not this one. The molecular ion gives <i>M</i><sub>r</sub> = {m}. The empirical formula {f} has a mass of {e}. How many times does {e} go into {m}?', { m: p.M, f: fm(p.emp), e: chem.fixed(empM, 2) }); },
          done: function () { setKnown(fm(times(k))); return t('MS: the molecular ion peak at m/z = {m} gives <i>M</i><sub>r</sub> = {m}. Empirical formula mass = {e}, and {m} ÷ {e} ≈ {k}. Molecular formula: {f}.', { m: p.M, e: chem.fixed(empM, 2), k: k, f: fm(times(k)) }); } },
        { name: t('Infrared'), q: t('Look at the infrared spectrum and the booklet table. Which statement fits?'), options: IRO, answer: p.irAnswer,
          wrong: function (i) {
            if ((i === 0) && !hasRow('oh_alc')) return t('Not this one. An alcohol gives a strong, broad absorption at 3200–3600 cm<sup>−1</sup>. This spectrum has nothing there.');
            if ((i === 2) && !hasRow('oh_acid')) return t('Not this one. A carboxylic acid gives a very broad absorption at 2500–3000 cm<sup>−1</sup>. This spectrum has only the sharper C–H band near 2850–3090 cm<sup>−1</sup>.');
            if ((i === 1 || i === 2) && !hasRow('co2')) return t('Not this one. C=O gives a strong absorption at 1700–1750 cm<sup>−1</sup>. This spectrum has nothing there.');
            if ((i === 0 || i === 3) && hasRow('co2')) return t('Not this one. The spectrum has a strong absorption at 1700–1750 cm<sup>−1</sup>. That is C=O.');
            if (i === 1 && (hasRow('oh_alc') || hasRow('oh_acid'))) return t('Not this one. The spectrum has a broad O–H absorption.');
            if (i === 3 && hasRow('oh_alc')) return t('Not this one. The spectrum has a strong, broad absorption at 3200–3600 cm<sup>−1</sup>. That is the O–H of an alcohol.');
            return t('Not this one. Check each absorption against the booklet table.');
          },
          done: function () { return p.irNote; } },
        { name: t('Fragment'), q: t('In the mass spectrum there is a peak at m/z = {mz}. The mass lost from the molecular ion is {m} − {mz} = {lost}. Which piece could the molecule have lost?', { mz: p.frag.mz, m: p.M, lost: p.frag.lost }),
          options: p.frag.options.map(function (o) { return o.split(' or ').map(fm).join(' ' + t('or') + ' '); }), answer: p.frag.answer,
          wrong: function () { return t('Not this one. Find the mass lost, {lost}, in the booklet table of mass spectral fragments lost.', { lost: p.frag.lost }); },
          done: function () { return p.frag.note; } },
        { name: t('NMR: signals and areas'), q: t('The <sup>1</sup>H NMR spectrum has {n} signals. Their areas are in the ratio {r}. What does this show?', { n: p.envs.length, r: ratio.join(' : ') }),
          options: [t('The molecule has {n} hydrogen atoms.', { n: p.envs.length }), t('The molecule has {n} different hydrogen environments. The numbers of H atoms in them are in the ratio {r}.', { n: p.envs.length, r: ratio.join(' : ') }), t('The molecule has {n} carbon atoms.', { n: p.envs.length }), t('Each signal comes from one hydrogen atom.')], answer: 1,
          wrong: function (i) { return i === 2 ? t('Not this one. <sup>1</sup>H NMR detects hydrogen atoms, not carbon atoms.') : t('Not this one. The number of signals is the number of different hydrogen environments. The formula shows {h} H atoms.', { h: totalH }); },
          done: function () {
            return t('NMR: {n} signals, so {n} hydrogen environments. The ratio {r} adds up to {s}. The formula has {h} H atoms, so the environments contain {list} H atoms.', { n: p.envs.length, r: ratio.join(' : '), s: sum, h: totalH, list: p.envs.map(function (e) { return e.h; }).join(', ') });
          } }
      ];
      if (p.split.kind === 'ethyl') list.push({ name: t('NMR: splitting'), q: t('One signal is a triplet and another is a quartet. What does this pattern show?'),
        options: [t('A group with 3 H and a group with 4 H.'), t('A CH<sub>3</sub> group next to a CH<sub>2</sub> group: CH<sub>3</sub>–CH<sub>2</sub>.'), t('A CH<sub>3</sub> group gives three lines because it has three H atoms.'), t('Two CH<sub>2</sub> groups next to each other.')], answer: 1,
        wrong: function (i) { return i === 2 ? t('Not this one. The H atoms in a group do not split their own signal. The splitting comes from H atoms on the neighbouring carbon atom.') : t('Not this one. Number of lines = number of neighbouring H atoms + 1. A triplet has 2 neighbouring H. A quartet has 3 neighbouring H.'); },
        done: function () { return p.splitNote; } });
      else list.push({ name: t('NMR: splitting'), q: t('Both signals are singlets. What does this show?'),
        options: [t('Each signal comes from one H atom.'), t('The molecule has no CH<sub>3</sub> groups.'), t('The H atoms in each environment have no H atoms on the neighbouring carbon atom.'), t('The two groups of H atoms are bonded to the same carbon atom.')], answer: 2,
        wrong: function () { return t('Not this one. Number of lines = number of neighbouring H atoms + 1. One line means 0 neighbouring H atoms.'); },
        done: function () { return p.splitNote; } });
      list.push({ name: t('Structure'), q: t('Put the deductions together. Which structure is the unknown compound?'), structs: true });
      return list;
    }
    var LIST;
    function show(msg, kind) {
      clear(ask);
      setStep(Math.min(step + 1, LIST.length) + ' / ' + LIST.length);
      if (step >= LIST.length) {
        var okS = p.structs.filter(function (s) { return s.ok; })[0], host = el('div', { class: 's32h-center' });
        ask.appendChild(feedback('right', '<p>' + t('Solved. The unknown compound is {name}. Every piece of data fits this structure.', { name: '<b>' + p.name + '</b>' }) + '</p>'));
        ask.appendChild(host);
        mol2d(host, withLabel({ atoms: okS.spec.atoms, bonds: okS.spec.bonds }, t('Structure of {name} with its hydrogen environments labelled', { name: p.name })));
        return;
      }
      var s = LIST[step];
      ask.appendChild(el('p', { class: 's32h-q', html: t('Step {n}: {name}.', { n: step + 1, name: s.name }) + ' ' + s.q }));
      if (s.structs) {
        var grid = el('div', { class: 's32h-structs' });
        p.structs.forEach(function (st) {
          var b = el('button', { class: 's32h-struct', type: 'button' }), d = el('div');
          b.appendChild(d); b.appendChild(el('span', { class: 's32h-struct__name', html: st.name }));
          mol2d(d, withLabel({ atoms: st.spec.atoms.map(function (a) { var c = {}; Object.keys(a).forEach(function (k2) { if (k2 !== 'env') c[k2] = a[k2]; }); return c; }), bonds: st.spec.bonds, scale: 34 }, t('Structure of {name}', { name: st.name })));
          b.addEventListener('click', function () {
            if (st.ok) { note(t('Structure: {name}. It has the right formula, functional group, fragments, number of signals, areas and splitting.', { name: '<b>' + st.name + '</b>' })); step++; show(); }
            else show(st.why, 'wrong');
          });
          grid.appendChild(b);
        });
        ask.appendChild(grid);
      } else {
        var col = el('div', { class: 's32h-options' });
        s.options.forEach(function (o, i) {
          var b = el('button', { class: 'btn s32h-option', type: 'button', html: SPAN + o });
          b.addEventListener('click', function () {
            if (i === s.answer) { note(s.done()); step++; show(t('Correct. The deduction is in your notebook.'), 'right'); }
            else show(s.wrong(i), 'wrong');
          });
          col.appendChild(b);
        });
        ask.appendChild(col);
      }
      if (msg) ask.appendChild(feedback(kind, '<p>' + msg + '</p>'));
    }
    function load() {
      p = PROBS.filter(function (q) { return q.id === sel.value; })[0] || PROBS[0]; step = 0; notes = [];
      LIST = steps(); setKnown('?');
      showData(); renderBook(); show();
    }
    load();
  });

  /* Data hook for the checking script (scratchpad/s3-2h/check.js). */
  S1._s32h = { msData: msData, irData: irData, nmrMols: nmrMols, problems: problems, neighbours: neighbours, IR_RANGE: IR_RANGE, NMR_RANGE: NMR_RANGE, MS_LOST: MS_LOST, percent: percent, formulaMass: formulaMass };
})();
