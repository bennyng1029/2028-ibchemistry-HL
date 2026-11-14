/* ==========================================================================
   Question bank: Lab 9 — Identifying the type of bonding from properties
   14 original Paper 1B style questions. All SL. Schema: docs/AUTHORING.md §4.
   Electronegativities from the data booklet (section 9): Ca 1.0, Al 1.6,
   Cl 3.2. Checked: CaCl2 Δχ = 2.2; AlCl3 average = 2.4;
   repeats 18.2, 18.8, 18.5 mA → mean 18.5, ±0.3 mA, 1.6 %.
   ========================================================================== */
(function () {
  'use strict';
  function M(line) { return '<div class="worked__math">' + line + '</div>'; }
  function C(f) { return '<span class="chem">' + f + '</span>'; }
  var ID = 'lab-bonding-properties';

  var TABLE1 = '<div class="table-scroll"><table class="data"><caption>Test results (control, distilled water: 0.1 mA)</caption>' +
    '<thead><tr><th scope="col">Solid</th><th scope="col">Melting</th><th scope="col" class="num">Solid / mA</th><th scope="col" class="num">With water / mA</th></tr></thead><tbody>' +
    '<tr><th scope="row">A</th><td>melts below 100 °C</td><td class="num">0.0</td><td class="num">0.1</td></tr>' +
    '<tr><th scope="row">B</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">21.7</td></tr>' +
    '<tr><th scope="row">C</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">0.1</td></tr>' +
    '<tr><th scope="row">D</th><td>does not melt in a Bunsen flame</td><td class="num">59.4</td><td class="num">0.1</td></tr>' +
    '</tbody></table></div>';

  S1.questions.register(ID, [
    {
      id: ID + '-q001', topic: ID, level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Four solids were tested.</p>' + TABLE1 + '<p>Which solid is most likely to be ionic?</p>',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      misconception: {
        0: 'A low melting point and no current in any test fit a covalent molecular solid, with weak forces between molecules.',
        2: 'C has a high melting point but its mixture with water reads the same as the control. No ions are released, so it fits a covalent network.',
        3: 'D conducts as a solid. Ions in a lattice are fixed, so an ionic solid cannot do this. D is a metal (or graphite).'
      },
      hints: ['An ionic solid does not conduct as a solid. When does it conduct?'],
      solution: '<p>B has a high melting point, does not conduct as a solid, and its mixture with water conducts far more than distilled water. This is the pattern of an ionic lattice: the ions are fixed in the solid but free to move once the solid dissolves.</p>'
    },
    {
      id: ID + '-q002', topic: ID, level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Why does solid potassium iodide not conduct electricity?</p>',
      options: [
        'It contains no charged particles.',
        'Its ions are held in fixed positions in the lattice.',
        'Its electrons are all held in covalent bonds.',
        'Its ions are too large to move.'
      ],
      answer: 1,
      misconception: {
        0: 'Potassium iodide is made of K<sup>+</sup> and I<sup>−</sup> ions. The charged particles are there, but they cannot move.',
        2: 'Potassium iodide is ionic, not covalent. Conduction in an ionic compound is by moving ions, not electrons.',
        3: 'Size is not the reason. The same ions move freely when the solid is melted or dissolved.'
      },
      hints: ['To conduct, a substance needs charged particles that are free to move.'],
      solution: '<p>Solid potassium iodide contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate, so they cannot carry charge through the solid.</p>'
    },
    {
      id: ID + '-q003', topic: ID, level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Sodium chloride does not conduct as a solid, but a mixture of sodium chloride and water conducts. Explain this difference.</p>',
      answer: '<p>In the solid, the ions are held in fixed positions in the lattice, so they cannot move. When sodium chloride dissolves, the lattice breaks up and the ions are free to move through the solution, so they can carry charge.</p>',
      markscheme: [
        'Solid: ions in fixed positions / cannot move. Do not accept: “no ions” or “no free electrons” alone.',
        'In solution: ions are free to move (and carry charge). Do not accept: “electrons move”.'
      ],
      hints: ['Both states contain the same ions. What is different about them?']
    },
    {
      id: ID + '-q004', topic: ID, level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.7',
      stem: '<p>An unknown grey solid conducts electricity as a solid, does not melt in a Bunsen flame, and leaves a grey mark when tapped. It is graphite. Why does graphite conduct?</p>',
      options: [
        'It contains positive ions that move through the layers.',
        'Each carbon atom forms three covalent bonds, and the fourth outer electron is delocalized between the layers.',
        'It has metallic bonding between its carbon atoms.',
        'Its layers are held together by strong covalent bonds.'
      ],
      answer: 1,
      misconception: {
        0: 'Graphite contains no ions. The current is carried by electrons.',
        2: 'Graphite is a non-metal element with covalent bonds. It conducts because of delocalized electrons, but it is not malleable like a metal.',
        3: 'The forces between the layers are weak. Strong bonds alone do not give conduction: diamond has strong bonds and does not conduct.'
      },
      hints: ['How many covalent bonds does each carbon atom form in graphite? What happens to its other outer electron?'],
      solution: '<p>In graphite each carbon atom is covalently bonded to three others in a flat layer. The fourth outer electron of each atom is delocalized, so it can move along the layers and carry charge.</p>'
    },
    {
      id: ID + '-q005', topic: ID, level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Sucrose dissolves well in water, but the solution reads the same current as distilled water. Explain both observations.</p>',
      answer: '<p>Sucrose is a covalent molecular substance. Its molecules have many –OH groups, so they form hydrogen bonds with water molecules, which is why it dissolves. The solution contains neutral molecules, not ions, so there are no charged particles free to move and it does not conduct.</p>',
      markscheme: [
        'Dissolves: (polar) sucrose molecules form hydrogen bonds with water. Accept: attractions between sucrose and water molecules.',
        'No conduction: the solution contains (neutral) molecules, not ions / no charged particles free to move.'
      ],
      hints: ['What particles are in a sugar solution? Do they carry a charge?']
    },
    {
      id: ID + '-q006', topic: ID, level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>A piece of copper flattens without breaking when it is hammered. Which statement explains this?</p>',
      options: [
        'The copper atoms are joined by strong, directional covalent bonds.',
        'Layers of cations can slide over each other, and the attraction to the delocalized electrons holds them together in any position.',
        'Copper ions of the same charge repel each other when the layers move.',
        'The delocalized electrons move away from the hammer.'
      ],
      answer: 1,
      misconception: {
        0: 'Metallic bonding is not directional. Directional covalent bonds would break, so the solid would be brittle.',
        2: 'That is why an ionic crystal shatters. In a metal the delocalized electrons stay between the cations, so the layers stay bonded.',
        3: 'The electrons do not move away. They stay delocalized around the cations as the layers slide.'
      },
      hints: ['Is metallic bonding directional? What happens to it when the layers move?'],
      solution: '<p>In a metal the bonding is the attraction between a lattice of cations and delocalized electrons. It acts in all directions, so when the layers of cations slide, the bonding stays intact and the metal changes shape without breaking.</p>'
    },
    {
      id: ID + '-q007', topic: ID, level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Use the data booklet values <i>χ</i>(Ca) = 1.0 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference, Δ<i>χ</i>, for calcium chloride, ' + C('CaCl2') + '.</p>',
      answer: 2.2, tolerance: { abs: 0.01 },
      hints: ['Subtract the smaller value from the larger. The 2 in the formula is not used.'],
      solution: M('Δ<i>χ</i> = 3.2 − 1.0 = 2.2') + '<p>A large difference: calcium chloride is in the ionic region of the triangle, so it should conduct when dissolved but not as a solid.</p>'
    },
    {
      id: ID + '-q008', topic: ID, level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.4.2',
      stem: '<p>Use the data booklet values <i>χ</i>(Al) = 1.6 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for aluminium chloride, ' + C('AlCl3') + ', used as the horizontal coordinate of the bonding triangle.</p>',
      answer: 2.4, tolerance: { abs: 0.01 },
      hints: ['Average = (χ<sub>a</sub> + χ<sub>b</sub>) / 2, using one value for each element.'],
      solution: M('average <i>χ</i> = (1.6 + 3.2) / 2 = 2.4') + '<p>With Δ<i>χ</i> = 1.6, this point lies towards the polar covalent part of the triangle, well below sodium chloride. This fits aluminium chloride’s much lower melting and sublimation temperature.</p>'
    },
    {
      id: ID + '-q009', topic: ID, level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Before testing the solids, a student measures the current when the electrodes are dipped in distilled water alone. Explain why this is done, and why the electrodes are rinsed with distilled water between tests.</p>',
      answer: '<p>Distilled water is a control: it shows the small reading that is not caused by the solid, so each mixture can be compared with it. Rinsing removes ions left on the electrodes from the previous solution, which would otherwise give a higher current in the next test.</p>',
      markscheme: [
        'Control / baseline: shows the current without any dissolved solid, to compare with. Accept: water itself may conduct slightly.',
        'Rinsing removes ions carried over from the previous test, which would raise the next reading / contaminate it.'
      ],
      hints: ['What would you compare each reading with? What could be left on the electrodes after dipping them in salt solution?']
    },
    {
      id: ID + '-q010', topic: ID, level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Three readings for one solution are 18.2, 18.8 and 18.5 mA. Using half the range as the uncertainty, calculate the percentage uncertainty in the mean current.</p>',
      answer: 1.6216, tolerance: '3%', sigfigs: [1, 3], unit: '%',
      hints: ['Mean = 18.5 mA. Half the range = (18.8 − 18.2) ÷ 2.', 'Percentage uncertainty = uncertainty ÷ mean × 100.'],
      solution: M('mean = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA') + M('uncertainty = (18.8 − 18.2) ÷ 2 = ±0.3 mA') + M('% uncertainty = 0.3 ÷ 18.5 × 100 = 1.6 %')
    },
    {
      id: ID + '-q011', topic: ID, level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Two grey, shiny unknown solids both conduct electricity as solids and do not melt in a Bunsen flame. One is a metal and the other is graphite. Which test distinguishes them?</p>',
      options: [
        'Shaking with water',
        'Tapping with a hammer',
        'Measuring the conductivity of the solid again with a higher voltage',
        'Shaking with hexane'
      ],
      answer: 1,
      misconception: {
        0: 'Neither a metal nor graphite dissolves in water, so both give the same result.',
        2: 'Both conduct as solids, because both have delocalized electrons. A higher voltage does not separate them.',
        3: 'Neither dissolves in hexane.'
      },
      hints: ['Which property of metals comes from layers of cations that can slide?'],
      solution: '<p>A metal is malleable: it flattens when hammered. Graphite is not malleable: it flakes and crumbles, because its layers separate easily. So the hammer test tells them apart.</p>'
    },
    {
      id: ID + '-q012', topic: ID, level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Paraffin wax dissolves in hexane but not in water. Which is the best explanation?</p>',
      options: [
        'Wax is ionic and hexane is polar.',
        'Wax molecules are non-polar. London forces between wax and hexane molecules are similar in strength to those they replace, but wax cannot break the hydrogen bonds between water molecules.',
        'Wax has a covalent network structure.',
        'Water is denser than hexane.'
      ],
      answer: 1,
      misconception: {
        0: 'Wax is a covalent molecular substance, and hexane is non-polar.',
        2: 'A network solid would not dissolve in anything, and would not melt below 100 °C.',
        3: 'Density decides whether the wax floats, not whether it dissolves.'
      },
      hints: ['“Like dissolves like.” Is wax polar or non-polar? What forces hold water molecules together?'],
      solution: '<p>Wax is made of long non-polar hydrocarbon molecules held by London forces. Hexane is also non-polar, so wax and hexane molecules can mix with similar attractions. Water molecules are held together by hydrogen bonds, which non-polar wax molecules cannot replace, so wax does not dissolve in water.</p>'
    },
    {
      id: ID + '-q013', topic: ID, level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.2.9',
      stem: '<p>Which precaution is needed when testing the solubility of solids in hexane?</p>',
      options: [
        'Heat the hexane in a Bunsen flame to make the solid dissolve faster.',
        'Use the hexane in a fume cupboard with no flames nearby.',
        'Pour the used hexane down the sink with plenty of water.',
        'Use a larger volume of hexane to dilute it.'
      ],
      answer: 1,
      misconception: {
        0: 'Hexane is highly flammable. It must never be heated with a flame.',
        2: 'Hexane does not mix with water and is harmful to the environment. It goes in an organic waste container.',
        3: 'More hexane means more flammable vapour, not less hazard.'
      },
      hints: ['What is the main hazard of hexane?'],
      solution: '<p>Hexane is highly flammable and its vapour is harmful. Use small volumes in a fume cupboard, keep all flames away, and put the waste in a labelled organic waste container.</p>'
    },
    {
      id: ID + '-q014', topic: ID, level: 'sl', tier: 'challenge', type: 'short', marks: 2,
      syllabus: 'Structure 2.2.9',
      stem: '<p>A student finds that solid Y has a high melting point and dissolves in water. The student concludes that Y is ionic. Evaluate this conclusion and state one further test that would support it.</p>',
      answer: '<p>The evidence is not enough: some covalent molecular substances (for example sucrose) dissolve in water, and network or metallic solids also have high melting points. Test the conductivity: if Y does not conduct as a solid but the solution conducts clearly more than distilled water, Y releases ions and is ionic.</p>',
      markscheme: [
        'Not sufficient: dissolving in water / a high melting point is also shown by other types (for example a polar molecular solid dissolves).',
        'Further test: conductivity of the solution (compared with distilled water) AND of the solid: solution conducts, solid does not → ionic.'
      ],
      hints: ['Can you think of a non-ionic solid that dissolves in water?', 'Which property depends on whether there are ions that can move?']
    }
  ]);
})();
