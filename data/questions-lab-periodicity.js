/* ==========================================================================
   Structure Lab — question bank for Lab 10, Periodic trends in the laboratory.
   Schema: docs/AUTHORING.md section 4. All questions are original, in the style of Paper 1B
   (observations, controls, data tables, uncertainty, errors and improvements, equations).
   Structure 3.1.4: group 1 metals with water; group 17 elements with halide ions.
   Structure 3.1.5: oxides with water (equations required for group 1 and 2 metal oxides, carbon
   and sulfur oxides only). Colours are given in the stems: they are not required recall.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  function chem(s) { return '<span class="chem">' + s + '</span>'; }
  function math(lines) { return lines.map(function (l) { return '<div class="worked__math">' + l + '</div>'; }).join(''); }
  function table(caption, head, rows, numFrom) {
    var h = '<div class="table-scroll" tabindex="0"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (c, i) { h += '<th scope="col"' + (numFrom != null && i >= numFrom ? ' class="num"' : '') + '>' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr>' + r.map(function (c, i) { return i ? '<td' + (numFrom != null && i >= numFrom ? ' class="num"' : '') + '>' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  S1.questions.register('lab-periodicity', [

    /* ---------------------------------------------------- Structure 3.1.4: group 17 */
    {
      id: 'lab-periodicity-q001', topic: 'lab-periodicity', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 3.1.4',
      stem: '<p>A few drops of a halogen solution are added to a solution of a potassium halide. In which mixture does a displacement reaction take place?</p>',
      options: ['Iodine solution and potassium bromide', 'Bromine water and potassium chloride', 'Bromine water and potassium iodide', 'Iodine solution and potassium chloride'],
      answer: 2,
      misconception: {
        0: 'Iodine is below bromine in group 17, so it is less reactive and cannot take electrons from bromide ions.',
        1: 'Bromine is below chlorine, so it is less reactive and cannot displace chloride ions.',
        3: 'Iodine is the least reactive of the three, so it displaces neither chloride nor bromide ions.'
      },
      hints: ['A halogen displaces only halide ions of halogens below it in group 17.'],
      solution: '<p>Bromine is above iodine in group 17, so it is more reactive. It takes electrons from iodide ions: ' + chem('Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)') + '.</p>'
    },
    {
      id: 'lab-periodicity-q002', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 3.1.4',
      stem: '<p>Chlorine water is added to a colourless solution of an unknown potassium halide. Cyclohexane is then added and the tube is shaken. The top (cyclohexane) layer is violet.</p><p>Which ion was in the unknown solution? (In cyclohexane: chlorine is colourless, bromine is orange and iodine is violet.)</p>',
      options: ['Chloride', 'Bromide', 'Iodide', 'Potassium'],
      answer: 2,
      misconception: {
        0: 'Chlorine cannot react with chloride ions, so the top layer would stay colourless.',
        1: 'Bromide ions would give bromine, which is orange in cyclohexane.',
        3: 'Potassium ions are spectator ions: they are in every one of these salts and do not react.'
      },
      hints: ['Which halogen is violet in cyclohexane? Where did it come from?'],
      solution: '<p>The violet layer shows iodine. Chlorine did not bring any iodine with it, so the iodine must have formed from iodide ions: ' + chem('Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)') + '.</p>'
    },
    {
      id: 'lab-periodicity-q003', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 3.1.4',
      stem: '<p>When chlorine water is added to potassium iodide solution, the solution turns brown. Write the ionic equation, with state symbols, for the reaction.</p>',
      answer: '<p>' + chem('Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)') + '</p><p>The potassium ions are spectator ions and are left out.</p>',
      markscheme: [
        'Correct species: Cl₂ and I⁻ on the left, Cl⁻ and I₂ on the right, with no K⁺.',
        'Balanced (2I⁻ and 2Cl⁻) with correct state symbols (all aq).'
      ],
      hints: ['Chlorine takes electrons from iodide ions. What forms?', 'Leave out the ions that do not change.'],
      solution: math([chem('Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)'), 'remove K<sup>+</sup>: <b>' + chem('Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)') + '</b>'])
    },
    {
      id: 'lab-periodicity-q004', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 3.1.4',
      stem: '<p>Bromine water is added to potassium chloride solution. The colour of the mixture is the same as that of the control tube (bromine water and water). Explain this observation.</p>',
      answer: '<p>No reaction takes place, so no new halogen forms and the colour is just that of bromine. Bromine is less reactive than chlorine: a bromine atom is larger, so its outer energy level is further from the nucleus and more shielded, and it attracts an extra electron less strongly than a chlorine atom. So bromine cannot take electrons from chloride ions.</p>',
      markscheme: [
        'No reaction / bromine does not displace chloride ions, because bromine is less reactive than chlorine.',
        'Bromine atoms are larger / the outer level is further from the nucleus and more shielded, so they attract an electron less strongly than chlorine atoms.'
      ],
      hints: ['What does "same as the control" tell you about whether anything happened?', 'Compare how strongly bromine and chlorine atoms attract an extra electron.'],
      solution: '<p>See the model answer: the observation (no change) and the reason (bromine is less reactive, because its atoms attract electrons less strongly).</p>'
    },
    {
      id: 'lab-periodicity-q005', topic: 'lab-periodicity', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 3.1.4',
      stem: '<p>In the halogen experiment, a student also adds each halogen solution to a tube containing distilled water instead of a halide solution. What is the purpose of this tube?</p>',
      options: [
        'To dilute the halogen so that the reaction is slower',
        'To show the colour of the halogen solution when no reaction happens, for comparison',
        'To check that the halide solutions are all the same concentration',
        'To make the cyclohexane layer separate more quickly'
      ],
      answer: 1,
      misconception: {
        0: 'The water tube is a separate tube; it is not added to the other mixtures.',
        2: 'Water contains no halide ions, so it cannot tell you anything about their concentrations.',
        3: 'The layers separate because cyclohexane and water do not mix, whatever is dissolved in them.'
      },
      hints: ['How do you know whether a colour is new, or was there already?'],
      solution: '<p>The water tube is a control. It shows the colour of the halogen solution when nothing reacts. A tube that ends up a different colour from the control shows that a new halogen has formed.</p>'
    },

    /* ---------------------------------------------------- Structure 3.1.4: group 1 */
    {
      id: 'lab-periodicity-q006', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 3.1.4',
      stem: '<p>A teacher drops pieces of potassium of the same size onto water and times how long each piece takes to disappear.</p>' +
        table('Times for potassium', ['Run', 'Time / s'], [['1', '4.6'], ['2', '3.9'], ['3', '4.3'], ['4', '4.0']], 1) +
        '<p>Calculate the mean time, in s.</p>',
      answer: 4.2, tolerance: { abs: 0.02 }, sigfigs: 2, unit: 's',
      hints: ['Add the four times and divide by 4.', 'Give the mean to the same number of decimal places as the data.'],
      solution: math(['(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b>'])
    },
    {
      id: 'lab-periodicity-q007', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 3.1.4',
      stem: '<p>A small piece of sodium is dropped onto water containing universal indicator. State three observations, and write the equation for the reaction.</p>',
      answer: '<p>The sodium floats; it melts into a ball; it fizzes (bubbles of gas) and moves about on the surface; it gets smaller and disappears; the indicator turns from green to purple (blue). ' + chem('2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)') + '</p>',
      markscheme: [
        'Any two observations: floats / melts into a ball / fizzes or effervescence / moves on the surface / gets smaller or disappears.',
        'The indicator turns purple (or blue): an alkaline solution forms.',
        'Equation: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) (state symbols not needed for the mark).'
      ],
      hints: ['Think about what you see happen to the metal, and to the indicator.', 'The products are a hydroxide and a gas.'],
      solution: '<p>See the model answer. "Hydrogen is given off" is a conclusion, not an observation; say "fizzes" or "bubbles".</p>'
    },
    {
      id: 'lab-periodicity-q008', topic: 'lab-periodicity', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 3.1.4',
      stem: '<p>A class records the mean time for a 3 mm cube of each metal to disappear on water.</p>' +
        table('Mean times', ['Metal', 'Mean time / s'], [['lithium', '57 ± 4'], ['sodium', '14 ± 1'], ['potassium', '4.2 ± 0.4']], 1) +
        '<p>Which conclusion is best supported by these data?</p>',
      options: [
        'Reactivity increases down group 1, because the outer electron is lost more easily',
        'Reactivity increases down group 1, because the atoms have more protons to attract water',
        'The data cannot show a trend, because each time has an uncertainty',
        'Potassium reacts about 14 times faster than lithium, so its first ionization energy is 14 times smaller'
      ],
      answer: 0,
      misconception: {
        1: 'The trend is right, but the reason is wrong. The extra nuclear charge is outweighed by the greater distance and shielding of the outer electron.',
        2: 'The differences between the metals are far bigger than the uncertainties, and the ranges do not overlap, so the trend is real.',
        3: 'Reaction time is not proportional to ionization energy. The first ionization energy of potassium (419 kJ mol⁻¹) is only a little lower than that of lithium (520 kJ mol⁻¹).'
      },
      hints: ['Do the ranges of the results overlap?', 'Which explanation is about losing the outer electron?'],
      solution: '<p>The times fall steeply from lithium to potassium, far more than the uncertainties, so the metals become more reactive down the group. The outer electron is further from the nucleus and more shielded, so it is lost more easily.</p>'
    },

    /* ---------------------------------------------------- Structure 3.1.5: oxides */
    {
      id: 'lab-periodicity-q009', topic: 'lab-periodicity', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 3.1.5',
      stem: '<p>A student adds four oxides, W, X, Y and Z, to water and measures the pH of each mixture with a pH meter. Distilled water on its own gives pH 5.8.</p>' +
        table('pH of each oxide with water', ['Oxide', 'pH'], [['W', '12.3'], ['X', '5.8'], ['Y', '2.4'], ['Z', '10.1']], 1) +
        '<p>Which oxide could be sulfur dioxide?</p>',
      options: ['W', 'X', 'Y', 'Z'],
      answer: 2,
      misconception: {
        0: 'pH 12.3 is strongly alkaline: this is a basic metal oxide such as calcium oxide.',
        1: 'pH 5.8 is the same as the control, so this oxide has not dissolved. Sulfur dioxide dissolves and forms an acid.',
        3: 'pH 10.1 is alkaline: a basic metal oxide such as magnesium oxide.'
      },
      hints: ['Sulfur is a non-metal. What kind of solution does its oxide form?'],
      solution: '<p>Sulfur dioxide is an acidic oxide: ' + chem('SO2(g) + H2O(l) <=> H2SO3(aq)') + '. The only reading well below the control is <b>Y</b>, pH 2.4.</p>'
    },
    {
      id: 'lab-periodicity-q010', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 3.1.5',
      stem: '<p>Lithium burns in air to form lithium oxide, a white solid. When the solid is added to water containing universal indicator, the indicator turns purple. Deduce the equation, with state symbols, for the reaction of lithium oxide with water.</p>',
      answer: '<p>' + chem('Li2O(s) + H2O(l) -> 2LiOH(aq)') + '</p><p>Lithium is in group 1, so its ion is Li⁺: the oxide is Li₂O and the hydroxide is LiOH.</p>',
      markscheme: [
        'Correct formulas: Li₂O and LiOH.',
        'Balanced (2LiOH) with correct state symbols.'
      ],
      hints: ['Lithium forms Li⁺ ions. What are the formulas of its oxide and hydroxide?', 'A basic oxide + water → a metal hydroxide.'],
      solution: math(['Li<sub>2</sub>O + H<sub>2</sub>O → LiOH (not balanced)', '<b>' + chem('Li2O(s) + H2O(l) -> 2LiOH(aq)') + '</b>'])
    },
    {
      id: 'lab-periodicity-q011', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 3.1.5',
      stem: '<p>Sulfur is burned in a gas jar of air in a fume cupboard. Water is added and the jar is shaken. The pH of the water falls from 5.8 to 2.4. Write the equation, with state symbols, for the reaction that lowers the pH, and state one environmental problem caused by this reaction in the atmosphere.</p>',
      answer: '<p>' + chem('SO2(g) + H2O(l) <=> H2SO3(aq)') + '</p><p>In the atmosphere this forms acid rain, which damages buildings, trees and life in lakes.</p>',
      markscheme: [
        'SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq) (accept → for ⇌).',
        'Acid rain (accept a named effect of acid rain).'
      ],
      hints: ['Burning sulfur forms sulfur dioxide. Add its atoms to those of water to get the acid.'],
      solution: '<p>Sulfur dioxide is an acidic oxide. It reacts with water to form sulfurous acid, H₂SO₃. Gaseous non-metal oxides dissolving in rain water cause acid rain.</p>'
    },
    {
      id: 'lab-periodicity-q012', topic: 'lab-periodicity', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 3.1.5',
      stem: '<p>A student stirs 0.50 g of aluminium oxide with 50 cm<sup>3</sup> of distilled water. The pH is 5.8, the same as the distilled water on its own. Which statement is correct?</p>',
      options: [
        'Aluminium oxide is a neutral oxide, because the pH did not change',
        'Aluminium oxide is an acidic oxide, because the pH is below 7',
        'The test cannot show the character of aluminium oxide, because it does not dissolve in water',
        'The pH meter must be faulty, because a metal oxide always gives pH above 7'
      ],
      answer: 2,
      misconception: {
        0: 'No change in pH means nothing dissolved, not that the oxide is neutral. Aluminium oxide reacts with both acids and bases: it is amphoteric.',
        1: 'pH 5.8 is just the control value: dissolved carbon dioxide from the air makes distilled water slightly acidic.',
        3: 'Insoluble metal oxides do not change the pH. The meter gave the same reading as the control, which is what you expect.'
      },
      hints: ['Compare the reading with the control, not with 7.'],
      solution: '<p>The reading equals the control, so the oxide did not dissolve or react with water. To show that aluminium oxide is amphoteric, you would need to test it with an acid and with an alkali.</p>'
    },
    {
      id: 'lab-periodicity-q013', topic: 'lab-periodicity', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 3.1.4',
      stem: '<p>A student repeats the chlorine water and potassium bromide test with chlorine water from a bottle that had been left open for two weeks. This time the colour change is very faint. Suggest a reason, and an improvement.</p>',
      answer: '<p>Chlorine escapes from the solution over time (it is a gas), so the old chlorine water contains very little chlorine. Only a little bromine forms, so the colour is faint. Use freshly made chlorine water, kept in a stoppered bottle.</p>',
      markscheme: [
        'Chlorine has escaped / the concentration of chlorine is lower, so little bromine forms.',
        'Use freshly made chlorine water (accept: keep it stoppered; add more drops and compare with a control).'
      ],
      hints: ['Chlorine is a gas at room temperature. What happens to it in an open bottle?'],
      solution: '<p>See the model answer. This is a systematic error: repeating with the same bottle gives the same faint result.</p>'
    }
  ]);
})();
