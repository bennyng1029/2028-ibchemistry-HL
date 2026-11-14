/* s3-2h.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's3-2h.q', {
  questions: {

    // ── s3-2h-q001 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q001": {
      // EN: <p>Which compound can exist as <i>cis</i> and <i>trans</i> isomers?</p>
      stem: "<p><i>cis</i> 이성질체와 <i>trans</i> 이성질체로 존재할 수 있는 화합물은 무엇인가요?</p>",
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
        "C=C 결합의 탄소 원자를 하나씩 차례로 살펴보세요.",
        // EN: Each of the two carbon atoms must be bonded to two different atoms or groups.
        "두 탄소 원자가 각각 서로 다른 두 원자 또는 원자단과 결합해야 해요.",
      ],
      // EN: <p>For <i>cis–trans</i> isomers you need restricted rotation (the C=C bond) and two different groups on <strong>each</strong> carbon of the double bond.</p><p>In but-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>, each carbon of the double bond holds one H and one <span class="chem">CH<sub>3</sub><span></span></span>. The two methyl groups can be on the same side (<i>cis</i>) or on opposite sides (<i>trans</i>).</p>
      solution: "<p><i>cis–trans</i> 이성질체가 생기려면 회전이 제한되어야 하고(C=C 결합), 이중 결합의 <strong>각</strong> 탄소에 서로 다른 두 원자단이 붙어 있어야 해요.</p><p>but-2-ene, <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>에서는 이중 결합의 각 탄소에 H 하나와 <span class=\"chem\">CH<sub>3</sub><span></span></span> 하나가 붙어 있어요. 두 메틸기는 같은 쪽(<i>cis</i>)에 있을 수도 있고 반대쪽(<i>trans</i>)에 있을 수도 있어요.</p>",
      misconception: {
        // EN (option A): In but-1-ene the first carbon of the double bond holds two hydrogen atoms. Swapping two identical atoms gives the same molecule.
        "0": "but-1-ene에서는 이중 결합의 첫 번째 탄소에 수소 원자 두 개가 붙어 있어요. 똑같은 두 원자를 서로 바꾸면 같은 분자가 돼요.",
        // EN (option C): In 2-methylpropene one carbon of the double bond holds two methyl groups and the other holds two hydrogen atoms. Neither carbon has two different groups.
        "2": "2-methylpropene에서는 이중 결합의 한 탄소에 메틸기 두 개가, 다른 탄소에 수소 원자 두 개가 붙어 있어요. 어느 탄소에도 서로 다른 두 원자단이 없어요.",
        // EN (option D): In propene the end carbon of the double bond holds two hydrogen atoms. Both carbons must hold two different groups.
        "3": "propene에서는 이중 결합의 끝 탄소에 수소 원자 두 개가 붙어 있어요. 두 탄소 모두 서로 다른 두 원자단을 가져야 해요.",
      },
    },

    // ── s3-2h-q002 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q002": {
      // EN: <p>X and Y are two drawings of 1,2-dichloroethene.</p><p><strong>X</strong></p><p><svg class="q-fig" viewBox="-33.1 -41.4 101 84" width="101" height="84" style="max-width:100%;height:auto" role="img" aria-label="Molecule X: two carbon atoms joined by a double bond. Both chlorine atoms are drawn above the double bond and both hydrogen atoms below it."><line x1="9.0" y1="-2.3" x2="25.5" y2="-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.3" x2="25.5" y2="2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="-7.4" x2="-11.7" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="7.4" x2="-13.4" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="-7.4" x2="46.2" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="7.4" x2="47.9" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="34.5" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="-18.6" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-18.6" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="53.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg></p><p><strong>Y</strong></p><p><svg class="q-fig" viewBox="-33.1 -41.4 101 84" width="101" height="84" style="max-width:100%;height:auto" role="img" aria-label="Molecule Y: two carbon atoms joined by a double bond. One chlorine atom is drawn above the double bond on the left carbon and the other below it on the right carbon."><line x1="9.0" y1="-2.3" x2="25.5" y2="-2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.3" x2="25.5" y2="2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="-7.4" x2="-11.7" y2="-16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-5.2" y1="7.4" x2="-13.4" y2="19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="-7.4" x2="47.9" y2="-19.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="39.7" y1="7.4" x2="46.2" y2="16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="34.5" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="-18.6" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-18.6" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="-21.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="53.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg></p><p>Which statement is correct?</p>
      stem: "<p>X와 Y는 1,2-dichloroethene을 그린 두 그림이에요.</p><p><strong>X</strong></p><p><svg class=\"q-fig\" viewBox=\"-33.1 -41.4 101 84\" width=\"101\" height=\"84\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"분자 X: 두 탄소 원자가 이중 결합으로 이어져 있어요. 두 염소 원자는 모두 이중 결합 위쪽에, 두 수소 원자는 모두 아래쪽에 그려져 있어요.\"><line x1=\"9.0\" y1=\"-2.3\" x2=\"25.5\" y2=\"-2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.3\" x2=\"25.5\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"-7.4\" x2=\"-11.7\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"7.4\" x2=\"-13.4\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"-7.4\" x2=\"46.2\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"7.4\" x2=\"47.9\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"34.5\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"-18.6\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-18.6\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"53.1\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg></p><p><strong>Y</strong></p><p><svg class=\"q-fig\" viewBox=\"-33.1 -41.4 101 84\" width=\"101\" height=\"84\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"분자 Y: 두 탄소 원자가 이중 결합으로 이어져 있어요. 염소 원자 하나는 왼쪽 탄소의 이중 결합 위쪽에, 다른 하나는 오른쪽 탄소의 아래쪽에 그려져 있어요.\"><line x1=\"9.0\" y1=\"-2.3\" x2=\"25.5\" y2=\"-2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.3\" x2=\"25.5\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"-7.4\" x2=\"-11.7\" y2=\"-16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-5.2\" y1=\"7.4\" x2=\"-13.4\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"-7.4\" x2=\"47.9\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"39.7\" y1=\"7.4\" x2=\"46.2\" y2=\"16.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"34.5\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"-18.6\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-18.6\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"-21.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"53.1\" y=\"31.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg></p><p>옳은 설명은 무엇인가요?</p>",
      options: [
        // EN: X is the <i>cis</i> isomer and Y is the <i>trans</i> isomer.
        "X는 <i>cis</i> 이성질체이고 Y는 <i>trans</i> 이성질체예요.",
        // EN: X is the <i>trans</i> isomer and Y is the <i>cis</i> isomer.
        "X는 <i>trans</i> 이성질체이고 Y는 <i>cis</i> 이성질체예요.",
        // EN: X and Y are the same molecule, because one end can rotate about the C=C bond.
        "한쪽 끝이 C=C 결합을 축으로 회전할 수 있으므로 X와 Y는 같은 분자예요.",
        // EN: X and Y are structural isomers.
        "X와 Y는 구조 이성질체예요.",
      ],
      hints: [
        // EN: Find the two chlorine atoms in each drawing. Are they on the same side of the double bond or on opposite sides?
        "각 그림에서 두 염소 원자를 찾아보세요. 이중 결합의 같은 쪽에 있나요, 반대쪽에 있나요?",
        // EN: <i>Cis</i> = same side. <i>Trans</i> = opposite sides.
        "<i>Cis</i> = 같은 쪽. <i>Trans</i> = 반대쪽.",
      ],
      // EN: <p>In X both Cl atoms are on the same side of the C=C bond: this is the <i>cis</i> isomer. In Y they are on opposite sides: this is the <i>trans</i> isomer.</p><p>X and Y have the same connectivity but a different arrangement in space. They are stereoisomers, and they cannot interconvert because rotation about the double bond is restricted.</p>
      solution: "<p>X에서는 두 Cl 원자가 C=C 결합의 같은 쪽에 있어요. 이것이 <i>cis</i> 이성질체예요. Y에서는 두 원자가 반대쪽에 있어요. 이것이 <i>trans</i> 이성질체예요.</p><p>X와 Y는 원자의 연결 순서는 같지만 공간 배열이 달라요. 둘은 입체 이성질체이고, 이중 결합을 축으로 한 회전이 제한되어 있어서 서로 바뀌지 않아요.</p>",
      misconception: {
        // EN (option B): The labels are the wrong way round. <i>Cis</i> means "on the same side". In X both chlorine atoms are on the same side of the double bond.
        "1": "이름이 거꾸로 붙었어요. <i>Cis</i>는 “같은 쪽에”라는 뜻이에요. X에서는 두 염소 원자가 모두 이중 결합의 같은 쪽에 있어요.",
        // EN (option C): Rotation about a C=C double bond is restricted, because it would break the π bond. So X cannot turn into Y at room temperature.
        "2": "C=C 이중 결합을 축으로 한 회전은 제한되어 있어요. 회전하려면 π 결합이 끊어져야 하기 때문이에요. 그래서 실온에서 X는 Y로 바뀔 수 없어요.",
        // EN (option D): Structural isomers have different connectivity. In X and in Y each carbon is bonded to one H, one Cl and the other carbon. Only the arrangement in space differs, so they are stereoisomers.
        "3": "구조 이성질체는 원자의 연결 순서가 달라요. X와 Y 모두 각 탄소가 H 하나, Cl 하나, 그리고 다른 탄소와 결합해 있어요. 공간 배열만 다르므로 둘은 입체 이성질체예요.",
      },
    },

    // ── s3-2h-q003 · multi · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q003": {
      // EN: <p>Which of these compounds can exist as <i>cis</i> and <i>trans</i> isomers? Select <strong>all</strong> that apply.</p>
      stem: "<p>다음 화합물 중 <i>cis</i> 이성질체와 <i>trans</i> 이성질체로 존재할 수 있는 것은 무엇인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: 1,2-dimethylcyclopropane (one methyl group on each of two ring carbons)
        "1,2-dimethylcyclopropane(고리의 두 탄소에 메틸기가 하나씩 있음)",
        // EN: 1,1-dimethylcyclobutane (both methyl groups on the same ring carbon)
        "1,1-dimethylcyclobutane(두 메틸기가 모두 고리의 같은 탄소에 있음)",
        // EN: pent-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "pent-2-ene, <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>",
        // EN: 2-methylbut-2-ene, <span class="chem">CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub><span></span></span>
        "2-methylbut-2-ene, <span class=\"chem\">CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub><span></span></span>",
        // EN: 1,3-dimethylcyclobutane (methyl groups on opposite corners of the ring)
        "1,3-dimethylcyclobutane(메틸기가 고리의 마주 보는 꼭짓점에 있음)",
      ],
      hints: [
        // EN: A ring stops rotation in the same way as a double bond.
        "고리는 이중 결합과 같은 방식으로 회전을 막아요.",
        // EN: In a ring you need two different ring carbons that each hold a substituent and a hydrogen atom. In an alkene each carbon of C=C needs two different groups.
        "고리에서는 서로 다른 두 고리 탄소가 각각 치환기 하나와 수소 원자 하나를 가져야 해요. 알켄에서는 C=C의 각 탄소가 서로 다른 두 원자단을 가져야 해요.",
      ],
      // EN: <p>Two things are needed: restricted rotation (a C=C bond or a ring) and two different groups on each of two carbon atoms.</p><ul><li>1,2-dimethylcyclopropane: yes. The two methyl groups can be on the same face of the ring (<i>cis</i>) or on opposite faces (<i>trans</i>).</li><li>1,1-dimethylcyclobutane: no. Both groups are on one carbon.</li><li>pent-2-ene: yes. One carbon of C=C holds H and <span class="chem">CH<sub>3</sub><span></span></span>, the other holds H and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>.</li><li>2-methylbut-2-ene: no. One carbon of C=C holds two <span class="chem">CH<sub>3</sub><span></span></span> groups.</li><li>1,3-dimethylcyclobutane: yes. The methyl groups are on two different ring carbons, so they can be on the same face or on opposite faces.</li></ul>
      solution: "<p>두 가지가 필요해요. 회전이 제한되어야 하고(C=C 결합이나 고리), 두 탄소 원자에 각각 서로 다른 두 원자단이 붙어 있어야 해요.</p><ul><li>1,2-dimethylcyclopropane: 예. 두 메틸기가 고리의 같은 면(<i>cis</i>)에 있을 수도 있고 반대 면(<i>trans</i>)에 있을 수도 있어요.</li><li>1,1-dimethylcyclobutane: 아니요. 두 원자단이 모두 한 탄소에 있어요.</li><li>pent-2-ene: 예. C=C의 한 탄소에는 H와 <span class=\"chem\">CH<sub>3</sub><span></span></span>가, 다른 탄소에는 H와 <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>가 붙어 있어요.</li><li>2-methylbut-2-ene: 아니요. C=C의 한 탄소에 <span class=\"chem\">CH<sub>3</sub><span></span></span> 원자단이 두 개 붙어 있어요.</li><li>1,3-dimethylcyclobutane: 예. 메틸기가 서로 다른 두 고리 탄소에 있으므로 같은 면에 있을 수도, 반대 면에 있을 수도 있어요.</li></ul>",
      misconception: {
        // EN (option B): In 1,1-dimethylcyclobutane both methyl groups are on the same carbon. One is above the ring and one below it in every case, so there is only one arrangement.
        "1": "1,1-dimethylcyclobutane에서는 두 메틸기가 같은 탄소에 있어요. 어떤 경우든 하나는 고리 위에, 하나는 고리 아래에 있으므로 배열이 한 가지뿐이에요.",
        // EN (option D): In 2-methylbut-2-ene one carbon of the double bond holds two methyl groups. Swapping two identical groups gives the same molecule.
        "3": "2-methylbut-2-ene에서는 이중 결합의 한 탄소에 메틸기가 두 개 붙어 있어요. 똑같은 두 원자단을 서로 바꾸면 같은 분자가 돼요.",
      },
    },

    // ── s3-2h-q004 · short · exam · AHL · Structure 3.2.7 · 2 marks
    "s3-2h-q004": {
      // EN: <p>But-2-ene, <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>, exists as <i>cis</i> and <i>trans</i> isomers. But-1-ene, <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>, does not.</p><p>Explain both facts.</p>
      stem: "<p>But-2-ene, <span class=\"chem\">CH<sub>3</sub>CH=CHCH<sub>3</sub><span></span></span>는 <i>cis</i> 이성질체와 <i>trans</i> 이성질체로 존재해요. But-1-ene, <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub><span></span></span>는 그렇지 않아요.</p><p>두 사실을 모두 설명하시오 (explain).</p>",
      hints: [
        // EN: Start with rotation. What is special about a double bond?
        "회전부터 생각해 보세요. 이중 결합은 무엇이 특별한가요?",
        // EN: Then compare what is attached to each carbon of the C=C in the two molecules.
        "그다음 두 분자에서 C=C의 각 탄소에 무엇이 붙어 있는지 비교해 보세요.",
      ],
      // EN: <p>The mark-earning phrases are "restricted rotation about the double bond" and "two different groups on each carbon of the double bond". Writing only "the groups are on different sides" describes the isomers but does not explain them.</p>
      solution: "<p>점수를 받는 표현은 “이중 결합을 축으로 한 회전이 제한됨”과 “이중 결합의 각 탄소에 서로 다른 두 원자단이 있음”이에요. “원자단이 서로 다른 쪽에 있다”라고만 쓰면 이성질체를 묘사할 뿐 설명하지는 못해요.</p>",
      // EN: <p>There is no free rotation about the C=C double bond (rotation is restricted). In but-2-ene each carbon atom of the double bond is bonded to two different groups (H and <span class="chem">CH<sub>3</sub><span></span></span>), so the two <span class="chem">CH<sub>3</sub><span></span></span> groups can be fixed on the same side or on opposite sides. In but-1-ene one carbon of the double bond is bonded to two identical atoms (two H), so swapping them gives the same molecule.</p>
      answer: "<p>C=C 이중 결합을 축으로 한 자유 회전이 없어요(회전이 제한됨). but-2-ene에서는 이중 결합의 각 탄소 원자가 서로 다른 두 원자단(H와 <span class=\"chem\">CH<sub>3</sub><span></span></span>)과 결합해 있으므로, 두 <span class=\"chem\">CH<sub>3</sub><span></span></span> 원자단이 같은 쪽 또는 반대쪽에 고정될 수 있어요. but-1-ene에서는 이중 결합의 한 탄소가 똑같은 두 원자(H 두 개)와 결합해 있어서, 이 둘을 바꿔도 같은 분자가 돼요.</p>",
      markscheme: [
        // EN: Restricted rotation / no free rotation about the C=C (double) bond.
        "C=C (이중) 결합을 축으로 한 회전이 제한됨 / 자유 회전이 없음.",
        // EN: But-2-ene: each carbon of the double bond has two different atoms or groups attached (H and CH₃). But-1-ene: one carbon of the double bond has two identical atoms attached (two H). Both needed for the mark.
        "but-2-ene: 이중 결합의 각 탄소에 서로 다른 두 원자 또는 원자단(H와 CH₃)이 붙어 있음. but-1-ene: 이중 결합의 한 탄소에 똑같은 두 원자(H 두 개)가 붙어 있음. 둘 다 써야 점수를 받음.",
      ],
    },

    // ── s3-2h-q005 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q005": {
      // EN: <p>In these drawings a solid wedge is a bond coming towards you, in front of the ring. A hashed wedge is a bond going away from you, behind the ring.</p><p>Which drawing shows <i>trans</i>-1,2-dichlorocyclopropane?</p>
      stem: "<p>이 그림에서 실선 쐐기는 내 쪽으로, 즉 고리 앞으로 나오는 결합이에요. 점선 쐐기는 나에게서 멀어지는, 즉 고리 뒤로 가는 결합이에요.</p><p><i>trans</i>-1,2-dichlorocyclopropane을 나타낸 그림은 무엇인가요?</p>",
      options: [
        // EN: <svg class="q-fig" viewBox="-32.5 -32.1 95 73" width="95" height="73" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. Both chlorine atoms are on solid wedge bonds."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.7,12.2 -7.9,16.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><polygon points="30.0,0.0 37.9,16.6 43.7,12.2" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><text x="-18.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="48.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-32.5 -32.1 95 73\" width=\"95\" height=\"73\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"탄소 3개로 된 고리. 서로 다른 두 고리 탄소에 염소 원자가 하나씩 있어요. 두 염소 원자 모두 실선 쐐기 결합에 있어요.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.7,12.2 -7.9,16.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><polygon points=\"30.0,0.0 37.9,16.6 43.7,12.2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><text x=\"-18.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"48.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-43.0 -32.1 79 77" width="79" height="77" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. One ring carbon carries two chlorine atoms, one on a solid wedge bond and one on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -17.2,-0.9 -16.1,6.2" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-2.0" y1="2.5" x2="0.2" y2="3.2" stroke="currentColor" stroke-width="1.3"/><line x1="-3.4" y1="5.2" x2="-0.2" y2="6.2" stroke="currentColor" stroke-width="1.3"/><line x1="-4.8" y1="7.9" x2="-0.6" y2="9.2" stroke="currentColor" stroke-width="1.3"/><line x1="-6.2" y1="10.5" x2="-1.0" y2="12.2" stroke="currentColor" stroke-width="1.3"/><line x1="-7.6" y1="13.2" x2="-1.4" y2="15.2" stroke="currentColor" stroke-width="1.3"/><line x1="-9.0" y1="15.9" x2="-1.8" y2="18.2" stroke="currentColor" stroke-width="1.3"/><text x="-28.5" y="9.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="-9.0" y="33.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-43.0 -32.1 79 77\" width=\"79\" height=\"77\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"탄소 3개로 된 고리. 한 고리 탄소에 염소 원자 두 개가 있는데, 하나는 실선 쐐기 결합에, 하나는 점선 쐐기 결합에 있어요.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -17.2,-0.9 -16.1,6.2\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-2.0\" y1=\"2.5\" x2=\"0.2\" y2=\"3.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-3.4\" y1=\"5.2\" x2=\"-0.2\" y2=\"6.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-4.8\" y1=\"7.9\" x2=\"-0.6\" y2=\"9.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-6.2\" y1=\"10.5\" x2=\"-1.0\" y2=\"12.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-7.6\" y1=\"13.2\" x2=\"-1.4\" y2=\"15.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-9.0\" y1=\"15.9\" x2=\"-1.8\" y2=\"18.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-28.5\" y=\"9.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"-9.0\" y=\"33.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-32.5 -32.1 95 73" width="95" height="73" style="max-width:100%;height:auto" role="img" aria-label="Three-membered carbon ring. Two different ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="15.0" y2="-26.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15.0" y1="-26.1" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.7,12.2 -7.9,16.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="30.9" y1="3.1" x2="32.7" y2="1.7" stroke="currentColor" stroke-width="1.3"/><line x1="32.3" y1="5.8" x2="34.9" y2="3.8" stroke="currentColor" stroke-width="1.3"/><line x1="33.6" y1="8.5" x2="37.2" y2="5.9" stroke="currentColor" stroke-width="1.3"/><line x1="35.0" y1="11.2" x2="39.4" y2="8.0" stroke="currentColor" stroke-width="1.3"/><line x1="36.4" y1="14.0" x2="41.6" y2="10.0" stroke="currentColor" stroke-width="1.3"/><line x1="37.8" y1="16.7" x2="43.8" y2="12.1" stroke="currentColor" stroke-width="1.3"/><text x="-18.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="48.0" y="29.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-32.5 -32.1 95 73\" width=\"95\" height=\"73\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"탄소 3개로 된 고리. 서로 다른 두 고리 탄소에 염소 원자가 하나씩 있어요. 한 염소는 실선 쐐기 결합에, 다른 염소는 점선 쐐기 결합에 있어요.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"15.0\" y2=\"-26.1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"15.0\" y1=\"-26.1\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.7,12.2 -7.9,16.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"30.9\" y1=\"3.1\" x2=\"32.7\" y2=\"1.7\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"32.3\" y1=\"5.8\" x2=\"34.9\" y2=\"3.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"33.6\" y1=\"8.5\" x2=\"37.2\" y2=\"5.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"35.0\" y1=\"11.2\" x2=\"39.4\" y2=\"8.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"36.4\" y1=\"14.0\" x2=\"41.6\" y2=\"10.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"37.8\" y1=\"16.7\" x2=\"43.8\" y2=\"12.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-18.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"48.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-34.0 -36.0 98 72" width="98" height="72" style="max-width:100%;height:auto" role="img" aria-label="Four-membered carbon ring. Two neighbouring ring carbons each carry a chlorine atom. One chlorine is on a solid wedge bond and the other is on a hashed wedge bond."><line x1="0.0" y1="0.0" x2="30.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="0.0" x2="30.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="30.0" y1="-30.0" x2="0.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="0.0" y1="-30.0" x2="0.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="0.0,0.0 -13.6,8.5 -8.5,13.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="31.0" y1="2.6" x2="32.6" y2="1.0" stroke="currentColor" stroke-width="1.3"/><line x1="32.5" y1="4.9" x2="34.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="34.0" y1="7.1" x2="37.1" y2="4.0" stroke="currentColor" stroke-width="1.3"/><line x1="35.4" y1="9.3" x2="39.3" y2="5.4" stroke="currentColor" stroke-width="1.3"/><line x1="36.9" y1="11.5" x2="41.5" y2="6.9" stroke="currentColor" stroke-width="1.3"/><line x1="38.3" y1="13.7" x2="43.7" y2="8.3" stroke="currentColor" stroke-width="1.3"/><text x="-19.5" y="24.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="49.5" y="24.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-34.0 -36.0 98 72\" width=\"98\" height=\"72\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"탄소 4개로 된 고리. 이웃한 두 고리 탄소에 염소 원자가 하나씩 있어요. 한 염소는 실선 쐐기 결합에, 다른 염소는 점선 쐐기 결합에 있어요.\"><line x1=\"0.0\" y1=\"0.0\" x2=\"30.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"0.0\" x2=\"30.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"30.0\" y1=\"-30.0\" x2=\"0.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"0.0\" y1=\"-30.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"0.0,0.0 -13.6,8.5 -8.5,13.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"31.0\" y1=\"2.6\" x2=\"32.6\" y2=\"1.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"32.5\" y1=\"4.9\" x2=\"34.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"7.1\" x2=\"37.1\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"35.4\" y1=\"9.3\" x2=\"39.3\" y2=\"5.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"36.9\" y1=\"11.5\" x2=\"41.5\" y2=\"6.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"38.3\" y1=\"13.7\" x2=\"43.7\" y2=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"-19.5\" y=\"24.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"49.5\" y=\"24.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
      ],
      hints: [
        // EN: Check the ring size first. Cyclopropane has three carbon atoms.
        "먼저 고리의 크기를 확인하세요. cyclopropane은 탄소 원자가 3개예요.",
        // EN: <i>Trans</i> means the two chlorine atoms are on opposite faces of the ring: one in front, one behind.
        "<i>Trans</i>는 두 염소 원자가 고리의 반대 면에 있다는 뜻이에요. 하나는 앞에, 하나는 뒤에 있어요.",
      ],
      // EN: <p>1,2-dichlorocyclopropane has a three-membered ring with one Cl on each of two ring carbons. In the <i>trans</i> isomer one Cl is in front of the ring (solid wedge) and the other is behind it (hashed wedge).</p><p>The ring stops rotation about its carbon–carbon bonds, so the <i>cis</i> and <i>trans</i> forms are different molecules.</p>
      solution: "<p>1,2-dichlorocyclopropane은 탄소 3개로 된 고리에서 두 고리 탄소에 Cl이 하나씩 있어요. <i>trans</i> 이성질체에서는 Cl 하나가 고리 앞(실선 쐐기)에, 다른 하나가 고리 뒤(점선 쐐기)에 있어요.</p><p>고리는 탄소–탄소 결합을 축으로 한 회전을 막으므로 <i>cis</i>형과 <i>trans</i>형은 서로 다른 분자예요.</p>",
      misconception: {
        // EN (option A): Both chlorine atoms are on solid wedges, so both are in front of the ring, on the same face. This is the <i>cis</i> isomer.
        "0": "두 염소 원자가 모두 실선 쐐기에 있으므로 둘 다 고리 앞, 즉 같은 면에 있어요. 이것은 <i>cis</i> 이성질체예요.",
        // EN (option B): Here both chlorine atoms are on the same carbon. This is 1,1-dichlorocyclopropane, a structural isomer that has no <i>cis–trans</i> isomers.
        "1": "여기서는 두 염소 원자가 같은 탄소에 있어요. 이것은 1,1-dichlorocyclopropane이에요. <i>cis–trans</i> 이성질체가 없는 구조 이성질체예요.",
        // EN (option D): The chlorine atoms are <i>trans</i>, but count the ring carbons. This ring has four corners, so it is a cyclobutane.
        "3": "염소 원자는 <i>trans</i>이지만 고리 탄소의 수를 세어 보세요. 이 고리는 꼭짓점이 4개이므로 cyclobutane이에요.",
      },
    },

    // ── s3-2h-q006 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q006": {
      // EN: <p>What is a chiral carbon atom?</p>
      stem: "<p>카이랄 탄소 원자란 무엇인가요?</p>",
      options: [
        // EN: A carbon atom bonded to four different atoms or groups
        "서로 다른 네 원자 또는 원자단과 결합한 탄소 원자",
        // EN: A carbon atom that is part of a C=C double bond
        "C=C 이중 결합의 일부인 탄소 원자",
        // EN: A carbon atom bonded to two different atoms or groups
        "서로 다른 두 원자 또는 원자단과 결합한 탄소 원자",
        // EN: A carbon atom that rotates plane-polarised light
        "평면 편광을 회전시키는 탄소 원자",
      ],
      hints: [
        // EN: Think about how many bonds the carbon has and what is at the end of each one.
        "탄소가 결합을 몇 개 가지는지, 각 결합 끝에 무엇이 있는지 생각해 보세요.",
      ],
      // EN: <p>A chiral carbon is bonded to <strong>four different atoms or groups</strong>, arranged tetrahedrally. A molecule with one chiral carbon cannot be superimposed on its mirror image, so it exists as two enantiomers.</p>
      solution: "<p>카이랄 탄소는 <strong>서로 다른 네 원자 또는 원자단</strong>과 결합해 있고, 이들은 정사면체 모양으로 배열되어 있어요. 카이랄 탄소가 하나 있는 분자는 거울상과 겹쳐지지 않으므로 두 거울상 이성질체로 존재해요.</p>",
      misconception: {
        // EN (option B): A carbon in a C=C bond has only three atoms attached. It can be part of <i>cis–trans</i> isomerism, but it cannot be a chiral carbon.
        "1": "C=C 결합의 탄소에는 원자가 3개만 붙어 있어요. <i>cis–trans</i> 이성질 현상에는 관여할 수 있지만 카이랄 탄소는 될 수 없어요.",
        // EN (option C): Two different groups are not enough. If any two of the four groups are the same, the molecule and its mirror image can be superimposed.
        "2": "서로 다른 원자단 두 개로는 부족해요. 네 원자단 중 어느 두 개라도 같으면 분자와 그 거울상을 겹칠 수 있어요.",
        // EN (option D): This describes an effect, not the structure. Exam markschemes reject answers that only mention optical properties. State what is bonded to the carbon.
        "3": "이것은 구조가 아니라 효과를 말하고 있어요. 시험 채점 기준은 광학적 성질만 언급한 답을 인정하지 않아요. 탄소에 무엇이 결합해 있는지 쓰세요.",
      },
    },

    // ── s3-2h-q007 · mcq · foundation · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q007": {
      // EN: <p>Which molecule contains a chiral carbon atom?</p>
      stem: "<p>카이랄 탄소 원자를 가진 분자는 무엇인가요?</p>",
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
        "<span class=\"chem\">CH<sub>3</sub><span></span></span> 또는 <span class=\"chem\">CH<sub>2</sub><span></span></span> 원자단의 탄소는 절대 카이랄일 수 없어요. H가 하나이거나 없는 탄소만 살펴보세요.",
        // EN: Write down the four groups on that carbon. Are all four different?
        "그 탄소에 붙은 네 원자단을 적어 보세요. 네 개가 모두 다른가요?",
      ],
      // EN: <p>In butan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>, carbon 2 is bonded to four different groups: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>. It is a chiral carbon.</p>
      solution: "<p>butan-2-ol, <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub><span></span></span>에서 2번 탄소는 서로 다른 네 원자단 H, OH, <span class=\"chem\">CH<sub>3</sub><span></span></span>, <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>와 결합해 있어요. 이 탄소가 카이랄 탄소예요.</p>",
      misconception: {
        // EN (option A): In propan-2-ol the middle carbon holds H, OH and two <span class="chem">CH<sub>3</sub><span></span></span> groups. Two of its four groups are the same.
        "0": "propan-2-ol에서 가운데 탄소에는 H, OH, 그리고 <span class=\"chem\">CH<sub>3</sub><span></span></span> 원자단 두 개가 붙어 있어요. 네 원자단 중 두 개가 같아요.",
        // EN (option B): In butan-1-ol every carbon atom holds at least two hydrogen atoms, so no carbon has four different groups.
        "1": "butan-1-ol에서는 모든 탄소 원자에 수소 원자가 두 개 이상 붙어 있으므로, 서로 다른 네 원자단을 가진 탄소가 없어요.",
        // EN (option D): In 2-methylpropan-2-ol the central carbon holds OH and three identical <span class="chem">CH<sub>3</sub><span></span></span> groups.
        "3": "2-methylpropan-2-ol에서 가운데 탄소에는 OH와 똑같은 <span class=\"chem\">CH<sub>3</sub><span></span></span> 원자단 세 개가 붙어 있어요.",
      },
    },

    // ── s3-2h-q008 · numeric · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q008": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p><svg class="q-fig" viewBox="-6.0 -45.0 156 106" width="156" height="106" style="max-width:100%;height:auto" role="img" aria-label="Skeletal formula: a zig-zag chain of five carbon atoms. Carbons 2, 3 and 4 each carry an OH group. Carbon 5 is joined to an OH group at the end of the chain. Carbon 1 is a methyl group."><line x1="0.0" y1="15.0" x2="26.1" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="51.9" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="78.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="103.8" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="103.8" y1="15.0" x2="122.1" y2="4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="26.1" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="51.9" y2="36.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="78.0" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="123.9" y="5.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="20.1" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="45.9" y="50.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="72.0" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text></svg></p><p>How many chiral carbon atoms does one molecule contain?</p>
      stem: "<p>어떤 화합물의 골격 구조식이 나와 있어요.</p><p><svg class=\"q-fig\" viewBox=\"-6.0 -45.0 156 106\" width=\"156\" height=\"106\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"골격 구조식: 탄소 원자 5개로 된 지그재그 사슬. 2번, 3번, 4번 탄소에 각각 OH기가 있어요. 5번 탄소는 사슬 끝에서 OH기와 이어져 있어요. 1번 탄소는 메틸기예요.\"><line x1=\"0.0\" y1=\"15.0\" x2=\"26.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"51.9\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"78.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"103.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"103.8\" y1=\"15.0\" x2=\"122.1\" y2=\"4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"26.1\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"51.9\" y2=\"36.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"78.0\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"123.9\" y=\"5.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"20.1\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"45.9\" y=\"50.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"72.0\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text></svg></p><p>분자 하나에 카이랄 탄소 원자는 몇 개 있나요?</p>",
      hints: [
        // EN: Number the five carbon atoms. Each corner and each line end is a carbon. Add the hydrogen atoms in your head.
        "탄소 원자 5개에 번호를 붙이세요. 꺾인 곳과 선의 끝은 모두 탄소예요. 수소 원자는 머릿속으로 채워 넣으세요.",
        // EN: The two end carbons are <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>OH<span></span></span>. Can a carbon with two or three H atoms be chiral?
        "양 끝 탄소는 <span class=\"chem\">CH<sub>3</sub><span></span></span>와 <span class=\"chem\">CH<sub>2</sub>OH<span></span></span>예요. H 원자가 2개나 3개인 탄소가 카이랄일 수 있을까요?",
        // EN: For each of the three middle carbons, list the four groups: H, OH, the chain to the left, the chain to the right.
        "가운데 탄소 3개 각각에 대해 네 원자단을 나열하세요. H, OH, 왼쪽 사슬, 오른쪽 사슬이에요.",
      ],
      // EN: <p>The molecule is <span class="chem">CH<sub>3</sub>CH(OH)CH(OH)CH(OH)CH<sub>2</sub>OH<span></span></span>.</p><ul><li>The <span class="chem">CH<sub>3</sub><span></span></span> carbon has three H atoms and the <span class="chem">CH<sub>2</sub>OH<span></span></span> carbon has two H atoms: not chiral.</li><li>Each of the three CH(OH) carbons holds H, OH and two <strong>different</strong> chains. For the middle one, the chain on one side is <span class="chem">CH(OH)CH<sub>3</sub><span></span></span> and on the other side <span class="chem">CH(OH)CH<sub>2</sub>OH<span></span></span>.</li></ul><p>So there are <strong>3</strong> chiral carbon atoms.</p>
      solution: "<p>이 분자는 <span class=\"chem\">CH<sub>3</sub>CH(OH)CH(OH)CH(OH)CH<sub>2</sub>OH<span></span></span>예요.</p><ul><li><span class=\"chem\">CH<sub>3</sub><span></span></span> 탄소에는 H 원자가 3개, <span class=\"chem\">CH<sub>2</sub>OH<span></span></span> 탄소에는 H 원자가 2개 있어요. 카이랄이 아니에요.</li><li>CH(OH) 탄소 3개는 각각 H, OH, 그리고 <strong>서로 다른</strong> 두 사슬을 가져요. 가운데 탄소의 경우, 한쪽 사슬은 <span class=\"chem\">CH(OH)CH<sub>3</sub><span></span></span>이고 다른 쪽은 <span class=\"chem\">CH(OH)CH<sub>2</sub>OH<span></span></span>예요.</li></ul><p>따라서 카이랄 탄소 원자는 <strong>3</strong>개예요.</p>",
    },

    // ── s3-2h-q009 · numeric · challenge · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q009": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p><svg class="q-fig" viewBox="-6.0 -45.0 116 106" width="116" height="106" style="max-width:100%;height:auto" role="img" aria-label="Skeletal formula: a zig-zag chain of five carbon atoms. Carbon 2 and carbon 3 each carry an OH group. Carbon 4 carries a methyl branch, drawn as a plain line."><line x1="0.0" y1="15.0" x2="26.1" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="51.9" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="78.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="103.8" y2="15.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="26.1" y1="0.0" x2="26.1" y2="-21.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="51.9" y1="15.0" x2="51.9" y2="36.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="78.0" y1="0.0" x2="78.0" y2="-30.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="20.1" y="-25.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="45.9" y="50.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text></svg></p><p>How many chiral carbon atoms does one molecule contain?</p>
      stem: "<p>어떤 화합물의 골격 구조식이 나와 있어요.</p><p><svg class=\"q-fig\" viewBox=\"-6.0 -45.0 116 106\" width=\"116\" height=\"106\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"골격 구조식: 탄소 원자 5개로 된 지그재그 사슬. 2번 탄소와 3번 탄소에 각각 OH기가 있어요. 4번 탄소에는 메틸 곁가지가 그냥 선으로 그려져 있어요.\"><line x1=\"0.0\" y1=\"15.0\" x2=\"26.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"51.9\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"78.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"103.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"26.1\" y1=\"0.0\" x2=\"26.1\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"51.9\" y1=\"15.0\" x2=\"51.9\" y2=\"36.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"78.0\" y1=\"0.0\" x2=\"78.0\" y2=\"-30.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"20.1\" y=\"-25.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"45.9\" y=\"50.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text></svg></p><p>분자 하나에 카이랄 탄소 원자는 몇 개 있나요?</p>",
      hints: [
        // EN: Each corner and each line end is a carbon atom. Add the hydrogen atoms in your head, then rule out every <span class="chem">CH<sub>3</sub><span></span></span> carbon.
        "꺾인 곳과 선의 끝은 모두 탄소 원자예요. 수소 원자를 머릿속으로 채워 넣은 다음, <span class=\"chem\">CH<sub>3</sub><span></span></span> 탄소를 모두 제외하세요.",
        // EN: Three carbons have one H atom each: carbon 2, carbon 3 and carbon 4. List the four groups on each.
        "H 원자를 하나씩 가진 탄소는 2번, 3번, 4번 탄소 3개예요. 각 탄소의 네 원자단을 나열하세요.",
        // EN: Look closely at carbon 4. What are the two groups at the right-hand end?
        "4번 탄소를 자세히 보세요. 오른쪽 끝에 있는 두 원자단은 무엇인가요?",
      ],
      // EN: <p>The molecule is <span class="chem">CH<sub>3</sub>CH(OH)CH(OH)CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. Only carbons with one H atom need checking.</p><ul><li>Carbon 2: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and the rest of the chain. Four different groups. Chiral.</li><li>Carbon 3: H, OH, <span class="chem">CH(OH)CH<sub>3</sub><span></span></span> and <span class="chem">CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. Four different groups. Chiral.</li><li>Carbon 4: H, the rest of the chain and <strong>two identical</strong> <span class="chem">CH<sub>3</sub><span></span></span> groups. Not chiral.</li></ul><p>There are <strong>2</strong> chiral carbon atoms. A carbon with one H atom is not always chiral: you must compare all four groups.</p>
      solution: "<p>이 분자는 <span class=\"chem\">CH<sub>3</sub>CH(OH)CH(OH)CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>예요. H 원자가 하나인 탄소만 확인하면 돼요.</p><ul><li>2번 탄소: H, OH, <span class=\"chem\">CH<sub>3</sub><span></span></span>, 나머지 사슬. 서로 다른 네 원자단. 카이랄.</li><li>3번 탄소: H, OH, <span class=\"chem\">CH(OH)CH<sub>3</sub><span></span></span>, <span class=\"chem\">CH(CH<sub>3</sub>)<sub>2</sub><span></span></span>. 서로 다른 네 원자단. 카이랄.</li><li>4번 탄소: H, 나머지 사슬, 그리고 <strong>똑같은 두</strong> <span class=\"chem\">CH<sub>3</sub><span></span></span> 원자단. 카이랄이 아님.</li></ul><p>카이랄 탄소 원자는 <strong>2</strong>개예요. H 원자가 하나인 탄소가 늘 카이랄인 것은 아니에요. 네 원자단을 모두 비교해야 해요.</p>",
    },

    // ── s3-2h-q010 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q010": {
      // EN: <p>Which molecule has <strong>no</strong> chiral carbon atom?</p>
      stem: "<p>카이랄 탄소 원자가 <strong>없는</strong> 분자는 무엇인가요?</p>",
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
        "각 분자에서 H가 하나뿐인 탄소를 찾아 그 네 원자단을 나열하세요.",
        // EN: Compare the two carbon chains on each side of that carbon. Are they the same length?
        "그 탄소 양쪽의 탄소 사슬을 비교해 보세요. 길이가 같나요?",
      ],
      // EN: <p>In 3-chloropentane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>, carbon 3 holds H, Cl and <strong>two identical ethyl groups</strong>. It does not have four different groups, so the molecule has no chiral carbon. Each of the other three molecules has one carbon with four different groups.</p>
      solution: "<p>3-chloropentane, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHClCH<sub>2</sub>CH<sub>3</sub><span></span></span>에서 3번 탄소에는 H, Cl, 그리고 <strong>똑같은 에틸기 두 개</strong>가 붙어 있어요. 서로 다른 네 원자단이 아니므로 이 분자에는 카이랄 탄소가 없어요. 나머지 세 분자는 각각 서로 다른 네 원자단을 가진 탄소가 하나씩 있어요.</p>",
      misconception: {
        // EN (option A): In 2-chlorobutane carbon 2 holds H, Cl, <span class="chem">CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>. These are four different groups, so it is chiral.
        "0": "2-chlorobutane에서 2번 탄소에는 H, Cl, <span class=\"chem\">CH<sub>3</sub><span></span></span>, <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>가 붙어 있어요. 서로 다른 네 원자단이므로 카이랄이에요.",
        // EN (option B): In 2-hydroxypropanoic acid carbon 2 holds H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and COOH. These are four different groups, so it is chiral.
        "1": "2-hydroxypropanoic acid에서 2번 탄소에는 H, OH, <span class=\"chem\">CH<sub>3</sub><span></span></span>, COOH가 붙어 있어요. 서로 다른 네 원자단이므로 카이랄이에요.",
        // EN (option D): In 3-methylhexane carbon 3 holds H, <span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> and <span class="chem">CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>. An ethyl group and a propyl group are different, so it is chiral.
        "3": "3-methylhexane에서 3번 탄소에는 H, <span class=\"chem\">CH<sub>3</sub><span></span></span>, <span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>, <span class=\"chem\">CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>가 붙어 있어요. 에틸기와 프로필기는 서로 다르므로 카이랄이에요.",
      },
    },

    // ── s3-2h-q011 · multi · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q011": {
      // EN: <p>Butan-2-ol exists as a pair of enantiomers. Which statements about the two enantiomers are correct? Select <strong>all</strong> that apply.</p>
      stem: "<p>Butan-2-ol은 한 쌍의 거울상 이성질체로 존재해요. 두 거울상 이성질체에 대한 설명으로 옳은 것은 무엇인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: They have the same boiling point.
        "끓는점이 같아요.",
        // EN: Under the same conditions, they rotate plane-polarised light by the same angle in opposite directions.
        "같은 조건에서 평면 편광을 같은 각도만큼 서로 반대 방향으로 회전시켜요.",
        // EN: Their atoms are bonded together in a different order.
        "원자들이 서로 다른 순서로 결합해 있어요.",
        // EN: They can behave differently with another chiral molecule, such as an enzyme.
        "효소 같은 다른 카이랄 분자와는 다르게 행동할 수 있어요.",
        // EN: They are mirror images that can be superimposed on each other.
        "서로 겹칠 수 있는 거울상이에요.",
      ],
      hints: [
        // EN: Enantiomers are stereoisomers. What stays the same in all stereoisomers?
        "거울상 이성질체는 입체 이성질체예요. 모든 입체 이성질체에서 무엇이 같을까요?",
        // EN: Physical properties such as boiling point are the same. Two things are different: the effect on plane-polarised light, and behaviour in a chiral environment.
        "끓는점 같은 물리적 성질은 같아요. 다른 것은 두 가지예요. 평면 편광에 대한 효과, 그리고 카이랄 환경에서의 행동이에요.",
      ],
      // EN: <p>Enantiomers are non-superimposable mirror images with the same connectivity.</p><ul><li>They have identical physical properties such as boiling point, melting point and density.</li><li>They are optically active: each rotates the plane of plane-polarised light by the same angle, but in opposite directions.</li><li>They behave in the same way with non-chiral reagents, but can behave differently in a chiral environment, such as the active site of an enzyme.</li></ul>
      solution: "<p>거울상 이성질체는 원자의 연결 순서가 같고 서로 겹쳐지지 않는 거울상이에요.</p><ul><li>끓는점, 녹는점, 밀도 같은 물리적 성질이 똑같아요.</li><li>광학 활성이 있어요. 각각 평면 편광의 편광면을 같은 각도만큼, 그러나 서로 반대 방향으로 회전시켜요.</li><li>카이랄이 아닌 시약과는 똑같이 반응하지만, 효소의 활성 자리 같은 카이랄 환경에서는 다르게 행동할 수 있어요.</li></ul>",
      misconception: {
        // EN (option C): A different bonding order (connectivity) would make them structural isomers. Enantiomers have the same connectivity and differ only in their arrangement in space.
        "2": "결합 순서(연결 순서)가 다르면 구조 이성질체가 돼요. 거울상 이성질체는 연결 순서가 같고 공간 배열만 달라요.",
        // EN (option E): Mirror images that can be superimposed are the same molecule. Enantiomers are <strong>non-superimposable</strong> mirror images.
        "4": "겹칠 수 있는 거울상은 같은 분자예요. 거울상 이성질체는 <strong>겹쳐지지 않는</strong> 거울상이에요.",
      },
    },

    // ── s3-2h-q012 · short · exam · AHL · Structure 3.2.7 · 2 marks
    "s3-2h-q012": {
      // EN: <p>State what is meant by a <strong>racemic mixture</strong>, and explain why a racemic mixture is not optically active.</p>
      stem: "<p><strong>라셈 혼합물</strong>이 무엇을 뜻하는지 쓰고 (state), 라셈 혼합물이 광학 활성을 나타내지 않는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: How much of each enantiomer does the mixture contain?
        "혼합물에 각 거울상 이성질체가 얼마나 들어 있나요?",
        // EN: What does each enantiomer do to plane-polarised light, and what is the total effect?
        "각 거울상 이성질체는 평면 편광에 어떤 작용을 하나요? 전체 효과는 어떤가요?",
      ],
      // EN: <p>Use the words "equal amounts" and "enantiomers" for the first mark. For the second mark say that the rotations are equal and opposite, so they cancel. "It contains both forms" is too vague to score.</p>
      solution: "<p>첫 번째 점수를 받으려면 “같은 양”과 “거울상 이성질체”라는 말을 쓰세요. 두 번째 점수를 받으려면 회전이 크기는 같고 방향은 반대라서 상쇄된다고 쓰세요. “두 형태를 모두 포함한다”는 너무 막연해서 점수를 받지 못해요.</p>",
      // EN: <p>A racemic mixture contains equal amounts of the two enantiomers of a chiral compound. One enantiomer rotates the plane of plane-polarised light clockwise and the other rotates it anticlockwise by the same angle, so the two rotations cancel and there is no overall rotation.</p>
      answer: "<p>라셈 혼합물은 카이랄 화합물의 두 거울상 이성질체를 같은 양씩 포함해요. 한 거울상 이성질체는 평면 편광의 편광면을 시계 방향으로, 다른 하나는 같은 각도만큼 시계 반대 방향으로 회전시키므로, 두 회전이 상쇄되어 전체적으로는 회전이 없어요.</p>",
      markscheme: [
        // EN: A mixture containing equal amounts (equimolar / 50:50) of the two enantiomers.
        "두 거울상 이성질체를 같은 양(같은 몰수 / 50:50)씩 포함한 혼합물.",
        // EN: The two enantiomers rotate (the plane of) plane-polarised light by equal amounts in opposite directions, so the rotations cancel / no net rotation.
        "두 거울상 이성질체는 평면 편광(의 편광면)을 같은 크기만큼 반대 방향으로 회전시키므로 회전이 상쇄됨 / 알짜 회전이 없음.",
      ],
    },

    // ── s3-2h-q013 · mcq · exam · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q013": {
      // EN: <p>A polarimeter measures the angle through which a sample rotates the plane of plane-polarised light.</p><p>A solution of one enantiomer of a compound rotates the light by 13° clockwise. Two more solutions are tested in the same polarimeter tube, with the same total concentration.</p><p>What rotation is expected for each one?</p>
      stem: "<p>편광계는 시료가 평면 편광의 편광면을 회전시키는 각도를 측정해요.</p><p>어떤 화합물의 한 거울상 이성질체 용액은 빛을 시계 방향으로 13° 회전시켜요. 전체 농도가 같은 용액 두 개를 같은 편광계 관에 넣어 더 측정해요.</p><p>각 용액에서 예상되는 회전은 무엇인가요?</p>",
      options: [
        // EN: Other enantiomer: 13° anticlockwise. Racemic mixture: 0°.
        "다른 거울상 이성질체: 시계 반대 방향 13°. 라셈 혼합물: 0°.",
        // EN: Other enantiomer: 13° clockwise. Racemic mixture: 0°.
        "다른 거울상 이성질체: 시계 방향 13°. 라셈 혼합물: 0°.",
        // EN: Other enantiomer: 13° anticlockwise. Racemic mixture: 26° clockwise.
        "다른 거울상 이성질체: 시계 반대 방향 13°. 라셈 혼합물: 시계 방향 26°.",
        // EN: Other enantiomer: 0°. Racemic mixture: 13° anticlockwise.
        "다른 거울상 이성질체: 0°. 라셈 혼합물: 시계 반대 방향 13°.",
      ],
      hints: [
        // EN: Two enantiomers rotate plane-polarised light by the same angle. What about the direction?
        "두 거울상 이성질체는 평면 편광을 같은 각도만큼 회전시켜요. 방향은 어떨까요?",
        // EN: A racemic mixture has equal amounts of both enantiomers. Add a clockwise and an equal anticlockwise rotation.
        "라셈 혼합물에는 두 거울상 이성질체가 같은 양씩 들어 있어요. 시계 방향 회전과 같은 크기의 시계 반대 방향 회전을 더해 보세요.",
      ],
      // EN: <p>The other enantiomer rotates the light by the same angle in the opposite direction: 13° anticlockwise.</p><p>A racemic mixture contains equal amounts of both enantiomers. The clockwise and anticlockwise rotations cancel, so the reading is 0°. The mixture is optically inactive.</p>
      solution: "<p>다른 거울상 이성질체는 빛을 같은 각도만큼 반대 방향으로 회전시켜요. 즉 시계 반대 방향 13°예요.</p><p>라셈 혼합물에는 두 거울상 이성질체가 같은 양씩 들어 있어요. 시계 방향 회전과 시계 반대 방향 회전이 상쇄되므로 측정값은 0°예요. 이 혼합물은 광학 활성이 없어요.</p>",
      misconception: {
        // EN (option B): If both enantiomers rotated the light in the same direction, a polarimeter could not tell them apart. They rotate it in opposite directions.
        "1": "두 거울상 이성질체가 빛을 같은 방향으로 회전시킨다면 편광계로 둘을 구별할 수 없을 거예요. 둘은 빛을 반대 방향으로 회전시켜요.",
        // EN (option C): The rotations of the two enantiomers do not add up in a racemic mixture. They are opposite, so they cancel.
        "2": "라셈 혼합물에서 두 거울상 이성질체의 회전은 더해지지 않아요. 방향이 반대이므로 상쇄돼요.",
        // EN (option D): Both enantiomers are optically active. It is the 50:50 mixture that shows no rotation.
        "3": "두 거울상 이성질체는 모두 광학 활성이 있어요. 회전을 나타내지 않는 것은 50:50 혼합물이에요.",
      },
    },

    // ── s3-2h-q014 · mcq · challenge · AHL · Structure 3.2.7 · 1 mark
    "s3-2h-q014": {
      // EN: <p>X is one enantiomer of bromochlorofluoromethane, CHBrClF. Plain lines are bonds in the plane of the screen. A solid wedge comes towards you. A hashed wedge goes away from you.</p><p><strong>X</strong></p><p><svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Cl on a solid wedge to the lower right, Br on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text></svg></p><p>Which drawing shows the <strong>other</strong> enantiomer, the mirror image of X?</p>
      stem: "<p>X는 bromochlorofluoromethane, CHBrClF의 한 거울상 이성질체예요. 그냥 선은 화면 평면에 있는 결합이에요. 실선 쐐기는 내 쪽으로 나와요. 점선 쐐기는 나에게서 멀어져요.</p><p><strong>X</strong></p><p><svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: F는 평면에서 위쪽, H는 평면에서 왼쪽 아래, Cl은 오른쪽 아래의 실선 쐐기, Br은 오른쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text></svg></p><p>X의 거울상인 <strong>다른</strong> 거울상 이성질체를 나타낸 그림은 무엇인가요?</p>",
      options: [
        // EN: <svg class="q-fig" viewBox="-44.6 -46.5 92 94" width="92" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: H up in the plane, Cl to the lower left in the plane, F on a solid wedge to the lower right, Br on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-21.6" y="20.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text><text x="12.6" y="35.6" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-44.6 -46.5 92 94\" width=\"92\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: H는 평면에서 위쪽, Cl은 평면에서 왼쪽 아래, F는 오른쪽 아래의 실선 쐐기, Br은 오른쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-21.6\" y=\"20.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text><text x=\"12.6\" y=\"35.6\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-47.0 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower right in the plane, Br on a solid wedge to the lower left, Cl on a hashed wedge to the left"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7.9" y1="4.3" x2="19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="-3.4,8.3 -12.5,20.9 -5.8,23.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-11.1" y1="2.1" x2="-10.4" y2="4.3" stroke="currentColor" stroke-width="1.3"/><line x1="-13.4" y1="2.3" x2="-12.4" y2="5.5" stroke="currentColor" stroke-width="1.3"/><line x1="-15.6" y1="2.4" x2="-14.4" y2="6.6" stroke="currentColor" stroke-width="1.3"/><line x1="-17.9" y1="2.5" x2="-16.3" y2="7.8" stroke="currentColor" stroke-width="1.3"/><line x1="-20.2" y1="2.6" x2="-18.3" y2="8.9" stroke="currentColor" stroke-width="1.3"/><line x1="-22.5" y1="2.8" x2="-20.3" y2="10.1" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-6.6" y="35.6" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="-24.0" y="14.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-47.0 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: F는 평면에서 위쪽, H는 평면에서 오른쪽 아래, Br은 왼쪽 아래의 실선 쐐기, Cl은 왼쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"7.9\" y1=\"4.3\" x2=\"19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"-3.4,8.3 -12.5,20.9 -5.8,23.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-11.1\" y1=\"2.1\" x2=\"-10.4\" y2=\"4.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-13.4\" y1=\"2.3\" x2=\"-12.4\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-15.6\" y1=\"2.4\" x2=\"-14.4\" y2=\"6.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-17.9\" y1=\"2.5\" x2=\"-16.3\" y2=\"7.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-20.2\" y1=\"2.6\" x2=\"-18.3\" y2=\"8.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-22.5\" y1=\"2.8\" x2=\"-20.3\" y2=\"10.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-6.6\" y=\"35.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"-24.0\" y=\"14.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: F up in the plane, H to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: F는 평면에서 위쪽, H는 평면에서 왼쪽 아래, Br은 오른쪽 아래의 실선 쐐기, Cl은 오른쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
        // EN: <svg class="q-fig" viewBox="-38.6 -46.5 86 94" width="86" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: H up in the plane, F to the lower left in the plane, Br on a solid wedge to the lower right, Cl on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text><text x="-27.6" y="20.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">F</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Br</tspan></text><text x="24.0" y="14.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">Cl</tspan></text></svg>
        "<svg class=\"q-fig\" viewBox=\"-38.6 -46.5 86 94\" width=\"86\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: H는 평면에서 위쪽, F는 평면에서 왼쪽 아래, Br은 오른쪽 아래의 실선 쐐기, Cl은 오른쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-22.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text><text x=\"-27.6\" y=\"20.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">F</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Br</tspan></text><text x=\"24.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">Cl</tspan></text></svg>",
      ],
      hints: [
        // EN: A useful rule: swapping any <strong>two</strong> groups on a chiral carbon gives the other enantiomer.
        "유용한 규칙: 카이랄 탄소에 붙은 원자단 중 아무 <strong>두 개</strong>를 서로 바꾸면 다른 거울상 이성질체가 돼요.",
        // EN: Swapping twice brings you back to the same molecule. Rotating the whole molecule never changes it.
        "두 번 바꾸면 원래 분자로 돌아와요. 분자 전체를 회전시키면 분자는 절대 바뀌지 않아요.",
        // EN: For each drawing, count how many swaps turn X into it.
        "각 그림마다 X를 그 그림으로 바꾸려면 몇 번 바꿔야 하는지 세어 보세요.",
      ],
      // EN: <p>Compare each drawing with X (F up, H lower left, Cl on the wedge, Br on the hashed bond).</p><ul><li>The correct drawing keeps F and H in place and swaps Cl and Br. One swap of two groups gives the mirror image, so this is the other enantiomer.</li><li>Moving three groups round one place (F → H → Cl → F) is a rotation about the C–Br bond: same molecule.</li><li>The drawing with the wedges on the left is X turned half a turn about the C–F bond: same molecule.</li><li>Two swaps (F with H, and Cl with Br) bring back the same molecule.</li></ul><p>Building a model, real or on screen, is the surest way to check: the two enantiomers cannot be superimposed.</p>
      solution: "<p>각 그림을 X(F는 위, H는 왼쪽 아래, Cl은 실선 쐐기, Br은 점선 결합)와 비교해 보세요.</p><ul><li>정답 그림은 F와 H는 그대로 두고 Cl과 Br을 바꿨어요. 두 원자단을 한 번 바꾸면 거울상이 되므로 이것이 다른 거울상 이성질체예요.</li><li>세 원자단을 한 자리씩 돌리는 것(F → H → Cl → F)은 C–Br 결합을 축으로 한 회전이에요. 같은 분자예요.</li><li>쐐기가 왼쪽에 있는 그림은 X를 C–F 결합을 축으로 반 바퀴 돌린 것이에요. 같은 분자예요.</li><li>두 번 바꾸면(F와 H, Cl과 Br) 같은 분자로 돌아와요.</li></ul><p>실제 모형이든 화면 속 모형이든 모형을 만들어 보는 것이 가장 확실한 확인 방법이에요. 두 거울상 이성질체는 겹쳐지지 않아요.</p>",
      misconception: {
        // EN (option A): Br has not moved, and F, H and Cl have each moved one place round. This is X rotated about the C–Br bond, so it is the same molecule.
        "0": "Br은 움직이지 않았고 F, H, Cl은 각각 한 자리씩 돌았어요. 이것은 X를 C–Br 결합을 축으로 회전시킨 것이므로 같은 분자예요.",
        // EN (option B): This is X turned half a turn about the vertical C–F bond. The H swings to the right, Cl goes to the back and Br comes to the front. It is still X.
        "1": "이것은 X를 세로 C–F 결합을 축으로 반 바퀴 돌린 것이에요. H는 오른쪽으로 가고, Cl은 뒤로 가고, Br은 앞으로 나와요. 여전히 X예요.",
        // EN (option D): Compared with X, two pairs of groups have been swapped (F with H, and Cl with Br). One swap gives the mirror image. A second swap brings back the original.
        "3": "X와 비교하면 원자단 두 쌍이 바뀌었어요(F와 H, Cl과 Br). 한 번 바꾸면 거울상이 되고, 두 번째로 바꾸면 원래 분자로 돌아와요.",
      },
    },

    // ── s3-2h-q015 · short · challenge · AHL · Structure 3.2.7 · 3 marks
    "s3-2h-q015": {
      // EN: <p>2-hydroxypropanoic acid (lactic acid), <span class="chem">CH<sub>3</sub>CH(OH)COOH<span></span></span>, exists as two enantiomers.</p><p>On paper, identify the chiral carbon atom and draw stereochemical formulas of the two enantiomers. Then compare your drawing with the model answer.</p>
      stem: "<p>2-hydroxypropanoic acid(lactic acid), <span class=\"chem\">CH<sub>3</sub>CH(OH)COOH<span></span></span>는 두 거울상 이성질체로 존재해요.</p><p>종이에 카이랄 탄소 원자를 찾고 (identify), 두 거울상 이성질체의 입체 구조식을 그리시오 (draw). 그런 다음 내 그림을 모범 답안과 비교해 보세요.</p>",
      hints: [
        // EN: Find the carbon with four different groups.
        "서로 다른 네 원자단을 가진 탄소를 찾으세요.",
        // EN: Draw that carbon in the centre. Use two plain lines, one solid wedge and one hashed wedge for its four bonds.
        "그 탄소를 가운데에 그리세요. 네 결합은 그냥 선 두 개, 실선 쐐기 하나, 점선 쐐기 하나로 나타내세요.",
        // EN: For the second enantiomer, draw the reflection of the first in an imaginary mirror placed beside it.
        "두 번째 거울상 이성질체는 첫 번째 그림 옆에 가상의 거울을 놓고 비친 모습을 그리세요.",
      ],
      // EN: <p>Markschemes give one mark for each correct enantiomer. Flat drawings with 90° angles do not score: the tetrahedral arrangement must be shown with tapered (wedge and hashed) bonds. If you redraw the same molecule in a different orientation instead of its mirror image, you score only one of the two drawing marks.</p>
      solution: "<p>채점 기준은 올바른 거울상 이성질체 하나마다 1점을 줘요. 90° 각도로 그린 평면 그림은 점수를 받지 못해요. 쐐기 모양 결합(실선 쐐기와 점선 쐐기)으로 정사면체 배열을 보여야 해요. 거울상 대신 같은 분자를 방향만 바꿔 다시 그리면 그림 점수 2점 중 1점만 받아요.</p>",
      // EN: <p>The chiral carbon is carbon 2. It is bonded to four different groups: H, OH, <span class="chem">CH<sub>3</sub><span></span></span> and COOH.</p><p>The two enantiomers, drawn as mirror images:</p><p><svg class="q-fig" viewBox="-53.6 -46.5 95 94" width="95" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: COOH up in the plane, CH3 to the lower left in the plane, OH on a solid wedge to the lower right, H on a hashed wedge to the right"><line x1="0.0" y1="-9.0" x2="0.0" y2="-19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="-7.9" y1="4.3" x2="-19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="3.4,8.3 5.8,23.6 12.5,20.9" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="10.4" y1="4.3" x2="11.1" y2="2.1" stroke="currentColor" stroke-width="1.3"/><line x1="12.4" y1="5.5" x2="13.4" y2="2.3" stroke="currentColor" stroke-width="1.3"/><line x1="14.4" y1="6.6" x2="15.6" y2="2.4" stroke="currentColor" stroke-width="1.3"/><line x1="16.3" y1="7.8" x2="17.9" y2="2.5" stroke="currentColor" stroke-width="1.3"/><line x1="18.3" y1="8.9" x2="20.2" y2="2.6" stroke="currentColor" stroke-width="1.3"/><line x1="20.3" y1="10.1" x2="22.5" y2="2.8" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">COOH</tspan></text><text x="-21.6" y="20.0" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">H</tspan><tspan dy="4" font-size="10">3</tspan><tspan dy="-4">C</tspan></text><text x="6.6" y="35.6" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">OH</tspan></text><text x="30.0" y="14.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg> &nbsp; <svg class="q-fig" viewBox="-41.0 -46.5 95 94" width="95" height="94" style="max-width:100%;height:auto" role="img" aria-label="Carbon atom with four bonds: COOH up in the plane, CH3 to the lower right in the plane, OH on a solid wedge to the lower left, H on a hashed wedge to the left"><line x1="0.0" y1="-9.0" x2="0.0" y2="-19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7.9" y1="4.3" x2="19.7" y2="10.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="-3.4,8.3 -12.5,20.9 -5.8,23.6" fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/><line x1="-11.1" y1="2.1" x2="-10.4" y2="4.3" stroke="currentColor" stroke-width="1.3"/><line x1="-13.4" y1="2.3" x2="-12.4" y2="5.5" stroke="currentColor" stroke-width="1.3"/><line x1="-15.6" y1="2.4" x2="-14.4" y2="6.6" stroke="currentColor" stroke-width="1.3"/><line x1="-17.9" y1="2.5" x2="-16.3" y2="7.8" stroke="currentColor" stroke-width="1.3"/><line x1="-20.2" y1="2.6" x2="-18.3" y2="8.9" stroke="currentColor" stroke-width="1.3"/><line x1="-22.5" y1="2.8" x2="-20.3" y2="10.1" stroke="currentColor" stroke-width="1.3"/><text x="0.0" y="5.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">C</tspan></text><text x="0.0" y="-26.5" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">COOH</tspan></text><text x="21.6" y="20.0" text-anchor="start" font-size="14" fill="currentColor"><tspan dy="0">CH</tspan><tspan dy="4" font-size="10">3</tspan></text><text x="-6.6" y="35.6" text-anchor="end" font-size="14" fill="currentColor"><tspan dy="0">HO</tspan></text><text x="-30.0" y="14.0" text-anchor="middle" font-size="14" fill="currentColor"><tspan dy="0">H</tspan></text></svg></p><p>Any orientation is accepted if the four groups are arranged tetrahedrally and the second drawing is the mirror image of the first.</p>
      answer: "<p>카이랄 탄소는 2번 탄소예요. 이 탄소는 서로 다른 네 원자단 H, OH, <span class=\"chem\">CH<sub>3</sub><span></span></span>, COOH와 결합해 있어요.</p><p>서로 거울상으로 그린 두 거울상 이성질체:</p><p><svg class=\"q-fig\" viewBox=\"-53.6 -46.5 95 94\" width=\"95\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: COOH는 평면에서 위쪽, CH3는 평면에서 왼쪽 아래, OH는 오른쪽 아래의 실선 쐐기, H는 오른쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"-7.9\" y1=\"4.3\" x2=\"-19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"3.4,8.3 5.8,23.6 12.5,20.9\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"10.4\" y1=\"4.3\" x2=\"11.1\" y2=\"2.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"12.4\" y1=\"5.5\" x2=\"13.4\" y2=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"14.4\" y1=\"6.6\" x2=\"15.6\" y2=\"2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"16.3\" y1=\"7.8\" x2=\"17.9\" y2=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"18.3\" y1=\"8.9\" x2=\"20.2\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"20.3\" y1=\"10.1\" x2=\"22.5\" y2=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">COOH</tspan></text><text x=\"-21.6\" y=\"20.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan><tspan dy=\"4\" font-size=\"10\">3</tspan><tspan dy=\"-4\">C</tspan></text><text x=\"6.6\" y=\"35.6\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">OH</tspan></text><text x=\"30.0\" y=\"14.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg> &nbsp; <svg class=\"q-fig\" viewBox=\"-41.0 -46.5 95 94\" width=\"95\" height=\"94\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"결합 4개를 가진 탄소 원자: COOH는 평면에서 위쪽, CH3는 평면에서 오른쪽 아래, OH는 왼쪽 아래의 실선 쐐기, H는 왼쪽의 점선 쐐기\"><line x1=\"0.0\" y1=\"-9.0\" x2=\"0.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"7.9\" y1=\"4.3\" x2=\"19.7\" y2=\"10.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"-3.4,8.3 -12.5,20.9 -5.8,23.6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"/><line x1=\"-11.1\" y1=\"2.1\" x2=\"-10.4\" y2=\"4.3\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-13.4\" y1=\"2.3\" x2=\"-12.4\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-15.6\" y1=\"2.4\" x2=\"-14.4\" y2=\"6.6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-17.9\" y1=\"2.5\" x2=\"-16.3\" y2=\"7.8\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-20.2\" y1=\"2.6\" x2=\"-18.3\" y2=\"8.9\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"-22.5\" y1=\"2.8\" x2=\"-20.3\" y2=\"10.1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"0.0\" y=\"5.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">C</tspan></text><text x=\"0.0\" y=\"-26.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">COOH</tspan></text><text x=\"21.6\" y=\"20.0\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">CH</tspan><tspan dy=\"4\" font-size=\"10\">3</tspan></text><text x=\"-6.6\" y=\"35.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">HO</tspan></text><text x=\"-30.0\" y=\"14.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\"><tspan dy=\"0\">H</tspan></text></svg></p><p>네 원자단이 정사면체 모양으로 배열되어 있고 두 번째 그림이 첫 번째 그림의 거울상이면 어떤 방향으로 그려도 인정돼요.</p>",
      markscheme: [
        // EN: Chiral carbon identified: carbon 2 / the carbon bonded to H, OH, CH₃ and COOH (circled or starred on the drawing is fine).
        "카이랄 탄소를 찾음: 2번 탄소 / H, OH, CH₃, COOH와 결합한 탄소(그림에 동그라미나 별표로 표시해도 됨).",
        // EN: One enantiomer drawn in 3D: two bonds in the plane, one solid wedge, one hashed (dashed) wedge, with H, OH, CH₃ and COOH on the central carbon.
        "한 거울상 이성질체를 3D(입체)로 그림: 평면에 있는 결합 두 개, 실선 쐐기 하나, 점선 쐐기 하나, 그리고 가운데 탄소에 H, OH, CH₃, COOH.",
        // EN: The second structure drawn as the mirror image of the first (or with any two groups exchanged), also in 3D.
        "두 번째 구조를 첫 번째 구조의 거울상으로(또는 아무 두 원자단을 바꿔서) 그림. 이것도 3D로 그려야 함.",
      ],
    },

    // ── s3-2h-q016 · numeric · foundation · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q016": {
      // EN: <p>The sketch shows the main peaks in the mass spectrum of a compound that contains C, H and O.</p><p><svg class="q-fig" viewBox="0 0 300 178" width="300" height="178" style="max-width:100%;height:auto" role="img" aria-label="Mass spectrum sketch with three peaks: m/z 15 with relative abundance 12, m/z 43 with relative abundance 100, and m/z 58 with relative abundance 25."><path d="M34 18V144H290" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="34" y1="144" x2="34" y2="149" stroke="currentColor" stroke-width="1"/><text x="34" y="161" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="70.57142857142857" y1="144" x2="70.57142857142857" y2="147" stroke="currentColor" stroke-width="1"/><line x1="107.14285714285714" y1="144" x2="107.14285714285714" y2="149" stroke="currentColor" stroke-width="1"/><text x="107.14285714285714" y="161" text-anchor="middle" font-size="11" fill="currentColor">20</text><line x1="143.71428571428572" y1="144" x2="143.71428571428572" y2="147" stroke="currentColor" stroke-width="1"/><line x1="180.28571428571428" y1="144" x2="180.28571428571428" y2="149" stroke="currentColor" stroke-width="1"/><text x="180.28571428571428" y="161" text-anchor="middle" font-size="11" fill="currentColor">40</text><line x1="216.85714285714286" y1="144" x2="216.85714285714286" y2="147" stroke="currentColor" stroke-width="1"/><line x1="253.42857142857142" y1="144" x2="253.42857142857142" y2="149" stroke="currentColor" stroke-width="1"/><text x="253.42857142857142" y="161" text-anchor="middle" font-size="11" fill="currentColor">60</text><line x1="290" y1="144" x2="290" y2="147" stroke="currentColor" stroke-width="1"/><line x1="30" y1="144" x2="34" y2="144" stroke="currentColor" stroke-width="1"/><text x="27" y="148" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="30" y1="81" x2="34" y2="81" stroke="currentColor" stroke-width="1"/><text x="27" y="85" text-anchor="end" font-size="11" fill="currentColor">50</text><line x1="30" y1="18" x2="34" y2="18" stroke="currentColor" stroke-width="1"/><text x="27" y="22" text-anchor="end" font-size="11" fill="currentColor">100</text><text x="162" y="175" text-anchor="middle" font-size="11" fill="currentColor">m/z</text><text x="40" y="11" font-size="11" fill="currentColor">relative abundance / %</text><line x1="88.9" y1="144" x2="88.9" y2="128.9" stroke="currentColor" stroke-width="2.4"/><text x="88.9" y="124.9" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">15</text><line x1="191.3" y1="144" x2="191.3" y2="18.0" stroke="currentColor" stroke-width="2.4"/><text x="191.3" y="14.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">43</text><line x1="246.1" y1="144" x2="246.1" y2="112.5" stroke="currentColor" stroke-width="2.4"/><text x="246.1" y="108.5" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">58</text></svg></p><p>The peak with the highest m/z value is the molecular ion. What is the relative molecular mass, M<sub>r</sub>, of the compound?</p>
      stem: "<p>이 그림은 C, H, O를 포함한 화합물의 질량 스펙트럼에서 주요 봉우리를 보여 줘요.</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 178\" width=\"300\" height=\"178\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"봉우리 3개가 있는 질량 스펙트럼 그림: m/z 15에서 상대 존재 비율 12, m/z 43에서 상대 존재 비율 100, m/z 58에서 상대 존재 비율 25.\"><path d=\"M34 18V144H290\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"34\" y1=\"144\" x2=\"34\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"34\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"70.57142857142857\" y1=\"144\" x2=\"70.57142857142857\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"107.14285714285714\" y1=\"144\" x2=\"107.14285714285714\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"107.14285714285714\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">20</text><line x1=\"143.71428571428572\" y1=\"144\" x2=\"143.71428571428572\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"180.28571428571428\" y1=\"144\" x2=\"180.28571428571428\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.28571428571428\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">40</text><line x1=\"216.85714285714286\" y1=\"144\" x2=\"216.85714285714286\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"253.42857142857142\" y1=\"144\" x2=\"253.42857142857142\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"253.42857142857142\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">60</text><line x1=\"290\" y1=\"144\" x2=\"290\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"30\" y1=\"144\" x2=\"34\" y2=\"144\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"148\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"30\" y1=\"81\" x2=\"34\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"85\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">50</text><line x1=\"30\" y1=\"18\" x2=\"34\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"27\" y=\"22\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">100</text><text x=\"162\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">m/z</text><text x=\"40\" y=\"11\" font-size=\"11\" fill=\"currentColor\">상대 존재 비율 / %</text><line x1=\"88.9\" y1=\"144\" x2=\"88.9\" y2=\"128.9\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"88.9\" y=\"124.9\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">15</text><line x1=\"191.3\" y1=\"144\" x2=\"191.3\" y2=\"18.0\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"191.3\" y=\"14.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">43</text><line x1=\"246.1\" y1=\"144\" x2=\"246.1\" y2=\"112.5\" stroke=\"currentColor\" stroke-width=\"2.4\"/><text x=\"246.1\" y=\"108.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">58</text></svg></p><p>m/z 값이 가장 큰 봉우리가 분자 이온이에요. 이 화합물의 상대 분자 질량 M<sub>r</sub>은 얼마인가요?</p>",
      hints: [
        // EN: The molecular ion is the whole molecule with one electron removed. Its mass is the mass of the molecule.
        "분자 이온은 분자 전체에서 전자 하나가 떨어져 나간 것이에요. 그 질량은 분자의 질량과 같아요.",
        // EN: Do not choose the tallest peak. Choose the molecular ion peak, which is the one furthest to the right here.
        "가장 높은 봉우리를 고르지 마세요. 분자 이온 봉우리를 고르세요. 여기서는 가장 오른쪽에 있는 봉우리예요.",
      ],
      // EN: <p>The molecular ion, M<sup>+</sup>, is the whole molecule after it has lost one electron. Its m/z value equals the relative molecular mass.</p><p>The molecular ion peak is at m/z 58, so M<sub>r</sub> = <strong>58</strong>.</p><p>The tallest peak (m/z 43) is a fragment. It is formed when the molecular ion breaks apart. (These are the main peaks of propanone.)</p>
      solution: "<p>분자 이온 M<sup>+</sup>은 분자 전체가 전자 하나를 잃은 것이에요. 그 m/z 값은 상대 분자 질량과 같아요.</p><p>분자 이온 봉우리는 m/z 58에 있으므로 M<sub>r</sub> = <strong>58</strong>이에요.</p><p>가장 높은 봉우리(m/z 43)는 조각이에요. 분자 이온이 쪼개질 때 생겨요. (이것들은 propanone의 주요 봉우리예요.)</p>",
    },

    // ── s3-2h-q017 · mcq · foundation · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q017": {
      // EN: <p>The mass spectrum of propanone has a peak at m/z 15. Which species causes this peak?</p>
      stem: "<p>propanone의 질량 스펙트럼에는 m/z 15에 봉우리가 있어요. 이 봉우리를 만드는 화학종은 무엇인가요?</p>",
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
        "질량이 15인 원자 무리는 무엇인가요?",
        // EN: What kind of particle does a mass spectrometer detect: neutral, positive or negative?
        "질량 분석기가 검출하는 입자는 어떤 종류인가요? 중성, 양전하, 음전하 중 무엇인가요?",
      ],
      // EN: <p>A methyl group has mass 12 + 3 × 1 = 15. The detector only records positive ions, so the peak at m/z 15 is caused by <span class="chem">CH<sub>3</sub><sup>+</sup><span></span></span>.</p><p>Always write the + charge on a fragment that gives a peak.</p>
      solution: "<p>메틸기의 질량은 12 + 3 × 1 = 15예요. 검출기는 양이온만 기록하므로 m/z 15의 봉우리는 <span class=\"chem\">CH<sub>3</sub><sup>+</sup><span></span></span>가 만들어요.</p><p>봉우리를 만드는 조각에는 항상 + 전하를 쓰세요.</p>",
      misconception: {
        // EN (option B): The formula is right but the charge is missing. A neutral radical is not deflected or detected. Only positive ions give peaks, and markschemes give no mark for a fragment written without its + charge.
        "1": "화학식은 맞지만 전하가 빠졌어요. 중성 라디칼은 휘어지지도 검출되지도 않아요. 양이온만 봉우리를 만들고, 채점 기준은 + 전하 없이 쓴 조각에는 점수를 주지 않아요.",
        // EN (option C): A mass spectrometer produces and detects positive ions, formed when electrons are knocked out of molecules.
        "2": "질량 분석기는 분자에서 전자를 떼어 내어 만든 양이온을 만들고 검출해요.",
        // EN (option D): Check the mass: O + H = 16 + 1 = 17, not 15.
        "3": "질량을 확인하세요. O + H = 16 + 1 = 17이고, 15가 아니에요.",
      },
    },

    // ── s3-2h-q018 · numeric · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q018": {
      // EN: <p>Propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>, has a molecular ion peak at m/z 74.</p><p>Some molecular ions break up by losing a •COOH fragment. At what m/z value does the ion that is formed appear?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Propanoic acid, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>는 m/z 74에 분자 이온 봉우리가 있어요.</p><p>일부 분자 이온은 •COOH 조각을 잃으며 쪼개져요. 이때 생기는 이온은 어떤 m/z 값에 나타나나요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(22절): 질량 스펙트럼에서 떨어져 나가는 조각</caption><thead><tr><th scope=\"col\">잃은 질량</th><th scope=\"col\">떨어져 나갈 수 있는 중성 조각</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 또는 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 또는 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
      hints: [
        // EN: Find the mass of •COOH in the table.
        "표에서 •COOH의 질량을 찾으세요.",
        // EN: The table gives the mass that is <strong>lost</strong>. The peak is at the mass that is <strong>left</strong>.
        "표는 <strong>잃은</strong> 질량을 알려 줘요. 봉우리는 <strong>남은</strong> 질량에 나타나요.",
      ],
      // EN: <p>The neutral fragment •COOH has a mass of 45. It is not detected.</p><div class="worked__math">m/z of ion left = 74 − 45 = <b>29</b></div><p>The ion is <span class="chem">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span> (2 × 12 + 5 × 1 = 29). The real spectrum of propanoic acid has a strong peak at m/z 29.</p>
      solution: "<p>중성 조각 •COOH의 질량은 45예요. 이 조각은 검출되지 않아요.</p><div class=\"worked__math\">남은 이온의 m/z = 74 − 45 = <b>29</b></div><p>이 이온은 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><span></span></span>예요(2 × 12 + 5 × 1 = 29). 실제 propanoic acid의 스펙트럼에는 m/z 29에 강한 봉우리가 있어요.</p>",
    },

    // ── s3-2h-q019 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q019": {
      // EN: <p>The mass spectrum of butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>, has its molecular ion peak at m/z 72 and its tallest peak at m/z 43.</p><p>Which ion causes the peak at m/z 43?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>butanone, <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>의 질량 스펙트럼은 분자 이온 봉우리가 m/z 72에, 가장 높은 봉우리가 m/z 43에 있어요.</p><p>m/z 43의 봉우리를 만드는 이온은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(22절): 질량 스펙트럼에서 떨어져 나가는 조각</caption><thead><tr><th scope=\"col\">잃은 질량</th><th scope=\"col\">떨어져 나갈 수 있는 중성 조각</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 또는 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 또는 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
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
        "잃은 질량을 구하세요: 72 − 43.",
        // EN: Which neutral fragment in the table has that mass and is present in butanone? What is left behind?
        "표에서 그 질량을 가지면서 butanone에 들어 있는 중성 조각은 무엇인가요? 남는 것은 무엇인가요?",
      ],
      // EN: <div class="worked__math">mass lost = 72 − 43 = 29</div><p>A loss of 29 is •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> (or •CHO, but butanone has no CHO group). Butanone has an ethyl group next to the C=O group, so the C–C bond there breaks:</p><div class="worked__math">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub></div><p>The ion left is <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>, mass 15 + 12 + 16 = 43.</p>
      solution: "<div class=\"worked__math\">잃은 질량 = 72 − 43 = 29</div><p>29를 잃는 것은 •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>예요(•CHO일 수도 있지만 butanone에는 CHO기가 없어요). butanone은 C=O기 옆에 에틸기가 있으므로 그곳의 C–C 결합이 끊어져요.</p><div class=\"worked__math\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>2</sub>CH<sub>3</sub></div><p>남은 이온은 <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>이고, 질량은 15 + 12 + 16 = 43이에요.</p>",
      misconception: {
        // EN (option A): This ion has a mass of 57. It forms when the molecular ion loses •<span class="chem">CH<sub>3</sub><span></span></span> (72 − 15 = 57).
        "0": "이 이온의 질량은 57이에요. 분자 이온이 •<span class=\"chem\">CH<sub>3</sub><span></span></span>를 잃을 때 생겨요(72 − 15 = 57).",
        // EN (option C): This ion has a mass of 29. Here 29 is the mass that is lost, not the mass that is detected.
        "2": "이 이온의 질량은 29예요. 여기서 29는 검출되는 질량이 아니라 잃은 질량이에요.",
        // EN (option D): The atoms are right, but a neutral fragment gives no peak. The ion must be written with a + charge.
        "3": "원자는 맞지만 중성 조각은 봉우리를 만들지 않아요. 이온은 + 전하를 붙여 써야 해요.",
      },
    },

    // ── s3-2h-q020 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q020": {
      // EN: <p>Propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>, and propan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>, are isomers with M<sub>r</sub> = 60. In each molecular ion, the C–C bond next to the carbon that holds the OH group breaks easily.</p><p>Which peak is expected to be strong in the mass spectrum of propan-1-ol but weak in that of propan-2-ol?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div>
      stem: "<p>Propan-1-ol, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>와 propan-2-ol, <span class=\"chem\">CH<sub>3</sub>CH(OH)CH<sub>3</sub><span></span></span>은 M<sub>r</sub> = 60인 이성질체예요. 각 분자 이온에서는 OH기가 붙은 탄소 옆의 C–C 결합이 쉽게 끊어져요.</p><p>propan-1-ol의 질량 스펙트럼에서는 강하지만 propan-2-ol의 질량 스펙트럼에서는 약할 것으로 예상되는 봉우리는 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(22절): 질량 스펙트럼에서 떨어져 나가는 조각</caption><thead><tr><th scope=\"col\">잃은 질량</th><th scope=\"col\">떨어져 나갈 수 있는 중성 조각</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 또는 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 또는 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div>",
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
        "각 분자를 그려 보세요. C–OH 탄소에 C–C 결합으로 붙어 있는 원자단은 무엇인가요?",
        // EN: In propan-1-ol that group is ethyl. In propan-2-ol it is methyl. Subtract the mass lost from 60.
        "propan-1-ol에서는 그 원자단이 에틸기예요. propan-2-ol에서는 메틸기예요. 60에서 잃은 질량을 빼세요.",
      ],
      // EN: <p><strong>Propan-1-ol:</strong> the C–OH carbon is bonded to an ethyl group. Losing •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> (29) leaves <span class="chem">CH<sub>2</sub>OH<sup>+</sup><span></span></span>:</p><div class="worked__math">60 − 29 = <b>31</b></div><p><strong>Propan-2-ol:</strong> the C–OH carbon is bonded to two methyl groups. Losing •<span class="chem">CH<sub>3</sub><span></span></span> (15) leaves <span class="chem">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>:</p><div class="worked__math">60 − 15 = 45</div><p>So a strong peak at m/z 31 points to propan-1-ol. In the real spectra, m/z 31 is the tallest peak for propan-1-ol and m/z 45 is the tallest peak for propan-2-ol.</p>
      solution: "<p><strong>Propan-1-ol:</strong> C–OH 탄소가 에틸기와 결합해 있어요. •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>(29)를 잃으면 <span class=\"chem\">CH<sub>2</sub>OH<sup>+</sup><span></span></span>가 남아요.</p><div class=\"worked__math\">60 − 29 = <b>31</b></div><p><strong>Propan-2-ol:</strong> C–OH 탄소가 메틸기 두 개와 결합해 있어요. •<span class=\"chem\">CH<sub>3</sub><span></span></span>(15)를 잃으면 <span class=\"chem\">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>가 남아요.</p><div class=\"worked__math\">60 − 15 = 45</div><p>따라서 m/z 31의 강한 봉우리는 propan-1-ol을 가리켜요. 실제 스펙트럼에서 m/z 31은 propan-1-ol의 가장 높은 봉우리이고, m/z 45는 propan-2-ol의 가장 높은 봉우리예요.</p>",
      misconception: {
        // EN (option A): A mass of 15 is the methyl fragment. When the C–C bond breaks, the charge mostly stays on the part that contains oxygen, so this is not the peak that picks out propan-1-ol.
        "0": "질량 15는 메틸 조각이에요. C–C 결합이 끊어질 때 전하는 주로 산소가 있는 쪽에 남으므로, 이 봉우리로는 propan-1-ol을 골라낼 수 없어요.",
        // EN (option C): m/z 45 is 60 − 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span> from the carbon next to C–OH. Propan-2-ol does this, giving <span class="chem">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>. It is the strong peak of propan-2-ol.
        "2": "m/z 45는 60 − 15, 즉 C–OH 옆의 탄소에서 •<span class=\"chem\">CH<sub>3</sub><span></span></span>를 잃은 것이에요. propan-2-ol이 이렇게 쪼개져서 <span class=\"chem\">CH<sub>3</sub>CHOH<sup>+</sup><span></span></span>가 생겨요. 이것은 propan-2-ol의 강한 봉우리예요.",
        // EN (option D): m/z 60 is the molecular ion. Isomers have the same M<sub>r</sub>, so this peak cannot tell them apart.
        "3": "m/z 60은 분자 이온이에요. 이성질체는 M<sub>r</sub>이 같으므로 이 봉우리로는 둘을 구별할 수 없어요.",
      },
    },

    // ── s3-2h-q021 · short · challenge · AHL · Structure 3.2.8 · 3 marks
    "s3-2h-q021": {
      // EN: <p>Pentan-2-one, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>, and pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>, are isomers. The table shows the main peaks in the mass spectra of the two compounds, labelled P and Q.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Main peaks (m/z); the tallest peak is in bold</caption><thead><tr><th scope="col">Spectrum</th><th scope="col">Peaks</th></tr></thead><tbody><tr><th scope="row">P</th><td>29, <b>57</b>, 86</td></tr><tr><th scope="row">Q</th><td><b>43</b>, 71, 86</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Deduce which compound gave each spectrum. Use two of the fragment peaks in your explanation.</p>
      stem: "<p>Pentan-2-one, <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub><span></span></span>과 pentan-3-one, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>은 이성질체예요. 표는 두 화합물의 질량 스펙트럼에서 주요 봉우리를 P와 Q로 나타낸 것이에요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>주요 봉우리(m/z). 가장 높은 봉우리는 굵은 글씨</caption><thead><tr><th scope=\"col\">스펙트럼</th><th scope=\"col\">봉우리</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td>29, <b>57</b>, 86</td></tr><tr><th scope=\"row\">Q</th><td><b>43</b>, 71, 86</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(22절): 질량 스펙트럼에서 떨어져 나가는 조각</caption><thead><tr><th scope=\"col\">잃은 질량</th><th scope=\"col\">떨어져 나갈 수 있는 중성 조각</th></tr></thead><tbody><tr><th scope=\"row\">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope=\"row\">17</th><td>•OH</td></tr><tr><th scope=\"row\">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope=\"row\">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> 또는 CO</td></tr><tr><th scope=\"row\">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> 또는 •CHO</td></tr><tr><th scope=\"row\">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope=\"row\">45</th><td>•COOH</td></tr></tbody></table></div><p>각 스펙트럼이 어느 화합물의 것인지 추론하시오 (deduce). 설명에 조각 봉우리 두 개를 이용하세요.</p>",
      hints: [
        // EN: Both have a molecular ion at m/z 86. Subtract each fragment peak from 86 to find the mass lost.
        "둘 다 분자 이온이 m/z 86에 있어요. 86에서 각 조각 봉우리를 빼서 잃은 질량을 구하세요.",
        // EN: Ketones tend to break at the C–C bond next to the C=O group. Which groups sit next to C=O in each isomer?
        "케톤은 C=O기 옆의 C–C 결합에서 잘 끊어져요. 각 이성질체에서 C=O 옆에는 어떤 원자단이 있나요?",
      ],
      // EN: <p>Method: mass lost = M − fragment peak, then match the mass lost to the booklet table and to a group that the molecule really contains.</p><div class="worked__math">P: 86 − 57 = 29 → •CH<sub>2</sub>CH<sub>3</sub> lost</div><div class="worked__math">Q: 86 − 71 = 15 → •CH<sub>3</sub> lost</div><p>Pentan-3-one has two ethyl groups next to C=O and no methyl group there. Pentan-2-one has a methyl group next to C=O. The peaks are those of the real spectra.</p>
      solution: "<p>방법: 잃은 질량 = M − 조각 봉우리. 그다음 잃은 질량을 부클릿 표와, 분자에 실제로 있는 원자단에 맞춰 보세요.</p><div class=\"worked__math\">P: 86 − 57 = 29 → •CH<sub>2</sub>CH<sub>3</sub> 잃음</div><div class=\"worked__math\">Q: 86 − 71 = 15 → •CH<sub>3</sub> 잃음</div><p>pentan-3-one은 C=O 옆에 에틸기가 두 개 있고 메틸기는 없어요. pentan-2-one은 C=O 옆에 메틸기가 있어요. 이 봉우리들은 실제 스펙트럼의 봉우리예요.</p>",
      // EN: <p>P is pentan-3-one and Q is pentan-2-one.</p><p>The peak at m/z 57 in P is M − 29: loss of •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span> to leave <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>. Pentan-3-one has an ethyl group on each side of the C=O group, so it loses 29 easily.</p><p>The peak at m/z 71 in Q is M − 15: loss of •<span class="chem">CH<sub>3</sub><span></span></span> to leave <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>. Only pentan-2-one has a <span class="chem">CH<sub>3</sub><span></span></span> group bonded to the C=O carbon. (The peak at m/z 43 in Q is <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>, which also needs a <span class="chem">CH<sub>3</sub><span></span></span> next to C=O.)</p>
      answer: "<p>P는 pentan-3-one이고 Q는 pentan-2-one이에요.</p><p>P의 m/z 57 봉우리는 M − 29예요. •<span class=\"chem\">CH<sub>2</sub>CH<sub>3</sub><span></span></span>를 잃고 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>가 남아요. pentan-3-one은 C=O기 양쪽에 에틸기가 하나씩 있으므로 29를 쉽게 잃어요.</p><p>Q의 m/z 71 봉우리는 M − 15예요. •<span class=\"chem\">CH<sub>3</sub><span></span></span>를 잃고 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CO<sup>+</sup><span></span></span>가 남아요. C=O 탄소에 <span class=\"chem\">CH<sub>3</sub><span></span></span>기가 결합한 것은 pentan-2-one뿐이에요. (Q의 m/z 43 봉우리는 <span class=\"chem\">CH<sub>3</sub>CO<sup>+</sup><span></span></span>이고, 이것도 C=O 옆에 <span class=\"chem\">CH<sub>3</sub><span></span></span>가 있어야 생겨요.)</p>",
      markscheme: [
        // EN: P is pentan-3-one AND Q is pentan-2-one.
        "P는 pentan-3-one이고 Q는 pentan-2-one임(둘 다).",
        // EN: m/z 57 = 86 − 29, loss of •CH₂CH₃ / the ion CH₃CH₂CO⁺, which fits an ethyl group next to C=O in pentan-3-one. (Accept m/z 29 = CH₃CH₂⁺.)
        "m/z 57 = 86 − 29, •CH₂CH₃를 잃음 / 이온 CH₃CH₂CO⁺. pentan-3-one에서 C=O 옆에 에틸기가 있는 것과 맞음. (m/z 29 = CH₃CH₂⁺도 인정.)",
        // EN: m/z 71 = 86 − 15, loss of •CH₃ next to C=O in pentan-2-one; OR m/z 43 is CH₃CO⁺, which needs CH₃ next to C=O. Ions must be written with a + charge.
        "m/z 71 = 86 − 15, pentan-2-one에서 C=O 옆의 •CH₃를 잃음. 또는 m/z 43은 CH₃CO⁺이며, C=O 옆에 CH₃가 있어야 함. 이온은 + 전하를 붙여 써야 함.",
      ],
    },

    // ── s3-2h-q022 · mcq · exam · AHL · Structure 3.2.8 · 1 mark
    "s3-2h-q022": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Other evidence shows that each molecule contains <strong>one</strong> oxygen atom. The molecular ion peak in its mass spectrum is at m/z 72.</p><p>What is the molecular formula of the compound?</p>
      stem: "<p>어떤 화합물은 탄소, 수소, 산소만 포함해요. 다른 증거로부터 각 분자에 산소 원자가 <strong>하나</strong> 있다는 것을 알아요. 이 화합물의 질량 스펙트럼에서 분자 이온 봉우리는 m/z 72에 있어요.</p><p>이 화합물의 분자식은 무엇인가요?</p>",
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
        "72에서 산소 원자 하나의 질량을 빼세요.",
        // EN: Build the remaining mass from carbon (12) and hydrogen (1).
        "남은 질량을 탄소(12)와 수소(1)로 채우세요.",
      ],
      // EN: <div class="worked__math">72 − 16 = 56 left for C and H</div><div class="worked__math">4 × 12 = 48, &nbsp; 56 − 48 = 8 → 8 H</div><p>The molecular formula is <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>. (Three carbons would need 20 H atoms, which is impossible, and five carbons give 60, which is too much.)</p>
      solution: "<div class=\"worked__math\">72 − 16 = 56이 C와 H 몫으로 남음</div><div class=\"worked__math\">4 × 12 = 48, &nbsp; 56 − 48 = 8 → H 8개</div><p>분자식은 <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<span></span></span>예요. (탄소가 3개라면 H 원자가 20개 필요해서 불가능하고, 탄소가 5개라면 60이 되어 너무 커요.)</p>",
      misconception: {
        // EN (option B): This formula does add up to 72, but it has two oxygen atoms. The question says there is one.
        "1": "이 화학식도 합이 72이지만 산소 원자가 두 개예요. 문제에서는 하나라고 했어요.",
        // EN (option C): This formula adds up to 72, but it has no oxygen atom.
        "2": "이 화학식은 합이 72이지만 산소 원자가 없어요.",
        // EN (option D): Check the mass: 4 × 12 + 10 × 1 + 16 = 74, not 72.
        "3": "질량을 확인하세요. 4 × 12 + 10 × 1 + 16 = 74이고, 72가 아니에요.",
      },
    },

    // ── s3-2h-q023 · mcq · foundation · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q023": {
      // EN: <p>The infrared spectrum of a compound has a strong, sharp absorption at 1715 cm<sup>−1</sup>. Which bond causes it?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>어떤 화합물의 적외선 스펙트럼은 1715 cm<sup>−1</sup>에서 강하고 날카로운 흡수를 보여요. 이 흡수를 일으키는 결합은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>알코올, 에스터, 에테르</td><td>1050–1410</td><td>강함</td></tr><tr><th scope=\"row\">C=C</th><td>알켄</td><td>1620–1680</td><td>중간~약함, 여러 개의 띠</td></tr><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">C–H</th><td>알케인, 알켄, 아렌</td><td>2850–3090</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div>",
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
        "표에서 범위 안에 1715가 들어가는 줄을 찾으세요.",
      ],
      // EN: <p>1715 cm<sup>−1</sup> lies in the range 1700–1750 cm<sup>−1</sup>. This strong absorption is caused by a C=O bond. The compound could be an aldehyde, a ketone, a carboxylic acid or an ester.</p>
      solution: "<p>1715 cm<sup>−1</sup>는 1700–1750 cm<sup>−1</sup> 범위에 있어요. 이 강한 흡수는 C=O 결합 때문이에요. 이 화합물은 알데하이드, 케톤, 카복실산, 에스터 중 하나일 수 있어요.</p>",
      misconception: {
        // EN (option A): C–O absorbs at 1050–1410 cm<sup>−1</sup>. The single bond and the double bond are easy to mix up, so check the table row carefully.
        "0": "C–O는 1050–1410 cm<sup>−1</sup>에서 흡수해요. 단일 결합과 이중 결합은 헷갈리기 쉬우니 표의 줄을 꼼꼼히 확인하세요.",
        // EN (option B): C=C absorbs at 1620–1680 cm<sup>−1</sup>, and its absorption is medium to weak, not strong.
        "1": "C=C는 1620–1680 cm<sup>−1</sup>에서 흡수하고, 그 흡수는 강하지 않고 중간에서 약한 정도예요.",
        // EN (option D): O–H absorptions are broad and appear at much higher wavenumbers (2500–3000 or 3200–3600 cm<sup>−1</sup>).
        "3": "O–H 흡수는 넓고, 훨씬 높은 파수(2500–3000 또는 3200–3600 cm<sup>−1</sup>)에 나타나요.",
      },
    },

    // ── s3-2h-q024 · mcq · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q024": {
      // EN: <p>The infrared spectrum of a compound shows a strong, very broad absorption from 2500 to 3000 cm<sup>−1</sup> and a strong absorption at 1715 cm<sup>−1</sup>.</p><p>Which compound could it be?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>어떤 화합물의 적외선 스펙트럼은 2500부터 3000 cm<sup>−1</sup>까지 강하고 매우 넓은 흡수를, 1715 cm<sup>−1</sup>에서 강한 흡수를 보여요.</p><p>이 화합물은 무엇일 수 있나요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>알코올, 에스터, 에테르</td><td>1050–1410</td><td>강함</td></tr><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">C–H</th><td>알케인, 알켄, 아렌</td><td>2850–3090</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div>",
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
        "표를 이용해 각 흡수를 결합에 대응시키세요.",
        // EN: Which class of compound has both of these bonds in one functional group?
        "한 작용기 안에 이 두 결합을 모두 가진 화합물의 종류는 무엇인가요?",
      ],
      // EN: <p>1715 cm<sup>−1</sup> is in the C=O range (1700–1750 cm<sup>−1</sup>). The very broad absorption at 2500–3000 cm<sup>−1</sup> is the O–H bond of a carboxylic acid. A carboxyl group, –COOH, has both, so the compound is propanoic acid.</p>
      solution: "<p>1715 cm<sup>−1</sup>는 C=O 범위(1700–1750 cm<sup>−1</sup>)에 있어요. 2500–3000 cm<sup>−1</sup>의 매우 넓은 흡수는 카복실산의 O–H 결합이에요. 카복실기 –COOH는 두 결합을 모두 가지므로 이 화합물은 propanoic acid예요.</p>",
      misconception: {
        // EN (option A): An alcohol has no C=O bond, so it has no absorption at 1700–1750 cm<sup>−1</sup>. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.
        "0": "알코올에는 C=O 결합이 없으므로 1700–1750 cm<sup>−1</sup>에서 흡수가 없어요. 알코올의 O–H 흡수는 3200–3600 cm<sup>−1</sup>에 있어요.",
        // EN (option B): An aldehyde has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "1": "알데하이드는 C=O 흡수는 있지만 O–H 결합이 없으므로 2500–3000 cm<sup>−1</sup>의 매우 넓은 흡수를 보일 수 없어요.",
        // EN (option D): An ester has the C=O absorption but no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "3": "에스터는 C=O 흡수는 있지만 O–H 결합이 없으므로 2500–3000 cm<sup>−1</sup>의 매우 넓은 흡수를 보일 수 없어요.",
      },
    },

    // ── s3-2h-q025 · mcq · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q025": {
      // EN: <p>Propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>, and methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>, are isomers.</p><p>Which feature of their infrared spectra tells them apart?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Propanoic acid, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>와 methyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>는 이성질체예요.</p><p>적외선 스펙트럼의 어떤 특징으로 둘을 구별할 수 있나요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>알코올, 에스터, 에테르</td><td>1050–1410</td><td>강함</td></tr><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">C–H</th><td>알케인, 알켄, 아렌</td><td>2850–3090</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div>",
      options: [
        // EN: Only methyl ethanoate absorbs at 1700–1750 cm<sup>−1</sup>.
        "methyl ethanoate만 1700–1750 cm<sup>−1</sup>에서 흡수해요.",
        // EN: Only propanoic acid has a very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "propanoic acid만 2500–3000 cm<sup>−1</sup>에서 매우 넓은 흡수를 보여요.",
        // EN: Only propanoic acid has a broad absorption at 3200–3600 cm<sup>−1</sup>.
        "propanoic acid만 3200–3600 cm<sup>−1</sup>에서 넓은 흡수를 보여요.",
        // EN: Only methyl ethanoate absorbs at 2850–3090 cm<sup>−1</sup>.
        "methyl ethanoate만 2850–3090 cm<sup>−1</sup>에서 흡수해요.",
      ],
      hints: [
        // EN: List the bonds in each molecule. Which bond is in one molecule but not in the other?
        "각 분자에 있는 결합을 나열하세요. 한 분자에는 있고 다른 분자에는 없는 결합은 무엇인가요?",
        // EN: The booklet has two different O–H rows. Choose the row for carboxylic acids.
        "부클릿에는 O–H 줄이 서로 다른 두 개 있어요. 카복실산 줄을 고르세요.",
      ],
      // EN: <p>Both molecules have C=O, C–O and C–H bonds. Only the acid has an O–H bond. The O–H bond in a carboxylic acid gives a strong, very broad absorption at 2500–3000 cm<sup>−1</sup>. The ester has no absorption of that kind.</p>
      solution: "<p>두 분자 모두 C=O, C–O, C–H 결합을 가져요. O–H 결합은 산에만 있어요. 카복실산의 O–H 결합은 2500–3000 cm<sup>−1</sup>에서 강하고 매우 넓은 흡수를 보여요. 에스터에는 그런 흡수가 없어요.</p>",
      misconception: {
        // EN (option A): Both molecules contain a C=O bond, so both absorb at 1700–1750 cm<sup>−1</sup>.
        "0": "두 분자 모두 C=O 결합이 있으므로 둘 다 1700–1750 cm<sup>−1</sup>에서 흡수해요.",
        // EN (option C): 3200–3600 cm<sup>−1</sup> is the O–H range for alcohols. The O–H bond of a carboxylic acid absorbs at 2500–3000 cm<sup>−1</sup>.
        "2": "3200–3600 cm<sup>−1</sup>는 알코올의 O–H 범위예요. 카복실산의 O–H 결합은 2500–3000 cm<sup>−1</sup>에서 흡수해요.",
        // EN (option D): Both molecules contain C–H bonds, so both absorb at 2850–3090 cm<sup>−1</sup>.
        "3": "두 분자 모두 C–H 결합이 있으므로 둘 다 2850–3090 cm<sup>−1</sup>에서 흡수해요.",
      },
    },

    // ── s3-2h-q026 · short · exam · AHL · Structure 3.2.9 · 3 marks
    "s3-2h-q026": {
      // EN: <p>Ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>, is an ester. Butanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>, is one of its isomers.</p><p>(a) Other than C–H, state two bonds in ethyl ethanoate that absorb infrared radiation, with the wavenumber range of each. (b) State one absorption that butanoic acid shows but ethyl ethanoate does not.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Ethyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>는 에스터예요. Butanoic acid, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH<span></span></span>는 그 이성질체 중 하나예요.</p><p>(a) C–H 말고 ethyl ethanoate에서 적외선을 흡수하는 결합 두 가지를 각각의 파수 범위와 함께 쓰시오 (state). (b) butanoic acid에는 나타나지만 ethyl ethanoate에는 나타나지 않는 흡수 하나를 쓰시오.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>알코올, 에스터, 에테르</td><td>1050–1410</td><td>강함</td></tr><tr><th scope=\"row\">C=C</th><td>알켄</td><td>1620–1680</td><td>중간~약함, 여러 개의 띠</td></tr><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">C–H</th><td>알케인, 알켄, 아렌</td><td>2850–3090</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div>",
      hints: [
        // EN: An ester group has one double bond and one single bond between carbon and oxygen.
        "에스터기에는 탄소와 산소 사이에 이중 결합 하나와 단일 결합 하나가 있어요.",
        // EN: What does a carboxyl group have that an ester group lacks?
        "카복실기에는 있고 에스터기에는 없는 것은 무엇인가요?",
      ],
      // EN: <p>Each mark needs the bond <strong>and</strong> its range. The ester group –COO– contains a C=O bond and a C–O bond. The carboxyl group –COOH also has an O–H bond. Use the carboxylic acid row of the table for it, not the alcohol row.</p>
      solution: "<p>각 점수를 받으려면 결합<strong>과</strong> 그 범위를 모두 써야 해요. 에스터기 –COO–에는 C=O 결합과 C–O 결합이 있어요. 카복실기 –COOH에는 O–H 결합도 있어요. 이 결합에는 알코올 줄이 아니라 표의 카복실산 줄을 쓰세요.</p>",
      // EN: <p>(a) C=O at 1700–1750 cm<sup>−1</sup>, and C–O at 1050–1410 cm<sup>−1</sup>.</p><p>(b) O–H in a carboxylic acid at 2500–3000 cm<sup>−1</sup> (strong and very broad).</p>
      answer: "<p>(a) 1700–1750 cm<sup>−1</sup>의 C=O, 그리고 1050–1410 cm<sup>−1</sup>의 C–O.</p><p>(b) 2500–3000 cm<sup>−1</sup>의 카복실산 O–H(강하고 매우 넓음).</p>",
      markscheme: [
        // EN: C=O AND 1700–1750 cm⁻¹ (any value inside the range is accepted).
        "C=O 그리고 1700–1750 cm⁻¹(범위 안의 어떤 값이든 인정).",
        // EN: C–O AND 1050–1410 cm⁻¹ (any value inside the range is accepted).
        "C–O 그리고 1050–1410 cm⁻¹(범위 안의 어떤 값이든 인정).",
        // EN: O–H (in carboxylic acids) AND 2500–3000 cm⁻¹. Do not accept 3200–3600 cm⁻¹, which is for alcohols.
        "(카복실산의) O–H 그리고 2500–3000 cm⁻¹. 알코올의 범위인 3200–3600 cm⁻¹는 인정하지 않음.",
      ],
    },

    // ── s3-2h-q027 · multi · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q027": {
      // EN: <p>Prop-2-en-1-ol has the structure <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>OH<span></span></span>. Which absorptions are expected in its infrared spectrum? Select <strong>all</strong> that apply.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=C</th><td>alkenes</td><td>1620–1680</td><td>medium-weak; multiple bands</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">C–H</th><td>alkanes, alkenes, arenes</td><td>2850–3090</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div>
      stem: "<p>Prop-2-en-1-ol의 구조는 <span class=\"chem\">CH<sub>2</sub>=CHCH<sub>2</sub>OH<span></span></span>예요. 이 화합물의 적외선 스펙트럼에서 예상되는 흡수는 무엇인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>알코올, 에스터, 에테르</td><td>1050–1410</td><td>강함</td></tr><tr><th scope=\"row\">C=C</th><td>알켄</td><td>1620–1680</td><td>중간~약함, 여러 개의 띠</td></tr><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">C–H</th><td>알케인, 알켄, 아렌</td><td>2850–3090</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div>",
      options: [
        // EN: C–O, 1050–1410 cm<sup>−1</sup>
        "C–O, 1050–1410 cm<sup>−1</sup>",
        // EN: C=C, 1620–1680 cm<sup>−1</sup>
        "C=C, 1620–1680 cm<sup>−1</sup>",
        // EN: C=O, 1700–1750 cm<sup>−1</sup>
        "C=O, 1700–1750 cm<sup>−1</sup>",
        // EN: O–H of a carboxylic acid, 2500–3000 cm<sup>−1</sup>, very broad
        "카복실산의 O–H, 2500–3000 cm<sup>−1</sup>, 매우 넓음",
        // EN: C–H, 2850–3090 cm<sup>−1</sup>
        "C–H, 2850–3090 cm<sup>−1</sup>",
        // EN: O–H of an alcohol, 3200–3600 cm<sup>−1</sup>, broad
        "알코올의 O–H, 3200–3600 cm<sup>−1</sup>, 넓음",
      ],
      hints: [
        // EN: Write out the structure and list every type of bond it contains.
        "구조를 써 보고 들어 있는 결합의 종류를 모두 나열하세요.",
        // EN: There are two functional groups: an alkene C=C and an alcohol O–H.
        "작용기가 두 개 있어요. 알켄의 C=C와 알코올의 O–H예요.",
      ],
      // EN: <p>The molecule contains these bonds: C=C (alkene), C–H, C–O and O–H (alcohol). Each gives an absorption in its booklet range. There is no C=O bond and no carboxyl group, so there is no absorption at 1700–1750 cm<sup>−1</sup> and no very broad absorption at 2500–3000 cm<sup>−1</sup>.</p>
      solution: "<p>이 분자에는 C=C(알켄), C–H, C–O, O–H(알코올) 결합이 있어요. 각 결합은 부클릿의 범위에서 흡수를 보여요. C=O 결합과 카복실기는 없으므로 1700–1750 cm<sup>−1</sup>의 흡수도, 2500–3000 cm<sup>−1</sup>의 매우 넓은 흡수도 없어요.</p>",
      misconception: {
        // EN (option C): The oxygen atom here is in an O–H group joined to carbon by a single bond. There is no C=O bond in the molecule. The double bond is C=C.
        "2": "여기서 산소 원자는 탄소와 단일 결합으로 이어진 O–H기에 있어요. 이 분자에는 C=O 결합이 없어요. 이중 결합은 C=C예요.",
        // EN (option D): The molecule is an alcohol, not a carboxylic acid. Its O–H absorption is at 3200–3600 cm<sup>−1</sup>.
        "3": "이 분자는 카복실산이 아니라 알코올이에요. O–H 흡수는 3200–3600 cm<sup>−1</sup>에 있어요.",
      },
    },

    // ── s3-2h-q028 · multi · exam · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q028": {
      // EN: <p>A greenhouse gas absorbs infrared radiation. A molecule can only do this if one of its vibrations changes the dipole moment of the molecule.</p><p>Which of these gases in the atmosphere absorb infrared radiation? Select <strong>all</strong> that apply.</p>
      stem: "<p>온실 기체는 적외선을 흡수해요. 분자의 진동 중 하나가 분자의 쌍극자 모멘트를 변화시킬 때만 분자가 적외선을 흡수할 수 있어요.</p><p>대기 중의 다음 기체 중 적외선을 흡수하는 것은 무엇인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p>",
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
        "극성 결합을 가진 분자는 무엇인가요?",
        // EN: A molecule does not need to be polar overall. It needs a vibration that changes its dipole moment.
        "분자 전체가 극성일 필요는 없어요. 쌍극자 모멘트를 변화시키는 진동이 있으면 돼요.",
      ],
      // EN: <p><span class="chem">CH<sub>4</sub><span></span></span>, <span class="chem">CO<sub>2</sub><span></span></span> and <span class="chem">H<sub>2</sub>O<span></span></span> all contain polar bonds. Some of their stretching and bending vibrations change the dipole moment, so they absorb infrared radiation. They are greenhouse gases.</p><p><span class="chem">CO<sub>2</sub><span></span></span> and <span class="chem">CH<sub>4</sub><span></span></span> are non-polar molecules overall, but when they bend or stretch unevenly a dipole appears. <span class="chem">N<sub>2</sub><span></span></span> and <span class="chem">O<sub>2</sub><span></span></span> have one non-polar bond each, so no vibration can change the dipole moment. That is why the two main gases in air are not greenhouse gases.</p>
      solution: "<p><span class=\"chem\">CH<sub>4</sub><span></span></span>, <span class=\"chem\">CO<sub>2</sub><span></span></span>, <span class=\"chem\">H<sub>2</sub>O<span></span></span>는 모두 극성 결합을 가져요. 이들의 신축 진동과 굽힘 진동 중 일부는 쌍극자 모멘트를 변화시키므로 적외선을 흡수해요. 이들은 온실 기체예요.</p><p><span class=\"chem\">CO<sub>2</sub><span></span></span>와 <span class=\"chem\">CH<sub>4</sub><span></span></span>는 분자 전체로는 무극성이지만, 굽히거나 고르지 않게 늘어날 때 쌍극자가 생겨요. <span class=\"chem\">N<sub>2</sub><span></span></span>와 <span class=\"chem\">O<sub>2</sub><span></span></span>는 무극성 결합이 하나씩만 있으므로 어떤 진동도 쌍극자 모멘트를 변화시킬 수 없어요. 그래서 공기의 주성분인 두 기체는 온실 기체가 아니에요.</p>",
      misconception: {
        // EN (option D): The two atoms in <span class="chem">N<sub>2</sub><span></span></span> are identical, so the bond is non-polar. Stretching it does not create a dipole, so nitrogen does not absorb infrared radiation.
        "3": "<span class=\"chem\">N<sub>2</sub><span></span></span>의 두 원자는 똑같으므로 결합이 무극성이에요. 결합이 늘어나도 쌍극자가 생기지 않으므로 질소는 적외선을 흡수하지 않아요.",
        // EN (option E): The two atoms in <span class="chem">O<sub>2</sub><span></span></span> are identical, so the bond is non-polar. Stretching it does not create a dipole, so oxygen does not absorb infrared radiation.
        "4": "<span class=\"chem\">O<sub>2</sub><span></span></span>의 두 원자는 똑같으므로 결합이 무극성이에요. 결합이 늘어나도 쌍극자가 생기지 않으므로 산소는 적외선을 흡수하지 않아요.",
      },
    },

    // ── s3-2h-q029 · short · challenge · AHL · Structure 3.2.9 · 3 marks
    "s3-2h-q029": {
      // EN: <p>Carbon dioxide makes up about 0.04% of the atmosphere and nitrogen about 78%.</p><p>Explain how carbon dioxide molecules cause a greenhouse effect, and why nitrogen molecules do not.</p>
      stem: "<p>이산화 탄소는 대기의 약 0.04%, 질소는 약 78%를 차지해요.</p><p>이산화 탄소 분자가 온실 효과를 일으키는 방식과 질소 분자는 그렇지 않은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: What kind of radiation does the Earth give out?
        "지구는 어떤 종류의 복사를 내보내나요?",
        // EN: What happens to the bonds of a molecule when it absorbs infrared radiation? What must change during the vibration?
        "분자가 적외선을 흡수하면 결합에는 어떤 일이 일어나나요? 진동하는 동안 무엇이 변해야 하나요?",
        // EN: Compare the bond in <span class="chem">N<sub>2</sub><span></span></span> with the bonds in <span class="chem">CO<sub>2</sub><span></span></span>.
        "<span class=\"chem\">N<sub>2</sub><span></span></span>의 결합과 <span class=\"chem\">CO<sub>2</sub><span></span></span>의 결합을 비교해 보세요.",
      ],
      // EN: <p>Three of the four points give full marks. A common weak answer says that <span class="chem">CO<sub>2</sub><span></span></span> "traps heat" or "reflects" radiation. The accurate words are: infrared radiation is <strong>absorbed</strong> by bond vibrations and then <strong>re-emitted</strong>. Do not say that <span class="chem">CO<sub>2</sub><span></span></span> is a polar molecule. It is non-polar overall, but its bonds are polar and its dipole moment changes as it vibrates.</p>
      solution: "<p>네 가지 요점 중 세 가지를 쓰면 만점이에요. 흔히 나오는 약한 답은 <span class=\"chem\">CO<sub>2</sub><span></span></span>가 “열을 가둔다”거나 복사를 “반사한다”고 쓰는 것이에요. 정확한 표현은 이래요: 적외선은 결합의 진동에 <strong>흡수</strong>되었다가 <strong>다시 방출</strong>돼요. <span class=\"chem\">CO<sub>2</sub><span></span></span>가 극성 분자라고 쓰지 마세요. 분자 전체로는 무극성이지만 결합은 극성이고, 진동할 때 쌍극자 모멘트가 변해요.</p>",
      // EN: <p>The warm surface of the Earth emits infrared radiation. The C=O bonds in <span class="chem">CO<sub>2</sub><span></span></span> are polar, and some vibrations of the molecule (bending and uneven stretching) change its dipole moment, so <span class="chem">CO<sub>2</sub><span></span></span> absorbs infrared radiation. The molecules then re-emit the radiation in all directions, so part of it returns to the surface and the atmosphere is warmed. <span class="chem">N<sub>2</sub><span></span></span> has a non-polar bond: its vibration does not change the dipole moment, so it does not absorb infrared radiation.</p>
      answer: "<p>따뜻한 지구 표면은 적외선을 방출해요. <span class=\"chem\">CO<sub>2</sub><span></span></span>의 C=O 결합은 극성이고, 분자의 일부 진동(굽힘 진동과 고르지 않은 신축 진동)이 쌍극자 모멘트를 변화시키므로 <span class=\"chem\">CO<sub>2</sub><span></span></span>는 적외선을 흡수해요. 그 뒤 분자는 복사를 모든 방향으로 다시 방출하므로 일부가 지표로 돌아가고 대기가 따뜻해져요. <span class=\"chem\">N<sub>2</sub><span></span></span>는 무극성 결합을 가져요. 진동해도 쌍극자 모멘트가 변하지 않으므로 적외선을 흡수하지 않아요.</p>",
      markscheme: [
        // EN: The Earth's surface emits infrared (long-wavelength) radiation.
        "지구 표면은 적외선(파장이 긴 복사)을 방출함.",
        // EN: CO₂ absorbs infrared radiation because its bonds are polar / its vibrations (stretching or bending) change the dipole moment of the molecule.
        "CO₂는 결합이 극성이기 때문에 / 진동(신축 또는 굽힘)이 분자의 쌍극자 모멘트를 변화시키기 때문에 적외선을 흡수함.",
        // EN: The absorbed radiation is re-emitted in all directions, so some returns to the Earth / less energy escapes to space.
        "흡수된 복사는 모든 방향으로 다시 방출되므로 일부가 지구로 돌아감 / 우주로 빠져나가는 에너지가 줄어듦.",
        // EN: N₂ has a non-polar bond / its vibration causes no change in dipole moment, so it does not absorb infrared radiation.
        "N₂는 무극성 결합을 가짐 / 진동해도 쌍극자 모멘트가 변하지 않으므로 적외선을 흡수하지 않음.",
      ],
    },

    // ── s3-2h-q030 · mcq · challenge · AHL · Structure 3.2.9 · 1 mark
    "s3-2h-q030": {
      // EN: <p>Three bottles contain propan-1-ol, propanoic acid and methyl ethanoate. The table lists the main infrared absorptions of each liquid, apart from C–H.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Main absorptions / cm<sup>−1</sup> (not including C–H)</caption><thead><tr><th scope="col">Liquid</th><th scope="col">Absorptions</th></tr></thead><tbody><tr><th scope="row">I</th><td>1745 (strong); 1240 (strong)</td></tr><tr><th scope="row">II</th><td>2500–3000 (strong, very broad); 1715 (strong); 1240 (strong)</td></tr><tr><th scope="row">III</th><td>3200–3500 (strong, broad); 1060 (strong)</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C–O</th><td>alcohols, esters, ethers</td><td>1050–1410</td><td>strong</td></tr><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><p>Which row identifies the three liquids?</p>
      stem: "<p>병 세 개에 propan-1-ol, propanoic acid, methyl ethanoate가 들어 있어요. 표는 C–H를 제외한 각 액체의 주요 적외선 흡수를 나타내요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>주요 흡수 / cm<sup>−1</sup> (C–H 제외)</caption><thead><tr><th scope=\"col\">액체</th><th scope=\"col\">흡수</th></tr></thead><tbody><tr><th scope=\"row\">I</th><td>1745 (강함); 1240 (강함)</td></tr><tr><th scope=\"row\">II</th><td>2500–3000 (강함, 매우 넓음); 1715 (강함); 1240 (강함)</td></tr><tr><th scope=\"row\">III</th><td>3200–3500 (강함, 넓음); 1060 (강함)</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C–O</th><td>알코올, 에스터, 에테르</td><td>1050–1410</td><td>강함</td></tr><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div><p>세 액체를 올바르게 찾은 줄은 무엇인가요?</p>",
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
        "C=O(1700–1750)부터 보세요. 어느 액체에 이것이 없나요?",
        // EN: Then use the two different O–H ranges to separate the acid from the alcohol.
        "그다음 서로 다른 두 O–H 범위를 이용해 산과 알코올을 구별하세요.",
      ],
      // EN: <ul><li>III has no C=O absorption. It has a broad O–H absorption at 3200–3600 cm<sup>−1</sup> and a C–O absorption: the alcohol, propan-1-ol.</li><li>II has C=O and the very broad O–H absorption at 2500–3000 cm<sup>−1</sup>: the carboxylic acid, propanoic acid.</li><li>I has C=O and C–O but no O–H absorption: the ester, methyl ethanoate.</li></ul>
      solution: "<ul><li>III에는 C=O 흡수가 없어요. 3200–3600 cm<sup>−1</sup>의 넓은 O–H 흡수와 C–O 흡수가 있어요. 알코올인 propan-1-ol이에요.</li><li>II에는 C=O 흡수와 2500–3000 cm<sup>−1</sup>의 매우 넓은 O–H 흡수가 있어요. 카복실산인 propanoic acid예요.</li><li>I에는 C=O와 C–O는 있지만 O–H 흡수는 없어요. 에스터인 methyl ethanoate예요.</li></ul>",
      misconception: {
        // EN (option B): Liquid I has no O–H absorption at all, so it cannot be the acid. Liquid II has the very broad acid O–H absorption, which an ester cannot give.
        "1": "액체 I에는 O–H 흡수가 전혀 없으므로 산일 수 없어요. 액체 II에는 산의 매우 넓은 O–H 흡수가 있는데, 에스터는 이런 흡수를 보일 수 없어요.",
        // EN (option C): The two O–H ranges have been swapped. The very broad absorption at 2500–3000 cm<sup>−1</sup> belongs to the carboxylic acid. An alcohol absorbs at 3200–3600 cm<sup>−1</sup> and has no C=O absorption.
        "2": "두 O–H 범위가 뒤바뀌었어요. 2500–3000 cm<sup>−1</sup>의 매우 넓은 흡수는 카복실산의 것이에요. 알코올은 3200–3600 cm<sup>−1</sup>에서 흡수하고 C=O 흡수가 없어요.",
        // EN (option D): Liquid I has a C=O absorption at 1745 cm<sup>−1</sup>, which an alcohol cannot give. Liquid III has no C=O absorption, so it cannot be an ester.
        "3": "액체 I에는 1745 cm<sup>−1</sup>의 C=O 흡수가 있는데, 알코올은 이런 흡수를 보일 수 없어요. 액체 III에는 C=O 흡수가 없으므로 에스터일 수 없어요.",
      },
    },

    // ── s3-2h-q031 · numeric · foundation · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q031": {
      // EN: <p>How many signals are there in the <sup>1</sup>H NMR spectrum of pentan-3-one, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>?</p>
      stem: "<p>pentan-3-one, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>의 <sup>1</sup>H NMR 스펙트럼에는 신호가 몇 개 있나요?</p>",
      hints: [
        // EN: Each signal comes from hydrogen atoms in one chemical environment.
        "각 신호는 한 화학적 환경에 있는 수소 원자들에서 나와요.",
        // EN: The molecule is symmetrical about the C=O group. Which hydrogen atoms match each other?
        "이 분자는 C=O기를 중심으로 대칭이에요. 어떤 수소 원자들이 서로 짝이 되나요?",
      ],
      // EN: <p>The molecule is symmetrical: the two ethyl groups are in identical positions.</p><ul><li>The six H atoms of the two <span class="chem">CH<sub>3</sub><span></span></span> groups are in one environment.</li><li>The four H atoms of the two <span class="chem">CH<sub>2</sub><span></span></span> groups are in a second environment.</li></ul><p>So there are <strong>2</strong> signals. The number of signals is not the number of H atoms (10) or the number of C atoms (5).</p>
      solution: "<p>이 분자는 대칭이에요. 두 에틸기가 똑같은 위치에 있어요.</p><ul><li>두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기의 H 원자 6개는 한 환경에 있어요.</li><li>두 <span class=\"chem\">CH<sub>2</sub><span></span></span>기의 H 원자 4개는 두 번째 환경에 있어요.</li></ul><p>따라서 신호는 <strong>2</strong>개예요. 신호의 수는 H 원자 수(10)나 C 원자 수(5)가 아니에요.</p>",
      // EN: signals
      unit: "신호",
    },

    // ── s3-2h-q032 · mcq · foundation · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q032": {
      // EN: <p>What is the ratio of the areas under the signals in the <sup>1</sup>H NMR spectrum of 2-chloropropane, <span class="chem">CH<sub>3</sub>CHClCH<sub>3</sub><span></span></span>?</p>
      stem: "<p>2-chloropropane, <span class=\"chem\">CH<sub>3</sub>CHClCH<sub>3</sub><span></span></span>의 <sup>1</sup>H NMR 스펙트럼에서 신호 아래 넓이의 비는 얼마인가요?</p>",
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
        "먼저 서로 다른 수소 환경의 수를 세세요.",
        // EN: Then count the hydrogen atoms in each environment.
        "그다음 각 환경에 있는 수소 원자의 수를 세세요.",
      ],
      // EN: <p>There are two environments: the six H atoms of the two equivalent <span class="chem">CH<sub>3</sub><span></span></span> groups, and the one H atom on the CHCl carbon. The area under each signal is proportional to the number of H atoms, so the ratio is <strong>6 : 1</strong>.</p>
      solution: "<p>환경은 두 가지예요. 동등한 두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기의 H 원자 6개, 그리고 CHCl 탄소에 있는 H 원자 1개예요. 각 신호 아래 넓이는 H 원자 수에 비례하므로 비는 <strong>6 : 1</strong>이에요.</p>",
      misconception: {
        // EN (option B): The two <span class="chem">CH<sub>3</sub><span></span></span> groups are in the same environment, because the molecule is symmetrical. They give one signal with area 6, not two signals.
        "1": "분자가 대칭이므로 두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기는 같은 환경에 있어요. 두 신호가 아니라 넓이가 6인 신호 하나를 만들어요.",
        // EN (option C): There are two <span class="chem">CH<sub>3</sub><span></span></span> groups in that environment, so six H atoms in total, not three.
        "2": "그 환경에는 <span class=\"chem\">CH<sub>3</sub><span></span></span>기가 두 개 있으므로 H 원자는 모두 3개가 아니라 6개예요.",
        // EN (option D): This is the ratio of carbon atoms in the two environments. The area under a signal depends on the number of hydrogen atoms.
        "3": "이것은 두 환경에 있는 탄소 원자 수의 비예요. 신호 아래 넓이는 수소 원자의 수에 따라 달라져요.",
      },
    },

    // ── s3-2h-q033 · numeric · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q033": {
      // EN: <p>How many signals are there in the <sup>1</sup>H NMR spectrum of 2-methylpropan-1-ol, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span>?</p>
      stem: "<p>2-methylpropan-1-ol, <span class=\"chem\">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH<span></span></span>의 <sup>1</sup>H NMR 스펙트럼에는 신호가 몇 개 있나요?</p>",
      hints: [
        // EN: Draw the structure. Are the two <span class="chem">CH<sub>3</sub><span></span></span> groups attached to the same carbon?
        "구조를 그려 보세요. 두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기는 같은 탄소에 붙어 있나요?",
        // EN: Do not forget the hydrogen atom of the OH group.
        "OH기의 수소 원자를 잊지 마세요.",
      ],
      // EN: <p>Count the environments one by one.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Hydrogen environments in 2-methylpropan-1-ol</caption><thead><tr><th scope="col">Environment</th><th scope="col">Number of H</th></tr></thead><tbody><tr><th scope="row">two equivalent CH<sub>3</sub> groups</th><td>6</td></tr><tr><th scope="row">CH</th><td>1</td></tr><tr><th scope="row">CH<sub>2</sub></th><td>2</td></tr><tr><th scope="row">OH</th><td>1</td></tr></tbody></table></div><p>There are <strong>4</strong> signals, with areas in the ratio 6 : 1 : 2 : 1. The two methyl groups are joined to the same carbon, so they are equivalent and give one signal.</p>
      solution: "<p>환경을 하나씩 세어 보세요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>2-methylpropan-1-ol의 수소 환경</caption><thead><tr><th scope=\"col\">환경</th><th scope=\"col\">H의 수</th></tr></thead><tbody><tr><th scope=\"row\">동등한 CH<sub>3</sub>기 두 개</th><td>6</td></tr><tr><th scope=\"row\">CH</th><td>1</td></tr><tr><th scope=\"row\">CH<sub>2</sub></th><td>2</td></tr><tr><th scope=\"row\">OH</th><td>1</td></tr></tbody></table></div><p>신호는 <strong>4</strong>개이고, 넓이의 비는 6 : 1 : 2 : 1이에요. 두 메틸기는 같은 탄소에 붙어 있으므로 동등하고, 신호 하나를 만들어요.</p>",
      // EN: signals
      unit: "신호",
    },

    // ── s3-2h-q034 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q034": {
      // EN: <p>An alcohol with the molecular formula <span class="chem">C<sub>4</sub>H<sub>10</sub>O<span></span></span> gives a <sup>1</sup>H NMR spectrum with two signals. The areas under the signals are in the ratio 9 : 1.</p><p>Which alcohol is it?</p>
      stem: "<p>분자식이 <span class=\"chem\">C<sub>4</sub>H<sub>10</sub>O<span></span></span>인 알코올의 <sup>1</sup>H NMR 스펙트럼에는 신호가 두 개 있어요. 신호 아래 넓이의 비는 9 : 1이에요.</p><p>이 알코올은 무엇인가요?</p>",
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
        "넓이 9는 같은 환경에 H 원자가 9개 있다는 뜻이에요. <span class=\"chem\">CH<sub>3</sub><span></span></span>기로 치면 몇 개인가요?",
        // EN: Which structure has three <span class="chem">CH<sub>3</sub><span></span></span> groups attached to one carbon?
        "한 탄소에 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 세 개가 붙어 있는 구조는 무엇인가요?",
      ],
      // EN: <p>Nine equivalent H atoms means three <span class="chem">CH<sub>3</sub><span></span></span> groups in identical positions. In 2-methylpropan-2-ol, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>, all three methyl groups are bonded to the same carbon. The tenth H atom is in the OH group. That gives two signals with areas 9 : 1.</p>
      solution: "<p>동등한 H 원자 9개는 똑같은 위치에 있는 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 세 개를 뜻해요. 2-methylpropan-2-ol, <span class=\"chem\">(CH<sub>3</sub>)<sub>3</sub>COH<span></span></span>에서는 세 메틸기가 모두 같은 탄소와 결합해 있어요. 열 번째 H 원자는 OH기에 있어요. 그래서 넓이가 9 : 1인 신호 두 개가 나와요.</p>",
      misconception: {
        // EN (option A): Butan-1-ol has five hydrogen environments (<span class="chem">CH<sub>3</sub><span></span></span>, three different <span class="chem">CH<sub>2</sub><span></span></span> groups and OH), so it gives five signals.
        "0": "Butan-1-ol은 수소 환경이 다섯 가지(<span class=\"chem\">CH<sub>3</sub><span></span></span>, 서로 다른 <span class=\"chem\">CH<sub>2</sub><span></span></span>기 세 개, OH)이므로 신호가 다섯 개예요.",
        // EN (option B): Butan-2-ol has five hydrogen environments (two different <span class="chem">CH<sub>3</sub><span></span></span> groups, <span class="chem">CH<sub>2</sub><span></span></span>, CH and OH), so it gives five signals.
        "1": "Butan-2-ol은 수소 환경이 다섯 가지(서로 다른 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 두 개, <span class=\"chem\">CH<sub>2</sub><span></span></span>, CH, OH)이므로 신호가 다섯 개예요.",
        // EN (option C): 2-methylpropan-1-ol has four hydrogen environments, with areas 6 : 1 : 2 : 1.
        "2": "2-methylpropan-1-ol은 수소 환경이 네 가지이고, 넓이는 6 : 1 : 2 : 1이에요.",
      },
    },

    // ── s3-2h-q035 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q035": {
      // EN: <p>Propanal has the structure <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>. In which chemical shift range does the signal of the hydrogen atom in the CHO group appear?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div>
      stem: "<p>Propanal의 구조는 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>예요. CHO기에 있는 수소 원자의 신호는 어느 화학적 이동 범위에 나타나나요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(21절): <sup>1</sup>H NMR 화학적 이동</caption><thead><tr><th scope=\"col\">양성자의 종류</th><th scope=\"col\">화학적 이동 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div>",
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
        "표에서 해당 수소는 굵은 글씨로 표시되어 있어요. 굵은 H가 C=O 탄소에 직접 결합한 줄을 찾으세요.",
      ],
      // EN: <p>The CHO hydrogen is bonded directly to the carbonyl carbon. The booklet row R–C(=O)–<b>H</b> gives <strong>9.4–10.0 ppm</strong>. The other two signals of propanal are the <span class="chem">CH<sub>2</sub><span></span></span> group next to C=O (2.2–2.7 ppm) and the <span class="chem">CH<sub>3</sub><span></span></span> group (0.9–1.0 ppm).</p>
      solution: "<p>CHO 수소는 카보닐 탄소에 직접 결합해 있어요. 부클릿의 R–C(=O)–<b>H</b> 줄은 <strong>9.4–10.0 ppm</strong>이에요. propanal의 나머지 두 신호는 C=O 옆의 <span class=\"chem\">CH<sub>2</sub><span></span></span>기(2.2–2.7 ppm)와 <span class=\"chem\">CH<sub>3</sub><span></span></span>기(0.9–1.0 ppm)예요.</p>",
      misconception: {
        // EN (option A): This is the range for H atoms on a carbon <strong>next to</strong> the C=O group. In propanal that is the <span class="chem">CH<sub>2</sub><span></span></span> group, not the CHO hydrogen.
        "0": "이것은 C=O기 <strong>옆</strong> 탄소에 있는 H 원자의 범위예요. propanal에서 그것은 CHO 수소가 아니라 <span class=\"chem\">CH<sub>2</sub><span></span></span>기예요.",
        // EN (option B): This range is for H atoms on a C=C double bond. The CHO hydrogen is on a C=O carbon.
        "1": "이 범위는 C=C 이중 결합에 있는 H 원자의 범위예요. CHO 수소는 C=O 탄소에 있어요.",
        // EN (option C): This row is for the O–H hydrogen of a carboxylic acid. In an aldehyde the hydrogen is bonded to the carbon of the C=O group, not to an oxygen atom.
        "2": "이 줄은 카복실산의 O–H 수소에 대한 것이에요. 알데하이드에서 수소는 산소 원자가 아니라 C=O기의 탄소에 결합해 있어요.",
      },
    },

    // ── s3-2h-q036 · mcq · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q036": {
      // EN: <p>The sketch shows the <sup>1</sup>H NMR spectrum of a compound, drawn without splitting, with the molecular formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub><span></span></span>. The number above each signal is its relative area.</p><p><svg class="q-fig" viewBox="0 0 300 150" width="300" height="150" style="max-width:100%;height:auto" role="img" aria-label="NMR sketch with a chemical shift axis from 12 ppm on the left to 0 ppm on the right. There are two signals of equal area: one at 3.7 ppm and one at 2.1 ppm."><path d="M12 116H288" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="288.0" y1="116" x2="288.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="288.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="265.0" y1="116" x2="265.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="242.0" y1="116" x2="242.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="242.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">2</text><line x1="219.0" y1="116" x2="219.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="196.0" y1="116" x2="196.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="196.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">4</text><line x1="173.0" y1="116" x2="173.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="150.0" y1="116" x2="150.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="150.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">6</text><line x1="127.0" y1="116" x2="127.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="104.0" y1="116" x2="104.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="104.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">8</text><line x1="81.0" y1="116" x2="81.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="58.0" y1="116" x2="58.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="58.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">10</text><line x1="35.0" y1="116" x2="35.0" y2="120" stroke="currentColor" stroke-width="1"/><line x1="12.0" y1="116" x2="12.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="12.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">12</text><text x="150" y="147" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text><line x1="202.9" y1="116" x2="202.9" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="202.9" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text><line x1="239.7" y1="116" x2="239.7" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="239.7" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text></svg></p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><p>Which compound gives this spectrum?</p>
      stem: "<p>이 그림은 분자식이 <span class=\"chem\">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub><span></span></span>인 화합물의 <sup>1</sup>H NMR 스펙트럼을 갈라짐 없이 그린 것이에요. 각 신호 위의 숫자는 상대 넓이예요.</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"NMR 그림. 화학적 이동 축은 왼쪽 12 ppm에서 오른쪽 0 ppm까지예요. 넓이가 같은 신호가 두 개 있어요. 하나는 3.7 ppm, 하나는 2.1 ppm이에요.\"><path d=\"M12 116H288\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"288.0\" y1=\"116\" x2=\"288.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"288.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"265.0\" y1=\"116\" x2=\"265.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"242.0\" y1=\"116\" x2=\"242.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"242.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"219.0\" y1=\"116\" x2=\"219.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"196.0\" y1=\"116\" x2=\"196.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"196.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"173.0\" y1=\"116\" x2=\"173.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"150.0\" y1=\"116\" x2=\"150.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"150.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">6</text><line x1=\"127.0\" y1=\"116\" x2=\"127.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"104.0\" y1=\"116\" x2=\"104.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"104.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">8</text><line x1=\"81.0\" y1=\"116\" x2=\"81.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"58.0\" y1=\"116\" x2=\"58.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"58.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">10</text><line x1=\"35.0\" y1=\"116\" x2=\"35.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"12.0\" y1=\"116\" x2=\"12.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"12.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">12</text><text x=\"150\" y=\"147\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">화학적 이동 / ppm</text><line x1=\"202.9\" y1=\"116\" x2=\"202.9\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"202.9\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text><line x1=\"239.7\" y1=\"116\" x2=\"239.7\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"239.7\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text></svg></p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(21절): <sup>1</sup>H NMR 화학적 이동</caption><thead><tr><th scope=\"col\">양성자의 종류</th><th scope=\"col\">화학적 이동 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><p>이 스펙트럼을 나타내는 화합물은 무엇인가요?</p>",
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
        "신호의 수를 세세요. 이 화합물에는 수소 환경이 몇 가지 있나요?",
        // EN: Equal areas and six H atoms in total means three H atoms in each environment.
        "넓이가 같고 H 원자가 모두 6개이면 각 환경에 H 원자가 3개씩 있다는 뜻이에요.",
        // EN: Use the shifts to decide what each <span class="chem">CH<sub>3</sub><span></span></span> group is joined to.
        "화학적 이동을 이용해 각 <span class=\"chem\">CH<sub>3</sub><span></span></span>기가 무엇과 이어져 있는지 판단하세요.",
      ],
      // EN: <p>Two signals of equal area, with six H atoms in total, means two different <span class="chem">CH<sub>3</sub><span></span></span> groups.</p><ul><li>2.1 ppm is in the range 2.0–2.5 ppm: H on a carbon next to the C=O of an ester, <span class="chem">CH<sub>3</sub><span></span></span>–C(=O)–O.</li><li>3.7 ppm is in the range 3.7–4.8 ppm: H on a carbon bonded to the O of an ester, C(=O)–O–<span class="chem">CH<sub>3</sub><span></span></span>.</li></ul><p>The compound is methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>. (The booklet rows show <span class="chem">CH<sub>2</sub><span></span></span>, but they also apply to <span class="chem">CH<sub>3</sub><span></span></span> groups in the same position.)</p>
      solution: "<p>넓이가 같은 신호 두 개, H 원자 모두 6개는 서로 다른 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 두 개를 뜻해요.</p><ul><li>2.1 ppm은 2.0–2.5 ppm 범위에 있어요. 에스터의 C=O 옆 탄소에 있는 H, 즉 <span class=\"chem\">CH<sub>3</sub><span></span></span>–C(=O)–O예요.</li><li>3.7 ppm은 3.7–4.8 ppm 범위에 있어요. 에스터의 O에 결합한 탄소에 있는 H, 즉 C(=O)–O–<span class=\"chem\">CH<sub>3</sub><span></span></span>예요.</li></ul><p>이 화합물은 methyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>예요. (부클릿의 줄에는 <span class=\"chem\">CH<sub>2</sub><span></span></span>로 나와 있지만, 같은 위치의 <span class=\"chem\">CH<sub>3</sub><span></span></span>기에도 적용돼요.)</p>",
      misconception: {
        // EN (option A): Propanoic acid has three hydrogen environments (areas 3 : 2 : 1), and its COOH hydrogen gives a signal at 9.0–13.0 ppm. The sketch has nothing there.
        "0": "Propanoic acid는 수소 환경이 세 가지(넓이 3 : 2 : 1)이고, COOH 수소는 9.0–13.0 ppm에서 신호를 만들어요. 그림에는 그곳에 아무것도 없어요.",
        // EN (option C): Ethyl methanoate has three hydrogen environments (H–C=O, <span class="chem">CH<sub>2</sub><span></span></span> and <span class="chem">CH<sub>3</sub><span></span></span>) with areas 1 : 2 : 3, so it gives three signals.
        "2": "Ethyl methanoate는 수소 환경이 세 가지(H–C=O, <span class=\"chem\">CH<sub>2</sub><span></span></span>, <span class=\"chem\">CH<sub>3</sub><span></span></span>)이고 넓이가 1 : 2 : 3이므로 신호가 세 개예요.",
        // EN (option D): This molecule has three hydrogen environments (<span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub><span></span></span> and OH) with areas 3 : 2 : 1, so it gives three signals.
        "3": "이 분자는 수소 환경이 세 가지(<span class=\"chem\">CH<sub>3</sub><span></span></span>, <span class=\"chem\">CH<sub>2</sub><span></span></span>, OH)이고 넓이가 3 : 2 : 1이므로 신호가 세 개예요.",
      },
    },

    // ── s3-2h-q037 · order · exam · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q037": {
      // EN: <p>Put these compounds in order of the number of signals in their <sup>1</sup>H NMR spectra, <strong>fewest signals first</strong>.</p>
      stem: "<p>다음 화합물을 <sup>1</sup>H NMR 스펙트럼의 신호 수에 따라 <strong>신호가 가장 적은 것부터</strong> 순서대로 나열하세요.</p>",
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
        "수소 원자가 아니라 수소 환경을 세세요.",
        // EN: Look for symmetry. Two <span class="chem">CH<sub>3</sub><span></span></span> groups in mirror-image positions give one signal.
        "대칭을 찾아보세요. 거울상 위치에 있는 두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기는 신호 하나를 만들어요.",
      ],
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Number of hydrogen environments</caption><thead><tr><th scope="col">Compound</th><th scope="col">Environments</th><th scope="col">Signals</th></tr></thead><tbody><tr><th scope="row">propanone</th><td>two equivalent CH<sub>3</sub></td><td>1</td></tr><tr><th scope="row">methyl ethanoate</th><td>CH<sub>3</sub>–C=O; O–CH<sub>3</sub></td><td>2</td></tr><tr><th scope="row">propan-2-ol</th><td>two equivalent CH<sub>3</sub>; CH; OH</td><td>3</td></tr><tr><th scope="row">butanal</th><td>CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO</td><td>4</td></tr><tr><th scope="row">butan-2-ol</th><td>CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub></td><td>5</td></tr></tbody></table></div><p>Propanone and propan-2-ol are symmetrical, so their two methyl groups are equivalent. In methyl ethanoate and butan-2-ol the two methyl groups are in different positions, so they give separate signals.</p>
      solution: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>수소 환경의 수</caption><thead><tr><th scope=\"col\">화합물</th><th scope=\"col\">환경</th><th scope=\"col\">신호</th></tr></thead><tbody><tr><th scope=\"row\">propanone</th><td>동등한 CH<sub>3</sub> 두 개</td><td>1</td></tr><tr><th scope=\"row\">methyl ethanoate</th><td>CH<sub>3</sub>–C=O; O–CH<sub>3</sub></td><td>2</td></tr><tr><th scope=\"row\">propan-2-ol</th><td>동등한 CH<sub>3</sub> 두 개; CH; OH</td><td>3</td></tr><tr><th scope=\"row\">butanal</th><td>CH<sub>3</sub>; CH<sub>2</sub>; CH<sub>2</sub>; CHO</td><td>4</td></tr><tr><th scope=\"row\">butan-2-ol</th><td>CH<sub>3</sub>; CH; OH; CH<sub>2</sub>; CH<sub>3</sub></td><td>5</td></tr></tbody></table></div><p>Propanone과 propan-2-ol은 대칭이므로 두 메틸기가 동등해요. methyl ethanoate와 butan-2-ol에서는 두 메틸기가 서로 다른 위치에 있으므로 따로따로 신호를 만들어요.</p>",
    },

    // ── s3-2h-q038 · mcq · challenge · AHL · Structure 3.2.10 · 1 mark
    "s3-2h-q038": {
      // EN: <p>A compound with the molecular formula <span class="chem">C<sub>5</sub>H<sub>10</sub>O<span></span></span> gives a <sup>1</sup>H NMR spectrum with two signals. On the integration trace, the step heights for the two signals are 2.7 cm and 1.8 cm.</p><p>Which compound is it?</p>
      stem: "<p>분자식이 <span class=\"chem\">C<sub>5</sub>H<sub>10</sub>O<span></span></span>인 화합물의 <sup>1</sup>H NMR 스펙트럼에는 신호가 두 개 있어요. 적분 곡선에서 두 신호의 계단 높이는 2.7 cm와 1.8 cm예요.</p><p>이 화합물은 무엇인가요?</p>",
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
        "계단 높이를 가장 간단한 정수비로 바꾸세요.",
        // EN: The molecule has ten H atoms. Share them out in that ratio.
        "이 분자에는 H 원자가 10개 있어요. 그 비율대로 나누세요.",
        // EN: Which structure has six H atoms in one environment and four in another?
        "한 환경에 H 원자 6개, 다른 환경에 4개가 있는 구조는 무엇인가요?",
      ],
      // EN: <div class="worked__math">2.7 : 1.8 = 1.5 : 1 = 3 : 2</div><div class="worked__math">10 H shared 3 : 2 → 6 H and 4 H</div><p>Pentan-3-one is symmetrical. Its two <span class="chem">CH<sub>3</sub><span></span></span> groups give one signal (6 H) and its two <span class="chem">CH<sub>2</sub><span></span></span> groups give the other (4 H). The step heights of an integration trace give the <strong>ratio</strong> of H atoms, so you must scale the ratio to the molecular formula.</p>
      solution: "<div class=\"worked__math\">2.7 : 1.8 = 1.5 : 1 = 3 : 2</div><div class=\"worked__math\">H 10개를 3 : 2로 나눔 → H 6개와 H 4개</div><p>Pentan-3-one은 대칭이에요. 두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기가 신호 하나(H 6개)를, 두 <span class=\"chem\">CH<sub>2</sub><span></span></span>기가 다른 신호(H 4개)를 만들어요. 적분 곡선의 계단 높이는 H 원자 수의 <strong>비</strong>를 알려 주므로, 그 비를 분자식에 맞게 늘려야 해요.</p>",
      misconception: {
        // EN (option A): Pentan-2-one has four hydrogen environments (areas 3 : 2 : 2 : 3), so it gives four signals.
        "0": "Pentan-2-one은 수소 환경이 네 가지(넓이 3 : 2 : 2 : 3)이므로 신호가 네 개예요.",
        // EN (option C): 3-methylbutan-2-one has three hydrogen environments (areas 3 : 1 : 6), so it gives three signals.
        "2": "3-methylbutan-2-one은 수소 환경이 세 가지(넓이 3 : 1 : 6)이므로 신호가 세 개예요.",
        // EN (option D): 2,2-dimethylpropanal does give two signals, but their areas are 9 : 1. The measured ratio is 3 : 2.
        "3": "2,2-dimethylpropanal은 신호가 두 개이지만 넓이가 9 : 1이에요. 측정된 비는 3 : 2예요.",
      },
    },

    // ── s3-2h-q039 · numeric · foundation · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q039": {
      // EN: <p>In a <sup>1</sup>H NMR spectrum, one signal is a triplet (three peaks).</p><p>How many hydrogen atoms are bonded to the carbon atom next to the hydrogen atoms that give this signal?</p>
      stem: "<p><sup>1</sup>H NMR 스펙트럼에서 한 신호가 삼중선(봉우리 3개)이에요.</p><p>이 신호를 만드는 수소 원자들 옆에 있는 탄소 원자에는 수소 원자가 몇 개 결합해 있나요?</p>",
      hints: [
        // EN: If the neighbouring carbon holds n hydrogen atoms, the signal is split into n + 1 peaks.
        "이웃 탄소에 수소 원자가 n개 있으면 신호는 n + 1개의 봉우리로 갈라져요.",
        // EN: Solve n + 1 = 3.
        "n + 1 = 3을 푸세요.",
      ],
      // EN: <p>A signal is split into n + 1 peaks, where n is the number of H atoms on the neighbouring carbon atom.</p><div class="worked__math">n + 1 = 3 &nbsp; so &nbsp; n = <b>2</b></div><p>A triplet tells you that the neighbouring carbon is a <span class="chem">CH<sub>2</sub><span></span></span> group. The splitting tells you about the neighbours, not about the hydrogen atoms that give the signal.</p>
      solution: "<p>신호는 n + 1개의 봉우리로 갈라지고, 여기서 n은 이웃 탄소 원자에 있는 H 원자의 수예요.</p><div class=\"worked__math\">n + 1 = 3 &nbsp; 따라서 &nbsp; n = <b>2</b></div><p>삼중선은 이웃 탄소가 <span class=\"chem\">CH<sub>2</sub><span></span></span>기라는 것을 알려 줘요. 갈라짐은 신호를 만드는 수소 원자가 아니라 이웃에 대해 알려 줘요.</p>",
      // EN: H atoms
      unit: "H 원자",
    },

    // ── s3-2h-q040 · mcq · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q040": {
      // EN: <p>Butanone has the structure <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>. What are the splitting patterns of its three signals in a <sup>1</sup>H NMR spectrum?</p>
      stem: "<p>Butanone의 구조는 <span class=\"chem\">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>예요. <sup>1</sup>H NMR 스펙트럼에서 세 신호의 갈라짐 무늬는 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: quartet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: triplet.
        "C=O 옆의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 단일선. <span class=\"chem\">CH<sub>2</sub><span></span></span>: 사중선. 에틸기의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 삼중선.",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: triplet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: quartet.
        "C=O 옆의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 단일선. <span class=\"chem\">CH<sub>2</sub><span></span></span>: 삼중선. 에틸기의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 사중선.",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: singlet. <span class="chem">CH<sub>2</sub><span></span></span>: triplet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: doublet.
        "C=O 옆의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 단일선. <span class=\"chem\">CH<sub>2</sub><span></span></span>: 삼중선. 에틸기의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 이중선.",
        // EN: <span class="chem">CH<sub>3</sub><span></span></span> next to C=O: triplet. <span class="chem">CH<sub>2</sub><span></span></span>: quartet. <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: triplet.
        "C=O 옆의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 삼중선. <span class=\"chem\">CH<sub>2</sub><span></span></span>: 사중선. 에틸기의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 삼중선.",
      ],
      hints: [
        // EN: For each group, look at the carbon atom(s) directly bonded to it. How many H atoms do they hold?
        "각 원자단마다 그 원자단에 직접 결합한 탄소 원자를 보세요. 그 탄소에는 H 원자가 몇 개 있나요?",
        // EN: Number of peaks = n + 1.
        "봉우리 수 = n + 1.",
      ],
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Splitting in butanone</caption><thead><tr><th scope="col">Group</th><th scope="col">H on the neighbouring carbon, n</th><th scope="col">Peaks, n + 1</th><th scope="col">Pattern</th></tr></thead><tbody><tr><th scope="row">CH<sub>3</sub> next to C=O</th><td>0</td><td>1</td><td>singlet</td></tr><tr><th scope="row">CH<sub>2</sub></th><td>3</td><td>4</td><td>quartet</td></tr><tr><th scope="row">CH<sub>3</sub> of ethyl</th><td>2</td><td>3</td><td>triplet</td></tr></tbody></table></div><p>A triplet (3 H) together with a quartet (2 H) is the pattern of an ethyl group.</p>
      solution: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>butanone의 갈라짐</caption><thead><tr><th scope=\"col\">원자단</th><th scope=\"col\">이웃 탄소의 H 수, n</th><th scope=\"col\">봉우리 수, n + 1</th><th scope=\"col\">무늬</th></tr></thead><tbody><tr><th scope=\"row\">C=O 옆의 CH<sub>3</sub></th><td>0</td><td>1</td><td>단일선</td></tr><tr><th scope=\"row\">CH<sub>2</sub></th><td>3</td><td>4</td><td>사중선</td></tr><tr><th scope=\"row\">에틸기의 CH<sub>3</sub></th><td>2</td><td>3</td><td>삼중선</td></tr></tbody></table></div><p>삼중선(H 3개)과 사중선(H 2개)이 함께 나타나면 에틸기의 무늬예요.</p>",
      misconception: {
        // EN (option B): This counts the H atoms on the <strong>same</strong> carbon and adds one. Splitting is caused by the H atoms on the <strong>neighbouring</strong> carbon.
        "1": "이것은 <strong>같은</strong> 탄소에 있는 H 원자를 세고 1을 더한 것이에요. 갈라짐은 <strong>이웃</strong> 탄소에 있는 H 원자 때문에 생겨요.",
        // EN (option C): This uses n peaks. The rule is n + 1: three neighbouring H atoms give four peaks, and two give three peaks.
        "2": "이것은 봉우리를 n개로 센 것이에요. 규칙은 n + 1이에요. 이웃한 H 원자 3개는 봉우리 4개를, 2개는 봉우리 3개를 만들어요.",
        // EN (option D): The carbon next to the first <span class="chem">CH<sub>3</sub><span></span></span> group is the C=O carbon, which holds no H atoms. The <span class="chem">CH<sub>2</sub><span></span></span> group is two carbons away, so it does not split this signal.
        "3": "첫 번째 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 옆의 탄소는 H 원자가 없는 C=O 탄소예요. <span class=\"chem\">CH<sub>2</sub><span></span></span>기는 탄소 두 개만큼 떨어져 있으므로 이 신호를 갈라지게 하지 않아요.",
      },
    },

    // ── s3-2h-q041 · mcq · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q041": {
      // EN: <p>Which describes the <sup>1</sup>H NMR spectrum of 1,1-dichloroethane, <span class="chem">CH<sub>3</sub>CHCl<sub>2</sub><span></span></span>?</p>
      stem: "<p>1,1-dichloroethane, <span class=\"chem\">CH<sub>3</sub>CHCl<sub>2</sub><span></span></span>의 <sup>1</sup>H NMR 스펙트럼을 옳게 나타낸 것은 무엇인가요?</p>",
      options: [
        // EN: One singlet
        "단일선 하나",
        // EN: A doublet (area 3) and a quartet (area 1)
        "이중선(넓이 3)과 사중선(넓이 1)",
        // EN: A quartet (area 3) and a doublet (area 1)
        "사중선(넓이 3)과 이중선(넓이 1)",
        // EN: A singlet (area 3) and a triplet (area 1)
        "단일선(넓이 3)과 삼중선(넓이 1)",
      ],
      hints: [
        // EN: There are two environments: <span class="chem">CH<sub>3</sub><span></span></span> (3 H) and <span class="chem">CHCl<sub>2</sub><span></span></span> (1 H).
        "환경은 두 가지예요: <span class=\"chem\">CH<sub>3</sub><span></span></span>(H 3개)와 <span class=\"chem\">CHCl<sub>2</sub><span></span></span>(H 1개).",
        // EN: Each signal is split by the H atoms on the other carbon. Use n + 1.
        "각 신호는 다른 탄소에 있는 H 원자 때문에 갈라져요. n + 1을 이용하세요.",
      ],
      // EN: <ul><li>The <span class="chem">CH<sub>3</sub><span></span></span> signal (area 3) has one H on the neighbouring carbon: 1 + 1 = 2 peaks, a <strong>doublet</strong>.</li><li>The CH signal (area 1) has three H atoms on the neighbouring carbon: 3 + 1 = 4 peaks, a <strong>quartet</strong>.</li></ul>
      solution: "<ul><li><span class=\"chem\">CH<sub>3</sub><span></span></span> 신호(넓이 3)는 이웃 탄소에 H가 하나 있어요. 1 + 1 = 2개의 봉우리, 즉 <strong>이중선</strong>이에요.</li><li>CH 신호(넓이 1)는 이웃 탄소에 H 원자가 세 개 있어요. 3 + 1 = 4개의 봉우리, 즉 <strong>사중선</strong>이에요.</li></ul>",
      misconception: {
        // EN (option A): One singlet would mean that all four H atoms are in the same environment. That is true for the isomer 1,2-dichloroethane, <span class="chem">ClCH<sub>2</sub>CH<sub>2</sub>Cl<span></span></span>, but here the <span class="chem">CH<sub>3</sub><span></span></span> and CH hydrogen atoms are different.
        "0": "단일선 하나라면 H 원자 4개가 모두 같은 환경에 있다는 뜻이에요. 이성질체인 1,2-dichloroethane, <span class=\"chem\">ClCH<sub>2</sub>CH<sub>2</sub>Cl<span></span></span>은 그렇지만, 여기서는 <span class=\"chem\">CH<sub>3</sub><span></span></span> 수소와 CH 수소가 서로 달라요.",
        // EN (option C): The patterns are on the wrong signals. This comes from counting the H atoms on the same carbon. The <span class="chem">CH<sub>3</sub><span></span></span> signal is split by the one H on the CH carbon.
        "2": "무늬가 신호에 거꾸로 붙었어요. 같은 탄소의 H 원자를 세어서 생긴 실수예요. <span class=\"chem\">CH<sub>3</sub><span></span></span> 신호는 CH 탄소에 있는 H 하나 때문에 갈라져요.",
        // EN (option D): This uses n peaks, not n + 1. One neighbouring H gives two peaks, and three neighbouring H atoms give four peaks.
        "3": "이것은 봉우리를 n + 1개가 아니라 n개로 센 것이에요. 이웃한 H 하나는 봉우리 2개를, 이웃한 H 원자 3개는 봉우리 4개를 만들어요.",
      },
    },

    // ── s3-2h-q042 · multi · exam · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q042": {
      // EN: <p>In which of these compounds is <strong>every</strong> signal in the <sup>1</sup>H NMR spectrum a singlet? Select <strong>all</strong> that apply. (Treat the signal of an O–H hydrogen as a singlet.)</p>
      stem: "<p>다음 화합물 중 <sup>1</sup>H NMR 스펙트럼의 <strong>모든</strong> 신호가 단일선인 것은 무엇인가요? 해당하는 것을 <strong>모두</strong> 고르세요. (O–H 수소의 신호는 단일선으로 보세요.)</p>",
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
        "단일선은 이웃 탄소 원자에 H 원자가 없다는 뜻이에요.",
        // EN: Look for <span class="chem">CH<sub>3</sub><span></span></span> groups whose only neighbour is a C=O carbon, an O atom, or a carbon with no H.
        "이웃이 C=O 탄소, O 원자, 또는 H가 없는 탄소뿐인 <span class=\"chem\">CH<sub>3</sub><span></span></span>기를 찾으세요.",
      ],
      // EN: <ul><li>Methyl ethanoate: one <span class="chem">CH<sub>3</sub><span></span></span> is next to the C=O carbon and the other is bonded to O. Neither has H atoms on a neighbouring carbon. Two singlets.</li><li>Propanone: both <span class="chem">CH<sub>3</sub><span></span></span> groups are next to the C=O carbon. One singlet.</li><li>2-methylpropan-2-ol: the three <span class="chem">CH<sub>3</sub><span></span></span> groups are bonded to a carbon with no H. One singlet for 9 H, and one singlet for OH.</li><li>Ethyl methanoate and ethanol each contain <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>, which gives a triplet and a quartet.</li></ul>
      solution: "<ul><li>Methyl ethanoate: 한 <span class=\"chem\">CH<sub>3</sub><span></span></span>는 C=O 탄소 옆에 있고, 다른 하나는 O와 결합해 있어요. 어느 쪽도 이웃 탄소에 H 원자가 없어요. 단일선 두 개.</li><li>Propanone: 두 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 모두 C=O 탄소 옆에 있어요. 단일선 하나.</li><li>2-methylpropan-2-ol: 세 <span class=\"chem\">CH<sub>3</sub><span></span></span>기가 H가 없는 탄소와 결합해 있어요. H 9개의 단일선 하나와 OH의 단일선 하나.</li><li>Ethyl methanoate와 ethanol은 각각 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>를 포함하므로 삼중선과 사중선이 나타나요.</li></ul>",
      misconception: {
        // EN (option B): Ethyl methanoate has an ethyl group. Its <span class="chem">CH<sub>2</sub><span></span></span> signal is a quartet and its <span class="chem">CH<sub>3</sub><span></span></span> signal is a triplet.
        "1": "Ethyl methanoate에는 에틸기가 있어요. <span class=\"chem\">CH<sub>2</sub><span></span></span> 신호는 사중선이고 <span class=\"chem\">CH<sub>3</sub><span></span></span> 신호는 삼중선이에요.",
        // EN (option D): Ethanol has an ethyl group. Its <span class="chem">CH<sub>3</sub><span></span></span> signal is a triplet and its <span class="chem">CH<sub>2</sub><span></span></span> signal is a quartet.
        "3": "Ethanol에는 에틸기가 있어요. <span class=\"chem\">CH<sub>3</sub><span></span></span> 신호는 삼중선이고 <span class=\"chem\">CH<sub>2</sub><span></span></span> 신호는 사중선이에요.",
      },
    },

    // ── s3-2h-q043 · short · challenge · AHL · Structure 3.2.11 · 4 marks
    "s3-2h-q043": {
      // EN: <p>Predict the <sup>1</sup>H NMR spectrum of ethyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>. Give the number of signals and, for each signal, the chemical shift range, the relative area and the splitting pattern.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">–C<b>H</b><sub>2</sub>–R</span></th><td>1.3–1.4</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr></tbody></table></div>
      stem: "<p>ethyl ethanoate, <span class=\"chem\">CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub><span></span></span>의 <sup>1</sup>H NMR 스펙트럼을 예측하시오 (predict). 신호의 수를 쓰고, 각 신호의 화학적 이동 범위, 상대 넓이, 갈라짐 무늬를 쓰세요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(21절): <sup>1</sup>H NMR 화학적 이동</caption><thead><tr><th scope=\"col\">양성자의 종류</th><th scope=\"col\">화학적 이동 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>2</sub>–R</span></th><td>1.3–1.4</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr></tbody></table></div>",
      hints: [
        // EN: Find the hydrogen environments first: there are two different <span class="chem">CH<sub>3</sub><span></span></span> groups and one <span class="chem">CH<sub>2</sub><span></span></span> group.
        "먼저 수소 환경을 찾으세요. 서로 다른 <span class=\"chem\">CH<sub>3</sub><span></span></span>기 두 개와 <span class=\"chem\">CH<sub>2</sub><span></span></span>기 하나가 있어요.",
        // EN: For shifts, check what each carbon is bonded to: the C=O carbon, the O atom, or only carbon.
        "화학적 이동은 각 탄소가 무엇과 결합해 있는지 확인하세요. C=O 탄소인지, O 원자인지, 탄소뿐인지요.",
        // EN: For splitting, count the H atoms on the neighbouring carbon and add one.
        "갈라짐은 이웃 탄소에 있는 H 원자를 세고 1을 더하세요.",
      ],
      // EN: <p>Work through one signal at a time and fill in a table: environment, shift, area, splitting.</p><ul><li><span class="chem">CH<sub>3</sub><span></span></span> next to the ester C=O: no H on the neighbouring carbon, so a singlet.</li><li>O–<span class="chem">CH<sub>2</sub><span></span></span>: three H on the neighbouring <span class="chem">CH<sub>3</sub><span></span></span>, so 3 + 1 = 4 peaks, a quartet.</li><li><span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group: two H on the neighbouring <span class="chem">CH<sub>2</sub><span></span></span>, so 2 + 1 = 3 peaks, a triplet. The O atom is not a carbon with H atoms, so nothing on the other side splits the <span class="chem">CH<sub>2</sub><span></span></span> signal further.</li></ul><p>The measured signals are at about 2.0, 4.1 and 1.3 ppm, so the last one is a little above its booklet range. In an exam, quote the booklet ranges. Real spectra vary a little: the booklet says its values can change with the solvent and conditions.</p>
      solution: "<p>신호를 하나씩 따져 보며 표를 채우세요: 환경, 화학적 이동, 넓이, 갈라짐.</p><ul><li>에스터의 C=O 옆에 있는 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 이웃 탄소에 H가 없으므로 단일선.</li><li>O–<span class=\"chem\">CH<sub>2</sub><span></span></span>: 이웃한 <span class=\"chem\">CH<sub>3</sub><span></span></span>에 H가 3개 있으므로 3 + 1 = 4개의 봉우리, 즉 사중선.</li><li>에틸기의 <span class=\"chem\">CH<sub>3</sub><span></span></span>: 이웃한 <span class=\"chem\">CH<sub>2</sub><span></span></span>에 H가 2개 있으므로 2 + 1 = 3개의 봉우리, 즉 삼중선. O 원자는 H 원자를 가진 탄소가 아니므로, 반대쪽에는 <span class=\"chem\">CH<sub>2</sub><span></span></span> 신호를 더 갈라지게 하는 것이 없어요.</li></ul><p>실제로 측정한 신호는 약 2.0, 4.1, 1.3 ppm에 있으므로, 마지막 신호는 부클릿 범위보다 조금 높아요. 시험에서는 부클릿의 범위를 쓰세요. 실제 스펙트럼은 조금씩 달라요. 부클릿에도 값이 용매와 조건에 따라 달라질 수 있다고 나와 있어요.</p>",
      // EN: <div class="table-scroll" tabindex="0"><table class="data"><caption>Predicted spectrum of ethyl ethanoate (three signals)</caption><thead><tr><th scope="col">Hydrogen atoms</th><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">C<b>H</b><sub>3</sub>–C(=O)–O</th><td>2.0–2.5</td><td>3</td><td>singlet</td></tr><tr><th scope="row">O–C<b>H</b><sub>2</sub></th><td>3.7–4.8</td><td>2</td><td>quartet</td></tr><tr><th scope="row">C<b>H</b><sub>3</sub> of ethyl</th><td>0.9–1.0</td><td>3</td><td>triplet</td></tr></tbody></table></div>
      answer: "<div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>ethyl ethanoate의 예상 스펙트럼(신호 세 개)</caption><thead><tr><th scope=\"col\">수소 원자</th><th scope=\"col\">화학적 이동 / ppm</th><th scope=\"col\">넓이</th><th scope=\"col\">갈라짐</th></tr></thead><tbody><tr><th scope=\"row\">C<b>H</b><sub>3</sub>–C(=O)–O</th><td>2.0–2.5</td><td>3</td><td>단일선</td></tr><tr><th scope=\"row\">O–C<b>H</b><sub>2</sub></th><td>3.7–4.8</td><td>2</td><td>사중선</td></tr><tr><th scope=\"row\">에틸기의 C<b>H</b><sub>3</sub></th><td>0.9–1.0</td><td>3</td><td>삼중선</td></tr></tbody></table></div>",
      markscheme: [
        // EN: Three signals.
        "신호 3개.",
        // EN: Chemical shifts: 2.0–2.5 ppm (CH₃ next to C=O of the ester), 3.7–4.8 ppm (O–CH₂) and 0.9–1.0 ppm (CH₃ of ethyl). All three needed.
        "화학적 이동: 2.0–2.5 ppm(에스터의 C=O 옆 CH₃), 3.7–4.8 ppm(O–CH₂), 0.9–1.0 ppm(에틸기의 CH₃). 세 가지 모두 필요함.",
        // EN: Relative areas 3 : 2 : 3, matched to the correct groups.
        "상대 넓이 3 : 2 : 3, 올바른 원자단에 맞게 짝지음.",
        // EN: Splitting: singlet (CH₃CO), quartet (OCH₂), triplet (CH₃ of ethyl). Accept 1, 4 and 3 peaks.
        "갈라짐: 단일선(CH₃CO), 사중선(OCH₂), 삼중선(에틸기의 CH₃). 봉우리 1개, 4개, 3개도 인정.",
      ],
    },

    // ── s3-2h-q044 · mcq · challenge · AHL · Structure 3.2.11 · 1 mark
    "s3-2h-q044": {
      // EN: <p>The sketch and table show the <sup>1</sup>H NMR spectrum of a compound with the molecular formula <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub><span></span></span>. The number above each signal is its relative area.</p><p><svg class="q-fig" viewBox="0 0 300 150" width="300" height="150" style="max-width:100%;height:auto" role="img" aria-label="NMR sketch with a chemical shift axis from 5 ppm on the left to 0 ppm on the right. A single peak of area 3 at 3.7 ppm, a group of four peaks of area 2 at 2.3 ppm, and a group of three peaks of area 3 at 1.0 ppm."><path d="M12 116H288" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="288.0" y1="116" x2="288.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="288.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="232.8" y1="116" x2="232.8" y2="120" stroke="currentColor" stroke-width="1"/><text x="232.8" y="132" text-anchor="middle" font-size="11" fill="currentColor">1</text><line x1="177.6" y1="116" x2="177.6" y2="120" stroke="currentColor" stroke-width="1"/><text x="177.6" y="132" text-anchor="middle" font-size="11" fill="currentColor">2</text><line x1="122.4" y1="116" x2="122.4" y2="120" stroke="currentColor" stroke-width="1"/><text x="122.4" y="132" text-anchor="middle" font-size="11" fill="currentColor">3</text><line x1="67.2" y1="116" x2="67.2" y2="120" stroke="currentColor" stroke-width="1"/><text x="67.2" y="132" text-anchor="middle" font-size="11" fill="currentColor">4</text><line x1="12.0" y1="116" x2="12.0" y2="120" stroke="currentColor" stroke-width="1"/><text x="12.0" y="132" text-anchor="middle" font-size="11" fill="currentColor">5</text><text x="150" y="147" text-anchor="middle" font-size="11" fill="currentColor">chemical shift / ppm</text><line x1="83.8" y1="116" x2="83.8" y2="28.0" stroke="currentColor" stroke-width="1.8"/><text x="83.8" y="23.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text><line x1="153.5" y1="116" x2="153.5" y2="108.7" stroke="currentColor" stroke-width="1.8"/><line x1="158.5" y1="116" x2="158.5" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="163.5" y1="116" x2="163.5" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="168.5" y1="116" x2="168.5" y2="108.7" stroke="currentColor" stroke-width="1.8"/><text x="161.0" y="89.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">2</text><line x1="227.8" y1="116" x2="227.8" y2="94.0" stroke="currentColor" stroke-width="1.8"/><line x1="232.8" y1="116" x2="232.8" y2="72.0" stroke="currentColor" stroke-width="1.8"/><line x1="237.8" y1="116" x2="237.8" y2="94.0" stroke="currentColor" stroke-width="1.8"/><text x="232.8" y="67.0" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">3</text></svg></p><div class="table-scroll" tabindex="0"><table class="data"><caption>Signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">3.7</th><td>3</td><td>singlet</td></tr><tr><th scope="row">2.3</th><td>2</td><td>quartet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr></tbody></table></div><p>Which compound is it?</p>
      stem: "<p>그림과 표는 분자식이 <span class=\"chem\">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub><span></span></span>인 화합물의 <sup>1</sup>H NMR 스펙트럼을 나타내요. 각 신호 위의 숫자는 상대 넓이예요.</p><p><svg class=\"q-fig\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"NMR 그림. 화학적 이동 축은 왼쪽 5 ppm에서 오른쪽 0 ppm까지예요. 3.7 ppm에 넓이 3인 봉우리 하나, 2.3 ppm에 넓이 2인 봉우리 4개 묶음, 1.0 ppm에 넓이 3인 봉우리 3개 묶음이 있어요.\"><path d=\"M12 116H288\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"288.0\" y1=\"116\" x2=\"288.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"288.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"232.8\" y1=\"116\" x2=\"232.8\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.8\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">1</text><line x1=\"177.6\" y1=\"116\" x2=\"177.6\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"177.6\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"122.4\" y1=\"116\" x2=\"122.4\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"122.4\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">3</text><line x1=\"67.2\" y1=\"116\" x2=\"67.2\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"67.2\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"12.0\" y1=\"116\" x2=\"12.0\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"12.0\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">5</text><text x=\"150\" y=\"147\" text-anchor=\"middle\" font-size=\"11\" fill=\"currentColor\">화학적 이동 / ppm</text><line x1=\"83.8\" y1=\"116\" x2=\"83.8\" y2=\"28.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"83.8\" y=\"23.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text><line x1=\"153.5\" y1=\"116\" x2=\"153.5\" y2=\"108.7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"158.5\" y1=\"116\" x2=\"158.5\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"163.5\" y1=\"116\" x2=\"163.5\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"168.5\" y1=\"116\" x2=\"168.5\" y2=\"108.7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"161.0\" y=\"89.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">2</text><line x1=\"227.8\" y1=\"116\" x2=\"227.8\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"232.8\" y1=\"116\" x2=\"232.8\" y2=\"72.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><line x1=\"237.8\" y1=\"116\" x2=\"237.8\" y2=\"94.0\" stroke=\"currentColor\" stroke-width=\"1.8\"/><text x=\"232.8\" y=\"67.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"currentColor\">3</text></svg></p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>신호</caption><thead><tr><th scope=\"col\">화학적 이동 / ppm</th><th scope=\"col\">넓이</th><th scope=\"col\">갈라짐</th></tr></thead><tbody><tr><th scope=\"row\">3.7</th><td>3</td><td>단일선</td></tr><tr><th scope=\"row\">2.3</th><td>2</td><td>사중선</td></tr><tr><th scope=\"row\">1.0</th><td>3</td><td>삼중선</td></tr></tbody></table></div><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(21절): <sup>1</sup>H NMR 화학적 이동</caption><thead><tr><th scope=\"col\">양성자의 종류</th><th scope=\"col\">화학적 이동 / ppm</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope=\"row\"><span class=\"chem\">RO–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.0–2.5</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–C<b>H</b><sub>2</sub>–</span></th><td>3.7–4.8</td></tr><tr><th scope=\"row\"><span class=\"chem\">R–C(=O)–O–<b>H</b></span></th><td>9.0–13.0</td></tr></tbody></table></div><p>이 화합물은 무엇인가요?</p>",
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
        "넓이 3인 삼중선과 넓이 2인 사중선은 에틸기 <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>예요.",
        // EN: The singlet of area 3 is a <span class="chem">CH<sub>3</sub><span></span></span> group with no H on the neighbouring atom.
        "넓이 3인 단일선은 이웃 원자에 H가 없는 <span class=\"chem\">CH<sub>3</sub><span></span></span>기예요.",
        // EN: Now use the shifts. Which group is bonded to O (3.7–4.8 ppm) and which is next to C=O (2.0–2.5 ppm)?
        "이제 화학적 이동을 이용하세요. 어느 원자단이 O와 결합해 있고(3.7–4.8 ppm), 어느 원자단이 C=O 옆에 있나요(2.0–2.5 ppm)?",
      ],
      // EN: <ul><li>Triplet (3 H) and quartet (2 H): an ethyl group.</li><li>The quartet is at 2.3 ppm, in the range 2.0–2.5 ppm. So the <span class="chem">CH<sub>2</sub><span></span></span> is next to the C=O of an ester: <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>–C(=O)–O.</li><li>The singlet (3 H) is at 3.7 ppm, in the range 3.7–4.8 ppm. So this <span class="chem">CH<sub>3</sub><span></span></span> is bonded to the ester oxygen: O–<span class="chem">CH<sub>3</sub><span></span></span>.</li></ul><p>The compound is methyl propanoate, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>. The triplet at 1.0 ppm is in the range 0.9–1.0 ppm: the <span class="chem">CH<sub>3</sub><span></span></span> of the ethyl group.</p>
      solution: "<ul><li>삼중선(H 3개)과 사중선(H 2개): 에틸기.</li><li>사중선은 2.3 ppm으로 2.0–2.5 ppm 범위에 있어요. 따라서 <span class=\"chem\">CH<sub>2</sub><span></span></span>는 에스터의 C=O 옆에 있어요: <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub><span></span></span>–C(=O)–O.</li><li>단일선(H 3개)은 3.7 ppm으로 3.7–4.8 ppm 범위에 있어요. 따라서 이 <span class=\"chem\">CH<sub>3</sub><span></span></span>는 에스터의 산소와 결합해 있어요: O–<span class=\"chem\">CH<sub>3</sub><span></span></span>.</li></ul><p>이 화합물은 methyl propanoate, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub><span></span></span>예요. 1.0 ppm의 삼중선은 0.9–1.0 ppm 범위에 있어요. 에틸기의 <span class=\"chem\">CH<sub>3</sub><span></span></span>예요.</p>",
      misconception: {
        // EN (option A): Ethyl ethanoate also gives a singlet, a quartet and a triplet, but in different places. Its quartet (O–<span class="chem">CH<sub>2</sub><span></span></span>) would be at 3.7–4.8 ppm and its singlet (<span class="chem">CH<sub>3</sub><span></span></span> next to C=O) at 2.0–2.5 ppm. Here they are the other way round.
        "0": "Ethyl ethanoate도 단일선, 사중선, 삼중선을 보이지만 위치가 달라요. 사중선(O–<span class=\"chem\">CH<sub>2</sub><span></span></span>)은 3.7–4.8 ppm에, 단일선(C=O 옆의 <span class=\"chem\">CH<sub>3</sub><span></span></span>)은 2.0–2.5 ppm에 있을 거예요. 여기서는 그 반대예요.",
        // EN (option C): Butanoic acid has four hydrogen environments, and its COOH hydrogen would give a signal at 9.0–13.0 ppm.
        "2": "Butanoic acid는 수소 환경이 네 가지이고, COOH 수소는 9.0–13.0 ppm에서 신호를 만들 거예요.",
        // EN (option D): Propyl methanoate has four hydrogen environments (H–C=O and three groups in the propyl chain), so it would give four signals.
        "3": "Propyl methanoate는 수소 환경이 네 가지(H–C=O와 프로필 사슬의 원자단 세 개)이므로 신호가 네 개일 거예요.",
      },
    },

    // ── s3-2h-q045 · mcq · foundation · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q045": {
      // EN: <p>Three techniques are often used together to find the structure of an organic compound. Which row matches each technique with the main information it gives?</p>
      stem: "<p>유기 화합물의 구조를 알아낼 때는 세 가지 기법을 함께 쓰는 경우가 많아요. 각 기법과 그 기법이 주는 주요 정보를 옳게 짝지은 줄은 무엇인가요?</p>",
      options: [
        // EN: Mass spectrometry: relative molecular mass and fragments. Infrared: bonds present. <sup>1</sup>H NMR: hydrogen environments.
        "질량 분석법: 상대 분자 질량과 조각. 적외선: 존재하는 결합. <sup>1</sup>H NMR: 수소 환경.",
        // EN: Mass spectrometry: bonds present. Infrared: relative molecular mass and fragments. <sup>1</sup>H NMR: hydrogen environments.
        "질량 분석법: 존재하는 결합. 적외선: 상대 분자 질량과 조각. <sup>1</sup>H NMR: 수소 환경.",
        // EN: Mass spectrometry: relative molecular mass and fragments. Infrared: hydrogen environments. <sup>1</sup>H NMR: bonds present.
        "질량 분석법: 상대 분자 질량과 조각. 적외선: 수소 환경. <sup>1</sup>H NMR: 존재하는 결합.",
        // EN: Mass spectrometry: hydrogen environments. Infrared: bonds present. <sup>1</sup>H NMR: relative molecular mass and fragments.
        "질량 분석법: 수소 환경. 적외선: 존재하는 결합. <sup>1</sup>H NMR: 상대 분자 질량과 조각.",
      ],
      hints: [
        // EN: Think about the horizontal axis of each spectrum: m/z, wavenumber, chemical shift.
        "각 스펙트럼의 가로축을 생각해 보세요: m/z, 파수, 화학적 이동.",
      ],
      // EN: <ul><li><strong>Mass spectrometry:</strong> the molecular ion gives M<sub>r</sub>, and the fragments show which groups can break off.</li><li><strong>Infrared spectroscopy:</strong> the absorptions show which bonds, and so which functional groups, are present.</li><li><strong><sup>1</sup>H NMR:</strong> the number of signals, their shifts, areas and splitting show the hydrogen environments.</li></ul><p>No single technique gives the whole structure. Together they do.</p>
      solution: "<ul><li><strong>질량 분석법:</strong> 분자 이온은 M<sub>r</sub>을 알려 주고, 조각은 어떤 원자단이 떨어져 나갈 수 있는지 보여 줘요.</li><li><strong>적외선 분광법:</strong> 흡수는 어떤 결합, 즉 어떤 작용기가 있는지 보여 줘요.</li><li><strong><sup>1</sup>H NMR:</strong> 신호의 수, 화학적 이동, 넓이, 갈라짐은 수소 환경을 보여 줘요.</li></ul><p>한 가지 기법만으로는 전체 구조를 알 수 없어요. 함께 쓰면 알 수 있어요.</p>",
      misconception: {
        // EN (option B): Mass spectrometry and infrared are swapped. A mass spectrum has m/z on its axis, so it gives masses. An infrared spectrum shows which bonds absorb.
        "1": "질량 분석법과 적외선이 뒤바뀌었어요. 질량 스펙트럼의 축은 m/z이므로 질량을 알려 줘요. 적외선 스펙트럼은 어떤 결합이 흡수하는지 보여 줘요.",
        // EN (option C): Infrared and NMR are swapped. Infrared absorptions come from bonds that vibrate. NMR signals come from hydrogen nuclei in different environments.
        "2": "적외선과 NMR이 뒤바뀌었어요. 적외선 흡수는 진동하는 결합에서 나와요. NMR 신호는 서로 다른 환경에 있는 수소 원자핵에서 나와요.",
        // EN (option D): Mass spectrometry and NMR are swapped. The molecular ion peak in a mass spectrum gives the relative molecular mass.
        "3": "질량 분석법과 NMR이 뒤바뀌었어요. 질량 스펙트럼의 분자 이온 봉우리는 상대 분자 질량을 알려 줘요.",
      },
    },

    // ── s3-2h-q046 · numeric · exam · AHL · Structure 3.2.12 · 2 marks
    "s3-2h-q046": {
      // EN: <p>A compound contains 54.5% carbon, 9.2% hydrogen and 36.3% oxygen by mass. Its mass spectrum has the molecular ion peak at m/z 88.</p><p>How many carbon atoms are there in one molecule of the compound?</p>
      stem: "<p>어떤 화합물은 질량으로 탄소 54.5%, 수소 9.2%, 산소 36.3%를 포함해요. 이 화합물의 질량 스펙트럼에서 분자 이온 봉우리는 m/z 88에 있어요.</p><p>이 화합물의 분자 하나에는 탄소 원자가 몇 개 있나요?</p>",
      hints: [
        // EN: Find the empirical formula first: divide each percentage by the relative atomic mass, then divide by the smallest result.
        "먼저 실험식을 구하세요. 각 백분율을 상대 원자 질량으로 나눈 다음, 가장 작은 값으로 나누세요.",
        // EN: Work out the mass of one empirical formula unit.
        "실험식 단위 하나의 질량을 구하세요.",
        // EN: Compare it with 88. How many empirical units fit into the molecule?
        "그것을 88과 비교하세요. 분자 안에 실험식 단위가 몇 개 들어가나요?",
      ],
      // EN: <p>Step 1: empirical formula (in 100 g of compound).</p><div class="worked__math">C: 54.5 ÷ 12.01 = 4.54 mol</div><div class="worked__math">H: 9.2 ÷ 1.01 = 9.11 mol</div><div class="worked__math">O: 36.3 ÷ 16.00 = 2.27 mol</div><div class="worked__math">ratio C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O</div><p>Step 2: molecular formula.</p><div class="worked__math">empirical mass = 2(12.01) + 4(1.01) + 16.00 = 44.06</div><div class="worked__math">88 ÷ 44.06 ≈ 2</div><div class="worked__math">molecular formula = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></div><p>One molecule contains <strong>4</strong> carbon atoms.</p>
      solution: "<p>1단계: 실험식(화합물 100 g 기준).</p><div class=\"worked__math\">C: 54.5 ÷ 12.01 = 4.54 mol</div><div class=\"worked__math\">H: 9.2 ÷ 1.01 = 9.11 mol</div><div class=\"worked__math\">O: 36.3 ÷ 16.00 = 2.27 mol</div><div class=\"worked__math\">비 C : H : O = 2.00 : 4.01 : 1 → C<sub>2</sub>H<sub>4</sub>O</div><p>2단계: 분자식.</p><div class=\"worked__math\">실험식 질량 = 2(12.01) + 4(1.01) + 16.00 = 44.06</div><div class=\"worked__math\">88 ÷ 44.06 ≈ 2</div><div class=\"worked__math\">분자식 = C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></div><p>분자 하나에는 탄소 원자가 <strong>4</strong>개 있어요.</p>",
      // EN: C atoms
      unit: "C 원자",
    },

    // ── s3-2h-q047 · mcq · exam · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q047": {
      // EN: <p>Data for an unknown compound:</p><ul><li>Mass spectrum: molecular ion at m/z 74.</li><li>Infrared: strong, very broad absorption at 2500–3000 cm<sup>−1</sup>; strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: three signals with areas in the ratio 3 : 2 : 1.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><p>Which compound fits all the data?</p>
      stem: "<p>미지 화합물의 자료:</p><ul><li>질량 스펙트럼: 분자 이온이 m/z 74에 있음.</li><li>적외선: 2500–3000 cm<sup>−1</sup>에서 강하고 매우 넓은 흡수, 1715 cm<sup>−1</sup>에서 강한 흡수.</li><li><sup>1</sup>H NMR: 넓이의 비가 3 : 2 : 1인 신호 세 개.</li></ul><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>데이터 부클릿(20절): 적외선 흡수 범위</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">유기 분자의 종류</th><th scope=\"col\">파수 / cm<sup>−1</sup></th><th scope=\"col\">세기</th></tr></thead><tbody><tr><th scope=\"row\">C=O</th><td>알데하이드, 케톤, 카복실산, 에스터</td><td>1700–1750</td><td>강함</td></tr><tr><th scope=\"row\">O–H</th><td>카복실산(수소 결합 있음)</td><td>2500–3000</td><td>강함, 매우 넓음</td></tr><tr><th scope=\"row\">O–H</th><td>알코올과 페놀(수소 결합 있음)</td><td>3200–3600</td><td>강함, 넓음</td></tr></tbody></table></div><p>모든 자료에 맞는 화합물은 무엇인가요?</p>",
      options: [
        // EN: butan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "butan-1-ol, <span class=\"chem\">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>",
        // EN: methyl ethanoate, <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub><span></span></span>
        "",
        // EN: ethyl methanoate, <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "",
        // EN: propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH<span></span></span>
        "",
      ],
      hints: [
        // EN: All four options have M<sub>r</sub> = 74, so the mass spectrum alone cannot decide.
        "",
        // EN: Use the infrared data to find the functional group.
        "",
        // EN: Then check the number of NMR signals.
        "",
      ],
      // EN: <ul><li>m/z 74 fits all four compounds.</li><li>Infrared: C=O (1700–1750 cm<sup>−1</sup>) and the very broad O–H of a carboxylic acid (2500–3000 cm<sup>−1</sup>). The compound has a –COOH group.</li><li>NMR: propanoic acid has three environments, <span class="chem">CH<sub>3</sub><span></span></span>, <span class="chem">CH<sub>2</sub><span></span></span> and COOH, with areas 3 : 2 : 1.</li></ul><p>The compound is propanoic acid. Each technique removes some of the options. Use all of them.</p>
      solution: "",
      misconception: {
        // EN (option A): Butan-1-ol does have M<sub>r</sub> = 74, but it has no C=O bond, its O–H absorption is at 3200–3600 cm<sup>−1</sup>, and it gives five NMR signals.
        "0": "",
        // EN (option B): Methyl ethanoate has M<sub>r</sub> = 74 and a C=O bond, but no O–H bond, and it gives only two NMR signals.
        "1": "",
        // EN (option C): Ethyl methanoate has M<sub>r</sub> = 74, a C=O bond and three signals in the ratio 1 : 2 : 3. But it has no O–H bond, so it cannot give the very broad absorption at 2500–3000 cm<sup>−1</sup>.
        "2": "",
      },
    },

    // ── s3-2h-q048 · mcq · challenge · AHL · Structure 3.2.12 · 1 mark
    "s3-2h-q048": {
      // EN: <p>A compound has the molecular formula <span class="chem">C<sub>4</sub>H<sub>8</sub>O<span></span></span>.</p><ul><li>Mass spectrum: peaks at m/z 72, 57 and 43 (tallest).</li><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>; no absorption above 3100 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption><sup>1</sup>H NMR signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">2.5</th><td>2</td><td>quartet</td></tr><tr><th scope="row">2.2</th><td>3</td><td>singlet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–C<b>H</b><sub>2</sub>–</span></th><td>2.2–2.7</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr><tr><th scope="row"><span class="chem">–CH=C<b>H</b><sub>2</sub></span></th><td>4.5–6.0</td></tr><tr><th scope="row"><span class="chem">R–C(=O)–<b>H</b></span></th><td>9.4–10.0</td></tr></tbody></table></div><p>Which compound is it?</p>
      stem: "",
      options: [
        // EN: butanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO<span></span></span>
        "",
        // EN: butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>
        "",
        // EN: 2-methylpropanal, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCHO<span></span></span>
        "",
        // EN: but-3-en-1-ol, <span class="chem">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>OH<span></span></span>
        "",
      ],
      hints: [
        // EN: Infrared first: which functional group is present, and which is ruled out?
        "",
        // EN: In the NMR data, a triplet (3 H) with a quartet (2 H) is an ethyl group. What is the singlet (3 H)?
        "",
        // EN: Check with the mass spectrum: 72 − 57 and 72 − 43.
        "",
      ],
      // EN: <ul><li><strong>Infrared:</strong> 1715 cm<sup>−1</sup> is C=O. No absorption at 3200–3600 cm<sup>−1</sup>, so there is no O–H. The compound is an aldehyde or a ketone.</li><li><strong>NMR:</strong> no signal at 9.4–10.0 ppm, so it is not an aldehyde. Triplet (3 H) + quartet (2 H) = <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>. Singlet (3 H) = <span class="chem">CH<sub>3</sub><span></span></span> with no H on the neighbouring carbon. The signals at 2.2 and 2.5 ppm are in the range 2.2–2.7 ppm: H atoms on carbons next to C=O.</li><li><strong>Mass spectrum:</strong> 72 − 57 = 15, loss of •<span class="chem">CH<sub>3</sub><span></span></span>. 72 − 43 = 29, loss of •<span class="chem">CH<sub>2</sub>CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span>.</li></ul><p>The compound is butanone, <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub><span></span></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): Butanal has a C=O bond, but it has four hydrogen environments, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.
        "0": "",
        // EN (option C): 2-methylpropanal has three signals, but their areas are 6 : 1 : 1, and its CHO hydrogen would give a signal at 9.4–10.0 ppm.
        "2": "",
        // EN (option D): But-3-en-1-ol has an O–H bond, which would absorb at 3200–3600 cm<sup>−1</sup>, and no C=O bond to absorb at 1715 cm<sup>−1</sup>.
        "3": "",
      },
    },

    // ── s3-2h-q049 · short · challenge · AHL · Structure 3.2.12 · 4 marks
    "s3-2h-q049": {
      // EN: <p>A compound has the molecular formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<span></span></span>.</p><ul><li>Infrared: strong absorption at 1715 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: one signal, a singlet.</li><li>Mass spectrum: molecular ion at m/z 58; tallest peak at m/z 43.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Deduce the structure of the compound. Explain how each piece of data supports your answer.</p>
      stem: "",
      hints: [
        // EN: Start with the infrared absorption. Which bond is it?
        "",
        // EN: There are only two structures with formula <span class="chem">C<sub>3</sub>H<sub>6</sub>O<span></span></span> that contain C=O. Draw both and count their hydrogen environments.
        "",
        // EN: Subtract 43 from 58 and look up the mass lost.
        "",
      ],
      // EN: <p>A good order of attack: infrared for the functional group, NMR for the carbon skeleton, mass spectrum as a check.</p><div class="worked__math">58 − 43 = 15 → •CH<sub>3</sub> lost</div><div class="worked__math">CH<sub>3</sub>COCH<sub>3</sub><sup>+</sup> → CH<sub>3</sub>CO<sup>+</sup> + •CH<sub>3</sub></div><p>In a "deduce and explain" question, link every piece of data to a feature of the structure. Naming the compound without the evidence earns one mark only.</p>
      solution: "",
      // EN: <p>The compound is propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub><span></span></span>.</p><ul><li>Infrared: 1715 cm<sup>−1</sup> is in the range 1700–1750 cm<sup>−1</sup>, so there is a C=O bond. With one O atom, the compound is an aldehyde or a ketone.</li><li>NMR: one signal means all six H atoms are in the same environment. That fits two equivalent <span class="chem">CH<sub>3</sub><span></span></span> groups. (Propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO<span></span></span>, would give three signals.)</li><li>The signal is a singlet because the neighbouring carbon, the C=O carbon, holds no H atoms.</li><li>Mass spectrum: 58 − 43 = 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>3</sub>CO<sup>+</sup><span></span></span> at m/z 43.</li></ul>
      answer: "",
      markscheme: [
        // EN: IR: 1715 cm⁻¹ / 1700–1750 cm⁻¹ shows a C=O bond (aldehyde or ketone).
        "",
        // EN: NMR: one signal, so all (six) H atoms are in one chemical environment / two equivalent CH₃ groups.
        "",
        // EN: Structure CH₃COCH₃ / propanone (name or any structural formula).
        "",
        // EN: MS: m/z 43 is M − 15, loss of •CH₃ / the ion CH₃CO⁺ (with its + charge); OR singlet because there are no H atoms on the adjacent (C=O) carbon.
        "",
      ],
    },

    // ── s3-2h-q050 · short · challenge · AHL · Structure 3.2.12 · 5 marks
    "s3-2h-q050": {
      // EN: <p>A liquid contains 52.1% carbon, 13.2% hydrogen and 34.7% oxygen by mass.</p><ul><li>Mass spectrum: molecular ion at m/z 46; tallest peak at m/z 31.</li><li>Infrared: strong, broad absorption at 3350 cm<sup>−1</sup>; no absorption at 1700–1750 cm<sup>−1</sup>.</li><li><sup>1</sup>H NMR: see the table.</li></ul><div class="table-scroll" tabindex="0"><table class="data"><caption><sup>1</sup>H NMR signals</caption><thead><tr><th scope="col">Shift / ppm</th><th scope="col">Area</th><th scope="col">Splitting</th></tr></thead><tbody><tr><th scope="row">3.7</th><td>2</td><td>quartet</td></tr><tr><th scope="row">2.6</th><td>1</td><td>singlet</td></tr><tr><th scope="row">1.0</th><td>3</td><td>triplet</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 20): infrared absorption ranges</caption><thead><tr><th scope="col">Bond</th><th scope="col">Types of organic molecules</th><th scope="col">Wavenumber / cm<sup>−1</sup></th><th scope="col">Intensity</th></tr></thead><tbody><tr><th scope="row">C=O</th><td>aldehydes, ketones, carboxylic acids and esters</td><td>1700–1750</td><td>strong</td></tr><tr><th scope="row">O–H</th><td>carboxylic acids (with hydrogen bonding)</td><td>2500–3000</td><td>strong, very broad</td></tr><tr><th scope="row">O–H</th><td>alcohols and phenols (with hydrogen bonding)</td><td>3200–3600</td><td>strong, broad</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 21): <sup>1</sup>H NMR chemical shifts</caption><thead><tr><th scope="col">Type of proton</th><th scope="col">Chemical shift / ppm</th></tr></thead><tbody><tr><th scope="row"><span class="chem">–C<b>H</b><sub>3</sub></span></th><td>0.9–1.0</td></tr><tr><th scope="row"><span class="chem">R–O–C<b>H</b><sub>2</sub>–</span></th><td>3.3–3.7</td></tr><tr><th scope="row"><span class="chem">R–O–<b>H</b></span></th><td>1.0–6.0</td></tr></tbody></table></div><div class="table-scroll" tabindex="0"><table class="data"><caption>From the data booklet (section 22): mass spectral fragments lost</caption><thead><tr><th scope="col">Mass lost</th><th scope="col">Possible neutral fragment lost</th></tr></thead><tbody><tr><th scope="row">15</th><td>•CH<sub>3</sub></td></tr><tr><th scope="row">17</th><td>•OH</td></tr><tr><th scope="row">18</th><td>H<sub>2</sub>O</td></tr><tr><th scope="row">28</th><td>CH<sub>2</sub>=CH<sub>2</sub> or CO</td></tr><tr><th scope="row">29</th><td>•CH<sub>2</sub>CH<sub>3</sub> or •CHO</td></tr><tr><th scope="row">31</th><td>•OCH<sub>3</sub></td></tr><tr><th scope="row">45</th><td>•COOH</td></tr></tbody></table></div><p>Determine the empirical formula, the molecular formula and the structure of the compound. Show how the spectra support the structure.</p>
      stem: "",
      hints: [
        // EN: Start with the percentages: divide each by the relative atomic mass, then by the smallest answer.
        "",
        // EN: Compare the empirical formula mass with the m/z of the molecular ion.
        "",
        // EN: There are only two structures with this molecular formula: an alcohol and an ether. Which one do the infrared and NMR data fit?
        "",
      ],
      // EN: <p>Any five of the six marking points give full marks. The route is always the same:</p><ol><li>composition → empirical formula;</li><li>molecular ion → molecular formula;</li><li>infrared → functional group;</li><li>NMR → how the atoms are joined;</li><li>mass spectrum fragments → check.</li></ol><p>The isomer methoxymethane, <span class="chem">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>, would give no O–H absorption and only one NMR signal. In a measured spectrum of ethanol the <span class="chem">CH<sub>3</sub><span></span></span> triplet is nearer 1.2 ppm. Real spectra vary a little: the booklet says its values can change with the solvent and conditions.</p>
      solution: "",
      // EN: <p><strong>Empirical formula:</strong></p><div class="worked__math">C: 52.1 ÷ 12.01 = 4.34</div><div class="worked__math">H: 13.2 ÷ 1.01 = 13.07</div><div class="worked__math">O: 34.7 ÷ 16.00 = 2.17</div><div class="worked__math">ratio = 2.00 : 6.03 : 1 → C<sub>2</sub>H<sub>6</sub>O</div><p><strong>Molecular formula:</strong> the empirical formula mass is 2(12.01) + 6(1.01) + 16.00 = 46.08, which matches the molecular ion at m/z 46. So the molecular formula is <span class="chem">C<sub>2</sub>H<sub>6</sub>O<span></span></span>.</p><p><strong>Infrared:</strong> the broad absorption at 3350 cm<sup>−1</sup> (3200–3600 cm<sup>−1</sup>) is the O–H bond of an alcohol. So the compound is not the ether <span class="chem">CH<sub>3</sub>OCH<sub>3</sub><span></span></span>.</p><p><strong>NMR:</strong> three signals with areas 3 : 2 : 1. The triplet (3 H) and quartet (2 H) show an ethyl group, <span class="chem">CH<sub>3</sub>CH<sub>2</sub><span></span></span>. The quartet at 3.7 ppm (3.3–3.7 ppm) is a <span class="chem">CH<sub>2</sub><span></span></span> bonded to O. The singlet (1 H) is the O–H hydrogen.</p><p><strong>Mass spectrum:</strong> 46 − 31 = 15, the loss of •<span class="chem">CH<sub>3</sub><span></span></span>, which leaves <span class="chem">CH<sub>2</sub>OH<sup>+</sup><span></span></span>.</p><p><strong>Structure:</strong> ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH<span></span></span>.</p>
      answer: "",
      markscheme: [
        // EN: Empirical formula C₂H₆O, with working (mole ratio 4.34 : 13.07 : 2.17, or 2 : 6 : 1).
        "",
        // EN: Molecular formula C₂H₆O, because the empirical formula mass (46) equals the m/z of the molecular ion.
        "",
        // EN: IR: absorption at 3200–3600 cm⁻¹ shows O–H of an alcohol (so not an ether); accept "no C=O".
        "",
        // EN: NMR: three H environments in ratio 3 : 2 : 1, AND triplet + quartet show CH₃CH₂ / the quartet CH₂ is next to CH₃.
        "",
        // EN: Structure CH₃CH₂OH / ethanol.
        "",
        // EN: MS: m/z 31 is M − 15, loss of •CH₃ / the ion CH₂OH⁺ (with its + charge).
        "",
      ],
    },

  }
});
