/* ==========================================================================
   Question bank: Lab 2 — Paper and thin-layer chromatography (lab-chromatography)
   13 original Paper 1B style questions. All SL (Structure 1.1.1, Structure 2.2.10, Tool 3).
   Schema and rules: docs/AUTHORING.md, sections 4 and 11.
   Every number is recomputed in the writer's check script (scratchpad agentA/check.js).
   Load order on a page: chem.js, core.js, quiz.js, then this file.
   ========================================================================== */
(function () {
  'use strict';
  function M(line) { return '<div class="worked__math">' + line + '</div>'; }
  function U(u) { return '<span class="unit">' + u + '</span>'; }
  var RF = '<i>R</i><sub>F</sub>';
  function TABLE(caption, head, rows) {
    return '<div class="table-scroll"><table class="data"><caption>' + caption + '</caption><thead><tr>' +
      head.map(function (h, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
  }

  S1.questions.register('lab-chromatography', [
    {
      id: 'lab-chromatography-q001', topic: 'lab-chromatography', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>On a chromatogram, the centre of a spot is 3.4 ' + U('cm') + ' above the baseline. The solvent front is 7.9 ' + U('cm') + ' above the baseline. Calculate the ' + RF + ' value of the spot.</p>',
      answer: 0.43038, tolerance: 0.006, sigfigs: 2,
      hints: ['' + RF + ' = distance moved by the spot ÷ distance moved by the solvent front.', 'Both distances are already measured from the baseline. Divide 3.4 by 7.9.'],
      solution: M(RF + ' = 3.4 ' + U('cm') + ' / 7.9 ' + U('cm') + ' = 0.430…') + M(RF + ' = <strong>0.43</strong> (no unit)')
    },
    {
      id: 'lab-chromatography-q002', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A student placed a ruler with its zero at the bottom edge of a TLC plate and recorded these readings.</p>' +
        TABLE('Ruler readings', ['Feature', 'Reading / cm'], [['baseline', '1.0'], ['centre of spot X', '4.8'], ['solvent front', '8.6'], ['top edge of plate', '10.0']]) +
        '<p>Calculate the ' + RF + ' value of spot X.</p>',
      answer: 0.5, tolerance: 0.006, sigfigs: [2, 3],
      hints: ['Distances are measured from the baseline, not from the bottom edge.', 'The top edge of the plate is not needed.'],
      solution: M('spot: 4.8 − 1.0 = 3.8 ' + U('cm')) + M('front: 8.6 − 1.0 = 7.6 ' + U('cm')) + M(RF + ' = 3.8 / 7.6 = <strong>0.50</strong>') +
        '<p>M1 for both distances from the baseline, M2 for the answer. Using the readings directly gives 4.8 / 8.6 = 0.56, and dividing by the plate length gives 0.42: both are wrong.</p>'
    },
    {
      id: 'lab-chromatography-q003', topic: 'lab-chromatography', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>Why is the baseline of a chromatogram drawn in pencil rather than ink?</p>',
      options: [
        'Pencil lines are easier to see when the paper is wet.',
        'Graphite does not dissolve in the solvent, but ink would dissolve and move up the paper.',
        'Pencil can be rubbed out after the experiment.',
        'Ink would react with the substances being separated.'
      ],
      answer: 1,
      misconception: {
        0: 'Visibility is not the problem. Think about what the moving solvent does to the line.',
        2: 'Rubbing out is not needed; the baseline is used for measuring afterwards.',
        3: 'Chromatography is a physical separation. The problem with ink is physical: it dissolves.'
      },
      hints: ['Ink is itself a mixture of dyes.'],
      solution: '<p>Ink is a mixture of soluble dyes. It would dissolve in the mobile phase and give extra spots or smears. Graphite is insoluble, so the baseline stays put.</p>'
    },
    {
      id: 'lab-chromatography-q004', topic: 'lab-chromatography', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student pours solvent into a beaker so that the solvent level is 0.5 ' + U('cm') + ' <strong>above</strong> the baseline. What will happen?</p>',
      options: [
        'The spots move up the paper faster.',
        'The spots dissolve into the solvent in the beaker, so no chromatogram forms.',
        'The ' + RF + ' values are all larger, but the order of the spots is the same.',
        'Nothing changes, because the solvent still rises up the paper.'
      ],
      answer: 1,
      misconception: {
        0: 'The spots are under the solvent surface, so they are not carried up from the baseline at all.',
        2: 'The problem is not the ' + RF + ' value. The mixture leaves the paper altogether.',
        3: 'The solvent does rise, but the mixture has already left the paper and spread into the bulk solvent.'
      },
      hints: ['Where does the mixture go when it is covered by a lot of solvent?'],
      solution: '<p>The spots are submerged, so the substances dissolve into the solvent in the beaker instead of being carried up the paper. The baseline must be above the solvent level.</p>'
    },
    {
      id: 'lab-chromatography-q005', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>Explain how paper chromatography separates the components of a mixture.</p>',
      answer: '<p>The components are distributed between the stationary phase (water held in the paper) and the mobile phase (the solvent). Each component has a different relative attraction to the two phases, through intermolecular forces, so each moves up the paper at a different rate and they separate.</p>',
      markscheme: [
        'Components distribute / partition between the stationary phase and the mobile phase (or: are continually adsorbed and released).',
        'Components have different (relative) attractions to the two phases / different solubilities in the solvent, so they move at different speeds.'
      ],
      hints: ['Name the two phases.', 'Why does one component move further than another in the same time?'],
      solution: '<p>One mark for the two phases and the idea of distribution between them; one mark for <em>different</em> attractions leading to different rates of movement. "They have different R<sub>F</sub> values" restates the result, it does not explain it.</p>'
    },
    {
      id: 'lab-chromatography-q006', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A mixture of three compounds is separated on a silica TLC plate (polar stationary phase) using a non-polar mobile phase. Which compound has the <strong>largest</strong> ' + RF + ' value?</p>',
      options: [
        'The compound with three –OH groups',
        'The compound with one –OH group',
        'The compound with only C–H and C–C bonds',
        'All three have the same value, because they move with the same solvent.'
      ],
      answer: 2,
      misconception: {
        0: 'Three –OH groups form many hydrogen bonds to the silica, so this compound is held back most. It has the smallest ' + RF + '.',
        1: 'One –OH group still hydrogen-bonds to the silica. This compound is held back more than one with no polar groups.',
        3: 'They move in the same solvent, but their attractions to the stationary phase differ. That is why they separate.'
      },
      hints: ['Which compound is attracted least to the polar silica?'],
      solution: '<p>The hydrocarbon-like compound has only weak London (dispersion) forces with the polar silica and dissolves well in the non-polar solvent. It spends most time in the mobile phase and travels furthest.</p>'
    },
    {
      id: 'lab-chromatography-q007', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A TLC run with hexane gives spots very close to the baseline. The student repeats it with a 1 : 1 mixture of hexane and ethyl acetate, which is more polar. What happens to the ' + RF + ' values?</p>',
      options: ['They all decrease.', 'They all increase.', 'They stay the same, because ' + RF + ' depends only on the substance.', 'The order of the spots is reversed.'],
      answer: 1,
      misconception: {
        0: 'A more polar mobile phase competes better with the polar silica for the compounds, so they move further, not less.',
        2: '' + RF + ' depends on the substance <em>and</em> on the conditions: the stationary phase, the solvent and the temperature.',
        3: 'The stationary phase has not changed, so the most polar compound is still held most strongly. The order stays the same.'
      },
      hints: ['Which phase does a more polar solvent compete with?'],
      solution: '<p>The polar compounds are now attracted more strongly to the mobile phase, so they spend more time moving. Every spot moves further and every ' + RF + ' increases, with the order unchanged.</p>'
    },
    {
      id: 'lab-chromatography-q008', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.1',
      stem: '<p>State <strong>two</strong> reasons why a lid is placed on the chromatography tank during the run.</p>',
      answer: '<p>The tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises (the front rises steadily and the results are reproducible). It also keeps flammable or harmful solvent vapour in the tank.</p>',
      markscheme: [
        'Saturates the air in the tank with solvent vapour / stops the solvent evaporating from the paper (so the solvent front rises evenly).',
        'Prevents harmful / flammable vapour escaping into the room. (Accept: keeps the composition of a mixed solvent constant.)'
      ],
      hints: ['Think about the paper as the solvent rises through it.', 'Think about safety too.'],
      solution: '<p>Without a lid, solvent evaporates from the surface of the paper, so the front moves slowly and unevenly and the ' + RF + ' values are not reproducible. Many mobile phases are also volatile and flammable.</p>'
    },
    {
      id: 'lab-chromatography-q009', topic: 'lab-chromatography', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A spot moved 1.8 ' + U('cm') + ' and the solvent front moved 9.0 ' + U('cm') + ' from the baseline. Each distance has an uncertainty of ±0.1 ' + U('cm') + '.</p><p>Calculate the percentage uncertainty of the ' + RF + ' value.</p>',
      answer: 6.6667, tolerance: '2%', sigfigs: [1, 2],
      unit: '%',
      hints: ['' + RF + ' is a division, so add the percentage uncertainties of the two distances.', '(0.1 / 1.8) × 100 + (0.1 / 9.0) × 100'],
      solution: M('(0.1 / 1.8) × 100 = 5.56 %') + M('(0.1 / 9.0) × 100 = 1.11 %') + M('percentage uncertainty = 5.56 % + 1.11 % = <strong>6.7 %</strong>') +
        '<p>Most of the uncertainty comes from the short distance moved by the spot. A longer run would reduce it.</p>'
    },
    {
      id: 'lab-chromatography-q010', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>A food colouring F and four permitted dyes were run on the same paper. The table shows the ' + RF + ' values. The uncertainty of each value is ±0.02.</p>' +
        TABLE('' + RF + ' values on one chromatogram', ['Sample', RF + ' value(s)'], [['F', '0.18, 0.47, 0.71'], ['dye 1', '0.18'], ['dye 2', '0.33'], ['dye 3', '0.46'], ['dye 4', '0.79']]) +
        '<p>Which conclusion is correct?</p>',
      options: [
        'F contains dyes 1, 3 and 4.',
        'F contains dyes 1 and 3 and one substance that is not dyes 1–4.',
        'F contains dyes 1, 2 and 3.',
        'F contains only dye 1, because it is the only exact match.'
      ],
      answer: 1,
      misconception: {
        0: '0.71 and 0.79 differ by 0.08, which is far more than the ±0.02 uncertainty. They are different substances.',
        2: 'No spot of F has an ' + RF + ' near 0.33.',
        3: '0.47 and 0.46 differ by less than the uncertainty, so dye 3 matches as well.'
      },
      hints: ['Two values match if their difference is within the uncertainty.'],
      solution: '<p>0.18 matches dye 1 exactly and 0.47 matches dye 3 (0.46) within ±0.02. 0.71 matches none of the dyes, so F also contains an unknown substance.</p>'
    },
    {
      id: 'lab-chromatography-q011', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.10',
      stem: '<p>Two components of a mixture give spots with ' + RF + ' values of 0.92 and 0.95. Suggest <strong>two</strong> changes to the method that would improve the separation.</p>',
      answer: '<p>Use a less polar mobile phase, so both components are held back more by the polar stationary phase and move less far; their spots move apart. Use a longer piece of paper so the solvent can travel further. (Or: use TLC instead of paper; turn the paper 90° and run it again in a second solvent.)</p>',
      markscheme: [
        'Change the solvent / use a less polar mobile phase.',
        'Use longer paper / let the solvent run further / use TLC / run again at 90° in a different solvent. (Any one.)'
      ],
      hints: ['Both spots are near the front. What makes spots move less far?', 'A greater distance travelled makes the gap between spots bigger.'],
      solution: '<p>Spots near the front mean the components are attracted much more to the mobile phase. A less polar solvent lowers both ' + RF + ' values and spreads them out. A longer run makes the same difference in ' + RF + ' into a bigger distance.</p>'
    },
    {
      id: 'lab-chromatography-q012', topic: 'lab-chromatography', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.1',
      stem: '<p>A student takes the paper out of the tank but forgets to mark the solvent front. Ten minutes later the student marks the edge of the wet area. What is the effect on the calculated ' + RF + ' values?</p>',
      options: ['They are too small.', 'They are too large.', 'They are unchanged.', 'Some are too large and some too small.'],
      answer: 1,
      misconception: {
        0: 'The front distance is the denominator. A smaller denominator gives a larger fraction.',
        2: 'The spots have stopped moving, but the visible edge of the wet area has moved down as the solvent evaporated.',
        3: 'Every ' + RF + ' is divided by the same wrong front distance, so they are all affected in the same direction.'
      },
      hints: ['What happens to the wet area as the solvent evaporates?', 'Is the front distance too big or too small?'],
      solution: '<p>As the solvent evaporates, the wet area shrinks, so the front is marked too low. The front distance is too small, so every ' + RF + ' is too large. This is a systematic error.</p>'
    },
    {
      id: 'lab-chromatography-q013', topic: 'lab-chromatography', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
      syllabus: 'Structure 2.2.10',
      stem: '<p>Which statements about ' + RF + ' values are correct? Select all that apply.</p>',
      options: [
        'An ' + RF + ' value has no unit.',
        'An ' + RF + ' value is always between 0 and 1.',
        'A substance has the same ' + RF + ' value in any solvent.',
        'A pure substance gives a single spot with one ' + RF + ' value.',
        'Two substances with the same ' + RF + ' in one solvent must be the same substance.'
      ],
      answer: [0, 1, 3],
      misconception: {
        2: '' + RF + ' depends on the stationary phase, the solvent and the temperature. Change the solvent and it changes.',
        4: 'Matching ' + RF + ' values in one solvent suggest the same substance, but do not prove it. Running in a second solvent makes the evidence stronger.'
      },
      hints: ['' + RF + ' is a ratio of two distances.', 'Which conditions affect how far a spot moves?'],
      solution: '<p>' + RF + ' is a ratio of two lengths, so it has no unit, and a spot cannot pass the solvent front, so it is at most 1. It is only constant for fixed conditions. A match in one solvent is good evidence, not proof.</p>'
    }
  ]);
})();
