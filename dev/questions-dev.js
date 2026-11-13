/* ==========================================================================
   Question bank: Structure 1.1 — Introduction to the particulate nature of matter
   SAMPLE FILE showing the schema, with one question of each type.
   Full schema and rules: docs/AUTHORING.md.
   Load order on a page: chem.js, core.js, quiz.js, then this file.
   ========================================================================== */
S1.questions.register('dev', [

  /* ---- mcq: one correct option; feedback per wrong option ---------------- */
  {
    id: 'dev-q001',
    topic: 'dev',
    level: 'sl',                 // 'sl' | 'ahl'
    tier: 'foundation',          // 'foundation' | 'exam' | 'challenge'
    type: 'mcq',
    marks: 1,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Which of these is a <strong>homogeneous mixture</strong>?</p>',
    options: [
      'Pure water, <span class="chem">H2O</span>',
      'Dry air',
      'Sand stirred into water',
      'Copper wire'
    ],
    answer: 1,                   // index into options (0-based)
    misconception: {             // keyed by option index; shown when that option is chosen
      0: 'Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.',
      2: 'This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.',
      3: 'Copper is an element. It contains only one type of atom.'
    },
    hints: [
      'A mixture contains more than one substance, and the substances are not chemically bonded to each other.',
      'Homogeneous means the composition is the same throughout. You cannot see separate parts.'
    ],
    solution: '<p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is uniform throughout. That is a homogeneous mixture.</p>'
  },

  /* ---- numeric: tolerance + significant figures -------------------------- */
  {
    id: 'dev-q002',
    topic: 'dev',
    level: 'sl',
    tier: 'foundation',
    type: 'numeric',
    marks: 1,
    syllabus: 'Structure 1.1.3',
    stem: '<p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>',
    answer: 298.15,              // the unrounded value
    tolerance: { abs: 0.5 },     // '1%' | {rel: 0.01} | {abs: 0.5} | number (absolute). Default: 1 % relative
    sigfigs: 3,                  // 3, or [2, 3] to accept a range. Omit to ignore s.f.
    unit: 'K',
    hints: [
      'Kelvin and degrees Celsius have the same step size. Only the zero point is different.',
      '<span class="mono">T(K) = T(°C) + 273.15</span>'
    ],
    solution: '<div class="worked__math">T = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>'
  },

  /* ---- multi: select all that apply ------------------------------------- */
  {
    id: 'dev-q003',
    topic: 'dev',
    level: 'sl',
    tier: 'exam',
    type: 'multi',
    marks: 1,
    syllabus: 'Structure 1.1.2',
    stem: '<p>Which of these changes of state <strong>release</strong> energy to the surroundings?</p>',
    options: ['Melting', 'Freezing', 'Evaporation', 'Condensation', 'Sublimation', 'Deposition'],
    answer: [1, 3, 5],           // every correct index
    misconception: {
      0: 'Melting needs energy in. The particles must partly overcome the forces holding them in fixed positions.',
      2: 'Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape the liquid.',
      4: 'Sublimation (solid to gas) needs energy in.'
    },
    hints: ['Think about the direction: are the particles ending up closer together and more strongly held, or further apart?'],
    solution: '<p>Energy is released when particles come closer together and the attractions between them increase: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>'
  },

  /* ---- order: options are written in the CORRECT order; the engine shuffles */
  {
    id: 'dev-q004',
    topic: 'dev',
    level: 'sl',
    tier: 'foundation',
    type: 'order',
    marks: 2,
    syllabus: 'Structure 1.1.1',
    stem: '<p>Put these steps in order to get dry salt crystals from a mixture of sand and salt.</p>',
    options: [
      'Add water and stir so that the salt dissolves.',
      'Filter. The sand stays in the filter paper as the residue.',
      'Heat the filtrate to evaporate most of the water.',
      'Leave the solution to cool and crystallise, then dry the crystals.'
    ],
    solution: '<p>Salt is soluble in water and sand is not. Dissolving then filtering separates them. Evaporating the water from the filtrate leaves the salt behind.</p>'
  },

  /* ---- short: self-marked written answer --------------------------------- */
  {
    id: 'dev-q005',
    topic: 'dev',
    level: 'sl',
    tier: 'exam',
    type: 'short',
    marks: 2,
    syllabus: 'Structure 1.1.2',
    stem: '<p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>',
    answer: '<p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>',
    markscheme: [                // one tick = one mark, capped at `marks`
      'Energy is used to overcome (or weaken) the forces of attraction between particles.',
      'The average kinetic energy of the particles does not change (so temperature is constant).'
    ],
    hints: ['Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?']
  }
]);
