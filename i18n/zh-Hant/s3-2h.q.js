/* s3-2h.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's3-2h.q', {
  questions: {

    // ── s3-2h-q001 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q001": {
      // EN: <p>Which compound can exist as <i>cis</i> and <i>trans</i> isomers?</p>
      stem: "<p>以下哪一個化合物可以有 <i>cis</i>（順式）和 <i>trans</i>（反式）異構體？</p>",
      options: [
        // EN: <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub><span></span></span>
        "<span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH=CH<sub>2</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH=CH<sub>2</sub><span></span></span>",
      ],
      hints: [
        // EN: Look at each carbon atom of the C=C bond in turn.
        "逐一看 C=C 鍵的每個碳原子。",
        // EN: Each of the two carbon atoms must be bonded to two different atoms or groups.
        "兩個碳原子都必須各自連接兩個不同的原子或基團。",
      ],
      // EN: <p>For <i>cis–trans</i> isomers you need restricted rotation (the C=C bond) and two different groups on <strong>each</strong> carbon of the double bond.</p><p>In but-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>, each carbon of the double bond holds one H and one <span class="chem">CH<sub>3</sub><span></span></span>. The two methyl groups can be on the same side (<i>cis</i>) or on opposite sides (<i>trans</i>).</p>
      solution: "<p>要有 <i>cis–trans</i> 異構體（順反異構體），需要兩個條件：旋轉受限制 (restricted rotation)，即有 C=C 鍵；並且雙鍵的<strong>每一個</strong>碳上都有兩個不同的基團。</p><p>在 but-2-ene（丁-2-烯）<span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span> 中，雙鍵的每個碳都連接一個 H 和一個 <span class=\"chem\">CH<sub>3</sub><span></span></span>。兩個甲基可以在同一側（<i>cis</i>），也可以在相反兩側（<i>trans</i>）。</p>",
      misconception: {
        // EN (option A): In but-1-ene the first carbon of the double bond holds two hydrogen atoms. Swapping two identical atoms gives the same molecule.
        "0": "在 but-1-ene 中，雙鍵的第一個碳連接兩個氫原子。對調兩個相同的原子，得到的仍是同一個分子。",
        // EN (option C): In 2-methylpropene one carbon of the double bond holds two methyl groups and the other holds two hydrogen atoms. Neither carbon has two different groups.
        "2": "在 2-methylpropene 中，雙鍵的一個碳連接兩個甲基，另一個碳連接兩個氫原子。兩個碳都沒有兩個不同的基團。",
        // EN (option D): In propene the end carbon of the double bond holds two hydrogen atoms. Both carbons must hold two different groups.
        "3": "在 propene 中，雙鍵末端的碳連接兩個氫原子。兩個碳都必須連接兩個不同的基團。",
      },
    },

    // ── s3-2h-q002 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q002": {
      // EN: <p>X and Y are two drawings of 1,2-dichloroethene.</p><p><strong>X</strong></p><p><svg class="q-fig" viewBox="-33.1 -41.4 101 84" width="101" height="84" style="max-width:100%;height:auto" role="img" aria-label="Molecule X: two carbon atoms joined by a double bond. Both chlorine atoms are drawn above the double bond and both hydrogen atoms below it."><line x1="9.0" y1="-2.3" x2="25.5" y2="-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.3" x2="25.5" y2="2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="-7.4" x2="-11.7" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="7.4" x2="-13.4" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="-7.4" x2="46.2" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="7.4" x2="47.9" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="34.5" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="-18.6" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-18.6" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="53.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg></p><p><strong>Y</strong></p><p><svg class="q-fig" viewBox="-33.1 -41.4 101 84" width="101" height="84" style="max-width:100%;height:auto" role="img" aria-label="Molecule Y: two carbon atoms joined by a double bond. One chlorine atom is drawn above the double bond on the left carbon and the other below it on the right carbon."><line x1="9.0" y1="-2.3" x2="25.5" y2="-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.3" x2="25.5" y2="2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="-7.4" x2="-11.7" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="7.4" x2="-13.4" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="-7.4" x2="47.9" y2="-19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="7.4" x2="46.2" y2="16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="34.5" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="-18.6" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-18.6" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg></p><p>Which statement is correct?</p>
      stem: "<p>X 和 Y 是 1,2-dichloroethene 的兩個圖示。</p><p><strong>X</strong></p><p><svg class=\"q-fig\" viewBox=\"-33.1 -41.4 101 84\" width=\"101\" height=\"84\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"分子 X：兩個碳原子以雙鍵連接。兩個氯原子都畫在雙鍵上方，兩個氫原子都在下方。\"><line x1=\"9.0\" y1=\"-2.3\" x2=\"25.5\" y2=\"-2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.3\" x2=\"25.5\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"-7.4\" x2=\"-11.7\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"7.4\" x2=\"-13.4\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"-7.4\" x2=\"46.2\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"7.4\" x2=\"47.9\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"34.5\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"-18.6\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-18.6\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"53.1\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg></p><p><strong>Y</strong></p><p><svg class=\"q-fig\" viewBox=\"-33.1 -41.4 101 84\" width=\"101\" height=\"84\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"分子 Y：兩個碳原子以雙鍵連接。一個氯原子畫在左邊碳的雙鍵上方，另一個畫在右邊碳的雙鍵下方。\"><line x1=\"9.0\" y1=\"-2.3\" x2=\"25.5\" y2=\"-2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.3\" x2=\"25.5\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"-7.4\" x2=\"-11.7\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"7.4\" x2=\"-13.4\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"-7.4\" x2=\"47.9\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"7.4\" x2=\"46.2\" y2=\"16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"34.5\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"-18.6\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-18.6\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg></p><p>以下哪一項陳述正確？</p>",
      options: [
        // EN: X is the <i>cis</i> isomer and Y is the <i>trans</i> isomer.
        "X 是 <i>cis</i> 異構體，Y 是 <i>trans</i> 異構體。",
        // EN: X is the <i>trans</i> isomer and Y is the <i>cis</i> isomer.
        "X 是 <i>trans</i> 異構體，Y 是 <i>cis</i> 異構體。",
        // EN: X and Y are the same molecule, because one end can rotate about the C=C bond.
        "X 和 Y 是同一個分子，因為其中一端可以繞 C=C 鍵旋轉。",
        // EN: X and Y are structural isomers.
        "X 和 Y 是結構異構體。",
      ],
      hints: [
        // EN: Find the two chlorine atoms in each drawing. Are they on the same side of the double bond or on opposite sides?
        "在每個圖中找出兩個氯原子。它們在雙鍵的同一側，還是在相反兩側？",
        // EN: <i>Cis</i> = same side. <i>Trans</i> = opposite sides.
        "<i>Cis</i> = 同一側。<i>Trans</i> = 相反兩側。",
      ],
      // EN: <p>In X both Cl atoms are on the same side of the C=C bond: this is the <i>cis</i> isomer. In Y they are on opposite sides: this is the <i>trans</i> isomer.</p><p>X and Y have the same connectivity but a different arrangement in space. They are stereoisomers, and they cannot interconvert because rotation about the double bond is restricted.</p>
      solution: "<p>在 X 中，兩個 Cl 原子在 C=C 鍵的同一側：這是 <i>cis</i> 異構體。在 Y 中，它們在相反兩側：這是 <i>trans</i> 異構體。</p><p>X 和 Y 的原子連接方式相同，但在空間中的排列不同。它們是立體異構體 (stereoisomers)，而且不能互相轉換，因為繞雙鍵的旋轉受限制。</p>",
      misconception: {
        // EN (option B): The labels are the wrong way round. <i>Cis</i> means "on the same side". In X both chlorine atoms are on the same side of the double bond.
        "1": "標示倒轉了。<i>Cis</i> 的意思是「在同一側」。在 X 中，兩個氯原子都在雙鍵的同一側。",
        // EN (option C): Rotation about a C=C double bond is restricted, because it would break the π bond. So X cannot turn into Y at room temperature.
        "2": "繞 C=C 雙鍵的旋轉受限制，因為旋轉會令 π 鍵斷裂。所以在室溫下 X 不能變成 Y。",
        // EN (option D): Structural isomers have different connectivity. In X and in Y each carbon is bonded to one H, one Cl and the other carbon. Only the arrangement in space differs, so they are stereoisomers.
        "3": "結構異構體的原子連接方式不同。在 X 和 Y 中，每個碳都連接一個 H、一個 Cl 和另一個碳。只有空間排列不同，所以它們是立體異構體。",
      },
    },

    // ── s3-2h-q003 · multi · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q003": {
      // EN: <p>Which of these compounds can exist as <i>cis</i> and <i>trans</i> isomers? Select <strong>all</strong> that apply.</p>
      stem: "<p>以下哪些化合物可以有 <i>cis</i> 和 <i>trans</i> 異構體？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: 1,2-dimethylcyclopropane (one methyl group on each of two ring carbons)
        "1,2-dimethylcyclopropane（兩個環碳上各有一個甲基）",
        // EN: 1,1-dimethylcyclobutane (both methyl groups on the same ring carbon)
        "1,1-dimethylcyclobutane（兩個甲基在同一個環碳上）",
        // EN: pent-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pent-2-ene，<span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 2-methylbut-2-ene, <span class="chem">CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub><span></span></span>
        "2-methylbut-2-ene，<span class=\"chem\">CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub><span></span></span>",
        // EN: 1,3-dimethylcyclobutane (methyl groups on opposite corners of the ring)
        "1,3-dimethylcyclobutane（兩個甲基在環的對角位置）",
      ],
      hints: [
        // EN: A ring stops rotation in the same way as a double bond.
        "環和雙鍵一樣，會阻止旋轉。",
        // EN: In a ring you need two different ring carbons that each hold a substituent and a hydrogen atom. In an alkene each carbon of C=C needs two different groups.
        "在環中，需要有兩個不同的環碳，各自連接一個取代基和一個氫原子。在烯烴中，C=C 的每個碳都需要有兩個不同的基團。",
      ],
      // EN: <p>Two things are needed: restricted rotation (a C=C bond or a ring) and two different groups on each of two carbon atoms.</p><ul><li>1,2-dimethylcyclopropane: yes. The two methyl groups can be on the same face of the ring (<i>cis</i>) or on opposite faces (<i>trans</i>).</li><li>1,1-dimethylcyclobutane: no. Both groups are on one carbon.</li><li>pent-2-ene: yes. One carbon of C=C holds H and <span class="chem">CH<sub>3</sub><span></span></span>, the other holds H and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>.</li><li>2-methylbut-2-ene: no. One carbon of C=C holds two <span class="chem">CH<sub>3</sub><span></span></span> groups.</li><li>1,3-dimethylcyclobutane: yes. The methyl groups are on two different ring carbons, so they can be on the same face or on opposite faces.</li></ul>
      solution: "<p>需要兩個條件：旋轉受限制（有 C=C 鍵或環），以及兩個碳原子各自連接兩個不同的基團。</p><ul><li>1,2-dimethylcyclopropane：可以。兩個甲基可以在環的同一面（<i>cis</i>），也可以在相反兩面（<i>trans</i>）。</li><li>1,1-dimethylcyclobutane：不可以。兩個基團都在同一個碳上。</li><li>pent-2-ene：可以。C=C 的一個碳連接 H 和 <span class=\"chem\">CH<sub>3</sub><span></span></span>，另一個碳連接 H 和 <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>。</li><li>2-methylbut-2-ene：不可以。C=C 的其中一個碳連接兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。</li><li>1,3-dimethylcyclobutane：可以。兩個甲基在兩個不同的環碳上，所以可以在同一面，也可以在相反兩面。</li></ul>",
      misconception: {
        // EN (option B): In 1,1-dimethylcyclobutane both methyl groups are on the same carbon. One is above the ring and one below it in every case, so there is only one arrangement.
        "1": "在 1,1-dimethylcyclobutane 中，兩個甲基在同一個碳上。無論怎樣畫，都是一個在環的上方、一個在下方，所以只有一種排列。",
        // EN (option D): In 2-methylbut-2-ene one carbon of the double bond holds two methyl groups. Swapping two identical groups gives the same molecule.
        "3": "在 2-methylbut-2-ene 中，雙鍵的一個碳連接兩個甲基。對調兩個相同的基團，得到的仍是同一個分子。",
      },
    },

    // ── s3-2h-q004 · short · exam · AHL · Structure 3.2.7 · 2 marks
    "s3-2h-q004": {
      // EN: <p>But-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>, exists as <i>cis</i> and <i>trans</i> isomers. But-1-ene, <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>, does not.</p><p>Explain both facts.</p>
      stem: "<p>But-2-ene <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span> 有 <i>cis</i> 和 <i>trans</i> 異構體。But-1-ene <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span> 則沒有。</p><p>解釋 (explain) 這兩個事實。</p>",
      hints: [
        // EN: Start with rotation. What is special about a double bond?
        "先想旋轉。雙鍵有甚麼特別之處？",
        // EN: Then compare what is attached to each carbon of the C=C in the two molecules.
        "然後比較兩個分子中 C=C 的每個碳上連接了甚麼。",
      ],
      // EN: <p>The mark-earning phrases are "restricted rotation about the double bond" and "two different groups on each carbon of the double bond". Writing only "the groups are on different sides" describes the isomers but does not explain them.</p>
      solution: "<p>得分的用語是「restricted rotation about the double bond」（繞雙鍵的旋轉受限制）和「two different groups on each carbon of the double bond」（雙鍵的每個碳上有兩個不同的基團）。只寫「基團在不同的一側」只是描述了異構體，並沒有解釋。</p>",
      // EN: <p>There is no free rotation about the C=C double bond (rotation is restricted). In but-2-ene each carbon atom of the double bond is bonded to two different groups (H and <span class="chem">CH<sub>3</sub><span></span></span>), so the two <span class="chem">CH<sub>3</sub><span></span></span> groups can be fixed on the same side or on opposite sides. In but-1-ene one carbon of the double bond is bonded to two identical atoms (two H), so swapping them gives the same molecule.</p>
      answer: "<p>C=C 雙鍵不能自由旋轉（旋轉受限制）。在 but-2-ene 中，雙鍵的每個碳原子都連接兩個不同的基團（H 和 <span class=\"chem\">CH<sub>3</sub><span></span></span>），所以兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團可以固定在同一側或相反兩側。在 but-1-ene 中，雙鍵的其中一個碳連接兩個相同的原子（兩個 H），所以把它們對調後仍是同一個分子。</p>",
      markscheme: [
        // EN: Restricted rotation / no free rotation about the C=C (double) bond.
        "繞 C=C（雙）鍵的旋轉受限制／不能自由旋轉。",
        // EN: But-2-ene: each carbon of the double bond has two different atoms or groups attached (H and CH₃). But-1-ene: one carbon of the double bond has two identical atoms attached (two H). Both needed for the mark.
        "But-2-ene：雙鍵的每個碳都連接兩個不同的原子或基團（H 和 CH₃）。But-1-ene：雙鍵的其中一個碳連接兩個相同的原子（兩個 H）。兩點都要寫出才得分。",
      ],
    },

    // ── s3-2h-q005 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q005": {
      // EN: <p>In these drawings a solid wedge is a bond coming towards you, in front of the ring. A hashed wedge is a bond going away from you, behind the ring.</p><p>Which drawing shows <i>trans</i>-1,2-dichlorocyclopropane?</p>
      stem: "<p>在這些圖中，實心楔形鍵表示朝向你、在環前方的鍵。虛線楔形鍵表示遠離你、在環後方的鍵。</p><p>哪一個圖顯示 <i>trans</i>-1,2-dichlorocyclopropane？</p>",
      options: [
        // EN: <svg class="q-fig" viewBox="-32.5 -32.1 95 73" width="95" height="73" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. Both chlorine atoms are on solid wedge bonds."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.7,12.2 -7.9,16.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><polygon points="30.0,0.0 37.9,16.6 43.7,12.2" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><text x="-18.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="48.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-32.5 -32.1 95 73\" width=\"95\" height=\"73\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"三元碳環。兩個不同的環碳各連接一個氯原子。兩個氯原子都在實心楔形鍵上。\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.7,12.2 -7.9,16.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><polygon points=\"30.0,0.0 37.9,16.6 43.7,12.2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><text x=\"-18.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"48.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-43.0 -32.1 79 77" width="79" height="77" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. One ring carbon carries two chlorine atoms, one on a solid wedge bond and one on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -17.2,-0.9 -16.1,6.2" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-2.0" y1="2.5" x2="0.2" y2="3.2" stroke="currentColor" stroke-width="1.3"/><line x1="-3.4" y1="5.2" x2="-0.2" y2="6.2" stroke="currentColor" stroke-width="1.3"/><line x1="-4.8" y1="7.9" x2="-0.6" y2="9.2" stroke="currentColor" stroke-width="1.3"/><line x1="-6.2" y1="10.5" x2="-1.0" y2="12.2" stroke="currentColor" stroke-width="1.3"/><line x1="-7.6" y1="13.2" x2="-1.4" y2="15.2" stroke="currentColor" stroke-width="1.3"/><line x1="-9.0" y1="15.9" x2="-1.8" y2="18.2" stroke="currentColor" stroke-width="1.3"/><text x="-28.5" y="9.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-9.0" y="33.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-43.0 -32.1 79 77\" width=\"79\" height=\"77\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"三元碳環。同一個環碳連接兩個氯原子，一個在實心楔形鍵上，一個在虛線楔形鍵上。\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -17.2,-0.9 -16.1,6.2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-2.0\" y1=\"2.5\" x2=\"0.2\" y2=\"3.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-3.4\" y1=\"5.2\" x2=\"-0.2\" y2=\"6.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-4.8\" y1=\"7.9\" x2=\"-0.6\" y2=\"9.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-6.2\" y1=\"10.5\" x2=\"-1.0\" y2=\"12.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-7.6\" y1=\"13.2\" x2=\"-1.4\" y2=\"15.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-9.0\" y1=\"15.9\" x2=\"-1.8\" y2=\"18.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-28.5\" y=\"9.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-9.0\" y=\"33.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-32.5 -32.1 95 73" width="95" height="73" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.7,12.2 -7.9,16.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="30.9" y1="3.1" x2="32.7" y2="1.7" stroke="currentColor" stroke-width="1.3"/><line x1="32.3" y1="5.8" x2="34.9" y2="3.8" stroke="currentColor" stroke-width="1.3"/><line x1="33.6" y1="8.5" x2="37.2" y2="5.9" stroke="currentColor" stroke-width="1.3"/><line x1="35.0" y1="11.2" x2="39.4" y2="8.0" stroke="currentColor" stroke-width="1.3"/><line x1="36.4" y1="14.0" x2="41.6" y2="10.0" stroke="currentColor" stroke-width="1.3"/><line x1="37.8" y1="16.7" x2="43.8" y2="12.1" stroke="currentColor" stroke-width="1.3"/><text x="-18.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="48.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-32.5 -32.1 95 73\" width=\"95\" height=\"73\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"三元碳環。兩個不同的環碳各連接一個氯原子。一個氯在實心楔形鍵上，另一個在虛線楔形鍵上。\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.7,12.2 -7.9,16.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"30.9\" y1=\"3.1\" x2=\"32.7\" y2=\"1.7\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"32.3\" y1=\"5.8\" x2=\"34.9\" y2=\"3.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"33.6\" y1=\"8.5\" x2=\"37.2\" y2=\"5.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"35.0\" y1=\"11.2\" x2=\"39.4\" y2=\"8.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"36.4\" y1=\"14.0\" x2=\"41.6\" y2=\"10.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"37.8\" y1=\"16.7\" x2=\"43.8\" y2=\"12.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-18.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"48.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-34.0 -36.0 98 72" width="98" height="72" style="max-width:100%;height:auto" role="img" aria-label="Four-membered carbon ring. Two neighbouring ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="30.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="-30.0" x2="0.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="0.0" y1="-30.0" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.6,8.5 -8.5,13.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="31.0" y1="2.6" x2="32.6" y2="1.0" stroke="currentColor" stroke-width="1.3"/><line x1="32.5" y1="4.9" x2="34.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="34.0" y1="7.1" x2="37.1" y2="4.0" stroke="currentColor" stroke-width="1.3"/><line x1="35.4" y1="9.3" x2="39.3" y2="5.4" stroke="currentColor" stroke-width="1.3"/><line x1="36.9" y1="11.5" x2="41.5" y2="6.9" stroke="currentColor" stroke-width="1.3"/><line x1="38.3" y1="13.7" x2="43.7" y2="8.3" stroke="currentColor" stroke-width="1.3"/><text x="-19.5" y="24.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="49.5" y="24.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-34.0 -36.0 98 72\" width=\"98\" height=\"72\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"四元碳環。兩個相鄰的環碳各連接一個氯原子。一個氯在實心楔形鍵上，另一個在虛線楔形鍵上。\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"30.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"-30.0\" x2=\"0.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"0.0\" y1=\"-30.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.6,8.5 -8.5,13.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"31.0\" y1=\"2.6\" x2=\"32.6\" y2=\"1.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"32.5\" y1=\"4.9\" x2=\"34.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"7.1\" x2=\"37.1\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"35.4\" y1=\"9.3\" x2=\"39.3\" y2=\"5.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"36.9\" y1=\"11.5\" x2=\"41.5\" y2=\"6.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"38.3\" y1=\"13.7\" x2=\"43.7\" y2=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-19.5\" y=\"24.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"49.5\" y=\"24.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
      ],
      hints: [
        // EN: Check the ring size first. Cyclopropane has three carbon atoms.
        "先檢查環的大小。Cyclopropane 有三個碳原子。",
        // EN: <i>Trans</i> means the two chlorine atoms are on opposite faces of the ring: one in front, one behind.
        "<i>Trans</i> 表示兩個氯原子在環的相反兩面：一個在前，一個在後。",
      ],
      // EN: <p>1,2-dichlorocyclopropane has a three-membered ring with one Cl on each of two ring carbons. In the <i>trans</i> isomer one Cl is in front of the ring (solid wedge) and the other is behind it (hashed wedge).</p><p>The ring stops rotation about its carbon–carbon bonds, so the <i>cis</i> and <i>trans</i> forms are different molecules.</p>
      solution: "<p>1,2-dichlorocyclopropane 有一個三元環，其中兩個環碳各連接一個 Cl。在 <i>trans</i> 異構體中，一個 Cl 在環的前方（實心楔形鍵），另一個在環的後方（虛線楔形鍵）。</p><p>環令碳碳鍵不能旋轉，所以 <i>cis</i> 和 <i>trans</i> 兩種形式是不同的分子。</p>",
      misconception: {
        // EN (option A): Both chlorine atoms are on solid wedges, so both are in front of the ring, on the same face. This is the <i>cis</i> isomer.
        "0": "兩個氯原子都在實心楔形鍵上，所以都在環的前方，即同一面。這是 <i>cis</i> 異構體。",
        // EN (option B): Here both chlorine atoms are on the same carbon. This is 1,1-dichlorocyclopropane, a structural isomer that has no <i>cis–trans</i> isomers.
        "1": "這裏兩個氯原子在同一個碳上。這是 1,1-dichlorocyclopropane，是一個結構異構體，沒有 <i>cis–trans</i> 異構體。",
        // EN (option D): The chlorine atoms are <i>trans</i>, but count the ring carbons. This ring has four corners, so it is a cyclobutane.
        "3": "兩個氯原子是 <i>trans</i> 排列，但請數一數環上的碳。這個環有四個角，所以是 cyclobutane。",
      },
    },

    // ── s3-2h-q006 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q006": {
      // EN: <p>What is a chiral carbon atom?</p>
      stem: "<p>甚麼是手性碳原子 (chiral carbon atom)？</p>",
      options: [
        // EN: A carbon atom bonded to four different atoms or groups
        "連接四個不同原子或基團的碳原子",
        // EN: A carbon atom that is part of a C=C double bond
        "屬於 C=C 雙鍵一部分的碳原子",
        // EN: A carbon atom bonded to two different atoms or groups
        "連接兩個不同原子或基團的碳原子",
        // EN: A carbon atom that rotates plane-polarised light
        "能旋轉平面偏振光的碳原子",
      ],
      hints: [
        // EN: Think about how many bonds the carbon has and what is at the end of each one.
        "想想這個碳有多少個鍵，每個鍵的另一端是甚麼。",
      ],
      // EN: <p>A chiral carbon is bonded to <strong>four different atoms or groups</strong>, arranged tetrahedrally. A molecule with one chiral carbon cannot be superimposed on its mirror image, so it exists as two enantiomers.</p>
      solution: "<p>手性碳連接<strong>四個不同的原子或基團</strong>，呈四面體排列。有一個手性碳的分子不能與自己的鏡像重疊，所以有兩個對映異構體 (enantiomers)。</p>",
      misconception: {
        // EN (option B): A carbon in a C=C bond has only three atoms attached. It can be part of <i>cis–trans</i> isomerism, but it cannot be a chiral carbon.
        "1": "C=C 鍵上的碳只連接三個原子。它可以參與 <i>cis–trans</i> 異構，但不可能是手性碳。",
        // EN (option C): Two different groups are not enough. If any two of the four groups are the same, the molecule and its mirror image can be superimposed.
        "2": "兩個不同的基團並不足夠。四個基團中只要有任何兩個相同，分子和它的鏡像就可以重疊。",
        // EN (option D): This describes an effect, not the structure. Exam markschemes reject answers that only mention optical properties. State what is bonded to the carbon.
        "3": "這描述的是效應，不是結構。考試的評分準則不接受只提及旋光性質的答案。要寫出碳上連接了甚麼。",
      },
    },

    // ── s3-2h-q007 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q007": {
      // EN: <p>Which molecule contains a chiral carbon atom?</p>
      stem: "<p>以下哪一個分子含有手性碳原子？</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>
        "<span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>",
      ],
      hints: [
        // EN: A carbon in a <span class="chem">CH<sub>3</sub><span></span></span> or <span class="chem">CH<sub>2</sub><span></span></span> group can never be chiral. Look only at carbons with one H or no H.
        "<span class=\"chem\">CH<sub>3</sub><span></span></span> 或 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團中的碳永遠不可能是手性碳。只需看連接一個 H 或沒有 H 的碳。",
        // EN: Write down the four groups on that carbon. Are all four different?
        "寫下這個碳上的四個基團。四個是否全都不同？",
      ],
      // EN: <p>In butan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>, carbon 2 is bonded to four different groups: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>. It is a chiral carbon.</p>
      solution: "<p>在 butan-2-ol（丁-2-醇）<span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span> 中，第 2 個碳連接四個不同的基團：H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span> 和 <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>。它是手性碳。</p>",
      misconception: {
        // EN (option A): In propan-2-ol the middle carbon holds H, OH and two <span class="chem">CH<sub>3</sub><span></span></span> groups. Two of its four groups are the same.
        "0": "在 propan-2-ol 中，中間的碳連接 H、OH 和兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。四個基團中有兩個相同。",
        // EN (option B): In butan-1-ol every carbon atom holds at least two hydrogen atoms, so no carbon has four different groups.
        "1": "在 butan-1-ol 中，每個碳原子都連接最少兩個氫原子，所以沒有一個碳有四個不同的基團。",
        // EN (option D): In 2-methylpropan-2-ol the central carbon holds OH and three identical <span class="chem">CH<sub>3</sub><span></span></span> groups.
        "3": "在 2-methylpropan-2-ol 中，中心的碳連接 OH 和三個相同的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。",
      },
    },

    // ── s3-2h-q008 · numeric · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q008": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p><svg class="q-fig" viewBox="-6.0 -45.0 156 106" width="156" height="106" style="max-width:100%;height:auto" role="img" aria-label="Skeletal formula: a zig-zag chain of five carbon atoms. Carbons 2, 3 and 4 each carry an OH group. Carbon 5 is joined to an OH group at the end of the chain. Carbon 1 is a methyl group."><line x1="0.0" y1="15.0" x2="26.1" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="51.9" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="78.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="103.8" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="103.8" y1="15.0" x2="122.1" y2="4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="26.1" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="51.9" y2="36.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="78.0" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="123.9" y="5.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="20.1" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="45.9" y="50.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="72.0" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text></svg></p><p>How many chiral carbon atoms does one molecule contain?</p>
      stem: "<p>下圖是一個化合物的骨架式。</p><p><svg class=\"q-fig\" viewBox=\"-6.0 -45.0 156 106\" width=\"156\" height=\"106\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"骨架式：由五個碳原子組成的鋸齒形碳鏈。第 2、3、4 個碳各連接一個 OH 基。第 5 個碳在鏈端連接一個 OH 基。第 1 個碳是甲基。\"><line x1=\"0.0\" y1=\"15.0\" x2=\"26.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"51.9\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"78.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"103.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"103.8\" y1=\"15.0\" x2=\"122.1\" y2=\"4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"26.1\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"51.9\" y2=\"36.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"78.0\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"123.9\" y=\"5.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"20.1\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"45.9\" y=\"50.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"72.0\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text></svg></p><p>一個分子含有多少個手性碳原子？</p>",
      hints: [
        // EN: Number the five carbon atoms. Each corner and each line end is a carbon. Add the hydrogen atoms in your head.
        "把五個碳原子編號。每個轉角和每條線的末端都是一個碳。在腦中補上氫原子。",
        // EN: The two end carbons are <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>OH<span></span></span>. Can a carbon with two or three H atoms be chiral?
        "兩端的碳是 <span class=\"chem\">CH<sub>3</sub><span></span></span> 和 <span class=\"chem\">CH<sub>2</sub>OH<span></span></span>。連接兩個或三個 H 原子的碳可以是手性碳嗎？",
        // EN: For each of the three middle carbons, list the four groups: H, OH, the chain to the left, the chain to the right.
        "為中間三個碳逐一列出四個基團：H、OH、左邊的碳鏈、右邊的碳鏈。",
      ],
      // EN: <p>The molecule is <span class="chem">CH<sub>3</sub>CH(OH)CH(OH)CH(OH)CH<sub>2</sub>OH<span></span></span>.</p><ul><li>The <span class="chem">CH<sub>3</sub><span></span></span> carbon has three H atoms and the <span class="chem">CH<sub>2</sub>OH<span></span></span> carbon has two H atoms: not chiral.</li><li>Each of the three CH(OH) carbons holds H, OH and two <strong>different</strong> chains. For the middle one, the chain on one side is <span class="chem">CH(OH)CH<sub>3</sub><span></span></span> and on the other side <span class="chem">CH(OH)CH<sub>2</sub>OH<span></span></span>.</li></ul><p>So there are <strong>3</strong> chiral carbon atoms.</p>
      solution: "<p>這個分子是 <span class=\"chem\">CH<sub>3</sub>CH(OH)CH(OH)CH(OH)CH<sub>2</sub>OH<span></span></span>。</p><ul><li><span class=\"chem\">CH<sub>3</sub><span></span></span> 的碳有三個 H 原子，<span class=\"chem\">CH<sub>2</sub>OH<span></span></span> 的碳有兩個 H 原子：都不是手性碳。</li><li>三個 CH(OH) 碳各自連接 H、OH 和兩條<strong>不同</strong>的碳鏈。以中間的碳為例，一邊的鏈是 <span class=\"chem\">CH(OH)CH<sub>3</sub><span></span></span>，另一邊是 <span class=\"chem\">CH(OH)CH<sub>2</sub>OH<span></span></span>。</li></ul><p>所以有 <strong>3</strong> 個手性碳原子。</p>",
    },

    // ── s3-2h-q009 · numeric · challenge · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q009": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p><svg class="q-fig" viewBox="-6.0 -45.0 116 106" width="116" height="106" style="max-width:100%;height:auto" role="img" aria-label="Skeletal formula: a zig-zag chain of five carbon atoms. Carbon 2 and carbon 3 each carry an OH group. Carbon 4 carries a methyl branch, drawn as a plain line."><line x1="0.0" y1="15.0" x2="26.1" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="51.9" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="78.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="103.8" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="26.1" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="51.9" y2="36.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="78.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="20.1" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="45.9" y="50.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text></svg></p><p>How many chiral carbon atoms does one molecule contain?</p>
      stem: "<p>下圖是一個化合物的骨架式。</p><p><svg class=\"q-fig\" viewBox=\"-6.0 -45.0 116 106\" width=\"116\" height=\"106\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"骨架式：由五個碳原子組成的鋸齒形碳鏈。第 2 和第 3 個碳各連接一個 OH 基。第 4 個碳連接一個甲基支鏈，以一條直線表示。\"><line x1=\"0.0\" y1=\"15.0\" x2=\"26.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"51.9\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"78.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"103.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"26.1\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"51.9\" y2=\"36.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"78.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"20.1\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"45.9\" y=\"50.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text></svg></p><p>一個分子含有多少個手性碳原子？</p>",
      hints: [
        // EN: Each corner and each line end is a carbon atom. Add the hydrogen atoms in your head, then rule out every <span class="chem">CH<sub>3</sub><span></span></span> carbon.
        "每個轉角和每條線的末端都是一個碳原子。在腦中補上氫原子，然後排除所有 <span class=\"chem\">CH<sub>3</sub><span></span></span> 的碳。",
        // EN: Three carbons have one H atom each: carbon 2, carbon 3 and carbon 4. List the four groups on each.
        "有三個碳各連接一個 H 原子：第 2、第 3 和第 4 個碳。逐一列出每個碳上的四個基團。",
        // EN: Look closely at carbon 4. What are the two groups at the right-hand end?
        "仔細看第 4 個碳。右端的兩個基團是甚麼？",
      ],
      // EN: <p>The molecule is <span class="chem">CH<sub>3</sub>CH(OH)CH(OH)CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. Only carbons with one H atom need checking.</p><ul><li>Carbon 2: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and the rest of the chain. Four different groups. Chiral.</li><li>Carbon 3: H, OH, <span class="chem">CH(OH)CH<sub>3</sub><span></span></span> and <span class="chem">CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. Four different groups. Chiral.</li><li>Carbon 4: H, the rest of the chain and <strong>two identical</strong> <span class="chem">CH<sub>3</sub><span></span></span> groups. Not chiral.</li></ul><p>There are <strong>2</strong> chiral carbon atoms. A carbon with one H atom is not always chiral: you must compare all four groups.</p>
      solution: "<p>這個分子是 <span class=\"chem\">CH<sub>3</sub>CH(OH)CH(OH)CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>。只需檢查連接一個 H 原子的碳。</p><ul><li>第 2 個碳：H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span> 和碳鏈的其餘部分。四個不同的基團。是手性碳。</li><li>第 3 個碳：H、OH、<span class=\"chem\">CH(OH)CH<sub>3</sub><span></span></span> 和 <span class=\"chem\">CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>。四個不同的基團。是手性碳。</li><li>第 4 個碳：H、碳鏈的其餘部分和<strong>兩個相同</strong>的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。不是手性碳。</li></ul><p>有 <strong>2</strong> 個手性碳原子。連接一個 H 原子的碳不一定是手性碳：你必須比較全部四個基團。</p>",
    },

    // ── s3-2h-q010 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q010": {
      // EN: <p>Which molecule has <strong>no</strong> chiral carbon atom?</p>
      stem: "<p>以下哪一個分子<strong>沒有</strong>手性碳原子？</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH(OH)COOH<span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH(OH)COOH<span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: Find the carbon with only one H in each molecule and list its four groups.
        "在每個分子中找出只連接一個 H 的碳，列出它的四個基團。",
        // EN: Compare the two carbon chains on each side of that carbon. Are they the same length?
        "比較這個碳兩邊的兩條碳鏈。它們的長度相同嗎？",
      ],
      // EN: <p>In 3-chloropentane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>, carbon 3 holds H, Cl and <strong>two identical ethyl groups</strong>. It does not have four different groups, so the molecule has no chiral carbon. Each of the other three molecules has one carbon with four different groups.</p>
      solution: "<p>在 3-chloropentane（3-氯戊烷）<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span> 中，第 3 個碳連接 H、Cl 和<strong>兩個相同的乙基</strong>。它沒有四個不同的基團，所以這個分子沒有手性碳。其餘三個分子各有一個連接四個不同基團的碳。</p>",
      misconception: {
        // EN (option A): In 2-chlorobutane carbon 2 holds H, Cl, <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>. These are four different groups, so it is chiral.
        "0": "在 2-chlorobutane 中，第 2 個碳連接 H、Cl、<span class=\"chem\">CH<sub>3</sub><span></span></span> 和 <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>。這是四個不同的基團，所以它是手性碳。",
        // EN (option B): In 2-hydroxypropanoic acid carbon 2 holds H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and COOH. These are four different groups, so it is chiral.
        "1": "在 2-hydroxypropanoic acid 中，第 2 個碳連接 H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span> 和 COOH。這是四個不同的基團，所以它是手性碳。",
        // EN (option D): In 3-methylhexane carbon 3 holds H, <span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>. An ethyl group and a propyl group are different, so it is chiral.
        "3": "在 3-methylhexane 中，第 3 個碳連接 H、<span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> 和 <span class=\"chem\">CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>。乙基和丙基並不相同，所以它是手性碳。",
      },
    },

    // ── s3-2h-q011 · multi · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q011": {
      // EN: <p>Butan-2-ol exists as a pair of enantiomers. Which statements about the two enantiomers are correct? Select <strong>all</strong> that apply.</p>
      stem: "<p>Butan-2-ol 有一對對映異構體 (enantiomers)。以下哪些關於這兩個對映異構體的陳述正確？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: They have the same boiling point.
        "它們的沸點相同。",
        // EN: Under the same conditions, they rotate plane-polarised light by the same angle in opposite directions.
        "在相同條件下，它們把平面偏振光旋轉相同的角度，但方向相反。",
        // EN: Their atoms are bonded together in a different order.
        "它們的原子以不同的次序連接。",
        // EN: They can behave differently with another chiral molecule, such as an enzyme.
        "它們與另一個手性分子（例如酶）作用時，表現可以不同。",
        // EN: They are mirror images that can be superimposed on each other.
        "它們是可以互相重疊的鏡像。",
      ],
      hints: [
        // EN: Enantiomers are stereoisomers. What stays the same in all stereoisomers?
        "對映異構體是立體異構體。所有立體異構體之間，甚麼是相同的？",
        // EN: Physical properties such as boiling point are the same. Two things are different: the effect on plane-polarised light, and behaviour in a chiral environment.
        "沸點等物理性質相同。有兩點不同：對平面偏振光的影響，以及在手性環境中的表現。",
      ],
      // EN: <p>Enantiomers are non-superimposable mirror images with the same connectivity.</p><ul><li>They have identical physical properties such as boiling point, melting point and density.</li><li>They are optically active: each rotates the plane of plane-polarised light by the same angle, but in opposite directions.</li><li>They behave in the same way with non-chiral reagents, but can behave differently in a chiral environment, such as the active site of an enzyme.</li></ul>
      solution: "<p>對映異構體是不可重疊 (non-superimposable) 的鏡像，原子的連接方式相同。</p><ul><li>它們的物理性質完全相同，例如沸點、熔點和密度。</li><li>它們有旋光性 (optically active)：各自把平面偏振光的偏振面旋轉相同的角度，但方向相反。</li><li>它們與非手性試劑的反應相同，但在手性環境（例如酶的活性部位）中表現可以不同。</li></ul>",
      misconception: {
        // EN (option C): A different bonding order (connectivity) would make them structural isomers. Enantiomers have the same connectivity and differ only in their arrangement in space.
        "2": "原子連接次序（連接方式）不同的是結構異構體。對映異構體的連接方式相同，只是空間排列不同。",
        // EN (option E): Mirror images that can be superimposed are the same molecule. Enantiomers are <strong>non-superimposable</strong> mirror images.
        "4": "可以重疊的鏡像是同一個分子。對映異構體是<strong>不可重疊</strong>的鏡像。",
      },
    },

    // ── s3-2h-q012 · short · exam · AHL · Structure 3.2.7 · 2 marks
    "s3-2h-q012": {
      // EN: <p>State what is meant by a <strong>racemic mixture</strong>, and explain why a racemic mixture is not optically active.</p>
      stem: "<p>寫出 (state) <strong>外消旋混合物</strong> (racemic mixture) 的意思，並解釋 (explain) 為甚麼外消旋混合物沒有旋光性。</p>",
      hints: [
        // EN: How much of each enantiomer does the mixture contain?
        "混合物中每種對映異構體各佔多少？",
        // EN: What does each enantiomer do to plane-polarised light, and what is the total effect?
        "每種對映異構體對平面偏振光有甚麼作用？總效果是甚麼？",
      ],
      // EN: <p>Use the words "equal amounts" and "enantiomers" for the first mark. For the second mark say that the rotations are equal and opposite, so they cancel. "It contains both forms" is too vague to score.</p>
      solution: "<p>第一分要用上「equal amounts」（等量）和「enantiomers」（對映異構體）這兩個詞。第二分要說明兩個旋轉大小相等、方向相反，所以互相抵消。「它含有兩種形式」太含糊，不能得分。</p>",
      // EN: <p>A racemic mixture contains equal amounts of the two enantiomers of a chiral compound. One enantiomer rotates the plane of plane-polarised light clockwise and the other rotates it anticlockwise by the same angle, so the two rotations cancel and there is no overall rotation.</p>
      answer: "<p>外消旋混合物含有等量的一種手性化合物的兩個對映異構體。一個對映異構體把平面偏振光的偏振面順時針旋轉，另一個把它逆時針旋轉相同的角度，所以兩個旋轉互相抵消，沒有淨旋轉。</p>",
      markscheme: [
        // EN: A mixture containing equal amounts (equimolar / 50:50) of the two enantiomers.
        "含有等量（等摩爾／50:50）的兩個對映異構體的混合物。",
        // EN: The two enantiomers rotate (the plane of) plane-polarised light by equal amounts in opposite directions, so the rotations cancel / no net rotation.
        "兩個對映異構體把平面偏振光（的偏振面）旋轉相同的大小，但方向相反，所以旋轉互相抵消／沒有淨旋轉。",
      ],
    },

    // ── s3-2h-q013 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q013": {
      // EN: <p>A polarimeter measures the angle through which a sample rotates the plane of plane-polarised light.</p><p>A solution of one enantiomer of a compound rotates the light by 13° clockwise. Two more solutions are tested in the same polarimeter tube, with the same total concentration.</p><p>What rotation is expected for each one?</p>
      stem: "<p>旋光計 (polarimeter) 量度樣本把平面偏振光的偏振面旋轉了多少角度。</p><p>一個化合物的其中一個對映異構體的溶液把光順時針旋轉 13°。另外兩個溶液放在同一支旋光計管中測試，總濃度相同。</p><p>預計每個溶液的旋轉是多少？</p>",
      options: [
        // EN: Other enantiomer: 13° anticlockwise. Racemic mixture: 0°.
        "另一個對映異構體：逆時針 13°。外消旋混合物：0°。",
        // EN: Other enantiomer: 13° clockwise. Racemic mixture: 0°.
        "另一個對映異構體：順時針 13°。外消旋混合物：0°。",
        // EN: Other enantiomer: 13° anticlockwise. Racemic mixture: 26° clockwise.
        "另一個對映異構體：逆時針 13°。外消旋混合物：順時針 26°。",
        // EN: Other enantiomer: 0°. Racemic mixture: 13° anticlockwise.
        "另一個對映異構體：0°。外消旋混合物：逆時針 13°。",
      ],
      hints: [
        // EN: Two enantiomers rotate plane-polarised light by the same angle. What about the direction?
        "兩個對映異構體把平面偏振光旋轉相同的角度。方向又如何？",
        // EN: A racemic mixture has equal amounts of both enantiomers. Add a clockwise and an equal anticlockwise rotation.
        "外消旋混合物含有等量的兩個對映異構體。把一個順時針旋轉和一個大小相等的逆時針旋轉加起來。",
      ],
      // EN: <p>The other enantiomer rotates the light by the same angle in the opposite direction: 13° anticlockwise.</p><p>A racemic mixture contains equal amounts of both enantiomers. The clockwise and anticlockwise rotations cancel, so the reading is 0°. The mixture is optically inactive.</p>
      solution: "<p>另一個對映異構體把光旋轉相同的角度，但方向相反：逆時針 13°。</p><p>外消旋混合物含有等量的兩個對映異構體。順時針和逆時針的旋轉互相抵消，所以讀數是 0°。這個混合物沒有旋光性。</p>",
      misconception: {
        // EN (option B): If both enantiomers rotated the light in the same direction, a polarimeter could not tell them apart. They rotate it in opposite directions.
        "1": "如果兩個對映異構體把光向同一方向旋轉，旋光計就不能分辨它們。它們旋轉的方向相反。",
        // EN (option C): The rotations of the two enantiomers do not add up in a racemic mixture. They are opposite, so they cancel.
        "2": "在外消旋混合物中，兩個對映異構體的旋轉不會相加。它們方向相反，所以互相抵消。",
        // EN (option D): Both enantiomers are optically active. It is the 50:50 mixture that shows no rotation.
        "3": "兩個對映異構體都有旋光性。沒有旋轉的是 50:50 的混合物。",
      },
    },

    // ── s3-2h-q014 · mcq · challenge · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q014": {
      // EN: <p>X is one enantiomer of bromochlorofluoromethane, CHBrClF. Plain lines are bonds in the plane of the screen. A solid wedge comes towards you. A hashed wedge goes away from you.</p><p><strong>X</strong></p><p><svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Cl on a solid wedge to the lower right, Br on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text></svg></p><p>Which drawing shows the <strong>other</strong> enantiomer, the mirror image of X?</p>
      stem: "<p>X 是 bromochlorofluoromethane（CHBrClF）的其中一個對映異構體。直線表示在屏幕平面內的鍵。實心楔形鍵朝向你。虛線楔形鍵遠離你。</p><p><strong>X</strong></p><p><svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：F 在平面內向上，H 在平面內向左下，Cl 在向右下的實心楔形鍵上，Br 在向右的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text></svg></p><p>哪一個圖顯示<strong>另一個</strong>對映異構體，即 X 的鏡像？</p>",
      options: [
        // EN: <svg class="q-fig" viewBox="-44.6 -46.5 92 94" width="92" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: H up in the plane, Cl to the lower left in the plane, F on a solid wedge to the lower right, Br on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-21.6" y="20.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="12.6" y="35.6" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-44.6 -46.5 92 94\" width=\"92\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：H 在平面內向上，Cl 在平面內向左下，F 在向右下的實心楔形鍵上，Br 在向右的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-21.6\" y=\"20.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"12.6\" y=\"35.6\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-47.0 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower right in the plane, Br on a solid wedge to the lower left, Cl on a hashed wedge to the left"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7.9" y1="4.3" x2="19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="-3.4,8.3 -12.5,20.9 -5.8,23.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-11.1" y1="2.1" x2="-10.4" y2="4.3" stroke="currentColor" stroke-width="1.3"/><line x1="-13.4" y1="2.3" x2="-12.4" y2="5.5" stroke="currentColor" stroke-width="1.3"/><line x1="-15.6" y1="2.4" x2="-14.4" y2="6.6" stroke="currentColor" stroke-width="1.3"/><line x1="-17.9" y1="2.5" x2="-16.3" y2="7.8" stroke="currentColor" stroke-width="1.3"/><line x1="-20.2" y1="2.6" x2="-18.3" y2="8.9" stroke="currentColor" stroke-width="1.3"/><line x1="-22.5" y1="2.8" x2="-20.3" y2="10.1" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-6.6" y="35.6" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="-24.0" y="14.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-47.0 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：F 在平面內向上，H 在平面內向右下，Br 在向左下的實心楔形鍵上，Cl 在向左的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"7.9\" y1=\"4.3\" x2=\"19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"-3.4,8.3 -12.5,20.9 -5.8,23.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-11.1\" y1=\"2.1\" x2=\"-10.4\" y2=\"4.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-13.4\" y1=\"2.3\" x2=\"-12.4\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-15.6\" y1=\"2.4\" x2=\"-14.4\" y2=\"6.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-17.9\" y1=\"2.5\" x2=\"-16.3\" y2=\"7.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-20.2\" y1=\"2.6\" x2=\"-18.3\" y2=\"8.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-22.5\" y1=\"2.8\" x2=\"-20.3\" y2=\"10.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-6.6\" y=\"35.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"-24.0\" y=\"14.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：F 在平面內向上，H 在平面內向左下，Br 在向右下的實心楔形鍵上，Cl 在向右的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: H up in the plane, F to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：H 在平面內向上，F 在平面內向左下，Br 在向右下的實心楔形鍵上，Cl 在向右的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
      ],
      hints: [
        // EN: A useful rule: swapping any <strong>two</strong> groups on a chiral carbon gives the other enantiomer.
        "一個有用的規則：對調手性碳上任何<strong>兩個</strong>基團，就得到另一個對映異構體。",
        // EN: Swapping twice brings you back to the same molecule. Rotating the whole molecule never changes it.
        "對調兩次會變回同一個分子。旋轉整個分子永遠不會改變它。",
        // EN: For each drawing, count how many swaps turn X into it.
        "數一數要對調多少次，才能把 X 變成每一個圖。",
      ],
      // EN: <p>Compare each drawing with X (F up, H lower left, Cl on the wedge, Br on the hashed bond).</p><ul><li>The correct drawing keeps F and H in place and swaps Cl and Br. One swap of two groups gives the mirror image, so this is the other enantiomer.</li><li>Moving three groups round one place (F → H → Cl → F) is a rotation about the C–Br bond: same molecule.</li><li>The drawing with the wedges on the left is X turned half a turn about the C–F bond: same molecule.</li><li>Two swaps (F with H, and Cl with Br) bring back the same molecule.</li></ul><p>Building a model, real or on screen, is the surest way to check: the two enantiomers cannot be superimposed.</p>
      solution: "<p>把每個圖與 X 比較（F 向上，H 在左下，Cl 在實心楔形鍵上，Br 在虛線楔形鍵上）。</p><ul><li>正確的圖保持 F 和 H 的位置不變，對調了 Cl 和 Br。對調兩個基團一次就得到鏡像，所以這是另一個對映異構體。</li><li>把三個基團輪換一個位置（F → H → Cl → F），等於繞 C–Br 鍵旋轉：同一個分子。</li><li>楔形鍵在左邊的圖，是 X 繞 C–F 鍵轉了半圈：同一個分子。</li><li>對調兩次（F 與 H，以及 Cl 與 Br）會變回同一個分子。</li></ul><p>砌一個模型（實物或屏幕上的都可以）是最可靠的檢查方法：兩個對映異構體不能重疊。</p>",
      misconception: {
        // EN (option A): Br has not moved, and F, H and Cl have each moved one place round. This is X rotated about the C–Br bond, so it is the same molecule.
        "0": "Br 沒有移動，F、H 和 Cl 各輪換了一個位置。這是 X 繞 C–Br 鍵旋轉的結果，所以是同一個分子。",
        // EN (option B): This is X turned half a turn about the vertical C–F bond. The H swings to the right, Cl goes to the back and Br comes to the front. It is still X.
        "1": "這是 X 繞垂直的 C–F 鍵轉了半圈。H 擺到右邊，Cl 轉到後方，Br 轉到前方。它仍然是 X。",
        // EN (option D): Compared with X, two pairs of groups have been swapped (F with H, and Cl with Br). One swap gives the mirror image. A second swap brings back the original.
        "3": "與 X 比較，有兩對基團對調了（F 與 H，以及 Cl 與 Br）。對調一次得到鏡像。再對調一次就變回原來的分子。",
      },
    },

    // ── s3-2h-q015 · short · challenge · AHL · Structure 3.2.7 · 3 marks
    "s3-2h-q015": {
      // EN: <p>2-hydroxypropanoic acid (lactic acid), <span class="chem">CH<sub>3</sub>CH(OH)COOH<span></span></span>, exists as two enantiomers.</p><p>On paper, identify the chiral carbon atom and draw stereochemical formulas of the two enantiomers. Then compare your drawing with the model answer.</p>
      stem: "<p>2-hydroxypropanoic acid（乳酸，lactic acid）<span class=\"chem\">CH<sub>3</sub>CH(OH)COOH<span></span></span> 有兩個對映異構體。</p><p>在紙上辨認 (identify) 手性碳原子，並繪畫 (draw) 兩個對映異構體的立體化學式 (stereochemical formulas)。然後把你的圖與參考答案比較。</p>",
      hints: [
        // EN: Find the carbon with four different groups.
        "找出連接四個不同基團的碳。",
        // EN: Draw that carbon in the centre. Use two plain lines, one solid wedge and one hashed wedge for its four bonds.
        "把這個碳畫在中央。它的四個鍵用兩條直線、一個實心楔形鍵和一個虛線楔形鍵來畫。",
        // EN: For the second enantiomer, draw the reflection of the first in an imaginary mirror placed beside it.
        "畫第二個對映異構體時，想像旁邊放了一面鏡子，畫出第一個的倒影。",
      ],
      // EN: <p>Markschemes give one mark for each correct enantiomer. Flat drawings with 90° angles do not score: the tetrahedral arrangement must be shown with tapered (wedge and hashed) bonds. If you redraw the same molecule in a different orientation instead of its mirror image, you score only one of the two drawing marks.</p>
      solution: "<p>評分準則為每個正確的對映異構體各給一分。用 90° 角畫成的平面圖不得分：必須用楔形鍵（實心楔形和虛線楔形）顯示四面體排列。如果你只是把同一個分子換一個方向重畫，而不是畫出它的鏡像，兩分繪圖分中只能得一分。</p>",
      // EN: <p>The chiral carbon is carbon 2. It is bonded to four different groups: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and COOH.</p><p>The two enantiomers, drawn as mirror images:</p><p><svg class="q-fig" viewBox="-53.6 -46.5 95 94" width="95" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: COOH up in the plane, CH3 to the lower left in the plane, OH on a solid wedge to the lower right, H on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">COOH</tspan></text><text x="-21.6" y="20.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">H</tspan><tspan dy="4" font-size="10">3</tspan><tspan dy="-4">C</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="30.0" y="14.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg> &nbsp; <svg class="q-fig" viewBox="-41.0 -46.5 95 94" width="95" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: COOH up in the plane, CH3 to the lower right in the plane, OH on a solid wedge to the lower left, H on a hashed wedge to the left"><line x1="0.0" y1="-9.0" x2="0.0" y2="-19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7.9" y1="4.3" x2="19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="-3.4,8.3 -12.5,20.9 -5.8,23.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-11.1" y1="2.1" x2="-10.4" y2="4.3" stroke="currentColor" stroke-width="1.3"/><line x1="-13.4" y1="2.3" x2="-12.4" y2="5.5" stroke="currentColor" stroke-width="1.3"/><line x1="-15.6" y1="2.4" x2="-14.4" y2="6.6" stroke="currentColor" stroke-width="1.3"/><line x1="-17.9" y1="2.5" x2="-16.3" y2="7.8" stroke="currentColor" stroke-width="1.3"/><line x1="-20.2" y1="2.6" x2="-18.3" y2="8.9" stroke="currentColor" stroke-width="1.3"/><line x1="-22.5" y1="2.8" x2="-20.3" y2="10.1" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">COOH</tspan></text><text x="21.6" y="20.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">CH</tspan><tspan dy="4" font-size="10">3</tspan></text><text x="-6.6" y="35.6" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">HO</tspan></text><text x="-30.0" y="14.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg></p><p>Any orientation is accepted if the four groups are arranged tetrahedrally and the second drawing is the mirror image of the first.</p>
      answer: "<p>手性碳是第 2 個碳。它連接四個不同的基團：H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span> 和 COOH。</p><p>兩個對映異構體，畫成互為鏡像：</p><p><svg class=\"q-fig\" viewBox=\"-53.6 -46.5 95 94\" width=\"95\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：COOH 在平面內向上，CH3 在平面內向左下，OH 在向右下的實心楔形鍵上，H 在向右的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">COOH</tspan></text><text x=\"-21.6\" y=\"20.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan><tspan dy=\"4\" font-size=\"10\">3</tspan><tspan dy=\"-4\">C</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"30.0\" y=\"14.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg> &nbsp; <svg class=\"q-fig\" viewBox=\"-41.0 -46.5 95 94\" width=\"95\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"有四個鍵的碳原子：COOH 在平面內向上，CH3 在平面內向右下，OH 在向左下的實心楔形鍵上，H 在向左的虛線楔形鍵上\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"7.9\" y1=\"4.3\" x2=\"19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"-3.4,8.3 -12.5,20.9 -5.8,23.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-11.1\" y1=\"2.1\" x2=\"-10.4\" y2=\"4.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-13.4\" y1=\"2.3\" x2=\"-12.4\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-15.6\" y1=\"2.4\" x2=\"-14.4\" y2=\"6.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-17.9\" y1=\"2.5\" x2=\"-16.3\" y2=\"7.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-20.2\" y1=\"2.6\" x2=\"-18.3\" y2=\"8.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-22.5\" y1=\"2.8\" x2=\"-20.3\" y2=\"10.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">COOH</tspan></text><text x=\"21.6\" y=\"20.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">CH</tspan><tspan dy=\"4\" font-size=\"10\">3</tspan></text><text x=\"-6.6\" y=\"35.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">HO</tspan></text><text x=\"-30.0\" y=\"14.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg></p><p>只要四個基團呈四面體排列，而第二個圖是第一個圖的鏡像，任何方向的畫法都接受。</p>",
      markscheme: [
        // EN: Chiral carbon identified: carbon 2 / the carbon bonded to H, OH, CH₃ and COOH (circled or starred on the drawing is fine).
        "辨認出手性碳：第 2 個碳／連接 H、OH、CH₃ 和 COOH 的碳（在圖上圈出或加星號亦可）。",
        // EN: One enantiomer drawn in 3D: two bonds in the plane, one solid wedge, one hashed (dashed) wedge, with H, OH, CH₃ and COOH on the central carbon.
        "以 3D（立體）方式畫出一個對映異構體：兩個鍵在平面內，一個實心楔形鍵，一個虛線楔形鍵，中心碳上有 H、OH、CH₃ 和 COOH。",
        // EN: The second structure drawn as the mirror image of the first (or with any two groups exchanged), also in 3D.
        "第二個結構畫成第一個的鏡像（或對調任何兩個基團），同樣以 3D 方式畫出。",
      ],
    },

    // ── s3-2h-q016 · numeric · foundation · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q016": {
      // EN: <p>The sketch shows the main peaks in the mass spectrum of a compound that contains C, H and O.</p><p><svg class="q-fig" viewBox="0 0 300 178" width="300" height="178" style="max-width:100%;height:auto" role="img" aria-label="Mass spectrum sketch with three peaks: m/z 15 with relative abundance 12, m/z 43 with relative abundance 100, and m/z 58 with relative abundance 25."><path d="M34 18V144H290" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="34" y1="144" x2="34" y2="149" stroke="currentColor" stroke-width="1"/><text x="34" y="161" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="70.57142857142857" y1="144" x2="70.57142857142857" y2="147" stroke="currentColor" stroke-width="1"/><line x1="107.14285714285714" y1="144" x2="107.14285714285714" y2="149" stroke="currentColor" stroke-width="1"/><text x="107.14285714285714" y="161" text-anchor="middle" font-size="11" fill="currentColor">20</text><line x1="143.71428571428572" y1="144" x2="143.71428571428572" y2="147" stroke="currentColor" stroke-width="1"/><line x1="180.28571428571428" y1="144" x2="180.28571428571428" y2="149" stroke="currentColor" stroke-width="1"/><text x="180.28571428571428" y="161" text-anchor="middle" font-size="11" fill="currentColor">40</text><line x1="216.85714285714286" y1="144" x2="216.85714285714286" y2="147" stroke="currentColor" stroke-width="1"/><line x1="253.42857142857142" y1="144" x2="253.42857142857142" y2="149" stroke="currentColor" stroke-width="1"/><text x="253.42857142857142" y="161" text-anchor="middle" font-size="11" fill="currentColor">60</text><line x1="290" y1="144" x2="290" y2="147" stroke="currentColor" stroke-width="1"/><line x1="30" y1="144" x2="34" y2="144" stroke="currentColor" stroke-width="1"/><text x="27" y="148" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="30" y1="81" x2="34" y2="81" stroke="currentColor" stroke-width="1"/><text x="27" y="85" text-anchor="end" font-size="11" fill="currentColor">50</text><line x1="30" y1="18" x2="34" y2="18" stroke="currentColor" stroke-width="1"/><text x="27" y="22" text-anchor="end" font-size="11" fill="currentColor">100</text><text x="162" y="175" text-anchor="middle" font-size="11" fill="currentColor">m/z</text><text x="40" y="11" font-size="11" fill="currentColor">relative abundance / %</text><line x1="88.9" y1="144" x2="88.9" y2="128.9" stroke="currentColor" stroke-width="2.4"/><text x="88.9" y="124.9" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">15</text><line x1="191.3" y1="144" x2="191.3" y2="18.0" stroke="currentColor" stroke-width="2.4"/><text x="191.3" y="14.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">43</text><line x1="246.1" y1="144" x2="246.1" y2="112.5" stroke="currentColor" stroke-width="2.4"/><text x="246.1" y="108.5" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">58</text></svg></p><p>The peak with the highest m/z value is the molecular ion. What is the relative molecular mass, M<sub>r</sub>, of the compound?</p>
      stem: "<p>略圖顯示一個含 C、H 和 O 的化合物的質譜中主要的峰。</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 178\" width=\"300\" height=\"178\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"質譜略圖，有三個峰：m/z 15，相對豐度 12；m/z 43，相對豐度 100；m/z 58，相對豐度 25。\"><path d=\"M34 18V144H290\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"34\" y1=\"144\" x2=\"34\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"34\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"70.57142857142857\" y1=\"144\" x2=\"70.57142857142857\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"107.14285714285714\" y1=\"144\" x2=\"107.14285714285714\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"107.14285714285714\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">20</text><line x1=\"143.71428571428572\" y1=\"144\" x2=\"143.71428571428572\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"180.28571428571428\" y1=\"144\" x2=\"180.28571428571428\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.28571428571428\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">40</text><line x1=\"216.85714285714286\" y1=\"144\" x2=\"216.85714285714286\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"253.42857142857142\" y1=\"144\" x2=\"253.42857142857142\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"253.42857142857142\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">60</text><line x1=\"290\" y1=\"144\" x2=\"290\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"30\" y1=\"144\" x2=\"34\" y2=\"144\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"148\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"30\" y1=\"81\" x2=\"34\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"85\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">50</text><line x1=\"30\" y1=\"18\" x2=\"34\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"22\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">100</text><text x=\"162\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">m/z</text><text x=\"40\" y=\"11\" font-size=\"11\" fill=\"currentColor\">相對豐度 / %</text><line x1=\"88.9\" y1=\"144\" x2=\"88.9\" y2=\"128.9\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"88.9\" y=\"124.9\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">15</text><line x1=\"191.3\" y1=\"144\" x2=\"191.3\" y2=\"18.0\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"191.3\" y=\"14.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">43</text><line x1=\"246.1\" y1=\"144\" x2=\"246.1\" y2=\"112.5\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"246.1\" y=\"108.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">58</text></svg></p><p>m/z 值最高的峰是分子離子 (molecular ion)。這個化合物的相對分子質量 M<sub>r</sub> 是多少？</p>",
      hints: [
        // EN: The molecular ion is the whole molecule with one electron removed. Its mass is the mass of the molecule.
        "分子離子是失去了一個電子的整個分子。它的質量就是分子的質量。",
        // EN: Do not choose the tallest peak. Choose the molecular ion peak, which is the one furthest to the right here.
        "不要選最高的峰。要選分子離子峰，在這裏是最右邊的那一個。",
      ],
      // EN: <p>The molecular ion, M<sup>+</sup>, is the whole molecule after it has lost one electron. Its m/z value equals the relative molecular mass.</p><p>The molecular ion peak is at m/z 58, so M<sub>r</sub> = <strong>58</strong>.</p><p>The tallest peak (m/z 43) is a fragment. It is formed when the molecular ion breaks apart. (These are the main peaks of propanone.)</p>
      solution: "<p>分子離子 M<sup>+</sup> 是整個分子失去一個電子後形成的離子。它的 m/z 值等於相對分子質量。</p><p>分子離子峰在 m/z 58，所以 M<sub>r</sub> = <strong>58</strong>。</p><p>最高的峰（m/z 43）是一個碎片 (fragment)。它在分子離子碎裂時形成。（這些是 propanone（丙酮）的主要的峰。）</p>",
    },

    // ── s3-2h-q017 · mcq · foundation · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q017": {
      // EN: <p>The mass spectrum of propanone has a peak at m/z 15. Which species causes this peak?</p>
      stem: "<p>Propanone 的質譜在 m/z 15 有一個峰。哪一個物種造成這個峰？</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub><sup>+</sup><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub><sup>+</sup><span></span></span>",
        // EN: •<span class="chem">CH<sub>3</sub><span></span></span>
        "•<span class=\"chem\">CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub><sup>−</sup><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub><sup>−</sup><span></span></span>",
        // EN: <span class="chem">OH<sup>+</sup><span></span></span>
        "<span class=\"chem\">OH<sup>+</sup><span></span></span>",
      ],
      hints: [
        // EN: Which group of atoms has a mass of 15?
        "哪一組原子的質量是 15？",
        // EN: What kind of particle does a mass spectrometer detect: neutral, positive or negative?
        "質譜儀檢測的是哪一種粒子：中性、帶正電還是帶負電？",
      ],
      // EN: <p>A methyl group has mass 12 + 3 × 1 = 15. The detector only records positive ions, so the peak at m/z 15 is caused by <span class="chem">CH<sub>3</sub><sup>+</sup><span></span></span>.</p><p>Always write the + charge on a fragment that gives a peak.</p>
      solution: "<p>甲基的質量是 12 + 3 × 1 = 15。檢測器只記錄正離子，所以 m/z 15 的峰是由 <span class=\"chem\">CH<sub>3</sub><sup>+</sup><span></span></span> 造成的。</p><p>造成峰的碎片，一定要寫上 + 電荷。</p>",
      misconception: {
        // EN (option B): The formula is right but the charge is missing. A neutral radical is not deflected or detected. Only positive ions give peaks, and markschemes give no mark for a fragment written without its + charge.
        "1": "化學式正確，但漏了電荷。中性的自由基不會被偏轉，也不會被檢測到。只有正離子才會產生峰。碎片沒有寫 + 電荷，評分準則不給分。",
        // EN (option C): A mass spectrometer produces and detects positive ions, formed when electrons are knocked out of molecules.
        "2": "質譜儀產生和檢測的是正離子。分子被撞走電子後就形成正離子。",
        // EN (option D): Check the mass: O + H = 16 + 1 = 17, not 15.
        "3": "檢查質量：O + H = 16 + 1 = 17，不是 15。",
      },
    },

    // ── s3-2h-q018 · numeric · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q018": {
      // EN: <p>Propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>, has a molecular ion peak at m/z 74.</p><p>Some molecular ions break up by losing a •COOH fragment. At what m/z value does the ion that is formed appear?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Propanoic acid <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span> 的分子離子峰在 m/z 74。</p><p>部分分子離子會失去一個 •COOH 碎片而碎裂。所形成的離子在哪一個 m/z 值出現？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 22 節）：質譜中失去的碎片</caption><thead><tr><th scope=\"col\">失去的質量</th><th scope=\"col\">可能失去的中性碎片</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 或 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 或 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
      hints: [
        // EN: Find the mass of •COOH in the table.
        "在表中找出 •COOH 的質量。",
        // EN: The table gives the mass that is <strong>lost</strong>. The peak is at the mass that is <strong>left</strong>.
        "表中給出的是<strong>失去</strong>的質量。峰出現在<strong>剩下</strong>的質量。",
      ],
      // EN: <p>The neutral fragment •COOH has a mass of 45. It is not detected.</p><div class="worked__math">m/z of ion left = 74 − 45 = <b>29</b></div><p>The ion is <span class="chem">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span> (2 × 12 + 5 × 1 = 29). The real spectrum of propanoic acid has a strong peak at m/z 29.</p>
      solution: "<p>中性碎片 •COOH 的質量是 45。它不會被檢測到。</p><div class=\"worked__math\">剩下離子的 m/z = 74 − 45 = <b>29</b></div><p>這個離子是 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span>（2 × 12 + 5 × 1 = 29）。Propanoic acid（丙酸）的真實質譜在 m/z 29 有一個強峰。</p>",
    },

    // ── s3-2h-q019 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q019": {
      // EN: <p>The mass spectrum of butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>, has its molecular ion peak at m/z 72 and its tallest peak at m/z 43.</p><p>Which ion causes the peak at m/z 43?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Butanone <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> 的質譜中，分子離子峰在 m/z 72，最高的峰在 m/z 43。</p><p>哪一個離子造成 m/z 43 的峰？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 22 節）：質譜中失去的碎片</caption><thead><tr><th scope=\"col\">失去的質量</th><th scope=\"col\">可能失去的中性碎片</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 或 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 或 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CO<span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CO<span></span></span>",
      ],
      hints: [
        // EN: Work out the mass lost: 72 − 43.
        "算出失去的質量：72 − 43。",
        // EN: Which neutral fragment in the table has that mass and is present in butanone? What is left behind?
        "表中哪一個中性碎片有這個質量，而且存在於 butanone 中？剩下的是甚麼？",
      ],
      // EN: <div class="worked__math">mass lost = 72 − 43 = 29</div><p>A loss of 29 is •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> (or •CHO, but butanone has no CHO group). Butanone has an ethyl group next to the C=O group, so the C–C bond there breaks:</p><div class="worked__math">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub></div><p>The ion left is <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>, mass 15 + 12 + 16 = 43.</p>
      solution: "<div class=\"worked__math\">失去的質量 = 72 − 43 = 29</div><p>失去 29 即失去 •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>（或 •CHO，但 butanone（丁酮）沒有 CHO 基團）。Butanone 的 C=O 基團旁邊有一個乙基，所以那裏的 C–C 鍵斷裂：</p><div class=\"worked__math\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub></div><p>剩下的離子是 <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>，質量是 15 + 12 + 16 = 43。</p>",
      misconception: {
        // EN (option A): This ion has a mass of 57. It forms when the molecular ion loses •<span class="chem">CH<sub>3</sub><span></span></span> (72 − 15 = 57).
        "0": "這個離子的質量是 57。它是分子離子失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span> 後形成的（72 − 15 = 57）。",
        // EN (option C): This ion has a mass of 29. Here 29 is the mass that is lost, not the mass that is detected.
        "2": "這個離子的質量是 29。這裏 29 是失去的質量，不是檢測到的質量。",
        // EN (option D): The atoms are right, but a neutral fragment gives no peak. The ion must be written with a + charge.
        "3": "原子正確，但中性碎片不會產生峰。離子必須寫上 + 電荷。",
      },
    },

    // ── s3-2h-q020 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q020": {
      // EN: <p>Propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>, and propan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>, are isomers with M<sub>r</sub> = 60. In each molecular ion, the C–C bond next to the carbon that holds the OH group breaks easily.</p><p>Which peak is expected to be strong in the mass spectrum of propan-1-ol but weak in that of propan-2-ol?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Propan-1-ol <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span> 和 propan-2-ol <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span> 是同分異構體，M<sub>r</sub> = 60。在兩者的分子離子中，連接 OH 基的碳旁邊的 C–C 鍵都容易斷裂。</p><p>預計哪一個峰在 propan-1-ol 的質譜中強，但在 propan-2-ol 的質譜中弱？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 22 節）：質譜中失去的碎片</caption><thead><tr><th scope=\"col\">失去的質量</th><th scope=\"col\">可能失去的中性碎片</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 或 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 或 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
      options: [
        // EN: m/z 15
        "m/z 15",
        // EN: m/z 31
        "m/z 31",
        // EN: m/z 45
        "m/z 45",
        // EN: m/z 60
        "m/z 60",
      ],
      hints: [
        // EN: Draw each molecule. Which group is attached to the C–OH carbon by a C–C bond?
        "畫出每個分子。哪一個基團以 C–C 鍵連接到 C–OH 的碳上？",
        // EN: In propan-1-ol that group is ethyl. In propan-2-ol it is methyl. Subtract the mass lost from 60.
        "在 propan-1-ol 中，這個基團是乙基。在 propan-2-ol 中是甲基。用 60 減去失去的質量。",
      ],
      // EN: <p><strong>Propan-1-ol:</strong> the C–OH carbon is bonded to an ethyl group. Losing •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> (29) leaves <span class="chem">CH<sub>2</sub>OH<sup>+</sup><span></span></span>:</p><div class="worked__math">60 − 29 = <b>31</b></div><p><strong>Propan-2-ol:</strong> the C–OH carbon is bonded to two methyl groups. Losing •<span class="chem">CH<sub>3</sub><span></span></span> (15) leaves <span class="chem">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>:</p><div class="worked__math">60 − 15 = 45</div><p>So a strong peak at m/z 31 points to propan-1-ol. In the real spectra, m/z 31 is the tallest peak for propan-1-ol and m/z 45 is the tallest peak for propan-2-ol.</p>
      solution: "<p><strong>Propan-1-ol：</strong>C–OH 的碳連接一個乙基。失去 •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>（29）後剩下 <span class=\"chem\">CH<sub>2</sub>OH<sup>+</sup><span></span></span>：</p><div class=\"worked__math\">60 − 29 = <b>31</b></div><p><strong>Propan-2-ol：</strong>C–OH 的碳連接兩個甲基。失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span>（15）後剩下 <span class=\"chem\">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>：</p><div class=\"worked__math\">60 − 15 = 45</div><p>所以 m/z 31 的強峰指向 propan-1-ol。在真實的質譜中，propan-1-ol 最高的峰是 m/z 31，propan-2-ol 最高的峰是 m/z 45。</p>",
      misconception: {
        // EN (option A): A mass of 15 is the methyl fragment. When the C–C bond breaks, the charge mostly stays on the part that contains oxygen, so this is not the peak that picks out propan-1-ol.
        "0": "質量 15 是甲基碎片。C–C 鍵斷裂時，電荷大多留在含氧的部分，所以這不是用來辨認 propan-1-ol 的峰。",
        // EN (option C): m/z 45 is 60 − 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span> from the carbon next to C–OH. Propan-2-ol does this, giving <span class="chem">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>. It is the strong peak of propan-2-ol.
        "2": "m/z 45 是 60 − 15，即 C–OH 旁邊的碳失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span>。Propan-2-ol 會這樣碎裂，生成 <span class=\"chem\">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>。這是 propan-2-ol 的強峰。",
        // EN (option D): m/z 60 is the molecular ion. Isomers have the same M<sub>r</sub>, so this peak cannot tell them apart.
        "3": "m/z 60 是分子離子。同分異構體的 M<sub>r</sub> 相同，所以這個峰不能分辨它們。",
      },
    },

    // ── s3-2h-q021 · short · challenge · AHL · Structure 3.2.8 · 3 marks
    "s3-2h-q021": {
      // EN: <p>Pentan-2-one, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>, and pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>, are isomers. The table shows the main peaks in the mass spectra of the two compounds, labelled P and Q.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Main peaks (m/z); the tallest peak is in bold</caption><thead><tr><th scope="col">Spectrum</th><th scope="col">Peaks</th></tr></thead><tbody><tr><th scope="row">P</th><td>29, <b>57</b>, 86</td></tr><tr><th scope="row">Q</th><td><b>43</b>, 71, 86</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Deduce which compound gave each spectrum. Use two of the fragment peaks in your explanation.</p>
      stem: "<p>Pentan-2-one <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span> 和 pentan-3-one <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> 是同分異構體。下表列出這兩個化合物的質譜中主要的峰，兩個質譜分別標示為 P 和 Q。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>主要的峰 (m/z)；最高的峰以粗體顯示</caption><thead><tr><th scope=\"col\">質譜</th><th scope=\"col\">峰</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td>29, <b>57</b>, 86</td></tr><tr><th scope=\"row\">Q</th><td><b>43</b>, 71, 86</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 22 節）：質譜中失去的碎片</caption><thead><tr><th scope=\"col\">失去的質量</th><th scope=\"col\">可能失去的中性碎片</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 或 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 或 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>推斷 (deduce) 每個質譜來自哪一個化合物。解釋時要用上其中兩個碎片峰。</p>",
      hints: [
        // EN: Both have a molecular ion at m/z 86. Subtract each fragment peak from 86 to find the mass lost.
        "兩者的分子離子都在 m/z 86。用 86 減去每個碎片峰，找出失去的質量。",
        // EN: Ketones tend to break at the C–C bond next to the C=O group. Which groups sit next to C=O in each isomer?
        "酮傾向在 C=O 基團旁邊的 C–C 鍵斷裂。在每個異構體中，C=O 旁邊是哪些基團？",
      ],
      // EN: <p>Method: mass lost = M − fragment peak, then match the mass lost to the booklet table and to a group that the molecule really contains.</p><div class="worked__math">P: 86 − 57 = 29 → •CH<sub>2</sub>CH<sub>3</sub> lost</div><div class="worked__math">Q: 86 − 71 = 15 → •CH<sub>3</sub> lost</div><p>Pentan-3-one has two ethyl groups next to C=O and no methyl group there. Pentan-2-one has a methyl group next to C=O. The peaks are those of the real spectra.</p>
      solution: "<p>方法：失去的質量 = M − 碎片峰，然後把失去的質量與數據手冊的表對照，並確認分子真的含有這個基團。</p><div class=\"worked__math\">P：86 − 57 = 29 → 失去 •CH<sub>2</sub>CH<sub>3</sub></div><div class=\"worked__math\">Q：86 − 71 = 15 → 失去 •CH<sub>3</sub></div><p>Pentan-3-one（戊-3-酮）的 C=O 旁邊有兩個乙基，那裏沒有甲基。Pentan-2-one（戊-2-酮）的 C=O 旁邊有一個甲基。這些峰來自真實的質譜。</p>",
      // EN: <p>P is pentan-3-one and Q is pentan-2-one.</p><p>The peak at m/z 57 in P is M − 29: loss of •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> to leave <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>. Pentan-3-one has an ethyl group on each side of the C=O group, so it loses 29 easily.</p><p>The peak at m/z 71 in Q is M − 15: loss of •<span class="chem">CH<sub>3</sub><span></span></span> to leave <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>. Only pentan-2-one has a <span class="chem">CH<sub>3</sub><span></span></span> group bonded to the C=O carbon. (The peak at m/z 43 in Q is <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>, which also needs a <span class="chem">CH<sub>3</sub><span></span></span> next to C=O.)</p>
      answer: "<p>P 是 pentan-3-one，Q 是 pentan-2-one。</p><p>P 中 m/z 57 的峰是 M − 29：失去 •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>，剩下 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>。Pentan-3-one 的 C=O 基團兩邊各有一個乙基，所以容易失去 29。</p><p>Q 中 m/z 71 的峰是 M − 15：失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span>，剩下 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>。只有 pentan-2-one 有一個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團連接到 C=O 的碳上。（Q 中 m/z 43 的峰是 <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>，它同樣需要 C=O 旁邊有一個 <span class=\"chem\">CH<sub>3</sub><span></span></span>。）</p>",
      markscheme: [
        // EN: P is pentan-3-one AND Q is pentan-2-one.
        "P 是 pentan-3-one，並且 Q 是 pentan-2-one。",
        // EN: m/z 57 = 86 − 29, loss of •CH₂CH₃ / the ion CH₃CH₂CO⁺, which fits an ethyl group next to C=O in pentan-3-one. (Accept m/z 29 = CH₃CH₂⁺.)
        "m/z 57 = 86 − 29，失去 •CH₂CH₃／離子 CH₃CH₂CO⁺，符合 pentan-3-one 中 C=O 旁邊有乙基。（接受 m/z 29 = CH₃CH₂⁺。）",
        // EN: m/z 71 = 86 − 15, loss of •CH₃ next to C=O in pentan-2-one; OR m/z 43 is CH₃CO⁺, which needs CH₃ next to C=O. Ions must be written with a + charge.
        "m/z 71 = 86 − 15，pentan-2-one 中 C=O 旁邊失去 •CH₃；或：m/z 43 是 CH₃CO⁺，需要 C=O 旁邊有 CH₃。離子必須寫上 + 電荷。",
      ],
    },

    // ── s3-2h-q022 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q022": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Other evidence shows that each molecule contains <strong>one</strong> oxygen atom. The molecular ion peak in its mass spectrum is at m/z 72.</p><p>What is the molecular formula of the compound?</p>
      stem: "<p>一個化合物只含碳、氫和氧。其他證據顯示每個分子含有<strong>一個</strong>氧原子。它的質譜中，分子離子峰在 m/z 72。</p><p>這個化合物的分子式是甚麼？</p>",
      options: [
        // EN: <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>
        "<span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<span></span></span>",
        // EN: <span class="chem">C<sub>3</sub>H<sub>4</sub>O<sub>2</sub><span></span></span>
        "<span class=\"chem\">C<sub>3</sub>H<sub>4</sub>O<sub>2</sub><span></span></span>",
        // EN: <span class="chem">C<sub>5</sub>H<sub>12</sub><span></span></span>
        "<span class=\"chem\">C<sub>5</sub>H<sub>12</sub><span></span></span>",
        // EN: <span class="chem">C<sub>4</sub>H<sub>10</sub>O<span></span></span>
        "<span class=\"chem\">C<sub>4</sub>H<sub>10</sub>O<span></span></span>",
      ],
      hints: [
        // EN: Subtract the mass of the one oxygen atom from 72.
        "用 72 減去一個氧原子的質量。",
        // EN: Build the remaining mass from carbon (12) and hydrogen (1).
        "用碳（12）和氫（1）湊出餘下的質量。",
      ],
      // EN: <div class="worked__math">72 − 16 = 56 left for C and H</div><div class="worked__math">4 × 12 = 48, &nbsp; 56 − 48 = 8 → 8 H</div><p>The molecular formula is <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>. (Three carbons would need 20 H atoms, which is impossible, and five carbons give 60, which is too much.)</p>
      solution: "<div class=\"worked__math\">72 − 16 = 56，留給 C 和 H</div><div class=\"worked__math\">4 × 12 = 48， &nbsp; 56 − 48 = 8 → 8 個 H</div><p>分子式是 <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<span></span></span>。（三個碳需要 20 個 H 原子，這不可能；五個碳是 60，太多了。）</p>",
      misconception: {
        // EN (option B): This formula does add up to 72, but it has two oxygen atoms. The question says there is one.
        "1": "這個化學式加起來確實是 72，但它有兩個氧原子。題目說只有一個。",
        // EN (option C): This formula adds up to 72, but it has no oxygen atom.
        "2": "這個化學式加起來是 72，但它沒有氧原子。",
        // EN (option D): Check the mass: 4 × 12 + 10 × 1 + 16 = 74, not 72.
        "3": "檢查質量：4 × 12 + 10 × 1 + 16 = 74，不是 72。",
      },
    },

    // ── s3-2h-q023 · mcq · foundation · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q023": {
      // EN: <p>The infrared spectrum of a compound has a strong, sharp absorption at 1715 cm<sup>−1</sup>. Which bond causes it?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>一個化合物的紅外光譜在 1715 cm<sup>−1</sup> 有一個強而尖的吸收。哪一個鍵造成這個吸收？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>醇、酯、醚 (alcohols, esters, ethers)</td><td>1050–1410</td><td>強 (strong)</td></tr><tr><th scope=\"row\">C=C</th><td>烯烴 (alkenes)</td><td>1620–1680</td><td>中至弱；多個吸收帶 (medium-weak; multiple bands)</td></tr><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>烷烴、烯烴、芳烴 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: C–O
        "C–O",
        // EN: C=C
        "C=C",
        // EN: C=O
        "C=O",
        // EN: O–H
        "O–H",
      ],
      hints: [
        // EN: Find the row of the table whose range contains 1715.
        "找出表中範圍包含 1715 的那一行。",
      ],
      // EN: <p>1715 cm<sup>−1</sup> lies in the range 1700–1750 cm<sup>−1</sup>. This strong absorption is caused by a C=O bond. The compound could be an aldehyde, a ketone, a carboxylic acid or an ester.</p>
      solution: "<p>1715 cm<sup>−1</sup> 在 1700–1750 cm<sup>−1</sup> 的範圍內。這個強吸收由 C=O 鍵造成。這個化合物可能是醛、酮、羧酸或酯。</p>",
      misconception: {
        // EN (option A): C–O absorbs at 1050–1410 cm<sup>−1</sup>. The single bond and the double bond are easy to mix up, so check the table row carefully.
        "0": "C–O 在 1050–1410 cm<sup>−1</sup> 吸收。單鍵和雙鍵很容易混淆，所以要小心核對表中的那一行。",
        // EN (option B): C=C absorbs at 1620–1680 cm<sup>−1</sup>, and its absorption is medium to weak, not strong.
        "1": "C=C 在 1620–1680 cm<sup>−1</sup> 吸收，而且它的吸收是中至弱，不是強。",
        // EN (option D): O–H absorptions are broad and appear at much higher wavenumbers (2500–3000 or 3200–3600 cm<sup>−1</sup>).
        "3": "O–H 的吸收是寬的，而且出現在高得多的波數（2500–3000 或 3200–3600 cm<sup>−1</sup>）。",
      },
    },

    // ── s3-2h-q024 · mcq · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q024": {
      // EN: <p>The infrared spectrum of a compound shows a strong, very broad absorption from 2500 to 3000 cm<sup>−1</sup> and a strong absorption at 1715 cm<sup>−1</sup>.</p><p>Which compound could it be?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>一個化合物的紅外光譜在 2500 至 3000 cm<sup>−1</sup> 有一個強而很寬的吸收，在 1715 cm<sup>−1</sup> 有一個強吸收。</p><p>它可能是哪一個化合物？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>醇、酯、醚 (alcohols, esters, ethers)</td><td>1050–1410</td><td>強 (strong)</td></tr><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>烷烴、烯烴、芳烴 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "propan-1-ol，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>
        "propanal，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>",
        // EN: propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>
        "propanoic acid，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate，<span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: Assign each absorption to a bond using the table.
        "利用表把每個吸收對應到一個鍵。",
        // EN: Which class of compound has both of these bonds in one functional group?
        "哪一類化合物的一個官能基內同時有這兩個鍵？",
      ],
      // EN: <p>1715 cm<sup>−1</sup> is in the C=O range (1700–1750 cm<sup>−1</sup>). The very broad absorption at 2500–3000 cm<sup>−1</sup> is the O–H bond of a carboxylic acid. A carboxyl group, –COOH, has both, so the compound is propanoic acid.</p>
      solution: "<p>1715 cm<sup>−1</sup> 在 C=O 的範圍內（1700–1750 cm<sup>−1</sup>）。2500–3000 cm<sup>−1</sup> 的很寬的吸收是羧酸的 O–H 鍵。羧基 –COOH 兩者都有，所以這個化合物是 propanoic acid（丙酸）。</p>",
      misconception: {
        // EN (option A): An alcohol has no C=O bond, so it has no absorption at 1700–1750 cm<sup>−1</sup>. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.
        "0": "醇沒有 C=O 鍵，所以在 1700–1750 cm<sup>−1</sup> 沒有吸收。它的 O–H 吸收在 3200–3600 cm<sup>−1</sup>。",
        // EN (option B): An aldehyde has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "1": "醛有 C=O 吸收，但沒有 O–H 鍵，所以不可能在 2500–3000 cm<sup>−1</sup> 產生很寬的吸收。",
        // EN (option D): An ester has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "3": "酯有 C=O 吸收，但沒有 O–H 鍵，所以不可能在 2500–3000 cm<sup>−1</sup> 產生很寬的吸收。",
      },
    },

    // ── s3-2h-q025 · mcq · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q025": {
      // EN: <p>Propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>, and methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>, are isomers.</p><p>Which feature of their infrared spectra tells them apart?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Propanoic acid <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span> 和 methyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span> 是同分異構體。</p><p>它們的紅外光譜中，哪一項特徵可以分辨兩者？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>醇、酯、醚 (alcohols, esters, ethers)</td><td>1050–1410</td><td>強 (strong)</td></tr><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>烷烴、烯烴、芳烴 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: Only methyl ethanoate absorbs at 1700–1750 cm<sup>−1</sup>.
        "只有 methyl ethanoate 在 1700–1750 cm<sup>−1</sup> 吸收。",
        // EN: Only propanoic acid has a very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "只有 propanoic acid 在 2500–3000 cm<sup>−1</sup> 有很寬的吸收。",
        // EN: Only propanoic acid has a broad absorption at 3200–3600 cm<sup>−1</sup>.
        "只有 propanoic acid 在 3200–3600 cm<sup>−1</sup> 有寬的吸收。",
        // EN: Only methyl ethanoate absorbs at 2850–3090 cm<sup>−1</sup>.
        "只有 methyl ethanoate 在 2850–3090 cm<sup>−1</sup> 吸收。",
      ],
      hints: [
        // EN: List the bonds in each molecule. Which bond is in one molecule but not in the other?
        "列出每個分子中的鍵。哪一個鍵只在其中一個分子中出現？",
        // EN: The booklet has two different O–H rows. Choose the row for carboxylic acids.
        "數據手冊有兩行不同的 O–H。選羧酸的那一行。",
      ],
      // EN: <p>Both molecules have C=O, C–O and C–H bonds. Only the acid has an O–H bond. The O–H bond in a carboxylic acid gives a strong, very broad absorption at 2500–3000 cm<sup>−1</sup>. The ester has no absorption of that kind.</p>
      solution: "<p>兩個分子都有 C=O、C–O 和 C–H 鍵。只有酸有 O–H 鍵。羧酸的 O–H 鍵在 2500–3000 cm<sup>−1</sup> 產生強而很寬的吸收。酯沒有這種吸收。</p>",
      misconception: {
        // EN (option A): Both molecules contain a C=O bond, so both absorb at 1700–1750 cm<sup>−1</sup>.
        "0": "兩個分子都含有 C=O 鍵，所以兩者都在 1700–1750 cm<sup>−1</sup> 吸收。",
        // EN (option C): 3200–3600 cm<sup>−1</sup> is the O–H range for alcohols. The O–H bond of a carboxylic acid absorbs at 2500–3000 cm<sup>−1</sup>.
        "2": "3200–3600 cm<sup>−1</sup> 是醇的 O–H 範圍。羧酸的 O–H 鍵在 2500–3000 cm<sup>−1</sup> 吸收。",
        // EN (option D): Both molecules contain C–H bonds, so both absorb at 2850–3090 cm<sup>−1</sup>.
        "3": "兩個分子都含有 C–H 鍵，所以兩者都在 2850–3090 cm<sup>−1</sup> 吸收。",
      },
    },

    // ── s3-2h-q026 · short · exam · AHL · Structure 3.2.9 · 3 marks
    "s3-2h-q026": {
      // EN: <p>Ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>, is an ester. Butanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>, is one of its isomers.</p><p>(a) Other than C–H, state two bonds in ethyl ethanoate that absorb infrared radiation, with the wavenumber range of each. (b) State one absorption that butanoic acid shows but ethyl ethanoate does not.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Ethyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span> 是一種酯。Butanoic acid <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span> 是它的其中一個同分異構體。</p><p>(a) 除 C–H 外，寫出 (state) ethyl ethanoate 中兩個會吸收紅外輻射的鍵，以及每個鍵的波數範圍。(b) 寫出 butanoic acid 有、但 ethyl ethanoate 沒有的一個吸收。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>醇、酯、醚 (alcohols, esters, ethers)</td><td>1050–1410</td><td>強 (strong)</td></tr><tr><th scope=\"row\">C=C</th><td>烯烴 (alkenes)</td><td>1620–1680</td><td>中至弱；多個吸收帶 (medium-weak; multiple bands)</td></tr><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>烷烴、烯烴、芳烴 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div>",
      hints: [
        // EN: An ester group has one double bond and one single bond between carbon and oxygen.
        "酯基的碳和氧之間有一個雙鍵和一個單鍵。",
        // EN: What does a carboxyl group have that an ester group lacks?
        "羧基有甚麼是酯基沒有的？",
      ],
      // EN: <p>Each mark needs the bond <strong>and</strong> its range. The ester group –COO– contains a C=O bond and a C–O bond. The carboxyl group –COOH also has an O–H bond. Use the carboxylic acid row of the table for it, not the alcohol row.</p>
      solution: "<p>每一分都需要寫出鍵<strong>和</strong>它的範圍。酯基 –COO– 含有一個 C=O 鍵和一個 C–O 鍵。羧基 –COOH 還有一個 O–H 鍵。這個鍵要用表中羧酸的那一行，不要用醇的那一行。</p>",
      // EN: <p>(a) C=O at 1700–1750 cm<sup>−1</sup>, and C–O at 1050–1410 cm<sup>−1</sup>.</p><p>(b) O–H in a carboxylic acid at 2500–3000 cm<sup>−1</sup> (strong and very broad).</p>
      answer: "<p>(a) C=O，1700–1750 cm<sup>−1</sup>；以及 C–O，1050–1410 cm<sup>−1</sup>。</p><p>(b) 羧酸的 O–H，2500–3000 cm<sup>−1</sup>（強而很寬）。</p>",
      markscheme: [
        // EN: C=O AND 1700–1750 cm⁻¹ (any value inside the range is accepted).
        "C=O 並且 1700–1750 cm⁻¹（範圍內的任何數值都接受）。",
        // EN: C–O AND 1050–1410 cm⁻¹ (any value inside the range is accepted).
        "C–O 並且 1050–1410 cm⁻¹（範圍內的任何數值都接受）。",
        // EN: O–H (in carboxylic acids) AND 2500–3000 cm⁻¹. Do not accept 3200–3600 cm⁻¹, which is for alcohols.
        "O–H（羧酸的）並且 2500–3000 cm⁻¹。不接受 3200–3600 cm⁻¹，那是醇的範圍。",
      ],
    },

    // ── s3-2h-q027 · multi · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q027": {
      // EN: <p>Prop-2-en-1-ol has the structure <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>OH<span></span></span>. Which absorptions are expected in its infrared spectrum? Select <strong>all</strong> that apply.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Prop-2-en-1-ol 的結構是 <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>OH<span></span></span>。預計它的紅外光譜中有哪些吸收？選出<strong>所有</strong>正確選項。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>醇、酯、醚 (alcohols, esters, ethers)</td><td>1050–1410</td><td>強 (strong)</td></tr><tr><th scope=\"row\">C=C</th><td>烯烴 (alkenes)</td><td>1620–1680</td><td>中至弱；多個吸收帶 (medium-weak; multiple bands)</td></tr><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>烷烴、烯烴、芳烴 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: C–O, 1050–1410 cm<sup>−1</sup>
        "C–O，1050–1410 cm<sup>−1</sup>",
        // EN: C=C, 1620–1680 cm<sup>−1</sup>
        "C=C，1620–1680 cm<sup>−1</sup>",
        // EN: C=O, 1700–1750 cm<sup>−1</sup>
        "C=O，1700–1750 cm<sup>−1</sup>",
        // EN: O–H of a carboxylic acid, 2500–3000 cm<sup>−1</sup>, very broad
        "羧酸的 O–H，2500–3000 cm<sup>−1</sup>，很寬",
        // EN: C–H, 2850–3090 cm<sup>−1</sup>
        "C–H，2850–3090 cm<sup>−1</sup>",
        // EN: O–H of an alcohol, 3200–3600 cm<sup>−1</sup>, broad
        "醇的 O–H，3200–3600 cm<sup>−1</sup>，寬",
      ],
      hints: [
        // EN: Write out the structure and list every type of bond it contains.
        "寫出結構，列出它所含的每一種鍵。",
        // EN: There are two functional groups: an alkene C=C and an alcohol O–H.
        "有兩個官能基：烯烴的 C=C 和醇的 O–H。",
      ],
      // EN: <p>The molecule contains these bonds: C=C (alkene), C–H, C–O and O–H (alcohol). Each gives an absorption in its booklet range. There is no C=O bond and no carboxyl group, so there is no absorption at 1700–1750 cm<sup>−1</sup> and no very broad absorption at 2500–3000 cm<sup>−1</sup>.</p>
      solution: "<p>這個分子含有以下的鍵：C=C（烯烴）、C–H、C–O 和 O–H（醇）。每個鍵都在數據手冊所列的範圍內產生吸收。分子中沒有 C=O 鍵，也沒有羧基，所以在 1700–1750 cm<sup>−1</sup> 沒有吸收，在 2500–3000 cm<sup>−1</sup> 也沒有很寬的吸收。</p>",
      misconception: {
        // EN (option C): The oxygen atom here is in an O–H group joined to carbon by a single bond. There is no C=O bond in the molecule. The double bond is C=C.
        "2": "這裏的氧原子在 O–H 基中，以單鍵連接到碳。分子中沒有 C=O 鍵。那個雙鍵是 C=C。",
        // EN (option D): The molecule is an alcohol, not a carboxylic acid. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.
        "3": "這個分子是醇，不是羧酸。它的 O–H 吸收在 3200–3600 cm<sup>−1</sup>。",
      },
    },

    // ── s3-2h-q028 · multi · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q028": {
      // EN: <p>A greenhouse gas absorbs infrared radiation. A molecule can only do this if one of its vibrations changes the dipole moment of the molecule.</p><p>Which of these gases in the atmosphere absorb infrared radiation? Select <strong>all</strong> that apply.</p>
      stem: "<p>溫室氣體會吸收紅外輻射。一個分子要做到這一點，它的其中一種振動必須改變分子的偶極矩 (dipole moment)。</p><p>大氣中的以下氣體，哪些會吸收紅外輻射？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: <span class="chem">CH<sub>4</sub><span></span></span>
        "<span class=\"chem\">CH<sub>4</sub><span></span></span>",
        // EN: <span class="chem">CO<sub>2</sub><span></span></span>
        "<span class=\"chem\">CO<sub>2</sub><span></span></span>",
        // EN: <span class="chem">H<sub>2</sub>O<span></span></span>
        "<span class=\"chem\">H<sub>2</sub>O<span></span></span>",
        // EN: <span class="chem">N<sub>2</sub><span></span></span>
        "<span class=\"chem\">N<sub>2</sub><span></span></span>",
        // EN: <span class="chem">O<sub>2</sub><span></span></span>
        "<span class=\"chem\">O<sub>2</sub><span></span></span>",
      ],
      hints: [
        // EN: Which molecules contain polar bonds?
        "哪些分子含有極性鍵？",
        // EN: A molecule does not need to be polar overall. It needs a vibration that changes its dipole moment.
        "分子整體不一定要有極性。它需要有一種能改變偶極矩的振動。",
      ],
      // EN: <p><span class="chem">CH<sub>4</sub><span></span></span>, <span class="chem">CO<sub>2</sub><span></span></span> and <span class="chem">H<sub>2</sub>O<span></span></span> all contain polar bonds. Some of their stretching and bending vibrations change the dipole moment, so they absorb infrared radiation. They are greenhouse gases.</p><p><span class="chem">CO<sub>2</sub><span></span></span> and <span class="chem">CH<sub>4</sub><span></span></span> are non-polar molecules overall, but when they bend or stretch unevenly a dipole appears. <span class="chem">N<sub>2</sub><span></span></span> and <span class="chem">O<sub>2</sub><span></span></span> have one non-polar bond each, so no vibration can change the dipole moment. That is why the two main gases in air are not greenhouse gases.</p>
      solution: "<p><span class=\"chem\">CH<sub>4</sub><span></span></span>、<span class=\"chem\">CO<sub>2</sub><span></span></span> 和 <span class=\"chem\">H<sub>2</sub>O<span></span></span> 都含有極性鍵。它們的部分伸縮和彎曲振動會改變偶極矩，所以它們吸收紅外輻射。它們是溫室氣體。</p><p><span class=\"chem\">CO<sub>2</sub><span></span></span> 和 <span class=\"chem\">CH<sub>4</sub><span></span></span> 整體是非極性分子，但當它們彎曲或不對稱地伸縮時，就會出現偶極。<span class=\"chem\">N<sub>2</sub><span></span></span> 和 <span class=\"chem\">O<sub>2</sub><span></span></span> 各自只有一個非極性鍵，所以沒有任何振動能改變偶極矩。這就是空氣中兩種主要氣體不是溫室氣體的原因。</p>",
      misconception: {
        // EN (option D): The two atoms in <span class="chem">N<sub>2</sub><span></span></span> are identical, so the bond is non-polar. Stretching it does not create a dipole, so nitrogen does not absorb infrared radiation.
        "3": "<span class=\"chem\">N<sub>2</sub><span></span></span> 的兩個原子相同，所以鍵是非極性的。伸縮這個鍵不會產生偶極，所以氮不吸收紅外輻射。",
        // EN (option E): The two atoms in <span class="chem">O<sub>2</sub><span></span></span> are identical, so the bond is non-polar. Stretching it does not create a dipole, so oxygen does not absorb infrared radiation.
        "4": "<span class=\"chem\">O<sub>2</sub><span></span></span> 的兩個原子相同，所以鍵是非極性的。伸縮這個鍵不會產生偶極，所以氧不吸收紅外輻射。",
      },
    },

    // ── s3-2h-q029 · short · challenge · AHL · Structure 3.2.9 · 3 marks
    "s3-2h-q029": {
      // EN: <p>Carbon dioxide makes up about 0.04% of the atmosphere and nitrogen about 78%.</p><p>Explain how carbon dioxide molecules cause a greenhouse effect, and why nitrogen molecules do not.</p>
      stem: "<p>二氧化碳約佔大氣的 0.04%，氮約佔 78%。</p><p>解釋 (explain) 二氧化碳分子怎樣造成溫室效應，以及為甚麼氮分子不會。</p>",
      hints: [
        // EN: What kind of radiation does the Earth give out?
        "地球放出哪一種輻射？",
        // EN: What happens to the bonds of a molecule when it absorbs infrared radiation? What must change during the vibration?
        "分子吸收紅外輻射時，它的鍵會怎樣？振動期間甚麼必須改變？",
        // EN: Compare the bond in <span class="chem">N<sub>2</sub><span></span></span> with the bonds in <span class="chem">CO<sub>2</sub><span></span></span>.
        "比較 <span class=\"chem\">N<sub>2</sub><span></span></span> 的鍵和 <span class=\"chem\">CO<sub>2</sub><span></span></span> 的鍵。",
      ],
      // EN: <p>Three of the four points give full marks. A common weak answer says that <span class="chem">CO<sub>2</sub><span></span></span> "traps heat" or "reflects" radiation. The accurate words are: infrared radiation is <strong>absorbed</strong> by bond vibrations and then <strong>re-emitted</strong>. Do not say that <span class="chem">CO<sub>2</sub><span></span></span> is a polar molecule. It is non-polar overall, but its bonds are polar and its dipole moment changes as it vibrates.</p>
      solution: "<p>四個要點中答對三個就得滿分。常見的弱答案說 <span class=\"chem\">CO<sub>2</sub><span></span></span>「困住熱」(traps heat) 或「反射」(reflects) 輻射。準確的說法是：紅外輻射被鍵的振動<strong>吸收</strong> (absorbed)，然後<strong>再發射</strong> (re-emitted)。不要說 <span class=\"chem\">CO<sub>2</sub><span></span></span> 是極性分子。它整體是非極性的，但它的鍵有極性，而且振動時偶極矩會改變。</p>",
      // EN: <p>The warm surface of the Earth emits infrared radiation. The C=O bonds in <span class="chem">CO<sub>2</sub><span></span></span> are polar, and some vibrations of the molecule (bending and uneven stretching) change its dipole moment, so <span class="chem">CO<sub>2</sub><span></span></span> absorbs infrared radiation. The molecules then re-emit the radiation in all directions, so part of it returns to the surface and the atmosphere is warmed. <span class="chem">N<sub>2</sub><span></span></span> has a non-polar bond: its vibration does not change the dipole moment, so it does not absorb infrared radiation.</p>
      answer: "<p>地球溫暖的表面發射紅外輻射。<span class=\"chem\">CO<sub>2</sub><span></span></span> 的 C=O 鍵有極性，而分子的某些振動（彎曲和不對稱伸縮）會改變它的偶極矩，所以 <span class=\"chem\">CO<sub>2</sub><span></span></span> 吸收紅外輻射。分子隨後向各個方向再發射這些輻射，所以部分輻射返回地面，大氣因而變暖。<span class=\"chem\">N<sub>2</sub><span></span></span> 的鍵是非極性的：它的振動不會改變偶極矩，所以它不吸收紅外輻射。</p>",
      markscheme: [
        // EN: The Earth's surface emits infrared (long-wavelength) radiation.
        "地球表面發射紅外（長波長）輻射。",
        // EN: CO₂ absorbs infrared radiation because its bonds are polar / its vibrations (stretching or bending) change the dipole moment of the molecule.
        "CO₂ 吸收紅外輻射，因為它的鍵有極性／它的振動（伸縮或彎曲）改變分子的偶極矩。",
        // EN: The absorbed radiation is re-emitted in all directions, so some returns to the Earth / less energy escapes to space.
        "被吸收的輻射向各個方向再發射，所以部分返回地球／逸出太空的能量減少。",
        // EN: N₂ has a non-polar bond / its vibration causes no change in dipole moment, so it does not absorb infrared radiation.
        "N₂ 的鍵是非極性的／它的振動不會令偶極矩改變，所以它不吸收紅外輻射。",
      ],
    },

    // ── s3-2h-q030 · mcq · challenge · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q030": {
      // EN: <p>Three bottles contain propan-1-ol, propanoic acid and methyl ethanoate. The table lists the main infrared absorptions of each liquid, apart from C–H.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Main absorptions / cm<sup>−1</sup> (not including C–H)</caption><thead><tr><th scope="col">Liquid</th><th scope="col">Absorptions</th></tr></thead><tbody><tr><th scope="row">I</th><td>1745 (strong); 1240 (strong)</td></tr><tr><th scope="row">II</th><td>2500–3000 (strong, very broad); 1715 (strong); 1240 (strong)</td></tr><tr><th scope="row">III</th><td>3200–3500 (strong, broad); 1060 (strong)</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><p>Which row identifies the three liquids?</p>
      stem: "<p>三個瓶子分別盛有 propan-1-ol、propanoic acid 和 methyl ethanoate。下表列出每種液體的主要紅外吸收（C–H 除外）。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>主要吸收 / cm<sup>−1</sup>（不包括 C–H）</caption><thead><tr><th scope=\"col\">液體</th><th scope=\"col\">吸收</th></tr></thead><tbody><tr><th scope=\"row\">I</th><td>1745（強）；1240（強）</td></tr><tr><th scope=\"row\">II</th><td>2500–3000（強、很寬）；1715（強）；1240（強）</td></tr><tr><th scope=\"row\">III</th><td>3200–3500（強、寬）；1060（強）</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>醇、酯、醚 (alcohols, esters, ethers)</td><td>1050–1410</td><td>強 (strong)</td></tr><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div><p>哪一行正確辨認這三種液體？</p>",
      options: [
        // EN: I = methyl ethanoate, II = propanoic acid, III = propan-1-ol
        "I = methyl ethanoate, II = propanoic acid, III = propan-1-ol",
        // EN: I = propanoic acid, II = methyl ethanoate, III = propan-1-ol
        "I = propanoic acid, II = methyl ethanoate, III = propan-1-ol",
        // EN: I = methyl ethanoate, II = propan-1-ol, III = propanoic acid
        "I = methyl ethanoate, II = propan-1-ol, III = propanoic acid",
        // EN: I = propan-1-ol, II = propanoic acid, III = methyl ethanoate
        "I = propan-1-ol, II = propanoic acid, III = methyl ethanoate",
      ],
      hints: [
        // EN: Start with C=O (1700–1750). Which liquid does not have it?
        "先看 C=O（1700–1750）。哪一種液體沒有？",
        // EN: Then use the two different O–H ranges to separate the acid from the alcohol.
        "然後用兩個不同的 O–H 範圍來分開酸和醇。",
      ],
      // EN: <ul><li>III has no C=O absorption. It has a broad O–H absorption at 3200–3600 cm<sup>−1</sup> and a C–O absorption: the alcohol, propan-1-ol.</li><li>II has C=O and the very broad O–H absorption at 2500–3000 cm<sup>−1</sup>: the carboxylic acid, propanoic acid.</li><li>I has C=O and C–O but no O–H absorption: the ester, methyl ethanoate.</li></ul>
      solution: "<ul><li>III 沒有 C=O 吸收。它在 3200–3600 cm<sup>−1</sup> 有寬的 O–H 吸收，還有 C–O 吸收：是醇，即 propan-1-ol。</li><li>II 有 C=O，以及 2500–3000 cm<sup>−1</sup> 的很寬的 O–H 吸收：是羧酸，即 propanoic acid。</li><li>I 有 C=O 和 C–O，但沒有 O–H 吸收：是酯，即 methyl ethanoate。</li></ul>",
      misconception: {
        // EN (option B): Liquid I has no O–H absorption at all, so it cannot be the acid. Liquid II has the very broad acid O–H absorption, which an ester cannot give.
        "1": "液體 I 完全沒有 O–H 吸收，所以不可能是酸。液體 II 有酸的很寬的 O–H 吸收，酯不可能產生這種吸收。",
        // EN (option C): The two O–H ranges have been swapped. The very broad absorption at 2500–3000 cm<sup>−1</sup> belongs to the carboxylic acid. An alcohol absorbs at 3200–3600 cm<sup>−1</sup> and has no C=O absorption.
        "2": "兩個 O–H 範圍對調了。2500–3000 cm<sup>−1</sup> 的很寬的吸收屬於羧酸。醇在 3200–3600 cm<sup>−1</sup> 吸收，而且沒有 C=O 吸收。",
        // EN (option D): Liquid I has a C=O absorption at 1745 cm<sup>−1</sup>, which an alcohol cannot give. Liquid III has no C=O absorption, so it cannot be an ester.
        "3": "液體 I 在 1745 cm<sup>−1</sup> 有 C=O 吸收，醇不可能產生這個吸收。液體 III 沒有 C=O 吸收，所以不可能是酯。",
      },
    },

    // ── s3-2h-q031 · numeric · foundation · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q031": {
      // EN: <p>How many signals are there in the <sup>1</sup>H NMR spectrum of pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>?</p>
      stem: "<p>Pentan-3-one <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> 的 <sup>1</sup>H NMR 譜有多少個訊號 (signals)？</p>",
      hints: [
        // EN: Each signal comes from hydrogen atoms in one chemical environment.
        "每個訊號來自處於同一個化學環境的氫原子。",
        // EN: The molecule is symmetrical about the C=O group. Which hydrogen atoms match each other?
        "分子以 C=O 基團為中心對稱。哪些氫原子互相對應？",
      ],
      // EN: <p>The molecule is symmetrical: the two ethyl groups are in identical positions.</p><ul><li>The six H atoms of the two <span class="chem">CH<sub>3</sub><span></span></span> groups are in one environment.</li><li>The four H atoms of the two <span class="chem">CH<sub>2</sub><span></span></span> groups are in a second environment.</li></ul><p>So there are <strong>2</strong> signals. The number of signals is not the number of H atoms (10) or the number of C atoms (5).</p>
      solution: "<p>分子是對稱的：兩個乙基處於完全相同的位置。</p><ul><li>兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團的六個 H 原子處於同一個環境。</li><li>兩個 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團的四個 H 原子處於第二個環境。</li></ul><p>所以有 <strong>2</strong> 個訊號。訊號的數目不是 H 原子的數目（10），也不是 C 原子的數目（5）。</p>",
      // EN: signals
      unit: "個訊號",
    },

    // ── s3-2h-q032 · mcq · foundation · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q032": {
      // EN: <p>What is the ratio of the areas under the signals in the <sup>1</sup>H NMR spectrum of 2-chloropropane, <span class="chem">CH<sub>3</sub>CHClCH<sub>3</sub><span></span></span>?</p>
      stem: "<p>2-chloropropane <span class=\"chem\">CH<sub>3</sub>CHClCH<sub>3</sub><span></span></span> 的 <sup>1</sup>H NMR 譜中，各訊號面積的比是多少？</p>",
      options: [
        // EN: 6 : 1
        "6 : 1",
        // EN: 3 : 3 : 1
        "3 : 3 : 1",
        // EN: 3 : 1
        "3 : 1",
        // EN: 2 : 1
        "2 : 1",
      ],
      hints: [
        // EN: Count the different hydrogen environments first.
        "先數不同的氫環境。",
        // EN: Then count the hydrogen atoms in each environment.
        "然後數每個環境中的氫原子。",
      ],
      // EN: <p>There are two environments: the six H atoms of the two equivalent <span class="chem">CH<sub>3</sub><span></span></span> groups, and the one H atom on the CHCl carbon. The area under each signal is proportional to the number of H atoms, so the ratio is <strong>6 : 1</strong>.</p>
      solution: "<p>有兩個環境：兩個等價的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團的六個 H 原子，以及 CHCl 碳上的一個 H 原子。每個訊號的面積與 H 原子的數目成正比，所以比是 <strong>6 : 1</strong>。</p>",
      misconception: {
        // EN (option B): The two <span class="chem">CH<sub>3</sub><span></span></span> groups are in the same environment, because the molecule is symmetrical. They give one signal with area 6, not two signals.
        "1": "因為分子是對稱的，兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團處於同一個環境。它們產生一個面積為 6 的訊號，不是兩個訊號。",
        // EN (option C): There are two <span class="chem">CH<sub>3</sub><span></span></span> groups in that environment, so six H atoms in total, not three.
        "2": "這個環境中有兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團，所以共有六個 H 原子，不是三個。",
        // EN (option D): This is the ratio of carbon atoms in the two environments. The area under a signal depends on the number of hydrogen atoms.
        "3": "這是兩個環境中碳原子的比。訊號面積取決於氫原子的數目。",
      },
    },

    // ── s3-2h-q033 · numeric · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q033": {
      // EN: <p>How many signals are there in the <sup>1</sup>H NMR spectrum of 2-methylpropan-1-ol, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span>?</p>
      stem: "<p>2-methylpropan-1-ol <span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span> 的 <sup>1</sup>H NMR 譜有多少個訊號？</p>",
      hints: [
        // EN: Draw the structure. Are the two <span class="chem">CH<sub>3</sub><span></span></span> groups attached to the same carbon?
        "畫出結構。兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團是否連接到同一個碳上？",
        // EN: Do not forget the hydrogen atom of the OH group.
        "不要忘記 OH 基的氫原子。",
      ],
      // EN: <p>Count the environments one by one.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Hydrogen environments in 2-methylpropan-1-ol</caption><thead><tr><th scope="col">Environment</th><th scope="col">Number of H</th></tr></thead><tbody><tr><th scope="row">two equivalent CH<sub>3</sub> groups</th><td>6</td></tr><tr><th scope="row">CH</th><td>1</td></tr><tr><th scope="row">CH<sub>2</sub></th><td>2</td></tr><tr><th scope="row">OH</th><td>1</td></tr></tbody></table></div><p>There are <strong>4</strong> signals, with areas in the ratio 6 : 1 : 2 : 1. The two methyl groups are joined to the same carbon, so they are equivalent and give one signal.</p>
      solution: "<p>逐一數出各個環境。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>2-methylpropan-1-ol 的氫環境</caption><thead><tr><th scope=\"col\">環境</th><th scope=\"col\">H 的數目</th></tr></thead><tbody><tr><th scope=\"row\">兩個等價的 CH<sub>3</sub> 基團</th><td>6</td></tr><tr><th scope=\"row\">CH</th><td>1</td></tr><tr><th scope=\"row\">CH<sub>2</sub></th><td>2</td></tr><tr><th scope=\"row\">OH</th><td>1</td></tr></tbody></table></div><p>有 <strong>4</strong> 個訊號，面積比是 6 : 1 : 2 : 1。兩個甲基連接到同一個碳上，所以它們等價，只產生一個訊號。</p>",
      // EN: signals
      unit: "個訊號",
    },

    // ── s3-2h-q034 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q034": {
      // EN: <p>An alcohol with the molecular formula <span class="chem">C<sub>4</sub>H<sub>10</sub>O<span></span></span> gives a <sup>1</sup>H NMR spectrum with two signals. The areas under the signals are in the ratio 9 : 1.</p><p>Which alcohol is it?</p>
      stem: "<p>一種分子式為 <span class=\"chem\">C<sub>4</sub>H<sub>10</sub>O<span></span></span> 的醇，它的 <sup>1</sup>H NMR 譜有兩個訊號。訊號面積的比是 9 : 1。</p><p>它是哪一種醇？</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span>
        "<span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span>",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>
        "<span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>",
      ],
      hints: [
        // EN: An area of 9 means nine H atoms in the same environment. How many <span class="chem">CH<sub>3</sub><span></span></span> groups is that?
        "面積 9 表示有九個 H 原子處於同一個環境。這相當於多少個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團？",
        // EN: Which structure has three <span class="chem">CH<sub>3</sub><span></span></span> groups attached to one carbon?
        "哪一個結構有三個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團連接到同一個碳上？",
      ],
      // EN: <p>Nine equivalent H atoms means three <span class="chem">CH<sub>3</sub><span></span></span> groups in identical positions. In 2-methylpropan-2-ol, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>, all three methyl groups are bonded to the same carbon. The tenth H atom is in the OH group. That gives two signals with areas 9 : 1.</p>
      solution: "<p>九個等價的 H 原子表示有三個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團處於完全相同的位置。在 2-methylpropan-2-ol（2-甲基丙-2-醇）<span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span> 中，三個甲基都連接到同一個碳上。第十個 H 原子在 OH 基中。這樣就有兩個訊號，面積比是 9 : 1。</p>",
      misconception: {
        // EN (option A): Butan-1-ol has five hydrogen environments (<span class="chem">CH<sub>3</sub><span></span></span>, three different <span class="chem">CH<sub>2</sub><span></span></span> groups and OH), so it gives five signals.
        "0": "Butan-1-ol 有五個氫環境（<span class=\"chem\">CH<sub>3</sub><span></span></span>、三個不同的 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團和 OH），所以產生五個訊號。",
        // EN (option B): Butan-2-ol has five hydrogen environments (two different <span class="chem">CH<sub>3</sub><span></span></span> groups, <span class="chem">CH<sub>2</sub><span></span></span>, CH and OH), so it gives five signals.
        "1": "Butan-2-ol 有五個氫環境（兩個不同的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團、<span class=\"chem\">CH<sub>2</sub><span></span></span>、CH 和 OH），所以產生五個訊號。",
        // EN (option C): 2-methylpropan-1-ol has four hydrogen environments, with areas 6 : 1 : 2 : 1.
        "2": "2-methylpropan-1-ol 有四個氫環境，面積比是 6 : 1 : 2 : 1。",
      },
    },

    // ── s3-2h-q035 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q035": {
      // EN: <p>Propanal has the structure <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>. In which chemical shift range does the signal of the hydrogen atom in the CHO group appear?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div>
      stem: "<p>Propanal 的結構是 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>。CHO 基中氫原子的訊號出現在哪一個化學位移 (chemical shift) 範圍？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 21 節）：<sup>1</sup>H NMR 化學位移</caption><thead><tr><th scope=\"col\">質子的類型</th><th scope=\"col\">化學位移 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div>",
      options: [
        // EN: 2.2–2.7 ppm
        "2.2–2.7 ppm",
        // EN: 4.5–6.0 ppm
        "4.5–6.0 ppm",
        // EN: 9.0–13.0 ppm
        "9.0–13.0 ppm",
        // EN: 9.4–10.0 ppm
        "9.4–10.0 ppm",
      ],
      hints: [
        // EN: In the table the hydrogen in question is shown in bold. Find the row where the bold H is bonded directly to the C=O carbon.
        "表中用粗體顯示所指的氫。找出粗體 H 直接連接到 C=O 碳的那一行。",
      ],
      // EN: <p>The CHO hydrogen is bonded directly to the carbonyl carbon. The booklet row R–C(=O)–<b>H</b> gives <strong>9.4–10.0 ppm</strong>. The other two signals of propanal are the <span class="chem">CH<sub>2</sub><span></span></span> group next to C=O (2.2–2.7 ppm) and the <span class="chem">CH<sub>3</sub><span></span></span> group (0.9–1.0 ppm).</p>
      solution: "<p>CHO 的氫直接連接到羰基碳上。數據手冊中 R–C(=O)–<b>H</b> 的一行給出 <strong>9.4–10.0 ppm</strong>。Propanal（丙醛）的另外兩個訊號是 C=O 旁邊的 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團（2.2–2.7 ppm）和 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團（0.9–1.0 ppm）。</p>",
      misconception: {
        // EN (option A): This is the range for H atoms on a carbon <strong>next to</strong> the C=O group. In propanal that is the <span class="chem">CH<sub>2</sub><span></span></span> group, not the CHO hydrogen.
        "0": "這是 C=O 基團<strong>旁邊</strong>的碳上的 H 原子的範圍。在 propanal 中，那是 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團，不是 CHO 的氫。",
        // EN (option B): This range is for H atoms on a C=C double bond. The CHO hydrogen is on a C=O carbon.
        "1": "這個範圍屬於 C=C 雙鍵上的 H 原子。CHO 的氫在 C=O 的碳上。",
        // EN (option C): This row is for the O–H hydrogen of a carboxylic acid. In an aldehyde the hydrogen is bonded to the carbon of the C=O group, not to an oxygen atom.
        "2": "這一行是羧酸 O–H 的氫。在醛中，氫連接到 C=O 基團的碳上，不是連接到氧原子上。",
      },
    },

    // ── s3-2h-q036 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q036": {
      // EN: <p>The sketch shows the <sup>1</sup>H NMR spectrum of a compound, drawn without splitting, with the molecular formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub><span></span></span>. The number above each signal is its relative area.</p><p><svg class="q-fig" viewBox="0 0 300 150" width="300" height="150" style="max-width:100%;height:auto" role="img" aria-label="NMR sketch with a chemical shift axis from 12 ppm on the left to 0 ppm on the right. There are two signals of equal area: one at 3.7 ppm and one at 2.1 ppm."><path d="M12 116H288" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="288.0" y1="116" x2="288.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="288.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="265.0" y1="116" x2="265.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="242.0" y1="116" x2="242.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="242.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">2</text><line x1="219.0" y1="116" x2="219.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="196.0" y1="116" x2="196.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="196.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">4</text><line x1="173.0" y1="116" x2="173.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="150.0" y1="116" x2="150.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="150.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">6</text><line x1="127.0" y1="116" x2="127.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="104.0" y1="116" x2="104.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="104.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">8</text><line x1="81.0" y1="116" x2="81.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="58.0" y1="116" x2="58.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="58.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">10</text><line x1="35.0" y1="116" x2="35.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="12.0" y1="116" x2="12.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="12.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">12</text><text x="150" y="147" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text><line x1="202.9" y1="116" x2="202.9" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="202.9" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text><line x1="239.7" y1="116" x2="239.7" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="239.7" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text></svg></p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><p>Which compound gives this spectrum?</p>
      stem: "<p>略圖顯示一個分子式為 <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub><span></span></span> 的化合物的 <sup>1</sup>H NMR 譜（沒有畫出分裂）。每個訊號上方的數字是它的相對面積。</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"NMR 略圖，化學位移軸由左邊的 12 ppm 至右邊的 0 ppm。有兩個面積相等的訊號：一個在 3.7 ppm，一個在 2.1 ppm。\"><path d=\"M12 116H288\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"288.0\" y1=\"116\" x2=\"288.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"288.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"265.0\" y1=\"116\" x2=\"265.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"242.0\" y1=\"116\" x2=\"242.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"242.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"219.0\" y1=\"116\" x2=\"219.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"196.0\" y1=\"116\" x2=\"196.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"196.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"173.0\" y1=\"116\" x2=\"173.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"150.0\" y1=\"116\" x2=\"150.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"150.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">6</text><line x1=\"127.0\" y1=\"116\" x2=\"127.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"104.0\" y1=\"116\" x2=\"104.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"104.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">8</text><line x1=\"81.0\" y1=\"116\" x2=\"81.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"58.0\" y1=\"116\" x2=\"58.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"58.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">10</text><line x1=\"35.0\" y1=\"116\" x2=\"35.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"12.0\" y1=\"116\" x2=\"12.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"12.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">12</text><text x=\"150\" y=\"147\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">化學位移 / ppm</text><line x1=\"202.9\" y1=\"116\" x2=\"202.9\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"202.9\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text><line x1=\"239.7\" y1=\"116\" x2=\"239.7\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"239.7\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text></svg></p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 21 節）：<sup>1</sup>H NMR 化學位移</caption><thead><tr><th scope=\"col\">質子的類型</th><th scope=\"col\">化學位移 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><p>哪一個化合物產生這個譜？</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "<span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>OH<span></span></span>
        "<span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>OH<span></span></span>",
      ],
      hints: [
        // EN: Count the signals. How many hydrogen environments does the compound have?
        "數一數訊號。這個化合物有多少個氫環境？",
        // EN: Equal areas and six H atoms in total means three H atoms in each environment.
        "面積相等，而且共有六個 H 原子，即每個環境有三個 H 原子。",
        // EN: Use the shifts to decide what each <span class="chem">CH<sub>3</sub><span></span></span> group is joined to.
        "利用化學位移判斷每個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團連接到甚麼。",
      ],
      // EN: <p>Two signals of equal area, with six H atoms in total, means two different <span class="chem">CH<sub>3</sub><span></span></span> groups.</p><ul><li>2.1 ppm is in the range 2.0–2.5 ppm: H on a carbon next to the C=O of an ester, <span class="chem">CH<sub>3</sub><span></span></span>–C(=O)–O.</li><li>3.7 ppm is in the range 3.7–4.8 ppm: H on a carbon bonded to the O of an ester, C(=O)–O–<span class="chem">CH<sub>3</sub><span></span></span>.</li></ul><p>The compound is methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>. (The booklet rows show <span class="chem">CH<sub>2</sub><span></span></span>, but they also apply to <span class="chem">CH<sub>3</sub><span></span></span> groups in the same position.)</p>
      solution: "<p>兩個面積相等的訊號，共六個 H 原子，表示有兩個不同的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。</p><ul><li>2.1 ppm 在 2.0–2.5 ppm 的範圍內：H 在酯的 C=O 旁邊的碳上，即 <span class=\"chem\">CH<sub>3</sub><span></span></span>–C(=O)–O。</li><li>3.7 ppm 在 3.7–4.8 ppm 的範圍內：H 在連接酯的 O 的碳上，即 C(=O)–O–<span class=\"chem\">CH<sub>3</sub><span></span></span>。</li></ul><p>這個化合物是 methyl ethanoate（乙酸甲酯）<span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>。（數據手冊的各行寫的是 <span class=\"chem\">CH<sub>2</sub><span></span></span>，但同樣適用於相同位置的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。）</p>",
      misconception: {
        // EN (option A): Propanoic acid has three hydrogen environments (areas 3 : 2 : 1), and its COOH hydrogen gives a signal at 9.0–13.0 ppm. The sketch has nothing there.
        "0": "Propanoic acid 有三個氫環境（面積比 3 : 2 : 1），而且它的 COOH 氫在 9.0–13.0 ppm 產生訊號。略圖在那裏甚麼都沒有。",
        // EN (option C): Ethyl methanoate has three hydrogen environments (H–C=O, <span class="chem">CH<sub>2</sub><span></span></span> and <span class="chem">CH<sub>3</sub><span></span></span>) with areas 1 : 2 : 3, so it gives three signals.
        "2": "Ethyl methanoate 有三個氫環境（H–C=O、<span class=\"chem\">CH<sub>2</sub><span></span></span> 和 <span class=\"chem\">CH<sub>3</sub><span></span></span>），面積比 1 : 2 : 3，所以產生三個訊號。",
        // EN (option D): This molecule has three hydrogen environments (<span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub><span></span></span> and OH) with areas 3 : 2 : 1, so it gives three signals.
        "3": "這個分子有三個氫環境（<span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub><span></span></span> 和 OH），面積比 3 : 2 : 1，所以產生三個訊號。",
      },
    },

    // ── s3-2h-q037 · order · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q037": {
      // EN: <p>Put these compounds in order of the number of signals in their <sup>1</sup>H NMR spectra, <strong>fewest signals first</strong>.</p>
      stem: "<p>按 <sup>1</sup>H NMR 譜中訊號的數目排列這些化合物，<strong>訊號最少的排最先</strong>。</p>",
      options: [
        // EN: propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>
        "propanone，<span class=\"chem\">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate，<span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: propan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>
        "propan-2-ol，<span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>",
        // EN: butanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>
        "butanal，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>",
        // EN: butan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "butan-2-ol，<span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: Count hydrogen environments, not hydrogen atoms.
        "要數氫環境，不是數氫原子。",
        // EN: Look for symmetry. Two <span class="chem">CH<sub>3</sub><span></span></span> groups in mirror-image positions give one signal.
        "留意對稱性。處於鏡像位置的兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團只產生一個訊號。",
      ],
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Number of hydrogen environments</caption><thead><tr><th scope="col">Compound</th><th scope="col">Environments</th><th scope="col">Signals</th></tr></thead><tbody><tr><th scope="row">propanone</th><td>two equivalent CH<sub>3</sub></td><td>1</td></tr><tr><th scope="row">methyl ethanoate</th><td>CH<sub>3</sub>–C=O; O–CH<sub>3</sub></td><td>2</td></tr><tr><th scope="row">propan-2-ol</th><td>two equivalent CH<sub>3</sub>; CH; OH</td><td>3</td></tr><tr><th scope="row">butanal</th><td>CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO</td><td>4</td></tr><tr><th scope="row">butan-2-ol</th><td>CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub></td><td>5</td></tr></tbody></table></div><p>Propanone and propan-2-ol are symmetrical, so their two methyl groups are equivalent. In methyl ethanoate and butan-2-ol the two methyl groups are in different positions, so they give separate signals.</p>
      solution: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>氫環境的數目</caption><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">環境</th><th scope=\"col\">訊號</th></tr></thead><tbody><tr><th scope=\"row\">propanone</th><td>兩個等價的 CH<sub>3</sub></td><td>1</td></tr><tr><th scope=\"row\">methyl ethanoate</th><td>CH<sub>3</sub>–C=O; O–CH<sub>3</sub></td><td>2</td></tr><tr><th scope=\"row\">propan-2-ol</th><td>兩個等價的 CH<sub>3</sub>；CH；OH</td><td>3</td></tr><tr><th scope=\"row\">butanal</th><td>CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO</td><td>4</td></tr><tr><th scope=\"row\">butan-2-ol</th><td>CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub></td><td>5</td></tr></tbody></table></div><p>Propanone 和 propan-2-ol 是對稱的，所以它們的兩個甲基等價。在 methyl ethanoate 和 butan-2-ol 中，兩個甲基處於不同的位置，所以產生不同的訊號。</p>",
    },

    // ── s3-2h-q038 · mcq · challenge · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q038": {
      // EN: <p>A compound with the molecular formula <span class="chem">C<sub>5</sub>H<sub>10</sub>O<span></span></span> gives a <sup>1</sup>H NMR spectrum with two signals. On the integration trace, the step heights for the two signals are 2.7 cm and 1.8 cm.</p><p>Which compound is it?</p>
      stem: "<p>一個分子式為 <span class=\"chem\">C<sub>5</sub>H<sub>10</sub>O<span></span></span> 的化合物，它的 <sup>1</sup>H NMR 譜有兩個訊號。在積分曲線 (integration trace) 上，兩個訊號的階梯高度是 2.7 cm 和 1.8 cm。</p><p>它是哪一個化合物？</p>",
      options: [
        // EN: pentan-2-one, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pentan-2-one，<span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pentan-3-one，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 3-methylbutan-2-one, <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub><span></span></span>
        "3-methylbutan-2-one，<span class=\"chem\">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub><span></span></span>",
        // EN: 2,2-dimethylpropanal, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>CCHO<span></span></span>
        "2,2-dimethylpropanal，<span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>CCHO<span></span></span>",
      ],
      hints: [
        // EN: Turn the step heights into the simplest whole-number ratio.
        "把階梯高度化成最簡整數比。",
        // EN: The molecule has ten H atoms. Share them out in that ratio.
        "分子有十個 H 原子。按這個比分配。",
        // EN: Which structure has six H atoms in one environment and four in another?
        "哪一個結構有六個 H 原子在一個環境，四個在另一個環境？",
      ],
      // EN: <div class="worked__math">2.7 : 1.8 = 1.5 : 1 = 3 : 2</div><div class="worked__math">10 H shared 3 : 2 → 6 H and 4 H</div><p>Pentan-3-one is symmetrical. Its two <span class="chem">CH<sub>3</sub><span></span></span> groups give one signal (6 H) and its two <span class="chem">CH<sub>2</sub><span></span></span> groups give the other (4 H). The step heights of an integration trace give the <strong>ratio</strong> of H atoms, so you must scale the ratio to the molecular formula.</p>
      solution: "<div class=\"worked__math\">2.7 : 1.8 = 1.5 : 1 = 3 : 2</div><div class=\"worked__math\">10 個 H 按 3 : 2 分配 → 6 個 H 和 4 個 H</div><p>Pentan-3-one（戊-3-酮）是對稱的。它的兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團產生一個訊號（6 H），兩個 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團產生另一個訊號（4 H）。積分曲線的階梯高度給出的是 H 原子的<strong>比</strong>，所以你必須按分子式把這個比放大。</p>",
      misconception: {
        // EN (option A): Pentan-2-one has four hydrogen environments (areas 3 : 2 : 2 : 3), so it gives four signals.
        "0": "Pentan-2-one 有四個氫環境（面積比 3 : 2 : 2 : 3），所以產生四個訊號。",
        // EN (option C): 3-methylbutan-2-one has three hydrogen environments (areas 3 : 1 : 6), so it gives three signals.
        "2": "3-methylbutan-2-one 有三個氫環境（面積比 3 : 1 : 6），所以產生三個訊號。",
        // EN (option D): 2,2-dimethylpropanal does give two signals, but their areas are 9 : 1. The measured ratio is 3 : 2.
        "3": "2,2-dimethylpropanal 確實產生兩個訊號，但面積比是 9 : 1。量度到的比是 3 : 2。",
      },
    },

    // ── s3-2h-q039 · numeric · foundation · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q039": {
      // EN: <p>In a <sup>1</sup>H NMR spectrum, one signal is a triplet (three peaks).</p><p>How many hydrogen atoms are bonded to the carbon atom next to the hydrogen atoms that give this signal?</p>
      stem: "<p>在一個 <sup>1</sup>H NMR 譜中，其中一個訊號是三峰 (triplet)，即有三個峰。</p><p>產生這個訊號的氫原子，它們旁邊的碳原子上連接了多少個氫原子？</p>",
      hints: [
        // EN: If the neighbouring carbon holds n hydrogen atoms, the signal is split into n + 1 peaks.
        "如果相鄰的碳連接 n 個氫原子，訊號就會分裂成 n + 1 個峰。",
        // EN: Solve n + 1 = 3.
        "解 n + 1 = 3。",
      ],
      // EN: <p>A signal is split into n + 1 peaks, where n is the number of H atoms on the neighbouring carbon atom.</p><div class="worked__math">n + 1 = 3 &nbsp; so &nbsp; n = <b>2</b></div><p>A triplet tells you that the neighbouring carbon is a <span class="chem">CH<sub>2</sub><span></span></span> group. The splitting tells you about the neighbours, not about the hydrogen atoms that give the signal.</p>
      solution: "<p>訊號分裂成 n + 1 個峰，n 是相鄰碳原子上 H 原子的數目。</p><div class=\"worked__math\">n + 1 = 3 &nbsp; 所以 &nbsp; n = <b>2</b></div><p>三峰告訴你相鄰的碳是一個 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團。分裂告訴你的是相鄰原子的情況，不是產生這個訊號的氫原子本身的情況。</p>",
      // EN: H atoms
      unit: "個 H 原子",
    },

    // ── s3-2h-q040 · mcq · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q040": {
      // EN: <p>Butanone has the structure <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>. What are the splitting patterns of its three signals in a <sup>1</sup>H NMR spectrum?</p>
      stem: "<p>Butanone 的結構是 <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>。在 <sup>1</sup>H NMR 譜中，它的三個訊號的分裂模式 (splitting patterns) 是甚麼？</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: quartet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: triplet.
        "C=O 旁的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：單峰 (singlet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：四峰 (quartet)。乙基的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：三峰 (triplet)。",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: triplet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: quartet.
        "C=O 旁的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：單峰 (singlet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：三峰 (triplet)。乙基的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：四峰 (quartet)。",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: triplet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: doublet.
        "C=O 旁的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：單峰 (singlet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：三峰 (triplet)。乙基的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：雙峰 (doublet)。",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: triplet. <span class="chem">CH<sub>2</sub><span></span></span>: quartet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: triplet.
        "C=O 旁的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：三峰 (triplet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：四峰 (quartet)。乙基的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：三峰 (triplet)。",
      ],
      hints: [
        // EN: For each group, look at the carbon atom(s) directly bonded to it. How many H atoms do they hold?
        "對每個基團，看直接與它相連的碳原子。這些碳連接多少個 H 原子？",
        // EN: Number of peaks = n + 1.
        "峰的數目 = n + 1。",
      ],
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Splitting in butanone</caption><thead><tr><th scope="col">Group</th><th scope="col">H on the neighbouring carbon, n</th><th scope="col">Peaks, n + 1</th><th scope="col">Pattern</th></tr></thead><tbody><tr><th scope="row">CH<sub>3</sub> next to C=O</th><td>0</td><td>1</td><td>singlet</td></tr><tr><th scope="row">CH<sub>2</sub></th><td>3</td><td>4</td><td>quartet</td></tr><tr><th scope="row">CH<sub>3</sub> of ethyl</th><td>2</td><td>3</td><td>triplet</td></tr></tbody></table></div><p>A triplet (3 H) together with a quartet (2 H) is the pattern of an ethyl group.</p>
      solution: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>butanone 的分裂</caption><thead><tr><th scope=\"col\">基團</th><th scope=\"col\">相鄰碳上的 H 數目 n</th><th scope=\"col\">峰數 n + 1</th><th scope=\"col\">模式</th></tr></thead><tbody><tr><th scope=\"row\">C=O 旁的 CH<sub>3</sub></th><td>0</td><td>1</td><td>單峰 (singlet)</td></tr><tr><th scope=\"row\">CH<sub>2</sub></th><td>3</td><td>4</td><td>四峰 (quartet)</td></tr><tr><th scope=\"row\">乙基的 CH<sub>3</sub></th><td>2</td><td>3</td><td>三峰 (triplet)</td></tr></tbody></table></div><p>三峰（3 H）加上四峰（2 H）是乙基的特徵模式。</p>",
      misconception: {
        // EN (option B): This counts the H atoms on the <strong>same</strong> carbon and adds one. Splitting is caused by the H atoms on the <strong>neighbouring</strong> carbon.
        "1": "這是數了<strong>同一個</strong>碳上的 H 原子再加一。分裂是由<strong>相鄰</strong>碳上的 H 原子造成的。",
        // EN (option C): This uses n peaks. The rule is n + 1: three neighbouring H atoms give four peaks, and two give three peaks.
        "2": "這是用了 n 個峰。規則是 n + 1：三個相鄰的 H 原子產生四個峰，兩個產生三個峰。",
        // EN (option D): The carbon next to the first <span class="chem">CH<sub>3</sub><span></span></span> group is the C=O carbon, which holds no H atoms. The <span class="chem">CH<sub>2</sub><span></span></span> group is two carbons away, so it does not split this signal.
        "3": "第一個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團旁邊的碳是 C=O 的碳，它沒有連接 H 原子。<span class=\"chem\">CH<sub>2</sub><span></span></span> 基團相隔兩個碳，所以不會令這個訊號分裂。",
      },
    },

    // ── s3-2h-q041 · mcq · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q041": {
      // EN: <p>Which describes the <sup>1</sup>H NMR spectrum of 1,1-dichloroethane, <span class="chem">CH<sub>3</sub>CHCl<sub>2</sub><span></span></span>?</p>
      stem: "<p>以下哪一項描述 1,1-dichloroethane <span class=\"chem\">CH<sub>3</sub>CHCl<sub>2</sub><span></span></span> 的 <sup>1</sup>H NMR 譜？</p>",
      options: [
        // EN: One singlet
        "一個單峰 (singlet)",
        // EN: A doublet (area 3) and a quartet (area 1)
        "雙峰 (doublet)，面積 3；四峰 (quartet)，面積 1",
        // EN: A quartet (area 3) and a doublet (area 1)
        "四峰 (quartet)，面積 3；雙峰 (doublet)，面積 1",
        // EN: A singlet (area 3) and a triplet (area 1)
        "單峰 (singlet)，面積 3；三峰 (triplet)，面積 1",
      ],
      hints: [
        // EN: There are two environments: <span class="chem">CH<sub>3</sub><span></span></span> (3 H) and <span class="chem">CHCl<sub>2</sub><span></span></span> (1 H).
        "有兩個環境：<span class=\"chem\">CH<sub>3</sub><span></span></span>（3 H）和 <span class=\"chem\">CHCl<sub>2</sub><span></span></span>（1 H）。",
        // EN: Each signal is split by the H atoms on the other carbon. Use n + 1.
        "每個訊號都被另一個碳上的 H 原子分裂。用 n + 1。",
      ],
      // EN: <ul><li>The <span class="chem">CH<sub>3</sub><span></span></span> signal (area 3) has one H on the neighbouring carbon: 1 + 1 = 2 peaks, a <strong>doublet</strong>.</li><li>The CH signal (area 1) has three H atoms on the neighbouring carbon: 3 + 1 = 4 peaks, a <strong>quartet</strong>.</li></ul>
      solution: "<ul><li><span class=\"chem\">CH<sub>3</sub><span></span></span> 訊號（面積 3）：相鄰的碳上有一個 H，1 + 1 = 2 個峰，是<strong>雙峰</strong> (doublet)。</li><li>CH 訊號（面積 1）：相鄰的碳上有三個 H 原子，3 + 1 = 4 個峰，是<strong>四峰</strong> (quartet)。</li></ul>",
      misconception: {
        // EN (option A): One singlet would mean that all four H atoms are in the same environment. That is true for the isomer 1,2-dichloroethane, <span class="chem">ClCH<sub>2</sub>CH<sub>2</sub>Cl<span></span></span>, but here the <span class="chem">CH<sub>3</sub><span></span></span> and CH hydrogen atoms are different.
        "0": "一個單峰表示四個 H 原子全部處於同一個環境。它的同分異構體 1,2-dichloroethane <span class=\"chem\">ClCH<sub>2</sub>CH<sub>2</sub>Cl<span></span></span> 是這樣，但這裏 <span class=\"chem\">CH<sub>3</sub><span></span></span> 和 CH 的氫原子並不相同。",
        // EN (option C): The patterns are on the wrong signals. This comes from counting the H atoms on the same carbon. The <span class="chem">CH<sub>3</sub><span></span></span> signal is split by the one H on the CH carbon.
        "2": "分裂模式配錯了訊號。這是數了同一個碳上的 H 原子所致。<span class=\"chem\">CH<sub>3</sub><span></span></span> 訊號是被 CH 碳上的一個 H 分裂的。",
        // EN (option D): This uses n peaks, not n + 1. One neighbouring H gives two peaks, and three neighbouring H atoms give four peaks.
        "3": "這是用了 n 個峰，不是 n + 1。一個相鄰的 H 產生兩個峰，三個相鄰的 H 原子產生四個峰。",
      },
    },

    // ── s3-2h-q042 · multi · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q042": {
      // EN: <p>In which of these compounds is <strong>every</strong> signal in the <sup>1</sup>H NMR spectrum a singlet? Select <strong>all</strong> that apply. (Treat the signal of an O–H hydrogen as a singlet.)</p>
      stem: "<p>以下哪些化合物的 <sup>1</sup>H NMR 譜中，<strong>每一個</strong>訊號都是單峰 (singlet)？選出<strong>所有</strong>正確選項。（把 O–H 氫的訊號當作單峰。）</p>",
      options: [
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate，<span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: ethyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "ethyl methanoate，<span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>
        "propanone，<span class=\"chem\">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>",
        // EN: ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>
        "ethanol，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: 2-methylpropan-2-ol, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>
        "2-methylpropan-2-ol，<span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>",
      ],
      hints: [
        // EN: A singlet means no H atoms on the neighbouring carbon atom.
        "單峰表示相鄰的碳原子上沒有 H 原子。",
        // EN: Look for <span class="chem">CH<sub>3</sub><span></span></span> groups whose only neighbour is a C=O carbon, an O atom, or a carbon with no H.
        "留意這樣的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團：它旁邊只有 C=O 的碳、O 原子，或沒有 H 的碳。",
      ],
      // EN: <ul><li>Methyl ethanoate: one <span class="chem">CH<sub>3</sub><span></span></span> is next to the C=O carbon and the other is bonded to O. Neither has H atoms on a neighbouring carbon. Two singlets.</li><li>Propanone: both <span class="chem">CH<sub>3</sub><span></span></span> groups are next to the C=O carbon. One singlet.</li><li>2-methylpropan-2-ol: the three <span class="chem">CH<sub>3</sub><span></span></span> groups are bonded to a carbon with no H. One singlet for 9 H, and one singlet for OH.</li><li>Ethyl methanoate and ethanol each contain <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>, which gives a triplet and a quartet.</li></ul>
      solution: "<ul><li>Methyl ethanoate：一個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 在 C=O 碳旁邊，另一個連接到 O。兩者相鄰的碳上都沒有 H 原子。兩個單峰。</li><li>Propanone：兩個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團都在 C=O 碳旁邊。一個單峰。</li><li>2-methylpropan-2-ol：三個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團連接到一個沒有 H 的碳上。9 個 H 產生一個單峰，OH 產生一個單峰。</li><li>Ethyl methanoate 和 ethanol 都含有 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>，它產生一個三峰和一個四峰。</li></ul>",
      misconception: {
        // EN (option B): Ethyl methanoate has an ethyl group. Its <span class="chem">CH<sub>2</sub><span></span></span> signal is a quartet and its <span class="chem">CH<sub>3</sub><span></span></span> signal is a triplet.
        "1": "Ethyl methanoate 有一個乙基。它的 <span class=\"chem\">CH<sub>2</sub><span></span></span> 訊號是四峰，<span class=\"chem\">CH<sub>3</sub><span></span></span> 訊號是三峰。",
        // EN (option D): Ethanol has an ethyl group. Its <span class="chem">CH<sub>3</sub><span></span></span> signal is a triplet and its <span class="chem">CH<sub>2</sub><span></span></span> signal is a quartet.
        "3": "Ethanol 有一個乙基。它的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 訊號是三峰，<span class=\"chem\">CH<sub>2</sub><span></span></span> 訊號是四峰。",
      },
    },

    // ── s3-2h-q043 · short · challenge · AHL · Structure 3.2.11 · 4 marks
    "s3-2h-q043": {
      // EN: <p>Predict the <sup>1</sup>H NMR spectrum of ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>. Give the number of signals and, for each signal, the chemical shift range, the relative area and the splitting pattern.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">–C<b>H</b><sub>2</sub>–R</span></th><td>1.3–1.4</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr></tbody></table></div>
      stem: "<p>預測 (predict) ethyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span> 的 <sup>1</sup>H NMR 譜。寫出訊號的數目，以及每個訊號的化學位移範圍、相對面積和分裂模式。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 21 節）：<sup>1</sup>H NMR 化學位移</caption><thead><tr><th scope=\"col\">質子的類型</th><th scope=\"col\">化學位移 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>2</sub>–R</span></th><td>1.3–1.4</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr></tbody></table></div>",
      hints: [
        // EN: Find the hydrogen environments first: there are two different <span class="chem">CH<sub>3</sub><span></span></span> groups and one <span class="chem">CH<sub>2</sub><span></span></span> group.
        "先找出氫環境：有兩個不同的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團和一個 <span class=\"chem\">CH<sub>2</sub><span></span></span> 基團。",
        // EN: For shifts, check what each carbon is bonded to: the C=O carbon, the O atom, or only carbon.
        "判斷化學位移時，看每個碳連接到甚麼：C=O 的碳、O 原子，還是只有碳。",
        // EN: For splitting, count the H atoms on the neighbouring carbon and add one.
        "判斷分裂時，數相鄰碳上的 H 原子，再加一。",
      ],
      // EN: <p>Work through one signal at a time and fill in a table: environment, shift, area, splitting.</p><ul><li><span class="chem">CH<sub>3</sub><span></span></span> next to the ester C=O: no H on the neighbouring carbon, so a singlet.</li><li>O–<span class="chem">CH<sub>2</sub><span></span></span>: three H on the neighbouring <span class="chem">CH<sub>3</sub><span></span></span>, so 3 + 1 = 4 peaks, a quartet.</li><li><span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: two H on the neighbouring <span class="chem">CH<sub>2</sub><span></span></span>, so 2 + 1 = 3 peaks, a triplet. The O atom is not a carbon with H atoms, so nothing on the other side splits the <span class="chem">CH<sub>2</sub><span></span></span> signal further.</li></ul><p>The measured signals are at about 2.0, 4.1 and 1.3 ppm, so the last one is a little above its booklet range. In an exam, quote the booklet ranges. Real spectra vary a little: the booklet says its values can change with the solvent and conditions.</p>
      solution: "<p>每次處理一個訊號，並填寫一個表：環境、化學位移、面積、分裂。</p><ul><li>酯的 C=O 旁邊的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：相鄰的碳上沒有 H，所以是單峰 (singlet)。</li><li>O–<span class=\"chem\">CH<sub>2</sub><span></span></span>：相鄰的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 上有三個 H，所以 3 + 1 = 4 個峰，是四峰 (quartet)。</li><li>乙基的 <span class=\"chem\">CH<sub>3</sub><span></span></span>：相鄰的 <span class=\"chem\">CH<sub>2</sub><span></span></span> 上有兩個 H，所以 2 + 1 = 3 個峰，是三峰 (triplet)。O 原子不是連接 H 原子的碳，所以另一邊沒有東西令 <span class=\"chem\">CH<sub>2</sub><span></span></span> 訊號進一步分裂。</li></ul><p>量度到的訊號大約在 2.0、4.1 和 1.3 ppm，所以最後一個略高於數據手冊的範圍。考試時要引用數據手冊的範圍。真實的譜會有少許差異：數據手冊說明它的數值會隨溶劑和條件而改變。</p>",
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Predicted spectrum of ethyl ethanoate (three signals)</caption><thead><tr><th scope="col">Hydrogen atoms</th><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">C<b>H</b><sub>3</sub>–C(=O)–O</th><td>2.0–2.5</td><td>3</td><td>singlet</td></tr><tr><th scope="row">O–C<b>H</b><sub>2</sub></th><td>3.7–4.8</td><td>2</td><td>quartet</td></tr><tr><th scope="row">C<b>H</b><sub>3</sub> of ethyl</th><td>0.9–1.0</td><td>3</td><td>triplet</td></tr></tbody></table></div>
      answer: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>ethyl ethanoate 的預測譜（三個訊號）</caption><thead><tr><th scope=\"col\">氫原子</th><th scope=\"col\">位移 / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">C<b>H</b><sub>3</sub>–C(=O)–O</th><td>2.0–2.5</td><td>3</td><td>單峰 (singlet)</td></tr><tr><th scope=\"row\">O–C<b>H</b><sub>2</sub></th><td>3.7–4.8</td><td>2</td><td>四峰 (quartet)</td></tr><tr><th scope=\"row\">乙基的 C<b>H</b><sub>3</sub></th><td>0.9–1.0</td><td>3</td><td>三峰 (triplet)</td></tr></tbody></table></div>",
      markscheme: [
        // EN: Three signals.
        "三個訊號。",
        // EN: Chemical shifts: 2.0–2.5 ppm (CH₃ next to C=O of the ester), 3.7–4.8 ppm (O–CH₂) and 0.9–1.0 ppm (CH₃ of ethyl). All three needed.
        "化學位移：2.0–2.5 ppm（酯的 C=O 旁邊的 CH₃）、3.7–4.8 ppm（O–CH₂）和 0.9–1.0 ppm（乙基的 CH₃）。三個都要寫出。",
        // EN: Relative areas 3 : 2 : 3, matched to the correct groups.
        "相對面積 3 : 2 : 3，並配對到正確的基團。",
        // EN: Splitting: singlet (CH₃CO), quartet (OCH₂), triplet (CH₃ of ethyl). Accept 1, 4 and 3 peaks.
        "分裂：單峰（CH₃CO）、四峰（OCH₂）、三峰（乙基的 CH₃）。接受 1、4 和 3 個峰。",
      ],
    },

    // ── s3-2h-q044 · mcq · challenge · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q044": {
      // EN: <p>The sketch and table show the <sup>1</sup>H NMR spectrum of a compound with the molecular formula <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub><span></span></span>. The number above each signal is its relative area.</p><p><svg class="q-fig" viewBox="0 0 300 150" width="300" height="150" style="max-width:100%;height:auto" role="img" aria-label="NMR sketch with a chemical shift axis from 5 ppm on the left to 0 ppm on the right. A single peak of area 3 at 3.7 ppm, a group of four peaks of area 2 at 2.3 ppm, and a group of three peaks of area 3 at 1.0 ppm."><path d="M12 116H288" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="288.0" y1="116" x2="288.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="288.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="232.8" y1="116" x2="232.8" y2="120" stroke="currentColor" stroke-width="1"/><text x="232.8" y="132" text-anchor="middle" font-size="11" fill="currentColor">1</text><line x1="177.6" y1="116" x2="177.6" y2="120" stroke="currentColor" stroke-width="1"/><text x="177.6" y="132" text-anchor="middle" font-size="11" fill="currentColor">2</text><line x1="122.4" y1="116" x2="122.4" y2="120" stroke="currentColor" stroke-width="1"/><text x="122.4" y="132" text-anchor="middle" font-size="11" fill="currentColor">3</text><line x1="67.2" y1="116" x2="67.2" y2="120" stroke="currentColor" stroke-width="1"/><text x="67.2" y="132" text-anchor="middle" font-size="11" fill="currentColor">4</text><line x1="12.0" y1="116" x2="12.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="12.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">5</text><text x="150" y="147" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text><line x1="83.8" y1="116" x2="83.8" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="83.8" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text><line x1="153.5" y1="116" x2="153.5" y2="108.7" stroke="currentColor" stroke-width="1.8"/><line x1="158.5" y1="116" x2="158.5" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="163.5" y1="116" x2="163.5" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="168.5" y1="116" x2="168.5" y2="108.7" stroke="currentColor" stroke-width="1.8"/><text x="161.0" y="89.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">2</text><line x1="227.8" y1="116" x2="227.8" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="232.8" y1="116" x2="232.8" y2="72.0" stroke="currentColor" stroke-width="1.8"/><line x1="237.8" y1="116" x2="237.8" y2="94.0" stroke="currentColor" stroke-width="1.8"/><text x="232.8" y="67.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text></svg></p><div class="table-scroll" tabindex="0"><table class="data"><caption>Signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">3.7</th><td>3</td><td>singlet</td></tr><tr><th scope="row">2.3</th><td>2</td><td>quartet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr></tbody></table></div><p>Which compound is it?</p>
      stem: "<p>略圖和表顯示一個分子式為 <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub><span></span></span> 的化合物的 <sup>1</sup>H NMR 譜。每個訊號上方的數字是它的相對面積。</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"NMR 略圖，化學位移軸由左邊的 5 ppm 至右邊的 0 ppm。3.7 ppm 有一個面積為 3 的單峰，2.3 ppm 有一組面積為 2 的四個峰，1.0 ppm 有一組面積為 3 的三個峰。\"><path d=\"M12 116H288\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"288.0\" y1=\"116\" x2=\"288.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"288.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"232.8\" y1=\"116\" x2=\"232.8\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.8\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">1</text><line x1=\"177.6\" y1=\"116\" x2=\"177.6\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"177.6\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"122.4\" y1=\"116\" x2=\"122.4\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"122.4\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">3</text><line x1=\"67.2\" y1=\"116\" x2=\"67.2\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"67.2\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"12.0\" y1=\"116\" x2=\"12.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"12.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">5</text><text x=\"150\" y=\"147\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">化學位移 / ppm</text><line x1=\"83.8\" y1=\"116\" x2=\"83.8\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"83.8\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text><line x1=\"153.5\" y1=\"116\" x2=\"153.5\" y2=\"108.7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"158.5\" y1=\"116\" x2=\"158.5\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"163.5\" y1=\"116\" x2=\"163.5\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"168.5\" y1=\"116\" x2=\"168.5\" y2=\"108.7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"161.0\" y=\"89.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">2</text><line x1=\"227.8\" y1=\"116\" x2=\"227.8\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"232.8\" y1=\"116\" x2=\"232.8\" y2=\"72.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"237.8\" y1=\"116\" x2=\"237.8\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"232.8\" y=\"67.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text></svg></p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>訊號</caption><thead><tr><th scope=\"col\">位移 / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">3.7</th><td>3</td><td>單峰 (singlet)</td></tr><tr><th scope=\"row\">2.3</th><td>2</td><td>四峰 (quartet)</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>三峰 (triplet)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 21 節）：<sup>1</sup>H NMR 化學位移</caption><thead><tr><th scope=\"col\">質子的類型</th><th scope=\"col\">化學位移 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr></tbody></table></div><p>它是哪一個化合物？</p>",
      options: [
        // EN: ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "ethyl ethanoate，<span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: methyl propanoate, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>
        "methyl propanoate，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: butanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>
        "butanoic acid，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>",
        // EN: propyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "propyl methanoate，<span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: A triplet of area 3 with a quartet of area 2 is an ethyl group, <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>.
        "面積 3 的三峰加上面積 2 的四峰是乙基 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>。",
        // EN: The singlet of area 3 is a <span class="chem">CH<sub>3</sub><span></span></span> group with no H on the neighbouring atom.
        "面積 3 的單峰是一個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團，它相鄰的原子上沒有 H。",
        // EN: Now use the shifts. Which group is bonded to O (3.7–4.8 ppm) and which is next to C=O (2.0–2.5 ppm)?
        "現在利用化學位移。哪一個基團連接到 O（3.7–4.8 ppm），哪一個在 C=O 旁邊（2.0–2.5 ppm）？",
      ],
      // EN: <ul><li>Triplet (3 H) and quartet (2 H): an ethyl group.</li><li>The quartet is at 2.3 ppm, in the range 2.0–2.5 ppm. So the <span class="chem">CH<sub>2</sub><span></span></span> is next to the C=O of an ester: <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>–C(=O)–O.</li><li>The singlet (3 H) is at 3.7 ppm, in the range 3.7–4.8 ppm. So this <span class="chem">CH<sub>3</sub><span></span></span> is bonded to the ester oxygen: O–<span class="chem">CH<sub>3</sub><span></span></span>.</li></ul><p>The compound is methyl propanoate, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>. The triplet at 1.0 ppm is in the range 0.9–1.0 ppm: the <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group.</p>
      solution: "<ul><li>三峰（3 H）和四峰（2 H）：乙基。</li><li>四峰在 2.3 ppm，在 2.0–2.5 ppm 的範圍內。所以 <span class=\"chem\">CH<sub>2</sub><span></span></span> 在酯的 C=O 旁邊：<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>–C(=O)–O。</li><li>單峰（3 H）在 3.7 ppm，在 3.7–4.8 ppm 的範圍內。所以這個 <span class=\"chem\">CH<sub>3</sub><span></span></span> 連接到酯的氧上：O–<span class=\"chem\">CH<sub>3</sub><span></span></span>。</li></ul><p>這個化合物是 methyl propanoate（丙酸甲酯）<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>。1.0 ppm 的三峰在 0.9–1.0 ppm 的範圍內：是乙基的 <span class=\"chem\">CH<sub>3</sub><span></span></span>。</p>",
      misconception: {
        // EN (option A): Ethyl ethanoate also gives a singlet, a quartet and a triplet, but in different places. Its quartet (O–<span class="chem">CH<sub>2</sub><span></span></span>) would be at 3.7–4.8 ppm and its singlet (<span class="chem">CH<sub>3</sub><span></span></span> next to C=O) at 2.0–2.5 ppm. Here they are the other way round.
        "0": "Ethyl ethanoate 也產生一個單峰、一個四峰和一個三峰，但位置不同。它的四峰（O–<span class=\"chem\">CH<sub>2</sub><span></span></span>）會在 3.7–4.8 ppm，單峰（C=O 旁邊的 <span class=\"chem\">CH<sub>3</sub><span></span></span>）會在 2.0–2.5 ppm。這裏剛好相反。",
        // EN (option C): Butanoic acid has four hydrogen environments, and its COOH hydrogen would give a signal at 9.0–13.0 ppm.
        "2": "Butanoic acid 有四個氫環境，而且它的 COOH 氫會在 9.0–13.0 ppm 產生訊號。",
        // EN (option D): Propyl methanoate has four hydrogen environments (H–C=O and three groups in the propyl chain), so it would give four signals.
        "3": "Propyl methanoate 有四個氫環境（H–C=O 和丙基鏈上的三個基團），所以會產生四個訊號。",
      },
    },

    // ── s3-2h-q045 · mcq · foundation · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q045": {
      // EN: <p>Three techniques are often used together to find the structure of an organic compound. Which row matches each technique with the main information it gives?</p>
      stem: "<p>要找出有機化合物的結構，常常會一起使用三種技術。哪一行正確配對每種技術和它提供的主要資料？</p>",
      options: [
        // EN: Mass spectrometry: relative molecular mass and fragments. Infrared: bonds present. <sup>1</sup>H NMR: hydrogen environments.
        "質譜法：相對分子質量和碎片。紅外光譜法：存在的鍵。<sup>1</sup>H NMR：氫環境。",
        // EN: Mass spectrometry: bonds present. Infrared: relative molecular mass and fragments. <sup>1</sup>H NMR: hydrogen environments.
        "質譜法：存在的鍵。紅外光譜法：相對分子質量和碎片。<sup>1</sup>H NMR：氫環境。",
        // EN: Mass spectrometry: relative molecular mass and fragments. Infrared: hydrogen environments. <sup>1</sup>H NMR: bonds present.
        "質譜法：相對分子質量和碎片。紅外光譜法：氫環境。<sup>1</sup>H NMR：存在的鍵。",
        // EN: Mass spectrometry: hydrogen environments. Infrared: bonds present. <sup>1</sup>H NMR: relative molecular mass and fragments.
        "質譜法：氫環境。紅外光譜法：存在的鍵。<sup>1</sup>H NMR：相對分子質量和碎片。",
      ],
      hints: [
        // EN: Think about the horizontal axis of each spectrum: m/z, wavenumber, chemical shift.
        "想想每種譜的橫軸：m/z、波數、化學位移。",
      ],
      // EN: <ul><li><strong>Mass spectrometry:</strong> the molecular ion gives M<sub>r</sub>, and the fragments show which groups can break off.</li><li><strong>Infrared spectroscopy:</strong> the absorptions show which bonds, and so which functional groups, are present.</li><li><strong><sup>1</sup>H NMR:</strong> the number of signals, their shifts, areas and splitting show the hydrogen environments.</li></ul><p>No single technique gives the whole structure. Together they do.</p>
      solution: "<ul><li><strong>質譜法 (mass spectrometry)：</strong>分子離子給出 M<sub>r</sub>，碎片顯示哪些基團會斷開。</li><li><strong>紅外光譜法 (infrared spectroscopy)：</strong>吸收顯示存在哪些鍵，從而知道有哪些官能基。</li><li><strong><sup>1</sup>H NMR：</strong>訊號的數目、化學位移、面積和分裂顯示氫環境。</li></ul><p>沒有一種技術能單獨給出整個結構。三種一起用就可以。</p>",
      misconception: {
        // EN (option B): Mass spectrometry and infrared are swapped. A mass spectrum has m/z on its axis, so it gives masses. An infrared spectrum shows which bonds absorb.
        "1": "質譜法和紅外光譜法對調了。質譜的橫軸是 m/z，所以它給出質量。紅外光譜顯示哪些鍵吸收。",
        // EN (option C): Infrared and NMR are swapped. Infrared absorptions come from bonds that vibrate. NMR signals come from hydrogen nuclei in different environments.
        "2": "紅外光譜法和 NMR 對調了。紅外吸收來自振動的鍵。NMR 訊號來自處於不同環境的氫原子核。",
        // EN (option D): Mass spectrometry and NMR are swapped. The molecular ion peak in a mass spectrum gives the relative molecular mass.
        "3": "質譜法和 NMR 對調了。質譜中的分子離子峰給出相對分子質量。",
      },
    },

    // ── s3-2h-q046 · numeric · exam · AHL · Structure 3.2.12 · 2 marks
    "s3-2h-q046": {
      // EN: <p>A compound contains 54.5% carbon, 9.2% hydrogen and 36.3% oxygen by mass. Its mass spectrum has the molecular ion peak at m/z 88.</p><p>How many carbon atoms are there in one molecule of the compound?</p>
      stem: "<p>一個化合物按質量計含 54.5% 碳、9.2% 氫和 36.3% 氧。它的質譜中，分子離子峰在 m/z 88。</p><p>這個化合物的一個分子中有多少個碳原子？</p>",
      hints: [
        // EN: Find the empirical formula first: divide each percentage by the relative atomic mass, then divide by the smallest result.
        "先找出實驗式：把每個百分率除以相對原子質量，再除以最小的結果。",
        // EN: Work out the mass of one empirical formula unit.
        "算出一個實驗式單位的質量。",
        // EN: Compare it with 88. How many empirical units fit into the molecule?
        "把它與 88 比較。分子中有多少個實驗式單位？",
      ],
      // EN: <p>Step 1: empirical formula (in 100 g of compound).</p><div class="worked__math">C: 54.5 ÷ 12.01 = 4.54 mol</div><div class="worked__math">H: 9.2 ÷ 1.01 = 9.11 mol</div><div class="worked__math">O: 36.3 ÷ 16.00 = 2.27 mol</div><div class="worked__math">ratio C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O</div><p>Step 2: molecular formula.</p><div class="worked__math">empirical mass = 2(12.01) + 4(1.01) + 16.00 = 44.06</div><div class="worked__math">88 ÷ 44.06 ≈ 2</div><div class="worked__math">molecular formula = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></div><p>One molecule contains <strong>4</strong> carbon atoms.</p>
      solution: "<p>第 1 步：實驗式（以 100 g 化合物計）。</p><div class=\"worked__math\">C：54.5 ÷ 12.01 = 4.54 mol</div><div class=\"worked__math\">H：9.2 ÷ 1.01 = 9.11 mol</div><div class=\"worked__math\">O：36.3 ÷ 16.00 = 2.27 mol</div><div class=\"worked__math\">比 C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O</div><p>第 2 步：分子式。</p><div class=\"worked__math\">實驗式質量 = 2(12.01) + 4(1.01) + 16.00 = 44.06</div><div class=\"worked__math\">88 ÷ 44.06 ≈ 2</div><div class=\"worked__math\">分子式 = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></div><p>一個分子含有 <strong>4</strong> 個碳原子。</p>",
      // EN: C atoms
      unit: "個 C 原子",
    },

    // ── s3-2h-q047 · mcq · exam · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q047": {
      // EN: <p>Data for an unknown compound:</p><ul><li>Mass spectrum: molecular ion at m/z 74.</li><li>Infrared: strong, very broad absorption at 2500–3000 cm<sup>−1</sup>; strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: three signals with areas in the ratio 3 : 2 : 1.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><p>Which compound fits all the data?</p>
      stem: "<p>一個未知化合物的數據：</p><ul><li>質譜：分子離子在 m/z 74。</li><li>紅外光譜：2500–3000 cm<sup>−1</sup> 有強而很寬的吸收；1715 cm<sup>−1</sup> 有強吸收。</li><li><sup>1</sup>H NMR：三個訊號，面積比是 3 : 2 : 1。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div><p>哪一個化合物符合全部數據？</p>",
      options: [
        // EN: butan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "butan-1-ol，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate，<span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: ethyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "ethyl methanoate，<span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>
        "propanoic acid，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>",
      ],
      hints: [
        // EN: All four options have M<sub>r</sub> = 74, so the mass spectrum alone cannot decide.
        "四個選項的 M<sub>r</sub> 都是 74，所以單靠質譜不能決定。",
        // EN: Use the infrared data to find the functional group.
        "利用紅外數據找出官能基。",
        // EN: Then check the number of NMR signals.
        "然後核對 NMR 訊號的數目。",
      ],
      // EN: <ul><li>m/z 74 fits all four compounds.</li><li>Infrared: C=O (1700–1750 cm<sup>−1</sup>) and the very broad O–H of a carboxylic acid (2500–3000 cm<sup>−1</sup>). The compound has a –COOH group.</li><li>NMR: propanoic acid has three environments, <span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub><span></span></span> and COOH, with areas 3 : 2 : 1.</li></ul><p>The compound is propanoic acid. Each technique removes some of the options. Use all of them.</p>
      solution: "<ul><li>m/z 74 符合全部四個化合物。</li><li>紅外光譜：C=O（1700–1750 cm<sup>−1</sup>）和羧酸的很寬的 O–H（2500–3000 cm<sup>−1</sup>）。這個化合物有 –COOH 基團。</li><li>NMR：propanoic acid 有三個環境，即 <span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub><span></span></span> 和 COOH，面積比 3 : 2 : 1。</li></ul><p>這個化合物是 propanoic acid（丙酸）。每種技術都排除了部分選項。全部都要用上。</p>",
      misconception: {
        // EN (option A): Butan-1-ol does have M<sub>r</sub> = 74, but it has no C=O bond, its O–H absorption is at 3200–3600 cm<sup>−1</sup>, and it gives five NMR signals.
        "0": "Butan-1-ol 的 M<sub>r</sub> 確實是 74，但它沒有 C=O 鍵，它的 O–H 吸收在 3200–3600 cm<sup>−1</sup>，而且它產生五個 NMR 訊號。",
        // EN (option B): Methyl ethanoate has M<sub>r</sub> = 74 and a C=O bond, but no O–H bond, and it gives only two NMR signals.
        "1": "Methyl ethanoate 的 M<sub>r</sub> = 74，也有 C=O 鍵，但沒有 O–H 鍵，而且只產生兩個 NMR 訊號。",
        // EN (option C): Ethyl methanoate has M<sub>r</sub> = 74, a C=O bond and three signals in the ratio 1 : 2 : 3. But it has no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "2": "Ethyl methanoate 的 M<sub>r</sub> = 74，有 C=O 鍵，也有三個比為 1 : 2 : 3 的訊號。但它沒有 O–H 鍵，所以不可能在 2500–3000 cm<sup>−1</sup> 產生很寬的吸收。",
      },
    },

    // ── s3-2h-q048 · mcq · challenge · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q048": {
      // EN: <p>A compound has the molecular formula <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>.</p><ul><li>Mass spectrum: peaks at m/z 72, 57 and 43 (tallest).</li><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>; no absorption above 3100 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption><sup>1</sup>H NMR signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">2.5</th><td>2</td><td>quartet</td></tr><tr><th scope="row">2.2</th><td>3</td><td>singlet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr><tr><th scope="row"><span class="chem">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div><p>Which compound is it?</p>
      stem: "<p>一個化合物的分子式是 <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<span></span></span>。</p><ul><li>質譜：峰在 m/z 72、57 和 43（最高）。</li><li>紅外光譜：1715 cm<sup>−1</sup> 有強吸收；3100 cm<sup>−1</sup> 以上沒有吸收。</li><li><sup>1</sup>H NMR：見下表。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption><sup>1</sup>H NMR 訊號</caption><thead><tr><th scope=\"col\">位移 / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">2.5</th><td>2</td><td>四峰 (quartet)</td></tr><tr><th scope=\"row\">2.2</th><td>3</td><td>單峰 (singlet)</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>三峰 (triplet)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 21 節）：<sup>1</sup>H NMR 化學位移</caption><thead><tr><th scope=\"col\">質子的類型</th><th scope=\"col\">化學位移 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div><p>它是哪一個化合物？</p>",
      options: [
        // EN: butanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>
        "butanal，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>",
        // EN: butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "butanone，<span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 2-methylpropanal, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCHO<span></span></span>
        "2-methylpropanal，<span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>CHCHO<span></span></span>",
        // EN: but-3-en-1-ol, <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "but-3-en-1-ol，<span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
      ],
      hints: [
        // EN: Infrared first: which functional group is present, and which is ruled out?
        "先看紅外光譜：有哪一個官能基？哪一個可以排除？",
        // EN: In the NMR data, a triplet (3 H) with a quartet (2 H) is an ethyl group. What is the singlet (3 H)?
        "在 NMR 數據中，三峰（3 H）加四峰（2 H）是乙基。單峰（3 H）是甚麼？",
        // EN: Check with the mass spectrum: 72 − 57 and 72 − 43.
        "用質譜核對：72 − 57 和 72 − 43。",
      ],
      // EN: <ul><li><strong>Infrared:</strong> 1715 cm<sup>−1</sup> is C=O. No absorption at 3200–3600 cm<sup>−1</sup>, so there is no O–H. The compound is an aldehyde or a ketone.</li><li><strong>NMR:</strong> no signal at 9.4–10.0 ppm, so it is not an aldehyde. Triplet (3 H) + quartet (2 H) = <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>. Singlet (3 H) = <span class="chem">CH<sub>3</sub><span></span></span> with no H on the neighbouring carbon. The signals at 2.2 and 2.5 ppm are in the range 2.2–2.7 ppm: H atoms on carbons next to C=O.</li><li><strong>Mass spectrum:</strong> 72 − 57 = 15, loss of •<span class="chem">CH<sub>3</sub><span></span></span>. 72 − 43 = 29, loss of •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>.</li></ul><p>The compound is butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>.</p>
      solution: "<ul><li><strong>紅外光譜：</strong>1715 cm<sup>−1</sup> 是 C=O。在 3200–3600 cm<sup>−1</sup> 沒有吸收，所以沒有 O–H。這個化合物是醛或酮。</li><li><strong>NMR：</strong>在 9.4–10.0 ppm 沒有訊號，所以不是醛。三峰（3 H）+ 四峰（2 H）= <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>。單峰（3 H）= 相鄰的碳上沒有 H 的 <span class=\"chem\">CH<sub>3</sub><span></span></span>。2.2 和 2.5 ppm 的訊號在 2.2–2.7 ppm 的範圍內：是 C=O 旁邊的碳上的 H 原子。</li><li><strong>質譜：</strong>72 − 57 = 15，失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span>。72 − 43 = 29，失去 •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>，剩下 <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>。</li></ul><p>這個化合物是 butanone（丁酮）<span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>。</p>",
      misconception: {
        // EN (option A): Butanal has a C=O bond, but it has four hydrogen environments, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.
        "0": "Butanal 有 C=O 鍵，但它有四個氫環境，而且它的 CHO 氫會在 9.4–10.0 ppm 產生訊號。",
        // EN (option C): 2-methylpropanal has three signals, but their areas are 6 : 1 : 1, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.
        "2": "2-methylpropanal 有三個訊號，但面積比是 6 : 1 : 1，而且它的 CHO 氫會在 9.4–10.0 ppm 產生訊號。",
        // EN (option D): But-3-en-1-ol has an O–H bond, which would absorb at 3200–3600 cm<sup>−1</sup>, and no C=O bond to absorb at 1715 cm<sup>−1</sup>.
        "3": "But-3-en-1-ol 有 O–H 鍵，會在 3200–3600 cm<sup>−1</sup> 吸收，而且沒有 C=O 鍵可以在 1715 cm<sup>−1</sup> 吸收。",
      },
    },

    // ── s3-2h-q049 · short · challenge · AHL · Structure 3.2.12 · 4 marks
    "s3-2h-q049": {
      // EN: <p>A compound has the molecular formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<span></span></span>.</p><ul><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: one signal, a singlet.</li><li>Mass spectrum: molecular ion at m/z 58; tallest peak at m/z 43.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Deduce the structure of the compound. Explain how each piece of data supports your answer.</p>
      stem: "<p>一個化合物的分子式是 <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<span></span></span>。</p><ul><li>紅外光譜：1715 cm<sup>−1</sup> 有強吸收。</li><li><sup>1</sup>H NMR：一個訊號，是單峰 (singlet)。</li><li>質譜：分子離子在 m/z 58；最高的峰在 m/z 43。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 22 節）：質譜中失去的碎片</caption><thead><tr><th scope=\"col\">失去的質量</th><th scope=\"col\">可能失去的中性碎片</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 或 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 或 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>推斷 (deduce) 這個化合物的結構。解釋 (explain) 每項數據怎樣支持你的答案。</p>",
      hints: [
        // EN: Start with the infrared absorption. Which bond is it?
        "由紅外吸收開始。它是哪一個鍵？",
        // EN: There are only two structures with formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<span></span></span> that contain C=O. Draw both and count their hydrogen environments.
        "分子式為 <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<span></span></span> 而又含有 C=O 的結構只有兩個。把兩個都畫出來，數一數它們的氫環境。",
        // EN: Subtract 43 from 58 and look up the mass lost.
        "用 58 減去 43，查出失去的質量。",
      ],
      // EN: <p>A good order of attack: infrared for the functional group, NMR for the carbon skeleton, mass spectrum as a check.</p><div class="worked__math">58 − 43 = 15 → •CH<sub>3</sub> lost</div><div class="worked__math">CH<sub>3</sub>COCH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>3</sub></div><p>In a "deduce and explain" question, link every piece of data to a feature of the structure. Naming the compound without the evidence earns one mark only.</p>
      solution: "<p>一個好的解題次序：用紅外光譜找官能基，用 NMR 找碳骨架，用質譜核對。</p><div class=\"worked__math\">58 − 43 = 15 → 失去 •CH<sub>3</sub></div><div class=\"worked__math\">CH<sub>3</sub>COCH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>3</sub></div><p>在「推斷並解釋」(deduce and explain) 的題目中，要把每一項數據與結構的一個特徵連繫起來。只寫出化合物的名稱而沒有證據，只得一分。</p>",
      // EN: <p>The compound is propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>.</p><ul><li>Infrared: 1715 cm<sup>−1</sup> is in the range 1700–1750 cm<sup>−1</sup>, so there is a C=O bond. With one O atom, the compound is an aldehyde or a ketone.</li><li>NMR: one signal means all six H atoms are in the same environment. That fits two equivalent <span class="chem">CH<sub>3</sub><span></span></span> groups. (Propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>, would give three signals.)</li><li>The signal is a singlet because the neighbouring carbon, the C=O carbon, holds no H atoms.</li><li>Mass spectrum: 58 − 43 = 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span> at m/z 43.</li></ul>
      answer: "<p>這個化合物是 propanone，<span class=\"chem\">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>。</p><ul><li>紅外光譜：1715 cm<sup>−1</sup> 在 1700–1750 cm<sup>−1</sup> 的範圍內，所以有 C=O 鍵。只有一個 O 原子，所以這個化合物是醛或酮。</li><li>NMR：一個訊號表示六個 H 原子全部處於同一個環境。這符合兩個等價的 <span class=\"chem\">CH<sub>3</sub><span></span></span> 基團。（Propanal <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span> 會產生三個訊號。）</li><li>訊號是單峰，因為相鄰的碳（C=O 的碳）沒有連接 H 原子。</li><li>質譜：58 − 43 = 15，即失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span>，剩下 m/z 43 的 <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>。</li></ul>",
      markscheme: [
        // EN: IR: 1715 cm⁻¹ / 1700–1750 cm⁻¹ shows a C=O bond (aldehyde or ketone).
        "IR：1715 cm⁻¹／1700–1750 cm⁻¹ 顯示有 C=O 鍵（醛或酮）。",
        // EN: NMR: one signal, so all (six) H atoms are in one chemical environment / two equivalent CH₃ groups.
        "NMR：一個訊號，所以全部（六個）H 原子處於同一個化學環境／兩個等價的 CH₃ 基團。",
        // EN: Structure CH₃COCH₃ / propanone (name or any structural formula).
        "結構 CH₃COCH₃／propanone（名稱或任何結構式）。",
        // EN: MS: m/z 43 is M − 15, loss of •CH₃ / the ion CH₃CO⁺ (with its + charge); OR singlet because there are no H atoms on the adjacent (C=O) carbon.
        "MS：m/z 43 是 M − 15，失去 •CH₃／離子 CH₃CO⁺（要有 + 電荷）；或：是單峰，因為相鄰的（C=O）碳上沒有 H 原子。",
      ],
    },

    // ── s3-2h-q050 · short · challenge · AHL · Structure 3.2.12 · 5 marks
    "s3-2h-q050": {
      // EN: <p>A liquid contains 52.1% carbon, 13.2% hydrogen and 34.7% oxygen by mass.</p><ul><li>Mass spectrum: molecular ion at m/z 46; tallest peak at m/z 31.</li><li>Infrared: strong, broad absorption at 3350 cm<sup>−1</sup>; no absorption at 1700–1750 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption><sup>1</sup>H NMR signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">3.7</th><td>2</td><td>quartet</td></tr><tr><th scope="row">2.6</th><td>1</td><td>singlet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Determine the empirical formula, the molecular formula and the structure of the compound. Show how the spectra support the structure.</p>
      stem: "<p>一種液體按質量計含 52.1% 碳、13.2% 氫和 34.7% 氧。</p><ul><li>質譜：分子離子在 m/z 46；最高的峰在 m/z 31。</li><li>紅外光譜：3350 cm<sup>−1</sup> 有強而寬的吸收；1700–1750 cm<sup>−1</sup> 沒有吸收。</li><li><sup>1</sup>H NMR：見下表。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption><sup>1</sup>H NMR 訊號</caption><thead><tr><th scope=\"col\">位移 / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">3.7</th><td>2</td><td>四峰 (quartet)</td></tr><tr><th scope=\"row\">2.6</th><td>1</td><td>單峰 (singlet)</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>三峰 (triplet)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 20 節）：紅外吸收範圍</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">有機分子的類別 (Types of organic molecules)</th><th scope=\"col\">波數 / cm<sup>−1</sup></th><th scope=\"col\">強度</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>醛、酮、羧酸和酯 (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強 (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>羧酸（有氫鍵）(carboxylic acids)</td><td>2500–3000</td><td>強、很寬 (strong, very broad)</td></tr><tr><th scope=\"row\">O–H</th><td>醇和酚（有氫鍵）(alcohols and phenols)</td><td>3200–3600</td><td>強、寬 (strong, broad)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 21 節）：<sup>1</sup>H NMR 化學位移</caption><thead><tr><th scope=\"col\">質子的類型</th><th scope=\"col\">化學位移 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>摘自數據手冊（第 22 節）：質譜中失去的碎片</caption><thead><tr><th scope=\"col\">失去的質量</th><th scope=\"col\">可能失去的中性碎片</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 或 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 或 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>求出 (determine) 這個化合物的實驗式、分子式和結構。說明各個譜怎樣支持這個結構。</p>",
      hints: [
        // EN: Start with the percentages: divide each by the relative atomic mass, then by the smallest answer.
        "由百分率開始：把每個百分率除以相對原子質量，再除以最小的答案。",
        // EN: Compare the empirical formula mass with the m/z of the molecular ion.
        "把實驗式質量與分子離子的 m/z 比較。",
        // EN: There are only two structures with this molecular formula: an alcohol and an ether. Which one do the infrared and NMR data fit?
        "這個分子式只有兩個結構：一個醇和一個醚。紅外和 NMR 數據符合哪一個？",
      ],
      // EN: <p>Any five of the six marking points give full marks. The route is always the same:</p><ol><li>composition → empirical formula;</li><li>molecular ion → molecular formula;</li><li>infrared → functional group;</li><li>NMR → how the atoms are joined;</li><li>mass spectrum fragments → check.</li></ol><p>The isomer methoxymethane, <span class="chem">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>, would give no O–H absorption and only one NMR signal. In a measured spectrum of ethanol the <span class="chem">CH<sub>3</sub><span></span></span> triplet is nearer 1.2 ppm. Real spectra vary a little: the booklet says its values can change with the solvent and conditions.</p>
      solution: "<p>六個評分要點中答對任何五個就得滿分。解題的路線總是一樣：</p><ol><li>組成 → 實驗式；</li><li>分子離子 → 分子式；</li><li>紅外光譜 → 官能基；</li><li>NMR → 原子怎樣連接；</li><li>質譜碎片 → 核對。</li></ol><p>同分異構體 methoxymethane（甲氧基甲烷）<span class=\"chem\">CH<sub>3</sub>OCH<sub>3</sub><span></span></span> 不會有 O–H 吸收，而且只有一個 NMR 訊號。在實際量度的 ethanol 譜中，<span class=\"chem\">CH<sub>3</sub><span></span></span> 三峰較接近 1.2 ppm。真實的譜會有少許差異：數據手冊說明它的數值會隨溶劑和條件而改變。</p>",
      // EN: <p><strong>Empirical formula:</strong></p><div class="worked__math">C: 52.1 ÷ 12.01 = 4.34</div><div class="worked__math">H: 13.2 ÷ 1.01 = 13.07</div><div class="worked__math">O: 34.7 ÷ 16.00 = 2.17</div><div class="worked__math">ratio = 2.00 : 6.03 : 1 → C<sub>2</sub>H<sub>6</sub>O</div><p><strong>Molecular formula:</strong> the empirical formula mass is 2(12.01) + 6(1.01) + 16.00 = 46.08, which matches the molecular ion at m/z 46. So the molecular formula is <span class="chem">C<sub>2</sub>H<sub>6</sub>O<span></span></span>.</p><p><strong>Infrared:</strong> the broad absorption at 3350 cm<sup>−1</sup> (3200–3600 cm<sup>−1</sup>) is the O–H bond of an alcohol. So the compound is not the ether <span class="chem">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>.</p><p><strong>NMR:</strong> three signals with areas 3 : 2 : 1. The triplet (3 H) and quartet (2 H) show an ethyl group, <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>. The quartet at 3.7 ppm (3.3–3.7 ppm) is a <span class="chem">CH<sub>2</sub><span></span></span> bonded to O. The singlet (1 H) is the O–H hydrogen.</p><p><strong>Mass spectrum:</strong> 46 − 31 = 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>2</sub>OH<sup>+</sup><span></span></span>.</p><p><strong>Structure:</strong> ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>.</p>
      answer: "<p><strong>實驗式：</strong></p><div class=\"worked__math\">C：52.1 ÷ 12.01 = 4.34</div><div class=\"worked__math\">H：13.2 ÷ 1.01 = 13.07</div><div class=\"worked__math\">O：34.7 ÷ 16.00 = 2.17</div><div class=\"worked__math\">比 = 2.00 : 6.03 : 1 → C<sub>2</sub>H<sub>6</sub>O</div><p><strong>分子式：</strong>實驗式質量是 2(12.01) + 6(1.01) + 16.00 = 46.08，與 m/z 46 的分子離子吻合。所以分子式是 <span class=\"chem\">C<sub>2</sub>H<sub>6</sub>O<span></span></span>。</p><p><strong>紅外光譜：</strong>3350 cm<sup>−1</sup>（3200–3600 cm<sup>−1</sup>）的寬吸收是醇的 O–H 鍵。所以這個化合物不是醚 <span class=\"chem\">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>。</p><p><strong>NMR：</strong>三個訊號，面積比 3 : 2 : 1。三峰（3 H）和四峰（2 H）顯示有乙基 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>。3.7 ppm（3.3–3.7 ppm）的四峰是連接到 O 的 <span class=\"chem\">CH<sub>2</sub><span></span></span>。單峰（1 H）是 O–H 的氫。</p><p><strong>質譜：</strong>46 − 31 = 15，即失去 •<span class=\"chem\">CH<sub>3</sub><span></span></span>，剩下 <span class=\"chem\">CH<sub>2</sub>OH<sup>+</sup><span></span></span>。</p><p><strong>結構：</strong>ethanol，<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>。</p>",
      markscheme: [
        // EN: Empirical formula C₂H₆O, with working (mole ratio 4.34 : 13.07 : 2.17, or 2 : 6 : 1).
        "實驗式 C₂H₆O，附計算步驟（摩爾比 4.34 : 13.07 : 2.17，或 2 : 6 : 1）。",
        // EN: Molecular formula C₂H₆O, because the empirical formula mass (46) equals the m/z of the molecular ion.
        "分子式 C₂H₆O，因為實驗式質量（46）等於分子離子的 m/z。",
        // EN: IR: absorption at 3200–3600 cm⁻¹ shows O–H of an alcohol (so not an ether); accept "no C=O".
        "IR：3200–3600 cm⁻¹ 的吸收顯示醇的 O–H（所以不是醚）；接受「沒有 C=O」。",
        // EN: NMR: three H environments in ratio 3 : 2 : 1, AND triplet + quartet show CH₃CH₂ / the quartet CH₂ is next to CH₃.
        "NMR：三個 H 環境，比為 3 : 2 : 1，並且三峰 + 四峰顯示 CH₃CH₂／四峰的 CH₂ 在 CH₃ 旁邊。",
        // EN: Structure CH₃CH₂OH / ethanol.
        "結構 CH₃CH₂OH／ethanol。",
        // EN: MS: m/z 31 is M − 15, loss of •CH₃ / the ion CH₂OH⁺ (with its + charge).
        "MS：m/z 31 是 M − 15，失去 •CH₃／離子 CH₂OH⁺（要有 + 電荷）。",
      ],
    },

  }
});
