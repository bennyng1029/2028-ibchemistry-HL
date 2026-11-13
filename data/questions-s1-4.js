/* ==========================================================================
   Question bank: Structure 1.4 — Counting particles by mass: the mole
   53 original questions. All SL (Structure 1.4 has no Additional HL content).
   Schema and rules: docs/AUTHORING.md.
   Values: Ar to 2 d.p. and NA = 6.02 × 10^23 mol-1 (S1.chem / data booklet).
   Every number here is recomputed by the checking script named in the
   writer's report (scratchpad s1-4q/numbers.js and check-bank.js) and again,
   independently, by the auditor (scratchpad audit-s1-4/calc.js).
   Load order on a page: chem.js, core.js, quiz.js, then this file.
   ========================================================================== */
(function () {
  'use strict';

  /* Small local helpers for HTML strings (no globals are added). */
  /* One line of working. A long chain "a = b = c" is stacked as a, "= b", "= c" so that it stays readable on a phone. */
  function M(line) {
    var plain = line.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
    var parts = line.split(' = ');
    if (plain.length > 30 && parts.length > 2) {
      line = parts[0] + ' = ' + parts[1];
      for (var i = 2; i < parts.length; i++) line += '<br>&nbsp;&nbsp;= ' + parts[i];
    }
    return '<div class="worked__math">' + line + '</div>';
  }
  function P(text) { return '<p>' + text + '</p>'; }
  function C(f) { return '<span class="chem">' + f + '</span>'; }                   // chemical formula
  function U(u) { return '<span class="unit">' + u + '</span>'; }                   // unit
  function E(a, b) { return a + ' × 10<sup>' + String(b).replace('-', '−') + '</sup>'; } // scientific notation
  var NA = E('6.02', 23);
  var NAu = NA + ' ' + U('mol-1');
  /* Table headers that hold symbols, formulas or units: keep their letter case (table.data headers are upper-cased by default). */
  function TH(label) { return '<th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">' + label + '</span></th>'; }

  S1.questions.register('s1-4', [

    /* ====================================================================
       Structure 1.4.1 — the mole and the Avogadro constant
       ==================================================================== */
    {
      id: 's1-4-q001', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.1',
      stem: '<p>Which statement describes <strong>one mole</strong> of a substance?</p>',
      options: [
        'It has a mass of ' + NA + ' ' + U('g') + '.',
        'It contains the number of elementary entities given by the Avogadro constant.',
        'It is the mass of one atom compared with an atom of carbon-12.',
        'It is 12 ' + U('g') + ' of any element.'
      ],
      answer: 1,
      misconception: {
        0: NA + ' is a number of particles, not a mass in grams. The mass of one mole is the molar mass, and it is different for each substance.',
        2: 'That describes relative atomic mass. The mole counts particles. It does not compare masses.',
        3: '12 ' + U('g') + ' is one mole only for carbon-12. One mole of another element has a different mass.'
      },
      hints: [
        'The mole is the SI unit of <em>amount of substance</em>. It is a counting unit, like a dozen, but much bigger.',
        'The count is fixed by a constant in your data booklet. Its symbol is <i>N</i><sub>A</sub>.'
      ],
      solution: '<p>One mole contains exactly the number of elementary entities given by the Avogadro constant, <i>N</i><sub>A</sub> = ' + NAu + '. The entities can be atoms, molecules, ions, electrons or any specified group of particles.</p>'
    },
    {
      id: 's1-4-q002', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.1',
      stem: '<p>How many molecules are there in 0.450 ' + U('mol') + ' of water, ' + C('H2O') + '? Give your answer to 3 significant figures.</p>',
      answer: 2.709e23, tolerance: '1%', sigfigs: 3,
      hints: [
        'Use the relationship between number of particles and amount: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.',
        'Going from moles to particles makes the number much bigger, so you multiply by ' + NA + '.'
      ],
      solution: M('<i>N</i> = <i>n</i> × <i>N</i><sub>A</sub>') +
        M('<i>N</i> = 0.450 ' + U('mol') + ' × ' + NAu) +
        M('<i>N</i> = ' + E('2.709', 23) + ' = <strong>' + E('2.71', 23) + ' molecules</strong>') +
        '<p>Check the size: you have less than one mole, so the answer must be less than ' + NA + '. If you divided instead of multiplying you would get a number far smaller than 1, which cannot be a count of molecules.</p>'
    },
    {
      id: 's1-4-q003', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.1',
      stem: '<p>A sample of water contains ' + E('9.03', 22) + ' molecules. Calculate the amount of water, in ' + U('mol') + '. Give your answer to 3 significant figures.</p>',
      answer: 0.150, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: [
        'Rearrange <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> to make <i>n</i> the subject.',
        'Going from particles to moles makes the number much smaller, so you divide by ' + NA + '. Compare the powers of ten first: 10<sup>22</sup> is less than 10<sup>23</sup>, so the answer is less than 1 mol.'
      ],
      solution: M('<i>n</i> = <span class="frac"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span>') +
        M('<i>n</i> = <span class="frac"><span>' + E('9.03', 22) + '</span><span>' + NAu + '</span></span>') +
        M('<i>n</i> = <strong>0.150 ' + U('mol') + '</strong>') +
        '<p>If you multiplied by <i>N</i><sub>A</sub> instead, you would get about ' + E('5', 46) + ', which is not a sensible amount in moles.</p>'
    },
    {
      id: 's1-4-q004', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.1',
      stem: '<p>What is the total number of <strong>atoms</strong> in 0.500 ' + U('mol') + ' of ammonia, ' + C('NH3') + '?</p>',
      options: [E('3.01', 23), E('9.03', 23), E('1.20', 24), E('3.32', -24)],
      answer: 2,
      misconception: {
        0: 'This is the number of ' + C('NH3') + ' <em>molecules</em> (0.500 × ' + NA + '). The question asks for atoms, and each molecule contains 4 atoms.',
        1: 'You multiplied by 3, so you counted only the hydrogen atoms. Each ' + C('NH3') + ' molecule has 1 N atom and 3 H atoms: 4 atoms in total.',
        3: 'You divided by the Avogadro constant instead of multiplying. A count of atoms in a visible sample must be a very large number.'
      },
      hints: [
        'First find the number of molecules with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.',
        'Then ask: how many atoms are in one molecule of ' + C('NH3') + '? Multiply by that number.'
      ],
      solution: M('<i>N</i> = 0.500 ' + U('mol') + ' × ' + NAu + ' = ' + E('3.01', 23) + ' molecules') +
        P('Each ' + C('NH3') + ' molecule contains 1 N atom and 3 H atoms: 4 atoms.') +
        M('<i>N</i>(atoms) = 4 × ' + E('3.01', 23) + ' = ' + E('1.204', 24) + ' = <strong>' + E('1.20', 24) + '</strong>')
    },
    {
      id: 's1-4-q005', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.1',
      stem: '<p>What is the total number of <strong>ions</strong> in 0.20 ' + U('mol') + ' of aluminium sulfate, ' + C('Al2(SO4)3') + '?</p>',
      options: [E('1.2', 23), E('2.4', 23), E('6.0', 23), E('2.0', 24)],
      answer: 2,
      misconception: {
        0: 'This is the number of formula units (0.20 × ' + NA + '). Each formula unit contains more than one ion.',
        1: 'You counted 2 ions per formula unit, one kind of positive ion and one kind of negative ion. Use the subscripts: there are 2 ' + C('Al^3+') + ' and 3 ' + C('SO4^2-') + ', which is 5 ions.',
        3: 'You counted all 17 <em>atoms</em> in the formula. A sulfate ion, ' + C('SO4^2-') + ', is one ion even though it contains 5 atoms.'
      },
      hints: [
        'Write the ions in one formula unit: how many ' + C('Al^3+') + ' and how many ' + C('SO4^2-') + '?',
        'A polyatomic ion such as ' + C('SO4^2-') + ' counts as one ion. Find the amount of ions in mol, then multiply by <i>N</i><sub>A</sub>.'
      ],
      solution: P('One formula unit contains 2 ' + C('Al^3+') + ' ions and 3 ' + C('SO4^2-') + ' ions: 5 ions.') +
        M('<i>n</i>(ions) = 5 × 0.20 ' + U('mol') + ' = 1.0 ' + U('mol')) +
        M('<i>N</i>(ions) = 1.0 ' + U('mol') + ' × ' + NAu + ' = <strong>' + E('6.0', 23) + '</strong>')
    },
    {
      id: 's1-4-q006', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'multi', marks: 1,
      syllabus: 'Structure 1.4.1',
      stem: '<p>Which statements about the mole are correct? Select <strong>all</strong> that apply.</p>',
      options: [
        'The mole is the SI unit of amount of substance.',
        'One mole of any substance has a mass of ' + NA + ' ' + U('g') + '.',
        '1 ' + U('mol') + ' of ' + C('H2O') + ' molecules and 1 ' + U('mol') + ' of ' + C('Fe') + ' atoms contain the same number of particles.',
        'The Avogadro constant has the units ' + U('mol-1') + '.',
        '1 ' + U('mol') + ' of ' + C('O2') + ' molecules contains ' + NA + ' oxygen atoms.'
      ],
      answer: [0, 2, 3],
      misconception: {
        1: NA + ' is a number of particles, not a mass. The mass of one mole is the molar mass, which is different for each substance.',
        4: 'There are ' + NA + ' ' + C('O2') + ' <em>molecules</em>. Each molecule has 2 atoms, so there are ' + E('1.20', 24) + ' oxygen atoms.'
      },
      hints: [
        'A mole is a fixed number of particles. Always ask: a mole of what?',
        'For the last statement, count the atoms in one ' + C('O2') + ' molecule.'
      ],
      solution: '<p>The mole is the SI unit of amount of substance. One mole of anything contains ' + NA + ' of the specified entities, so 1 mol of water molecules and 1 mol of iron atoms hold the same number of particles. <i>N</i><sub>A</sub> means "per mole", so its units are ' + U('mol-1') + '.</p><p>The two wrong statements mix up number with mass, and molecules with atoms.</p>'
    },

    /* ====================================================================
       Structure 1.4.2 — relative atomic mass and relative formula mass
       ==================================================================== */
    {
      id: 's1-4-q007', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.2',
      stem: '<p>Relative atomic masses compare the mass of an atom with a standard. What is the standard?</p>',
      options: [
        'The mass of one atom of hydrogen-1',
        'The mass of one atom of carbon-12',
        '<span class="frac"><span>1</span><span>12</span></span> of the mass of one atom of carbon-12',
        '<span class="frac"><span>1</span><span>16</span></span> of the mass of one atom of oxygen-16'
      ],
      answer: 2,
      misconception: {
        0: 'Hydrogen has a relative atomic mass close to 1, but it is not the standard. The scale is defined using carbon-12.',
        1: 'Right isotope, but the whole atom is not the unit. If it were, carbon-12 would have a relative mass of 1, not 12.',
        3: 'An oxygen scale was used in the past. The scale used now, and by the IB, is based on carbon-12.'
      },
      hints: [
        'The scale is set so that one atom of a particular carbon isotope has a relative mass of exactly 12.',
        'If the whole atom is 12 units, what fraction of the atom is 1 unit?'
      ],
      solution: '<p>Masses of atoms are compared on a scale relative to carbon-12. One atom of ' + C('^12C') + ' is given a mass of exactly 12, so the unit of the scale is <span class="frac"><span>1</span><span>12</span></span> of the mass of a carbon-12 atom.</p>'
    },
    {
      id: 's1-4-q008', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.2',
      stem: '<p>Which is the relative formula mass, <i>M</i><sub>r</sub>, of calcium hydroxide, ' + C('Ca(OH)2') + '?</p><p>Use <i>A</i><sub>r</sub>: Ca = 40.08, O = 16.00, H = 1.01.</p>',
      options: ['57.09', '58.10', '74.10', '74.10 ' + U('g mol-1')],
      answer: 2,
      misconception: {
        0: 'You added one Ca, one O and one H. The subscript 2 outside the bracket means there are two O atoms and two H atoms.',
        1: 'You applied the subscript 2 to hydrogen only. A subscript outside a bracket multiplies <em>everything</em> inside the bracket.',
        3: 'The number is right, but relative formula mass has no units. 74.10 ' + U('g mol-1') + ' is the molar mass, <i>M</i>.'
      },
      hints: [
        'Add the relative atomic masses of every atom in the formula.',
        'The 2 outside the bracket multiplies both O and H. Also think about whether a <em>relative</em> mass has units.'
      ],
      solution: M('<i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)') +
        M('<i>M</i><sub>r</sub> = 40.08 + 34.02 = <strong>74.10</strong> (no units)') +
        '<p><i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios, so they have no units. Molar mass has the same number with units of ' + U('g mol-1') + '.</p>'
    },
    {
      id: 's1-4-q009', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.2',
      stem: '<p>Calculate the relative formula mass, <i>M</i><sub>r</sub>, of iron(III) sulfate, ' + C('Fe2(SO4)3') + '. Give your answer to 2 decimal places.</p><p>Use the data booklet values: Fe = 55.85, S = 32.07, O = 16.00.</p>',
      answer: 399.91, tolerance: { abs: 0.05 },
      hints: [
        'Count the atoms of each element first. The subscript 3 outside the bracket multiplies everything inside it.',
        'There are 2 Fe, 3 S and 3 × 4 = 12 O. Use the 2 decimal place <i>A</i><sub>r</sub> values, not whole numbers.'
      ],
      solution: P('Count the atoms in ' + C('Fe2(SO4)3') + ': 2 Fe, 3 S and 3 × 4 = 12 O.') +
        M('<i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)') +
        M('<i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00 = <strong>399.91</strong> (no units)') +
        '<p>Named slips: ignoring the bracket gives 207.77 (one S and four O). Using 3 S but only 4 O gives 271.91. Using whole-number <i>A</i><sub>r</sub> values gives 400. The guide says to use the two-decimal-place values from the data booklet.</p>'
    },
    {
      id: 's1-4-q010', topic: 's1-4', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.4.2',
      stem: '<p>Chlorine has a relative atomic mass of 35.45.</p><p>State what is meant by <strong>relative atomic mass</strong>, and state its units.</p>',
      answer: '<p>Relative atomic mass is the weighted average mass of the atoms of an element (taking the abundance of its isotopes into account), compared with <span class="frac"><span>1</span><span>12</span></span> of the mass of an atom of carbon-12. It has no units.</p>',
      markscheme: [
        'Weighted average mass of the atoms (or isotopes) of an element, relative to 1/12 of the mass of an atom of carbon-12. (Accept "compared with carbon-12 taken as exactly 12".)',
        'It has no units. (Do not accept g or g mol⁻¹.)'
      ],
      hints: [
        'There are two ideas in the definition: an average over the isotopes, and a comparison with a standard atom.',
        'A <em>relative</em> mass is one mass divided by another mass. What happens to the units?'
      ],
      solution: '<p>Chlorine is a mixture of isotopes, so its relative atomic mass is a weighted average, which is why it is not a whole number. The comparison is with <span class="frac"><span>1</span><span>12</span></span> of the mass of a ' + C('^12C') + ' atom. Because it is a ratio of two masses, it has no units.</p>'
    },
    {
      id: 's1-4-q011', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.2',
      stem: '<p>What is the molar mass of hydrated copper(II) sulfate, ' + C('CuSO4.5H2O') + ', in ' + U('g mol-1') + '?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.</p>',
      options: ['159.62', '177.64', '185.72', '249.72'],
      answer: 3,
      misconception: {
        0: 'This is the molar mass of anhydrous ' + C('CuSO4') + '. The water of crystallization is part of the formula and part of the mass you weigh.',
        1: 'You added one ' + C('H2O') + ' (18.02). The 5 in front of ' + C('H2O') + ' means five water molecules per formula unit.',
        2: 'You multiplied only the hydrogen by 5 (10 H and 1 O). The 5 multiplies the whole ' + C('H2O') + ': 10 H and 5 O.'
      },
      hints: [
        'The dot means "combined with". Add the mass of the water to the mass of the ' + C('CuSO4') + '.',
        'Work out <i>M</i>(' + C('CuSO4') + ') and <i>M</i>(' + C('H2O') + ') separately. Then add five lots of water.'
      ],
      solution: M('<i>M</i>(' + C('CuSO4') + ') = 63.55 + 32.07 + (4 × 16.00) = 159.62 ' + U('g mol-1')) +
        M('<i>M</i>(' + C('H2O') + ') = (2 × 1.01) + 16.00 = 18.02 ' + U('g mol-1')) +
        M('<i>M</i>(' + C('CuSO4.5H2O') + ') = 159.62 + (5 × 18.02) = <strong>249.72 ' + U('g mol-1') + '</strong>')
    },

    /* ====================================================================
       Structure 1.4.3 — molar mass; particles, amount and mass
       ==================================================================== */
    {
      id: 's1-4-q012', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.3',
      stem: '<p>Calculate the amount, in ' + U('mol') + ', of calcium carbonate in 25.0 ' + U('g') + ' of ' + C('CaCO3') + '. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('CaCO3') + ') = 100.09 ' + U('g mol-1') + '</p>',
      answer: 25.0 / 100.09, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: [
        'The relationship between amount, mass and molar mass is in your data booklet: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.',
        'Mass is in ' + U('g') + ' and molar mass is in ' + U('g mol-1') + ', so no unit conversion is needed. 25.0 g is less than 100.09 g, so the answer is less than 1 mol.'
      ],
      solution: M('<i>n</i> = <span class="frac"><span><i>m</i></span><span><i>M</i></span></span>') +
        M('<i>n</i> = <span class="frac"><span>25.0 ' + U('g') + '</span><span>100.09 ' + U('g mol-1') + '</span></span>') +
        M('<i>n</i> = 0.24978 ' + U('mol') + ' = <strong>0.250 ' + U('mol') + '</strong>') +
        '<p>If you multiplied instead you would get about 2500, which fails the size check.</p>'
    },
    {
      id: 's1-4-q013', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.3',
      stem: '<p>Calculate the mass, in ' + U('g') + ', of 0.350 ' + U('mol') + ' of sulfuric acid, ' + C('H2SO4') + '. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('H2SO4') + ') = 98.09 ' + U('g mol-1') + '</p>',
      answer: 0.350 * 98.09, tolerance: '1%', sigfigs: 3, unit: 'g',
      hints: [
        'Start from <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> and rearrange it to make <i>m</i> the subject.',
        '<span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>. Check the units: mol × g mol<sup>−1</sup> = g.'
      ],
      solution: M('<i>m</i> = <i>n</i> × <i>M</i>') +
        M('<i>m</i> = 0.350 ' + U('mol') + ' × 98.09 ' + U('g mol-1')) +
        M('<i>m</i> = 34.33 ' + U('g') + ' = <strong>34.3 ' + U('g') + '</strong>') +
        '<p>Size check: about one third of a mole, so about one third of 98 g.</p>'
    },
    {
      id: 's1-4-q014', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.3',
      stem: '<p>Calculate the number of molecules in 9.00 ' + U('g') + ' of water, ' + C('H2O') + '. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, O = 16.00.</p>',
      answer: 9.00 / 18.02 * 6.02e23, tolerance: '1%', sigfigs: 3,
      hints: [
        'This is a two-step route: mass → amount → number of particles. You cannot go from grams to particles in one step.',
        'Step 1: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> with <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + '. Step 2: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.',
        'Keep all the digits of <i>n</i> in your calculator. Round only the final answer.'
      ],
      solution: M('<i>M</i>(' + C('H2O') + ') = (2 × 1.01) + 16.00 = 18.02 ' + U('g mol-1')) +
        M('<i>n</i> = <span class="frac"><span>9.00 ' + U('g') + '</span><span>18.02 ' + U('g mol-1') + '</span></span> = 0.49945 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>N</i> = 0.49945 ' + U('mol') + ' × ' + NAu + ' = <strong>' + E('3.01', 23) + ' molecules</strong> &nbsp; (M2)') +
        '<p>The question asks for molecules. Multiplying by 3 as well would give the number of atoms (' + E('9.02', 23) + '), which is a different question.</p>'
    },
    {
      id: 's1-4-q015', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.3',
      stem: '<p>Calculate the number of <strong>oxygen atoms</strong> in 8.80 ' + U('g') + ' of carbon dioxide, ' + C('CO2') + '. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('CO2') + ') = 44.01 ' + U('g mol-1') + '</p>',
      answer: 8.80 / 44.01 * 2 * 6.02e23, tolerance: '1%', sigfigs: 3,
      hints: [
        'Route: mass → amount of ' + C('CO2') + ' → amount of O atoms → number of O atoms.',
        'Each ' + C('CO2') + ' molecule contains 2 oxygen atoms, so <i>n</i>(O) = 2 × <i>n</i>(' + C('CO2') + ').',
        'Finish with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.'
      ],
      solution: M('<i>n</i>(' + C('CO2') + ') = <span class="frac"><span>8.80 ' + U('g') + '</span><span>44.01 ' + U('g mol-1') + '</span></span> = 0.19995 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>n</i>(O) = 2 × 0.19995 ' + U('mol') + ' = 0.39991 ' + U('mol')) +
        M('<i>N</i>(O) = 0.39991 ' + U('mol') + ' × ' + NAu + ' = <strong>' + E('2.41', 23) + ' atoms</strong> &nbsp; (M2)') +
        '<p>Named slips: ' + E('1.20', 23) + ' is the number of ' + C('CO2') + ' molecules (subscript not used). ' + E('3.61', 23) + ' is the number of all atoms (multiplied by 3, not 2).</p>'
    },
    {
      id: 's1-4-q016', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.3',
      stem: '<p>Epsom salt is hydrated magnesium sulfate, ' + C('MgSO4.7H2O') + '.</p><p>Calculate the amount, in ' + U('mol') + ', of <strong>water molecules</strong> in 12.3 ' + U('g') + ' of Epsom salt. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('MgSO4') + ') = 120.38 ' + U('g mol-1') + ', &nbsp; <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + '</p>',
      answer: 12.3 / 246.52 * 7, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: [
        'The 12.3 g is hydrated salt, so you need the molar mass of the whole formula, water included.',
        '<i>M</i>(' + C('MgSO4.7H2O') + ') = 120.38 + (7 × 18.02). Use it in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.',
        'One mole of the hydrate contains 7 mol of water molecules.'
      ],
      solution: M('<i>M</i>(' + C('MgSO4.7H2O') + ') = 120.38 + (7 × 18.02) = 246.52 ' + U('g mol-1')) +
        M('<i>n</i>(hydrate) = <span class="frac"><span>12.3 ' + U('g') + '</span><span>246.52 ' + U('g mol-1') + '</span></span> = 0.049895 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>n</i>(' + C('H2O') + ') = 7 × 0.049895 ' + U('mol') + ' = <strong>0.349 ' + U('mol') + '</strong> &nbsp; (M2)') +
        '<p>Named slip: dividing 12.3 g by the anhydrous molar mass (120.38) gives 0.715 mol. The solid you weighed includes its water, so the hydrated molar mass must be used.</p>'
    },
    {
      id: 's1-4-q017', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.3',
      stem: '<p>What is the mass, in ' + U('g') + ', of <strong>one molecule</strong> of water?</p><p><i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + '</p>',
      options: [E('1.66', -24), E('2.99', -23), E('3.34', 22), E('1.08', 25)],
      answer: 1,
      misconception: {
        0: 'This is 1 ÷ <i>N</i><sub>A</sub>. You left out the molar mass. One mole of water has a mass of 18.02 g, not 1 g.',
        2: 'You divided <i>N</i><sub>A</sub> by the molar mass. That gives the number of molecules in 1 g of water, not the mass of one molecule.',
        3: 'You multiplied the molar mass by <i>N</i><sub>A</sub>. One molecule cannot have a larger mass than a whole mole of molecules.'
      },
      hints: [
        '18.02 g is the mass of one mole of molecules. How many molecules share that mass?',
        'Share the mass equally: divide the molar mass by <i>N</i><sub>A</sub>. Expect a very small number.'
      ],
      solution: P('One mole of water molecules has a mass of 18.02 ' + U('g') + '. That mass is shared between ' + NA + ' molecules.') +
        M('<i>m</i>(one molecule) = <span class="frac"><span>18.02 ' + U('g mol-1') + '</span><span>' + NAu + '</span></span>') +
        M('<i>m</i>(one molecule) = <strong>' + E('2.99', -23) + ' ' + U('g') + '</strong>')
    },
    {
      id: 's1-4-q018', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.3',
      stem: '<p>Which sample contains the greatest total number of <strong>atoms</strong>?</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, He = 4.00, C = 12.01, O = 16.00.</p>',
      options: [
        '4.00 ' + U('g') + ' of helium, ' + C('He'),
        '16.0 ' + U('g') + ' of methane, ' + C('CH4'),
        '27.0 ' + U('g') + ' of water, ' + C('H2O'),
        '44.0 ' + U('g') + ' of carbon dioxide, ' + C('CO2')
      ],
      answer: 1,
      misconception: {
        0: 'Helium atoms are light, but 4.00 g is only 1.00 mol of atoms. The other samples contain several atoms in every molecule.',
        2: 'Water has the most <em>molecules</em> here (1.50 mol), but each has only 3 atoms: 4.50 mol of atoms. Compare with 5 atoms per ' + C('CH4') + ' molecule.',
        3: 'The largest mass does not mean the most atoms. 44.0 g of ' + C('CO2') + ' is about 1.00 mol of molecules, which is 3.00 mol of atoms.'
      },
      hints: [
        'For each sample find the amount of molecules with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.',
        'Then multiply by the number of atoms in one molecule. Compare amounts of atoms in mol. You do not need <i>N</i><sub>A</sub> to compare.'
      ],
      solution: '<div class="table-scroll"><table class="data"><thead><tr><th scope="col">Sample</th>' + TH('<i>M</i> / g mol<sup>−1</sup>') + TH('<i>n</i> / mol') + TH('Atoms each') + TH('<i>n</i>(atoms) / mol') + '</tr></thead><tbody>' +
        '<tr><th scope="row">' + C('He') + '</th><td class="num">4.00</td><td class="num">1.00</td><td class="num">1</td><td class="num">1.00</td></tr>' +
        '<tr><th scope="row">' + C('CH4') + '</th><td class="num">16.05</td><td class="num">0.997</td><td class="num">5</td><td class="num"><strong>4.98</strong></td></tr>' +
        '<tr><th scope="row">' + C('H2O') + '</th><td class="num">18.02</td><td class="num">1.50</td><td class="num">3</td><td class="num">4.50</td></tr>' +
        '<tr><th scope="row">' + C('CO2') + '</th><td class="num">44.01</td><td class="num">1.00</td><td class="num">3</td><td class="num">3.00</td></tr>' +
        '</tbody></table></div><p>Methane has the largest amount of atoms, so it has the greatest number of atoms.</p>'
    },
    {
      id: 's1-4-q019', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.4.3',
      stem: '<p>A sample of magnesium chloride, ' + C('MgCl2') + ', contains ' + E('3.01', 22) + ' chloride ions.</p><p>Calculate the mass of the sample, in ' + U('g') + '. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: Mg = 24.31, Cl = 35.45.</p>',
      answer: 3.01e22 / 6.02e23 / 2 * 95.21, tolerance: '1%', sigfigs: 3, unit: 'g',
      hints: [
        'Work backwards along the usual route: number of ions → amount of ions → amount of ' + C('MgCl2') + ' → mass.',
        'One formula unit of ' + C('MgCl2') + ' contains 2 chloride ions. So is the amount of ' + C('MgCl2') + ' bigger or smaller than the amount of ' + C('Cl-') + '?',
        '<i>n</i>(' + C('MgCl2') + ') = <i>n</i>(' + C('Cl-') + ') ÷ 2. Then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> with <i>M</i> = 95.21 ' + U('g mol-1') + '.'
      ],
      solution: M('<i>n</i>(' + C('Cl-') + ') = <span class="frac"><span>' + E('3.01', 22) + '</span><span>' + NAu + '</span></span> = 0.0500 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>n</i>(' + C('MgCl2') + ') = 0.0500 ' + U('mol') + ' ÷ 2 = 0.0250 ' + U('mol') + ' &nbsp; (M2)') +
        M('<i>M</i>(' + C('MgCl2') + ') = 24.31 + (2 × 35.45) = 95.21 ' + U('g mol-1')) +
        M('<i>m</i> = 0.0250 ' + U('mol') + ' × 95.21 ' + U('g mol-1') + ' = <strong>2.38 ' + U('g') + '</strong> &nbsp; (M3)') +
        '<p>Named slips: 4.76 g means you did not divide by 2. 9.52 g means you multiplied by 2 instead of dividing. There are fewer formula units than chloride ions.</p>'
    },
    {
      id: 's1-4-q020', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.3',
      stem: '<p>A student calculates the number of hydrogen atoms in 3.20 ' + U('g') + ' of methane, ' + C('CH4') + '. Their working is shown.</p>' +
        '<ol><li><i>M</i>(' + C('CH4') + ') = 12.01 + (4 × 1.01) = 16.05 ' + U('g mol-1') + '</li>' +
        '<li><i>n</i>(' + C('CH4') + ') = 3.20 ÷ 16.05 = 0.199 ' + U('mol') + '</li>' +
        '<li>Number of molecules = 0.199 × ' + NA + ' = ' + E('1.20', 23) + '</li>' +
        '<li>Number of H atoms = ' + E('1.20', 23) + ' ÷ 4 = ' + E('3.00', 22) + '</li></ol>' +
        '<p>Which line contains the error?</p>',
      options: ['Line 1', 'Line 2', 'Line 3', 'Line 4'],
      answer: 3,
      misconception: {
        0: 'Line 1 is correct: one C and four H gives 16.05 ' + U('g mol-1') + '. Look for a step where the answer moves in the wrong direction.',
        1: 'Line 2 is correct: <i>n</i> = <i>m</i> ÷ <i>M</i> with mass in g and molar mass in g mol<sup>−1</sup>.',
        2: 'Line 3 is correct: moles to molecules means multiplying by <i>N</i><sub>A</sub>.'
      },
      hints: [
        'Check each line for two things: the right relationship, and an answer that moves in a sensible direction.',
        'Should there be more hydrogen atoms than molecules, or fewer?'
      ],
      solution: '<p>Lines 1 to 3 are correct. In line 4 the student divided by 4. Each ' + C('CH4') + ' molecule contains 4 hydrogen atoms, so there are 4 times <em>more</em> H atoms than molecules.</p>' +
        M('<i>N</i>(H) = 4 × ' + E('1.20', 23) + ' = <strong>' + E('4.80', 23) + '</strong>')
    },

    /* ====================================================================
       Structure 1.4.4 — empirical and molecular formulas
       ==================================================================== */
    {
      id: 's1-4-q021', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: '<p>Glucose has the molecular formula ' + C('C6H12O6') + '. What is its empirical formula?</p>',
      options: [C('C6H12O6'), C('C3H6O3'), C('CH2O'), C('CHO')],
      answer: 2,
      misconception: {
        0: 'This is the molecular formula: the actual number of atoms in one molecule. The empirical formula is the simplest whole-number ratio.',
        1: 'You divided by 2, but 3 : 6 : 3 can still be divided by 3. Keep going until the ratio cannot be made simpler.',
        3: 'You removed the subscripts instead of dividing them. The ratio of atoms is 6 : 12 : 6, which simplifies to 1 : 2 : 1.'
      },
      hints: [
        'The empirical formula gives the simplest ratio of atoms of each element.',
        'Find the largest number that divides exactly into 6, 12 and 6.'
      ],
      solution: M('C : H : O = 6 : 12 : 6') + M('Divide by 6: C : H : O = 1 : 2 : 1') + '<p>The empirical formula is <strong>' + C('CH2O') + '</strong>.</p>'
    },
    {
      id: 's1-4-q022', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.4',
      stem: '<p>Ammonium sulfate, ' + C('(NH4)2SO4') + ', is used as a fertilizer.</p><p>Calculate the percentage by mass of nitrogen in ammonium sulfate. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: N = 14.01, H = 1.01, S = 32.07, O = 16.00.</p>',
      answer: 2 * 14.01 / 132.17 * 100, tolerance: '1%', sigfigs: 3, unit: '%',
      hints: [
        'Percentage by mass of an element = (mass of that element in one mole of compound ÷ molar mass of compound) × 100.',
        'Count the nitrogen atoms carefully. The subscript 2 outside the bracket applies to N and to H.',
        '<i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).'
      ],
      solution: M('<i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 ' + U('g mol-1') + ' &nbsp; (M1)') +
        M('<i>m</i>(N in 1 mol) = 2 × 14.01 ' + U('g') + ' = 28.02 ' + U('g')) +
        M('% N = <span class="frac"><span>28.02</span><span>132.17</span></span> × 100 = <strong>21.2 %</strong> &nbsp; (M2)') +
        '<p>Named slip: 10.6 % means you counted one nitrogen atom instead of two.</p>'
    },
    {
      id: 's1-4-q023', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: '<p>A compound contains, by mass, 29.1 % sodium, 40.5 % sulfur and 30.4 % oxygen.</p><p>What is its empirical formula?</p><p>Use <i>A</i><sub>r</sub>: Na = 22.99, S = 32.07, O = 16.00.</p>',
      options: [C('NaSO'), C('NaSO2'), C('Na2S2O3'), C('Na3S4O3')],
      answer: 2,
      misconception: {
        0: 'You rounded 1.5 down to 1. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.',
        1: 'You rounded 1.5 up to 2. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.',
        3: 'You used the percentages as if they were numbers of atoms (29 : 40 : 30 ≈ 3 : 4 : 3). Divide each percentage by the <i>A</i><sub>r</sub> first to get moles.'
      },
      hints: [
        'Imagine 100 g of compound, so each percentage becomes a mass in grams. Then use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span> for each element.',
        'Divide all three amounts by the smallest one.',
        'You should get 1 : 1 : 1.5. Do not round the 1.5. What can you multiply by to make every number whole?'
      ],
      solution: '<div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th>' + TH('Na') + TH('S') + TH('O') + '</tr></thead><tbody>' +
        '<tr><th scope="row">Mass in 100 g / g</th><td class="num">29.1</td><td class="num">40.5</td><td class="num">30.4</td></tr>' +
        '<tr><th scope="row">÷ <i>A</i><sub>r</sub> → amount / mol</th><td class="num">1.266</td><td class="num">1.263</td><td class="num">1.900</td></tr>' +
        '<tr><th scope="row">÷ smallest (1.263)</th><td class="num">1.00</td><td class="num">1.00</td><td class="num">1.50</td></tr>' +
        '<tr><th scope="row">× 2</th><td class="num">2</td><td class="num">2</td><td class="num">3</td></tr>' +
        '</tbody></table></div><p>The empirical formula is <strong>' + C('Na2S2O3') + '</strong>.</p>'
    },
    {
      id: 's1-4-q024', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: '<p>1.43 ' + U('g') + ' of an oxide of copper is heated in a stream of hydrogen until all of it has been reduced to copper. The copper left has a mass of 1.27 ' + U('g') + '.</p><p>What is the empirical formula of the oxide?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, O = 16.00.</p>',
      options: [C('CuO2'), C('Cu2O'), C('Cu4O'), C('Cu8O')],
      answer: 1,
      misconception: {
        0: 'You have the ratio upside down. There are 0.0200 mol of Cu and 0.0100 mol of O, so there are two Cu for each O.',
        2: 'You divided the mass of oxygen by 32.00. The formula counts oxygen <em>atoms</em>, so use <i>A</i><sub>r</sub>(O) = 16.00, not <i>M</i>(' + C('O2') + ').',
        3: 'You used the ratio of the masses (1.27 : 0.16 ≈ 8 : 1). A formula is a ratio of amounts in moles, so divide each mass by its <i>A</i><sub>r</sub> first.'
      },
      hints: [
        'The oxide contains only copper and oxygen. The mass lost is the mass of oxygen, so find it by subtraction.',
        'Convert each mass to an amount with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>. Use the mass of an oxygen <em>atom</em>.',
        'Divide both amounts by the smaller one to get the ratio.'
      ],
      solution: M('<i>m</i>(O) = 1.43 ' + U('g') + ' − 1.27 ' + U('g') + ' = 0.16 ' + U('g')) +
        M('<i>n</i>(Cu) = <span class="frac"><span>1.27 ' + U('g') + '</span><span>63.55 ' + U('g mol-1') + '</span></span> = 0.0200 ' + U('mol')) +
        M('<i>n</i>(O) = <span class="frac"><span>0.16 ' + U('g') + '</span><span>16.00 ' + U('g mol-1') + '</span></span> = 0.0100 ' + U('mol')) +
        M('Cu : O = 0.0200 : 0.0100 = 2 : 1') + '<p>The empirical formula is <strong>' + C('Cu2O') + '</strong>.</p>'
    },
    {
      id: 's1-4-q025', topic: 's1-4', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 1.4.4',
      stem: '<p>A compound contains only carbon, hydrogen and oxygen. Complete combustion of 1.50 ' + U('g') + ' of the compound gives 3.30 ' + U('g') + ' of ' + C('CO2') + ' and 1.80 ' + U('g') + ' of ' + C('H2O') + '.</p><p>Determine the empirical formula of the compound. Show your working.</p><p><i>M</i>(' + C('CO2') + ') = 44.01 ' + U('g mol-1') + ', <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + '. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>',
      answer: '<p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol and <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol.</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g, so <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol.</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1. Empirical formula: ' + C('C3H8O') + '.</p>',
      markscheme: [
        'M1: n(C) = 0.0750 mol AND n(H) = 0.200 mol. (Accept masses: 0.901 g of C and 0.202 g of H.)',
        'M2: mass of O by difference = 0.398 g, OR n(O) = 0.0249 mol.',
        'M3: C₃H₈O. (A correct final formula with no working would earn all 3 marks, but always show working so that an error is penalised only once.)'
      ],
      hints: [
        'All the carbon ends up in ' + C('CO2') + ' and all the hydrogen ends up in ' + C('H2O') + '. Use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for each product.',
        'Each ' + C('H2O') + ' contains 2 H atoms, so <i>n</i>(H) = 2 × <i>n</i>(' + C('H2O') + ').',
        'The oxygen in the products comes partly from the air, so you cannot count it directly. Find the mass of O in the compound by difference: mass of compound − mass of C − mass of H.'
      ],
      solution: M('<i>n</i>(C) = <i>n</i>(' + C('CO2') + ') = <span class="frac"><span>3.30 ' + U('g') + '</span><span>44.01 ' + U('g mol-1') + '</span></span> = 0.07498 ' + U('mol')) +
        M('<i>n</i>(H) = 2 × <i>n</i>(' + C('H2O') + ') = 2 × <span class="frac"><span>1.80 ' + U('g') + '</span><span>18.02 ' + U('g mol-1') + '</span></span> = 0.1998 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>m</i>(C) = 0.07498 ' + U('mol') + ' × 12.01 ' + U('g mol-1') + ' = 0.9005 ' + U('g')) +
        M('<i>m</i>(H) = 0.1998 ' + U('mol') + ' × 1.01 ' + U('g mol-1') + ' = 0.2018 ' + U('g')) +
        M('<i>m</i>(O) = 1.50 ' + U('g') + ' − 0.9005 ' + U('g') + ' − 0.2018 ' + U('g') + ' = 0.3977 ' + U('g')) +
        M('<i>n</i>(O) = <span class="frac"><span>0.3977 ' + U('g') + '</span><span>16.00 ' + U('g mol-1') + '</span></span> = 0.02485 ' + U('mol') + ' &nbsp; (M2)') +
        P('Divide each amount by the smallest (0.02485 mol):') + M('C : H : O = 3.02 : 8.04 : 1.00') +
        '<p>Empirical formula: <strong>' + C('C3H8O') + '</strong> (M3). The ratios 3.02 and 8.04 are within experimental rounding of whole numbers, so rounding is justified here.</p>'
    },
    {
      id: 's1-4-q026', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: '<p>An oxide of phosphorus has the empirical formula ' + C('P2O5') + ' and a molar mass of 283.88 ' + U('g mol-1') + '.</p><p>What is its molecular formula?</p><p>Use <i>A</i><sub>r</sub>: P = 30.97, O = 16.00.</p>',
      options: [C('P2O5'), C('P2O10'), C('P4O5'), C('P4O10')],
      answer: 3,
      misconception: {
        0: 'This is the empirical formula. Its mass is 141.94, which is only half of the molar mass, so the molecule contains two empirical units.',
        1: 'You doubled only the oxygen. Every subscript in the empirical formula must be multiplied by the same whole number.',
        2: 'You doubled only the phosphorus. Every subscript in the empirical formula must be multiplied by the same whole number.'
      },
      hints: [
        'Find the mass of one empirical formula unit, ' + C('P2O5') + '.',
        'Divide the molar mass by the empirical formula mass. The result is how many empirical units make one molecule.'
      ],
      solution: P('Find the mass of one empirical formula unit.') + M('<i>M</i>(' + C('P2O5') + ') = (2 × 30.97) + (5 × 16.00) = 141.94 ' + U('g mol-1')) +
        M('Number of units = <span class="frac"><span>283.88 ' + U('g mol-1') + '</span><span>141.94 ' + U('g mol-1') + '</span></span> = 2.00') +
        M('Molecular formula = 2 × ' + C('P2O5') + ' = <strong>' + C('P4O10') + '</strong>')
    },
    {
      id: 's1-4-q027', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.4.4',
      stem: '<p>7.15 ' + U('g') + ' of hydrated sodium carbonate, ' + C('Na2CO3') + '·<i>x</i>' + C('H2O') + ', is heated to constant mass. The anhydrous ' + C('Na2CO3') + ' left has a mass of 2.65 ' + U('g') + '.</p><p>Determine the whole-number value of <i>x</i>.</p><p><i>M</i>(' + C('Na2CO3') + ') = 105.99 ' + U('g mol-1') + ', <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + '</p>',
      answer: 10, tolerance: { abs: 0.1 }, answerDisplay: '10',
      hints: [
        'This is an empirical formula problem with two "building blocks": ' + C('Na2CO3') + ' and ' + C('H2O') + '. The mass lost on heating is the mass of water.',
        'Find the amount of each with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>. Use 2.65 g for ' + C('Na2CO3') + ' and the mass lost for ' + C('H2O') + '.',
        '<i>x</i> = <i>n</i>(' + C('H2O') + ') ÷ <i>n</i>(' + C('Na2CO3') + ').'
      ],
      solution: M('<i>m</i>(' + C('H2O') + ') = 7.15 ' + U('g') + ' − 2.65 ' + U('g') + ' = 4.50 ' + U('g') + ' &nbsp; (M1)') +
        M('<i>n</i>(' + C('Na2CO3') + ') = <span class="frac"><span>2.65 ' + U('g') + '</span><span>105.99 ' + U('g mol-1') + '</span></span> = 0.02500 ' + U('mol')) +
        M('<i>n</i>(' + C('H2O') + ') = <span class="frac"><span>4.50 ' + U('g') + '</span><span>18.02 ' + U('g mol-1') + '</span></span> = 0.2497 ' + U('mol') + ' &nbsp; (M2)') +
        M('<i>x</i> = <span class="frac"><span>0.2497 ' + U('mol') + '</span><span>0.02500 ' + U('mol') + '</span></span> = 9.99 &nbsp; (M3)') + P('To the nearest whole number, <strong><i>x</i> = 10</strong>.') +
        '<p>Named slips: dividing the masses (4.50 ÷ 2.65 = 1.7) skips the conversion to moles. Using 7.15 g as the mass of ' + C('Na2CO3') + ' gives 3.7, because 7.15 g still includes the water.</p>'
    },
    {
      id: 's1-4-q028', topic: 's1-4', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.4.4',
      stem: '<p>A student heats a hydrated salt in a crucible to find the amount of water of crystallization. The method says: "heat to constant mass".</p><p>Describe what "heat to constant mass" means in practice, and explain why it is done.</p>',
      answer: '<p>Heat, cool and weigh the crucible, then repeat the heating and weighing until two weighings in a row give the same mass. This shows that all the water of crystallization has been removed, so the mass lost is the full mass of water.</p>',
      markscheme: [
        'Heat, (cool,) weigh and repeat until the mass no longer changes / two consecutive readings are the same.',
        'To make sure that all of the water has been removed / the dehydration is complete. (Accept: otherwise the mass of water, and so the value of x, would be too low.)'
      ],
      hints: [
        'How can you tell, using only a balance, that nothing more is leaving the crucible?',
        'Think about what would happen to your value for the water if some water was still in the solid.'
      ],
      solution: '<p>One weighing cannot tell you whether water is still being lost. If the mass after a second heating is the same as after the first, no more water is leaving. If you stop too early, the mass lost is too small, so the calculated amount of water is too low.</p>'
    },
    {
      id: 's1-4-q029', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'short', marks: 4,
      syllabus: 'Structure 1.4.4',
      stem: '<p>A colourless liquid contains only carbon, hydrogen and oxygen. Complete combustion of 1.35 ' + U('g') + ' of the liquid gives 2.64 ' + U('g') + ' of ' + C('CO2') + ' and 1.35 ' + U('g') + ' of ' + C('H2O') + '. Its molar mass is 90.14 ' + U('g mol-1') + '.</p><p>Determine the empirical formula and the molecular formula of the liquid. Show your working.</p><p><i>M</i>(' + C('CO2') + ') = 44.01 ' + U('g mol-1') + ', <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + '. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>',
      answer: '<p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol; <i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol.</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g; <i>n</i>(O) = 0.0299 mol.</p><p>C : H : O = 2 : 5 : 1, so the empirical formula is ' + C('C2H5O') + ' (mass 45.07). 90.14 ÷ 45.07 = 2, so the molecular formula is ' + C('C4H10O2') + '.</p>',
      markscheme: [
        'M1: n(C) = 0.0600 mol AND n(H) = 0.150 mol. (Accept masses: 0.720 g of C and 0.151 g of H.)',
        'M2: mass of O by difference = 0.478 g, OR n(O) = 0.0299 mol.',
        'M3: empirical formula C₂H₅O.',
        'M4: 90.14 ÷ 45.07 = 2, so molecular formula C₄H₁₀O₂. (Allow error carried forward from your empirical formula.)'
      ],
      hints: [
        'Split the task: first the empirical formula from the combustion data, then the molecular formula from the molar mass.',
        '<i>n</i>(C) = <i>n</i>(' + C('CO2') + '), <i>n</i>(H) = 2 × <i>n</i>(' + C('H2O') + '). Find the mass of O by difference.',
        'Compare the molar mass with the mass of one empirical formula unit. Multiply every subscript by the ratio.'
      ],
      solution: M('<i>n</i>(C) = <span class="frac"><span>2.64 ' + U('g') + '</span><span>44.01 ' + U('g mol-1') + '</span></span> = 0.05999 ' + U('mol')) +
        M('<i>n</i>(H) = 2 × <span class="frac"><span>1.35 ' + U('g') + '</span><span>18.02 ' + U('g mol-1') + '</span></span> = 0.1498 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>m</i>(C) = 0.05999 ' + U('mol') + ' × 12.01 ' + U('g mol-1') + ' = 0.7204 ' + U('g')) +
        M('<i>m</i>(H) = 0.1498 ' + U('mol') + ' × 1.01 ' + U('g mol-1') + ' = 0.1513 ' + U('g')) +
        M('<i>m</i>(O) = 1.35 ' + U('g') + ' − 0.7204 ' + U('g') + ' − 0.1513 ' + U('g') + ' = 0.4782 ' + U('g')) +
        M('<i>n</i>(O) = <span class="frac"><span>0.4782 ' + U('g') + '</span><span>16.00 ' + U('g mol-1') + '</span></span> = 0.02989 ' + U('mol') + ' &nbsp; (M2)') +
        P('Divide each amount by the smallest (0.02989 mol):') + M('C : H : O = 2.01 : 5.01 : 1.00') +
        P('Empirical formula: <strong>' + C('C2H5O') + '</strong> (M3). Now compare its mass with the molar mass.') +
        M('<i>M</i>(' + C('C2H5O') + ') = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 ' + U('g mol-1')) +
        M('Number of units = <span class="frac"><span>90.14 ' + U('g mol-1') + '</span><span>45.07 ' + U('g mol-1') + '</span></span> = 2.00') +
        P('Molecular formula = 2 × ' + C('C2H5O') + ' = <strong>' + C('C4H10O2') + '</strong> (M4).')
    },
    {
      id: 's1-4-q030', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: '<p>An oxide of iron contains 72.4 % iron and 27.6 % oxygen by mass. A student works out its empirical formula.</p>' +
        '<ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li>' +
        '<li>Divide by the smallest: Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li>' +
        '<li>Round to whole numbers: Fe = 1, O = 1</li>' +
        '<li>Empirical formula: ' + C('FeO') + '</li></ol>' +
        '<p>Which statement about this working is correct?</p>',
      options: [
        'Line 1 is wrong: the percentages should be divided by the atomic numbers.',
        'Line 2 is wrong: the student should divide by the largest value.',
        'Line 3 is wrong: 1.33 is too far from a whole number to round.',
        'The working is correct and the formula is ' + C('FeO') + '.'
      ],
      answer: 2,
      misconception: {
        0: 'Dividing by <i>A</i><sub>r</sub> is right. It converts mass into amount in moles. Atomic number counts protons and is not used here.',
        1: 'Dividing by the smallest value is the standard method. It sets the smallest amount to 1 so that the other values are easy to compare.',
        3: 'Check the last step. 1.33 is one and a third, not about 1. ' + C('FeO') + ' would contain 77.7 % iron, which does not match the data.'
      },
      hints: [
        'Only round when a value is very close to a whole number (for example 1.98 or 3.02).',
        '1.33 is a recognizable fraction: 1⅓. What can you multiply by to clear a third?'
      ],
      solution: '<p>Lines 1 and 2 are correct. The error is in line 3. A ratio of 1 : 1.33 must be multiplied up, not rounded.</p>' +
        M('Fe : O = 1.00 : 1.33') + M('× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4') +
        '<p>The empirical formula is <strong>' + C('Fe3O4') + '</strong>. Look out for .5 (× 2), .33 or .67 (× 3) and .25 or .75 (× 4).</p>'
    },
    {
      id: 's1-4-q031', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.4.4',
      stem: '<p>A metal M forms a chloride with the formula ' + C('MCl2') + '. The chloride contains 74.47 % chlorine by mass.</p><p>Calculate the relative atomic mass of M. Give your answer to 3 significant figures.</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>',
      answer: 2 * 35.45 / 0.7447 - 2 * 35.45, tolerance: '1%', sigfigs: [3, 4], answerDisplay: '24.3',
      hints: [
        'This is percentage composition in reverse. You know the formula and the percentage, and you want a molar mass.',
        'In one mole of ' + C('MCl2') + ' there are 2 × 35.45 = 70.90 g of chlorine. That 70.90 g is 74.47 % of the molar mass.',
        'Molar mass = 70.90 ÷ 0.7447. Then subtract the chlorine to leave M.'
      ],
      solution: P('One mole of ' + C('MCl2') + ' contains 2 mol of Cl.') + M('<i>m</i>(Cl) = 2 × 35.45 ' + U('g') + ' = 70.90 ' + U('g') + ' &nbsp; (M1)') +
        M('<i>M</i>(' + C('MCl2') + ') = <span class="frac"><span>70.90 ' + U('g mol-1') + '</span><span>0.7447</span></span> = 95.21 ' + U('g mol-1') + ' &nbsp; (M2)') +
        M('<i>A</i><sub>r</sub>(M) = 95.21 − 70.90 = 24.31 = <strong>24.3</strong> (no units) &nbsp; (M3)') +
        '<p>The data booklet value for magnesium is 24.31, so M is magnesium. Named slips: 12.2 means you used one Cl instead of two. 95.2 means you did not subtract the chlorine.</p>'
    },
    {
      id: 's1-4-q032', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: '<p>0.920 ' + U('g') + ' of a compound of carbon, hydrogen and oxygen burns completely to give 1.76 ' + U('g') + ' of ' + C('CO2') + ' and 1.08 ' + U('g') + ' of ' + C('H2O') + '. A student starts to find the empirical formula.</p>' +
        '<ol><li><i>n</i>(C) = <i>n</i>(' + C('CO2') + ') = 1.76 ÷ 44.01 = 0.0400 ' + U('mol') + '</li>' +
        '<li><i>n</i>(H) = <i>n</i>(' + C('H2O') + ') = 1.08 ÷ 18.02 = 0.0599 ' + U('mol') + '</li>' +
        '<li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 ' + U('g') + '</li>' +
        '<li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 ' + U('mol') + '</li></ol>' +
        '<p>Which line contains the first error?</p>',
      options: ['Line 1', 'Line 2', 'Line 3', 'Line 4'],
      answer: 1,
      misconception: {
        0: 'Line 1 is correct. Each ' + C('CO2') + ' molecule contains one carbon atom, so <i>n</i>(C) = <i>n</i>(' + C('CO2') + ').',
        2: 'The method in line 3 is correct: oxygen is found by difference. Its value is wrong only because it uses a wrong number from an earlier line. Find where that number came from.',
        3: 'The method in line 4 is correct: <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> with 16.00 for oxygen atoms. The wrong value was carried forward from an earlier line.'
      },
      hints: [
        'Check each "<i>n</i>(element) = <i>n</i>(product)" step against the formula of the product.',
        'How many hydrogen atoms are in one molecule of ' + C('H2O') + '?'
      ],
      solution: '<p>The first error is in line 2. Each ' + C('H2O') + ' molecule contains 2 hydrogen atoms.</p>' +
        M('<i>n</i>(H) = 2 × <i>n</i>(' + C('H2O') + ') = 2 × 0.0599 ' + U('mol') + ' = 0.120 ' + U('mol')) +
        M('<i>m</i>(C) = 0.0400 ' + U('mol') + ' × 12.01 ' + U('g mol-1') + ' = 0.480 ' + U('g')) +
        M('<i>m</i>(H) = 0.120 ' + U('mol') + ' × 1.01 ' + U('g mol-1') + ' = 0.121 ' + U('g')) +
        M('<i>m</i>(O) = 0.920 ' + U('g') + ' − 0.480 ' + U('g') + ' − 0.121 ' + U('g') + ' = 0.319 ' + U('g')) +
        M('<i>n</i>(O) = <span class="frac"><span>0.319 ' + U('g') + '</span><span>16.00 ' + U('g mol-1') + '</span></span> = 0.0199 ' + U('mol')) +
        M('C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1') +
        '<p>The correct empirical formula is ' + C('C2H6O') + '. In an exam, lines 3 and 4 would still earn credit as "error carried forward", which is why showing working matters.</p>'
    },

    /* ====================================================================
       Structure 1.4.5 — molar concentration
       ==================================================================== */
    {
      id: 's1-4-q033', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>0.0500 ' + U('mol') + ' of sodium chloride is dissolved in water and the solution is made up to 250 ' + U('cm3') + '.</p><p>Calculate the concentration of the solution, in ' + U('mol dm-3') + '. Give your answer to 3 significant figures.</p>',
      answer: 0.200, tolerance: '1%', sigfigs: 3, unit: 'mol dm-3',
      hints: [
        'The data booklet gives <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>. Rearranged: <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span>.',
        'The volume must be in ' + U('dm3') + '. To convert ' + U('cm3') + ' to ' + U('dm3') + ', divide by 1000: 250 ' + U('cm3') + ' = 0.250 ' + U('dm3') + '.'
      ],
      solution: M('<i>V</i> = 250 ' + U('cm3') + ' ÷ 1000 = 0.250 ' + U('dm3')) +
        M('<i>C</i> = <span class="frac"><span><i>n</i></span><span><i>V</i></span></span> = <span class="frac"><span>0.0500 ' + U('mol') + '</span><span>0.250 ' + U('dm3') + '</span></span>') +
        M('<i>C</i> = <strong>0.200 ' + U('mol dm-3') + '</strong>') +
        '<p>Named slips: 0.000200 means you left the volume in ' + U('cm3') + '. 0.0125 means you multiplied by the volume instead of dividing.</p>'
    },
    {
      id: 's1-4-q034', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A bottle is labelled <span class="mono">[NaOH] = 0.10</span>. What do the square brackets tell you?</p>',
      options: [
        'The bottle contains 0.10 ' + U('mol') + ' of ' + C('NaOH') + '.',
        'The solution contains 0.10 ' + U('g') + ' of ' + C('NaOH') + ' in each ' + U('dm3') + ' of solution.',
        'The solution contains 0.10 ' + U('mol') + ' of ' + C('NaOH') + ' in each ' + U('dm3') + ' of solution.',
        '0.10 ' + U('mol') + ' of ' + C('NaOH') + ' was added to exactly 1 ' + U('dm3') + ' of water.'
      ],
      answer: 2,
      misconception: {
        0: 'Square brackets show a concentration, not an amount. The amount in the bottle also depends on the volume of solution.',
        1: 'Square brackets mean <em>molar</em> concentration, in ' + U('mol dm-3') + '. A mass concentration in ' + U('g dm-3') + ' is written without square brackets.',
        3: 'Concentration is defined by the volume of the final <em>solution</em>, not the volume of water added. Adding solute to 1 ' + U('dm3') + ' of water does not give exactly 1 ' + U('dm3') + ' of solution.'
      },
      hints: [
        'Square brackets around a formula mean "molar concentration of".',
        'Molar concentration = amount of solute ÷ volume of <em>solution</em>.'
      ],
      solution: '<p>[NaOH] means the molar concentration of sodium hydroxide, in ' + U('mol dm-3') + '. So there is 0.10 mol of ' + C('NaOH') + ' in each ' + U('dm3') + ' of solution.</p>'
    },
    {
      id: 's1-4-q035', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>Calculate the amount, in ' + U('mol') + ', of ' + C('HCl') + ' in 25.0 ' + U('cm3') + ' of 0.120 ' + U('mol dm-3') + ' hydrochloric acid. Give your answer to 3 significant figures.</p>',
      answer: 0.00300, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: [
        'Use <span class="mono"><i>n</i> = <i>C</i><i>V</i></span> from the data booklet.',
        'Convert the volume first: 25.0 ' + U('cm3') + ' ÷ 1000 = 0.0250 ' + U('dm3') + '.'
      ],
      solution: M('<i>V</i> = 25.0 ' + U('cm3') + ' ÷ 1000 = 0.0250 ' + U('dm3')) +
        M('<i>n</i> = <i>C</i><i>V</i> = 0.120 ' + U('mol dm-3') + ' × 0.0250 ' + U('dm3')) +
        M('<i>n</i> = 0.00300 ' + U('mol') + ' = <strong>' + E('3.00', -3) + ' ' + U('mol') + '</strong>') +
        '<p>Named slip: 3.00 mol means you did not convert ' + U('cm3') + ' to ' + U('dm3') + '. A small flask of dilute acid cannot hold 3 mol of HCl.</p>'
    },
    {
      id: 's1-4-q036', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A student needs 100.0 ' + U('cm3') + ' of a 0.2000 ' + U('mol dm-3') + ' standard solution of sodium carbonate, ' + C('Na2CO3') + '.</p><p>Calculate the mass of anhydrous sodium carbonate needed, in ' + U('g') + '. Give your answer to 4 significant figures.</p><p><i>M</i>(' + C('Na2CO3') + ') = 105.99 ' + U('g mol-1') + '</p>',
      answer: 0.2000 * 0.1000 * 105.99, tolerance: { rel: 0.003 }, sigfigs: 4, unit: 'g',
      hints: [
        'Two relationships, one after the other: <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>, then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>.',
        'Convert the volume: 100.0 ' + U('cm3') + ' = 0.1000 ' + U('dm3') + '.',
        'The data have 4 significant figures, so give 4 in your answer.'
      ],
      solution: M('<i>V</i> = 100.0 ' + U('cm3') + ' ÷ 1000 = 0.1000 ' + U('dm3')) +
        M('<i>n</i> = <i>C</i><i>V</i> = 0.2000 ' + U('mol dm-3') + ' × 0.1000 ' + U('dm3') + ' = 0.02000 ' + U('mol') + ' &nbsp; (M1)') +
        M('<i>m</i> = <i>n</i> × <i>M</i> = 0.02000 ' + U('mol') + ' × 105.99 ' + U('g mol-1') + ' = 2.1198 ' + U('g') + ' = <strong>2.120 ' + U('g') + '</strong> &nbsp; (M2)') +
        '<p>Named slips: 21.20 g is the mass for a whole ' + U('dm3') + ' (volume not used). 2120 g means the volume was left in ' + U('cm3') + '.</p>'
    },
    {
      id: 's1-4-q037', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A solution of hydrochloric acid has a concentration of 7.30 ' + U('g dm-3') + '.</p><p>Calculate its concentration in ' + U('mol dm-3') + '. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('HCl') + ') = 36.46 ' + U('g mol-1') + '</p>',
      answer: 7.30 / 36.46, tolerance: '1%', sigfigs: 3, unit: 'mol dm-3',
      hints: [
        'Both units are "per ' + U('dm3') + '". Only the top of the unit changes: grams become moles.',
        'Grams to moles: divide by the molar mass, as in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.'
      ],
      solution: P('Concentration in ' + U('mol dm-3') + ' = concentration in ' + U('g dm-3') + ' ÷ molar mass.') +
        M('<i>C</i> = <span class="frac"><span>7.30 ' + U('g dm-3') + '</span><span>36.46 ' + U('g mol-1') + '</span></span> = 0.2002 ' + U('mol dm-3') + ' = <strong>0.200 ' + U('mol dm-3') + '</strong>') +
        '<p>Named slip: multiplying gives 266. One ' + U('dm3') + ' holding 7.30 g of a substance with <i>M</i> ≈ 36 must hold much less than one mole.</p>'
    },
    {
      id: 's1-4-q038', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A solution of potassium manganate(VII) has ' + '[' + C('KMnO4') + '] = 0.0250 ' + U('mol dm-3') + '.</p><p>Calculate its concentration in ' + U('g dm-3') + '. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('KMnO4') + ') = 158.04 ' + U('g mol-1') + '</p>',
      answer: 0.0250 * 158.04, tolerance: '1%', sigfigs: 3, unit: 'g dm-3',
      hints: [
        'You are changing moles into grams, in every ' + U('dm3') + '. Which way does <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> go?',
        'Multiply the molar concentration by the molar mass. Check the units: mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>.'
      ],
      solution: P('Concentration in ' + U('g dm-3') + ' = concentration in ' + U('mol dm-3') + ' × molar mass.') +
        M('<i>C</i> = 0.0250 ' + U('mol dm-3') + ' × 158.04 ' + U('g mol-1') + ' = 3.951 ' + U('g dm-3') + ' = <strong>3.95 ' + U('g dm-3') + '</strong>') +
        '<p>Named slip: dividing gives 0.000158. One mole of ' + C('KMnO4') + ' has a mass of 158 g, so the number of grams must be bigger than the number of moles.</p>'
    },
    {
      id: 's1-4-q039', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A solution of magnesium chloride has [' + C('MgCl2') + '] = 0.15 ' + U('mol dm-3') + '.</p><p>What is the concentration of chloride ions, [' + C('Cl-') + '], in ' + U('mol dm-3') + '?</p>',
      options: ['0.075', '0.15', '0.30', '0.45'],
      answer: 2,
      misconception: {
        0: 'You divided by 2. Each formula unit releases 2 chloride ions, so there are more chloride ions than formula units, not fewer.',
        1: 'This is the concentration of ' + C('Mg^2+') + ' ions. The subscript 2 in ' + C('MgCl2') + ' means each formula unit gives 2 chloride ions.',
        3: 'This is the total concentration of all ions (1 ' + C('Mg^2+') + ' + 2 ' + C('Cl-') + '). The question asks for chloride ions only.'
      },
      hints: [
        'Write what happens when the salt dissolves: ' + C('MgCl2 -> Mg^2+ + 2Cl-') + '.',
        'How many moles of ' + C('Cl-') + ' come from one mole of ' + C('MgCl2') + '?'
      ],
      solution: M(C('MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)')) +
        M('[' + C('Cl-') + '] = 2 × [' + C('MgCl2') + '] = 2 × 0.15 ' + U('mol dm-3') + ' = <strong>0.30 ' + U('mol dm-3') + '</strong>')
    },
    {
      id: 's1-4-q040', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A student has a 1.00 ' + U('mol dm-3') + ' stock solution of copper(II) sulfate. They need 250.0 ' + U('cm3') + ' of a 0.0800 ' + U('mol dm-3') + ' solution.</p><p>Calculate the volume of stock solution needed, in ' + U('cm3') + '. Give your answer to 3 significant figures.</p>',
      answer: 20.0, tolerance: '1%', sigfigs: 3, unit: 'cm3',
      hints: [
        'Diluting adds water but does not change the amount of solute. So <i>n</i> before = <i>n</i> after, which gives <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.',
        'Label the values: <i>C</i><sub>1</sub> = 1.00, <i>C</i><sub>2</sub> = 0.0800, <i>V</i><sub>2</sub> = 250.0 ' + U('cm3') + '. Both volumes can stay in ' + U('cm3') + ' here because the same unit is on both sides.'
      ],
      solution: M('<i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>') +
        M('<i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span> = <span class="frac"><span>0.0800 ' + U('mol dm-3') + ' × 250.0 ' + U('cm3') + '</span><span>1.00 ' + U('mol dm-3') + '</span></span>') +
        M('<i>V</i><sub>1</sub> = <strong>20.0 ' + U('cm3') + '</strong>') +
        '<p>Size check: the new solution is 12.5 times more dilute, so you need one 12.5th of the final volume. The 20.0 ' + U('cm3') + ' is then made up to 250.0 ' + U('cm3') + ' with distilled water. You do not add 250 ' + U('cm3') + ' of water to it.</p>'
    },
    {
      id: 's1-4-q041', topic: 's1-4', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 1.4.5',
      stem: '<p>Put these steps in order to prepare 250.0 ' + U('cm3') + ' of a standard solution from a solid.</p>',
      options: [
        'Weigh the required mass of solid accurately on a balance.',
        'Dissolve the solid in a small volume of distilled water in a beaker, stirring with a glass rod.',
        'Pour the solution through a funnel into a 250.0 cm<sup>3</sup> volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask.',
        'Add distilled water until the bottom of the meniscus is on the graduation mark, adding the last part drop by drop.',
        'Stopper the flask and invert it several times to mix.'
      ],
      hints: [
        'The solid must be fully dissolved before the volume is made up to the mark.',
        'Mixing comes last. If you mixed and then added more water, the concentration would change.'
      ],
      solution: '<p>Weigh, dissolve, transfer with rinsings, make up to the mark, mix.</p><p>The rinsings matter because any solution left in the beaker would mean less solute in the flask than you weighed. The flask is filled to the mark so that the volume of <em>solution</em> is exactly 250.0 ' + U('cm3') + '. Inverting makes the concentration the same throughout.</p>'
    },
    {
      id: 's1-4-q042', topic: 's1-4', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A student has weighed 2.650 ' + U('g') + ' of anhydrous sodium carbonate into a small beaker.</p><p>Describe how the student should use this solid to prepare 250.0 ' + U('cm3') + ' of a standard solution.</p>',
      answer: '<p>Dissolve the solid in distilled (deionized) water in the beaker. Transfer the solution to a 250.0 cm<sup>3</sup> volumetric flask, rinsing the beaker (and funnel and stirring rod) with distilled water and adding the rinsings to the flask. Add distilled water up to the graduation mark (bottom of the meniscus on the line). Stopper and invert the flask several times to mix.</p>',
      markscheme: [
        'Dissolve the solid in distilled / deionized water (in the beaker). (Do not accept "water" alone.)',
        'Transfer to a 250 cm³ volumetric flask AND rinse the beaker, adding the rinsings / washings to the flask.',
        'Make up to the (graduation) mark with distilled water / until the bottom of the meniscus is on the mark. (Do not accept "add 250 cm³ of water".)',
        'Stopper and invert / shake to mix thoroughly. (Any three points for 3 marks.)'
      ],
      hints: [
        'Name the piece of glassware that measures one fixed volume very precisely.',
        'How do you make sure that <em>all</em> of the weighed solid ends up in the solution?',
        'There are two more things to say: how the final volume is set, and what you do after that.'
      ],
      solution: '<p>What the marks reward: the type of water (distilled or deionized, because tap water contains dissolved ions), the volumetric flask with the rinsings transferred, making up to the mark, and mixing by inversion.</p><p>Two answers that lose marks: "add 250 ' + U('cm3') + ' of water" (the final <em>solution</em> must be 250.0 ' + U('cm3') + ', which is not the same thing) and using a beaker or measuring cylinder to measure the final volume (not precise enough).</p>'
    },
    {
      id: 's1-4-q043', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A student has a 0.500 ' + U('mol dm-3') + ' stock solution of nickel(II) sulfate. To make a calibration curve they need 100.0 ' + U('cm3') + ' of a 0.0500 ' + U('mol dm-3') + ' solution.</p><p>Calculate the volume of stock solution needed and describe how to carry out the dilution, naming the glassware.</p>',
      answer: '<p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>.</p><p>Use a 10.0 cm<sup>3</sup> volumetric (bulb) pipette to transfer the stock solution into a 100.0 cm<sup>3</sup> volumetric flask. Add distilled water up to the graduation mark. Stopper and invert to mix.</p>',
      markscheme: [
        'Volume of stock = 10.0 cm³.',
        'Measured with a (10.0 cm³) volumetric / graduated pipette (or burette). (Do not accept measuring cylinder.)',
        'Into a 100.0 cm³ volumetric flask.',
        'Made up to the mark with distilled / deionized water, AND mixed / inverted. (The volume mark plus any two of the other points for 3 marks.)'
      ],
      hints: [
        'The amount of solute does not change on dilution: <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.',
        'Choose glassware made to deliver or contain one precise volume. A measuring cylinder is not precise enough.',
        'How do you make the final volume exactly 100.0 ' + U('cm3') + '?'
      ],
      solution: M('<i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span> = <span class="frac"><span>0.0500 ' + U('mol dm-3') + ' × 100.0 ' + U('cm3') + '</span><span>0.500 ' + U('mol dm-3') + '</span></span> = <strong>10.0 ' + U('cm3') + '</strong>') +
        '<p>A pipette delivers the 10.0 ' + U('cm3') + ' precisely. A volumetric flask fixes the final volume precisely. Writing "add 90 ' + U('cm3') + ' of water" does not earn the mark: you make the solution <em>up to the mark</em>, because it is the final volume of solution that must be 100.0 ' + U('cm3') + '.</p>'
    },
    {
      id: 's1-4-q044', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.4.5',
      stem: '<p>5.55 ' + U('g') + ' of calcium chloride, ' + C('CaCl2') + ', is dissolved in distilled water and made up to 500.0 ' + U('cm3') + ' in a volumetric flask (solution A).</p><p>10.0 ' + U('cm3') + ' of solution A is then pipetted into a 250.0 ' + U('cm3') + ' volumetric flask and made up to the mark (solution B).</p><p>Calculate [' + C('Cl-') + '] in solution B, in ' + U('mol dm-3') + '. Give your answer to 3 significant figures.</p><p><i>M</i>(' + C('CaCl2') + ') = 110.98 ' + U('g mol-1') + '</p>',
      answer: 5.55 / 110.98 / 0.5 * 2 * 10.0 / 250.0, tolerance: '1%', sigfigs: 3, unit: 'mol dm-3',
      hints: [
        'Plan the chain: mass → amount of ' + C('CaCl2') + ' → concentration of solution A → chloride ion concentration → dilution.',
        'For solution A use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> then <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span> with <i>V</i> = 0.5000 ' + U('dm3') + '. Each ' + C('CaCl2') + ' gives 2 ' + C('Cl-') + '.',
        'For the dilution use <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> with <i>V</i><sub>1</sub> = 10.0 ' + U('cm3') + ' and <i>V</i><sub>2</sub> = 250.0 ' + U('cm3') + '.'
      ],
      solution: M('<i>n</i>(' + C('CaCl2') + ') = <span class="frac"><span>5.55 ' + U('g') + '</span><span>110.98 ' + U('g mol-1') + '</span></span> = 0.05001 ' + U('mol')) +
        M('<i>V</i>(A) = 500.0 ' + U('cm3') + ' ÷ 1000 = 0.5000 ' + U('dm3')) +
        M('[' + C('CaCl2') + '] in A = <span class="frac"><span>0.05001 ' + U('mol') + '</span><span>0.5000 ' + U('dm3') + '</span></span> = 0.1000 ' + U('mol dm-3') + ' &nbsp; (M1)') +
        M('[' + C('Cl-') + '] in A = 2 × 0.1000 ' + U('mol dm-3') + ' = 0.2000 ' + U('mol dm-3') + ' &nbsp; (M2)') +
        P('Dilution: the same ions are spread through a larger volume, so multiply by <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>.') +
        M('<span class="frac"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class="frac"><span>10.0 ' + U('cm3') + '</span><span>250.0 ' + U('cm3') + '</span></span> = 0.0400') +
        M('[' + C('Cl-') + '] in B = 0.2000 ' + U('mol dm-3') + ' × 0.0400 = <strong>0.00800 ' + U('mol dm-3') + '</strong> &nbsp; (M3)') +
        '<p>Named slips: 0.00400 means you forgot that each ' + C('CaCl2') + ' gives 2 chloride ions. 0.200 is solution A, before the dilution.</p>'
    },
    {
      id: 's1-4-q045', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A student makes a calibration curve for a coloured solution of copper(II) sulfate by measuring the absorbance of four standard solutions in a colorimeter.</p>' +
        '<div class="table-scroll"><table class="data"><caption>Calibration data</caption><thead><tr>' + TH('[' + C('CuSO4') + '] / mol dm<sup>−3</sup>') + TH('Absorbance') + '</tr></thead><tbody>' +
        '<tr><td class="num">0.010</td><td class="num">0.120</td></tr><tr><td class="num">0.020</td><td class="num">0.240</td></tr><tr><td class="num">0.030</td><td class="num">0.360</td></tr><tr><td class="num">0.040</td><td class="num">0.480</td></tr></tbody></table></div>' +
        '<p>The graph of absorbance against concentration is a straight line through the origin.</p><p>An unknown solution is too dark to measure directly. The student dilutes 5.00 ' + U('cm3') + ' of it to 100.0 ' + U('cm3') + '. The diluted solution has an absorbance of 0.300.</p><p>Determine the concentration of the <strong>original</strong> unknown solution, in ' + U('mol dm-3') + '. Give your answer to 2 significant figures.</p>',
      answer: 0.50, tolerance: '2%', sigfigs: [2, 3], unit: 'mol dm-3', answerDisplay: '0.50',
      hints: [
        'A calibration curve turns a measurement (absorbance) into a concentration. Find the gradient of the line: absorbance per ' + U('mol dm-3') + '.',
        'Use the line to read the concentration of the <em>diluted</em> solution: concentration = absorbance ÷ gradient.',
        'Then undo the dilution with <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>. The original solution must be more concentrated than the diluted one.'
      ],
      solution: M('Gradient = <span class="frac"><span>0.480</span><span>0.040 ' + U('mol dm-3') + '</span></span> = 12.0 ' + U('dm3 mol-1') + ' &nbsp; (M1)') +
        M('<i>C</i>(diluted) = <span class="frac"><span>0.300</span><span>12.0 ' + U('dm3 mol-1') + '</span></span> = 0.0250 ' + U('mol dm-3') + ' &nbsp; (M2)') +
        P('Undo the dilution. The original solution is more concentrated by the factor <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>.') +
        M('<span class="frac"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class="frac"><span>100.0 ' + U('cm3') + '</span><span>5.00 ' + U('cm3') + '</span></span> = 20.0') +
        M('<i>C</i>(original) = 0.0250 ' + U('mol dm-3') + ' × 20.0 = <strong>0.50 ' + U('mol dm-3') + '</strong> &nbsp; (M3)') +
        '<p>The absorbance 0.300 lies between the standards (0.240 and 0.360), so the reading is inside the range of the calibration line. That is why the dark solution was diluted first. Named slips: 0.025 is the diluted solution. 0.00125 means you applied the dilution factor the wrong way round.</p>'
    },

    /* ====================================================================
       Structure 1.4.6 — Avogadro's law and volumes of gases
       ==================================================================== */
    {
      id: 's1-4-q046', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.6',
      stem: '<p>Which is a correct statement of Avogadro\'s law?</p>',
      options: [
        'Equal masses of all gases, at the same temperature and pressure, occupy equal volumes.',
        'Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules.',
        'Equal volumes of all gases, at the same temperature and pressure, have equal masses.',
        'Equal volumes of all gases contain equal numbers of molecules at any temperature and pressure.'
      ],
      answer: 1,
      misconception: {
        0: 'Equal masses of different gases contain different numbers of molecules, because their molar masses differ. The law links volume to number of molecules, not to mass.',
        2: 'Equal volumes hold equal numbers of molecules, but the molecules of different gases have different masses. So the masses are not equal.',
        3: 'The condition is missing. The two gases must be measured at the <em>same</em> temperature and pressure as each other.'
      },
      hints: [
        'The law connects two things: the volume of a gas and the number of molecules in it.',
        'A gas expands when heated or when the pressure is lowered. What conditions must be the same for a fair comparison?'
      ],
      solution: '<p>Avogadro\'s law: equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules. This means that for gases at the same temperature and pressure, the ratio of volumes equals the ratio of amounts in moles.</p>'
    },
    {
      id: 's1-4-q047', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.6',
      stem: '<p>Nitrogen reacts with hydrogen to form ammonia.</p><p>' + C('N2(g) + 3H2(g) -> 2NH3(g)') + '</p><p>What volume of hydrogen, in ' + U('cm3') + ', reacts exactly with 30 ' + U('cm3') + ' of nitrogen? All volumes are measured at the same temperature and pressure.</p>',
      answer: 90, tolerance: { abs: 0.5 }, unit: 'cm3', answerDisplay: '90',
      hints: [
        'For gases at the same temperature and pressure, the ratio of volumes is the same as the ratio of moles in the equation.',
        'The equation shows 1 volume of ' + C('N2') + ' reacting with 3 volumes of ' + C('H2') + '.'
      ],
      solution: P('The mole ratio ' + C('N2') + ' : ' + C('H2') + ' is 1 : 3. At the same temperature and pressure the volume ratio is also 1 : 3.') +
        M('<i>V</i>(' + C('H2') + ') = 3 × 30 ' + U('cm3') + ' = <strong>90 ' + U('cm3') + '</strong>') +
        '<p>No molar masses or conversions to moles are needed. Avogadro\'s law lets you use the coefficients directly on the volumes.</p>'
    },
    {
      id: 's1-4-q048', topic: 's1-4', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.6',
      stem: '<p>20 ' + U('cm3') + ' of propane is burned completely in 150 ' + U('cm3') + ' of oxygen, which is an excess.</p><p>' + C('C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)') + '</p><p>What is the total volume of gas remaining, in ' + U('cm3') + ', when the mixture has returned to the original temperature and pressure?</p>',
      options: ['60', '110', '140', '190'],
      answer: 1,
      misconception: {
        0: 'This is the ' + C('CO2') + ' only. Some oxygen is left over: 150 ' + U('cm3') + ' was supplied but only 100 ' + U('cm3') + ' reacted.',
        2: 'You counted the water as a gas (60 + 80) and left out the excess oxygen. The state symbol (l) shows that the water is liquid, so its volume is negligible.',
        3: 'You included the excess oxygen, but you also counted 80 ' + U('cm3') + ' of water vapour. The state symbol (l) shows that the water is liquid at the final conditions.'
      },
      hints: [
        'Use the coefficients as volume ratios, for the gases only. Check every state symbol.',
        'Work out the volume of ' + C('O2') + ' that reacts and the volume of ' + C('CO2') + ' formed from 20 ' + U('cm3') + ' of propane.',
        'What is in the container at the end? The gas that was made, plus any gas that was not used up.'
      ],
      solution: M('<i>V</i>(' + C('O2') + ') reacting = 5 × 20 ' + U('cm3') + ' = 100 ' + U('cm3')) +
        M('<i>V</i>(' + C('O2') + ') left over = 150 ' + U('cm3') + ' − 100 ' + U('cm3') + ' = 50 ' + U('cm3')) +
        M('<i>V</i>(' + C('CO2') + ') formed = 3 × 20 ' + U('cm3') + ' = 60 ' + U('cm3')) +
        P('The water is a liquid, so its volume is negligible.') +
        M('Total gas = 50 ' + U('cm3') + ' + 60 ' + U('cm3') + ' = <strong>110 ' + U('cm3') + '</strong>')
    },
    {
      id: 's1-4-q049', topic: 's1-4', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.6',
      stem: '<p>Butane burns completely in oxygen.</p><p>' + C('2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)') + '</p><p>Calculate the volume of oxygen, in ' + U('cm3') + ', needed to burn 20.0 ' + U('cm3') + ' of butane completely. Both volumes are measured at the same temperature and pressure. Give your answer to 3 significant figures.</p>',
      answer: 130, tolerance: '1%', sigfigs: 3, unit: 'cm3', answerDisplay: '130',
      hints: [
        'At the same temperature and pressure, volume ratio = mole ratio.',
        'The ratio is 2 volumes of butane to 13 volumes of oxygen. Watch the 2 in front of the butane: the ratio is not 1 : 13.'
      ],
      solution: P('The mole ratio ' + C('C4H10') + ' : ' + C('O2') + ' is 2 : 13. At the same temperature and pressure the volume ratio is also 2 : 13.') +
        M('<i>V</i>(' + C('O2') + ') = 20.0 ' + U('cm3') + ' × <span class="frac"><span>13</span><span>2</span></span> = <strong>130 ' + U('cm3') + '</strong>') +
        '<p>Named slip: 260 ' + U('cm3') + ' means you multiplied by 13 and ignored the coefficient 2 on butane.</p>'
    },
    {
      id: 's1-4-q050', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.6',
      stem: '<p>10 ' + U('cm3') + ' of a gaseous hydrocarbon, ' + C('C') + '<sub><i>x</i></sub>' + C('H') + '<sub><i>y</i></sub>, burns completely in excess oxygen. It forms 30 ' + U('cm3') + ' of carbon dioxide and 40 ' + U('cm3') + ' of water vapour. All volumes are measured at the same temperature (above 100 °C) and pressure.</p><p>What is the formula of the hydrocarbon?</p>',
      options: [C('C3H4'), C('C3H8'), C('C4H6'), C('C30H80')],
      answer: 1,
      misconception: {
        0: 'You have the carbon right, but you gave each water molecule one hydrogen atom. Each ' + C('H2O') + ' contains 2 H atoms, so 4 volumes of water means 8 H.',
        2: 'You swapped the two products. The 30 ' + U('cm3') + ' of ' + C('CO2') + ' gives the carbon and the 40 ' + U('cm3') + ' of ' + C('H2O') + ' gives the hydrogen.',
        3: 'You used the volumes as numbers of atoms. Divide by the 10 ' + U('cm3') + ' of hydrocarbon first, to find how many molecules of each product form from <em>one</em> molecule.'
      },
      hints: [
        'Avogadro\'s law: the volume ratio is the ratio of molecules. Simplify 10 : 30 : 40.',
        'One molecule of hydrocarbon gives 3 molecules of ' + C('CO2') + ' and 4 molecules of ' + C('H2O') + '.',
        'All the C atoms end up in ' + C('CO2') + ' and all the H atoms end up in ' + C('H2O') + '. Count the atoms.'
      ],
      solution: P('Volume ratio, hydrocarbon : ' + C('CO2') + ' : ' + C('H2O') + ':') + M('10 : 30 : 40 = 1 : 3 : 4') +
        P('So 1 molecule of hydrocarbon gives 3 molecules of ' + C('CO2') + ' and 4 molecules of ' + C('H2O') + '.') +
        M('C atoms: <i>x</i> = 3 × 1 = 3') + M('H atoms: <i>y</i> = 4 × 2 = 8') +
        '<p>The hydrocarbon is <strong>' + C('C3H8') + '</strong>. Here the water counts as a gas because the temperature is above 100 °C.</p>'
    },
    {
      id: 's1-4-q051', topic: 's1-4', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
      syllabus: 'Structure 1.4.6',
      stem: '<p>Two identical flasks are at the same temperature and pressure. Flask A contains ammonia, ' + C('NH3') + '. Flask B contains oxygen, ' + C('O2') + '.</p><p>Which statements are correct? Select <strong>all</strong> that apply.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, N = 14.01, O = 16.00.</p>',
      options: [
        'The two flasks contain the same number of molecules.',
        'Flask A contains twice as many atoms as flask B.',
        'The two flasks contain the same mass of gas.',
        'The gas in flask B has the greater mass.',
        'Flask B contains fewer molecules because ' + C('O2') + ' molecules are heavier.'
      ],
      answer: [0, 1, 3],
      misconception: {
        2: 'Equal numbers of molecules do not mean equal masses. The molar masses are different: 17.04 ' + U('g mol-1') + ' for ' + C('NH3') + ' and 32.00 ' + U('g mol-1') + ' for ' + C('O2') + '.',
        4: 'Avogadro\'s law does not depend on the mass or size of the molecules. Equal volumes at the same temperature and pressure contain equal numbers of molecules.'
      },
      hints: [
        'Start from Avogadro\'s law. What does it say about the number of molecules in each flask?',
        'Then compare one molecule of each gas: how many atoms does it have, and what is its molar mass?'
      ],
      solution: '<p>Same volume, temperature and pressure means the same number of molecules, and so the same amount in moles, <i>n</i>.</p>' +
        P('Atoms: ' + C('NH3') + ' has 4 atoms per molecule and ' + C('O2') + ' has 2. So flask A contains twice as many atoms.') +
        P('Mass: <i>m</i> = <i>n</i> × <i>M</i>, and <i>n</i> is the same for both.') +
        M('<i>M</i>(' + C('NH3') + ') = 17.04 ' + U('g mol-1')) + M('<i>M</i>(' + C('O2') + ') = 32.00 ' + U('g mol-1')) +
        P('Oxygen has the larger molar mass, so flask B has the greater mass.')
    },

    /* ====================================================================
       Added by the audit: coverage of the 1.4.5 guidance (g dm-3) and of
       the calibration-curve linking question at foundation level
       ==================================================================== */
    {
      id: 's1-4-q052', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>A student wants to find the concentration of a coloured solution with a colorimeter and a calibration curve.</p><p>Which describes how the calibration curve is made and used?</p>',
      options: [
        'Measure the absorbance of the unknown solution several times and take the mean.',
        'Measure the absorbance of several solutions of known concentration, plot absorbance against concentration, then read the concentration of the unknown from the line.',
        'Measure the absorbance of one solution of known concentration and assume the unknown has the same concentration.',
        'Plot the mass of solute against the volume of solution and find the gradient.'
      ],
      answer: 1,
      misconception: {
        0: 'Repeating the reading makes it more reliable, but an absorbance is not a concentration. You need solutions of known concentration to link the two.',
        2: 'One known solution gives one point, not a line. Several standard solutions are needed, and the unknown is read from the line of best fit.',
        3: 'That graph would give a concentration in ' + U('g dm-3') + ' for a solution you made yourself. It does not use the colorimeter and says nothing about the unknown.'
      },
      hints: [
        'A calibration curve links an instrument reading to a concentration. Which solutions must you measure to draw it?',
        'Standard solutions have known concentrations. The unknown is measured last and read from the graph.'
      ],
      solution: P('Make several standard solutions of known concentration. Measure the absorbance of each. Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. Then measure the absorbance of the unknown and read its concentration from the line. The unknown should lie inside the range of the standards.')
    },
    {
      id: 's1-4-q053', topic: 's1-4', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: '<p>3.60 ' + U('g') + ' of glucose is dissolved in distilled water and the solution is made up to 200.0 ' + U('cm3') + '.</p><p>Calculate the concentration of the solution in ' + U('g dm-3') + '. Give your answer to 3 significant figures.</p>',
      answer: 3.60 / 0.2000, tolerance: '1%', sigfigs: 3, unit: 'g dm-3',
      hints: [
        'A concentration in ' + U('g dm-3') + ' is the mass of solute divided by the volume of solution. You do not need the molar mass.',
        'Convert the volume first: 200.0 ' + U('cm3') + ' ÷ 1000 = 0.2000 ' + U('dm3') + '.'
      ],
      solution: M('<i>V</i> = 200.0 ' + U('cm3') + ' ÷ 1000 = 0.2000 ' + U('dm3')) +
        M('concentration = <span class="frac"><span>3.60 ' + U('g') + '</span><span>0.2000 ' + U('dm3') + '</span></span> = <strong>18.0 ' + U('g dm-3') + '</strong>') +
        '<p>Named slips: 0.0180 means you left the volume in ' + U('cm3') + '. 0.720 means you multiplied by the volume instead of dividing.</p>'
    }
  ]);
})();
