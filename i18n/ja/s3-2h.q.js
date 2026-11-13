/* s3-2h.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's3-2h.q', {
  questions: {

    // ── s3-2h-q001 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q001": {
      // EN: <p>Which compound can exist as <i>cis</i> and <i>trans</i> isomers?</p>
      stem: "<p><i>cis</i> 形と <i>trans</i> 形の異性体（シス-トランス異性体）が存在する化合物はどれですか。</p>",
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
        "C=C 結合の炭素原子を 1 つずつ見てみましょう。",
        // EN: Each of the two carbon atoms must be bonded to two different atoms or groups.
        "2 つの炭素原子のどちらにも、異なる 2 つの原子または基が結合していなければなりません。",
      ],
      // EN: <p>For <i>cis–trans</i> isomers you need restricted rotation (the C=C bond) and two different groups on <strong>each</strong> carbon of the double bond.</p><p>In but-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>, each carbon of the double bond holds one H and one <span class="chem">CH<sub>3</sub><span></span></span>. The two methyl groups can be on the same side (<i>cis</i>) or on opposite sides (<i>trans</i>).</p>
      solution: "<p><i>cis–trans</i> 異性体（シス-トランス異性体）ができるには、回転が制限されていること（C=C 結合）と、二重結合の炭素の<strong>それぞれ</strong>に異なる 2 つの基がついていることが必要です。</p><p>but-2-ene <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span> では、二重結合のどちらの炭素にも H が 1 個と <span class=\"chem\">CH<sub>3</sub><span></span></span> が 1 個ついています。2 つのメチル基は、同じ側（<i>cis</i>）にも反対側（<i>trans</i>）にもなれます。</p>",
      misconception: {
        // EN (option A): In but-1-ene the first carbon of the double bond holds two hydrogen atoms. Swapping two identical atoms gives the same molecule.
        "0": "but-1-ene では、二重結合の 1 つ目の炭素に水素原子が 2 個ついています。同じ原子 2 個を入れ替えても、同じ分子になります。",
        // EN (option C): In 2-methylpropene one carbon of the double bond holds two methyl groups and the other holds two hydrogen atoms. Neither carbon has two different groups.
        "2": "2-methylpropene では、二重結合の片方の炭素にメチル基が 2 個、もう片方に水素原子が 2 個ついています。どちらの炭素にも、異なる 2 つの基がありません。",
        // EN (option D): In propene the end carbon of the double bond holds two hydrogen atoms. Both carbons must hold two different groups.
        "3": "propene では、二重結合の端の炭素に水素原子が 2 個ついています。両方の炭素に、異なる 2 つの基が必要です。",
      },
    },

    // ── s3-2h-q002 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q002": {
      // EN: <p>X and Y are two drawings of 1,2-dichloroethene.</p><p><strong>X</strong></p><p><svg class="q-fig" viewBox="-33.1 -41.4 101 84" width="101" height="84" style="max-width:100%;height:auto" role="img" aria-label="Molecule X: two carbon atoms joined by a double bond. Both chlorine atoms are drawn above the double bond and both hydrogen atoms below it."><line x1="9.0" y1="-2.3" x2="25.5" y2="-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.3" x2="25.5" y2="2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="-7.4" x2="-11.7" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="7.4" x2="-13.4" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="-7.4" x2="46.2" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="7.4" x2="47.9" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="34.5" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="-18.6" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-18.6" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="53.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg></p><p><strong>Y</strong></p><p><svg class="q-fig" viewBox="-33.1 -41.4 101 84" width="101" height="84" style="max-width:100%;height:auto" role="img" aria-label="Molecule Y: two carbon atoms joined by a double bond. One chlorine atom is drawn above the double bond on the left carbon and the other below it on the right carbon."><line x1="9.0" y1="-2.3" x2="25.5" y2="-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.3" x2="25.5" y2="2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="-7.4" x2="-11.7" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="7.4" x2="-13.4" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="-7.4" x2="47.9" y2="-19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="7.4" x2="46.2" y2="16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="34.5" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="-18.6" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-18.6" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg></p><p>Which statement is correct?</p>
      stem: "<p>X と Y は 1,2-dichloroethene を描いた 2 つの図です。</p><p><strong>X</strong></p><p><svg class=\"q-fig\" viewBox=\"-33.1 -41.4 101 84\" width=\"101\" height=\"84\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Molecule X: two carbon atoms joined by a double bond. Both chlorine atoms are drawn above the double bond and both hydrogen atoms below it.\"><line x1=\"9.0\" y1=\"-2.3\" x2=\"25.5\" y2=\"-2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.3\" x2=\"25.5\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"-7.4\" x2=\"-11.7\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"7.4\" x2=\"-13.4\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"-7.4\" x2=\"46.2\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"7.4\" x2=\"47.9\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"34.5\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"-18.6\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-18.6\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"53.1\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg></p><p><strong>Y</strong></p><p><svg class=\"q-fig\" viewBox=\"-33.1 -41.4 101 84\" width=\"101\" height=\"84\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Molecule Y: two carbon atoms joined by a double bond. One chlorine atom is drawn above the double bond on the left carbon and the other below it on the right carbon.\"><line x1=\"9.0\" y1=\"-2.3\" x2=\"25.5\" y2=\"-2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.3\" x2=\"25.5\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"-7.4\" x2=\"-11.7\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"7.4\" x2=\"-13.4\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"-7.4\" x2=\"47.9\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"7.4\" x2=\"46.2\" y2=\"16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"34.5\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"-18.6\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-18.6\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg></p><p>正しい文はどれですか。</p>",
      options: [
        // EN: X is the <i>cis</i> isomer and Y is the <i>trans</i> isomer.
        "X は <i>cis</i> 形、Y は <i>trans</i> 形の異性体です。",
        // EN: X is the <i>trans</i> isomer and Y is the <i>cis</i> isomer.
        "X は <i>trans</i> 形、Y は <i>cis</i> 形の異性体です。",
        // EN: X and Y are the same molecule, because one end can rotate about the C=C bond.
        "X と Y は同じ分子です。片方の端が C=C 結合のまわりで回転できるからです。",
        // EN: X and Y are structural isomers.
        "X と Y は構造異性体 (structural isomers) です。",
      ],
      hints: [
        // EN: Find the two chlorine atoms in each drawing. Are they on the same side of the double bond or on opposite sides?
        "それぞれの図で 2 個の塩素原子を見つけましょう。二重結合の同じ側にありますか、反対側にありますか。",
        // EN: <i>Cis</i> = same side. <i>Trans</i> = opposite sides.
        "<i>Cis</i> は同じ側、<i>trans</i> は反対側です。",
      ],
      // EN: <p>In X both Cl atoms are on the same side of the C=C bond: this is the <i>cis</i> isomer. In Y they are on opposite sides: this is the <i>trans</i> isomer.</p><p>X and Y have the same connectivity but a different arrangement in space. They are stereoisomers, and they cannot interconvert because rotation about the double bond is restricted.</p>
      solution: "<p>X では、2 個の Cl 原子が C=C 結合の同じ側にあります。これは <i>cis</i> 形です。Y では反対側にあります。これは <i>trans</i> 形です。</p><p>X と Y は、原子のつながり方 (connectivity) は同じで、空間的な配置が違います。つまり立体異性体 (stereoisomers) です。二重結合のまわりの回転は制限されているので、互いに入れ替わることはできません。</p>",
      misconception: {
        // EN (option B): The labels are the wrong way round. <i>Cis</i> means "on the same side". In X both chlorine atoms are on the same side of the double bond.
        "1": "ラベルが逆です。<i>Cis</i> は「同じ側」という意味です。X では、2 個の塩素原子が二重結合の同じ側にあります。",
        // EN (option C): Rotation about a C=C double bond is restricted, because it would break the π bond. So X cannot turn into Y at room temperature.
        "2": "C=C 二重結合のまわりの回転は制限されています。回転すると π 結合が切れてしまうからです。だから、室温で X が Y に変わることはありません。",
        // EN (option D): Structural isomers have different connectivity. In X and in Y each carbon is bonded to one H, one Cl and the other carbon. Only the arrangement in space differs, so they are stereoisomers.
        "3": "構造異性体は、原子のつながり方が違います。X でも Y でも、どの炭素も H 1 個、Cl 1 個、もう一方の炭素と結合しています。違うのは空間的な配置だけなので、立体異性体です。",
      },
    },

    // ── s3-2h-q003 · multi · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q003": {
      // EN: <p>Which of these compounds can exist as <i>cis</i> and <i>trans</i> isomers? Select <strong>all</strong> that apply.</p>
      stem: "<p><i>cis</i> 形と <i>trans</i> 形の異性体が存在する化合物はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
      options: [
        // EN: 1,2-dimethylcyclopropane (one methyl group on each of two ring carbons)
        "1,2-dimethylcyclopropane（環の 2 個の炭素に、メチル基が 1 個ずつ）",
        // EN: 1,1-dimethylcyclobutane (both methyl groups on the same ring carbon)
        "1,1-dimethylcyclobutane（メチル基が 2 個とも環の同じ炭素に）",
        // EN: pent-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pent-2-ene, <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 2-methylbut-2-ene, <span class="chem">CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub><span></span></span>
        "2-methylbut-2-ene, <span class=\"chem\">CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub><span></span></span>",
        // EN: 1,3-dimethylcyclobutane (methyl groups on opposite corners of the ring)
        "1,3-dimethylcyclobutane（メチル基が環の向かい合う角に）",
      ],
      hints: [
        // EN: A ring stops rotation in the same way as a double bond.
        "環も、二重結合と同じように回転を止めます。",
        // EN: In a ring you need two different ring carbons that each hold a substituent and a hydrogen atom. In an alkene each carbon of C=C needs two different groups.
        "環では、置換基と水素原子を 1 個ずつもつ環の炭素が、別々に 2 個必要です。アルケンでは、C=C のそれぞれの炭素に異なる 2 つの基が必要です。",
      ],
      // EN: <p>Two things are needed: restricted rotation (a C=C bond or a ring) and two different groups on each of two carbon atoms.</p><ul><li>1,2-dimethylcyclopropane: yes. The two methyl groups can be on the same face of the ring (<i>cis</i>) or on opposite faces (<i>trans</i>).</li><li>1,1-dimethylcyclobutane: no. Both groups are on one carbon.</li><li>pent-2-ene: yes. One carbon of C=C holds H and <span class="chem">CH<sub>3</sub><span></span></span>, the other holds H and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>.</li><li>2-methylbut-2-ene: no. One carbon of C=C holds two <span class="chem">CH<sub>3</sub><span></span></span> groups.</li><li>1,3-dimethylcyclobutane: yes. The methyl groups are on two different ring carbons, so they can be on the same face or on opposite faces.</li></ul>
      solution: "<p>必要なことは 2 つです。回転が制限されていること（C=C 結合または環）と、2 個の炭素原子のそれぞれに異なる 2 つの基がついていることです。</p><ul><li>1,2-dimethylcyclopropane：はい。2 つのメチル基は、環の同じ面（<i>cis</i>）にも反対の面（<i>trans</i>）にもなれます。</li><li>1,1-dimethylcyclobutane：いいえ。2 つの基が同じ炭素についています。</li><li>pent-2-ene：はい。C=C の片方の炭素には H と <span class=\"chem\">CH<sub>3</sub><span></span></span>、もう片方には H と <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> がついています。</li><li>2-methylbut-2-ene：いいえ。C=C の片方の炭素に <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が 2 個ついています。</li><li>1,3-dimethylcyclobutane：はい。メチル基は環の別々の炭素についているので、同じ面にも反対の面にもなれます。</li></ul>",
      misconception: {
        // EN (option B): In 1,1-dimethylcyclobutane both methyl groups are on the same carbon. One is above the ring and one below it in every case, so there is only one arrangement.
        "1": "1,1-dimethylcyclobutane では、2 つのメチル基が同じ炭素についています。必ず 1 つが環の上、もう 1 つが環の下になるので、配置は 1 通りだけです。",
        // EN (option D): In 2-methylbut-2-ene one carbon of the double bond holds two methyl groups. Swapping two identical groups gives the same molecule.
        "3": "2-methylbut-2-ene では、二重結合の片方の炭素にメチル基が 2 個ついています。同じ基 2 個を入れ替えても、同じ分子になります。",
      },
    },

    // ── s3-2h-q004 · short · exam · AHL · Structure 3.2.7 · 2 marks
    "s3-2h-q004": {
      // EN: <p>But-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>, exists as <i>cis</i> and <i>trans</i> isomers. But-1-ene, <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>, does not.</p><p>Explain both facts.</p>
      stem: "<p>But-2-ene <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span> には <i>cis</i> 形と <i>trans</i> 形の異性体があります。But-1-ene <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span> にはありません。</p><p>この 2 つの事実を説明しなさい (explain)。</p>",
      hints: [
        // EN: Start with rotation. What is special about a double bond?
        "まず回転について考えましょう。二重結合には、どんな特徴がありますか。",
        // EN: Then compare what is attached to each carbon of the C=C in the two molecules.
        "次に、2 つの分子で、C=C のそれぞれの炭素についているものをくらべましょう。",
      ],
      // EN: <p>The mark-earning phrases are "restricted rotation about the double bond" and "two different groups on each carbon of the double bond". Writing only "the groups are on different sides" describes the isomers but does not explain them.</p>
      solution: "<p>点になる表現は「restricted rotation about the double bond（二重結合のまわりの回転が制限されている）」と「two different groups on each carbon of the double bond（二重結合のそれぞれの炭素に異なる 2 つの基がある）」です。「基が違う側にある」と書くだけでは、異性体のようすを述べただけで、説明になりません。</p>",
      // EN: <p>There is no free rotation about the C=C double bond (rotation is restricted). In but-2-ene each carbon atom of the double bond is bonded to two different groups (H and <span class="chem">CH<sub>3</sub><span></span></span>), so the two <span class="chem">CH<sub>3</sub><span></span></span> groups can be fixed on the same side or on opposite sides. In but-1-ene one carbon of the double bond is bonded to two identical atoms (two H), so swapping them gives the same molecule.</p>
      answer: "<p>C=C 二重結合のまわりでは自由に回転できません（回転が制限されています）。but-2-ene では、二重結合のどちらの炭素原子にも異なる 2 つの基（H と <span class=\"chem\">CH<sub>3</sub><span></span></span>）が結合しています。そのため、2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基は同じ側または反対側に固定されます。but-1-ene では、二重結合の片方の炭素に同じ原子が 2 個（H が 2 個）結合しています。だから、入れ替えても同じ分子になります。</p>",
      markscheme: [
        // EN: Restricted rotation / no free rotation about the C=C (double) bond.
        "C=C（二重）結合のまわりの回転が制限されている / 自由に回転できない。",
        // EN: But-2-ene: each carbon of the double bond has two different atoms or groups attached (H and CH₃). But-1-ene: one carbon of the double bond has two identical atoms attached (two H). Both needed for the mark.
        "But-2-ene：二重結合のそれぞれの炭素に、異なる 2 つの原子または基（H と CH₃）がついている。But-1-ene：二重結合の片方の炭素に、同じ原子が 2 個（H が 2 個）ついている。両方がそろって点になる。",
      ],
    },

    // ── s3-2h-q005 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q005": {
      // EN: <p>In these drawings a solid wedge is a bond coming towards you, in front of the ring. A hashed wedge is a bond going away from you, behind the ring.</p><p>Which drawing shows <i>trans</i>-1,2-dichlorocyclopropane?</p>
      stem: "<p>次の図で、実線のくさびは手前に向かう結合で、環の前にあります。破線のくさびは奥に向かう結合で、環の後ろにあります。</p><p><i>trans</i>-1,2-dichlorocyclopropane を表す図はどれですか。</p>",
      options: [
        // EN: <svg class="q-fig" viewBox="-32.5 -32.1 95 73" width="95" height="73" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. Both chlorine atoms are on solid wedge bonds."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.7,12.2 -7.9,16.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><polygon points="30.0,0.0 37.9,16.6 43.7,12.2" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><text x="-18.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="48.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-32.5 -32.1 95 73\" width=\"95\" height=\"73\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. Both chlorine atoms are on solid wedge bonds.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.7,12.2 -7.9,16.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><polygon points=\"30.0,0.0 37.9,16.6 43.7,12.2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><text x=\"-18.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"48.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-43.0 -32.1 79 77" width="79" height="77" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. One ring carbon carries two chlorine atoms, one on a solid wedge bond and one on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -17.2,-0.9 -16.1,6.2" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-2.0" y1="2.5" x2="0.2" y2="3.2" stroke="currentColor" stroke-width="1.3"/><line x1="-3.4" y1="5.2" x2="-0.2" y2="6.2" stroke="currentColor" stroke-width="1.3"/><line x1="-4.8" y1="7.9" x2="-0.6" y2="9.2" stroke="currentColor" stroke-width="1.3"/><line x1="-6.2" y1="10.5" x2="-1.0" y2="12.2" stroke="currentColor" stroke-width="1.3"/><line x1="-7.6" y1="13.2" x2="-1.4" y2="15.2" stroke="currentColor" stroke-width="1.3"/><line x1="-9.0" y1="15.9" x2="-1.8" y2="18.2" stroke="currentColor" stroke-width="1.3"/><text x="-28.5" y="9.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-9.0" y="33.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-43.0 -32.1 79 77\" width=\"79\" height=\"77\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Three-membered carbon ring. One ring carbon carries two chlorine atoms, one on a solid wedge bond and one on a hashed wedge bond.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -17.2,-0.9 -16.1,6.2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-2.0\" y1=\"2.5\" x2=\"0.2\" y2=\"3.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-3.4\" y1=\"5.2\" x2=\"-0.2\" y2=\"6.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-4.8\" y1=\"7.9\" x2=\"-0.6\" y2=\"9.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-6.2\" y1=\"10.5\" x2=\"-1.0\" y2=\"12.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-7.6\" y1=\"13.2\" x2=\"-1.4\" y2=\"15.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-9.0\" y1=\"15.9\" x2=\"-1.8\" y2=\"18.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-28.5\" y=\"9.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-9.0\" y=\"33.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-32.5 -32.1 95 73" width="95" height="73" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.7,12.2 -7.9,16.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="30.9" y1="3.1" x2="32.7" y2="1.7" stroke="currentColor" stroke-width="1.3"/><line x1="32.3" y1="5.8" x2="34.9" y2="3.8" stroke="currentColor" stroke-width="1.3"/><line x1="33.6" y1="8.5" x2="37.2" y2="5.9" stroke="currentColor" stroke-width="1.3"/><line x1="35.0" y1="11.2" x2="39.4" y2="8.0" stroke="currentColor" stroke-width="1.3"/><line x1="36.4" y1="14.0" x2="41.6" y2="10.0" stroke="currentColor" stroke-width="1.3"/><line x1="37.8" y1="16.7" x2="43.8" y2="12.1" stroke="currentColor" stroke-width="1.3"/><text x="-18.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="48.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-32.5 -32.1 95 73\" width=\"95\" height=\"73\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.7,12.2 -7.9,16.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"30.9\" y1=\"3.1\" x2=\"32.7\" y2=\"1.7\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"32.3\" y1=\"5.8\" x2=\"34.9\" y2=\"3.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"33.6\" y1=\"8.5\" x2=\"37.2\" y2=\"5.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"35.0\" y1=\"11.2\" x2=\"39.4\" y2=\"8.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"36.4\" y1=\"14.0\" x2=\"41.6\" y2=\"10.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"37.8\" y1=\"16.7\" x2=\"43.8\" y2=\"12.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-18.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"48.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-34.0 -36.0 98 72" width="98" height="72" style="max-width:100%;height:auto" role="img" aria-label="Four-membered carbon ring. Two neighbouring ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="30.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="-30.0" x2="0.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="0.0" y1="-30.0" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.6,8.5 -8.5,13.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="31.0" y1="2.6" x2="32.6" y2="1.0" stroke="currentColor" stroke-width="1.3"/><line x1="32.5" y1="4.9" x2="34.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="34.0" y1="7.1" x2="37.1" y2="4.0" stroke="currentColor" stroke-width="1.3"/><line x1="35.4" y1="9.3" x2="39.3" y2="5.4" stroke="currentColor" stroke-width="1.3"/><line x1="36.9" y1="11.5" x2="41.5" y2="6.9" stroke="currentColor" stroke-width="1.3"/><line x1="38.3" y1="13.7" x2="43.7" y2="8.3" stroke="currentColor" stroke-width="1.3"/><text x="-19.5" y="24.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="49.5" y="24.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-34.0 -36.0 98 72\" width=\"98\" height=\"72\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Four-membered carbon ring. Two neighbouring ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"30.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"-30.0\" x2=\"0.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"0.0\" y1=\"-30.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.6,8.5 -8.5,13.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"31.0\" y1=\"2.6\" x2=\"32.6\" y2=\"1.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"32.5\" y1=\"4.9\" x2=\"34.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"7.1\" x2=\"37.1\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"35.4\" y1=\"9.3\" x2=\"39.3\" y2=\"5.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"36.9\" y1=\"11.5\" x2=\"41.5\" y2=\"6.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"38.3\" y1=\"13.7\" x2=\"43.7\" y2=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-19.5\" y=\"24.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"49.5\" y=\"24.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
      ],
      hints: [
        // EN: Check the ring size first. Cyclopropane has three carbon atoms.
        "まず環の大きさを確かめましょう。cyclopropane の炭素原子は 3 個です。",
        // EN: <i>Trans</i> means the two chlorine atoms are on opposite faces of the ring: one in front, one behind.
        "<i>Trans</i> は、2 個の塩素原子が環の反対の面にあるという意味です。1 個は手前、1 個は奥です。",
      ],
      // EN: <p>1,2-dichlorocyclopropane has a three-membered ring with one Cl on each of two ring carbons. In the <i>trans</i> isomer one Cl is in front of the ring (solid wedge) and the other is behind it (hashed wedge).</p><p>The ring stops rotation about its carbon–carbon bonds, so the <i>cis</i> and <i>trans</i> forms are different molecules.</p>
      solution: "<p>1,2-dichlorocyclopropane は三員環で、環の 2 個の炭素に Cl が 1 個ずつついています。<i>trans</i> 形では、1 個の Cl が環の手前（実線のくさび）、もう 1 個が奥（破線のくさび）にあります。</p><p>環があると炭素–炭素結合のまわりで回転できないので、<i>cis</i> 形と <i>trans</i> 形は別の分子です。</p>",
      misconception: {
        // EN (option A): Both chlorine atoms are on solid wedges, so both are in front of the ring, on the same face. This is the <i>cis</i> isomer.
        "0": "2 個の塩素原子はどちらも実線のくさびについています。つまり、どちらも環の手前、同じ面にあります。これは <i>cis</i> 形です。",
        // EN (option B): Here both chlorine atoms are on the same carbon. This is 1,1-dichlorocyclopropane, a structural isomer that has no <i>cis–trans</i> isomers.
        "1": "この図では、2 個の塩素原子が同じ炭素についています。これは 1,1-dichlorocyclopropane です。構造異性体で、<i>cis–trans</i> 異性体はありません。",
        // EN (option D): The chlorine atoms are <i>trans</i>, but count the ring carbons. This ring has four corners, so it is a cyclobutane.
        "3": "塩素原子は <i>trans</i> の位置にありますが、環の炭素を数えてみましょう。この環には角が 4 つあるので、cyclobutane です。",
      },
    },

    // ── s3-2h-q006 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q006": {
      // EN: <p>What is a chiral carbon atom?</p>
      stem: "<p>キラル炭素原子 (chiral carbon atom) とは何ですか。</p>",
      options: [
        // EN: A carbon atom bonded to four different atoms or groups
        "異なる 4 つの原子または基と結合している炭素原子",
        // EN: A carbon atom that is part of a C=C double bond
        "C=C 二重結合の一部になっている炭素原子",
        // EN: A carbon atom bonded to two different atoms or groups
        "異なる 2 つの原子または基と結合している炭素原子",
        // EN: A carbon atom that rotates plane-polarised light
        "平面偏光を回転させる炭素原子",
      ],
      hints: [
        // EN: Think about how many bonds the carbon has and what is at the end of each one.
        "炭素がもつ結合の数と、それぞれの結合の先に何があるかを考えましょう。",
      ],
      // EN: <p>A chiral carbon is bonded to <strong>four different atoms or groups</strong>, arranged tetrahedrally. A molecule with one chiral carbon cannot be superimposed on its mirror image, so it exists as two enantiomers.</p>
      solution: "<p>キラル炭素原子は、<strong>異なる 4 つの原子または基</strong>と結合していて、それらが四面体形に並んでいます。キラル炭素原子を 1 個もつ分子は、その鏡像と重ね合わせることができません。そのため、2 つの鏡像異性体（エナンチオマー、enantiomers）として存在します。</p>",
      misconception: {
        // EN (option B): A carbon in a C=C bond has only three atoms attached. It can be part of <i>cis–trans</i> isomerism, but it cannot be a chiral carbon.
        "1": "C=C 結合の炭素には、原子が 3 個しかついていません。<i>cis–trans</i> 異性にかかわることはありますが、キラル炭素原子にはなれません。",
        // EN (option C): Two different groups are not enough. If any two of the four groups are the same, the molecule and its mirror image can be superimposed.
        "2": "異なる基が 2 つでは足りません。4 つの基のうちどれか 2 つが同じなら、分子とその鏡像は重ね合わせることができます。",
        // EN (option D): This describes an effect, not the structure. Exam markschemes reject answers that only mention optical properties. State what is bonded to the carbon.
        "3": "これは構造ではなく、効果を述べています。試験の採点基準では、光学的な性質だけを書いた答えは認められません。炭素に何が結合しているかを書きましょう。",
      },
    },

    // ── s3-2h-q007 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q007": {
      // EN: <p>Which molecule contains a chiral carbon atom?</p>
      stem: "<p>キラル炭素原子をもつ分子はどれですか。</p>",
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
        "<span class=\"chem\">CH<sub>3</sub><span></span></span> 基や <span class=\"chem\">CH<sub>2</sub><span></span></span> 基の炭素は、キラルになることはありません。H が 1 個か 0 個の炭素だけを見ましょう。",
        // EN: Write down the four groups on that carbon. Are all four different?
        "その炭素についている 4 つの基を書き出しましょう。4 つとも違いますか。",
      ],
      // EN: <p>In butan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>, carbon 2 is bonded to four different groups: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>. It is a chiral carbon.</p>
      solution: "<p>butan-2-ol <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span> では、炭素 2 が異なる 4 つの基と結合しています。H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> です。これはキラル炭素原子です。</p>",
      misconception: {
        // EN (option A): In propan-2-ol the middle carbon holds H, OH and two <span class="chem">CH<sub>3</sub><span></span></span> groups. Two of its four groups are the same.
        "0": "propan-2-ol では、真ん中の炭素に H、OH、そして <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が 2 個ついています。4 つの基のうち 2 つが同じです。",
        // EN (option B): In butan-1-ol every carbon atom holds at least two hydrogen atoms, so no carbon has four different groups.
        "1": "butan-1-ol では、どの炭素原子にも水素原子が 2 個以上ついています。だから、異なる 4 つの基をもつ炭素はありません。",
        // EN (option D): In 2-methylpropan-2-ol the central carbon holds OH and three identical <span class="chem">CH<sub>3</sub><span></span></span> groups.
        "3": "2-methylpropan-2-ol では、中心の炭素に OH と、同じ <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が 3 個ついています。",
      },
    },

    // ── s3-2h-q008 · numeric · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q008": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p><svg class="q-fig" viewBox="-6.0 -45.0 156 106" width="156" height="106" style="max-width:100%;height:auto" role="img" aria-label="Skeletal formula: a zig-zag chain of five carbon atoms. Carbons 2, 3 and 4 each carry an OH group. Carbon 5 is joined to an OH group at the end of the chain. Carbon 1 is a methyl group."><line x1="0.0" y1="15.0" x2="26.1" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="51.9" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="78.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="103.8" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="103.8" y1="15.0" x2="122.1" y2="4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="26.1" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="51.9" y2="36.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="78.0" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="123.9" y="5.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="20.1" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="45.9" y="50.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="72.0" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text></svg></p><p>How many chiral carbon atoms does one molecule contain?</p>
      stem: "<p>ある化合物の骨格構造式 (skeletal formula) を示します。</p><p><svg class=\"q-fig\" viewBox=\"-6.0 -45.0 156 106\" width=\"156\" height=\"106\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Skeletal formula: a zig-zag chain of five carbon atoms. Carbons 2, 3 and 4 each carry an OH group. Carbon 5 is joined to an OH group at the end of the chain. Carbon 1 is a methyl group.\"><line x1=\"0.0\" y1=\"15.0\" x2=\"26.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"51.9\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"78.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"103.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"103.8\" y1=\"15.0\" x2=\"122.1\" y2=\"4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"26.1\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"51.9\" y2=\"36.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"78.0\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"123.9\" y=\"5.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"20.1\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"45.9\" y=\"50.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"72.0\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text></svg></p><p>1 分子の中に、キラル炭素原子は何個ありますか。</p>",
      hints: [
        // EN: Number the five carbon atoms. Each corner and each line end is a carbon. Add the hydrogen atoms in your head.
        "5 個の炭素原子に番号をつけましょう。角と線の端は、どれも炭素です。水素原子は頭の中で補います。",
        // EN: The two end carbons are <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>OH<span></span></span>. Can a carbon with two or three H atoms be chiral?
        "両端の炭素は <span class=\"chem\">CH<sub>3</sub><span></span></span> と <span class=\"chem\">CH<sub>2</sub>OH<span></span></span> です。H 原子を 2 個または 3 個もつ炭素は、キラルになれますか。",
        // EN: For each of the three middle carbons, list the four groups: H, OH, the chain to the left, the chain to the right.
        "真ん中の 3 個の炭素それぞれについて、4 つの基を書き出しましょう。H、OH、左側の鎖、右側の鎖です。",
      ],
      // EN: <p>The molecule is <span class="chem">CH<sub>3</sub>CH(OH)CH(OH)CH(OH)CH<sub>2</sub>OH<span></span></span>.</p><ul><li>The <span class="chem">CH<sub>3</sub><span></span></span> carbon has three H atoms and the <span class="chem">CH<sub>2</sub>OH<span></span></span> carbon has two H atoms: not chiral.</li><li>Each of the three CH(OH) carbons holds H, OH and two <strong>different</strong> chains. For the middle one, the chain on one side is <span class="chem">CH(OH)CH<sub>3</sub><span></span></span> and on the other side <span class="chem">CH(OH)CH<sub>2</sub>OH<span></span></span>.</li></ul><p>So there are <strong>3</strong> chiral carbon atoms.</p>
      solution: "<p>この分子は <span class=\"chem\">CH<sub>3</sub>CH(OH)CH(OH)CH(OH)CH<sub>2</sub>OH<span></span></span> です。</p><ul><li><span class=\"chem\">CH<sub>3</sub><span></span></span> の炭素には H 原子が 3 個、<span class=\"chem\">CH<sub>2</sub>OH<span></span></span> の炭素には H 原子が 2 個ついています。キラルではありません。</li><li>3 個の CH(OH) の炭素には、それぞれ H、OH と、<strong>異なる</strong> 2 本の鎖がついています。真ん中の炭素では、片側の鎖が <span class=\"chem\">CH(OH)CH<sub>3</sub><span></span></span>、もう片側が <span class=\"chem\">CH(OH)CH<sub>2</sub>OH<span></span></span> です。</li></ul><p>したがって、キラル炭素原子は <strong>3</strong> 個です。</p>",
    },

    // ── s3-2h-q009 · numeric · challenge · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q009": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p><svg class="q-fig" viewBox="-6.0 -45.0 116 106" width="116" height="106" style="max-width:100%;height:auto" role="img" aria-label="Skeletal formula: a zig-zag chain of five carbon atoms. Carbon 2 and carbon 3 each carry an OH group. Carbon 4 carries a methyl branch, drawn as a plain line."><line x1="0.0" y1="15.0" x2="26.1" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="51.9" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="78.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="103.8" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="26.1" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="51.9" y2="36.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="78.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="20.1" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="45.9" y="50.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text></svg></p><p>How many chiral carbon atoms does one molecule contain?</p>
      stem: "<p>ある化合物の骨格構造式 (skeletal formula) を示します。</p><p><svg class=\"q-fig\" viewBox=\"-6.0 -45.0 116 106\" width=\"116\" height=\"106\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Skeletal formula: a zig-zag chain of five carbon atoms. Carbon 2 and carbon 3 each carry an OH group. Carbon 4 carries a methyl branch, drawn as a plain line.\"><line x1=\"0.0\" y1=\"15.0\" x2=\"26.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"51.9\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"78.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"103.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"26.1\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"51.9\" y2=\"36.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"78.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"20.1\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"45.9\" y=\"50.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text></svg></p><p>1 分子の中に、キラル炭素原子は何個ありますか。</p>",
      hints: [
        // EN: Each corner and each line end is a carbon atom. Add the hydrogen atoms in your head, then rule out every <span class="chem">CH<sub>3</sub><span></span></span> carbon.
        "角と線の端は、どれも炭素原子です。水素原子を頭の中で補ってから、<span class=\"chem\">CH<sub>3</sub><span></span></span> の炭素をすべて除きましょう。",
        // EN: Three carbons have one H atom each: carbon 2, carbon 3 and carbon 4. List the four groups on each.
        "H 原子を 1 個もつ炭素は 3 個あります。炭素 2、炭素 3、炭素 4 です。それぞれについている 4 つの基を書き出しましょう。",
        // EN: Look closely at carbon 4. What are the two groups at the right-hand end?
        "炭素 4 をよく見ましょう。右端の 2 つの基は何ですか。",
      ],
      // EN: <p>The molecule is <span class="chem">CH<sub>3</sub>CH(OH)CH(OH)CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. Only carbons with one H atom need checking.</p><ul><li>Carbon 2: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and the rest of the chain. Four different groups. Chiral.</li><li>Carbon 3: H, OH, <span class="chem">CH(OH)CH<sub>3</sub><span></span></span> and <span class="chem">CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. Four different groups. Chiral.</li><li>Carbon 4: H, the rest of the chain and <strong>two identical</strong> <span class="chem">CH<sub>3</sub><span></span></span> groups. Not chiral.</li></ul><p>There are <strong>2</strong> chiral carbon atoms. A carbon with one H atom is not always chiral: you must compare all four groups.</p>
      solution: "<p>この分子は <span class=\"chem\">CH<sub>3</sub>CH(OH)CH(OH)CH(CH<sub>3</sub>)<sub>2</sub><span></span></span> です。H 原子を 1 個もつ炭素だけ調べれば十分です。</p><ul><li>炭素 2：H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span>、残りの鎖。4 つとも違う基です。キラルです。</li><li>炭素 3：H、OH、<span class=\"chem\">CH(OH)CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>。4 つとも違う基です。キラルです。</li><li>炭素 4：H、残りの鎖、そして<strong>同じ 2 個の</strong> <span class=\"chem\">CH<sub>3</sub><span></span></span> 基。キラルではありません。</li></ul><p>キラル炭素原子は <strong>2</strong> 個です。H 原子を 1 個もつ炭素が、いつもキラルとはかぎりません。4 つの基をすべてくらべる必要があります。</p>",
    },

    // ── s3-2h-q010 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q010": {
      // EN: <p>Which molecule has <strong>no</strong> chiral carbon atom?</p>
      stem: "<p>キラル炭素原子を<strong>もたない</strong>分子はどれですか。</p>",
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
        "それぞれの分子で、H が 1 個だけの炭素を見つけて、その 4 つの基を書き出しましょう。",
        // EN: Compare the two carbon chains on each side of that carbon. Are they the same length?
        "その炭素の両側にある 2 本の炭素鎖をくらべましょう。長さは同じですか。",
      ],
      // EN: <p>In 3-chloropentane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>, carbon 3 holds H, Cl and <strong>two identical ethyl groups</strong>. It does not have four different groups, so the molecule has no chiral carbon. Each of the other three molecules has one carbon with four different groups.</p>
      solution: "<p>3-chloropentane <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span> では、炭素 3 に H、Cl と、<strong>同じエチル基が 2 個</strong>ついています。異なる 4 つの基をもたないので、この分子にキラル炭素原子はありません。ほかの 3 つの分子には、異なる 4 つの基をもつ炭素が 1 個ずつあります。</p>",
      misconception: {
        // EN (option A): In 2-chlorobutane carbon 2 holds H, Cl, <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>. These are four different groups, so it is chiral.
        "0": "2-chlorobutane では、炭素 2 に H、Cl、<span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> がついています。4 つとも違う基なので、キラルです。",
        // EN (option B): In 2-hydroxypropanoic acid carbon 2 holds H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and COOH. These are four different groups, so it is chiral.
        "1": "2-hydroxypropanoic acid では、炭素 2 に H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span>、COOH がついています。4 つとも違う基なので、キラルです。",
        // EN (option D): In 3-methylhexane carbon 3 holds H, <span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>. An ethyl group and a propyl group are different, so it is chiral.
        "3": "3-methylhexane では、炭素 3 に H、<span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span> がついています。エチル基とプロピル基は違う基なので、キラルです。",
      },
    },

    // ── s3-2h-q011 · multi · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q011": {
      // EN: <p>Butan-2-ol exists as a pair of enantiomers. Which statements about the two enantiomers are correct? Select <strong>all</strong> that apply.</p>
      stem: "<p>Butan-2-ol には 1 組の鏡像異性体（エナンチオマー、enantiomers）があります。2 つの鏡像異性体について、正しい文はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
      options: [
        // EN: They have the same boiling point.
        "沸点が同じです。",
        // EN: Under the same conditions, they rotate plane-polarised light by the same angle in opposite directions.
        "同じ条件では、平面偏光 (plane-polarised light) を同じ角度だけ、逆向きに回転させます。",
        // EN: Their atoms are bonded together in a different order.
        "原子が結合している順番が違います。",
        // EN: They can behave differently with another chiral molecule, such as an enzyme.
        "酵素など、ほかのキラルな分子に対しては、違うふるまいをすることがあります。",
        // EN: They are mirror images that can be superimposed on each other.
        "互いに重ね合わせることができる鏡像です。",
      ],
      hints: [
        // EN: Enantiomers are stereoisomers. What stays the same in all stereoisomers?
        "鏡像異性体は立体異性体です。立体異性体で、いつも変わらないものは何ですか。",
        // EN: Physical properties such as boiling point are the same. Two things are different: the effect on plane-polarised light, and behaviour in a chiral environment.
        "沸点などの物理的性質は同じです。違うのは 2 つです。平面偏光への効果と、キラルな環境でのふるまいです。",
      ],
      // EN: <p>Enantiomers are non-superimposable mirror images with the same connectivity.</p><ul><li>They have identical physical properties such as boiling point, melting point and density.</li><li>They are optically active: each rotates the plane of plane-polarised light by the same angle, but in opposite directions.</li><li>They behave in the same way with non-chiral reagents, but can behave differently in a chiral environment, such as the active site of an enzyme.</li></ul>
      solution: "<p>鏡像異性体は、重ね合わせることができない (non-superimposable) 鏡像で、原子のつながり方は同じです。</p><ul><li>沸点、融点、密度などの物理的性質は同じです。</li><li>光学活性 (optically active) です。それぞれが平面偏光の偏光面を同じ角度だけ、ただし逆向きに回転させます。</li><li>キラルでない試薬に対しては、同じようにふるまいます。しかし、酵素の活性部位のようなキラルな環境では、違うふるまいをすることがあります。</li></ul>",
      misconception: {
        // EN (option C): A different bonding order (connectivity) would make them structural isomers. Enantiomers have the same connectivity and differ only in their arrangement in space.
        "2": "結合の順番（原子のつながり方）が違えば、構造異性体になります。鏡像異性体は原子のつながり方が同じで、空間的な配置だけが違います。",
        // EN (option E): Mirror images that can be superimposed are the same molecule. Enantiomers are <strong>non-superimposable</strong> mirror images.
        "4": "重ね合わせることができる鏡像は、同じ分子です。鏡像異性体は、<strong>重ね合わせることができない</strong>鏡像です。",
      },
    },

    // ── s3-2h-q012 · short · exam · AHL · Structure 3.2.7 · 2 marks
    "s3-2h-q012": {
      // EN: <p>State what is meant by a <strong>racemic mixture</strong>, and explain why a racemic mixture is not optically active.</p>
      stem: "<p><strong>ラセミ混合物 (racemic mixture)</strong> とは何かを述べなさい (state)。また、ラセミ混合物が光学活性を示さない理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: How much of each enantiomer does the mixture contain?
        "混合物には、それぞれの鏡像異性体がどれだけ含まれていますか。",
        // EN: What does each enantiomer do to plane-polarised light, and what is the total effect?
        "それぞれの鏡像異性体は、平面偏光に何をしますか。全体としてはどうなりますか。",
      ],
      // EN: <p>Use the words "equal amounts" and "enantiomers" for the first mark. For the second mark say that the rotations are equal and opposite, so they cancel. "It contains both forms" is too vague to score.</p>
      solution: "<p>1 点目には「equal amounts（等しい量）」と「enantiomers（鏡像異性体）」という言葉を使いましょう。2 点目には、回転が同じ大きさで逆向きなので打ち消し合う、と書きます。「両方の形を含む」ではあいまいすぎて、点になりません。</p>",
      // EN: <p>A racemic mixture contains equal amounts of the two enantiomers of a chiral compound. One enantiomer rotates the plane of plane-polarised light clockwise and the other rotates it anticlockwise by the same angle, so the two rotations cancel and there is no overall rotation.</p>
      answer: "<p>ラセミ混合物は、キラルな化合物の 2 つの鏡像異性体を等しい量ずつ含みます。一方の鏡像異性体は平面偏光の偏光面を時計回りに回転させ、もう一方は同じ角度だけ反時計回りに回転させます。そのため 2 つの回転は打ち消し合い、全体としては回転しません。</p>",
      markscheme: [
        // EN: A mixture containing equal amounts (equimolar / 50:50) of the two enantiomers.
        "2 つの鏡像異性体を等しい量（等モル / 50:50）含む混合物。",
        // EN: The two enantiomers rotate (the plane of) plane-polarised light by equal amounts in opposite directions, so the rotations cancel / no net rotation.
        "2 つの鏡像異性体は、平面偏光（の偏光面）を同じ大きさだけ逆向きに回転させる。そのため回転が打ち消し合う / 正味の回転がない。",
      ],
    },

    // ── s3-2h-q013 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q013": {
      // EN: <p>A polarimeter measures the angle through which a sample rotates the plane of plane-polarised light.</p><p>A solution of one enantiomer of a compound rotates the light by 13° clockwise. Two more solutions are tested in the same polarimeter tube, with the same total concentration.</p><p>What rotation is expected for each one?</p>
      stem: "<p>旋光計 (polarimeter) は、試料が平面偏光の偏光面を回転させる角度を測定します。</p><p>ある化合物の一方の鏡像異性体の溶液は、光を時計回りに 13° 回転させます。さらに 2 つの溶液を、同じ旋光計の管を使い、同じ全濃度で調べます。</p><p>それぞれの回転はどうなると予想されますか。</p>",
      options: [
        // EN: Other enantiomer: 13° anticlockwise. Racemic mixture: 0°.
        "もう一方の鏡像異性体：反時計回りに 13°。ラセミ混合物：0°。",
        // EN: Other enantiomer: 13° clockwise. Racemic mixture: 0°.
        "もう一方の鏡像異性体：時計回りに 13°。ラセミ混合物：0°。",
        // EN: Other enantiomer: 13° anticlockwise. Racemic mixture: 26° clockwise.
        "もう一方の鏡像異性体：反時計回りに 13°。ラセミ混合物：時計回りに 26°。",
        // EN: Other enantiomer: 0°. Racemic mixture: 13° anticlockwise.
        "もう一方の鏡像異性体：0°。ラセミ混合物：反時計回りに 13°。",
      ],
      hints: [
        // EN: Two enantiomers rotate plane-polarised light by the same angle. What about the direction?
        "2 つの鏡像異性体は、平面偏光を同じ角度だけ回転させます。向きはどうですか。",
        // EN: A racemic mixture has equal amounts of both enantiomers. Add a clockwise and an equal anticlockwise rotation.
        "ラセミ混合物は、両方の鏡像異性体を等しい量ずつ含みます。時計回りの回転と、同じ大きさの反時計回りの回転を足してみましょう。",
      ],
      // EN: <p>The other enantiomer rotates the light by the same angle in the opposite direction: 13° anticlockwise.</p><p>A racemic mixture contains equal amounts of both enantiomers. The clockwise and anticlockwise rotations cancel, so the reading is 0°. The mixture is optically inactive.</p>
      solution: "<p>もう一方の鏡像異性体は、光を同じ角度だけ逆向きに回転させます。つまり反時計回りに 13° です。</p><p>ラセミ混合物は、両方の鏡像異性体を等しい量ずつ含みます。時計回りと反時計回りの回転が打ち消し合うので、読みは 0° になります。この混合物は光学不活性 (optically inactive) です。</p>",
      misconception: {
        // EN (option B): If both enantiomers rotated the light in the same direction, a polarimeter could not tell them apart. They rotate it in opposite directions.
        "1": "もし両方の鏡像異性体が光を同じ向きに回転させるなら、旋光計で区別できません。実際は逆向きに回転させます。",
        // EN (option C): The rotations of the two enantiomers do not add up in a racemic mixture. They are opposite, so they cancel.
        "2": "ラセミ混合物では、2 つの鏡像異性体の回転は足し合わされません。逆向きなので、打ち消し合います。",
        // EN (option D): Both enantiomers are optically active. It is the 50:50 mixture that shows no rotation.
        "3": "どちらの鏡像異性体も光学活性です。回転を示さないのは 50:50 の混合物です。",
      },
    },

    // ── s3-2h-q014 · mcq · challenge · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q014": {
      // EN: <p>X is one enantiomer of bromochlorofluoromethane, CHBrClF. Plain lines are bonds in the plane of the screen. A solid wedge comes towards you. A hashed wedge goes away from you.</p><p><strong>X</strong></p><p><svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Cl on a solid wedge to the lower right, Br on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text></svg></p><p>Which drawing shows the <strong>other</strong> enantiomer, the mirror image of X?</p>
      stem: "<p>X は bromochlorofluoromethane（CHBrClF）の一方の鏡像異性体です。ふつうの線は画面の平面内にある結合です。実線のくさびは手前に向かう結合、破線のくさびは奥に向かう結合です。</p><p><strong>X</strong></p><p><svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Cl on a solid wedge to the lower right, Br on a hashed wedge to the right\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text></svg></p><p><strong>もう一方の</strong>鏡像異性体、つまり X の鏡像を表す図はどれですか。</p>",
      options: [
        // EN: <svg class="q-fig" viewBox="-44.6 -46.5 92 94" width="92" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: H up in the plane, Cl to the lower left in the plane, F on a solid wedge to the lower right, Br on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-21.6" y="20.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="12.6" y="35.6" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-44.6 -46.5 92 94\" width=\"92\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: H up in the plane, Cl to the lower left in the plane, F on a solid wedge to the lower right, Br on a hashed wedge to the right\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-21.6\" y=\"20.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"12.6\" y=\"35.6\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-47.0 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower right in the plane, Br on a solid wedge to the lower left, Cl on a hashed wedge to the left"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7.9" y1="4.3" x2="19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="-3.4,8.3 -12.5,20.9 -5.8,23.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-11.1" y1="2.1" x2="-10.4" y2="4.3" stroke="currentColor" stroke-width="1.3"/><line x1="-13.4" y1="2.3" x2="-12.4" y2="5.5" stroke="currentColor" stroke-width="1.3"/><line x1="-15.6" y1="2.4" x2="-14.4" y2="6.6" stroke="currentColor" stroke-width="1.3"/><line x1="-17.9" y1="2.5" x2="-16.3" y2="7.8" stroke="currentColor" stroke-width="1.3"/><line x1="-20.2" y1="2.6" x2="-18.3" y2="8.9" stroke="currentColor" stroke-width="1.3"/><line x1="-22.5" y1="2.8" x2="-20.3" y2="10.1" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-6.6" y="35.6" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="-24.0" y="14.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-47.0 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: F up in the plane, H to the lower right in the plane, Br on a solid wedge to the lower left, Cl on a hashed wedge to the left\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"7.9\" y1=\"4.3\" x2=\"19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"-3.4,8.3 -12.5,20.9 -5.8,23.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-11.1\" y1=\"2.1\" x2=\"-10.4\" y2=\"4.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-13.4\" y1=\"2.3\" x2=\"-12.4\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-15.6\" y1=\"2.4\" x2=\"-14.4\" y2=\"6.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-17.9\" y1=\"2.5\" x2=\"-16.3\" y2=\"7.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-20.2\" y1=\"2.6\" x2=\"-18.3\" y2=\"8.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-22.5\" y1=\"2.8\" x2=\"-20.3\" y2=\"10.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-6.6\" y=\"35.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"-24.0\" y=\"14.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: H up in the plane, F to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: H up in the plane, F to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
      ],
      hints: [
        // EN: A useful rule: swapping any <strong>two</strong> groups on a chiral carbon gives the other enantiomer.
        "便利な規則があります。キラル炭素原子についた基のうち<strong>2 つ</strong>を入れ替えると、もう一方の鏡像異性体になります。",
        // EN: Swapping twice brings you back to the same molecule. Rotating the whole molecule never changes it.
        "2 回入れ替えると、もとの分子に戻ります。分子全体を回転させても、分子は変わりません。",
        // EN: For each drawing, count how many swaps turn X into it.
        "それぞれの図について、X から何回の入れ替えでその図になるかを数えましょう。",
      ],
      // EN: <p>Compare each drawing with X (F up, H lower left, Cl on the wedge, Br on the hashed bond).</p><ul><li>The correct drawing keeps F and H in place and swaps Cl and Br. One swap of two groups gives the mirror image, so this is the other enantiomer.</li><li>Moving three groups round one place (F → H → Cl → F) is a rotation about the C–Br bond: same molecule.</li><li>The drawing with the wedges on the left is X turned half a turn about the C–F bond: same molecule.</li><li>Two swaps (F with H, and Cl with Br) bring back the same molecule.</li></ul><p>Building a model, real or on screen, is the surest way to check: the two enantiomers cannot be superimposed.</p>
      solution: "<p>それぞれの図を X（F が上、H が左下、Cl が実線のくさび、Br が破線の結合）とくらべます。</p><ul><li>正しい図は、F と H をそのままにして、Cl と Br を入れ替えたものです。2 つの基を 1 回入れ替えると鏡像になるので、これがもう一方の鏡像異性体です。</li><li>3 つの基を 1 つずつ順に回したもの（F → H → Cl → F）は、C–Br 結合を軸にした回転です。同じ分子です。</li><li>くさびが左側にある図は、X を C–F 結合を軸に半回転させたものです。同じ分子です。</li><li>2 回の入れ替え（F と H、Cl と Br）では、同じ分子に戻ります。</li></ul><p>いちばん確実な確かめ方は、実物または画面上で模型を作ることです。2 つの鏡像異性体は重ね合わせることができません。</p>",
      misconception: {
        // EN (option A): Br has not moved, and F, H and Cl have each moved one place round. This is X rotated about the C–Br bond, so it is the same molecule.
        "0": "Br は動いていません。F、H、Cl がそれぞれ 1 つずつ隣へ回っています。これは X を C–Br 結合を軸に回転させたものなので、同じ分子です。",
        // EN (option B): This is X turned half a turn about the vertical C–F bond. The H swings to the right, Cl goes to the back and Br comes to the front. It is still X.
        "1": "これは X を縦の C–F 結合を軸に半回転させたものです。H は右へ回り、Cl は奥へ、Br は手前へ来ます。これも X です。",
        // EN (option D): Compared with X, two pairs of groups have been swapped (F with H, and Cl with Br). One swap gives the mirror image. A second swap brings back the original.
        "3": "X とくらべると、2 組の基が入れ替わっています（F と H、Cl と Br）。1 回の入れ替えで鏡像になります。2 回目の入れ替えで、もとに戻ります。",
      },
    },

    // ── s3-2h-q015 · short · challenge · AHL · Structure 3.2.7 · 3 marks
    "s3-2h-q015": {
      // EN: <p>2-hydroxypropanoic acid (lactic acid), <span class="chem">CH<sub>3</sub>CH(OH)COOH<span></span></span>, exists as two enantiomers.</p><p>On paper, identify the chiral carbon atom and draw stereochemical formulas of the two enantiomers. Then compare your drawing with the model answer.</p>
      stem: "<p>2-hydroxypropanoic acid（乳酸、lactic acid）<span class=\"chem\">CH<sub>3</sub>CH(OH)COOH<span></span></span> には 2 つの鏡像異性体があります。</p><p>紙の上で、キラル炭素原子を特定し (identify)、2 つの鏡像異性体の立体化学式 (stereochemical formulas) を描きなさい (draw)。そのあと、自分の図を模範解答とくらべましょう。</p>",
      hints: [
        // EN: Find the carbon with four different groups.
        "異なる 4 つの基をもつ炭素を見つけましょう。",
        // EN: Draw that carbon in the centre. Use two plain lines, one solid wedge and one hashed wedge for its four bonds.
        "その炭素を中心に描きます。4 本の結合には、ふつうの線 2 本、実線のくさび 1 本、破線のくさび 1 本を使います。",
        // EN: For the second enantiomer, draw the reflection of the first in an imaginary mirror placed beside it.
        "2 つ目の鏡像異性体は、1 つ目の横に鏡を置いたと考えて、そこに映る像を描きます。",
      ],
      // EN: <p>Markschemes give one mark for each correct enantiomer. Flat drawings with 90° angles do not score: the tetrahedral arrangement must be shown with tapered (wedge and hashed) bonds. If you redraw the same molecule in a different orientation instead of its mirror image, you score only one of the two drawing marks.</p>
      solution: "<p>採点基準では、正しい鏡像異性体 1 つにつき 1 点です。90° の角度で描いた平らな図は点になりません。四面体形の配置を、先が広がる結合（実線のくさびと破線のくさび）で示す必要があります。鏡像ではなく、同じ分子を向きを変えて描き直した場合は、図の 2 点のうち 1 点しかもらえません。</p>",
      // EN: <p>The chiral carbon is carbon 2. It is bonded to four different groups: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and COOH.</p><p>The two enantiomers, drawn as mirror images:</p><p><svg class="q-fig" viewBox="-53.6 -46.5 95 94" width="95" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: COOH up in the plane, CH3 to the lower left in the plane, OH on a solid wedge to the lower right, H on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">COOH</tspan></text><text x="-21.6" y="20.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">H</tspan><tspan dy="4" font-size="10">3</tspan><tspan dy="-4">C</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="30.0" y="14.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg> &nbsp; <svg class="q-fig" viewBox="-41.0 -46.5 95 94" width="95" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: COOH up in the plane, CH3 to the lower right in the plane, OH on a solid wedge to the lower left, H on a hashed wedge to the left"><line x1="0.0" y1="-9.0" x2="0.0" y2="-19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7.9" y1="4.3" x2="19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="-3.4,8.3 -12.5,20.9 -5.8,23.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-11.1" y1="2.1" x2="-10.4" y2="4.3" stroke="currentColor" stroke-width="1.3"/><line x1="-13.4" y1="2.3" x2="-12.4" y2="5.5" stroke="currentColor" stroke-width="1.3"/><line x1="-15.6" y1="2.4" x2="-14.4" y2="6.6" stroke="currentColor" stroke-width="1.3"/><line x1="-17.9" y1="2.5" x2="-16.3" y2="7.8" stroke="currentColor" stroke-width="1.3"/><line x1="-20.2" y1="2.6" x2="-18.3" y2="8.9" stroke="currentColor" stroke-width="1.3"/><line x1="-22.5" y1="2.8" x2="-20.3" y2="10.1" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">COOH</tspan></text><text x="21.6" y="20.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">CH</tspan><tspan dy="4" font-size="10">3</tspan></text><text x="-6.6" y="35.6" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">HO</tspan></text><text x="-30.0" y="14.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg></p><p>Any orientation is accepted if the four groups are arranged tetrahedrally and the second drawing is the mirror image of the first.</p>
      answer: "<p>キラル炭素原子は炭素 2 です。異なる 4 つの基、H、OH、<span class=\"chem\">CH<sub>3</sub><span></span></span>、COOH と結合しています。</p><p>鏡像として描いた 2 つの鏡像異性体：</p><p><svg class=\"q-fig\" viewBox=\"-53.6 -46.5 95 94\" width=\"95\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: COOH up in the plane, CH3 to the lower left in the plane, OH on a solid wedge to the lower right, H on a hashed wedge to the right\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">COOH</tspan></text><text x=\"-21.6\" y=\"20.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan><tspan dy=\"4\" font-size=\"10\">3</tspan><tspan dy=\"-4\">C</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"30.0\" y=\"14.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg> &nbsp; <svg class=\"q-fig\" viewBox=\"-41.0 -46.5 95 94\" width=\"95\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Carbon atom with four bonds: COOH up in the plane, CH3 to the lower right in the plane, OH on a solid wedge to the lower left, H on a hashed wedge to the left\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"7.9\" y1=\"4.3\" x2=\"19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"-3.4,8.3 -12.5,20.9 -5.8,23.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-11.1\" y1=\"2.1\" x2=\"-10.4\" y2=\"4.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-13.4\" y1=\"2.3\" x2=\"-12.4\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-15.6\" y1=\"2.4\" x2=\"-14.4\" y2=\"6.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-17.9\" y1=\"2.5\" x2=\"-16.3\" y2=\"7.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-20.2\" y1=\"2.6\" x2=\"-18.3\" y2=\"8.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-22.5\" y1=\"2.8\" x2=\"-20.3\" y2=\"10.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">COOH</tspan></text><text x=\"21.6\" y=\"20.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">CH</tspan><tspan dy=\"4\" font-size=\"10\">3</tspan></text><text x=\"-6.6\" y=\"35.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">HO</tspan></text><text x=\"-30.0\" y=\"14.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg></p><p>4 つの基が四面体形に配置されていて、2 つ目の図が 1 つ目の鏡像になっていれば、どの向きで描いても認められます。</p>",
      markscheme: [
        // EN: Chiral carbon identified: carbon 2 / the carbon bonded to H, OH, CH₃ and COOH (circled or starred on the drawing is fine).
        "キラル炭素原子を特定している：炭素 2 / H、OH、CH₃、COOH と結合している炭素（図の上で丸や星印をつけてもよい）。",
        // EN: One enantiomer drawn in 3D: two bonds in the plane, one solid wedge, one hashed (dashed) wedge, with H, OH, CH₃ and COOH on the central carbon.
        "一方の鏡像異性体を 3D で描いている：平面内の結合 2 本、実線のくさび 1 本、破線のくさび 1 本で、中心の炭素に H、OH、CH₃、COOH がついている。",
        // EN: The second structure drawn as the mirror image of the first (or with any two groups exchanged), also in 3D.
        "2 つ目の構造を、1 つ目の鏡像として（または任意の 2 つの基を入れ替えて）、同じく 3D で描いている。",
      ],
    },

    // ── s3-2h-q016 · numeric · foundation · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q016": {
      // EN: <p>The sketch shows the main peaks in the mass spectrum of a compound that contains C, H and O.</p><p><svg class="q-fig" viewBox="0 0 300 178" width="300" height="178" style="max-width:100%;height:auto" role="img" aria-label="Mass spectrum sketch with three peaks: m/z 15 with relative abundance 12, m/z 43 with relative abundance 100, and m/z 58 with relative abundance 25."><path d="M34 18V144H290" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="34" y1="144" x2="34" y2="149" stroke="currentColor" stroke-width="1"/><text x="34" y="161" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="70.57142857142857" y1="144" x2="70.57142857142857" y2="147" stroke="currentColor" stroke-width="1"/><line x1="107.14285714285714" y1="144" x2="107.14285714285714" y2="149" stroke="currentColor" stroke-width="1"/><text x="107.14285714285714" y="161" text-anchor="middle" font-size="11" fill="currentColor">20</text><line x1="143.71428571428572" y1="144" x2="143.71428571428572" y2="147" stroke="currentColor" stroke-width="1"/><line x1="180.28571428571428" y1="144" x2="180.28571428571428" y2="149" stroke="currentColor" stroke-width="1"/><text x="180.28571428571428" y="161" text-anchor="middle" font-size="11" fill="currentColor">40</text><line x1="216.85714285714286" y1="144" x2="216.85714285714286" y2="147" stroke="currentColor" stroke-width="1"/><line x1="253.42857142857142" y1="144" x2="253.42857142857142" y2="149" stroke="currentColor" stroke-width="1"/><text x="253.42857142857142" y="161" text-anchor="middle" font-size="11" fill="currentColor">60</text><line x1="290" y1="144" x2="290" y2="147" stroke="currentColor" stroke-width="1"/><line x1="30" y1="144" x2="34" y2="144" stroke="currentColor" stroke-width="1"/><text x="27" y="148" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="30" y1="81" x2="34" y2="81" stroke="currentColor" stroke-width="1"/><text x="27" y="85" text-anchor="end" font-size="11" fill="currentColor">50</text><line x1="30" y1="18" x2="34" y2="18" stroke="currentColor" stroke-width="1"/><text x="27" y="22" text-anchor="end" font-size="11" fill="currentColor">100</text><text x="162" y="175" text-anchor="middle" font-size="11" fill="currentColor">m/z</text><text x="40" y="11" font-size="11" fill="currentColor">relative abundance / %</text><line x1="88.9" y1="144" x2="88.9" y2="128.9" stroke="currentColor" stroke-width="2.4"/><text x="88.9" y="124.9" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">15</text><line x1="191.3" y1="144" x2="191.3" y2="18.0" stroke="currentColor" stroke-width="2.4"/><text x="191.3" y="14.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">43</text><line x1="246.1" y1="144" x2="246.1" y2="112.5" stroke="currentColor" stroke-width="2.4"/><text x="246.1" y="108.5" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">58</text></svg></p><p>The peak with the highest m/z value is the molecular ion. What is the relative molecular mass, M<sub>r</sub>, of the compound?</p>
      stem: "<p>図は、C、H、O を含むある化合物の質量スペクトルのおもなピークを示しています。</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 178\" width=\"300\" height=\"178\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"Mass spectrum sketch with three peaks: m/z 15 with relative abundance 12, m/z 43 with relative abundance 100, and m/z 58 with relative abundance 25.\"><path d=\"M34 18V144H290\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"34\" y1=\"144\" x2=\"34\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"34\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"70.57142857142857\" y1=\"144\" x2=\"70.57142857142857\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"107.14285714285714\" y1=\"144\" x2=\"107.14285714285714\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"107.14285714285714\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">20</text><line x1=\"143.71428571428572\" y1=\"144\" x2=\"143.71428571428572\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"180.28571428571428\" y1=\"144\" x2=\"180.28571428571428\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.28571428571428\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">40</text><line x1=\"216.85714285714286\" y1=\"144\" x2=\"216.85714285714286\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"253.42857142857142\" y1=\"144\" x2=\"253.42857142857142\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"253.42857142857142\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">60</text><line x1=\"290\" y1=\"144\" x2=\"290\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"30\" y1=\"144\" x2=\"34\" y2=\"144\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"148\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"30\" y1=\"81\" x2=\"34\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"85\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">50</text><line x1=\"30\" y1=\"18\" x2=\"34\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"22\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">100</text><text x=\"162\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">m/z</text><text x=\"40\" y=\"11\" font-size=\"11\" fill=\"currentColor\">relative abundance / %</text><line x1=\"88.9\" y1=\"144\" x2=\"88.9\" y2=\"128.9\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"88.9\" y=\"124.9\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">15</text><line x1=\"191.3\" y1=\"144\" x2=\"191.3\" y2=\"18.0\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"191.3\" y=\"14.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">43</text><line x1=\"246.1\" y1=\"144\" x2=\"246.1\" y2=\"112.5\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"246.1\" y=\"108.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">58</text></svg></p><p>m/z の値がいちばん大きいピークが分子イオン (molecular ion) です。この化合物の相対分子質量 M<sub>r</sub> はいくつですか。</p>",
      hints: [
        // EN: The molecular ion is the whole molecule with one electron removed. Its mass is the mass of the molecule.
        "分子イオンは、分子全体から電子が 1 個取れたものです。その質量は分子の質量と同じです。",
        // EN: Do not choose the tallest peak. Choose the molecular ion peak, which is the one furthest to the right here.
        "いちばん高いピークを選ばないようにしましょう。選ぶのは分子イオンピークで、ここではいちばん右にあるピークです。",
      ],
      // EN: <p>The molecular ion, M<sup>+</sup>, is the whole molecule after it has lost one electron. Its m/z value equals the relative molecular mass.</p><p>The molecular ion peak is at m/z 58, so M<sub>r</sub> = <strong>58</strong>.</p><p>The tallest peak (m/z 43) is a fragment. It is formed when the molecular ion breaks apart. (These are the main peaks of propanone.)</p>
      solution: "<p>分子イオン M<sup>+</sup> は、分子全体が電子を 1 個失ったものです。その m/z の値は相対分子質量に等しくなります。</p><p>分子イオンピークは m/z 58 にあるので、M<sub>r</sub> = <strong>58</strong> です。</p><p>いちばん高いピーク（m/z 43）はフラグメント (fragment) です。分子イオンがこわれるとできます。（これは propanone のおもなピークです。）</p>",
    },

    // ── s3-2h-q017 · mcq · foundation · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q017": {
      // EN: <p>The mass spectrum of propanone has a peak at m/z 15. Which species causes this peak?</p>
      stem: "<p>propanone の質量スペクトルには m/z 15 にピークがあります。このピークのもとになる化学種はどれですか。</p>",
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
        "質量が 15 になる原子のグループはどれですか。",
        // EN: What kind of particle does a mass spectrometer detect: neutral, positive or negative?
        "質量分析計が検出するのは、どんな粒子ですか。中性の粒子、陽イオン、陰イオンのどれでしょう。",
      ],
      // EN: <p>A methyl group has mass 12 + 3 × 1 = 15. The detector only records positive ions, so the peak at m/z 15 is caused by <span class="chem">CH<sub>3</sub><sup>+</sup><span></span></span>.</p><p>Always write the + charge on a fragment that gives a peak.</p>
      solution: "<p>メチル基の質量は 12 + 3 × 1 = 15 です。検出器は陽イオンだけを記録するので、m/z 15 のピークのもとは <span class=\"chem\">CH<sub>3</sub><sup>+</sup><span></span></span> です。</p><p>ピークを生じるフラグメントには、必ず + の電荷を書きましょう。</p>",
      misconception: {
        // EN (option B): The formula is right but the charge is missing. A neutral radical is not deflected or detected. Only positive ions give peaks, and markschemes give no mark for a fragment written without its + charge.
        "1": "式は合っていますが、電荷がありません。中性のラジカルは曲げられず、検出もされません。ピークを生じるのは陽イオンだけです。採点基準でも、+ の電荷がないフラグメントには点が与えられません。",
        // EN (option C): A mass spectrometer produces and detects positive ions, formed when electrons are knocked out of molecules.
        "2": "質量分析計は陽イオンを作り、それを検出します。陽イオンは、分子から電子がたたき出されてできます。",
        // EN (option D): Check the mass: O + H = 16 + 1 = 17, not 15.
        "3": "質量を確かめましょう。O + H = 16 + 1 = 17 で、15 ではありません。",
      },
    },

    // ── s3-2h-q018 · numeric · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q018": {
      // EN: <p>Propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>, has a molecular ion peak at m/z 74.</p><p>Some molecular ions break up by losing a •COOH fragment. At what m/z value does the ion that is formed appear?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Propanoic acid <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span> の分子イオンピークは m/z 74 にあります。</p><p>一部の分子イオンは、•COOH フラグメントを失ってこわれます。このときできるイオンは、m/z がいくつのところに現れますか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 22）より：質量スペクトルで失われるフラグメント</caption><thead><tr><th scope=\"col\">失われた質量 (mass lost)</th><th scope=\"col\">失われる中性フラグメントの候補 (Possible neutral fragment lost)</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> または CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> または •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
      hints: [
        // EN: Find the mass of •COOH in the table.
        "表で •COOH の質量を見つけましょう。",
        // EN: The table gives the mass that is <strong>lost</strong>. The peak is at the mass that is <strong>left</strong>.
        "表にあるのは<strong>失われる</strong>質量です。ピークは<strong>残る</strong>質量のところに現れます。",
      ],
      // EN: <p>The neutral fragment •COOH has a mass of 45. It is not detected.</p><div class="worked__math">m/z of ion left = 74 − 45 = <b>29</b></div><p>The ion is <span class="chem">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span> (2 × 12 + 5 × 1 = 29). The real spectrum of propanoic acid has a strong peak at m/z 29.</p>
      solution: "<p>中性のフラグメント •COOH の質量は 45 です。これは検出されません。</p><div class=\"worked__math\">残るイオンの m/z = 74 − 45 = <b>29</b></div><p>このイオンは <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span> です（2 × 12 + 5 × 1 = 29）。実際の propanoic acid のスペクトルにも、m/z 29 に強いピークがあります。</p>",
    },

    // ── s3-2h-q019 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q019": {
      // EN: <p>The mass spectrum of butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>, has its molecular ion peak at m/z 72 and its tallest peak at m/z 43.</p><p>Which ion causes the peak at m/z 43?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Butanone <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> の質量スペクトルでは、分子イオンピークが m/z 72 に、いちばん高いピークが m/z 43 にあります。</p><p>m/z 43 のピークのもとになるイオンはどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 22）より：質量スペクトルで失われるフラグメント</caption><thead><tr><th scope=\"col\">失われた質量 (mass lost)</th><th scope=\"col\">失われる中性フラグメントの候補 (Possible neutral fragment lost)</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> または CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> または •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
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
        "失われた質量を求めましょう：72 − 43。",
        // EN: Which neutral fragment in the table has that mass and is present in butanone? What is left behind?
        "表の中で、その質量をもち、butanone に含まれている中性フラグメントはどれですか。あとに何が残りますか。",
      ],
      // EN: <div class="worked__math">mass lost = 72 − 43 = 29</div><p>A loss of 29 is •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> (or •CHO, but butanone has no CHO group). Butanone has an ethyl group next to the C=O group, so the C–C bond there breaks:</p><div class="worked__math">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub></div><p>The ion left is <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>, mass 15 + 12 + 16 = 43.</p>
      solution: "<div class=\"worked__math\">失われた質量 = 72 − 43 = 29</div><p>29 の減少は •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> です（•CHO の可能性もありますが、butanone に CHO 基はありません）。butanone では C=O 基の隣にエチル基があるので、そこの C–C 結合が切れます。</p><div class=\"worked__math\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub></div><p>残るイオンは <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span> で、質量は 15 + 12 + 16 = 43 です。</p>",
      misconception: {
        // EN (option A): This ion has a mass of 57. It forms when the molecular ion loses •<span class="chem">CH<sub>3</sub><span></span></span> (72 − 15 = 57).
        "0": "このイオンの質量は 57 です。分子イオンが •<span class=\"chem\">CH<sub>3</sub><span></span></span> を失うとできます（72 − 15 = 57）。",
        // EN (option C): This ion has a mass of 29. Here 29 is the mass that is lost, not the mass that is detected.
        "2": "このイオンの質量は 29 です。ここでは、29 は失われた質量で、検出される質量ではありません。",
        // EN (option D): The atoms are right, but a neutral fragment gives no peak. The ion must be written with a + charge.
        "3": "原子は合っていますが、中性のフラグメントはピークを生じません。イオンは + の電荷をつけて書かなければなりません。",
      },
    },

    // ── s3-2h-q020 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q020": {
      // EN: <p>Propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>, and propan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>, are isomers with M<sub>r</sub> = 60. In each molecular ion, the C–C bond next to the carbon that holds the OH group breaks easily.</p><p>Which peak is expected to be strong in the mass spectrum of propan-1-ol but weak in that of propan-2-ol?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Propan-1-ol <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span> と propan-2-ol <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span> は、M<sub>r</sub> = 60 の異性体です。どちらの分子イオンでも、OH 基がついた炭素の隣の C–C 結合が切れやすくなっています。</p><p>propan-1-ol の質量スペクトルでは強く、propan-2-ol では弱いと予想されるピークはどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 22）より：質量スペクトルで失われるフラグメント</caption><thead><tr><th scope=\"col\">失われた質量 (mass lost)</th><th scope=\"col\">失われる中性フラグメントの候補 (Possible neutral fragment lost)</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> または CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> または •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
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
        "それぞれの分子を描きましょう。C–OH の炭素に C–C 結合でついている基は何ですか。",
        // EN: In propan-1-ol that group is ethyl. In propan-2-ol it is methyl. Subtract the mass lost from 60.
        "propan-1-ol ではエチル基、propan-2-ol ではメチル基です。60 から失われる質量を引きましょう。",
      ],
      // EN: <p><strong>Propan-1-ol:</strong> the C–OH carbon is bonded to an ethyl group. Losing •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> (29) leaves <span class="chem">CH<sub>2</sub>OH<sup>+</sup><span></span></span>:</p><div class="worked__math">60 − 29 = <b>31</b></div><p><strong>Propan-2-ol:</strong> the C–OH carbon is bonded to two methyl groups. Losing •<span class="chem">CH<sub>3</sub><span></span></span> (15) leaves <span class="chem">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>:</p><div class="worked__math">60 − 15 = 45</div><p>So a strong peak at m/z 31 points to propan-1-ol. In the real spectra, m/z 31 is the tallest peak for propan-1-ol and m/z 45 is the tallest peak for propan-2-ol.</p>
      solution: "<p><strong>Propan-1-ol：</strong>C–OH の炭素はエチル基と結合しています。•<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>（29）を失うと <span class=\"chem\">CH<sub>2</sub>OH<sup>+</sup><span></span></span> が残ります。</p><div class=\"worked__math\">60 − 29 = <b>31</b></div><p><strong>Propan-2-ol：</strong>C–OH の炭素は 2 個のメチル基と結合しています。•<span class=\"chem\">CH<sub>3</sub><span></span></span>（15）を失うと <span class=\"chem\">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span> が残ります。</p><div class=\"worked__math\">60 − 15 = 45</div><p>したがって、m/z 31 の強いピークは propan-1-ol を示します。実際のスペクトルでも、propan-1-ol では m/z 31 が、propan-2-ol では m/z 45 がいちばん高いピークです。</p>",
      misconception: {
        // EN (option A): A mass of 15 is the methyl fragment. When the C–C bond breaks, the charge mostly stays on the part that contains oxygen, so this is not the peak that picks out propan-1-ol.
        "0": "質量 15 はメチルのフラグメントです。C–C 結合が切れるとき、電荷はおもに酸素を含む側に残ります。だから、これは propan-1-ol を見分けるピークではありません。",
        // EN (option C): m/z 45 is 60 − 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span> from the carbon next to C–OH. Propan-2-ol does this, giving <span class="chem">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>. It is the strong peak of propan-2-ol.
        "2": "m/z 45 は 60 − 15 で、C–OH の隣の炭素から •<span class=\"chem\">CH<sub>3</sub><span></span></span> が失われたものです。これは propan-2-ol で起こり、<span class=\"chem\">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span> ができます。propan-2-ol の強いピークです。",
        // EN (option D): m/z 60 is the molecular ion. Isomers have the same M<sub>r</sub>, so this peak cannot tell them apart.
        "3": "m/z 60 は分子イオンです。異性体は M<sub>r</sub> が同じなので、このピークでは区別できません。",
      },
    },

    // ── s3-2h-q021 · short · challenge · AHL · Structure 3.2.8 · 3 marks
    "s3-2h-q021": {
      // EN: <p>Pentan-2-one, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>, and pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>, are isomers. The table shows the main peaks in the mass spectra of the two compounds, labelled P and Q.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Main peaks (m/z); the tallest peak is in bold</caption><thead><tr><th scope="col">Spectrum</th><th scope="col">Peaks</th></tr></thead><tbody><tr><th scope="row">P</th><td>29, <b>57</b>, 86</td></tr><tr><th scope="row">Q</th><td><b>43</b>, 71, 86</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Deduce which compound gave each spectrum. Use two of the fragment peaks in your explanation.</p>
      stem: "<p>Pentan-2-one <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span> と pentan-3-one <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> は異性体です。表は、この 2 つの化合物の質量スペクトル（P と Q）のおもなピークを示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>おもなピーク（m/z）。いちばん高いピークは太字</caption><thead><tr><th scope=\"col\">スペクトル</th><th scope=\"col\">ピーク</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td>29, <b>57</b>, 86</td></tr><tr><th scope=\"row\">Q</th><td><b>43</b>, 71, 86</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 22）より：質量スペクトルで失われるフラグメント</caption><thead><tr><th scope=\"col\">失われた質量 (mass lost)</th><th scope=\"col\">失われる中性フラグメントの候補 (Possible neutral fragment lost)</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> または CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> または •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>それぞれのスペクトルがどちらの化合物のものかを導きなさい (deduce)。説明には、フラグメントピークを 2 つ使いなさい。</p>",
      hints: [
        // EN: Both have a molecular ion at m/z 86. Subtract each fragment peak from 86 to find the mass lost.
        "どちらも分子イオンは m/z 86 にあります。86 からそれぞれのフラグメントピークを引いて、失われた質量を求めましょう。",
        // EN: Ketones tend to break at the C–C bond next to the C=O group. Which groups sit next to C=O in each isomer?
        "ケトンは、C=O 基の隣の C–C 結合で切れやすい性質があります。それぞれの異性体で、C=O の隣にはどんな基がありますか。",
      ],
      // EN: <p>Method: mass lost = M − fragment peak, then match the mass lost to the booklet table and to a group that the molecule really contains.</p><div class="worked__math">P: 86 − 57 = 29 → •CH<sub>2</sub>CH<sub>3</sub> lost</div><div class="worked__math">Q: 86 − 71 = 15 → •CH<sub>3</sub> lost</div><p>Pentan-3-one has two ethyl groups next to C=O and no methyl group there. Pentan-2-one has a methyl group next to C=O. The peaks are those of the real spectra.</p>
      solution: "<p>解き方：失われた質量 = M − フラグメントピーク。次に、失われた質量を、データブックレットの表と、分子が実際にもっている基に照らし合わせます。</p><div class=\"worked__math\">P: 86 − 57 = 29 → •CH<sub>2</sub>CH<sub>3</sub> が失われた</div><div class=\"worked__math\">Q: 86 − 71 = 15 → •CH<sub>3</sub> が失われた</div><p>pentan-3-one は C=O の隣にエチル基が 2 個あり、そこにメチル基はありません。pentan-2-one は C=O の隣にメチル基があります。ピークは実際のスペクトルのものです。</p>",
      // EN: <p>P is pentan-3-one and Q is pentan-2-one.</p><p>The peak at m/z 57 in P is M − 29: loss of •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> to leave <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>. Pentan-3-one has an ethyl group on each side of the C=O group, so it loses 29 easily.</p><p>The peak at m/z 71 in Q is M − 15: loss of •<span class="chem">CH<sub>3</sub><span></span></span> to leave <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>. Only pentan-2-one has a <span class="chem">CH<sub>3</sub><span></span></span> group bonded to the C=O carbon. (The peak at m/z 43 in Q is <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>, which also needs a <span class="chem">CH<sub>3</sub><span></span></span> next to C=O.)</p>
      answer: "<p>P は pentan-3-one、Q は pentan-2-one です。</p><p>P の m/z 57 のピークは M − 29 です。•<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> が失われて <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span> が残ります。pentan-3-one は C=O 基の両側にエチル基があるので、29 を失いやすいのです。</p><p>Q の m/z 71 のピークは M − 15 です。•<span class=\"chem\">CH<sub>3</sub><span></span></span> が失われて <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span> が残ります。C=O の炭素に <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が結合しているのは pentan-2-one だけです。（Q の m/z 43 のピークは <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span> で、これにも C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span> が必要です。）</p>",
      markscheme: [
        // EN: P is pentan-3-one AND Q is pentan-2-one.
        "P が pentan-3-one で、かつ Q が pentan-2-one。",
        // EN: m/z 57 = 86 − 29, loss of •CH₂CH₃ / the ion CH₃CH₂CO⁺, which fits an ethyl group next to C=O in pentan-3-one. (Accept m/z 29 = CH₃CH₂⁺.)
        "m/z 57 = 86 − 29。•CH₂CH₃ が失われる / イオン CH₃CH₂CO⁺。これは pentan-3-one の C=O の隣のエチル基に合う。（m/z 29 = CH₃CH₂⁺ も可。）",
        // EN: m/z 71 = 86 − 15, loss of •CH₃ next to C=O in pentan-2-one; OR m/z 43 is CH₃CO⁺, which needs CH₃ next to C=O. Ions must be written with a + charge.
        "m/z 71 = 86 − 15。pentan-2-one の C=O の隣の •CH₃ が失われる。または、m/z 43 は CH₃CO⁺ で、C=O の隣に CH₃ が必要。イオンは + の電荷をつけて書くこと。",
      ],
    },

    // ── s3-2h-q022 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q022": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Other evidence shows that each molecule contains <strong>one</strong> oxygen atom. The molecular ion peak in its mass spectrum is at m/z 72.</p><p>What is the molecular formula of the compound?</p>
      stem: "<p>ある化合物は炭素、水素、酸素だけを含みます。ほかの証拠から、1 分子に酸素原子が<strong>1 個</strong>含まれることがわかっています。質量スペクトルの分子イオンピークは m/z 72 にあります。</p><p>この化合物の分子式はどれですか。</p>",
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
        "72 から酸素原子 1 個の質量を引きましょう。",
        // EN: Build the remaining mass from carbon (12) and hydrogen (1).
        "残りの質量を、炭素（12）と水素（1）で組み立てましょう。",
      ],
      // EN: <div class="worked__math">72 − 16 = 56 left for C and H</div><div class="worked__math">4 × 12 = 48, &nbsp; 56 − 48 = 8 → 8 H</div><p>The molecular formula is <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>. (Three carbons would need 20 H atoms, which is impossible, and five carbons give 60, which is too much.)</p>
      solution: "<div class=\"worked__math\">72 − 16 = 56 が C と H の分</div><div class=\"worked__math\">4 × 12 = 48, &nbsp; 56 − 48 = 8 → H が 8 個</div><p>分子式は <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<span></span></span> です。（炭素が 3 個だと H 原子が 20 個必要になり、ありえません。炭素が 5 個だと 60 になり、多すぎます。）</p>",
      misconception: {
        // EN (option B): This formula does add up to 72, but it has two oxygen atoms. The question says there is one.
        "1": "この式は合計が 72 になりますが、酸素原子が 2 個あります。問題文では 1 個です。",
        // EN (option C): This formula adds up to 72, but it has no oxygen atom.
        "2": "この式は合計が 72 になりますが、酸素原子がありません。",
        // EN (option D): Check the mass: 4 × 12 + 10 × 1 + 16 = 74, not 72.
        "3": "質量を確かめましょう。4 × 12 + 10 × 1 + 16 = 74 で、72 ではありません。",
      },
    },

    // ── s3-2h-q023 · mcq · foundation · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q023": {
      // EN: <p>The infrared spectrum of a compound has a strong, sharp absorption at 1715 cm<sup>−1</sup>. Which bond causes it?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>ある化合物の赤外（IR）スペクトルには、1715 cm<sup>−1</sup> に強くて鋭い吸収があります。この吸収のもとになる結合はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>アルコール、エステル、エーテル (alcohols, esters, ethers)</td><td>1050–1410</td><td>強い (strong)</td></tr><tr><th scope=\"row\">C=C</th><td>アルケン (alkenes)</td><td>1620–1680</td><td>中〜弱、複数の吸収帯 (medium-weak; multiple bands)</td></tr><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>アルカン、アルケン、芳香族化合物 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div>",
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
        "表の中で、範囲に 1715 が入る行を見つけましょう。",
      ],
      // EN: <p>1715 cm<sup>−1</sup> lies in the range 1700–1750 cm<sup>−1</sup>. This strong absorption is caused by a C=O bond. The compound could be an aldehyde, a ketone, a carboxylic acid or an ester.</p>
      solution: "<p>1715 cm<sup>−1</sup> は 1700–1750 cm<sup>−1</sup> の範囲に入ります。この強い吸収は C=O 結合によるものです。化合物はアルデヒド、ケトン、カルボン酸、エステルのどれかです。</p>",
      misconception: {
        // EN (option A): C–O absorbs at 1050–1410 cm<sup>−1</sup>. The single bond and the double bond are easy to mix up, so check the table row carefully.
        "0": "C–O の吸収は 1050–1410 cm<sup>−1</sup> です。単結合と二重結合はまちがえやすいので、表の行をよく確かめましょう。",
        // EN (option B): C=C absorbs at 1620–1680 cm<sup>−1</sup>, and its absorption is medium to weak, not strong.
        "1": "C=C の吸収は 1620–1680 cm<sup>−1</sup> で、強さは中程度から弱く、強くはありません。",
        // EN (option D): O–H absorptions are broad and appear at much higher wavenumbers (2500–3000 or 3200–3600 cm<sup>−1</sup>).
        "3": "O–H の吸収は幅広く、ずっと大きい波数（2500–3000 または 3200–3600 cm<sup>−1</sup>）に現れます。",
      },
    },

    // ── s3-2h-q024 · mcq · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q024": {
      // EN: <p>The infrared spectrum of a compound shows a strong, very broad absorption from 2500 to 3000 cm<sup>−1</sup> and a strong absorption at 1715 cm<sup>−1</sup>.</p><p>Which compound could it be?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>ある化合物の赤外スペクトルには、2500 から 3000 cm<sup>−1</sup> にかけて強くて非常に幅広い吸収があり、1715 cm<sup>−1</sup> に強い吸収があります。</p><p>この化合物はどれだと考えられますか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>アルコール、エステル、エーテル (alcohols, esters, ethers)</td><td>1050–1410</td><td>強い (strong)</td></tr><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>アルカン、アルケン、芳香族化合物 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "propan-1-ol, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>
        "propanal, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>",
        // EN: propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>
        "propanoic acid, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: Assign each absorption to a bond using the table.
        "表を使って、それぞれの吸収を結合に割り当てましょう。",
        // EN: Which class of compound has both of these bonds in one functional group?
        "この 2 つの結合を 1 つの官能基の中にもつのは、どの種類の化合物ですか。",
      ],
      // EN: <p>1715 cm<sup>−1</sup> is in the C=O range (1700–1750 cm<sup>−1</sup>). The very broad absorption at 2500–3000 cm<sup>−1</sup> is the O–H bond of a carboxylic acid. A carboxyl group, –COOH, has both, so the compound is propanoic acid.</p>
      solution: "<p>1715 cm<sup>−1</sup> は C=O の範囲（1700–1750 cm<sup>−1</sup>）にあります。2500–3000 cm<sup>−1</sup> の非常に幅広い吸収は、カルボン酸の O–H 結合です。カルボキシ基 –COOH は両方をもつので、この化合物は propanoic acid です。</p>",
      misconception: {
        // EN (option A): An alcohol has no C=O bond, so it has no absorption at 1700–1750 cm<sup>−1</sup>. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.
        "0": "アルコールには C=O 結合がないので、1700–1750 cm<sup>−1</sup> に吸収はありません。アルコールの O–H の吸収は 3200–3600 cm<sup>−1</sup> です。",
        // EN (option B): An aldehyde has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "1": "アルデヒドには C=O の吸収がありますが、O–H 結合はありません。だから、2500–3000 cm<sup>−1</sup> の非常に幅広い吸収は出ません。",
        // EN (option D): An ester has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "3": "エステルには C=O の吸収がありますが、O–H 結合はありません。だから、2500–3000 cm<sup>−1</sup> の非常に幅広い吸収は出ません。",
      },
    },

    // ── s3-2h-q025 · mcq · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q025": {
      // EN: <p>Propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>, and methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>, are isomers.</p><p>Which feature of their infrared spectra tells them apart?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Propanoic acid <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span> と methyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span> は異性体です。</p><p>赤外スペクトルのどの特徴で、この 2 つを区別できますか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>アルコール、エステル、エーテル (alcohols, esters, ethers)</td><td>1050–1410</td><td>強い (strong)</td></tr><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>アルカン、アルケン、芳香族化合物 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: Only methyl ethanoate absorbs at 1700–1750 cm<sup>−1</sup>.
        "1700–1750 cm<sup>−1</sup> に吸収があるのは methyl ethanoate だけです。",
        // EN: Only propanoic acid has a very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "2500–3000 cm<sup>−1</sup> に非常に幅広い吸収があるのは propanoic acid だけです。",
        // EN: Only propanoic acid has a broad absorption at 3200–3600 cm<sup>−1</sup>.
        "3200–3600 cm<sup>−1</sup> に幅広い吸収があるのは propanoic acid だけです。",
        // EN: Only methyl ethanoate absorbs at 2850–3090 cm<sup>−1</sup>.
        "2850–3090 cm<sup>−1</sup> に吸収があるのは methyl ethanoate だけです。",
      ],
      hints: [
        // EN: List the bonds in each molecule. Which bond is in one molecule but not in the other?
        "それぞれの分子の結合を書き出しましょう。一方にあって、もう一方にない結合はどれですか。",
        // EN: The booklet has two different O–H rows. Choose the row for carboxylic acids.
        "データブックレットには O–H の行が 2 つあります。カルボン酸の行を選びましょう。",
      ],
      // EN: <p>Both molecules have C=O, C–O and C–H bonds. Only the acid has an O–H bond. The O–H bond in a carboxylic acid gives a strong, very broad absorption at 2500–3000 cm<sup>−1</sup>. The ester has no absorption of that kind.</p>
      solution: "<p>どちらの分子にも C=O、C–O、C–H 結合があります。O–H 結合があるのは酸だけです。カルボン酸の O–H 結合は、2500–3000 cm<sup>−1</sup> に強くて非常に幅広い (strong, very broad) 吸収を示します。エステルにはそのような吸収がありません。</p>",
      misconception: {
        // EN (option A): Both molecules contain a C=O bond, so both absorb at 1700–1750 cm<sup>−1</sup>.
        "0": "どちらの分子にも C=O 結合があるので、どちらも 1700–1750 cm<sup>−1</sup> に吸収があります。",
        // EN (option C): 3200–3600 cm<sup>−1</sup> is the O–H range for alcohols. The O–H bond of a carboxylic acid absorbs at 2500–3000 cm<sup>−1</sup>.
        "2": "3200–3600 cm<sup>−1</sup> はアルコールの O–H の範囲です。カルボン酸の O–H 結合の吸収は 2500–3000 cm<sup>−1</sup> です。",
        // EN (option D): Both molecules contain C–H bonds, so both absorb at 2850–3090 cm<sup>−1</sup>.
        "3": "どちらの分子にも C–H 結合があるので、どちらも 2850–3090 cm<sup>−1</sup> に吸収があります。",
      },
    },

    // ── s3-2h-q026 · short · exam · AHL · Structure 3.2.9 · 3 marks
    "s3-2h-q026": {
      // EN: <p>Ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>, is an ester. Butanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>, is one of its isomers.</p><p>(a) Other than C–H, state two bonds in ethyl ethanoate that absorb infrared radiation, with the wavenumber range of each. (b) State one absorption that butanoic acid shows but ethyl ethanoate does not.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Ethyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span> はエステルです。Butanoic acid <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span> はその異性体の 1 つです。</p><p>(a) ethyl ethanoate の結合のうち、C–H 以外で赤外線を吸収するものを 2 つ、それぞれの波数 (wavenumber) の範囲とともに述べなさい (state)。(b) butanoic acid にはあって ethyl ethanoate にはない吸収を 1 つ述べなさい。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>アルコール、エステル、エーテル (alcohols, esters, ethers)</td><td>1050–1410</td><td>強い (strong)</td></tr><tr><th scope=\"row\">C=C</th><td>アルケン (alkenes)</td><td>1620–1680</td><td>中〜弱、複数の吸収帯 (medium-weak; multiple bands)</td></tr><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>アルカン、アルケン、芳香族化合物 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div>",
      hints: [
        // EN: An ester group has one double bond and one single bond between carbon and oxygen.
        "エステル基には、炭素と酸素の間の二重結合が 1 本と単結合が 1 本あります。",
        // EN: What does a carboxyl group have that an ester group lacks?
        "カルボキシ基にあって、エステル基にないものは何ですか。",
      ],
      // EN: <p>Each mark needs the bond <strong>and</strong> its range. The ester group –COO– contains a C=O bond and a C–O bond. The carboxyl group –COOH also has an O–H bond. Use the carboxylic acid row of the table for it, not the alcohol row.</p>
      solution: "<p>どの点も、結合<strong>と</strong>その範囲の両方が必要です。エステル基 –COO– には C=O 結合と C–O 結合があります。カルボキシ基 –COOH には、さらに O–H 結合があります。これには表のカルボン酸の行を使います。アルコールの行ではありません。</p>",
      // EN: <p>(a) C=O at 1700–1750 cm<sup>−1</sup>, and C–O at 1050–1410 cm<sup>−1</sup>.</p><p>(b) O–H in a carboxylic acid at 2500–3000 cm<sup>−1</sup> (strong and very broad).</p>
      answer: "<p>(a) C=O：1700–1750 cm<sup>−1</sup>、C–O：1050–1410 cm<sup>−1</sup>。</p><p>(b) カルボン酸の O–H：2500–3000 cm<sup>−1</sup>（強くて非常に幅広い）。</p>",
      markscheme: [
        // EN: C=O AND 1700–1750 cm⁻¹ (any value inside the range is accepted).
        "C=O、かつ 1700–1750 cm⁻¹（範囲内の値ならどれでも可）。",
        // EN: C–O AND 1050–1410 cm⁻¹ (any value inside the range is accepted).
        "C–O、かつ 1050–1410 cm⁻¹（範囲内の値ならどれでも可）。",
        // EN: O–H (in carboxylic acids) AND 2500–3000 cm⁻¹. Do not accept 3200–3600 cm⁻¹, which is for alcohols.
        "（カルボン酸の）O–H、かつ 2500–3000 cm⁻¹。3200–3600 cm⁻¹ は不可。これはアルコールの値である。",
      ],
    },

    // ── s3-2h-q027 · multi · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q027": {
      // EN: <p>Prop-2-en-1-ol has the structure <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>OH<span></span></span>. Which absorptions are expected in its infrared spectrum? Select <strong>all</strong> that apply.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Prop-2-en-1-ol の構造は <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>OH<span></span></span> です。赤外スペクトルに現れると予想される吸収はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>アルコール、エステル、エーテル (alcohols, esters, ethers)</td><td>1050–1410</td><td>強い (strong)</td></tr><tr><th scope=\"row\">C=C</th><td>アルケン (alkenes)</td><td>1620–1680</td><td>中〜弱、複数の吸収帯 (medium-weak; multiple bands)</td></tr><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">C–H</th><td>アルカン、アルケン、芳香族化合物 (alkanes, alkenes, arenes)</td><td>2850–3090</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div>",
      options: [
        // EN: C–O, 1050–1410 cm<sup>−1</sup>
        "C–O、1050–1410 cm<sup>−1</sup>",
        // EN: C=C, 1620–1680 cm<sup>−1</sup>
        "C=C、1620–1680 cm<sup>−1</sup>",
        // EN: C=O, 1700–1750 cm<sup>−1</sup>
        "C=O、1700–1750 cm<sup>−1</sup>",
        // EN: O–H of a carboxylic acid, 2500–3000 cm<sup>−1</sup>, very broad
        "カルボン酸の O–H、2500–3000 cm<sup>−1</sup>、非常に幅広い",
        // EN: C–H, 2850–3090 cm<sup>−1</sup>
        "C–H、2850–3090 cm<sup>−1</sup>",
        // EN: O–H of an alcohol, 3200–3600 cm<sup>−1</sup>, broad
        "アルコールの O–H、3200–3600 cm<sup>−1</sup>、幅広い",
      ],
      hints: [
        // EN: Write out the structure and list every type of bond it contains.
        "構造を書いて、含まれる結合の種類をすべて書き出しましょう。",
        // EN: There are two functional groups: an alkene C=C and an alcohol O–H.
        "官能基は 2 つあります。アルケンの C=C とアルコールの O–H です。",
      ],
      // EN: <p>The molecule contains these bonds: C=C (alkene), C–H, C–O and O–H (alcohol). Each gives an absorption in its booklet range. There is no C=O bond and no carboxyl group, so there is no absorption at 1700–1750 cm<sup>−1</sup> and no very broad absorption at 2500–3000 cm<sup>−1</sup>.</p>
      solution: "<p>この分子には次の結合があります。C=C（アルケン）、C–H、C–O、O–H（アルコール）です。それぞれが、データブックレットの範囲に吸収を示します。C=O 結合もカルボキシ基もないので、1700–1750 cm<sup>−1</sup> の吸収も、2500–3000 cm<sup>−1</sup> の非常に幅広い吸収もありません。</p>",
      misconception: {
        // EN (option C): The oxygen atom here is in an O–H group joined to carbon by a single bond. There is no C=O bond in the molecule. The double bond is C=C.
        "2": "この分子の酸素原子は O–H 基にあり、炭素とは単結合でつながっています。分子に C=O 結合はありません。二重結合は C=C です。",
        // EN (option D): The molecule is an alcohol, not a carboxylic acid. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.
        "3": "この分子はアルコールで、カルボン酸ではありません。O–H の吸収は 3200–3600 cm<sup>−1</sup> にあります。",
      },
    },

    // ── s3-2h-q028 · multi · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q028": {
      // EN: <p>A greenhouse gas absorbs infrared radiation. A molecule can only do this if one of its vibrations changes the dipole moment of the molecule.</p><p>Which of these gases in the atmosphere absorb infrared radiation? Select <strong>all</strong> that apply.</p>
      stem: "<p>温室効果ガス (greenhouse gas) は赤外線を吸収します。分子が赤外線を吸収できるのは、振動のどれかで分子の双極子モーメント (dipole moment) が変化するときだけです。</p><p>大気中の次の気体のうち、赤外線を吸収するものはどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
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
        "極性のある結合をもつ分子はどれですか。",
        // EN: A molecule does not need to be polar overall. It needs a vibration that changes its dipole moment.
        "分子全体が極性である必要はありません。必要なのは、双極子モーメントを変化させる振動です。",
      ],
      // EN: <p><span class="chem">CH<sub>4</sub><span></span></span>, <span class="chem">CO<sub>2</sub><span></span></span> and <span class="chem">H<sub>2</sub>O<span></span></span> all contain polar bonds. Some of their stretching and bending vibrations change the dipole moment, so they absorb infrared radiation. They are greenhouse gases.</p><p><span class="chem">CO<sub>2</sub><span></span></span> and <span class="chem">CH<sub>4</sub><span></span></span> are non-polar molecules overall, but when they bend or stretch unevenly a dipole appears. <span class="chem">N<sub>2</sub><span></span></span> and <span class="chem">O<sub>2</sub><span></span></span> have one non-polar bond each, so no vibration can change the dipole moment. That is why the two main gases in air are not greenhouse gases.</p>
      solution: "<p><span class=\"chem\">CH<sub>4</sub><span></span></span>、<span class=\"chem\">CO<sub>2</sub><span></span></span>、<span class=\"chem\">H<sub>2</sub>O<span></span></span> はどれも極性のある結合をもっています。伸縮振動や変角振動の一部で双極子モーメントが変化するので、赤外線を吸収します。これらは温室効果ガスです。</p><p><span class=\"chem\">CO<sub>2</sub><span></span></span> と <span class=\"chem\">CH<sub>4</sub><span></span></span> は分子全体では無極性ですが、折れ曲がったり、不均等に伸び縮みしたりすると双極子が生じます。<span class=\"chem\">N<sub>2</sub><span></span></span> と <span class=\"chem\">O<sub>2</sub><span></span></span> は無極性の結合を 1 本もつだけなので、どの振動でも双極子モーメントは変化しません。空気のおもな 2 つの気体が温室効果ガスでないのは、このためです。</p>",
      misconception: {
        // EN (option D): The two atoms in <span class="chem">N<sub>2</sub><span></span></span> are identical, so the bond is non-polar. Stretching it does not create a dipole, so nitrogen does not absorb infrared radiation.
        "3": "<span class=\"chem\">N<sub>2</sub><span></span></span> の 2 個の原子は同じなので、結合は無極性です。伸び縮みしても双極子は生じないので、窒素は赤外線を吸収しません。",
        // EN (option E): The two atoms in <span class="chem">O<sub>2</sub><span></span></span> are identical, so the bond is non-polar. Stretching it does not create a dipole, so oxygen does not absorb infrared radiation.
        "4": "<span class=\"chem\">O<sub>2</sub><span></span></span> の 2 個の原子は同じなので、結合は無極性です。伸び縮みしても双極子は生じないので、酸素は赤外線を吸収しません。",
      },
    },

    // ── s3-2h-q029 · short · challenge · AHL · Structure 3.2.9 · 3 marks
    "s3-2h-q029": {
      // EN: <p>Carbon dioxide makes up about 0.04% of the atmosphere and nitrogen about 78%.</p><p>Explain how carbon dioxide molecules cause a greenhouse effect, and why nitrogen molecules do not.</p>
      stem: "<p>大気の約 0.04% は二酸化炭素、約 78% は窒素です。</p><p>二酸化炭素の分子がどのように温室効果 (greenhouse effect) を引き起こすか、また窒素の分子がなぜ引き起こさないかを説明しなさい (explain)。</p>",
      hints: [
        // EN: What kind of radiation does the Earth give out?
        "地球はどんな種類の放射を出していますか。",
        // EN: What happens to the bonds of a molecule when it absorbs infrared radiation? What must change during the vibration?
        "分子が赤外線を吸収すると、結合はどうなりますか。振動の間に何が変化しなければなりませんか。",
        // EN: Compare the bond in <span class="chem">N<sub>2</sub><span></span></span> with the bonds in <span class="chem">CO<sub>2</sub><span></span></span>.
        "<span class=\"chem\">N<sub>2</sub><span></span></span> の結合と <span class=\"chem\">CO<sub>2</sub><span></span></span> の結合をくらべましょう。",
      ],
      // EN: <p>Three of the four points give full marks. A common weak answer says that <span class="chem">CO<sub>2</sub><span></span></span> "traps heat" or "reflects" radiation. The accurate words are: infrared radiation is <strong>absorbed</strong> by bond vibrations and then <strong>re-emitted</strong>. Do not say that <span class="chem">CO<sub>2</sub><span></span></span> is a polar molecule. It is non-polar overall, but its bonds are polar and its dipole moment changes as it vibrates.</p>
      solution: "<p>4 つのポイントのうち 3 つで満点です。よくある弱い答えは、<span class=\"chem\">CO<sub>2</sub><span></span></span> が「熱を閉じ込める (traps heat)」や、放射を「反射する (reflects)」というものです。正確には、赤外線は結合の振動によって<strong>吸収され (absorbed)</strong>、そのあと<strong>再放出される (re-emitted)</strong> と書きます。<span class=\"chem\">CO<sub>2</sub><span></span></span> が極性分子だと書いてはいけません。分子全体では無極性ですが、結合には極性があり、振動すると双極子モーメントが変化します。</p>",
      // EN: <p>The warm surface of the Earth emits infrared radiation. The C=O bonds in <span class="chem">CO<sub>2</sub><span></span></span> are polar, and some vibrations of the molecule (bending and uneven stretching) change its dipole moment, so <span class="chem">CO<sub>2</sub><span></span></span> absorbs infrared radiation. The molecules then re-emit the radiation in all directions, so part of it returns to the surface and the atmosphere is warmed. <span class="chem">N<sub>2</sub><span></span></span> has a non-polar bond: its vibration does not change the dipole moment, so it does not absorb infrared radiation.</p>
      answer: "<p>暖かい地表は赤外線を放出します。<span class=\"chem\">CO<sub>2</sub><span></span></span> の C=O 結合には極性があり、分子の振動の一部（変角振動と不均等な伸縮振動）で双極子モーメントが変化します。そのため <span class=\"chem\">CO<sub>2</sub><span></span></span> は赤外線を吸収します。そのあと分子は放射をあらゆる方向に再放出するので、一部が地表に戻り、大気が暖まります。<span class=\"chem\">N<sub>2</sub><span></span></span> の結合は無極性です。振動しても双極子モーメントが変化しないので、赤外線を吸収しません。</p>",
      markscheme: [
        // EN: The Earth's surface emits infrared (long-wavelength) radiation.
        "地表は赤外線（波長の長い放射）を放出する。",
        // EN: CO₂ absorbs infrared radiation because its bonds are polar / its vibrations (stretching or bending) change the dipole moment of the molecule.
        "CO₂ が赤外線を吸収するのは、結合に極性があるから / 振動（伸縮または変角）で分子の双極子モーメントが変化するから。",
        // EN: The absorbed radiation is re-emitted in all directions, so some returns to the Earth / less energy escapes to space.
        "吸収された放射はあらゆる方向に再放出されるので、一部が地球に戻る / 宇宙へ逃げるエネルギーが減る。",
        // EN: N₂ has a non-polar bond / its vibration causes no change in dipole moment, so it does not absorb infrared radiation.
        "N₂ の結合は無極性 / 振動しても双極子モーメントが変化しないので、赤外線を吸収しない。",
      ],
    },

    // ── s3-2h-q030 · mcq · challenge · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q030": {
      // EN: <p>Three bottles contain propan-1-ol, propanoic acid and methyl ethanoate. The table lists the main infrared absorptions of each liquid, apart from C–H.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Main absorptions / cm<sup>−1</sup> (not including C–H)</caption><thead><tr><th scope="col">Liquid</th><th scope="col">Absorptions</th></tr></thead><tbody><tr><th scope="row">I</th><td>1745 (strong); 1240 (strong)</td></tr><tr><th scope="row">II</th><td>2500–3000 (strong, very broad); 1715 (strong); 1240 (strong)</td></tr><tr><th scope="row">III</th><td>3200–3500 (strong, broad); 1060 (strong)</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><p>Which row identifies the three liquids?</p>
      stem: "<p>3 本のびんに propan-1-ol、propanoic acid、methyl ethanoate が入っています。表は、それぞれの液体のおもな赤外吸収を、C–H を除いて示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>おもな吸収 / cm<sup>−1</sup>（C–H を除く）</caption><thead><tr><th scope=\"col\">液体</th><th scope=\"col\">吸収</th></tr></thead><tbody><tr><th scope=\"row\">I</th><td>1745（強い）、1240（強い）</td></tr><tr><th scope=\"row\">II</th><td>2500–3000（強い、非常に幅広い）、1715（強い）、1240（強い）</td></tr><tr><th scope=\"row\">III</th><td>3200–3500（強い、幅広い）、1060（強い）</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>アルコール、エステル、エーテル (alcohols, esters, ethers)</td><td>1050–1410</td><td>強い (strong)</td></tr><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div><p>3 つの液体を正しく特定している行はどれですか。</p>",
      options: [
        // EN: I = methyl ethanoate, II = propanoic acid, III = propan-1-ol
        "I = methyl ethanoate、II = propanoic acid、III = propan-1-ol",
        // EN: I = propanoic acid, II = methyl ethanoate, III = propan-1-ol
        "I = propanoic acid、II = methyl ethanoate、III = propan-1-ol",
        // EN: I = methyl ethanoate, II = propan-1-ol, III = propanoic acid
        "I = methyl ethanoate、II = propan-1-ol、III = propanoic acid",
        // EN: I = propan-1-ol, II = propanoic acid, III = methyl ethanoate
        "I = propan-1-ol、II = propanoic acid、III = methyl ethanoate",
      ],
      hints: [
        // EN: Start with C=O (1700–1750). Which liquid does not have it?
        "C=O（1700–1750）から始めましょう。これがない液体はどれですか。",
        // EN: Then use the two different O–H ranges to separate the acid from the alcohol.
        "次に、2 つの違う O–H の範囲を使って、酸とアルコールを区別しましょう。",
      ],
      // EN: <ul><li>III has no C=O absorption. It has a broad O–H absorption at 3200–3600 cm<sup>−1</sup> and a C–O absorption: the alcohol, propan-1-ol.</li><li>II has C=O and the very broad O–H absorption at 2500–3000 cm<sup>−1</sup>: the carboxylic acid, propanoic acid.</li><li>I has C=O and C–O but no O–H absorption: the ester, methyl ethanoate.</li></ul>
      solution: "<ul><li>III には C=O の吸収がありません。3200–3600 cm<sup>−1</sup> の幅広い O–H の吸収と、C–O の吸収があります。アルコールの propan-1-ol です。</li><li>II には C=O と、2500–3000 cm<sup>−1</sup> の非常に幅広い O–H の吸収があります。カルボン酸の propanoic acid です。</li><li>I には C=O と C–O がありますが、O–H の吸収はありません。エステルの methyl ethanoate です。</li></ul>",
      misconception: {
        // EN (option B): Liquid I has no O–H absorption at all, so it cannot be the acid. Liquid II has the very broad acid O–H absorption, which an ester cannot give.
        "1": "液体 I には O–H の吸収がまったくないので、酸ではありません。液体 II には酸の非常に幅広い O–H の吸収があり、これはエステルでは出ません。",
        // EN (option C): The two O–H ranges have been swapped. The very broad absorption at 2500–3000 cm<sup>−1</sup> belongs to the carboxylic acid. An alcohol absorbs at 3200–3600 cm<sup>−1</sup> and has no C=O absorption.
        "2": "2 つの O–H の範囲が入れ替わっています。2500–3000 cm<sup>−1</sup> の非常に幅広い吸収は、カルボン酸のものです。アルコールの吸収は 3200–3600 cm<sup>−1</sup> で、C=O の吸収はありません。",
        // EN (option D): Liquid I has a C=O absorption at 1745 cm<sup>−1</sup>, which an alcohol cannot give. Liquid III has no C=O absorption, so it cannot be an ester.
        "3": "液体 I には 1745 cm<sup>−1</sup> に C=O の吸収があり、これはアルコールでは出ません。液体 III には C=O の吸収がないので、エステルではありません。",
      },
    },

    // ── s3-2h-q031 · numeric · foundation · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q031": {
      // EN: <p>How many signals are there in the <sup>1</sup>H NMR spectrum of pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>?</p>
      stem: "<p>pentan-3-one <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> の <sup>1</sup>H NMR スペクトルには、シグナル (signals) が何本ありますか。</p>",
      hints: [
        // EN: Each signal comes from hydrogen atoms in one chemical environment.
        "1 本のシグナルは、1 つの化学的環境 (chemical environment) にある水素原子から生じます。",
        // EN: The molecule is symmetrical about the C=O group. Which hydrogen atoms match each other?
        "この分子は C=O 基をはさんで対称です。互いに同じ環境にある水素原子はどれですか。",
      ],
      // EN: <p>The molecule is symmetrical: the two ethyl groups are in identical positions.</p><ul><li>The six H atoms of the two <span class="chem">CH<sub>3</sub><span></span></span> groups are in one environment.</li><li>The four H atoms of the two <span class="chem">CH<sub>2</sub><span></span></span> groups are in a second environment.</li></ul><p>So there are <strong>2</strong> signals. The number of signals is not the number of H atoms (10) or the number of C atoms (5).</p>
      solution: "<p>この分子は対称で、2 つのエチル基はまったく同じ位置にあります。</p><ul><li>2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基の 6 個の H 原子は、1 つの環境にあります。</li><li>2 つの <span class=\"chem\">CH<sub>2</sub><span></span></span> 基の 4 個の H 原子は、2 つ目の環境にあります。</li></ul><p>したがって、シグナルは <strong>2</strong> 本です。シグナルの数は、H 原子の数（10）でも C 原子の数（5）でもありません。</p>",
      // EN: signals
      unit: "本",
    },

    // ── s3-2h-q032 · mcq · foundation · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q032": {
      // EN: <p>What is the ratio of the areas under the signals in the <sup>1</sup>H NMR spectrum of 2-chloropropane, <span class="chem">CH<sub>3</sub>CHClCH<sub>3</sub><span></span></span>?</p>
      stem: "<p>2-chloropropane <span class=\"chem\">CH<sub>3</sub>CHClCH<sub>3</sub><span></span></span> の <sup>1</sup>H NMR スペクトルで、シグナルの下の面積の比はどれですか。</p>",
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
        "まず、異なる水素の環境を数えましょう。",
        // EN: Then count the hydrogen atoms in each environment.
        "次に、それぞれの環境にある水素原子を数えましょう。",
      ],
      // EN: <p>There are two environments: the six H atoms of the two equivalent <span class="chem">CH<sub>3</sub><span></span></span> groups, and the one H atom on the CHCl carbon. The area under each signal is proportional to the number of H atoms, so the ratio is <strong>6 : 1</strong>.</p>
      solution: "<p>環境は 2 つあります。等価な 2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基の 6 個の H 原子と、CHCl の炭素についた 1 個の H 原子です。それぞれのシグナルの下の面積は H 原子の数に比例するので、比は <strong>6 : 1</strong> です。</p>",
      misconception: {
        // EN (option B): The two <span class="chem">CH<sub>3</sub><span></span></span> groups are in the same environment, because the molecule is symmetrical. They give one signal with area 6, not two signals.
        "1": "この分子は対称なので、2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基は同じ環境にあります。2 本のシグナルではなく、面積 6 のシグナルが 1 本出ます。",
        // EN (option C): There are two <span class="chem">CH<sub>3</sub><span></span></span> groups in that environment, so six H atoms in total, not three.
        "2": "その環境には <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が 2 つあるので、H 原子は 3 個ではなく、合計 6 個です。",
        // EN (option D): This is the ratio of carbon atoms in the two environments. The area under a signal depends on the number of hydrogen atoms.
        "3": "これは、2 つの環境にある炭素原子の比です。シグナルの下の面積は、水素原子の数で決まります。",
      },
    },

    // ── s3-2h-q033 · numeric · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q033": {
      // EN: <p>How many signals are there in the <sup>1</sup>H NMR spectrum of 2-methylpropan-1-ol, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span>?</p>
      stem: "<p>2-methylpropan-1-ol <span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span> の <sup>1</sup>H NMR スペクトルには、シグナルが何本ありますか。</p>",
      hints: [
        // EN: Draw the structure. Are the two <span class="chem">CH<sub>3</sub><span></span></span> groups attached to the same carbon?
        "構造を描きましょう。2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基は同じ炭素についていますか。",
        // EN: Do not forget the hydrogen atom of the OH group.
        "OH 基の水素原子を忘れないようにしましょう。",
      ],
      // EN: <p>Count the environments one by one.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Hydrogen environments in 2-methylpropan-1-ol</caption><thead><tr><th scope="col">Environment</th><th scope="col">Number of H</th></tr></thead><tbody><tr><th scope="row">two equivalent CH<sub>3</sub> groups</th><td>6</td></tr><tr><th scope="row">CH</th><td>1</td></tr><tr><th scope="row">CH<sub>2</sub></th><td>2</td></tr><tr><th scope="row">OH</th><td>1</td></tr></tbody></table></div><p>There are <strong>4</strong> signals, with areas in the ratio 6 : 1 : 2 : 1. The two methyl groups are joined to the same carbon, so they are equivalent and give one signal.</p>
      solution: "<p>環境を 1 つずつ数えます。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>2-methylpropan-1-ol の水素の環境</caption><thead><tr><th scope=\"col\">環境</th><th scope=\"col\">H の数</th></tr></thead><tbody><tr><th scope=\"row\">等価な 2 つの CH<sub>3</sub> 基</th><td>6</td></tr><tr><th scope=\"row\">CH</th><td>1</td></tr><tr><th scope=\"row\">CH<sub>2</sub></th><td>2</td></tr><tr><th scope=\"row\">OH</th><td>1</td></tr></tbody></table></div><p>シグナルは <strong>4</strong> 本で、面積の比は 6 : 1 : 2 : 1 です。2 つのメチル基は同じ炭素についているので等価で、1 本のシグナルになります。</p>",
      // EN: signals
      unit: "本",
    },

    // ── s3-2h-q034 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q034": {
      // EN: <p>An alcohol with the molecular formula <span class="chem">C<sub>4</sub>H<sub>10</sub>O<span></span></span> gives a <sup>1</sup>H NMR spectrum with two signals. The areas under the signals are in the ratio 9 : 1.</p><p>Which alcohol is it?</p>
      stem: "<p>分子式 <span class=\"chem\">C<sub>4</sub>H<sub>10</sub>O<span></span></span> のアルコールの <sup>1</sup>H NMR スペクトルには、シグナルが 2 本あります。シグナルの下の面積の比は 9 : 1 です。</p><p>このアルコールはどれですか。</p>",
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
        "面積 9 は、同じ環境に H 原子が 9 個あるという意味です。<span class=\"chem\">CH<sub>3</sub><span></span></span> 基は何個分ですか。",
        // EN: Which structure has three <span class="chem">CH<sub>3</sub><span></span></span> groups attached to one carbon?
        "1 個の炭素に <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が 3 個ついている構造はどれですか。",
      ],
      // EN: <p>Nine equivalent H atoms means three <span class="chem">CH<sub>3</sub><span></span></span> groups in identical positions. In 2-methylpropan-2-ol, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>, all three methyl groups are bonded to the same carbon. The tenth H atom is in the OH group. That gives two signals with areas 9 : 1.</p>
      solution: "<p>等価な H 原子が 9 個あるのは、3 個の <span class=\"chem\">CH<sub>3</sub><span></span></span> 基がまったく同じ位置にあるということです。2-methylpropan-2-ol <span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span> では、3 個のメチル基がすべて同じ炭素に結合しています。10 個目の H 原子は OH 基にあります。これで、面積 9 : 1 の 2 本のシグナルになります。</p>",
      misconception: {
        // EN (option A): Butan-1-ol has five hydrogen environments (<span class="chem">CH<sub>3</sub><span></span></span>, three different <span class="chem">CH<sub>2</sub><span></span></span> groups and OH), so it gives five signals.
        "0": "butan-1-ol には水素の環境が 5 つあります（<span class=\"chem\">CH<sub>3</sub><span></span></span>、3 つの異なる <span class=\"chem\">CH<sub>2</sub><span></span></span> 基、OH）。だからシグナルは 5 本です。",
        // EN (option B): Butan-2-ol has five hydrogen environments (two different <span class="chem">CH<sub>3</sub><span></span></span> groups, <span class="chem">CH<sub>2</sub><span></span></span>, CH and OH), so it gives five signals.
        "1": "butan-2-ol には水素の環境が 5 つあります（2 つの異なる <span class=\"chem\">CH<sub>3</sub><span></span></span> 基、<span class=\"chem\">CH<sub>2</sub><span></span></span>、CH、OH）。だからシグナルは 5 本です。",
        // EN (option C): 2-methylpropan-1-ol has four hydrogen environments, with areas 6 : 1 : 2 : 1.
        "2": "2-methylpropan-1-ol には水素の環境が 4 つあり、面積は 6 : 1 : 2 : 1 です。",
      },
    },

    // ── s3-2h-q035 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q035": {
      // EN: <p>Propanal has the structure <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>. In which chemical shift range does the signal of the hydrogen atom in the CHO group appear?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div>
      stem: "<p>Propanal の構造は <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span> です。CHO 基の水素原子のシグナルは、どの化学シフト (chemical shift) の範囲に現れますか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 21）より：<sup>1</sup>H NMR の化学シフト</caption><thead><tr><th scope=\"col\">プロトンの種類 (Type of proton)</th><th scope=\"col\">化学シフト / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div>",
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
        "表では、対象の水素が太字で示されています。太字の H が C=O の炭素に直接結合している行を見つけましょう。",
      ],
      // EN: <p>The CHO hydrogen is bonded directly to the carbonyl carbon. The booklet row R–C(=O)–<b>H</b> gives <strong>9.4–10.0 ppm</strong>. The other two signals of propanal are the <span class="chem">CH<sub>2</sub><span></span></span> group next to C=O (2.2–2.7 ppm) and the <span class="chem">CH<sub>3</sub><span></span></span> group (0.9–1.0 ppm).</p>
      solution: "<p>CHO の水素は、カルボニル基の炭素に直接結合しています。データブックレットの R–C(=O)–<b>H</b> の行から、<strong>9.4–10.0 ppm</strong> です。propanal のほかの 2 本のシグナルは、C=O の隣の <span class=\"chem\">CH<sub>2</sub><span></span></span> 基（2.2–2.7 ppm）と <span class=\"chem\">CH<sub>3</sub><span></span></span> 基（0.9–1.0 ppm）です。</p>",
      misconception: {
        // EN (option A): This is the range for H atoms on a carbon <strong>next to</strong> the C=O group. In propanal that is the <span class="chem">CH<sub>2</sub><span></span></span> group, not the CHO hydrogen.
        "0": "これは、C=O 基の<strong>隣の</strong>炭素についた H 原子の範囲です。propanal では <span class=\"chem\">CH<sub>2</sub><span></span></span> 基がそれにあたり、CHO の水素ではありません。",
        // EN (option B): This range is for H atoms on a C=C double bond. The CHO hydrogen is on a C=O carbon.
        "1": "この範囲は、C=C 二重結合についた H 原子のものです。CHO の水素は C=O の炭素についています。",
        // EN (option C): This row is for the O–H hydrogen of a carboxylic acid. In an aldehyde the hydrogen is bonded to the carbon of the C=O group, not to an oxygen atom.
        "2": "この行は、カルボン酸の O–H の水素のものです。アルデヒドでは、水素は酸素原子ではなく、C=O 基の炭素に結合しています。",
      },
    },

    // ── s3-2h-q036 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q036": {
      // EN: <p>The sketch shows the <sup>1</sup>H NMR spectrum of a compound, drawn without splitting, with the molecular formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub><span></span></span>. The number above each signal is its relative area.</p><p><svg class="q-fig" viewBox="0 0 300 150" width="300" height="150" style="max-width:100%;height:auto" role="img" aria-label="NMR sketch with a chemical shift axis from 12 ppm on the left to 0 ppm on the right. There are two signals of equal area: one at 3.7 ppm and one at 2.1 ppm."><path d="M12 116H288" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="288.0" y1="116" x2="288.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="288.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="265.0" y1="116" x2="265.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="242.0" y1="116" x2="242.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="242.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">2</text><line x1="219.0" y1="116" x2="219.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="196.0" y1="116" x2="196.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="196.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">4</text><line x1="173.0" y1="116" x2="173.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="150.0" y1="116" x2="150.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="150.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">6</text><line x1="127.0" y1="116" x2="127.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="104.0" y1="116" x2="104.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="104.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">8</text><line x1="81.0" y1="116" x2="81.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="58.0" y1="116" x2="58.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="58.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">10</text><line x1="35.0" y1="116" x2="35.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="12.0" y1="116" x2="12.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="12.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">12</text><text x="150" y="147" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text><line x1="202.9" y1="116" x2="202.9" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="202.9" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text><line x1="239.7" y1="116" x2="239.7" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="239.7" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text></svg></p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><p>Which compound gives this spectrum?</p>
      stem: "<p>図は、分子式 <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub><span></span></span> の化合物の <sup>1</sup>H NMR スペクトルを、分裂を省いて描いたものです。それぞれのシグナルの上の数字は、相対的な面積です。</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"NMR sketch with a chemical shift axis from 12 ppm on the left to 0 ppm on the right. There are two signals of equal area: one at 3.7 ppm and one at 2.1 ppm.\"><path d=\"M12 116H288\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"288.0\" y1=\"116\" x2=\"288.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"288.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"265.0\" y1=\"116\" x2=\"265.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"242.0\" y1=\"116\" x2=\"242.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"242.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"219.0\" y1=\"116\" x2=\"219.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"196.0\" y1=\"116\" x2=\"196.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"196.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"173.0\" y1=\"116\" x2=\"173.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"150.0\" y1=\"116\" x2=\"150.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"150.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">6</text><line x1=\"127.0\" y1=\"116\" x2=\"127.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"104.0\" y1=\"116\" x2=\"104.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"104.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">8</text><line x1=\"81.0\" y1=\"116\" x2=\"81.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"58.0\" y1=\"116\" x2=\"58.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"58.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">10</text><line x1=\"35.0\" y1=\"116\" x2=\"35.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"12.0\" y1=\"116\" x2=\"12.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"12.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">12</text><text x=\"150\" y=\"147\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">chemical shift / ppm</text><line x1=\"202.9\" y1=\"116\" x2=\"202.9\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"202.9\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text><line x1=\"239.7\" y1=\"116\" x2=\"239.7\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"239.7\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text></svg></p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 21）より：<sup>1</sup>H NMR の化学シフト</caption><thead><tr><th scope=\"col\">プロトンの種類 (Type of proton)</th><th scope=\"col\">化学シフト / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><p>このスペクトルを示す化合物はどれですか。</p>",
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
        "シグナルを数えましょう。この化合物には水素の環境がいくつありますか。",
        // EN: Equal areas and six H atoms in total means three H atoms in each environment.
        "面積が等しく、H 原子が合計 6 個なら、それぞれの環境に H 原子が 3 個ずつあります。",
        // EN: Use the shifts to decide what each <span class="chem">CH<sub>3</sub><span></span></span> group is joined to.
        "化学シフトを使って、それぞれの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が何と結合しているかを決めましょう。",
      ],
      // EN: <p>Two signals of equal area, with six H atoms in total, means two different <span class="chem">CH<sub>3</sub><span></span></span> groups.</p><ul><li>2.1 ppm is in the range 2.0–2.5 ppm: H on a carbon next to the C=O of an ester, <span class="chem">CH<sub>3</sub><span></span></span>–C(=O)–O.</li><li>3.7 ppm is in the range 3.7–4.8 ppm: H on a carbon bonded to the O of an ester, C(=O)–O–<span class="chem">CH<sub>3</sub><span></span></span>.</li></ul><p>The compound is methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>. (The booklet rows show <span class="chem">CH<sub>2</sub><span></span></span>, but they also apply to <span class="chem">CH<sub>3</sub><span></span></span> groups in the same position.)</p>
      solution: "<p>面積の等しいシグナルが 2 本あり、H 原子が合計 6 個なので、異なる 2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基があります。</p><ul><li>2.1 ppm は 2.0–2.5 ppm の範囲にあります。エステルの C=O の隣の炭素についた H、つまり <span class=\"chem\">CH<sub>3</sub><span></span></span>–C(=O)–O です。</li><li>3.7 ppm は 3.7–4.8 ppm の範囲にあります。エステルの O と結合した炭素についた H、つまり C(=O)–O–<span class=\"chem\">CH<sub>3</sub><span></span></span> です。</li></ul><p>この化合物は methyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span> です。（データブックレットの行は <span class=\"chem\">CH<sub>2</sub><span></span></span> で書かれていますが、同じ位置にある <span class=\"chem\">CH<sub>3</sub><span></span></span> 基にも当てはまります。）</p>",
      misconception: {
        // EN (option A): Propanoic acid has three hydrogen environments (areas 3 : 2 : 1), and its COOH hydrogen gives a signal at 9.0–13.0 ppm. The sketch has nothing there.
        "0": "propanoic acid には水素の環境が 3 つあります（面積 3 : 2 : 1）。COOH の水素は 9.0–13.0 ppm にシグナルを示します。図には、そこに何もありません。",
        // EN (option C): Ethyl methanoate has three hydrogen environments (H–C=O, <span class="chem">CH<sub>2</sub><span></span></span> and <span class="chem">CH<sub>3</sub><span></span></span>) with areas 1 : 2 : 3, so it gives three signals.
        "2": "ethyl methanoate には水素の環境が 3 つあり（H–C=O、<span class=\"chem\">CH<sub>2</sub><span></span></span>、<span class=\"chem\">CH<sub>3</sub><span></span></span>）、面積は 1 : 2 : 3 です。だからシグナルは 3 本です。",
        // EN (option D): This molecule has three hydrogen environments (<span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub><span></span></span> and OH) with areas 3 : 2 : 1, so it gives three signals.
        "3": "この分子には水素の環境が 3 つあり（<span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub><span></span></span>、OH）、面積は 3 : 2 : 1 です。だからシグナルは 3 本です。",
      },
    },

    // ── s3-2h-q037 · order · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q037": {
      // EN: <p>Put these compounds in order of the number of signals in their <sup>1</sup>H NMR spectra, <strong>fewest signals first</strong>.</p>
      stem: "<p>次の化合物を、<sup>1</sup>H NMR スペクトルのシグナルの数の順に並べなさい。<strong>シグナルが少ないものが先</strong>です。</p>",
      options: [
        // EN: propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>
        "propanone, <span class=\"chem\">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: propan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>
        "propan-2-ol, <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>",
        // EN: butanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>
        "butanal, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>",
        // EN: butan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "butan-2-ol, <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: Count hydrogen environments, not hydrogen atoms.
        "水素原子ではなく、水素の環境を数えましょう。",
        // EN: Look for symmetry. Two <span class="chem">CH<sub>3</sub><span></span></span> groups in mirror-image positions give one signal.
        "対称性を探しましょう。鏡に映したような位置にある 2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基は、1 本のシグナルになります。",
      ],
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Number of hydrogen environments</caption><thead><tr><th scope="col">Compound</th><th scope="col">Environments</th><th scope="col">Signals</th></tr></thead><tbody><tr><th scope="row">propanone</th><td>two equivalent CH<sub>3</sub></td><td>1</td></tr><tr><th scope="row">methyl ethanoate</th><td>CH<sub>3</sub>–C=O; O–CH<sub>3</sub></td><td>2</td></tr><tr><th scope="row">propan-2-ol</th><td>two equivalent CH<sub>3</sub>; CH; OH</td><td>3</td></tr><tr><th scope="row">butanal</th><td>CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO</td><td>4</td></tr><tr><th scope="row">butan-2-ol</th><td>CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub></td><td>5</td></tr></tbody></table></div><p>Propanone and propan-2-ol are symmetrical, so their two methyl groups are equivalent. In methyl ethanoate and butan-2-ol the two methyl groups are in different positions, so they give separate signals.</p>
      solution: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>水素の環境の数</caption><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">環境</th><th scope=\"col\">シグナル</th></tr></thead><tbody><tr><th scope=\"row\">propanone</th><td>等価な 2 つの CH<sub>3</sub></td><td>1</td></tr><tr><th scope=\"row\">methyl ethanoate</th><td>CH<sub>3</sub>–C=O; O–CH<sub>3</sub></td><td>2</td></tr><tr><th scope=\"row\">propan-2-ol</th><td>等価な 2 つの CH<sub>3</sub>; CH; OH</td><td>3</td></tr><tr><th scope=\"row\">butanal</th><td>CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO</td><td>4</td></tr><tr><th scope=\"row\">butan-2-ol</th><td>CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub></td><td>5</td></tr></tbody></table></div><p>propanone と propan-2-ol は対称なので、2 つのメチル基は等価です。methyl ethanoate と butan-2-ol では、2 つのメチル基が違う位置にあるので、別々のシグナルになります。</p>",
    },

    // ── s3-2h-q038 · mcq · challenge · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q038": {
      // EN: <p>A compound with the molecular formula <span class="chem">C<sub>5</sub>H<sub>10</sub>O<span></span></span> gives a <sup>1</sup>H NMR spectrum with two signals. On the integration trace, the step heights for the two signals are 2.7 cm and 1.8 cm.</p><p>Which compound is it?</p>
      stem: "<p>分子式 <span class=\"chem\">C<sub>5</sub>H<sub>10</sub>O<span></span></span> の化合物の <sup>1</sup>H NMR スペクトルには、シグナルが 2 本あります。積分曲線 (integration trace) で、2 本のシグナルの段の高さは 2.7 cm と 1.8 cm です。</p><p>この化合物はどれですか。</p>",
      options: [
        // EN: pentan-2-one, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pentan-2-one, <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pentan-3-one, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 3-methylbutan-2-one, <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub><span></span></span>
        "3-methylbutan-2-one, <span class=\"chem\">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub><span></span></span>",
        // EN: 2,2-dimethylpropanal, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>CCHO<span></span></span>
        "2,2-dimethylpropanal, <span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>CCHO<span></span></span>",
      ],
      hints: [
        // EN: Turn the step heights into the simplest whole-number ratio.
        "段の高さを、最も簡単な整数比に直しましょう。",
        // EN: The molecule has ten H atoms. Share them out in that ratio.
        "この分子には H 原子が 10 個あります。その比で分けましょう。",
        // EN: Which structure has six H atoms in one environment and four in another?
        "1 つの環境に H 原子が 6 個、もう 1 つの環境に 4 個ある構造はどれですか。",
      ],
      // EN: <div class="worked__math">2.7 : 1.8 = 1.5 : 1 = 3 : 2</div><div class="worked__math">10 H shared 3 : 2 → 6 H and 4 H</div><p>Pentan-3-one is symmetrical. Its two <span class="chem">CH<sub>3</sub><span></span></span> groups give one signal (6 H) and its two <span class="chem">CH<sub>2</sub><span></span></span> groups give the other (4 H). The step heights of an integration trace give the <strong>ratio</strong> of H atoms, so you must scale the ratio to the molecular formula.</p>
      solution: "<div class=\"worked__math\">2.7 : 1.8 = 1.5 : 1 = 3 : 2</div><div class=\"worked__math\">10 H を 3 : 2 に分ける → 6 H と 4 H</div><p>pentan-3-one は対称です。2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基が 1 本のシグナル（6 H）に、2 つの <span class=\"chem\">CH<sub>2</sub><span></span></span> 基がもう 1 本のシグナル（4 H）になります。積分曲線の段の高さからわかるのは H 原子の<strong>比</strong>です。だから、比を分子式に合わせて何倍かする必要があります。</p>",
      misconception: {
        // EN (option A): Pentan-2-one has four hydrogen environments (areas 3 : 2 : 2 : 3), so it gives four signals.
        "0": "pentan-2-one には水素の環境が 4 つあります（面積 3 : 2 : 2 : 3）。だからシグナルは 4 本です。",
        // EN (option C): 3-methylbutan-2-one has three hydrogen environments (areas 3 : 1 : 6), so it gives three signals.
        "2": "3-methylbutan-2-one には水素の環境が 3 つあります（面積 3 : 1 : 6）。だからシグナルは 3 本です。",
        // EN (option D): 2,2-dimethylpropanal does give two signals, but their areas are 9 : 1. The measured ratio is 3 : 2.
        "3": "2,2-dimethylpropanal のシグナルは確かに 2 本ですが、面積は 9 : 1 です。測定された比は 3 : 2 です。",
      },
    },

    // ── s3-2h-q039 · numeric · foundation · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q039": {
      // EN: <p>In a <sup>1</sup>H NMR spectrum, one signal is a triplet (three peaks).</p><p>How many hydrogen atoms are bonded to the carbon atom next to the hydrogen atoms that give this signal?</p>
      stem: "<p><sup>1</sup>H NMR スペクトルで、あるシグナルが三重線 (triplet) になっています。ピークが 3 本です。</p><p>このシグナルを生じる水素原子の隣の炭素原子には、水素原子が何個結合していますか。</p>",
      hints: [
        // EN: If the neighbouring carbon holds n hydrogen atoms, the signal is split into n + 1 peaks.
        "隣の炭素に水素原子が n 個あると、シグナルは n + 1 本のピークに分裂します。",
        // EN: Solve n + 1 = 3.
        "n + 1 = 3 を解きましょう。",
      ],
      // EN: <p>A signal is split into n + 1 peaks, where n is the number of H atoms on the neighbouring carbon atom.</p><div class="worked__math">n + 1 = 3 &nbsp; so &nbsp; n = <b>2</b></div><p>A triplet tells you that the neighbouring carbon is a <span class="chem">CH<sub>2</sub><span></span></span> group. The splitting tells you about the neighbours, not about the hydrogen atoms that give the signal.</p>
      solution: "<p>シグナルは n + 1 本のピークに分裂します。n は、隣の炭素原子についた H 原子の数です。</p><div class=\"worked__math\">n + 1 = 3 &nbsp; だから &nbsp; n = <b>2</b></div><p>三重線から、隣の炭素が <span class=\"chem\">CH<sub>2</sub><span></span></span> 基だとわかります。分裂からわかるのは隣のようすで、シグナルを生じる水素原子そのもののことではありません。</p>",
      // EN: H atoms
      unit: "個",
    },

    // ── s3-2h-q040 · mcq · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q040": {
      // EN: <p>Butanone has the structure <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>. What are the splitting patterns of its three signals in a <sup>1</sup>H NMR spectrum?</p>
      stem: "<p>Butanone の構造は <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> です。<sup>1</sup>H NMR スペクトルの 3 本のシグナルの分裂パターン (splitting patterns) はどれですか。</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: quartet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: triplet.
        "C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span>：一重線 (singlet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：四重線 (quartet)。エチル基の <span class=\"chem\">CH<sub>3</sub><span></span></span>：三重線 (triplet)。",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: triplet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: quartet.
        "C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span>：一重線 (singlet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：三重線 (triplet)。エチル基の <span class=\"chem\">CH<sub>3</sub><span></span></span>：四重線 (quartet)。",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: triplet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: doublet.
        "C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span>：一重線 (singlet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：三重線 (triplet)。エチル基の <span class=\"chem\">CH<sub>3</sub><span></span></span>：二重線 (doublet)。",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: triplet. <span class="chem">CH<sub>2</sub><span></span></span>: quartet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: triplet.
        "C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span>：三重線 (triplet)。<span class=\"chem\">CH<sub>2</sub><span></span></span>：四重線 (quartet)。エチル基の <span class=\"chem\">CH<sub>3</sub><span></span></span>：三重線 (triplet)。",
      ],
      hints: [
        // EN: For each group, look at the carbon atom(s) directly bonded to it. How many H atoms do they hold?
        "それぞれの基について、直接結合している炭素原子を見ましょう。そこに H 原子は何個ありますか。",
        // EN: Number of peaks = n + 1.
        "ピークの数 = n + 1。",
      ],
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Splitting in butanone</caption><thead><tr><th scope="col">Group</th><th scope="col">H on the neighbouring carbon, n</th><th scope="col">Peaks, n + 1</th><th scope="col">Pattern</th></tr></thead><tbody><tr><th scope="row">CH<sub>3</sub> next to C=O</th><td>0</td><td>1</td><td>singlet</td></tr><tr><th scope="row">CH<sub>2</sub></th><td>3</td><td>4</td><td>quartet</td></tr><tr><th scope="row">CH<sub>3</sub> of ethyl</th><td>2</td><td>3</td><td>triplet</td></tr></tbody></table></div><p>A triplet (3 H) together with a quartet (2 H) is the pattern of an ethyl group.</p>
      solution: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>butanone の分裂</caption><thead><tr><th scope=\"col\">基</th><th scope=\"col\">隣の炭素の H の数 n</th><th scope=\"col\">ピークの数 n + 1</th><th scope=\"col\">パターン</th></tr></thead><tbody><tr><th scope=\"row\">C=O の隣の CH<sub>3</sub></th><td>0</td><td>1</td><td>一重線 (singlet)</td></tr><tr><th scope=\"row\">CH<sub>2</sub></th><td>3</td><td>4</td><td>四重線 (quartet)</td></tr><tr><th scope=\"row\">エチル基の CH<sub>3</sub></th><td>2</td><td>3</td><td>三重線 (triplet)</td></tr></tbody></table></div><p>三重線（3 H）と四重線（2 H）の組み合わせは、エチル基のパターンです。</p>",
      misconception: {
        // EN (option B): This counts the H atoms on the <strong>same</strong> carbon and adds one. Splitting is caused by the H atoms on the <strong>neighbouring</strong> carbon.
        "1": "これは、<strong>同じ</strong>炭素の H 原子を数えて 1 を足しています。分裂の原因は、<strong>隣の</strong>炭素の H 原子です。",
        // EN (option C): This uses n peaks. The rule is n + 1: three neighbouring H atoms give four peaks, and two give three peaks.
        "2": "これは n 本のピークとしています。規則は n + 1 です。隣の H 原子が 3 個なら 4 本、2 個なら 3 本のピークになります。",
        // EN (option D): The carbon next to the first <span class="chem">CH<sub>3</sub><span></span></span> group is the C=O carbon, which holds no H atoms. The <span class="chem">CH<sub>2</sub><span></span></span> group is two carbons away, so it does not split this signal.
        "3": "最初の <span class=\"chem\">CH<sub>3</sub><span></span></span> 基の隣の炭素は C=O の炭素で、H 原子をもちません。<span class=\"chem\">CH<sub>2</sub><span></span></span> 基は炭素 2 個分はなれているので、このシグナルを分裂させません。",
      },
    },

    // ── s3-2h-q041 · mcq · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q041": {
      // EN: <p>Which describes the <sup>1</sup>H NMR spectrum of 1,1-dichloroethane, <span class="chem">CH<sub>3</sub>CHCl<sub>2</sub><span></span></span>?</p>
      stem: "<p>1,1-dichloroethane <span class=\"chem\">CH<sub>3</sub>CHCl<sub>2</sub><span></span></span> の <sup>1</sup>H NMR スペクトルを正しく表しているのはどれですか。</p>",
      options: [
        // EN: One singlet
        "一重線 (singlet) が 1 本",
        // EN: A doublet (area 3) and a quartet (area 1)
        "二重線 (doublet)（面積 3）と四重線 (quartet)（面積 1）",
        // EN: A quartet (area 3) and a doublet (area 1)
        "四重線 (quartet)（面積 3）と二重線 (doublet)（面積 1）",
        // EN: A singlet (area 3) and a triplet (area 1)
        "一重線 (singlet)（面積 3）と三重線 (triplet)（面積 1）",
      ],
      hints: [
        // EN: There are two environments: <span class="chem">CH<sub>3</sub><span></span></span> (3 H) and <span class="chem">CHCl<sub>2</sub><span></span></span> (1 H).
        "環境は 2 つあります。<span class=\"chem\">CH<sub>3</sub><span></span></span>（3 H）と <span class=\"chem\">CHCl<sub>2</sub><span></span></span>（1 H）です。",
        // EN: Each signal is split by the H atoms on the other carbon. Use n + 1.
        "それぞれのシグナルは、もう一方の炭素の H 原子によって分裂します。n + 1 を使いましょう。",
      ],
      // EN: <ul><li>The <span class="chem">CH<sub>3</sub><span></span></span> signal (area 3) has one H on the neighbouring carbon: 1 + 1 = 2 peaks, a <strong>doublet</strong>.</li><li>The CH signal (area 1) has three H atoms on the neighbouring carbon: 3 + 1 = 4 peaks, a <strong>quartet</strong>.</li></ul>
      solution: "<ul><li><span class=\"chem\">CH<sub>3</sub><span></span></span> のシグナル（面積 3）：隣の炭素に H が 1 個あります。1 + 1 = 2 本のピークで、<strong>二重線 (doublet)</strong> です。</li><li>CH のシグナル（面積 1）：隣の炭素に H 原子が 3 個あります。3 + 1 = 4 本のピークで、<strong>四重線 (quartet)</strong> です。</li></ul>",
      misconception: {
        // EN (option A): One singlet would mean that all four H atoms are in the same environment. That is true for the isomer 1,2-dichloroethane, <span class="chem">ClCH<sub>2</sub>CH<sub>2</sub>Cl<span></span></span>, but here the <span class="chem">CH<sub>3</sub><span></span></span> and CH hydrogen atoms are different.
        "0": "一重線が 1 本なら、4 個の H 原子がすべて同じ環境にあることになります。異性体の 1,2-dichloroethane <span class=\"chem\">ClCH<sub>2</sub>CH<sub>2</sub>Cl<span></span></span> ならそのとおりです。しかしこの分子では、<span class=\"chem\">CH<sub>3</sub><span></span></span> の水素原子と CH の水素原子は違う環境にあります。",
        // EN (option C): The patterns are on the wrong signals. This comes from counting the H atoms on the same carbon. The <span class="chem">CH<sub>3</sub><span></span></span> signal is split by the one H on the CH carbon.
        "2": "パターンとシグナルの組み合わせが逆です。同じ炭素の H 原子を数えると、こうなります。<span class=\"chem\">CH<sub>3</sub><span></span></span> のシグナルは、CH の炭素の H 1 個によって分裂します。",
        // EN (option D): This uses n peaks, not n + 1. One neighbouring H gives two peaks, and three neighbouring H atoms give four peaks.
        "3": "これは n + 1 ではなく、n 本のピークとしています。隣の H が 1 個なら 2 本、3 個なら 4 本のピークになります。",
      },
    },

    // ── s3-2h-q042 · multi · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q042": {
      // EN: <p>In which of these compounds is <strong>every</strong> signal in the <sup>1</sup>H NMR spectrum a singlet? Select <strong>all</strong> that apply. (Treat the signal of an O–H hydrogen as a singlet.)</p>
      stem: "<p><sup>1</sup>H NMR スペクトルの<strong>すべての</strong>シグナルが一重線 (singlet) になる化合物はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。（O–H の水素のシグナルは一重線として扱います。）</p>",
      options: [
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: ethyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "ethyl methanoate, <span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>
        "propanone, <span class=\"chem\">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>",
        // EN: ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>
        "ethanol, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: 2-methylpropan-2-ol, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>
        "2-methylpropan-2-ol, <span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>",
      ],
      hints: [
        // EN: A singlet means no H atoms on the neighbouring carbon atom.
        "一重線は、隣の炭素原子に H 原子がないという意味です。",
        // EN: Look for <span class="chem">CH<sub>3</sub><span></span></span> groups whose only neighbour is a C=O carbon, an O atom, or a carbon with no H.
        "<span class=\"chem\">CH<sub>3</sub><span></span></span> 基のうち、隣が C=O の炭素、O 原子、または H をもたない炭素だけのものを探しましょう。",
      ],
      // EN: <ul><li>Methyl ethanoate: one <span class="chem">CH<sub>3</sub><span></span></span> is next to the C=O carbon and the other is bonded to O. Neither has H atoms on a neighbouring carbon. Two singlets.</li><li>Propanone: both <span class="chem">CH<sub>3</sub><span></span></span> groups are next to the C=O carbon. One singlet.</li><li>2-methylpropan-2-ol: the three <span class="chem">CH<sub>3</sub><span></span></span> groups are bonded to a carbon with no H. One singlet for 9 H, and one singlet for OH.</li><li>Ethyl methanoate and ethanol each contain <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>, which gives a triplet and a quartet.</li></ul>
      solution: "<ul><li>methyl ethanoate：一方の <span class=\"chem\">CH<sub>3</sub><span></span></span> は C=O の炭素の隣にあり、もう一方は O に結合しています。どちらも、隣の炭素に H 原子がありません。一重線が 2 本です。</li><li>propanone：2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基はどちらも C=O の炭素の隣にあります。一重線が 1 本です。</li><li>2-methylpropan-2-ol：3 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基は、H をもたない炭素に結合しています。9 H の一重線が 1 本と、OH の一重線が 1 本です。</li><li>ethyl methanoate と ethanol はどちらも <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span> をもち、三重線 (triplet) と四重線 (quartet) を示します。</li></ul>",
      misconception: {
        // EN (option B): Ethyl methanoate has an ethyl group. Its <span class="chem">CH<sub>2</sub><span></span></span> signal is a quartet and its <span class="chem">CH<sub>3</sub><span></span></span> signal is a triplet.
        "1": "ethyl methanoate にはエチル基があります。<span class=\"chem\">CH<sub>2</sub><span></span></span> のシグナルは四重線、<span class=\"chem\">CH<sub>3</sub><span></span></span> のシグナルは三重線です。",
        // EN (option D): Ethanol has an ethyl group. Its <span class="chem">CH<sub>3</sub><span></span></span> signal is a triplet and its <span class="chem">CH<sub>2</sub><span></span></span> signal is a quartet.
        "3": "ethanol にはエチル基があります。<span class=\"chem\">CH<sub>3</sub><span></span></span> のシグナルは三重線、<span class=\"chem\">CH<sub>2</sub><span></span></span> のシグナルは四重線です。",
      },
    },

    // ── s3-2h-q043 · short · challenge · AHL · Structure 3.2.11 · 4 marks
    "s3-2h-q043": {
      // EN: <p>Predict the <sup>1</sup>H NMR spectrum of ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>. Give the number of signals and, for each signal, the chemical shift range, the relative area and the splitting pattern.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">–C<b>H</b><sub>2</sub>–R</span></th><td>1.3–1.4</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr></tbody></table></div>
      stem: "<p>ethyl ethanoate <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span> の <sup>1</sup>H NMR スペクトルを予測しなさい (predict)。シグナルの数と、それぞれのシグナルの化学シフトの範囲、相対的な面積、分裂パターンを答えなさい。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 21）より：<sup>1</sup>H NMR の化学シフト</caption><thead><tr><th scope=\"col\">プロトンの種類 (Type of proton)</th><th scope=\"col\">化学シフト / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>2</sub>–R</span></th><td>1.3–1.4</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr></tbody></table></div>",
      hints: [
        // EN: Find the hydrogen environments first: there are two different <span class="chem">CH<sub>3</sub><span></span></span> groups and one <span class="chem">CH<sub>2</sub><span></span></span> group.
        "まず水素の環境を見つけましょう。異なる 2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基と、1 つの <span class=\"chem\">CH<sub>2</sub><span></span></span> 基があります。",
        // EN: For shifts, check what each carbon is bonded to: the C=O carbon, the O atom, or only carbon.
        "化学シフトは、それぞれの炭素が何と結合しているかで決まります。C=O の炭素か、O 原子か、炭素だけか、確かめましょう。",
        // EN: For splitting, count the H atoms on the neighbouring carbon and add one.
        "分裂は、隣の炭素の H 原子を数えて 1 を足します。",
      ],
      // EN: <p>Work through one signal at a time and fill in a table: environment, shift, area, splitting.</p><ul><li><span class="chem">CH<sub>3</sub><span></span></span> next to the ester C=O: no H on the neighbouring carbon, so a singlet.</li><li>O–<span class="chem">CH<sub>2</sub><span></span></span>: three H on the neighbouring <span class="chem">CH<sub>3</sub><span></span></span>, so 3 + 1 = 4 peaks, a quartet.</li><li><span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: two H on the neighbouring <span class="chem">CH<sub>2</sub><span></span></span>, so 2 + 1 = 3 peaks, a triplet. The O atom is not a carbon with H atoms, so nothing on the other side splits the <span class="chem">CH<sub>2</sub><span></span></span> signal further.</li></ul><p>The measured signals are at about 2.0, 4.1 and 1.3 ppm, so the last one is a little above its booklet range. In an exam, quote the booklet ranges. Real spectra vary a little: the booklet says its values can change with the solvent and conditions.</p>
      solution: "<p>シグナルを 1 本ずつ調べて、表をうめていきましょう。環境、化学シフト、面積、分裂の順です。</p><ul><li>エステルの C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span>：隣の炭素に H がないので、一重線 (singlet) です。</li><li>O–<span class=\"chem\">CH<sub>2</sub><span></span></span>：隣の <span class=\"chem\">CH<sub>3</sub><span></span></span> に H が 3 個あるので、3 + 1 = 4 本のピーク、四重線 (quartet) です。</li><li>エチル基の <span class=\"chem\">CH<sub>3</sub><span></span></span>：隣の <span class=\"chem\">CH<sub>2</sub><span></span></span> に H が 2 個あるので、2 + 1 = 3 本のピーク、三重線 (triplet) です。O 原子は H をもつ炭素ではないので、反対側には <span class=\"chem\">CH<sub>2</sub><span></span></span> のシグナルをさらに分裂させるものがありません。</li></ul><p>測定されるシグナルは約 2.0、4.1、1.3 ppm にあります。最後の 1 本は、データブックレットの範囲より少し上です。試験では、データブックレットの範囲を書きましょう。実際のスペクトルは少しずれます。データブックレットにも、値は溶媒や条件によって変わることがあると書かれています。</p>",
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Predicted spectrum of ethyl ethanoate (three signals)</caption><thead><tr><th scope="col">Hydrogen atoms</th><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">C<b>H</b><sub>3</sub>–C(=O)–O</th><td>2.0–2.5</td><td>3</td><td>singlet</td></tr><tr><th scope="row">O–C<b>H</b><sub>2</sub></th><td>3.7–4.8</td><td>2</td><td>quartet</td></tr><tr><th scope="row">C<b>H</b><sub>3</sub> of ethyl</th><td>0.9–1.0</td><td>3</td><td>triplet</td></tr></tbody></table></div>
      answer: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>ethyl ethanoate の予測スペクトル（シグナルは 3 本）</caption><thead><tr><th scope=\"col\">水素原子</th><th scope=\"col\">シフト / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">C<b>H</b><sub>3</sub>–C(=O)–O</th><td>2.0–2.5</td><td>3</td><td>一重線 (singlet)</td></tr><tr><th scope=\"row\">O–C<b>H</b><sub>2</sub></th><td>3.7–4.8</td><td>2</td><td>四重線 (quartet)</td></tr><tr><th scope=\"row\">エチル基の C<b>H</b><sub>3</sub></th><td>0.9–1.0</td><td>3</td><td>三重線 (triplet)</td></tr></tbody></table></div>",
      markscheme: [
        // EN: Three signals.
        "シグナルは 3 本。",
        // EN: Chemical shifts: 2.0–2.5 ppm (CH₃ next to C=O of the ester), 3.7–4.8 ppm (O–CH₂) and 0.9–1.0 ppm (CH₃ of ethyl). All three needed.
        "化学シフト：2.0–2.5 ppm（エステルの C=O の隣の CH₃）、3.7–4.8 ppm（O–CH₂）、0.9–1.0 ppm（エチル基の CH₃）。3 つとも必要。",
        // EN: Relative areas 3 : 2 : 3, matched to the correct groups.
        "相対的な面積 3 : 2 : 3。正しい基と対応していること。",
        // EN: Splitting: singlet (CH₃CO), quartet (OCH₂), triplet (CH₃ of ethyl). Accept 1, 4 and 3 peaks.
        "分裂：一重線 singlet（CH₃CO）、四重線 quartet（OCH₂）、三重線 triplet（エチル基の CH₃）。ピーク 1、4、3 本も可。",
      ],
    },

    // ── s3-2h-q044 · mcq · challenge · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q044": {
      // EN: <p>The sketch and table show the <sup>1</sup>H NMR spectrum of a compound with the molecular formula <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub><span></span></span>. The number above each signal is its relative area.</p><p><svg class="q-fig" viewBox="0 0 300 150" width="300" height="150" style="max-width:100%;height:auto" role="img" aria-label="NMR sketch with a chemical shift axis from 5 ppm on the left to 0 ppm on the right. A single peak of area 3 at 3.7 ppm, a group of four peaks of area 2 at 2.3 ppm, and a group of three peaks of area 3 at 1.0 ppm."><path d="M12 116H288" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="288.0" y1="116" x2="288.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="288.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="232.8" y1="116" x2="232.8" y2="120" stroke="currentColor" stroke-width="1"/><text x="232.8" y="132" text-anchor="middle" font-size="11" fill="currentColor">1</text><line x1="177.6" y1="116" x2="177.6" y2="120" stroke="currentColor" stroke-width="1"/><text x="177.6" y="132" text-anchor="middle" font-size="11" fill="currentColor">2</text><line x1="122.4" y1="116" x2="122.4" y2="120" stroke="currentColor" stroke-width="1"/><text x="122.4" y="132" text-anchor="middle" font-size="11" fill="currentColor">3</text><line x1="67.2" y1="116" x2="67.2" y2="120" stroke="currentColor" stroke-width="1"/><text x="67.2" y="132" text-anchor="middle" font-size="11" fill="currentColor">4</text><line x1="12.0" y1="116" x2="12.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="12.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">5</text><text x="150" y="147" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text><line x1="83.8" y1="116" x2="83.8" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="83.8" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text><line x1="153.5" y1="116" x2="153.5" y2="108.7" stroke="currentColor" stroke-width="1.8"/><line x1="158.5" y1="116" x2="158.5" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="163.5" y1="116" x2="163.5" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="168.5" y1="116" x2="168.5" y2="108.7" stroke="currentColor" stroke-width="1.8"/><text x="161.0" y="89.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">2</text><line x1="227.8" y1="116" x2="227.8" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="232.8" y1="116" x2="232.8" y2="72.0" stroke="currentColor" stroke-width="1.8"/><line x1="237.8" y1="116" x2="237.8" y2="94.0" stroke="currentColor" stroke-width="1.8"/><text x="232.8" y="67.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text></svg></p><div class="table-scroll" tabindex="0"><table class="data"><caption>Signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">3.7</th><td>3</td><td>singlet</td></tr><tr><th scope="row">2.3</th><td>2</td><td>quartet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr></tbody></table></div><p>Which compound is it?</p>
      stem: "<p>図と表は、分子式 <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub><span></span></span> の化合物の <sup>1</sup>H NMR スペクトルを示しています。それぞれのシグナルの上の数字は、相対的な面積です。</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"NMR sketch with a chemical shift axis from 5 ppm on the left to 0 ppm on the right. A single peak of area 3 at 3.7 ppm, a group of four peaks of area 2 at 2.3 ppm, and a group of three peaks of area 3 at 1.0 ppm.\"><path d=\"M12 116H288\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"288.0\" y1=\"116\" x2=\"288.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"288.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"232.8\" y1=\"116\" x2=\"232.8\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.8\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">1</text><line x1=\"177.6\" y1=\"116\" x2=\"177.6\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"177.6\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"122.4\" y1=\"116\" x2=\"122.4\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"122.4\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">3</text><line x1=\"67.2\" y1=\"116\" x2=\"67.2\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"67.2\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"12.0\" y1=\"116\" x2=\"12.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"12.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">5</text><text x=\"150\" y=\"147\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">chemical shift / ppm</text><line x1=\"83.8\" y1=\"116\" x2=\"83.8\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"83.8\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text><line x1=\"153.5\" y1=\"116\" x2=\"153.5\" y2=\"108.7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"158.5\" y1=\"116\" x2=\"158.5\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"163.5\" y1=\"116\" x2=\"163.5\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"168.5\" y1=\"116\" x2=\"168.5\" y2=\"108.7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"161.0\" y=\"89.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">2</text><line x1=\"227.8\" y1=\"116\" x2=\"227.8\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"232.8\" y1=\"116\" x2=\"232.8\" y2=\"72.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"237.8\" y1=\"116\" x2=\"237.8\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"232.8\" y=\"67.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text></svg></p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>シグナル</caption><thead><tr><th scope=\"col\">シフト / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">3.7</th><td>3</td><td>一重線 (singlet)</td></tr><tr><th scope=\"row\">2.3</th><td>2</td><td>四重線 (quartet)</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>三重線 (triplet)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 21）より：<sup>1</sup>H NMR の化学シフト</caption><thead><tr><th scope=\"col\">プロトンの種類 (Type of proton)</th><th scope=\"col\">化学シフト / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr></tbody></table></div><p>この化合物はどれですか。</p>",
      options: [
        // EN: ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "ethyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: methyl propanoate, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>
        "methyl propanoate, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: butanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>
        "butanoic acid, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>",
        // EN: propyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "propyl methanoate, <span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>",
      ],
      hints: [
        // EN: A triplet of area 3 with a quartet of area 2 is an ethyl group, <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>.
        "面積 3 の三重線と面積 2 の四重線の組は、エチル基 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span> です。",
        // EN: The singlet of area 3 is a <span class="chem">CH<sub>3</sub><span></span></span> group with no H on the neighbouring atom.
        "面積 3 の一重線は、隣の原子に H がない <span class=\"chem\">CH<sub>3</sub><span></span></span> 基です。",
        // EN: Now use the shifts. Which group is bonded to O (3.7–4.8 ppm) and which is next to C=O (2.0–2.5 ppm)?
        "次に化学シフトを使いましょう。O に結合している基（3.7–4.8 ppm）と、C=O の隣にある基（2.0–2.5 ppm）は、それぞれどれですか。",
      ],
      // EN: <ul><li>Triplet (3 H) and quartet (2 H): an ethyl group.</li><li>The quartet is at 2.3 ppm, in the range 2.0–2.5 ppm. So the <span class="chem">CH<sub>2</sub><span></span></span> is next to the C=O of an ester: <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>–C(=O)–O.</li><li>The singlet (3 H) is at 3.7 ppm, in the range 3.7–4.8 ppm. So this <span class="chem">CH<sub>3</sub><span></span></span> is bonded to the ester oxygen: O–<span class="chem">CH<sub>3</sub><span></span></span>.</li></ul><p>The compound is methyl propanoate, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>. The triplet at 1.0 ppm is in the range 0.9–1.0 ppm: the <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group.</p>
      solution: "<ul><li>三重線（3 H）と四重線（2 H）：エチル基です。</li><li>四重線は 2.3 ppm にあり、2.0–2.5 ppm の範囲に入ります。だから <span class=\"chem\">CH<sub>2</sub><span></span></span> はエステルの C=O の隣にあります：<span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>–C(=O)–O。</li><li>一重線（3 H）は 3.7 ppm にあり、3.7–4.8 ppm の範囲に入ります。だから、この <span class=\"chem\">CH<sub>3</sub><span></span></span> はエステルの酸素に結合しています：O–<span class=\"chem\">CH<sub>3</sub><span></span></span>。</li></ul><p>この化合物は methyl propanoate <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span> です。1.0 ppm の三重線は 0.9–1.0 ppm の範囲にあり、エチル基の <span class=\"chem\">CH<sub>3</sub><span></span></span> です。</p>",
      misconception: {
        // EN (option A): Ethyl ethanoate also gives a singlet, a quartet and a triplet, but in different places. Its quartet (O–<span class="chem">CH<sub>2</sub><span></span></span>) would be at 3.7–4.8 ppm and its singlet (<span class="chem">CH<sub>3</sub><span></span></span> next to C=O) at 2.0–2.5 ppm. Here they are the other way round.
        "0": "ethyl ethanoate も一重線、四重線、三重線を示しますが、位置が違います。四重線（O–<span class=\"chem\">CH<sub>2</sub><span></span></span>）は 3.7–4.8 ppm に、一重線（C=O の隣の <span class=\"chem\">CH<sub>3</sub><span></span></span>）は 2.0–2.5 ppm に出るはずです。ここでは逆になっています。",
        // EN (option C): Butanoic acid has four hydrogen environments, and its COOH hydrogen would give a signal at 9.0–13.0 ppm.
        "2": "butanoic acid には水素の環境が 4 つあり、COOH の水素は 9.0–13.0 ppm にシグナルを示すはずです。",
        // EN (option D): Propyl methanoate has four hydrogen environments (H–C=O and three groups in the propyl chain), so it would give four signals.
        "3": "propyl methanoate には水素の環境が 4 つあるので（H–C=O と、プロピル鎖の 3 つの基）、シグナルは 4 本になるはずです。",
      },
    },

    // ── s3-2h-q045 · mcq · foundation · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q045": {
      // EN: <p>Three techniques are often used together to find the structure of an organic compound. Which row matches each technique with the main information it gives?</p>
      stem: "<p>有機化合物の構造を決めるとき、3 つの方法をよく組み合わせて使います。それぞれの方法と、そこから得られるおもな情報を正しく組み合わせた行はどれですか。</p>",
      options: [
        // EN: Mass spectrometry: relative molecular mass and fragments. Infrared: bonds present. <sup>1</sup>H NMR: hydrogen environments.
        "質量分析法：相対分子質量とフラグメント。赤外：存在する結合。<sup>1</sup>H NMR：水素の環境。",
        // EN: Mass spectrometry: bonds present. Infrared: relative molecular mass and fragments. <sup>1</sup>H NMR: hydrogen environments.
        "質量分析法：存在する結合。赤外：相対分子質量とフラグメント。<sup>1</sup>H NMR：水素の環境。",
        // EN: Mass spectrometry: relative molecular mass and fragments. Infrared: hydrogen environments. <sup>1</sup>H NMR: bonds present.
        "質量分析法：相対分子質量とフラグメント。赤外：水素の環境。<sup>1</sup>H NMR：存在する結合。",
        // EN: Mass spectrometry: hydrogen environments. Infrared: bonds present. <sup>1</sup>H NMR: relative molecular mass and fragments.
        "質量分析法：水素の環境。赤外：存在する結合。<sup>1</sup>H NMR：相対分子質量とフラグメント。",
      ],
      hints: [
        // EN: Think about the horizontal axis of each spectrum: m/z, wavenumber, chemical shift.
        "それぞれのスペクトルの横軸を考えましょう。m/z、波数、化学シフトです。",
      ],
      // EN: <ul><li><strong>Mass spectrometry:</strong> the molecular ion gives M<sub>r</sub>, and the fragments show which groups can break off.</li><li><strong>Infrared spectroscopy:</strong> the absorptions show which bonds, and so which functional groups, are present.</li><li><strong><sup>1</sup>H NMR:</strong> the number of signals, their shifts, areas and splitting show the hydrogen environments.</li></ul><p>No single technique gives the whole structure. Together they do.</p>
      solution: "<ul><li><strong>質量分析法 (mass spectrometry)：</strong>分子イオンから M<sub>r</sub> がわかり、フラグメントから、どの基が切れて取れるかがわかります。</li><li><strong>赤外分光法 (infrared spectroscopy)：</strong>吸収から、どの結合があるか、つまりどの官能基があるかがわかります。</li><li><strong><sup>1</sup>H NMR：</strong>シグナルの数、化学シフト、面積、分裂から、水素の環境がわかります。</li></ul><p>1 つの方法だけでは、構造全体はわかりません。組み合わせるとわかります。</p>",
      misconception: {
        // EN (option B): Mass spectrometry and infrared are swapped. A mass spectrum has m/z on its axis, so it gives masses. An infrared spectrum shows which bonds absorb.
        "1": "質量分析法と赤外が入れ替わっています。質量スペクトルの軸は m/z なので、わかるのは質量です。赤外スペクトルは、どの結合が吸収するかを示します。",
        // EN (option C): Infrared and NMR are swapped. Infrared absorptions come from bonds that vibrate. NMR signals come from hydrogen nuclei in different environments.
        "2": "赤外と NMR が入れ替わっています。赤外吸収は、振動する結合から生じます。NMR のシグナルは、異なる環境にある水素の原子核から生じます。",
        // EN (option D): Mass spectrometry and NMR are swapped. The molecular ion peak in a mass spectrum gives the relative molecular mass.
        "3": "質量分析法と NMR が入れ替わっています。質量スペクトルの分子イオンピークから、相対分子質量がわかります。",
      },
    },

    // ── s3-2h-q046 · numeric · exam · AHL · Structure 3.2.12 · 2 marks
    "s3-2h-q046": {
      // EN: <p>A compound contains 54.5% carbon, 9.2% hydrogen and 36.3% oxygen by mass. Its mass spectrum has the molecular ion peak at m/z 88.</p><p>How many carbon atoms are there in one molecule of the compound?</p>
      stem: "<p>ある化合物は、質量で炭素 54.5%、水素 9.2%、酸素 36.3% を含みます。質量スペクトルの分子イオンピークは m/z 88 にあります。</p><p>この化合物の 1 分子には、炭素原子が何個ありますか。</p>",
      hints: [
        // EN: Find the empirical formula first: divide each percentage by the relative atomic mass, then divide by the smallest result.
        "まず組成式（実験式、empirical formula）を求めましょう。それぞれの百分率を相対原子質量で割り、次にいちばん小さい結果で割ります。",
        // EN: Work out the mass of one empirical formula unit.
        "組成式 1 単位分の質量を計算しましょう。",
        // EN: Compare it with 88. How many empirical units fit into the molecule?
        "それを 88 とくらべましょう。分子の中に、組成式の単位がいくつ入りますか。",
      ],
      // EN: <p>Step 1: empirical formula (in 100 g of compound).</p><div class="worked__math">C: 54.5 ÷ 12.01 = 4.54 mol</div><div class="worked__math">H: 9.2 ÷ 1.01 = 9.11 mol</div><div class="worked__math">O: 36.3 ÷ 16.00 = 2.27 mol</div><div class="worked__math">ratio C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O</div><p>Step 2: molecular formula.</p><div class="worked__math">empirical mass = 2(12.01) + 4(1.01) + 16.00 = 44.06</div><div class="worked__math">88 ÷ 44.06 ≈ 2</div><div class="worked__math">molecular formula = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></div><p>One molecule contains <strong>4</strong> carbon atoms.</p>
      solution: "<p>ステップ 1：組成式（化合物 100 g あたり）。</p><div class=\"worked__math\">C: 54.5 ÷ 12.01 = 4.54 mol</div><div class=\"worked__math\">H: 9.2 ÷ 1.01 = 9.11 mol</div><div class=\"worked__math\">O: 36.3 ÷ 16.00 = 2.27 mol</div><div class=\"worked__math\">比 C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O</div><p>ステップ 2：分子式。</p><div class=\"worked__math\">組成式の式量 = 2(12.01) + 4(1.01) + 16.00 = 44.06</div><div class=\"worked__math\">88 ÷ 44.06 ≈ 2</div><div class=\"worked__math\">分子式 = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></div><p>1 分子に炭素原子が <strong>4</strong> 個あります。</p>",
      // EN: C atoms
      unit: "個",
    },

    // ── s3-2h-q047 · mcq · exam · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q047": {
      // EN: <p>Data for an unknown compound:</p><ul><li>Mass spectrum: molecular ion at m/z 74.</li><li>Infrared: strong, very broad absorption at 2500–3000 cm<sup>−1</sup>; strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: three signals with areas in the ratio 3 : 2 : 1.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><p>Which compound fits all the data?</p>
      stem: "<p>未知の化合物のデータ：</p><ul><li>質量スペクトル：分子イオンは m/z 74。</li><li>赤外：2500–3000 cm<sup>−1</sup> に強くて非常に幅広い吸収。1715 cm<sup>−1</sup> に強い吸収。</li><li><sup>1</sup>H NMR：シグナルは 3 本で、面積の比は 3 : 2 : 1。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div><p>すべてのデータに合う化合物はどれですか。</p>",
      options: [
        // EN: butan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "butan-1-ol, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "methyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>",
        // EN: ethyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "ethyl methanoate, <span class=\"chem\">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>
        "propanoic acid, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>",
      ],
      hints: [
        // EN: All four options have M<sub>r</sub> = 74, so the mass spectrum alone cannot decide.
        "4 つの選択肢はどれも M<sub>r</sub> = 74 なので、質量スペクトルだけでは決まりません。",
        // EN: Use the infrared data to find the functional group.
        "赤外のデータを使って、官能基を見つけましょう。",
        // EN: Then check the number of NMR signals.
        "次に、NMR のシグナルの数を確かめましょう。",
      ],
      // EN: <ul><li>m/z 74 fits all four compounds.</li><li>Infrared: C=O (1700–1750 cm<sup>−1</sup>) and the very broad O–H of a carboxylic acid (2500–3000 cm<sup>−1</sup>). The compound has a –COOH group.</li><li>NMR: propanoic acid has three environments, <span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub><span></span></span> and COOH, with areas 3 : 2 : 1.</li></ul><p>The compound is propanoic acid. Each technique removes some of the options. Use all of them.</p>
      solution: "<ul><li>m/z 74 は 4 つの化合物すべてに合います。</li><li>赤外：C=O（1700–1750 cm<sup>−1</sup>）と、カルボン酸の非常に幅広い O–H（2500–3000 cm<sup>−1</sup>）。この化合物には –COOH 基があります。</li><li>NMR：propanoic acid には <span class=\"chem\">CH<sub>3</sub><span></span></span>、<span class=\"chem\">CH<sub>2</sub><span></span></span>、COOH の 3 つの環境があり、面積は 3 : 2 : 1 です。</li></ul><p>この化合物は propanoic acid です。方法ごとに、選択肢がいくつか消えます。すべての方法を使いましょう。</p>",
      misconception: {
        // EN (option A): Butan-1-ol does have M<sub>r</sub> = 74, but it has no C=O bond, its O–H absorption is at 3200–3600 cm<sup>−1</sup>, and it gives five NMR signals.
        "0": "butan-1-ol は確かに M<sub>r</sub> = 74 です。しかし C=O 結合がなく、O–H の吸収は 3200–3600 cm<sup>−1</sup> にあり、NMR のシグナルは 5 本です。",
        // EN (option B): Methyl ethanoate has M<sub>r</sub> = 74 and a C=O bond, but no O–H bond, and it gives only two NMR signals.
        "1": "methyl ethanoate は M<sub>r</sub> = 74 で、C=O 結合もあります。しかし O–H 結合がなく、NMR のシグナルは 2 本だけです。",
        // EN (option C): Ethyl methanoate has M<sub>r</sub> = 74, a C=O bond and three signals in the ratio 1 : 2 : 3. But it has no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "2": "ethyl methanoate は M<sub>r</sub> = 74 で、C=O 結合があり、シグナルも 3 本で比は 1 : 2 : 3 です。しかし O–H 結合がないので、2500–3000 cm<sup>−1</sup> の非常に幅広い吸収は出ません。",
      },
    },

    // ── s3-2h-q048 · mcq · challenge · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q048": {
      // EN: <p>A compound has the molecular formula <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>.</p><ul><li>Mass spectrum: peaks at m/z 72, 57 and 43 (tallest).</li><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>; no absorption above 3100 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption><sup>1</sup>H NMR signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">2.5</th><td>2</td><td>quartet</td></tr><tr><th scope="row">2.2</th><td>3</td><td>singlet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr><tr><th scope="row"><span class="chem">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div><p>Which compound is it?</p>
      stem: "<p>ある化合物の分子式は <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<span></span></span> です。</p><ul><li>質量スペクトル：m/z 72、57、43（いちばん高い）にピーク。</li><li>赤外：1715 cm<sup>−1</sup> に強い吸収。3100 cm<sup>−1</sup> より上に吸収なし。</li><li><sup>1</sup>H NMR：表を見てください。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption><sup>1</sup>H NMR のシグナル</caption><thead><tr><th scope=\"col\">シフト / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">2.5</th><td>2</td><td>四重線 (quartet)</td></tr><tr><th scope=\"row\">2.2</th><td>3</td><td>一重線 (singlet)</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>三重線 (triplet)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 21）より：<sup>1</sup>H NMR の化学シフト</caption><thead><tr><th scope=\"col\">プロトンの種類 (Type of proton)</th><th scope=\"col\">化学シフト / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div><p>この化合物はどれですか。</p>",
      options: [
        // EN: butanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>
        "butanal, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>",
        // EN: butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "butanone, <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 2-methylpropanal, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCHO<span></span></span>
        "2-methylpropanal, <span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>CHCHO<span></span></span>",
        // EN: but-3-en-1-ol, <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "but-3-en-1-ol, <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
      ],
      hints: [
        // EN: Infrared first: which functional group is present, and which is ruled out?
        "まず赤外です。どの官能基があり、どの官能基がないとわかりますか。",
        // EN: In the NMR data, a triplet (3 H) with a quartet (2 H) is an ethyl group. What is the singlet (3 H)?
        "NMR のデータで、三重線（3 H）と四重線（2 H）の組はエチル基です。一重線（3 H）は何ですか。",
        // EN: Check with the mass spectrum: 72 − 57 and 72 − 43.
        "質量スペクトルで確かめましょう：72 − 57 と 72 − 43。",
      ],
      // EN: <ul><li><strong>Infrared:</strong> 1715 cm<sup>−1</sup> is C=O. No absorption at 3200–3600 cm<sup>−1</sup>, so there is no O–H. The compound is an aldehyde or a ketone.</li><li><strong>NMR:</strong> no signal at 9.4–10.0 ppm, so it is not an aldehyde. Triplet (3 H) + quartet (2 H) = <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>. Singlet (3 H) = <span class="chem">CH<sub>3</sub><span></span></span> with no H on the neighbouring carbon. The signals at 2.2 and 2.5 ppm are in the range 2.2–2.7 ppm: H atoms on carbons next to C=O.</li><li><strong>Mass spectrum:</strong> 72 − 57 = 15, loss of •<span class="chem">CH<sub>3</sub><span></span></span>. 72 − 43 = 29, loss of •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>.</li></ul><p>The compound is butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>.</p>
      solution: "<ul><li><strong>赤外：</strong>1715 cm<sup>−1</sup> は C=O です。3200–3600 cm<sup>−1</sup> に吸収がないので、O–H はありません。この化合物はアルデヒドかケトンです。</li><li><strong>NMR：</strong>9.4–10.0 ppm にシグナルがないので、アルデヒドではありません。三重線（3 H）+ 四重線（2 H）= <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>。一重線（3 H）= 隣の炭素に H がない <span class=\"chem\">CH<sub>3</sub><span></span></span>。2.2 ppm と 2.5 ppm のシグナルは 2.2–2.7 ppm の範囲にあり、C=O の隣の炭素についた H 原子です。</li><li><strong>質量スペクトル：</strong>72 − 57 = 15 で、•<span class=\"chem\">CH<sub>3</sub><span></span></span> が失われています。72 − 43 = 29 で、•<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span> が失われ、<span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span> が残ります。</li></ul><p>この化合物は butanone <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span> です。</p>",
      misconception: {
        // EN (option A): Butanal has a C=O bond, but it has four hydrogen environments, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.
        "0": "butanal には C=O 結合がありますが、水素の環境は 4 つです。また、CHO の水素は 9.4–10.0 ppm にシグナルを示すはずです。",
        // EN (option C): 2-methylpropanal has three signals, but their areas are 6 : 1 : 1, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.
        "2": "2-methylpropanal のシグナルは 3 本ですが、面積は 6 : 1 : 1 です。また、CHO の水素は 9.4–10.0 ppm にシグナルを示すはずです。",
        // EN (option D): But-3-en-1-ol has an O–H bond, which would absorb at 3200–3600 cm<sup>−1</sup>, and no C=O bond to absorb at 1715 cm<sup>−1</sup>.
        "3": "but-3-en-1-ol には O–H 結合があり、3200–3600 cm<sup>−1</sup> に吸収が出るはずです。また、1715 cm<sup>−1</sup> に吸収を示す C=O 結合がありません。",
      },
    },

    // ── s3-2h-q049 · short · challenge · AHL · Structure 3.2.12 · 4 marks
    "s3-2h-q049": {
      // EN: <p>A compound has the molecular formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<span></span></span>.</p><ul><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: one signal, a singlet.</li><li>Mass spectrum: molecular ion at m/z 58; tallest peak at m/z 43.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Deduce the structure of the compound. Explain how each piece of data supports your answer.</p>
      stem: "<p>ある化合物の分子式は <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<span></span></span> です。</p><ul><li>赤外：1715 cm<sup>−1</sup> に強い吸収。</li><li><sup>1</sup>H NMR：シグナルは 1 本で、一重線。</li><li>質量スペクトル：分子イオンは m/z 58。いちばん高いピークは m/z 43。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 22）より：質量スペクトルで失われるフラグメント</caption><thead><tr><th scope=\"col\">失われた質量 (mass lost)</th><th scope=\"col\">失われる中性フラグメントの候補 (Possible neutral fragment lost)</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> または CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> または •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>この化合物の構造を導きなさい (deduce)。それぞれのデータが答えをどのように支えるかを説明しなさい (explain)。</p>",
      hints: [
        // EN: Start with the infrared absorption. Which bond is it?
        "赤外吸収から始めましょう。どの結合ですか。",
        // EN: There are only two structures with formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<span></span></span> that contain C=O. Draw both and count their hydrogen environments.
        "分子式 <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<span></span></span> で C=O をもつ構造は 2 つだけです。両方を描いて、水素の環境を数えましょう。",
        // EN: Subtract 43 from 58 and look up the mass lost.
        "58 から 43 を引いて、失われた質量を表で調べましょう。",
      ],
      // EN: <p>A good order of attack: infrared for the functional group, NMR for the carbon skeleton, mass spectrum as a check.</p><div class="worked__math">58 − 43 = 15 → •CH<sub>3</sub> lost</div><div class="worked__math">CH<sub>3</sub>COCH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>3</sub></div><p>In a "deduce and explain" question, link every piece of data to a feature of the structure. Naming the compound without the evidence earns one mark only.</p>
      solution: "<p>進め方のよい順番は、赤外で官能基、NMR で炭素骨格、質量スペクトルで確認です。</p><div class=\"worked__math\">58 − 43 = 15 → •CH<sub>3</sub> が失われた</div><div class=\"worked__math\">CH<sub>3</sub>COCH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>3</sub></div><p>「deduce and explain（導いて説明する）」問題では、データの 1 つ 1 つを構造の特徴と結びつけましょう。証拠を示さずに化合物の名前だけ書くと、1 点しかもらえません。</p>",
      // EN: <p>The compound is propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>.</p><ul><li>Infrared: 1715 cm<sup>−1</sup> is in the range 1700–1750 cm<sup>−1</sup>, so there is a C=O bond. With one O atom, the compound is an aldehyde or a ketone.</li><li>NMR: one signal means all six H atoms are in the same environment. That fits two equivalent <span class="chem">CH<sub>3</sub><span></span></span> groups. (Propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>, would give three signals.)</li><li>The signal is a singlet because the neighbouring carbon, the C=O carbon, holds no H atoms.</li><li>Mass spectrum: 58 − 43 = 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span> at m/z 43.</li></ul>
      answer: "<p>この化合物は propanone <span class=\"chem\">CH<sub>3</sub>COCH<sub>3</sub><span></span></span> です。</p><ul><li>赤外：1715 cm<sup>−1</sup> は 1700–1750 cm<sup>−1</sup> の範囲にあるので、C=O 結合があります。O 原子が 1 個なので、アルデヒドかケトンです。</li><li>NMR：シグナルが 1 本なので、6 個の H 原子はすべて同じ環境にあります。これは、等価な 2 つの <span class=\"chem\">CH<sub>3</sub><span></span></span> 基に合います。（propanal <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span> なら、シグナルは 3 本になります。）</li><li>シグナルが一重線なのは、隣の炭素（C=O の炭素）に H 原子がないからです。</li><li>質量スペクトル：58 − 43 = 15 で、•<span class=\"chem\">CH<sub>3</sub><span></span></span> が失われ、m/z 43 に <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span> が残ります。</li></ul>",
      markscheme: [
        // EN: IR: 1715 cm⁻¹ / 1700–1750 cm⁻¹ shows a C=O bond (aldehyde or ketone).
        "IR：1715 cm⁻¹ / 1700–1750 cm⁻¹ は C=O 結合を示す（アルデヒドまたはケトン）。",
        // EN: NMR: one signal, so all (six) H atoms are in one chemical environment / two equivalent CH₃ groups.
        "NMR：シグナルが 1 本なので、すべて（6 個）の H 原子が 1 つの化学的環境にある / 等価な CH₃ 基が 2 つある。",
        // EN: Structure CH₃COCH₃ / propanone (name or any structural formula).
        "構造 CH₃COCH₃ / propanone（名前、またはどの構造式でも可）。",
        // EN: MS: m/z 43 is M − 15, loss of •CH₃ / the ion CH₃CO⁺ (with its + charge); OR singlet because there are no H atoms on the adjacent (C=O) carbon.
        "MS：m/z 43 は M − 15 で、•CH₃ が失われる / イオン CH₃CO⁺（+ の電荷つき）。または、隣の（C=O の）炭素に H 原子がないので一重線になる。",
      ],
    },

    // ── s3-2h-q050 · short · challenge · AHL · Structure 3.2.12 · 5 marks
    "s3-2h-q050": {
      // EN: <p>A liquid contains 52.1% carbon, 13.2% hydrogen and 34.7% oxygen by mass.</p><ul><li>Mass spectrum: molecular ion at m/z 46; tallest peak at m/z 31.</li><li>Infrared: strong, broad absorption at 3350 cm<sup>−1</sup>; no absorption at 1700–1750 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption><sup>1</sup>H NMR signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">3.7</th><td>2</td><td>quartet</td></tr><tr><th scope="row">2.6</th><td>1</td><td>singlet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Determine the empirical formula, the molecular formula and the structure of the compound. Show how the spectra support the structure.</p>
      stem: "<p>ある液体は、質量で炭素 52.1%、水素 13.2%、酸素 34.7% を含みます。</p><ul><li>質量スペクトル：分子イオンは m/z 46。いちばん高いピークは m/z 31。</li><li>赤外：3350 cm<sup>−1</sup> に強くて幅広い吸収。1700–1750 cm<sup>−1</sup> に吸収なし。</li><li><sup>1</sup>H NMR：表を見てください。</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption><sup>1</sup>H NMR のシグナル</caption><thead><tr><th scope=\"col\">シフト / ppm</th><th scope=\"col\">面積</th><th scope=\"col\">分裂</th></tr></thead><tbody><tr><th scope=\"row\">3.7</th><td>2</td><td>四重線 (quartet)</td></tr><tr><th scope=\"row\">2.6</th><td>1</td><td>一重線 (singlet)</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>三重線 (triplet)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 20）より：赤外吸収の範囲</caption><thead><tr><th scope=\"col\">結合 (Bond)</th><th scope=\"col\">有機分子の種類 (Types of organic molecules)</th><th scope=\"col\">波数 / cm<sup>−1</sup></th><th scope=\"col\">強度 (Intensity)</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>アルデヒド、ケトン、カルボン酸、エステル (aldehydes, ketones, carboxylic acids and esters)</td><td>1700–1750</td><td>強い (strong)</td></tr><tr><th scope=\"row\">O–H</th><td>カルボン酸（水素結合あり）(carboxylic acids)</td><td>2500–3000</td><td>強い、非常に幅広い (strong, very broad)</td></tr><tr><th scope=\"row\">O–H</th><td>アルコール、フェノール（水素結合あり）(alcohols and phenols)</td><td>3200–3600</td><td>強い、幅広い (strong, broad)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 21）より：<sup>1</sup>H NMR の化学シフト</caption><thead><tr><th scope=\"col\">プロトンの種類 (Type of proton)</th><th scope=\"col\">化学シフト / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>データブックレット（セクション 22）より：質量スペクトルで失われるフラグメント</caption><thead><tr><th scope=\"col\">失われた質量 (mass lost)</th><th scope=\"col\">失われる中性フラグメントの候補 (Possible neutral fragment lost)</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> または CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> または •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>この化合物の組成式（実験式、empirical formula）、分子式 (molecular formula)、構造を求めなさい (determine)。スペクトルがその構造をどのように支えるかを示しなさい。</p>",
      hints: [
        // EN: Start with the percentages: divide each by the relative atomic mass, then by the smallest answer.
        "百分率から始めましょう。それぞれを相対原子質量で割り、次にいちばん小さい答えで割ります。",
        // EN: Compare the empirical formula mass with the m/z of the molecular ion.
        "組成式の式量を、分子イオンの m/z とくらべましょう。",
        // EN: There are only two structures with this molecular formula: an alcohol and an ether. Which one do the infrared and NMR data fit?
        "この分子式の構造は 2 つだけです。アルコールとエーテルです。赤外と NMR のデータに合うのはどちらですか。",
      ],
      // EN: <p>Any five of the six marking points give full marks. The route is always the same:</p><ol><li>composition → empirical formula;</li><li>molecular ion → molecular formula;</li><li>infrared → functional group;</li><li>NMR → how the atoms are joined;</li><li>mass spectrum fragments → check.</li></ol><p>The isomer methoxymethane, <span class="chem">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>, would give no O–H absorption and only one NMR signal. In a measured spectrum of ethanol the <span class="chem">CH<sub>3</sub><span></span></span> triplet is nearer 1.2 ppm. Real spectra vary a little: the booklet says its values can change with the solvent and conditions.</p>
      solution: "<p>6 つの採点ポイントのうち、どれか 5 つで満点です。道すじはいつも同じです。</p><ol><li>組成 → 組成式</li><li>分子イオン → 分子式</li><li>赤外 → 官能基</li><li>NMR → 原子のつながり方</li><li>質量スペクトルのフラグメント → 確認</li></ol><p>異性体の methoxymethane <span class=\"chem\">CH<sub>3</sub>OCH<sub>3</sub><span></span></span> なら、O–H の吸収はなく、NMR のシグナルは 1 本だけです。ethanol を実際に測定したスペクトルでは、<span class=\"chem\">CH<sub>3</sub><span></span></span> の三重線は 1.2 ppm に近いところにあります。実際のスペクトルは少しずれます。データブックレットにも、値は溶媒や条件によって変わることがあると書かれています。</p>",
      // EN: <p><strong>Empirical formula:</strong></p><div class="worked__math">C: 52.1 ÷ 12.01 = 4.34</div><div class="worked__math">H: 13.2 ÷ 1.01 = 13.07</div><div class="worked__math">O: 34.7 ÷ 16.00 = 2.17</div><div class="worked__math">ratio = 2.00 : 6.03 : 1 → C<sub>2</sub>H<sub>6</sub>O</div><p><strong>Molecular formula:</strong> the empirical formula mass is 2(12.01) + 6(1.01) + 16.00 = 46.08, which matches the molecular ion at m/z 46. So the molecular formula is <span class="chem">C<sub>2</sub>H<sub>6</sub>O<span></span></span>.</p><p><strong>Infrared:</strong> the broad absorption at 3350 cm<sup>−1</sup> (3200–3600 cm<sup>−1</sup>) is the O–H bond of an alcohol. So the compound is not the ether <span class="chem">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>.</p><p><strong>NMR:</strong> three signals with areas 3 : 2 : 1. The triplet (3 H) and quartet (2 H) show an ethyl group, <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>. The quartet at 3.7 ppm (3.3–3.7 ppm) is a <span class="chem">CH<sub>2</sub><span></span></span> bonded to O. The singlet (1 H) is the O–H hydrogen.</p><p><strong>Mass spectrum:</strong> 46 − 31 = 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>2</sub>OH<sup>+</sup><span></span></span>.</p><p><strong>Structure:</strong> ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>.</p>
      answer: "<p><strong>組成式：</strong></p><div class=\"worked__math\">C: 52.1 ÷ 12.01 = 4.34</div><div class=\"worked__math\">H: 13.2 ÷ 1.01 = 13.07</div><div class=\"worked__math\">O: 34.7 ÷ 16.00 = 2.17</div><div class=\"worked__math\">比 = 2.00 : 6.03 : 1 → C<sub>2</sub>H<sub>6</sub>O</div><p><strong>分子式：</strong>組成式の式量は 2(12.01) + 6(1.01) + 16.00 = 46.08 で、m/z 46 の分子イオンと合います。だから分子式は <span class=\"chem\">C<sub>2</sub>H<sub>6</sub>O<span></span></span> です。</p><p><strong>赤外：</strong>3350 cm<sup>−1</sup> の幅広い吸収（3200–3600 cm<sup>−1</sup>）は、アルコールの O–H 結合です。だから、この化合物はエーテルの <span class=\"chem\">CH<sub>3</sub>OCH<sub>3</sub><span></span></span> ではありません。</p><p><strong>NMR：</strong>シグナルは 3 本で、面積は 3 : 2 : 1 です。三重線（3 H）と四重線（2 H）は、エチル基 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span> を示します。3.7 ppm の四重線（3.3–3.7 ppm）は、O に結合した <span class=\"chem\">CH<sub>2</sub><span></span></span> です。一重線（1 H）は O–H の水素です。</p><p><strong>質量スペクトル：</strong>46 − 31 = 15 で、•<span class=\"chem\">CH<sub>3</sub><span></span></span> が失われ、<span class=\"chem\">CH<sub>2</sub>OH<sup>+</sup><span></span></span> が残ります。</p><p><strong>構造：</strong>ethanol <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>。</p>",
      markscheme: [
        // EN: Empirical formula C₂H₆O, with working (mole ratio 4.34 : 13.07 : 2.17, or 2 : 6 : 1).
        "組成式 C₂H₆O。途中の計算つき（物質量の比 4.34 : 13.07 : 2.17、または 2 : 6 : 1）。",
        // EN: Molecular formula C₂H₆O, because the empirical formula mass (46) equals the m/z of the molecular ion.
        "分子式 C₂H₆O。組成式の式量（46）が分子イオンの m/z に等しいから。",
        // EN: IR: absorption at 3200–3600 cm⁻¹ shows O–H of an alcohol (so not an ether); accept "no C=O".
        "IR：3200–3600 cm⁻¹ の吸収はアルコールの O–H を示す（だからエーテルではない）。「C=O がない」も可。",
        // EN: NMR: three H environments in ratio 3 : 2 : 1, AND triplet + quartet show CH₃CH₂ / the quartet CH₂ is next to CH₃.
        "NMR：H の環境が 3 つで比は 3 : 2 : 1。かつ、三重線 + 四重線は CH₃CH₂ を示す / 四重線の CH₂ は CH₃ の隣にある。",
        // EN: Structure CH₃CH₂OH / ethanol.
        "構造 CH₃CH₂OH / ethanol。",
        // EN: MS: m/z 31 is M − 15, loss of •CH₃ / the ion CH₂OH⁺ (with its + charge).
        "MS：m/z 31 は M − 15 で、•CH₃ が失われる / イオン CH₂OH⁺（+ の電荷つき）。",
      ],
    },

  }
});
