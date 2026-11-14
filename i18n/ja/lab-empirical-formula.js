/* lab-empirical-formula — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-empirical-formula', {
  strings: {

    // page title (browser tab)
    "Lab 5 Finding an empirical formula by experiment | Structure Lab": "実験 5 実験で組成式を求める | Structure Lab",

    // Finding an empirical formula by experiment > page header > p
    "Lab 5 · Structure 1.4": "実験 5 · Structure 1.4",

    // Finding an empirical formula by experiment > page header > h1
    "Finding an empirical formula by experiment": "実験で組成式を求める",

    // Finding an empirical formula by experiment > page header > span
    "How can the change in mass when a substance is burned or heated tell us the formula of a compound?": "物質を燃焼させたり加熱したりしたときの質量の変化から、化合物の化学式がわかるのはなぜでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "This lab has two parts. In part A you burn magnesium to find the formula of magnesium oxide. In part B you heat a hydrated salt to find how much water of crystallization it holds. Tick each skill when you can do it without notes.": "この実験は 2 つのパートに分かれています。パート A では、マグネシウムを燃焼させて酸化マグネシウムの化学式を求めます。パート B では、水和物の塩を加熱して、水和水がどれだけ含まれているかを求めます。ノートを見ないでできるようになったら、それぞれのスキルにチェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Describe how to burn magnesium in a crucible so that oxygen gets in but no product escapes.": "酸素は入るが生成物は逃げないように、るつぼの中でマグネシウムを燃焼させる方法を記述する。",

    // What you need to be able to do > checklist > span
    "Explain what “heating to constant mass” means and why it is needed.": "「質量が一定になるまで加熱する」とはどういうことか、なぜそれが必要なのかを説明する。",

    // What you need to be able to do > checklist > span
    "Find the value of <i>x</i> in a hydrated salt from the mass lost on heating.": "加熱で失われた質量から、水和物の塩の <i>x</i> の値を求める。",

    // What you need to be able to do > checklist > span
    "Turn mass data into amounts in moles and then into a simple whole-number ratio.": "質量のデータを物質量（mol）に直し、さらに簡単な整数比に直す。",

    // What you need to be able to do > checklist > span
    "Decide when a ratio such as 0.93 can be rounded to 1, and when a ratio such as 1.5 must be multiplied up.": "0.93 のような比を 1 に丸めてよいときと、1.5 のような比に整数をかけなければならないときを判断する。",

    // What you need to be able to do > checklist > span
    "Use the masses of carbon dioxide and water from a combustion to find an empirical formula.": "燃焼で生じた二酸化炭素と水の質量から組成式を求める。",

    // What you need to be able to do > checklist > span
    "Propagate balance uncertainties through a mass difference and a ratio, and compare the result with the expected formula.": "電子てんびんの不確かさを、質量の差と比に伝播させ、その結果を予想される化学式とくらべる。",

    // What you need to be able to do > checklist > span
    "Say how each common error changes the result, and suggest a realistic improvement.": "よくある誤差のそれぞれが結果をどう変えるかを述べ、現実的な改善策を提案する。",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "An <dfn data-def=\"The simplest whole-number ratio of the atoms of each element in a compound.\">empirical formula</dfn> gives the simplest whole-number ratio of atoms in a compound. To find it, you need the mass of each element in a sample. Then <i>n</i> = <i>m</i> ÷ <i>M</i> turns each mass into an amount in moles, and the ratio of the amounts is the ratio of the atoms. The full method is on the topic page: <a href=\"../topics/s1-4.html#formulas\">Empirical and molecular formulas</a>.": "<dfn data-def=\"化合物に含まれる各元素の原子の数の、最も簡単な整数比。\">組成式 <span class=\"en-term\">(empirical formula)</span></dfn>は、化合物の中の原子の数の最も簡単な整数比を表します。組成式を求めるには、試料に含まれる各元素の質量が必要です。次に <i>n</i> = <i>m</i> ÷ <i>M</i> で、それぞれの質量を物質量（mol）に直します。物質量の比が原子の数の比です。くわしい方法はトピックのページにあります：<a href=\"../topics/s1-4.html#formulas\">組成式と分子式</a>。",

    // The chemistry behind it > data-def attribute
    "The simplest whole-number ratio of the atoms of each element in a compound.": "化合物に含まれる各元素の原子の数の、最も簡単な整数比。",

    // The chemistry behind it > h3
    "Part A: magnesium burning in air": "パート A：空気中でのマグネシウムの燃焼",

    // The chemistry behind it > p
    "When magnesium burns, it combines with oxygen from the air. The solid gets <strong>heavier</strong>, because the oxygen atoms now sit in the solid product.": "マグネシウムが燃焼すると、空気中の酸素と結びつきます。酸素原子が固体の生成物に入るので、固体は<strong>重く</strong>なります。",

    // The chemistry behind it > p
    "<span class=\"chem\">2Mg(s) + O2(g) -&gt; 2MgO(s)</span>": "<span class=\"chem\">2Mg(s) + O2(g) -&gt; 2MgO(s)</span>",

    // The chemistry behind it > p
    "So you weigh the magnesium before, and the oxide after. The increase in mass is the mass of oxygen that combined.": "そこで、加熱する前にマグネシウムの質量を、加熱したあとに酸化物の質量をはかります。増えた質量が、結びついた酸素の質量です。",

    // The chemistry behind it > h3
    "Part B: driving off water of crystallization": "パート B：水和水を追い出す",

    // The chemistry behind it > p
    "Many salts form crystals with water molecules built into the lattice. This is <dfn data-def=\"Water molecules that are part of the crystal lattice of a salt, in a fixed ratio to the formula unit.\">water of crystallization</dfn>. Blue hydrated copper(II) sulfate loses this water on gentle heating and turns into a white powder.": "多くの塩は、結晶格子の中に水分子を組みこんだ結晶をつくります。これが<dfn data-def=\"塩の結晶格子の一部になっている水分子。組成式単位に対して一定の比で含まれる。\">水和水 <span class=\"en-term\">(water of crystallization)</span></dfn>です。青色の硫酸銅(II) 水和物は、おだやかに加熱するとこの水を失い、白色の粉末になります。",

    // The chemistry behind it > data-def attribute
    "Water molecules that are part of the crystal lattice of a salt, in a fixed ratio to the formula unit.": "塩の結晶格子の一部になっている水分子。組成式単位に対して一定の比で含まれる。",

    // The chemistry behind it > p
    "<span class=\"chem\">CuSO4.xH2O(s) -&gt; CuSO4(s) + xH2O(g)</span>": "<span class=\"chem\">CuSO4.xH2O(s) -&gt; CuSO4(s) + xH2O(g)</span>",

    // The chemistry behind it > p
    "This time the solid gets <strong>lighter</strong>. The loss in mass is the mass of water. The mass left is the anhydrous salt.": "今度は、固体は<strong>軽く</strong>なります。失われた質量が水の質量です。残った質量は無水塩の質量です。",

    // The chemistry behind it > key idea > p
    "In both parts, the balance cannot see atoms. It sees mass. The whole method rests on knowing which change in mass belongs to which substance: a gain of oxygen in part A, a loss of water in part B.": "どちらのパートでも、電子てんびんに原子は見えません。見えるのは質量です。この方法全体は、どの質量の変化がどの物質によるものかを知っていることにかかっています。パート A では酸素の増加、パート B では水の減少です。",

    // The chemistry behind it > h3
    "Linking question: combustion data": "つながりの問い（Linking question）：燃焼のデータ",

    // The chemistry behind it > p
    "The same idea works for compounds of carbon and hydrogen. Burn a known mass completely in excess oxygen and collect the products. All the carbon ends up in <span class=\"chem\">CO2</span> and all the hydrogen in <span class=\"chem\">H2O</span>. So <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) and <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). If the compound also contains oxygen, its mass is found by difference. You will meet one of these in the exam practice.": "同じ考え方は、炭素と水素の化合物にも使えます。質量のわかっている試料を過剰の酸素中で完全燃焼させ、生成物を集めます。炭素はすべて <span class=\"chem\">CO2</span> に、水素はすべて <span class=\"chem\">H2O</span> になります。だから <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)、<i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>) です。化合物が酸素も含む場合、その質量は差から求めます。試験対策の問題で、このような問題が 1 つ出てきます。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> To find the empirical formula of magnesium oxide, and the value of <i>x</i> in <span class=\"chem\">CuSO4.xH2O</span>, from measured masses.": "<strong>目的：</strong>測定した質量から、酸化マグネシウムの組成式と、<span class=\"chem\">CuSO4.xH2O</span> の <i>x</i> の値を求める。",

    // Aim, variables and safety > p
    "These are measurements, not investigations of a cause and effect, so there is no independent variable to change. What matters is what you measure and what you keep the same.": "これらは測定であって、原因と結果を調べる実験ではないので、変える独立変数はありません。大切なのは、何を測定し、何を一定に保つかです。",

    // Aim, variables and safety > table > caption
    "Variables in the two parts": "2 つのパートの変数",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    // Method > h3
    "Part A: magnesium oxide": "パート A：酸化マグネシウム",

    // Aim, variables and safety > table > th
    "Part B: hydrated salt": "パート B：水和物の塩",

    // Aim, variables and safety > table > th
    "Measured": "測定する量",

    // Aim, variables and safety > table > td
    "Mass of crucible and lid; with magnesium; with the oxide after each heating": "るつぼとふたの質量。マグネシウムを入れた質量。加熱するたびの、酸化物を入れた質量",

    // Aim, variables and safety > table > td
    "Mass of crucible; with the hydrate; after each heating": "るつぼの質量。水和物を入れた質量。加熱するたびの質量",

    // Aim, variables and safety > table > th
    "Calculated": "計算する量",

    // Aim, variables and safety > table > td
    "Mass of magnesium, mass of oxygen, mole ratio Mg : O": "マグネシウムの質量、酸素の質量、物質量の比 Mg : O",

    // Aim, variables and safety > table > td
    "Mass of anhydrous salt, mass of water, value of <i>x</i>": "無水塩の質量、水の質量、<i>x</i> の値",

    // Aim, variables and safety > table > th
    "Controlled": "制御変数",

    // Aim, variables and safety > table > td
    "Same balance for every reading; same crucible and lid; heat until the mass is constant": "どの読みにも同じ電子てんびんを使う。同じるつぼとふたを使う。質量が一定になるまで加熱する",

    // Aim, variables and safety > table > td
    "Same balance; same crucible; gentle heating; cool the same way before every weighing": "同じ電子てんびんを使う。同じるつぼを使う。おだやかに加熱する。質量をはかる前に毎回同じ方法で冷ます",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "Porcelain crucible with lid, pipeclay triangle, tripod, heatproof mat, Bunsen burner, crucible tongs": "ふたつきの磁製るつぼ、三角架、三脚、耐熱マット、ガスバーナー、るつぼばさみ",

    // Aim, variables and safety > li
    "Balance reading to 0.01 g (or 0.001 g if available)": "0.01 g まで読める電子てんびん（あれば 0.001 g まで読めるもの）",

    // Aim, variables and safety > li
    "About 25 cm of magnesium ribbon, cleaned with emery paper to remove the dull oxide layer": "約 25 cm のマグネシウムリボン。紙やすりで表面のくすんだ酸化物の層を取り除いておく",

    // Aim, variables and safety > li
    "About 2.5 g of hydrated copper(II) sulfate crystals; a desiccator for cooling if available": "硫酸銅(II) 水和物の結晶約 2.5 g。あれば冷却用のデシケーター",

    // Aim, variables and safety > p
    "Wear eye protection throughout. Burning magnesium gives out a very bright white light that includes ultraviolet: do not look straight at it, and lift the lid only a little, with tongs. The crucible, lid, triangle and tripod stay hot long after they stop glowing, so move them only with tongs and let them cool on the heatproof mat. Keep the rest of the magnesium ribbon away from the flame. Copper(II) sulfate is harmful if swallowed and irritates the eyes and skin; wash your hands after use and put the residue in the waste container, not the sink, because it is toxic to aquatic life. Do not heat copper(II) sulfate strongly: above about 600 °C it decomposes and gives off sulfur trioxide, which is corrosive.": "実験のあいだずっと保護めがねを着けましょう。燃焼するマグネシウムは、紫外線を含むとても明るい白い光を出します。直接見ないようにし、ふたはるつぼばさみで少しだけ持ち上げます。るつぼ、ふた、三角架、三脚は、赤く光らなくなってもしばらく熱いままです。動かすときは必ずるつぼばさみを使い、耐熱マットの上で冷ましましょう。残りのマグネシウムリボンは炎から遠ざけておきます。硫酸銅(II) は飲みこむと有害で、目や皮膚を刺激します。使ったあとは手を洗い、残った固体は水生生物に有毒なので、流しではなく廃棄物の容器に入れましょう。硫酸銅(II) を強く加熱してはいけません。約 600 °C を超えると分解して、腐食性のある三酸化硫黄を出します。",

    // Method > h2
    "Method": "方法",

    // Method > li
    "Heat the empty crucible and lid for a minute, let them cool, then weigh them together. <span class=\"muted\">This drives off any moisture, so the first reading is a true starting mass.</span>": "空のるつぼとふたを 1 分間加熱し、冷ましてから、いっしょに質量をはかります。<span class=\"muted\">これで水分が追い出されるので、最初の読みが正しい出発点の質量になります。</span>",

    // Method > li
    "Coil the cleaned magnesium ribbon loosely, put it in the crucible, and weigh crucible, lid and magnesium together.": "きれいにしたマグネシウムリボンをゆるく巻いてるつぼに入れ、るつぼ、ふた、マグネシウムをいっしょにはかります。",

    // Method > li
    "Put the crucible on the pipeclay triangle with the lid on. Heat gently at first, then strongly.": "ふたをしたるつぼを三角架にのせます。はじめはおだやかに、そのあと強く加熱します。",

    // Method > li
    "Every minute or so, lift the lid slightly with tongs for a moment, then put it back. <span class=\"muted\">Lifting lets fresh air in, so there is oxygen for the reaction. Putting it back stops the white smoke of magnesium oxide escaping.</span>": "1 分ほどごとに、るつぼばさみでふたを少しだけ一瞬持ち上げ、またもどします。<span class=\"muted\">持ち上げると新しい空気が入るので、反応に必要な酸素が補われます。もどすと、酸化マグネシウムの白い煙が逃げるのを防げます。</span>",

    // Method > li
    "When the magnesium no longer glows when the lid is lifted, take the lid off and heat strongly for two more minutes.": "ふたを持ち上げてもマグネシウムが光らなくなったら、ふたを取って、さらに 2 分間強く加熱します。",

    // Method > li
    "Let everything cool, then weigh crucible, lid and contents.": "すべてを冷ましてから、るつぼ、ふた、中身の質量をはかります。",

    // Method > li
    "Heat again for two minutes, cool and reweigh. Repeat until two readings in a row agree to within 0.01 g. <span class=\"muted\">This is heating to constant mass. It shows that the reaction is complete.</span>": "もう一度 2 分間加熱し、冷ましてはかりなおします。続けて 2 回の読みが 0.01 g 以内で一致するまでくり返します。<span class=\"muted\">これが「質量が一定になるまで加熱する」ことです。反応が完了したことがわかります。</span>",

    // Method > h3
    "Part B: hydrated copper(II) sulfate": "パート B：硫酸銅(II) 水和物",

    // Method > li
    "Weigh a clean, dry crucible.": "きれいで乾いたるつぼの質量をはかります。",

    // Method > li
    "Add about 2.5 g of the blue crystals and weigh again.": "青い結晶を約 2.5 g 加えて、もう一度はかります。",

    // Method > li
    "Heat gently, with the lid off, stirring now and then with a glass rod. <span class=\"muted\">Gentle heating stops the crystals spitting out, and stops the anhydrous salt decomposing.</span>": "ふたを取ったまま、ときどきガラス棒でかき混ぜながら、おだやかに加熱します。<span class=\"muted\">おだやかに加熱すると、結晶がはね飛ぶのを防ぎ、無水塩が分解するのも防げます。</span>",

    // Method > li
    "When the solid is white all through, let it cool in a desiccator, then weigh. <span class=\"muted\">Anhydrous copper(II) sulfate takes water back from the air, so it should not cool on the open bench.</span>": "固体が全体に白くなったら、デシケーターの中で冷ましてから、質量をはかります。<span class=\"muted\">無水硫酸銅(II) は空気中の水を取りこんでもどるので、実験台の上に出したまま冷ましてはいけません。</span>",

    // Method > li
    "Heat, cool and weigh again until two readings agree to within 0.01 g.": "2 回の読みが 0.01 g 以内で一致するまで、加熱し、冷まし、はかることをくり返します。",

    // Method > exam tip (shown in English + translation) > p
    "“Heat to constant mass” earns its mark only with the detail: heat, cool, weigh, and <strong>repeat until two consecutive masses are the same</strong> (within the balance’s precision). Then say why: all the magnesium has reacted, or all the water has been removed.": "「質量が一定になるまで加熱する」で点がもらえるのは、くわしく書いたときだけです。加熱し、冷まし、質量をはかり、<strong>続けて 2 回の質量が同じになるまでくり返す</strong>（電子てんびんの精密さの範囲で）。そして理由も述べましょう。マグネシウムがすべて反応した、または水がすべて取り除かれた、ということです。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > p
    "Each run uses a new piece of apparatus and a new sample, so your readings change a little from run to run, just as in a real lab. Work through the buttons from left to right. Write your readings down, or copy the raw data table, before you process them.": "毎回新しい器具と新しい試料を使うので、実際の実験と同じように、読みは回ごとに少しずつ違います。ボタンを左から右へ順に進めましょう。データを処理する前に、読みを書きとめるか、生データの表をコピーしましょう。",

    // Run the experiment > widget > data-title attribute
    "Part A: burning magnesium in a crucible": "パート A：るつぼの中でマグネシウムを燃焼させる",

    // Run the experiment > widget > figcaption
    "Choose how you use the lid and which balance you have, then weigh, add the magnesium and heat until the mass stops changing. Try the “lid left off” and “lid never lifted” options to see what each error does to the ratio.": "ふたの使い方と電子てんびんの種類を選び、質量をはかり、マグネシウムを加え、質量が変わらなくなるまで加熱します。「ふたをしない」と「ふたを一度も持ち上げない」も試して、それぞれの誤差が比にどう影響するかを見てみましょう。",

    // Run the experiment > widget > data-title attribute
    "Part B: heating hydrated copper(II) sulfate": "パート B：硫酸銅(II) 水和物を加熱する",

    // Run the experiment > widget > figcaption
    "Heat gently and cool in a desiccator for a good result. Then try strong heating, or cooling on the open bench, and see why the mass never settles or why <i>x</i> comes out wrong.": "よい結果を得るには、おだやかに加熱し、デシケーターの中で冷まします。次に、強い加熱や、実験台の上で冷ますことも試して、なぜ質量が一定にならないのか、なぜ <i>x</i> が違う値になるのかを見てみましょう。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > p
    "The route is always the same: masses of each part, then amounts in moles, then divide by the smallest amount, then a whole-number ratio. Use the data booklet <i>A</i><sub>r</sub> values: Mg = 24.31, O = 16.00, H = 1.01, S = 32.07, Cu = 63.55.": "手順はいつも同じです。各部分の質量、次に物質量（mol）、次に最も小さい物質量で割り、最後に整数比にします。データブックレットの <i>A</i><sub>r</sub> の値を使います：Mg = 24.31、O = 16.00、H = 1.01、S = 32.07、Cu = 63.55。",

    // Processing the data > worked example > h3
    "The formula of magnesium oxide": "酸化マグネシウムの化学式",

    // Processing the data > worked example > p
    "A student records these readings on a balance that reads to 0.01 g.": "ある生徒が、0.01 g まで読める電子てんびんで次の読みを記録しました。",

    // Processing the data > worked example > table > caption
    "Part A raw data": "パート A の生データ",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reading": "測定",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Mass / g": "質量 / g",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and lid": "るつぼとふた",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible, lid and magnesium": "るつぼ、ふた、マグネシウム",

    // Processing the data > worked example > table > th
    "After heating 1": "1 回目の加熱のあと",

    // Processing the data > worked example > table > th
    "After heating 2": "2 回目の加熱のあと",

    // Processing the data > worked example > table > th
    "After heating 3": "3 回目の加熱のあと",

    // Processing the data > worked example > p
    "Determine the empirical formula of magnesium oxide.": "酸化マグネシウムの組成式を求めなさい (determine)。",

    // Processing the data > worked example > data-title attribute
    "Find the mass of each element": "各元素の質量を求める",

    // Processing the data > worked example > p
    "Use the last, constant reading. The gain in mass is the oxygen that combined.": "最後の、一定になった読みを使います。増えた質量が、結びついた酸素です。",

    // Processing the data > worked example > maths line
    "mass of Mg = 26.78 g − 26.42 g = 0.36 g": "Mg の質量 = 26.78 g − 26.42 g = 0.36 g",

    // Processing the data > worked example > maths line
    "mass of O = 27.00 g − 26.78 g = 0.22 g": "O の質量 = 27.00 g − 26.78 g = 0.22 g",

    // Processing the data > worked example > data-title attribute
    "Convert each mass to moles": "それぞれの質量を物質量に直す",

    // Processing the data > worked example > p
    "Atoms combine in a ratio of numbers, not of masses, so use <i>n</i> = <i>m</i> ÷ <i>M</i> for each element.": "原子は質量の比ではなく数の比で結びつくので、各元素について <i>n</i> = <i>m</i> ÷ <i>M</i> を使います。",

    // Processing the data > worked example > data-title attribute
    "Divide by the smaller amount": "小さいほうの物質量で割る",

    // Processing the data > worked example > p
    "This makes the smaller number exactly 1, so the ratio is easy to read.": "こうすると小さいほうの数がちょうど 1 になるので、比が読み取りやすくなります。",

    // Processing the data > worked example > maths line
    "or, as O ÷ Mg: 0.01375 ÷ 0.01481 = 0.93": "または O ÷ Mg として：0.01375 ÷ 0.01481 = 0.93",

    // Processing the data > worked example > data-title attribute
    "Judge the whole-number ratio": "整数比を判断する",

    // Processing the data > worked example > p
    "1.08 : 1 is close to 1 : 1. The gap is small enough to be experimental error (see the uncertainty section). It is not close to a real ratio such as 3 : 2 = 1.5 : 1.": "1.08 : 1 は 1 : 1 に近い値です。この差は、実験の誤差で説明できるくらい小さなものです（不確かさのセクションを見てください）。3 : 2 = 1.5 : 1 のような、本当にありうる比には近くありません。",

    // Processing the data > worked example > maths line
    "Mg : O ≈ 1 : 1, so the empirical formula is <b>MgO</b>": "Mg : O ≈ 1 : 1、よって組成式は <b>MgO</b>",

    // Processing the data > worked example > p
    "<span class=\"chem\">MgO</span> (measured ratio Mg : O = 1.08 : 1)": "<span class=\"chem\">MgO</span>（測定した比 Mg : O = 1.08 : 1）",

    // Processing the data > common mistake > p
    "Using the masses directly (0.36 : 0.22) instead of moles gives a ratio that means nothing. Another slip is to take the mass of oxygen from the first heating reading. Always use the reading where the mass has become constant.": "物質量ではなく質量をそのまま使うと（0.36 : 0.22）、意味のない比になります。もう 1 つのミスは、1 回目の加熱のあとの読みから酸素の質量を求めることです。必ず、質量が一定になった読みを使いましょう。",

    // Processing the data > h3
    "Now you: the value of <i>x</i> in a hydrate": "やってみよう：水和物の <i>x</i> の値",

    // Processing the data > p
    "For a hydrate, the two “parts” are the anhydrous salt and the water. Treat <span class=\"chem\">CuSO4</span> as one unit with <i>M</i> = 159.62 g mol<sup>−1</sup>, and water with <i>M</i> = 18.02 g mol<sup>−1</sup>. Then <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>).": "水和物の場合、2 つの「部分」は無水塩と水です。<span class=\"chem\">CuSO4</span> を <i>M</i> = 159.62 g mol<sup>−1</sup> の 1 つの単位として、水を <i>M</i> = 18.02 g mol<sup>−1</sup> として扱います。すると <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>) です。",

    // Processing the data > try it > p
    "A student heats hydrated copper(II) sulfate. Crucible: 18.47 g. Crucible and hydrate: 21.03 g. After heating: 20.25 g, 20.14 g, 20.12 g, 20.12 g. Calculate the value of <i>x</i> in <span class=\"chem\">CuSO4.xH2O</span> from these data, before rounding to a whole number.": "ある生徒が、硫酸銅(II) 水和物を加熱します。るつぼ：18.47 g。るつぼと水和物：21.03 g。加熱のあと：20.25 g、20.14 g、20.12 g、20.12 g。これらのデータから、<span class=\"chem\">CuSO4.xH2O</span> の <i>x</i> の値を、整数に丸める前の値で計算しなさい。",

    // Processing the data > try it > li
    "Mass of anhydrous salt = final mass − crucible. Mass of water = (crucible + hydrate) − final mass.": "無水塩の質量 = 最後の質量 − るつぼ。水の質量 = (るつぼ + 水和物) − 最後の質量。",

    // Processing the data > try it > li
    "Anhydrous: 1.65 g; water: 0.91 g. Now find <i>n</i> of each and divide <i>n</i>(water) by <i>n</i>(<span class=\"chem\">CuSO4</span>).": "無水塩：1.65 g、水：0.91 g。次に、それぞれの <i>n</i> を求め、<i>n</i>(水) を <i>n</i>(<span class=\"chem\">CuSO4</span>) で割ります。",

    // Processing the data > try it > maths line
    "mass of <span class=\"chem\">CuSO4</span> = 20.12 g − 18.47 g = 1.65 g": "<span class=\"chem\">CuSO4</span> の質量 = 20.12 g − 18.47 g = 1.65 g",

    // Processing the data > try it > maths line
    "mass of water = 21.03 g − 20.12 g = 0.91 g": "水の質量 = 21.03 g − 20.12 g = 0.91 g",

    // Processing the data > try it > p
    "<i>x</i> = 4.9 to 2 significant figures (0.91 g has only 2). The nearest whole number is 5, so the formula is <span class=\"chem\">CuSO4.5H2O</span>.": "<i>x</i> = 4.9（有効数字 2 桁。0.91 g は 2 桁しかない）。最も近い整数は 5 なので、化学式は <span class=\"chem\">CuSO4.5H2O</span> です。",

    // Processing the data > key idea > p
    "Approximation is a judgement, not a rule. Round 0.93 or 4.89 to the nearest whole number only when the difference is within your experimental uncertainty. A ratio such as 1 : 1.50 or 1 : 1.33 is real: multiply by 2 or 3 to get whole numbers (2 : 3, 3 : 4).": "近似は判断であって、決まった規則ではありません。0.93 や 4.89 を最も近い整数に丸めるのは、その差が実験の不確かさの範囲に入るときだけです。1 : 1.50 や 1 : 1.33 のような比は本当の比です。2 や 3 をかけて整数にします（2 : 3、3 : 4）。",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > p
    "A balance that reads to 0.01 g has an uncertainty of ±0.01 g in every reading. The masses you use are <strong>differences</strong> of two readings, so their uncertainties add.": "0.01 g まで読める電子てんびんでは、どの読みにも ±0.01 g の不確かさがあります。使う質量は 2 つの読みの<strong>差</strong>なので、不確かさは足し合わされます。",

    // Uncertainties > table > caption
    "Rules for propagating uncertainties": "不確かさの伝播の規則",

    // Uncertainties > table > th
    "Operation": "計算",

    // Uncertainties > table > th
    "What to add": "足すもの",

    // Uncertainties > table > th
    "Example": "例",

    // Uncertainties > table > th
    "Adding or subtracting": "足し算・引き算",

    // Uncertainties > table > td
    "absolute uncertainties": "絶対不確かさ",

    // Uncertainties > table > th
    "Multiplying or dividing": "かけ算・割り算",

    // Uncertainties > table > td
    "percentage uncertainties": "百分率の不確かさ",

    // Uncertainties > table > td
    "<span class=\"mono\">ratio = <i>n</i>(O) ÷ <i>n</i>(Mg)</span>: add the % uncertainties of the two masses": "<span class=\"mono\">比 = <i>n</i>(O) ÷ <i>n</i>(Mg)</span>：2 つの質量の百分率の不確かさを足す",

    // Uncertainties > p
    "The molar masses come from the data booklet. Their uncertainty is tiny compared with the balance, so you can ignore it.": "モル質量はデータブックレットの値です。その不確かさは電子てんびんの不確かさにくらべてとても小さいので、無視できます。",

    // Uncertainties > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Uncertainties > worked example > h3
    "How sure is the magnesium oxide ratio?": "酸化マグネシウムの比はどれくらい確かか",

    // Uncertainties > worked example > p
    "Use the part A data above (balance ±0.01 g). Find the uncertainty in the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93, and compare it with the expected value of 1.00 for <span class=\"chem\">MgO</span>.": "上のパート A のデータ（電子てんびん ±0.01 g）を使います。比 <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 の不確かさを求め、<span class=\"chem\">MgO</span> で予想される値 1.00 とくらべなさい。",

    // Uncertainties > worked example > data-title attribute
    "Absolute uncertainty of each mass": "それぞれの質量の絶対不確かさ",

    // Uncertainties > worked example > p
    "Each mass is a difference of two readings, each ±0.01 g.": "それぞれの質量は、±0.01 g の 2 つの読みの差です。",

    // Uncertainties > worked example > maths line
    "mass of Mg = 0.36 ± 0.02 g": "Mg の質量 = 0.36 ± 0.02 g",

    // Uncertainties > worked example > maths line
    "mass of O = 0.22 ± 0.02 g": "O の質量 = 0.22 ± 0.02 g",

    // Uncertainties > worked example > data-title attribute
    "Turn them into percentages": "百分率に直す",

    // Uncertainties > worked example > p
    "Percentage uncertainty = absolute uncertainty ÷ value × 100.": "百分率の不確かさ = 絶対不確かさ ÷ 値 × 100。",

    // Uncertainties > worked example > data-title attribute
    "Add them for the ratio": "比のために足し合わせる",

    // Uncertainties > worked example > p
    "<i>n</i> = <i>m</i> ÷ <i>M</i> carries the same percentage as the mass, and a ratio is a division, so the percentages add.": "<i>n</i> = <i>m</i> ÷ <i>M</i> の百分率の不確かさは質量と同じで、比は割り算なので、百分率を足します。",

    // Uncertainties > worked example > maths line
    "ratio: 5.6 % + 9.1 % = 14.7 % ≈ 15 %": "比：5.6 % + 9.1 % = 14.7 % ≈ 15 %",

    // Uncertainties > worked example > maths line
    "0.93 × 0.15 = 0.14, so ratio = 0.93 ± 0.14": "0.93 × 0.15 = 0.14、よって比 = 0.93 ± 0.14",

    // Uncertainties > worked example > data-title attribute
    "Compare with the expected value": "予想される値とくらべる",

    // Uncertainties > worked example > p
    "Percentage error = |experimental − expected| ÷ expected × 100.": "百分率誤差 = |実験値 − 予想される値| ÷ 予想される値 × 100。",

    // Uncertainties > worked example > maths line
    "percentage error = |0.93 − 1.00| ÷ 1.00 × 100 = 7 %": "百分率誤差 = |0.93 − 1.00| ÷ 1.00 × 100 = 7 %",

    // Uncertainties > worked example > maths line
    "7 % &lt; 15 %: the difference lies <b>inside</b> the uncertainty": "7 % &lt; 15 %：差は不確かさの<b>範囲内</b>にある",

    // Uncertainties > worked example > p
    "Ratio = 0.93 ± 0.14 (about ±15 %). The result agrees with <span class=\"chem\">MgO</span> within its uncertainty. Random error from the balance is large enough to explain the whole gap.": "比 = 0.93 ± 0.14（約 ±15 %）。この結果は、不確かさの範囲で <span class=\"chem\">MgO</span> と一致しています。電子てんびんによる偶然誤差だけで、差をすべて説明できます。",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Quote an absolute uncertainty to one significant figure and the value to the same decimal place: 0.9 ± 0.1, not 0.93 ± 0.14, in a final answer. When the percentage error is <strong>bigger</strong> than the percentage uncertainty, random error alone cannot explain it: look for a systematic error.": "最終的な答えでは、絶対不確かさを有効数字 1 桁で示し、値も同じ小数の位までにします。0.93 ± 0.14 ではなく 0.9 ± 0.1 です。百分率誤差が百分率の不確かさより<strong>大きい</strong>ときは、偶然誤差だけでは説明できません。系統誤差を探しましょう。",

    // Uncertainties > p
    "The magnesium experiment uses small masses, so a 0.01 g reading is a large fraction of each. A balance reading to 0.001 g makes each mass about ten times more precise. A longer piece of ribbon helps too. Try both in the experiment above.": "マグネシウムの実験では質量が小さいので、0.01 g の読みがそれぞれの質量の大きな割合を占めます。0.001 g まで読める電子てんびんを使えば、どの質量も約 10 倍精密になります。マグネシウムリボンを長くするのも効果があります。上の実験で両方を試してみましょう。",

    // Uncertainties > try it > p
    "Use the hydrate data from the “Try it” in the processing section (anhydrous salt 1.65 g, water 0.91 g; balance ±0.01 g). Calculate the percentage uncertainty in the value of <i>x</i>.": "データの処理のセクションの「やってみよう」の水和物のデータ（無水塩 1.65 g、水 0.91 g、電子てんびん ±0.01 g）を使います。<i>x</i> の値の百分率の不確かさを計算しなさい。",

    // Uncertainties > try it > li
    "Each mass is a difference of two readings, so each has an absolute uncertainty of ±0.02 g.": "それぞれの質量は 2 つの読みの差なので、どちらも絶対不確かさは ±0.02 g です。",

    // Uncertainties > try it > li
    "<i>x</i> is a ratio of the two amounts. Add the two percentage uncertainties: 0.02 ÷ 0.91 × 100 and 0.02 ÷ 1.65 × 100.": "<i>x</i> は 2 つの物質量の比です。2 つの百分率の不確かさを足しましょう：0.02 ÷ 0.91 × 100 と 0.02 ÷ 1.65 × 100。",

    // Uncertainties > try it > maths line
    "water: 0.02 ÷ 0.91 × 100 = 2.20 %": "水：0.02 ÷ 0.91 × 100 = 2.20 %",

    // Uncertainties > try it > maths line
    "anhydrous salt: 0.02 ÷ 1.65 × 100 = 1.21 %": "無水塩：0.02 ÷ 1.65 × 100 = 1.21 %",

    // Uncertainties > try it > p
    "So <i>x</i> = 4.89 ± 0.17, or 4.9 ± 0.2. The expected value 5 lies inside this range, and the percentage error (2.3 %) is smaller than the uncertainty.": "したがって <i>x</i> = 4.89 ± 0.17、つまり 4.9 ± 0.2 です。予想される値 5 はこの範囲に入っていて、百分率誤差（2.3 %）は不確かさより小さくなっています。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差と改善",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">random error</dfn> scatters results both ways; repeats and a more precise balance reduce it. A <dfn data-def=\"An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.\">systematic error</dfn> pushes every result the same way; only a change of method removes it. In these experiments most of the important errors are systematic.": "<dfn data-def=\"くり返した測定値を、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。\">偶然誤差 <span class=\"en-term\">(random error)</span></dfn>は、結果を両方向にばらつかせます。くり返すことや、より精密な電子てんびんを使うことで小さくなります。<dfn data-def=\"すべての結果を同じ向きにずらす誤差。たとえば、いつも低すぎるなど。くり返しても取り除けない。方法を変える必要がある。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>は、すべての結果を同じ向きにずらします。方法を変えなければ取り除けません。これらの実験では、重要な誤差のほとんどが系統誤差です。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "くり返した測定値を、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.": "すべての結果を同じ向きにずらす誤差。たとえば、いつも低すぎるなど。くり返しても取り除けない。方法を変える必要がある。",

    // Evaluation: errors and improvements > table > caption
    "Common errors, their effect, and how to fix them": "よくある誤差、その影響、解決のしかた",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > th
    "White smoke of <span class=\"chem\">MgO</span> escapes when the lid is off or lifted too long": "ふたをしていない、または長く持ち上げすぎて、<span class=\"chem\">MgO</span> の白い煙が逃げる",

    // Evaluation: errors and improvements > table > td
    "Final mass too low, so mass of O too low: ratio O : Mg too <strong>low</strong> (looks like too much Mg)": "最後の質量が低すぎるので、O の質量が低すぎる。比 O : Mg が<strong>低く</strong>なりすぎる（Mg が多すぎるように見える）",

    // Evaluation: errors and improvements > table > td
    "Keep the lid on; lift it only slightly and briefly with tongs": "ふたをしておく。るつぼばさみで、少しだけ短い時間持ち上げる",

    // Evaluation: errors and improvements > table > th
    "Lid never lifted, so too little oxygen gets in": "ふたを一度も持ち上げないので、酸素が十分に入らない",

    // Evaluation: errors and improvements > table > td
    "Some Mg does not react; mass of O too low: ratio too <strong>low</strong>. The mass can look constant even though the reaction is unfinished": "Mg の一部が反応しない。O の質量が低すぎる。比が<strong>低く</strong>なりすぎる。反応が終わっていなくても、質量が一定に見えることがある",

    // Evaluation: errors and improvements > table > td
    "Lift the lid every minute; check that no grey metal is left before the final weighings": "1 分ごとにふたを持ち上げる。最後に質量をはかる前に、灰色の金属が残っていないかを確かめる",

    // Evaluation: errors and improvements > table > th
    "Some magnesium reacts with nitrogen in the air to form <span class=\"chem\">Mg3N2</span>": "マグネシウムの一部が空気中の窒素と反応して <span class=\"chem\">Mg3N2</span> ができる",

    // Evaluation: errors and improvements > table > td
    "Nitride is lighter than the oxide for the same Mg, so mass gain too small: ratio too <strong>low</strong>": "同じ量の Mg からできる窒化物は酸化物より軽いので、質量の増加が小さすぎる。比が<strong>低く</strong>なりすぎる",

    // Evaluation: errors and improvements > table > td
    "Add a few drops of distilled water to the cooled solid and heat again: the nitride turns into the oxide (ammonia is given off)": "冷ました固体に蒸留水を数滴加えて、もう一度加熱する。窒化物が酸化物に変わる（アンモニアが出る）",

    // Evaluation: errors and improvements > table > th
    "Oxide layer on the ribbon before you start": "始める前のリボンに酸化物の層がある",

    // Evaluation: errors and improvements > table > td
    "Part of the “magnesium” mass is already oxide, so less oxygen is gained: ratio too <strong>low</strong>": "「マグネシウム」の質量の一部がすでに酸化物なので、増える酸素が少なくなる。比が<strong>低く</strong>なりすぎる",

    // Evaluation: errors and improvements > table > td
    "Clean the ribbon with emery paper just before weighing": "質量をはかる直前に、紙やすりでリボンをみがく",

    // Evaluation: errors and improvements > table > th
    "Hydrate not heated to constant mass (some water left)": "水和物を質量が一定になるまで加熱していない（水が残っている）",

    // Evaluation: errors and improvements > table > td
    "Mass of water too low and anhydrous mass too high: <i>x</i> too <strong>low</strong>": "水の質量が低すぎ、無水塩の質量が高すぎる。<i>x</i> が<strong>低く</strong>なりすぎる",

    // Evaluation: errors and improvements > table > td
    "Heat, cool and reweigh until two masses agree within 0.01 g": "2 回の質量が 0.01 g 以内で一致するまで、加熱し、冷まし、はかりなおす",

    // Evaluation: errors and improvements > table > th
    "Heating the hydrate too strongly (solid turns black)": "水和物を強く加熱しすぎる（固体が黒くなる）",

    // Evaluation: errors and improvements > table > td
    "<span class=\"chem\">CuSO4</span> decomposes to <span class=\"chem\">CuO</span> and <span class=\"chem\">SO3</span>; extra mass is lost and counted as water: <i>x</i> too <strong>high</strong>. The mass never becomes constant": "<span class=\"chem\">CuSO4</span> が <span class=\"chem\">CuO</span> と <span class=\"chem\">SO3</span> に分解する。余分な質量が失われ、水として数えられてしまう。<i>x</i> が<strong>高く</strong>なりすぎる。質量は一定にならない",

    // Evaluation: errors and improvements > table > td
    "Heat gently with a small flame; stop when the solid is white all through": "小さな炎でおだやかに加熱する。固体が全体に白くなったらやめる",

    // Evaluation: errors and improvements > table > th
    "Crystals spit out of the crucible at the start": "はじめに結晶がるつぼからはね飛ぶ",

    // Evaluation: errors and improvements > table > td
    "Lost solid is counted as water: <i>x</i> too <strong>high</strong>": "失われた固体が水として数えられる。<i>x</i> が<strong>高く</strong>なりすぎる",

    // Evaluation: errors and improvements > table > td
    "Heat gently at first, with a lid partly on, and stir": "はじめはふたを少しずらしてのせ、おだやかに加熱し、かき混ぜる",

    // Evaluation: errors and improvements > table > th
    "Anhydrous salt cools on the open bench": "無水塩を実験台の上で冷ます",

    // Evaluation: errors and improvements > table > td
    "It takes water back from the air, so the final mass is too high: <i>x</i> too <strong>low</strong>": "空気中の水を取りこむので、最後の質量が高すぎる。<i>x</i> が<strong>低く</strong>なりすぎる",

    // Evaluation: errors and improvements > table > td
    "Cool in a desiccator, and weigh as soon as it is cool": "デシケーターの中で冷まし、冷めたらすぐに質量をはかる",

    // Evaluation: errors and improvements > table > th
    "Small masses read on a 0.01 g balance": "0.01 g の電子てんびんで小さな質量を読む",

    // Evaluation: errors and improvements > table > td
    "Random error: large percentage uncertainty (about 15 % in the Mg : O ratio)": "偶然誤差。百分率の不確かさが大きい（Mg : O の比で約 15 %）",

    // Evaluation: errors and improvements > table > td
    "Use a 0.001 g balance, a bigger sample, and repeat the whole experiment": "0.001 g の電子てんびんを使い、試料を多くし、実験全体をくり返す",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "An evaluation point earns marks when it has three parts: the error, its direction (too high or too low, and why), and an improvement that fixes <em>that</em> error. “Human error” and “be more careful” earn nothing.": "評価のポイントで点がもらえるのは、3 つの部分がそろったときです。誤差、その向き（高すぎるか低すぎるか、そしてその理由）、そして<em>その</em>誤差を解決する改善策です。「人為的な誤差（human error）」や「もっと注意する」では点になりません。",

    // Evaluation: errors and improvements > not needed for IB > p
    "You do not need to learn the reaction of magnesium with nitrogen or the decomposition of copper(II) sulfate for the exam. They are here only to explain the errors. You are expected to reason about the direction of an error from the data, not to recall these equations.": "マグネシウムと窒素の反応や、硫酸銅(II) の分解を試験のために覚える必要はありません。ここでは誤差を説明するためだけに出てきます。求められているのは、これらの反応式を思い出すことではなく、データから誤差の向きを考えることです。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "These questions are in the style of Paper 1B: short parts built on practical data. Write your working on paper before you type an answer.": "これらは Paper 1B 形式の問題で、実験のデータをもとにした短い小問からなります。答えを入力する前に、途中の計算を紙に書きましょう。",

    // Exam practice > data-title attribute
    "Lab 5: empirical formula by experiment": "実験 5：実験で組成式を求める",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Raw data": "生データ",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copy table": "表をコピー",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "No readings yet.": "まだ読みがありません。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copied. Paste it into a spreadsheet or your notes.": "コピーしました。表計算ソフトやノートに貼りつけましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copying is blocked here. Select the table and copy it by hand.": "ここではコピーできません。表を選択して、手でコピーしてください。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "balance, ±{u} g": "電子てんびん、±{u} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "lid": "ふた",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "How you use the lid": "ふたの使い方",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid on, lifted briefly every minute": "ふたをして、1 分ごとに少し持ち上げる",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid left off": "ふたをしない",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid never lifted": "ふたを一度も持ち上げない",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Balance": "電子てんびん",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reads to 0.01 g": "0.01 g まで読める",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reads to 0.001 g": "0.001 g まで読める",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Length of magnesium ribbon": "マグネシウムリボンの長さ",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "1. Weigh crucible and lid": "1. るつぼとふたをはかる",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "2. Add magnesium and weigh": "2. マグネシウムを入れてはかる",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "3. Heat, cool and weigh": "3. 加熱し、冷ましてはかる",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Add drops of water, reheat": "水を数滴加えて再加熱",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Show the processing": "データの処理を見る",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "New run": "新しい実験",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "A crucible with a lid on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading": "ガスバーナーの上の三角架にのせたふたつきのるつぼと、最新の読みを表示している電子てんびん",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Part A: masses of crucible, lid and contents": "パート A：るつぼ、ふた、中身の質量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Balance reading": "電子てんびんの読み",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "What to do next": "次にすること",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "After heating {n}": "{n} 回目の加熱のあと",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "After adding water and heating": "水を加えて加熱したあと",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Empty crucible and lid": "空のるつぼとふた",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and lid weighed": "るつぼとふたをはかった",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Magnesium ribbon in the crucible": "るつぼの中のマグネシウムリボン",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Cooled after heating {n}": "{n} 回目の加熱のあと冷ました",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "some grey metal is left": "灰色の金属が少し残っている",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "white powder, no metal left": "白い粉末で、金属は残っていない",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Weigh the empty crucible and lid.": "空のるつぼとふたの質量をはかりましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Choose a length of ribbon, then add it and weigh.": "リボンの長さを選び、それを入れてはかりましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heat the crucible. Then let it cool and weigh it.": "るつぼを加熱しましょう。そのあと冷まして、質量をはかります。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Constant mass: the last two readings agree. Process your data.": "質量が一定：最後の 2 回の読みが一致しています。データを処理しましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Ten heatings and still not constant. Check your technique and start a new run.": "10 回加熱しても、まだ一定になりません。操作を確かめて、新しい実験を始めましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "The mass is still changing. Heat, cool and weigh again.": "質量はまだ変化しています。もう一度、加熱し、冷ましてはかりましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of Mg = {a} g − {b} g = {c} g": "Mg の質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of O = {a} g − {b} g = {c} g": "O の質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "ratio O ÷ Mg = {r}, so Mg : O = 1 : {r}": "比 O ÷ Mg = {r}、よって Mg : O = 1 : {r}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "uncertainty in the ratio ≈ {u} % + {v} % = {p} %": "比の不確かさ ≈ {u} % + {v} % = {p} %",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "ratio = {pm}": "比 = {pm}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Your mass is not constant yet, so these numbers may change.": "質量はまだ一定になっていないので、これらの数値は変わるかもしれません。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Expected for MgO: a ratio of 1.00. Your percentage error: {e} %.": "MgO で予想される比は 1.00 です。あなたの百分率誤差：{e} %。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heating": "加熱",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Gentle, with stirring": "おだやか、かき混ぜながら",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Strong, roaring flame": "強い、ゴーッと音のする炎",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Cooling before each weighing": "質量をはかる前の冷まし方",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "In a desiccator": "デシケーターの中",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "On the open bench": "実験台の上",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Mass of crystals to add": "加える結晶の質量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "1. Weigh empty crucible": "1. 空のるつぼをはかる",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "2. Add crystals and weigh": "2. 結晶を入れてはかる",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "A crucible of copper(II) sulfate on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading": "ガスバーナーの上の三角架にのせた硫酸銅(II) 入りのるつぼと、最新の読みを表示している電子てんびん",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Part B: masses of crucible and contents": "パート B：るつぼと中身の質量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "The solid looks": "固体のようす",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible": "るつぼ",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and hydrate": "るつぼと水和物",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Nothing in the crucible yet.": "るつぼにはまだ何も入っていません。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "blue crystals": "青い結晶",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "pale blue and white": "うすい青色と白色",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "a white powder": "白い粉末",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "{base}, with black patches": "{base}、黒い部分がある",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Empty crucible": "空のるつぼ",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible weighed": "るつぼをはかった",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Blue crystals in the crucible": "るつぼの中の青い結晶",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Weigh the empty crucible.": "空のるつぼの質量をはかりましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Choose a mass of crystals, then add them and weigh.": "結晶の質量を選び、それを入れてはかりましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heat the crystals. Then let them cool and weigh.": "結晶を加熱しましょう。そのあと冷まして、質量をはかります。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Ten heatings and the mass is still changing. Something is going wrong: start a new run.": "10 回加熱しても、質量はまだ変化しています。何かがうまくいっていません。新しい実験を始めましょう。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of anhydrous CuSO₄ = {a} g − {b} g = {c} g": "無水 CuSO₄ の質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of water = {a} g − {b} g = {c} g": "水の質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "uncertainty in x ≈ {p} %, so x = {pm}": "x の不確かさ ≈ {p} %、よって x = {pm}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Expected: x = 5. Your percentage error: {e} %.": "予想される値：x = 5。あなたの百分率誤差：{e} %。",

  }
});
