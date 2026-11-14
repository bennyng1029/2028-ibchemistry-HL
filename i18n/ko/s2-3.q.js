/* s2-3.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's2-3.q', {
  questions: {

    // ── s2-3-q001 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q001": {
      // EN: <p>Which is the best description of a metallic bond?</p>
      stem: "<p>금속 결합을 가장 잘 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: The electrostatic attraction between oppositely charged ions
        "반대 전하를 띤 이온 사이의 정전기적 인력",
        // EN: The electrostatic attraction between a lattice of cations and delocalized electrons
        "양이온 격자와 비편재화된 전자 사이의 정전기적 인력",
        // EN: The electrostatic attraction between a shared pair of electrons and two nuclei
        "공유 전자쌍과 두 원자핵 사이의 정전기적 인력",
        // EN: The attraction between metal ions in a lattice
        "격자 속 금속 이온 사이의 인력",
      ],
      hints: [
        // EN: A metal contains two kinds of charged particle. Which ones?
        "금속에는 전하를 띤 입자가 두 종류 있어요. 어떤 입자들일까요?",
        // EN: Which particles are positive, and which are negative? Opposite charges attract.
        "어떤 입자가 양전하를 띠고, 어떤 입자가 음전하를 띠나요? 반대 전하는 서로 끌어당겨요.",
      ],
      // EN: <p>In a metal, the outer electrons are delocalized and the atoms become cations in a lattice. The metallic bond is the electrostatic attraction between the lattice of cations and the delocalized electrons.</p>
      solution: "<p>금속에서는 바깥 전자가 비편재화되고, 원자는 격자 속의 양이온이 돼요. 금속 결합은 양이온 격자와 비편재화된 전자 사이의 정전기적 인력이에요.</p>",
      misconception: {
        // EN (option A): This describes an ionic bond, which needs cations and anions. A pure metal has no negative ions. The negative particles are delocalized electrons.
        "0": "이것은 이온 결합을 설명한 것이에요. 이온 결합에는 양이온과 음이온이 필요해요. 순수한 금속에는 음이온이 없어요. 음전하를 띤 입자는 비편재화된 전자예요.",
        // EN (option C): This describes a covalent bond. In a metal the electrons are not shared between two particular atoms. They are delocalized through the whole lattice.
        "2": "이것은 공유 결합을 설명한 것이에요. 금속에서 전자는 특정한 두 원자 사이에서 공유되지 않아요. 전자는 격자 전체에 비편재화되어 있어요.",
        // EN (option D): Metal ions are all positive, so they repel each other. The attraction is between the cations and the delocalized electrons.
        "3": "금속 이온은 모두 양전하를 띠므로 서로 밀어내요. 인력은 양이온과 비편재화된 전자 사이에 작용해요.",
      },
    },

    // ── s2-3-q002 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q002": {
      // EN: <p>Why does solid aluminium conduct electricity?</p>
      stem: "<p>고체 알루미늄은 왜 전기가 통하나요?</p>",
      options: [
        // EN: Its ions are free to move through the lattice.
        "이온이 격자 속을 자유롭게 움직일 수 있어요.",
        // EN: Its atoms transfer electrons to each other to form positive and negative ions.
        "원자들이 서로 전자를 주고받아 양이온과 음이온을 만들어요.",
        // EN: Its delocalized electrons are free to move through the structure.
        "비편재화된 전자가 구조 전체를 자유롭게 움직일 수 있어요.",
        // EN: Its electrons become free only when the metal is melted.
        "금속이 녹았을 때만 전자가 자유로워져요.",
      ],
      hints: [
        // EN: A current is a flow of charged particles. Which charged particles in a solid metal can travel?
        "전류는 전하를 띤 입자의 흐름이에요. 고체 금속에서 이동할 수 있는 전하를 띤 입자는 무엇인가요?",
      ],
      // EN: <p>A substance conducts electricity if it has charged particles that are free to move. In a metal these are the delocalized electrons. They move through the whole structure and carry charge. The cations stay in the lattice.</p>
      solution: "<p>어떤 물질에 자유롭게 움직일 수 있는 전하를 띤 입자가 있으면 그 물질은 전기가 통해요. 금속에서는 비편재화된 전자가 이 입자예요. 비편재화된 전자는 구조 전체를 움직이며 전하를 운반해요. 양이온은 격자 속에 그대로 있어요.</p>",
      misconception: {
        // EN (option A): In a solid metal the cations stay in their lattice positions and only vibrate. Moving ions carry charge in molten or dissolved ionic compounds, not in a metal.
        "0": "고체 금속에서 양이온은 격자 속 자기 자리에 머물며 진동만 해요. 이온이 움직이며 전하를 운반하는 것은 녹아 있거나 용해된 이온 결합 화합물에서이지, 금속에서가 아니에요.",
        // EN (option B): A pure metal has no negative ions. The outer electrons are not transferred to other atoms. They are delocalized.
        "1": "순수한 금속에는 음이온이 없어요. 바깥 전자는 다른 원자로 옮겨 가지 않아요. 비편재화되어 있어요.",
        // EN (option D): The delocalized electrons are present in the solid as well as in the liquid. A metal conducts in both states.
        "3": "비편재화된 전자는 액체뿐만 아니라 고체에도 있어요. 금속은 두 상태 모두에서 전기가 통해요.",
      },
    },

    // ── s2-3-q003 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q003": {
      // EN: <p>Which is the best explanation of why metals are malleable?</p>
      stem: "<p>금속에 펴짐성이 있는 이유를 가장 잘 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: The delocalized electrons are free to move and carry charge.
        "비편재화된 전자가 자유롭게 움직이며 전하를 운반할 수 있어요.",
        // EN: The metallic bonds are weak, so they break when a force is applied.
        "금속 결합이 약해서 힘을 가하면 끊어져요.",
        // EN: The intermolecular forces between the layers are weak.
        "층 사이의 분자 간 힘이 약해요.",
        // EN: The layers of cations can slide over each other without breaking the metallic bond.
        "양이온 층이 금속 결합이 끊어지지 않은 채 서로 미끄러질 수 있어요.",
      ],
      hints: [
        // EN: Malleable means the metal can be hammered into a new shape without breaking. What must the cations do for the shape to change?
        "펴짐성이 있다는 것은 금속을 두드려서 부서지지 않게 새 모양으로 만들 수 있다는 뜻이에요. 모양이 바뀌려면 양이온은 어떻게 움직여야 할까요?",
        // EN: Is the attraction between the cations and the delocalized electrons lost when the shape changes?
        "모양이 바뀔 때 양이온과 비편재화된 전자 사이의 인력이 사라지나요?",
      ],
      // EN: <p>The cations are in layers. A force makes the layers slide over each other. The metallic bond is non-directional, so in their new positions the cations are still attracted to the delocalized electrons. The bond is not broken and the metal keeps its new shape.</p>
      solution: "<p>양이온은 층을 이루고 있어요. 힘을 가하면 층들이 서로 미끄러져요. 금속 결합은 방향성이 없으므로, 새 위치에서도 양이온은 여전히 비편재화된 전자에 끌려요. 결합이 끊어지지 않으므로 금속은 새 모양을 유지해요.</p>",
      misconception: {
        // EN (option A): This is true, but it explains electrical conductivity. It does not say why the metal can change shape without breaking.
        "0": "맞는 내용이지만, 이것은 전기 전도성을 설명해요. 금속이 부서지지 않고 모양이 바뀌는 이유는 말하지 않아요.",
        // EN (option B): The bond is not broken when a metal is shaped. After the layers slide, the cations are still attracted to the delocalized electrons around them.
        "1": "금속의 모양을 바꿀 때 결합은 끊어지지 않아요. 층이 미끄러진 뒤에도 양이온은 주위의 비편재화된 전자에 여전히 끌려요.",
        // EN (option C): A metal contains no molecules, so it has no intermolecular forces. The layers of cations are held by metallic bonding.
        "2": "금속에는 분자가 없으므로 분자 간 힘도 없어요. 양이온 층은 금속 결합으로 붙잡혀 있어요.",
      },
    },

    // ── s2-3-q004 · multi · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q004": {
      // EN: <p>Which of these are properties of a typical metal? Select <strong>all</strong> that apply.</p>
      stem: "<p>다음 중 전형적인 금속의 성질은 어느 것인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: It conducts electricity when solid.
        "고체일 때 전기가 통해요.",
        // EN: It conducts electricity when liquid.
        "액체일 때 전기가 통해요.",
        // EN: It breaks into pieces when it is hit with a hammer.
        "망치로 치면 산산조각 나요.",
        // EN: It is a good conductor of heat.
        "열을 잘 전달해요.",
        // EN: It conducts electricity only when dissolved in water.
        "물에 녹았을 때만 전기가 통해요.",
      ],
      hints: [
        // EN: Think about the delocalized electrons. Are they present in the solid? In the liquid?
        "비편재화된 전자를 생각해 봐요. 고체에도 있나요? 액체에는요?",
        // EN: Two of the options describe an ionic compound, not a metal.
        "선택지 가운데 2개는 금속이 아니라 이온 결합 화합물을 설명해요.",
      ],
      // EN: <p>The delocalized electrons are free to move in the solid and in the liquid, so a metal conducts electricity in both states. The delocalized electrons and the closely packed cations also transfer kinetic energy, so a metal conducts heat well. A metal is malleable, not brittle.</p>
      solution: "<p>비편재화된 전자는 고체와 액체에서 모두 자유롭게 움직일 수 있으므로, 금속은 두 상태 모두에서 전기가 통해요. 비편재화된 전자와 촘촘하게 쌓인 양이온은 운동 에너지도 전달하므로, 금속은 열을 잘 전달해요. 금속은 펴짐성이 있고, 잘 부서지지 않아요.</p>",
      misconception: {
        // EN (option C): This describes a brittle substance, such as an ionic crystal. A metal is malleable: its layers of cations slide without the bond breaking.
        "2": "이것은 이온 결정처럼 잘 부서지는 물질을 설명해요. 금속은 펴짐성이 있어요. 양이온 층이 결합이 끊어지지 않은 채 미끄러져요.",
        // EN (option E): This describes an ionic compound, whose ions are free to move only when it is molten or dissolved. A metal has delocalized electrons that move in the solid.
        "4": "이것은 이온 결합 화합물을 설명해요. 이온 결합 화합물의 이온은 녹아 있거나 용해되어 있을 때만 자유롭게 움직여요. 금속에는 고체에서도 움직이는 비편재화된 전자가 있어요.",
      },
    },

    // ── s2-3-q005 · mcq · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q005": {
      // EN: <p>Which metal has the highest melting point?</p>
      stem: "<p>녹는점이 가장 높은 금속은 무엇인가요?</p>",
      options: [
        // EN: Lithium, Li
        "리튬, Li",
        // EN: Sodium, Na
        "나트륨, Na",
        // EN: Potassium, K
        "칼륨, K",
        // EN: Magnesium, Mg
        "마그네슘, Mg",
      ],
      hints: [
        // EN: Write the ion each metal forms. Use the group number.
        "각 금속이 만드는 이온을 써 봐요. 족 번호를 이용하세요.",
        // EN: A greater ion charge means more delocalized electrons per atom and a stronger attraction.
        "이온의 전하가 클수록 원자 하나당 비편재화된 전자가 많고 인력이 강해요.",
      ],
      // EN: <p>Li, Na and K are in group 1. They form 1+ ions and each atom gives one delocalized electron. Magnesium is in group 2. It forms <span class="chem">Mg^2+</span> and each atom gives two delocalized electrons. <span class="chem">Mg^2+</span> is also a small ion (72 pm). So magnesium has the strongest electrostatic attraction between the cations and the delocalized electrons, and the highest melting point (650.0 °C, compared with 180.5 °C for lithium).</p>
      solution: "<p>Li, Na, K는 1족이에요. 이들은 1+ 이온을 만들고, 원자 하나가 비편재화된 전자 1개를 내놓아요. 마그네슘은 2족이에요. 마그네슘은 <span class=\"chem\">Mg^2+</span> 이온을 만들고, 원자 하나가 비편재화된 전자 2개를 내놓아요. <span class=\"chem\">Mg^2+</span> 이온은 크기도 작아요(72 pm). 그래서 마그네슘은 양이온과 비편재화된 전자 사이의 정전기적 인력이 가장 강하고, 녹는점도 가장 높아요(리튬은 180.5 °C, 마그네슘은 650.0 °C).</p>",
      misconception: {
        // EN (option A): Lithium has the highest melting point in group 1, because <span class="chem">Li+</span> is the smallest group 1 ion. But its ion has only a 1+ charge, with one delocalized electron per atom. One of the other metals forms a 2+ ion.
        "0": "리튬은 <span class=\"chem\">Li+</span> 이온이 1족 이온 중 가장 작기 때문에 1족에서 녹는점이 가장 높아요. 하지만 리튬 이온의 전하는 1+뿐이고, 원자 하나당 비편재화된 전자는 1개예요. 다른 금속 중 하나는 2+ 이온을 만들어요.",
        // EN (option B): Sodium forms a 1+ ion and gives one delocalized electron per atom. Look for a metal whose ion has a greater charge.
        "1": "나트륨은 1+ 이온을 만들고, 원자 하나당 비편재화된 전자 1개를 내놓아요. 이온의 전하가 더 큰 금속을 찾아보세요.",
        // EN (option C): Potassium has the largest ion here and a charge of only 1+. That gives the weakest metallic bonding of the four, so the lowest melting point.
        "2": "칼륨은 여기서 이온이 가장 크고, 전하는 1+뿐이에요. 그래서 넷 중 금속 결합이 가장 약하고, 녹는점이 가장 낮아요.",
      },
    },

    // ── s2-3-q006 · numeric · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q006": {
      // EN: <p>In the simple model of metallic bonding, each magnesium atom gives its two outer electrons to become a <span class="chem">Mg^2+</span> ion. Calculate the amount, in mol, of delocalized electrons in 0.25 mol of magnesium.</p>
      stem: "<p>금속 결합의 단순한 모형에서, 마그네슘 원자는 바깥 전자 2개를 내놓고 <span class=\"chem\">Mg^2+</span> 이온이 돼요. 마그네슘 0.25 mol에 들어 있는 비편재화된 전자의 양(mol)을 계산하시오 (calculate).</p>",
      hints: [
        // EN: How many delocalized electrons does one magnesium atom give?
        "마그네슘 원자 하나는 비편재화된 전자를 몇 개 내놓나요?",
        // EN: Amount of electrons = 2 × amount of magnesium atoms.
        "전자의 양 = 2 × 마그네슘 원자의 양",
      ],
      // EN: <p>Each Mg atom gives 2 delocalized electrons.</p><div class="worked__math"><i>n</i>(electrons) = 2 × 0.25 mol = 0.50 mol</div>
      solution: "<p>Mg 원자 하나는 비편재화된 전자 2개를 내놓아요.</p><div class=\"worked__math\"><i>n</i>(전자) = 2 × 0.25 mol = 0.50 mol</div>",
    },

    // ── s2-3-q007 · mcq · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q007": {
      // EN: <p>Which change makes a metallic bond <strong>weaker</strong>?</p>
      stem: "<p>금속 결합을 <strong>약하게</strong> 만드는 변화는 무엇인가요?</p>",
      options: [
        // EN: A greater charge on the metal ion
        "금속 이온의 전하가 더 큼",
        // EN: A larger ionic radius
        "이온 반지름이 더 큼",
        // EN: More delocalized electrons per atom
        "원자 하나당 비편재화된 전자가 더 많음",
        // EN: A smaller ionic radius
        "이온 반지름이 더 작음",
      ],
      hints: [
        // EN: Think about the distance between the nucleus of the cation and the delocalized electrons around it.
        "양이온의 원자핵과 그 주위의 비편재화된 전자 사이의 거리를 생각해 봐요.",
      ],
      // EN: <p>In a larger ion, the nucleus is further from the delocalized electrons, so the electrostatic attraction is weaker. This is why melting points fall down group 1.</p>
      solution: "<p>이온이 클수록 원자핵이 비편재화된 전자에서 더 멀리 있으므로, 정전기적 인력이 약해요. 그래서 1족에서 아래로 갈수록 녹는점이 낮아져요.</p>",
      misconception: {
        // EN (option A): A greater charge attracts the delocalized electrons more strongly. This makes the bond stronger.
        "0": "전하가 클수록 비편재화된 전자를 더 강하게 끌어당겨요. 그러면 결합이 더 강해져요.",
        // EN (option C): More delocalized electrons per atom means a stronger attraction between the cations and the electrons. This makes the bond stronger.
        "2": "원자 하나당 비편재화된 전자가 많을수록 양이온과 전자 사이의 인력이 강해요. 그러면 결합이 더 강해져요.",
        // EN (option D): In a smaller ion the nucleus is closer to the delocalized electrons, so the attraction is stronger.
        "3": "이온이 작을수록 원자핵이 비편재화된 전자에 더 가까우므로 인력이 강해요.",
      },
    },

    // ── s2-3-q008 · short · exam · SL · Structure 2.3.1 · 2 marks
    "s2-3-q008": {
      // EN: <p>Describe the bonding in solid magnesium.</p>
      stem: "<p>고체 마그네슘의 결합을 서술하시오 (describe).</p>",
      hints: [
        // EN: Name the kind of attraction. The same two words are used for ionic and covalent bonds.
        "인력의 종류를 말하세요. 이온 결합과 공유 결합에도 같은 두 단어를 써요.",
        // EN: Which two kinds of particle attract each other in a metal?
        "금속에서 서로 끌어당기는 입자는 어떤 두 종류인가요?",
      ],
      // EN: <p>Magnesium is a metal, so the bonding is metallic. The markscheme wording is: the electrostatic attraction between a lattice of cations and delocalized electrons. One mark is for “electrostatic attraction”. The other is for naming both particles. Write “cations” or “positive ions”, not “atoms” or “nuclei”, and use the word “delocalized”.</p>
      solution: "<p>마그네슘은 금속이므로 결합은 금속 결합이에요. 채점 기준의 표현은 “양이온 격자와 비편재화된 전자 사이의 정전기적 인력”이에요. 1점은 “정전기적 인력”에 주어져요. 다른 1점은 두 입자를 모두 말해야 받아요. “원자”나 “원자핵”이 아니라 “양이온” 또는 “양전하를 띤 이온”이라고 쓰고, “비편재화된”이라는 말을 꼭 쓰세요.</p>",
      // EN: <p>Electrostatic attraction between a lattice of cations (<span class="chem">Mg^2+</span> ions) and delocalized electrons.</p>
      answer: "<p>양이온(<span class=\"chem\">Mg^2+</span> 이온) 격자와 비편재화된 전자 사이의 정전기적 인력.</p>",
      markscheme: [
        // EN: electrostatic attraction
        "정전기적 인력",
        // EN: between a lattice of cations / positive ions / Mg<sup>2+</sup> ions AND delocalized electrons
        "양이온 / 양전하를 띤 이온 / Mg<sup>2+</sup> 이온의 격자와(AND) 비편재화된 전자 사이",
      ],
    },

    // ── s2-3-q009 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q009": {
      // EN: <p>The table shows some properties of four substances, A to D. Which substance is a metal?</p><div class="table-scroll"><table class="data"><caption>Properties of substances A to D</caption><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col" class="num">Conducts when solid</th><th scope="col" class="num">Conducts when liquid</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">801</td><td class="num">no</td><td class="num">yes</td></tr><tr><th scope="row">B</th><td class="num">1085</td><td class="num">yes</td><td class="num">yes</td></tr><tr><th scope="row">C</th><td class="num">1710</td><td class="num">no</td><td class="num">no</td></tr><tr><th scope="row">D</th><td class="num">−95</td><td class="num">no</td><td class="num">no</td></tr></tbody></table></div>
      stem: "<p>표는 4가지 물질 A~D의 몇 가지 성질을 보여 줘요. 금속은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><caption>물질 A~D의 성질</caption><thead><tr><th scope=\"col\">물질</th><th scope=\"col\" class=\"num\">녹는점 / °C</th><th scope=\"col\" class=\"num\">고체일 때 전기 전도</th><th scope=\"col\" class=\"num\">액체일 때 전기 전도</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">801</td><td class=\"num\">아니요</td><td class=\"num\">예</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">1085</td><td class=\"num\">예</td><td class=\"num\">예</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">1710</td><td class=\"num\">아니요</td><td class=\"num\">아니요</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">−95</td><td class=\"num\">아니요</td><td class=\"num\">아니요</td></tr></tbody></table></div>",
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
        // EN: Which particles carry the charge in a metal? Are they free to move in the solid?
        "금속에서 전하를 운반하는 입자는 무엇인가요? 그 입자는 고체에서 자유롭게 움직일 수 있나요?",
      ],
      // EN: <p>A metal has delocalized electrons that are free to move in the solid and in the liquid. Only B conducts in both states. (A behaves like an ionic compound, C like a covalent network and D like a molecular substance.)</p><p>The data are real: A is sodium chloride, B is copper, C is silicon dioxide and D is hexane. Only the melting point of copper is in the data booklet.</p>
      solution: "<p>금속에는 고체와 액체에서 모두 자유롭게 움직일 수 있는 비편재화된 전자가 있어요. 두 상태 모두에서 전기가 통하는 것은 B뿐이에요. (A는 이온 결합 화합물, C는 공유 결정, D는 분자 물질처럼 행동해요.)</p><p>이 자료는 실제 값이에요. A는 염화 나트륨, B는 구리, C는 이산화 규소, D는 hexane이에요. 데이터 부클릿에는 구리의 녹는점만 나와 있어요.</p>",
      misconception: {
        // EN (option A): A conducts only as a liquid. Its charged particles are fixed in the solid and free in the liquid. That is an ionic compound.
        "0": "A는 액체일 때만 전기가 통해요. 전하를 띤 입자가 고체에서는 고정되어 있고 액체에서는 자유로워요. 이것은 이온 결합 화합물이에요.",
        // EN (option C): C has a very high melting point but never conducts. It has no charged particles that are free to move. That fits a covalent network structure.
        "2": "C는 녹는점이 매우 높지만 전기가 전혀 통하지 않아요. 자유롭게 움직일 수 있는 전하를 띤 입자가 없어요. 이것은 공유 결정(공유 그물 구조)에 맞아요.",
        // EN (option D): D has a low melting point and does not conduct. That fits a molecular substance.
        "3": "D는 녹는점이 낮고 전기가 통하지 않아요. 이것은 분자 물질에 맞아요.",
      },
    },

    // ── s2-3-q010 · short · exam · SL · Structure 2.3.2 · 3 marks
    "s2-3-q010": {
      // EN: <p>Calcium melts at 842.0 °C. Potassium melts at 63.38 °C. The ionic radius of <span class="chem">Ca^2+</span> is 100 pm and the ionic radius of <span class="chem">K+</span> is 138 pm.</p><p>Explain why calcium has the higher melting point.</p>
      stem: "<p>칼슘은 842.0 °C에서 녹아요. 칼륨은 63.38 °C에서 녹아요. <span class=\"chem\">Ca^2+</span> 이온의 이온 반지름은 100 pm이고, <span class=\"chem\">K+</span> 이온의 이온 반지름은 138 pm이에요.</p><p>칼슘의 녹는점이 더 높은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare the two ions: their charges, then their radii.
        "두 이온을 비교해 봐요. 먼저 전하를, 그다음 반지름을 비교하세요.",
        // EN: Finish by saying what attracts what, and link it to the energy needed.
        "마지막에 무엇이 무엇을 끌어당기는지 말하고, 그것을 필요한 에너지와 연결하세요.",
      ],
      // EN: <p>Charge: calcium is in group 2 and forms <span class="chem">Ca^2+</span>. Potassium is in group 1 and forms <span class="chem">K+</span>. So calcium has the greater ion charge and two delocalized electrons per atom, not one.</p><p>Radius: <span class="chem">Ca^2+</span> (100 pm) is smaller than <span class="chem">K+</span> (138 pm).</p><p>Both differences make the electrostatic attraction between the cations and the delocalized electrons stronger in calcium. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p>전하: 칼슘은 2족이고 <span class=\"chem\">Ca^2+</span> 이온을 만들어요. 칼륨은 1족이고 <span class=\"chem\">K+</span> 이온을 만들어요. 그래서 칼슘은 이온의 전하가 더 크고, 원자 하나당 비편재화된 전자가 1개가 아니라 2개예요.</p><p>반지름: <span class=\"chem\">Ca^2+</span> 이온(100 pm)은 <span class=\"chem\">K+</span> 이온(138 pm)보다 작아요.</p><p>두 차이 모두 칼슘에서 양이온과 비편재화된 전자 사이의 정전기적 인력을 더 강하게 만들어요. 이 인력을 극복하는 데 더 많은 에너지가 필요하므로 녹는점이 더 높아요.</p>",
      // EN: <p><span class="chem">Ca^2+</span> has a greater charge than <span class="chem">K+</span>, and calcium has two delocalized electrons per atom while potassium has one. <span class="chem">Ca^2+</span> also has a smaller ionic radius. So the electrostatic attraction between the cations and the delocalized electrons is stronger in calcium, and more energy is needed to overcome it.</p>
      answer: "<p><span class=\"chem\">Ca^2+</span> 이온은 <span class=\"chem\">K+</span> 이온보다 전하가 크고, 원자 하나당 비편재화된 전자가 칼슘은 2개, 칼륨은 1개예요. <span class=\"chem\">Ca^2+</span> 이온은 이온 반지름도 더 작아요. 그래서 칼슘에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하고, 이를 극복하는 데 더 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: Ca<sup>2+</sup> has a greater charge than K<sup>+</sup> / calcium has two delocalized electrons per atom and potassium has one
        "Ca<sup>2+</sup> 이온은 K<sup>+</sup> 이온보다 전하가 크다 / 원자 하나당 비편재화된 전자가 칼슘은 2개, 칼륨은 1개다",
        // EN: Ca<sup>2+</sup> has a smaller (ionic) radius than K<sup>+</sup>
        "Ca<sup>2+</sup> 이온은 K<sup>+</sup> 이온보다 (이온) 반지름이 작다",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons in calcium / stronger metallic bonding in calcium, so more energy is needed to overcome it
        "칼슘에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하다 / 칼슘의 금속 결합이 더 강하다, 그래서 이를 극복하는 데 더 많은 에너지가 필요하다",
      ],
    },

    // ── s2-3-q011 · order · exam · SL · Structure 2.3.2 · 2 marks
    "s2-3-q011": {
      // EN: <p>Put these metals in order of melting point, <strong>lowest first</strong>.</p>
      stem: "<p>이 금속들을 녹는점 순서로, <strong>낮은 것부터</strong> 나열하세요.</p>",
      options: [
        // EN: Rubidium, Rb
        "루비듐, Rb",
        // EN: Potassium, K
        "칼륨, K",
        // EN: Sodium, Na
        "나트륨, Na",
        // EN: Magnesium, Mg
        "마그네슘, Mg",
      ],
      hints: [
        // EN: Three of these metals are in group 1. How does the melting point change down the group?
        "이 금속 중 3가지는 1족이에요. 족에서 아래로 갈수록 녹는점은 어떻게 변하나요?",
        // EN: One metal forms a 2+ ion. Where does it go?
        "한 금속은 2+ 이온을 만들어요. 그 금속은 어디에 들어가나요?",
      ],
      // EN: <p>Rb, K and Na are in group 1. They all form 1+ ions, and the ionic radius increases down the group (<span class="chem">Na+</span> 102 pm, <span class="chem">K+</span> 138 pm, <span class="chem">Rb+</span> 152 pm). A larger ion means weaker attraction, so the order is Rb &lt; K &lt; Na. Magnesium forms a small 2+ ion and has two delocalized electrons per atom, so it is highest.</p><p>Data booklet values: Rb 39.30 °C, K 63.38 °C, Na 97.79 °C, Mg 650.0 °C.</p>
      solution: "<p>Rb, K, Na는 1족이에요. 모두 1+ 이온을 만들고, 족에서 아래로 갈수록 이온 반지름이 커져요(<span class=\"chem\">Na+</span> 102 pm, <span class=\"chem\">K+</span> 138 pm, <span class=\"chem\">Rb+</span> 152 pm). 이온이 클수록 인력이 약하므로 순서는 Rb &lt; K &lt; Na예요. 마그네슘은 작은 2+ 이온을 만들고 원자 하나당 비편재화된 전자가 2개이므로 가장 높아요.</p><p>데이터 부클릿 값: Rb 39.30 °C, K 63.38 °C, Na 97.79 °C, Mg 650.0 °C.</p>",
    },

    // ── s2-3-q012 · mcq · exam · SL · Structure 2.3.2 · 1 mark
    "s2-3-q012": {
      // EN: <p>The melting points of the group 1 metals decrease from lithium to caesium. Which is the best explanation?</p>
      stem: "<p>1족 금속의 녹는점은 리튬에서 세슘으로 갈수록 낮아져요. 가장 알맞은 설명은 무엇인가요?</p>",
      options: [
        // EN: The charge on the metal ion decreases down the group.
        "족에서 아래로 갈수록 금속 이온의 전하가 작아져요.",
        // EN: The number of delocalized electrons per atom decreases down the group.
        "족에서 아래로 갈수록 원자 하나당 비편재화된 전자 수가 줄어들어요.",
        // EN: The ionic radius increases, so the attraction between the cations and the delocalized electrons becomes weaker.
        "이온 반지름이 커져서, 양이온과 비편재화된 전자 사이의 인력이 약해져요.",
        // EN: The atoms become heavier, so the intermolecular forces become weaker.
        "원자가 무거워져서, 분자 간 힘이 약해져요.",
      ],
      hints: [
        // EN: What is the same for every group 1 metal? What changes?
        "모든 1족 금속에서 같은 것은 무엇인가요? 무엇이 달라지나요?",
      ],
      // EN: <p>Every group 1 ion has a 1+ charge and each atom gives one delocalized electron. The ionic radius increases down the group (<span class="chem">Li+</span> 76 pm to <span class="chem">Cs+</span> 167 pm). The nucleus of each cation is further from the delocalized electrons, so the electrostatic attraction is weaker and less energy is needed to overcome it.</p>
      solution: "<p>모든 1족 이온은 전하가 1+이고, 원자 하나가 비편재화된 전자 1개를 내놓아요. 족에서 아래로 갈수록 이온 반지름이 커져요(<span class=\"chem\">Li+</span> 76 pm에서 <span class=\"chem\">Cs+</span> 167 pm까지). 각 양이온의 원자핵이 비편재화된 전자에서 더 멀어지므로, 정전기적 인력이 약해지고 이를 극복하는 데 필요한 에너지가 줄어들어요.</p>",
      misconception: {
        // EN (option A): All group 1 metals form 1+ ions. The charge does not change down the group.
        "0": "모든 1족 금속은 1+ 이온을 만들어요. 족에서 아래로 가도 전하는 변하지 않아요.",
        // EN (option B): Each group 1 atom gives one delocalized electron. The number does not change down the group.
        "1": "1족 원자는 모두 비편재화된 전자 1개를 내놓아요. 족에서 아래로 가도 그 수는 변하지 않아요.",
        // EN (option D): A metal has no molecules, so no intermolecular forces. Mass is also not the reason for a melting point trend.
        "3": "금속에는 분자가 없으므로 분자 간 힘도 없어요. 또 질량은 녹는점 경향의 이유가 아니에요.",
      },
    },

    // ── s2-3-q013 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q013": {
      // EN: <p>Copper is used to make electrical wires. Which pair of properties makes copper suitable for this use?</p>
      stem: "<p>구리는 전선을 만드는 데 쓰여요. 구리가 이 용도에 알맞은 이유가 되는 성질의 짝은 무엇인가요?</p>",
      options: [
        // EN: It conducts electricity well, and it can be pulled into a wire without breaking.
        "전기가 잘 통하고, 부서지지 않게 가는 줄로 뽑을 수 있어요.",
        // EN: It has a high melting point, and it is brittle.
        "녹는점이 높고, 잘 부서져요.",
        // EN: It contains ions that are free to move, and it is shiny.
        "자유롭게 움직일 수 있는 이온이 있고, 광택이 있어요.",
        // EN: It conducts heat well, and it has a high density.
        "열을 잘 전달하고, 밀도가 높아요.",
      ],
      hints: [
        // EN: What must a wire do? What must you be able to do to the metal to make a wire?
        "전선은 무엇을 해야 하나요? 전선을 만들려면 금속에 어떤 일을 할 수 있어야 하나요?",
      ],
      // EN: <p>A wire must carry a current, so the metal must conduct electricity: its delocalized electrons are free to move. The metal must also be shaped into a long thin wire without breaking: its layers of cations can slide without breaking the metallic bond.</p>
      solution: "<p>전선은 전류를 흘려야 하므로 금속에 전기가 통해야 해요. 비편재화된 전자가 자유롭게 움직일 수 있기 때문이에요. 또 금속을 부서지지 않게 길고 가는 선 모양으로 만들 수 있어야 해요. 양이온 층이 금속 결합이 끊어지지 않은 채 미끄러질 수 있기 때문이에요.</p>",
      misconception: {
        // EN (option B): A brittle material would break when it is pulled into a wire or bent. Metals are not brittle.
        "1": "잘 부서지는 물질은 가는 줄로 뽑거나 구부리면 부서져요. 금속은 잘 부서지지 않아요.",
        // EN (option C): The ions in solid copper are not free to move. The delocalized electrons carry the charge.
        "2": "고체 구리 속 이온은 자유롭게 움직일 수 없어요. 전하는 비편재화된 전자가 운반해요.",
        // EN (option D): Both statements are true of copper, but neither is the reason it is used for wires. A wire must carry a current and must be easy to shape.
        "3": "두 내용 모두 구리에 맞지만, 어느 것도 구리를 전선에 쓰는 이유는 아니에요. 전선은 전류를 흘릴 수 있어야 하고, 모양을 쉽게 바꿀 수 있어야 해요.",
      },
    },

    // ── s2-3-q014 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q014": {
      // EN: <p>Which statement correctly compares solid sodium, Na, with solid sodium chloride, NaCl?</p>
      stem: "<p>고체 나트륨 Na와 고체 염화 나트륨 NaCl을 올바르게 비교한 것은 무엇인가요?</p>",
      options: [
        // EN: Both conduct electricity, because both contain sodium ions.
        "둘 다 나트륨 이온을 포함하므로 둘 다 전기가 통해요.",
        // EN: Sodium conducts electricity because it has delocalized electrons. Sodium chloride does not, because its ions are held in fixed positions.
        "나트륨은 비편재화된 전자가 있어서 전기가 통해요. 염화 나트륨은 이온이 고정된 자리에 붙잡혀 있어서 전기가 통하지 않아요.",
        // EN: Neither conducts electricity, because the particles in a solid cannot move.
        "고체 속 입자는 움직일 수 없으므로 둘 다 전기가 통하지 않아요.",
        // EN: Sodium chloride conducts electricity because it contains ions. Sodium does not, because it contains only atoms.
        "염화 나트륨은 이온을 포함하므로 전기가 통해요. 나트륨은 원자만 포함하므로 전기가 통하지 않아요.",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move. Check each solid.
        "전기가 통하려면 물질에 자유롭게 움직일 수 있는 전하를 띤 입자가 있어야 해요. 각 고체를 확인해 봐요.",
      ],
      // EN: <p>Solid sodium is a metal: a lattice of <span class="chem">Na+</span> ions with delocalized electrons that are free to move and carry charge. Solid sodium chloride is ionic: its <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions are held in fixed positions, and it has no delocalized electrons. So only sodium conducts as a solid.</p>
      solution: "<p>고체 나트륨은 금속이에요. <span class=\"chem\">Na+</span> 이온의 격자와, 자유롭게 움직이며 전하를 운반하는 비편재화된 전자로 이루어져 있어요. 고체 염화 나트륨은 이온 결합 물질이에요. <span class=\"chem\">Na+</span> 이온과 <span class=\"chem\">Cl-</span> 이온이 고정된 자리에 붙잡혀 있고, 비편재화된 전자가 없어요. 그래서 고체일 때 전기가 통하는 것은 나트륨뿐이에요.</p>",
      misconception: {
        // EN (option A): Containing ions is not enough. The charged particles must be free to move. In solid sodium chloride the ions are fixed in the lattice.
        "0": "이온을 포함하는 것만으로는 부족해요. 전하를 띤 입자가 자유롭게 움직일 수 있어야 해요. 고체 염화 나트륨에서는 이온이 격자 속에 고정되어 있어요.",
        // EN (option C): The cations in solid sodium cannot travel, but the delocalized electrons can. So solid sodium conducts.
        "2": "고체 나트륨에서 양이온은 이동할 수 없지만, 비편재화된 전자는 이동할 수 있어요. 그래서 고체 나트륨은 전기가 통해요.",
        // EN (option D): This is the wrong way round. Solid sodium has delocalized electrons that are free to move. The ions in solid sodium chloride are not free to move.
        "3": "반대로 되어 있어요. 고체 나트륨에는 자유롭게 움직일 수 있는 비편재화된 전자가 있어요. 고체 염화 나트륨 속 이온은 자유롭게 움직일 수 없어요.",
      },
    },

    // ── s2-3-q015 · multi · exam · SL · Structure 2.3.2 · 1 mark
    "s2-3-q015": {
      // EN: <p>Aluminium has a higher melting point than sodium. Which statements are part of a correct explanation? Select <strong>all</strong> that apply.</p>
      stem: "<p>알루미늄은 나트륨보다 녹는점이 높아요. 올바른 설명의 일부인 것은 어느 것인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: The aluminium ion has a greater charge than the sodium ion.
        "알루미늄 이온은 나트륨 이온보다 전하가 커요.",
        // EN: Aluminium has more delocalized electrons per atom than sodium.
        "알루미늄은 나트륨보다 원자 하나당 비편재화된 전자가 많아요.",
        // EN: The aluminium ion has a larger ionic radius than the sodium ion.
        "알루미늄 이온은 나트륨 이온보다 이온 반지름이 커요.",
        // EN: The attraction between the cations and the delocalized electrons is stronger in aluminium.
        "양이온과 비편재화된 전자 사이의 인력이 알루미늄에서 더 강해요.",
        // EN: Aluminium has stronger covalent bonds between its atoms.
        "알루미늄은 원자 사이의 공유 결합이 더 강해요.",
      ],
      hints: [
        // EN: Write both ions. Compare their charges and their sizes.
        "두 이온을 써 봐요. 전하와 크기를 비교하세요.",
        // EN: Three statements are correct.
        "맞는 설명은 3개예요.",
      ],
      // EN: <p>Aluminium forms <span class="chem">Al^3+</span> and gives three delocalized electrons per atom. Sodium forms <span class="chem">Na+</span> and gives one. <span class="chem">Al^3+</span> (54 pm) is also smaller than <span class="chem">Na+</span> (102 pm). So the electrostatic attraction between the cations and the delocalized electrons is stronger in aluminium, and more energy is needed to overcome it (660.3 °C compared with 97.79 °C).</p>
      solution: "<p>알루미늄은 <span class=\"chem\">Al^3+</span> 이온을 만들고 원자 하나당 비편재화된 전자 3개를 내놓아요. 나트륨은 <span class=\"chem\">Na+</span> 이온을 만들고 1개를 내놓아요. 또 <span class=\"chem\">Al^3+</span> 이온(54 pm)은 <span class=\"chem\">Na+</span> 이온(102 pm)보다 작아요. 그래서 알루미늄에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하고, 이를 극복하는 데 더 많은 에너지가 필요해요(660.3 °C, 나트륨은 97.79 °C).</p>",
      misconception: {
        // EN (option C): The aluminium ion is smaller, not larger: <span class="chem">Al^3+</span> is 54 pm and <span class="chem">Na+</span> is 102 pm. A smaller ion gives a stronger attraction.
        "2": "알루미늄 이온은 더 큰 것이 아니라 더 작아요. <span class=\"chem\">Al^3+</span> 이온은 54 pm, <span class=\"chem\">Na+</span> 이온은 102 pm이에요. 이온이 작을수록 인력이 강해요.",
        // EN (option E): Aluminium is a metal. Its bonding is metallic, not covalent. There are no shared pairs between particular atoms.
        "4": "알루미늄은 금속이에요. 결합은 공유 결합이 아니라 금속 결합이에요. 특정 원자 사이에 공유 전자쌍이 없어요.",
      },
    },

    // ── s2-3-q016 · short · challenge · SL · Structure 2.3.1 · 3 marks
    "s2-3-q016": {
      // EN: <p>A student writes:</p><p>“Magnesium conducts electricity because its ions are free to move. Magnesium is malleable because the metallic bonds are weak and break when it is hit.”</p><p>Identify the errors, and write a correct explanation of both properties.</p>
      stem: "<p>한 학생이 이렇게 썼어요.</p><p>“마그네슘은 이온이 자유롭게 움직일 수 있어서 전기가 통한다. 마그네슘은 금속 결합이 약해서 두드리면 결합이 끊어지므로 펴짐성이 있다.”</p><p>오류를 찾고 (identify), 두 성질을 올바르게 설명하는 글을 쓰시오.</p>",
      hints: [
        // EN: There is one error in each sentence. Which particles move in a solid metal?
        "각 문장에 오류가 하나씩 있어요. 고체 금속에서 움직이는 입자는 무엇인가요?",
        // EN: What happens to the layers of cations, and to the attraction, when a metal is hammered?
        "금속을 망치로 두드리면 양이온 층과 인력은 어떻게 되나요?",
      ],
      // EN: <p><strong>Error 1:</strong> in a solid metal the ions do not travel. The delocalized electrons are free to move through the structure and carry charge.</p><p><strong>Error 2:</strong> the metallic bonds are not broken. The layers of cations slide over each other. Because the bonding is non-directional, the cations are still attracted to the delocalized electrons in their new positions.</p>
      solution: "<p><strong>오류 1:</strong> 고체 금속에서 이온은 이동하지 않아요. 비편재화된 전자가 구조 전체를 자유롭게 움직이며 전하를 운반해요.</p><p><strong>오류 2:</strong> 금속 결합은 끊어지지 않아요. 양이온 층이 서로 미끄러져요. 결합에 방향성이 없으므로, 새 위치에서도 양이온은 여전히 비편재화된 전자에 끌려요.</p>",
      // EN: <p>The ions are not free to move: the cations stay in the lattice. Magnesium conducts because its delocalized electrons are free to move through the structure. The metallic bonds do not break when the metal is hit. Magnesium is malleable because the layers of cations can slide over each other, and the non-directional metallic bond is not broken.</p>
      answer: "<p>이온은 자유롭게 움직이지 않아요. 양이온은 격자 속에 그대로 있어요. 마그네슘은 비편재화된 전자가 구조 전체를 자유롭게 움직일 수 있기 때문에 전기가 통해요. 금속을 두드려도 금속 결합은 끊어지지 않아요. 마그네슘은 양이온 층이 서로 미끄러질 수 있고, 방향성이 없는 금속 결합이 끊어지지 않기 때문에 펴짐성이 있어요.</p>",
      markscheme: [
        // EN: conducts because delocalized electrons (not ions) are free to move / the cations are in fixed positions in the lattice
        "(이온이 아니라) 비편재화된 전자가 자유롭게 움직일 수 있어서 전기가 통한다 / 양이온은 격자 속 고정된 자리에 있다",
        // EN: malleable because layers of cations / ions can slide over each other
        "양이온 / 이온 층이 서로 미끄러질 수 있어서 펴짐성이 있다",
        // EN: the metallic bond is not broken when the layers slide / the bonding is non-directional / the cations are still attracted to the delocalized electrons
        "층이 미끄러질 때 금속 결합이 끊어지지 않는다 / 결합에 방향성이 없다 / 양이온은 여전히 비편재화된 전자에 끌린다",
      ],
    },

    // ── s2-3-q017 · mcq · challenge · SL · Structure 2.3.2 · 1 mark
    "s2-3-q017": {
      // EN: <p>P, Q, R and S are four s-block metals. The table shows the ion that each one forms. Which option gives the metal with the lowest melting point and the metal with the highest melting point?</p><div class="table-scroll"><table class="data"><caption>Ions formed by metals P to S</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Charge</th><th scope="col" class="num">Radius / pm</th></tr></thead><tbody><tr><th scope="row">P</th><td class="num">1+</td><td class="num">138</td></tr><tr><th scope="row">Q</th><td class="num">2+</td><td class="num">135</td></tr><tr><th scope="row">R</th><td class="num">1+</td><td class="num">167</td></tr><tr><th scope="row">S</th><td class="num">2+</td><td class="num">100</td></tr></tbody></table></div>
      stem: "<p>P, Q, R, S는 s 구역 금속 4가지예요. 표는 각 금속이 만드는 이온을 보여 줘요. 녹는점이 가장 낮은 금속과 가장 높은 금속을 바르게 고른 것은 무엇인가요?</p><div class=\"table-scroll\"><table class=\"data\"><caption>금속 P~S가 만드는 이온</caption><thead><tr><th scope=\"col\">금속</th><th scope=\"col\" class=\"num\">전하</th><th scope=\"col\" class=\"num\">반지름 / pm</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td class=\"num\">1+</td><td class=\"num\">138</td></tr><tr><th scope=\"row\">Q</th><td class=\"num\">2+</td><td class=\"num\">135</td></tr><tr><th scope=\"row\">R</th><td class=\"num\">1+</td><td class=\"num\">167</td></tr><tr><th scope=\"row\">S</th><td class=\"num\">2+</td><td class=\"num\">100</td></tr></tbody></table></div>",
      options: [
        // EN: Lowest: P. Highest: Q.
        "가장 낮음: P. 가장 높음: Q.",
        // EN: Lowest: R. Highest: Q.
        "가장 낮음: R. 가장 높음: Q.",
        // EN: Lowest: R. Highest: S.
        "가장 낮음: R. 가장 높음: S.",
        // EN: Lowest: S. Highest: R.
        "가장 낮음: S. 가장 높음: R.",
      ],
      hints: [
        // EN: Weakest bonding: the smallest charge and the largest radius.
        "가장 약한 결합: 전하가 가장 작고 반지름이 가장 커요.",
        // EN: Strongest bonding: the greatest charge and the smallest radius.
        "가장 강한 결합: 전하가 가장 크고 반지름이 가장 작아요.",
      ],
      // EN: <p>Lowest: the ions with a 1+ charge (P and R) give weaker bonding than the 2+ ions. Of these, R has the larger radius (167 pm), so R has the weakest attraction and the lowest melting point.</p><p>Highest: of the 2+ ions (Q and S), S has the smaller radius (100 pm), so S has the strongest attraction and the highest melting point.</p><p>These are the data for K, Ba, Cs and Ca. Their melting points are 63.38 °C, 725.0 °C, 28.44 °C and 842.0 °C.</p>
      solution: "<p>가장 낮음: 전하가 1+인 이온(P와 R)은 2+ 이온보다 결합이 약해요. 이 가운데 R의 반지름이 더 크므로(167 pm), R의 인력이 가장 약하고 녹는점이 가장 낮아요.</p><p>가장 높음: 2+ 이온(Q와 S) 가운데 S의 반지름이 더 작으므로(100 pm), S의 인력이 가장 강하고 녹는점이 가장 높아요.</p><p>이것은 K, Ba, Cs, Ca의 자료예요. 녹는점은 차례로 63.38 °C, 725.0 °C, 28.44 °C, 842.0 °C예요.</p>",
      misconception: {
        // EN (option A): P and R have the same charge, but R has the larger ion, so R has the weaker bonding. Q and S have the same charge, but S has the smaller ion, so S has the stronger bonding.
        "0": "P와 R은 전하가 같지만 R의 이온이 더 크므로, R의 결합이 더 약해요. Q와 S는 전하가 같지만 S의 이온이 더 작으므로, S의 결합이 더 강해요.",
        // EN (option B): R is right for the lowest. For the highest, compare Q and S: the charge is the same, and the smaller ion gives the stronger attraction.
        "1": "가장 낮은 것은 R이 맞아요. 가장 높은 것은 Q와 S를 비교하세요. 전하가 같으므로, 이온이 더 작은 쪽의 인력이 더 강해요.",
        // EN (option D): This is the wrong way round. A small ion with a large charge gives the strongest bonding and the highest melting point.
        "3": "반대로 되어 있어요. 전하가 크고 크기가 작은 이온이 가장 강한 결합과 가장 높은 녹는점을 만들어요.",
      },
    },

    // ── s2-3-q023 · short · exam · SL · Structure 2.3.1 · 2 marks
    "s2-3-q023": {
      // EN: <p>Explain why metals are good conductors of heat.</p>
      stem: "<p>금속이 열을 잘 전달하는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Which particles in a metal can travel from the hot part to the cold part?
        "금속에서 뜨거운 부분에서 차가운 부분으로 이동할 수 있는 입자는 무엇인가요?",
        // EN: Heat is passed on as kinetic energy. Say which particles carry it.
        "열은 운동 에너지로 전달돼요. 어떤 입자가 운동 에너지를 운반하는지 말하세요.",
      ],
      // EN: <p>Heating gives the particles more kinetic energy. The delocalized electrons are free to move through the structure, so they carry this kinetic energy to the cooler parts quickly. The closely packed cations help: a cation that vibrates strongly passes energy to its neighbours. The cations do not travel, and no bonds are broken.</p>
      solution: "<p>가열하면 입자의 운동 에너지가 커져요. 비편재화된 전자는 구조 전체를 자유롭게 움직일 수 있으므로, 이 운동 에너지를 더 차가운 부분으로 빠르게 운반해요. 촘촘하게 쌓인 양이온도 도움을 줘요. 세게 진동하는 양이온이 이웃한 양이온에 에너지를 전달해요. 양이온은 이동하지 않고, 결합도 끊어지지 않아요.</p>",
      // EN: <p>Metals contain delocalized electrons that are free to move through the structure. They carry kinetic energy from the hot part to the cooler part. The cations are also closely packed, so a vibrating cation passes energy to its neighbours.</p>
      answer: "<p>금속에는 구조 전체를 자유롭게 움직일 수 있는 비편재화된 전자가 있어요. 이 전자들이 뜨거운 부분에서 더 차가운 부분으로 운동 에너지를 운반해요. 또 양이온이 촘촘하게 쌓여 있으므로, 진동하는 양이온이 이웃한 양이온에 에너지를 전달해요.</p>",
      markscheme: [
        // EN: delocalized electrons are free to move (through the structure)
        "비편재화된 전자가 (구조 전체를) 자유롭게 움직일 수 있다",
        // EN: the delocalized electrons transfer / carry (kinetic) energy through the metal / closely packed cations pass on vibrations (kinetic energy) to their neighbours
        "비편재화된 전자가 금속을 통해 (운동) 에너지를 전달 / 운반한다 / 촘촘하게 쌓인 양이온이 이웃한 양이온에 진동(운동 에너지)을 전달한다",
      ],
    },

    // ── s2-3-q024 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q024": {
      // EN: <p>Aluminium is rolled into thin sheets of foil. Which property of aluminium makes this possible, and what is the explanation?</p>
      stem: "<p>알루미늄은 밀어서 얇은 판 모양의 포일로 만들어요. 이것을 가능하게 하는 알루미늄의 성질과 그 이유로 알맞은 것은 무엇인가요?</p>",
      options: [
        // EN: It is malleable, because layers of cations can slide over each other without breaking the metallic bond.
        "펴짐성이 있어요. 양이온 층이 금속 결합이 끊어지지 않은 채 서로 미끄러질 수 있기 때문이에요.",
        // EN: It is malleable, because its delocalized electrons are free to move and carry charge.
        "펴짐성이 있어요. 비편재화된 전자가 자유롭게 움직이며 전하를 운반할 수 있기 때문이에요.",
        // EN: It conducts heat, because its delocalized electrons transfer kinetic energy.
        "열을 전달해요. 비편재화된 전자가 운동 에너지를 전달하기 때문이에요.",
        // EN: It is brittle, because ions with the same charge repel when a layer slides.
        "잘 부서져요. 층이 미끄러지면 같은 전하를 띤 이온끼리 밀어내기 때문이에요.",
      ],
      hints: [
        // EN: Rolling changes the shape of the metal without breaking it. What is the name of that property?
        "밀어 펴면 금속의 모양은 바뀌지만 부서지지는 않아요. 그 성질의 이름은 무엇인가요?",
        // EN: Check that the explanation fits the property, not a different one.
        "설명이 다른 성질이 아니라 바로 그 성질에 맞는지 확인하세요.",
      ],
      // EN: <p>Rolling a metal into a sheet changes its shape without breaking it, so the property is malleability. The layers of cations slide over each other. The metallic bond is non-directional, so the cations are still attracted to the delocalized electrons in their new positions.</p>
      solution: "<p>금속을 밀어서 판으로 만들면 부서지지 않고 모양이 바뀌므로, 이 성질은 펴짐성이에요. 양이온 층이 서로 미끄러져요. 금속 결합은 방향성이 없으므로, 새 위치에서도 양이온은 여전히 비편재화된 전자에 끌려요.</p>",
      misconception: {
        // EN (option B): The property is right, but the explanation is for electrical conductivity. Malleability is about layers of cations sliding without the bond breaking.
        "1": "성질은 맞지만, 설명은 전기 전도성에 대한 것이에요. 펴짐성은 양이온 층이 결합이 끊어지지 않은 채 미끄러지는 것과 관련 있어요.",
        // EN (option C): This is true of aluminium, but it is not what lets you roll it into a thin sheet. A sheet needs a metal that changes shape without breaking.
        "2": "알루미늄에 맞는 내용이지만, 얇은 판으로 밀어 펼 수 있게 하는 성질은 아니에요. 판을 만들려면 부서지지 않고 모양이 바뀌는 금속이 필요해요.",
        // EN (option D): This describes an ionic crystal. A brittle material would break into pieces when rolled.
        "3": "이것은 이온 결정을 설명해요. 잘 부서지는 물질은 밀어 펴면 산산조각 나요.",
      },
    },

    // ── s2-3-q025 · multi · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q025": {
      // EN: <p>Magnesium is a metal. Magnesium oxide, MgO, is an ionic compound. Which <strong>physical</strong> properties are different for solid magnesium and solid magnesium oxide? Select <strong>all</strong> that apply.</p>
      stem: "<p>마그네슘은 금속이에요. 산화 마그네슘 MgO는 이온 결합 화합물이에요. 고체 마그네슘과 고체 산화 마그네슘에서 서로 다른 <strong>물리적</strong> 성질은 어느 것인가요? 해당하는 것을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: Electrical conductivity of the solid
        "고체의 전기 전도성",
        // EN: Malleability
        "펴짐성",
        // EN: Whether the substance contains positive ions
        "물질이 양이온을 포함하는지 여부",
        // EN: Whether the substance is a solid at room temperature
        "물질이 실온에서 고체인지 여부",
      ],
      hints: [
        // EN: Think about what each solid contains: which charged particles, and can they move?
        "각 고체에 무엇이 들어 있는지 생각해 봐요. 어떤 전하를 띤 입자가 있고, 그 입자는 움직일 수 있나요?",
        // EN: What happens when you hit each solid with a hammer?
        "각 고체를 망치로 치면 어떻게 되나요?",
      ],
      // EN: <p>Solid magnesium conducts electricity, because its delocalized electrons are free to move. Solid magnesium oxide does not, because its ions are held in fixed positions. Magnesium is malleable: its layers of cations slide without the bond breaking. Magnesium oxide is brittle: when a layer slides, ions with the same charge repel. Both are solids at room temperature and both contain <span class="chem">Mg^2+</span> ions.</p>
      solution: "<p>고체 마그네슘은 비편재화된 전자가 자유롭게 움직일 수 있으므로 전기가 통해요. 고체 산화 마그네슘은 이온이 고정된 자리에 붙잡혀 있으므로 전기가 통하지 않아요. 마그네슘은 펴짐성이 있어요. 양이온 층이 결합이 끊어지지 않은 채 미끄러져요. 산화 마그네슘은 잘 부서져요. 층이 미끄러지면 같은 전하를 띤 이온끼리 밀어내요. 둘 다 실온에서 고체이고, 둘 다 <span class=\"chem\">Mg^2+</span> 이온을 포함해요.</p>",
      misconception: {
        // EN (option C): Both contain <span class="chem">Mg^2+</span> ions. Magnesium has them in a lattice with delocalized electrons. Magnesium oxide has them in a lattice with <span class="chem">O^2-</span> ions. Also, this is not a physical property that you can observe.
        "2": "둘 다 <span class=\"chem\">Mg^2+</span> 이온을 포함해요. 마그네슘에서는 이 이온이 비편재화된 전자와 함께 격자를 이루어요. 산화 마그네슘에서는 <span class=\"chem\">O^2-</span> 이온과 함께 격자를 이루어요. 또 이것은 관찰할 수 있는 물리적 성질이 아니에요.",
        // EN (option D): Both are solids at room temperature. Both have strong electrostatic attractions through the whole lattice.
        "3": "둘 다 실온에서 고체예요. 둘 다 격자 전체에 걸쳐 강한 정전기적 인력이 있어요.",
      },
    },

    // ── s2-3-q026 · mcq · challenge · SL · Structure 2.3.1 · 1 mark
    "s2-3-q026": {
      // EN: <p>Liquid sodium and liquid sodium chloride both conduct electricity. Which row shows the particles that carry the charge in each liquid?</p><div class="table-scroll"><table class="data"><caption>Particles that carry the charge</caption><thead><tr><th scope="col">Option</th><th scope="col" class="num">Liquid sodium</th><th scope="col" class="num">Liquid sodium chloride</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">ions</td><td class="num">ions</td></tr><tr><th scope="row">B</th><td class="num">delocalized electrons</td><td class="num">ions</td></tr><tr><th scope="row">C</th><td class="num">ions</td><td class="num">delocalized electrons</td></tr><tr><th scope="row">D</th><td class="num">delocalized electrons</td><td class="num">delocalized electrons</td></tr></tbody></table></div>
      stem: "<p>액체 나트륨과 액체 염화 나트륨은 모두 전기가 통해요. 각 액체에서 전하를 운반하는 입자를 바르게 나타낸 것은 어느 행인가요?</p><div class=\"table-scroll\"><table class=\"data\"><caption>전하를 운반하는 입자</caption><thead><tr><th scope=\"col\">선택지</th><th scope=\"col\" class=\"num\">액체 나트륨</th><th scope=\"col\" class=\"num\">액체 염화 나트륨</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">이온</td><td class=\"num\">이온</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">비편재화된 전자</td><td class=\"num\">이온</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">이온</td><td class=\"num\">비편재화된 전자</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">비편재화된 전자</td><td class=\"num\">비편재화된 전자</td></tr></tbody></table></div>",
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
        // EN: Which of the two substances is a metal? What carries the charge in a metal?
        "두 물질 중 금속은 어느 것인가요? 금속에서 전하를 운반하는 것은 무엇인가요?",
        // EN: Why does solid sodium chloride not conduct, when liquid sodium chloride does?
        "액체 염화 나트륨은 전기가 통하는데, 고체 염화 나트륨은 왜 통하지 않나요?",
      ],
      // EN: <p>Sodium is a metal. Its delocalized electrons are free to move in the solid and in the liquid, and they carry the charge. Sodium chloride is ionic. It has no delocalized electrons. When it melts, the <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions become free to move and carry the charge.</p>
      solution: "<p>나트륨은 금속이에요. 비편재화된 전자가 고체와 액체에서 모두 자유롭게 움직일 수 있고, 이 전자가 전하를 운반해요. 염화 나트륨은 이온 결합 물질이에요. 비편재화된 전자가 없어요. 녹으면 <span class=\"chem\">Na+</span> 이온과 <span class=\"chem\">Cl-</span> 이온이 자유롭게 움직일 수 있게 되어 전하를 운반해요.</p>",
      misconception: {
        // EN (option A): This is right for sodium chloride. But sodium is a metal. Its delocalized electrons are still there in the liquid, and they carry the charge.
        "0": "염화 나트륨에 대해서는 맞아요. 하지만 나트륨은 금속이에요. 액체에서도 비편재화된 전자가 그대로 있고, 이 전자가 전하를 운반해요.",
        // EN (option C): This is the wrong way round. The metal has the delocalized electrons. The ionic compound has ions that become free to move when it melts.
        "2": "반대로 되어 있어요. 비편재화된 전자가 있는 것은 금속이에요. 이온 결합 화합물에는 녹으면 자유롭게 움직일 수 있게 되는 이온이 있어요.",
        // EN (option D): Sodium chloride is ionic. It has no delocalized electrons. When it melts, its ions are free to move and carry the charge.
        "3": "염화 나트륨은 이온 결합 물질이에요. 비편재화된 전자가 없어요. 녹으면 이온이 자유롭게 움직이며 전하를 운반해요.",
      },
    },

    // ── s2-3-q027 · short · challenge · SL · Structure 2.3.2 · 3 marks
    "s2-3-q027": {
      // EN: <p>Lithium melts at 180.5 °C. Magnesium melts at 650.0 °C. The ionic radius of <span class="chem">Li+</span> is 76 pm and the ionic radius of <span class="chem">Mg^2+</span> is 72 pm.</p><p>A student says: “Magnesium has the higher melting point mainly because its ion is smaller.” Use the data to discuss this statement, and explain the difference in melting point.</p>
      stem: "<p>리튬은 180.5 °C에서 녹아요. 마그네슘은 650.0 °C에서 녹아요. <span class=\"chem\">Li+</span> 이온의 이온 반지름은 76 pm이고, <span class=\"chem\">Mg^2+</span> 이온의 이온 반지름은 72 pm이에요.</p><p>한 학생이 이렇게 말해요. “마그네슘의 녹는점이 더 높은 주된 이유는 이온이 더 작기 때문이다.” 자료를 이용하여 이 주장을 논의하고 (discuss), 녹는점 차이를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare the two radii. Is the difference large or small?
        "두 반지름을 비교해 봐요. 차이가 큰가요, 작은가요?",
        // EN: What else is different about the two ions? Use the group numbers.
        "두 이온은 그 밖에 무엇이 다른가요? 족 번호를 이용하세요.",
      ],
      // EN: <p><strong>Radius:</strong> 72 pm and 76 pm are almost the same. The smaller radius of <span class="chem">Mg^2+</span> helps a little, but it is not the main reason.</p><p><strong>Charge:</strong> lithium is in group 1 and forms <span class="chem">Li+</span>, with one delocalized electron per atom. Magnesium is in group 2 and forms <span class="chem">Mg^2+</span>, with two.</p><p><strong>Link:</strong> the greater charge and the extra delocalized electron make the electrostatic attraction between the cations and the delocalized electrons stronger in magnesium. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p><strong>반지름:</strong> 72 pm과 76 pm은 거의 같아요. <span class=\"chem\">Mg^2+</span> 이온의 반지름이 더 작은 것은 조금 도움이 되지만, 주된 이유는 아니에요.</p><p><strong>전하:</strong> 리튬은 1족이고 <span class=\"chem\">Li+</span> 이온을 만들며, 원자 하나당 비편재화된 전자가 1개예요. 마그네슘은 2족이고 <span class=\"chem\">Mg^2+</span> 이온을 만들며, 비편재화된 전자가 2개예요.</p><p><strong>연결:</strong> 전하가 더 크고 비편재화된 전자가 하나 더 많아서, 마그네슘에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강해요. 이를 극복하는 데 더 많은 에너지가 필요하므로 녹는점이 더 높아요.</p>",
      // EN: <p>The two ionic radii are almost the same (72 pm and 76 pm), so the radius cannot be the main reason. The main difference is the charge: <span class="chem">Mg^2+</span> has a greater charge than <span class="chem">Li+</span>, and magnesium has two delocalized electrons per atom while lithium has one. So the electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, and more energy is needed to overcome it.</p>
      answer: "<p>두 이온 반지름은 거의 같으므로(72 pm과 76 pm), 반지름은 주된 이유가 될 수 없어요. 주된 차이는 전하예요. <span class=\"chem\">Mg^2+</span> 이온은 <span class=\"chem\">Li+</span> 이온보다 전하가 크고, 원자 하나당 비편재화된 전자가 마그네슘은 2개, 리튬은 1개예요. 그래서 마그네슘에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하고, 이를 극복하는 데 더 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: the ionic radii are almost the same / differ by only 4 pm, so radius is not the main reason
        "이온 반지름이 거의 같다 / 4 pm밖에 차이 나지 않는다, 그래서 반지름은 주된 이유가 아니다",
        // EN: Mg<sup>2+</sup> has a greater charge than Li<sup>+</sup> / magnesium has two delocalized electrons per atom and lithium has one
        "Mg<sup>2+</sup> 이온은 Li<sup>+</sup> 이온보다 전하가 크다 / 원자 하나당 비편재화된 전자가 마그네슘은 2개, 리튬은 1개다",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons in magnesium / stronger metallic bonding in magnesium, so more energy is needed to overcome it
        "마그네슘에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하다 / 마그네슘의 금속 결합이 더 강하다, 그래서 이를 극복하는 데 더 많은 에너지가 필요하다",
      ],
    },

    // ── s2-3-q018 · mcq · foundation · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q018": {
      // EN: <p>Titanium has the electron configuration [Ar] 3d<sup>2</sup> 4s<sup>2</sup>. Which electrons are delocalized in titanium metal?</p>
      stem: "<p>타이타늄의 전자 배치는 [Ar] 3d<sup>2</sup> 4s<sup>2</sup>예요. 타이타늄 금속에서 비편재화된 전자는 어느 것인가요?</p>",
      options: [
        // EN: 4s electrons only
        "4s 전자만",
        // EN: 3d electrons as well as 4s electrons
        "4s 전자와 3d 전자",
        // EN: 3p electrons as well as 4s electrons
        "4s 전자와 3p 전자",
        // EN: All 22 electrons
        "전자 22개 모두",
      ],
      hints: [
        // EN: What does syllabus statement 2.3.3 say about transition elements?
        "교수요목 2.3.3은 전이 원소에 대해 무엇이라고 말하나요?",
      ],
      // EN: <p>Transition elements have delocalized d-electrons. In titanium, 3d electrons are delocalized as well as 4s electrons. The 3d and 4s sublevels are close in energy.</p>
      solution: "<p>전이 원소에는 비편재화된 d 전자가 있어요. 타이타늄에서는 4s 전자뿐만 아니라 3d 전자도 비편재화되어 있어요. 3d 부껍질과 4s 부껍질은 에너지가 비슷해요.</p>",
      misconception: {
        // EN (option A): This is true for an s-block metal such as calcium. A transition element also has delocalized d-electrons.
        "0": "칼슘 같은 s 구역 금속에는 맞는 내용이에요. 전이 원소에는 비편재화된 d 전자도 있어요.",
        // EN (option C): The 3p electrons are in a full inner sublevel, held strongly by the nucleus. They are not delocalized.
        "2": "3p 전자는 꽉 찬 안쪽 부껍질에 있어서 원자핵에 강하게 붙잡혀 있어요. 비편재화되지 않아요.",
        // EN (option D): The inner electrons stay with each nucleus. They are part of the cation. Only outer electrons are delocalized.
        "3": "안쪽 전자는 각 원자핵 곁에 머물러요. 이 전자들은 양이온의 일부예요. 바깥 전자만 비편재화돼요.",
      },
    },

    // ── s2-3-q019 · short · exam · AHL · Structure 2.3.3 · 2 marks
    "s2-3-q019": {
      // EN: <p>Chromium is a transition element. It melts at 1907 °C. Calcium, in the same period, melts at 842.0 °C.</p><p>Explain why chromium has a much higher melting point than calcium.</p>
      stem: "<p>크로뮴은 전이 원소예요. 크로뮴은 1907 °C에서 녹아요. 같은 주기의 칼슘은 842.0 °C에서 녹아요.</p><p>크로뮴의 녹는점이 칼슘보다 훨씬 높은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Which electrons are delocalized in calcium? Which are delocalized in a transition element?
        "칼슘에서 비편재화되는 전자는 무엇인가요? 전이 원소에서 비편재화되는 전자는 무엇인가요?",
        // EN: Finish with the attraction and the energy needed to overcome it.
        "마지막에 인력과, 그 인력을 극복하는 데 필요한 에너지를 말하세요.",
      ],
      // EN: <p>Calcium has only its two 4s electrons to delocalize. In chromium, 3d electrons are delocalized as well as 4s electrons. More delocalized electrons per atom gives a stronger electrostatic attraction between the cations and the delocalized electrons. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p>칼슘은 비편재화할 수 있는 전자가 4s 전자 2개뿐이에요. 크로뮴에서는 4s 전자뿐만 아니라 3d 전자도 비편재화돼요. 원자 하나당 비편재화된 전자가 많을수록 양이온과 비편재화된 전자 사이의 정전기적 인력이 강해요. 이를 극복하는 데 더 많은 에너지가 필요하므로 녹는점이 더 높아요.</p>",
      // EN: <p>In chromium, 3d electrons are delocalized as well as 4s electrons, so chromium has more delocalized electrons per atom than calcium. The electrostatic attraction between the cations and the delocalized electrons is stronger in chromium, so more energy is needed to overcome it.</p>
      answer: "<p>크로뮴에서는 4s 전자뿐만 아니라 3d 전자도 비편재화되므로, 크로뮴은 칼슘보다 원자 하나당 비편재화된 전자가 많아요. 크로뮴에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하므로, 이를 극복하는 데 더 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: chromium has delocalized d-electrons / 3d electrons as well as 4s electrons are delocalized / chromium has more delocalized electrons (per atom)
        "크로뮴에는 비편재화된 d 전자가 있다 / 4s 전자뿐만 아니라 3d 전자도 비편재화된다 / 크로뮴은 (원자 하나당) 비편재화된 전자가 더 많다",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons / stronger metallic bonding in chromium (so more energy is needed to overcome it)
        "양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하다 / 크로뮴의 금속 결합이 더 강하다 (그래서 이를 극복하는 데 더 많은 에너지가 필요하다)",
      ],
    },

    // ── s2-3-q020 · mcq · exam · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q020": {
      // EN: <p>Which is the best explanation of why iron conducts electricity?</p>
      stem: "<p>철에 전기가 통하는 이유를 가장 잘 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: Iron ions have variable oxidation states, so they can move through the lattice.
        "철 이온은 여러 가지 산화수를 가지므로 격자 속을 움직일 수 있어요.",
        // EN: Iron forms coloured complex ions.
        "철은 색깔이 있는 착이온을 만들어요.",
        // EN: Its d-electrons are held tightly by each nucleus.
        "d 전자가 각 원자핵에 단단히 붙잡혀 있어요.",
        // EN: It has delocalized d-electrons and s-electrons that are free to move through the structure.
        "구조 전체를 자유롭게 움직일 수 있는 비편재화된 d 전자와 s 전자가 있어요.",
      ],
      hints: [
        // EN: The explanation has the same form as for any metal. Which particles are free to move?
        "설명의 형태는 다른 금속과 같아요. 자유롭게 움직일 수 있는 입자는 무엇인가요?",
      ],
      // EN: <p>A metal conducts because it has delocalized electrons that are free to move through the structure and carry charge. In a transition element such as iron, these include d-electrons as well as s-electrons.</p>
      solution: "<p>금속은 구조 전체를 자유롭게 움직이며 전하를 운반하는 비편재화된 전자가 있기 때문에 전기가 통해요. 철 같은 전이 원소에서는 s 전자뿐만 아니라 d 전자도 이 비편재화된 전자에 포함돼요.</p>",
      misconception: {
        // EN (option A): Variable oxidation state is a chemical property. The ions in solid iron stay in the lattice. They do not carry the current.
        "0": "여러 가지 산화수는 화학적 성질이에요. 고체 철 속 이온은 격자 속에 그대로 있어요. 이온은 전류를 운반하지 않아요.",
        // EN (option B): Colour and complex ions are chemical properties of transition elements (Structure 3.1). They do not explain conductivity.
        "1": "색깔과 착이온은 전이 원소의 화학적 성질이에요(Structure 3.1). 전기 전도성을 설명하지 않아요.",
        // EN (option C): If the d-electrons were all held tightly they could not carry charge. In a transition element, d-electrons are delocalized.
        "2": "d 전자가 모두 단단히 붙잡혀 있다면 전하를 운반할 수 없어요. 전이 원소에서는 d 전자가 비편재화되어 있어요.",
      },
    },

    // ── s2-3-q021 · short · challenge · AHL · Structure 2.3.3 · 3 marks
    "s2-3-q021": {
      // EN: <p>The table shows data for three metals in period 4.</p><div class="table-scroll"><table class="data"><caption>Three period 4 metals</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Outer electrons</th><th scope="col" class="num">Melting point / °C</th></tr></thead><tbody><tr><th scope="row">potassium, K</th><td class="num">4s<sup>1</sup></td><td class="num">63.38</td></tr><tr><th scope="row">calcium, Ca</th><td class="num">4s<sup>2</sup></td><td class="num">842.0</td></tr><tr><th scope="row">vanadium, V</th><td class="num">3d<sup>3</sup> 4s<sup>2</sup></td><td class="num">1910</td></tr></tbody></table></div><p>Explain the increase in melting point from potassium to calcium to vanadium.</p>
      stem: "<p>표는 4주기 금속 3가지의 자료를 보여 줘요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>4주기 금속 3가지</caption><thead><tr><th scope=\"col\">금속</th><th scope=\"col\" class=\"num\">바깥 전자</th><th scope=\"col\" class=\"num\">녹는점 / °C</th></tr></thead><tbody><tr><th scope=\"row\">칼륨, K</th><td class=\"num\">4s<sup>1</sup></td><td class=\"num\">63.38</td></tr><tr><th scope=\"row\">칼슘, Ca</th><td class=\"num\">4s<sup>2</sup></td><td class=\"num\">842.0</td></tr><tr><th scope=\"row\">바나듐, V</th><td class=\"num\">3d<sup>3</sup> 4s<sup>2</sup></td><td class=\"num\">1910</td></tr></tbody></table></div><p>칼륨에서 칼슘, 바나듐으로 갈수록 녹는점이 높아지는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Take the two steps one at a time. First compare K and Ca using their ions.
        "두 단계를 하나씩 살펴봐요. 먼저 K와 Ca를 이온으로 비교하세요.",
        // EN: What can vanadium delocalize that calcium cannot?
        "칼슘은 비편재화할 수 없지만 바나듐은 비편재화할 수 있는 것은 무엇인가요?",
      ],
      // EN: <p><strong>K to Ca:</strong> potassium forms <span class="chem">K+</span> with one delocalized electron per atom. Calcium forms <span class="chem">Ca^2+</span> with two. <span class="chem">Ca^2+</span> is also the smaller ion.</p><p><strong>Ca to V:</strong> vanadium is a transition element. Its 3d electrons are delocalized as well as its 4s electrons, so it has more delocalized electrons per atom than calcium.</p><p><strong>Link:</strong> at each step the electrostatic attraction between the cations and the delocalized electrons becomes stronger, so more energy is needed to overcome it and the melting point rises.</p>
      solution: "<p><strong>K에서 Ca로:</strong> 칼륨은 <span class=\"chem\">K+</span> 이온을 만들고 원자 하나당 비편재화된 전자가 1개예요. 칼슘은 <span class=\"chem\">Ca^2+</span> 이온을 만들고 2개예요. 또 <span class=\"chem\">Ca^2+</span> 이온이 더 작은 이온이에요.</p><p><strong>Ca에서 V로:</strong> 바나듐은 전이 원소예요. 4s 전자뿐만 아니라 3d 전자도 비편재화되므로, 칼슘보다 원자 하나당 비편재화된 전자가 많아요.</p><p><strong>연결:</strong> 각 단계에서 양이온과 비편재화된 전자 사이의 정전기적 인력이 강해지므로, 이를 극복하는 데 더 많은 에너지가 필요하고 녹는점이 높아져요.</p>",
      // EN: <p>From K to Ca the ion charge rises from 1+ to 2+, so calcium has two delocalized electrons per atom and potassium has one (and <span class="chem">Ca^2+</span> is the smaller ion). Vanadium is a transition element: 3d electrons are delocalized as well as 4s electrons, so it has more delocalized electrons per atom again. Each time, the electrostatic attraction between the cations and the delocalized electrons is stronger, so more energy is needed to overcome it.</p>
      answer: "<p>K에서 Ca로 가면 이온의 전하가 1+에서 2+로 커지므로, 원자 하나당 비편재화된 전자가 칼슘은 2개, 칼륨은 1개예요(또 <span class=\"chem\">Ca^2+</span> 이온이 더 작은 이온이에요). 바나듐은 전이 원소예요. 4s 전자뿐만 아니라 3d 전자도 비편재화되므로, 원자 하나당 비편재화된 전자가 다시 더 많아져요. 매번 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강해지므로, 이를 극복하는 데 더 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: K to Ca: greater ion charge (2+ compared with 1+) / two delocalized electrons per atom compared with one / Ca<sup>2+</sup> has the smaller ionic radius
        "K에서 Ca로: 이온의 전하가 더 크다(1+에 비해 2+) / 원자 하나당 비편재화된 전자가 1개에 비해 2개다 / Ca<sup>2+</sup> 이온의 이온 반지름이 더 작다",
        // EN: vanadium has delocalized d-electrons / 3d as well as 4s electrons are delocalized, so more delocalized electrons per atom
        "바나듐에는 비편재화된 d 전자가 있다 / 4s 전자뿐만 아니라 3d 전자도 비편재화된다, 그래서 원자 하나당 비편재화된 전자가 더 많다",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons (from K to Ca to V), so more energy is needed to overcome it
        "(K에서 Ca, V로 갈수록) 양이온과 비편재화된 전자 사이의 정전기적 인력이 더 강하다, 그래서 이를 극복하는 데 더 많은 에너지가 필요하다",
      ],
    },

    // ── s2-3-q022 · mcq · challenge · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q022": {
      // EN: <p>From sodium to aluminium the melting point rises at every step. From scandium to copper the melting points are all high, but they do not follow a simple trend. Which is the best reason for this difference?</p>
      stem: "<p>나트륨에서 알루미늄까지는 단계마다 녹는점이 높아져요. 스칸듐에서 구리까지는 녹는점이 모두 높지만, 단순한 경향을 따르지 않아요. 이 차이의 가장 알맞은 이유는 무엇인가요?</p>",
      options: [
        // EN: Transition elements have no delocalized electrons, so the metallic model does not apply to them.
        "전이 원소에는 비편재화된 전자가 없으므로, 금속 결합 모형이 적용되지 않아요.",
        // EN: From Na to Al each step adds one delocalized electron per atom and makes the ion much smaller. From Sc to Cu every element has d-electrons and s-electrons that can be delocalized, and no single factor changes steadily.
        "Na에서 Al까지는 단계마다 원자 하나당 비편재화된 전자가 1개씩 늘고 이온이 훨씬 작아져요. Sc에서 Cu까지는 모든 원소에 비편재화될 수 있는 d 전자와 s 전자가 있고, 꾸준히 변하는 요인이 하나도 없어요.",
        // EN: From Sc to Cu the atoms become heavier, and heavier atoms always melt at lower temperatures.
        "Sc에서 Cu로 갈수록 원자가 무거워지고, 무거운 원자는 항상 더 낮은 온도에서 녹아요.",
        // EN: Transition elements form molecules, so their melting points depend on intermolecular forces.
        "전이 원소는 분자를 이루므로, 녹는점이 분자 간 힘에 따라 달라져요.",
      ],
      hints: [
        // EN: What changes at each step from Na to Mg to Al? Does the same thing change steadily from Sc to Cu?
        "Na에서 Mg, Al로 가면서 단계마다 무엇이 변하나요? Sc에서 Cu까지도 같은 것이 꾸준히 변하나요?",
      ],
      // EN: <p>From Na to Al, the ion charge and the number of delocalized electrons per atom go from 1 to 2 to 3, and the ionic radius falls from 102 pm to 54 pm. All these changes strengthen the bonding, so the trend is clear. Across the d-block every element has d-electrons and s-electrons that can be delocalized, but the number of delocalized electrons does not rise by one at each step. The size of the atoms also changes less from one element to the next. No single factor changes steadily, so the trend is less evident.</p>
      solution: "<p>Na에서 Al로 가면서 이온의 전하와 원자 하나당 비편재화된 전자 수는 1, 2, 3으로 늘고, 이온 반지름은 102 pm에서 54 pm으로 작아져요. 이 변화들은 모두 결합을 강하게 하므로 경향이 뚜렷해요. d 구역에서는 모든 원소에 비편재화될 수 있는 d 전자와 s 전자가 있지만, 비편재화된 전자 수가 단계마다 1개씩 늘지는 않아요. 원자의 크기도 원소마다 덜 변해요. 꾸준히 변하는 요인이 하나도 없으므로 경향이 덜 뚜렷해요.</p>",
      misconception: {
        // EN (option A): Transition elements are metals. They have delocalized d-electrons as well as s-electrons, which is why their melting points are high.
        "0": "전이 원소는 금속이에요. s 전자뿐만 아니라 비편재화된 d 전자도 있어서 녹는점이 높아요.",
        // EN (option C): Mass does not decide a melting point. The strength of the metallic bond does.
        "2": "질량은 녹는점을 결정하지 않아요. 녹는점을 결정하는 것은 금속 결합의 세기예요.",
        // EN (option D): Transition elements are metals with metallic bonding. They do not form molecules and have no intermolecular forces.
        "3": "전이 원소는 금속 결합을 하는 금속이에요. 분자를 이루지 않으며 분자 간 힘도 없어요.",
      },
    },

  }
});
