/* s2-3.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's2-3.q', {
  questions: {

    // ── s2-3-q001 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q001": {
      // EN: <p>Which is the best description of a metallic bond?</p>
      stem: "<p>以下哪一項最能描述金屬鍵？</p>",
      options: [
        // EN: The electrostatic attraction between oppositely charged ions
        "帶相反電荷的離子之間的靜電引力",
        // EN: The electrostatic attraction between a lattice of cations and delocalized electrons
        "陽離子晶格與離域電子之間的靜電引力",
        // EN: The electrostatic attraction between a shared pair of electrons and two nuclei
        "共用電子對與兩個原子核之間的靜電引力",
        // EN: The attraction between metal ions in a lattice
        "晶格中金屬離子之間的引力",
      ],
      hints: [
        // EN: A metal contains two kinds of charged particle. Which ones?
        "金屬含有兩種帶電粒子。是哪兩種？",
        // EN: Which particles are positive, and which are negative? Opposite charges attract.
        "哪些粒子帶正電荷，哪些帶負電荷？相反的電荷互相吸引。",
      ],
      // EN: <p>In a metal, the outer electrons are delocalized and the atoms become cations in a lattice. The metallic bond is the electrostatic attraction between the lattice of cations and the delocalized electrons.</p>
      solution: "<p>在金屬中，外層電子離域，原子成為晶格中的陽離子。金屬鍵就是陽離子晶格與離域電子之間的靜電引力 (electrostatic attraction)。</p>",
      misconception: {
        // EN (option A): This describes an ionic bond, which needs cations and anions. A pure metal has no negative ions. The negative particles are delocalized electrons.
        "0": "這是離子鍵的描述，離子鍵需要陽離子和陰離子。純金屬沒有負離子。帶負電荷的粒子是離域電子。",
        // EN (option C): This describes a covalent bond. In a metal the electrons are not shared between two particular atoms. They are delocalized through the whole lattice.
        "2": "這是共價鍵的描述。在金屬中，電子不是由兩個特定的原子共用，而是離域於整個晶格。",
        // EN (option D): Metal ions are all positive, so they repel each other. The attraction is between the cations and the delocalized electrons.
        "3": "金屬離子全都帶正電荷，所以互相排斥。引力存在於陽離子和離域電子之間。",
      },
    },

    // ── s2-3-q002 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q002": {
      // EN: <p>Why does solid aluminium conduct electricity?</p>
      stem: "<p>固態鋁為甚麼能導電？</p>",
      options: [
        // EN: Its ions are free to move through the lattice.
        "它的離子可以在晶格裏自由移動。",
        // EN: Its atoms transfer electrons to each other to form positive and negative ions.
        "它的原子互相轉移電子，形成正離子和負離子。",
        // EN: Its delocalized electrons are free to move through the structure.
        "它的離域電子可以在結構裏自由移動。",
        // EN: Its electrons become free only when the metal is melted.
        "金屬熔化後，它的電子才變得自由。",
      ],
      hints: [
        // EN: A current is a flow of charged particles. Which charged particles in a solid metal can travel?
        "電流是帶電粒子的流動。固態金屬中，哪些帶電粒子可以移到別處？",
      ],
      // EN: <p>A substance conducts electricity if it has charged particles that are free to move. In a metal these are the delocalized electrons. They move through the whole structure and carry charge. The cations stay in the lattice.</p>
      solution: "<p>物質要有可自由移動的帶電粒子才能導電。在金屬中，這些粒子是離域電子 (delocalized electrons)。它們在整個結構裏移動，傳送電荷。陽離子留在晶格中。</p>",
      misconception: {
        // EN (option A): In a solid metal the cations stay in their lattice positions and only vibrate. Moving ions carry charge in molten or dissolved ionic compounds, not in a metal.
        "0": "在固態金屬中，陽離子留在晶格的位置上，只會振動。在熔融或溶解了的離子化合物中，才由移動的離子傳送電荷，金屬則不是。",
        // EN (option B): A pure metal has no negative ions. The outer electrons are not transferred to other atoms. They are delocalized.
        "1": "純金屬沒有負離子。外層電子沒有轉移到其他原子，而是離域。",
        // EN (option D): The delocalized electrons are present in the solid as well as in the liquid. A metal conducts in both states.
        "3": "離域電子在固體和液體中都存在。金屬在兩種物態都能導電。",
      },
    },

    // ── s2-3-q003 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q003": {
      // EN: <p>Which is the best explanation of why metals are malleable?</p>
      stem: "<p>以下哪一項最能解釋金屬為甚麼有展性 (malleable)？</p>",
      options: [
        // EN: The delocalized electrons are free to move and carry charge.
        "離域電子可以自由移動，傳送電荷。",
        // EN: The metallic bonds are weak, so they break when a force is applied.
        "金屬鍵很弱，所以受力時會斷裂。",
        // EN: The intermolecular forces between the layers are weak.
        "各層之間的分子間引力很弱。",
        // EN: The layers of cations can slide over each other without breaking the metallic bond.
        "陽離子層可以互相滑過而金屬鍵不斷裂。",
      ],
      hints: [
        // EN: Malleable means the metal can be hammered into a new shape without breaking. What must the cations do for the shape to change?
        "有展性是指金屬可以錘打成新的形狀而不斷裂。形狀要改變，陽離子必須怎樣？",
        // EN: Is the attraction between the cations and the delocalized electrons lost when the shape changes?
        "形狀改變時，陽離子和離域電子之間的引力有沒有消失？",
      ],
      // EN: <p>The cations are in layers. A force makes the layers slide over each other. The metallic bond is non-directional, so in their new positions the cations are still attracted to the delocalized electrons. The bond is not broken and the metal keeps its new shape.</p>
      solution: "<p>陽離子排成一層一層。受力時，各層互相滑過。金屬鍵無方向性 (non-directional)，所以陽離子在新的位置上仍然受離域電子吸引。金屬鍵沒有斷裂，金屬保持新的形狀。</p>",
      misconception: {
        // EN (option A): This is true, but it explains electrical conductivity. It does not say why the metal can change shape without breaking.
        "0": "這句是對的，但它解釋的是導電性。它沒有說明金屬為甚麼可以改變形狀而不斷裂。",
        // EN (option B): The bond is not broken when a metal is shaped. After the layers slide, the cations are still attracted to the delocalized electrons around them.
        "1": "金屬改變形狀時，金屬鍵並沒有斷裂。各層滑動後，陽離子仍然受四周的離域電子吸引。",
        // EN (option C): A metal contains no molecules, so it has no intermolecular forces. The layers of cations are held by metallic bonding.
        "2": "金屬不含分子，所以沒有分子間引力。陽離子層靠金屬鍵結合在一起。",
      },
    },

    // ── s2-3-q004 · multi · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q004": {
      // EN: <p>Which of these are properties of a typical metal? Select <strong>all</strong> that apply.</p>
      stem: "<p>以下哪些是典型金屬的性質？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: It conducts electricity when solid.
        "固態時導電。",
        // EN: It conducts electricity when liquid.
        "液態時導電。",
        // EN: It breaks into pieces when it is hit with a hammer.
        "用錘敲打時會碎裂。",
        // EN: It is a good conductor of heat.
        "是良好的導熱體。",
        // EN: It conducts electricity only when dissolved in water.
        "只有溶於水時才導電。",
      ],
      hints: [
        // EN: Think about the delocalized electrons. Are they present in the solid? In the liquid?
        "想想離域電子。固體中有沒有？液體中呢？",
        // EN: Two of the options describe an ionic compound, not a metal.
        "其中兩個選項描述的是離子化合物，不是金屬。",
      ],
      // EN: <p>The delocalized electrons are free to move in the solid and in the liquid, so a metal conducts electricity in both states. The delocalized electrons and the closely packed cations also transfer kinetic energy, so a metal conducts heat well. A metal is malleable, not brittle.</p>
      solution: "<p>離域電子在固體和液體中都可以自由移動，所以金屬在兩種物態都能導電。離域電子和緊密排列的陽離子也能傳遞動能，所以金屬導熱良好。金屬有展性，不是脆的。</p>",
      misconception: {
        // EN (option C): This describes a brittle substance, such as an ionic crystal. A metal is malleable: its layers of cations slide without the bond breaking.
        "2": "這是脆的物質的描述，例如離子晶體。金屬有展性：陽離子層滑動時，金屬鍵不會斷裂。",
        // EN (option E): This describes an ionic compound, whose ions are free to move only when it is molten or dissolved. A metal has delocalized electrons that move in the solid.
        "4": "這是離子化合物的描述：它的離子只有在熔融或溶解時才可以自由移動。金屬有離域電子，在固態時也能移動。",
      },
    },

    // ── s2-3-q005 · mcq · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q005": {
      // EN: <p>Which metal has the highest melting point?</p>
      stem: "<p>哪種金屬的熔點最高？</p>",
      options: [
        // EN: Lithium, Li
        "鋰 Li",
        // EN: Sodium, Na
        "鈉 Na",
        // EN: Potassium, K
        "鉀 K",
        // EN: Magnesium, Mg
        "鎂 Mg",
      ],
      hints: [
        // EN: Write the ion each metal forms. Use the group number.
        "寫出每種金屬所形成的離子。利用族的編號。",
        // EN: A greater ion charge means more delocalized electrons per atom and a stronger attraction.
        "離子電荷較大，表示每個原子有較多離域電子，引力也較強。",
      ],
      // EN: <p>Li, Na and K are in group 1. They form 1+ ions and each atom gives one delocalized electron. Magnesium is in group 2. It forms <span class="chem">Mg^2+</span> and each atom gives two delocalized electrons. <span class="chem">Mg^2+</span> is also a small ion (72 pm). So magnesium has the strongest electrostatic attraction between the cations and the delocalized electrons, and the highest melting point (650.0 °C, compared with 180.5 °C for lithium).</p>
      solution: "<p>Li、Na 和 K 在第 1 族。它們形成 1+ 離子，每個原子給出一個離域電子。鎂在第 2 族，形成 <span class=\"chem\">Mg^2+</span>，每個原子給出兩個離域電子。<span class=\"chem\">Mg^2+</span> 也是細小的離子 (72 pm)。所以鎂的陽離子和離域電子之間的靜電引力最強，熔點也最高（650.0 °C，鋰則是 180.5 °C）。</p>",
      misconception: {
        // EN (option A): Lithium has the highest melting point in group 1, because <span class="chem">Li+</span> is the smallest group 1 ion. But its ion has only a 1+ charge, with one delocalized electron per atom. One of the other metals forms a 2+ ion.
        "0": "鋰是第 1 族中熔點最高的，因為 <span class=\"chem\">Li+</span> 是最小的第 1 族離子。但它的離子只有 1+ 電荷，每個原子只有一個離域電子。其餘金屬中，有一種形成 2+ 離子。",
        // EN (option B): Sodium forms a 1+ ion and gives one delocalized electron per atom. Look for a metal whose ion has a greater charge.
        "1": "鈉形成 1+ 離子，每個原子給出一個離域電子。找找哪種金屬的離子電荷較大。",
        // EN (option C): Potassium has the largest ion here and a charge of only 1+. That gives the weakest metallic bonding of the four, so the lowest melting point.
        "2": "這裏鉀的離子最大，電荷也只有 1+。四種金屬中它的金屬鍵最弱，所以熔點最低。",
      },
    },

    // ── s2-3-q006 · numeric · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q006": {
      // EN: <p>In the simple model of metallic bonding, each magnesium atom gives its two outer electrons to become a <span class="chem">Mg^2+</span> ion. Calculate the amount, in mol, of delocalized electrons in 0.25 mol of magnesium.</p>
      stem: "<p>在金屬鍵的簡單模型中，每個鎂原子給出兩個外層電子，成為 <span class=\"chem\">Mg^2+</span> 離子。計算 (calculate) 0.25 mol 鎂中離域電子的物質的量，以 mol 表示。</p>",
      hints: [
        // EN: How many delocalized electrons does one magnesium atom give?
        "一個鎂原子給出多少個離域電子？",
        // EN: Amount of electrons = 2 × amount of magnesium atoms.
        "電子的物質的量 = 2 × 鎂原子的物質的量。",
      ],
      // EN: <p>Each Mg atom gives 2 delocalized electrons.</p><div class="worked__math"><i>n</i>(electrons) = 2 × 0.25 mol = 0.50 mol</div>
      solution: "<p>每個 Mg 原子給出 2 個離域電子。</p><div class=\"worked__math\"><i>n</i>(電子) = 2 × 0.25 mol = 0.50 mol</div>",
    },

    // ── s2-3-q007 · mcq · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q007": {
      // EN: <p>Which change makes a metallic bond <strong>weaker</strong>?</p>
      stem: "<p>以下哪一項改變會令金屬鍵<strong>變弱</strong>？</p>",
      options: [
        // EN: A greater charge on the metal ion
        "金屬離子的電荷較大",
        // EN: A larger ionic radius
        "離子半徑較大",
        // EN: More delocalized electrons per atom
        "每個原子的離域電子較多",
        // EN: A smaller ionic radius
        "離子半徑較小",
      ],
      hints: [
        // EN: Think about the distance between the nucleus of the cation and the delocalized electrons around it.
        "想想陽離子的原子核與四周離域電子之間的距離。",
      ],
      // EN: <p>In a larger ion, the nucleus is further from the delocalized electrons, so the electrostatic attraction is weaker. This is why melting points fall down group 1.</p>
      solution: "<p>離子較大，原子核與離域電子的距離較遠，所以靜電引力較弱。這就是第 1 族金屬的熔點向下遞減的原因。</p>",
      misconception: {
        // EN (option A): A greater charge attracts the delocalized electrons more strongly. This makes the bond stronger.
        "0": "電荷較大，對離域電子的吸引較強。這會令金屬鍵變強。",
        // EN (option C): More delocalized electrons per atom means a stronger attraction between the cations and the electrons. This makes the bond stronger.
        "2": "每個原子的離域電子較多，陽離子和電子之間的引力就較強。這會令金屬鍵變強。",
        // EN (option D): In a smaller ion the nucleus is closer to the delocalized electrons, so the attraction is stronger.
        "3": "離子較小，原子核較接近離域電子，所以引力較強。",
      },
    },

    // ── s2-3-q008 · short · exam · SL · Structure 2.3.1 · 2 marks
    "s2-3-q008": {
      // EN: <p>Describe the bonding in solid magnesium.</p>
      stem: "<p>描述 (describe) 固態鎂中的鍵合。</p>",
      hints: [
        // EN: Name the kind of attraction. The same two words are used for ionic and covalent bonds.
        "寫出這種引力的名稱。描述離子鍵和共價鍵時，也用同樣的兩個英文字。",
        // EN: Which two kinds of particle attract each other in a metal?
        "金屬中是哪兩種粒子互相吸引？",
      ],
      // EN: <p>Magnesium is a metal, so the bonding is metallic. The markscheme wording is: the electrostatic attraction between a lattice of cations and delocalized electrons. One mark is for “electrostatic attraction”. The other is for naming both particles. Write “cations” or “positive ions”, not “atoms” or “nuclei”, and use the word “delocalized”.</p>
      solution: "<p>鎂是金屬，所以鍵合是金屬鍵。評分準則的用語是：the electrostatic attraction between a lattice of cations and delocalized electrons（陽離子晶格與離域電子之間的靜電引力）。「electrostatic attraction」佔一分。寫出兩種粒子佔另一分。要寫「cations」或「positive ions」，不要寫「atoms」或「nuclei」，並且要用「delocalized」這個詞。</p>",
      // EN: <p>Electrostatic attraction between a lattice of cations (<span class="chem">Mg^2+</span> ions) and delocalized electrons.</p>
      answer: "<p>陽離子（<span class=\"chem\">Mg^2+</span> 離子）晶格與離域電子之間的靜電引力。</p>",
      markscheme: [
        // EN: electrostatic attraction
        "靜電引力",
        // EN: between a lattice of cations / positive ions / Mg<sup>2+</sup> ions AND delocalized electrons
        "在陽離子 / 正離子 / Mg<sup>2+</sup> 離子的晶格，以及離域電子之間",
      ],
    },

    // ── s2-3-q009 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q009": {
      // EN: <p>The table shows some properties of four substances, A to D. Which substance is a metal?</p><div class="table-scroll"><table class="data"><caption>Properties of substances A to D</caption><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col" class="num">Conducts when solid</th><th scope="col" class="num">Conducts when liquid</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">801</td><td class="num">no</td><td class="num">yes</td></tr><tr><th scope="row">B</th><td class="num">1085</td><td class="num">yes</td><td class="num">yes</td></tr><tr><th scope="row">C</th><td class="num">1710</td><td class="num">no</td><td class="num">no</td></tr><tr><th scope="row">D</th><td class="num">−95</td><td class="num">no</td><td class="num">no</td></tr></tbody></table></div>
      stem: "<p>下表列出 A 至 D 四種物質的一些性質。哪種物質是金屬？</p><div class=\"table-scroll\"><table class=\"data\"><caption>物質 A 至 D 的性質</caption><thead><tr><th scope=\"col\">物質</th><th scope=\"col\" class=\"num\">熔點 / °C</th><th scope=\"col\" class=\"num\">固態時導電</th><th scope=\"col\" class=\"num\">液態時導電</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">801</td><td class=\"num\">否</td><td class=\"num\">是</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">1085</td><td class=\"num\">是</td><td class=\"num\">是</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">1710</td><td class=\"num\">否</td><td class=\"num\">否</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">−95</td><td class=\"num\">否</td><td class=\"num\">否</td></tr></tbody></table></div>",
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
        "金屬中由哪些粒子傳送電荷？它們在固體中可以自由移動嗎？",
      ],
      // EN: <p>A metal has delocalized electrons that are free to move in the solid and in the liquid. Only B conducts in both states. (A behaves like an ionic compound, C like a covalent network and D like a molecular substance.)</p><p>The data are real: A is sodium chloride, B is copper, C is silicon dioxide and D is hexane. Only the melting point of copper is in the data booklet.</p>
      solution: "<p>金屬有離域電子，在固體和液體中都可以自由移動。只有 B 在兩種物態都導電。（A 的表現像離子化合物，C 像巨型共價結構 (covalent network)，D 像分子物質。）</p><p>這些是真實數據：A 是氯化鈉，B 是銅，C 是二氧化矽，D 是己烷。只有銅的熔點列於數據手冊。</p>",
      misconception: {
        // EN (option A): A conducts only as a liquid. Its charged particles are fixed in the solid and free in the liquid. That is an ionic compound.
        "0": "A 只在液態時導電。它的帶電粒子在固體中位置固定，在液體中可以自由移動。這是離子化合物。",
        // EN (option C): C has a very high melting point but never conducts. It has no charged particles that are free to move. That fits a covalent network structure.
        "2": "C 的熔點很高，但從不導電。它沒有可自由移動的帶電粒子。這符合巨型共價結構。",
        // EN (option D): D has a low melting point and does not conduct. That fits a molecular substance.
        "3": "D 的熔點低，而且不導電。這符合分子物質。",
      },
    },

    // ── s2-3-q010 · short · exam · SL · Structure 2.3.2 · 3 marks
    "s2-3-q010": {
      // EN: <p>Calcium melts at 842.0 °C. Potassium melts at 63.38 °C. The ionic radius of <span class="chem">Ca^2+</span> is 100 pm and the ionic radius of <span class="chem">K+</span> is 138 pm.</p><p>Explain why calcium has the higher melting point.</p>
      stem: "<p>鈣的熔點是 842.0 °C。鉀的熔點是 63.38 °C。<span class=\"chem\">Ca^2+</span> 的離子半徑是 100 pm，<span class=\"chem\">K+</span> 的離子半徑是 138 pm。</p><p>解釋 (explain) 為甚麼鈣的熔點較高。</p>",
      hints: [
        // EN: Compare the two ions: their charges, then their radii.
        "比較兩種離子：先比較電荷，再比較半徑。",
        // EN: Finish by saying what attracts what, and link it to the energy needed.
        "最後說明甚麼吸引甚麼，並連繫到所需的能量。",
      ],
      // EN: <p>Charge: calcium is in group 2 and forms <span class="chem">Ca^2+</span>. Potassium is in group 1 and forms <span class="chem">K+</span>. So calcium has the greater ion charge and two delocalized electrons per atom, not one.</p><p>Radius: <span class="chem">Ca^2+</span> (100 pm) is smaller than <span class="chem">K+</span> (138 pm).</p><p>Both differences make the electrostatic attraction between the cations and the delocalized electrons stronger in calcium. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p>電荷：鈣在第 2 族，形成 <span class=\"chem\">Ca^2+</span>。鉀在第 1 族，形成 <span class=\"chem\">K+</span>。所以鈣的離子電荷較大，每個原子有兩個離域電子，不是一個。</p><p>半徑：<span class=\"chem\">Ca^2+</span> (100 pm) 比 <span class=\"chem\">K+</span> (138 pm) 小。</p><p>兩項分別都令鈣的陽離子和離域電子之間的靜電引力較強。克服它需要較多能量，所以熔點較高。</p>",
      // EN: <p><span class="chem">Ca^2+</span> has a greater charge than <span class="chem">K+</span>, and calcium has two delocalized electrons per atom while potassium has one. <span class="chem">Ca^2+</span> also has a smaller ionic radius. So the electrostatic attraction between the cations and the delocalized electrons is stronger in calcium, and more energy is needed to overcome it.</p>
      answer: "<p><span class=\"chem\">Ca^2+</span> 的電荷比 <span class=\"chem\">K+</span> 大，而且鈣每個原子有兩個離域電子，鉀只有一個。<span class=\"chem\">Ca^2+</span> 的離子半徑也較小。所以鈣的陽離子和離域電子之間的靜電引力較強，需要較多能量才能克服。</p>",
      markscheme: [
        // EN: Ca<sup>2+</sup> has a greater charge than K<sup>+</sup> / calcium has two delocalized electrons per atom and potassium has one
        "Ca<sup>2+</sup> 的電荷比 K<sup>+</sup> 大 / 鈣每個原子有兩個離域電子，鉀有一個",
        // EN: Ca<sup>2+</sup> has a smaller (ionic) radius than K<sup>+</sup>
        "Ca<sup>2+</sup> 的（離子）半徑比 K<sup>+</sup> 小",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons in calcium / stronger metallic bonding in calcium, so more energy is needed to overcome it
        "鈣的陽離子和離域電子之間的靜電引力較強 / 鈣的金屬鍵較強，所以需要較多能量才能克服",
      ],
    },

    // ── s2-3-q011 · order · exam · SL · Structure 2.3.2 · 2 marks
    "s2-3-q011": {
      // EN: <p>Put these metals in order of melting point, <strong>lowest first</strong>.</p>
      stem: "<p>按熔點把這些金屬排列次序，<strong>由最低開始</strong>。</p>",
      options: [
        // EN: Rubidium, Rb
        "銣 Rb",
        // EN: Potassium, K
        "鉀 K",
        // EN: Sodium, Na
        "鈉 Na",
        // EN: Magnesium, Mg
        "鎂 Mg",
      ],
      hints: [
        // EN: Three of these metals are in group 1. How does the melting point change down the group?
        "其中三種金屬在第 1 族。沿這一族向下，熔點怎樣變化？",
        // EN: One metal forms a 2+ ion. Where does it go?
        "有一種金屬形成 2+ 離子。它應該排在哪裏？",
      ],
      // EN: <p>Rb, K and Na are in group 1. They all form 1+ ions, and the ionic radius increases down the group (<span class="chem">Na+</span> 102 pm, <span class="chem">K+</span> 138 pm, <span class="chem">Rb+</span> 152 pm). A larger ion means weaker attraction, so the order is Rb &lt; K &lt; Na. Magnesium forms a small 2+ ion and has two delocalized electrons per atom, so it is highest.</p><p>Data booklet values: Rb 39.30 °C, K 63.38 °C, Na 97.79 °C, Mg 650.0 °C.</p>
      solution: "<p>Rb、K 和 Na 在第 1 族。它們都形成 1+ 離子，而離子半徑沿這一族向下增大（<span class=\"chem\">Na+</span> 102 pm、<span class=\"chem\">K+</span> 138 pm、<span class=\"chem\">Rb+</span> 152 pm）。離子較大，引力就較弱，所以次序是 Rb &lt; K &lt; Na。鎂形成細小的 2+ 離子，每個原子有兩個離域電子，所以熔點最高。</p><p>數據手冊的數值：Rb 39.30 °C、K 63.38 °C、Na 97.79 °C、Mg 650.0 °C。</p>",
    },

    // ── s2-3-q012 · mcq · exam · SL · Structure 2.3.2 · 1 mark
    "s2-3-q012": {
      // EN: <p>The melting points of the group 1 metals decrease from lithium to caesium. Which is the best explanation?</p>
      stem: "<p>第 1 族金屬的熔點由鋰至銫遞減。以下哪一項是最好的解釋？</p>",
      options: [
        // EN: The charge on the metal ion decreases down the group.
        "金屬離子的電荷沿這一族向下減小。",
        // EN: The number of delocalized electrons per atom decreases down the group.
        "每個原子的離域電子數目沿這一族向下減少。",
        // EN: The ionic radius increases, so the attraction between the cations and the delocalized electrons becomes weaker.
        "離子半徑增大，所以陽離子和離域電子之間的引力變弱。",
        // EN: The atoms become heavier, so the intermolecular forces become weaker.
        "原子變重，所以分子間引力變弱。",
      ],
      hints: [
        // EN: What is the same for every group 1 metal? What changes?
        "每種第 1 族金屬有甚麼相同？甚麼改變了？",
      ],
      // EN: <p>Every group 1 ion has a 1+ charge and each atom gives one delocalized electron. The ionic radius increases down the group (<span class="chem">Li+</span> 76 pm to <span class="chem">Cs+</span> 167 pm). The nucleus of each cation is further from the delocalized electrons, so the electrostatic attraction is weaker and less energy is needed to overcome it.</p>
      solution: "<p>每個第 1 族離子的電荷都是 1+，每個原子給出一個離域電子。離子半徑沿這一族向下增大（由 <span class=\"chem\">Li+</span> 的 76 pm 至 <span class=\"chem\">Cs+</span> 的 167 pm）。每個陽離子的原子核與離域電子的距離較遠，所以靜電引力較弱，克服它所需的能量較少。</p>",
      misconception: {
        // EN (option A): All group 1 metals form 1+ ions. The charge does not change down the group.
        "0": "所有第 1 族金屬都形成 1+ 離子。電荷沿這一族向下沒有改變。",
        // EN (option B): Each group 1 atom gives one delocalized electron. The number does not change down the group.
        "1": "每個第 1 族原子都給出一個離域電子。這個數目沿這一族向下沒有改變。",
        // EN (option D): A metal has no molecules, so no intermolecular forces. Mass is also not the reason for a melting point trend.
        "3": "金屬沒有分子，所以沒有分子間引力。質量也不是熔點趨勢的原因。",
      },
    },

    // ── s2-3-q013 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q013": {
      // EN: <p>Copper is used to make electrical wires. Which pair of properties makes copper suitable for this use?</p>
      stem: "<p>銅用來製造電線。哪一對性質令銅適合這個用途？</p>",
      options: [
        // EN: It conducts electricity well, and it can be pulled into a wire without breaking.
        "它導電良好，而且可以拉成金屬線而不斷裂。",
        // EN: It has a high melting point, and it is brittle.
        "它的熔點高，而且是脆的。",
        // EN: It contains ions that are free to move, and it is shiny.
        "它含有可以自由移動的離子，而且有光澤。",
        // EN: It conducts heat well, and it has a high density.
        "它導熱良好，而且密度高。",
      ],
      hints: [
        // EN: What must a wire do? What must you be able to do to the metal to make a wire?
        "電線必須做到甚麼？要把金屬造成電線，你必須能對它做甚麼？",
      ],
      // EN: <p>A wire must carry a current, so the metal must conduct electricity: its delocalized electrons are free to move. The metal must also be shaped into a long thin wire without breaking: its layers of cations can slide without breaking the metallic bond.</p>
      solution: "<p>電線要傳送電流，所以金屬必須導電：它的離域電子可以自由移動。金屬也必須能造成又長又細的線而不斷裂：它的陽離子層可以滑動而金屬鍵不斷裂。</p>",
      misconception: {
        // EN (option B): A brittle material would break when it is pulled into a wire or bent. Metals are not brittle.
        "1": "脆的物料被拉成線或屈曲時會斷裂。金屬不是脆的。",
        // EN (option C): The ions in solid copper are not free to move. The delocalized electrons carry the charge.
        "2": "固態銅中的離子不能自由移動。傳送電荷的是離域電子。",
        // EN (option D): Both statements are true of copper, but neither is the reason it is used for wires. A wire must carry a current and must be easy to shape.
        "3": "兩句都符合銅的性質，但都不是銅用來製造電線的原因。電線必須能傳送電流，也必須容易造成所需的形狀。",
      },
    },

    // ── s2-3-q014 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q014": {
      // EN: <p>Which statement correctly compares solid sodium, Na, with solid sodium chloride, NaCl?</p>
      stem: "<p>以下哪一項正確地比較了固態鈉 Na 和固態氯化鈉 (sodium chloride) NaCl？</p>",
      options: [
        // EN: Both conduct electricity, because both contain sodium ions.
        "兩者都導電，因為兩者都含有鈉離子。",
        // EN: Sodium conducts electricity because it has delocalized electrons. Sodium chloride does not, because its ions are held in fixed positions.
        "鈉導電，因為它有離域電子。氯化鈉不導電，因為它的離子固定在原位。",
        // EN: Neither conducts electricity, because the particles in a solid cannot move.
        "兩者都不導電，因為固體中的粒子不能移動。",
        // EN: Sodium chloride conducts electricity because it contains ions. Sodium does not, because it contains only atoms.
        "氯化鈉導電，因為它含有離子。鈉不導電，因為它只含有原子。",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move. Check each solid.
        "物質要有可自由移動的帶電粒子才能導電。逐一檢查兩種固體。",
      ],
      // EN: <p>Solid sodium is a metal: a lattice of <span class="chem">Na+</span> ions with delocalized electrons that are free to move and carry charge. Solid sodium chloride is ionic: its <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions are held in fixed positions, and it has no delocalized electrons. So only sodium conducts as a solid.</p>
      solution: "<p>固態鈉是金屬：<span class=\"chem\">Na+</span> 離子的晶格，加上可以自由移動、傳送電荷的離域電子。固態氯化鈉是離子化合物：它的 <span class=\"chem\">Na+</span> 和 <span class=\"chem\">Cl-</span> 離子固定在原位，而且沒有離域電子。所以只有鈉在固態時導電。</p>",
      misconception: {
        // EN (option A): Containing ions is not enough. The charged particles must be free to move. In solid sodium chloride the ions are fixed in the lattice.
        "0": "只含有離子並不足夠。帶電粒子必須可以自由移動。在固態氯化鈉中，離子固定在晶格裏。",
        // EN (option C): The cations in solid sodium cannot travel, but the delocalized electrons can. So solid sodium conducts.
        "2": "固態鈉中的陽離子不能移到別處，但離域電子可以。所以固態鈉能導電。",
        // EN (option D): This is the wrong way round. Solid sodium has delocalized electrons that are free to move. The ions in solid sodium chloride are not free to move.
        "3": "這樣說倒轉了。固態鈉有可以自由移動的離域電子。固態氯化鈉中的離子不能自由移動。",
      },
    },

    // ── s2-3-q015 · multi · exam · SL · Structure 2.3.2 · 1 mark
    "s2-3-q015": {
      // EN: <p>Aluminium has a higher melting point than sodium. Which statements are part of a correct explanation? Select <strong>all</strong> that apply.</p>
      stem: "<p>鋁的熔點比鈉高。以下哪些敘述屬於正確解釋的一部分？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: The aluminium ion has a greater charge than the sodium ion.
        "鋁離子的電荷比鈉離子大。",
        // EN: Aluminium has more delocalized electrons per atom than sodium.
        "鋁每個原子的離域電子比鈉多。",
        // EN: The aluminium ion has a larger ionic radius than the sodium ion.
        "鋁離子的離子半徑比鈉離子大。",
        // EN: The attraction between the cations and the delocalized electrons is stronger in aluminium.
        "鋁的陽離子和離域電子之間的引力較強。",
        // EN: Aluminium has stronger covalent bonds between its atoms.
        "鋁原子之間的共價鍵較強。",
      ],
      hints: [
        // EN: Write both ions. Compare their charges and their sizes.
        "寫出兩種離子。比較它們的電荷和大小。",
        // EN: Three statements are correct.
        "有三句是正確的。",
      ],
      // EN: <p>Aluminium forms <span class="chem">Al^3+</span> and gives three delocalized electrons per atom. Sodium forms <span class="chem">Na+</span> and gives one. <span class="chem">Al^3+</span> (54 pm) is also smaller than <span class="chem">Na+</span> (102 pm). So the electrostatic attraction between the cations and the delocalized electrons is stronger in aluminium, and more energy is needed to overcome it (660.3 °C compared with 97.79 °C).</p>
      solution: "<p>鋁形成 <span class=\"chem\">Al^3+</span>，每個原子給出三個離域電子。鈉形成 <span class=\"chem\">Na+</span>，每個原子給出一個。<span class=\"chem\">Al^3+</span> (54 pm) 也比 <span class=\"chem\">Na+</span> (102 pm) 小。所以鋁的陽離子和離域電子之間的靜電引力較強，需要較多能量才能克服（660.3 °C，鈉則是 97.79 °C）。</p>",
      misconception: {
        // EN (option C): The aluminium ion is smaller, not larger: <span class="chem">Al^3+</span> is 54 pm and <span class="chem">Na+</span> is 102 pm. A smaller ion gives a stronger attraction.
        "2": "鋁離子較小，不是較大：<span class=\"chem\">Al^3+</span> 是 54 pm，<span class=\"chem\">Na+</span> 是 102 pm。離子較小，引力較強。",
        // EN (option E): Aluminium is a metal. Its bonding is metallic, not covalent. There are no shared pairs between particular atoms.
        "4": "鋁是金屬。它的鍵合是金屬鍵，不是共價鍵。特定的原子之間沒有共用電子對。",
      },
    },

    // ── s2-3-q016 · short · challenge · SL · Structure 2.3.1 · 3 marks
    "s2-3-q016": {
      // EN: <p>A student writes:</p><p>“Magnesium conducts electricity because its ions are free to move. Magnesium is malleable because the metallic bonds are weak and break when it is hit.”</p><p>Identify the errors, and write a correct explanation of both properties.</p>
      stem: "<p>一名學生寫道：</p><p>「鎂能導電，因為它的離子可以自由移動。鎂有展性，因為金屬鍵很弱，受敲打時會斷裂。」</p><p>指出 (identify) 當中的錯誤，並寫出對這兩種性質的正確解釋。</p>",
      hints: [
        // EN: There is one error in each sentence. Which particles move in a solid metal?
        "每句各有一個錯誤。固態金屬中，哪些粒子會移動？",
        // EN: What happens to the layers of cations, and to the attraction, when a metal is hammered?
        "錘打金屬時，陽離子層會怎樣？引力又會怎樣？",
      ],
      // EN: <p><strong>Error 1:</strong> in a solid metal the ions do not travel. The delocalized electrons are free to move through the structure and carry charge.</p><p><strong>Error 2:</strong> the metallic bonds are not broken. The layers of cations slide over each other. Because the bonding is non-directional, the cations are still attracted to the delocalized electrons in their new positions.</p>
      solution: "<p><strong>錯誤 1：</strong>在固態金屬中，離子不會移到別處。可以在結構裏自由移動、傳送電荷的是離域電子。</p><p><strong>錯誤 2：</strong>金屬鍵沒有斷裂。陽離子層互相滑過。由於鍵合無方向性，陽離子在新的位置上仍然受離域電子吸引。</p>",
      // EN: <p>The ions are not free to move: the cations stay in the lattice. Magnesium conducts because its delocalized electrons are free to move through the structure. The metallic bonds do not break when the metal is hit. Magnesium is malleable because the layers of cations can slide over each other, and the non-directional metallic bond is not broken.</p>
      answer: "<p>離子不能自由移動：陽離子留在晶格中。鎂能導電，是因為它的離域電子可以在結構裏自由移動。金屬受敲打時，金屬鍵不會斷裂。鎂有展性，是因為陽離子層可以互相滑過，而無方向性的金屬鍵沒有斷裂。</p>",
      markscheme: [
        // EN: conducts because delocalized electrons (not ions) are free to move / the cations are in fixed positions in the lattice
        "能導電，是因為離域電子（不是離子）可以自由移動 / 陽離子在晶格中位置固定",
        // EN: malleable because layers of cations / ions can slide over each other
        "有展性，是因為陽離子層 / 離子層可以互相滑過",
        // EN: the metallic bond is not broken when the layers slide / the bonding is non-directional / the cations are still attracted to the delocalized electrons
        "各層滑動時金屬鍵沒有斷裂 / 鍵合無方向性 / 陽離子仍然受離域電子吸引",
      ],
    },

    // ── s2-3-q017 · mcq · challenge · SL · Structure 2.3.2 · 1 mark
    "s2-3-q017": {
      // EN: <p>P, Q, R and S are four s-block metals. The table shows the ion that each one forms. Which option gives the metal with the lowest melting point and the metal with the highest melting point?</p><div class="table-scroll"><table class="data"><caption>Ions formed by metals P to S</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Charge</th><th scope="col" class="num">Radius / pm</th></tr></thead><tbody><tr><th scope="row">P</th><td class="num">1+</td><td class="num">138</td></tr><tr><th scope="row">Q</th><td class="num">2+</td><td class="num">135</td></tr><tr><th scope="row">R</th><td class="num">1+</td><td class="num">167</td></tr><tr><th scope="row">S</th><td class="num">2+</td><td class="num">100</td></tr></tbody></table></div>
      stem: "<p>P、Q、R 和 S 是四種 s 區金屬。下表列出每種金屬所形成的離子。哪個選項給出了熔點最低的金屬和熔點最高的金屬？</p><div class=\"table-scroll\"><table class=\"data\"><caption>金屬 P 至 S 所形成的離子</caption><thead><tr><th scope=\"col\">金屬</th><th scope=\"col\" class=\"num\">電荷</th><th scope=\"col\" class=\"num\">半徑 / pm</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td class=\"num\">1+</td><td class=\"num\">138</td></tr><tr><th scope=\"row\">Q</th><td class=\"num\">2+</td><td class=\"num\">135</td></tr><tr><th scope=\"row\">R</th><td class=\"num\">1+</td><td class=\"num\">167</td></tr><tr><th scope=\"row\">S</th><td class=\"num\">2+</td><td class=\"num\">100</td></tr></tbody></table></div>",
      options: [
        // EN: Lowest: P. Highest: Q.
        "最低：P。最高：Q。",
        // EN: Lowest: R. Highest: Q.
        "最低：R。最高：Q。",
        // EN: Lowest: R. Highest: S.
        "最低：R。最高：S。",
        // EN: Lowest: S. Highest: R.
        "最低：S。最高：R。",
      ],
      hints: [
        // EN: Weakest bonding: the smallest charge and the largest radius.
        "鍵合最弱：電荷最小，半徑最大。",
        // EN: Strongest bonding: the greatest charge and the smallest radius.
        "鍵合最強：電荷最大，半徑最小。",
      ],
      // EN: <p>Lowest: the ions with a 1+ charge (P and R) give weaker bonding than the 2+ ions. Of these, R has the larger radius (167 pm), so R has the weakest attraction and the lowest melting point.</p><p>Highest: of the 2+ ions (Q and S), S has the smaller radius (100 pm), so S has the strongest attraction and the highest melting point.</p><p>These are the data for K, Ba, Cs and Ca. Their melting points are 63.38 °C, 725.0 °C, 28.44 °C and 842.0 °C.</p>
      solution: "<p>最低：帶 1+ 電荷的離子（P 和 R）的鍵合比 2+ 離子弱。兩者之中，R 的半徑較大 (167 pm)，所以 R 的引力最弱，熔點最低。</p><p>最高：在 2+ 離子（Q 和 S）之中，S 的半徑較小 (100 pm)，所以 S 的引力最強，熔點最高。</p><p>這些是 K、Ba、Cs 和 Ca 的數據。它們的熔點分別是 63.38 °C、725.0 °C、28.44 °C 和 842.0 °C。</p>",
      misconception: {
        // EN (option A): P and R have the same charge, but R has the larger ion, so R has the weaker bonding. Q and S have the same charge, but S has the smaller ion, so S has the stronger bonding.
        "0": "P 和 R 的電荷相同，但 R 的離子較大，所以 R 的鍵合較弱。Q 和 S 的電荷相同，但 S 的離子較小，所以 S 的鍵合較強。",
        // EN (option B): R is right for the lowest. For the highest, compare Q and S: the charge is the same, and the smaller ion gives the stronger attraction.
        "1": "最低的是 R，這是對的。至於最高的，比較 Q 和 S：電荷相同，較小的離子引力較強。",
        // EN (option D): This is the wrong way round. A small ion with a large charge gives the strongest bonding and the highest melting point.
        "3": "這樣說倒轉了。細小而電荷大的離子，鍵合最強，熔點最高。",
      },
    },

    // ── s2-3-q023 · short · exam · SL · Structure 2.3.1 · 2 marks
    "s2-3-q023": {
      // EN: <p>Explain why metals are good conductors of heat.</p>
      stem: "<p>解釋 (explain) 金屬為甚麼是良好的導熱體。</p>",
      hints: [
        // EN: Which particles in a metal can travel from the hot part to the cold part?
        "金屬中哪些粒子可以由熱的部分移到冷的部分？",
        // EN: Heat is passed on as kinetic energy. Say which particles carry it.
        "熱以動能的形式傳遞。說出由哪些粒子傳遞。",
      ],
      // EN: <p>Heating gives the particles more kinetic energy. The delocalized electrons are free to move through the structure, so they carry this kinetic energy to the cooler parts quickly. The closely packed cations help: a cation that vibrates strongly passes energy to its neighbours. The cations do not travel, and no bonds are broken.</p>
      solution: "<p>加熱令粒子得到更多動能。離域電子可以在結構裏自由移動，所以很快就把這些動能帶到較冷的部分。緊密排列的陽離子也有幫助：振動得劇烈的陽離子會把能量傳給相鄰的陽離子。陽離子不會移到別處，也沒有鍵斷裂。</p>",
      // EN: <p>Metals contain delocalized electrons that are free to move through the structure. They carry kinetic energy from the hot part to the cooler part. The cations are also closely packed, so a vibrating cation passes energy to its neighbours.</p>
      answer: "<p>金屬含有離域電子，可以在結構裏自由移動。它們把動能由熱的部分帶到較冷的部分。陽離子也排列得很緊密，所以振動的陽離子會把能量傳給相鄰的陽離子。</p>",
      markscheme: [
        // EN: delocalized electrons are free to move (through the structure)
        "離域電子可以（在結構裏）自由移動",
        // EN: the delocalized electrons transfer / carry (kinetic) energy through the metal / closely packed cations pass on vibrations (kinetic energy) to their neighbours
        "離域電子把（動）能傳遞 / 帶到金屬各處 / 緊密排列的陽離子把振動（動能）傳給相鄰的陽離子",
      ],
    },

    // ── s2-3-q024 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q024": {
      // EN: <p>Aluminium is rolled into thin sheets of foil. Which property of aluminium makes this possible, and what is the explanation?</p>
      stem: "<p>鋁可以輾壓成薄薄的鋁箔。鋁的哪種性質令這件事可行？解釋又是甚麼？</p>",
      options: [
        // EN: It is malleable, because layers of cations can slide over each other without breaking the metallic bond.
        "它有展性，因為陽離子層可以互相滑過而金屬鍵不斷裂。",
        // EN: It is malleable, because its delocalized electrons are free to move and carry charge.
        "它有展性，因為它的離域電子可以自由移動，傳送電荷。",
        // EN: It conducts heat, because its delocalized electrons transfer kinetic energy.
        "它能導熱，因為它的離域電子傳遞動能。",
        // EN: It is brittle, because ions with the same charge repel when a layer slides.
        "它是脆的，因為一層離子滑動時，帶相同電荷的離子互相排斥。",
      ],
      hints: [
        // EN: Rolling changes the shape of the metal without breaking it. What is the name of that property?
        "輾壓改變了金屬的形狀，卻沒有令它斷裂。這種性質叫甚麼？",
        // EN: Check that the explanation fits the property, not a different one.
        "檢查解釋是否配合這種性質，而不是另一種性質。",
      ],
      // EN: <p>Rolling a metal into a sheet changes its shape without breaking it, so the property is malleability. The layers of cations slide over each other. The metallic bond is non-directional, so the cations are still attracted to the delocalized electrons in their new positions.</p>
      solution: "<p>把金屬輾壓成薄片，是改變它的形狀而沒有令它斷裂，所以這種性質是展性 (malleability)。陽離子層互相滑過。金屬鍵無方向性，所以陽離子在新的位置上仍然受離域電子吸引。</p>",
      misconception: {
        // EN (option B): The property is right, but the explanation is for electrical conductivity. Malleability is about layers of cations sliding without the bond breaking.
        "1": "性質是對的，但解釋的是導電性。展性的解釋是陽離子層滑動而金屬鍵不斷裂。",
        // EN (option C): This is true of aluminium, but it is not what lets you roll it into a thin sheet. A sheet needs a metal that changes shape without breaking.
        "2": "這符合鋁的性質，但它不是鋁能輾壓成薄片的原因。造薄片需要可以改變形狀而不斷裂的金屬。",
        // EN (option D): This describes an ionic crystal. A brittle material would break into pieces when rolled.
        "3": "這是離子晶體的描述。脆的物料在輾壓時會碎裂。",
      },
    },

    // ── s2-3-q025 · multi · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q025": {
      // EN: <p>Magnesium is a metal. Magnesium oxide, MgO, is an ionic compound. Which <strong>physical</strong> properties are different for solid magnesium and solid magnesium oxide? Select <strong>all</strong> that apply.</p>
      stem: "<p>鎂是金屬。氧化鎂 (magnesium oxide) MgO 是離子化合物。固態鎂和固態氧化鎂的哪些<strong>物理</strong>性質不同？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: Electrical conductivity of the solid
        "固體的導電性",
        // EN: Malleability
        "展性",
        // EN: Whether the substance contains positive ions
        "物質是否含有正離子",
        // EN: Whether the substance is a solid at room temperature
        "物質在室溫下是否固體",
      ],
      hints: [
        // EN: Think about what each solid contains: which charged particles, and can they move?
        "想想每種固體含有甚麼：有哪些帶電粒子？它們可以移動嗎？",
        // EN: What happens when you hit each solid with a hammer?
        "用錘敲打每種固體，會怎樣？",
      ],
      // EN: <p>Solid magnesium conducts electricity, because its delocalized electrons are free to move. Solid magnesium oxide does not, because its ions are held in fixed positions. Magnesium is malleable: its layers of cations slide without the bond breaking. Magnesium oxide is brittle: when a layer slides, ions with the same charge repel. Both are solids at room temperature and both contain <span class="chem">Mg^2+</span> ions.</p>
      solution: "<p>固態鎂能導電，因為它的離域電子可以自由移動。固態氧化鎂不導電，因為它的離子固定在原位。鎂有展性：陽離子層滑動時，金屬鍵不會斷裂。氧化鎂是脆的：一層離子滑動時，帶相同電荷的離子互相排斥。兩者在室溫下都是固體，兩者都含有 <span class=\"chem\">Mg^2+</span> 離子。</p>",
      misconception: {
        // EN (option C): Both contain <span class="chem">Mg^2+</span> ions. Magnesium has them in a lattice with delocalized electrons. Magnesium oxide has them in a lattice with <span class="chem">O^2-</span> ions. Also, this is not a physical property that you can observe.
        "2": "兩者都含有 <span class=\"chem\">Mg^2+</span> 離子。在鎂中，這些離子與離域電子組成晶格。在氧化鎂中，這些離子與 <span class=\"chem\">O^2-</span> 離子組成晶格。此外，這不是可以觀察到的物理性質。",
        // EN (option D): Both are solids at room temperature. Both have strong electrostatic attractions through the whole lattice.
        "3": "兩者在室溫下都是固體。兩者的整個晶格都有強的靜電引力。",
      },
    },

    // ── s2-3-q026 · mcq · challenge · SL · Structure 2.3.1 · 1 mark
    "s2-3-q026": {
      // EN: <p>Liquid sodium and liquid sodium chloride both conduct electricity. Which row shows the particles that carry the charge in each liquid?</p><div class="table-scroll"><table class="data"><caption>Particles that carry the charge</caption><thead><tr><th scope="col">Option</th><th scope="col" class="num">Liquid sodium</th><th scope="col" class="num">Liquid sodium chloride</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">ions</td><td class="num">ions</td></tr><tr><th scope="row">B</th><td class="num">delocalized electrons</td><td class="num">ions</td></tr><tr><th scope="row">C</th><td class="num">ions</td><td class="num">delocalized electrons</td></tr><tr><th scope="row">D</th><td class="num">delocalized electrons</td><td class="num">delocalized electrons</td></tr></tbody></table></div>
      stem: "<p>液態鈉和液態氯化鈉都能導電。哪一行顯示了在每種液體中傳送電荷的粒子？</p><div class=\"table-scroll\"><table class=\"data\"><caption>傳送電荷的粒子</caption><thead><tr><th scope=\"col\">選項</th><th scope=\"col\" class=\"num\">液態鈉</th><th scope=\"col\" class=\"num\">液態氯化鈉</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">離子</td><td class=\"num\">離子</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">離域電子</td><td class=\"num\">離子</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">離子</td><td class=\"num\">離域電子</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">離域電子</td><td class=\"num\">離域電子</td></tr></tbody></table></div>",
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
        "兩種物質中，哪一種是金屬？金屬中由甚麼傳送電荷？",
        // EN: Why does solid sodium chloride not conduct, when liquid sodium chloride does?
        "為甚麼固態氯化鈉不導電，液態氯化鈉卻導電？",
      ],
      // EN: <p>Sodium is a metal. Its delocalized electrons are free to move in the solid and in the liquid, and they carry the charge. Sodium chloride is ionic. It has no delocalized electrons. When it melts, the <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions become free to move and carry the charge.</p>
      solution: "<p>鈉是金屬。它的離域電子在固體和液體中都可以自由移動，並傳送電荷。氯化鈉是離子化合物，沒有離域電子。熔化時，<span class=\"chem\">Na+</span> 和 <span class=\"chem\">Cl-</span> 離子變得可以自由移動，並傳送電荷。</p>",
      misconception: {
        // EN (option A): This is right for sodium chloride. But sodium is a metal. Its delocalized electrons are still there in the liquid, and they carry the charge.
        "0": "氯化鈉的部分是對的。但鈉是金屬。它的離域電子在液體中仍然存在，並傳送電荷。",
        // EN (option C): This is the wrong way round. The metal has the delocalized electrons. The ionic compound has ions that become free to move when it melts.
        "2": "這樣說倒轉了。有離域電子的是金屬。離子化合物的離子在熔化時才可以自由移動。",
        // EN (option D): Sodium chloride is ionic. It has no delocalized electrons. When it melts, its ions are free to move and carry the charge.
        "3": "氯化鈉是離子化合物，沒有離域電子。熔化時，它的離子可以自由移動，並傳送電荷。",
      },
    },

    // ── s2-3-q027 · short · challenge · SL · Structure 2.3.2 · 3 marks
    "s2-3-q027": {
      // EN: <p>Lithium melts at 180.5 °C. Magnesium melts at 650.0 °C. The ionic radius of <span class="chem">Li+</span> is 76 pm and the ionic radius of <span class="chem">Mg^2+</span> is 72 pm.</p><p>A student says: “Magnesium has the higher melting point mainly because its ion is smaller.” Use the data to discuss this statement, and explain the difference in melting point.</p>
      stem: "<p>鋰的熔點是 180.5 °C。鎂的熔點是 650.0 °C。<span class=\"chem\">Li+</span> 的離子半徑是 76 pm，<span class=\"chem\">Mg^2+</span> 的離子半徑是 72 pm。</p><p>一名學生說：「鎂的熔點較高，主要是因為它的離子較小。」利用數據討論 (discuss) 這個說法，並解釋 (explain) 熔點的差別。</p>",
      hints: [
        // EN: Compare the two radii. Is the difference large or small?
        "比較兩個半徑。相差大還是小？",
        // EN: What else is different about the two ions? Use the group numbers.
        "兩種離子還有甚麼不同？利用族的編號。",
      ],
      // EN: <p><strong>Radius:</strong> 72 pm and 76 pm are almost the same. The smaller radius of <span class="chem">Mg^2+</span> helps a little, but it is not the main reason.</p><p><strong>Charge:</strong> lithium is in group 1 and forms <span class="chem">Li+</span>, with one delocalized electron per atom. Magnesium is in group 2 and forms <span class="chem">Mg^2+</span>, with two.</p><p><strong>Link:</strong> the greater charge and the extra delocalized electron make the electrostatic attraction between the cations and the delocalized electrons stronger in magnesium. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p><strong>半徑：</strong>72 pm 和 76 pm 幾乎相同。<span class=\"chem\">Mg^2+</span> 的半徑較小，有少許幫助，但不是主要原因。</p><p><strong>電荷：</strong>鋰在第 1 族，形成 <span class=\"chem\">Li+</span>，每個原子有一個離域電子。鎂在第 2 族，形成 <span class=\"chem\">Mg^2+</span>，每個原子有兩個。</p><p><strong>連繫：</strong>電荷較大，加上多一個離域電子，令鎂的陽離子和離域電子之間的靜電引力較強。克服它需要較多能量，所以熔點較高。</p>",
      // EN: <p>The two ionic radii are almost the same (72 pm and 76 pm), so the radius cannot be the main reason. The main difference is the charge: <span class="chem">Mg^2+</span> has a greater charge than <span class="chem">Li+</span>, and magnesium has two delocalized electrons per atom while lithium has one. So the electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, and more energy is needed to overcome it.</p>
      answer: "<p>兩個離子半徑幾乎相同（72 pm 和 76 pm），所以半徑不可能是主要原因。主要的分別是電荷：<span class=\"chem\">Mg^2+</span> 的電荷比 <span class=\"chem\">Li+</span> 大，而且鎂每個原子有兩個離域電子，鋰只有一個。所以鎂的陽離子和離域電子之間的靜電引力較強，需要較多能量才能克服。</p>",
      markscheme: [
        // EN: the ionic radii are almost the same / differ by only 4 pm, so radius is not the main reason
        "離子半徑幾乎相同 / 只相差 4 pm，所以半徑不是主要原因",
        // EN: Mg<sup>2+</sup> has a greater charge than Li<sup>+</sup> / magnesium has two delocalized electrons per atom and lithium has one
        "Mg<sup>2+</sup> 的電荷比 Li<sup>+</sup> 大 / 鎂每個原子有兩個離域電子，鋰有一個",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons in magnesium / stronger metallic bonding in magnesium, so more energy is needed to overcome it
        "鎂的陽離子和離域電子之間的靜電引力較強 / 鎂的金屬鍵較強，所以需要較多能量才能克服",
      ],
    },

    // ── s2-3-q018 · mcq · foundation · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q018": {
      // EN: <p>Titanium has the electron configuration [Ar] 3d<sup>2</sup> 4s<sup>2</sup>. Which electrons are delocalized in titanium metal?</p>
      stem: "<p>鈦的電子排佈是 [Ar] 3d<sup>2</sup> 4s<sup>2</sup>。在金屬鈦中，哪些電子離域？</p>",
      options: [
        // EN: 4s electrons only
        "只有 4s 電子",
        // EN: 3d electrons as well as 4s electrons
        "除了 4s 電子，還有 3d 電子",
        // EN: 3p electrons as well as 4s electrons
        "除了 4s 電子，還有 3p 電子",
        // EN: All 22 electrons
        "全部 22 個電子",
      ],
      hints: [
        // EN: What does syllabus statement 2.3.3 say about transition elements?
        "課程大綱條文 2.3.3 怎樣描述過渡元素？",
      ],
      // EN: <p>Transition elements have delocalized d-electrons. In titanium, 3d electrons are delocalized as well as 4s electrons. The 3d and 4s sublevels are close in energy.</p>
      solution: "<p>過渡元素有離域的 d 電子 (delocalized d-electrons)。在鈦中，除了 4s 電子，3d 電子也離域。3d 和 4s 亞層的能量很接近。</p>",
      misconception: {
        // EN (option A): This is true for an s-block metal such as calcium. A transition element also has delocalized d-electrons.
        "0": "s 區金屬（例如鈣）才是這樣。過渡元素還有離域的 d 電子。",
        // EN (option C): The 3p electrons are in a full inner sublevel, held strongly by the nucleus. They are not delocalized.
        "2": "3p 電子在全滿的內層亞層，受原子核強烈吸引。它們沒有離域。",
        // EN (option D): The inner electrons stay with each nucleus. They are part of the cation. Only outer electrons are delocalized.
        "3": "內層電子留在各自的原子核旁，是陽離子的一部分。只有外層電子離域。",
      },
    },

    // ── s2-3-q019 · short · exam · AHL · Structure 2.3.3 · 2 marks
    "s2-3-q019": {
      // EN: <p>Chromium is a transition element. It melts at 1907 °C. Calcium, in the same period, melts at 842.0 °C.</p><p>Explain why chromium has a much higher melting point than calcium.</p>
      stem: "<p>鉻是過渡元素，熔點是 1907 °C。同一週期的鈣，熔點是 842.0 °C。</p><p>解釋 (explain) 為甚麼鉻的熔點比鈣高得多。</p>",
      hints: [
        // EN: Which electrons are delocalized in calcium? Which are delocalized in a transition element?
        "鈣中哪些電子離域？過渡元素中哪些電子離域？",
        // EN: Finish with the attraction and the energy needed to overcome it.
        "最後寫出引力，以及克服它所需的能量。",
      ],
      // EN: <p>Calcium has only its two 4s electrons to delocalize. In chromium, 3d electrons are delocalized as well as 4s electrons. More delocalized electrons per atom gives a stronger electrostatic attraction between the cations and the delocalized electrons. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p>鈣只有兩個 4s 電子可以離域。在鉻中，除了 4s 電子，3d 電子也離域。每個原子的離域電子較多，陽離子和離域電子之間的靜電引力就較強。克服它需要較多能量，所以熔點較高。</p>",
      // EN: <p>In chromium, 3d electrons are delocalized as well as 4s electrons, so chromium has more delocalized electrons per atom than calcium. The electrostatic attraction between the cations and the delocalized electrons is stronger in chromium, so more energy is needed to overcome it.</p>
      answer: "<p>在鉻中，除了 4s 電子，3d 電子也離域，所以鉻每個原子的離域電子比鈣多。鉻的陽離子和離域電子之間的靜電引力較強，所以需要較多能量才能克服。</p>",
      markscheme: [
        // EN: chromium has delocalized d-electrons / 3d electrons as well as 4s electrons are delocalized / chromium has more delocalized electrons (per atom)
        "鉻有離域的 d 電子 / 3d 電子和 4s 電子都離域 / 鉻（每個原子）的離域電子較多",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons / stronger metallic bonding in chromium (so more energy is needed to overcome it)
        "陽離子和離域電子之間的靜電引力較強 / 鉻的金屬鍵較強（所以需要較多能量才能克服）",
      ],
    },

    // ── s2-3-q020 · mcq · exam · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q020": {
      // EN: <p>Which is the best explanation of why iron conducts electricity?</p>
      stem: "<p>以下哪一項最能解釋鐵為甚麼導電？</p>",
      options: [
        // EN: Iron ions have variable oxidation states, so they can move through the lattice.
        "鐵離子有可變氧化態，所以可以在晶格裏移動。",
        // EN: Iron forms coloured complex ions.
        "鐵形成有色的絡離子。",
        // EN: Its d-electrons are held tightly by each nucleus.
        "它的 d 電子受各個原子核緊緊吸引。",
        // EN: It has delocalized d-electrons and s-electrons that are free to move through the structure.
        "它有離域的 d 電子和 s 電子，可以在結構裏自由移動。",
      ],
      hints: [
        // EN: The explanation has the same form as for any metal. Which particles are free to move?
        "解釋的形式和任何金屬都一樣。哪些粒子可以自由移動？",
      ],
      // EN: <p>A metal conducts because it has delocalized electrons that are free to move through the structure and carry charge. In a transition element such as iron, these include d-electrons as well as s-electrons.</p>
      solution: "<p>金屬能導電，是因為它有離域電子，可以在結構裏自由移動，傳送電荷。在鐵這類過渡元素中，這些電子除了 s 電子，還包括 d 電子。</p>",
      misconception: {
        // EN (option A): Variable oxidation state is a chemical property. The ions in solid iron stay in the lattice. They do not carry the current.
        "0": "可變氧化態是化學性質。固態鐵中的離子留在晶格中，不會傳送電流。",
        // EN (option B): Colour and complex ions are chemical properties of transition elements (Structure 3.1). They do not explain conductivity.
        "1": "顏色和絡離子是過渡元素的化學性質（Structure 3.1）。它們不能解釋導電性。",
        // EN (option C): If the d-electrons were all held tightly they could not carry charge. In a transition element, d-electrons are delocalized.
        "2": "如果 d 電子全都受原子核緊緊吸引，就不能傳送電荷。在過渡元素中，d 電子是離域的。",
      },
    },

    // ── s2-3-q021 · short · challenge · AHL · Structure 2.3.3 · 3 marks
    "s2-3-q021": {
      // EN: <p>The table shows data for three metals in period 4.</p><div class="table-scroll"><table class="data"><caption>Three period 4 metals</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Outer electrons</th><th scope="col" class="num">Melting point / °C</th></tr></thead><tbody><tr><th scope="row">potassium, K</th><td class="num">4s<sup>1</sup></td><td class="num">63.38</td></tr><tr><th scope="row">calcium, Ca</th><td class="num">4s<sup>2</sup></td><td class="num">842.0</td></tr><tr><th scope="row">vanadium, V</th><td class="num">3d<sup>3</sup> 4s<sup>2</sup></td><td class="num">1910</td></tr></tbody></table></div><p>Explain the increase in melting point from potassium to calcium to vanadium.</p>
      stem: "<p>下表列出第 4 週期三種金屬的數據。</p><div class=\"table-scroll\"><table class=\"data\"><caption>第 4 週期的三種金屬</caption><thead><tr><th scope=\"col\">金屬</th><th scope=\"col\" class=\"num\">外層電子</th><th scope=\"col\" class=\"num\">熔點 / °C</th></tr></thead><tbody><tr><th scope=\"row\">鉀 K</th><td class=\"num\">4s<sup>1</sup></td><td class=\"num\">63.38</td></tr><tr><th scope=\"row\">鈣 Ca</th><td class=\"num\">4s<sup>2</sup></td><td class=\"num\">842.0</td></tr><tr><th scope=\"row\">釩 V</th><td class=\"num\">3d<sup>3</sup> 4s<sup>2</sup></td><td class=\"num\">1910</td></tr></tbody></table></div><p>解釋 (explain) 為甚麼由鉀到鈣再到釩，熔點逐步升高。</p>",
      hints: [
        // EN: Take the two steps one at a time. First compare K and Ca using their ions.
        "把兩步分開來看。先用離子比較 K 和 Ca。",
        // EN: What can vanadium delocalize that calcium cannot?
        "釩有甚麼可以離域，而鈣沒有？",
      ],
      // EN: <p><strong>K to Ca:</strong> potassium forms <span class="chem">K+</span> with one delocalized electron per atom. Calcium forms <span class="chem">Ca^2+</span> with two. <span class="chem">Ca^2+</span> is also the smaller ion.</p><p><strong>Ca to V:</strong> vanadium is a transition element. Its 3d electrons are delocalized as well as its 4s electrons, so it has more delocalized electrons per atom than calcium.</p><p><strong>Link:</strong> at each step the electrostatic attraction between the cations and the delocalized electrons becomes stronger, so more energy is needed to overcome it and the melting point rises.</p>
      solution: "<p><strong>K 到 Ca：</strong>鉀形成 <span class=\"chem\">K+</span>，每個原子有一個離域電子。鈣形成 <span class=\"chem\">Ca^2+</span>，每個原子有兩個。<span class=\"chem\">Ca^2+</span> 也是較小的離子。</p><p><strong>Ca 到 V：</strong>釩是過渡元素。除了 4s 電子，它的 3d 電子也離域，所以每個原子的離域電子比鈣多。</p><p><strong>連繫：</strong>每一步，陽離子和離域電子之間的靜電引力都變強，所以克服它需要較多能量，熔點升高。</p>",
      // EN: <p>From K to Ca the ion charge rises from 1+ to 2+, so calcium has two delocalized electrons per atom and potassium has one (and <span class="chem">Ca^2+</span> is the smaller ion). Vanadium is a transition element: 3d electrons are delocalized as well as 4s electrons, so it has more delocalized electrons per atom again. Each time, the electrostatic attraction between the cations and the delocalized electrons is stronger, so more energy is needed to overcome it.</p>
      answer: "<p>由 K 到 Ca，離子電荷由 1+ 增至 2+，所以鈣每個原子有兩個離域電子，鉀只有一個（而且 <span class=\"chem\">Ca^2+</span> 是較小的離子）。釩是過渡元素：3d 電子和 4s 電子都離域，所以每個原子的離域電子更多。每一次，陽離子和離域電子之間的靜電引力都較強，所以需要較多能量才能克服。</p>",
      markscheme: [
        // EN: K to Ca: greater ion charge (2+ compared with 1+) / two delocalized electrons per atom compared with one / Ca<sup>2+</sup> has the smaller ionic radius
        "K 到 Ca：離子電荷較大（2+ 相對於 1+）/ 每個原子有兩個離域電子，相對於一個 / Ca<sup>2+</sup> 的離子半徑較小",
        // EN: vanadium has delocalized d-electrons / 3d as well as 4s electrons are delocalized, so more delocalized electrons per atom
        "釩有離域的 d 電子 / 3d 電子和 4s 電子都離域，所以每個原子的離域電子較多",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons (from K to Ca to V), so more energy is needed to overcome it
        "陽離子和離域電子之間的靜電引力（由 K 到 Ca 到 V）變強，所以需要較多能量才能克服",
      ],
    },

    // ── s2-3-q022 · mcq · challenge · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q022": {
      // EN: <p>From sodium to aluminium the melting point rises at every step. From scandium to copper the melting points are all high, but they do not follow a simple trend. Which is the best reason for this difference?</p>
      stem: "<p>由鈉到鋁，熔點每一步都升高。由鈧到銅，熔點全都很高，但沒有簡單的趨勢。以下哪一項最能說明這個分別的原因？</p>",
      options: [
        // EN: Transition elements have no delocalized electrons, so the metallic model does not apply to them.
        "過渡元素沒有離域電子，所以金屬模型不適用於它們。",
        // EN: From Na to Al each step adds one delocalized electron per atom and makes the ion much smaller. From Sc to Cu every element has d-electrons and s-electrons that can be delocalized, and no single factor changes steadily.
        "由 Na 到 Al，每一步都令每個原子多一個離域電子，也令離子小得多。由 Sc 到 Cu，每種元素都有可以離域的 d 電子和 s 電子，沒有任何一個因素穩定地改變。",
        // EN: From Sc to Cu the atoms become heavier, and heavier atoms always melt at lower temperatures.
        "由 Sc 到 Cu，原子越來越重，而較重的原子熔點一定較低。",
        // EN: Transition elements form molecules, so their melting points depend on intermolecular forces.
        "過渡元素形成分子，所以它們的熔點取決於分子間引力。",
      ],
      hints: [
        // EN: What changes at each step from Na to Mg to Al? Does the same thing change steadily from Sc to Cu?
        "由 Na 到 Mg 到 Al，每一步有甚麼改變？由 Sc 到 Cu，同樣的東西有沒有穩定地改變？",
      ],
      // EN: <p>From Na to Al, the ion charge and the number of delocalized electrons per atom go from 1 to 2 to 3, and the ionic radius falls from 102 pm to 54 pm. All these changes strengthen the bonding, so the trend is clear. Across the d-block every element has d-electrons and s-electrons that can be delocalized, but the number of delocalized electrons does not rise by one at each step. The size of the atoms also changes less from one element to the next. No single factor changes steadily, so the trend is less evident.</p>
      solution: "<p>由 Na 到 Al，離子電荷和每個原子的離域電子數目由 1 到 2 再到 3，離子半徑由 102 pm 減至 54 pm。這些改變全都令鍵合變強，所以趨勢很清楚。橫跨 d 區，每種元素都有可以離域的 d 電子和 s 電子，但離域電子的數目不是每一步都增加一個。由一種元素到下一種，原子大小的變化也較小。沒有任何一個因素穩定地改變，所以趨勢沒有那麼明顯。</p>",
      misconception: {
        // EN (option A): Transition elements are metals. They have delocalized d-electrons as well as s-electrons, which is why their melting points are high.
        "0": "過渡元素是金屬。除了 s 電子，它們還有離域的 d 電子，所以熔點高。",
        // EN (option C): Mass does not decide a melting point. The strength of the metallic bond does.
        "2": "熔點不是由質量決定，而是由金屬鍵的強度決定。",
        // EN (option D): Transition elements are metals with metallic bonding. They do not form molecules and have no intermolecular forces.
        "3": "過渡元素是具有金屬鍵的金屬。它們不形成分子，也沒有分子間引力。",
      },
    },

  }
});
