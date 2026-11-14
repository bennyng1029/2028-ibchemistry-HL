/* ==========================================================================
   Question bank: Lab 1 — Separating and purifying mixtures (lab-separation)
   13 original Paper 1B style questions. All SL (Structure 1.1.1 and Tool 1/Tool 3).
   Schema and rules: docs/AUTHORING.md, sections 4 and 11.
   Every number is recomputed in the writer's check script (scratchpad agentA/check.js).
   Load order on a page: chem.js, core.js, quiz.js, then this file.
   ========================================================================== */
(function () {
  'use strict';
  function M(line) { return '<div class="worked__math">' + line + '</div>'; }
  function C(f) { return '<span class="chem">' + f + '</span>'; }
  function U(u) { return '<span class="unit">' + u + '</span>'; }
  function TABLE(caption, head, rows) {
    return '<div class="table-scroll"><table class="data"><caption>' + caption + '</caption><thead><tr>' +
      head.map(function (h, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
  }

  S1.questions.register('lab-separation', [
    {
      id: 'lab-separation-q001', topic: 'lab-separation', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student wants to collect pure water from a sample of sea water. Which technique should be used?</p>',
      options: ['Filtration', 'Evaporation', 'Simple distillation', 'Recrystallization'],
      answer: 2,
      misconception: {
        0: 'The salt is dissolved. Dissolved particles pass straight through filter paper, so the filtrate is still sea water.',
        1: 'Evaporation keeps the salt, but the water escapes into the air as vapour. You want to keep the water.',
        3: 'Recrystallization purifies a solid product. Here you want the liquid.'
      },
      hints: ['Which part do you want to keep: the solid or the liquid?', 'You need a technique that turns the water into vapour and then turns it back into liquid.'],
      solution: '<p>Distillation boils the water, condenses the vapour and collects it as the distillate. The salt is not volatile, so it stays in the flask. Evaporation uses the same property (volatility) but loses the water.</p>'
    },
    {
      id: 'lab-separation-q002', topic: 'lab-separation', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>Ethanol and water mix completely. Which physical property allows them to be separated by distillation?</p>',
      options: ['Their densities are different.', 'Their boiling points are different.', 'Only ethanol is soluble in water.', 'Their particle sizes are different.'],
      answer: 1,
      misconception: {
        0: 'Density matters for liquids that do not mix, which form layers. These two liquids mix completely.',
        2: 'They mix in all proportions, so solubility cannot be the difference here.',
        3: 'Particle size is what filtration uses, for an undissolved solid. Molecules in a solution all pass through filter paper.'
      },
      hints: ['Distillation involves boiling and condensing.'],
      solution: '<p>Ethanol boils at 78 °C and water at 100 °C. Distillation uses this difference in volatility: the vapour first collected is rich in ethanol.</p>'
    },
    {
      id: 'lab-separation-q003', topic: 'lab-separation', level: 'sl', tier: 'foundation', type: 'order', marks: 2,
      syllabus: 'Structure 1.1.1',
      stem: '<p>Put these steps for recrystallizing an impure solid into the correct order.</p>',
      options: [
        'Dissolve the solid in the minimum volume of hot solvent.',
        'Filter the hot solution to remove insoluble impurities.',
        'Let the filtrate cool slowly, then cool it in an ice bath.',
        'Filter to collect the crystals.',
        'Rinse the crystals with a little ice-cold solvent.',
        'Dry the crystals to constant mass.'
      ],
      hints: ['The insoluble impurities must be removed while the product is still dissolved.', 'The crystals must be collected before they can be rinsed or dried.'],
      solution: '<p>Dissolve hot, filter hot, cool to crystallize, filter to collect, rinse cold, dry. The hot filtration has to come before cooling, while the product is in solution and only the insoluble impurity is solid.</p>'
    },
    {
      id: 'lab-separation-q004', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.1',
      stem: '<p>In a recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent.</p><p>Explain why using a large excess of hot solvent reduces the mass of crystals obtained.</p>',
      answer: '<p>Some of the product always remains dissolved in the cold solvent. The more solvent there is, the greater the mass of product that stays in solution after cooling, so fewer crystals form.</p>',
      markscheme: [
        'The product is (still slightly) soluble in the cold solvent / some product stays dissolved after cooling.',
        'A larger volume of solvent keeps a larger mass of product dissolved, so less crystallizes / lower yield. (Accept: the solution may not become saturated on cooling.)'
      ],
      hints: ['Does the product become completely insoluble when the solvent is cold?', 'The mass that stays dissolved depends on how much solvent there is.'],
      solution: '<p>Solubility is a mass per volume of solvent. Doubling the solvent volume doubles the mass of product that can stay dissolved at the final temperature, and that mass is lost with the filtrate.</p>'
    },
    {
      id: 'lab-separation-q005', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.1',
      stem: '<p>After recrystallization, a student collects the crystals by filtration and rinses them.</p><p>Explain why the crystals are rinsed, and why the rinsing solvent must be ice-cold.</p>',
      answer: '<p>The rinse washes off the solution left on the crystals, which contains the dissolved impurities. Ice-cold solvent is used because the product is much less soluble at low temperature, so very little of the crystals dissolves.</p>',
      markscheme: [
        'Rinsing removes the solution (filtrate / mother liquor) on the surface of the crystals, which contains the soluble impurities.',
        'Cold solvent dissolves (very) little of the product / warm solvent would dissolve some of the crystals and lower the yield.'
      ],
      hints: ['What is still wet on the surface of freshly filtered crystals?', 'How does the solubility of the product change with temperature?'],
      solution: '<p>Two marks: one for what the rinse removes (impure solution on the surface), one for why it is cold (less product dissolves, so the yield is kept).</p>'
    },
    {
      id: 'lab-separation-q006', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student recrystallized a sample of impure benzoic acid and recorded these masses.</p>' +
        TABLE('Mass readings', ['Reading', 'Mass / g'], [['impure benzoic acid', '2.56'], ['empty watch glass', '23.47'], ['watch glass + dry crystals', '25.41']]) +
        '<p>Calculate the percentage recovery of benzoic acid.</p>',
      answer: 75.78125, tolerance: '0.5%', sigfigs: 3, unit: '%',
      hints: ['First find the mass of crystals by difference.', 'Percentage recovery = (mass of crystals / mass of impure sample) × 100.'],
      solution: M('<i>m</i>(crystals) = 25.41 ' + U('g') + ' − 23.47 ' + U('g') + ' = 1.94 ' + U('g')) +
        M('recovery = (1.94 ' + U('g') + ' / 2.56 ' + U('g') + ') × 100 = 75.78… %') +
        M('recovery = <strong>75.8 %</strong>') +
        '<p>M1 for the mass of crystals, M2 for the percentage.</p>'
    },
    {
      id: 'lab-separation-q007', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>Using the data in the table, calculate the percentage uncertainty in the mass of dry crystals. The balance has an uncertainty of ±0.01 ' + U('g') + ' for each reading.</p>' +
        TABLE('Mass readings', ['Reading', 'Mass / g'], [['empty watch glass', '23.47'], ['watch glass + dry crystals', '25.41']]),
      answer: 1.0309, tolerance: '2%', sigfigs: [2, 3], unit: '%',
      hints: ['The mass of crystals comes from two readings. Add their absolute uncertainties.', 'Divide ±0.02 g by the mass of crystals, 1.94 g, and multiply by 100.'],
      solution: M('Δ<i>m</i> = ±(0.01 + 0.01) ' + U('g') + ' = ±0.02 ' + U('g')) +
        M('<i>m</i>(crystals) = 25.41 − 23.47 = 1.94 ' + U('g')) +
        M('percentage uncertainty = (0.02 / 1.94) × 100 = <strong>1.0 %</strong>') +
        '<p>A common slip is to use ±0.01 g only. A mass found by difference always involves two readings.</p>'
    },
    {
      id: 'lab-separation-q008', topic: 'lab-separation', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>The literature melting point of benzoic acid is 122 °C. Four samples were tested. Which sample is the purest?</p>' +
        TABLE('Melting ranges', ['Sample', 'Melting range / °C'], [['A', '114–119'], ['B', '121.5–122.5'], ['C', '118–122'], ['D', '123–127']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      misconception: {
        0: 'Sample A melts well below 122 °C and over 5 °C. Both are signs of impurity.',
        2: 'Sample C finishes melting at 122 °C, but it starts 4 °C lower. A wide range shows impurity.',
        3: 'Impurities lower a melting point; they do not raise it. A range above the literature value and 4 °C wide suggests a different substance, or heating too fast.'
      },
      hints: ['A pure substance melts at its literature value over a narrow range.'],
      solution: '<p>Sample B melts over 1 °C, around the literature value. Impurities lower the melting point and widen the range, as in A and C.</p>'
    },
    {
      id: 'lab-separation-q009', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student weighs the crystals straight after filtering them. The percentage recovery is 104 %.</p><p>Suggest the reason for this result and an improvement to the method.</p>',
      answer: '<p>The crystals were still wet, so the mass included water. Dry the crystals in a low-temperature oven or desiccator, weighing them repeatedly until the mass is constant.</p>',
      markscheme: [
        'The crystals still contain water / solvent, so the measured mass is too high.',
        'Dry (in an oven / desiccator) and reweigh until the mass is constant / heat to constant mass.'
      ],
      hints: ['Recovery above 100 % means the measured mass contains something that is not benzoic acid.', 'What liquid was just poured through the crystals?'],
      solution: '<p>Some product is always lost, so a recovery above 100 % shows extra mass. Straight after filtration the crystals are wet. Drying to constant mass makes sure all the water has gone. (Accept also: insoluble impurity such as sand not removed, with "filter the hot solution" as the improvement.)</p>'
    },
    {
      id: 'lab-separation-q010', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student heats a capillary tube of pure benzoic acid at 15 °C per minute in a melting point apparatus. What is the most likely effect on the recorded melting range?</p>',
      options: [
        'Lower than 122 °C and narrower',
        'Lower than 122 °C and wider',
        'Higher than 122 °C and wider',
        'Exactly 122 °C, because the sample is pure'
      ],
      answer: 2,
      misconception: {
        0: 'A lower melting point is caused by impurities, not by the heating rate. Here the thermometer gets ahead of the sample.',
        1: 'A lower and wider range is the sign of an impure sample. This sample is pure; the problem is the heating rate.',
        3: 'The true melting point does not change, but the recorded value does: the reading depends on how well the sample keeps up with the thermometer.'
      },
      hints: ['Heat takes time to pass from the block into the sample.', 'When the sample finally melts, has the thermometer already gone past that temperature?'],
      solution: '<p>With fast heating the thermometer is hotter than the sample, so each change is recorded at too high a reading. The temperature also rises a long way between the first drop and the last crystal, so the range looks wider. Heat at 1–2 °C per minute near the melting point.</p>'
    },
    {
      id: 'lab-separation-q011', topic: 'lab-separation', level: 'sl', tier: 'exam', type: 'short', marks: 4,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student has a dry mixture of powdered chalk (calcium carbonate, insoluble in water) and potassium nitrate (soluble in water).</p><p>Outline a method to obtain a dry sample of each solid.</p>',
      answer: '<ol><li>Add distilled water and stir until the potassium nitrate has dissolved.</li><li>Filter: the chalk is the residue and the potassium nitrate solution is the filtrate.</li><li>Rinse the chalk with a little distilled water and dry it in an oven.</li><li>Heat the filtrate to evaporate some of the water, leave it to crystallize, then filter and dry the crystals.</li></ol>',
      markscheme: [
        'Add (distilled) water and stir / dissolve the potassium nitrate.',
        'Filter (to separate the chalk as the residue).',
        'Rinse and dry the residue (chalk).',
        'Evaporate (heat) the filtrate and crystallize / dry the potassium nitrate. (Steps must be in a workable order.)'
      ],
      hints: ['Which solid dissolves in water? Use that difference first.', 'After filtering, each solid still needs a final step: the residue is wet and the other solid is still dissolved.'],
      solution: '<p>One mark for each workable step in a sensible order: dissolve, filter, rinse and dry the residue, evaporate the filtrate and crystallize. Forgetting the final step for each solid is the most common way to lose marks.</p>'
    },
    {
      id: 'lab-separation-q012', topic: 'lab-separation', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A recrystallization gave a low percentage recovery but a pure product. Which changes to the method would increase the recovery? Select all that apply.</p>',
      options: [
        'Use a smaller volume of hot solvent.',
        'Cool the filtrate in an ice bath before filtering off the crystals.',
        'Rinse the crystals with warm solvent.',
        'Warm the funnel before the hot filtration.',
        'Skip the hot filtration step.'
      ],
      answer: [0, 1, 3],
      misconception: {
        2: 'Warm solvent dissolves more of the crystals, so the recovery falls further.',
        4: 'Skipping hot filtration may add mass, but that mass is insoluble impurity, not product. The product becomes less pure.'
      },
      hints: ['Product is lost where it stays dissolved or crystallizes in the wrong place.'],
      solution: '<p>Less solvent and a lower final temperature both leave less product dissolved. A warm funnel stops crystals forming on the filter paper during hot filtration. Warm rinsing loses product, and skipping hot filtration only adds impurity.</p>'
    },
    {
      id: 'lab-separation-q013', topic: 'lab-separation', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student recrystallizes impure benzoic acid twice: once cooling the hot filtrate slowly, and once plunging it straight into an ice bath. The thermometer has an uncertainty of ±0.5 °C. The literature melting point is 122 °C.</p>' +
        TABLE('Results', ['Cooling', 'Recovery / %', 'Melting range / °C'], [['slow, then ice bath', '78', '121.0–122.0'], ['straight into ice bath', '80', '118.5–121.0']]) +
        '<p>Evaluate which cooling method is better, using the data.</p>',
      answer: '<p>The recoveries are similar (78 % and 80 %). Slow cooling gives a melting range of 1.0 °C that ends at 122 °C, within the ±0.5 °C uncertainty of the literature value, so the product is pure. Fast cooling gives a lower, wider range (2.5 °C, starting 3.5 °C below 122 °C), which is much bigger than the uncertainty, so impurity is present: small crystals formed quickly trap impure solution. Slow cooling is better because purity is the aim and the recovery is almost the same.</p>',
      markscheme: [
        'Recoveries are similar / fast cooling gives only slightly more product (2 % more).',
        'Fast cooling gives a lower and wider melting range, so the product is less pure; the difference from 122 °C is larger than the ±0.5 °C uncertainty.',
        'Slow cooling is better / gives larger crystals that trap less impurity (and the aim is a pure product).'
      ],
      hints: ['Compare both columns. Which difference is large compared with its uncertainty?', 'What does a low, wide melting range tell you?'],
      solution: '<p>"Evaluate" means weigh up both sides. Fast cooling gains a little mass, but the melting range shows impurity is trapped in the small crystals. The 2 % gain may be partly the mass of the impurity itself.</p>'
    }
  ]);
})();
