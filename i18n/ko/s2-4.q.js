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
      stem: "<p>결합 삼각형은 결합을 이온 결합, 공유 결합, 금속 결합 모형 사이의 연속체로 보여 줘요. 두 축에는 각각 무엇을 나타내나요?</p>",
      options: [
        // EN: Horizontal: average electronegativity. Vertical: electronegativity difference.
        "가로축: 평균 전기 음성도. 세로축: 전기 음성도 차.",
        // EN: Horizontal: electronegativity difference. Vertical: average electronegativity.
        "가로축: 전기 음성도 차. 세로축: 평균 전기 음성도.",
        // EN: Horizontal: sum of the electronegativities. Vertical: electronegativity difference.
        "가로축: 전기 음성도의 합. 세로축: 전기 음성도 차.",
        // EN: Horizontal: electronegativity of the metal. Vertical: electronegativity of the non-metal.
        "가로축: 금속의 전기 음성도. 세로축: 비금속의 전기 음성도.",
      ],
      hints: [
        // EN: Ionic compounds have a large electronegativity difference. Where are they on the triangle: high up, or far along?
        "이온 결합 화합물은 전기 음성도 차가 커요. 이런 화합물은 삼각형에서 어디에 있을까요? 높은 곳일까요, 오른쪽으로 먼 곳일까요?",
      ],
      // EN: <p>The horizontal axis is the average electronegativity of the two elements. The vertical axis is the electronegativity difference. A large difference puts a compound near the ionic top.</p>
      solution: "<p>가로축은 두 원소의 평균 전기 음성도예요. 세로축은 전기 음성도 차예요. 차가 크면 화합물은 위쪽의 이온 결합 꼭짓점 가까이에 놓여요.</p>",
      misconception: {
        // EN (option B): The axes are swapped. The difference goes up the triangle, which is why the most ionic compounds are at the top.
        "1": "두 축이 바뀌었어요. 차는 삼각형의 위쪽 방향으로 커져요. 그래서 이온 결합성이 가장 큰 화합물이 꼭대기에 있어요.",
        // EN (option C): The horizontal axis is the average, not the sum. The sum of two values can be as large as 7.4, which is off the scale.
        "2": "가로축은 합이 아니라 평균이에요. 두 값의 합은 7.4까지 커질 수 있어서 눈금을 벗어나요.",
        // EN (option D): The triangle does not need a metal and a non-metal. It uses the same two calculations for any two elements.
        "3": "결합 삼각형에는 금속과 비금속이 꼭 필요하지 않아요. 어떤 두 원소든 같은 두 가지 계산을 해요.",
      },
    },

    // ── s2-4-q002 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q002": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "<p><i>χ</i>(Mg) = 1.3, <i>χ</i>(Cl) = 3.2를 이용해 염화 마그네슘 <span class=\"chem nowrap\">MgCl<sub>2</sub></span>의 전기 음성도 차를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "큰 값에서 작은 값을 빼세요.",
        // EN: Use one value for each element. The 2 in the formula is not used.
        "원소마다 값을 하나씩만 써요. 화학식의 2는 쓰지 않아요.",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>",
    },

    // ── s2-4-q003 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q003": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "<p><i>χ</i>(Mg) = 1.3, <i>χ</i>(Cl) = 3.2를 이용해 염화 마그네슘 <span class=\"chem nowrap\">MgCl<sub>2</sub></span>의 평균 전기 음성도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Add the two values, then divide by 2.
        "두 값을 더한 다음 2로 나누세요.",
        // EN: Use one value for each element. Do not count chlorine twice.
        "원소마다 값을 하나씩만 써요. 염소를 두 번 세지 마세요.",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>
      solution: "<div class=\"worked__math\">평균 <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>",
    },

    // ── s2-4-q004 · mcq · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q004": {
      // EN: <p>A binary compound has an average electronegativity of 2.7 and an electronegativity difference of 1.0. Use the bonding triangle to deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>어떤 이성분 화합물의 평균 전기 음성도는 2.7이고, 전기 음성도 차는 1.0이에요. 결합 삼각형을 이용해 이 화합물의 결합 종류를 추론하시오 (deduce).</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"결합 삼각형. 가로축: 평균 전기 음성도, 0.5에서 4.0까지. 세로축: 전기 음성도 차, 0에서 3.0까지. 금속 결합 영역은 왼쪽 아래에 있고, 밑변에서 평균 약 1.9까지예요. 이온 결합 영역은 꼭대기까지 올라가는 띠예요. 공유 결합과 극성 공유 결합 영역은 오른쪽 아래에 있어요.\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">금속 결합</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">이온 결합</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">극성</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">평균 전기 음성도</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">전기 음성도 차</text></svg>",
      options: [
        // EN: Ionic
        "이온 결합",
        // EN: Polar covalent
        "극성 공유 결합",
        // EN: Metallic
        "금속 결합",
        // EN: Non-polar covalent
        "무극성 공유 결합",
      ],
      hints: [
        // EN: Go along the horizontal axis to 2.7. Then go up to 1.0.
        "가로축을 따라 2.7까지 가요. 그다음 1.0까지 올라가요.",
      ],
      // EN: <p>The point (2.7, 1.0) is on the right-hand side of the triangle and well above the base. That is the polar covalent region.</p>
      solution: "<p>점 (2.7, 1.0)은 삼각형의 오른쪽에 있고 밑변보다 꽤 위에 있어요. 이곳은 극성 공유 결합 영역이에요.</p>",
      misconception: {
        // EN (option A): Check the axes. Going along to 1.0 and up to 2.7 is the wrong way round. The average, 2.7, goes along and the difference, 1.0, goes up.
        "0": "축을 확인해 보세요. 가로로 1.0, 위로 2.7만큼 가면 방향이 반대예요. 평균 2.7은 가로 방향, 차 1.0은 위 방향이에요.",
        // EN (option C): The metallic region is at the bottom left, where the average is below about 1.9. An average of 2.7 is far to the right of it.
        "2": "금속 결합 영역은 왼쪽 아래, 평균이 약 1.9보다 작은 곳이에요. 평균 2.7은 그보다 훨씬 오른쪽이에요.",
        // EN (option D): A non-polar covalent bond has a difference of 0, so its point is on the base line. This point is at a height of 1.0.
        "3": "무극성 공유 결합은 차가 0이므로 점이 밑변 위에 있어요. 이 점은 높이가 1.0이에요.",
      },
    },

    // ── s2-4-q005 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q005": {
      // EN: <p>Which statement describes an alloy?</p>
      stem: "<p>합금을 바르게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: A compound of two metals that are chemically combined in a fixed ratio.
        "두 금속이 일정한 비로 화학적으로 결합한 화합물.",
        // EN: A mixture of a metal and other metals or non-metals.
        "금속에 다른 금속이나 비금속이 섞인 혼합물.",
        // EN: An ionic compound of a metal and a non-metal.
        "금속과 비금속으로 이루어진 이온 결합 화합물.",
        // EN: A pure metal that has been heated and then cooled quickly.
        "가열한 뒤 빠르게 식힌 순수한 금속.",
      ],
      hints: [
        // EN: Think of steel: iron with a little carbon. Is the amount of carbon fixed?
        "강철을 생각해 보세요: 철에 탄소가 조금 들어 있어요. 탄소의 양이 정해져 있나요?",
      ],
      // EN: <p>An alloy is a mixture of a metal and other metals or non-metals. It has enhanced properties, such as greater hardness.</p>
      solution: "<p>합금은 금속에 다른 금속이나 비금속이 섞인 혼합물이에요. 더 단단해지는 것처럼 성질이 좋아져요.</p>",
      misconception: {
        // EN (option A): An alloy is a mixture, not a compound. The proportions of the elements can vary.
        "0": "합금은 화합물이 아니라 혼합물이에요. 원소의 비율이 달라질 수 있어요.",
        // EN (option C): An ionic compound has ions in a fixed ratio. In an alloy the bonding is metallic, and a non-metal such as carbon can be one of the components without forming an ionic lattice.
        "2": "이온 결합 화합물에는 이온이 일정한 비로 들어 있어요. 합금의 결합은 금속 결합이에요. 탄소 같은 비금속이 성분이 될 수도 있지만, 이온 격자를 만들지는 않아요.",
        // EN (option D): A pure metal contains only one element. An alloy always contains at least one other element.
        "3": "순수한 금속에는 원소가 한 가지만 들어 있어요. 합금에는 항상 다른 원소가 적어도 한 가지 더 들어 있어요.",
      },
    },

    // ── s2-4-q006 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q006": {
      // EN: <p>Which statement describes a polymer?</p>
      stem: "<p>고분자를 바르게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: A small molecule that can join to many others like it.
        "자신과 같은 다른 분자 여러 개와 결합할 수 있는 작은 분자.",
        // EN: A giant lattice of positive and negative ions.
        "양이온과 음이온으로 된 거대한 격자.",
        // EN: A large molecule made from many repeating subunits.
        "반복되는 작은 단위가 많이 모여 만들어진 큰 분자.",
        // EN: A mixture of a metal and other elements.
        "금속에 다른 원소가 섞인 혼합물.",
      ],
      hints: [
        // EN: “Poly” means many. “Mono” means one.
        "“Poly”는 ‘많다’는 뜻이에요. “Mono”는 ‘하나’라는 뜻이에요.",
      ],
      // EN: <p>A polymer is a large molecule (a macromolecule) made from many repeating subunits. The subunits come from small molecules called monomers.</p>
      solution: "<p>고분자는 반복되는 작은 단위가 많이 모여 만들어진 큰 분자(거대 분자)예요. 이 작은 단위는 단위체라고 부르는 작은 분자에서 와요.</p>",
      misconception: {
        // EN (option A): This describes a monomer. The polymer is the large molecule that forms when many monomers join.
        "0": "이것은 단위체에 대한 설명이에요. 고분자는 단위체가 많이 결합해서 생기는 큰 분자예요.",
        // EN (option B): This describes an ionic compound. A polymer is a covalently bonded molecule.
        "1": "이것은 이온 결합 화합물에 대한 설명이에요. 고분자는 공유 결합으로 이루어진 분자예요.",
        // EN (option D): This describes an alloy.
        "3": "이것은 합금에 대한 설명이에요.",
      },
    },

    // ── s2-4-q007 · mcq · foundation · SL · Structure 2.4.5 · 1 mark
    "s2-4-q007": {
      // EN: <p>Chloroethene, <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>, forms an addition polymer. Which is the repeating unit of the polymer?</p>
      stem: "<p>chloroethene, <span class=\"chem nowrap\">CH<sub>2</sub>=CHCl</span>은 첨가 중합체를 만들어요. 이 고분자의 반복 단위는 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem nowrap">–CH=CCl–</span>
        "<span class=\"chem nowrap\">–CH=CCl–</span>",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>
        "<span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–</span>",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–CH<sub>2</sub>–CHCl–</span>
        "<span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–CH<sub>2</sub>–CHCl–</span>",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CH<sub>2</sub>–Cl–</span>
        "<span class=\"chem nowrap\">–CH<sub>2</sub>–CH<sub>2</sub>–Cl–</span>",
      ],
      hints: [
        // EN: Change C=C to C–C. Then add one bond at each end.
        "C=C를 C–C로 바꾸세요. 그다음 양 끝에 결합을 하나씩 더하세요.",
        // EN: The side groups stay on the same carbon atoms.
        "곁사슬는 원래 있던 탄소 원자에 그대로 붙어 있어요.",
      ],
      // EN: <p>The double bond becomes a single bond, and each of the two carbons gains a continuation bond: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>. The chlorine atom stays on its carbon as a side group.</p>
      solution: "<p>이중 결합이 단일 결합이 되고, 두 탄소에 각각 사슬을 잇는 이어지는 결합 (continuation bond)이 하나씩 생겨요: <span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–</span>. 염소 원자는 곁사슬로 원래 탄소에 그대로 붙어 있어요.</p>",
      misconception: {
        // EN (option A): The double bond does not stay. One bond of the C=C breaks so that each carbon can join to a neighbour. Two hydrogen atoms have also been lost here, but no atoms are lost in addition polymerization.
        "0": "이중 결합은 남지 않아요. C=C의 결합 하나가 끊어져서 각 탄소가 이웃과 결합할 수 있게 돼요. 이 보기에서는 수소 원자 2개도 없어졌지만, 첨가 중합에서는 원자가 하나도 없어지지 않아요.",
        // EN (option C): This shows two repeating units. The repeating unit is the smallest part that repeats: two backbone carbons.
        "2": "이것은 반복 단위 2개예요. 반복 단위는 되풀이되는 가장 작은 부분으로, 주사슬 탄소 2개로 되어 있어요.",
        // EN (option D): Chlorine forms only one bond, so it cannot be in the backbone. It stays as a side group on its carbon.
        "3": "염소는 결합을 하나만 만들어서 주사슬에 들어갈 수 없어요. 염소는 곁사슬로 원래 탄소에 붙어 있어요.",
      },
    },

    // ── s2-4-q008 · multi · foundation · SL · Structure 2.4.5 · 2 marks
    "s2-4-q008": {
      // EN: <p>Which statements about the addition polymerization of an alkene are correct? Select all that apply.</p>
      stem: "<p>알켄의 첨가 중합에 대한 설명으로 옳은 것을 모두 고르세요.</p>",
      options: [
        // EN: The carbon to carbon double bond in each monomer breaks.
        "각 단위체의 탄소-탄소 이중 결합이 끊어진다.",
        // EN: A molecule of water is released each time two monomers join.
        "단위체 2개가 결합할 때마다 물 분자 1개가 나온다.",
        // EN: The polymer is the only product.
        "생성물은 고분자뿐이다.",
        // EN: The backbone of the polymer contains C=C double bonds.
        "고분자의 주사슬에 C=C 이중 결합이 있다.",
        // EN: The repeating unit contains the same atoms as one monomer.
        "반복 단위에는 단위체 1개와 같은 원자들이 들어 있다.",
      ],
      hints: [
        // EN: Count the atoms before and after. Are any atoms lost?
        "반응 전과 후의 원자 수를 세어 보세요. 없어지는 원자가 있나요?",
      ],
      // EN: <p>In addition polymerization the double bond of each monomer breaks and the monomers join. Nothing else is formed, so the polymer is the only product and each repeating unit has the same atoms as one monomer.</p>
      solution: "<p>첨가 중합에서는 각 단위체의 이중 결합이 끊어지고 단위체끼리 결합해요. 다른 물질은 생기지 않으므로 생성물은 고분자뿐이고, 각 반복 단위에는 단위체 1개와 같은 원자들이 들어 있어요.</p>",
      misconception: {
        // EN (option B): Releasing a small molecule is the feature of condensation polymerization. In addition polymerization nothing is released.
        "1": "작은 분자가 나오는 것은 축합 중합의 특징이에요. 첨가 중합에서는 아무것도 나오지 않아요.",
        // EN (option D): The double bonds are used up when the monomers join. The backbone has only single bonds between the carbons.
        "3": "단위체가 결합할 때 이중 결합은 다 쓰여요. 주사슬의 탄소 사이에는 단일 결합만 있어요.",
      },
    },

    // ── s2-4-q009 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q009": {
      // EN: <p>The scale beside the bonding triangle shows the percentage ionic character at different heights.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col" class="num">Δ<i>χ</i></th><th scope="col" class="num">% ionic</th></tr></thead><tbody><tr><td class="num">1.0</td><td class="num">25</td></tr><tr><td class="num">1.6</td><td class="num">50</td></tr><tr><td class="num">2.3</td><td class="num">75</td></tr></tbody></table></div><p>Magnesium chloride has Δ<i>χ</i> = 1.9. Estimate its percentage ionic character from the scale.</p>
      stem: "<p>결합 삼각형 옆의 눈금은 높이에 따른 이온 결합성 백분율을 보여 줘요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\" class=\"num\">Δ<i>χ</i></th><th scope=\"col\" class=\"num\">% 이온 결합성</th></tr></thead><tbody><tr><td class=\"num\">1.0</td><td class=\"num\">25</td></tr><tr><td class=\"num\">1.6</td><td class=\"num\">50</td></tr><tr><td class=\"num\">2.3</td><td class=\"num\">75</td></tr></tbody></table></div><p>염화 마그네슘은 Δ<i>χ</i> = 1.9예요. 눈금에서 이온 결합성 백분율을 어림하시오 (estimate).</p>",
      hints: [
        // EN: Between which two heights in the table does 1.9 lie?
        "표에서 1.9는 어느 두 높이 사이에 있나요?",
        // EN: It is a little less than halfway from 1.6 to 2.3. Read a value a little less than halfway from 50 to 75.
        "1.6에서 2.3까지의 절반보다 조금 못 미치는 곳이에요. 50에서 75까지의 절반보다 조금 못 미치는 값을 읽으세요.",
      ],
      // EN: <p>1.9 lies between 1.6 (50 % ionic) and 2.3 (75 % ionic).</p><div class="worked__math">fraction of the way = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class="worked__math">reading = 50 + 0.43 × 25 = about 60 % ionic</div><p>This is a reading from a diagram, so any answer from about 55 % to 65 % is acceptable.</p>
      solution: "<p>1.9는 1.6(50 % 이온 결합성)과 2.3(75 % 이온 결합성) 사이에 있어요.</p><div class=\"worked__math\">구간에서 간 비율 = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class=\"worked__math\">읽은 값 = 50 + 0.43 × 25 = 약 60 % 이온 결합성</div><p>그림에서 읽는 값이므로 약 55 %에서 65 % 사이의 답은 모두 인정돼요.</p>",
      // EN: about 60 % (55 to 65 % accepted)
      answerDisplay: "약 60 % (55~65 % 인정)",
    },

    // ── s2-4-q010 · mcq · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q010": {
      // EN: <p>Tin is a metal and chlorine is a non-metal. Use <i>χ</i>(Sn) = 2.0, <i>χ</i>(Cl) = 3.2 and the bonding triangle. What is the best description of the bonding in tin(IV) chloride, <span class="chem nowrap">SnCl<sub>4</sub></span>?</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>주석(Sn)은 금속이고 염소는 비금속이에요. <i>χ</i>(Sn) = 2.0, <i>χ</i>(Cl) = 3.2와 결합 삼각형을 이용하세요. 염화 주석(IV), <span class=\"chem nowrap\">SnCl<sub>4</sub></span>의 결합을 가장 잘 나타낸 것은 무엇인가요?</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"결합 삼각형. 가로축: 평균 전기 음성도, 0.5에서 4.0까지. 세로축: 전기 음성도 차, 0에서 3.0까지. 금속 결합 영역은 왼쪽 아래에 있고, 밑변에서 평균 약 1.9까지예요. 이온 결합 영역은 꼭대기까지 올라가는 띠예요. 공유 결합과 극성 공유 결합 영역은 오른쪽 아래에 있어요.\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">금속 결합</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">이온 결합</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">극성</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">평균 전기 음성도</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">전기 음성도 차</text></svg>",
      options: [
        // EN: Ionic, because a metal is bonded to a non-metal.
        "이온 결합, 금속이 비금속과 결합해 있으므로.",
        // EN: Ionic, because the electronegativity difference is greater than 1.0.
        "이온 결합, 전기 음성도 차가 1.0보다 크므로.",
        // EN: Polar covalent, because the point (2.6, 1.2) lies in that region.
        "극성 공유 결합, 점 (2.6, 1.2)가 그 영역에 있으므로.",
        // EN: Metallic, because the compound contains a metal.
        "금속 결합, 화합물에 금속이 들어 있으므로.",
      ],
      hints: [
        // EN: Calculate both coordinates: the difference and the average.
        "두 좌표를 모두 계산하세요: 차와 평균.",
        // EN: Difference = 3.2 − 2.0. Average = (2.0 + 3.2) / 2. Now find the point.
        "차 = 3.2 − 2.0. 평균 = (2.0 + 3.2) / 2. 이제 점을 찾으세요.",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class="worked__math">average <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>The point (2.6, 1.2) is in the polar covalent region. This agrees with the properties: tin(IV) chloride is a liquid made of molecules.</p>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class=\"worked__math\">평균 <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>점 (2.6, 1.2)는 극성 공유 결합 영역에 있어요. 이것은 성질과도 맞아요: 염화 주석(IV)은 분자로 이루어진 액체예요.</p>",
      misconception: {
        // EN (option A): “Metal with non-metal” is only a rough guide. The triangle uses the electronegativity values, and here they place the compound in the polar covalent region.
        "0": "‘금속과 비금속’은 대략적인 기준일 뿐이에요. 결합 삼각형은 전기 음성도 값을 쓰고, 여기서는 그 값이 화합물을 극성 공유 결합 영역에 놓아요.",
        // EN (option B): One number is not enough, and there is no cut-off at 1.0. You need the difference and the average to find the region.
        "1": "숫자 하나로는 부족하고, 1.0이라는 경계도 없어요. 영역을 찾으려면 차와 평균이 둘 다 필요해요.",
        // EN (option D): The metallic region is at the bottom left, where both elements have low electronegativity. Chlorine has a high electronegativity.
        "3": "금속 결합 영역은 왼쪽 아래로, 두 원소의 전기 음성도가 모두 작은 곳이에요. 염소는 전기 음성도가 커요.",
      },
    },

    // ── s2-4-q011 · mcq · exam · SL · Structure 2.4.1 · 1 mark
    "s2-4-q011": {
      // EN: <p>A binary compound has an average electronegativity of 2.1 and an electronegativity difference of 2.6. Its point is high in the ionic region of the bonding triangle. Which properties does the ionic model predict?</p>
      stem: "<p>어떤 이성분 화합물의 평균 전기 음성도는 2.1이고 전기 음성도 차는 2.6이에요. 이 점은 결합 삼각형의 이온 결합 영역에서 높은 곳에 있어요. 이온 결합 모형으로 예측한 성질은 어느 것인가요?</p>",
      options: [
        // EN: Low melting point; does not conduct electricity in any state.
        "녹는점이 낮다; 어떤 상태에서도 전기가 통하지 않는다.",
        // EN: High melting point; conducts electricity as a solid.
        "녹는점이 높다; 고체 상태에서 전기가 통한다.",
        // EN: High melting point; conducts electricity when molten but not as a solid.
        "녹는점이 높다; 녹은 상태에서는 전기가 통하지만 고체 상태에서는 통하지 않는다.",
        // EN: Low melting point; conducts electricity when molten.
        "녹는점이 낮다; 녹은 상태에서 전기가 통한다.",
      ],
      hints: [
        // EN: What particles are in an ionic solid? Can they move?
        "이온 결합 고체에는 어떤 입자가 있나요? 그 입자는 움직일 수 있나요?",
      ],
      // EN: <p>The ionic model has a lattice of oppositely charged ions with strong electrostatic attraction between them, so the melting point is high. The ions cannot move in the solid, but they can move when the compound is molten, so it conducts only then.</p>
      solution: "<p>이온 결합 모형에서는 반대 전하를 띤 이온들이 격자를 이루고, 이온 사이에 강한 정전기적 인력이 작용해요. 그래서 녹는점이 높아요. 고체에서는 이온이 움직일 수 없지만, 녹은 상태에서는 움직일 수 있어요. 그래서 녹았을 때만 전기가 통해요.</p>",
      misconception: {
        // EN (option A): These are the properties of a molecular covalent substance. An ionic lattice has strong electrostatic attraction between oppositely charged ions in every direction.
        "0": "이것은 분자로 된 공유 결합 물질의 성질이에요. 이온 격자에서는 반대 전하를 띤 이온 사이에 모든 방향으로 강한 정전기적 인력이 작용해요.",
        // EN (option B): Conducting as a solid needs delocalized electrons, as in a metal. In a solid ionic lattice the ions are fixed in place.
        "1": "고체에서 전기가 통하려면 금속처럼 비편재화된 전자가 있어야 해요. 고체 이온 격자에서는 이온이 제자리에 고정되어 있어요.",
        // EN (option D): A lot of energy is needed to overcome the strong electrostatic attraction between the ions, so the melting point is high.
        "3": "이온 사이의 강한 정전기적 인력을 이겨 내려면 에너지가 많이 필요해요. 그래서 녹는점이 높아요.",
      },
    },

    // ── s2-4-q012 · short · exam · SL · Structure 2.4.2 · 2 marks
    "s2-4-q012": {
      // EN: <p>Use <i>χ</i>(Ca) = 1.0 and <i>χ</i>(S) = 2.6. Determine the position of calcium sulfide, CaS, in the bonding triangle, and deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p><i>χ</i>(Ca) = 1.0, <i>χ</i>(S) = 2.6을 이용하세요. 결합 삼각형에서 황화 칼슘(CaS)의 위치를 구하고 (determine), 결합 종류를 추론하시오 (deduce).</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"결합 삼각형. 가로축: 평균 전기 음성도, 0.5에서 4.0까지. 세로축: 전기 음성도 차, 0에서 3.0까지. 금속 결합 영역은 왼쪽 아래에 있고, 밑변에서 평균 약 1.9까지예요. 이온 결합 영역은 꼭대기까지 올라가는 띠예요. 공유 결합과 극성 공유 결합 영역은 오른쪽 아래에 있어요.\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">금속 결합</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">이온 결합</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">극성</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">평균 전기 음성도</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">전기 음성도 차</text></svg>",
      hints: [
        // EN: You need two numbers: the difference and the average.
        "숫자 2개가 필요해요: 차와 평균.",
        // EN: Plot the average along and the difference up.
        "평균은 가로 방향으로, 차는 위 방향으로 나타내세요.",
      ],
      // EN: <p>Both values are needed for the first mark. The point (1.8, 1.6) lies above the metallic region and to the left of the polar covalent region, inside the ionic band.</p>
      solution: "<p>첫 번째 점수를 받으려면 두 값이 모두 있어야 해요. 점 (1.8, 1.6)은 금속 결합 영역보다 위에 있고 극성 공유 결합 영역보다 왼쪽에 있어서, 이온 결합의 띠 안에 들어가요.</p>",
      // EN: <div class="worked__math">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class="worked__math">average <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>The point (1.8, 1.6) is in the ionic region, so calcium sulfide is ionic.</p>
      answer: "<div class=\"worked__math\">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class=\"worked__math\">평균 <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>점 (1.8, 1.6)은 이온 결합 영역에 있으므로 황화 칼슘은 이온 결합 물질이에요.</p>",
      markscheme: [
        // EN: Electronegativity difference = 1.6 AND average electronegativity = 1.8 (both needed for the mark).
        "전기 음성도 차 = 1.6 AND 평균 전기 음성도 = 1.8 (두 값이 모두 있어야 점수를 받음).",
        // EN: Ionic (bonding), from the position in the triangle.
        "이온 (결합), 삼각형에서의 위치로 판단.",
      ],
    },

    // ── s2-4-q013 · short · exam · SL · Structure 2.4.3 · 2 marks
    "s2-4-q013": {
      // EN: <p>Steel is an alloy made by adding a small amount of carbon to iron. Explain why steel is harder than pure iron.</p>
      stem: "<p>강철은 철에 탄소를 조금 넣어 만든 합금이에요. 강철이 순수한 철보다 단단한 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Start with pure iron. Why is it malleable?
        "순수한 철부터 생각해 보세요. 철은 왜 펴짐성이 있나요?",
        // EN: What does an atom of a different size do to regular layers?
        "크기가 다른 원자는 규칙적인 층에 어떤 영향을 줄까요?",
      ],
      // EN: <p>In pure iron the cations are all the same size and form regular layers that slide over each other. Carbon atoms have a different size and disrupt the layers, so they slide less easily. “The bonds are stronger” is not accepted.</p>
      solution: "<p>순수한 철에서는 양이온의 크기가 모두 같아서 규칙적인 층을 이루고, 이 층들이 서로 미끄러져요. 탄소 원자는 크기가 달라서 층을 흐트러뜨리고, 그래서 층이 잘 미끄러지지 않아요. “결합이 더 강하다”는 답은 인정되지 않아요.</p>",
      // EN: <p>Carbon atoms are a different size from iron atoms, so they disrupt the regular arrangement of the layers in the lattice. The layers cannot slide over each other as easily, so steel is harder.</p>
      answer: "<p>탄소 원자는 철 원자와 크기가 달라서 격자 속 층의 규칙적인 배열을 흐트러뜨려요. 층이 서로 쉽게 미끄러지지 못하므로 강철이 더 단단해요.</p>",
      markscheme: [
        // EN: The carbon atoms are a different size (smaller) AND disrupt/distort the regular lattice/layers of iron ions.
        "탄소 원자의 크기가 다르다(더 작다) AND 철 이온의 규칙적인 격자/층을 흐트러뜨린다/뒤틀리게 한다.",
        // EN: The layers cannot slide over each other as easily (so more force is needed to change the shape).
        "층이 서로 쉽게 미끄러지지 못한다(그래서 모양을 바꾸려면 더 큰 힘이 필요하다).",
      ],
    },

    // ── s2-4-q014 · mcq · exam · SL · Structure 2.4.3 · 1 mark
    "s2-4-q014": {
      // EN: <p>Which feature of metallic bonding makes it possible for atoms of another element to take places in a metal lattice?</p>
      stem: "<p>금속 결합의 어떤 특징 때문에 다른 원소의 원자가 금속 격자 속에 자리 잡을 수 있나요?</p>",
      options: [
        // EN: Each metal atom forms a fixed number of covalent bonds in fixed directions.
        "각 금속 원자는 정해진 방향으로 정해진 수의 공유 결합을 만든다.",
        // EN: The attraction between the cations and the delocalized electrons is non-directional.
        "양이온과 비편재화된 전자 사이의 인력에는 방향성이 없다.",
        // EN: The cations and the atoms of the other element form a compound with a fixed ratio.
        "양이온과 다른 원소의 원자가 일정한 비의 화합물을 만든다.",
        // EN: The delocalized electrons are removed when the other element is added.
        "다른 원소를 넣으면 비편재화된 전자가 없어진다.",
      ],
      hints: [
        // EN: In a metal, does each cation bond to particular neighbours, or to the electrons all around it?
        "금속에서 각 양이온은 특정한 이웃과 결합하나요, 아니면 주위의 전자 전체와 결합하나요?",
      ],
      // EN: <p>Metallic bonding is the electrostatic attraction between cations and delocalized electrons. It is non-directional, so the lattice can accommodate atoms of other elements and still be held together.</p>
      solution: "<p>금속 결합은 양이온과 비편재화된 전자 사이의 정전기적 인력이에요. 방향성이 없어서, 격자 속에 다른 원소의 원자가 들어와도 격자가 그대로 유지될 수 있어요.</p>",
      misconception: {
        // EN (option A): Bonds in fixed directions describe covalent bonding. Metallic bonding acts equally in all directions.
        "0": "정해진 방향의 결합은 공유 결합의 특징이에요. 금속 결합은 모든 방향으로 똑같이 작용해요.",
        // EN (option C): An alloy is a mixture. Its composition is not fixed.
        "2": "합금은 혼합물이에요. 조성이 정해져 있지 않아요.",
        // EN (option D): The delocalized electrons stay. They are what holds the lattice together, including the added atoms.
        "3": "비편재화된 전자는 그대로 있어요. 넣은 원자까지 포함해 격자를 붙잡아 두는 것이 바로 이 전자들이에요.",
      },
    },

    // ── s2-4-q015 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q015": {
      // EN: <p>The structure of propene is shown.</p><svg viewBox="0 0 90 112" width="90" height="112" role="img" aria-label="Propene: two carbons joined by a double bond. The first carbon has two H atoms. The second carbon has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 53 H58 M32 59 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which is the repeating unit of poly(propene)?</p>
      stem: "<p>propene의 구조가 그림과 같아요.</p><svg viewBox=\"0 0 90 112\" width=\"90\" height=\"112\" role=\"img\" aria-label=\"propene: 탄소 2개가 이중 결합으로 연결되어 있어요. 첫 번째 탄소에는 H 원자 2개가 있어요. 두 번째 탄소에는 H 원자 1개와 CH3기 1개가 있어요.\" style=\"max-width:100%;height:auto;display:block\"><text x=\"22\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M22 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M22 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"68\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M68 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"68\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M68 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"62\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M32 53 H58 M32 59 H58\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/></svg><p>poly(propene)의 반복 단위는 어느 것인가요?</p>",
      options: [
        // EN: <svg viewBox="0 0 186 112" width="186" height="112" role="img" aria-label="Option A: three backbone carbons in a row, each with two H atoms, with a continuation bond at each end" style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M142 56 H166" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M148 6 H154 V106 H148" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="158" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 186 112\" width=\"186\" height=\"112\" role=\"img\" aria-label=\"보기 A: 주사슬 탄소 3개가 한 줄로 있고, 각각 H 원자 2개를 가지며, 양 끝에 이어지는 결합이 하나씩 있어요\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M132 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M132 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M96 56 H122\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M142 56 H166\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M148 6 H154 V106 H148\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"158\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option B: two backbone carbons joined by a double bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 53 H76 M50 59 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 154 112\" width=\"154\" height=\"112\" role=\"img\" aria-label=\"보기 B: 주사슬 탄소 2개가 이중 결합으로 연결되어 있고, 양 끝에 이어지는 결합이 하나씩 있어요. 첫 번째 탄소에는 H 원자 2개가 있어요. 두 번째 탄소에는 H 원자 1개와 CH3기 1개가 있어요.\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"80\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M50 53 H76 M50 59 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M96 56 H134\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M116 6 H122 V106 H116\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"126\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option C: two backbone carbons joined by a single bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 154 112\" width=\"154\" height=\"112\" role=\"img\" aria-label=\"보기 C: 주사슬 탄소 2개가 단일 결합으로 연결되어 있고, 양 끝에 이어지는 결합이 하나씩 있어요. 첫 번째 탄소에는 H 원자 2개가 있어요. 두 번째 탄소에는 H 원자 1개와 CH3기 1개가 있어요.\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"80\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M96 56 H134\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M116 6 H122 V106 H116\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"126\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 118 112" width="118" height="112" role="img" aria-label="Option D: two carbons joined by a single bond, with no continuation bonds. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 56 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M6 6 H0 V106 H6 M98 6 H104 V106 H98" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="108" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 118 112\" width=\"118\" height=\"112\" role=\"img\" aria-label=\"보기 D: 탄소 2개가 단일 결합으로 연결되어 있고, 이어지는 결합은 없어요. 첫 번째 탄소에는 H 원자 2개가 있어요. 두 번째 탄소에는 H 원자 1개와 CH3기 1개가 있어요.\" style=\"max-width:100%;height:auto;display:block\"><text x=\"22\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M22 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M22 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"68\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M68 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"68\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M68 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"62\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M32 56 H58\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M6 6 H0 V106 H6 M98 6 H104 V106 H98\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"108\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
      ],
      hints: [
        // EN: Which two carbon atoms were joined by the double bond? Only those are in the backbone.
        "이중 결합으로 연결되어 있던 탄소 원자는 어느 두 개인가요? 그 두 개만 주사슬에 들어가요.",
        // EN: Check that every carbon has exactly four bonds.
        "모든 탄소가 정확히 4개의 결합을 가졌는지 확인하세요.",
      ],
      // EN: <p>Change C=C to C–C and add a continuation bond to each of the two carbons. The CH₃ group stays as a side group: –CH<sub>2</sub>–CH(CH<sub>3</sub>)–.</p>
      solution: "<p>C=C를 C–C로 바꾸고 두 탄소에 각각 이어지는 결합 (continuation bond)을 하나씩 더해요. CH₃기는 곁사슬로 남아요: –CH<sub>2</sub>–CH(CH<sub>3</sub>)–.</p>",
      misconception: {
        // EN (option A): The CH₃ group is not part of the double bond, so it does not go into the backbone. Only the two carbons of the C=C are in the chain.
        "0": "CH₃기는 이중 결합에 속하지 않으므로 주사슬에 들어가지 않아요. C=C의 두 탄소만 사슬에 들어가요.",
        // EN (option B): The double bond has been kept. Each carbon would then have five bonds. The C=C becomes C–C when the continuation bonds form.
        "1": "이중 결합이 그대로 남아 있어요. 그러면 각 탄소의 결합이 5개가 돼요. 이어지는 결합이 생길 때 C=C는 C–C가 돼요.",
        // EN (option D): The continuation bonds are missing. Without them the unit cannot join to its neighbours, and each backbone carbon has only three bonds.
        "3": "이어지는 결합이 빠져 있어요. 이어지는 결합이 없으면 이 단위가 이웃과 결합할 수 없고, 주사슬의 각 탄소는 결합이 3개뿐이에요.",
      },
    },

    // ── s2-4-q016 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q016": {
      // EN: <p>A section of an addition polymer is shown.</p><svg viewBox="0 0 218 112" width="218" height="112" role="img" aria-label="Polymer chain section with four backbone carbons and a continuation bond at each end. Carbons 1 and 3 each have two H atoms. Carbons 2 and 4 each have two Cl atoms." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M178 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M178 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M142 56 H168" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M188 56 H212" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which monomer formed this polymer?</p>
      stem: "<p>어떤 첨가 중합체의 일부분이 그림과 같아요.</p><svg viewBox=\"0 0 218 112\" width=\"218\" height=\"112\" role=\"img\" aria-label=\"주사슬 탄소 4개와 양 끝의 이어지는 결합이 있는 고분자 사슬의 일부분. 탄소 1과 3에는 각각 H 원자 2개가 있어요. 탄소 2와 4에는 각각 Cl 원자 2개가 있어요.\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M132 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M132 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M96 56 H122\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M178 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M178 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M142 56 H168\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M188 56 H212\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/></svg><p>이 고분자를 만든 단위체는 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem nowrap">CHCl=CHCl</span>
        "<span class=\"chem nowrap\">CHCl=CHCl</span>",
        // EN: <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>
        "<span class=\"chem nowrap\">CH<sub>2</sub>=CHCl</span>",
        // EN: <span class="chem nowrap">CH<sub>2</sub>=CCl<sub>2</sub></span>
        "<span class=\"chem nowrap\">CH<sub>2</sub>=CCl<sub>2</sub></span>",
        // EN: <span class="chem nowrap">CH<sub>3</sub>–CHCl<sub>2</sub></span>
        "<span class=\"chem nowrap\">CH<sub>3</sub>–CHCl<sub>2</sub></span>",
      ],
      hints: [
        // EN: Mark off the chain two backbone carbons at a time.
        "사슬을 주사슬 탄소 2개씩 끊어서 표시해 보세요.",
        // EN: One pair is CH<sub>2</sub> joined to CCl<sub>2</sub>. Put a double bond between those two carbons.
        "한 쌍은 CH<sub>2</sub>가 CCl<sub>2</sub>와 연결된 것이에요. 이 두 탄소 사이를 이중 결합으로 바꾸세요.",
      ],
      // EN: <p>The repeating unit is –CH<sub>2</sub>–CCl<sub>2</sub>–. Remove the continuation bonds and restore the double bond: CH<sub>2</sub>=CCl<sub>2</sub>.</p>
      solution: "<p>반복 단위는 –CH<sub>2</sub>–CCl<sub>2</sub>–예요. 이어지는 결합을 없애고 이중 결합을 되살리면 CH<sub>2</sub>=CCl<sub>2</sub>가 돼요.</p>",
      misconception: {
        // EN (option A): This monomer would put one chlorine on every backbone carbon. In the polymer shown, both chlorine atoms are on the same carbon and the next carbon has none.
        "0": "이 단위체라면 주사슬의 모든 탄소에 염소가 하나씩 붙어요. 그림의 고분자에서는 염소 원자 2개가 같은 탄소에 붙어 있고, 그다음 탄소에는 염소가 없어요.",
        // EN (option B): This monomer has only one chlorine atom, but each repeating unit in the chain has two.
        "1": "이 단위체에는 염소 원자가 1개뿐이지만, 사슬의 각 반복 단위에는 2개가 있어요.",
        // EN (option D): This molecule has no C=C double bond, so it cannot form an addition polymer.
        "3": "이 분자에는 C=C 이중 결합이 없어서 첨가 중합체를 만들 수 없어요.",
      },
    },

    // ── s2-4-q017 · short · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q017": {
      // EN: <p>Poly(ethene) is a plastic used for food containers. State one <strong>chemical</strong> property that makes it suitable for this use, and explain the property in terms of the structure of the polymer.</p>
      stem: "<p>poly(ethene)은 음식 용기에 쓰이는 플라스틱이에요. 이 용도에 알맞은 <strong>화학적</strong> 성질 한 가지를 쓰고 (state), 그 성질을 고분자의 구조로 설명하시오 (explain).</p>",
      hints: [
        // EN: A chemical property is about whether the substance reacts.
        "화학적 성질은 물질이 반응하는지와 관련된 성질이에요.",
        // EN: What kind of bond joins the atoms inside a polymer chain?
        "고분자 사슬 안에서 원자들은 어떤 결합으로 연결되어 있나요?",
      ],
      // EN: <p>The question asks for a chemical property, so “strong” or “light” earns nothing. Plastics are unreactive because the covalent bonds in their chains are strong.</p>
      solution: "<p>문제에서 화학적 성질을 묻고 있으므로 “튼튼하다”나 “가볍다”는 점수를 받지 못해요. 플라스틱은 사슬 속 공유 결합이 강해서 반응성이 작아요.</p>",
      // EN: <p>It is unreactive (chemically inert), so it does not react with the food. The atoms in the polymer chains are joined by strong covalent bonds, which need a lot of energy to break.</p>
      answer: "<p>반응성이 작아서(화학적으로 안정해서) 음식과 반응하지 않아요. 고분자 사슬 속 원자들은 강한 공유 결합으로 연결되어 있고, 이 결합을 끊으려면 에너지가 많이 필요해요.</p>",
      markscheme: [
        // EN: Unreactive / chemically inert / does not react with food, water or acids (accept non-biodegradable). Do not accept a physical property such as strong, flexible or low density.
        "반응성이 작다 / 화학적으로 안정하다 / 음식, 물, 산과 반응하지 않는다(생분해되지 않는다도 인정). 튼튼하다, 유연하다, 밀도가 작다 같은 물리적 성질은 인정하지 않음.",
        // EN: The chains contain strong covalent bonds (C–C and C–H) which are difficult to break.
        "사슬에 끊기 어려운 강한 공유 결합(C–C와 C–H)이 있다.",
      ],
    },

    // ── s2-4-q018 · order · exam · SL · Structure 2.4.5 · 2 marks
    "s2-4-q018": {
      // EN: <p>Put these steps in order to draw the repeating unit of an addition polymer from its monomer.</p>
      stem: "<p>단위체에서 첨가 중합체의 반복 단위를 그리는 단계를 순서대로 놓으세요.</p>",
      options: [
        // EN: Find the two carbon atoms that are joined by the double bond.
        "이중 결합으로 연결된 탄소 원자 2개를 찾는다.",
        // EN: Redraw the monomer with every other group above or below those two carbons.
        "다른 원자단이 모두 두 탄소의 위나 아래에 오도록 단위체를 다시 그린다.",
        // EN: Change the double bond to a single bond.
        "이중 결합을 단일 결합으로 바꾼다.",
        // EN: Draw one continuation bond out from each of the two carbons.
        "두 탄소에서 각각 이어지는 결합을 하나씩 바깥쪽으로 그린다.",
        // EN: Check that each carbon atom has four bonds.
        "각 탄소 원자의 결합이 4개인지 확인한다.",
      ],
      hints: [
        // EN: You cannot open the double bond until you have found it.
        "이중 결합을 찾기 전에는 열 수 없어요.",
        // EN: The check comes last.
        "확인은 마지막에 해요.",
      ],
      // EN: <p>Find the C=C, redraw with the side groups above and below, change C=C to C–C, add the two continuation bonds, then check that each carbon has four bonds.</p>
      solution: "<p>C=C를 찾고, 곁사슬가 위아래에 오도록 다시 그리고, C=C를 C–C로 바꾸고, 이어지는 결합 2개를 더한 다음, 각 탄소의 결합이 4개인지 확인해요.</p>",
    },

    // ── s2-4-q019 · numeric · challenge · SL · Structure 2.4.5 · 2 marks
    "s2-4-q019": {
      // EN: <p>Propene, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>, forms the addition polymer poly(propene). One polymer chain has a relative molecular mass of <span class="mono">6.31 × 10<sup>4</sup></span>. Estimate the number of repeating units in this chain. Use <i>A</i><sub>r</sub>: C 12.01, H 1.01.</p>
      stem: "<p>propene, <span class=\"chem nowrap\">C<sub>3</sub>H<sub>6</sub></span>은 첨가 중합체 poly(propene)을 만들어요. 어떤 고분자 사슬 하나의 상대 분자 질량은 <span class=\"mono\">6.31 × 10<sup>4</sup></span>이에요. 이 사슬에 들어 있는 반복 단위의 수를 어림하시오 (estimate). <i>A</i><sub>r</sub>: C 12.01, H 1.01을 이용하세요.</p>",
      hints: [
        // EN: In addition polymerization no atoms are lost. What is the relative mass of one repeating unit?
        "첨가 중합에서는 원자가 없어지지 않아요. 반복 단위 하나의 상대 질량은 얼마인가요?",
        // EN: Number of units = relative molecular mass of the chain ÷ relative mass of one unit.
        "단위의 수 = 사슬의 상대 분자 질량 ÷ 단위 하나의 상대 질량.",
      ],
      // EN: <p>The repeating unit has the same atoms as one monomer, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>.</p><div class="worked__math"><i>M</i><sub>r</sub>(unit) = 3(12.01) + 6(1.01) = 42.09</div><div class="worked__math">number of units = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> (3 significant figures)</div>
      solution: "<p>반복 단위에는 단위체 1개와 같은 원자들, <span class=\"chem nowrap\">C<sub>3</sub>H<sub>6</sub></span>이 들어 있어요.</p><div class=\"worked__math\"><i>M</i><sub>r</sub>(단위) = 3(12.01) + 6(1.01) = 42.09</div><div class=\"worked__math\">단위의 수 = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> (유효 숫자 3자리)</div>",
    },

    // ── s2-4-q020 · mcq · challenge · SL · Structure 2.4.1 · 1 mark
    "s2-4-q020": {
      // EN: <p>The table gives electronegativity values. <i>χ</i>(O) = 3.4.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Element</th><th scope="col" class="num">Na</th><th scope="col" class="num">Mg</th><th scope="col" class="num">Si</th><th scope="col" class="num">P</th><th scope="col" class="num">S</th></tr></thead><tbody><tr><th scope="row"><i>χ</i></th><td class="num">0.9</td><td class="num">1.3</td><td class="num">1.9</td><td class="num">2.2</td><td class="num">2.6</td></tr></tbody></table></div><p>How does the position of the oxide in the bonding triangle change from sodium oxide to the oxide of sulfur, and what does this show about the bonding?</p>
      stem: "<p>표는 전기 음성도 값을 나타내요. <i>χ</i>(O) = 3.4예요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">원소</th><th scope=\"col\" class=\"num\">Na</th><th scope=\"col\" class=\"num\">Mg</th><th scope=\"col\" class=\"num\">Si</th><th scope=\"col\" class=\"num\">P</th><th scope=\"col\" class=\"num\">S</th></tr></thead><tbody><tr><th scope=\"row\"><i>χ</i></th><td class=\"num\">0.9</td><td class=\"num\">1.3</td><td class=\"num\">1.9</td><td class=\"num\">2.2</td><td class=\"num\">2.6</td></tr></tbody></table></div><p>산화 나트륨에서 황의 산화물로 갈수록 결합 삼각형에서 산화물의 위치는 어떻게 바뀌나요? 또 이것은 결합에 대해 무엇을 보여 주나요?</p>",
      options: [
        // EN: The difference decreases and the average increases. The bonding changes from ionic to polar covalent.
        "차는 작아지고 평균은 커진다. 결합은 이온 결합에서 극성 공유 결합으로 바뀐다.",
        // EN: The difference increases and the average increases. The bonding changes from polar covalent to ionic.
        "차는 커지고 평균도 커진다. 결합은 극성 공유 결합에서 이온 결합으로 바뀐다.",
        // EN: The difference decreases and the average decreases. The bonding changes from ionic to metallic.
        "차는 작아지고 평균도 작아진다. 결합은 이온 결합에서 금속 결합으로 바뀐다.",
        // EN: The position does not change, because every oxide contains oxygen.
        "모든 산화물에 산소가 들어 있으므로 위치는 바뀌지 않는다.",
      ],
      hints: [
        // EN: Calculate the difference and the average for the first oxide and the last oxide.
        "첫 번째 산화물과 마지막 산화물의 차와 평균을 계산하세요.",
        // EN: Na and O: difference 2.5, average 2.15. S and O: difference 0.8, average 3.0.
        "Na와 O: 차 2.5, 평균 2.15. S와 O: 차 0.8, 평균 3.0.",
      ],
      // EN: <div class="worked__math">Na and O: Δ<i>χ</i> = 3.4 − 0.9 = 2.5; average = (0.9 + 3.4) / 2 = 2.15</div><div class="worked__math">S and O: Δ<i>χ</i> = 3.4 − 2.6 = 0.8; average = (2.6 + 3.4) / 2 = 3.0</div><p>The points move down and to the right: from the ionic region to the polar covalent region. Bonding changes gradually across the period, which is the idea of a continuum.</p>
      solution: "<div class=\"worked__math\">Na와 O: Δ<i>χ</i> = 3.4 − 0.9 = 2.5; 평균 = (0.9 + 3.4) / 2 = 2.15</div><div class=\"worked__math\">S와 O: Δ<i>χ</i> = 3.4 − 2.6 = 0.8; 평균 = (2.6 + 3.4) / 2 = 3.0</div><p>점들은 오른쪽 아래로 움직여요: 이온 결합 영역에서 극성 공유 결합 영역으로요. 주기를 따라 결합이 조금씩 바뀌는데, 이것이 바로 연속체라는 생각이에요.</p>",
      misconception: {
        // EN (option B): The values get closer to 3.4 from Na to S, so the difference gets smaller, not larger. Check: 3.4 − 0.9 = 2.5 but 3.4 − 2.6 = 0.8.
        "1": "Na에서 S로 갈수록 값이 3.4에 가까워지므로, 차는 커지지 않고 작아져요. 확인해 보세요: 3.4 − 0.9 = 2.5이지만 3.4 − 2.6 = 0.8이에요.",
        // EN (option C): The average rises, because the first element becomes more electronegative while oxygen stays at 3.4. The points move right, away from the metallic corner.
        "2": "평균은 커져요. 산소는 3.4 그대로인데 다른 원소의 전기 음성도가 커지기 때문이에요. 점들은 오른쪽으로, 금속 결합 꼭짓점에서 멀어지는 쪽으로 움직여요.",
        // EN (option D): The position depends on both elements. The other element changes, so both coordinates change.
        "3": "위치는 두 원소에 모두 달려 있어요. 다른 원소가 바뀌므로 두 좌표가 모두 바뀌어요.",
      },
    },

    // ── s2-4-q021 · short · challenge · SL · Structure 2.4.2 · 3 marks
    "s2-4-q021": {
      // EN: <p>Sodium and silicon both form chlorides: NaCl and <span class="chem nowrap">SiCl<sub>4</sub></span>. Use <i>χ</i>(Na) = 0.9, <i>χ</i>(Si) = 1.9 and <i>χ</i>(Cl) = 3.2 and the bonding triangle. Determine the position of each chloride, deduce the bonding type of each, and predict one difference in their properties.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>나트륨(Na)과 규소(Si)는 모두 염화물을 만들어요: NaCl과 <span class=\"chem nowrap\">SiCl<sub>4</sub></span>. <i>χ</i>(Na) = 0.9, <i>χ</i>(Si) = 1.9, <i>χ</i>(Cl) = 3.2와 결합 삼각형을 이용하세요. 각 염화물의 위치를 구하고 (determine), 각각의 결합 종류를 추론하고 (deduce), 성질의 차이 한 가지를 예측하시오 (predict).</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"결합 삼각형. 가로축: 평균 전기 음성도, 0.5에서 4.0까지. 세로축: 전기 음성도 차, 0에서 3.0까지. 금속 결합 영역은 왼쪽 아래에 있고, 밑변에서 평균 약 1.9까지예요. 이온 결합 영역은 꼭대기까지 올라가는 띠예요. 공유 결합과 극성 공유 결합 영역은 오른쪽 아래에 있어요.\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">금속 결합</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">이온 결합</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">극성</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">공유 결합</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">평균 전기 음성도</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">전기 음성도 차</text></svg>",
      hints: [
        // EN: Work out two numbers for each chloride. Use one value per element.
        "염화물마다 숫자 2개를 구하세요. 원소마다 값을 하나씩만 써요.",
        // EN: Locate both points, then use the model for each region to predict properties.
        "두 점의 위치를 찾은 다음, 각 영역의 모형으로 성질을 예측하세요.",
      ],
      // EN: <p>NaCl is at (2.05, 2.3), in the ionic region. <span class="chem nowrap">SiCl<sub>4</sub></span> is at (2.55, 1.3), in the polar covalent region. The ionic model predicts a high melting point and conduction when molten. The covalent model predicts no conduction, and <span class="chem nowrap">SiCl<sub>4</sub></span> is made of molecules, so its melting point is low.</p>
      solution: "<p>NaCl은 (2.05, 2.3)으로 이온 결합 영역에 있어요. <span class=\"chem nowrap\">SiCl<sub>4</sub></span>는 (2.55, 1.3)으로 극성 공유 결합 영역에 있어요. 이온 결합 모형은 녹는점이 높고 녹은 상태에서 전기가 통한다고 예측해요. 공유 결합 모형은 전기가 통하지 않는다고 예측하고, <span class=\"chem nowrap\">SiCl<sub>4</sub></span>는 분자로 이루어져 있어서 녹는점이 낮아요.</p>",
      // EN: <div class="worked__math">NaCl: Δ<i>χ</i> = 3.2 − 0.9 = 2.3; average = (0.9 + 3.2) / 2 = 2.05</div><div class="worked__math">SiCl<sub>4</sub>: Δ<i>χ</i> = 3.2 − 1.9 = 1.3; average = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl is in the ionic region and <span class="chem nowrap">SiCl<sub>4</sub></span> is in the polar covalent region. NaCl has a much higher melting point, because of the strong electrostatic attraction between its ions. Molten NaCl conducts electricity because its ions can move, but <span class="chem nowrap">SiCl<sub>4</sub></span> does not conduct because it has no mobile charged particles.</p>
      answer: "<div class=\"worked__math\">NaCl: Δ<i>χ</i> = 3.2 − 0.9 = 2.3; 평균 = (0.9 + 3.2) / 2 = 2.05</div><div class=\"worked__math\">SiCl<sub>4</sub>: Δ<i>χ</i> = 3.2 − 1.9 = 1.3; 평균 = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl은 이온 결합 영역에, <span class=\"chem nowrap\">SiCl<sub>4</sub></span>는 극성 공유 결합 영역에 있어요. NaCl은 이온 사이의 강한 정전기적 인력 때문에 녹는점이 훨씬 높아요. 녹은 NaCl은 이온이 움직일 수 있어서 전기가 통하지만, <span class=\"chem nowrap\">SiCl<sub>4</sub></span>는 움직일 수 있는 전하를 띤 입자가 없어서 전기가 통하지 않아요.</p>",
      markscheme: [
        // EN: NaCl: difference 2.3 and average 2.05 AND SiCl₄: difference 1.3 and average 2.55.
        "NaCl: 차 2.3, 평균 2.05 AND SiCl₄: 차 1.3, 평균 2.55.",
        // EN: NaCl ionic AND SiCl₄ (polar) covalent.
        "NaCl은 이온 결합 AND SiCl₄는 (극성) 공유 결합.",
        // EN: One valid difference with a reason, for example: NaCl has the higher melting point (strong electrostatic attraction between ions) OR NaCl conducts when molten (mobile ions) and SiCl₄ does not.
        "타당한 차이 한 가지와 그 이유. 예: NaCl의 녹는점이 더 높다(이온 사이의 강한 정전기적 인력) OR NaCl은 녹은 상태에서 전기가 통하지만(움직이는 이온) SiCl₄는 통하지 않는다.",
      ],
    },

    // ── s2-4-q022 · numeric · challenge · SL · Structure 2.4.2 · 2 marks
    "s2-4-q022": {
      // EN: <p>Element X has an electronegativity of 1.6. It forms a binary compound with a more electronegative element, Y. The compound is at the point (2.4, 1.6) in the bonding triangle: average electronegativity 2.4, electronegativity difference 1.6. Calculate the electronegativity of Y.</p>
      stem: "<p>원소 X의 전기 음성도는 1.6이에요. X는 전기 음성도가 더 큰 원소 Y와 이성분 화합물을 만들어요. 이 화합물은 결합 삼각형에서 점 (2.4, 1.6)에 있어요: 평균 전기 음성도 2.4, 전기 음성도 차 1.6. Y의 전기 음성도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Y is more electronegative than X, so <i>χ</i>(Y) − <i>χ</i>(X) equals the difference.
        "Y가 X보다 전기 음성도가 크므로 <i>χ</i>(Y) − <i>χ</i>(X)가 차와 같아요.",
        // EN: Either use the difference: <i>χ</i>(Y) = 1.6 + 1.6. Or use the average: the two values add up to 2 × 2.4.
        "차를 이용해도 돼요: <i>χ</i>(Y) = 1.6 + 1.6. 평균을 이용해도 돼요: 두 값을 더하면 2 × 2.4예요.",
      ],
      // EN: <div class="worked__math"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>Check with the average:</p><div class="worked__math">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>
      solution: "<div class=\"worked__math\"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>평균으로 확인해 봐요:</p><div class=\"worked__math\">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>",
    },

    // ── s2-4-q023 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q023": {
      // EN: <p>Which statement is correct for the formation of every condensation polymer?</p>
      stem: "<p>모든 축합 중합체가 만들어질 때 항상 옳은 설명은 어느 것인가요?</p>",
      options: [
        // EN: Each monomer must contain a carbon to carbon double bond.
        "각 단위체에 탄소-탄소 이중 결합이 있어야 한다.",
        // EN: The polymer is the only product.
        "생성물은 고분자뿐이다.",
        // EN: A small molecule is released each time two monomers join.
        "단위체 2개가 결합할 때마다 작은 분자가 하나 나온다.",
        // EN: Only one kind of monomer can be used.
        "한 종류의 단위체만 쓸 수 있다.",
      ],
      hints: [
        // EN: What does the word “condensation” tell you is formed as well as the polymer?
        "‘축합(condensation)’이라는 말은 고분자 말고 무엇이 함께 생긴다는 뜻일까요?",
      ],
      // EN: <p>In condensation polymerization, functional groups on the monomers react together. Each new link releases a small molecule, usually water.</p>
      solution: "<p>축합 중합에서는 단위체의 작용기끼리 반응해요. 새로운 연결이 하나 생길 때마다 작은 분자가 하나 나오는데, 보통 물이에요.</p>",
      misconception: {
        // EN (option A): A C=C double bond is needed for addition polymerization. Condensation monomers need two functional groups instead.
        "0": "C=C 이중 결합은 첨가 중합에 필요해요. 축합 중합의 단위체에는 그 대신 작용기 2개가 필요해요.",
        // EN (option B): This is true for addition polymers. A condensation reaction also gives a small molecule, usually water.
        "1": "이것은 첨가 중합체에 맞는 설명이에요. 축합 반응에서는 작은 분자도 생기는데, 보통 물이에요.",
        // EN (option D): Many condensation polymers are made from two different monomers, such as a diol and a dicarboxylic acid.
        "3": "많은 축합 중합체는 다이올과 다이카복실산처럼 서로 다른 단위체 2가지로 만들어요.",
      },
    },

    // ── s2-4-q024 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q024": {
      // EN: <p>A polyester is made from these two monomers.</p><p><span class="chem nowrap">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; and &nbsp; <span class="chem nowrap">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>Which is the repeating unit of the polyester?</p>
      stem: "<p>어떤 폴리에스터는 다음 두 단위체로 만들어요.</p><p><span class=\"chem nowrap\">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; 그리고 &nbsp; <span class=\"chem nowrap\">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>이 폴리에스터의 반복 단위는 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem chem--eq">HO–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–COOH</span>
        "<span class=\"chem chem--eq\">HO–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–COOH</span>",
        // EN: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>
        "<span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–CH<sub>2</sub>–CH<sub>2</sub>–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>
        "<span class=\"chem chem--eq\">–CH<sub>2</sub>–CH<sub>2</sub>–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–O–</span>
        "<span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–O–</span>",
      ],
      hints: [
        // EN: Water forms from an H of the diol and an –OH of the acid.
        "물은 다이올의 H와 산의 –OH에서 생겨요.",
        // EN: Remove H from both ends of the diol and –OH from both ends of the acid. Then join them.
        "다이올의 양 끝에서 H를, 산의 양 끝에서 –OH를 떼어 내세요. 그다음 서로 연결하세요.",
      ],
      // EN: <p>Each –OH group of the diol loses H. Each –COOH group of the acid loses –OH. Joining O to the C=O carbon gives the ester link: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>. Water is the other product.</p>
      solution: "<p>다이올의 각 –OH기는 H를 잃어요. 산의 각 –COOH기는 –OH를 잃어요. O를 C=O의 탄소에 연결하면 에스터 결합이 생겨요: <span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>. 다른 생성물은 물이에요.</p>",
      misconception: {
        // EN (option A): This is the molecule made when one diol joins one acid. It still has an –OH group and a –COOH group at its ends, so it is not a repeating unit. A repeating unit has continuation bonds at both ends.
        "0": "이것은 다이올 1개와 산 1개가 결합해서 생긴 분자예요. 양 끝에 아직 –OH기와 –COOH기가 있으므로 반복 단위가 아니에요. 반복 단위는 양 끝에 이어지는 결합이 있어요.",
        // EN (option C): Both oxygen atoms of the diol have been removed. The diol loses only an H atom at each end. Its oxygen atoms stay and become part of the ester links.
        "2": "다이올의 산소 원자 2개가 모두 없어졌어요. 다이올은 양 끝에서 H 원자만 잃어요. 산소 원자는 남아서 에스터 결합의 일부가 돼요.",
        // EN (option D): There is one oxygen atom too many. The acid loses its –OH at each end, so the right-hand end is –CO–, not –CO–O–.
        "3": "산소 원자가 하나 더 많아요. 산은 양 끝에서 –OH를 잃으므로, 오른쪽 끝은 –CO–O–가 아니라 –CO–예요.",
      },
    },

    // ── s2-4-q025 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q025": {
      // EN: <p>The repeating unit of a polyamide is shown.</p><p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>Which pair of monomers forms this polymer?</p>
      stem: "<p>어떤 폴리아마이드의 반복 단위가 다음과 같아요.</p><p><span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>이 고분자를 만드는 단위체 쌍은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span>와 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>
        "<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>와 <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>",
        // EN: <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span> and <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem chem--eq\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span>와 <span class=\"chem chem--eq\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>와 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
      ],
      hints: [
        // EN: Break each bond between N and the C=O carbon.
        "N과 C=O의 탄소 사이 결합을 하나씩 끊으세요.",
        // EN: Give each N an extra H, and give each C=O carbon an –OH.
        "각 N에는 H를 하나 더 붙이고, C=O의 각 탄소에는 –OH를 붙이세요.",
      ],
      // EN: <p>Break the amide links. The <span class="chem nowrap">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> part gains an H on each nitrogen: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>, a diamine. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> part gains an –OH on each carbon: <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>, a dicarboxylic acid.</p>
      solution: "<p>아마이드 결합을 끊어요. <span class=\"chem nowrap\">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> 부분은 각 질소에 H를 하나씩 얻어서 다이아민 <span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>가 돼요. <span class=\"chem nowrap\">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> 부분은 각 탄소에 –OH를 하나씩 얻어서 다이카복실산 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>가 돼요.</p>",
      misconception: {
        // EN (option A): A diol and a dicarboxylic acid give a polyester, with –O–CO– links. This polymer has nitrogen in its links.
        "0": "다이올과 다이카복실산은 –O–CO– 결합이 있는 폴리에스터를 만들어요. 이 고분자는 연결 부분에 질소가 있어요.",
        // EN (option B): The two C=O groups in the repeating unit have been lost. Each C=O carbon gains an –OH on hydrolysis, to give a –COOH group.
        "1": "반복 단위에 있던 C=O기 2개가 없어졌어요. 가수 분해될 때 C=O의 각 탄소는 –OH를 얻어 –COOH기가 돼요.",
        // EN (option C): The unit shows both nitrogen atoms on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>6</sub></span> part and both C=O groups on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>8</sub></span> part. So one monomer has two –NH<sub>2</sub> groups and the other has two –COOH groups.
        "2": "반복 단위를 보면 질소 원자 2개는 모두 <span class=\"chem nowrap\">(CH<sub>2</sub>)<sub>6</sub></span> 부분에, C=O기 2개는 모두 <span class=\"chem nowrap\">(CH<sub>2</sub>)<sub>8</sub></span> 부분에 있어요. 그러므로 한 단위체에는 –NH<sub>2</sub>기가 2개, 다른 단위체에는 –COOH기가 2개 있어요.",
      },
    },

    // ── s2-4-q026 · short · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q026": {
      // EN: <p>A polyamide is made from these two monomers.</p><p><span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; and &nbsp; <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>Draw the repeating unit of the polyamide.</p>
      stem: "<p>어떤 폴리아마이드는 다음 두 단위체로 만들어요.</p><p><span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; 그리고 &nbsp; <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>이 폴리아마이드의 반복 단위를 그리시오 (draw).</p>",
      hints: [
        // EN: An –NH<sub>2</sub> group loses one H. A –COOH group loses –OH.
        "–NH<sub>2</sub>기는 H를 하나 잃어요. –COOH기는 –OH를 잃어요.",
        // EN: Join N to the C=O carbon. Then open both outer ends in the same way.
        "N을 C=O의 탄소에 연결하세요. 그다음 바깥쪽 두 끝도 같은 방법으로 여세요.",
      ],
      // EN: <p>Remove one H from each –NH<sub>2</sub> group and the –OH from each –COOH group. Join N to the C=O carbon. The unit is <span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span>, and water is the other product. Brackets and <i>n</i> are not required.</p>
      solution: "<p>각 –NH<sub>2</sub>기에서 H를 하나, 각 –COOH기에서 –OH를 떼어 내요. N을 C=O의 탄소에 연결해요. 반복 단위는 <span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span>이고, 다른 생성물은 물이에요. 괄호와 <i>n</i>은 쓰지 않아도 돼요.</p>",
      // EN: <p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>Each CO is a carbon atom with a double bond to oxygen. Each nitrogen atom keeps one hydrogen atom. There is a continuation bond at each end.</p>
      answer: "<p><span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>각 CO는 산소와 이중 결합을 이룬 탄소 원자예요. 각 질소 원자에는 수소 원자가 하나씩 남아 있어요. 양 끝에 이어지는 결합이 하나씩 있어요.</p>",
      markscheme: [
        // EN: Correct amide link shown: –NH–CO– (C=O bonded to N–H).
        "올바른 아마이드 결합을 나타냄: –NH–CO– (C=O가 N–H와 결합).",
        // EN: Continuation bonds at both ends AND the rest of the structure correct, with only one repeating unit drawn.
        "양 끝의 이어지는 결합 AND 나머지 구조가 올바르고, 반복 단위를 하나만 그림.",
      ],
    },

    // ── s2-4-q027 · multi · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q027": {
      // EN: <p>Which statements about condensation and hydrolysis are correct? Select all that apply.</p>
      stem: "<p>축합과 가수 분해에 대한 설명으로 옳은 것을 모두 고르세요.</p>",
      options: [
        // EN: Proteins form from amino acids by condensation reactions.
        "단백질은 아미노산의 축합 반응으로 만들어진다.",
        // EN: Hydrolysis of a polyester releases one molecule of water for each link broken.
        "폴리에스터가 가수 분해될 때 결합이 하나 끊어질 때마다 물 분자가 1개씩 나온다.",
        // EN: Hydrolysis breaks the links in a condensation polymer by reaction with water.
        "가수 분해는 물과 반응해서 축합 중합체의 연결 부분을 끊는다.",
        // EN: Poly(ethene) is easily broken down into ethene by hydrolysis.
        "poly(ethene)은 가수 분해로 쉽게 ethene으로 분해된다.",
        // EN: One molecule of water is released when an amide link forms from an –NH<sub>2</sub> group and a –COOH group.
        "–NH<sub>2</sub>기와 –COOH기에서 아마이드 결합이 하나 생길 때 물 분자 1개가 나온다.",
      ],
      hints: [
        // EN: Condensation and hydrolysis are opposites. In which one is water a product?
        "축합과 가수 분해는 서로 반대예요. 물이 생성물인 것은 어느 쪽인가요?",
      ],
      // EN: <p>All biological macromolecules, including proteins, form by condensation and break down by hydrolysis. Condensation releases water as each link forms. Hydrolysis uses water to break each link.</p>
      solution: "<p>단백질을 포함한 모든 생체 거대 분자는 축합으로 만들어지고 가수 분해로 분해돼요. 축합에서는 연결이 하나 생길 때마다 물이 나와요. 가수 분해에서는 물을 써서 연결을 하나씩 끊어요.</p>",
      misconception: {
        // EN (option B): Hydrolysis uses water. It does not release it. One molecule of water is a reactant for each link that breaks.
        "1": "가수 분해는 물을 써요. 물을 내놓지 않아요. 결합이 하나 끊어질 때마다 물 분자 1개가 반응물로 쓰여요.",
        // EN (option D): Poly(ethene) is an addition polymer. Its backbone has only carbon to carbon bonds, with no ester or amide links for water to break.
        "3": "poly(ethene)은 첨가 중합체예요. 주사슬에는 탄소-탄소 결합만 있고, 물이 끊을 수 있는 에스터 결합이나 아마이드 결합이 없어요.",
      },
    },

    // ── s2-4-q028 · numeric · challenge · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q028": {
      // EN: <p>150 molecules of a diamine react with 150 molecules of a dicarboxylic acid. They form one polyamide chain that contains all 300 monomer units. How many molecules of water are released?</p>
      stem: "<p>다이아민 분자 150개가 다이카복실산 분자 150개와 반응해요. 이들은 단위체 300개를 모두 포함한 폴리아마이드 사슬 하나를 만들어요. 물 분자는 몇 개 나오나요?</p>",
      hints: [
        // EN: One molecule of water is released for each amide link that forms.
        "아마이드 결합이 하나 생길 때마다 물 분자가 1개 나와요.",
        // EN: How many links join 300 units in a single chain? Try it with 2 units, then 3 units.
        "단위 300개를 사슬 하나로 잇는 결합은 몇 개인가요? 단위 2개, 그다음 단위 3개로 해 보세요.",
      ],
      // EN: <p>Two units need 1 link. Three units need 2 links. A chain of <i>N</i> units has <i>N</i> − 1 links.</p><div class="worked__math">links = 300 − 1 = 299, so 299 molecules of H<sub>2</sub>O</div>
      solution: "<p>단위 2개에는 결합이 1개 필요해요. 단위 3개에는 결합이 2개 필요해요. 단위 <i>N</i>개로 된 사슬에는 결합이 <i>N</i> − 1개 있어요.</p><div class=\"worked__math\">결합 수 = 300 − 1 = 299, 따라서 H<sub>2</sub>O 분자 299개</div>",
    },

    // ── s2-4-q029 · short · challenge · AHL · Structure 2.4.6 · 3 marks
    "s2-4-q029": {
      // EN: <p>The repeating unit of a polyester is shown.</p><p><span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) Deduce the structures of the two monomers formed when this polymer is hydrolysed. (b) Suggest why this polymer breaks down in the environment more readily than poly(ethene).</p>
      stem: "<p>어떤 폴리에스터의 반복 단위가 다음과 같아요.</p><p><span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) 이 고분자가 가수 분해될 때 생기는 두 단위체의 구조를 추론하시오 (deduce). (b) 이 고분자가 poly(ethene)보다 환경에서 더 쉽게 분해되는 이유를 제안하시오 (suggest).</p>",
      hints: [
        // EN: Break each bond between O and the C=O carbon.
        "O와 C=O의 탄소 사이 결합을 하나씩 끊으세요.",
        // EN: Each O gains an H. Each C=O carbon gains an –OH.
        "각 O는 H를 얻어요. C=O의 각 탄소는 –OH를 얻어요.",
        // EN: For (b), compare the backbones of the two polymers.
        "(b)에서는 두 고분자의 주사슬을 비교해 보세요.",
      ],
      // EN: <p>Hydrolysis breaks each ester link. The <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> part gains an H at each end to give the diol. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> part gains an –OH at each end to give the dicarboxylic acid. Addition polymers have no links that water can break.</p>
      solution: "<p>가수 분해로 에스터 결합이 하나씩 끊어져요. <span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> 부분은 양 끝에 H를 얻어 다이올이 돼요. <span class=\"chem nowrap\">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> 부분은 양 끝에 –OH를 얻어 다이카복실산이 돼요. 첨가 중합체에는 물이 끊을 수 있는 연결 부분이 없어요.</p>",
      // EN: <p>(a) <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>.</p><p>(b) The polyester has ester links in its backbone, which can be broken by hydrolysis (reaction with water). Poly(ethene) has only strong carbon to carbon bonds in its backbone, which are not hydrolysed.</p>
      answer: "<p>(a) <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span>와 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>.</p><p>(b) 폴리에스터는 주사슬에 에스터 결합이 있어서 가수 분해(물과의 반응)로 끊어질 수 있어요. poly(ethene)은 주사슬에 강한 탄소-탄소 결합만 있어서 가수 분해되지 않아요.</p>",
      markscheme: [
        // EN: HO–(CH₂)₄–OH (the diol).
        "HO–(CH₂)₄–OH (다이올).",
        // EN: HOOC–(CH₂)₂–COOH (the dicarboxylic acid).
        "HOOC–(CH₂)₂–COOH (다이카복실산).",
        // EN: The polyester has ester links that can be hydrolysed / broken by water, but poly(ethene) has only (strong, non-polar) C–C bonds in its chain.
        "폴리에스터에는 가수 분해될 수 있는 / 물로 끊어질 수 있는 에스터 결합이 있지만, poly(ethene)은 사슬에 (강한 무극성) C–C 결합만 있다.",
      ],
    },

    // ── s2-4-q030 · mcq · challenge · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q030": {
      // EN: <p>A single monomer can form a condensation polymer if it has two different functional groups. The monomer <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span> forms a polyester. Which is the repeating unit?</p>
      stem: "<p>단위체 하나에 서로 다른 작용기 2개가 있으면, 그 단위체 한 가지만으로도 축합 중합체를 만들 수 있어요. 단위체 <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span>는 폴리에스터를 만들어요. 반복 단위는 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "<span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "<span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>",
        // EN: <span class="chem nowrap">–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "<span class=\"chem nowrap\">–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–</span>
        "<span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–</span>",
      ],
      hints: [
        // EN: The –OH end of one molecule reacts with the –COOH end of the next molecule.
        "한 분자의 –OH 쪽 끝이 다음 분자의 –COOH 쪽 끝과 반응해요.",
        // EN: Remove H from the –OH end and –OH from the –COOH end.
        "–OH 쪽 끝에서 H를, –COOH 쪽 끝에서 –OH를 떼어 내세요.",
      ],
      // EN: <p>Each molecule loses an H from its –OH group and an –OH from its –COOH group, which together make one molecule of water. What remains is <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>. The ester link forms where one unit joins the next.</p>
      solution: "<p>각 분자는 –OH기에서 H를, –COOH기에서 –OH를 잃고, 이 둘이 합쳐져 물 분자 1개가 돼요. 남는 것은 <span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>예요. 한 단위가 다음 단위와 연결되는 곳에 에스터 결합이 생겨요.</p>",
      misconception: {
        // EN (option B): This shows two repeating units. With one kind of monomer, the smallest part that repeats comes from a single monomer molecule.
        "1": "이것은 반복 단위 2개예요. 단위체가 한 종류일 때, 되풀이되는 가장 작은 부분은 단위체 분자 1개에서 나와요.",
        // EN (option C): The oxygen of the –OH group has been removed. The –OH group loses only its H. Its oxygen becomes part of the ester link.
        "2": "–OH기의 산소가 없어졌어요. –OH기는 H만 잃어요. 그 산소는 에스터 결합의 일부가 돼요.",
        // EN (option D): There is one oxygen atom too many. The –COOH group loses its –OH, so that end of the unit is –CO–.
        "3": "산소 원자가 하나 더 많아요. –COOH기는 –OH를 잃으므로 단위의 그쪽 끝은 –CO–예요.",
      },
    },

    // ── s2-4-q031 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q031": {
      // EN: <p>Chemists describe bonding as a continuum between the ionic, covalent and metallic models. What does this mean?</p>
      stem: "<p>화학자들은 결합을 이온 결합, 공유 결합, 금속 결합 모형 사이의 연속체로 설명해요. 이것은 무슨 뜻인가요?</p>",
      options: [
        // EN: Every substance has exactly one of the three types of bonding.
        "모든 물질은 세 가지 결합 중 정확히 한 가지만 가진다.",
        // EN: Bonding changes gradually from one type to another, and many substances lie between the models.
        "결합은 한 종류에서 다른 종류로 조금씩 바뀌고, 많은 물질이 모형들 사이에 있다.",
        // EN: Every substance has equal amounts of the three types of bonding.
        "모든 물질은 세 가지 결합을 똑같은 양만큼 가진다.",
        // EN: The type of bonding in a substance changes when the substance is heated.
        "물질을 가열하면 그 물질의 결합 종류가 바뀐다.",
      ],
      hints: [
        // EN: Think of the bonding triangle. Are substances found only at its three corners?
        "결합 삼각형을 생각해 보세요. 물질은 세 꼭짓점에만 있나요?",
      ],
      // EN: <p>A continuum is a smooth range with no sharp dividing lines. The three models are the extremes. The bonding in most substances lies somewhere between them, and the bonding triangle shows where.</p>
      solution: "<p>연속체는 뚜렷한 경계선 없이 매끄럽게 이어진 범위예요. 세 가지 모형은 양 끝(극단)이에요. 대부분 물질의 결합은 그 사이 어딘가에 있고, 결합 삼각형이 그 위치를 보여 줘요.</p>",
      misconception: {
        // EN (option A): This describes three separate boxes. A continuum has no sharp dividing lines: a polar covalent bond, for example, is covalent with some ionic character.
        "0": "이것은 따로 떨어진 상자 3개를 말하는 거예요. 연속체에는 뚜렷한 경계선이 없어요. 예를 들어 극성 공유 결합은 이온 결합의 성격을 조금 띤 공유 결합이에요.",
        // EN (option C): The amounts are not equal. A substance near a corner of the bonding triangle is described well by one model. A substance between the corners has character of more than one model.
        "2": "양은 같지 않아요. 결합 삼각형의 꼭짓점 가까이에 있는 물질은 한 가지 모형으로 잘 설명돼요. 꼭짓점 사이에 있는 물질은 두 가지 이상 모형의 성격을 띠어요.",
        // EN (option D): A continuum is not about one substance changing. It is about the gradual change in bonding from one substance to the next.
        "3": "연속체는 한 물질이 바뀐다는 뜻이 아니에요. 물질에서 물질로 결합이 조금씩 바뀐다는 뜻이에요.",
      },
    },

    // ── s2-4-q032 · short · exam · SL · Structure 2.4.1 · 2 marks
    "s2-4-q032": {
      // EN: <p>Solid copper conducts electricity. Solid sodium chloride does not. Use bonding models to explain this difference.</p>
      stem: "<p>고체 구리는 전기가 통해요. 고체 염화 나트륨은 전기가 통하지 않아요. 결합 모형을 이용해 이 차이를 설명하시오 (explain).</p>",
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that can move.
        "전기가 통하려면 움직일 수 있는 전하를 띤 입자가 있어야 해요.",
        // EN: Name the charged particles in each solid. Can they move?
        "각 고체에 있는 전하를 띤 입자의 이름을 말해 보세요. 그 입자는 움직일 수 있나요?",
      ],
      // EN: <p>Name the particles and say whether they can move. In copper the delocalized electrons move. In solid sodium chloride the charged particles are ions, and they are fixed in the lattice. “Sodium chloride has no free electrons” does not earn the mark, because an ionic compound conducts through moving ions when it is molten.</p>
      solution: "<p>입자의 이름을 쓰고, 그 입자가 움직일 수 있는지 말해야 해요. 구리에서는 비편재화된 전자가 움직여요. 고체 염화 나트륨에서 전하를 띤 입자는 이온이고, 이온은 격자에 고정되어 있어요. “염화 나트륨에는 자유 전자가 없다”는 점수를 받지 못해요. 이온 결합 화합물은 녹은 상태에서 움직이는 이온으로 전기가 통하기 때문이에요.</p>",
      // EN: <p>Copper has metallic bonding: a lattice of cations with delocalized electrons. The delocalized electrons are free to move through the solid, so they carry charge.</p><p>Sodium chloride has ionic bonding. In the solid, the ions are held in fixed positions in the lattice, so no charged particles are free to move.</p>
      answer: "<p>구리는 금속 결합을 해요: 양이온 격자와 비편재화된 전자로 이루어져 있어요. 비편재화된 전자는 고체 속을 자유롭게 움직일 수 있어서 전하를 운반해요.</p><p>염화 나트륨은 이온 결합을 해요. 고체에서는 이온이 격자의 정해진 자리에 붙잡혀 있어서, 자유롭게 움직일 수 있는 전하를 띤 입자가 없어요.</p>",
      markscheme: [
        // EN: Copper: delocalized electrons that are free to move / mobile (through the lattice).
        "구리: 자유롭게 움직일 수 있는 / 이동할 수 있는 비편재화된 전자 ((격자 속을) 움직임).",
        // EN: Sodium chloride: ions are in fixed positions / cannot move in the solid (lattice). Do not accept “no free electrons” alone.
        "염화 나트륨: 이온이 정해진 자리에 있다 / 고체(격자)에서 움직일 수 없다. “자유 전자가 없다”만으로는 인정하지 않음.",
      ],
    },

    // ── s2-4-q033 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q033": {
      // EN: <p>Bronze is made by adding tin to copper. Bronze is harder than pure copper. Which statement explains this?</p>
      stem: "<p>청동은 구리에 주석을 넣어 만들어요. 청동은 순수한 구리보다 단단해요. 그 이유를 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: The tin atoms form strong covalent bonds with the copper atoms.
        "주석 원자가 구리 원자와 강한 공유 결합을 만든다.",
        // EN: The tin atoms are a different size, so the layers cannot slide over each other as easily.
        "주석 원자는 크기가 달라서 층이 서로 쉽게 미끄러지지 못한다.",
        // EN: The tin atoms remove the delocalized electrons from the copper.
        "주석 원자가 구리의 비편재화된 전자를 없앤다.",
        // EN: The tin atoms and the copper atoms form an ionic lattice.
        "주석 원자와 구리 원자가 이온 격자를 만든다.",
      ],
      hints: [
        // EN: Why is a pure metal malleable? What must the layers be able to do?
        "순수한 금속은 왜 펴짐성이 있나요? 층은 무엇을 할 수 있어야 하나요?",
      ],
      // EN: <p>In pure copper the cations are all the same size and form regular layers, which slide over each other. Tin atoms are a different size. They disrupt the regular layers, so the layers slide less easily and the alloy is harder.</p>
      solution: "<p>순수한 구리에서는 양이온의 크기가 모두 같아서 규칙적인 층을 이루고, 이 층들이 서로 미끄러져요. 주석 원자는 크기가 달라요. 주석 원자가 규칙적인 층을 흐트러뜨리므로 층이 잘 미끄러지지 않고, 그래서 합금이 더 단단해요.</p>",
      misconception: {
        // EN (option A): The bonding in an alloy is still metallic. The alloy is harder because its layers are disrupted, not because new covalent bonds form.
        "0": "합금의 결합도 여전히 금속 결합이에요. 합금이 더 단단한 것은 층이 흐트러지기 때문이지, 새로운 공유 결합이 생기기 때문이 아니에요.",
        // EN (option C): The delocalized electrons stay. Tin is a metal and adds its own outer electrons to them.
        "2": "비편재화된 전자는 그대로 있어요. 주석은 금속이므로 자신의 바깥 전자를 보태요.",
        // EN (option D): Both elements are metals, and neither forms negative ions here. The bonding stays metallic.
        "3": "두 원소 모두 금속이고, 여기서는 어느 쪽도 음이온을 만들지 않아요. 결합은 금속 결합 그대로예요.",
      },
    },

    // ── s2-4-q034 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q034": {
      // EN: <p>Polymers can be natural or synthetic. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Natural polymer</th><th scope="col">Synthetic polymer</th></tr></thead><tbody><tr><th scope="row">A</th><td>poly(ethene)</td><td>starch</td></tr><tr><th scope="row">B</th><td>protein</td><td>poly(ethene)</td></tr><tr><th scope="row">C</th><td>water</td><td>protein</td></tr><tr><th scope="row">D</th><td>cellulose</td><td>ethene</td></tr></tbody></table></div>
      stem: "<p>고분자에는 천연 고분자와 합성 고분자가 있어요. 옳은 행은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">천연 고분자</th><th scope=\"col\">합성 고분자</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>poly(ethene)</td><td>녹말</td></tr><tr><th scope=\"row\">B</th><td>단백질</td><td>poly(ethene)</td></tr><tr><th scope=\"row\">C</th><td>물</td><td>단백질</td></tr><tr><th scope=\"row\">D</th><td>셀룰로스</td><td>ethene</td></tr></tbody></table></div>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: Natural polymers are made by living things. Synthetic polymers are made in factories.
        "천연 고분자는 생물이 만들어요. 합성 고분자는 공장에서 만들어요.",
        // EN: A polymer is a large molecule. Check that both substances in the row are polymers.
        "고분자는 큰 분자예요. 그 행의 두 물질이 모두 고분자인지 확인하세요.",
      ],
      // EN: <p>Proteins are natural polymers: living things make them from amino acids. Poly(ethene) is a synthetic polymer, a plastic made from ethene. Row B is correct.</p>
      solution: "<p>단백질은 천연 고분자예요: 생물이 아미노산으로 만들어요. poly(ethene)은 합성 고분자로, ethene으로 만든 플라스틱이에요. 옳은 행은 B예요.</p>",
      misconception: {
        // EN (option A): These are the wrong way round. Starch is made by plants, so it is natural. Poly(ethene) is made in factories, so it is synthetic.
        "0": "둘이 서로 바뀌었어요. 녹말은 식물이 만들므로 천연 고분자예요. poly(ethene)은 공장에서 만들므로 합성 고분자예요.",
        // EN (option C): Water is a small molecule, not a polymer. Protein is a natural polymer, made by living things.
        "2": "물은 고분자가 아니라 작은 분자예요. 단백질은 생물이 만드는 천연 고분자예요.",
        // EN (option D): Cellulose is a natural polymer, but ethene is a small molecule. Ethene is the monomer that makes the polymer poly(ethene).
        "3": "셀룰로스는 천연 고분자이지만 ethene은 작은 분자예요. ethene은 고분자 poly(ethene)을 만드는 단위체예요.",
      },
    },

    // ── s2-4-q035 · mcq · exam · SL · Structure 2.4.4 · 1 mark
    "s2-4-q035": {
      // EN: <p>Many plastics soften when they are warmed, so they can be moulded into new shapes. Which statement explains this?</p>
      stem: "<p>많은 플라스틱은 따뜻하게 하면 물러져서 새로운 모양으로 성형할 수 있어요. 그 이유를 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: The covalent bonds inside the polymer chains break.
        "고분자 사슬 속의 공유 결합이 끊어진다.",
        // EN: The weak intermolecular forces between the polymer chains are overcome, so the chains can slide past each other.
        "고분자 사슬 사이의 약한 분자 간 힘이 극복되어, 사슬이 서로 미끄러져 지나갈 수 있다.",
        // EN: The delocalized electrons in the plastic gain energy and move faster.
        "플라스틱 속 비편재화된 전자가 에너지를 얻어 더 빠르게 움직인다.",
        // EN: The ions in the plastic become free to move.
        "플라스틱 속 이온이 자유롭게 움직일 수 있게 된다.",
      ],
      hints: [
        // EN: There are two kinds of attraction in a plastic: inside each chain, and between chains. Which is weaker?
        "플라스틱에는 두 종류의 인력이 있어요: 각 사슬 안의 인력과 사슬 사이의 인력. 어느 쪽이 더 약한가요?",
      ],
      // EN: <p>Inside each chain the atoms are joined by strong covalent bonds. Between the chains there are only weak intermolecular forces. Gentle heating overcomes these weak forces, so the chains slide past each other and the plastic softens. No covalent bonds break.</p>
      solution: "<p>각 사슬 안에서 원자들은 강한 공유 결합으로 연결되어 있어요. 사슬 사이에는 약한 분자 간 힘만 있어요. 살짝 가열하면 이 약한 힘이 극복되어 사슬이 서로 미끄러져 지나가고 플라스틱이 물러져요. 공유 결합은 끊어지지 않아요.</p>",
      misconception: {
        // EN (option A): The covalent bonds in the chains are strong and do not break on gentle heating. If they broke, the plastic would decompose into new substances.
        "0": "사슬 속 공유 결합은 강해서 살짝 가열해서는 끊어지지 않아요. 만약 끊어진다면 플라스틱이 분해되어 새로운 물질이 생길 거예요.",
        // EN (option C): A plastic has no delocalized electrons. All its outer electrons are held in covalent bonds, which is why it is an electrical insulator.
        "2": "플라스틱에는 비편재화된 전자가 없어요. 바깥 전자는 모두 공유 결합에 붙잡혀 있고, 그래서 플라스틱은 전기 절연체예요.",
        // EN (option D): A plastic is made of covalently bonded molecules. It contains no ions.
        "3": "플라스틱은 공유 결합으로 이루어진 분자로 되어 있어요. 이온이 들어 있지 않아요.",
      },
    },

    // ── s2-4-q036 · multi · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q036": {
      // EN: <p>Which statements about plastics are correct? Select all that apply.</p>
      stem: "<p>플라스틱에 대한 설명으로 옳은 것을 모두 고르세요.</p>",
      options: [
        // EN: A plastic is made of very long molecules.
        "플라스틱은 매우 긴 분자로 이루어져 있다.",
        // EN: Plastics are electrical insulators because all their outer electrons are held in covalent bonds.
        "플라스틱은 바깥 전자가 모두 공유 결합에 붙잡혀 있으므로 전기 절연체이다.",
        // EN: Plastics are unreactive because the forces between the chains are weak.
        "플라스틱은 사슬 사이의 힘이 약하므로 반응성이 작다.",
        // EN: The atoms inside each polymer chain are joined by strong covalent bonds.
        "각 고분자 사슬 속 원자들은 강한 공유 결합으로 연결되어 있다.",
        // EN: Most plastics are quickly broken down by microorganisms.
        "대부분의 플라스틱은 미생물에 의해 빠르게 분해된다.",
      ],
      hints: [
        // EN: Separate the two ideas: strong covalent bonds inside a chain, and weak forces between chains.
        "두 가지 생각을 나누어 보세요: 사슬 안의 강한 공유 결합과 사슬 사이의 약한 힘.",
        // EN: A chemical property depends on breaking bonds inside the chains.
        "화학적 성질은 사슬 안의 결합을 끊는 것과 관련이 있어요.",
      ],
      // EN: <p>Plastics are polymers: very long molecules with strong covalent bonds inside each chain. There are no delocalized electrons or ions, so plastics do not conduct electricity. The strong covalent bonds make plastics unreactive and, for most plastics, non-biodegradable.</p>
      solution: "<p>플라스틱은 고분자예요: 각 사슬 안에 강한 공유 결합이 있는 매우 긴 분자예요. 비편재화된 전자나 이온이 없어서 플라스틱은 전기가 통하지 않아요. 강한 공유 결합 때문에 플라스틱은 반응성이 작고, 대부분의 플라스틱은 생분해되지 않아요.</p>",
      misconception: {
        // EN (option C): The weak forces between chains explain physical properties, such as softening on heating. Plastics are unreactive because the covalent bonds inside the chains are strong.
        "2": "사슬 사이의 약한 힘은 가열하면 물러지는 것 같은 물리적 성질을 설명해요. 플라스틱의 반응성이 작은 것은 사슬 안의 공유 결합이 강하기 때문이에요.",
        // EN (option E): Most plastics are non-biodegradable. Microorganisms cannot easily break the strong covalent bonds in the chains, so plastic waste stays in the environment for a very long time.
        "4": "대부분의 플라스틱은 생분해되지 않아요. 미생물이 사슬 속의 강한 공유 결합을 쉽게 끊지 못하므로 플라스틱 쓰레기는 아주 오랫동안 환경에 남아요.",
      },
    },

    // ── s2-4-q037 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q037": {
      // EN: <p>A diamine reacts with a dicarboxylic acid to form a condensation polymer. Which row gives the type of polymer and the link between the monomer units?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of polymer</th><th scope="col">Link</th></tr></thead><tbody><tr><th scope="row">A</th><td>polyester</td><td>–CO–O–</td></tr><tr><th scope="row">B</th><td>polyamide</td><td>–CO–O–</td></tr><tr><th scope="row">C</th><td>polyamide</td><td>–CO–NH–</td></tr><tr><th scope="row">D</th><td>polyester</td><td>–CO–NH–</td></tr></tbody></table></div>
      stem: "<p>다이아민이 다이카복실산과 반응해 축합 중합체를 만들어요. 고분자의 종류와 단위체 사이의 연결 결합을 바르게 나타낸 행은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">고분자의 종류</th><th scope=\"col\">연결 결합</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>폴리에스터</td><td>–CO–O–</td></tr><tr><th scope=\"row\">B</th><td>폴리아마이드</td><td>–CO–O–</td></tr><tr><th scope=\"row\">C</th><td>폴리아마이드</td><td>–CO–NH–</td></tr><tr><th scope=\"row\">D</th><td>폴리에스터</td><td>–CO–NH–</td></tr></tbody></table></div>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: A diamine has two –NH<sub>2</sub> groups. Which atom of the diamine joins to the C=O carbon?
        "다이아민에는 –NH<sub>2</sub>기가 2개 있어요. 다이아민의 어느 원자가 C=O의 탄소와 결합하나요?",
      ],
      // EN: <p>An –NH<sub>2</sub> group reacts with a –COOH group. Water is released and an amide link, –CO–NH–, forms. A polymer with many amide links is a polyamide.</p>
      solution: "<p>–NH<sub>2</sub>기가 –COOH기와 반응해요. 물이 나오고 아마이드 결합 –CO–NH–가 생겨요. 아마이드 결합이 많은 고분자를 폴리아마이드라고 해요.</p>",
      misconception: {
        // EN (option A): A polyester forms from a diol and a dicarboxylic acid. Here the first monomer is a diamine, with –NH<sub>2</sub> groups, so the link must contain nitrogen.
        "0": "폴리에스터는 다이올과 다이카복실산으로 만들어요. 여기서는 첫 번째 단위체가 –NH<sub>2</sub>기를 가진 다이아민이므로 연결 결합에 질소가 들어 있어야 해요.",
        // EN (option B): The name is right, but –CO–O– is an ester link. An amide link contains nitrogen: –CO–NH–.
        "1": "이름은 맞지만 –CO–O–는 에스터 결합이에요. 아마이드 결합에는 질소가 들어 있어요: –CO–NH–.",
        // EN (option D): The link is right, but a polymer with –CO–NH– links is called a polyamide.
        "3": "연결 결합은 맞지만 –CO–NH– 결합을 가진 고분자는 폴리아마이드라고 불러요.",
      },
    },

  }
});
