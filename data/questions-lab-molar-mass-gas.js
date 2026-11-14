/* ==========================================================================
   Question bank: Lab 8 — Molar volume and the molar mass of a gas (all SL).
   14 original Paper 1B style questions: 5 foundation, 7 exam, 2 challenge.
   Schema and rules: docs/AUTHORING.md.  Data booklet values: R = 8.31 J K-1 mol-1,
   molar volume at STP = 22.7 dm3 mol-1 (273.15 K, 100 kPa), Ar(Mg) = 24.31,
   T (K) = θ (°C) + 273.15.  Every number was recomputed with a script.
   ========================================================================== */
(function () {
  'use strict';

  S1.questions.register('lab-molar-mass-gas', [

    {
      id: 'lab-molar-mass-gas-q001', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2, syllabus: 'Structure 1.4.6',
      stem: '<p>0.0850 g of magnesium reacts with excess hydrochloric acid.</p><p><span class="chem">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>Calculate the volume of hydrogen produced at STP, in <span class="unit">cm3</span>.</p>',
      answer: 79.371, tolerance: '0.5%', sigfigs: 3, unit: 'cm3',
      hints: ['Find the amount of magnesium. The equation gives the amount of hydrogen.', 'At STP one mole of an ideal gas occupies 22.7 dm³.'],
      solution: '<div class="worked__math"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class="worked__math"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>'
    },
    {
      id: 'lab-molar-mass-gas-q002', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>In an experiment, 0.0620 g of magnesium reacts with excess acid and gives 63.5 <span class="unit">cm3</span> of hydrogen at room temperature and pressure. Calculate the molar volume of hydrogen under these conditions, in <span class="unit">dm3 mol-1</span>.</p>',
      answer: 24.898, tolerance: '0.5%', sigfigs: 3, unit: 'dm3 mol-1',
      hints: ['One mole of Mg gives one mole of H₂.', 'Molar volume = volume in dm³ ÷ amount in mol.'],
      solution: '<div class="worked__math"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>'
    },
    {
      id: 'lab-molar-mass-gas-q003', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>A student calculates the molar mass of a vapour using <i>M</i> = <i>mRT</i> / <i>PV</i> with <i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>. The mass is in g and the temperature in K, but the student uses the pressure in kPa and the volume in <span class="unit">cm3</span>. How does the student’s answer compare with the correct value?</p>',
      options: [
        'It is 1000 times too large.',
        'It is 1000 times too small.',
        'It is 10<sup>6</sup> times too small.',
        'It is correct, because the units cancel.'
      ],
      answer: 1,
      misconception: {
        0: 'Check the direction. kPa × cm³ gives a number for <i>PV</i> that is 1000 times larger than Pa × m³. <i>PV</i> is on the bottom of the fraction.',
        2: 'The two conversions partly cancel: a pressure in kPa is a number 10³ times smaller than in Pa, but a volume in cm³ is a number 10⁶ times larger than in m³. Overall <i>PV</i> is 10³ times too big as a number.',
        3: '<i>R</i> = 8.31 is in J K⁻¹ mol⁻¹, and 1 J = 1 Pa m³. Units of <i>P</i> and <i>V</i> must match that.'
      },
      hints: ['1 kPa = 10³ Pa and 1 cm³ = 10⁻⁶ m³. What is 1 kPa cm³ in Pa m³?'],
      solution: '<p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup>. So the number used for <i>PV</i> is 1000 times larger than the SI value. <i>PV</i> is in the denominator, so <i>M</i> comes out 1000 times too small.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q004', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>0.211 g of a volatile liquid is injected into a gas syringe in a heating jacket at 80.0 °C. The volume of vapour formed is 73.5 <span class="unit">cm3</span> at 99.8 kPa. Calculate the molar mass of the liquid, in <span class="unit">g mol-1</span>.</p>',
      answer: 84.416, tolerance: '0.5%', sigfigs: 3, unit: 'g mol-1',
      hints: ['Convert to Pa, m³ and K first.', '<i>M</i> = <i>mRT</i> / <i>PV</i>.'],
      solution: '<div class="worked__math"><i>T</i> = 80.0 + 273.15 = 353.15 K;  <i>P</i> = 9.98 × 10<sup>4</sup> Pa;  <i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class="worked__math"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>M1 for the unit conversions, M2 for the amount, M3 for the answer. A correct final answer scores all three.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q005', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 1.5.2',
      stem: '<p>In the volatile-liquid method, the heating jacket is set at least 20 °C above the boiling point of the liquid. Explain <strong>two</strong> reasons for this.</p>',
      answer: '<p>All of the liquid must vaporize; any liquid left over means the volume is too small. Far above its boiling point the vapour behaves more like an ideal gas, because the particles move faster and the intermolecular forces become negligible, so <i>PV</i> = <i>nRT</i> applies.</p>',
      markscheme: [
        'So that all the liquid vaporizes / no liquid remains (otherwise <i>V</i> is too small and <i>M</i> too high).',
        'Close to the boiling point the intermolecular forces are significant / the vapour is not ideal; well above it the vapour behaves (more) ideally.'
      ],
      hints: ['What would happen to a drop of liquid that does not evaporate?', 'Under which conditions does a real gas deviate from ideal behaviour?']
    },
    {
      id: 'lab-molar-mass-gas-q006', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A student uses magnesium ribbon with a dull coating of magnesium oxide, without cleaning it, to find the molar volume of hydrogen. How is the result affected?</p>',
      options: [
        'The molar volume is too low.',
        'The molar volume is too high.',
        'No effect, because magnesium oxide also reacts with the acid.',
        'No effect, because the acid is in excess.'
      ],
      answer: 0,
      misconception: {
        1: 'Follow the chain. The oxide adds mass but no hydrogen. Less gas for the same recorded mass means a smaller volume per mole.',
        2: 'Magnesium oxide does react with the acid, but it forms magnesium chloride and water, not hydrogen.',
        3: 'Excess acid makes sure all the solid reacts. It cannot make the oxide produce hydrogen.'
      },
      hints: ['Does magnesium oxide produce hydrogen when it reacts with acid?'],
      solution: '<p>Part of the weighed mass is MgO, which reacts to give MgCl<sub>2</sub> and water but no hydrogen. The student calculates the amount of hydrogen from the full mass, so the amount used is too large and the volume measured too small for it. The molar volume, <i>V</i> ÷ <i>n</i>, is too low.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q007', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>The reaction of magnesium with hydrochloric acid is exothermic. A student reads the gas syringe as soon as the fizzing stops, while the flask is still warm, and uses the room temperature in the calculation. What is the effect on the molar volume at room conditions?</p>',
      options: [
        'It is too high, because warm gas occupies a larger volume.',
        'It is too low, because warm gas occupies a smaller volume.',
        'It is too low, because less hydrogen is produced at a higher temperature.',
        'No effect, because the amount of hydrogen is the same.'
      ],
      answer: 0,
      misconception: {
        1: 'At constant pressure, volume is proportional to the absolute temperature. Warmer gas takes up more space, not less.',
        2: 'The amount of hydrogen depends only on the mass of magnesium. Temperature changes the volume that amount occupies.',
        3: 'The amount is the same, but the volume read is not the volume at room temperature. That volume is larger.'
      },
      hints: ['At constant pressure, how does the volume of a gas change with temperature?'],
      solution: '<p>The amount of hydrogen is fixed by the magnesium. Warm gas has a larger volume than the same gas at room temperature, so the volume read is too large and <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> is too high. Wait for the flask to cool before reading.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q008', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>Data from a volatile-liquid experiment:</p><ul><li>mass of liquid (two weighings) = 0.125 ± 0.002 g</li><li>volume of vapour (two readings) = 62.0 ± 1.0 <span class="unit">cm3</span></li><li>temperature = 371.2 ± 0.5 K</li><li>pressure = 100.5 ± 0.1 kPa</li></ul><p>Calculate the percentage uncertainty in the molar mass calculated with <i>M</i> = <i>mRT</i> / <i>PV</i>.</p>',
      answer: 3.4471, tolerance: '3%', sigfigs: [2, 3], unit: '%',
      hints: ['For products and quotients, add the percentage uncertainties.', '<i>R</i> is a constant, so it has no uncertainty.'],
      solution: '<div class="worked__math">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class="worked__math">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class="worked__math">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %;  %<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class="worked__math">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>'
    },
    {
      id: 'lab-molar-mass-gas-q009', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>A student’s molar volume of hydrogen is 24.6 <span class="unit">dm3 mol-1</span> at 22.0 °C and 101.5 kPa. Calculate the molar volume this corresponds to at STP (273.15 K and 100 kPa), in <span class="unit">dm3 mol-1</span>.</p>',
      answer: 23.108, tolerance: '0.5%', sigfigs: 3, unit: 'dm3 mol-1',
      hints: ['Use <i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂ with temperatures in kelvin.'],
      solution: '<div class="worked__math"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class="worked__math"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>The data booklet value is 22.7 dm<sup>3</sup> mol<sup>−1</sup>, so this result is 1.8 % high.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q010', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'challenge', type: 'short', marks: 4, syllabus: 'Structure 1.5.4',
      stem: '<p>A student releases butane from a gas lighter into an upturned measuring cylinder full of water. The lighter is weighed before and after. The student’s molar mass for butane is 52.6 g mol<sup>−1</sup>; the accepted value is 58.14 g mol<sup>−1</sup>. Suggest <strong>two</strong> reasons why the result is too low, and an improvement for each.</p>',
      answer: '<p>The lighter was still wet when reweighed, so the loss in mass (the mass of butane) was too small; dry the lighter thoroughly before the second weighing. The water level inside the cylinder was above the level outside, so the gas was below atmospheric pressure and the amount calculated with atmospheric pressure was too large; raise or lower the cylinder until the levels are equal before reading. The gas also contains water vapour, so the volume is larger than the volume of butane alone.</p>',
      markscheme: [
        'The lighter was wet when reweighed / water on the lighter, so the mass of butane released appears too small (<i>M</i> too low).',
        'Improvement: dry the lighter thoroughly (with paper towel) before reweighing.',
        'Water levels inside and outside the cylinder not equal, so the gas pressure is not atmospheric pressure / <i>n</i> calculated too large (<i>M</i> too low).',
        'Improvement: adjust the cylinder so the water levels are equal before reading the volume.',
        'Accept: the collected gas contains water vapour, so the volume is too large (<i>M</i> too low); note it as a limitation.',
        'Accept: the measuring cylinder was read at the top of the meniscus / gas volume over-read; read at eye level.'
      ],
      hints: ['<i>M</i> = <i>m</i> ÷ <i>n</i>. Too low a result means <i>m</i> too small or <i>n</i> too large.', 'Which measurement could water on the lighter affect?']
    },
    {
      id: 'lab-molar-mass-gas-q011', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>A student injects different masses, <i>m</i>, of one liquid into a heated gas syringe at constant temperature <i>T</i> and pressure <i>P</i>, and plots the volume of vapour, <i>V</i>, against <i>m</i>. The line passes through the origin with gradient <i>k</i>. Which expression gives the molar mass?</p>',
      options: [
        '<i>RT</i> / <i>Pk</i>',
        '<i>Pk</i> / <i>RT</i>',
        '<i>kRT</i> / <i>P</i>',
        '<i>P</i> / <i>kRT</i>'
      ],
      answer: 0,
      misconception: {
        1: 'This is the reciprocal. Start from <i>V</i> = <i>mRT</i> / <i>PM</i> and pick out the part that multiplies <i>m</i>.',
        2: 'This would be correct only if the gradient were proportional to <i>M</i>. A heavier vapour gives fewer moles per gram, so a smaller gradient.',
        3: 'Check the dimensions: <i>RT</i> / <i>P</i> has units of volume per mole, so it must sit on top.'
      },
      hints: ['Rearrange <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> into the form <i>V</i> = (something) × <i>m</i>.'],
      solution: '<p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i>, so the gradient <i>k</i> = <i>RT</i> / <i>PM</i>. Rearranging: <i>M</i> = <i>RT</i> / <i>Pk</i>.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q012', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>A graph of the volume of hydrogen against the mass of magnesium (with excess acid) is a straight line through the origin with a gradient of 1015 <span class="unit">cm3</span> g<sup>−1</sup>. Calculate the molar volume of hydrogen under the conditions of the experiment, in <span class="unit">dm3 mol-1</span>.</p>',
      answer: 24.675, tolerance: '0.5%', sigfigs: [3, 4], unit: 'dm3 mol-1',
      hints: ['The gradient is the volume of hydrogen from 1 g of magnesium. How many grams of magnesium are in one mole?'],
      solution: '<div class="worked__math">volume from 1 mol of Mg = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class="worked__math"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup> (1 mol of Mg gives 1 mol of H<sub>2</sub>)</div>'
    },
    {
      id: 'lab-molar-mass-gas-q013', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.4.6',
      stem: '<p>Why would the molar volume measured for hydrogen be the same as that for oxygen under the same conditions of temperature and pressure?</p>',
      options: [
        'Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules.',
        'Hydrogen and oxygen molecules have the same mass.',
        'Hydrogen and oxygen molecules are the same size.',
        'Both gases are diatomic, so they contain the same number of atoms per gram.'
      ],
      answer: 0,
      misconception: {
        1: 'An O₂ molecule is 16 times heavier than an H₂ molecule. Mass does not decide the volume of a gas.',
        2: 'In the ideal gas model the volume of the particles is negligible, so their size does not matter.',
        3: 'A gram of hydrogen contains far more molecules than a gram of oxygen. The molar volume is about the number of molecules, not the mass.'
      },
      hints: ['This is Avogadro’s law.'],
      solution: '<p>Avogadro’s law: equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules. So one mole of any ideal gas occupies the same volume under the same conditions.</p>'
    },
    {
      id: 'lab-molar-mass-gas-q014', topic: 'lab-molar-mass-gas', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.4.6',
      stem: '<p>Why is the hydrochloric acid used in excess when finding the molar volume of hydrogen from magnesium?</p>',
      options: [
        'So that all the magnesium reacts, and the amount of hydrogen depends only on the mass of magnesium.',
        'So that the reaction is fast enough to finish before the gas cools.',
        'So that the acid absorbs the heat given out by the reaction.',
        'So that the hydrogen does not dissolve in the solution.'
      ],
      answer: 0,
      misconception: {
        1: 'Excess acid may speed things up a little, but that is not why it is used. The calculation needs every gram of magnesium to react.',
        2: 'The volume of acid has little effect on the temperature, and you wait for the gas to cool anyway.',
        3: 'The acid is mostly water. More of it would, if anything, dissolve slightly more hydrogen.'
      },
      hints: ['The calculation uses the mass of magnesium. What has to happen to all of it?'],
      solution: '<p>The amount of hydrogen is calculated from the mass of magnesium, using the 1 : 1 ratio. That only works if all the magnesium reacts, so the magnesium must be the limiting reactant and the acid must be in excess.</p>'
    }

  ]);
})();
