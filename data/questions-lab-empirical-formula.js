/* ==========================================================================
   Question bank: Lab 5 — Finding an empirical formula by experiment
   14 original Paper 1B style questions. All SL (Structure 1.4 has no AHL content).
   Schema and rules: docs/AUTHORING.md (sections 4 and 11).
   Values: Ar to 2 d.p. from the data booklet (S1.chem). Every number below was
   recomputed by the writer's checking script (scratchpad agentD/check-ef.js).
   ========================================================================== */
(function () {
  'use strict';
  function M(line) { return '<div class="worked__math">' + line + '</div>'; }
  function P(text) { return '<p>' + text + '</p>'; }
  function C(f) { return '<span class="chem">' + f + '</span>'; }
  function U(u) { return '<span class="unit">' + u + '</span>'; }
  function T(caption, head, rows) {
    return '<div class="table-scroll"><table class="data"><caption>' + caption + '</caption><thead><tr>' +
      head.map(function (h, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
  }
  var AR = '<i>A</i><sub>r</sub>';

  S1.questions.register('lab-empirical-formula', [
    {
      id: 'lab-empirical-formula-q001', topic: 'lab-empirical-formula', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('A student burns magnesium ribbon in a crucible to find the empirical formula of magnesium oxide. The method says to lift the lid slightly, every minute or so, and then put it straight back.') + P('What is the reason for this?'),
      options: [
        'To let water vapour escape from the crucible',
        'To let oxygen in while keeping most of the magnesium oxide in the crucible',
        'To check whether the magnesium has melted',
        'To cool the crucible so that it does not crack'
      ],
      answer: 1,
      misconception: {
        0: 'No water is formed when magnesium burns. The only reactant from the air that matters here is oxygen.',
        2: 'Whether the metal melts does not change the result. Think about what the reaction needs from the air, and what could be lost.',
        3: 'The crucible is designed to take strong heating. Lifting the lid is about the gases and the solid product.'
      },
      hints: ['Write the equation for the reaction. Which reactant comes from the air?', 'What would you see escaping if the lid were left off?'],
      solution: P('The reaction <span class="chem">2Mg + O2 -> 2MgO</span> needs oxygen from the air, so the lid must be lifted to let air in. But the product forms as a fine white smoke, so the lid must go straight back on to stop it escaping. Losing product would make the mass of oxygen too low.')
    },
    {
      id: 'lab-empirical-formula-q002', topic: 'lab-empirical-formula', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.3',
      stem: P('A student heats magnesium in a crucible until the mass is constant. The balance reads to 0.01 g.') +
        T('Raw data', ['Reading', 'Mass / g'], [['Crucible and lid', '23.18'], ['Crucible, lid and magnesium', '23.42'], ['Crucible, lid and product (constant)', '23.58']]) +
        P('Calculate the amount, in mol, of oxygen atoms that combined with the magnesium. ' + AR + '(O) = 16.00'),
      answer: 0.01, tolerance: '1%', sigfigs: [2, 3], unit: 'mol',
      hints: ['The gain in mass from the magnesium reading to the final reading is the mass of oxygen.', '<i>n</i> = <i>m</i> ÷ <i>M</i> with the molar mass of oxygen atoms, 16.00 ' + U('g mol-1') + '.'],
      solution: M('mass of O = 23.58 ' + U('g') + ' − 23.42 ' + U('g') + ' = 0.16 ' + U('g')) +
        M('<i>n</i>(O) = 0.16 ' + U('g') + ' ÷ 16.00 ' + U('g mol-1') + ' = 0.010 ' + U('mol')) +
        P('Use the mass of oxygen <em>atoms</em> (16.00), because the question asks for atoms. 0.16 g has 2 significant figures, so the answer is 0.010 mol.')
    },
    {
      id: 'lab-empirical-formula-q003', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 1.4.4',
      stem: P('A student uses a balance that reads to 0.001 g.') +
        T('Raw data', ['Reading', 'Mass / g'], [['Crucible and lid', '25.317'], ['Crucible, lid and magnesium', '25.803'], ['After heating to constant mass', '26.111']]) +
        P('Determine the empirical formula of the oxide. Show your working. ' + AR + ': Mg = 24.31, O = 16.00'),
      answer: P('mass of Mg = 25.803 − 25.317 = 0.486 g; mass of O = 26.111 − 25.803 = 0.308 g.') +
        P('<i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol; <i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol.') +
        P('Mg : O = 1.04 : 1 ≈ 1 : 1, so the empirical formula is ' + C('MgO') + '.'),
      markscheme: [
        'M1: mass of Mg = 0.486 g AND mass of O = 0.308 g.',
        'M2: n(Mg) = 0.0200 mol AND n(O) = 0.0193 mol (ECF from M1).',
        'M3: ratio close to 1 : 1, so MgO. (Award [3] for a correct final answer with working.)'
      ],
      hints: ['First find two masses: magnesium (before heating) and oxygen (the gain on heating).', 'Convert each mass to moles, then divide both by the smaller amount.'],
      solution: M('mass of Mg = 25.803 ' + U('g') + ' − 25.317 ' + U('g') + ' = 0.486 ' + U('g')) +
        M('mass of O = 26.111 ' + U('g') + ' − 25.803 ' + U('g') + ' = 0.308 ' + U('g')) +
        M('<i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 ' + U('mol')) +
        M('<i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 ' + U('mol')) +
        M('Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1') +
        P('1.04 is within experimental error of 1, so the empirical formula is ' + C('MgO') + '.')
    },
    {
      id: 'lab-empirical-formula-q004', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('During the magnesium experiment, a small part of the magnesium reacts with nitrogen in the air to form magnesium nitride, ' + C('Mg3N2') + ', instead of magnesium oxide.') +
        P('What is the effect on the experimental ratio <i>n</i>(O) : <i>n</i>(Mg), and why?'),
      options: [
        'Higher, because the nitrogen adds extra mass to the product',
        'Lower, because forming the nitride adds less mass for each mole of magnesium than forming the oxide',
        'No change, because the student only calculates the amount of oxygen',
        'Lower, because the nitrogen escapes as a gas'
      ],
      answer: 1,
      misconception: {
        0: 'The nitrogen does add mass, but compare it with the mass the oxide would have added for the same magnesium. 3 mol of Mg gain 28.02 g as Mg₃N₂ but 48.00 g as 3 mol of MgO.',
        2: 'The student does not know that any nitride has formed. All of the mass gain is counted as oxygen, so the nitride does change the calculated ratio.',
        3: 'The nitrogen stays in the solid as nitride ions. It is the smaller mass gain that matters.'
      },
      hints: ['The student assumes every gram gained is oxygen.', 'Compare the mass gained by 3 mol of Mg when it forms Mg₃N₂ and when it forms 3 MgO.'],
      solution: P('3 mol of Mg gain 2 × 14.01 = 28.02 g as ' + C('Mg3N2') + ', but 3 × 16.00 = 48.00 g as 3 ' + C('MgO') + '. So the total mass gain is smaller than it should be. The student counts all of the gain as oxygen, so the calculated amount of oxygen is too low and the ratio O : Mg is <strong>too low</strong>.') +
        P('Improvement: add a few drops of distilled water to the cooled product and heat again. The nitride is converted to the oxide.')
    },
    {
      id: 'lab-empirical-formula-q005', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.4.4',
      stem: P('A student heats hydrated magnesium sulfate, ' + C('MgSO4.xH2O') + ', to constant mass.') +
        T('Raw data', ['Reading', 'Mass / g'], [['Crucible', '15.62'], ['Crucible and hydrate', '19.32'], ['Crucible and anhydrous salt (constant)', '17.43']]) +
        P('Calculate the value of <i>x</i>, to the nearest whole number. <i>M</i>(' + C('MgSO4') + ') = 120.38 ' + U('g mol-1') + ', <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1')),
      answer: 7, tolerance: { abs: 0.4 },
      hints: ['Mass of anhydrous salt = final − crucible. Mass of water = (crucible + hydrate) − final.', 'x = n(H₂O) ÷ n(MgSO₄).'],
      solution: M('mass of ' + C('MgSO4') + ' = 17.43 − 15.62 = 1.81 ' + U('g')) +
        M('mass of water = 19.32 − 17.43 = 1.89 ' + U('g')) +
        M('<i>n</i>(' + C('MgSO4') + ') = 1.81 ÷ 120.38 = 0.01504 ' + U('mol')) +
        M('<i>n</i>(' + C('H2O') + ') = 1.89 ÷ 18.02 = 0.1049 ' + U('mol')) +
        M('<i>x</i> = 0.1049 ÷ 0.01504 = 6.98') +
        P('To the nearest whole number, <i>x</i> = <strong>7</strong>: ' + C('MgSO4.7H2O') + '.')
    },
    {
      id: 'lab-empirical-formula-q006', topic: 'lab-empirical-formula', level: 'sl', tier: 'foundation', type: 'short', marks: 2,
      syllabus: 'Structure 1.4.4',
      stem: P('A student heats hydrated copper(II) sulfate and weighs it after each heating, on a balance that reads to 0.01 g. The last two readings are 20.14 g and then 20.12 g.') +
        P('State and explain whether the student can stop heating.'),
      answer: P('No. The two readings differ by 0.02 g, which is more than the precision of the balance, so the mass is still falling and some water is still present. The student should heat, cool and weigh again until two readings in a row agree (within 0.01 g).'),
      markscheme: [
        'No: the mass is still decreasing / the readings are not the same within 0.01 g.',
        'Some water of crystallization is still present, so heat, cool and reweigh until two consecutive masses agree.'
      ],
      hints: ['How big is the difference between the readings, compared with what the balance can show?', 'What does a falling mass tell you about the water?'],
      solution: P('Constant mass means two consecutive readings agree within the balance’s precision. 20.14 g and 20.12 g differ by 0.02 g, so the mass is still going down: not all of the water has gone yet. Stopping now would make the mass of water too small and <i>x</i> too low.')
    },
    {
      id: 'lab-empirical-formula-q007', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('A student heats hydrated copper(II) sulfate very strongly. The white powder starts to turn black, because some ' + C('CuSO4') + ' decomposes into ' + C('CuO') + ' and gaseous ' + C('SO3') + '.') +
        P('What is the effect on the calculated value of <i>x</i>?'),
      options: [
        'Too high, because the extra loss of mass is counted as water',
        'Too low, because copper(II) oxide is heavier than copper(II) sulfate',
        'No effect, because all of the water has still been removed',
        'Too low, because less water is lost'
      ],
      answer: 0,
      misconception: {
        1: 'One mole of CuO (79.55 g) is lighter than one mole of CuSO₄ (159.62 g). Decomposition makes the solid lighter, not heavier.',
        2: 'The water has gone, but extra mass has gone too. The student cannot tell the two losses apart.',
        3: 'The water is all lost. The question is what happens to the mass of the solid left behind.'
      },
      hints: ['Does decomposition make the solid lighter or heavier?', 'The student calculates the mass of water as (mass before) − (mass after).'],
      solution: P('Losing ' + C('SO3') + ' makes the final mass too low. So the mass of “water” (before − after) is too high, and the mass of anhydrous salt is too low. Both changes make <i>x</i> = <i>n</i>(' + C('H2O') + ') ÷ <i>n</i>(' + C('CuSO4') + ') <strong>too high</strong>. Heat gently and stop when the solid is white all through.')
    },
    {
      id: 'lab-empirical-formula-q008', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('A student lets the hot anhydrous copper(II) sulfate cool on the open bench for 20 minutes before each weighing. What is the most likely effect on the value of <i>x</i>?'),
      options: [
        'Too high, because the solid loses more water as it cools slowly',
        'Too low, because the solid absorbs water from the air, so the final mass is too high',
        'Too low, because the hot crucible makes the balance read high',
        'No effect, because the solid was already weighed hot'
      ],
      answer: 1,
      misconception: {
        0: 'Once the solid is cool it is no longer losing water. Anhydrous copper(II) sulfate does the opposite in moist air.',
        2: 'Weighing a hot crucible does give wrong readings, but this student waited until it was cool. Think about what the solid does in air.',
        3: 'The solid is weighed after it cools, so anything it gains while cooling is in the reading.'
      },
      hints: ['Anhydrous copper(II) sulfate is used as a test for water. What does it do in moist air?', 'If the final mass is too high, is the calculated mass of water too high or too low?'],
      solution: P('Anhydrous copper(II) sulfate takes water back from the air. So the final mass is too high, the calculated mass of water is too low and the anhydrous mass is too high. <i>x</i> comes out <strong>too low</strong>. Cool the crucible in a desiccator and weigh it as soon as it is cool.')
    },
    {
      id: 'lab-empirical-formula-q009', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.4',
      stem: P('In a hydrate experiment, the crucible and hydrate weigh 22.46 g before heating and 21.31 g at constant mass. The balance reads to ±0.01 g.') +
        P('Calculate the percentage uncertainty in the mass of water lost.'),
      answer: 1.739, tolerance: '3%', sigfigs: [2, 3], unit: '%',
      hints: ['The mass of water is a difference of two readings. Add their absolute uncertainties.', 'Percentage uncertainty = absolute uncertainty ÷ value × 100.'],
      solution: M('mass of water = 22.46 − 21.31 = 1.15 ' + U('g')) +
        M('absolute uncertainty = ±0.01 + ±0.01 = ±0.02 ' + U('g')) +
        M('percentage uncertainty = 0.02 ÷ 1.15 × 100 = 1.7 %') +
        P('A common slip is to use ±0.01 g. Every mass found by difference uses two readings.')
    },
    {
      id: 'lab-empirical-formula-q010', topic: 'lab-empirical-formula', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('A student’s experiment gives <i>x</i> = 4.60 for hydrated copper(II) sulfate. The accepted formula is ' + C('CuSO4.5H2O') + '.') + P('Calculate the percentage error.'),
      answer: 8, tolerance: { abs: 0.2 }, unit: '%',
      hints: ['Percentage error = |experimental − accepted| ÷ accepted × 100.'],
      solution: M('percentage error = |4.60 − 5| ÷ 5 × 100 = 8.0 %') +
        P('The difference is always divided by the <em>accepted</em> value, not by the student’s value.')
    },
    {
      id: 'lab-empirical-formula-q011', topic: 'lab-empirical-formula', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 1.4.4',
      stem: P('A 0.580 g sample of a hydrocarbon is burned completely in excess oxygen. The products are 1.760 g of ' + C('CO2') + ' and 0.900 g of ' + C('H2O') + '.') +
        P('Determine the empirical formula of the hydrocarbon. <i>M</i>(' + C('CO2') + ') = 44.01 ' + U('g mol-1') + ', <i>M</i>(' + C('H2O') + ') = 18.02 ' + U('g mol-1') + ', ' + AR + ': C = 12.01, H = 1.01'),
      answer: P('<i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol. <i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol.') +
        P('C : H = 1 : 2.50 = 2 : 5. Empirical formula ' + C('C2H5') + '. (Check: 0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g, the mass of the sample, so there is no oxygen.)'),
      markscheme: [
        'M1: n(C) = n(CO₂) = 0.0400 mol.',
        'M2: n(H) = 2 × n(H₂O) = 0.0999 mol.',
        'M3: C : H = 1 : 2.5 = 2 : 5, so C₂H₅. (Do not accept CH₂ or CH₃: 2.5 must be multiplied up, not rounded.)'
      ],
      hints: ['All the carbon ends up in CO₂ and all the hydrogen in H₂O.', 'Each H₂O molecule holds two H atoms. Your ratio will not be a whole number at first.'],
      solution: M('<i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 ' + U('mol')) +
        M('<i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 ' + U('mol')) +
        M('C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50') +
        P('2.50 is not close to a whole number, so it is a real ratio: multiply by 2 to get 2 : 5. The empirical formula is ' + C('C2H5') + '.') +
        P('Check for oxygen: mass of C + H = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g. This equals the sample mass within the precision of the data, so the compound contains no oxygen, as expected for a hydrocarbon.')
    },
    {
      id: 'lab-empirical-formula-q012', topic: 'lab-empirical-formula', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('A student heats iron in oxygen and calculates the mole ratio Fe : O = 1 : 1.48. Which empirical formula fits the data best?'),
      options: [C('FeO'), C('Fe2O3'), C('Fe3O4'), C('Fe3O2')],
      answer: 1,
      misconception: {
        0: 'Rounding 1.48 to 1 throws away a real difference of almost 50 %. That is far too big to be experimental error.',
        2: 'Fe₃O₄ has Fe : O = 1 : 1.33. Your value 1.48 is much closer to another simple ratio.',
        3: 'In Fe₃O₂ there is less oxygen than iron, so O ÷ Fe would be below 1.'
      },
      hints: ['Is 1.48 close to a whole number? Is it close to a simple fraction?', '1.5 = 3/2. Multiply both sides of the ratio by 2.'],
      solution: P('1.48 is very close to 1.5. Multiply both numbers by 2: Fe : O = 2 : 2.96 ≈ 2 : 3. The empirical formula is ' + C('Fe2O3') + '. Ratios such as 1.5, 1.33 and 1.25 must be multiplied up, not rounded.')
    },
    {
      id: 'lab-empirical-formula-q013', topic: 'lab-empirical-formula', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.4.4',
      stem: P('In the magnesium experiment, a student uses 0.24 g of magnesium and a balance that reads to 0.01 g. The mass of oxygen gained is 0.16 g, with an uncertainty of ±0.02 g (12.5 %).') +
        P('Suggest <strong>two</strong> changes to the method that would reduce the percentage uncertainty in the mass of oxygen. Explain one of them.'),
      answer: P('Use a longer piece of magnesium ribbon (a bigger sample), and use a balance that reads to 0.001 g. With a bigger sample the mass of oxygen is larger, but the absolute uncertainty of the balance stays the same, so it is a smaller percentage.'),
      markscheme: [
        'Two valid changes: a larger mass of magnesium / longer ribbon AND a more precise balance (0.001 g).',
        'Explanation: the same absolute uncertainty is a smaller fraction of a larger mass / a 0.001 g balance has a ten times smaller absolute uncertainty. (Repeating and averaging reduces random error but does not change the uncertainty of one reading; accept it only as a third point.)'
      ],
      hints: ['Percentage uncertainty = absolute uncertainty ÷ value × 100. Which two numbers in that fraction could you change?'],
      solution: P('Percentage uncertainty = absolute uncertainty ÷ measured value × 100. To make it smaller you can make the top smaller (a balance reading to 0.001 g gives ±0.002 g for a difference) or the bottom bigger (more magnesium gives more oxygen). With 0.48 g of Mg and a 0.01 g balance, the uncertainty in about 0.32 g of oxygen falls to about 6 %.')
    },
    {
      id: 'lab-empirical-formula-q014', topic: 'lab-empirical-formula', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.4',
      stem: P('A student finds the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14 for magnesium oxide. The expected value is 1.00. Which conclusion is best supported?'),
      options: [
        'There must be a systematic error, because the result is not 1.00',
        'The result agrees with MgO within its uncertainty, so random error could explain the difference',
        'The formula of the oxide is not MgO, because the percentage error is 7 %',
        'The uncertainty is too large to say anything, so the data should be discarded'
      ],
      answer: 1,
      misconception: {
        0: 'A result that differs from 1.00 is expected for every real measurement. Compare the size of the difference with the size of the uncertainty.',
        2: 'A 7 % difference is smaller than the 15 % uncertainty, so the data do not rule out MgO.',
        3: 'The range 0.79 to 1.07 still rules out other simple ratios such as 1.5 and 0.5. Large uncertainty is a reason to improve the method, not to throw the data away.'
      },
      hints: ['Work out the range of values the uncertainty allows: 0.93 − 0.14 to 0.93 + 0.14.', 'Is 1.00 inside that range?'],
      solution: P('The uncertainty gives a range of 0.79 to 1.07. The expected value 1.00 lies inside it. So the result is consistent with ' + C('MgO') + ', and the 7 % difference can be explained by random error alone. To test for a systematic error, the uncertainty must first be made smaller: more magnesium and a 0.001 g balance.')
    }
  ]);
})();
