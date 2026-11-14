/* lab-chromatography — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-chromatography', {
  strings: {

    // page title (browser tab)
    "Lab 2 Paper and thin-layer chromatography | Structure Lab": "実験 2 ペーパークロマトグラフィーと薄層クロマトグラフィー | Structure Lab",

    // Paper and thin-layer chromatography > page header > p
    "Lab 2 · Structure 1.1 and 2.2": "実験 2 · Structure 1.1・2.2",

    // Paper and thin-layer chromatography > page header > h1
    "Paper and thin-layer chromatography": "ペーパークロマトグラフィーと薄層クロマトグラフィー",

    // Paper and thin-layer chromatography > page header > span
    "How can paper or thin-layer chromatography separate the parts of a mixture, and what do R<sub>F</sub> values tell you about them?": "ペーパークロマトグラフィーや薄層クロマトグラフィーで混合物の成分を分けられるのはなぜでしょうか。また、R<sub>F</sub> 値から成分について何がわかるでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "This lab practises the chromatography technique from Structure 1.1.1 and Tool 1, and the R<sub>F</sub> skills from Structure 2.2.10. Tick each item when you can do it without help.": "この実験では、Structure 1.1.1 とツール 1 のクロマトグラフィーの技術と、Structure 2.2.10 の R<sub>F</sub> 値のスキルを練習します。助けなしでできるようになったら、チェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Describe how to run a paper or TLC chromatogram and give the reason for each key step.": "ペーパークロマトグラフィーや TLC のクロマトグラムのつくり方を記述し、それぞれの重要なステップの理由を言える。",

    // What you need to be able to do > checklist > span
    "Measure the distances moved by a spot and by the solvent front, both from the baseline.": "スポットと溶媒先端が進んだ距離を、どちらも原線から測る。",

    // What you need to be able to do > checklist > span
    "Calculate an R<sub>F</sub> value to a sensible precision, with no unit.": "R<sub>F</sub> 値を、単位を付けずに、適切な精密さで計算する。",

    // What you need to be able to do > checklist > span
    "Use R<sub>F</sub> values and reference substances to identify the parts of a mixture.": "R<sub>F</sub> 値と基準物質を使って、混合物の成分を特定する。",

    // What you need to be able to do > checklist > span
    "Explain differences in R<sub>F</sub> using the polarity of the substances and of the stationary and mobile phases.": "物質の極性と、固定相・移動相の極性を使って、R<sub>F</sub> 値の違いを説明する。",

    // What you need to be able to do > checklist > span
    "Work out the uncertainty of an R<sub>F</sub> value and use it when you compare values.": "R<sub>F</sub> 値の不確かさを求め、値をくらべるときに使う。",

    // What you need to be able to do > checklist > span
    "Identify errors in a chromatography experiment and suggest realistic improvements.": "クロマトグラフィーの実験の誤差を特定し、現実的な改善策を提案する。",

    // The chemistry behind it > data-toc attribute
    "Background": "背景",

    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "Chromatography separates the parts of a mixture because they have different attractions, through intermolecular forces, to two phases. The <dfn data-def=\"The phase that does not move: the water held in the paper fibres, or the silica layer on a TLC plate.\">stationary phase</dfn> stays still. The <dfn data-def=\"The solvent that moves through the paper or plate, carrying the parts of the mixture with it.\">mobile phase</dfn> is the solvent that moves up and carries the mixture with it.": "クロマトグラフィーで混合物の成分が分かれるのは、成分によって、2 つの相への分子間力による引きつけられ方が違うからです。<dfn data-def=\"動かない相。紙の繊維に含まれている水や、TLC プレートのシリカの層。\">固定相 <span class=\"en-term\">(stationary phase)</span></dfn>は動きません。<dfn data-def=\"紙やプレートの中を進み、混合物の成分をいっしょに運ぶ溶媒。\">移動相 <span class=\"en-term\">(mobile phase)</span></dfn>は、上に進んで混合物を運ぶ溶媒です。",

    // The chemistry behind it > data-def attribute
    "The phase that does not move: the water held in the paper fibres, or the silica layer on a TLC plate.": "動かない相。紙の繊維に含まれている水や、TLC プレートのシリカの層。",

    // The chemistry behind it > data-def attribute
    "The solvent that moves through the paper or plate, carrying the parts of the mixture with it.": "紙やプレートの中を進み、混合物の成分をいっしょに運ぶ溶媒。",

    // The chemistry behind it > table > caption
    "The two techniques in this lab": "この実験で使う 2 つの方法",

    // The chemistry behind it > table > th
    "Technique": "方法",

    // The chemistry behind it > table > th
    // widget string (assets/js/widgets-lab-chromatography.js)
    "Stationary phase": "固定相",

    // The chemistry behind it > table > th
    "Mobile phase used here": "ここで使う移動相",

    // The chemistry behind it > table > th
    "paper chromatography": "ペーパークロマトグラフィー",

    // The chemistry behind it > table > td
    "water held in the cellulose fibres of the paper (polar)": "紙のセルロース繊維に含まれている水（極性）",

    // The chemistry behind it > table > td
    "mixtures of ethanol and water": "エタノールと水の混合物",

    // The chemistry behind it > table > th
    "thin-layer chromatography (TLC)": "薄層クロマトグラフィー（TLC）",

    // The chemistry behind it > table > td
    "a thin layer of silica, <span class=\"chem\">SiO2</span>, on a plate (polar, with –OH groups on its surface)": "プレートにのせたシリカ <span class=\"chem\">SiO2</span> のうすい層（極性。表面に –OH 基がある）",

    // The chemistry behind it > table > td
    "mixtures of hexane and ethyl acetate": "ヘキサンと酢酸エチルの混合物",

    // The chemistry behind it > p
    "Both stationary phases are polar and can form hydrogen bonds. So a polar substance is held back strongly and moves only a short way. A less polar substance spends more time dissolved in the moving solvent and travels further. Making the mobile phase <strong>more polar</strong> helps it compete for the polar substances, so every spot moves further.": "どちらの固定相も極性があり、水素結合をつくれます。だから、極性の物質は強く引きとめられ、少ししか進みません。極性の小さい物質は、動いている溶媒に溶けている時間が長いので、遠くまで進みます。移動相の<strong>極性を大きく</strong>すると、移動相が極性の物質を引きつける力で固定相と競えるようになるので、どのスポットも遠くまで進みます。",

    // The chemistry behind it > equation > maths line
    "<i>R</i><sub>F</sub> = <span class=\"frac\"><span>distance moved by the spot</span><span>distance moved by the solvent front</span></span>": "<i>R</i><sub>F</sub> = <span class=\"frac\"><span>スポットが進んだ距離</span><span>溶媒先端が進んだ距離</span></span>",

    // The chemistry behind it > equation > dt
    // widget string (assets/js/widgets-lab-chromatography.js)
    "R<sub>F</sub>": "R<sub>F</sub>",

    // The chemistry behind it > equation > dd
    "retardation factor, between 0 and 1, no unit": "移動率 (retardation factor)。0 から 1 のあいだで、単位はない",

    // The chemistry behind it > equation > dt
    "distances": "距離",

    // The chemistry behind it > equation > dd
    "both measured from the baseline; spot distance to the centre of the spot <span class=\"unit\">cm</span>": "どちらも原線から測る。スポットの距離はスポットの中心まで <span class=\"unit\">cm</span>",

    // The chemistry behind it > p
    "A substance has the same R<sub>F</sub> value only if the stationary phase, the solvent and the temperature are the same. That is why known substances are run on the <strong>same</strong> paper as the mixture. The full theory is in <a href=\"../topics/s2-2.html#chromatography\">Structure 2.2: chromatography</a>, and the place of chromatography among other separation methods is in <a href=\"../topics/s1-1.html#separating\">Structure 1.1</a> and <a href=\"lab-separation.html\">Lab 1</a>.": "物質の R<sub>F</sub> 値が同じになるのは、固定相、溶媒、温度が同じときだけです。だから、既知の物質は混合物と<strong>同じ</strong>紙で展開します。くわしい理論は <a href=\"../topics/s2-2.html#chromatography\">Structure 2.2：クロマトグラフィー</a>にあります。ほかの分離法の中でのクロマトグラフィーの位置づけは、<a href=\"../topics/s1-1.html#separating\">Structure 1.1</a> と<a href=\"lab-separation.html\">実験 1</a> にあります。",

    // The chemistry behind it > not needed for IB > p
    "Locating agents (a UV lamp, iodine, ninhydrin) for colourless spots are not required. Nor are column chromatography, two-way chromatography, or how gas chromatographs and HPLC machines work. The equation the simulation uses to produce R<sub>F</sub> values is not part of the course.": "無色のスポットを見えるようにする検出試薬（紫外線ランプ、ヨウ素、ニンヒドリン）は必要ありません。カラムクロマトグラフィー、二次元クロマトグラフィー、ガスクロマトグラフや HPLC 装置のしくみも必要ありません。シミュレーションが R<sub>F</sub> 値をつくるのに使う式も、範囲外です。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to find out which of four known substances, A to D, are present in a mixture M, and to investigate how the polarity of the mobile phase affects R<sub>F</sub> values.": "<strong>目的：</strong>4 つの既知の物質 A〜D のうち、どれが混合物 M に含まれているかを調べる。また、移動相の極性が R<sub>F</sub> 値にどう影響するかを調べる。",

    // Aim, variables and safety > table > caption
    "Variables in the solvent investigation": "溶媒の実験の変数",

    // Aim, variables and safety > table > th
    "Type": "種類",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "測定方法・一定に保つ方法",

    // Aim, variables and safety > table > th
    "Independent": "独立変数",

    // Aim, variables and safety > table > td
    "percentage of the more polar solvent in the mobile phase": "移動相に含まれる、極性の大きいほうの溶媒の割合（%）",

    // Aim, variables and safety > table > td
    "measured with graduated pipettes or a measuring cylinder": "メスピペットかメスシリンダーで測る",

    // Aim, variables and safety > table > th
    "Dependent": "従属変数",

    // Aim, variables and safety > table > td
    "R<sub>F</sub> value of each spot": "それぞれのスポットの R<sub>F</sub> 値",

    // Aim, variables and safety > table > td
    "distances measured with a ruler, ±0.05 cm per reading": "定規で測る距離、1 回の読みあたり ±0.05 cm",

    // Aim, variables and safety > table > th
    "Controlled": "制御変数",

    // Aim, variables and safety > table > td
    "type of paper or plate": "紙やプレートの種類",

    // Aim, variables and safety > table > td
    "cut from the same sheet or box": "同じシートや同じ箱から切り出す",

    // Aim, variables and safety > table > td
    "temperature and solvent vapour in the tank": "温度と、展開槽の中の溶媒の蒸気",

    // Aim, variables and safety > table > td
    "same room; lid on and tank left to saturate before each run": "同じ部屋。毎回、ふたをして展開槽を蒸気で飽和させてから展開する",

    // Aim, variables and safety > table > td
    "position and size of the spots": "スポットの位置と大きさ",

    // Aim, variables and safety > table > td
    "same baseline height (1.5 cm); small spots from a fine capillary": "原線の高さは同じ（1.5 cm）。細い毛細管で小さなスポットをつける",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "chromatography paper or silica TLC plates": "クロマトグラフィー用ろ紙、またはシリカの TLC プレート",

    // Aim, variables and safety > li
    "mixture M and reference solutions A, B, C, D": "混合物 M と基準物質の溶液 A、B、C、D",

    // Aim, variables and safety > li
    "fine glass capillary tubes for spotting": "スポットをつけるための細いガラスの毛細管",

    // Aim, variables and safety > li
    "chromatography tank or beaker with a lid": "クロマトグラフィー用の展開槽、またはふたつきのビーカー",

    // Aim, variables and safety > li
    "ethanol, water, hexane, ethyl acetate": "エタノール、水、ヘキサン、酢酸エチル",

    // Aim, variables and safety > li
    "10 cm<sup>3</sup> measuring cylinders": "10 cm<sup>3</sup> メスシリンダー",

    // Aim, variables and safety > li
    "pencil and 30 cm ruler (1 mm divisions)": "鉛筆と 30 cm 定規（1 mm 目盛り）",

    // Aim, variables and safety > li
    "fume cupboard": "ドラフト",

    // Aim, variables and safety > p
    "Wear eye protection. Ethanol, hexane and ethyl acetate are highly flammable: there must be no naked flames anywhere in the room. Hexane and ethyl acetate vapours are harmful and irritating, and long exposure to hexane can damage nerves: run TLC in a fume cupboard and keep the tank covered.": "保護めがねを着けましょう。エタノール、ヘキサン、酢酸エチルは非常に燃えやすいので、部屋のどこにも直火があってはいけません。ヘキサンと酢酸エチルの蒸気は有害で刺激があり、ヘキサンに長い時間さらされると神経が傷つくことがあります。TLC はドラフトの中で行い、展開槽にはふたをしておきましょう。",

    // Aim, variables and safety > p
    "Capillary tubes are thin glass: put broken ones in the glass bin. Do not scrape the silica layer, because the dust irritates the lungs. Pour used organic solvents into the labelled residue bottle, not down the sink.": "毛細管は細いガラスです。割れたものはガラス用のごみ箱に捨てましょう。シリカの粉は肺を刺激するので、シリカの層を削らないようにします。使い終わった有機溶媒は、流しに捨てず、ラベルの付いた廃液びんに入れます。",

    // Method > h2
    "Method": "方法",

    // Method > li
    "Draw a baseline in <strong>pencil</strong> 1.5 cm from the bottom of the paper and mark five lanes. <em>Why:</em> graphite does not dissolve in the solvent; ink would run.": "紙の下端から 1.5 cm のところに<strong>鉛筆</strong>で原線を引き、5 本のレーンの印を付けます。<em>理由：</em>黒鉛は溶媒に溶けませんが、インクはにじんで動いてしまうからです。",

    // Method > li
    "Use a fine capillary to put a small spot of M on the baseline. Let it dry and add more to the same place two or three times. Spot A, B, C and D in the other lanes. <em>Why:</em> small, concentrated spots give compact spots that do not overlap.": "細い毛細管で、原線の上に M の小さなスポットをつけます。乾かしてから、同じ場所に 2〜3 回重ねてつけます。ほかのレーンに A、B、C、D をつけます。<em>理由：</em>小さく濃いスポットにすると、まとまったスポットになり、重なり合いません。",

    // Method > li
    "Pour the mobile phase into the tank to a depth of about 0.8 cm, put the lid on and leave it for a few minutes. <em>Why:</em> the air in the tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises.": "展開槽に移動相を深さ約 0.8 cm まで入れ、ふたをして数分間置きます。<em>理由：</em>展開槽の中の空気が溶媒の蒸気で満たされるので、溶媒が上がっていくあいだに紙から蒸発しなくなります。",

    // Method > li
    "Stand the paper in the tank with the baseline <strong>above</strong> the solvent level, not touching the sides, and replace the lid. <em>Why:</em> spots below the solvent level would dissolve into the solvent in the tank.": "原線が溶媒の液面より<strong>上</strong>になるように、側面にふれないようにして紙を展開槽に立て、ふたをもどします。<em>理由：</em>液面より下にあるスポットは、展開槽の溶媒に溶け出してしまうからです。",

    // Method > li
    "When the solvent front is about 1 cm from the top, take the paper out and mark the solvent front in pencil at once. <em>Why:</em> the front cannot be seen once the solvent evaporates, and if it reaches the top you cannot tell how far it would have gone.": "溶媒先端が上端から約 1 cm のところまで来たら、紙を取り出し、すぐに鉛筆で溶媒先端の印を付けます。<em>理由：</em>溶媒が蒸発すると先端は見えなくなります。また、先端が上端まで届いてしまうと、どこまで進むはずだったかがわかりません。",

    // Method > li
    "Let the paper dry in the fume cupboard. Draw a pencil ring round each spot.": "ドラフトの中で紙を乾かします。それぞれのスポットのまわりを鉛筆で丸く囲みます。",

    // Method > li
    "With the ruler's zero at the bottom edge, read the positions of the baseline, the solvent front and the centre of each spot. Subtract the baseline reading to get each distance.": "定規のゼロを下端に合わせて、原線、溶媒先端、それぞれのスポットの中心の位置を読みます。原線の読みを引いて、それぞれの距離を求めます。",

    // Method > li
    "Repeat with mobile phases of different composition, keeping everything else the same.": "ほかの条件はすべて同じにして、組成の違う移動相でくり返します。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > h3
    "1. Identify the parts of mixture M": "1. 混合物 M の成分を特定する",

    // Run the experiment > p
    "Run the paper with the method as written. Stop it before the solvent reaches the top. Then record readings for the baseline, the front and each spot, and decide which reference substances are in M. Afterwards, try each faulty set-up and see what goes wrong.": "書かれた方法どおりに紙を展開します。溶媒が上端に届く前に止めましょう。それから原線、先端、それぞれのスポットの読みを記録し、M にどの基準物質が含まれているかを決めます。そのあと、まちがった設定をそれぞれ試して、何がうまくいかないかを見てみましょう。",

    // Run the experiment > widget > data-title attribute
    "Chromatography tank": "クロマトグラフィーの展開槽",

    // Run the experiment > widget > figcaption
    "Press Run, then \"Take out and mark the front\". Move the ruler line (slider, number box, or tap the picture), choose what the reading is for, and press Record reading. The table works out distances and R<sub>F</sub> values once you have recorded the baseline and the front. A new run gives slightly different values. All values are model data.": "「展開する」を押し、次に「取り出して先端に印を付ける」を押します。測定線を動かし（スライダー、数値の入力欄、または図をタップ）、何の読みかを選んで、「読みを記録する」を押します。原線と先端を記録すると、表が距離と R<sub>F</sub> 値を計算します。新しく展開すると、値は少しずつ違います。値はすべてモデルのデータです。",

    // Run the experiment > h3
    "2. Change the polarity of the mobile phase": "2. 移動相の極性を変える",

    // Run the experiment > p
    "Now run mixture M in six mobile phases at once, from 0 % to 100 % of the more polar solvent. Look at the trend and choose the mobile phase that separates the three spots best.": "次に、極性の大きいほうの溶媒を 0 % から 100 % まで含む 6 種類の移動相で、混合物 M をいっせいに展開します。傾向を見て、3 つのスポットを最もよく分ける移動相を選びましょう。",

    // Run the experiment > widget > data-title attribute
    "Solvent series": "溶媒のシリーズ",

    // Run the experiment > widget > figcaption
    "Press Run all six. Each line is one spot of M, with its own marker shape: circle for spot 1, square for spot 2, triangle for spot 3. The \"smallest gap\" column shows how close the two nearest spots are. All values are model data.": "「6 つすべて展開する」を押します。それぞれの線は M の 1 つのスポットを表し、マーカーの形がそれぞれ違います。丸がスポット 1、四角がスポット 2、三角がスポット 3 です。「最小の間隔」の列は、いちばん近い 2 つのスポットがどれだけ近いかを示します。値はすべてモデルのデータです。",

    // Run the experiment > key idea > p
    "Every R<sub>F</sub> value goes up as the mobile phase becomes more polar. The order of the spots does not change: the most polar substance, which is held most strongly by the polar stationary phase, always has the smallest R<sub>F</sub>.": "移動相の極性が大きくなると、どの R<sub>F</sub> 値も大きくなります。スポットの順番は変わりません。最も極性の大きい物質は、極性の固定相に最も強く引きとめられるので、いつも R<sub>F</sub> 値が最も小さくなります。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > worked example > data-kicker attribute
    "Worked example": "例題",

    // Processing the data > worked example > h3
    "R<sub>F</sub> values from ruler readings": "定規の読みから R<sub>F</sub> 値を求める",

    // Processing the data > worked example > p
    "A student ran mixture M on paper with 40 % water in ethanol. With the ruler's zero at the bottom edge, the readings were: baseline 1.5 cm, solvent front 9.7 cm, spots of M at 3.6 cm, 5.6 cm and 8.7 cm. On the same paper, the references gave R<sub>F</sub> values of B 0.25, C 0.69 and D 0.87. Calculate the R<sub>F</sub> values of the three spots and identify them.": "ある生徒が、エタノールに水を 40 % 混ぜた移動相で、混合物 M を紙で展開しました。定規のゼロを下端に合わせると、読みは次のとおりでした。原線 1.5 cm、溶媒先端 9.7 cm、M のスポットは 3.6 cm、5.6 cm、8.7 cm。同じ紙で、基準物質の R<sub>F</sub> 値は B 0.25、C 0.69、D 0.87 でした。3 つのスポットの R<sub>F</sub> 値を計算し、それぞれが何かを特定しなさい。",

    // Processing the data > worked example > data-title attribute
    "Turn readings into distances": "読みを距離に直す",

    // Processing the data > worked example > p
    "Both distances start at the baseline, not at the edge of the paper.": "どちらの距離も、紙の端からではなく、原線から測ります。",

    // Processing the data > worked example > maths line
    "solvent front: 9.7 cm − 1.5 cm = 8.2 cm": "溶媒先端：9.7 cm − 1.5 cm = 8.2 cm",

    // Processing the data > worked example > maths line
    "spots: 3.6 − 1.5 = 2.1 cm; 5.6 − 1.5 = 4.1 cm; 8.7 − 1.5 = 7.2 cm": "スポット：3.6 − 1.5 = 2.1 cm、5.6 − 1.5 = 4.1 cm、8.7 − 1.5 = 7.2 cm",

    // Processing the data > worked example > data-title attribute
    "Divide each spot distance by the front distance": "それぞれのスポットの距離を先端の距離で割る",

    // Processing the data > worked example > p
    "The spot cannot move further than the solvent, so each answer is less than 1.": "スポットが溶媒より遠くへ進むことはないので、どの答えも 1 より小さくなります。",

    // Processing the data > worked example > maths line
    "spot 1: 2.1 / 8.2 = 0.256…": "スポット 1：2.1 / 8.2 = 0.256…",

    // Processing the data > worked example > maths line
    "spot 2: 4.1 / 8.2 = 0.500": "スポット 2：4.1 / 8.2 = 0.500",

    // Processing the data > worked example > maths line
    "spot 3: 7.2 / 8.2 = 0.878…": "スポット 3：7.2 / 8.2 = 0.878…",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "データに合わせて丸める",

    // Processing the data > worked example > p
    "The distances have 2 significant figures, so give R<sub>F</sub> to 2 decimal places (2 significant figures). It has no unit.": "距離は有効数字 2 桁なので、R<sub>F</sub> 値は小数第 2 位まで（有効数字 2 桁）で示します。単位はありません。",

    // Processing the data > worked example > data-title attribute
    "Compare with the references": "基準物質とくらべる",

    // Processing the data > worked example > p
    "Same R<sub>F</sub> on the same paper means probably the same substance.": "同じ紙で R<sub>F</sub> 値が同じなら、おそらく同じ物質です。",

    // Processing the data > worked example > p
    "Spot 1 (0.26) matches B (0.25). Spot 3 (0.88) matches D (0.87). Spot 2 (0.50) does not match C (0.69) or any other reference.": "スポット 1（0.26）は B（0.25）と一致します。スポット 3（0.88）は D（0.87）と一致します。スポット 2（0.50）は C（0.69）とも、ほかのどの基準物質とも一致しません。",

    // Processing the data > worked example > p
    "R<sub>F</sub> = 0.26, 0.50 and 0.88. M contains B, D and one substance that is not A, B, C or D.": "R<sub>F</sub> = 0.26、0.50、0.88。M には B と D、そして A、B、C、D のどれでもない物質が 1 つ含まれています。",

    // Processing the data > try it > data-label attribute
    // widget string (assets/js/widgets-lab-chromatography.js)
    "RF value": "RF 値",

    // Processing the data > try it > p
    "On a TLC plate, the ruler (zero at the bottom edge) reads 2.0 cm at the baseline, 10.4 cm at the solvent front and 7.1 cm at the centre of a spot. Calculate the R<sub>F</sub> value of the spot.": "TLC プレートで、定規（ゼロは下端）の読みは、原線で 2.0 cm、溶媒先端で 10.4 cm、あるスポットの中心で 7.1 cm でした。このスポットの R<sub>F</sub> 値を計算しなさい。",

    // Processing the data > try it > li
    "Subtract the baseline reading from both of the other readings first.": "まず、ほかの 2 つの読みから、それぞれ原線の読みを引きます。",

    // Processing the data > try it > li
    "The spot moved 5.1 cm and the front moved 8.4 cm. Divide.": "スポットは 5.1 cm、先端は 8.4 cm 進みました。割り算をしましょう。",

    // Processing the data > try it > maths line
    "spot: 7.1 cm − 2.0 cm = 5.1 cm; front: 10.4 cm − 2.0 cm = 8.4 cm": "スポット：7.1 cm − 2.0 cm = 5.1 cm、先端：10.4 cm − 2.0 cm = 8.4 cm",

    // Processing the data > common mistake > p
    "Three slips cost marks: measuring from the edge of the paper instead of the baseline, dividing by the length of the paper instead of the distance to the solvent front, and giving R<sub>F</sub> a unit. An R<sub>F</sub> above 1 always means the fraction is upside down.": "点を失う 3 つのミスがあります。原線ではなく紙の端から測ること、溶媒先端までの距離ではなく紙の長さで割ること、R<sub>F</sub> 値に単位を付けることです。R<sub>F</sub> 値が 1 を超えたら、必ず分数が上下逆になっています。",

    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > p
    "A ruler with 1 mm divisions can be read to ±0.05 cm. Each distance is the difference of two readings (the feature and the baseline), so add the absolute uncertainties:": "1 mm 目盛りの定規は ±0.05 cm まで読めます。それぞれの距離は 2 つの読み（測りたい位置と原線）の差なので、絶対不確かさを足します。",

    // Uncertainties > p
    "R<sub>F</sub> is a division, so add the percentage uncertainties. For spot 1 in the worked example:": "R<sub>F</sub> 値は割り算で求めるので、百分率の不確かさを足します。例題のスポット 1 では次のようになります。",

    // Uncertainties > maths line
    "spot: (0.1 / 2.1) × 100 = 4.8 %": "スポット：(0.1 / 2.1) × 100 = 4.8 %",

    // Uncertainties > maths line
    "front: (0.1 / 8.2) × 100 = 1.2 %": "先端：(0.1 / 8.2) × 100 = 1.2 %",

    // Uncertainties > maths line
    "% uncertainty of <i>R</i><sub>F</sub> = 4.8 % + 1.2 % = 6.0 %": "<i>R</i><sub>F</sub> の百分率の不確かさ = 4.8 % + 1.2 % = 6.0 %",

    // Uncertainties > maths line
    "absolute uncertainty = 0.256 × 6.0 / 100 = ±0.015, so <i>R</i><sub>F</sub> = 0.26 ± 0.02": "絶対不確かさ = 0.256 × 6.0 / 100 = ±0.015、よって <i>R</i><sub>F</sub> = 0.26 ± 0.02",

    // Uncertainties > p
    "A spot that has moved only a short way has a large percentage uncertainty. Letting the solvent run further makes all the distances bigger and the percentage uncertainties smaller. Judging the centre of a wide, fuzzy spot adds more uncertainty than the ruler does, so keep the spots small.": "少ししか進んでいないスポットは、百分率の不確かさが大きくなります。溶媒をもっと遠くまで進ませると、すべての距離が大きくなり、百分率の不確かさが小さくなります。広がってぼやけたスポットの中心を判断するときの不確かさは、定規の不確かさより大きいので、スポットは小さくしましょう。",

    // Uncertainties > try it > data-label attribute
    "Percentage uncertainty": "百分率の不確かさ",

    // Uncertainties > try it > p
    "Calculate the percentage uncertainty of the R<sub>F</sub> value of spot 3 in the worked example (spot 7.2 cm, front 8.2 cm, each ±0.1 cm).": "例題のスポット 3（スポット 7.2 cm、先端 8.2 cm、それぞれ ±0.1 cm）の R<sub>F</sub> 値について、百分率の不確かさを計算しなさい。",

    // Uncertainties > try it > li
    "Work out the percentage uncertainty of each distance.": "それぞれの距離の百分率の不確かさを求めます。",

    // Uncertainties > try it > li
    "Add (0.1 / 7.2) × 100 and (0.1 / 8.2) × 100.": "(0.1 / 7.2) × 100 と (0.1 / 8.2) × 100 を足します。",

    // Uncertainties > try it > maths line
    "% uncertainty = 1.39 % + 1.22 % = 2.6 %": "百分率の不確かさ = 1.39 % + 1.22 % = 2.6 %",

    // Uncertainties > h3
    "Comparing with a reference value": "基準値とくらべる",

    // Uncertainties > p
    "A data sheet gives R<sub>F</sub> = 0.25 for substance B under the same conditions. Spot 1 gave 0.256.": "データシートには、同じ条件での物質 B の R<sub>F</sub> 値は 0.25 とあります。スポット 1 は 0.256 でした。",

    // Uncertainties > maths line
    "percentage error = |0.256 − 0.25| / 0.25 × 100 = 2.4 %": "百分率誤差 = |0.256 − 0.25| / 0.25 × 100 = 2.4 %",

    // Uncertainties > p
    "The percentage error (2.4 %) is smaller than the percentage uncertainty (6.0 %), so spot 1 agrees with B. Spot 2 (0.50 ± 0.02) differs from C (0.69) by 0.19, which is about ten times its uncertainty, so spot 2 is not C. Literature R<sub>F</sub> values change with the paper, the solvent and the temperature, which is why running references on the same paper is more reliable than a data sheet.": "百分率誤差（2.4 %）は百分率の不確かさ（6.0 %）より小さいので、スポット 1 は B と一致します。スポット 2（0.50 ± 0.02）は C（0.69）と 0.19 違い、これは不確かさの約 10 倍なので、スポット 2 は C ではありません。文献の R<sub>F</sub> 値は、紙、溶媒、温度によって変わります。だから、基準物質を同じ紙で展開するほうが、データシートより信頼できるのです。",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Markschemes accept R<sub>F</sub> values within a small range, because distances are read from a diagram. Show both distances and the division. When you compare two values, say whether the difference is bigger than the uncertainty.": "距離は図から読み取るので、採点基準では R<sub>F</sub> 値に少しの幅が認められます。2 つの距離と割り算の両方を示しましょう。2 つの値をくらべるときは、その差が不確かさより大きいかどうかを述べましょう。",

    // Evaluation: errors and improvements > data-toc attribute
    "Evaluation": "評価",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.\">random error</dfn>, such as judging the centre of a spot, scatters the results; repeat runs and averages reduce it. A <dfn data-def=\"An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.\">systematic error</dfn>, such as measuring every distance from the edge of the paper, shifts every result the same way; only a change of method removes it.": "スポットの中心を判断するときのような<dfn data-def=\"くり返した測定値を、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。\">偶然誤差 <span class=\"en-term\">(random error)</span></dfn>は、結果をばらつかせます。展開をくり返して平均をとると小さくなります。すべての距離を紙の端から測るときのような<dfn data-def=\"すべての結果を同じ向きにずらす誤差。くり返しても小さくならない。方法か器具を変える必要がある。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>は、すべての結果を同じ向きにずらします。方法を変えなければ取り除けません。",

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
    "large spots": "スポットが大きい",

    // Evaluation: errors and improvements > table > td
    "spots spread and overlap, the centre is hard to judge, so R<sub>F</sub> values are less precise and two substances may look like one": "スポットが広がって重なり、中心を判断しにくいので、R<sub>F</sub> 値の精密さが下がる。2 つの物質が 1 つに見えることもある",

    // Evaluation: errors and improvements > table > td
    "use a fine capillary; apply small amounts and dry between applications": "細い毛細管を使い、少量ずつつけて、つけるたびに乾かす",

    // Evaluation: errors and improvements > table > th
    "no lid on the tank": "展開槽にふたがない",

    // Evaluation: errors and improvements > table > td
    "solvent evaporates from the paper, so the front rises slowly and unevenly and R<sub>F</sub> values vary between runs": "溶媒が紙から蒸発するので、先端の上がり方が遅く不ぞろいになり、R<sub>F</sub> 値が回ごとにばらつく",

    // Evaluation: errors and improvements > table > td
    "cover the tank and let it fill with solvent vapour before the run": "展開槽にふたをして、展開の前に溶媒の蒸気で満たしておく",

    // Evaluation: errors and improvements > table > th
    "front not marked at once (systematic)": "先端の印をすぐに付けない（系統誤差）",

    // Evaluation: errors and improvements > table > td
    "the solvent evaporates and the front is marked too low, so every R<sub>F</sub> is too high": "溶媒が蒸発して先端の印が低くなりすぎるので、どの R<sub>F</sub> 値も高くなりすぎる",

    // Evaluation: errors and improvements > table > td
    "mark the front in pencil as soon as the paper comes out": "紙を取り出したらすぐに、鉛筆で先端の印を付ける",

    // Evaluation: errors and improvements > table > th
    "solvent reaches the top edge": "溶媒が上端に届く",

    // Evaluation: errors and improvements > table > td
    "the true front distance is unknown, so R<sub>F</sub> cannot be calculated": "先端の本当の距離がわからないので、R<sub>F</sub> 値を計算できない",

    // Evaluation: errors and improvements > table > td
    "take the paper out when the front is about 1 cm from the top": "先端が上端から約 1 cm のところで紙を取り出す",

    // Evaluation: errors and improvements > table > th
    "distances measured from the paper edge (systematic)": "距離を紙の端から測った（系統誤差）",

    // Evaluation: errors and improvements > table > td
    "both distances are too big by the same amount, so R<sub>F</sub> values are too high (closer to 1)": "どちらの距離も同じだけ大きくなりすぎるので、R<sub>F</sub> 値が高くなりすぎる（1 に近づく）",

    // Evaluation: errors and improvements > table > td
    "measure every distance from the baseline": "すべての距離を原線から測る",

    // Evaluation: errors and improvements > table > th
    "spots close together": "スポットどうしが近い",

    // Evaluation: errors and improvements > table > td
    "poor separation; the spots cannot be measured or told apart": "分離が悪く、スポットを測ったり見分けたりできない",

    // Evaluation: errors and improvements > table > td
    "change the solvent composition, use longer paper, or use TLC": "溶媒の組成を変える、長い紙を使う、または TLC を使う",

    // Evaluation: errors and improvements > table > th
    "short run (small distances, random)": "展開距離が短い（距離が小さい、偶然誤差）",

    // Evaluation: errors and improvements > table > td
    "the ±0.1 cm uncertainty is a large percentage of each distance": "±0.1 cm の不確かさが、それぞれの距離に対して大きな割合になる",

    // Evaluation: errors and improvements > table > td
    "let the solvent run further; repeat the run and average the R<sub>F</sub> values": "溶媒をもっと遠くまで進ませる。展開をくり返して R<sub>F</sub> 値の平均をとる",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "These questions are in the style of Paper 1B: method, readings from a chromatogram, R<sub>F</sub> values, uncertainty, and links to polarity.": "これらは Paper 1B 形式の問題です。方法、クロマトグラムの読み取り、R<sub>F</sub> 値、不確かさ、極性とのつながりを扱います。",

    // Exam practice > data-title attribute
    "Lab 2 exam practice": "実験 2 試験対策の問題",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No readings yet.": "まだ読みがありません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{a} % water, {b} % ethanol": "水 {a} %、エタノール {b} %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{a} % ethyl acetate, {b} % hexane": "酢酸エチル {a} %、ヘキサン {b} %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Chromatography paper": "クロマトグラフィー用ろ紙",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "TLC plate (silica)": "TLC プレート（シリカ）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "More polar solvent in the mobile phase": "移動相の極性の大きい溶媒",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Set-up": "設定",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "As in the method": "方法どおり",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No lid on the tank": "展開槽にふたがない",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Baseline drawn in ink": "原線をインクで引いた",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvent above the baseline": "溶媒が原線より上",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Large, wide spots": "大きく広いスポット",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Run": "展開する",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Take out and mark the front": "取り出して先端に印を付ける",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "New paper": "新しい紙",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Mobile phase": "移動相",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Time": "時間",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Status": "状態",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Chromatogram with five lanes: mixture M and reference substances A, B, C and D, a pencil baseline, the solvent front and a ruler whose zero is at the bottom edge": "5 本のレーンがあるクロマトグラム：混合物 M と基準物質 A、B、C、D、鉛筆の原線、溶媒先端、ゼロが下端にある定規",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ruler line (zero at the bottom edge)": "測定線（ゼロは下端）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Baseline": "原線",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvent front": "溶媒先端",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 1 (lowest)": "M、スポット 1（いちばん下）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 2": "M、スポット 2",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 3 (highest)": "M、スポット 3（いちばん上）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot A": "スポット A",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot B": "スポット B",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot C": "スポット C",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot D": "スポット D",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Reading is for": "読みの対象",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Record reading": "読みを記録する",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Raw data (ruler reads to ±0.05 cm)": "生データ（定規は ±0.05 cm まで読める）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Feature": "測る位置",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ruler reading / cm": "定規の読み / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Distance from baseline / cm": "原線からの距離 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Which reference substances are in mixture M?": "混合物 M に含まれている基準物質はどれですか。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Check": "答え合わせ",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Pause": "一時停止",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{m} min {s} s": "{m} 分 {s} 秒",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ready. The solvent level is above the baseline.": "準備完了。溶媒の液面が原線より上にあります。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ready. The spots are on the baseline, above the solvent. Press Run.": "準備完了。スポットは溶媒より上の原線にあります。「展開する」を押しましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Running. Solvent front {d} cm above the baseline.": "展開中。溶媒先端は原線から {d} cm 上です。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Paused.": "一時停止中。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The spots dissolved into the solvent in the tank. There is nothing to measure. Start again with the solvent below the baseline.": "スポットが展開槽の溶媒に溶け出してしまいました。測るものがありません。溶媒を原線より下にして、やりなおしましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The solvent reached the top edge. You cannot tell how far it would have gone, so you cannot find R<sub>F</sub> values. Start again and stop earlier.": "溶媒が上端に届いてしまいました。どこまで進むはずだったかがわからないので、R<sub>F</sub> 値を求められません。やりなおして、もっと早く止めましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Finished. Move the ruler line to each feature and record the reading.": "終了。測定線をそれぞれの位置に動かして、読みを記録しましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Without a lid the solvent evaporated from the paper: the front is uneven and the R<sub>F</sub> values will not repeat well.": "ふたがないので、溶媒が紙から蒸発しました。先端が不ぞろいで、R<sub>F</sub> 値はくり返してもよく一致しません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The ink baseline dissolved and has run up the paper as a smear.": "インクの原線が溶けて、しみになって紙を上がっていきました。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The large spots have spread out, so their centres are hard to judge and neighbouring spots may overlap.": "大きなスポットが広がったので、中心を判断しにくく、となりのスポットと重なることがあります。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Finish the run first: take the paper out and mark the solvent front.": "先に展開を終えましょう。紙を取り出して、溶媒先端に印を付けます。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Check the position: the line is not on the {f}.": "位置を確かめましょう。線が{f}に合っていません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "baseline": "原線",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "solvent front": "溶媒先端",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Measure to the centre of the spot.": "スポットの中心まで測りましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Recorded {f}: {v} cm.": "{f}を記録しました：{v} cm。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No valid result.": "有効な結果がありません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The solvent ran off the top, so the run cannot be used.": "溶媒が上端からはみ出したので、この展開は使えません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 1 of M is level with B and spot 3 is level with D: same R<sub>F</sub> in the same run, so M contains B and D. Spot 2 is not level with any reference, so M also contains a substance that is not A, B, C or D.": "M のスポット 1 は B と、スポット 3 は D と同じ高さにあります。同じ展開で R<sub>F</sub> 値が同じなので、M には B と D が含まれています。スポット 2 はどの基準物質とも同じ高さにないので、M には A、B、C、D のどれでもない物質も含まれています。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Correct.": "正解です。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Not yet.": "まだ正解ではありません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Compare spot 2 of M with spot C carefully. Calculate both R<sub>F</sub> values: they differ by more than the uncertainty.": "M のスポット 2 とスポット C を注意してくらべましょう。両方の R<sub>F</sub> 値を計算すると、その差は不確かさより大きくなります。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "A substance is present if a spot in lane M has the same R<sub>F</sub> value as the reference spot.": "レーン M のスポットが基準物質のスポットと同じ R<sub>F</sub> 値なら、その物質が含まれています。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Model data. Ruler line: dashed. Solvent front: solid line.": "モデルのデータです。測定線：破線。溶媒先端：実線。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Run all six": "6 つすべて展開する",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Graph of RF value against the percentage of the more polar solvent in the mobile phase, for the three spots of mixture M": "混合物 M の 3 つのスポットについて、移動相に含まれる極性の大きい溶媒の割合に対して RF 値を表したグラフ",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Results (RF from measured distances)": "結果（測った距離から求めた RF 値）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Polar solvent / %": "極性の溶媒 / %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Front / cm": "先端 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 1": "スポット 1",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 2": "スポット 2",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 3": "スポット 3",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Smallest gap": "最小の間隔",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Best mobile phase for separating M": "M を分けるのに最もよい移動相",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvents": "溶媒",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ethanol (less polar) mixed with water (more polar).": "エタノール（極性が小さい）と水（極性が大きい）の混合物。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Hexane (non-polar) mixed with ethyl acetate (more polar).": "ヘキサン（無極性）と酢酸エチル（極性が大きい）の混合物。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Good choice.": "よい選択です。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Not the best.": "最もよい選択ではありません。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "All three spots are well apart here: the smallest gap between neighbouring spots is about as large as it gets.": "ここでは 3 つのスポットがよく離れています。となり合うスポットの最小の間隔が、ほぼ最大になっています。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "With so little of the polar solvent, the spots stay near the baseline and crowd together. Look for the column with the largest smallest gap.": "極性の溶媒がこれほど少ないと、スポットは原線の近くにとどまり、くっつき合います。「最小の間隔」が最も大きい列を探しましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "With so much of the polar solvent, the spots are carried near the front and crowd together. Look for the column with the largest smallest gap.": "極性の溶媒がこれほど多いと、スポットは先端の近くまで運ばれ、くっつき合います。「最小の間隔」が最も大きい列を探しましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "more polar solvent in the mobile phase / %": "移動相に含まれる極性の大きい溶媒 / %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Press Run all six.": "「6 つすべて展開する」を押しましょう。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "spot {n}": "{n}",

  }
});
