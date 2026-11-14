/* lab-separation — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-separation', {
  strings: {

    // page title (browser tab)
    "Lab 1 Separating and purifying mixtures | Structure Lab": "実験 1 混合物の分離と精製 | Structure Lab",

    // Separating and purifying mixtures > page header > p
    "Lab 1 · Structure 1.1": "実験 1 · Structure 1.1",

    // Separating and purifying mixtures > page header > h1
    "Separating and purifying mixtures": "混合物の分離と精製",

    // Separating and purifying mixtures > page header > span
    "How do you decide on a way to separate a mixture, and how can you tell whether the product you get is pure?": "混合物を分ける方法はどう決めればよいでしょうか。また、得られた生成物が純粋かどうかは、どうすればわかるでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "This lab practises skills from Structure 1.1.1 and Tool 1. You will choose techniques for several mixtures, purify a solid by recrystallization, and check how pure it is. Tick each item when you can do it without help.": "この実験では、Structure 1.1.1 とツール 1 のスキルを練習します。いくつかの混合物について分離法を選び、再結晶で固体を精製し、その純度を確かめます。助けなしでできるようになったら、チェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Choose a separation technique from the states of the parts of a mixture and a physical property that differs between them.": "混合物の成分の状態と、成分のあいだで違う物理的性質をもとに、分離法を選ぶ。",

    // What you need to be able to do > checklist > span
    "Plan a sequence of steps to separate a soluble solid from an insoluble one, including drying both products.": "溶ける固体と溶けない固体を分ける手順を、両方の生成物を乾燥させるところまで計画する。",

    // What you need to be able to do > checklist > span
    "Describe recrystallization and give the reason for each key step.": "再結晶を記述し、それぞれの重要なステップの理由を言える。",

    // What you need to be able to do > checklist > span
    "Predict how a change in the method affects the yield and the purity of the product.": "方法を変えると、生成物の回収量と純度がどう変わるかを予測する。",

    // What you need to be able to do > checklist > span
    "Use a melting range to judge whether a solid is pure.": "融点範囲を使って、固体が純粋かどうかを判断する。",

    // What you need to be able to do > checklist > span
    "Calculate a percentage recovery and its uncertainty from mass readings.": "質量の測定値から、回収率とその不確かさを計算する。",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors and suggest realistic improvements.": "偶然誤差と系統誤差を見分け、現実的な改善策を提案する。",

    // The chemistry behind it > data-toc attribute
    "Background": "背景",

    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "A mixture can be separated by physical methods because its parts are not chemically bonded. Each technique uses one physical property that is different for the parts: solubility, particle size or boiling point. The full table of techniques is in <a href=\"../topics/s1-1.html#separating\">Structure 1.1: separating mixtures</a>.": "混合物は、成分どうしが化学的に結合していないので、物理的な方法で分けられます。どの分離法も、成分のあいだで違う物理的性質を 1 つ使います。溶けやすさ、粒子の大きさ、沸点のどれかです。分離法の一覧表は <a href=\"../topics/s1-1.html#separating\">Structure 1.1：混合物の分離</a>にあります。",

    // The chemistry behind it > p
    "Chemists also need to <strong>purify</strong> products. A solid made in a reaction usually contains small amounts of other substances. <dfn data-def=\"A technique that purifies a solid: dissolve it in the minimum volume of hot solvent, filter hot, cool to form crystals, filter, rinse with cold solvent and dry.\">Recrystallization</dfn> works when the product is much more soluble in a hot solvent than in the same solvent when cold.": "化学者は、生成物を<strong>精製</strong>する必要もあります。反応でできた固体には、ふつう、ほかの物質が少し混ざっています。<dfn data-def=\"固体を精製する方法。できるだけ少ない量の熱い溶媒に溶かし、熱いうちにろ過し、冷やして結晶をつくり、ろ過し、冷たい溶媒ですすいで乾燥させる。\">再結晶 <span class=\"en-term\">(recrystallization)</span></dfn>は、生成物が冷たい溶媒よりも、同じ溶媒の熱いものにずっとよく溶けるときに使えます。",

    // The chemistry behind it > data-def attribute
    "A technique that purifies a solid: dissolve it in the minimum volume of hot solvent, filter hot, cool to form crystals, filter, rinse with cold solvent and dry.": "固体を精製する方法。できるだけ少ない量の熱い溶媒に溶かし、熱いうちにろ過し、冷やして結晶をつくり、ろ過し、冷たい溶媒ですすいで乾燥させる。",

    // The chemistry behind it > table > caption
    "Approximate solubility of benzoic acid in water": "水に対する安息香酸のおおよその溶解度",

    // The chemistry behind it > table > th
    "Temperature / °C": "温度 / °C",

    // The chemistry behind it > table > th
    "Mass that dissolves in 100 cm<sup>3</sup> of water / g": "水 100 cm<sup>3</sup> に溶ける質量 / g",

    // The chemistry behind it > table > th
    "5 (ice bath)": "5（氷浴）",

    // The chemistry behind it > table > th
    "20 (room temperature)": "20（室温）",

    // The chemistry behind it > table > th
    "95 (nearly boiling)": "95（沸騰直前）",

    // The chemistry behind it > p
    "So hot water can dissolve about 20 times as much benzoic acid as cold water. A small amount of a soluble impurity stays dissolved when the solution cools, because there is too little of it to saturate the cold water. An insoluble impurity, such as sand, never dissolves, so it can be filtered off while the solution is hot.": "つまり、熱い水には、冷たい水の約 20 倍の安息香酸が溶けます。溶ける不純物が少しだけ含まれていても、溶液を冷やしたときに溶けたまま残ります。量が少なすぎて、冷たい水を飽和させられないからです。砂のような溶けない不純物は決して溶けないので、溶液が熱いうちにろ過して取り除けます。",

    // The chemistry behind it > key idea > p
    "A pure solid melts at a fixed temperature, over a narrow range of about 1 °C. Impurities lower the melting point and make it melt over a wider range. So a melting point is a quick check of purity, as well as of identity.": "純粋な固体は決まった温度で、約 1 °C のせまい範囲で融解します。不純物があると融点が下がり、融解する温度の範囲が広がります。だから融点は、物質が何かを確かめるだけでなく、純度をすばやく確かめる手段にもなります。",

    // The chemistry behind it > p
    "Chromatography is the other technique in Structure 1.1.1. It has its own practical: <a href=\"lab-chromatography.html\">Lab 2: Paper and thin-layer chromatography</a>.": "クロマトグラフィーは、Structure 1.1.1 にあるもう 1 つの分離法です。専用の実験があります：<a href=\"lab-chromatography.html\">実験 2：ペーパークロマトグラフィーと薄層クロマトグラフィー</a>。",

    // The chemistry behind it > not needed for IB > p
    "You do not need fractional distillation columns, separating funnels, sublimation or mixed melting points. You also do not need to explain why impurities lower a melting point in any depth. A percentage recovery is not a percentage yield: yields from reactions come later, in Reactivity 2.1.": "分留塔、分液ろうと、昇華、混融試験は必要ありません。不純物で融点が下がる理由をくわしく説明する必要もありません。回収率は収率とは違います。反応の収率は、あとの Reactivity 2.1 で学びます。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to purify a sample of impure benzoic acid by recrystallization from water, find the percentage recovery, and use the melting range to judge the purity of the product.": "<strong>目的：</strong>不純物を含む安息香酸の試料を、水を使った再結晶で精製し、回収率を求め、融点範囲から生成物の純度を判断する。",

    // Aim, variables and safety > p
    "The impure sample contains about 91 % benzoic acid, with some sand and a small amount of a soluble impurity.": "不純物を含む試料は、約 91 % が安息香酸で、砂と、少量の溶ける不純物を含んでいます。",

    // Aim, variables and safety > table > caption
    "Variables in the recrystallization investigation": "再結晶の実験の変数",

    // Aim, variables and safety > table > th
    "Type": "種類",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "測定方法・一定に保つ方法",

    // Aim, variables and safety > table > th
    "Independent": "独立変数",

    // Aim, variables and safety > table > td
    "volume of hot water used (in other runs: the cooling method)": "使う熱い水の体積（ほかの回では冷やし方）",

    // Aim, variables and safety > table > td
    "measuring cylinder, ±1 cm<sup>3</sup>": "メスシリンダー、±1 cm<sup>3</sup>",

    // Aim, variables and safety > table > th
    "Dependent": "従属変数",

    // Aim, variables and safety > table > td
    "percentage recovery of benzoic acid": "安息香酸の回収率",

    // Aim, variables and safety > table > td
    "masses on a balance, ±0.01 g": "電子てんびんで測る質量、±0.01 g",

    // Aim, variables and safety > table > td
    "melting range of the product": "生成物の融点範囲",

    // Aim, variables and safety > table > td
    "melting point apparatus, ±0.5 °C": "融点測定装置、±0.5 °C",

    // Aim, variables and safety > table > th
    "Controlled": "制御変数",

    // Aim, variables and safety > table > td
    "mass and batch of impure sample": "不純物を含む試料の質量とロット",

    // Aim, variables and safety > table > td
    "about 2 g from the same bottle": "同じびんから約 2 g",

    // Aim, variables and safety > table > td
    "temperature of the hot water and of the ice bath": "熱い水と氷浴の温度",

    // Aim, variables and safety > table > td
    "nearly boiling (about 95 °C); ice bath about 5 °C": "沸騰直前（約 95 °C）。氷浴は約 5 °C",

    // Aim, variables and safety > table > td
    "rinse and drying": "すすぎと乾燥",

    // Aim, variables and safety > table > td
    "same small volume of ice-cold water; dry to constant mass": "同じ少量の氷冷した水。質量が一定になるまで乾燥させる",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "impure benzoic acid, about 2 g": "不純物を含む安息香酸、約 2 g",

    // Aim, variables and safety > li
    "distilled water": "蒸留水",

    // Aim, variables and safety > li
    "two 100 cm<sup>3</sup> beakers and a glass rod": "100 cm<sup>3</sup> ビーカー 2 個とガラス棒",

    // Aim, variables and safety > li
    "hot plate": "ホットプレート",

    // Aim, variables and safety > li
    // Uncertainties > table > th
    "50 cm<sup>3</sup> measuring cylinder": "50 cm<sup>3</sup> メスシリンダー",

    // Aim, variables and safety > li
    "stemless filter funnel, fluted filter paper, conical flask": "脚のないろうと、ひだ折りろ紙、三角フラスコ",

    // Aim, variables and safety > li
    "ice bath": "氷浴",

    // Aim, variables and safety > li
    "second funnel and filter paper (or a Büchner funnel with suction)": "2 つ目のろうととろ紙（またはブフナーろうとと吸引装置）",

    // Aim, variables and safety > li
    "watch glass and spatula": "時計皿と薬さじ",

    // Aim, variables and safety > li
    "balance reading to 0.01 g": "0.01 g まで読める電子てんびん",

    // Aim, variables and safety > li
    "melting point apparatus with thermometer, capillary tubes": "温度計つきの融点測定装置、毛細管",

    // Aim, variables and safety > li
    "low-temperature oven or desiccator": "低温の乾燥器またはデシケーター",

    // Aim, variables and safety > p
    "Wear eye protection throughout. Benzoic acid causes serious eye irritation and its dust irritates the nose and throat: do not make dust, and wash your hands afterwards.": "実験のあいだずっと保護めがねを着けましょう。安息香酸は目に強い刺激を与え、その粉は鼻やのどを刺激します。粉を舞い上げないようにし、実験のあとは手を洗いましょう。",

    // Aim, variables and safety > p
    "Nearly boiling water scalds. Move hot beakers with tongs or heat-resistant gloves, and remember the hot plate stays hot after it is switched off. The melting point block goes above 120 °C: do not touch it, and let it cool before you change capillaries. Capillary tubes are thin glass: put broken ones in the glass bin, not the ordinary bin.": "沸騰直前の水はやけどの原因になります。熱いビーカーはトングか耐熱手袋で動かしましょう。ホットプレートは、スイッチを切ったあともしばらく熱いままです。融点測定装置の加熱ブロックは 120 °C を超えます。さわらないようにし、毛細管を取りかえる前に冷ましましょう。毛細管は細いガラスです。割れたものは、ふつうのごみ箱ではなく、ガラス用のごみ箱に捨てましょう。",

    // Aim, variables and safety > p
    "If your teacher shows a distillation of ethanol and water, ethanol is highly flammable: heat it with an electric heater or water bath, never a naked flame, with anti-bumping granules in the flask.": "先生がエタノールと水の蒸留を見せる場合、エタノールは非常に燃えやすいので注意が必要です。直火は使わず、電気ヒーターか水浴で加熱し、フラスコには沸騰石を入れます。",

    // Method > h2
    // widget string (assets/js/widgets-lab-separation.js)
    "Method": "方法",

    // Method > h3
    "Part A: recrystallization": "パート A：再結晶",

    // Method > li
    "Weigh about 2 g of impure benzoic acid into a 100 cm<sup>3</sup> beaker. Record the mass to 0.01 g.": "不純物を含む安息香酸約 2 g を、100 cm<sup>3</sup> ビーカーにはかり取ります。質量を 0.01 g まで記録します。",

    // Method > li
    "Heat about 60 cm<sup>3</sup> of distilled water on the hot plate until it nearly boils.": "蒸留水約 60 cm<sup>3</sup> を、ホットプレートで沸騰直前まで加熱します。",

    // Method > li
    "Add the hot water to the solid in small portions, stirring and keeping it hot, until the benzoic acid has just dissolved. The sand will not dissolve. Record the volume used. <em>Why:</em> the less solvent you use, the less product stays dissolved when the solution cools.": "熱い水を少しずつ固体に加え、かき混ぜながら熱いまま保ちます。安息香酸がちょうど溶けきったところでやめます。砂は溶けません。使った体積を記録します。<em>理由：</em>溶媒が少ないほど、溶液を冷やしたときに溶けたまま残る生成物が少なくなります。",

    // Method > li
    "Add a few cm<sup>3</sup> more hot water (about one tenth extra). <em>Why:</em> a solution that is exactly saturated starts to crystallize in the funnel as it cools slightly.": "熱い水をあと数 cm<sup>3</sup>（約 10 分の 1 の量）加えます。<em>理由：</em>ちょうど飽和した溶液は、少し冷えるだけでろうとの中で結晶ができはじめるからです。",

    // Method > li
    "Filter the hot solution through fluted filter paper in a warm, stemless funnel. <em>Why:</em> this removes insoluble impurities such as sand. A warm funnel with no stem gives the solution little chance to cool before it passes through.": "熱い溶液を、温めた脚のないろうとにのせたひだ折りろ紙でろ過します。<em>理由：</em>砂のような溶けない不純物を取り除くためです。温めた脚のないろうとなら、溶液が通り抜ける前に冷える機会がほとんどありません。",

    // Method > li
    "Cover the filtrate and let it cool slowly to room temperature, then stand it in an ice bath for 10 minutes. <em>Why:</em> slow cooling gives larger crystals that trap less impurity; the ice bath makes more of the product crystallize.": "ろ液にふたをして、室温までゆっくり冷まします。そのあと、氷浴に 10 分間つけます。<em>理由：</em>ゆっくり冷やすと大きな結晶ができ、不純物を取りこみにくくなります。氷浴で冷やすと、より多くの生成物が結晶になります。",

    // Method > li
    "Filter to collect the crystals. Rinse them with a small volume of ice-cold water. <em>Why:</em> the rinse washes away the solution that contains the soluble impurity. Warm water would dissolve some of the crystals.": "ろ過して結晶を集めます。少量の氷冷した水で結晶をすすぎます。<em>理由：</em>すすぐと、溶ける不純物を含む溶液が洗い流されます。温かい水では結晶の一部が溶けてしまいます。",

    // Method > li
    "Dry the crystals on a weighed watch glass in a low-temperature oven or a desiccator. Weigh, dry again and reweigh until two masses agree (constant mass). <em>Why:</em> any water left in the product adds to its mass.": "質量をはかった時計皿に結晶をのせ、低温の乾燥器かデシケーターで乾燥させます。質量をはかり、また乾燥させてはかりなおし、2 回の質量が一致するまで（質量が一定になるまで）くり返します。<em>理由：</em>生成物に水が残っていると、その分だけ質量が大きくなるからです。",

    // Method > h3
    "Part B: melting point": "パート B：融点",

    // Method > li
    "Grind a little of the dry product. Press the open end of a capillary tube into it and tap the tube until there is 2–3 mm of tightly packed solid at the bottom.": "乾燥した生成物を少しすりつぶします。毛細管の開いた端を押しつけて試料を入れ、管をたたいて、底に 2–3 mm の固体がかたく詰まるようにします。",

    // Method > li
    "Heat the block quickly to about 110 °C, then slowly, at 1–2 °C per minute. <em>Why:</em> if you heat fast, the thermometer gets ahead of the sample.": "加熱ブロックを約 110 °C まですばやく加熱し、そのあとは 1 分あたり 1–2 °C でゆっくり加熱します。<em>理由：</em>速く加熱すると、温度計の示す温度が試料の温度より先に上がってしまうからです。",

    // Method > li
    "Record the temperature when liquid first appears and when the last solid disappears. This is the melting range.": "液体が最初に見えたときの温度と、最後の固体が消えたときの温度を記録します。これが融点範囲です。",

    // Method > li
    "Repeat with the impure starting material and with pure benzoic acid, so you can compare all three.": "もとの不純物を含む試料と、純粋な安息香酸でも同じことをして、3 つをくらべます。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > h3
    "1. Choose a technique": "1. 分離法を選ぶ",

    // Run the experiment > p
    "Start by matching techniques to mixtures. For each mixture, think about which part you want to keep and which property differs, then try a technique. Wrong choices are useful: see where each part ends up.": "まず、混合物に合う分離法を選びましょう。それぞれの混合物について、どの成分を残したいのか、どの性質が違うのかを考えてから、分離法を試します。間違った選び方も役に立ちます。それぞれの成分がどこに行くかを見てみましょう。",

    // Run the experiment > widget > data-title attribute
    "Separation bench": "分離の実験台",

    // Run the experiment > widget > figcaption
    "Choose a mixture and a technique, then press Try it. The boxes show where each part ends up; a dashed box means it is lost. Notice that evaporation and distillation use the same property, but only distillation keeps the liquid.": "混合物と分離法を選び、「試す」を押します。それぞれの成分がどこに行くかが枠に表示されます。破線の枠は、その成分が失われることを表します。蒸発と蒸留は同じ性質を使いますが、液体を残せるのは蒸留だけであることに注目しましょう。",

    // Run the experiment > h3
    "2. Recrystallize the impure benzoic acid": "2. 不純物を含む安息香酸を再結晶する",

    // Run the experiment > p
    "Do a first run with the method as written. Then change one thing at a time and compare the recovery and what the crystals look like. Each run uses a new sample of about 2 g, so the masses change slightly from run to run.": "まず、書かれた方法どおりに 1 回行います。次に、1 回に 1 つずつ条件を変えて、回収率と結晶の見た目をくらべましょう。毎回、約 2 g の新しい試料を使うので、質量は回ごとに少しずつ違います。",

    // Run the experiment > widget > data-title attribute
    // widget string (assets/js/widgets-lab-separation.js)
    "Recrystallization": "再結晶",

    // Run the experiment > widget > figcaption
    "Set the method and press Run recrystallization. The graph shows why the volume matters: the dashed line is the concentration of your hot solution, and only the part above the solubility curve at the final temperature crystallizes. Copy the raw data into your notebook. The masses are model data.": "方法を設定し、「再結晶を行う」を押します。グラフを見ると、体積が大事な理由がわかります。破線は熱い溶液の濃度で、最後の温度での溶解度曲線より上の部分だけが結晶になります。生データをノートに写しましょう。質量はモデルのデータです。",

    // Run the experiment > h3
    "3. Test the purity": "3. 純度を調べる",

    // Run the experiment > p
    "Products from your runs appear in the sample list. Compare one of them with the impure sample and with pure benzoic acid. Press the buttons at the moment you see each change.": "実験でできた生成物は、試料の一覧に表示されます。そのどれかを、不純物を含む試料や純粋な安息香酸とくらべましょう。それぞれの変化が見えた瞬間にボタンを押します。",

    // Run the experiment > widget > data-title attribute
    "Melting point apparatus": "融点測定装置",

    // Run the experiment > widget > figcaption
    "Press Start heating and watch the sample. Press \"Melting starts now\" when liquid first appears and \"Fully melted now\" when the last solid goes. Try the fast heating setting too, and compare the ranges. The readout describes the sample in words.": "「加熱を始める」を押し、試料をよく見ます。液体が最初に見えたら「融解が始まった」を、最後の固体が消えたら「すべて融解した」を押します。速く加熱する設定も試して、範囲をくらべましょう。表示欄には試料のようすが言葉で示されます。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > p
    "The percentage recovery tells you how much of the starting material you got back as product. Find the mass of product by difference, then compare it with the mass you started with.": "回収率から、もとの物質のうちどれだけを生成物として取り戻せたかがわかります。生成物の質量を差から求め、最初の質量とくらべます。",

    // Processing the data > equation > maths line
    "percentage recovery = <span class=\"frac\"><span><i>m</i><sub>p</sub></span><span><i>m</i><sub>s</sub></span></span> × 100": "回収率 = <span class=\"frac\"><span><i>m</i><sub>p</sub></span><span><i>m</i><sub>s</sub></span></span> × 100",

    // Processing the data > equation > dt
    "m<sub>p</sub>": "m<sub>p</sub>",

    // Processing the data > equation > dd
    "mass of dry product <span class=\"unit\">g</span>": "乾燥した生成物の質量 <span class=\"unit\">g</span>",

    // Processing the data > equation > dt
    "m<sub>s</sub>": "m<sub>s</sub>",

    // Processing the data > equation > dd
    "mass of impure sample at the start <span class=\"unit\">g</span>": "最初の不純物を含む試料の質量 <span class=\"unit\">g</span>",

    // Processing the data > worked example > data-kicker attribute
    "Worked example": "例題",

    // Processing the data > worked example > h3
    "Percentage recovery and purity from one run": "1 回の実験から回収率と純度を求める",

    // Processing the data > worked example > p
    "A student recrystallized 2.04 g of impure benzoic acid. The empty watch glass had a mass of 24.36 g. The watch glass with the dry product had a mass of 25.87 g. The product melted at 120.0–121.5 °C. The literature melting point of benzoic acid is 122 °C. Calculate the percentage recovery and comment on the purity.": "ある生徒が、不純物を含む安息香酸 2.04 g を再結晶しました。空の時計皿の質量は 24.36 g でした。乾燥した生成物をのせた時計皿の質量は 25.87 g でした。生成物は 120.0–121.5 °C で融解しました。安息香酸の融点の文献値は 122 °C です。回収率を計算し、純度についてコメントしなさい。",

    // Processing the data > worked example > data-title attribute
    "Find the mass of product": "生成物の質量を求める",

    // Processing the data > worked example > p
    "The product was weighed on the watch glass, so subtract the mass of the glass.": "生成物は時計皿にのせてはかったので、時計皿の質量を引きます。",

    // Processing the data > worked example > maths line
    "<i>m</i>(product) = 25.87 g − 24.36 g = 1.51 g": "<i>m</i>(生成物) = 25.87 g − 24.36 g = 1.51 g",

    // Processing the data > worked example > data-title attribute
    "Divide by the starting mass": "最初の質量で割る",

    // Processing the data > worked example > p
    "Recovery compares what you got back with what you started with.": "回収率は、取り戻せた量を、最初の量とくらべたものです。",

    // Processing the data > worked example > maths line
    "recovery = (1.51 g / 2.04 g) × 100 = 74.0196… %": "回収率 = (1.51 g / 2.04 g) × 100 = 74.0196… %",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "データに合わせて丸める",

    // Processing the data > worked example > p
    "Both masses have 3 significant figures.": "どちらの質量も有効数字 3 桁です。",

    // Processing the data > worked example > maths line
    "recovery = <b>74.0 %</b>": "回収率 = <b>74.0 %</b>",

    // Processing the data > worked example > data-title attribute
    "Interpret the melting range": "融点範囲を解釈する",

    // Processing the data > worked example > p
    "A pure solid melts sharply at its literature value; impurities lower and widen the range.": "純粋な固体は、文献値ではっきりと融解します。不純物があると、範囲は低くなり、広がります。",

    // Processing the data > worked example > p
    "The range is 1.5 °C wide and ends 0.5 °C below 122 °C. The product is much purer than the starting material, but it may still hold a trace of impurity.": "範囲の幅は 1.5 °C で、122 °C より 0.5 °C 低いところで終わっています。生成物はもとの物質よりずっと純粋ですが、まだごくわずかな不純物を含んでいるかもしれません。",

    // Processing the data > worked example > p
    "Percentage recovery = 74.0 %. The narrow melting range close to 122 °C shows the product is nearly pure.": "回収率 = 74.0 %。融点範囲がせまく 122 °C に近いので、生成物はほぼ純粋です。",

    // Processing the data > try it > data-label attribute
    "Percentage recovery": "回収率",

    // Processing the data > try it > p
    "Another student starts with 3.12 g of impure benzoic acid. The empty watch glass has a mass of 25.08 g, and 27.66 g with the dry product. Calculate the percentage recovery.": "別の生徒は、不純物を含む安息香酸 3.12 g から始めました。空の時計皿の質量は 25.08 g、乾燥した生成物をのせると 27.66 g でした。回収率を計算しなさい。",

    // Processing the data > try it > li
    "First find the mass of product by difference.": "まず、差から生成物の質量を求めます。",

    // Processing the data > try it > li
    "The product has a mass of 2.58 g. Divide by 3.12 g and multiply by 100.": "生成物の質量は 2.58 g です。3.12 g で割って、100 をかけます。",

    // Processing the data > try it > maths line
    "<i>m</i>(product) = 27.66 g − 25.08 g = 2.58 g": "<i>m</i>(生成物) = 27.66 g − 25.08 g = 2.58 g",

    // Processing the data > try it > maths line
    "recovery = (2.58 g / 3.12 g) × 100 = 82.7 %": "回収率 = (2.58 g / 3.12 g) × 100 = 82.7 %",

    // Processing the data > common mistake > p
    "A recovery close to or above 100 % is not good news. Some product is always lost, so a very high value usually means the product was still wet, or contains an impurity such as sand.": "回収率が 100 % に近い、または 100 % を超えるのは、よい知らせではありません。生成物はいつも少しは失われるので、とても高い値は、ふつう、生成物がまだぬれていたか、砂のような不純物を含んでいることを意味します。",

    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > table > caption
    "Uncertainty of each reading": "それぞれの測定値の不確かさ",

    // Uncertainties > table > th
    "Apparatus": "器具",

    // Uncertainties > table > th
    "Reads to": "最小の読み",

    // Uncertainties > table > th
    "Uncertainty of one reading": "1 回の測定値の不確かさ",

    // Uncertainties > table > th
    "balance": "電子てんびん",

    // Uncertainties > table > th
    "thermometer (1 °C divisions)": "温度計（1 °C 目盛り）",

    // Uncertainties > table > td
    "1 cm<sup>3</sup>": "1 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±1 cm<sup>3</sup>": "±1 cm<sup>3</sup>",

    // Uncertainties > h3
    "Propagating the uncertainty": "不確かさの伝播",

    // Uncertainties > p
    "Use the worked example data. The mass of product comes from <strong>two</strong> readings subtracted, so <strong>add the absolute uncertainties</strong>.": "例題のデータを使います。生成物の質量は、<strong>2 つ</strong>の測定値の引き算から求めるので、<strong>絶対不確かさを足します</strong>。",

    // Uncertainties > maths line
    "Δ<i>m</i>(product) = ±(0.01 + 0.01) g = ±0.02 g": "Δ<i>m</i>(生成物) = ±(0.01 + 0.01) g = ±0.02 g",

    // Uncertainties > p
    "The recovery is a <strong>division</strong>, so <strong>add the percentage uncertainties</strong>.": "回収率は<strong>割り算</strong>で求めるので、<strong>百分率の不確かさを足します</strong>。",

    // Uncertainties > maths line
    "% uncertainty of <i>m</i>(product) = (0.02 / 1.51) × 100 = 1.32 %": "<i>m</i>(生成物) の百分率の不確かさ = (0.02 / 1.51) × 100 = 1.32 %",

    // Uncertainties > maths line
    "% uncertainty of <i>m</i>(impure sample) = (0.01 / 2.04) × 100 = 0.49 %": "<i>m</i>(不純物を含む試料) の百分率の不確かさ = (0.01 / 2.04) × 100 = 0.49 %",

    // Uncertainties > maths line
    "% uncertainty of recovery = 1.32 % + 0.49 % = 1.81 %": "回収率の百分率の不確かさ = 1.32 % + 0.49 % = 1.81 %",

    // Uncertainties > maths line
    "absolute uncertainty = 74.0 × 1.81 / 100 = ±1.3, so recovery = 74 ± 1 %": "絶対不確かさ = 74.0 × 1.81 / 100 = ±1.3、よって回収率 = 74 ± 1 %",

    // Uncertainties > p
    "The mass of impure sample is read once on a balance that was set to zero, so it carries one reading uncertainty. The absolute uncertainty is given to 1 significant figure, and the value is rounded to the same decimal place.": "不純物を含む試料の質量は、ゼロに合わせた電子てんびんで 1 回だけ読むので、不確かさは 1 回の測定値の分だけです。絶対不確かさは有効数字 1 桁で示し、値も同じ小数の位に丸めます。",

    // Uncertainties > try it > data-label attribute
    "Percentage uncertainty of the recovery": "回収率の百分率の不確かさ",

    // Uncertainties > try it > p
    "For the \"Try it\" data above (3.12 g of sample; watch glass 25.08 g, then 27.66 g), calculate the percentage uncertainty of the recovery. The balance reads to ±0.01 g.": "上の「やってみよう」のデータ（試料 3.12 g、時計皿 25.08 g、生成物をのせて 27.66 g）について、回収率の百分率の不確かさを計算しなさい。電子てんびんは ±0.01 g まで読めます。",

    // Uncertainties > try it > li
    "The product mass (2.58 g) comes from two readings, so its uncertainty is ±0.02 g.": "生成物の質量（2.58 g）は 2 つの測定値から求めるので、その不確かさは ±0.02 g です。",

    // Uncertainties > try it > li
    "Add (0.02 / 2.58) × 100 and (0.01 / 3.12) × 100.": "(0.02 / 2.58) × 100 と (0.01 / 3.12) × 100 を足します。",

    // Uncertainties > try it > maths line
    "% uncertainty = 0.775 % + 0.321 % = 1.1 %": "百分率の不確かさ = 0.775 % + 0.321 % = 1.1 %",

    // Uncertainties > h3
    "Comparing with the literature value": "文献値とくらべる",

    // Uncertainties > p
    "The impure starting material in the same experiment melted at 113.5–119.5 °C. Compare the temperature at which each sample is fully melted with the literature value of 122 °C.": "同じ実験で、もとの不純物を含む試料は 113.5–119.5 °C で融解しました。それぞれの試料がすべて融解した温度を、文献値の 122 °C とくらべましょう。",

    // Uncertainties > maths line
    "percentage error = |experimental − literature| / literature × 100": "百分率誤差 = |実験値 − 文献値| / 文献値 × 100",

    // Uncertainties > maths line
    "product: |121.5 − 122| / 122 × 100 = 0.4 %": "生成物：|121.5 − 122| / 122 × 100 = 0.4 %",

    // Uncertainties > maths line
    "impure sample: |119.5 − 122| / 122 × 100 = 2.0 %": "不純物を含む試料：|119.5 − 122| / 122 × 100 = 2.0 %",

    // Uncertainties > p
    "Then ask the more useful question: <strong>is the difference bigger than the uncertainty?</strong> For the product, the difference is 0.5 °C, the same as the thermometer uncertainty, so it agrees with the literature value. For the impure sample the difference is 2.5 °C, five times the uncertainty, so it is a real effect: the impurities lowered the melting point.": "そのうえで、もっと役に立つ問いを考えます。<strong>その差は、不確かさより大きいでしょうか。</strong>生成物では、差は 0.5 °C で、温度計の不確かさと同じなので、文献値と一致しているといえます。不純物を含む試料では、差は 2.5 °C で、不確かさの 5 倍です。だからこれは本当の効果で、不純物が融点を下げたのです。",

    // Uncertainties > exam tip (shown in English + translation) > p
    "In Paper 1B, give an absolute uncertainty to 1 significant figure and the value to the same decimal place. When you compare with a literature value, say whether the difference is larger than the uncertainty. If it is, there must be a systematic error or a real effect such as an impurity.": "Paper 1B では、絶対不確かさは有効数字 1 桁で示し、値は同じ小数の位までにします。文献値とくらべるときは、その差が不確かさより大きいかどうかを述べましょう。大きければ、系統誤差か、不純物のような本当の効果があるはずです。",

    // Evaluation: errors and improvements > data-toc attribute
    "Evaluation": "評価",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.\">random error</dfn> makes repeated results scatter, for example judging by eye the moment the last crystal melts. Repeating and averaging reduces its effect. A <dfn data-def=\"An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.\">systematic error</dfn> pushes every result the same way, for example weighing crystals that are still wet. Repeats do not help: you must change the method.": "<dfn data-def=\"くり返した測定値を、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。\">偶然誤差 <span class=\"en-term\">(random error)</span></dfn>は、くり返した結果をばらつかせます。たとえば、最後の結晶が融解する瞬間を目で判断する場合です。くり返して平均をとると、その影響が小さくなります。<dfn data-def=\"すべての結果を同じ向きにずらす誤差。くり返しても小さくならない。方法か器具を変える必要がある。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>は、すべての結果を同じ向きにずらします。たとえば、まだぬれている結晶の質量をはかる場合です。くり返しても役に立ちません。方法を変える必要があります。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.": "くり返した測定値を、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.": "すべての結果を同じ向きにずらす誤差。くり返しても小さくならない。方法か器具を変える必要がある。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in this practical": "この実験の誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > th
    "too much hot water used": "熱い水を使いすぎた",

    // Evaluation: errors and improvements > table > td
    "more benzoic acid stays dissolved after cooling, so the recovery is lower": "冷やしたあとも溶けたまま残る安息香酸が多くなるので、回収率が低くなる",

    // Evaluation: errors and improvements > table > td
    "add hot water in small portions until the solid just dissolves; record the volume": "固体がちょうど溶けきるまで熱い水を少しずつ加え、体積を記録する",

    // Evaluation: errors and improvements > table > th
    "crystals form in the funnel during hot filtration": "熱いままのろ過のあいだに、ろうとの中で結晶ができた",

    // Evaluation: errors and improvements > table > td
    "product is lost with the sand, so the recovery is lower": "生成物が砂といっしょに失われるので、回収率が低くなる",

    // Evaluation: errors and improvements > table > td
    "use a stemless funnel warmed with hot water, add about one tenth extra hot solvent, filter quickly": "熱い水で温めた脚のないろうとを使い、熱い溶媒を約 10 分の 1 多めに加え、すばやくろ過する",

    // Evaluation: errors and improvements > table > th
    "cooling too quickly": "冷やすのが速すぎた",

    // Evaluation: errors and improvements > table > td
    "small crystals trap impure solution, so the product melts lower and over a wider range": "小さな結晶が不純物を含む溶液を取りこむので、生成物の融点が低くなり、範囲も広がる",

    // Evaluation: errors and improvements > table > td
    "cool slowly to room temperature first, then use the ice bath": "まず室温までゆっくり冷まし、そのあと氷浴を使う",

    // Evaluation: errors and improvements > table > th
    "rinsing with warm water": "温かい水ですすいだ",

    // Evaluation: errors and improvements > table > td
    "some crystals dissolve, so the recovery is lower": "結晶の一部が溶けるので、回収率が低くなる",

    // Evaluation: errors and improvements > table > td
    "rinse with a small volume of ice-cold water": "少量の氷冷した水ですすぐ",

    // Evaluation: errors and improvements > table > th
    "product weighed while still wet (systematic)": "まだぬれている生成物の質量をはかった（系統誤差）",

    // Evaluation: errors and improvements > table > td
    "water adds to the mass, so the recovery is too high; water also lowers the melting point": "水の分だけ質量が増えるので、回収率が高くなりすぎる。水は融点も下げる",

    // Evaluation: errors and improvements > table > td
    "dry to constant mass in a low-temperature oven or desiccator": "低温の乾燥器かデシケーターで、質量が一定になるまで乾燥させる",

    // Evaluation: errors and improvements > table > th
    "crystals left on the paper and glassware": "結晶がろ紙やガラス器具に残った",

    // Evaluation: errors and improvements > table > td
    "recovery is lower": "回収率が低くなる",

    // Evaluation: errors and improvements > table > td
    "wash the last crystals across with a little of the cold filtrate": "残った結晶を、冷たいろ液を少し使って流し移す",

    // Evaluation: errors and improvements > table > th
    "heating too fast in the melting point test (systematic)": "融点の測定で加熱が速すぎた（系統誤差）",

    // Evaluation: errors and improvements > table > td
    "the thermometer runs ahead of the sample, so the readings are too high and the range looks wider": "温度計の示す温度が試料より先に上がるので、読みが高くなりすぎ、範囲も広く見える",

    // Evaluation: errors and improvements > table > td
    "heat quickly to about 10 °C below the expected value, then at 1–2 °C per minute": "予想される値より約 10 °C 低いところまですばやく加熱し、そのあとは 1 分あたり 1–2 °C で加熱する",

    // Evaluation: errors and improvements > table > th
    "judging the start and end of melting by eye (random)": "融解の始まりと終わりを目で判断する（偶然誤差）",

    // Evaluation: errors and improvements > table > td
    "readings scatter by about 1 °C": "読みが約 1 °C ばらつく",

    // Evaluation: errors and improvements > table > td
    "repeat with fresh capillaries and take the mean; run pure benzoic acid alongside as a check": "新しい毛細管でくり返して平均をとる。確認のため、純粋な安息香酸も並べて測定する",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For an error, always say which way it moves the result and why. \"Human error\" earns nothing. A good improvement names a specific change to the apparatus or method that removes that error.": "誤差については、結果をどちらの向きに動かすのか、そしてその理由を必ず述べましょう。「人為的な誤差（human error）」では点になりません。よい改善策は、その誤差を取り除くための、器具や方法の具体的な変更を示します。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "These questions are in the style of Paper 1B: data from a practical, method, uncertainty and evaluation. Use the data given in each question.": "これらは Paper 1B 形式の問題です。実験のデータ、方法、不確かさ、評価を扱います。それぞれの問題にあるデータを使いましょう。",

    // Exam practice > data-title attribute
    "Lab 1 exam practice": "実験 1 試験対策の問題",

    // widget string (assets/js/widgets-lab-separation.js)
    "No results yet.": "まだ結果がありません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Sand in water": "砂を含む水",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: get the sand back.": "目標：砂を取り戻す。",

    // widget string (assets/js/widgets-lab-separation.js)
    "sand": "砂",

    // widget string (assets/js/widgets-lab-separation.js)
    "water": "水",

    // widget string (assets/js/widgets-lab-separation.js)
    "Salt water (sodium chloride solution)": "食塩水（塩化ナトリウム水溶液）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: get solid salt.": "目標：固体の塩を得る。",

    // widget string (assets/js/widgets-lab-separation.js)
    "salt": "塩",

    // widget string (assets/js/widgets-lab-separation.js)
    "Salt water, but you want the water": "食塩水。ただし水がほしい",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: collect pure water.": "目標：純粋な水を集める。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Ethanol and water (they mix completely)": "エタノールと水（完全に混ざり合う）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: get the ethanol out.": "目標：エタノールを取り出す。",

    // widget string (assets/js/widgets-lab-separation.js)
    "ethanol": "エタノール",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dry mixture of sand and salt": "砂と塩の乾いた混合物",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: a dry sample of each solid.": "目標：それぞれの固体の乾いた試料。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Impure benzoic acid crystals": "不純物を含む安息香酸の結晶",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: purer benzoic acid.": "目標：より純粋な安息香酸。",

    // widget string (assets/js/widgets-lab-separation.js)
    "benzoic acid": "安息香酸",

    // widget string (assets/js/widgets-lab-separation.js)
    "soluble impurity": "溶ける不純物",

    // widget string (assets/js/widgets-lab-separation.js)
    "Black ink": "黒インク",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: find out how many dyes it contains.": "目標：含まれる色素の数を調べる。",

    // widget string (assets/js/widgets-lab-separation.js)
    "dyes": "色素",

    // widget string (assets/js/widgets-lab-separation.js)
    "solvent": "溶媒",

    // widget string (assets/js/widgets-lab-separation.js)
    "Filtration": "ろ過",

    // widget string (assets/js/widgets-lab-separation.js)
    "Evaporation, then crystallize": "蒸発させてから結晶化させる",

    // widget string (assets/js/widgets-lab-separation.js)
    "Simple distillation": "単蒸留",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dissolve in water, filter, evaporate the filtrate": "水に溶かし、ろ過し、ろ液を蒸発させる",

    // widget string (assets/js/widgets-lab-separation.js)
    "Paper chromatography": "ペーパークロマトグラフィー",

    // widget string (assets/js/widgets-lab-separation.js)
    "Mixture": "混合物",

    // widget string (assets/js/widgets-lab-separation.js)
    "Technique": "分離法",

    // widget string (assets/js/widgets-lab-separation.js)
    "Try it": "試す",

    // widget string (assets/js/widgets-lab-separation.js)
    "Your attempts": "試した結果",

    // widget string (assets/js/widgets-lab-separation.js)
    "Result": "結果",

    // widget string (assets/js/widgets-lab-separation.js)
    "Choose a technique and press Try it.": "分離法を選び、「試す」を押しましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Spots on the paper": "ろ紙の上のスポット",

    // widget string (assets/js/widgets-lab-separation.js)
    "three separate coloured spots": "色の違う 3 つのスポット",

    // widget string (assets/js/widgets-lab-separation.js)
    "The dyes separate into spots. This tells you how many dyes there are and, with known dyes beside it, which ones. Lab 2 runs this experiment and measures R<sub>F</sub> values.": "色素が分かれてスポットになります。ここから色素がいくつあるかがわかり、既知の色素を横に並べれば、どの色素かもわかります。実験 2 では、この実験を行って R<sub>F</sub> 値を測ります。",

    // widget string (assets/js/widgets-lab-separation.js)
    "On the paper": "ろ紙の上",

    // widget string (assets/js/widgets-lab-separation.js)
    "a faint smear": "うすいしみ",

    // widget string (assets/js/widgets-lab-separation.js)
    "Chromatography separates tiny amounts of dissolved substances so you can identify them. It does not give you a usable sample of anything.": "クロマトグラフィーは、溶けているごくわずかな物質を分けて、それが何かを特定する方法です。使える量の試料が得られるわけではありません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Crystals on the filter paper": "ろ紙の上の結晶",

    // widget string (assets/js/widgets-lab-separation.js)
    "benzoic acid (purer)": "安息香酸（より純粋）",

    // widget string (assets/js/widgets-lab-separation.js)
    "In the filtrate": "ろ液の中",

    // widget string (assets/js/widgets-lab-separation.js)
    "a little benzoic acid": "少しの安息香酸",

    // widget string (assets/js/widgets-lab-separation.js)
    "Benzoic acid dissolves well in hot water and poorly in cold water. The impurity is present in a small amount, so it stays dissolved when the solution cools. You lose a little product, which stays in solution.": "安息香酸は、熱い水にはよく溶け、冷たい水にはあまり溶けません。不純物は少ししかないので、溶液を冷やしても溶けたまま残ります。生成物も少しは溶液に残るので、その分は失われます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Nothing useful": "役に立つものはなし",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recrystallization purifies a solid that contains small amounts of impurities. This mixture is not like that.": "再結晶は、少量の不純物を含む固体を精製する方法です。この混合物はそうではありません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "On the filter paper": "ろ紙の上",

    // widget string (assets/js/widgets-lab-separation.js)
    "most of the benzoic acid, still impure": "安息香酸のほとんど。不純物を含んだまま",

    // widget string (assets/js/widgets-lab-separation.js)
    "In the evaporating basin": "蒸発皿の中",

    // widget string (assets/js/widgets-lab-separation.js)
    "some benzoic acid": "いくらかの安息香酸",

    // widget string (assets/js/widgets-lab-separation.js)
    "Lost to the air": "空気中に失われる",

    // widget string (assets/js/widgets-lab-separation.js)
    "Cold water dissolves only a little benzoic acid, so most stays on the paper with impurity still inside the crystals. Recrystallization is designed for this job.": "冷たい水には安息香酸が少ししか溶けないので、ほとんどが不純物を結晶の中に含んだまま、ろ紙の上に残ります。この目的には再結晶が適しています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "On the filter paper (residue)": "ろ紙の上（残留物）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Water dissolves the soluble solid. Filtration holds back the insoluble solid. Evaporation removes the water from the filtrate. Rinse and dry the residue, and dry the crystals.": "水は溶ける固体を溶かします。ろ過で溶けない固体が止められます。蒸発でろ液から水を除きます。残留物はすすいで乾燥させ、結晶も乾燥させます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Filtration needs a liquid. A dry mixture just sits on the paper. Dissolve the soluble part first.": "ろ過には液体が必要です。乾いた混合物は、ろ紙の上にのったままです。まず溶ける成分を溶かしましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Still in the container": "容器に残ったまま",

    // widget string (assets/js/widgets-lab-separation.js)
    "There is no liquid to evaporate or boil, so nothing separates. Heating a dry mixture does not separate these solids.": "蒸発させたり沸騰させたりする液体がないので、何も分かれません。乾いた混合物を加熱しても、これらの固体は分けられません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "nothing": "なし",

    // widget string (assets/js/widgets-lab-separation.js)
    "Passes through (filtrate)": "ろ紙を通る（ろ液）",

    // widget string (assets/js/widgets-lab-separation.js)
    "The solid grains are too big to pass through the paper. The liquid passes through.": "固体の粒は大きすぎて、ろ紙を通れません。液体はろ紙を通ります。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dissolved particles are as small as the solvent particles. They pass straight through the filter paper.": "溶けている粒子は、溶媒の粒子と同じくらい小さいので、そのままろ紙を通り抜けます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Left in the basin": "蒸発皿に残る",

    // widget string (assets/js/widgets-lab-separation.js)
    "The liquid turns to vapour and escapes. Anything that does not evaporate is left behind.": "液体は蒸気になって逃げていきます。蒸発しないものはあとに残ります。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The still-head thermometer starts at about {a} °C and rises slowly towards 100 °C.": "枝付きフラスコの温度計は約 {a} °C から始まり、100 °C に向かってゆっくり上がります。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Collected as distillate": "留出液として集まる",

    // widget string (assets/js/widgets-lab-separation.js)
    "mostly ethanol, with some water": "ほとんどがエタノールで、水も少し含む",

    // widget string (assets/js/widgets-lab-separation.js)
    "Left in the flask": "フラスコに残る",

    // widget string (assets/js/widgets-lab-separation.js)
    "mostly water": "ほとんどが水",

    // widget string (assets/js/widgets-lab-separation.js)
    "Ethanol boils at 78 °C and water at 100 °C, so the first distillate is rich in ethanol. Both liquids are volatile, so simple distillation cannot give pure ethanol.": "エタノールは 78 °C、水は 100 °C で沸騰するので、最初の留出液はエタノールを多く含みます。どちらの液体も揮発性なので、単蒸留では純粋なエタノールは得られません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The still-head thermometer reads {a} °C while the distillate is collected.": "留出液を集めているあいだ、枝付きフラスコの温度計は {a} °C を示します。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The liquid boils, the vapour condenses in the condenser and is collected. Substances that do not boil stay in the flask.": "液体が沸騰し、蒸気が冷却器で凝縮して集められます。沸騰しない物質はフラスコに残ります。",

    // widget string (assets/js/widgets-lab-separation.js)
    "You do get the sand, but boiling off all that water is slow and wastes energy. Filtration does the job in minutes.": "砂は得られますが、大量の水を沸騰させて飛ばすのは時間がかかり、エネルギーのむだです。ろ過なら数分で済みます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "This works.": "うまくいきます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "This only partly works.": "一部だけうまくいきます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "This does not work.": "うまくいきません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Hint: you only need to see the dyes, not collect them.": "ヒント：色素は集める必要はなく、見るだけでかまいません。",

    // widget string (assets/js/widgets-lab-separation.js)
    "works": "うまくいく",

    // widget string (assets/js/widgets-lab-separation.js)
    "partly": "一部",

    // widget string (assets/js/widgets-lab-separation.js)
    "does not work": "うまくいかない",

    // widget string (assets/js/widgets-lab-separation.js)
    "Volume of hot water": "熱い水の体積",

    // widget string (assets/js/widgets-lab-separation.js)
    "Hot filtration": "熱いままのろ過",

    // widget string (assets/js/widgets-lab-separation.js)
    "Filter while hot": "熱いうちにろ過する",

    // widget string (assets/js/widgets-lab-separation.js)
    "Skip it": "省く",

    // widget string (assets/js/widgets-lab-separation.js)
    "Cooling": "冷やし方",

    // widget string (assets/js/widgets-lab-separation.js)
    "Slowly to room temperature, then ice bath": "室温までゆっくり、そのあと氷浴",

    // widget string (assets/js/widgets-lab-separation.js)
    "Slowly to room temperature only": "室温までゆっくり冷ますだけ",

    // widget string (assets/js/widgets-lab-separation.js)
    "Straight into an ice bath": "すぐに氷浴へ",

    // widget string (assets/js/widgets-lab-separation.js)
    "Rinse the crystals with": "結晶をすすぐもの",

    // widget string (assets/js/widgets-lab-separation.js)
    "a little ice-cold water": "少量の氷冷した水",

    // widget string (assets/js/widgets-lab-separation.js)
    "warm water": "温かい水",

    // widget string (assets/js/widgets-lab-separation.js)
    "no rinse": "すすがない",

    // widget string (assets/js/widgets-lab-separation.js)
    "Before weighing": "質量をはかる前に",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dry to constant mass": "質量が一定になるまで乾燥させる",

    // widget string (assets/js/widgets-lab-separation.js)
    "Weigh straight away": "すぐに質量をはかる",

    // widget string (assets/js/widgets-lab-separation.js)
    "Run recrystallization": "再結晶を行う",

    // widget string (assets/js/widgets-lab-separation.js)
    "Clear table": "表を消す",

    // widget string (assets/js/widgets-lab-separation.js)
    "Graph of the solubility of benzoic acid in water against temperature, with a line for the concentration of your hot solution and the mass that crystallizes on cooling": "水に対する安息香酸の溶解度と温度の関係を表すグラフ。熱い溶液の濃度を表す線と、冷やしたときに結晶になる質量が示されている",

    // widget string (assets/js/widgets-lab-separation.js)
    "Raw data (balance reads to ±0.01 g)": "生データ（電子てんびんは ±0.01 g まで読める）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Run": "回",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(impure sample) / g": "m(不純物を含む試料) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(watch glass) / g": "m(時計皿) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(watch glass + product) / g": "m(時計皿 + 生成物) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(product) / g": "m(生成物) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recovery / %": "回収率 / %",

    // widget string (assets/js/widgets-lab-separation.js)
    "Mass of product": "生成物の質量",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recovery": "回収率",

    // widget string (assets/js/widgets-lab-separation.js)
    "What you see": "見えるようす",

    // widget string (assets/js/widgets-lab-separation.js)
    "Set up the method and press Run recrystallization.": "方法を設定して「再結晶を行う」を押しましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "slow + ice": "ゆっくり + 氷",

    // widget string (assets/js/widgets-lab-separation.js)
    "slow, room temp.": "ゆっくり、室温",

    // widget string (assets/js/widgets-lab-separation.js)
    "fast, ice": "速い、氷",

    // widget string (assets/js/widgets-lab-separation.js)
    "cold rinse": "冷水ですすぐ",

    // widget string (assets/js/widgets-lab-separation.js)
    "warm rinse": "温水ですすぐ",

    // widget string (assets/js/widgets-lab-separation.js)
    "{v} cm³; {hot}; {cool}; {rinse}; {dry}": "{v} cm³、{hot}、{cool}、{rinse}、{dry}",

    // widget string (assets/js/widgets-lab-separation.js)
    "hot filtered": "熱いうちにろ過",

    // widget string (assets/js/widgets-lab-separation.js)
    "not filtered hot": "熱いうちにろ過せず",

    // widget string (assets/js/widgets-lab-separation.js)
    "dried": "乾燥済み",

    // widget string (assets/js/widgets-lab-separation.js)
    "damp": "湿っている",

    // widget string (assets/js/widgets-lab-separation.js)
    "Almost no crystals form. Too much water: the benzoic acid stays dissolved.": "結晶はほとんどできません。水が多すぎて、安息香酸が溶けたまま残っています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Small, fine crystals.": "小さく細かい結晶。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Large, needle-shaped white crystals.": "大きな針状の白い結晶。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Grey grains of sand are mixed with the crystals.": "灰色の砂粒が結晶に混ざっています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The crystals look wet and stick together.": "結晶がぬれていて、くっつき合っています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The crystals are slightly off-white.": "結晶がわずかに白っぽくくすんでいます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Not all of the benzoic acid dissolved in {v} cm³ of hot water. The undissolved solid was filtered off with the sand and lost.": "{v} cm³ の熱い水では、安息香酸がすべては溶けませんでした。溶け残った固体は砂といっしょにろ過で除かれ、失われました。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Not all of the benzoic acid dissolved, and it was not filtered off, so it ended up in the product with the sand.": "安息香酸がすべては溶けず、ろ過もしなかったので、砂といっしょに生成物に入ってしまいました。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The hot solution was nearly saturated, so some crystals formed early in the filter funnel and were lost.": "熱い溶液がほぼ飽和していたので、ろうとの中で早くも結晶ができてしまい、失われました。",

    // widget string (assets/js/widgets-lab-separation.js)
    "About {m} g of benzoic acid stayed dissolved in the cold filtrate.": "約 {m} g の安息香酸が、冷たいろ液に溶けたまま残りました。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The warm rinse dissolved some of the crystals.": "温かい水ですすいだので、結晶の一部が溶けました。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The mass includes water, so the recovery is too high.": "質量に水が含まれているので、回収率が高くなりすぎています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "temperature / °C": "温度 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "solubility / g per 100 cm³": "溶解度 / g（100 cm³ あたり）",

    // widget string (assets/js/widgets-lab-separation.js)
    "solubility curve": "溶解度曲線",

    // widget string (assets/js/widgets-lab-separation.js)
    "crystallizes": "結晶になる",

    // widget string (assets/js/widgets-lab-separation.js)
    "stays dissolved": "溶けたまま",

    // widget string (assets/js/widgets-lab-separation.js)
    "{v} cm³: not all dissolves at 95 °C": "{v} cm³：95 °C ですべては溶けない",

    // widget string (assets/js/widgets-lab-separation.js)
    "{v} cm³ of hot solution": "熱い溶液 {v} cm³",

    // widget string (assets/js/widgets-lab-separation.js)
    "Impure sample (before recrystallization)": "不純物を含む試料（再結晶の前）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Pure benzoic acid (reference)": "純粋な安息香酸（基準）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Your product from run {n}": "実験 {n} 回目の生成物",

    // widget string (assets/js/widgets-lab-separation.js)
    "Sample in the capillary": "毛細管の中の試料",

    // widget string (assets/js/widgets-lab-separation.js)
    "Heating": "加熱",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fast: 10 °C per minute all the way": "速い：最後まで 1 分あたり 10 °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fast to 110 °C, then 2 °C per minute": "110 °C まで速く、そのあと 1 分あたり 2 °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Start heating": "加熱を始める",

    // widget string (assets/js/widgets-lab-separation.js)
    "Melting starts now": "融解が始まった",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fully melted now": "すべて融解した",

    // widget string (assets/js/widgets-lab-separation.js)
    "New capillary": "新しい毛細管",

    // widget string (assets/js/widgets-lab-separation.js)
    "Melting point apparatus: a thermometer and a magnified capillary tube holding the sample, which turns from solid to liquid as it is heated": "融点測定装置：温度計と、試料を入れた毛細管の拡大図。加熱すると、試料は固体から液体に変わる",

    // widget string (assets/js/widgets-lab-separation.js)
    "Raw data (thermometer reads to ±0.5 °C)": "生データ（温度計は ±0.5 °C まで読める）",

    // widget string (assets/js/widgets-lab-separation.js)
    "Sample": "試料",

    // widget string (assets/js/widgets-lab-separation.js)
    "Melting starts / °C": "融解の始まり / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fully melted / °C": "すべて融解 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Range / °C": "範囲 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Thermometer": "温度計",

    // widget string (assets/js/widgets-lab-separation.js)
    "Time": "時間",

    // widget string (assets/js/widgets-lab-separation.js)
    "Pause": "一時停止",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recorded: melting starts at {T} °C.": "記録しました：融解の始まりは {T} °C です。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Now watch for the moment the last solid disappears.": "次は、最後の固体が消える瞬間をよく見ましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Record the start first.": "先に始まりを記録しましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Press \"Melting starts now\" when you first see liquid in the tube.": "管の中に液体が最初に見えたら「融解が始まった」を押しましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "fast": "速い",

    // widget string (assets/js/widgets-lab-separation.js)
    "slow near the melting point": "融点付近は低速",

    // widget string (assets/js/widgets-lab-separation.js)
    "The end is below the start. Repeat with a new capillary.": "終わりが始まりより低くなっています。新しい毛細管でやりなおしましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "A sharp melting range close to the literature value of 122 °C: the sample is close to pure.": "文献値の 122 °C に近い、せまい融点範囲です。試料はほぼ純粋です。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The sample melts below 122 °C and over a range of {r} °C. Impurities lower the melting point and widen the range.": "試料は 122 °C より低い温度で、{r} °C の範囲で融解します。不純物があると融点が下がり、範囲が広がります。",

    // widget string (assets/js/widgets-lab-separation.js)
    "You heated fast. The thermometer runs ahead of the sample, so the readings are too high and the range looks wider. Heat slowly near the melting point.": "速く加熱しました。温度計の示す温度が試料より先に上がるので、読みが高くなりすぎ、範囲も広く見えます。融点の近くではゆっくり加熱しましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Grains of sand did not melt at all. Sand is an insoluble impurity: hot filtration removes it.": "砂粒はまったく融解しませんでした。砂は溶けない不純物で、熱いうちのろ過で取り除けます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The sample was damp. Water is an impurity too: dry the product before you test it.": "試料が湿っていました。水も不純物です。測定の前に生成物を乾燥させましょう。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Range {a}–{b} °C": "範囲 {a}–{b} °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "{m} min {s} s": "{m} 分 {s} 秒",

    // widget string (assets/js/widgets-lab-separation.js)
    "{r} °C per min": "1 分あたり {r} °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "White solid.": "白い固体。",

    // widget string (assets/js/widgets-lab-separation.js)
    "The solid shrinks and the first drops of liquid appear.": "固体が縮み、最初の液滴が現れます。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Partly melted: solid and liquid together.": "一部が融解：固体と液体が混ざっています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Almost all liquid, a few crystals left.": "ほとんど液体で、結晶が少し残っています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Clear liquid, but some gritty grains have not melted.": "透明な液体。ただし、ざらざらした粒が融解せずに残っています。",

    // widget string (assets/js/widgets-lab-separation.js)
    "Clear liquid.": "透明な液体。",

    // widget string (assets/js/widgets-lab-separation.js)
    "capillary (magnified)": "毛細管（拡大）",

    // widget string (assets/js/widgets-lab-separation.js)
    "solid": "固体",

    // widget string (assets/js/widgets-lab-separation.js)
    "liquid": "液体",

    // widget string (assets/js/widgets-lab-separation.js)
    "Model data. Literature value: 122 °C.": "モデルのデータです。文献値：122 °C。",

  }
});
