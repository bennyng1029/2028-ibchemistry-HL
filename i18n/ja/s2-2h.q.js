/* s2-2h.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-2h.q', {
  questions: {

    // ── s2-2h-q001 · mcq · foundation · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q001": {
      // EN: <p>For which species can you draw more than one Lewis formula, where the formulas differ only in the position of a double bond?</p>
      stem: "",
      options: [
        // EN: <span class="chem">HCHO</span> (methanal)
        "",
        // EN: <span class="chem">C2H4</span> (ethene)
        "",
        // EN: <span class="chem">NO3-</span> (nitrate ion)
        "",
        // EN: <span class="chem">HCN</span> (hydrogen cyanide)
        "",
      ],
      hints: [
        // EN: Look for a central atom joined to two or more atoms of the same element.
        "",
        // EN: Ask: could the double bond be drawn to a different atom and still give a correct Lewis formula?
        "",
      ],
      // EN: <p>In the nitrate ion, nitrogen is joined to three oxygen atoms. The one N=O double bond can be drawn to any of the three. That gives three resonance structures. In the other species the multiple bond has only one possible position.</p>
      solution: "",
      misconception: {
        // EN (option A): In methanal the double bond can only go to the oxygen atom. Hydrogen forms one single bond only. One position means no resonance.
        "0": "",
        // EN (option B): In ethene the double bond can only be between the two carbon atoms. There is no second position for it.
        "1": "",
        // EN (option D): HCN has a triple bond between C and N. Hydrogen cannot take part in a multiple bond, so there is only one possible formula.
        "3": "",
      },
    },

    // ── s2-2h-q002 · mcq · exam · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q002": {
      // EN: <p>The data booklet gives these bond lengths: N–O 136 pm and N=O 114 pm. One Lewis formula of the nitrate ion, <span class="chem">NO3-</span>, shows one N=O bond and two N–O bonds.</p><p>Which describes the nitrogen–oxygen bonds that are measured in the nitrate ion?</p>
      stem: "",
      options: [
        // EN: One bond of 114 pm and two bonds of 136 pm
        "",
        // EN: Three bonds of 114 pm
        "",
        // EN: Three bonds of 136 pm
        "",
        // EN: Three equal bonds, with a length between 114 pm and 136 pm
        "",
      ],
      hints: [
        // EN: How many resonance structures does the nitrate ion have?
        "",
        // EN: The real ion is a mix (hybrid) of all of them. What does that do to the three bonds?
        "",
      ],
      // EN: <p>The nitrate ion has three resonance structures. The π electrons are delocalized over the nitrogen atom and all three oxygen atoms. So all three bonds are the same, and each is between a single and a double bond. The measured value is about 124 pm.</p>
      solution: "",
      misconception: {
        // EN (option A): This treats one resonance structure as the real ion. The ion does not have one fixed double bond. The π electrons are delocalized over all three bonds.
        "0": "",
        // EN (option B): There is only one double bond to share among three positions, so the bonds are not all full double bonds.
        "1": "",
        // EN (option C): The double bond does not disappear. Its π electrons are shared by all three bonds, which makes each one shorter than a single bond.
        "2": "",
      },
    },

    // ── s2-2h-q003 · short · exam · AHL · Structure 2.2.11 · 2 marks
    "s2-2h-q003": {
      // EN: <p>A Lewis formula of ozone, <span class="chem">O3</span>, shows one O=O double bond and one O–O single bond. The data booklet values are O–O 148 pm and O=O 121 pm.</p><p>Measurements show that both bonds in ozone are 128 pm long. Explain this.</p>
      stem: "",
      hints: [
        // EN: Draw the Lewis formula with the double bond on the left. Now draw it with the double bond on the right.
        "",
        // EN: Use the word “delocalized” and say what it does to the two bonds.
        "",
      ],
      // EN: <p>Two resonance structures exist. Neither is the real molecule. The π electrons are delocalized over the three atoms, so both bonds are equal in length. 128 pm lies between 121 pm (double) and 148 pm (single).</p>
      solution: "",
      // EN: <p>Ozone has two resonance structures, because the double bond can be drawn on either side of the central atom. The real molecule is a hybrid of the two. The π electrons are delocalized over all three oxygen atoms, so both bonds are identical and each is between a single and a double bond.</p>
      answer: "",
      markscheme: [
        // EN: Two resonance structures can be drawn / the double bond has two possible positions (accept: ozone has resonance).
        "",
        // EN: The (π) electrons are delocalized over all three oxygen atoms, so both bonds are the same / each bond is intermediate between a single and a double bond.
        "",
      ],
    },

    // ── s2-2h-q004 · short · challenge · AHL · Structure 2.2.11 · 3 marks
    "s2-2h-q004": {
      // EN: <p>Ultraviolet light can break the bonds in oxygen, <span class="chem">O2</span>, and in ozone, <span class="chem">O3</span>. The bond in <span class="chem">O2</span> is broken only by light with a wavelength shorter than about 242 nm. The bonds in <span class="chem">O3</span> are broken by light with wavelengths up to about 330 nm.</p><p>Explain this difference, using the bonding in the two molecules.</p>
      stem: "",
      hints: [
        // EN: Compare the type of bond in each molecule. Ozone has two resonance structures.
        "",
        // EN: Which bond is stronger: a double bond, or a bond between single and double?
        "",
        // EN: Link energy and wavelength: <i>E</i> = <i>hf</i> and <i>c</i> = <i>λf</i> (Structure 1.3).
        "",
      ],
      // EN: <p>Step 1: bonding. <span class="chem">O2</span> has O=O. In <span class="chem">O3</span> the two bonds are equal and intermediate between single and double.</p><p>Step 2: strength. An intermediate bond is weaker than a double bond, so less energy is needed.</p><p>Step 3: light. A photon with less energy has a longer wavelength. So ozone is broken by longer wavelengths than oxygen.</p>
      solution: "",
      // EN: <p><span class="chem">O2</span> has a double bond, O=O. In ozone, resonance means the π electrons are delocalized, so each bond is between a single and a double bond. The bonds in ozone are therefore weaker than the bond in <span class="chem">O2</span> and need less energy to break. Light of lower energy has a longer wavelength (<i>E</i> = <i>hc</i>/<i>λ</i>), so longer wavelengths can break ozone.</p>
      answer: "",
      markscheme: [
        // EN: O<sub>2</sub> has a double bond, AND the bonds in O<sub>3</sub> are between single and double bonds (because of resonance / delocalization).
        "",
        // EN: The bonds in ozone are weaker / need less energy to break than the bond in O<sub>2</sub>.
        "",
        // EN: Lower energy corresponds to a longer wavelength (lower frequency), so light of longer wavelength can break the bonds in ozone.
        "",
      ],
    },

    // ── s2-2h-q005 · mcq · foundation · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q005": {
      // EN: <p>Which statement about the carbon–carbon bonds in benzene, <span class="chem">C6H6</span>, is correct?</p>
      stem: "",
      options: [
        // EN: Three short C=C bonds and three long C–C bonds alternate around the ring.
        "",
        // EN: All six bonds have the same length, between the lengths of C–C and C=C.
        "",
        // EN: All six bonds are single bonds, the same length as in ethane.
        "",
        // EN: All six bonds are double bonds, the same length as in ethene.
        "",
      ],
      hints: [
        // EN: Benzene has two resonance structures. The real molecule is a hybrid of them.
        "",
      ],
      // EN: <p>The six π electrons in benzene are delocalized over all six carbon atoms. So all six carbon–carbon bonds are identical. Their length, about 140 pm, is between C–C (154 pm) and C=C (134 pm).</p>
      solution: "",
      misconception: {
        // EN (option A): This is one resonance structure, not the real molecule. Measurements show six equal bonds.
        "0": "",
        // EN (option C): Six single bonds would leave each carbon with only three bonds. The measured length (about 140 pm) is shorter than C–C (154 pm).
        "2": "",
        // EN (option D): Six double bonds would give each carbon too many bonds. The measured length (about 140 pm) is longer than C=C (134 pm).
        "3": "",
      },
    },

    // ── s2-2h-q006 · mcq · exam · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q006": {
      // EN: <p>Benzene was once drawn as a ring with alternating single and double bonds. Which observation is evidence <strong>against</strong> that structure?</p>
      stem: "",
      options: [
        // EN: Benzene has the molecular formula <span class="chem">C6H6</span>.
        "",
        // EN: Benzene reacts with hydrogen to form cyclohexane, <span class="chem">C6H12</span>.
        "",
        // EN: All the carbon–carbon bonds in benzene have the same length.
        "",
        // EN: Benzene burns in oxygen to form carbon dioxide and water.
        "",
      ],
      hints: [
        // EN: Ask of each observation: would a ring with three real C=C bonds also do this?
        "",
        // EN: Single and double bonds have different lengths.
        "",
      ],
      // EN: <p>Alternating single and double bonds would have two different lengths (154 pm and 134 pm). All six bonds in benzene are equal (about 140 pm). This is physical evidence that the π electrons are delocalized.</p>
      solution: "",
      misconception: {
        // EN (option A): A ring with alternating single and double bonds also has the formula C<sub>6</sub>H<sub>6</sub>. This fits both models, so it is not evidence against one of them.
        "0": "",
        // EN (option B): A molecule with three C=C bonds would also add three H<sub>2</sub> to form cyclohexane. This fits both models.
        "1": "",
        // EN (option D): Every hydrocarbon burns to form carbon dioxide and water. This says nothing about the bonds in the ring.
        "3": "",
      },
    },

    // ── s2-2h-q007 · multi · exam · AHL · Structure 2.2.12 · 2 marks
    "s2-2h-q007": {
      // EN: <p>Which of these are <strong>chemical</strong> evidence that benzene does not contain three ordinary C=C double bonds? Select all that apply.</p>
      stem: "",
      options: [
        // EN: Benzene reacts by substitution rather than addition.
        "",
        // EN: All the carbon–carbon bonds in benzene are 140 pm long.
        "",
        // EN: The enthalpy of hydrogenation of benzene is less exothermic than three times that of cyclohexene.
        "",
        // EN: Benzene is a planar regular hexagon with bond angles of 120°.
        "",
        // EN: Benzene does not readily decolourize bromine water.
        "",
      ],
      hints: [
        // EN: Chemical evidence comes from what benzene does in reactions, including the energy change of a reaction.
        "",
        // EN: Physical evidence comes from measuring the molecule itself: lengths, angles, shape.
        "",
      ],
      // EN: <p>Chemical: substitution instead of addition; no fast reaction with bromine water; a less exothermic enthalpy of hydrogenation than expected. Physical: equal bond lengths; a planar regular hexagon.</p>
      solution: "",
      misconception: {
        // EN (option B): Bond length is measured, not seen in a reaction. It is physical evidence. If a question asks for chemical evidence, this does not score.
        "1": "",
        // EN (option D): Shape and bond angles are physical evidence. Chemical evidence is about reactions and their energy changes.
        "3": "",
      },
    },

    // ── s2-2h-q008 · short · exam · AHL · Structure 2.2.12 · 3 marks
    "s2-2h-q008": {
      // EN: <p>Benzene is sometimes drawn as a ring with alternating single and double bonds.</p><p>Discuss why this drawing does not describe benzene well. Give one piece of physical evidence and one piece of chemical evidence, and state how the bonding in benzene is described instead.</p>
      stem: "",
      hints: [
        // EN: Physical evidence is something you measure about the molecule. Chemical evidence is about a reaction.
        "",
        // EN: For the bonding, use the words “delocalized” and “π electrons”.
        "",
      ],
      // EN: <p>One physical point (equal bond lengths), one chemical point (substitution, not addition), then the model: delocalized π electrons around the ring. If you give two physical points and no chemical point, you lose a mark.</p>
      solution: "",
      // EN: <p>Physical evidence: all six carbon–carbon bonds have the same length (about 140 pm), between a single and a double bond. Alternating bonds would have two different lengths. Chemical evidence: benzene reacts by substitution, not by addition, so it does not behave like an alkene. The bonding is described as a ring of six carbon atoms with six delocalized π electrons, spread over the whole ring.</p>
      answer: "",
      markscheme: [
        // EN: Physical evidence: all carbon–carbon bond lengths are equal / intermediate between single and double (accept: regular planar hexagon, all bond angles 120°).
        "",
        // EN: Chemical evidence: undergoes substitution rather than addition / does not readily decolourize bromine water (accept: enthalpy of hydrogenation less exothermic than expected for three C=C).
        "",
        // EN: Bonding: delocalized π electrons (spread over all six carbon atoms / the ring). The word “π” (or “pi”) is needed.
        "",
      ],
    },

    // ── s2-2h-q009 · mcq · challenge · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q009": {
      // EN: <p>Cyclohexene has one C=C bond. Its enthalpy of hydrogenation is −120 <span class="unit">kJ mol-1</span>. The enthalpy of hydrogenation of benzene to cyclohexane is −208 <span class="unit">kJ mol-1</span>.</p><p>What do these data show?</p>
      stem: "",
      options: [
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> more stable than a ring with three separate C=C bonds.
        "",
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> less stable than a ring with three separate C=C bonds.
        "",
        // EN: Benzene contains between one and two C=C bonds.
        "",
        // EN: About 152 <span class="unit">kJ mol-1</span> must be supplied to hydrogenate benzene.
        "",
      ],
      hints: [
        // EN: What would you predict for a ring with three separate C=C bonds?
        "",
        // EN: Compare your prediction with −208 <span class="unit">kJ mol-1</span>. Which is less exothermic?
        "",
      ],
      // EN: <div class="worked__math">Predicted for three C=C: 3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class="worked__math">Difference: 360 − 208 = 152 kJ mol<sup>−1</sup></div><p>Benzene releases 152 <span class="unit">kJ mol-1</span> less than predicted. So benzene is lower in energy (more stable) than the model with three separate double bonds. Delocalization of the π electrons lowers the energy.</p>
      solution: "",
      misconception: {
        // EN (option B): Benzene gives out less energy than predicted when it is hydrogenated. It must start lower in energy, which means more stable, not less.
        "1": "",
        // EN (option C): Dividing 208 by 120 treats the π electrons as separate double bonds. The data show the opposite: the electrons are not in separate double bonds.
        "2": "",
        // EN (option D): Both values are negative, so hydrogenation of benzene is exothermic. The 152 is a difference between a prediction and a measurement.
        "3": "",
      },
    },

    // ── s2-2h-q010 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q010": {
      // EN: <p>What are the molecular geometry and the bond angles of <span class="chem">PCl5</span>?</p>
      stem: "",
      options: [
        // EN: Trigonal bipyramidal; 90° and 120°
        "",
        // EN: Square pyramidal; 90°
        "",
        // EN: Trigonal planar; 120°
        "",
        // EN: Octahedral; 90°
        "",
      ],
      hints: [
        // EN: Phosphorus has 5 valence electrons. How many are used in the five P–Cl bonds?
        "",
        // EN: Five electron domains and no lone pairs.
        "",
      ],
      // EN: <p>P has 5 valence electrons and uses all 5 in bonds. That is five bonding domains and no lone pairs. Five domains are arranged in a trigonal bipyramid: three bonds in a plane at 120°, and two bonds at 90° to that plane.</p>
      solution: "",
      misconception: {
        // EN (option B): Square pyramidal needs six electron domains, one of them a lone pair. Phosphorus in PCl<sub>5</sub> has five domains and no lone pair.
        "1": "",
        // EN (option C): Trigonal planar is for three electron domains. Phosphorus here has five bonding domains.
        "2": "",
        // EN (option D): Octahedral needs six electron domains. Count the bonds: there are five.
        "3": "",
      },
    },

    // ── s2-2h-q011 · numeric · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q011": {
      // EN: <p>How many lone pairs are on the chlorine atom in <span class="chem">ClF3</span>?</p>
      stem: "",
      hints: [
        // EN: Chlorine is in group 17. How many valence electrons does it have?
        "",
        // EN: Three electrons are used in the three Cl–F bonds. Pair up the rest.
        "",
      ],
      // EN: <div class="worked__math">Valence electrons on Cl = 7</div><div class="worked__math">Used in three Cl–F bonds = 3</div><div class="worked__math">Left over = 7 − 3 = 4 electrons = <b>2 lone pairs</b></div><p>So chlorine has 3 + 2 = 5 electron domains.</p>
      solution: "",
      // EN: lone pairs
      unit: "",
    },

    // ── s2-2h-q012 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q012": {
      // EN: <p>What are the molecular geometry and the F–S–F bond angle between neighbouring bonds in <span class="chem">SF6</span>?</p>
      stem: "",
      options: [
        // EN: Tetrahedral; 109.5°
        "",
        // EN: Trigonal bipyramidal; 90° and 120°
        "",
        // EN: Octahedral; 90°
        "",
        // EN: Hexagonal planar; 60°
        "",
      ],
      hints: [
        // EN: Sulfur has 6 valence electrons and forms six bonds.
        "",
        // EN: Six electron domains, no lone pairs.
        "",
      ],
      // EN: <p>S uses all 6 valence electrons in six S–F bonds. Six bonding domains with no lone pairs give an octahedral molecule. Neighbouring bonds are at 90°.</p>
      solution: "",
      misconception: {
        // EN (option A): Tetrahedral is for four electron domains. Sulfur here has six bonds.
        "0": "",
        // EN (option B): Trigonal bipyramidal is for five electron domains. Count the fluorine atoms: there are six.
        "1": "",
        // EN (option D): Electron domains spread out in three dimensions to get as far apart as possible. Six domains in one flat plane would be only 60° apart.
        "3": "",
      },
    },

    // ── s2-2h-q013 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q013": {
      // EN: <p>What are the electron domain geometry and the molecular geometry of <span class="chem">SF4</span>?</p>
      stem: "",
      options: [
        // EN: Electron domain geometry: tetrahedral. Molecular geometry: tetrahedral.
        "",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: trigonal bipyramidal.
        "",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: seesaw.
        "",
        // EN: Electron domain geometry: octahedral. Molecular geometry: square planar.
        "",
      ],
      hints: [
        // EN: Find the lone pairs on sulfur: valence electrons minus electrons used in bonds.
        "",
        // EN: Four bonding domains + one lone pair = five domains.
        "",
      ],
      // EN: <div class="worked__math">S: 6 valence electrons; 4 used in bonds; 2 left = 1 lone pair</div><p>Five electron domains: trigonal bipyramidal electron domain geometry. The lone pair takes an equatorial position. The four atoms then make a seesaw shape.</p>
      solution: "",
      misconception: {
        // EN (option A): This counts only the four bonds. Sulfur has 6 valence electrons and uses 4, so one lone pair is left. That makes five domains.
        "0": "",
        // EN (option B): The electron domain geometry is right. But the molecular geometry describes the atoms only, and one of the five domains is a lone pair.
        "1": "",
        // EN (option D): Square planar needs six domains with two lone pairs. Sulfur in SF<sub>4</sub> has only one lone pair: 6 − 4 = 2 electrons.
        "3": "",
      },
    },

    // ── s2-2h-q014 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q014": {
      // EN: <p>What are the molecular geometry and the F–Xe–F bond angle between neighbouring bonds in <span class="chem">XeF4</span>?</p>
      stem: "",
      options: [
        // EN: Tetrahedral; 109.5°
        "",
        // EN: Square planar; 90°
        "",
        // EN: Seesaw; less than 90° and less than 120°
        "",
        // EN: Octahedral; 90°
        "",
      ],
      hints: [
        // EN: Xenon is in group 18: 8 valence electrons.
        "",
        // EN: The two lone pairs go opposite each other, 180° apart.
        "",
      ],
      // EN: <div class="worked__math">Xe: 8 valence electrons; 4 used in bonds; 4 left = 2 lone pairs</div><p>Six domains: octahedral electron domain geometry. The two lone pairs are opposite each other. The four fluorine atoms lie in one plane: square planar, 90°.</p>
      solution: "",
      misconception: {
        // EN (option A): This counts only the four bonds. Xenon has 8 valence electrons and uses 4, so two lone pairs are left: six domains in total.
        "0": "",
        // EN (option C): Seesaw is for five domains with one lone pair. Xenon here has six domains: four bonds and two lone pairs.
        "2": "",
        // EN (option D): Octahedral is the electron domain geometry. The molecular geometry describes only the atoms, and two of the six positions hold lone pairs.
        "3": "",
      },
    },

    // ── s2-2h-q015 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q015": {
      // EN: <p>What is the molecular geometry of <span class="chem">BrF3</span>?</p>
      stem: "",
      options: [
        // EN: Trigonal planar
        "",
        // EN: Trigonal pyramidal
        "",
        // EN: T-shaped
        "",
        // EN: Trigonal bipyramidal
        "",
      ],
      hints: [
        // EN: Bromine is in group 17.
        "",
        // EN: Three bonding domains + two lone pairs = five domains. The lone pairs are equatorial.
        "",
      ],
      // EN: <div class="worked__math">Br: 7 valence electrons; 3 used in bonds; 4 left = 2 lone pairs</div><p>Five domains: trigonal bipyramidal arrangement. Both lone pairs are equatorial. The three fluorine atoms make a T shape, with bond angles a little less than 90°.</p>
      solution: "",
      misconception: {
        // EN (option A): Trigonal planar would mean no lone pairs on bromine. Bromine has 7 valence electrons and uses only 3 in bonds.
        "0": "",
        // EN (option B): Trigonal pyramidal is for four domains with one lone pair. Bromine here has two lone pairs: (7 − 3) ÷ 2 = 2.
        "1": "",
        // EN (option D): That is the electron domain geometry (five domains). Two of the five domains are lone pairs, so the atoms make a different shape.
        "3": "",
      },
    },

    // ── s2-2h-q016 · numeric · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q016": {
      // EN: <p>Deduce the Cl–I–Cl bond angle in the ion <span class="chem">ICl2-</span>. Iodine is the central atom.</p>
      stem: "",
      hints: [
        // EN: Count the electrons around iodine: 7 of its own, 1 from each chlorine, and 1 for the negative charge.
        "",
        // EN: Five pairs: two bonding pairs and three lone pairs. The lone pairs take the three equatorial positions.
        "",
      ],
      // EN: <div class="worked__math">Electrons around I = 7 + 2 + 1 = 10 = 5 pairs</div><div class="worked__math">2 bonding pairs + 3 lone pairs</div><p>Five domains are arranged in a trigonal bipyramid. The three lone pairs are equatorial. The two chlorine atoms are in the axial positions, so the ion is linear: <b>180°</b>.</p>
      solution: "",
    },

    // ── s2-2h-q017 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q017": {
      // EN: <p>What is the molecular geometry of <span class="chem">IF5</span>?</p>
      stem: "",
      options: [
        // EN: Trigonal bipyramidal
        "",
        // EN: Square pyramidal
        "",
        // EN: Octahedral
        "",
        // EN: Seesaw
        "",
      ],
      hints: [
        // EN: Iodine is in group 17.
        "",
        // EN: Five bonding domains + one lone pair = six domains.
        "",
      ],
      // EN: <div class="worked__math">I: 7 valence electrons; 5 used in bonds; 2 left = 1 lone pair</div><p>Six domains: octahedral arrangement. One position holds the lone pair. The five fluorine atoms make a square pyramid.</p>
      solution: "",
      misconception: {
        // EN (option A): This counts five bonds and forgets the lone pair. Iodine has 7 valence electrons and uses 5: one lone pair is left, so there are six domains.
        "0": "",
        // EN (option C): Octahedral is the electron domain geometry. One of the six domains is a lone pair, so the atoms do not make an octahedron.
        "2": "",
        // EN (option D): Seesaw is for five domains with one lone pair (four bonds). Here there are five bonds and one lone pair.
        "3": "",
      },
    },

    // ── s2-2h-q018 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q018": {
      // EN: <p>Which molecule is polar?</p>
      stem: "",
      options: [
        // EN: <span class="chem">PCl5</span>
        "",
        // EN: <span class="chem">SF4</span>
        "",
        // EN: <span class="chem">XeF4</span>
        "",
        // EN: <span class="chem">SF6</span>
        "",
      ],
      hints: [
        // EN: All four molecules have polar bonds. The question is whether the bond dipoles cancel.
        "",
        // EN: Find the shape of each molecule. Which one is not symmetrical?
        "",
      ],
      // EN: <p><span class="chem">SF4</span> has a lone pair on sulfur and a seesaw shape. The S–F bond dipoles do not cancel, so the molecule has a net dipole. The other three shapes are symmetrical, so their bond dipoles cancel.</p>
      solution: "",
      misconception: {
        // EN (option A): PCl<sub>5</sub> is trigonal bipyramidal with five identical bonds and no lone pairs. The bond dipoles cancel.
        "0": "",
        // EN (option C): XeF<sub>4</sub> is square planar. The four Xe–F bond dipoles point in opposite pairs and cancel.
        "2": "",
        // EN (option D): SF<sub>6</sub> is octahedral. The six S–F bond dipoles cancel in opposite pairs.
        "3": "",
      },
    },

    // ── s2-2h-q019 · mcq · challenge · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q019": {
      // EN: <p>Iodine forms the ions <span class="chem">IF4+</span> and <span class="chem">IF4-</span>. What are their molecular geometries?</p>
      stem: "",
      options: [
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: square planar.
        "",
        // EN: <span class="chem">IF4+</span>: tetrahedral. <span class="chem">IF4-</span>: tetrahedral.
        "",
        // EN: <span class="chem">IF4+</span>: square planar. <span class="chem">IF4-</span>: seesaw.
        "",
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: seesaw.
        "",
      ],
      hints: [
        // EN: Electrons around iodine = 7 + 4 (one from each F), then subtract 1 for a + charge or add 1 for a − charge.
        "",
        // EN: Halve the total to get the number of electron domains. Four are bonding; the rest are lone pairs.
        "",
      ],
      // EN: <div class="worked__math">IF<sub>4</sub><sup>+</sup>: 7 + 4 − 1 = 10 electrons = 5 domains = 4 bonds + 1 lone pair</div><div class="worked__math">IF<sub>4</sub><sup>−</sup>: 7 + 4 + 1 = 12 electrons = 6 domains = 4 bonds + 2 lone pairs</div><p>Five domains with one lone pair: seesaw. Six domains with two lone pairs: square planar.</p>
      solution: "",
      misconception: {
        // EN (option B): This counts only the four bonds. Iodine has lone pairs in both ions. Count all the electrons around iodine, including the charge.
        "1": "",
        // EN (option C): The charges are the wrong way round. A positive charge means one electron fewer; a negative charge means one electron more.
        "2": "",
        // EN (option D): This ignores the charge. The two ions have different numbers of electrons around iodine, so they have different numbers of lone pairs.
        "3": "",
      },
    },

    // ── s2-2h-q020 · short · challenge · AHL · Structure 2.2.13 · 4 marks
    "s2-2h-q020": {
      // EN: <p>Solid phosphorus(V) chloride contains the ions <span class="chem">PCl4+</span> and <span class="chem">PCl6-</span>.</p><p>Deduce the molecular geometry and the Cl–P–Cl bond angle (between neighbouring bonds) of each ion. Show how you counted the electron domains.</p>
      stem: "",
      hints: [
        // EN: Electrons around P = 5 (its own) + 1 from each Cl, then adjust for the charge.
        "",
        // EN: Divide by 2 to get the number of domains. Compare with the number of bonds to find the lone pairs.
        "",
      ],
      // EN: <div class="worked__math">PCl<sub>4</sub><sup>+</sup>: 5 + 4 − 1 = 8 electrons = 4 domains (4 bonds, 0 lone pairs)</div><div class="worked__math">PCl<sub>6</sub><sup>−</sup>: 5 + 6 + 1 = 12 electrons = 6 domains (6 bonds, 0 lone pairs)</div><p>Four bonding domains: tetrahedral, 109.5°. Six bonding domains: octahedral, 90°. Only the anion has an expanded octet.</p>
      solution: "",
      // EN: <p><span class="chem">PCl4+</span>: electrons around P = 5 + 4 − 1 = 8, so four electron domains, all bonding. Tetrahedral, 109.5°.</p><p><span class="chem">PCl6-</span>: electrons around P = 5 + 6 + 1 = 12, so six electron domains, all bonding. Octahedral, 90°.</p>
      answer: "",
      markscheme: [
        // EN: PCl<sub>4</sub><sup>+</sup>: four electron domains / four bonding pairs and no lone pairs on P.
        "",
        // EN: PCl<sub>4</sub><sup>+</sup>: tetrahedral AND 109.5°.
        "",
        // EN: PCl<sub>6</sub><sup>−</sup>: six electron domains / six bonding pairs and no lone pairs on P.
        "",
        // EN: PCl<sub>6</sub><sup>−</sup>: octahedral AND 90°.
        "",
      ],
    },

    // ── s2-2h-q021 · numeric · foundation · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q021": {
      // EN: <p>In the Lewis formula of the ammonium ion, <span class="chem">NH4+</span>, nitrogen has four single bonds and no lone pairs.</p><p>Calculate the formal charge on the nitrogen atom. Include the sign.</p>
      stem: "",
      hints: [
        // EN: FC = V − N − ½B. V is the number of valence electrons of a free nitrogen atom.
        "",
        // EN: N = 0 (no lone pairs). B = 8 (four bonds, two electrons each).
        "",
      ],
      // EN: <div class="worked__math">V = 5 (group 15), N = 0, B = 8</div><div class="worked__math">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>Each hydrogen has FC = 1 − 0 − ½(2) = 0. The total, +1, equals the charge on the ion.</p>
      solution: "",
    },

    // ── s2-2h-q022 · numeric · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q022": {
      // EN: <p>One Lewis formula of the chlorate ion, <span class="chem">ClO3-</span>, has chlorine joined to three oxygen atoms by single bonds. Chlorine has one lone pair. Each oxygen has three lone pairs.</p><p>Calculate the formal charge on the chlorine atom in this formula. Include the sign.</p>
      stem: "",
      hints: [
        // EN: FC = V − N − ½B. Chlorine is in group 17.
        "",
        // EN: N counts electrons, not pairs: one lone pair is 2 electrons. B = 6 (three single bonds).
        "",
      ],
      // EN: <div class="worked__math">V = 7, N = 2, B = 6</div><div class="worked__math">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class="worked__math">FC(each O) = 6 − 6 − ½(2) = −1</div><p>Check: +2 + 3(−1) = −1, the charge on the ion. Do not confuse this with the oxidation state of chlorine, which is +5.</p>
      solution: "",
    },

    // ── s2-2h-q023 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q023": {
      // EN: <p>Three Lewis formulas can be drawn for dinitrogen monoxide, <span class="chem">N2O</span>, with the atoms in the order N, N, O. The lone pairs on each atom are given in the same order.</p><ul><li>I: N≡N–O, with 1, 0 and 3 lone pairs</li><li>II: N=N=O, with 2, 0 and 2 lone pairs</li><li>III: N–N≡O, with 3, 0 and 1 lone pairs</li></ul><p>Which is the preferred Lewis formula? (Electronegativity: N 3.0, O 3.4.)</p>
      stem: "",
      options: [
        // EN: I
        "",
        // EN: II
        "",
        // EN: III
        "",
        // EN: I and II are equally preferred, because their formal charges are the same size.
        "",
      ],
      hints: [
        // EN: Calculate FC = V − N − ½B for all three atoms in each formula.
        "",
        // EN: First reject the formula with the largest charges. Then look at which atom carries the negative charge.
        "",
      ],
      // EN: <div class="worked__math">I: N 5 − 2 − 3 = 0; N 5 − 0 − 4 = +1; O 6 − 6 − 1 = −1</div><div class="worked__math">II: N 5 − 4 − 2 = −1; N +1; O 6 − 4 − 2 = 0</div><div class="worked__math">III: N 5 − 6 − 1 = −2; N +1; O 6 − 2 − 3 = +1</div><p>III has the largest charges. I and II both have one +1 and one −1, but I puts the −1 on oxygen, the more electronegative atom. I is preferred.</p>
      solution: "",
      misconception: {
        // EN (option B): II has formal charges −1, +1, 0. The negative charge sits on nitrogen. Oxygen is more electronegative, so the negative charge is better placed on oxygen.
        "1": "",
        // EN (option C): III has formal charges −2, +1, +1. These are the largest charges of the three, and oxygen is positive. Reject it first.
        "2": "",
        // EN (option D): The sizes are the same, so use the second rule: a negative formal charge should be on the more electronegative atom. That separates I from II.
        "3": "",
      },
    },

    // ── s2-2h-q024 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q024": {
      // EN: <p>Which assumption is made when the formal charge of an atom is calculated?</p>
      stem: "",
      options: [
        // EN: The electrons in each bond are shared equally between the two bonded atoms.
        "",
        // EN: The electrons in each bond belong completely to the more electronegative atom.
        "",
        // EN: The lone pairs are shared equally among all the atoms in the species.
        "",
        // EN: Every atom in the species has an octet of electrons.
        "",
      ],
      hints: [
        // EN: Look at the formula: FC = V − N − ½B. Why is B halved?
        "",
      ],
      // EN: <p>The ½ in front of B gives each atom half of the electrons in its bonds. So formal charge treats every bond as perfectly covalent (equal sharing). Oxidation state makes the opposite assumption: every bond is treated as ionic, with the electrons given to the more electronegative atom.</p>
      solution: "",
      misconception: {
        // EN (option B): That is the assumption for oxidation states. Formal charge ignores electronegativity and splits each bond evenly.
        "1": "",
        // EN (option C): Lone pairs belong completely to the atom they are drawn on. That is why N is subtracted in full.
        "2": "",
        // EN (option D): Formal charge can be calculated for any Lewis formula, including ones with expanded octets or fewer than eight electrons.
        "3": "",
      },
    },

    // ── s2-2h-q025 · mcq · challenge · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q025": {
      // EN: <p>Lewis formulas of the phosphate ion, <span class="chem">PO4^3-</span>, can be drawn with different numbers of P=O double bonds. Every oxygen atom has an octet in each formula. Phosphorus has no lone pairs.</p><p>Which formula is preferred, using formal charge? (Electronegativity: P 2.2, O 3.4.)</p>
      stem: "",
      options: [
        // EN: No P=O bonds (four P–O single bonds)
        "",
        // EN: One P=O bond and three P–O bonds
        "",
        // EN: Two P=O bonds and two P–O bonds
        "",
        // EN: Four P=O bonds
        "",
      ],
      hints: [
        // EN: A singly bonded O with three lone pairs has FC = −1. A doubly bonded O with two lone pairs has FC = 0.
        "",
        // EN: For P: FC = 5 − 0 − ½B. Work it out for 4, 5, 6 and 8 bonding pairs.
        "",
      ],
      // EN: <div class="worked__math">No P=O: P = 5 − ½(8) = +1; O: four at −1</div><div class="worked__math">One P=O: P = 5 − ½(10) = 0; O: one at 0, three at −1</div><div class="worked__math">Two P=O: P = 5 − ½(12) = −1; O: two at 0, two at −1</div><div class="worked__math">Four P=O: P = 5 − ½(16) = −3; O: four at 0</div><p>Every set adds up to −3. The formula with one P=O has the formal charges closest to zero, and all its negative charges are on oxygen, the more electronegative atom.</p>
      solution: "",
      misconception: {
        // EN (option A): This gives +1 on P and −1 on all four O atoms: five atoms carry a charge. Another formula has fewer charged atoms.
        "0": "",
        // EN (option C): This gives −1 on P and −1 on two O atoms. A negative formal charge on phosphorus is not favoured, because oxygen is more electronegative.
        "2": "",
        // EN (option D): This gives −3 on phosphorus and 0 on every oxygen. A large negative charge on the less electronegative atom is the worst choice.
        "3": "",
      },
    },

    // ── s2-2h-q026 · short · challenge · AHL · Structure 2.2.14 · 3 marks
    "s2-2h-q026": {
      // EN: <p>Two Lewis formulas can be drawn for the sulfate ion, <span class="chem">SO4^2-</span>. In both, sulfur has no lone pairs and every oxygen has an octet.</p><ul><li>A: four S–O single bonds</li><li>B: two S=O double bonds and two S–O single bonds</li></ul><p>Calculate the formal charge on sulfur in each formula. Then state which formula is preferred, with a reason.</p>
      stem: "",
      hints: [
        // EN: FC = V − N − ½B, with V = 6 for sulfur.
        "",
        // EN: B = 8 in formula A. In formula B, count 4 electrons for each double bond.
        "",
      ],
      // EN: <div class="worked__math">A: FC(S) = 6 − 0 − ½(8) = +2; each O = 6 − 6 − ½(2) = −1</div><div class="worked__math">B: FC(S) = 6 − 0 − ½(12) = 0; O (double) = 6 − 4 − ½(4) = 0; O (single) = −1</div><p>Both add up to −2. B has charges closest to zero, so formal charge prefers B. In B sulfur has an expanded octet (12 electrons), which is possible for a period 3 element.</p>
      solution: "",
      // EN: <p>A: FC(S) = 6 − 0 − ½(8) = +2. B: FC(S) = 6 − 0 − ½(12) = 0. B is preferred, because its formal charges are closest to zero (sulfur is 0 and only two oxygen atoms are −1).</p>
      answer: "",
      markscheme: [
        // EN: A: formal charge on S = +2.
        "",
        // EN: B: formal charge on S = 0.
        "",
        // EN: B is preferred because its formal charges are closest to zero / fewer atoms have a non-zero formal charge.
        "",
      ],
    },

    // ── s2-2h-q027 · numeric · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q027": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "",
      hints: [
        // EN: Every single bond is one σ bond. Do not forget the C–H bonds.
        "",
        // EN: A double bond is one σ bond and one π bond.
        "",
      ],
      // EN: <div class="worked__math">C–H bonds: 4 σ</div><div class="worked__math">C=C bond: 1 σ (and 1 π)</div><div class="worked__math">Total = 4 + 1 = <b>5 σ bonds</b></div>
      solution: "",
      // EN: σ bonds
      unit: "",
    },

    // ── s2-2h-q028 · mcq · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q028": {
      // EN: <p>Which describes how a sigma (σ) bond forms?</p>
      stem: "",
      options: [
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated along the bond axis.
        "",
        // EN: Sideways overlap of p orbitals; electron density is concentrated above and below the bond axis.
        "",
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated above and below the bond axis.
        "",
        // EN: Transfer of an electron from one atom to the other.
        "",
      ],
      hints: [
        // EN: The bond axis is the line joining the two nuclei.
        "",
      ],
      // EN: <p>A σ bond forms when two atomic orbitals overlap head-on (end to end). The shared electrons are found mainly on the bond axis, between the nuclei.</p>
      solution: "",
      misconception: {
        // EN (option B): This describes a π bond. A π bond needs p orbitals side by side.
        "1": "",
        // EN (option C): Head-on overlap puts the electron density between the two nuclei, on the line that joins them. Density on opposite sides of the axis belongs to a π bond.
        "2": "",
        // EN (option D): Electron transfer gives ions and ionic bonding. σ and π bonds are both covalent: electrons are shared.
        "3": "",
      },
    },

    // ── s2-2h-q029 · numeric · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q029": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethanoic acid, <span class="chem">CH3COOH</span>?</p>
      stem: "",
      hints: [
        // EN: Draw the full structural formula first: CH<sub>3</sub>–C(=O)–O–H.
        "",
        // EN: Count one σ bond for every pair of atoms that are joined, including C–H and O–H.
        "",
      ],
      // EN: <div class="worked__math">C–H: 3; C–C: 1; C=O: 1 σ (and 1 π); C–O: 1; O–H: 1</div><div class="worked__math">Total = 3 + 1 + 1 + 1 + 1 = <b>7 σ bonds</b></div><p>Check: a molecule with no rings and 8 atoms has 8 − 1 = 7 σ bonds.</p>
      solution: "",
      // EN: σ bonds
      unit: "",
    },

    // ── s2-2h-q030 · mcq · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q030": {
      // EN: <p>How many σ bonds and π bonds are there in one molecule of propenenitrile, <span class="chem">CH2=CH–C≡N</span>?</p>
      stem: "",
      options: [
        // EN: 6 σ and 3 π
        "",
        // EN: 3 σ and 3 π
        "",
        // EN: 6 σ and 2 π
        "",
        // EN: 4 σ and 5 π
        "",
      ],
      hints: [
        // EN: Draw every bond, including the three C–H bonds.
        "",
        // EN: Double bond = 1 σ + 1 π. Triple bond = 1 σ + 2 π.
        "",
      ],
      // EN: <div class="worked__math">σ: C–H 3; C=C 1; C–C 1; C≡N 1; total 6</div><div class="worked__math">π: C=C 1; C≡N 2; total 3</div>
      solution: "",
      misconception: {
        // EN (option B): The three C–H bonds are missing. They are hidden in the condensed formula, but each one is a σ bond.
        "1": "",
        // EN (option C): A triple bond has two π bonds, not one. So C≡N gives 2 π and C=C gives 1 π.
        "2": "",
        // EN (option D): This counts every line of a multiple bond as π. One bond in each double or triple bond is always a σ bond.
        "3": "",
      },
    },

    // ── s2-2h-q031 · short · exam · AHL · Structure 2.2.15 · 2 marks
    "s2-2h-q031": {
      // EN: <p>The carbon–carbon double bond in ethene is made of one σ bond and one π bond.</p><p>Describe how each bond forms, and state where its electron density is concentrated.</p>
      stem: "",
      hints: [
        // EN: One bond is made by orbitals pointing at each other. The other is made by orbitals standing side by side.
        "",
        // EN: Say which type of orbital makes the π bond.
        "",
      ],
      // EN: <p>σ: head-on overlap, density on the axis. π: sideways overlap of p orbitals, density on opposite sides of the axis. A diagram with labels can score these marks.</p>
      solution: "",
      // EN: <p>The σ bond forms by head-on (end-to-end) overlap of two orbitals, one from each carbon atom. Its electron density is concentrated along the bond axis, between the two nuclei. The π bond forms by sideways (lateral) overlap of two p orbitals. Its electron density is concentrated above and below the bond axis.</p>
      answer: "",
      markscheme: [
        // EN: σ: head-on / end-to-end overlap of (atomic or hybrid) orbitals AND electron density along the bond axis / between the nuclei.
        "",
        // EN: π: sideways / lateral overlap of p orbitals AND electron density above and below (on opposite sides of) the bond axis.
        "",
      ],
    },

    // ── s2-2h-q032 · order · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q032": {
      // EN: <p>Put these molecules in order of the number of π bonds in one molecule, <strong>fewest first</strong>.</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH3CH3</span> (ethane)
        "",
        // EN: <span class="chem">CH2=CH2</span> (ethene)
        "",
        // EN: <span class="chem">H–C≡N</span> (hydrogen cyanide)
        "",
        // EN: <span class="chem">CH2=CH–C≡N</span> (propenenitrile)
        "",
      ],
      hints: [
        // EN: Single bond: 0 π. Double bond: 1 π. Triple bond: 2 π.
        "",
      ],
      // EN: <p>Ethane 0 π; ethene 1 π; hydrogen cyanide 2 π (one triple bond); propenenitrile 3 π (one double bond and one triple bond).</p>
      solution: "",
    },

    // ── s2-2h-q033 · numeric · challenge · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q033": {
      // EN: <p>A molecule has the condensed structural formula <span class="chem">HC≡C–CH=CH–CHO</span>. The <span class="chem">CHO</span> group contains a C=O double bond and a C–H bond.</p><p>How many sigma (σ) bonds are there in one molecule?</p>
      stem: "",
      hints: [
        // EN: Draw the full structural formula. There are 5 carbon atoms, 4 hydrogen atoms and 1 oxygen atom.
        "",
        // EN: Each multiple bond contains exactly one σ bond. Each C–H bond is a σ bond.
        "",
      ],
      // EN: <div class="worked__math">C–H: 4; C≡C: 1 σ; C–C: 2; C=C: 1 σ; C=O: 1 σ</div><div class="worked__math">Total = 4 + 1 + 2 + 1 + 1 = <b>9 σ bonds</b></div><p>Check: 10 atoms and no rings gives 10 − 1 = 9 σ bonds. The molecule also has 2 + 1 + 1 = 4 π bonds.</p>
      solution: "",
      // EN: σ bonds
      unit: "",
    },

    // ── s2-2h-q034 · mcq · foundation · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q034": {
      // EN: <p>What is the hybridization of each carbon atom in ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "",
      options: [
        // EN: sp
        "",
        // EN: sp<sup>2</sup>
        "",
        // EN: sp<sup>3</sup>
        "",
        // EN: The carbon atoms are not hybridized.
        "",
      ],
      hints: [
        // EN: Count the electron domains around one carbon atom. A double bond is one domain.
        "",
        // EN: 2 domains → sp; 3 domains → sp<sup>2</sup>; 4 domains → sp<sup>3</sup>.
        "",
      ],
      // EN: <p>Each carbon has three electron domains: two C–H bonds and one C=C bond. Three domains means sp<sup>2</sup>, with the domains in a trigonal planar arrangement (120°).</p>
      solution: "",
      misconception: {
        // EN (option A): sp is for two electron domains. Each carbon in ethene is joined to three atoms: two H and one C.
        "0": "",
        // EN (option C): sp<sup>3</sup> is for four electron domains. A double bond counts as one domain, so each carbon has three.
        "2": "",
        // EN (option D): Carbon atoms that form bonds in molecules are described as sp, sp<sup>2</sup> or sp<sup>3</sup> hybridized.
        "3": "",
      },
    },

    // ── s2-2h-q035 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q035": {
      // EN: <p>The molecule <span class="chem">CH3–CO–C≡CH</span> contains a C=O double bond and a C≡C triple bond. What is the hybridization of the carbon atom in each group?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp.
        "",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>3</sup>. C≡C: sp<sup>3</sup>.
        "",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp. C≡C: sp<sup>2</sup>.
        "",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp<sup>2</sup>.
        "",
      ],
      hints: [
        // EN: For each carbon, count the atoms it is joined to. Carbon has no lone pairs here, so that is its number of domains.
        "",
        // EN: Multiple bonds count as one domain each.
        "",
      ],
      // EN: <p><span class="chem">CH3</span> carbon: four single bonds, four domains, sp<sup>3</sup>. C=O carbon: joined to C, O and C, three domains, sp<sup>2</sup>. Each C≡C carbon: joined to two atoms, two domains, sp.</p>
      solution: "",
      misconception: {
        // EN (option B): Not every carbon is sp<sup>3</sup>. Only a carbon with four electron domains (four single bonds) is sp<sup>3</sup>.
        "1": "",
        // EN (option C): These two are swapped. The C=O carbon is joined to three atoms (three domains, sp<sup>2</sup>). A triply bonded carbon is joined to two atoms (two domains, sp).
        "2": "",
        // EN (option D): A carbon in a triple bond has only two electron domains: the triple bond and one single bond. Two domains means sp.
        "3": "",
      },
    },

    // ── s2-2h-q036 · multi · exam · AHL · Structure 2.2.16 · 2 marks
    "s2-2h-q036": {
      // EN: <p>In which of these is the named atom sp<sup>2</sup> hybridized? Select all that apply.</p>
      stem: "",
      options: [
        // EN: B in <span class="chem">BF3</span>
        "",
        // EN: C in <span class="chem">HCHO</span> (methanal)
        "",
        // EN: N in <span class="chem">NH3</span>
        "",
        // EN: C in <span class="chem">CO2</span>
        "",
        // EN: Each C in <span class="chem">C2H4</span>
        "",
      ],
      hints: [
        // EN: sp<sup>2</sup> means three electron domains around the atom.
        "",
        // EN: Lone pairs count as domains. A double bond counts as one domain.
        "",
      ],
      // EN: <p>Three domains: B in <span class="chem">BF3</span> (three bonds, no lone pair); C in methanal (two C–H and one C=O); each C in ethene (two C–H and one C=C). N in <span class="chem">NH3</span> has four domains (sp<sup>3</sup>). C in <span class="chem">CO2</span> has two domains (sp).</p>
      solution: "",
      misconception: {
        // EN (option C): Nitrogen in ammonia has three bonds and one lone pair. The lone pair is a domain too: four domains, so sp<sup>3</sup>. Count domains, not bonds.
        "2": "",
        // EN (option D): Carbon in CO<sub>2</sub> has two double bonds. Each double bond is one domain: two domains, so sp.
        "3": "",
      },
    },

    // ── s2-2h-q037 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q037": {
      // EN: <p>The Lewis formula of carbon dioxide is O=C=O, with two lone pairs on each oxygen atom. What is the hybridization of the carbon atom and of each oxygen atom?</p>
      stem: "",
      options: [
        // EN: C: sp. O: sp<sup>2</sup>.
        "",
        // EN: C: sp<sup>2</sup>. O: sp<sup>2</sup>.
        "",
        // EN: C: sp. O: sp<sup>3</sup>.
        "",
        // EN: C: sp<sup>3</sup>. O: sp<sup>2</sup>.
        "",
      ],
      hints: [
        // EN: Carbon: two double bonds, no lone pairs. How many domains?
        "",
        // EN: Oxygen: one double bond and two lone pairs. How many domains?
        "",
      ],
      // EN: <p>Carbon: two domains → sp (linear, 180°). Each oxygen: one bonded atom + two lone pairs = three domains → sp<sup>2</sup>.</p>
      solution: "",
      misconception: {
        // EN (option B): Carbon is joined to two atoms and has no lone pairs: two domains, so sp. Its shape is linear, not trigonal planar.
        "1": "",
        // EN (option C): Each oxygen has one double bond (one domain) and two lone pairs (two domains). That is three domains, not four.
        "2": "",
        // EN (option D): Carbon forms four bonds here, but they are two double bonds. Two double bonds are two domains.
        "3": "",
      },
    },

    // ── s2-2h-q038 · mcq · challenge · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q038": {
      // EN: <p>Ethene reacts with hydrogen to form ethane: <span class="chem">C2H4 + H2 -> C2H6</span>. What happens at each carbon atom during this reaction?</p>
      stem: "",
      options: [
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 120° to about 109.5°.
        "",
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 109.5° to about 120°.
        "",
        // EN: Hybridization changes from sp to sp<sup>2</sup>. The bond angles change from 180° to about 120°.
        "",
        // EN: Hybridization changes from sp<sup>3</sup> to sp<sup>2</sup>. The bond angles change from about 109.5° to about 120°.
        "",
      ],
      hints: [
        // EN: Count the electron domains around a carbon atom in ethene, then in ethane.
        "",
        // EN: Match each hybridization to its geometry: sp<sup>2</sup> trigonal planar, sp<sup>3</sup> tetrahedral.
        "",
      ],
      // EN: <p>In ethene each carbon has three domains: sp<sup>2</sup>, trigonal planar, about 120°. In ethane each carbon has four domains: sp<sup>3</sup>, tetrahedral, about 109.5°. The π bond is lost and two new σ C–H bonds form.</p>
      solution: "",
      misconception: {
        // EN (option B): The hybridization is right but the angles are the wrong way round. sp<sup>2</sup> goes with 120° and sp<sup>3</sup> with 109.5°.
        "1": "",
        // EN (option C): sp and 180° belong to a carbon in a triple bond, such as in ethyne. Ethene has a double bond.
        "2": "",
        // EN (option D): This is the reverse reaction. Ethene (three domains per carbon) is the reactant; ethane (four domains per carbon) is the product.
        "3": "",
      },
    },

    // ── s2-2h-q039 · short · challenge · AHL · Structure 2.2.16 · 3 marks
    "s2-2h-q039": {
      // EN: <p>Hydrogen cyanide has the structure H–C≡N, with one lone pair on nitrogen.</p><p>Analyse the bonding around the carbon atom. State its hybridization and the H–C–N bond angle, and describe how the σ bonds and the π bonds to carbon are formed.</p>
      stem: "",
      hints: [
        // EN: Count the electron domains around carbon. A triple bond is one domain.
        "",
        // EN: An sp carbon has two hybrid orbitals and two p orbitals left unmixed. Which make σ bonds and which make π bonds?
        "",
      ],
      // EN: <p>Two domains → sp → linear, 180°. The two sp hybrid orbitals point in opposite directions and make the two σ bonds (to H and to N) by head-on overlap. The two unmixed p orbitals are at right angles to each other. Each overlaps sideways with a p orbital on nitrogen, giving two π bonds. Triple bond = 1 σ + 2 π.</p>
      solution: "",
      // EN: <p>Carbon has two electron domains (one single bond and one triple bond), so it is sp hybridized and the H–C–N angle is 180°. The C–H σ bond forms by head-on overlap of an sp hybrid orbital on carbon with the 1s orbital of hydrogen. The C–N σ bond forms by head-on overlap of the other sp hybrid orbital on carbon with a hybrid orbital on nitrogen. The two π bonds form by sideways overlap of the two unhybridized p orbitals on carbon with two p orbitals on nitrogen.</p>
      answer: "",
      markscheme: [
        // EN: Carbon is sp hybridized AND the bond angle is 180° (two electron domains).
        "",
        // EN: σ bonds: head-on overlap of sp hybrid orbitals of carbon (with 1s of H / with an orbital on N).
        "",
        // EN: Two π bonds: sideways (lateral) overlap of the (unhybridized) p orbitals on carbon and nitrogen.
        "",
      ],
    },

    // ── s2-2h-q040 · numeric · foundation · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q040": {
      // EN: <p>In the complex ion <span class="chem">[Fe(H2O)6]^3+</span>, six water molecules are bonded to one <span class="chem">Fe^3+</span> ion.</p><p>How many coordination bonds are there in one complex ion?</p>
      stem: "",
      hints: [
        // EN: A coordination bond is a covalent bond in which both shared electrons come from the same atom.
        "",
        // EN: Each water molecule donates one lone pair from its oxygen atom to the metal ion.
        "",
      ],
      // EN: <p>Each of the six water molecules donates one lone pair to the <span class="chem">Fe^3+</span> ion. That makes <b>6</b> coordination bonds. The O–H bonds inside each water molecule are ordinary covalent bonds, so they are not counted.</p>
      solution: "",
      // EN: coordination bonds
      unit: "",
    },

    // ── s2-2h-q041 · mcq · exam · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q041": {
      // EN: <p>In the complex ion <span class="chem">[Cu(NH3)4(H2O)2]^2+</span>, each ammonia molecule is bonded to the copper ion. Which describes the bond between one ammonia molecule and the copper ion?</p>
      stem: "",
      options: [
        // EN: A coordination bond: both electrons of the shared pair come from the nitrogen atom.
        "",
        // EN: A coordination bond: both electrons of the shared pair come from the copper ion.
        "",
        // EN: A covalent bond: one electron comes from the nitrogen atom and one from the copper ion.
        "",
        // EN: An ionic bond: ammonia has gained electrons from the copper ion.
        "",
      ],
      hints: [
        // EN: Draw the Lewis formula of ammonia. What does nitrogen have besides its three bonds?
        "",
        // EN: Which particle is short of electrons: the positive metal ion or the ammonia molecule?
        "",
      ],
      // EN: <p>Nitrogen in ammonia has one lone pair. It donates this pair to the <span class="chem">Cu^2+</span> ion. Both electrons of the shared pair come from the same atom (nitrogen), so the bond is a coordination bond. The ion has six coordination bonds: four from ammonia and two from water.</p>
      solution: "",
      misconception: {
        // EN (option B): The direction is reversed. The copper ion is positive and accepts the electron pair. The lone pair is on the nitrogen atom of ammonia.
        "1": "",
        // EN (option C): That describes an ordinary covalent bond. Here the nitrogen atom supplies both electrons, from its lone pair.
        "2": "",
        // EN (option D): Ammonia is a neutral molecule and stays a molecule in the complex. No electrons are transferred to it. It shares its lone pair with the copper ion.
        "3": "",
      },
    },

  }
});
