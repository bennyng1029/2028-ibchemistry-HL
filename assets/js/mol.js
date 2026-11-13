/* ==========================================================================
   Structure Lab — mol.js   (optional; load after chem.js and core.js)
   Shared drawing helpers for the bonding and organic topics: S1.mol.

     S1.mol.lewis(el, spec)        Lewis formula (SVG)
     S1.mol.structural(el, spec)   full structural formula: every atom and bond (SVG)
     S1.mol.skeletal(el, spec)     skeletal formula (SVG)
     S1.mol.viewer3d(el, spec)     rotatable ball-and-stick model (canvas)
     S1.mol.vsepr(opts)            ideal VSEPR geometry → a viewer3d spec

   All colours come from the CSS tokens, so drawings follow the theme.
   Markup, specs and examples: docs/AUTHORING.md, section 8.  Demo: dev/mol-demo.html
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.util) { if (window.console) console.error('mol.js needs core.js to be loaded first'); return; }
  var t = S1.i18n.ui, tl = S1.i18n.either, doc = document, NS = 'http://www.w3.org/2000/svg';
  var MINUS = '−';

  function svgEl(tag, attrs, parent) {
    var n = doc.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function host(el) { return typeof el === 'string' ? doc.querySelector(el) : el; }
  function chargeText(c) {
    if (c == null || c === '' || c === 0) return '';
    if (typeof c === 'number') return (Math.abs(c) === 1 ? '' : Math.abs(c)) + (c < 0 ? MINUS : '+');
    return String(c).replace(/-/g, MINUS);
  }
  var INK = 'var(--ink)', FONT = 'var(--font-body)';

  /* ---------- Shared 2-D atom-and-bond renderer ------------------------------ */
  function angleOf(a, b) { return Math.atan2(b.y - a.y, b.x - a.x); }
  function angDist(a, b) { var d = Math.abs(a - b) % (2 * Math.PI); return d > Math.PI ? 2 * Math.PI - d : d; }

  // Directions for n lone pairs on an atom, as far as possible from its bonds.
  function loneDirections(atom, bondAngles, n) {
    if (Array.isArray(atom.lone)) return atom.lone.map(function (deg) { return -deg * Math.PI / 180; });
    if (!n) return [];
    var cands = [];
    if (bondAngles.length === 1) { var b = bondAngles[0]; cands = n === 2 ? [b + Math.PI * 0.6, b - Math.PI * 0.6] : [b + Math.PI, b + Math.PI / 2, b - Math.PI / 2]; }
    else {
      for (var k = 0; k < 8; k++) cands.push(k * Math.PI / 4);
      var score = function (a) { return bondAngles.length ? Math.min.apply(null, bondAngles.map(function (b2) { return angDist(a, b2); })) : 1; };
      // compass points first, then diagonals; each ranked by distance from the bonds
      cands.sort(function (p, q) { return (score(q) - score(p)) || ((Math.round(p / (Math.PI / 4)) % 2) - (Math.round(q / (Math.PI / 4)) % 2)); });
    }
    var out = [];
    cands.forEach(function (c) {
      if (out.length >= n) return;
      if (out.every(function (o) { return angDist(o, c) > 0.6; }) && bondAngles.every(function (b3) { return angDist(b3, c) > 0.5; })) out.push(c);
    });
    for (var i = 0; out.length < n && i < cands.length; i++) if (out.indexOf(cands[i]) < 0) out.push(cands[i]);
    return out;
  }

  /**
   * draw2d(el, spec, mode) — used by lewis() and structural().
   * spec.atoms: [{el: 'O', x, y, lone: 2 | [angles in degrees, 0 = right, 90 = up], charge: '-' | -1, label}]
   * spec.bonds: [{a, b, order: 1|2|3, dative: true (arrow from a to b)}]   a, b are atom indexes
   * spec.bracket: true to draw square brackets; spec.charge: overall charge shown outside the bracket
   * spec.scale: pixels per unit of x/y (default 46).  x/y are in bond lengths; y grows downwards.
   * spec.label: text alternative (required for a meaningful aria-label).
   */
  function draw2d(el, spec, mode) {
    el = host(el);
    var S = spec.scale || 46, atoms = spec.atoms, bonds = spec.bonds || [];
    var pts = atoms.map(function (a) { return { x: a.x * S, y: a.y * S }; });
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    pts.forEach(function (p) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); });
    var pad = mode === 'lewis' ? 30 : 20, bx = spec.bracket ? 16 : 0;
    var extraR = spec.bracket && spec.charge ? 26 : 0;
    var x0 = minX - pad - bx, y0 = minY - pad - (spec.bracket ? 10 : 0), w = maxX - minX + 2 * pad + 2 * bx + extraR, h = maxY - minY + 2 * pad + (spec.bracket ? 14 : 0);
    el.innerHTML = '';
    el.classList.add('mol', 'mol--' + mode);
    el.setAttribute('data-i18n', 'off');
    var svg = svgEl('svg', { viewBox: [x0, y0, w, h].join(' '), width: w, height: h, role: 'img', class: 'mol__svg' }, el);
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    var fallbackLabel = mode === 'structural' ? 'Structural formula' : 'Lewis formula';   // i18n
    S1.i18n.liveAttr(svg, 'aria-label', function () { return tl(spec.label || fallbackLabel); });

    var bondAngles = atoms.map(function () { return []; });
    bonds.forEach(function (b) { bondAngles[b.a].push(angleOf(pts[b.a], pts[b.b])); bondAngles[b.b].push(angleOf(pts[b.b], pts[b.a])); });
    function clear(i) { var s = atoms[i].label || atoms[i].el || ''; return s === '' ? 0 : s.length > 1 ? 15 : 12; }

    bonds.forEach(function (b) {
      var p = pts[b.a], q = pts[b.b], ang = angleOf(p, q), ux = Math.cos(ang), uy = Math.sin(ang), nx = -uy, ny = ux;
      var a1 = { x: p.x + ux * clear(b.a), y: p.y + uy * clear(b.a) }, a2 = { x: q.x - ux * clear(b.b), y: q.y - uy * clear(b.b) };
      var order = b.order || 1, offs = order === 2 ? [-3.2, 3.2] : order === 3 ? [-5.2, 0, 5.2] : [0];
      if (b.dative) { a2 = { x: a2.x - ux * 2, y: a2.y - uy * 2 }; }
      offs.forEach(function (o) {
        svgEl('line', { x1: a1.x + nx * o, y1: a1.y + ny * o, x2: a2.x + nx * o, y2: a2.y + ny * o, style: 'stroke:' + INK + ';stroke-width:1.8;stroke-linecap:round' }, svg);
      });
      if (b.dative) {
        var hx = a2.x + ux * 2, hy = a2.y + uy * 2;
        svgEl('path', { d: 'M' + hx + ' ' + hy + ' L' + (hx - ux * 9 + nx * 4.5) + ' ' + (hy - uy * 9 + ny * 4.5) + ' L' + (hx - ux * 9 - nx * 4.5) + ' ' + (hy - uy * 9 - ny * 4.5) + ' Z', style: 'fill:' + INK }, svg);
      }
    });

    atoms.forEach(function (a, i) {
      var p = pts[i], text = a.label || a.el;
      if (text) {
        var tx = svgEl('text', { x: p.x, y: p.y, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:' + FONT + ';font-size:19px;font-weight:700' }, svg);
        tx.textContent = text;
      }
      if (mode === 'lewis') {
        var n = typeof a.lone === 'number' ? a.lone : Array.isArray(a.lone) ? a.lone.length : 0;
        var loneAngles = loneDirections(a, bondAngles[i], n);
        a._taken = bondAngles[i].concat(loneAngles);
        loneAngles.forEach(function (ang) {
          var r = clear(i) + 5, cx = p.x + Math.cos(ang) * r, cy = p.y + Math.sin(ang) * r, nx = -Math.sin(ang), ny = Math.cos(ang);
          [-4.2, 4.2].forEach(function (o) { svgEl('circle', { cx: cx + nx * o, cy: cy + ny * o, r: 2.3, style: 'fill:' + INK }, svg); });
        });
        if (a.radical) {
          var ra = loneDirections({ lone: 1 }, bondAngles[i], 1)[0];
          svgEl('circle', { cx: p.x + Math.cos(ra) * (clear(i) + 5), cy: p.y + Math.sin(ra) * (clear(i) + 5), r: 2.3, style: 'fill:' + INK }, svg);
        }
      }
      var ch = chargeText(a.charge);
      if (ch) {
        // formal charge: small and circled so it is not read as an ion charge; placed on the diagonal that is
        // furthest from this atom's bonds and lone pairs (upper right if that is free)
        var taken = a._taken || bondAngles[i], bestA = -Math.PI / 4, bestGap = -1;
        [-Math.PI / 4, -3 * Math.PI / 4, Math.PI / 4, 3 * Math.PI / 4].forEach(function (c) {
          var gap = taken.length ? Math.min.apply(null, taken.map(function (q) { return angDist(c, q); })) : 9;
          if (gap > bestGap + 0.05) { bestGap = gap; bestA = c; }
        });
        var cr = clear(i) + (bestGap < 0.9 ? 16 : 10);
        var cx2 = p.x + Math.cos(bestA) * cr, cy2 = p.y + Math.sin(bestA) * cr;
        svgEl('circle', { cx: cx2, cy: cy2, r: 7.5, style: 'fill:var(--surface);stroke:' + INK + ';stroke-width:1' }, svg);
        var ct = svgEl('text', { x: cx2, y: cy2 + 0.5, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:var(--font-mono);font-size:11px;font-weight:600' }, svg);
        ct.textContent = ch;
      }
    });

    if (spec.bracket) {
      var L = minX - pad - 6, R = maxX + pad + 6, T = minY - pad + 2, B = maxY + pad - 2, k = 8;
      var st = 'fill:none;stroke:' + INK + ';stroke-width:1.8';
      svgEl('path', { d: 'M' + (L + k) + ' ' + T + ' H' + L + ' V' + B + ' H' + (L + k), style: st }, svg);
      svgEl('path', { d: 'M' + (R - k) + ' ' + T + ' H' + R + ' V' + B + ' H' + (R - k), style: st }, svg);
      if (spec.charge) {
        var bt = svgEl('text', { x: R + 5, y: T + 6, 'text-anchor': 'start', style: 'fill:' + INK + ';font-family:var(--font-body);font-size:18px;font-weight:700' }, svg);
        bt.textContent = chargeText(spec.charge);
      }
    }
    return svg;
  }

  /* Auto-layout for a central atom with outer atoms. */
  var COMPASS = [Math.PI, 0, Math.PI / 2, -Math.PI / 2];              // W, E, S, N (y grows downwards)
  /**
   * centralSpec({central: 'N', outer: ['H','H','H'], orders: [1,1,1], centralLone: 1, outerLone: [0,0,0],
   *              centralCharge, outerCharges: [], dative: [false,...], bracket, charge, label})
   * Up to four positions use left, right, bottom, top; bonds first, then the central atom's lone pairs.
   */
  function centralSpec(o) {
    var n = o.outer.length, cl = o.centralLone || 0, angles = [], loneAngles = [];
    if (n + cl <= 4) {
      angles = COMPASS.slice(0, n);
      if (n === 2 && cl === 0) angles = [Math.PI, 0];
      loneAngles = COMPASS.slice(n, n + cl);
    } else {
      for (var i = 0; i < n; i++) angles.push(-Math.PI / 2 + i * 2 * Math.PI / n);
      for (var j = 0; j < cl; j++) loneAngles.push(-Math.PI / 2 + (j * Math.floor(n / Math.max(cl, 1)) + 0.5) * 2 * Math.PI / n);
    }
    var atoms = [{ el: o.central, x: 0, y: 0, charge: o.centralCharge, lone: loneAngles.map(function (a) { return -a * 180 / Math.PI; }) }], bonds = [];
    o.outer.forEach(function (sym, k) {
      atoms.push({ el: sym, x: Math.cos(angles[k]) * 1.25, y: Math.sin(angles[k]) * 1.25, lone: o.outerLone ? o.outerLone[k] : 0, charge: o.outerCharges ? o.outerCharges[k] : null });
      bonds.push({ a: 0, b: k + 1, order: o.orders ? o.orders[k] : 1, dative: !!(o.dative && o.dative[k]) });
    });
    return { atoms: atoms, bonds: bonds, bracket: o.bracket, charge: o.charge, label: o.label, scale: o.scale };
  }

  /** Lewis formula. spec is either {atoms, bonds, ...} or the central-atom shorthand (see centralSpec). */
  function lewis(el, spec) { return draw2d(el, spec.central ? centralSpec(spec) : spec, 'lewis'); }

  /* ---------- Full structural formula ------------------------------------------ */
  var VALENCE = { H: 1, C: 4, N: 3, O: 2, S: 2, F: 1, Cl: 1, Br: 1, I: 1, P: 3 };
  /**
   * chainSpec({chain: ['C','C','O'], bonds: [1, 1], subs: {0: ['Cl'], 1: ['=O']}, label})
   * Lays the chain out left to right and adds hydrogens to fill each atom's valence.
   * A substituent is an element symbol, optionally with '=' or '#' in front (double / triple bond),
   * e.g. 'Cl', 'O' (becomes O–H), '=O', 'N' (becomes NH2), 'C' (becomes CH3).
   */
  function chainSpec(o) {
    var atoms = [], bonds = [], chain = o.chain, cb = o.bonds || [], subs = o.subs || {};
    function add(elm, x, y) { atoms.push({ el: elm, x: x, y: y }); return atoms.length - 1; }
    var idx = chain.map(function (c, i) { return add(c, i * 1.25, 0); });
    idx.forEach(function (ai, i) { if (i > 0) bonds.push({ a: idx[i - 1], b: ai, order: cb[i - 1] || 1 }); });
    function fill(ai, used, dirs) {
      // dirs: free directions as [dx, dy]; add H atoms until the valence is full
      var need = (VALENCE[atoms[ai].el] || 0) - used;
      for (var k = 0; k < need && k < dirs.length; k++) { var h = add('H', atoms[ai].x + dirs[k][0], atoms[ai].y + dirs[k][1]); bonds.push({ a: ai, b: h, order: 1 }); }
    }
    chain.forEach(function (c, i) {
      var ai = idx[i], used = (i > 0 ? (cb[i - 1] || 1) : 0) + (i < chain.length - 1 ? (cb[i] || 1) : 0);
      var slots = [[0, -1.15], [0, 1.15]], ends = [];
      if (i === 0) ends.push([-1.15, 0]);
      if (i === chain.length - 1) ends.push([1.15, 0]);
      slots = slots.concat(ends);                     // named substituents go above and below first
      var list = subs[i] ? (Array.isArray(subs[i]) ? subs[i] : [subs[i]]) : [];
      list.forEach(function (sb) {
        var m = /^([=#]?)([A-Z][a-z]?)/.exec(sb); if (!m || !slots.length) return;
        var order = m[1] === '=' ? 2 : m[1] === '#' ? 3 : 1, d = slots.shift();
        var si = add(m[2], atoms[ai].x + d[0], atoms[ai].y + d[1]);
        bonds.push({ a: ai, b: si, order: order }); used += order;
        var ux = d[0] / 1.15, uy = d[1] / 1.15, out = [[ux * 1.05, uy * 1.05], [-uy * 1.05 + ux * 0.35, ux * 1.05 + uy * 0.35], [uy * 1.05 + ux * 0.35, -ux * 1.05 + uy * 0.35]];
        fill(si, order, out);
      });
      // hydrogens: the free end position first (so O–H and N–H read along the chain), then above and below
      slots.sort(function (p, q) { return (p[0] !== 0 ? 0 : 1) - (q[0] !== 0 ? 0 : 1); });
      fill(ai, used, slots);
    });
    return { atoms: atoms, bonds: bonds, label: o.label, scale: o.scale || 40 };
  }
  /** Full structural formula. spec is {atoms, bonds} or the chain shorthand {chain, bonds, subs}. */
  function structural(el, spec) { return draw2d(el, spec.chain ? chainSpec(spec) : spec, 'structural'); }

  /* ---------- Skeletal formula ---------------------------------------------------- */
  function subLabel(label, flip) {
    var m = /^([ONS])H(\d?)$/.exec(label);
    if (flip && m) return ['H', m[2], m[1]];
    var parts = [];
    label.replace(/([A-Za-z]+)(\d*)/g, function (all, letters, digits) { parts.push(letters, digits); return ''; });
    return parts;
  }
  /**
   * zigzag({chain: 4 | ['', '', '', 'OH'], double: [1], triple: [], subs: {2: 'OH', 3: ['=O', {label: 'CH3', stereo: 'wedge'}]}, numbers: true, label})
   * Carbon i (1-based) is the i-th vertex. double/triple list the bond that starts at that carbon.
   * A chain entry with text (e.g. 'OH') is drawn as a labelled atom at that vertex.
   */
  function zigzag(o) {
    var labels = typeof o.chain === 'number' ? new Array(o.chain).fill('') : o.chain.map(function (c) { return c === 'C' ? '' : c; });
    var n = labels.length, dx = Math.cos(Math.PI / 6), dy = 0.5, atoms = [], bonds = [];
    for (var i = 0; i < n; i++) atoms.push({ x: i * dx, y: i % 2 ? 0 : dy, label: labels[i], number: o.numbers ? i + 1 : null });
    for (i = 0; i < n - 1; i++) bonds.push({ a: i, b: i + 1, order: (o.triple || []).indexOf(i + 1) > -1 ? 3 : (o.double || []).indexOf(i + 1) > -1 ? 2 : 1 });
    var subs = o.subs || {};
    Object.keys(subs).forEach(function (key) {
      var ci = Number(key) - 1, list = Array.isArray(subs[key]) ? subs[key] : [subs[key]];
      var up = ci % 2 === 1 ? -1 : 1;                           // away from the chain: peaks go up, troughs go down
      list.forEach(function (sb, k) {
        var s = typeof sb === 'string' ? { label: sb } : sb, order = 1, lab = s.label || '';
        if (lab[0] === '=') { order = 2; lab = lab.slice(1); } else if (lab[0] === '#') { order = 3; lab = lab.slice(1); }
        var spread = list.length > 1 ? (k === 0 ? -0.5 : 0.5) : 0;
        var ang = Math.PI / 2 * up + spread * up;
        if (ci === 0 && list.length === 1 && n > 1) ang = up > 0 ? Math.PI * 0.72 : -Math.PI * 0.72;
        if (ci === n - 1 && list.length === 1 && n > 1 && s.end) ang = up > 0 ? Math.PI * 0.28 : -Math.PI * 0.28;
        atoms.push({ x: atoms[ci].x + Math.cos(ang), y: atoms[ci].y + Math.sin(ang) * 1, label: lab === 'C' || lab === 'CH3' && s.implicit ? '' : lab });
        bonds.push({ a: ci, b: atoms.length - 1, order: s.order || order, stereo: s.stereo });
      });
    });
    return { atoms: atoms, bonds: bonds, label: o.label, scale: o.scale, numbers: o.numbers };
  }
  /**
   * Skeletal formula. spec is {atoms: [{x, y, label, number}], bonds: [{a, b, order, stereo: 'wedge' | 'hash'}], scale, label}
   * or the zig-zag shorthand (see zigzag). Unlabelled atoms are carbon vertices.
   */
  function skeletal(el, spec) {
    if (spec.chain != null) spec = zigzag(spec);
    el = host(el);
    var S = spec.scale || 38, atoms = spec.atoms, bonds = spec.bonds || [];
    var pts = atoms.map(function (a) { return { x: a.x * S, y: a.y * S }; });
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    pts.forEach(function (p, i) { var e = atoms[i].label ? 26 : 10; minX = Math.min(minX, p.x - e); maxX = Math.max(maxX, p.x + e); minY = Math.min(minY, p.y - 16); maxY = Math.max(maxY, p.y + 16); });
    var pad = 12;
    el.innerHTML = ''; el.classList.add('mol', 'mol--skeletal'); el.setAttribute('data-i18n', 'off');
    var w = maxX - minX + 2 * pad, h = maxY - minY + 2 * pad;
    var svg = svgEl('svg', { viewBox: [minX - pad, minY - pad, w, h].join(' '), width: w, height: h, role: 'img', class: 'mol__svg' }, el);
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    S1.i18n.liveAttr(svg, 'aria-label', function () { return tl(spec.label || 'Skeletal formula'); });
    var centre = { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
    var deg = atoms.map(function () { return []; });
    bonds.forEach(function (b) { deg[b.a].push(b.b); deg[b.b].push(b.a); });
    var line = 'stroke:' + INK + ';stroke-width:1.8;stroke-linecap:round;fill:none';
    // Centre of the smallest ring that contains the bond i–j, or null if the bond is not in a ring.
    // (The middle of the whole drawing is the wrong reference for a ring that has a side chain.)
    function ringCentre(i, j) {
      var prev = {}, queue = [i], k, cur, at, cx = 0, cy = 0, n = 0;
      prev[i] = -1;
      while (queue.length && prev[j] === undefined) {
        cur = queue.shift();
        for (k = 0; k < deg[cur].length; k++) {
          at = deg[cur][k];
          if (prev[at] !== undefined || (cur === i && at === j)) continue;
          prev[at] = cur; queue.push(at);
        }
      }
      if (prev[j] === undefined) return null;
      for (cur = j; cur !== -1; cur = prev[cur]) { cx += pts[cur].x; cy += pts[cur].y; n++; }
      return { x: cx / n, y: cy / n };
    }

    bonds.forEach(function (b) {
      var p = pts[b.a], q = pts[b.b], ang = angleOf(p, q), ux = Math.cos(ang), uy = Math.sin(ang), nx = -uy, ny = ux;
      var ta = atoms[b.a].label ? 11 : 0, tb = atoms[b.b].label ? 11 : 0;
      var a1 = { x: p.x + ux * ta, y: p.y + uy * ta }, a2 = { x: q.x - ux * tb, y: q.y - uy * tb };
      if (b.stereo === 'wedge') {
        svgEl('path', { d: 'M' + a1.x + ' ' + a1.y + ' L' + (a2.x + nx * 4.5) + ' ' + (a2.y + ny * 4.5) + ' L' + (a2.x - nx * 4.5) + ' ' + (a2.y - ny * 4.5) + ' Z', style: 'fill:' + INK }, svg);
        return;
      }
      if (b.stereo === 'hash') {
        var len = Math.hypot(a2.x - a1.x, a2.y - a1.y), steps = Math.max(4, Math.round(len / 4.5));
        for (var s = 1; s <= steps; s++) { var f = s / steps, hw = 0.8 + 3.8 * f, cx = a1.x + (a2.x - a1.x) * f, cy = a1.y + (a2.y - a1.y) * f; svgEl('line', { x1: cx + nx * hw, y1: cy + ny * hw, x2: cx - nx * hw, y2: cy - ny * hw, style: 'stroke:' + INK + ';stroke-width:1.4' }, svg); }
        return;
      }
      svgEl('line', { x1: a1.x, y1: a1.y, x2: a2.x, y2: a2.y, style: line }, svg);
      var order = b.order || 1;
      if (order >= 2) {
        // second line: inside the ring for a ring bond (benzene), else on the side facing the middle of the drawing
        var mid = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 }, inner = ringCentre(b.a, b.b) || centre;
        var side = ((inner.x - mid.x) * nx + (inner.y - mid.y) * ny) >= 0 ? 1 : -1;
        var terminal = deg[b.b].length === 1 || deg[b.a].length === 1, off = 4.6 * side, trim = terminal ? 0 : 5;
        if (order === 3) { [-4.6, 4.6].forEach(function (o2) { svgEl('line', { x1: a1.x + nx * o2, y1: a1.y + ny * o2, x2: a2.x + nx * o2, y2: a2.y + ny * o2, style: line }, svg); }); }
        else svgEl('line', { x1: a1.x + nx * off + ux * trim, y1: a1.y + ny * off + uy * trim, x2: a2.x + nx * off - ux * trim, y2: a2.y + ny * off - uy * trim, style: line }, svg);
      }
    });
    atoms.forEach(function (a, i) {
      var p = pts[i];
      if (a.label) {
        var nb = deg[i].length ? pts[deg[i][0]] : null, left = nb ? p.x < nb.x - 4 : false, vertical = nb ? Math.abs(p.x - nb.x) <= 4 : true;
        var parts = subLabel(a.label, left);
        var tx = svgEl('text', { x: p.x + (vertical ? -6 : left ? 6 : -6), y: p.y, 'text-anchor': left && !vertical ? 'end' : 'start', 'dominant-baseline': 'central', style: 'fill:' + INK + ';font-family:' + FONT + ';font-size:16px;font-weight:700' }, svg);
        for (var k = 0; k < parts.length; k += 2) {
          var ts = svgEl('tspan', {}, tx); ts.textContent = parts[k];
          if (parts[k + 1]) { var sb = svgEl('tspan', { 'baseline-shift': 'sub', style: 'font-size:11px' }, tx); sb.textContent = parts[k + 1]; }
        }
      }
      if (a.number != null) {
        // put the number in the widest gap between the bonds at this atom
        var dirs = deg[i].map(function (j) { return angleOf(p, pts[j]); }), bestA = -Math.PI / 2, bestGap = -1;
        for (var c = 0; c < 16; c++) {
          var cand = c * Math.PI / 8, gap = dirs.length ? Math.min.apply(null, dirs.map(function (d2) { return angDist(cand, d2); })) : 1;
          if (gap > bestGap + 1e-6) { bestGap = gap; bestA = cand; }
        }
        var away = { x: Math.cos(bestA), y: Math.sin(bestA) }, m = 1;
        var nt = svgEl('text', { x: p.x + away.x / m * 13, y: p.y + away.y / m * 13, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:var(--accent-ink);font-family:var(--font-mono);font-size:11px;font-weight:600' }, svg);
        nt.textContent = a.number;
      }
    });
    return svg;
  }

  /* ---------- VSEPR geometries --------------------------------------------------- */
  var R3 = Math.sqrt(3);
  var DOMAIN_POS = {
    2: [[1, 0, 0], [-1, 0, 0]],
    3: [[0, 1, 0], [R3 / 2, -0.5, 0], [-R3 / 2, -0.5, 0]],
    4: [[0, 1, 0], [Math.sqrt(8 / 9), -1 / 3, 0], [-Math.sqrt(2 / 9), -1 / 3, Math.sqrt(2 / 3)], [-Math.sqrt(2 / 9), -1 / 3, -Math.sqrt(2 / 3)]],
    // 5: three equatorial positions first (lone pairs go there), then the two axial
    5: [[1, 0, 0], [-0.5, 0, R3 / 2], [-0.5, 0, -R3 / 2], [0, 1, 0], [0, -1, 0]],
    // 6: the two lone pairs of a square planar molecule are opposite each other (first two entries)
    6: [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]
  };
  /** Shapes by "domains-lonePairs": name, electron domain geometry, ideal angles (degrees) and what lone pairs do to them. */
  var SHAPES = {
    '2-0': { name: 'linear', domainGeometry: 'linear', angles: [180], note: '180°' },
    '3-0': { name: 'trigonal planar', domainGeometry: 'trigonal planar', angles: [120], note: '120°' },
    '3-1': { name: 'bent (V-shaped)', domainGeometry: 'trigonal planar', angles: [120], note: 'less than 120°' },
    '4-0': { name: 'tetrahedral', domainGeometry: 'tetrahedral', angles: [109.5], note: '109.5°' },
    '4-1': { name: 'trigonal pyramidal', domainGeometry: 'tetrahedral', angles: [109.5], note: 'less than 109.5°' },
    '4-2': { name: 'bent (V-shaped)', domainGeometry: 'tetrahedral', angles: [109.5], note: 'less than 109.5°' },
    '5-0': { name: 'trigonal bipyramidal', domainGeometry: 'trigonal bipyramidal', angles: [90, 120, 180], note: '90°, 120° and 180°' },
    '5-1': { name: 'seesaw', domainGeometry: 'trigonal bipyramidal', angles: [90, 120, 180], note: 'less than 90° and less than 120°' },
    '5-2': { name: 'T-shaped', domainGeometry: 'trigonal bipyramidal', angles: [90, 180], note: 'less than 90°' },
    '5-3': { name: 'linear', domainGeometry: 'trigonal bipyramidal', angles: [180], note: '180°' },
    '6-0': { name: 'octahedral', domainGeometry: 'octahedral', angles: [90, 180], note: '90° and 180°' },
    '6-1': { name: 'square pyramidal', domainGeometry: 'octahedral', angles: [90, 180], note: 'less than 90°' },
    '6-2': { name: 'square planar', domainGeometry: 'octahedral', angles: [90, 180], note: '90° and 180°' }
  };
  /**
   * vsepr({domains: 4, lonePairs: 1, central: 'N', outer: 'H' | ['H','H','H'], bondLength: 1.1, orders: [..]})
   * → {name, domainGeometry, idealAngles, angleNote, atoms, bonds, lonePairs, angle, label}  (a viewer3d spec), or null
   * if the combination is not one of the IB shapes. Coordinates use the IDEAL electron domain geometry.
   */
  function vsepr(o) {
    var d = o.domains, lp = o.lonePairs || 0, shape = SHAPES[d + '-' + lp];
    if (!shape) return null;
    var pos = DOMAIN_POS[d], L = o.bondLength || 1.5, central = o.central || 'A', nb = d - lp;
    var atoms = [{ el: central, x: 0, y: 0, z: 0 }], bonds = [], lone = [];
    for (var i = 0; i < d; i++) {
      var p = pos[i];
      if (i < lp) lone.push({ on: 0, dir: p });
      else {
        var k = i - lp, sym = Array.isArray(o.outer) ? o.outer[k] : (o.outer || 'X');
        atoms.push({ el: sym, x: p[0] * L, y: p[1] * L, z: p[2] * L });
        bonds.push({ a: 0, b: atoms.length - 1, order: o.orders ? o.orders[k] : 1 });
      }
    }
    // Label the smallest angle between two bonds. With lone pairs the real angle is smaller than the ideal one drawn.
    var best = null, bestCos = -2;
    for (var a = 1; a < atoms.length; a++) for (var b = a + 1; b < atoms.length; b++) {
      var c = (atoms[a].x * atoms[b].x + atoms[a].y * atoms[b].y + atoms[a].z * atoms[b].z) / (L * L);
      if (c > bestCos + 1e-6) { bestCos = c; best = [a, 0, b]; }
    }
    var ideal = best ? Math.round(Math.acos(Math.max(-1, Math.min(1, bestCos))) * 1800 / Math.PI) / 10 : null;
    var exact = lp === 0 || (d === 5 && lp === 3) || (d === 6 && lp === 2);
    return {
      name: shape.name, domainGeometry: shape.domainGeometry, idealAngles: shape.angles.slice(), angleNote: shape.note,
      atoms: atoms, bonds: bonds, lonePairs: lone, angle: best, angleText: best ? (exact ? '' : '< ') + ideal + '\u00B0' : null,
      label: central + (nb ? (Array.isArray(o.outer) ? o.outer.join('') : (o.outer || 'X') + (nb > 1 ? nb : '')) : '') + ': ' + shape.name
    };
  }

  /* ---------- 3-D ball-and-stick viewer --------------------------------------------- */
  // CPK-like colours, chosen to stay distinct on light and dark backgrounds (every atom also has an outline and its symbol).
  var CPK = { H: '#F1F4F8', C: '#5B6573', N: '#3F6FE0', O: '#E04444', F: '#63C98A', Cl: '#2FAE4E', Br: '#A8502A', I: '#8A55C7', S: '#E3B81E', P: '#F08A24', B: '#E9A99A', Si: '#C9A66B',
    He: '#57C9DC', Ne: '#57C9DC', Ar: '#57C9DC', Kr: '#57C9DC', Xe: '#57C9DC', Na: '#9B7FE0', K: '#9B7FE0', Li: '#9B7FE0', Mg: '#7FBF5A', Ca: '#7FBF5A', Fe: '#D9793A', Cu: '#C9844A', Zn: '#8FA3B8', Al: '#B4BFCC' };
  var DEFAULT_R = 0.34, DEFAULT_COL = '#B4BFCC';
  var RADII = { H: 0.26, C: 0.36, N: 0.35, O: 0.34, F: 0.32, Cl: 0.42, Br: 0.46, I: 0.5, S: 0.43, P: 0.43, Xe: 0.5 };
  function lum(hex) { var n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; }
  function shade(hex, f) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    var m = function (c) { return Math.round(f > 0 ? c + (255 - c) * f : c * (1 + f)); };
    return 'rgb(' + m(r) + ',' + m(g) + ',' + m(b) + ')';
  }

  /**
   * viewer3d(el, spec) → {el, canvas, setSpec(spec), reset(), rotate(dYaw, dPitch), spin(on), redraw()}
   * spec.atoms: [{el: 'C', x, y, z, label}]  (any consistent length unit; bond length about 1)
   * spec.bonds: [{a, b, order}]              spec.lonePairs: [{on: atomIndex, dir: [x, y, z]}]
   * spec.angle: [i, j, k] labels the angle i–j–k (true 3-D value);  spec.angleText overrides the text
   * spec.height (px, default 280), spec.autoRotate (default false; never starts by itself with reduced motion),
   * spec.labels (default true: element symbols on the atoms), spec.controls (default true), spec.label (alt text)
   * Drag or swipe to rotate; arrow keys when focused; Home resets.
   */
  function viewer3d(el, spec) {
    el = host(el);
    el.innerHTML = ''; el.classList.add('mol', 'mol--3d'); el.setAttribute('data-i18n', 'off');
    var canvas = doc.createElement('canvas');
    canvas.className = 'mol__canvas'; canvas.tabIndex = 0; canvas.setAttribute('role', 'img');
    canvas.style.touchAction = 'pan-y'; canvas.style.display = 'block'; canvas.style.cursor = 'grab';
    el.appendChild(canvas);
    var status = spec.onAtom ? S1.util.el('p', { class: 'sr-only', role: 'status', 'aria-live': 'polite' }) : null;
    if (status) el.appendChild(status);
    var ctx = canvas.getContext('2d'), W = 0, H = 0;
    var yaw0 = -0.5, pitch0 = 0.35, yaw = yaw0, pitch = pitch0, spinning = false, raf = 0, visible = true;
    var reduced = S1.util.reducedMotion();

    S1.i18n.liveAttr(canvas, 'aria-label', function () {
      return tl(spec.label || '3-D model') + '. ' + t('Drag or use the arrow keys to rotate.') + (spec.onAtom ? ' ' + t('Press [ or ] to move between atoms and Enter to choose one.') : '');
    });

    function size() {
      var w = Math.max(160, Math.floor(el.clientWidth || 320)), h = spec.height || 280, dpr = Math.min(window.devicePixelRatio || 1, 3);
      W = w; H = h; canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function rot(p) {
      var cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      var x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1] * cp - z * sp;
      return [x, y, p[1] * sp + z * cp];
    }
    function draw() {
      var ink = S1.theme.color('--ink'), accent = S1.theme.color('--accent'), soft = S1.theme.color('--accent-soft'), surface = S1.theme.color('--surface'), ink3 = S1.theme.color('--ink-3');
      var font = S1.theme.color('--font-body') || 'sans-serif', mono = S1.theme.color('--font-mono') || 'monospace';
      ctx.clearRect(0, 0, W, H);
      var atoms = spec.atoms || [], bonds = spec.bonds || [], lps = spec.lonePairs || [];
      var cx = 0, cy = 0, cz = 0;
      atoms.forEach(function (a) { cx += a.x; cy += a.y; cz += a.z; });
      var n = atoms.length || 1; cx /= n; cy /= n; cz /= n;
      var ext = 0.6;
      (spec.arrows || []).forEach(function (a) { [a.from, a.to].forEach(function (v) { if (typeof v !== 'number') ext = Math.max(ext, Math.hypot(v[0] - cx, v[1] - cy, v[2] - cz) + 0.2); }); });
      atoms.forEach(function (a) { ext = Math.max(ext, Math.hypot(a.x - cx, a.y - cy, a.z - cz) + (a.r || RADII[a.el] || DEFAULT_R)); });
      lps.forEach(function (l) { var a = atoms[l.on]; ext = Math.max(ext, Math.hypot(a.x - cx, a.y - cy, a.z - cz) + 1.05); });
      var scale = Math.min(W, H) / 2 / ext * 0.9, cam = ext * 4.5;
      function project(p) {
        var r = rot([p[0] - cx, p[1] - cy, p[2] - cz]), k = cam / (cam - r[2]);
        return { x: W / 2 + r[0] * scale * k, y: H / 2 - r[1] * scale * k, z: r[2], k: k };
      }
      var P = atoms.map(function (a) { var q = project([a.x, a.y, a.z]); q.r = (a.r || RADII[a.el] || DEFAULT_R) * scale * q.k; return q; });
      lastP = P;
      var items = [];
      atoms.forEach(function (a, i) { items.push({ z: P[i].z, type: 'atom', i: i }); });
      bonds.forEach(function (b) { items.push({ z: (P[b.a].z + P[b.b].z) / 2 - 0.001, type: 'bond', b: b }); });
      (spec.arrows || []).forEach(function (a) {
        var end = function (v) { return typeof v === 'number' ? [atoms[v].x, atoms[v].y, atoms[v].z] : v; };
        var p0 = project(end(a.from)), p1 = project(end(a.to));
        items.push({ z: (p0.z + p1.z) / 2 + 0.002, type: 'arrow', a: a, p0: p0, p1: p1 });
      });
      lps.forEach(function (l) {
        var a = atoms[l.on], m = Math.hypot(l.dir[0], l.dir[1], l.dir[2]) || 1, d = [l.dir[0] / m, l.dir[1] / m, l.dir[2] / m];
        var q = project([a.x + d[0] * 0.72, a.y + d[1] * 0.72, a.z + d[2] * 0.72]);
        items.push({ z: q.z, type: 'lone', q: q, from: P[l.on] });
      });
      items.sort(function (p, q) { return p.z - q.z; });
      items.forEach(function (it) {
        if (it.type === 'bond') {
          var A = P[it.b.a], B = P[it.b.b], dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy);
          if (len < 1) return;
          var ux = dx / len, uy = dy / len, nx = -uy, ny = ux;
          // start just inside each sphere's outline so the stick meets the ball cleanly
          var sa = Math.min(A.r * 0.92, len / 2), sb = Math.min(B.r * 0.92, len / 2);
          var x1 = A.x + ux * sa, y1 = A.y + uy * sa, x2 = B.x - ux * sb, y2 = B.y - uy * sb;
          var order = it.b.order || 1, wdt = Math.max(2.5, scale * 0.11 * (A.k + B.k) / 2), offs = order === 2 || order === 1.5 || it.b.partial ? [-0.9, 0.9] : order === 3 ? [-1.5, 0, 1.5] : [0];
          var partial = order === 1.5 || it.b.partial;       // delocalized: one full stick and one dashed
          offs.forEach(function (o, oi) {
            ctx.beginPath(); ctx.moveTo(x1 + nx * o * wdt, y1 + ny * o * wdt); ctx.lineTo(x2 + nx * o * wdt, y2 + ny * o * wdt);
            if (partial && oi === 1) { ctx.setLineDash([5, 4]); ctx.lineCap = 'butt'; ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.stroke(); ctx.setLineDash([]); return; }
            if (it.b.dashed) {     // a weaker attraction (hydrogen bond, force between layers): thin dashed line
              ctx.setLineDash([5, 5]); ctx.lineCap = 'butt'; ctx.strokeStyle = ink; ctx.lineWidth = 1.75; ctx.stroke(); ctx.setLineDash([]);
              return;
            }
            ctx.lineCap = 'round'; ctx.strokeStyle = ink; ctx.lineWidth = (order > 1 ? wdt * 0.62 : wdt) + 2; ctx.stroke();
            ctx.strokeStyle = S1.theme.color('--line-strong'); ctx.lineWidth = order > 1 ? wdt * 0.62 : wdt; ctx.stroke();
          });
        } else if (it.type === 'arrow') {
          var A0 = it.p0, A1 = it.p1, adx = A1.x - A0.x, ady = A1.y - A0.y, al = Math.hypot(adx, ady);
          if (al < 4) return;
          var aux = adx / al, auy = ady / al, acol = S1.theme.color(it.a.color || '--accent'), hd = Math.min(11, al * 0.45);
          ctx.strokeStyle = acol; ctx.fillStyle = acol; ctx.lineWidth = it.a.width || 2.5; ctx.lineCap = 'butt';
          ctx.beginPath(); ctx.moveTo(A0.x, A0.y); ctx.lineTo(A1.x - aux * hd * 0.8, A1.y - auy * hd * 0.8); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(A1.x, A1.y); ctx.lineTo(A1.x - aux * hd - auy * hd * 0.5, A1.y - auy * hd + aux * hd * 0.5); ctx.lineTo(A1.x - aux * hd + auy * hd * 0.5, A1.y - auy * hd - aux * hd * 0.5); ctx.closePath(); ctx.fill();
          if (it.a.cross) {      // dipole convention: a small cross at the positive (tail) end
            ctx.beginPath(); ctx.moveTo(A0.x + aux * 6 - auy * 5, A0.y + auy * 6 + aux * 5); ctx.lineTo(A0.x + aux * 6 + auy * 5, A0.y + auy * 6 - aux * 5); ctx.stroke();
          }
          if (it.a.label) {
            ctx.font = '600 12px ' + mono; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = ink;
            ctx.fillText(tl(it.a.label), (A0.x + A1.x) / 2 - auy * 13, (A0.y + A1.y) / 2 + aux * 13);
          }
        } else if (it.type === 'atom') {
          var a = atoms[it.i], p = P[it.i], col = CPK[a.el] || DEFAULT_COL;
          var g = ctx.createRadialGradient(p.x - p.r * 0.35, p.y - p.r * 0.4, p.r * 0.1, p.x, p.y, p.r);
          g.addColorStop(0, shade(col, 0.45)); g.addColorStop(0.6, col); g.addColorStop(1, shade(col, -0.28));
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
          ctx.lineWidth = 1.25; ctx.strokeStyle = ink; ctx.stroke();
          if (it.i === picked || (spec.selected != null && it.i === spec.selected)) { ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2); ctx.lineWidth = 2.5; ctx.strokeStyle = accent; ctx.stroke(); }
          if (spec.labels !== false && p.r > 9) {
            ctx.fillStyle = lum(col) > 0.6 ? '#101826' : '#FFFFFF';
            ctx.font = '700 ' + Math.round(Math.min(16, p.r * 0.95)) + 'px ' + font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(a.label || a.el, p.x, p.y + 0.5);
          }
        } else {
          var q = it.q, f = it.from, ang = Math.atan2(q.y - f.y, q.x - f.x), rr = scale * 0.3 * q.k, flat = Math.max(0.45, Math.min(1, Math.hypot(q.x - f.x, q.y - f.y) / (scale * 0.72)));
          ctx.save(); ctx.translate(q.x, q.y); ctx.rotate(ang);
          ctx.beginPath(); ctx.ellipse(0, 0, rr * (0.75 + 0.5 * flat), rr * 0.95, 0, 0, Math.PI * 2);
          ctx.globalAlpha = 0.85; ctx.fillStyle = soft; ctx.fill(); ctx.globalAlpha = 1;
          ctx.setLineDash([4, 3]); ctx.strokeStyle = accent; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([]);
          ctx.fillStyle = ink;
          [-1, 1].forEach(function (s) { ctx.beginPath(); ctx.arc(0, s * rr * 0.32, Math.max(2, rr * 0.13), 0, Math.PI * 2); ctx.fill(); });
          ctx.restore();
        }
      });
      if (spec.angle && atoms[spec.angle[0]] && atoms[spec.angle[1]] && atoms[spec.angle[2]]) {
        var a0 = atoms[spec.angle[0]], v = atoms[spec.angle[1]], a2 = atoms[spec.angle[2]];
        var u1 = [a0.x - v.x, a0.y - v.y, a0.z - v.z], u2 = [a2.x - v.x, a2.y - v.y, a2.z - v.z];
        var m1 = Math.hypot(u1[0], u1[1], u1[2]), m2 = Math.hypot(u2[0], u2[1], u2[2]);
        var cosv = (u1[0] * u2[0] + u1[1] * u2[1] + u1[2] * u2[2]) / (m1 * m2), degv = Math.acos(Math.max(-1, Math.min(1, cosv))) * 180 / Math.PI;
        var text = spec.angleText || ((Math.round(degv * 10) / 10) + '°');
        var pv = P[spec.angle[1]], p0 = P[spec.angle[0]], p2 = P[spec.angle[2]];
        // arc between the two bonds, on screen
        var s1 = Math.atan2(p0.y - pv.y, p0.x - pv.x), s2 = Math.atan2(p2.y - pv.y, p2.x - pv.x), dlt = s2 - s1;
        while (dlt > Math.PI) dlt -= 2 * Math.PI; while (dlt < -Math.PI) dlt += 2 * Math.PI;
        var ar = Math.min(Math.hypot(p0.x - pv.x, p0.y - pv.y), Math.hypot(p2.x - pv.x, p2.y - pv.y)) * 0.55;
        if (ar > 12) { ctx.beginPath(); ctx.arc(pv.x, pv.y, ar, s1, s1 + dlt, dlt < 0); ctx.strokeStyle = accent; ctx.lineWidth = 1.5; ctx.stroke(); }
        var midA = s1 + dlt / 2, tx = pv.x + Math.cos(midA) * (ar + 18), ty = pv.y + Math.sin(midA) * (ar + 14);
        ctx.font = '600 13px ' + mono; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        var tw = ctx.measureText(text).width + 10;
        tx = Math.max(tw / 2 + 2, Math.min(W - tw / 2 - 2, tx)); ty = Math.max(12, Math.min(H - 12, ty));
        ctx.fillStyle = surface; ctx.fillRect(tx - tw / 2, ty - 10, tw, 20);
        ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.strokeRect(tx - tw / 2 + 0.5, ty - 9.5, tw - 1, 19);
        ctx.fillStyle = ink; ctx.fillText(text, tx, ty + 0.5);
      }
    }

    function frame() { if (!spinning) return; if (!alive()) return destroy(); yaw += 0.012; draw(); raf = window.requestAnimationFrame(frame); }
    function setSpin(on) {
      spinning = !!on; window.cancelAnimationFrame(raf);
      if (spinning && visible && !doc.hidden) raf = window.requestAnimationFrame(frame);
      if (spinBtn) { spinBtn.setAttribute('aria-pressed', String(spinning)); S1.i18n.render(spinBtn); }
    }
    var drag = null;
    var lastP = [], picked = -1, downAt = null;
    function pick(i, how) {
      if (!spec.onAtom || i < 0 || !spec.atoms[i]) return;
      picked = i; draw();
      var a = spec.atoms[i];
      if (status) S1.i18n.live(status, function () { return t('Selected: {name}, atom {n} of {total}', { name: a.label || a.el, n: i + 1, total: spec.atoms.length }); });
      spec.onAtom(i, a, how);
    }
    canvas.addEventListener('pointerdown', function (e) { downAt = { x: e.clientX, y: e.clientY }; drag = { x: e.clientX, y: e.clientY }; try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } canvas.style.cursor = 'grabbing'; if (spinning) setSpin(false); });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      yaw += (e.clientX - drag.x) * 0.01; pitch = S1.util.clamp(pitch + (e.clientY - drag.y) * 0.01, -1.5, 1.5);
      drag = { x: e.clientX, y: e.clientY }; draw();
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) { canvas.addEventListener(ev, function (e) {
      // a press and release without movement is a click: choose the nearest atom in front
      if (ev === 'pointerup' && spec.onAtom && downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) < 5) {
        var r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, hit = -1, hz = -Infinity;
        lastP.forEach(function (p, i) { if (Math.hypot(p.x - x, p.y - y) <= p.r + 3 && p.z > hz) { hz = p.z; hit = i; } });
        if (hit > -1) pick(hit, 'pointer');
      }
      downAt = null; drag = null; canvas.style.cursor = spec.onAtom ? 'pointer' : 'grab';
    }); });
    canvas.addEventListener('keydown', function (e) {
      var step = 0.15, used = true;
      if (e.key === 'ArrowLeft') yaw -= step; else if (e.key === 'ArrowRight') yaw += step;
      else if (e.key === 'ArrowUp') pitch = S1.util.clamp(pitch - step, -1.5, 1.5); else if (e.key === 'ArrowDown') pitch = S1.util.clamp(pitch + step, -1.5, 1.5);
      else if (e.key === 'Home') { yaw = yaw0; pitch = pitch0; }
      // with clickable atoms: [ and ] (or , and .) move the highlight, Enter or Space chooses
      else if (spec.onAtom && (e.key === ']' || e.key === '.')) { picked = (picked + 1) % spec.atoms.length; }
      else if (spec.onAtom && (e.key === '[' || e.key === ',')) { picked = (picked - 1 + spec.atoms.length) % spec.atoms.length; }
      else if (spec.onAtom && (e.key === 'Enter' || e.key === ' ')) { pick(picked < 0 ? 0 : picked, 'keyboard'); }
      else used = false;
      if (used) { e.preventDefault(); if (spinning) setSpin(false); draw(); }
    });

    var spinBtn = null;
    if (spec.controls !== false) {
      var bar = S1.util.el('div', { class: 'mol__bar btn-row' });
      spinBtn = S1.util.el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': 'false' });
      S1.i18n.live(spinBtn, function () { return spinning ? t('Stop turning') : t('Turn slowly'); });
      spinBtn.addEventListener('click', function () { setSpin(!spinning); });
      var resetBtn = S1.util.el('button', { class: 'btn btn--small btn--quiet', type: 'button', t: 'Reset view' });
      resetBtn.addEventListener('click', function () { setSpin(false); yaw = yaw0; pitch = pitch0; draw(); });
      bar.appendChild(spinBtn); bar.appendChild(resetBtn);
      bar.appendChild(S1.util.el('span', { class: 'mol__hint', t: 'Drag to rotate' }));
      el.appendChild(bar);
    }
    size(); draw();
    var lastW = el.clientWidth;
    var onResize = function () { if (el.clientWidth === lastW) return; lastW = el.clientWidth; size(); draw(); };
    // Everything registered outside the element is undone by destroy(). The viewer also destroys itself the
    // first time an event arrives after its canvas has left the page (for example when a widget restarts).
    var undo = [], dead = false;
    function alive() { return !dead && doc.documentElement.contains(canvas); }
    function destroy() { if (dead) return; dead = true; spinning = false; window.cancelAnimationFrame(raf); undo.forEach(function (f) { f(); }); undo = []; }
    function listen(target, type, fn) { var h = function (e) { if (!alive()) return destroy(); fn(e); }; target.addEventListener(type, h); undo.push(function () { target.removeEventListener(type, h); }); }
    if (window.ResizeObserver) { var ro = new ResizeObserver(onResize); ro.observe(el); undo.push(function () { ro.disconnect(); }); } else listen(window, 'resize', onResize);
    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (en) { visible = en[en.length - 1].isIntersecting; if (spinning) { window.cancelAnimationFrame(raf); if (visible) raf = window.requestAnimationFrame(frame); } });
      io.observe(el); undo.push(function () { io.disconnect(); });
    }
    listen(doc, 'visibilitychange', function () { if (spinning) { window.cancelAnimationFrame(raf); if (!doc.hidden && visible) raf = window.requestAnimationFrame(frame); } });
    listen(doc, 's1:themechange', draw);
    listen(doc, 's1:langchange', draw);
    if (spec.autoRotate && !reduced) setSpin(true);

    return {
      el: el, canvas: canvas,
      setSpec: function (s) { spec = s; S1.i18n.render(canvas); size(); draw(); },
      reset: function () { yaw = yaw0; pitch = pitch0; draw(); },
      rotate: function (dy, dp) { yaw += dy || 0; pitch = S1.util.clamp(pitch + (dp || 0), -1.5, 1.5); draw(); },
      spin: setSpin, redraw: draw,
      /** Stop turning and remove every listener and observer. Called automatically once the canvas has left the page. */
      destroy: destroy
    };
  }

  /* ---------- Declarative figures: <span data-s1-mol="lewis" data-spec='{…}'> ------------- */
  var presets = (S1.mol && S1.mol._presets) || {};      // core.js keeps define() calls made before this file loads
  /** S1.mol.define('nh3-lewis', {kind: 'lewis', central: 'N', outer: ['H','H','H'], centralLone: 1, label: '…'}) */
  function define(name, spec) { presets[name] = spec; }
  function drawFigures(root) {
    if (!root.querySelectorAll) return;
    Array.prototype.forEach.call(root.querySelectorAll('[data-s1-mol]:not([data-s1-ready]), [data-s1-mol-ref]:not([data-s1-ready])'), function (n) {
      n.setAttribute('data-s1-ready', '');
      var ref = n.getAttribute('data-s1-mol-ref'), spec = ref ? presets[ref] : null, raw = n.getAttribute('data-spec');
      try { if (raw) spec = JSON.parse(raw); } catch (e) { spec = null; if (window.console) console.warn('[S1.mol] data-spec is not valid JSON:', raw); }
      if (!spec) { if (window.console && ref) console.warn('[S1.mol] no figure defined with the name "' + ref + '"'); return; }
      var kind = n.getAttribute('data-s1-mol') || spec.kind || 'lewis';
      if (n.tagName === 'SPAN') n.classList.add('mol--inline');
      if (n.getAttribute('data-label') && !spec.label) spec = Object.assign({}, spec, { label: n.getAttribute('data-label') });
      try {
        if (kind === 'structural') structural(n, spec); else if (kind === 'skeletal') skeletal(n, spec);
        else if (kind === 'viewer3d' || kind === '3d') viewer3d(n, spec.domains ? vsepr(spec) : spec); else lewis(n, spec);
      } catch (err) { if (window.console) console.warn('[S1.mol] could not draw figure', err); }
    });
  }
  if (S1.onFormat) S1.onFormat(drawFigures); else S1.onEnhance(drawFigures);

  S1.mol = {
    define: define, drawFigures: drawFigures,
    lewis: lewis, structural: structural, skeletal: skeletal, viewer3d: viewer3d, vsepr: vsepr,
    centralSpec: centralSpec, chainSpec: chainSpec, zigzag: zigzag,
    SHAPES: SHAPES, CPK: CPK
  };
})();
