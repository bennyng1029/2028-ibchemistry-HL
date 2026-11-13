/* ==========================================================================
   Question bank: Structure 2.3 — The metallic model
   21 original questions. q001–q016 are SL (2.3.1, 2.3.2); q017–q021 are
   Additional HL (2.3.3, delocalized d-electrons in transition elements).
   Schema: docs/AUTHORING.md.
   Data: melting points (°C) from section 8 and ionic radii (pm) from
   section 10 of the IB chemistry data booklet (first assessment 2025).
   All data needed are given in the stem.
   ========================================================================== */
(function () {
  'use strict';

  var ATTR = 'electrostatic attraction between the cations and the delocalized electrons';
  function table(caption, head, rows) {
    return '<div class="table-scroll"><table class="data"><caption>' + caption + '</caption><thead><tr>' +
      head.map(function (h, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }

  S1.questions.register('s2-3', [

    /* =====================================================================
       SL — foundation
       ===================================================================== */
    {
      id: 's2-3-q001', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Which is the best description of a metallic bond?</p>',
      options: [
        'The electrostatic attraction between oppositely charged ions',
        'The electrostatic attraction between a lattice of cations and delocalized electrons',
        'The electrostatic attraction between a shared pair of electrons and two nuclei',
        'The attraction between metal ions in a lattice'
      ],
      answer: 1,
      misconception: {
        0: 'This describes an ionic bond, which needs cations and anions. A pure metal has no negative ions. The negative particles are delocalized electrons.',
        2: 'This describes a covalent bond. In a metal the electrons are not shared between two particular atoms. They are delocalized through the whole lattice.',
        3: 'Metal ions are all positive, so they repel each other. The attraction is between the cations and the delocalized electrons.'
      },
      hints: ['A metal contains two kinds of charged particle. Which ones?', 'Which particles are positive, and which are negative? Opposite charges attract.'],
      solution: '<p>In a metal, the outer electrons are delocalized and the atoms become cations in a lattice. The metallic bond is the electrostatic attraction between the lattice of cations and the delocalized electrons.</p>'
    },
    {
      id: 's2-3-q002', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Why does solid aluminium conduct electricity?</p>',
      options: [
        'Its ions are free to move through the lattice.',
        'Its atoms transfer electrons to each other to form positive and negative ions.',
        'Its delocalized electrons are free to move through the structure.',
        'Its electrons become free only when the metal is melted.'
      ],
      answer: 2,
      misconception: {
        0: 'In a solid metal the cations stay in their lattice positions and only vibrate. Moving ions carry charge in molten or dissolved ionic compounds, not in a metal.',
        1: 'A pure metal has no negative ions. The outer electrons are not transferred to other atoms. They are delocalized.',
        3: 'The delocalized electrons are present in the solid as well as in the liquid. A metal conducts in both states.'
      },
      hints: ['A current is a flow of charged particles. Which charged particles in a solid metal can travel?'],
      solution: '<p>A substance conducts electricity if it has charged particles that are free to move. In a metal these are the delocalized electrons. They move through the whole structure and carry charge. The cations stay in the lattice.</p>'
    },
    {
      id: 's2-3-q003', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Which is the best explanation of why metals are malleable?</p>',
      options: [
        'The delocalized electrons are free to move and carry charge.',
        'The metallic bonds are weak, so they break when a force is applied.',
        'The intermolecular forces between the layers are weak.',
        'The layers of cations can slide over each other without breaking the metallic bond.'
      ],
      answer: 3,
      misconception: {
        0: 'This is true, but it explains electrical conductivity. It does not say why the metal can change shape without breaking.',
        1: 'The bond is not broken when a metal is shaped. After the layers slide, the cations are still attracted to the delocalized electrons around them.',
        2: 'A metal contains no molecules, so it has no intermolecular forces. The layers of cations are held by metallic bonding.'
      },
      hints: ['Malleable means the metal can be hammered into a new shape without breaking. What must the cations do for the shape to change?', 'Is the attraction between the cations and the delocalized electrons lost when the shape changes?'],
      solution: '<p>The cations are in layers. A force makes the layers slide over each other. The metallic bond is non-directional, so in their new positions the cations are still attracted to the delocalized electrons. The bond is not broken and the metal keeps its new shape.</p>'
    },
    {
      id: 's2-3-q004', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'multi', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Which of these are properties of a typical metal? Select <strong>all</strong> that apply.</p>',
      options: [
        'It conducts electricity when solid.',
        'It conducts electricity when liquid.',
        'It breaks into pieces when it is hit with a hammer.',
        'It is a good conductor of heat.',
        'It conducts electricity only when dissolved in water.'
      ],
      answer: [0, 1, 3],
      misconception: {
        2: 'This describes a brittle substance, such as an ionic crystal. A metal is malleable: its layers of cations slide without the bond breaking.',
        4: 'This describes an ionic compound, whose ions are free to move only when it is molten or dissolved. A metal has delocalized electrons that move in the solid.'
      },
      hints: ['Think about the delocalized electrons. Are they present in the solid? In the liquid?', 'Two of the options describe an ionic compound, not a metal.'],
      solution: '<p>The delocalized electrons are free to move in the solid and in the liquid, so a metal conducts electricity in both states. The delocalized electrons and the closely packed cations also transfer kinetic energy, so a metal conducts heat well. A metal is malleable, not brittle.</p>'
    },
    {
      id: 's2-3-q005', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.2',
      stem: '<p>Which metal has the highest melting point?</p>',
      options: ['Lithium, Li', 'Sodium, Na', 'Potassium, K', 'Magnesium, Mg'],
      answer: 3,
      misconception: {
        0: 'Lithium has the highest melting point in group 1, because <span class="chem">Li+</span> is the smallest group 1 ion. But its ion has only a 1+ charge, with one delocalized electron per atom. One of the other metals forms a 2+ ion.',
        1: 'Sodium forms a 1+ ion and gives one delocalized electron per atom. Look for a metal whose ion has a greater charge.',
        2: 'Potassium has the largest ion here and a charge of only 1+. That gives the weakest metallic bonding of the four, so the lowest melting point.'
      },
      hints: ['Write the ion each metal forms. Use the group number.', 'A greater ion charge means more delocalized electrons per atom and a stronger attraction.'],
      solution: '<p>Li, Na and K are in group 1. They form 1+ ions and each atom gives one delocalized electron. Magnesium is in group 2. It forms <span class="chem">Mg^2+</span> and each atom gives two delocalized electrons. <span class="chem">Mg^2+</span> is also a small ion (72 pm). So magnesium has the strongest ' + ATTR + ', and the highest melting point (650.0 °C, compared with 180.5 °C for lithium).</p>'
    },
    {
      id: 's2-3-q006', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.3.2',
      stem: '<p>In the simple model of metallic bonding, each magnesium atom gives its two outer electrons to become a <span class="chem">Mg^2+</span> ion. Calculate the amount, in mol, of delocalized electrons in 0.25 mol of magnesium.</p>',
      answer: 0.5, tolerance: '1%', sigfigs: 2, unit: 'mol',
      hints: ['How many delocalized electrons does one magnesium atom give?', 'Amount of electrons = 2 × amount of magnesium atoms.'],
      solution: '<p>Each Mg atom gives 2 delocalized electrons.</p><div class="worked__math"><i>n</i>(electrons) = 2 × 0.25 mol = 0.50 mol</div>'
    },
    {
      id: 's2-3-q007', topic: 's2-3', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.2',
      stem: '<p>Which change makes a metallic bond <strong>weaker</strong>?</p>',
      options: [
        'A greater charge on the metal ion',
        'A larger ionic radius',
        'More delocalized electrons per atom',
        'A smaller ionic radius'
      ],
      answer: 1,
      misconception: {
        0: 'A greater charge attracts the delocalized electrons more strongly. This makes the bond stronger.',
        2: 'More delocalized electrons per atom means a stronger attraction between the cations and the electrons. This makes the bond stronger.',
        3: 'In a smaller ion the nucleus is closer to the delocalized electrons, so the attraction is stronger.'
      },
      hints: ['Think about the distance between the nucleus of the cation and the delocalized electrons around it.'],
      solution: '<p>In a larger ion, the nucleus is further from the delocalized electrons, so the electrostatic attraction is weaker. This is why melting points fall down group 1.</p>'
    },

    /* =====================================================================
       SL — exam standard
       ===================================================================== */
    {
      id: 's2-3-q008', topic: 's2-3', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Describe the bonding in solid magnesium.</p>',
      answer: '<p>Electrostatic attraction between a lattice of cations (<span class="chem">Mg^2+</span> ions) and delocalized electrons.</p>',
      markscheme: [
        'electrostatic attraction',
        'between a lattice of cations / positive ions / Mg<sup>2+</sup> ions AND delocalized electrons (do not accept “sea of electrons” alone; do not accept “nuclei” for cations)'
      ],
      hints: ['Name the kind of attraction. The same two words are used for ionic and covalent bonds.', 'Which two kinds of particle attract each other in a metal?'],
      solution: '<p>Magnesium is a metal, so the bonding is metallic. The markscheme wording is: the electrostatic attraction between a lattice of cations and delocalized electrons. One mark is for “electrostatic attraction”. The other is for naming both particles.</p>'
    },
    {
      id: 's2-3-q009', topic: 's2-3', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>The table shows some properties of four substances. Which substance is a metal?</p>' +
        table('Properties of substances A to D', ['Substance', 'Melting point / °C', 'Conducts when solid', 'Conducts when liquid'], [
          ['A', '801', 'no', 'yes'], ['B', '1085', 'yes', 'yes'], ['C', '1710', 'no', 'no'], ['D', '−95', 'no', 'no']]),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      misconception: {
        0: 'A conducts only as a liquid. Its charged particles are fixed in the solid and free in the liquid. That is an ionic compound.',
        2: 'C has a very high melting point but never conducts. It has no charged particles that are free to move. That fits a covalent network structure.',
        3: 'D has a low melting point and does not conduct. That fits a molecular substance.'
      },
      hints: ['Which particles carry the charge in a metal? Are they free to move in the solid?'],
      solution: '<p>A metal has delocalized electrons that are free to move in the solid and in the liquid. Only B conducts in both states. (A behaves like an ionic compound, C like a covalent network and D like a molecular substance.)</p>'
    },
    {
      id: 's2-3-q010', topic: 's2-3', level: 'sl', tier: 'exam', type: 'short', marks: 3,
      syllabus: 'Structure 2.3.2',
      stem: '<p>Calcium melts at 842.0 °C. Potassium melts at 63.38 °C. The ionic radius of <span class="chem">Ca^2+</span> is 100 pm and the ionic radius of <span class="chem">K+</span> is 138 pm.</p><p>Explain why calcium has the higher melting point.</p>',
      answer: '<p><span class="chem">Ca^2+</span> has a greater charge than <span class="chem">K+</span>, and calcium has two delocalized electrons per atom while potassium has one. <span class="chem">Ca^2+</span> also has a smaller ionic radius. So the ' + ATTR + ' is stronger in calcium, and more energy is needed to overcome it.</p>',
      markscheme: [
        'Ca<sup>2+</sup> has a greater charge than K<sup>+</sup> / calcium has two delocalized electrons per atom and potassium has one',
        'Ca<sup>2+</sup> has a smaller (ionic) radius than K<sup>+</sup>',
        'stronger electrostatic attraction between the cations and the delocalized electrons in calcium / stronger metallic bonding in calcium, so more energy is needed to overcome it'
      ],
      hints: ['Compare the two ions: their charges, then their radii.', 'Finish by saying what attracts what, and link it to the energy needed.'],
      solution: '<p>Charge: calcium is in group 2 and forms <span class="chem">Ca^2+</span>. Potassium is in group 1 and forms <span class="chem">K+</span>. So calcium has the greater ion charge and two delocalized electrons per atom, not one.</p><p>Radius: <span class="chem">Ca^2+</span> (100 pm) is smaller than <span class="chem">K+</span> (138 pm).</p><p>Both differences make the ' + ATTR + ' stronger in calcium. More energy is needed to overcome it, so the melting point is higher.</p>'
    },
    {
      id: 's2-3-q011', topic: 's2-3', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 2.3.2',
      stem: '<p>Put these metals in order of melting point, <strong>lowest first</strong>.</p>',
      options: ['Rubidium, Rb', 'Potassium, K', 'Sodium, Na', 'Magnesium, Mg'],
      hints: ['Three of these metals are in group 1. How does the melting point change down the group?', 'One metal forms a 2+ ion. Where does it go?'],
      solution: '<p>Rb, K and Na are in group 1. They all form 1+ ions, and the ionic radius increases down the group (<span class="chem">Na+</span> 102 pm, <span class="chem">K+</span> 138 pm, <span class="chem">Rb+</span> 152 pm). A larger ion means weaker attraction, so the order is Rb &lt; K &lt; Na. Magnesium forms a small 2+ ion and has two delocalized electrons per atom, so it is highest.</p><p>Data booklet values: Rb 39.30 °C, K 63.38 °C, Na 97.79 °C, Mg 650.0 °C.</p>'
    },
    {
      id: 's2-3-q012', topic: 's2-3', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.2',
      stem: '<p>The melting points of the group 1 metals decrease from lithium to caesium. Which is the best explanation?</p>',
      options: [
        'The charge on the metal ion decreases down the group.',
        'The number of delocalized electrons per atom decreases down the group.',
        'The ionic radius increases, so the attraction between the cations and the delocalized electrons becomes weaker.',
        'The atoms become heavier, so the intermolecular forces become weaker.'
      ],
      answer: 2,
      misconception: {
        0: 'All group 1 metals form 1+ ions. The charge does not change down the group.',
        1: 'Each group 1 atom gives one delocalized electron. The number does not change down the group.',
        3: 'A metal has no molecules, so no intermolecular forces. Mass is also not the reason for a melting point trend.'
      },
      hints: ['What is the same for every group 1 metal? What changes?'],
      solution: '<p>Every group 1 ion has a 1+ charge and each atom gives one delocalized electron. The ionic radius increases down the group (<span class="chem">Li+</span> 76 pm to <span class="chem">Cs+</span> 167 pm). The nucleus of each cation is further from the delocalized electrons, so the electrostatic attraction is weaker and less energy is needed to overcome it.</p>'
    },
    {
      id: 's2-3-q013', topic: 's2-3', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Copper is used to make electrical wires. Which pair of properties makes copper suitable for this use?</p>',
      options: [
        'It conducts electricity well, and it can be pulled into a wire without breaking.',
        'It has a high melting point, and it is brittle.',
        'It contains ions that are free to move, and it is shiny.',
        'It conducts heat well, and it has a high density.'
      ],
      answer: 0,
      misconception: {
        1: 'A brittle material would break when it is pulled into a wire or bent. Metals are not brittle.',
        2: 'The ions in solid copper are not free to move. The delocalized electrons carry the charge.',
        3: 'Both statements are true of copper, but neither is the reason it is used for wires. A wire must carry a current and must be easy to shape.'
      },
      hints: ['What must a wire do? What must you be able to do to the metal to make a wire?'],
      solution: '<p>A wire must carry a current, so the metal must conduct electricity: its delocalized electrons are free to move. The metal must also be shaped into a long thin wire without breaking: its layers of cations can slide without breaking the metallic bond.</p>'
    },
    {
      id: 's2-3-q014', topic: 's2-3', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.1',
      stem: '<p>Which statement correctly compares solid sodium, Na, with solid sodium chloride, NaCl?</p>',
      options: [
        'Both conduct electricity, because both contain sodium ions.',
        'Sodium conducts electricity because it has delocalized electrons. Sodium chloride does not, because its ions are held in fixed positions.',
        'Neither conducts electricity, because the particles in a solid cannot move.',
        'Sodium chloride conducts electricity because it contains ions. Sodium does not, because it contains only atoms.'
      ],
      answer: 1,
      misconception: {
        0: 'Containing ions is not enough. The charged particles must be free to move. In solid sodium chloride the ions are fixed in the lattice.',
        2: 'The cations in solid sodium cannot travel, but the delocalized electrons can. So solid sodium conducts.',
        3: 'This is the wrong way round. Solid sodium has delocalized electrons that are free to move. The ions in solid sodium chloride are not free to move.'
      },
      hints: ['To conduct, a substance needs charged particles that are free to move. Check each solid.'],
      solution: '<p>Solid sodium is a metal: a lattice of <span class="chem">Na+</span> ions with delocalized electrons that are free to move and carry charge. Solid sodium chloride is ionic: its <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions are held in fixed positions, and it has no delocalized electrons. So only sodium conducts as a solid.</p>'
    },
    {
      id: 's2-3-q015', topic: 's2-3', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.3.2',
      stem: '<p>Aluminium has a higher melting point than sodium. Which statements are part of a correct explanation? Select <strong>all</strong> that apply.</p>',
      options: [
        'The aluminium ion has a greater charge than the sodium ion.',
        'Aluminium has more delocalized electrons per atom than sodium.',
        'The aluminium ion has a larger ionic radius than the sodium ion.',
        'The attraction between the cations and the delocalized electrons is stronger in aluminium.',
        'Aluminium has stronger covalent bonds between its atoms.'
      ],
      answer: [0, 1, 3],
      misconception: {
        2: 'The aluminium ion is smaller, not larger: <span class="chem">Al^3+</span> is 54 pm and <span class="chem">Na+</span> is 102 pm. A smaller ion gives a stronger attraction.',
        4: 'Aluminium is a metal. Its bonding is metallic, not covalent. There are no shared pairs between particular atoms.'
      },
      hints: ['Write both ions. Compare their charges and their sizes.', 'Three statements are correct.'],
      solution: '<p>Aluminium forms <span class="chem">Al^3+</span> and gives three delocalized electrons per atom. Sodium forms <span class="chem">Na+</span> and gives one. <span class="chem">Al^3+</span> (54 pm) is also smaller than <span class="chem">Na+</span> (102 pm). So the ' + ATTR + ' is stronger in aluminium, and more energy is needed to overcome it (660.3 °C compared with 97.79 °C).</p>'
    },

    /* =====================================================================
       SL — challenge
       ===================================================================== */
    {
      id: 's2-3-q016', topic: 's2-3', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.3.1',
      stem: '<p>A student writes:</p><p>“Magnesium conducts electricity because its ions are free to move. Magnesium is malleable because the metallic bonds are weak and break when it is hit.”</p><p>Identify the errors, and write a correct explanation of both properties.</p>',
      answer: '<p>The ions are not free to move: the cations stay in the lattice. Magnesium conducts because its delocalized electrons are free to move through the structure. The metallic bonds do not break when the metal is hit. Magnesium is malleable because the layers of cations can slide over each other, and the non-directional metallic bond is not broken.</p>',
      markscheme: [
        'conducts because delocalized electrons (not ions) are free to move / the cations are in fixed positions in the lattice',
        'malleable because layers of cations / ions can slide over each other',
        'the metallic bond is not broken when the layers slide / the bonding is non-directional / the cations are still attracted to the delocalized electrons'
      ],
      hints: ['There is one error in each sentence. Which particles move in a solid metal?', 'What happens to the layers of cations, and to the attraction, when a metal is hammered?'],
      solution: '<p><strong>Error 1:</strong> in a solid metal the ions do not travel. The delocalized electrons are free to move through the structure and carry charge.</p><p><strong>Error 2:</strong> the metallic bonds are not broken. The layers of cations slide over each other. Because the bonding is non-directional, the cations are still attracted to the delocalized electrons in their new positions.</p>'
    },
    {
      id: 's2-3-q017', topic: 's2-3', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.2',
      stem: '<p>P, Q, R and S are four s-block metals. The table shows the ion that each one forms. Which row of the answer options gives the metal with the lowest melting point and the metal with the highest melting point?</p>' +
        table('Ions formed by metals P to S', ['Metal', 'Charge of ion', 'Ionic radius / pm'], [
          ['P', '1+', '138'], ['Q', '2+', '135'], ['R', '1+', '167'], ['S', '2+', '100']]),
      options: [
        'Lowest: P. Highest: Q.',
        'Lowest: R. Highest: Q.',
        'Lowest: R. Highest: S.',
        'Lowest: S. Highest: R.'
      ],
      answer: 2,
      misconception: {
        0: 'P and R have the same charge, but R has the larger ion, so R has the weaker bonding. Q and S have the same charge, but S has the smaller ion, so S has the stronger bonding.',
        1: 'R is right for the lowest. For the highest, compare Q and S: the charge is the same, and the smaller ion gives the stronger attraction.',
        3: 'This is the wrong way round. A small ion with a large charge gives the strongest bonding and the highest melting point.'
      },
      hints: ['Weakest bonding: the smallest charge and the largest radius.', 'Strongest bonding: the greatest charge and the smallest radius.'],
      solution: '<p>Lowest: the ions with a 1+ charge (P and R) give weaker bonding than the 2+ ions. Of these, R has the larger radius (167 pm), so R has the weakest attraction and the lowest melting point.</p><p>Highest: of the 2+ ions (Q and S), S has the smaller radius (100 pm), so S has the strongest attraction and the highest melting point.</p><p>These are the data for K, Ba, Cs and Ca. Their melting points are 63.38 °C, 725.0 °C, 28.44 °C and 842.0 °C.</p>'
    },

    /* =====================================================================
       Additional HL — 2.3.3
       ===================================================================== */
    {
      id: 's2-3-q018', topic: 's2-3', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.3',
      stem: '<p>Titanium has the electron configuration [Ar] 3d<sup>2</sup> 4s<sup>2</sup>. Which electrons are delocalized in titanium metal?</p>',
      options: [
        '4s electrons only',
        '3d electrons as well as 4s electrons',
        '3p electrons as well as 4s electrons',
        'All 22 electrons'
      ],
      answer: 1,
      misconception: {
        0: 'This is true for an s-block metal such as calcium. A transition element also has delocalized d-electrons.',
        2: 'The 3p electrons are in a full inner sublevel, held strongly by the nucleus. They are not delocalized.',
        3: 'The inner electrons stay with each nucleus. They are part of the cation. Only outer electrons are delocalized.'
      },
      hints: ['What does syllabus statement 2.3.3 say about transition elements?'],
      solution: '<p>Transition elements have delocalized d-electrons. In titanium, 3d electrons are delocalized as well as 4s electrons. The 3d and 4s sublevels are close in energy.</p>'
    },
    {
      id: 's2-3-q019', topic: 's2-3', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.3.3',
      stem: '<p>Chromium is a transition element. It melts at 1907 °C. Calcium, in the same period, melts at 842.0 °C.</p><p>Explain why chromium has a much higher melting point than calcium.</p>',
      answer: '<p>In chromium, 3d electrons are delocalized as well as 4s electrons, so chromium has more delocalized electrons per atom than calcium. The ' + ATTR + ' is stronger in chromium, so more energy is needed to overcome it.</p>',
      markscheme: [
        'chromium has delocalized d-electrons / 3d electrons as well as 4s electrons are delocalized / chromium has more delocalized electrons (per atom)',
        'stronger electrostatic attraction between the cations and the delocalized electrons / stronger metallic bonding in chromium (so more energy is needed to overcome it)'
      ],
      hints: ['Which electrons are delocalized in calcium? Which are delocalized in a transition element?', 'Finish with the attraction and the energy needed to overcome it.'],
      solution: '<p>Calcium has only its two 4s electrons to delocalize. In chromium, 3d electrons are delocalized as well as 4s electrons. More delocalized electrons per atom gives a stronger ' + ATTR + '. More energy is needed to overcome it, so the melting point is higher.</p>'
    },
    {
      id: 's2-3-q020', topic: 's2-3', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.3',
      stem: '<p>Which is the best explanation of why iron conducts electricity?</p>',
      options: [
        'Iron ions have variable oxidation states, so they can move through the lattice.',
        'Iron forms coloured complex ions.',
        'Its d-electrons are held tightly by each nucleus.',
        'It has delocalized d-electrons and s-electrons that are free to move through the structure.'
      ],
      answer: 3,
      misconception: {
        0: 'Variable oxidation state is a chemical property. The ions in solid iron stay in the lattice. They do not carry the current.',
        1: 'Colour and complex ions are chemical properties of transition elements (Structure 3.1). They do not explain conductivity.',
        2: 'If the d-electrons were all held tightly they could not carry charge. In a transition element, d-electrons are delocalized.'
      },
      hints: ['The explanation has the same form as for any metal. Which particles are free to move?'],
      solution: '<p>A metal conducts because it has delocalized electrons that are free to move through the structure and carry charge. In a transition element such as iron, these include d-electrons as well as s-electrons.</p>'
    },
    {
      id: 's2-3-q021', topic: 's2-3', level: 'ahl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.3.3',
      stem: '<p>The table shows data for three metals in period 4.</p>' +
        table('Three period 4 metals', ['Metal', 'Outer electrons', 'Melting point / °C'], [
          ['potassium, K', '4s<sup>1</sup>', '63.38'], ['calcium, Ca', '4s<sup>2</sup>', '842.0'], ['vanadium, V', '3d<sup>3</sup> 4s<sup>2</sup>', '1910']]) +
        '<p>Explain the increase in melting point from potassium to calcium to vanadium.</p>',
      answer: '<p>From K to Ca the ion charge rises from 1+ to 2+, so calcium has two delocalized electrons per atom and potassium has one (and <span class="chem">Ca^2+</span> is the smaller ion). Vanadium is a transition element: 3d electrons are delocalized as well as 4s electrons, so it has more delocalized electrons per atom again. Each time, the ' + ATTR + ' is stronger, so more energy is needed to overcome it.</p>',
      markscheme: [
        'K to Ca: greater ion charge (2+ compared with 1+) / two delocalized electrons per atom compared with one / Ca<sup>2+</sup> has the smaller ionic radius',
        'vanadium has delocalized d-electrons / 3d as well as 4s electrons are delocalized, so more delocalized electrons per atom',
        'stronger electrostatic attraction between the cations and the delocalized electrons (from K to Ca to V), so more energy is needed to overcome it'
      ],
      hints: ['Take the two steps one at a time. First compare K and Ca using their ions.', 'What can vanadium delocalize that calcium cannot?'],
      solution: '<p><strong>K to Ca:</strong> potassium forms <span class="chem">K+</span> with one delocalized electron per atom. Calcium forms <span class="chem">Ca^2+</span> with two. <span class="chem">Ca^2+</span> is also the smaller ion.</p><p><strong>Ca to V:</strong> vanadium is a transition element. Its 3d electrons are delocalized as well as its 4s electrons, so it has more delocalized electrons per atom than calcium.</p><p><strong>Link:</strong> at each step the ' + ATTR + ' becomes stronger, so more energy is needed to overcome it and the melting point rises.</p>'
    },
    {
      id: 's2-3-q022', topic: 's2-3', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.3.3',
      stem: '<p>From sodium to aluminium the melting point rises at every step. From scandium to copper the melting points are all high, but they do not follow a simple trend. Which is the best reason for this difference?</p>',
      options: [
        'Transition elements have no delocalized electrons, so the metallic model does not apply to them.',
        'From Na to Al each step adds a delocalized electron and makes the ion much smaller. From Sc to Cu the atoms are similar in size and all have d-electrons and s-electrons that can be delocalized.',
        'From Sc to Cu the atoms become heavier, and heavier atoms always melt at lower temperatures.',
        'Transition elements form molecules, so their melting points depend on intermolecular forces.'
      ],
      answer: 1,
      misconception: {
        0: 'Transition elements are metals. They have delocalized d-electrons as well as s-electrons, which is why their melting points are high.',
        2: 'Mass does not decide a melting point. The strength of the metallic bond does.',
        3: 'Transition elements are metals with metallic bonding. They do not form molecules and have no intermolecular forces.'
      },
      hints: ['What changes at each step from Na to Mg to Al? Does the same thing change steadily from Sc to Cu?'],
      solution: '<p>From Na to Al, the ion charge and the number of delocalized electrons per atom go from 1 to 2 to 3, and the ionic radius falls from 102 pm to 54 pm. All these changes strengthen the bonding, so the trend is clear. Across the d-block the atoms are similar in size, and every element has d-electrons and s-electrons that can be delocalized. No single factor changes steadily, so the trend is less evident.</p>'
    }
  ]);
})();
