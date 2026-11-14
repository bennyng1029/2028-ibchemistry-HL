/* ==========================================================================
   Question bank: Lab 7 — Investigating the gas laws (all SL).
   14 original Paper 1B style questions: 6 foundation, 6 exam, 2 challenge.
   Schema and rules: docs/AUTHORING.md.  Data booklet values: R = 8.31 J K-1 mol-1,
   T (K) = θ (°C) + 273.15.  Every number was recomputed with a script.
   ========================================================================== */
(function () {
  'use strict';

  S1.questions.register('lab-gas-laws', [

    {
      id: 'lab-gas-laws-q001', topic: 'lab-gas-laws', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A student measures the pressure, <i>P</i>, of a fixed amount of air in a gas syringe at different volumes, <i>V</i>, at constant temperature. Which graph of the results is a straight line through the origin?</p>',
      options: [
        '<i>P</i> against <i>V</i>',
        '<i>P</i> against 1/<i>V</i>',
        '<i>PV</i> against <i>P</i>',
        '<i>P</i> against <i>V</i><sup>2</sup>'
      ],
      answer: 1,
      misconception: {
        0: 'Pressure falls as volume rises, so this graph is a curve with a negative slope, not a straight line through the origin.',
        2: '<i>PV</i> is constant, so this graph is a horizontal straight line. It does not pass through the origin.',
        3: 'There is no square in the relationship. Pressure is inversely proportional to volume itself.'
      },
      hints: ['If <i>P</i> is inversely proportional to <i>V</i>, then <i>P</i> = <i>k</i> × (something). What is the something?'],
      solution: '<p>At constant temperature <i>PV</i> = <i>k</i>, so <i>P</i> = <i>k</i> × (1/<i>V</i>). A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin with gradient <i>k</i>.</p>'
    },
    {
      id: 'lab-gas-laws-q002', topic: 'lab-gas-laws', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>A sealed gas syringe is held in a water bath. The graph of the volume of the gas against temperature in °C is a straight line. The line of best fit passes through (20.0 °C, 61.2 <span class="unit">cm3</span>) and (80.0 °C, 73.8 <span class="unit">cm3</span>).</p><p>Estimate absolute zero from these data, in °C.</p>',
      answer: -271.43, tolerance: '0.5%', sigfigs: 3, unit: '°C',
      hints: ['Find the gradient of the line first.', 'From (20.0 °C, 61.2 cm³), how far must the temperature fall for the volume to fall by 61.2 cm³?'],
      solution: '<div class="worked__math">gradient = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class="worked__math">fall in temperature for <i>V</i> = 0: 61.2 ÷ 0.210 = 291.4 °C</div><div class="worked__math">θ = 20.0 − 291.4 = −271 °C</div><p>M1 for the gradient, M2 for the answer. Accept answers from −270 °C to −273 °C.</p>'
    },
    {
      id: 'lab-gas-laws-q003', topic: 'lab-gas-laws', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A flask of air in a water bath is joined to a pressure sensor by a long plastic tube. The air in the tube stays at room temperature while the bath is heated from 0 °C to 90 °C. How does this affect the estimate of absolute zero found by extrapolating the graph of pressure against temperature in °C?</p>',
      options: [
        'The estimate is lower (more negative) than the true value.',
        'The estimate is higher (less negative) than the true value.',
        'There is no effect, because the amount of gas is constant.',
        'There is no effect, because only the gradient changes.'
      ],
      answer: 0,
      misconception: {
        1: 'Think about the gradient. Part of the gas is not heated, so the pressure rises less than it should. A shallower line meets the temperature axis further to the left.',
        2: 'The amount is constant, but not all of the gas is at the bath temperature. That changes how much the pressure rises.',
        3: 'The estimate of absolute zero comes from the gradient and the intercept together. A smaller gradient moves the point where the line meets the axis.'
      },
      hints: ['Does the pressure rise by more or by less than it would if all the air were heated?', 'A shallower line through the same starting point meets the temperature axis where?'],
      solution: '<p>Some of the gas is not heated, so the pressure rises by less than expected. The gradient of the line is too small. Extended backwards from the same point, a shallower line meets the temperature axis further from 0 °C, so the estimate is more negative than −273 °C.</p>'
    },
    {
      id: 'lab-gas-laws-q004', topic: 'lab-gas-laws', level: 'sl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>In the fixed-volume experiment, the student is told to stir the water and wait until the pressure reading is steady before each reading. Explain why, and state how the readings would be affected if the student did not wait while heating the bath.</p>',
      answer: '<p>The gas inside the flask takes time to reach the temperature of the water, because heat must pass through the glass. If the student reads at once while heating, the gas is cooler than the thermometer reading, so the pressure recorded is too low for the temperature recorded.</p>',
      markscheme: [
        'The gas (inside the flask) takes time to reach the temperature of the water / thermal equilibrium must be reached.',
        'Without waiting, the gas is cooler than the recorded temperature, so the pressure is too low (for each recorded temperature).'
      ],
      hints: ['Which is measured by the thermometer: the gas or the water?']
    },
    {
      id: 'lab-gas-laws-q005', topic: 'lab-gas-laws', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A student’s estimate of absolute zero is −259 °C. Calculate the percentage error, using −273 °C as the literature value.</p>',
      answer: 5.1282, tolerance: '2%', sigfigs: [2, 3], unit: '%',
      hints: ['Percentage error = |experimental value − literature value| ÷ |literature value| × 100.'],
      solution: '<div class="worked__math">percentage error = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>'
    },
    {
      id: 'lab-gas-laws-q006', topic: 'lab-gas-laws', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>A gas syringe contains 60.0 <span class="unit">cm3</span> of air at 101.2 kPa. The plunger is pushed in slowly to 40.0 <span class="unit">cm3</span>. The temperature does not change and no gas escapes. Calculate the new pressure, in kPa.</p>',
      answer: 151.8, tolerance: '0.5%', sigfigs: [3, 4], unit: 'kPa',
      hints: ['At constant temperature and amount, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>. The volume units cancel, so you do not need to convert them.'],
      solution: '<div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>The volume falls to two-thirds, so the pressure rises by a factor of 1.5.</p>'
    },
    {
      id: 'lab-gas-laws-q007', topic: 'lab-gas-laws', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>In an experiment to find how the pressure of a gas depends on its volume, which variables must be controlled?</p>',
      options: [
        'The temperature and the amount of gas',
        'The pressure and the temperature',
        'The volume and the amount of gas',
        'The temperature only'
      ],
      answer: 0,
      misconception: {
        1: 'Pressure is the dependent variable here. It is what you measure, so it cannot be kept constant.',
        2: 'Volume is the independent variable. It is what you change on purpose.',
        3: 'If gas leaks out, the pressure falls for a reason that has nothing to do with the volume. The amount of gas must be kept constant too.'
      },
      hints: ['<i>PV</i> = <i>nRT</i>. Which quantities are not <i>P</i> or <i>V</i>?'],
      solution: '<p><i>V</i> is the independent variable and <i>P</i> the dependent variable. In <i>PV</i> = <i>nRT</i>, the other two quantities, <i>n</i> and <i>T</i>, must be kept constant (<i>R</i> is a constant anyway). So the syringe must not leak and the temperature must not change.</p>'
    },
    {
      id: 'lab-gas-laws-q008', topic: 'lab-gas-laws', level: 'sl', tier: 'challenge', type: 'short', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>In a pressure–volume experiment at constant room temperature, a student calculates <i>PV</i> for each reading. <i>PV</i> falls steadily from 5080 kPa <span class="unit">cm3</span> at 100 <span class="unit">cm3</span> to 4990 kPa <span class="unit">cm3</span> at 30 <span class="unit">cm3</span>. Suggest <strong>two</strong> reasons for this trend.</p>',
      answer: '<p>Gas may leak out at the joints when it is compressed to a high pressure, so the amount of gas falls. Also, the gas in the tube to the sensor is not included in the syringe reading; its volume is a bigger fraction of the total at small volumes, so the measured <i>V</i> is too small by a larger percentage and <i>PV</i> appears to fall.</p>',
      markscheme: [
        'Gas leaks (out of the syringe or joints) at higher pressure, so the amount of gas decreases.',
        'The volume of gas in the connecting tube (or sensor) is not included in <i>V</i>, and it is a larger fraction of the total at small syringe volumes.',
        'Accept: the temperature of the room fell during the experiment (readings at small volumes taken later).'
      ],
      hints: ['<i>PV</i> = <i>nRT</i>. Which of <i>n</i> or <i>T</i> could have changed?', 'Is all of the trapped gas inside the syringe barrel?']
    },
    {
      id: 'lab-gas-laws-q009', topic: 'lab-gas-laws', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>A thermometer has an uncertainty of ±0.5 °C. A water bath is heated from 20.0 °C to 80.0 °C. Calculate the percentage uncertainty in the temperature change.</p>',
      answer: 1.6667, tolerance: '2%', sigfigs: [2, 3], unit: '%',
      hints: ['The temperature change uses two readings. For a difference, add the absolute uncertainties.'],
      solution: '<div class="worked__math">Δθ = 80.0 − 20.0 = 60.0 °C, uncertainty = ±(0.5 + 0.5) = ±1.0 °C</div><div class="worked__math">percentage uncertainty = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>M1 for ±1.0 °C, M2 for 1.7 %.</p>'
    },
    {
      id: 'lab-gas-laws-q010', topic: 'lab-gas-laws', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.1',
      stem: '<p>A sealed flask of air is heated at constant volume. Which statement explains why the pressure increases?</p>',
      options: [
        'The particles expand, so they hit the walls more often.',
        'The particles move faster, so they hit the walls more often and with more force.',
        'More particles are produced as the gas is heated.',
        'The intermolecular forces between the particles become weaker.'
      ],
      answer: 1,
      misconception: {
        0: 'Particles do not get bigger when heated. In the ideal gas model their volume is negligible anyway.',
        2: 'The flask is sealed. The number of particles stays the same.',
        3: 'The ideal gas model assumes there are no intermolecular forces at all. The rise in pressure comes from faster particles.'
      },
      hints: ['What happens to the kinetic energy of the particles when the temperature rises?'],
      solution: '<p>At a higher temperature the particles have more kinetic energy and move faster. In the same volume they collide with the walls more frequently and with greater force, so the pressure is higher.</p>'
    },
    {
      id: 'lab-gas-laws-q011', topic: 'lab-gas-laws', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>The volume of a fixed amount of gas at constant pressure is measured at several temperatures. Graph I shows volume against temperature in K. Graph II shows the same data against temperature in °C. Which statement is correct?</p>',
      options: [
        'Both graphs are straight lines through the origin.',
        'Graph I passes through the origin. Graph II meets the temperature axis at about −273 °C.',
        'Graph II passes through the origin. Graph I meets the temperature axis at about 273 K.',
        'Graph I is steeper than graph II.'
      ],
      answer: 1,
      misconception: {
        0: 'At 0 °C a gas still has a volume. So the line in °C cannot pass through the origin.',
        2: 'It is the other way round. Zero volume is reached at 0 K, which is −273 °C.',
        3: 'A change of 1 K is the same size as a change of 1 °C. The two lines have the same gradient; one is just shifted along the axis.'
      },
      hints: ['At what temperature would an ideal gas have zero volume? Write it in both units.'],
      solution: '<p>Volume is proportional to the absolute temperature, so graph I is a straight line through the origin (0 K). Graph II is the same line moved along by 273, so it meets the axis at about −273 °C. The gradients are the same, because a kelvin and a degree Celsius are the same size.</p>'
    },
    {
      id: 'lab-gas-laws-q012', topic: 'lab-gas-laws', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>A sealed flask of air reads 100.4 kPa at 20.0 °C. Assuming the volume and amount of gas are constant, calculate the pressure expected at 90.0 °C, in kPa.</p>',
      answer: 124.37, tolerance: '0.5%', sigfigs: 3, unit: 'kPa',
      hints: ['Pressure is proportional to the absolute temperature. Convert both temperatures to kelvin first.'],
      solution: '<div class="worked__math"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K;  <i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>Using °C (100.4 × 90.0 ÷ 20.0 = 452 kPa) is the classic mistake. M1 for kelvin temperatures.</p>'
    },
    {
      id: 'lab-gas-laws-q013', topic: 'lab-gas-laws', level: 'sl', tier: 'foundation', type: 'order', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>Put these steps of the fixed-volume experiment in a sensible order.</p>',
      options: [
        'Clamp a dry flask in a beaker of ice and water and join it to a pressure sensor.',
        'Stir, wait until the readings are steady, and record the temperature and the pressure.',
        'Raise the temperature of the bath by about 10 °C.',
        'Repeat the readings up to about 90 °C.',
        'Plot pressure against temperature in °C and extrapolate the line of best fit to zero pressure.'
      ],
      hints: ['You must be able to take the first reading before you change anything.'],
      solution: '<p>Set up the flask at the lowest temperature, take a steady reading, raise the temperature, and repeat across the range. Only then plot the graph and extrapolate it.</p>'
    },
    {
      id: 'lab-gas-laws-q014', topic: 'lab-gas-laws', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A student’s line of best fit meets the temperature axis at −270 °C. The steepest and shallowest lines that fit the error bars meet the axis at −259 °C and −281 °C. Which is the best conclusion? (Literature value: −273 °C.)</p>',
      options: [
        'Absolute zero = −270 ± 11 °C. The literature value lies within this range, so random error can explain the difference.',
        'Absolute zero = −270 ± 22 °C. The literature value lies within this range.',
        'Absolute zero = −270 ± 11 °C. The result is not −273 °C, so there must be a systematic error.',
        'Absolute zero = −270 ± 0.5 °C, because the thermometer has an uncertainty of ±0.5 °C.'
      ],
      answer: 0,
      misconception: {
        1: 'The whole range from −281 °C to −259 °C is 22 °C wide. The uncertainty is half of that, on either side of the best value.',
        2: 'A difference from the literature value does not prove a systematic error. Here the difference (3 °C) is smaller than the uncertainty (11 °C).',
        3: 'The uncertainty of an extrapolated value is far bigger than the uncertainty of one reading. A small error in the gradient is magnified over 270 °C.'
      },
      hints: ['The uncertainty is half of the range between the worst-fit values.', 'Is the 3 °C difference bigger or smaller than the uncertainty?'],
      solution: '<p>Half the range: (−259 − (−281)) ÷ 2 = 11 °C, so the result is −270 ± 11 °C. The literature value, −273 °C, lies inside −281 °C to −259 °C. The difference is smaller than the uncertainty, so random error alone could explain it.</p>'
    }

  ]);
})();
