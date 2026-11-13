/* s1-5 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Ideal gases | Structure Lab": "1.5 理想気体 | Structure Lab",

    // Ideal gases > page header > p
    "Structure 1.5": "Structure 1.5",

    // Ideal gases > page header > h1
    "Ideal gases": "理想気体",

    // Ideal gases > page header > span
    "How does the model of ideal gas behaviour help us to predict the behaviour of real gases?": "理想気体のふるまいのモデルは、実在気体のふるまいを予測するのにどう役立つのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes. Everything in this topic is SL core. There is no Additional HL content in 1.5.": "ノートを見ないでできるようになったものから、チェックを入れましょう。このトピックの内容はすべて SL の内容（SL・HL 共通）です。1.5 に HL 追加内容（AHL）はありません。",

    // What you need to be able to do > checklist > span
    "Recognize the key assumptions of the ideal gas model.": "理想気体モデルの重要な仮定を見分ける。",

    // What you need to be able to do > checklist > span
    "Explain why real gases deviate from the model, especially at low temperature and high pressure.": "実在気体がモデルからずれる理由を、特に低温・高圧の場合について説明する。",

    // What you need to be able to do > checklist > span
    "Use the molar volume of an ideal gas at STP to convert between amount and gas volume.": "STP での理想気体のモル体積を使って、物質量と気体の体積を相互に変換する。",

    // What you need to be able to do > checklist > span
    "Describe and sketch how pressure, volume and temperature are related for a fixed mass of gas, and analyse graphs of these variables.": "一定量の気体について、圧力・体積・温度の関係を記述し、グラフの概形を描く。また、これらの変数のグラフを分析する。",

    // What you need to be able to do > checklist > span
    "Use the combined gas law when the conditions of a gas change.": "気体の条件が変わるときに、ボイル・シャルルの法則（combined gas law）を使う。",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>PV</i> = <i>nRT</i>, using consistent units.": "単位をそろえて、<i>PV</i> = <i>nRT</i> を使う問題を解く。",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a gas from experimental data.": "実験データから気体のモル質量を計算する。",

    // The ideal gas model > h2
    "The ideal gas model": "理想気体モデル",

    // The ideal gas model > p
    "Pump up a bicycle tyre and you can feel the gas pushing back. That push is <dfn data-def=\"The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.\">pressure</dfn>. It comes from billions of tiny particles hitting the inside of the tyre.": "自転車のタイヤに空気を入れると、気体が押し返してくるのを感じます。この押す力が<dfn data-def=\"面を押す力を、単位面積あたりで表したものです。気体の圧力は、粒子が容器の壁に衝突することで生まれます。\">圧力 <span class=\"en-term\">(pressure)</span></dfn>です。圧力は、何十億もの小さな粒子がタイヤの内側にぶつかることで生まれます。",

    // The ideal gas model > data-def attribute
    "The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.": "面を押す力を、単位面積あたりで表したものです。気体の圧力は、粒子が容器の壁に衝突することで生まれます。",

    // The ideal gas model > p
    "Real gas particles are complicated. So chemists use a simplified picture called an <dfn data-def=\"A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.\">ideal gas</dfn>. It is a model: it leaves out details to make the mathematics manageable.": "実在気体の粒子は複雑です。そこで化学では、<dfn data-def=\"動いている粒子でできた、モデル上の気体です。粒子の体積は無視できるほど小さく、分子間力ははたらかず、衝突はすべて弾性衝突です。\">理想気体 <span class=\"en-term\">(ideal gas)</span></dfn>という単純化した考え方を使います。これはモデルです。細かい点を省いて、数学で扱いやすくしています。",

    // The ideal gas model > data-def attribute
    "A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.": "動いている粒子でできた、モデル上の気体です。粒子の体積は無視できるほど小さく、分子間力ははたらかず、衝突はすべて弾性衝突です。",

    // The ideal gas model > p
    "The model makes four assumptions. Learn these four.": "このモデルには 4 つの仮定があります。この 4 つを覚えましょう。",

    // The ideal gas model > li
    "The gas consists of <strong>moving particles</strong>.": "気体は<strong>動いている粒子</strong>（moving particles）でできています。",

    // The ideal gas model > li
    "The particles have <strong>negligible volume</strong>. The particles themselves take up almost none of the space in the container.": "粒子の<strong>体積は無視できるほど小さい</strong>（negligible volume）。粒子そのものは、容器の中の空間をほとんど占めていません。",

    // The ideal gas model > li
    "There are <strong>no intermolecular forces</strong>. The particles do not attract or repel each other.": "<strong>分子間力がはたらかない</strong>（no intermolecular forces）。粒子どうしは、引き合うことも反発することもありません。",

    // The ideal gas model > li
    "All collisions between particles are <strong>elastic</strong>.": "粒子どうしの衝突は、すべて<strong>弾性衝突</strong>（elastic collisions）です。",

    // The ideal gas model > p
    "An <dfn data-def=\"A collision in which the total kinetic energy of the particles is the same before and after.\">elastic collision</dfn> is one where no kinetic energy is lost overall. The particles bounce apart with the same total kinetic energy they had before.": "<dfn data-def=\"衝突の前と後で、粒子の運動エネルギーの合計が変わらない衝突です。\">弾性衝突 <span class=\"en-term\">(elastic collision)</span></dfn>とは、全体として運動エネルギーが失われない衝突です。粒子は、衝突の前と同じ合計の運動エネルギーをもって、はね返ります。",

    // The ideal gas model > data-def attribute
    "A collision in which the total kinetic energy of the particles is the same before and after.": "衝突の前と後で、粒子の運動エネルギーの合計が変わらない衝突です。",

    // The ideal gas model > p
    "<dfn data-def=\"Small enough to be ignored without changing the answer in any way that matters.\">Negligible</dfn> means small enough to ignore. A gas at room conditions is almost entirely empty space, so ignoring the size of the particles is usually a very good approximation.": "<dfn data-def=\"無視しても、答えに意味のある違いが出ないほど小さいことです。\">無視できるほど小さい <span class=\"en-term\">(negligible)</span></dfn>とは、無視してもかまわないほど小さい、という意味です。室内のふつうの条件では、気体はほとんどが何もない空間です。だから、粒子の大きさを無視しても、たいていはとてもよい近似になります。",

    // The ideal gas model > data-def attribute
    "Small enough to be ignored without changing the answer in any way that matters.": "無視しても、答えに意味のある違いが出ないほど小さいことです。",

    // The ideal gas model > key idea > p
    "An ideal gas does not exist. It is a model that real gases follow closely under everyday conditions. That is why one equation works for hydrogen, oxygen and carbon dioxide alike.": "理想気体は実際には存在しません。ふだんの条件で、実在気体がよく当てはまるモデルです。だから、水素にも酸素にも二酸化炭素にも、同じ 1 つの式が使えます。",

    // The ideal gas model > exam tip (shown in English + translation) > p
    "If you are asked to state assumptions, use the exact phrases: <em>negligible volume</em> (of the particles), <em>no intermolecular forces</em>, <em>elastic collisions</em>. Writing “the gas has no volume” loses the mark. The gas fills its container. It is the particles whose volume is negligible.": "仮定を述べる問題では、上の英語の語句をそのまま使いましょう。<em>無視できるほど小さい体積</em>（粒子の体積）、<em>分子間力がはたらかない</em>、<em>弾性衝突</em>の 3 つです。「気体に体積がない」と書くと、点を失います。気体は容器いっぱいに広がります。無視できるほど小さいのは、粒子の体積です。",

    // The ideal gas model > not needed for IB > p
    "Textbooks often list more assumptions and go on to derive gas pressure from particle speeds. The four statements above are what the IB guide lists. You do not need the kinetic energy equation (<span class=\"mono\">E = 3/2 RT</span>), root-mean-square speeds or any derivation.": "教科書には、もっと多くの仮定をあげて、粒子の速さから気体の圧力を導くものがよくあります。IB の『指導の手引き』（subject guide）にあるのは、上の 4 つです。運動エネルギーの式（<span class=\"mono\">E = 3/2 RT</span>）、二乗平均速度、式の導出は、どれも必要ありません。",

    // The ideal gas model > data-title attribute
    "Ideal gas model: quick check": "理想気体モデル：確認クイズ",

    // Real gases and the limits of the model > data-toc attribute
    "Real gases": "実在気体",

    // Real gases and the limits of the model > h2
    "Real gases and the limits of the model": "実在気体とモデルの限界",

    // Real gases and the limits of the model > p
    "Cool steam and it turns into liquid water. An ideal gas could never do that, because its particles do not attract each other. So real gases cannot be exactly ideal.": "水蒸気を冷やすと、液体の水になります。理想気体では、こうしたことは決して起こりません。粒子どうしが引き合わないからです。つまり、実在気体は完全な理想気体ではありえません。",

    // Real gases and the limits of the model > p
    "A <dfn data-def=\"An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.\">real gas</dfn> breaks two of the assumptions. Its particles do have some volume, and they do attract each other. Under most conditions both effects are tiny. Under two conditions they are not.": "<dfn data-def=\"実際に存在する気体です。粒子そのものに体積があり、粒子どうしが引き合うので、理想気体モデルに完全には従いません。\">実在気体 <span class=\"en-term\">(real gas)</span></dfn>は、仮定のうち 2 つに当てはまりません。粒子にはいくらか体積があり、粒子どうしは引き合います。たいていの条件では、どちらの影響もごくわずかです。しかし、2 つの条件では無視できなくなります。",

    // Real gases and the limits of the model > data-def attribute
    "An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.": "実際に存在する気体です。粒子そのものに体積があり、粒子どうしが引き合うので、理想気体モデルに完全には従いません。",

    // Real gases and the limits of the model > h3
    "High pressure: particle volume matters": "高圧：粒子の体積が効いてくる",

    // Real gases and the limits of the model > p
    "At high pressure the gas is squeezed into a small space. The particles are close together. Their own volume is now a noticeable share of the container, so it is no longer negligible. Because the particles are close, the forces between them are also more significant.": "高圧では、気体は小さな空間に押し込められ、粒子どうしが近づきます。すると、粒子そのものの体積が容器の中で目立つ割合を占めるようになり、もう無視できません。粒子が近いので、粒子の間にはたらく力の影響も大きくなります。",

    // Real gases and the limits of the model > h3
    "Low temperature: intermolecular forces matter": "低温：分子間力が効いてくる",

    // Real gases and the limits of the model > p
    "At low temperature the particles have less kinetic energy and move more slowly. Slow particles are affected more by the attractions between them, so the intermolecular forces are no longer negligible. Cool a real gas far enough and those forces pull the particles together into a liquid.": "低温では、粒子の運動エネルギーが小さく、動きが遅くなります。遅い粒子ほど、粒子どうしの引力の影響を強く受けます。そのため、分子間力はもう無視できません。実在気体を十分に冷やすと、この力で粒子が引き寄せられて、液体になります。",

    // Real gases and the limits of the model > key idea > p
    "Real gases deviate most from ideal behaviour at <strong>low temperature and high pressure</strong>. They behave most like an ideal gas at <strong>high temperature and low pressure</strong>.": "実在気体が理想気体のふるまいから最も大きくずれる（deviate）のは、<strong>低温・高圧</strong>のときです。理想気体に最も近いふるまいをするのは、<strong>高温・低圧</strong>のときです。",

    // Real gases and the limits of the model > widget > data-title attribute
    "Real versus ideal: when does the model break down?": "実在気体と理想気体：モデルが合わなくなるのはいつ？",

    // Real gases and the limits of the model > widget > data-kicker attribute
    "Qualitative model": "定性的なモデル",

    // Real gases and the limits of the model > widget > figcaption
    "Move the temperature and pressure sliders and watch the three bars. Dashed lines mark attractions between slow, close particles. This is an illustration to build your intuition. Nothing here is calculated from an equation, and the particles are drawn far too large.": "温度と圧力のスライダーを動かして、3 本の棒を見てみましょう。破線は、遅くて近い粒子どうしの引力を表します。これは感覚をつかむための図です。式から計算したものではありません。また、粒子は実際よりずっと大きく描いてあります。",

    // Real gases and the limits of the model > h3
    "Which gases are closest to ideal?": "理想気体に最も近いのはどの気体？",

    // Real gases and the limits of the model > p
    "Gases with <strong>weak intermolecular forces</strong> and <strong>small particles</strong> match the model best. Helium and hydrogen are very close to ideal under ordinary conditions. Gases with stronger attractions between their molecules, such as ammonia, deviate more under the same conditions.": "<strong>分子間力が弱く</strong>、<strong>粒子が小さい</strong>気体ほど、モデルによく合います。ヘリウムと水素は、ふつうの条件でほぼ理想気体としてふるまいます。アンモニアのように分子どうしの引力が強い気体は、同じ条件でもずれが大きくなります。",

    // Real gases and the limits of the model > p
    "You will study the types of intermolecular force in Structure 2.2. For now, one clue is enough: a gas with a higher boiling point has stronger forces between its particles.": "分子間力の種類は Structure 2.2 で学びます。今は、手がかりを 1 つ知っていれば十分です。沸点が高い気体ほど、粒子の間にはたらく力が強い、ということです。",

    // Real gases and the limits of the model > exam tip (shown in English + translation) > p
    "For “explain why a real gas deviates” questions, give a condition and a reason for each mark. <em>High pressure: particles are close together, so the volume of the particles is not negligible.</em> <em>Low temperature: particles move more slowly, so intermolecular forces become significant.</em>": "「実在気体がずれる理由を説明しなさい」という問題では、1 点ごとに、条件と理由を組にして書きます。<em>高圧：粒子どうしが近いので、粒子の体積が無視できない。</em> <em>低温：粒子の動きが遅くなるので、分子間力の影響が大きくなる。</em>",

    // Real gases and the limits of the model > common mistake > p
    "Do not swap the conditions. “High temperature and low pressure” describes where a gas is <em>most</em> ideal. A quick check: think of where a gas turns into a liquid (cold and squeezed). That is where it is least ideal.": "条件を逆にしないようにしましょう。「高温・低圧」は、気体が<em>最も</em>理想気体に近い条件です。すぐにできる確かめ方があります。気体が液体になるのはどんなときか（冷やして、押し縮めたとき）を考えましょう。そこが、理想気体から最も遠い条件です。",

    // Real gases and the limits of the model > not needed for IB > p
    "No mathematics is required for real gases. You do not need the van der Waals equation, the compressibility factor <i>Z</i>, or any calculation of how far a gas deviates. A reasoned explanation in words is all the IB asks for.": "実在気体では、計算は必要ありません。ファンデルワールスの状態方程式、圧縮因子 <i>Z</i>、気体がどれだけずれるかの計算は、どれも範囲外です。IB が求めるのは、筋道の通った言葉での説明だけです。",

    // Real gases and the limits of the model > data-title attribute
    "Real gases: quick check": "実在気体：確認クイズ",

    // Molar volume of an ideal gas > data-toc attribute
    "Molar volume at STP": "STP でのモル体積",

    // Molar volume of an ideal gas > h2
    "Molar volume of an ideal gas": "理想気体のモル体積",

    // Molar volume of an ideal gas > p
    "Picture a box a little under 30 cm along each side, about the space taken up by four footballs. At 0 °C and 100 kPa, that box holds one mole of gas. It does not matter which gas.": "1 辺が 30 cm 弱の箱を思い浮かべてください。サッカーボール 4 個分くらいの大きさです。0 °C、100 kPa では、この箱に 1 mol の気体が入ります。気体の種類は関係ありません。",

    // Molar volume of an ideal gas > p
    "This follows from Avogadro’s law, which you met in Structure 1.4: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Turn it around: equal numbers of molecules occupy equal volumes.": "これは、Structure 1.4 で学んだアボガドロの法則（Avogadro’s law）から導かれます。同じ温度・同じ圧力のとき、同じ体積の気体は同じ数の分子をふくみます。逆に言えば、同じ数の分子は同じ体積を占めます。",

    // Molar volume of an ideal gas > p
    "The <dfn data-def=\"The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.\">molar volume</dfn>, <i>V</i><sub>m</sub>, is the volume of one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "<dfn data-def=\"理想気体 1 mol が占める体積です。温度と圧力が決まれば、一定の値になります。\">モル体積 <span class=\"en-term\">(molar volume)</span></dfn> <i>V</i><sub>m</sub> は、理想気体 1 mol の体積です。温度と圧力が決まれば、一定の値になります。",

    // Molar volume of an ideal gas > data-def attribute
    "The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "理想気体 1 mol が占める体積です。温度と圧力が決まれば、一定の値になります。",

    // Molar volume of an ideal gas > p
    "<dfn data-def=\"Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.\">STP</dfn> stands for standard temperature and pressure: <span class=\"mono\">273.15 K</span> (0 °C) and <span class=\"mono\">100 kPa</span>. At STP the molar volume of an ideal gas is <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<dfn data-def=\"標準の温度と圧力のことで、273.15 K（0 °C）、100 kPa です。\">標準温度・圧力 <span class=\"en-term\">(STP)</span></dfn>は standard temperature and pressure の略で、<span class=\"mono\">273.15 K</span>（0 °C）、<span class=\"mono\">100 kPa</span> のことです。STP での理想気体のモル体積は <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> です。",

    // Molar volume of an ideal gas > data-def attribute
    "Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.": "標準の温度と圧力のことで、273.15 K（0 °C）、100 kPa です。",

    // Molar volume of an ideal gas > equation > dd
    // The ideal gas equation > equation > dd
    "amount of gas <span class=\"unit\">mol</span>": "気体の物質量 <span class=\"unit\">mol</span>",

    // Molar volume of an ideal gas > equation > dd
    "volume of the gas <span class=\"unit\">dm3</span>": "気体の体積 <span class=\"unit\">dm3</span>",

    // Molar volume of an ideal gas > equation > dt
    "V<sub>m</sub>": "V<sub>m</sub>",

    // Molar volume of an ideal gas > equation > dd
    "molar volume, 22.7 at STP <span class=\"unit\">dm3 mol-1</span>": "モル体積。STP では 22.7 <span class=\"unit\">dm3 mol-1</span>",

    // Molar volume of an ideal gas > data booklet note > p
    "The data booklet gives the molar volume of an ideal gas at STP as <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> (also written <span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span>), with STP defined as 273.15 K and 100 kPa. The relationship <i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> is not printed, so learn it.": "データブックレットには、STP での理想気体のモル体積が <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> と載っています（<span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span> とも書きます）。STP は 273.15 K、100 kPa と定義されています。<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> の関係は載っていないので、覚えましょう。",

    // Molar volume of an ideal gas > widget > data-title attribute
    "How big is a mole of gas at STP?": "STP の気体 1 mol はどれくらいの大きさ？",

    // Molar volume of an ideal gas > widget > data-kicker attribute
    "To scale": "実際の縮尺",

    // Molar volume of an ideal gas > widget > figcaption
    "Move either slider. The shaded cube shows the gas at STP, drawn to the same scale as a football and a 1 dm<sup>3</sup> cube. The amount and the volume always stay in the ratio 22.7 dm<sup>3</sup> for each mole.": "どちらかのスライダーを動かしてみましょう。色のついた立方体は STP での気体です。サッカーボールや 1 dm<sup>3</sup> の立方体と同じ縮尺で描いてあります。物質量と体積の比は、いつも 1 mol あたり 22.7 dm<sup>3</sup> です。",

    // Molar volume of an ideal gas > common mistake > p
    "Older books and many websites use <span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span>. That value is for 0 °C and a pressure of 101.325 kPa (1 atmosphere), which was the older standard pressure. The IB data booklet defines STP as 0 °C and 100 kPa. The pressure is slightly lower, so the gas takes up slightly more space: <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>. Using 22.4 in an IB exam gives a wrong answer.": "古い本や多くのウェブサイトでは、<span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span> を使っています（日本の教科書の 22.4 L/mol も同じ値です）。これは 0 °C、圧力 101.325 kPa（1 気圧）での値で、以前の標準圧力にもとづいています。IB のデータブックレットでは、STP を 0 °C、100 kPa と定義しています。圧力が少し低いので、気体の体積は少し大きくなり、<span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> になります。IB の試験で 22.4 を使うと、答えが間違いになります。",

    // Molar volume of an ideal gas > h3
    // The combined gas law > h3
    // The ideal gas equation > h3
    // Molar mass of a gas from experimental data > h3
    "Method in words": "解き方を言葉で",

    // Molar volume of an ideal gas > li
    "Check the conditions are STP. If they are not, use <i>PV</i> = <i>nRT</i> instead (later on this page).": "条件が STP かどうかを確認します。STP でなければ、代わりに <i>PV</i> = <i>nRT</i> を使います（このページの後半）。",

    // Molar volume of an ideal gas > li
    "Put the volume in dm<sup>3</sup>. To convert from cm<sup>3</sup>, divide by 1000.": "体積を dm<sup>3</sup> にします。cm<sup>3</sup> からは、1000 で割ります。",

    // Molar volume of an ideal gas > li
    "To find amount: <i>n</i> = <i>V</i> ÷ 22.7. To find volume: <i>V</i> = <i>n</i> × 22.7.": "物質量を求めるとき：<i>n</i> = <i>V</i> ÷ 22.7。体積を求めるとき：<i>V</i> = <i>n</i> × 22.7。",

    // Molar volume of an ideal gas > worked example > h3
    "Amount from a gas volume at STP": "STP での気体の体積から物質量を求める",

    // Molar volume of an ideal gas > worked example > p
    "A sample of nitrogen gas occupies 568 cm<sup>3</sup> at STP. Calculate the amount of nitrogen, in mol.": "窒素の気体の試料が、STP で 568 cm<sup>3</sup> を占めています。窒素の物質量を mol で計算しなさい (calculate)。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Convert the volume to dm³": "体積を dm³ に換算する",

    // Molar volume of an ideal gas > worked example > p
    "The molar volume is in dm<sup>3</sup> mol<sup>−1</sup>, so the volume must be in dm<sup>3</sup> too. There are 1000 cm<sup>3</sup> in 1 dm<sup>3</sup>.": "モル体積の単位は dm<sup>3</sup> mol<sup>−1</sup> なので、体積も dm<sup>3</sup> にします。1 dm<sup>3</sup> は 1000 cm<sup>3</sup> です。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Write the relationship": "関係式を書く",

    // Molar volume of an ideal gas > worked example > p
    "The gas is at STP, so one mole occupies 22.7 dm<sup>3</sup>.": "気体は STP にあるので、1 mol は 22.7 dm<sup>3</sup> を占めます。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // widget string (assets/js/widgets-s1-5.js)
    "Substitute with units": "単位をつけて代入する",

    // Molar volume of an ideal gas > worked example > p
    "dm<sup>3</sup> divided by dm<sup>3</sup> mol<sup>−1</sup> leaves mol. The units confirm the method.": "dm<sup>3</sup> を dm<sup>3</sup> mol<sup>−1</sup> で割ると、mol が残ります。単位からも、この解き方が正しいとわかります。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Round to the data": "データに合わせて丸める",

    // Molar volume of an ideal gas > worked example > p
    "568 cm<sup>3</sup> and 22.7 both have 3 significant figures.": "568 cm<sup>3</sup> も 22.7 も、有効数字 3 桁です。",

    // Molar volume of an ideal gas > worked example > p
    "0.0250 mol of N<sub>2</sub>": "N<sub>2</sub> は 0.0250 mol",

    // Molar volume of an ideal gas > try it > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.0420 mol of carbon dioxide at STP.": "STP で 0.0420 mol の二酸化炭素が占める体積を、dm<sup>3</sup> で計算しなさい。",

    // Molar volume of an ideal gas > try it > li
    "At STP, every mole of an ideal gas occupies the same volume. Which data booklet value is that?": "STP では、どの理想気体も 1 mol の体積は同じです。データブックレットのどの値でしょうか。",

    // Molar volume of an ideal gas > try it > li
    "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.953 dm<sup>3</sup></strong>.": "有効数字 3 桁で <strong>0.953 dm<sup>3</sup></strong> です。",

    // Molar volume of an ideal gas > try it > p
    "A balloon contains 1250 cm<sup>3</sup> of helium at STP. Calculate the amount of helium, in mol.": "風船に、STP で 1250 cm<sup>3</sup> のヘリウムが入っています。ヘリウムの物質量を mol で計算しなさい。",

    // Molar volume of an ideal gas > try it > li
    "Convert the volume first: 1250 cm<sup>3</sup> is how many dm<sup>3</sup>?": "まず体積を換算します。1250 cm<sup>3</sup> は何 dm<sup>3</sup> でしょうか。",

    // Molar volume of an ideal gas > try it > li
    "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.0551 mol</strong>.": "有効数字 3 桁で <strong>0.0551 mol</strong> です。",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> works only at STP. If a question gives any other temperature or pressure, such as 25 °C, the molar volume is different and you need <i>PV</i> = <i>nRT</i>.": "22.7 dm<sup>3</sup> mol<sup>−1</sup> が使えるのは、STP のときだけです。25 °C など、ほかの温度や圧力が問題に出てきたら、モル体積は違う値になります。そのときは <i>PV</i> = <i>nRT</i> を使います。",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "The data booklet also lists SATP (standard ambient temperature and pressure): 298.15 K (25 °C) and 100 kPa. It gives no molar volume for SATP, so 22.7 does not apply there. Use <i>PV</i> = <i>nRT</i>.": "データブックレットには SATP（標準環境温度・圧力）も載っています。298.15 K（25 °C）、100 kPa です。SATP でのモル体積は載っていないので、22.7 は使えません。<i>PV</i> = <i>nRT</i> を使いましょう。",

    // Molar volume of an ideal gas > data-title attribute
    "Molar volume: quick check": "モル体積：確認クイズ",

    // How pressure, volume and temperature are related > data-toc attribute
    "P, V and T graphs": "P・V・T のグラフ",

    // How pressure, volume and temperature are related > h2
    "How pressure, volume and temperature are related": "圧力・体積・温度の関係",

    // How pressure, volume and temperature are related > p
    "Push the plunger of a sealed syringe and it pushes back harder. Leave a football outside on a cold night and it goes soft. These are the relationships in this section.": "先をふさいだ注射器のピストンを押すと、押すほど強く押し返されます。サッカーボールを寒い夜に外に置いておくと、やわらかくなります。このセクションで学ぶのは、こうした関係です。",

    // How pressure, volume and temperature are related > p
    "A gas sample is described by four variables: pressure <i>P</i>, volume <i>V</i>, temperature <i>T</i> and amount <i>n</i>. To see how two of them are related, you hold the others constant. A <dfn data-def=\"A sample in which the amount of gas, n, does not change. No gas enters or leaves.\">fixed mass</dfn> of gas means <i>n</i> is constant.": "気体の試料は、圧力 <i>P</i>、体積 <i>V</i>、温度 <i>T</i>、物質量 <i>n</i> の 4 つの変数で表されます。そのうち 2 つの関係を調べるときは、残りを一定に保ちます。<dfn data-def=\"気体の物質量 n が変わらない試料のことです。気体が入ることも出ることもありません。\">一定量 <span class=\"en-term\">(fixed mass)</span></dfn>の気体とは、<i>n</i> が一定という意味です。",

    // How pressure, volume and temperature are related > data-def attribute
    "A sample in which the amount of gas, n, does not change. No gas enters or leaves.": "気体の物質量 n が変わらない試料のことです。気体が入ることも出ることもありません。",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Ideal gas sandbox": "理想気体シミュレーター",

    // How pressure, volume and temperature are related > widget > data-kicker attribute
    "Model": "モデル",

    // How pressure, volume and temperature are related > widget > figcaption
    "Choose an experiment, then drag the highlighted variable or press “Run the experiment”. The pressure is calculated from <i>PV</i> = <i>nRT</i>. In the picture, the particle speed scales with √<i>T</i>, the number of particles with <i>n</i>, and the length of the cylinder with <i>V</i>. The particles are drawn much larger than to scale, and there are far fewer of them than in a real sample.": "実験を選び、色のついた変数をドラッグするか、「実験を実行」を押します。圧力は <i>PV</i> = <i>nRT</i> から計算しています。図では、粒子の速さは √<i>T</i> に、粒子の数は <i>n</i> に、シリンダーの長さは <i>V</i> に合わせて変わります。粒子は実際の縮尺よりずっと大きく描いてあり、数も実際の試料よりはるかに少なくしてあります。",

    // How pressure, volume and temperature are related > h3
    "Pressure and volume (temperature constant)": "圧力と体積（温度が一定）",

    // How pressure, volume and temperature are related > p
    "Squeeze a gas into half the volume and the particles hit the walls twice as often. The pressure doubles.": "気体を半分の体積に押し縮めると、粒子が壁にぶつかる回数は 2 倍になります。圧力は 2 倍になります。",

    // How pressure, volume and temperature are related > p
    "Pressure is <dfn data-def=\"Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.\">inversely proportional</dfn> to volume: <span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>, so <span class=\"mono\"><i>PV</i> = constant</span>. A graph of <i>P</i> against <i>V</i> is a curve. A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin.": "圧力は体積に<dfn data-def=\"一方が 2 倍になると、もう一方が半分になる関係を、反比例といいます。2 つの量の積は一定です。\">反比例 <span class=\"en-term\">(inversely proportional)</span></dfn>します：<span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>。つまり <span class=\"mono\"><i>PV</i> = 一定</span> です。縦軸に <i>P</i>、横軸に <i>V</i> をとったグラフは曲線になります。縦軸に <i>P</i>、横軸に 1/<i>V</i> をとったグラフは、原点を通る直線になります。",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.": "一方が 2 倍になると、もう一方が半分になる関係を、反比例といいます。2 つの量の積は一定です。",

    // How pressure, volume and temperature are related > h3
    "Volume and temperature (pressure constant)": "体積と温度（圧力が一定）",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a container with a freely moving piston. The particles move faster and push the piston out until the pressure inside matches the pressure outside again. The volume increases.": "自由に動くピストンのついた容器で、気体を加熱します。粒子の動きが速くなり、中の圧力が外の圧力とふたたび等しくなるまで、ピストンを押し出します。体積は大きくなります。",

    // How pressure, volume and temperature are related > p
    "Volume is <dfn data-def=\"Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.\">directly proportional</dfn> to the temperature in kelvin: <span class=\"mono\"><i>V</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>V</i>/<i>T</i> = constant</span>. A graph of <i>V</i> against <i>T</i> in kelvin is a straight line through the origin.": "体積は、ケルビンで表した温度に<dfn data-def=\"一方を 2 倍にすると、もう一方も 2 倍になる関係を、比例といいます。グラフは原点を通る直線になります。\">比例 <span class=\"en-term\">(directly proportional)</span></dfn>します：<span class=\"mono\"><i>V</i> ∝ <i>T</i></span>。つまり <span class=\"mono\"><i>V</i>/<i>T</i> = 一定</span> です。縦軸に <i>V</i>、横軸にケルビンで表した <i>T</i> をとったグラフは、原点を通る直線になります。",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.": "一方を 2 倍にすると、もう一方も 2 倍になる関係を、比例といいます。グラフは原点を通る直線になります。",

    // How pressure, volume and temperature are related > p
    "Plot the same data against temperature in °C and you still get a straight line, but it does not pass through the origin. Extend the line backwards (extrapolate) and it reaches zero volume at <span class=\"mono\">−273.15 °C</span>. That temperature is <dfn data-def=\"0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.\">absolute zero</dfn>, 0 K.": "同じデータを、°C で表した温度に対してプロットしても直線になりますが、原点は通りません。直線を左へ延ばす（外挿する：extrapolate）と、<span class=\"mono\">−273.15 °C</span> で体積がゼロになります。この温度が<dfn data-def=\"0 K、つまり −273.15 °C です。これ以上低くならない温度で、理想気体の体積がゼロになるはずの温度です。\">絶対零度 <span class=\"en-term\">(absolute zero)</span></dfn>、0 K です。",

    // How pressure, volume and temperature are related > data-def attribute
    "0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.": "0 K、つまり −273.15 °C です。これ以上低くならない温度で、理想気体の体積がゼロになるはずの温度です。",

    // How pressure, volume and temperature are related > h3
    "Pressure and temperature (volume constant)": "圧力と温度（体積が一定）",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a rigid container. The particles move faster, so they hit the walls harder and more often. The pressure increases.": "変形しないかたい容器で、気体を加熱します。粒子の動きが速くなるので、壁に強く、しかも何度もぶつかるようになります。圧力は大きくなります。",

    // How pressure, volume and temperature are related > p
    "Pressure is directly proportional to the temperature in kelvin: <span class=\"mono\"><i>P</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>P</i>/<i>T</i> = constant</span>. A graph of <i>P</i> against <i>T</i> in kelvin is a straight line through the origin.": "圧力は、ケルビンで表した温度に比例します：<span class=\"mono\"><i>P</i> ∝ <i>T</i></span>。つまり <span class=\"mono\"><i>P</i>/<i>T</i> = 一定</span> です。縦軸に <i>P</i>、横軸にケルビンで表した <i>T</i> をとったグラフは、原点を通る直線になります。",

    // How pressure, volume and temperature are related > table > caption
    "Three relationships for a fixed mass of an ideal gas": "一定量の理想気体についての 3 つの関係",

    // How pressure, volume and temperature are related > table > th
    "Held constant": "一定に保つもの",

    // How pressure, volume and temperature are related > table > th
    "Relationship": "関係",

    // How pressure, volume and temperature are related > table > th
    "What stays the same": "変わらないもの",

    // How pressure, volume and temperature are related > table > th
    "Graph": "グラフ",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ 1/<i>V</i> (inverse)": "<i>P</i> ∝ 1/<i>V</i>（反比例）",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>V</i>: curve. <i>P</i> against 1/<i>V</i>: line through origin.": "縦軸 <i>P</i>・横軸 <i>V</i>：曲線。縦軸 <i>P</i>・横軸 1/<i>V</i>：原点を通る直線。",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "<i>V</i> ∝ <i>T</i>（比例、<i>T</i> は K）",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> against <i>T</i>/K: line through origin.": "縦軸 <i>V</i>・横軸 <i>T</i>/K：原点を通る直線。",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "<i>P</i> ∝ <i>T</i>（比例、<i>T</i> は K）",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>T</i>/K: line through origin.": "縦軸 <i>P</i>・横軸 <i>T</i>/K：原点を通る直線。",

    // How pressure, volume and temperature are related > common mistake > p
    "The direct proportions work only in kelvin. Heating a gas from 20 °C to 40 °C does not double its volume or pressure. In kelvin that is 293 K to 313 K, an increase of about 7 %.": "比例の関係が成り立つのは、ケルビンのときだけです。気体を 20 °C から 40 °C に加熱しても、体積や圧力は 2 倍になりません。ケルビンでは 293 K から 313 K で、約 7 % の増加です。",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Gas-law graphs: the shapes to know": "気体の法則のグラフ：覚えておきたい形",

    // How pressure, volume and temperature are related > widget > figcaption
    "Study the six sketches, then press “Test yourself” and match each relationship to its shape. Notice that <i>PV</i> against <i>P</i> is flat: at constant temperature the product <i>PV</i> does not change.": "6 つのグラフをよく見てから、「自分でテスト」を押して、それぞれの関係に合う形を選びましょう。縦軸 <i>PV</i>・横軸 <i>P</i> のグラフが水平になることに注目してください。温度が一定なら、積 <i>PV</i> は変わりません。",

    // How pressure, volume and temperature are related > exam tip (shown in English + translation) > p
    "When you sketch a graph, label both axes with the quantity and its unit, and make it clear whether a straight line passes through the origin. For <i>V</i> against <i>T</i> in °C, show the line meeting the temperature axis at −273 °C, usually as a dashed extrapolation.": "グラフの概形を描くときは、両方の軸に量と単位を書きます。直線が原点を通るかどうかも、はっきりわかるように描きましょう。縦軸 <i>V</i>・横軸 <i>T</i>（°C）のグラフでは、直線が −273 °C で温度の軸と交わるように描きます。ふつうは破線で外挿します。",

    // How pressure, volume and temperature are related > not needed for IB > p
    "These relationships have historical names (Boyle’s law, Charles’s law, Gay-Lussac’s law). The IB will not assess the names. You need the relationships and their graphs, not who discovered them.": "これらの関係には、歴史的な名前がついています（ボイルの法則、シャルルの法則、ゲイ・リュサックの法則）。IB の試験で名前は問われません。必要なのは関係とグラフで、だれが発見したかではありません。",

    // How pressure, volume and temperature are related > data-title attribute
    "Relationships and graphs: quick check": "関係とグラフ：確認クイズ",

    // The combined gas law > h2
    "The combined gas law": "ボイル・シャルルの法則",

    // The combined gas law > p
    "A weather balloon rises. The air outside gets colder and the pressure drops, both at once. To find the new volume you need one equation that handles pressure, volume and temperature together.": "気象観測用の気球が上がっていきます。外の空気は冷たくなり、圧力も下がります。2 つが同時に変わります。新しい体積を求めるには、圧力・体積・温度をまとめて扱える 1 つの式が必要です。",

    // The combined gas law > p
    "Putting the three relationships together gives the <dfn data-def=\"P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.\">combined gas law</dfn>. It links two sets of conditions for the same sample of gas: state 1 (before) and state 2 (after).": "3 つの関係を 1 つにまとめると、<dfn data-def=\"一定量の気体の条件が状態 1 から状態 2 に変わるとき、P1V1/T1 = P2V2/T2 が成り立ちます。\">ボイル・シャルルの法則 <span class=\"en-term\">(combined gas law)</span></dfn>になります。同じ気体の試料について、2 組の条件を結びつける式です。状態 1（変化の前）と状態 2（変化の後）です。",

    // The combined gas law > data-def attribute
    "P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.": "一定量の気体の条件が状態 1 から状態 2 に変わるとき、P1V1/T1 = P2V2/T2 が成り立ちます。",

    // The combined gas law > equation > dd
    "pressure, same unit on both sides <span class=\"unit\">kPa</span>": "圧力。両辺で同じ単位 <span class=\"unit\">kPa</span>",

    // The combined gas law > equation > dd
    "volume, same unit on both sides <span class=\"unit\">dm3</span>": "体積。両辺で同じ単位 <span class=\"unit\">dm3</span>",

    // The combined gas law > equation > dd
    "temperature, always in kelvin <span class=\"unit\">K</span>": "温度。必ずケルビン <span class=\"unit\">K</span>",

    // The combined gas law > equation > dd
    "before and after the change, for a fixed amount of gas": "変化の前と後（気体の量は一定）",

    // The combined gas law > data booklet note > p
    "The combined gas law is printed in the data booklet. You do not need to memorise it, but you do need to rearrange it.": "ボイル・シャルルの法則（combined gas law）の式は、データブックレットに載っています。暗記する必要はありませんが、式を変形できるようにしておきましょう。",

    // The combined gas law > li
    "List <i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub> and <i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>. Mark the unknown with a question mark.": "<i>P</i><sub>1</sub>、<i>V</i><sub>1</sub>、<i>T</i><sub>1</sub> と <i>P</i><sub>2</sub>、<i>V</i><sub>2</sub>、<i>T</i><sub>2</sub> を書き出します。わからない量には「?」をつけます。",

    // The combined gas law > li
    "Convert both temperatures to kelvin: add 273.15.": "両方の温度をケルビンに換算します。273.15 を足します。",

    // The combined gas law > li
    "Check that the two pressures share a unit and the two volumes share a unit. They do not have to be Pa or m<sup>3</sup>, because the units cancel.": "2 つの圧力の単位が同じか、2 つの体積の単位が同じかを確認します。単位は打ち消し合うので、Pa や m<sup>3</sup> でなくてもかまいません。",

    // The combined gas law > li
    "If a variable is constant, it cancels. Cross it out on both sides.": "一定の変数は打ち消し合います。両辺から線で消しましょう。",

    // The combined gas law > li
    "Rearrange for the unknown, substitute, and round at the end.": "求めたい量について式を変形し、代入して、最後に丸めます。",

    // The combined gas law > li
    "Sense check: did the answer move in the direction you expected?": "答えの確かめ：予想した向きに変化していますか。",

    // The combined gas law > worked example > h3
    "New volume when pressure and temperature both change": "圧力と温度の両方が変わるときの新しい体積",

    // The combined gas law > worked example > p
    "A gas syringe contains 85.0 cm<sup>3</sup> of gas at 22.0 °C and 101 kPa. Calculate the volume of the gas, in cm<sup>3</sup>, at 65.0 °C and 125 kPa.": "気体用シリンジに、22.0 °C、101 kPa で 85.0 cm<sup>3</sup> の気体が入っています。65.0 °C、125 kPa でのこの気体の体積を、cm<sup>3</sup> で計算しなさい (calculate)。",

    // The combined gas law > worked example > data-title attribute
    "List the two states": "2 つの状態を書き出す",

    // The combined gas law > worked example > p
    "Sorting the data first stops you mixing up “before” and “after”.": "先にデータを整理しておくと、「前」と「後」を取り違えません。",

    // The combined gas law > worked example > data-title attribute
    "Convert temperatures to kelvin": "温度をケルビンに換算する",

    // The combined gas law > worked example > p
    "The gas relationships are proportional only on the kelvin scale.": "気体の関係が比例になるのは、ケルビンの温度目盛りのときだけです。",

    // The combined gas law > worked example > data-title attribute
    "Rearrange for V₂": "V₂ について式を変形する",

    // The combined gas law > worked example > p
    "Multiply both sides by <i>T</i><sub>2</sub> and divide by <i>P</i><sub>2</sub> to leave <i>V</i><sub>2</sub> alone.": "両辺に <i>T</i><sub>2</sub> をかけ、<i>P</i><sub>2</sub> で割って、<i>V</i><sub>2</sub> だけを残します。",

    // The combined gas law > worked example > p
    "kPa cancels with kPa and K with K, leaving cm<sup>3</sup>. No conversion to dm<sup>3</sup> is needed here.": "kPa は kPa と、K は K と打ち消し合い、cm<sup>3</sup> が残ります。ここでは dm<sup>3</sup> に換算する必要はありません。",

    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    "Round and sense check": "丸めて、答えを確かめる",

    // The combined gas law > worked example > data-label attribute
    // The ideal gas equation > worked example > data-label attribute
    "Check": "確かめ",

    // The combined gas law > worked example > p
    "Heating makes the gas expand, but the larger pressure squeezes it more. A slightly smaller volume is reasonable. The data have 3 significant figures.": "加熱すると気体は膨張しますが、圧力が大きくなった分、強く押し縮められます。体積が少し小さくなるのは、もっともな結果です。データは有効数字 3 桁です。",

    // The combined gas law > worked example > p
    "78.7 cm<sup>3</sup>": "78.7 cm<sup>3</sup>",

    // The combined gas law > try it > p
    "A gas occupies 2.40 dm<sup>3</sup> at 15.0 °C. It is heated to 80.0 °C at constant pressure. Calculate the new volume, in dm<sup>3</sup>.": "ある気体が、15.0 °C で 2.40 dm<sup>3</sup> を占めています。圧力を一定にして、80.0 °C まで加熱します。新しい体積を dm<sup>3</sup> で計算しなさい。",

    // The combined gas law > try it > li
    "The pressure is constant, so <i>P</i> cancels. You are left with <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>. What must you do to the temperatures first?": "圧力が一定なので、<i>P</i> は打ち消し合います。残るのは <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> です。温度には、まず何をする必要がありますか。",

    // The combined gas law > try it > li
    "<i>T</i><sub>1</sub> = 288.15 K and <i>T</i><sub>2</sub> = 353.15 K. Then <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>.": "<i>T</i><sub>1</sub> = 288.15 K、<i>T</i><sub>2</sub> = 353.15 K です。次に <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>。",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>2.94 dm<sup>3</sup></strong>. If you got 12.8 dm<sup>3</sup>, you used °C.": "有効数字 3 桁で <strong>2.94 dm<sup>3</sup></strong> です。12.8 dm<sup>3</sup> になった場合は、°C のまま計算しています。",

    // The combined gas law > try it > p
    "A sealed, rigid steel container holds gas at 310 kPa and 20.0 °C. It is left in the sun and warms to 55.0 °C. Calculate the new pressure, in kPa.": "密閉された、変形しない鋼鉄の容器に、310 kPa、20.0 °C の気体が入っています。日なたに置かれて、55.0 °C まで温まりました。新しい圧力を kPa で計算しなさい。",

    // The combined gas law > try it > li
    "Rigid means the volume is constant, so <i>V</i> cancels: <i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>.": "容器が変形しないので、体積は一定です。だから <i>V</i> は打ち消し合います：<i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>。",

    // The combined gas law > try it > li
    "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>.": "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>.",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>347 kPa</strong>.": "有効数字 3 桁で <strong>347 kPa</strong> です。",

    // The combined gas law > common mistake > p
    "The combined gas law is only for a fixed amount of gas. If gas is added or escapes between the two states, <i>n</i> has changed and you need <i>PV</i> = <i>nRT</i> for each state.": "ボイル・シャルルの法則が使えるのは、気体の量が一定のときだけです。2 つの状態の間で気体を加えたり、気体がもれたりすると、<i>n</i> が変わります。その場合は、それぞれの状態に <i>PV</i> = <i>nRT</i> を使います。",

    // The combined gas law > data-title attribute
    "Combined gas law: quick check": "ボイル・シャルルの法則：確認クイズ",

    // The ideal gas equation > data-toc attribute
    "PV = nRT": "PV = nRT",

    // The ideal gas equation > h2
    "The ideal gas equation": "理想気体の状態方程式",

    // The ideal gas equation > p
    "The combined gas law compares a gas before and after a change. Often you have only one set of conditions and want to know how much gas is there. For that you need the <dfn data-def=\"PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.\">ideal gas equation</dfn>.": "ボイル・シャルルの法則は、変化の前と後の気体を比べる式です。しかし、条件が 1 組しかなく、気体がどれだけあるかを知りたいこともよくあります。そのときに使うのが、<dfn data-def=\"PV = nRT。理想気体の圧力、体積、物質量、温度を結びつける式です。\">理想気体の状態方程式 <span class=\"en-term\">(ideal gas equation)</span></dfn>です。",

    // The ideal gas equation > data-def attribute
    "PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.": "PV = nRT。理想気体の圧力、体積、物質量、温度を結びつける式です。",

    // The ideal gas equation > equation > dd
    "pressure <span class=\"unit\">Pa</span> (or kPa)": "圧力 <span class=\"unit\">Pa</span>（または kPa）",

    // The ideal gas equation > equation > dd
    "volume <span class=\"unit\">m3</span> (or dm<sup>3</sup> with kPa)": "体積 <span class=\"unit\">m3</span>（kPa を使うときは dm<sup>3</sup>）",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "気体定数、8.31 <span class=\"unit\">J K-1 mol-1</span>",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "temperature <span class=\"unit\">K</span>": "温度 <span class=\"unit\">K</span>",

    // The ideal gas equation > data booklet note > p
    "The equation <i>PV</i> = <i>nRT</i> and the value <span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> are both in the data booklet.": "<i>PV</i> = <i>nRT</i> の式と、<span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> の値は、どちらもデータブックレットに載っています。",

    // The ideal gas equation > h3
    "Units: the part that costs the most marks": "単位：いちばん点を落としやすいところ",

    // The ideal gas equation > p
    "<i>R</i> is given in joules. So the product <i>P</i> × <i>V</i> must come out in joules too. Two pairs of units do this.": "<i>R</i> の単位にはジュールが入っています。だから、<i>P</i> × <i>V</i> の積もジュールにならなければいけません。そうなる単位の組み合わせは 2 つあります。",

    // The ideal gas equation > table > caption
    "Two consistent unit sets for PV = nRT, both with R = 8.31 J K⁻¹ mol⁻¹": "PV = nRT で使える、つじつまの合う 2 組の単位（どちらも R = 8.31 J K⁻¹ mol⁻¹）",

    // The ideal gas equation > table > th
    "Set": "組",

    // The ideal gas equation > table > th
    "Pressure": "圧力",

    // The ideal gas equation > table > th
    "Volume": "体積",

    // The ideal gas equation > table > th
    "Why P × V is in joules": "P × V がジュールになる理由",

    // The ideal gas equation > table > th
    "SI base": "SI 単位",

    // The ideal gas equation > table > td
    "Pa": "Pa",

    // The ideal gas equation > table > td
    "1 Pa = 1 N m<sup>−2</sup>, so Pa × m<sup>3</sup> = N m = J": "1 Pa = 1 N m<sup>−2</sup> なので、Pa × m<sup>3</sup> = N m = J",

    // The ideal gas equation > table > th
    "Lab-sized": "実験室サイズ",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "kPa": "kPa",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "dm<sup>3</sup>": "dm<sup>3</sup>",

    // The ideal gas equation > table > td
    "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J": "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J",

    // The ideal gas equation > p
    "In the second set the factor of 1000 in kPa cancels the factor of 1/1000 in dm<sup>3</sup>. Both sets give the same answer. Choose one set and convert everything into it before you substitute.": "2 組目では、kPa の 1000 倍と dm<sup>3</sup> の 1/1000 倍が打ち消し合います。どちらの組でも答えは同じです。どちらか 1 組を選び、代入する前に、すべてをその単位に換算しましょう。",

    // The ideal gas equation > table > caption
    "Conversions you will use every time": "毎回使う単位の換算",

    // The ideal gas equation > table > th
    "From": "換算前",

    // The ideal gas equation > table > th
    "To": "換算後",

    // The ideal gas equation > table > th
    "Do this": "やり方",

    // The ideal gas equation > table > th
    "Example": "例",

    // The ideal gas equation > table > td
    "add 273.15": "273.15 を足す",

    // The ideal gas equation > table > th
    "cm<sup>3</sup>": "cm<sup>3</sup>",

    // The ideal gas equation > table > td
    "divide by 1000": "1000 で割る",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>": "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>",

    // The ideal gas equation > table > td
    "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>": "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>",

    // The ideal gas equation > table > td
    "divide by 1 000 000": "1 000 000 で割る",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>": "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>",

    // The ideal gas equation > table > td
    "multiply by 1000": "1000 をかける",

    // The ideal gas equation > table > td
    "101 kPa = 1.01 × 10<sup>5</sup> Pa": "101 kPa = 1.01 × 10<sup>5</sup> Pa",

    // The ideal gas equation > li
    "List what you know (<i>P</i>, <i>V</i>, <i>n</i>, <i>T</i>) and mark the unknown.": "わかっている量（<i>P</i>、<i>V</i>、<i>n</i>、<i>T</i>）を書き出し、求める量に印をつけます。",

    // The ideal gas equation > li
    "Convert: <i>T</i> to K. Then either <i>P</i> to kPa and <i>V</i> to dm<sup>3</sup>, or <i>P</i> to Pa and <i>V</i> to m<sup>3</sup>.": "換算します。<i>T</i> は K にします。そのうえで、<i>P</i> を kPa、<i>V</i> を dm<sup>3</sup> にするか、<i>P</i> を Pa、<i>V</i> を m<sup>3</sup> にします。",

    // The ideal gas equation > li
    "If you have a mass instead of an amount, use <i>n</i> = <i>m</i> ÷ <i>M</i> (from Structure 1.4).": "物質量ではなく質量が与えられているときは、<i>n</i> = <i>m</i> ÷ <i>M</i> を使います（Structure 1.4）。",

    // The ideal gas equation > li
    "Rearrange <i>PV</i> = <i>nRT</i> for the unknown before you put numbers in.": "数値を入れる前に、求める量について <i>PV</i> = <i>nRT</i> を変形します。",

    // The ideal gas equation > li
    "Substitute with units, calculate, and round at the end.": "単位をつけて代入し、計算して、最後に丸めます。",

    // The ideal gas equation > table > caption
    "PV = nRT rearranged for each variable": "PV = nRT を各変数について変形した式",

    // The ideal gas equation > table > th
    "To find": "求める量",

    // The ideal gas equation > table > th
    "Use": "使う式",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "pressure": "圧力",

    // The ideal gas equation > table > td
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i>": "<i>P</i> = <i>nRT</i> ÷ <i>V</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "volume": "体積",

    // The ideal gas equation > table > td
    "<i>V</i> = <i>nRT</i> ÷ <i>P</i>": "<i>V</i> = <i>nRT</i> ÷ <i>P</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "amount": "物質量",

    // The ideal gas equation > table > td
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i>": "<i>n</i> = <i>PV</i> ÷ <i>RT</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "temperature": "温度",

    // The ideal gas equation > table > td
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i>": "<i>T</i> = <i>PV</i> ÷ <i>nR</i>",

    // The ideal gas equation > widget > data-title attribute
    "PV = nRT solver with unit coach": "PV = nRT 計算ツール（単位コーチつき）",

    // The ideal gas equation > widget > figcaption
    "Choose what to find, type the values in the units the question gives, and read the working from top to bottom: conversions first, then the rearrangement, then the substitution. Use it to check your own working, not to replace it.": "求める量を選び、問題に出てきた単位のまま数値を入力します。途中の計算は、上から順に読みましょう。まず単位の換算、次に式の変形、最後に代入です。自分の計算を確かめるために使いましょう。自分で計算する代わりにはしないでください。",

    // The ideal gas equation > worked example > h3
    "Finding a volume with kPa and dm³": "kPa と dm³ で体積を求める",

    // The ideal gas equation > worked example > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.150 mol of carbon dioxide at 25.0 °C and 98.5 kPa.": "25.0 °C、98.5 kPa で 0.150 mol の二酸化炭素が占める体積を、dm<sup>3</sup> で計算しなさい (calculate)。",

    // The ideal gas equation > worked example > data-title attribute
    "List and convert": "書き出して換算する",

    // The ideal gas equation > worked example > p
    "The pressure is already in kPa, so the answer will come out in dm<sup>3</sup>. Only the temperature needs converting.": "圧力はすでに kPa なので、答えは dm<sup>3</sup> で出ます。換算が必要なのは温度だけです。",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for V": "V について式を変形する",

    // The ideal gas equation > worked example > p
    "Divide both sides of <i>PV</i> = <i>nRT</i> by <i>P</i>.": "<i>PV</i> = <i>nRT</i> の両辺を <i>P</i> で割ります。",

    // The ideal gas equation > worked example > p
    "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K leaves J. Then J ÷ kPa gives dm<sup>3</sup>.": "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K で J が残ります。次に J ÷ kPa で dm<sup>3</sup> になります。",

    // The ideal gas equation > worked example > p
    "One mole at STP is 22.7 dm<sup>3</sup>, so 0.150 mol near room conditions should be a few dm<sup>3</sup>. The data have 3 significant figures.": "STP では 1 mol が 22.7 dm<sup>3</sup> です。だから、室温に近い条件の 0.150 mol は数 dm<sup>3</sup> になるはずです。データは有効数字 3 桁です。",

    // The ideal gas equation > worked example > p
    "3.77 dm<sup>3</sup>": "3.77 dm<sup>3</sup>",

    // The ideal gas equation > worked example > h3
    "Finding an amount, then a mass, with Pa and m³": "Pa と m³ で物質量を求め、次に質量を求める",

    // The ideal gas equation > worked example > p
    "A 2.50 dm<sup>3</sup> flask contains oxygen gas, O<sub>2</sub>, at 27.0 °C and 150 kPa. Calculate the mass of oxygen in the flask.": "2.50 dm<sup>3</sup> のフラスコに、27.0 °C、150 kPa の酸素の気体 O<sub>2</sub> が入っています。フラスコ内の酸素の質量を計算しなさい。",

    // The ideal gas equation > worked example > data-title attribute
    "Convert to Pa, m³ and K": "Pa、m³、K に換算する",

    // The ideal gas equation > worked example > p
    "This example uses the SI base set to show that it gives the same kind of answer. You could also keep kPa and dm<sup>3</sup>.": "この例題では SI 単位の組を使い、同じように答えが出ることを確かめます。kPa と dm<sup>3</sup> のままでもかまいません。",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for n": "n について式を変形する",

    // The ideal gas equation > worked example > p
    "You need the amount before you can find a mass. Divide both sides by <i>RT</i>.": "質量を求めるには、先に物質量が必要です。両辺を <i>RT</i> で割ります。",

    // The ideal gas equation > worked example > p
    "Pa × m<sup>3</sup> = J on top. J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup> underneath. J ÷ J mol<sup>−1</sup> leaves mol.": "分子は Pa × m<sup>3</sup> = J。分母は J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup>。J ÷ J mol<sup>−1</sup> で mol が残ります。",

    // The ideal gas equation > worked example > data-title attribute
    "Convert amount to mass": "物質量を質量に変える",

    // The ideal gas equation > worked example > p
    "Oxygen gas is O<sub>2</sub>, so <i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup>. Keep the unrounded value of <i>n</i> in your calculator.": "酸素の気体は O<sub>2</sub> なので、<i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup> です。<i>n</i> は、丸める前の値を電卓に残しておきましょう。",

    // The ideal gas equation > worked example > p
    "The data have 3 significant figures.": "データは有効数字 3 桁です。",

    // The ideal gas equation > worked example > p
    "4.81 g of O<sub>2</sub>": "O<sub>2</sub> は 4.81 g",

    // The ideal gas equation > try it > p
    "Calculate the pressure, in kPa, of 0.250 mol of gas in a 5.00 dm<sup>3</sup> container at 30.0 °C.": "30.0 °C で 5.00 dm<sup>3</sup> の容器に入った 0.250 mol の気体の圧力を、kPa で計算しなさい。",

    // The ideal gas equation > try it > li
    "The volume is in dm<sup>3</sup>, so the pressure will come out in kPa. Convert the temperature to kelvin.": "体積が dm<sup>3</sup> なので、圧力は kPa で出ます。温度をケルビンに換算しましょう。",

    // The ideal gas equation > try it > li
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>.": "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>.",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>126 kPa</strong>.": "有効数字 3 桁で <strong>126 kPa</strong> です。",

    // The ideal gas equation > try it > p
    "0.100 mol of gas occupies 2.00 dm<sup>3</sup> at a pressure of 150 kPa. Calculate the temperature of the gas, in K.": "0.100 mol の気体が、圧力 150 kPa で 2.00 dm<sup>3</sup> を占めています。気体の温度を K で計算しなさい。",

    // The ideal gas equation > try it > li
    "kPa and dm<sup>3</sup> already match, so no conversion is needed. Rearrange <i>PV</i> = <i>nRT</i> for <i>T</i>.": "kPa と dm<sup>3</sup> はすでに合う組なので、換算は必要ありません。<i>PV</i> = <i>nRT</i> を <i>T</i> について変形します。",

    // The ideal gas equation > try it > li
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>.": "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>.",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>361 K</strong>. The equation always gives temperature in kelvin.": "有効数字 3 桁で <strong>361 K</strong> です。この式から出る温度は、いつもケルビンです。",

    // The ideal gas equation > try it > p
    "A gas syringe holds 250 cm<sup>3</sup> of methane, CH<sub>4</sub>, at 18.0 °C and 102 kPa. Calculate the mass of methane, in g.": "気体用シリンジに、18.0 °C、102 kPa で 250 cm<sup>3</sup> のメタン CH<sub>4</sub> が入っています。メタンの質量を g で計算しなさい。",

    // The ideal gas equation > try it > li
    "Two conversions are needed before you start: cm<sup>3</sup> to dm<sup>3</sup> and °C to K.": "始める前に、換算が 2 つ必要です。cm<sup>3</sup> を dm<sup>3</sup> に、°C を K にします。",

    // The ideal gas equation > try it > li
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup>.": "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>。次に <i>m</i> = <i>n</i> × <i>M</i> を使います。<i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup> です。",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>0.169 g</strong>.": "有効数字 3 桁で <strong>0.169 g</strong> です。",

    // The ideal gas equation > common mistake > p
    "The two classic errors are leaving the temperature in °C, and putting cm<sup>3</sup> straight in with kPa. The first gives an answer that is wildly out. The second is out by exactly 1000. If your amount of gas in a small flask comes out as several moles, check your volume unit.": "よくある 2 つの間違いは、温度を °C のままにすることと、kPa を使っているのに cm<sup>3</sup> をそのまま代入することです。1 つ目は、答えが大きくはずれます。2 つ目は、ちょうど 1000 倍ずれます。小さなフラスコの中の気体が数 mol という答えになったら、体積の単位を確認しましょう。",

    // The ideal gas equation > exam tip (shown in English + translation) > p
    "In a 2-mark gas equation question, one mark is usually for correct unit conversions (kelvin, and matching pressure and volume units) and one for the answer. Write the conversions as separate lines so the first mark is safe even if your final answer slips.": "気体の状態方程式を使う 2 点の問題では、ふつう 1 点が正しい単位の換算（ケルビンにすること、圧力と体積の単位を合わせること）、もう 1 点が答えです。換算は 1 行ずつ分けて書きましょう。そうすれば、最後の答えを間違えても、最初の 1 点は守れます。",

    // The ideal gas equation > not needed for IB > p
    "IB uses SI units only for pressure and volume, so you will not meet atm, mmHg, bar or litres in gas questions. Partial pressures (Dalton’s law), Graham’s law of effusion and mole fractions are not in the guide at all. If a textbook chapter turns to those, you can stop.": "IB では圧力と体積に SI 単位だけを使うので、気体の問題に atm、mmHg、bar、リットルは出ません。分圧（ドルトンの法則）、グレアムの流出の法則、モル分率は、『指導の手引き』にまったく出てきません。教科書の章がそうした内容に入ったら、そこでやめてかまいません。",

    // The ideal gas equation > data-title attribute
    "PV = nRT: quick check": "PV = nRT：確認クイズ",

    // Molar mass of a gas from experimental data > data-toc attribute
    "Molar mass from gas data": "気体のデータからモル質量",

    // Molar mass of a gas from experimental data > h2
    "Molar mass of a gas from experimental data": "実験データから求める気体のモル質量",

    // Molar mass of a gas from experimental data > p
    "You have an unknown liquid that evaporates easily (a <dfn data-def=\"A volatile liquid is one that evaporates easily.\">volatile</dfn> liquid). Inject a weighed drop into a warm gas syringe and it turns to vapour. Read the volume, the temperature and the pressure, and you can work out its molar mass.": "蒸発しやすい未知の液体（<dfn data-def=\"揮発性の液体とは、蒸発しやすい液体のことです。\">揮発性 <span class=\"en-term\">(volatile)</span></dfn>の液体）があるとします。質量をはかった 1 滴を、温めた気体用シリンジに注入すると、蒸気になります。体積、温度、圧力を読み取れば、モル質量を求められます。",

    // Molar mass of a gas from experimental data > data-def attribute
    "A volatile liquid is one that evaporates easily.": "揮発性の液体とは、蒸発しやすい液体のことです。",

    // Molar mass of a gas from experimental data > p
    "The idea has two links. The gas equation gives the amount, <i>n</i>. Then molar mass is mass divided by amount.": "考え方は 2 段階です。まず、気体の状態方程式から物質量 <i>n</i> がわかります。次に、モル質量は質量を物質量で割ったものです。",

    // Molar mass of a gas from experimental data > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "モル質量 <span class=\"unit\">g mol-1</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "mass of the gas sample <span class=\"unit\">g</span>": "気体の試料の質量 <span class=\"unit\">g</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "amount of gas, from <i>n</i> = <i>PV</i> ÷ <i>RT</i> <span class=\"unit\">mol</span>": "気体の物質量。<i>n</i> = <i>PV</i> ÷ <i>RT</i> から求める <span class=\"unit\">mol</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "pressure <span class=\"unit\">kPa</span>": "圧力 <span class=\"unit\">kPa</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "volume <span class=\"unit\">dm3</span>": "体積 <span class=\"unit\">dm3</span>",

    // Molar mass of a gas from experimental data > p
    "The combined form <i>M</i> = <i>mRT</i> ÷ <i>PV</i> is not in the data booklet. You do not need to memorise it. Working in two steps (find <i>n</i>, then <i>M</i> = <i>m</i> ÷ <i>n</i>) is safer and shows your method.": "1 つにまとめた式 <i>M</i> = <i>mRT</i> ÷ <i>PV</i> は、データブックレットに載っていません。暗記する必要はありません。2 段階で解く（<i>n</i> を求めてから <i>M</i> = <i>m</i> ÷ <i>n</i>）ほうが安全で、解き方も採点者に伝わります。",

    // Molar mass of a gas from experimental data > li
    "Convert <i>T</i> to K, and <i>P</i> and <i>V</i> to a matching pair (kPa with dm<sup>3</sup>).": "<i>T</i> を K に換算し、<i>P</i> と <i>V</i> を合う組（kPa と dm<sup>3</sup>）にします。",

    // Molar mass of a gas from experimental data > li
    "Find the amount of gas: <i>n</i> = <i>PV</i> ÷ <i>RT</i>.": "気体の物質量を求めます：<i>n</i> = <i>PV</i> ÷ <i>RT</i>。",

    // Molar mass of a gas from experimental data > li
    "Find the molar mass: <i>M</i> = <i>m</i> ÷ <i>n</i>, with the mass in g.": "モル質量を求めます：<i>M</i> = <i>m</i> ÷ <i>n</i>。質量は g を使います。",

    // Molar mass of a gas from experimental data > li
    "If you also know the empirical formula, divide <i>M</i> by the empirical formula mass to find how many empirical units make one molecule.": "組成式（empirical formula）もわかっているときは、<i>M</i> を組成式の式量で割ります。すると、1 分子が組成式の単位いくつ分でできているかがわかります。",

    // Molar mass of a gas from experimental data > worked example > h3
    "Molar mass of a volatile liquid": "揮発性の液体のモル質量",

    // Molar mass of a gas from experimental data > worked example > p
    "0.180 g of a volatile liquid is injected into a gas syringe kept at 100.0 °C. It vaporises completely and the vapour occupies 95.1 cm<sup>3</sup> at 101 kPa. Calculate the molar mass of the liquid.": "揮発性の液体 0.180 g を、100.0 °C に保った気体用シリンジに注入します。液体は完全に気化し、蒸気は 101 kPa で 95.1 cm<sup>3</sup> を占めました。この液体のモル質量を計算しなさい (calculate)。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the units": "単位を換算する",

    // Molar mass of a gas from experimental data > worked example > p
    "With the pressure in kPa, the volume must be in dm<sup>3</sup>. The temperature must be in kelvin.": "圧力が kPa なので、体積は dm<sup>3</sup> にします。温度はケルビンにします。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of vapour": "蒸気の物質量を求める",

    // Molar mass of a gas from experimental data > worked example > p
    "The gas equation counts the moles of vapour without needing to know what the substance is.": "気体の状態方程式を使えば、物質が何かわからなくても、蒸気が何 mol あるかを求められます。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Divide mass by amount": "質量を物質量で割る",

    // Molar mass of a gas from experimental data > worked example > p
    "Molar mass is the mass of one mole, so it is grams divided by moles.": "モル質量は 1 mol あたりの質量なので、グラムをモルで割ります。",

    // Molar mass of a gas from experimental data > worked example > p
    "The mass, volume and pressure have 3 significant figures.": "質量、体積、圧力は有効数字 3 桁です。",

    // Molar mass of a gas from experimental data > worked example > p
    "58.1 g mol<sup>−1</sup>": "58.1 g mol<sup>−1</sup>",

    // Molar mass of a gas from experimental data > worked example > h3
    "From percentage composition and gas data to a molecular formula": "質量百分率組成と気体のデータから分子式へ",

    // Molar mass of a gas from experimental data > worked example > p
    "A hydrocarbon contains 85.6 % carbon and 14.4 % hydrogen by mass. A 0.500 g sample of the gas occupies 221 cm<sup>3</sup> at 25.0 °C and 100 kPa. Determine the molecular formula of the hydrocarbon.": "ある炭化水素は、質量で炭素 85.6 %、水素 14.4 % をふくみます。この気体の試料 0.500 g は、25.0 °C、100 kPa で 221 cm<sup>3</sup> を占めます。この炭化水素の分子式を求めなさい (determine)。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the empirical formula": "組成式を求める",

    // Molar mass of a gas from experimental data > worked example > p
    "This is the Structure 1.4 method: imagine 100 g, divide each mass by <i>A</i><sub>r</sub>, then divide by the smallest.": "Structure 1.4 の方法です。100 g あると考え、それぞれの質量を <i>A</i><sub>r</sub> で割り、いちばん小さい値で割ります。",

    // Molar mass of a gas from experimental data > worked example > maths line
    "ratio H : C = 14.25… ÷ 7.127… = 2.00, so the empirical formula is CH<sub>2</sub>": "比 H : C = 14.25… ÷ 7.127… = 2.00 なので、組成式は CH<sub>2</sub>",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the gas data": "気体のデータを換算する",

    // Molar mass of a gas from experimental data > worked example > p
    "kPa needs dm<sup>3</sup>, and the temperature must be in kelvin.": "kPa には dm<sup>3</sup> を使い、温度はケルビンにします。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of gas": "気体の物質量を求める",

    // Molar mass of a gas from experimental data > worked example > p
    "The conditions are not STP, so use the gas equation, not 22.7.": "条件は STP ではないので、22.7 ではなく気体の状態方程式を使います。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the molar mass": "モル質量を求める",

    // Molar mass of a gas from experimental data > worked example > p
    "Mass divided by amount.": "質量を物質量で割ります。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Compare with the empirical formula mass": "組成式の式量と比べる",

    // Molar mass of a gas from experimental data > worked example > p
    "The molecular formula is a whole-number multiple of the empirical formula. Experimental data rarely give an exact whole number, so round to the nearest one.": "分子式は、組成式の整数倍です。実験データからちょうど整数が出ることはめったにないので、いちばん近い整数に丸めます。",

    // Molar mass of a gas from experimental data > worked example > maths line
    "molecular formula = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>": "分子式 = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>",

    // Molar mass of a gas from experimental data > try it > p
    "1.26 g of a gas occupies 0.750 dm<sup>3</sup> at 20.0 °C and 96.0 kPa. Calculate the molar mass of the gas.": "ある気体 1.26 g が、20.0 °C、96.0 kPa で 0.750 dm<sup>3</sup> を占めています。この気体のモル質量を計算しなさい。",

    // Molar mass of a gas from experimental data > try it > li
    "Find the amount of gas first with <i>n</i> = <i>PV</i> ÷ <i>RT</i>. Remember kelvin.": "まず <i>n</i> = <i>PV</i> ÷ <i>RT</i> で気体の物質量を求めます。ケルビンを忘れずに。",

    // Molar mass of a gas from experimental data > try it > li
    "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>. Then <i>M</i> = 1.26 g ÷ <i>n</i>.": "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>。次に <i>M</i> = 1.26 g ÷ <i>n</i>。",

    // Molar mass of a gas from experimental data > try it > p
    "To 3 significant figures: <strong>42.6 g mol<sup>−1</sup></strong>.": "有効数字 3 桁で <strong>42.6 g mol<sup>−1</sup></strong> です。",

    // Molar mass of a gas from experimental data > h3
    "Gas density uses the same idea": "気体の密度も同じ考え方",

    // Molar mass of a gas from experimental data > p
    "Density is mass divided by volume. If a question gives the density of a gas, it has given you the mass of a known volume. For example, a density of 1.25 g dm<sup>−3</sup> means 1.25 g occupies 1.00 dm<sup>3</sup>. Put those two values into the method above. There is no new formula to learn.": "密度は、質量を体積で割ったものです。問題に気体の密度が書いてあれば、決まった体積の気体の質量がわかっているのと同じです。たとえば、密度 1.25 g dm<sup>−3</sup> は、1.25 g が 1.00 dm<sup>3</sup> を占めるという意味です。この 2 つの値を、上の解き方に入れましょう。新しく覚える式はありません。",

    // Molar mass of a gas from experimental data > exam tip (shown in English + translation) > p
    "These questions are often chained: empirical formula in one part, molar mass from gas data in the next, molecular formula at the end. Each part is marked with “error carried forward”. If an earlier answer is wrong but you use it correctly afterwards, you still earn the later marks. So keep going, and show every line.": "この種の問題は、小問がつながっていることがよくあります。最初の小問で組成式、次の小問で気体のデータからモル質量、最後に分子式です。それぞれの小問は「誤りの持ち越し」を認めて採点されます。前の答えが間違っていても、そのあとで正しく使っていれば、後の点はもらえます。だから、途中でやめずに進み、計算を 1 行ずつすべて書きましょう。",

    // Molar mass of a gas from experimental data > common mistake > p
    "Do not use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount unless the gas is at STP. Vapour in a syringe at 100 °C takes up much more space per mole than that.": "気体が STP にないときは、物質量を求めるのに 22.7 dm<sup>3</sup> mol<sup>−1</sup> を使ってはいけません。100 °C のシリンジの中の蒸気は、1 mol あたり、それよりずっと大きな体積を占めます。",

    // Molar mass of a gas from experimental data > data-title attribute
    "Molar mass from gas data: quick check": "気体のデータからモル質量：確認クイズ",

    // Linking it up > h2
    "Linking it up": "つなげて考える",

    // Linking it up > p
    "The IB guide asks linking questions that connect this topic to others. Short answers to four of them:": "IB の『指導の手引き』には、このトピックをほかのトピックと結びつける「つながりの問い」（linking question）があります。そのうち 4 つに、短く答えます。",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most?": "アボガドロの法則は理想気体に当てはまります。実在気体が最も大きくずれるのは、どんな条件でしょうか。",

    // Linking it up > p
    "At low temperature and high pressure. There the particles are slow and close together, so intermolecular forces and the volume of the particles are no longer negligible. Under those conditions, equal volumes of two real gases may not contain exactly equal numbers of molecules.": "低温・高圧のときです。粒子が遅く、たがいに近いので、分子間力と粒子の体積が無視できなくなります。この条件では、同じ体積の 2 種類の実在気体が、ちょうど同じ数の分子をふくむとは限りません。",

    // Linking it up > h3
    "Under comparable conditions, why do some gases deviate more than others?": "同じような条件でも、ほかの気体より大きくずれる気体があるのはなぜでしょうか。",

    // Linking it up > p
    "Gases whose particles attract each other more strongly deviate more, because the “no intermolecular forces” assumption fits them less well. Larger particles also make the “negligible volume” assumption less accurate. Structure 2.2 explains why some molecules attract more strongly than others.": "粒子どうしが強く引き合う気体ほど、ずれが大きくなります。「分子間力がはたらかない」という仮定が当てはまりにくいからです。また、粒子が大きいと、「体積は無視できるほど小さい」という仮定も正確でなくなります。分子によって引き合う強さが違う理由は、Structure 2.2 で学びます。",

    // Linking it up > h3
    "Graphs can be sketches or accurately plotted points. What are the advantages and limitations of each?": "グラフには、概形を描いたものと、正確に点をプロットしたものがあります。それぞれの長所と限界は何でしょうか。",

    // Linking it up > p
    "A sketch shows the shape of a relationship quickly: curve or line, through the origin or not. It carries no scale, so you cannot read values from it. Plotted data points let you find a gradient or an intercept, judge the scatter and spot anomalous results, and extrapolate (for example to absolute zero). They take longer, and they are only as reliable as the measurements and the range that was measured.": "概形のグラフ（sketch）は、関係の形をすばやく示せます。曲線か直線か、原点を通るかどうかがわかります。ただし目盛りがないので、値は読み取れません。データの点をプロットしたグラフでは、傾きや切片を求めたり、ばらつきを判断して異常な結果を見つけたり、外挿したり（たとえば絶対零度まで）できます。そのかわり、時間がかかります。また、グラフの信頼性は、測定の確かさと、測定した範囲で決まります。",

    // Linking it up > h3
    "How can the ideal gas law be used to find the molar mass of a gas from experimental data?": "理想気体の状態方程式を使って、実験データから気体のモル質量を求めるには、どうすればよいでしょうか。",

    // Linking it up > p
    "Measure the mass, pressure, volume and temperature of a gas sample. Use <i>n</i> = <i>PV</i> ÷ <i>RT</i> to find the amount, then <i>M</i> = <i>m</i> ÷ <i>n</i>. The result assumes the gas behaves ideally, so it is most accurate at high temperature and low pressure.": "気体の試料の質量、圧力、体積、温度を測定します。<i>n</i> = <i>PV</i> ÷ <i>RT</i> で物質量を求め、次に <i>M</i> = <i>m</i> ÷ <i>n</i> を使います。この結果は、気体が理想気体としてふるまうと仮定しています。そのため、高温・低圧のときに最も正確になります。",

    // Exam-style practice > h2
    "Exam-style practice": "試験形式の練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. All questions are original and stay inside the syllabus. Have your data booklet and calculator ready.": "最初の一歩から力試しまで、3 つのセットがあります。問題はすべてオリジナルで、シラバスの範囲内です。データブックレットと電卓を用意しましょう。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：一度に 1 つの考え方",

    // Exam-style practice > data-title attribute
    "1.5 foundation": "1.5 基礎",

    // Exam-style practice > h3
    "Exam standard": "試験レベル",

    // Exam-style practice > data-title attribute
    "1.5 exam standard": "1.5 試験レベル",

    // Exam-style practice > h3
    "Challenge: multi-step and unfamiliar contexts": "チャレンジ：複数ステップの問題と、初めて見る場面",

    // Exam-style practice > data-title attribute
    "1.5 challenge": "1.5 チャレンジ",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature and amount are held constant. Move the volume slider.": "温度と物質量は一定です。体積のスライダーを動かしましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume and amount are held constant (a rigid container). Move the temperature slider.": "体積と物質量は一定です（変形しない容器）。温度のスライダーを動かしましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure is held at {P} kPa and the amount at {n} mol. The piston is free to move. Move the temperature slider.": "圧力は {P} kPa、物質量は {n} mol に保たれています。ピストンは自由に動きます。温度のスライダーを動かしましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "Experiment": "実験",

    // widget string (assets/js/widgets-s1-5.js)
    "P against V (T and n constant)": "縦軸 P・横軸 V（T と n が一定）",

    // widget string (assets/js/widgets-s1-5.js)
    "P against T (V and n constant)": "縦軸 P・横軸 T（V と n が一定）",

    // widget string (assets/js/widgets-s1-5.js)
    "V against T (P and n constant)": "縦軸 V・横軸 T（P と n が一定）",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, T": "温度 T",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, V": "体積 V",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas, n": "気体の物質量 n",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause particles": "粒子を止める",

    // widget string (assets/js/widgets-s1-5.js)
    "Run the experiment": "実験を実行",

    // widget string (assets/js/widgets-s1-5.js)
    "Clear graph": "グラフを消す",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, P": "圧力 P",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, n": "物質量 n",

    // widget string (assets/js/widgets-s1-5.js)
    "PV ÷ nT": "PV ÷ nT",

    // widget string (assets/js/widgets-s1-5.js)
    "This experiment": "この実験",

    // widget string (assets/js/widgets-s1-5.js)
    "Left: a cylinder of gas particles closed by a piston. Right: a graph of the two variables in the chosen experiment, traced as you move the slider. All values are in the readout below.": "左：ピストンで閉じたシリンダーの中の気体粒子。右：選んだ実験の 2 つの変数のグラフ。スライダーを動かすと線が描かれます。すべての値は下の表示にあります。",

    // widget string (assets/js/widgets-s1-5.js)
    "volume / {unit}": "体積 / {unit}",

    // widget string (assets/js/widgets-s1-5.js)
    "Model of the gas": "気体のモデル",

    // widget string (assets/js/widgets-s1-5.js)
    "piston": "ピストン",

    // widget string (assets/js/widgets-s1-5.js)
    "extrapolated to {T} K": "{T} K まで外挿",

    // widget string (assets/js/widgets-s1-5.js)
    "Play particles": "粒子を動かす",

    // widget string (assets/js/widgets-s1-5.js)
    "The grey line is your previous run.": "灰色の線は前回の実験です。",

    // widget string (assets/js/widgets-s1-5.js)
    "a curve that falls steeply at first and then levels off, never touching either axis": "最初は急に下がり、だんだんゆるやかになる曲線。どちらの軸にも触れない",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line through the origin": "原点を通る直線",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line that does not pass through the origin; extended back, it meets the horizontal axis at a negative value": "原点を通らない直線。左へ延ばすと、横軸と負の値で交わる",

    // widget string (assets/js/widgets-s1-5.js)
    "a horizontal straight line": "水平な直線",

    // widget string (assets/js/widgets-s1-5.js)
    "T and n constant": "T と n が一定",

    // widget string (assets/js/widgets-s1-5.js)
    "P is inversely proportional to V. Doubling V halves P.": "P は V に反比例します。V を 2 倍にすると、P は半分になります。",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to 1/V, so this plot turns the curve into a straight line.": "P は 1/V に比例します。だから、こうプロットすると曲線が直線に変わります。",

    // widget string (assets/js/widgets-s1-5.js)
    "P and n constant": "P と n が一定",

    // widget string (assets/js/widgets-s1-5.js)
    "V is directly proportional to T in kelvin. Zero volume would be reached at 0 K.": "V は、ケルビンで表した T に比例します。0 K で体積がゼロになるはずです。",

    // widget string (assets/js/widgets-s1-5.js)
    "Still a straight line, but 0 °C is not zero on the kelvin scale. Extended back, the line reaches V = 0 at {T} °C.": "直線のままですが、0 °C はケルビン目盛りのゼロではありません。左へ延ばすと、直線は {T} °C で V = 0 になります。",

    // widget string (assets/js/widgets-s1-5.js)
    "V and n constant": "V と n が一定",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to T in kelvin.": "P は、ケルビンで表した T に比例します。",

    // widget string (assets/js/widgets-s1-5.js)
    "PV = nRT. With n and T fixed, PV stays the same whatever the pressure.": "PV = nRT。n と T が一定なら、圧力がいくらでも PV は変わりません。",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph of {y} against {x}: {shape}": "縦軸 {y}・横軸 {x} のグラフの概形：{shape}",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph: {shape}": "グラフの概形：{shape}",

    // widget string (assets/js/widgets-s1-5.js)
    "negative": "負",

    // widget string (assets/js/widgets-s1-5.js)
    "Matching exercise": "形を合わせる練習",

    // widget string (assets/js/widgets-s1-5.js)
    "{y} against {x}": "縦軸 {y}・横軸 {x}",

    // widget string (assets/js/widgets-s1-5.js)
    "Shape {letter}": "形 {letter}",

    // widget string (assets/js/widgets-s1-5.js)
    "Each relationship below is for a fixed mass of an ideal gas. Choose the shape of its graph. A shape can be used more than once.": "下の関係は、どれも一定量の理想気体についてのものです。それぞれのグラフの形を選びましょう。同じ形を何度使ってもかまいません。",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape": "形を選ぶ",

    // widget string (assets/js/widgets-s1-5.js)
    "Check my matches": "答え合わせ",

    // widget string (assets/js/widgets-s1-5.js)
    "Not answered yet.": "まだ答えていません。",

    // widget string (assets/js/widgets-s1-5.js)
    "Correct. {why}": "正解。{why}",

    // widget string (assets/js/widgets-s1-5.js)
    "Not this shape. Ask: is it direct or inverse proportion, and is the horizontal axis zero at the origin?": "この形ではありません。考えてみましょう。比例ですか、反比例ですか。横軸のゼロは原点にありますか。",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. All matched. Open the labelled gallery to see them together.": "{total} 問中 {right} 問正解。全部合いました。ラベルつきの一覧を開いて、まとめて見てみましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct ({blank} not answered). Change your choices and check again.": "{total} 問中 {right} 問正解（未回答 {blank} 問）。選び直して、もう一度答え合わせをしましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. Change your choices and check again.": "{total} 問中 {right} 問正解。選び直して、もう一度答え合わせをしましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "Test yourself: match the shapes": "自分でテスト：形を合わせる",

    // widget string (assets/js/widgets-s1-5.js)
    "Show the labelled gallery": "ラベルつきの一覧を見る",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape for each relationship, then press Check.": "それぞれの関係に形を選んでから、「答え合わせ」を押しましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "Study the six graphs, then test yourself.": "6 つのグラフをよく見てから、自分でテストしましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "Find": "求める量",

    // widget string (assets/js/widgets-s1-5.js)
    "pressure, P": "圧力 P",

    // widget string (assets/js/widgets-s1-5.js)
    "volume, V": "体積 V",

    // widget string (assets/js/widgets-s1-5.js)
    "temperature, T": "温度 T",

    // widget string (assets/js/widgets-s1-5.js)
    "amount, n": "物質量 n",

    // widget string (assets/js/widgets-s1-5.js)
    "mass, m (formula known)": "質量 m（化学式がわかっている）",

    // widget string (assets/js/widgets-s1-5.js)
    "molar mass, M (mass known)": "モル質量 M（質量がわかっている）",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas given as": "気体の量の与えられ方",

    // widget string (assets/js/widgets-s1-5.js)
    "amount in mol": "物質量（mol）",

    // widget string (assets/js/widgets-s1-5.js)
    "mass in g and a formula": "質量（g）と化学式",

    // widget string (assets/js/widgets-s1-5.js)
    "Work in": "使う単位",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} and {v}": "{p} と {v}",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit for {quantity}": "{quantity}の単位",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, {sym}": "圧力 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, {sym}": "体積 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, {sym}": "温度 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, {sym}": "物質量 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Mass, {sym}": "質量 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "mass": "質量",

    // widget string (assets/js/widgets-s1-5.js)
    "Formula of the gas": "気体の化学式",

    // widget string (assets/js/widgets-s1-5.js)
    "formula": "化学式",

    // widget string (assets/js/widgets-s1-5.js)
    "Answer": "答え",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit check": "単位の確認",

    // widget string (assets/js/widgets-s1-5.js)
    "(already in {unit})": "（すでに {unit}）",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a pressure greater than zero.": "ゼロより大きい圧力を入力してください。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a volume greater than zero.": "ゼロより大きい体積を入力してください。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a temperature.": "温度を入力してください。",

    // widget string (assets/js/widgets-s1-5.js)
    "The temperature must be above absolute zero (0 K, {T} °C).": "温度は絶対零度（0 K、{T} °C）より高くなければなりません。",

    // widget string (assets/js/widgets-s1-5.js)
    "Type a formula using element symbols up to krypton, such as {a} or {b}.": "クリプトンまでの元素記号を使って、{a} や {b} のように化学式を入力してください。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a mass greater than zero.": "ゼロより大きい質量を入力してください。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter an amount greater than zero.": "ゼロより大きい物質量を入力してください。",

    // widget string (assets/js/widgets-s1-5.js)
    "Waiting for valid values.": "正しい値が入力されるのを待っています。",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq}": "次に {eq}",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq} (the same as {eq2})": "次に {eq}（{eq2} と同じ）",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too big.": "<b>温度が °C のまま。</b>{right} K の代わりに {wrong} を使うと、答えが約 {factor} 倍に大きくなってしまいます。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too small.": "<b>温度が °C のまま。</b>{right} K の代わりに {wrong} を使うと、答えが約 {factor} 分の 1 に小さくなってしまいます。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} °C directly would give a zero or negative answer, which is impossible. Always add 273.15 first.": "<b>温度が °C のまま。</b>{wrong} °C をそのまま使うと、答えがゼロか負になり、ありえない値になります。必ず先に 273.15 を足しましょう。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too big. 1 {dm3} = 1000 {cm3}.": "<b>{cm3} を {dm3} のつもりで使う。</b>kPa と一緒に {value} をそのまま代入すると、答えが 1000 倍に大きくなってしまいます。1 {dm3} = 1000 {cm3} です。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too small. 1 {dm3} = 1000 {cm3}.": "<b>{cm3} を {dm3} のつもりで使う。</b>kPa と一緒に {value} をそのまま代入すると、答えが 1000 分の 1 に小さくなってしまいます。1 {dm3} = 1000 {cm3} です。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Mixed unit sets.</b> kPa goes with {dm3}, and Pa goes with {m3}. Pairing kPa with {m3}, or Pa with {dm3}, puts the answer out by a factor of 1000.": "<b>単位の組が混ざる。</b>kPa には {dm3}、Pa には {m3} を組み合わせます。kPa と {m3}、または Pa と {dm3} を組み合わせると、答えが 1000 倍ずれます。",

    // widget string (assets/js/widgets-s1-5.js)
    "Convert to the units you chose": "選んだ単位に換算する",

    // widget string (assets/js/widgets-s1-5.js)
    "Rearrange {eq}": "{eq} を変形する",

    // widget string (assets/js/widgets-s1-5.js)
    "({n} significant figures)": "（有効数字 {n} 桁）",

    // widget string (assets/js/widgets-s1-5.js)
    "In an exam, round to the smallest number of significant figures in the data you were given.": "試験では、与えられたデータの中で最も少ない有効数字の桁数に合わせて丸めます。",

    // widget string (assets/js/widgets-s1-5.js)
    "Classic errors to avoid here": "ここで気をつけたい、よくある間違い",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} {times} {v} = J, so it matches R in {Runit}.": "{p} {times} {v} = J なので、{Runit} で表した R と合います。",

    // widget string (assets/js/widgets-s1-5.js)
    "small particles, weak forces (for example helium)": "小さい粒子、弱い力（例：ヘリウム）",

    // widget string (assets/js/widgets-s1-5.js)
    "larger particles, stronger forces (for example ammonia)": "大きめの粒子、強めの力（例：アンモニア）",

    // widget string (assets/js/widgets-s1-5.js)
    "Type of gas": "気体の種類",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature (0 = very low, 100 = very high)": "温度（0 = とても低い、100 = とても高い）",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure (0 = very low, 100 = very high)": "圧力（0 = とても低い、100 = とても高い）",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause": "一時停止",

    // widget string (assets/js/widgets-s1-5.js)
    "Most ideal conditions": "最も理想気体に近い条件",

    // widget string (assets/js/widgets-s1-5.js)
    "Least ideal conditions": "最も理想気体から遠い条件",

    // widget string (assets/js/widgets-s1-5.js)
    "How close to ideal?": "理想気体にどれくらい近い？",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume": "粒子の体積",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces": "分子間力",

    // widget string (assets/js/widgets-s1-5.js)
    "Remember": "覚えておこう",

    // widget string (assets/js/widgets-s1-5.js)
    "Far from ideal": "理想気体から遠い",

    // widget string (assets/js/widgets-s1-5.js)
    "Noticeably non-ideal": "はっきりずれている",

    // widget string (assets/js/widgets-s1-5.js)
    "Fairly close to ideal": "かなり理想気体に近い",

    // widget string (assets/js/widgets-s1-5.js)
    "Very close to ideal": "理想気体にとても近い",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are far apart": "無視できる：粒子どうしが遠い",

    // widget string (assets/js/widgets-s1-5.js)
    "starting to matter": "影響が出はじめている",

    // widget string (assets/js/widgets-s1-5.js)
    "significant: particles are crowded": "無視できない：粒子が混み合っている",

    // widget string (assets/js/widgets-s1-5.js)
    "a large share of the space": "空間の大きな割合を占める",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are fast and far apart": "無視できる：粒子が速く、遠い",

    // widget string (assets/js/widgets-s1-5.js)
    "significant": "無視できない",

    // widget string (assets/js/widgets-s1-5.js)
    "strong effect: particles are slow and close": "強く影響する：粒子が遅く、近い",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume matters": "粒子の体積の影響",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces matter": "分子間力の影響",

    // widget string (assets/js/widgets-s1-5.js)
    "Close to ideal behaviour": "理想気体への近さ",

    // widget string (assets/js/widgets-s1-5.js)
    "hardly ↔ a lot": "ほとんどない ↔ 大きい",

    // widget string (assets/js/widgets-s1-5.js)
    "not at all ↔ very": "まったく近くない ↔ とても近い",

    // widget string (assets/js/widgets-s1-5.js)
    "This picture is a qualitative illustration. The bars are not calculated from any gas equation, and particle sizes are exaggerated.": "この図は定性的なイメージです。棒の長さは気体の式から計算したものではありません。粒子の大きさも誇張してあります。",

    // widget string (assets/js/widgets-s1-5.js)
    "A box of gas particles. Higher pressure makes the box smaller so the particles are crowded. Lower temperature makes them slower, and dashed lines show attractions between close neighbours. Three bars below show how much particle volume and intermolecular forces matter and how close the gas is to ideal behaviour.": "気体粒子の入った箱。圧力が高いほど箱が小さくなり、粒子が混み合います。温度が低いほど粒子が遅くなり、近くの粒子どうしの引力が破線で示されます。下の 3 本の棒は、粒子の体積と分子間力がどれだけ影響するか、そして気体がどれだけ理想気体のふるまいに近いかを示します。",

    // widget string (assets/js/widgets-s1-5.js)
    "volume at low pressure": "低圧のときの体積",

    // widget string (assets/js/widgets-s1-5.js)
    "Play": "再生",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP, V": "STP での体積 V",

    // widget string (assets/js/widgets-s1-5.js)
    "{n} mol": "{n} mol",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP": "STP での体積",

    // widget string (assets/js/widgets-s1-5.js)
    "Cube side": "立方体の 1 辺",

    // widget string (assets/js/widgets-s1-5.js)
    "Working": "途中の計算",

    // widget string (assets/js/widgets-s1-5.js)
    "A cube holding the chosen amount of gas at STP, drawn to scale beside a football about 22 centimetres across and a 1 cubic decimetre cube. The values are in the readout below.": "選んだ物質量の気体を STP で入れた立方体。直径約 22 センチメートルのサッカーボールと、1 立方デシメートルの立方体の横に、同じ縮尺で描いてあります。値は下の表示にあります。",

    // widget string (assets/js/widgets-s1-5.js)
    "gas at STP": "STP の気体",

    // widget string (assets/js/widgets-s1-5.js)
    "football": "サッカーボール",

    // widget string (assets/js/widgets-s1-5.js)
    "scale: {length} cm": "縮尺：{length} cm",

    // widget string (assets/js/widgets-s1-5.js)
    "{working}. The same for any ideal gas: {examples}.": "{working}。どの理想気体でも同じです：{examples}。",

  }
});
