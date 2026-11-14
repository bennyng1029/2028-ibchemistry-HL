/* s2-2h.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's2-2h.q', {
  questions: {

    // ── s2-2h-q001 · mcq · foundation · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q001": {
      // EN: <p>For which species can you draw more than one Lewis formula, where the formulas differ only in the position of a double bond?</p>
      stem: "<p>이중 결합의 위치만 다른 루이스 구조식을 2개 이상 그릴 수 있는 화학종은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">HCHO</span> (methanal)
        "<span class=\"chem\">HCHO</span> (methanal)",
        // EN: <span class="chem">C2H4</span> (ethene)
        "<span class=\"chem\">C2H4</span> (ethene)",
        // EN: <span class="chem">NO3-</span> (nitrate ion)
        "<span class=\"chem\">NO3-</span> (질산 이온)",
        // EN: <span class="chem">HCN</span> (hydrogen cyanide)
        "<span class=\"chem\">HCN</span> (사이안화 수소)",
      ],
      hints: [
        // EN: Look for a central atom joined to two or more atoms of the same element.
        "같은 원소의 원자 2개 이상과 연결된 중심 원자를 찾아보세요.",
        // EN: Ask: could the double bond be drawn to a different atom and still give a correct Lewis formula?
        "스스로 물어보세요: 이중 결합을 다른 원자 쪽으로 옮겨 그려도 올바른 루이스 구조식이 될까요?",
      ],
      // EN: <p>In the nitrate ion, nitrogen is joined to three oxygen atoms. The one N=O double bond can be drawn to any of the three. That gives three resonance structures. In the other species the multiple bond has only one possible position.</p>
      solution: "<p>질산 이온에서 질소는 산소 원자 3개와 연결되어 있어요. N=O 이중 결합 하나는 세 산소 중 어느 쪽에나 그릴 수 있어요. 그래서 공명 구조가 3개 생겨요. 다른 화학종에서는 다중 결합이 놓일 수 있는 자리가 하나뿐이에요.</p>",
      misconception: {
        // EN (option A): In methanal the double bond can only go to the oxygen atom. Hydrogen forms one single bond only. One position means no resonance.
        "0": "methanal에서 이중 결합은 산소 원자 쪽에만 놓일 수 있어요. 수소는 단일 결합 하나만 만들어요. 자리가 하나뿐이면 공명이 없어요.",
        // EN (option B): In ethene the double bond can only be between the two carbon atoms. There is no second position for it.
        "1": "ethene에서 이중 결합은 두 탄소 원자 사이에만 놓일 수 있어요. 이중 결합이 놓일 다른 자리가 없어요.",
        // EN (option D): HCN has a triple bond between C and N. Hydrogen cannot take part in a multiple bond, so there is only one possible formula.
        "3": "HCN에는 C와 N 사이에 삼중 결합이 있어요. 수소는 다중 결합에 참여할 수 없으므로 그릴 수 있는 구조식은 하나뿐이에요.",
      },
    },

    // ── s2-2h-q002 · mcq · exam · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q002": {
      // EN: <p>The data booklet gives these bond lengths: N–O 136 pm and N=O 114 pm. One Lewis formula of the nitrate ion, <span class="chem">NO3-</span>, shows one N=O bond and two N–O bonds.</p><p>Which describes the nitrogen–oxygen bonds that are measured in the nitrate ion?</p>
      stem: "<p>데이터 부클릿에는 다음 결합 길이가 나와 있어요: N–O 136 pm, N=O 114 pm. 질산 이온(<span class=\"chem\">NO3-</span>)의 루이스 구조식 하나는 N=O 결합 1개와 N–O 결합 2개를 보여 줘요.</p><p>질산 이온에서 실제로 측정되는 질소–산소 결합을 옳게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: One bond of 114 pm and two bonds of 136 pm
        "114 pm인 결합 1개와 136 pm인 결합 2개",
        // EN: Three bonds of 114 pm
        "114 pm인 결합 3개",
        // EN: Three bonds of 136 pm
        "136 pm인 결합 3개",
        // EN: Three equal bonds, with a length between 114 pm and 136 pm
        "길이가 같은 결합 3개, 길이는 114 pm과 136 pm 사이",
      ],
      hints: [
        // EN: How many resonance structures does the nitrate ion have?
        "질산 이온의 공명 구조는 몇 개인가요?",
        // EN: The real ion is a mix (hybrid) of all of them. What does that do to the three bonds?
        "실제 이온은 이 구조들이 모두 섞인 것(공명 혼성체)이에요. 그러면 세 결합은 어떻게 될까요?",
      ],
      // EN: <p>The nitrate ion has three resonance structures. The π electrons are delocalized over the nitrogen atom and all three oxygen atoms. So all three bonds are the same, and each is between a single and a double bond. The measured value is about 124 pm.</p>
      solution: "<p>질산 이온에는 공명 구조가 3개 있어요. π 전자는 질소 원자와 세 산소 원자 전체에 비편재화되어 있어요. 그래서 세 결합은 모두 같고, 각 결합은 단일 결합과 이중 결합의 중간이에요. 측정값은 약 124 pm이에요.</p>",
      misconception: {
        // EN (option A): This treats one resonance structure as the real ion. The ion does not have one fixed double bond. The π electrons are delocalized over all three bonds.
        "0": "공명 구조 하나를 실제 이온으로 착각한 답이에요. 이온에는 위치가 고정된 이중 결합이 없어요. π 전자는 세 결합 전체에 비편재화되어 있어요.",
        // EN (option B): There is only one double bond to share among three positions, so the bonds are not all full double bonds.
        "1": "세 자리가 나누어 가질 이중 결합은 하나뿐이에요. 그래서 모든 결합이 완전한 이중 결합일 수는 없어요.",
        // EN (option C): The double bond does not disappear. Its π electrons are shared by all three bonds, which makes each one shorter than a single bond.
        "2": "이중 결합이 사라지는 것이 아니에요. 그 π 전자를 세 결합이 모두 나누어 가지므로 각 결합은 단일 결합보다 짧아져요.",
      },
    },

    // ── s2-2h-q003 · short · exam · AHL · Structure 2.2.11 · 2 marks
    "s2-2h-q003": {
      // EN: <p>A Lewis formula of ozone, <span class="chem">O3</span>, shows one O=O double bond and one O–O single bond. The data booklet values are O–O 148 pm and O=O 121 pm.</p><p>Measurements show that both bonds in ozone are 128 pm long. Explain this.</p>
      stem: "<p>오존(<span class=\"chem\">O3</span>)의 루이스 구조식 하나는 O=O 이중 결합 1개와 O–O 단일 결합 1개를 보여 줘요. 데이터 부클릿 값은 O–O 148 pm, O=O 121 pm이에요.</p><p>측정해 보면 오존의 두 결합은 모두 길이가 128 pm이에요. 그 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Draw the Lewis formula with the double bond on the left. Now draw it with the double bond on the right.
        "이중 결합을 왼쪽에 두고 루이스 구조식을 그려 보세요. 이번에는 이중 결합을 오른쪽에 두고 그려 보세요.",
        // EN: Use the word “delocalized” and say what it does to the two bonds.
        "‘비편재화된(delocalized)’이라는 말을 쓰고, 그것이 두 결합에 어떤 영향을 주는지 쓰세요.",
      ],
      // EN: <p>Two resonance structures exist. Neither is the real molecule. The π electrons are delocalized over the three atoms, so both bonds are equal in length. 128 pm lies between 121 pm (double) and 148 pm (single).</p>
      solution: "<p>공명 구조가 2개 있어요. 둘 다 실제 분자는 아니에요. π 전자가 세 원자 전체에 비편재화되어 있으므로 두 결합의 길이가 같아요. 128 pm은 121 pm(이중 결합)과 148 pm(단일 결합) 사이에 있어요.</p>",
      // EN: <p>Ozone has two resonance structures, because the double bond can be drawn on either side of the central atom. The real molecule is a hybrid of the two. The π electrons are delocalized over all three oxygen atoms, so both bonds are identical and each is between a single and a double bond.</p>
      answer: "<p>오존에는 공명 구조가 2개 있어요. 이중 결합을 중심 원자의 어느 쪽에나 그릴 수 있기 때문이에요. 실제 분자는 두 구조의 공명 혼성체예요. π 전자가 세 산소 원자 전체에 비편재화되어 있으므로 두 결합은 똑같고, 각 결합은 단일 결합과 이중 결합의 중간이에요.</p>",
      markscheme: [
        // EN: Two resonance structures can be drawn / the double bond has two possible positions (accept: ozone has resonance).
        "공명 구조를 2개 그릴 수 있다 / 이중 결합이 놓일 수 있는 자리가 2곳이다(‘오존에는 공명이 있다’도 인정).",
        // EN: The (π) electrons are delocalized over all three oxygen atoms, so both bonds are the same / each bond is intermediate between a single and a double bond.
        "(π) 전자가 세 산소 원자 전체에 비편재화되어 있으므로 두 결합이 같다 / 각 결합은 단일 결합과 이중 결합의 중간이다.",
      ],
    },

    // ── s2-2h-q004 · short · challenge · AHL · Structure 2.2.11 · 3 marks
    "s2-2h-q004": {
      // EN: <p>Ultraviolet light can break the bonds in oxygen, <span class="chem">O2</span>, and in ozone, <span class="chem">O3</span>. The bond in <span class="chem">O2</span> is broken only by light with a wavelength shorter than about 242 nm. The bonds in <span class="chem">O3</span> are broken by light with wavelengths up to about 330 nm.</p><p>Explain this difference, using the bonding in the two molecules.</p>
      stem: "<p>자외선은 산소(<span class=\"chem\">O2</span>)와 오존(<span class=\"chem\">O3</span>)의 결합을 끊을 수 있어요. <span class=\"chem\">O2</span>의 결합은 파장이 약 242 nm보다 짧은 빛으로만 끊어져요. <span class=\"chem\">O3</span>의 결합은 파장이 약 330 nm까지인 빛으로도 끊어져요.</p><p>두 분자의 결합을 이용하여 이 차이를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare the type of bond in each molecule. Ozone has two resonance structures.
        "각 분자에 있는 결합의 종류를 비교해 보세요. 오존에는 공명 구조가 2개 있어요.",
        // EN: Which bond is stronger: a double bond, or a bond between single and double?
        "어느 결합이 더 강할까요: 이중 결합일까요, 단일 결합과 이중 결합 중간인 결합일까요?",
        // EN: Link energy and wavelength: <i>E</i> = <i>hf</i> and <i>c</i> = <i>λf</i> (Structure 1.3).
        "에너지와 파장을 연결해 보세요: <i>E</i> = <i>hf</i>, <i>c</i> = <i>λf</i> (Structure 1.3).",
      ],
      // EN: <p>Step 1: bonding. <span class="chem">O2</span> has O=O. In <span class="chem">O3</span> the two bonds are equal and intermediate between single and double.</p><p>Step 2: strength. An intermediate bond is weaker than a double bond, so less energy is needed.</p><p>Step 3: light. A photon with less energy has a longer wavelength. So ozone is broken by longer wavelengths than oxygen.</p>
      solution: "<p>1단계: 결합. <span class=\"chem\">O2</span>에는 O=O가 있어요. <span class=\"chem\">O3</span>에서는 두 결합이 같고, 단일 결합과 이중 결합의 중간이에요.</p><p>2단계: 세기. 중간 결합은 이중 결합보다 약하므로 끊는 데 에너지가 덜 들어요.</p><p>3단계: 빛. 에너지가 작은 광자는 파장이 더 길어요. 그래서 오존은 산소보다 더 긴 파장의 빛으로 끊어져요.</p>",
      // EN: <p><span class="chem">O2</span> has a double bond, O=O. In ozone, resonance means the π electrons are delocalized, so each bond is between a single and a double bond. The bonds in ozone are therefore weaker than the bond in <span class="chem">O2</span> and need less energy to break. Light of lower energy has a longer wavelength (<i>E</i> = <i>hc</i>/<i>λ</i>), so longer wavelengths can break ozone.</p>
      answer: "<p><span class=\"chem\">O2</span>에는 이중 결합 O=O가 있어요. 오존에서는 공명 때문에 π 전자가 비편재화되어 있어서, 각 결합이 단일 결합과 이중 결합의 중간이에요. 따라서 오존의 결합은 <span class=\"chem\">O2</span>의 결합보다 약하고, 끊는 데 에너지가 덜 들어요. 에너지가 낮은 빛은 파장이 더 길므로(<i>E</i> = <i>hc</i>/<i>λ</i>), 더 긴 파장의 빛으로 오존을 끊을 수 있어요.</p>",
      markscheme: [
        // EN: O<sub>2</sub> has a double bond, AND the bonds in O<sub>3</sub> are between single and double bonds (because of resonance / delocalization).
        "O<sub>2</sub>에는 이중 결합이 있고, 그리고 O<sub>3</sub>의 결합은 단일 결합과 이중 결합의 중간이다(공명 / 비편재화 때문).",
        // EN: The bonds in ozone are weaker / need less energy to break than the bond in O<sub>2</sub>.
        "오존의 결합은 O<sub>2</sub>의 결합보다 약하다 / 끊는 데 에너지가 덜 든다.",
        // EN: Lower energy corresponds to a longer wavelength (lower frequency), so light of longer wavelength can break the bonds in ozone.
        "에너지가 낮을수록 파장이 길다(진동수가 작다). 그래서 파장이 더 긴 빛으로 오존의 결합을 끊을 수 있다.",
      ],
    },

    // ── s2-2h-q005 · mcq · foundation · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q005": {
      // EN: <p>Which statement about the carbon–carbon bonds in benzene, <span class="chem">C6H6</span>, is correct?</p>
      stem: "<p>벤젠(<span class=\"chem\">C6H6</span>)의 탄소–탄소 결합에 대한 설명으로 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: Three short C=C bonds and three long C–C bonds alternate around the ring.
        "짧은 C=C 결합 3개와 긴 C–C 결합 3개가 고리를 따라 번갈아 있다.",
        // EN: All six bonds have the same length, between the lengths of C–C and C=C.
        "6개의 결합은 모두 길이가 같고, 그 길이는 C–C와 C=C의 길이 사이이다.",
        // EN: All six bonds are single bonds, the same length as in ethane.
        "6개의 결합은 모두 단일 결합이고, 길이는 ethane의 결합과 같다.",
        // EN: All six bonds are double bonds, the same length as in ethene.
        "6개의 결합은 모두 이중 결합이고, 길이는 ethene의 결합과 같다.",
      ],
      hints: [
        // EN: Benzene has two resonance structures. The real molecule is a hybrid of them.
        "벤젠에는 공명 구조가 2개 있어요. 실제 분자는 두 구조의 공명 혼성체예요.",
      ],
      // EN: <p>The six π electrons in benzene are delocalized over all six carbon atoms. So all six carbon–carbon bonds are identical. Their length, about 140 pm, is between C–C (154 pm) and C=C (134 pm).</p>
      solution: "<p>벤젠의 π 전자 6개는 탄소 원자 6개 전체에 비편재화되어 있어요. 그래서 탄소–탄소 결합 6개는 모두 똑같아요. 그 길이(약 140 pm)는 C–C(154 pm)와 C=C(134 pm) 사이예요.</p>",
      misconception: {
        // EN (option A): This is one resonance structure, not the real molecule. Measurements show six equal bonds.
        "0": "이것은 공명 구조 하나일 뿐, 실제 분자가 아니에요. 측정해 보면 결합 6개의 길이가 모두 같아요.",
        // EN (option C): Six single bonds would leave each carbon with only three bonds. The measured length (about 140 pm) is shorter than C–C (154 pm).
        "2": "결합 6개가 모두 단일 결합이면 각 탄소는 결합을 3개만 가지게 돼요. 측정된 길이(약 140 pm)는 C–C(154 pm)보다 짧아요.",
        // EN (option D): Six double bonds would give each carbon too many bonds. The measured length (about 140 pm) is longer than C=C (134 pm).
        "3": "결합 6개가 모두 이중 결합이면 각 탄소의 결합 수가 너무 많아져요. 측정된 길이(약 140 pm)는 C=C(134 pm)보다 길어요.",
      },
    },

    // ── s2-2h-q006 · mcq · exam · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q006": {
      // EN: <p>Benzene was once drawn as a ring with alternating single and double bonds. Which observation is evidence <strong>against</strong> that structure?</p>
      stem: "<p>예전에는 벤젠을 단일 결합과 이중 결합이 번갈아 있는 고리로 그렸어요. 다음 중 그 구조에 <strong>반대되는</strong> 증거는 어느 것인가요?</p>",
      options: [
        // EN: Benzene has the molecular formula <span class="chem">C6H6</span>.
        "벤젠의 분자식은 <span class=\"chem\">C6H6</span>이다.",
        // EN: Benzene reacts with hydrogen to form cyclohexane, <span class="chem">C6H12</span>.
        "벤젠은 수소와 반응하여 cyclohexane(<span class=\"chem\">C6H12</span>)을 만든다.",
        // EN: All the carbon–carbon bonds in benzene have the same length.
        "벤젠의 탄소–탄소 결합은 모두 길이가 같다.",
        // EN: Benzene burns in oxygen to form carbon dioxide and water.
        "벤젠은 산소 속에서 타서 이산화 탄소와 물을 만든다.",
      ],
      hints: [
        // EN: Ask of each observation: would a ring with three real C=C bonds also do this?
        "각 관찰 결과에 대해 물어보세요: 진짜 C=C 결합 3개가 있는 고리도 이렇게 될까요?",
        // EN: Single and double bonds have different lengths.
        "단일 결합과 이중 결합은 길이가 달라요.",
      ],
      // EN: <p>Alternating single and double bonds would have two different lengths (154 pm and 134 pm). All six bonds in benzene are equal (about 140 pm). This is physical evidence that the π electrons are delocalized.</p>
      solution: "<p>단일 결합과 이중 결합이 번갈아 있다면 길이가 서로 다른 두 종류의 결합(154 pm과 134 pm)이 있어야 해요. 벤젠의 결합 6개는 모두 같아요(약 140 pm). 이것은 π 전자가 비편재화되어 있다는 물리적 증거예요.</p>",
      misconception: {
        // EN (option A): A ring with alternating single and double bonds also has the formula C<sub>6</sub>H<sub>6</sub>. This fits both models, so it is not evidence against one of them.
        "0": "단일 결합과 이중 결합이 번갈아 있는 고리도 분자식이 C<sub>6</sub>H<sub>6</sub>이에요. 두 모형 모두에 맞으므로 어느 한쪽에 반대되는 증거가 아니에요.",
        // EN (option B): A molecule with three C=C bonds would also add three H<sub>2</sub> to form cyclohexane. This fits both models.
        "1": "C=C 결합이 3개 있는 분자도 H<sub>2</sub> 3분자가 첨가되어 cyclohexane이 돼요. 두 모형 모두에 맞아요.",
        // EN (option D): Every hydrocarbon burns to form carbon dioxide and water. This says nothing about the bonds in the ring.
        "3": "모든 탄화수소는 타서 이산화 탄소와 물을 만들어요. 이것은 고리 속 결합에 대해 아무것도 알려 주지 않아요.",
      },
    },

    // ── s2-2h-q007 · multi · exam · AHL · Structure 2.2.12 · 2 marks
    "s2-2h-q007": {
      // EN: <p>Which of these are <strong>chemical</strong> evidence that benzene does not contain three ordinary C=C double bonds? Select all that apply.</p>
      stem: "<p>다음 중 벤젠에 보통의 C=C 이중 결합 3개가 없다는 <strong>화학적</strong> 증거는 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Benzene reacts by substitution rather than addition.
        "벤젠은 첨가 반응보다 치환 반응을 한다.",
        // EN: All the carbon–carbon bonds in benzene are 140 pm long.
        "벤젠의 탄소–탄소 결합은 모두 길이가 140 pm이다.",
        // EN: The enthalpy of hydrogenation of benzene is less exothermic than three times that of cyclohexene.
        "벤젠의 수소화 엔탈피는 cyclohexene의 수소화 엔탈피의 3배보다 덜 발열적이다.",
        // EN: Benzene is a planar regular hexagon with bond angles of 120°.
        "벤젠은 결합각이 120°인 평면 정육각형이다.",
        // EN: Benzene does not readily decolourize bromine water.
        "벤젠은 브로민수를 쉽게 탈색시키지 않는다.",
      ],
      hints: [
        // EN: Chemical evidence comes from what benzene does in reactions, including the energy change of a reaction.
        "화학적 증거는 벤젠이 반응에서 어떻게 행동하는지에서 나와요. 반응의 에너지 변화도 포함해요.",
        // EN: Physical evidence comes from measuring the molecule itself: lengths, angles, shape.
        "물리적 증거는 분자 자체를 측정해서 얻어요: 길이, 각도, 모양.",
      ],
      // EN: <p>Chemical: substitution instead of addition; no fast reaction with bromine water; a less exothermic enthalpy of hydrogenation than expected. Physical: equal bond lengths; a planar regular hexagon.</p>
      solution: "<p>화학적 증거: 첨가 대신 치환을 함, 브로민수와 빠르게 반응하지 않음, 수소화 엔탈피가 예상보다 덜 발열적임. 물리적 증거: 결합 길이가 모두 같음, 평면 정육각형임.</p>",
      misconception: {
        // EN (option B): Bond length is measured, not seen in a reaction. It is physical evidence. If a question asks for chemical evidence, this does not score.
        "1": "결합 길이는 반응에서 보는 것이 아니라 측정하는 값이에요. 그래서 물리적 증거예요. 문제가 화학적 증거를 물으면 이것은 점수를 받지 못해요.",
        // EN (option D): Shape and bond angles are physical evidence. Chemical evidence is about reactions and their energy changes.
        "3": "모양과 결합각은 물리적 증거예요. 화학적 증거는 반응과 그 에너지 변화에 관한 거예요.",
      },
    },

    // ── s2-2h-q008 · short · exam · AHL · Structure 2.2.12 · 3 marks
    "s2-2h-q008": {
      // EN: <p>Benzene is sometimes drawn as a ring with alternating single and double bonds.</p><p>Discuss why this drawing does not describe benzene well. Give one piece of physical evidence and one piece of chemical evidence, and state how the bonding in benzene is described instead.</p>
      stem: "<p>벤젠은 단일 결합과 이중 결합이 번갈아 있는 고리로 그려지기도 해요.</p><p>이 그림이 벤젠을 잘 나타내지 못하는 이유를 논의하시오 (discuss). 물리적 증거 하나와 화학적 증거 하나를 들고, 그 대신 벤젠의 결합을 어떻게 설명하는지 쓰시오 (state).</p>",
      hints: [
        // EN: Physical evidence is something you measure about the molecule. Chemical evidence is about a reaction.
        "물리적 증거는 분자에 대해 측정하는 것이에요. 화학적 증거는 반응에 관한 거예요.",
        // EN: For the bonding, use the words “delocalized” and “π electrons”.
        "결합을 설명할 때는 ‘비편재화된(delocalized)’과 ‘π 전자’라는 말을 쓰세요.",
      ],
      // EN: <p>One physical point (equal bond lengths), one chemical point (substitution, not addition), then the model: delocalized π electrons around the ring. If you give two physical points and no chemical point, you lose a mark.</p>
      solution: "<p>물리적 증거 하나(결합 길이가 같음), 화학적 증거 하나(첨가가 아니라 치환), 그다음 모형: 고리 전체에 비편재화된 π 전자. 물리적 증거만 두 개 쓰고 화학적 증거를 쓰지 않으면 1점을 잃어요.</p>",
      // EN: <p>Physical evidence: all six carbon–carbon bonds have the same length (about 140 pm), between a single and a double bond. Alternating bonds would have two different lengths. Chemical evidence: benzene reacts by substitution, not by addition, so it does not behave like an alkene. The bonding is described as a ring of six carbon atoms with six delocalized π electrons, spread over the whole ring.</p>
      answer: "<p>물리적 증거: 탄소–탄소 결합 6개의 길이가 모두 같고(약 140 pm), 단일 결합과 이중 결합의 중간이에요. 결합이 번갈아 있다면 길이가 두 종류여야 해요. 화학적 증거: 벤젠은 첨가가 아니라 치환 반응을 하므로 알켄처럼 행동하지 않아요. 결합은 탄소 원자 6개로 된 고리에 비편재화된 π 전자 6개가 고리 전체에 퍼져 있는 것으로 설명해요.</p>",
      markscheme: [
        // EN: Physical evidence: all carbon–carbon bond lengths are equal / intermediate between single and double (accept: regular planar hexagon, all bond angles 120°).
        "물리적 증거: 탄소–탄소 결합 길이가 모두 같다 / 단일 결합과 이중 결합의 중간이다(평면 정육각형, 결합각이 모두 120°도 인정).",
        // EN: Chemical evidence: undergoes substitution rather than addition / does not readily decolourize bromine water (accept: enthalpy of hydrogenation less exothermic than expected for three C=C).
        "화학적 증거: 첨가보다 치환 반응을 한다 / 브로민수를 쉽게 탈색시키지 않는다(수소화 엔탈피가 C=C 3개일 때의 예상보다 덜 발열적이다도 인정).",
        // EN: Bonding: delocalized π electrons (spread over all six carbon atoms / the ring). The word “π” (or “pi”) is needed.
        "결합: 비편재화된 π 전자(탄소 원자 6개 전체 / 고리 전체에 퍼져 있음). ‘π’(또는 ‘pi’)라는 말이 꼭 있어야 한다.",
      ],
    },

    // ── s2-2h-q009 · mcq · challenge · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q009": {
      // EN: <p>Cyclohexene has one C=C bond. Its enthalpy of hydrogenation is −120 <span class="unit">kJ mol-1</span>. The enthalpy of hydrogenation of benzene to cyclohexane is −208 <span class="unit">kJ mol-1</span>.</p><p>What do these data show?</p>
      stem: "<p>cyclohexene에는 C=C 결합이 1개 있어요. 그 수소화 엔탈피는 −120 <span class=\"unit\">kJ mol-1</span>이에요. 벤젠이 cyclohexane으로 수소화될 때의 엔탈피는 −208 <span class=\"unit\">kJ mol-1</span>이에요.</p><p>이 자료가 보여 주는 것은 무엇인가요?</p>",
      options: [
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> more stable than a ring with three separate C=C bonds.
        "벤젠은 C=C 결합 3개가 따로 있는 고리보다 약 152 <span class=\"unit\">kJ mol-1</span> 더 안정하다.",
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> less stable than a ring with three separate C=C bonds.
        "벤젠은 C=C 결합 3개가 따로 있는 고리보다 약 152 <span class=\"unit\">kJ mol-1</span> 덜 안정하다.",
        // EN: Benzene contains between one and two C=C bonds.
        "벤젠에는 C=C 결합이 1개와 2개 사이만큼 있다.",
        // EN: About 152 <span class="unit">kJ mol-1</span> must be supplied to hydrogenate benzene.
        "벤젠을 수소화하려면 약 152 <span class=\"unit\">kJ mol-1</span>을 공급해야 한다.",
      ],
      hints: [
        // EN: What would you predict for a ring with three separate C=C bonds?
        "C=C 결합 3개가 따로 있는 고리라면 값이 얼마일지 예측해 보세요.",
        // EN: Compare your prediction with −208 <span class="unit">kJ mol-1</span>. Which is less exothermic?
        "예측값을 −208 <span class=\"unit\">kJ mol-1</span>과 비교해 보세요. 어느 쪽이 덜 발열적인가요?",
      ],
      // EN: <div class="worked__math">Predicted for three C=C: 3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class="worked__math">Difference: 360 − 208 = 152 kJ mol<sup>−1</sup></div><p>Benzene releases 152 <span class="unit">kJ mol-1</span> less than predicted. So benzene is lower in energy (more stable) than the model with three separate double bonds. Delocalization of the π electrons lowers the energy.</p>
      solution: "<div class=\"worked__math\">C=C 세 개일 때의 예상값: 3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class=\"worked__math\">차이: 360 − 208 = 152 kJ mol<sup>−1</sup></div><p>벤젠은 예상보다 152 <span class=\"unit\">kJ mol-1</span> 적게 방출해요. 그러니 벤젠은 이중 결합 3개가 따로 있는 모형보다 에너지가 낮아요(더 안정해요). π 전자의 비편재화가 에너지를 낮춰요.</p>",
      misconception: {
        // EN (option B): Benzene gives out less energy than predicted when it is hydrogenated. It must start lower in energy, which means more stable, not less.
        "1": "벤젠은 수소화될 때 예상보다 에너지를 적게 내놓아요. 그렇다면 처음부터 에너지가 더 낮았다는 뜻이에요. 즉 덜 안정한 것이 아니라 더 안정해요.",
        // EN (option C): Dividing 208 by 120 treats the π electrons as separate double bonds. The data show the opposite: the electrons are not in separate double bonds.
        "2": "208을 120으로 나누는 것은 π 전자를 따로 있는 이중 결합으로 보는 거예요. 자료는 그 반대를 보여 줘요: 전자는 따로 있는 이중 결합 속에 있지 않아요.",
        // EN (option D): Both values are negative, so hydrogenation of benzene is exothermic. The 152 is a difference between a prediction and a measurement.
        "3": "두 값이 모두 음수이므로 벤젠의 수소화는 발열 반응이에요. 152는 예측값과 측정값의 차이예요.",
      },
    },

    // ── s2-2h-q010 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q010": {
      // EN: <p>What are the molecular geometry and the bond angles of <span class="chem">PCl5</span>?</p>
      stem: "<p><span class=\"chem\">PCl5</span>의 분자 모양과 결합각은 무엇인가요?</p>",
      options: [
        // EN: Trigonal bipyramidal; 90° and 120°
        "삼각쌍뿔형; 90°와 120°",
        // EN: Square pyramidal; 90°
        "사각뿔형; 90°",
        // EN: Trigonal planar; 120°
        "평면 삼각형; 120°",
        // EN: Octahedral; 90°
        "정팔면체형; 90°",
      ],
      hints: [
        // EN: Phosphorus has 5 valence electrons. How many are used in the five P–Cl bonds?
        "인은 원자가 전자가 5개예요. P–Cl 결합 5개에 몇 개가 쓰이나요?",
        // EN: Five electron domains and no lone pairs.
        "전자 영역 5개, 비공유 전자쌍 없음.",
      ],
      // EN: <p>P has 5 valence electrons and uses all 5 in bonds. That is five bonding domains and no lone pairs. Five domains are arranged in a trigonal bipyramid: three bonds in a plane at 120°, and two bonds at 90° to that plane.</p>
      solution: "<p>P는 원자가 전자 5개를 모두 결합에 써요. 그러면 결합 영역이 5개이고 비공유 전자쌍은 없어요. 영역 5개는 삼각쌍뿔 모양으로 배열돼요: 결합 3개는 한 평면에서 120°를 이루고, 결합 2개는 그 평면과 90°를 이뤄요.</p>",
      misconception: {
        // EN (option B): Square pyramidal needs six electron domains, one of them a lone pair. Phosphorus in PCl<sub>5</sub> has five domains and no lone pair.
        "1": "사각뿔형이 되려면 전자 영역이 6개이고 그중 하나가 비공유 전자쌍이어야 해요. PCl<sub>5</sub>의 인은 영역이 5개이고 비공유 전자쌍이 없어요.",
        // EN (option C): Trigonal planar is for three electron domains. Phosphorus here has five bonding domains.
        "2": "평면 삼각형은 전자 영역이 3개일 때의 모양이에요. 여기서 인은 결합 영역이 5개예요.",
        // EN (option D): Octahedral needs six electron domains. Count the bonds: there are five.
        "3": "정팔면체형은 전자 영역이 6개여야 해요. 결합을 세어 보세요: 5개예요.",
      },
    },

    // ── s2-2h-q011 · numeric · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q011": {
      // EN: <p>How many lone pairs are on the chlorine atom in <span class="chem">ClF3</span>?</p>
      stem: "<p><span class=\"chem\">ClF3</span>에서 염소 원자에는 비공유 전자쌍이 몇 개 있나요?</p>",
      hints: [
        // EN: Chlorine is in group 17. How many valence electrons does it have?
        "염소는 17족이에요. 원자가 전자는 몇 개인가요?",
        // EN: Three electrons are used in the three Cl–F bonds. Pair up the rest.
        "Cl–F 결합 3개에 전자 3개가 쓰여요. 나머지 전자를 쌍으로 묶어 보세요.",
      ],
      // EN: <div class="worked__math">Valence electrons on Cl = 7</div><div class="worked__math">Used in three Cl–F bonds = 3</div><div class="worked__math">Left over = 7 − 3 = 4 electrons = <b>2 lone pairs</b></div><p>So chlorine has 3 + 2 = 5 electron domains.</p>
      solution: "<div class=\"worked__math\">Cl의 원자가 전자 = 7</div><div class=\"worked__math\">Cl–F 결합 세 개에 쓰인 전자 = 3</div><div class=\"worked__math\">남은 전자 = 7 − 3 = 4개 = <b>비공유 전자쌍 2개</b></div><p>따라서 염소에는 전자 영역이 3 + 2 = 5개 있어요.</p>",
      // EN: lone pairs
      unit: "비공유 전자쌍",
    },

    // ── s2-2h-q012 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q012": {
      // EN: <p>What are the molecular geometry and the F–S–F bond angle between neighbouring bonds in <span class="chem">SF6</span>?</p>
      stem: "<p><span class=\"chem\">SF6</span>의 분자 모양과, 이웃한 결합 사이의 F–S–F 결합각은 무엇인가요?</p>",
      options: [
        // EN: Tetrahedral; 109.5°
        "정사면체형; 109.5°",
        // EN: Trigonal bipyramidal; 90° and 120°
        "삼각쌍뿔형; 90°와 120°",
        // EN: Octahedral; 90°
        "정팔면체형; 90°",
        // EN: Hexagonal planar; 60°
        "평면 육각형; 60°",
      ],
      hints: [
        // EN: Sulfur has 6 valence electrons and forms six bonds.
        "황은 원자가 전자가 6개이고 결합을 6개 만들어요.",
        // EN: Six electron domains, no lone pairs.
        "전자 영역 6개, 비공유 전자쌍 없음.",
      ],
      // EN: <p>S uses all 6 valence electrons in six S–F bonds. Six bonding domains with no lone pairs give an octahedral molecule. Neighbouring bonds are at 90°.</p>
      solution: "<p>S는 원자가 전자 6개를 모두 S–F 결합 6개에 써요. 비공유 전자쌍 없이 결합 영역이 6개이면 정팔면체형 분자가 돼요. 이웃한 결합은 90°를 이뤄요.</p>",
      misconception: {
        // EN (option A): Tetrahedral is for four electron domains. Sulfur here has six bonds.
        "0": "정사면체형은 전자 영역이 4개일 때의 모양이에요. 여기서 황은 결합이 6개예요.",
        // EN (option B): Trigonal bipyramidal is for five electron domains. Count the fluorine atoms: there are six.
        "1": "삼각쌍뿔형은 전자 영역이 5개일 때의 모양이에요. 플루오린 원자를 세어 보세요: 6개예요.",
        // EN (option D): Electron domains spread out in three dimensions to get as far apart as possible. Six domains in one flat plane would be only 60° apart.
        "3": "전자 영역은 서로 최대한 멀리 떨어지도록 3차원으로 퍼져요. 영역 6개가 한 평면에 놓이면 서로 60°밖에 떨어지지 않아요.",
      },
    },

    // ── s2-2h-q013 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q013": {
      // EN: <p>What are the electron domain geometry and the molecular geometry of <span class="chem">SF4</span>?</p>
      stem: "<p><span class=\"chem\">SF4</span>의 전자 영역 배치와 분자 모양은 무엇인가요?</p>",
      options: [
        // EN: Electron domain geometry: tetrahedral. Molecular geometry: tetrahedral.
        "전자 영역 배치: 정사면체형. 분자 모양: 정사면체형.",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: trigonal bipyramidal.
        "전자 영역 배치: 삼각쌍뿔형. 분자 모양: 삼각쌍뿔형.",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: seesaw.
        "전자 영역 배치: 삼각쌍뿔형. 분자 모양: 시소형.",
        // EN: Electron domain geometry: octahedral. Molecular geometry: square planar.
        "전자 영역 배치: 정팔면체형. 분자 모양: 평면 사각형.",
      ],
      hints: [
        // EN: Find the lone pairs on sulfur: valence electrons minus electrons used in bonds.
        "황의 비공유 전자쌍을 구해 보세요: 원자가 전자 수에서 결합에 쓰인 전자 수를 빼요.",
        // EN: Four bonding domains + one lone pair = five domains.
        "결합 영역 4개 + 비공유 전자쌍 1개 = 영역 5개.",
      ],
      // EN: <div class="worked__math">S: 6 valence electrons; 4 used in bonds; 2 left = 1 lone pair</div><p>Five electron domains: trigonal bipyramidal electron domain geometry. The lone pair takes an equatorial position. The four atoms then make a seesaw shape.</p>
      solution: "<div class=\"worked__math\">S: 원자가 전자 6개; 결합에 4개 사용; 2개 남음 = 비공유 전자쌍 1개</div><p>전자 영역이 5개이므로 전자 영역 배치는 삼각쌍뿔형이에요. 비공유 전자쌍은 적도 위치에 놓여요. 그러면 원자 4개가 시소 모양을 이뤄요.</p>",
      misconception: {
        // EN (option A): This counts only the four bonds. Sulfur has 6 valence electrons and uses 4, so one lone pair is left. That makes five domains.
        "0": "결합 4개만 센 답이에요. 황은 원자가 전자 6개 중 4개를 쓰므로 비공유 전자쌍 1개가 남아요. 그래서 영역은 5개예요.",
        // EN (option B): The electron domain geometry is right. But the molecular geometry describes the atoms only, and one of the five domains is a lone pair.
        "1": "전자 영역 배치는 맞아요. 하지만 분자 모양은 원자만 보고 나타내는데, 영역 5개 중 하나는 비공유 전자쌍이에요.",
        // EN (option D): Square planar needs six domains with two lone pairs. Sulfur in SF<sub>4</sub> has only one lone pair: 6 − 4 = 2 electrons.
        "3": "평면 사각형이 되려면 영역 6개에 비공유 전자쌍이 2개여야 해요. SF<sub>4</sub>의 황에는 비공유 전자쌍이 1개뿐이에요: 6 − 4 = 2개의 전자.",
      },
    },

    // ── s2-2h-q014 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q014": {
      // EN: <p>What are the molecular geometry and the F–Xe–F bond angle between neighbouring bonds in <span class="chem">XeF4</span>?</p>
      stem: "<p><span class=\"chem\">XeF4</span>의 분자 모양과, 이웃한 결합 사이의 F–Xe–F 결합각은 무엇인가요?</p>",
      options: [
        // EN: Tetrahedral; 109.5°
        "정사면체형; 109.5°",
        // EN: Square planar; 90°
        "평면 사각형; 90°",
        // EN: Seesaw; less than 90° and less than 120°
        "시소형; 90°보다 작고 120°보다 작음",
        // EN: Octahedral; 90°
        "정팔면체형; 90°",
      ],
      hints: [
        // EN: Xenon is in group 18: 8 valence electrons.
        "제논은 18족이에요: 원자가 전자 8개.",
        // EN: The two lone pairs go opposite each other, 180° apart.
        "비공유 전자쌍 2개는 서로 반대편, 180° 떨어진 곳에 놓여요.",
      ],
      // EN: <div class="worked__math">Xe: 8 valence electrons; 4 used in bonds; 4 left = 2 lone pairs</div><p>Six domains: octahedral electron domain geometry. The two lone pairs are opposite each other. The four fluorine atoms lie in one plane: square planar, 90°.</p>
      solution: "<div class=\"worked__math\">Xe: 원자가 전자 8개; 결합에 4개 사용; 4개 남음 = 비공유 전자쌍 2개</div><p>영역이 6개이므로 전자 영역 배치는 정팔면체형이에요. 비공유 전자쌍 2개는 서로 반대편에 있어요. 플루오린 원자 4개는 한 평면에 놓여요: 평면 사각형, 90°.</p>",
      misconception: {
        // EN (option A): This counts only the four bonds. Xenon has 8 valence electrons and uses 4, so two lone pairs are left: six domains in total.
        "0": "결합 4개만 센 답이에요. 제논은 원자가 전자 8개 중 4개를 쓰므로 비공유 전자쌍 2개가 남아요: 모두 합쳐 영역 6개예요.",
        // EN (option C): Seesaw is for five domains with one lone pair. Xenon here has six domains: four bonds and two lone pairs.
        "2": "시소형은 영역 5개에 비공유 전자쌍이 1개일 때의 모양이에요. 여기서 제논은 영역이 6개예요: 결합 4개와 비공유 전자쌍 2개.",
        // EN (option D): Octahedral is the electron domain geometry. The molecular geometry describes only the atoms, and two of the six positions hold lone pairs.
        "3": "정팔면체형은 전자 영역 배치예요. 분자 모양은 원자만 보고 나타내는데, 6자리 중 2자리에 비공유 전자쌍이 있어요.",
      },
    },

    // ── s2-2h-q015 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q015": {
      // EN: <p>What is the molecular geometry of <span class="chem">BrF3</span>?</p>
      stem: "<p><span class=\"chem\">BrF3</span>의 분자 모양은 무엇인가요?</p>",
      options: [
        // EN: Trigonal planar
        "평면 삼각형",
        // EN: Trigonal pyramidal
        "삼각뿔형",
        // EN: T-shaped
        "T자형",
        // EN: Trigonal bipyramidal
        "삼각쌍뿔형",
      ],
      hints: [
        // EN: Bromine is in group 17.
        "브로민은 17족이에요.",
        // EN: Three bonding domains + two lone pairs = five domains. The lone pairs are equatorial.
        "결합 영역 3개 + 비공유 전자쌍 2개 = 영역 5개. 비공유 전자쌍은 적도 위치에 있어요.",
      ],
      // EN: <div class="worked__math">Br: 7 valence electrons; 3 used in bonds; 4 left = 2 lone pairs</div><p>Five domains: trigonal bipyramidal arrangement. Both lone pairs are equatorial. The three fluorine atoms make a T shape, with bond angles a little less than 90°.</p>
      solution: "<div class=\"worked__math\">Br: 원자가 전자 7개; 결합에 3개 사용; 4개 남음 = 비공유 전자쌍 2개</div><p>영역이 5개이므로 삼각쌍뿔형 배치예요. 비공유 전자쌍 2개는 모두 적도 위치에 있어요. 플루오린 원자 3개는 T자 모양을 이루고, 결합각은 90°보다 조금 작아요.</p>",
      misconception: {
        // EN (option A): Trigonal planar would mean no lone pairs on bromine. Bromine has 7 valence electrons and uses only 3 in bonds.
        "0": "평면 삼각형이라면 브로민에 비공유 전자쌍이 없어야 해요. 브로민은 원자가 전자가 7개인데 결합에 3개만 써요.",
        // EN (option B): Trigonal pyramidal is for four domains with one lone pair. Bromine here has two lone pairs: (7 − 3) ÷ 2 = 2.
        "1": "삼각뿔형은 영역 4개에 비공유 전자쌍이 1개일 때의 모양이에요. 여기서 브로민에는 비공유 전자쌍이 2개 있어요: (7 − 3) ÷ 2 = 2.",
        // EN (option D): That is the electron domain geometry (five domains). Two of the five domains are lone pairs, so the atoms make a different shape.
        "3": "그것은 전자 영역 배치(영역 5개)예요. 영역 5개 중 2개가 비공유 전자쌍이므로 원자들은 다른 모양을 이뤄요.",
      },
    },

    // ── s2-2h-q016 · numeric · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q016": {
      // EN: <p>Deduce the Cl–I–Cl bond angle in the ion <span class="chem">ICl2-</span>. Iodine is the central atom.</p>
      stem: "<p>이온 <span class=\"chem\">ICl2-</span>에서 Cl–I–Cl 결합각을 추론하시오 (deduce). 아이오딘이 중심 원자예요.</p>",
      hints: [
        // EN: Count the electrons around iodine: 7 of its own, 1 from each chlorine, and 1 for the negative charge.
        "아이오딘 주위의 전자를 세어 보세요: 자기 전자 7개, 각 염소에서 1개씩, 음전하 때문에 1개.",
        // EN: Five pairs: two bonding pairs and three lone pairs. The lone pairs take the three equatorial positions.
        "전자쌍 5개: 공유 전자쌍 2개와 비공유 전자쌍 3개. 비공유 전자쌍이 적도 위치 3곳을 차지해요.",
      ],
      // EN: <div class="worked__math">Electrons around I = 7 + 2 + 1 = 10 = 5 pairs</div><div class="worked__math">2 bonding pairs + 3 lone pairs</div><p>Five domains are arranged in a trigonal bipyramid. The three lone pairs are equatorial. The two chlorine atoms are in the axial positions, so the ion is linear: <b>180°</b>.</p>
      solution: "<div class=\"worked__math\">I 주위의 전자 = 7 + 2 + 1 = 10 = 5쌍</div><div class=\"worked__math\">공유 전자쌍 2개 + 비공유 전자쌍 3개</div><p>영역 5개는 삼각쌍뿔 모양으로 배열돼요. 비공유 전자쌍 3개는 적도 위치에 있어요. 염소 원자 2개는 축 위치에 있으므로 이온은 직선형이에요: <b>180°</b>.</p>",
    },

    // ── s2-2h-q017 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q017": {
      // EN: <p>What is the molecular geometry of <span class="chem">IF5</span>?</p>
      stem: "<p><span class=\"chem\">IF5</span>의 분자 모양은 무엇인가요?</p>",
      options: [
        // EN: Trigonal bipyramidal
        "삼각쌍뿔형",
        // EN: Square pyramidal
        "사각뿔형",
        // EN: Octahedral
        "정팔면체형",
        // EN: Seesaw
        "시소형",
      ],
      hints: [
        // EN: Iodine is in group 17.
        "아이오딘은 17족이에요.",
        // EN: Five bonding domains + one lone pair = six domains.
        "결합 영역 5개 + 비공유 전자쌍 1개 = 영역 6개.",
      ],
      // EN: <div class="worked__math">I: 7 valence electrons; 5 used in bonds; 2 left = 1 lone pair</div><p>Six domains: octahedral arrangement. One position holds the lone pair. The five fluorine atoms make a square pyramid.</p>
      solution: "<div class=\"worked__math\">I: 원자가 전자 7개; 결합에 5개 사용; 2개 남음 = 비공유 전자쌍 1개</div><p>영역이 6개이므로 정팔면체형 배치예요. 한 자리에 비공유 전자쌍이 있어요. 플루오린 원자 5개는 사각뿔 모양을 이뤄요.</p>",
      misconception: {
        // EN (option A): This counts five bonds and forgets the lone pair. Iodine has 7 valence electrons and uses 5: one lone pair is left, so there are six domains.
        "0": "결합 5개만 세고 비공유 전자쌍을 빠뜨린 답이에요. 아이오딘은 원자가 전자 7개 중 5개를 써요: 비공유 전자쌍 1개가 남으므로 영역은 6개예요.",
        // EN (option C): Octahedral is the electron domain geometry. One of the six domains is a lone pair, so the atoms do not make an octahedron.
        "2": "정팔면체형은 전자 영역 배치예요. 영역 6개 중 하나가 비공유 전자쌍이므로 원자들은 정팔면체를 이루지 않아요.",
        // EN (option D): Seesaw is for five domains with one lone pair (four bonds). Here there are five bonds and one lone pair.
        "3": "시소형은 영역 5개에 비공유 전자쌍이 1개(결합 4개)일 때의 모양이에요. 여기서는 결합 5개와 비공유 전자쌍 1개가 있어요.",
      },
    },

    // ── s2-2h-q018 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q018": {
      // EN: <p>Which molecule is polar?</p>
      stem: "<p>다음 중 극성 분자는 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">PCl5</span>
        "<span class=\"chem\">PCl5</span>",
        // EN: <span class="chem">SF4</span>
        "<span class=\"chem\">SF4</span>",
        // EN: <span class="chem">XeF4</span>
        "<span class=\"chem\">XeF4</span>",
        // EN: <span class="chem">SF6</span>
        "<span class=\"chem\">SF6</span>",
      ],
      hints: [
        // EN: All four molecules have polar bonds. The question is whether the bond dipoles cancel.
        "네 분자 모두 극성 결합이 있어요. 문제는 결합의 쌍극자가 상쇄되는지예요.",
        // EN: Find the shape of each molecule. Which one is not symmetrical?
        "각 분자의 모양을 구해 보세요. 대칭이 아닌 것은 어느 것인가요?",
      ],
      // EN: <p><span class="chem">SF4</span> has a lone pair on sulfur and a seesaw shape. The S–F bond dipoles do not cancel, so the molecule has a net dipole. The other three shapes are symmetrical, so their bond dipoles cancel.</p>
      solution: "<p><span class=\"chem\">SF4</span>는 황에 비공유 전자쌍이 있고 시소형이에요. S–F 결합의 쌍극자가 상쇄되지 않으므로 분자 전체에 쌍극자가 남아요. 나머지 세 분자는 대칭인 모양이라 결합의 쌍극자가 상쇄돼요.</p>",
      misconception: {
        // EN (option A): PCl<sub>5</sub> is trigonal bipyramidal with five identical bonds and no lone pairs. The bond dipoles cancel.
        "0": "PCl<sub>5</sub>는 똑같은 결합 5개가 있고 비공유 전자쌍이 없는 삼각쌍뿔형이에요. 결합의 쌍극자가 상쇄돼요.",
        // EN (option C): XeF<sub>4</sub> is square planar. The four Xe–F bond dipoles point in opposite pairs and cancel.
        "2": "XeF<sub>4</sub>는 평면 사각형이에요. Xe–F 결합의 쌍극자 4개가 둘씩 반대 방향을 향해 상쇄돼요.",
        // EN (option D): SF<sub>6</sub> is octahedral. The six S–F bond dipoles cancel in opposite pairs.
        "3": "SF<sub>6</sub>는 정팔면체형이에요. S–F 결합의 쌍극자 6개가 둘씩 반대 방향으로 상쇄돼요.",
      },
    },

    // ── s2-2h-q019 · mcq · challenge · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q019": {
      // EN: <p>Iodine forms the ions <span class="chem">IF4+</span> and <span class="chem">IF4-</span>. What are their molecular geometries?</p>
      stem: "<p>아이오딘은 <span class=\"chem\">IF4+</span> 이온과 <span class=\"chem\">IF4-</span> 이온을 만들어요. 두 이온의 분자 모양은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: square planar.
        "<span class=\"chem\">IF4+</span>: 시소형. <span class=\"chem\">IF4-</span>: 평면 사각형.",
        // EN: <span class="chem">IF4+</span>: tetrahedral. <span class="chem">IF4-</span>: tetrahedral.
        "<span class=\"chem\">IF4+</span>: 정사면체형. <span class=\"chem\">IF4-</span>: 정사면체형.",
        // EN: <span class="chem">IF4+</span>: square planar. <span class="chem">IF4-</span>: seesaw.
        "<span class=\"chem\">IF4+</span>: 평면 사각형. <span class=\"chem\">IF4-</span>: 시소형.",
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: seesaw.
        "<span class=\"chem\">IF4+</span>: 시소형. <span class=\"chem\">IF4-</span>: 시소형.",
      ],
      hints: [
        // EN: Electrons around iodine = 7 + 4 (one from each F), then subtract 1 for a + charge or add 1 for a − charge.
        "아이오딘 주위의 전자 = 7 + 4(각 F에서 1개씩), 그다음 + 전하이면 1을 빼고 − 전하이면 1을 더해요.",
        // EN: Halve the total to get the number of electron domains. Four are bonding; the rest are lone pairs.
        "합계를 반으로 나누면 전자 영역 수가 나와요. 4개는 결합 영역이고, 나머지는 비공유 전자쌍이에요.",
      ],
      // EN: <div class="worked__math">IF<sub>4</sub><sup>+</sup>: 7 + 4 − 1 = 10 electrons = 5 domains = 4 bonds + 1 lone pair</div><div class="worked__math">IF<sub>4</sub><sup>−</sup>: 7 + 4 + 1 = 12 electrons = 6 domains = 4 bonds + 2 lone pairs</div><p>Five domains with one lone pair: seesaw. Six domains with two lone pairs: square planar.</p>
      solution: "<div class=\"worked__math\">IF<sub>4</sub><sup>+</sup>: 7 + 4 − 1 = 전자 10개 = 영역 5개 = 결합 4개 + 비공유 전자쌍 1개</div><div class=\"worked__math\">IF<sub>4</sub><sup>−</sup>: 7 + 4 + 1 = 전자 12개 = 영역 6개 = 결합 4개 + 비공유 전자쌍 2개</div><p>영역 5개에 비공유 전자쌍 1개: 시소형. 영역 6개에 비공유 전자쌍 2개: 평면 사각형.</p>",
      misconception: {
        // EN (option B): This counts only the four bonds. Iodine has lone pairs in both ions. Count all the electrons around iodine, including the charge.
        "1": "결합 4개만 센 답이에요. 두 이온 모두 아이오딘에 비공유 전자쌍이 있어요. 전하까지 포함해서 아이오딘 주위의 전자를 모두 세어 보세요.",
        // EN (option C): The charges are the wrong way round. A positive charge means one electron fewer; a negative charge means one electron more.
        "2": "전하를 거꾸로 적용했어요. 양전하는 전자가 1개 적다는 뜻이고, 음전하는 전자가 1개 많다는 뜻이에요.",
        // EN (option D): This ignores the charge. The two ions have different numbers of electrons around iodine, so they have different numbers of lone pairs.
        "3": "전하를 무시한 답이에요. 두 이온은 아이오딘 주위의 전자 수가 다르므로 비공유 전자쌍 수도 달라요.",
      },
    },

    // ── s2-2h-q020 · short · challenge · AHL · Structure 2.2.13 · 4 marks
    "s2-2h-q020": {
      // EN: <p>Solid phosphorus(V) chloride contains the ions <span class="chem">PCl4+</span> and <span class="chem">PCl6-</span>.</p><p>Deduce the molecular geometry and the Cl–P–Cl bond angle (between neighbouring bonds) of each ion. Show how you counted the electron domains.</p>
      stem: "<p>고체 염화 인(V)에는 <span class=\"chem\">PCl4+</span> 이온과 <span class=\"chem\">PCl6-</span> 이온이 들어 있어요.</p><p>각 이온의 분자 모양과 (이웃한 결합 사이의) Cl–P–Cl 결합각을 추론하시오 (deduce). 전자 영역을 어떻게 세었는지 보이세요.</p>",
      hints: [
        // EN: Electrons around P = 5 (its own) + 1 from each Cl, then adjust for the charge.
        "P 주위의 전자 = 5(자기 전자) + 각 Cl에서 1개씩, 그다음 전하에 맞게 조정해요.",
        // EN: Divide by 2 to get the number of domains. Compare with the number of bonds to find the lone pairs.
        "2로 나누면 영역 수가 나와요. 결합 수와 비교해서 비공유 전자쌍을 찾으세요.",
      ],
      // EN: <div class="worked__math">PCl<sub>4</sub><sup>+</sup>: 5 + 4 − 1 = 8 electrons = 4 domains (4 bonds, 0 lone pairs)</div><div class="worked__math">PCl<sub>6</sub><sup>−</sup>: 5 + 6 + 1 = 12 electrons = 6 domains (6 bonds, 0 lone pairs)</div><p>Four bonding domains: tetrahedral, 109.5°. Six bonding domains: octahedral, 90°. Only the anion has an expanded octet.</p>
      solution: "<div class=\"worked__math\">PCl<sub>4</sub><sup>+</sup>: 5 + 4 − 1 = 전자 8개 = 영역 4개 (결합 4개, 비공유 전자쌍 0개)</div><div class=\"worked__math\">PCl<sub>6</sub><sup>−</sup>: 5 + 6 + 1 = 전자 12개 = 영역 6개 (결합 6개, 비공유 전자쌍 0개)</div><p>결합 영역 4개: 정사면체형, 109.5°. 결합 영역 6개: 정팔면체형, 90°. 확장된 옥텟을 가진 것은 음이온뿐이에요.</p>",
      // EN: <p><span class="chem">PCl4+</span>: electrons around P = 5 + 4 − 1 = 8, so four electron domains, all bonding. Tetrahedral, 109.5°.</p><p><span class="chem">PCl6-</span>: electrons around P = 5 + 6 + 1 = 12, so six electron domains, all bonding. Octahedral, 90°.</p>
      answer: "<p><span class=\"chem\">PCl4+</span>: P 주위의 전자 = 5 + 4 − 1 = 8, 그래서 전자 영역은 4개이고 모두 결합 영역이에요. 정사면체형, 109.5°.</p><p><span class=\"chem\">PCl6-</span>: P 주위의 전자 = 5 + 6 + 1 = 12, 그래서 전자 영역은 6개이고 모두 결합 영역이에요. 정팔면체형, 90°.</p>",
      markscheme: [
        // EN: PCl<sub>4</sub><sup>+</sup>: four electron domains / four bonding pairs and no lone pairs on P.
        "PCl<sub>4</sub><sup>+</sup>: 전자 영역 4개 / P에 공유 전자쌍 4개, 비공유 전자쌍 없음.",
        // EN: PCl<sub>4</sub><sup>+</sup>: tetrahedral AND 109.5°.
        "PCl<sub>4</sub><sup>+</sup>: 정사면체형, 그리고 109.5°.",
        // EN: PCl<sub>6</sub><sup>−</sup>: six electron domains / six bonding pairs and no lone pairs on P.
        "PCl<sub>6</sub><sup>−</sup>: 전자 영역 6개 / P에 공유 전자쌍 6개, 비공유 전자쌍 없음.",
        // EN: PCl<sub>6</sub><sup>−</sup>: octahedral AND 90°.
        "PCl<sub>6</sub><sup>−</sup>: 정팔면체형, 그리고 90°.",
      ],
    },

    // ── s2-2h-q021 · numeric · foundation · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q021": {
      // EN: <p>In the Lewis formula of the ammonium ion, <span class="chem">NH4+</span>, nitrogen has four single bonds and no lone pairs.</p><p>Calculate the formal charge on the nitrogen atom. Include the sign.</p>
      stem: "<p>암모늄 이온(<span class=\"chem\">NH4+</span>)의 루이스 구조식에서 질소는 단일 결합 4개를 가지고 비공유 전자쌍은 없어요.</p><p>질소 원자의 형식 전하를 계산하시오 (calculate). 부호도 함께 쓰세요.</p>",
      hints: [
        // EN: FC = V − N − ½B. V is the number of valence electrons of a free nitrogen atom.
        "FC = V − N − ½B. V는 자유로운 질소 원자 하나의 원자가 전자 수예요.",
        // EN: N = 0 (no lone pairs). B = 8 (four bonds, two electrons each).
        "N = 0(비공유 전자쌍 없음). B = 8(결합 4개, 결합마다 전자 2개).",
      ],
      // EN: <div class="worked__math">V = 5 (group 15), N = 0, B = 8</div><div class="worked__math">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>Each hydrogen has FC = 1 − 0 − ½(2) = 0. The total, +1, equals the charge on the ion.</p>
      solution: "<div class=\"worked__math\">V = 5 (15족), N = 0, B = 8</div><div class=\"worked__math\">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>각 수소의 FC = 1 − 0 − ½(2) = 0이에요. 합계 +1은 이온의 전하와 같아요.</p>",
    },

    // ── s2-2h-q022 · numeric · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q022": {
      // EN: <p>One Lewis formula of the chlorate ion, <span class="chem">ClO3-</span>, has chlorine joined to three oxygen atoms by single bonds. Chlorine has one lone pair. Each oxygen has three lone pairs.</p><p>Calculate the formal charge on the chlorine atom in this formula. Include the sign.</p>
      stem: "<p>염소산 이온(<span class=\"chem\">ClO3-</span>)의 루이스 구조식 하나에서는 염소가 산소 원자 3개와 단일 결합으로 연결되어 있어요. 염소에는 비공유 전자쌍이 1개 있어요. 각 산소에는 비공유 전자쌍이 3개 있어요.</p><p>이 구조식에서 염소 원자의 형식 전하를 계산하시오 (calculate). 부호도 함께 쓰세요.</p>",
      hints: [
        // EN: FC = V − N − ½B. Chlorine is in group 17.
        "FC = V − N − ½B. 염소는 17족이에요.",
        // EN: N counts electrons, not pairs: one lone pair is 2 electrons. B = 6 (three single bonds).
        "N은 전자쌍이 아니라 전자의 수를 세요: 비공유 전자쌍 1개는 전자 2개예요. B = 6(단일 결합 3개).",
      ],
      // EN: <div class="worked__math">V = 7, N = 2, B = 6</div><div class="worked__math">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class="worked__math">FC(each O) = 6 − 6 − ½(2) = −1</div><p>Check: +2 + 3(−1) = −1, the charge on the ion. Do not confuse this with the oxidation state of chlorine, which is +5.</p>
      solution: "<div class=\"worked__math\">V = 7, N = 2, B = 6</div><div class=\"worked__math\">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class=\"worked__math\">FC(각 O) = 6 − 6 − ½(2) = −1</div><p>확인: +2 + 3(−1) = −1로 이온의 전하와 같아요. 이 값을 염소의 산화수(+5)와 헷갈리지 마세요.</p>",
    },

    // ── s2-2h-q023 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q023": {
      // EN: <p>Three Lewis formulas can be drawn for dinitrogen monoxide, <span class="chem">N2O</span>, with the atoms in the order N, N, O. The lone pairs on each atom are given in the same order.</p><ul><li>I: N≡N–O, with 1, 0 and 3 lone pairs</li><li>II: N=N=O, with 2, 0 and 2 lone pairs</li><li>III: N–N≡O, with 3, 0 and 1 lone pairs</li></ul><p>Which is the preferred Lewis formula? (Electronegativity: N 3.0, O 3.4.)</p>
      stem: "<p>일산화 이질소(<span class=\"chem\">N2O</span>)는 원자 순서가 N, N, O일 때 루이스 구조식을 3가지 그릴 수 있어요. 각 원자의 비공유 전자쌍 수도 같은 순서로 적었어요.</p><ul><li>I: N≡N–O, 비공유 전자쌍 1, 0, 3개</li><li>II: N=N=O, 비공유 전자쌍 2, 0, 2개</li><li>III: N–N≡O, 비공유 전자쌍 3, 0, 1개</li></ul><p>가장 바람직한 루이스 구조식은 어느 것인가요? (전기 음성도: N 3.0, O 3.4)</p>",
      options: [
        // EN: I
        "I",
        // EN: II
        "II",
        // EN: III
        "III",
        // EN: I and II are equally preferred, because their formal charges are the same size.
        "형식 전하의 크기가 같으므로 I과 II가 똑같이 바람직하다.",
      ],
      hints: [
        // EN: Calculate FC = V − N − ½B for all three atoms in each formula.
        "각 구조식에서 세 원자 모두에 대해 FC = V − N − ½B를 계산하세요.",
        // EN: First reject the formula with the largest charges. Then look at which atom carries the negative charge.
        "먼저 전하가 가장 큰 구조식을 버리세요. 그다음 어느 원자에 음전하가 있는지 보세요.",
      ],
      // EN: <div class="worked__math">I: N 5 − 2 − 3 = 0; N 5 − 0 − 4 = +1; O 6 − 6 − 1 = −1</div><div class="worked__math">II: N 5 − 4 − 2 = −1; N +1; O 6 − 4 − 2 = 0</div><div class="worked__math">III: N 5 − 6 − 1 = −2; N +1; O 6 − 2 − 3 = +1</div><p>III has the largest charges. I and II both have one +1 and one −1, but I puts the −1 on oxygen, the more electronegative atom. I is preferred.</p>
      solution: "<div class=\"worked__math\">I: N 5 − 2 − 3 = 0; N 5 − 0 − 4 = +1; O 6 − 6 − 1 = −1</div><div class=\"worked__math\">II: N 5 − 4 − 2 = −1; N +1; O 6 − 4 − 2 = 0</div><div class=\"worked__math\">III: N 5 − 6 − 1 = −2; N +1; O 6 − 2 − 3 = +1</div><p>III은 전하가 가장 커요. I과 II는 둘 다 +1 하나와 −1 하나가 있지만, I은 −1을 전기 음성도가 더 큰 산소에 두어요. 그래서 I이 바람직해요.</p>",
      misconception: {
        // EN (option B): II has formal charges −1, +1, 0. The negative charge sits on nitrogen. Oxygen is more electronegative, so the negative charge is better placed on oxygen.
        "1": "II의 형식 전하는 −1, +1, 0이에요. 음전하가 질소에 있어요. 산소의 전기 음성도가 더 크므로 음전하는 산소에 있는 것이 더 좋아요.",
        // EN (option C): III has formal charges −2, +1, +1. These are the largest charges of the three, and oxygen is positive. Reject it first.
        "2": "III의 형식 전하는 −2, +1, +1이에요. 세 구조식 중 전하가 가장 크고, 산소가 양전하를 띠어요. 이것부터 버리세요.",
        // EN (option D): The sizes are the same, so use the second rule: a negative formal charge should be on the more electronegative atom. That separates I from II.
        "3": "크기가 같으면 두 번째 규칙을 써요: 음의 형식 전하는 전기 음성도가 더 큰 원자에 있어야 해요. 이 규칙으로 I과 II를 구별할 수 있어요.",
      },
    },

    // ── s2-2h-q024 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q024": {
      // EN: <p>Which assumption is made when the formal charge of an atom is calculated?</p>
      stem: "<p>원자의 형식 전하를 계산할 때 세우는 가정은 어느 것인가요?</p>",
      options: [
        // EN: The electrons in each bond are shared equally between the two bonded atoms.
        "각 결합의 전자는 결합한 두 원자가 똑같이 나누어 가진다.",
        // EN: The electrons in each bond belong completely to the more electronegative atom.
        "각 결합의 전자는 전기 음성도가 더 큰 원자가 모두 가진다.",
        // EN: The lone pairs are shared equally among all the atoms in the species.
        "비공유 전자쌍은 화학종의 모든 원자가 똑같이 나누어 가진다.",
        // EN: Every atom in the species has an octet of electrons.
        "화학종의 모든 원자는 전자 8개(옥텟)를 가진다.",
      ],
      hints: [
        // EN: Look at the formula: FC = V − N − ½B. Why is B halved?
        "식을 보세요: FC = V − N − ½B. B를 왜 반으로 나눌까요?",
      ],
      // EN: <p>The ½ in front of B gives each atom half of the electrons in its bonds. So formal charge treats every bond as perfectly covalent (equal sharing). Oxidation state makes the opposite assumption: every bond is treated as ionic, with the electrons given to the more electronegative atom.</p>
      solution: "<p>B 앞의 ½은 각 원자에 결합 전자의 절반씩을 줘요. 그래서 형식 전하는 모든 결합을 완전한 공유 결합(똑같이 나눔)으로 봐요. 산화수는 반대 가정을 해요: 모든 결합을 이온 결합으로 보고, 전자를 전기 음성도가 더 큰 원자에 줘요.</p>",
      misconception: {
        // EN (option B): That is the assumption for oxidation states. Formal charge ignores electronegativity and splits each bond evenly.
        "1": "그것은 산화수를 구할 때의 가정이에요. 형식 전하는 전기 음성도를 무시하고 각 결합을 똑같이 나눠요.",
        // EN (option C): Lone pairs belong completely to the atom they are drawn on. That is why N is subtracted in full.
        "2": "비공유 전자쌍은 그것이 그려진 원자가 모두 가져요. 그래서 N을 전부 빼요.",
        // EN (option D): Formal charge can be calculated for any Lewis formula, including ones with expanded octets or fewer than eight electrons.
        "3": "형식 전하는 확장된 옥텟이나 전자가 8개보다 적은 경우를 포함해 어떤 루이스 구조식에서도 계산할 수 있어요.",
      },
    },

    // ── s2-2h-q025 · mcq · challenge · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q025": {
      // EN: <p>Lewis formulas of the phosphate ion, <span class="chem">PO4^3-</span>, can be drawn with different numbers of P=O double bonds. Every oxygen atom has an octet in each formula. Phosphorus has no lone pairs.</p><p>Which formula is preferred, using formal charge? (Electronegativity: P 2.2, O 3.4.)</p>
      stem: "<p>인산 이온(<span class=\"chem\">PO4^3-</span>)의 루이스 구조식은 P=O 이중 결합의 개수를 달리하여 여러 가지로 그릴 수 있어요. 어느 구조식에서나 모든 산소 원자는 옥텟을 가져요. 인에는 비공유 전자쌍이 없어요.</p><p>형식 전하로 판단할 때 가장 바람직한 구조식은 어느 것인가요? (전기 음성도: P 2.2, O 3.4)</p>",
      options: [
        // EN: No P=O bonds (four P–O single bonds)
        "P=O 결합 없음(P–O 단일 결합 4개)",
        // EN: One P=O bond and three P–O bonds
        "P=O 결합 1개와 P–O 결합 3개",
        // EN: Two P=O bonds and two P–O bonds
        "P=O 결합 2개와 P–O 결합 2개",
        // EN: Four P=O bonds
        "P=O 결합 4개",
      ],
      hints: [
        // EN: A singly bonded O with three lone pairs has FC = −1. A doubly bonded O with two lone pairs has FC = 0.
        "단일 결합을 하고 비공유 전자쌍이 3개인 O는 FC = −1이에요. 이중 결합을 하고 비공유 전자쌍이 2개인 O는 FC = 0이에요.",
        // EN: For P: FC = 5 − 0 − ½B. Work it out for 4, 5, 6 and 8 bonding pairs.
        "P의 경우: FC = 5 − 0 − ½B. 공유 전자쌍이 4, 5, 6, 8개일 때 각각 계산해 보세요.",
      ],
      // EN: <div class="worked__math">No P=O: P = 5 − ½(8) = +1; O: four at −1</div><div class="worked__math">One P=O: P = 5 − ½(10) = 0; O: one at 0, three at −1</div><div class="worked__math">Two P=O: P = 5 − ½(12) = −1; O: two at 0, two at −1</div><div class="worked__math">Four P=O: P = 5 − ½(16) = −3; O: four at 0</div><p>Every set adds up to −3. The formula with one P=O has the formal charges closest to zero, and all its negative charges are on oxygen, the more electronegative atom.</p>
      solution: "<div class=\"worked__math\">P=O 없음: P = 5 − ½(8) = +1; O: 넷 모두 −1</div><div class=\"worked__math\">P=O 하나: P = 5 − ½(10) = 0; O: 하나는 0, 셋은 −1</div><div class=\"worked__math\">P=O 둘: P = 5 − ½(12) = −1; O: 둘은 0, 둘은 −1</div><div class=\"worked__math\">P=O 넷: P = 5 − ½(16) = −3; O: 넷 모두 0</div><p>어느 경우든 합계는 −3이에요. P=O가 1개인 구조식이 형식 전하가 0에 가장 가깝고, 음전하가 모두 전기 음성도가 더 큰 산소에 있어요.</p>",
      misconception: {
        // EN (option A): This gives +1 on P and −1 on all four O atoms: five atoms carry a charge. Another formula has fewer charged atoms.
        "0": "이 구조식은 P에 +1, O 원자 4개 모두에 −1을 줘요: 전하를 띤 원자가 5개예요. 전하를 띤 원자가 더 적은 구조식이 있어요.",
        // EN (option C): This gives −1 on P and −1 on two O atoms. A negative formal charge on phosphorus is not favoured, because oxygen is more electronegative.
        "2": "이 구조식은 P에 −1, O 원자 2개에 −1을 줘요. 산소가 전기 음성도가 더 크므로 인에 음의 형식 전하가 있는 것은 바람직하지 않아요.",
        // EN (option D): This gives −3 on phosphorus and 0 on every oxygen. A large negative charge on the less electronegative atom is the worst choice.
        "3": "이 구조식은 인에 −3, 모든 산소에 0을 줘요. 전기 음성도가 더 작은 원자에 큰 음전하를 두는 것은 가장 나쁜 선택이에요.",
      },
    },

    // ── s2-2h-q026 · short · challenge · AHL · Structure 2.2.14 · 3 marks
    "s2-2h-q026": {
      // EN: <p>Two Lewis formulas can be drawn for the sulfate ion, <span class="chem">SO4^2-</span>. In both, sulfur has no lone pairs and every oxygen has an octet.</p><ul><li>A: four S–O single bonds</li><li>B: two S=O double bonds and two S–O single bonds</li></ul><p>Calculate the formal charge on sulfur in each formula. Then state which formula is preferred, with a reason.</p>
      stem: "<p>황산 이온(<span class=\"chem\">SO4^2-</span>)의 루이스 구조식은 2가지로 그릴 수 있어요. 두 구조식 모두 황에는 비공유 전자쌍이 없고, 모든 산소는 옥텟을 가져요.</p><ul><li>A: S–O 단일 결합 4개</li><li>B: S=O 이중 결합 2개와 S–O 단일 결합 2개</li></ul><p>각 구조식에서 황의 형식 전하를 계산하시오 (calculate). 그다음 어느 구조식이 바람직한지 이유와 함께 쓰시오 (state).</p>",
      hints: [
        // EN: FC = V − N − ½B, with V = 6 for sulfur.
        "FC = V − N − ½B이고, 황은 V = 6이에요.",
        // EN: B = 8 in formula A. In formula B, count 4 electrons for each double bond.
        "구조식 A에서는 B = 8이에요. 구조식 B에서는 이중 결합 하나마다 전자 4개로 세세요.",
      ],
      // EN: <div class="worked__math">A: FC(S) = 6 − 0 − ½(8) = +2; each O = 6 − 6 − ½(2) = −1</div><div class="worked__math">B: FC(S) = 6 − 0 − ½(12) = 0; O (double) = 6 − 4 − ½(4) = 0; O (single) = −1</div><p>Both add up to −2. B has charges closest to zero, so formal charge prefers B. In B sulfur has an expanded octet (12 electrons), which is possible for a period 3 element.</p>
      solution: "<div class=\"worked__math\">A: FC(S) = 6 − 0 − ½(8) = +2; 각 O = 6 − 6 − ½(2) = −1</div><div class=\"worked__math\">B: FC(S) = 6 − 0 − ½(12) = 0; O (이중 결합) = 6 − 4 − ½(4) = 0; O (단일 결합) = −1</div><p>두 구조식 모두 합계는 −2예요. B의 전하가 0에 가장 가까우므로 형식 전하로는 B가 바람직해요. B에서 황은 확장된 옥텟(전자 12개)을 가지는데, 3주기 원소이므로 가능해요.</p>",
      // EN: <p>A: FC(S) = 6 − 0 − ½(8) = +2. B: FC(S) = 6 − 0 − ½(12) = 0. B is preferred, because its formal charges are closest to zero (sulfur is 0 and only two oxygen atoms are −1).</p>
      answer: "<p>A: FC(S) = 6 − 0 − ½(8) = +2. B: FC(S) = 6 − 0 − ½(12) = 0. B가 바람직해요. 형식 전하가 0에 가장 가깝기 때문이에요(황은 0이고, 산소 원자 2개만 −1이에요).</p>",
      markscheme: [
        // EN: A: formal charge on S = +2.
        "A: S의 형식 전하 = +2.",
        // EN: B: formal charge on S = 0.
        "B: S의 형식 전하 = 0.",
        // EN: B is preferred because its formal charges are closest to zero / fewer atoms have a non-zero formal charge.
        "B가 바람직하다. 형식 전하가 0에 가장 가깝기 때문이다 / 형식 전하가 0이 아닌 원자가 더 적기 때문이다.",
      ],
    },

    // ── s2-2h-q027 · numeric · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q027": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "<p>ethene(<span class=\"chem\">CH2=CH2</span>) 분자 하나에는 시그마(σ) 결합이 몇 개 있나요?</p>",
      hints: [
        // EN: Every single bond is one σ bond. Do not forget the C–H bonds.
        "단일 결합은 모두 σ 결합 1개예요. C–H 결합을 잊지 마세요.",
        // EN: A double bond is one σ bond and one π bond.
        "이중 결합은 σ 결합 1개와 π 결합 1개예요.",
      ],
      // EN: <div class="worked__math">C–H bonds: 4 σ</div><div class="worked__math">C=C bond: 1 σ (and 1 π)</div><div class="worked__math">Total = 4 + 1 = <b>5 σ bonds</b></div>
      solution: "<div class=\"worked__math\">C–H 결합: σ 4개</div><div class=\"worked__math\">C=C 결합: σ 1개 (그리고 π 1개)</div><div class=\"worked__math\">합계 = 4 + 1 = <b>σ 결합 5개</b></div>",
      // EN: σ bonds
      unit: "σ 결합",
    },

    // ── s2-2h-q028 · mcq · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q028": {
      // EN: <p>Which describes how a sigma (σ) bond forms?</p>
      stem: "<p>시그마(σ) 결합이 만들어지는 방식을 옳게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated along the bond axis.
        "원자 오비탈이 정면으로 겹친다. 전자 밀도는 결합 축을 따라 모여 있다.",
        // EN: Sideways overlap of p orbitals; electron density is concentrated above and below the bond axis.
        "p 오비탈이 옆으로 나란히 겹친다. 전자 밀도는 결합 축의 위아래에 모여 있다.",
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated above and below the bond axis.
        "원자 오비탈이 정면으로 겹친다. 전자 밀도는 결합 축의 위아래에 모여 있다.",
        // EN: Transfer of an electron from one atom to the other.
        "한 원자에서 다른 원자로 전자가 이동한다.",
      ],
      hints: [
        // EN: The bond axis is the line joining the two nuclei.
        "결합 축은 두 원자핵을 잇는 선이에요.",
      ],
      // EN: <p>A σ bond forms when two atomic orbitals overlap head-on (end to end). The shared electrons are found mainly on the bond axis, between the nuclei.</p>
      solution: "<p>σ 결합은 두 원자 오비탈이 정면으로(끝과 끝이) 겹칠 때 만들어져요. 공유된 전자는 주로 결합 축 위, 두 원자핵 사이에 있어요.</p>",
      misconception: {
        // EN (option B): This describes a π bond. A π bond needs p orbitals side by side.
        "1": "이것은 π 결합에 대한 설명이에요. π 결합은 p 오비탈이 옆으로 나란히 있어야 해요.",
        // EN (option C): Head-on overlap puts the electron density between the two nuclei, on the line that joins them. Density on opposite sides of the axis belongs to a π bond.
        "2": "정면으로 겹치면 전자 밀도는 두 원자핵 사이, 두 핵을 잇는 선 위에 놓여요. 결합 축의 양쪽에 있는 전자 밀도는 π 결합의 특징이에요.",
        // EN (option D): Electron transfer gives ions and ionic bonding. σ and π bonds are both covalent: electrons are shared.
        "3": "전자가 이동하면 이온이 생겨 이온 결합이 돼요. σ 결합과 π 결합은 둘 다 공유 결합이에요: 전자를 나누어 가져요.",
      },
    },

    // ── s2-2h-q029 · numeric · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q029": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethanoic acid, <span class="chem">CH3COOH</span>?</p>
      stem: "<p>ethanoic acid(<span class=\"chem\">CH3COOH</span>) 분자 하나에는 시그마(σ) 결합이 몇 개 있나요?</p>",
      hints: [
        // EN: Draw the full structural formula first: CH<sub>3</sub>–C(=O)–O–H.
        "먼저 전개 구조식을 그려 보세요: CH<sub>3</sub>–C(=O)–O–H.",
        // EN: Count one σ bond for every pair of atoms that are joined, including C–H and O–H.
        "연결된 원자 쌍마다 σ 결합을 1개씩 세세요. C–H와 O–H도 포함해요.",
      ],
      // EN: <div class="worked__math">C–H: 3; C–C: 1; C=O: 1 σ (and 1 π); C–O: 1; O–H: 1</div><div class="worked__math">Total = 3 + 1 + 1 + 1 + 1 = <b>7 σ bonds</b></div><p>Check: a molecule with no rings and 8 atoms has 8 − 1 = 7 σ bonds.</p>
      solution: "<div class=\"worked__math\">C–H: 3; C–C: 1; C=O: σ 1 (그리고 π 1); C–O: 1; O–H: 1</div><div class=\"worked__math\">합계 = 3 + 1 + 1 + 1 + 1 = <b>σ 결합 7개</b></div><p>확인: 고리가 없고 원자가 8개인 분자는 σ 결합이 8 − 1 = 7개예요.</p>",
      // EN: σ bonds
      unit: "σ 결합",
    },

    // ── s2-2h-q030 · mcq · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q030": {
      // EN: <p>How many σ bonds and π bonds are there in one molecule of propenenitrile, <span class="chem">CH2=CH–C≡N</span>?</p>
      stem: "<p>propenenitrile(<span class=\"chem\">CH2=CH–C≡N</span>) 분자 하나에는 σ 결합과 π 결합이 각각 몇 개 있나요?</p>",
      options: [
        // EN: 6 σ and 3 π
        "σ 6개와 π 3개",
        // EN: 3 σ and 3 π
        "σ 3개와 π 3개",
        // EN: 6 σ and 2 π
        "σ 6개와 π 2개",
        // EN: 4 σ and 5 π
        "σ 4개와 π 5개",
      ],
      hints: [
        // EN: Draw every bond, including the three C–H bonds.
        "C–H 결합 3개를 포함해 모든 결합을 그려 보세요.",
        // EN: Double bond = 1 σ + 1 π. Triple bond = 1 σ + 2 π.
        "이중 결합 = σ 1개 + π 1개. 삼중 결합 = σ 1개 + π 2개.",
      ],
      // EN: <div class="worked__math">σ: C–H 3; C=C 1; C–C 1; C≡N 1; total 6</div><div class="worked__math">π: C=C 1; C≡N 2; total 3</div>
      solution: "<div class=\"worked__math\">σ: C–H 3; C=C 1; C–C 1; C≡N 1; 합계 6</div><div class=\"worked__math\">π: C=C 1; C≡N 2; 합계 3</div>",
      misconception: {
        // EN (option B): The three C–H bonds are missing. They are hidden in the condensed formula, but each one is a σ bond.
        "1": "C–H 결합 3개가 빠졌어요. 축약 구조식에서는 보이지 않지만, 하나하나가 σ 결합이에요.",
        // EN (option C): A triple bond has two π bonds, not one. So C≡N gives 2 π and C=C gives 1 π.
        "2": "삼중 결합에는 π 결합이 1개가 아니라 2개 있어요. 그래서 C≡N은 π 2개, C=C는 π 1개예요.",
        // EN (option D): This counts every line of a multiple bond as π. One bond in each double or triple bond is always a σ bond.
        "3": "다중 결합의 선을 모두 π로 센 답이에요. 이중 결합이나 삼중 결합에서 결합 하나는 항상 σ 결합이에요.",
      },
    },

    // ── s2-2h-q031 · short · exam · AHL · Structure 2.2.15 · 2 marks
    "s2-2h-q031": {
      // EN: <p>The carbon–carbon double bond in ethene is made of one σ bond and one π bond.</p><p>Describe how each bond forms, and state where its electron density is concentrated.</p>
      stem: "<p>ethene의 탄소–탄소 이중 결합은 σ 결합 1개와 π 결합 1개로 이루어져 있어요.</p><p>각 결합이 어떻게 만들어지는지 서술하고 (describe), 전자 밀도가 어디에 모여 있는지 쓰시오 (state).</p>",
      hints: [
        // EN: One bond is made by orbitals pointing at each other. The other is made by orbitals standing side by side.
        "한 결합은 서로를 향하는 오비탈로 만들어져요. 다른 결합은 옆으로 나란히 선 오비탈로 만들어져요.",
        // EN: Say which type of orbital makes the π bond.
        "π 결합을 만드는 오비탈의 종류를 쓰세요.",
      ],
      // EN: <p>σ: head-on overlap, density on the axis. π: sideways overlap of p orbitals, density on opposite sides of the axis. A diagram with labels can score these marks.</p>
      solution: "<p>σ: 정면 겹침, 전자 밀도는 축 위. π: p 오비탈의 옆 겹침, 전자 밀도는 축의 양쪽. 이름표를 단 그림으로도 이 점수를 받을 수 있어요.</p>",
      // EN: <p>The σ bond forms by head-on (end-to-end) overlap of two orbitals, one from each carbon atom. Its electron density is concentrated along the bond axis, between the two nuclei. The π bond forms by sideways (lateral) overlap of two p orbitals. Its electron density is concentrated above and below the bond axis.</p>
      answer: "<p>σ 결합은 각 탄소 원자에서 하나씩 나온 두 오비탈이 정면으로(끝과 끝이) 겹쳐서 만들어져요. 전자 밀도는 결합 축을 따라 두 원자핵 사이에 모여 있어요. π 결합은 두 p 오비탈이 옆으로(측면으로) 겹쳐서 만들어져요. 전자 밀도는 결합 축의 위아래에 모여 있어요.</p>",
      markscheme: [
        // EN: σ: head-on / end-to-end overlap of (atomic or hybrid) orbitals AND electron density along the bond axis / between the nuclei.
        "σ: (원자 또는 혼성) 오비탈의 정면 / 끝과 끝 겹침, 그리고 전자 밀도가 결합 축을 따라 / 두 원자핵 사이에 있음.",
        // EN: π: sideways / lateral overlap of p orbitals AND electron density above and below (on opposite sides of) the bond axis.
        "π: p 오비탈의 옆 / 측면 겹침, 그리고 전자 밀도가 결합 축의 위아래(양쪽)에 있음.",
      ],
    },

    // ── s2-2h-q032 · order · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q032": {
      // EN: <p>Put these molecules in order of the number of π bonds in one molecule, <strong>fewest first</strong>.</p>
      stem: "<p>분자 하나에 들어 있는 π 결합의 수에 따라 다음 분자들을 <strong>적은 것부터</strong> 순서대로 놓으세요.</p>",
      options: [
        // EN: <span class="chem">CH3CH3</span> (ethane)
        "<span class=\"chem\">CH3CH3</span> (ethane)",
        // EN: <span class="chem">CH2=CH2</span> (ethene)
        "<span class=\"chem\">CH2=CH2</span> (ethene)",
        // EN: <span class="chem">H–C≡N</span> (hydrogen cyanide)
        "<span class=\"chem\">H–C≡N</span> (사이안화 수소)",
        // EN: <span class="chem">CH2=CH–C≡N</span> (propenenitrile)
        "<span class=\"chem\">CH2=CH–C≡N</span> (propenenitrile)",
      ],
      hints: [
        // EN: Single bond: 0 π. Double bond: 1 π. Triple bond: 2 π.
        "단일 결합: π 0개. 이중 결합: π 1개. 삼중 결합: π 2개.",
      ],
      // EN: <p>Ethane 0 π; ethene 1 π; hydrogen cyanide 2 π (one triple bond); propenenitrile 3 π (one double bond and one triple bond).</p>
      solution: "<p>ethane π 0개; ethene π 1개; 사이안화 수소 π 2개(삼중 결합 1개); propenenitrile π 3개(이중 결합 1개와 삼중 결합 1개).</p>",
    },

    // ── s2-2h-q033 · numeric · challenge · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q033": {
      // EN: <p>A molecule has the condensed structural formula <span class="chem">HC≡C–CH=CH–CHO</span>. The <span class="chem">CHO</span> group contains a C=O double bond and a C–H bond.</p><p>How many sigma (σ) bonds are there in one molecule?</p>
      stem: "<p>어떤 분자의 축약 구조식은 <span class=\"chem\">HC≡C–CH=CH–CHO</span>예요. <span class=\"chem\">CHO</span> 기에는 C=O 이중 결합과 C–H 결합이 들어 있어요.</p><p>분자 하나에는 시그마(σ) 결합이 몇 개 있나요?</p>",
      hints: [
        // EN: Draw the full structural formula. There are 5 carbon atoms, 4 hydrogen atoms and 1 oxygen atom.
        "전개 구조식을 그려 보세요. 탄소 원자 5개, 수소 원자 4개, 산소 원자 1개가 있어요.",
        // EN: Each multiple bond contains exactly one σ bond. Each C–H bond is a σ bond.
        "다중 결합에는 σ 결합이 정확히 1개씩 들어 있어요. C–H 결합은 모두 σ 결합이에요.",
      ],
      // EN: <div class="worked__math">C–H: 4; C≡C: 1 σ; C–C: 2; C=C: 1 σ; C=O: 1 σ</div><div class="worked__math">Total = 4 + 1 + 2 + 1 + 1 = <b>9 σ bonds</b></div><p>Check: 10 atoms and no rings gives 10 − 1 = 9 σ bonds. The molecule also has 2 + 1 + 1 = 4 π bonds.</p>
      solution: "<div class=\"worked__math\">C–H: 4; C≡C: σ 1; C–C: 2; C=C: σ 1; C=O: σ 1</div><div class=\"worked__math\">합계 = 4 + 1 + 2 + 1 + 1 = <b>σ 결합 9개</b></div><p>확인: 원자가 10개이고 고리가 없으면 σ 결합은 10 − 1 = 9개예요. 이 분자에는 π 결합도 2 + 1 + 1 = 4개 있어요.</p>",
      // EN: σ bonds
      unit: "σ 결합",
    },

    // ── s2-2h-q034 · mcq · foundation · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q034": {
      // EN: <p>What is the hybridization of each carbon atom in ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "<p>ethene(<span class=\"chem\">CH2=CH2</span>)에서 각 탄소 원자의 혼성화는 무엇인가요?</p>",
      options: [
        // EN: sp
        "sp",
        // EN: sp<sup>2</sup>
        "sp<sup>2</sup>",
        // EN: sp<sup>3</sup>
        "sp<sup>3</sup>",
        // EN: The carbon atoms are not hybridized.
        "탄소 원자는 혼성화되어 있지 않다.",
      ],
      hints: [
        // EN: Count the electron domains around one carbon atom. A double bond is one domain.
        "탄소 원자 하나 주위의 전자 영역을 세어 보세요. 이중 결합은 영역 1개예요.",
        // EN: 2 domains → sp; 3 domains → sp<sup>2</sup>; 4 domains → sp<sup>3</sup>.
        "영역 2개 → sp; 영역 3개 → sp<sup>2</sup>; 영역 4개 → sp<sup>3</sup>.",
      ],
      // EN: <p>Each carbon has three electron domains: two C–H bonds and one C=C bond. Three domains means sp<sup>2</sup>, with the domains in a trigonal planar arrangement (120°).</p>
      solution: "<p>각 탄소에는 전자 영역이 3개 있어요: C–H 결합 2개와 C=C 결합 1개. 영역이 3개이면 sp<sup>2</sup>이고, 영역들은 평면 삼각형으로 배열돼요(120°).</p>",
      misconception: {
        // EN (option A): sp is for two electron domains. Each carbon in ethene is joined to three atoms: two H and one C.
        "0": "sp는 전자 영역이 2개일 때예요. ethene의 각 탄소는 원자 3개(H 2개와 C 1개)와 연결되어 있어요.",
        // EN (option C): sp<sup>3</sup> is for four electron domains. A double bond counts as one domain, so each carbon has three.
        "2": "sp<sup>3</sup>은 전자 영역이 4개일 때예요. 이중 결합은 영역 1개로 세므로 각 탄소는 영역이 3개예요.",
        // EN (option D): Carbon atoms that form bonds in molecules are described as sp, sp<sup>2</sup> or sp<sup>3</sup> hybridized.
        "3": "분자 속에서 결합을 만드는 탄소 원자는 sp, sp<sup>2</sup> 또는 sp<sup>3</sup> 혼성으로 나타내요.",
      },
    },

    // ── s2-2h-q035 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q035": {
      // EN: <p>The molecule <span class="chem">CH3–CO–C≡CH</span> contains a C=O double bond and a C≡C triple bond. What is the hybridization of the carbon atom in each group?</p>
      stem: "<p>분자 <span class=\"chem\">CH3–CO–C≡CH</span>에는 C=O 이중 결합과 C≡C 삼중 결합이 있어요. 각 기에 있는 탄소 원자의 혼성화는 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp.
        "<span class=\"chem\">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp.",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>3</sup>. C≡C: sp<sup>3</sup>.
        "<span class=\"chem\">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>3</sup>. C≡C: sp<sup>3</sup>.",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp. C≡C: sp<sup>2</sup>.
        "<span class=\"chem\">CH3</span>: sp<sup>3</sup>. C=O: sp. C≡C: sp<sup>2</sup>.",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp<sup>2</sup>.
        "<span class=\"chem\">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp<sup>2</sup>.",
      ],
      hints: [
        // EN: For each carbon, count the atoms it is joined to. Carbon has no lone pairs here, so that is its number of domains.
        "각 탄소에 대해 연결된 원자 수를 세어 보세요. 여기서 탄소에는 비공유 전자쌍이 없으므로 그 수가 곧 영역 수예요.",
        // EN: Multiple bonds count as one domain each.
        "다중 결합은 각각 영역 1개로 세요.",
      ],
      // EN: <p><span class="chem">CH3</span> carbon: four single bonds, four domains, sp<sup>3</sup>. C=O carbon: joined to C, O and C, three domains, sp<sup>2</sup>. Each C≡C carbon: joined to two atoms, two domains, sp.</p>
      solution: "<p><span class=\"chem\">CH3</span>의 탄소: 단일 결합 4개, 영역 4개, sp<sup>3</sup>. C=O의 탄소: C, O, C와 연결, 영역 3개, sp<sup>2</sup>. C≡C의 각 탄소: 원자 2개와 연결, 영역 2개, sp.</p>",
      misconception: {
        // EN (option B): Not every carbon is sp<sup>3</sup>. Only a carbon with four electron domains (four single bonds) is sp<sup>3</sup>.
        "1": "모든 탄소가 sp<sup>3</sup>인 것은 아니에요. 전자 영역이 4개(단일 결합 4개)인 탄소만 sp<sup>3</sup>이에요.",
        // EN (option C): These two are swapped. The C=O carbon is joined to three atoms (three domains, sp<sup>2</sup>). A triply bonded carbon is joined to two atoms (two domains, sp).
        "2": "두 개가 서로 바뀌었어요. C=O의 탄소는 원자 3개와 연결되어 있어요(영역 3개, sp<sup>2</sup>). 삼중 결합을 한 탄소는 원자 2개와 연결되어 있어요(영역 2개, sp).",
        // EN (option D): A carbon in a triple bond has only two electron domains: the triple bond and one single bond. Two domains means sp.
        "3": "삼중 결합을 한 탄소는 전자 영역이 2개뿐이에요: 삼중 결합 1개와 단일 결합 1개. 영역이 2개이면 sp예요.",
      },
    },

    // ── s2-2h-q036 · multi · exam · AHL · Structure 2.2.16 · 2 marks
    "s2-2h-q036": {
      // EN: <p>In which of these is the named atom sp<sup>2</sup> hybridized? Select all that apply.</p>
      stem: "<p>다음 중 지정한 원자가 sp<sup>2</sup> 혼성인 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: B in <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>의 B",
        // EN: C in <span class="chem">HCHO</span> (methanal)
        "<span class=\"chem\">HCHO</span> (methanal)의 C",
        // EN: N in <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>의 N",
        // EN: C in <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>의 C",
        // EN: Each C in <span class="chem">C2H4</span>
        "<span class=\"chem\">C2H4</span>의 각 C",
      ],
      hints: [
        // EN: sp<sup>2</sup> means three electron domains around the atom.
        "sp<sup>2</sup>는 원자 주위에 전자 영역이 3개라는 뜻이에요.",
        // EN: Lone pairs count as domains. A double bond counts as one domain.
        "비공유 전자쌍도 영역으로 세요. 이중 결합은 영역 1개로 세요.",
      ],
      // EN: <p>Three domains: B in <span class="chem">BF3</span> (three bonds, no lone pair); C in methanal (two C–H and one C=O); each C in ethene (two C–H and one C=C). N in <span class="chem">NH3</span> has four domains (sp<sup>3</sup>). C in <span class="chem">CO2</span> has two domains (sp).</p>
      solution: "<p>영역이 3개인 것: <span class=\"chem\">BF3</span>의 B(결합 3개, 비공유 전자쌍 없음), methanal의 C(C–H 2개와 C=O 1개), ethene의 각 C(C–H 2개와 C=C 1개). <span class=\"chem\">NH3</span>의 N은 영역이 4개예요(sp<sup>3</sup>). <span class=\"chem\">CO2</span>의 C는 영역이 2개예요(sp).</p>",
      misconception: {
        // EN (option C): Nitrogen in ammonia has three bonds and one lone pair. The lone pair is a domain too: four domains, so sp<sup>3</sup>. Count domains, not bonds.
        "2": "암모니아의 질소는 결합 3개와 비공유 전자쌍 1개를 가져요. 비공유 전자쌍도 영역이에요: 영역 4개이므로 sp<sup>3</sup>예요. 결합이 아니라 영역을 세세요.",
        // EN (option D): Carbon in CO<sub>2</sub> has two double bonds. Each double bond is one domain: two domains, so sp.
        "3": "CO<sub>2</sub>의 탄소는 이중 결합 2개를 가져요. 이중 결합 하나가 영역 1개이므로 영역 2개, 즉 sp예요.",
      },
    },

    // ── s2-2h-q037 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q037": {
      // EN: <p>The Lewis formula of carbon dioxide is O=C=O, with two lone pairs on each oxygen atom. What is the hybridization of the carbon atom and of each oxygen atom?</p>
      stem: "<p>이산화 탄소의 루이스 구조식은 O=C=O이고, 각 산소 원자에 비공유 전자쌍이 2개씩 있어요. 탄소 원자와 각 산소 원자의 혼성화는 무엇인가요?</p>",
      options: [
        // EN: C: sp. O: sp<sup>2</sup>.
        "C: sp. O: sp<sup>2</sup>.",
        // EN: C: sp<sup>2</sup>. O: sp<sup>2</sup>.
        "C: sp<sup>2</sup>. O: sp<sup>2</sup>.",
        // EN: C: sp. O: sp<sup>3</sup>.
        "C: sp. O: sp<sup>3</sup>.",
        // EN: C: sp<sup>3</sup>. O: sp<sup>2</sup>.
        "C: sp<sup>3</sup>. O: sp<sup>2</sup>.",
      ],
      hints: [
        // EN: Carbon: two double bonds, no lone pairs. How many domains?
        "탄소: 이중 결합 2개, 비공유 전자쌍 없음. 영역은 몇 개인가요?",
        // EN: Oxygen: one double bond and two lone pairs. How many domains?
        "산소: 이중 결합 1개와 비공유 전자쌍 2개. 영역은 몇 개인가요?",
      ],
      // EN: <p>Carbon: two domains → sp (linear, 180°). Each oxygen: one bonded atom + two lone pairs = three domains → sp<sup>2</sup>.</p>
      solution: "<p>탄소: 영역 2개 → sp(직선형, 180°). 각 산소: 결합한 원자 1개 + 비공유 전자쌍 2개 = 영역 3개 → sp<sup>2</sup>.</p>",
      misconception: {
        // EN (option B): Carbon is joined to two atoms and has no lone pairs: two domains, so sp. Its shape is linear, not trigonal planar.
        "1": "탄소는 원자 2개와 연결되어 있고 비공유 전자쌍이 없어요: 영역 2개이므로 sp예요. 모양은 평면 삼각형이 아니라 직선형이에요.",
        // EN (option C): Each oxygen has one double bond (one domain) and two lone pairs (two domains). That is three domains, not four.
        "2": "각 산소에는 이중 결합 1개(영역 1개)와 비공유 전자쌍 2개(영역 2개)가 있어요. 영역은 4개가 아니라 3개예요.",
        // EN (option D): Carbon forms four bonds here, but they are two double bonds. Two double bonds are two domains.
        "3": "여기서 탄소는 결합을 4개 만들지만, 그것은 이중 결합 2개예요. 이중 결합 2개는 영역 2개예요.",
      },
    },

    // ── s2-2h-q038 · mcq · challenge · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q038": {
      // EN: <p>Ethene reacts with hydrogen to form ethane: <span class="chem">C2H4 + H2 -> C2H6</span>. What happens at each carbon atom during this reaction?</p>
      stem: "<p>ethene은 수소와 반응하여 ethane이 돼요: <span class=\"chem\">C2H4 + H2 -> C2H6</span>. 이 반응에서 각 탄소 원자에는 어떤 변화가 일어나나요?</p>",
      options: [
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 120° to about 109.5°.
        "혼성화가 sp<sup>2</sup>에서 sp<sup>3</sup>로 바뀐다. 결합각은 약 120°에서 약 109.5°로 바뀐다.",
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 109.5° to about 120°.
        "혼성화가 sp<sup>2</sup>에서 sp<sup>3</sup>로 바뀐다. 결합각은 약 109.5°에서 약 120°로 바뀐다.",
        // EN: Hybridization changes from sp to sp<sup>2</sup>. The bond angles change from 180° to about 120°.
        "혼성화가 sp에서 sp<sup>2</sup>로 바뀐다. 결합각은 180°에서 약 120°로 바뀐다.",
        // EN: Hybridization changes from sp<sup>3</sup> to sp<sup>2</sup>. The bond angles change from about 109.5° to about 120°.
        "혼성화가 sp<sup>3</sup>에서 sp<sup>2</sup>로 바뀐다. 결합각은 약 109.5°에서 약 120°로 바뀐다.",
      ],
      hints: [
        // EN: Count the electron domains around a carbon atom in ethene, then in ethane.
        "ethene에서 탄소 원자 주위의 전자 영역을 세고, 그다음 ethane에서도 세어 보세요.",
        // EN: Match each hybridization to its geometry: sp<sup>2</sup> trigonal planar, sp<sup>3</sup> tetrahedral.
        "각 혼성화를 모양과 짝지어 보세요: sp<sup>2</sup> 평면 삼각형, sp<sup>3</sup> 정사면체형.",
      ],
      // EN: <p>In ethene each carbon has three domains: sp<sup>2</sup>, trigonal planar, about 120°. In ethane each carbon has four domains: sp<sup>3</sup>, tetrahedral, about 109.5°. The π bond is lost and two new σ C–H bonds form.</p>
      solution: "<p>ethene에서 각 탄소는 영역이 3개예요: sp<sup>2</sup>, 평면 삼각형, 약 120°. ethane에서 각 탄소는 영역이 4개예요: sp<sup>3</sup>, 정사면체형, 약 109.5°. π 결합이 없어지고 새로운 C–H σ 결합 2개가 만들어져요.</p>",
      misconception: {
        // EN (option B): The hybridization is right but the angles are the wrong way round. sp<sup>2</sup> goes with 120° and sp<sup>3</sup> with 109.5°.
        "1": "혼성화는 맞지만 각도가 거꾸로예요. sp<sup>2</sup>는 120°, sp<sup>3</sup>은 109.5°와 짝이에요.",
        // EN (option C): sp and 180° belong to a carbon in a triple bond, such as in ethyne. Ethene has a double bond.
        "2": "sp와 180°는 ethyne처럼 삼중 결합을 한 탄소의 특징이에요. ethene에는 이중 결합이 있어요.",
        // EN (option D): This is the reverse reaction. Ethene (three domains per carbon) is the reactant; ethane (four domains per carbon) is the product.
        "3": "이것은 역반응이에요. ethene(탄소마다 영역 3개)이 반응물이고, ethane(탄소마다 영역 4개)이 생성물이에요.",
      },
    },

    // ── s2-2h-q039 · short · challenge · AHL · Structure 2.2.16 · 3 marks
    "s2-2h-q039": {
      // EN: <p>Hydrogen cyanide has the structure H–C≡N, with one lone pair on nitrogen.</p><p>Analyse the bonding around the carbon atom. State its hybridization and the H–C–N bond angle, and describe how the σ bonds and the π bonds to carbon are formed.</p>
      stem: "<p>사이안화 수소의 구조는 H–C≡N이고, 질소에 비공유 전자쌍이 1개 있어요.</p><p>탄소 원자 주위의 결합을 분석하시오 (analyse). 탄소의 혼성화와 H–C–N 결합각을 쓰고, 탄소의 σ 결합과 π 결합이 어떻게 만들어지는지 서술하시오 (describe).</p>",
      hints: [
        // EN: Count the electron domains around carbon. A triple bond is one domain.
        "탄소 주위의 전자 영역을 세어 보세요. 삼중 결합은 영역 1개예요.",
        // EN: An sp carbon has two hybrid orbitals and two p orbitals left unmixed. Which make σ bonds and which make π bonds?
        "sp 혼성 탄소에는 혼성 오비탈 2개와 섞이지 않은 p 오비탈 2개가 있어요. 어느 것이 σ 결합을 만들고 어느 것이 π 결합을 만들까요?",
      ],
      // EN: <p>Two domains → sp → linear, 180°. The two sp hybrid orbitals point in opposite directions and make the two σ bonds (to H and to N) by head-on overlap. The two unmixed p orbitals are at right angles to each other. Each overlaps sideways with a p orbital on nitrogen, giving two π bonds. Triple bond = 1 σ + 2 π.</p>
      solution: "<p>영역 2개 → sp → 직선형, 180°. sp 혼성 오비탈 2개는 서로 반대 방향을 향하고, 정면 겹침으로 σ 결합 2개(H와, N과)를 만들어요. 섞이지 않은 p 오비탈 2개는 서로 직각을 이뤄요. 각각이 질소의 p 오비탈과 옆으로 겹쳐서 π 결합 2개가 생겨요. 삼중 결합 = σ 1개 + π 2개.</p>",
      // EN: <p>Carbon has two electron domains (one single bond and one triple bond), so it is sp hybridized and the H–C–N angle is 180°. The C–H σ bond forms by head-on overlap of an sp hybrid orbital on carbon with the 1s orbital of hydrogen. The C–N σ bond forms by head-on overlap of the other sp hybrid orbital on carbon with a hybrid orbital on nitrogen. The two π bonds form by sideways overlap of the two unhybridized p orbitals on carbon with two p orbitals on nitrogen.</p>
      answer: "<p>탄소는 전자 영역이 2개(단일 결합 1개와 삼중 결합 1개)이므로 sp 혼성이고, H–C–N 결합각은 180°예요. C–H σ 결합은 탄소의 sp 혼성 오비탈 하나와 수소의 1s 오비탈이 정면으로 겹쳐서 만들어져요. C–N σ 결합은 탄소의 다른 sp 혼성 오비탈과 질소의 혼성 오비탈이 정면으로 겹쳐서 만들어져요. π 결합 2개는 탄소의 혼성화되지 않은 p 오비탈 2개가 질소의 p 오비탈 2개와 옆으로 겹쳐서 만들어져요.</p>",
      markscheme: [
        // EN: Carbon is sp hybridized AND the bond angle is 180° (two electron domains).
        "탄소는 sp 혼성이고, 그리고 결합각은 180°이다(전자 영역 2개).",
        // EN: σ bonds: head-on overlap of sp hybrid orbitals of carbon (with 1s of H / with an orbital on N).
        "σ 결합: 탄소의 sp 혼성 오비탈의 정면 겹침(H의 1s와 / N의 오비탈과).",
        // EN: Two π bonds: sideways (lateral) overlap of the (unhybridized) p orbitals on carbon and nitrogen.
        "π 결합 2개: 탄소와 질소의 (혼성화되지 않은) p 오비탈의 옆(측면) 겹침.",
      ],
    },

    // ── s2-2h-q040 · numeric · foundation · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q040": {
      // EN: <p>In the complex ion <span class="chem">[Fe(H2O)6]^3+</span>, six water molecules are bonded to one <span class="chem">Fe^3+</span> ion.</p><p>How many coordination bonds are there in one complex ion?</p>
      stem: "<p>착이온 <span class=\"chem\">[Fe(H2O)6]^3+</span>에서는 물 분자 6개가 <span class=\"chem\">Fe^3+</span> 이온 1개와 결합해 있어요.</p><p>착이온 하나에는 배위 결합이 몇 개 있나요?</p>",
      hints: [
        // EN: A coordination bond is a covalent bond in which both shared electrons come from the same atom.
        "배위 결합은 공유된 전자 2개가 모두 같은 원자에서 온 공유 결합이에요.",
        // EN: Each water molecule donates one lone pair from its oxygen atom to the metal ion.
        "각 물 분자는 산소 원자의 비공유 전자쌍 하나를 금속 이온에 내줘요.",
      ],
      // EN: <p>Each of the six water molecules donates one lone pair to the <span class="chem">Fe^3+</span> ion. That makes <b>6</b> coordination bonds. The O–H bonds inside each water molecule are ordinary covalent bonds, so they are not counted.</p>
      solution: "<p>물 분자 6개가 각각 비공유 전자쌍 하나를 <span class=\"chem\">Fe^3+</span> 이온에 내줘요. 그래서 배위 결합은 <b>6</b>개예요. 각 물 분자 안의 O–H 결합은 보통의 공유 결합이므로 세지 않아요.</p>",
      // EN: coordination bonds
      unit: "배위 결합",
    },

    // ── s2-2h-q041 · mcq · exam · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q041": {
      // EN: <p>In the complex ion <span class="chem">[Cu(NH3)4(H2O)2]^2+</span>, each ammonia molecule is bonded to the copper ion. Which describes the bond between one ammonia molecule and the copper ion?</p>
      stem: "<p>착이온 <span class=\"chem\">[Cu(NH3)4(H2O)2]^2+</span>에서 각 암모니아 분자는 구리 이온과 결합해 있어요. 암모니아 분자 하나와 구리 이온 사이의 결합을 옳게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: A coordination bond: both electrons of the shared pair come from the nitrogen atom.
        "배위 결합: 공유 전자쌍의 전자 2개가 모두 질소 원자에서 온다.",
        // EN: A coordination bond: both electrons of the shared pair come from the copper ion.
        "배위 결합: 공유 전자쌍의 전자 2개가 모두 구리 이온에서 온다.",
        // EN: A covalent bond: one electron comes from the nitrogen atom and one from the copper ion.
        "공유 결합: 전자 1개는 질소 원자에서, 1개는 구리 이온에서 온다.",
        // EN: An ionic bond: ammonia has gained electrons from the copper ion.
        "이온 결합: 암모니아가 구리 이온에게서 전자를 얻었다.",
      ],
      hints: [
        // EN: Draw the Lewis formula of ammonia. What does nitrogen have besides its three bonds?
        "암모니아의 루이스 구조식을 그려 보세요. 질소에는 결합 3개 말고 무엇이 더 있나요?",
        // EN: Which particle is short of electrons: the positive metal ion or the ammonia molecule?
        "전자가 부족한 입자는 어느 쪽인가요: 양이온인 금속 이온인가요, 암모니아 분자인가요?",
      ],
      // EN: <p>Nitrogen in ammonia has one lone pair. It donates this pair to the <span class="chem">Cu^2+</span> ion. Both electrons of the shared pair come from the same atom (nitrogen), so the bond is a coordination bond. The ion has six coordination bonds: four from ammonia and two from water.</p>
      solution: "<p>암모니아의 질소에는 비공유 전자쌍이 1개 있어요. 질소는 이 전자쌍을 <span class=\"chem\">Cu^2+</span> 이온에 내줘요. 공유 전자쌍의 전자 2개가 모두 같은 원자(질소)에서 오므로 이 결합은 배위 결합이에요. 이 이온에는 배위 결합이 6개 있어요: 암모니아에서 4개, 물에서 2개.</p>",
      misconception: {
        // EN (option B): The direction is reversed. The copper ion is positive and accepts the electron pair. The lone pair is on the nitrogen atom of ammonia.
        "1": "방향이 거꾸로예요. 구리 이온은 양전하를 띠고 전자쌍을 받아들여요. 비공유 전자쌍은 암모니아의 질소 원자에 있어요.",
        // EN (option C): That describes an ordinary covalent bond. Here the nitrogen atom supplies both electrons, from its lone pair.
        "2": "그것은 보통의 공유 결합에 대한 설명이에요. 여기서는 질소 원자가 비공유 전자쌍으로 전자 2개를 모두 내줘요.",
        // EN (option D): Ammonia is a neutral molecule and stays a molecule in the complex. No electrons are transferred to it. It shares its lone pair with the copper ion.
        "3": "암모니아는 중성 분자이고, 착이온 속에서도 분자로 남아 있어요. 전자가 암모니아로 이동하지 않아요. 암모니아는 비공유 전자쌍을 구리 이온과 나누어 가져요.",
      },
    },

  }
});
