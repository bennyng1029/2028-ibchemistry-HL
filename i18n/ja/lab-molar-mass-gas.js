/* lab-molar-mass-gas — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-molar-mass-gas', {
  strings: {

    // page title (browser tab)
    "Lab 8 Molar volume and the molar mass of a gas | Structure Lab": "実験 8 モル体積と気体のモル質量 | Structure Lab",

    // Molar volume and the molar mass of a gas > page header > p
    "Lab 8 · Structure 1.5 and 1.4": "実験 8 · Structure 1.5・1.4",

    // Molar volume and the molar mass of a gas > page header > h1
    "Molar volume and the molar mass of a gas": "モル体積と気体のモル質量",

    // Molar volume and the molar mass of a gas > page header > span
    "How can a mass, a volume, a temperature and a pressure be combined, through the ideal gas equation, to give the molar mass of a gas?": "質量・体積・温度・圧力を、理想気体の状態方程式でどのように組み合わせれば、気体のモル質量が求められるのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "These are practical skills. Tick each one when you can do it on your own.": "これらは実験のスキルです。自分の力でできるようになったら、1 つずつチェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Convert cm<sup>3</sup> to m<sup>3</sup>, kPa to Pa and °C to K before using <i>PV</i> = <i>nRT</i>.": "<i>PV</i> = <i>nRT</i> を使う前に、cm<sup>3</sup> を m<sup>3</sup> に、kPa を Pa に、°C を K に換算する。",

    // What you need to be able to do > checklist > span
    "Find the molar volume of hydrogen at room conditions from magnesium and excess acid.": "マグネシウムと過剰の酸から、室内の条件での水素のモル体積を求める。",

    // What you need to be able to do > checklist > span
    "Convert a measured molar volume to STP and compare it with 22.7 dm<sup>3</sup> mol<sup>−1</sup>.": "測定したモル体積を STP に換算し、22.7 dm<sup>3</sup> mol<sup>−1</sup> とくらべる。",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a volatile liquid with <i>M</i> = <i>mRT</i> / <i>PV</i>.": "<i>M</i> = <i>mRT</i> / <i>PV</i> を使って、揮発性の液体のモル質量を計算する。",

    // What you need to be able to do > checklist > span
    "Find a molar volume or a molar mass from the gradient of a graph.": "グラフの傾きから、モル体積やモル質量を求める。",

    // What you need to be able to do > checklist > span
    "Propagate uncertainties through <i>M</i> = <i>mRT</i> / <i>PV</i> and compare them with the percentage error.": "<i>M</i> = <i>mRT</i> / <i>PV</i> を通して不確かさを伝え、それを百分率誤差とくらべる。",

    // What you need to be able to do > checklist > span
    "Explain whether a named error makes the result too high or too low, and suggest an improvement.": "ある誤差によって結果が高すぎるか低すぎるかを説明し、改善策を提案する。",

    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "The ideal gas equation links the amount of a gas to things you can measure: its pressure, volume and temperature. The amount also equals mass ÷ molar mass. Put the two together and you can find the molar mass of a gas from four measurements.": "理想気体の状態方程式は、気体の物質量を、測定できる量である圧力・体積・温度と結びつけます。物質量は、質量 ÷ モル質量 にも等しくなります。この 2 つを合わせると、4 つの測定から気体のモル質量を求めることができます。",

    // The chemistry behind it > equation > maths line
    "<i>PV</i> = <i>nRT</i> and <i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span>, so <i>M</i> = <span class=\"frac\"><span><i>mRT</i></span><span><i>PV</i></span></span>": "<i>PV</i> = <i>nRT</i> と <i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span> から、<i>M</i> = <span class=\"frac\"><span><i>mRT</i></span><span><i>PV</i></span></span>",

    // The chemistry behind it > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "モル質量 <span class=\"unit\">g mol-1</span>",

    // The chemistry behind it > equation > dd
    "mass of the gas <span class=\"unit\">g</span>": "気体の質量 <span class=\"unit\">g</span>",

    // The chemistry behind it > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "気体定数、8.31 <span class=\"unit\">J K-1 mol-1</span>",

    // The chemistry behind it > equation > dd
    "temperature <span class=\"unit\">K</span>": "温度 <span class=\"unit\">K</span>",

    // The chemistry behind it > equation > dd
    "pressure <span class=\"unit\">Pa</span>": "圧力 <span class=\"unit\">Pa</span>",

    // The chemistry behind it > equation > dd
    "volume <span class=\"unit\">m3</span>": "体積 <span class=\"unit\">m3</span>",

    // The chemistry behind it > p
    "The <dfn data-def=\"The volume occupied by one mole of a gas at a stated temperature and pressure.\">molar volume</dfn> is the volume of one mole of gas, <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i>. For an ideal gas it is the same for every gas at the same temperature and pressure. At STP (273.15 K, 100 kPa) it is 22.7 dm<sup>3</sup> mol<sup>−1</sup>. A laboratory is warmer than 0 °C, so the molar volume there is larger, about 24 to 25 dm<sup>3</sup> mol<sup>−1</sup>. Work it out from <i>RT</i> / <i>P</i>; it is not in the data booklet.": "<dfn data-def=\"決められた温度と圧力で、気体 1 mol が占める体積です。\">モル体積 <span class=\"en-term\">(molar volume)</span></dfn>は、気体 1 mol の体積で、<i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> です。理想気体では、温度と圧力が同じなら、どの気体でも同じになります。STP（273.15 K、100 kPa）では 22.7 dm<sup>3</sup> mol<sup>−1</sup> です（日本の教科書の 22.4 L/mol とは圧力が違います）。実験室は 0 °C より暖かいので、そこでのモル体積はもっと大きく、約 24〜25 dm<sup>3</sup> mol<sup>−1</sup> です。<i>RT</i> / <i>P</i> から求めましょう。データブックレットには載っていません。",

    // The chemistry behind it > data-def attribute
    "The volume occupied by one mole of a gas at a stated temperature and pressure.": "決められた温度と圧力で、気体 1 mol が占める体積です。",

    // The chemistry behind it > p
    "In Part A, magnesium reacts with excess hydrochloric acid. One mole of magnesium gives one mole of hydrogen:": "パート A では、マグネシウムが過剰の塩酸と反応します。マグネシウム 1 mol から水素 1 mol ができます。",

    // The chemistry behind it > p
    "<span class=\"chem\">Mg(s) + 2HCl(aq) -&gt; MgCl2(aq) + H2(g)</span>": "<span class=\"chem\">Mg(s) + 2HCl(aq) -&gt; MgCl2(aq) + H2(g)</span>",

    // The chemistry behind it > p
    "In Part B, a weighed sample of a liquid with a low boiling point is turned into vapour inside a heated gas syringe.": "パート B では、質量をはかった沸点の低い液体の試料を、加熱した気体用シリンジの中で蒸気にします。",

    // The chemistry behind it > p
    "More on the topic pages: <a href=\"../topics/s1-5.html#pvnrt\">the ideal gas equation</a>, <a href=\"../topics/s1-5.html#molar-mass\">molar mass of a gas</a>, <a href=\"../topics/s1-5.html#molar-volume\">molar volume at STP</a> and <a href=\"../topics/s1-4.html#avogadro\">Avogadro’s law</a>.": "トピックのページにくわしい説明があります：<a href=\"../topics/s1-5.html#pvnrt\">理想気体の状態方程式</a>、<a href=\"../topics/s1-5.html#molar-mass\">気体のモル質量</a>、<a href=\"../topics/s1-5.html#molar-volume\">STP でのモル体積</a>、<a href=\"../topics/s1-4.html#avogadro\">アボガドロの法則</a>。",

    // The chemistry behind it > table > caption
    "Unit traps in PV = nRT (R = 8.31 J K⁻¹ mol⁻¹)": "PV = nRT の単位の落とし穴（R = 8.31 J K⁻¹ mol⁻¹）",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "Quantity": "量",

    // The chemistry behind it > table > th
    "Measured in": "測定する単位",

    // The chemistry behind it > table > th
    "Convert to": "換算後の単位",

    // The chemistry behind it > table > th
    "How": "換算のしかた",

    // The chemistry behind it > table > th
    "volume": "体積",

    // The chemistry behind it > table > td
    "cm<sup>3</sup>": "cm<sup>3</sup>",

    // The chemistry behind it > table > td
    "× 10<sup>−6</sup> (divide by 1 000 000)": "× 10<sup>−6</sup>（1 000 000 で割る）",

    // The chemistry behind it > table > td
    "dm<sup>3</sup>": "dm<sup>3</sup>",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "pressure": "圧力",

    // The chemistry behind it > table > td
    "kPa": "kPa",

    // The chemistry behind it > table > td
    "Pa": "Pa",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "temperature": "温度",

    // The chemistry behind it > key idea > p
    "kPa with dm<sup>3</sup> also works, because 1 kPa × 1 dm<sup>3</sup> = 1 J. What never works is mixing them: kPa with m<sup>3</sup>, or Pa with cm<sup>3</sup>.": "1 kPa × 1 dm<sup>3</sup> = 1 J なので、kPa と dm<sup>3</sup> の組み合わせでもかまいません。決してうまくいかないのは、組み合わせを混ぜることです。kPa と m<sup>3</sup>、Pa と cm<sup>3</sup> などです。",

    // Aim, variables and safety > data-toc attribute
    "Aim, variables, safety": "目的・変数・安全",

    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> Part A: find the molar volume of hydrogen at room temperature and pressure, and compare it with the ideal gas value. Part B: find the molar mass of an unknown volatile liquid and identify it.": "<strong>目的</strong>　パート A：室温・大気圧での水素のモル体積を求め、理想気体の値とくらべる。パート B：未知の揮発性の液体のモル質量を求め、それが何かを特定する。",

    // Aim, variables and safety > table > caption
    "Variables": "変数",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    "Part A: magnesium and acid": "パート A：マグネシウムと酸",

    // Aim, variables and safety > table > th
    "Part B: volatile liquid": "パート B：揮発性の液体",

    // Aim, variables and safety > table > th
    "independent": "独立変数",

    // Aim, variables and safety > table > td
    "mass of magnesium": "マグネシウムの質量",

    // Aim, variables and safety > table > td
    "mass of liquid injected": "注入した液体の質量",

    // Aim, variables and safety > table > th
    "dependent": "従属変数",

    // Aim, variables and safety > table > td
    "volume of hydrogen": "水素の体積",

    // Aim, variables and safety > table > td
    "volume of vapour": "蒸気の体積",

    // Aim, variables and safety > table > th
    "controlled": "制御変数",

    // Aim, variables and safety > table > td
    "room temperature and pressure; acid in excess; the way the magnesium is added": "室温と大気圧、酸が過剰であること、マグネシウムの加え方",

    // Aim, variables and safety > table > td
    "temperature of the heating jacket; atmospheric pressure": "加熱ジャケットの温度、大気圧",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "Part A: magnesium ribbon and sandpaper, balance (±0.001 g), 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> hydrochloric acid, conical flask, small test tube to stand inside it, bung and delivery tube, 100 cm<sup>3</sup> gas syringe (±0.5 cm<sup>3</sup>), thermometer (±0.5 °C), barometer or digital pressure sensor (±0.1 kPa)": "パート A：マグネシウムリボンと紙やすり、電子てんびん（±0.001 g）、1.0 mol dm<sup>−3</sup> 塩酸 50 cm<sup>3</sup>、三角フラスコ、その中に立てる小さな試験管、ゴム栓と誘導管、100 cm<sup>3</sup> の気体用シリンジ（±0.5 cm<sup>3</sup>）、温度計（±0.5 °C）、気圧計またはデジタル圧力センサー（±0.1 kPa）",

    // Aim, variables and safety > li
    "Part B: 100 cm<sup>3</sup> gas syringe in an electric heating jacket (or a steam jacket), self-sealing rubber cap, 1 cm<sup>3</sup> hypodermic syringe, balance (±0.001 g), thermometer, barometer, the unknown liquid": "パート B：電気式の加熱ジャケット（または蒸気ジャケット）に入れた 100 cm<sup>3</sup> の気体用シリンジ、自己密閉式のゴムキャップ、1 cm<sup>3</sup> の注射針付きシリンジ、電子てんびん（±0.001 g）、温度計、気圧計、未知の液体",

    // Aim, variables and safety > p
    "Hydrogen is extremely flammable and forms explosive mixtures with air: no flames anywhere near Part A, and release the gas only into a well-ventilated room. Hydrochloric acid at 1.0 mol dm<sup>−3</sup> irritates the eyes and skin, so wear eye protection and rinse any splashes with plenty of water. The volatile liquids in Part B (such as propanone or hexane) are highly flammable and their vapours are harmful: use a fume cupboard, heat only with the electric or steam jacket, never a Bunsen burner. The heating jacket is hot enough to burn. Point the hypodermic needle away from people and put it in a sharps container after use.": "水素はとても燃えやすく、空気と混ざると爆発性の混合気体になります。パート A の近くでは火を使わないこと。気体は、換気のよい部屋でだけ放出しましょう。1.0 mol dm<sup>−3</sup> の塩酸は目や皮膚を刺激するので、保護めがねをかけ、はねたら多量の水で洗い流しましょう。パート B の揮発性の液体（プロパノン (propanone) やヘキサン (hexane) など）はとても燃えやすく、その蒸気は有害です。ドラフトを使い、加熱は電気式か蒸気のジャケットだけで行い、ガスバーナーは決して使ってはいけません。加熱ジャケットはやけどをするほど熱くなります。注射針は人に向けず、使ったあとは針の廃棄容器に入れましょう。",

    // Method > h2
    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Method": "方法",

    // Method > h3
    "Part A: molar volume of hydrogen": "パート A：水素のモル体積",

    // Method > li
    "Rub a length of magnesium ribbon with sandpaper until it is shiny. <em>Why:</em> the dull coating is magnesium oxide. It adds to the mass but gives no hydrogen.": "マグネシウムリボンを、つやが出るまで紙やすりでこすります。<em>理由：</em>くすんだ被膜は酸化マグネシウムです。質量は増えますが、水素は出しません。",

    // Method > li
    "Cut and weigh a piece of about 0.07 g. <em>Why:</em> at room conditions 0.1 g of magnesium gives about 100 cm<sup>3</sup> of hydrogen, which would fill the syringe.": "約 0.07 g の長さに切って、質量をはかります。<em>理由：</em>室内の条件では、マグネシウム 0.1 g から水素が約 100 cm<sup>3</sup> でき、シリンジがいっぱいになってしまいます。",

    // Method > li
    "Put 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> hydrochloric acid in the flask. Stand the magnesium in a small dry test tube inside the flask. <em>Why:</em> the acid is in large excess, so all the magnesium reacts.": "1.0 mol dm<sup>−3</sup> の塩酸 50 cm<sup>3</sup> をフラスコに入れます。乾いた小さな試験管にマグネシウムを入れ、フラスコの中に立てます。<em>理由：</em>酸が大過剰なので、マグネシウムがすべて反応します。",

    // Method > li
    "Fit the bung joined to the gas syringe and check that the syringe reads zero. Then tip the flask so the acid reaches the magnesium. <em>Why:</em> no hydrogen escapes before the apparatus is sealed.": "気体用シリンジにつないだゴム栓をはめ、シリンジの読みがゼロであることを確かめます。それから、フラスコを傾けて、酸をマグネシウムに触れさせます。<em>理由：</em>装置を密閉する前に水素が逃げないようにするためです。",

    // Method > li
    "When the fizzing stops, wait until the flask has cooled to room temperature, then read the volume. <em>Why:</em> the reaction gives out heat, and warm gas takes up more space.": "泡が出なくなったら、フラスコが室温まで冷えるのを待ってから体積を読みます。<em>理由：</em>反応で熱が出ます。温かい気体は体積が大きくなります。",

    // Method > li
    "Record the room temperature and the atmospheric pressure. Repeat with different masses of magnesium.": "室温と大気圧を記録します。マグネシウムの質量を変えてくり返します。",

    // Method > h3
    "Part B: molar mass of a volatile liquid": "パート B：揮発性の液体のモル質量",

    // Method > li
    "Heat the gas syringe in its jacket to a steady temperature at least 20 °C above the boiling point of the liquid. Let a few cm<sup>3</sup> of air warm up inside, and record this starting volume. <em>Why:</em> all the liquid must turn into vapour, and the vapour should be far from condensing.": "気体用シリンジをジャケットで加熱し、液体の沸点より少なくとも 20 °C 高い一定の温度にします。中で数 cm<sup>3</sup> の空気を温め、この最初の体積を記録します。<em>理由：</em>液体はすべて蒸気にならなければならず、蒸気は凝縮からほど遠い状態にあるべきだからです。",

    // Method > li
    "Draw about 0.15 cm<sup>3</sup> of the liquid into the hypodermic syringe and weigh it. <em>Why:</em> the vapour must not overfill the gas syringe.": "約 0.15 cm<sup>3</sup> の液体を注射針付きシリンジに吸い取り、質量をはかります。<em>理由：</em>蒸気で気体用シリンジがあふれてはいけないからです。",

    // Method > li
    "Push the needle through the self-sealing cap, inject the liquid, withdraw the needle and reweigh the hypodermic syringe at once. <em>Why:</em> the mass injected is the difference between the two weighings.": "針を自己密閉式のキャップに刺し、液体を注入し、針を抜いて、すぐに注射針付きシリンジの質量をはかり直します。<em>理由：</em>注入した質量は、2 回の質量の差だからです。",

    // Method > li
    "Wait until the plunger stops moving. Record the final volume and the jacket temperature. <em>Why:</em> the vapour must reach the jacket temperature.": "ピストンが止まるまで待ちます。最後の体積とジャケットの温度を記録します。<em>理由：</em>蒸気がジャケットの温度にならなければならないからです。",

    // Method > li
    "Record the atmospheric pressure. Repeat with different volumes of liquid at the same jacket temperature.": "大気圧を記録します。ジャケットの温度を同じにして、液体の体積を変えてくり返します。",

    // Method > key idea > p
    "Another common version uses butane from a gas lighter. Weigh the lighter, release the gas under water into an upturned measuring cylinder full of water, dry the lighter and weigh it again. The data are processed in exactly the same way.": "よく行われる別の方法では、ガスライターのブタンを使います。ライターの質量をはかり、水を満たして逆さにしたメスシリンダーの中に、水中で気体を放出します。ライターを乾かしてから、もう一度質量をはかります。データの処理はまったく同じです。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > p
    "These are simulated experiments. Every reading has a small random error, like a real one, and the apparatus has realistic precision. Some method choices add a systematic error on purpose. Try them, and see which way they push the result.": "これらはシミュレーションの実験です。本物と同じように、どの読みにも小さな偶然誤差があり、器具の精度も現実的です。方法の選択のいくつかは、わざと系統誤差を加えます。試してみて、それが結果をどちらにずらすかを見てみましょう。",

    // Run the experiment > widget > data-title attribute
    "Part A: magnesium and hydrochloric acid": "パート A：マグネシウムと塩酸",

    // Run the experiment > widget > data-kicker attribute
    "Virtual experiment": "バーチャル実験",

    // Run the experiment > widget > figcaption
    "Choose a mass of magnesium and run the reaction. Do at least three runs with different masses, using the careful method. Then change one method choice at a time and see how the molar volume changes. The table converts each run to a molar volume; the graph gives one from the gradient.": "マグネシウムの質量を選んで、反応させます。ていねいな方法で、質量を変えて少なくとも 3 回実行しましょう。次に、方法の選択を 1 つずつ変えて、モル体積がどう変わるかを見ます。表はそれぞれの実行をモル体積に換算し、グラフは傾きからモル体積を求めます。",

    // Run the experiment > widget > data-title attribute
    "Part B: vaporize a volatile liquid": "パート B：揮発性の液体を蒸発させる",

    // Run the experiment > widget > figcaption
    "Choose an unknown liquid, set the jacket temperature and inject. Use at least three different volumes at the same temperature, then work out the molar mass before you reveal the liquid. Try a jacket temperature close to, or below, the boiling point and see what happens.": "未知の液体を選び、ジャケットの温度を決めて注入します。同じ温度で少なくとも 3 つの違う体積を使い、液体を表示する前にモル質量を求めましょう。ジャケットの温度を沸点に近くしたり、沸点より低くしたりして、何が起こるかを見てみましょう。",

    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > worked example > h3
    "Molar volume of hydrogen": "水素のモル体積",

    // Processing the data > worked example > p
    "0.0742 g of magnesium reacts with excess hydrochloric acid. The hydrogen has a volume of 76.5 cm<sup>3</sup> at 23.0 °C and 100.6 kPa. Calculate the molar volume of hydrogen under these conditions, and convert it to STP.": "マグネシウム 0.0742 g が過剰の塩酸と反応します。水素の体積は、23.0 °C、100.6 kPa で 76.5 cm<sup>3</sup> です。この条件での水素のモル体積を計算し、STP に換算しなさい。",

    // Processing the data > worked example > data-title attribute
    "Amount of magnesium": "マグネシウムの物質量",

    // Processing the data > worked example > p
    "Use <i>A</i><sub>r</sub>(Mg) = 24.31 from the data booklet.": "データブックレットの <i>A</i><sub>r</sub>(Mg) = 24.31 を使います。",

    // Processing the data > worked example > data-title attribute
    "Amount of hydrogen": "水素の物質量",

    // Processing the data > worked example > p
    "The equation shows 1 mol of Mg gives 1 mol of H<sub>2</sub>.": "反応式から、Mg 1 mol から H<sub>2</sub> 1 mol ができることがわかります。",

    // Processing the data > worked example > data-title attribute
    "Molar volume at room conditions": "室内の条件でのモル体積",

    // Processing the data > worked example > p
    "Convert the volume to dm<sup>3</sup> to get the usual unit.": "ふつうの単位にするため、体積を dm<sup>3</sup> に直します。",

    // Processing the data > worked example > data-title attribute
    "Convert to STP": "STP に換算する",

    // Processing the data > worked example > p
    "Use the combined gas law, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> / <i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> / <i>T</i><sub>2</sub>, with temperatures in kelvin. STP is 100 kPa and 273.15 K.": "ボイル・シャルルの法則 <i>P</i><sub>1</sub><i>V</i><sub>1</sub> / <i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> / <i>T</i><sub>2</sub> を、ケルビンの温度で使います。STP は 100 kPa、273.15 K です。",

    // Processing the data > worked example > data-title attribute
    "Compare with the data booklet": "データブックレットとくらべる",

    // Processing the data > worked example > p
    "Percentage error = |experimental − literature| ÷ literature × 100.": "百分率誤差 = |実験値 − 文献値| ÷ 文献値 × 100。",

    // Processing the data > worked example > maths line
    "percentage error = (23.26 − 22.7) ÷ 22.7 × 100 = 2.4 %": "百分率誤差 = (23.26 − 22.7) ÷ 22.7 × 100 = 2.4 %",

    // Processing the data > worked example > p
    "25.1 dm<sup>3</sup> mol<sup>−1</sup> at 23.0 °C and 100.6 kPa, which is 23.3 dm<sup>3</sup> mol<sup>−1</sup> at STP: 2.4 % above 22.7 dm<sup>3</sup> mol<sup>−1</sup>.": "23.0 °C、100.6 kPa で 25.1 dm<sup>3</sup> mol<sup>−1</sup>、STP では 23.3 dm<sup>3</sup> mol<sup>−1</sup> です。22.7 dm<sup>3</sup> mol<sup>−1</sup> より 2.4 % 大きい値です。",

    // Processing the data > try it > p
    "0.0585 g of magnesium gives 59.0 cm<sup>3</sup> of hydrogen with excess acid. Calculate the molar volume of hydrogen under the conditions of the experiment, in dm<sup>3</sup> mol<sup>−1</sup>.": "マグネシウム 0.0585 g と過剰の酸から、水素が 59.0 cm<sup>3</sup> できます。この実験の条件での水素のモル体積を dm<sup>3</sup> mol<sup>−1</sup> で計算しなさい。",

    // Processing the data > try it > li
    "Find the amount of magnesium. It equals the amount of hydrogen.": "マグネシウムの物質量を求めます。それが水素の物質量に等しくなります。",

    // Processing the data > try it > li
    "<i>n</i> = 0.0585 ÷ 24.31. Then divide the volume in dm<sup>3</sup> by that amount.": "<i>n</i> = 0.0585 ÷ 24.31。それから、dm<sup>3</sup> で表した体積をその物質量で割ります。",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > h3
    "Molar mass of a volatile liquid": "揮発性の液体のモル質量",

    // Processing the data > worked example > p
    "A hypodermic syringe weighs 12.483 g before and 12.331 g after injecting a liquid into a gas syringe at 99.0 °C. The gas syringe reading rises from 4.5 cm<sup>3</sup> to 84.0 cm<sup>3</sup>. The atmospheric pressure is 101.0 kPa. Calculate the molar mass of the liquid.": "温度 99.0 °C の気体用シリンジに液体を注入すると、注射針付きシリンジの質量は、注入前 12.483 g、注入後 12.331 g でした。気体用シリンジの読みは 4.5 cm<sup>3</sup> から 84.0 cm<sup>3</sup> に増えます。大気圧は 101.0 kPa です。この液体のモル質量を計算しなさい。",

    // Processing the data > worked example > data-title attribute
    "Find the mass and the volume": "質量と体積を求める",

    // Processing the data > worked example > p
    "Both come from the difference between two readings.": "どちらも、2 つの読みの差から求めます。",

    // Processing the data > worked example > data-title attribute
    "Convert to SI units": "SI 単位に直す",

    // Processing the data > worked example > p
    "<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> needs Pa, m<sup>3</sup> and K.": "<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> には、Pa、m<sup>3</sup>、K が必要です。",

    // Processing the data > worked example > data-title attribute
    "Substitute into M = mRT / PV": "M = mRT / PV に代入する",

    // Processing the data > worked example > p
    "Keep the mass in grams, so the molar mass comes out in g mol<sup>−1</sup>.": "質量はグラムのままにしておくと、モル質量が g mol<sup>−1</sup> で出てきます。",

    // Processing the data > worked example > data-title attribute
    "Round and identify": "丸めて、特定する",

    // Processing the data > worked example > p
    "The mass, 0.152 g, has 3 significant figures.": "質量 0.152 g は有効数字 3 桁です。",

    // Processing the data > worked example > maths line
    "propanone, <span class=\"chem\">C3H6O</span>: <i>M</i> = 58.09 g mol<sup>−1</sup>; percentage error = 0.8 %": "プロパノン <span class=\"chem\">C3H6O</span>：<i>M</i> = 58.09 g mol<sup>−1</sup>、百分率誤差 = 0.8 %",

    // Processing the data > worked example > p
    "58.5 g mol<sup>−1</sup>, which fits propanone (58.09 g mol<sup>−1</sup>).": "58.5 g mol<sup>−1</sup> で、プロパノン（58.09 g mol<sup>−1</sup>）に合います。",

    // Processing the data > try it > p
    "0.103 g of a liquid is injected into a gas syringe at 98.5 °C. The volume of vapour is 36.5 cm<sup>3</sup> and the pressure is 100.2 kPa. Calculate the molar mass of the liquid, in g mol<sup>−1</sup>.": "98.5 °C の気体用シリンジに、液体 0.103 g を注入します。蒸気の体積は 36.5 cm<sup>3</sup>、圧力は 100.2 kPa です。この液体のモル質量を g mol<sup>−1</sup> で計算しなさい。",

    // Processing the data > try it > li
    "Convert first: cm<sup>3</sup> to m<sup>3</sup>, kPa to Pa, °C to K.": "まず換算します：cm<sup>3</sup> を m<sup>3</sup> に、kPa を Pa に、°C を K に。",

    // Processing the data > try it > maths line
    "<i>M</i> = 318.1 ÷ 3.657 = 87.0 g mol<sup>−1</sup> (hexane, <span class=\"chem\">C6H14</span>, is 86.20 g mol<sup>−1</sup>)": "<i>M</i> = 318.1 ÷ 3.657 = 87.0 g mol<sup>−1</sup>（ヘキサン <span class=\"chem\">C6H14</span> は 86.20 g mol<sup>−1</sup>）",

    // Processing the data > h3
    "Using a graph instead of one run": "1 回の実行ではなくグラフを使う",

    // Processing the data > p
    "Plot the volume of gas against the mass, for several runs, and draw a line of best fit through the origin. A graph averages out random errors and shows up an odd run. The gradient is the volume per gram.": "何回かの実行について、気体の体積を質量に対してプロットし、原点を通る最もよく合う直線を引きます。グラフは偶然誤差を平均し、おかしな実行を見つけやすくします。傾きは 1 g あたりの体積です。",

    // Processing the data > li
    "Part A: molar volume = gradient (cm<sup>3</sup> g<sup>−1</sup>) × 24.31 g mol<sup>−1</sup> ÷ 1000.": "パート A：モル体積 = 傾き (cm<sup>3</sup> g<sup>−1</sup>) × 24.31 g mol<sup>−1</sup> ÷ 1000。",

    // Processing the data > li
    "Part B: <i>V</i> / <i>m</i> = <i>RT</i> / <i>PM</i>, so <i>M</i> = <i>RT</i> ÷ (<i>P</i> × gradient), with the gradient in m<sup>3</sup> g<sup>−1</sup>.": "パート B：<i>V</i> / <i>m</i> = <i>RT</i> / <i>PM</i> なので、<i>M</i> = <i>RT</i> ÷ (<i>P</i> × 傾き) です。傾きは m<sup>3</sup> g<sup>−1</sup> で表します。",

    // Processing the data > p
    "If your best line clearly misses the origin, a similar amount of gas was lost (or gained) in every run. That is a sign of a systematic error.": "最もよく合う直線が明らかに原点を通らないなら、どの実行でも同じくらいの量の気体が失われた（または増えた）ということです。これは系統誤差のしるしです。",

    // Processing the data > common mistake > p
    "Using <i>P</i> in kPa with <i>V</i> in cm<sup>3</sup> makes <i>PV</i> 1000 times too big, so the molar mass comes out 1000 times too small. Using °C instead of K is just as serious. If a molar mass looks impossible (0.06 g mol<sup>−1</sup>, or 2000 g mol<sup>−1</sup>), check the units first.": "<i>P</i> を kPa、<i>V</i> を cm<sup>3</sup> で使うと、<i>PV</i> が 1000 倍大きくなり、モル質量は 1000 分の 1 になってしまいます。K の代わりに °C を使うのも同じくらい重大な間違いです。モル質量がありえない値（0.06 g mol<sup>−1</sup> や 2000 g mol<sup>−1</sup>）に見えたら、まず単位を確かめましょう。",

    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > p
    "For a product or a quotient such as <i>M</i> = <i>mRT</i> / <i>PV</i>, add the percentage uncertainties of the measured quantities. <i>R</i> is a constant and adds nothing. A mass or a volume found by difference uses two readings, so add their absolute uncertainties first.": "<i>M</i> = <i>mRT</i> / <i>PV</i> のような積や商では、測定した量の百分率の不確かさを足します。<i>R</i> は定数なので、何も加えません。差で求めた質量や体積は 2 回の読みを使うので、まずそれらの絶対不確かさを足します。",

    // Uncertainties > table > caption
    "Propagating uncertainties for worked example 2": "例題 2 の不確かさを伝える",

    // Uncertainties > table > th
    "Value": "値",

    // Uncertainties > table > th
    "Absolute uncertainty": "絶対不確かさ",

    // Uncertainties > table > th
    "Percentage uncertainty": "百分率の不確かさ",

    // Uncertainties > table > th
    "mass, two weighings": "質量（2 回の質量測定）",

    // Uncertainties > table > th
    "volume, two readings": "体積（2 回の読み）",

    // Uncertainties > table > td
    "79.5 cm<sup>3</sup>": "79.5 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±1.0 cm<sup>3</sup>": "±1.0 cm<sup>3</sup>",

    // Uncertainties > table > td
    "101.0 kPa": "101.0 kPa",

    // Uncertainties > table > td
    "±0.1 kPa": "±0.1 kPa",

    // Uncertainties > table > th
    "molar mass": "モル質量",

    // Uncertainties > table > td
    "58.5 g mol<sup>−1</sup>": "58.5 g mol<sup>−1</sup>",

    // Uncertainties > table > td
    "±1.6 g mol<sup>−1</sup>": "±1.6 g mol<sup>−1</sup>",

    // Uncertainties > p
    "So <span class=\"mono\">M = 58.5 ± 1.6 g mol<sup>−1</sup></span>, or <span class=\"mono\">59 ± 2 g mol<sup>−1</sup></span> with the uncertainty to one significant figure. The percentage error compared with propanone is 0.8 %, smaller than the 2.8 % uncertainty. The result agrees with propanone within experimental uncertainty. The mass and the volume dominate: a larger sample, within the range of the syringe, would reduce both.": "したがって <span class=\"mono\">M = 58.5 ± 1.6 g mol<sup>−1</sup></span>、不確かさを有効数字 1 桁にすると <span class=\"mono\">59 ± 2 g mol<sup>−1</sup></span> です。プロパノンとくらべた百分率誤差は 0.8 % で、不確かさ 2.8 % より小さくなっています。結果は、実験の不確かさの範囲でプロパノンと一致します。不確かさの大部分は質量と体積から来ます。シリンジの範囲内で試料を多くすれば、どちらも小さくできます。",

    // Uncertainties > h3
    "Part A: is the difference bigger than the uncertainty?": "パート A：違いは不確かさより大きいか",

    // Uncertainties > p
    "In worked example 1, the mass (0.0742 ± 0.001 g) has an uncertainty of 1.3 % and the volume (76.5 ± 0.5 cm<sup>3</sup>, one reading from zero) 0.7 %. The molar volume therefore has an uncertainty of about 2.0 %: <span class=\"mono\">25.1 ± 0.5 dm<sup>3</sup> mol<sup>−1</sup></span>.": "例題 1 では、質量（0.0742 ± 0.001 g）の不確かさは 1.3 %、体積（76.5 ± 0.5 cm<sup>3</sup>、ゼロからの 1 回の読み）は 0.7 % です。したがって、モル体積の不確かさは約 2.0 % で、<span class=\"mono\">25.1 ± 0.5 dm<sup>3</sup> mol<sup>−1</sup></span> です。",

    // Uncertainties > p
    "The ideal gas value at 23.0 °C and 100.6 kPa is <i>RT</i> / <i>P</i> = 8.31 × 296.15 ÷ 100.6 = 24.5 dm<sup>3</sup> mol<sup>−1</sup>. The measured value is 2.5 % higher, which is more than the 2.0 % uncertainty. Random error alone does not explain it, so a systematic error is likely. The table in the next section suggests which.": "23.0 °C、100.6 kPa での理想気体の値は <i>RT</i> / <i>P</i> = 8.31 × 296.15 ÷ 100.6 = 24.5 dm<sup>3</sup> mol<sup>−1</sup> です。測定値は 2.5 % 大きく、不確かさ 2.0 % を超えています。偶然誤差だけでは説明できないので、系統誤差がある可能性が高いでしょう。どの誤差かは、次のセクションの表から考えられます。",

    // Uncertainties > not needed for IB > p
    "Hydrogen collected over aqueous acid (or butane collected over water) also contains some water vapour, so the gas volume is a little larger than the volume of dry gas. Correcting for this uses the vapour pressure of water and partial pressures, which are not in the IB guide. You only need to recognize it as a source of error that makes the volume too large.": "酸の水溶液の上で集めた水素（や水の上で集めたブタン）には水蒸気も含まれるので、気体の体積は乾いた気体の体積より少し大きくなります。これを補正するには水の蒸気圧と分圧を使いますが、どちらも『指導の手引き』にはありません。体積を大きくしすぎる誤差の原因として気づければ十分です。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差と改善",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "A random error scatters the results; repeats and a graph reduce its effect. A systematic error pushes every result the same way; only a change of method fixes it. For each error below, follow the chain: what happens to the measured quantity, then what happens to the result.": "偶然誤差は結果をばらつかせます。くり返しとグラフで、その影響を小さくできます。系統誤差はすべての結果を同じ向きにずらします。直すには方法を変えるしかありません。下の誤差のそれぞれについて、測定した量がどうなるか、次に結果がどうなるか、という順にたどりましょう。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in finding molar volume and molar mass": "モル体積とモル質量を求めるときの誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > td
    "Part A: oxide coating on the magnesium (systematic).": "パート A：マグネシウムの表面の酸化物の被膜（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "Part of the mass is magnesium oxide, which gives no hydrogen. Less gas forms than the mass suggests, so the molar volume is too low.": "質量の一部は酸化マグネシウムで、水素を出さない。質量から予想されるより気体が少ないので、モル体積が低すぎる。",

    // Evaluation: errors and improvements > table > td
    "Clean the ribbon with sandpaper until it is shiny, just before weighing.": "質量をはかる直前に、リボンをつやが出るまで紙やすりでみがく。",

    // Evaluation: errors and improvements > table > td
    "Part A: hydrogen escapes before the bung is fitted (systematic).": "パート A：ゴム栓をはめる前に水素が逃げる（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The volume measured is too small, so the molar volume is too low.": "測定した体積が小さすぎるので、モル体積が低すぎる。",

    // Evaluation: errors and improvements > table > td
    "Keep the magnesium in a small tube (or on a thread) above the acid and tip the flask only after sealing it.": "マグネシウムを小さな試験管に入れる（または糸でつるす）ことで酸の上に保ち、密閉してからフラスコを傾ける。",

    // Evaluation: errors and improvements > table > td
    "Part A: volume read while the gas is still warm (systematic).": "パート A：気体がまだ温かいうちに体積を読む（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The reaction is exothermic. Warm gas takes up more space, so the molar volume is too high.": "反応は発熱反応である。温かい気体は体積が大きいので、モル体積が高すぎる。",

    // Evaluation: errors and improvements > table > td
    "Wait until the flask is back at room temperature, then read the volume.": "フラスコが室温にもどるまで待ってから、体積を読む。",

    // Evaluation: errors and improvements > table > td
    "Part A: the hydrogen contains water vapour (systematic).": "パート A：水素に水蒸気が含まれる（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The volume includes some water vapour, so the molar volume is too high.": "体積に水蒸気の分が含まれるので、モル体積が高すぎる。",

    // Evaluation: errors and improvements > table > td
    "Note it as a limitation. (The correction is beyond the guide; see the box above.)": "限界として書いておく。（補正は『指導の手引き』の範囲外。上の枠を参照。）",

    // Evaluation: errors and improvements > table > td
    "Part A: some hydrogen dissolves in the acid (systematic, small).": "パート A：水素の一部が酸に溶ける（系統誤差、小さい）。",

    // Evaluation: errors and improvements > table > td
    "The volume is slightly too small, so the molar volume is slightly too low.": "体積がわずかに小さすぎるので、モル体積がわずかに低すぎる。",

    // Evaluation: errors and improvements > table > td
    "Hydrogen is only slightly soluble, so this effect is very small. Use the smallest volume of acid that is still in excess.": "水素はわずかしか溶けないので、この影響はとても小さい。過剰になる範囲で、できるだけ少ない体積の酸を使う。",

    // Evaluation: errors and improvements > table > td
    "Part B: the vapour is close to its boiling point (systematic).": "パート B：蒸気が沸点に近い（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The attractions between the molecules are no longer negligible, so the vapour takes up less space than an ideal gas would. <i>V</i> is too small, so <i>M</i> is too high.": "分子の間の引力が無視できなくなるので、蒸気の体積は理想気体より小さくなる。<i>V</i> が小さすぎるので、<i>M</i> が高すぎる。",

    // Evaluation: errors and improvements > table > td
    "Set the jacket at least 20–30 °C above the boiling point of the liquid.": "ジャケットを液体の沸点より少なくとも 20〜30 °C 高くする。",

    // Evaluation: errors and improvements > table > td
    "Part B: not all of the liquid vaporizes (systematic).": "パート B：液体がすべて蒸発しない（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "<i>V</i> is too small for the mass recorded, so <i>M</i> is too high.": "記録した質量に対して <i>V</i> が小さすぎるので、<i>M</i> が高すぎる。",

    // Evaluation: errors and improvements > table > td
    "Use a higher jacket temperature or a smaller sample. Check that no drops remain.": "ジャケットの温度を上げるか、試料を少なくする。液滴が残っていないか確かめる。",

    // Evaluation: errors and improvements > table > td
    "Part B: liquid evaporates from the needle between weighing and injecting (systematic).": "パート B：質量をはかってから注入するまでに、針から液体が蒸発する（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The mass recorded is larger than the mass that reached the syringe, so <i>M</i> is too high.": "記録した質量が、シリンジに入った質量より大きいので、<i>M</i> が高すぎる。",

    // Evaluation: errors and improvements > table > td
    "Inject straight after the first weighing and reweigh at once.": "1 回目の質量測定のあとすぐに注入し、すぐに質量をはかり直す。",

    // Evaluation: errors and improvements > table > td
    "Both: friction in the gas syringe, and reading the scale (random).": "両方：気体用シリンジの摩擦と、目盛の読み（偶然誤差）。",

    // Evaluation: errors and improvements > table > td
    "Volumes scatter, so the result is less precise.": "体積がばらつくので、結果の精密さが下がる。",

    // Evaluation: errors and improvements > table > td
    "Turn the plunger gently before reading; do several runs and use a graph.": "読む前にピストンを軽く回す。何回か実行してグラフを使う。",

    // Evaluation: errors and improvements > table > td
    "Both: small masses on a ±0.001 g balance (random).": "両方：±0.001 g の電子てんびんで小さな質量をはかる（偶然誤差）。",

    // Evaluation: errors and improvements > table > td
    "A large percentage uncertainty in <i>m</i> (1.3 % for 0.07 g).": "<i>m</i> の百分率の不確かさが大きい（0.07 g で 1.3 %）。",

    // Evaluation: errors and improvements > table > td
    "Use the largest sample the syringe allows, or a ±0.0001 g balance.": "シリンジが許す範囲でできるだけ大きな試料を使うか、±0.0001 g の電子てんびんを使う。",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "Markschemes want the direction <em>and</em> the reason. “The molar volume is too low because some hydrogen escaped before the bung was fitted, so the volume measured was too small” earns the mark. “Gas escaped” on its own usually does not.": "採点基準は、向き<em>と</em>理由の両方を求めます。「ゴム栓をはめる前に水素の一部が逃げたので、測定した体積が小さすぎ、モル体積が低すぎる」と書けば点になります。「気体が逃げた」だけでは、ふつう点になりません。",

    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "Paper 1B style questions on this practical: calculations, unit traps, uncertainties and evaluation. All the questions are original.": "この実験についての Paper 1B 形式の問題です。計算、単位の落とし穴、不確かさ、評価を扱います。問題はすべてオリジナルです。",

    // Exam practice > data-title attribute
    "Molar mass of a gas lab: exam practice": "気体のモル質量の実験：試験対策の問題",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "No readings yet.": "まだ読みがありません。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Mass of magnesium ribbon to cut": "切り取るマグネシウムリボンの質量",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ribbon surface": "リボンの表面",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Cleaned with sandpaper": "紙やすりでみがいた",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Dull, as supplied": "くすんだまま（受け取ったまま）",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Adding the magnesium": "マグネシウムの加え方",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Tipped in after the bung is fitted": "ゴム栓をはめてから傾けて入れる",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Dropped in, then the bung fitted": "落とし入れてから、ゴム栓をはめる",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Volume read": "体積を読むとき",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "After cooling to room temperature": "室温まで冷えてから",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "As soon as the fizzing stops": "泡が止まったらすぐ",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Run the reaction": "反応させる",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Delete last run": "最後の実行を削除",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last run deleted.": "最後の実行を削除しました。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "New day": "新しい日",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A new day: new room temperature and pressure, and an empty results table.": "新しい日です。室温と大気圧が変わり、結果の表は空になりました。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copy data": "データをコピー",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m(Mg) / g (±0.001)": "m(Mg) / g (±0.001)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V(H₂) / cm³ (±0.5)": "V(H₂) / cm³ (±0.5)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "θ / °C (±0.5)": "θ / °C (±0.5)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "P / kPa (±0.1)": "P / kPa (±0.1)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copied {n} runs as tab-separated text. Paste them into a spreadsheet.": "{n} 回分の実行をタブ区切りのテキストとしてコピーしました。表計算ソフトに貼り付けてください。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copying is blocked in this browser. Select the table with the mouse and copy it instead.": "このブラウザーではコピーできません。マウスで表を選択してコピーしてください。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Room conditions": "室内の条件",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last run": "最後の実行",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar volume, mean of runs": "モル体積（実行の平均）",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar volume from the gradient": "傾きから求めたモル体積",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ideal gas value at room conditions": "室内の条件での理想気体の値",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Note": "メモ",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A conical flask of hydrochloric acid with a small tube of magnesium inside, sealed with a bung. A delivery tube leads to a horizontal gas syringe. The plunger moves out as hydrogen is produced. The readings are in the readout.": "塩酸の入った三角フラスコ。中にマグネシウムを入れた小さな試験管があり、ゴム栓でふさいである。誘導管が水平な気体用シリンジにつながる。水素ができるとピストンが外へ動く。読みは表示欄に出る。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "HCl(aq), excess": "HCl(aq)、過剰",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gas syringe": "気体用シリンジ",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "reacting…": "反応中…",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "That is plenty of runs. Delete one or start a new day.": "実行は十分な数になりました。1 つ削除するか、新しい日を始めてください。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The magnesium is reacting. Hydrogen pushes the plunger out.": "マグネシウムが反応しています。水素がピストンを押し出しています。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The plunger reached the end of the syringe and gas escaped. This run cannot be used: use less magnesium.": "ピストンがシリンジの端まで達し、気体が逃げました。この実行は使えません。マグネシウムを減らしましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Recorded m = {m} g, V = {V} cm³.": "記録しました：m = {m} g、V = {V} cm³。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Runs": "実行",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Best-fit line": "近似直線",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ideal gas": "理想気体",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Graph of the volume of hydrogen against the mass of magnesium for each run, with a best-fit line through the origin and the line expected for an ideal gas at room conditions.": "それぞれの実行について、水素の体積をマグネシウムの質量に対してプロットしたグラフ。原点を通る最もよく合う直線と、室内の条件で理想気体に予想される直線を示す。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m(Mg) / g": "m(Mg) / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V(H₂) / cm³": "V(H₂) / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "{v} dm³ mol⁻¹ (at STP: {s} dm³ mol⁻¹, data booklet {b})": "{v} dm³ mol⁻¹（STP では {s} dm³ mol⁻¹、データブックレットの値 {b}）",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Run the reaction at least once.": "少なくとも 1 回は反応させましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gradient = {k} cm³ g⁻¹, so molar volume = {v} dm³ mol⁻¹": "傾き = {k} cm³ g⁻¹、したがってモル体積 = {v} dm³ mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Do at least three runs with different masses.": "質量を変えて、少なくとも 3 回実行しましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "cleaned": "みがいた",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "dull": "くすんだ",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "tipped in": "傾けて入れた",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "dropped in": "落とし入れた",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "cooled": "冷えた",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "warm": "温かい",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "n(H₂) / mol": "n(H₂) / mol",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V<sub>m</sub> / dm³ mol⁻¹": "V<sub>m</sub> / dm³ mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Choose a mass of magnesium and run the reaction. The acid is in excess, so all the magnesium reacts.": "マグネシウムの質量を選んで、反応させましょう。酸は過剰なので、マグネシウムはすべて反応します。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "propanone": "プロパノン",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "hexane": "ヘキサン",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ethanol": "エタノール",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Liquid": "液体",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Reveal the liquid": "液体を表示する",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid A": "未知の液体 A",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid B": "未知の液体 B",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid C": "未知の液体 C",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Heating-jacket temperature": "加熱ジャケットの温度",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Volume of liquid drawn up": "吸い取る液体の体積",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject and read": "注入して読む",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Delete last reading": "最後の読みを削除",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last reading deleted.": "最後の読みを削除しました。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Hide the liquid": "液体を隠す",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A new day: a new atmospheric pressure, and an empty results table.": "新しい日です。大気圧が変わり、結果の表は空になりました。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m before / g": "注入前の m / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m after / g": "注入後の m / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V before / cm³": "注入前の V / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V after / cm³": "注入後の V / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copied {n} readings as tab-separated text. Paste them into a spreadsheet.": "{n} 個の読みをタブ区切りのテキストとしてコピーしました。表計算ソフトに貼り付けてください。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Atmospheric pressure": "大気圧",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last injection": "最後の注入",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar mass, mean": "モル質量（平均）",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar mass from the gradient": "傾きから求めたモル質量",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The liquid": "液体",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A gas syringe inside a heating jacket. A hypodermic syringe injects the liquid through a self-sealing rubber cap on the nozzle. The vapour pushes the plunger out. The readings are in the readout.": "加熱ジャケットの中の気体用シリンジ。注射針付きシリンジで、先端の自己密閉式のゴムキャップから液体を注入する。蒸気がピストンを押し出す。読みは表示欄に出る。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "heating jacket": "加熱ジャケット",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "hypodermic": "注射針",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "That is plenty of readings. Delete one or start a new day.": "読みは十分な数になりました。1 つ削除するか、新しい日を始めてください。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The plunger reached the end of the syringe and vapour escaped. This reading cannot be used: inject less liquid.": "ピストンがシリンジの端まで達し、蒸気が逃げました。この読みは使えません。注入する液体を減らしましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Drops of liquid are still visible in the syringe. Not all of the liquid has vaporized at this temperature.": "シリンジの中に、まだ液滴が見えます。この温度では、液体がすべては蒸発していません。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Recorded. The vapour pushed the plunger from {a} cm³ to {b} cm³.": "記録しました。蒸気がピストンを {a} cm³ から {b} cm³ まで押し出しました。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject the liquid to take a reading.": "読みをとるには、液体を注入しましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm = {m} g, but the syringe overflowed.": "Δm = {m} g。ただし、シリンジからあふれました。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm = {m} g, ΔV = {v} cm³, θ = {th} °C": "Δm = {m} g、ΔV = {v} cm³、θ = {th} °C",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gradient = {k} cm³ g⁻¹, so M = {M} g mol⁻¹": "傾き = {k} cm³ g⁻¹、したがって M = {M} g mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject at least three different volumes at the same jacket temperature.": "ジャケットの温度を同じにして、少なくとも 3 つの違う体積を注入しましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "{name}, {formula}, M = {M} g mol⁻¹, boiling point {bp} °C.": "{name}、{formula}、M = {M} g mol⁻¹、沸点 {bp} °C。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Your percentage error: {e} %.": "あなたの百分率誤差：{e} %。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Hidden. Work out M first, then reveal it.": "隠しています。まず M を求めてから、表示しましょう。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Injections": "注入",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Graph of the volume of vapour against the mass of liquid injected, with a best-fit line through the origin.": "蒸気の体積を、注入した液体の質量に対してプロットしたグラフ。原点を通る最もよく合う直線を引いてある。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm / g": "Δm / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ΔV / cm³": "ΔV / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm / g (±0.002)": "Δm / g (±0.002)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ΔV / cm³ (±1.0)": "ΔV / cm³ (±1.0)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "M / g mol⁻¹": "M / g mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Choose a liquid, set the jacket temperature and inject. Keep the jacket temperature the same for every injection you want on one graph.": "液体を選び、ジャケットの温度を決めて注入しましょう。1 つのグラフにまとめたい注入では、ジャケットの温度をすべて同じにしましょう。",

  }
});
