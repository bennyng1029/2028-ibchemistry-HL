/* s1-4 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-4', {
  strings: {

    // page title (browser tab)
    "1.4 Counting particles by mass: the mole | Structure Lab": "1.4 質量で粒子を数える：モル | Structure Lab",

    // Counting particles by mass: the mole > page header > p
    "Structure 1.4": "Structure 1.4",

    // Counting particles by mass: the mole > page header > h1
    "Counting particles by mass: the mole": "質量で粒子を数える：モル",

    // Counting particles by mass: the mole > page header > span
    "How do we quantify matter on the atomic scale?": "原子のスケールで、物質の量はどのように表すのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "This topic is almost all calculation, and every later calculation in the course is built on it. Tick each item when you can do it without looking at your notes. All of it is SL and HL core. There is no Additional HL content in 1.4.": "このトピックは、ほとんどが計算です。そして、このあとのコースで出てくる計算は、すべてここが土台になります。ノートを見ないでできるようになったら、項目ごとにチェックを付けましょう。すべて SL の内容（SL・HL 共通）です。1.4 に HL 追加内容（AHL）はありません。",

    // What you need to be able to do > checklist > span
    "Convert an amount in moles to a number of atoms, molecules, ions or formula units, and back, using the Avogadro constant.": "アボガドロ定数を使って、モルで表した物質量を、原子・分子・イオン・組成式単位の数に変換する。逆の変換もする。",

    // What you need to be able to do > checklist > span
    "Work out a relative formula mass, <i>M</i><sub>r</sub>, from relative atomic masses, and say why <i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> have no units.": "相対原子質量から相対式量 <i>M</i><sub>r</sub> を求める。<i>A</i><sub>r</sub> と <i>M</i><sub>r</sub> に単位がない理由を言える。",

    // What you need to be able to do > checklist > span
    "Solve problems that link mass, amount and number of particles using <i>n</i> = <i>m</i> / <i>M</i>.": "<i>n</i> = <i>m</i> / <i>M</i> を使って、質量・物質量・粒子の数をつなぐ問題を解く。",

    // What you need to be able to do > checklist > span
    "Go from percentage composition by mass to an empirical formula, and from a formula to percentage composition.": "質量百分率組成から組成式を求める。化学式から質量百分率組成を求める。",

    // What you need to be able to do > checklist > span
    "Find an empirical formula from mass data, including combustion data and heating a hydrate.": "質量のデータから組成式を求める。燃焼のデータや、水和物を加熱したデータも扱う。",

    // What you need to be able to do > checklist > span
    "Find a molecular formula from an empirical formula and a molar mass.": "組成式とモル質量から分子式を求める。",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>n</i> = <i>CV</i>, and convert between <span class=\"unit\">mol dm-3</span> and <span class=\"unit\">g dm-3</span>.": "<i>n</i> = <i>CV</i> を使う問題を解く。<span class=\"unit\">mol dm-3</span> と <span class=\"unit\">g dm-3</span> を換算する。",

    // What you need to be able to do > checklist > span
    "Describe how to prepare a standard solution and a dilution, and how a calibration curve gives an unknown concentration.": "標準溶液のつくり方と希釈のしかたを記述する。検量線から未知の濃度を求める方法を記述する。",

    // What you need to be able to do > checklist > span
    "State Avogadro’s law and use the mole ratio of an equation to find volumes of reacting gases.": "アボガドロの法則を述べる。化学反応式の物質量の比（モル比）を使って、反応する気体の体積を求める。",

    // Before any mole calculation: three questions > data-toc attribute
    "Before you calculate": "計算の前に",

    // Before any mole calculation: three questions > h2
    "Before any mole calculation: three questions": "モルの計算の前に：3 つの問い",

    // Before any mole calculation: three questions > p
    "Most lost marks in this topic do not come from hard chemistry. They come from pressing calculator buttons before you know where you are going. So use the same routine every time, even when the question looks short.": "このトピックで点を落とす原因は、たいてい難しい化学ではありません。どこへ向かうのかがわからないまま、電卓をたたき始めてしまうことです。だから、短く見える問題でも、毎回同じ手順で進めましょう。",

    // Before any mole calculation: three questions > li
    "<strong>What am I given, and in what units?</strong><span>Write each value with its unit and say what it is: a mass in g, a volume in cm<sup>3</sup>, a concentration in mol dm<sup>−3</sup>, a number of particles.</span>": "<strong>与えられているものは何か。単位は何か。</strong><span>それぞれの値を単位つきで書き、それが何の値なのかも書きます。g で表した質量、cm<sup>3</sup> で表した体積、mol dm<sup>−3</sup> で表した濃度、粒子の数、といった具合です。</span>",

    // Before any mole calculation: three questions > li
    "<strong>What do I want, and in what units?</strong><span>Underline it in the question. “Amount” always means moles. “Number of atoms” is not the same as “number of molecules”.</span>": "<strong>求めたいものは何か。単位は何か。</strong><span>問題文のその部分に下線を引きましょう。「amount（物質量）」は、いつもモルで表す量のことです。「原子の数 (number of atoms)」と「分子の数 (number of molecules)」は同じではありません。</span>",

    // Before any mole calculation: three questions > li
    "<strong>Which link connects them?</strong><span>Every route goes through <b>moles</b>. Pick the relationship that turns what you have into moles, then the one that turns moles into what you want.</span>": "<strong>その 2 つをつなぐ関係はどれか。</strong><span>どの道すじも<b>モル</b>を通ります。まず、手元の値をモルに変える関係を選びます。次に、モルを求めたい量に変える関係を選びます。</span>",

    // Before any mole calculation: three questions > key idea > p
    "There are only three relationships to choose from in this topic: <span class=\"mono\"><i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub></span> for particles, <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for mass, and <span class=\"mono\"><i>n</i> = <i>C</i> × <i>V</i></span> for solutions. The mole is the meeting point of all three.": "このトピックで選ぶ関係は 3 つだけです。粒子には <span class=\"mono\"><i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub></span>、質量には <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>、溶液には <span class=\"mono\"><i>n</i> = <i>C</i> × <i>V</i></span> を使います。この 3 つが出会う場所がモルです。",

    // Before any mole calculation: three questions > h3
    "Get the units right first": "まず単位をそろえる",

    // Before any mole calculation: three questions > p
    "The relationships only work in their own units: mass in <span class=\"unit\">g</span>, volume of solution in <span class=\"unit\">dm3</span>. Questions often give <span class=\"unit\">cm3</span> or <span class=\"unit\">mg</span> instead. Convert before you substitute, and write the conversion down as its own line.": "どの関係も、決まった単位でしか成り立ちません。質量は <span class=\"unit\">g</span>、溶液の体積は <span class=\"unit\">dm3</span> です。ところが、問題では <span class=\"unit\">cm3</span> や <span class=\"unit\">mg</span> で与えられることがよくあります。代入する前に換算しましょう。換算は、それだけで 1 行として書きます。",

    // Before any mole calculation: three questions > widget > data-title attribute
    "Unit-conversion strip": "単位換算ストリップ",

    // Before any mole calculation: three questions > widget > figcaption
    "Type a value and choose its unit. Each step to the right is a unit 1000 times bigger, so the number gets 1000 times smaller.": "値を入力して、単位を選びましょう。右へ 1 つ進むごとに、単位は 1000 倍大きくなります。だから、数値は 1000 分の 1 になります。",

    // Before any mole calculation: three questions > common mistake > p
    "Putting a volume in <span class=\"unit\">cm3</span> straight into <i>n</i> = <i>CV</i> gives an answer 1000 times too big. A quick check: 25 cm<sup>3</sup> is a small amount of liquid, so in dm<sup>3</sup> it must be a small number, 0.025.": "<span class=\"unit\">cm3</span> の体積をそのまま <i>n</i> = <i>CV</i> に入れると、答えが 1000 倍大きくなってしまいます。すぐにできる確かめ方があります。25 cm<sup>3</sup> は少しの液体です。だから dm<sup>3</sup> で表すと、小さな数 0.025 になるはずです。",

    // Before any mole calculation: three questions > try it > p
    "A pipette delivers 25.0 cm<sup>3</sup> of solution. What is this volume in dm<sup>3</sup>?": "ピペットで溶液を 25.0 cm<sup>3</sup> はかり取ります。この体積は何 dm<sup>3</sup> ですか。",

    // Before any mole calculation: three questions > try it > li
    "A dm<sup>3</sup> is bigger than a cm<sup>3</sup>. Will the number get bigger or smaller?": "dm<sup>3</sup> は cm<sup>3</sup> より大きい単位です。数値は大きくなりますか、小さくなりますか。",

    // Before any mole calculation: three questions > try it > li
    "Divide by 1000: <span class=\"mono\">25.0 ÷ 1000</span>. Keep three significant figures.": "1000 で割ります：<span class=\"mono\">25.0 ÷ 1000</span>。有効数字 3 桁を保ちましょう。",

    // Before any mole calculation: three questions > try it > p
    "The zero at the end matters. It shows the value is known to three significant figures.": "最後の 0 には意味があります。この値が有効数字 3 桁までわかっていることを示しています。",

    // Before any mole calculation: three questions > h3
    "Significant figures: a short guide": "有効数字：短いガイド",

    // Before any mole calculation: three questions > p
    "<dfn data-def=\"The digits in a number that carry real information about its precision. Leading zeros do not count.\">Significant figures</dfn> (s.f.) tell the reader how precisely a value is known. Your answer cannot be more precise than the data you started with.": "<dfn data-def=\"数値の桁のうち、その値の精密さについて意味のある情報をもつ桁です。先頭の 0 は数えません。\">有効数字 <span class=\"en-term\">(significant figures)</span></dfn>（英語の略は s.f.）は、その値がどれくらい精密にわかっているかを読む人に伝えます。答えを、もとのデータより精密にすることはできません。",

    // Before any mole calculation: three questions > data-def attribute
    "The digits in a number that carry real information about its precision. Leading zeros do not count.": "数値の桁のうち、その値の精密さについて意味のある情報をもつ桁です。先頭の 0 は数えません。",

    // Before any mole calculation: three questions > table > caption
    "Counting significant figures": "有効数字の数え方",

    // Before any mole calculation: three questions > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Value": "値",

    // Before any mole calculation: three questions > table > th
    "Why": "理由",

    // Before any mole calculation: three questions > table > td
    "Zeros after the decimal point at the end count.": "小数点より右の、末尾の 0 は数えます。",

    // Before any mole calculation: three questions > table > td
    "Zeros at the front only place the decimal point. They do not count.": "先頭の 0 は、小数点の位置を示すだけです。数えません。",

    // Before any mole calculation: three questions > table > td
    "A volumetric flask is precise, so its volume is often given to 4 s.f.": "メスフラスコは精密なので、体積は有効数字 4 桁で与えられることがよくあります。",

    // Before any mole calculation: three questions > table > td
    "In scientific notation, count the digits in front of the “× 10”.": "指数表記では、「× 10」の前にある桁を数えます。",

    // Before any mole calculation: three questions > li
    "Keep the full value in your calculator through every step. Rounding in the middle can change the last digit of the answer.": "計算のあいだは、どのステップでも電卓に値をそのまま残しておきます。途中で丸めると、答えの最後の桁が変わることがあります。",

    // Before any mole calculation: three questions > li
    "Round once, at the end. Look at the data in the question, find the value with the fewest significant figures, and give your answer to that many. In most questions that is 3.": "丸めるのは最後に 1 回だけです。問題のデータを見て、有効数字がいちばん少ない値を探し、答えをその桁数にそろえます。ほとんどの問題では 3 桁です。",

    // Before any mole calculation: three questions > li
    "Counted and defined numbers do not limit you: the 2 in <span class=\"chem\">H2O</span>, the coefficients in an equation, the 1000 in a unit conversion.": "数えた数や、定義で決まっている数は、桁数を制限しません。<span class=\"chem\">H2O</span> の 2、化学反応式の係数、単位の換算の 1000 などです。",

    // Before any mole calculation: three questions > li
    "Write the unit after every final answer.": "最終的な答えには、必ず単位を書きます。",

    // Before any mole calculation: three questions > exam tip (shown in English + translation) > p
    "IB markschemes give their answers to the precision of the data: usually 3 s.f., and 4 s.f. when the data are given to 4. Match the data and you are safe. A mark is not normally taken off for significant figures unless the question asks for a set number, so do not panic about them. Show your working too. If you slip in one step, the later steps can still earn marks when the method is correct.": "IB のマークスキーム（採点基準）は、答えをデータの精密さに合わせて示します。ふつうは有効数字 3 桁で、データが 4 桁なら 4 桁です。データにそろえておけば安心です。問題が桁数を指定していないかぎり、有効数字でふつう減点はされないので、あわてなくて大丈夫です。途中の計算も書きましょう。あるステップでミスをしても、解き方が正しければ、あとのステップで点がもらえることがあります。",

    // The mole and the Avogadro constant > data-toc attribute
    "The mole": "モル",

    // The mole and the Avogadro constant > h2
    "The mole and the Avogadro constant": "モルとアボガドロ定数",

    // The mole and the Avogadro constant > p
    "Eggs are sold by the dozen, and paper by the ream of 500 sheets. When things are small and you need a lot of them, you count in groups. Atoms are so small that the group has to be enormous.": "卵は 1 ダース単位で売られ、紙は 500 枚の包みで売られます。小さくてたくさん必要なものは、まとまりで数えます。原子はとても小さいので、そのまとまりは、とてつもなく大きな数になります。",

    // The mole and the Avogadro constant > p
    "The <dfn data-def=\"The SI unit of amount of substance. One mole contains exactly the number of elementary entities given by the Avogadro constant.\">mole</dfn> (symbol <span class=\"unit\">mol</span>) is the SI unit of <dfn data-def=\"The quantity that counts particles in groups of the Avogadro constant. Symbol n, unit mol.\">amount of substance</dfn>, symbol <i>n</i>. One mole contains exactly the number of elementary entities given by the <dfn data-def=\"The number of elementary entities in one mole. Symbol NA. In the data booklet as 6.02 × 10^23 mol^-1.\">Avogadro constant</dfn>, <i>N</i><sub>A</sub>.": "<dfn data-def=\"物質量の SI 単位です。1 モルは、アボガドロ定数で決まる数の要素粒子を、ちょうどその数だけ含みます。\">モル <span class=\"en-term\">(mole)</span></dfn>（記号 <span class=\"unit\">mol</span>）は、<dfn data-def=\"粒子を、アボガドロ定数個のまとまりで数えた量です。記号 n、単位 mol。\">物質量 <span class=\"en-term\">(amount of substance)</span></dfn>（記号 <i>n</i>）の SI 単位です。1 モルは、<dfn data-def=\"1 モルに含まれる要素粒子の数です。記号 NA。データブックレットには 6.02 × 10^23 mol^-1 と載っています。\">アボガドロ定数 <span class=\"en-term\">(Avogadro constant)</span></dfn> <i>N</i><sub>A</sub> で決まる数の要素粒子を、ちょうどその数だけ含みます。",

    // The mole and the Avogadro constant > data-def attribute
    "The SI unit of amount of substance. One mole contains exactly the number of elementary entities given by the Avogadro constant.": "物質量の SI 単位です。1 モルは、アボガドロ定数で決まる数の要素粒子を、ちょうどその数だけ含みます。",

    // The mole and the Avogadro constant > data-def attribute
    "The quantity that counts particles in groups of the Avogadro constant. Symbol n, unit mol.": "粒子を、アボガドロ定数個のまとまりで数えた量です。記号 n、単位 mol。",

    // The mole and the Avogadro constant > data-def attribute
    "The number of elementary entities in one mole. Symbol NA. In the data booklet as 6.02 × 10^23 mol^-1.": "1 モルに含まれる要素粒子の数です。記号 NA。データブックレットには 6.02 × 10^23 mol^-1 と載っています。",

    // The mole and the Avogadro constant > p
    "An <dfn data-def=\"The particle being counted: an atom, a molecule, an ion, an electron, any other particle, or a specified group of particles such as a formula unit.\">elementary entity</dfn> is whatever particle you are counting. It may be an atom, a molecule, an ion, an electron, or a specified group of particles such as one <dfn data-def=\"The group of ions shown by the formula of an ionic compound, for example one Na+ and one Cl- for NaCl.\">formula unit</dfn> of <span class=\"chem\">NaCl</span>. So always say <em>what</em> you have a mole of.": "<dfn data-def=\"数える対象の粒子です。原子、分子、イオン、電子、そのほかの粒子、または組成式単位のように決まった粒子のまとまりです。\">要素粒子 <span class=\"en-term\">(elementary entity)</span></dfn>とは、数える対象になっている粒子のことです。原子、分子、イオン、電子のこともあれば、<span class=\"chem\">NaCl</span> の<dfn data-def=\"イオン化合物の組成式が表すイオンのまとまりです。たとえば NaCl なら、Na+ 1 個と Cl- 1 個です。\">組成式単位 <span class=\"en-term\">(formula unit)</span></dfn> 1 つのように、決まった粒子のまとまりのこともあります。だから、<em>何が</em> 1 モルあるのかを必ず書きましょう。",

    // The mole and the Avogadro constant > data-def attribute
    "The particle being counted: an atom, a molecule, an ion, an electron, any other particle, or a specified group of particles such as a formula unit.": "数える対象の粒子です。原子、分子、イオン、電子、そのほかの粒子、または組成式単位のように決まった粒子のまとまりです。",

    // The mole and the Avogadro constant > data-def attribute
    "The group of ions shown by the formula of an ionic compound, for example one Na+ and one Cl- for NaCl.": "イオン化合物の組成式が表すイオンのまとまりです。たとえば NaCl なら、Na+ 1 個と Cl- 1 個です。",

    // The mole and the Avogadro constant > data booklet note > p
    "<i>N</i><sub>A</sub> = <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>. The unit mol<sup>−1</sup> means “per mole”. You do not need to memorize the value, but you must know when to use it.": "<i>N</i><sub>A</sub> = <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>。単位の mol<sup>−1</sup> は「1 モルあたり」という意味です。値を暗記する必要はありませんが、いつ使うのかはわかっていなければなりません。",

    // The mole and the Avogadro constant > equation > dd
    "number of particles (no unit)": "粒子の数（単位なし）",

    // The mole and the Avogadro constant > equation > dd
    // Molar mass: weighing instead of counting > equation > dd
    "amount of substance <span class=\"unit\">mol</span>": "物質量 <span class=\"unit\">mol</span>",

    // The mole and the Avogadro constant > equation > dt
    "N<sub>A</sub>": "N<sub>A</sub>",

    // The mole and the Avogadro constant > equation > dd
    "Avogadro constant <span class=\"unit\">mol-1</span>": "アボガドロ定数 <span class=\"unit\">mol-1</span>",

    // The mole and the Avogadro constant > p
    "This relationship is not printed in the data booklet, so learn it. It follows from the definition. Moles to particles: multiply by <i>N</i><sub>A</sub>. Particles to moles: divide by <i>N</i><sub>A</sub>. A number of particles is always huge and an amount in moles is usually small, so check that your answer went the right way.": "この関係はデータブックレットに載っていないので、覚えましょう。定義からそのまま出てくる関係です。モルから粒子の数へは、<i>N</i><sub>A</sub> をかけます。粒子の数からモルへは、<i>N</i><sub>A</sub> で割ります。粒子の数はいつもとても大きく、モルで表した物質量はたいてい小さな数です。答えが正しい向きに変わったかを確かめましょう。",

    // The mole and the Avogadro constant > widget > data-title attribute
    "How big is a mole?": "1 モルはどれくらい大きい？",

    // The mole and the Avogadro constant > widget > figcaption
    "The line is a powers-of-ten scale, so one mole is not “a bit more” than the other markers: it is a million times more than the number of seconds since the Big Bang. Choose a substance and a mass to see how many particles an ordinary sample holds.": "この線は 10 の累乗の目盛りです。だから 1 モルは、ほかの目印より「少し多い」のではありません。ビッグバンから今までの秒数の 100 万倍です。物質と質量を選んで、ふつうの試料に粒子がいくつ入っているかを見てみましょう。",

    // The mole and the Avogadro constant > h3
    "Atoms inside molecules, ions inside formulas": "分子の中の原子、化学式の中のイオン",

    // The mole and the Avogadro constant > p
    "A formula is a recipe for one particle, and also for one mole of them. One molecule of <span class=\"chem\">NH3</span> contains 1 nitrogen atom and 3 hydrogen atoms. So one mole of <span class=\"chem\">NH3</span> molecules contains 1 mol of N atoms and 3 mol of H atoms.": "化学式は、粒子 1 個のレシピです。同時に、その粒子 1 モルのレシピでもあります。<span class=\"chem\">NH3</span> 1 分子は、窒素原子 1 個と水素原子 3 個を含みます。だから、<span class=\"chem\">NH3</span> 分子 1 モルは、N 原子 1 mol と H 原子 3 mol を含みます。",

    // The mole and the Avogadro constant > p
    "The same works for ionic compounds. One formula unit of <span class=\"chem\">MgCl2</span> contains one <span class=\"chem\">Mg^2+</span> ion and two <span class=\"chem\">Cl-</span> ions. So 1 mol of <span class=\"chem\">MgCl2</span> contains 1 mol of <span class=\"chem\">Mg^2+</span> ions, 2 mol of <span class=\"chem\">Cl-</span> ions, and 3 mol of ions in total.": "イオン化合物でも同じです。<span class=\"chem\">MgCl2</span> の組成式単位 1 つは、<span class=\"chem\">Mg^2+</span> イオン 1 個と <span class=\"chem\">Cl-</span> イオン 2 個を含みます。だから、<span class=\"chem\">MgCl2</span> 1 mol は、<span class=\"chem\">Mg^2+</span> イオン 1 mol と <span class=\"chem\">Cl-</span> イオン 2 mol を含みます。イオンは合わせて 3 mol です。",

    // The mole and the Avogadro constant > h3
    // Relative atomic mass and relative formula mass > h3
    // Molar mass: weighing instead of counting > h3
    // Concentration of solutions > h3
    // Avogadro’s law and reacting gas volumes > h3
    "Method in words": "解き方を言葉で",

    // The mole and the Avogadro constant > li
    "Name the particle the question asks about: molecules, atoms of one element, all atoms, or ions.": "問題が何の粒子をきいているのかを、言葉にします。分子か、ある元素の原子か、すべての原子か、イオンか。",

    // The mole and the Avogadro constant > li
    "If it asks about atoms or ions inside a formula, multiply the amount of the compound by the subscript first.": "化学式の中の原子やイオンをきかれたら、まず化合物の物質量に下付きの数字をかけます。",

    // The mole and the Avogadro constant > li
    "Multiply moles by <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span> to get the number, or divide a number by it to get moles.": "モルに <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span> をかけると、粒子の数になります。粒子の数をこの値で割ると、モルになります。",

    // The mole and the Avogadro constant > li
    "Give the answer in scientific notation, to the significant figures of the data.": "答えは指数表記で、データの有効数字に合わせて書きます。",

    // The mole and the Avogadro constant > worked example > h3
    "Moles to number of molecules": "モルから分子の数へ",

    // The mole and the Avogadro constant > worked example > p
    "Calculate the number of molecules in 0.350 mol of carbon dioxide, <span class=\"chem\">CO2</span>.": "二酸化炭素 <span class=\"chem\">CO2</span> 0.350 mol に含まれる分子の数を計算しなさい (calculate)。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Ask the three questions": "3 つの問いを確認する",

    // The mole and the Avogadro constant > worked example > p
    "Given: an amount, 0.350 mol. Wanted: a number of molecules. Link: the Avogadro constant.": "与えられているもの：物質量 0.350 mol。求めたいもの：分子の数。つなぐ関係：アボガドロ定数。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Substitute with units": "単位をつけて代入する",

    // The mole and the Avogadro constant > worked example > p
    "mol × mol<sup>−1</sup> cancels, leaving a pure number. That is what a count should be.": "mol × mol<sup>−1</sup> は打ち消し合い、単位のない数だけが残ります。個数なのだから、そうなるはずです。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Round to the data": "データに合わせて丸める",

    // The mole and the Avogadro constant > worked example > p
    "0.350 and 6.02 both have 3 significant figures, so the answer has 3.": "0.350 も 6.02 も有効数字 3 桁なので、答えも 3 桁です。",

    // The mole and the Avogadro constant > worked example > maths line
    "<i>N</i> = <b>2.11 × 10<sup>23</sup> molecules</b>": "<i>N</i> = <b>2.11 × 10<sup>23</sup> 個の分子</b>",

    // The mole and the Avogadro constant > worked example > p
    "2.11 × 10<sup>23</sup> molecules of CO<sub>2</sub>": "CO<sub>2</sub> 分子 2.11 × 10<sup>23</sup> 個",

    // The mole and the Avogadro constant > worked example > h3
    "Atoms inside a molecule": "分子の中の原子",

    // The mole and the Avogadro constant > worked example > p
    "Calculate the number of hydrogen atoms in 0.125 mol of ammonia, <span class=\"chem\">NH3</span>.": "アンモニア <span class=\"chem\">NH3</span> 0.125 mol に含まれる水素原子の数を計算しなさい。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Spot what is being counted": "何を数えるのかを見きわめる",

    // The mole and the Avogadro constant > worked example > p
    "The question asks for hydrogen atoms, not ammonia molecules. Each molecule holds 3 of them.": "きかれているのは水素原子の数です。アンモニア分子の数ではありません。1 分子に水素原子は 3 個あります。",

    // The mole and the Avogadro constant > worked example > maths line
    "1 mol NH<sub>3</sub> contains 3 mol H atoms": "1 mol の NH<sub>3</sub> は 3 mol の H 原子を含む",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Find the amount of hydrogen atoms": "水素原子の物質量を求める",

    // The mole and the Avogadro constant > worked example > p
    "Use the subscript from the formula as a multiplier while you are still in moles.": "まだモルのうちに、化学式の下付きの数字をかけます。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Convert moles to a number": "モルを粒子の数に変える",

    // The mole and the Avogadro constant > worked example > p
    "Now it is the same step as before: multiply by the Avogadro constant.": "ここからは、さっきと同じステップです。アボガドロ定数をかけます。",

    // The mole and the Avogadro constant > worked example > p
    "The data have 3 significant figures. The 3 from the formula is an exact count and does not limit the answer.": "データは有効数字 3 桁です。化学式の 3 は正確な個数なので、答えの桁数を制限しません。",

    // The mole and the Avogadro constant > worked example > maths line
    "<i>N</i>(H) = <b>2.26 × 10<sup>23</sup> atoms</b>": "<i>N</i>(H) = <b>2.26 × 10<sup>23</sup> 個の原子</b>",

    // The mole and the Avogadro constant > worked example > p
    "2.26 × 10<sup>23</sup> hydrogen atoms": "水素原子 2.26 × 10<sup>23</sup> 個",

    // The mole and the Avogadro constant > common mistake > p
    "“One mole of oxygen” is unclear. One mole of <span class=\"chem\">O2</span> molecules contains two moles of O atoms. Hydrogen, nitrogen, oxygen, fluorine, chlorine, bromine and iodine exist as two-atom molecules, so check whether the question means atoms or molecules.": "「酸素 1 モル (one mole of oxygen)」という言い方は、あいまいです。<span class=\"chem\">O2</span> 分子 1 モルは、O 原子 2 モルを含みます。水素、窒素、酸素、フッ素、塩素、臭素、ヨウ素は、二原子分子として存在します。問題が原子のことを言っているのか、分子のことを言っているのかを確かめましょう。",

    // The mole and the Avogadro constant > try it > p
    "A piece of copper wire contains 1.50 × 10<sup>22</sup> copper atoms. Calculate the amount of copper, in mol.": "ある銅線は、銅原子を 1.50 × 10<sup>22</sup> 個含みます。銅の物質量を mol で計算しなさい。",

    // The mole and the Avogadro constant > try it > li
    "You have a number of particles and you want moles. Will the answer be bigger or smaller than 1?": "粒子の数がわかっていて、モルを求めます。答えは 1 より大きくなりますか、小さくなりますか。",

    // The mole and the Avogadro constant > try it > li
    "Divide by the Avogadro constant: <span class=\"mono\">1.50 × 10<sup>22</sup> ÷ 6.02 × 10<sup>23</sup></span>.": "アボガドロ定数で割ります：<span class=\"mono\">1.50 × 10<sup>22</sup> ÷ 6.02 × 10<sup>23</sup></span>。",

    // The mole and the Avogadro constant > try it > p
    "To 3 significant figures: <strong>0.0249 mol</strong>. There are fewer atoms than one mole, so the amount is less than 1.": "有効数字 3 桁で <strong>0.0249 mol</strong> です。原子の数は 1 モルより少ないので、物質量は 1 より小さくなります。",

    // The mole and the Avogadro constant > try it > data-label attribute
    "Number of ions": "イオンの数",

    // The mole and the Avogadro constant > try it > p
    "Calculate the total number of ions in 0.200 mol of calcium chloride, <span class=\"chem\">CaCl2</span>.": "塩化カルシウム <span class=\"chem\">CaCl2</span> 0.200 mol に含まれるイオンの総数を計算しなさい。",

    // The mole and the Avogadro constant > try it > li
    "How many ions are in one formula unit of <span class=\"chem\">CaCl2</span>? Count the <span class=\"chem\">Ca^2+</span> and the <span class=\"chem\">Cl-</span> ions.": "<span class=\"chem\">CaCl2</span> の組成式単位 1 つに、イオンは何個ありますか。<span class=\"chem\">Ca^2+</span> イオンと <span class=\"chem\">Cl-</span> イオンを数えましょう。",

    // The mole and the Avogadro constant > try it > li
    "There are 3 ions per formula unit, so <i>n</i>(ions) = 3 × 0.200 mol. Then multiply by <span class=\"mono\">6.02 × 10<sup>23</sup></span>.": "組成式単位 1 つにイオンは 3 個あるので、<i>n</i>(イオン) = 3 × 0.200 mol です。そのあと <span class=\"mono\">6.02 × 10<sup>23</sup></span> をかけます。",

    // The mole and the Avogadro constant > try it > maths line
    "<i>n</i>(ions) = 3 × 0.200 mol = 0.600 mol": "<i>n</i>(イオン) = 3 × 0.200 mol = 0.600 mol",

    // The mole and the Avogadro constant > try it > p
    "To 3 significant figures: <strong>3.61 × 10<sup>23</sup> ions</strong>.": "有効数字 3 桁で<strong>イオン 3.61 × 10<sup>23</sup> 個</strong>です。",

    // The mole and the Avogadro constant > not needed for IB > p
    "You may see an older definition: “the amount that contains as many particles as 12 g of carbon-12”. The IB guide does not use it. It defines the mole by a fixed number of particles. That number is exactly 6.02214076 × 10<sup>23</sup>, but you only ever use the data booklet value, 6.02 × 10<sup>23</sup>. You do not need the history of the change.": "「炭素 12 の 12 g に含まれる粒子と同じ数の粒子を含む量」という古い定義を見かけることがあります。IB の『指導の手引き』は、この定義を使いません。モルを、決まった粒子の数で定義しています。その数は正確に 6.02214076 × 10<sup>23</sup> ですが、使うのはいつもデータブックレットの値 6.02 × 10<sup>23</sup> だけです。定義が変わった経緯を知る必要はありません。",

    // The mole and the Avogadro constant > data-title attribute
    "The mole: quick check": "モル：確認クイズ",

    // Relative atomic mass and relative formula mass > data-toc attribute
    "Relative masses": "相対質量",

    // Relative atomic mass and relative formula mass > h2
    "Relative atomic mass and relative formula mass": "相対原子質量と相対式量",

    // Relative atomic mass and relative formula mass > p
    "One atom has a mass of around 10<sup>−23</sup> g. Numbers like that are awkward, so chemists compare atoms with each other instead. The standard is the carbon-12 atom, <span class=\"chem\">^12C</span>, which is given a mass of exactly 12 units.": "原子 1 個の質量は 10<sup>−23</sup> g くらいです。こんな数は扱いにくいので、化学では原子どうしの質量をくらべます。基準は炭素 12 の原子 <span class=\"chem\">^12C</span> で、その質量をちょうど 12 と決めています。",

    // Relative atomic mass and relative formula mass > p
    "The <dfn data-def=\"The weighted average mass of the atoms of an element, taking isotopic abundance into account, relative to one-twelfth of the mass of an atom of carbon-12. It has no units.\">relative atomic mass</dfn>, <i>A</i><sub>r</sub>, of an element is the weighted average mass of its atoms compared with one-twelfth of the mass of a carbon-12 atom. It is an average because most elements are a mixture of isotopes (see topic 1.2). That is why chlorine has <i>A</i><sub>r</sub> = 35.45, although no single chlorine atom has that mass.": "元素の<dfn data-def=\"ある元素の原子の質量を、同位体の存在比を考えて加重平均した値です。炭素 12 の原子 1 個の質量の 12 分の 1 を基準にします。単位はありません。\">相対原子質量（原子量） <span class=\"en-term\">(relative atomic mass)</span></dfn> <i>A</i><sub>r</sub> は、その元素の原子の質量の加重平均を、炭素 12 の原子の質量の 12 分の 1 とくらべた値です。平均なのは、ほとんどの元素が同位体の混合物だからです（トピック 1.2 を参照）。だから塩素は <i>A</i><sub>r</sub> = 35.45 ですが、その質量をもつ塩素原子は 1 個もありません。",

    // Relative atomic mass and relative formula mass > data-def attribute
    "The weighted average mass of the atoms of an element, taking isotopic abundance into account, relative to one-twelfth of the mass of an atom of carbon-12. It has no units.": "ある元素の原子の質量を、同位体の存在比を考えて加重平均した値です。炭素 12 の原子 1 個の質量の 12 分の 1 を基準にします。単位はありません。",

    // Relative atomic mass and relative formula mass > p
    "The <dfn data-def=\"The sum of the relative atomic masses of all the atoms in a formula. It has no units.\">relative formula mass</dfn>, <i>M</i><sub>r</sub>, is the sum of the <i>A</i><sub>r</sub> values of every atom in the formula. For a substance made of molecules it is also called the relative molecular mass.": "<dfn data-def=\"化学式に含まれるすべての原子の相対原子質量の合計です。単位はありません。\">相対式量（式量） <span class=\"en-term\">(relative formula mass)</span></dfn> <i>M</i><sub>r</sub> は、化学式に含まれるすべての原子の <i>A</i><sub>r</sub> の合計です。分子でできた物質では、相対分子質量（分子量）<span class=\"en-term\">(relative molecular mass)</span> とも呼びます。",

    // Relative atomic mass and relative formula mass > data-def attribute
    "The sum of the relative atomic masses of all the atoms in a formula. It has no units.": "化学式に含まれるすべての原子の相対原子質量の合計です。単位はありません。",

    // Relative atomic mass and relative formula mass > key idea > p
    "<i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios: one mass divided by another mass. The units cancel, so they have <strong>no units</strong>.": "<i>A</i><sub>r</sub> と <i>M</i><sub>r</sub> は比です。ある質量を別の質量で割った値です。単位が打ち消し合うので、<strong>単位はありません</strong>。",

    // Relative atomic mass and relative formula mass > data booklet note > p
    "The periodic table in the data booklet gives <i>A</i><sub>r</sub> to two decimal places: H 1.01, C 12.01, N 14.01, O 16.00, Na 22.99, Cl 35.45. Use these values in calculations, not rounded whole numbers.": "データブックレットの周期表には、<i>A</i><sub>r</sub> が小数第 2 位まで載っています。H 1.01、C 12.01、N 14.01、O 16.00、Na 22.99、Cl 35.45 です。計算には、整数に丸めた値ではなく、この値を使いましょう。",

    // Relative atomic mass and relative formula mass > li
    "List each element in the formula.": "化学式に含まれる元素を書き出します。",

    // Relative atomic mass and relative formula mass > li
    "Count its atoms. A subscript outside a bracket multiplies everything inside the bracket.": "それぞれの原子の数を数えます。かっこの外の下付きの数字は、かっこの中のすべてにかかります。",

    // Relative atomic mass and relative formula mass > li
    "Multiply each count by the element’s <i>A</i><sub>r</sub> (2 d.p.).": "それぞれの原子の数に、その元素の <i>A</i><sub>r</sub>（小数第 2 位まで）をかけます。",

    // Relative atomic mass and relative formula mass > li
    "Add the subtotals. Give <i>M</i><sub>r</sub> to 2 decimal places, with no unit.": "小計を足し合わせます。<i>M</i><sub>r</sub> は小数第 2 位まで書き、単位は付けません。",

    // Relative atomic mass and relative formula mass > widget > data-title attribute
    "Molar mass builder": "モル質量ビルダー",

    // Relative atomic mass and relative formula mass > widget > figcaption
    "Type a formula or build one with the buttons. The table counts every atom, including those inside brackets and in water of crystallization. It uses the <i>A</i><sub>r</sub> values from the data booklet.": "化学式を入力するか、ボタンで組み立てましょう。表は、かっこの中の原子や水和水の原子も含めて、すべての原子を数えます。<i>A</i><sub>r</sub> はデータブックレットの値を使っています。",

    // Relative atomic mass and relative formula mass > worked example > h3
    "Relative formula mass with brackets": "かっこのある化学式の相対式量",

    // Relative atomic mass and relative formula mass > worked example > p
    "Determine the relative formula mass of calcium nitrate, <span class=\"chem\">Ca(NO3)2</span>.": "硝酸カルシウム <span class=\"chem\">Ca(NO3)2</span> の相対式量を求めなさい (determine)。",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Count the atoms": "原子の数を数える",

    // Relative atomic mass and relative formula mass > worked example > p
    "The 2 outside the bracket doubles everything inside it: 2 × N and 2 × 3 = 6 O.": "かっこの外の 2 は、かっこの中のすべてを 2 倍にします。N は 2 個、O は 2 × 3 = 6 個です。",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Multiply by each relative atomic mass": "それぞれの相対原子質量をかける",

    // Relative atomic mass and relative formula mass > worked example > p
    "Use the two-decimal-place values from the data booklet.": "データブックレットの、小数第 2 位までの値を使います。",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Add the subtotals": "小計を足し合わせる",

    // Relative atomic mass and relative formula mass > worked example > p
    "When you add, keep the decimal places of the data: two.": "足し算では、データの小数の桁数（小数第 2 位まで）を保ちます。",

    // Relative atomic mass and relative formula mass > worked example > p
    "<i>M</i><sub>r</sub> = 164.10 (no units)": "<i>M</i><sub>r</sub> = 164.10（単位なし）",

    // Relative atomic mass and relative formula mass > p
    "A <dfn data-def=\"A salt whose crystals contain a fixed number of water molecules per formula unit, called water of crystallization.\">hydrated salt</dfn> has water molecules built into its crystals. The dot in <span class=\"chem\">CuSO4.5H2O</span> means “with”, so add five whole waters: <span class=\"mono\">63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72</span>.": "<dfn data-def=\"結晶の中に、組成式単位 1 つあたり決まった数の水分子を含む塩です。この水を水和水（結晶水）といいます。\">水和物 <span class=\"en-term\">(hydrated salt)</span></dfn>は、結晶の中に水分子が組み込まれた塩です。<span class=\"chem\">CuSO4.5H2O</span> の点は「〜と一緒に」という意味です。だから、水 5 分子をまるごと足します：<span class=\"mono\">63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72</span>。",

    // Relative atomic mass and relative formula mass > data-def attribute
    "A salt whose crystals contain a fixed number of water molecules per formula unit, called water of crystallization.": "結晶の中に、組成式単位 1 つあたり決まった数の水分子を含む塩です。この水を水和水（結晶水）といいます。",

    // Relative atomic mass and relative formula mass > common mistake > p
    "In <span class=\"chem\">Ca(NO3)2</span> it is easy to count only 3 oxygen atoms and get 116.10. The subscript after a bracket multiplies every atom inside it. Count atoms first, then use the calculator.": "<span class=\"chem\">Ca(NO3)2</span> では、酸素原子を 3 個だけと数えて 116.10 としてしまいがちです。かっこの後ろの下付きの数字は、かっこの中のすべての原子にかかります。先に原子を数えてから、電卓を使いましょう。",

    // Relative atomic mass and relative formula mass > try it > data-label attribute
    "Mr": "Mr",

    // Relative atomic mass and relative formula mass > try it > p
    "Determine the relative formula mass of aluminium sulfate, <span class=\"chem\">Al2(SO4)3</span>. Give your answer to 2 decimal places. (<i>A</i><sub>r</sub>: Al 26.98, S 32.07, O 16.00)": "硫酸アルミニウム <span class=\"chem\">Al2(SO4)3</span> の相対式量を求めなさい。答えは小数第 2 位まで書きましょう。（<i>A</i><sub>r</sub>：Al 26.98、S 32.07、O 16.00）",

    // Relative atomic mass and relative formula mass > try it > li
    "Count the atoms first. How many S atoms and how many O atoms are in three sulfate groups?": "先に原子を数えましょう。硫酸イオン 3 つの中に、S 原子と O 原子はそれぞれ何個ありますか。",

    // Relative atomic mass and relative formula mass > try it > li
    "There are 2 Al, 3 S and 12 O: <span class=\"mono\">2(26.98) + 3(32.07) + 12(16.00)</span>.": "Al が 2 個、S が 3 個、O が 12 個です：<span class=\"mono\">2(26.98) + 3(32.07) + 12(16.00)</span>。",

    // Relative atomic mass and relative formula mass > try it > p
    "<strong>342.17</strong>, with no unit, because it is a relative mass.": "<strong>342.17</strong> です。相対質量なので、単位はありません。",

    // Relative atomic mass and relative formula mass > not needed for IB > p
    "You do not need the unified atomic mass unit (u or Da) or the mass of one atom in kilograms for this topic. Calculating <i>A</i><sub>r</sub> from isotope abundances belongs to topic 1.2.": "このトピックでは、統一原子質量単位（u または Da）や、kg で表した原子 1 個の質量は必要ありません。同位体の存在比から <i>A</i><sub>r</sub> を計算するのは、トピック 1.2 の内容です。",

    // Relative atomic mass and relative formula mass > data-title attribute
    "Relative masses: quick check": "相対質量：確認クイズ",

    // Molar mass: weighing instead of counting > data-toc attribute
    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Molar mass": "モル質量",

    // Molar mass: weighing instead of counting > h2
    "Molar mass: weighing instead of counting": "モル質量：数えるかわりに、はかる",

    // Molar mass: weighing instead of counting > p
    "A bank does not count coins one by one. It weighs the bag, because it knows the mass of one coin. Chemists do the same with atoms. If you know the mass of one mole of a substance, a balance tells you how many particles you have.": "銀行は、硬貨を 1 枚ずつ数えません。硬貨 1 枚の質量がわかっているので、袋ごと重さをはかります。化学でも、原子に同じことをします。物質 1 モルの質量がわかっていれば、てんびんではかるだけで粒子の数がわかります。",

    // Molar mass: weighing instead of counting > p
    "The <dfn data-def=\"The mass of one mole of a substance. Symbol M, units g mol^-1. It has the same number as the relative formula mass.\">molar mass</dfn>, <i>M</i>, is the mass of one mole of a substance. Its units are <span class=\"unit\">g mol-1</span>. The mole is chosen so that the molar mass has the same number as <i>M</i><sub>r</sub>: water has <i>M</i><sub>r</sub> = 18.02, so <i>M</i> = 18.02 g mol<sup>−1</sup>.": "<dfn data-def=\"物質 1 モルの質量です。記号 M、単位 g mol^-1。数値は相対式量と同じです。\">モル質量 <span class=\"en-term\">(molar mass)</span></dfn> <i>M</i> は、物質 1 モルの質量です。単位は <span class=\"unit\">g mol-1</span> です。モルは、モル質量の数値が <i>M</i><sub>r</sub> と同じになるように決められています。水は <i>M</i><sub>r</sub> = 18.02 なので、<i>M</i> = 18.02 g mol<sup>−1</sup> です。",

    // Molar mass: weighing instead of counting > data-def attribute
    "The mass of one mole of a substance. Symbol M, units g mol^-1. It has the same number as the relative formula mass.": "物質 1 モルの質量です。記号 M、単位 g mol^-1。数値は相対式量と同じです。",

    // Molar mass: weighing instead of counting > table > caption
    "Same number, different meaning": "数値は同じ、意味は違う",

    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Quantity": "量",

    // Molar mass: weighing instead of counting > table > th
    "Symbol": "記号",

    // Molar mass: weighing instead of counting > table > th
    "For water": "水の場合",

    // Molar mass: weighing instead of counting > table > th
    "Units": "単位",

    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Relative formula mass": "相対式量",

    // Molar mass: weighing instead of counting > table > td
    "<i>M</i><sub>r</sub>": "<i>M</i><sub>r</sub>",

    // Molar mass: weighing instead of counting > table > td
    "none": "なし",

    // Molar mass: weighing instead of counting > table > td
    "<span class=\"unit\">g mol-1</span>": "<span class=\"unit\">g mol-1</span>",

    // Molar mass: weighing instead of counting > table > th
    "Mass of your sample": "試料の質量",

    // Molar mass: weighing instead of counting > table > td
    "whatever you weighed": "はかった値",

    // Molar mass: weighing instead of counting > equation > dd
    "mass of the sample <span class=\"unit\">g</span>": "試料の質量 <span class=\"unit\">g</span>",

    // Molar mass: weighing instead of counting > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "モル質量 <span class=\"unit\">g mol-1</span>",

    // Molar mass: weighing instead of counting > data booklet note > p
    "<i>n</i> = <i>m</i> / <i>M</i> is printed in the data booklet. Rearranged: <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> and <span class=\"mono\"><i>M</i> = <i>m</i> ÷ <i>n</i></span>.": "<i>n</i> = <i>m</i> / <i>M</i> はデータブックレットに載っています。変形すると <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> と <span class=\"mono\"><i>M</i> = <i>m</i> ÷ <i>n</i></span> になります。",

    // Molar mass: weighing instead of counting > p
    "Let the units check your rearrangement. Grams divided by grams-per-mole gives moles: <span class=\"mono\">g ÷ g mol<sup>−1</sup> = mol</span>. If your units come out as something else, the formula is upside down.": "式の変形が正しいかどうかは、単位で確かめられます。グラムを「グラム毎モル」で割ると、モルになります：<span class=\"mono\">g ÷ g mol<sup>−1</sup> = mol</span>。単位がほかのものになったら、式が上下逆です。",

    // Molar mass: weighing instead of counting > h3
    // Molar mass: weighing instead of counting > widget > data-title attribute
    "The mole map": "モルマップ",

    // Molar mass: weighing instead of counting > p
    "Mass, particles, solutions and gases never convert directly into each other. Each one converts to moles, and moles convert to each of the others. That is the whole topic in one picture.": "質量、粒子の数、溶液、気体は、たがいに直接は変換できません。どれも、まずモルに変換します。そしてモルからは、ほかのどれにでも変換できます。このトピックのすべてが、この 1 枚の図に入っています。",

    // Molar mass: weighing instead of counting > widget > figcaption
    "Choose what you are given and what you want, then type a value and a formula. The route lights up and the working appears line by line with units. Solutions are covered in section 1.4.5. The gas-volume link uses the molar volume at STP from the data booklet, which belongs to topic 1.5.": "与えられているものと求めたいものを選び、値と化学式を入力しましょう。道すじが光り、途中の計算が単位つきで 1 行ずつ表示されます。溶液はセクション 1.4.5 で扱います。気体の体積とのつながりには、データブックレットにある STP でのモル体積を使います。これはトピック 1.5 の内容です。",

    // Molar mass: weighing instead of counting > li
    "Ask the three questions. Find “given” and “wanted” on the mole map.": "3 つの問いを確認します。「与えられているもの」と「求めたいもの」をモルマップの上で見つけます。",

    // Molar mass: weighing instead of counting > li
    "If mass is involved, work out the molar mass <i>M</i> from the formula.": "質量が出てくるなら、化学式からモル質量 <i>M</i> を求めます。",

    // Molar mass: weighing instead of counting > li
    "Step 1: convert what you are given into moles.": "ステップ 1：与えられているものをモルに変換します。",

    // Molar mass: weighing instead of counting > li
    "Step 2: convert moles into what you want. If the question asks about atoms or ions inside the formula, multiply by the subscript while you are in moles.": "ステップ 2：モルを求めたいものに変換します。化学式の中の原子やイオンをきかれたら、モルのうちに下付きの数字をかけます。",

    // Molar mass: weighing instead of counting > li
    "Round once at the end and add the unit.": "最後に 1 回だけ丸めて、単位を付けます。",

    // Molar mass: weighing instead of counting > worked example > h3
    "Mass to moles": "質量からモルへ",

    // Molar mass: weighing instead of counting > worked example > p
    "Calculate the amount, in mol, of calcium carbonate in a 12.5 g piece of marble. Assume the marble is pure <span class=\"chem\">CaCO3</span>.": "12.5 g の大理石のかけらに含まれる炭酸カルシウムの物質量を、mol で計算しなさい。大理石は純粋な <span class=\"chem\">CaCO3</span> とします。",

    // Molar mass: weighing instead of counting > worked example > p
    "Given: a mass in g. Wanted: an amount in mol. Link: molar mass.": "与えられているもの：g で表した質量。求めたいもの：mol で表した物質量。つなぐ関係：モル質量。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Find the molar mass": "モル質量を求める",

    // Molar mass: weighing instead of counting > worked example > p
    "You need <i>M</i> before you can use the relationship. One Ca, one C, three O.": "この関係を使うには、先に <i>M</i> が必要です。Ca が 1 個、C が 1 個、O が 3 個です。",

    // Molar mass: weighing instead of counting > worked example > p
    "Keep the extra digits in your calculator for now.": "ここではまだ、電卓に桁を多めに残しておきます。",

    // Molar mass: weighing instead of counting > worked example > p
    "The mass has 3 significant figures.": "質量は有効数字 3 桁です。",

    // Molar mass: weighing instead of counting > worked example > p
    "0.125 mol of CaCO<sub>3</sub>": "CaCO<sub>3</sub> 0.125 mol",

    // Molar mass: weighing instead of counting > worked example > h3
    "Mass to number of atoms (two links)": "質量から原子の数へ（つながり 2 つ）",

    // Molar mass: weighing instead of counting > worked example > p
    "Calculate the number of oxygen atoms in 4.90 g of sulfuric acid, <span class=\"chem\">H2SO4</span>.": "硫酸 <span class=\"chem\">H2SO4</span> 4.90 g に含まれる酸素原子の数を計算しなさい。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Plan the route on the mole map": "モルマップで道すじを決める",

    // Molar mass: weighing instead of counting > worked example > p
    "Mass and particles do not connect directly. Go mass → moles of H<sub>2</sub>SO<sub>4</sub> → moles of O atoms → number of O atoms.": "質量と粒子の数は、直接はつながりません。質量 → H<sub>2</sub>SO<sub>4</sub> のモル → O 原子のモル → O 原子の数、と進みます。",

    // Molar mass: weighing instead of counting > worked example > maths line
    "g &nbsp;→&nbsp; mol H<sub>2</sub>SO<sub>4</sub> &nbsp;→&nbsp; mol O &nbsp;→&nbsp; number of O atoms": "g &nbsp;→&nbsp; mol H<sub>2</sub>SO<sub>4</sub> &nbsp;→&nbsp; mol O &nbsp;→&nbsp; O 原子の数",

    // Molar mass: weighing instead of counting > worked example > p
    "Mass is involved, so <i>M</i> is needed.": "質量が出てくるので、<i>M</i> が必要です。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Convert mass to moles": "質量をモルに変換する",

    // Molar mass: weighing instead of counting > worked example > p
    "This is the first link: <i>n</i> = <i>m</i> ÷ <i>M</i>.": "これが 1 つ目のつながりです：<i>n</i> = <i>m</i> ÷ <i>M</i>。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Use the subscript": "下付きの数字を使う",

    // Molar mass: weighing instead of counting > worked example > p
    "Each H<sub>2</sub>SO<sub>4</sub> contains 4 oxygen atoms.": "H<sub>2</sub>SO<sub>4</sub> 1 個は、酸素原子を 4 個含みます。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Convert moles to a number and round": "モルを粒子の数に変えて、丸める",

    // Molar mass: weighing instead of counting > worked example > p
    "Second link: multiply by <i>N</i><sub>A</sub>. Round to the 3 significant figures of the data.": "2 つ目のつながりです。<i>N</i><sub>A</sub> をかけます。データの有効数字 3 桁に合わせて丸めます。",

    // Molar mass: weighing instead of counting > worked example > maths line
    "<i>N</i>(O) = <b>1.20 × 10<sup>23</sup> atoms</b>": "<i>N</i>(O) = <b>1.20 × 10<sup>23</sup> 個の原子</b>",

    // Molar mass: weighing instead of counting > worked example > p
    "1.20 × 10<sup>23</sup> oxygen atoms": "酸素原子 1.20 × 10<sup>23</sup> 個",

    // Molar mass: weighing instead of counting > common mistake > p
    "Multiplying when you should divide is the classic slip. Estimate first: 4.90 g is much less than one mole of H<sub>2</sub>SO<sub>4</sub> (98.09 g), so the amount must be much less than 1 mol. An answer of 481 mol cannot be right.": "割るべきところでかけてしまうのが、いちばんよくあるミスです。先に見積もりましょう。4.90 g は、H<sub>2</sub>SO<sub>4</sub> 1 モル（98.09 g）よりずっと少ない量です。だから物質量は 1 mol よりずっと小さいはずです。481 mol という答えが正しいはずはありません。",

    // Molar mass: weighing instead of counting > try it > p
    "Calculate the mass of 0.0450 mol of sodium hydroxide, <span class=\"chem\">NaOH</span>. (<i>A</i><sub>r</sub>: Na 22.99, O 16.00, H 1.01)": "水酸化ナトリウム <span class=\"chem\">NaOH</span> 0.0450 mol の質量を計算しなさい。（<i>A</i><sub>r</sub>：Na 22.99、O 16.00、H 1.01）",

    // Molar mass: weighing instead of counting > try it > li
    "You have moles and want grams. Rearrange <i>n</i> = <i>m</i> / <i>M</i> to make <i>m</i> the subject.": "モルがわかっていて、グラムを求めます。<i>n</i> = <i>m</i> / <i>M</i> を変形して、<i>m</i> = の形にしましょう。",

    // Molar mass: weighing instead of counting > try it > li
    "<i>M</i>(NaOH) = 22.99 + 16.00 + 1.01 = 40.00 g mol<sup>−1</sup>. Then <i>m</i> = <i>n</i> × <i>M</i>.": "<i>M</i>(NaOH) = 22.99 + 16.00 + 1.01 = 40.00 g mol<sup>−1</sup> です。次に <i>m</i> = <i>n</i> × <i>M</i> を使います。",

    // Molar mass: weighing instead of counting > try it > p
    "<strong>1.80 g</strong> (3 significant figures).": "<strong>1.80 g</strong>（有効数字 3 桁）。",

    // Molar mass: weighing instead of counting > try it > p
    "A sample of carbon dioxide contains 3.01 × 10<sup>22</sup> molecules. Calculate its mass. (<i>A</i><sub>r</sub>: C 12.01, O 16.00)": "ある二酸化炭素の試料は、分子を 3.01 × 10<sup>22</sup> 個含みます。その質量を計算しなさい。（<i>A</i><sub>r</sub>：C 12.01、O 16.00）",

    // Molar mass: weighing instead of counting > try it > li
    "Particles and mass do not connect directly. Which quantity do you go through?": "粒子の数と質量は、直接はつながりません。どの量を通りますか。",

    // Molar mass: weighing instead of counting > try it > li
    "First <i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CO<sub>2</sub>) = 44.01 g mol<sup>−1</sup>.": "まず <i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub>。次に <i>m</i> = <i>n</i> × <i>M</i> で、<i>M</i>(CO<sub>2</sub>) = 44.01 g mol<sup>−1</sup> を使います。",

    // Molar mass: weighing instead of counting > try it > p
    "To 3 significant figures: <strong>2.20 g</strong>.": "有効数字 3 桁で <strong>2.20 g</strong> です。",

    // Molar mass: weighing instead of counting > not needed for IB > data-title attribute
    // Concentration of solutions > not needed for IB > data-title attribute
    // Avogadro’s law and reacting gas volumes > not needed for IB > data-title attribute
    "Comes later": "あとで学ぶ内容",

    // Molar mass: weighing instead of counting > not needed for IB > p
    "Using molar masses with a balanced equation to find the mass of a product, and limiting reactant, percentage yield and atom economy, are all in Reactivity 2.1. They use exactly the mass ⇄ moles steps you are learning here, with one extra step in the middle.": "モル質量とつり合いのとれた化学反応式を使って生成物の質量を求める計算や、制限反応物、収率、アトムエコノミーは、どれも Reactivity 2.1 で学びます。そこで使うのは、いま学んでいる「質量 ⇄ モル」のステップそのものです。真ん中にステップが 1 つ増えるだけです。",

    // Molar mass: weighing instead of counting > data-title attribute
    "Molar mass: quick check": "モル質量：確認クイズ",

    // Empirical and molecular formulas > data-toc attribute
    // Empirical and molecular formulas > h2
    "Empirical and molecular formulas": "組成式と分子式",

    // Empirical and molecular formulas > p
    "A recipe that says “2 parts flour to 1 part butter” gives you the ratio, but not how big the batch is. Chemical formulas come in the same two kinds.": "「小麦粉 2 に対してバター 1」と書いたレシピからは、比はわかります。でも、全部でどれだけ作るのかはわかりません。化学式にも、同じように 2 つの種類があります。",

    // Empirical and molecular formulas > p
    "The <dfn data-def=\"The simplest whole-number ratio of atoms of each element present in a compound.\">empirical formula</dfn> of a compound gives the simplest ratio of atoms of each element present in it. The <dfn data-def=\"The actual number of atoms of each element present in one molecule.\">molecular formula</dfn> gives the actual number of atoms of each element present in a molecule.": "化合物の<dfn data-def=\"化合物に含まれる各元素の原子の数を、最も簡単な整数比で表した式です。\">組成式（実験式） <span class=\"en-term\">(empirical formula)</span></dfn>は、その化合物に含まれる各元素の原子の数の、最も簡単な比を表します。<dfn data-def=\"1 分子に含まれる各元素の原子の、実際の数を表した式です。\">分子式 <span class=\"en-term\">(molecular formula)</span></dfn>は、1 分子に含まれる各元素の原子の実際の数を表します。",

    // Empirical and molecular formulas > data-def attribute
    "The simplest whole-number ratio of atoms of each element present in a compound.": "化合物に含まれる各元素の原子の数を、最も簡単な整数比で表した式です。",

    // Empirical and molecular formulas > data-def attribute
    "The actual number of atoms of each element present in one molecule.": "1 分子に含まれる各元素の原子の、実際の数を表した式です。",

    // Empirical and molecular formulas > table > caption
    "Empirical and molecular formulas compared": "組成式と分子式をくらべる",

    // Empirical and molecular formulas > table > th
    "Compound": "化合物",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Molecular formula": "分子式",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Empirical formula": "組成式",

    // Empirical and molecular formulas > table > th
    "Molecular ÷ empirical": "分子式 ÷ 組成式",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "glucose": "グルコース",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">CH2O</span>": "<span class=\"chem\">CH2O</span>",

    // Empirical and molecular formulas > table > th
    "ethene": "エテン",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">CH2</span>": "<span class=\"chem\">CH2</span>",

    // Empirical and molecular formulas > table > th
    "hydrogen peroxide": "過酸化水素",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">HO</span>": "<span class=\"chem\">HO</span>",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "water": "水",

    // Empirical and molecular formulas > p
    "The molecular formula is always a whole-number multiple of the empirical formula. Sometimes the multiple is 1 and the two are the same. Ionic compounds such as <span class=\"chem\">NaCl</span> have no molecules, so their formula is already an empirical formula.": "分子式は、いつも組成式の整数倍です。その倍数が 1 で、2 つの式が同じになることもあります。<span class=\"chem\">NaCl</span> のようなイオン化合物には分子がありません。だから、その化学式はもともと組成式です。",

    // Empirical and molecular formulas > h3
    "From a formula to percentage composition": "化学式から質量百分率組成へ",

    // Empirical and molecular formulas > p
    "<dfn data-def=\"The percentage of the total mass of a compound that is due to each element.\">Percentage composition by mass</dfn> says what share of a compound’s mass comes from each element.": "<dfn data-def=\"化合物の全体の質量のうち、各元素が占める割合を百分率で表したものです。\">質量百分率組成 <span class=\"en-term\">(percentage composition by mass)</span></dfn>は、化合物の質量のうち、それぞれの元素がどれだけを占めるかを表します。",

    // Empirical and molecular formulas > data-def attribute
    "The percentage of the total mass of a compound that is due to each element.": "化合物の全体の質量のうち、各元素が占める割合を百分率で表したものです。",

    // Empirical and molecular formulas > equation > maths line
    "% of element = <span class=\"frac\"><span>atoms of element × <i>A</i><sub>r</sub></span><span><i>M</i><sub>r</sub></span></span> × 100": "元素の % = <span class=\"frac\"><span>その元素の原子の数 × <i>A</i><sub>r</sub></span><span><i>M</i><sub>r</sub></span></span> × 100",

    // Empirical and molecular formulas > equation > dt
    "A<sub>r</sub>": "A<sub>r</sub>",

    // Empirical and molecular formulas > equation > dd
    "relative atomic mass of the element (no units)": "その元素の相対原子質量（単位なし）",

    // Empirical and molecular formulas > equation > dt
    "M<sub>r</sub>": "M<sub>r</sub>",

    // Empirical and molecular formulas > equation > dd
    "relative formula mass of the compound (no units)": "化合物の相対式量（単位なし）",

    // Empirical and molecular formulas > p
    "For iron(III) oxide, <span class=\"chem\">Fe2O3</span>: <i>M</i><sub>r</sub> = <span class=\"mono\">2(55.85) + 3(16.00) = 159.70</span>. So the percentage of iron is <span class=\"mono\">111.70 ÷ 159.70 × 100 = 69.94 %</span>, and oxygen is the rest, <span class=\"mono\">30.06 %</span>. The percentages must add up to 100.": "酸化鉄(III) <span class=\"chem\">Fe2O3</span> では、<i>M</i><sub>r</sub> = <span class=\"mono\">2(55.85) + 3(16.00) = 159.70</span> です。だから鉄の百分率は <span class=\"mono\">111.70 ÷ 159.70 × 100 = 69.94 %</span> で、残りの <span class=\"mono\">30.06 %</span> が酸素です。百分率を全部足すと、100 にならなければなりません。",

    // Empirical and molecular formulas > try it > p
    "Urea, <span class=\"chem\">CO(NH2)2</span>, is used as a fertilizer because of its nitrogen content. Calculate the percentage by mass of nitrogen in urea. (<i>A</i><sub>r</sub>: C 12.01, O 16.00, N 14.01, H 1.01)": "尿素 <span class=\"chem\">CO(NH2)2</span> は、窒素を多く含むので肥料に使われます。尿素に含まれる窒素の質量百分率を計算しなさい。（<i>A</i><sub>r</sub>：C 12.01、O 16.00、N 14.01、H 1.01）",

    // Empirical and molecular formulas > try it > li
    "How many nitrogen atoms are in the formula? The 2 outside the bracket matters.": "化学式の中に窒素原子は何個ありますか。かっこの外の 2 を忘れないでください。",

    // Empirical and molecular formulas > try it > li
    "<i>M</i><sub>r</sub> = 12.01 + 16.00 + 2(14.01) + 4(1.01) = 60.07. Then % N = <span class=\"mono\">2(14.01) ÷ 60.07 × 100</span>.": "<i>M</i><sub>r</sub> = 12.01 + 16.00 + 2(14.01) + 4(1.01) = 60.07 です。次に % N = <span class=\"mono\">2(14.01) ÷ 60.07 × 100</span> を計算します。",

    // Empirical and molecular formulas > try it > p
    "To 3 significant figures: <strong>46.6 %</strong>.": "有効数字 3 桁で <strong>46.6 %</strong> です。",

    // Empirical and molecular formulas > h3
    "From composition to an empirical formula: the table method": "組成から組成式へ：表を使う方法",

    // Empirical and molecular formulas > p
    "Going the other way is the more common exam question. A formula is a ratio of <em>atoms</em>, which means a ratio of <em>moles</em>. But the data are masses. So the job is: convert each mass to moles, then simplify the ratio.": "試験では、逆向きの問題のほうがよく出ます。化学式は<em>原子</em>の数の比です。つまり<em>モル</em>の比です。ところが、データは質量です。だから、やることは決まっています。それぞれの質量をモルに変換し、その比を簡単にします。",

    // Empirical and molecular formulas > li
    "Make a column for each element. Write its mass in g. If you are given percentages, imagine a 100 g sample, so 40 % becomes 40 g.": "元素ごとに列をつくり、その質量を g で書きます。百分率で与えられたら、100 g の試料を考えます。そうすれば 40 % は 40 g になります。",

    // Empirical and molecular formulas > li
    "Divide each mass by that element’s <i>A</i><sub>r</sub>. This gives the amount of each element in mol.": "それぞれの質量を、その元素の <i>A</i><sub>r</sub> で割ります。これで各元素の物質量（mol）がわかります。",

    // Empirical and molecular formulas > li
    "Divide every amount by the smallest one. The smallest becomes 1.": "すべての物質量を、いちばん小さい物質量で割ります。いちばん小さいものが 1 になります。",

    // Empirical and molecular formulas > li
    "If every number is now within about 0.1 of a whole number, round. If one ends in about .5, multiply them all by 2. If one ends in about .33 or .67, multiply by 3. If one ends in .25 or .75, multiply by 4.": "どの数も整数から約 0.1 以内なら、整数に丸めます。ある数の小数部分が約 .5 なら、全部に 2 をかけます。約 .33 か .67 なら、3 をかけます。.25 か .75 なら、4 をかけます。",

    // Empirical and molecular formulas > li
    "Write the formula with the whole numbers as subscripts.": "その整数を下付きの数字にして、化学式を書きます。",

    // Empirical and molecular formulas > worked example > h3
    "Empirical formula from percentage composition": "質量百分率組成から組成式を求める",

    // Empirical and molecular formulas > worked example > p
    "A compound contains 48.64 % carbon, 8.16 % hydrogen and 43.20 % oxygen by mass. Determine its empirical formula.": "ある化合物は、質量で炭素 48.64 %、水素 8.16 %、酸素 43.20 % を含みます。組成式を求めなさい。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Turn percentages into masses": "百分率を質量に変える",

    // Empirical and molecular formulas > worked example > p
    "In a 100 g sample, each percentage is the mass in grams. Any sample size gives the same ratio, and 100 g is the easiest.": "100 g の試料なら、百分率の数値がそのままグラムで表した質量になります。試料の量をいくらにしても比は同じなので、100 g がいちばん楽です。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Convert each mass to moles": "それぞれの質量をモルに変換する",

    // Empirical and molecular formulas > worked example > p
    "A formula counts atoms, so you need amounts, not masses. Use <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>.": "化学式は原子の数を表すので、必要なのは質量ではなく物質量です。<i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> を使います。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the smallest": "いちばん小さい値で割る",

    // Empirical and molecular formulas > worked example > p
    "This sets the smallest amount to 1 and shows the ratio clearly. The smallest is 2.700.": "こうすると、いちばん小さい物質量が 1 になり、比がはっきり見えます。いちばん小さいのは 2.700 です。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Clear the fraction": "端数をなくす",

    // Empirical and molecular formulas > worked example > p
    "1.50 is not close to a whole number, so it must not be rounded. Multiplying everything by 2 turns it into 3.": "1.50 は整数に近くないので、丸めてはいけません。全部に 2 をかけると、3 になります。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Write the formula": "化学式を書く",

    // Empirical and molecular formulas > worked example > p
    "5.98 is within experimental error of 6, so the ratio is 3 : 6 : 2.": "5.98 は、実験の誤差の範囲で 6 とみなせます。だから比は 3 : 6 : 2 です。",

    // Empirical and molecular formulas > worked example > maths line
    "empirical formula = <b>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b>": "組成式 = <b>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b>",

    // Empirical and molecular formulas > widget > data-title attribute
    "Empirical formula solver": "組成式ソルバー",

    // Empirical and molecular formulas > widget > figcaption
    "Enter your own percentages or masses and watch each column of the table method fill in. Switch to “Combustion analysis” for CO<sub>2</sub> and H<sub>2</sub>O data. Add a molar mass to get the molecular formula too.": "自分で百分率や質量を入力して、表の列が 1 つずつ埋まっていくのを見ましょう。CO<sub>2</sub> と H<sub>2</sub>O のデータを使うときは「燃焼分析」に切り替えます。モル質量を加えると、分子式も求められます。",

    // Empirical and molecular formulas > common mistake > p
    "Three slips cause most wrong formulas. Using the percentages directly as the ratio, without dividing by <i>A</i><sub>r</sub>. Dividing by atomic number instead of <i>A</i><sub>r</sub>. Rounding 1.5 up to 2, or 1.33 down to 1, instead of multiplying by 2 or 3.": "間違った化学式の原因は、ほとんどが次の 3 つのミスです。<i>A</i><sub>r</sub> で割らずに、百分率をそのまま比として使う。<i>A</i><sub>r</sub> ではなく原子番号で割る。2 や 3 をかけるかわりに、1.5 を 2 に切り上げたり、1.33 を 1 に切り捨てたりする。",

    // Empirical and molecular formulas > try it > p
    "An oxide of phosphorus contains 43.64 % phosphorus and 56.36 % oxygen by mass. Its empirical formula can be written <span class=\"chem\">P2Ox</span>. Find the whole number <i>x</i>. (<i>A</i><sub>r</sub>: P 30.97, O 16.00)": "あるリンの酸化物は、質量でリン 43.64 %、酸素 56.36 % を含みます。その組成式は <span class=\"chem\">P2Ox</span> と書けます。整数 <i>x</i> を求めましょう。（<i>A</i><sub>r</sub>：P 30.97、O 16.00）",

    // Empirical and molecular formulas > try it > li
    "Use the table method: divide each percentage by <i>A</i><sub>r</sub>, then divide both by the smaller answer.": "表を使う方法で解きます。それぞれの百分率を <i>A</i><sub>r</sub> で割り、その両方を小さいほうの答えで割ります。",

    // Empirical and molecular formulas > try it > li
    "You should get P : O = 1 : 2.50. What do you multiply by to make both numbers whole?": "P : O = 1 : 2.50 になるはずです。両方を整数にするには、何をかければよいですか。",

    // Empirical and molecular formulas > try it > p
    "The empirical formula is P<sub>2</sub>O<sub>5</sub>, so <strong><i>x</i> = 5</strong>.": "組成式は P<sub>2</sub>O<sub>5</sub> なので、<strong><i>x</i> = 5</strong> です。",

    // Empirical and molecular formulas > data-title attribute
    "Composition and empirical formulas: quick check": "組成と組成式：確認クイズ",

    // Empirical and molecular formulas > h3
    "Empirical formula from combustion data": "燃焼のデータから組成式を求める",

    // Empirical and molecular formulas > p
    "Many compounds contain only carbon, hydrogen and oxygen. To analyse one, a weighed sample is burned completely in excess oxygen. The carbon dioxide and the water that form are collected and weighed.": "炭素、水素、酸素だけでできた化合物はたくさんあります。そのような化合物を分析するには、質量をはかった試料を、過剰の酸素の中で完全に燃やします。できた二酸化炭素と水を集めて、その質量をはかります。",

    // Empirical and molecular formulas > key idea > p
    "Every carbon atom in the sample ends up in a <span class=\"chem\">CO2</span> molecule. Every hydrogen atom ends up in an <span class=\"chem\">H2O</span> molecule. The oxygen in the products comes partly from the air, so the oxygen in the sample is found by subtraction.": "試料の中の炭素原子は、すべて <span class=\"chem\">CO2</span> 分子の中に入ります。水素原子は、すべて <span class=\"chem\">H2O</span> 分子の中に入ります。生成物の酸素は、一部が空気から来たものです。だから、試料の中の酸素は引き算で求めます。",

    // Empirical and molecular formulas > li
    "Mass of C in the sample = mass of <span class=\"chem\">CO2</span> × <span class=\"mono\">12.01 ÷ 44.01</span>.": "試料の中の C の質量 = <span class=\"chem\">CO2</span> の質量 × <span class=\"mono\">12.01 ÷ 44.01</span>。",

    // Empirical and molecular formulas > li
    "Mass of H in the sample = mass of <span class=\"chem\">H2O</span> × <span class=\"mono\">2(1.01) ÷ 18.02</span>. The 2 is there because each water molecule holds two hydrogen atoms.": "試料の中の H の質量 = <span class=\"chem\">H2O</span> の質量 × <span class=\"mono\">2(1.01) ÷ 18.02</span>。2 があるのは、水 1 分子が水素原子を 2 個含むからです。",

    // Empirical and molecular formulas > li
    "Mass of O in the sample = mass of sample − mass of C − mass of H.": "試料の中の O の質量 = 試料の質量 − C の質量 − H の質量。",

    // Empirical and molecular formulas > li
    "Now use the table method on the three masses.": "あとは、この 3 つの質量に、表を使う方法を当てはめます。",

    // Empirical and molecular formulas > p
    "You can also work in moles: <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) and <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). You still need the masses of C and H to find the oxygen by difference.": "モルで進めることもできます。<i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)、<i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>) です。それでも、酸素を差で求めるには、C と H の質量が必要です。",

    // Empirical and molecular formulas > worked example > h3
    "Empirical formula from combustion analysis": "元素分析（燃焼法）から組成式を求める",

    // Empirical and molecular formulas > worked example > p
    "A compound contains only carbon, hydrogen and oxygen. Complete combustion of 0.660 g of it produces 1.319 g of <span class=\"chem\">CO2</span> and 0.540 g of <span class=\"chem\">H2O</span>. Determine the empirical formula.": "ある化合物は、炭素、水素、酸素だけを含みます。この化合物 0.660 g を完全燃焼させると、<span class=\"chem\">CO2</span> が 1.319 g、<span class=\"chem\">H2O</span> が 0.540 g できます。組成式を求めなさい。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of carbon": "炭素の質量を求める",

    // Empirical and molecular formulas > worked example > p
    "All the carbon is now in the CO<sub>2</sub>. Carbon makes up 12.01 out of every 44.01 g of CO<sub>2</sub>.": "炭素は、いまはすべて CO<sub>2</sub> の中にあります。CO<sub>2</sub> 44.01 g のうち、12.01 g が炭素です。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of hydrogen": "水素の質量を求める",

    // Empirical and molecular formulas > worked example > p
    "All the hydrogen is now in the H<sub>2</sub>O. Hydrogen makes up 2.02 out of every 18.02 g of water.": "水素は、いまはすべて H<sub>2</sub>O の中にあります。水 18.02 g のうち、2.02 g が水素です。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of oxygen by difference": "酸素の質量を差で求める",

    // Empirical and molecular formulas > worked example > p
    "Whatever is not carbon or hydrogen must be oxygen. Use unrounded values from your calculator.": "炭素でも水素でもない部分は、酸素のはずです。電卓に残っている、丸めていない値を使います。",

    // Empirical and molecular formulas > worked example > p
    "From here it is the ordinary table method.": "ここからは、いつもの表を使う方法です。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the smallest and write the formula": "いちばん小さい値で割って、化学式を書く",

    // Empirical and molecular formulas > worked example > p
    "The smallest is 0.01497. The ratios are whole numbers within experimental error.": "いちばん小さいのは 0.01497 です。比は、実験の誤差の範囲で整数になります。",

    // Empirical and molecular formulas > worked example > maths line
    "empirical formula = <b>C<sub>2</sub>H<sub>4</sub>O</b>": "組成式 = <b>C<sub>2</sub>H<sub>4</sub>O</b>",

    // Empirical and molecular formulas > exam tip (shown in English + translation) > p
    "A typical 3-mark combustion question gives one mark for the masses or amounts of C and H, one for oxygen by difference, and one for the formula. Lay your working out in that order so each mark is easy to find.": "配点が 3 点の典型的な燃焼の問題では、C と H の質量または物質量に 1 点、差で求めた酸素に 1 点、化学式に 1 点が与えられます。途中の計算をこの順に並べて書くと、採点者がそれぞれの点を見つけやすくなります。",

    // Empirical and molecular formulas > try it > p
    "A compound contains only C, H and O. Burning 1.150 g of it completely gives 2.197 g of <span class=\"chem\">CO2</span> and 1.349 g of <span class=\"chem\">H2O</span>. Calculate the mass of oxygen in the 1.150 g sample, to 3 significant figures.": "ある化合物は C、H、O だけを含みます。この化合物 1.150 g を完全に燃やすと、<span class=\"chem\">CO2</span> が 2.197 g、<span class=\"chem\">H2O</span> が 1.349 g できます。試料 1.150 g に含まれる酸素の質量を、有効数字 3 桁で計算しなさい。",

    // Empirical and molecular formulas > try it > li
    "Find the mass of carbon from the CO<sub>2</sub> and the mass of hydrogen from the H<sub>2</sub>O. Then subtract both from 1.150 g.": "CO<sub>2</sub> から炭素の質量を、H<sub>2</sub>O から水素の質量を求めます。次に、その両方を 1.150 g から引きます。",

    // Empirical and molecular formulas > try it > li
    "<i>m</i>(C) = 2.197 × 12.01 ÷ 44.01 and <i>m</i>(H) = 1.349 × 2.02 ÷ 18.02. Do not round them before you subtract.": "<i>m</i>(C) = 2.197 × 12.01 ÷ 44.01、<i>m</i>(H) = 1.349 × 2.02 ÷ 18.02 です。引き算の前に丸めてはいけません。",

    // Empirical and molecular formulas > try it > p
    "<strong>0.399 g</strong> of oxygen. Carrying on: the amounts are C 0.04992 mol, H 0.1497 mol and O 0.02495 mol, a ratio of 2 : 6 : 1, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O.": "酸素は <strong>0.399 g</strong> です。続きを計算すると、物質量は C 0.04992 mol、H 0.1497 mol、O 0.02495 mol で、比は 2 : 6 : 1 です。だから組成式は C<sub>2</sub>H<sub>6</sub>O です。",

    // Empirical and molecular formulas > h3
    "From empirical formula to molecular formula": "組成式から分子式へ",

    // Empirical and molecular formulas > p
    "The empirical formula gives the ratio. To find the real molecule you need one more fact: the molar mass. It usually comes from another experiment, often a gas measurement (topic 1.5).": "組成式からわかるのは比です。実際の分子を知るには、もう 1 つ情報が必要です。モル質量です。モル質量はふつう別の実験から求め、気体の測定を使うことがよくあります（トピック 1.5）。",

    // Empirical and molecular formulas > li
    "Work out the mass of the empirical formula, from <i>A</i><sub>r</sub> values.": "<i>A</i><sub>r</sub> の値から、組成式の式量を求めます。",

    // Empirical and molecular formulas > li
    "Divide the molar mass by the empirical formula mass. The answer should be a whole number.": "モル質量を、組成式の式量で割ります。答えは整数になるはずです。",

    // Empirical and molecular formulas > li
    "Multiply every subscript in the empirical formula by that whole number.": "組成式のすべての下付きの数字に、その整数をかけます。",

    // Empirical and molecular formulas > worked example > h3
    "Molecular formula from molar mass": "モル質量から分子式を求める",

    // Empirical and molecular formulas > worked example > p
    "The compound in the last worked example has the empirical formula <span class=\"chem\">C2H4O</span>. Its molar mass is 88.12 g mol<sup>−1</sup>. Determine its molecular formula.": "前の例題の化合物の組成式は <span class=\"chem\">C2H4O</span> です。モル質量は 88.12 g mol<sup>−1</sup> です。分子式を求めなさい。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the empirical formula mass": "組成式の式量を求める",

    // Empirical and molecular formulas > worked example > p
    "You need to know how heavy one “unit” of the ratio is.": "比の「1 単位」がどれだけの重さなのかを知る必要があります。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide the molar mass by it": "モル質量をその値で割る",

    // Empirical and molecular formulas > worked example > p
    "This tells you how many empirical units fit into one molecule.": "これで、1 分子の中に組成式の単位がいくつ入るかがわかります。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Multiply the subscripts": "下付きの数字にかける",

    // Empirical and molecular formulas > worked example > p
    "Two units per molecule, so double every subscript.": "1 分子に 2 単位なので、下付きの数字をすべて 2 倍にします。",

    // Empirical and molecular formulas > try it > data-label attribute
    "Carbon atoms": "炭素原子の数",

    // Empirical and molecular formulas > try it > p
    "A sugar has the empirical formula <span class=\"chem\">CH2O</span> and a molar mass of 180.18 g mol<sup>−1</sup>. How many carbon atoms are in one molecule of the sugar? (<i>A</i><sub>r</sub>: C 12.01, H 1.01, O 16.00)": "ある糖の組成式は <span class=\"chem\">CH2O</span> で、モル質量は 180.18 g mol<sup>−1</sup> です。この糖 1 分子に、炭素原子は何個ありますか。（<i>A</i><sub>r</sub>：C 12.01、H 1.01、O 16.00）",

    // Empirical and molecular formulas > try it > li
    "Find the mass of one CH<sub>2</sub>O unit first.": "まず、CH<sub>2</sub>O 1 単位の式量を求めましょう。",

    // Empirical and molecular formulas > try it > li
    "The empirical formula mass is 30.03. Divide 180.18 by it to see how many units make one molecule.": "組成式の式量は 30.03 です。180.18 をこの値で割ると、1 分子が何単位でできているかがわかります。",

    // Empirical and molecular formulas > try it > maths line
    "empirical formula mass = 12.01 + 2(1.01) + 16.00 = 30.03": "組成式の式量 = 12.01 + 2(1.01) + 16.00 = 30.03",

    // Empirical and molecular formulas > try it > p
    "The molecular formula is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, so there are <strong>6</strong> carbon atoms.": "分子式は C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> なので、炭素原子は <strong>6</strong> 個です。",

    // Empirical and molecular formulas > common mistake > p
    "Read which formula the question wants. If it asks for the empirical formula of <span class=\"chem\">C4H8O2</span>, simplify to <span class=\"chem\">C2H4O</span>. If it asks for the molecular formula, do not simplify.": "問題がどちらの式を求めているのかを、よく読みましょう。<span class=\"chem\">C4H8O2</span> の組成式 (empirical formula) をきかれたら、<span class=\"chem\">C2H4O</span> に簡単にします。分子式 (molecular formula) をきかれたら、簡単にしてはいけません。",

    // Empirical and molecular formulas > h3
    "Water of crystallization from heating a hydrate": "水和物を加熱して水和水を求める",

    // Empirical and molecular formulas > p
    "The same table method finds the <i>x</i> in a hydrated salt such as <span class=\"chem\">CuSO4.xH2O</span>. A weighed sample is heated so the water is driven off as steam. What is left is the <dfn data-def=\"Without water. An anhydrous salt has lost its water of crystallization.\">anhydrous</dfn> salt. The mass lost is the mass of water.": "<span class=\"chem\">CuSO4.xH2O</span> のような水和物の <i>x</i> も、同じ表を使う方法で求められます。質量をはかった試料を加熱して、水を水蒸気として追い出します。残るのは<dfn data-def=\"水を含まないこと。無水物は、水和水を失った塩です。\">無水 <span class=\"en-term\">(anhydrous)</span></dfn>の塩（無水物）です。減った質量が、水の質量です。",

    // Empirical and molecular formulas > data-def attribute
    "Without water. An anhydrous salt has lost its water of crystallization.": "水を含まないこと。無水物は、水和水を失った塩です。",

    // Empirical and molecular formulas > p
    "Here the two “elements” in the table are the anhydrous salt and the water. Divide each mass by its own molar mass, then divide by the amount of salt.": "ここでは、表の 2 つの「元素」にあたるのは、無水物と水です。それぞれの質量をそれぞれのモル質量で割り、次に無水物の物質量で割ります。",

    // Empirical and molecular formulas > worked example > h3
    "Finding x in a hydrate": "水和物の x を求める",

    // Empirical and molecular formulas > worked example > p
    "4.99 g of hydrated copper(II) sulfate, <span class=\"chem\">CuSO4.xH2O</span>, is heated to constant mass. 3.19 g of anhydrous <span class=\"chem\">CuSO4</span> remains. Determine <i>x</i>.": "硫酸銅(II) の水和物 <span class=\"chem\">CuSO4.xH2O</span> 4.99 g を、質量が一定になるまで加熱します。無水の <span class=\"chem\">CuSO4</span> が 3.19 g 残ります。<i>x</i> を求めなさい。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of water lost": "失われた水の質量を求める",

    // Empirical and molecular formulas > worked example > p
    "The only thing that left the crucible was water.": "るつぼから出ていったのは、水だけです。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Convert both masses to moles": "両方の質量をモルに変換する",

    // Empirical and molecular formulas > worked example > p
    "The formula is a mole ratio of salt to water. <i>M</i>(CuSO<sub>4</sub>) = 63.55 + 32.07 + 4(16.00) = 159.62 g mol<sup>−1</sup>.": "この化学式は、無水物と水の物質量の比を表しています。<i>M</i>(CuSO<sub>4</sub>) = 63.55 + 32.07 + 4(16.00) = 159.62 g mol<sup>−1</sup> です。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the amount of salt": "無水物の物質量で割る",

    // Empirical and molecular formulas > worked example > p
    "You want the number of waters for each one CuSO<sub>4</sub>.": "知りたいのは、CuSO<sub>4</sub> 1 つあたりの水の数です。",

    // Empirical and molecular formulas > worked example > p
    "<i>x</i> must be a whole number, because it counts molecules.": "<i>x</i> は分子の数なので、整数でなければなりません。",

    // Empirical and molecular formulas > worked example > maths line
    "<i>x</i> = <b>5</b>, so the formula is CuSO<sub>4</sub>·5H<sub>2</sub>O": "<i>x</i> = <b>5</b> なので、化学式は CuSO<sub>4</sub>·5H<sub>2</sub>O",

    // Empirical and molecular formulas > exam tip (shown in English + translation) > p
    "“Heat to constant mass” means heat, cool, weigh, and repeat until two weighings agree. It shows that all the water has gone. If some water stays behind, the mass lost is too small and the calculated <i>x</i> is too low.": "「質量が一定になるまで加熱する (heat to constant mass)」とは、加熱し、冷まし、質量をはかることを、2 回の測定値が一致するまで繰り返すという意味です。これで、水がすべて出ていったことがわかります。水が少し残っていると、減った質量が小さくなりすぎ、計算した <i>x</i> は小さくなりすぎます。",

    // Empirical and molecular formulas > try it > p
    "6.16 g of hydrated magnesium sulfate, <span class=\"chem\">MgSO4.xH2O</span>, is heated to constant mass. 3.01 g of anhydrous <span class=\"chem\">MgSO4</span> remains. Determine the whole number <i>x</i>. (<i>M</i>: <span class=\"chem\">MgSO4</span> 120.38 g mol<sup>−1</sup>, <span class=\"chem\">H2O</span> 18.02 g mol<sup>−1</sup>)": "硫酸マグネシウムの水和物 <span class=\"chem\">MgSO4.xH2O</span> 6.16 g を、質量が一定になるまで加熱します。無水の <span class=\"chem\">MgSO4</span> が 3.01 g 残ります。整数 <i>x</i> を求めなさい。（<i>M</i>：<span class=\"chem\">MgSO4</span> 120.38 g mol<sup>−1</sup>、<span class=\"chem\">H2O</span> 18.02 g mol<sup>−1</sup>）",

    // Empirical and molecular formulas > try it > li
    "The mass of water is the mass lost on heating: 6.16 g − 3.01 g.": "水の質量は、加熱で減った質量です：6.16 g − 3.01 g。",

    // Empirical and molecular formulas > try it > li
    "Convert 3.01 g of MgSO<sub>4</sub> and 3.15 g of H<sub>2</sub>O to moles. Then divide the moles of water by the moles of salt.": "MgSO<sub>4</sub> 3.01 g と H<sub>2</sub>O 3.15 g をモルに変換します。次に、水のモルを無水物のモルで割ります。",

    // Empirical and molecular formulas > try it > p
    "Rounded to a whole number, <strong><i>x</i> = 7</strong>: MgSO<sub>4</sub>·7H<sub>2</sub>O.": "整数に丸めると <strong><i>x</i> = 7</strong> です：MgSO<sub>4</sub>·7H<sub>2</sub>O。",

    // Empirical and molecular formulas > not needed for IB > p
    "Combustion problems in this topic use compounds of carbon, hydrogen and oxygen, with oxygen found by difference. You do not need to know how an elemental analyser works.": "このトピックの燃焼の問題で扱うのは、炭素、水素、酸素の化合物です。酸素は差で求めます。元素分析装置のしくみを知る必要はありません。",

    // Empirical and molecular formulas > data-title attribute
    "Combustion, molecular formulas and hydrates: quick check": "燃焼・分子式・水和物：確認クイズ",

    // Concentration of solutions > data-toc attribute
    "Concentration": "濃度",

    // Concentration of solutions > h2
    "Concentration of solutions": "溶液の濃度",

    // Concentration of solutions > p
    "Two glasses of squash can hold the same amount of syrup but taste different, because one has more water in it. What matters is how much is dissolved <em>per unit volume</em>. That is concentration.": "シロップを水でうすめた飲み物が 2 杯あるとします。シロップの量が同じでも、片方に水が多く入っていれば、味は違います。大事なのは、<em>単位体積あたり</em>にどれだけ溶けているかです。それが濃度です。",

    // Concentration of solutions > p
    "A <dfn data-def=\"The substance that dissolves.\">solute</dfn> dissolves in a <dfn data-def=\"The liquid that does the dissolving, usually water.\">solvent</dfn> to make a <dfn data-def=\"A homogeneous mixture of a solute dissolved in a solvent.\">solution</dfn>. The <dfn data-def=\"The amount of solute, in mol, per cubic decimetre of solution. Units mol dm^-3. Shown by square brackets.\">molar concentration</dfn> is the amount of solute divided by the volume of the solution. Its units are <span class=\"unit\">mol dm-3</span>.": "<dfn data-def=\"溶けている物質です。\">溶質 <span class=\"en-term\">(solute)</span></dfn>が<dfn data-def=\"溶かすほうの液体です。ふつうは水です。\">溶媒 <span class=\"en-term\">(solvent)</span></dfn>に溶けると、<dfn data-def=\"溶質が溶媒に溶けてできた均一混合物です。\">溶液 <span class=\"en-term\">(solution)</span></dfn>ができます。<dfn data-def=\"溶液 1 立方デシメートルあたりの溶質の物質量（mol）です。単位は mol dm^-3。角かっこ [ ] で表します。\">モル濃度 <span class=\"en-term\">(molar concentration)</span></dfn>は、溶質の物質量を溶液の体積で割った値です。単位は <span class=\"unit\">mol dm-3</span> です。",

    // Concentration of solutions > data-def attribute
    "The substance that dissolves.": "溶けている物質です。",

    // Concentration of solutions > data-def attribute
    "The liquid that does the dissolving, usually water.": "溶かすほうの液体です。ふつうは水です。",

    // Concentration of solutions > data-def attribute
    "A homogeneous mixture of a solute dissolved in a solvent.": "溶質が溶媒に溶けてできた均一混合物です。",

    // Concentration of solutions > data-def attribute
    "The amount of solute, in mol, per cubic decimetre of solution. Units mol dm^-3. Shown by square brackets.": "溶液 1 立方デシメートルあたりの溶質の物質量（mol）です。単位は mol dm^-3。角かっこ [ ] で表します。",

    // Concentration of solutions > equation > dd
    "amount of solute <span class=\"unit\">mol</span>": "溶質の物質量 <span class=\"unit\">mol</span>",

    // Concentration of solutions > equation > dd
    "molar concentration <span class=\"unit\">mol dm-3</span>": "モル濃度 <span class=\"unit\">mol dm-3</span>",

    // Concentration of solutions > equation > dd
    "volume of solution <span class=\"unit\">dm3</span>": "溶液の体積 <span class=\"unit\">dm3</span>",

    // Concentration of solutions > data booklet note > p
    "<i>n</i> = <i>CV</i> is printed in the data booklet. Rearranged: <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> and <span class=\"mono\"><i>V</i> = <i>n</i> ÷ <i>C</i></span>. The volume must be in dm<sup>3</sup>.": "<i>n</i> = <i>CV</i> はデータブックレットに載っています。変形すると <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> と <span class=\"mono\"><i>V</i> = <i>n</i> ÷ <i>C</i></span> になります。体積は dm<sup>3</sup> でなければなりません。",

    // Concentration of solutions > p
    "Square brackets mean “molar concentration of”. So <span class=\"mono\">[NaCl] = 0.400 mol dm<sup>−3</sup></span> reads “the concentration of sodium chloride is 0.400 moles per cubic decimetre”. You are expected to use this notation.": "角かっこ [ ] は「〜のモル濃度」という意味です。だから <span class=\"mono\">[NaCl] = 0.400 mol dm<sup>−3</sup></span> は、「塩化ナトリウムの濃度は 0.400 モル毎立方デシメートル」と読みます。試験では、この書き方を使えることが求められます。",

    // Concentration of solutions > key idea > p
    "<i>V</i> is the volume of the finished <strong>solution</strong>, not the volume of water you added. Dissolving a solid changes the volume a little, which is why solutions are made up to a mark and not by adding a measured volume of water.": "<i>V</i> は、できあがった<strong>溶液</strong>の体積です。加えた水の体積ではありません。固体を溶かすと体積が少し変わります。だから溶液は、はかった体積の水を加えるのではなく、標線まで水を加えてつくります。",

    // Concentration of solutions > h3
    "Two ways to state a concentration": "濃度の 2 つの表し方",

    // Concentration of solutions > p
    "The <dfn data-def=\"The mass of solute, in g, per cubic decimetre of solution. Units g dm^-3.\">mass concentration</dfn> is the mass of solute per volume of solution, in <span class=\"unit\">g dm-3</span>. The two are linked by the molar mass, in exactly the way mass and moles are.": "<dfn data-def=\"溶液 1 立方デシメートルあたりの溶質の質量（g）です。単位は g dm^-3。\">質量濃度 <span class=\"en-term\">(mass concentration)</span></dfn>は、溶液の体積あたりの溶質の質量で、単位は <span class=\"unit\">g dm-3</span> です。この 2 つの濃度は、モル質量でつながっています。質量とモルのつながりと、まったく同じです。",

    // Concentration of solutions > data-def attribute
    "The mass of solute, in g, per cubic decimetre of solution. Units g dm^-3.": "溶液 1 立方デシメートルあたりの溶質の質量（g）です。単位は g dm^-3。",

    // Concentration of solutions > equation > maths line
    "mass concentration = <i>C</i> × <i>M</i>": "質量濃度 = <i>C</i> × <i>M</i>",

    // Concentration of solutions > equation > dd
    "molar mass of the solute <span class=\"unit\">g mol-1</span>": "溶質のモル質量 <span class=\"unit\">g mol-1</span>",

    // Concentration of solutions > p
    "The mass concentration comes out in <span class=\"unit\">g dm-3</span>. For example, 0.0500 mol dm<sup>−3</sup> sulfuric acid (<i>M</i> = 98.09 g mol<sup>−1</sup>) is <span class=\"mono\">0.0500 × 98.09 = 4.90 g dm<sup>−3</sup></span>. To go from g dm<sup>−3</sup> to mol dm<sup>−3</sup>, divide by <i>M</i>.": "質量濃度の単位は <span class=\"unit\">g dm-3</span> になります。たとえば、0.0500 mol dm<sup>−3</sup> の硫酸（<i>M</i> = 98.09 g mol<sup>−1</sup>）は <span class=\"mono\">0.0500 × 98.09 = 4.90 g dm<sup>−3</sup></span> です。g dm<sup>−3</sup> から mol dm<sup>−3</sup> に直すには、<i>M</i> で割ります。",

    // Concentration of solutions > li
    "Ask the three questions. Is the solute given as a mass, an amount or a concentration?": "3 つの問いを確認します。溶質は、質量、物質量、濃度のどれで与えられていますか。",

    // Concentration of solutions > li
    "Convert every volume from cm<sup>3</sup> to dm<sup>3</sup> by dividing by 1000. Write this as its own line.": "体積はすべて、1000 で割って cm<sup>3</sup> から dm<sup>3</sup> に直します。これを、それだけで 1 行として書きます。",

    // Concentration of solutions > li
    "If you have a mass of solute, convert it to moles with <i>n</i> = <i>m</i> ÷ <i>M</i>.": "",

    // Concentration of solutions > li
    "Use <i>n</i> = <i>CV</i>, rearranged for what you want.": "",

    // Concentration of solutions > li
    "Check the size of the answer, round, and write the unit.": "",

    // Concentration of solutions > worked example > h3
    "Concentration from mass and volume": "",

    // Concentration of solutions > worked example > p
    "5.85 g of sodium chloride, <span class=\"chem\">NaCl</span>, is dissolved in distilled water and the solution is made up to 250.0 cm<sup>3</sup>. Calculate the concentration in mol dm<sup>−3</sup> and in g dm<sup>−3</sup>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Convert the volume to dm³": "",

    // Concentration of solutions > worked example > p
    "<i>n</i> = <i>CV</i> only works with the volume in dm<sup>3</sup>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Convert the mass to moles": "",

    // Concentration of solutions > worked example > p
    "Molar concentration needs an amount in mol, not a mass.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Divide amount by volume": "",

    // Concentration of solutions > worked example > p
    "Rearranging <i>n</i> = <i>CV</i> gives <i>C</i> = <i>n</i> ÷ <i>V</i>.": "",

    // Concentration of solutions > worked example > p
    "The mass has 3 significant figures, the fewest in the data.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Find the mass concentration": "",

    // Concentration of solutions > worked example > p
    "Mass per volume uses the mass directly. There is no need to go through moles.": "",

    // Concentration of solutions > worked example > p
    "0.400 mol dm<sup>−3</sup>, which is 23.4 g dm<sup>−3</sup>": "",

    // Concentration of solutions > common mistake > p
    "Dividing by 250 instead of 0.2500 gives 0.000400, an answer 1000 times too small. Mixing up the two units is also common. For the same solution, the value in <span class=\"unit\">g dm-3</span> is always the bigger number, because every molar mass is greater than 1 g mol<sup>−1</sup>.": "",

    // Concentration of solutions > try it > p
    "Calculate the amount, in mol, of solute in 20.0 cm<sup>3</sup> of a 0.150 mol dm<sup>−3</sup> solution.": "",

    // Concentration of solutions > try it > li
    "Which relationship links amount, concentration and volume? What unit must the volume be in?": "",

    // Concentration of solutions > try it > li
    "<i>V</i> = 20.0 ÷ 1000 = 0.0200 dm<sup>3</sup>. Then <i>n</i> = <i>C</i> × <i>V</i>.": "",

    // Concentration of solutions > try it > p
    "<strong>0.00300 mol</strong>, or 3.00 × 10<sup>−3</sup> mol.": "",

    // Concentration of solutions > try it > p
    "1.20 g of sodium hydroxide, <span class=\"chem\">NaOH</span>, is dissolved and made up to 250.0 cm<sup>3</sup> of solution. Calculate [NaOH]. (<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>)": "",

    // Concentration of solutions > try it > li
    "Two conversions are needed before you can divide: mass to moles, and cm<sup>3</sup> to dm<sup>3</sup>.": "",

    // Concentration of solutions > try it > li
    "<i>n</i> = 1.20 ÷ 40.00 = 0.0300 mol and <i>V</i> = 0.2500 dm<sup>3</sup>. Now <i>C</i> = <i>n</i> ÷ <i>V</i>.": "",

    // Concentration of solutions > try it > p
    "<strong>0.120 mol dm<sup>−3</sup></strong>": "",

    // Concentration of solutions > try it > p
    "A bottle is labelled “sodium hydroxide, 8.00 g dm<sup>−3</sup>”. Convert this to a molar concentration. (<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>)": "",

    // Concentration of solutions > try it > li
    "Going from grams to moles: do you multiply or divide by the molar mass?": "",

    // Concentration of solutions > try it > li
    "Divide: <span class=\"mono\">8.00 g dm<sup>−3</sup> ÷ 40.00 g mol<sup>−1</sup></span>.": "",

    // Concentration of solutions > try it > p
    "<strong>0.200 mol dm<sup>−3</sup></strong>. The units confirm it: g dm<sup>−3</sup> ÷ g mol<sup>−1</sup> = mol dm<sup>−3</sup>.": "",

    // Concentration of solutions > h3
    "Concentration of the ions": "",

    // Concentration of solutions > p
    "When an ionic compound dissolves, its ions separate. The formula tells you how many of each you get. One <span class=\"chem\">MgCl2</span> gives one <span class=\"chem\">Mg^2+</span> and two <span class=\"chem\">Cl-</span>. So in 0.150 mol dm<sup>−3</sup> <span class=\"chem\">MgCl2</span>, <span class=\"mono\">[Mg<sup>2+</sup>] = 0.150 mol dm<sup>−3</sup></span> and <span class=\"mono\">[Cl<sup>−</sup>] = 2 × 0.150 = 0.300 mol dm<sup>−3</sup></span>.": "",

    // Concentration of solutions > data-title attribute
    "Concentration calculations: quick check": "",

    // Concentration of solutions > h3
    "Making a standard solution": "",

    // Concentration of solutions > p
    "A <dfn data-def=\"A solution whose concentration is known accurately.\">standard solution</dfn> is one whose concentration is known accurately. It is made in a <dfn data-def=\"A flask with a long narrow neck and a single graduation mark. It holds one accurately known volume, such as 250.0 cm^3.\">volumetric flask</dfn>, which has a single mark on a narrow neck and holds one precise volume.": "",

    // Concentration of solutions > data-def attribute
    "A solution whose concentration is known accurately.": "",

    // Concentration of solutions > data-def attribute
    "A flask with a long narrow neck and a single graduation mark. It holds one accurately known volume, such as 250.0 cm^3.": "",

    // Concentration of solutions > widget > data-title attribute
    "Solution lab": "",

    // Concentration of solutions > widget > figcaption
    "Choose a solute, a mass and a flask to see both concentrations with the working. Switch the task to “Dilute a stock solution” to explore <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. Flask sizes are drawn roughly to scale. The depth of shading is illustrative: it shows “more concentrated” or “less concentrated”, not a measured colour.": "",

    // Concentration of solutions > worked example > h3
    "Mass needed for a standard solution": "",

    // Concentration of solutions > worked example > p
    "Calculate the mass of anhydrous sodium carbonate, <span class=\"chem\">Na2CO3</span>, needed to prepare 250.0 cm<sup>3</sup> of a 0.1000 mol dm<sup>−3</sup> solution.": "",

    // Concentration of solutions > worked example > p
    "Given: a concentration and a volume. Wanted: a mass. Route: solution → moles → mass.": "",

    // Concentration of solutions > worked example > maths line
    "<i>n</i> = <i>CV</i> &nbsp; then &nbsp; <i>m</i> = <i>n</i> × <i>M</i>": "",

    // Concentration of solutions > worked example > p
    "The concentration is per dm<sup>3</sup>, so the volume must match.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Find the amount needed": "",

    // Concentration of solutions > worked example > p
    "This is the amount of solute that must end up in the flask.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Convert moles to mass": "",

    // Concentration of solutions > worked example > p
    "A balance measures grams, not moles.": "",

    // Concentration of solutions > worked example > p
    "Standard-solution data are given to 4 significant figures, so the answer is too.": "",

    // Concentration of solutions > worked example > p
    "2.650 g of Na<sub>2</sub>CO<sub>3</sub>": "",

    // Concentration of solutions > p
    "Calculating the mass is half the job. You also need to be able to describe the procedure:": "",

    // Concentration of solutions > li
    "Weigh the solid accurately on a balance.": "",

    // Concentration of solutions > li
    "Dissolve it in a small volume of <strong>distilled</strong> (or deionized) water in a beaker, stirring until none is left.": "",

    // Concentration of solutions > li
    "Pour the solution through a funnel into the volumetric flask. Rinse the beaker, the stirring rod and the funnel with distilled water, and add the <strong>rinsings</strong> to the flask.": "",

    // Concentration of solutions > li
    "Add distilled water until the bottom of the meniscus sits on the <strong>mark</strong>. Add the last drops with a dropping pipette.": "",

    // Concentration of solutions > li
    "Stopper the flask and <strong>invert</strong> it several times to mix.": "",

    // Concentration of solutions > exam tip (shown in English + translation) > p
    "Markschemes reward specific words: <strong>volumetric flask</strong>, <strong>distilled or deionized water</strong>, transfer <strong>with rinsings</strong>, <strong>make up to the mark</strong>, <strong>stopper and invert to mix</strong>. Writing only “water” can lose a mark. “Add 250 cm<sup>3</sup> of water” is wrong chemistry: the flask is filled <em>up to</em> the mark, so the solution, not the water, is 250.0 cm<sup>3</sup>.": "",

    // Concentration of solutions > try it > p
    "Calculate the mass of hydrated copper(II) sulfate, <span class=\"chem\">CuSO4.5H2O</span>, needed to prepare 100.0 cm<sup>3</sup> of a 0.200 mol dm<sup>−3</sup> solution. (<i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>)": "",

    // Concentration of solutions > try it > li
    "Route: solution → moles → mass. Start by converting 100.0 cm<sup>3</sup> to dm<sup>3</sup>.": "",

    // Concentration of solutions > try it > li
    "<i>n</i> = 0.200 × 0.1000 = 0.0200 mol. Then <i>m</i> = <i>n</i> × <i>M</i>, using the molar mass of the hydrate, because that is the solid you weigh.": "",

    // Concentration of solutions > try it > p
    "To 3 significant figures (set by 0.200): <strong>4.99 g</strong>.": "",

    // Concentration of solutions > h3
    "Dilution": "",

    // Concentration of solutions > p
    "Adding water to squash makes it weaker, but the syrup is all still there. <dfn data-def=\"Lowering the concentration of a solution by adding more solvent. The amount of solute does not change.\">Dilution</dfn> lowers the concentration by adding solvent. The amount of solute does not change.": "",

    // Concentration of solutions > data-def attribute
    "Lowering the concentration of a solution by adding more solvent. The amount of solute does not change.": "",

    // Concentration of solutions > p
    "Amount before = amount after. Since <i>n</i> = <i>CV</i>, that gives the dilution relationship.": "",

    // Concentration of solutions > equation > dd
    "concentration of the stock solution <span class=\"unit\">mol dm-3</span>": "",

    // Concentration of solutions > equation > dd
    "volume of stock solution taken <span class=\"unit\">cm3</span>": "",

    // Concentration of solutions > equation > dd
    "concentration after dilution <span class=\"unit\">mol dm-3</span>": "",

    // Concentration of solutions > equation > dd
    "final total volume <span class=\"unit\">cm3</span>": "",

    // Concentration of solutions > p
    "This relationship is not in the data booklet, so learn where it comes from. The two volumes may both be in cm<sup>3</sup> or both in dm<sup>3</sup>, as long as they match. The <dfn data-def=\"How many times a solution has been diluted: final volume divided by the volume of stock taken.\">dilution factor</dfn> is <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>. A “10 times” dilution divides the concentration by 10.": "",

    // Concentration of solutions > data-def attribute
    "How many times a solution has been diluted: final volume divided by the volume of stock taken.": "",

    // Concentration of solutions > worked example > h3
    "Volume of stock solution for a dilution": "",

    // Concentration of solutions > worked example > p
    "What volume of 2.00 mol dm<sup>−3</sup> hydrochloric acid is needed to prepare 250.0 cm<sup>3</sup> of 0.100 mol dm<sup>−3</sup> hydrochloric acid?": "",

    // Concentration of solutions > worked example > data-title attribute
    "Label the four quantities": "",

    // Concentration of solutions > worked example > p
    "“1” is the stock solution you start with. “2” is the diluted solution you end with. The unknown is <i>V</i><sub>1</sub>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Rearrange for the unknown": "",

    // Concentration of solutions > worked example > p
    "The amount of HCl is the same before and after: <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>.": "",

    // Concentration of solutions > worked example > p
    "The concentration units cancel, so <i>V</i><sub>1</sub> comes out in the same unit as <i>V</i><sub>2</sub>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Check with the dilution factor": "",

    // Concentration of solutions > worked example > data-label attribute
    // Avogadro’s law and reacting gas volumes > worked example > data-label attribute
    "Check": "",

    // Concentration of solutions > worked example > p
    "The concentration falls 20 times (2.00 ÷ 0.100), so the volume must grow 20 times.": "",

    // Concentration of solutions > worked example > p
    "12.5 cm<sup>3</sup> of the 2.00 mol dm<sup>−3</sup> acid": "",

    // Concentration of solutions > p
    "You also need to describe the procedure. Markschemes look for these points:": "",

    // Concentration of solutions > li
    "Use a <strong>pipette</strong> (or a burette) to measure the stock solution. A measuring cylinder is not precise enough.": "",

    // Concentration of solutions > li
    "Run it into a <strong>volumetric flask</strong> of the right size, here 250.0 cm<sup>3</sup>.": "",

    // Concentration of solutions > li
    "Add <strong>distilled water</strong> up to the <strong>mark</strong>.": "",

    // Concentration of solutions > li
    "Stopper and invert several times to <strong>mix</strong>.": "",

    // Concentration of solutions > common mistake > p
    "“Add 237.5 cm<sup>3</sup> of water” is not the right description. <i>V</i><sub>2</sub> is the <em>total</em> final volume, and volumes do not always add exactly. The correct instruction is to make the solution up to the mark.": "",

    // Concentration of solutions > p
    "A <dfn data-def=\"A series of dilutions in which each new solution is made by diluting the one before it by the same factor.\">serial dilution</dfn> repeats the same step. Dilute a 1.00 mol dm<sup>−3</sup> stock 10 times to get 0.100 mol dm<sup>−3</sup>. Dilute that 10 times to get 0.0100 mol dm<sup>−3</sup>, and so on. It reaches very low concentrations without measuring tiny volumes.": "",

    // Concentration of solutions > data-def attribute
    "A series of dilutions in which each new solution is made by diluting the one before it by the same factor.": "",

    // Concentration of solutions > try it > p
    "10.0 cm<sup>3</sup> of a 0.500 mol dm<sup>−3</sup> solution is pipetted into a 250.0 cm<sup>3</sup> volumetric flask and made up to the mark with distilled water. Calculate the concentration of the diluted solution.": "",

    // Concentration of solutions > try it > li
    "Which values are <i>C</i><sub>1</sub>, <i>V</i><sub>1</sub> and <i>V</i><sub>2</sub>? The unknown is <i>C</i><sub>2</sub>. It must be smaller than 0.500.": "",

    // Concentration of solutions > try it > p
    "<strong>0.0200 mol dm<sup>−3</sup></strong>. The dilution factor is 250.0 ÷ 10.0 = 25, and 0.500 ÷ 25 = 0.0200.": "",

    // Concentration of solutions > h3
    "Finding a concentration with a calibration curve": "",

    // Concentration of solutions > p
    "Some solutions are coloured, and the more concentrated they are, the more light they absorb. A <dfn data-def=\"An instrument that measures how much light of a chosen colour a solution absorbs.\">colorimeter</dfn> or spectrophotometer measures this as a number called absorbance. That gives a quick way to find an unknown concentration.": "",

    // Concentration of solutions > data-def attribute
    "An instrument that measures how much light of a chosen colour a solution absorbs.": "",

    // Concentration of solutions > li
    "Make several standard solutions of known concentration, usually by diluting one stock solution.": "",

    // Concentration of solutions > li
    "Measure the absorbance of each one.": "",

    // Concentration of solutions > li
    "Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. This graph is the <dfn data-def=\"A graph of an instrument reading against known concentrations, used to read off an unknown concentration.\">calibration curve</dfn>.": "",

    // Concentration of solutions > data-def attribute
    "A graph of an instrument reading against known concentrations, used to read off an unknown concentration.": "",

    // Concentration of solutions > li
    "Measure the absorbance of the unknown solution and read its concentration from the line.": "",

    // Concentration of solutions > widget > data-title attribute
    "Reading a calibration curve": "",

    // Concentration of solutions > widget > figcaption
    "The crosses are six standard solutions (example data, not a real experiment). Move the slider to set the absorbance of an unknown. Read across to the line, then down to the axis. The unknown must lie inside the range of the standards.": "",

    // Concentration of solutions > not needed for IB > p
    "You do not need the Beer–Lambert law or any equation for absorbance. You only need the idea: known standards, a graph, a line of best fit, and reading the unknown from it. Concentration units such as ppm, molality, percentage by mass and mole fraction are not in the IB guide. Use <span class=\"unit\">mol dm-3</span> and <span class=\"unit\">g dm-3</span>.": "",

    // Concentration of solutions > not needed for IB > p
    "Titration calculations, where a solution of known concentration is used to find another through a reaction, belong to Reactivity 2.1 and Reactivity 3.1. They combine <i>n</i> = <i>CV</i> from this section with the mole ratio of an equation.": "",

    // Concentration of solutions > data-title attribute
    "Standard solutions, dilution and calibration: quick check": "",

    // Avogadro’s law and reacting gas volumes > data-toc attribute
    // Avogadro’s law and reacting gas volumes > key idea > data-title attribute
    "Avogadro’s law": "",

    // Avogadro’s law and reacting gas volumes > h2
    "Avogadro’s law and reacting gas volumes": "",

    // Avogadro’s law and reacting gas volumes > p
    "In a gas, the particles are far apart. Almost all of the volume is empty space, so the size of the particles themselves hardly matters. A balloon of hydrogen and a balloon of carbon dioxide of the same size, at the same temperature and pressure, hold the same number of molecules, even though the carbon dioxide molecules are much heavier.": "",

    // Avogadro’s law and reacting gas volumes > key idea > p
    "Equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules.": "",

    // Avogadro’s law and reacting gas volumes > p
    "Equal numbers of molecules means equal amounts in moles. So for gases at the same temperature and pressure, volume is directly proportional to amount. Double the moles, double the volume.": "",

    // Avogadro’s law and reacting gas volumes > p
    "This has a very useful result. In a balanced equation, the coefficients give the mole ratio. For gases, the same coefficients also give the <strong>volume ratio</strong>. You can work in volumes and never calculate a single mole.": "",

    // Avogadro’s law and reacting gas volumes > widget > data-title attribute
    "Reacting gas volumes": "",

    // Avogadro’s law and reacting gas volumes > widget > figcaption
    "Pick a reaction, choose one gas and set its volume. The other volumes follow from the coefficients. Box heights are in proportion to the volumes. This is a model: each dot stands for the same very large number of molecules, and every box has the same number of dots per unit area, as Avogadro’s law says.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Write the balanced equation with state symbols. Only substances marked (g) take part in the volume ratio.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Check that all volumes are measured at the same temperature and pressure.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Find the coefficient of the gas you know and of the gas you want.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Volume wanted = volume known × (coefficient wanted ÷ coefficient known).": "",

    // Avogadro’s law and reacting gas volumes > li
    "Keep the same volume unit throughout. There is no need to convert cm<sup>3</sup> to dm<sup>3</sup>, because it is a ratio.": "",

    // Avogadro’s law and reacting gas volumes > worked example > h3
    "Volumes of reacting gases": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Propane burns completely in oxygen:": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "<span class=\"chem\">C3H8(g) + 5O2(g) -&gt; 3CO2(g) + 4H2O(l)</span>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "25.0 cm<sup>3</sup> of propane is burned. All volumes are measured at the same temperature and pressure. Calculate the volume of oxygen needed and the volume of carbon dioxide formed.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Read the mole ratio": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The coefficients tell you how many moles react. An unwritten coefficient is 1.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Use Avogadro’s law": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Same temperature and pressure, so the volume ratio of the gases equals the mole ratio.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "volume ratio = 1 : 5 : 3": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Scale to the volume given": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Multiply by coefficient wanted ÷ coefficient known. The coefficients are exact, so the answers keep 3 significant figures.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Check the state symbols": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The water is a liquid, (l). It is not a gas, so it adds nothing to the gas volume.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "gas before: 25.0 + 125 = 150 cm<sup>3</sup> &nbsp; gas after: 75.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "125 cm<sup>3</sup> of O<sub>2</sub> is needed and 75.0 cm<sup>3</sup> of CO<sub>2</sub> forms": "",

    // Avogadro’s law and reacting gas volumes > common mistake > p
    "Volumes of gases are not conserved in a reaction. In the example, 150 cm<sup>3</sup> of gas becomes 75.0 cm<sup>3</sup>. Mass is conserved and atoms are conserved, but the number of gas molecules can change. Also watch for <span class=\"chem\">H2O(l)</span>: counting liquid water as a gas volume is a common wrong answer.": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Carbon monoxide burns in oxygen: <span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>. What volume of oxygen is needed to react completely with 150 cm<sup>3</sup> of carbon monoxide, at the same temperature and pressure? Give your answer to 3 significant figures.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "What is the mole ratio of CO to O<sub>2</sub> in the equation? The volume ratio is the same.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "CO : O<sub>2</sub> = 2 : 1, so <i>V</i>(O<sub>2</sub>) = 150 × (1 ÷ 2).": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "<strong>75.0 cm<sup>3</sup></strong> of oxygen.": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Ammonia is made from nitrogen and hydrogen: <span class=\"chem\">N2(g) + 3H2(g) -&gt; 2NH3(g)</span>. What volume of ammonia forms when 45.0 cm<sup>3</sup> of hydrogen reacts completely, at the same temperature and pressure?": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "Find the coefficients of the gas you know (H<sub>2</sub>) and the gas you want (NH<sub>3</sub>).": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "H<sub>2</sub> : NH<sub>3</sub> = 3 : 2, so <i>V</i>(NH<sub>3</sub>) = 45.0 × (2 ÷ 3).": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "<strong>30.0 cm<sup>3</sup></strong> of ammonia. It also needs 45.0 ÷ 3 = 15.0 cm<sup>3</sup> of nitrogen.": "",

    // Avogadro’s law and reacting gas volumes > h3
    "When one gas is in excess": "",

    // Avogadro’s law and reacting gas volumes > p
    "Sometimes more of one gas is supplied than the reaction needs. The question then says that gas is “in <dfn data-def=\"More than the amount needed to react. Some of it is left over at the end.\">excess</dfn>”. Some of it is left over at the end, mixed with the gases that were made.": "",

    // Avogadro’s law and reacting gas volumes > data-def attribute
    "More than the amount needed to react. Some of it is left over at the end.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Use the volume ratio to find how much of the excess gas <em>reacts</em>.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Gas left over = volume supplied − volume that reacted.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Gas at the end = gas left over + gaseous products. Leave out anything marked (l) or (s).": "",

    // Avogadro’s law and reacting gas volumes > worked example > h3
    "Gas left at the end": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "10.0 cm<sup>3</sup> of methane is burned in 50.0 cm<sup>3</sup> of oxygen, which is an excess:": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "<span class=\"chem\">CH4(g) + 2O2(g) -&gt; CO2(g) + 2H2O(l)</span>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "All volumes are measured at the same temperature and pressure. Calculate the total volume of gas at the end.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the oxygen that reacts": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "All the methane burns, because oxygen is in excess. The ratio CH<sub>4</sub> : O<sub>2</sub> is 1 : 2.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "<i>V</i>(O<sub>2</sub> reacting) = 10.0 cm<sup>3</sup> × <span class=\"frac\"><span>2</span><span>1</span></span> = 20.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the oxygen left over": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "What was supplied, minus what was used.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    // Avogadro’s law and reacting gas volumes > try it > maths line
    "<i>V</i>(O<sub>2</sub> left) = 50.0 cm<sup>3</sup> − 20.0 cm<sup>3</sup> = 30.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the gas made": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The ratio CH<sub>4</sub> : CO<sub>2</sub> is 1 : 1. The water is a liquid, so it is not counted.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Add the gases present at the end": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The container now holds the oxygen left over and the carbon dioxide made.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "<i>V</i>(total) = 30.0 cm<sup>3</sup> + 10.0 cm<sup>3</sup> = <b>40.0 cm<sup>3</sup></b>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "40.0 cm<sup>3</sup> of gas: 30.0 cm<sup>3</sup> of O<sub>2</sub> and 10.0 cm<sup>3</sup> of CO<sub>2</sub>": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "40.0 cm<sup>3</sup> of carbon monoxide is burned in 50.0 cm<sup>3</sup> of oxygen, which is an excess: <span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>. Calculate the total volume of gas at the end, at the same temperature and pressure.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "Two gases are present at the end: the oxygen left over and the carbon dioxide made. Find each one.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "O<sub>2</sub> reacting = 40.0 × (1 ÷ 2) = 20.0 cm<sup>3</sup>, so 30.0 cm<sup>3</sup> is left. CO<sub>2</sub> made = 40.0 × (2 ÷ 2).": "",

    // Avogadro’s law and reacting gas volumes > try it > maths line
    "<i>V</i>(O<sub>2</sub> reacting) = 40.0 cm<sup>3</sup> × <span class=\"frac\"><span>1</span><span>2</span></span> = 20.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Total: 30.0 + 40.0 = <strong>70.0 cm<sup>3</sup></strong>.": "",

    // Avogadro’s law and reacting gas volumes > exam tip (shown in English + translation) > p
    "If you are asked to state Avogadro’s law, include all three parts: equal volumes of gases, same temperature and pressure, equal numbers of molecules. In a calculation, write “volume ratio = mole ratio” before you use the coefficients.": "",

    // Avogadro’s law and reacting gas volumes > not needed for IB > p
    "The molar volume of a gas (22.7 dm<sup>3</sup> mol<sup>−1</sup> at STP) and <i>PV</i> = <i>nRT</i> are in topic 1.5. In this topic, the question tells you which gas is in excess. Working out for yourself which reactant runs out first (the limiting reactant) is taught in Reactivity 2.1.": "",

    // Avogadro’s law and reacting gas volumes > data-title attribute
    "Avogadro’s law: quick check": "",

    // Where this topic stops > data-toc attribute
    "What is not in 1.4": "",

    // Where this topic stops > h2
    "Where this topic stops": "",

    // Where this topic stops > p
    "Textbooks and online tutors often pile extra material onto the mole. This table shows what is in Structure 1.4, what comes later in the course, and what you can leave alone.": "",

    // Where this topic stops > table > caption
    "In, later, or not needed": "",

    // Where this topic stops > table > th
    "Idea": "",

    // Where this topic stops > table > th
    "Status": "",

    // Where this topic stops > table > th
    "Moles ⇄ particles, mass, concentration": "",

    // Where this topic stops > table > td
    "In this topic (1.4.1, 1.4.3, 1.4.5)": "",

    // Where this topic stops > table > th
    "Empirical and molecular formulas, including combustion data": "",

    // Where this topic stops > table > td
    "In this topic (1.4.4)": "",

    // Where this topic stops > table > th
    "Standard solutions, dilution, calibration curves": "",

    // Where this topic stops > table > td
    "In this topic (1.4.5)": "",

    // Where this topic stops > table > th
    "Gas volume ratios from an equation, including a gas you are told is in excess": "",

    // Where this topic stops > table > td
    "In this topic (1.4.6)": "",

    // Where this topic stops > table > th
    "Reacting masses from an equation": "",

    // Where this topic stops > table > td
    "Later: Reactivity 2.1": "",

    // Where this topic stops > table > th
    "Finding the limiting reactant, percentage yield, atom economy": "",

    // Where this topic stops > table > th
    "Percentage uncertainty of a concentration you have made": "",

    // Where this topic stops > table > td
    "Later: the uncertainty skills in Tool 3": "",

    // Where this topic stops > table > th
    "Titration calculations": "",

    // Where this topic stops > table > td
    "Later: Reactivity 2.1 and 3.1": "",

    // Where this topic stops > table > th
    "Molar volume at STP, <i>PV</i> = <i>nRT</i>": "",

    // Where this topic stops > table > td
    "Next topic: Structure 1.5": "",

    // Where this topic stops > table > th
    "ppm, molality, percentage by mass as a concentration, mole fraction": "",

    // Where this topic stops > table > td
    "Not in the IB guide": "",

    // Where this topic stops > table > th
    "Old values: 22.4 dm<sup>3</sup> mol<sup>−1</sup>, “24 dm<sup>3</sup> at room temperature”": "",

    // Where this topic stops > table > td
    "Not used. The data booklet gives 22.7 dm<sup>3</sup> mol<sup>−1</sup> at STP": "",

    // Linking it up > data-toc attribute
    // Linking it up > h2
    "Linking it up": "",

    // Linking it up > p
    "The guide lists linking questions that connect this topic to others. Here are short answers to four of them.": "",

    // Linking it up > h3
    "How can molar masses be used with chemical equations to determine the masses of the products of a reaction?": "",

    // Linking it up > p
    "An equation gives a ratio in moles, but a balance measures grams. So you convert the mass of a reactant to moles with its molar mass, use the mole ratio from the equation, then convert the moles of product back to a mass with the product’s molar mass. The two outer steps are from this topic. The full method is taught in Reactivity 2.1.": "",

    // Linking it up > h3
    "What is the importance of approximation in the determination of an empirical formula?": "",

    // Linking it up > p
    "Measured masses always carry some error, so the mole ratio never comes out as perfect whole numbers. You have to judge when 2.99 means 3. You also have to judge when a value is <em>not</em> an error: 1.50 or 1.33 are real ratios that must be multiplied up, not rounded. Good approximation means rounding small differences and respecting large ones.": "",

    // Linking it up > h3
    "What are the considerations in the choice of glassware used in preparing a standard solution and a serial dilution?": "",

    // Linking it up > p
    "The concentration is only as accurate as the volumes. A volumetric flask and a pipette are each made to deliver one volume very precisely, so they are used for the final volume and for the portion of stock solution. A beaker or measuring cylinder has a much larger uncertainty and is only used for rough work, such as dissolving the solid. In a serial dilution, any error in one step is carried into every later step, which makes precise glassware even more important.": "",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most from an ideal gas?": "",

    // Linking it up > p
    "At low temperature and high pressure. Then the particles are close together and moving slowly, so the forces between them and the space the particles take up are no longer negligible. Topic 1.5 explains this.": "",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "",

    // Exam-style practice > p
    "Work through the three levels in order. Use the three questions on every calculation, and write your working on paper before you type an answer. Each set draws questions you have not yet answered correctly first.": "",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "",

    // Exam-style practice > data-title attribute
    "1.4 foundation": "",

    // Exam-style practice > h3
    "Exam standard": "",

    // Exam-style practice > data-title attribute
    "1.4 exam standard": "",

    // Exam-style practice > h3
    "Challenge: level 7 stretch": "",

    // Exam-style practice > data-title attribute
    "1.4 challenge": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Leave the charge off, or write it with ^ as in SO4^2-. A charge does not change the molar mass.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a formula, for example H2O or Ca(OH)2.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Use capital letters for element symbols: write H2O, not h2o.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "There is a closing bracket with no opening bracket.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Check the capital letters near “{ch}”. Each symbol starts with one capital letter.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "I cannot read “{ch}” in a formula.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling and the capital letters.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A bracket is not closed.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Something is missing after the dot.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution volumes are usually given in cm<sup>3</sup>. <i>n</i> = <i>CV</i> needs dm<sup>3</sup>. The gas equation in topic 1.5 needs m<sup>3</sup>. Going to a bigger unit makes the number smaller, so you divide.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "<i>n</i> = <i>m</i> ÷ <i>M</i> needs the mass in g, because <i>M</i> is in g mol<sup>−1</sup>. Going to a bigger unit makes the number smaller, so you divide.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Unit": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a number, for example 25.0.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "carbon dioxide": "",

    // widget string (assets/js/widgets-s1-4.js)
    "copper": "",

    // widget string (assets/js/widgets-s1-4.js)
    "iron": "",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium chloride": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Substance": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{name} ({formula})": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of sample": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Number line on a powers-of-ten scale from 1 to 10 to the power 24, marking the number of people on Earth, the number of seconds since the Big Bang, one mole, and the number of particles in your sample": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Particles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Inside them": "",

    // widget string (assets/js/widgets-s1-4.js)
    "people on Earth": "",

    // widget string (assets/js/widgets-s1-4.js)
    "about {n}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "seconds since the Big Bang": "",

    // widget string (assets/js/widgets-s1-4.js)
    "one mole": "",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of molecules": "",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of formula units": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Each big tick is 1000 times the one before.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} molecules": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} formula units": "",

    // widget string (assets/js/widgets-s1-4.js)
    "each particle is one atom": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{per} ions each: {N} ions": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{per} atoms each: {N} atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Counting one particle every second, one mole would take about {years} years. That is over a million times the age of the universe (about {age} years).": "",

    // widget string (assets/js/widgets-s1-4.js)
    "If all 8 billion people counted together at that speed, it would still take about {n} million years.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Yet one mole of water molecules is only {m} g of water: about {v} cm<sup>3</sup>, a little more than a tablespoon.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Formula": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Or load an example": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Build the formula with buttons": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dot for water of crystallization": "",

    // widget string (assets/js/widgets-s1-4.js)
    "open bracket": "",

    // widget string (assets/js/widgets-s1-4.js)
    "close bracket": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Delete": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Clear": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Atoms in one formula unit": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Breakdown of {formula}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Element": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Subtotal": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Total": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{value} <span class=\"mole-unitnote\">(no units)</span>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass (g)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount (mol)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount / mol": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Number of particles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution: concentration and volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration / mol dm<sup>−3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume at STP (dm³)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume at STP / dm<sup>3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration (mol dm⁻³)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "I am given": "",

    // widget string (assets/js/widgets-s1-4.js)
    "I want": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume of solution / cm<sup>3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume of solution made / cm<sup>3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Substance (formula)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The mole map: amount in moles in the centre, linked to mass, number of particles, solution concentration and volume, and gas volume at STP": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass, m": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Particles, N": "",

    // widget string (assets/js/widgets-s1-4.js)
    "a number": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount, n": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution, C and V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume, V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dm³, at STP only": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to mol: C × V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to C: n ÷ V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to mol: ÷ 22.7": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to dm³: × 22.7": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Path": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Answer": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "amount": "",

    // widget string (assets/js/widgets-s1-4.js)
    "number of particles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "gas volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "GIVEN": "",

    // widget string (assets/js/widgets-s1-4.js)
    "WANTED": "",

    // widget string (assets/js/widgets-s1-4.js)
    "via moles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A solution to a concentration is one step: <i>C</i> = <i>n</i> ÷ <i>V</i>. Pick a different quantity to convert to.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Pick two different quantities.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive number for the quantity you are given. You can write 1.5e22 or 1.5 × 10^22.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{error} The molar mass is needed whenever mass is involved.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the volume of the solution in cm<sup>3</sup>.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "({sf} s.f.)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "That is the number of molecules or formula units of {formula}. Each one contains {atoms} atoms, so the number of atoms is {atoms} × {N} = {total}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "For an element written as a single atom, such as {formula}, the particles are atoms.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the volume of solution made, in cm<sup>3</sup>.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "As a mass concentration of {formula}: {C} × {M} = {G}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> is the molar volume of an ideal gas at STP (273.15 K and 100 kPa) from the data booklet. It works only for gases, only at STP. Topic 1.5 covers it.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The formula is not needed for this conversion. Molar mass only matters when mass is involved.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The answer is rounded to {sf} significant figures to match the value you typed. The working keeps extra digits until the end.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "concentration": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{from} → {to} (one step)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{from} → amount → {to} (two steps)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g gives {c} g CO₂ and {h} g H₂O": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g gives {c} g CO₂ and {h} g H₂O (a hydrocarbon)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .5). Do not round it. Multiply every ratio by 2 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .33 or .67). Do not round it. Multiply every ratio by 3 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .25 or .75). Do not round it. Multiply every ratio by 4 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .2, .4, .6 or .8). Do not round it. Multiply every ratio by 5 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .17 or .83). Do not round it. Multiply every ratio by 6 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type of data": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Masses or percentages": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Combustion analysis": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Values are": "",

    // widget string (assets/js/widgets-s1-4.js)
    "percentages by mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "masses in g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Load an example": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Elements and their values": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Element {n}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Value {n}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Combustion data": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of compound / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of CO<sub>2</sub> formed / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of H<sub>2</sub>O formed / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Molar mass, if known / g mol<sup>−1</sup> (optional)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Empirical formula mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive percentage for {sym}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive mass for {sym}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{sym} appears twice. Give each element one row.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Enter at least two elements.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "% by mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Your percentages add up to {sum} %, not 100 %. If one element (often oxygen) is not given, find it by difference: 100 − the others.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Percentages: imagine 100 g of the compound. Then {p} % means {p} g.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the three masses in grams.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of C = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of H = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The carbon and hydrogen add up to more than the sample mass. Check the three masses.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of O = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of O = {calc}, which is zero within rounding": "",

    // widget string (assets/js/widgets-s1-4.js)
    "All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Oxygen cannot be found this way because extra oxygen came from the air, so it is found by difference.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Here they account for the whole sample, so there is no oxygen: the compound is a hydrocarbon.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "÷ smallest": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Whole number": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The table method": "",

    // widget string (assets/js/widgets-s1-4.js)
    "These ratios are not close to whole numbers, even after multiplying by 2, 3, 4, 5 or 6. Check the data, and check that no element is missing.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Some ratios are a little away from whole numbers. Experimental data are never exact, so values within about 0.1 are rounded.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "empirical formula = {formula}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "empirical formula mass = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "<i>M</i> ÷ empirical formula mass = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "molecular formula = the empirical formula = {formula}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "molecular formula = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "That is not close to a whole number, so this molar mass does not fit this empirical formula. Check both.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "needs the molar mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "the mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "hydrated copper(II) sulfate": "",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium carbonate": "",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium hydroxide": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Task": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Make a standard solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dilute a stock solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Stock concentration, C₁": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume taken by pipette, V₁": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask, V₂": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask filled to the graduation mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount of solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Molar concentration": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass concentration": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g of solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "weighed on a balance": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dissolve,": "",

    // widget string (assets/js/widgets-s1-4.js)
    "make up": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to the mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{v} cm³ flask": "",

    // widget string (assets/js/widgets-s1-4.js)
    "blue solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "colourless solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A balance with {m} g of {name} and a {v} cm3 volumetric flask filled to the graduation mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass concentration = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The solid weighed is the hydrate, so its molar mass includes the five waters. One mole of the hydrate gives one mole of CuSO<sub>4</sub> in solution. Check: {C} × {M} = {G}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Check: {C} × {M} = {G}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{G} <span class=\"mole-unitnote\">(of hydrate)</span>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "stock solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "pipette": "",

    // widget string (assets/js/widgets-s1-4.js)
    "add water": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A beaker of stock solution, and a {v} cm3 volumetric flask holding the paler diluted solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dilution factor = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The amount of solute does not change: {n} mol leaves the pipette and {n} mol is in the flask. Only the volume changes. The volumes can stay in cm<sup>3</sup> here because the same unit is on both sides.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "diluted {factor} times": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Absorbance of the unknown": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Calibration curve: absorbance against concentration for six standard solutions, with a straight line of best fit": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Absorbance measured": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration read from the line": "",

    // widget string (assets/js/widgets-s1-4.js)
    "concentration / mol dm⁻³": "",

    // widget string (assets/js/widgets-s1-4.js)
    "absorbance": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Reaction": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas whose volume you set": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Its volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Boxes of gas whose heights are in proportion to the reacting volumes": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume ratio of the gases": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas before": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas after": "",

    // widget string (assets/js/widgets-s1-4.js)
    "liquid:": "",

    // widget string (assets/js/widgets-s1-4.js)
    "not a gas": "",

    // widget string (assets/js/widgets-s1-4.js)
    "you set this": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Same temperature and pressure, so the volume ratio of the gases equals the mole ratio in the equation. Multiply by (coefficient wanted ÷ coefficient given).": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The water is a liquid here. Its volume is tiny compared with the gases, and Avogadro’s law applies to gases only, so it is left out of the gas volumes.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Total gas volume: {before} of reactants becomes {after} of product. Here the total stays the same, because the equation has the same number of gas molecules on each side. That is not true for most reactions.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Total gas volume: {before} of reactants becomes {after} of product. Volume is not conserved, because the number of gas molecules changes. Mass is conserved.": "",

  }
});
