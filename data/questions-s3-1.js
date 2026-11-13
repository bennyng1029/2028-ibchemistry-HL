/* ==========================================================================
   Structure Lab — question bank for Structure 3.1 The periodic table:
   classification of elements.
   Schema: docs/AUTHORING.md section 4.  All questions are original.
   SL+HL: 3.1.1–3.1.6 (level 'sl').  Additional HL: 3.1.7–3.1.10 (level 'ahl').
   Data: first ionization energies, electron affinities, electronegativities,
   atomic and ionic radii and the colour wheel are from the IB chemistry data
   booklet (first assessment 2025), sections 9, 10 and 15, checked value by value.
   Successive ionization energies (Ca, Ti, V) are from the CRC-sourced table
   "Molar ionization energies of the elements", rounded to whole numbers.
   Constant: c = 3.00e8 m s-1 (data booklet).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  /* ---------- small local helpers (no globals) ----------------------------- */
  var MINUS = '−', TIMES = '×';

  // ch('SO4^2-') → a .chem span that the shell formats
  function ch(s) { return '<span class="chem">' + s + '</span>'; }
  // cfg('[Ar] 4s1 3d5') → [Ar] 4s<sup>1</sup> 3d<sup>5</sup>
  function cfg(s) {
    return '<span class="mono nowrap">' + s.replace(/(\d[spdf])(\d+)/g, '$1<sup>$2</sup>') + '</span>';
  }
  // sci('5.88', 14) → 5.88 × 10<sup>14</sup>
  function sci(m, e) {
    return m + ' ' + TIMES + ' 10<sup>' + (e < 0 ? MINUS + (-e) : e) + '</sup>';
  }
  function math(lines) {
    return lines.map(function (l) { return '<div class="worked__math">' + l + '</div>'; }).join('');
  }
  function table(caption, head, rows) {
    var h = '<div class="table-scroll" tabindex="0"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (c, i) { h += '<th' + (i ? ' class="num"' : '') + ' scope="col">' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c, i) { h += i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }
  var PM = '10<sup>' + MINUS + '12</sup> m';
  var KJ = 'kJ mol<sup>' + MINUS + '1</sup>';

  /* Outline of the periodic table with four labelled regions (A–D). Uses currentColor. */
  function ptOutline() {
    var U = 15, X = 12, Y = 10, s = '';
    function P(pts) { return pts.map(function (p) { return (X + p[0] * U) + ',' + (Y + p[1] * U); }).join(' '); }
    function region(pts, letter, lx, ly) {
      s += '<polygon points="' + P(pts) + '" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>';
      s += '<text x="' + (X + lx * U) + '" y="' + (Y + ly * U + 6) + '" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">' + letter + '</text>';
    }
    region([[0, 0], [1, 0], [1, 1], [2, 1], [2, 7], [0, 7]], 'A', 1, 4);
    region([[2, 3], [12, 3], [12, 7], [2, 7]], 'B', 7, 5);
    region([[12, 1], [17, 1], [17, 0], [18, 0], [18, 7], [12, 7]], 'C', 15, 4);
    region([[3, 7.7], [17, 7.7], [17, 9.7], [3, 9.7]], 'D', 10, 8.7);
    s += '<text x="' + (X + 0.5 * U) + '" y="' + (Y - 2) + '" text-anchor="middle" font-size="10" fill="currentColor">1</text>';
    s += '<text x="' + (X + 17.5 * U) + '" y="' + (Y - 2) + '" text-anchor="middle" font-size="10" fill="currentColor">18</text>';
    var w = X * 2 + 18 * U, h = Y + 9.7 * U + 6;
    return '<p><svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" style="max-width:100%;height:auto" role="img" aria-label="Outline of the periodic table divided into four regions. Region A is the two columns on the left, groups 1 and 2. Region B is the wide middle part, groups 3 to 12. Region C is the six columns on the right, groups 13 to 18. Region D is the two long rows drawn below the main table.">' + s + '</svg></p>';
  }

  /* The data booklet colour wheel (section 15), drawn without colour: names and boundary wavelengths only. */
  function wheel() {
    var CX = 150, CY = 112, R = 74, s = '';
    function pt(deg, r) { var a = deg * Math.PI / 180; return [CX + r * Math.cos(a), CY - r * Math.sin(a)]; }
    s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="none" stroke="currentColor" stroke-width="1.5"/>';
    [0, 60, 120, 180, 240, 300].forEach(function (d) {
      var p = pt(d, R);
      s += '<line x1="' + CX + '" y1="' + CY + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="currentColor" stroke-width="1.2"/>';
    });
    [['Orange', 90], ['Yellow', 30], ['Green', -30], ['Blue', -90], ['Violet', -150], ['Red', 150]].forEach(function (n) {
      var p = pt(n[1], R * 0.62);
      s += '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">' + n[0] + '</text>';
    });
    function lab(deg, text, anchor, dx, dy) {
      var p = pt(deg, R + 6);
      s += '<text x="' + (p[0] + dx).toFixed(1) + '" y="' + (p[1] + dy).toFixed(1) + '" text-anchor="' + anchor + '" font-size="12" fill="currentColor">' + text + '</text>';
    }
    lab(120, '647 nm', 'end', 0, -2);
    lab(60, '585 nm', 'start', 0, -2);
    lab(0, '575 nm', 'start', 2, 4);
    lab(-60, '491 nm', 'start', 0, 12);
    lab(-120, '424 nm', 'end', 0, 12);
    lab(180, '700 nm', 'end', -2, -4);
    lab(180, '400 nm', 'end', -2, 14);
    return '<p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red.">' + s + '</svg></p>';
  }

  /* First ionization energy against element, plotted from data booklet values. */
  function ieGraph(labels, values, aria) {
    var X0 = 58, X1 = 306, Y0 = 170, Y1 = 14, hi = 1600, s = '', pts = [];
    function px(i) { return X0 + 16 + (X1 - X0 - 32) * i / (values.length - 1); }
    function py(v) { return Y0 - (Y0 - Y1) * v / hi; }
    s += '<path d="M' + X0 + ' ' + Y1 + 'V' + Y0 + 'H' + X1 + '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
    [0, 400, 800, 1200, 1600].forEach(function (t) {
      s += '<line x1="' + (X0 - 5) + '" x2="' + X1 + '" y1="' + py(t) + '" y2="' + py(t) + '" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>';
      s += '<text x="' + (X0 - 9) + '" y="' + (py(t) + 4) + '" text-anchor="end" font-size="12" fill="currentColor">' + t + '</text>';
    });
    values.forEach(function (v, i) {
      var x = px(i), y = py(v);
      pts.push(x.toFixed(1) + ' ' + y.toFixed(1));
      s += '<text x="' + x + '" y="' + (Y0 + 17) + '" text-anchor="middle" font-size="12" fill="currentColor">' + labels[i] + '</text>';
    });
    s += '<path d="M' + pts.join('L') + '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
    pts.forEach(function (p) { var c = p.split(' '); s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="4" fill="currentColor"/>'; });
    s += '<text transform="translate(14 ' + ((Y0 + Y1) / 2) + ') rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">first IE / kJ mol⁻¹</text>';
    return '<p><svg viewBox="0 0 316 196" width="316" height="196" style="max-width:100%;height:auto" role="img" aria-label="' + aria + '">' + s + '</svg></p>';
  }

  S1.questions.register('s3-1', [

  /* ======================= Structure 3.1.1 (SL) ============================ */
  {
    id: 's3-1-q001', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.1',
    stem: '<p>Which element is a metalloid?</p>',
    options: ['Aluminium, Al', 'Phosphorus, P', 'Silicon, Si', 'Sulfur, S'],
    answer: 2,
    misconception: {
      0: 'Aluminium sits next to the metalloids, but it is a metal. It is shiny, it conducts electricity well and it forms ' + ch('Al^3+') + ' ions.',
      1: 'Phosphorus is a non-metal. It does not conduct electricity and its oxide is acidic.',
      3: 'Sulfur is a non-metal. It is a brittle yellow solid that does not conduct electricity.'
    },
    hints: ['Find the four elements in period 3 of your periodic table.', 'Metalloids lie on the diagonal boundary between the metals (left) and the non-metals (right).'],
    solution: '<p>Metals are on the left and in the centre of the periodic table. Non-metals are on the upper right. The metalloids lie on the diagonal boundary between them. They include B, Si, Ge, As, Sb and Te. <strong>Silicon</strong> is a metalloid. Its properties are between those of a metal and a non-metal.</p>'
  },
  {
    id: 's3-1-q002', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.1',
    stem: '<p>The diagram shows an outline of the periodic table divided into four regions, A, B, C and D.</p>' + ptOutline() + '<p>Which region is the d-block?</p>',
    options: ['A', 'B', 'C', 'D'],
    answer: 1,
    misconception: {
      0: 'Region A is groups 1 and 2. In these elements the outer electrons are in an s sublevel, so this is the s-block.',
      2: 'Region C is groups 13 to 18. In these elements a p sublevel is being filled, so this is the p-block.',
      3: 'Region D is the two rows drawn below the main table. In these elements an f sublevel is being filled, so this is the f-block.'
    },
    hints: ['A d sublevel holds up to 10 electrons. Which region is 10 columns wide?', 'An s sublevel holds 2 electrons, a p sublevel 6 and an f sublevel 14.'],
    solution: '<p>The width of each block matches the number of electrons its sublevel can hold. The s-block is 2 columns wide (A). The d-block is 10 columns wide: groups 3 to 12 (<strong>B</strong>). The p-block is 6 columns wide (C). The f-block is 14 columns wide (D).</p><p>One exception: helium is drawn at the top of group 18, but its configuration is ' + cfg('1s2') + '.</p>'
  },
  {
    id: 's3-1-q003', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.1.1',
    stem: '<p>Tin, Sn, has atomic number 50. Use the periodic table in the data booklet. Which statements about tin are correct? Select all that apply.</p>',
    options: ['Tin is in the p-block.', 'Tin is a transition element.', 'Tin is a metal.', 'Tin is in group 4.', 'Tin is in period 5.'],
    answer: [0, 2, 4],
    misconception: {
      1: 'The transition elements are in the d-block. Tin is in group 14, which is in the p-block. Not every metal is a transition element.',
      3: 'Groups are numbered from 1 to 18. Tin has four valence electrons, but it is in group 14. Group 4 starts with titanium.'
    },
    hints: ['Find Sn in the data booklet. Read its row (period) and its column (group).', 'Groups 13 to 18 are the p-block. The lower part of the p-block contains metals.'],
    solution: '<p>Tin is in period 5 and group 14. Groups 13 to 18 form the <strong>p-block</strong>. Tin lies below and to the left of the metalloid boundary, so it is a <strong>metal</strong>. It is not a transition element, because it is not in the d-block.</p>'
  },
  {
    id: 's3-1-q004', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.1',
    stem: '<p>Use the periodic table in the data booklet. Which row gives the correct block and type for the element?</p>',
    options: [
      'Zinc, Zn: s-block, metal',
      'Germanium, Ge: p-block, non-metal',
      'Gallium, Ga: p-block, metal',
      'Cerium, Ce: d-block, metal'
    ],
    answer: 2,
    misconception: {
      0: 'Zinc is a metal, but it is in group 12. Groups 3 to 12 are the d-block.',
      1: 'Germanium is in the p-block, but it lies on the diagonal boundary. It is a metalloid.',
      3: 'Cerium is a metal, but it is in the first of the two rows drawn below the main table. Those rows are the f-block.'
    },
    hints: ['Find the group of each element. Groups 1–2: s-block. Groups 3–12: d-block. Groups 13–18: p-block.', 'The metalloids include B, Si, Ge, As, Sb and Te.'],
    solution: '<p>Gallium is in group 13, so it is in the <strong>p-block</strong>. It is below aluminium and to the left of the metalloid boundary, so it is a <strong>metal</strong>. The p-block contains metals, metalloids and non-metals.</p>'
  },

  /* ======================= Structure 3.1.2 (SL) ============================ */
  {
    id: 's3-1-q005', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.2',
    stem: '<p>An atom has the electron configuration ' + cfg('1s2 2s2 2p6 3s2 3p4') + '. Where is the element in the periodic table?</p>',
    options: ['Period 3, group 16', 'Period 3, group 6', 'Period 4, group 16', 'Period 6, group 3'],
    answer: 0,
    misconception: {
      1: 'The atom has 6 valence electrons, but groups are numbered 1 to 18. For a p-block element, group number = valence electrons + 10.',
      2: 'The period number is the outer energy level that contains electrons. Here that is level 3, not 4.',
      3: 'Period and group are swapped. The outer energy level (3) gives the period. The valence electrons (6) give the group.'
    },
    hints: ['Which is the highest energy level that contains electrons? That is the period.', 'Count the electrons in that outer level. For the p-block, add 10 to get the group number.'],
    solution: '<p>The outer occupied energy level is n = 3, so the element is in <strong>period 3</strong>. The outer level holds 2 + 4 = 6 valence electrons. The element is in the p-block, so the group is 6 + 10 = <strong>16</strong>. The element is sulfur.</p>'
  },
  {
    id: 's3-1-q006', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.2',
    stem: '<p>An element is in period 4 and group 7 of the periodic table. What is the electron configuration of its atom?</p>',
    options: [cfg('[Ar] 4s2 4p5'), cfg('[Ar] 4s2 3d7'), cfg('[Kr] 4s2 3d5'), cfg('[Ar] 4s2 3d5')],
    answer: 3,
    misconception: {
      0: 'This configuration has 7 electrons in the fourth level, but it also leaves out the 3d sublevel. Seven outer s and p electrons belong to group 17, not group 7.',
      1: 'For groups 3 to 12, the group number equals the number of 4s electrons plus 3d electrons. Here 2 + 7 = 9, which is group 9.',
      2: 'The noble gas in the brackets is the one at the end of the period before. For period 4 that is argon. [Kr] would put the element in period 5.'
    },
    hints: ['Groups 3 to 12 in period 4 are the d-block. The 3d sublevel is being filled.', 'For groups 3 to 12: group number = number of 4s electrons + number of 3d electrons.'],
    solution: '<p>Period 4 means the outer energy level is n = 4, and the core is argon. Group 7 is in the d-block, so the 4s and 3d electrons add up to 7: ' + cfg('[Ar] 4s2 3d5') + '. The element is manganese. (IB also accepts ' + cfg('[Ar] 3d5 4s2') + '.)</p>'
  },
  {
    id: 's3-1-q007', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.1.2',
    stem: '<p>Which statements are correct? Select all that apply.</p>',
    options: [
      'Elements in the same group have the same number of valence electrons.',
      'Elements in the same period have the same number of valence electrons.',
      'The period number is the number of the outer energy level that contains electrons.',
      'Bromine is a halogen.',
      'Calcium is an alkali metal.'
    ],
    answer: [0, 2, 3],
    misconception: {
      1: 'Across a period the number of valence electrons increases by one each time. What stays the same in a period is the outer occupied energy level.',
      4: 'The alkali metals are the group 1 metals (Li, Na, K, …). Calcium is in group 2.'
    },
    hints: ['A group is a column. A period is a row.', 'Alkali metals: group 1. Halogens: group 17. Noble gases: group 18. Transition elements: in the d-block.'],
    solution: '<p>Elements in a <strong>group</strong> have the same number of valence electrons. Elements in a <strong>period</strong> have the same outer occupied energy level, and the period number is the number of that level. Bromine is in group 17, so it is a halogen. Calcium is in group 2, so it is not an alkali metal.</p>'
  },
  {
    id: 's3-1-q008', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.2',
    stem: '<p>The ion ' + ch('X^2-') + ' has the electron configuration ' + cfg('1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6') + '. Where is element X in the periodic table?</p>',
    options: ['Period 4, group 18', 'Period 4, group 16', 'Period 5, group 2', 'Period 3, group 16'],
    answer: 1,
    misconception: {
      0: 'This is the position of the atom that has this configuration (krypton). The question gives the configuration of a 2− ion, which has two more electrons than the atom of X.',
      2: 'This adds two electrons. A 2− ion has gained two electrons, so the atom has two <em>fewer</em> electrons than the ion.',
      3: 'The outer occupied level of the ion is n = 4, not n = 3. A sulfide ion has only 18 electrons. This ion has 36.'
    },
    hints: ['How many electrons does the ion have? How many does the neutral atom have?', 'A 2− ion has two more electrons than its atom. Remove the last two electrons that were added.', 'Then read the period from the outer level and the group from the valence electrons.'],
    solution: '<p>The ion has 36 electrons. A 2− ion has gained two electrons, so the atom of X has 34 electrons: ' + cfg('[Ar] 4s2 3d10 4p4') + '.</p><p>The outer level is n = 4, so X is in <strong>period 4</strong>. It has 2 + 4 = 6 valence electrons and is in the p-block, so the group is 6 + 10 = <strong>16</strong>. X is selenium.</p>'
  },

  /* ======================= Structure 3.1.3 (SL) ============================ */
  {
    id: 's3-1-q009', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>The table shows atomic radii from the data booklet.</p>' +
      table('Atomic radius / ' + PM, ['Element', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'], [['Radius', '160', '140', '124', '114', '109', '104', '100']]) +
      '<p>Which statement explains the trend?</p>',
    options: [
      'The number of occupied energy levels decreases across the period.',
      'Shielding by inner electrons decreases across the period.',
      'The nuclear charge increases, and the outer electrons are in the same energy level with similar shielding.',
      'The atoms gain electrons across the period, and electrons repel each other.'
    ],
    answer: 2,
    misconception: {
      0: 'All period 3 atoms have three occupied energy levels. The number of levels does not change across a period.',
      1: 'Every period 3 atom has the same 10 inner electrons, so the shielding by inner electrons stays about the same.',
      3: 'More repulsion would make the atoms larger. The data show that the atoms get smaller. The extra protons in the nucleus have the larger effect.'
    },
    hints: ['Describe the trend first: does the radius increase or decrease from Na to Cl?', 'Compare Na and Cl: number of protons, number of occupied energy levels, number of inner electrons.'],
    solution: '<p>The radius decreases from 160 to 100 (in ' + PM + '). Across period 3 the number of protons rises from 11 to 17, so the <strong>nuclear charge increases</strong>. The outer electrons are all in the <strong>same energy level</strong> (n = 3) and are shielded by the same 10 inner electrons. The outer electrons are attracted more strongly and are pulled closer to the nucleus.</p>'
  },
  {
    id: 's3-1-q010', level: 'sl', tier: 'foundation', type: 'order', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>Use the positions of these elements in the periodic table. Put them in order of <strong>increasing electronegativity</strong> (lowest first).</p>',
    options: ['Potassium, K', 'Sodium, Na', 'Silicon, Si', 'Chlorine, Cl', 'Fluorine, F'],
    hints: ['Electronegativity increases across a period, from left to right.', 'Electronegativity decreases down a group. Compare K with Na, and Cl with F.'],
    solution: '<p>Electronegativity is a measure of how strongly an atom attracts a bonding pair of electrons. It <strong>increases across a period</strong>: the nuclear charge increases while the shielding stays about the same. It <strong>decreases down a group</strong>: the bonding electrons are further from the nucleus and more shielded.</p><p>Data booklet values: K 0.8, Na 0.9, Si 1.9, Cl 3.2, F 4.0.</p>'
  },
  {
    id: 's3-1-q011', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>Which equation represents the first electron affinity of chlorine?</p>',
    options: [
      ch('Cl(g) -> Cl+(g) + e-'),
      ch('Cl-(g) -> Cl(g) + e-'),
      ch('Cl2(g) + 2e- -> 2Cl-(g)'),
      ch('Cl(g) + e- -> Cl-(g)')
    ],
    answer: 3,
    misconception: {
      0: 'This equation removes an electron from the atom. It represents the first ionization energy.',
      1: 'This equation removes an electron from the ion. It is the reverse of the electron affinity.',
      2: 'Electron affinity is defined for separate gaseous <em>atoms</em>, not for molecules, and for one mole of electrons gained.'
    },
    hints: ['“Affinity” here is about gaining an electron, not losing one.', 'The starting particle is one gaseous atom.'],
    solution: '<p>The first electron affinity is the energy change when one mole of electrons is added to one mole of gaseous atoms to form one mole of gaseous 1− ions:</p>' + math([ch('Cl(g) + e- -> Cl-(g)')]) + '<p>For chlorine the data booklet value is ' + MINUS + '349 ' + KJ + '. The negative sign shows that energy is released.</p>'
  },
  {
    id: 's3-1-q012', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.1.3',
    stem: '<p>The first ionization energies of three group 1 elements are: Li 520, Na 496, K 419 (in ' + KJ + ').</p><p>Explain why the first ionization energy decreases down group 1.</p>',
    answer: '<p>Down the group, the outer electron is in a higher energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove the electron.</p><p>Do not write only “the atomic radius increases”. Say <em>why</em>: the electron is in a higher energy level and is more shielded.</p>',
    markscheme: [
      'The outer electron is in a higher energy level / further from the nucleus (do not accept “atomic radius increases” alone).',
      'There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker.'
    ],
    hints: ['Write the outer electron of each atom: 2s, 3s, 4s.', 'Give two reasons why the nucleus holds a 4s electron in K less strongly than a 2s electron in Li.']
  },
  {
    id: 's3-1-q013', level: 'sl', tier: 'exam', type: 'order', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>These five ions all have the electron configuration ' + cfg('1s2 2s2 2p6') + '. Put them in order of <strong>increasing ionic radius</strong> (smallest first).</p>',
    options: [ch('Al^3+'), ch('Mg^2+'), ch('Na+'), ch('F-'), ch('O^2-')],
    hints: ['All five ions have 10 electrons. What is different about them?', 'Count the protons in each nucleus. More protons pull the same 10 electrons closer.'],
    solution: '<p>Each ion has 10 electrons in the same arrangement. The number of protons is different: O 8, F 9, Na 11, Mg 12, Al 13. A larger nuclear charge attracts the same number of electrons more strongly, so the ion is smaller.</p><p>Data booklet ionic radii (in ' + PM + '): ' + ch('Al^3+') + ' 54, ' + ch('Mg^2+') + ' 72, ' + ch('Na+') + ' 102, ' + ch('F-') + ' 133, ' + ch('O^2-') + ' 140.</p>'
  },
  {
    id: 's3-1-q014', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>The data booklet gives these radii: Na atom 160, ' + ch('Na+') + ' ion 102 (in ' + PM + ').</p><p>Which statement best explains why the sodium ion is much smaller than the sodium atom?</p>',
    options: [
      'The ion has more protons than the atom.',
      'The ion has one fewer occupied energy level than the atom.',
      'The ion has gained an electron, so the nucleus attracts the electrons more strongly.',
      'The ion has more shielding than the atom.'
    ],
    answer: 1,
    misconception: {
      0: 'Forming an ion does not change the nucleus. The atom and the ion both have 11 protons.',
      2: 'A positive ion forms when an atom <em>loses</em> an electron. Sodium loses its 3s electron.',
      3: 'The ion has fewer electrons than the atom, so it cannot have more shielding.'
    },
    hints: ['Write the electron configuration of Na and of ' + ch('Na+') + '.', 'Which energy level is the outer one in each?'],
    solution: '<p>Na is ' + cfg('1s2 2s2 2p6 3s1') + '. ' + ch('Na+') + ' is ' + cfg('1s2 2s2 2p6') + '. The ion has lost its only electron in the third energy level, so it has <strong>one fewer occupied energy level</strong>. The same 11 protons now attract only 10 electrons, so the remaining electrons are held more closely.</p><p>The opposite happens for a negative ion: ' + ch('Cl-') + ' (181) is larger than Cl (100), because the extra electron increases the repulsion between the outer electrons while the nuclear charge stays the same.</p>'
  },
  {
    id: 's3-1-q015', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.1.3',
    stem: '<p>The table shows ionic radii from the data booklet.</p>' +
      table('Ionic radius / ' + PM, ['Ion', ch('S^2-'), ch('Cl-'), ch('K+'), ch('Ca^2+')], [['Radius', '184', '181', '138', '100']]) +
      '<p>Explain the trend in ionic radius from ' + ch('S^2-') + ' to ' + ch('Ca^2+') + '.</p>',
    answer: '<p>All four ions have 18 electrons and the same electron configuration, ' + cfg('1s2 2s2 2p6 3s2 3p6') + '. The nuclear charge increases from 16 protons in ' + ch('S^2-') + ' to 20 protons in ' + ch('Ca^2+') + '. The same number of electrons is attracted more strongly by the larger nuclear charge, so the electrons are pulled closer to the nucleus and the radius decreases.</p>',
    markscheme: [
      'All four ions have the same number of electrons / the same electron configuration (18 electrons; accept “isoelectronic”).',
      'The nuclear charge / number of protons increases from S (16) to Ca (20).',
      'So the electrons are attracted more strongly / pulled closer to the nucleus (and the radius decreases).'
    ],
    hints: ['Count the electrons in each ion.', 'Count the protons in each ion.', 'Link the two: same electrons, different pull.']
  },
  {
    id: 's3-1-q016', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>Which of these <strong>increase</strong> across period 3 from sodium to chlorine? Select all that apply.</p>',
    options: ['Nuclear charge', 'Atomic radius', 'First ionization energy (general trend)', 'Electronegativity', 'Number of occupied energy levels'],
    answer: [0, 2, 3],
    misconception: {
      1: 'Atomic radius decreases across a period: Na 160, Cl 100 (in 10<sup>−12</sup> m). The increasing nuclear charge pulls the outer electrons closer.',
      4: 'Every period 3 atom has three occupied energy levels. That is what makes them one period.'
    },
    hints: ['Start with the nucleus: what changes from Na (Z = 11) to Cl (Z = 17)?', 'A stronger attraction for outer electrons makes the atom smaller, makes an electron harder to remove, and attracts bonding electrons more.'],
    solution: '<p>Across period 3 the <strong>nuclear charge</strong> increases (11 to 17 protons). The outer electrons are in the same energy level with similar shielding, so they are attracted more strongly. This means:</p><ul><li>atomic radius decreases (160 to 100, in ' + PM + ');</li><li>first ionization energy generally increases (Na 496, Cl 1251 ' + KJ + ');</li><li>electronegativity increases (Na 0.9, Cl 3.2).</li></ul><p>The number of occupied energy levels stays at three.</p>'
  },
  {
    id: 's3-1-q017', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.3',
    stem: '<p>The table shows first electron affinities from the data booklet.</p>' +
      table('First electron affinity / ' + KJ, ['Element', 'F', 'Cl', 'Br', 'I'], [['EA', MINUS + '328', MINUS + '349', MINUS + '325', MINUS + '295']]) +
      '<p>Which statement is supported by the data?</p>',
    options: [
      'A fluorine atom releases the most energy when it gains an electron.',
      'Energy must be supplied to add an electron to each of these atoms.',
      'From chlorine to iodine, less energy is released when an atom gains an electron.',
      'Electron affinity becomes more exothermic down the whole group.'
    ],
    answer: 2,
    misconception: {
      0: 'Read the values again: chlorine (−349) is more negative than fluorine (−328), so chlorine releases more energy. Fluorine has the highest electronegativity, but that is a different property.',
      1: 'All four values are negative. A negative energy change means energy is released (exothermic).',
      3: 'From Cl to Br to I the values become <em>less</em> negative: −349, −325, −295. Less energy is released.'
    },
    hints: ['A more negative value means more energy is released.', 'Compare the size of the numbers from Cl down to I.'],
    solution: '<p>From chlorine to iodine the values change from −349 to −325 to −295 ' + KJ + '. They become less negative, so <strong>less energy is released</strong>.</p><p>Explanation: down the group, the added electron enters a higher energy level. It is further from the nucleus and more shielded, so it is attracted less strongly.</p><p>Fluorine does not follow the pattern. Its atom is very small, so the added electron is repelled more by the electrons already there. You do not need to explain this exception.</p>'
  },
  {
    id: 's3-1-q018', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.1.3',
    stem: '<p>The first ionization energies of three elements are: F 1681, Cl 1251, S 1000 (in ' + KJ + ').</p><p>Explain why the first ionization energy of fluorine is higher than that of chlorine, and why that of chlorine is higher than that of sulfur.</p>',
    answer: '<p><strong>F and Cl</strong> (same group): the outer electrons of fluorine are in the second energy level. Those of chlorine are in the third. The outer electron in fluorine is closer to the nucleus and is shielded by fewer inner electrons, so it is attracted more strongly.</p><p><strong>Cl and S</strong> (same period): the outer electrons are in the same energy level (n = 3) with the same shielding. Chlorine has 17 protons and sulfur has 16, so chlorine has the larger nuclear charge and attracts its outer electrons more strongly. More energy is needed to remove one.</p>',
    markscheme: [
      'In F the outer electron is in a lower energy level / closer to the nucleus / less shielded than in Cl.',
      'In Cl and S the outer electrons are in the same energy level / have the same (similar) shielding.',
      'Cl has a greater nuclear charge / more protons than S, so the outer electron is attracted more strongly.'
    ],
    hints: ['Treat the two comparisons separately. F and Cl are in the same group. Cl and S are in the same period.', 'Same group: what changes is the energy level and the shielding.', 'Same period: what changes is the nuclear charge.']
  },

  /* ======================= Structure 3.1.4 (SL) ============================ */
  {
    id: 's3-1-q019', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.4',
    stem: '<p>A small piece of sodium is added to a large trough of water. What is observed?</p>',
    options: [
      'The sodium sinks and reacts slowly.',
      'The sodium floats, moves across the surface and fizzes.',
      'The sodium floats and a brown gas is given off.',
      'The sodium sinks and a white precipitate forms.'
    ],
    answer: 1,
    misconception: {
      0: 'Sodium is less dense than water, so it floats. The reaction is fast.',
      2: 'The gas is hydrogen, which is colourless.',
      3: 'Sodium floats. The product, sodium hydroxide, is soluble, so the solution stays clear and colourless.'
    },
    hints: ['Is sodium more dense or less dense than water?', 'One product is a gas. What do you see when a gas forms in a liquid?'],
    solution: '<p>Sodium <strong>floats</strong>, melts into a ball, <strong>moves</strong> across the surface, <strong>fizzes</strong> and gets smaller until it disappears. The solution left is alkaline.</p>' + math([ch('2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)')])
  },
  {
    id: 's3-1-q020', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.4',
    stem: '<p>Which is the correct balanced equation for the reaction of potassium with water?</p>',
    options: [
      ch('K(s) + H2O(l) -> KOH(aq) + H2(g)'),
      ch('2K(s) + H2O(l) -> K2O(aq) + H2(g)'),
      ch('2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)'),
      ch('K(s) + 2H2O(l) -> K(OH)2(aq) + H2(g)')
    ],
    answer: 2,
    misconception: {
      0: 'The formulas are right, but the equation is not balanced. Count hydrogen: 2 on the left, 3 on the right.',
      1: 'A group 1 metal and water give the metal <em>hydroxide</em> and hydrogen. The oxide would react with water to give the hydroxide.',
      3: 'Potassium is in group 1, so it forms the 1+ ion. The hydroxide is KOH, not ' + ch('K(OH)2') + '.'
    },
    hints: ['Products: a metal hydroxide and hydrogen gas.', 'Potassium forms ' + ch('K+') + '. Write the formula of the hydroxide, then balance H.'],
    solution: math([ch('2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)')]) + '<p>Check: K 2 = 2; H 4 = 2 + 2; O 2 = 2. All group 1 metals react in the same way, because each atom loses its one valence electron to form a 1+ ion.</p>'
  },
  {
    id: 's3-1-q021', level: 'sl', tier: 'exam', type: 'short', marks: 3,
    syllabus: 'Structure 3.1.4',
    stem: '<p>Lithium, sodium and potassium all react with water. Describe and explain the trend in reactivity from lithium to potassium.</p>',
    answer: '<p>The reactivity increases down the group: the reaction with water becomes more vigorous from lithium to sodium to potassium.</p><p>Down the group, the outer electron is in a higher energy level. It is further from the nucleus and more shielded by inner electrons. The attraction between the nucleus and the outer electron is weaker, so the first ionization energy is lower and the atom loses its outer electron more easily.</p>',
    markscheme: [
      'Reactivity increases down the group / the reaction becomes more vigorous from Li to K.',
      'Down the group the outer electron is in a higher energy level / further from the nucleus AND more shielded.',
      'So the attraction for the outer electron is weaker / the ionization energy is lower / the outer electron is lost more easily.'
    ],
    hints: ['“Describe” needs the direction of the trend. “Explain” needs the reason.', 'In this reaction each metal atom loses one electron. What makes that electron easier to lose?']
  },
  {
    id: 's3-1-q022', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.4',
    stem: '<p>Pairs of aqueous solutions are mixed. In which mixture does a reaction occur?</p>',
    options: [
      ch('Br2(aq)') + ' and ' + ch('KCl(aq)'),
      ch('I2(aq)') + ' and ' + ch('KBr(aq)'),
      ch('I2(aq)') + ' and ' + ch('KCl(aq)'),
      ch('Cl2(aq)') + ' and ' + ch('KI(aq)')
    ],
    answer: 3,
    misconception: {
      0: 'Bromine is below chlorine in group 17, so it is less reactive. It cannot displace chloride ions.',
      1: 'Iodine is below bromine in group 17, so it is less reactive. It cannot displace bromide ions.',
      2: 'Iodine is the least reactive of the three halogens here. It cannot displace chloride ions.'
    },
    hints: ['Reactivity decreases down group 17: ' + ch('Cl2') + ' &gt; ' + ch('Br2') + ' &gt; ' + ch('I2') + '.', 'A halogen displaces the halide ion of a halogen <em>below</em> it in the group.'],
    solution: '<p>A more reactive halogen displaces a less reactive halogen from its halide ion. Chlorine is above iodine, so it reacts:</p>' + math([ch('Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)')]) + '<p>The mixture turns brown as iodine forms. A chlorine atom is smaller than an iodine atom, so the electron it gains is closer to the nucleus and less shielded. Chlorine attracts the extra electron more strongly.</p>'
  },
  {
    id: 's3-1-q023', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.1.4',
    stem: '<p>A student has an aqueous solution of one halogen, ' + ch('X2') + '. The halogen is chlorine, bromine or iodine.</p><ul><li>Test 1: ' + ch('X2(aq)') + ' is added to ' + ch('KCl(aq)') + '. No reaction occurs.</li><li>Test 2: ' + ch('X2(aq)') + ' is added to ' + ch('KI(aq)') + '. A reaction occurs and iodine forms.</li></ul><p>Identify ' + ch('X2') + ', explain your reasoning, and write an ionic equation, with state symbols, for the reaction in test 2.</p>',
    answer: '<p>' + ch('X2') + ' is <strong>bromine</strong>. A halogen displaces the halide ions of a less reactive halogen. Test 2 shows that ' + ch('X2') + ' is more reactive than iodine, so it is not iodine. Test 1 shows that ' + ch('X2') + ' cannot displace chloride ions, so it is less reactive than chlorine (and it is not chlorine, which does not react with its own ions). Reactivity decreases down group 17, so ' + ch('X2') + ' is bromine.</p>' + math([ch('Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)')]),
    markscheme: [
      'X<sub>2</sub> is bromine / Br<sub>2</sub>.',
      'It displaces iodide ions, so it is more reactive than iodine, but it does not displace chloride ions, so it is less reactive than chlorine (accept: reactivity decreases down group 17).',
      ch('Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)') + ' (balanced, with state symbols).'
    ],
    hints: ['Which halogens can displace iodide ions?', 'Which halogen cannot displace chloride ions but can displace iodide ions?', 'In the ionic equation leave out ' + ch('K+') + '. It does not change.']
  },

  /* ======================= Structure 3.1.5 (SL) ============================ */
  {
    id: 's3-1-q024', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Aluminium oxide is described as an amphoteric oxide. What does “amphoteric” mean?</p>',
    options: [
      'The oxide is neutral: it reacts with neither acids nor bases.',
      'The oxide reacts with both acids and bases.',
      'The oxide dissolves in water to give a solution with pH 7.',
      'The oxide contains both a metal and a non-metal.'
    ],
    answer: 1,
    misconception: {
      0: 'Amphoteric is not the same as neutral. A neutral oxide reacts with neither. An amphoteric oxide reacts with both.',
      2: 'Amphoteric describes how the oxide reacts, not the pH of a solution. Aluminium oxide does not dissolve in water.',
      3: 'Every metal oxide contains a metal and a non-metal (oxygen). Amphoteric describes acid–base behaviour.'
    },
    hints: ['Think about where aluminium is in period 3: between the metals with basic oxides and the non-metals with acidic oxides.'],
    solution: '<p>An amphoteric oxide can act as a base and as an acid: it <strong>reacts with both acids and bases</strong>. Across a period the oxides change from basic (metals, on the left) through amphoteric to acidic (non-metals, on the right). Aluminium oxide is in the middle.</p>'
  },
  {
    id: 's3-1-q025', level: 'sl', tier: 'exam', type: 'order', marks: 1,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Put these period 3 oxides in order, from the <strong>most basic</strong> (top) to the <strong>most acidic</strong> (bottom).</p>',
    options: [ch('Na2O'), ch('MgO'), ch('Al2O3'), ch('SO3')],
    hints: ['Find Na, Mg, Al and S in period 3.', 'Metal oxides are basic. Non-metal oxides are acidic. The change across the period is gradual.'],
    solution: '<p>Across period 3 the elements change from metals to non-metals, and the oxides change from basic to acidic. ' + ch('Na2O') + ' is strongly basic and ' + ch('MgO') + ' is basic. ' + ch('Al2O3') + ' is amphoteric. ' + ch('SO3') + ' is a non-metal oxide and is strongly acidic.</p>'
  },
  {
    id: 's3-1-q026', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Deduce equations, including state symbols, for the reactions with water of:</p><ul><li>(a) lithium oxide</li><li>(b) calcium oxide.</li></ul>',
    answer: math([ch('Li2O(s) + H2O(l) -> 2LiOH(aq)'), ch('CaO(s) + H2O(l) -> Ca(OH)2(aq)')]) + '<p>An oxide of a group 1 or group 2 metal reacts with water to form the metal hydroxide only. No hydrogen forms. The solutions are alkaline.</p>',
    markscheme: [
      ch('Li2O(s) + H2O(l) -> 2LiOH(aq)') + ' (balanced, with state symbols).',
      ch('CaO(s) + H2O(l) -> Ca(OH)2(aq)') + ' (with state symbols; accept ' + ch('Ca(OH)2(s)') + ').'
    ],
    hints: ['Metal oxide + water → metal hydroxide.', 'Lithium forms ' + ch('Li+') + ' and calcium forms ' + ch('Ca^2+') + '. Write each hydroxide formula first, then balance.']
  },
  {
    id: 's3-1-q027', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Which statement about ocean acidification is correct?</p>',
    options: [
      'It is caused mainly by acid rain falling into the sea.',
      'It is caused by sulfur dioxide from the sea floor dissolving in sea water.',
      'It is caused by more carbon dioxide from the atmosphere dissolving in sea water.',
      'It is caused by metal oxides dissolving in sea water.'
    ],
    answer: 2,
    misconception: {
      0: 'Acid rain and ocean acidification are two different problems. Acid rain is caused by oxides of sulfur and nitrogen. Ocean acidification is caused by carbon dioxide.',
      1: 'Sulfur dioxide is linked to acid rain. The cause of ocean acidification is the rising level of carbon dioxide in the atmosphere.',
      3: 'Metal oxides are basic. They would raise the pH, not lower it.'
    },
    hints: ['Which gas in the atmosphere is increasing in concentration?', 'Is the oxide of carbon acidic or basic?'],
    solution: '<p>Carbon dioxide is an acidic non-metal oxide. As the level of ' + ch('CO2') + ' in the atmosphere rises, more of it dissolves in sea water and forms carbonic acid:</p>' + math([ch('CO2(g) + H2O(l) <=> H2CO3(aq)')]) + '<p>This lowers the pH of the sea water. The process is called ocean acidification.</p>'
  },
  {
    id: 's3-1-q028', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Some coal contains sulfur. When the coal burns, the sulfur also burns. Explain how this leads to acid rain. Include two equations with state symbols.</p>',
    answer: '<p>The sulfur burns to form sulfur dioxide, a gaseous non-metal oxide:</p>' + math([ch('S(s) + O2(g) -> SO2(g)')]) + '<p>Sulfur dioxide is an acidic oxide. It reacts with water in the atmosphere to form an acid:</p>' + math([ch('SO2(g) + H2O(l) <=> H2SO3(aq)')]) + '<p>The acid lowers the pH of the rain. (Sulfur dioxide can also be oxidized in the air to ' + ch('SO3') + ', which reacts with water to form sulfuric acid: ' + ch('SO3(g) + H2O(l) -> H2SO4(aq)') + '.)</p>',
    markscheme: [
      ch('S(s) + O2(g) -> SO2(g)'),
      ch('SO2(g) + H2O(l) <=> H2SO3(aq)') + ' (accept →; accept ' + ch('SO3(g) + H2O(l) -> H2SO4(aq)') + ').',
      'Sulfur dioxide is an acidic (non-metal) oxide that dissolves in / reacts with rain water to form an acid, so the pH of the rain is lowered.'
    ],
    hints: ['First equation: sulfur burning in oxygen.', 'Second equation: the oxide reacting with water. A non-metal oxide and water form an acid.', 'Finish by saying what the acid does to the rain.']
  },
  {
    id: 's3-1-q029', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Selenium is directly below sulfur in group 16. Selenium dioxide, ' + ch('SeO2') + ', is a solid that dissolves in water. Which is the best prediction for this reaction?</p>',
    options: [
      'An alkaline solution forms: ' + ch('SeO2(s) + 2H2O(l) -> Se(OH)4(aq)'),
      'A neutral solution forms, because ' + ch('SeO2') + ' is amphoteric.',
      'An acidic solution forms: ' + ch('SeO2(s) + H2O(l) -> H2SeO4(aq)'),
      'An acidic solution forms: ' + ch('SeO2(s) + H2O(l) -> H2SeO3(aq)')
    ],
    answer: 3,
    misconception: {
      0: 'Hydroxides form from the oxides of metals in groups 1 and 2. Selenium is a non-metal, like sulfur, so its oxide is acidic.',
      1: 'Amphoteric does not mean neutral, and amphoteric oxides are found near the metal–non-metal boundary. Selenium is a non-metal in group 16.',
      2: 'The oxide is acidic, but this equation is not balanced: 3 oxygen atoms on the left and 4 on the right. Compare with ' + ch('SO2') + ', which forms ' + ch('H2SO3') + '.'
    },
    hints: ['Is selenium a metal or a non-metal? Use its group.', 'Use the reaction of ' + ch('SO2') + ' with water as your model.', 'Check that the equation you choose is balanced.'],
    solution: '<p>Elements in the same group have similar chemical properties. Sulfur dioxide is an acidic non-metal oxide:</p>' + math([ch('SO2(g) + H2O(l) <=> H2SO3(aq)')]) + '<p>Selenium is also a non-metal in group 16, so ' + ch('SeO2') + ' should react in the same way:</p>' + math([ch('SeO2(s) + H2O(l) -> H2SeO3(aq)')]) + '<p>Check: Se 1 = 1; O 3 = 3; H 2 = 2. The solution is acidic.</p>'
  },

  /* ======================= Structure 3.1.6 (SL) ============================ */
  {
    id: 's3-1-q030', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>Which is the oxidation state of sulfur in the sulfate ion, ' + ch('SO4^2-') + ', written correctly?</p>',
    options: ['6+', '+6', MINUS + '2', '+8'],
    answer: 1,
    misconception: {
      0: 'The number is right, but the notation is not. An oxidation state has the sign first: +6. “6+” is how you write the charge on an ion. IB markschemes reject “6+”.',
      2: 'This is the charge on the whole ion. It is the <em>sum</em> of all the oxidation states, not the oxidation state of sulfur.',
      3: 'This treats the ion as if it had no charge. The oxidation states must add up to the charge on the ion, −2, not to zero.'
    },
    hints: ['Oxygen is −2 in most compounds.', 'The oxidation states in an ion add up to the charge on the ion.', 'Write the sign first, then the number.'],
    solution: '<p>Let the oxidation state of sulfur be <i>x</i>. Oxygen is −2.</p>' + math(['<i>x</i> + 4(' + MINUS + '2) = ' + MINUS + '2', '<i>x</i> = ' + MINUS + '2 + 8 = <b>+6</b>']) + '<p>Write the sign first and then the number: +6. A Roman numeral (VI) is also accepted. “6+” and “6” do not score.</p>'
  },
  {
    id: 's3-1-q031', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>The oxidation state of each chlorine atom in ' + ch('Cl2') + ' is 0. Which statement explains this?</p>',
    options: [
      'The molecule has no overall charge.',
      'Each chlorine atom has seven valence electrons.',
      'The two atoms are identical, so the bonding electrons are shared equally and no electrons are transferred.',
      'The bond in ' + ch('Cl2') + ' is ionic, so the two charges cancel.'
    ],
    answer: 2,
    misconception: {
      0: 'True, but it is not the reason. HCl also has no overall charge, yet its atoms have oxidation states +1 and −1.',
      1: 'True, but the number of valence electrons does not fix the oxidation state. Chlorine is −1 in NaCl and 0 in ' + ch('Cl2') + '.',
      3: 'The bond in ' + ch('Cl2') + ' is covalent. Two identical atoms cannot transfer electrons to each other.'
    },
    hints: ['An oxidation state is the charge an atom would have if the compound were made of ions.', 'To imagine ions, you give the bonding electrons to the more electronegative atom. What if both atoms are the same?'],
    solution: '<p>The oxidation state shows the number of electrons transferred in forming a bond. In an element, the atoms are identical and have the same electronegativity. The bonding electrons are <strong>shared equally</strong>, so <strong>no electrons are transferred</strong> and each atom has oxidation state 0.</p>'
  },
  {
    id: 's3-1-q032', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>Deduce the oxidation state of oxygen in hydrogen peroxide, ' + ch('H2O2') + '.</p><p>Type the sign first and then the number, for example +3 or ' + MINUS + '3.</p>',
    answer: -1, tolerance: { abs: 0 }, unit: '',
    answerDisplay: MINUS + '1',
    correctNote: 'In an exam, write −1 with the sign first.',
    hints: ['Hydrogen is +1 here, because it is bonded to a non-metal.', 'The oxidation states in a compound add up to zero. Do not assume that oxygen is −2.'],
    solution: '<p>Hydrogen is +1. Let the oxidation state of oxygen be <i>x</i>.</p>' + math(['2(+1) + 2<i>x</i> = 0', '<i>x</i> = <b>' + MINUS + '1</b>']) + '<p>Oxygen is −2 in most compounds, but in <strong>peroxides</strong> it is −1. Always work it out from the other atoms.</p>'
  },
  {
    id: 's3-1-q033', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>In which compound does hydrogen have the oxidation state ' + MINUS + '1?</p>',
    options: [ch('NH3'), ch('H2O2'), ch('HCl'), ch('NaH')],
    answer: 3,
    misconception: {
      0: 'Nitrogen is more electronegative than hydrogen. In ' + ch('NH3') + ' nitrogen is −3 and hydrogen is +1.',
      1: 'In hydrogen peroxide it is the <em>oxygen</em> that has the unusual value, −1. Hydrogen is +1.',
      2: 'Chlorine is more electronegative than hydrogen. In HCl hydrogen is +1 and chlorine is −1.'
    },
    hints: ['Hydrogen is +1 when it is bonded to a more electronegative atom.', 'Which compound has hydrogen bonded to a metal?'],
    solution: '<p>Sodium is a group 1 metal and is always +1 in its compounds. In NaH the oxidation states add up to zero, so hydrogen is <strong>−1</strong>. Hydrogen is −1 in <strong>metal hydrides</strong>, because the metal is less electronegative than hydrogen.</p>'
  },
  {
    id: 's3-1-q034', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>Deduce the oxidation state of chromium in the dichromate ion, ' + ch('Cr2O7^2-') + '.</p><p>Type the sign first and then the number, for example +3 or ' + MINUS + '3.</p>',
    answer: 6, tolerance: { abs: 0 }, unit: '',
    answerDisplay: '+6',
    correctNote: 'In an exam, write +6 with the sign first. “6+” and “6” do not score.',
    hints: ['Oxygen is −2. There are seven oxygen atoms.', 'The total must equal the charge on the ion, −2.', 'There are two chromium atoms. Divide the total for chromium by 2.'],
    solution: '<p>Let the oxidation state of chromium be <i>x</i>. Oxygen is −2.</p>' + math(['2<i>x</i> + 7(' + MINUS + '2) = ' + MINUS + '2', '2<i>x</i> = ' + MINUS + '2 + 14 = +12', '<i>x</i> = <b>+6</b>']) + '<p>The ion can be named dichromate(VI).</p>'
  },
  {
    id: 's3-1-q035', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>What is the formula of copper(I) oxide?</p>',
    options: [ch('CuO'), ch('CuO2'), ch('Cu2O'), ch('Cu2O3')],
    answer: 2,
    misconception: {
      0: 'In CuO, copper is +2 (it balances one ' + ch('O^2-') + '). This is copper(II) oxide.',
      1: 'The Roman numeral gives the oxidation state of the metal, not the number of oxygen atoms. In ' + ch('CuO2') + ' copper would be +4.',
      3: 'In ' + ch('Cu2O3') + ' copper would be +3: 2<i>x</i> + 3(−2) = 0. That would be copper(III) oxide.'
    },
    hints: ['The Roman numeral (I) means that copper has oxidation state +1.', 'Oxide is ' + ch('O^2-') + '. How many +1 ions balance one 2− ion?'],
    solution: '<p>The Roman numeral gives the oxidation state of copper: +1. Oxygen is −2. Two copper atoms at +1 balance one oxygen at −2:</p>' + math(['2(+1) + (' + MINUS + '2) = 0']) + '<p>The formula is ' + ch('Cu2O') + '.</p>'
  },
  {
    id: 's3-1-q036', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>The sulfate(IV) ion is also called the sulfite ion. Which is its formula?</p>',
    options: [ch('SO3^2-'), ch('SO4^2-'), ch('SO3'), ch('S^2-')],
    answer: 0,
    misconception: {
      1: 'In ' + ch('SO4^2-') + ' sulfur is +6: <i>x</i> + 4(−2) = −2. This is sulfate(VI), usually called sulfate.',
      2: ch('SO3') + ' is a molecule, sulfur trioxide, not an ion. Sulfur is +6 in it.',
      3: ch('S^2-') + ' is the sulfide ion. Sulfur is −2. Names ending in -ate or -ite contain oxygen.'
    },
    hints: ['The Roman numeral (IV) is the oxidation state of sulfur: +4.', 'Test each ion: sulfur + oxygens (each −2) = charge on the ion.'],
    solution: '<p>Sulfate(IV) means sulfur has oxidation state +4. Test ' + ch('SO3^2-') + ':</p>' + math(['<i>x</i> + 3(' + MINUS + '2) = ' + MINUS + '2', '<i>x</i> = <b>+4</b>']) + '<p>So ' + ch('SO3^2-') + ' is sulfate(IV), or sulfite. ' + ch('SO4^2-') + ' is sulfate(VI), or sulfate. In the same way, ' + ch('NO2-') + ' is nitrite (nitrogen +3) and ' + ch('NO3-') + ' is nitrate (nitrogen +5). IB accepts both kinds of name.</p>'
  },
  {
    id: 's3-1-q037', level: 'sl', tier: 'challenge', type: 'order', marks: 1,
    syllabus: 'Structure 3.1.6',
    stem: '<p>Put these species in order of <strong>increasing oxidation state of nitrogen</strong> (most negative first).</p>',
    options: [ch('NH4+'), ch('N2H4'), ch('N2'), ch('NO2-'), ch('NO3-')],
    hints: ['Hydrogen is +1 and oxygen is −2 in all of these.', 'For an ion, the total equals the charge on the ion. For an element, the oxidation state is 0.', 'In ' + ch('N2H4') + ' there are two nitrogen atoms: divide by 2.'],
    solution: math([
      ch('NH4+') + ': <i>x</i> + 4(+1) = +1, so <i>x</i> = ' + MINUS + '3',
      ch('N2H4') + ': 2<i>x</i> + 4(+1) = 0, so <i>x</i> = ' + MINUS + '2',
      ch('N2') + ': element, so <i>x</i> = 0',
      ch('NO2-') + ': <i>x</i> + 2(' + MINUS + '2) = ' + MINUS + '1, so <i>x</i> = +3',
      ch('NO3-') + ': <i>x</i> + 3(' + MINUS + '2) = ' + MINUS + '1, so <i>x</i> = +5'
    ]) + '<p>Nitrogen shows oxidation states from −3 to +5.</p>'
  },

  /* ======================= Structure 3.1.7 (AHL) =========================== */
  {
    id: 's3-1-q038', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.7',
    stem: '<p>The table shows first ionization energies from the data booklet for period 2.</p>' +
      table('First ionization energy / ' + KJ, ['Element', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'], [['IE', '520', '900', '801', '1086', '1402', '1314', '1681', '2081']]) +
      '<p>The general trend is an increase. Which two elements have a <strong>lower</strong> first ionization energy than the element before them?</p>',
    options: ['Be and N', 'B and O', 'C and F', 'Li and Ne'],
    answer: 1,
    misconception: {
      0: 'Be (900) is higher than Li (520), and N (1402) is higher than C (1086). These are the elements that come <em>before</em> each decrease.',
      2: 'C (1086) is higher than B (801), and F (1681) is higher than O (1314). These follow the general trend.',
      3: 'Li is the first element in the period, and Ne has the highest value of all.'
    },
    hints: ['Go along the row. Compare each value with the one to its left.', 'There are two places where the value goes down.'],
    solution: '<p>The value falls from Be (900) to <strong>B</strong> (801), and from N (1402) to <strong>O</strong> (1314). These two decreases are called discontinuities.</p><ul><li>B: the electron is removed from the 2p sublevel, which is higher in energy than the 2s sublevel.</li><li>O: the electron is removed from a 2p orbital that holds two electrons. The two electrons repel each other, so one is removed more easily.</li></ul>'
  },
  {
    id: 's3-1-q039', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.1.7',
    stem: '<p>The first ionization energy of magnesium is 738 ' + KJ + '. The first ionization energy of aluminium is 578 ' + KJ + '.</p><p>Explain why the value for aluminium is lower, even though aluminium has a greater nuclear charge.</p>',
    answer: '<p>Mg is ' + cfg('[Ne] 3s2') + ' and Al is ' + cfg('[Ne] 3s2 3p1') + '. In magnesium the electron is removed from the 3s sublevel. In aluminium it is removed from the 3p sublevel. The 3p sublevel is higher in energy than the 3s sublevel, so less energy is needed to remove the electron.</p><p>Do not write that a full 3s sublevel is “specially stable”. Base your answer on the energy of the electron that is removed.</p>',
    markscheme: [
      'In Al the electron is removed from the 3p sublevel, and in Mg from the 3s sublevel.',
      'The 3p sublevel is higher in energy than the 3s sublevel (accept: the 3p electron is further from the nucleus / is also shielded by the 3s electrons), so less energy is needed.'
    ],
    hints: ['Write the electron configuration of each atom.', 'From which sublevel is the electron removed in each atom? Which sublevel is higher in energy?']
  },
  {
    id: 's3-1-q040', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.1.7',
    stem: '<p>The first ionization energy of phosphorus is 1012 ' + KJ + '. The first ionization energy of sulfur is 1000 ' + KJ + '.</p><p>Explain why the value for sulfur is lower, even though sulfur has a greater nuclear charge.</p>',
    answer: '<p>P is ' + cfg('[Ne] 3s2 3p3') + ': each of the three 3p orbitals holds one electron. S is ' + cfg('[Ne] 3s2 3p4') + ': one 3p orbital holds two electrons. In sulfur the electron is removed from this doubly occupied orbital. The two electrons in the same orbital repel each other, so less energy is needed to remove one of them.</p><p>Do not write that a half-filled 3p sublevel is “specially stable”. IB does not accept this.</p>',
    markscheme: [
      'In S the electron is removed from a 3p orbital that contains two electrons / a paired electron is removed (in P each 3p orbital contains one electron).',
      'The two electrons in the same orbital repel each other, so less energy is needed to remove one.'
    ],
    hints: ['Draw the 3p orbitals as three boxes for P and for S.', 'In which atom does one box contain two electrons? What do two electrons in one orbital do to each other?']
  },
  {
    id: 's3-1-q041', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.7',
    stem: '<p>The graph shows the first ionization energies of the period 3 elements, from the data booklet.</p>' +
      ieGraph(['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'], [496, 738, 578, 787, 1012, 1000, 1251, 1520], 'Graph of first ionization energy in kilojoules per mole against element for period 3. Sodium 496, magnesium 738, aluminium 578, silicon 787, phosphorus 1012, sulfur 1000, chlorine 1251, argon 1520. The general trend is upward, with small decreases at aluminium and at sulfur.') +
      '<p>What do the decreases at aluminium and at sulfur show?</p>',
    options: [
      'A filled or half-filled sublevel has a special stability.',
      'The nuclear charge decreases at aluminium and at sulfur.',
      'The electrons in the third energy level do not all have the same energy.',
      'Aluminium and sulfur each start a new main energy level.'
    ],
    answer: 2,
    misconception: {
      0: 'The guide says explanations must be based on the energy of the electron removed, not on “special stability”. Markschemes reject this argument.',
      1: 'The nuclear charge increases by one proton at every step across the period, including at aluminium and sulfur.',
      3: 'All period 3 elements have their outer electrons in the same main energy level, n = 3. A new main level starts at the next period (potassium), where the drop is much larger.'
    },
    hints: ['If all the n = 3 electrons had the same energy, what would the graph look like?', 'The decrease at Al comes with the first 3p electron. What does that tell you about 3s and 3p?'],
    solution: '<p>Nuclear charge increases steadily across the period. If all the electrons in the third energy level had the same energy, the first ionization energy would rise steadily too. It does not.</p><p>The decrease at aluminium shows that the 3p electron is at a higher energy than the 3s electrons. So the main energy level is split into <strong>sublevels of different energy</strong>. The decrease at sulfur shows the effect of repulsion when a p orbital holds two electrons. The discontinuities are evidence for sublevels.</p>'
  },

  /* ======================= Structure 3.1.8 (AHL) =========================== */
  {
    id: 's3-1-q042', level: 'ahl', tier: 'foundation', type: 'multi', marks: 1,
    syllabus: 'Structure 3.1.8',
    stem: '<p>Which are characteristic properties of transition elements? Select all that apply.</p>',
    options: [
      'Variable oxidation states',
      'Low melting points',
      'Formation of coloured compounds',
      'Catalytic properties',
      'Formation of complex ions with ligands',
      'Poor electrical conductivity'
    ],
    answer: [0, 2, 3, 4],
    misconception: {
      1: 'Transition elements have <em>high</em> melting points. Their metallic bonding is strong.',
      5: 'Transition elements are metals. They are good electrical conductors.'
    },
    hints: ['Think about iron or copper: are they easy to melt? Do they conduct?', 'The guide lists six properties: variable oxidation state, high melting points, magnetic properties, catalytic properties, coloured compounds and complex ions.'],
    solution: '<p>Transition elements have incomplete d sublevels. This gives them characteristic properties: <strong>variable oxidation states</strong>, <strong>high melting points</strong>, <strong>magnetic properties</strong>, <strong>catalytic properties</strong>, <strong>coloured compounds</strong>, and <strong>complex ions with ligands</strong>. You need to recognize this list.</p>'
  },
  {
    id: 's3-1-q043', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.8',
    stem: '<p>Zinc is in the d-block. Its atom has the configuration ' + cfg('[Ar] 4s2 3d10') + ' and its only common ion is ' + ch('Zn^2+') + '. Why is zinc not classed as a transition element?</p>',
    options: [
      'Zinc has a full 4s sublevel.',
      'Neither the zinc atom nor the ' + ch('Zn^2+') + ' ion has an incomplete d sublevel.',
      'The ' + ch('Zn^2+') + ' ion has the configuration ' + cfg('[Ar] 4s2 3d8') + '.',
      'Zinc is a metal with a high density.'
    ],
    answer: 1,
    misconception: {
      0: 'True, but iron and many other transition elements also have a full 4s sublevel. The d sublevel is what matters.',
      2: 'The 4s electrons are lost first when a first-row d-block atom forms an ion. ' + ch('Zn^2+') + ' is ' + cfg('[Ar] 3d10') + '.',
      3: 'True, but this does not decide whether an element is a transition element.'
    },
    hints: ['What feature of the d sublevel makes an element a transition element?', 'Write the configuration of ' + ch('Zn^2+') + '. Remember which electrons are lost first.'],
    solution: '<p>A transition element has an <strong>incomplete d sublevel</strong> (as an atom or in its ions). Zn is ' + cfg('[Ar] 4s2 3d10') + ' and ' + ch('Zn^2+') + ' is ' + cfg('[Ar] 3d10') + '. The 3d sublevel is full in both. So zinc does not show the characteristic properties: it has one oxidation state in its compounds, and its compounds are not coloured.</p>'
  },
  {
    id: 's3-1-q044', level: 'ahl', tier: 'challenge', type: 'short', marks: 2,
    syllabus: 'Structure 3.1.8',
    stem: '<p>Scandium has the electron configuration ' + cfg('[Ar] 4s2 3d1') + '. In its compounds it forms only the ' + ch('Sc^3+') + ' ion.</p><p>Give one argument for and one argument against classing scandium as a transition element.</p>',
    answer: '<p><strong>For:</strong> the scandium atom has an incomplete d sublevel (' + cfg('3d1') + ').</p><p><strong>Against:</strong> the only ion, ' + ch('Sc^3+') + ', has the configuration ' + cfg('[Ar]') + ', with no d electrons. So scandium does not show characteristic properties of transition elements: it has only one oxidation state (+3) in its compounds, and its compounds are not coloured.</p>',
    markscheme: [
      'For: the atom has an incomplete / partially filled d sublevel (3d<sup>1</sup>).',
      'Against: ' + ch('Sc^3+') + ' has no d electrons / is [Ar] (accept: it shows only one oxidation state / its compounds are not coloured).'
    ],
    hints: ['Look at the 3d sublevel in the atom.', 'Now write the configuration of ' + ch('Sc^3+') + '. Which three electrons are lost?']
  },
  {
    id: 's3-1-q045', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.8',
    stem: '<p>Transition elements form complex ions with ligands. What is a ligand?</p>',
    options: [
      'The positive metal ion at the centre of a complex ion.',
      'A molecule or ion that accepts a pair of electrons from a metal ion.',
      'An ion outside the square brackets that balances the charge of a complex ion.',
      'A molecule or ion with a lone pair of electrons that forms a coordination bond to a central metal ion.'
    ],
    answer: 3,
    misconception: {
      0: 'The metal ion is the centre of the complex. The ligands are the species bonded around it.',
      1: 'The direction is reversed. The ligand <em>donates</em> the electron pair. The metal ion accepts it.',
      2: 'An ion outside the brackets is not bonded to the metal ion. Ligands are written inside the square brackets.'
    },
    hints: ['Examples of ligands: ' + ch('H2O') + ', ' + ch('NH3') + ', ' + ch('Cl-') + '. What do these have in common?', 'In a coordination bond, both electrons of the shared pair come from the same atom.'],
    solution: '<p>A ligand is a molecule or ion that has a <strong>lone pair of electrons</strong>. It donates the lone pair to the central metal ion and forms a <strong>coordination bond</strong>. In ' + ch('[Cu(H2O)6]^2+') + ' the six water molecules are the ligands.</p>'
  },
  {
    id: 's3-1-q046', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.1.8',
    stem: '<p>Deduce the oxidation state of chromium in the compound ' + ch('[Cr(H2O)4Cl2]Cl') + '.</p><p>Type the sign first and then the number, for example +3 or ' + MINUS + '3.</p>',
    answer: 3, tolerance: { abs: 0 }, unit: '',
    answerDisplay: '+3',
    correctNote: 'In an exam, write +3 (or III) with the sign first. “3+” and “3” do not score.',
    hints: ['The chloride ion outside the brackets is ' + ch('Cl-') + '. What is the charge on the complex ion inside the brackets?', 'Water is a neutral ligand. Each chloride ligand is 1−.', 'Chromium + ligand charges = charge on the complex ion.'],
    solution: '<p>The compound has no overall charge. The ion outside the brackets is ' + ch('Cl-') + ', so the complex ion is ' + ch('[Cr(H2O)4Cl2]+') + '.</p><p>Inside the complex: water is neutral (0), and each chloride ligand is −1. Let chromium be <i>x</i>.</p>' + math(['<i>x</i> + 4(0) + 2(' + MINUS + '1) = +1', '<i>x</i> = <b>+3</b>'])
  },
  {
    id: 's3-1-q047', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.1.8',
    stem: '<p>Which statements about the complex ion ' + ch('[CuCl4]^2-') + ' are correct? Select all that apply.</p>',
    options: [
      'The chloride ions are the ligands.',
      'Each chloride ion donates a pair of electrons to the copper ion.',
      'The bonds between copper and chlorine are coordination bonds.',
      'The oxidation state of copper is ' + MINUS + '2.',
      'The copper ion donates pairs of electrons to the chloride ions.',
      'The oxidation state of copper is +2.'
    ],
    answer: [0, 1, 2, 5],
    misconception: {
      3: 'The charge on the whole complex ion is 2−. That is not the oxidation state of copper. Four ' + ch('Cl-') + ' ligands give −4, so copper is +2.',
      4: 'The direction is reversed. Ligands donate lone pairs. The metal ion accepts them.'
    },
    hints: ['Each ligand is a chloride ion, ' + ch('Cl-') + ', with lone pairs.', 'Copper + 4(−1) = −2.'],
    solution: '<p>The four chloride ions are the <strong>ligands</strong>. Each one donates a lone pair to the copper ion, so each Cu–Cl bond is a <strong>coordination bond</strong>.</p>' + math(['<i>x</i> + 4(' + MINUS + '1) = ' + MINUS + '2', '<i>x</i> = <b>+2</b>']) + '<p>The oxidation state of copper is +2.</p>'
  },

  /* ======================= Structure 3.1.9 (AHL) =========================== */
  {
    id: 's3-1-q048', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.9',
    stem: '<p>An iron atom has the electron configuration ' + cfg('[Ar] 4s2 3d6') + '. What is the electron configuration of the ' + ch('Fe^2+') + ' ion?</p>',
    options: [cfg('[Ar] 3d6'), cfg('[Ar] 4s2 3d4'), cfg('[Ar] 4s1 3d5'), cfg('[Ar] 4s2 3d6')],
    answer: 0,
    misconception: {
      1: 'This removes two 3d electrons. When a first-row transition atom forms an ion, the 4s electrons are lost first.',
      2: 'This removes one 4s and one 3d electron. Both 4s electrons are lost before any 3d electron.',
      3: 'This is the configuration of the atom. A 2+ ion has two fewer electrons.'
    },
    hints: ['A 2+ ion has lost two electrons.', 'Which sublevel loses electrons first: 4s or 3d?'],
    solution: '<p>The 4s sublevel is filled before 3d, but in the ion the <strong>4s electrons are lost first</strong>. Remove the two 4s electrons:</p>' + math(['Fe: ' + cfg('[Ar] 4s2 3d6') + ' &nbsp;→&nbsp; ' + ch('Fe^2+') + ': <b>' + cfg('[Ar] 3d6') + '</b>'])
  },
  {
    id: 's3-1-q049', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.9',
    stem: '<p>What is the electron configuration of the ' + ch('Cu^2+') + ' ion?</p>',
    options: [cfg('[Ar] 4s1 3d8'), cfg('[Ar] 4s2 3d7'), cfg('[Ar] 3d9'), cfg('[Ar] 3d10')],
    answer: 2,
    misconception: {
      0: 'This keeps the 4s electron and removes two 3d electrons. The 4s electron is lost first.',
      1: 'This starts from ' + cfg('[Ar] 4s2 3d9') + ' and removes two 3d electrons. The copper atom is ' + cfg('[Ar] 4s1 3d10') + ', and 4s is lost first.',
      3: 'This is ' + ch('Cu+') + ', which has lost only the 4s electron. ' + ch('Cu^2+') + ' has lost one more.'
    },
    hints: ['Copper is one of the two exceptions in the first row. Its atom is ' + cfg('[Ar] 4s1 3d10') + '.', 'Remove the 4s electron first, then one 3d electron.'],
    solution: '<p>The copper atom is ' + cfg('[Ar] 4s1 3d10') + '. Remove two electrons: first the 4s electron, then one 3d electron.</p>' + math(['Cu: ' + cfg('[Ar] 4s1 3d10') + ' &nbsp;→&nbsp; ' + ch('Cu+') + ': ' + cfg('[Ar] 3d10') + ' &nbsp;→&nbsp; ' + ch('Cu^2+') + ': <b>' + cfg('[Ar] 3d9') + '</b>'])
  },
  {
    id: 's3-1-q050', level: 'ahl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.1.9',
    stem: '<p>Which ions have the electron configuration ' + cfg('[Ar] 3d5') + '? Select all that apply.</p>',
    options: [ch('Cr^3+'), ch('Mn^2+'), ch('Fe^2+'), ch('Fe^3+'), ch('Co^2+')],
    answer: [1, 3],
    misconception: {
      0: 'Cr is ' + cfg('[Ar] 4s1 3d5') + '. Removing three electrons (4s first) leaves ' + cfg('[Ar] 3d3') + '.',
      2: 'Fe is ' + cfg('[Ar] 4s2 3d6') + '. Removing the two 4s electrons leaves ' + cfg('[Ar] 3d6') + '.',
      4: 'Co is ' + cfg('[Ar] 4s2 3d7') + '. Removing the two 4s electrons leaves ' + cfg('[Ar] 3d7') + '.'
    },
    hints: ['A quick check: number of electrons in the ion = atomic number − charge.', cfg('[Ar] 3d5') + ' has 18 + 5 = 23 electrons.'],
    solution: '<p>' + cfg('[Ar] 3d5') + ' has 23 electrons. Count the electrons in each ion (atomic number − charge):</p>' + math([
      ch('Cr^3+') + ': 24 − 3 = 21 &nbsp; ' + cfg('[Ar] 3d3'),
      ch('Mn^2+') + ': 25 − 2 = 23 &nbsp; <b>' + cfg('[Ar] 3d5') + '</b>',
      ch('Fe^2+') + ': 26 − 2 = 24 &nbsp; ' + cfg('[Ar] 3d6'),
      ch('Fe^3+') + ': 26 − 3 = 23 &nbsp; <b>' + cfg('[Ar] 3d5') + '</b>',
      ch('Co^2+') + ': 27 − 2 = 25 &nbsp; ' + cfg('[Ar] 3d7')
    ]) + '<p>In these ions all the 4s electrons have been lost, so every electron beyond the argon core is a 3d electron.</p>'
  },
  {
    id: 's3-1-q051', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 2,
    syllabus: 'Structure 3.1.9',
    stem: '<p>The compound ' + ch('VOSO4') + ' contains the sulfate ion, ' + ch('SO4^2-') + '. Deduce the number of 3d electrons in the vanadium ion in this compound.</p>',
    answer: 1, tolerance: { abs: 0 }, unit: '3d electrons',
    hints: ['First find the oxidation state of vanadium. Sulfate is 2− and oxygen is −2.', 'A vanadium atom is ' + cfg('[Ar] 4s2 3d3') + '.', 'Remove that number of electrons, 4s first.'],
    solution: '<p><strong>Step 1: oxidation state.</strong> Let vanadium be <i>x</i>. Oxygen is −2 and sulfate is 2−.</p>' + math(['<i>x</i> + (' + MINUS + '2) + (' + MINUS + '2) = 0', '<i>x</i> = +4']) + '<p><strong>Step 2: configuration.</strong> V is ' + cfg('[Ar] 4s2 3d3') + '. Remove four electrons: the two 4s electrons first, then two 3d electrons.</p>' + math(['V<sup>4+</sup>: ' + cfg('[Ar] 3d1')]) + '<p>The ion has <strong>1</strong> 3d electron.</p>'
  },
  {
    id: 's3-1-q052', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.9',
    stem: '<p>Calcium has only the oxidation state +2 in its compounds. Vanadium has the oxidation states +2, +3, +4 and +5 in its compounds. The table shows successive ionization energies.</p>' +
      table('Successive ionization energies / ' + KJ, ['', '1st', '2nd', '3rd', '4th', '5th', '6th'], [['Ca', '590', '1145', '4912', '6491', '', ''], ['V', '651', '1414', '2830', '4507', '6299', '12 363']]) +
      '<p>Which statement explains the difference?</p>',
    options: [
      'Every ionization energy of vanadium is lower than the same ionization energy of calcium.',
      'Vanadium has a greater nuclear charge, so it holds its electrons less strongly.',
      'The first five ionization energies of vanadium are close in value. For calcium there is a very large increase after the second.',
      'A calcium atom has only two electrons that can be removed.'
    ],
    answer: 2,
    misconception: {
      0: 'Check the data: the 1st and 2nd values for vanadium (651, 1414) are higher than those for calcium (590, 1145).',
      1: 'A greater nuclear charge attracts electrons <em>more</em> strongly, not less.',
      3: 'A calcium atom has 20 electrons, and the table gives a 3rd and a 4th ionization energy. The third electron can be removed, but it needs much more energy.'
    },
    hints: ['Find the increase from each value to the next.', 'Where is the first very large increase for Ca? Where is it for V?'],
    solution: '<p>Look at the increase from each ionization energy to the next.</p>' + math([
      'Ca: +555, then +3767',
      'V: +763, +1416, +1677, +1792, then +6064'
    ]) + '<p>For calcium there is a very large increase after the second electron. The third electron comes from an inner energy level (3p), so calcium forms only ' + ch('Ca^2+') + '.</p><p>For vanadium the first five values rise in small steps, because the 4s and 3d electrons are close in energy. The <strong>successive ionization energies are close in value</strong>, so vanadium can lose different numbers of electrons and shows variable oxidation states. The large increase comes only after the fifth electron.</p>'
  },
  {
    id: 's3-1-q053', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.1.9',
    stem: '<p>The table shows the first six successive ionization energies of a first-row transition element.</p>' +
      table('Successive ionization energies / ' + KJ, ['', '1st', '2nd', '3rd', '4th', '5th', '6th'], [['IE', '659', '1310', '2653', '4175', '9581', '11 533']]) +
      '<p>Deduce the highest oxidation state that this element is likely to show in its compounds.</p><p>Type the sign first and then the number, for example +3.</p>',
    answer: 4, tolerance: { abs: 0 }, unit: '',
    answerDisplay: '+4',
    correctNote: 'In an exam, write +4 with the sign first.',
    hints: ['Find the increase from each value to the next.', 'The 4s and 3d electrons are close in energy. The next electron comes from an inner level and needs much more energy.', 'Count the electrons removed before the very large increase.'],
    solution: '<p>Find the increase from each value to the next.</p>' + math(['+651, +1343, +1522, then <b>+5406</b>, then +1952']) + '<p>The first four values rise in small steps. These four electrons are the 4s and 3d electrons, which are close in energy. The fifth electron needs much more energy, because it comes from the inner 3p sublevel.</p><p>The atom has four outer (4s and 3d) electrons, so the highest oxidation state is <strong>+4</strong>. The element is titanium, ' + cfg('[Ar] 4s2 3d2') + '.</p>'
  },

  /* ======================= Structure 3.1.10 (AHL) ========================== */
  {
    id: 's3-1-q054', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.10',
    stem: '<p>The diagram shows the colour wheel from the data booklet.</p>' + wheel() + '<p>A solution of a transition element complex absorbs orange light. What colour does the solution appear in white light?</p>',
    options: ['Orange', 'Yellow', 'Blue', 'Red'],
    answer: 2,
    misconception: {
      0: 'Orange is the colour that is absorbed, so it is removed from the light that reaches your eye. You see what is left.',
      1: 'Yellow is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.',
      3: 'Red is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.'
    },
    hints: ['The colour you see is complementary to the colour absorbed.', 'On the wheel, complementary colours are directly opposite each other.'],
    solution: '<p>The colour observed is <strong>complementary</strong> to the colour absorbed. Complementary colours are opposite each other on the colour wheel. Blue is opposite orange, so the solution appears <strong>blue</strong>.</p>'
  },
  {
    id: 's3-1-q055', level: 'ahl', tier: 'exam', type: 'short', marks: 3,
    syllabus: 'Structure 3.1.10',
    stem: '<p>A solution that contains the complex ion ' + ch('[Cu(H2O)6]^2+') + ' is blue. Explain why this complex ion is coloured.</p>',
    answer: '<p>The ' + ch('Cu^2+') + ' ion has a partially filled d sublevel (' + cfg('[Ar] 3d9') + '). The ligands (water molecules) cause the d orbitals to split into two sets with different energies. An electron absorbs light and is promoted from a lower-energy d orbital to a higher-energy d orbital. The energy gap corresponds to light in the visible region. The colour observed (blue) is complementary to the colour absorbed (orange).</p><p>Do not write that the complex <em>emits</em> blue light. The colour comes from absorption.</p>',
    markscheme: [
      'The ion has partially filled d orbitals / an incomplete d sublevel.',
      'The ligands cause the d orbitals to split (into two sets of different energy).',
      'Light is absorbed as electrons are promoted / move to higher-energy d orbitals.',
      'The energy gap corresponds to (the frequency of) visible light.',
      'The colour observed is complementary to the colour absorbed (only if absorption of light is mentioned).'
    ],
    hints: ['Start with the d electrons of ' + ch('Cu^2+') + '.', 'What do the ligands do to the d orbitals? What happens to an electron when light arrives?', 'Finish with the link between the colour absorbed and the colour seen.']
  },
  {
    id: 's3-1-q056', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.10',
    stem: '<p>A solution that contains a transition element complex ion appears green in white light. Which statement explains this?</p>' + wheel(),
    options: [
      'Electrons fall from higher-energy d orbitals to lower-energy d orbitals and emit green light.',
      'The complex absorbs green light when electrons are promoted between the split d orbitals.',
      'The complex absorbs red light when electrons are promoted between the split d orbitals. The light that is left appears green.',
      'The complex absorbs all colours of visible light except red.'
    ],
    answer: 2,
    misconception: {
      0: 'This describes emission. The colour of a complex comes from <em>absorption</em> of part of the white light, not from light given out.',
      1: 'If green light were absorbed, it would be missing from the light that reaches your eye. The solution would appear red.',
      3: 'If only red light passed through, the solution would appear red, not green.'
    },
    hints: ['Is the colour caused by light being absorbed or by light being emitted?', 'Find the colour opposite green on the wheel.'],
    solution: '<p>White light passes through the solution. The complex <strong>absorbs</strong> light of one colour, and the energy promotes an electron from a lower-energy d orbital to a higher-energy d orbital. The colour seen is the complementary colour. Red is opposite green on the wheel, so the complex absorbs <strong>red</strong> light and appears green.</p>'
  },
  {
    id: 's3-1-q057', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.1.10',
    stem: '<p>A complex ion absorbs light most strongly at a wavelength of 510 nm. Calculate the frequency of this light, in Hz.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 ' + TIMES + ' 10<sup>8</sup> m s<sup>' + MINUS + '1</sup>.</p>',
    answer: 3.00e8 / 510e-9, tolerance: '1%', sigfigs: 3, unit: 'Hz',
    hints: ['Convert the wavelength to metres first: 1 nm = 10<sup>−9</sup> m.', 'Rearrange <i>c</i> = <i>λf</i> to <i>f</i> = <i>c</i> / <i>λ</i>.'],
    solution: math([
      '<i>λ</i> = 510 nm = 510 ' + TIMES + ' 10<sup>' + MINUS + '9</sup> m = ' + sci('5.10', -7) + ' m',
      '<i>f</i> = <i>c</i> / <i>λ</i>',
      '= (' + sci('3.00', 8) + ' m s<sup>' + MINUS + '1</sup>) ÷ (' + sci('5.10', -7) + ' m)',
      '= <b>' + sci('5.88', 14) + ' Hz</b> &nbsp; (3 s.f.)'
    ]) + '<p>On the colour wheel, 510 nm is green light (491–575 nm). The complex absorbs green, so it appears red.</p>'
  },
  {
    id: 's3-1-q058', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.1.10',
    stem: '<p>A complex ion absorbs light of frequency 6.38 ' + TIMES + ' 10<sup>14</sup> Hz. Calculate the wavelength of this light, in nm.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 ' + TIMES + ' 10<sup>8</sup> m s<sup>' + MINUS + '1</sup>.</p>',
    answer: 3.00e8 / 6.38e14 * 1e9, tolerance: '1%', sigfigs: 3, unit: 'nm',
    hints: ['Rearrange <i>c</i> = <i>λf</i> to <i>λ</i> = <i>c</i> / <i>f</i>. The answer is in metres.', 'Convert metres to nanometres: multiply by 10<sup>9</sup>.'],
    solution: math([
      '<i>λ</i> = <i>c</i> / <i>f</i>',
      '= (' + sci('3.00', 8) + ' m s<sup>' + MINUS + '1</sup>) ÷ (' + sci('6.38', 14) + ' s<sup>' + MINUS + '1</sup>)',
      '= ' + sci('4.702…', -7) + ' m',
      '= <b>470 nm</b> &nbsp; (3 s.f.)'
    ]) + '<p>On the colour wheel, 470 nm is blue light (424–491 nm). The complex absorbs blue, so it appears orange.</p>'
  },
  {
    id: 's3-1-q059', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.10',
    stem: '<p>A complex ion absorbs light of frequency 7.25 ' + TIMES + ' 10<sup>14</sup> Hz. Use <i>c</i> = <i>λf</i> and the colour wheel.</p>' + wheel() + '<p>Which row is correct?</p>',
    options: [
      'Wavelength absorbed: 414 nm. Colour absorbed: yellow. Colour observed: violet.',
      'Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: violet.',
      'Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: blue.',
      'Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: yellow.'
    ],
    answer: 3,
    misconception: {
      0: 'The two colours are swapped. The wavelength you calculate is the light <em>absorbed</em>: 414 nm is in the violet band (400–424 nm).',
      1: 'The complex does not give out the light it absorbs. Violet is removed from the white light, so you see the complementary colour.',
      2: 'Blue is next to violet on the wheel. The complementary colour is directly opposite.'
    },
    hints: ['<i>λ</i> = <i>c</i> / <i>f</i>. Convert the answer from m to nm.', 'Find the band on the wheel that contains this wavelength. That is the colour absorbed.', 'The colour observed is opposite on the wheel.'],
    solution: math([
      '<i>λ</i> = <i>c</i> / <i>f</i> = (' + sci('3.00', 8) + ') ÷ (' + sci('7.25', 14) + ')',
      '= ' + sci('4.14', -7) + ' m = <b>414 nm</b>'
    ]) + '<p>414 nm lies between 400 nm and 424 nm, so the light absorbed is <strong>violet</strong>. Yellow is opposite violet on the wheel, so the complex appears <strong>yellow</strong>.</p>'
  },
  {
    id: 's3-1-q060', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.10',
    stem: '<p>Which compound is expected to be coloured?</p>',
    options: [ch('CuCl'), ch('ScCl3'), ch('ZnSO4'), ch('TiCl3')],
    answer: 3,
    misconception: {
      0: 'CuCl contains ' + ch('Cu+') + ', which is ' + cfg('[Ar] 3d10') + '. The d sublevel is full, so no electron can be promoted between d orbitals.',
      1: ch('ScCl3') + ' contains ' + ch('Sc^3+') + ', which is ' + cfg('[Ar]') + '. There are no d electrons to promote.',
      2: ch('ZnSO4') + ' contains ' + ch('Zn^2+') + ', which is ' + cfg('[Ar] 3d10') + '. The d sublevel is full, so no electron can be promoted between d orbitals.'
    },
    hints: ['Find the charge on the metal ion in each compound.', 'Write the electron configuration of each ion (4s lost first).', 'Colour needs a partially filled d sublevel: at least one d electron, and at least one space.'],
    solution: '<p>Colour needs an electron that can be promoted from one d orbital to another. So the ion must have a <strong>partially filled d sublevel</strong>.</p>' + math([
      ch('Cu+') + ': ' + cfg('[Ar] 3d10') + ' &nbsp; full: not coloured',
      ch('Sc^3+') + ': ' + cfg('[Ar]') + ' &nbsp; empty: not coloured',
      ch('Zn^2+') + ': ' + cfg('[Ar] 3d10') + ' &nbsp; full: not coloured',
      ch('Ti^3+') + ': <b>' + cfg('[Ar] 3d1') + '</b> &nbsp; partially filled: coloured'
    ])
  },
  {
    id: 's3-1-q061', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 2,
    syllabus: 'Structure 3.1.10',
    stem: '<p>A solution of a complex ion appears yellow in white light. Use the colour wheel to find the range of wavelengths that the complex absorbs.</p>' + wheel() + '<p>Calculate the <strong>lowest</strong> frequency of light in this range, in Hz. Use <i>c</i> = 3.00 ' + TIMES + ' 10<sup>8</sup> m s<sup>' + MINUS + '1</sup>.</p>',
    answer: 3.00e8 / 424e-9, tolerance: '1%', sigfigs: 3, unit: 'Hz',
    hints: ['The colour absorbed is opposite yellow on the wheel. Read its two boundary wavelengths.', '<i>f</i> = <i>c</i> / <i>λ</i>. Does the lowest frequency go with the longest or the shortest wavelength?', 'Convert nm to m before you divide.'],
    solution: '<p>Violet is opposite yellow, so the complex absorbs violet light: 400 nm to 424 nm.</p><p>Frequency and wavelength are inversely proportional (<i>f</i> = <i>c</i> / <i>λ</i>). The <strong>lowest</strong> frequency goes with the <strong>longest</strong> wavelength, 424 nm.</p>' + math([
      '<i>λ</i> = 424 nm = ' + sci('4.24', -7) + ' m',
      '<i>f</i> = (' + sci('3.00', 8) + ' m s<sup>' + MINUS + '1</sup>) ÷ (' + sci('4.24', -7) + ' m)',
      '= <b>' + sci('7.08', 14) + ' Hz</b> &nbsp; (3 s.f.)'
    ]) + '<p>(Using 400 nm gives ' + sci('7.50', 14) + ' Hz. That is the highest frequency in the range.)</p>'
  },
  {
    id: 's3-1-q062', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.1.5',
    stem: '<p>Carbon dioxide dissolves in water and reacts with it. Which equation shows this reaction?</p>',
    options: [
      ch('CO2(g) + 2H2O(l) -> C(OH)4(aq)'),
      ch('CO2(g) + H2O(l) <=> H2CO3(aq)'),
      ch('CO2(g) + H2O(l) <=> H2CO4(aq)'),
      ch('CO2(g) + H2O(l) -> CO(g) + H2O2(aq)')
    ],
    answer: 1,
    misconception: {
      0: 'Hydroxides form when the oxide of a group 1 or group 2 metal reacts with water. Carbon is a non-metal, so its oxide is acidic and forms an acid.',
      2: 'This equation is not balanced: there are 3 oxygen atoms on the left and 4 on the right. Add the atoms of the oxide and the water to get the formula of the acid.',
      3: 'Carbon dioxide does not take oxygen from water or give oxygen to it. A non-metal oxide and water combine to form one product, an acid.'
    },
    hints: ['Carbon is a non-metal. Is its oxide basic or acidic?', 'Non-metal oxide + water → acid. Add the atoms of ' + ch('CO2') + ' and ' + ch('H2O') + ' together.'],
    solution: '<p>Carbon dioxide is an acidic non-metal oxide. It reacts with water to form carbonic acid:</p>' + math([ch('CO2(g) + H2O(l) <=> H2CO3(aq)')]) + '<p>Check: C 1 = 1; O 2 + 1 = 3; H 2 = 2. The reaction is reversible. The solution is weakly acidic. This reaction is the cause of ocean acidification.</p>'
  }

  ]);
})();
