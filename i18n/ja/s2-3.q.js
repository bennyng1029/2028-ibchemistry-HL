/* s2-3.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-3.q', {
  questions: {

    // ── s2-3-q001 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q001": {
      // EN: <p>Which is the best description of a metallic bond?</p>
      stem: "<p>金属結合を最もよく表しているのはどれですか。</p>",
      options: [
        // EN: The electrostatic attraction between oppositely charged ions
        "反対の電荷をもつイオンの間の静電気的な引力",
        // EN: The electrostatic attraction between a lattice of cations and delocalized electrons
        "陽イオンの結晶格子と非局在化電子の間の静電気的な引力",
        // EN: The electrostatic attraction between a shared pair of electrons and two nuclei
        "共有電子対と 2 つの原子核の間の静電気的な引力",
        // EN: The attraction between metal ions in a lattice
        "結晶格子の中の金属イオンどうしの引力",
      ],
      hints: [
        // EN: A metal contains two kinds of charged particle. Which ones?
        "金属には、電荷をもつ粒子が 2 種類あります。どれとどれですか。",
        // EN: Which particles are positive, and which are negative? Opposite charges attract.
        "正の電荷をもつ粒子はどれで、負の電荷をもつ粒子はどれですか。反対の電荷は引き合います。",
      ],
      // EN: <p>In a metal, the outer electrons are delocalized and the atoms become cations in a lattice. The metallic bond is the electrostatic attraction between the lattice of cations and the delocalized electrons.</p>
      solution: "<p>金属では、外側の電子が非局在化し、原子は結晶格子の中の陽イオンになります。金属結合 (metallic bond) は、陽イオンの結晶格子 (lattice of cations) と非局在化電子 (delocalized electrons) の間の静電気的な引力 (electrostatic attraction) です。</p>",
      misconception: {
        // EN (option A): This describes an ionic bond, which needs cations and anions. A pure metal has no negative ions. The negative particles are delocalized electrons.
        "0": "これはイオン結合の説明です。イオン結合には陽イオンと陰イオンが必要です。純粋な金属に陰イオンはありません。負の電荷をもつ粒子は非局在化電子です。",
        // EN (option C): This describes a covalent bond. In a metal the electrons are not shared between two particular atoms. They are delocalized through the whole lattice.
        "2": "これは共有結合の説明です。金属では、電子は決まった 2 つの原子の間で共有されているのではありません。結晶格子全体に非局在化しています。",
        // EN (option D): Metal ions are all positive, so they repel each other. The attraction is between the cations and the delocalized electrons.
        "3": "金属イオンはすべて正の電荷をもつので、たがいに反発します。引力がはたらくのは、陽イオンと非局在化電子の間です。",
      },
    },

    // ── s2-3-q002 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q002": {
      // EN: <p>Why does solid aluminium conduct electricity?</p>
      stem: "<p>固体のアルミニウムが電気を通すのはなぜですか。</p>",
      options: [
        // EN: Its ions are free to move through the lattice.
        "イオンが結晶格子の中を自由に動けるから。",
        // EN: Its atoms transfer electrons to each other to form positive and negative ions.
        "原子どうしが電子をやり取りして、陽イオンと陰イオンになるから。",
        // EN: Its delocalized electrons are free to move through the structure.
        "非局在化電子が構造の中を自由に動けるから。",
        // EN: Its electrons become free only when the metal is melted.
        "金属が融解したときだけ、電子が自由になるから。",
      ],
      hints: [
        // EN: A current is a flow of charged particles. Which charged particles in a solid metal can travel?
        "電流は、電荷をもつ粒子の流れです。固体の金属の中で移動できる、電荷をもつ粒子はどれですか。",
      ],
      // EN: <p>A substance conducts electricity if it has charged particles that are free to move. In a metal these are the delocalized electrons. They move through the whole structure and carry charge. The cations stay in the lattice.</p>
      solution: "<p>物質は、自由に動ける電荷をもつ粒子があれば電気を通します。金属では、それが非局在化電子 (delocalized electrons) です。非局在化電子は構造全体を動き、電荷を運びます。陽イオンは結晶格子にとどまります。</p>",
      misconception: {
        // EN (option A): In a solid metal the cations stay in their lattice positions and only vibrate. Moving ions carry charge in molten or dissolved ionic compounds, not in a metal.
        "0": "固体の金属では、陽イオンは結晶格子の位置にとどまり、振動するだけです。イオンが動いて電荷を運ぶのは、融解したイオン化合物や溶かしたイオン化合物で、金属ではありません。",
        // EN (option B): A pure metal has no negative ions. The outer electrons are not transferred to other atoms. They are delocalized.
        "1": "純粋な金属に陰イオンはありません。外側の電子は、ほかの原子に移るのではありません。非局在化しています。",
        // EN (option D): The delocalized electrons are present in the solid as well as in the liquid. A metal conducts in both states.
        "3": "非局在化電子は、液体だけでなく固体にもあります。金属はどちらの状態でも電気を通します。",
      },
    },

    // ── s2-3-q003 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q003": {
      // EN: <p>Which is the best explanation of why metals are malleable?</p>
      stem: "<p>金属に展性がある (malleable) 理由を最もよく説明しているのはどれですか。</p>",
      options: [
        // EN: The delocalized electrons are free to move and carry charge.
        "非局在化電子が自由に動き、電荷を運ぶから。",
        // EN: The metallic bonds are weak, so they break when a force is applied.
        "金属結合は弱いので、力を加えると切れるから。",
        // EN: The intermolecular forces between the layers are weak.
        "層の間の分子間力が弱いから。",
        // EN: The layers of cations can slide over each other without breaking the metallic bond.
        "金属結合が切れることなく、陽イオンの層がたがいにすべるから。",
      ],
      hints: [
        // EN: Malleable means the metal can be hammered into a new shape without breaking. What must the cations do for the shape to change?
        "展性があるとは、金属をたたいても割れずに新しい形にできることです。形が変わるには、陽イオンはどうならなければなりませんか。",
        // EN: Is the attraction between the cations and the delocalized electrons lost when the shape changes?
        "形が変わるとき、陽イオンと非局在化電子の間の引力はなくなりますか。",
      ],
      // EN: <p>The cations are in layers. A force makes the layers slide over each other. The metallic bond is non-directional, so in their new positions the cations are still attracted to the delocalized electrons. The bond is not broken and the metal keeps its new shape.</p>
      solution: "<p>陽イオンは層になっています。力を加えると、層がたがいにすべります。金属結合には方向性がない (non-directional) ので、陽イオンは新しい位置でも非局在化電子に引きつけられています。結合は切れず、金属は新しい形を保ちます。</p>",
      misconception: {
        // EN (option A): This is true, but it explains electrical conductivity. It does not say why the metal can change shape without breaking.
        "0": "これは正しい文ですが、電気伝導性の説明です。金属が割れずに形を変えられる理由にはなっていません。",
        // EN (option B): The bond is not broken when a metal is shaped. After the layers slide, the cations are still attracted to the delocalized electrons around them.
        "1": "金属の形を変えても、結合は切れません。層がすべったあとも、陽イオンはまわりの非局在化電子に引きつけられています。",
        // EN (option C): A metal contains no molecules, so it has no intermolecular forces. The layers of cations are held by metallic bonding.
        "2": "金属には分子がないので、分子間力もありません。陽イオンの層をまとめているのは金属結合です。",
      },
    },

    // ── s2-3-q004 · multi · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q004": {
      // EN: <p>Which of these are properties of a typical metal? Select <strong>all</strong> that apply.</p>
      stem: "<p>典型的な金属の性質はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
      options: [
        // EN: It conducts electricity when solid.
        "固体のとき電気を通す。",
        // EN: It conducts electricity when liquid.
        "液体のとき電気を通す。",
        // EN: It breaks into pieces when it is hit with a hammer.
        "ハンマーでたたくと、ばらばらに割れる。",
        // EN: It is a good conductor of heat.
        "熱をよく伝える。",
        // EN: It conducts electricity only when dissolved in water.
        "水に溶かしたときだけ電気を通す。",
      ],
      hints: [
        // EN: Think about the delocalized electrons. Are they present in the solid? In the liquid?
        "非局在化電子について考えましょう。固体にはありますか。液体にはありますか。",
        // EN: Two of the options describe an ionic compound, not a metal.
        "選択肢のうち 2 つは、金属ではなくイオン化合物の説明です。",
      ],
      // EN: <p>The delocalized electrons are free to move in the solid and in the liquid, so a metal conducts electricity in both states. The delocalized electrons and the closely packed cations also transfer kinetic energy, so a metal conducts heat well. A metal is malleable, not brittle.</p>
      solution: "<p>非局在化電子は、固体でも液体でも自由に動けます。だから金属は、どちらの状態でも電気を通します。非局在化電子と、すき間なく詰まった陽イオンは、運動エネルギーも伝えます。だから金属は熱をよく伝えます。金属には展性があり、もろくはありません。</p>",
      misconception: {
        // EN (option C): This describes a brittle substance, such as an ionic crystal. A metal is malleable: its layers of cations slide without the bond breaking.
        "2": "これは、イオン結晶のようなもろい物質の説明です。金属には展性があります。陽イオンの層がすべっても、結合は切れません。",
        // EN (option E): This describes an ionic compound, whose ions are free to move only when it is molten or dissolved. A metal has delocalized electrons that move in the solid.
        "4": "これはイオン化合物の説明です。イオン化合物のイオンが自由に動けるのは、融解したときか溶かしたときだけです。金属には、固体の中で動ける非局在化電子があります。",
      },
    },

    // ── s2-3-q005 · mcq · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q005": {
      // EN: <p>Which metal has the highest melting point?</p>
      stem: "<p>融点が最も高い金属はどれですか。</p>",
      options: [
        // EN: Lithium, Li
        "リチウム Li",
        // EN: Sodium, Na
        "ナトリウム Na",
        // EN: Potassium, K
        "カリウム K",
        // EN: Magnesium, Mg
        "マグネシウム Mg",
      ],
      hints: [
        // EN: Write the ion each metal forms. Use the group number.
        "それぞれの金属がつくるイオンを書きましょう。族の番号を使います。",
        // EN: A greater ion charge means more delocalized electrons per atom and a stronger attraction.
        "イオンの電荷が大きいほど、原子 1 個あたりの非局在化電子が多く、引力が強くなります。",
      ],
      // EN: <p>Li, Na and K are in group 1. They form 1+ ions and each atom gives one delocalized electron. Magnesium is in group 2. It forms <span class="chem">Mg^2+</span> and each atom gives two delocalized electrons. <span class="chem">Mg^2+</span> is also a small ion (72 pm). So magnesium has the strongest electrostatic attraction between the cations and the delocalized electrons, and the highest melting point (650.0 °C, compared with 180.5 °C for lithium).</p>
      solution: "<p>Li、Na、K は 1 族です。1+ のイオンになり、原子 1 個が非局在化電子を 1 個出します。マグネシウムは 2 族です。<span class=\"chem\">Mg^2+</span> になり、原子 1 個が非局在化電子を 2 個出します。<span class=\"chem\">Mg^2+</span> は小さいイオンでもあります（72 pm）。そのため、陽イオンと非局在化電子の間の静電気的な引力はマグネシウムが最も強く、融点も最も高くなります（650.0 °C。リチウムは 180.5 °C）。</p>",
      misconception: {
        // EN (option A): Lithium has the highest melting point in group 1, because <span class="chem">Li+</span> is the smallest group 1 ion. But its ion has only a 1+ charge, with one delocalized electron per atom. One of the other metals forms a 2+ ion.
        "0": "リチウムは 1 族の中で融点が最も高い金属です。<span class=\"chem\">Li+</span> が 1 族のイオンの中で最も小さいからです。しかし、イオンの電荷は 1+ しかなく、原子 1 個あたりの非局在化電子は 1 個です。ほかの金属の中に、2+ のイオンになるものがあります。",
        // EN (option B): Sodium forms a 1+ ion and gives one delocalized electron per atom. Look for a metal whose ion has a greater charge.
        "1": "ナトリウムは 1+ のイオンになり、原子 1 個あたりの非局在化電子は 1 個です。イオンの電荷がもっと大きい金属を探しましょう。",
        // EN (option C): Potassium has the largest ion here and a charge of only 1+. That gives the weakest metallic bonding of the four, so the lowest melting point.
        "2": "カリウムは、この中でイオンが最も大きく、電荷も 1+ しかありません。4 つの中で金属結合が最も弱いので、融点は最も低くなります。",
      },
    },

    // ── s2-3-q006 · numeric · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q006": {
      // EN: <p>In the simple model of metallic bonding, each magnesium atom gives its two outer electrons to become a <span class="chem">Mg^2+</span> ion. Calculate the amount, in mol, of delocalized electrons in 0.25 mol of magnesium.</p>
      stem: "<p>金属結合の単純なモデルでは、マグネシウム原子 1 個が外側の電子を 2 個出して、<span class=\"chem\">Mg^2+</span> イオンになります。0.25 mol のマグネシウムに含まれる非局在化電子の物質量を、mol 単位で計算しなさい (calculate)。</p>",
      hints: [
        // EN: How many delocalized electrons does one magnesium atom give?
        "マグネシウム原子 1 個は、非局在化電子を何個出しますか。",
        // EN: Amount of electrons = 2 × amount of magnesium atoms.
        "電子の物質量 = 2 × マグネシウム原子の物質量。",
      ],
      // EN: <p>Each Mg atom gives 2 delocalized electrons.</p><div class="worked__math"><i>n</i>(electrons) = 2 × 0.25 mol = 0.50 mol</div>
      solution: "<p>Mg 原子 1 個が、非局在化電子を 2 個出します。</p><div class=\"worked__math\"><i>n</i>(電子) = 2 × 0.25 mol = 0.50 mol</div>",
    },

    // ── s2-3-q007 · mcq · foundation · SL · Structure 2.3.2 · 1 mark
    "s2-3-q007": {
      // EN: <p>Which change makes a metallic bond <strong>weaker</strong>?</p>
      stem: "<p>金属結合を<strong>弱く</strong>する変化はどれですか。</p>",
      options: [
        // EN: A greater charge on the metal ion
        "金属イオンの電荷が大きくなる",
        // EN: A larger ionic radius
        "イオン半径が大きくなる",
        // EN: More delocalized electrons per atom
        "原子 1 個あたりの非局在化電子が増える",
        // EN: A smaller ionic radius
        "イオン半径が小さくなる",
      ],
      hints: [
        // EN: Think about the distance between the nucleus of the cation and the delocalized electrons around it.
        "陽イオンの原子核と、そのまわりの非局在化電子との距離を考えましょう。",
      ],
      // EN: <p>In a larger ion, the nucleus is further from the delocalized electrons, so the electrostatic attraction is weaker. This is why melting points fall down group 1.</p>
      solution: "<p>大きいイオンでは、原子核が非局在化電子から遠いので、静電気的な引力は弱くなります。1 族を下がるほど融点が低くなるのは、このためです。</p>",
      misconception: {
        // EN (option A): A greater charge attracts the delocalized electrons more strongly. This makes the bond stronger.
        "0": "電荷が大きいほど、非局在化電子を強く引きつけます。結合は強くなります。",
        // EN (option C): More delocalized electrons per atom means a stronger attraction between the cations and the electrons. This makes the bond stronger.
        "2": "原子 1 個あたりの非局在化電子が多いほど、陽イオンと電子の間の引力は強くなります。結合は強くなります。",
        // EN (option D): In a smaller ion the nucleus is closer to the delocalized electrons, so the attraction is stronger.
        "3": "小さいイオンでは、原子核が非局在化電子に近いので、引力は強くなります。",
      },
    },

    // ── s2-3-q008 · short · exam · SL · Structure 2.3.1 · 2 marks
    "s2-3-q008": {
      // EN: <p>Describe the bonding in solid magnesium.</p>
      stem: "<p>固体のマグネシウムの結合を記述しなさい (describe)。</p>",
      hints: [
        // EN: Name the kind of attraction. The same two words are used for ionic and covalent bonds.
        "引力の種類の名前を書きましょう。イオン結合や共有結合でも使う、英語 2 語の言葉です。",
        // EN: Which two kinds of particle attract each other in a metal?
        "金属の中で引き合うのは、どの 2 種類の粒子ですか。",
      ],
      // EN: <p>Magnesium is a metal, so the bonding is metallic. The markscheme wording is: the electrostatic attraction between a lattice of cations and delocalized electrons. One mark is for “electrostatic attraction”. The other is for naming both particles. Write “cations” or “positive ions”, not “atoms” or “nuclei”, and use the word “delocalized”.</p>
      solution: "<p>マグネシウムは金属なので、結合は金属結合です。採点基準の表現は「the electrostatic attraction between a lattice of cations and delocalized electrons」（陽イオンの結晶格子と非局在化電子の間の静電気的な引力）です。1 点は「electrostatic attraction」に入ります。もう 1 点は、両方の粒子を挙げることに入ります。「atoms」（原子）や「nuclei」（原子核）ではなく、「cations」または「positive ions」と書き、「delocalized」という語を使いましょう。</p>",
      // EN: <p>Electrostatic attraction between a lattice of cations (<span class="chem">Mg^2+</span> ions) and delocalized electrons.</p>
      answer: "<p>陽イオン（<span class=\"chem\">Mg^2+</span> イオン）の結晶格子と非局在化電子の間の静電気的な引力。</p>",
      markscheme: [
        // EN: electrostatic attraction
        "静電気的な引力",
        // EN: between a lattice of cations / positive ions / Mg<sup>2+</sup> ions AND delocalized electrons
        "陽イオン / 正のイオン / Mg<sup>2+</sup> イオンの結晶格子と、非局在化電子の間（両方が必要）",
      ],
    },

    // ── s2-3-q009 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q009": {
      // EN: <p>The table shows some properties of four substances, A to D. Which substance is a metal?</p><div class="table-scroll"><table class="data"><caption>Properties of substances A to D</caption><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col" class="num">Conducts when solid</th><th scope="col" class="num">Conducts when liquid</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">801</td><td class="num">no</td><td class="num">yes</td></tr><tr><th scope="row">B</th><td class="num">1085</td><td class="num">yes</td><td class="num">yes</td></tr><tr><th scope="row">C</th><td class="num">1710</td><td class="num">no</td><td class="num">no</td></tr><tr><th scope="row">D</th><td class="num">−95</td><td class="num">no</td><td class="num">no</td></tr></tbody></table></div>
      stem: "<p>表は、4 つの物質 A〜D の性質を示しています。金属はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><caption>物質 A〜D の性質</caption><thead><tr><th scope=\"col\">物質</th><th scope=\"col\" class=\"num\">融点 / °C</th><th scope=\"col\" class=\"num\">固体で電気を通す</th><th scope=\"col\" class=\"num\">液体で電気を通す</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">801</td><td class=\"num\">通さない</td><td class=\"num\">通す</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">1085</td><td class=\"num\">通す</td><td class=\"num\">通す</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">1710</td><td class=\"num\">通さない</td><td class=\"num\">通さない</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">−95</td><td class=\"num\">通さない</td><td class=\"num\">通さない</td></tr></tbody></table></div>",
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
        "金属で電荷を運ぶのは、どの粒子ですか。固体の中で自由に動けますか。",
      ],
      // EN: <p>A metal has delocalized electrons that are free to move in the solid and in the liquid. Only B conducts in both states. (A behaves like an ionic compound, C like a covalent network and D like a molecular substance.)</p><p>The data are real: A is sodium chloride, B is copper, C is silicon dioxide and D is hexane. Only the melting point of copper is in the data booklet.</p>
      solution: "<p>金属には、固体でも液体でも自由に動ける非局在化電子があります。どちらの状態でも電気を通すのは B だけです。（A はイオン化合物、C は共有結合の結晶、D は分子からなる物質のようにふるまいます。）</p><p>データは実際の値です。A は塩化ナトリウム、B は銅、C は二酸化ケイ素、D はヘキサンです。データブックレットに載っているのは、銅の融点だけです。</p>",
      misconception: {
        // EN (option A): A conducts only as a liquid. Its charged particles are fixed in the solid and free in the liquid. That is an ionic compound.
        "0": "A は液体のときだけ電気を通します。電荷をもつ粒子は、固体では固定されていて、液体では自由に動けます。これはイオン化合物です。",
        // EN (option C): C has a very high melting point but never conducts. It has no charged particles that are free to move. That fits a covalent network structure.
        "2": "C は融点がとても高いのに、電気をまったく通しません。自由に動ける電荷をもつ粒子がないのです。共有結合の結晶に当てはまります。",
        // EN (option D): D has a low melting point and does not conduct. That fits a molecular substance.
        "3": "D は融点が低く、電気を通しません。分子からなる物質に当てはまります。",
      },
    },

    // ── s2-3-q010 · short · exam · SL · Structure 2.3.2 · 3 marks
    "s2-3-q010": {
      // EN: <p>Calcium melts at 842.0 °C. Potassium melts at 63.38 °C. The ionic radius of <span class="chem">Ca^2+</span> is 100 pm and the ionic radius of <span class="chem">K+</span> is 138 pm.</p><p>Explain why calcium has the higher melting point.</p>
      stem: "<p>カルシウムは 842.0 °C で融解します。カリウムは 63.38 °C で融解します。<span class=\"chem\">Ca^2+</span> のイオン半径は 100 pm、<span class=\"chem\">K+</span> のイオン半径は 138 pm です。</p><p>カルシウムの融点のほうが高い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare the two ions: their charges, then their radii.
        "2 つのイオンをくらべましょう。まず電荷、次に半径です。",
        // EN: Finish by saying what attracts what, and link it to the energy needed.
        "最後に、何が何を引きつけるのかを書き、必要なエネルギーと結びつけましょう。",
      ],
      // EN: <p>Charge: calcium is in group 2 and forms <span class="chem">Ca^2+</span>. Potassium is in group 1 and forms <span class="chem">K+</span>. So calcium has the greater ion charge and two delocalized electrons per atom, not one.</p><p>Radius: <span class="chem">Ca^2+</span> (100 pm) is smaller than <span class="chem">K+</span> (138 pm).</p><p>Both differences make the electrostatic attraction between the cations and the delocalized electrons stronger in calcium. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p>電荷：カルシウムは 2 族で、<span class=\"chem\">Ca^2+</span> になります。カリウムは 1 族で、<span class=\"chem\">K+</span> になります。だから、カルシウムのほうがイオンの電荷が大きく、原子 1 個あたりの非局在化電子は 1 個ではなく 2 個です。</p><p>半径：<span class=\"chem\">Ca^2+</span>（100 pm）は <span class=\"chem\">K+</span>（138 pm）より小さいです。</p><p>どちらの違いも、陽イオンと非局在化電子の間の静電気的な引力を、カルシウムのほうで強くします。それに打ち勝つのに必要なエネルギーが大きいので、融点は高くなります。</p>",
      // EN: <p><span class="chem">Ca^2+</span> has a greater charge than <span class="chem">K+</span>, and calcium has two delocalized electrons per atom while potassium has one. <span class="chem">Ca^2+</span> also has a smaller ionic radius. So the electrostatic attraction between the cations and the delocalized electrons is stronger in calcium, and more energy is needed to overcome it.</p>
      answer: "<p><span class=\"chem\">Ca^2+</span> は <span class=\"chem\">K+</span> より電荷が大きく、原子 1 個あたりの非局在化電子はカルシウムが 2 個、カリウムが 1 個です。<span class=\"chem\">Ca^2+</span> はイオン半径も小さいです。そのため、陽イオンと非局在化電子の間の静電気的な引力はカルシウムのほうが強く、それに打ち勝つのに必要なエネルギーが大きくなります。</p>",
      markscheme: [
        // EN: Ca<sup>2+</sup> has a greater charge than K<sup>+</sup> / calcium has two delocalized electrons per atom and potassium has one
        "Ca<sup>2+</sup> は K<sup>+</sup> より電荷が大きい / 原子 1 個あたりの非局在化電子はカルシウムが 2 個、カリウムが 1 個",
        // EN: Ca<sup>2+</sup> has a smaller (ionic) radius than K<sup>+</sup>
        "Ca<sup>2+</sup> は K<sup>+</sup> より（イオン）半径が小さい",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons in calcium / stronger metallic bonding in calcium, so more energy is needed to overcome it
        "カルシウムのほうが、陽イオンと非局在化電子の間の静電気的な引力が強い / カルシウムのほうが金属結合が強い。そのため、それに打ち勝つのに必要なエネルギーが大きい",
      ],
    },

    // ── s2-3-q011 · order · exam · SL · Structure 2.3.2 · 2 marks
    "s2-3-q011": {
      // EN: <p>Put these metals in order of melting point, <strong>lowest first</strong>.</p>
      stem: "<p>次の金属を、融点の<strong>低い順</strong>に並べましょう。</p>",
      options: [
        // EN: Rubidium, Rb
        "ルビジウム Rb",
        // EN: Potassium, K
        "カリウム K",
        // EN: Sodium, Na
        "ナトリウム Na",
        // EN: Magnesium, Mg
        "マグネシウム Mg",
      ],
      hints: [
        // EN: Three of these metals are in group 1. How does the melting point change down the group?
        "このうち 3 つは 1 族の金属です。族を下がると、融点はどう変わりますか。",
        // EN: One metal forms a 2+ ion. Where does it go?
        "1 つの金属は 2+ のイオンになります。それはどこに入りますか。",
      ],
      // EN: <p>Rb, K and Na are in group 1. They all form 1+ ions, and the ionic radius increases down the group (<span class="chem">Na+</span> 102 pm, <span class="chem">K+</span> 138 pm, <span class="chem">Rb+</span> 152 pm). A larger ion means weaker attraction, so the order is Rb &lt; K &lt; Na. Magnesium forms a small 2+ ion and has two delocalized electrons per atom, so it is highest.</p><p>Data booklet values: Rb 39.30 °C, K 63.38 °C, Na 97.79 °C, Mg 650.0 °C.</p>
      solution: "<p>Rb、K、Na は 1 族です。どれも 1+ のイオンになり、イオン半径は族を下がるほど大きくなります（<span class=\"chem\">Na+</span> 102 pm、<span class=\"chem\">K+</span> 138 pm、<span class=\"chem\">Rb+</span> 152 pm）。イオンが大きいほど引力は弱いので、順番は Rb &lt; K &lt; Na です。マグネシウムは小さい 2+ のイオンになり、原子 1 個あたりの非局在化電子は 2 個です。だから融点は最も高くなります。</p><p>データブックレットの値：Rb 39.30 °C、K 63.38 °C、Na 97.79 °C、Mg 650.0 °C。</p>",
    },

    // ── s2-3-q012 · mcq · exam · SL · Structure 2.3.2 · 1 mark
    "s2-3-q012": {
      // EN: <p>The melting points of the group 1 metals decrease from lithium to caesium. Which is the best explanation?</p>
      stem: "<p>1 族の金属の融点は、リチウムからセシウムへと低くなります。最もよい説明はどれですか。</p>",
      options: [
        // EN: The charge on the metal ion decreases down the group.
        "族を下がるほど、金属イオンの電荷が小さくなる。",
        // EN: The number of delocalized electrons per atom decreases down the group.
        "族を下がるほど、原子 1 個あたりの非局在化電子の数が減る。",
        // EN: The ionic radius increases, so the attraction between the cations and the delocalized electrons becomes weaker.
        "イオン半径が大きくなるので、陽イオンと非局在化電子の間の引力が弱くなる。",
        // EN: The atoms become heavier, so the intermolecular forces become weaker.
        "原子が重くなるので、分子間力が弱くなる。",
      ],
      hints: [
        // EN: What is the same for every group 1 metal? What changes?
        "1 族の金属すべてに共通なのは何ですか。変わるのは何ですか。",
      ],
      // EN: <p>Every group 1 ion has a 1+ charge and each atom gives one delocalized electron. The ionic radius increases down the group (<span class="chem">Li+</span> 76 pm to <span class="chem">Cs+</span> 167 pm). The nucleus of each cation is further from the delocalized electrons, so the electrostatic attraction is weaker and less energy is needed to overcome it.</p>
      solution: "<p>1 族のイオンはどれも電荷が 1+ で、原子 1 個が非局在化電子を 1 個出します。イオン半径は、族を下がるほど大きくなります（<span class=\"chem\">Li+</span> の 76 pm から <span class=\"chem\">Cs+</span> の 167 pm まで）。それぞれの陽イオンの原子核が非局在化電子から遠くなるので、静電気的な引力は弱くなり、それに打ち勝つのに必要なエネルギーは小さくなります。</p>",
      misconception: {
        // EN (option A): All group 1 metals form 1+ ions. The charge does not change down the group.
        "0": "1 族の金属はどれも 1+ のイオンになります。族を下がっても電荷は変わりません。",
        // EN (option B): Each group 1 atom gives one delocalized electron. The number does not change down the group.
        "1": "1 族の原子はどれも、非局在化電子を 1 個出します。族を下がってもその数は変わりません。",
        // EN (option D): A metal has no molecules, so no intermolecular forces. Mass is also not the reason for a melting point trend.
        "3": "金属には分子がないので、分子間力もありません。質量も、融点の傾向の理由ではありません。",
      },
    },

    // ── s2-3-q013 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q013": {
      // EN: <p>Copper is used to make electrical wires. Which pair of properties makes copper suitable for this use?</p>
      stem: "<p>銅は電線に使われます。銅がこの用途に向いているのは、どの 2 つの性質があるからですか。</p>",
      options: [
        // EN: It conducts electricity well, and it can be pulled into a wire without breaking.
        "電気をよく通し、切れずに引きのばして線にできる。",
        // EN: It has a high melting point, and it is brittle.
        "融点が高く、もろい。",
        // EN: It contains ions that are free to move, and it is shiny.
        "自由に動けるイオンを含み、光沢がある。",
        // EN: It conducts heat well, and it has a high density.
        "熱をよく伝え、密度が大きい。",
      ],
      hints: [
        // EN: What must a wire do? What must you be able to do to the metal to make a wire?
        "電線は何をしなければなりませんか。電線を作るには、金属をどうできなければなりませんか。",
      ],
      // EN: <p>A wire must carry a current, so the metal must conduct electricity: its delocalized electrons are free to move. The metal must also be shaped into a long thin wire without breaking: its layers of cations can slide without breaking the metallic bond.</p>
      solution: "<p>電線は電流を流すので、金属は電気を通す必要があります。金属は、非局在化電子が自由に動けるので電気を通します。また、切れずに細長い線の形にできる必要もあります。金属結合が切れることなく陽イオンの層がすべるので、それができます。</p>",
      misconception: {
        // EN (option B): A brittle material would break when it is pulled into a wire or bent. Metals are not brittle.
        "1": "もろい材料は、引きのばして線にしたり曲げたりすると割れてしまいます。金属はもろくありません。",
        // EN (option C): The ions in solid copper are not free to move. The delocalized electrons carry the charge.
        "2": "固体の銅のイオンは、自由に動けません。電荷を運ぶのは非局在化電子です。",
        // EN (option D): Both statements are true of copper, but neither is the reason it is used for wires. A wire must carry a current and must be easy to shape.
        "3": "どちらも銅について正しい文ですが、電線に使われる理由ではありません。電線は、電流を流せて、形を変えやすくなければなりません。",
      },
    },

    // ── s2-3-q014 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q014": {
      // EN: <p>Which statement correctly compares solid sodium, Na, with solid sodium chloride, NaCl?</p>
      stem: "<p>固体のナトリウム Na と固体の塩化ナトリウム NaCl を正しく比較している文はどれですか。</p>",
      options: [
        // EN: Both conduct electricity, because both contain sodium ions.
        "どちらもナトリウムイオンを含むので、どちらも電気を通す。",
        // EN: Sodium conducts electricity because it has delocalized electrons. Sodium chloride does not, because its ions are held in fixed positions.
        "ナトリウムは非局在化電子があるので電気を通す。塩化ナトリウムは、イオンが決まった位置に固定されているので電気を通さない。",
        // EN: Neither conducts electricity, because the particles in a solid cannot move.
        "固体の粒子は動けないので、どちらも電気を通さない。",
        // EN: Sodium chloride conducts electricity because it contains ions. Sodium does not, because it contains only atoms.
        "塩化ナトリウムはイオンを含むので電気を通す。ナトリウムは原子しか含まないので電気を通さない。",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move. Check each solid.
        "電気を通すには、自由に動ける電荷をもつ粒子が必要です。それぞれの固体を確かめましょう。",
      ],
      // EN: <p>Solid sodium is a metal: a lattice of <span class="chem">Na+</span> ions with delocalized electrons that are free to move and carry charge. Solid sodium chloride is ionic: its <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions are held in fixed positions, and it has no delocalized electrons. So only sodium conducts as a solid.</p>
      solution: "<p>固体のナトリウムは金属です。<span class=\"chem\">Na+</span> イオンの結晶格子と、自由に動いて電荷を運ぶ非局在化電子でできています。固体の塩化ナトリウムはイオン結合の物質です。<span class=\"chem\">Na+</span> イオンと <span class=\"chem\">Cl-</span> イオンは決まった位置に固定されていて、非局在化電子はありません。だから、固体で電気を通すのはナトリウムだけです。</p>",
      misconception: {
        // EN (option A): Containing ions is not enough. The charged particles must be free to move. In solid sodium chloride the ions are fixed in the lattice.
        "0": "イオンを含むだけでは足りません。電荷をもつ粒子が自由に動ける必要があります。固体の塩化ナトリウムでは、イオンは結晶格子に固定されています。",
        // EN (option C): The cations in solid sodium cannot travel, but the delocalized electrons can. So solid sodium conducts.
        "2": "固体のナトリウムの陽イオンは移動できませんが、非局在化電子は移動できます。だから固体のナトリウムは電気を通します。",
        // EN (option D): This is the wrong way round. Solid sodium has delocalized electrons that are free to move. The ions in solid sodium chloride are not free to move.
        "3": "これは逆です。固体のナトリウムには、自由に動ける非局在化電子があります。固体の塩化ナトリウムのイオンは、自由に動けません。",
      },
    },

    // ── s2-3-q015 · multi · exam · SL · Structure 2.3.2 · 1 mark
    "s2-3-q015": {
      // EN: <p>Aluminium has a higher melting point than sodium. Which statements are part of a correct explanation? Select <strong>all</strong> that apply.</p>
      stem: "<p>アルミニウムの融点は、ナトリウムより高いです。正しい説明の一部になっている文はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
      options: [
        // EN: The aluminium ion has a greater charge than the sodium ion.
        "アルミニウムイオンは、ナトリウムイオンより電荷が大きい。",
        // EN: Aluminium has more delocalized electrons per atom than sodium.
        "アルミニウムは、ナトリウムより原子 1 個あたりの非局在化電子が多い。",
        // EN: The aluminium ion has a larger ionic radius than the sodium ion.
        "アルミニウムイオンは、ナトリウムイオンよりイオン半径が大きい。",
        // EN: The attraction between the cations and the delocalized electrons is stronger in aluminium.
        "陽イオンと非局在化電子の間の引力は、アルミニウムのほうが強い。",
        // EN: Aluminium has stronger covalent bonds between its atoms.
        "アルミニウムは、原子の間の共有結合がより強い。",
      ],
      hints: [
        // EN: Write both ions. Compare their charges and their sizes.
        "両方のイオンを書きましょう。電荷と大きさをくらべます。",
        // EN: Three statements are correct.
        "正しい文は 3 つあります。",
      ],
      // EN: <p>Aluminium forms <span class="chem">Al^3+</span> and gives three delocalized electrons per atom. Sodium forms <span class="chem">Na+</span> and gives one. <span class="chem">Al^3+</span> (54 pm) is also smaller than <span class="chem">Na+</span> (102 pm). So the electrostatic attraction between the cations and the delocalized electrons is stronger in aluminium, and more energy is needed to overcome it (660.3 °C compared with 97.79 °C).</p>
      solution: "<p>アルミニウムは <span class=\"chem\">Al^3+</span> になり、原子 1 個が非局在化電子を 3 個出します。ナトリウムは <span class=\"chem\">Na+</span> になり、1 個出します。また、<span class=\"chem\">Al^3+</span>（54 pm）は <span class=\"chem\">Na+</span>（102 pm）より小さいです。そのため、陽イオンと非局在化電子の間の静電気的な引力はアルミニウムのほうが強く、それに打ち勝つのに必要なエネルギーが大きくなります（660.3 °C と 97.79 °C）。</p>",
      misconception: {
        // EN (option C): The aluminium ion is smaller, not larger: <span class="chem">Al^3+</span> is 54 pm and <span class="chem">Na+</span> is 102 pm. A smaller ion gives a stronger attraction.
        "2": "アルミニウムイオンは、大きいのではなく小さいです。<span class=\"chem\">Al^3+</span> は 54 pm、<span class=\"chem\">Na+</span> は 102 pm です。イオンが小さいほど、引力は強くなります。",
        // EN (option E): Aluminium is a metal. Its bonding is metallic, not covalent. There are no shared pairs between particular atoms.
        "4": "アルミニウムは金属です。結合は共有結合ではなく金属結合です。決まった原子どうしの間の共有電子対はありません。",
      },
    },

    // ── s2-3-q016 · short · challenge · SL · Structure 2.3.1 · 3 marks
    "s2-3-q016": {
      // EN: <p>A student writes:</p><p>“Magnesium conducts electricity because its ions are free to move. Magnesium is malleable because the metallic bonds are weak and break when it is hit.”</p><p>Identify the errors, and write a correct explanation of both properties.</p>
      stem: "<p>ある生徒が次のように書きました。</p><p>「マグネシウムが電気を通すのは、イオンが自由に動けるからです。マグネシウムに展性があるのは、金属結合が弱く、たたくと切れるからです。」</p><p>間違いを特定し (identify)、両方の性質の正しい説明を書きなさい。</p>",
      hints: [
        // EN: There is one error in each sentence. Which particles move in a solid metal?
        "それぞれの文に、間違いが 1 つずつあります。固体の金属の中で動くのはどの粒子ですか。",
        // EN: What happens to the layers of cations, and to the attraction, when a metal is hammered?
        "金属をハンマーでたたくと、陽イオンの層と引力はどうなりますか。",
      ],
      // EN: <p><strong>Error 1:</strong> in a solid metal the ions do not travel. The delocalized electrons are free to move through the structure and carry charge.</p><p><strong>Error 2:</strong> the metallic bonds are not broken. The layers of cations slide over each other. Because the bonding is non-directional, the cations are still attracted to the delocalized electrons in their new positions.</p>
      solution: "<p><strong>間違い 1：</strong>固体の金属では、イオンは移動しません。非局在化電子が構造の中を自由に動き、電荷を運びます。</p><p><strong>間違い 2：</strong>金属結合は切れません。陽イオンの層がたがいにすべります。結合に方向性がないので、陽イオンは新しい位置でも非局在化電子に引きつけられています。</p>",
      // EN: <p>The ions are not free to move: the cations stay in the lattice. Magnesium conducts because its delocalized electrons are free to move through the structure. The metallic bonds do not break when the metal is hit. Magnesium is malleable because the layers of cations can slide over each other, and the non-directional metallic bond is not broken.</p>
      answer: "<p>イオンは自由に動けません。陽イオンは結晶格子にとどまります。マグネシウムが電気を通すのは、非局在化電子が構造の中を自由に動けるからです。金属をたたいても、金属結合は切れません。マグネシウムに展性があるのは、陽イオンの層がたがいにすべり、方向性のない金属結合が切れないからです。</p>",
      markscheme: [
        // EN: conducts because delocalized electrons (not ions) are free to move / the cations are in fixed positions in the lattice
        "電気を通すのは、（イオンではなく）非局在化電子が自由に動けるから / 陽イオンは結晶格子の決まった位置にある",
        // EN: malleable because layers of cations / ions can slide over each other
        "展性があるのは、陽イオン / イオンの層がたがいにすべるから",
        // EN: the metallic bond is not broken when the layers slide / the bonding is non-directional / the cations are still attracted to the delocalized electrons
        "層がすべっても金属結合は切れない / 結合に方向性がない / 陽イオンは非局在化電子に引きつけられたままである",
      ],
    },

    // ── s2-3-q017 · mcq · challenge · SL · Structure 2.3.2 · 1 mark
    "s2-3-q017": {
      // EN: <p>P, Q, R and S are four s-block metals. The table shows the ion that each one forms. Which option gives the metal with the lowest melting point and the metal with the highest melting point?</p><div class="table-scroll"><table class="data"><caption>Ions formed by metals P to S</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Charge</th><th scope="col" class="num">Radius / pm</th></tr></thead><tbody><tr><th scope="row">P</th><td class="num">1+</td><td class="num">138</td></tr><tr><th scope="row">Q</th><td class="num">2+</td><td class="num">135</td></tr><tr><th scope="row">R</th><td class="num">1+</td><td class="num">167</td></tr><tr><th scope="row">S</th><td class="num">2+</td><td class="num">100</td></tr></tbody></table></div>
      stem: "<p>P、Q、R、S は、s ブロックの 4 つの金属です。表は、それぞれがつくるイオンを示しています。融点が最も低い金属と最も高い金属の組み合わせは、どの選択肢ですか。</p><div class=\"table-scroll\"><table class=\"data\"><caption>金属 P〜S がつくるイオン</caption><thead><tr><th scope=\"col\">金属</th><th scope=\"col\" class=\"num\">電荷</th><th scope=\"col\" class=\"num\">半径 / pm</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td class=\"num\">1+</td><td class=\"num\">138</td></tr><tr><th scope=\"row\">Q</th><td class=\"num\">2+</td><td class=\"num\">135</td></tr><tr><th scope=\"row\">R</th><td class=\"num\">1+</td><td class=\"num\">167</td></tr><tr><th scope=\"row\">S</th><td class=\"num\">2+</td><td class=\"num\">100</td></tr></tbody></table></div>",
      options: [
        // EN: Lowest: P. Highest: Q.
        "最も低い：P。最も高い：Q。",
        // EN: Lowest: R. Highest: Q.
        "最も低い：R。最も高い：Q。",
        // EN: Lowest: R. Highest: S.
        "最も低い：R。最も高い：S。",
        // EN: Lowest: S. Highest: R.
        "最も低い：S。最も高い：R。",
      ],
      hints: [
        // EN: Weakest bonding: the smallest charge and the largest radius.
        "結合が最も弱いのは、電荷が最も小さく、半径が最も大きいものです。",
        // EN: Strongest bonding: the greatest charge and the smallest radius.
        "結合が最も強いのは、電荷が最も大きく、半径が最も小さいものです。",
      ],
      // EN: <p>Lowest: the ions with a 1+ charge (P and R) give weaker bonding than the 2+ ions. Of these, R has the larger radius (167 pm), so R has the weakest attraction and the lowest melting point.</p><p>Highest: of the 2+ ions (Q and S), S has the smaller radius (100 pm), so S has the strongest attraction and the highest melting point.</p><p>These are the data for K, Ba, Cs and Ca. Their melting points are 63.38 °C, 725.0 °C, 28.44 °C and 842.0 °C.</p>
      solution: "<p>最も低い：電荷が 1+ のイオン（P と R）は、2+ のイオンより結合が弱くなります。このうち R のほうが半径が大きい（167 pm）ので、R の引力が最も弱く、融点が最も低くなります。</p><p>最も高い：2+ のイオン（Q と S）のうち、S のほうが半径が小さい（100 pm）ので、S の引力が最も強く、融点が最も高くなります。</p><p>これは K、Ba、Cs、Ca のデータです。融点は順に 63.38 °C、725.0 °C、28.44 °C、842.0 °C です。</p>",
      misconception: {
        // EN (option A): P and R have the same charge, but R has the larger ion, so R has the weaker bonding. Q and S have the same charge, but S has the smaller ion, so S has the stronger bonding.
        "0": "P と R は電荷が同じですが、R のほうがイオンが大きいので、R のほうが結合が弱くなります。Q と S は電荷が同じですが、S のほうがイオンが小さいので、S のほうが結合が強くなります。",
        // EN (option B): R is right for the lowest. For the highest, compare Q and S: the charge is the same, and the smaller ion gives the stronger attraction.
        "1": "最も低いのは R で合っています。最も高いほうは、Q と S をくらべましょう。電荷は同じで、イオンが小さいほうが引力が強くなります。",
        // EN (option D): This is the wrong way round. A small ion with a large charge gives the strongest bonding and the highest melting point.
        "3": "これは逆です。小さくて電荷の大きいイオンのとき、結合は最も強く、融点は最も高くなります。",
      },
    },

    // ── s2-3-q023 · short · exam · SL · Structure 2.3.1 · 2 marks
    "s2-3-q023": {
      // EN: <p>Explain why metals are good conductors of heat.</p>
      stem: "<p>金属が熱をよく伝える理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Which particles in a metal can travel from the hot part to the cold part?
        "金属の中で、熱い部分から冷たい部分へ移動できるのはどの粒子ですか。",
        // EN: Heat is passed on as kinetic energy. Say which particles carry it.
        "熱は運動エネルギーとして伝わります。どの粒子がそれを運ぶかを書きましょう。",
      ],
      // EN: <p>Heating gives the particles more kinetic energy. The delocalized electrons are free to move through the structure, so they carry this kinetic energy to the cooler parts quickly. The closely packed cations help: a cation that vibrates strongly passes energy to its neighbours. The cations do not travel, and no bonds are broken.</p>
      solution: "<p>加熱すると、粒子の運動エネルギーが大きくなります。非局在化電子は構造の中を自由に動けるので、この運動エネルギーを温度の低い部分へすばやく運びます。すき間なく詰まった陽イオンも役に立ちます。強く振動している陽イオンは、エネルギーをとなりの陽イオンに伝えます。陽イオンは移動せず、結合も切れません。</p>",
      // EN: <p>Metals contain delocalized electrons that are free to move through the structure. They carry kinetic energy from the hot part to the cooler part. The cations are also closely packed, so a vibrating cation passes energy to its neighbours.</p>
      answer: "<p>金属には、構造の中を自由に動ける非局在化電子があります。非局在化電子は、熱い部分から温度の低い部分へ運動エネルギーを運びます。陽イオンもすき間なく詰まっているので、振動している陽イオンがとなりの陽イオンにエネルギーを伝えます。</p>",
      markscheme: [
        // EN: delocalized electrons are free to move (through the structure)
        "非局在化電子が（構造の中を）自由に動ける",
        // EN: the delocalized electrons transfer / carry (kinetic) energy through the metal / closely packed cations pass on vibrations (kinetic energy) to their neighbours
        "非局在化電子が金属の中で（運動）エネルギーを伝える / 運ぶ / すき間なく詰まった陽イオンが振動（運動エネルギー）をとなりの陽イオンに伝える",
      ],
    },

    // ── s2-3-q024 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "s2-3-q024": {
      // EN: <p>Aluminium is rolled into thin sheets of foil. Which property of aluminium makes this possible, and what is the explanation?</p>
      stem: "<p>アルミニウムは、ローラーでうすくのばして箔にします。これを可能にしているアルミニウムの性質はどれで、その説明は何ですか。</p>",
      options: [
        // EN: It is malleable, because layers of cations can slide over each other without breaking the metallic bond.
        "展性がある。金属結合が切れることなく、陽イオンの層がたがいにすべるから。",
        // EN: It is malleable, because its delocalized electrons are free to move and carry charge.
        "展性がある。非局在化電子が自由に動き、電荷を運ぶから。",
        // EN: It conducts heat, because its delocalized electrons transfer kinetic energy.
        "熱を伝える。非局在化電子が運動エネルギーを伝えるから。",
        // EN: It is brittle, because ions with the same charge repel when a layer slides.
        "もろい。層がすべると、同じ電荷のイオンが反発するから。",
      ],
      hints: [
        // EN: Rolling changes the shape of the metal without breaking it. What is the name of that property?
        "ローラーでのばすと、金属は割れずに形が変わります。この性質を何といいますか。",
        // EN: Check that the explanation fits the property, not a different one.
        "説明が、別の性質ではなくその性質に合っているかを確かめましょう。",
      ],
      // EN: <p>Rolling a metal into a sheet changes its shape without breaking it, so the property is malleability. The layers of cations slide over each other. The metallic bond is non-directional, so the cations are still attracted to the delocalized electrons in their new positions.</p>
      solution: "<p>金属をローラーでのばして板にすると、割れずに形が変わります。だから、この性質は展性 (malleability) です。陽イオンの層がたがいにすべります。金属結合には方向性がないので、陽イオンは新しい位置でも非局在化電子に引きつけられています。</p>",
      misconception: {
        // EN (option B): The property is right, but the explanation is for electrical conductivity. Malleability is about layers of cations sliding without the bond breaking.
        "1": "性質は合っていますが、説明は電気伝導性のものです。展性は、結合が切れることなく陽イオンの層がすべることで説明します。",
        // EN (option C): This is true of aluminium, but it is not what lets you roll it into a thin sheet. A sheet needs a metal that changes shape without breaking.
        "2": "アルミニウムについて正しい文ですが、うすい板にのばせる理由ではありません。板にするには、割れずに形が変わる金属が必要です。",
        // EN (option D): This describes an ionic crystal. A brittle material would break into pieces when rolled.
        "3": "これはイオン結晶の説明です。もろい材料は、ローラーでのばすとばらばらに割れてしまいます。",
      },
    },

    // ── s2-3-q025 · multi · exam · SL · Structure 2.3.1 · 1 mark
    "s2-3-q025": {
      // EN: <p>Magnesium is a metal. Magnesium oxide, MgO, is an ionic compound. Which <strong>physical</strong> properties are different for solid magnesium and solid magnesium oxide? Select <strong>all</strong> that apply.</p>
      stem: "<p>マグネシウムは金属です。酸化マグネシウム MgO はイオン化合物です。固体のマグネシウムと固体の酸化マグネシウムで違っている<strong>物理的</strong>性質はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
      options: [
        // EN: Electrical conductivity of the solid
        "固体の電気伝導性",
        // EN: Malleability
        "展性",
        // EN: Whether the substance contains positive ions
        "陽イオンを含むかどうか",
        // EN: Whether the substance is a solid at room temperature
        "室温で固体かどうか",
      ],
      hints: [
        // EN: Think about what each solid contains: which charged particles, and can they move?
        "それぞれの固体が何を含むかを考えましょう。電荷をもつ粒子はどれで、それは動けますか。",
        // EN: What happens when you hit each solid with a hammer?
        "それぞれの固体をハンマーでたたくと、どうなりますか。",
      ],
      // EN: <p>Solid magnesium conducts electricity, because its delocalized electrons are free to move. Solid magnesium oxide does not, because its ions are held in fixed positions. Magnesium is malleable: its layers of cations slide without the bond breaking. Magnesium oxide is brittle: when a layer slides, ions with the same charge repel. Both are solids at room temperature and both contain <span class="chem">Mg^2+</span> ions.</p>
      solution: "<p>固体のマグネシウムは、非局在化電子が自由に動けるので電気を通します。固体の酸化マグネシウムは、イオンが決まった位置に固定されているので電気を通しません。マグネシウムには展性があります。陽イオンの層がすべっても、結合は切れません。酸化マグネシウムはもろいです。層がすべると、同じ電荷のイオンが反発します。どちらも室温で固体で、どちらも <span class=\"chem\">Mg^2+</span> イオンを含みます。</p>",
      misconception: {
        // EN (option C): Both contain <span class="chem">Mg^2+</span> ions. Magnesium has them in a lattice with delocalized electrons. Magnesium oxide has them in a lattice with <span class="chem">O^2-</span> ions. Also, this is not a physical property that you can observe.
        "2": "どちらも <span class=\"chem\">Mg^2+</span> イオンを含みます。マグネシウムでは、このイオンが非局在化電子とともに結晶格子をつくっています。酸化マグネシウムでは、<span class=\"chem\">O^2-</span> イオンとともに結晶格子をつくっています。また、これは観察できる物理的性質ではありません。",
        // EN (option D): Both are solids at room temperature. Both have strong electrostatic attractions through the whole lattice.
        "3": "どちらも室温で固体です。どちらも、結晶格子全体に強い静電気的な引力がはたらいています。",
      },
    },

    // ── s2-3-q026 · mcq · challenge · SL · Structure 2.3.1 · 1 mark
    "s2-3-q026": {
      // EN: <p>Liquid sodium and liquid sodium chloride both conduct electricity. Which row shows the particles that carry the charge in each liquid?</p><div class="table-scroll"><table class="data"><caption>Particles that carry the charge</caption><thead><tr><th scope="col">Option</th><th scope="col" class="num">Liquid sodium</th><th scope="col" class="num">Liquid sodium chloride</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">ions</td><td class="num">ions</td></tr><tr><th scope="row">B</th><td class="num">delocalized electrons</td><td class="num">ions</td></tr><tr><th scope="row">C</th><td class="num">ions</td><td class="num">delocalized electrons</td></tr><tr><th scope="row">D</th><td class="num">delocalized electrons</td><td class="num">delocalized electrons</td></tr></tbody></table></div>
      stem: "<p>液体のナトリウムも液体の塩化ナトリウムも、電気を通します。それぞれの液体で電荷を運ぶ粒子を正しく示している行はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><caption>電荷を運ぶ粒子</caption><thead><tr><th scope=\"col\">選択肢</th><th scope=\"col\" class=\"num\">液体のナトリウム</th><th scope=\"col\" class=\"num\">液体の塩化ナトリウム</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">イオン</td><td class=\"num\">イオン</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">非局在化電子</td><td class=\"num\">イオン</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">イオン</td><td class=\"num\">非局在化電子</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">非局在化電子</td><td class=\"num\">非局在化電子</td></tr></tbody></table></div>",
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
        "2 つの物質のうち、金属はどちらですか。金属では何が電荷を運びますか。",
        // EN: Why does solid sodium chloride not conduct, when liquid sodium chloride does?
        "液体の塩化ナトリウムは電気を通すのに、固体の塩化ナトリウムが通さないのはなぜですか。",
      ],
      // EN: <p>Sodium is a metal. Its delocalized electrons are free to move in the solid and in the liquid, and they carry the charge. Sodium chloride is ionic. It has no delocalized electrons. When it melts, the <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions become free to move and carry the charge.</p>
      solution: "<p>ナトリウムは金属です。非局在化電子は固体でも液体でも自由に動けて、電荷を運びます。塩化ナトリウムはイオン結合の物質で、非局在化電子はありません。融解すると、<span class=\"chem\">Na+</span> イオンと <span class=\"chem\">Cl-</span> イオンが自由に動けるようになり、電荷を運びます。</p>",
      misconception: {
        // EN (option A): This is right for sodium chloride. But sodium is a metal. Its delocalized electrons are still there in the liquid, and they carry the charge.
        "0": "塩化ナトリウムについては合っています。しかし、ナトリウムは金属です。非局在化電子は液体になってもなくならず、電荷を運びます。",
        // EN (option C): This is the wrong way round. The metal has the delocalized electrons. The ionic compound has ions that become free to move when it melts.
        "2": "これは逆です。非局在化電子があるのは金属です。イオン化合物には、融解すると自由に動けるようになるイオンがあります。",
        // EN (option D): Sodium chloride is ionic. It has no delocalized electrons. When it melts, its ions are free to move and carry the charge.
        "3": "塩化ナトリウムはイオン結合の物質で、非局在化電子はありません。融解すると、イオンが自由に動いて電荷を運びます。",
      },
    },

    // ── s2-3-q027 · short · challenge · SL · Structure 2.3.2 · 3 marks
    "s2-3-q027": {
      // EN: <p>Lithium melts at 180.5 °C. Magnesium melts at 650.0 °C. The ionic radius of <span class="chem">Li+</span> is 76 pm and the ionic radius of <span class="chem">Mg^2+</span> is 72 pm.</p><p>A student says: “Magnesium has the higher melting point mainly because its ion is smaller.” Use the data to discuss this statement, and explain the difference in melting point.</p>
      stem: "<p>リチウムは 180.5 °C で融解します。マグネシウムは 650.0 °C で融解します。<span class=\"chem\">Li+</span> のイオン半径は 76 pm、<span class=\"chem\">Mg^2+</span> のイオン半径は 72 pm です。</p><p>ある生徒が「マグネシウムの融点のほうが高いのは、おもにイオンが小さいからだ」と言いました。データを使ってこの意見を論じ (discuss)、融点の違いを説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare the two radii. Is the difference large or small?
        "2 つの半径をくらべましょう。差は大きいですか、小さいですか。",
        // EN: What else is different about the two ions? Use the group numbers.
        "2 つのイオンで、ほかに違うところは何ですか。族の番号を使いましょう。",
      ],
      // EN: <p><strong>Radius:</strong> 72 pm and 76 pm are almost the same. The smaller radius of <span class="chem">Mg^2+</span> helps a little, but it is not the main reason.</p><p><strong>Charge:</strong> lithium is in group 1 and forms <span class="chem">Li+</span>, with one delocalized electron per atom. Magnesium is in group 2 and forms <span class="chem">Mg^2+</span>, with two.</p><p><strong>Link:</strong> the greater charge and the extra delocalized electron make the electrostatic attraction between the cations and the delocalized electrons stronger in magnesium. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p><strong>半径：</strong>72 pm と 76 pm は、ほとんど同じです。<span class=\"chem\">Mg^2+</span> の半径が小さいことは少し効いていますが、おもな理由ではありません。</p><p><strong>電荷：</strong>リチウムは 1 族で、<span class=\"chem\">Li+</span> になり、原子 1 個あたりの非局在化電子は 1 個です。マグネシウムは 2 族で、<span class=\"chem\">Mg^2+</span> になり、2 個です。</p><p><strong>結びつけ：</strong>電荷が大きく、非局在化電子が 1 個多いので、陽イオンと非局在化電子の間の静電気的な引力はマグネシウムのほうが強くなります。それに打ち勝つのに必要なエネルギーが大きいので、融点は高くなります。</p>",
      // EN: <p>The two ionic radii are almost the same (72 pm and 76 pm), so the radius cannot be the main reason. The main difference is the charge: <span class="chem">Mg^2+</span> has a greater charge than <span class="chem">Li+</span>, and magnesium has two delocalized electrons per atom while lithium has one. So the electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, and more energy is needed to overcome it.</p>
      answer: "<p>2 つのイオン半径はほとんど同じ（72 pm と 76 pm）なので、半径がおもな理由のはずがありません。おもな違いは電荷です。<span class=\"chem\">Mg^2+</span> は <span class=\"chem\">Li+</span> より電荷が大きく、原子 1 個あたりの非局在化電子はマグネシウムが 2 個、リチウムが 1 個です。そのため、陽イオンと非局在化電子の間の静電気的な引力はマグネシウムのほうが強く、それに打ち勝つのに必要なエネルギーが大きくなります。</p>",
      markscheme: [
        // EN: the ionic radii are almost the same / differ by only 4 pm, so radius is not the main reason
        "イオン半径はほとんど同じ / 4 pm しか違わないので、半径はおもな理由ではない",
        // EN: Mg<sup>2+</sup> has a greater charge than Li<sup>+</sup> / magnesium has two delocalized electrons per atom and lithium has one
        "Mg<sup>2+</sup> は Li<sup>+</sup> より電荷が大きい / 原子 1 個あたりの非局在化電子はマグネシウムが 2 個、リチウムが 1 個",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons in magnesium / stronger metallic bonding in magnesium, so more energy is needed to overcome it
        "マグネシウムのほうが、陽イオンと非局在化電子の間の静電気的な引力が強い / マグネシウムのほうが金属結合が強い。そのため、それに打ち勝つのに必要なエネルギーが大きい",
      ],
    },

    // ── s2-3-q018 · mcq · foundation · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q018": {
      // EN: <p>Titanium has the electron configuration [Ar] 3d<sup>2</sup> 4s<sup>2</sup>. Which electrons are delocalized in titanium metal?</p>
      stem: "<p>チタンの電子配置は [Ar] 3d<sup>2</sup> 4s<sup>2</sup> です。金属のチタンで非局在化している電子はどれですか。</p>",
      options: [
        // EN: 4s electrons only
        "4s 電子のみ",
        // EN: 3d electrons as well as 4s electrons
        "4s 電子に加えて 3d 電子",
        // EN: 3p electrons as well as 4s electrons
        "4s 電子に加えて 3p 電子",
        // EN: All 22 electrons
        "22 個の電子すべて",
      ],
      hints: [
        // EN: What does syllabus statement 2.3.3 say about transition elements?
        "シラバスの 2.3.3 は、遷移元素について何と述べていますか。",
      ],
      // EN: <p>Transition elements have delocalized d-electrons. In titanium, 3d electrons are delocalized as well as 4s electrons. The 3d and 4s sublevels are close in energy.</p>
      solution: "<p>遷移元素には、非局在化した d 電子 (delocalized d-electrons) があります。チタンでは、4s 電子に加えて 3d 電子も非局在化します。3d 副準位と 4s 副準位は、エネルギーが近いのです。</p>",
      misconception: {
        // EN (option A): This is true for an s-block metal such as calcium. A transition element also has delocalized d-electrons.
        "0": "これは、カルシウムのような s ブロックの金属なら正しいです。遷移元素には、非局在化した d 電子もあります。",
        // EN (option C): The 3p electrons are in a full inner sublevel, held strongly by the nucleus. They are not delocalized.
        "2": "3p 電子は、満たされた内側の副準位にあり、原子核に強く引きつけられています。非局在化しません。",
        // EN (option D): The inner electrons stay with each nucleus. They are part of the cation. Only outer electrons are delocalized.
        "3": "内側の電子は、それぞれの原子核のそばにとどまります。陽イオンの一部です。非局在化するのは外側の電子だけです。",
      },
    },

    // ── s2-3-q019 · short · exam · AHL · Structure 2.3.3 · 2 marks
    "s2-3-q019": {
      // EN: <p>Chromium is a transition element. It melts at 1907 °C. Calcium, in the same period, melts at 842.0 °C.</p><p>Explain why chromium has a much higher melting point than calcium.</p>
      stem: "<p>クロムは遷移元素で、1907 °C で融解します。同じ周期のカルシウムは 842.0 °C で融解します。</p><p>クロムの融点がカルシウムよりずっと高い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Which electrons are delocalized in calcium? Which are delocalized in a transition element?
        "カルシウムで非局在化するのはどの電子ですか。遷移元素ではどの電子が非局在化しますか。",
        // EN: Finish with the attraction and the energy needed to overcome it.
        "最後は、引力と、それに打ち勝つのに必要なエネルギーで終えましょう。",
      ],
      // EN: <p>Calcium has only its two 4s electrons to delocalize. In chromium, 3d electrons are delocalized as well as 4s electrons. More delocalized electrons per atom gives a stronger electrostatic attraction between the cations and the delocalized electrons. More energy is needed to overcome it, so the melting point is higher.</p>
      solution: "<p>カルシウムで非局在化できるのは、2 個の 4s 電子だけです。クロムでは、4s 電子に加えて 3d 電子も非局在化します。原子 1 個あたりの非局在化電子が多いほど、陽イオンと非局在化電子の間の静電気的な引力は強くなります。それに打ち勝つのに必要なエネルギーが大きいので、融点は高くなります。</p>",
      // EN: <p>In chromium, 3d electrons are delocalized as well as 4s electrons, so chromium has more delocalized electrons per atom than calcium. The electrostatic attraction between the cations and the delocalized electrons is stronger in chromium, so more energy is needed to overcome it.</p>
      answer: "<p>クロムでは、4s 電子に加えて 3d 電子も非局在化するので、原子 1 個あたりの非局在化電子がカルシウムより多くなります。陽イオンと非局在化電子の間の静電気的な引力はクロムのほうが強いので、それに打ち勝つのに必要なエネルギーが大きくなります。</p>",
      markscheme: [
        // EN: chromium has delocalized d-electrons / 3d electrons as well as 4s electrons are delocalized / chromium has more delocalized electrons (per atom)
        "クロムには非局在化した d 電子がある / 4s 電子に加えて 3d 電子も非局在化する / クロムのほうが（原子 1 個あたりの）非局在化電子が多い",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons / stronger metallic bonding in chromium (so more energy is needed to overcome it)
        "陽イオンと非局在化電子の間の静電気的な引力がより強い / クロムのほうが金属結合が強い（そのため、それに打ち勝つのに必要なエネルギーが大きい）",
      ],
    },

    // ── s2-3-q020 · mcq · exam · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q020": {
      // EN: <p>Which is the best explanation of why iron conducts electricity?</p>
      stem: "<p>鉄が電気を通す理由を最もよく説明しているのはどれですか。</p>",
      options: [
        // EN: Iron ions have variable oxidation states, so they can move through the lattice.
        "鉄イオンは複数の酸化数をとるので、結晶格子の中を動けるから。",
        // EN: Iron forms coloured complex ions.
        "鉄は有色の錯イオンをつくるから。",
        // EN: Its d-electrons are held tightly by each nucleus.
        "d 電子が、それぞれの原子核に強く引きつけられているから。",
        // EN: It has delocalized d-electrons and s-electrons that are free to move through the structure.
        "構造の中を自由に動ける、非局在化した d 電子と s 電子があるから。",
      ],
      hints: [
        // EN: The explanation has the same form as for any metal. Which particles are free to move?
        "説明の形は、どの金属でも同じです。自由に動けるのはどの粒子ですか。",
      ],
      // EN: <p>A metal conducts because it has delocalized electrons that are free to move through the structure and carry charge. In a transition element such as iron, these include d-electrons as well as s-electrons.</p>
      solution: "<p>金属が電気を通すのは、構造の中を自由に動いて電荷を運ぶ非局在化電子があるからです。鉄のような遷移元素では、その電子に s 電子だけでなく d 電子も含まれます。</p>",
      misconception: {
        // EN (option A): Variable oxidation state is a chemical property. The ions in solid iron stay in the lattice. They do not carry the current.
        "0": "複数の酸化数をとることは、化学的性質です。固体の鉄のイオンは結晶格子にとどまります。電流を運びません。",
        // EN (option B): Colour and complex ions are chemical properties of transition elements (Structure 3.1). They do not explain conductivity.
        "1": "色や錯イオンは、遷移元素の化学的性質です（Structure 3.1）。伝導性の説明にはなりません。",
        // EN (option C): If the d-electrons were all held tightly they could not carry charge. In a transition element, d-electrons are delocalized.
        "2": "d 電子がすべて強く引きつけられていたら、電荷を運べません。遷移元素では、d 電子が非局在化しています。",
      },
    },

    // ── s2-3-q021 · short · challenge · AHL · Structure 2.3.3 · 3 marks
    "s2-3-q021": {
      // EN: <p>The table shows data for three metals in period 4.</p><div class="table-scroll"><table class="data"><caption>Three period 4 metals</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Outer electrons</th><th scope="col" class="num">Melting point / °C</th></tr></thead><tbody><tr><th scope="row">potassium, K</th><td class="num">4s<sup>1</sup></td><td class="num">63.38</td></tr><tr><th scope="row">calcium, Ca</th><td class="num">4s<sup>2</sup></td><td class="num">842.0</td></tr><tr><th scope="row">vanadium, V</th><td class="num">3d<sup>3</sup> 4s<sup>2</sup></td><td class="num">1910</td></tr></tbody></table></div><p>Explain the increase in melting point from potassium to calcium to vanadium.</p>
      stem: "<p>表は、第 4 周期の 3 つの金属のデータです。</p><div class=\"table-scroll\"><table class=\"data\"><caption>第 4 周期の 3 つの金属</caption><thead><tr><th scope=\"col\">金属</th><th scope=\"col\" class=\"num\">外側の電子</th><th scope=\"col\" class=\"num\">融点 / °C</th></tr></thead><tbody><tr><th scope=\"row\">カリウム K</th><td class=\"num\">4s<sup>1</sup></td><td class=\"num\">63.38</td></tr><tr><th scope=\"row\">カルシウム Ca</th><td class=\"num\">4s<sup>2</sup></td><td class=\"num\">842.0</td></tr><tr><th scope=\"row\">バナジウム V</th><td class=\"num\">3d<sup>3</sup> 4s<sup>2</sup></td><td class=\"num\">1910</td></tr></tbody></table></div><p>カリウム、カルシウム、バナジウムの順に融点が高くなる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Take the two steps one at a time. First compare K and Ca using their ions.
        "2 つの段階を 1 つずつ考えましょう。まず、イオンを使って K と Ca をくらべます。",
        // EN: What can vanadium delocalize that calcium cannot?
        "カルシウムでは非局在化できず、バナジウムでは非局在化できるものは何ですか。",
      ],
      // EN: <p><strong>K to Ca:</strong> potassium forms <span class="chem">K+</span> with one delocalized electron per atom. Calcium forms <span class="chem">Ca^2+</span> with two. <span class="chem">Ca^2+</span> is also the smaller ion.</p><p><strong>Ca to V:</strong> vanadium is a transition element. Its 3d electrons are delocalized as well as its 4s electrons, so it has more delocalized electrons per atom than calcium.</p><p><strong>Link:</strong> at each step the electrostatic attraction between the cations and the delocalized electrons becomes stronger, so more energy is needed to overcome it and the melting point rises.</p>
      solution: "<p><strong>K から Ca：</strong>カリウムは <span class=\"chem\">K+</span> になり、原子 1 個あたりの非局在化電子は 1 個です。カルシウムは <span class=\"chem\">Ca^2+</span> になり、2 個です。<span class=\"chem\">Ca^2+</span> のほうがイオンも小さいです。</p><p><strong>Ca から V：</strong>バナジウムは遷移元素です。4s 電子に加えて 3d 電子も非局在化するので、原子 1 個あたりの非局在化電子がカルシウムより多くなります。</p><p><strong>結びつけ：</strong>どちらの段階でも、陽イオンと非局在化電子の間の静電気的な引力が強くなります。そのため、それに打ち勝つのに必要なエネルギーが大きくなり、融点が高くなります。</p>",
      // EN: <p>From K to Ca the ion charge rises from 1+ to 2+, so calcium has two delocalized electrons per atom and potassium has one (and <span class="chem">Ca^2+</span> is the smaller ion). Vanadium is a transition element: 3d electrons are delocalized as well as 4s electrons, so it has more delocalized electrons per atom again. Each time, the electrostatic attraction between the cations and the delocalized electrons is stronger, so more energy is needed to overcome it.</p>
      answer: "<p>K から Ca へは、イオンの電荷が 1+ から 2+ へ大きくなるので、原子 1 個あたりの非局在化電子はカルシウムが 2 個、カリウムが 1 個です（<span class=\"chem\">Ca^2+</span> のほうがイオンも小さいです）。バナジウムは遷移元素です。4s 電子に加えて 3d 電子も非局在化するので、原子 1 個あたりの非局在化電子がさらに多くなります。どちらの場合も、陽イオンと非局在化電子の間の静電気的な引力がより強いので、それに打ち勝つのに必要なエネルギーが大きくなります。</p>",
      markscheme: [
        // EN: K to Ca: greater ion charge (2+ compared with 1+) / two delocalized electrons per atom compared with one / Ca<sup>2+</sup> has the smaller ionic radius
        "K から Ca：イオンの電荷が大きい（1+ に対して 2+）/ 原子 1 個あたりの非局在化電子が 1 個に対して 2 個 / Ca<sup>2+</sup> のほうがイオン半径が小さい",
        // EN: vanadium has delocalized d-electrons / 3d as well as 4s electrons are delocalized, so more delocalized electrons per atom
        "バナジウムには非局在化した d 電子がある / 4s に加えて 3d の電子も非局在化するので、原子 1 個あたりの非局在化電子が多い",
        // EN: stronger electrostatic attraction between the cations and the delocalized electrons (from K to Ca to V), so more energy is needed to overcome it
        "（K、Ca、V の順に）陽イオンと非局在化電子の間の静電気的な引力が強くなるので、それに打ち勝つのに必要なエネルギーが大きくなる",
      ],
    },

    // ── s2-3-q022 · mcq · challenge · AHL · Structure 2.3.3 · 1 mark
    "s2-3-q022": {
      // EN: <p>From sodium to aluminium the melting point rises at every step. From scandium to copper the melting points are all high, but they do not follow a simple trend. Which is the best reason for this difference?</p>
      stem: "<p>ナトリウムからアルミニウムまでは、1 つ進むごとに融点が高くなります。スカンジウムから銅までは、融点はどれも高いですが、単純な傾向にはなりません。この違いの理由として最もよいのはどれですか。</p>",
      options: [
        // EN: Transition elements have no delocalized electrons, so the metallic model does not apply to them.
        "遷移元素には非局在化電子がないので、金属結合モデルが当てはまらない。",
        // EN: From Na to Al each step adds one delocalized electron per atom and makes the ion much smaller. From Sc to Cu every element has d-electrons and s-electrons that can be delocalized, and no single factor changes steadily.
        "Na から Al までは、1 つ進むごとに原子 1 個あたりの非局在化電子が 1 個増え、イオンがずっと小さくなる。Sc から Cu までは、どの元素にも非局在化できる d 電子と s 電子があり、一定の向きに変わり続ける要因が 1 つもない。",
        // EN: From Sc to Cu the atoms become heavier, and heavier atoms always melt at lower temperatures.
        "Sc から Cu へ原子が重くなり、重い原子ほど必ず低い温度で融解する。",
        // EN: Transition elements form molecules, so their melting points depend on intermolecular forces.
        "遷移元素は分子をつくるので、融点は分子間力で決まる。",
      ],
      hints: [
        // EN: What changes at each step from Na to Mg to Al? Does the same thing change steadily from Sc to Cu?
        "Na、Mg、Al と進むとき、1 つ進むごとに何が変わりますか。Sc から Cu でも、同じものが一定の向きに変わり続けますか。",
      ],
      // EN: <p>From Na to Al, the ion charge and the number of delocalized electrons per atom go from 1 to 2 to 3, and the ionic radius falls from 102 pm to 54 pm. All these changes strengthen the bonding, so the trend is clear. Across the d-block every element has d-electrons and s-electrons that can be delocalized, but the number of delocalized electrons does not rise by one at each step. The size of the atoms also changes less from one element to the next. No single factor changes steadily, so the trend is less evident.</p>
      solution: "<p>Na から Al までは、イオンの電荷と原子 1 個あたりの非局在化電子の数が 1、2、3 と増え、イオン半径は 102 pm から 54 pm へ小さくなります。これらの変化がどれも結合を強くするので、傾向ははっきりしています。d ブロックでは、どの元素にも非局在化できる d 電子と s 電子があります。しかし、非局在化電子の数は、1 つ進むごとに 1 個ずつ増えるわけではありません。原子の大きさも、となりの元素との差が小さくなります。一定の向きに変わり続ける要因が 1 つもないので、傾向ははっきりしません。</p>",
      misconception: {
        // EN (option A): Transition elements are metals. They have delocalized d-electrons as well as s-electrons, which is why their melting points are high.
        "0": "遷移元素は金属です。s 電子に加えて、非局在化した d 電子もあります。だから融点が高いのです。",
        // EN (option C): Mass does not decide a melting point. The strength of the metallic bond does.
        "2": "質量で融点は決まりません。決めるのは金属結合の強さです。",
        // EN (option D): Transition elements are metals with metallic bonding. They do not form molecules and have no intermolecular forces.
        "3": "遷移元素は、金属結合をもつ金属です。分子をつくらず、分子間力もありません。",
      },
    },

  }
});
