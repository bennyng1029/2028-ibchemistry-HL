/* ==========================================================================
   Structure Lab — question bank for Structure 2.2 The covalent model
   SL+HL core only: understandings 2.2.1–2.2.10 (all level 'sl').
   The Additional HL understandings 2.2.11–2.2.16 are in questions-s2-2h.js.
   Schema: docs/AUTHORING.md section 4.  All questions are original.

   Data sources
   - Electronegativities, bond lengths and bond enthalpies: IB data booklet
     (first assessment 2025), sections 9, 11 and 12.
   - Boiling points: experimental values at 1 atm (PubChem / CRC), rounded to
     the nearest degree Celsius.
   - Chromatography distances and RF values are example data written for
     these questions.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  /* ---------- small local helpers (no globals) ----------------------------- */
  function c(s) { return '<span class="chem">' + s + '</span>'; }
  var RF = '<i>R</i><sub>F</sub>';
  var DEG = '°';
  function wm(lines) {
    return lines.map(function (l) { return '<div class="worked__math">' + l + '</div>'; }).join('');
  }

  /* Data table. First column is a row header. */
  function table(caption, head, rows) {
    var h = '<div class="table-scroll" tabindex="0"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (x) { h += '<th scope="col">' + x + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (x, i) { h += i ? '<td>' + x + '</td>' : '<th scope="row">' + x + '</th>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  /* Small Lewis formula as inline SVG (currentColor, so it works in both themes).
     atoms: [{s: 'O', x: 0, y: 0, lp: [90, 270]}]   lp = directions of lone pairs in degrees (0 = right, 90 = up)
     bonds: [[i, j, order]]
     opt:   {label: 'text alternative', charge: '2−'}                                                  */
  function lewis(atoms, bonds, opt) {
    opt = opt || {};
    var PAD = 22, R = 9, s = '';
    var xs = atoms.map(function (a) { return a.x; }), ys = atoms.map(function (a) { return a.y; });
    var minX = Math.min.apply(null, xs) - PAD, maxX = Math.max.apply(null, xs) + PAD;
    var minY = Math.min.apply(null, ys) - PAD, maxY = Math.max.apply(null, ys) + PAD;
    bonds.forEach(function (b) {
      var p = atoms[b[0]], q = atoms[b[1]], dx = q.x - p.x, dy = q.y - p.y, d = Math.sqrt(dx * dx + dy * dy);
      var ux = dx / d, uy = dy / d, nx = -uy, ny = ux;
      var offs = b[2] === 1 ? [0] : b[2] === 2 ? [-2.6, 2.6] : [-4.6, 0, 4.6];
      offs.forEach(function (o) {
        s += '<line x1="' + (p.x + ux * R + nx * o).toFixed(1) + '" y1="' + (p.y + uy * R + ny * o).toFixed(1) +
          '" x2="' + (q.x - ux * R + nx * o).toFixed(1) + '" y2="' + (q.y - uy * R + ny * o).toFixed(1) +
          '" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
      });
    });
    atoms.forEach(function (a) {
      s += '<text x="' + a.x + '" y="' + (a.y + 6) + '" text-anchor="middle" font-size="17" fill="currentColor">' + a.s + '</text>';
      (a.lp || []).forEach(function (deg) {
        var t = deg * Math.PI / 180, cx = a.x + 14 * Math.cos(t), cy = a.y - 14 * Math.sin(t);
        var px = Math.sin(t) * 3.2, py = Math.cos(t) * 3.2;
        s += '<circle cx="' + (cx + px).toFixed(1) + '" cy="' + (cy + py).toFixed(1) + '" r="1.7" fill="currentColor"/>';
        s += '<circle cx="' + (cx - px).toFixed(1) + '" cy="' + (cy - py).toFixed(1) + '" r="1.7" fill="currentColor"/>';
      });
    });
    if (opt.charge) {
      var x0 = minX + 3, x1 = maxX - 3, y0 = minY + 2, y1 = maxY - 2;
      s += '<path d="M' + (x0 + 5) + ' ' + y0 + 'H' + x0 + 'V' + y1 + 'H' + (x0 + 5) + 'M' + (x1 - 5) + ' ' + y0 + 'H' + x1 + 'V' + y1 + 'H' + (x1 - 5) +
        '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
      s += '<text x="' + (x1 + 4) + '" y="' + (y0 + 8) + '" font-size="13" fill="currentColor">' + opt.charge + '</text>';
      maxX += 20;
    }
    var w = maxX - minX, h = maxY - minY;
    return '<svg viewBox="' + minX + ' ' + minY + ' ' + w + ' ' + h + '" width="' + w + '" height="' + h +
      '" role="img" aria-label="' + (opt.label || 'Lewis formula') + '" style="vertical-align:middle;max-width:100%">' + s + '</svg>';
  }

  /* Paper chromatogram with a ruler. All distances are in cm from the bottom edge of the paper. */
  function chromatogram(d) {
    var K = 17, top = 26, H = d.paper * K, y = function (cm) { return top + H - cm * K; }, s = '';
    var i;
    // ruler
    s += '<line x1="40" x2="40" y1="' + y(0) + '" y2="' + y(d.paper) + '" stroke="currentColor" stroke-width="1.2"/>';
    for (i = 0; i <= d.paper; i++) {
      s += '<line x1="' + (i % 2 ? 35 : 32) + '" x2="40" y1="' + y(i) + '" y2="' + y(i) + '" stroke="currentColor" stroke-width="1"/>';
      if (i % 2 === 0) s += '<text x="28" y="' + (y(i) + 4) + '" text-anchor="end" font-size="11" fill="currentColor">' + i + '</text>';
    }
    s += '<text x="28" y="11" text-anchor="end" font-size="11" fill="currentColor">cm</text>';
    // paper
    s += '<rect x="56" y="' + y(d.paper) + '" width="84" height="' + H + '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
    // baseline, solvent front, spot
    s += '<line x1="56" x2="140" y1="' + y(d.base) + '" y2="' + y(d.base) + '" stroke="currentColor" stroke-width="1.2"/>';
    s += '<line x1="56" x2="140" y1="' + y(d.front) + '" y2="' + y(d.front) + '" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>';
    s += '<path d="M92 ' + y(d.base) + 'l6 -6m-6 6l6 6m-6 -6l-6 -6m6 6l-6 6" stroke="currentColor" stroke-width="1.2" fill="none"/>';
    s += '<ellipse cx="98" cy="' + y(d.spot) + '" rx="8" ry="5.5" fill="currentColor" fill-opacity="0.55" stroke="currentColor"/>';
    function lab(cm, text) {
      s += '<line x1="142" x2="152" y1="' + y(cm) + '" y2="' + y(cm) + '" stroke="currentColor" stroke-width="1"/>';
      s += '<text x="156" y="' + (y(cm) + 4) + '" font-size="12" fill="currentColor">' + text + '</text>';
    }
    lab(d.paper, 'top of paper, ' + d.paper.toFixed(1));
    lab(d.front, 'solvent front, ' + d.front.toFixed(1));
    lab(d.spot, 'centre of spot, ' + d.spot.toFixed(1));
    lab(d.base, 'baseline, ' + d.base.toFixed(1));
    lab(0, 'bottom edge, 0.0');
    var W = 300, HH = H + top + 12;
    return '<p><svg viewBox="0 0 ' + W + ' ' + HH + '" width="' + W + '" height="' + HH + '" role="img" style="max-width:100%;height:auto" aria-label="Paper chromatogram with a ruler. Distances from the bottom edge of the paper: baseline ' +
      d.base.toFixed(1) + ' cm, centre of the spot ' + d.spot.toFixed(1) + ' cm, solvent front ' + d.front.toFixed(1) + ' cm, top of the paper ' + d.paper.toFixed(1) + ' cm.">' + s + '</svg></p>';
  }

  /* ---------- drawings used below ------------------------------------------ */
  var HCN = {
    noLp: lewis([{ s: 'H', x: 0, y: 0 }, { s: 'C', x: 40, y: 0 }, { s: 'N', x: 84, y: 0 }], [[0, 1, 1], [1, 2, 3]],
      { label: 'H single bond C, C triple bond N, no lone pairs' }),
    dbl: lewis([{ s: 'H', x: 0, y: 0 }, { s: 'C', x: 40, y: 0 }, { s: 'N', x: 84, y: 0, lp: [60, 300] }], [[0, 1, 1], [1, 2, 2]],
      { label: 'H single bond C, C double bond N, two lone pairs on N' }),
    ok: lewis([{ s: 'H', x: 0, y: 0 }, { s: 'C', x: 40, y: 0 }, { s: 'N', x: 84, y: 0, lp: [0] }], [[0, 1, 1], [1, 2, 3]],
      { label: 'H single bond C, C triple bond N, one lone pair on N' }),
    extra: lewis([{ s: 'H', x: 0, y: 0 }, { s: 'C', x: 40, y: 0, lp: [90] }, { s: 'N', x: 84, y: 0, lp: [0] }], [[0, 1, 1], [1, 2, 3]],
      { label: 'H single bond C, C triple bond N, one lone pair on C and one lone pair on N' })
  };
  function oo(order, lps, label) {
    var left = lps === 3 ? [90, 180, 270] : [120, 240], right = lps === 3 ? [90, 0, 270] : [60, 300];
    return lewis([{ s: 'O', x: 0, y: 0, lp: left }, { s: 'O', x: 44, y: 0, lp: right }], [[0, 1, order]], { charge: '2−', label: label });
  }
  var PEROX = {
    ok: oo(1, 3, 'Ion with charge 2 minus. O single bond O, three lone pairs on each O'),
    dbl2: oo(2, 2, 'Ion with charge 2 minus. O double bond O, two lone pairs on each O'),
    sgl2: oo(1, 2, 'Ion with charge 2 minus. O single bond O, two lone pairs on each O'),
    dbl3: oo(2, 3, 'Ion with charge 2 minus. O double bond O, three lone pairs on each O')
  };
  var NITRITE = lewis(
    [{ s: 'O', x: 0, y: 0, lp: [120, 240] }, { s: 'N', x: 44, y: 0, lp: [90] }, { s: 'O', x: 88, y: 0, lp: [90, 0, 270] }],
    [[0, 1, 2], [1, 2, 1]],
    { charge: '−', label: 'Ion with charge 1 minus, drawn in a straight line. O double bond N, N single bond O. Two lone pairs on the first O, one lone pair on N, three lone pairs on the second O' });

  var EN = 'Electronegativity values from the data booklet: ';

  /* ---------- the bank ------------------------------------------------------ */
  S1.questions.register('s2-2', [

    /* ===== Structure 2.2.1 — covalent bond, octet rule, Lewis formulas ===== */
    {
      id: 's2-2-q001',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>Which statement best describes a covalent bond?</p>',
      options: [
        'The electrostatic attraction between oppositely charged ions.',
        'The electrostatic attraction between a shared pair of electrons and the positively charged nuclei.',
        'The electrostatic attraction between a lattice of cations and delocalized electrons.',
        'The transfer of electrons from one atom to another atom.'
      ],
      answer: 1,
      misconception: {
        0: 'This describes an ionic bond. In a covalent bond no ions form: the atoms share a pair of electrons.',
        2: 'This describes a metallic bond. In a covalent bond the shared pair stays between two nuclei. It is not delocalized through a lattice.',
        3: 'Electron transfer happens when ions form. A bond is an attraction, not a transfer. In a covalent bond the electrons are shared.'
      },
      hints: [
        'In a covalent bond, two atoms share a pair of electrons.',
        'A bond is always an electrostatic attraction. Ask: what is attracted to what?'
      ],
      solution: '<p>Two nuclei are both attracted to the same shared pair of electrons. That attraction holds the atoms together.</p><p>The markscheme wording is: <strong>electrostatic attraction between a shared pair of electrons and the positively charged nuclei</strong>.</p>'
    },
    {
      id: 's2-2-q002',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>The first step in drawing a Lewis formula is to count the valence electrons.</p><p>How many valence electrons must be shown in the Lewis formula of the carbonate ion, ' + c('CO3^2-') + '?</p>',
      answer: 24, tolerance: { abs: 0 },
      hints: [
        'Carbon is in group 14, so it has 4 valence electrons. Oxygen is in group 16, so it has 6.',
        'The charge is 2−. A negative charge means extra electrons. Add them.'
      ],
      solution: wm([
        'C: 1 × 4 = 4',
        'O: 3 × 6 = 18',
        'charge 2−: add 2',
        'total = 4 + 18 + 2 = 24 valence electrons'
      ]) + '<p>For a negative ion you add electrons. For a positive ion you subtract electrons.</p>'
    },
    {
      id: 's2-2-q003',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>How many lone pairs (non-bonding pairs) of electrons are there in the Lewis formula of one molecule of carbon dioxide, ' + c('CO2') + '?</p><p>Count the lone pairs on <strong>all</strong> the atoms.</p>',
      answer: 4, tolerance: { abs: 0 },
      hints: [
        'Total valence electrons: 4 + 6 + 6 = 16, which is 8 pairs.',
        'The structure is ' + c('O=C=O') + '. The two double bonds use 4 pairs. Where are the other pairs?'
      ],
      solution: '<p>' + c('CO2') + ' has 4 + (2 × 6) = 16 valence electrons, which is 8 pairs.</p><p>The two ' + c('C=O') + ' double bonds use 4 pairs. The other 4 pairs are lone pairs: <strong>2 on each oxygen atom</strong>. Carbon has none.</p><p>Total lone pairs = <strong>4</strong>. A Lewis formula must show every lone pair, including those on the outer atoms.</p>'
    },
    {
      id: 's2-2-q004',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>Which is the correct Lewis formula of hydrogen cyanide, ' + c('HCN') + '?</p><p>Each line is one shared pair. Each pair of dots is one lone pair.</p>',
      options: [HCN.noLp, HCN.dbl, HCN.ok, HCN.extra],
      answer: 2,
      misconception: {
        0: 'This drawing shows only 8 electrons. ' + c('HCN') + ' has 1 + 4 + 5 = 10 valence electrons. The lone pair on nitrogen is missing, so nitrogen has only 6 electrons around it.',
        1: 'The electron count (10) is right, but carbon has only 3 pairs (6 electrons) around it. Moving one lone pair from N into the bond makes a triple bond and gives carbon an octet.',
        3: 'This drawing shows 12 electrons, but only 10 valence electrons are available. Carbon would also have 5 pairs around it, which is more than an octet.'
      },
      hints: [
        'Count the valence electrons first: H has 1, C has 4, N has 5.',
        'In the correct formula, C and N each have 8 electrons around them and H has 2.',
        'Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.'
      ],
      solution: '<p>Valence electrons: 1 + 4 + 5 = <strong>10</strong> (5 pairs).</p><p>' + c('H–C≡N') + ' uses 4 pairs in bonds: one in the single bond and three in the triple bond. The last pair is a lone pair on nitrogen.</p><p>Check: H has 2 electrons. C has 8 (four bonding pairs). N has 8 (three bonding pairs and one lone pair).</p>'
    },
    {
      id: 's2-2-q005',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>Ethanoic acid has the structural formula ' + c('CH3COOH') + '. One oxygen atom is joined to carbon by a double bond. The other oxygen atom is in an ' + c('O–H') + ' group.</p><p>How many <strong>bonding pairs</strong> of electrons are there in the Lewis formula of one molecule of ethanoic acid?</p>',
      answer: 8, tolerance: { abs: 0 },
      hints: [
        'List the bonds: three ' + c('C–H') + ', one ' + c('C–C') + ', one ' + c('C=O') + ', one ' + c('C–O') + ', one ' + c('O–H') + '.',
        'A double bond is two bonding pairs.'
      ],
      solution: wm([
        'C–H: 3 pairs',
        'C–C: 1 pair',
        'C=O: 2 pairs',
        'C–O: 1 pair',
        'O–H: 1 pair',
        'total = 8 bonding pairs'
      ]) + '<p>Check with the electron count. Valence electrons = (2 × 4) + (4 × 1) + (2 × 6) = 24, which is 12 pairs. There are 8 bonding pairs and 4 lone pairs (2 on each oxygen atom). 8 + 4 = 12.</p>'
    },
    {
      id: 's2-2-q006',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>In which of these molecules does the <strong>central atom</strong> have fewer than 8 electrons in its valence shell? Select all that apply.</p>',
      options: [c('BeCl2'), c('BF3'), c('NH3'), c('CCl4'), c('PCl3')],
      answer: [0, 1],
      misconception: {
        2: 'Nitrogen in ' + c('NH3') + ' has three bonding pairs and one lone pair. That is 8 electrons. Remember to count the lone pair.',
        3: 'Carbon in ' + c('CCl4') + ' has four bonding pairs. That is 8 electrons.',
        4: 'Phosphorus in ' + c('PCl3') + ' has three bonding pairs and one lone pair. That is 8 electrons.'
      },
      hints: [
        'Find the group of each central atom. That tells you its number of valence electrons.',
        'Beryllium has 2 valence electrons and boron has 3. How many bonds can each form, and are any lone pairs left?'
      ],
      solution: '<p><strong>' + c('BeCl2') + '</strong>: Be has 2 valence electrons and forms 2 bonds. It has 2 pairs = 4 electrons.</p><p><strong>' + c('BF3') + '</strong>: B has 3 valence electrons and forms 3 bonds. It has 3 pairs = 6 electrons.</p><p>In ' + c('NH3') + ', ' + c('CCl4') + ' and ' + c('PCl3') + ' the central atom has four pairs (bonding pairs plus lone pairs), so it has an octet.</p>'
    },
    {
      id: 's2-2-q007',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.1',
      stem: '<p>The peroxide ion has the formula ' + c('O2^2-') + '. Each oxygen atom in the ion obeys the octet rule.</p><p>Which is the correct Lewis formula of the peroxide ion?</p>',
      options: [PEROX.dbl2, PEROX.sgl2, PEROX.dbl3, PEROX.ok],
      answer: 3,
      misconception: {
        0: 'This drawing has 12 electrons. That is the count for an ' + c('O2') + ' molecule. The ion has a 2− charge, so it has 2 more electrons: 14 in total.',
        1: 'This drawing has only 10 electrons, and each oxygen atom has only 6 electrons around it. The ion has 14 valence electrons.',
        2: 'This drawing has 16 electrons, and each oxygen atom has 10 electrons around it. The ion has 14 valence electrons.'
      },
      hints: [
        'Count the valence electrons: 6 from each oxygen atom, plus the electrons for the charge.',
        '14 electrons is 7 pairs. Share them so that each oxygen atom has 4 pairs around it.',
        'Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.'
      ],
      solution: wm([
        'valence electrons = (2 × 6) + 2 = 14, which is 7 pairs'
      ]) + '<p>With a <strong>single</strong> ' + c('O–O') + ' bond (1 pair), 6 pairs are left. That is 3 lone pairs on each oxygen atom.</p><p>Check: each O has 1 bonding pair + 3 lone pairs = 8 electrons. The charge 2− must be shown.</p><p>The extra two electrons are why the ion has a single bond, while the ' + c('O2') + ' molecule has a double bond.</p>'
    },

    /* ===== Structure 2.2.2 — single, double, triple bonds; length and strength ===== */
    {
      id: 's2-2-q008',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.2',
      stem: '<p>A nitrogen molecule, ' + c('N2') + ', contains a triple bond.</p><p>How many <strong>electrons</strong> are shared between the two nitrogen atoms?</p>',
      answer: 6, tolerance: { abs: 0 },
      hints: [
        'A triple bond is three shared pairs.',
        'The question asks for electrons, not pairs.'
      ],
      solution: '<p>Single bond: 1 shared pair. Double bond: 2 shared pairs. Triple bond: 3 shared pairs.</p>' + wm(['3 pairs × 2 electrons = 6 electrons']) + '<p>Each nitrogen atom also has one lone pair, which is not shared.</p>'
    },
    {
      id: 's2-2-q009',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.2',
      stem: '<p>Which species has the <strong>shortest</strong> bond between carbon and oxygen?</p>',
      options: [
        'methanol, ' + c('CH3OH'),
        'carbon dioxide, ' + c('CO2'),
        'carbon monoxide, ' + c('CO'),
        'methoxymethane, ' + c('CH3OCH3')
      ],
      answer: 2,
      misconception: {
        0: 'Methanol has a carbon–oxygen single bond (one shared pair). Single bonds are the longest. The booklet value is 143 pm.',
        1: c('CO2') + ' has double bonds (122 pm). They are shorter than single bonds, but one of the other species has three shared pairs.',
        3: 'Methoxymethane has two carbon–oxygen single bonds. Single bonds are the longest. The booklet value is 143 pm.'
      },
      hints: [
        'Work out the Lewis formula of each species. How many pairs are shared between C and O?',
        'More shared pairs pull the two nuclei closer together.',
        c('CO') + ' has 4 + 6 = 10 valence electrons. Both atoms need an octet.'
      ],
      solution: '<p>Carbon monoxide has 10 valence electrons. The only way to give both atoms an octet is a <strong>triple bond</strong> with one lone pair on each atom.</p><p>Data booklet bond lengths: ' + c('C–O') + ' 143 pm, ' + c('C=O') + ' 122 pm, ' + c('C≡O') + ' 113 pm.</p><p>More shared pairs give a stronger attraction between the nuclei and the shared electrons, so the bond is shorter.</p>'
    },
    {
      id: 's2-2-q010',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.2',
      stem: '<p>The data booklet gives these values.</p>' +
        table('Carbon–carbon bonds', ['Bond', 'Length / pm', 'Bond enthalpy / <span class="unit">kJ mol-1</span>'], [[c('C–C'), '154', '346'], [c('C=C'), '134', '614']]) +
        '<p>Explain why the ' + c('C=C') + ' bond is shorter and stronger than the ' + c('C–C') + ' bond.</p>',
      answer: '<p>A double bond has two shared pairs of electrons. A single bond has one shared pair.</p><p>With more shared electrons between them, the two nuclei are attracted more strongly to the shared electrons. This pulls the nuclei closer together (shorter bond), and more energy is needed to separate them (stronger bond).</p>',
      markscheme: [
        'The double bond has two shared pairs of electrons (four shared electrons) and the single bond has one shared pair. Accept: more shared electrons / greater electron density between the nuclei.',
        'Greater (electrostatic) attraction between the nuclei and the shared electrons (so the nuclei are pulled closer together and more energy is needed to break the bond).'
      ],
      hints: [
        'Start with the number of shared pairs in each bond.',
        'A covalent bond is an attraction. What is attracted to what, and why is it stronger here?'
      ]
    },
    {
      id: 's2-2-q011',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.2',
      stem: '<p>The table shows data booklet values for three carbon–carbon bonds.</p>' +
        table('Carbon–carbon bonds', ['Bond', 'Shared pairs', 'Length / pm', 'Bond enthalpy / <span class="unit">kJ mol-1</span>'],
          [[c('C–C'), '1', '154', '346'], [c('C=C'), '2', '134', '614'], [c('C≡C'), '3', '120', '839']]) +
        '<p>Which statement is supported by <strong>all</strong> the data?</p>',
      options: [
        'Bond enthalpy is directly proportional to the number of shared pairs.',
        'Each extra shared pair makes the bond shorter and stronger, but each extra pair adds less strength than the pair before it.',
        'Longer bonds are stronger bonds.',
        'The triple bond is the weakest bond because six shared electrons repel each other strongly.'
      ],
      answer: 1,
      misconception: {
        0: 'Test it. Twice the single-bond value is 2 × 346 = 692, but the double bond is 614. Three times is 1038, but the triple bond is 839. The bond gets stronger, but not in proportion.',
        2: 'Read the two columns together. As the length goes down (154, 134, 120 pm), the bond enthalpy goes up. Shorter bonds are stronger.',
        3: 'The triple bond has the largest bond enthalpy (839), so it is the strongest of the three. A larger bond enthalpy means more energy is needed to break the bond.'
      },
      hints: [
        'Bond enthalpy is the energy needed to break the bond. A bigger value means a stronger bond.',
        'Find the increase from single to double, and from double to triple.',
        'For "directly proportional", doubling the pairs would double the bond enthalpy. Does it?'
      ],
      solution: wm([
        'single → double: 614 − 346 = 268 <span class="unit">kJ mol-1</span>',
        'double → triple: 839 − 614 = 225 <span class="unit">kJ mol-1</span>'
      ]) + '<p>The first shared pair is worth 346. The second adds 268. The third adds 225. So each extra pair adds less than the one before.</p><p>The lengths fall from 154 to 134 to 120 pm. More shared pairs attract the two nuclei more strongly, so the bond is shorter and stronger.</p>'
    },

    /* ===== Structure 2.2.3 — coordination bonds ===== */
    {
      id: 's2-2-q012',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.3',
      stem: '<p>What is a coordination bond?</p>',
      options: [
        'A covalent bond in which both electrons of the shared pair come from the same atom.',
        'A covalent bond in which each atom gives one electron to the shared pair.',
        'A bond formed when one atom transfers two electrons to another atom.',
        'A weak attraction between a lone pair on one molecule and a hydrogen atom on another molecule.'
      ],
      answer: 0,
      misconception: {
        1: 'This is how most covalent bonds form. In a coordination bond, one atom gives both electrons.',
        2: 'Transfer of electrons makes ions. In a coordination bond the pair is shared between the two atoms, not transferred.',
        3: 'This describes a hydrogen bond, which is an intermolecular force. A coordination bond is a covalent bond inside a molecule or ion.'
      },
      hints: [
        'A coordination bond is still a shared pair of electrons.',
        'Think about where the two electrons come from.'
      ],
      solution: '<p>A coordination bond is a covalent bond in which <strong>both electrons of the shared pair originate from the same atom</strong>.</p><p>The atom that gives the pair must have a lone pair. The atom that accepts it must have space in its valence shell.</p>'
    },
    {
      id: 's2-2-q013',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.3',
      stem: '<p>Ammonia reacts with a hydrogen ion to form the ammonium ion.</p><p>' + c('NH3 + H+ -> NH4+') + '</p><p>Which statement about the new ' + c('N–H') + ' bond is correct?</p>',
      options: [
        'The hydrogen ion provides both electrons for the bond.',
        'The bond is ionic, because it forms between a molecule and an ion.',
        'Nitrogen provides both electrons for the bond. In the ion, all four ' + c('N–H') + ' bonds are the same.',
        'Nitrogen provides both electrons for the bond. In the ion, this bond is longer and weaker than the other three.'
      ],
      answer: 2,
      misconception: {
        0: 'A hydrogen ion, ' + c('H+') + ', has no electrons. It cannot give any. The pair comes from the lone pair on nitrogen.',
        1: 'The pair of electrons is shared between N and H, so the bond is covalent. No electrons are transferred.',
        3: 'The first part is right. But once the bond has formed, a shared pair is a shared pair. All four ' + c('N–H') + ' bonds have the same length and strength.'
      },
      hints: [
        'How many electrons does ' + c('H+') + ' have?',
        'Nitrogen in ammonia has one lone pair.',
        'After the bond forms, can you tell which shared pair came from where?'
      ],
      solution: '<p>' + c('H+') + ' has no electrons. Nitrogen in ' + c('NH3') + ' has a lone pair. Nitrogen shares this pair with ' + c('H+') + ', so both electrons in the new bond come from nitrogen. This is a coordination bond.</p><p>After it forms, the coordination bond is the same as the other three ' + c('N–H') + ' bonds. The ion is a regular tetrahedron.</p>'
    },
    {
      id: 's2-2-q014',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.2.3',
      stem: '<p>Which of these species contain a coordination bond? Select all that apply.</p>',
      options: [c('NH4+'), c('H3O+'), c('CO'), c('CO2'), c('CH4')],
      answer: [0, 1, 2],
      misconception: {
        3: 'In ' + c('CO2') + ', carbon gives 2 electrons to each double bond and each oxygen gives 2. Every shared pair has one electron from each atom.',
        4: 'In ' + c('CH4') + ', carbon gives one electron and hydrogen gives one electron to each bond. No atom gives both.'
      },
      hints: [
        'Look for an atom that needs more bonds than its unpaired electrons allow.',
        c('NH4+') + ' and ' + c('H3O+') + ' form when a molecule with a lone pair bonds to ' + c('H+') + '.',
        'In ' + c('CO') + ', carbon has 4 valence electrons but takes part in a triple bond. Oxygen has 6. Count where the six shared electrons come from.'
      ],
      solution: '<p><strong>' + c('NH4+') + '</strong>: the lone pair on N of ' + c('NH3') + ' bonds to ' + c('H+') + '.</p><p><strong>' + c('H3O+') + '</strong>: a lone pair on O of ' + c('H2O') + ' bonds to ' + c('H+') + '.</p><p><strong>' + c('CO') + '</strong>: the triple bond has 6 shared electrons. Carbon gives 2 and oxygen gives 4. So one of the three shared pairs comes only from oxygen.</p><p>In ' + c('CO2') + ' and ' + c('CH4') + ', each atom gives one electron to every shared pair.</p>'
    },
    {
      id: 's2-2-q015',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.3',
      stem: '<p>Ammonia, ' + c('NH3') + ', reacts with boron trifluoride, ' + c('BF3') + ', to form one molecule with a bond between nitrogen and boron: ' + c('H3N–BF3') + '.</p><p>Which row is correct for the product?</p>' +
        table('Options', ['', 'Atom that gives both electrons of the N–B bond', 'Arrangement of the four atoms around boron'],
          [['A', 'boron', 'tetrahedral'], ['B', 'nitrogen', 'trigonal planar'], ['C', 'nitrogen', 'tetrahedral'], ['D', 'fluorine', 'trigonal pyramidal']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      misconception: {
        0: 'Boron in ' + c('BF3') + ' has only 6 electrons in its valence shell and no lone pair. It accepts a pair. It cannot give one.',
        1: 'The donor atom is right. But boron now has four bonding pairs, not three. Four electron domains do not give a trigonal planar shape.',
        3: 'The new bond is between N and B, so fluorine is not the donor. Boron has four bonding pairs and no lone pair, so the shape around it is not trigonal pyramidal.'
      },
      hints: [
        'Draw the Lewis formulas of ' + c('NH3') + ' and ' + c('BF3') + '. Which atom has a lone pair? Which atom has fewer than 8 electrons?',
        'After the bond forms, count the electron domains around boron.'
      ],
      solution: '<p>Nitrogen in ' + c('NH3') + ' has a lone pair. Boron in ' + c('BF3') + ' has only 3 pairs (6 electrons). Nitrogen shares its lone pair with boron. Both electrons come from nitrogen, so this is a coordination bond.</p><p>Boron now has <strong>four bonding pairs and no lone pairs</strong>. Four electron domains repel to a <strong>tetrahedral</strong> arrangement. Before the reaction, ' + c('BF3') + ' was trigonal planar.</p>'
    },

    /* ===== Structure 2.2.4 — VSEPR, up to four electron domains ===== */
    {
      id: 's2-2-q016',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.4',
      stem: '<p>What is the molecular geometry (shape) of an ammonia molecule, ' + c('NH3') + '?</p>',
      options: ['trigonal planar', 'tetrahedral', 'trigonal pyramidal', 'bent (V-shaped)'],
      answer: 2,
      misconception: {
        0: 'Trigonal planar needs three electron domains. Nitrogen in ' + c('NH3') + ' has four: three bonding pairs and one lone pair. The lone pair pushes the three bonds down out of the plane.',
        1: 'Tetrahedral is the electron domain geometry. The molecular geometry describes only the positions of the atoms, and one of the four domains is a lone pair.',
        3: 'Bent needs two bonded atoms on the central atom. Nitrogen in ' + c('NH3') + ' has three bonded atoms.'
      },
      hints: [
        'Count the electron domains around nitrogen. Include the lone pair.',
        'The molecular geometry is the shape made by the atoms only.'
      ],
      solution: '<p>Nitrogen has 5 valence electrons. It forms three ' + c('N–H') + ' bonds and keeps one lone pair. That is <strong>four electron domains</strong>.</p><p>Electron domain geometry: tetrahedral. One domain is a lone pair, so the atoms make a <strong>trigonal pyramidal</strong> shape.</p>'
    },
    {
      id: 's2-2-q017',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.4',
      stem: '<p>What is the ' + c('H–C–H') + ' bond angle in a methane molecule, ' + c('CH4') + '?</p>',
      answer: 109.5, tolerance: { abs: 0.5 }, unit: '°',
      hints: [
        'Carbon has four bonding pairs and no lone pairs.',
        'Four electron domains move as far apart as possible in three dimensions. The molecule is not flat.'
      ],
      solution: '<p>Carbon has four electron domains, all bonding pairs. They repel equally and point to the corners of a tetrahedron.</p><p>The tetrahedral angle is <strong>109.5' + DEG + '</strong>. It is not 90' + DEG + ', because the molecule is three-dimensional, not a flat cross.</p>'
    },
    {
      id: 's2-2-q018',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.4',
      stem: '<p>A Lewis formula of the nitrite ion, ' + c('NO2-') + ', is shown. A Lewis formula does not show the shape.</p><p>' + NITRITE + '</p><p>Which row gives the electron domain geometry and the molecular geometry around the nitrogen atom?</p>' +
        table('Options', ['', 'Electron domain geometry', 'Molecular geometry'],
          [['A', 'trigonal planar', 'trigonal planar'], ['B', 'trigonal planar', 'bent (V-shaped)'], ['C', 'tetrahedral', 'bent (V-shaped)'], ['D', 'linear', 'linear']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      misconception: {
        0: 'The electron domain geometry is right. But the molecular geometry describes only the atoms. One of the three domains is a lone pair, so only two positions hold atoms.',
        2: 'A double bond counts as <strong>one</strong> electron domain. Nitrogen has three domains (double bond, single bond, lone pair), not four.',
        3: 'This ignores the lone pair on nitrogen. The lone pair is an electron domain. It repels the two bonds, so the ion is not linear.'
      },
      hints: [
        'Count the electron domains around N. A double bond counts as one domain. A lone pair counts as one domain.',
        'The electron domain geometry uses all the domains. The molecular geometry uses only the atoms.'
      ],
      solution: '<p>Around nitrogen there are <strong>three electron domains</strong>: one double bond, one single bond and one lone pair.</p><p>Three domains repel to a <strong>trigonal planar</strong> electron domain geometry.</p><p>Only two of the domains hold atoms, so the molecular geometry is <strong>bent (V-shaped)</strong>. The bond angle is a little less than 120' + DEG + ' (about 115' + DEG + '), because the lone pair repels more than the bonding pairs.</p>'
    },
    {
      id: 's2-2-q019',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 2.2.4',
      stem: '<p>Put these molecules in order of bond angle around the central atom. Put the <strong>smallest</strong> bond angle first.</p>',
      options: [c('H2O'), c('NH3'), c('CH4'), c('BF3'), c('CO2')],
      hints: [
        'Count the electron domains around each central atom: 2, 3 or 4.',
        c('H2O') + ', ' + c('NH3') + ' and ' + c('CH4') + ' all have four domains. They differ in the number of lone pairs.',
        'Lone pairs repel more than bonding pairs, so they squeeze the bond angle.'
      ],
      solution: '<p>' + c('H2O') + ': 4 domains, 2 lone pairs, about 104.5' + DEG + '.</p><p>' + c('NH3') + ': 4 domains, 1 lone pair, about 107' + DEG + '.</p><p>' + c('CH4') + ': 4 domains, no lone pairs, 109.5' + DEG + '.</p><p>' + c('BF3') + ': 3 domains, no lone pairs, 120' + DEG + '.</p><p>' + c('CO2') + ': 2 domains (each double bond is one domain), 180' + DEG + '.</p>'
    },
    {
      id: 's2-2-q020',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.4',
      stem: '<p>The ' + c('H–C–H') + ' bond angle in methane, ' + c('CH4') + ', is 109.5' + DEG + '. The ' + c('H–N–H') + ' bond angle in ammonia, ' + c('NH3') + ', is about 107' + DEG + '.</p><p>Explain why the bond angle in ammonia is smaller.</p>',
      answer: '<p>Both central atoms have four electron domains, so both have a tetrahedral electron domain geometry. In methane all four domains are bonding pairs. In ammonia there are three bonding pairs and one lone pair (non-bonding pair).</p><p>A lone pair repels more strongly than a bonding pair. It pushes the three bonding pairs closer together, so the angle is less than 109.5' + DEG + '.</p>',
      markscheme: [
        'Nitrogen in ammonia has one lone (non-bonding) pair and three bonding pairs, but carbon in methane has four bonding pairs and no lone pair. Accept: both have four electron domains but ammonia has a lone pair.',
        'Lone pairs repel more than bonding pairs (so the bonding pairs are pushed closer together).'
      ],
      hints: [
        'Compare the electron domains around C and around N.',
        'Do all electron domains repel equally?'
      ]
    },
    {
      id: 's2-2-q021',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.4',
      stem: '<p>Methanol has the structural formula ' + c('CH3OH') + '. Which row gives the geometry of the atoms around the carbon atom and around the oxygen atom?</p>' +
        table('Options', ['', 'Around carbon', 'Around oxygen'],
          [['A', 'tetrahedral', 'linear'], ['B', 'tetrahedral', 'tetrahedral'], ['C', 'trigonal pyramidal', 'bent (V-shaped)'], ['D', 'tetrahedral', 'bent (V-shaped)']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      misconception: {
        0: 'Oxygen has two bonding pairs <strong>and two lone pairs</strong>. The lone pairs repel the bonds, so ' + c('C–O–H') + ' is not a straight line.',
        1: 'Tetrahedral is the electron domain geometry around oxygen. The question asks for the geometry of the atoms. Only two atoms are bonded to oxygen.',
        2: 'Carbon is bonded to four atoms (three H and one O) and has no lone pair. Trigonal pyramidal needs three atoms and one lone pair.'
      },
      hints: [
        'Treat each atom in turn as a "central atom".',
        'Carbon: four bonding pairs. Oxygen: two bonding pairs and two lone pairs.'
      ],
      solution: '<p><strong>Carbon</strong> has four bonding pairs (three to H, one to O) and no lone pairs: <strong>tetrahedral</strong>, about 109.5' + DEG + '.</p><p><strong>Oxygen</strong> has four electron domains: two bonding pairs (to C and to H) and two lone pairs. The two atoms make a <strong>bent</strong> shape, like water, with an angle less than 109.5' + DEG + '.</p>'
    },
    {
      id: 's2-2-q022',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.4',
      stem: '<p>In methanal, ' + c('H2C=O') + ', the carbon atom is bonded to two hydrogen atoms and, by a double bond, to one oxygen atom.</p><p>Which is the best prediction of the ' + c('H–C–H') + ' bond angle?</p>',
      options: [
        'Exactly 120' + DEG + ', because there are three electron domains and no lone pairs on carbon.',
        'Slightly less than 120' + DEG + ', because the double bond repels more than the single bonds.',
        'About 109.5' + DEG + ', because carbon forms four bonds.',
        'Slightly more than 120' + DEG + ', because the double bond takes up less space than a single bond.'
      ],
      answer: 1,
      misconception: {
        0: 'Three domains do give angles near 120' + DEG + '. But the three domains are not the same. The double bond has more electron density than a single bond, so the repulsions are not equal.',
        2: 'Count electron domains, not bonds. The double bond is one domain, so carbon has three domains, not four.',
        3: 'A double bond holds four electrons, so it has more electron density than a single bond. It repels more, not less.'
      },
      hints: [
        'How many electron domains are around carbon? A double bond counts as one.',
        'A double bond has four electrons in it. Compare its repulsion with that of a single bond.'
      ],
      solution: '<p>Carbon has <strong>three electron domains</strong> (two single bonds, one double bond). The shape is trigonal planar with angles near 120' + DEG + '.</p><p>The double bond has greater electron density, so it repels the two ' + c('C–H') + ' bonding pairs more strongly. They are pushed together. The ' + c('H–C–H') + ' angle is <strong>slightly less than 120' + DEG + '</strong> (the measured value is about 116' + DEG + ').</p>'
    },

    /* ===== Structure 2.2.5 — bond polarity ===== */
    {
      id: 's2-2-q023',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.5',
      stem: '<p>' + EN + 'H 2.2, C 2.6, N 3.0, O 3.4, Cl 3.2.</p><p>Which bond is the most polar?</p>',
      options: [c('C–H'), c('N–H'), c('O–H'), c('H–Cl')],
      answer: 2,
      misconception: {
        0: 'The difference for ' + c('C–H') + ' is 2.6 − 2.2 = 0.4. This is the smallest difference of the four, so it is the least polar bond here.',
        1: 'The difference for ' + c('N–H') + ' is 3.0 − 2.2 = 0.8. One of the other bonds has a larger difference.',
        3: 'The difference for ' + c('H–Cl') + ' is 3.2 − 2.2 = 1.0. This is large, but one of the other bonds has a larger difference.'
      },
      hints: [
        'Bond polarity comes from the difference in electronegativity of the two atoms.',
        'Subtract the two values for each bond. The largest difference is the most polar bond.'
      ],
      solution: wm([
        'C–H: 2.6 − 2.2 = 0.4',
        'N–H: 3.0 − 2.2 = 0.8',
        'O–H: 3.4 − 2.2 = 1.2',
        'H–Cl: 3.2 − 2.2 = 1.0'
      ]) + '<p>The largest difference is for <strong>' + c('O–H') + '</strong>, so it is the most polar bond.</p>'
    },
    {
      id: 's2-2-q024',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.5',
      stem: '<p>The data booklet gives the electronegativity of carbon as 2.6 and of chlorine as 3.2.</p><p>Calculate the electronegativity difference for a ' + c('C–Cl') + ' bond.</p>',
      answer: 0.6, tolerance: { abs: 0.01 },
      hints: ['Subtract the smaller value from the larger value.'],
      solution: wm(['difference = 3.2 − 2.6 = 0.6']) + '<p>Chlorine has the higher electronegativity, so it attracts the shared pair more strongly. Chlorine is δ− and carbon is δ+.</p><p>Electronegativity has no unit.</p>'
    },
    {
      id: 's2-2-q025',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.5',
      stem: '<p>' + EN + 'H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, Cl 3.2.</p><p>Which row shows the correct partial charges?</p>' +
        table('Options', ['', 'Bond', 'δ+ atom', 'δ− atom'],
          [['A', c('N–H'), 'N', 'H'], ['B', c('C–Cl'), 'C', 'Cl'], ['C', c('O–F'), 'F', 'O'], ['D', c('C–H'), 'C', 'H']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      misconception: {
        0: 'Nitrogen (3.0) is more electronegative than hydrogen (2.2). Nitrogen pulls the shared pair closer, so nitrogen is δ−.',
        2: 'Fluorine (4.0) is more electronegative than oxygen (3.4). In this bond oxygen is the δ+ atom, even though oxygen is usually δ−.',
        3: 'With the booklet values, carbon (2.6) is more electronegative than hydrogen (2.2). Carbon is δ− and hydrogen is δ+.'
      },
      hints: [
        'The more electronegative atom attracts the shared pair more strongly.',
        'The atom that pulls the electrons closer becomes slightly negative, δ−.'
      ],
      solution: '<p>In each bond, the atom with the <strong>higher</strong> electronegativity is δ−.</p><p>' + c('C–Cl') + ': Cl (3.2) is higher than C (2.6), so C is δ+ and Cl is δ−. Row B is correct.</p><p>The correct charges for the other rows: N δ− and H δ+; F δ− and O δ+; C δ− and H δ+.</p>'
    },
    {
      id: 's2-2-q026',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.5',
      stem: '<p>A student writes: "A covalent bond between atoms of two different elements is always polar."</p><p>' + EN + 'H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, S 2.6, Cl 3.2.</p><p>Which bond shows that the student is <strong>not</strong> always right?</p>',
      options: [c('C–H'), c('N–Cl'), c('C–S'), c('O–F')],
      answer: 2,
      misconception: {
        0: 'The difference is 2.6 − 2.2 = 0.4. This is small, but it is not zero. The bond is slightly polar.',
        1: 'The difference is 3.2 − 3.0 = 0.2. This is very small, but it is not zero. Look for a pair of atoms with the same value.',
        3: 'Both atoms are very electronegative, but what matters is the <strong>difference</strong>: 4.0 − 3.4 = 0.6. The bond is polar.'
      },
      hints: [
        'A bond is polar when the two atoms have different electronegativities.',
        'Calculate the difference for each bond. Is any difference zero?'
      ],
      solution: wm([
        'C–H: 2.6 − 2.2 = 0.4',
        'N–Cl: 3.2 − 3.0 = 0.2',
        'C–S: 2.6 − 2.6 = 0.0',
        'O–F: 4.0 − 3.4 = 0.6'
      ]) + '<p>Carbon and sulfur have the same booklet value. The shared pair is attracted equally by both atoms, so the model predicts a <strong>non-polar</strong> ' + c('C–S') + ' bond. Polarity depends on the electronegativity difference, not on the atoms being different elements.</p>'
    },

    /* ===== Structure 2.2.6 — molecular polarity ===== */
    {
      id: 's2-2-q027',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.6',
      stem: '<p>Which molecule is non-polar?</p>',
      options: [c('H2O'), c('NH3'), c('HCl'), c('CO2')],
      answer: 3,
      misconception: {
        0: 'Water is bent. The two ' + c('O–H') + ' bond dipoles point in different directions and do not cancel. Water is polar.',
        1: 'Ammonia is trigonal pyramidal. The three ' + c('N–H') + ' bond dipoles do not cancel. Ammonia is polar.',
        2: c('HCl') + ' has one polar bond and nothing to cancel it. It is polar.'
      },
      hints: [
        'All four molecules have polar bonds. The shape decides if the bond dipoles cancel.',
        'Which molecule is linear with two identical bonds?'
      ],
      solution: '<p>' + c('CO2') + ' is <strong>linear</strong>: ' + c('O=C=O') + '. The two ' + c('C=O') + ' bond dipoles are equal in size and point in opposite directions. They cancel, so the molecule has no net dipole.</p><p>A molecule can have polar bonds and still be non-polar.</p>'
    },
    {
      id: 's2-2-q028',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.2.6',
      stem: '<p>Which of these molecules are polar (have a net dipole)? Select all that apply.</p>',
      options: [c('CCl4'), c('CHCl3'), c('BF3'), c('NF3'), c('CO2')],
      answer: [1, 3],
      misconception: {
        0: c('CCl4') + ' is tetrahedral with four identical ' + c('C–Cl') + ' bonds. The four bond dipoles cancel. Polar bonds do not always make a polar molecule.',
        2: c('BF3') + ' is trigonal planar with three identical ' + c('B–F') + ' bonds at 120' + DEG + '. The three bond dipoles cancel.',
        4: c('CO2') + ' is linear. The two equal ' + c('C=O') + ' bond dipoles point in opposite directions and cancel.'
      },
      hints: [
        'Find the shape of each molecule first.',
        'Bond dipoles cancel when identical bonds are arranged symmetrically around the central atom with no lone pairs.',
        'Check each central atom for lone pairs, and check if all the outer atoms are the same.'
      ],
      solution: '<p><strong>' + c('CHCl3') + '</strong>: tetrahedral, but the four bonds are not all the same (one ' + c('C–H') + ', three ' + c('C–Cl') + '). The bond dipoles do not cancel. Polar.</p><p><strong>' + c('NF3') + '</strong>: nitrogen has a lone pair, so the shape is trigonal pyramidal. The three ' + c('N–F') + ' bond dipoles do not cancel. Polar.</p><p>' + c('CCl4') + ' (tetrahedral), ' + c('BF3') + ' (trigonal planar) and ' + c('CO2') + ' (linear) are symmetrical, so their bond dipoles cancel.</p>'
    },
    {
      id: 's2-2-q029',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.6',
      stem: '<p>The bonds in carbon dioxide, ' + c('CO2') + ', and in water, ' + c('H2O') + ', are all polar.</p><p>Explain why a water molecule is polar but a carbon dioxide molecule is non-polar.</p>',
      answer: '<p>Carbon dioxide is linear, so the two equal bond dipoles point in opposite directions and cancel. There is no net dipole.</p><p>Water is bent (V-shaped), because oxygen has two lone pairs. The two bond dipoles do not cancel, so the molecule has a net dipole.</p>',
      markscheme: [
        'Carbon dioxide is linear / symmetrical, so the bond dipoles cancel (no net dipole).',
        'Water is bent / V-shaped / not symmetrical, so the bond dipoles do not cancel (there is a net dipole).'
      ],
      hints: [
        'The question tells you the bonds are polar. So the answer must be about geometry.',
        'Name the shape of each molecule. Then say what happens to the bond dipoles.'
      ]
    },
    {
      id: 's2-2-q030',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.6',
      stem: '<p>Carbonyl sulfide has the structure ' + c('O=C=S') + '. Like carbon dioxide, it has two electron domains around the carbon atom.</p><p>' + EN + 'C 2.6, O 3.4, S 2.6.</p><p>Which statement about carbonyl sulfide is correct?</p>',
      options: [
        'It is non-polar, because it is linear and the bond dipoles cancel.',
        'It is polar, because the molecule is bent.',
        'It is polar, because the two bonds have different polarities, so the bond dipoles do not cancel.',
        'It is non-polar, because oxygen and sulfur are in the same group.'
      ],
      answer: 2,
      misconception: {
        0: 'It is linear, but linear molecules are non-polar only when the two bond dipoles are <strong>equal</strong> and opposite. Here the two bonds are different.',
        1: 'Carbon has two electron domains and no lone pairs, so the molecule is linear, not bent. It is polar for a different reason.',
        3: 'Elements in the same group can have different electronegativities. Use the values: O is 3.4 and S is 2.6.'
      },
      hints: [
        'Two electron domains: what is the shape?',
        'Calculate the electronegativity difference for ' + c('C=O') + ' and for ' + c('C=S') + '.',
        'Dipoles cancel only if they are equal in size and opposite in direction.'
      ],
      solution: '<p>Shape: two electron domains around carbon, so the molecule is <strong>linear</strong>.</p>' + wm(['C=O: 3.4 − 2.6 = 0.8 (polar)', 'C=S: 2.6 − 2.6 = 0.0 (non-polar)']) + '<p>The ' + c('C=O') + ' bond dipole has nothing equal and opposite to cancel it. The molecule has a <strong>net dipole</strong>, with the oxygen end δ−.</p><p>Molecular polarity depends on both bond polarity and geometry. Always check both.</p>'
    },

    /* ===== Structure 2.2.7 — covalent network structures and allotropes ===== */
    {
      id: 's2-2-q031',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.7',
      stem: '<p>Diamond and silicon have the same type of structure. Which statement describes it?</p>',
      options: [
        'Each atom is covalently bonded to three other atoms in flat layers.',
        'Each atom is covalently bonded to four other atoms in a tetrahedral arrangement, through the whole structure.',
        'Small molecules are held together by weak intermolecular forces.',
        'Positive ions are held in a lattice by delocalized electrons.'
      ],
      answer: 1,
      misconception: {
        0: 'This describes graphite or graphene. In diamond and silicon, each atom uses all four valence electrons in four covalent bonds.',
        2: 'Diamond and silicon are covalent network structures. They do not contain separate small molecules.',
        3: 'This describes a metal. Silicon and diamond have covalent bonds between atoms. There are no ions and no delocalized electrons.'
      },
      hints: [
        'Carbon and silicon are both in group 14. Each atom has four valence electrons.',
        'Four bonding pairs around one atom repel to which shape?'
      ],
      solution: '<p>In diamond and in silicon, every atom forms <strong>four covalent bonds</strong> to four other atoms. The four bonds point to the corners of a tetrahedron (109.5' + DEG + ').</p><p>This pattern repeats in three dimensions. The result is a <strong>covalent network structure</strong>: a giant structure with strong covalent bonds throughout.</p>'
    },
    {
      id: 's2-2-q032',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'multi', marks: 1,
      syllabus: 'Structure 2.2.7',
      stem: '<p>Which of these substances are good conductors of electricity? Select all that apply.</p>',
      options: ['diamond', 'graphite', 'graphene', 'silicon dioxide', 'fullerene, ' + c('C60')],
      answer: [1, 2],
      misconception: {
        0: 'In diamond, each carbon atom uses all four valence electrons in covalent bonds. There are no delocalized electrons, so there is nothing to carry charge.',
        3: 'In silicon dioxide, all the valence electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions.',
        4: 'Electrons are delocalized inside each ' + c('C60') + ' molecule, but they cannot move from one molecule to the next. So solid ' + c('C60') + ' is a poor conductor.'
      },
      hints: [
        'A substance conducts if it has charged particles that are free to move.',
        'In which structures does each carbon atom bond to only three other atoms?'
      ],
      solution: '<p>In <strong>graphite</strong> and <strong>graphene</strong>, each carbon atom forms only three covalent bonds. The fourth valence electron of each atom is <strong>delocalized</strong> across the whole layer. These electrons are free to move, so they carry charge.</p><p>Diamond and silicon dioxide have no delocalized electrons. In ' + c('C60') + ', electrons cannot move between molecules.</p>'
    },
    {
      id: 's2-2-q033',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 2.2.7',
      stem: '<p>Diamond and graphite are allotropes of carbon. Diamond is very hard and does not conduct electricity. Graphite is soft and conducts electricity.</p><p>Explain these differences in terms of structure and bonding.</p>',
      answer: '<p><strong>Diamond:</strong> each carbon atom is covalently bonded to four other carbon atoms in a three-dimensional (tetrahedral) network. The strong covalent bonds in all directions make it hard. All four valence electrons are in bonds, so there are no delocalized electrons and it does not conduct.</p><p><strong>Graphite:</strong> each carbon atom is covalently bonded to three other carbon atoms in layers of hexagons. There are only weak London (dispersion) forces between the layers, so the layers can slide over each other and graphite is soft. Each atom has one delocalized electron, which is free to move along the layers, so graphite conducts.</p>',
      markscheme: [
        'Diamond: each carbon atom bonded to four others / three-dimensional (tetrahedral) covalent network, so it is hard. AND no delocalized electrons / all valence electrons used in bonds, so it does not conduct.',
        'Graphite is soft: layers held together by weak London (dispersion) forces, so the layers can slide over each other. Do not accept "van der Waals" alone or "weak bonds between atoms".',
        'Graphite conducts: each carbon atom bonded to only three others, so there are delocalized electrons that are free to move (along the layers). Do not accept "free ions".'
      ],
      hints: [
        'How many covalent bonds does each carbon atom form in diamond? In graphite?',
        'For hardness, think about what holds the layers of graphite together.',
        'For conductivity, think about the fourth valence electron of each carbon atom in graphite.'
      ]
    },
    {
      id: 's2-2-q034',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 2.2.7',
      stem: '<p>Carbon and silicon are both in group 14. Carbon dioxide, ' + c('CO2') + ', changes from solid to gas at −78 °C. Silicon dioxide, ' + c('SiO2') + ', melts at about 1700 °C.</p><p>Explain this large difference in terms of structure and bonding.</p>',
      answer: '<p>Silicon dioxide has a covalent network structure. Each silicon atom is covalently bonded to four oxygen atoms and each oxygen atom to two silicon atoms, through the whole structure. To melt it, strong covalent bonds must be broken.</p><p>Carbon dioxide is made of small, separate molecules. Only weak London (dispersion) forces between the molecules must be overcome. The covalent bonds inside the molecules do not break.</p><p>Covalent bonds are much stronger than London forces, so much more energy is needed for silicon dioxide.</p>',
      markscheme: [
        'Silicon dioxide is a covalent network (giant covalent) structure, so covalent bonds (between atoms) must be broken.',
        'Carbon dioxide is (simple) molecular, so only London (dispersion) forces between molecules must be overcome. Accept "intermolecular forces". Do not accept covalent bonds breaking in carbon dioxide.',
        'Covalent bonds are (much) stronger than London forces / intermolecular forces, so (much) more energy is needed. Do not accept "stronger bonding" with no bond or force named.'
      ],
      hints: [
        'One of these substances is made of small molecules. The other is a giant structure.',
        'For each substance, say exactly what must be broken or overcome.',
        'Finish with a comparison of strength.'
      ]
    },
    {
      id: 's2-2-q035',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.7',
      stem: '<p>Fullerene, ' + c('C60') + ', turns into a gas at a much lower temperature than diamond. It also dissolves in some non-polar solvents, but diamond does not.</p><p>Which statement explains these observations?</p>',
      options: [
        'The covalent bonds in ' + c('C60') + ' are much weaker than the covalent bonds in diamond.',
        c('C60') + ' is made of separate molecules with weak London (dispersion) forces between them. Diamond is a covalent network.',
        c('C60') + ' has delocalized electrons, and diamond does not.',
        c('C60') + ' is made of layers that can slide over each other.'
      ],
      answer: 1,
      misconception: {
        0: 'The covalent bonds inside a ' + c('C60') + ' molecule are strong, and they do not break when it turns into a gas. Only the forces between the molecules are overcome.',
        2: 'This is true, but it does not explain volatility or solubility. Those properties depend on what holds the particles together.',
        3: 'Layers describe graphite. ' + c('C60') + ' molecules are closed cages of 60 carbon atoms.'
      },
      hints: [
        'The formula ' + c('C60') + ' tells you there are 60 atoms in one molecule.',
        'What must be overcome to separate molecules? What must be broken to separate the atoms in diamond?'
      ],
      solution: '<p>' + c('C60') + ' is a <strong>molecular</strong> allotrope. Each molecule is a cage of 60 carbon atoms, each bonded to three others. Between the molecules there are only weak London (dispersion) forces.</p><p>Little energy is needed to separate the molecules, and a non-polar solvent can separate them too. In diamond, strong covalent bonds through the whole network must be broken.</p>'
    },
    {
      id: 's2-2-q036',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.7',
      stem: '<p>X, Y and Z are three allotropes of carbon: diamond, graphite and fullerene (' + c('C60') + '), in some order.</p>' +
        table('Properties of three allotropes of carbon', ['Allotrope', 'Hardness', 'Electrical conductivity of the solid', 'Solubility in methylbenzene (a non-polar solvent)'],
          [['X', 'soft', 'good', 'insoluble'], ['Y', 'soft', 'poor', 'dissolves slightly and colours the solvent'], ['Z', 'very hard', 'poor', 'insoluble']]) +
        '<p>Which row identifies X and Y?</p>' +
        table('Options', ['', 'X', 'Y'], [['A', 'graphite', 'diamond'], ['B', 'fullerene', 'graphite'], ['C', 'diamond', 'fullerene'], ['D', 'graphite', 'fullerene']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      misconception: {
        0: 'X is right. But diamond is very hard and does not dissolve, because it is a covalent network. Y is soft and dissolves, so Y must be made of separate molecules.',
        1: 'The two are the wrong way round. A substance that dissolves must be made of separate molecules. Graphite is a covalent network and does not dissolve.',
        2: 'Diamond is very hard and a poor conductor. X is soft and a good conductor, so X has delocalized electrons that can move through the whole structure.'
      },
      hints: [
        'Only one allotrope conducts well. Which one has delocalized electrons that can move through the whole structure?',
        'Covalent network structures do not dissolve. Which allotrope is made of separate molecules?'
      ],
      solution: '<p><strong>X</strong> is a good conductor and is soft: <strong>graphite</strong>. It has delocalized electrons in its layers, and weak London forces between layers.</p><p><strong>Y</strong> dissolves in a non-polar solvent, so it is made of separate molecules: <strong>fullerene</strong>. Only London forces between ' + c('C60') + ' molecules must be overcome.</p><p><strong>Z</strong> is very hard, a poor conductor and insoluble: diamond.</p>'
    },

    /* ===== Structure 2.2.8 — intermolecular forces ===== */
    {
      id: 's2-2-q037',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>Which intermolecular force acts between methane molecules, ' + c('CH4') + '?</p>',
      options: [
        'London (dispersion) forces only',
        'dipole–dipole forces and London (dispersion) forces',
        'hydrogen bonding and London (dispersion) forces',
        'covalent bonds'
      ],
      answer: 0,
      misconception: {
        1: 'Dipole–dipole forces need polar molecules. Methane is tetrahedral and symmetrical, so it has no net dipole.',
        2: 'Methane contains hydrogen, but the hydrogen is bonded to carbon. Hydrogen bonding needs H bonded to N, O or F.',
        3: 'Covalent bonds are inside each molecule (between C and H). The question asks about the forces between molecules.'
      },
      hints: [
        'Is a methane molecule polar or non-polar?',
        'Which force exists between all molecules, including non-polar ones?'
      ],
      solution: '<p>Methane is a <strong>non-polar</strong> molecule: it is tetrahedral, so the small ' + c('C–H') + ' bond dipoles cancel.</p><p>Non-polar molecules attract each other only by <strong>London (dispersion) forces</strong>. These forces exist between all molecules.</p>'
    },
    {
      id: 's2-2-q038',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>Which substance has hydrogen bonding between its own molecules?</p>',
      options: [
        'fluoromethane, ' + c('CH3F'),
        'methoxymethane, ' + c('CH3OCH3'),
        'ethanal, ' + c('CH3CHO'),
        'methanamine, ' + c('CH3NH2')
      ],
      answer: 3,
      misconception: {
        0: 'The molecule contains H and F, but every H is bonded to carbon. There is no ' + c('H–F') + ' bond, so there is no hydrogen that can form a hydrogen bond.',
        1: 'The molecule contains H and O, but every H is bonded to carbon. There is no ' + c('O–H') + ' bond. The forces are dipole–dipole and London forces.',
        2: 'The oxygen is double-bonded to carbon. Every H is bonded to carbon. With no ' + c('O–H') + ' bond, ethanal molecules cannot hydrogen-bond to each other.'
      },
      hints: [
        'Hydrogen bonding needs a hydrogen atom covalently bonded to N, O or F.',
        'For each molecule, check which atom each hydrogen is bonded to.'
      ],
      solution: '<p>A hydrogen bond needs <strong>H covalently bonded to a very electronegative atom</strong> (N, O or F). That H is then attracted to a lone pair on N, O or F in a neighbouring molecule.</p><p>Only ' + c('CH3NH2') + ' has such a hydrogen: the two H atoms of the ' + c('NH2') + ' group. In the other three molecules, every H is bonded to carbon.</p>'
    },
    {
      id: 's2-2-q039',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>In IB Chemistry, "van der Waals forces" is an inclusive term. Which of these does it include? Select all that apply.</p>',
      options: [
        'London (dispersion) forces',
        'dipole–induced dipole forces',
        'dipole–dipole forces',
        'hydrogen bonding',
        'covalent bonds'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: 'Hydrogen bonding is an intermolecular force, but the guide does not include it in the term "van der Waals forces".',
        4: 'Covalent bonds hold atoms together inside a molecule. Van der Waals forces act between molecules.'
      },
      hints: [
        'The term covers three intermolecular forces.',
        'One intermolecular force is named separately, because it is stronger and needs H bonded to N, O or F.'
      ],
      solution: '<p>"Van der Waals forces" covers <strong>London (dispersion) forces, dipole–induced dipole forces and dipole–dipole forces</strong>.</p><p>It does not include hydrogen bonding.</p><p>Exam tip: when you mean London forces, write "London (dispersion) forces". Markschemes do not accept "van der Waals" in place of "London".</p>'
    },
    {
      id: 's2-2-q040',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>A small amount of argon gas dissolves in water. Which force acts between an argon atom and a water molecule, in addition to London (dispersion) forces?</p>',
      options: [
        'dipole–dipole forces',
        'dipole–induced dipole forces',
        'hydrogen bonding',
        'ionic bonding'
      ],
      answer: 1,
      misconception: {
        0: 'Dipole–dipole forces need two polar molecules. An argon atom has no permanent dipole.',
        2: 'Hydrogen bonding needs an N, O or F atom on the other particle. Argon is not one of these.',
        3: 'Ionic bonding is the attraction between oppositely charged ions. Argon atoms and water molecules are not ions.'
      },
      hints: [
        'Water is a polar molecule. Argon is a non-polar atom.',
        'A polar molecule can push or pull the electron cloud of a nearby particle.'
      ],
      solution: '<p>Water has a permanent dipole. Argon has none.</p><p>When a water molecule comes close, its dipole distorts the electron cloud of the argon atom. This creates an <strong>induced dipole</strong> in argon. The attraction between the two is a <strong>dipole–induced dipole force</strong>.</p>'
    },
    {
      id: 's2-2-q041',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.8',
      stem: '<p>Liquid ammonia, ' + c('NH3') + ', has hydrogen bonding between its molecules.</p><p>Explain how a hydrogen bond forms between two ammonia molecules.</p>',
      answer: '<p>In ammonia, hydrogen is covalently bonded to nitrogen, which is a very electronegative atom. The ' + c('N–H') + ' bond is polar, so the hydrogen atom is δ+.</p><p>This δ+ hydrogen is attracted to the lone pair on the (δ−) nitrogen atom of a neighbouring ammonia molecule. This attraction is the hydrogen bond.</p>',
      markscheme: [
        'Hydrogen is (covalently) bonded to nitrogen, a (highly) electronegative atom. Accept: the N–H bond is very polar / H is δ+.',
        'This hydrogen is attracted to (the lone pair on) the nitrogen atom of a neighbouring molecule. Accept a labelled diagram. Do not accept a description of the N–H covalent bond as the hydrogen bond.'
      ],
      hints: [
        'A hydrogen bond has two parts. First: which atom is the hydrogen covalently bonded to?',
        'Second: what on the other molecule attracts this hydrogen?'
      ]
    },
    {
      id: 's2-2-q042',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>Two compounds have the same molecular formula, ' + c('C3H9N') + '.</p>' +
        table('Two isomers', ['Compound', 'Structural formula', 'Boiling point / °C'],
          [['P', c('CH3CH2CH2NH2'), '48'], ['Q', c('(CH3)3N'), '3']]) +
        '<p>Which is the best explanation for the higher boiling point of P?</p>',
      options: [
        'P has more electrons than Q, so P has stronger London (dispersion) forces.',
        'P has hydrogen bonding between its molecules. Q has no hydrogen atom bonded to nitrogen, so Q has no hydrogen bonding between its molecules.',
        'The covalent bonds in P are stronger than the covalent bonds in Q.',
        'P is polar and Q is non-polar.'
      ],
      answer: 1,
      misconception: {
        0: 'P and Q have the same molecular formula, so they have the same number of electrons.',
        2: 'Boiling separates molecules from each other. It does not break covalent bonds, so covalent bond strength does not decide the boiling point.',
        3: 'Q is also polar. Its nitrogen atom has a lone pair and three bonding pairs, so the shape around N is trigonal pyramidal and the bond dipoles do not cancel.'
      },
      hints: [
        'Both molecules contain N and H. Look at which atom the H atoms are bonded to.',
        'In Q, the nitrogen atom is bonded to three carbon atoms.'
      ],
      solution: '<p>In <strong>P</strong>, two hydrogen atoms are bonded to nitrogen (' + c('NH2') + '). These δ+ hydrogens are attracted to the lone pair on nitrogen in a neighbouring molecule. P has <strong>hydrogen bonding</strong>.</p><p>In <strong>Q</strong>, nitrogen is bonded to three carbon atoms. Every hydrogen is bonded to carbon. Q molecules attract each other only by dipole–dipole and London forces.</p><p>Hydrogen bonding is stronger, so more energy is needed to separate the molecules of P. Q is also more compact, which makes its London forces a little weaker.</p>'
    },

    /* ===== Structure 2.2.9 — physical properties of covalent substances ===== */
    {
      id: 's2-2-q043',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Pure liquid hexane, ' + c('C6H14') + ', does not conduct electricity. Why?</p>',
      options: [
        'The covalent bonds in hexane are too strong.',
        'Hexane has no ions and no delocalized electrons that are free to move.',
        'The London (dispersion) forces between hexane molecules are too weak.',
        'The electrons in hexane are free to move but the molecules are not.'
      ],
      answer: 1,
      misconception: {
        0: 'Bond strength is not the reason. A substance conducts only if it has charged particles that can move.',
        2: 'Intermolecular forces affect the boiling point. They do not decide electrical conductivity.',
        3: 'The electrons in hexane are held in covalent bonds between two atoms. They are not free to move through the liquid.'
      },
      hints: ['To conduct electricity, a substance needs charged particles that are free to move: ions or delocalized electrons.'],
      solution: '<p>Hexane is made of neutral molecules. All its valence electrons are held in covalent bonds. So there are <strong>no mobile ions and no delocalized electrons</strong> to carry charge.</p><p>This is true for most molecular covalent substances, as solids and as liquids.</p>'
    },
    {
      id: 's2-2-q044',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.9',
      stem: '<p>What is overcome when liquid water boils?</p>',
      options: [
        'the covalent bonds between hydrogen and oxygen atoms',
        'the hydrogen bonds between water molecules',
        'the ionic bonds between water molecules',
        'the attraction between the nuclei and the electrons in each atom'
      ],
      answer: 1,
      misconception: {
        0: 'If the ' + c('O–H') + ' covalent bonds broke, the water would become hydrogen and oxygen. Steam is still made of ' + c('H2O') + ' molecules.',
        2: 'Water molecules are neutral. There are no ions in pure water to form ionic bonds between molecules.',
        3: 'Boiling does not remove electrons from atoms. It only separates whole molecules from each other.'
      },
      hints: [
        'Steam is still ' + c('H2O') + '. What has changed?',
        'Boiling separates molecules from each other.'
      ],
      solution: '<p>Boiling separates the molecules from each other. The molecules stay whole.</p><p>So boiling overcomes the <strong>intermolecular forces</strong>. In water the strongest of these is <strong>hydrogen bonding</strong>. The ' + c('O–H') + ' covalent bonds inside each molecule do not break.</p>'
    },
    {
      id: 's2-2-q045',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Ethanol and methoxymethane have the same molecular formula, ' + c('C2H6O') + ', and the same molar mass.</p>' +
        table('Two isomers', ['Compound', 'Structural formula', 'Boiling point / °C'],
          [['ethanol', c('CH3CH2OH'), '78'], ['methoxymethane', c('CH3OCH3'), '−25']]) +
        '<p>Explain why ethanol has the higher boiling point.</p>',
      answer: '<p>Ethanol has hydrogen bonding between its molecules, because it has a hydrogen atom bonded to oxygen (' + c('O–H') + '). Methoxymethane has no ' + c('O–H') + ' bond, so it has only dipole–dipole forces (and London forces) between its molecules.</p><p>Hydrogen bonding is stronger than dipole–dipole forces, so more energy is needed to separate the ethanol molecules.</p>',
      markscheme: [
        'Ethanol has hydrogen bonding (between molecules) AND methoxymethane has dipole–dipole forces (and London forces) only / no hydrogen bonding.',
        'Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules.'
      ],
      hints: [
        'Name the strongest intermolecular force in <strong>each</strong> substance.',
        'Then say which force is stronger. Link this to the energy needed.'
      ]
    },
    {
      id: 's2-2-q046',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Put these four alkanes in order of boiling point. Put the <strong>lowest</strong> boiling point first.</p>',
      options: [
        '2,2-dimethylpropane, ' + c('C(CH3)4'),
        '2-methylbutane, ' + c('(CH3)2CHCH2CH3'),
        'pentane, ' + c('CH3CH2CH2CH2CH3'),
        'hexane, ' + c('CH3CH2CH2CH2CH2CH3')
      ],
      hints: [
        'All four molecules are non-polar. Which intermolecular force acts between them?',
        'Three of them are isomers, ' + c('C5H12') + '. The fourth has more electrons.',
        'A more branched molecule is more compact. It has less surface area in contact with its neighbours.'
      ],
      solution: '<p>All four are non-polar, so only <strong>London (dispersion) forces</strong> act between the molecules.</p><p>The three ' + c('C5H12') + ' isomers have the same number of electrons. More branching makes a molecule more compact, with less surface contact between molecules, so the London forces are weaker.</p><p>Hexane has more electrons and a longer chain, so it has the strongest London forces.</p><p>Boiling points: 2,2-dimethylpropane 10 °C; 2-methylbutane 28 °C; pentane 36 °C; hexane 69 °C.</p>'
    },
    {
      id: 's2-2-q047',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Three liquids have similar molar masses.</p>' +
        table('Three compounds of similar molar mass', ['Compound', 'Structural formula', 'Molar mass / <span class="unit">g mol-1</span>'],
          [['butane', c('CH3CH2CH2CH3'), '58'], ['propanone', c('CH3COCH3'), '58'], ['propan-1-ol', c('CH3CH2CH2OH'), '60']]) +
        '<p>Which compound is the most volatile, and why?</p>',
      options: [
        'Butane, because it has only London (dispersion) forces between its molecules.',
        'Butane, because its covalent bonds are the weakest.',
        'Propan-1-ol, because it has hydrogen bonding between its molecules.',
        'Propanone, because it has dipole–dipole forces between its molecules.'
      ],
      answer: 0,
      misconception: {
        1: 'The compound is right but the reason is wrong. Evaporation and boiling do not break covalent bonds. They overcome intermolecular forces.',
        2: 'Hydrogen bonding is the strongest of these forces. Strong intermolecular forces make a substance <strong>less</strong> volatile.',
        3: 'Dipole–dipole forces are stronger than London forces alone (for similar molar mass). So propanone is less volatile than the compound with London forces only.'
      },
      hints: [
        'A volatile substance turns into a gas easily. It has a low boiling point.',
        'Find the strongest intermolecular force in each compound.',
        'For similar molar mass: London forces < dipole–dipole forces < hydrogen bonding.'
      ],
      solution: '<p><strong>Volatile</strong> means the substance vaporizes easily. The most volatile compound has the weakest intermolecular forces.</p><p>Butane is non-polar: London forces only. Propanone is polar (' + c('C=O') + '): dipole–dipole forces. Propan-1-ol has an ' + c('O–H') + ' group: hydrogen bonding.</p><p>So <strong>butane</strong> is the most volatile. The boiling points agree: butane −1 °C, propanone 56 °C, propan-1-ol 97 °C.</p>'
    },
    {
      id: 's2-2-q048',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Ethanol, ' + c('CH3CH2OH') + ', mixes with water in all proportions. Hexan-1-ol, ' + c('CH3(CH2)5OH') + ', is only slightly soluble in water.</p><p>Explain why ethanol is soluble in water, and why hexan-1-ol is much less soluble.</p>',
      answer: '<p>Ethanol has a hydroxyl (' + c('O–H') + ') group, so it can form hydrogen bonds with water molecules. This is why it dissolves.</p><p>Hexan-1-ol also has a hydroxyl group, but it has a much longer non-polar hydrocarbon chain. The chain cannot form hydrogen bonds with water (it attracts water only by weak London forces), so the molecule as a whole is much less soluble.</p>',
      markscheme: [
        'Ethanol / the hydroxyl (OH) group forms hydrogen bonds with water (molecules).',
        'Hexan-1-ol has a longer non-polar hydrocarbon chain, which cannot form hydrogen bonds with water. Accept: a larger part of the molecule is non-polar.'
      ],
      hints: [
        'Which part of each molecule can form hydrogen bonds with water?',
        'What is different about the rest of the hexan-1-ol molecule?'
      ]
    },
    {
      id: 's2-2-q049',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Bromine, ' + c('Br2') + ', and iodine monochloride, ' + c('ICl') + ', have almost the same molar mass, and each molecule has 70 electrons.</p>' +
        table('Two substances with 70 electrons in each molecule', ['Substance', 'Molar mass / <span class="unit">g mol-1</span>', 'Boiling point / °C'],
          [[c('Br2'), '160', '59'], [c('ICl'), '162', '97']]) +
        '<p>' + EN + 'Cl 3.2, Br 3.0, I 2.7.</p><p>Explain why iodine monochloride has the higher boiling point.</p>',
      answer: '<p>Both molecules have the same number of electrons, so their London (dispersion) forces are similar in strength.</p><p>' + c('Br2') + ' is non-polar, because the two atoms are the same. ' + c('ICl') + ' is polar, because chlorine is more electronegative than iodine (3.2 and 2.7). So ' + c('ICl') + ' also has dipole–dipole forces between its molecules.</p><p>The total intermolecular forces in ' + c('ICl') + ' are stronger, so more energy is needed to separate its molecules.</p>',
      markscheme: [
        'London (dispersion) forces are similar in both, because the molecules have the same number of electrons / similar molar mass.',
        'ICl is polar (Cl is more electronegative than I / electronegativity difference of 0.5) but Br<sub>2</sub> is non-polar, so ICl (also) has dipole–dipole forces.',
        'The intermolecular forces in ICl are stronger (overall), so more energy is needed to separate the molecules. Do not accept any reference to breaking covalent bonds.'
      ],
      hints: [
        'The question gives the number of electrons. Which intermolecular force depends on this?',
        'Use the electronegativity values. Is each molecule polar?',
        'Finish by comparing the total strength of the forces and the energy needed.'
      ]
    },
    {
      id: 's2-2-q050',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'short', marks: 4,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Hydrogen sulfide, ' + c('H2S') + ', has a higher molar mass than water, but a much lower boiling point.</p>' +
        table('Two hydrides of group 16', ['Substance', 'Molar mass / <span class="unit">g mol-1</span>', 'Boiling point / °C'],
          [[c('H2S'), '34', '−60'], [c('H2O'), '18', '100']]) +
        '<p>' + EN + 'H 2.2, O 3.4, S 2.6.</p><p>(a) Deduce the molecular geometry of ' + c('H2S') + '. Give a reason.</p><p>(b) Deduce, with a reason, if the ' + c('H2S') + ' molecule is polar.</p><p>(c) Explain why ' + c('H2S') + ' has a lower boiling point than water.</p>',
      answer: '<p>(a) Bent (V-shaped). Sulfur has four electron domains: two bonding pairs and two lone pairs.</p><p>(b) Polar. The ' + c('S–H') + ' bonds are polar (difference 2.6 − 2.2 = 0.4), and because the molecule is bent the bond dipoles do not cancel.</p><p>(c) ' + c('H2S') + ' has dipole–dipole forces and London forces between its molecules. Water has hydrogen bonding, because H is bonded to the very electronegative O atom. Hydrogen bonding is stronger, so more energy is needed to separate water molecules. This outweighs the stronger London forces in ' + c('H2S') + '.</p>',
      markscheme: [
        '(a) Bent / V-shaped / angular AND two bonding pairs and two lone (non-bonding) pairs on sulfur / four electron domains with two lone pairs.',
        '(b) Polar, because the bond dipoles do not cancel / the molecule is not symmetrical (bent). Allow follow-through from the shape in (a).',
        '(c) H<sub>2</sub>S has dipole–dipole forces (and London forces) AND water has hydrogen bonding.',
        '(c) Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules of water.'
      ],
      hints: [
        '(a) Sulfur is in group 16, like oxygen. Count its bonding pairs and lone pairs.',
        '(b) Check two things: are the bonds polar, and do the bond dipoles cancel?',
        '(c) Name the strongest intermolecular force in each substance. Then compare their strengths.'
      ]
    },
    {
      id: 's2-2-q051',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Ethanal, ' + c('CH3CHO') + ', and propane, ' + c('CH3CH2CH3') + ', both have a molar mass of 44 <span class="unit">g mol-1</span>. Ethanal boils at 20 °C and propane boils at −42 °C.</p><p>A student explains: "Ethanal has the higher boiling point because it contains hydrogen and oxygen, so it forms hydrogen bonds between its molecules. Propane has only London (dispersion) forces."</p><p>Which statement correctly identifies the error in this explanation?</p>',
      options: [
        'There is no error.',
        'Ethanal is non-polar, so it also has only London (dispersion) forces.',
        'In ethanal every hydrogen atom is bonded to carbon, so there is no hydrogen bonding between ethanal molecules. The extra force is dipole–dipole.',
        'Boiling breaks the ' + c('C=O') + ' bond in ethanal, and this bond is stronger than the bonds in propane.'
      ],
      answer: 2,
      misconception: {
        0: 'Check the structure of ethanal: ' + c('CH3–CH=O') + '. Containing H and O is not enough. Which atom is each H bonded to?',
        1: 'Ethanal is polar. The ' + c('C=O') + ' bond has an electronegativity difference of 3.4 − 2.6 = 0.8, and its dipole is not cancelled.',
        3: 'Boiling does not break covalent bonds. It only overcomes the forces between molecules.'
      },
      hints: [
        'Draw ethanal. Is any hydrogen atom bonded to oxygen?',
        'Ethanal has a polar ' + c('C=O') + ' bond. Which intermolecular force do polar molecules have?'
      ],
      solution: '<p>Hydrogen bonding needs H <strong>covalently bonded to</strong> N, O or F. In ethanal the oxygen is double-bonded to carbon and all four hydrogens are bonded to carbon. So ethanal molecules do not hydrogen-bond to each other.</p><p>Ethanal is polar, so it has <strong>dipole–dipole forces</strong> as well as London forces. Propane is non-polar and has London forces only. Dipole–dipole forces are stronger than London forces alone (for similar molar mass), so ethanal has the higher boiling point.</p>'
    },

    /* ===== Structure 2.2.10 — chromatography and RF ===== */
    {
      id: 's2-2-q052',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>How is the retardation factor, ' + RF + ', of a spot calculated?</p>',
      options: [
        'distance moved by the solvent front ÷ distance moved by the spot',
        'distance moved by the spot ÷ distance moved by the solvent front, both measured from the baseline',
        'distance moved by the spot ÷ total length of the paper',
        'distance moved by the solvent front − distance moved by the spot'
      ],
      answer: 1,
      misconception: {
        0: 'This is upside down. It would give a value greater than 1. A spot cannot move further than the solvent, so ' + RF + ' is never more than 1.',
        2: 'Use the distance the solvent moved, not the length of the paper. The solvent front does not usually reach the top of the paper.',
        3: RF + ' is a ratio, not a difference. It has no unit.'
      },
      hints: [
        'The value is always between 0 and 1.',
        'Both distances start at the baseline, where the sample was placed.'
      ],
      solution: '<p>' + RF + ' = distance moved by the spot ÷ distance moved by the solvent front.</p><p>Measure both distances <strong>from the baseline</strong>. The value has no unit and lies between 0 and 1.</p>'
    },
    {
      id: 's2-2-q053',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>In a paper chromatography experiment, a spot of dye moves 3.6 cm from the baseline. The solvent front moves 8.0 cm from the baseline.</p><p>Calculate the ' + RF + ' value of the dye. Give your answer to 2 significant figures.</p>',
      answer: 0.45, tolerance: { abs: 0.005 }, sigfigs: 2,
      hints: [
        RF + ' = distance moved by the spot ÷ distance moved by the solvent front.',
        'The answer must be less than 1 and has no unit.'
      ],
      solution: wm([RF + ' = 3.6 cm ÷ 8.0 cm = 0.45']) + '<p>The units cancel, so ' + RF + ' has no unit.</p>'
    },
    {
      id: 's2-2-q054',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>The diagram shows a paper chromatogram of one dye. A ruler is placed next to the paper. All the labelled distances are measured in cm from the <strong>bottom edge</strong> of the paper.</p>' +
        chromatogram({ paper: 12, front: 10.5, spot: 6.9, base: 1.5 }) +
        '<p>Calculate the ' + RF + ' value of the dye. Give your answer to 2 significant figures.</p>',
      answer: 0.6, tolerance: { abs: 0.01 }, sigfigs: 2, answerDisplay: '0.60',
      hints: [
        'Both distances in the ' + RF + ' formula start at the baseline, not at the bottom edge.',
        'Distance moved by the spot = 6.9 − 1.5. Find the distance moved by the solvent front in the same way.',
        'You do not need the position of the top of the paper.'
      ],
      solution: wm([
        'distance moved by spot = 6.9 − 1.5 = 5.4 cm',
        'distance moved by solvent front = 10.5 − 1.5 = 9.0 cm',
        RF + ' = 5.4 cm ÷ 9.0 cm = 0.60'
      ]) + '<p>Common slips: 6.9 ÷ 10.5 = 0.66 (measured from the bottom edge) and 6.9 ÷ 12.0 = 0.58 (used the top of the paper).</p>'
    },
    {
      id: 's2-2-q055',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>Two compounds, P and Q, are separated by thin layer chromatography (TLC). The stationary phase is silica, which is polar. The mobile phase is hexane, which is non-polar.</p><p>P and Q have the same structure, except that P has a hydroxyl (' + c('–OH') + ') group where Q has a hydrogen atom.</p><p>The two spots have ' + RF + ' values of 0.21 and 0.74. Which row is correct?</p>' +
        table('Options', ['', RF + ' of P', 'Reason'],
          [['A', '0.21', 'P is more strongly attracted to the polar stationary phase'],
           ['B', '0.21', 'P is more strongly attracted to the non-polar mobile phase'],
           ['C', '0.74', 'P is more strongly attracted to the polar stationary phase'],
           ['D', '0.74', 'P is more strongly attracted to the non-polar mobile phase']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      misconception: {
        1: 'The ' + RF + ' value is right, but the reason is wrong. A compound that is strongly attracted to the mobile phase is carried further and has a high ' + RF + '. Also, P is the more polar compound, so it is less attracted to hexane than Q is.',
        2: 'The reason is right, but it leads to the other value. A compound that is strongly attracted to the stationary phase is held back, so it moves a short distance.',
        3: 'The polarity logic is reversed. The hydroxyl group makes P more polar (it can hydrogen-bond to silica), so P is attracted more to the stationary phase, not to hexane.'
      },
      hints: [
        'Which compound is more polar, P or Q?',
        'A component that is strongly attracted to the stationary phase spends more time not moving.',
        'A small ' + RF + ' means the spot moved a short distance.'
      ],
      solution: '<p>The ' + c('–OH') + ' group makes <strong>P more polar</strong> than Q. P can form hydrogen bonds with the polar silica.</p><p>So P is more strongly attracted to the <strong>stationary phase</strong>. It is held back and moves a shorter distance: ' + RF + ' = <strong>0.21</strong>.</p><p>Q is less polar. It is more attracted to the non-polar mobile phase and is carried further: ' + RF + ' = 0.74.</p>'
    },
    {
      id: 's2-2-q056',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A mixture of two dyes is separated by paper chromatography. One dye moves further up the paper than the other.</p><p>Explain why the two dyes separate.</p>',
      answer: '<p>The two dyes have different relative attractions (intermolecular forces) to the mobile phase and to the stationary phase.</p><p>The dye that is more strongly attracted to (more soluble in) the mobile phase, and less strongly attracted to the stationary phase, is carried further by the solvent. It has the higher ' + RF + ' value.</p>',
      markscheme: [
        'The dyes have different (relative) attractions / intermolecular forces to the mobile phase and the stationary phase. Accept: different solubility in the solvent / different adsorption on the stationary phase.',
        'The dye that is more attracted to (more soluble in) the mobile phase / less attracted to the stationary phase moves further (has the higher R<sub>F</sub>).'
      ],
      hints: [
        'Chromatography has two phases. Name them.',
        'Each dye is attracted to both phases. What decides how far a dye moves?'
      ]
    },
    {
      id: 's2-2-q057',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'multi', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A food colouring, M, is tested by paper chromatography. The solvent front moves 10.0 cm from the baseline. M gives three spots, at 2.0 cm, 5.5 cm and 8.0 cm from the baseline.</p><p>Five pure dyes are tested on a <strong>second</strong> piece of the same paper with the same solvent. On this paper, the solvent front moves 8.0 cm from the baseline.</p>' +
        table('Second chromatogram (solvent front at 8.0 cm)', ['Pure dye', 'Distance moved by spot / cm'],
          [['A', '1.6'], ['B', '4.4'], ['C', '5.5'], ['D', '6.4'], ['E', '2.0']]) +
        '<p>Which dyes could be present in M? Select all that apply.</p>',
      options: ['A', 'B', 'C', 'D', 'E'],
      answer: [0, 1, 3],
      misconception: {
        2: 'Dye C moved 5.5 cm, the same distance as one spot of M. But the solvent moved a different distance on the two papers. Compare ' + RF + ' values: C has 5.5 ÷ 8.0 = 0.69, and no spot of M has this value.',
        4: 'Dye E moved 2.0 cm, the same distance as one spot of M. But its ' + RF + ' is 2.0 ÷ 8.0 = 0.25, and the spot of M has 2.0 ÷ 10.0 = 0.20. Compare ' + RF + ' values, not distances.'
      },
      hints: [
        'The solvent fronts moved different distances, so you cannot compare distances directly.',
        'Calculate ' + RF + ' for each spot of M (divide by 10.0) and for each pure dye (divide by 8.0).',
        'The same dye has the same ' + RF + ' under the same conditions.'
      ],
      solution: '<p>Spots of M (solvent front 10.0 cm):</p>' + wm(['2.0 ÷ 10.0 = 0.20', '5.5 ÷ 10.0 = 0.55', '8.0 ÷ 10.0 = 0.80']) +
        '<p>Pure dyes (solvent front 8.0 cm):</p>' + wm(['A: 1.6 ÷ 8.0 = 0.20', 'B: 4.4 ÷ 8.0 = 0.55', 'C: 5.5 ÷ 8.0 = 0.69', 'D: 6.4 ÷ 8.0 = 0.80', 'E: 2.0 ÷ 8.0 = 0.25']) +
        '<p>The ' + RF + ' values of <strong>A, B and D</strong> match the three spots of M. C and E moved the same <em>distances</em> as spots of M, but their ' + RF + ' values do not match.</p>'
    },
    {
      id: 's2-2-q058',
      topic: 's2-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>Under certain conditions, a compound has an ' + RF + ' value of 0.62.</p><p>A student draws the baseline 2.0 cm above the bottom edge of a TLC plate. The solvent front stops 14.0 cm above the bottom edge.</p><p>How far above the <strong>bottom edge</strong> of the plate will the centre of the spot be? Give your answer to 2 significant figures.</p>',
      answer: 9.44, tolerance: { abs: 0.05 }, sigfigs: [2, 3], unit: 'cm', answerDisplay: '9.4',
      hints: [
        'First find the distance the solvent front moved from the baseline.',
        'Rearrange: distance moved by the spot = ' + RF + ' × distance moved by the solvent front.',
        'That distance starts at the baseline. The question asks for the distance from the bottom edge.'
      ],
      solution: wm([
        'distance moved by solvent front = 14.0 − 2.0 = 12.0 cm',
        'distance moved by spot = 0.62 × 12.0 cm = 7.44 cm',
        'height above bottom edge = 7.44 + 2.0 = 9.44 cm'
      ]) + '<p>To 2 significant figures this is <strong>9.4 cm</strong>.</p><p>Common slips: 0.62 × 14.0 = 8.7 cm (used the bottom edge for the solvent distance) and 7.4 cm (forgot to add the 2.0 cm).</p>'
    },

    /* ===== Added by the audit: more exam-tier coverage for 2.2.2, 2.2.3, 2.2.5, 2.2.6 and 2.2.8 ===== */
    {
      id: 's2-2-q059',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.2',
      stem: '<p>Which carbon–carbon bond is the <strong>longest</strong> and the <strong>weakest</strong>?</p>',
      options: [
        'the single bond, ' + c('C–C'),
        'the double bond, ' + c('C=C'),
        'the triple bond, ' + c('C≡C'),
        'They all have the same length and strength.'
      ],
      answer: 0,
      misconception: {
        1: 'A double bond has two shared pairs. It is shorter and stronger than a single bond, which has one shared pair.',
        2: 'A triple bond has three shared pairs. The nuclei are attracted most strongly to the shared electrons, so this is the shortest and strongest bond.',
        3: 'The number of shared pairs is different in each bond, so the attraction between the nuclei and the shared electrons is different too.'
      },
      hints: [
        'Single, double and triple bonds have one, two and three shared pairs.',
        'Fewer shared pairs means a weaker attraction between the two nuclei and the shared electrons.'
      ],
      solution: '<p>The single bond has only one shared pair. The attraction between the two nuclei and the shared electrons is weakest, so the nuclei are furthest apart.</p><p>Data booklet values: ' + c('C–C') + ' 154 pm and 346 kJ mol<sup>−1</sup>; ' + c('C=C') + ' 134 pm and 614 kJ mol<sup>−1</sup>; ' + c('C≡C') + ' 120 pm and 839 kJ mol<sup>−1</sup>.</p>'
    },
    {
      id: 's2-2-q060',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 2.2.2',
      stem: '<p>Three molecules each contain a bond between two nitrogen atoms. In all three, every nitrogen atom has 8 electrons around it and every hydrogen atom forms one bond.</p><p>Put the molecules in order of the length of the nitrogen–nitrogen bond. Put the <strong>shortest</strong> bond first.</p>',
      options: ['nitrogen, ' + c('N2'), 'diazene, ' + c('N2H2'), 'hydrazine, ' + c('N2H4')],
      hints: [
        'Deduce the Lewis formula of each molecule. Count the valence electrons first: 10, 12 and 14.',
        'How many pairs are shared between the two nitrogen atoms in each molecule?',
        'More shared pairs make a shorter bond.'
      ],
      solution: '<p>' + c('N2') + ': 10 valence electrons. The atoms share three pairs: ' + c('N≡N') + '.</p><p>' + c('N2H2') + ': 12 valence electrons. Each N has one bond to H and one lone pair, so the atoms share two pairs: ' + c('HN=NH') + '.</p><p>' + c('N2H4') + ': 14 valence electrons. Each N has two bonds to H and one lone pair, so the atoms share one pair: ' + c('H2N–NH2') + '.</p><p>More shared pairs give a greater attraction between the nuclei and the shared electrons, so the bond is shorter. Data booklet lengths: ' + c('N≡N') + ' 110 pm, ' + c('N=N') + ' 125 pm, ' + c('N–N') + ' 146 pm.</p>'
    },
    {
      id: 's2-2-q061',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.3',
      stem: '<p>A water molecule bonds to a hydrogen ion to form the hydronium ion.</p><p>' + c('H2O + H+ -> H3O+') + '</p><p>Where do the two electrons in the new ' + c('O–H') + ' bond come from?</p>',
      options: [
        'Both come from the oxygen atom.',
        'Both come from the hydrogen ion.',
        'One comes from the oxygen atom and one comes from the hydrogen ion.',
        'Both come from a hydrogen atom of the water molecule.'
      ],
      answer: 0,
      misconception: {
        1: 'A hydrogen ion, ' + c('H+') + ', has no electrons at all. It can only accept a pair.',
        2: 'This is how an ordinary covalent bond forms. But ' + c('H+') + ' has no electron to give.',
        3: 'The hydrogen atoms in water have already used their one electron in an ' + c('O–H') + ' bond. They have no lone pair to give.'
      },
      hints: [
        'How many electrons does ' + c('H+') + ' have?',
        'Which atom in a water molecule has lone pairs?'
      ],
      solution: '<p>' + c('H+') + ' has no electrons. Oxygen in water has two lone pairs. Oxygen shares one lone pair with ' + c('H+') + '.</p><p>Both electrons of the shared pair come from the same atom, so the new bond is a <strong>coordination bond</strong>. Once formed, it is the same as the other two ' + c('O–H') + ' bonds.</p>'
    },
    {
      id: 's2-2-q062',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.3',
      stem: '<p>In a carbon monoxide molecule, ' + c('CO') + ', the two atoms are joined by a triple bond. Each atom also has one lone pair.</p><p>A carbon atom has 4 valence electrons and an oxygen atom has 6.</p><p>How many of the six shared electrons came from the <strong>oxygen</strong> atom?</p>',
      answer: 4, tolerance: { abs: 0 },
      hints: [
        'Each atom keeps one lone pair. That is 2 of its valence electrons.',
        'The electrons that an atom does not keep in a lone pair are the ones it gives to the bond.'
      ],
      solution: wm([
        'oxygen: 6 valence electrons − 2 in its lone pair = 4 electrons in the bond',
        'carbon: 4 valence electrons − 2 in its lone pair = 2 electrons in the bond',
        'check: 4 + 2 = 6 shared electrons = 3 shared pairs'
      ]) + '<p>Carbon gives one electron to each of two shared pairs. Oxygen gives one electron to each of these, and <strong>both</strong> electrons of the third pair. So one of the three shared pairs is a coordination bond from oxygen to carbon.</p>'
    },
    {
      id: 's2-2-q063',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.5',
      stem: '<p>' + EN + 'H 2.2, F 4.0, Cl 3.2, Br 3.0.</p><p>Which list shows the bonds in order of <strong>increasing</strong> polarity?</p>',
      options: [
        c('H–F') + ' &lt; ' + c('H–Cl') + ' &lt; ' + c('H–Br'),
        c('H–Br') + ' &lt; ' + c('H–Cl') + ' &lt; ' + c('H–F'),
        c('H–Cl') + ' &lt; ' + c('H–Br') + ' &lt; ' + c('H–F'),
        c('H–Br') + ' &lt; ' + c('H–F') + ' &lt; ' + c('H–Cl')
      ],
      answer: 1,
      misconception: {
        0: 'This is the order of decreasing polarity. The question asks for increasing polarity, so the smallest difference comes first.',
        2: 'Compare the first two: H–Cl has a difference of 1.0 and H–Br has 0.8. The bond with the smaller difference is less polar.',
        3: 'H–F has the largest difference (1.8), so it is the most polar bond. It must come last.'
      },
      hints: [
        'Bond polarity depends on the difference in electronegativity.',
        'Calculate the difference for each bond. The smallest difference is the least polar bond.'
      ],
      solution: wm([
        'H–Br: 3.0 − 2.2 = 0.8',
        'H–Cl: 3.2 − 2.2 = 1.0',
        'H–F: 4.0 − 2.2 = 1.8'
      ]) + '<p>A larger difference in electronegativity means a more polar bond. So the order is ' + c('H–Br') + ' &lt; ' + c('H–Cl') + ' &lt; ' + c('H–F') + '.</p>'
    },
    {
      id: 's2-2-q064',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.5',
      stem: '<p>' + EN + 'C 2.6, F 4.0.</p><p>Deduce, giving a reason, the polarity of the ' + c('C–F') + ' bond. Show the partial charges on the two atoms.</p>',
      answer: '<p>The bond is polar, because fluorine is more electronegative than carbon (4.0 − 2.6 = 1.4). Fluorine attracts the shared pair of electrons more strongly.</p><p>Partial charges: carbon is δ+ and fluorine is δ−.</p>',
      markscheme: [
        'The bond is polar because the two atoms have different electronegativities / fluorine is more electronegative than carbon (difference of 1.4).',
        'C is δ+ AND F is δ−. Both partial charges are needed. Do not accept full charges, + and −.'
      ],
      hints: [
        'Compare the two electronegativity values.',
        'The atom that attracts the shared pair more strongly becomes slightly negative.'
      ]
    },
    {
      id: 's2-2-q065',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.6',
      stem: '<p>Which two things decide if a molecule is polar?</p>',
      options: [
        'the polarity of its bonds and its molecular geometry',
        'the polarity of its bonds only',
        'its molar mass and its molecular geometry',
        'the number of atoms and the number of bonds'
      ],
      answer: 0,
      misconception: {
        1: 'Polar bonds are not enough. In a symmetrical molecule such as ' + c('CO2') + ', the bond dipoles cancel and the molecule is non-polar.',
        2: 'Molar mass affects the strength of London forces. It does not decide if the molecule has a net dipole.',
        3: 'Counting atoms and bonds does not tell you how charge is spread. ' + c('CO2') + ' and ' + c('H2O') + ' both have three atoms and two bonds, but only water is polar.'
      },
      hints: [
        'A molecule is polar if its bond dipoles do not cancel.',
        'What decides the size of each bond dipole? What decides the directions in which they point?'
      ],
      solution: '<p>Molecular polarity depends on both <strong>bond polarity</strong> and <strong>molecular geometry</strong>.</p><p>The bonds must be polar, so that there are bond dipoles. And the shape must be one in which the bond dipoles do not cancel.</p>'
    },
    {
      id: 's2-2-q066',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.6',
      stem: '<p>In a molecule of sulfur dioxide, ' + c('SO2') + ', the sulfur atom is bonded to two oxygen atoms and has one lone pair. The molecular geometry is bent (V-shaped).</p><p>' + EN + 'O 3.4, S 2.6.</p><p>Explain why the sulfur dioxide molecule is polar.</p>',
      answer: '<p>The sulfur–oxygen bonds are polar, because oxygen is more electronegative than sulfur (3.4 − 2.6 = 0.8).</p><p>The molecule is bent, so the two bond dipoles do not point in opposite directions. They do not cancel, and the molecule has a net dipole.</p>',
      markscheme: [
        'The (S–O) bonds are polar / there is an electronegativity difference between S and O.',
        'The bond dipoles do not cancel / there is a net dipole, because the molecule is bent (not symmetrical).'
      ],
      hints: [
        'First mark: are the bonds polar? Use the electronegativity values.',
        'Second mark: what does the shape do to the two bond dipoles?'
      ]
    },
    {
      id: 's2-2-q067',
      topic: 's2-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>Which intermolecular force acts between the molecules of <strong>every</strong> molecular substance?</p>',
      options: [
        'hydrogen bonding',
        'dipole–dipole forces',
        'London (dispersion) forces',
        'dipole–induced dipole forces'
      ],
      answer: 2,
      misconception: {
        0: 'Hydrogen bonding needs a hydrogen atom bonded to a very electronegative atom such as N, O or F. Most molecules do not have one.',
        1: 'Dipole–dipole forces act only between polar molecules. Non-polar molecules such as ' + c('CH4') + ' do not have them.',
        3: 'This force needs one polar molecule and one non-polar molecule. It does not act in a pure non-polar substance.'
      },
      hints: [
        'Think of a non-polar substance such as methane. It can still be turned into a liquid.',
        'Which force needs only moving electrons?'
      ],
      solution: '<p>All molecules contain electrons. The electrons are always moving, so every molecule can have a temporary dipole that induces a dipole in its neighbour.</p><p>So <strong>London (dispersion) forces</strong> act between all molecules, polar and non-polar.</p>'
    },
    {
      id: 's2-2-q068',
      topic: 's2-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.4',
      stem: '<p>In phosphorus trichloride, ' + c('PCl3') + ', the phosphorus atom has three bonding pairs and one lone pair.</p><p>Predict a value for the ' + c('Cl–P–Cl') + ' bond angle.</p>',
      answer: 103.5, tolerance: { abs: 3.5 }, unit: DEG,
      answerDisplay: 'any value from 100' + DEG + ' to 107' + DEG,
      hints: [
        'Four electron domains give a tetrahedral electron domain geometry. What is the tetrahedral angle?',
        'A lone pair repels more than a bonding pair. Is the angle larger or smaller than the tetrahedral angle?'
      ],
      solution: '<p>Phosphorus has four electron domains, so the electron domain geometry is tetrahedral (109.5' + DEG + '). One domain is a lone pair, so the molecular geometry is trigonal pyramidal.</p><p>The lone pair repels the bonding pairs more strongly than they repel each other. The bond angle is <strong>less than 109.5' + DEG + '</strong>.</p><p>A markscheme accepts a range for a trigonal pyramidal molecule, such as 100' + DEG + ' to 107' + DEG + '. The measured angle in ' + c('PCl3') + ' is about 100' + DEG + '. Do not write 109.5' + DEG + '.</p>'
    }
  ]);
})();
