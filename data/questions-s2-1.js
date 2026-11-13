/* ==========================================================================
   Question bank: Structure 2.1 — The ionic model
   30 original questions, all SL (Structure 2.1 has no Additional HL content).
   q001–q010 foundation, q011–q024 exam standard, q025–q030 challenge.
   Schema: docs/AUTHORING.md. Ionic radii and lattice enthalpies are the values
   in sections 10 and 16 of the IB data booklet (first assessment 2025); every
   number is recomputed by the builder's checking script.
   ========================================================================== */
(function () {
  'use strict';

  /* '1s2 2s2 2p6' -> configuration with superscripts, in the mono face. */
  function cfg(s) {
    return '<span class="mono">' + s.split(' ').map(function (p) {
      return /^\[/.test(p) ? p : '<span class="nowrap">' + p.slice(0, 2) + '<sup>' + p.slice(2) + '</sup></span>';
    }).join(' ') + '</span>';
  }
  function c(f) { return '<span class="chem">' + f + '</span>'; }
  function math(line) { return '<div class="worked__math">' + line + '</div>'; }
  var LE = '<span class="unit">kJ mol-1</span>';

  S1.questions.register('s2-1', [

    /* =====================================================================
       Foundation
       ===================================================================== */
    {
      id: 's2-1-q001', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.1',
      stem: '<p>A magnesium atom has the electron configuration ' + cfg('1s2 2s2 2p6 3s2') + '. What is the charge of the ion that magnesium forms?</p>',
      options: ['1+', '2+', '2−', '6−'],
      answer: 1,
      misconception: {
        0: 'Magnesium has two electrons in its outer shell, and it loses both of them, not one.',
        2: 'The size is right but the sign is wrong. Losing two negative electrons leaves more protons than electrons, so the ion is positive.',
        3: 'A metal atom with two outer electrons does not gain six more. Losing two electrons takes far less energy.'
      },
      hints: ['Which shell is the outer shell, and how many electrons does it hold?', 'Magnesium is a metal. Do metal atoms lose or gain electrons?'],
      solution: '<p>The outer shell is shell 3, which holds 2 electrons (' + cfg('3s2') + '). Magnesium is a metal, so the atom loses both.</p>' +
        math('charge = 12 protons − 10 electrons = 2+') +
        '<p>The ion is ' + c('Mg^2+') + ', with the configuration ' + cfg('1s2 2s2 2p6') + '.</p>'
    },
    {
      id: 's2-1-q002', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Why does sodium chloride dissolve in water?</p>',
      options: [
        'Polar water molecules attract the ions strongly enough to separate them from the lattice.',
        'Water molecules break the covalent bonds between the sodium atoms and the chlorine atoms.',
        'Sodium chloride molecules fit into the spaces between the water molecules.',
        'Water reacts with the ions and changes them back into atoms.'
      ],
      answer: 0,
      misconception: {
        1: 'Sodium chloride has no covalent bonds between sodium and chlorine. It is a lattice of ions held together by electrostatic attraction.',
        2: 'There are no sodium chloride molecules. The solid is a lattice of separate ' + c('Na+') + ' and ' + c('Cl-') + ' ions.',
        3: 'The ions stay as ions in the solution. That is why the solution conducts electricity.'
      },
      hints: ['What particles is sodium chloride made of?', 'A water molecule has a slightly negative end and a slightly positive end. What will each end attract?'],
      solution: '<p>Water molecules are polar. The slightly negative oxygen end is attracted to ' + c('Na+') + ' ions and the slightly positive hydrogen end is attracted to ' + c('Cl-') + ' ions. Together these attractions are strong enough to pull the ions out of the lattice. The separated ions are then surrounded by water molecules.</p>'
    },
    {
      id: 's2-1-q003', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.1.1',
      stem: '<p>An atom has the electron configuration ' + cfg('1s2 2s2 2p6 3s2 3p4') + '. How many electrons does this atom gain when it forms its usual ion?</p>',
      answer: 2, tolerance: { abs: 0.1 }, unit: '',
      hints: ['Count the electrons in the outer shell: add the 3s and 3p electrons.', 'A non-metal atom gains electrons until its outer s and p sublevels hold eight electrons.'],
      solution: math('outer shell: 3s<sup>2</sup> 3p<sup>4</sup> = 6 electrons') + math('electrons gained = 8 − 6 = 2') +
        '<p>The atom gains <strong>2</strong> electrons and forms an ion with a charge of 2−. (The element is sulfur and the ion is ' + c('S^2-') + '.)</p>'
    },
    {
      id: 's2-1-q004', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>What is an ionic bond?</p>',
      options: [
        'The transfer of electrons from a metal atom to a non-metal atom',
        'The electrostatic attraction between oppositely charged ions',
        'The electrostatic attraction between two nuclei and a shared pair of electrons',
        'The electrostatic attraction between cations and delocalized electrons'
      ],
      answer: 1,
      misconception: {
        0: 'The transfer of electrons is how the ions form. The bond is the attraction between the ions afterwards. Markschemes do not accept “transfer of electrons” as the definition.',
        2: 'A shared pair of electrons describes a covalent bond. In an ionic bond no electrons are shared.',
        3: 'Cations and delocalized electrons describe a metal. An ionic compound contains cations and anions.'
      },
      hints: ['The question asks what the bond <em>is</em>, not how the ions were made.', 'Which two kinds of particle are in an ionic compound, and what force acts between them?'],
      solution: '<p>An ionic bond is the electrostatic attraction between oppositely charged ions (cations and anions).</p>'
    },
    {
      id: 's2-1-q005', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>What is the formula of calcium chloride?</p>',
      options: [c('CaCl'), c('Ca2Cl'), c('CaCl2'), c('Ca(Cl)2')],
      answer: 2,
      misconception: {
        0: 'One ' + c('Ca^2+') + ' and one ' + c('Cl-') + ' give a total charge of 1+. The charges must add up to zero.',
        1: 'The numbers are the wrong way round. Two ' + c('Ca^2+') + ' ions would give 4+ against only 1−.',
        3: 'The ratio is right, but brackets are only used around a polyatomic ion. Chloride is a single atom, so no brackets are needed.'
      },
      hints: ['Calcium is in group 2 and chlorine is in group 17. Write the two ions with their charges.', 'How many 1− ions balance one 2+ ion?'],
      solution: '<p>The ions are ' + c('Ca^2+') + ' and ' + c('Cl-') + '.</p>' + math('1 × (2+) = 2+ &nbsp; and &nbsp; 2 × (1−) = 2−') + '<p>The formula is ' + c('CaCl2') + '.</p>'
    },
    {
      id: 's2-1-q006', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>What is the name of ' + c('K2S') + '?</p>',
      options: ['potassium sulfide', 'potassium sulfate', 'dipotassium sulfide', 'potassium(II) sulfide'],
      answer: 0,
      misconception: {
        1: 'Sulfate is the polyatomic ion ' + c('SO4^2-') + ', which contains oxygen. This formula has no oxygen.',
        2: 'Names of ionic compounds do not use prefixes such as di-. The number of ions follows from the charges.',
        3: 'A Roman numeral is only used for a metal that can form more than one ion. Potassium, in group 1, only forms ' + c('K+') + '. A numeral would also show the charge, which is 1+, not 2+.'
      },
      hints: ['The compound contains only two elements. What ending does the anion take?'],
      solution: '<p>The cation is named first: potassium. The anion is made from one element, sulfur, so its name ends in -ide: sulfide. The name is <strong>potassium sulfide</strong>.</p>'
    },
    {
      id: 's2-1-q007', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>Which row gives the correct name and formula of a polyatomic ion?</p>',
      options: ['sulfate, ' + c('SO3^2-'), 'carbonate, ' + c('CO3-'), 'nitrate, ' + c('NO3-'), 'ammonium, ' + c('NH3+')],
      answer: 2,
      misconception: {
        0: 'Sulfate has four oxygen atoms: ' + c('SO4^2-') + '.',
        1: 'The atoms are right but the charge is wrong. Carbonate is ' + c('CO3^2-') + '.',
        3: c('NH3') + ' is ammonia, a neutral molecule. The ammonium ion has four hydrogen atoms: ' + c('NH4+') + '.'
      },
      hints: ['Check two things in each row: the number of atoms and the charge.'],
      solution: '<p>Nitrate is ' + c('NO3-') + '. The others should be sulfate ' + c('SO4^2-') + ', carbonate ' + c('CO3^2-') + ' and ammonium ' + c('NH4+') + '.</p>'
    },
    {
      id: 's2-1-q008', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Why does solid sodium chloride <strong>not</strong> conduct electricity?</p>',
      options: [
        'It contains no charged particles.',
        'Its ions are held in fixed positions in the lattice.',
        'Its electrons are held in fixed positions in the lattice.',
        'Its molecules have no overall charge.'
      ],
      answer: 1,
      misconception: {
        0: 'Solid sodium chloride is made of charged particles: ' + c('Na+') + ' and ' + c('Cl-') + ' ions. The problem is that they cannot move.',
        2: 'In an ionic compound the charge would be carried by ions, not by electrons. The explanation must be about the ions.',
        3: 'Sodium chloride has no molecules. It is a lattice of ions.'
      },
      hints: ['To conduct, a substance needs charged particles that are free to move.', 'Which charged particles does sodium chloride contain? Can they move in the solid?'],
      solution: '<p>Solid sodium chloride contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate. Because the ions cannot move from place to place, no charge can flow.</p>'
    },
    {
      id: 's2-1-q009', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Which quantity is a measure of the strength of the ionic bonding in a compound?</p>',
      options: ['Electronegativity', 'First ionization energy', 'Lattice enthalpy', 'Relative formula mass'],
      answer: 2,
      misconception: {
        0: 'Electronegativity describes how strongly one atom attracts bonding electrons. It is a property of an element, not of the bonding in a compound.',
        1: 'First ionization energy is the energy needed to remove an electron from a gaseous atom. It does not measure the attraction between ions in a lattice.',
        3: 'Relative formula mass is the mass of a formula unit. It tells you nothing about how strongly the ions attract each other.'
      },
      hints: ['Which quantity is the energy needed to separate the ions of a solid lattice completely?'],
      solution: '<p>Lattice enthalpy is the enthalpy change when one mole of a solid ionic compound is separated into gaseous ions. The stronger the electrostatic attraction between the ions, the larger the lattice enthalpy.</p>'
    },
    {
      id: 's2-1-q010', topic: 's2-1', level: 'sl', tier: 'foundation', type: 'order', marks: 2,
      syllabus: 'Structure 2.1.2',
      stem: '<p>Put these steps in order to deduce the formula of aluminium oxide.</p>',
      options: [
        'Write the two ions: ' + c('Al^3+') + ' and ' + c('O^2-') + '.',
        'Find the smallest total charge that 3 and 2 both divide into: 6.',
        'Work out the numbers of ions: two ' + c('Al^3+') + ' give 6+ and three ' + c('O^2-') + ' give 6−.',
        'Write the formula: ' + c('Al2O3') + '.'
      ],
      hints: ['You cannot balance the charges until you know them.', 'The formula is the last thing you write.'],
      solution: '<p>Start from the ions and their charges. Find the smallest common total (6), work out how many of each ion give that total, then write those numbers as subscripts: ' + c('Al2O3') + '.</p>'
    },

    /* =====================================================================
       Exam standard
       ===================================================================== */
    {
      id: 's2-1-q011', topic: 's2-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.1',
      stem: '<p>Which ion has the electron configuration ' + cfg('1s2 2s2 2p6 3s2 3p6') + '?</p>',
      options: [c('Na+'), c('O^2-'), c('S^2-'), c('Mg^2+')],
      answer: 2,
      misconception: {
        0: 'A sodium atom has 11 electrons and loses 1. ' + c('Na+') + ' has 10 electrons: ' + cfg('1s2 2s2 2p6') + '.',
        1: 'An oxygen atom has 8 electrons and gains 2. ' + c('O^2-') + ' has 10 electrons: ' + cfg('1s2 2s2 2p6') + '.',
        3: 'A magnesium atom has 12 electrons and loses 2. ' + c('Mg^2+') + ' has 10 electrons: ' + cfg('1s2 2s2 2p6') + '.'
      },
      hints: ['Add the superscripts to find how many electrons the ion has.', 'For each ion, work out the number of electrons: atomic number minus the charge (with its sign).'],
      solution: '<p>The configuration has 2 + 2 + 6 + 2 + 6 = 18 electrons.</p>' + math('S<sup>2−</sup>: 16 + 2 = 18 electrons') +
        '<p>The other three ions each have 10 electrons. Only ' + c('S^2-') + ' has 18.</p>'
    },
    {
      id: 's2-1-q012', topic: 's2-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.1',
      stem: '<p>Iron forms two chlorides, ' + c('FeCl2') + ' and ' + c('FeCl3') + '. Which statement explains this?</p>',
      options: [
        'Chlorine can form ions with two different charges.',
        'Iron is a transition element and can form ions with different charges.',
        'Iron has isotopes with different numbers of neutrons.',
        'The charge of an iron ion is equal to its group number.'
      ],
      answer: 1,
      misconception: {
        0: 'Chlorine, in group 17, forms only the chloride ion, ' + c('Cl-') + '. The difference is in the iron ion.',
        2: 'Isotopes differ in neutrons, which does not change the charge of an ion or the formula of a compound.',
        3: 'Iron is in group 8, and its common ions are 2+ and 3+. The group number does not give the charge of a transition element ion.'
      },
      hints: ['The chloride ion is always ' + c('Cl-') + '. What must the charge on iron be in each compound?'],
      solution: '<p>Each chloride ion is 1−. In ' + c('FeCl2') + ' the iron ion is ' + c('Fe^2+') + ' and in ' + c('FeCl3') + ' it is ' + c('Fe^3+') + '. Iron is a transition element, and a transition element can form ions with different charges. The compounds are iron(II) chloride and iron(III) chloride.</p>'
    },
    {
      id: 's2-1-q013', topic: 's2-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>What is the formula of ammonium sulfate?</p>',
      options: [c('NH4SO4'), c('(NH4)2SO4'), c('NH4(SO4)2'), c('(NH4)2S')],
      answer: 1,
      misconception: {
        0: 'One ' + c('NH4+') + ' (1+) does not balance one ' + c('SO4^2-') + ' (2−). The total charge would be 1−.',
        2: 'The numbers are the wrong way round. One 1+ ion and two 2− ions give a total charge of 3−.',
        3: 'This is ammonium sulf<em>ide</em>. Sulfate is the polyatomic ion ' + c('SO4^2-') + '.'
      },
      hints: ['Write the two ions with their charges: ammonium and sulfate.', 'How many 1+ ions balance one 2− ion? Do you need brackets?'],
      solution: '<p>The ions are ' + c('NH4+') + ' and ' + c('SO4^2-') + '.</p>' + math('2 × (1+) = 2+ &nbsp; and &nbsp; 1 × (2−) = 2−') +
        '<p>Two ammonium ions need brackets: ' + c('(NH4)2SO4') + '.</p>'
    },
    {
      id: 's2-1-q014', topic: 's2-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>What is the formula of iron(III) hydroxide?</p>',
      options: [c('Fe3OH'), c('FeOH3'), c('Fe(OH)2'), c('Fe(OH)3')],
      answer: 3,
      misconception: {
        0: 'The Roman numeral III is the charge on the iron ion, 3+. It is not the number of iron ions.',
        1: 'Without brackets, the 3 applies only to hydrogen. Three hydroxide ions must be written ' + c('(OH)3') + '.',
        2: 'This is iron(II) hydroxide. Two ' + c('OH-') + ' ions only balance a 2+ ion.'
      },
      hints: ['The Roman numeral gives the charge on the iron ion.', 'Hydroxide is ' + c('OH-') + '. How many are needed to balance 3+?'],
      solution: '<p>The ions are ' + c('Fe^3+') + ' and ' + c('OH-') + '.</p>' + math('1 × (3+) = 3+ &nbsp; and &nbsp; 3 × (1−) = 3−') +
        '<p>Three hydroxide ions need brackets: ' + c('Fe(OH)3') + '.</p>'
    },
    {
      id: 's2-1-q015', topic: 's2-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>What is the name of ' + c('CuCO3') + '?</p>',
      options: ['copper carbonate', 'copper(I) carbonate', 'copper(II) carbonate', 'copper(II) carbide'],
      answer: 2,
      misconception: {
        0: 'Copper is a transition element that can form more than one ion, so the name needs a Roman numeral to show the charge.',
        1: 'Carbonate is 2−. One copper ion balances it, so the copper ion must be 2+, not 1+. Copper(I) carbonate would be ' + c('Cu2CO3') + '.',
        3: 'The metal is right, but ' + c('CO3^2-') + ' is the polyatomic ion carbonate. An -ide ending is for an anion of one element.'
      },
      hints: ['What is the charge on a carbonate ion?', 'The compound is neutral and contains one copper ion. What must its charge be?'],
      solution: '<p>Carbonate is ' + c('CO3^2-') + '. One copper ion balances one carbonate ion, so the copper ion is ' + c('Cu^2+') + '. Copper can also form ' + c('Cu+') + ', so the name needs the Roman numeral: <strong>copper(II) carbonate</strong>.</p>'
    },
    {
      id: 's2-1-q016', topic: 's2-1', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>Deduce the formula of calcium phosphate. How many <strong>ions</strong>, in total, are in one formula unit?</p>',
      answer: 5, tolerance: { abs: 0.1 }, unit: '',
      hints: ['The ions are ' + c('Ca^2+') + ' and ' + c('PO4^3-') + '. Find the smallest total charge that 2 and 3 both divide into.', 'A phosphate ion counts as one ion, although it contains five atoms.'],
      solution: math('smallest common total charge = 6') + math('6 ÷ 2 = 3 Ca<sup>2+</sup> ions &nbsp; and &nbsp; 6 ÷ 3 = 2 PO<sub>4</sub><sup>3−</sup> ions') +
        '<p>The formula is ' + c('Ca3(PO4)2') + '. One formula unit contains 3 + 2 = <strong>5</strong> ions.</p>'
    },
    {
      id: 's2-1-q017', topic: 's2-1', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.1.2',
      stem: '<p>Sodium hydrogencarbonate, ' + c('NaHCO3') + ', contains both ionic bonds and covalent bonds. State where each type of bond is found in this compound.</p>',
      answer: '<p>The ionic bonding is between the sodium ions, ' + c('Na+') + ', and the hydrogencarbonate ions, ' + c('HCO3-') + '. The covalent bonds are between the atoms inside each hydrogencarbonate ion (between carbon and oxygen, and between oxygen and hydrogen).</p>',
      markscheme: [
        'Ionic: between the sodium ion / Na⁺ and the hydrogencarbonate ion / HCO₃⁻. Accept: between the cation and the (polyatomic) anion.',
        'Covalent: between the atoms within the hydrogencarbonate ion. Accept: between C and O / between O and H.'
      ],
      hints: ['Split the formula into its two ions first.', 'A polyatomic ion is a group of atoms. What kind of bond holds the atoms in the group together?']
    },
    {
      id: 's2-1-q018', topic: 's2-1', level: 'sl', tier: 'exam', type: 'short', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>State what is meant by the term <em>ionic bond</em>.</p>',
      answer: '<p>An ionic bond is the electrostatic attraction between oppositely charged ions.</p>',
      markscheme: [
        'Electrostatic attraction between oppositely charged ions. Accept: between cations and anions / between positive and negative ions. Do not accept: “transfer of electrons” alone, or an answer without “electrostatic”.'
      ],
      hints: ['Name the force, and name the particles it acts between.']
    },
    {
      id: 's2-1-q019', topic: 's2-1', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Which statements about solid sodium chloride are correct? Select all that apply.</p>',
      options: [
        'Each sodium ion is surrounded by chloride ions.',
        'The solid is made of separate NaCl molecules.',
        'The formula NaCl gives the ratio of the ions in the lattice.',
        'The electrostatic attraction between the ions acts in all directions.',
        'Each sodium ion is bonded to only one chloride ion.',
        'The lattice contains delocalized electrons.'
      ],
      answer: [0, 2, 3],
      misconception: {
        1: 'There are no molecules in an ionic lattice. Every ion attracts all the oppositely charged ions around it.',
        4: 'The attraction is not between one pair. A sodium ion attracts every chloride ion near it, in all directions.',
        5: 'Delocalized electrons are found in metals. In sodium chloride all the electrons belong to individual ions.'
      },
      hints: ['Picture the lattice: what are the nearest neighbours of each ion?', 'Does the formula of an ionic compound describe a molecule or a ratio?'],
      solution: '<p>Sodium chloride is a three-dimensional lattice. Each ion is surrounded by ions of the opposite charge, and the electrostatic attraction acts in all directions. There are no molecules, so the formula NaCl is an empirical formula: it gives the ratio of the ions, 1 : 1.</p>'
    },
    {
      id: 's2-1-q020', topic: 's2-1', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>The table gives some properties of four substances, W, X, Y and Z. The data are illustrative. Which substance is most likely to be an ionic compound?</p>' +
        '<div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col">Conducts when solid?</th><th scope="col">Conducts when molten?</th></tr></thead><tbody>' +
        '<tr><th scope="row">W</th><td class="num">1085</td><td>yes</td><td>yes</td></tr>' +
        '<tr><th scope="row">X</th><td class="num">770</td><td>no</td><td>yes</td></tr>' +
        '<tr><th scope="row">Y</th><td class="num">1700</td><td>no</td><td>no</td></tr>' +
        '<tr><th scope="row">Z</th><td class="num">80</td><td>no</td><td>no</td></tr></tbody></table></div>',
      options: ['W', 'X', 'Y', 'Z'],
      answer: 1,
      misconception: {
        0: 'W conducts when solid. In a solid ionic compound the ions are in fixed positions, so it does not conduct. W behaves like a metal.',
        2: 'Y has a high melting point, but it does not conduct when molten. A molten ionic compound has ions that are free to move, so it must conduct.',
        3: 'Z melts at a low temperature and never conducts. An ionic lattice needs a lot of energy to break down, and its molten form conducts.'
      },
      hints: ['An ionic compound contains ions. When can those ions move?', 'Look for a high melting point together with conduction only in the molten state.'],
      solution: '<p>An ionic compound has a high melting point, because of the strong electrostatic attraction in the lattice. It does not conduct when solid (ions in fixed positions) but does conduct when molten (ions free to move). Only <strong>X</strong> fits all three.</p>'
    },
    {
      id: 's2-1-q021', topic: 's2-1', level: 'sl', tier: 'exam', type: 'order', marks: 2,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Arrange these sodium halides in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>',
      options: [c('NaI'), c('NaBr'), c('NaCl'), c('NaF')],
      hints: ['The cation and all the charges are the same. What is different?', 'Ionic radius increases down group 17. Smaller ions get closer together.'],
      solution: '<p>All four contain ' + c('Na+') + ' and a 1− ion, so only the ionic radius of the halide ion changes. Data booklet radii: ' + c('I-') + ' 220 pm, ' + c('Br-') + ' 196 pm, ' + c('Cl-') + ' 181 pm, ' + c('F-') + ' 133 pm. The smaller the anion, the closer the ions and the stronger the electrostatic attraction.</p>' +
        math('NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)')
    },
    {
      id: 's2-1-q022', topic: 's2-1', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.1.3',
      stem: '<p>The lattice enthalpy of magnesium oxide is 3791 ' + LE + '. The lattice enthalpy of barium oxide is 3054 ' + LE + '. Explain why the lattice enthalpy of magnesium oxide is larger.</p>',
      answer: '<p>Both compounds contain a 2+ ion and the oxide ion, so the charges are the same. The ' + c('Mg^2+') + ' ion has a smaller ionic radius than the ' + c('Ba^2+') + ' ion (72 pm against 135 pm), so the ions are closer together in magnesium oxide. The electrostatic attraction between the oppositely charged ions is therefore stronger.</p>',
      markscheme: [
        'Mg²⁺ has a smaller ionic radius than Ba²⁺. Accept: the ions are closer together / smaller distance between the ions in MgO. Do not accept: “atomic radius” or “magnesium is smaller” without reference to ions.',
        'Stronger electrostatic attraction between the (oppositely charged) ions in MgO. Accept: stronger attraction between Mg²⁺ and O²⁻.'
      ],
      hints: ['Compare the two cations. Is it the charge or the ionic radius that is different?', 'Finish by naming the force that is stronger.']
    },
    {
      id: 's2-1-q023', topic: 's2-1', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Explain why sodium chloride conducts electricity when it is molten but not when it is solid.</p>',
      answer: '<p>In the solid, the ions are held in fixed positions in the lattice and cannot move. When the solid melts, the lattice breaks down and the ions are free to move, so they can carry charge.</p>',
      markscheme: [
        'Solid: ions are in fixed positions / ions cannot move (through the lattice).',
        'Molten: ions are free to move / mobile ions (carry the charge). Do not accept: electrons are free to move.'
      ],
      hints: ['Which charged particles does sodium chloride contain?', 'Write one sentence about the solid and one about the liquid.']
    },
    {
      id: 's2-1-q024', topic: 's2-1', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Which properties are typical of an ionic compound such as potassium bromide? Select all that apply.</p>',
      options: [
        'High melting point',
        'Low volatility',
        'Conducts electricity when solid',
        'Conducts electricity when molten',
        'Dissolves well in non-polar solvents such as hexane',
        'Brittle'
      ],
      answer: [0, 1, 3, 5],
      misconception: {
        2: 'In the solid the ions are held in fixed positions in the lattice, so they cannot carry charge.',
        4: 'Non-polar molecules do not attract ions strongly enough to pull them out of the lattice. Ionic compounds are more likely to dissolve in a polar solvent such as water.'
      },
      hints: ['Start from the structure: a lattice of ions held by strong electrostatic attraction.', 'For each property ask: does it need a lot of energy? Can the ions move?'],
      solution: '<p>The strong electrostatic attraction between the ions gives a high melting point and a low volatility. The solid does not conduct because its ions are in fixed positions, but the molten compound conducts because its ions are free to move. The solid is brittle: a force can bring ions of the same charge next to each other, and they repel. It does not dissolve in non-polar solvents.</p>'
    },

    /* =====================================================================
       Challenge
       ===================================================================== */
    {
      id: 's2-1-q025', topic: 's2-1', level: 'sl', tier: 'challenge', type: 'order', marks: 2,
      syllabus: 'Structure 2.1.3',
      stem: '<p>Use the charges of the ions, and the ionic radii in section 10 of the data booklet, to arrange these compounds in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>',
      options: [c('KCl'), c('NaF'), c('CaCl2'), c('BaO'), c('MgO')],
      hints: ['Sort by ion charge first. Which compounds contain only 1+ and 1− ions? Which contain a 2+ ion and a 2− ion?', 'Within a group with the same charges, the compound with the smaller ions has the larger lattice enthalpy.'],
      solution: '<p><strong>Charges first.</strong> KCl and NaF contain 1+ and 1− ions. ' + c('CaCl2') + ' contains a 2+ ion and 1− ions. BaO and MgO contain 2+ and 2− ions. Higher charges give stronger electrostatic attraction.</p>' +
        '<p><strong>Then ionic radius.</strong> ' + c('Na+') + ' (102 pm) and ' + c('F-') + ' (133 pm) are smaller than ' + c('K+') + ' (138 pm) and ' + c('Cl-') + ' (181 pm), so NaF is above KCl. ' + c('Mg^2+') + ' (72 pm) is smaller than ' + c('Ba^2+') + ' (135 pm), so MgO is above BaO.</p>' +
        math('KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)')
    },
    {
      id: 's2-1-q026', topic: 's2-1', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>Element X has the electron configuration ' + cfg('1s2 2s2 2p6 3s2 3p1') + '. Element Y has the electron configuration ' + cfg('1s2 2s2 2p4') + '. X and Y form an ionic compound. Which row is correct?</p>',
      options: [
        'Formula ' + c('X3Y2') + '. Both ions have the configuration ' + cfg('1s2 2s2 2p6') + '.',
        'Formula ' + c('X2Y3') + '. Both ions have the configuration ' + cfg('1s2 2s2 2p6') + '.',
        'Formula ' + c('X2Y3') + '. The ions have the configurations ' + cfg('1s2 2s2 2p6 3s2 3p1') + ' and ' + cfg('1s2 2s2 2p4') + '.',
        'Formula XY. Both ions have the configuration ' + cfg('1s2 2s2 2p6') + '.'
      ],
      answer: 1,
      misconception: {
        0: 'The configurations are right, but the subscripts are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.',
        2: 'The formula is right, but these are the configurations of the neutral atoms. The ions have lost or gained electrons.',
        3: 'One 3+ ion and one 2− ion leave a total charge of 1+. The charges must add up to zero.'
      },
      hints: ['How many outer electrons does each atom have? Which one is the metal?', 'X loses 3 electrons and Y gains 2. Write the two ions, then balance the charges.'],
      solution: '<p>X has 3 outer electrons (' + cfg('3s2 3p1') + ') and loses them: ' + c('X^3+') + ', ' + cfg('1s2 2s2 2p6') + '. Y has 6 outer electrons (' + cfg('2s2 2p4') + ') and gains 2: ' + c('Y^2-') + ', ' + cfg('1s2 2s2 2p6') + '.</p>' +
        math('2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−') + '<p>The formula is ' + c('X2Y3') + '. (X is aluminium and Y is oxygen.)</p>'
    },
    {
      id: 's2-1-q027', topic: 's2-1', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.1.3',
      stem: '<p>The table gives data booklet values for sodium fluoride and calcium oxide.</p>' +
        '<div class="table-scroll"><table class="data"><thead><tr><th scope="col">Compound</th><th scope="col">Ionic radii / pm</th><th scope="col" class="num">Lattice enthalpy / kJ mol<sup>−1</sup></th></tr></thead><tbody>' +
        '<tr><th scope="row">NaF</th><td>' + c('Na+') + ' 102, ' + c('F-') + ' 133</td><td class="num">930</td></tr>' +
        '<tr><th scope="row">CaO</th><td>' + c('Ca^2+') + ' 100, ' + c('O^2-') + ' 140</td><td class="num">3401</td></tr></tbody></table></div>' +
        '<p>Use the data to explain why the lattice enthalpy of calcium oxide is much larger than that of sodium fluoride.</p>',
      answer: '<p>The ionic radii are almost the same in the two compounds: the sum of the radii is 102 + 133 = 235 pm in NaF and 100 + 140 = 240 pm in CaO. So the distance between the ions cannot explain the difference. The ions in CaO have twice the charge (2+ and 2−, against 1+ and 1−). The electrostatic attraction between the oppositely charged ions is therefore much stronger in CaO, and more energy is needed to separate the ions.</p>',
      markscheme: [
        'The ionic radii / the distances between the ions are (almost) the same in both compounds (235 pm and 240 pm), so radius does not explain the difference.',
        'The ions in CaO have higher charges: 2+ and 2− against 1+ and 1−.',
        'Stronger electrostatic attraction between the (oppositely charged) ions in CaO. Accept: more energy needed to separate the ions.'
      ],
      hints: ['Add the two radii for each compound. What do you notice?', 'If the distance between the ions is nearly the same, which other factor is left?']
    },
    {
      id: 's2-1-q028', topic: 's2-1', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
      syllabus: 'Structure 2.1.3',
      stem: '<p>The lattice enthalpy of calcium fluoride, ' + c('CaF2') + ', is 2651 ' + LE + '. The lattice enthalpy of calcium chloride, ' + c('CaCl2') + ', is 2271 ' + LE + '. Which statements help to explain why the value for calcium fluoride is larger? Select all that apply.</p>',
      options: [
        'The fluoride ion has a smaller ionic radius than the chloride ion.',
        'The fluoride ion has a higher charge than the chloride ion.',
        'The centres of the ions are closer together in calcium fluoride.',
        'The electrostatic attraction between the ions is stronger in calcium fluoride.',
        'The intermolecular forces are stronger in calcium fluoride.'
      ],
      answer: [0, 2, 3],
      misconception: {
        1: 'Fluoride and chloride are both in group 17, so both ions have a charge of 1−. The charges are the same in the two compounds.',
        4: 'Ionic compounds have no molecules, so there are no intermolecular forces. The force is electrostatic attraction between ions.'
      },
      hints: ['Both compounds contain ' + c('Ca^2+') + '. Compare the two anions: charge and ionic radius.', 'Data booklet: ' + c('F-') + ' 133 pm, ' + c('Cl-') + ' 181 pm.'],
      solution: '<p>Both anions are 1−, so charge does not explain the difference. ' + c('F-') + ' (133 pm) is smaller than ' + c('Cl-') + ' (181 pm), so the centres of the ions are closer together in ' + c('CaF2') + '. The electrostatic attraction between the oppositely charged ions is stronger, and the lattice enthalpy is larger.</p>'
    },
    {
      id: 's2-1-q029', topic: 's2-1', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 2.1.2',
      stem: '<p>The dichromate ion has the formula ' + c('Cr2O7^2-') + '. What is the formula of iron(III) dichromate?</p>',
      options: [c('FeCr2O7'), c('Fe3(Cr2O7)2'), c('Fe2(Cr2O7)3'), c('Fe2Cr6O21')],
      answer: 2,
      misconception: {
        0: 'One ' + c('Fe^3+') + ' and one ' + c('Cr2O7^2-') + ' leave a total charge of 1+. This would be the formula of iron(II) dichromate.',
        1: 'The numbers are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.',
        3: 'The numbers of atoms are right, but the dichromate ion must stay together in brackets. The formula has to show that the compound contains three ' + c('Cr2O7^2-') + ' ions.'
      },
      hints: ['You do not need to know this ion. Treat it like sulfate: a 2− polyatomic ion.', 'Iron(III) is 3+. Find the smallest total charge that 3 and 2 both divide into.'],
      solution: '<p>The ions are ' + c('Fe^3+') + ' and ' + c('Cr2O7^2-') + '. The smallest common total is 6.</p>' +
        math('2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−') + '<p>Three dichromate ions go in brackets: ' + c('Fe2(Cr2O7)3') + '.</p>'
    },
    {
      id: 's2-1-q030', topic: 's2-1', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 2.1.3',
      stem: '<p>A student writes this about magnesium chloride, ' + c('MgCl2') + ':</p>' +
        '<p><em>“Solid magnesium chloride does not conduct electricity because it contains no ions. When it melts, its electrons become free to move, so it conducts. It has a high melting point because the intermolecular forces between the magnesium chloride molecules are strong.”</em></p>' +
        '<p>Identify the three errors and correct each one.</p>',
      answer: '<p>(1) The solid does contain ions, ' + c('Mg^2+') + ' and ' + c('Cl-') + '. It does not conduct because the ions are held in fixed positions in the lattice. (2) When it melts, it is the ions, not electrons, that become free to move and carry the charge. (3) There are no molecules and no intermolecular forces. The melting point is high because the electrostatic attraction between the oppositely charged ions in the lattice is strong, so a lot of energy is needed to overcome it.</p>',
      markscheme: [
        'The solid contains ions, but they are in fixed positions / cannot move (so it does not conduct).',
        'When molten, the ions (not electrons) are free to move / carry the charge.',
        'There are no molecules / no intermolecular forces: the high melting point is due to strong electrostatic attraction between oppositely charged ions (in the lattice).'
      ],
      hints: ['Take one sentence at a time. What particles is magnesium chloride made of?', 'Which particles move in a molten ionic compound?', 'What holds an ionic lattice together?']
    }
  ]);
})();
