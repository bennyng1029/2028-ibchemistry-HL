/* ==========================================================================
   Question bank: Structure 1.5 — Ideal gases (all SL; 1.5 has no AHL content)
   36 original questions: 10 foundation, 18 exam, 8 challenge.
   Schema and rules: docs/AUTHORING.md.  Data booklet values: R = 8.31 J K-1 mol-1,
   molar volume at STP = 22.7 dm3 mol-1 (273.15 K, 100 kPa), Ar to 2 d.p.
   Every number was recomputed with a script (see the builder's report).
   ========================================================================== */
(function () {
  'use strict';

  /* Small sketch graphs for options. Colours follow the text colour (currentColor). */
  function sketch(kind, label) {
    var s = '<svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="' + label + '" style="vertical-align:middle">';
    var yx = kind === 'offset' ? 44 : 16;
    s += '<path d="M16 68 H112 M' + yx + ' 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/>';
    if (kind === 'origin') s += '<path d="M16 68 L104 16" fill="none" stroke="currentColor" stroke-width="2.5"/>';
    if (kind === 'offset') s += '<path d="M16 68 L44 48" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><path d="M44 48 L104 5.1" fill="none" stroke="currentColor" stroke-width="2.5"/>';
    if (kind === 'curve') s += '<path d="M24 12 C28 44 52 58 108 62" fill="none" stroke="currentColor" stroke-width="2.5"/>';
    if (kind === 'flat') s += '<path d="M16 30 H104" fill="none" stroke="currentColor" stroke-width="2.5"/>';
    s += '<text x="' + (yx - 4) + '" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text>';
    return s + '</svg>';
  }

  S1.questions.register('s1-5', [

    /* ===================== FOUNDATION ===================== */
    {
      id: 's1-5-q001', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.1',
      stem: '<p>Which statement is an assumption of the ideal gas model?</p>',
      options: [
        'The particles attract each other weakly.',
        'A small amount of kinetic energy is lost in each collision.',
        'The particles have negligible volume.',
        'The particles have negligible mass.'
      ],
      answer: 2,
      misconception: {
        0: 'The model assumes there are no intermolecular forces at all, not weak ones. Weak attractions describe a real gas.',
        1: 'That would be an inelastic collision. The model assumes collisions are elastic, so no kinetic energy is lost overall.',
        3: 'Ideal gas particles do have mass. It is their volume that is taken to be negligible.'
      },
      hints: ['There are four assumptions: moving particles, negligible particle volume, no intermolecular forces, elastic collisions.'],
      solution: '<p>The ideal gas model assumes the particles themselves take up a negligible part of the volume of the container. It also assumes moving particles, no intermolecular forces and elastic collisions.</p>'
    },
    {
      id: 's1-5-q002', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'multi', marks: 1, syllabus: 'Structure 1.5.1',
      stem: '<p>Select <strong>all</strong> the assumptions of the ideal gas model.</p>',
      options: [
        'The gas consists of moving particles.',
        'All the particles move at the same speed.',
        'The particles have negligible volume.',
        'There are no intermolecular forces between the particles.',
        'The particles have negligible mass.',
        'All collisions between particles are elastic.'
      ],
      answer: [0, 2, 3, 5],
      misconception: {
        1: 'The model does not say this. The particles are moving, but nothing requires them all to have the same speed.',
        4: 'The particles have mass. A gas can be weighed. It is the volume of the particles that is negligible.'
      },
      hints: ['There are exactly four correct statements.', 'Two of the four are about the particles themselves (their volume, the forces between them). One is about collisions.'],
      solution: '<p>The four assumptions are: moving particles; negligible particle volume; no intermolecular forces; elastic collisions.</p>'
    },
    {
      id: 's1-5-q003', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.2',
      stem: '<p>Under which conditions does a real gas behave <strong>most</strong> like an ideal gas?</p>',
      options: [
        'High temperature and high pressure',
        'High temperature and low pressure',
        'Low temperature and high pressure',
        'Low temperature and low pressure'
      ],
      answer: 1,
      misconception: {
        0: 'The high temperature helps, but high pressure pushes the particles close together, so their own volume is no longer negligible.',
        2: 'These are the conditions where a real gas deviates most. Slow, crowded particles are where gases turn into liquids.',
        3: 'The low pressure helps, but at low temperature the particles move slowly, so intermolecular forces become significant.'
      },
      hints: ['When are the particles far apart? When are they moving too fast for attractions to matter?'],
      solution: '<p>At <strong>low pressure</strong> the particles are far apart, so their volume is negligible compared with the container. At <strong>high temperature</strong> they move fast, so intermolecular forces have little effect. Both assumptions of the model then hold well.</p>'
    },
    {
      id: 's1-5-q004', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 0.300 mol of an ideal gas at STP.</p>',
      answer: 6.81, tolerance: '1%', sigfigs: 3, unit: 'dm3',
      hints: ['The data booklet gives the molar volume of an ideal gas at STP.', '<span class="mono">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>'],
      solution: '<div class="worked__math">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>'
    },
    {
      id: 's1-5-q005', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A sample of argon occupies 4540 <span class="unit">cm3</span> at STP. Calculate the amount of argon, in mol.</p>',
      answer: 0.2, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: ['Convert the volume to dm<sup>3</sup> first: divide by 1000.', '<span class="mono">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>'],
      solution: '<div class="worked__math">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class="worked__math">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>'
    },
    {
      id: 's1-5-q006', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A fixed mass of an ideal gas is kept at constant temperature. Which description fits a graph of pressure (vertical axis) against volume (horizontal axis)?</p>',
      options: [
        'A straight line through the origin with a positive gradient',
        'A straight line with a negative gradient that reaches zero pressure',
        'A curve that falls steeply at first and then levels off, without touching either axis',
        'A horizontal straight line'
      ],
      answer: 2,
      misconception: {
        0: 'That would mean pressure is directly proportional to volume. Squeezing a gas into a smaller volume raises its pressure, so the two move in opposite directions.',
        1: 'Inverse proportion is not a straight line going down. The pressure halves each time the volume doubles, so it never reaches zero.',
        3: 'A horizontal line is the graph of PV against P. Pressure itself changes when the volume changes.'
      },
      hints: ['If the volume doubles, what happens to the pressure? And if it doubles again?'],
      solution: '<p>At constant temperature, <span class="mono">PV = constant</span>, so pressure is inversely proportional to volume. Each doubling of V halves P. This gives a falling curve that gets closer to both axes without touching them.</p>'
    },
    {
      id: 's1-5-q007', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>What is 250 <span class="unit">cm3</span> expressed in <span class="unit">m3</span>?</p>',
      options: [
        '<span class="mono">0.250 m<sup>3</sup></span>',
        '<span class="mono">2.50 m<sup>3</sup></span>',
        '<span class="mono">2.50 × 10<sup>−4</sup> m<sup>3</sup></span>',
        '<span class="mono">2.50 × 10<sup>8</sup> m<sup>3</sup></span>'
      ],
      answer: 2,
      misconception: {
        0: 'Dividing by 1000 gives the volume in dm<sup>3</sup>, not m<sup>3</sup>. You need to divide by 1000 again.',
        1: 'There are 100 cm in 1 m, but volume is length cubed: 1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>.',
        3: 'You multiplied by 10<sup>6</sup> instead of dividing. A cubic metre is much bigger than a cubic centimetre, so the number must get smaller.'
      },
      hints: ['1 m<sup>3</sup> = 1000 dm<sup>3</sup> and 1 dm<sup>3</sup> = 1000 cm<sup>3</sup>.'],
      solution: '<div class="worked__math">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class="worked__math">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>In one step: divide cm<sup>3</sup> by 10<sup>6</sup> to get m<sup>3</sup>.</p>'
    },
    {
      id: 's1-5-q008', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>Calculate the pressure, in kPa, of 1.00 mol of an ideal gas in a 10.0 <span class="unit">dm3</span> container at 300 K.</p>',
      answer: 249.3, tolerance: '1%', sigfigs: 3, unit: 'kPa',
      hints: ['Rearrange <span class="mono">PV = nRT</span> for P.', 'With V in dm<sup>3</sup>, the pressure comes out in kPa: <span class="mono">P = (1.00 × 8.31 × 300) ÷ 10.0</span>'],
      solution: '<div class="worked__math">P = nRT ÷ V</div><div class="worked__math">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>To 3 significant figures: <strong>249 kPa</strong>.</p>'
    },
    {
      id: 's1-5-q009', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>A fixed mass of an ideal gas is compressed to half its original volume at constant temperature. What happens to the pressure?</p>',
      options: ['It halves.', 'It stays the same.', 'It doubles.', 'It becomes four times larger.'],
      answer: 2,
      misconception: {
        0: 'That would be direct proportion. Pressure and volume are inversely proportional: when one goes down, the other goes up.',
        1: 'The same particles now hit a smaller wall area more often, so the pressure must rise.',
        3: 'The relationship is P ∝ 1/V, not 1/V<sup>2</sup>. Halving V multiplies P by 2, not 4.'
      },
      hints: ['At constant temperature, <span class="mono">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>.'],
      solution: '<div class="worked__math">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>The pressure doubles.</p>'
    },
    {
      id: 's1-5-q010', topic: 's1-5', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>A gas occupies 3.00 <span class="unit">dm3</span> at 300 K. It is heated to 450 K at constant pressure. Calculate the new volume, in <span class="unit">dm3</span>.</p>',
      answer: 4.5, tolerance: '1%', sigfigs: 3, unit: 'dm3',
      hints: ['The pressure is constant, so it cancels from the combined gas law.', '<span class="mono">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>'],
      solution: '<div class="worked__math">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class="worked__math">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>'
    },

    /* ===================== EXAM STANDARD ===================== */
    {
      id: 's1-5-q011', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>A sealed, rigid container of gas is heated from 25 °C to 50 °C. What happens to the pressure of the gas?</p>',
      options: ['It doubles.', 'It increases by about 8 %.', 'It halves.', 'It stays the same because the container is rigid.'],
      answer: 1,
      misconception: {
        0: 'You used the Celsius values. Pressure is proportional to temperature in kelvin: 298 K to 323 K is far from a doubling.',
        2: 'Pressure and temperature are directly proportional, so heating raises the pressure. Also check you used kelvin.',
        3: 'A rigid container keeps the volume constant, not the pressure. Faster particles hit the walls harder and more often.'
      },
      hints: ['Convert both temperatures to kelvin before comparing them.', 'At constant volume, <span class="mono">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>.'],
      solution: '<div class="worked__math">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class="worked__math">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>The pressure rises by about 8 %.</p>'
    },
    {
      id: 's1-5-q012', topic: 's1-5', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>A gas sample has a volume of 450 <span class="unit">cm3</span> at 27.0 °C and 98.0 kPa. Calculate the volume, in <span class="unit">cm3</span>, that the same sample would occupy at STP.</p>',
      answer: 401.32983508245877, tolerance: '1%', sigfigs: 3, unit: 'cm3',
      hints: ['STP is 273.15 K and 100 kPa. Use the combined gas law.', 'T<sub>1</sub> = 300.15 K. <span class="mono">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>'],
      solution: '<div class="worked__math">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class="worked__math">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class="worked__math">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>To 3 significant figures: <strong>401 cm<sup>3</sup></strong>. Cooling and a slightly higher pressure both make the volume smaller, so this is sensible.</p>'
    },
    {
      id: 's1-5-q013', topic: 's1-5', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 2.00 g of helium at 20.0 °C and 101 kPa.</p>',
      answer: 12.059784653465346, tolerance: '1%', sigfigs: 3, unit: 'dm3',
      hints: ['Find the amount of helium first: <span class="mono">n = m ÷ M</span>, with <i>A</i><sub>r</sub>(He) = 4.00.', 'Then <span class="mono">V = nRT ÷ P</span> with T = 293.15 K. With P in kPa, V is in dm<sup>3</sup>.'],
      solution: '<div class="worked__math">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>To 3 significant figures: <strong>12.1 dm<sup>3</sup></strong>.</p>'
    },
    {
      id: 's1-5-q014', topic: 's1-5', level: 'sl', tier: 'exam', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>A 500 <span class="unit">cm3</span> flask contains nitrogen gas, <span class="chem">N2</span>, at 15.0 °C and 120 kPa. Calculate the mass of nitrogen in the flask, in g.</p>',
      answer: 0.7021012296167948, tolerance: '1%', sigfigs: 3, unit: 'g',
      hints: ['Convert first: 500 cm<sup>3</sup> to dm<sup>3</sup>, and 15.0 °C to K.', '<span class="mono">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>', 'Then <span class="mono">m = n × M</span>. Nitrogen gas is N<sub>2</sub>, so M = 28.02 g mol<sup>−1</sup>.'],
      solution: '<div class="worked__math">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class="worked__math">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class="worked__math">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class="worked__math">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>To 3 significant figures: <strong>0.702 g</strong>.</p>'
    },
    {
      id: 's1-5-q015', topic: 's1-5', level: 'sl', tier: 'exam', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>0.412 g of an unknown gas occupies 185 <span class="unit">cm3</span> at 35.0 °C and 99.0 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>',
      answer: 57.604112366912354, tolerance: '1%', sigfigs: 3, unit: 'g mol-1',
      hints: ['Two links: the gas equation gives the amount, then molar mass is mass ÷ amount.', '<span class="mono">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>'],
      solution: '<div class="worked__math">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class="worked__math">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class="worked__math">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>57.6 g mol<sup>−1</sup></strong>.</p>'
    },
    {
      id: 's1-5-q016', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>Which graph, for a fixed mass of an ideal gas, is a straight line that passes through the origin?</p>',
      options: [
        'Pressure against volume, at constant temperature',
        'Pressure against 1/volume, at constant temperature',
        'Volume against temperature in °C, at constant pressure',
        'Pressure × volume against pressure, at constant temperature'
      ],
      answer: 1,
      misconception: {
        0: 'P against V is a falling curve, because P is inversely proportional to V.',
        2: 'This is a straight line, but it does not pass through the origin. At 0 °C the gas still has a volume. The line reaches zero volume at −273.15 °C.',
        3: 'PV is constant at constant temperature, so this graph is a horizontal line, not a line through the origin.'
      },
      hints: ['A straight line through the origin means the two plotted quantities are directly proportional.'],
      solution: '<p>At constant temperature <span class="mono">P = nRT × (1/V)</span>, so P is directly proportional to 1/V. Plotting P against 1/V gives a straight line through the origin with gradient nRT.</p>'
    },
    {
      id: 's1-5-q017', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>Which sketch shows how the volume of a fixed mass of an ideal gas (vertical axis) changes with its temperature in <strong>°C</strong> (horizontal axis) at constant pressure? In each sketch the vertical axis is drawn at 0 on the horizontal scale.</p>',
      options: [
        sketch('origin', 'A straight line with positive gradient that starts at the origin') ,
        sketch('offset', 'A straight line with positive gradient that crosses the vertical axis above zero; extended back with a dashed line it meets the horizontal axis at a negative value'),
        sketch('curve', 'A curve that falls steeply and then levels off'),
        sketch('flat', 'A horizontal straight line')
      ],
      answer: 1,
      misconception: {
        0: 'This is the graph for temperature in kelvin. At 0 °C (273.15 K) a gas still has a volume, so the line cannot start at the origin.',
        2: 'This is the shape of pressure against volume. Volume increases steadily with temperature.',
        3: 'A horizontal line would mean the volume does not change on heating. At constant pressure a gas expands when heated.'
      },
      hints: ['Does a gas have zero volume at 0 °C?', 'Where would the volume of an ideal gas reach zero?'],
      solution: '<p>Volume is directly proportional to temperature in kelvin. On a Celsius axis the same straight line is shifted: it crosses the volume axis above zero at 0 °C, and extrapolates back to zero volume at −273.15 °C (absolute zero).</p>'
    },
    {
      id: 's1-5-q018', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.2',
      stem: '<p>The boiling points of four substances at 100 kPa are shown.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">helium, <span class="chem">He</span></th><td class="num">4</td></tr><tr><th scope="row">nitrogen, <span class="chem">N2</span></th><td class="num">77</td></tr><tr><th scope="row">methane, <span class="chem">CH4</span></th><td class="num">112</td></tr><tr><th scope="row">ammonia, <span class="chem">NH3</span></th><td class="num">240</td></tr></tbody></table></div><p>Which gas would you expect to deviate <strong>most</strong> from ideal behaviour at 300 K and 100 kPa?</p>',
      options: ['Helium', 'Nitrogen', 'Methane', 'Ammonia'],
      answer: 3,
      misconception: {
        0: 'Helium has the lowest boiling point, so the weakest forces between its particles. It is the closest to ideal of the four.',
        1: 'Nitrogen boils at only 77 K, which shows its intermolecular forces are weak. At 300 K it behaves almost ideally.',
        2: 'Methane has stronger forces than helium or nitrogen, but another gas in the table has a much higher boiling point.'
      },
      hints: ['A higher boiling point means stronger forces between the particles.', 'Which assumption of the ideal gas model is about forces?'],
      solution: '<p>Ammonia has the highest boiling point, so it has the strongest intermolecular forces. The ideal gas model assumes no intermolecular forces, so ammonia fits the model least well. At 300 K it is also the gas closest to its own boiling point.</p>'
    },
    {
      id: 's1-5-q019', topic: 's1-5', level: 'sl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 1.5.2',
      stem: '<p>Explain why a real gas deviates from ideal gas behaviour at high pressure and at low temperature.</p>',
      answer: '<p>At high pressure the particles are close together, so the volume of the particles themselves is no longer negligible compared with the volume of the container. At low temperature the particles have less kinetic energy and move more slowly, so the intermolecular forces between them become significant.</p>',
      markscheme: [
        'High pressure: particles are close together, so the volume of the particles is not negligible (compared with the volume of the gas/container).',
        'Low temperature: particles move more slowly / have lower kinetic energy, so intermolecular forces (attractions) become significant / are no longer negligible.'
      ],
      hints: ['Link each condition to one assumption of the ideal gas model that stops being true.']
    },
    {
      id: 's1-5-q020', topic: 's1-5', level: 'sl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 1.5.1',
      stem: '<p>State <strong>two</strong> assumptions of the ideal gas model.</p>',
      answer: '<p>Any two of: the particles have negligible volume; there are no intermolecular forces between the particles; all collisions between particles are elastic; the gas consists of moving particles.</p>',
      markscheme: [
        'The particles have negligible volume (compared with the volume of the container). Do not accept “the gas has no volume”.',
        'There are no intermolecular forces (no attractions or repulsions) between the particles.',
        'Collisions between particles are (perfectly) elastic / no kinetic energy is lost in collisions.',
        'The gas consists of moving particles.'
      ],
      hints: ['Tick any two of the four points. The maximum is 2 marks.']
    },
    {
      id: 's1-5-q021', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>A student calculates the amount of gas in a 250 <span class="unit">cm3</span> flask at 101 kPa and 298 K. The student substitutes <span class="mono">P = 101</span>, <span class="mono">V = 250</span>, <span class="mono">R = 8.31</span> and <span class="mono">T = 298</span> into <span class="mono">n = PV ÷ RT</span>. How does the student’s answer compare with the correct amount?</p>',
      options: [
        'It is correct.',
        'It is 1000 times too large.',
        'It is 1000 times too small.',
        'It is 10<sup>6</sup> times too large.'
      ],
      answer: 1,
      misconception: {
        0: 'kPa must be paired with dm<sup>3</sup>. The volume here was left in cm<sup>3</sup>, so the units are not consistent.',
        2: 'The direction is wrong. V is on top of the fraction, and 250 is bigger than 0.250, so the answer comes out too large.',
        3: 'A factor of 10<sup>6</sup> is the difference between cm<sup>3</sup> and m<sup>3</sup>. With kPa the matching unit is dm<sup>3</sup>, which is 1000 cm<sup>3</sup>.'
      },
      hints: ['Which volume unit goes with kPa when R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>?'],
      solution: '<p>With pressure in kPa, the volume must be in dm<sup>3</sup>: 250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>.</p><div class="worked__math">correct: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class="worked__math">student: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>The student’s value is 1000 times too large. More than 10 mol of gas in a small flask is a warning sign.</p>'
    },
    {
      id: 's1-5-q022', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.4',
      stem: '<p>The temperature of a fixed mass of an ideal gas, measured in kelvin, is doubled. At the same time its volume is halved. By what factor does the pressure change?</p>',
      options: ['× ¼', '× 1 (no change)', '× 2', '× 4'],
      answer: 3,
      misconception: {
        0: 'Both changes raise the pressure. You have inverted both effects.',
        1: 'The two changes do not cancel. Heating raises the pressure, and so does squeezing the gas into a smaller volume.',
        2: 'You have counted only one of the two changes. Each one doubles the pressure.'
      },
      hints: ['Rearrange the combined gas law for P<sub>2</sub>, then put in T<sub>2</sub> = 2T<sub>1</sub> and V<sub>2</sub> = ½V<sub>1</sub>.'],
      solution: '<div class="worked__math">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>'
    },
    {
      id: 's1-5-q023', topic: 's1-5', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>0.0500 mol of an ideal gas occupies 1.50 <span class="unit">dm3</span> at a pressure of 95.0 kPa. Calculate the temperature of the gas in <strong>°C</strong>.</p>',
      answer: 69.81028880866427, tolerance: '1%', sigfigs: 3, unit: '°C',
      hints: ['Rearrange <span class="mono">PV = nRT</span> for T. The answer comes out in kelvin.', '<span class="mono">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>, then subtract 273.15.'],
      solution: '<div class="worked__math">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class="worked__math">T = 342.96… − 273.15 = 69.81… °C</div><p>To 3 significant figures: <strong>69.8 °C</strong>.</p>'
    },
    {
      id: 's1-5-q024', topic: 's1-5', level: 'sl', tier: 'exam', type: 'order', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>A student measures the mass of a volatile liquid, and the volume, temperature and pressure of its vapour. Put the steps in order to find the molecular formula from these data and the empirical formula.</p>',
      options: [
        'Convert the temperature to kelvin and the volume to dm<sup>3</sup> (pressure in kPa).',
        'Calculate the amount of vapour using <span class="mono">n = PV ÷ RT</span>.',
        'Calculate the molar mass using <span class="mono">M = m ÷ n</span>.',
        'Divide the molar mass by the mass of one empirical formula unit.',
        'Multiply the subscripts in the empirical formula by the whole number obtained.'
      ],
      hints: ['You cannot use the gas equation until the units are consistent.', 'The molar mass needs the amount of vapour, and the amount comes from the gas equation.'],
      solution: '<p>Units first, then the gas equation for the amount, then molar mass from mass ÷ amount. Comparing the molar mass with the empirical formula mass gives the whole-number multiple that turns the empirical formula into the molecular formula.</p>'
    },
    {
      id: 's1-5-q025', topic: 's1-5', level: 'sl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>Which sample of gas occupies the largest volume at STP?</p>',
      options: [
        '4.0 g of hydrogen, <span class="chem">H2</span>',
        '28.0 g of nitrogen, <span class="chem">N2</span>',
        '44.0 g of carbon dioxide, <span class="chem">CO2</span>',
        '40.0 g of argon, <span class="chem">Ar</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Gas volume depends on the amount in moles, not on the mass. 28.0 g of N<sub>2</sub> is about 1 mol.',
        2: 'The largest mass does not mean the largest volume. 44.0 g of CO<sub>2</sub> is about 1 mol, and bigger molecules do not take up more room in an ideal gas.',
        3: '40.0 g of argon is about 1 mol. Another sample contains about twice that amount.'
      },
      hints: ['At the same temperature and pressure, volume depends only on the amount of gas in moles.', 'Work out <span class="mono">n = m ÷ M</span> for each sample.'],
      solution: '<div class="worked__math">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class="worked__math">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>Hydrogen has about twice the amount, so about twice the volume (about 45 dm<sup>3</sup> against about 22.7 dm<sup>3</sup>).</p>'
    },
    {
      id: 's1-5-q026', topic: 's1-5', level: 'sl', tier: 'exam', type: 'multi', marks: 1, syllabus: 'Structure 1.5.3',
      stem: '<p>Select <strong>all</strong> the graphs that are straight lines through the origin for a fixed mass of an ideal gas.</p>',
      options: [
        'P against 1/V, at constant temperature',
        'P against V, at constant temperature',
        'V against T in kelvin, at constant pressure',
        'V against T in °C, at constant pressure',
        'P against T in kelvin, at constant volume',
        'PV against P, at constant temperature'
      ],
      answer: [0, 2, 4],
      misconception: {
        1: 'P against V is a curve. The inverse relationship only becomes a straight line when you plot P against 1/V.',
        3: 'A straight line, but not through the origin: at 0 °C the gas still has a volume. The line meets the temperature axis at −273.15 °C.',
        5: 'PV does not change at constant temperature, so this is a horizontal line.'
      },
      hints: ['A straight line through the origin means direct proportion.', 'There are three correct answers.'],
      solution: '<p>From <span class="mono">PV = nRT</span>: P ∝ 1/V at constant T; V ∝ T (in K) at constant P; P ∝ T (in K) at constant V. Each of these direct proportions plots as a straight line through the origin.</p>'
    },
    {
      id: 's1-5-q031', topic: 's1-5', level: 'sl', tier: 'exam', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>The molar volume of an ideal gas is 22.7 <span class="unit">dm3 mol-1</span> at STP. Use the ideal gas equation to calculate the molar volume of an ideal gas, in <span class="unit">dm3 mol-1</span>, at 25.0 °C and 100 kPa.</p>',
      answer: 24.776265, tolerance: '1%', sigfigs: 3, unit: 'dm3 mol-1',
      hints: ['Molar volume is the volume of exactly 1 mol. Put n = 1 mol into <span class="mono">V = nRT ÷ P</span>.', '<span class="mono">V = (1 × 8.31 × 298.15) ÷ 100</span>'],
      solution: '<div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>Molar volume = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>. It is larger than 22.7 because the gas is warmer. This is why 22.7 can only be used at STP.</p>'
    },
    {
      id: 's1-5-q035', topic: 's1-5', level: 'sl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>The volume of a fixed mass of gas is measured at several temperatures between 0 °C and 100 °C at constant pressure. Describe the graph of volume against temperature in °C, and state what is found when the line is extrapolated to zero volume.</p>',
      answer: '<p>The graph is a straight line with a positive gradient that does not pass through the origin (the volume is not zero at 0 °C). Extrapolated back, the line reaches zero volume at about −273 °C, which is absolute zero (0 K).</p>',
      markscheme: [
        'Straight line with positive gradient / volume increases linearly with temperature, not passing through the origin (positive intercept on the volume axis).',
        'Extrapolates to zero volume at −273(.15) °C / absolute zero / 0 K.'
      ],
      hints: ['Is the volume zero at 0 °C?', 'What is special about −273.15 °C?']
    },

    /* ===================== CHALLENGE ===================== */
    {
      id: 's1-5-q027', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>A compound contains 52.2 % carbon, 13.1 % hydrogen and 34.7 % oxygen by mass. When 0.230 g of the compound is vaporised at 100.0 °C and 100 kPa, the vapour occupies 155 <span class="unit">cm3</span>.</p><p>Calculate the molar mass of the compound, in <span class="unit">g mol-1</span>. Then use the solution to check that you can also deduce its molecular formula.</p>',
      answer: 46.013006129032256, tolerance: '1%', sigfigs: 3, unit: 'g mol-1',
      hints: ['The molar mass comes from the gas data alone: find n with the gas equation, then M = m ÷ n.', '<span class="mono">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>', 'For the formula: find the empirical formula from the percentages, then compare its mass with M.'],
      solution: '<div class="worked__math">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class="worked__math">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class="worked__math">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>Molecular formula: in 100 g there are</p><div class="worked__math">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class="worked__math">divide by 2.169: C 2.00 : H 5.98 : O 1.00, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1, so the molecular formula is also <strong>C<sub>2</sub>H<sub>6</sub>O</strong>.</p>'
    },
    {
      id: 's1-5-q028', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'mcq', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>A gaseous hydrocarbon has the empirical formula <span class="chem">CH2</span>. A 1.40 g sample occupies 0.755 <span class="unit">dm3</span> at 91.0 °C and 100 kPa. What is the molecular formula of the hydrocarbon?</p>',
      options: ['<span class="chem">CH2</span>', '<span class="chem">C2H4</span>', '<span class="chem">C3H6</span>', '<span class="chem">C4H8</span>'],
      answer: 3,
      misconception: {
        0: 'A molar mass of about 14 g mol<sup>−1</sup> comes from putting 91.0 into the equation as the temperature. Convert to kelvin first: 91.0 °C = 364.15 K.',
        1: 'The molar mass is about 56 g mol<sup>−1</sup>. Divide by the mass of one CH<sub>2</sub> unit (14.03 g mol<sup>−1</sup>), which gives 4 units, not 2.',
        2: 'You get 42 g mol<sup>−1</sup> if you use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount. That value applies only at STP, and this gas is at 91.0 °C. Use the gas equation.'
      },
      hints: ['The conditions are not STP, so find the amount with <span class="mono">n = PV ÷ RT</span>.', 'Then M = m ÷ n, and compare M with the mass of one CH<sub>2</sub> unit, 14.03 g mol<sup>−1</sup>.'],
      solution: '<div class="worked__math">T = 91.0 + 273.15 = 364.15 K</div><div class="worked__math">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class="worked__math">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class="worked__math">56.11… ÷ 14.03 = 4.00, so the molecular formula is (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>'
    },
    {
      id: 's1-5-q029', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.4',
      stem: '<p>A gas has a density of 1.25 <span class="unit">g dm-3</span> at 25.0 °C and 100 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>',
      answer: 30.97033125, tolerance: '1%', sigfigs: 3, unit: 'g mol-1',
      hints: ['A density of 1.25 g dm<sup>−3</sup> means that 1.00 dm<sup>3</sup> of the gas has a mass of 1.25 g.', 'Find the amount of gas in 1.00 dm<sup>3</sup> with <span class="mono">n = PV ÷ RT</span>, then use M = m ÷ n.'],
      solution: '<p>Take exactly 1.00 dm<sup>3</sup> of the gas. Its mass is 1.25 g.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class="worked__math">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>31.0 g mol<sup>−1</sup></strong>.</p>'
    },
    {
      id: 's1-5-q030', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>Sodium azide decomposes completely when heated:</p><p><span class="chem">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>Calculate the volume of nitrogen, in <span class="unit">dm3</span>, measured at 25.0 °C and 100 kPa, that is produced when 65.0 g of sodium azide decomposes.</p>',
      answer: 37.15296581820978, tolerance: '1%', sigfigs: 3, unit: 'dm3',
      hints: ['Start with the amount of sodium azide: <span class="mono">n = m ÷ M</span>, with M(NaN<sub>3</sub>) = 22.99 + 3(14.01).', 'The equation says 2 mol of NaN<sub>3</sub> gives 3 mol of N<sub>2</sub>.', 'The gas is not at STP (25.0 °C), so use <span class="mono">V = nRT ÷ P</span>.'],
      solution: '<div class="worked__math">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class="worked__math">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class="worked__math">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>To 3 significant figures: <strong>37.2 dm<sup>3</sup></strong>. Using 22.7 dm<sup>3</sup> mol<sup>−1</sup> would give 34.0 dm<sup>3</sup>, which is wrong because the gas is not at STP.</p>'
    },
    {
      id: 's1-5-q032', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'short', marks: 3, syllabus: 'Structure 1.5.2',
      stem: '<p>Helium boils at 4 K and ammonia boils at 240 K (both at 100 kPa). At 250 K and 100 kPa, the measured volume of 1 mol of helium agrees very closely with the value predicted by <span class="mono">PV = nRT</span>. The measured volume of 1 mol of ammonia does not agree as closely.</p><p>Explain this difference, referring to the assumptions of the ideal gas model.</p>',
      answer: '<p>The much higher boiling point of ammonia shows that the intermolecular forces between ammonia molecules are much stronger than those between helium atoms. The ideal gas model assumes there are no intermolecular forces, so this assumption is less valid for ammonia. At 250 K ammonia is only just above its boiling point, so its particles are moving slowly enough for these forces to be significant, whereas helium is far above its boiling point and its very weak forces are negligible.</p>',
      markscheme: [
        'Ammonia has (much) stronger intermolecular forces than helium (shown by its higher boiling point).',
        'The ideal gas model assumes no intermolecular forces (and negligible particle volume), so the assumption is less valid for ammonia.',
        '250 K is a low temperature for ammonia / close to its boiling point, so its particles are slow enough for the forces to be significant; helium is far above its boiling point so its forces are negligible.'
      ],
      hints: ['What does a boiling point tell you about the forces between particles?', 'How far above its own boiling point is each gas at 250 K?']
    },
    {
      id: 's1-5-q033', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>In dry air, 0.934 % of the particles are argon atoms. This means 0.934 % of the total amount of gas, in mol, is argon. A 2.00 <span class="unit">dm3</span> flask is filled with dry air at 20.0 °C and 101 kPa. Calculate the mass of argon in the flask, in g.</p>',
      answer: 0.030940270553900917, tolerance: '1%', sigfigs: 3, unit: 'g',
      hints: ['First find the total amount of gas in the flask with <span class="mono">n = PV ÷ RT</span>.', '0.934 % of that amount is argon: multiply by 0.00934.', 'Then <span class="mono">m = n × M</span> with <i>A</i><sub>r</sub>(Ar) = 39.95.'],
      solution: '<div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(air) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class="worked__math">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class="worked__math">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>To 3 significant figures: <strong>0.0309 g</strong>.</p>'
    },
    {
      id: 's1-5-q034', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3, syllabus: 'Structure 1.5.4',
      stem: '<p>A rigid 5.00 <span class="unit">dm3</span> cylinder contains gas at 300 kPa and 20.0 °C. Some gas is released until the pressure falls to 180 kPa. The temperature is still 20.0 °C. Calculate the amount of gas, in mol, that was released.</p>',
      answer: 0.2462976840013029, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: ['The amount of gas changes, so the combined gas law does not apply. Use <span class="mono">n = PV ÷ RT</span> before and after.', 'Shortcut: V and T are the same before and after, so the amount released is <span class="mono">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>.'],
      solution: '<div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(before) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class="worked__math">n(after) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class="worked__math">n(released) = 0.61574… − 0.36944… = 0.24629… mol</div><p>To 3 significant figures: <strong>0.246 mol</strong>.</p>'
    },
    {
      id: 's1-5-q036', topic: 's1-5', level: 'sl', tier: 'challenge', type: 'numeric', marks: 2, syllabus: 'Structure 1.5.3',
      stem: '<p>A student changes the volume of a fixed mass of gas at a constant temperature of 25.0 °C and measures the pressure each time. A graph of pressure in kPa (vertical axis) against 1/volume in <span class="unit">dm-3</span> (horizontal axis) is a straight line through the origin. Its gradient is 62.0 <span class="unit">kPa dm3</span>.</p><p>Calculate the amount of gas, in mol.</p>',
      answer: 0.025023959, tolerance: '1%', sigfigs: 3, unit: 'mol',
      hints: ['Write <span class="mono">PV = nRT</span> as P = (something) × (1/V). The “something” is the gradient.', 'The gradient is nRT, so <span class="mono">n = gradient ÷ RT</span>. Use T in kelvin.'],
      solution: '<p>From <span class="mono">PV = nRT</span>, P = nRT × (1/V). So a graph of P against 1/V has gradient nRT.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = gradient ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>To 3 significant figures: <strong>0.0250 mol</strong>. kPa × dm<sup>3</sup> = J, so the units match R.</p>'
    }
  ]);
})();
