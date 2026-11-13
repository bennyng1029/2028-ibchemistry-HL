/* ==========================================================================
   Question bank: Structure 1.1 — Introduction to the particulate nature of matter
   All questions are original. Everything in 1.1 is SL core (no AHL).
   Full schema and rules: docs/AUTHORING.md.
   Load order on a page: chem.js, core.js, quiz.js, then this file.
   ========================================================================== */
S1.questions.register('s1-1', [

  /* ======================= FOUNDATION ==================================== */
  {
    id: 's1-1-q001',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Which of these is a <strong>homogeneous mixture</strong>?</p>',
    options: [
      'Distilled water, <span class="chem">H2O</span>',
      'Clean, dry air',
      'Sand stirred into water',
      'Copper wire'
    ],
    answer: 1,
    misconception: {
      0: 'Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.',
      2: 'This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.',
      3: 'Copper is an element. It contains only one type of atom.'
    },
    hints: [
      'A mixture contains more than one substance, and the substances are not chemically bonded to each other.',
      'Homogeneous means the composition is the same throughout. You cannot see separate parts.'
    ],
    solution: '<p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is the same throughout. That is a homogeneous mixture.</p>'
  },
  {
    id: 's1-1-q002',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>',
    answer: 298.15,
    tolerance: { abs: 0.5 },
    sigfigs: 3,
    unit: 'K',
    hints: [
      'Kelvin and degrees Celsius have the same step size. Only the zero point is different.',
      '<span class="mono">T(K) = T(°C) + 273.15</span>'
    ],
    solution: '<div class="worked__math"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>'
  },
  {
    id: 's1-1-q004',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'order', marks: 2,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Put these steps in order to get dry salt crystals from a dry mixture of sand and salt.</p>',
    options: [
      'Add water and stir so that the salt dissolves.',
      'Filter. The sand stays on the filter paper as the residue.',
      'Heat the filtrate to evaporate most of the water.',
      'Leave the solution to cool and crystallize, then dry the crystals.'
    ],
    hints: [
      'Which property is different for sand and salt? Use it first.',
      'The salt ends up in the filtrate, still dissolved. What must happen to the water?'
    ],
    solution: '<p>Salt is soluble in water and sand is not. Dissolving (solvation) then filtering separates them: sand is the residue and salt solution is the filtrate. Evaporating the water from the filtrate leaves the salt, which crystallizes and can be dried.</p>'
  },
  {
    id: 's1-1-q006',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Which of these is a <strong>compound</strong>?</p>',
    options: [
      'Chlorine gas, <span class="chem">Cl2</span>',
      'Ammonia, <span class="chem">NH3</span>',
      'Air',
      'Salt water'
    ],
    answer: 1,
    misconception: {
      0: 'A chlorine molecule has two atoms, but both are chlorine atoms. One type of atom means an element.',
      2: 'Air is a mixture. Its gases are not chemically bonded to each other and their proportions can vary.',
      3: 'Salt water is a mixture (a solution). The salt and water are not chemically bonded in a fixed ratio.'
    },
    hints: [
      'A compound contains atoms of two or more different elements, chemically bonded.',
      'Look at each formula. How many different elements does it contain?'
    ],
    solution: '<p>Ammonia contains nitrogen and hydrogen atoms chemically bonded in a fixed 1 : 3 ratio, so it is a compound. <span class="chem">Cl2</span> is an element. Air and salt water are mixtures.</p>'
  },
  {
    id: 's1-1-q007',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>On a very cold night, water vapour in the air forms ice crystals directly on a window, with no liquid in between. What is this change of state called?</p>',
    options: ['Sublimation', 'Condensation', 'Deposition', 'Freezing'],
    answer: 2,
    misconception: {
      0: 'Sublimation is the opposite direction: solid to gas.',
      1: 'Condensation is gas to liquid. Here no liquid forms.',
      3: 'Freezing is liquid to solid. Here the starting state is a gas.'
    },
    hints: [
      'Write down the starting state and the final state first.',
      'The change is gas → solid.'
    ],
    solution: '<p>Water vapour is a gas and ice is a solid. The change gas → solid is called <strong>deposition</strong>.</p>'
  },
  {
    id: 's1-1-q008',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>Which row describes the particles in a <strong>liquid</strong>?</p>',
    options: [
      'Close together, regular arrangement, vibrate about fixed positions',
      'Close together, random arrangement, move past each other',
      'Far apart, random arrangement, move past each other',
      'Far apart, random arrangement, move quickly in all directions'
    ],
    answer: 1,
    misconception: {
      0: 'That describes a solid. In a liquid the particles are not in fixed positions.',
      2: 'Particles in a liquid are still close together. That is why a liquid is very hard to compress.',
      3: 'That describes a gas.'
    },
    hints: [
      'Think about three things: spacing, arrangement and movement.',
      'A liquid flows, but it is almost impossible to squash into a smaller volume. What does each fact tell you?'
    ],
    solution: '<p>A liquid cannot easily be compressed, so its particles are close together. It flows and takes the shape of its container, so its particles are randomly arranged and can move past each other.</p>'
  },
  {
    id: 's1-1-q009',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>Liquid nitrogen boils at 77 K. What is this temperature in degrees Celsius? Give your answer to 3 significant figures.</p>',
    answer: -196.15,
    tolerance: { abs: 0.5 },
    sigfigs: 3,
    unit: '°C',
    hints: [
      'Going from kelvin to degrees Celsius, the number gets smaller.',
      '<span class="mono">T(°C) = T(K) − 273.15</span>. The answer will be negative.'
    ],
    solution: '<div class="worked__math"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>To 3 significant figures this is <strong>−196 °C</strong>.</p>'
  },
  {
    id: 's1-1-q010',
    topic: 's1-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>Sodium chloride is dissolved in water. Which formula with state symbol describes the dissolved sodium chloride?</p>',
    options: [
      '<span class="chem">NaCl(s)</span>',
      '<span class="chem">NaCl(l)</span>',
      '<span class="chem">NaCl(g)</span>',
      '<span class="chem">NaCl(aq)</span>'
    ],
    answer: 3,
    misconception: {
      0: '(s) means solid. Once the salt has dissolved it is no longer a solid.',
      1: '(l) means a pure liquid. <span class="chem">NaCl(l)</span> would be molten salt, above 800 °C. Dissolved in water is (aq).',
      2: '(g) means gas. Dissolving does not turn salt into a gas.'
    },
    hints: ['One state symbol means “dissolved in water”. It comes from the word aqueous.'],
    solution: '<p>(aq) means aqueous: dissolved in water. The solution is written <span class="chem">NaCl(aq)</span>.</p>'
  },

  /* ======================= EXAM STANDARD ================================= */
  {
    id: 's1-1-q003',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>Which of these changes of state <strong>release</strong> energy to the surroundings? Select all that apply.</p>',
    options: ['Melting', 'Freezing', 'Evaporation', 'Condensation', 'Sublimation', 'Deposition'],
    answer: [1, 3, 5],
    misconception: {
      0: 'Melting needs energy in. The particles must overcome some of the attractions holding them in fixed positions.',
      2: 'Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape from the liquid.',
      4: 'Sublimation (solid to gas) needs energy in to separate the particles.'
    },
    hints: ['Think about the direction. Do the particles end up closer together and more strongly held, or further apart?'],
    solution: '<p>Energy is released when particles come closer together and attractions form between them: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>'
  },
  {
    id: 's1-1-q005',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 1.1.3',
    stem: '<p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>',
    answer: '<p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>',
    markscheme: [
      'Energy is used to overcome (or weaken) the forces of attraction between the particles. Accept: increases the potential energy of the particles.',
      'The average kinetic energy of the particles does not change (so the temperature is constant).'
    ],
    hints: ['Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?']
  },
  {
    id: 's1-1-q011',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Propanone and water mix completely to give a clear, colourless liquid. Propanone boils at 56 °C and water boils at 100 °C. Which row is correct?</p>' +
      '<div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of mixture</th><th scope="col">Best method to separate</th></tr></thead><tbody>' +
      '<tr><th scope="row">A</th><td>homogeneous</td><td>filtration</td></tr>' +
      '<tr><th scope="row">B</th><td>homogeneous</td><td>distillation</td></tr>' +
      '<tr><th scope="row">C</th><td>heterogeneous</td><td>filtration</td></tr>' +
      '<tr><th scope="row">D</th><td>heterogeneous</td><td>distillation</td></tr></tbody></table></div>',
    options: ['A', 'B', 'C', 'D'],
    answer: 1,
    misconception: {
      0: 'The mixture type is right, but filtration only removes an undissolved solid. Both liquids pass through filter paper.',
      2: 'The liquids mix completely, so the composition is the same throughout: homogeneous. And both liquids pass through filter paper.',
      3: 'The method is right, but the liquids mix completely. There are no separate layers, so the mixture is homogeneous.'
    },
    hints: [
      '“Mix completely” and “clear” tell you whether you can see separate parts.',
      'Which property is different for the two liquids? The question gives you the data.'
    ],
    solution: '<p>The two liquids mix completely, so the composition is the same throughout: a homogeneous mixture. They have different boiling points, so they can be separated by distillation. Propanone has the lower boiling point, so it vaporizes more easily and is collected first.</p>'
  },
  {
    id: 's1-1-q012',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.1',
    stem: '<p>A student sets up paper chromatography to separate the dyes in an ink. Why must the solvent level in the beaker start <strong>below</strong> the baseline where the ink spot is placed?</p>',
    options: [
      'So that the solvent does not evaporate before it reaches the spot',
      'So that the dyes are carried up the paper and do not dissolve into the solvent in the beaker',
      'So that the pencil baseline does not dissolve in the solvent',
      'So that the dyes react with the paper before the solvent reaches them'
    ],
    answer: 1,
    misconception: {
      0: 'Evaporation is reduced by putting a lid on the beaker. It is not the reason for the solvent level.',
      2: 'Pencil does not dissolve in the solvent at any level. That is why the baseline is drawn in pencil and not in ink.',
      3: 'Chromatography is a physical separation. The dyes do not react with the paper.'
    },
    hints: ['Imagine the spot starting underneath the surface of the solvent. Where would the dyes go?'],
    solution: '<p>If the spot starts below the solvent surface, the dyes dissolve straight into the solvent in the beaker. With the solvent level below the baseline, the solvent rises up the paper, reaches the spot and carries the dyes upward, each by a different distance.</p>'
  },
  {
    id: 's1-1-q013',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Distinguish between an element and a compound.</p>',
    answer: '<p>An element contains only one type of atom and cannot be chemically broken down into simpler substances. A compound contains atoms of two or more different elements chemically bonded together in a fixed ratio.</p>',
    markscheme: [
      'Element: contains only one type of atom. Accept: cannot be chemically broken down into simpler substances.',
      'Compound: atoms of (two or more) different elements chemically bonded/combined. Accept: can be broken down into simpler substances by chemical means.'
    ],
    hints: ['“Distinguish” asks for the difference. Write one clear statement about each, so the two can be compared.']
  },
  {
    id: 's1-1-q014',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.1',
    stem: '<p>In recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent. What happens if much more hot solvent than this is used?</p>',
    options: [
      'Fewer crystals form on cooling, because more of the product stays dissolved',
      'The insoluble impurities dissolve and can no longer be filtered off',
      'The crystals form faster on cooling, so they are less pure',
      'The product reacts with the extra solvent'
    ],
    answer: 0,
    misconception: {
      1: 'Insoluble impurities do not dissolve in the solvent, however much is used. They are removed by filtering the hot solution.',
      2: 'A more dilute solution does not crystallize faster. It may not crystallize at all.',
      3: 'Recrystallization is a physical process. The solvent is chosen so that it does not react with the product.'
    },
    hints: [
      'Even cold solvent dissolves a little of the product.',
      'More solvent can hold more dissolved product after cooling. What does that do to the mass of crystals?'
    ],
    solution: '<p>Some product always stays dissolved in the cold solvent. The larger the volume of solvent, the more product stays in solution, so fewer crystals form and the yield is lower. Using the minimum volume of hot solvent gives a solution that is close to saturated, so most of the product crystallizes on cooling.</p>'
  },
  {
    id: 's1-1-q015',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>A pure substance X is heated steadily from 20 °C. Its temperature rises to 80 °C and stays there for four minutes. It then rises to 218 °C and stays there for several minutes before rising again. What is present at 150 °C?</p>',
    options: ['Solid only', 'Solid and liquid together', 'Liquid only', 'Gas only'],
    answer: 2,
    misconception: {
      0: 'X is a solid only below its melting point. The first flat part, at 80 °C, is the melting point.',
      1: 'Two states are present together only on a flat part of the curve. At 150 °C the temperature is rising.',
      3: 'X is a gas only above its boiling point. The second flat part, at 218 °C, is the boiling point.'
    },
    hints: [
      'A flat part of a heating curve is a change of state. There are two of them here.',
      'The melting point is 80 °C and the boiling point is 218 °C. Where does 150 °C sit?'
    ],
    solution: '<p>The temperature stays constant at 80 °C (melting) and at 218 °C (boiling). 150 °C is above the melting point and below the boiling point, on a sloping part of the curve, so X is a liquid only.</p>'
  },
  {
    id: 's1-1-q016',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>In an experiment, a solution warms from 18.5 °C to 46.0 °C. What is the temperature <strong>change</strong> in kelvin?</p>',
    answer: 27.5,
    tolerance: { abs: 0.05 },
    sigfigs: 3,
    unit: 'K',
    hints: [
      'This is a change, not a single temperature reading.',
      'One kelvin is the same size as one degree Celsius. Change = final − initial.'
    ],
    solution: '<div class="worked__math">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div>' +
      '<p>Check the long way: (46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K. The 273.15 cancels. Adding 273.15 to the change (to get 300.65) is a common error.</p>'
  },
  {
    id: 's1-1-q017',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>Beaker 1 contains 50 g of water at 60 °C. Beaker 2 contains 200 g of water at 60 °C. Which statement about the average kinetic energy of the water molecules is correct?</p>',
    options: [
      'It is greater in beaker 1, because there are fewer molecules to share the energy',
      'It is greater in beaker 2, because there are more molecules',
      'It is the same in both beakers',
      'It cannot be compared without knowing the volumes'
    ],
    answer: 2,
    misconception: {
      0: 'Temperature already measures the average per particle. The number of particles sharing the energy does not matter.',
      1: 'Beaker 2 has more energy in total, but the question asks about the average per molecule. That depends only on temperature.',
      3: 'Volume is not needed. The temperature tells you the average kinetic energy.'
    },
    hints: ['What does temperature measure? Compare the two temperatures.'],
    solution: '<p>Temperature is a measure of the average kinetic energy of the particles. Both beakers are at 60 °C (333.15 K), so the average kinetic energy of the molecules is the same in both. Beaker 2 has more molecules, so its total energy is greater, but the average is not.</p>'
  },
  {
    id: 's1-1-q018',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>Solid calcium carbonate reacts with dilute hydrochloric acid. The products are calcium chloride solution, water and carbon dioxide gas. Which equation has the correct state symbols?</p>',
    options: [
      '<span class="chem">CaCO3(s) + 2HCl(l) -> CaCl2(aq) + H2O(l) + CO2(g)</span>',
      '<span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(aq) + CO2(g)</span>',
      '<span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span>',
      '<span class="chem">CaCO3(aq) + 2HCl(aq) -> CaCl2(s) + H2O(l) + CO2(g)</span>'
    ],
    answer: 2,
    misconception: {
      0: 'Dilute hydrochloric acid is hydrogen chloride dissolved in water, so it is (aq). (l) would mean pure liquid hydrogen chloride.',
      1: 'Water is the solvent. It is a pure liquid, (l). It cannot be “dissolved in water”.',
      3: 'The question says the calcium carbonate is solid, (s), and the calcium chloride is a solution, (aq).'
    },
    hints: [
      'Translate each phrase: “solid”, “dilute … acid”, “solution”, “gas”.',
      'Water is written <span class="chem">H2O(l)</span>.'
    ],
    solution: '<p>Solid calcium carbonate is (s). Dilute hydrochloric acid and calcium chloride solution are dissolved in water, so both are (aq). Water is a pure liquid, (l). Carbon dioxide is a gas, (g).</p><p><span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>'
  },
  {
    id: 's1-1-q019',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 1.1.2',
    stem: '<p>The air in a sealed syringe can easily be squeezed into a smaller volume. Water in the same syringe cannot. Explain this difference using the kinetic molecular theory.</p>',
    answer: '<p>In a gas the particles are far apart, with a lot of empty space between them, so they can be pushed closer together. In a liquid the particles are already close together (touching), so there is very little space to push them into.</p>',
    markscheme: [
      'Gas: particles are far apart / there is a lot of empty space between particles (so they can be pushed closer together).',
      'Liquid: particles are (already) close together / touching / there is very little space between particles.'
    ],
    hints: ['Compare the spacing of the particles in a gas and in a liquid.']
  },
  {
    id: 's1-1-q020',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>Mercury melts at −38.83 °C. What is this temperature in kelvin? Give your answer to 2 decimal places.</p>',
    answer: 234.32,
    tolerance: { abs: 0.005 },
    sigfigs: 5,
    unit: 'K',
    hints: [
      'Keep the minus sign when you substitute.',
      '<span class="mono">T(K) = (−38.83) + 273.15</span>'
    ],
    solution: '<div class="worked__math"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>Both values have two decimal places, so the answer keeps two. A common slip is to lose the minus sign, which gives 311.98 K.</p>'
  },
  {
    id: 's1-1-q021',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>When solid iodine is warmed gently, it turns directly into a purple gas: <span class="chem">I2(s) -> I2(g)</span>. Which row is correct?</p>' +
      '<div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Name of the change</th><th scope="col">Energy</th></tr></thead><tbody>' +
      '<tr><th scope="row">A</th><td>sublimation</td><td>absorbed from the surroundings</td></tr>' +
      '<tr><th scope="row">B</th><td>sublimation</td><td>released to the surroundings</td></tr>' +
      '<tr><th scope="row">C</th><td>deposition</td><td>absorbed from the surroundings</td></tr>' +
      '<tr><th scope="row">D</th><td>evaporation</td><td>absorbed from the surroundings</td></tr></tbody></table></div>',
    options: ['A', 'B', 'C', 'D'],
    answer: 0,
    misconception: {
      1: 'The name is right, but separating the particles of a solid needs energy in. Sublimation is endothermic.',
      2: 'Deposition is the reverse change, gas to solid.',
      3: 'Evaporation starts from a liquid. The state symbols show the iodine starts as a solid.'
    },
    hints: [
      'Read the state symbols: (s) → (g).',
      'Do the particles end up further apart or closer together?'
    ],
    solution: '<p>Solid → gas is sublimation. The particles must overcome the attractions between them to separate, which needs energy, so energy is absorbed from the surroundings (endothermic).</p>'
  },

  {
    id: 's1-1-q029',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'short', marks: 4,
    syllabus: 'Structure 1.1.1',
    stem: '<p>A dry mixture contains iron filings, sand and salt (sodium chloride). Iron is attracted to a magnet. Sand and salt are not. Outline how to obtain a dry sample of each of the three solids.</p>',
    answer: '<p>Use a magnet to remove the iron filings. Add water to the sand and salt and stir, so that the salt dissolves. Filter: the sand stays on the filter paper as the residue. Rinse the sand with a little water and leave it to dry. Heat the filtrate to evaporate the water, leave it to crystallize, and dry the salt crystals.</p>',
    markscheme: [
      'Use a magnet to remove the iron (filings).',
      'Add water and stir / dissolve the salt.',
      'Filter (to remove the sand): sand is the residue / salt solution is the filtrate.',
      'Rinse and dry the sand / the residue.',
      'Evaporate the water from the filtrate / heat the filtrate and leave it to crystallize (to obtain the salt).'
    ],
    hints: [
      'Find a physical property that is different for each solid. The question gives you one of them.',
      'After filtering, neither product is finished. One is wet and one is still dissolved.'
    ]
  },
  {
    id: 's1-1-q030',
    topic: 's1-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>Evaporation and boiling are both types of vaporization. Which statement is correct?</p>',
    options: [
      'Evaporation happens only at the boiling point',
      'Boiling happens only at the surface of the liquid',
      'Evaporation happens at the surface of the liquid, at temperatures below the boiling point',
      'Evaporation releases energy to the surroundings and boiling absorbs energy'
    ],
    answer: 2,
    misconception: {
      0: 'That describes boiling. A puddle evaporates on a cool day, far below 100 °C.',
      1: 'That describes evaporation. In boiling, bubbles of vapour form all through the liquid.',
      3: 'Both are liquid → gas, so both absorb energy. The particles must overcome the attractions to their neighbours.'
    },
    hints: [
      'Think of a puddle drying up and a kettle boiling. Where does the vapour form in each one?',
      'Both changes are liquid → gas.'
    ],
    solution: '<p>Evaporation takes place at the surface of a liquid, at temperatures below the boiling point. Boiling takes place at the boiling point, with bubbles of vapour forming throughout the liquid. Both are vaporization (liquid → gas), and both absorb energy.</p>'
  },

  /* ======================= CHALLENGE ===================================== */
  /* s1-1-q022 and s1-1-q023 were removed in the audit (they needed "average kinetic energy is
     directly proportional to T", which goes beyond the guide's "a measure of"). Do not reuse those ids. */
  {
    id: 's1-1-q027',
    topic: 's1-1', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>Three samples of nitrogen gas are at different temperatures: X is at 150 K, Y is at −150 °C and Z is at 150 °C. Which list puts the samples in order of the average kinetic energy of their molecules, <strong>lowest first</strong>?</p>',
    options: ['X, Y, Z', 'Y, X, Z', 'Y, Z, X', 'They are all the same'],
    answer: 1,
    misconception: {
      0: 'You may have treated −150 °C as larger than 150 K. Convert first: −150 °C = 123.15 K, which is colder than 150 K.',
      2: 'X is at 150 K, which is −123.15 °C. That is much colder than Z at 150 °C, so X cannot have the highest average kinetic energy.',
      3: 'The number 150 appears three times, but the units and signs differ. These are three different temperatures.'
    },
    hints: [
      'Temperature is a measure of average kinetic energy, so the coldest sample has the lowest average kinetic energy.',
      'Put all three temperatures on the same scale before you compare them.'
    ],
    solution: '<div class="worked__math">X: 150 K</div><div class="worked__math">Y: (−150) + 273.15 = 123.15 K</div><div class="worked__math">Z: 150 + 273.15 = 423.15 K</div><p>Temperature is a measure of the average kinetic energy of the particles. The order of temperature, lowest first, is Y, X, Z, so that is also the order of average kinetic energy.</p>'
  },
  {
    id: 's1-1-q028',
    topic: 's1-1', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2,
    syllabus: 'Structure 1.1.3',
    stem: '<p>A liquid starts at −12.48 °C. It is warmed until its temperature has risen by 85.00 K. What is its final temperature in kelvin? Give your answer to 2 decimal places.</p>',
    answer: 345.67,
    tolerance: { abs: 0.005 },
    sigfigs: 5,
    unit: 'K',
    hints: [
      'There are two different things here: a single temperature reading and a temperature change. Which one needs 273.15?',
      'Convert −12.48 °C to kelvin. Then add the rise. A rise of 85.00 K is the same as a rise of 85.00 °C.'
    ],
    solution: '<div class="worked__math"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div>' +
      '<div class="worked__math"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div>' +
      '<p>Only the starting reading is converted. Adding 273.15 to the rise as well gives 618.82 K, which is wrong. Forgetting to convert at all gives 72.52, which is the final temperature in °C, not in K.</p>'
  },
  {
    id: 's1-1-q024',
    topic: 's1-1', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>The table gives the melting and boiling points of four substances. Which substance is a <strong>liquid</strong> at −50 °C?</p>' +
      '<div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num">Melting point / K</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody>' +
      '<tr><th scope="row">A</th><td class="num">63</td><td class="num">77</td></tr>' +
      '<tr><th scope="row">B</th><td class="num">159</td><td class="num">352</td></tr>' +
      '<tr><th scope="row">C</th><td class="num">234</td><td class="num">630</td></tr>' +
      '<tr><th scope="row">D</th><td class="num">273</td><td class="num">373</td></tr></tbody></table></div>',
    options: ['A', 'B', 'C', 'D'],
    answer: 1,
    misconception: {
      0: '−50 °C is 223.15 K. That is above the boiling point of A (77 K), so A is a gas.',
      2: '−50 °C is 223.15 K. That is below the melting point of C (234 K), so C is still a solid.',
      3: '−50 °C is 223.15 K. That is below the melting point of D (273 K), so D is a solid.'
    },
    hints: [
      'Put everything in the same unit first.',
      '−50 °C = 223.15 K. A liquid is above its melting point and below its boiling point.'
    ],
    solution: '<div class="worked__math"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>A substance is a liquid when the temperature is between its melting point and its boiling point. Only B fits: 159 K &lt; 223.15 K &lt; 352 K. A is a gas. C and D are solids.</p>'
  },
  {
    id: 's1-1-q025',
    topic: 's1-1', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 1.1.3',
    stem: '<p>Steam at 100 °C causes a more serious burn than the same mass of liquid water at 100 °C. Explain this, using ideas about particles and changes of state.</p>',
    answer: '<p>The steam and the water are at the same temperature, so their particles have the same average kinetic energy. But when steam touches cooler skin it condenses. Condensation releases energy, because forces of attraction form between the particles as they come close together. The liquid water formed then cools from 100 °C, releasing the same energy as the hot water would. So steam transfers more energy to the skin in total.</p>',
    markscheme: [
      'Same temperature, so the particles have the same average kinetic energy. Accept: the difference is not due to temperature.',
      'Steam condenses on the skin, and condensation releases energy / is exothermic.',
      'Energy is released because forces of attraction form between the particles (as they come closer together). Accept: steam also then cools as liquid water, so more energy is transferred in total.'
    ],
    hints: [
      'What is the same for the steam and the water? What is different?',
      'What happens to steam when it touches something cooler than 100 °C? Is energy absorbed or released?'
    ]
  },
  {
    id: 's1-1-q026',
    topic: 's1-1', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>A pure liquid is cooled steadily in a freezer. For several minutes it is freezing: liquid and solid are both present. Which statements are correct <strong>during this time</strong>? Select all that apply.</p>',
    options: [
      'The temperature of the substance stays constant.',
      'The average kinetic energy of the particles is decreasing.',
      'Energy is being released to the surroundings.',
      'The particles stop moving as they join the solid.',
      'Forces of attraction hold more and more particles in fixed positions.'
    ],
    answer: [0, 2, 4],
    misconception: {
      1: 'The temperature is constant during freezing, so the average kinetic energy is constant too. The energy that leaves comes from the potential energy of the particles.',
      3: 'Particles in a solid still vibrate about their fixed positions. They do not stop moving.'
    },
    hints: [
      'Freezing is a change of state. What does a cooling curve look like during a change of state?',
      'Energy keeps leaving the substance, but the temperature is not falling. Which kind of energy is changing?'
    ],
    solution: '<p>During freezing the temperature stays constant, so the average kinetic energy of the particles does not change. Energy is still released to the colder surroundings: it comes from the decrease in potential energy as attractions hold the particles in fixed positions. The particles in the solid continue to vibrate.</p>'
  }
]);
