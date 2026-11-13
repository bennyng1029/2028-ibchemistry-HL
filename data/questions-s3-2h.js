/* ==========================================================================
   Structure Lab — question bank for Structure 3.2 Functional groups: Additional HL
   (understandings 3.2.7–3.2.12: stereoisomers, mass spectrometry, infrared,
   1H NMR, splitting patterns, combined analysis).  Every question is AHL.
   Schema: docs/AUTHORING.md section 4.  All questions are original.

   Data sources
   - IR ranges, 1H NMR shift ranges and "mass spectral fragments lost": IB data
     booklet (first assessment 2025), sections 20, 21 and 22, typed from the PDF.
   - Mass spectra: main peaks of real compounds from the NIST Chemistry WebBook
     (electron ionization), rounded to whole percentages; only selected peaks shown.
   - 1H NMR shifts: topic policy (same as the page and the widgets) - every shift
     given as data lies inside its data booklet range, as IB exam data do.  Where a
     measured value lies a little outside (e.g. CH3 of an ethyl group at 1.1-1.3 ppm),
     the question uses the booklet value and the solution says so in one line.
   - IR wavenumbers of named compounds: typical literature values (about 5 cm-1),
     all inside the booklet ranges.  Spectra are simplified sketches.
   - Ar values: C 12.01, H 1.01, O 16.00 (data booklet).
   Structures and spectra are inline SVG drawn by the local helpers below
   (currentColor, so they follow the light and dark themes).  practice.html does
   not load mol.js or chart.js, so the shared helpers cannot be used here.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  /* ---------- small local helpers (no globals) ----------------------------- */

  // f('CH3CH=CHCH3') → formula with subscripts; a trailing + or − becomes a superscript charge.
  function f(s) {
    var m = /([+−])$/.exec(s), charge = '';
    if (m) { charge = '<sup>' + m[1] + '</sup>'; s = s.slice(0, -1); }
    return '<span class="chem">' + s.replace(/([A-Za-z\)])(\d+)/g, '$1<sub>$2</sub>') + charge + '<span></span></span>';
  }
  function math(lines) {
    return lines.map(function (l) { return '<div class="worked__math">' + l + '</div>'; }).join('');
  }
  function table(caption, head, rows) {
    var h = '<div class="table-scroll" tabindex="0"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (c) { h += '<th scope="col">' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c, i) { h += i ? '<td>' + c + '</td>' : '<th scope="row">' + c + '</th>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  /* Data booklet section 20 (infrared), rows used in this bank. */
  var IR = {
    CO:   ['C–O', 'alcohols, esters, ethers', '1050–1410', 'strong'],
    CC:   ['C=C', 'alkenes', '1620–1680', 'medium-weak; multiple bands'],
    CdO:  ['C=O', 'aldehydes, ketones, carboxylic acids and esters', '1700–1750', 'strong'],
    OHa:  ['O–H', 'carboxylic acids (with hydrogen bonding)', '2500–3000', 'strong, very broad'],
    CH:   ['C–H', 'alkanes, alkenes, arenes', '2850–3090', 'strong'],
    OH:   ['O–H', 'alcohols and phenols (with hydrogen bonding)', '3200–3600', 'strong, broad']
  };
  function irTable(keys) {
    return table('From the data booklet (section 20): infrared absorption ranges',
      ['Bond', 'Types of organic molecules', 'Wavenumber / cm<sup>−1</sup>', 'Intensity'],
      keys.map(function (k) { return IR[k]; }));
  }
  var IRALL = ['CO', 'CC', 'CdO', 'OHa', 'CH', 'OH'];

  /* Data booklet section 21 (1H NMR), rows used in this bank. The H in question is in bold. */
  var NMR = {
    CH3:   ['–C<b>H</b><sub>3</sub>', '0.9–1.0'],
    CH2R:  ['–C<b>H</b><sub>2</sub>–R', '1.3–1.4'],
    CHR2:  ['–C<b>H</b>R<sub>2</sub>', '1.5'],
    ester: ['RO–C(=O)–C<b>H</b><sub>2</sub>–', '2.0–2.5'],
    keto:  ['R–C(=O)–C<b>H</b><sub>2</sub>–', '2.2–2.7'],
    hal:   ['–C<b>H</b><sub>2</sub>–Hal', '3.5–4.4'],
    ether: ['R–O–C<b>H</b><sub>2</sub>–', '3.3–3.7'],
    och2:  ['R–C(=O)–O–C<b>H</b><sub>2</sub>–', '3.7–4.8'],
    acid:  ['R–C(=O)–O–<b>H</b>', '9.0–13.0'],
    roh:   ['R–O–<b>H</b>', '1.0–6.0'],
    alkene: ['–CH=C<b>H</b><sub>2</sub>', '4.5–6.0'],
    ald:   ['R–C(=O)–<b>H</b>', '9.4–10.0']
  };
  function nmrTable(keys) {
    return table('From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts',
      ['Type of proton', 'Chemical shift / ppm'],
      keys.map(function (k) { return ['<span class="chem">' + NMR[k][0] + '</span>', NMR[k][1]]; }));
  }
  var BOOKLET22 = table('From the data booklet (section 22): mass spectral fragments lost',
    ['Mass lost', 'Possible neutral fragment lost'],
    [['15', '•CH<sub>3</sub>'], ['17', '•OH'], ['18', 'H<sub>2</sub>O'], ['28', 'CH<sub>2</sub>=CH<sub>2</sub> or CO'],
     ['29', '•CH<sub>2</sub>CH<sub>3</sub> or •CHO'], ['31', '•OCH<sub>3</sub>'], ['45', '•COOH']]);

  /* ---------- structure drawings (inline SVG) -------------------------------
     mol(atoms, bonds, label, opts)
       atoms: [x, y, text, anchor]  x, y in bond lengths (y grows downwards);
              text '' or missing = unlabelled carbon vertex (skeletal);
              anchor 'm' (centred, default), 's' (first letter sits on the atom), 'e' (last letter sits on the atom)
       bonds: [a, b, type]  type 1, 2, 'w' (solid wedge, narrow end at a), 'h' (hashed wedge, narrow end at a)   */
  function svgText(x, y, s, anchor) {
    var parts = s.replace(/(\d+)/g, '|$1|').split('|'), out = '', down = false;
    parts.forEach(function (p) {
      if (!p) return;
      if (/^\d+$/.test(p)) { out += '<tspan dy="' + (down ? 0 : 4) + '" font-size="10">' + p + '</tspan>'; down = true; }
      else { out += '<tspan dy="' + (down ? -4 : 0) + '">' + p + '</tspan>'; down = false; }
    });
    return '<text x="' + x.toFixed(1) + '" y="' + (y + 5).toFixed(1) + '" text-anchor="' + (anchor === 's' ? 'start' : anchor === 'e' ? 'end' : 'middle') + '" font-size="14" fill="currentColor">' + out + '</text>';
  }
  function textWidth(s) { var w = 0; s.split('').forEach(function (c) { w += /\d/.test(c) ? 6 : (/[a-z]/.test(c) ? 7 : 10); }); return w; }
  function mol(atoms, bonds, label, opts) {
    opts = opts || {};
    var S = opts.s || 30, PAD = 6, x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9, body = '';
    var P = atoms.map(function (a) {
      var p = { x: a[0] * S, y: a[1] * S, t: a[2] || '', an: a[3] || 'm' };
      var w = p.t ? textWidth(p.t) : 0, l, r;
      if (p.an === 's') { l = p.x - 6; r = p.x - 6 + w; } else if (p.an === 'e') { l = p.x + 6 - w; r = p.x + 6; } else { l = p.x - w / 2; r = p.x + w / 2; }
      x0 = Math.min(x0, l); x1 = Math.max(x1, r); y0 = Math.min(y0, p.y - (p.t ? 9 : 0)); y1 = Math.max(y1, p.y + (p.t ? 10 : 0));
      p.tx = p.an === 's' ? p.x - 6 : p.an === 'e' ? p.x + 6 : p.x;
      p.trim = p.t ? (p.an === 'm' && p.t.length > 1 ? 12 : 9) : 0;
      return p;
    });
    bonds.forEach(function (b) {
      var a = P[b[0]], c = P[b[1]], dx = c.x - a.x, dy = c.y - a.y, L = Math.sqrt(dx * dx + dy * dy), ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
      var ax = a.x + ux * a.trim, ay = a.y + uy * a.trim, cx = c.x - ux * c.trim, cy = c.y - uy * c.trim, type = b[2] || 1, i;
      function line(o) { return '<line x1="' + (ax + nx * o).toFixed(1) + '" y1="' + (ay + ny * o).toFixed(1) + '" x2="' + (cx + nx * o).toFixed(1) + '" y2="' + (cy + ny * o).toFixed(1) + '" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'; }
      if (type === 2) body += line(-2.3) + line(2.3);
      else if (type === 'w') body += '<polygon points="' + ax.toFixed(1) + ',' + ay.toFixed(1) + ' ' + (cx + nx * 3.6).toFixed(1) + ',' + (cy + ny * 3.6).toFixed(1) + ' ' + (cx - nx * 3.6).toFixed(1) + ',' + (cy - ny * 3.6).toFixed(1) + '" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>';
      else if (type === 'h') {
        for (i = 1; i <= 6; i++) {
          var k = i / 6, mx = ax + (cx - ax) * k, my = ay + (cy - ay) * k, hw = 0.6 + 3.2 * k;
          body += '<line x1="' + (mx + nx * hw).toFixed(1) + '" y1="' + (my + ny * hw).toFixed(1) + '" x2="' + (mx - nx * hw).toFixed(1) + '" y2="' + (my - ny * hw).toFixed(1) + '" stroke="currentColor" stroke-width="1.3"/>';
        }
      } else body += line(0);
    });
    P.forEach(function (p) { if (p.t) body += svgText(p.tx, p.y, p.t, p.an); });
    var w = Math.ceil(x1 - x0 + 2 * PAD), h = Math.ceil(y1 - y0 + 2 * PAD);
    return '<svg class="q-fig" viewBox="' + (x0 - PAD).toFixed(1) + ' ' + (y0 - PAD).toFixed(1) + ' ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" style="max-width:100%;height:auto" role="img" aria-label="' + label + '">' + body + '</svg>';
  }
  function fig(svg) { return '<p>' + svg + '</p>'; }

  // 1,2-dichloroethene, cis (both Cl on the upper side) or trans.
  function dce(cis, label) {
    return mol([[0, 0, 'C'], [1.15, 0, 'C'], [-0.62, -0.88, 'Cl'], [-0.62, 0.88, 'H'], [1.77, -0.88, cis ? 'Cl' : 'H'], [1.77, 0.88, cis ? 'H' : 'Cl']],
      [[0, 1, 2], [0, 2], [0, 3], [1, 4], [1, 5]], label);
  }
  // Small rings with two Cl atoms; k = 'ww' cis, 'wh' trans, 'gem' both on one carbon, 'sq' trans on a four-membered ring.
  function ring(k, label) {
    if (k === 'sq') return mol([[0, 0], [1, 0], [1, -1], [0, -1], [-0.65, 0.65, 'Cl'], [1.65, 0.65, 'Cl']],
      [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4, 'w'], [1, 5, 'h']], label);
    if (k === 'gem') return mol([[0, 0], [1, 0], [0.5, -0.87], [-0.95, 0.15, 'Cl'], [-0.3, 0.95, 'Cl']],
      [[0, 1], [1, 2], [2, 0], [0, 3, 'w'], [0, 4, 'h']], label);
    return mol([[0, 0], [1, 0], [0.5, -0.87], [-0.6, 0.8, 'Cl'], [1.6, 0.8, 'Cl']],
      [[0, 1], [1, 2], [2, 0], [0, 3, 'w'], [1, 4, k === 'ww' ? 'w' : 'h']], label);
  }
  /* Tetrahedral carbon. g = [up, side (in the plane), wedge, hash]; flip = true draws the mirror-image layout.
     Normal layout: in-plane bonds point up and to the lower left; the wedge and the hashed bond are on the right. */
  var REV = { OH: 'HO', CH3: 'H3C', COOH: 'HOOC' };
  function tetra(g, flip) {
    var sx = flip ? -1 : 1, left = flip ? 'right' : 'left', right = flip ? 'left' : 'right';
    function lab(s, onLeft) { return onLeft && REV[s] ? REV[s] : s; }
    function an(s, onLeft) { return s.length < 2 ? 'm' : (onLeft ? 'e' : 's'); }
    var label = 'Carbon atom with four bonds: ' + g[0] + ' up in the plane, ' + g[1] + ' to the lower ' + left + ' in the plane, ' +
      g[2] + ' on a solid wedge to the lower ' + right + ', ' + g[3] + ' on a hashed wedge to the ' + right;
    return mol([[0, 0, 'C'], [0, -1.05, g[0], 'm'], [-0.92 * sx, 0.5, lab(g[1], !flip), an(g[1], !flip)],
      [0.42 * sx, 1.02, lab(g[2], flip), an(g[2], flip)], [1.0 * sx, 0.3, lab(g[3], flip), an(g[3], flip)]],
      [[0, 1], [0, 2], [0, 3, 'w'], [0, 4, 'h']], label);
  }

  /* ---------- spectra sketches (inline SVG) --------------------------------- */
  // Stick mass spectrum. peaks = [[m/z, relative abundance]], xmax = right-hand end of the m/z axis.
  function msSvg(peaks, xmax, label) {
    var W = 300, H = 178, L = 34, R = 10, T = 18, B = 34, pw = W - L - R, ph = H - T - B, s = '', i;
    function X(m) { return L + pw * m / xmax; }
    function Y(a) { return T + ph * (1 - a / 100); }
    s += '<path d="M' + L + ' ' + T + 'V' + (T + ph) + 'H' + (W - R) + '" fill="none" stroke="currentColor" stroke-width="1.2"/>';
    for (i = 0; i <= xmax; i += 10) {
      s += '<line x1="' + X(i) + '" y1="' + (T + ph) + '" x2="' + X(i) + '" y2="' + (T + ph + (i % 20 ? 3 : 5)) + '" stroke="currentColor" stroke-width="1"/>';
      if (i % 20 === 0) s += '<text x="' + X(i) + '" y="' + (T + ph + 17) + '" text-anchor="middle" font-size="11" fill="currentColor">' + i + '</text>';
    }
    [0, 50, 100].forEach(function (a) {
      s += '<line x1="' + (L - 4) + '" y1="' + Y(a) + '" x2="' + L + '" y2="' + Y(a) + '" stroke="currentColor" stroke-width="1"/><text x="' + (L - 7) + '" y="' + (Y(a) + 4) + '" text-anchor="end" font-size="11" fill="currentColor">' + a + '</text>';
    });
    s += '<text x="' + (L + pw / 2) + '" y="' + (H - 3) + '" text-anchor="middle" font-size="11" fill="currentColor">m/z</text>';
    s += '<text x="' + (L + 6) + '" y="11" font-size="11" fill="currentColor">relative abundance / %</text>';
    peaks.forEach(function (p) {
      s += '<line x1="' + X(p[0]).toFixed(1) + '" y1="' + (T + ph) + '" x2="' + X(p[0]).toFixed(1) + '" y2="' + Y(p[1]).toFixed(1) + '" stroke="currentColor" stroke-width="2.4"/>';
      s += '<text x="' + X(p[0]).toFixed(1) + '" y="' + (Y(p[1]) - 4).toFixed(1) + '" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">' + p[0] + '</text>';
    });
    return '<svg class="q-fig" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" style="max-width:100%;height:auto" role="img" aria-label="' + label + '">' + s + '</svg>';
  }
  // 1H NMR sketch. signals = [{d: shift, h: relative area, n: number of lines}], max = left-hand end of the axis in ppm.
  function nmrSvg(signals, max, label) {
    var W = 300, H = 150, L = 12, R = 12, T = 22, B = 34, pw = W - L - R, ph = H - T - B, s = '', i;
    var PAS = { 1: [1], 2: [1, 1], 3: [1, 2, 1], 4: [1, 3, 3, 1] }, big = 0;
    function X(d) { return L + pw * (max - d) / max; }
    signals.forEach(function (g) { var p = PAS[g.n], m = Math.max.apply(null, p), sum = p.reduce(function (a, b) { return a + b; }, 0); g.top = g.h * m / sum; big = Math.max(big, g.top); });
    s += '<path d="M' + L + ' ' + (T + ph) + 'H' + (W - R) + '" fill="none" stroke="currentColor" stroke-width="1.2"/>';
    for (i = 0; i <= max; i++) {
      s += '<line x1="' + X(i).toFixed(1) + '" y1="' + (T + ph) + '" x2="' + X(i).toFixed(1) + '" y2="' + (T + ph + 4) + '" stroke="currentColor" stroke-width="1"/>';
      if (max <= 6 || i % 2 === 0) s += '<text x="' + X(i).toFixed(1) + '" y="' + (T + ph + 16) + '" text-anchor="middle" font-size="11" fill="currentColor">' + i + '</text>';
    }
    s += '<text x="' + (L + pw / 2) + '" y="' + (H - 3) + '" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text>';
    signals.forEach(function (g) {
      var p = PAS[g.n], gap = 5, x = X(g.d) - gap * (p.length - 1) / 2, sum = p.reduce(function (a, b) { return a + b; }, 0), hi = 0;
      p.forEach(function (v, j) {
        var hgt = (ph - 6) * (g.h * v / sum) / big; hi = Math.max(hi, hgt);
        s += '<line x1="' + (x + j * gap).toFixed(1) + '" y1="' + (T + ph) + '" x2="' + (x + j * gap).toFixed(1) + '" y2="' + (T + ph - hgt).toFixed(1) + '" stroke="currentColor" stroke-width="1.8"/>';
      });
      s += '<text x="' + X(g.d).toFixed(1) + '" y="' + (T + ph - hi - 5).toFixed(1) + '" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">' + g.h + '</text>';
    });
    return '<svg class="q-fig" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" style="max-width:100%;height:auto" role="img" aria-label="' + label + '">' + s + '</svg>';
  }

  var VARY = ' Real spectra vary a little: the booklet says its values can change with the solvent and conditions.';

  S1.questions.register('s3-2h', [

  /* ======================= Structure 3.2.7 — stereoisomers ================== */
  {
    id: 's3-2h-q001', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>Which compound can exist as <i>cis</i> and <i>trans</i> isomers?</p>',
    options: [f('CH2=CHCH2CH3'), f('CH3CH=CHCH3'), f('(CH3)2C=CH2'), f('CH3CH=CH2')],
    answer: 1,
    misconception: {
      0: 'In but-1-ene the first carbon of the double bond holds two hydrogen atoms. Swapping two identical atoms gives the same molecule.',
      2: 'In 2-methylpropene one carbon of the double bond holds two methyl groups and the other holds two hydrogen atoms. Neither carbon has two different groups.',
      3: 'In propene the end carbon of the double bond holds two hydrogen atoms. Both carbons must hold two different groups.'
    },
    hints: ['Look at each carbon atom of the C=C bond in turn.', 'Each of the two carbon atoms must be bonded to two different atoms or groups.'],
    solution: '<p>For <i>cis–trans</i> isomers you need restricted rotation (the C=C bond) and two different groups on <strong>each</strong> carbon of the double bond.</p><p>In but-2-ene, ' + f('CH3CH=CHCH3') + ', each carbon of the double bond holds one H and one ' + f('CH3') + '. The two methyl groups can be on the same side (<i>cis</i>) or on opposite sides (<i>trans</i>).</p>'
  },
  {
    id: 's3-2h-q002', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>X and Y are two drawings of 1,2-dichloroethene.</p>' +
      '<p><strong>X</strong></p>' + fig(dce(true, 'Molecule X: two carbon atoms joined by a double bond. Both chlorine atoms are drawn above the double bond and both hydrogen atoms below it.')) +
      '<p><strong>Y</strong></p>' + fig(dce(false, 'Molecule Y: two carbon atoms joined by a double bond. One chlorine atom is drawn above the double bond on the left carbon and the other below it on the right carbon.')) +
      '<p>Which statement is correct?</p>',
    options: ['X is the <i>cis</i> isomer and Y is the <i>trans</i> isomer.', 'X is the <i>trans</i> isomer and Y is the <i>cis</i> isomer.', 'X and Y are the same molecule, because one end can rotate about the C=C bond.', 'X and Y are structural isomers.'],
    answer: 0,
    misconception: {
      1: 'The labels are the wrong way round. <i>Cis</i> means "on the same side". In X both chlorine atoms are on the same side of the double bond.',
      2: 'Rotation about a C=C double bond is restricted, because it would break the π bond. So X cannot turn into Y at room temperature.',
      3: 'Structural isomers have different connectivity. In X and in Y each carbon is bonded to one H, one Cl and the other carbon. Only the arrangement in space differs, so they are stereoisomers.'
    },
    hints: ['Find the two chlorine atoms in each drawing. Are they on the same side of the double bond or on opposite sides?', '<i>Cis</i> = same side. <i>Trans</i> = opposite sides.'],
    solution: '<p>In X both Cl atoms are on the same side of the C=C bond: this is the <i>cis</i> isomer. In Y they are on opposite sides: this is the <i>trans</i> isomer.</p><p>X and Y have the same connectivity but a different arrangement in space. They are stereoisomers, and they cannot interconvert because rotation about the double bond is restricted.</p>'
  },
  {
    id: 's3-2h-q003', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>Which of these compounds can exist as <i>cis</i> and <i>trans</i> isomers? Select <strong>all</strong> that apply.</p>',
    options: [
      '1,2-dimethylcyclopropane (one methyl group on each of two ring carbons)',
      '1,1-dimethylcyclobutane (both methyl groups on the same ring carbon)',
      'pent-2-ene, ' + f('CH3CH=CHCH2CH3'),
      '2-methylbut-2-ene, ' + f('CH3CH=C(CH3)2'),
      '1,3-dimethylcyclobutane (methyl groups on opposite corners of the ring)'
    ],
    answer: [0, 2, 4],
    misconception: {
      1: 'In 1,1-dimethylcyclobutane both methyl groups are on the same carbon. One is above the ring and one below it in every case, so there is only one arrangement.',
      3: 'In 2-methylbut-2-ene one carbon of the double bond holds two methyl groups. Swapping two identical groups gives the same molecule.'
    },
    hints: ['A ring stops rotation in the same way as a double bond.', 'In a ring you need two different ring carbons that each hold a substituent and a hydrogen atom. In an alkene each carbon of C=C needs two different groups.'],
    solution: '<p>Two things are needed: restricted rotation (a C=C bond or a ring) and two different groups on each of two carbon atoms.</p><ul><li>1,2-dimethylcyclopropane: yes. The two methyl groups can be on the same face of the ring (<i>cis</i>) or on opposite faces (<i>trans</i>).</li><li>1,1-dimethylcyclobutane: no. Both groups are on one carbon.</li><li>pent-2-ene: yes. One carbon of C=C holds H and ' + f('CH3') + ', the other holds H and ' + f('CH2CH3') + '.</li><li>2-methylbut-2-ene: no. One carbon of C=C holds two ' + f('CH3') + ' groups.</li><li>1,3-dimethylcyclobutane: yes. The methyl groups are on two different ring carbons, so they can be on the same face or on opposite faces.</li></ul>'
  },
  {
    id: 's3-2h-q004', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.2.7',
    stem: '<p>But-2-ene, ' + f('CH3CH=CHCH3') + ', exists as <i>cis</i> and <i>trans</i> isomers. But-1-ene, ' + f('CH2=CHCH2CH3') + ', does not.</p><p>Explain both facts.</p>',
    answer: '<p>There is no free rotation about the C=C double bond (rotation is restricted). In but-2-ene each carbon atom of the double bond is bonded to two different groups (H and ' + f('CH3') + '), so the two ' + f('CH3') + ' groups can be fixed on the same side or on opposite sides. In but-1-ene one carbon of the double bond is bonded to two identical atoms (two H), so swapping them gives the same molecule.</p>',
    markscheme: [
      'Restricted rotation / no free rotation about the C=C (double) bond.',
      'But-2-ene: each carbon of the double bond has two different atoms or groups attached (H and CH₃). But-1-ene: one carbon of the double bond has two identical atoms attached (two H). Both needed for the mark.'
    ],
    hints: ['Start with rotation. What is special about a double bond?', 'Then compare what is attached to each carbon of the C=C in the two molecules.'],
    solution: '<p>The mark-earning phrases are "restricted rotation about the double bond" and "two different groups on each carbon of the double bond". Writing only "the groups are on different sides" describes the isomers but does not explain them.</p>'
  },
  {
    id: 's3-2h-q005', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>In these drawings a solid wedge is a bond coming towards you, in front of the ring. A hashed wedge is a bond going away from you, behind the ring.</p><p>Which drawing shows <i>trans</i>-1,2-dichlorocyclopropane?</p>',
    options: [
      ring('ww', 'Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. Both chlorine atoms are on solid wedge bonds.'),
      ring('gem', 'Three-membered carbon ring. One ring carbon carries two chlorine atoms, one on a solid wedge bond and one on a hashed wedge bond.'),
      ring('wh', 'Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond.'),
      ring('sq', 'Four-membered carbon ring. Two neighbouring ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond.')
    ],
    answer: 2,
    misconception: {
      0: 'Both chlorine atoms are on solid wedges, so both are in front of the ring, on the same face. This is the <i>cis</i> isomer.',
      1: 'Here both chlorine atoms are on the same carbon. This is 1,1-dichlorocyclopropane, a structural isomer that has no <i>cis–trans</i> isomers.',
      3: 'The chlorine atoms are <i>trans</i>, but count the ring carbons. This ring has four corners, so it is a cyclobutane.'
    },
    hints: ['Check the ring size first. Cyclopropane has three carbon atoms.', '<i>Trans</i> means the two chlorine atoms are on opposite faces of the ring: one in front, one behind.'],
    solution: '<p>1,2-dichlorocyclopropane has a three-membered ring with one Cl on each of two ring carbons. In the <i>trans</i> isomer one Cl is in front of the ring (solid wedge) and the other is behind it (hashed wedge).</p><p>The ring stops rotation about its carbon–carbon bonds, so the <i>cis</i> and <i>trans</i> forms are different molecules.</p>'
  },
  {
    id: 's3-2h-q006', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>What is a chiral carbon atom?</p>',
    options: ['A carbon atom bonded to four different atoms or groups', 'A carbon atom that is part of a C=C double bond', 'A carbon atom bonded to two different atoms or groups', 'A carbon atom that rotates plane-polarised light'],
    answer: 0,
    misconception: {
      1: 'A carbon in a C=C bond has only three atoms attached. It can be part of <i>cis–trans</i> isomerism, but it cannot be a chiral carbon.',
      2: 'Two different groups are not enough. If any two of the four groups are the same, the molecule and its mirror image can be superimposed.',
      3: 'This describes an effect, not the structure. Exam markschemes reject answers that only mention optical properties. State what is bonded to the carbon.'
    },
    hints: ['Think about how many bonds the carbon has and what is at the end of each one.'],
    solution: '<p>A chiral carbon is bonded to <strong>four different atoms or groups</strong>, arranged tetrahedrally. A molecule with one chiral carbon cannot be superimposed on its mirror image, so it exists as two enantiomers.</p>'
  },
  {
    id: 's3-2h-q007', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>Which molecule contains a chiral carbon atom?</p>',
    options: [f('CH3CH(OH)CH3'), f('CH3CH2CH2CH2OH'), f('CH3CH(OH)CH2CH3'), f('(CH3)3COH')],
    answer: 2,
    misconception: {
      0: 'In propan-2-ol the middle carbon holds H, OH and two ' + f('CH3') + ' groups. Two of its four groups are the same.',
      1: 'In butan-1-ol every carbon atom holds at least two hydrogen atoms, so no carbon has four different groups.',
      3: 'In 2-methylpropan-2-ol the central carbon holds OH and three identical ' + f('CH3') + ' groups.'
    },
    hints: ['A carbon in a ' + f('CH3') + ' or ' + f('CH2') + ' group can never be chiral. Look only at carbons with one H or no H.', 'Write down the four groups on that carbon. Are all four different?'],
    solution: '<p>In butan-2-ol, ' + f('CH3CH(OH)CH2CH3') + ', carbon 2 is bonded to four different groups: H, OH, ' + f('CH3') + ' and ' + f('CH2CH3') + '. It is a chiral carbon.</p>'
  },
  {
    id: 's3-2h-q008', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>The skeletal formula of a compound is shown.</p>' +
      fig(mol([[0, 0.5], [0.87, 0], [1.73, 0.5], [2.6, 0], [3.46, 0.5], [4.33, 0, 'OH', 's'], [0.87, -1, 'OH', 's'], [1.73, 1.5, 'OH', 's'], [2.6, -1, 'OH', 's']],
        [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 6], [2, 7], [3, 8]],
        'Skeletal formula: a zig-zag chain of five carbon atoms. Carbons 2, 3 and 4 each carry an OH group. Carbon 5 is joined to an OH group at the end of the chain. Carbon 1 is a methyl group.')) +
      '<p>How many chiral carbon atoms does one molecule contain?</p>',
    answer: 3, tolerance: { abs: 0 }, unit: '',
    hints: ['Number the five carbon atoms. Each corner and each line end is a carbon. Add the hydrogen atoms in your head.', 'The two end carbons are ' + f('CH3') + ' and ' + f('CH2OH') + '. Can a carbon with two or three H atoms be chiral?', 'For each of the three middle carbons, list the four groups: H, OH, the chain to the left, the chain to the right.'],
    solution: '<p>The molecule is ' + f('CH3CH(OH)CH(OH)CH(OH)CH2OH') + '.</p><ul><li>The ' + f('CH3') + ' carbon has three H atoms and the ' + f('CH2OH') + ' carbon has two H atoms: not chiral.</li><li>Each of the three CH(OH) carbons holds H, OH and two <strong>different</strong> chains. For the middle one, the chain on one side is ' + f('CH(OH)CH3') + ' and on the other side ' + f('CH(OH)CH2OH') + '.</li></ul><p>So there are <strong>3</strong> chiral carbon atoms.</p>'
  },
  {
    // Rewritten by the audit: the first version used menthol (a six-membered ring, "two ways round the ring"), which is harder than the guide needs.
    id: 's3-2h-q009', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>The skeletal formula of a compound is shown.</p>' +
      fig(mol([[0, 0.5], [0.87, 0], [1.73, 0.5], [2.6, 0], [3.46, 0.5], [0.87, -1, 'OH', 's'], [1.73, 1.5, 'OH', 's'], [2.6, -1]],
        [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [3, 7]],
        'Skeletal formula: a zig-zag chain of five carbon atoms. Carbon 2 and carbon 3 each carry an OH group. Carbon 4 carries a methyl branch, drawn as a plain line.')) +
      '<p>How many chiral carbon atoms does one molecule contain?</p>',
    answer: 2, tolerance: { abs: 0 }, unit: '',
    hints: ['Each corner and each line end is a carbon atom. Add the hydrogen atoms in your head, then rule out every ' + f('CH3') + ' carbon.', 'Three carbons have one H atom each: carbon 2, carbon 3 and carbon 4. List the four groups on each.', 'Look closely at carbon 4. What are the two groups at the right-hand end?'],
    solution: '<p>The molecule is ' + f('CH3CH(OH)CH(OH)CH(CH3)2') + '. Only carbons with one H atom need checking.</p><ul><li>Carbon 2: H, OH, ' + f('CH3') + ' and the rest of the chain. Four different groups. Chiral.</li><li>Carbon 3: H, OH, ' + f('CH(OH)CH3') + ' and ' + f('CH(CH3)2') + '. Four different groups. Chiral.</li><li>Carbon 4: H, the rest of the chain and <strong>two identical</strong> ' + f('CH3') + ' groups. Not chiral.</li></ul><p>There are <strong>2</strong> chiral carbon atoms. A carbon with one H atom is not always chiral: you must compare all four groups.</p>'
  },
  {
    id: 's3-2h-q010', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>Which molecule has <strong>no</strong> chiral carbon atom?</p>',
    options: [f('CH3CHClCH2CH3'), f('CH3CH(OH)COOH'), f('CH3CH2CHClCH2CH3'), f('CH3CH2CH(CH3)CH2CH2CH3')],
    answer: 2,
    misconception: {
      0: 'In 2-chlorobutane carbon 2 holds H, Cl, ' + f('CH3') + ' and ' + f('CH2CH3') + '. These are four different groups, so it is chiral.',
      1: 'In 2-hydroxypropanoic acid carbon 2 holds H, OH, ' + f('CH3') + ' and COOH. These are four different groups, so it is chiral.',
      3: 'In 3-methylhexane carbon 3 holds H, ' + f('CH3') + ', ' + f('CH2CH3') + ' and ' + f('CH2CH2CH3') + '. An ethyl group and a propyl group are different, so it is chiral.'
    },
    hints: ['Find the carbon with only one H in each molecule and list its four groups.', 'Compare the two carbon chains on each side of that carbon. Are they the same length?'],
    solution: '<p>In 3-chloropentane, ' + f('CH3CH2CHClCH2CH3') + ', carbon 3 holds H, Cl and <strong>two identical ethyl groups</strong>. It does not have four different groups, so the molecule has no chiral carbon. Each of the other three molecules has one carbon with four different groups.</p>'
  },
  {
    id: 's3-2h-q011', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>Butan-2-ol exists as a pair of enantiomers. Which statements about the two enantiomers are correct? Select <strong>all</strong> that apply.</p>',
    options: [
      'They have the same boiling point.',
      'Under the same conditions, they rotate plane-polarised light by the same angle in opposite directions.',
      'Their atoms are bonded together in a different order.',
      'They can behave differently with another chiral molecule, such as an enzyme.',
      'They are mirror images that can be superimposed on each other.'
    ],
    answer: [0, 1, 3],
    misconception: {
      2: 'A different bonding order (connectivity) would make them structural isomers. Enantiomers have the same connectivity and differ only in their arrangement in space.',
      4: 'Mirror images that can be superimposed are the same molecule. Enantiomers are <strong>non-superimposable</strong> mirror images.'
    },
    hints: ['Enantiomers are stereoisomers. What stays the same in all stereoisomers?', 'Physical properties such as boiling point are the same. Two things are different: the effect on plane-polarised light, and behaviour in a chiral environment.'],
    solution: '<p>Enantiomers are non-superimposable mirror images with the same connectivity.</p><ul><li>They have identical physical properties such as boiling point, melting point and density.</li><li>They are optically active: each rotates the plane of plane-polarised light by the same angle, but in opposite directions.</li><li>They behave in the same way with non-chiral reagents, but can behave differently in a chiral environment, such as the active site of an enzyme.</li></ul>'
  },
  {
    id: 's3-2h-q012', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.2.7',
    stem: '<p>State what is meant by a <strong>racemic mixture</strong>, and explain why a racemic mixture is not optically active.</p>',
    answer: '<p>A racemic mixture contains equal amounts of the two enantiomers of a chiral compound. One enantiomer rotates the plane of plane-polarised light clockwise and the other rotates it anticlockwise by the same angle, so the two rotations cancel and there is no overall rotation.</p>',
    markscheme: [
      'A mixture containing equal amounts (equimolar / 50:50) of the two enantiomers.',
      'The two enantiomers rotate (the plane of) plane-polarised light by equal amounts in opposite directions, so the rotations cancel / no net rotation.'
    ],
    hints: ['How much of each enantiomer does the mixture contain?', 'What does each enantiomer do to plane-polarised light, and what is the total effect?'],
    solution: '<p>Use the words "equal amounts" and "enantiomers" for the first mark. For the second mark say that the rotations are equal and opposite, so they cancel. "It contains both forms" is too vague to score.</p>'
  },
  {
    id: 's3-2h-q013', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>A polarimeter measures the angle through which a sample rotates the plane of plane-polarised light.</p><p>A solution of one enantiomer of a compound rotates the light by 13° clockwise. Two more solutions are tested in the same polarimeter tube, with the same total concentration.</p><p>What rotation is expected for each one?</p>',
    options: [
      'Other enantiomer: 13° anticlockwise. Racemic mixture: 0°.',
      'Other enantiomer: 13° clockwise. Racemic mixture: 0°.',
      'Other enantiomer: 13° anticlockwise. Racemic mixture: 26° clockwise.',
      'Other enantiomer: 0°. Racemic mixture: 13° anticlockwise.'
    ],
    answer: 0,
    misconception: {
      1: 'If both enantiomers rotated the light in the same direction, a polarimeter could not tell them apart. They rotate it in opposite directions.',
      2: 'The rotations of the two enantiomers do not add up in a racemic mixture. They are opposite, so they cancel.',
      3: 'Both enantiomers are optically active. It is the 50:50 mixture that shows no rotation.'
    },
    hints: ['Two enantiomers rotate plane-polarised light by the same angle. What about the direction?', 'A racemic mixture has equal amounts of both enantiomers. Add a clockwise and an equal anticlockwise rotation.'],
    solution: '<p>The other enantiomer rotates the light by the same angle in the opposite direction: 13° anticlockwise.</p><p>A racemic mixture contains equal amounts of both enantiomers. The clockwise and anticlockwise rotations cancel, so the reading is 0°. The mixture is optically inactive.</p>'
  },
  {
    id: 's3-2h-q014', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.7',
    stem: '<p>X is one enantiomer of bromochlorofluoromethane, CHBrClF. Plain lines are bonds in the plane of the screen. A solid wedge comes towards you. A hashed wedge goes away from you.</p><p><strong>X</strong></p>' +
      fig(tetra(['F', 'H', 'Cl', 'Br'], false)) +
      '<p>Which drawing shows the <strong>other</strong> enantiomer, the mirror image of X?</p>',
    options: [tetra(['H', 'Cl', 'F', 'Br'], false), tetra(['F', 'H', 'Br', 'Cl'], true), tetra(['F', 'H', 'Br', 'Cl'], false), tetra(['H', 'F', 'Br', 'Cl'], false)],
    answer: 2,
    misconception: {
      0: 'Br has not moved, and F, H and Cl have each moved one place round. This is X rotated about the C–Br bond, so it is the same molecule.',
      1: 'This is X turned half a turn about the vertical C–F bond. The H swings to the right, Cl goes to the back and Br comes to the front. It is still X.',
      3: 'Compared with X, two pairs of groups have been swapped (F with H, and Cl with Br). One swap gives the mirror image. A second swap brings back the original.'
    },
    hints: ['A useful rule: swapping any <strong>two</strong> groups on a chiral carbon gives the other enantiomer.', 'Swapping twice brings you back to the same molecule. Rotating the whole molecule never changes it.', 'For each drawing, count how many swaps turn X into it.'],
    solution: '<p>Compare each drawing with X (F up, H lower left, Cl on the wedge, Br on the hashed bond).</p><ul><li>The correct drawing keeps F and H in place and swaps Cl and Br. One swap of two groups gives the mirror image, so this is the other enantiomer.</li><li>Moving three groups round one place (F → H → Cl → F) is a rotation about the C–Br bond: same molecule.</li><li>The drawing with the wedges on the left is X turned half a turn about the C–F bond: same molecule.</li><li>Two swaps (F with H, and Cl with Br) bring back the same molecule.</li></ul><p>Building a model, real or on screen, is the surest way to check: the two enantiomers cannot be superimposed.</p>'
  },
  {
    id: 's3-2h-q015', level: 'ahl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.2.7',
    stem: '<p>2-hydroxypropanoic acid (lactic acid), ' + f('CH3CH(OH)COOH') + ', exists as two enantiomers.</p><p>On paper, identify the chiral carbon atom and draw stereochemical formulas of the two enantiomers. Then compare your drawing with the model answer.</p>',
    answer: '<p>The chiral carbon is carbon 2. It is bonded to four different groups: H, OH, ' + f('CH3') + ' and COOH.</p><p>The two enantiomers, drawn as mirror images:</p>' +
      '<p>' + tetra(['COOH', 'CH3', 'OH', 'H'], false) + ' &nbsp; ' + tetra(['COOH', 'CH3', 'OH', 'H'], true) + '</p>' +
      '<p>Any orientation is accepted if the four groups are arranged tetrahedrally and the second drawing is the mirror image of the first.</p>',
    markscheme: [
      'Chiral carbon identified: carbon 2 / the carbon bonded to H, OH, CH₃ and COOH (circled or starred on the drawing is fine).',
      'One enantiomer drawn in 3D: two bonds in the plane, one solid wedge, one hashed (dashed) wedge, with H, OH, CH₃ and COOH on the central carbon.',
      'The second structure drawn as the mirror image of the first (or with any two groups exchanged), also in 3D.'
    ],
    hints: ['Find the carbon with four different groups.', 'Draw that carbon in the centre. Use two plain lines, one solid wedge and one hashed wedge for its four bonds.', 'For the second enantiomer, draw the reflection of the first in an imaginary mirror placed beside it.'],
    solution: '<p>Markschemes give one mark for each correct enantiomer. Flat drawings with 90° angles do not score: the tetrahedral arrangement must be shown with tapered (wedge and hashed) bonds. If you redraw the same molecule in a different orientation instead of its mirror image, you score only one of the two drawing marks.</p>'
  },

  /* ======================= Structure 3.2.8 — mass spectrometry ============== */
  {
    id: 's3-2h-q016', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.8',
    stem: '<p>The sketch shows the main peaks in the mass spectrum of a compound that contains C, H and O.</p>' +
      fig(msSvg([[15, 12], [43, 100], [58, 25]], 70, 'Mass spectrum sketch with three peaks: m/z 15 with relative abundance 12, m/z 43 with relative abundance 100, and m/z 58 with relative abundance 25.')) +
      '<p>The peak with the highest m/z value is the molecular ion. What is the relative molecular mass, M<sub>r</sub>, of the compound?</p>',
    answer: 58, tolerance: { abs: 0 }, unit: '',
    hints: ['The molecular ion is the whole molecule with one electron removed. Its mass is the mass of the molecule.', 'Do not choose the tallest peak. Choose the molecular ion peak, which is the one furthest to the right here.'],
    solution: '<p>The molecular ion, M<sup>+</sup>, is the whole molecule after it has lost one electron. Its m/z value equals the relative molecular mass.</p><p>The molecular ion peak is at m/z 58, so M<sub>r</sub> = <strong>58</strong>.</p><p>The tallest peak (m/z 43) is a fragment. It is formed when the molecular ion breaks apart. (These are the main peaks of propanone.)</p>'
  },
  {
    id: 's3-2h-q017', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.8',
    stem: '<p>The mass spectrum of propanone has a peak at m/z 15. Which species causes this peak?</p>',
    options: [f('CH3+'), '•' + f('CH3'), f('CH3−'), f('OH+')],
    answer: 0,
    misconception: {
      1: 'The formula is right but the charge is missing. A neutral radical is not deflected or detected. Only positive ions give peaks, and markschemes give no mark for a fragment written without its + charge.',
      2: 'A mass spectrometer produces and detects positive ions, formed when electrons are knocked out of molecules.',
      3: 'Check the mass: O + H = 16 + 1 = 17, not 15.'
    },
    hints: ['Which group of atoms has a mass of 15?', 'What kind of particle does a mass spectrometer detect: neutral, positive or negative?'],
    solution: '<p>A methyl group has mass 12 + 3 × 1 = 15. The detector only records positive ions, so the peak at m/z 15 is caused by ' + f('CH3+') + '.</p><p>Always write the + charge on a fragment that gives a peak.</p>'
  },
  {
    id: 's3-2h-q018', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.8',
    stem: '<p>Propanoic acid, ' + f('CH3CH2COOH') + ', has a molecular ion peak at m/z 74.</p><p>Some molecular ions break up by losing a •COOH fragment. At what m/z value does the ion that is formed appear?</p>' + BOOKLET22,
    answer: 29, tolerance: { abs: 0 }, unit: '',
    hints: ['Find the mass of •COOH in the table.', 'The table gives the mass that is <strong>lost</strong>. The peak is at the mass that is <strong>left</strong>.'],
    solution: '<p>The neutral fragment •COOH has a mass of 45. It is not detected.</p>' + math(['m/z of ion left = 74 − 45 = <b>29</b>']) + '<p>The ion is ' + f('CH3CH2+') + ' (2 × 12 + 5 × 1 = 29). The real spectrum of propanoic acid has a strong peak at m/z 29.</p>'
  },
  {
    id: 's3-2h-q019', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.8',
    stem: '<p>The mass spectrum of butanone, ' + f('CH3COCH2CH3') + ', has its molecular ion peak at m/z 72 and its tallest peak at m/z 43.</p><p>Which ion causes the peak at m/z 43?</p>' + BOOKLET22,
    options: [f('CH3CH2CO+'), f('CH3CO+'), f('CH3CH2+'), f('CH3CO')],
    answer: 1,
    misconception: {
      0: 'This ion has a mass of 57. It forms when the molecular ion loses •' + f('CH3') + ' (72 − 15 = 57).',
      2: 'This ion has a mass of 29. Here 29 is the mass that is lost, not the mass that is detected.',
      3: 'The atoms are right, but a neutral fragment gives no peak. The ion must be written with a + charge.'
    },
    hints: ['Work out the mass lost: 72 − 43.', 'Which neutral fragment in the table has that mass and is present in butanone? What is left behind?'],
    solution: math(['mass lost = 72 − 43 = 29']) + '<p>A loss of 29 is •' + f('CH2CH3') + ' (or •CHO, but butanone has no CHO group). Butanone has an ethyl group next to the C=O group, so the C–C bond there breaks:</p>' + math(['CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub>']) + '<p>The ion left is ' + f('CH3CO+') + ', mass 15 + 12 + 16 = 43.</p>'
  },
  {
    id: 's3-2h-q020', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.8',
    stem: '<p>Propan-1-ol, ' + f('CH3CH2CH2OH') + ', and propan-2-ol, ' + f('CH3CH(OH)CH3') + ', are isomers with M<sub>r</sub> = 60. In each molecular ion, the C–C bond next to the carbon that holds the OH group breaks easily.</p><p>Which peak is expected to be strong in the mass spectrum of propan-1-ol but weak in that of propan-2-ol?</p>' + BOOKLET22,
    options: ['m/z 15', 'm/z 31', 'm/z 45', 'm/z 60'],
    answer: 1,
    misconception: {
      0: 'A mass of 15 is the methyl fragment. When the C–C bond breaks, the charge mostly stays on the part that contains oxygen, so this is not the peak that picks out propan-1-ol.',
      2: 'm/z 45 is 60 − 15, the loss of •' + f('CH3') + ' from the carbon next to C–OH. Propan-2-ol does this, giving ' + f('CH3CHOH+') + '. It is the strong peak of propan-2-ol.',
      3: 'm/z 60 is the molecular ion. Isomers have the same M<sub>r</sub>, so this peak cannot tell them apart.'
    },
    hints: ['Draw each molecule. Which group is attached to the C–OH carbon by a C–C bond?', 'In propan-1-ol that group is ethyl. In propan-2-ol it is methyl. Subtract the mass lost from 60.'],
    solution: '<p><strong>Propan-1-ol:</strong> the C–OH carbon is bonded to an ethyl group. Losing •' + f('CH2CH3') + ' (29) leaves ' + f('CH2OH+') + ':</p>' + math(['60 − 29 = <b>31</b>']) + '<p><strong>Propan-2-ol:</strong> the C–OH carbon is bonded to two methyl groups. Losing •' + f('CH3') + ' (15) leaves ' + f('CH3CHOH+') + ':</p>' + math(['60 − 15 = 45']) + '<p>So a strong peak at m/z 31 points to propan-1-ol. In the real spectra, m/z 31 is the tallest peak for propan-1-ol and m/z 45 is the tallest peak for propan-2-ol.</p>'
  },
  {
    id: 's3-2h-q021', level: 'ahl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.2.8',
    stem: '<p>Pentan-2-one, ' + f('CH3COCH2CH2CH3') + ', and pentan-3-one, ' + f('CH3CH2COCH2CH3') + ', are isomers. The table shows the main peaks in the mass spectra of the two compounds, labelled P and Q.</p>' +
      table('Main peaks (m/z); the tallest peak is in bold', ['Spectrum', 'Peaks'], [['P', '29, <b>57</b>, 86'], ['Q', '<b>43</b>, 71, 86']]) + BOOKLET22 +
      '<p>Deduce which compound gave each spectrum. Use two of the fragment peaks in your explanation.</p>',
    answer: '<p>P is pentan-3-one and Q is pentan-2-one.</p><p>The peak at m/z 57 in P is M − 29: loss of •' + f('CH2CH3') + ' to leave ' + f('CH3CH2CO+') + '. Pentan-3-one has an ethyl group on each side of the C=O group, so it loses 29 easily.</p><p>The peak at m/z 71 in Q is M − 15: loss of •' + f('CH3') + ' to leave ' + f('CH3CH2CH2CO+') + '. Only pentan-2-one has a ' + f('CH3') + ' group bonded to the C=O carbon. (The peak at m/z 43 in Q is ' + f('CH3CO+') + ', which also needs a ' + f('CH3') + ' next to C=O.)</p>',
    markscheme: [
      'P is pentan-3-one AND Q is pentan-2-one.',
      'm/z 57 = 86 − 29, loss of •CH₂CH₃ / the ion CH₃CH₂CO⁺, which fits an ethyl group next to C=O in pentan-3-one. (Accept m/z 29 = CH₃CH₂⁺.)',
      'm/z 71 = 86 − 15, loss of •CH₃ next to C=O in pentan-2-one; OR m/z 43 is CH₃CO⁺, which needs CH₃ next to C=O. Ions must be written with a + charge.'
    ],
    hints: ['Both have a molecular ion at m/z 86. Subtract each fragment peak from 86 to find the mass lost.', 'Ketones tend to break at the C–C bond next to the C=O group. Which groups sit next to C=O in each isomer?'],
    solution: '<p>Method: mass lost = M − fragment peak, then match the mass lost to the booklet table and to a group that the molecule really contains.</p>' + math(['P: 86 − 57 = 29 → •CH<sub>2</sub>CH<sub>3</sub> lost', 'Q: 86 − 71 = 15 → •CH<sub>3</sub> lost']) + '<p>Pentan-3-one has two ethyl groups next to C=O and no methyl group there. Pentan-2-one has a methyl group next to C=O. The peaks are those of the real spectra.</p>'
  },
  {
    id: 's3-2h-q022', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.8',
    stem: '<p>A compound contains only carbon, hydrogen and oxygen. Other evidence shows that each molecule contains <strong>one</strong> oxygen atom. The molecular ion peak in its mass spectrum is at m/z 72.</p><p>What is the molecular formula of the compound?</p>',
    options: [f('C4H8O'), f('C3H4O2'), f('C5H12'), f('C4H10O')],
    answer: 0,
    misconception: {
      1: 'This formula does add up to 72, but it has two oxygen atoms. The question says there is one.',
      2: 'This formula adds up to 72, but it has no oxygen atom.',
      3: 'Check the mass: 4 × 12 + 10 × 1 + 16 = 74, not 72.'
    },
    hints: ['Subtract the mass of the one oxygen atom from 72.', 'Build the remaining mass from carbon (12) and hydrogen (1).'],
    solution: math(['72 − 16 = 56 left for C and H', '4 × 12 = 48, &nbsp; 56 − 48 = 8 → 8 H']) + '<p>The molecular formula is ' + f('C4H8O') + '. (Three carbons would need 20 H atoms, which is impossible, and five carbons give 60, which is too much.)</p>'
  },

  /* ======================= Structure 3.2.9 — infrared ======================= */
  {
    id: 's3-2h-q023', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.9',
    stem: '<p>The infrared spectrum of a compound has a strong, sharp absorption at 1715 cm<sup>−1</sup>. Which bond causes it?</p>' + irTable(IRALL),
    options: ['C–O', 'C=C', 'C=O', 'O–H'],
    answer: 2,
    misconception: {
      0: 'C–O absorbs at 1050–1410 cm<sup>−1</sup>. The single bond and the double bond are easy to mix up, so check the table row carefully.',
      1: 'C=C absorbs at 1620–1680 cm<sup>−1</sup>, and its absorption is medium to weak, not strong.',
      3: 'O–H absorptions are broad and appear at much higher wavenumbers (2500–3000 or 3200–3600 cm<sup>−1</sup>).'
    },
    hints: ['Find the row of the table whose range contains 1715.'],
    solution: '<p>1715 cm<sup>−1</sup> lies in the range 1700–1750 cm<sup>−1</sup>. This strong absorption is caused by a C=O bond. The compound could be an aldehyde, a ketone, a carboxylic acid or an ester.</p>'
  },
  {
    id: 's3-2h-q024', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.9',
    stem: '<p>The infrared spectrum of a compound shows a strong, very broad absorption from 2500 to 3000 cm<sup>−1</sup> and a strong absorption at 1715 cm<sup>−1</sup>.</p><p>Which compound could it be?</p>' + irTable(['CO', 'CdO', 'OHa', 'CH', 'OH']),
    options: ['propan-1-ol, ' + f('CH3CH2CH2OH'), 'propanal, ' + f('CH3CH2CHO'), 'propanoic acid, ' + f('CH3CH2COOH'), 'methyl ethanoate, ' + f('CH3COOCH3')],
    answer: 2,
    misconception: {
      0: 'An alcohol has no C=O bond, so it has no absorption at 1700–1750 cm<sup>−1</sup>. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.',
      1: 'An aldehyde has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.',
      3: 'An ester has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.'
    },
    hints: ['Assign each absorption to a bond using the table.', 'Which class of compound has both of these bonds in one functional group?'],
    solution: '<p>1715 cm<sup>−1</sup> is in the C=O range (1700–1750 cm<sup>−1</sup>). The very broad absorption at 2500–3000 cm<sup>−1</sup> is the O–H bond of a carboxylic acid. A carboxyl group, –COOH, has both, so the compound is propanoic acid.</p>'
  },
  {
    id: 's3-2h-q025', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.9',
    stem: '<p>Propanoic acid, ' + f('CH3CH2COOH') + ', and methyl ethanoate, ' + f('CH3COOCH3') + ', are isomers.</p><p>Which feature of their infrared spectra tells them apart?</p>' + irTable(['CO', 'CdO', 'OHa', 'CH', 'OH']),
    options: [
      'Only methyl ethanoate absorbs at 1700–1750 cm<sup>−1</sup>.',
      'Only propanoic acid has a very broad absorption at 2500–3000 cm<sup>−1</sup>.',
      'Only propanoic acid has a broad absorption at 3200–3600 cm<sup>−1</sup>.',
      'Only methyl ethanoate absorbs at 2850–3090 cm<sup>−1</sup>.'
    ],
    answer: 1,
    misconception: {
      0: 'Both molecules contain a C=O bond, so both absorb at 1700–1750 cm<sup>−1</sup>.',
      2: '3200–3600 cm<sup>−1</sup> is the O–H range for alcohols. The O–H bond of a carboxylic acid absorbs at 2500–3000 cm<sup>−1</sup>.',
      3: 'Both molecules contain C–H bonds, so both absorb at 2850–3090 cm<sup>−1</sup>.'
    },
    hints: ['List the bonds in each molecule. Which bond is in one molecule but not in the other?', 'The booklet has two different O–H rows. Choose the row for carboxylic acids.'],
    solution: '<p>Both molecules have C=O, C–O and C–H bonds. Only the acid has an O–H bond. The O–H bond in a carboxylic acid gives a strong, very broad absorption at 2500–3000 cm<sup>−1</sup>. The ester has no absorption of that kind.</p>'
  },
  {
    id: 's3-2h-q026', level: 'ahl', tier: 'exam', type: 'short', marks: 3,
    syllabus: 'Structure 3.2.9',
    stem: '<p>Ethyl ethanoate, ' + f('CH3COOCH2CH3') + ', is an ester. Butanoic acid, ' + f('CH3CH2CH2COOH') + ', is one of its isomers.</p><p>(a) Other than C–H, state two bonds in ethyl ethanoate that absorb infrared radiation, with the wavenumber range of each. (b) State one absorption that butanoic acid shows but ethyl ethanoate does not.</p>' + irTable(IRALL),
    answer: '<p>(a) C=O at 1700–1750 cm<sup>−1</sup>, and C–O at 1050–1410 cm<sup>−1</sup>.</p><p>(b) O–H in a carboxylic acid at 2500–3000 cm<sup>−1</sup> (strong and very broad).</p>',
    markscheme: [
      'C=O AND 1700–1750 cm⁻¹ (any value inside the range is accepted).',
      'C–O AND 1050–1410 cm⁻¹ (any value inside the range is accepted).',
      'O–H (in carboxylic acids) AND 2500–3000 cm⁻¹. Do not accept 3200–3600 cm⁻¹, which is for alcohols.'
    ],
    hints: ['An ester group has one double bond and one single bond between carbon and oxygen.', 'What does a carboxyl group have that an ester group lacks?'],
    solution: '<p>Each mark needs the bond <strong>and</strong> its range. The ester group –COO– contains a C=O bond and a C–O bond. The carboxyl group –COOH also has an O–H bond. Use the carboxylic acid row of the table for it, not the alcohol row.</p>'
  },
  {
    id: 's3-2h-q027', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.9',
    stem: '<p>Prop-2-en-1-ol has the structure ' + f('CH2=CHCH2OH') + '. Which absorptions are expected in its infrared spectrum? Select <strong>all</strong> that apply.</p>' + irTable(IRALL),
    options: [
      'C–O, 1050–1410 cm<sup>−1</sup>',
      'C=C, 1620–1680 cm<sup>−1</sup>',
      'C=O, 1700–1750 cm<sup>−1</sup>',
      'O–H of a carboxylic acid, 2500–3000 cm<sup>−1</sup>, very broad',
      'C–H, 2850–3090 cm<sup>−1</sup>',
      'O–H of an alcohol, 3200–3600 cm<sup>−1</sup>, broad'
    ],
    answer: [0, 1, 4, 5],
    misconception: {
      2: 'The oxygen atom here is in an O–H group joined to carbon by a single bond. There is no C=O bond in the molecule. The double bond is C=C.',
      3: 'The molecule is an alcohol, not a carboxylic acid. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.'
    },
    hints: ['Write out the structure and list every type of bond it contains.', 'There are two functional groups: an alkene C=C and an alcohol O–H.'],
    solution: '<p>The molecule contains these bonds: C=C (alkene), C–H, C–O and O–H (alcohol). Each gives an absorption in its booklet range. There is no C=O bond and no carboxyl group, so there is no absorption at 1700–1750 cm<sup>−1</sup> and no very broad absorption at 2500–3000 cm<sup>−1</sup>.</p>'
  },
  {
    id: 's3-2h-q028', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.9',
    stem: '<p>A greenhouse gas absorbs infrared radiation. A molecule can only do this if one of its vibrations changes the dipole moment of the molecule.</p><p>Which of these gases in the atmosphere absorb infrared radiation? Select <strong>all</strong> that apply.</p>',
    options: [f('CH4'), f('CO2'), f('H2O'), f('N2'), f('O2')],
    answer: [0, 1, 2],
    misconception: {
      3: 'The two atoms in ' + f('N2') + ' are identical, so the bond is non-polar. Stretching it does not create a dipole, so nitrogen does not absorb infrared radiation.',
      4: 'The two atoms in ' + f('O2') + ' are identical, so the bond is non-polar. Stretching it does not create a dipole, so oxygen does not absorb infrared radiation.'
    },
    hints: ['Which molecules contain polar bonds?', 'A molecule does not need to be polar overall. It needs a vibration that changes its dipole moment.'],
    solution: '<p>' + f('CH4') + ', ' + f('CO2') + ' and ' + f('H2O') + ' all contain polar bonds. Some of their stretching and bending vibrations change the dipole moment, so they absorb infrared radiation. They are greenhouse gases.</p><p>' + f('CO2') + ' and ' + f('CH4') + ' are non-polar molecules overall, but when they bend or stretch unevenly a dipole appears. ' + f('N2') + ' and ' + f('O2') + ' have one non-polar bond each, so no vibration can change the dipole moment. That is why the two main gases in air are not greenhouse gases.</p>'
  },
  {
    id: 's3-2h-q029', level: 'ahl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.2.9',
    stem: '<p>Carbon dioxide makes up about 0.04% of the atmosphere and nitrogen about 78%.</p><p>Explain how carbon dioxide molecules cause a greenhouse effect, and why nitrogen molecules do not.</p>',
    answer: '<p>The warm surface of the Earth emits infrared radiation. The C=O bonds in ' + f('CO2') + ' are polar, and some vibrations of the molecule (bending and uneven stretching) change its dipole moment, so ' + f('CO2') + ' absorbs infrared radiation. The molecules then re-emit the radiation in all directions, so part of it returns to the surface and the atmosphere is warmed. ' + f('N2') + ' has a non-polar bond: its vibration does not change the dipole moment, so it does not absorb infrared radiation.</p>',
    markscheme: [
      'The Earth\'s surface emits infrared (long-wavelength) radiation.',
      'CO₂ absorbs infrared radiation because its bonds are polar / its vibrations (stretching or bending) change the dipole moment of the molecule.',
      'The absorbed radiation is re-emitted in all directions, so some returns to the Earth / less energy escapes to space.',
      'N₂ has a non-polar bond / its vibration causes no change in dipole moment, so it does not absorb infrared radiation.'
    ],
    hints: ['What kind of radiation does the Earth give out?', 'What happens to the bonds of a molecule when it absorbs infrared radiation? What must change during the vibration?', 'Compare the bond in ' + f('N2') + ' with the bonds in ' + f('CO2') + '.'],
    solution: '<p>Three of the four points give full marks. A common weak answer says that ' + f('CO2') + ' "traps heat" or "reflects" radiation. The accurate words are: infrared radiation is <strong>absorbed</strong> by bond vibrations and then <strong>re-emitted</strong>. Do not say that ' + f('CO2') + ' is a polar molecule. It is non-polar overall, but its bonds are polar and its dipole moment changes as it vibrates.</p>'
  },
  {
    id: 's3-2h-q030', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.9',
    stem: '<p>Three bottles contain propan-1-ol, propanoic acid and methyl ethanoate. The table lists the main infrared absorptions of each liquid, apart from C–H.</p>' +
      table('Main absorptions / cm<sup>−1</sup> (not including C–H)', ['Liquid', 'Absorptions'],
        [['I', '1745 (strong); 1240 (strong)'], ['II', '2500–3000 (strong, very broad); 1715 (strong); 1240 (strong)'], ['III', '3200–3500 (strong, broad); 1060 (strong)']]) +
      irTable(['CO', 'CdO', 'OHa', 'OH']) + '<p>Which row identifies the three liquids?</p>',
    options: [
      'I = methyl ethanoate, II = propanoic acid, III = propan-1-ol',
      'I = propanoic acid, II = methyl ethanoate, III = propan-1-ol',
      'I = methyl ethanoate, II = propan-1-ol, III = propanoic acid',
      'I = propan-1-ol, II = propanoic acid, III = methyl ethanoate'
    ],
    answer: 0,
    misconception: {
      1: 'Liquid I has no O–H absorption at all, so it cannot be the acid. Liquid II has the very broad acid O–H absorption, which an ester cannot give.',
      2: 'The two O–H ranges have been swapped. The very broad absorption at 2500–3000 cm<sup>−1</sup> belongs to the carboxylic acid. An alcohol absorbs at 3200–3600 cm<sup>−1</sup> and has no C=O absorption.',
      3: 'Liquid I has a C=O absorption at 1745 cm<sup>−1</sup>, which an alcohol cannot give. Liquid III has no C=O absorption, so it cannot be an ester.'
    },
    hints: ['Start with C=O (1700–1750). Which liquid does not have it?', 'Then use the two different O–H ranges to separate the acid from the alcohol.'],
    solution: '<ul><li>III has no C=O absorption. It has a broad O–H absorption at 3200–3600 cm<sup>−1</sup> and a C–O absorption: the alcohol, propan-1-ol.</li><li>II has C=O and the very broad O–H absorption at 2500–3000 cm<sup>−1</sup>: the carboxylic acid, propanoic acid.</li><li>I has C=O and C–O but no O–H absorption: the ester, methyl ethanoate.</li></ul>'
  },

  /* ======================= Structure 3.2.10 — 1H NMR: signals, shift, area === */
  {
    id: 's3-2h-q031', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>How many signals are there in the <sup>1</sup>H NMR spectrum of pentan-3-one, ' + f('CH3CH2COCH2CH3') + '?</p>',
    answer: 2, tolerance: { abs: 0 }, unit: 'signals',
    hints: ['Each signal comes from hydrogen atoms in one chemical environment.', 'The molecule is symmetrical about the C=O group. Which hydrogen atoms match each other?'],
    solution: '<p>The molecule is symmetrical: the two ethyl groups are in identical positions.</p><ul><li>The six H atoms of the two ' + f('CH3') + ' groups are in one environment.</li><li>The four H atoms of the two ' + f('CH2') + ' groups are in a second environment.</li></ul><p>So there are <strong>2</strong> signals. The number of signals is not the number of H atoms (10) or the number of C atoms (5).</p>'
  },
  {
    id: 's3-2h-q032', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>What is the ratio of the areas under the signals in the <sup>1</sup>H NMR spectrum of 2-chloropropane, ' + f('CH3CHClCH3') + '?</p>',
    options: ['6 : 1', '3 : 3 : 1', '3 : 1', '2 : 1'],
    answer: 0,
    misconception: {
      1: 'The two ' + f('CH3') + ' groups are in the same environment, because the molecule is symmetrical. They give one signal with area 6, not two signals.',
      2: 'There are two ' + f('CH3') + ' groups in that environment, so six H atoms in total, not three.',
      3: 'This is the ratio of carbon atoms in the two environments. The area under a signal depends on the number of hydrogen atoms.'
    },
    hints: ['Count the different hydrogen environments first.', 'Then count the hydrogen atoms in each environment.'],
    solution: '<p>There are two environments: the six H atoms of the two equivalent ' + f('CH3') + ' groups, and the one H atom on the CHCl carbon. The area under each signal is proportional to the number of H atoms, so the ratio is <strong>6 : 1</strong>.</p>'
  },
  {
    id: 's3-2h-q033', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>How many signals are there in the <sup>1</sup>H NMR spectrum of 2-methylpropan-1-ol, ' + f('(CH3)2CHCH2OH') + '?</p>',
    answer: 4, tolerance: { abs: 0 }, unit: 'signals',
    hints: ['Draw the structure. Are the two ' + f('CH3') + ' groups attached to the same carbon?', 'Do not forget the hydrogen atom of the OH group.'],
    solution: '<p>Count the environments one by one.</p>' + table('Hydrogen environments in 2-methylpropan-1-ol', ['Environment', 'Number of H'], [['two equivalent CH<sub>3</sub> groups', '6'], ['CH', '1'], ['CH<sub>2</sub>', '2'], ['OH', '1']]) + '<p>There are <strong>4</strong> signals, with areas in the ratio 6 : 1 : 2 : 1. The two methyl groups are joined to the same carbon, so they are equivalent and give one signal.</p>'
  },
  {
    id: 's3-2h-q034', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>An alcohol with the molecular formula ' + f('C4H10O') + ' gives a <sup>1</sup>H NMR spectrum with two signals. The areas under the signals are in the ratio 9 : 1.</p><p>Which alcohol is it?</p>',
    options: [f('CH3CH2CH2CH2OH'), f('CH3CH(OH)CH2CH3'), f('(CH3)2CHCH2OH'), f('(CH3)3COH')],
    answer: 3,
    misconception: {
      0: 'Butan-1-ol has five hydrogen environments (' + f('CH3') + ', three different ' + f('CH2') + ' groups and OH), so it gives five signals.',
      1: 'Butan-2-ol has five hydrogen environments (two different ' + f('CH3') + ' groups, ' + f('CH2') + ', CH and OH), so it gives five signals.',
      2: '2-methylpropan-1-ol has four hydrogen environments, with areas 6 : 1 : 2 : 1.'
    },
    hints: ['An area of 9 means nine H atoms in the same environment. How many ' + f('CH3') + ' groups is that?', 'Which structure has three ' + f('CH3') + ' groups attached to one carbon?'],
    solution: '<p>Nine equivalent H atoms means three ' + f('CH3') + ' groups in identical positions. In 2-methylpropan-2-ol, ' + f('(CH3)3COH') + ', all three methyl groups are bonded to the same carbon. The tenth H atom is in the OH group. That gives two signals with areas 9 : 1.</p>'
  },
  {
    id: 's3-2h-q035', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>Propanal has the structure ' + f('CH3CH2CHO') + '. In which chemical shift range does the signal of the hydrogen atom in the CHO group appear?</p>' + nmrTable(['CH3', 'keto', 'alkene', 'acid', 'ald']),
    options: ['2.2–2.7 ppm', '4.5–6.0 ppm', '9.0–13.0 ppm', '9.4–10.0 ppm'],
    answer: 3,
    misconception: {
      0: 'This is the range for H atoms on a carbon <strong>next to</strong> the C=O group. In propanal that is the ' + f('CH2') + ' group, not the CHO hydrogen.',
      1: 'This range is for H atoms on a C=C double bond. The CHO hydrogen is on a C=O carbon.',
      2: 'This row is for the O–H hydrogen of a carboxylic acid. In an aldehyde the hydrogen is bonded to the carbon of the C=O group, not to an oxygen atom.'
    },
    hints: ['In the table the hydrogen in question is shown in bold. Find the row where the bold H is bonded directly to the C=O carbon.'],
    solution: '<p>The CHO hydrogen is bonded directly to the carbonyl carbon. The booklet row R–C(=O)–<b>H</b> gives <strong>9.4–10.0 ppm</strong>. The other two signals of propanal are the ' + f('CH2') + ' group next to C=O (2.2–2.7 ppm) and the ' + f('CH3') + ' group (0.9–1.0 ppm).</p>'
  },
  {
    id: 's3-2h-q036', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>The sketch shows the <sup>1</sup>H NMR spectrum of a compound, drawn without splitting, with the molecular formula ' + f('C3H6O2') + '. The number above each signal is its relative area.</p>' +
      fig(nmrSvg([{ d: 3.7, h: 3, n: 1 }, { d: 2.1, h: 3, n: 1 }], 12, 'NMR sketch with a chemical shift axis from 12 ppm on the left to 0 ppm on the right. There are two signals of equal area: one at 3.7 ppm and one at 2.1 ppm.')) +
      nmrTable(['CH3', 'ester', 'keto', 'och2', 'acid', 'roh']) + '<p>Which compound gives this spectrum?</p>',
    options: [f('CH3CH2COOH'), f('CH3COOCH3'), f('HCOOCH2CH3'), f('CH3COCH2OH')],
    answer: 1,
    misconception: {
      0: 'Propanoic acid has three hydrogen environments (areas 3 : 2 : 1), and its COOH hydrogen gives a signal at 9.0–13.0 ppm. The sketch has nothing there.',
      2: 'Ethyl methanoate has three hydrogen environments (H–C=O, ' + f('CH2') + ' and ' + f('CH3') + ') with areas 1 : 2 : 3, so it gives three signals.',
      3: 'This molecule has three hydrogen environments (' + f('CH3') + ', ' + f('CH2') + ' and OH) with areas 3 : 2 : 1, so it gives three signals.'
    },
    hints: ['Count the signals. How many hydrogen environments does the compound have?', 'Equal areas and six H atoms in total means three H atoms in each environment.', 'Use the shifts to decide what each ' + f('CH3') + ' group is joined to.'],
    solution: '<p>Two signals of equal area, with six H atoms in total, means two different ' + f('CH3') + ' groups.</p><ul><li>2.1 ppm is in the range 2.0–2.5 ppm: H on a carbon next to the C=O of an ester, ' + f('CH3') + '–C(=O)–O.</li><li>3.7 ppm is in the range 3.7–4.8 ppm: H on a carbon bonded to the O of an ester, C(=O)–O–' + f('CH3') + '.</li></ul><p>The compound is methyl ethanoate, ' + f('CH3COOCH3') + '. (The booklet rows show ' + f('CH2') + ', but they also apply to ' + f('CH3') + ' groups in the same position.)</p>'
  },
  {
    id: 's3-2h-q037', level: 'ahl', tier: 'exam', type: 'order', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>Put these compounds in order of the number of signals in their <sup>1</sup>H NMR spectra, <strong>fewest signals first</strong>.</p>',
    options: [
      'propanone, ' + f('CH3COCH3'),
      'methyl ethanoate, ' + f('CH3COOCH3'),
      'propan-2-ol, ' + f('CH3CH(OH)CH3'),
      'butanal, ' + f('CH3CH2CH2CHO'),
      'butan-2-ol, ' + f('CH3CH(OH)CH2CH3')
    ],
    hints: ['Count hydrogen environments, not hydrogen atoms.', 'Look for symmetry. Two ' + f('CH3') + ' groups in mirror-image positions give one signal.'],
    solution: table('Number of hydrogen environments', ['Compound', 'Environments', 'Signals'],
      [['propanone', 'two equivalent CH<sub>3</sub>', '1'], ['methyl ethanoate', 'CH<sub>3</sub>–C=O; O–CH<sub>3</sub>', '2'], ['propan-2-ol', 'two equivalent CH<sub>3</sub>; CH; OH', '3'],
       ['butanal', 'CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO', '4'], ['butan-2-ol', 'CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub>', '5']]) +
      '<p>Propanone and propan-2-ol are symmetrical, so their two methyl groups are equivalent. In methyl ethanoate and butan-2-ol the two methyl groups are in different positions, so they give separate signals.</p>'
  },
  {
    id: 's3-2h-q038', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.10',
    stem: '<p>A compound with the molecular formula ' + f('C5H10O') + ' gives a <sup>1</sup>H NMR spectrum with two signals. On the integration trace, the step heights for the two signals are 2.7 cm and 1.8 cm.</p><p>Which compound is it?</p>',
    options: ['pentan-2-one, ' + f('CH3COCH2CH2CH3'), 'pentan-3-one, ' + f('CH3CH2COCH2CH3'), '3-methylbutan-2-one, ' + f('CH3COCH(CH3)2'), '2,2-dimethylpropanal, ' + f('(CH3)3CCHO')],
    answer: 1,
    misconception: {
      0: 'Pentan-2-one has four hydrogen environments (areas 3 : 2 : 2 : 3), so it gives four signals.',
      2: '3-methylbutan-2-one has three hydrogen environments (areas 3 : 1 : 6), so it gives three signals.',
      3: '2,2-dimethylpropanal does give two signals, but their areas are 9 : 1. The measured ratio is 3 : 2.'
    },
    hints: ['Turn the step heights into the simplest whole-number ratio.', 'The molecule has ten H atoms. Share them out in that ratio.', 'Which structure has six H atoms in one environment and four in another?'],
    solution: math(['2.7 : 1.8 = 1.5 : 1 = 3 : 2', '10 H shared 3 : 2 → 6 H and 4 H']) + '<p>Pentan-3-one is symmetrical. Its two ' + f('CH3') + ' groups give one signal (6 H) and its two ' + f('CH2') + ' groups give the other (4 H). The step heights of an integration trace give the <strong>ratio</strong> of H atoms, so you must scale the ratio to the molecular formula.</p>'
  },

  /* ======================= Structure 3.2.11 — splitting patterns ============ */
  {
    id: 's3-2h-q039', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.11',
    stem: '<p>In a <sup>1</sup>H NMR spectrum, one signal is a triplet (three peaks).</p><p>How many hydrogen atoms are bonded to the carbon atom next to the hydrogen atoms that give this signal?</p>',
    answer: 2, tolerance: { abs: 0 }, unit: 'H atoms',
    hints: ['If the neighbouring carbon holds n hydrogen atoms, the signal is split into n + 1 peaks.', 'Solve n + 1 = 3.'],
    solution: '<p>A signal is split into n + 1 peaks, where n is the number of H atoms on the neighbouring carbon atom.</p>' + math(['n + 1 = 3 &nbsp; so &nbsp; n = <b>2</b>']) + '<p>A triplet tells you that the neighbouring carbon is a ' + f('CH2') + ' group. The splitting tells you about the neighbours, not about the hydrogen atoms that give the signal.</p>'
  },
  {
    id: 's3-2h-q040', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.11',
    stem: '<p>Butanone has the structure ' + f('CH3COCH2CH3') + '. What are the splitting patterns of its three signals in a <sup>1</sup>H NMR spectrum?</p>',
    options: [
      f('CH3') + ' next to C=O: singlet. ' + f('CH2') + ': quartet. ' + f('CH3') + ' of the ethyl group: triplet.',
      f('CH3') + ' next to C=O: singlet. ' + f('CH2') + ': triplet. ' + f('CH3') + ' of the ethyl group: quartet.',
      f('CH3') + ' next to C=O: singlet. ' + f('CH2') + ': triplet. ' + f('CH3') + ' of the ethyl group: doublet.',
      f('CH3') + ' next to C=O: triplet. ' + f('CH2') + ': quartet. ' + f('CH3') + ' of the ethyl group: triplet.'
    ],
    answer: 0,
    misconception: {
      1: 'This counts the H atoms on the <strong>same</strong> carbon and adds one. Splitting is caused by the H atoms on the <strong>neighbouring</strong> carbon.',
      2: 'This uses n peaks. The rule is n + 1: three neighbouring H atoms give four peaks, and two give three peaks.',
      3: 'The carbon next to the first ' + f('CH3') + ' group is the C=O carbon, which holds no H atoms. The ' + f('CH2') + ' group is two carbons away, so it does not split this signal.'
    },
    hints: ['For each group, look at the carbon atom(s) directly bonded to it. How many H atoms do they hold?', 'Number of peaks = n + 1.'],
    solution: table('Splitting in butanone', ['Group', 'H on the neighbouring carbon, n', 'Peaks, n + 1', 'Pattern'],
      [['CH<sub>3</sub> next to C=O', '0', '1', 'singlet'], ['CH<sub>2</sub>', '3', '4', 'quartet'], ['CH<sub>3</sub> of ethyl', '2', '3', 'triplet']]) +
      '<p>A triplet (3 H) together with a quartet (2 H) is the pattern of an ethyl group.</p>'
  },
  {
    id: 's3-2h-q041', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.11',
    stem: '<p>Which describes the <sup>1</sup>H NMR spectrum of 1,1-dichloroethane, ' + f('CH3CHCl2') + '?</p>',
    options: [
      'One singlet',
      'A doublet (area 3) and a quartet (area 1)',
      'A quartet (area 3) and a doublet (area 1)',
      'A singlet (area 3) and a triplet (area 1)'
    ],
    answer: 1,
    misconception: {
      0: 'One singlet would mean that all four H atoms are in the same environment. That is true for the isomer 1,2-dichloroethane, ' + f('ClCH2CH2Cl') + ', but here the ' + f('CH3') + ' and CH hydrogen atoms are different.',
      2: 'The patterns are on the wrong signals. This comes from counting the H atoms on the same carbon. The ' + f('CH3') + ' signal is split by the one H on the CH carbon.',
      3: 'This uses n peaks, not n + 1. One neighbouring H gives two peaks, and three neighbouring H atoms give four peaks.'
    },
    hints: ['There are two environments: ' + f('CH3') + ' (3 H) and ' + f('CHCl2') + ' (1 H).', 'Each signal is split by the H atoms on the other carbon. Use n + 1.'],
    solution: '<ul><li>The ' + f('CH3') + ' signal (area 3) has one H on the neighbouring carbon: 1 + 1 = 2 peaks, a <strong>doublet</strong>.</li><li>The CH signal (area 1) has three H atoms on the neighbouring carbon: 3 + 1 = 4 peaks, a <strong>quartet</strong>.</li></ul>'
  },
  {
    id: 's3-2h-q042', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.11',
    stem: '<p>In which of these compounds is <strong>every</strong> signal in the <sup>1</sup>H NMR spectrum a singlet? Select <strong>all</strong> that apply. (Treat the signal of an O–H hydrogen as a singlet.)</p>',
    options: [
      'methyl ethanoate, ' + f('CH3COOCH3'),
      'ethyl methanoate, ' + f('HCOOCH2CH3'),
      'propanone, ' + f('CH3COCH3'),
      'ethanol, ' + f('CH3CH2OH'),
      '2-methylpropan-2-ol, ' + f('(CH3)3COH')
    ],
    answer: [0, 2, 4],
    misconception: {
      1: 'Ethyl methanoate has an ethyl group. Its ' + f('CH2') + ' signal is a quartet and its ' + f('CH3') + ' signal is a triplet.',
      3: 'Ethanol has an ethyl group. Its ' + f('CH3') + ' signal is a triplet and its ' + f('CH2') + ' signal is a quartet.'
    },
    hints: ['A singlet means no H atoms on the neighbouring carbon atom.', 'Look for ' + f('CH3') + ' groups whose only neighbour is a C=O carbon, an O atom, or a carbon with no H.'],
    solution: '<ul><li>Methyl ethanoate: one ' + f('CH3') + ' is next to the C=O carbon and the other is bonded to O. Neither has H atoms on a neighbouring carbon. Two singlets.</li><li>Propanone: both ' + f('CH3') + ' groups are next to the C=O carbon. One singlet.</li><li>2-methylpropan-2-ol: the three ' + f('CH3') + ' groups are bonded to a carbon with no H. One singlet for 9 H, and one singlet for OH.</li><li>Ethyl methanoate and ethanol each contain ' + f('CH3CH2') + ', which gives a triplet and a quartet.</li></ul>'
  },
  {
    id: 's3-2h-q043', level: 'ahl', tier: 'challenge', type: 'short', marks: 4,
    syllabus: 'Structure 3.2.11',
    stem: '<p>Predict the <sup>1</sup>H NMR spectrum of ethyl ethanoate, ' + f('CH3COOCH2CH3') + '. Give the number of signals and, for each signal, the chemical shift range, the relative area and the splitting pattern.</p>' + nmrTable(['CH3', 'CH2R', 'ester', 'keto', 'ether', 'och2']),
    answer: table('Predicted spectrum of ethyl ethanoate (three signals)', ['Hydrogen atoms', 'Shift / ppm', 'Area', 'Splitting'],
      [['C<b>H</b><sub>3</sub>–C(=O)–O', '2.0–2.5', '3', 'singlet'], ['O–C<b>H</b><sub>2</sub>', '3.7–4.8', '2', 'quartet'], ['C<b>H</b><sub>3</sub> of ethyl', '0.9–1.0', '3', 'triplet']]),
    markscheme: [
      'Three signals.',
      'Chemical shifts: 2.0–2.5 ppm (CH₃ next to C=O of the ester), 3.7–4.8 ppm (O–CH₂) and 0.9–1.0 ppm (CH₃ of ethyl). All three needed.',
      'Relative areas 3 : 2 : 3, matched to the correct groups.',
      'Splitting: singlet (CH₃CO), quartet (OCH₂), triplet (CH₃ of ethyl). Accept 1, 4 and 3 peaks.'
    ],
    hints: ['Find the hydrogen environments first: there are two different ' + f('CH3') + ' groups and one ' + f('CH2') + ' group.', 'For shifts, check what each carbon is bonded to: the C=O carbon, the O atom, or only carbon.', 'For splitting, count the H atoms on the neighbouring carbon and add one.'],
    solution: '<p>Work through one signal at a time and fill in a table: environment, shift, area, splitting.</p><ul><li>' + f('CH3') + ' next to the ester C=O: no H on the neighbouring carbon, so a singlet.</li><li>O–' + f('CH2') + ': three H on the neighbouring ' + f('CH3') + ', so 3 + 1 = 4 peaks, a quartet.</li><li>' + f('CH3') + ' of the ethyl group: two H on the neighbouring ' + f('CH2') + ', so 2 + 1 = 3 peaks, a triplet. The O atom is not a carbon with H atoms, so nothing on the other side splits the ' + f('CH2') + ' signal further.</li></ul><p>The measured signals are at about 2.0, 4.1 and 1.3 ppm, so the last one is a little above its booklet range. In an exam, quote the booklet ranges.' + VARY + '</p>'
  },
  {
    id: 's3-2h-q044', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.11',
    stem: '<p>The sketch and table show the <sup>1</sup>H NMR spectrum of a compound with the molecular formula ' + f('C4H8O2') + '. The number above each signal is its relative area.</p>' +
      fig(nmrSvg([{ d: 3.7, h: 3, n: 1 }, { d: 2.3, h: 2, n: 4 }, { d: 1.0, h: 3, n: 3 }], 5, 'NMR sketch with a chemical shift axis from 5 ppm on the left to 0 ppm on the right. A single peak of area 3 at 3.7 ppm, a group of four peaks of area 2 at 2.3 ppm, and a group of three peaks of area 3 at 1.0 ppm.')) +
      table('Signals', ['Shift / ppm', 'Area', 'Splitting'], [['3.7', '3', 'singlet'], ['2.3', '2', 'quartet'], ['1.0', '3', 'triplet']]) +
      nmrTable(['CH3', 'ester', 'och2', 'acid']) + '<p>Which compound is it?</p>',
    options: ['ethyl ethanoate, ' + f('CH3COOCH2CH3'), 'methyl propanoate, ' + f('CH3CH2COOCH3'), 'butanoic acid, ' + f('CH3CH2CH2COOH'), 'propyl methanoate, ' + f('HCOOCH2CH2CH3')],
    answer: 1,
    misconception: {
      0: 'Ethyl ethanoate also gives a singlet, a quartet and a triplet, but in different places. Its quartet (O–' + f('CH2') + ') would be at 3.7–4.8 ppm and its singlet (' + f('CH3') + ' next to C=O) at 2.0–2.5 ppm. Here they are the other way round.',
      2: 'Butanoic acid has four hydrogen environments, and its COOH hydrogen would give a signal at 9.0–13.0 ppm.',
      3: 'Propyl methanoate has four hydrogen environments (H–C=O and three groups in the propyl chain), so it would give four signals.'
    },
    hints: ['A triplet of area 3 with a quartet of area 2 is an ethyl group, ' + f('CH3CH2') + '.', 'The singlet of area 3 is a ' + f('CH3') + ' group with no H on the neighbouring atom.', 'Now use the shifts. Which group is bonded to O (3.7–4.8 ppm) and which is next to C=O (2.0–2.5 ppm)?'],
    solution: '<ul><li>Triplet (3 H) and quartet (2 H): an ethyl group.</li><li>The quartet is at 2.3 ppm, in the range 2.0–2.5 ppm. So the ' + f('CH2') + ' is next to the C=O of an ester: ' + f('CH3CH2') + '–C(=O)–O.</li><li>The singlet (3 H) is at 3.7 ppm, in the range 3.7–4.8 ppm. So this ' + f('CH3') + ' is bonded to the ester oxygen: O–' + f('CH3') + '.</li></ul><p>The compound is methyl propanoate, ' + f('CH3CH2COOCH3') + '. The triplet at 1.0 ppm is in the range 0.9–1.0 ppm: the ' + f('CH3') + ' of the ethyl group.</p>'
  },

  /* ======================= Structure 3.2.12 — combined techniques =========== */
  {
    id: 's3-2h-q045', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.12',
    stem: '<p>Three techniques are often used together to find the structure of an organic compound. Which row matches each technique with the main information it gives?</p>',
    options: [
      'Mass spectrometry: relative molecular mass and fragments. Infrared: bonds present. <sup>1</sup>H NMR: hydrogen environments.',
      'Mass spectrometry: bonds present. Infrared: relative molecular mass and fragments. <sup>1</sup>H NMR: hydrogen environments.',
      'Mass spectrometry: relative molecular mass and fragments. Infrared: hydrogen environments. <sup>1</sup>H NMR: bonds present.',
      'Mass spectrometry: hydrogen environments. Infrared: bonds present. <sup>1</sup>H NMR: relative molecular mass and fragments.'
    ],
    answer: 0,
    misconception: {
      1: 'Mass spectrometry and infrared are swapped. A mass spectrum has m/z on its axis, so it gives masses. An infrared spectrum shows which bonds absorb.',
      2: 'Infrared and NMR are swapped. Infrared absorptions come from bonds that vibrate. NMR signals come from hydrogen nuclei in different environments.',
      3: 'Mass spectrometry and NMR are swapped. The molecular ion peak in a mass spectrum gives the relative molecular mass.'
    },
    hints: ['Think about the horizontal axis of each spectrum: m/z, wavenumber, chemical shift.'],
    solution: '<ul><li><strong>Mass spectrometry:</strong> the molecular ion gives M<sub>r</sub>, and the fragments show which groups can break off.</li><li><strong>Infrared spectroscopy:</strong> the absorptions show which bonds, and so which functional groups, are present.</li><li><strong><sup>1</sup>H NMR:</strong> the number of signals, their shifts, areas and splitting show the hydrogen environments.</li></ul><p>No single technique gives the whole structure. Together they do.</p>'
  },
  {
    id: 's3-2h-q046', level: 'ahl', tier: 'exam', type: 'numeric', marks: 2,
    syllabus: 'Structure 3.2.12',
    stem: '<p>A compound contains 54.5% carbon, 9.2% hydrogen and 36.3% oxygen by mass. Its mass spectrum has the molecular ion peak at m/z 88.</p><p>How many carbon atoms are there in one molecule of the compound?</p>',
    answer: 4, tolerance: { abs: 0 }, unit: 'C atoms',
    hints: ['Find the empirical formula first: divide each percentage by the relative atomic mass, then divide by the smallest result.', 'Work out the mass of one empirical formula unit.', 'Compare it with 88. How many empirical units fit into the molecule?'],
    solution: '<p>Step 1: empirical formula (in 100 g of compound).</p>' + math(['C: 54.5 ÷ 12.01 = 4.54 mol', 'H: 9.2 ÷ 1.01 = 9.11 mol', 'O: 36.3 ÷ 16.00 = 2.27 mol', 'ratio C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O']) + '<p>Step 2: molecular formula.</p>' + math(['empirical mass = 2(12.01) + 4(1.01) + 16.00 = 44.06', '88 ÷ 44.06 ≈ 2', 'molecular formula = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>']) + '<p>One molecule contains <strong>4</strong> carbon atoms.</p>'
  },
  {
    id: 's3-2h-q047', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.12',
    stem: '<p>Data for an unknown compound:</p><ul><li>Mass spectrum: molecular ion at m/z 74.</li><li>Infrared: strong, very broad absorption at 2500–3000 cm<sup>−1</sup>; strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: three signals with areas in the ratio 3 : 2 : 1.</li></ul>' + irTable(['CdO', 'OHa', 'OH']) + '<p>Which compound fits all the data?</p>',
    options: ['butan-1-ol, ' + f('CH3CH2CH2CH2OH'), 'methyl ethanoate, ' + f('CH3COOCH3'), 'ethyl methanoate, ' + f('HCOOCH2CH3'), 'propanoic acid, ' + f('CH3CH2COOH')],
    answer: 3,
    misconception: {
      0: 'Butan-1-ol does have M<sub>r</sub> = 74, but it has no C=O bond, its O–H absorption is at 3200–3600 cm<sup>−1</sup>, and it gives five NMR signals.',
      1: 'Methyl ethanoate has M<sub>r</sub> = 74 and a C=O bond, but no O–H bond, and it gives only two NMR signals.',
      2: 'Ethyl methanoate has M<sub>r</sub> = 74, a C=O bond and three signals in the ratio 1 : 2 : 3. But it has no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.'
    },
    hints: ['All four options have M<sub>r</sub> = 74, so the mass spectrum alone cannot decide.', 'Use the infrared data to find the functional group.', 'Then check the number of NMR signals.'],
    solution: '<ul><li>m/z 74 fits all four compounds.</li><li>Infrared: C=O (1700–1750 cm<sup>−1</sup>) and the very broad O–H of a carboxylic acid (2500–3000 cm<sup>−1</sup>). The compound has a –COOH group.</li><li>NMR: propanoic acid has three environments, ' + f('CH3') + ', ' + f('CH2') + ' and COOH, with areas 3 : 2 : 1.</li></ul><p>The compound is propanoic acid. Each technique removes some of the options. Use all of them.</p>'
  },
  {
    id: 's3-2h-q048', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.12',
    stem: '<p>A compound has the molecular formula ' + f('C4H8O') + '.</p><ul><li>Mass spectrum: peaks at m/z 72, 57 and 43 (tallest).</li><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>; no absorption above 3100 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul>' +
      table('<sup>1</sup>H NMR signals', ['Shift / ppm', 'Area', 'Splitting'], [['2.5', '2', 'quartet'], ['2.2', '3', 'singlet'], ['1.0', '3', 'triplet']]) +
      nmrTable(['CH3', 'keto', 'roh', 'alkene', 'ald']) + '<p>Which compound is it?</p>',
    options: ['butanal, ' + f('CH3CH2CH2CHO'), 'butanone, ' + f('CH3COCH2CH3'), '2-methylpropanal, ' + f('(CH3)2CHCHO'), 'but-3-en-1-ol, ' + f('CH2=CHCH2CH2OH')],
    answer: 1,
    misconception: {
      0: 'Butanal has a C=O bond, but it has four hydrogen environments, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.',
      2: '2-methylpropanal has three signals, but their areas are 6 : 1 : 1, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.',
      3: 'But-3-en-1-ol has an O–H bond, which would absorb at 3200–3600 cm<sup>−1</sup>, and no C=O bond to absorb at 1715 cm<sup>−1</sup>.'
    },
    hints: ['Infrared first: which functional group is present, and which is ruled out?', 'In the NMR data, a triplet (3 H) with a quartet (2 H) is an ethyl group. What is the singlet (3 H)?', 'Check with the mass spectrum: 72 − 57 and 72 − 43.'],
    solution: '<ul><li><strong>Infrared:</strong> 1715 cm<sup>−1</sup> is C=O. No absorption at 3200–3600 cm<sup>−1</sup>, so there is no O–H. The compound is an aldehyde or a ketone.</li><li><strong>NMR:</strong> no signal at 9.4–10.0 ppm, so it is not an aldehyde. Triplet (3 H) + quartet (2 H) = ' + f('CH3CH2') + '. Singlet (3 H) = ' + f('CH3') + ' with no H on the neighbouring carbon. The signals at 2.2 and 2.5 ppm are in the range 2.2–2.7 ppm: H atoms on carbons next to C=O.</li><li><strong>Mass spectrum:</strong> 72 − 57 = 15, loss of •' + f('CH3') + '. 72 − 43 = 29, loss of •' + f('CH2CH3') + ', which leaves ' + f('CH3CO+') + '.</li></ul><p>The compound is butanone, ' + f('CH3COCH2CH3') + '.</p>'
  },
  {
    id: 's3-2h-q049', level: 'ahl', tier: 'challenge', type: 'short', marks: 4,
    syllabus: 'Structure 3.2.12',
    stem: '<p>A compound has the molecular formula ' + f('C3H6O') + '.</p><ul><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: one signal, a singlet.</li><li>Mass spectrum: molecular ion at m/z 58; tallest peak at m/z 43.</li></ul>' + irTable(['CdO', 'OH']) + BOOKLET22 +
      '<p>Deduce the structure of the compound. Explain how each piece of data supports your answer.</p>',
    answer: '<p>The compound is propanone, ' + f('CH3COCH3') + '.</p><ul><li>Infrared: 1715 cm<sup>−1</sup> is in the range 1700–1750 cm<sup>−1</sup>, so there is a C=O bond. With one O atom, the compound is an aldehyde or a ketone.</li><li>NMR: one signal means all six H atoms are in the same environment. That fits two equivalent ' + f('CH3') + ' groups. (Propanal, ' + f('CH3CH2CHO') + ', would give three signals.)</li><li>The signal is a singlet because the neighbouring carbon, the C=O carbon, holds no H atoms.</li><li>Mass spectrum: 58 − 43 = 15, the loss of •' + f('CH3') + ', which leaves ' + f('CH3CO+') + ' at m/z 43.</li></ul>',
    markscheme: [
      'IR: 1715 cm⁻¹ / 1700–1750 cm⁻¹ shows a C=O bond (aldehyde or ketone).',
      'NMR: one signal, so all (six) H atoms are in one chemical environment / two equivalent CH₃ groups.',
      'Structure CH₃COCH₃ / propanone (name or any structural formula).',
      'MS: m/z 43 is M − 15, loss of •CH₃ / the ion CH₃CO⁺ (with its + charge); OR singlet because there are no H atoms on the adjacent (C=O) carbon.'
    ],
    hints: ['Start with the infrared absorption. Which bond is it?', 'There are only two structures with formula ' + f('C3H6O') + ' that contain C=O. Draw both and count their hydrogen environments.', 'Subtract 43 from 58 and look up the mass lost.'],
    solution: '<p>A good order of attack: infrared for the functional group, NMR for the carbon skeleton, mass spectrum as a check.</p>' + math(['58 − 43 = 15 → •CH<sub>3</sub> lost', 'CH<sub>3</sub>COCH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>3</sub>']) + '<p>In a "deduce and explain" question, link every piece of data to a feature of the structure. Naming the compound without the evidence earns one mark only.</p>'
  },
  {
    id: 's3-2h-q050', level: 'ahl', tier: 'challenge', type: 'short', marks: 5,
    syllabus: 'Structure 3.2.12',
    stem: '<p>A liquid contains 52.1% carbon, 13.2% hydrogen and 34.7% oxygen by mass.</p><ul><li>Mass spectrum: molecular ion at m/z 46; tallest peak at m/z 31.</li><li>Infrared: strong, broad absorption at 3350 cm<sup>−1</sup>; no absorption at 1700–1750 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul>' +
      table('<sup>1</sup>H NMR signals', ['Shift / ppm', 'Area', 'Splitting'], [['3.7', '2', 'quartet'], ['2.6', '1', 'singlet'], ['1.0', '3', 'triplet']]) +
      irTable(['CdO', 'OHa', 'OH']) + nmrTable(['CH3', 'ether', 'roh']) + BOOKLET22 +
      '<p>Determine the empirical formula, the molecular formula and the structure of the compound. Show how the spectra support the structure.</p>',
    answer: '<p><strong>Empirical formula:</strong></p>' + math(['C: 52.1 ÷ 12.01 = 4.34', 'H: 13.2 ÷ 1.01 = 13.07', 'O: 34.7 ÷ 16.00 = 2.17', 'ratio = 2.00 : 6.03 : 1 → C<sub>2</sub>H<sub>6</sub>O']) +
      '<p><strong>Molecular formula:</strong> the empirical formula mass is 2(12.01) + 6(1.01) + 16.00 = 46.08, which matches the molecular ion at m/z 46. So the molecular formula is ' + f('C2H6O') + '.</p>' +
      '<p><strong>Infrared:</strong> the broad absorption at 3350 cm<sup>−1</sup> (3200–3600 cm<sup>−1</sup>) is the O–H bond of an alcohol. So the compound is not the ether ' + f('CH3OCH3') + '.</p>' +
      '<p><strong>NMR:</strong> three signals with areas 3 : 2 : 1. The triplet (3 H) and quartet (2 H) show an ethyl group, ' + f('CH3CH2') + '. The quartet at 3.7 ppm (3.3–3.7 ppm) is a ' + f('CH2') + ' bonded to O. The singlet (1 H) is the O–H hydrogen.</p>' +
      '<p><strong>Mass spectrum:</strong> 46 − 31 = 15, the loss of •' + f('CH3') + ', which leaves ' + f('CH2OH+') + '.</p><p><strong>Structure:</strong> ethanol, ' + f('CH3CH2OH') + '.</p>',
    markscheme: [
      'Empirical formula C₂H₆O, with working (mole ratio 4.34 : 13.07 : 2.17, or 2 : 6 : 1).',
      'Molecular formula C₂H₆O, because the empirical formula mass (46) equals the m/z of the molecular ion.',
      'IR: absorption at 3200–3600 cm⁻¹ shows O–H of an alcohol (so not an ether); accept "no C=O".',
      'NMR: three H environments in ratio 3 : 2 : 1, AND triplet + quartet show CH₃CH₂ / the quartet CH₂ is next to CH₃.',
      'Structure CH₃CH₂OH / ethanol.',
      'MS: m/z 31 is M − 15, loss of •CH₃ / the ion CH₂OH⁺ (with its + charge).'
    ],
    hints: ['Start with the percentages: divide each by the relative atomic mass, then by the smallest answer.', 'Compare the empirical formula mass with the m/z of the molecular ion.', 'There are only two structures with this molecular formula: an alcohol and an ether. Which one do the infrared and NMR data fit?'],
    solution: '<p>Any five of the six marking points give full marks. The route is always the same:</p><ol><li>composition → empirical formula;</li><li>molecular ion → molecular formula;</li><li>infrared → functional group;</li><li>NMR → how the atoms are joined;</li><li>mass spectrum fragments → check.</li></ol><p>The isomer methoxymethane, ' + f('CH3OCH3') + ', would give no O–H absorption and only one NMR signal. In a measured spectrum of ethanol the ' + f('CH3') + ' triplet is nearer 1.2 ppm.' + VARY + '</p>'
  }

  ]);
})();
