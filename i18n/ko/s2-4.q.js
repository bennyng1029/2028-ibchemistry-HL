/* s2-4.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's2-4.q', {
  questions: {

    // ── s2-4-q001 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q001": {
      // EN: <p>The bonding triangle shows bonding as a continuum between the ionic, covalent and metallic models. What is plotted on its two axes?</p>
      stem: "",
      options: [
        // EN: Horizontal: average electronegativity. Vertical: electronegativity difference.
        "",
        // EN: Horizontal: electronegativity difference. Vertical: average electronegativity.
        "",
        // EN: Horizontal: sum of the electronegativities. Vertical: electronegativity difference.
        "",
        // EN: Horizontal: electronegativity of the metal. Vertical: electronegativity of the non-metal.
        "",
      ],
      hints: [
        // EN: Ionic compounds have a large electronegativity difference. Where are they on the triangle: high up, or far along?
        "",
      ],
      // EN: <p>The horizontal axis is the average electronegativity of the two elements. The vertical axis is the electronegativity difference. A large difference puts a compound near the ionic top.</p>
      solution: "",
      misconception: {
        // EN (option B): The axes are swapped. The difference goes up the triangle, which is why the most ionic compounds are at the top.
        "1": "",
        // EN (option C): The horizontal axis is the average, not the sum. The sum of two values can be as large as 7.4, which is off the scale.
        "2": "",
        // EN (option D): The triangle does not need a metal and a non-metal. It uses the same two calculations for any two elements.
        "3": "",
      },
    },

    // ── s2-4-q002 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q002": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "",
        // EN: Use one value for each element. The 2 in the formula is not used.
        "",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>
      solution: "",
    },

    // ── s2-4-q003 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q003": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "",
      hints: [
        // EN: Add the two values, then divide by 2.
        "",
        // EN: Use one value for each element. Do not count chlorine twice.
        "",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>
      solution: "",
    },

    // ── s2-4-q004 · mcq · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q004": {
      // EN: <p>A binary compound has an average electronegativity of 2.7 and an electronegativity difference of 1.0. Use the bonding triangle to deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "",
      options: [
        // EN: Ionic
        "",
        // EN: Polar covalent
        "",
        // EN: Metallic
        "",
        // EN: Non-polar covalent
        "",
      ],
      hints: [
        // EN: Go along the horizontal axis to 2.7. Then go up to 1.0.
        "",
      ],
      // EN: <p>The point (2.7, 1.0) is on the right-hand side of the triangle and well above the base. That is the polar covalent region.</p>
      solution: "",
      misconception: {
        // EN (option A): Check the axes. Going along to 1.0 and up to 2.7 is the wrong way round. The average, 2.7, goes along and the difference, 1.0, goes up.
        "0": "",
        // EN (option C): The metallic region is at the bottom left, where the average is below about 1.9. An average of 2.7 is far to the right of it.
        "2": "",
        // EN (option D): A non-polar covalent bond has a difference of 0, so its point is on the base line. This point is at a height of 1.0.
        "3": "",
      },
    },

    // ── s2-4-q005 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q005": {
      // EN: <p>Which statement describes an alloy?</p>
      stem: "",
      options: [
        // EN: A compound of two metals that are chemically combined in a fixed ratio.
        "",
        // EN: A mixture of a metal and other metals or non-metals.
        "",
        // EN: An ionic compound of a metal and a non-metal.
        "",
        // EN: A pure metal that has been heated and then cooled quickly.
        "",
      ],
      hints: [
        // EN: Think of steel: iron with a little carbon. Is the amount of carbon fixed?
        "",
      ],
      // EN: <p>An alloy is a mixture of a metal and other metals or non-metals. It has enhanced properties, such as greater hardness.</p>
      solution: "",
      misconception: {
        // EN (option A): An alloy is a mixture, not a compound. The proportions of the elements can vary.
        "0": "",
        // EN (option C): An ionic compound has ions in a fixed ratio. In an alloy the bonding is metallic, and a non-metal such as carbon can be one of the components without forming an ionic lattice.
        "2": "",
        // EN (option D): A pure metal contains only one element. An alloy always contains at least one other element.
        "3": "",
      },
    },

    // ── s2-4-q006 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q006": {
      // EN: <p>Which statement describes a polymer?</p>
      stem: "",
      options: [
        // EN: A small molecule that can join to many others like it.
        "",
        // EN: A giant lattice of positive and negative ions.
        "",
        // EN: A large molecule made from many repeating subunits.
        "",
        // EN: A mixture of a metal and other elements.
        "",
      ],
      hints: [
        // EN: “Poly” means many. “Mono” means one.
        "",
      ],
      // EN: <p>A polymer is a large molecule (a macromolecule) made from many repeating subunits. The subunits come from small molecules called monomers.</p>
      solution: "",
      misconception: {
        // EN (option A): This describes a monomer. The polymer is the large molecule that forms when many monomers join.
        "0": "",
        // EN (option B): This describes an ionic compound. A polymer is a covalently bonded molecule.
        "1": "",
        // EN (option D): This describes an alloy.
        "3": "",
      },
    },

    // ── s2-4-q007 · mcq · foundation · SL · Structure 2.4.5 · 1 mark
    "s2-4-q007": {
      // EN: <p>Chloroethene, <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>, forms an addition polymer. Which is the repeating unit of the polymer?</p>
      stem: "",
      options: [
        // EN: <span class="chem nowrap">–CH=CCl–</span>
        "",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>
        "",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–CH<sub>2</sub>–CHCl–</span>
        "",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CH<sub>2</sub>–Cl–</span>
        "",
      ],
      hints: [
        // EN: Change C=C to C–C. Then add one bond at each end.
        "",
        // EN: The side groups stay on the same carbon atoms.
        "",
      ],
      // EN: <p>The double bond becomes a single bond, and each of the two carbons gains a continuation bond: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>. The chlorine atom stays on its carbon as a side group.</p>
      solution: "",
      misconception: {
        // EN (option A): The double bond does not stay. One bond of the C=C breaks so that each carbon can join to a neighbour. Two hydrogen atoms have also been lost here, but no atoms are lost in addition polymerization.
        "0": "",
        // EN (option C): This shows two repeating units. The repeating unit is the smallest part that repeats: two backbone carbons.
        "2": "",
        // EN (option D): Chlorine forms only one bond, so it cannot be in the backbone. It stays as a side group on its carbon.
        "3": "",
      },
    },

    // ── s2-4-q008 · multi · foundation · SL · Structure 2.4.5 · 2 marks
    "s2-4-q008": {
      // EN: <p>Which statements about the addition polymerization of an alkene are correct? Select all that apply.</p>
      stem: "",
      options: [
        // EN: The carbon to carbon double bond in each monomer breaks.
        "",
        // EN: A molecule of water is released each time two monomers join.
        "",
        // EN: The polymer is the only product.
        "",
        // EN: The backbone of the polymer contains C=C double bonds.
        "",
        // EN: The repeating unit contains the same atoms as one monomer.
        "",
      ],
      hints: [
        // EN: Count the atoms before and after. Are any atoms lost?
        "",
      ],
      // EN: <p>In addition polymerization the double bond of each monomer breaks and the monomers join. Nothing else is formed, so the polymer is the only product and each repeating unit has the same atoms as one monomer.</p>
      solution: "",
      misconception: {
        // EN (option B): Releasing a small molecule is the feature of condensation polymerization. In addition polymerization nothing is released.
        "1": "",
        // EN (option D): The double bonds are used up when the monomers join. The backbone has only single bonds between the carbons.
        "3": "",
      },
    },

    // ── s2-4-q009 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q009": {
      // EN: <p>The scale beside the bonding triangle shows the percentage ionic character at different heights.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col" class="num">Δ<i>χ</i></th><th scope="col" class="num">% ionic</th></tr></thead><tbody><tr><td class="num">1.0</td><td class="num">25</td></tr><tr><td class="num">1.6</td><td class="num">50</td></tr><tr><td class="num">2.3</td><td class="num">75</td></tr></tbody></table></div><p>Magnesium chloride has Δ<i>χ</i> = 1.9. Estimate its percentage ionic character from the scale.</p>
      stem: "",
      hints: [
        // EN: Between which two heights in the table does 1.9 lie?
        "",
        // EN: It is a little less than halfway from 1.6 to 2.3. Read a value a little less than halfway from 50 to 75.
        "",
      ],
      // EN: <p>1.9 lies between 1.6 (50 % ionic) and 2.3 (75 % ionic).</p><div class="worked__math">fraction of the way = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class="worked__math">reading = 50 + 0.43 × 25 = about 60 % ionic</div><p>This is a reading from a diagram, so any answer from about 55 % to 65 % is acceptable.</p>
      solution: "",
      // EN: about 60 % (55 to 65 % accepted)
      answerDisplay: "",
    },

    // ── s2-4-q010 · mcq · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q010": {
      // EN: <p>Tin is a metal and chlorine is a non-metal. Use <i>χ</i>(Sn) = 2.0, <i>χ</i>(Cl) = 3.2 and the bonding triangle. What is the best description of the bonding in tin(IV) chloride, <span class="chem nowrap">SnCl<sub>4</sub></span>?</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "",
      options: [
        // EN: Ionic, because a metal is bonded to a non-metal.
        "",
        // EN: Ionic, because the electronegativity difference is greater than 1.0.
        "",
        // EN: Polar covalent, because the point (2.6, 1.2) lies in that region.
        "",
        // EN: Metallic, because the compound contains a metal.
        "",
      ],
      hints: [
        // EN: Calculate both coordinates: the difference and the average.
        "",
        // EN: Difference = 3.2 − 2.0. Average = (2.0 + 3.2) / 2. Now find the point.
        "",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class="worked__math">average <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>The point (2.6, 1.2) is in the polar covalent region. This agrees with the properties: tin(IV) chloride is a liquid made of molecules.</p>
      solution: "",
      misconception: {
        // EN (option A): “Metal with non-metal” is only a rough guide. The triangle uses the electronegativity values, and here they place the compound in the polar covalent region.
        "0": "",
        // EN (option B): One number is not enough, and there is no cut-off at 1.0. You need the difference and the average to find the region.
        "1": "",
        // EN (option D): The metallic region is at the bottom left, where both elements have low electronegativity. Chlorine has a high electronegativity.
        "3": "",
      },
    },

    // ── s2-4-q011 · mcq · exam · SL · Structure 2.4.1 · 1 mark
    "s2-4-q011": {
      // EN: <p>A binary compound has an average electronegativity of 2.1 and an electronegativity difference of 2.6. Its point is high in the ionic region of the bonding triangle. Which properties does the ionic model predict?</p>
      stem: "",
      options: [
        // EN: Low melting point; does not conduct electricity in any state.
        "",
        // EN: High melting point; conducts electricity as a solid.
        "",
        // EN: High melting point; conducts electricity when molten but not as a solid.
        "",
        // EN: Low melting point; conducts electricity when molten.
        "",
      ],
      hints: [
        // EN: What particles are in an ionic solid? Can they move?
        "",
      ],
      // EN: <p>The ionic model has a lattice of oppositely charged ions with strong electrostatic attraction between them, so the melting point is high. The ions cannot move in the solid, but they can move when the compound is molten, so it conducts only then.</p>
      solution: "",
      misconception: {
        // EN (option A): These are the properties of a molecular covalent substance. An ionic lattice has strong electrostatic attraction between oppositely charged ions in every direction.
        "0": "",
        // EN (option B): Conducting as a solid needs delocalized electrons, as in a metal. In a solid ionic lattice the ions are fixed in place.
        "1": "",
        // EN (option D): A lot of energy is needed to overcome the strong electrostatic attraction between the ions, so the melting point is high.
        "3": "",
      },
    },

    // ── s2-4-q012 · short · exam · SL · Structure 2.4.2 · 2 marks
    "s2-4-q012": {
      // EN: <p>Use <i>χ</i>(Ca) = 1.0 and <i>χ</i>(S) = 2.6. Determine the position of calcium sulfide, CaS, in the bonding triangle, and deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "",
      hints: [
        // EN: You need two numbers: the difference and the average.
        "",
        // EN: Plot the average along and the difference up.
        "",
      ],
      // EN: <p>Both values are needed for the first mark. The point (1.8, 1.6) lies above the metallic region and to the left of the polar covalent region, inside the ionic band.</p>
      solution: "",
      // EN: <div class="worked__math">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class="worked__math">average <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>The point (1.8, 1.6) is in the ionic region, so calcium sulfide is ionic.</p>
      answer: "",
      markscheme: [
        // EN: Electronegativity difference = 1.6 AND average electronegativity = 1.8 (both needed for the mark).
        "",
        // EN: Ionic (bonding), from the position in the triangle.
        "",
      ],
    },

    // ── s2-4-q013 · short · exam · SL · Structure 2.4.3 · 2 marks
    "s2-4-q013": {
      // EN: <p>Steel is an alloy made by adding a small amount of carbon to iron. Explain why steel is harder than pure iron.</p>
      stem: "",
      hints: [
        // EN: Start with pure iron. Why is it malleable?
        "",
        // EN: What does an atom of a different size do to regular layers?
        "",
      ],
      // EN: <p>In pure iron the cations are all the same size and form regular layers that slide over each other. Carbon atoms have a different size and disrupt the layers, so they slide less easily. “The bonds are stronger” is not accepted.</p>
      solution: "",
      // EN: <p>Carbon atoms are a different size from iron atoms, so they disrupt the regular arrangement of the layers in the lattice. The layers cannot slide over each other as easily, so steel is harder.</p>
      answer: "",
      markscheme: [
        // EN: The carbon atoms are a different size (smaller) AND disrupt/distort the regular lattice/layers of iron ions.
        "",
        // EN: The layers cannot slide over each other as easily (so more force is needed to change the shape).
        "",
      ],
    },

    // ── s2-4-q014 · mcq · exam · SL · Structure 2.4.3 · 1 mark
    "s2-4-q014": {
      // EN: <p>Which feature of metallic bonding makes it possible for atoms of another element to take places in a metal lattice?</p>
      stem: "",
      options: [
        // EN: Each metal atom forms a fixed number of covalent bonds in fixed directions.
        "",
        // EN: The attraction between the cations and the delocalized electrons is non-directional.
        "",
        // EN: The cations and the atoms of the other element form a compound with a fixed ratio.
        "",
        // EN: The delocalized electrons are removed when the other element is added.
        "",
      ],
      hints: [
        // EN: In a metal, does each cation bond to particular neighbours, or to the electrons all around it?
        "",
      ],
      // EN: <p>Metallic bonding is the electrostatic attraction between cations and delocalized electrons. It is non-directional, so the lattice can accommodate atoms of other elements and still be held together.</p>
      solution: "",
      misconception: {
        // EN (option A): Bonds in fixed directions describe covalent bonding. Metallic bonding acts equally in all directions.
        "0": "",
        // EN (option C): An alloy is a mixture. Its composition is not fixed.
        "2": "",
        // EN (option D): The delocalized electrons stay. They are what holds the lattice together, including the added atoms.
        "3": "",
      },
    },

    // ── s2-4-q015 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q015": {
      // EN: <p>The structure of propene is shown.</p><svg viewBox="0 0 90 112" width="90" height="112" role="img" aria-label="Propene: two carbons joined by a double bond. The first carbon has two H atoms. The second carbon has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 53 H58 M32 59 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which is the repeating unit of poly(propene)?</p>
      stem: "",
      options: [
        // EN: <svg viewBox="0 0 186 112" width="186" height="112" role="img" aria-label="Option A: three backbone carbons in a row, each with two H atoms, with a continuation bond at each end" style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M142 56 H166" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M148 6 H154 V106 H148" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="158" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option B: two backbone carbons joined by a double bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 53 H76 M50 59 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option C: two backbone carbons joined by a single bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "",
        // EN: <svg viewBox="0 0 118 112" width="118" height="112" role="img" aria-label="Option D: two carbons joined by a single bond, with no continuation bonds. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 56 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M6 6 H0 V106 H6 M98 6 H104 V106 H98" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="108" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "",
      ],
      hints: [
        // EN: Which two carbon atoms were joined by the double bond? Only those are in the backbone.
        "",
        // EN: Check that every carbon has exactly four bonds.
        "",
      ],
      // EN: <p>Change C=C to C–C and add a continuation bond to each of the two carbons. The CH₃ group stays as a side group: –CH<sub>2</sub>–CH(CH<sub>3</sub>)–.</p>
      solution: "",
      misconception: {
        // EN (option A): The CH₃ group is not part of the double bond, so it does not go into the backbone. Only the two carbons of the C=C are in the chain.
        "0": "",
        // EN (option B): The double bond has been kept. Each carbon would then have five bonds. The C=C becomes C–C when the continuation bonds form.
        "1": "",
        // EN (option D): The continuation bonds are missing. Without them the unit cannot join to its neighbours, and each backbone carbon has only three bonds.
        "3": "",
      },
    },

    // ── s2-4-q016 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q016": {
      // EN: <p>A section of an addition polymer is shown.</p><svg viewBox="0 0 218 112" width="218" height="112" role="img" aria-label="Polymer chain section with four backbone carbons and a continuation bond at each end. Carbons 1 and 3 each have two H atoms. Carbons 2 and 4 each have two Cl atoms." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M178 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M178 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M142 56 H168" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M188 56 H212" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which monomer formed this polymer?</p>
      stem: "",
      options: [
        // EN: <span class="chem nowrap">CHCl=CHCl</span>
        "",
        // EN: <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>
        "",
        // EN: <span class="chem nowrap">CH<sub>2</sub>=CCl<sub>2</sub></span>
        "",
        // EN: <span class="chem nowrap">CH<sub>3</sub>–CHCl<sub>2</sub></span>
        "",
      ],
      hints: [
        // EN: Mark off the chain two backbone carbons at a time.
        "",
        // EN: One pair is CH<sub>2</sub> joined to CCl<sub>2</sub>. Put a double bond between those two carbons.
        "",
      ],
      // EN: <p>The repeating unit is –CH<sub>2</sub>–CCl<sub>2</sub>–. Remove the continuation bonds and restore the double bond: CH<sub>2</sub>=CCl<sub>2</sub>.</p>
      solution: "",
      misconception: {
        // EN (option A): This monomer would put one chlorine on every backbone carbon. In the polymer shown, both chlorine atoms are on the same carbon and the next carbon has none.
        "0": "",
        // EN (option B): This monomer has only one chlorine atom, but each repeating unit in the chain has two.
        "1": "",
        // EN (option D): This molecule has no C=C double bond, so it cannot form an addition polymer.
        "3": "",
      },
    },

    // ── s2-4-q017 · short · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q017": {
      // EN: <p>Poly(ethene) is a plastic used for food containers. State one <strong>chemical</strong> property that makes it suitable for this use, and explain the property in terms of the structure of the polymer.</p>
      stem: "",
      hints: [
        // EN: A chemical property is about whether the substance reacts.
        "",
        // EN: What kind of bond joins the atoms inside a polymer chain?
        "",
      ],
      // EN: <p>The question asks for a chemical property, so “strong” or “light” earns nothing. Plastics are unreactive because the covalent bonds in their chains are strong.</p>
      solution: "",
      // EN: <p>It is unreactive (chemically inert), so it does not react with the food. The atoms in the polymer chains are joined by strong covalent bonds, which need a lot of energy to break.</p>
      answer: "",
      markscheme: [
        // EN: Unreactive / chemically inert / does not react with food, water or acids (accept non-biodegradable). Do not accept a physical property such as strong, flexible or low density.
        "",
        // EN: The chains contain strong covalent bonds (C–C and C–H) which are difficult to break.
        "",
      ],
    },

    // ── s2-4-q018 · order · exam · SL · Structure 2.4.5 · 2 marks
    "s2-4-q018": {
      // EN: <p>Put these steps in order to draw the repeating unit of an addition polymer from its monomer.</p>
      stem: "",
      options: [
        // EN: Find the two carbon atoms that are joined by the double bond.
        "",
        // EN: Redraw the monomer with every other group above or below those two carbons.
        "",
        // EN: Change the double bond to a single bond.
        "",
        // EN: Draw one continuation bond out from each of the two carbons.
        "",
        // EN: Check that each carbon atom has four bonds.
        "",
      ],
      hints: [
        // EN: You cannot open the double bond until you have found it.
        "",
        // EN: The check comes last.
        "",
      ],
      // EN: <p>Find the C=C, redraw with the side groups above and below, change C=C to C–C, add the two continuation bonds, then check that each carbon has four bonds.</p>
      solution: "",
    },

    // ── s2-4-q019 · numeric · challenge · SL · Structure 2.4.5 · 2 marks
    "s2-4-q019": {
      // EN: <p>Propene, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>, forms the addition polymer poly(propene). One polymer chain has a relative molecular mass of <span class="mono">6.31 × 10<sup>4</sup></span>. Estimate the number of repeating units in this chain. Use <i>A</i><sub>r</sub>: C 12.01, H 1.01.</p>
      stem: "",
      hints: [
        // EN: In addition polymerization no atoms are lost. What is the relative mass of one repeating unit?
        "",
        // EN: Number of units = relative molecular mass of the chain ÷ relative mass of one unit.
        "",
      ],
      // EN: <p>The repeating unit has the same atoms as one monomer, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>.</p><div class="worked__math"><i>M</i><sub>r</sub>(unit) = 3(12.01) + 6(1.01) = 42.09</div><div class="worked__math">number of units = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> (3 significant figures)</div>
      solution: "",
    },

    // ── s2-4-q020 · mcq · challenge · SL · Structure 2.4.1 · 1 mark
    "s2-4-q020": {
      // EN: <p>The table gives electronegativity values. <i>χ</i>(O) = 3.4.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Element</th><th scope="col" class="num">Na</th><th scope="col" class="num">Mg</th><th scope="col" class="num">Si</th><th scope="col" class="num">P</th><th scope="col" class="num">S</th></tr></thead><tbody><tr><th scope="row"><i>χ</i></th><td class="num">0.9</td><td class="num">1.3</td><td class="num">1.9</td><td class="num">2.2</td><td class="num">2.6</td></tr></tbody></table></div><p>How does the position of the oxide in the bonding triangle change from sodium oxide to the oxide of sulfur, and what does this show about the bonding?</p>
      stem: "",
      options: [
        // EN: The difference decreases and the average increases. The bonding changes from ionic to polar covalent.
        "",
        // EN: The difference increases and the average increases. The bonding changes from polar covalent to ionic.
        "",
        // EN: The difference decreases and the average decreases. The bonding changes from ionic to metallic.
        "",
        // EN: The position does not change, because every oxide contains oxygen.
        "",
      ],
      hints: [
        // EN: Calculate the difference and the average for the first oxide and the last oxide.
        "",
        // EN: Na and O: difference 2.5, average 2.15. S and O: difference 0.8, average 3.0.
        "",
      ],
      // EN: <div class="worked__math">Na and O: Δ<i>χ</i> = 3.4 − 0.9 = 2.5; average = (0.9 + 3.4) / 2 = 2.15</div><div class="worked__math">S and O: Δ<i>χ</i> = 3.4 − 2.6 = 0.8; average = (2.6 + 3.4) / 2 = 3.0</div><p>The points move down and to the right: from the ionic region to the polar covalent region. Bonding changes gradually across the period, which is the idea of a continuum.</p>
      solution: "",
      misconception: {
        // EN (option B): The values get closer to 3.4 from Na to S, so the difference gets smaller, not larger. Check: 3.4 − 0.9 = 2.5 but 3.4 − 2.6 = 0.8.
        "1": "",
        // EN (option C): The average rises, because the first element becomes more electronegative while oxygen stays at 3.4. The points move right, away from the metallic corner.
        "2": "",
        // EN (option D): The position depends on both elements. The other element changes, so both coordinates change.
        "3": "",
      },
    },

    // ── s2-4-q021 · short · challenge · SL · Structure 2.4.2 · 3 marks
    "s2-4-q021": {
      // EN: <p>Sodium and silicon both form chlorides: NaCl and <span class="chem nowrap">SiCl<sub>4</sub></span>. Use <i>χ</i>(Na) = 0.9, <i>χ</i>(Si) = 1.9 and <i>χ</i>(Cl) = 3.2 and the bonding triangle. Determine the position of each chloride, deduce the bonding type of each, and predict one difference in their properties.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "",
      hints: [
        // EN: Work out two numbers for each chloride. Use one value per element.
        "",
        // EN: Locate both points, then use the model for each region to predict properties.
        "",
      ],
      // EN: <p>NaCl is at (2.05, 2.3), in the ionic region. <span class="chem nowrap">SiCl<sub>4</sub></span> is at (2.55, 1.3), in the polar covalent region. The ionic model predicts a high melting point and conduction when molten. The covalent model predicts no conduction, and <span class="chem nowrap">SiCl<sub>4</sub></span> is made of molecules, so its melting point is low.</p>
      solution: "",
      // EN: <div class="worked__math">NaCl: Δ<i>χ</i> = 3.2 − 0.9 = 2.3; average = (0.9 + 3.2) / 2 = 2.05</div><div class="worked__math">SiCl<sub>4</sub>: Δ<i>χ</i> = 3.2 − 1.9 = 1.3; average = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl is in the ionic region and <span class="chem nowrap">SiCl<sub>4</sub></span> is in the polar covalent region. NaCl has a much higher melting point, because of the strong electrostatic attraction between its ions. Molten NaCl conducts electricity because its ions can move, but <span class="chem nowrap">SiCl<sub>4</sub></span> does not conduct because it has no mobile charged particles.</p>
      answer: "",
      markscheme: [
        // EN: NaCl: difference 2.3 and average 2.05 AND SiCl₄: difference 1.3 and average 2.55.
        "",
        // EN: NaCl ionic AND SiCl₄ (polar) covalent.
        "",
        // EN: One valid difference with a reason, for example: NaCl has the higher melting point (strong electrostatic attraction between ions) OR NaCl conducts when molten (mobile ions) and SiCl₄ does not.
        "",
      ],
    },

    // ── s2-4-q022 · numeric · challenge · SL · Structure 2.4.2 · 2 marks
    "s2-4-q022": {
      // EN: <p>Element X has an electronegativity of 1.6. It forms a binary compound with a more electronegative element, Y. The compound is at the point (2.4, 1.6) in the bonding triangle: average electronegativity 2.4, electronegativity difference 1.6. Calculate the electronegativity of Y.</p>
      stem: "",
      hints: [
        // EN: Y is more electronegative than X, so <i>χ</i>(Y) − <i>χ</i>(X) equals the difference.
        "",
        // EN: Either use the difference: <i>χ</i>(Y) = 1.6 + 1.6. Or use the average: the two values add up to 2 × 2.4.
        "",
      ],
      // EN: <div class="worked__math"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>Check with the average:</p><div class="worked__math">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>
      solution: "",
    },

    // ── s2-4-q023 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q023": {
      // EN: <p>Which statement is correct for the formation of every condensation polymer?</p>
      stem: "",
      options: [
        // EN: Each monomer must contain a carbon to carbon double bond.
        "",
        // EN: The polymer is the only product.
        "",
        // EN: A small molecule is released each time two monomers join.
        "",
        // EN: Only one kind of monomer can be used.
        "",
      ],
      hints: [
        // EN: What does the word “condensation” tell you is formed as well as the polymer?
        "",
      ],
      // EN: <p>In condensation polymerization, functional groups on the monomers react together. Each new link releases a small molecule, usually water.</p>
      solution: "",
      misconception: {
        // EN (option A): A C=C double bond is needed for addition polymerization. Condensation monomers need two functional groups instead.
        "0": "",
        // EN (option B): This is true for addition polymers. A condensation reaction also gives a small molecule, usually water.
        "1": "",
        // EN (option D): Many condensation polymers are made from two different monomers, such as a diol and a dicarboxylic acid.
        "3": "",
      },
    },

    // ── s2-4-q024 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q024": {
      // EN: <p>A polyester is made from these two monomers.</p><p><span class="chem nowrap">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; and &nbsp; <span class="chem nowrap">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>Which is the repeating unit of the polyester?</p>
      stem: "",
      options: [
        // EN: <span class="chem chem--eq">HO–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–COOH</span>
        "",
        // EN: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>
        "",
        // EN: <span class="chem chem--eq">–CH<sub>2</sub>–CH<sub>2</sub>–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>
        "",
        // EN: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–O–</span>
        "",
      ],
      hints: [
        // EN: Water forms from an H of the diol and an –OH of the acid.
        "",
        // EN: Remove H from both ends of the diol and –OH from both ends of the acid. Then join them.
        "",
      ],
      // EN: <p>Each –OH group of the diol loses H. Each –COOH group of the acid loses –OH. Joining O to the C=O carbon gives the ester link: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>. Water is the other product.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the molecule made when one diol joins one acid. It still has an –OH group and a –COOH group at its ends, so it is not a repeating unit. A repeating unit has continuation bonds at both ends.
        "0": "",
        // EN (option C): Both oxygen atoms of the diol have been removed. The diol loses only an H atom at each end. Its oxygen atoms stay and become part of the ester links.
        "2": "",
        // EN (option D): There is one oxygen atom too many. The acid loses its –OH at each end, so the right-hand end is –CO–, not –CO–O–.
        "3": "",
      },
    },

    // ── s2-4-q025 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q025": {
      // EN: <p>The repeating unit of a polyamide is shown.</p><p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>Which pair of monomers forms this polymer?</p>
      stem: "",
      options: [
        // EN: <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>
        "",
        // EN: <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span> and <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "",
      ],
      hints: [
        // EN: Break each bond between N and the C=O carbon.
        "",
        // EN: Give each N an extra H, and give each C=O carbon an –OH.
        "",
      ],
      // EN: <p>Break the amide links. The <span class="chem nowrap">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> part gains an H on each nitrogen: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>, a diamine. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> part gains an –OH on each carbon: <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>, a dicarboxylic acid.</p>
      solution: "",
      misconception: {
        // EN (option A): A diol and a dicarboxylic acid give a polyester, with –O–CO– links. This polymer has nitrogen in its links.
        "0": "",
        // EN (option B): The two C=O groups in the repeating unit have been lost. Each C=O carbon gains an –OH on hydrolysis, to give a –COOH group.
        "1": "",
        // EN (option C): The unit shows both nitrogen atoms on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>6</sub></span> part and both C=O groups on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>8</sub></span> part. So one monomer has two –NH<sub>2</sub> groups and the other has two –COOH groups.
        "2": "",
      },
    },

    // ── s2-4-q026 · short · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q026": {
      // EN: <p>A polyamide is made from these two monomers.</p><p><span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; and &nbsp; <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>Draw the repeating unit of the polyamide.</p>
      stem: "",
      hints: [
        // EN: An –NH<sub>2</sub> group loses one H. A –COOH group loses –OH.
        "",
        // EN: Join N to the C=O carbon. Then open both outer ends in the same way.
        "",
      ],
      // EN: <p>Remove one H from each –NH<sub>2</sub> group and the –OH from each –COOH group. Join N to the C=O carbon. The unit is <span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span>, and water is the other product. Brackets and <i>n</i> are not required.</p>
      solution: "",
      // EN: <p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>Each CO is a carbon atom with a double bond to oxygen. Each nitrogen atom keeps one hydrogen atom. There is a continuation bond at each end.</p>
      answer: "",
      markscheme: [
        // EN: Correct amide link shown: –NH–CO– (C=O bonded to N–H).
        "",
        // EN: Continuation bonds at both ends AND the rest of the structure correct, with only one repeating unit drawn.
        "",
      ],
    },

    // ── s2-4-q027 · multi · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q027": {
      // EN: <p>Which statements about condensation and hydrolysis are correct? Select all that apply.</p>
      stem: "",
      options: [
        // EN: Proteins form from amino acids by condensation reactions.
        "",
        // EN: Hydrolysis of a polyester releases one molecule of water for each link broken.
        "",
        // EN: Hydrolysis breaks the links in a condensation polymer by reaction with water.
        "",
        // EN: Poly(ethene) is easily broken down into ethene by hydrolysis.
        "",
        // EN: One molecule of water is released when an amide link forms from an –NH<sub>2</sub> group and a –COOH group.
        "",
      ],
      hints: [
        // EN: Condensation and hydrolysis are opposites. In which one is water a product?
        "",
      ],
      // EN: <p>All biological macromolecules, including proteins, form by condensation and break down by hydrolysis. Condensation releases water as each link forms. Hydrolysis uses water to break each link.</p>
      solution: "",
      misconception: {
        // EN (option B): Hydrolysis uses water. It does not release it. One molecule of water is a reactant for each link that breaks.
        "1": "",
        // EN (option D): Poly(ethene) is an addition polymer. Its backbone has only carbon to carbon bonds, with no ester or amide links for water to break.
        "3": "",
      },
    },

    // ── s2-4-q028 · numeric · challenge · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q028": {
      // EN: <p>150 molecules of a diamine react with 150 molecules of a dicarboxylic acid. They form one polyamide chain that contains all 300 monomer units. How many molecules of water are released?</p>
      stem: "",
      hints: [
        // EN: One molecule of water is released for each amide link that forms.
        "",
        // EN: How many links join 300 units in a single chain? Try it with 2 units, then 3 units.
        "",
      ],
      // EN: <p>Two units need 1 link. Three units need 2 links. A chain of <i>N</i> units has <i>N</i> − 1 links.</p><div class="worked__math">links = 300 − 1 = 299, so 299 molecules of H<sub>2</sub>O</div>
      solution: "",
    },

    // ── s2-4-q029 · short · challenge · AHL · Structure 2.4.6 · 3 marks
    "s2-4-q029": {
      // EN: <p>The repeating unit of a polyester is shown.</p><p><span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) Deduce the structures of the two monomers formed when this polymer is hydrolysed. (b) Suggest why this polymer breaks down in the environment more readily than poly(ethene).</p>
      stem: "",
      hints: [
        // EN: Break each bond between O and the C=O carbon.
        "",
        // EN: Each O gains an H. Each C=O carbon gains an –OH.
        "",
        // EN: For (b), compare the backbones of the two polymers.
        "",
      ],
      // EN: <p>Hydrolysis breaks each ester link. The <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> part gains an H at each end to give the diol. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> part gains an –OH at each end to give the dicarboxylic acid. Addition polymers have no links that water can break.</p>
      solution: "",
      // EN: <p>(a) <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>.</p><p>(b) The polyester has ester links in its backbone, which can be broken by hydrolysis (reaction with water). Poly(ethene) has only strong carbon to carbon bonds in its backbone, which are not hydrolysed.</p>
      answer: "",
      markscheme: [
        // EN: HO–(CH₂)₄–OH (the diol).
        "",
        // EN: HOOC–(CH₂)₂–COOH (the dicarboxylic acid).
        "",
        // EN: The polyester has ester links that can be hydrolysed / broken by water, but poly(ethene) has only (strong, non-polar) C–C bonds in its chain.
        "",
      ],
    },

    // ── s2-4-q030 · mcq · challenge · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q030": {
      // EN: <p>A single monomer can form a condensation polymer if it has two different functional groups. The monomer <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span> forms a polyester. Which is the repeating unit?</p>
      stem: "",
      options: [
        // EN: <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "",
        // EN: <span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "",
        // EN: <span class="chem nowrap">–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "",
        // EN: <span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–</span>
        "",
      ],
      hints: [
        // EN: The –OH end of one molecule reacts with the –COOH end of the next molecule.
        "",
        // EN: Remove H from the –OH end and –OH from the –COOH end.
        "",
      ],
      // EN: <p>Each molecule loses an H from its –OH group and an –OH from its –COOH group, which together make one molecule of water. What remains is <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>. The ester link forms where one unit joins the next.</p>
      solution: "",
      misconception: {
        // EN (option B): This shows two repeating units. With one kind of monomer, the smallest part that repeats comes from a single monomer molecule.
        "1": "",
        // EN (option C): The oxygen of the –OH group has been removed. The –OH group loses only its H. Its oxygen becomes part of the ester link.
        "2": "",
        // EN (option D): There is one oxygen atom too many. The –COOH group loses its –OH, so that end of the unit is –CO–.
        "3": "",
      },
    },

    // ── s2-4-q031 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q031": {
      // EN: <p>Chemists describe bonding as a continuum between the ionic, covalent and metallic models. What does this mean?</p>
      stem: "",
      options: [
        // EN: Every substance has exactly one of the three types of bonding.
        "",
        // EN: Bonding changes gradually from one type to another, and many substances lie between the models.
        "",
        // EN: Every substance has equal amounts of the three types of bonding.
        "",
        // EN: The type of bonding in a substance changes when the substance is heated.
        "",
      ],
      hints: [
        // EN: Think of the bonding triangle. Are substances found only at its three corners?
        "",
      ],
      // EN: <p>A continuum is a smooth range with no sharp dividing lines. The three models are the extremes. The bonding in most substances lies somewhere between them, and the bonding triangle shows where.</p>
      solution: "",
      misconception: {
        // EN (option A): This describes three separate boxes. A continuum has no sharp dividing lines: a polar covalent bond, for example, is covalent with some ionic character.
        "0": "",
        // EN (option C): The amounts are not equal. A substance near a corner of the bonding triangle is described well by one model. A substance between the corners has character of more than one model.
        "2": "",
        // EN (option D): A continuum is not about one substance changing. It is about the gradual change in bonding from one substance to the next.
        "3": "",
      },
    },

    // ── s2-4-q032 · short · exam · SL · Structure 2.4.1 · 2 marks
    "s2-4-q032": {
      // EN: <p>Solid copper conducts electricity. Solid sodium chloride does not. Use bonding models to explain this difference.</p>
      stem: "",
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that can move.
        "",
        // EN: Name the charged particles in each solid. Can they move?
        "",
      ],
      // EN: <p>Name the particles and say whether they can move. In copper the delocalized electrons move. In solid sodium chloride the charged particles are ions, and they are fixed in the lattice. “Sodium chloride has no free electrons” does not earn the mark, because an ionic compound conducts through moving ions when it is molten.</p>
      solution: "",
      // EN: <p>Copper has metallic bonding: a lattice of cations with delocalized electrons. The delocalized electrons are free to move through the solid, so they carry charge.</p><p>Sodium chloride has ionic bonding. In the solid, the ions are held in fixed positions in the lattice, so no charged particles are free to move.</p>
      answer: "",
      markscheme: [
        // EN: Copper: delocalized electrons that are free to move / mobile (through the lattice).
        "",
        // EN: Sodium chloride: ions are in fixed positions / cannot move in the solid (lattice). Do not accept “no free electrons” alone.
        "",
      ],
    },

    // ── s2-4-q033 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q033": {
      // EN: <p>Bronze is made by adding tin to copper. Bronze is harder than pure copper. Which statement explains this?</p>
      stem: "",
      options: [
        // EN: The tin atoms form strong covalent bonds with the copper atoms.
        "",
        // EN: The tin atoms are a different size, so the layers cannot slide over each other as easily.
        "",
        // EN: The tin atoms remove the delocalized electrons from the copper.
        "",
        // EN: The tin atoms and the copper atoms form an ionic lattice.
        "",
      ],
      hints: [
        // EN: Why is a pure metal malleable? What must the layers be able to do?
        "",
      ],
      // EN: <p>In pure copper the cations are all the same size and form regular layers, which slide over each other. Tin atoms are a different size. They disrupt the regular layers, so the layers slide less easily and the alloy is harder.</p>
      solution: "",
      misconception: {
        // EN (option A): The bonding in an alloy is still metallic. The alloy is harder because its layers are disrupted, not because new covalent bonds form.
        "0": "",
        // EN (option C): The delocalized electrons stay. Tin is a metal and adds its own outer electrons to them.
        "2": "",
        // EN (option D): Both elements are metals, and neither forms negative ions here. The bonding stays metallic.
        "3": "",
      },
    },

    // ── s2-4-q034 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q034": {
      // EN: <p>Polymers can be natural or synthetic. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Natural polymer</th><th scope="col">Synthetic polymer</th></tr></thead><tbody><tr><th scope="row">A</th><td>poly(ethene)</td><td>starch</td></tr><tr><th scope="row">B</th><td>protein</td><td>poly(ethene)</td></tr><tr><th scope="row">C</th><td>water</td><td>protein</td></tr><tr><th scope="row">D</th><td>cellulose</td><td>ethene</td></tr></tbody></table></div>
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
        // EN: Natural polymers are made by living things. Synthetic polymers are made in factories.
        "",
        // EN: A polymer is a large molecule. Check that both substances in the row are polymers.
        "",
      ],
      // EN: <p>Proteins are natural polymers: living things make them from amino acids. Poly(ethene) is a synthetic polymer, a plastic made from ethene. Row B is correct.</p>
      solution: "",
      misconception: {
        // EN (option A): These are the wrong way round. Starch is made by plants, so it is natural. Poly(ethene) is made in factories, so it is synthetic.
        "0": "",
        // EN (option C): Water is a small molecule, not a polymer. Protein is a natural polymer, made by living things.
        "2": "",
        // EN (option D): Cellulose is a natural polymer, but ethene is a small molecule. Ethene is the monomer that makes the polymer poly(ethene).
        "3": "",
      },
    },

    // ── s2-4-q035 · mcq · exam · SL · Structure 2.4.4 · 1 mark
    "s2-4-q035": {
      // EN: <p>Many plastics soften when they are warmed, so they can be moulded into new shapes. Which statement explains this?</p>
      stem: "",
      options: [
        // EN: The covalent bonds inside the polymer chains break.
        "",
        // EN: The weak intermolecular forces between the polymer chains are overcome, so the chains can slide past each other.
        "",
        // EN: The delocalized electrons in the plastic gain energy and move faster.
        "",
        // EN: The ions in the plastic become free to move.
        "",
      ],
      hints: [
        // EN: There are two kinds of attraction in a plastic: inside each chain, and between chains. Which is weaker?
        "",
      ],
      // EN: <p>Inside each chain the atoms are joined by strong covalent bonds. Between the chains there are only weak intermolecular forces. Gentle heating overcomes these weak forces, so the chains slide past each other and the plastic softens. No covalent bonds break.</p>
      solution: "",
      misconception: {
        // EN (option A): The covalent bonds in the chains are strong and do not break on gentle heating. If they broke, the plastic would decompose into new substances.
        "0": "",
        // EN (option C): A plastic has no delocalized electrons. All its outer electrons are held in covalent bonds, which is why it is an electrical insulator.
        "2": "",
        // EN (option D): A plastic is made of covalently bonded molecules. It contains no ions.
        "3": "",
      },
    },

    // ── s2-4-q036 · multi · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q036": {
      // EN: <p>Which statements about plastics are correct? Select all that apply.</p>
      stem: "",
      options: [
        // EN: A plastic is made of very long molecules.
        "",
        // EN: Plastics are electrical insulators because all their outer electrons are held in covalent bonds.
        "",
        // EN: Plastics are unreactive because the forces between the chains are weak.
        "",
        // EN: The atoms inside each polymer chain are joined by strong covalent bonds.
        "",
        // EN: Most plastics are quickly broken down by microorganisms.
        "",
      ],
      hints: [
        // EN: Separate the two ideas: strong covalent bonds inside a chain, and weak forces between chains.
        "",
        // EN: A chemical property depends on breaking bonds inside the chains.
        "",
      ],
      // EN: <p>Plastics are polymers: very long molecules with strong covalent bonds inside each chain. There are no delocalized electrons or ions, so plastics do not conduct electricity. The strong covalent bonds make plastics unreactive and, for most plastics, non-biodegradable.</p>
      solution: "",
      misconception: {
        // EN (option C): The weak forces between chains explain physical properties, such as softening on heating. Plastics are unreactive because the covalent bonds inside the chains are strong.
        "2": "",
        // EN (option E): Most plastics are non-biodegradable. Microorganisms cannot easily break the strong covalent bonds in the chains, so plastic waste stays in the environment for a very long time.
        "4": "",
      },
    },

    // ── s2-4-q037 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q037": {
      // EN: <p>A diamine reacts with a dicarboxylic acid to form a condensation polymer. Which row gives the type of polymer and the link between the monomer units?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of polymer</th><th scope="col">Link</th></tr></thead><tbody><tr><th scope="row">A</th><td>polyester</td><td>–CO–O–</td></tr><tr><th scope="row">B</th><td>polyamide</td><td>–CO–O–</td></tr><tr><th scope="row">C</th><td>polyamide</td><td>–CO–NH–</td></tr><tr><th scope="row">D</th><td>polyester</td><td>–CO–NH–</td></tr></tbody></table></div>
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
        // EN: A diamine has two –NH<sub>2</sub> groups. Which atom of the diamine joins to the C=O carbon?
        "",
      ],
      // EN: <p>An –NH<sub>2</sub> group reacts with a –COOH group. Water is released and an amide link, –CO–NH–, forms. A polymer with many amide links is a polyamide.</p>
      solution: "",
      misconception: {
        // EN (option A): A polyester forms from a diol and a dicarboxylic acid. Here the first monomer is a diamine, with –NH<sub>2</sub> groups, so the link must contain nitrogen.
        "0": "",
        // EN (option B): The name is right, but –CO–O– is an ester link. An amide link contains nitrogen: –CO–NH–.
        "1": "",
        // EN (option D): The link is right, but a polymer with –CO–NH– links is called a polyamide.
        "3": "",
      },
    },

  }
});
