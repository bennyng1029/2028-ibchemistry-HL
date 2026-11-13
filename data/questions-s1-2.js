/* ==========================================================================
   Question bank: Structure 1.2 — The nuclear atom
   32 original questions. q001–q022 are SL (1.2.1, 1.2.2); q023–q032 are
   Additional HL (1.2.3, mass spectra). Schema: docs/AUTHORING.md.
   Every numeric answer is recomputed independently by the checking script
   (see the builder's report); isotope data are always supplied in the stem.
   ========================================================================== */
(function () {
  'use strict';

  /* Full nuclear symbol: mass number over atomic number, then symbol and charge.
     Layout-only inline styles, so it also renders correctly on the practice page. */
  function nuc(A, Z, sym, charge) {
    return '<span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1">' +
      '<span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em">' +
      '<span>' + A + '</span><span>' + Z + '</span></span><span>' + sym + '</span>' +
      (charge ? '<span style="align-self:flex-start;font-size:0.7em;line-height:1.1">' + charge + '</span>' : '') + '</span>';
  }
  /* Mass number and symbol only, e.g. iso(35, 'Cl') or iso(35, 'Cl', '+'). */
  function iso(A, sym, charge) { return '<span class="nowrap"><sup>' + A + '</sup>' + sym + (charge ? '<sup>' + charge + '</sup>' : '') + '</span>'; }
  function math(line) { return '<div class="worked__math">' + line + '</div>'; }
  var Ar = '<i>A</i><sub>r</sub>', mz = '<i>m/z</i>';

  S1.questions.register('s1-2', [

    /* =====================================================================
       SL — foundation
       ===================================================================== */
    {
      id: 's1-2-q001', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Which statement describes the nucleus of an atom?</p>',
      options: [
        'It is positively charged and contains most of the mass of the atom.',
        'It is neutral and contains most of the mass of the atom.',
        'It is positively charged and takes up most of the volume of the atom.',
        'It is negatively charged and contains protons, neutrons and electrons.'
      ],
      answer: 0,
      misconception: {
        1: 'Neutrons are neutral, but the nucleus also contains protons, so the nucleus as a whole is positive. Only the whole atom is neutral.',
        2: 'The charge is right, but the nucleus is tiny. Most of the volume of an atom is the space occupied by the electrons.',
        3: 'Electrons are not in the nucleus. They occupy the space outside it, and the nucleus is positive.'
      },
      hints: ['Which particles are in the nucleus, and what charge does each one have?', 'Think about mass and volume separately. Where is the mass? Where is the space?'],
      solution: '<p>The nucleus contains protons (relative charge +1) and neutrons (charge 0), so it is positively charged. Protons and neutrons each have a relative mass of 1 and the mass of an electron is negligible, so nearly all the mass is in the nucleus. It is very small and dense.</p>'
    },
    {
      id: 's1-2-q002', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Which row gives the relative mass and relative charge of a <strong>neutron</strong>?</p>',
      options: [
        'Relative mass 1, relative charge +1',
        'Relative mass 1, relative charge 0',
        'Relative mass negligible, relative charge 0',
        'Relative mass negligible, relative charge −1'
      ],
      answer: 1,
      misconception: {
        0: 'This row describes a proton. A neutron has the same relative mass but no charge.',
        2: 'A neutron has no charge, but its mass is not negligible. It has about the same mass as a proton.',
        3: 'This row describes an electron.'
      },
      hints: ['The name is a clue to the charge.', 'A neutron is a nucleon, like a proton. Their masses are almost the same.'],
      solution: '<p>A neutron has a relative mass of 1 (the same as a proton) and a relative charge of 0. The proton is mass 1, charge +1. The electron has negligible mass and charge −1.</p>'
    },
    {
      id: 's1-2-q003', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>How many neutrons are in an atom of ' + nuc(31, 15, 'P') + '?</p>',
      options: ['15', '16', '31', '46'],
      answer: 1,
      misconception: {
        0: '15 is the atomic number: the number of protons (and of electrons in the neutral atom).',
        2: '31 is the mass number. It counts protons and neutrons together.',
        3: 'You added the two numbers. The mass number already includes the protons, so subtract instead.'
      },
      hints: ['The top number is protons + neutrons. The bottom number is protons.'],
      solution: math('neutrons = <i>A</i> − <i>Z</i> = 31 − 15 = 16')
    },
    {
      id: 's1-2-q004', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>How many electrons are in the ion ' + nuc(40, 20, 'Ca', '2+') + '?</p>',
      answer: 18, tolerance: { abs: 0.1 }, unit: 'electrons',
      hints: ['A neutral calcium atom has the same number of electrons as protons.', 'A 2+ ion has lost two electrons.'],
      solution: math('electrons in a Ca atom = <i>Z</i> = 20') + math('electrons in Ca<sup>2+</sup> = 20 − 2 = 18') +
        '<p>If you got 22, you added the charge. A positive ion has <em>lost</em> electrons.</p>'
    },
    {
      id: 's1-2-q005', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'multi', marks: 1,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Two atoms are isotopes of the same element. Which statements about them are correct? Select all that apply.</p>',
      options: [
        'They have the same number of protons.',
        'They have different numbers of neutrons.',
        'As neutral atoms, they have different numbers of electrons.',
        'They have the same mass number.',
        'They have the same chemical properties.'
      ],
      answer: [0, 1, 4],
      misconception: {
        2: 'Neutral atoms of the same element have the same number of protons, so they have the same number of electrons. A different number of electrons would make an ion, not an isotope.',
        3: 'Mass number = protons + neutrons. The neutrons differ, so the mass numbers differ.'
      },
      hints: ['Start from the definition: same element, different numbers of neutrons.', 'What fixes which element an atom is? What decides how it reacts?'],
      solution: '<p>Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons, so their mass numbers differ. As neutral atoms they have the same number of electrons, arranged in the same way, so their chemical properties are the same.</p>'
    },
    {
      id: 's1-2-q006', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.2.2',
      stem: '<p>A sample of rubidium contains 72.0% ' + iso(85, 'Rb') + ' and 28.0% ' + iso(87, 'Rb') + '. Calculate the relative atomic mass of rubidium in this sample, to two decimal places.</p>',
      answer: 85.56, tolerance: { abs: 0.006 }, sigfigs: 4,
      hints: ['Multiply each mass number by its percentage abundance.', '<span class="mono">(85 × 72.0 + 87 × 28.0) ÷ 100</span>'],
      solution: math('85 × 72.0 = 6120') + math('87 × 28.0 = 2436') + math(Ar + ' = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b>') +
        '<p>No units. Check: the answer is between 85 and 87, and nearer 85, the more abundant isotope.</p>'
    },
    {
      id: 's1-2-q007', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'order', marks: 2,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Put these steps in order to calculate a relative atomic mass from the mass numbers and percentage abundances of the isotopes.</p>',
      options: [
        'Check that the percentage abundances add up to 100.',
        'Multiply the mass of each isotope by its percentage abundance.',
        'Add the results together.',
        'Divide the total by 100.',
        'Round the answer, usually to two decimal places, and give no units.'
      ],
      hints: ['Rounding always comes last.'],
      solution: '<p>Weight each isotope first (mass × abundance), then add, then divide by 100 because the abundances are percentages. Round only at the end.</p>'
    },
    {
      id: 's1-2-q008', topic: 's1-2', level: 'sl', tier: 'foundation', type: 'multi', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Which statements about the fluoride ion ' + nuc(19, 9, 'F', '−') + ' are correct? Select all that apply.</p>',
      options: [
        'It has 9 protons.',
        'It has 19 neutrons.',
        'It has 10 neutrons.',
        'It has 10 electrons.',
        'It has 8 electrons.'
      ],
      answer: [0, 2, 3],
      misconception: {
        1: '19 is the mass number: protons and neutrons together. Neutrons = 19 − 9.',
        4: 'You subtracted the charge. A negative ion has gained an electron, so it has one more than the 9 protons.'
      },
      hints: ['Deal with the nucleus first: protons = <i>Z</i>, neutrons = <i>A</i> − <i>Z</i>.', 'A 1− charge means one more electron than protons.'],
      solution: math('protons = <i>Z</i> = 9') + math('neutrons = <i>A</i> − <i>Z</i> = 19 − 9 = 10') + math('electrons = 9 + 1 = 10')
    },

    /* =====================================================================
       SL — exam standard
       ===================================================================== */
    {
      id: 's1-2-q009', topic: 's1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.2',
      stem: '<p>The table shows the particles in four species. The letters are not chemical symbols.</p>' +
        '<div class="table-scroll"><table class="data"><thead><tr><th scope="col">Species</th><th scope="col" class="num">Protons</th><th scope="col" class="num">Neutrons</th><th scope="col" class="num">Electrons</th></tr></thead><tbody>' +
        '<tr><th scope="row">W</th><td class="num">17</td><td class="num">18</td><td class="num">17</td></tr>' +
        '<tr><th scope="row">X</th><td class="num">17</td><td class="num">20</td><td class="num">18</td></tr>' +
        '<tr><th scope="row">Y</th><td class="num">18</td><td class="num">20</td><td class="num">18</td></tr>' +
        '<tr><th scope="row">Z</th><td class="num">19</td><td class="num">20</td><td class="num">18</td></tr>' +
        '</tbody></table></div><p>Which two species are isotopes of the same element?</p>',
      options: ['W and X', 'X and Y', 'X and Z', 'Y and Z'],
      answer: 0,
      misconception: {
        1: 'X and Y have the same number of neutrons and electrons, but different numbers of protons. They are different elements.',
        2: 'X and Z both have 18 electrons and 20 neutrons, but 17 and 19 protons. Different protons means different elements.',
        3: 'Y and Z have the same number of neutrons. Isotopes need the same number of protons and <em>different</em> numbers of neutrons.'
      },
      hints: ['Which column decides what element a species is?', 'Isotopes: same protons, different neutrons. The electron column does not matter here.'],
      solution: '<p>W and X both have 17 protons, so they are the same element. They have 18 and 20 neutrons, so they are isotopes. X has one extra electron, so it is a 1− ion, but it is still an isotope of the same element as W.</p>'
    },
    {
      id: 's1-2-q010', topic: 's1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Which row is correct for the ion ' + nuc(34, 16, 'S', '2−') + '?</p>',
      options: [
        '16 protons, 18 neutrons, 14 electrons',
        '16 protons, 18 neutrons, 18 electrons',
        '16 protons, 34 neutrons, 18 electrons',
        '18 protons, 16 neutrons, 16 electrons'
      ],
      answer: 1,
      misconception: {
        0: 'You subtracted the charge. A 2− ion has gained two electrons: 16 + 2.',
        2: '34 is the mass number, not the number of neutrons. Neutrons = 34 − 16.',
        3: 'The charge does not change the number of protons. Sulfur always has 16 protons; the ion has two extra electrons.'
      },
      hints: ['Protons come from the bottom number, whatever the charge.', 'Negative ions have more electrons than protons.'],
      solution: math('protons = <i>Z</i> = 16') + math('neutrons = <i>A</i> − <i>Z</i> = 34 − 16 = 18') + math('electrons = 16 + 2 = 18')
    },
    {
      id: 's1-2-q011', topic: 's1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Separate beams of protons, neutrons and electrons, all travelling at the same speed, pass between a positively charged plate and a negatively charged plate. Which statement is correct?</p>',
      options: [
        'Protons and electrons are deflected by the same amount, in opposite directions.',
        'Electrons are deflected towards the positive plate, by more than the protons are deflected.',
        'Neutrons are deflected towards the negative plate, by less than the protons.',
        'Protons are deflected towards the positive plate, by less than the electrons.'
      ],
      answer: 1,
      misconception: {
        0: 'The directions are opposite and the charges are the same size, but an electron has a far smaller mass than a proton, so it is deflected much more.',
        2: 'Neutrons have no charge, so the plates have no effect on them. They travel straight on.',
        3: 'Protons are positive, so they are attracted to the negative plate, not the positive one.'
      },
      hints: ['Opposite charges attract. Which plate attracts each particle?', 'The force is the same size on a proton and an electron. Which one is easier to push off course?'],
      solution: '<p>Electrons (relative charge −1) are attracted to the positive plate. Protons (+1) are attracted to the negative plate. The charges have the same size, but the mass of an electron is negligible compared with a proton, so the electron beam bends much more. Neutrons (charge 0) are not deflected.</p>'
    },
    {
      id: 's1-2-q012', topic: 's1-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.2.1',
      stem: '<p>A species contains 26 protons, 30 neutrons and 23 electrons. Deduce its nuclear symbol, including the charge. Use the periodic table.</p>',
      answer: '<p>' + nuc(56, 26, 'Fe', '3+') + '</p><p>Atomic number = 26, so the element is iron. Mass number = 26 + 30 = 56. Charge = 26 − 23 = +3, written 3+.</p>',
      markscheme: [
        'Mass number 56 (top left) and atomic number 26 (bottom left) with the symbol Fe.',
        'Charge 3+ shown (accept +3).'
      ],
      hints: ['The number of protons tells you the element.', 'Mass number = protons + neutrons. Charge = protons − electrons.']
    },
    {
      id: 's1-2-q013', topic: 's1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Magnesium extracted from a meteorite contains 77.5% ' + iso(24, 'Mg') + ', 10.3% ' + iso(25, 'Mg') + ' and 12.2% ' + iso(26, 'Mg') + '. Calculate the relative atomic mass of magnesium in this sample, to two decimal places.</p>',
      answer: 24.347, tolerance: { abs: 0.006 }, sigfigs: 4,
      hints: ['Three isotopes means three products to add.', '<span class="mono">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>'],
      solution: math('24 × 77.5 = 1860.0') + math('25 × 10.3 = 257.5') + math('26 × 12.2 = 317.2') +
        math(Ar + ' = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347') + math(Ar + ' = <b>24.35</b> (2 d.p.)') +
        '<p>The data booklet value for magnesium is 24.31. That is for magnesium on Earth, and it does not score here. The question asks for the value from this sample.</p>'
    },
    {
      id: 's1-2-q014', topic: 's1-2', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Gallium has two isotopes. ' + iso(69, 'Ga') + ' has a relative mass of 68.93 and ' + iso(71, 'Ga') + ' has a relative mass of 70.92. The relative atomic mass of gallium is 69.72. Calculate the percentage abundance of ' + iso(69, 'Ga') + '.</p>',
      answer: 60.301507537688, tolerance: { abs: 0.3 }, sigfigs: [2, 3], unit: '%',
      hints: ['Let the percentage of <sup>69</sup>Ga be <i>x</i>. Then <sup>71</sup>Ga is 100 − <i>x</i>.', '<span class="mono">68.93x + 70.92(100 − x) = 6972</span>'],
      solution: math('68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972') + math('68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972') +
        math('7092 − 1.99<i>x</i> = 6972') + math('1.99<i>x</i> = 7092 − 6972 = 120') + math('<i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b>') +
        '<p>Check: 69.72 is closer to 68.93 than to 70.92, so <sup>69</sup>Ga should be the more abundant isotope. It is.</p>',
      answerDisplay: '60.3'
    },
    {
      id: 's1-2-q015', topic: 's1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Two samples of hydrogen gas are compared under the same conditions. One contains only ' + iso(1, 'H') + '<sub>2</sub> molecules and the other only ' + iso(2, 'H') + '<sub>2</sub> molecules. Which property is the <strong>same</strong> for both samples?</p>',
      options: [
        'The density of the gas',
        'The rate at which the gas diffuses',
        'The boiling point',
        'The way the gas reacts with oxygen'
      ],
      answer: 3,
      misconception: {
        0: 'Density depends on mass. Molecules of <sup>2</sup>H<sub>2</sub> have twice the mass of <sup>1</sup>H<sub>2</sub> molecules, so the gas is denser.',
        1: 'Rate of diffusion depends on mass. The heavier molecules move more slowly at the same temperature.',
        2: 'Boiling point is a physical property and differs slightly between isotopes because the masses differ.'
      },
      hints: ['Sort the options into physical properties and chemical properties.', 'Isotopes have the same number of electrons.'],
      solution: '<p>Isotopes have the same number of electrons and the same electron arrangement, so their chemical properties are the same: both gases react with oxygen in the same way to form water. Density, rate of diffusion and boiling point are physical properties that depend on mass, so they differ.</p>'
    },
    {
      id: 's1-2-q016', topic: 's1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.2',
      stem: '<p>An element has two isotopes. 75% of its atoms have a mass number of 35 and 25% have a mass number of 37. What is the relative atomic mass of the element?</p>',
      options: ['35.0', '35.5', '36.0', '36.5'],
      answer: 1,
      misconception: {
        0: '35.0 is the mass of the more common isotope. The 25% of heavier atoms pull the average up.',
        2: '36.0 is the simple average of 35 and 37. That would only be right if the two isotopes were equally abundant.',
        3: 'You swapped the abundances. 36.5 would be right for 25% of 35 and 75% of 37.'
      },
      hints: ['The answer must be closer to the more abundant isotope.', '<span class="mono">(35 × 75 + 37 × 25) ÷ 100</span>, or think of four atoms: three of 35 and one of 37.'],
      solution: math(Ar + ' = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b>')
    },
    {
      id: 's1-2-q017', topic: 's1-2', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Explain why two isotopes of the same element have the same chemical properties but different densities.</p>',
      answer: '<p>Isotopes have the same number of electrons (the same electron configuration), and chemical properties depend on the electrons, so the isotopes react in the same way. They have different numbers of neutrons, so their atoms have different masses, and density depends on mass.</p>',
      markscheme: [
        'Same number of electrons / same electron configuration (so same chemical properties).',
        'Different numbers of neutrons, so different mass (so different density).'
      ],
      hints: ['One part of the answer is about electrons. The other is about mass.']
    },
    {
      id: 's1-2-q018', topic: 's1-2', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Which species contains more electrons than neutrons?</p>',
      options: [nuc(2, 1, 'H'), nuc(9, 4, 'Be'), nuc(16, 8, 'O', '2−'), nuc(23, 11, 'Na', '+')],
      answer: 2,
      misconception: {
        0: 'This atom has 1 electron and 2 − 1 = 1 neutron. They are equal.',
        1: 'This atom has 4 electrons and 9 − 4 = 5 neutrons.',
        3: 'This ion has 11 − 1 = 10 electrons and 23 − 11 = 12 neutrons.'
      },
      hints: ['Work out neutrons (<i>A</i> − <i>Z</i>) and electrons for each one.', 'Remember to adjust the electrons for the charge.'],
      solution: '<p>' + nuc(16, 8, 'O', '2−') + ' has 16 − 8 = 8 neutrons and 8 + 2 = 10 electrons. It is the only species with more electrons than neutrons.</p>'
    },

    /* =====================================================================
       SL — challenge
       ===================================================================== */
    {
      id: 's1-2-q019', topic: 's1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.2.2',
      stem: '<p>An element has three isotopes with mass numbers 24, 25 and 26. In one sample, 79.0% of the atoms have a mass number of 24, and the relative atomic mass of the sample is 24.32. Calculate the percentage abundance of the isotope with mass number 25. Use the mass numbers as the masses of the isotopes.</p>',
      answer: 10.0, tolerance: { abs: 0.2 }, sigfigs: [2, 3], unit: '%',
      hints: [
        'The other two isotopes share what is left: 100 − 79.0 = 21.0%.',
        'Let the percentage with mass number 25 be <i>x</i>. Then the percentage with mass number 26 is 21.0 − <i>x</i>.',
        '<span class="mono">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>'
      ],
      solution: math('% of mass 25 = <i>x</i>, so % of mass 26 = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i>') +
        math('24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432') +
        math('1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432') + math('2442 − <i>x</i> = 2432') + math('<i>x</i> = <b>10.0%</b>') +
        '<p>Check: (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32.</p>'
    },
    {
      id: 's1-2-q020', topic: 's1-2', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.1',
      stem: '<p>Which pair of species has the same number of neutrons <strong>and</strong> the same number of electrons?</p>',
      options: [
        nuc(40, 18, 'Ar') + ' and ' + nuc(40, 20, 'Ca', '2+'),
        nuc(39, 19, 'K') + ' and ' + nuc(40, 20, 'Ca'),
        nuc(39, 19, 'K', '+') + ' and ' + nuc(40, 20, 'Ca', '2+'),
        nuc(35, 17, 'Cl', '−') + ' and ' + nuc(37, 17, 'Cl', '−')
      ],
      answer: 2,
      misconception: {
        0: 'Both have 18 electrons and the same mass number, but the neutrons differ: 40 − 18 = 22 and 40 − 20 = 20.',
        1: 'Both have 20 neutrons, but as neutral atoms they have 19 and 20 electrons.',
        3: 'Both have 18 electrons, but they are isotopes, so the neutrons differ: 18 and 20.'
      },
      hints: ['Make a small table: neutrons and electrons for each species.', 'Same mass number does not mean same number of neutrons.'],
      solution: '<p>' + nuc(39, 19, 'K', '+') + ': neutrons = 39 − 19 = 20, electrons = 19 − 1 = 18.</p><p>' + nuc(40, 20, 'Ca', '2+') + ': neutrons = 40 − 20 = 20, electrons = 20 − 2 = 18.</p><p>Both counts match, so this is the pair.</p>'
    },
    {
      id: 's1-2-q021', topic: 's1-2', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
      syllabus: 'Structure 1.2.2',
      stem: '<p>“Heavy water” has the formula ' + iso(2, 'H') + '<sub>2</sub>O. Ordinary water is almost entirely ' + iso(1, 'H') + '<sub>2</sub>O. In both, the oxygen is ' + iso(16, 'O') + '.</p><p>Sodium reacts with ordinary water to form sodium hydroxide and hydrogen. Predict, with reasons, how heavy water compares with ordinary water in (a) its reaction with sodium and (b) its density.</p>',
      answer: '<p>(a) Heavy water reacts with sodium in the same way, giving the same type of products, because ' + iso(1, 'H') + ' and ' + iso(2, 'H') + ' have the same number of electrons, so their chemical properties are the same.</p><p>(b) Heavy water is denser. Each ' + iso(2, 'H') + ' atom has one more neutron than ' + iso(1, 'H') + ', so a molecule of heavy water has a greater mass (2 + 2 + 16 = 20, compared with 1 + 1 + 16 = 18).</p>',
      markscheme: [
        'Same reaction / same chemical behaviour with sodium, because the isotopes have the same number of electrons (same electron configuration).',
        'Heavy water has the greater density.',
        'Because its molecules have a greater mass (extra neutron in each hydrogen atom; 20 compared with 18).'
      ],
      hints: ['Which of (a) and (b) is a chemical property, and which is a physical property?', 'Compare the masses of the two molecules by adding up mass numbers.']
    },
    {
      id: 's1-2-q022', topic: 's1-2', level: 'sl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.2.2',
      stem: '<p>Natural boron contains 19.9% ' + iso(10, 'B') + ' and 80.1% ' + iso(11, 'B') + '. An enriched sample is made by mixing natural boron with pure ' + iso(10, 'B') + ', so that for every 2 atoms of natural boron there is 1 added atom of ' + iso(10, 'B') + '. Calculate the relative atomic mass of boron in the enriched sample, to two decimal places. Use the mass numbers as the masses of the isotopes.</p>',
      answer: 10.534, tolerance: { abs: 0.006 }, sigfigs: 4,
      hints: [
        'Work with a convenient number of atoms: 200 atoms of natural boron and 100 added atoms of <sup>10</sup>B.',
        'Of the 200 natural atoms, 19.9% are <sup>10</sup>B. Find the total number of <sup>10</sup>B atoms out of 300.',
        'Then use the weighted mean with the new abundances.'
      ],
      solution: '<p>Take 200 atoms of natural boron and 100 atoms of added ' + iso(10, 'B') + ', 300 atoms in total.</p>' +
        math('<sup>10</sup>B atoms = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8') + math('<sup>11</sup>B atoms = 300 − 139.8 = 160.2') +
        math(Ar + ' = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300') + math(Ar + ' = 3160.2 / 300 = 10.534 = <b>10.53</b> (2 d.p.)') +
        '<p>This is lower than the data booklet value of 10.81, as expected: the sample has extra atoms of the lighter isotope.</p>'
    },

    /* =====================================================================
       Additional HL — mass spectra (1.2.3)
       ===================================================================== */
    {
      id: 's1-2-q023', topic: 's1-2', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.3',
      stem: '<p>The mass spectrum of an element shows three peaks, all from ions with a 1+ charge. What does the <strong>height</strong> of each peak show?</p>',
      options: [
        'The mass of that isotope',
        'The relative abundance of that isotope',
        'The number of neutrons in that isotope',
        'The charge on that ion'
      ],
      answer: 1,
      misconception: {
        0: 'The mass is read from the position of the peak on the horizontal ' + mz + ' axis, not from its height.',
        2: 'You can work out the neutrons from the position of the peak (mass number minus atomic number), not from its height.',
        3: 'The charge is part of the ' + mz + ' value on the horizontal axis. Here every ion is 1+.'
      },
      hints: ['What is plotted on the vertical axis of a mass spectrum?'],
      solution: '<p>The vertical axis is relative abundance, so the height of a peak shows how much of that isotope is present. The position on the horizontal axis (' + mz + ') gives the mass of the isotope. Three peaks means three isotopes.</p>'
    },
    {
      id: 's1-2-q024', topic: 's1-2', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.2.3',
      stem: '<p>The mass spectrum of a sample of lithium has two peaks: ' + mz + ' 6 with a relative abundance of 7.6%, and ' + mz + ' 7 with a relative abundance of 92.4%. Calculate the relative atomic mass of lithium in this sample, to two decimal places.</p>',
      answer: 6.924, tolerance: { abs: 0.006 }, sigfigs: 3,
      hints: ['The heights are percentages and add up to 100, so this is the usual weighted mean.', '<span class="mono">(6 × 7.6 + 7 × 92.4) ÷ 100</span>'],
      solution: math('6 × 7.6 = 45.6') + math('7 × 92.4 = 646.8') + math(Ar + ' = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b> (2 d.p.)') +
        '<p>The data booklet gives 6.94. Write the value you calculated from the spectrum.</p>'
    },
    {
      id: 's1-2-q025', topic: 's1-2', level: 'ahl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.2.3',
      stem: '<p>The mass spectrum of a sample of copper has two peaks: ' + mz + ' 63 with a relative abundance of 100.0, and ' + mz + ' 65 with a relative abundance of 44.6. Calculate the relative atomic mass of copper in this sample, to two decimal places.</p>',
      answer: 63.61687413554634, tolerance: { abs: 0.006 }, sigfigs: 4,
      hints: ['Add the two peak heights. Is the total 100?', '<span class="mono">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>'],
      solution: math('total height = 100.0 + 44.6 = 144.6') + math('63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0') +
        math(Ar + ' = 9199.0 / 144.6 = 63.6168… = <b>63.62</b> (2 d.p.)') +
        '<p>The heights do not add up to 100, so divide by their total. The data booklet value, 63.55, does not score: the question asks for the value from this spectrum.</p>'
    },
    {
      id: 's1-2-q026', topic: 's1-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.3',
      stem: '<p>The mass spectrum of an element has two peaks. The peak at ' + mz + ' 10 has a height of 1 unit and the peak at ' + mz + ' 11 has a height of 4 units. What is the relative atomic mass of the element?</p>',
      options: ['10.2', '10.5', '10.8', '11.0'],
      answer: 2,
      misconception: {
        0: 'You swapped the heights. 10.2 would be right if the peak at 10 were the taller one.',
        1: '10.5 is the simple average of 10 and 11. The peaks are not the same height, so the isotopes must be weighted.',
        3: '11.0 is the mass of the more abundant isotope. The atoms of mass 10 pull the average down a little.'
      },
      hints: ['The heights add up to 5, not 100. Divide by 5.', '<span class="mono">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>'],
      solution: math(Ar + ' = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b>')
    },
    {
      id: 's1-2-q027', topic: 's1-2', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.2.3',
      stem: '<p>Bromine has two isotopes, ' + iso(79, 'Br') + ' and ' + iso(81, 'Br') + ', in almost equal abundance. The mass spectrum of bromine, ' + '<span class="chem">Br2</span>' + ', has peaks at ' + mz + ' 158, 160 and 162 with heights in the ratio 1 : 2 : 1. Explain why there are three peaks and why the middle peak is the tallest.</p>',
      answer: '<p>The three peaks are from the three possible combinations of isotopes in a <span class="chem">Br2+</span> ion: ' + iso(79, 'Br') + '–' + iso(79, 'Br') + ' (79 + 79 = 158), ' + iso(79, 'Br') + '–' + iso(81, 'Br') + ' (79 + 81 = 160) and ' + iso(81, 'Br') + '–' + iso(81, 'Br') + ' (81 + 81 = 162).</p><p>The mixed molecule can form in two ways (' + iso(79, 'Br') + '–' + iso(81, 'Br') + ' or ' + iso(81, 'Br') + '–' + iso(79, 'Br') + '), so it is twice as likely as either of the others. Chance: ½ × ½ = ¼, 2 × ½ × ½ = ½, ½ × ½ = ¼.</p>',
      markscheme: [
        'Peaks identified with the isotope combinations: 158 is two <sup>79</sup>Br, 160 is one <sup>79</sup>Br and one <sup>81</sup>Br, 162 is two <sup>81</sup>Br.',
        'The mixed combination can form in two ways / is twice as probable (as each of the others).'
      ],
      hints: ['Each molecule has two atoms. List every way of choosing them from the two isotopes, and add up the masses.', 'Think of tossing two coins. Why is “one head and one tail” more likely than “two heads”?']
    },
    {
      id: 's1-2-q028', topic: 's1-2', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.2.3',
      stem: '<p>The table gives the peaks in the mass spectrum of a sample of germanium.</p>' +
        '<div class="table-scroll"><table class="data"><thead><tr><th scope="col">' + mz + '</th><th scope="col" class="num">Relative abundance</th></tr></thead><tbody>' +
        '<tr><th scope="row">70</th><td class="num">56.4</td></tr><tr><th scope="row">72</th><td class="num">75.2</td></tr><tr><th scope="row">73</th><td class="num">21.2</td></tr>' +
        '<tr><th scope="row">74</th><td class="num">100.0</td></tr><tr><th scope="row">76</th><td class="num">21.2</td></tr></tbody></table></div>' +
        '<p>Calculate the relative atomic mass of germanium in this sample, to two decimal places.</p>',
      answer: 72.7051094890511, tolerance: { abs: 0.006 }, sigfigs: 4,
      hints: [
        'Add up the five relative abundances first. The total is not 100.',
        'Multiply each ' + mz + ' by its relative abundance and add the five products.',
        'Divide the sum of the products by the total relative abundance.'
      ],
      solution: math('total = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0') +
        math('70 × 56.4 = 3948.0') + math('72 × 75.2 = 5414.4') + math('73 × 21.2 = 1547.6') + math('74 × 100.0 = 7400.0') + math('76 × 21.2 = 1611.2') +
        math('sum = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2') + math(Ar + ' = 19921.2 / 274.0 = 72.7051… = <b>72.71</b> (2 d.p.)') +
        '<p>Check: the answer lies between 70 and 76. The data booklet value, 72.63, is slightly different and does not score here.</p>'
    },
    {
      id: 's1-2-q029', topic: 's1-2', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.3',
      stem: '<p>Chlorine has two isotopes, ' + iso(35, 'Cl') + ' and ' + iso(37, 'Cl') + ', with abundances in the ratio 3 : 1. The mass spectrum of chlorine, <span class="chem">Cl2</span>, has peaks at ' + mz + ' 70, 72 and 74. What is the ratio of the heights of these peaks, in that order?</p>',
      options: ['1 : 2 : 1', '3 : 2 : 1', '9 : 3 : 1', '9 : 6 : 1'],
      answer: 3,
      misconception: {
        0: '1 : 2 : 1 is the pattern when the two isotopes are equally abundant, as in bromine. Here <sup>35</sup>Cl is three times as common.',
        1: 'The chances have to be multiplied, one factor for each atom in the molecule: ¾ × ¾ for the peak at 70, and so on.',
        2: 'Nearly right, but the mixed molecule can form in two ways (<sup>35</sup>Cl–<sup>37</sup>Cl or <sup>37</sup>Cl–<sup>35</sup>Cl), so its chance is 2 × ¾ × ¼.'
      },
      hints: ['The chance that one atom is <sup>35</sup>Cl is ¾. The chance that it is <sup>37</sup>Cl is ¼.', 'A molecule has two atoms: multiply the two chances. Count the mixed molecule both ways round.'],
      solution: math(mz + ' 70 (<sup>35</sup>Cl–<sup>35</sup>Cl): ¾ × ¾ = 9/16') + math(mz + ' 72 (<sup>35</sup>Cl–<sup>37</sup>Cl, two ways): 2 × ¾ × ¼ = 6/16') +
        math(mz + ' 74 (<sup>37</sup>Cl–<sup>37</sup>Cl): ¼ × ¼ = 1/16') + '<p>Ratio of heights = <strong>9 : 6 : 1</strong>.</p>'
    },
    {
      id: 's1-2-q030', topic: 's1-2', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.2.3',
      stem: '<p>An element has two isotopes, with mass numbers 85 and 87, and a relative atomic mass of 85.47. In its mass spectrum the peak at ' + mz + ' 85 is the taller one and is given a relative abundance of 100. Calculate the relative abundance of the peak at ' + mz + ' 87 on the same scale. Use the mass numbers as the masses of the isotopes.</p>',
      answer: 30.718954248366, tolerance: { rel: 0.01 }, sigfigs: [2, 3],
      hints: [
        'First find the percentage abundance of each isotope from the relative atomic mass.',
        '<span class="mono">85x + 87(100 − x) = 8547</span> gives the percentage of the isotope of mass 85.',
        'Then scale: if the taller peak is 100, the other is (its percentage ÷ the percentage of the taller one) × 100.'
      ],
      solution: math('85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547') + math('8700 − 2<i>x</i> = 8547') + math('<i>x</i> = 153 / 2 = 76.5% (mass 85), so mass 87 is 23.5%') +
        math('relative abundance of the peak at 87 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b>') +
        '<p>Check: (85 × 100 + 87 × 30.7) / 130.7 = 85.47.</p>',
      answerDisplay: '30.7'
    },
    {
      id: 's1-2-q031', topic: 's1-2', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.3',
      stem: '<p>The mass spectrum of a sample of magnesium has a peak at ' + mz + ' 25. Which species causes this peak?</p>',
      options: [iso(25, 'Mg'), iso(25, 'Mg', '+'), iso(25, 'Mg', '−'), iso(25, 'Mg', '2+')],
      answer: 1,
      misconception: {
        0: 'The isotope is right, but the charge is missing. A mass spectrometer detects positive ions, and in an exam the mark is lost without the +.',
        2: 'The particles detected in a mass spectrometer are positive ions, not negative ions.',
        3: 'A 2+ ion of mass 25 has ' + mz + ' = 25 ÷ 2 = 12.5, so it would not give a peak at 25.'
      },
      hints: ['What does the “z” in ' + mz + ' stand for?', 'The particles detected are ions. Are they positive or negative?'],
      solution: '<p>The particles detected are positive ions. For a peak at ' + mz + ' 25 the ion has mass 25 and a 1+ charge: ' + iso(25, 'Mg', '+') + '. Always include the charge when you name the species that causes a peak.</p>'
    },
    {
      id: 's1-2-q032', topic: 's1-2', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.2.3',
      stem: '<p>Bromine has two isotopes, ' + iso(79, 'Br') + ' and ' + iso(81, 'Br') + ', in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has three peaks near ' + mz + ' 160. It also has exactly two more peaks, at ' + mz + ' 79 and 81, with almost equal heights. Which species cause the peaks at ' + mz + ' 79 and 81?</p>',
      options: [
        iso(79, 'Br') + ' and ' + iso(81, 'Br') + ' atoms',
        iso(79, 'Br', '+') + ' and ' + iso(81, 'Br', '+') + ' ions',
        iso(79, 'Br', '−') + ' and ' + iso(81, 'Br', '−') + ' ions',
        '<span class="chem">Br2</span> molecules that have lost two electrons'
      ],
      answer: 1,
      misconception: {
        0: 'The isotopes are right, but neutral atoms are not detected. The species must be positive ions, so the + is needed.',
        2: 'Bromine forms bromide ions in its compounds, but the particles detected in a mass spectrometer are positive ions.',
        3: 'Ions with a 2+ charge would appear at half their mass: 158 ÷ 2 = 79, 160 ÷ 2 = 80 and 162 ÷ 2 = 81. That would give three peaks, with the tallest at 80, not two equal peaks.'
      },
      hints: ['Compare 79 and 81 with the mass numbers of the two isotopes.', 'Some molecules break into single atoms in the instrument. What charge must a particle have to be detected?'],
      solution: '<p>Some <span class="chem">Br2</span> molecules break into single atoms in the instrument. The atoms are detected as positive ions: ' + iso(79, 'Br', '+') + ' at ' + mz + ' 79 and ' + iso(81, 'Br', '+') + ' at ' + mz + ' 81. The two isotopes are almost equally abundant, so the two peaks have almost equal heights.</p>'
    }
  ]);
})();
