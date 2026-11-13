/* s1-1.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-1.q', {
  questions: {

    // ── s1-1-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q001": {
      // EN: <p>Which of these is a <strong>homogeneous mixture</strong>?</p>
      stem: "",
      options: [
        // EN: Distilled water, <span class="chem">H2O</span>
        "",
        // EN: Clean, dry air
        "",
        // EN: Sand stirred into water
        "",
        // EN: Copper wire
        "",
      ],
      hints: [
        // EN: A mixture contains more than one substance, and the substances are not chemically bonded to each other.
        "",
        // EN: Homogeneous means the composition is the same throughout. You cannot see separate parts.
        "",
      ],
      // EN: <p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is the same throughout. That is a homogeneous mixture.</p>
      solution: "",
      misconception: {
        // EN (option A): Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.
        "0": "",
        // EN (option C): This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.
        "2": "",
        // EN (option D): Copper is an element. It contains only one type of atom.
        "3": "",
      },
    },

    // ── s1-1-q002 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q002": {
      // EN: <p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Kelvin and degrees Celsius have the same step size. Only the zero point is different.
        "",
        // EN: <span class="mono">T(K) = T(°C) + 273.15</span>
        "",
      ],
      // EN: <div class="worked__math"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>
      solution: "",
    },

    // ── s1-1-q004 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "s1-1-q004": {
      // EN: <p>Put these steps in order to get dry salt crystals from a dry mixture of sand and salt.</p>
      stem: "",
      options: [
        // EN: Add water and stir so that the salt dissolves.
        "",
        // EN: Filter. The sand stays on the filter paper as the residue.
        "",
        // EN: Heat the filtrate to evaporate most of the water.
        "",
        // EN: Leave the solution to cool and crystallize, then dry the crystals.
        "",
      ],
      hints: [
        // EN: Which property is different for sand and salt? Use it first.
        "",
        // EN: The salt ends up in the filtrate, still dissolved. What must happen to the water?
        "",
      ],
      // EN: <p>Salt is soluble in water and sand is not. Dissolving (solvation) then filtering separates them: sand is the residue and salt solution is the filtrate. Evaporating the water from the filtrate leaves the salt, which crystallizes and can be dried.</p>
      solution: "",
    },

    // ── s1-1-q006 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q006": {
      // EN: <p>Which of these is a <strong>compound</strong>?</p>
      stem: "",
      options: [
        // EN: Chlorine gas, <span class="chem">Cl2</span>
        "",
        // EN: Ammonia, <span class="chem">NH3</span>
        "",
        // EN: Air
        "",
        // EN: Salt water
        "",
      ],
      hints: [
        // EN: A compound contains atoms of two or more different elements, chemically bonded.
        "",
        // EN: Look at each formula. How many different elements does it contain?
        "",
      ],
      // EN: <p>Ammonia contains nitrogen and hydrogen atoms chemically bonded in a fixed 1 : 3 ratio, so it is a compound. <span class="chem">Cl2</span> is an element. Air and salt water are mixtures.</p>
      solution: "",
      misconception: {
        // EN (option A): A chlorine molecule has two atoms, but both are chlorine atoms. One type of atom means an element.
        "0": "",
        // EN (option C): Air is a mixture. Its gases are not chemically bonded to each other and their proportions can vary.
        "2": "",
        // EN (option D): Salt water is a mixture (a solution). The salt and water are not chemically bonded in a fixed ratio.
        "3": "",
      },
    },

    // ── s1-1-q007 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q007": {
      // EN: <p>On a very cold night, water vapour in the air forms ice crystals directly on a window, with no liquid in between. What is this change of state called?</p>
      stem: "",
      options: [
        // EN: Sublimation
        "",
        // EN: Condensation
        "",
        // EN: Deposition
        "",
        // EN: Freezing
        "",
      ],
      hints: [
        // EN: Write down the starting state and the final state first.
        "",
        // EN: The change is gas → solid.
        "",
      ],
      // EN: <p>Water vapour is a gas and ice is a solid. The change gas → solid is called <strong>deposition</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): Sublimation is the opposite direction: solid to gas.
        "0": "",
        // EN (option B): Condensation is gas to liquid. Here no liquid forms.
        "1": "",
        // EN (option D): Freezing is liquid to solid. Here the starting state is a gas.
        "3": "",
      },
    },

    // ── s1-1-q008 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q008": {
      // EN: <p>Which row describes the particles in a <strong>liquid</strong>?</p>
      stem: "",
      options: [
        // EN: Close together, regular arrangement, vibrate about fixed positions
        "",
        // EN: Close together, random arrangement, move past each other
        "",
        // EN: Far apart, random arrangement, move past each other
        "",
        // EN: Far apart, random arrangement, move quickly in all directions
        "",
      ],
      hints: [
        // EN: Think about three things: spacing, arrangement and movement.
        "",
        // EN: A liquid flows, but it is almost impossible to squash into a smaller volume. What does each fact tell you?
        "",
      ],
      // EN: <p>A liquid cannot easily be compressed, so its particles are close together. It flows and takes the shape of its container, so its particles are randomly arranged and can move past each other.</p>
      solution: "",
      misconception: {
        // EN (option A): That describes a solid. In a liquid the particles are not in fixed positions.
        "0": "",
        // EN (option C): Particles in a liquid are still close together. That is why a liquid is very hard to compress.
        "2": "",
        // EN (option D): That describes a gas.
        "3": "",
      },
    },

    // ── s1-1-q009 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q009": {
      // EN: <p>Liquid nitrogen boils at 77 K. What is this temperature in degrees Celsius? Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Going from kelvin to degrees Celsius, the number gets smaller.
        "",
        // EN: <span class="mono">T(°C) = T(K) − 273.15</span>. The answer will be negative.
        "",
      ],
      // EN: <div class="worked__math"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>To 3 significant figures this is <strong>−196 °C</strong>.</p>
      solution: "",
    },

    // ── s1-1-q010 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q010": {
      // EN: <p>Sodium chloride is dissolved in water. Which formula with state symbol describes the dissolved sodium chloride?</p>
      stem: "",
      options: [
        // EN: <span class="chem">NaCl(s)</span>
        "",
        // EN: <span class="chem">NaCl(l)</span>
        "",
        // EN: <span class="chem">NaCl(g)</span>
        "",
        // EN: <span class="chem">NaCl(aq)</span>
        "",
      ],
      hints: [
        // EN: One state symbol means “dissolved in water”. It comes from the word aqueous.
        "",
      ],
      // EN: <p>(aq) means aqueous: dissolved in water. The solution is written <span class="chem">NaCl(aq)</span>.</p>
      solution: "",
      misconception: {
        // EN (option A): (s) means solid. Once the salt has dissolved it is no longer a solid.
        "0": "",
        // EN (option B): (l) means a pure liquid. <span class="chem">NaCl(l)</span> would be molten salt, above 800 °C. Dissolved in water is (aq).
        "1": "",
        // EN (option C): (g) means gas. Dissolving does not turn salt into a gas.
        "2": "",
      },
    },

    // ── s1-1-q003 · multi · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q003": {
      // EN: <p>Which of these changes of state <strong>release</strong> energy to the surroundings? Select all that apply.</p>
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
        // EN: Think about the direction. Do the particles end up closer together and more strongly held, or further apart?
        "",
      ],
      // EN: <p>Energy is released when particles come closer together and attractions form between them: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>
      solution: "",
      misconception: {
        // EN (option A): Melting needs energy in. The particles must overcome some of the attractions holding them in fixed positions.
        "0": "",
        // EN (option C): Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape from the liquid.
        "2": "",
        // EN (option E): Sublimation (solid to gas) needs energy in to separate the particles.
        "4": "",
      },
    },

    // ── s1-1-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "s1-1-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>
      stem: "",
      hints: [
        // EN: Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?
        "",
      ],
      // EN: <p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>
      answer: "",
      markscheme: [
        // EN: Energy is used to overcome (or weaken) the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "",
        // EN: The average kinetic energy of the particles does not change (so the temperature is constant).
        "",
      ],
    },

    // ── s1-1-q011 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q011": {
      // EN: <p>Propanone and water mix completely to give a clear, colourless liquid. Propanone boils at 56 °C and water boils at 100 °C. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of mixture</th><th scope="col">Best method to separate</th></tr></thead><tbody><tr><th scope="row">A</th><td>homogeneous</td><td>filtration</td></tr><tr><th scope="row">B</th><td>homogeneous</td><td>distillation</td></tr><tr><th scope="row">C</th><td>heterogeneous</td><td>filtration</td></tr><tr><th scope="row">D</th><td>heterogeneous</td><td>distillation</td></tr></tbody></table></div>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
      ],
      hints: [
        // EN: “Mix completely” and “clear” tell you whether you can see separate parts.
        "",
        // EN: Which property is different for the two liquids? The question gives you the data.
        "",
      ],
      // EN: <p>The two liquids mix completely, so the composition is the same throughout: a homogeneous mixture. They have different boiling points, so they can be separated by distillation. Propanone has the lower boiling point, so it vaporizes more easily and is collected first.</p>
      solution: "",
      misconception: {
        // EN (option A): The mixture type is right, but filtration only removes an undissolved solid. Both liquids pass through filter paper.
        "0": "",
        // EN (option C): The liquids mix completely, so the composition is the same throughout: homogeneous. And both liquids pass through filter paper.
        "2": "",
        // EN (option D): The method is right, but the liquids mix completely. There are no separate layers, so the mixture is homogeneous.
        "3": "",
      },
    },

    // ── s1-1-q012 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q012": {
      // EN: <p>A student sets up paper chromatography to separate the dyes in an ink. Why must the solvent level in the beaker start <strong>below</strong> the baseline where the ink spot is placed?</p>
      stem: "",
      options: [
        // EN: So that the solvent does not evaporate before it reaches the spot
        "",
        // EN: So that the dyes are carried up the paper and do not dissolve into the solvent in the beaker
        "",
        // EN: So that the pencil baseline does not dissolve in the solvent
        "",
        // EN: So that the dyes react with the paper before the solvent reaches them
        "",
      ],
      hints: [
        // EN: Imagine the spot starting underneath the surface of the solvent. Where would the dyes go?
        "",
      ],
      // EN: <p>If the spot starts below the solvent surface, the dyes dissolve straight into the solvent in the beaker. With the solvent level below the baseline, the solvent rises up the paper, reaches the spot and carries the dyes upward, each by a different distance.</p>
      solution: "",
      misconception: {
        // EN (option A): Evaporation is reduced by putting a lid on the beaker. It is not the reason for the solvent level.
        "0": "",
        // EN (option C): Pencil does not dissolve in the solvent at any level. That is why the baseline is drawn in pencil and not in ink.
        "2": "",
        // EN (option D): Chromatography is a physical separation. The dyes do not react with the paper.
        "3": "",
      },
    },

    // ── s1-1-q013 · short · exam · SL · Structure 1.1.1 · 2 marks
    "s1-1-q013": {
      // EN: <p>Distinguish between an element and a compound.</p>
      stem: "",
      hints: [
        // EN: “Distinguish” asks for the difference. Write one clear statement about each, so the two can be compared.
        "",
      ],
      // EN: <p>An element contains only one type of atom and cannot be chemically broken down into simpler substances. A compound contains atoms of two or more different elements chemically bonded together in a fixed ratio.</p>
      answer: "",
      markscheme: [
        // EN: Element: contains only one type of atom. Accept: cannot be chemically broken down into simpler substances.
        "",
        // EN: Compound: atoms of (two or more) different elements chemically bonded/combined. Accept: can be broken down into simpler substances by chemical means.
        "",
      ],
    },

    // ── s1-1-q014 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q014": {
      // EN: <p>In recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent. What happens if much more hot solvent than this is used?</p>
      stem: "",
      options: [
        // EN: Fewer crystals form on cooling, because more of the product stays dissolved
        "",
        // EN: The insoluble impurities dissolve and can no longer be filtered off
        "",
        // EN: The crystals form faster on cooling, so they are less pure
        "",
        // EN: The product reacts with the extra solvent
        "",
      ],
      hints: [
        // EN: Even cold solvent dissolves a little of the product.
        "",
        // EN: More solvent can hold more dissolved product after cooling. What does that do to the mass of crystals?
        "",
      ],
      // EN: <p>Some product always stays dissolved in the cold solvent. The larger the volume of solvent, the more product stays in solution, so fewer crystals form and the yield is lower. Using the minimum volume of hot solvent gives a solution that is close to saturated, so most of the product crystallizes on cooling.</p>
      solution: "",
      misconception: {
        // EN (option B): Insoluble impurities do not dissolve in the solvent, however much is used. They are removed by filtering the hot solution.
        "1": "",
        // EN (option C): A more dilute solution does not crystallize faster. It may not crystallize at all.
        "2": "",
        // EN (option D): Recrystallization is a physical process. The solvent is chosen so that it does not react with the product.
        "3": "",
      },
    },

    // ── s1-1-q015 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q015": {
      // EN: <p>A pure substance X is heated steadily from 20 °C. Its temperature rises to 80 °C and stays there for four minutes. It then rises to 218 °C and stays there for several minutes before rising again. What is present at 150 °C?</p>
      stem: "",
      options: [
        // EN: Solid only
        "",
        // EN: Solid and liquid together
        "",
        // EN: Liquid only
        "",
        // EN: Gas only
        "",
      ],
      hints: [
        // EN: A flat part of a heating curve is a change of state. There are two of them here.
        "",
        // EN: The melting point is 80 °C and the boiling point is 218 °C. Where does 150 °C sit?
        "",
      ],
      // EN: <p>The temperature stays constant at 80 °C (melting) and at 218 °C (boiling). 150 °C is above the melting point and below the boiling point, on a sloping part of the curve, so X is a liquid only.</p>
      solution: "",
      misconception: {
        // EN (option A): X is a solid only below its melting point. The first flat part, at 80 °C, is the melting point.
        "0": "",
        // EN (option B): Two states are present together only on a flat part of the curve. At 150 °C the temperature is rising.
        "1": "",
        // EN (option D): X is a gas only above its boiling point. The second flat part, at 218 °C, is the boiling point.
        "3": "",
      },
    },

    // ── s1-1-q016 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q016": {
      // EN: <p>In an experiment, a solution warms from 18.5 °C to 46.0 °C. What is the temperature <strong>change</strong> in kelvin?</p>
      stem: "",
      hints: [
        // EN: This is a change, not a single temperature reading.
        "",
        // EN: One kelvin is the same size as one degree Celsius. Change = final − initial.
        "",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>Check the long way: (46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K. The 273.15 cancels. Adding 273.15 to the change (to get 300.65) is a common error.</p>
      solution: "",
    },

    // ── s1-1-q017 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q017": {
      // EN: <p>Beaker 1 contains 50 g of water at 60 °C. Beaker 2 contains 200 g of water at 60 °C. Which statement about the average kinetic energy of the water molecules is correct?</p>
      stem: "",
      options: [
        // EN: It is greater in beaker 1, because there are fewer molecules to share the energy
        "",
        // EN: It is greater in beaker 2, because there are more molecules
        "",
        // EN: It is the same in both beakers
        "",
        // EN: It cannot be compared without knowing the volumes
        "",
      ],
      hints: [
        // EN: What does temperature measure? Compare the two temperatures.
        "",
      ],
      // EN: <p>Temperature is a measure of the average kinetic energy of the particles. Both beakers are at 60 °C (333.15 K), so the average kinetic energy of the molecules is the same in both. Beaker 2 has more molecules, so its total energy is greater, but the average is not.</p>
      solution: "",
      misconception: {
        // EN (option A): Temperature already measures the average per particle. The number of particles sharing the energy does not matter.
        "0": "",
        // EN (option B): Beaker 2 has more energy in total, but the question asks about the average per molecule. That depends only on temperature.
        "1": "",
        // EN (option D): Volume is not needed. The temperature tells you the average kinetic energy.
        "3": "",
      },
    },

    // ── s1-1-q018 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q018": {
      // EN: <p>Solid calcium carbonate reacts with dilute hydrochloric acid. The products are calcium chloride solution, water and carbon dioxide gas. Which equation has the correct state symbols?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CaCO3(s) + 2HCl(l) -> CaCl2(aq) + H2O(l) + CO2(g)</span>
        "",
        // EN: <span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(aq) + CO2(g)</span>
        "",
        // EN: <span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span>
        "",
        // EN: <span class="chem">CaCO3(aq) + 2HCl(aq) -> CaCl2(s) + H2O(l) + CO2(g)</span>
        "",
      ],
      hints: [
        // EN: Translate each phrase: “solid”, “dilute … acid”, “solution”, “gas”.
        "",
        // EN: Water is written <span class="chem">H2O(l)</span>.
        "",
      ],
      // EN: <p>Solid calcium carbonate is (s). Dilute hydrochloric acid and calcium chloride solution are dissolved in water, so both are (aq). Water is a pure liquid, (l). Carbon dioxide is a gas, (g).</p><p><span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>
      solution: "",
      misconception: {
        // EN (option A): Dilute hydrochloric acid is hydrogen chloride dissolved in water, so it is (aq). (l) would mean pure liquid hydrogen chloride.
        "0": "",
        // EN (option B): Water is the solvent. It is a pure liquid, (l). It cannot be “dissolved in water”.
        "1": "",
        // EN (option D): The question says the calcium carbonate is solid, (s), and the calcium chloride is a solution, (aq).
        "3": "",
      },
    },

    // ── s1-1-q019 · short · exam · SL · Structure 1.1.2 · 2 marks
    "s1-1-q019": {
      // EN: <p>The air in a sealed syringe can easily be squeezed into a smaller volume. Water in the same syringe cannot. Explain this difference using the kinetic molecular theory.</p>
      stem: "",
      hints: [
        // EN: Compare the spacing of the particles in a gas and in a liquid.
        "",
      ],
      // EN: <p>In a gas the particles are far apart, with a lot of empty space between them, so they can be pushed closer together. In a liquid the particles are already close together (touching), so there is very little space to push them into.</p>
      answer: "",
      markscheme: [
        // EN: Gas: particles are far apart / there is a lot of empty space between particles (so they can be pushed closer together).
        "",
        // EN: Liquid: particles are (already) close together / touching / there is very little space between particles.
        "",
      ],
    },

    // ── s1-1-q020 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q020": {
      // EN: <p>Mercury melts at −38.83 °C. What is this temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "",
      hints: [
        // EN: Keep the minus sign when you substitute.
        "",
        // EN: <span class="mono">T(K) = (−38.83) + 273.15</span>
        "",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>Both values have two decimal places, so the answer keeps two. A common slip is to lose the minus sign, which gives 311.98 K.</p>
      solution: "",
    },

    // ── s1-1-q021 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q021": {
      // EN: <p>When solid iodine is warmed gently, it turns directly into a purple gas: <span class="chem">I2(s) -> I2(g)</span>. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Name of the change</th><th scope="col">Energy</th></tr></thead><tbody><tr><th scope="row">A</th><td>sublimation</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">B</th><td>sublimation</td><td>released to the surroundings</td></tr><tr><th scope="row">C</th><td>deposition</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">D</th><td>evaporation</td><td>absorbed from the surroundings</td></tr></tbody></table></div>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
      ],
      hints: [
        // EN: Read the state symbols: (s) → (g).
        "",
        // EN: Do the particles end up further apart or closer together?
        "",
      ],
      // EN: <p>Solid → gas is sublimation. The particles must overcome the attractions between them to separate, which needs energy, so energy is absorbed from the surroundings (endothermic).</p>
      solution: "",
      misconception: {
        // EN (option B): The name is right, but separating the particles of a solid needs energy in. Sublimation is endothermic.
        "1": "",
        // EN (option C): Deposition is the reverse change, gas to solid.
        "2": "",
        // EN (option D): Evaporation starts from a liquid. The state symbols show the iodine starts as a solid.
        "3": "",
      },
    },

    // ── s1-1-q029 · short · exam · SL · Structure 1.1.1 · 4 marks
    "s1-1-q029": {
      // EN: <p>A dry mixture contains iron filings, sand and salt (sodium chloride). Iron is attracted to a magnet. Sand and salt are not. Outline how to obtain a dry sample of each of the three solids.</p>
      stem: "",
      hints: [
        // EN: Find a physical property that is different for each solid. The question gives you one of them.
        "",
        // EN: After filtering, neither product is finished. One is wet and one is still dissolved.
        "",
      ],
      // EN: <p>Use a magnet to remove the iron filings. Add water to the sand and salt and stir, so that the salt dissolves. Filter: the sand stays on the filter paper as the residue. Rinse the sand with a little water and leave it to dry. Heat the filtrate to evaporate the water, leave it to crystallize, and dry the salt crystals.</p>
      answer: "",
      markscheme: [
        // EN: Use a magnet to remove the iron (filings).
        "",
        // EN: Add water and stir / dissolve the salt.
        "",
        // EN: Filter (to remove the sand): sand is the residue / salt solution is the filtrate.
        "",
        // EN: Rinse and dry the sand / the residue.
        "",
        // EN: Evaporate the water from the filtrate / heat the filtrate and leave it to crystallize (to obtain the salt).
        "",
      ],
    },

    // ── s1-1-q030 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q030": {
      // EN: <p>Evaporation and boiling are both types of vaporization. Which statement is correct?</p>
      stem: "",
      options: [
        // EN: Evaporation happens only at the boiling point
        "",
        // EN: Boiling happens only at the surface of the liquid
        "",
        // EN: Evaporation happens at the surface of the liquid, at temperatures below the boiling point
        "",
        // EN: Evaporation releases energy to the surroundings and boiling absorbs energy
        "",
      ],
      hints: [
        // EN: Think of a puddle drying up and a kettle boiling. Where does the vapour form in each one?
        "",
        // EN: Both changes are liquid → gas.
        "",
      ],
      // EN: <p>Evaporation takes place at the surface of a liquid, at temperatures below the boiling point. Boiling takes place at the boiling point, with bubbles of vapour forming throughout the liquid. Both are vaporization (liquid → gas), and both absorb energy.</p>
      solution: "",
      misconception: {
        // EN (option A): That describes boiling. A puddle evaporates on a cool day, far below 100 °C.
        "0": "",
        // EN (option B): That describes evaporation. In boiling, bubbles of vapour form all through the liquid.
        "1": "",
        // EN (option D): Both are liquid → gas, so both absorb energy. The particles must overcome the attractions to their neighbours.
        "3": "",
      },
    },

    // ── s1-1-q027 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q027": {
      // EN: <p>Three samples of nitrogen gas are at different temperatures: X is at 150 K, Y is at −150 °C and Z is at 150 °C. Which list puts the samples in order of the average kinetic energy of their molecules, <strong>lowest first</strong>?</p>
      stem: "",
      options: [
        // EN: X, Y, Z
        "",
        // EN: Y, X, Z
        "",
        // EN: Y, Z, X
        "",
        // EN: They are all the same
        "",
      ],
      hints: [
        // EN: Temperature is a measure of average kinetic energy, so the coldest sample has the lowest average kinetic energy.
        "",
        // EN: Put all three temperatures on the same scale before you compare them.
        "",
      ],
      // EN: <div class="worked__math">X: 150 K</div><div class="worked__math">Y: (−150) + 273.15 = 123.15 K</div><div class="worked__math">Z: 150 + 273.15 = 423.15 K</div><p>Temperature is a measure of the average kinetic energy of the particles. The order of temperature, lowest first, is Y, X, Z, so that is also the order of average kinetic energy.</p>
      solution: "",
      misconception: {
        // EN (option A): You may have treated −150 °C as larger than 150 K. Convert first: −150 °C = 123.15 K, which is colder than 150 K.
        "0": "",
        // EN (option C): X is at 150 K, which is −123.15 °C. That is much colder than Z at 150 °C, so X cannot have the highest average kinetic energy.
        "2": "",
        // EN (option D): The number 150 appears three times, but the units and signs differ. These are three different temperatures.
        "3": "",
      },
    },

    // ── s1-1-q028 · numeric · challenge · SL · Structure 1.1.3 · 2 marks
    "s1-1-q028": {
      // EN: <p>A liquid starts at −12.48 °C. It is warmed until its temperature has risen by 85.00 K. What is its final temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "",
      hints: [
        // EN: There are two different things here: a single temperature reading and a temperature change. Which one needs 273.15?
        "",
        // EN: Convert −12.48 °C to kelvin. Then add the rise. A rise of 85.00 K is the same as a rise of 85.00 °C.
        "",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class="worked__math"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>Only the starting reading is converted. Adding 273.15 to the rise as well gives 618.82 K, which is wrong. Forgetting to convert at all gives 72.52, which is the final temperature in °C, not in K.</p>
      solution: "",
    },

    // ── s1-1-q024 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q024": {
      // EN: <p>The table gives the melting and boiling points of four substances. Which substance is a <strong>liquid</strong> at −50 °C?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num">Melting point / K</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">63</td><td class="num">77</td></tr><tr><th scope="row">B</th><td class="num">159</td><td class="num">352</td></tr><tr><th scope="row">C</th><td class="num">234</td><td class="num">630</td></tr><tr><th scope="row">D</th><td class="num">273</td><td class="num">373</td></tr></tbody></table></div>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
      ],
      hints: [
        // EN: Put everything in the same unit first.
        "",
        // EN: −50 °C = 223.15 K. A liquid is above its melting point and below its boiling point.
        "",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>A substance is a liquid when the temperature is between its melting point and its boiling point. Only B fits: 159 K &lt; 223.15 K &lt; 352 K. A is a gas. C and D are solids.</p>
      solution: "",
      misconception: {
        // EN (option A): −50 °C is 223.15 K. That is above the boiling point of A (77 K), so A is a gas.
        "0": "",
        // EN (option C): −50 °C is 223.15 K. That is below the melting point of C (234 K), so C is still a solid.
        "2": "",
        // EN (option D): −50 °C is 223.15 K. That is below the melting point of D (273 K), so D is a solid.
        "3": "",
      },
    },

    // ── s1-1-q025 · short · challenge · SL · Structure 1.1.3 · 3 marks
    "s1-1-q025": {
      // EN: <p>Steam at 100 °C causes a more serious burn than the same mass of liquid water at 100 °C. Explain this, using ideas about particles and changes of state.</p>
      stem: "",
      hints: [
        // EN: What is the same for the steam and the water? What is different?
        "",
        // EN: What happens to steam when it touches something cooler than 100 °C? Is energy absorbed or released?
        "",
      ],
      // EN: <p>The steam and the water are at the same temperature, so their particles have the same average kinetic energy. But when steam touches cooler skin it condenses. Condensation releases energy, because forces of attraction form between the particles as they come close together. The liquid water formed then cools from 100 °C, releasing the same energy as the hot water would. So steam transfers more energy to the skin in total.</p>
      answer: "",
      markscheme: [
        // EN: Same temperature, so the particles have the same average kinetic energy. Accept: the difference is not due to temperature.
        "",
        // EN: Steam condenses on the skin, and condensation releases energy / is exothermic.
        "",
        // EN: Energy is released because forces of attraction form between the particles (as they come closer together). Accept: steam also then cools as liquid water, so more energy is transferred in total.
        "",
      ],
    },

    // ── s1-1-q026 · multi · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q026": {
      // EN: <p>A pure liquid is cooled steadily in a freezer. For several minutes it is freezing: liquid and solid are both present. Which statements are correct <strong>during this time</strong>? Select all that apply.</p>
      stem: "",
      options: [
        // EN: The temperature of the substance stays constant.
        "",
        // EN: The average kinetic energy of the particles is decreasing.
        "",
        // EN: Energy is being released to the surroundings.
        "",
        // EN: The particles stop moving as they join the solid.
        "",
        // EN: Forces of attraction hold more and more particles in fixed positions.
        "",
      ],
      hints: [
        // EN: Freezing is a change of state. What does a cooling curve look like during a change of state?
        "",
        // EN: Energy keeps leaving the substance, but the temperature is not falling. Which kind of energy is changing?
        "",
      ],
      // EN: <p>During freezing the temperature stays constant, so the average kinetic energy of the particles does not change. Energy is still released to the colder surroundings: it comes from the decrease in potential energy as attractions hold the particles in fixed positions. The particles in the solid continue to vibrate.</p>
      solution: "",
      misconception: {
        // EN (option B): The temperature is constant during freezing, so the average kinetic energy is constant too. The energy that leaves comes from the potential energy of the particles.
        "1": "",
        // EN (option D): Particles in a solid still vibrate about their fixed positions. They do not stop moving.
        "3": "",
      },
    },

  }
});
