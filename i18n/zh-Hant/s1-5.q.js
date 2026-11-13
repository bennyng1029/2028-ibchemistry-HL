/* s1-5.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-5.q', {
  questions: {

    // ── s1-5-q001 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q001": {
      // EN: <p>Which statement is an assumption of the ideal gas model?</p>
      stem: "",
      options: [
        // EN: The particles attract each other weakly.
        "",
        // EN: A small amount of kinetic energy is lost in each collision.
        "",
        // EN: The particles have negligible volume.
        "",
        // EN: The particles have negligible mass.
        "",
      ],
      hints: [
        // EN: There are four assumptions: moving particles, negligible particle volume, no intermolecular forces, elastic collisions.
        "",
      ],
      // EN: <p>The ideal gas model assumes the particles themselves take up a negligible part of the volume of the container. It also assumes moving particles, no intermolecular forces and elastic collisions.</p>
      solution: "",
      misconception: {
        // EN (option A): The model assumes there are no intermolecular forces at all, not weak ones. Weak attractions describe a real gas.
        "0": "",
        // EN (option B): That would be an inelastic collision. The model assumes collisions are elastic, so no kinetic energy is lost overall.
        "1": "",
        // EN (option D): Ideal gas particles do have mass. It is their volume that is taken to be negligible.
        "3": "",
      },
    },

    // ── s1-5-q002 · multi · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q002": {
      // EN: <p>Select <strong>all</strong> the assumptions of the ideal gas model.</p>
      stem: "",
      options: [
        // EN: The gas consists of moving particles.
        "",
        // EN: All the particles move at the same speed.
        "",
        // EN: The particles have negligible volume.
        "",
        // EN: There are no intermolecular forces between the particles.
        "",
        // EN: The particles have negligible mass.
        "",
        // EN: All collisions between particles are elastic.
        "",
      ],
      hints: [
        // EN: There are exactly four correct statements.
        "",
        // EN: Two of the four are about the particles themselves (their volume, the forces between them). One is about collisions.
        "",
      ],
      // EN: <p>The four assumptions are: moving particles; negligible particle volume; no intermolecular forces; elastic collisions.</p>
      solution: "",
      misconception: {
        // EN (option B): The model does not say this. The particles are moving, but nothing requires them all to have the same speed.
        "1": "",
        // EN (option E): The particles have mass. A gas can be weighed. It is the volume of the particles that is negligible.
        "4": "",
      },
    },

    // ── s1-5-q003 · mcq · foundation · SL · Structure 1.5.2 · 1 mark
    "s1-5-q003": {
      // EN: <p>Under which conditions does a real gas behave <strong>most</strong> like an ideal gas?</p>
      stem: "",
      options: [
        // EN: High temperature and high pressure
        "",
        // EN: High temperature and low pressure
        "",
        // EN: Low temperature and high pressure
        "",
        // EN: Low temperature and low pressure
        "",
      ],
      hints: [
        // EN: When are the particles far apart? When are they moving too fast for attractions to matter?
        "",
      ],
      // EN: <p>At <strong>low pressure</strong> the particles are far apart, so their volume is negligible compared with the container. At <strong>high temperature</strong> they move fast, so intermolecular forces have little effect. Both assumptions of the model then hold well.</p>
      solution: "",
      misconception: {
        // EN (option A): The high temperature helps, but high pressure pushes the particles close together, so their own volume is no longer negligible.
        "0": "",
        // EN (option C): These are the conditions where a real gas deviates most. Slow, crowded particles are where gases turn into liquids.
        "2": "",
        // EN (option D): The low pressure helps, but at low temperature the particles move slowly, so intermolecular forces become significant.
        "3": "",
      },
    },

    // ── s1-5-q004 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q004": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 0.300 mol of an ideal gas at STP.</p>
      stem: "",
      hints: [
        // EN: The data booklet gives the molar volume of an ideal gas at STP.
        "",
        // EN: <span class="mono">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "",
      ],
      // EN: <div class="worked__math">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>
      solution: "",
    },

    // ── s1-5-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q005": {
      // EN: <p>A sample of argon occupies 4540 <span class="unit">cm3</span> at STP. Calculate the amount of argon, in mol.</p>
      stem: "",
      hints: [
        // EN: Convert the volume to dm<sup>3</sup> first: divide by 1000.
        "",
        // EN: <span class="mono">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "",
      ],
      // EN: <div class="worked__math">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class="worked__math">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>
      solution: "",
    },

    // ── s1-5-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q006": {
      // EN: <p>A fixed mass of an ideal gas is kept at constant temperature. Which description fits a graph of pressure (vertical axis) against volume (horizontal axis)?</p>
      stem: "",
      options: [
        // EN: A straight line through the origin with a positive gradient
        "",
        // EN: A straight line with a negative gradient that reaches zero pressure
        "",
        // EN: A curve that falls steeply at first and then levels off, without touching either axis
        "",
        // EN: A horizontal straight line
        "",
      ],
      hints: [
        // EN: If the volume doubles, what happens to the pressure? And if it doubles again?
        "",
      ],
      // EN: <p>At constant temperature, <span class="mono">PV = constant</span>, so pressure is inversely proportional to volume. Each doubling of V halves P. This gives a falling curve that gets closer to both axes without touching them.</p>
      solution: "",
      misconception: {
        // EN (option A): That would mean pressure is directly proportional to volume. Squeezing a gas into a smaller volume raises its pressure, so the two move in opposite directions.
        "0": "",
        // EN (option B): Inverse proportion is not a straight line going down. The pressure halves each time the volume doubles, so it never reaches zero.
        "1": "",
        // EN (option D): A horizontal line is the graph of PV against P. Pressure itself changes when the volume changes.
        "3": "",
      },
    },

    // ── s1-5-q007 · mcq · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q007": {
      // EN: <p>What is 250 <span class="unit">cm3</span> expressed in <span class="unit">m3</span>?</p>
      stem: "",
      options: [
        // EN: <span class="mono">0.250 m<sup>3</sup></span>
        "",
        // EN: <span class="mono">2.50 m<sup>3</sup></span>
        "",
        // EN: <span class="mono">2.50 × 10<sup>−4</sup> m<sup>3</sup></span>
        "",
        // EN: <span class="mono">2.50 × 10<sup>8</sup> m<sup>3</sup></span>
        "",
      ],
      hints: [
        // EN: 1 m<sup>3</sup> = 1000 dm<sup>3</sup> and 1 dm<sup>3</sup> = 1000 cm<sup>3</sup>.
        "",
      ],
      // EN: <div class="worked__math">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class="worked__math">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>In one step: divide cm<sup>3</sup> by 10<sup>6</sup> to get m<sup>3</sup>.</p>
      solution: "",
      misconception: {
        // EN (option A): Dividing by 1000 gives the volume in dm<sup>3</sup>, not m<sup>3</sup>. You need to divide by 1000 again.
        "0": "",
        // EN (option B): There are 100 cm in 1 m, but volume is length cubed: 1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>.
        "1": "",
        // EN (option D): You multiplied by 10<sup>6</sup> instead of dividing. A cubic metre is much bigger than a cubic centimetre, so the number must get smaller.
        "3": "",
      },
    },

    // ── s1-5-q008 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q008": {
      // EN: <p>Calculate the pressure, in kPa, of 1.00 mol of an ideal gas in a 10.0 <span class="unit">dm3</span> container at 300 K.</p>
      stem: "",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for P.
        "",
        // EN: With V in dm<sup>3</sup>, the pressure comes out in kPa: <span class="mono">P = (1.00 × 8.31 × 300) ÷ 10.0</span>
        "",
      ],
      // EN: <div class="worked__math">P = nRT ÷ V</div><div class="worked__math">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>To 3 significant figures: <strong>249 kPa</strong>.</p>
      solution: "",
    },

    // ── s1-5-q009 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q009": {
      // EN: <p>A fixed mass of an ideal gas is compressed to half its original volume at constant temperature. What happens to the pressure?</p>
      stem: "",
      options: [
        // EN: It halves.
        "",
        // EN: It stays the same.
        "",
        // EN: It doubles.
        "",
        // EN: It becomes four times larger.
        "",
      ],
      hints: [
        // EN: At constant temperature, <span class="mono">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>.
        "",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>The pressure doubles.</p>
      solution: "",
      misconception: {
        // EN (option A): That would be direct proportion. Pressure and volume are inversely proportional: when one goes down, the other goes up.
        "0": "",
        // EN (option B): The same particles now hit a smaller wall area more often, so the pressure must rise.
        "1": "",
        // EN (option D): The relationship is P ∝ 1/V, not 1/V<sup>2</sup>. Halving V multiplies P by 2, not 4.
        "3": "",
      },
    },

    // ── s1-5-q010 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q010": {
      // EN: <p>A gas occupies 3.00 <span class="unit">dm3</span> at 300 K. It is heated to 450 K at constant pressure. Calculate the new volume, in <span class="unit">dm3</span>.</p>
      stem: "",
      hints: [
        // EN: The pressure is constant, so it cancels from the combined gas law.
        "",
        // EN: <span class="mono">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>
        "",
      ],
      // EN: <div class="worked__math">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class="worked__math">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>
      solution: "",
    },

    // ── s1-5-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q011": {
      // EN: <p>A sealed, rigid container of gas is heated from 25 °C to 50 °C. What happens to the pressure of the gas?</p>
      stem: "",
      options: [
        // EN: It doubles.
        "",
        // EN: It increases by about 8 %.
        "",
        // EN: It halves.
        "",
        // EN: It stays the same because the container is rigid.
        "",
      ],
      hints: [
        // EN: Convert both temperatures to kelvin before comparing them.
        "",
        // EN: At constant volume, <span class="mono">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>.
        "",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class="worked__math">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>The pressure rises by about 8 %.</p>
      solution: "",
      misconception: {
        // EN (option A): You used the Celsius values. Pressure is proportional to temperature in kelvin: 298 K to 323 K is far from a doubling.
        "0": "",
        // EN (option C): Pressure and temperature are directly proportional, so heating raises the pressure. Also check you used kelvin.
        "2": "",
        // EN (option D): A rigid container keeps the volume constant, not the pressure. Faster particles hit the walls harder and more often.
        "3": "",
      },
    },

    // ── s1-5-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q012": {
      // EN: <p>A gas sample has a volume of 450 <span class="unit">cm3</span> at 27.0 °C and 98.0 kPa. Calculate the volume, in <span class="unit">cm3</span>, that the same sample would occupy at STP.</p>
      stem: "",
      hints: [
        // EN: STP is 273.15 K and 100 kPa. Use the combined gas law.
        "",
        // EN: T<sub>1</sub> = 300.15 K. <span class="mono">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>
        "",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class="worked__math">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class="worked__math">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>To 3 significant figures: <strong>401 cm<sup>3</sup></strong>. Cooling and a slightly higher pressure both make the volume smaller, so this is sensible.</p>
      solution: "",
    },

    // ── s1-5-q013 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q013": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 2.00 g of helium at 20.0 °C and 101 kPa.</p>
      stem: "",
      hints: [
        // EN: Find the amount of helium first: <span class="mono">n = m ÷ M</span>, with <i>A</i><sub>r</sub>(He) = 4.00.
        "",
        // EN: Then <span class="mono">V = nRT ÷ P</span> with T = 293.15 K. With P in kPa, V is in dm<sup>3</sup>.
        "",
      ],
      // EN: <div class="worked__math">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>To 3 significant figures: <strong>12.1 dm<sup>3</sup></strong>.</p>
      solution: "",
    },

    // ── s1-5-q014 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q014": {
      // EN: <p>A 500 <span class="unit">cm3</span> flask contains nitrogen gas, <span class="chem">N2</span>, at 15.0 °C and 120 kPa. Calculate the mass of nitrogen in the flask, in g.</p>
      stem: "",
      hints: [
        // EN: Convert first: 500 cm<sup>3</sup> to dm<sup>3</sup>, and 15.0 °C to K.
        "",
        // EN: <span class="mono">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>
        "",
        // EN: Then <span class="mono">m = n × M</span>. Nitrogen gas is N<sub>2</sub>, so M = 28.02 g mol<sup>−1</sup>.
        "",
      ],
      // EN: <div class="worked__math">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class="worked__math">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class="worked__math">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class="worked__math">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>To 3 significant figures: <strong>0.702 g</strong>.</p>
      solution: "",
    },

    // ── s1-5-q015 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q015": {
      // EN: <p>0.412 g of an unknown gas occupies 185 <span class="unit">cm3</span> at 35.0 °C and 99.0 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "",
      hints: [
        // EN: Two links: the gas equation gives the amount, then molar mass is mass ÷ amount.
        "",
        // EN: <span class="mono">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>
        "",
      ],
      // EN: <div class="worked__math">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class="worked__math">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class="worked__math">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>57.6 g mol<sup>−1</sup></strong>.</p>
      solution: "",
    },

    // ── s1-5-q016 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q016": {
      // EN: <p>Which graph, for a fixed mass of an ideal gas, is a straight line that passes through the origin?</p>
      stem: "",
      options: [
        // EN: Pressure against volume, at constant temperature
        "",
        // EN: Pressure against 1/volume, at constant temperature
        "",
        // EN: Volume against temperature in °C, at constant pressure
        "",
        // EN: Pressure × volume against pressure, at constant temperature
        "",
      ],
      hints: [
        // EN: A straight line through the origin means the two plotted quantities are directly proportional.
        "",
      ],
      // EN: <p>At constant temperature <span class="mono">P = nRT × (1/V)</span>, so P is directly proportional to 1/V. Plotting P against 1/V gives a straight line through the origin with gradient nRT.</p>
      solution: "",
      misconception: {
        // EN (option A): P against V is a falling curve, because P is inversely proportional to V.
        "0": "",
        // EN (option C): This is a straight line, but it does not pass through the origin. At 0 °C the gas still has a volume. The line reaches zero volume at −273.15 °C.
        "2": "",
        // EN (option D): PV is constant at constant temperature, so this graph is a horizontal line, not a line through the origin.
        "3": "",
      },
    },

    // ── s1-5-q017 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q017": {
      // EN: <p>Which sketch shows how the volume of a fixed mass of an ideal gas (vertical axis) changes with its temperature in <strong>°C</strong> (horizontal axis) at constant pressure? In each sketch the vertical axis is drawn at 0 on the horizontal scale.</p>
      stem: "",
      options: [
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that starts at the origin" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L104 16" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that crosses the vertical axis above zero; extended back with a dashed line it meets the horizontal axis at a negative value" style="vertical-align:middle"><path d="M16 68 H112 M44 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L44 48" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><path d="M44 48 L104 5.1" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="40" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A curve that falls steeply and then levels off" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M24 12 C28 44 52 58 108 62" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A horizontal straight line" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 30 H104" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "",
      ],
      hints: [
        // EN: Does a gas have zero volume at 0 °C?
        "",
        // EN: Where would the volume of an ideal gas reach zero?
        "",
      ],
      // EN: <p>Volume is directly proportional to temperature in kelvin. On a Celsius axis the same straight line is shifted: it crosses the volume axis above zero at 0 °C, and extrapolates back to zero volume at −273.15 °C (absolute zero).</p>
      solution: "",
      misconception: {
        // EN (option A): This is the graph for temperature in kelvin. At 0 °C (273.15 K) a gas still has a volume, so the line cannot start at the origin.
        "0": "",
        // EN (option C): This is the shape of pressure against volume. Volume increases steadily with temperature.
        "2": "",
        // EN (option D): A horizontal line would mean the volume does not change on heating. At constant pressure a gas expands when heated.
        "3": "",
      },
    },

    // ── s1-5-q018 · mcq · exam · SL · Structure 1.5.2 · 1 mark
    "s1-5-q018": {
      // EN: <p>The boiling points of four substances at 100 kPa are shown.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">helium, <span class="chem">He</span></th><td class="num">4</td></tr><tr><th scope="row">nitrogen, <span class="chem">N2</span></th><td class="num">77</td></tr><tr><th scope="row">methane, <span class="chem">CH4</span></th><td class="num">112</td></tr><tr><th scope="row">ammonia, <span class="chem">NH3</span></th><td class="num">240</td></tr></tbody></table></div><p>Which gas would you expect to deviate <strong>most</strong> from ideal behaviour at 300 K and 100 kPa?</p>
      stem: "",
      options: [
        // EN: Helium
        "",
        // EN: Nitrogen
        "",
        // EN: Methane
        "",
        // EN: Ammonia
        "",
      ],
      hints: [
        // EN: A higher boiling point means stronger forces between the particles.
        "",
        // EN: Which assumption of the ideal gas model is about forces?
        "",
      ],
      // EN: <p>Ammonia has the highest boiling point, so it has the strongest intermolecular forces. The ideal gas model assumes no intermolecular forces, so ammonia fits the model least well. At 300 K it is also the gas closest to its own boiling point.</p>
      solution: "",
      misconception: {
        // EN (option A): Helium has the lowest boiling point, so the weakest forces between its particles. It is the closest to ideal of the four.
        "0": "",
        // EN (option B): Nitrogen boils at only 77 K, which shows its intermolecular forces are weak. At 300 K it behaves almost ideally.
        "1": "",
        // EN (option C): Methane has stronger forces than helium or nitrogen, but another gas in the table has a much higher boiling point.
        "2": "",
      },
    },

    // ── s1-5-q019 · short · exam · SL · Structure 1.5.2 · 2 marks
    "s1-5-q019": {
      // EN: <p>Explain why a real gas deviates from ideal gas behaviour at high pressure and at low temperature.</p>
      stem: "",
      hints: [
        // EN: Link each condition to one assumption of the ideal gas model that stops being true.
        "",
      ],
      // EN: <p>At high pressure the particles are close together, so the volume of the particles themselves is no longer negligible compared with the volume of the container. At low temperature the particles have less kinetic energy and move more slowly, so the intermolecular forces between them become significant.</p>
      answer: "",
      markscheme: [
        // EN: High pressure: particles are close together, so the volume of the particles is not negligible (compared with the volume of the gas/container).
        "",
        // EN: Low temperature: particles move more slowly / have lower kinetic energy, so intermolecular forces (attractions) become significant / are no longer negligible.
        "",
      ],
    },

    // ── s1-5-q020 · short · exam · SL · Structure 1.5.1 · 2 marks
    "s1-5-q020": {
      // EN: <p>State <strong>two</strong> assumptions of the ideal gas model.</p>
      stem: "",
      hints: [
        // EN: Tick any two of the four points. The maximum is 2 marks.
        "",
      ],
      // EN: <p>Any two of: the particles have negligible volume; there are no intermolecular forces between the particles; all collisions between particles are elastic; the gas consists of moving particles.</p>
      answer: "",
      markscheme: [
        // EN: The particles have negligible volume (compared with the volume of the container). Do not accept “the gas has no volume”.
        "",
        // EN: There are no intermolecular forces (no attractions or repulsions) between the particles.
        "",
        // EN: Collisions between particles are (perfectly) elastic / no kinetic energy is lost in collisions.
        "",
        // EN: The gas consists of moving particles.
        "",
      ],
    },

    // ── s1-5-q021 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q021": {
      // EN: <p>A student calculates the amount of gas in a 250 <span class="unit">cm3</span> flask at 101 kPa and 298 K. The student substitutes <span class="mono">P = 101</span>, <span class="mono">V = 250</span>, <span class="mono">R = 8.31</span> and <span class="mono">T = 298</span> into <span class="mono">n = PV ÷ RT</span>. How does the student’s answer compare with the correct amount?</p>
      stem: "",
      options: [
        // EN: It is correct.
        "",
        // EN: It is 1000 times too large.
        "",
        // EN: It is 1000 times too small.
        "",
        // EN: It is 10<sup>6</sup> times too large.
        "",
      ],
      hints: [
        // EN: Which volume unit goes with kPa when R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>?
        "",
      ],
      // EN: <p>With pressure in kPa, the volume must be in dm<sup>3</sup>: 250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>.</p><div class="worked__math">correct: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class="worked__math">student: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>The student’s value is 1000 times too large. More than 10 mol of gas in a small flask is a warning sign.</p>
      solution: "",
      misconception: {
        // EN (option A): kPa must be paired with dm<sup>3</sup>. The volume here was left in cm<sup>3</sup>, so the units are not consistent.
        "0": "",
        // EN (option C): The direction is wrong. V is on top of the fraction, and 250 is bigger than 0.250, so the answer comes out too large.
        "2": "",
        // EN (option D): A factor of 10<sup>6</sup> is the difference between cm<sup>3</sup> and m<sup>3</sup>. With kPa the matching unit is dm<sup>3</sup>, which is 1000 cm<sup>3</sup>.
        "3": "",
      },
    },

    // ── s1-5-q022 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q022": {
      // EN: <p>The temperature of a fixed mass of an ideal gas, measured in kelvin, is doubled. At the same time its volume is halved. By what factor does the pressure change?</p>
      stem: "",
      options: [
        // EN: × ¼
        "",
        // EN: × 1 (no change)
        "",
        // EN: × 2
        "",
        // EN: × 4
        "",
      ],
      hints: [
        // EN: Rearrange the combined gas law for P<sub>2</sub>, then put in T<sub>2</sub> = 2T<sub>1</sub> and V<sub>2</sub> = ½V<sub>1</sub>.
        "",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>
      solution: "",
      misconception: {
        // EN (option A): Both changes raise the pressure. You have inverted both effects.
        "0": "",
        // EN (option B): The two changes do not cancel. Heating raises the pressure, and so does squeezing the gas into a smaller volume.
        "1": "",
        // EN (option C): You have counted only one of the two changes. Each one doubles the pressure.
        "2": "",
      },
    },

    // ── s1-5-q023 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q023": {
      // EN: <p>0.0500 mol of an ideal gas occupies 1.50 <span class="unit">dm3</span> at a pressure of 95.0 kPa. Calculate the temperature of the gas in <strong>°C</strong>.</p>
      stem: "",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for T. The answer comes out in kelvin.
        "",
        // EN: <span class="mono">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>, then subtract 273.15.
        "",
      ],
      // EN: <div class="worked__math">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class="worked__math">T = 342.96… − 273.15 = 69.81… °C</div><p>To 3 significant figures: <strong>69.8 °C</strong>.</p>
      solution: "",
    },

    // ── s1-5-q024 · order · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q024": {
      // EN: <p>A student measures the mass of a volatile liquid, and the volume, temperature and pressure of its vapour. Put the steps in order to find the molecular formula from these data and the empirical formula.</p>
      stem: "",
      options: [
        // EN: Convert the temperature to kelvin and the volume to dm<sup>3</sup> (pressure in kPa).
        "",
        // EN: Calculate the amount of vapour using <span class="mono">n = PV ÷ RT</span>.
        "",
        // EN: Calculate the molar mass using <span class="mono">M = m ÷ n</span>.
        "",
        // EN: Divide the molar mass by the mass of one empirical formula unit.
        "",
        // EN: Multiply the subscripts in the empirical formula by the whole number obtained.
        "",
      ],
      hints: [
        // EN: You cannot use the gas equation until the units are consistent.
        "",
        // EN: The molar mass needs the amount of vapour, and the amount comes from the gas equation.
        "",
      ],
      // EN: <p>Units first, then the gas equation for the amount, then molar mass from mass ÷ amount. Comparing the molar mass with the empirical formula mass gives the whole-number multiple that turns the empirical formula into the molecular formula.</p>
      solution: "",
    },

    // ── s1-5-q025 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q025": {
      // EN: <p>Which sample of gas occupies the largest volume at STP?</p>
      stem: "",
      options: [
        // EN: 4.0 g of hydrogen, <span class="chem">H2</span>
        "",
        // EN: 28.0 g of nitrogen, <span class="chem">N2</span>
        "",
        // EN: 44.0 g of carbon dioxide, <span class="chem">CO2</span>
        "",
        // EN: 40.0 g of argon, <span class="chem">Ar</span>
        "",
      ],
      hints: [
        // EN: At the same temperature and pressure, volume depends only on the amount of gas in moles.
        "",
        // EN: Work out <span class="mono">n = m ÷ M</span> for each sample.
        "",
      ],
      // EN: <div class="worked__math">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class="worked__math">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>Hydrogen has about twice the amount, so about twice the volume (about 45 dm<sup>3</sup> against about 22.7 dm<sup>3</sup>).</p>
      solution: "",
      misconception: {
        // EN (option B): Gas volume depends on the amount in moles, not on the mass. 28.0 g of N<sub>2</sub> is about 1 mol.
        "1": "",
        // EN (option C): The largest mass does not mean the largest volume. 44.0 g of CO<sub>2</sub> is about 1 mol, and bigger molecules do not take up more room in an ideal gas.
        "2": "",
        // EN (option D): 40.0 g of argon is about 1 mol. Another sample contains about twice that amount.
        "3": "",
      },
    },

    // ── s1-5-q026 · multi · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q026": {
      // EN: <p>Select <strong>all</strong> the graphs that are straight lines through the origin for a fixed mass of an ideal gas.</p>
      stem: "",
      options: [
        // EN: P against 1/V, at constant temperature
        "",
        // EN: P against V, at constant temperature
        "",
        // EN: V against T in kelvin, at constant pressure
        "",
        // EN: V against T in °C, at constant pressure
        "",
        // EN: P against T in kelvin, at constant volume
        "",
        // EN: PV against P, at constant temperature
        "",
      ],
      hints: [
        // EN: A straight line through the origin means direct proportion.
        "",
        // EN: There are three correct answers.
        "",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>: P ∝ 1/V at constant T; V ∝ T (in K) at constant P; P ∝ T (in K) at constant V. Each of these direct proportions plots as a straight line through the origin.</p>
      solution: "",
      misconception: {
        // EN (option B): P against V is a curve. The inverse relationship only becomes a straight line when you plot P against 1/V.
        "1": "",
        // EN (option D): A straight line, but not through the origin: at 0 °C the gas still has a volume. The line meets the temperature axis at −273.15 °C.
        "3": "",
        // EN (option F): PV does not change at constant temperature, so this is a horizontal line.
        "5": "",
      },
    },

    // ── s1-5-q031 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q031": {
      // EN: <p>The molar volume of an ideal gas is 22.7 <span class="unit">dm3 mol-1</span> at STP. Use the ideal gas equation to calculate the molar volume of an ideal gas, in <span class="unit">dm3 mol-1</span>, at 25.0 °C and 100 kPa.</p>
      stem: "",
      hints: [
        // EN: Molar volume is the volume of exactly 1 mol. Put n = 1 mol into <span class="mono">V = nRT ÷ P</span>.
        "",
        // EN: <span class="mono">V = (1 × 8.31 × 298.15) ÷ 100</span>
        "",
      ],
      // EN: <div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>Molar volume = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>. It is larger than 22.7 because the gas is warmer. This is why 22.7 can only be used at STP.</p>
      solution: "",
    },

    // ── s1-5-q035 · short · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q035": {
      // EN: <p>The volume of a fixed mass of gas is measured at several temperatures between 0 °C and 100 °C at constant pressure. Describe the graph of volume against temperature in °C, and state what is found when the line is extrapolated to zero volume.</p>
      stem: "",
      hints: [
        // EN: Is the volume zero at 0 °C?
        "",
        // EN: What is special about −273.15 °C?
        "",
      ],
      // EN: <p>The graph is a straight line with a positive gradient that does not pass through the origin (the volume is not zero at 0 °C). Extrapolated back, the line reaches zero volume at about −273 °C, which is absolute zero (0 K).</p>
      answer: "",
      markscheme: [
        // EN: Straight line with positive gradient / volume increases linearly with temperature, not passing through the origin (positive intercept on the volume axis).
        "",
        // EN: Extrapolates to zero volume at −273(.15) °C / absolute zero / 0 K.
        "",
      ],
    },

    // ── s1-5-q027 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q027": {
      // EN: <p>A compound contains 52.2 % carbon, 13.1 % hydrogen and 34.7 % oxygen by mass. When 0.230 g of the compound is vaporised at 100.0 °C and 100 kPa, the vapour occupies 155 <span class="unit">cm3</span>.</p><p>Calculate the molar mass of the compound, in <span class="unit">g mol-1</span>. Then use the solution to check that you can also deduce its molecular formula.</p>
      stem: "",
      hints: [
        // EN: The molar mass comes from the gas data alone: find n with the gas equation, then M = m ÷ n.
        "",
        // EN: <span class="mono">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>
        "",
        // EN: For the formula: find the empirical formula from the percentages, then compare its mass with M.
        "",
      ],
      // EN: <div class="worked__math">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class="worked__math">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class="worked__math">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>Molecular formula: in 100 g there are</p><div class="worked__math">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class="worked__math">divide by 2.169: C 2.00 : H 5.98 : O 1.00, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1, so the molecular formula is also <strong>C<sub>2</sub>H<sub>6</sub>O</strong>.</p>
      solution: "",
    },

    // ── s1-5-q028 · mcq · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q028": {
      // EN: <p>A gaseous hydrocarbon has the empirical formula <span class="chem">CH2</span>. A 1.40 g sample occupies 0.755 <span class="unit">dm3</span> at 91.0 °C and 100 kPa. What is the molecular formula of the hydrocarbon?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH2</span>
        "",
        // EN: <span class="chem">C2H4</span>
        "",
        // EN: <span class="chem">C3H6</span>
        "",
        // EN: <span class="chem">C4H8</span>
        "",
      ],
      hints: [
        // EN: The conditions are not STP, so find the amount with <span class="mono">n = PV ÷ RT</span>.
        "",
        // EN: Then M = m ÷ n, and compare M with the mass of one CH<sub>2</sub> unit, 14.03 g mol<sup>−1</sup>.
        "",
      ],
      // EN: <div class="worked__math">T = 91.0 + 273.15 = 364.15 K</div><div class="worked__math">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class="worked__math">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class="worked__math">56.11… ÷ 14.03 = 4.00, so the molecular formula is (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>
      solution: "",
      misconception: {
        // EN (option A): A molar mass of about 14 g mol<sup>−1</sup> comes from putting 91.0 into the equation as the temperature. Convert to kelvin first: 91.0 °C = 364.15 K.
        "0": "",
        // EN (option B): The molar mass is about 56 g mol<sup>−1</sup>. Divide by the mass of one CH<sub>2</sub> unit (14.03 g mol<sup>−1</sup>), which gives 4 units, not 2.
        "1": "",
        // EN (option C): You get 42 g mol<sup>−1</sup> if you use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount. That value applies only at STP, and this gas is at 91.0 °C. Use the gas equation.
        "2": "",
      },
    },

    // ── s1-5-q029 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q029": {
      // EN: <p>A gas has a density of 1.25 <span class="unit">g dm-3</span> at 25.0 °C and 100 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "",
      hints: [
        // EN: A density of 1.25 g dm<sup>−3</sup> means that 1.00 dm<sup>3</sup> of the gas has a mass of 1.25 g.
        "",
        // EN: Find the amount of gas in 1.00 dm<sup>3</sup> with <span class="mono">n = PV ÷ RT</span>, then use M = m ÷ n.
        "",
      ],
      // EN: <p>Take exactly 1.00 dm<sup>3</sup> of the gas. Its mass is 1.25 g.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class="worked__math">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>31.0 g mol<sup>−1</sup></strong>.</p>
      solution: "",
    },

    // ── s1-5-q030 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q030": {
      // EN: <p>Sodium azide decomposes completely when heated:</p><p><span class="chem">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>Calculate the volume of nitrogen, in <span class="unit">dm3</span>, measured at 25.0 °C and 100 kPa, that is produced when 65.0 g of sodium azide decomposes.</p>
      stem: "",
      hints: [
        // EN: Start with the amount of sodium azide: <span class="mono">n = m ÷ M</span>, with M(NaN<sub>3</sub>) = 22.99 + 3(14.01).
        "",
        // EN: The equation says 2 mol of NaN<sub>3</sub> gives 3 mol of N<sub>2</sub>.
        "",
        // EN: The gas is not at STP (25.0 °C), so use <span class="mono">V = nRT ÷ P</span>.
        "",
      ],
      // EN: <div class="worked__math">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class="worked__math">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class="worked__math">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>To 3 significant figures: <strong>37.2 dm<sup>3</sup></strong>. Using 22.7 dm<sup>3</sup> mol<sup>−1</sup> would give 34.0 dm<sup>3</sup>, which is wrong because the gas is not at STP.</p>
      solution: "",
    },

    // ── s1-5-q032 · short · challenge · SL · Structure 1.5.2 · 3 marks
    "s1-5-q032": {
      // EN: <p>Helium boils at 4 K and ammonia boils at 240 K (both at 100 kPa). At 250 K and 100 kPa, the measured volume of 1 mol of helium agrees very closely with the value predicted by <span class="mono">PV = nRT</span>. The measured volume of 1 mol of ammonia does not agree as closely.</p><p>Explain this difference, referring to the assumptions of the ideal gas model.</p>
      stem: "",
      hints: [
        // EN: What does a boiling point tell you about the forces between particles?
        "",
        // EN: How far above its own boiling point is each gas at 250 K?
        "",
      ],
      // EN: <p>The much higher boiling point of ammonia shows that the intermolecular forces between ammonia molecules are much stronger than those between helium atoms. The ideal gas model assumes there are no intermolecular forces, so this assumption is less valid for ammonia. At 250 K ammonia is only just above its boiling point, so its particles are moving slowly enough for these forces to be significant, whereas helium is far above its boiling point and its very weak forces are negligible.</p>
      answer: "",
      markscheme: [
        // EN: Ammonia has (much) stronger intermolecular forces than helium (shown by its higher boiling point).
        "",
        // EN: The ideal gas model assumes no intermolecular forces (and negligible particle volume), so the assumption is less valid for ammonia.
        "",
        // EN: 250 K is a low temperature for ammonia / close to its boiling point, so its particles are slow enough for the forces to be significant; helium is far above its boiling point so its forces are negligible.
        "",
      ],
    },

    // ── s1-5-q033 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q033": {
      // EN: <p>In dry air, 0.934 % of the particles are argon atoms. This means 0.934 % of the total amount of gas, in mol, is argon. A 2.00 <span class="unit">dm3</span> flask is filled with dry air at 20.0 °C and 101 kPa. Calculate the mass of argon in the flask, in g.</p>
      stem: "",
      hints: [
        // EN: First find the total amount of gas in the flask with <span class="mono">n = PV ÷ RT</span>.
        "",
        // EN: 0.934 % of that amount is argon: multiply by 0.00934.
        "",
        // EN: Then <span class="mono">m = n × M</span> with <i>A</i><sub>r</sub>(Ar) = 39.95.
        "",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(air) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class="worked__math">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class="worked__math">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>To 3 significant figures: <strong>0.0309 g</strong>.</p>
      solution: "",
    },

    // ── s1-5-q034 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q034": {
      // EN: <p>A rigid 5.00 <span class="unit">dm3</span> cylinder contains gas at 300 kPa and 20.0 °C. Some gas is released until the pressure falls to 180 kPa. The temperature is still 20.0 °C. Calculate the amount of gas, in mol, that was released.</p>
      stem: "",
      hints: [
        // EN: The amount of gas changes, so the combined gas law does not apply. Use <span class="mono">n = PV ÷ RT</span> before and after.
        "",
        // EN: Shortcut: V and T are the same before and after, so the amount released is <span class="mono">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>.
        "",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(before) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class="worked__math">n(after) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class="worked__math">n(released) = 0.61574… − 0.36944… = 0.24629… mol</div><p>To 3 significant figures: <strong>0.246 mol</strong>.</p>
      solution: "",
    },

    // ── s1-5-q036 · numeric · challenge · SL · Structure 1.5.3 · 2 marks
    "s1-5-q036": {
      // EN: <p>A student changes the volume of a fixed mass of gas at a constant temperature of 25.0 °C and measures the pressure each time. A graph of pressure in kPa (vertical axis) against 1/volume in <span class="unit">dm-3</span> (horizontal axis) is a straight line through the origin. Its gradient is 62.0 <span class="unit">kPa dm3</span>.</p><p>Calculate the amount of gas, in mol.</p>
      stem: "",
      hints: [
        // EN: Write <span class="mono">PV = nRT</span> as P = (something) × (1/V). The “something” is the gradient.
        "",
        // EN: The gradient is nRT, so <span class="mono">n = gradient ÷ RT</span>. Use T in kelvin.
        "",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>, P = nRT × (1/V). So a graph of P against 1/V has gradient nRT.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = gradient ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>To 3 significant figures: <strong>0.0250 mol</strong>. kPa × dm<sup>3</sup> = J, so the units match R.</p>
      solution: "",
    },

  }
});
