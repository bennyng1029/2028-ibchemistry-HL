/* ==========================================================================
   Question bank: Structure 2.4 — From models to materials
   30 original questions. q001–q022 are SL (2.4.1–2.4.5); q023–q030 are
   Additional HL (2.4.6, condensation polymers). Schema: docs/AUTHORING.md.
   Electronegativity values are from the data booklet (2025), section 9, and are
   given in every stem. The triangle outline follows data booklet section 17
   (same corner coordinates as assets/js/widgets-s2-4.js). Every number is
   recomputed by the checking script named in the builder's report.
   ========================================================================== */
(function () {
  'use strict';

  function math(line) { return '<div class="worked__math">' + line + '</div>'; }
  var chi = '<i>χ</i>', dchi = 'Δ<i>χ</i>';
  /* Condensed formula written by hand (digits become subscripts). Long ones may wrap after a dash on a phone. */
  function f(s) { return '<span class="chem' + (s.length <= 14 ? ' nowrap' : '') + '">' + s.replace(/(\d+)/g, '<sub>$1</sub>') + '</span>'; }

  /* ---- Bonding triangle sketch (regions as printed in the data booklet). pts: [[avg, diff, 'P'], …] */
  function tri(pts, label) {
    function X(v) { return 42 + (v - 0.5) / 3.6 * 250; }
    function Y(v) { return 212 - v / 3.4 * 190; }
    function path(a) { return a.map(function (p, i) { return (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(' ') + ' Z'; }
    var L = [0.66, 0], B = [1.29, 1.20], C = [1.71, 0.39], D = [1.92, 0], T = [2.31, 3.17], F = [2.74, 2.36], R = [3.96, 0];
    var st = 'fill:none;stroke:currentColor;stroke-width:1.3', tx = 'fill:currentColor;font-family:var(--font-body);font-size:11px';
    var s = '<svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="' + label + '" style="max-width:100%;height:auto;display:block">';
    s += '<path d="' + path([L, B, C, D]) + '" style="' + st + '"/><path d="' + path([B, T, F, C]) + '" style="' + st + '"/><path d="' + path([C, F, R, D]) + '" style="' + st + '"/>';
    s += '<path d="M' + X(0.5) + ' ' + Y(3.4) + ' V' + Y(0) + ' H' + X(4.1) + '" style="' + st + '"/>';
    var v;
    for (v = 1; v <= 4; v += 1) s += '<path d="M' + X(v) + ' ' + Y(0) + ' v4" style="' + st + '"/><text x="' + X(v) + '" y="' + (Y(0) + 15) + '" text-anchor="middle" style="' + tx + '">' + v.toFixed(1) + '</text>';
    for (v = 0; v <= 3; v += 1) s += '<path d="M' + X(0.5) + ' ' + Y(v) + ' h-4" style="' + st + '"/><text x="' + (X(0.5) - 7) + '" y="' + (Y(v) + 4) + '" text-anchor="end" style="' + tx + '">' + v.toFixed(1) + '</text>';
    for (v = 1.5; v <= 3.5; v += 1) s += '<path d="M' + X(v) + ' ' + Y(0) + ' v3" style="' + st + '"/>';
    for (v = 0.5; v <= 2.5; v += 1) s += '<path d="M' + X(0.5) + ' ' + Y(v) + ' h-3" style="' + st + '"/>';
    s += '<text x="' + X(1.3) + '" y="' + Y(0.22) + '" text-anchor="middle" style="' + tx + '">Metallic</text>';
    s += '<text x="' + X(2.12) + '" y="' + Y(2.0) + '" text-anchor="middle" style="' + tx + '">Ionic</text>';
    s += '<text x="' + X(2.8) + '" y="' + Y(1.35) + '" text-anchor="middle" style="' + tx + '">Polar</text><text x="' + X(2.8) + '" y="' + (Y(1.35) + 13) + '" text-anchor="middle" style="' + tx + '">covalent</text>';
    s += '<text x="' + X(3.0) + '" y="' + Y(0.22) + '" text-anchor="middle" style="' + tx + '">Covalent</text>';
    s += '<text x="' + X(2.3) + '" y="246" text-anchor="middle" style="' + tx + '">Average electronegativity</text>';
    s += '<text x="12" y="' + Y(1.7) + '" text-anchor="middle" transform="rotate(-90 12 ' + Y(1.7) + ')" style="' + tx + '">Electronegativity difference</text>';
    (pts || []).forEach(function (p) {
      s += '<circle cx="' + X(p[0]).toFixed(1) + '" cy="' + Y(p[1]).toFixed(1) + '" r="4" style="fill:currentColor"/>';
      s += '<text x="' + (X(p[0]) + 7).toFixed(1) + '" y="' + (Y(p[1]) - 6).toFixed(1) + '" style="' + tx + ';font-weight:700;font-size:13px">' + p[2] + '</text>';
    });
    return s + '</svg>';
  }
  var TRI_ALT = 'Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right.';

  /* ---- Structural drawing of a carbon backbone. carbons: [[up, down], …]; o: {dbl: i, ends, br, label} */
  function chain(carbons, o) {
    o = o || {};
    var sp = 46, x0 = (o.ends ? 40 : 22), w = x0 + (carbons.length - 1) * sp + (o.ends ? 40 : 22) + (o.br ? 14 : 0) + (o.wide || 0), y = 56;
    var st = 'stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none', tx = 'fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700';
    var s = '<svg viewBox="0 0 ' + w + ' 112" width="' + w + '" height="112" role="img" aria-label="' + o.label + '" style="max-width:100%;height:auto;display:block">';
    function lab(x, yy, t) {
      var multi = t.length > 1 && t !== 'Cl';
      return '<text x="' + (multi ? x - 6 : x) + '" y="' + (yy + 5.5) + '" text-anchor="' + (multi ? 'start' : 'middle') + '" style="' + tx + '">' + t + '</text>';
    }
    carbons.forEach(function (c, i) {
      var x = x0 + i * sp;
      s += lab(x, y, 'C');
      if (c[0]) s += '<path d="M' + x + ' ' + (y - 11) + ' V' + (y - 24) + '" style="' + st + '"/>' + lab(x, y - 35, c[0]);
      if (c[1]) s += '<path d="M' + x + ' ' + (y + 11) + ' V' + (y + 24) + '" style="' + st + '"/>' + lab(x, y + 35, c[1]);
      if (i) {
        if (o.dbl === i - 1) s += '<path d="M' + (x - sp + 10) + ' ' + (y - 3) + ' H' + (x - 10) + ' M' + (x - sp + 10) + ' ' + (y + 3) + ' H' + (x - 10) + '" style="' + st + '"/>';
        else s += '<path d="M' + (x - sp + 10) + ' ' + y + ' H' + (x - 10) + '" style="' + st + '"/>';
      }
    });
    var xl = x0, xr = x0 + (carbons.length - 1) * sp;
    if (o.ends) s += '<path d="M' + (xl - 10) + ' ' + y + ' H' + (xl - 34) + ' M' + (xr + 10) + ' ' + y + ' H' + (xr + 34 + (o.wide || 0)) + '" style="' + st + '"/>';
    if (o.br) {
      var bl = xl - 22, brx = xr + 22 + (o.wide || 0);
      s += '<path d="M' + (bl + 6) + ' 6 H' + bl + ' V106 H' + (bl + 6) + ' M' + (brx - 6) + ' 6 H' + brx + ' V106 H' + (brx - 6) + '" style="' + st + '"/>';
      s += '<text x="' + (brx + 4) + '" y="108" style="' + tx + ';font-style:italic;font-size:14px">n</text>';
    }
    return s + '</svg>';
  }
  var H2 = ['H', 'H'];

  S1.questions.register('s2-4', [

    /* =====================================================================
       SL — foundation
       ===================================================================== */
    {
      id: 's2-4-q001', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.1',
      stem: '<p>The bonding triangle shows bonding as a continuum between the ionic, covalent and metallic models. What is plotted on its two axes?</p>',
      options: [
        'Horizontal: average electronegativity. Vertical: electronegativity difference.',
        'Horizontal: electronegativity difference. Vertical: average electronegativity.',
        'Horizontal: sum of the electronegativities. Vertical: electronegativity difference.',
        'Horizontal: electronegativity of the metal. Vertical: electronegativity of the non-metal.'
      ],
      answer: 0,
      misconception: {
        1: 'The axes are swapped. The difference goes up the triangle, which is why the most ionic compounds are at the top.',
        2: 'The horizontal axis is the average, not the sum. The sum of two values can be as large as 7.4, which is off the scale.',
        3: 'The triangle does not need a metal and a non-metal. It uses the same two calculations for any two elements.'
      },
      hints: ['Ionic compounds have a large electronegativity difference. Where are they on the triangle: high up, or far along?'],
      solution: '<p>The horizontal axis is the average electronegativity of the two elements. The vertical axis is the electronegativity difference. A large difference puts a compound near the ionic top.</p>'
    },
    {
      id: 's2-4-q002', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Use ' + chi + '(Mg) = 1.3 and ' + chi + '(Cl) = 3.2. Calculate the electronegativity difference for magnesium chloride, ' + f('MgCl2') + '.</p>',
      answer: 1.9, tolerance: { abs: 0.01 }, unit: '',
      hints: ['Subtract the smaller value from the larger value.', 'Use one value for each element. The 2 in the formula is not used.'],
      solution: math(dchi + ' = 3.2 − 1.3 = 1.9')
    },
    {
      id: 's2-4-q003', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Use ' + chi + '(Mg) = 1.3 and ' + chi + '(Cl) = 3.2. Calculate the average electronegativity for magnesium chloride, ' + f('MgCl2') + '.</p>',
      answer: 2.25, tolerance: { abs: 0.006 }, unit: '',
      hints: ['Add the two values, then divide by 2.', 'Use one value for each element. Do not count chlorine twice.'],
      solution: math('average ' + chi + ' = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25')
    },
    {
      id: 's2-4-q004', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>A binary compound has an average electronegativity of 2.7 and an electronegativity difference of 1.0. Use the bonding triangle to deduce its bonding type.</p>' + tri([], TRI_ALT),
      options: ['Ionic', 'Polar covalent', 'Metallic', 'Non-polar covalent'],
      answer: 1,
      misconception: {
        0: 'Check the axes. Going along to 1.0 and up to 2.7 is the wrong way round. The average, 2.7, goes along and the difference, 1.0, goes up.',
        2: 'The metallic region is at the bottom left, where the average is below about 1.9. An average of 2.7 is far to the right of it.',
        3: 'A non-polar covalent bond has a difference of 0, so its point is on the base line. This point is at a height of 1.0.'
      },
      hints: ['Go along the horizontal axis to 2.7. Then go up to 1.0.'],
      solution: '<p>The point (2.7, 1.0) is on the right-hand side of the triangle and well above the base. That is the polar covalent region.</p>'
    },
    {
      id: 's2-4-q005', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.3',
      stem: '<p>Which statement describes an alloy?</p>',
      options: [
        'A compound of two metals that are chemically combined in a fixed ratio.',
        'A mixture of a metal and other metals or non-metals.',
        'An ionic compound of a metal and a non-metal.',
        'A pure metal that has been heated and then cooled quickly.'
      ],
      answer: 1,
      misconception: {
        0: 'An alloy is a mixture, not a compound. The proportions of the elements can vary.',
        2: 'An ionic compound has ions in a fixed ratio. In an alloy the bonding is metallic, and a non-metal such as carbon can be one of the components without forming an ionic lattice.',
        3: 'A pure metal contains only one element. An alloy always contains at least one other element.'
      },
      hints: ['Think of steel: iron with a little carbon. Is the amount of carbon fixed?'],
      solution: '<p>An alloy is a mixture of a metal and other metals or non-metals. It has enhanced properties, such as greater hardness.</p>'
    },
    {
      id: 's2-4-q006', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.4',
      stem: '<p>Which statement describes a polymer?</p>',
      options: [
        'A small molecule that can join to many others like it.',
        'A giant lattice of positive and negative ions.',
        'A large molecule made from many repeating subunits.',
        'A mixture of a metal and other elements.'
      ],
      answer: 2,
      misconception: {
        0: 'This describes a monomer. The polymer is the large molecule that forms when many monomers join.',
        1: 'This describes an ionic compound. A polymer is a covalently bonded molecule.',
        3: 'This describes an alloy.'
      },
      hints: ['“Poly” means many. “Mono” means one.'],
      solution: '<p>A polymer is a large molecule (a macromolecule) made from many repeating subunits. The subunits come from small molecules called monomers.</p>'
    },
    {
      id: 's2-4-q007', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.5',
      stem: '<p>Chloroethene, <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>, forms an addition polymer. Which is the repeating unit of the polymer?</p>',
      options: [
        '<span class="chem nowrap">–CH=CCl–</span>',
        '<span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>',
        '<span class="chem nowrap">–CH<sub>2</sub>–CHCl–CH<sub>2</sub>–CHCl–</span>',
        '<span class="chem nowrap">–CH<sub>2</sub>–CH<sub>2</sub>–Cl–</span>'
      ],
      answer: 1,
      misconception: {
        0: 'The double bond does not stay. One bond of the C=C breaks so that each carbon can join to a neighbour. Two hydrogen atoms have also been lost here, but no atoms are lost in addition polymerization.',
        2: 'This shows two repeating units. The repeating unit is the smallest part that repeats: two backbone carbons.',
        3: 'Chlorine forms only one bond, so it cannot be in the backbone. It stays as a side group on its carbon.'
      },
      hints: ['Change C=C to C–C. Then add one bond at each end.', 'The side groups stay on the same carbon atoms.'],
      solution: '<p>The double bond becomes a single bond, and each of the two carbons gains a continuation bond: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>. The chlorine atom stays on its carbon as a side group.</p>'
    },
    {
      id: 's2-4-q008', topic: 's2-4', level: 'sl', tier: 'foundation', type: 'multi', marks: 2,
      syllabus: 'Structure 2.4.5',
      stem: '<p>Which statements about the addition polymerization of an alkene are correct? Select all that apply.</p>',
      options: [
        'The carbon to carbon double bond in each monomer breaks.',
        'A molecule of water is released each time two monomers join.',
        'The polymer is the only product.',
        'The backbone of the polymer contains C=C double bonds.',
        'The repeating unit contains the same atoms as one monomer.'
      ],
      answer: [0, 2, 4],
      misconception: {
        1: 'Releasing a small molecule is the feature of condensation polymerization. In addition polymerization nothing is released.',
        3: 'The double bonds are used up when the monomers join. The backbone has only single bonds between the carbons.'
      },
      hints: ['Count the atoms before and after. Are any atoms lost?'],
      solution: '<p>In addition polymerization the double bond of each monomer breaks and the monomers join. Nothing else is formed, so the polymer is the only product and each repeating unit has the same atoms as one monomer.</p>'
    },

    /* =====================================================================
       SL — exam standard
       ===================================================================== */
    {
      id: 's2-4-q009', topic: 's2-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>The scale beside the bonding triangle shows the percentage ionic character at different heights.</p>' +
        '<div class="table-scroll"><table class="data"><thead><tr><th scope="col" class="num">' + dchi + '</th><th scope="col" class="num">% ionic</th></tr></thead><tbody>' +
        '<tr><td class="num">1.0</td><td class="num">25</td></tr><tr><td class="num">1.6</td><td class="num">50</td></tr><tr><td class="num">2.3</td><td class="num">75</td></tr></tbody></table></div>' +
        '<p>Magnesium chloride has ' + dchi + ' = 1.9. Estimate its percentage ionic character from the scale.</p>',
      answer: 60, tolerance: { abs: 6 }, unit: '%',
      hints: ['Between which two heights in the table does 1.9 lie?', 'It is a little less than halfway from 1.6 to 2.3. Read a value a little less than halfway from 50 to 75.'],
      solution: '<p>1.9 lies between 1.6 (50 % ionic) and 2.3 (75 % ionic).</p>' + math('fraction of the way = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43') + math('reading = 50 + 0.43 × 25 = about 60 % ionic') +
        '<p>This is a reading from a diagram, so any answer from about 55 % to 65 % is acceptable.</p>',
      answerDisplay: 'about 60 % (55 to 65 % accepted)'
    },
    {
      id: 's2-4-q010', topic: 's2-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Tin is a metal and chlorine is a non-metal. Use ' + chi + '(Sn) = 2.0, ' + chi + '(Cl) = 3.2 and the bonding triangle. What is the best description of the bonding in tin(IV) chloride, ' + f('SnCl4') + '?</p>' + tri([], TRI_ALT),
      options: [
        'Ionic, because a metal is bonded to a non-metal.',
        'Ionic, because the electronegativity difference is greater than 1.0.',
        'Polar covalent, because the point (2.6, 1.2) lies in that region.',
        'Metallic, because the compound contains a metal.'
      ],
      answer: 2,
      misconception: {
        0: '“Metal with non-metal” is only a rough guide. The triangle uses the electronegativity values, and here they place the compound in the polar covalent region.',
        1: 'One number is not enough, and there is no cut-off at 1.0. You need the difference and the average to find the region.',
        3: 'The metallic region is at the bottom left, where both elements have low electronegativity. Chlorine has a high electronegativity.'
      },
      hints: ['Calculate both coordinates: the difference and the average.', 'Difference = 3.2 − 2.0. Average = (2.0 + 3.2) / 2. Now find the point.'],
      solution: math(dchi + ' = 3.2 − 2.0 = 1.2') + math('average ' + chi + ' = (2.0 + 3.2) / 2 = 2.6') + '<p>The point (2.6, 1.2) is in the polar covalent region. This agrees with the properties: tin(IV) chloride is a liquid made of molecules.</p>'
    },
    {
      id: 's2-4-q011', topic: 's2-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.1',
      stem: '<p>A binary compound has an average electronegativity of 2.1 and an electronegativity difference of 2.6. Its point is high in the ionic region of the bonding triangle. Which properties does the ionic model predict?</p>',
      options: [
        'Low melting point; does not conduct electricity in any state.',
        'High melting point; conducts electricity as a solid.',
        'High melting point; conducts electricity when molten but not as a solid.',
        'Low melting point; conducts electricity when molten.'
      ],
      answer: 2,
      misconception: {
        0: 'These are the properties of a molecular covalent substance. An ionic lattice has strong electrostatic attraction between oppositely charged ions in every direction.',
        1: 'Conducting as a solid needs delocalized electrons, as in a metal. In a solid ionic lattice the ions are fixed in place.',
        3: 'A lot of energy is needed to overcome the strong electrostatic attraction between the ions, so the melting point is high.'
      },
      hints: ['What particles are in an ionic solid? Can they move?'],
      solution: '<p>The ionic model has a lattice of oppositely charged ions with strong electrostatic attraction between them, so the melting point is high. The ions cannot move in the solid, but they can move when the compound is molten, so it conducts only then.</p>'
    },
    {
      id: 's2-4-q012', topic: 's2-4', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Use ' + chi + '(Ca) = 1.0 and ' + chi + '(S) = 2.6. Determine the position of calcium sulfide, CaS, in the bonding triangle, and deduce its bonding type.</p>' + tri([], TRI_ALT),
      answer: math(dchi + ' = 2.6 − 1.0 = 1.6') + math('average ' + chi + ' = (1.0 + 2.6) / 2 = 1.8') + '<p>The point (1.8, 1.6) is in the ionic region, so calcium sulfide is ionic.</p>',
      markscheme: [
        'Electronegativity difference = 1.6 AND average electronegativity = 1.8 (both needed for the mark).',
        'Ionic (bonding), from the position in the triangle.'
      ],
      hints: ['You need two numbers: the difference and the average.', 'Plot the average along and the difference up.'],
      solution: '<p>Both values are needed for the first mark. The point (1.8, 1.6) lies above the metallic region and to the left of the polar covalent region, inside the ionic band.</p>'
    },
    {
      id: 's2-4-q013', topic: 's2-4', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.4.3',
      stem: '<p>Steel is an alloy made by adding a small amount of carbon to iron. Explain why steel is harder than pure iron.</p>',
      answer: '<p>Carbon atoms are a different size from iron atoms, so they disrupt the regular arrangement of the layers in the lattice. The layers cannot slide over each other as easily, so steel is harder.</p>',
      markscheme: [
        'The carbon atoms are a different size (smaller) AND disrupt/distort the regular lattice/layers of iron ions.',
        'The layers cannot slide over each other as easily (so more force is needed to change the shape).'
      ],
      hints: ['Start with pure iron. Why is it malleable?', 'What does an atom of a different size do to regular layers?'],
      solution: '<p>In pure iron the cations are all the same size and form regular layers that slide over each other. Carbon atoms have a different size and disrupt the layers, so they slide less easily. “The bonds are stronger” is not accepted.</p>'
    },
    {
      id: 's2-4-q014', topic: 's2-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.3',
      stem: '<p>Which feature of metallic bonding makes it possible for atoms of another element to take places in a metal lattice?</p>',
      options: [
        'Each metal atom forms a fixed number of covalent bonds in fixed directions.',
        'The attraction between the cations and the delocalized electrons is non-directional.',
        'The cations and the atoms of the other element form a compound with a fixed ratio.',
        'The delocalized electrons are removed when the other element is added.'
      ],
      answer: 1,
      misconception: {
        0: 'Bonds in fixed directions describe covalent bonding. Metallic bonding acts equally in all directions.',
        2: 'An alloy is a mixture. Its composition is not fixed.',
        3: 'The delocalized electrons stay. They are what holds the lattice together, including the added atoms.'
      },
      hints: ['In a metal, does each cation bond to particular neighbours, or to the electrons all around it?'],
      solution: '<p>Metallic bonding is the electrostatic attraction between cations and delocalized electrons. It is non-directional, so the lattice can accommodate atoms of other elements and still be held together.</p>'
    },
    {
      id: 's2-4-q015', topic: 's2-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.5',
      stem: '<p>The structure of propene is shown.</p>' + chain([H2, ['H', 'CH₃']], { dbl: 0, label: 'Propene: two carbons joined by a double bond. The first carbon has two H atoms. The second carbon has one H atom and one CH3 group.' }) +
        '<p>Which is the repeating unit of poly(propene)?</p>',
      options: [
        chain([H2, H2, H2], { ends: true, br: true, label: 'Option A: three backbone carbons in a row, each with two H atoms, with a continuation bond at each end' }),
        chain([H2, ['H', 'CH₃']], { dbl: 0, ends: true, br: true, wide: 14, label: 'Option B: two backbone carbons joined by a double bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group.' }),
        chain([H2, ['H', 'CH₃']], { ends: true, br: true, wide: 14, label: 'Option C: two backbone carbons joined by a single bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group.' }),
        chain([H2, ['H', 'CH₃']], { br: true, wide: 14, label: 'Option D: two carbons joined by a single bond, with no continuation bonds. The first carbon has two H atoms. The second has one H atom and one CH3 group.' })
      ],
      answer: 2,
      misconception: {
        0: 'The CH₃ group is not part of the double bond, so it does not go into the backbone. Only the two carbons of the C=C are in the chain.',
        1: 'The double bond has been kept. Each carbon would then have five bonds. The C=C becomes C–C when the continuation bonds form.',
        3: 'The continuation bonds are missing. Without them the unit cannot join to its neighbours, and each backbone carbon has only three bonds.'
      },
      hints: ['Which two carbon atoms were joined by the double bond? Only those are in the backbone.', 'Check that every carbon has exactly four bonds.'],
      solution: '<p>Change C=C to C–C and add a continuation bond to each of the two carbons. The CH₃ group stays as a side group: –CH<sub>2</sub>–CH(CH<sub>3</sub>)–.</p>'
    },
    {
      id: 's2-4-q016', topic: 's2-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.5',
      stem: '<p>A section of an addition polymer is shown.</p>' + chain([H2, ['Cl', 'Cl'], H2, ['Cl', 'Cl']], { ends: true, label: 'Polymer chain section with four backbone carbons and a continuation bond at each end. Carbons 1 and 3 each have two H atoms. Carbons 2 and 4 each have two Cl atoms.' }) +
        '<p>Which monomer formed this polymer?</p>',
      options: [
        '<span class="chem nowrap">CHCl=CHCl</span>',
        '<span class="chem nowrap">CH<sub>2</sub>=CHCl</span>',
        '<span class="chem nowrap">CH<sub>2</sub>=CCl<sub>2</sub></span>',
        '<span class="chem nowrap">CH<sub>3</sub>–CHCl<sub>2</sub></span>'
      ],
      answer: 2,
      misconception: {
        0: 'This monomer would put one chlorine on every backbone carbon. In the polymer shown, both chlorine atoms are on the same carbon and the next carbon has none.',
        1: 'This monomer has only one chlorine atom, but each repeating unit in the chain has two.',
        3: 'This molecule has no C=C double bond, so it cannot form an addition polymer.'
      },
      hints: ['Mark off the chain two backbone carbons at a time.', 'One pair is CH<sub>2</sub> joined to CCl<sub>2</sub>. Put a double bond between those two carbons.'],
      solution: '<p>The repeating unit is –CH<sub>2</sub>–CCl<sub>2</sub>–. Remove the continuation bonds and restore the double bond: CH<sub>2</sub>=CCl<sub>2</sub>.</p>'
    },
    {
      id: 's2-4-q017', topic: 's2-4', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.4.4',
      stem: '<p>Poly(ethene) is a plastic used for food containers. State one <strong>chemical</strong> property that makes it suitable for this use, and explain the property in terms of the structure of the polymer.</p>',
      answer: '<p>It is unreactive (chemically inert), so it does not react with the food. The atoms in the polymer chains are joined by strong covalent bonds, which need a lot of energy to break.</p>',
      markscheme: [
        'Unreactive / chemically inert / does not react with food, water or acids (accept non-biodegradable). Do not accept a physical property such as strong, flexible or low density.',
        'The chains contain strong covalent bonds (C–C and C–H) which are difficult to break.'
      ],
      hints: ['A chemical property is about whether the substance reacts.', 'What kind of bond joins the atoms inside a polymer chain?'],
      solution: '<p>The question asks for a chemical property, so “strong” or “light” earns nothing. Plastics are unreactive because the covalent bonds in their chains are strong.</p>'
    },
    {
      id: 's2-4-q018', topic: 's2-4', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 2.4.5',
      stem: '<p>Put these steps in order to draw the repeating unit of an addition polymer from its monomer.</p>',
      options: [
        'Find the two carbon atoms that are joined by the double bond.',
        'Redraw the monomer with every other group above or below those two carbons.',
        'Change the double bond to a single bond.',
        'Draw one continuation bond out from each of the two carbons.',
        'Check that each carbon atom has four bonds.'
      ],
      hints: ['You cannot open the double bond until you have found it.', 'The check comes last.'],
      solution: '<p>Find the C=C, redraw with the side groups above and below, change C=C to C–C, add the two continuation bonds, then check that each carbon has four bonds.</p>'
    },

    /* =====================================================================
       SL — challenge
       ===================================================================== */
    {
      id: 's2-4-q019', topic: 's2-4', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2,
      syllabus: 'Structure 2.4.5',
      stem: '<p>Propene, ' + f('C3H6') + ', forms the addition polymer poly(propene). One polymer chain has a relative molecular mass of <span class="mono">6.31 × 10<sup>4</sup></span>. Estimate the number of repeating units in this chain. Use <i>A</i><sub>r</sub>: C 12.01, H 1.01.</p>',
      answer: 1499.168, tolerance: '1%', sigfigs: 3, unit: '',
      hints: ['In addition polymerization no atoms are lost. What is the relative mass of one repeating unit?', 'Number of units = relative molecular mass of the chain ÷ relative mass of one unit.'],
      solution: '<p>The repeating unit has the same atoms as one monomer, ' + f('C3H6') + '.</p>' + math('<i>M</i><sub>r</sub>(unit) = 3(12.01) + 6(1.01) = 42.09') + math('number of units = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> (3 significant figures)')
    },
    {
      id: 's2-4-q020', topic: 's2-4', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.1',
      stem: '<p>The table gives electronegativity values. ' + chi + '(O) = 3.4.</p>' +
        '<div class="table-scroll"><table class="data"><thead><tr><th scope="col">Element</th><th scope="col" class="num">Na</th><th scope="col" class="num">Mg</th><th scope="col" class="num">Si</th><th scope="col" class="num">P</th><th scope="col" class="num">S</th></tr></thead>' +
        '<tbody><tr><th scope="row">' + chi + '</th><td class="num">0.9</td><td class="num">1.3</td><td class="num">1.9</td><td class="num">2.2</td><td class="num">2.6</td></tr></tbody></table></div>' +
        '<p>How does the position of the oxide in the bonding triangle change from sodium oxide to the oxide of sulfur, and what does this show about the bonding?</p>',
      options: [
        'The difference decreases and the average increases. The bonding changes from ionic to polar covalent.',
        'The difference increases and the average increases. The bonding changes from polar covalent to ionic.',
        'The difference decreases and the average decreases. The bonding changes from ionic to metallic.',
        'The position does not change, because every oxide contains oxygen.'
      ],
      answer: 0,
      misconception: {
        1: 'The values get closer to 3.4 from Na to S, so the difference gets smaller, not larger. Check: 3.4 − 0.9 = 2.5 but 3.4 − 2.6 = 0.8.',
        2: 'The average rises, because the first element becomes more electronegative while oxygen stays at 3.4. The points move right, away from the metallic corner.',
        3: 'The position depends on both elements. The other element changes, so both coordinates change.'
      },
      hints: ['Calculate the difference and the average for the first oxide and the last oxide.', 'Na and O: difference 2.5, average 2.15. S and O: difference 0.8, average 3.0.'],
      solution: math('Na and O: ' + dchi + ' = 3.4 − 0.9 = 2.5; average = (0.9 + 3.4) / 2 = 2.15') + math('S and O: ' + dchi + ' = 3.4 − 2.6 = 0.8; average = (2.6 + 3.4) / 2 = 3.0') +
        '<p>The points move down and to the right: from the ionic region to the polar covalent region. Bonding changes gradually across the period, which is the idea of a continuum.</p>'
    },
    {
      id: 's2-4-q021', topic: 's2-4', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Sodium and silicon both form chlorides: NaCl and ' + f('SiCl4') + '. Use ' + chi + '(Na) = 0.9, ' + chi + '(Si) = 1.9 and ' + chi + '(Cl) = 3.2 and the bonding triangle. Determine the position of each chloride, deduce the bonding type of each, and predict one difference in their properties.</p>' + tri([], TRI_ALT),
      answer: math('NaCl: ' + dchi + ' = 3.2 − 0.9 = 2.3; average = (0.9 + 3.2) / 2 = 2.05') + math('SiCl<sub>4</sub>: ' + dchi + ' = 3.2 − 1.9 = 1.3; average = (1.9 + 3.2) / 2 = 2.55') +
        '<p>NaCl is in the ionic region and ' + f('SiCl4') + ' is in the polar covalent region. NaCl has a much higher melting point, because of the strong electrostatic attraction between its ions. Molten NaCl conducts electricity because its ions can move, but ' + f('SiCl4') + ' does not conduct because it has no mobile charged particles.</p>',
      markscheme: [
        'NaCl: difference 2.3 and average 2.05 AND SiCl₄: difference 1.3 and average 2.55.',
        'NaCl ionic AND SiCl₄ (polar) covalent.',
        'One valid difference with a reason, for example: NaCl has the higher melting point (strong electrostatic attraction between ions) OR NaCl conducts when molten (mobile ions) and SiCl₄ does not.'
      ],
      hints: ['Work out two numbers for each chloride. Use one value per element.', 'Locate both points, then use the model for each region to predict properties.'],
      solution: '<p>NaCl is at (2.05, 2.3), in the ionic region. ' + f('SiCl4') + ' is at (2.55, 1.3), in the polar covalent region. The ionic model predicts a high melting point and conduction when molten. The covalent model predicts no conduction, and ' + f('SiCl4') + ' is made of molecules, so its melting point is low.</p>'
    },
    {
      id: 's2-4-q022', topic: 's2-4', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Element X has an electronegativity of 1.6. It forms a binary compound with a more electronegative element, Y. The compound is at the point (2.4, 1.6) in the bonding triangle: average electronegativity 2.4, electronegativity difference 1.6. Calculate the electronegativity of Y.</p>',
      answer: 3.2, tolerance: { abs: 0.05 }, unit: '',
      hints: ['Y is more electronegative than X, so ' + chi + '(Y) − ' + chi + '(X) equals the difference.', 'Either use the difference: ' + chi + '(Y) = 1.6 + 1.6. Or use the average: the two values add up to 2 × 2.4.'],
      solution: math(chi + '(Y) = ' + chi + '(X) + ' + dchi + ' = 1.6 + 1.6 = 3.2') + '<p>Check with the average:</p>' + math('(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓')
    },

    /* =====================================================================
       Additional HL — condensation polymers (2.4.6)
       ===================================================================== */
    {
      id: 's2-4-q023', topic: 's2-4', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.6',
      stem: '<p>Which statement is correct for the formation of every condensation polymer?</p>',
      options: [
        'Each monomer must contain a carbon to carbon double bond.',
        'The polymer is the only product.',
        'A small molecule is released each time two monomers join.',
        'Only one kind of monomer can be used.'
      ],
      answer: 2,
      misconception: {
        0: 'A C=C double bond is needed for addition polymerization. Condensation monomers need two functional groups instead.',
        1: 'This is true for addition polymers. A condensation reaction also gives a small molecule, usually water.',
        3: 'Many condensation polymers are made from two different monomers, such as a diol and a dicarboxylic acid.'
      },
      hints: ['What does the word “condensation” tell you is formed as well as the polymer?'],
      solution: '<p>In condensation polymerization, functional groups on the monomers react together. Each new link releases a small molecule, usually water.</p>'
    },
    {
      id: 's2-4-q024', topic: 's2-4', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.6',
      stem: '<p>A polyester is made from these two monomers.</p><p>' + f('HO–CH2–CH2–OH') + ' &nbsp; and &nbsp; ' + f('HOOC–C6H4–COOH') + '</p><p>Which is the repeating unit of the polyester?</p>',
      options: [
        f('HO–CH2–CH2–O–CO–C6H4–COOH'),
        f('–O–CH2–CH2–O–CO–C6H4–CO–'),
        f('–CH2–CH2–CO–C6H4–CO–'),
        f('–O–CH2–CH2–O–CO–C6H4–CO–O–')
      ],
      answer: 1,
      misconception: {
        0: 'This is the molecule made when one diol joins one acid. It still has an –OH group and a –COOH group at its ends, so it is not a repeating unit. A repeating unit has continuation bonds at both ends.',
        2: 'Both oxygen atoms of the diol have been removed. The diol loses only an H atom at each end. Its oxygen atoms stay and become part of the ester links.',
        3: 'There is one oxygen atom too many. The acid loses its –OH at each end, so the right-hand end is –CO–, not –CO–O–.'
      },
      hints: ['Water forms from an H of the diol and an –OH of the acid.', 'Remove H from both ends of the diol and –OH from both ends of the acid. Then join them.'],
      solution: '<p>Each –OH group of the diol loses H. Each –COOH group of the acid loses –OH. Joining O to the C=O carbon gives the ester link: ' + f('–O–CH2–CH2–O–CO–C6H4–CO–') + '. Water is the other product.</p>'
    },
    {
      id: 's2-4-q025', topic: 's2-4', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.6',
      stem: '<p>The repeating unit of a polyamide is shown.</p><p>' + f('–NH–(CH2)6–NH–CO–(CH2)8–CO–') + '</p><p>Which pair of monomers forms this polymer?</p>',
      options: [
        f('HO–(CH2)6–OH') + ' and ' + f('HOOC–(CH2)8–COOH'),
        f('H2N–(CH2)6–NH2') + ' and ' + f('HO–(CH2)8–OH'),
        f('H2N–(CH2)6–COOH') + ' and ' + f('H2N–(CH2)8–COOH'),
        f('H2N–(CH2)6–NH2') + ' and ' + f('HOOC–(CH2)8–COOH')
      ],
      answer: 3,
      misconception: {
        0: 'A diol and a dicarboxylic acid give a polyester, with –O–CO– links. This polymer has nitrogen in its links.',
        1: 'The two C=O groups in the repeating unit have been lost. Each C=O carbon gains an –OH on hydrolysis, to give a –COOH group.',
        2: 'The unit shows both nitrogen atoms on the ' + f('(CH2)6') + ' part and both C=O groups on the ' + f('(CH2)8') + ' part. So one monomer has two –NH<sub>2</sub> groups and the other has two –COOH groups.'
      },
      hints: ['Break each bond between N and the C=O carbon.', 'Give each N an extra H, and give each C=O carbon an –OH.'],
      solution: '<p>Break the amide links. The ' + f('–NH–(CH2)6–NH–') + ' part gains an H on each nitrogen: ' + f('H2N–(CH2)6–NH2') + ', a diamine. The ' + f('–CO–(CH2)8–CO–') + ' part gains an –OH on each carbon: ' + f('HOOC–(CH2)8–COOH') + ', a dicarboxylic acid.</p>'
    },
    {
      id: 's2-4-q026', topic: 's2-4', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.4.6',
      stem: '<p>A polyamide is made from these two monomers.</p><p>' + f('H2N–(CH2)5–NH2') + ' &nbsp; and &nbsp; ' + f('HOOC–(CH2)3–COOH') + '</p><p>Draw the repeating unit of the polyamide.</p>',
      answer: '<p>' + f('–NH–(CH2)5–NH–CO–(CH2)3–CO–') + '</p><p>Each CO is a carbon atom with a double bond to oxygen. Each nitrogen atom keeps one hydrogen atom. There is a continuation bond at each end.</p>',
      markscheme: [
        'Correct amide link shown: –NH–CO– (C=O bonded to N–H).',
        'Continuation bonds at both ends AND the rest of the structure correct, with only one repeating unit drawn.'
      ],
      hints: ['An –NH<sub>2</sub> group loses one H. A –COOH group loses –OH.', 'Join N to the C=O carbon. Then open both outer ends in the same way.'],
      solution: '<p>Remove one H from each –NH<sub>2</sub> group and the –OH from each –COOH group. Join N to the C=O carbon. The unit is ' + f('–NH–(CH2)5–NH–CO–(CH2)3–CO–') + ', and water is the other product. Brackets and <i>n</i> are not required.</p>'
    },
    {
      id: 's2-4-q027', topic: 's2-4', level: 'ahl', tier: 'exam', type: 'multi', marks: 2,
      syllabus: 'Structure 2.4.6',
      stem: '<p>Which statements about condensation and hydrolysis are correct? Select all that apply.</p>',
      options: [
        'Proteins form from amino acids by condensation reactions.',
        'Hydrolysis of a polyester releases one molecule of water for each link broken.',
        'Hydrolysis breaks the links in a condensation polymer by reaction with water.',
        'Poly(ethene) is easily broken down into ethene by hydrolysis.',
        'One molecule of water is released when an amide link forms from an –NH<sub>2</sub> group and a –COOH group.'
      ],
      answer: [0, 2, 4],
      misconception: {
        1: 'Hydrolysis uses water. It does not release it. One molecule of water is a reactant for each link that breaks.',
        3: 'Poly(ethene) is an addition polymer. Its backbone has only carbon to carbon bonds, with no ester or amide links for water to break.'
      },
      hints: ['Condensation and hydrolysis are opposites. In which one is water a product?'],
      solution: '<p>All biological macromolecules, including proteins, form by condensation and break down by hydrolysis. Condensation releases water as each link forms. Hydrolysis uses water to break each link.</p>'
    },
    {
      id: 's2-4-q028', topic: 's2-4', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 2,
      syllabus: 'Structure 2.4.6',
      stem: '<p>150 molecules of a diamine react with 150 molecules of a dicarboxylic acid. They form one polyamide chain that contains all 300 monomer units. How many molecules of water are released?</p>',
      answer: 299, tolerance: { abs: 0.1 }, unit: '',
      hints: ['One molecule of water is released for each amide link that forms.', 'How many links join 300 units in a single chain? Try it with 2 units, then 3 units.'],
      solution: '<p>Two units need 1 link. Three units need 2 links. A chain of <i>N</i> units has <i>N</i> − 1 links.</p>' + math('links = 300 − 1 = 299, so 299 molecules of H<sub>2</sub>O')
    },
    {
      id: 's2-4-q029', topic: 's2-4', level: 'ahl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.4.6',
      stem: '<p>The repeating unit of a polyester is shown.</p><p>' + f('–O–(CH2)4–O–CO–(CH2)2–CO–') + '</p><p>(a) Deduce the structures of the two monomers formed when this polymer is hydrolysed. (b) Suggest why this polymer breaks down in the environment more readily than poly(ethene).</p>',
      answer: '<p>(a) ' + f('HO–(CH2)4–OH') + ' and ' + f('HOOC–(CH2)2–COOH') + '.</p><p>(b) The polyester has ester links in its backbone, which can be broken by hydrolysis (reaction with water). Poly(ethene) has only strong carbon to carbon bonds in its backbone, which are not hydrolysed.</p>',
      markscheme: [
        'HO–(CH₂)₄–OH (the diol).',
        'HOOC–(CH₂)₂–COOH (the dicarboxylic acid).',
        'The polyester has ester links that can be hydrolysed / broken by water, but poly(ethene) has only (strong, non-polar) C–C bonds in its chain.'
      ],
      hints: ['Break each bond between O and the C=O carbon.', 'Each O gains an H. Each C=O carbon gains an –OH.', 'For (b), compare the backbones of the two polymers.'],
      solution: '<p>Hydrolysis breaks each ester link. The ' + f('–O–(CH2)4–O–') + ' part gains an H at each end to give the diol. The ' + f('–CO–(CH2)2–CO–') + ' part gains an –OH at each end to give the dicarboxylic acid. Addition polymers have no links that water can break.</p>'
    },
    {
      id: 's2-4-q030', topic: 's2-4', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.4.6',
      stem: '<p>A single monomer can form a condensation polymer if it has two different functional groups. The monomer ' + f('HO–(CH2)5–COOH') + ' forms a polyester. Which is the repeating unit?</p>',
      options: [
        f('–O–(CH2)5–CO–'),
        f('–O–(CH2)5–CO–O–(CH2)5–CO–'),
        f('–(CH2)5–CO–'),
        f('–O–(CH2)5–CO–O–')
      ],
      answer: 0,
      misconception: {
        1: 'This shows two repeating units. With one kind of monomer, the smallest part that repeats comes from a single monomer molecule.',
        2: 'The oxygen of the –OH group has been removed. The –OH group loses only its H. Its oxygen becomes part of the ester link.',
        3: 'There is one oxygen atom too many. The –COOH group loses its –OH, so that end of the unit is –CO–.'
      },
      hints: ['The –OH end of one molecule reacts with the –COOH end of the next molecule.', 'Remove H from the –OH end and –OH from the –COOH end.'],
      solution: '<p>Each molecule loses an H from its –OH group and an –OH from its –COOH group, which together make one molecule of water. What remains is ' + f('–O–(CH2)5–CO–') + '. The ester link forms where one unit joins the next.</p>'
    }
  ]);
})();
