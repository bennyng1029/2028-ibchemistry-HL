/* dev.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'dev.q', {
  questions: {

    // ── dev-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "dev-q001": {
      // EN: <p>Which of these is a <strong>homogeneous mixture</strong>?</p>
      stem: "<p>次のうち、<strong>均一な混合物</strong>はどれですか。</p>",
      options: [
        // EN: Pure water, <span class="chem">H2O</span>
        "純粋な水 <span class=\"chem\">H2O</span>",
        // EN: Dry air
        "乾燥空気",
        // EN: Sand stirred into water
        "水に混ぜた砂",
        // EN: Copper wire
        "銅線",
      ],
      hints: [
        // EN: A mixture contains more than one substance, and the substances are not chemically bonded to each other.
        "",
        // EN: Homogeneous means the composition is the same throughout. You cannot see separate parts.
        "",
      ],
      // EN: <p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is uniform throughout. That is a homogeneous mixture.</p>
      solution: "",
      misconception: {
        // EN (option A): Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.
        "0": "水は化合物です。",
        // EN (option C): This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.
        "2": "",
        // EN (option D): Copper is an element. It contains only one type of atom.
        "3": "",
      },
    },

    // ── dev-q002 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "dev-q002": {
      // EN: <p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Kelvin and degrees Celsius have the same step size. Only the zero point is different.
        "",
        // EN: <span class="mono">T(K) = T(°C) + 273.15</span>
        "",
      ],
      // EN: <div class="worked__math">T = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>
      solution: "",
    },

    // ── dev-q003 · multi · exam · SL · Structure 1.1.2 · 1 mark
    "dev-q003": {
      // EN: <p>Which of these changes of state <strong>release</strong> energy to the surroundings?</p>
      stem: "",
      options: [
        // EN: Melting
        "",
        // EN: Freezing
        "",
        // EN: Evaporation
        "",
        // EN: Condensation
        "",
        // EN: Sublimation
        "",
        // EN: Deposition
        "",
      ],
      hints: [
        // EN: Think about the direction: are the particles ending up closer together and more strongly held, or further apart?
        "",
      ],
      // EN: <p>Energy is released when particles come closer together and the attractions between them increase: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>
      solution: "",
      misconception: {
        // EN (option A): Melting needs energy in. The particles must partly overcome the forces holding them in fixed positions.
        "0": "",
        // EN (option C): Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape the liquid.
        "2": "",
        // EN (option E): Sublimation (solid to gas) needs energy in.
        "4": "",
      },
    },

    // ── dev-q004 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "dev-q004": {
      // EN: <p>Put these steps in order to get dry salt crystals from a mixture of sand and salt.</p>
      stem: "",
      options: [
        // EN: Add water and stir so that the salt dissolves.
        "",
        // EN: Filter. The sand stays in the filter paper as the residue.
        "",
        // EN: Heat the filtrate to evaporate most of the water.
        "",
        // EN: Leave the solution to cool and crystallise, then dry the crystals.
        "",
      ],
      // EN: <p>Salt is soluble in water and sand is not. Dissolving then filtering separates them. Evaporating the water from the filtrate leaves the salt behind.</p>
      solution: "",
    },

    // ── dev-q005 · short · exam · SL · Structure 1.1.2 · 2 marks
    "dev-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>
      stem: "<p>純粋な固体を一定の割合で加熱します。融解している間、温度が一定である理由を説明しなさい。</p>",
      hints: [
        // EN: Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?
        "",
      ],
      // EN: <p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>
      answer: "",
      markscheme: [
        // EN: Energy is used to overcome (or weaken) the forces of attraction between particles.
        "エネルギーは粒子間の引力に打ち勝つために使われる。",
        // EN: The average kinetic energy of the particles does not change (so temperature is constant).
        "",
      ],
    },

  }
});
