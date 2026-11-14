/* ==========================================================================
   Question bank: Lab 3 — Heating and cooling curves (Structure 1.1.2–1.1.3)
   14 original Paper 1B style questions. All SL. Schema: docs/AUTHORING.md §4.
   Numbers checked in the scratchpad (agentB): 68.5 + 273.15 = 341.65;
   0.5 / 52.0 × 100 = 0.962 %; (122.4 − 120.5) / 122.4 × 100 = 1.55 %.
   ========================================================================== */
(function () {
  'use strict';
  function M(line) { return '<div class="worked__math">' + line + '</div>'; }
  function TABLE(caption, head, rows) {
    var h = '<div class="table-scroll"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (c, i) { h += '<th scope="col"' + (i < 2 ? ' class="num"' : '') + '>' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return '<td' + (i < 2 ? ' class="num"' : '') + '>' + c + '</td>'; }).join('') + '</tr>'; });
    return h + '</tbody></table></div>';
  }
  var ID = 'lab-heating-curve';

  S1.questions.register(ID, [
    {
      id: ID + '-q001', topic: ID, level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A liquid is left to cool in air. Its cooling curve has a flat part. What is happening during the flat part?</p>',
      options: [
        'The liquid is freezing, and energy is released as attractions form between the particles.',
        'The liquid has stopped losing energy to the surroundings.',
        'The particles have stopped moving.',
        'The liquid is boiling, so its temperature cannot change.'
      ],
      answer: 0,
      misconception: {
        1: 'Energy is still being lost to the surroundings. The loss is balanced by the energy released as the liquid freezes, so the temperature stays the same.',
        2: 'Particles in a solid still vibrate. The average kinetic energy is constant on the flat part, not zero.',
        3: 'The sample is cooling, not being heated. A flat part on a cooling curve is a change from liquid to solid (or from gas to liquid).'
      },
      hints: ['On a cooling curve, which change of state happens as the temperature falls past the melting point?'],
      solution: '<p>On the flat part the liquid is freezing. As particles are pulled into fixed positions, attractions form and energy is released. This replaces the energy lost to the air, so the average kinetic energy, and the temperature, stay constant until all the liquid has frozen.</p>'
    },
    {
      id: ID + '-q002', topic: ID, level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>Stearic acid is heated in a water bath. Its temperature stays at about 69 °C while it melts. Which statement explains this?</p>',
      options: [
        'No energy is absorbed by the stearic acid while it melts.',
        'The energy absorbed increases the average kinetic energy of the particles.',
        'The energy absorbed is used to overcome the forces between the molecules.',
        'The energy absorbed breaks the covalent bonds inside the molecules.'
      ],
      answer: 2,
      misconception: {
        0: 'Energy is still flowing in from the hotter water bath. It goes into the change of state instead of raising the temperature.',
        1: 'If the average kinetic energy increased, the temperature would rise. On the flat part it does not.',
        3: 'Melting is a physical change. The molecules stay whole: only the attractions between molecules are overcome.'
      },
      hints: ['Temperature measures the average kinetic energy of the particles. If the temperature is constant, where is the energy going?'],
      solution: '<p>The energy absorbed is used to overcome the intermolecular forces that hold the molecules in fixed positions. This increases their potential energy. The average kinetic energy does not change, so the temperature stays constant.</p>'
    },
    {
      id: ID + '-q003', topic: ID, level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A student reads the freezing point of a sample as 68.5 °C. What is this temperature in kelvin? Give your answer to one decimal place.</p>',
      answer: 341.65, tolerance: { abs: 0.06 }, sigfigs: [4, 5], unit: 'K',
      hints: ['Add 273.15 to a temperature in °C to get kelvin.'],
      solution: M('<i>T</i> = 68.5 + 273.15 = 341.65 K') + '<p>To one decimal place: <strong>341.7 K</strong> (341.6 K is also accepted, since 341.65 sits on the rounding boundary).</p>'
    },
    {
      id: ID + '-q004', topic: ID, level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A thermometer reads to ±0.5 °C. The melting point of a sample is measured as 52.0 °C. Calculate the percentage uncertainty in this value.</p>',
      answer: 0.9615, tolerance: '2%', sigfigs: [1, 3], unit: '%',
      hints: ['Percentage uncertainty = absolute uncertainty ÷ measured value × 100.'],
      solution: M('% uncertainty = 0.5 ÷ 52.0 × 100 = 0.96 %') + '<p>About <strong>1 %</strong>.</p>'
    },
    {
      id: ID + '-q005', topic: ID, level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A pure solid is heated at a steady rate. Its heating curve has a flat part at its melting point. Explain, in terms of particles, why the temperature does not rise during this flat part.</p>',
      answer: '<p>The energy supplied is used to overcome the attractive forces between the particles (it increases their potential energy). The average kinetic energy of the particles stays the same, so the temperature is constant.</p>',
      markscheme: [
        'Energy is used to overcome / weaken the forces of attraction between the particles. Accept: increases the potential energy of the particles.',
        'The average kinetic energy of the particles does not change. Do not accept: “no energy is absorbed”.'
      ],
      hints: ['Two marks: one for where the energy goes, one for what happens to the kinetic energy.']
    },
    {
      id: ID + '-q006', topic: ID, level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A solid is heated in a water bath at 70 °C. The thermometer reads to ±0.5 °C.</p>' +
        TABLE('Heating data', ['Time / s', 'Temperature / °C', 'What you see'], [
          ['0', '20.0', 'solid'], ['60', '36.5', 'solid'], ['120', '45.5', 'solid and liquid'], ['180', '46.0', 'solid and liquid'],
          ['240', '46.0', 'solid and liquid'], ['300', '46.5', 'solid and liquid'], ['360', '55.0', 'liquid'], ['420', '64.0', 'liquid'],
          ['480', '68.5', 'liquid'], ['540', '69.0', 'liquid'], ['600', '69.0', 'liquid']]) +
        '<p>What is the best value for the melting point of the solid?</p>',
      options: ['45.5 °C', '46.0 °C', '55.0 °C', '69.0 °C'],
      answer: 1,
      misconception: {
        0: 'That is the first plateau reading. One reading is less reliable than the mean of all the readings on the flat part.',
        2: 'At 360 s the sample is all liquid and warming up. The melting point is where solid and liquid are present together.',
        3: 'The last readings are flat because the liquid has reached the temperature of the water bath. Only one state is present, so this is not a change of state.'
      },
      hints: ['Which readings were taken while solid and liquid were both present?', 'Take the mean of those readings.'],
      solution: '<p>Solid and liquid are both present from 120 s to 300 s. The mean of those four readings is (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C. The flat part at 69.0 °C is the liquid reaching the bath temperature (70 °C), not a change of state.</p>'
    },
    {
      id: ID + '-q007', topic: ID, level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.3',
      stem: '<p>On a cooling curve of lauric acid, the temperature falls to 42.0 °C while the sample is still all liquid. When crystals appear, it rises to 43.5 °C and stays there. Explain these observations.</p>',
      answer: '<p>The liquid supercooled: it cooled below its freezing point before crystals started to form. When crystals formed, energy was released as attractions formed between the molecules. This raised the temperature to the freezing point, 43.5 °C, where it stays while the rest of the liquid freezes.</p>',
      markscheme: [
        'The liquid has cooled below its freezing point without freezing / supercooled. Accept: crystals had not yet started to form.',
        'Freezing releases energy (attractions form between molecules), which raises the temperature to the freezing point.'
      ],
      hints: ['Is a liquid always able to freeze as soon as it reaches its freezing point?', 'Is freezing endothermic or exothermic?']
    },
    {
      id: ID + '-q008', topic: ID, level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A sample of stearic acid contains a small amount of another fatty acid as an impurity. How does the impurity affect the heating curve compared with that of pure stearic acid?</p>',
      options: [
        'The plateau is at a higher temperature and is perfectly flat.',
        'The plateau is at a lower temperature and slopes upwards slightly.',
        'The plateau is at the same temperature but is longer.',
        'There is no plateau at all.'
      ],
      answer: 1,
      misconception: {
        0: 'Impurities do not raise the melting point of a solid. They disturb the regular arrangement, so it melts at a lower temperature.',
        2: 'A small amount of impurity changes the melting temperature, not only the length of the plateau.',
        3: 'A slightly impure solid still melts over a narrow range, so there is still a near-flat part.'
      },
      hints: ['An impure solid melts over a range of temperatures. What does that look like on the curve?'],
      solution: '<p>An impure solid melts at a lower temperature, and over a range rather than at one temperature. The plateau is lower and slopes upwards slightly. This is one reason a measured melting point can be below the literature value.</p>'
    },
    {
      id: ID + '-q009', topic: ID, level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>The temperature of a sample rises from 21.5 °C to 68.0 °C. Each reading has an uncertainty of ±0.5 °C. What is the absolute uncertainty, in °C, of the temperature rise?</p>',
      answer: 1.0, tolerance: { abs: 0.01 }, unit: '°C',
      hints: ['The temperature rise is a difference of two readings. For a difference, add the absolute uncertainties.'],
      solution: M('Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C') + M('uncertainty = 0.5 + 0.5 = ±1.0 °C') +
        '<p>So the rise is 46.5 ± 1.0 °C. The uncertainties add even though the values are subtracted.</p>'
    },
    {
      id: ID + '-q010', topic: ID, level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A student’s thermometer reads 0.8 °C too low at every temperature. Which change to the method would remove this error?</p>',
      options: [
        'Repeat the experiment three times and take the mean.',
        'Take readings every 15 s instead of every 30 s.',
        'Place the thermometer in a mixture of ice and pure water, then correct every reading by the difference from 0 °C.',
        'Read the thermometer at eye level.'
      ],
      answer: 2,
      misconception: {
        0: 'A thermometer that always reads low gives a systematic error. Every repeat is low by the same amount, so the mean is low too.',
        1: 'More frequent readings help you see the plateau, but each reading is still 0.8 °C low.',
        3: 'Reading at eye level reduces parallax, a random error. It does not fix a scale that is shifted.'
      },
      hints: ['Is this a random or a systematic error? Which kind is reduced by repeats?'],
      solution: '<p>This is a systematic error. It is removed by calibrating the thermometer against a known fixed point, such as ice and pure water at 0 °C, and correcting the readings.</p>'
    },
    {
      id: ID + '-q011', topic: ID, level: 'sl', tier: 'challenge', type: 'short', marks: 2,
      syllabus: 'Structure 1.1.3',
      stem: '<p>Two students heat the same mass of stearic acid. Student A uses a water bath at 80 °C. Student B uses a bath at 95 °C. Student B’s plateau is shorter and slopes more. Explain why, and suggest why Student A’s method gives a more reliable melting point.</p>',
      answer: '<p>The hotter bath transfers energy faster, so the solid melts in less time (a shorter plateau). The outside of the sample melts and warms up before the middle, so the sample is not at one temperature and the plateau slopes. Student A heats more slowly, so the whole sample stays close to the melting point and there are more readings on a flatter plateau.</p>',
      markscheme: [
        'Energy is transferred faster from the hotter bath, so melting takes less time / the plateau is shorter.',
        'Temperature is not uniform: the outside melts and warms before the centre (so the plateau slopes). Slower heating gives more readings on a flatter plateau. Accept either point for the second mark.'
      ],
      hints: ['Think about the rate at which energy reaches the sample, and whether every part of the sample is at the same temperature.']
    },
    {
      id: ID + '-q012', topic: ID, level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.8',
      stem: '<p>Lauric acid, <span class="chem">C11H23COOH</span>, melts at 43.8 °C. Stearic acid, <span class="chem">C17H35COOH</span>, melts at 69.3 °C. Which is the best explanation for the higher melting point of stearic acid?</p>',
      options: [
        'Stearic acid molecules have stronger covalent bonds.',
        'Stearic acid molecules are larger, with more electrons, so the London (dispersion) forces between them are stronger.',
        'Stearic acid forms hydrogen bonds but lauric acid does not.',
        'Stearic acid is an ionic compound.'
      ],
      answer: 1,
      misconception: {
        0: 'Melting does not break covalent bonds inside the molecules. It overcomes the forces between molecules.',
        2: 'Both acids have the same –COOH group, so both form hydrogen bonds. The difference is in the length of the carbon chain.',
        3: 'Both are molecular compounds made of non-metals bonded covalently.'
      },
      hints: ['What is the difference between the two molecules? What kind of force depends on the size of a molecule?'],
      solution: '<p>The two acids differ only in the length of the hydrocarbon chain. The longer chain of stearic acid has more electrons, so the London (dispersion) forces between its molecules are stronger. More energy is needed to overcome them, so the melting point is higher.</p>'
    },
    {
      id: ID + '-q013', topic: ID, level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>Which of these are <strong>systematic</strong> errors in a melting point experiment? Select all that apply.</p>',
      options: [
        'The sample contains an impurity.',
        'The reading is judged between two scale divisions, sometimes a little high and sometimes a little low.',
        'The thermometer bulb is above the sample, in the air of the tube.',
        'The stopwatch is started a fraction of a second late on some readings and early on others.'
      ],
      answer: [0, 2],
      misconception: {
        1: 'Judging between divisions scatters readings both ways. That is a random error.',
        3: 'A reaction time that is sometimes late and sometimes early scatters the times both ways. That is random.'
      },
      hints: ['A systematic error moves every result in the same direction.'],
      solution: '<p>An impurity always lowers the melting point, and a bulb in the air always reads the air rather than the sample: both shift the result one way, so both are systematic. Judging the scale and the reaction time scatter both ways, so they are random.</p>'
    },
    {
      id: ID + '-q014', topic: ID, level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.1.3',
      stem: '<p>A student measures the melting point of benzoic acid as 120.5 °C. The literature value is 122.4 °C. Calculate the percentage error.</p>',
      answer: 1.5523, tolerance: '2%', sigfigs: [2, 3], unit: '%',
      hints: ['Percentage error = |experimental − literature| ÷ literature × 100.'],
      solution: M('% error = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %') +
        '<p>About <strong>1.6 %</strong>. With a ±0.5 °C thermometer the percentage uncertainty is 0.5 ÷ 120.5 × 100 = 0.4 %, which is smaller, so a systematic error such as an impurity is likely.</p>'
    }
  ]);
})();
