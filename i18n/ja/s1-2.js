/* s1-2 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-2', {
  strings: {

    // page title (browser tab)
    "1.2 The nuclear atom | Structure Lab": "1.2 原子核をもつ原子 | Structure Lab",

    // The nuclear atom > page header > p
    "Structure 1.2": "Structure 1.2",

    // The nuclear atom > page header > h1
    "The nuclear atom": "原子核をもつ原子",

    // The nuclear atom > page header > span
    "How do the nuclei of atoms differ?": "原子の原子核は、どこが違うのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "ノートを見ないでできるようになったら、1 つずつチェックを入れましょう。",

    // What you need to be able to do > checklist > span
    "Describe the nuclear atom: a small, dense, positively charged nucleus of protons and neutrons, with negatively charged electrons in the space outside it.": "原子核をもつ原子のモデルを説明できる。陽子と中性子からなる、小さくて密度の高い正電荷の原子核があり、その外側の空間に負電荷の電子がある。",

    // What you need to be able to do > checklist > span
    "State the relative masses and relative charges of the proton, neutron and electron.": "陽子・中性子・電子の相対質量と相対電荷を言える。",

    // What you need to be able to do > checklist > span
    "Use the nuclear symbol to deduce the number of protons, neutrons and electrons in an atom or an ion.": "原子の記号から、原子やイオンの陽子・中性子・電子の数を導ける。",

    // What you need to be able to do > checklist > span
    "Say what isotopes are, and explain why they have the same chemical properties but different physical properties.": "同位体とは何かを言える。同位体の化学的性質が同じで、物理的性質が違う理由を説明できる。",

    // What you need to be able to do > checklist > span
    "Calculate a relative atomic mass from the masses and abundances of the isotopes.": "同位体の質量と存在比から、相対原子質量を計算できる。",

    // What you need to be able to do > checklist > span
    "Calculate the abundance of an isotope from the relative atomic mass.": "相対原子質量から、同位体の存在比を計算できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Interpret a mass spectrum: identify the isotopes and their relative abundances, and use them to calculate a relative atomic mass.": "質量スペクトルを読み取れる。同位体とその相対存在量を特定し、それを使って相対原子質量を計算できる。",

    // The nuclear model of the atom > data-toc attribute
    "The nuclear model": "原子核モデル",

    // The nuclear model of the atom > h2
    "The nuclear model of the atom": "原子核モデル：原子のつくり",

    // The nuclear model of the atom > p
    "Picture a sports stadium with one pea on the centre spot. That is roughly how an atom is laid out. The pea is the nucleus. The rest of the stadium is where the electrons are. Almost all of it is empty space.": "スタジアムのグラウンドの真ん中に、豆を 1 粒置いたところを想像してください。原子のつくりは、だいたいこれと同じです。豆が原子核です。スタジアムの残りの部分は、電子がある場所です。そのほとんどは、何もない空間です。",

    // The nuclear model of the atom > p
    "The <dfn data-def=\"The tiny, dense, positively charged centre of an atom. It contains the protons and neutrons.\">nucleus</dfn> is tiny, dense and positively charged. It contains <dfn>protons</dfn> and <dfn>neutrons</dfn>. Together, protons and neutrons are called <dfn data-def=\"The particles in the nucleus: protons and neutrons.\">nucleons</dfn>. The negatively charged <dfn>electrons</dfn> occupy the space outside the nucleus.": "<dfn data-def=\"原子の中心にある、とても小さくて密度の高い、正電荷をもつ部分。陽子と中性子が入っている。\">原子核 <span class=\"en-term\">(nucleus)</span></dfn>は、とても小さく、密度が高く、正の電荷をもっています。原子核には<dfn>陽子 <span class=\"en-term\">(protons)</span></dfn>と<dfn>中性子 <span class=\"en-term\">(neutrons)</span></dfn>が入っています。陽子と中性子をまとめて<dfn data-def=\"原子核の中にある粒子。陽子と中性子のこと。\">核子 <span class=\"en-term\">(nucleons)</span></dfn>といいます。負の電荷をもつ<dfn>電子 <span class=\"en-term\">(electrons)</span></dfn>は、原子核の外側の空間にあります。",

    // The nuclear model of the atom > data-def attribute
    "The tiny, dense, positively charged centre of an atom. It contains the protons and neutrons.": "原子の中心にある、とても小さくて密度の高い、正電荷をもつ部分。陽子と中性子が入っている。",

    // The nuclear model of the atom > data-def attribute
    "The particles in the nucleus: protons and neutrons.": "原子核の中にある粒子。陽子と中性子のこと。",

    // The nuclear model of the atom > key idea > p
    "Nearly all the mass of an atom is in its nucleus. Nearly all the volume of an atom is the space where its electrons are.": "原子の質量のほとんどは、原子核にあります。原子の体積のほとんどは、電子がある空間です。",

    // The nuclear model of the atom > widget > data-title attribute
    "How small is the nucleus?": "原子核はどれくらい小さい？",

    // The nuclear model of the atom > widget > figcaption
    "Drag the zoom slider. The atom and its nucleus are drawn to the same scale, so at first the nucleus is far too small to draw. This model uses a ratio of 1 : 100 000. The real ratio is approximate and depends on the element (about 1 : 10 000 to 1 : 100 000). An atom has no sharp edge, so its outline is dashed.": "ズームのスライダーを動かしてみましょう。原子と原子核は同じ縮尺で描いてあるので、はじめは原子核が小さすぎて描けません。このモデルでは大きさの比を 1 : 100 000 にしています。実際の比はおおよその値で、元素によって違います（約 1 : 10 000 〜 1 : 100 000）。原子にははっきりした端がないので、輪郭は破線で描いています。",

    // The nuclear model of the atom > h3
    "The three subatomic particles": "原子を構成する 3 種類の粒子",

    // The nuclear model of the atom > p
    "The real masses and charges are awkward numbers, so chemists compare the particles with each other. These <em>relative</em> values are the ones to learn.": "実際の質量と電荷は扱いにくい数なので、化学では粒子どうしを比べた値を使います。覚えるのは、この<em>相対的な</em>値です。",

    // The nuclear model of the atom > table > caption
    "Relative masses and charges of the subatomic particles": "原子を構成する粒子の相対質量と相対電荷",

    // The nuclear model of the atom > table > th
    "Particle": "粒子",

    // The nuclear model of the atom > table > th
    "Where it is": "ある場所",

    // The nuclear model of the atom > table > th
    "Relative mass": "相対質量",

    // The nuclear model of the atom > table > th
    "Relative charge": "相対電荷",

    // The nuclear model of the atom > table > th
    "proton": "陽子",

    // The nuclear model of the atom > table > td
    "in the nucleus": "原子核の中",

    // The nuclear model of the atom > table > th
    "neutron": "中性子",

    // The nuclear model of the atom > table > th
    "electron": "電子",

    // The nuclear model of the atom > table > td
    "outside the nucleus": "原子核の外",

    // The nuclear model of the atom > table > td
    "negligible": "無視できるほど小さい",

    // The nuclear model of the atom > p
    "“Negligible” means small enough to ignore. A proton is about 1800 times heavier than an electron, so the electrons add almost nothing to the mass of an atom.": "「無視できるほど小さい」(negligible) とは、考えに入れなくてよいほど小さいという意味です。陽子は電子の約 1800 倍重いので、電子は原子の質量にほとんど影響しません。",

    // The nuclear model of the atom > data booklet note > p
    "The actual masses (in kg) of the proton, neutron and electron, and the elementary charge (in C), are in the data booklet. You do not need to remember them. You do need to know the relative values in the table.": "陽子・中性子・電子の実際の質量（kg）と電気素量（C）は、データブックレットに載っています。覚える必要はありません。覚えておくのは、表の相対的な値です。",

    // The nuclear model of the atom > p
    "A proton and an electron have charges of the same size but opposite sign. A neutral atom has equal numbers of protons and electrons, so the charges cancel.": "陽子と電子の電荷は、大きさが同じで符号が反対です。中性の原子では陽子の数と電子の数が等しいので、電荷は打ち消し合います。",

    // The nuclear model of the atom > h3
    "Using the table: charged plates": "表を使う：帯電した電極板",

    // The nuclear model of the atom > p
    "You can be asked to apply these values. Suppose beams of protons, neutrons and electrons, all moving at the same speed, pass between a positive plate and a negative plate.": "これらの値を使う問題が出ることがあります。同じ速さで進む陽子・中性子・電子のビームが、正の電極板と負の電極板の間を通るとします。",

    // The nuclear model of the atom > li
    "Protons are positive, so they bend towards the negative plate.": "陽子は正の電荷をもつので、負の電極板のほうへ曲がります。",

    // The nuclear model of the atom > li
    "Electrons are negative, so they bend towards the positive plate. They bend much more than protons, because the charge is the same size but the mass is far smaller.": "電子は負の電荷をもつので、正の電極板のほうへ曲がります。曲がり方は陽子よりずっと大きくなります。電荷の大きさは同じですが、質量がはるかに小さいからです。",

    // The nuclear model of the atom > li
    "Neutrons have no charge, so they go straight on.": "中性子は電荷をもたないので、まっすぐ進みます。",

    // The nuclear model of the atom > not needed for IB > p
    "The syllabus does not ask you to recall the history of atomic models or the details of the experiments that led to the nuclear model. Quarks, and the forces that hold the nucleus together, are not part of IB Chemistry.": "原子モデルの歴史や、原子核モデルにつながった実験のくわしい内容は、シラバスでは問われません。クォークや、原子核をまとめている力は、IB 化学の範囲外です。",

    // The nuclear model of the atom > data-title attribute
    "The nuclear model: quick check": "原子核モデル：確認クイズ",

    // Nuclear symbols: counting protons, neutrons and electrons > data-toc attribute
    "Nuclear symbols": "原子の記号",

    // Nuclear symbols: counting protons, neutrons and electrons > h2
    "Nuclear symbols: counting protons, neutrons and electrons": "原子の記号：陽子・中性子・電子を数える",

    // Nuclear symbols: counting protons, neutrons and electrons > p
    "Every atom or ion can be described by three numbers. The nuclear symbol packs them around the symbol of the element.": "どの原子やイオンも、3 つの数で表せます。原子の記号 (nuclear symbol) は、その 3 つを元素記号のまわりに書いたものです。",

    // Nuclear symbols: counting protons, neutrons and electrons > aria-label attribute
    "Nuclear symbol for a chloride ion: mass number 37 at top left, atomic number 17 at bottom left, symbol Cl, charge 1 minus at top right": "塩化物イオンの原子の記号：左上に質量数 37、左下に原子番号 17、元素記号 Cl、右上に電荷 1 マイナス",

    // Nuclear symbols: counting protons, neutrons and electrons > dd
    "<strong>Mass number, <i>A</i></strong> (top left): protons + neutrons": "<strong>質量数 <i>A</i></strong>（左上）：陽子の数 + 中性子の数",

    // Nuclear symbols: counting protons, neutrons and electrons > dd
    "<strong>Atomic number, <i>Z</i></strong> (bottom left): protons": "<strong>原子番号 <i>Z</i></strong>（左下）：陽子の数",

    // Nuclear symbols: counting protons, neutrons and electrons > dt
    "Cl": "Cl",

    // Nuclear symbols: counting protons, neutrons and electrons > dd
    "<strong>Element symbol, X</strong>: fixed by <i>Z</i>": "<strong>元素記号 X</strong>：<i>Z</i> で決まる",

    // Nuclear symbols: counting protons, neutrons and electrons > dd
    "<strong>Charge</strong> (top right): missing for a neutral atom": "<strong>電荷</strong>（右上）：中性の原子では書かない",

    // Nuclear symbols: counting protons, neutrons and electrons > figcaption
    "The general form is written <span class=\"nuc\"><span class=\"nuc__az\"><span><i>A</i></span><span><i>Z</i></span></span><span>X</span></span>. This example is a chloride ion.": "一般的な形は <span class=\"nuc\"><span class=\"nuc__az\"><span><i>A</i></span><span><i>Z</i></span></span><span>X</span></span> と書きます。この例は塩化物イオンです。",

    // Nuclear symbols: counting protons, neutrons and electrons > p
    "The <dfn data-def=\"The number of protons in the nucleus of an atom. Symbol Z.\">atomic number</dfn>, <i>Z</i>, is the number of protons. It decides which element the atom is. Every atom with 17 protons is chlorine.": "<dfn data-def=\"原子の原子核にある陽子の数。記号は Z。\">原子番号 <span class=\"en-term\">(atomic number)</span></dfn> <i>Z</i> は、陽子の数です。原子がどの元素なのかは、この数で決まります。陽子を 17 個もつ原子は、すべて塩素です。",

    // Nuclear symbols: counting protons, neutrons and electrons > data-def attribute
    "The number of protons in the nucleus of an atom. Symbol Z.": "原子の原子核にある陽子の数。記号は Z。",

    // Nuclear symbols: counting protons, neutrons and electrons > p
    "The <dfn data-def=\"The total number of protons and neutrons (nucleons) in the nucleus of an atom. Symbol A.\">mass number</dfn>, <i>A</i>, is the number of protons plus neutrons. It is always a whole number, because it is a count.": "<dfn data-def=\"原子の原子核にある陽子と中性子（核子）の数の合計。記号は A。\">質量数 <span class=\"en-term\">(mass number)</span></dfn> <i>A</i> は、陽子の数と中性子の数の合計です。個数を数えたものなので、必ず整数になります。",

    // Nuclear symbols: counting protons, neutrons and electrons > data-def attribute
    "The total number of protons and neutrons (nucleons) in the nucleus of an atom. Symbol A.": "原子の原子核にある陽子と中性子（核子）の数の合計。記号は A。",

    // Nuclear symbols: counting protons, neutrons and electrons > h3
    // Relative atomic mass from isotope data > h4
    // Mass spectra > Additional HL > h4
    "Method in words": "解き方を言葉で",

    // Nuclear symbols: counting protons, neutrons and electrons > li
    "<strong>Protons</strong> = <i>Z</i>, the bottom number. If it is not given, look up the element in the periodic table.": "<strong>陽子の数</strong> = <i>Z</i>（下の数）。書かれていないときは、周期表でその元素を調べます。",

    // Nuclear symbols: counting protons, neutrons and electrons > li
    "<strong>Neutrons</strong> = <i>A</i> − <i>Z</i>, top number minus bottom number.": "<strong>中性子の数</strong> = <i>A</i> − <i>Z</i>（上の数から下の数を引く）。",

    // Nuclear symbols: counting protons, neutrons and electrons > li
    "<strong>Electrons</strong>: start with the number of protons. For a positive ion, subtract the charge. For a negative ion, add the size of the charge.": "<strong>電子の数</strong>：まず陽子の数から始めます。陽イオンなら、電荷の分だけ引きます。陰イオンなら、電荷の大きさの分だけ足します。",

    // Nuclear symbols: counting protons, neutrons and electrons > equation > maths line
    "neutrons = <i>A</i> − <i>Z</i> &nbsp;&nbsp;&nbsp; electrons = <i>Z</i> − <i>q</i>": "中性子の数 = <i>A</i> − <i>Z</i> &nbsp;&nbsp;&nbsp; 電子の数 = <i>Z</i> − <i>q</i>",

    // Nuclear symbols: counting protons, neutrons and electrons > equation > dd
    "mass number (no unit)": "質量数（単位なし）",

    // Nuclear symbols: counting protons, neutrons and electrons > equation > dd
    "atomic number (no unit)": "原子番号（単位なし）",

    // Nuclear symbols: counting protons, neutrons and electrons > equation > dd
    "charge on the species, with its sign: +2 for a 2+ ion, −1 for a 1− ion, 0 for an atom": "その粒子の電荷（符号つき）：2+ のイオンなら +2、1− のイオンなら −1、原子なら 0",

    // Nuclear symbols: counting protons, neutrons and electrons > p
    "An ion is an atom that has gained or lost <em>electrons</em>. A <dfn data-def=\"A positive ion. It has fewer electrons than protons.\">cation</dfn> is positive: it has lost electrons. An <dfn data-def=\"A negative ion. It has more electrons than protons.\">anion</dfn> is negative: it has gained electrons. The nucleus does not change.": "イオンは、原子が<em>電子</em>を受け取ったり失ったりしたものです。<dfn data-def=\"正の電荷をもつイオン。電子の数が陽子の数より少ない。\">陽イオン <span class=\"en-term\">(cation)</span></dfn>は正の電荷をもち、電子を失っています。<dfn data-def=\"負の電荷をもつイオン。電子の数が陽子の数より多い。\">陰イオン <span class=\"en-term\">(anion)</span></dfn>は負の電荷をもち、電子を受け取っています。原子核は変わりません。",

    // Nuclear symbols: counting protons, neutrons and electrons > data-def attribute
    "A positive ion. It has fewer electrons than protons.": "正の電荷をもつイオン。電子の数が陽子の数より少ない。",

    // Nuclear symbols: counting protons, neutrons and electrons > data-def attribute
    "A negative ion. It has more electrons than protons.": "負の電荷をもつイオン。電子の数が陽子の数より多い。",

    // Nuclear symbols: counting protons, neutrons and electrons > common mistake > p
    "A positive charge does not mean extra protons, and it does not mean extra electrons. <span class=\"chem\">Mg^2+</span> has the same 12 protons as a magnesium atom and two <em>fewer</em> electrons: 12 − 2 = 10.": "正の電荷は、陽子が余分にあるという意味ではありません。電子が余分にあるという意味でもありません。<span class=\"chem\">Mg^2+</span> の陽子は、マグネシウム原子と同じ 12 個です。電子は 2 個<em>少なく</em>、12 − 2 = 10 個です。",

    // Nuclear symbols: counting protons, neutrons and electrons > widget > data-title attribute
    "Build an atom or an ion": "原子やイオンを作ってみよう",

    // Nuclear symbols: counting protons, neutrons and electrons > widget > figcaption
    "Use the + and − buttons to add or remove particles, and watch the nuclear symbol change. Then press Challenge me. This picture is a model, not to scale: the nucleus is drawn far too big, and the dots only show how many electrons there are, not where they are or how they move. The builder also lets you make nuclei that do not exist in nature.": "+ と − のボタンで粒子を足したり減らしたりして、原子の記号が変わるようすを見ましょう。そのあと「問題に挑戦」を押してください。この図はモデルで、縮尺は正しくありません。原子核は実際よりずっと大きく描いてあります。点は電子の数を表しているだけで、電子の位置や動き方は表していません。この教材では、自然界に存在しない原子核も作れます。",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > h3
    "Particles in an ion": "イオンに含まれる粒子",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > p
    "Deduce the number of protons, neutrons and electrons in the ion <span class=\"nuc\"><span class=\"nuc__az\"><span>27</span><span>13</span></span><span>Al</span><sup>3+</sup></span>.": "イオン <span class=\"nuc\"><span class=\"nuc__az\"><span>27</span><span>13</span></span><span>Al</span><sup>3+</sup></span> の陽子・中性子・電子の数を導きなさい (deduce)。",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > data-title attribute
    "Read off the protons": "陽子の数を読み取る",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > p
    "The bottom number is the atomic number, and the atomic number is the number of protons.": "下の数は原子番号で、原子番号は陽子の数です。",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > maths line
    "protons = <i>Z</i> = 13": "陽子の数 = <i>Z</i> = 13",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > data-title attribute
    "Find the neutrons": "中性子の数を求める",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > p
    "The top number counts protons and neutrons together, so take the protons away.": "上の数は陽子と中性子を合わせた数なので、陽子の数を引きます。",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > maths line
    "neutrons = <i>A</i> − <i>Z</i> = 27 − 13 = 14": "中性子の数 = <i>A</i> − <i>Z</i> = 27 − 13 = 14",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > data-title attribute
    "Find the electrons": "電子の数を求める",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > p
    "A 3+ charge means the atom has lost 3 electrons. A neutral aluminium atom would have 13.": "電荷が 3+ なので、原子は電子を 3 個失っています。中性のアルミニウム原子なら、電子は 13 個です。",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > maths line
    "electrons = <i>Z</i> − <i>q</i> = 13 − 3 = 10": "電子の数 = <i>Z</i> − <i>q</i> = 13 − 3 = 10",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > data-title attribute
    "Check the charge": "電荷を確かめる",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > data-label attribute
    // Relative atomic mass from isotope data > worked example > data-label attribute
    // Mass spectra > worked example > Additional HL > data-label attribute
    // widget string (assets/js/widgets-s1-2.js)
    "Check": "確認",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > p
    "Protons minus electrons must give the charge on the symbol.": "陽子の数から電子の数を引くと、記号に書かれた電荷になるはずです。",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > maths line
    "13 − 10 = +3, which matches 3+": "13 − 10 = +3 で、3+ と合っています",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > maths line
    "<b>13 protons, 14 neutrons, 10 electrons</b>": "<b>陽子 13 個、中性子 14 個、電子 10 個</b>",

    // Nuclear symbols: counting protons, neutrons and electrons > worked example > p
    "13 protons, 14 neutrons, 10 electrons": "陽子 13 個、中性子 14 個、電子 10 個",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > data-label attribute
    "Number of neutrons": "中性子の数",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > p
    "How many <strong>neutrons</strong> are in the ion <span class=\"nuc\"><span class=\"nuc__az\"><span>56</span><span>26</span></span><span>Fe</span><sup>3+</sup></span>?": "イオン <span class=\"nuc\"><span class=\"nuc__az\"><span>56</span><span>26</span></span><span>Fe</span><sup>3+</sup></span> には、<strong>中性子</strong>が何個ありますか。",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > li
    "The charge is about electrons. It has no effect on the nucleus.": "電荷は電子の数で決まります。原子核には関係ありません。",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > li
    "Neutrons = mass number − atomic number = <span class=\"mono\">56 − 26</span>.": "中性子の数 = 質量数 − 原子番号 = <span class=\"mono\">56 − 26</span>。",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > maths line
    "neutrons = <i>A</i> − <i>Z</i> = 56 − 26 = 30": "中性子の数 = <i>A</i> − <i>Z</i> = 56 − 26 = 30",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > data-label attribute
    "Number of electrons": "電子の数",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > p
    "How many <strong>electrons</strong> are in the sulfide ion <span class=\"nuc\"><span class=\"nuc__az\"><span>32</span><span>16</span></span><span>S</span><sup>2−</sup></span>?": "硫化物イオン <span class=\"nuc\"><span class=\"nuc__az\"><span>32</span><span>16</span></span><span>S</span><sup>2−</sup></span> には、<strong>電子</strong>が何個ありますか。",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > li
    "A negative ion has gained electrons. Will the answer be more or less than 16?": "陰イオンは電子を受け取っています。答えは 16 より多いでしょうか、少ないでしょうか。",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > li
    "Electrons = protons + size of the negative charge = <span class=\"mono\">16 + 2</span>.": "電子の数 = 陽子の数 + 負電荷の大きさ = <span class=\"mono\">16 + 2</span>。",

    // Nuclear symbols: counting protons, neutrons and electrons > try it > maths line
    "electrons = <i>Z</i> − <i>q</i> = 16 − (−2) = 16 + 2 = 18": "電子の数 = <i>Z</i> − <i>q</i> = 16 − (−2) = 16 + 2 = 18",

    // Nuclear symbols: counting protons, neutrons and electrons > exam tip (shown in English + translation) > p
    "When you write a nuclear symbol, the mass number goes top left and the atomic number bottom left. For an ion, write the number before the sign: <span class=\"mono\">2+</span>, not <span class=\"mono\">+2</span>. A missing or wrong charge loses the mark.": "原子の記号を書くときは、質量数を左上に、原子番号を左下に書きます。イオンでは、数字を符号の前に書きます。<span class=\"mono\">+2</span> ではなく <span class=\"mono\">2+</span> です。電荷を書き忘れたり間違えたりすると、点がもらえません。",

    // Nuclear symbols: counting protons, neutrons and electrons > data-title attribute
    "Nuclear symbols: quick check": "原子の記号：確認クイズ",

    // Isotopes > h2
    "Isotopes": "",

    // Isotopes > p
    "Take a jar of chlorine gas. Every atom in it has 17 protons. But about three quarters of the atoms have 18 neutrons, and about one quarter have 20. They are all chlorine, with two different masses.": "",

    // Isotopes > p
    "<dfn data-def=\"Atoms of the same element with different numbers of neutrons.\">Isotopes</dfn> are atoms of the same element with different numbers of neutrons. So isotopes have the same atomic number and different mass numbers.": "",

    // Isotopes > data-def attribute
    "Atoms of the same element with different numbers of neutrons.": "",

    // Isotopes > p
    "You name an isotope by its mass number: chlorine-35 and chlorine-37, or <sup>35</sup>Cl and <sup>37</sup>Cl.": "",

    // Isotopes > table > caption
    "The two isotopes of chlorine found in nature": "",

    // Isotopes > table > th
    "Isotope": "",

    // Isotopes > table > th
    // widget string (assets/js/widgets-s1-2.js)
    "Protons": "",

    // Isotopes > table > th
    // widget string (assets/js/widgets-s1-2.js)
    "Neutrons": "",

    // Isotopes > table > th
    "Electrons (in the atom)": "",

    // Isotopes > table > th
    "Mass number": "",

    // Isotopes > table > th
    "chlorine-35": "",

    // Isotopes > table > th
    "chlorine-37": "",

    // Isotopes > h3
    "Same chemistry, different physical properties": "",

    // Isotopes > p
    "<strong>Chemical properties are the same.</strong> How an atom reacts depends on its electrons. Isotopes of an element have the same number of electrons, arranged in the same way, so they react in the same way.": "",

    // Isotopes > p
    "<strong>Physical properties are different.</strong> Isotopes have different masses. Any property that depends on mass is a little different: density, the rate at which a gas diffuses, and melting and boiling points.": "",

    // Isotopes > p
    "For example, “heavy water” made with hydrogen-2 reacts like ordinary water, but it is denser and boils at a slightly higher temperature.": "",

    // Isotopes > exam tip (shown in English + translation) > p
    "To explain the same chemical properties, write “same number of electrons” or “same electron configuration”. To explain a different physical property, write “different mass” and name the property, such as density.": "",

    // Isotopes > common mistake > p
    "Isotopes do <em>not</em> differ in protons or electrons. If the number of protons changes, it is a different element. If the number of electrons changes, it is an ion. Only a change in neutrons gives an isotope.": "",

    // Isotopes > not needed for IB > p
    "You do not need to learn specific examples of isotopes or their uses. The data will be given in the question. Radioactive decay, half-life and nuclear equations are not part of this topic.": "",

    // Isotopes > data-title attribute
    "Isotopes: quick check": "",

    // Relative atomic mass from isotope data > data-toc attribute
    // Relative atomic mass from isotope data > try it > data-label attribute
    // Mass spectra > try it > Additional HL > data-label attribute
    "Relative atomic mass": "",

    // Relative atomic mass from isotope data > h2
    "Relative atomic mass from isotope data": "",

    // Relative atomic mass from isotope data > p
    "Look up chlorine in the periodic table and you find 35.45. No chlorine atom has that mass. Each one is either chlorine-35 or chlorine-37. The number 35.45 is an average for the mixture found in nature.": "",

    // Relative atomic mass from isotope data > p
    "The <dfn data-def=\"The weighted average mass of the atoms of an element, compared with one twelfth of the mass of an atom of carbon-12. It has no units.\">relative atomic mass</dfn>, <i>A</i><sub>r</sub>, is the weighted average mass of the atoms of an element, compared with one twelfth of the mass of a carbon-12 atom. It has no units.": "",

    // Relative atomic mass from isotope data > data-def attribute
    "The weighted average mass of the atoms of an element, compared with one twelfth of the mass of an atom of carbon-12. It has no units.": "",

    // Relative atomic mass from isotope data > h3
    "What “weighted” means": "",

    // Relative atomic mass from isotope data > p
    "Suppose 3 of every 4 chlorine atoms have mass 35, and 1 of every 4 has mass 37. The average of four typical atoms is (35 + 35 + 35 + 37) ÷ 4 = 35.5. The answer is closer to 35 because there are more atoms of mass 35. Each isotope counts in proportion to its abundance.": "",

    // Relative atomic mass from isotope data > p
    "The <dfn data-def=\"The percentage of the atoms of an element that are a particular isotope.\">abundance</dfn> of an isotope is the percentage of the atoms that are that isotope.": "",

    // Relative atomic mass from isotope data > data-def attribute
    "The percentage of the atoms of an element that are a particular isotope.": "",

    // Relative atomic mass from isotope data > equation > dt
    // Mass spectra > equation > Additional HL > dt
    "A<sub>r</sub>": "",

    // Relative atomic mass from isotope data > equation > dd
    // Mass spectra > equation > Additional HL > dd
    "relative atomic mass (no units)": "",

    // Relative atomic mass from isotope data > equation > dd
    "mass of each isotope, as given in the question (no units)": "",

    // Relative atomic mass from isotope data > equation > dd
    "abundance of each isotope <span class=\"unit\">%</span>": "",

    // Relative atomic mass from isotope data > h3
    "Method in words: abundances to <i>A</i><sub>r</sub>": "",

    // Relative atomic mass from isotope data > li
    "Check that the abundances add up to 100%.": "",

    // Relative atomic mass from isotope data > li
    "Multiply the mass of each isotope by its percentage abundance.": "",

    // Relative atomic mass from isotope data > li
    "Add the results.": "",

    // Relative atomic mass from isotope data > li
    "Divide by 100.": "",

    // Relative atomic mass from isotope data > li
    "Round at the end, usually to two decimal places, and give no units.": "",

    // Relative atomic mass from isotope data > widget > data-title attribute
    "Isotope mixer": "",

    // Relative atomic mass from isotope data > widget > figcaption
    "Change the abundances and watch the balance point move towards the more common isotope. The working underneath updates line by line. Press Natural abundances to compare with the data booklet. The isotope masses and abundances here are real values, rounded. You are never asked to remember them.": "",

    // Relative atomic mass from isotope data > p
    "Try “Mass number only” in the mixer. The answer changes slightly. The real mass of an isotope is very close to its mass number, but not exactly equal to it. Use whichever masses the question gives you. If it gives only mass numbers, use those.": "",

    // Relative atomic mass from isotope data > worked example > h3
    "Relative atomic mass from percentage abundances": "",

    // Relative atomic mass from isotope data > worked example > p
    "A sample of silicon contains 92.2% <sup>28</sup>Si, 4.7% <sup>29</sup>Si and 3.1% <sup>30</sup>Si. Calculate the relative atomic mass of silicon in this sample, to two decimal places.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Check the abundances": "",

    // Relative atomic mass from isotope data > worked example > p
    "If they do not add up to 100%, an isotope is missing or you have misread the data.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Multiply each mass by its abundance": "",

    // Relative atomic mass from isotope data > worked example > p
    "This is the weighting. A common isotope contributes more to the total.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Add, then divide by 100": "",

    // Relative atomic mass from isotope data > worked example > p
    "The abundances are percentages, so the total is for 100 atoms. Dividing by 100 gives the average for one atom.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    // Mass spectra > worked example > Additional HL > data-title attribute
    "Round and sense-check": "",

    // Relative atomic mass from isotope data > worked example > p
    "The answer must lie between 28 and 30, and close to 28 because silicon-28 is by far the most abundant.": "",

    // Relative atomic mass from isotope data > worked example > maths line
    "<i>A</i><sub>r</sub> = <b>28.11</b> (2 d.p., no units)": "",

    // Relative atomic mass from isotope data > worked example > p
    "28.11. This is not quite the data booklet value of 28.09. The question asked for the value from this data, so 28.11 is the answer that scores.": "",

    // Relative atomic mass from isotope data > exam tip (shown in English + translation) > p
    "If a question says “calculate” and gives isotope data, your answer must come from that data. Markschemes do not accept the periodic table value copied from the data booklet. Show the weighted-sum line of working, then the answer.": "",

    // Relative atomic mass from isotope data > try it > p
    "A sample of neon contains 90.48% <sup>20</sup>Ne, 0.27% <sup>21</sup>Ne and 9.25% <sup>22</sup>Ne. Calculate the relative atomic mass of neon in this sample, to two decimal places.": "",

    // Relative atomic mass from isotope data > try it > li
    "Multiply each mass number by its percentage. You will have three products to add.": "",

    // Relative atomic mass from isotope data > try it > p
    "To two decimal places: <strong>20.19</strong>. (The data booklet gives 20.18. Your calculated value is the one to write.)": "",

    // Relative atomic mass from isotope data > common mistake > p
    "Do not add the masses and divide by the number of isotopes. That simple average treats every isotope as equally common. For chlorine it gives 36, but the real mixture is mostly chlorine-35, so the weighted average is about 35.5.": "",

    // Relative atomic mass from isotope data > h3
    "Working backwards: abundance from <i>A</i><sub>r</sub>": "",

    // Relative atomic mass from isotope data > p
    "Sometimes you are given the relative atomic mass and asked for the abundances. With two isotopes there is one unknown, so one equation is enough. The key is that the two percentages must add up to 100.": "",

    // Relative atomic mass from isotope data > li
    "Call the percentage of one isotope <i>x</i>. The other is then 100 − <i>x</i>.": "",

    // Relative atomic mass from isotope data > li
    "Write the weighted-mean equation with <i>x</i> in it, and set it equal to <i>A</i><sub>r</sub>.": "",

    // Relative atomic mass from isotope data > li
    "Multiply both sides by 100 to remove the fraction.": "",

    // Relative atomic mass from isotope data > li
    "Expand the bracket, collect the <i>x</i> terms, and solve.": "",

    // Relative atomic mass from isotope data > li
    "Check: the more abundant isotope must be the one whose mass is closer to <i>A</i><sub>r</sub>.": "",

    // Relative atomic mass from isotope data > worked example > data-kicker attribute
    "Worked example: working backwards": "",

    // Relative atomic mass from isotope data > worked example > h3
    "Percentage abundance from relative atomic mass": "",

    // Relative atomic mass from isotope data > worked example > p
    "Boron has two isotopes, <sup>10</sup>B and <sup>11</sup>B. Its relative atomic mass is 10.81. Calculate the percentage abundance of each isotope. Use the mass numbers as the masses of the isotopes.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Name the unknown": "",

    // Relative atomic mass from isotope data > worked example > p
    "There are two percentages, but they add up to 100, so one letter covers both.": "",

    // Relative atomic mass from isotope data > worked example > maths line
    "% of <sup>10</sup>B = <i>x</i>": "",

    // Relative atomic mass from isotope data > worked example > maths line
    "% of <sup>11</sup>B = 100 − <i>x</i>": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Write the weighted-mean equation": "",

    // Relative atomic mass from isotope data > worked example > p
    "It is the same formula as before, with <i>x</i> and (100 − <i>x</i>) in place of the abundances.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Multiply both sides by 100": "",

    // Relative atomic mass from isotope data > worked example > p
    "This removes the fraction, so the next lines are easier.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Expand the bracket": "",

    // Relative atomic mass from isotope data > worked example > p
    "Multiply 11 by each term inside the bracket. Watch the minus sign.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "Collect terms and solve": "",

    // Relative atomic mass from isotope data > worked example > p
    "10<i>x</i> − 11<i>x</i> is −<i>x</i>. Then move the numbers to one side.": "",

    // Relative atomic mass from isotope data > worked example > data-title attribute
    "State both answers and check": "",

    // Relative atomic mass from isotope data > worked example > p
    "10.81 is closer to 11 than to 10, so <sup>11</sup>B should be the more abundant isotope. It is.": "",

    // Relative atomic mass from isotope data > worked example > p
    "<sup>10</sup>B 19% and <sup>11</sup>B 81%": "",

    // Relative atomic mass from isotope data > try it > data-label attribute
    "Abundance of copper-63": "",

    // Relative atomic mass from isotope data > try it > p
    "Copper has two isotopes. <sup>63</sup>Cu has a relative mass of 62.93 and <sup>65</sup>Cu has a relative mass of 64.93. The relative atomic mass of copper is 63.55. Calculate the percentage abundance of <sup>63</sup>Cu.": "",

    // Relative atomic mass from isotope data > try it > li
    "Let the percentage of <sup>63</sup>Cu be <i>x</i>. Then <sup>65</sup>Cu is 100 − <i>x</i>. Use the masses given, not the mass numbers.": "",

    // Relative atomic mass from isotope data > try it > li
    "<span class=\"mono\">62.93x + 64.93(100 − x) = 6355</span>. Expand the bracket: <span class=\"mono\">64.93 × 100 = 6493</span>.": "",

    // Relative atomic mass from isotope data > try it > p
    "<sup>63</sup>Cu is <strong>69.0%</strong> (so <sup>65</sup>Cu is 31.0%). Check: 63.55 is closer to 62.93, so <sup>63</sup>Cu should be more abundant.": "",

    // Relative atomic mass from isotope data > common mistake > data-title attribute
    "Three words that get mixed up": "",

    // Relative atomic mass from isotope data > common mistake > p
    "<strong>Mass number</strong> belongs to one isotope and is a whole number (35). <strong>Relative atomic mass</strong> belongs to the element as a mixture of isotopes, and is usually not a whole number (35.45). Neither has units. Molar mass, with units <span class=\"unit\">g mol-1</span>, comes in Structure 1.4.": "",

    // Relative atomic mass from isotope data > data-title attribute
    "Relative atomic mass: quick check": "",

    // Mass spectra > Additional HL > data-toc attribute
    // Mass spectra > Additional HL > h2
    "Mass spectra": "",

    // Mass spectra > Additional HL > p
    "Where do isotope abundances come from? Imagine tipping a bag of mixed coins into a sorting machine. It sorts the coins by mass and counts how many there are of each kind. A mass spectrometer does the same job for atoms.": "",

    // Mass spectra > Additional HL > p
    "The result is a <dfn data-def=\"A chart of relative abundance against m/z for the ions detected from a sample.\">mass spectrum</dfn>: a bar chart with one peak for each isotope.": "",

    // Mass spectra > Additional HL > data-def attribute
    "A chart of relative abundance against m/z for the ions detected from a sample.": "",

    // Mass spectra > Additional HL > li
    "The <strong>horizontal axis</strong> is <i>m/z</i>, the mass-to-charge ratio of the ion detected. For an ion with a 1+ charge, <i>m/z</i> is equal to the mass of the isotope. So the position of a peak tells you <em>which</em> isotope it is.": "",

    // Mass spectra > Additional HL > li
    "The <strong>vertical axis</strong> is relative abundance. The height of a peak tells you <em>how much</em> of that isotope is present.": "",

    // Mass spectra > key idea > Additional HL > p
    "For the atoms of an element: number of peaks = number of isotopes. Position of a peak = mass of that isotope. Height of a peak = its relative abundance.": "",

    // Mass spectra > not needed for IB > Additional HL > p
    "How a mass spectrometer works will not be assessed. You do not need the stages inside the machine (how the sample is ionized, accelerated, deflected or detected). You only need to read the spectrum.": "",

    // Mass spectra > Additional HL > h3
    "When the peak heights do not add up to 100": "",

    // Mass spectra > Additional HL > p
    "Sometimes the vertical axis is a percentage. Then the heights add up to 100 and you use the method you already know.": "",

    // Mass spectra > Additional HL > p
    "Often the tallest peak is set to 100 and the others are scaled against it. Then the heights do <em>not</em> add up to 100. The fix is small: divide by the total of the peak heights, not by 100.": "",

    // Mass spectra > equation > Additional HL > maths line
    "<i>A</i><sub>r</sub> = <span class=\"frac\"><span>sum of (<i>m/z</i> × peak height)</span><span>sum of peak heights</span></span>": "",

    // Mass spectra > equation > Additional HL > dd
    "position of each peak on the horizontal axis (no units)": "",

    // Mass spectra > equation > Additional HL > dt
    "peak height": "",

    // Mass spectra > equation > Additional HL > dd
    "relative abundance read from the vertical axis (no units, or %)": "",

    // Mass spectra > Additional HL > li
    "List each peak: its <i>m/z</i> and its height. Read heights as carefully as the scale allows.": "",

    // Mass spectra > Additional HL > li
    "Add up the heights. If the total is 100, they are percentages.": "",

    // Mass spectra > Additional HL > li
    "Multiply each <i>m/z</i> by its height, and add the results.": "",

    // Mass spectra > Additional HL > li
    "Divide by the total of the heights.": "",

    // Mass spectra > Additional HL > li
    "Round at the end. Check that the answer is between the lightest and heaviest isotope, nearest the tallest peak.": "",

    // Mass spectra > widget > Additional HL > data-title attribute
    "Mass spectrum reader": "",

    // Mass spectra > widget > Additional HL > figcaption
    "Choose a sample, read the peaks, calculate the relative atomic mass and check it. Switch the peak heights to “tallest peak = 100” to practise dividing by the total. Then try a mystery element: use your answer and the periodic table to identify it. The spectra are drawn to scale from typical natural abundances, for ions with a 1+ charge.": "",

    // Mass spectra > worked example > Additional HL > h3
    "Relative atomic mass from a mass spectrum": "",

    // Mass spectra > worked example > Additional HL > p
    "The mass spectrum of a sample of magnesium has three peaks. Calculate the relative atomic mass of magnesium in this sample, to two decimal places.": "",

    // Mass spectra > worked example > table > Additional HL > caption
    "Peaks read from the spectrum": "",

    // Mass spectra > worked example > table > Additional HL > th
    "Relative abundance (peak height)": "",

    // Mass spectra > worked example > Additional HL > data-title attribute
    "Say what the peaks are": "",

    // Mass spectra > worked example > Additional HL > p
    "Three peaks means three isotopes. Their masses are the <i>m/z</i> values: 24, 25 and 26.": "",

    // Mass spectra > worked example > Additional HL > maths line
    "isotopes: <sup>24</sup>Mg, <sup>25</sup>Mg, <sup>26</sup>Mg": "",

    // Mass spectra > worked example > Additional HL > data-title attribute
    "Add up the peak heights": "",

    // Mass spectra > worked example > Additional HL > p
    "The total is not 100, so these are not percentages. You will divide by this total.": "",

    // Mass spectra > worked example > Additional HL > data-title attribute
    "Multiply each m/z by its height": "",

    // Mass spectra > worked example > Additional HL > p
    "This is the same weighting step as before.": "",

    // Mass spectra > worked example > Additional HL > data-title attribute
    "Add, then divide by the total height": "",

    // Mass spectra > worked example > Additional HL > p
    "Dividing by 126.6 gives the average for one atom. Dividing by 100 here would give 30.79, which is heavier than every isotope, so it cannot be right.": "",

    // Mass spectra > worked example > Additional HL > p
    "The answer is between 24 and 26 and close to 24, where the tallest peak is.": "",

    // Mass spectra > worked example > Additional HL > maths line
    "<i>A</i><sub>r</sub> = <b>24.32</b> (2 d.p., no units)": "",

    // Mass spectra > try it > Additional HL > p
    "The mass spectrum of a sample of gallium has two peaks: <i>m/z</i> 69 with a relative abundance of 100.0, and <i>m/z</i> 71 with a relative abundance of 66.4. Calculate the relative atomic mass of gallium in this sample, to two decimal places.": "",

    // Mass spectra > try it > Additional HL > li
    "Do the heights add up to 100? If not, what must you divide by?": "",

    // Mass spectra > try it > Additional HL > maths line
    "total height = 100.0 + 66.4 = 166.4": "",

    // Mass spectra > try it > Additional HL > p
    "To two decimal places: <strong>69.80</strong>. (The data booklet gives 69.72. Your calculated value is the one to write.)": "",

    // Mass spectra > exam tip (shown in English + translation) > Additional HL > p
    "The particles detected in a mass spectrometer are positive ions. If you are asked which species causes a peak, include the charge: <sup>35</sup>Cl<sup>+</sup>, not <sup>35</sup>Cl. Without the + the mark is not given.": "",

    // Mass spectra > Additional HL > h3
    "Elements that exist as molecules": "",

    // Mass spectra > Additional HL > p
    "Chlorine gas is made of <span class=\"chem\">Cl2</span> molecules. Each molecule contains two atoms, and each atom can be either isotope. So the spectrum of the <span class=\"chem\">Cl2+</span> ions has three peaks, not two.": "",

    // Mass spectra > table > Additional HL > caption
    "Peaks for <span class=\"chem\">Cl2+</span>, where <sup>35</sup>Cl : <sup>37</sup>Cl is about 3 : 1": "",

    // Mass spectra > table > Additional HL > th
    "Atoms in the molecule": "",

    // Mass spectra > table > Additional HL > th
    "Chance": "",

    // Mass spectra > table > Additional HL > th
    "Relative height": "",

    // Mass spectra > table > Additional HL > td
    "<sup>35</sup>Cl and <sup>35</sup>Cl": "",

    // Mass spectra > table > Additional HL > td
    "<sup>35</sup>Cl and <sup>37</sup>Cl (two ways round)": "",

    // Mass spectra > table > Additional HL > td
    "<sup>37</sup>Cl and <sup>37</sup>Cl": "",

    // Mass spectra > Additional HL > p
    "The middle peak has a factor of 2 because the mixed molecule can form in two ways: <sup>35</sup>Cl–<sup>37</sup>Cl or <sup>37</sup>Cl–<sup>35</sup>Cl. It is like tossing two coins: one head and one tail is twice as likely as two heads.": "",

    // Mass spectra > Additional HL > p
    "Bromine has two isotopes, <sup>79</sup>Br and <sup>81</sup>Br, in almost equal amounts. The same reasoning gives peaks for <span class=\"chem\">Br2+</span> at <i>m/z</i> 158, 160 and 162 with heights in the ratio 1 : 2 : 1.": "",

    // Mass spectra > Additional HL > p
    "Some molecules break into single atoms inside the instrument. So the full spectrum of chlorine also has two peaks from <sup>35</sup>Cl<sup>+</sup> and <sup>37</sup>Cl<sup>+</sup> ions, at <i>m/z</i> 35 and 37, with heights in the ratio 3 : 1. The full spectrum of bromine also has peaks at <i>m/z</i> 79 and 81, with almost equal heights.": "",

    // Mass spectra > not needed for IB > Additional HL > data-title attribute
    "Comes later in Structure 3.2": "",

    // Mass spectra > not needed for IB > Additional HL > p
    "When a compound goes through a mass spectrometer its molecules break into pieces, giving a fragmentation pattern. Using that pattern to work out the structure of a compound is taught in Structure 3.2, not here.": "",

    // Mass spectra > Additional HL > data-title attribute
    "Mass spectra: quick check": "",

    // Linking it up > h2
    "Linking it up": "",

    // Linking it up > p
    "The IB guide asks these linking questions. Short answers are enough at this stage.": "",

    // Linking it up > h3
    "What determines the different chemical properties of atoms?": "",

    // Linking it up > p
    "The electrons. Chemical reactions involve electrons being lost, gained or shared, so the number of electrons and how they are arranged decide how an atom behaves. The nucleus matters because its number of protons fixes the number of electrons in the neutral atom. Neutrons make almost no difference, which is why isotopes react in the same way. Structure 1.3 is about how the electrons are arranged.": "",

    // Linking it up > h3
    "How does the atomic number relate to the position of an element in the periodic table?": "",

    // Linking it up > p
    "The elements are listed in order of increasing atomic number. Hydrogen, with <i>Z</i> = 1, is first, helium with <i>Z</i> = 2 is second, and so on. Position is set by the number of protons, not by mass. You will use this in Structure 3.1.": "",

    // Linking it up > h3
    "How can isotope tracers provide evidence for a reaction mechanism?": "",

    // Linking it up > p
    "Isotopes of an element react in the same way but have different masses. If one reactant is made with an unusual isotope, such as oxygen-18 in place of oxygen-16, that atom is “labelled”. Finding which product contains the heavier atom shows where that atom went during the reaction, which is evidence for which bonds break and form. Mechanisms themselves come later, in Reactivity 3.4.": "",

    // Linking it up > Additional HL > h3
    "How does the fragmentation pattern of a compound help to determine its structure?": "",

    // Linking it up > Additional HL > p
    "This belongs to Structure 3.2. For now, the link is that the same instrument that separates the isotopes of an element can also separate the pieces of a broken molecule by mass.": "",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. Questions you have not yet answered correctly come up first, so each set changes when you come back to it. Have a calculator and the data booklet beside you.": "",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "",

    // Exam-style practice > data-title attribute
    "1.2 foundation": "",

    // Exam-style practice > h3
    "Exam standard": "",

    // Exam-style practice > data-title attribute
    "1.2 exam standard": "",

    // Exam-style practice > h3
    // widget string (assets/js/widgets-s1-2.js)
    "Challenge": "",

    // Exam-style practice > data-title attribute
    "1.2 challenge": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Boron": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Magnesium": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Chlorine": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Copper": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Lithium": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Neon": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Silicon": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Gallium": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Bromine": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Remove one proton": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Add one proton": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Remove one neutron": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Add one neutron": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Electrons": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Remove one electron": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Add one electron": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Challenge me": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Check my atom": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Back to free build": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Schematic atom: a nucleus of protons and neutrons with the electrons shown as dots in the space around it": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Nuclear symbol": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Element": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Mass number A": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Charge": "",

    // widget string (assets/js/widgets-s1-2.js)
    "This is": "",

    // widget string (assets/js/widgets-s1-2.js)
    "New challenge": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Build {symbol}": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Set the protons, neutrons and electrons, then press Check my atom.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Protons: the atomic number <i>Z</i> (bottom number) is the number of protons.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Neutrons: the mass number <i>A</i> (top number) counts protons and neutrons together, so neutrons = <i>A</i> − <i>Z</i>.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Electrons: there is no charge on the symbol, so electrons = protons.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Electrons: a positive charge means electrons have been lost. Electrons = <i>Z</i> − charge.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Electrons: a negative charge means electrons have been gained. Electrons = <i>Z</i> + size of the charge.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Correct": "",

    // widget string (assets/js/widgets-s1-2.js)
    "{p} protons, {n} neutrons and {e} electrons.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Not yet": "",

    // widget string (assets/js/widgets-s1-2.js)
    "a neutral atom (protons = electrons)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "a cation: positive ion, 1 fewer electron than protons": "",

    // widget string (assets/js/widgets-s1-2.js)
    "a cation: positive ion, {n} fewer electrons than protons": "",

    // widget string (assets/js/widgets-s1-2.js)
    "an anion: negative ion, 1 more electron than protons": "",

    // widget string (assets/js/widgets-s1-2.js)
    "an anion: negative ion, {n} more electrons than protons": "",

    // widget string (assets/js/widgets-s1-2.js)
    "not to scale": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Zoom": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Width of this view": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Nucleus on your screen": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Picture it": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Zoom in (power of ten)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Whole atom": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Zoom to the nucleus": "",

    // widget string (assets/js/widgets-s1-2.js)
    "An atom drawn to scale with its nucleus at the centre. At low zoom the nucleus is far too small to see.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "nucleus": "",

    // widget string (assets/js/widgets-s1-2.js)
    "nucleus is here, too small to draw": "",

    // widget string (assets/js/widgets-s1-2.js)
    "electrons are somewhere in this region": "",

    // widget string (assets/js/widgets-s1-2.js)
    "all of this view is inside the atom": "",

    // widget string (assets/js/widgets-s1-2.js)
    "{n} px wide": "",

    // widget string (assets/js/widgets-s1-2.js)
    "{n} px (cannot be drawn)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "If this atom were 1 km across, its nucleus would be about 1 cm across: a marble in the middle of a town.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Keep going. You need to zoom in about 100 000 times before the nucleus fills the view.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "The nucleus fills the view. The edge of the atom is now far off your screen, and almost all of the mass of the atom is in this dot.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Relative atomic mass from your mixture": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Data booklet": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Compare": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Mass used for each isotope": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Relative isotopic mass (2 d.p.)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Mass number only": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Abundance of isotope 1": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Abundance of isotope 2": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Natural abundances": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Balance diagram: a block for each isotope on a mass scale, with the weighted mean shown as the balance point": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Abundance of {isotope}": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Abundance of {isotope} in %, exact value": "",

    // widget string (assets/js/widgets-s1-2.js)
    "balance point = {Ar}": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Working, line by line": "",

    // widget string (assets/js/widgets-s1-2.js)
    "(2 d.p., no units)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Check: the abundances add up to {total}%. {isotope} is whatever is left: {rest}%.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "This is not the natural mixture, so the answer is not the data booklet value. A different mixture of isotopes gives a different relative atomic mass.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Natural mixture, using mass numbers as the masses. Here the answer is the same as the data booklet value.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Natural mixture, using mass numbers as the masses. The answer is close to, but not the same as, the data booklet value, because the real mass of an isotope is not exactly a whole number.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Natural mixture. Your weighted mean matches the data booklet value.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Natural mixture. Your weighted mean matches the data booklet value to within 0.01 (the masses here are rounded to 2 d.p.).": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Natural mixture. Close to the data booklet value.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Sample": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Mystery element": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Peak heights show": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Percentage abundance": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Relative abundance (tallest peak = 100)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Your <i>A</i><sub>r</sub> (2 d.p.)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Check element": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Mystery element (symbol or name)": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Show peak heights": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Show the calculation": "",

    // widget string (assets/js/widgets-s1-2.js)
    "New mystery": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Mass spectrum: bar chart of relative abundance against m/z": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Peaks": "",

    // widget string (assets/js/widgets-s1-2.js)
    "The calculation": "",

    // widget string (assets/js/widgets-s1-2.js)
    "These heights are percentages, so they add up to 100.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "These heights do <strong>not</strong> add up to 100, so divide by their total, not by 100.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "total of peak heights = {sum}": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Hide peak heights": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Hide the calculation": "",

    // widget string (assets/js/widgets-s1-2.js)
    "{n} peaks, at <i>m/z</i> {list}. Read each height from the chart, or press Show peak heights.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Enter a number": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Type your relative atomic mass, for example 24.32.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "That is the data booklet value": "",

    // widget string (assets/js/widgets-s1-2.js)
    "The question is asking for the value <em>from this spectrum</em>. Here that is slightly different from {book}. In an exam the booklet value does not score when you are asked to calculate from the data.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "From this spectrum <i>A</i><sub>r</sub> = {Ar}. Now find the element whose relative atomic mass in the periodic table is closest to this, and enter it above.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "From this spectrum <i>A</i><sub>r</sub> = {Ar}. The data booklet gives {book}. The small difference is because the real mass of each isotope is not exactly a whole number.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "You divided by 100, but these peak heights do not add up to 100. Divide by the total of the heights.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "A weighted mean must lie between the lightest and heaviest isotope: between {lo} and {hi}.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "That is the simple average of the <i>m/z</i> values. Each isotope has to be weighted by its abundance.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Multiply each <i>m/z</i> by its peak height, add the results, then divide by the total of the peak heights. Check how you read each height.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Enter an element": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Type a symbol such as Mg, or a name.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "It is {name}. The data booklet gives <i>A</i><sub>r</sub> = {book}, and this spectrum gives {Ar}.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Look in the periodic table for the element whose relative atomic mass is closest to your value. Do not match the mass to the atomic number.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "Work out <i>A</i><sub>r</sub> first. Then look in the periodic table for the element whose relative atomic mass is closest to your value. Do not match the mass to the atomic number.": "",

    // widget string (assets/js/widgets-s1-2.js)
    "relative abundance / %": "",

    // widget string (assets/js/widgets-s1-2.js)
    "relative abundance": "",

    // widget string (assets/js/widgets-s1-2.js)
    "mystery element": "",

  }
});
