/* ==========================================================================
   Question bank: Lab 6 — Standard solutions and calibration curves
   13 original Paper 1B style questions. All SL (Structure 1.4 has no AHL content).
   Schema and rules: docs/AUTHORING.md (sections 4 and 11).
   Values: Ar to 2 d.p. from the data booklet (S1.chem). Every number below was
   recomputed by the writer's checking script (scratchpad agentD/check-ss.js).
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
  var CU = C('CuSO4');

  S1.questions.register('lab-standard-solution', [
    {
      id: 'lab-standard-solution-q001', topic: 'lab-standard-solution', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.5',
      stem: P('A student needs 250.0 ' + U('cm3') + ' of a 0.0400 ' + U('mol dm-3') + ' standard solution of sodium carbonate, ' + C('Na2CO3') + '.') +
        P('Calculate the mass of sodium carbonate the student must weigh. <i>M</i>(' + C('Na2CO3') + ') = 105.99 ' + U('g mol-1')),
      answer: 1.0599, tolerance: '1%', sigfigs: [3, 4], unit: 'g',
      hints: ['Convert 250.0 cm³ to dm³ first.', 'n = C × V, then m = n × M.'],
      solution: M('<i>V</i> = 250.0 ' + U('cm3') + ' ÷ 1000 = 0.2500 ' + U('dm3')) +
        M('<i>n</i> = 0.0400 ' + U('mol dm-3') + ' × 0.2500 ' + U('dm3') + ' = 0.0100 ' + U('mol')) +
        M('<i>m</i> = 0.0100 ' + U('mol') + ' × 105.99 ' + U('g mol-1') + ' = 1.06 ' + U('g')) +
        P('M1 for the amount (with the volume in dm³), M2 for the mass.')
    },
    {
      id: 'lab-standard-solution-q002', topic: 'lab-standard-solution', level: 'sl', tier: 'foundation', type: 'order', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('Put these steps for preparing a standard solution in the correct order.'),
      options: [
        'Weigh the solid accurately',
        'Dissolve it in a small volume of distilled water in a beaker',
        'Pour the solution through a funnel into a volumetric flask',
        'Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask',
        'Add distilled water until the bottom of the meniscus is on the mark',
        'Stopper the flask and invert it several times'
      ],
      hints: ['The solid must be fully dissolved before it goes into the flask.', 'Mixing comes last, once the volume is right.'],
      solution: P('Weigh → dissolve in a beaker → transfer to the volumetric flask → add the rinsings → make up to the mark → stopper and invert. The rinsings go in <em>before</em> making up to the mark, because they are part of the final volume.')
    },
    {
      id: 'lab-standard-solution-q003', topic: 'lab-standard-solution', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('A student must measure exactly 10.00 ' + U('cm3') + ' of a stock solution for a dilution. Which piece of glassware is the most suitable?'),
      options: ['A 10 cm³ measuring cylinder', 'A 10.00 cm³ volumetric pipette', 'A 50 cm³ beaker', 'A 25 cm³ conical flask'],
      answer: 1,
      misconception: {
        0: 'A measuring cylinder is fine for rough volumes, but its uncertainty is several times larger than that of a pipette. Markschemes do not accept it for a standard solution or dilution.',
        2: 'The marks on a beaker are only a rough guide, often ±5 % or worse.',
        3: 'A conical flask is used to hold a solution in a titration. Its marks, if any, are not for measuring.'
      },
      hints: ['Which piece of glassware is made to deliver one volume very precisely?'],
      solution: P('A volumetric (bulb) pipette delivers one fixed volume with a small uncertainty (about ±0.02 to ±0.04 ' + U('cm3') + '). A burette would also be acceptable. A measuring cylinder is not precise enough.')
    },
    {
      id: 'lab-standard-solution-q004', topic: 'lab-standard-solution', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('To make one standard, a student runs 3.50 ' + U('cm3') + ' of 0.250 ' + U('mol dm-3') + ' copper(II) sulfate from one burette and 6.50 ' + U('cm3') + ' of distilled water from another into a test tube, and mixes them.') +
        P('Calculate the concentration of copper(II) sulfate in the test tube.'),
      answer: 0.0875, tolerance: '1%', sigfigs: 3, unit: 'mol dm-3',
      hints: ['The total volume is 3.50 + 6.50 cm³.', 'C₂ = C₁ × V₁ ÷ V₂.'],
      solution: M('<i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 ' + U('cm3')) +
        M('<i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 ' + U('mol dm-3'))
    },
    {
      id: 'lab-standard-solution-q005', topic: 'lab-standard-solution', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 1.4.5',
      stem: P('Describe how you would prepare 100.0 ' + U('cm3') + ' of 0.0250 ' + U('mol dm-3') + ' copper(II) sulfate solution from a 0.250 ' + U('mol dm-3') + ' stock solution. Include the volume of stock solution needed.'),
      answer: P('<i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³. Measure 10.0 cm³ of the stock with a pipette (or burette) into a 100.0 cm³ volumetric flask. Add distilled water up to the mark, then stopper and invert to mix.'),
      markscheme: [
        'M1: volume of stock = 10.0 cm³.',
        'M2: measured with a (volumetric) pipette OR burette, into a 100.0 cm³ volumetric flask. (Do not accept a measuring cylinder.)',
        'M3: make up to the mark with distilled/deionized water AND stopper and invert/mix.'
      ],
      hints: ['Use C₁V₁ = C₂V₂ to find V₁.', 'Name the glassware for each volume, then say how to finish and mix.'],
      solution: M('<i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 ' + U('cm3')) +
        P('Pipette 10.0 cm³ of stock into a 100.0 cm³ volumetric flask. Add distilled water until the bottom of the meniscus is on the mark, adding the last drops with a dropping pipette. Stopper and invert several times. Do not write “add 90 cm³ of water”: the flask is filled <em>to the mark</em>.')
    },
    {
      id: 'lab-standard-solution-q006', topic: 'lab-standard-solution', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.5',
      stem: P('A student plots a calibration curve for copper(II) sulfate. The line of best fit has a gradient of 2.84 ' + U('dm3 mol-1') + ' and a <i>y</i>-intercept of 0.01. The mean absorbance of an unknown solution is 0.52.') +
        P('Calculate the concentration of copper(II) sulfate in the unknown.'),
      answer: 0.17958, tolerance: '2%', sigfigs: [2, 3], unit: 'mol dm-3',
      hints: ['The line is absorbance = gradient × concentration + intercept.', 'Rearrange: concentration = (absorbance − intercept) ÷ gradient.'],
      solution: M('[' + CU + '] = (0.52 − 0.01) ÷ 2.84 = 0.18 ' + U('mol dm-3')) +
        P('The absorbance has 2 significant figures, so 0.18 ' + U('mol dm-3') + ' (0.180 is also accepted).')
    },
    {
      id: 'lab-standard-solution-q007', topic: 'lab-standard-solution', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('Copper(II) sulfate solution is blue. Why is a red filter used in the colorimeter when making its calibration curve?'),
      options: [
        'The solution absorbs red light most strongly, so absorbance changes most with concentration',
        'Blue light passes through the solution, so the colorimeter measures the blue colour',
        'Red light has the most energy, so it gives the largest readings',
        'The filter should be the same colour as the solution'
      ],
      answer: 0,
      misconception: {
        1: 'The solution looks blue because blue light passes through it. Light that passes through is not absorbed, so it shows little change with concentration.',
        2: 'Red light has the lowest energy of the visible colours. The choice is about which colour the solution absorbs.',
        3: 'A filter of the same colour lets through light the solution hardly absorbs. The readings would be tiny.'
      },
      hints: ['A solution looks blue because blue light reaches your eye. What happens to the other colours?', 'Look at the colour wheel in the data booklet.'],
      solution: P('A blue solution absorbs the complementary colour, orange–red, most strongly. With a red filter the absorbance changes a lot as the concentration changes, so the calibration line is steep and each reading is precise compared with its size.')
    },
    {
      id: 'lab-standard-solution-q008', topic: 'lab-standard-solution', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('While making a standard solution, a student adds water too quickly and the meniscus ends up above the mark of the volumetric flask. The student calculates the concentration from the mass weighed and the volume of the flask. How does the true concentration compare with the calculated value?'),
      options: [
        'Higher, because more water dissolves more solid',
        'Lower, because the same amount of solute is in a larger volume',
        'The same, because the amount of solute has not changed',
        'Lower, because some solute is lost over the mark'
      ],
      answer: 1,
      misconception: {
        0: 'All the solid had already dissolved. Extra water only spreads the same amount of solute through more volume.',
        2: 'The amount is the same, but concentration is amount ÷ volume, and the volume is now larger.',
        3: 'Nothing is lost from the flask. The problem is the extra water.'
      },
      hints: ['Concentration = amount ÷ volume. Which of these has changed?'],
      solution: P('The amount of solute is unchanged but the volume is larger than the flask’s stated volume, so the true concentration is <strong>lower</strong> than calculated. The solution must be made again; you cannot remove water. Add the last few cm³ with a dropping pipette.')
    },
    {
      id: 'lab-standard-solution-q009', topic: 'lab-standard-solution', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.4.5',
      stem: P('A student weighs 2.50 g of solid by difference on a balance that reads to ±0.01 g, and makes it up to 100.0 ' + U('cm3') + ' in a volumetric flask with an uncertainty of ±0.10 ' + U('cm3') + '.') +
        P('Calculate the percentage uncertainty in the concentration of the solution. Ignore the uncertainty in the molar mass.'),
      answer: 0.9, tolerance: { abs: 0.05 }, sigfigs: [1, 2], unit: '%',
      hints: ['Weighing by difference uses two readings, so the mass is ±0.02 g.', 'Concentration = (m ÷ M) ÷ V: add the percentage uncertainties of m and V.'],
      solution: M('mass: 0.02 ÷ 2.50 × 100 = 0.8 %') +
        M('volume: 0.10 ÷ 100.0 × 100 = 0.1 %') +
        M('concentration: 0.8 % + 0.1 % = 0.9 %') +
        P('The balance, not the flask, controls the uncertainty here. A larger mass, or a balance reading to 0.001 g, would reduce it.')
    },
    {
      id: 'lab-standard-solution-q010', topic: 'lab-standard-solution', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.4.5',
      stem: P('A student makes five standards by running 2.00, 4.00, 6.00, 8.00 and 10.00 ' + U('cm3') + ' of stock solution from a burette into test tubes, and making each up to 10.00 ' + U('cm3') + ' with water from a second burette.') +
        P('Explain why the standard made from 2.00 ' + U('cm3') + ' of stock has the largest percentage uncertainty in its concentration.'),
      answer: P('Every volume from the burette has the same absolute uncertainty (±0.10 cm³ from two readings). For the smallest volume, 2.00 cm³, this is the largest fraction of the volume (5 %, compared with 1 % for 10.00 cm³), so its concentration has the largest percentage uncertainty.'),
      markscheme: [
        'Same absolute uncertainty (±0.05 cm³ per reading / ±0.10 cm³ per volume) for every volume measured with the burette.',
        'It is the largest percentage / fraction of the smallest volume (2.00 cm³): 5 % compared with 1 % for 10.00 cm³.'
      ],
      hints: ['Does the burette’s uncertainty depend on how much you run out?', 'Percentage uncertainty = absolute ÷ value × 100.'],
      solution: P('The burette uncertainty is fixed (±0.05 cm³ per reading, so ±0.10 cm³ for a volume run out). 0.10 ÷ 2.00 × 100 = 5 %, but 0.10 ÷ 10.00 × 100 = 1 %. The smallest volume carries the largest percentage uncertainty.')
    },
    {
      id: 'lab-standard-solution-q011', topic: 'lab-standard-solution', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('A calibration curve uses standards with absorbances from 0.00 to 0.74. An unknown solution gives an absorbance of 0.95. What should the student do?'),
      options: [
        'Extend the line of best fit and read the concentration from it',
        'Dilute the unknown by a known factor, measure it again, and multiply the result by the factor',
        'Change to a filter of a different colour and measure the unknown only',
        'Report the concentration of the most concentrated standard'
      ],
      answer: 1,
      misconception: {
        0: 'The line has only been tested inside the range of the standards. Above that it may bend, so extrapolating is not reliable.',
        2: 'Every reading must use the same filter as the standards, or the line no longer applies.',
        3: 'The unknown is more concentrated than the top standard, so this value would certainly be too low.'
      },
      hints: ['Is the unknown inside the range of the standards?', 'How could you bring it inside that range without losing track of its concentration?'],
      solution: P('Only read values inside the range of the standards. Dilute the unknown accurately (for example 10.00 cm³ by pipette into a 25.00 cm³ volumetric flask, a factor of 2.5), measure it, read its concentration from the line, and multiply by the dilution factor.')
    },
    {
      id: 'lab-standard-solution-q012', topic: 'lab-standard-solution', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('A calibration curve gives [' + CU + '] = 0.138 ' + U('mol dm-3') + ' for an unknown solution. Calculate the concentration in ' + U('g dm-3') + '. <i>M</i>(' + CU + ') = 159.62 ' + U('g mol-1')),
      answer: 22.028, tolerance: '1%', sigfigs: 3, unit: 'g dm-3',
      hints: ['To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.'],
      solution: M('0.138 ' + U('mol dm-3') + ' × 159.62 ' + U('g mol-1') + ' = 22.0 ' + U('g dm-3')) +
        P('The square brackets mean “concentration in mol dm⁻³”. Use the molar mass of the dissolved substance, ' + CU + ', not of the hydrate.')
    },
    {
      id: 'lab-standard-solution-q013', topic: 'lab-standard-solution', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.4.5',
      stem: P('A student forgets to zero the colorimeter with the blank. Every reading, for the standards and for the unknown, is 0.05 higher than it should be. The student draws the line of best fit through the points, without forcing it through the origin.') +
        T('Two of the readings', ['Solution', '[CuSO₄] / mol dm⁻³', 'Absorbance'], [['Standard 1', '0.0500', '0.20'], ['Standard 5', '0.2500', '0.79']]) +
        P('What is the effect on the concentration of the unknown read from the line?'),
      options: [
        'Little or no effect, because the line and the unknown are both shifted up by the same amount',
        'Too high, because the unknown’s absorbance is 0.05 too high',
        'Too low, because the line is shifted up more than the unknown',
        'Too high, because the gradient of the line is larger'
      ],
      answer: 0,
      misconception: {
        1: 'The unknown is 0.05 too high, but so is the line at every concentration. Reading across lands on the same concentration.',
        2: 'The offset is the same for every reading, so the line and the unknown move by exactly the same amount.',
        3: 'Adding the same amount to every reading moves the line up without changing its slope.'
      },
      hints: ['What does adding 0.05 to every point do to the line of best fit: its gradient, or its intercept?', 'Then where does the unknown land on the shifted line?'],
      solution: P('A constant offset raises every point by 0.05, so the best-fit line moves up by 0.05 with the same gradient: its intercept becomes about 0.05 instead of 0. The unknown is raised by the same 0.05, so reading across to the line gives the same concentration. It is still a systematic error: if the student had forced the line through the origin, the result would be too high. Zeroing with the blank removes it.')
    }
  ]);
})();
