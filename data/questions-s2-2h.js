/* ==========================================================================
   Structure Lab — question bank for Structure 2.2, Additional HL
   (2.2.11 resonance, 2.2.12 benzene, 2.2.13 expanded octets and five/six
   electron domains, 2.2.14 formal charge, 2.2.15 sigma and pi bonds,
   2.2.16 hybridization).  Every question is level 'ahl'.
   Schema: docs/AUTHORING.md section 4.  All questions are original.
   Bond lengths for single and double bonds are IB data booklet values
   (section 11).  Values that are not in the booklet (bond lengths in ozone
   and benzene, enthalpies of hydrogenation, wavelengths that dissociate
   O2 and O3) are rounded literature values and are always given in the stem.
   Counts, formal charges and electron totals are recomputed by
   scratchpad/s2-2h/check.js.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  var MINUS = '−';
  function c(f) { return '<span class="chem">' + f + '</span>'; }
  function m(line) { return '<div class="worked__math">' + line + '</div>'; }
  var KJ = '<span class="unit">kJ mol-1</span>';

  S1.questions.register('s2-2h', [

    /* ------------------------------------------------------------------ 2.2.11 Resonance */
    {
      id: 's2-2h-q001', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.11',
      stem: '<p>For which species can you draw more than one Lewis formula, where the formulas differ only in the position of a double bond?</p>',
      options: [c('HCHO') + ' (methanal)', c('C2H4') + ' (ethene)', c('NO3-') + ' (nitrate ion)', c('HCN') + ' (hydrogen cyanide)'],
      answer: 2,
      misconception: {
        0: 'In methanal the double bond can only go to the oxygen atom. Hydrogen forms one single bond only. One position means no resonance.',
        1: 'In ethene the double bond can only be between the two carbon atoms. There is no second position for it.',
        3: 'HCN has a triple bond between C and N. Hydrogen cannot take part in a multiple bond, so there is only one possible formula.'
      },
      hints: ['Look for a central atom joined to two or more atoms of the same element.', 'Ask: could the double bond be drawn to a different atom and still give a correct Lewis formula?'],
      solution: '<p>In the nitrate ion, nitrogen is joined to three oxygen atoms. The one N=O double bond can be drawn to any of the three. That gives three resonance structures. In the other species the multiple bond has only one possible position.</p>'
    },
    {
      id: 's2-2h-q002', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.11',
      stem: '<p>The data booklet gives these bond lengths: N–O 136 pm and N=O 114 pm. One Lewis formula of the nitrate ion, ' + c('NO3-') + ', shows one N=O bond and two N–O bonds.</p><p>Which describes the nitrogen–oxygen bonds that are measured in the nitrate ion?</p>',
      options: ['One bond of 114 pm and two bonds of 136 pm', 'Three bonds of 114 pm', 'Three bonds of 136 pm', 'Three equal bonds, with a length between 114 pm and 136 pm'],
      answer: 3,
      misconception: {
        0: 'This treats one resonance structure as the real ion. The ion does not have one fixed double bond. The π electrons are delocalized over all three bonds.',
        1: 'There is only one double bond to share among three positions, so the bonds are not all full double bonds.',
        2: 'The double bond does not disappear. Its π electrons are shared by all three bonds, which makes each one shorter than a single bond.'
      },
      hints: ['How many resonance structures does the nitrate ion have?', 'The real ion is a mix (hybrid) of all of them. What does that do to the three bonds?'],
      solution: '<p>The nitrate ion has three resonance structures. The π electrons are delocalized over the nitrogen atom and all three oxygen atoms. So all three bonds are the same, and each is between a single and a double bond. The measured value is about 124 pm.</p>'
    },
    {
      id: 's2-2h-q003', level: 'ahl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 2.2.11',
      stem: '<p>A Lewis formula of ozone, ' + c('O3') + ', shows one O=O double bond and one O–O single bond. The data booklet values are O–O 148 pm and O=O 121 pm.</p><p>Measurements show that both bonds in ozone are 128 pm long. Explain this.</p>',
      answer: '<p>Ozone has two resonance structures, because the double bond can be drawn on either side of the central atom. The real molecule is a hybrid of the two. The π electrons are delocalized over all three oxygen atoms, so both bonds are identical and each is between a single and a double bond.</p>',
      markscheme: [
        'Two resonance structures can be drawn / the double bond has two possible positions (accept: ozone has resonance).',
        'The (π) electrons are delocalized over all three oxygen atoms, so both bonds are the same / each bond is intermediate between a single and a double bond.'
      ],
      hints: ['Draw the Lewis formula with the double bond on the left. Now draw it with the double bond on the right.', 'Use the word “delocalized” and say what it does to the two bonds.'],
      solution: '<p>Two resonance structures exist. Neither is the real molecule. The π electrons are delocalized over the three atoms, so both bonds are equal in length. 128 pm lies between 121 pm (double) and 148 pm (single).</p>'
    },
    {
      id: 's2-2h-q004', level: 'ahl', tier: 'challenge', type: 'short', marks: 3, syllabus: 'Structure 2.2.11',
      stem: '<p>Ultraviolet light can break the bonds in oxygen, ' + c('O2') + ', and in ozone, ' + c('O3') + '. The bond in ' + c('O2') + ' is broken only by light with a wavelength shorter than about 242 nm. The bonds in ' + c('O3') + ' are broken by light with wavelengths up to about 330 nm.</p><p>Explain this difference, using the bonding in the two molecules.</p>',
      answer: '<p>' + c('O2') + ' has a double bond, O=O. In ozone, resonance means the π electrons are delocalized, so each bond is between a single and a double bond. The bonds in ozone are therefore weaker than the bond in ' + c('O2') + ' and need less energy to break. Light of lower energy has a longer wavelength (<i>E</i> = <i>hc</i>/<i>λ</i>), so longer wavelengths can break ozone.</p>',
      markscheme: [
        'O<sub>2</sub> has a double bond, AND the bonds in O<sub>3</sub> are between single and double bonds (because of resonance / delocalization).',
        'The bonds in ozone are weaker / need less energy to break than the bond in O<sub>2</sub>.',
        'Lower energy corresponds to a longer wavelength (lower frequency), so light of longer wavelength can break the bonds in ozone.'
      ],
      hints: ['Compare the type of bond in each molecule. Ozone has two resonance structures.', 'Which bond is stronger: a double bond, or a bond between single and double?', 'Link energy and wavelength: <i>E</i> = <i>hf</i> and <i>c</i> = <i>λf</i> (Structure 1.3).'],
      solution: '<p>Step 1: bonding. ' + c('O2') + ' has O=O. In ' + c('O3') + ' the two bonds are equal and intermediate between single and double.</p><p>Step 2: strength. An intermediate bond is weaker than a double bond, so less energy is needed.</p><p>Step 3: light. A photon with less energy has a longer wavelength. So ozone is broken by longer wavelengths than oxygen.</p>'
    },

    /* ------------------------------------------------------------------ 2.2.12 Benzene */
    {
      id: 's2-2h-q005', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.12',
      stem: '<p>Which statement about the carbon–carbon bonds in benzene, ' + c('C6H6') + ', is correct?</p>',
      options: ['Three short C=C bonds and three long C–C bonds alternate around the ring.', 'All six bonds have the same length, between the lengths of C–C and C=C.', 'All six bonds are single bonds, the same length as in ethane.', 'All six bonds are double bonds, the same length as in ethene.'],
      answer: 1,
      misconception: {
        0: 'This is one resonance structure, not the real molecule. Measurements show six equal bonds.',
        2: 'Six single bonds would leave each carbon with only three bonds. The measured length (about 140 pm) is shorter than C–C (154 pm).',
        3: 'Six double bonds would give each carbon too many bonds. The measured length (about 140 pm) is longer than C=C (134 pm).'
      },
      hints: ['Benzene has two resonance structures. The real molecule is a hybrid of them.'],
      solution: '<p>The six π electrons in benzene are delocalized over all six carbon atoms. So all six carbon–carbon bonds are identical. Their length, about 140 pm, is between C–C (154 pm) and C=C (134 pm).</p>'
    },
    {
      id: 's2-2h-q006', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.12',
      stem: '<p>Benzene was once drawn as a ring with alternating single and double bonds. Which observation is evidence <strong>against</strong> that structure?</p>',
      options: ['Benzene has the molecular formula ' + c('C6H6') + '.', 'Benzene reacts with hydrogen to form cyclohexane, ' + c('C6H12') + '.', 'All the carbon–carbon bonds in benzene have the same length.', 'Benzene burns in oxygen to form carbon dioxide and water.'],
      answer: 2,
      misconception: {
        0: 'A ring with alternating single and double bonds also has the formula C<sub>6</sub>H<sub>6</sub>. This fits both models, so it is not evidence against one of them.',
        1: 'A molecule with three C=C bonds would also add three H<sub>2</sub> to form cyclohexane. This fits both models.',
        3: 'Every hydrocarbon burns to form carbon dioxide and water. This says nothing about the bonds in the ring.'
      },
      hints: ['Ask of each observation: would a ring with three real C=C bonds also do this?', 'Single and double bonds have different lengths.'],
      solution: '<p>Alternating single and double bonds would have two different lengths (154 pm and 134 pm). All six bonds in benzene are equal (about 140 pm). This is physical evidence that the π electrons are delocalized.</p>'
    },
    {
      id: 's2-2h-q007', level: 'ahl', tier: 'exam', type: 'multi', marks: 2, syllabus: 'Structure 2.2.12',
      stem: '<p>Which of these are <strong>chemical</strong> evidence that benzene does not contain three ordinary C=C double bonds? Select all that apply.</p>',
      options: [
        'Benzene reacts by substitution rather than addition.',
        'All the carbon–carbon bonds in benzene are 140 pm long.',
        'The enthalpy of hydrogenation of benzene is less exothermic than three times that of cyclohexene.',
        'Benzene is a planar regular hexagon with bond angles of 120°.',
        'Benzene does not readily decolourize bromine water.'
      ],
      answer: [0, 2, 4],
      misconception: {
        1: 'Bond length is measured, not seen in a reaction. It is physical evidence. If a question asks for chemical evidence, this does not score.',
        3: 'Shape and bond angles are physical evidence. Chemical evidence is about reactions and their energy changes.'
      },
      hints: ['Chemical evidence comes from what benzene does in reactions, including the energy change of a reaction.', 'Physical evidence comes from measuring the molecule itself: lengths, angles, shape.'],
      solution: '<p>Chemical: substitution instead of addition; no fast reaction with bromine water; a less exothermic enthalpy of hydrogenation than expected. Physical: equal bond lengths; a planar regular hexagon.</p>'
    },
    {
      id: 's2-2h-q008', level: 'ahl', tier: 'exam', type: 'short', marks: 3, syllabus: 'Structure 2.2.12',
      stem: '<p>Benzene is sometimes drawn as a ring with alternating single and double bonds.</p><p>Discuss why this drawing does not describe benzene well. Give one piece of physical evidence and one piece of chemical evidence, and state how the bonding in benzene is described instead.</p>',
      answer: '<p>Physical evidence: all six carbon–carbon bonds have the same length (about 140 pm), between a single and a double bond. Alternating bonds would have two different lengths. Chemical evidence: benzene reacts by substitution, not by addition, so it does not behave like an alkene. The bonding is described as a ring of six carbon atoms with six delocalized π electrons, spread over the whole ring.</p>',
      markscheme: [
        'Physical evidence: all carbon–carbon bond lengths are equal / intermediate between single and double (accept: regular planar hexagon, all bond angles 120°).',
        'Chemical evidence: undergoes substitution rather than addition / does not readily decolourize bromine water (accept: enthalpy of hydrogenation less exothermic than expected for three C=C).',
        'Bonding: delocalized π electrons (spread over all six carbon atoms / the ring). The word “π” (or “pi”) is needed.'
      ],
      hints: ['Physical evidence is something you measure about the molecule. Chemical evidence is about a reaction.', 'For the bonding, use the words “delocalized” and “π electrons”.'],
      solution: '<p>One physical point (equal bond lengths), one chemical point (substitution, not addition), then the model: delocalized π electrons around the ring. If you give two physical points and no chemical point, you lose a mark.</p>'
    },
    {
      id: 's2-2h-q009', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.12',
      stem: '<p>Cyclohexene has one C=C bond. Its enthalpy of hydrogenation is ' + MINUS + '120 ' + KJ + '. The enthalpy of hydrogenation of benzene to cyclohexane is ' + MINUS + '208 ' + KJ + '.</p><p>What do these data show?</p>',
      options: [
        'Benzene is about 152 ' + KJ + ' more stable than a ring with three separate C=C bonds.',
        'Benzene is about 152 ' + KJ + ' less stable than a ring with three separate C=C bonds.',
        'Benzene contains between one and two C=C bonds.',
        'About 152 ' + KJ + ' must be supplied to hydrogenate benzene.'
      ],
      answer: 0,
      misconception: {
        1: 'Benzene gives out less energy than predicted when it is hydrogenated. It must start lower in energy, which means more stable, not less.',
        2: 'Dividing 208 by 120 treats the π electrons as separate double bonds. The data show the opposite: the electrons are not in separate double bonds.',
        3: 'Both values are negative, so hydrogenation of benzene is exothermic. The 152 is a difference between a prediction and a measurement.'
      },
      hints: ['What would you predict for a ring with three separate C=C bonds?', 'Compare your prediction with ' + MINUS + '208 ' + KJ + '. Which is less exothermic?'],
      solution: m('Predicted for three C=C: 3 × (' + MINUS + '120) = ' + MINUS + '360 kJ mol<sup>' + MINUS + '1</sup>') + m('Difference: 360 ' + MINUS + ' 208 = 152 kJ mol<sup>' + MINUS + '1</sup>') + '<p>Benzene releases 152 ' + KJ + ' less than predicted. So benzene is lower in energy (more stable) than the model with three separate double bonds. Delocalization of the π electrons lowers the energy.</p>'
    },

    /* ------------------------------------------------------------------ 2.2.13 Expanded octets, five and six domains */
    {
      id: 's2-2h-q010', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>What are the molecular geometry and the bond angles of ' + c('PCl5') + '?</p>',
      options: ['Trigonal bipyramidal; 90° and 120°', 'Square pyramidal; 90°', 'Trigonal planar; 120°', 'Octahedral; 90°'],
      answer: 0,
      misconception: {
        1: 'Square pyramidal needs six electron domains, one of them a lone pair. Phosphorus in PCl<sub>5</sub> has five domains and no lone pair.',
        2: 'Trigonal planar is for three electron domains. Phosphorus here has five bonding domains.',
        3: 'Octahedral needs six electron domains. Count the bonds: there are five.'
      },
      hints: ['Phosphorus has 5 valence electrons. How many are used in the five P–Cl bonds?', 'Five electron domains and no lone pairs.'],
      solution: '<p>P has 5 valence electrons and uses all 5 in bonds. That is five bonding domains and no lone pairs. Five domains are arranged in a trigonal bipyramid: three bonds in a plane at 120°, and two bonds at 90° to that plane.</p>'
    },
    {
      id: 's2-2h-q011', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>How many lone pairs are on the chlorine atom in ' + c('ClF3') + '?</p>',
      answer: 2, tolerance: { abs: 0.01 }, unit: 'lone pairs',
      hints: ['Chlorine is in group 17. How many valence electrons does it have?', 'Three electrons are used in the three Cl–F bonds. Pair up the rest.'],
      solution: m('Valence electrons on Cl = 7') + m('Used in three Cl–F bonds = 3') + m('Left over = 7 ' + MINUS + ' 3 = 4 electrons = <b>2 lone pairs</b>') + '<p>So chlorine has 3 + 2 = 5 electron domains.</p>'
    },
    {
      id: 's2-2h-q012', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>What are the molecular geometry and the F–S–F bond angle between neighbouring bonds in ' + c('SF6') + '?</p>',
      options: ['Tetrahedral; 109.5°', 'Trigonal bipyramidal; 90° and 120°', 'Octahedral; 90°', 'Hexagonal planar; 60°'],
      answer: 2,
      misconception: {
        0: 'Tetrahedral is for four electron domains. Sulfur here has six bonds.',
        1: 'Trigonal bipyramidal is for five electron domains. Count the fluorine atoms: there are six.',
        3: 'Electron domains spread out in three dimensions to get as far apart as possible. Six domains in one flat plane would be only 60° apart.'
      },
      hints: ['Sulfur has 6 valence electrons and forms six bonds.', 'Six electron domains, no lone pairs.'],
      solution: '<p>S uses all 6 valence electrons in six S–F bonds. Six bonding domains with no lone pairs give an octahedral molecule. Neighbouring bonds are at 90°.</p>'
    },
    {
      id: 's2-2h-q013', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>What are the electron domain geometry and the molecular geometry of ' + c('SF4') + '?</p>',
      options: [
        'Electron domain geometry: tetrahedral. Molecular geometry: tetrahedral.',
        'Electron domain geometry: trigonal bipyramidal. Molecular geometry: trigonal bipyramidal.',
        'Electron domain geometry: trigonal bipyramidal. Molecular geometry: seesaw.',
        'Electron domain geometry: octahedral. Molecular geometry: square planar.'
      ],
      answer: 2,
      misconception: {
        0: 'This counts only the four bonds. Sulfur has 6 valence electrons and uses 4, so one lone pair is left. That makes five domains.',
        1: 'The electron domain geometry is right. But the molecular geometry describes the atoms only, and one of the five domains is a lone pair.',
        3: 'Square planar needs six domains with two lone pairs. Sulfur in SF<sub>4</sub> has only one lone pair: 6 ' + MINUS + ' 4 = 2 electrons.'
      },
      hints: ['Find the lone pairs on sulfur: valence electrons minus electrons used in bonds.', 'Four bonding domains + one lone pair = five domains.'],
      solution: m('S: 6 valence electrons; 4 used in bonds; 2 left = 1 lone pair') + '<p>Five electron domains: trigonal bipyramidal electron domain geometry. The lone pair takes an equatorial position. The four atoms then make a seesaw shape.</p>'
    },
    {
      id: 's2-2h-q014', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>What are the molecular geometry and the F–Xe–F bond angle between neighbouring bonds in ' + c('XeF4') + '?</p>',
      options: ['Tetrahedral; 109.5°', 'Square planar; 90°', 'Seesaw; less than 90° and less than 120°', 'Octahedral; 90°'],
      answer: 1,
      misconception: {
        0: 'This counts only the four bonds. Xenon has 8 valence electrons and uses 4, so two lone pairs are left: six domains in total.',
        2: 'Seesaw is for five domains with one lone pair. Xenon here has six domains: four bonds and two lone pairs.',
        3: 'Octahedral is the electron domain geometry. The molecular geometry describes only the atoms, and two of the six positions hold lone pairs.'
      },
      hints: ['Xenon is in group 18: 8 valence electrons.', 'The two lone pairs go opposite each other, 180° apart.'],
      solution: m('Xe: 8 valence electrons; 4 used in bonds; 4 left = 2 lone pairs') + '<p>Six domains: octahedral electron domain geometry. The two lone pairs are opposite each other. The four fluorine atoms lie in one plane: square planar, 90°.</p>'
    },
    {
      id: 's2-2h-q015', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>What is the molecular geometry of ' + c('BrF3') + '?</p>',
      options: ['Trigonal planar', 'Trigonal pyramidal', 'T-shaped', 'Trigonal bipyramidal'],
      answer: 2,
      misconception: {
        0: 'Trigonal planar would mean no lone pairs on bromine. Bromine has 7 valence electrons and uses only 3 in bonds.',
        1: 'Trigonal pyramidal is for four domains with one lone pair. Bromine here has two lone pairs: (7 ' + MINUS + ' 3) ÷ 2 = 2.',
        3: 'That is the electron domain geometry (five domains). Two of the five domains are lone pairs, so the atoms make a different shape.'
      },
      hints: ['Bromine is in group 17.', 'Three bonding domains + two lone pairs = five domains. The lone pairs are equatorial.'],
      solution: m('Br: 7 valence electrons; 3 used in bonds; 4 left = 2 lone pairs') + '<p>Five domains: trigonal bipyramidal arrangement. Both lone pairs are equatorial. The three fluorine atoms make a T shape, with bond angles a little less than 90°.</p>'
    },
    {
      id: 's2-2h-q016', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>Deduce the Cl–I–Cl bond angle in the ion ' + c('ICl2-') + '. Iodine is the central atom.</p>',
      answer: 180, tolerance: { abs: 0.5 }, unit: '°',
      hints: ['Count the electrons around iodine: 7 of its own, 1 from each chlorine, and 1 for the negative charge.', 'Five pairs: two bonding pairs and three lone pairs. The lone pairs take the three equatorial positions.'],
      solution: m('Electrons around I = 7 + 2 + 1 = 10 = 5 pairs') + m('2 bonding pairs + 3 lone pairs') + '<p>Five domains are arranged in a trigonal bipyramid. The three lone pairs are equatorial. The two chlorine atoms are in the axial positions, so the ion is linear: <b>180°</b>.</p>'
    },
    {
      id: 's2-2h-q017', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>What is the molecular geometry of ' + c('IF5') + '?</p>',
      options: ['Trigonal bipyramidal', 'Square pyramidal', 'Octahedral', 'Seesaw'],
      answer: 1,
      misconception: {
        0: 'This counts five bonds and forgets the lone pair. Iodine has 7 valence electrons and uses 5: one lone pair is left, so there are six domains.',
        2: 'Octahedral is the electron domain geometry. One of the six domains is a lone pair, so the atoms do not make an octahedron.',
        3: 'Seesaw is for five domains with one lone pair (four bonds). Here there are five bonds and one lone pair.'
      },
      hints: ['Iodine is in group 17.', 'Five bonding domains + one lone pair = six domains.'],
      solution: m('I: 7 valence electrons; 5 used in bonds; 2 left = 1 lone pair') + '<p>Six domains: octahedral arrangement. One position holds the lone pair. The five fluorine atoms make a square pyramid.</p>'
    },
    {
      id: 's2-2h-q018', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>Which molecule is polar?</p>',
      options: [c('PCl5'), c('SF4'), c('XeF4'), c('SF6')],
      answer: 1,
      misconception: {
        0: 'PCl<sub>5</sub> is trigonal bipyramidal with five identical bonds and no lone pairs. The bond dipoles cancel.',
        2: 'XeF<sub>4</sub> is square planar. The four Xe–F bond dipoles point in opposite pairs and cancel.',
        3: 'SF<sub>6</sub> is octahedral. The six S–F bond dipoles cancel in opposite pairs.'
      },
      hints: ['All four molecules have polar bonds. The question is whether the bond dipoles cancel.', 'Find the shape of each molecule. Which one is not symmetrical?'],
      solution: '<p>' + c('SF4') + ' has a lone pair on sulfur and a seesaw shape. The S–F bond dipoles do not cancel, so the molecule has a net dipole. The other three shapes are symmetrical, so their bond dipoles cancel.</p>'
    },
    {
      id: 's2-2h-q019', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.13',
      stem: '<p>Iodine forms the ions ' + c('IF4+') + ' and ' + c('IF4-') + '. What are their molecular geometries?</p>',
      options: [
        c('IF4+') + ': seesaw. ' + c('IF4-') + ': square planar.',
        c('IF4+') + ': tetrahedral. ' + c('IF4-') + ': tetrahedral.',
        c('IF4+') + ': square planar. ' + c('IF4-') + ': seesaw.',
        c('IF4+') + ': seesaw. ' + c('IF4-') + ': seesaw.'
      ],
      answer: 0,
      misconception: {
        1: 'This counts only the four bonds. Iodine has lone pairs in both ions. Count all the electrons around iodine, including the charge.',
        2: 'The charges are the wrong way round. A positive charge means one electron fewer; a negative charge means one electron more.',
        3: 'This ignores the charge. The two ions have different numbers of electrons around iodine, so they have different numbers of lone pairs.'
      },
      hints: ['Electrons around iodine = 7 + 4 (one from each F), then subtract 1 for a + charge or add 1 for a ' + MINUS + ' charge.', 'Halve the total to get the number of electron domains. Four are bonding; the rest are lone pairs.'],
      solution: m('IF<sub>4</sub><sup>+</sup>: 7 + 4 ' + MINUS + ' 1 = 10 electrons = 5 domains = 4 bonds + 1 lone pair') + m('IF<sub>4</sub><sup>' + MINUS + '</sup>: 7 + 4 + 1 = 12 electrons = 6 domains = 4 bonds + 2 lone pairs') + '<p>Five domains with one lone pair: seesaw. Six domains with two lone pairs: square planar.</p>'
    },
    {
      id: 's2-2h-q020', level: 'ahl', tier: 'challenge', type: 'short', marks: 4, syllabus: 'Structure 2.2.13',
      stem: '<p>Solid phosphorus(V) chloride contains the ions ' + c('PCl4+') + ' and ' + c('PCl6-') + '.</p><p>Deduce the molecular geometry and the Cl–P–Cl bond angle (between neighbouring bonds) of each ion. Show how you counted the electron domains.</p>',
      answer: '<p>' + c('PCl4+') + ': electrons around P = 5 + 4 ' + MINUS + ' 1 = 8, so four electron domains, all bonding. Tetrahedral, 109.5°.</p><p>' + c('PCl6-') + ': electrons around P = 5 + 6 + 1 = 12, so six electron domains, all bonding. Octahedral, 90°.</p>',
      markscheme: [
        'PCl<sub>4</sub><sup>+</sup>: four electron domains / four bonding pairs and no lone pairs on P.',
        'PCl<sub>4</sub><sup>+</sup>: tetrahedral AND 109.5°.',
        'PCl<sub>6</sub><sup>' + MINUS + '</sup>: six electron domains / six bonding pairs and no lone pairs on P.',
        'PCl<sub>6</sub><sup>' + MINUS + '</sup>: octahedral AND 90°.'
      ],
      hints: ['Electrons around P = 5 (its own) + 1 from each Cl, then adjust for the charge.', 'Divide by 2 to get the number of domains. Compare with the number of bonds to find the lone pairs.'],
      solution: m('PCl<sub>4</sub><sup>+</sup>: 5 + 4 ' + MINUS + ' 1 = 8 electrons = 4 domains (4 bonds, 0 lone pairs)') + m('PCl<sub>6</sub><sup>' + MINUS + '</sup>: 5 + 6 + 1 = 12 electrons = 6 domains (6 bonds, 0 lone pairs)') + '<p>Four bonding domains: tetrahedral, 109.5°. Six bonding domains: octahedral, 90°. Only the anion has an expanded octet.</p>'
    },

    /* ------------------------------------------------------------------ 2.2.14 Formal charge */
    {
      id: 's2-2h-q021', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.14',
      stem: '<p>In the Lewis formula of the ammonium ion, ' + c('NH4+') + ', nitrogen has four single bonds and no lone pairs.</p><p>Calculate the formal charge on the nitrogen atom. Include the sign.</p>',
      answer: 1, tolerance: { abs: 0.01 }, answerDisplay: '+1',
      hints: ['FC = V ' + MINUS + ' N ' + MINUS + ' ½B. V is the number of valence electrons of a free nitrogen atom.', 'N = 0 (no lone pairs). B = 8 (four bonds, two electrons each).'],
      solution: m('V = 5 (group 15), N = 0, B = 8') + m('FC = 5 ' + MINUS + ' 0 ' + MINUS + ' ½(8) = <b>+1</b>') + '<p>Each hydrogen has FC = 1 ' + MINUS + ' 0 ' + MINUS + ' ½(2) = 0. The total, +1, equals the charge on the ion.</p>'
    },
    {
      id: 's2-2h-q022', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.14',
      stem: '<p>One Lewis formula of the chlorate ion, ' + c('ClO3-') + ', has chlorine joined to three oxygen atoms by single bonds. Chlorine has one lone pair. Each oxygen has three lone pairs.</p><p>Calculate the formal charge on the chlorine atom in this formula. Include the sign.</p>',
      answer: 2, tolerance: { abs: 0.01 }, answerDisplay: '+2',
      hints: ['FC = V ' + MINUS + ' N ' + MINUS + ' ½B. Chlorine is in group 17.', 'N counts electrons, not pairs: one lone pair is 2 electrons. B = 6 (three single bonds).'],
      solution: m('V = 7, N = 2, B = 6') + m('FC(Cl) = 7 ' + MINUS + ' 2 ' + MINUS + ' ½(6) = <b>+2</b>') + m('FC(each O) = 6 ' + MINUS + ' 6 ' + MINUS + ' ½(2) = ' + MINUS + '1') + '<p>Check: +2 + 3(' + MINUS + '1) = ' + MINUS + '1, the charge on the ion. Do not confuse this with the oxidation state of chlorine, which is +5.</p>'
    },
    {
      id: 's2-2h-q023', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.14',
      stem: '<p>Three Lewis formulas can be drawn for dinitrogen monoxide, ' + c('N2O') + ', with the atoms in the order N, N, O. The lone pairs on each atom are given in the same order.</p><ul><li>I: N≡N–O, with 1, 0 and 3 lone pairs</li><li>II: N=N=O, with 2, 0 and 2 lone pairs</li><li>III: N–N≡O, with 3, 0 and 1 lone pairs</li></ul><p>Which is the preferred Lewis formula? (Electronegativity: N 3.0, O 3.4.)</p>',
      options: ['I', 'II', 'III', 'I and II are equally preferred, because their formal charges are the same size.'],
      answer: 0,
      misconception: {
        1: 'II has formal charges ' + MINUS + '1, +1, 0. The negative charge sits on nitrogen. Oxygen is more electronegative, so the negative charge is better placed on oxygen.',
        2: 'III has formal charges ' + MINUS + '2, +1, +1. These are the largest charges of the three, and oxygen is positive. Reject it first.',
        3: 'The sizes are the same, so use the second rule: a negative formal charge should be on the more electronegative atom. That separates I from II.'
      },
      hints: ['Calculate FC = V ' + MINUS + ' N ' + MINUS + ' ½B for all three atoms in each formula.', 'First reject the formula with the largest charges. Then look at which atom carries the negative charge.'],
      solution: m('I: N 5 ' + MINUS + ' 2 ' + MINUS + ' 3 = 0; N 5 ' + MINUS + ' 0 ' + MINUS + ' 4 = +1; O 6 ' + MINUS + ' 6 ' + MINUS + ' 1 = ' + MINUS + '1') + m('II: N 5 ' + MINUS + ' 4 ' + MINUS + ' 2 = ' + MINUS + '1; N +1; O 6 ' + MINUS + ' 4 ' + MINUS + ' 2 = 0') + m('III: N 5 ' + MINUS + ' 6 ' + MINUS + ' 1 = ' + MINUS + '2; N +1; O 6 ' + MINUS + ' 2 ' + MINUS + ' 3 = +1') + '<p>III has the largest charges. I and II both have one +1 and one ' + MINUS + '1, but I puts the ' + MINUS + '1 on oxygen, the more electronegative atom. I is preferred.</p>'
    },
    {
      id: 's2-2h-q024', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.14',
      stem: '<p>Which assumption is made when the formal charge of an atom is calculated?</p>',
      options: [
        'The electrons in each bond are shared equally between the two bonded atoms.',
        'The electrons in each bond belong completely to the more electronegative atom.',
        'The lone pairs are shared equally among all the atoms in the species.',
        'Every atom in the species has an octet of electrons.'
      ],
      answer: 0,
      misconception: {
        1: 'That is the assumption for oxidation states. Formal charge ignores electronegativity and splits each bond evenly.',
        2: 'Lone pairs belong completely to the atom they are drawn on. That is why N is subtracted in full.',
        3: 'Formal charge can be calculated for any Lewis formula, including ones with expanded octets or fewer than eight electrons.'
      },
      hints: ['Look at the formula: FC = V ' + MINUS + ' N ' + MINUS + ' ½B. Why is B halved?'],
      solution: '<p>The ½ in front of B gives each atom half of the electrons in its bonds. So formal charge treats every bond as perfectly covalent (equal sharing). Oxidation state makes the opposite assumption: every bond is treated as ionic, with the electrons given to the more electronegative atom.</p>'
    },
    {
      id: 's2-2h-q025', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.14',
      stem: '<p>Lewis formulas of the phosphate ion, ' + c('PO4^3-') + ', can be drawn with different numbers of P=O double bonds. Every oxygen atom has an octet in each formula. Phosphorus has no lone pairs.</p><p>Which formula is preferred, using formal charge? (Electronegativity: P 2.2, O 3.4.)</p>',
      options: ['No P=O bonds (four P–O single bonds)', 'One P=O bond and three P–O bonds', 'Two P=O bonds and two P–O bonds', 'Four P=O bonds'],
      answer: 1,
      misconception: {
        0: 'This gives +1 on P and ' + MINUS + '1 on all four O atoms: five atoms carry a charge. Another formula has fewer charged atoms.',
        2: 'This gives ' + MINUS + '1 on P and ' + MINUS + '1 on two O atoms. A negative formal charge on phosphorus is not favoured, because oxygen is more electronegative.',
        3: 'This gives ' + MINUS + '3 on phosphorus and 0 on every oxygen. A large negative charge on the less electronegative atom is the worst choice.'
      },
      hints: ['A singly bonded O with three lone pairs has FC = ' + MINUS + '1. A doubly bonded O with two lone pairs has FC = 0.', 'For P: FC = 5 ' + MINUS + ' 0 ' + MINUS + ' ½B. Work it out for 4, 5, 6 and 8 bonding pairs.'],
      solution: m('No P=O: P = 5 ' + MINUS + ' ½(8) = +1; O: four at ' + MINUS + '1') + m('One P=O: P = 5 ' + MINUS + ' ½(10) = 0; O: one at 0, three at ' + MINUS + '1') + m('Two P=O: P = 5 ' + MINUS + ' ½(12) = ' + MINUS + '1; O: two at 0, two at ' + MINUS + '1') + m('Four P=O: P = 5 ' + MINUS + ' ½(16) = ' + MINUS + '3; O: four at 0') + '<p>Every set adds up to ' + MINUS + '3. The formula with one P=O has the formal charges closest to zero, and all its negative charges are on oxygen, the more electronegative atom.</p>'
    },
    {
      id: 's2-2h-q026', level: 'ahl', tier: 'challenge', type: 'short', marks: 3, syllabus: 'Structure 2.2.14',
      stem: '<p>Two Lewis formulas can be drawn for the sulfate ion, ' + c('SO4^2-') + '. In both, sulfur has no lone pairs and every oxygen has an octet.</p><ul><li>A: four S–O single bonds</li><li>B: two S=O double bonds and two S–O single bonds</li></ul><p>Calculate the formal charge on sulfur in each formula. Then state which formula is preferred, with a reason.</p>',
      answer: '<p>A: FC(S) = 6 ' + MINUS + ' 0 ' + MINUS + ' ½(8) = +2. B: FC(S) = 6 ' + MINUS + ' 0 ' + MINUS + ' ½(12) = 0. B is preferred, because its formal charges are closest to zero (sulfur is 0 and only two oxygen atoms are ' + MINUS + '1).</p>',
      markscheme: [
        'A: formal charge on S = +2.',
        'B: formal charge on S = 0.',
        'B is preferred because its formal charges are closest to zero / fewer atoms have a non-zero formal charge.'
      ],
      hints: ['FC = V ' + MINUS + ' N ' + MINUS + ' ½B, with V = 6 for sulfur.', 'B = 8 in formula A. In formula B, count 4 electrons for each double bond.'],
      solution: m('A: FC(S) = 6 ' + MINUS + ' 0 ' + MINUS + ' ½(8) = +2; each O = 6 ' + MINUS + ' 6 ' + MINUS + ' ½(2) = ' + MINUS + '1') + m('B: FC(S) = 6 ' + MINUS + ' 0 ' + MINUS + ' ½(12) = 0; O (double) = 6 ' + MINUS + ' 4 ' + MINUS + ' ½(4) = 0; O (single) = ' + MINUS + '1') + '<p>Both add up to ' + MINUS + '2. B has charges closest to zero, so formal charge prefers B. In B sulfur has an expanded octet (12 electrons), which is possible for a period 3 element.</p>'
    },

    /* ------------------------------------------------------------------ 2.2.15 Sigma and pi bonds */
    {
      id: 's2-2h-q027', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.15',
      stem: '<p>How many sigma (σ) bonds are there in one molecule of ethene, ' + c('CH2=CH2') + '?</p>',
      answer: 5, tolerance: { abs: 0.01 }, unit: 'σ bonds',
      hints: ['Every single bond is one σ bond. Do not forget the C–H bonds.', 'A double bond is one σ bond and one π bond.'],
      solution: m('C–H bonds: 4 σ') + m('C=C bond: 1 σ (and 1 π)') + m('Total = 4 + 1 = <b>5 σ bonds</b>')
    },
    {
      id: 's2-2h-q028', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.15',
      stem: '<p>Which describes how a sigma (σ) bond forms?</p>',
      options: [
        'Head-on overlap of atomic orbitals; electron density is concentrated along the bond axis.',
        'Sideways overlap of p orbitals; electron density is concentrated above and below the bond axis.',
        'Head-on overlap of atomic orbitals; electron density is concentrated above and below the bond axis.',
        'Transfer of an electron from one atom to the other.'
      ],
      answer: 0,
      misconception: {
        1: 'This describes a π bond. A π bond needs p orbitals side by side.',
        2: 'Head-on overlap puts the electron density between the two nuclei, on the line that joins them. Density on opposite sides of the axis belongs to a π bond.',
        3: 'Electron transfer gives ions and ionic bonding. σ and π bonds are both covalent: electrons are shared.'
      },
      hints: ['The bond axis is the line joining the two nuclei.'],
      solution: '<p>A σ bond forms when two atomic orbitals overlap head-on (end to end). The shared electrons are found mainly on the bond axis, between the nuclei.</p>'
    },
    {
      id: 's2-2h-q029', level: 'ahl', tier: 'exam', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.15',
      stem: '<p>How many sigma (σ) bonds are there in one molecule of ethanoic acid, ' + c('CH3COOH') + '?</p>',
      answer: 7, tolerance: { abs: 0.01 }, unit: 'σ bonds',
      hints: ['Draw the full structural formula first: CH<sub>3</sub>–C(=O)–O–H.', 'Count one σ bond for every pair of atoms that are joined, including C–H and O–H.'],
      solution: m('C–H: 3;  C–C: 1;  C=O: 1 σ (and 1 π);  C–O: 1;  O–H: 1') + m('Total = 3 + 1 + 1 + 1 + 1 = <b>7 σ bonds</b>') + '<p>Check: a molecule with no rings and 8 atoms has 8 ' + MINUS + ' 1 = 7 σ bonds.</p>'
    },
    {
      id: 's2-2h-q030', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.15',
      stem: '<p>How many σ bonds and π bonds are there in one molecule of propenenitrile, ' + c('CH2=CH–C≡N') + '?</p>',
      options: ['6 σ and 3 π', '3 σ and 3 π', '6 σ and 2 π', '4 σ and 5 π'],
      answer: 0,
      misconception: {
        1: 'The three C–H bonds are missing. They are hidden in the condensed formula, but each one is a σ bond.',
        2: 'A triple bond has two π bonds, not one. So C≡N gives 2 π and C=C gives 1 π.',
        3: 'This counts every line of a multiple bond as π. One bond in each double or triple bond is always a σ bond.'
      },
      hints: ['Draw every bond, including the three C–H bonds.', 'Double bond = 1 σ + 1 π. Triple bond = 1 σ + 2 π.'],
      solution: m('σ: C–H 3; C=C 1; C–C 1; C≡N 1; total 6') + m('π: C=C 1; C≡N 2; total 3')
    },
    {
      id: 's2-2h-q031', level: 'ahl', tier: 'exam', type: 'short', marks: 2, syllabus: 'Structure 2.2.15',
      stem: '<p>The carbon–carbon double bond in ethene is made of one σ bond and one π bond.</p><p>Describe how each bond forms, and state where its electron density is concentrated.</p>',
      answer: '<p>The σ bond forms by head-on (end-to-end) overlap of two orbitals, one from each carbon atom. Its electron density is concentrated along the bond axis, between the two nuclei. The π bond forms by sideways (lateral) overlap of two p orbitals. Its electron density is concentrated above and below the bond axis.</p>',
      markscheme: [
        'σ: head-on / end-to-end overlap of (atomic or hybrid) orbitals AND electron density along the bond axis / between the nuclei.',
        'π: sideways / lateral overlap of p orbitals AND electron density above and below (on opposite sides of) the bond axis.'
      ],
      hints: ['One bond is made by orbitals pointing at each other. The other is made by orbitals standing side by side.', 'Say which type of orbital makes the π bond.'],
      solution: '<p>σ: head-on overlap, density on the axis. π: sideways overlap of p orbitals, density on opposite sides of the axis. A diagram with labels can score these marks.</p>'
    },
    {
      id: 's2-2h-q032', level: 'ahl', tier: 'exam', type: 'order', marks: 1, syllabus: 'Structure 2.2.15',
      stem: '<p>Put these molecules in order of the number of π bonds in one molecule, <strong>fewest first</strong>.</p>',
      options: [c('CH3CH3') + ' (ethane)', c('CH2=CH2') + ' (ethene)', c('H–C≡N') + ' (hydrogen cyanide)', c('CH2=CH–C≡N') + ' (propenenitrile)'],
      hints: ['Single bond: 0 π. Double bond: 1 π. Triple bond: 2 π.'],
      solution: '<p>Ethane 0 π; ethene 1 π; hydrogen cyanide 2 π (one triple bond); propenenitrile 3 π (one double bond and one triple bond).</p>'
    },
    {
      id: 's2-2h-q033', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 1, syllabus: 'Structure 2.2.15',
      stem: '<p>A molecule has the condensed structural formula ' + c('HC≡C–CH=CH–CHO') + '. The ' + c('CHO') + ' group contains a C=O double bond and a C–H bond.</p><p>How many sigma (σ) bonds are there in one molecule?</p>',
      answer: 9, tolerance: { abs: 0.01 }, unit: 'σ bonds',
      hints: ['Draw the full structural formula. There are 5 carbon atoms, 4 hydrogen atoms and 1 oxygen atom.', 'Each multiple bond contains exactly one σ bond. Each C–H bond is a σ bond.'],
      solution: m('C–H: 4;  C≡C: 1 σ;  C–C: 2;  C=C: 1 σ;  C=O: 1 σ') + m('Total = 4 + 1 + 2 + 1 + 1 = <b>9 σ bonds</b>') + '<p>Check: 10 atoms and no rings gives 10 ' + MINUS + ' 1 = 9 σ bonds. The molecule also has 2 + 1 + 1 = 4 π bonds.</p>'
    },

    /* ------------------------------------------------------------------ 2.2.16 Hybridization */
    {
      id: 's2-2h-q034', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.16',
      stem: '<p>What is the hybridization of each carbon atom in ethene, ' + c('CH2=CH2') + '?</p>',
      options: ['sp', 'sp<sup>2</sup>', 'sp<sup>3</sup>', 'The carbon atoms are not hybridized.'],
      answer: 1,
      misconception: {
        0: 'sp is for two electron domains. Each carbon in ethene is joined to three atoms: two H and one C.',
        2: 'sp<sup>3</sup> is for four electron domains. A double bond counts as one domain, so each carbon has three.',
        3: 'Carbon atoms that form bonds in molecules are described as sp, sp<sup>2</sup> or sp<sup>3</sup> hybridized.'
      },
      hints: ['Count the electron domains around one carbon atom. A double bond is one domain.', '2 domains → sp; 3 domains → sp<sup>2</sup>; 4 domains → sp<sup>3</sup>.'],
      solution: '<p>Each carbon has three electron domains: two C–H bonds and one C=C bond. Three domains means sp<sup>2</sup>, with the domains in a trigonal planar arrangement (120°).</p>'
    },
    {
      id: 's2-2h-q035', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.16',
      stem: '<p>The molecule ' + c('CH3–CO–C≡CH') + ' contains a C=O double bond and a C≡C triple bond. What is the hybridization of the carbon atom in each group?</p>',
      options: [
        c('CH3') + ': sp<sup>3</sup>.  C=O: sp<sup>2</sup>.  C≡C: sp.',
        c('CH3') + ': sp<sup>3</sup>.  C=O: sp<sup>3</sup>.  C≡C: sp<sup>3</sup>.',
        c('CH3') + ': sp<sup>3</sup>.  C=O: sp.  C≡C: sp<sup>2</sup>.',
        c('CH3') + ': sp<sup>3</sup>.  C=O: sp<sup>2</sup>.  C≡C: sp<sup>2</sup>.'
      ],
      answer: 0,
      misconception: {
        1: 'Not every carbon is sp<sup>3</sup>. Only a carbon with four electron domains (four single bonds) is sp<sup>3</sup>.',
        2: 'These two are swapped. The C=O carbon is joined to three atoms (three domains, sp<sup>2</sup>). A triply bonded carbon is joined to two atoms (two domains, sp).',
        3: 'A carbon in a triple bond has only two electron domains: the triple bond and one single bond. Two domains means sp.'
      },
      hints: ['For each carbon, count the atoms it is joined to. Carbon has no lone pairs here, so that is its number of domains.', 'Multiple bonds count as one domain each.'],
      solution: '<p>' + c('CH3') + ' carbon: four single bonds, four domains, sp<sup>3</sup>. C=O carbon: joined to C, O and C, three domains, sp<sup>2</sup>. Each C≡C carbon: joined to two atoms, two domains, sp.</p>'
    },
    {
      id: 's2-2h-q036', level: 'ahl', tier: 'exam', type: 'multi', marks: 2, syllabus: 'Structure 2.2.16',
      stem: '<p>In which of these is the named atom sp<sup>2</sup> hybridized? Select all that apply.</p>',
      options: ['B in ' + c('BF3'), 'C in ' + c('HCHO') + ' (methanal)', 'N in ' + c('NH3'), 'C in ' + c('CO2'), 'Each C in ' + c('C2H4')],
      answer: [0, 1, 4],
      misconception: {
        2: 'Nitrogen in ammonia has three bonds and one lone pair. The lone pair is a domain too: four domains, so sp<sup>3</sup>. Count domains, not bonds.',
        3: 'Carbon in CO<sub>2</sub> has two double bonds. Each double bond is one domain: two domains, so sp.'
      },
      hints: ['sp<sup>2</sup> means three electron domains around the atom.', 'Lone pairs count as domains. A double bond counts as one domain.'],
      solution: '<p>Three domains: B in ' + c('BF3') + ' (three bonds, no lone pair); C in methanal (two C–H and one C=O); each C in ethene (two C–H and one C=C). N in ' + c('NH3') + ' has four domains (sp<sup>3</sup>). C in ' + c('CO2') + ' has two domains (sp).</p>'
    },
    {
      id: 's2-2h-q037', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.16',
      stem: '<p>The Lewis formula of carbon dioxide is O=C=O, with two lone pairs on each oxygen atom. What is the hybridization of the carbon atom and of each oxygen atom?</p>',
      options: ['C: sp.  O: sp<sup>2</sup>.', 'C: sp<sup>2</sup>.  O: sp<sup>2</sup>.', 'C: sp.  O: sp<sup>3</sup>.', 'C: sp<sup>3</sup>.  O: sp<sup>2</sup>.'],
      answer: 0,
      misconception: {
        1: 'Carbon is joined to two atoms and has no lone pairs: two domains, so sp. Its shape is linear, not trigonal planar.',
        2: 'Each oxygen has one double bond (one domain) and two lone pairs (two domains). That is three domains, not four.',
        3: 'Carbon forms four bonds here, but they are two double bonds. Two double bonds are two domains.'
      },
      hints: ['Carbon: two double bonds, no lone pairs. How many domains?', 'Oxygen: one double bond and two lone pairs. How many domains?'],
      solution: '<p>Carbon: two domains → sp (linear, 180°). Each oxygen: one bonded atom + two lone pairs = three domains → sp<sup>2</sup>.</p>'
    },
    {
      id: 's2-2h-q038', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1, syllabus: 'Structure 2.2.16',
      stem: '<p>Ethene reacts with hydrogen to form ethane: ' + c('C2H4 + H2 -> C2H6') + '. What happens at each carbon atom during this reaction?</p>',
      options: [
        'Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 120° to about 109.5°.',
        'Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 109.5° to about 120°.',
        'Hybridization changes from sp to sp<sup>2</sup>. The bond angles change from 180° to about 120°.',
        'Hybridization changes from sp<sup>3</sup> to sp<sup>2</sup>. The bond angles change from about 109.5° to about 120°.'
      ],
      answer: 0,
      misconception: {
        1: 'The hybridization is right but the angles are the wrong way round. sp<sup>2</sup> goes with 120° and sp<sup>3</sup> with 109.5°.',
        2: 'sp and 180° belong to a carbon in a triple bond, such as in ethyne. Ethene has a double bond.',
        3: 'This is the reverse reaction. Ethene (three domains per carbon) is the reactant; ethane (four domains per carbon) is the product.'
      },
      hints: ['Count the electron domains around a carbon atom in ethene, then in ethane.', 'Match each hybridization to its geometry: sp<sup>2</sup> trigonal planar, sp<sup>3</sup> tetrahedral.'],
      solution: '<p>In ethene each carbon has three domains: sp<sup>2</sup>, trigonal planar, about 120°. In ethane each carbon has four domains: sp<sup>3</sup>, tetrahedral, about 109.5°. The π bond is lost and two new σ C–H bonds form.</p>'
    },
    {
      id: 's2-2h-q039', level: 'ahl', tier: 'challenge', type: 'short', marks: 3, syllabus: 'Structure 2.2.16',
      stem: '<p>Hydrogen cyanide has the structure H–C≡N, with one lone pair on nitrogen.</p><p>Analyse the bonding around the carbon atom. State its hybridization and the H–C–N bond angle, and describe how the σ bonds and the π bonds to carbon are formed.</p>',
      answer: '<p>Carbon has two electron domains (one single bond and one triple bond), so it is sp hybridized and the H–C–N angle is 180°. The C–H σ bond forms by head-on overlap of an sp hybrid orbital on carbon with the 1s orbital of hydrogen. The C–N σ bond forms by head-on overlap of the other sp hybrid orbital on carbon with a hybrid orbital on nitrogen. The two π bonds form by sideways overlap of the two unhybridized p orbitals on carbon with two p orbitals on nitrogen.</p>',
      markscheme: [
        'Carbon is sp hybridized AND the bond angle is 180° (two electron domains).',
        'σ bonds: head-on overlap of sp hybrid orbitals of carbon (with 1s of H / with an orbital on N).',
        'Two π bonds: sideways (lateral) overlap of the (unhybridized) p orbitals on carbon and nitrogen.'
      ],
      hints: ['Count the electron domains around carbon. A triple bond is one domain.', 'An sp carbon has two hybrid orbitals and two p orbitals left unmixed. Which make σ bonds and which make π bonds?'],
      solution: '<p>Two domains → sp → linear, 180°. The two sp hybrid orbitals point in opposite directions and make the two σ bonds (to H and to N) by head-on overlap. The two unmixed p orbitals are at right angles to each other. Each overlaps sideways with a p orbital on nitrogen, giving two π bonds. Triple bond = 1 σ + 2 π.</p>'
    }
  ]);
})();
