/* s2-2.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's2-2.q', {
  questions: {

    // ── s2-2-q001 · mcq · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q001": {
      // EN: <p>Which statement best describes a covalent bond?</p>
      stem: "<p>공유 결합 <span class=\"en-term\">(covalent bond)</span>을 가장 잘 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: The electrostatic attraction between oppositely charged ions.
        "반대 전하를 띤 이온 사이의 정전기적 인력.",
        // EN: The electrostatic attraction between a shared pair of electrons and the positively charged nuclei.
        "공유 전자쌍과 양전하를 띤 원자핵 사이의 정전기적 인력.",
        // EN: The electrostatic attraction between a lattice of cations and delocalized electrons.
        "양이온 격자와 비편재화된 전자 사이의 정전기적 인력.",
        // EN: The transfer of electrons from one atom to another atom.
        "한 원자에서 다른 원자로 전자가 이동하는 것.",
      ],
      hints: [
        // EN: In a covalent bond, two atoms share a pair of electrons.
        "공유 결합에서는 두 원자가 전자쌍 하나를 함께 나누어 가져요.",
        // EN: A bond is always an electrostatic attraction. Ask: what is attracted to what?
        "결합은 언제나 정전기적 인력이에요. 무엇이 무엇을 끌어당기는지 생각해 봐요.",
      ],
      // EN: <p>Two nuclei are both attracted to the same shared pair of electrons. That attraction holds the atoms together.</p><p>The markscheme wording is: <strong>electrostatic attraction between a shared pair of electrons and the positively charged nuclei</strong>.</p>
      solution: "<p>두 원자핵이 모두 같은 공유 전자쌍에 끌려요. 이 인력이 원자들을 붙잡아 둬요.</p><p>채점 기준의 표현은 <strong>공유 전자쌍과 양전하를 띤 원자핵 사이의 정전기적 인력</strong>이에요.</p>",
      misconception: {
        // EN (option A): This describes an ionic bond. In a covalent bond no ions form: the atoms share a pair of electrons.
        "0": "이것은 이온 결합에 대한 설명이에요. 공유 결합에서는 이온이 생기지 않고, 원자들이 전자쌍을 함께 나누어 가져요.",
        // EN (option C): This describes a metallic bond. In a covalent bond the shared pair stays between two nuclei. It is not delocalized through a lattice.
        "2": "이것은 금속 결합에 대한 설명이에요. 공유 결합에서 공유 전자쌍은 두 원자핵 사이에 머물러요. 격자 전체에 비편재화되지 않아요.",
        // EN (option D): Electron transfer happens when ions form. A bond is an attraction, not a transfer. In a covalent bond the electrons are shared.
        "3": "전자 이동은 이온이 생길 때 일어나요. 결합은 인력이지 이동이 아니에요. 공유 결합에서는 전자를 함께 나누어 가져요.",
      },
    },

    // ── s2-2-q002 · numeric · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q002": {
      // EN: <p>The first step in drawing a Lewis formula is to count the valence electrons.</p><p>How many valence electrons must be shown in the Lewis formula of the carbonate ion, <span class="chem">CO3^2-</span>?</p>
      stem: "<p>루이스 구조식을 그리는 첫 단계는 원자가 전자의 수를 세는 거예요.</p><p>탄산 이온 <span class=\"chem\">CO3^2-</span>의 루이스 구조식에는 원자가 전자를 몇 개 나타내야 하나요?</p>",
      hints: [
        // EN: Carbon is in group 14, so it has 4 valence electrons. Oxygen is in group 16, so it has 6.
        "탄소는 14족이므로 원자가 전자가 4개예요. 산소는 16족이므로 6개예요.",
        // EN: The charge is 2−. A negative charge means extra electrons. Add them.
        "전하가 2−예요. 음전하는 전자가 더 있다는 뜻이에요. 그만큼 더하세요.",
      ],
      // EN: <div class="worked__math">C: 1 × 4 = 4</div><div class="worked__math">O: 3 × 6 = 18</div><div class="worked__math">charge 2−: add 2</div><div class="worked__math">total = 4 + 18 + 2 = 24 valence electrons</div><p>For a negative ion you add electrons. For a positive ion you subtract electrons.</p>
      solution: "<div class=\"worked__math\">C: 1 × 4 = 4</div><div class=\"worked__math\">O: 3 × 6 = 18</div><div class=\"worked__math\">전하 2−: 2 더하기</div><div class=\"worked__math\">합계 = 4 + 18 + 2 = 24 원자가 전자</div><p>음이온은 전자를 더하고, 양이온은 전자를 빼요.</p>",
    },

    // ── s2-2-q003 · numeric · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q003": {
      // EN: <p>How many lone pairs (non-bonding pairs) of electrons are there in the Lewis formula of one molecule of carbon dioxide, <span class="chem">CO2</span>?</p><p>Count the lone pairs on <strong>all</strong> the atoms.</p>
      stem: "<p>이산화 탄소 <span class=\"chem\">CO2</span> 분자 1개의 루이스 구조식에는 비공유 전자쌍(결합하지 않은 전자쌍)이 몇 개 있나요?</p><p><strong>모든</strong> 원자의 비공유 전자쌍을 세세요.</p>",
      hints: [
        // EN: Total valence electrons: 4 + 6 + 6 = 16, which is 8 pairs.
        "원자가 전자의 합: 4 + 6 + 6 = 16, 즉 8쌍이에요.",
        // EN: The structure is <span class="chem">O=C=O</span>. The two double bonds use 4 pairs. Where are the other pairs?
        "구조는 <span class=\"chem\">O=C=O</span>예요. 이중 결합 두 개가 4쌍을 써요. 나머지 쌍은 어디에 있을까요?",
      ],
      // EN: <p><span class="chem">CO2</span> has 4 + (2 × 6) = 16 valence electrons, which is 8 pairs.</p><p>The two <span class="chem">C=O</span> double bonds use 4 pairs. The other 4 pairs are lone pairs: <strong>2 on each oxygen atom</strong>. Carbon has none.</p><p>Total lone pairs = <strong>4</strong>. A Lewis formula must show every lone pair, including those on the outer atoms.</p>
      solution: "<p><span class=\"chem\">CO2</span>의 원자가 전자는 4 + (2 × 6) = 16개, 즉 8쌍이에요.</p><p><span class=\"chem\">C=O</span> 이중 결합 두 개가 4쌍을 써요. 나머지 4쌍은 비공유 전자쌍으로, <strong>산소 원자마다 2쌍</strong>씩 있어요. 탄소에는 없어요.</p><p>비공유 전자쌍의 합 = <strong>4</strong>. 루이스 구조식에는 바깥쪽 원자의 것을 포함해 모든 비공유 전자쌍을 나타내야 해요.</p>",
    },

    // ── s2-2-q004 · mcq · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q004": {
      // EN: <p>Which is the correct Lewis formula of hydrogen cyanide, <span class="chem">HCN</span>?</p><p>Each line is one shared pair. Each pair of dots is one lone pair.</p>
      stem: "<p>사이안화 수소 <span class=\"chem\">HCN</span>의 올바른 루이스 구조식은 무엇인가요?</p><p>선 하나는 공유 전자쌍 하나예요. 점 두 개 한 쌍은 비공유 전자쌍 하나예요.</p>",
      options: [
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, no lone pairs" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H와 C는 단일 결합, C와 N은 삼중 결합, 비공유 전자쌍 없음\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C double bond N, two lone pairs on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-2.6" x2="75.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="2.6" x2="75.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="93.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="88.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="88.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="93.8" cy="10.5" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H와 C는 단일 결합, C와 N은 이중 결합, N에 비공유 전자쌍 2개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-2.6\" x2=\"75.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"2.6\" x2=\"75.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"93.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"88.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"88.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"93.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, one lone pair on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="98.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="98.0" cy="-3.2" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H와 C는 단일 결합, C와 N은 삼중 결합, N에 비공유 전자쌍 1개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"98.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"98.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, one lone pair on C and one lone pair on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><circle cx="43.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="36.8" cy="-14.0" r="1.7" fill="currentColor"/><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="98.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="98.0" cy="-3.2" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H와 C는 단일 결합, C와 N은 삼중 결합, C에 비공유 전자쌍 1개, N에 비공유 전자쌍 1개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><circle cx=\"43.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"36.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"98.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"98.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/></svg>",
      ],
      hints: [
        // EN: Count the valence electrons first: H has 1, C has 4, N has 5.
        "먼저 원자가 전자를 세세요. H는 1개, C는 4개, N은 5개예요.",
        // EN: In the correct formula, C and N each have 8 electrons around them and H has 2.
        "올바른 구조식에서는 C와 N 주위에 각각 전자 8개, H 주위에 전자 2개가 있어요.",
        // EN: Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.
        "그림마다 전자를 세세요. 선 하나에 2개, 점 한 쌍에 2개예요.",
      ],
      // EN: <p>Valence electrons: 1 + 4 + 5 = <strong>10</strong> (5 pairs).</p><p><span class="chem">H–C≡N</span> uses 4 pairs in bonds: one in the single bond and three in the triple bond. The last pair is a lone pair on nitrogen.</p><p>Check: H has 2 electrons. C has 8 (four bonding pairs). N has 8 (three bonding pairs and one lone pair).</p>
      solution: "<p>원자가 전자: 1 + 4 + 5 = <strong>10</strong> (5쌍).</p><p><span class=\"chem\">H–C≡N</span>은 결합에 4쌍을 써요. 단일 결합에 1쌍, 삼중 결합에 3쌍이에요. 남은 1쌍은 질소의 비공유 전자쌍이에요.</p><p>확인: H는 전자 2개, C는 8개(공유 전자쌍 4개), N은 8개(공유 전자쌍 3개와 비공유 전자쌍 1개)예요.</p>",
      misconception: {
        // EN (option A): This drawing shows only 8 electrons. <span class="chem">HCN</span> has 1 + 4 + 5 = 10 valence electrons. The lone pair on nitrogen is missing, so nitrogen has only 6 electrons around it.
        "0": "이 그림에는 전자가 8개뿐이에요. <span class=\"chem\">HCN</span>의 원자가 전자는 1 + 4 + 5 = 10개예요. 질소의 비공유 전자쌍이 빠져서 질소 주위에 전자가 6개뿐이에요.",
        // EN (option B): The electron count (10) is right, but carbon has only 3 pairs (6 electrons) around it. Moving one lone pair from N into the bond makes a triple bond and gives carbon an octet.
        "1": "전자 수(10)는 맞지만 탄소 주위에 3쌍(전자 6개)뿐이에요. N의 비공유 전자쌍 하나를 결합으로 옮기면 삼중 결합이 되고 탄소가 옥텟을 이뤄요.",
        // EN (option D): This drawing shows 12 electrons, but only 10 valence electrons are available. Carbon would also have 5 pairs around it, which is more than an octet.
        "3": "이 그림에는 전자가 12개 있지만 쓸 수 있는 원자가 전자는 10개뿐이에요. 또 탄소 주위에 5쌍이 생겨 옥텟보다 많아져요.",
      },
    },

    // ── s2-2-q005 · numeric · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q005": {
      // EN: <p>Ethanoic acid has the structural formula <span class="chem">CH3COOH</span>. One oxygen atom is joined to carbon by a double bond. The other oxygen atom is in an <span class="chem">O–H</span> group.</p><p>How many <strong>bonding pairs</strong> of electrons are there in the Lewis formula of one molecule of ethanoic acid?</p>
      stem: "<p>ethanoic acid(에탄산)의 구조식은 <span class=\"chem\">CH3COOH</span>예요. 산소 원자 하나는 탄소와 이중 결합으로 연결되어 있어요. 다른 산소 원자는 <span class=\"chem\">O–H</span> 기에 있어요.</p><p>ethanoic acid 분자 1개의 루이스 구조식에는 <strong>공유 전자쌍</strong>이 몇 개 있나요?</p>",
      hints: [
        // EN: List the bonds: three <span class="chem">C–H</span>, one <span class="chem">C–C</span>, one <span class="chem">C=O</span>, one <span class="chem">C–O</span>, one <span class="chem">O–H</span>.
        "결합을 나열해 봐요: <span class=\"chem\">C–H</span> 3개, <span class=\"chem\">C–C</span> 1개, <span class=\"chem\">C=O</span> 1개, <span class=\"chem\">C–O</span> 1개, <span class=\"chem\">O–H</span> 1개.",
        // EN: A double bond is two bonding pairs.
        "이중 결합은 공유 전자쌍 2개예요.",
      ],
      // EN: <div class="worked__math">C–H: 3 pairs</div><div class="worked__math">C–C: 1 pair</div><div class="worked__math">C=O: 2 pairs</div><div class="worked__math">C–O: 1 pair</div><div class="worked__math">O–H: 1 pair</div><div class="worked__math">total = 8 bonding pairs</div><p>Check with the electron count. Valence electrons = (2 × 4) + (4 × 1) + (2 × 6) = 24, which is 12 pairs. There are 8 bonding pairs and 4 lone pairs (2 on each oxygen atom). 8 + 4 = 12.</p>
      solution: "<div class=\"worked__math\">C–H: 3쌍</div><div class=\"worked__math\">C–C: 1쌍</div><div class=\"worked__math\">C=O: 2쌍</div><div class=\"worked__math\">C–O: 1쌍</div><div class=\"worked__math\">O–H: 1쌍</div><div class=\"worked__math\">합계 = 공유 전자쌍 8개</div><p>전자 수로 확인해 봐요. 원자가 전자 = (2 × 4) + (4 × 1) + (2 × 6) = 24개, 즉 12쌍이에요. 공유 전자쌍 8개와 비공유 전자쌍 4개(산소 원자마다 2개)가 있어요. 8 + 4 = 12.</p>",
    },

    // ── s2-2-q006 · multi · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q006": {
      // EN: <p>In which of these molecules does the <strong>central atom</strong> have fewer than 8 electrons in its valence shell? Select all that apply.</p>
      stem: "<p>다음 분자 중 <strong>중심 원자</strong>의 원자가 껍질에 전자가 8개보다 적은 것은 무엇인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: <span class="chem">BeCl2</span>
        "<span class=\"chem\">BeCl2</span>",
        // EN: <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>",
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">CCl4</span>
        "<span class=\"chem\">CCl4</span>",
        // EN: <span class="chem">PCl3</span>
        "<span class=\"chem\">PCl3</span>",
      ],
      hints: [
        // EN: Find the group of each central atom. That tells you its number of valence electrons.
        "각 중심 원자의 족을 찾아보세요. 족을 보면 원자가 전자 수를 알 수 있어요.",
        // EN: Beryllium has 2 valence electrons and boron has 3. How many bonds can each form, and are any lone pairs left?
        "베릴륨은 원자가 전자가 2개, 붕소는 3개예요. 각각 결합을 몇 개 만들 수 있고, 남는 비공유 전자쌍이 있을까요?",
      ],
      // EN: <p><strong><span class="chem">BeCl2</span></strong>: Be has 2 valence electrons and forms 2 bonds. It has 2 pairs = 4 electrons.</p><p><strong><span class="chem">BF3</span></strong>: B has 3 valence electrons and forms 3 bonds. It has 3 pairs = 6 electrons.</p><p>In <span class="chem">NH3</span>, <span class="chem">CCl4</span> and <span class="chem">PCl3</span> the central atom has four pairs (bonding pairs plus lone pairs), so it has an octet.</p>
      solution: "<p><strong><span class=\"chem\">BeCl2</span></strong>: Be는 원자가 전자 2개로 결합 2개를 만들어요. 2쌍 = 전자 4개예요.</p><p><strong><span class=\"chem\">BF3</span></strong>: B는 원자가 전자 3개로 결합 3개를 만들어요. 3쌍 = 전자 6개예요.</p><p><span class=\"chem\">NH3</span>, <span class=\"chem\">CCl4</span>, <span class=\"chem\">PCl3</span>에서는 중심 원자 주위에 4쌍(공유 전자쌍과 비공유 전자쌍)이 있으므로 옥텟을 이뤄요.</p>",
      misconception: {
        // EN (option C): Nitrogen in <span class="chem">NH3</span> has three bonding pairs and one lone pair. That is 8 electrons. Remember to count the lone pair.
        "2": "<span class=\"chem\">NH3</span>의 질소에는 공유 전자쌍 3개와 비공유 전자쌍 1개가 있어요. 전자 8개예요. 비공유 전자쌍도 세는 것을 잊지 마세요.",
        // EN (option D): Carbon in <span class="chem">CCl4</span> has four bonding pairs. That is 8 electrons.
        "3": "<span class=\"chem\">CCl4</span>의 탄소에는 공유 전자쌍이 4개 있어요. 전자 8개예요.",
        // EN (option E): Phosphorus in <span class="chem">PCl3</span> has three bonding pairs and one lone pair. That is 8 electrons.
        "4": "<span class=\"chem\">PCl3</span>의 인에는 공유 전자쌍 3개와 비공유 전자쌍 1개가 있어요. 전자 8개예요.",
      },
    },

    // ── s2-2-q007 · mcq · challenge · SL · Structure 2.2.1 · 1 mark
    "s2-2-q007": {
      // EN: <p>The peroxide ion has the formula <span class="chem">O2^2-</span>. Each oxygen atom in the ion obeys the octet rule.</p><p>Which is the correct Lewis formula of the peroxide ion?</p>
      stem: "<p>과산화 이온의 화학식은 <span class=\"chem\">O2^2-</span>예요. 이온 속 산소 원자는 각각 옥텟 규칙을 따라요.</p><p>과산화 이온의 올바른 루이스 구조식은 무엇인가요?</p>",
      options: [
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O double bond O, two lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="53.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="48.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="48.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="53.8" cy="10.5" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"전하 2−인 이온. O와 O는 이중 결합, 각 O에 비공유 전자쌍 2개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"53.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"53.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O single bond O, two lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="35.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="53.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="48.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="48.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="53.8" cy="10.5" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"전하 2−인 이온. O와 O는 단일 결합, 각 O에 비공유 전자쌍 2개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"35.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"53.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"53.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O double bond O, three lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="14.0" r="1.7" fill="currentColor"/><circle cx="3.2" cy="14.0" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="58.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="58.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="40.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="47.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"전하 2−인 이온. O와 O는 이중 결합, 각 O에 비공유 전자쌍 3개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O single bond O, three lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="35.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="14.0" r="1.7" fill="currentColor"/><circle cx="3.2" cy="14.0" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="58.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="58.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="40.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="47.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"전하 2−인 이온. O와 O는 단일 결합, 각 O에 비공유 전자쌍 3개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"35.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
      ],
      hints: [
        // EN: Count the valence electrons: 6 from each oxygen atom, plus the electrons for the charge.
        "원자가 전자를 세세요. 산소 원자마다 6개이고, 전하만큼 전자를 더해요.",
        // EN: 14 electrons is 7 pairs. Share them so that each oxygen atom has 4 pairs around it.
        "전자 14개는 7쌍이에요. 산소 원자마다 주위에 4쌍이 오도록 나누어 보세요.",
        // EN: Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.
        "그림마다 전자를 세세요. 선 하나에 2개, 점 한 쌍에 2개예요.",
      ],
      // EN: <div class="worked__math">valence electrons = (2 × 6) + 2 = 14, which is 7 pairs</div><p>With a <strong>single</strong> <span class="chem">O–O</span> bond (1 pair), 6 pairs are left. That is 3 lone pairs on each oxygen atom.</p><p>Check: each O has 1 bonding pair + 3 lone pairs = 8 electrons. The charge 2− must be shown.</p><p>The extra two electrons are why the ion has a single bond, while the <span class="chem">O2</span> molecule has a double bond.</p>
      solution: "<div class=\"worked__math\">원자가 전자 = (2 × 6) + 2 = 14, 즉 7쌍</div><p><strong>단일</strong> <span class=\"chem\">O–O</span> 결합(1쌍)을 쓰면 6쌍이 남아요. 산소 원자마다 비공유 전자쌍이 3개씩이에요.</p><p>확인: 각 O에는 공유 전자쌍 1개 + 비공유 전자쌍 3개 = 전자 8개가 있어요. 전하 2−도 꼭 나타내야 해요.</p><p>이온이 단일 결합을 갖고 <span class=\"chem\">O2</span> 분자는 이중 결합을 갖는 것은 바로 이 여분의 전자 2개 때문이에요.</p>",
      misconception: {
        // EN (option A): This drawing has 12 electrons. That is the count for an <span class="chem">O2</span> molecule. The ion has a 2− charge, so it has 2 more electrons: 14 in total.
        "0": "이 그림에는 전자가 12개 있어요. 이것은 <span class=\"chem\">O2</span> 분자의 전자 수예요. 이온은 전하가 2−이므로 전자가 2개 더 많아 모두 14개예요.",
        // EN (option B): This drawing has only 10 electrons, and each oxygen atom has only 6 electrons around it. The ion has 14 valence electrons.
        "1": "이 그림에는 전자가 10개뿐이고, 산소 원자 주위에 전자가 6개씩뿐이에요. 이 이온의 원자가 전자는 14개예요.",
        // EN (option C): This drawing has 16 electrons, and each oxygen atom has 10 electrons around it. The ion has 14 valence electrons.
        "2": "이 그림에는 전자가 16개 있고, 산소 원자 주위에 전자가 10개씩 있어요. 이 이온의 원자가 전자는 14개예요.",
      },
    },

    // ── s2-2-q008 · numeric · foundation · SL · Structure 2.2.2 · 1 mark
    "s2-2-q008": {
      // EN: <p>A nitrogen molecule, <span class="chem">N2</span>, contains a triple bond.</p><p>How many <strong>electrons</strong> are shared between the two nitrogen atoms?</p>
      stem: "<p>질소 분자 <span class=\"chem\">N2</span>에는 삼중 결합이 있어요.</p><p>두 질소 원자 사이에 공유된 <strong>전자</strong>는 몇 개인가요?</p>",
      hints: [
        // EN: A triple bond is three shared pairs.
        "삼중 결합은 공유 전자쌍 3개예요.",
        // EN: The question asks for electrons, not pairs.
        "문제는 전자쌍이 아니라 전자의 수를 묻고 있어요.",
      ],
      // EN: <p>Single bond: 1 shared pair. Double bond: 2 shared pairs. Triple bond: 3 shared pairs.</p><div class="worked__math">3 pairs × 2 electrons = 6 electrons</div><p>Each nitrogen atom also has one lone pair, which is not shared.</p>
      solution: "<p>단일 결합: 공유 전자쌍 1개. 이중 결합: 공유 전자쌍 2개. 삼중 결합: 공유 전자쌍 3개.</p><div class=\"worked__math\">3쌍 × 전자 2개 = 전자 6개</div><p>질소 원자마다 공유되지 않는 비공유 전자쌍도 1개씩 있어요.</p>",
    },

    // ── s2-2-q009 · mcq · exam · SL · Structure 2.2.2 · 1 mark
    "s2-2-q009": {
      // EN: <p>Which species has the <strong>shortest</strong> bond between carbon and oxygen?</p>
      stem: "<p>탄소와 산소 사이의 결합이 <strong>가장 짧은</strong> 화학종은 무엇인가요?</p>",
      options: [
        // EN: methanol, <span class="chem">CH3OH</span>
        "methanol, <span class=\"chem\">CH3OH</span>",
        // EN: carbon dioxide, <span class="chem">CO2</span>
        "이산화 탄소, <span class=\"chem\">CO2</span>",
        // EN: carbon monoxide, <span class="chem">CO</span>
        "일산화 탄소, <span class=\"chem\">CO</span>",
        // EN: methoxymethane, <span class="chem">CH3OCH3</span>
        "methoxymethane, <span class=\"chem\">CH3OCH3</span>",
      ],
      hints: [
        // EN: Work out the Lewis formula of each species. How many pairs are shared between C and O?
        "각 화학종의 루이스 구조식을 생각해 봐요. C와 O 사이에 공유된 전자쌍은 몇 개인가요?",
        // EN: More shared pairs pull the two nuclei closer together.
        "공유 전자쌍이 많을수록 두 원자핵이 더 가까이 끌려요.",
        // EN: <span class="chem">CO</span> has 4 + 6 = 10 valence electrons. Both atoms need an octet.
        "<span class=\"chem\">CO</span>의 원자가 전자는 4 + 6 = 10개예요. 두 원자 모두 옥텟이 필요해요.",
      ],
      // EN: <p>Carbon monoxide has 10 valence electrons. The only way to give both atoms an octet is a <strong>triple bond</strong> with one lone pair on each atom.</p><p>Data booklet bond lengths: <span class="chem">C–O</span> 143 pm, <span class="chem">C=O</span> 122 pm, <span class="chem">C≡O</span> 113 pm.</p><p>More shared pairs give a stronger attraction between the nuclei and the shared electrons, so the bond is shorter.</p>
      solution: "<p>일산화 탄소의 원자가 전자는 10개예요. 두 원자 모두 옥텟을 이루는 유일한 방법은 각 원자에 비공유 전자쌍 1개씩이 있는 <strong>삼중 결합</strong>이에요.</p><p>데이터 부클릿의 결합 길이: <span class=\"chem\">C–O</span> 143 pm, <span class=\"chem\">C=O</span> 122 pm, <span class=\"chem\">C≡O</span> 113 pm.</p><p>공유 전자쌍이 많을수록 원자핵과 공유 전자 사이의 인력이 강해지므로 결합이 짧아져요.</p>",
      misconception: {
        // EN (option A): Methanol has a carbon–oxygen single bond (one shared pair). Single bonds are the longest. The booklet value is 143 pm.
        "0": "methanol에는 탄소–산소 단일 결합(공유 전자쌍 1개)이 있어요. 단일 결합이 가장 길어요. 부클릿 값은 143 pm이에요.",
        // EN (option B): <span class="chem">CO2</span> has double bonds (122 pm). They are shorter than single bonds, but one of the other species has three shared pairs.
        "1": "<span class=\"chem\">CO2</span>에는 이중 결합(122 pm)이 있어요. 단일 결합보다 짧지만, 다른 화학종 중에 공유 전자쌍이 3개인 것이 있어요.",
        // EN (option D): Methoxymethane has two carbon–oxygen single bonds. Single bonds are the longest. The booklet value is 143 pm.
        "3": "methoxymethane에는 탄소–산소 단일 결합이 2개 있어요. 단일 결합이 가장 길어요. 부클릿 값은 143 pm이에요.",
      },
    },

    // ── s2-2-q010 · short · exam · SL · Structure 2.2.2 · 2 marks
    "s2-2-q010": {
      // EN: <p>The data booklet gives these values.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Carbon–carbon bonds</caption><thead><tr><th scope="col">Bond</th><th scope="col">Length / pm</th><th scope="col">Bond enthalpy / <span class="unit">kJ mol-1</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">C–C</span></th><td>154</td><td>346</td></tr><tr><th scope="row"><span class="chem">C=C</span></th><td>134</td><td>614</td></tr></tbody></table></div><p>Explain why the <span class="chem">C=C</span> bond is shorter and stronger than the <span class="chem">C–C</span> bond.</p>
      stem: "<p>데이터 부클릿에 다음 값이 있어요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>탄소–탄소 결합</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">길이 / pm</th><th scope=\"col\">결합 엔탈피 / <span class=\"unit\">kJ mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">C–C</span></th><td>154</td><td>346</td></tr><tr><th scope=\"row\"><span class=\"chem\">C=C</span></th><td>134</td><td>614</td></tr></tbody></table></div><p><span class=\"chem\">C=C</span> 결합이 <span class=\"chem\">C–C</span> 결합보다 짧고 강한 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Start with the number of shared pairs in each bond.
        "각 결합의 공유 전자쌍 수부터 생각해 봐요.",
        // EN: A covalent bond is an attraction. What is attracted to what, and why is it stronger here?
        "공유 결합은 인력이에요. 무엇이 무엇을 끌어당기고, 여기서는 왜 더 강할까요?",
      ],
      // EN: <p>A double bond has two shared pairs of electrons. A single bond has one shared pair.</p><p>With more shared electrons between them, the two nuclei are attracted more strongly to the shared electrons. This pulls the nuclei closer together (shorter bond), and more energy is needed to separate them (stronger bond).</p>
      answer: "<p>이중 결합에는 공유 전자쌍이 2개 있어요. 단일 결합에는 공유 전자쌍이 1개 있어요.</p><p>두 원자핵 사이에 공유 전자가 더 많으면 두 원자핵이 공유 전자에 더 강하게 끌려요. 그래서 원자핵이 더 가까워지고(결합이 더 짧음), 떼어 내는 데 에너지가 더 많이 들어요(결합이 더 강함).</p>",
      markscheme: [
        // EN: The double bond has two shared pairs of electrons (four shared electrons) and the single bond has one shared pair. Accept: more shared electrons / greater electron density between the nuclei.
        "이중 결합에는 공유 전자쌍이 2개(공유 전자 4개), 단일 결합에는 공유 전자쌍이 1개 있다. 인정: 공유 전자가 더 많다 / 원자핵 사이의 전자 밀도가 더 크다.",
        // EN: Greater (electrostatic) attraction between the nuclei and the shared electrons (so the nuclei are pulled closer together and more energy is needed to break the bond).
        "원자핵과 공유 전자 사이의 (정전기적) 인력이 더 크다(그래서 원자핵이 더 가까이 끌리고 결합을 끊는 데 에너지가 더 많이 든다).",
      ],
    },

    // ── s2-2-q011 · mcq · challenge · SL · Structure 2.2.2 · 1 mark
    "s2-2-q011": {
      // EN: <p>The table shows data booklet values for three carbon–carbon bonds.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Carbon–carbon bonds</caption><thead><tr><th scope="col">Bond</th><th scope="col">Shared pairs</th><th scope="col">Length / pm</th><th scope="col">Bond enthalpy / <span class="unit">kJ mol-1</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">C–C</span></th><td>1</td><td>154</td><td>346</td></tr><tr><th scope="row"><span class="chem">C=C</span></th><td>2</td><td>134</td><td>614</td></tr><tr><th scope="row"><span class="chem">C≡C</span></th><td>3</td><td>120</td><td>839</td></tr></tbody></table></div><p>Which statement is supported by <strong>all</strong> the data?</p>
      stem: "<p>표는 탄소–탄소 결합 세 가지에 대한 데이터 부클릿 값이에요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>탄소–탄소 결합</caption><thead><tr><th scope=\"col\">결합</th><th scope=\"col\">공유 전자쌍</th><th scope=\"col\">길이 / pm</th><th scope=\"col\">결합 엔탈피 / <span class=\"unit\">kJ mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">C–C</span></th><td>1</td><td>154</td><td>346</td></tr><tr><th scope=\"row\"><span class=\"chem\">C=C</span></th><td>2</td><td>134</td><td>614</td></tr><tr><th scope=\"row\"><span class=\"chem\">C≡C</span></th><td>3</td><td>120</td><td>839</td></tr></tbody></table></div><p><strong>모든</strong> 자료가 뒷받침하는 설명은 무엇인가요?</p>",
      options: [
        // EN: Bond enthalpy is directly proportional to the number of shared pairs.
        "결합 엔탈피는 공유 전자쌍의 수에 정비례한다.",
        // EN: Each extra shared pair makes the bond shorter and stronger, but each extra pair adds less strength than the pair before it.
        "공유 전자쌍이 하나 늘 때마다 결합이 짧아지고 강해지지만, 늘어나는 세기는 앞의 전자쌍보다 작아진다.",
        // EN: Longer bonds are stronger bonds.
        "결합이 길수록 결합이 강하다.",
        // EN: The triple bond is the weakest bond because six shared electrons repel each other strongly.
        "공유 전자 6개가 서로 강하게 반발하므로 삼중 결합이 가장 약하다.",
      ],
      hints: [
        // EN: Bond enthalpy is the energy needed to break the bond. A bigger value means a stronger bond.
        "결합 엔탈피는 결합을 끊는 데 필요한 에너지예요. 값이 클수록 결합이 강해요.",
        // EN: Find the increase from single to double, and from double to triple.
        "단일에서 이중으로, 이중에서 삼중으로 늘어난 값을 구해 봐요.",
        // EN: For "directly proportional", doubling the pairs would double the bond enthalpy. Does it?
        "\"정비례\"라면 전자쌍이 2배가 될 때 결합 엔탈피도 2배가 되어야 해요. 그런가요?",
      ],
      // EN: <div class="worked__math">single → double: 614 − 346 = 268 <span class="unit">kJ mol-1</span></div><div class="worked__math">double → triple: 839 − 614 = 225 <span class="unit">kJ mol-1</span></div><p>The first shared pair is worth 346. The second adds 268. The third adds 225. So each extra pair adds less than the one before.</p><p>The lengths fall from 154 to 134 to 120 pm. More shared pairs attract the two nuclei more strongly, so the bond is shorter and stronger.</p>
      solution: "<div class=\"worked__math\">단일 → 이중: 614 − 346 = 268 <span class=\"unit\">kJ mol-1</span></div><div class=\"worked__math\">이중 → 삼중: 839 − 614 = 225 <span class=\"unit\">kJ mol-1</span></div><p>첫 번째 공유 전자쌍의 값은 346이에요. 두 번째는 268을 더하고, 세 번째는 225를 더해요. 그러니까 전자쌍이 하나 늘 때마다 더해지는 값이 앞보다 작아요.</p><p>길이는 154에서 134, 120 pm으로 줄어요. 공유 전자쌍이 많을수록 두 원자핵을 더 강하게 끌어당기므로 결합이 짧아지고 강해져요.</p>",
      misconception: {
        // EN (option A): Test it. Twice the single-bond value is 2 × 346 = 692, but the double bond is 614. Three times is 1038, but the triple bond is 839. The bond gets stronger, but not in proportion.
        "0": "확인해 봐요. 단일 결합 값의 2배는 2 × 346 = 692이지만 이중 결합은 614예요. 3배는 1038이지만 삼중 결합은 839예요. 결합은 강해지지만 비례하지는 않아요.",
        // EN (option C): Read the two columns together. As the length goes down (154, 134, 120 pm), the bond enthalpy goes up. Shorter bonds are stronger.
        "2": "두 열을 함께 읽어 봐요. 길이가 줄어들수록(154, 134, 120 pm) 결합 엔탈피는 커져요. 짧은 결합일수록 강해요.",
        // EN (option D): The triple bond has the largest bond enthalpy (839), so it is the strongest of the three. A larger bond enthalpy means more energy is needed to break the bond.
        "3": "삼중 결합의 결합 엔탈피(839)가 가장 크므로 셋 중 가장 강한 결합이에요. 결합 엔탈피가 클수록 결합을 끊는 데 에너지가 더 많이 필요해요.",
      },
    },

    // ── s2-2-q012 · mcq · foundation · SL · Structure 2.2.3 · 1 mark
    "s2-2-q012": {
      // EN: <p>What is a coordination bond?</p>
      stem: "<p>배위 결합 <span class=\"en-term\">(coordination bond)</span>이란 무엇인가요?</p>",
      options: [
        // EN: A covalent bond in which both electrons of the shared pair come from the same atom.
        "공유 전자쌍의 전자 2개가 모두 같은 원자에서 온 공유 결합.",
        // EN: A covalent bond in which each atom gives one electron to the shared pair.
        "각 원자가 공유 전자쌍에 전자를 1개씩 내놓은 공유 결합.",
        // EN: A bond formed when one atom transfers two electrons to another atom.
        "한 원자가 다른 원자에게 전자 2개를 옮겨서 생긴 결합.",
        // EN: A weak attraction between a lone pair on one molecule and a hydrogen atom on another molecule.
        "한 분자의 비공유 전자쌍과 다른 분자의 수소 원자 사이의 약한 인력.",
      ],
      hints: [
        // EN: A coordination bond is still a shared pair of electrons.
        "배위 결합도 공유 전자쌍이에요.",
        // EN: Think about where the two electrons come from.
        "전자 2개가 어디에서 왔는지 생각해 봐요.",
      ],
      // EN: <p>A coordination bond is a covalent bond in which <strong>both electrons of the shared pair originate from the same atom</strong>.</p><p>The atom that gives the pair must have a lone pair. The atom that accepts it must have space in its valence shell.</p>
      solution: "<p>배위 결합은 <strong>공유 전자쌍의 전자 2개가 모두 같은 원자에서 온</strong> 공유 결합이에요.</p><p>전자쌍을 내놓는 원자에는 비공유 전자쌍이 있어야 해요. 받는 원자에는 원자가 껍질에 빈자리가 있어야 해요.</p>",
      misconception: {
        // EN (option B): This is how most covalent bonds form. In a coordination bond, one atom gives both electrons.
        "1": "대부분의 공유 결합은 이렇게 만들어져요. 배위 결합에서는 한 원자가 전자 2개를 모두 내놓아요.",
        // EN (option C): Transfer of electrons makes ions. In a coordination bond the pair is shared between the two atoms, not transferred.
        "2": "전자가 이동하면 이온이 생겨요. 배위 결합에서는 전자쌍이 두 원자 사이에 공유될 뿐 이동하지 않아요.",
        // EN (option D): This describes a hydrogen bond, which is an intermolecular force. A coordination bond is a covalent bond inside a molecule or ion.
        "3": "이것은 수소 결합에 대한 설명이에요. 수소 결합은 분자 간 힘이에요. 배위 결합은 분자나 이온 안의 공유 결합이에요.",
      },
    },

    // ── s2-2-q013 · mcq · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q013": {
      // EN: <p>Ammonia reacts with a hydrogen ion to form the ammonium ion.</p><p><span class="chem">NH3 + H+ -> NH4+</span></p><p>Which statement about the new <span class="chem">N–H</span> bond is correct?</p>
      stem: "<p>암모니아는 수소 이온과 반응해 암모늄 이온이 돼요.</p><p><span class=\"chem\">NH3 + H+ -> NH4+</span></p><p>새로 생긴 <span class=\"chem\">N–H</span> 결합에 대한 설명으로 옳은 것은 무엇인가요?</p>",
      options: [
        // EN: The hydrogen ion provides both electrons for the bond.
        "수소 이온이 결합에 필요한 전자 2개를 모두 내놓는다.",
        // EN: The bond is ionic, because it forms between a molecule and an ion.
        "분자와 이온 사이에 생기므로 이온 결합이다.",
        // EN: Nitrogen provides both electrons for the bond. In the ion, all four <span class="chem">N–H</span> bonds are the same.
        "질소가 결합에 필요한 전자 2개를 모두 내놓는다. 이온 속 <span class=\"chem\">N–H</span> 결합 4개는 모두 같다.",
        // EN: Nitrogen provides both electrons for the bond. In the ion, this bond is longer and weaker than the other three.
        "질소가 결합에 필요한 전자 2개를 모두 내놓는다. 이온 속에서 이 결합은 나머지 3개보다 길고 약하다.",
      ],
      hints: [
        // EN: How many electrons does <span class="chem">H+</span> have?
        "<span class=\"chem\">H+</span>에는 전자가 몇 개 있나요?",
        // EN: Nitrogen in ammonia has one lone pair.
        "암모니아의 질소에는 비공유 전자쌍이 1개 있어요.",
        // EN: After the bond forms, can you tell which shared pair came from where?
        "결합이 생긴 뒤에도 어느 공유 전자쌍이 어디에서 왔는지 구별할 수 있을까요?",
      ],
      // EN: <p><span class="chem">H+</span> has no electrons. Nitrogen in <span class="chem">NH3</span> has a lone pair. Nitrogen shares this pair with <span class="chem">H+</span>, so both electrons in the new bond come from nitrogen. This is a coordination bond.</p><p>After it forms, the coordination bond is the same as the other three <span class="chem">N–H</span> bonds. The ion is a regular tetrahedron.</p>
      solution: "<p><span class=\"chem\">H+</span>에는 전자가 없어요. <span class=\"chem\">NH3</span>의 질소에는 비공유 전자쌍이 있어요. 질소가 이 전자쌍을 <span class=\"chem\">H+</span>와 공유하므로 새 결합의 전자 2개는 모두 질소에서 와요. 이것이 배위 결합이에요.</p><p>배위 결합은 생긴 뒤에는 나머지 <span class=\"chem\">N–H</span> 결합 3개와 똑같아요. 이온은 정사면체 모양이에요.</p>",
      misconception: {
        // EN (option A): A hydrogen ion, <span class="chem">H+</span>, has no electrons. It cannot give any. The pair comes from the lone pair on nitrogen.
        "0": "수소 이온 <span class=\"chem\">H+</span>에는 전자가 없어서 내놓을 수 없어요. 전자쌍은 질소의 비공유 전자쌍에서 와요.",
        // EN (option B): The pair of electrons is shared between N and H, so the bond is covalent. No electrons are transferred.
        "1": "전자쌍이 N과 H 사이에 공유되므로 공유 결합이에요. 전자는 이동하지 않아요.",
        // EN (option D): The first part is right. But once the bond has formed, a shared pair is a shared pair. All four <span class="chem">N–H</span> bonds have the same length and strength.
        "3": "앞부분은 맞아요. 하지만 결합이 생기고 나면 공유 전자쌍은 그냥 공유 전자쌍이에요. <span class=\"chem\">N–H</span> 결합 4개는 길이와 세기가 모두 같아요.",
      },
    },

    // ── s2-2-q014 · multi · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q014": {
      // EN: <p>Which of these species contain a coordination bond? Select all that apply.</p>
      stem: "<p>다음 중 배위 결합이 있는 화학종은 무엇인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: <span class="chem">NH4+</span>
        "<span class=\"chem\">NH4+</span>",
        // EN: <span class="chem">H3O+</span>
        "<span class=\"chem\">H3O+</span>",
        // EN: <span class="chem">CO</span>
        "<span class=\"chem\">CO</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
        // EN: <span class="chem">CH4</span>
        "<span class=\"chem\">CH4</span>",
      ],
      hints: [
        // EN: Look for an atom that needs more bonds than its unpaired electrons allow.
        "홀전자 수로 만들 수 있는 것보다 결합이 더 많이 필요한 원자를 찾아보세요.",
        // EN: <span class="chem">NH4+</span> and <span class="chem">H3O+</span> form when a molecule with a lone pair bonds to <span class="chem">H+</span>.
        "<span class=\"chem\">NH4+</span>와 <span class=\"chem\">H3O+</span>는 비공유 전자쌍이 있는 분자가 <span class=\"chem\">H+</span>와 결합해서 생겨요.",
        // EN: In <span class="chem">CO</span>, carbon has 4 valence electrons but takes part in a triple bond. Oxygen has 6. Count where the six shared electrons come from.
        "<span class=\"chem\">CO</span>에서 탄소는 원자가 전자가 4개인데 삼중 결합을 이뤄요. 산소는 6개예요. 공유 전자 6개가 각각 어디에서 오는지 세어 보세요.",
      ],
      // EN: <p><strong><span class="chem">NH4+</span></strong>: the lone pair on N of <span class="chem">NH3</span> bonds to <span class="chem">H+</span>.</p><p><strong><span class="chem">H3O+</span></strong>: a lone pair on O of <span class="chem">H2O</span> bonds to <span class="chem">H+</span>.</p><p><strong><span class="chem">CO</span></strong>: the triple bond has 6 shared electrons. Carbon gives 2 and oxygen gives 4. So one of the three shared pairs comes only from oxygen.</p><p>In <span class="chem">CO2</span> and <span class="chem">CH4</span>, each atom gives one electron to every shared pair.</p>
      solution: "<p><strong><span class=\"chem\">NH4+</span></strong>: <span class=\"chem\">NH3</span>의 N에 있는 비공유 전자쌍이 <span class=\"chem\">H+</span>와 결합해요.</p><p><strong><span class=\"chem\">H3O+</span></strong>: <span class=\"chem\">H2O</span>의 O에 있는 비공유 전자쌍 하나가 <span class=\"chem\">H+</span>와 결합해요.</p><p><strong><span class=\"chem\">CO</span></strong>: 삼중 결합에는 공유 전자가 6개 있어요. 탄소가 2개, 산소가 4개를 내놓아요. 그래서 공유 전자쌍 3개 중 하나는 산소에서만 와요.</p><p><span class=\"chem\">CO2</span>와 <span class=\"chem\">CH4</span>에서는 모든 공유 전자쌍에 각 원자가 전자를 1개씩 내놓아요.</p>",
      misconception: {
        // EN (option D): In <span class="chem">CO2</span>, carbon gives 2 electrons to each double bond and each oxygen gives 2. Every shared pair has one electron from each atom.
        "3": "<span class=\"chem\">CO2</span>에서 탄소는 각 이중 결합에 전자 2개를, 각 산소도 2개를 내놓아요. 모든 공유 전자쌍에 각 원자의 전자가 1개씩 들어 있어요.",
        // EN (option E): In <span class="chem">CH4</span>, carbon gives one electron and hydrogen gives one electron to each bond. No atom gives both.
        "4": "<span class=\"chem\">CH4</span>에서는 각 결합에 탄소가 전자 1개, 수소가 전자 1개를 내놓아요. 전자 2개를 모두 내놓는 원자는 없어요.",
      },
    },

    // ── s2-2-q015 · mcq · challenge · SL · Structure 2.2.3 · 1 mark
    "s2-2-q015": {
      // EN: <p>Ammonia, <span class="chem">NH3</span>, reacts with boron trifluoride, <span class="chem">BF3</span>, to form one molecule with a bond between nitrogen and boron: <span class="chem">H3N–BF3</span>.</p><p>Which row is correct for the product?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Atom that gives both electrons of the N–B bond</th><th scope="col">Arrangement of the four atoms around boron</th></tr></thead><tbody><tr><th scope="row">A</th><td>boron</td><td>tetrahedral</td></tr><tr><th scope="row">B</th><td>nitrogen</td><td>trigonal planar</td></tr><tr><th scope="row">C</th><td>nitrogen</td><td>tetrahedral</td></tr><tr><th scope="row">D</th><td>fluorine</td><td>trigonal pyramidal</td></tr></tbody></table></div>
      stem: "<p>암모니아 <span class=\"chem\">NH3</span>는 삼플루오린화 붕소 <span class=\"chem\">BF3</span>와 반응해 질소와 붕소 사이에 결합이 있는 분자 하나 <span class=\"chem\">H3N–BF3</span>가 돼요.</p><p>생성물에 대해 옳은 행은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>보기</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">N–B 결합의 전자 2개를 모두 내놓는 원자</th><th scope=\"col\">붕소 주위 원자 4개의 배치</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>붕소</td><td>정사면체형</td></tr><tr><th scope=\"row\">B</th><td>질소</td><td>평면 삼각형</td></tr><tr><th scope=\"row\">C</th><td>질소</td><td>정사면체형</td></tr><tr><th scope=\"row\">D</th><td>플루오린</td><td>삼각뿔형</td></tr></tbody></table></div>",
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
        // EN: Draw the Lewis formulas of <span class="chem">NH3</span> and <span class="chem">BF3</span>. Which atom has a lone pair? Which atom has fewer than 8 electrons?
        "<span class=\"chem\">NH3</span>와 <span class=\"chem\">BF3</span>의 루이스 구조식을 그려 보세요. 어느 원자에 비공유 전자쌍이 있나요? 어느 원자의 전자가 8개보다 적나요?",
        // EN: After the bond forms, count the electron domains around boron.
        "결합이 생긴 뒤 붕소 주위의 전자 영역을 세어 보세요.",
      ],
      // EN: <p>Nitrogen in <span class="chem">NH3</span> has a lone pair. Boron in <span class="chem">BF3</span> has only 3 pairs (6 electrons). Nitrogen shares its lone pair with boron. Both electrons come from nitrogen, so this is a coordination bond.</p><p>Boron now has <strong>four bonding pairs and no lone pairs</strong>. Four electron domains repel to a <strong>tetrahedral</strong> arrangement. Before the reaction, <span class="chem">BF3</span> was trigonal planar.</p>
      solution: "<p><span class=\"chem\">NH3</span>의 질소에는 비공유 전자쌍이 있어요. <span class=\"chem\">BF3</span>의 붕소에는 3쌍(전자 6개)뿐이에요. 질소가 비공유 전자쌍을 붕소와 공유해요. 전자 2개가 모두 질소에서 오므로 배위 결합이에요.</p><p>이제 붕소에는 <strong>공유 전자쌍 4개와 비공유 전자쌍 0개</strong>가 있어요. 전자 영역 4개는 서로 밀어내 <strong>정사면체형</strong> 배치가 돼요. 반응 전의 <span class=\"chem\">BF3</span>는 평면 삼각형이었어요.</p>",
      misconception: {
        // EN (option A): Boron in <span class="chem">BF3</span> has only 6 electrons in its valence shell and no lone pair. It accepts a pair. It cannot give one.
        "0": "<span class=\"chem\">BF3</span>의 붕소는 원자가 껍질에 전자가 6개뿐이고 비공유 전자쌍이 없어요. 전자쌍을 받을 수는 있지만 내놓을 수는 없어요.",
        // EN (option B): The donor atom is right. But boron now has four bonding pairs, not three. Four electron domains do not give a trigonal planar shape.
        "1": "전자쌍을 내놓는 원자는 맞아요. 하지만 이제 붕소의 공유 전자쌍은 3개가 아니라 4개예요. 전자 영역 4개로는 평면 삼각형이 되지 않아요.",
        // EN (option D): The new bond is between N and B, so fluorine is not the donor. Boron has four bonding pairs and no lone pair, so the shape around it is not trigonal pyramidal.
        "3": "새 결합은 N과 B 사이에 있으므로 플루오린은 전자쌍을 내놓는 원자가 아니에요. 붕소에는 공유 전자쌍 4개가 있고 비공유 전자쌍은 없으므로 붕소 주위의 모양은 삼각뿔형이 아니에요.",
      },
    },

    // ── s2-2-q016 · mcq · foundation · SL · Structure 2.2.4 · 1 mark
    "s2-2-q016": {
      // EN: <p>What is the molecular geometry (shape) of an ammonia molecule, <span class="chem">NH3</span>?</p>
      stem: "<p>암모니아 분자 <span class=\"chem\">NH3</span>의 분자 모양은 무엇인가요?</p>",
      options: [
        // EN: trigonal planar
        "평면 삼각형",
        // EN: tetrahedral
        "정사면체형",
        // EN: trigonal pyramidal
        "삼각뿔형",
        // EN: bent (V-shaped)
        "굽은 형(V자형)",
      ],
      hints: [
        // EN: Count the electron domains around nitrogen. Include the lone pair.
        "질소 주위의 전자 영역을 세어 보세요. 비공유 전자쌍도 포함해요.",
        // EN: The molecular geometry is the shape made by the atoms only.
        "분자 모양은 원자들만으로 이루어진 모양이에요.",
      ],
      // EN: <p>Nitrogen has 5 valence electrons. It forms three <span class="chem">N–H</span> bonds and keeps one lone pair. That is <strong>four electron domains</strong>.</p><p>Electron domain geometry: tetrahedral. One domain is a lone pair, so the atoms make a <strong>trigonal pyramidal</strong> shape.</p>
      solution: "<p>질소는 원자가 전자가 5개예요. <span class=\"chem\">N–H</span> 결합 3개를 만들고 비공유 전자쌍 1개를 남겨요. <strong>전자 영역은 4개</strong>예요.</p><p>전자 영역 배치: 정사면체형. 영역 하나가 비공유 전자쌍이므로 원자들은 <strong>삼각뿔형</strong>을 이뤄요.</p>",
      misconception: {
        // EN (option A): Trigonal planar needs three electron domains. Nitrogen in <span class="chem">NH3</span> has four: three bonding pairs and one lone pair. The lone pair pushes the three bonds down out of the plane.
        "0": "평면 삼각형이 되려면 전자 영역이 3개여야 해요. <span class=\"chem\">NH3</span>의 질소에는 공유 전자쌍 3개와 비공유 전자쌍 1개, 모두 4개가 있어요. 비공유 전자쌍이 결합 3개를 평면 아래로 밀어내요.",
        // EN (option B): Tetrahedral is the electron domain geometry. The molecular geometry describes only the positions of the atoms, and one of the four domains is a lone pair.
        "1": "정사면체형은 전자 영역 배치예요. 분자 모양은 원자의 위치만 나타내고, 영역 4개 중 하나는 비공유 전자쌍이에요.",
        // EN (option D): Bent needs two bonded atoms on the central atom. Nitrogen in <span class="chem">NH3</span> has three bonded atoms.
        "3": "굽은 형이 되려면 중심 원자에 결합한 원자가 2개여야 해요. <span class=\"chem\">NH3</span>의 질소에는 결합한 원자가 3개 있어요.",
      },
    },

    // ── s2-2-q017 · numeric · foundation · SL · Structure 2.2.4 · 1 mark
    "s2-2-q017": {
      // EN: <p>What is the <span class="chem">H–C–H</span> bond angle in a methane molecule, <span class="chem">CH4</span>?</p>
      stem: "<p>methane 분자 <span class=\"chem\">CH4</span>의 <span class=\"chem\">H–C–H</span> 결합각은 얼마인가요?</p>",
      hints: [
        // EN: Carbon has four bonding pairs and no lone pairs.
        "탄소에는 공유 전자쌍 4개가 있고 비공유 전자쌍은 없어요.",
        // EN: Four electron domains move as far apart as possible in three dimensions. The molecule is not flat.
        "전자 영역 4개는 3차원에서 서로 최대한 멀리 떨어져요. 분자는 평평하지 않아요.",
      ],
      // EN: <p>Carbon has four electron domains, all bonding pairs. They repel equally and point to the corners of a tetrahedron.</p><p>The tetrahedral angle is <strong>109.5°</strong>. It is not 90°, because the molecule is three-dimensional, not a flat cross.</p>
      solution: "<p>탄소에는 전자 영역이 4개 있고 모두 공유 전자쌍이에요. 서로 똑같이 밀어내서 정사면체의 꼭짓점을 향해요.</p><p>정사면체 결합각은 <strong>109.5°</strong>예요. 분자가 평평한 십자 모양이 아니라 입체이므로 90°가 아니에요.</p>",
    },

    // ── s2-2-q018 · mcq · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q018": {
      // EN: <p>A Lewis formula of the nitrite ion, <span class="chem">NO2-</span>, is shown. A Lewis formula does not show the shape.</p><p><svg viewBox="-22 -22 152 44" width="152" height="44" role="img" aria-label="Ion with charge 1 minus, drawn in a straight line. O double bond N, N single bond O. Two lone pairs on the first O, one lone pair on N, three lone pairs on the second O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="53.0" y1="0.0" x2="79.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><text x="88" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="91.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="84.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="102.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="102.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="84.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="91.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M102 -20H107V20H102" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="111" y="-12" font-size="13" fill="currentColor">−</text></svg></p><p>Which row gives the electron domain geometry and the molecular geometry around the nitrogen atom?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Electron domain geometry</th><th scope="col">Molecular geometry</th></tr></thead><tbody><tr><th scope="row">A</th><td>trigonal planar</td><td>trigonal planar</td></tr><tr><th scope="row">B</th><td>trigonal planar</td><td>bent (V-shaped)</td></tr><tr><th scope="row">C</th><td>tetrahedral</td><td>bent (V-shaped)</td></tr><tr><th scope="row">D</th><td>linear</td><td>linear</td></tr></tbody></table></div>
      stem: "<p>아질산 이온 <span class=\"chem\">NO2-</span>의 루이스 구조식은 다음과 같아요. 루이스 구조식은 모양을 나타내지 않아요.</p><p><svg viewBox=\"-22 -22 152 44\" width=\"152\" height=\"44\" role=\"img\" aria-label=\"전하 1−인 이온, 일직선으로 그림. O와 N은 이중 결합, N과 O는 단일 결합. 첫 번째 O에 비공유 전자쌍 2개, N에 1개, 두 번째 O에 3개\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"53.0\" y1=\"0.0\" x2=\"79.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"88\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"91.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"84.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"102.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"102.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"84.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"91.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M102 -20H107V20H102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"111\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">−</text></svg></p><p>질소 원자 주위의 전자 영역 배치와 분자 모양을 옳게 나타낸 행은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>보기</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">전자 영역 배치</th><th scope=\"col\">분자 모양</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>평면 삼각형</td><td>평면 삼각형</td></tr><tr><th scope=\"row\">B</th><td>평면 삼각형</td><td>굽은 형(V자형)</td></tr><tr><th scope=\"row\">C</th><td>정사면체형</td><td>굽은 형(V자형)</td></tr><tr><th scope=\"row\">D</th><td>직선형</td><td>직선형</td></tr></tbody></table></div>",
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
        // EN: Count the electron domains around N. A double bond counts as one domain. A lone pair counts as one domain.
        "N 주위의 전자 영역을 세어 보세요. 이중 결합은 영역 1개로 세요. 비공유 전자쌍도 영역 1개로 세요.",
        // EN: The electron domain geometry uses all the domains. The molecular geometry uses only the atoms.
        "전자 영역 배치는 모든 영역을 고려해요. 분자 모양은 원자만 고려해요.",
      ],
      // EN: <p>Around nitrogen there are <strong>three electron domains</strong>: one double bond, one single bond and one lone pair.</p><p>Three domains repel to a <strong>trigonal planar</strong> electron domain geometry.</p><p>Only two of the domains hold atoms, so the molecular geometry is <strong>bent (V-shaped)</strong>. The bond angle is a little less than 120° (about 115°), because the lone pair repels more than the bonding pairs.</p>
      solution: "<p>질소 주위에는 <strong>전자 영역이 3개</strong> 있어요. 이중 결합 1개, 단일 결합 1개, 비공유 전자쌍 1개예요.</p><p>영역 3개가 서로 밀어내 <strong>평면 삼각형</strong> 전자 영역 배치가 돼요.</p><p>원자가 있는 영역은 2개뿐이므로 분자 모양은 <strong>굽은 형(V자형)</strong>이에요. 비공유 전자쌍이 공유 전자쌍보다 더 세게 밀어내므로 결합각은 120°보다 조금 작아요(약 115°).</p>",
      misconception: {
        // EN (option A): The electron domain geometry is right. But the molecular geometry describes only the atoms. One of the three domains is a lone pair, so only two positions hold atoms.
        "0": "전자 영역 배치는 맞아요. 하지만 분자 모양은 원자만 나타내요. 영역 3개 중 하나가 비공유 전자쌍이므로 원자가 있는 자리는 2개뿐이에요.",
        // EN (option C): A double bond counts as <strong>one</strong> electron domain. Nitrogen has three domains (double bond, single bond, lone pair), not four.
        "2": "이중 결합은 전자 영역 <strong>1개</strong>로 세요. 질소의 영역은 4개가 아니라 3개(이중 결합, 단일 결합, 비공유 전자쌍)예요.",
        // EN (option D): This ignores the lone pair on nitrogen. The lone pair is an electron domain. It repels the two bonds, so the ion is not linear.
        "3": "질소의 비공유 전자쌍을 무시했어요. 비공유 전자쌍도 전자 영역이에요. 비공유 전자쌍이 두 결합을 밀어내므로 이온은 직선형이 아니에요.",
      },
    },

    // ── s2-2-q019 · order · exam · SL · Structure 2.2.4 · 2 marks
    "s2-2-q019": {
      // EN: <p>Put these molecules in order of bond angle around the central atom. Put the <strong>smallest</strong> bond angle first.</p>
      stem: "<p>이 분자들을 중심 원자 주위의 결합각 순서대로 나열하세요. 결합각이 <strong>가장 작은</strong> 것을 처음에 놓으세요.</p>",
      options: [
        // EN: <span class="chem">H2O</span>
        "<span class=\"chem\">H2O</span>",
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">CH4</span>
        "<span class=\"chem\">CH4</span>",
        // EN: <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: Count the electron domains around each central atom: 2, 3 or 4.
        "각 중심 원자 주위의 전자 영역을 세어 보세요. 2개, 3개 또는 4개예요.",
        // EN: <span class="chem">H2O</span>, <span class="chem">NH3</span> and <span class="chem">CH4</span> all have four domains. They differ in the number of lone pairs.
        "<span class=\"chem\">H2O</span>, <span class=\"chem\">NH3</span>, <span class=\"chem\">CH4</span>는 모두 영역이 4개예요. 비공유 전자쌍의 수가 달라요.",
        // EN: Lone pairs repel more than bonding pairs, so they squeeze the bond angle.
        "비공유 전자쌍은 공유 전자쌍보다 더 세게 밀어내므로 결합각을 좁혀요.",
      ],
      // EN: <p><span class="chem">H2O</span>: 4 domains, 2 lone pairs, about 104.5°.</p><p><span class="chem">NH3</span>: 4 domains, 1 lone pair, about 107°.</p><p><span class="chem">CH4</span>: 4 domains, no lone pairs, 109.5°.</p><p><span class="chem">BF3</span>: 3 domains, no lone pairs, 120°.</p><p><span class="chem">CO2</span>: 2 domains (each double bond is one domain), 180°.</p>
      solution: "<p><span class=\"chem\">H2O</span>: 영역 4개, 비공유 전자쌍 2개, 약 104.5°.</p><p><span class=\"chem\">NH3</span>: 영역 4개, 비공유 전자쌍 1개, 약 107°.</p><p><span class=\"chem\">CH4</span>: 영역 4개, 비공유 전자쌍 없음, 109.5°.</p><p><span class=\"chem\">BF3</span>: 영역 3개, 비공유 전자쌍 없음, 120°.</p><p><span class=\"chem\">CO2</span>: 영역 2개(이중 결합 하나가 영역 1개), 180°.</p>",
    },

    // ── s2-2-q020 · short · exam · SL · Structure 2.2.4 · 2 marks
    "s2-2-q020": {
      // EN: <p>The <span class="chem">H–C–H</span> bond angle in methane, <span class="chem">CH4</span>, is 109.5°. The <span class="chem">H–N–H</span> bond angle in ammonia, <span class="chem">NH3</span>, is about 107°.</p><p>Explain why the bond angle in ammonia is smaller.</p>
      stem: "<p>methane <span class=\"chem\">CH4</span>의 <span class=\"chem\">H–C–H</span> 결합각은 109.5°예요. 암모니아 <span class=\"chem\">NH3</span>의 <span class=\"chem\">H–N–H</span> 결합각은 약 107°예요.</p><p>암모니아의 결합각이 더 작은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare the electron domains around C and around N.
        "C 주위와 N 주위의 전자 영역을 비교해 봐요.",
        // EN: Do all electron domains repel equally?
        "모든 전자 영역이 똑같이 밀어낼까요?",
      ],
      // EN: <p>Both central atoms have four electron domains, so both have a tetrahedral electron domain geometry. In methane all four domains are bonding pairs. In ammonia there are three bonding pairs and one lone pair (non-bonding pair).</p><p>A lone pair repels more strongly than a bonding pair. It pushes the three bonding pairs closer together, so the angle is less than 109.5°.</p>
      answer: "<p>두 중심 원자 모두 전자 영역이 4개이므로 둘 다 정사면체형 전자 영역 배치를 가져요. methane에서는 영역 4개가 모두 공유 전자쌍이에요. 암모니아에는 공유 전자쌍 3개와 비공유 전자쌍(결합하지 않은 전자쌍) 1개가 있어요.</p><p>비공유 전자쌍은 공유 전자쌍보다 더 세게 밀어내요. 공유 전자쌍 3개를 더 가깝게 밀어 붙이므로 결합각이 109.5°보다 작아져요.</p>",
      markscheme: [
        // EN: Nitrogen in ammonia has one lone (non-bonding) pair and three bonding pairs, but carbon in methane has four bonding pairs and no lone pair. Accept: both have four electron domains but ammonia has a lone pair.
        "암모니아의 질소에는 비공유 전자쌍 1개와 공유 전자쌍 3개가 있지만, methane의 탄소에는 공유 전자쌍 4개가 있고 비공유 전자쌍은 없다. 인정: 둘 다 전자 영역이 4개이지만 암모니아에는 비공유 전자쌍이 있다.",
        // EN: Lone pairs repel more than bonding pairs (so the bonding pairs are pushed closer together).
        "비공유 전자쌍은 공유 전자쌍보다 더 세게 밀어낸다(그래서 공유 전자쌍이 서로 더 가깝게 밀린다).",
      ],
    },

    // ── s2-2-q021 · mcq · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q021": {
      // EN: <p>Methanol has the structural formula <span class="chem">CH3OH</span>. Which row gives the geometry of the atoms around the carbon atom and around the oxygen atom?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Around carbon</th><th scope="col">Around oxygen</th></tr></thead><tbody><tr><th scope="row">A</th><td>tetrahedral</td><td>linear</td></tr><tr><th scope="row">B</th><td>tetrahedral</td><td>tetrahedral</td></tr><tr><th scope="row">C</th><td>trigonal pyramidal</td><td>bent (V-shaped)</td></tr><tr><th scope="row">D</th><td>tetrahedral</td><td>bent (V-shaped)</td></tr></tbody></table></div>
      stem: "<p>methanol의 구조식은 <span class=\"chem\">CH3OH</span>예요. 탄소 원자 주위와 산소 원자 주위의 원자 배치를 옳게 나타낸 행은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>보기</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">탄소 주위</th><th scope=\"col\">산소 주위</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>정사면체형</td><td>직선형</td></tr><tr><th scope=\"row\">B</th><td>정사면체형</td><td>정사면체형</td></tr><tr><th scope=\"row\">C</th><td>삼각뿔형</td><td>굽은 형(V자형)</td></tr><tr><th scope=\"row\">D</th><td>정사면체형</td><td>굽은 형(V자형)</td></tr></tbody></table></div>",
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
        // EN: Treat each atom in turn as a "central atom".
        "각 원자를 차례로 \"중심 원자\"로 생각해 봐요.",
        // EN: Carbon: four bonding pairs. Oxygen: two bonding pairs and two lone pairs.
        "탄소: 공유 전자쌍 4개. 산소: 공유 전자쌍 2개와 비공유 전자쌍 2개.",
      ],
      // EN: <p><strong>Carbon</strong> has four bonding pairs (three to H, one to O) and no lone pairs: <strong>tetrahedral</strong>, about 109.5°.</p><p><strong>Oxygen</strong> has four electron domains: two bonding pairs (to C and to H) and two lone pairs. The two atoms make a <strong>bent</strong> shape, like water, with an angle less than 109.5°.</p>
      solution: "<p><strong>탄소</strong>에는 공유 전자쌍 4개(H와 3개, O와 1개)가 있고 비공유 전자쌍은 없어요: <strong>정사면체형</strong>, 약 109.5°.</p><p><strong>산소</strong>에는 전자 영역이 4개 있어요. 공유 전자쌍 2개(C와, H와)와 비공유 전자쌍 2개예요. 두 원자는 물처럼 <strong>굽은 형</strong>을 이루고, 결합각은 109.5°보다 작아요.</p>",
      misconception: {
        // EN (option A): Oxygen has two bonding pairs <strong>and two lone pairs</strong>. The lone pairs repel the bonds, so <span class="chem">C–O–H</span> is not a straight line.
        "0": "산소에는 공유 전자쌍 2개<strong>와 비공유 전자쌍 2개</strong>가 있어요. 비공유 전자쌍이 결합을 밀어내므로 <span class=\"chem\">C–O–H</span>는 일직선이 아니에요.",
        // EN (option B): Tetrahedral is the electron domain geometry around oxygen. The question asks for the geometry of the atoms. Only two atoms are bonded to oxygen.
        "1": "정사면체형은 산소 주위의 전자 영역 배치예요. 문제는 원자의 배치를 묻고 있어요. 산소에 결합한 원자는 2개뿐이에요.",
        // EN (option C): Carbon is bonded to four atoms (three H and one O) and has no lone pair. Trigonal pyramidal needs three atoms and one lone pair.
        "2": "탄소는 원자 4개(H 3개와 O 1개)와 결합하고 비공유 전자쌍이 없어요. 삼각뿔형이 되려면 원자 3개와 비공유 전자쌍 1개가 필요해요.",
      },
    },

    // ── s2-2-q022 · mcq · challenge · SL · Structure 2.2.4 · 1 mark
    "s2-2-q022": {
      // EN: <p>In methanal, <span class="chem">H2C=O</span>, the carbon atom is bonded to two hydrogen atoms and, by a double bond, to one oxygen atom.</p><p>Which is the best prediction of the <span class="chem">H–C–H</span> bond angle?</p>
      stem: "<p>methanal <span class=\"chem\">H2C=O</span>에서 탄소 원자는 수소 원자 2개와 결합하고, 산소 원자 1개와 이중 결합으로 연결되어 있어요.</p><p><span class=\"chem\">H–C–H</span> 결합각을 가장 잘 예측한 것은 무엇인가요?</p>",
      options: [
        // EN: Exactly 120°, because there are three electron domains and no lone pairs on carbon.
        "탄소에 전자 영역이 3개이고 비공유 전자쌍이 없으므로 정확히 120°이다.",
        // EN: Slightly less than 120°, because the double bond repels more than the single bonds.
        "이중 결합이 단일 결합보다 더 세게 밀어내므로 120°보다 조금 작다.",
        // EN: About 109.5°, because carbon forms four bonds.
        "탄소가 결합을 4개 만들므로 약 109.5°이다.",
        // EN: Slightly more than 120°, because the double bond takes up less space than a single bond.
        "이중 결합이 단일 결합보다 공간을 덜 차지하므로 120°보다 조금 크다.",
      ],
      hints: [
        // EN: How many electron domains are around carbon? A double bond counts as one.
        "탄소 주위에 전자 영역이 몇 개 있나요? 이중 결합은 1개로 세요.",
        // EN: A double bond has four electrons in it. Compare its repulsion with that of a single bond.
        "이중 결합에는 전자가 4개 있어요. 단일 결합과 반발력을 비교해 봐요.",
      ],
      // EN: <p>Carbon has <strong>three electron domains</strong> (two single bonds, one double bond). The shape is trigonal planar with angles near 120°.</p><p>The double bond has greater electron density, so it repels the two <span class="chem">C–H</span> bonding pairs more strongly. They are pushed together. The <span class="chem">H–C–H</span> angle is <strong>slightly less than 120°</strong> (the measured value is about 116°).</p>
      solution: "<p>탄소에는 <strong>전자 영역이 3개</strong>(단일 결합 2개, 이중 결합 1개) 있어요. 모양은 평면 삼각형이고 결합각은 120° 가까이 돼요.</p><p>이중 결합은 전자 밀도가 더 크므로 <span class=\"chem\">C–H</span> 공유 전자쌍 2개를 더 세게 밀어내요. 그래서 두 결합이 서로 가까워져요. <span class=\"chem\">H–C–H</span> 결합각은 <strong>120°보다 조금 작아요</strong>(측정값은 약 116°).</p>",
      misconception: {
        // EN (option A): Three domains do give angles near 120°. But the three domains are not the same. The double bond has more electron density than a single bond, so the repulsions are not equal.
        "0": "영역이 3개이면 결합각은 120° 가까이 돼요. 하지만 세 영역이 똑같지 않아요. 이중 결합은 단일 결합보다 전자 밀도가 크므로 반발력이 같지 않아요.",
        // EN (option C): Count electron domains, not bonds. The double bond is one domain, so carbon has three domains, not four.
        "2": "결합이 아니라 전자 영역을 세어야 해요. 이중 결합은 영역 1개이므로 탄소의 영역은 4개가 아니라 3개예요.",
        // EN (option D): A double bond holds four electrons, so it has more electron density than a single bond. It repels more, not less.
        "3": "이중 결합에는 전자가 4개 있으므로 단일 결합보다 전자 밀도가 커요. 덜 밀어내는 것이 아니라 더 세게 밀어내요.",
      },
    },

    // ── s2-2-q023 · mcq · foundation · SL · Structure 2.2.5 · 1 mark
    "s2-2-q023": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, Cl 3.2.</p><p>Which bond is the most polar?</p>
      stem: "<p>데이터 부클릿의 전기 음성도 값: H 2.2, C 2.6, N 3.0, O 3.4, Cl 3.2.</p><p>극성이 가장 큰 결합은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">C–H</span>
        "<span class=\"chem\">C–H</span>",
        // EN: <span class="chem">N–H</span>
        "<span class=\"chem\">N–H</span>",
        // EN: <span class="chem">O–H</span>
        "<span class=\"chem\">O–H</span>",
        // EN: <span class="chem">H–Cl</span>
        "<span class=\"chem\">H–Cl</span>",
      ],
      hints: [
        // EN: Bond polarity comes from the difference in electronegativity of the two atoms.
        "결합의 극성은 두 원자의 전기 음성도 차이에서 생겨요.",
        // EN: Subtract the two values for each bond. The largest difference is the most polar bond.
        "결합마다 두 값을 빼 보세요. 차이가 가장 큰 것이 극성이 가장 큰 결합이에요.",
      ],
      // EN: <div class="worked__math">C–H: 2.6 − 2.2 = 0.4</div><div class="worked__math">N–H: 3.0 − 2.2 = 0.8</div><div class="worked__math">O–H: 3.4 − 2.2 = 1.2</div><div class="worked__math">H–Cl: 3.2 − 2.2 = 1.0</div><p>The largest difference is for <strong><span class="chem">O–H</span></strong>, so it is the most polar bond.</p>
      solution: "<div class=\"worked__math\">C–H: 2.6 − 2.2 = 0.4</div><div class=\"worked__math\">N–H: 3.0 − 2.2 = 0.8</div><div class=\"worked__math\">O–H: 3.4 − 2.2 = 1.2</div><div class=\"worked__math\">H–Cl: 3.2 − 2.2 = 1.0</div><p>차이가 가장 큰 것은 <strong><span class=\"chem\">O–H</span></strong>이므로 극성이 가장 큰 결합이에요.</p>",
      misconception: {
        // EN (option A): The difference for <span class="chem">C–H</span> is 2.6 − 2.2 = 0.4. This is the smallest difference of the four, so it is the least polar bond here.
        "0": "<span class=\"chem\">C–H</span>의 차이는 2.6 − 2.2 = 0.4예요. 넷 중 차이가 가장 작으므로 여기서는 극성이 가장 작은 결합이에요.",
        // EN (option B): The difference for <span class="chem">N–H</span> is 3.0 − 2.2 = 0.8. One of the other bonds has a larger difference.
        "1": "<span class=\"chem\">N–H</span>의 차이는 3.0 − 2.2 = 0.8이에요. 다른 결합 중에 차이가 더 큰 것이 있어요.",
        // EN (option D): The difference for <span class="chem">H–Cl</span> is 3.2 − 2.2 = 1.0. This is large, but one of the other bonds has a larger difference.
        "3": "<span class=\"chem\">H–Cl</span>의 차이는 3.2 − 2.2 = 1.0이에요. 큰 값이지만 다른 결합 중에 차이가 더 큰 것이 있어요.",
      },
    },

    // ── s2-2-q024 · numeric · foundation · SL · Structure 2.2.5 · 1 mark
    "s2-2-q024": {
      // EN: <p>The data booklet gives the electronegativity of carbon as 2.6 and of chlorine as 3.2.</p><p>Calculate the electronegativity difference for a <span class="chem">C–Cl</span> bond.</p>
      stem: "<p>데이터 부클릿에 따르면 탄소의 전기 음성도는 2.6, 염소는 3.2예요.</p><p><span class=\"chem\">C–Cl</span> 결합의 전기 음성도 차이를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "큰 값에서 작은 값을 빼세요.",
      ],
      // EN: <div class="worked__math">difference = 3.2 − 2.6 = 0.6</div><p>Chlorine has the higher electronegativity, so it attracts the shared pair more strongly. Chlorine is δ− and carbon is δ+.</p><p>Electronegativity has no unit.</p>
      solution: "<div class=\"worked__math\">차이 = 3.2 − 2.6 = 0.6</div><p>염소의 전기 음성도가 더 크므로 공유 전자쌍을 더 세게 끌어당겨요. 염소는 δ−, 탄소는 δ+예요.</p><p>전기 음성도에는 단위가 없어요.</p>",
    },

    // ── s2-2-q025 · mcq · exam · SL · Structure 2.2.5 · 1 mark
    "s2-2-q025": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, Cl 3.2.</p><p>Which row shows the correct partial charges?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Bond</th><th scope="col">δ+ atom</th><th scope="col">δ− atom</th></tr></thead><tbody><tr><th scope="row">A</th><td><span class="chem">N–H</span></td><td>N</td><td>H</td></tr><tr><th scope="row">B</th><td><span class="chem">C–Cl</span></td><td>C</td><td>Cl</td></tr><tr><th scope="row">C</th><td><span class="chem">O–F</span></td><td>F</td><td>O</td></tr><tr><th scope="row">D</th><td><span class="chem">C–H</span></td><td>C</td><td>H</td></tr></tbody></table></div>
      stem: "<p>데이터 부클릿의 전기 음성도 값: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, Cl 3.2.</p><p>부분 전하를 옳게 나타낸 행은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>보기</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">결합</th><th scope=\"col\">δ+ 원자</th><th scope=\"col\">δ− 원자</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td><span class=\"chem\">N–H</span></td><td>N</td><td>H</td></tr><tr><th scope=\"row\">B</th><td><span class=\"chem\">C–Cl</span></td><td>C</td><td>Cl</td></tr><tr><th scope=\"row\">C</th><td><span class=\"chem\">O–F</span></td><td>F</td><td>O</td></tr><tr><th scope=\"row\">D</th><td><span class=\"chem\">C–H</span></td><td>C</td><td>H</td></tr></tbody></table></div>",
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
        // EN: The more electronegative atom attracts the shared pair more strongly.
        "전기 음성도가 더 큰 원자가 공유 전자쌍을 더 세게 끌어당겨요.",
        // EN: The atom that pulls the electrons closer becomes slightly negative, δ−.
        "전자를 더 가까이 끌어당기는 원자는 약간 음전하를 띠어요(δ−).",
      ],
      // EN: <p>In each bond, the atom with the <strong>higher</strong> electronegativity is δ−.</p><p><span class="chem">C–Cl</span>: Cl (3.2) is higher than C (2.6), so C is δ+ and Cl is δ−. Row B is correct.</p><p>The correct charges for the other rows: N δ− and H δ+; F δ− and O δ+; C δ− and H δ+.</p>
      solution: "<p>각 결합에서 전기 음성도가 <strong>더 큰</strong> 원자가 δ−예요.</p><p><span class=\"chem\">C–Cl</span>: Cl(3.2)이 C(2.6)보다 크므로 C는 δ+, Cl은 δ−예요. B 행이 옳아요.</p><p>나머지 행의 올바른 전하: N δ−와 H δ+, F δ−와 O δ+, C δ−와 H δ+.</p>",
      misconception: {
        // EN (option A): Nitrogen (3.0) is more electronegative than hydrogen (2.2). Nitrogen pulls the shared pair closer, so nitrogen is δ−.
        "0": "질소(3.0)는 수소(2.2)보다 전기 음성도가 커요. 질소가 공유 전자쌍을 더 가까이 끌어당기므로 질소가 δ−예요.",
        // EN (option C): Fluorine (4.0) is more electronegative than oxygen (3.4). In this bond oxygen is the δ+ atom, even though oxygen is usually δ−.
        "2": "플루오린(4.0)은 산소(3.4)보다 전기 음성도가 커요. 산소는 보통 δ−이지만 이 결합에서는 δ+ 원자예요.",
        // EN (option D): With the booklet values, carbon (2.6) is more electronegative than hydrogen (2.2). Carbon is δ− and hydrogen is δ+.
        "3": "부클릿 값으로 보면 탄소(2.6)는 수소(2.2)보다 전기 음성도가 커요. 탄소가 δ−, 수소가 δ+예요.",
      },
    },

    // ── s2-2-q026 · mcq · challenge · SL · Structure 2.2.5 · 1 mark
    "s2-2-q026": {
      // EN: <p>A student writes: "A covalent bond between atoms of two different elements is always polar."</p><p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, S 2.6, Cl 3.2.</p><p>Which bond shows that the student is <strong>not</strong> always right?</p>
      stem: "<p>한 학생이 이렇게 썼어요: \"서로 다른 두 원소의 원자 사이의 공유 결합은 항상 극성이다.\"</p><p>데이터 부클릿의 전기 음성도 값: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, S 2.6, Cl 3.2.</p><p>학생의 말이 항상 옳지는 <strong>않다는</strong> 것을 보여 주는 결합은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">C–H</span>
        "<span class=\"chem\">C–H</span>",
        // EN: <span class="chem">N–Cl</span>
        "<span class=\"chem\">N–Cl</span>",
        // EN: <span class="chem">C–S</span>
        "<span class=\"chem\">C–S</span>",
        // EN: <span class="chem">O–F</span>
        "<span class=\"chem\">O–F</span>",
      ],
      hints: [
        // EN: A bond is polar when the two atoms have different electronegativities.
        "두 원자의 전기 음성도가 다르면 결합은 극성이에요.",
        // EN: Calculate the difference for each bond. Is any difference zero?
        "결합마다 차이를 계산해 보세요. 차이가 0인 것이 있나요?",
      ],
      // EN: <div class="worked__math">C–H: 2.6 − 2.2 = 0.4</div><div class="worked__math">N–Cl: 3.2 − 3.0 = 0.2</div><div class="worked__math">C–S: 2.6 − 2.6 = 0.0</div><div class="worked__math">O–F: 4.0 − 3.4 = 0.6</div><p>Carbon and sulfur have the same booklet value. The shared pair is attracted equally by both atoms, so the model predicts a <strong>non-polar</strong> <span class="chem">C–S</span> bond. Polarity depends on the electronegativity difference, not on the atoms being different elements.</p>
      solution: "<div class=\"worked__math\">C–H: 2.6 − 2.2 = 0.4</div><div class=\"worked__math\">N–Cl: 3.2 − 3.0 = 0.2</div><div class=\"worked__math\">C–S: 2.6 − 2.6 = 0.0</div><div class=\"worked__math\">O–F: 4.0 − 3.4 = 0.6</div><p>탄소와 황은 부클릿 값이 같아요. 두 원자가 공유 전자쌍을 똑같이 끌어당기므로 이 모형으로는 <span class=\"chem\">C–S</span> 결합이 <strong>무극성</strong>이라고 예측해요. 극성은 원소가 다른지가 아니라 전기 음성도 차이로 정해져요.</p>",
      misconception: {
        // EN (option A): The difference is 2.6 − 2.2 = 0.4. This is small, but it is not zero. The bond is slightly polar.
        "0": "차이는 2.6 − 2.2 = 0.4예요. 작지만 0은 아니에요. 이 결합은 약한 극성이에요.",
        // EN (option B): The difference is 3.2 − 3.0 = 0.2. This is very small, but it is not zero. Look for a pair of atoms with the same value.
        "1": "차이는 3.2 − 3.0 = 0.2예요. 아주 작지만 0은 아니에요. 값이 같은 두 원자를 찾아보세요.",
        // EN (option D): Both atoms are very electronegative, but what matters is the <strong>difference</strong>: 4.0 − 3.4 = 0.6. The bond is polar.
        "3": "두 원자 모두 전기 음성도가 매우 크지만, 중요한 것은 <strong>차이</strong>예요: 4.0 − 3.4 = 0.6. 이 결합은 극성이에요.",
      },
    },

    // ── s2-2-q027 · mcq · foundation · SL · Structure 2.2.6 · 1 mark
    "s2-2-q027": {
      // EN: <p>Which molecule is non-polar?</p>
      stem: "<p>무극성 분자는 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">H2O</span>
        "<span class=\"chem\">H2O</span>",
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">HCl</span>
        "<span class=\"chem\">HCl</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: All four molecules have polar bonds. The shape decides if the bond dipoles cancel.
        "네 분자 모두 극성 결합이 있어요. 결합 쌍극자가 상쇄되는지는 모양이 결정해요.",
        // EN: Which molecule is linear with two identical bonds?
        "똑같은 결합 2개가 있는 직선형 분자는 무엇인가요?",
      ],
      // EN: <p><span class="chem">CO2</span> is <strong>linear</strong>: <span class="chem">O=C=O</span>. The two <span class="chem">C=O</span> bond dipoles are equal in size and point in opposite directions. They cancel, so the molecule has no net dipole.</p><p>A molecule can have polar bonds and still be non-polar.</p>
      solution: "<p><span class=\"chem\">CO2</span>는 <strong>직선형</strong>이에요: <span class=\"chem\">O=C=O</span>. 두 <span class=\"chem\">C=O</span> 결합 쌍극자는 크기가 같고 서로 반대 방향을 향해요. 서로 상쇄되므로 분자 전체의 쌍극자가 없어요.</p><p>극성 결합이 있어도 분자는 무극성일 수 있어요.</p>",
      misconception: {
        // EN (option A): Water is bent. The two <span class="chem">O–H</span> bond dipoles point in different directions and do not cancel. Water is polar.
        "0": "물은 굽은 형이에요. 두 <span class=\"chem\">O–H</span> 결합 쌍극자는 서로 다른 방향을 향해 상쇄되지 않아요. 물은 극성이에요.",
        // EN (option B): Ammonia is trigonal pyramidal. The three <span class="chem">N–H</span> bond dipoles do not cancel. Ammonia is polar.
        "1": "암모니아는 삼각뿔형이에요. 세 <span class=\"chem\">N–H</span> 결합 쌍극자는 상쇄되지 않아요. 암모니아는 극성이에요.",
        // EN (option C): <span class="chem">HCl</span> has one polar bond and nothing to cancel it. It is polar.
        "2": "<span class=\"chem\">HCl</span>에는 극성 결합이 1개 있고 이를 상쇄할 것이 없어요. 극성이에요.",
      },
    },

    // ── s2-2-q028 · multi · exam · SL · Structure 2.2.6 · 1 mark
    "s2-2-q028": {
      // EN: <p>Which of these molecules are polar (have a net dipole)? Select all that apply.</p>
      stem: "<p>다음 중 극성 분자(분자 전체의 쌍극자가 있는 분자)는 무엇인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: <span class="chem">CCl4</span>
        "<span class=\"chem\">CCl4</span>",
        // EN: <span class="chem">CHCl3</span>
        "<span class=\"chem\">CHCl3</span>",
        // EN: <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>",
        // EN: <span class="chem">NF3</span>
        "<span class=\"chem\">NF3</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: Find the shape of each molecule first.
        "먼저 각 분자의 모양을 찾아보세요.",
        // EN: Bond dipoles cancel when identical bonds are arranged symmetrically around the central atom with no lone pairs.
        "중심 원자에 비공유 전자쌍이 없고 똑같은 결합들이 대칭으로 배치되어 있으면 결합 쌍극자가 상쇄돼요.",
        // EN: Check each central atom for lone pairs, and check if all the outer atoms are the same.
        "각 중심 원자에 비공유 전자쌍이 있는지, 바깥쪽 원자가 모두 같은지 확인하세요.",
      ],
      // EN: <p><strong><span class="chem">CHCl3</span></strong>: tetrahedral, but the four bonds are not all the same (one <span class="chem">C–H</span>, three <span class="chem">C–Cl</span>). The bond dipoles do not cancel. Polar.</p><p><strong><span class="chem">NF3</span></strong>: nitrogen has a lone pair, so the shape is trigonal pyramidal. The three <span class="chem">N–F</span> bond dipoles do not cancel. Polar.</p><p><span class="chem">CCl4</span> (tetrahedral), <span class="chem">BF3</span> (trigonal planar) and <span class="chem">CO2</span> (linear) are symmetrical, so their bond dipoles cancel.</p>
      solution: "<p><strong><span class=\"chem\">CHCl3</span></strong>: 정사면체형이지만 결합 4개가 모두 같지는 않아요(<span class=\"chem\">C–H</span> 1개, <span class=\"chem\">C–Cl</span> 3개). 결합 쌍극자가 상쇄되지 않아요. 극성.</p><p><strong><span class=\"chem\">NF3</span></strong>: 질소에 비공유 전자쌍이 있으므로 모양이 삼각뿔형이에요. 세 <span class=\"chem\">N–F</span> 결합 쌍극자가 상쇄되지 않아요. 극성.</p><p><span class=\"chem\">CCl4</span>(정사면체형), <span class=\"chem\">BF3</span>(평면 삼각형), <span class=\"chem\">CO2</span>(직선형)는 대칭이므로 결합 쌍극자가 상쇄돼요.</p>",
      misconception: {
        // EN (option A): <span class="chem">CCl4</span> is tetrahedral with four identical <span class="chem">C–Cl</span> bonds. The four bond dipoles cancel. Polar bonds do not always make a polar molecule.
        "0": "<span class=\"chem\">CCl4</span>는 똑같은 <span class=\"chem\">C–Cl</span> 결합 4개가 있는 정사면체형이에요. 결합 쌍극자 4개가 상쇄돼요. 극성 결합이 있다고 항상 극성 분자가 되는 것은 아니에요.",
        // EN (option C): <span class="chem">BF3</span> is trigonal planar with three identical <span class="chem">B–F</span> bonds at 120°. The three bond dipoles cancel.
        "2": "<span class=\"chem\">BF3</span>는 똑같은 <span class=\"chem\">B–F</span> 결합 3개가 120°로 배치된 평면 삼각형이에요. 결합 쌍극자 3개가 상쇄돼요.",
        // EN (option E): <span class="chem">CO2</span> is linear. The two equal <span class="chem">C=O</span> bond dipoles point in opposite directions and cancel.
        "4": "<span class=\"chem\">CO2</span>는 직선형이에요. 크기가 같은 두 <span class=\"chem\">C=O</span> 결합 쌍극자가 반대 방향을 향해 상쇄돼요.",
      },
    },

    // ── s2-2-q029 · short · exam · SL · Structure 2.2.6 · 2 marks
    "s2-2-q029": {
      // EN: <p>The bonds in carbon dioxide, <span class="chem">CO2</span>, and in water, <span class="chem">H2O</span>, are all polar.</p><p>Explain why a water molecule is polar but a carbon dioxide molecule is non-polar.</p>
      stem: "<p>이산화 탄소 <span class=\"chem\">CO2</span>와 물 <span class=\"chem\">H2O</span>의 결합은 모두 극성이에요.</p><p>물 분자는 극성이지만 이산화 탄소 분자는 무극성인 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: The question tells you the bonds are polar. So the answer must be about geometry.
        "문제에서 결합이 극성이라고 알려 줬어요. 그러니 답은 분자 모양에 관한 것이어야 해요.",
        // EN: Name the shape of each molecule. Then say what happens to the bond dipoles.
        "각 분자의 모양을 쓰세요. 그런 다음 결합 쌍극자가 어떻게 되는지 쓰세요.",
      ],
      // EN: <p>Carbon dioxide is linear, so the two equal bond dipoles point in opposite directions and cancel. There is no net dipole.</p><p>Water is bent (V-shaped), because oxygen has two lone pairs. The two bond dipoles do not cancel, so the molecule has a net dipole.</p>
      answer: "<p>이산화 탄소는 직선형이므로 크기가 같은 두 결합 쌍극자가 반대 방향을 향해 상쇄돼요. 분자 전체의 쌍극자가 없어요.</p><p>물은 산소에 비공유 전자쌍이 2개 있으므로 굽은 형(V자형)이에요. 두 결합 쌍극자가 상쇄되지 않으므로 분자 전체의 쌍극자가 있어요.</p>",
      markscheme: [
        // EN: Carbon dioxide is linear / symmetrical, so the bond dipoles cancel (no net dipole).
        "이산화 탄소는 직선형이다 / 대칭이다, 그래서 결합 쌍극자가 상쇄된다(분자 전체의 쌍극자가 없다).",
        // EN: Water is bent / V-shaped / not symmetrical, so the bond dipoles do not cancel (there is a net dipole).
        "물은 굽은 형이다 / V자형이다 / 대칭이 아니다, 그래서 결합 쌍극자가 상쇄되지 않는다(분자 전체의 쌍극자가 있다).",
      ],
    },

    // ── s2-2-q030 · mcq · challenge · SL · Structure 2.2.6 · 1 mark
    "s2-2-q030": {
      // EN: <p>Carbonyl sulfide has the structure <span class="chem">O=C=S</span>. Like carbon dioxide, it has two electron domains around the carbon atom.</p><p>Electronegativity values from the data booklet: C 2.6, O 3.4, S 2.6.</p><p>Which statement about carbonyl sulfide is correct?</p>
      stem: "<p>황화 카보닐(carbonyl sulfide)의 구조는 <span class=\"chem\">O=C=S</span>예요. 이산화 탄소처럼 탄소 원자 주위에 전자 영역이 2개 있어요.</p><p>데이터 부클릿의 전기 음성도 값: C 2.6, O 3.4, S 2.6.</p><p>황화 카보닐에 대한 설명으로 옳은 것은 무엇인가요?</p>",
      options: [
        // EN: It is non-polar, because it is linear and the bond dipoles cancel.
        "직선형이고 결합 쌍극자가 상쇄되므로 무극성이다.",
        // EN: It is polar, because the molecule is bent.
        "분자가 굽은 형이므로 극성이다.",
        // EN: It is polar, because the two bonds have different polarities, so the bond dipoles do not cancel.
        "두 결합의 극성이 달라 결합 쌍극자가 상쇄되지 않으므로 극성이다.",
        // EN: It is non-polar, because oxygen and sulfur are in the same group.
        "산소와 황이 같은 족이므로 무극성이다.",
      ],
      hints: [
        // EN: Two electron domains: what is the shape?
        "전자 영역이 2개이면 모양은 무엇인가요?",
        // EN: Calculate the electronegativity difference for <span class="chem">C=O</span> and for <span class="chem">C=S</span>.
        "<span class=\"chem\">C=O</span>와 <span class=\"chem\">C=S</span>의 전기 음성도 차이를 계산해 보세요.",
        // EN: Dipoles cancel only if they are equal in size and opposite in direction.
        "쌍극자는 크기가 같고 방향이 반대일 때만 상쇄돼요.",
      ],
      // EN: <p>Shape: two electron domains around carbon, so the molecule is <strong>linear</strong>.</p><div class="worked__math">C=O: 3.4 − 2.6 = 0.8 (polar)</div><div class="worked__math">C=S: 2.6 − 2.6 = 0.0 (non-polar)</div><p>The <span class="chem">C=O</span> bond dipole has nothing equal and opposite to cancel it. The molecule has a <strong>net dipole</strong>, with the oxygen end δ−.</p><p>Molecular polarity depends on both bond polarity and geometry. Always check both.</p>
      solution: "<p>모양: 탄소 주위에 전자 영역이 2개이므로 분자는 <strong>직선형</strong>이에요.</p><div class=\"worked__math\">C=O: 3.4 − 2.6 = 0.8 (극성)</div><div class=\"worked__math\">C=S: 2.6 − 2.6 = 0.0 (무극성)</div><p><span class=\"chem\">C=O</span> 결합 쌍극자를 상쇄할, 크기가 같고 방향이 반대인 쌍극자가 없어요. 분자에는 산소 쪽이 δ−인 <strong>분자 전체의 쌍극자</strong>가 있어요.</p><p>분자의 극성은 결합의 극성과 분자 모양 둘 다에 따라 달라져요. 항상 둘 다 확인하세요.</p>",
      misconception: {
        // EN (option A): It is linear, but linear molecules are non-polar only when the two bond dipoles are <strong>equal</strong> and opposite. Here the two bonds are different.
        "0": "직선형은 맞지만, 직선형 분자는 두 결합 쌍극자가 <strong>크기가 같고</strong> 방향이 반대일 때만 무극성이에요. 여기서는 두 결합이 달라요.",
        // EN (option B): Carbon has two electron domains and no lone pairs, so the molecule is linear, not bent. It is polar for a different reason.
        "1": "탄소에는 전자 영역 2개가 있고 비공유 전자쌍이 없으므로 분자는 굽은 형이 아니라 직선형이에요. 극성인 이유는 다른 데 있어요.",
        // EN (option D): Elements in the same group can have different electronegativities. Use the values: O is 3.4 and S is 2.6.
        "3": "같은 족 원소라도 전기 음성도가 다를 수 있어요. 값을 써 보세요: O는 3.4, S는 2.6이에요.",
      },
    },

    // ── s2-2-q031 · mcq · foundation · SL · Structure 2.2.7 · 1 mark
    "s2-2-q031": {
      // EN: <p>Diamond and silicon have the same type of structure. Which statement describes it?</p>
      stem: "<p>다이아몬드와 규소는 같은 종류의 구조를 가져요. 이 구조를 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: Each atom is covalently bonded to three other atoms in flat layers.
        "각 원자가 평평한 층 안에서 다른 원자 3개와 공유 결합한다.",
        // EN: Each atom is covalently bonded to four other atoms in a tetrahedral arrangement, through the whole structure.
        "각 원자가 구조 전체에 걸쳐 다른 원자 4개와 정사면체형으로 공유 결합한다.",
        // EN: Small molecules are held together by weak intermolecular forces.
        "작은 분자들이 약한 분자 간 힘으로 붙어 있다.",
        // EN: Positive ions are held in a lattice by delocalized electrons.
        "양이온이 비편재화된 전자에 의해 격자 속에 붙잡혀 있다.",
      ],
      hints: [
        // EN: Carbon and silicon are both in group 14. Each atom has four valence electrons.
        "탄소와 규소는 둘 다 14족이에요. 원자마다 원자가 전자가 4개예요.",
        // EN: Four bonding pairs around one atom repel to which shape?
        "원자 하나 주위의 공유 전자쌍 4개가 서로 밀어내면 어떤 모양이 될까요?",
      ],
      // EN: <p>In diamond and in silicon, every atom forms <strong>four covalent bonds</strong> to four other atoms. The four bonds point to the corners of a tetrahedron (109.5°).</p><p>This pattern repeats in three dimensions. The result is a <strong>covalent network structure</strong>: a giant structure with strong covalent bonds throughout.</p>
      solution: "<p>다이아몬드와 규소에서는 모든 원자가 다른 원자 4개와 <strong>공유 결합 4개</strong>를 만들어요. 결합 4개는 정사면체의 꼭짓점을 향해요(109.5°).</p><p>이 배열이 3차원으로 반복돼요. 그 결과가 <strong>공유 그물 구조(공유 결정)</strong>예요. 구조 전체에 강한 공유 결합이 퍼져 있는 거대한 구조예요.</p>",
      misconception: {
        // EN (option A): This describes graphite or graphene. In diamond and silicon, each atom uses all four valence electrons in four covalent bonds.
        "0": "이것은 흑연이나 그래핀에 대한 설명이에요. 다이아몬드와 규소에서는 각 원자가 원자가 전자 4개를 모두 공유 결합 4개에 써요.",
        // EN (option C): Diamond and silicon are covalent network structures. They do not contain separate small molecules.
        "2": "다이아몬드와 규소는 공유 그물 구조예요. 따로 떨어진 작은 분자가 들어 있지 않아요.",
        // EN (option D): This describes a metal. Silicon and diamond have covalent bonds between atoms. There are no ions and no delocalized electrons.
        "3": "이것은 금속에 대한 설명이에요. 규소와 다이아몬드에는 원자 사이에 공유 결합이 있어요. 이온도, 비편재화된 전자도 없어요.",
      },
    },

    // ── s2-2-q032 · multi · foundation · SL · Structure 2.2.7 · 1 mark
    "s2-2-q032": {
      // EN: <p>Which of these substances are good conductors of electricity? Select all that apply.</p>
      stem: "<p>다음 중 전기를 잘 전도하는 물질은 무엇인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: diamond
        "다이아몬드",
        // EN: graphite
        "흑연",
        // EN: graphene
        "그래핀",
        // EN: silicon dioxide
        "이산화 규소",
        // EN: fullerene, <span class="chem">C60</span>
        "풀러렌, <span class=\"chem\">C60</span>",
      ],
      hints: [
        // EN: A substance conducts if it has charged particles that are free to move.
        "자유롭게 움직일 수 있는 전하를 띤 입자가 있으면 전기가 통해요.",
        // EN: In which structures does each carbon atom bond to only three other atoms?
        "탄소 원자 하나가 다른 원자 3개와만 결합하는 구조는 어느 것일까요?",
      ],
      // EN: <p>In <strong>graphite</strong> and <strong>graphene</strong>, each carbon atom forms only three covalent bonds. The fourth valence electron of each atom is <strong>delocalized</strong> across the whole layer. These electrons are free to move, so they carry charge.</p><p>Diamond and silicon dioxide have no delocalized electrons. In <span class="chem">C60</span>, electrons cannot move between molecules.</p>
      solution: "<p><strong>흑연</strong>과 <strong>그래핀</strong>에서는 탄소 원자마다 공유 결합을 3개만 만들어요. 각 원자의 네 번째 원자가 전자는 층 전체에 <strong>비편재화</strong>되어 있어요. 이 전자들은 자유롭게 움직일 수 있으므로 전하를 운반해요.</p><p>다이아몬드와 이산화 규소에는 비편재화된 전자가 없어요. <span class=\"chem\">C60</span>에서는 전자가 분자와 분자 사이를 움직일 수 없어요.</p>",
      misconception: {
        // EN (option A): In diamond, each carbon atom uses all four valence electrons in covalent bonds. There are no delocalized electrons, so there is nothing to carry charge.
        "0": "다이아몬드에서는 탄소 원자마다 원자가 전자 4개를 모두 공유 결합에 써요. 비편재화된 전자가 없으므로 전하를 운반할 것이 없어요.",
        // EN (option D): In silicon dioxide, all the valence electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions.
        "3": "이산화 규소에서는 원자가 전자가 모두 공유 결합에 묶여 있어요. 비편재화된 전자도, 움직일 수 있는 이온도 없어요.",
        // EN (option E): Electrons are delocalized inside each <span class="chem">C60</span> molecule, but they cannot move from one molecule to the next. So solid <span class="chem">C60</span> is a poor conductor.
        "4": "전자는 각 <span class=\"chem\">C60</span> 분자 안에서 비편재화되어 있지만, 한 분자에서 다음 분자로 이동할 수 없어요. 그래서 고체 <span class=\"chem\">C60</span>은 전기가 잘 통하지 않아요.",
      },
    },

    // ── s2-2-q033 · short · exam · SL · Structure 2.2.7 · 3 marks
    "s2-2-q033": {
      // EN: <p>Diamond and graphite are allotropes of carbon. Diamond is very hard and does not conduct electricity. Graphite is soft and conducts electricity.</p><p>Explain these differences in terms of structure and bonding.</p>
      stem: "<p>다이아몬드와 흑연은 탄소의 동소체예요. 다이아몬드는 매우 단단하고 전기가 통하지 않아요. 흑연은 무르고 전기가 통해요.</p><p>이 차이를 구조와 결합으로 설명하시오 (explain).</p>",
      hints: [
        // EN: How many covalent bonds does each carbon atom form in diamond? In graphite?
        "다이아몬드에서 탄소 원자는 각각 공유 결합을 몇 개 만드나요? 흑연에서는요?",
        // EN: For hardness, think about what holds the layers of graphite together.
        "단단함은 흑연의 층을 무엇이 붙잡고 있는지 생각해 봐요.",
        // EN: For conductivity, think about the fourth valence electron of each carbon atom in graphite.
        "전기 전도성은 흑연에서 각 탄소 원자의 네 번째 원자가 전자를 생각해 봐요.",
      ],
      // EN: <p><strong>Diamond:</strong> each carbon atom is covalently bonded to four other carbon atoms in a three-dimensional (tetrahedral) network. The strong covalent bonds in all directions make it hard. All four valence electrons are in bonds, so there are no delocalized electrons and it does not conduct.</p><p><strong>Graphite:</strong> each carbon atom is covalently bonded to three other carbon atoms in layers of hexagons. There are only weak London (dispersion) forces between the layers, so the layers can slide over each other and graphite is soft. Each atom has one delocalized electron, which is free to move along the layers, so graphite conducts.</p>
      answer: "<p><strong>다이아몬드:</strong> 탄소 원자마다 다른 탄소 원자 4개와 3차원(정사면체형) 그물 구조로 공유 결합해요. 모든 방향으로 뻗은 강한 공유 결합 때문에 단단해요. 원자가 전자 4개가 모두 결합에 쓰이므로 비편재화된 전자가 없고 전기가 통하지 않아요.</p><p><strong>흑연:</strong> 탄소 원자마다 다른 탄소 원자 3개와 공유 결합해 육각형으로 된 층을 이뤄요. 층 사이에는 약한 런던 분산력만 있으므로 층이 서로 미끄러질 수 있고 흑연은 물러요. 원자마다 비편재화된 전자가 1개씩 있고, 이 전자가 층을 따라 자유롭게 움직일 수 있으므로 흑연은 전기가 통해요.</p>",
      markscheme: [
        // EN: Diamond: each carbon atom bonded to four others / three-dimensional (tetrahedral) covalent network, so it is hard. AND no delocalized electrons / all valence electrons used in bonds, so it does not conduct.
        "다이아몬드: 탄소 원자마다 다른 원자 4개와 결합 / 3차원(정사면체형) 공유 그물 구조, 그래서 단단하다. 그리고 비편재화된 전자가 없다 / 원자가 전자가 모두 결합에 쓰인다, 그래서 전기가 통하지 않는다.",
        // EN: Graphite is soft: layers held together by weak London (dispersion) forces, so the layers can slide over each other. Do not accept "van der Waals" alone or "weak bonds between atoms".
        "흑연은 무르다: 층이 약한 런던 분산력으로 붙어 있어 층이 서로 미끄러질 수 있다. \"반데르발스 힘(van der Waals)\"만 쓰거나 \"원자 사이의 약한 결합\"이라고 쓴 답은 인정하지 않음.",
        // EN: Graphite conducts: each carbon atom bonded to only three others, so there are delocalized electrons that are free to move (along the layers). Do not accept "free ions".
        "흑연은 전기가 통한다: 탄소 원자마다 다른 원자 3개와만 결합하므로 (층을 따라) 자유롭게 움직일 수 있는 비편재화된 전자가 있다. \"자유 이온\"은 인정하지 않음.",
      ],
    },

    // ── s2-2-q034 · short · exam · SL · Structure 2.2.7 · 3 marks
    "s2-2-q034": {
      // EN: <p>Carbon and silicon are both in group 14. Carbon dioxide, <span class="chem">CO2</span>, changes from solid to gas at −78 °C. Silicon dioxide, <span class="chem">SiO2</span>, melts at about 1700 °C.</p><p>Explain this large difference in terms of structure and bonding.</p>
      stem: "<p>탄소와 규소는 둘 다 14족이에요. 이산화 탄소 <span class=\"chem\">CO2</span>는 −78 °C에서 고체에서 기체로 변해요. 이산화 규소 <span class=\"chem\">SiO2</span>는 약 1700 °C에서 녹아요.</p><p>이 큰 차이를 구조와 결합으로 설명하시오 (explain).</p>",
      hints: [
        // EN: One of these substances is made of small molecules. The other is a giant structure.
        "두 물질 중 하나는 작은 분자로 되어 있어요. 다른 하나는 거대한 구조예요.",
        // EN: For each substance, say exactly what must be broken or overcome.
        "각 물질에서 정확히 무엇을 끊거나 극복해야 하는지 쓰세요.",
        // EN: Finish with a comparison of strength.
        "마지막에 세기를 비교하세요.",
      ],
      // EN: <p>Silicon dioxide has a covalent network structure. Each silicon atom is covalently bonded to four oxygen atoms and each oxygen atom to two silicon atoms, through the whole structure. To melt it, strong covalent bonds must be broken.</p><p>Carbon dioxide is made of small, separate molecules. Only weak London (dispersion) forces between the molecules must be overcome. The covalent bonds inside the molecules do not break.</p><p>Covalent bonds are much stronger than London forces, so much more energy is needed for silicon dioxide.</p>
      answer: "<p>이산화 규소는 공유 그물 구조예요. 구조 전체에 걸쳐 규소 원자마다 산소 원자 4개와, 산소 원자마다 규소 원자 2개와 공유 결합해요. 녹이려면 강한 공유 결합을 끊어야 해요.</p><p>이산화 탄소는 작고 따로 떨어진 분자로 되어 있어요. 분자 사이의 약한 런던 분산력만 극복하면 돼요. 분자 안의 공유 결합은 끊어지지 않아요.</p><p>공유 결합은 런던 분산력보다 훨씬 강하므로 이산화 규소에는 훨씬 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: Silicon dioxide is a covalent network (giant covalent) structure, so covalent bonds (between atoms) must be broken.
        "이산화 규소는 공유 그물 구조(거대 공유 구조)이므로 (원자 사이의) 공유 결합을 끊어야 한다.",
        // EN: Carbon dioxide is (simple) molecular, so only London (dispersion) forces between molecules must be overcome. Accept "intermolecular forces". Do not accept covalent bonds breaking in carbon dioxide.
        "이산화 탄소는 (단순) 분자 물질이므로 분자 사이의 런던 분산력만 극복하면 된다. \"분자 간 힘\"도 인정. 이산화 탄소에서 공유 결합이 끊어진다는 답은 인정하지 않음.",
        // EN: Covalent bonds are (much) stronger than London forces / intermolecular forces, so (much) more energy is needed. Do not accept "stronger bonding" with no bond or force named.
        "공유 결합은 런던 분산력 / 분자 간 힘보다 (훨씬) 강하므로 (훨씬) 많은 에너지가 필요하다. 결합이나 힘의 이름 없이 \"결합이 더 강하다\"라고만 쓴 답은 인정하지 않음.",
      ],
    },

    // ── s2-2-q035 · mcq · exam · SL · Structure 2.2.7 · 1 mark
    "s2-2-q035": {
      // EN: <p>Fullerene, <span class="chem">C60</span>, turns into a gas at a much lower temperature than diamond. It also dissolves in some non-polar solvents, but diamond does not.</p><p>Which statement explains these observations?</p>
      stem: "<p>풀러렌 <span class=\"chem\">C60</span>은 다이아몬드보다 훨씬 낮은 온도에서 기체가 돼요. 또 일부 무극성 용매에 녹지만, 다이아몬드는 녹지 않아요.</p><p>이 관찰 결과를 설명하는 것은 무엇인가요?</p>",
      options: [
        // EN: The covalent bonds in <span class="chem">C60</span> are much weaker than the covalent bonds in diamond.
        "<span class=\"chem\">C60</span>의 공유 결합이 다이아몬드의 공유 결합보다 훨씬 약하다.",
        // EN: <span class="chem">C60</span> is made of separate molecules with weak London (dispersion) forces between them. Diamond is a covalent network.
        "<span class=\"chem\">C60</span>은 따로 떨어진 분자로 되어 있고 분자 사이에 약한 런던 분산력이 작용한다. 다이아몬드는 공유 그물 구조이다.",
        // EN: <span class="chem">C60</span> has delocalized electrons, and diamond does not.
        "<span class=\"chem\">C60</span>에는 비편재화된 전자가 있고 다이아몬드에는 없다.",
        // EN: <span class="chem">C60</span> is made of layers that can slide over each other.
        "<span class=\"chem\">C60</span>은 서로 미끄러질 수 있는 층으로 되어 있다.",
      ],
      hints: [
        // EN: The formula <span class="chem">C60</span> tells you there are 60 atoms in one molecule.
        "화학식 <span class=\"chem\">C60</span>을 보면 분자 하나에 원자가 60개 있다는 것을 알 수 있어요.",
        // EN: What must be overcome to separate molecules? What must be broken to separate the atoms in diamond?
        "분자를 떼어 놓으려면 무엇을 극복해야 하나요? 다이아몬드의 원자를 떼어 놓으려면 무엇을 끊어야 하나요?",
      ],
      // EN: <p><span class="chem">C60</span> is a <strong>molecular</strong> allotrope. Each molecule is a cage of 60 carbon atoms, each bonded to three others. Between the molecules there are only weak London (dispersion) forces.</p><p>Little energy is needed to separate the molecules, and a non-polar solvent can separate them too. In diamond, strong covalent bonds through the whole network must be broken.</p>
      solution: "<p><span class=\"chem\">C60</span>은 <strong>분자로 된</strong> 동소체예요. 분자 하나는 탄소 원자 60개로 된 새장 모양이고, 각 원자는 다른 원자 3개와 결합해요. 분자 사이에는 약한 런던 분산력만 있어요.</p><p>분자를 떼어 놓는 데 에너지가 조금만 필요하고, 무극성 용매도 분자를 떼어 놓을 수 있어요. 다이아몬드에서는 그물 구조 전체의 강한 공유 결합을 끊어야 해요.</p>",
      misconception: {
        // EN (option A): The covalent bonds inside a <span class="chem">C60</span> molecule are strong, and they do not break when it turns into a gas. Only the forces between the molecules are overcome.
        "0": "<span class=\"chem\">C60</span> 분자 안의 공유 결합은 강하고, 기체가 될 때 끊어지지 않아요. 분자 사이의 힘만 극복돼요.",
        // EN (option C): This is true, but it does not explain volatility or solubility. Those properties depend on what holds the particles together.
        "2": "맞는 말이지만 휘발성이나 용해도를 설명하지 못해요. 이런 성질은 입자를 무엇이 붙잡고 있는지에 따라 달라져요.",
        // EN (option D): Layers describe graphite. <span class="chem">C60</span> molecules are closed cages of 60 carbon atoms.
        "3": "층은 흑연에 대한 설명이에요. <span class=\"chem\">C60</span> 분자는 탄소 원자 60개로 된 닫힌 새장 모양이에요.",
      },
    },

    // ── s2-2-q036 · mcq · challenge · SL · Structure 2.2.7 · 1 mark
    "s2-2-q036": {
      // EN: <p>X, Y and Z are three allotropes of carbon: diamond, graphite and fullerene (<span class="chem">C60</span>), in some order.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Properties of three allotropes of carbon</caption><thead><tr><th scope="col">Allotrope</th><th scope="col">Hardness</th><th scope="col">Electrical conductivity of the solid</th><th scope="col">Solubility in methylbenzene (a non-polar solvent)</th></tr></thead><tbody><tr><th scope="row">X</th><td>soft</td><td>good</td><td>insoluble</td></tr><tr><th scope="row">Y</th><td>soft</td><td>poor</td><td>dissolves slightly and colours the solvent</td></tr><tr><th scope="row">Z</th><td>very hard</td><td>poor</td><td>insoluble</td></tr></tbody></table></div><p>Which row identifies X and Y?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">X</th><th scope="col">Y</th></tr></thead><tbody><tr><th scope="row">A</th><td>graphite</td><td>diamond</td></tr><tr><th scope="row">B</th><td>fullerene</td><td>graphite</td></tr><tr><th scope="row">C</th><td>diamond</td><td>fullerene</td></tr><tr><th scope="row">D</th><td>graphite</td><td>fullerene</td></tr></tbody></table></div>
      stem: "<p>X, Y, Z는 탄소의 동소체 세 가지인 다이아몬드, 흑연, 풀러렌(<span class=\"chem\">C60</span>)을 어떤 순서로 나타낸 거예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>탄소 동소체 세 가지의 성질</caption><thead><tr><th scope=\"col\">동소체</th><th scope=\"col\">단단함</th><th scope=\"col\">고체의 전기 전도성</th><th scope=\"col\">methylbenzene(무극성 용매)에 대한 용해도</th></tr></thead><tbody><tr><th scope=\"row\">X</th><td>무름</td><td>좋음</td><td>녹지 않음</td></tr><tr><th scope=\"row\">Y</th><td>무름</td><td>나쁨</td><td>조금 녹아 용매에 색을 띠게 함</td></tr><tr><th scope=\"row\">Z</th><td>매우 단단함</td><td>나쁨</td><td>녹지 않음</td></tr></tbody></table></div><p>X와 Y를 옳게 나타낸 행은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>보기</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">X</th><th scope=\"col\">Y</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>흑연</td><td>다이아몬드</td></tr><tr><th scope=\"row\">B</th><td>풀러렌</td><td>흑연</td></tr><tr><th scope=\"row\">C</th><td>다이아몬드</td><td>풀러렌</td></tr><tr><th scope=\"row\">D</th><td>흑연</td><td>풀러렌</td></tr></tbody></table></div>",
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
        // EN: Only one allotrope conducts well. Which one has delocalized electrons that can move through the whole structure?
        "전기가 잘 통하는 동소체는 하나뿐이에요. 구조 전체를 움직일 수 있는 비편재화된 전자가 있는 것은 어느 것인가요?",
        // EN: Covalent network structures do not dissolve. Which allotrope is made of separate molecules?
        "공유 그물 구조는 녹지 않아요. 따로 떨어진 분자로 된 동소체는 어느 것인가요?",
      ],
      // EN: <p><strong>X</strong> is a good conductor and is soft: <strong>graphite</strong>. It has delocalized electrons in its layers, and weak London forces between layers.</p><p><strong>Y</strong> dissolves in a non-polar solvent, so it is made of separate molecules: <strong>fullerene</strong>. Only London forces between <span class="chem">C60</span> molecules must be overcome.</p><p><strong>Z</strong> is very hard, a poor conductor and insoluble: diamond.</p>
      solution: "<p><strong>X</strong>는 전기가 잘 통하고 물러요: <strong>흑연</strong>이에요. 층 안에 비편재화된 전자가 있고, 층 사이에는 약한 런던 분산력이 있어요.</p><p><strong>Y</strong>는 무극성 용매에 녹으므로 따로 떨어진 분자로 되어 있어요: <strong>풀러렌</strong>이에요. <span class=\"chem\">C60</span> 분자 사이의 런던 분산력만 극복하면 돼요.</p><p><strong>Z</strong>는 매우 단단하고 전기가 잘 통하지 않으며 녹지 않아요: 다이아몬드예요.</p>",
      misconception: {
        // EN (option A): X is right. But diamond is very hard and does not dissolve, because it is a covalent network. Y is soft and dissolves, so Y must be made of separate molecules.
        "0": "X는 맞아요. 하지만 다이아몬드는 공유 그물 구조이므로 매우 단단하고 녹지 않아요. Y는 무르고 녹으므로 따로 떨어진 분자로 되어 있어야 해요.",
        // EN (option B): The two are the wrong way round. A substance that dissolves must be made of separate molecules. Graphite is a covalent network and does not dissolve.
        "1": "둘이 서로 바뀌었어요. 녹는 물질은 따로 떨어진 분자로 되어 있어야 해요. 흑연은 공유 그물 구조이므로 녹지 않아요.",
        // EN (option C): Diamond is very hard and a poor conductor. X is soft and a good conductor, so X has delocalized electrons that can move through the whole structure.
        "2": "다이아몬드는 매우 단단하고 전기가 잘 통하지 않아요. X는 무르고 전기가 잘 통하므로, 구조 전체를 움직일 수 있는 비편재화된 전자가 있어요.",
      },
    },

    // ── s2-2-q037 · mcq · foundation · SL · Structure 2.2.8 · 1 mark
    "s2-2-q037": {
      // EN: <p>Which intermolecular force acts between methane molecules, <span class="chem">CH4</span>?</p>
      stem: "<p>methane 분자 <span class=\"chem\">CH4</span> 사이에는 어떤 분자 간 힘이 작용하나요?</p>",
      options: [
        // EN: London (dispersion) forces only
        "런던 분산력만",
        // EN: dipole–dipole forces and London (dispersion) forces
        "쌍극자-쌍극자 힘과 런던 분산력",
        // EN: hydrogen bonding and London (dispersion) forces
        "수소 결합과 런던 분산력",
        // EN: covalent bonds
        "공유 결합",
      ],
      hints: [
        // EN: Is a methane molecule polar or non-polar?
        "methane 분자는 극성인가요, 무극성인가요?",
        // EN: Which force exists between all molecules, including non-polar ones?
        "무극성 분자를 포함해 모든 분자 사이에 작용하는 힘은 무엇인가요?",
      ],
      // EN: <p>Methane is a <strong>non-polar</strong> molecule: it is tetrahedral, so the small <span class="chem">C–H</span> bond dipoles cancel.</p><p>Non-polar molecules attract each other only by <strong>London (dispersion) forces</strong>. These forces exist between all molecules.</p>
      solution: "<p>methane은 <strong>무극성</strong> 분자예요. 정사면체형이므로 작은 <span class=\"chem\">C–H</span> 결합 쌍극자가 상쇄돼요.</p><p>무극성 분자는 <strong>런던 분산력</strong>으로만 서로 끌어당겨요. 이 힘은 모든 분자 사이에 작용해요.</p>",
      misconception: {
        // EN (option B): Dipole–dipole forces need polar molecules. Methane is tetrahedral and symmetrical, so it has no net dipole.
        "1": "쌍극자-쌍극자 힘은 극성 분자에만 있어요. methane은 정사면체형이고 대칭이므로 분자 전체의 쌍극자가 없어요.",
        // EN (option C): Methane contains hydrogen, but the hydrogen is bonded to carbon. Hydrogen bonding needs H bonded to N, O or F.
        "2": "methane에는 수소가 있지만 수소가 탄소와 결합해 있어요. 수소 결합이 생기려면 H가 N, O, F와 결합해 있어야 해요.",
        // EN (option D): Covalent bonds are inside each molecule (between C and H). The question asks about the forces between molecules.
        "3": "공유 결합은 각 분자 안(C와 H 사이)에 있어요. 문제는 분자 사이의 힘을 묻고 있어요.",
      },
    },

    // ── s2-2-q038 · mcq · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q038": {
      // EN: <p>Which substance has hydrogen bonding between its own molecules?</p>
      stem: "<p>자기 분자들 사이에 수소 결합이 있는 물질은 무엇인가요?</p>",
      options: [
        // EN: fluoromethane, <span class="chem">CH3F</span>
        "fluoromethane, <span class=\"chem\">CH3F</span>",
        // EN: methoxymethane, <span class="chem">CH3OCH3</span>
        "methoxymethane, <span class=\"chem\">CH3OCH3</span>",
        // EN: ethanal, <span class="chem">CH3CHO</span>
        "ethanal, <span class=\"chem\">CH3CHO</span>",
        // EN: methanamine, <span class="chem">CH3NH2</span>
        "methanamine, <span class=\"chem\">CH3NH2</span>",
      ],
      hints: [
        // EN: Hydrogen bonding needs a hydrogen atom covalently bonded to N, O or F.
        "수소 결합이 생기려면 수소 원자가 N, O, F와 공유 결합해 있어야 해요.",
        // EN: For each molecule, check which atom each hydrogen is bonded to.
        "각 분자에서 수소가 어느 원자와 결합해 있는지 확인하세요.",
      ],
      // EN: <p>A hydrogen bond needs <strong>H covalently bonded to a very electronegative atom</strong> (N, O or F). That H is then attracted to a lone pair on N, O or F in a neighbouring molecule.</p><p>Only <span class="chem">CH3NH2</span> has such a hydrogen: the two H atoms of the <span class="chem">NH2</span> group. In the other three molecules, every H is bonded to carbon.</p>
      solution: "<p>수소 결합이 생기려면 <strong>H가 전기 음성도가 매우 큰 원자(N, O, F)와 공유 결합</strong>해 있어야 해요. 그러면 그 H가 이웃 분자의 N, O, F에 있는 비공유 전자쌍에 끌려요.</p><p>이런 수소가 있는 것은 <span class=\"chem\">CH3NH2</span>뿐이에요. <span class=\"chem\">NH2</span> 기의 H 원자 2개예요. 나머지 세 분자에서는 모든 H가 탄소와 결합해 있어요.</p>",
      misconception: {
        // EN (option A): The molecule contains H and F, but every H is bonded to carbon. There is no <span class="chem">H–F</span> bond, so there is no hydrogen that can form a hydrogen bond.
        "0": "이 분자에는 H와 F가 있지만 모든 H가 탄소와 결합해 있어요. <span class=\"chem\">H–F</span> 결합이 없으므로 수소 결합을 만들 수 있는 수소가 없어요.",
        // EN (option B): The molecule contains H and O, but every H is bonded to carbon. There is no <span class="chem">O–H</span> bond. The forces are dipole–dipole and London forces.
        "1": "이 분자에는 H와 O가 있지만 모든 H가 탄소와 결합해 있어요. <span class=\"chem\">O–H</span> 결합이 없어요. 작용하는 힘은 쌍극자-쌍극자 힘과 런던 분산력이에요.",
        // EN (option C): The oxygen is double-bonded to carbon. Every H is bonded to carbon. With no <span class="chem">O–H</span> bond, ethanal molecules cannot hydrogen-bond to each other.
        "2": "산소는 탄소와 이중 결합해 있어요. 모든 H가 탄소와 결합해 있어요. <span class=\"chem\">O–H</span> 결합이 없으므로 ethanal 분자끼리는 수소 결합을 할 수 없어요.",
      },
    },

    // ── s2-2-q039 · multi · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q039": {
      // EN: <p>In IB Chemistry, "van der Waals forces" is an inclusive term. Which of these does it include? Select all that apply.</p>
      stem: "<p>IB Chemistry에서 \"반데르발스 힘(van der Waals forces)\"은 여러 힘을 포함하는 용어예요. 다음 중 이 용어에 포함되는 것은 무엇인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: London (dispersion) forces
        "런던 분산력",
        // EN: dipole–induced dipole forces
        "쌍극자-유발 쌍극자 힘",
        // EN: dipole–dipole forces
        "쌍극자-쌍극자 힘",
        // EN: hydrogen bonding
        "수소 결합",
        // EN: covalent bonds
        "공유 결합",
      ],
      hints: [
        // EN: The term covers three intermolecular forces.
        "이 용어는 분자 간 힘 3가지를 포함해요.",
        // EN: One intermolecular force is named separately, because it is stronger and needs H bonded to N, O or F.
        "분자 간 힘 하나는 따로 이름을 붙여요. 더 강하고, H가 N, O, F와 결합해 있어야 생기기 때문이에요.",
      ],
      // EN: <p>"Van der Waals forces" covers <strong>London (dispersion) forces, dipole–induced dipole forces and dipole–dipole forces</strong>.</p><p>It does not include hydrogen bonding.</p><p data-i18n="both">Exam tip: when you mean London forces, write "London (dispersion) forces". Markschemes do not accept "van der Waals" in place of "London".</p>
      solution: "<p>\"반데르발스 힘\"은 <strong>런던 분산력, 쌍극자-유발 쌍극자 힘, 쌍극자-쌍극자 힘</strong>을 포함해요.</p><p>수소 결합은 포함하지 않아요.</p><p data-i18n=\"both\">시험 팁: 런던 분산력을 뜻할 때는 \"London (dispersion) forces\"라고 쓰세요. 채점 기준에서는 \"London\" 대신 \"van der Waals\"라고 쓴 답을 인정하지 않아요.</p>",
      misconception: {
        // EN (option D): Hydrogen bonding is an intermolecular force, but the guide does not include it in the term "van der Waals forces".
        "3": "수소 결합은 분자 간 힘이지만, IB 교수요목에서는 \"반데르발스 힘\"이라는 용어에 포함하지 않아요.",
        // EN (option E): Covalent bonds hold atoms together inside a molecule. Van der Waals forces act between molecules.
        "4": "공유 결합은 분자 안에서 원자들을 붙잡아요. 반데르발스 힘은 분자 사이에 작용해요.",
      },
    },

    // ── s2-2-q040 · mcq · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q040": {
      // EN: <p>A small amount of argon gas dissolves in water. Which force acts between an argon atom and a water molecule, in addition to London (dispersion) forces?</p>
      stem: "<p>아르곤 기체는 물에 조금 녹아요. 아르곤 원자와 물 분자 사이에 런던 분산력 말고 또 어떤 힘이 작용하나요?</p>",
      options: [
        // EN: dipole–dipole forces
        "쌍극자-쌍극자 힘",
        // EN: dipole–induced dipole forces
        "쌍극자-유발 쌍극자 힘",
        // EN: hydrogen bonding
        "수소 결합",
        // EN: ionic bonding
        "이온 결합",
      ],
      hints: [
        // EN: Water is a polar molecule. Argon is a non-polar atom.
        "물은 극성 분자예요. 아르곤은 무극성 원자예요.",
        // EN: A polar molecule can push or pull the electron cloud of a nearby particle.
        "극성 분자는 가까이 있는 입자의 전자 구름을 밀거나 당길 수 있어요.",
      ],
      // EN: <p>Water has a permanent dipole. Argon has none.</p><p>When a water molecule comes close, its dipole distorts the electron cloud of the argon atom. This creates an <strong>induced dipole</strong> in argon. The attraction between the two is a <strong>dipole–induced dipole force</strong>.</p>
      solution: "<p>물에는 영구 쌍극자가 있어요. 아르곤에는 없어요.</p><p>물 분자가 가까이 오면 물의 쌍극자가 아르곤 원자의 전자 구름을 일그러뜨려요. 그러면 아르곤에 <strong>유발 쌍극자</strong>가 생겨요. 둘 사이의 인력이 <strong>쌍극자-유발 쌍극자 힘</strong>이에요.</p>",
      misconception: {
        // EN (option A): Dipole–dipole forces need two polar molecules. An argon atom has no permanent dipole.
        "0": "쌍극자-쌍극자 힘은 극성 분자 두 개가 있어야 생겨요. 아르곤 원자에는 영구 쌍극자가 없어요.",
        // EN (option C): Hydrogen bonding needs an N, O or F atom on the other particle. Argon is not one of these.
        "2": "수소 결합이 생기려면 상대 입자에 N, O, F 원자가 있어야 해요. 아르곤은 여기에 해당하지 않아요.",
        // EN (option D): Ionic bonding is the attraction between oppositely charged ions. Argon atoms and water molecules are not ions.
        "3": "이온 결합은 반대 전하를 띤 이온 사이의 인력이에요. 아르곤 원자와 물 분자는 이온이 아니에요.",
      },
    },

    // ── s2-2-q041 · short · exam · SL · Structure 2.2.8 · 2 marks
    "s2-2-q041": {
      // EN: <p>Liquid ammonia, <span class="chem">NH3</span>, has hydrogen bonding between its molecules.</p><p>Explain how a hydrogen bond forms between two ammonia molecules.</p>
      stem: "<p>액체 암모니아 <span class=\"chem\">NH3</span>는 분자 사이에 수소 결합이 있어요.</p><p>암모니아 분자 두 개 사이에 수소 결합이 어떻게 생기는지 설명하시오 (explain).</p>",
      hints: [
        // EN: A hydrogen bond has two parts. First: which atom is the hydrogen covalently bonded to?
        "수소 결합은 두 부분으로 설명해요. 첫째: 수소가 어느 원자와 공유 결합해 있나요?",
        // EN: Second: what on the other molecule attracts this hydrogen?
        "둘째: 다른 분자의 무엇이 이 수소를 끌어당기나요?",
      ],
      // EN: <p>In ammonia, hydrogen is covalently bonded to nitrogen, which is a very electronegative atom. The <span class="chem">N–H</span> bond is polar, so the hydrogen atom is δ+.</p><p>This δ+ hydrogen is attracted to the lone pair on the (δ−) nitrogen atom of a neighbouring ammonia molecule. This attraction is the hydrogen bond.</p>
      answer: "<p>암모니아에서 수소는 전기 음성도가 매우 큰 원자인 질소와 공유 결합해 있어요. <span class=\"chem\">N–H</span> 결합은 극성이므로 수소 원자는 δ+예요.</p><p>이 δ+ 수소가 이웃 암모니아 분자의 (δ−) 질소 원자에 있는 비공유 전자쌍에 끌려요. 이 인력이 수소 결합이에요.</p>",
      markscheme: [
        // EN: Hydrogen is (covalently) bonded to nitrogen, a (highly) electronegative atom. Accept: the N–H bond is very polar / H is δ+.
        "수소가 (전기 음성도가 매우) 큰 원자인 질소와 (공유) 결합해 있다. 인정: N–H 결합은 극성이 매우 크다 / H는 δ+이다.",
        // EN: This hydrogen is attracted to (the lone pair on) the nitrogen atom of a neighbouring molecule. Accept a labelled diagram. Do not accept a description of the N–H covalent bond as the hydrogen bond.
        "이 수소가 이웃 분자의 질소 원자(의 비공유 전자쌍)에 끌린다. 이름을 붙인 그림도 인정. N–H 공유 결합을 수소 결합이라고 설명한 답은 인정하지 않음.",
      ],
    },

    // ── s2-2-q042 · mcq · challenge · SL · Structure 2.2.8 · 1 mark
    "s2-2-q042": {
      // EN: <p>Two compounds have the same molecular formula, <span class="chem">C3H9N</span>.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two isomers</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">P</th><td><span class="chem">CH3CH2CH2NH2</span></td><td>48</td></tr><tr><th scope="row">Q</th><td><span class="chem">(CH3)3N</span></td><td>3</td></tr></tbody></table></div><p>Which is the best explanation for the higher boiling point of P?</p>
      stem: "<p>두 화합물의 분자식은 <span class=\"chem\">C3H9N</span>으로 같아요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>두 이성질체</caption><thead><tr><th scope=\"col\">화합물</th><th scope=\"col\">구조식</th><th scope=\"col\">끓는점 / °C</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td><span class=\"chem\">CH3CH2CH2NH2</span></td><td>48</td></tr><tr><th scope=\"row\">Q</th><td><span class=\"chem\">(CH3)3N</span></td><td>3</td></tr></tbody></table></div><p>P의 끓는점이 더 높은 이유를 가장 잘 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: P has more electrons than Q, so P has stronger London (dispersion) forces.
        "P는 Q보다 전자가 많으므로 런던 분산력이 더 강하다.",
        // EN: P has hydrogen bonding between its molecules. Q has no hydrogen atom bonded to nitrogen, so Q has no hydrogen bonding between its molecules.
        "P는 분자 사이에 수소 결합이 있다. Q에는 질소와 결합한 수소 원자가 없으므로 분자 사이에 수소 결합이 없다.",
        // EN: The covalent bonds in P are stronger than the covalent bonds in Q.
        "P의 공유 결합이 Q의 공유 결합보다 강하다.",
        // EN: P is polar and Q is non-polar.
        "P는 극성이고 Q는 무극성이다.",
      ],
      hints: [
        // EN: Both molecules contain N and H. Look at which atom the H atoms are bonded to.
        "두 분자 모두 N과 H가 있어요. H 원자가 어느 원자와 결합해 있는지 보세요.",
        // EN: In Q, the nitrogen atom is bonded to three carbon atoms.
        "Q에서 질소 원자는 탄소 원자 3개와 결합해 있어요.",
      ],
      // EN: <p>In <strong>P</strong>, two hydrogen atoms are bonded to nitrogen (<span class="chem">NH2</span>). These δ+ hydrogens are attracted to the lone pair on nitrogen in a neighbouring molecule. P has <strong>hydrogen bonding</strong>.</p><p>In <strong>Q</strong>, nitrogen is bonded to three carbon atoms. Every hydrogen is bonded to carbon. Q molecules attract each other only by dipole–dipole and London forces.</p><p>Hydrogen bonding is stronger, so more energy is needed to separate the molecules of P. Q is also more compact, which makes its London forces a little weaker.</p>
      solution: "<p><strong>P</strong>에서는 수소 원자 2개가 질소와 결합해 있어요(<span class=\"chem\">NH2</span>). 이 δ+ 수소가 이웃 분자의 질소에 있는 비공유 전자쌍에 끌려요. P에는 <strong>수소 결합</strong>이 있어요.</p><p><strong>Q</strong>에서는 질소가 탄소 원자 3개와 결합해 있어요. 모든 수소가 탄소와 결합해 있어요. Q 분자끼리는 쌍극자-쌍극자 힘과 런던 분산력으로만 끌어당겨요.</p><p>수소 결합이 더 강하므로 P의 분자를 떼어 놓는 데 에너지가 더 많이 필요해요. 또 Q는 더 조밀한 모양이라 런던 분산력이 조금 더 약해요.</p>",
      misconception: {
        // EN (option A): P and Q have the same molecular formula, so they have the same number of electrons.
        "0": "P와 Q는 분자식이 같으므로 전자 수도 같아요.",
        // EN (option C): Boiling separates molecules from each other. It does not break covalent bonds, so covalent bond strength does not decide the boiling point.
        "2": "끓으면 분자가 서로 떨어져요. 공유 결합은 끊어지지 않으므로 공유 결합의 세기가 끓는점을 결정하지 않아요.",
        // EN (option D): Q is also polar. Its nitrogen atom has a lone pair and three bonding pairs, so the shape around N is trigonal pyramidal and the bond dipoles do not cancel.
        "3": "Q도 극성이에요. 질소 원자에 비공유 전자쌍 1개와 공유 전자쌍 3개가 있으므로 N 주위의 모양은 삼각뿔형이고 결합 쌍극자가 상쇄되지 않아요.",
      },
    },

    // ── s2-2-q043 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "s2-2-q043": {
      // EN: <p>Pure liquid hexane, <span class="chem">C6H14</span>, does not conduct electricity. Why?</p>
      stem: "<p>순수한 액체 hexane <span class=\"chem\">C6H14</span>는 전기가 통하지 않아요. 왜 그런가요?</p>",
      options: [
        // EN: The covalent bonds in hexane are too strong.
        "hexane의 공유 결합이 너무 강하다.",
        // EN: Hexane has no ions and no delocalized electrons that are free to move.
        "hexane에는 자유롭게 움직일 수 있는 이온도, 비편재화된 전자도 없다.",
        // EN: The London (dispersion) forces between hexane molecules are too weak.
        "hexane 분자 사이의 런던 분산력이 너무 약하다.",
        // EN: The electrons in hexane are free to move but the molecules are not.
        "hexane의 전자는 자유롭게 움직일 수 있지만 분자는 움직일 수 없다.",
      ],
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that are free to move: ions or delocalized electrons.
        "전기가 통하려면 자유롭게 움직일 수 있는 전하를 띤 입자, 즉 이온이나 비편재화된 전자가 있어야 해요.",
      ],
      // EN: <p>Hexane is made of neutral molecules. All its valence electrons are held in covalent bonds. So there are <strong>no mobile ions and no delocalized electrons</strong> to carry charge.</p><p>This is true for most molecular covalent substances, as solids and as liquids.</p>
      solution: "<p>hexane은 중성 분자로 되어 있어요. 원자가 전자는 모두 공유 결합에 묶여 있어요. 그래서 전하를 운반할 <strong>움직이는 이온도, 비편재화된 전자도 없어요</strong>.</p><p>대부분의 분자성 공유 물질은 고체일 때도 액체일 때도 마찬가지예요.</p>",
      misconception: {
        // EN (option A): Bond strength is not the reason. A substance conducts only if it has charged particles that can move.
        "0": "결합의 세기는 이유가 아니에요. 움직일 수 있는 전하를 띤 입자가 있을 때만 전기가 통해요.",
        // EN (option C): Intermolecular forces affect the boiling point. They do not decide electrical conductivity.
        "2": "분자 간 힘은 끓는점에 영향을 줘요. 전기 전도성을 결정하지는 않아요.",
        // EN (option D): The electrons in hexane are held in covalent bonds between two atoms. They are not free to move through the liquid.
        "3": "hexane의 전자는 두 원자 사이의 공유 결합에 묶여 있어요. 액체 속을 자유롭게 움직일 수 없어요.",
      },
    },

    // ── s2-2-q044 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "s2-2-q044": {
      // EN: <p>What is overcome when liquid water boils?</p>
      stem: "<p>액체 물이 끓을 때 극복되는 것은 무엇인가요?</p>",
      options: [
        // EN: the covalent bonds between hydrogen and oxygen atoms
        "수소 원자와 산소 원자 사이의 공유 결합",
        // EN: the hydrogen bonds between water molecules
        "물 분자 사이의 수소 결합",
        // EN: the ionic bonds between water molecules
        "물 분자 사이의 이온 결합",
        // EN: the attraction between the nuclei and the electrons in each atom
        "각 원자의 원자핵과 전자 사이의 인력",
      ],
      hints: [
        // EN: Steam is still <span class="chem">H2O</span>. What has changed?
        "수증기도 여전히 <span class=\"chem\">H2O</span>예요. 무엇이 바뀌었을까요?",
        // EN: Boiling separates molecules from each other.
        "끓으면 분자가 서로 떨어져요.",
      ],
      // EN: <p>Boiling separates the molecules from each other. The molecules stay whole.</p><p>So boiling overcomes the <strong>intermolecular forces</strong>. In water the strongest of these is <strong>hydrogen bonding</strong>. The <span class="chem">O–H</span> covalent bonds inside each molecule do not break.</p>
      solution: "<p>끓으면 분자가 서로 떨어져요. 분자 자체는 그대로예요.</p><p>그러니까 끓을 때는 <strong>분자 간 힘</strong>이 극복돼요. 물에서 그중 가장 강한 힘은 <strong>수소 결합</strong>이에요. 분자 안의 <span class=\"chem\">O–H</span> 공유 결합은 끊어지지 않아요.</p>",
      misconception: {
        // EN (option A): If the <span class="chem">O–H</span> covalent bonds broke, the water would become hydrogen and oxygen. Steam is still made of <span class="chem">H2O</span> molecules.
        "0": "<span class=\"chem\">O–H</span> 공유 결합이 끊어진다면 물은 수소와 산소로 변할 거예요. 수증기도 여전히 <span class=\"chem\">H2O</span> 분자로 되어 있어요.",
        // EN (option C): Water molecules are neutral. There are no ions in pure water to form ionic bonds between molecules.
        "2": "물 분자는 중성이에요. 순수한 물에는 분자 사이에 이온 결합을 만들 이온이 없어요.",
        // EN (option D): Boiling does not remove electrons from atoms. It only separates whole molecules from each other.
        "3": "끓는다고 원자에서 전자가 떨어져 나가지 않아요. 분자 전체가 서로 떨어질 뿐이에요.",
      },
    },

    // ── s2-2-q045 · short · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q045": {
      // EN: <p>Ethanol and methoxymethane have the same molecular formula, <span class="chem">C2H6O</span>, and the same molar mass.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two isomers</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">ethanol</th><td><span class="chem">CH3CH2OH</span></td><td>78</td></tr><tr><th scope="row">methoxymethane</th><td><span class="chem">CH3OCH3</span></td><td>−25</td></tr></tbody></table></div><p>Explain why ethanol has the higher boiling point.</p>
      stem: "<p>ethanol과 methoxymethane은 분자식이 <span class=\"chem\">C2H6O</span>로 같고 몰 질량도 같아요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>두 이성질체</caption><thead><tr><th scope=\"col\">화합물</th><th scope=\"col\">구조식</th><th scope=\"col\">끓는점 / °C</th></tr></thead><tbody><tr><th scope=\"row\">ethanol</th><td><span class=\"chem\">CH3CH2OH</span></td><td>78</td></tr><tr><th scope=\"row\">methoxymethane</th><td><span class=\"chem\">CH3OCH3</span></td><td>−25</td></tr></tbody></table></div><p>ethanol의 끓는점이 더 높은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Name the strongest intermolecular force in <strong>each</strong> substance.
        "<strong>각</strong> 물질에서 가장 강한 분자 간 힘의 이름을 쓰세요.",
        // EN: Then say which force is stronger. Link this to the energy needed.
        "그런 다음 어느 힘이 더 강한지 쓰세요. 필요한 에너지와 연결하세요.",
      ],
      // EN: <p>Ethanol has hydrogen bonding between its molecules, because it has a hydrogen atom bonded to oxygen (<span class="chem">O–H</span>). Methoxymethane has no <span class="chem">O–H</span> bond, so it has only dipole–dipole forces (and London forces) between its molecules.</p><p>Hydrogen bonding is stronger than dipole–dipole forces, so more energy is needed to separate the ethanol molecules.</p>
      answer: "<p>ethanol은 산소와 결합한 수소 원자(<span class=\"chem\">O–H</span>)가 있으므로 분자 사이에 수소 결합이 있어요. methoxymethane에는 <span class=\"chem\">O–H</span> 결합이 없으므로 분자 사이에 쌍극자-쌍극자 힘(과 런던 분산력)만 있어요.</p><p>수소 결합은 쌍극자-쌍극자 힘보다 강하므로 ethanol 분자를 떼어 놓는 데 에너지가 더 많이 필요해요.</p>",
      markscheme: [
        // EN: Ethanol has hydrogen bonding (between molecules) AND methoxymethane has dipole–dipole forces (and London forces) only / no hydrogen bonding.
        "ethanol은 (분자 사이에) 수소 결합이 있다 그리고 methoxymethane은 쌍극자-쌍극자 힘(과 런던 분산력)만 있다 / 수소 결합이 없다.",
        // EN: Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules.
        "수소 결합이 (쌍극자-쌍극자 힘보다) 강하므로 분자를 떼어 놓는 데 에너지가 더 많이 필요하다.",
      ],
    },

    // ── s2-2-q046 · order · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q046": {
      // EN: <p>Put these four alkanes in order of boiling point. Put the <strong>lowest</strong> boiling point first.</p>
      stem: "<p>이 알케인 4가지를 끓는점 순서대로 나열하세요. 끓는점이 <strong>가장 낮은</strong> 것을 처음에 놓으세요.</p>",
      options: [
        // EN: 2,2-dimethylpropane, <span class="chem">C(CH3)4</span>
        "2,2-dimethylpropane, <span class=\"chem\">C(CH3)4</span>",
        // EN: 2-methylbutane, <span class="chem">(CH3)2CHCH2CH3</span>
        "2-methylbutane, <span class=\"chem\">(CH3)2CHCH2CH3</span>",
        // EN: pentane, <span class="chem">CH3CH2CH2CH2CH3</span>
        "pentane, <span class=\"chem\">CH3CH2CH2CH2CH3</span>",
        // EN: hexane, <span class="chem">CH3CH2CH2CH2CH2CH3</span>
        "hexane, <span class=\"chem\">CH3CH2CH2CH2CH2CH3</span>",
      ],
      hints: [
        // EN: All four molecules are non-polar. Which intermolecular force acts between them?
        "네 분자 모두 무극성이에요. 분자 사이에 어떤 분자 간 힘이 작용하나요?",
        // EN: Three of them are isomers, <span class="chem">C5H12</span>. The fourth has more electrons.
        "그중 셋은 이성질체 <span class=\"chem\">C5H12</span>예요. 나머지 하나는 전자가 더 많아요.",
        // EN: A more branched molecule is more compact. It has less surface area in contact with its neighbours.
        "가지가 많은 분자일수록 더 조밀해요. 이웃 분자와 맞닿는 표면적이 작아요.",
      ],
      // EN: <p>All four are non-polar, so only <strong>London (dispersion) forces</strong> act between the molecules.</p><p>The three <span class="chem">C5H12</span> isomers have the same number of electrons. More branching makes a molecule more compact, with less surface contact between molecules, so the London forces are weaker.</p><p>Hexane has more electrons and a longer chain, so it has the strongest London forces.</p><p>Boiling points: 2,2-dimethylpropane 10 °C; 2-methylbutane 28 °C; pentane 36 °C; hexane 69 °C.</p>
      solution: "<p>네 분자 모두 무극성이므로 분자 사이에는 <strong>런던 분산력</strong>만 작용해요.</p><p><span class=\"chem\">C5H12</span> 이성질체 셋은 전자 수가 같아요. 가지가 많을수록 분자가 조밀해져 분자끼리 맞닿는 표면이 줄어들므로 런던 분산력이 약해져요.</p><p>hexane은 전자가 더 많고 사슬이 더 길어서 런던 분산력이 가장 강해요.</p><p>끓는점: 2,2-dimethylpropane 10 °C, 2-methylbutane 28 °C, pentane 36 °C, hexane 69 °C.</p>",
    },

    // ── s2-2-q047 · mcq · exam · SL · Structure 2.2.9 · 1 mark
    "s2-2-q047": {
      // EN: <p>Three liquids have similar molar masses.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Three compounds of similar molar mass</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th></tr></thead><tbody><tr><th scope="row">butane</th><td><span class="chem">CH3CH2CH2CH3</span></td><td>58</td></tr><tr><th scope="row">propanone</th><td><span class="chem">CH3COCH3</span></td><td>58</td></tr><tr><th scope="row">propan-1-ol</th><td><span class="chem">CH3CH2CH2OH</span></td><td>60</td></tr></tbody></table></div><p>Which compound is the most volatile, and why?</p>
      stem: "<p>세 액체의 몰 질량은 비슷해요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>몰 질량이 비슷한 화합물 세 가지</caption><thead><tr><th scope=\"col\">화합물</th><th scope=\"col\">구조식</th><th scope=\"col\">몰 질량 / <span class=\"unit\">g mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\">butane</th><td><span class=\"chem\">CH3CH2CH2CH3</span></td><td>58</td></tr><tr><th scope=\"row\">propanone</th><td><span class=\"chem\">CH3COCH3</span></td><td>58</td></tr><tr><th scope=\"row\">propan-1-ol</th><td><span class=\"chem\">CH3CH2CH2OH</span></td><td>60</td></tr></tbody></table></div><p>휘발성이 가장 큰 화합물은 무엇이고, 그 이유는 무엇인가요?</p>",
      options: [
        // EN: Butane, because it has only London (dispersion) forces between its molecules.
        "butane, 분자 사이에 런던 분산력만 있기 때문이다.",
        // EN: Butane, because its covalent bonds are the weakest.
        "butane, 공유 결합이 가장 약하기 때문이다.",
        // EN: Propan-1-ol, because it has hydrogen bonding between its molecules.
        "propan-1-ol, 분자 사이에 수소 결합이 있기 때문이다.",
        // EN: Propanone, because it has dipole–dipole forces between its molecules.
        "propanone, 분자 사이에 쌍극자-쌍극자 힘이 있기 때문이다.",
      ],
      hints: [
        // EN: A volatile substance turns into a gas easily. It has a low boiling point.
        "휘발성 물질은 쉽게 기체가 돼요. 끓는점이 낮아요.",
        // EN: Find the strongest intermolecular force in each compound.
        "각 화합물에서 가장 강한 분자 간 힘을 찾아보세요.",
        // EN: For similar molar mass: London forces < dipole–dipole forces < hydrogen bonding.
        "몰 질량이 비슷하면: 런던 분산력 < 쌍극자-쌍극자 힘 < 수소 결합.",
      ],
      // EN: <p><strong>Volatile</strong> means the substance vaporizes easily. The most volatile compound has the weakest intermolecular forces.</p><p>Butane is non-polar: London forces only. Propanone is polar (<span class="chem">C=O</span>): dipole–dipole forces. Propan-1-ol has an <span class="chem">O–H</span> group: hydrogen bonding.</p><p>So <strong>butane</strong> is the most volatile. The boiling points agree: butane −1 °C, propanone 56 °C, propan-1-ol 97 °C.</p>
      solution: "<p><strong>휘발성</strong>이 크다는 것은 물질이 쉽게 기화한다는 뜻이에요. 휘발성이 가장 큰 화합물은 분자 간 힘이 가장 약해요.</p><p>butane은 무극성이에요: 런던 분산력만 있어요. propanone은 극성(<span class=\"chem\">C=O</span>)이에요: 쌍극자-쌍극자 힘이 있어요. propan-1-ol에는 <span class=\"chem\">O–H</span> 기가 있어요: 수소 결합이 있어요.</p><p>그래서 <strong>butane</strong>의 휘발성이 가장 커요. 끓는점도 이와 맞아요: butane −1 °C, propanone 56 °C, propan-1-ol 97 °C.</p>",
      misconception: {
        // EN (option B): The compound is right but the reason is wrong. Evaporation and boiling do not break covalent bonds. They overcome intermolecular forces.
        "1": "화합물은 맞지만 이유가 틀렸어요. 증발하거나 끓을 때 공유 결합은 끊어지지 않아요. 분자 간 힘이 극복될 뿐이에요.",
        // EN (option C): Hydrogen bonding is the strongest of these forces. Strong intermolecular forces make a substance <strong>less</strong> volatile.
        "2": "수소 결합은 이 힘들 중 가장 강해요. 분자 간 힘이 강하면 물질의 휘발성이 <strong>작아져요</strong>.",
        // EN (option D): Dipole–dipole forces are stronger than London forces alone (for similar molar mass). So propanone is less volatile than the compound with London forces only.
        "3": "(몰 질량이 비슷하면) 쌍극자-쌍극자 힘은 런던 분산력만 있을 때보다 강해요. 그래서 propanone은 런던 분산력만 있는 화합물보다 휘발성이 작아요.",
      },
    },

    // ── s2-2-q048 · short · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q048": {
      // EN: <p>Ethanol, <span class="chem">CH3CH2OH</span>, mixes with water in all proportions. Hexan-1-ol, <span class="chem">CH3(CH2)5OH</span>, is only slightly soluble in water.</p><p>Explain why ethanol is soluble in water, and why hexan-1-ol is much less soluble.</p>
      stem: "<p>ethanol <span class=\"chem\">CH3CH2OH</span>는 물과 어떤 비율로도 섞여요. hexan-1-ol <span class=\"chem\">CH3(CH2)5OH</span>는 물에 조금만 녹아요.</p><p>ethanol이 물에 녹는 이유와 hexan-1-ol이 훨씬 덜 녹는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Which part of each molecule can form hydrogen bonds with water?
        "각 분자의 어느 부분이 물과 수소 결합을 할 수 있나요?",
        // EN: What is different about the rest of the hexan-1-ol molecule?
        "hexan-1-ol 분자의 나머지 부분은 무엇이 다른가요?",
      ],
      // EN: <p>Ethanol has a hydroxyl (<span class="chem">O–H</span>) group, so it can form hydrogen bonds with water molecules. This is why it dissolves.</p><p>Hexan-1-ol also has a hydroxyl group, but it has a much longer non-polar hydrocarbon chain. The chain cannot form hydrogen bonds with water (it attracts water only by weak London forces), so the molecule as a whole is much less soluble.</p>
      answer: "<p>ethanol에는 하이드록시기(<span class=\"chem\">O–H</span>)가 있어서 물 분자와 수소 결합을 할 수 있어요. 그래서 녹아요.</p><p>hexan-1-ol에도 하이드록시기가 있지만 훨씬 긴 무극성 탄화수소 사슬이 있어요. 이 사슬은 물과 수소 결합을 할 수 없으므로(약한 런던 분산력으로만 물을 끌어당겨요) 분자 전체로는 훨씬 덜 녹아요.</p>",
      markscheme: [
        // EN: Ethanol / the hydroxyl (OH) group forms hydrogen bonds with water (molecules).
        "ethanol / 하이드록시(OH)기가 물 (분자)와 수소 결합을 한다.",
        // EN: Hexan-1-ol has a longer non-polar hydrocarbon chain, which cannot form hydrogen bonds with water. Accept: a larger part of the molecule is non-polar.
        "hexan-1-ol에는 물과 수소 결합을 할 수 없는 더 긴 무극성 탄화수소 사슬이 있다. 인정: 분자에서 무극성인 부분이 더 크다.",
      ],
    },

    // ── s2-2-q049 · short · challenge · SL · Structure 2.2.9 · 3 marks
    "s2-2-q049": {
      // EN: <p>Bromine, <span class="chem">Br2</span>, and iodine monochloride, <span class="chem">ICl</span>, have almost the same molar mass, and each molecule has 70 electrons.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two substances with 70 electrons in each molecule</caption><thead><tr><th scope="col">Substance</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row"><span class="chem">Br2</span></th><td>160</td><td>59</td></tr><tr><th scope="row"><span class="chem">ICl</span></th><td>162</td><td>97</td></tr></tbody></table></div><p>Electronegativity values from the data booklet: Cl 3.2, Br 3.0, I 2.7.</p><p>Explain why iodine monochloride has the higher boiling point.</p>
      stem: "<p>브로민 <span class=\"chem\">Br2</span>와 일염화 아이오딘 <span class=\"chem\">ICl</span>은 몰 질량이 거의 같고, 분자마다 전자가 70개 있어요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>분자마다 전자가 70개인 물질 두 가지</caption><thead><tr><th scope=\"col\">물질</th><th scope=\"col\">몰 질량 / <span class=\"unit\">g mol-1</span></th><th scope=\"col\">끓는점 / °C</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">Br2</span></th><td>160</td><td>59</td></tr><tr><th scope=\"row\"><span class=\"chem\">ICl</span></th><td>162</td><td>97</td></tr></tbody></table></div><p>데이터 부클릿의 전기 음성도 값: Cl 3.2, Br 3.0, I 2.7.</p><p>일염화 아이오딘의 끓는점이 더 높은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: The question gives the number of electrons. Which intermolecular force depends on this?
        "문제에 전자 수가 주어져 있어요. 어떤 분자 간 힘이 전자 수에 따라 달라지나요?",
        // EN: Use the electronegativity values. Is each molecule polar?
        "전기 음성도 값을 이용하세요. 각 분자는 극성인가요?",
        // EN: Finish by comparing the total strength of the forces and the energy needed.
        "마지막으로 힘의 전체 세기와 필요한 에너지를 비교하세요.",
      ],
      // EN: <p>Both molecules have the same number of electrons, so their London (dispersion) forces are similar in strength.</p><p><span class="chem">Br2</span> is non-polar, because the two atoms are the same. <span class="chem">ICl</span> is polar, because chlorine is more electronegative than iodine (3.2 and 2.7). So <span class="chem">ICl</span> also has dipole–dipole forces between its molecules.</p><p>The total intermolecular forces in <span class="chem">ICl</span> are stronger, so more energy is needed to separate its molecules.</p>
      answer: "<p>두 분자는 전자 수가 같으므로 런던 분산력의 세기가 비슷해요.</p><p><span class=\"chem\">Br2</span>는 두 원자가 같으므로 무극성이에요. <span class=\"chem\">ICl</span>은 염소가 아이오딘보다 전기 음성도가 크므로(3.2와 2.7) 극성이에요. 그래서 <span class=\"chem\">ICl</span>은 분자 사이에 쌍극자-쌍극자 힘도 있어요.</p><p><span class=\"chem\">ICl</span>의 분자 간 힘의 합이 더 강하므로 분자를 떼어 놓는 데 에너지가 더 많이 필요해요.</p>",
      markscheme: [
        // EN: London (dispersion) forces are similar in both, because the molecules have the same number of electrons / similar molar mass.
        "분자의 전자 수가 같으므로 / 몰 질량이 비슷하므로 두 물질의 런던 분산력은 비슷하다.",
        // EN: ICl is polar (Cl is more electronegative than I / electronegativity difference of 0.5) but Br<sub>2</sub> is non-polar, so ICl (also) has dipole–dipole forces.
        "ICl은 극성이지만(Cl이 I보다 전기 음성도가 크다 / 전기 음성도 차이 0.5) Br<sub>2</sub>는 무극성이므로, ICl에는 쌍극자-쌍극자 힘도 있다.",
        // EN: The intermolecular forces in ICl are stronger (overall), so more energy is needed to separate the molecules. Do not accept any reference to breaking covalent bonds.
        "ICl의 분자 간 힘이 (전체적으로) 더 강하므로 분자를 떼어 놓는 데 에너지가 더 많이 필요하다. 공유 결합이 끊어진다는 언급은 인정하지 않음.",
      ],
    },

    // ── s2-2-q050 · short · challenge · SL · Structure 2.2.9 · 4 marks
    "s2-2-q050": {
      // EN: <p>Hydrogen sulfide, <span class="chem">H2S</span>, has a higher molar mass than water, but a much lower boiling point.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two hydrides of group 16</caption><thead><tr><th scope="col">Substance</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row"><span class="chem">H2S</span></th><td>34</td><td>−60</td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td>18</td><td>100</td></tr></tbody></table></div><p>Electronegativity values from the data booklet: H 2.2, O 3.4, S 2.6.</p><p>(a) Deduce the molecular geometry of <span class="chem">H2S</span>. Give a reason.</p><p>(b) Deduce, with a reason, if the <span class="chem">H2S</span> molecule is polar.</p><p>(c) Explain why <span class="chem">H2S</span> has a lower boiling point than water.</p>
      stem: "<p>황화 수소 <span class=\"chem\">H2S</span>는 물보다 몰 질량이 크지만 끓는점은 훨씬 낮아요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>16족의 수소 화합물 두 가지</caption><thead><tr><th scope=\"col\">물질</th><th scope=\"col\">몰 질량 / <span class=\"unit\">g mol-1</span></th><th scope=\"col\">끓는점 / °C</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">H2S</span></th><td>34</td><td>−60</td></tr><tr><th scope=\"row\"><span class=\"chem\">H2O</span></th><td>18</td><td>100</td></tr></tbody></table></div><p>데이터 부클릿의 전기 음성도 값: H 2.2, O 3.4, S 2.6.</p><p>(a) <span class=\"chem\">H2S</span>의 분자 모양을 추론하시오 (deduce). 이유를 쓰시오.</p><p>(b) <span class=\"chem\">H2S</span> 분자가 극성인지 이유와 함께 추론하시오.</p><p>(c) <span class=\"chem\">H2S</span>의 끓는점이 물보다 낮은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: (a) Sulfur is in group 16, like oxygen. Count its bonding pairs and lone pairs.
        "(a) 황은 산소처럼 16족이에요. 공유 전자쌍과 비공유 전자쌍을 세어 보세요.",
        // EN: (b) Check two things: are the bonds polar, and do the bond dipoles cancel?
        "(b) 두 가지를 확인하세요. 결합이 극성인가요? 결합 쌍극자가 상쇄되나요?",
        // EN: (c) Name the strongest intermolecular force in each substance. Then compare their strengths.
        "(c) 각 물질에서 가장 강한 분자 간 힘의 이름을 쓰세요. 그런 다음 세기를 비교하세요.",
      ],
      // EN: <p>(a) Bent (V-shaped). Sulfur has four electron domains: two bonding pairs and two lone pairs.</p><p>(b) Polar. The <span class="chem">S–H</span> bonds are polar (difference 2.6 − 2.2 = 0.4), and because the molecule is bent the bond dipoles do not cancel.</p><p>(c) <span class="chem">H2S</span> has dipole–dipole forces and London forces between its molecules. Water has hydrogen bonding, because H is bonded to the very electronegative O atom. Hydrogen bonding is stronger, so more energy is needed to separate water molecules. This outweighs the stronger London forces in <span class="chem">H2S</span>.</p>
      answer: "<p>(a) 굽은 형(V자형). 황에는 전자 영역이 4개 있어요. 공유 전자쌍 2개와 비공유 전자쌍 2개예요.</p><p>(b) 극성. <span class=\"chem\">S–H</span> 결합은 극성이고(차이 2.6 − 2.2 = 0.4), 분자가 굽은 형이므로 결합 쌍극자가 상쇄되지 않아요.</p><p>(c) <span class=\"chem\">H2S</span>는 분자 사이에 쌍극자-쌍극자 힘과 런던 분산력이 있어요. 물은 H가 전기 음성도가 매우 큰 O 원자와 결합해 있으므로 수소 결합이 있어요. 수소 결합이 더 강하므로 물 분자를 떼어 놓는 데 에너지가 더 많이 필요해요. 이 효과가 <span class=\"chem\">H2S</span>의 더 강한 런던 분산력보다 커요.</p>",
      markscheme: [
        // EN: (a) Bent / V-shaped / angular AND two bonding pairs and two lone (non-bonding) pairs on sulfur / four electron domains with two lone pairs.
        "(a) 굽은 형 / V자형 / 꺾인 모양 그리고 황에 공유 전자쌍 2개와 비공유 전자쌍 2개 / 전자 영역 4개 중 비공유 전자쌍 2개.",
        // EN: (b) Polar, because the bond dipoles do not cancel / the molecule is not symmetrical (bent). Allow follow-through from the shape in (a).
        "(b) 결합 쌍극자가 상쇄되지 않으므로 / 분자가 대칭이 아니므로(굽은 형) 극성이다. (a)의 모양에서 이어진 답(follow-through)도 인정.",
        // EN: (c) H<sub>2</sub>S has dipole–dipole forces (and London forces) AND water has hydrogen bonding.
        "(c) H<sub>2</sub>S에는 쌍극자-쌍극자 힘(과 런던 분산력)이 있다 그리고 물에는 수소 결합이 있다.",
        // EN: (c) Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules of water.
        "(c) 수소 결합이 (쌍극자-쌍극자 힘보다) 강하므로 물 분자를 떼어 놓는 데 에너지가 더 많이 필요하다.",
      ],
    },

    // ── s2-2-q051 · mcq · challenge · SL · Structure 2.2.9 · 1 mark
    "s2-2-q051": {
      // EN: <p>Ethanal, <span class="chem">CH3CHO</span>, and propane, <span class="chem">CH3CH2CH3</span>, both have a molar mass of 44 <span class="unit">g mol-1</span>. Ethanal boils at 20 °C and propane boils at −42 °C.</p><p>A student explains: "Ethanal has the higher boiling point because it contains hydrogen and oxygen, so it forms hydrogen bonds between its molecules. Propane has only London (dispersion) forces."</p><p>Which statement correctly identifies the error in this explanation?</p>
      stem: "<p>ethanal <span class=\"chem\">CH3CHO</span>와 propane <span class=\"chem\">CH3CH2CH3</span>는 둘 다 몰 질량이 44 <span class=\"unit\">g mol-1</span>예요. ethanal은 20 °C에서, propane은 −42 °C에서 끓어요.</p><p>한 학생이 이렇게 설명했어요: \"ethanal에는 수소와 산소가 있으므로 분자 사이에 수소 결합을 만든다. 그래서 끓는점이 더 높다. propane에는 런던 분산력만 있다.\"</p><p>이 설명의 오류를 옳게 지적한 것은 무엇인가요?</p>",
      options: [
        // EN: There is no error.
        "오류가 없다.",
        // EN: Ethanal is non-polar, so it also has only London (dispersion) forces.
        "ethanal은 무극성이므로 ethanal에도 런던 분산력만 있다.",
        // EN: In ethanal every hydrogen atom is bonded to carbon, so there is no hydrogen bonding between ethanal molecules. The extra force is dipole–dipole.
        "ethanal에서는 모든 수소 원자가 탄소와 결합해 있으므로 ethanal 분자 사이에 수소 결합이 없다. 추가로 작용하는 힘은 쌍극자-쌍극자 힘이다.",
        // EN: Boiling breaks the <span class="chem">C=O</span> bond in ethanal, and this bond is stronger than the bonds in propane.
        "끓을 때 ethanal의 <span class=\"chem\">C=O</span> 결합이 끊어지는데, 이 결합은 propane의 결합보다 강하다.",
      ],
      hints: [
        // EN: Draw ethanal. Is any hydrogen atom bonded to oxygen?
        "ethanal을 그려 보세요. 산소와 결합한 수소 원자가 있나요?",
        // EN: Ethanal has a polar <span class="chem">C=O</span> bond. Which intermolecular force do polar molecules have?
        "ethanal에는 극성인 <span class=\"chem\">C=O</span> 결합이 있어요. 극성 분자에는 어떤 분자 간 힘이 있나요?",
      ],
      // EN: <p>Hydrogen bonding needs H <strong>covalently bonded to</strong> N, O or F. In ethanal the oxygen is double-bonded to carbon and all four hydrogens are bonded to carbon. So ethanal molecules do not hydrogen-bond to each other.</p><p>Ethanal is polar, so it has <strong>dipole–dipole forces</strong> as well as London forces. Propane is non-polar and has London forces only. Dipole–dipole forces are stronger than London forces alone (for similar molar mass), so ethanal has the higher boiling point.</p>
      solution: "<p>수소 결합이 생기려면 H가 N, O, F와 <strong>공유 결합</strong>해 있어야 해요. ethanal에서 산소는 탄소와 이중 결합해 있고 수소 4개는 모두 탄소와 결합해 있어요. 그래서 ethanal 분자끼리는 수소 결합을 하지 않아요.</p><p>ethanal은 극성이므로 런던 분산력뿐 아니라 <strong>쌍극자-쌍극자 힘</strong>도 있어요. propane은 무극성이고 런던 분산력만 있어요. (몰 질량이 비슷하면) 쌍극자-쌍극자 힘은 런던 분산력만 있을 때보다 강하므로 ethanal의 끓는점이 더 높아요.</p>",
      misconception: {
        // EN (option A): Check the structure of ethanal: <span class="chem">CH3–CH=O</span>. Containing H and O is not enough. Which atom is each H bonded to?
        "0": "ethanal의 구조를 확인하세요: <span class=\"chem\">CH3–CH=O</span>. H와 O가 들어 있는 것만으로는 부족해요. 각 H가 어느 원자와 결합해 있나요?",
        // EN (option B): Ethanal is polar. The <span class="chem">C=O</span> bond has an electronegativity difference of 3.4 − 2.6 = 0.8, and its dipole is not cancelled.
        "1": "ethanal은 극성이에요. <span class=\"chem\">C=O</span> 결합의 전기 음성도 차이는 3.4 − 2.6 = 0.8이고, 이 쌍극자는 상쇄되지 않아요.",
        // EN (option D): Boiling does not break covalent bonds. It only overcomes the forces between molecules.
        "3": "끓을 때 공유 결합은 끊어지지 않아요. 분자 사이의 힘만 극복돼요.",
      },
    },

    // ── s2-2-q052 · mcq · foundation · SL · Structure 2.2.10 · 1 mark
    "s2-2-q052": {
      // EN: <p>How is the retardation factor, <i>R</i><sub>F</sub>, of a spot calculated?</p>
      stem: "<p>점의 이동률 <i>R</i><sub>F</sub>는 어떻게 계산하나요?</p>",
      options: [
        // EN: distance moved by the solvent front ÷ distance moved by the spot
        "용매 전선이 이동한 거리 ÷ 점이 이동한 거리",
        // EN: distance moved by the spot ÷ distance moved by the solvent front, both measured from the baseline
        "점이 이동한 거리 ÷ 용매 전선이 이동한 거리, 둘 다 출발선에서 잰다",
        // EN: distance moved by the spot ÷ total length of the paper
        "점이 이동한 거리 ÷ 종이의 전체 길이",
        // EN: distance moved by the solvent front − distance moved by the spot
        "용매 전선이 이동한 거리 − 점이 이동한 거리",
      ],
      hints: [
        // EN: The value is always between 0 and 1.
        "값은 항상 0과 1 사이예요.",
        // EN: Both distances start at the baseline, where the sample was placed.
        "두 거리 모두 시료를 찍은 출발선에서 시작해요.",
      ],
      // EN: <p><i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.</p><p>Measure both distances <strong>from the baseline</strong>. The value has no unit and lies between 0 and 1.</p>
      solution: "<p><i>R</i><sub>F</sub> = 점이 이동한 거리 ÷ 용매 전선이 이동한 거리.</p><p>두 거리 모두 <strong>출발선에서</strong> 재요. 값에는 단위가 없고 0과 1 사이에 있어요.</p>",
      misconception: {
        // EN (option A): This is upside down. It would give a value greater than 1. A spot cannot move further than the solvent, so <i>R</i><sub>F</sub> is never more than 1.
        "0": "분자와 분모가 뒤바뀌었어요. 이렇게 하면 값이 1보다 커져요. 점은 용매보다 더 멀리 이동할 수 없으므로 <i>R</i><sub>F</sub>는 절대 1보다 크지 않아요.",
        // EN (option C): Use the distance the solvent moved, not the length of the paper. The solvent front does not usually reach the top of the paper.
        "2": "종이의 길이가 아니라 용매가 이동한 거리를 쓰세요. 용매 전선은 보통 종이 맨 위까지 가지 않아요.",
        // EN (option D): <i>R</i><sub>F</sub> is a ratio, not a difference. It has no unit.
        "3": "<i>R</i><sub>F</sub>는 차가 아니라 비예요. 단위가 없어요.",
      },
    },

    // ── s2-2-q053 · numeric · foundation · SL · Structure 2.2.10 · 1 mark
    "s2-2-q053": {
      // EN: <p>In a paper chromatography experiment, a spot of dye moves 3.6 cm from the baseline. The solvent front moves 8.0 cm from the baseline.</p><p>Calculate the <i>R</i><sub>F</sub> value of the dye. Give your answer to 2 significant figures.</p>
      stem: "<p>종이 크로마토그래피 실험에서 염료 점이 출발선에서 3.6 cm 이동했어요. 용매 전선은 출발선에서 8.0 cm 이동했어요.</p><p>염료의 <i>R</i><sub>F</sub> 값을 계산하시오 (calculate). 답은 유효 숫자 2자리로 쓰시오.</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.
        "<i>R</i><sub>F</sub> = 점이 이동한 거리 ÷ 용매 전선이 이동한 거리.",
        // EN: The answer must be less than 1 and has no unit.
        "답은 1보다 작아야 하고 단위가 없어요.",
      ],
      // EN: <div class="worked__math"><i>R</i><sub>F</sub> = 3.6 cm ÷ 8.0 cm = 0.45</div><p>The units cancel, so <i>R</i><sub>F</sub> has no unit.</p>
      solution: "<div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.6 cm ÷ 8.0 cm = 0.45</div><p>단위가 약분되므로 <i>R</i><sub>F</sub>에는 단위가 없어요.</p>",
    },

    // ── s2-2-q054 · numeric · exam · SL · Structure 2.2.10 · 1 mark
    "s2-2-q054": {
      // EN: <p>The diagram shows a paper chromatogram of one dye. A ruler is placed next to the paper. All the labelled distances are measured in cm from the <strong>bottom edge</strong> of the paper.</p><p><svg viewBox="0 0 300 242" width="300" height="242" role="img" style="max-width:100%;height:auto" aria-label="Paper chromatogram with a ruler. Distances from the bottom edge of the paper: baseline 1.5 cm, centre of the spot 6.9 cm, solvent front 10.5 cm, top of the paper 12.0 cm."><line x1="40" x2="40" y1="230" y2="26" stroke="currentColor" stroke-width="1.2"/><line x1="32" x2="40" y1="230" y2="230" stroke="currentColor" stroke-width="1"/><text x="28" y="234" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="35" x2="40" y1="213" y2="213" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="196" y2="196" stroke="currentColor" stroke-width="1"/><text x="28" y="200" text-anchor="end" font-size="11" fill="currentColor">2</text><line x1="35" x2="40" y1="179" y2="179" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="162" y2="162" stroke="currentColor" stroke-width="1"/><text x="28" y="166" text-anchor="end" font-size="11" fill="currentColor">4</text><line x1="35" x2="40" y1="145" y2="145" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="128" y2="128" stroke="currentColor" stroke-width="1"/><text x="28" y="132" text-anchor="end" font-size="11" fill="currentColor">6</text><line x1="35" x2="40" y1="111" y2="111" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="94" y2="94" stroke="currentColor" stroke-width="1"/><text x="28" y="98" text-anchor="end" font-size="11" fill="currentColor">8</text><line x1="35" x2="40" y1="77" y2="77" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="60" y2="60" stroke="currentColor" stroke-width="1"/><text x="28" y="64" text-anchor="end" font-size="11" fill="currentColor">10</text><line x1="35" x2="40" y1="43" y2="43" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="26" y2="26" stroke="currentColor" stroke-width="1"/><text x="28" y="30" text-anchor="end" font-size="11" fill="currentColor">12</text><text x="28" y="11" text-anchor="end" font-size="11" fill="currentColor">cm</text><rect x="56" y="26" width="84" height="204" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="56" x2="140" y1="204.5" y2="204.5" stroke="currentColor" stroke-width="1.2"/><line x1="56" x2="140" y1="51.5" y2="51.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M92 204.5l6 -6m-6 6l6 6m-6 -6l-6 -6m6 6l-6 6" stroke="currentColor" stroke-width="1.2" fill="none"/><ellipse cx="98" cy="112.69999999999999" rx="8" ry="5.5" fill="currentColor" fill-opacity="0.55" stroke="currentColor"/><line x1="142" x2="152" y1="26" y2="26" stroke="currentColor" stroke-width="1"/><text x="156" y="30" font-size="12" fill="currentColor">top of paper, 12.0</text><line x1="142" x2="152" y1="51.5" y2="51.5" stroke="currentColor" stroke-width="1"/><text x="156" y="55.5" font-size="12" fill="currentColor">solvent front, 10.5</text><line x1="142" x2="152" y1="112.69999999999999" y2="112.69999999999999" stroke="currentColor" stroke-width="1"/><text x="156" y="116.69999999999999" font-size="12" fill="currentColor">centre of spot, 6.9</text><line x1="142" x2="152" y1="204.5" y2="204.5" stroke="currentColor" stroke-width="1"/><text x="156" y="208.5" font-size="12" fill="currentColor">baseline, 1.5</text><line x1="142" x2="152" y1="230" y2="230" stroke="currentColor" stroke-width="1"/><text x="156" y="234" font-size="12" fill="currentColor">bottom edge, 0.0</text></svg></p><p>Calculate the <i>R</i><sub>F</sub> value of the dye. Give your answer to 2 significant figures.</p>
      stem: "<p>그림은 염료 한 가지의 종이 크로마토그램이에요. 종이 옆에 자가 놓여 있어요. 표시된 거리는 모두 종이의 <strong>아래 끝</strong>에서 cm 단위로 잰 값이에요.</p><p><svg viewBox=\"0 0 300 242\" width=\"300\" height=\"242\" role=\"img\" style=\"max-width:100%;height:auto\" aria-label=\"자가 함께 있는 종이 크로마토그램. 종이 아래 끝에서 잰 거리: 출발선 1.5 cm, 점의 중심 6.9 cm, 용매 전선 10.5 cm, 종이 위 끝 12.0 cm.\"><line x1=\"40\" x2=\"40\" y1=\"230\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"32\" x2=\"40\" y1=\"230\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"234\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"35\" x2=\"40\" y1=\"213\" y2=\"213\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"196\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"200\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"35\" x2=\"40\" y1=\"179\" y2=\"179\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"162\" y2=\"162\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"166\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"35\" x2=\"40\" y1=\"145\" y2=\"145\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"128\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"132\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">6</text><line x1=\"35\" x2=\"40\" y1=\"111\" y2=\"111\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"94\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"98\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">8</text><line x1=\"35\" x2=\"40\" y1=\"77\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"60\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"64\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">10</text><line x1=\"35\" x2=\"40\" y1=\"43\" y2=\"43\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"26\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"30\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">12</text><text x=\"28\" y=\"11\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">cm</text><rect x=\"56\" y=\"26\" width=\"84\" height=\"204\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"56\" x2=\"140\" y1=\"204.5\" y2=\"204.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"56\" x2=\"140\" y1=\"51.5\" y2=\"51.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/><path d=\"M92 204.5l6 -6m-6 6l6 6m-6 -6l-6 -6m6 6l-6 6\" stroke=\"currentColor\" stroke-width=\"1.2\" fill=\"none\"/><ellipse cx=\"98\" cy=\"112.69999999999999\" rx=\"8\" ry=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.55\" stroke=\"currentColor\"/><line x1=\"142\" x2=\"152\" y1=\"26\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"30\" font-size=\"12\" fill=\"currentColor\">종이 위 끝, 12.0</text><line x1=\"142\" x2=\"152\" y1=\"51.5\" y2=\"51.5\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"55.5\" font-size=\"12\" fill=\"currentColor\">용매 전선, 10.5</text><line x1=\"142\" x2=\"152\" y1=\"112.69999999999999\" y2=\"112.69999999999999\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"116.69999999999999\" font-size=\"12\" fill=\"currentColor\">점의 중심, 6.9</text><line x1=\"142\" x2=\"152\" y1=\"204.5\" y2=\"204.5\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"208.5\" font-size=\"12\" fill=\"currentColor\">출발선, 1.5</text><line x1=\"142\" x2=\"152\" y1=\"230\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"234\" font-size=\"12\" fill=\"currentColor\">아래 끝, 0.0</text></svg></p><p>염료의 <i>R</i><sub>F</sub> 값을 계산하시오 (calculate). 답은 유효 숫자 2자리로 쓰시오.</p>",
      hints: [
        // EN: Both distances in the <i>R</i><sub>F</sub> formula start at the baseline, not at the bottom edge.
        "<i>R</i><sub>F</sub> 식의 두 거리는 모두 아래 끝이 아니라 출발선에서 시작해요.",
        // EN: Distance moved by the spot = 6.9 − 1.5. Find the distance moved by the solvent front in the same way.
        "점이 이동한 거리 = 6.9 − 1.5. 용매 전선이 이동한 거리도 같은 방법으로 구하세요.",
        // EN: You do not need the position of the top of the paper.
        "종이 위 끝의 위치는 필요 없어요.",
      ],
      // EN: <div class="worked__math">distance moved by spot = 6.9 − 1.5 = 5.4 cm</div><div class="worked__math">distance moved by solvent front = 10.5 − 1.5 = 9.0 cm</div><div class="worked__math"><i>R</i><sub>F</sub> = 5.4 cm ÷ 9.0 cm = 0.60</div><p>Common slips: 6.9 ÷ 10.5 = 0.66 (measured from the bottom edge) and 6.9 ÷ 12.0 = 0.58 (used the top of the paper).</p>
      solution: "<div class=\"worked__math\">점이 이동한 거리 = 6.9 − 1.5 = 5.4 cm</div><div class=\"worked__math\">용매 전선이 이동한 거리 = 10.5 − 1.5 = 9.0 cm</div><div class=\"worked__math\"><i>R</i><sub>F</sub> = 5.4 cm ÷ 9.0 cm = 0.60</div><p>흔한 실수: 6.9 ÷ 10.5 = 0.66(아래 끝에서 잼), 6.9 ÷ 12.0 = 0.58(종이 위 끝을 씀).</p>",
    },

    // ── s2-2-q055 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "s2-2-q055": {
      // EN: <p>Two compounds, P and Q, are separated by thin layer chromatography (TLC). The stationary phase is silica, which is polar. The mobile phase is hexane, which is non-polar.</p><p>P and Q have the same structure, except that P has a hydroxyl (<span class="chem">–OH</span>) group where Q has a hydrogen atom.</p><p>The two spots have <i>R</i><sub>F</sub> values of 0.21 and 0.74. Which row is correct?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col"><i>R</i><sub>F</sub> of P</th><th scope="col">Reason</th></tr></thead><tbody><tr><th scope="row">A</th><td>0.21</td><td>P is more strongly attracted to the polar stationary phase</td></tr><tr><th scope="row">B</th><td>0.21</td><td>P is more strongly attracted to the non-polar mobile phase</td></tr><tr><th scope="row">C</th><td>0.74</td><td>P is more strongly attracted to the polar stationary phase</td></tr><tr><th scope="row">D</th><td>0.74</td><td>P is more strongly attracted to the non-polar mobile phase</td></tr></tbody></table></div>
      stem: "<p>두 화합물 P와 Q를 얇은 막 크로마토그래피(TLC)로 분리해요. 고정상은 극성인 실리카예요. 이동상은 무극성인 hexane이에요.</p><p>P와 Q는 구조가 같은데, Q의 수소 원자 하나가 있는 자리에 P는 하이드록시기(<span class=\"chem\">–OH</span>)가 있어요.</p><p>두 점의 <i>R</i><sub>F</sub> 값은 0.21과 0.74예요. 옳은 행은 무엇인가요?</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>보기</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">P의 <i>R</i><sub>F</sub></th><th scope=\"col\">이유</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>0.21</td><td>P가 극성 고정상에 더 강하게 끌린다</td></tr><tr><th scope=\"row\">B</th><td>0.21</td><td>P가 무극성 이동상에 더 강하게 끌린다</td></tr><tr><th scope=\"row\">C</th><td>0.74</td><td>P가 극성 고정상에 더 강하게 끌린다</td></tr><tr><th scope=\"row\">D</th><td>0.74</td><td>P가 무극성 이동상에 더 강하게 끌린다</td></tr></tbody></table></div>",
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
        // EN: Which compound is more polar, P or Q?
        "P와 Q 중 어느 화합물의 극성이 더 큰가요?",
        // EN: A component that is strongly attracted to the stationary phase spends more time not moving.
        "고정상에 강하게 끌리는 성분은 움직이지 않고 머무는 시간이 길어요.",
        // EN: A small <i>R</i><sub>F</sub> means the spot moved a short distance.
        "<i>R</i><sub>F</sub>가 작다는 것은 점이 짧은 거리를 이동했다는 뜻이에요.",
      ],
      // EN: <p>The <span class="chem">–OH</span> group makes <strong>P more polar</strong> than Q. P can form hydrogen bonds with the polar silica.</p><p>So P is more strongly attracted to the <strong>stationary phase</strong>. It is held back and moves a shorter distance: <i>R</i><sub>F</sub> = <strong>0.21</strong>.</p><p>Q is less polar. It is more attracted to the non-polar mobile phase and is carried further: <i>R</i><sub>F</sub> = 0.74.</p>
      solution: "<p><span class=\"chem\">–OH</span> 기 때문에 <strong>P가 Q보다 극성이 커요</strong>. P는 극성인 실리카와 수소 결합을 할 수 있어요.</p><p>그래서 P는 <strong>고정상</strong>에 더 강하게 끌려요. 붙잡혀 있어서 더 짧은 거리를 이동해요: <i>R</i><sub>F</sub> = <strong>0.21</strong>.</p><p>Q는 극성이 더 작아요. 무극성 이동상에 더 끌려서 더 멀리 운반돼요: <i>R</i><sub>F</sub> = 0.74.</p>",
      misconception: {
        // EN (option B): The <i>R</i><sub>F</sub> value is right, but the reason is wrong. A compound that is strongly attracted to the mobile phase is carried further and has a high <i>R</i><sub>F</sub>. Also, P is the more polar compound, so it is less attracted to hexane than Q is.
        "1": "<i>R</i><sub>F</sub> 값은 맞지만 이유가 틀렸어요. 이동상에 강하게 끌리는 화합물은 더 멀리 운반되어 <i>R</i><sub>F</sub>가 커요. 또 P는 극성이 더 큰 화합물이므로 Q보다 hexane에 덜 끌려요.",
        // EN (option C): The reason is right, but it leads to the other value. A compound that is strongly attracted to the stationary phase is held back, so it moves a short distance.
        "2": "이유는 맞지만 이 이유라면 다른 값이 돼요. 고정상에 강하게 끌리는 화합물은 붙잡혀 있으므로 짧은 거리를 이동해요.",
        // EN (option D): The polarity logic is reversed. The hydroxyl group makes P more polar (it can hydrogen-bond to silica), so P is attracted more to the stationary phase, not to hexane.
        "3": "극성에 대한 논리가 거꾸로예요. 하이드록시기 때문에 P의 극성이 더 크므로(실리카와 수소 결합 가능) P는 hexane이 아니라 고정상에 더 끌려요.",
      },
    },

    // ── s2-2-q056 · short · exam · SL · Structure 2.2.10 · 2 marks
    "s2-2-q056": {
      // EN: <p>A mixture of two dyes is separated by paper chromatography. One dye moves further up the paper than the other.</p><p>Explain why the two dyes separate.</p>
      stem: "<p>두 염료의 혼합물을 종이 크로마토그래피로 분리해요. 한 염료가 다른 염료보다 종이 위쪽으로 더 멀리 이동해요.</p><p>두 염료가 분리되는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Chromatography has two phases. Name them.
        "크로마토그래피에는 상이 두 가지 있어요. 이름을 쓰세요.",
        // EN: Each dye is attracted to both phases. What decides how far a dye moves?
        "각 염료는 두 상 모두에 끌려요. 염료가 얼마나 멀리 이동할지는 무엇이 결정하나요?",
      ],
      // EN: <p>The two dyes have different relative attractions (intermolecular forces) to the mobile phase and to the stationary phase.</p><p>The dye that is more strongly attracted to (more soluble in) the mobile phase, and less strongly attracted to the stationary phase, is carried further by the solvent. It has the higher <i>R</i><sub>F</sub> value.</p>
      answer: "<p>두 염료는 이동상과 고정상에 대한 상대적인 인력(분자 간 힘)이 서로 달라요.</p><p>이동상에 더 강하게 끌리고(이동상에 더 잘 녹고) 고정상에 덜 끌리는 염료가 용매에 의해 더 멀리 운반돼요. 이 염료의 <i>R</i><sub>F</sub> 값이 더 커요.</p>",
      markscheme: [
        // EN: The dyes have different (relative) attractions / intermolecular forces to the mobile phase and the stationary phase. Accept: different solubility in the solvent / different adsorption on the stationary phase.
        "두 염료는 이동상과 고정상에 대한 (상대적인) 인력 / 분자 간 힘이 다르다. 인정: 용매에 대한 용해도가 다르다 / 고정상에 대한 흡착 정도가 다르다.",
        // EN: The dye that is more attracted to (more soluble in) the mobile phase / less attracted to the stationary phase moves further (has the higher R<sub>F</sub>).
        "이동상에 더 끌리는(이동상에 더 잘 녹는) / 고정상에 덜 끌리는 염료가 더 멀리 이동한다(R<sub>F</sub>가 더 크다).",
      ],
    },

    // ── s2-2-q057 · multi · exam · SL · Structure 2.2.10 · 2 marks
    "s2-2-q057": {
      // EN: <p>A food colouring, M, is tested by paper chromatography. The solvent front moves 10.0 cm from the baseline. M gives three spots, at 2.0 cm, 5.5 cm and 8.0 cm from the baseline.</p><p>Five pure dyes are tested on a <strong>second</strong> piece of the same paper with the same solvent. On this paper, the solvent front moves 8.0 cm from the baseline.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Second chromatogram (solvent front at 8.0 cm)</caption><thead><tr><th scope="col">Pure dye</th><th scope="col">Distance moved by spot / cm</th></tr></thead><tbody><tr><th scope="row">A</th><td>1.6</td></tr><tr><th scope="row">B</th><td>4.4</td></tr><tr><th scope="row">C</th><td>5.5</td></tr><tr><th scope="row">D</th><td>6.4</td></tr><tr><th scope="row">E</th><td>2.0</td></tr></tbody></table></div><p>Which dyes could be present in M? Select all that apply.</p>
      stem: "<p>식용 색소 M을 종이 크로마토그래피로 검사해요. 용매 전선은 출발선에서 10.0 cm 이동했어요. M은 출발선에서 2.0 cm, 5.5 cm, 8.0 cm인 곳에 점 3개를 나타내요.</p><p>순수한 염료 5가지를 같은 종이의 <strong>두 번째</strong> 조각에서 같은 용매로 검사해요. 이 종이에서는 용매 전선이 출발선에서 8.0 cm 이동했어요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>두 번째 크로마토그램(용매 전선 8.0 cm)</caption><thead><tr><th scope=\"col\">순수한 염료</th><th scope=\"col\">점이 이동한 거리 / cm</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>1.6</td></tr><tr><th scope=\"row\">B</th><td>4.4</td></tr><tr><th scope=\"row\">C</th><td>5.5</td></tr><tr><th scope=\"row\">D</th><td>6.4</td></tr><tr><th scope=\"row\">E</th><td>2.0</td></tr></tbody></table></div><p>M에 들어 있을 수 있는 염료는 무엇인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
        // EN: E
        "E",
      ],
      hints: [
        // EN: The solvent fronts moved different distances, so you cannot compare distances directly.
        "용매 전선이 이동한 거리가 다르므로 거리를 직접 비교할 수 없어요.",
        // EN: Calculate <i>R</i><sub>F</sub> for each spot of M (divide by 10.0) and for each pure dye (divide by 8.0).
        "M의 각 점(10.0으로 나누기)과 순수한 각 염료(8.0으로 나누기)의 <i>R</i><sub>F</sub>를 계산하세요.",
        // EN: The same dye has the same <i>R</i><sub>F</sub> under the same conditions.
        "같은 조건에서 같은 염료는 <i>R</i><sub>F</sub>가 같아요.",
      ],
      // EN: <p>Spots of M (solvent front 10.0 cm):</p><div class="worked__math">2.0 ÷ 10.0 = 0.20</div><div class="worked__math">5.5 ÷ 10.0 = 0.55</div><div class="worked__math">8.0 ÷ 10.0 = 0.80</div><p>Pure dyes (solvent front 8.0 cm):</p><div class="worked__math">A: 1.6 ÷ 8.0 = 0.20</div><div class="worked__math">B: 4.4 ÷ 8.0 = 0.55</div><div class="worked__math">C: 5.5 ÷ 8.0 = 0.69</div><div class="worked__math">D: 6.4 ÷ 8.0 = 0.80</div><div class="worked__math">E: 2.0 ÷ 8.0 = 0.25</div><p>The <i>R</i><sub>F</sub> values of <strong>A, B and D</strong> match the three spots of M. C and E moved the same <em>distances</em> as spots of M, but their <i>R</i><sub>F</sub> values do not match.</p>
      solution: "<p>M의 점(용매 전선 10.0 cm):</p><div class=\"worked__math\">2.0 ÷ 10.0 = 0.20</div><div class=\"worked__math\">5.5 ÷ 10.0 = 0.55</div><div class=\"worked__math\">8.0 ÷ 10.0 = 0.80</div><p>순수한 염료(용매 전선 8.0 cm):</p><div class=\"worked__math\">A: 1.6 ÷ 8.0 = 0.20</div><div class=\"worked__math\">B: 4.4 ÷ 8.0 = 0.55</div><div class=\"worked__math\">C: 5.5 ÷ 8.0 = 0.69</div><div class=\"worked__math\">D: 6.4 ÷ 8.0 = 0.80</div><div class=\"worked__math\">E: 2.0 ÷ 8.0 = 0.25</div><p><strong>A, B, D</strong>의 <i>R</i><sub>F</sub> 값이 M의 점 3개와 일치해요. C와 E는 M의 점과 같은 <em>거리</em>를 이동했지만 <i>R</i><sub>F</sub> 값은 일치하지 않아요.</p>",
      misconception: {
        // EN (option C): Dye C moved 5.5 cm, the same distance as one spot of M. But the solvent moved a different distance on the two papers. Compare <i>R</i><sub>F</sub> values: C has 5.5 ÷ 8.0 = 0.69, and no spot of M has this value.
        "2": "염료 C는 M의 점 하나와 같은 5.5 cm를 이동했어요. 하지만 두 종이에서 용매가 이동한 거리가 달라요. <i>R</i><sub>F</sub> 값을 비교하세요: C는 5.5 ÷ 8.0 = 0.69이고, M에는 이 값을 가진 점이 없어요.",
        // EN (option E): Dye E moved 2.0 cm, the same distance as one spot of M. But its <i>R</i><sub>F</sub> is 2.0 ÷ 8.0 = 0.25, and the spot of M has 2.0 ÷ 10.0 = 0.20. Compare <i>R</i><sub>F</sub> values, not distances.
        "4": "염료 E는 M의 점 하나와 같은 2.0 cm를 이동했어요. 하지만 E의 <i>R</i><sub>F</sub>는 2.0 ÷ 8.0 = 0.25이고, M의 점은 2.0 ÷ 10.0 = 0.20이에요. 거리가 아니라 <i>R</i><sub>F</sub> 값을 비교하세요.",
      },
    },

    // ── s2-2-q058 · numeric · challenge · SL · Structure 2.2.10 · 2 marks
    "s2-2-q058": {
      // EN: <p>Under certain conditions, a compound has an <i>R</i><sub>F</sub> value of 0.62.</p><p>A student draws the baseline 2.0 cm above the bottom edge of a TLC plate. The solvent front stops 14.0 cm above the bottom edge.</p><p>How far above the <strong>bottom edge</strong> of the plate will the centre of the spot be? Give your answer to 2 significant figures.</p>
      stem: "<p>어떤 조건에서 한 화합물의 <i>R</i><sub>F</sub> 값은 0.62예요.</p><p>한 학생이 TLC 판의 아래 끝에서 2.0 cm 위에 출발선을 그렸어요. 용매 전선은 아래 끝에서 14.0 cm 위에서 멈춰요.</p><p>점의 중심은 판의 <strong>아래 끝</strong>에서 얼마나 위에 있을까요? 답은 유효 숫자 2자리로 쓰세요.</p>",
      hints: [
        // EN: First find the distance the solvent front moved from the baseline.
        "먼저 용매 전선이 출발선에서 이동한 거리를 구하세요.",
        // EN: Rearrange: distance moved by the spot = <i>R</i><sub>F</sub> × distance moved by the solvent front.
        "식을 변형해요: 점이 이동한 거리 = <i>R</i><sub>F</sub> × 용매 전선이 이동한 거리.",
        // EN: That distance starts at the baseline. The question asks for the distance from the bottom edge.
        "이 거리는 출발선에서 시작해요. 문제는 아래 끝에서의 거리를 묻고 있어요.",
      ],
      // EN: <div class="worked__math">distance moved by solvent front = 14.0 − 2.0 = 12.0 cm</div><div class="worked__math">distance moved by spot = 0.62 × 12.0 cm = 7.44 cm</div><div class="worked__math">height above bottom edge = 7.44 + 2.0 = 9.44 cm</div><p>To 2 significant figures this is <strong>9.4 cm</strong>.</p><p>Common slips: 0.62 × 14.0 = 8.7 cm (used the bottom edge for the solvent distance) and 7.4 cm (forgot to add the 2.0 cm).</p>
      solution: "<div class=\"worked__math\">용매 전선이 이동한 거리 = 14.0 − 2.0 = 12.0 cm</div><div class=\"worked__math\">점이 이동한 거리 = 0.62 × 12.0 cm = 7.44 cm</div><div class=\"worked__math\">아래 끝에서의 높이 = 7.44 + 2.0 = 9.44 cm</div><p>유효 숫자 2자리로 쓰면 <strong>9.4 cm</strong>예요.</p><p>흔한 실수: 0.62 × 14.0 = 8.7 cm(용매 거리를 아래 끝에서 잼), 7.4 cm(2.0 cm를 더하는 것을 잊음).</p>",
    },

    // ── s2-2-q059 · mcq · foundation · SL · Structure 2.2.2 · 1 mark
    "s2-2-q059": {
      // EN: <p>Which carbon–carbon bond is the <strong>longest</strong> and the <strong>weakest</strong>?</p>
      stem: "<p><strong>가장 길고</strong> <strong>가장 약한</strong> 탄소–탄소 결합은 무엇인가요?</p>",
      options: [
        // EN: the single bond, <span class="chem">C–C</span>
        "단일 결합, <span class=\"chem\">C–C</span>",
        // EN: the double bond, <span class="chem">C=C</span>
        "이중 결합, <span class=\"chem\">C=C</span>",
        // EN: the triple bond, <span class="chem">C≡C</span>
        "삼중 결합, <span class=\"chem\">C≡C</span>",
        // EN: They all have the same length and strength.
        "모두 길이와 세기가 같다.",
      ],
      hints: [
        // EN: Single, double and triple bonds have one, two and three shared pairs.
        "단일, 이중, 삼중 결합에는 공유 전자쌍이 각각 1개, 2개, 3개 있어요.",
        // EN: Fewer shared pairs means a weaker attraction between the two nuclei and the shared electrons.
        "공유 전자쌍이 적을수록 두 원자핵과 공유 전자 사이의 인력이 약해요.",
      ],
      // EN: <p>The single bond has only one shared pair. The attraction between the two nuclei and the shared electrons is weakest, so the nuclei are furthest apart.</p><p>Data booklet values: <span class="chem">C–C</span> 154 pm and 346 kJ mol<sup>−1</sup>; <span class="chem">C=C</span> 134 pm and 614 kJ mol<sup>−1</sup>; <span class="chem">C≡C</span> 120 pm and 839 kJ mol<sup>−1</sup>.</p>
      solution: "<p>단일 결합에는 공유 전자쌍이 1개뿐이에요. 두 원자핵과 공유 전자 사이의 인력이 가장 약하므로 원자핵이 가장 멀리 떨어져 있어요.</p><p>데이터 부클릿 값: <span class=\"chem\">C–C</span> 154 pm, 346 kJ mol<sup>−1</sup>; <span class=\"chem\">C=C</span> 134 pm, 614 kJ mol<sup>−1</sup>; <span class=\"chem\">C≡C</span> 120 pm, 839 kJ mol<sup>−1</sup>.</p>",
      misconception: {
        // EN (option B): A double bond has two shared pairs. It is shorter and stronger than a single bond, which has one shared pair.
        "1": "이중 결합에는 공유 전자쌍이 2개 있어요. 공유 전자쌍이 1개인 단일 결합보다 짧고 강해요.",
        // EN (option C): A triple bond has three shared pairs. The nuclei are attracted most strongly to the shared electrons, so this is the shortest and strongest bond.
        "2": "삼중 결합에는 공유 전자쌍이 3개 있어요. 원자핵이 공유 전자에 가장 강하게 끌리므로 가장 짧고 강한 결합이에요.",
        // EN (option D): The number of shared pairs is different in each bond, so the attraction between the nuclei and the shared electrons is different too.
        "3": "결합마다 공유 전자쌍의 수가 다르므로 원자핵과 공유 전자 사이의 인력도 달라요.",
      },
    },

    // ── s2-2-q060 · order · exam · SL · Structure 2.2.2 · 2 marks
    "s2-2-q060": {
      // EN: <p>Three molecules each contain a bond between two nitrogen atoms. In all three, every nitrogen atom has 8 electrons around it and every hydrogen atom forms one bond.</p><p>Put the molecules in order of the length of the nitrogen–nitrogen bond. Put the <strong>shortest</strong> bond first.</p>
      stem: "<p>세 분자에는 모두 두 질소 원자 사이의 결합이 있어요. 세 분자 모두에서 질소 원자 주위에는 전자가 8개씩 있고, 수소 원자는 결합을 1개씩 만들어요.</p><p>질소–질소 결합의 길이 순서대로 분자를 나열하세요. 결합이 <strong>가장 짧은</strong> 것을 처음에 놓으세요.</p>",
      options: [
        // EN: nitrogen, <span class="chem">N2</span>
        "질소, <span class=\"chem\">N2</span>",
        // EN: diazene, <span class="chem">N2H2</span>
        "diazene, <span class=\"chem\">N2H2</span>",
        // EN: hydrazine, <span class="chem">N2H4</span>
        "hydrazine, <span class=\"chem\">N2H4</span>",
      ],
      hints: [
        // EN: Deduce the Lewis formula of each molecule. Count the valence electrons first: 10, 12 and 14.
        "각 분자의 루이스 구조식을 추론해 봐요. 먼저 원자가 전자를 세세요: 10, 12, 14개.",
        // EN: How many pairs are shared between the two nitrogen atoms in each molecule?
        "각 분자에서 두 질소 원자 사이에 공유된 전자쌍은 몇 개인가요?",
        // EN: More shared pairs make a shorter bond.
        "공유 전자쌍이 많을수록 결합이 짧아요.",
      ],
      // EN: <p><span class="chem">N2</span>: 10 valence electrons. The atoms share three pairs: <span class="chem">N≡N</span>.</p><p><span class="chem">N2H2</span>: 12 valence electrons. Each N has one bond to H and one lone pair, so the atoms share two pairs: <span class="chem">HN=NH</span>.</p><p><span class="chem">N2H4</span>: 14 valence electrons. Each N has two bonds to H and one lone pair, so the atoms share one pair: <span class="chem">H2N–NH2</span>.</p><p>More shared pairs give a greater attraction between the nuclei and the shared electrons, so the bond is shorter. Data booklet lengths: <span class="chem">N≡N</span> 110 pm, <span class="chem">N=N</span> 125 pm, <span class="chem">N–N</span> 146 pm.</p>
      solution: "<p><span class=\"chem\">N2</span>: 원자가 전자 10개. 두 원자가 3쌍을 공유해요: <span class=\"chem\">N≡N</span>.</p><p><span class=\"chem\">N2H2</span>: 원자가 전자 12개. N마다 H와의 결합 1개와 비공유 전자쌍 1개가 있으므로 두 원자는 2쌍을 공유해요: <span class=\"chem\">HN=NH</span>.</p><p><span class=\"chem\">N2H4</span>: 원자가 전자 14개. N마다 H와의 결합 2개와 비공유 전자쌍 1개가 있으므로 두 원자는 1쌍을 공유해요: <span class=\"chem\">H2N–NH2</span>.</p><p>공유 전자쌍이 많을수록 원자핵과 공유 전자 사이의 인력이 커지므로 결합이 짧아져요. 데이터 부클릿의 길이: <span class=\"chem\">N≡N</span> 110 pm, <span class=\"chem\">N=N</span> 125 pm, <span class=\"chem\">N–N</span> 146 pm.</p>",
    },

    // ── s2-2-q061 · mcq · foundation · SL · Structure 2.2.3 · 1 mark
    "s2-2-q061": {
      // EN: <p>A water molecule bonds to a hydrogen ion to form the hydronium ion.</p><p><span class="chem">H2O + H+ -> H3O+</span></p><p>Where do the two electrons in the new <span class="chem">O–H</span> bond come from?</p>
      stem: "<p>물 분자는 수소 이온과 결합해 하이드로늄 이온이 돼요.</p><p><span class=\"chem\">H2O + H+ -> H3O+</span></p><p>새로 생긴 <span class=\"chem\">O–H</span> 결합의 전자 2개는 어디에서 오나요?</p>",
      options: [
        // EN: Both come from the oxygen atom.
        "둘 다 산소 원자에서 온다.",
        // EN: Both come from the hydrogen ion.
        "둘 다 수소 이온에서 온다.",
        // EN: One comes from the oxygen atom and one comes from the hydrogen ion.
        "하나는 산소 원자에서, 하나는 수소 이온에서 온다.",
        // EN: Both come from a hydrogen atom of the water molecule.
        "둘 다 물 분자의 수소 원자에서 온다.",
      ],
      hints: [
        // EN: How many electrons does <span class="chem">H+</span> have?
        "<span class=\"chem\">H+</span>에는 전자가 몇 개 있나요?",
        // EN: Which atom in a water molecule has lone pairs?
        "물 분자에서 비공유 전자쌍이 있는 원자는 무엇인가요?",
      ],
      // EN: <p><span class="chem">H+</span> has no electrons. Oxygen in water has two lone pairs. Oxygen shares one lone pair with <span class="chem">H+</span>.</p><p>Both electrons of the shared pair come from the same atom, so the new bond is a <strong>coordination bond</strong>. Once formed, it is the same as the other two <span class="chem">O–H</span> bonds.</p>
      solution: "<p><span class=\"chem\">H+</span>에는 전자가 없어요. 물의 산소에는 비공유 전자쌍이 2개 있어요. 산소가 비공유 전자쌍 하나를 <span class=\"chem\">H+</span>와 공유해요.</p><p>공유 전자쌍의 전자 2개가 모두 같은 원자에서 오므로 새 결합은 <strong>배위 결합</strong>이에요. 생긴 뒤에는 나머지 <span class=\"chem\">O–H</span> 결합 2개와 똑같아요.</p>",
      misconception: {
        // EN (option B): A hydrogen ion, <span class="chem">H+</span>, has no electrons at all. It can only accept a pair.
        "1": "수소 이온 <span class=\"chem\">H+</span>에는 전자가 전혀 없어요. 전자쌍을 받을 수만 있어요.",
        // EN (option C): This is how an ordinary covalent bond forms. But <span class="chem">H+</span> has no electron to give.
        "2": "이것은 일반적인 공유 결합이 생기는 방법이에요. 하지만 <span class=\"chem\">H+</span>에는 내놓을 전자가 없어요.",
        // EN (option D): The hydrogen atoms in water have already used their one electron in an <span class="chem">O–H</span> bond. They have no lone pair to give.
        "3": "물의 수소 원자는 이미 하나뿐인 전자를 <span class=\"chem\">O–H</span> 결합에 썼어요. 내놓을 비공유 전자쌍이 없어요.",
      },
    },

    // ── s2-2-q062 · numeric · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q062": {
      // EN: <p>In a carbon monoxide molecule, <span class="chem">CO</span>, the two atoms are joined by a triple bond. Each atom also has one lone pair.</p><p>A carbon atom has 4 valence electrons and an oxygen atom has 6.</p><p>How many of the six shared electrons came from the <strong>oxygen</strong> atom?</p>
      stem: "<p>일산화 탄소 분자 <span class=\"chem\">CO</span>에서 두 원자는 삼중 결합으로 연결되어 있어요. 각 원자에는 비공유 전자쌍도 1개씩 있어요.</p><p>탄소 원자는 원자가 전자가 4개, 산소 원자는 6개예요.</p><p>공유 전자 6개 중 몇 개가 <strong>산소</strong> 원자에서 왔나요?</p>",
      hints: [
        // EN: Each atom keeps one lone pair. That is 2 of its valence electrons.
        "각 원자는 비공유 전자쌍 1개를 가지고 있어요. 원자가 전자 중 2개예요.",
        // EN: The electrons that an atom does not keep in a lone pair are the ones it gives to the bond.
        "원자가 비공유 전자쌍으로 가지고 있지 않은 전자가 결합에 내놓는 전자예요.",
      ],
      // EN: <div class="worked__math">oxygen: 6 valence electrons − 2 in its lone pair = 4 electrons in the bond</div><div class="worked__math">carbon: 4 valence electrons − 2 in its lone pair = 2 electrons in the bond</div><div class="worked__math">check: 4 + 2 = 6 shared electrons = 3 shared pairs</div><p>Carbon gives one electron to each of two shared pairs. Oxygen gives one electron to each of these, and <strong>both</strong> electrons of the third pair. So one of the three shared pairs is a coordination bond from oxygen to carbon.</p>
      solution: "<div class=\"worked__math\">산소: 원자가 전자 6개 − 비공유 전자쌍의 2개 = 결합 속 전자 4개</div><div class=\"worked__math\">탄소: 원자가 전자 4개 − 비공유 전자쌍의 2개 = 결합 속 전자 2개</div><div class=\"worked__math\">확인: 4 + 2 = 공유 전자 6개 = 공유 전자쌍 3개</div><p>탄소는 공유 전자쌍 2개에 전자를 1개씩 내놓아요. 산소는 이 두 쌍에 전자를 1개씩 내놓고, 세 번째 쌍의 전자는 <strong>2개 모두</strong> 내놓아요. 그래서 공유 전자쌍 3개 중 하나는 산소에서 탄소로 향하는 배위 결합이에요.</p>",
    },

    // ── s2-2-q063 · mcq · exam · SL · Structure 2.2.5 · 1 mark
    "s2-2-q063": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, F 4.0, Cl 3.2, Br 3.0.</p><p>Which list shows the bonds in order of <strong>increasing</strong> polarity?</p>
      stem: "<p>데이터 부클릿의 전기 음성도 값: H 2.2, F 4.0, Cl 3.2, Br 3.0.</p><p>결합을 극성이 <strong>커지는</strong> 순서로 나타낸 것은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">H–F</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–Br</span>
        "<span class=\"chem\">H–F</span> &lt; <span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–Br</span>",
        // EN: <span class="chem">H–Br</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–F</span>
        "<span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–F</span>",
        // EN: <span class="chem">H–Cl</span> &lt; <span class="chem">H–Br</span> &lt; <span class="chem">H–F</span>
        "<span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–F</span>",
        // EN: <span class="chem">H–Br</span> &lt; <span class="chem">H–F</span> &lt; <span class="chem">H–Cl</span>
        "<span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–F</span> &lt; <span class=\"chem\">H–Cl</span>",
      ],
      hints: [
        // EN: Bond polarity depends on the difference in electronegativity.
        "결합의 극성은 전기 음성도 차이에 따라 달라져요.",
        // EN: Calculate the difference for each bond. The smallest difference is the least polar bond.
        "결합마다 차이를 계산하세요. 차이가 가장 작은 것이 극성이 가장 작은 결합이에요.",
      ],
      // EN: <div class="worked__math">H–Br: 3.0 − 2.2 = 0.8</div><div class="worked__math">H–Cl: 3.2 − 2.2 = 1.0</div><div class="worked__math">H–F: 4.0 − 2.2 = 1.8</div><p>A larger difference in electronegativity means a more polar bond. So the order is <span class="chem">H–Br</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–F</span>.</p>
      solution: "<div class=\"worked__math\">H–Br: 3.0 − 2.2 = 0.8</div><div class=\"worked__math\">H–Cl: 3.2 − 2.2 = 1.0</div><div class=\"worked__math\">H–F: 4.0 − 2.2 = 1.8</div><p>전기 음성도 차이가 클수록 결합의 극성이 커요. 그래서 순서는 <span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–F</span>예요.</p>",
      misconception: {
        // EN (option A): This is the order of decreasing polarity. The question asks for increasing polarity, so the smallest difference comes first.
        "0": "이것은 극성이 작아지는 순서예요. 문제는 극성이 커지는 순서를 묻고 있으므로 차이가 가장 작은 것이 처음에 와요.",
        // EN (option C): Compare the first two: H–Cl has a difference of 1.0 and H–Br has 0.8. The bond with the smaller difference is less polar.
        "2": "앞의 두 개를 비교해 봐요: H–Cl의 차이는 1.0, H–Br은 0.8이에요. 차이가 작은 결합이 극성이 더 작아요.",
        // EN (option D): H–F has the largest difference (1.8), so it is the most polar bond. It must come last.
        "3": "H–F의 차이(1.8)가 가장 크므로 극성이 가장 큰 결합이에요. 마지막에 와야 해요.",
      },
    },

    // ── s2-2-q064 · short · exam · SL · Structure 2.2.5 · 2 marks
    "s2-2-q064": {
      // EN: <p>Electronegativity values from the data booklet: C 2.6, F 4.0.</p><p>Deduce, giving a reason, the polarity of the <span class="chem">C–F</span> bond. Show the partial charges on the two atoms.</p>
      stem: "<p>데이터 부클릿의 전기 음성도 값: C 2.6, F 4.0.</p><p><span class=\"chem\">C–F</span> 결합의 극성을 이유와 함께 추론하시오 (deduce). 두 원자의 부분 전하를 나타내시오.</p>",
      hints: [
        // EN: Compare the two electronegativity values.
        "두 전기 음성도 값을 비교하세요.",
        // EN: The atom that attracts the shared pair more strongly becomes slightly negative.
        "공유 전자쌍을 더 세게 끌어당기는 원자가 약간 음전하를 띠어요.",
      ],
      // EN: <p>The bond is polar, because fluorine is more electronegative than carbon (4.0 − 2.6 = 1.4). Fluorine attracts the shared pair of electrons more strongly.</p><p>Partial charges: carbon is δ+ and fluorine is δ−.</p>
      answer: "<p>플루오린이 탄소보다 전기 음성도가 크므로(4.0 − 2.6 = 1.4) 이 결합은 극성이에요. 플루오린이 공유 전자쌍을 더 세게 끌어당겨요.</p><p>부분 전하: 탄소는 δ+, 플루오린은 δ−예요.</p>",
      markscheme: [
        // EN: The bond is polar because the two atoms have different electronegativities / fluorine is more electronegative than carbon (difference of 1.4).
        "두 원자의 전기 음성도가 다르므로 / 플루오린이 탄소보다 전기 음성도가 크므로(차이 1.4) 결합은 극성이다.",
        // EN: C is δ+ AND F is δ−. Both partial charges are needed. Do not accept full charges, + and −.
        "C는 δ+ 그리고 F는 δ−. 두 부분 전하가 모두 있어야 한다. 완전한 전하 +와 −는 인정하지 않음.",
      ],
    },

    // ── s2-2-q065 · mcq · foundation · SL · Structure 2.2.6 · 1 mark
    "s2-2-q065": {
      // EN: <p>Which two things decide if a molecule is polar?</p>
      stem: "<p>분자가 극성인지를 결정하는 두 가지는 무엇인가요?</p>",
      options: [
        // EN: the polarity of its bonds and its molecular geometry
        "결합의 극성과 분자 모양",
        // EN: the polarity of its bonds only
        "결합의 극성만",
        // EN: its molar mass and its molecular geometry
        "몰 질량과 분자 모양",
        // EN: the number of atoms and the number of bonds
        "원자의 수와 결합의 수",
      ],
      hints: [
        // EN: A molecule is polar if its bond dipoles do not cancel.
        "결합 쌍극자가 상쇄되지 않으면 분자는 극성이에요.",
        // EN: What decides the size of each bond dipole? What decides the directions in which they point?
        "각 결합 쌍극자의 크기는 무엇이 결정하나요? 쌍극자가 향하는 방향은 무엇이 결정하나요?",
      ],
      // EN: <p>Molecular polarity depends on both <strong>bond polarity</strong> and <strong>molecular geometry</strong>.</p><p>The bonds must be polar, so that there are bond dipoles. And the shape must be one in which the bond dipoles do not cancel.</p>
      solution: "<p>분자의 극성은 <strong>결합의 극성</strong>과 <strong>분자 모양</strong> 둘 다에 따라 달라져요.</p><p>결합 쌍극자가 있으려면 결합이 극성이어야 해요. 그리고 결합 쌍극자가 상쇄되지 않는 모양이어야 해요.</p>",
      misconception: {
        // EN (option B): Polar bonds are not enough. In a symmetrical molecule such as <span class="chem">CO2</span>, the bond dipoles cancel and the molecule is non-polar.
        "1": "극성 결합만으로는 부족해요. <span class=\"chem\">CO2</span>처럼 대칭인 분자에서는 결합 쌍극자가 상쇄되어 분자가 무극성이에요.",
        // EN (option C): Molar mass affects the strength of London forces. It does not decide if the molecule has a net dipole.
        "2": "몰 질량은 런던 분산력의 세기에 영향을 줘요. 분자 전체의 쌍극자가 있는지는 결정하지 않아요.",
        // EN (option D): Counting atoms and bonds does not tell you how charge is spread. <span class="chem">CO2</span> and <span class="chem">H2O</span> both have three atoms and two bonds, but only water is polar.
        "3": "원자와 결합을 세어서는 전하가 어떻게 퍼져 있는지 알 수 없어요. <span class=\"chem\">CO2</span>와 <span class=\"chem\">H2O</span>는 둘 다 원자 3개와 결합 2개가 있지만 물만 극성이에요.",
      },
    },

    // ── s2-2-q066 · short · exam · SL · Structure 2.2.6 · 2 marks
    "s2-2-q066": {
      // EN: <p>In a molecule of sulfur dioxide, <span class="chem">SO2</span>, the sulfur atom is bonded to two oxygen atoms and has one lone pair. The molecular geometry is bent (V-shaped).</p><p>Electronegativity values from the data booklet: O 3.4, S 2.6.</p><p>Explain why the sulfur dioxide molecule is polar.</p>
      stem: "<p>이산화 황 분자 <span class=\"chem\">SO2</span>에서 황 원자는 산소 원자 2개와 결합하고 비공유 전자쌍 1개가 있어요. 분자 모양은 굽은 형(V자형)이에요.</p><p>데이터 부클릿의 전기 음성도 값: O 3.4, S 2.6.</p><p>이산화 황 분자가 극성인 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: First mark: are the bonds polar? Use the electronegativity values.
        "첫 번째 점수: 결합이 극성인가요? 전기 음성도 값을 이용하세요.",
        // EN: Second mark: what does the shape do to the two bond dipoles?
        "두 번째 점수: 모양 때문에 두 결합 쌍극자는 어떻게 되나요?",
      ],
      // EN: <p>The sulfur–oxygen bonds are polar, because oxygen is more electronegative than sulfur (3.4 − 2.6 = 0.8).</p><p>The molecule is bent, so the two bond dipoles do not point in opposite directions. They do not cancel, and the molecule has a net dipole.</p>
      answer: "<p>산소가 황보다 전기 음성도가 크므로(3.4 − 2.6 = 0.8) 황–산소 결합은 극성이에요.</p><p>분자가 굽은 형이므로 두 결합 쌍극자가 서로 반대 방향을 향하지 않아요. 상쇄되지 않으므로 분자 전체의 쌍극자가 있어요.</p>",
      markscheme: [
        // EN: The (S–O) bonds are polar / there is an electronegativity difference between S and O.
        "(S–O) 결합은 극성이다 / S와 O 사이에 전기 음성도 차이가 있다.",
        // EN: The bond dipoles do not cancel / there is a net dipole, because the molecule is bent (not symmetrical).
        "분자가 굽은 형이므로(대칭이 아니므로) 결합 쌍극자가 상쇄되지 않는다 / 분자 전체의 쌍극자가 있다.",
      ],
    },

    // ── s2-2-q067 · mcq · foundation · SL · Structure 2.2.8 · 1 mark
    "s2-2-q067": {
      // EN: <p>Which intermolecular force acts between the molecules of <strong>every</strong> molecular substance?</p>
      stem: "<p><strong>모든</strong> 분자성 물질에서 분자 사이에 작용하는 분자 간 힘은 무엇인가요?</p>",
      options: [
        // EN: hydrogen bonding
        "수소 결합",
        // EN: dipole–dipole forces
        "쌍극자-쌍극자 힘",
        // EN: London (dispersion) forces
        "런던 분산력",
        // EN: dipole–induced dipole forces
        "쌍극자-유발 쌍극자 힘",
      ],
      hints: [
        // EN: Think of a non-polar substance such as methane. It can still be turned into a liquid.
        "methane 같은 무극성 물질을 생각해 봐요. 그래도 액체로 만들 수 있어요.",
        // EN: Which force needs only moving electrons?
        "움직이는 전자만 있으면 생기는 힘은 무엇인가요?",
      ],
      // EN: <p>All molecules contain electrons. The electrons are always moving, so every molecule can have a temporary dipole that induces a dipole in its neighbour.</p><p>So <strong>London (dispersion) forces</strong> act between all molecules, polar and non-polar.</p>
      solution: "<p>모든 분자에는 전자가 있어요. 전자는 늘 움직이므로 어떤 분자든 일시적 쌍극자가 생겨 이웃 분자에 쌍극자를 유발할 수 있어요.</p><p>그래서 <strong>런던 분산력</strong>은 극성이든 무극성이든 모든 분자 사이에 작용해요.</p>",
      misconception: {
        // EN (option A): Hydrogen bonding needs a hydrogen atom bonded to a very electronegative atom such as N, O or F. Most molecules do not have one.
        "0": "수소 결합이 생기려면 N, O, F처럼 전기 음성도가 매우 큰 원자와 결합한 수소 원자가 있어야 해요. 대부분의 분자에는 이런 수소가 없어요.",
        // EN (option B): Dipole–dipole forces act only between polar molecules. Non-polar molecules such as <span class="chem">CH4</span> do not have them.
        "1": "쌍극자-쌍극자 힘은 극성 분자 사이에만 작용해요. <span class=\"chem\">CH4</span> 같은 무극성 분자에는 없어요.",
        // EN (option D): This force needs one polar molecule and one non-polar molecule. It does not act in a pure non-polar substance.
        "3": "이 힘은 극성 분자 하나와 무극성 분자 하나가 있어야 생겨요. 순수한 무극성 물질에서는 작용하지 않아요.",
      },
    },

    // ── s2-2-q068 · numeric · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q068": {
      // EN: <p>In phosphorus trichloride, <span class="chem">PCl3</span>, the phosphorus atom has three bonding pairs and one lone pair.</p><p>Predict a value for the <span class="chem">Cl–P–Cl</span> bond angle.</p>
      stem: "<p>삼염화 인 <span class=\"chem\">PCl3</span>에서 인 원자에는 공유 전자쌍 3개와 비공유 전자쌍 1개가 있어요.</p><p><span class=\"chem\">Cl–P–Cl</span> 결합각의 값을 예측하시오 (predict).</p>",
      hints: [
        // EN: Four electron domains give a tetrahedral electron domain geometry. What is the tetrahedral angle?
        "전자 영역이 4개이면 전자 영역 배치는 정사면체형이에요. 정사면체 결합각은 얼마인가요?",
        // EN: A lone pair repels more than a bonding pair. Is the angle larger or smaller than the tetrahedral angle?
        "비공유 전자쌍은 공유 전자쌍보다 더 세게 밀어내요. 결합각은 정사면체 결합각보다 클까요, 작을까요?",
      ],
      // EN: <p>Phosphorus has four electron domains, so the electron domain geometry is tetrahedral (109.5°). One domain is a lone pair, so the molecular geometry is trigonal pyramidal.</p><p>The lone pair repels the bonding pairs more strongly than they repel each other. The bond angle is <strong>less than 109.5°</strong>.</p><p>A markscheme accepts a range for a trigonal pyramidal molecule, such as 100° to 107°. The measured angle in <span class="chem">PCl3</span> is about 100°. Do not write 109.5°.</p>
      solution: "<p>인에는 전자 영역이 4개 있으므로 전자 영역 배치는 정사면체형(109.5°)이에요. 영역 하나가 비공유 전자쌍이므로 분자 모양은 삼각뿔형이에요.</p><p>비공유 전자쌍은 공유 전자쌍끼리 밀어내는 것보다 더 세게 공유 전자쌍을 밀어내요. 결합각은 <strong>109.5°보다 작아요</strong>.</p><p>채점 기준은 삼각뿔형 분자에 대해 100°~107°처럼 범위로 인정해요. <span class=\"chem\">PCl3</span>의 측정값은 약 100°예요. 109.5°라고 쓰지 마세요.</p>",
      // EN: any value from 100° to 107°
      answerDisplay: "100°에서 107° 사이의 값",
    },

  }
});
