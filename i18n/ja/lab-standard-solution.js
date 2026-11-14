/* lab-standard-solution — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-standard-solution', {
  strings: {

    // page title (browser tab)
    "Lab 6 Standard solutions and calibration curves | Structure Lab": "実験 6 標準溶液と検量線 | Structure Lab",

    // Standard solutions and calibration curves > page header > p
    "Lab 6 · Structure 1.4": "実験 6 · Structure 1.4",

    // Standard solutions and calibration curves > page header > h1
    "Standard solutions and calibration curves": "標準溶液と検量線",

    // Standard solutions and calibration curves > page header > span
    "How do we make a solution whose concentration we know exactly, and then use it to measure a concentration we do not know?": "濃度が正確にわかっている溶液はどのようにつくるのでしょうか。また、それを使って、わからない濃度をどのように測定するのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "In part A you make a standard solution of copper(II) sulfate. In part B you dilute it to make a set of standards, measure how much light each absorbs, and use the graph to find the concentration of an unknown. Tick each skill when you can do it without notes.": "パート A では、硫酸銅(II) の標準溶液をつくります。パート B では、それをうすめて一連の標準溶液をつくり、それぞれが光をどれだけ吸収するかを測定します。そして、グラフから未知の溶液の濃度を求めます。ノートを見ないでできるようになったら、スキルごとにチェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Calculate the mass of solid needed for a given volume and concentration of solution.": "決められた体積と濃度の溶液をつくるのに必要な固体の質量を計算する。",

    // What you need to be able to do > checklist > span
    "Describe how to prepare a standard solution in a volumetric flask, using the words a markscheme expects.": "メスフラスコで標準溶液をつくる方法を、採点基準が求める言葉を使って記述する。",

    // What you need to be able to do > checklist > span
    "Calculate and describe a dilution, and choose suitable glassware for it.": "希釈を計算して記述する。そのための適切なガラス器具を選ぶ。",

    // What you need to be able to do > checklist > span
    "Make a set of standards, plot a calibration curve and read an unknown concentration from it.": "一連の標準溶液をつくり、検量線をかいて、そこから未知の濃度を読み取る。",

    // What you need to be able to do > checklist > span
    "Explain why a colorimeter filter of the complementary colour is used.": "比色計のフィルターに補色を使う理由を説明する。",

    // What you need to be able to do > checklist > span
    "Propagate uncertainties from the balance, flask, pipette and burette into a concentration.": "電子てんびん、フラスコ、ホールピペット、ビュレットの不確かさを、濃度の不確かさへと伝える。",

    // What you need to be able to do > checklist > span
    "Say how each common error changes the concentration, and suggest a realistic improvement.": "よくある誤差のそれぞれが濃度をどう変えるかを言える。現実的な改善策を提案する。",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "A <dfn data-def=\"A solution whose concentration is known accurately.\">standard solution</dfn> is a solution whose concentration is known accurately. You make it by dissolving a weighed mass of solid and making the solution up to an exact volume. Two relationships do all the work:": "<dfn data-def=\"濃度が正確にわかっている溶液です。\">標準溶液 <span class=\"en-term\">(standard solution)</span></dfn>は、濃度が正確にわかっている溶液です。質量をはかった固体を溶かし、溶液を正確な体積にしてつくります。使う関係式は次の 2 つだけです。",

    // The chemistry behind it > data-def attribute
    "A solution whose concentration is known accurately.": "濃度が正確にわかっている溶液です。",

    // The chemistry behind it > equation > dd
    "amount of solute <span class=\"unit\">mol</span>": "溶質の物質量 <span class=\"unit\">mol</span>",

    // The chemistry behind it > equation > dd
    "mass of solute <span class=\"unit\">g</span>": "溶質の質量 <span class=\"unit\">g</span>",

    // The chemistry behind it > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "モル質量 <span class=\"unit\">g mol-1</span>",

    // The chemistry behind it > equation > dd
    "concentration <span class=\"unit\">mol dm-3</span>": "濃度 <span class=\"unit\">mol dm-3</span>",

    // The chemistry behind it > equation > dd
    "volume of solution <span class=\"unit\">dm3</span>": "溶液の体積 <span class=\"unit\">dm3</span>",

    // The chemistry behind it > p
    "Diluting a solution does not change the amount of solute, so <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. The full explanations are on the topic page: <a href=\"../topics/s1-4.html#concentration\">Concentration</a>.": "溶液をうすめても溶質の物質量は変わらないので、<i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> です。くわしい説明はトピックのページにあります：<a href=\"../topics/s1-4.html#concentration\">濃度</a>。",

    // The chemistry behind it > h3
    "Why copper(II) sulfate?": "なぜ硫酸銅(II) なのか",

    // The chemistry behind it > p
    "Copper(II) sulfate solution is blue. The more concentrated it is, the deeper the blue and the more light it absorbs. A <dfn data-def=\"An instrument that shines light of one colour through a sample and measures how much of it is absorbed.\">colorimeter</dfn> measures this as a number called <dfn data-def=\"A measure of how much light a sample absorbs. It has no units. 0 means no light is absorbed.\">absorbance</dfn>. Over a sensible range, a graph of absorbance against concentration is a straight line. That graph is the <dfn data-def=\"A graph of an instrument reading against the known concentrations of standards, used to read off an unknown concentration.\">calibration curve</dfn>.": "硫酸銅(II) 水溶液は青色です。濃いほど青色が深くなり、光を多く吸収します。<dfn data-def=\"1 つの色の光を試料に当て、そのうちどれだけが吸収されるかを測定する装置です。\">比色計 <span class=\"en-term\">(colorimeter)</span></dfn>は、これを<dfn data-def=\"試料が光をどれだけ吸収するかを表す量です。単位はありません。0 は光がまったく吸収されないことを表します。\">吸光度 <span class=\"en-term\">(absorbance)</span></dfn>という数値で測定します。適切な範囲では、吸光度を濃度に対してプロットしたグラフは直線になります。このグラフが<dfn data-def=\"装置の測定値を、標準溶液のわかっている濃度に対してプロットしたグラフです。未知の濃度を読み取るのに使います。\">検量線 <span class=\"en-term\">(calibration curve)</span></dfn>です。",

    // The chemistry behind it > data-def attribute
    "An instrument that shines light of one colour through a sample and measures how much of it is absorbed.": "1 つの色の光を試料に当て、そのうちどれだけが吸収されるかを測定する装置です。",

    // The chemistry behind it > data-def attribute
    "A measure of how much light a sample absorbs. It has no units. 0 means no light is absorbed.": "試料が光をどれだけ吸収するかを表す量です。単位はありません。0 は光がまったく吸収されないことを表します。",

    // The chemistry behind it > data-def attribute
    "A graph of an instrument reading against the known concentrations of standards, used to read off an unknown concentration.": "装置の測定値を、標準溶液のわかっている濃度に対してプロットしたグラフです。未知の濃度を読み取るのに使います。",

    // The chemistry behind it > p
    "The solid you weigh is the hydrate, <span class=\"chem\">CuSO4.5H2O</span>, <i>M</i> = 249.72 g mol<sup>−1</sup>. One mole of it gives one mole of <span class=\"chem\">CuSO4</span> in solution, so [<span class=\"chem\">CuSO4</span>] = <i>n</i>(hydrate) ÷ <i>V</i>.": "質量をはかる固体は水和物の <span class=\"chem\">CuSO4.5H2O</span> で、<i>M</i> = 249.72 g mol<sup>−1</sup> です。これ 1 mol から、溶液中に <span class=\"chem\">CuSO4</span> が 1 mol できます。したがって [<span class=\"chem\">CuSO4</span>] = <i>n</i>(水和物) ÷ <i>V</i> です。",

    // The chemistry behind it > not needed for IB > p
    "You do not need the Beer–Lambert law or any equation for absorbance. You only need the method: standards of known concentration, a graph, a line of best fit, and reading the unknown from the line. The colorimeter here is simulated with a straight-line response.": "ランベルト・ベールの法則や、吸光度の式は必要ありません。必要なのは方法だけです。濃度のわかっている標準溶液、グラフ、最もよく合う直線、そしてその直線から未知の溶液の濃度を読み取ることです。ここでの比色計は、直線的に応答するようにシミュレーションしています。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> To prepare a 0.250 mol dm<sup>−3</sup> standard solution of copper(II) sulfate, and to use it to find the concentration of an unknown copper(II) sulfate solution with a calibration curve.": "<strong>目的</strong>　0.250 mol dm<sup>−3</sup> の硫酸銅(II) の標準溶液をつくる。それを使い、検量線によって、濃度のわからない硫酸銅(II) 水溶液の濃度を求める。",

    // Aim, variables and safety > table > caption
    "Variables in part B": "パート B の変数",

    // Aim, variables and safety > table > th
    "Type": "種類",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    "How": "方法",

    // Aim, variables and safety > table > th
    "Independent": "独立変数",

    // Aim, variables and safety > table > td
    "Concentration of each standard": "それぞれの標準溶液の濃度",

    // Aim, variables and safety > table > td
    "Volumes of stock solution and water measured from two burettes": "原液と水の体積を 2 本のビュレットではかる",

    // Aim, variables and safety > table > th
    "Dependent": "従属変数",

    // Aim, variables and safety > table > td
    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Absorbance": "吸光度",

    // Aim, variables and safety > table > td
    "Read on the colorimeter, ±0.01": "比色計で読む（±0.01）",

    // Aim, variables and safety > table > th
    "Controlled": "制御変数",

    // Aim, variables and safety > table > td
    "Filter (colour of light)": "フィルター（光の色）",

    // Aim, variables and safety > table > td
    "The same red filter for every reading": "すべての測定で同じ赤色フィルター",

    // Aim, variables and safety > table > td
    "Path length and cuvette": "光路長とセル",

    // Aim, variables and safety > table > td
    "The same cuvette, same way round, filled to the same height": "同じセルを、同じ向きで、同じ高さまで満たして使う",

    // Aim, variables and safety > table > td
    "Zero of the colorimeter": "比色計のゼロ点",

    // Aim, variables and safety > table > td
    "Set with a cuvette of distilled water (the blank) before measuring": "測定の前に、蒸留水を入れたセル（ブランク）で合わせる",

    // Aim, variables and safety > table > td
    "Temperature": "温度",

    // Aim, variables and safety > table > td
    "All solutions at room temperature": "すべての溶液を室温にする",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "Hydrated copper(II) sulfate, weighing boat, spatula, balance reading to 0.01 g": "硫酸銅(II) 五水和物、ひょう量皿、薬さじ、0.01 g まで読める電子てんびん",

    // Aim, variables and safety > li
    "Beaker, glass stirring rod, filter funnel, wash bottle of distilled water, dropping pipette": "ビーカー、ガラス棒、ろうと、蒸留水の入った洗びん、スポイト",

    // Aim, variables and safety > li
    "250.0 cm<sup>3</sup> volumetric flask (±0.2 cm<sup>3</sup>) with stopper": "250.0 cm<sup>3</sup> のメスフラスコ（±0.2 cm<sup>3</sup>）と栓",

    // Aim, variables and safety > li
    "Two 50 cm<sup>3</sup> burettes (±0.05 cm<sup>3</sup> per reading), six test tubes in a rack": "50 cm<sup>3</sup> のビュレット 2 本（1 回の読みにつき ±0.05 cm<sup>3</sup>）、試験管立てと試験管 6 本",

    // Aim, variables and safety > li
    "Colorimeter with a red filter, cuvettes, tissue": "赤色フィルター付きの比色計、セル（キュベット）、ティッシュ",

    // Aim, variables and safety > p
    "Wear eye protection. Copper(II) sulfate, solid and solution, is harmful if swallowed and causes eye and skin irritation. Wipe up spills at once and wash your hands after the practical. It is very toxic to aquatic life, so collect all leftover solutions in the labelled waste container and do not pour them down the sink. Fill burettes below eye level, with a funnel, and remove the funnel before you take a reading. Glassware such as volumetric flasks breaks easily: hold the flask by the neck and the stopper together when you invert it.": "保護めがねをかけましょう。硫酸銅(II) は、固体も水溶液も、飲み込むと有害で、目や皮膚を刺激します。こぼしたらすぐにふき取り、実験のあとは手を洗いましょう。水生生物に対して強い毒性があるので、残った溶液はすべてラベルの付いた廃液容器に集め、流しに捨ててはいけません。ビュレットは目の高さより低い位置で、ろうとを使って満たし、読み取る前にろうとを外しましょう。メスフラスコなどのガラス器具は割れやすいので、逆さにするときは、フラスコの首と栓をいっしょに持ちましょう。",

    // Method > h2
    "Method": "方法",

    // Method > h3
    "Part A: the standard solution": "パート A：標準溶液",

    // Method > li
    "Calculate the mass of <span class=\"chem\">CuSO4.5H2O</span> needed (15.61 g for 250.0 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup>).": "必要な <span class=\"chem\">CuSO4.5H2O</span> の質量を計算します（0.250 mol dm<sup>−3</sup> の溶液 250.0 cm<sup>3</sup> なら 15.61 g）。",

    // Method > li
    "Weigh a weighing boat with about that mass of solid. Record the mass exactly; it does not need to be exactly 15.61 g.": "ひょう量皿に、ほぼその質量の固体をとってはかります。質量は正確に記録します。ちょうど 15.61 g である必要はありません。",

    // Method > li
    "Tip the solid into a beaker, then reweigh the empty boat. <span class=\"muted\">This is weighing by difference: the mass in the beaker is what you use, even if a few crystals stay in the boat.</span>": "固体をビーカーにあけてから、空になった皿をもう一度はかります。<span class=\"muted\">これが差し引きによるひょう量です。皿に結晶が少し残っても、使う値はビーカーに入った質量です。</span>",

    // Method > li
    "Add about 100 cm<sup>3</sup> of distilled water and stir until all the solid has dissolved. <span class=\"muted\">Solid that has not dissolved would not reach the flask evenly.</span>": "蒸留水を約 100 cm<sup>3</sup> 加え、固体がすべて溶けるまでかき混ぜます。<span class=\"muted\">溶けていない固体は、フラスコに均一に入りません。</span>",

    // Method > li
    "Pour the solution through a funnel into the volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask. <span class=\"muted\">This makes sure all the weighed solute ends up in the flask.</span>": "溶液を、ろうとを使ってメスフラスコに注ぎます。ビーカー、ガラス棒、ろうとを蒸留水ですすぎ、その洗液もフラスコに加えます。<span class=\"muted\">こうすれば、はかった溶質がすべてフラスコに入ります。</span>",

    // Method > li
    "Add distilled water until the bottom of the meniscus sits on the mark, with your eye level with the mark. Add the last few drops with a dropping pipette. <span class=\"muted\">Overshooting cannot be undone.</span>": "目の高さを標線に合わせ、メニスカスの底が標線に合うまで蒸留水を加えます。最後の数滴はスポイトで加えます。<span class=\"muted\">入れすぎたら、やり直すことはできません。</span>",

    // Method > li
    "Stopper the flask and invert it ten or more times. <span class=\"muted\">Otherwise the solution near the bottom is more concentrated than near the top.</span>": "フラスコに栓をして、10 回以上逆さにして混ぜます。<span class=\"muted\">混ぜないと、底のほうの溶液が上のほうより濃くなります。</span>",

    // Method > h3
    "Part B: standards and the calibration curve": "パート B：標準溶液と検量線",

    // Method > li
    "Fill one burette with the standard solution and one with distilled water.": "1 本のビュレットに標準溶液を、もう 1 本に蒸留水を入れます。",

    // Method > li
    "Run 2.00, 4.00, 6.00, 8.00 and 10.00 cm<sup>3</sup> of standard into five test tubes, and add water to make each up to 10.00 cm<sup>3</sup>. Mix each tube.": "5 本の試験管に、標準溶液を 2.00、4.00、6.00、8.00、10.00 cm<sup>3</sup> ずつ入れ、水を加えてそれぞれ 10.00 cm<sup>3</sup> にします。それぞれの試験管をよく混ぜます。",

    // Method > li
    "Fit the red filter. Put the blank (distilled water) in the colorimeter and set the reading to zero.": "赤色フィルターを取り付けます。比色計にブランク（蒸留水）を入れ、読みをゼロに合わせます。",

    // Method > li
    "Measure the absorbance of each standard. Rinse the cuvette with the next solution before you fill it, and wipe the clear sides with tissue.": "それぞれの標準溶液の吸光度を測定します。セルは、次に入れる溶液で共洗いしてから満たし、透明な面をティッシュでふきます。",

    // Method > li
    "Measure the unknown three times and take the mean.": "未知の溶液を 3 回測定し、平均をとります。",

    // Method > li
    "Plot absorbance against concentration, draw the line of best fit, and read the unknown’s concentration from the line.": "吸光度を濃度に対してプロットし、最もよく合う直線を引いて、その直線から未知の溶液の濃度を読み取ります。",

    // Method > exam tip (shown in English + translation) > p
    "For “describe how to prepare a standard solution”, markschemes look for: <strong>dissolve in distilled (or deionized) water</strong>; transfer <strong>with rinsings</strong> to a <strong>volumetric flask</strong>; <strong>make up to the mark</strong>; <strong>stopper and invert</strong> to mix. “Add 250 cm<sup>3</sup> of water” loses the mark.": "「標準溶液のつくり方を記述しなさい (describe)」では、採点基準は次の点を見ています：<strong>蒸留水（またはイオン交換水）に溶かす</strong>、<strong>洗液とともに</strong><strong>メスフラスコ</strong>に移す、<strong>標線まで水を加える</strong>、<strong>栓をして逆さにして</strong>混ぜる。「水を 250 cm<sup>3</sup> 加える」と書くと点を失います。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > p
    "Every run gives slightly different readings, as a real one would. Try the good technique first, then change one choice at a time to see what each error does.": "本物の実験と同じように、実行するたびに読みが少しずつ変わります。まずよい手順で試し、次に選択を 1 つずつ変えて、それぞれの誤差が何を起こすかを見てみましょう。",

    // Run the experiment > widget > data-title attribute
    "Part A: make the standard solution": "パート A：標準溶液をつくる",

    // Run the experiment > widget > figcaption
    "Check your mass calculation first, then do each step in order. The choices change how you transfer the solution, make it up to the mark and mix it. At the end, compare the concentration you would calculate with what is really in the flask.": "まず質量の計算を確かめ、それから各ステップを順に進めます。選択によって、溶液の移し方、標線までの合わせ方、混ぜ方が変わります。最後に、計算で出る濃度と、フラスコに実際に入っている濃度をくらべましょう。",

    // Run the experiment > widget > data-title attribute
    "Part B: standards, colorimeter and calibration curve": "パート B：標準溶液、比色計、検量線",

    // Run the experiment > widget > figcaption
    "Make the standards, zero the colorimeter on the blank, measure the standards and the unknown, then read the unknown from the line. Try measuring cylinders instead of burettes, or a filter of the wrong colour, and watch the points scatter or the line flatten.": "標準溶液をつくり、ブランクで比色計のゼロを合わせ、標準溶液と未知の溶液を測定してから、直線から未知の濃度を読み取ります。ビュレットの代わりにメスシリンダーを使ったり、違う色のフィルターを使ったりして、点がばらつく様子や直線が平らになる様子を見てみましょう。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > worked example > h3
    "The concentration of the standard solution": "標準溶液の濃度",

    // Processing the data > worked example > p
    "A student wants 250.0 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup> copper(II) sulfate. They weigh by difference: boat and solid 17.43 g, empty boat afterwards 1.84 g. Calculate the mass they should aim for, and the actual concentration they made. <i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>.": "ある生徒が、0.250 mol dm<sup>−3</sup> の硫酸銅(II) 水溶液を 250.0 cm<sup>3</sup> つくろうとしています。差し引きでひょう量し、皿と固体は 17.43 g、あけたあとの空の皿は 1.84 g でした。目標にすべき質量と、実際につくった溶液の濃度を計算しなさい。<i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>。",

    // Processing the data > worked example > data-title attribute
    "Amount needed": "必要な物質量",

    // Processing the data > worked example > p
    "Convert the volume to dm<sup>3</sup> first, then use <i>n</i> = <i>CV</i>.": "まず体積を dm<sup>3</sup> に直し、それから <i>n</i> = <i>CV</i> を使います。",

    // Processing the data > worked example > data-title attribute
    "Mass to aim for": "目標にする質量",

    // Processing the data > worked example > p
    "Use the molar mass of the hydrate, because that is the solid on the balance.": "電子てんびんにのせる固体は水和物なので、水和物のモル質量を使います。",

    // Processing the data > worked example > data-title attribute
    "Mass actually used": "実際に使った質量",

    // Processing the data > worked example > p
    "The mass in the beaker is the difference between the two readings.": "ビーカーに入った質量は、2 つの読みの差です。",

    // Processing the data > worked example > data-title attribute
    "Actual concentration": "実際の濃度",

    // Processing the data > worked example > p
    "Report the concentration you really made, not the one you aimed for.": "目標にした濃度ではなく、実際につくった濃度を報告します。",

    // Processing the data > worked example > p
    "Aim for 15.61 g. The solution made is 0.2497 mol dm<sup>−3</sup> (4 s.f., matching 15.59 g and 250.0 cm<sup>3</sup>).": "目標は 15.61 g です。つくった溶液は 0.2497 mol dm<sup>−3</sup> です（15.59 g と 250.0 cm<sup>3</sup> に合わせて有効数字 4 桁）。",

    // Processing the data > try it > p
    "Another student uses a 100.0 cm<sup>3</sup> volumetric flask. Boat and solid: 7.95 g. Empty boat afterwards: 1.69 g. Calculate the concentration of copper(II) sulfate in the flask.": "別の生徒は 100.0 cm<sup>3</sup> のメスフラスコを使います。皿と固体：7.95 g。あけたあとの空の皿：1.69 g。フラスコの中の硫酸銅(II) の濃度を計算しなさい。",

    // Processing the data > try it > li
    "Mass transferred = 7.95 − 1.69. Then <i>n</i> = <i>m</i> ÷ 249.72.": "移した質量 = 7.95 − 1.69。それから <i>n</i> = <i>m</i> ÷ 249.72。",

    // Processing the data > try it > li
    "[<span class=\"chem\">CuSO4</span>] = <i>n</i> ÷ 0.1000 dm<sup>3</sup>.": "[<span class=\"chem\">CuSO4</span>] = <i>n</i> ÷ 0.1000 dm<sup>3</sup>。",

    // Processing the data > h3
    "Diluting to make the standards": "うすめて標準溶液をつくる",

    // Processing the data > p
    "Each standard is a dilution of the stock, so use <i>C</i><sub>2</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>, where <i>V</i><sub>2</sub> is the total volume (stock + water).": "それぞれの標準溶液は原液をうすめたものなので、<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> を使います。<i>V</i><sub>2</sub> は全体の体積（原液 + 水）です。",

    // Processing the data > try it > p
    "A test tube holds 7.00 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup> copper(II) sulfate and 3.00 cm<sup>3</sup> of distilled water. Calculate the concentration of the mixture.": "1 本の試験管に、0.250 mol dm<sup>−3</sup> の硫酸銅(II) 水溶液 7.00 cm<sup>3</sup> と蒸留水 3.00 cm<sup>3</sup> が入っています。混合液の濃度を計算しなさい。",

    // Processing the data > try it > li
    "The total volume is 7.00 + 3.00 = 10.00 cm<sup>3</sup>.": "全体の体積は 7.00 + 3.00 = 10.00 cm<sup>3</sup> です。",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > h3
    "Reading an unknown from the calibration curve": "検量線から未知の濃度を読み取る",

    // Processing the data > worked example > table > caption
    "Calibration data (red filter)": "検量線のデータ（赤色フィルター）",

    // Processing the data > worked example > table > th
    "Standard": "標準溶液",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "[CuSO₄] / mol dm⁻³": "[CuSO₄] / mol dm⁻³",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Blank": "ブランク",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Unknown": "未知の溶液",

    // Processing the data > worked example > p
    "Find the concentration of the unknown in mol dm<sup>−3</sup> and in g dm<sup>−3</sup>. <i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 g mol<sup>−1</sup>.": "未知の溶液の濃度を、mol dm<sup>−3</sup> と g dm<sup>−3</sup> で求めなさい。<i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 g mol<sup>−1</sup>。",

    // Processing the data > worked example > data-title attribute
    "Average the unknown": "未知の溶液の平均をとる",

    // Processing the data > worked example > p
    "Repeat readings reduce the effect of random error.": "くり返し測定すると、偶然誤差の影響が小さくなります。",

    // Processing the data > worked example > maths line
    "mean absorbance = (0.41 + 0.42 + 0.41) ÷ 3 = 0.413": "吸光度の平均 = (0.41 + 0.42 + 0.41) ÷ 3 = 0.413",

    // Processing the data > worked example > data-title attribute
    "Find the gradient of the line": "直線の傾きを求める",

    // Processing the data > worked example > p
    "The points lie close to a straight line through the origin. Use two points on the line, far apart.": "点は原点を通る直線の近くにあります。直線上の、離れた 2 点を使います。",

    // Processing the data > worked example > maths line
    "gradient = (0.740 − 0.000) ÷ (0.2500 − 0.0000) = 2.96 dm<sup>3</sup> mol<sup>−1</sup>": "傾き = (0.740 − 0.000) ÷ (0.2500 − 0.0000) = 2.96 dm<sup>3</sup> mol<sup>−1</sup>",

    // Processing the data > worked example > data-title attribute
    "Read the concentration": "濃度を読み取る",

    // Processing the data > worked example > p
    "On the graph you read across from the absorbance to the line and down to the axis. The gradient does the same job.": "グラフでは、吸光度から横に進んで直線に当たったら、下へ進んで軸を読みます。傾きを使っても同じことができます。",

    // Processing the data > worked example > data-title attribute
    "Convert to g dm⁻³": "g dm⁻³ に換算する",

    // Processing the data > worked example > p
    "Multiply by the molar mass of the dissolved substance, <span class=\"chem\">CuSO4</span>.": "溶けている物質 <span class=\"chem\">CuSO4</span> のモル質量をかけます。",

    // Processing the data > worked example > p
    "[<span class=\"chem\">CuSO4</span>] = 0.140 mol dm<sup>−3</sup> = 22.3 g dm<sup>−3</sup>. The unknown lies inside the range of the standards, so reading it from the line is reliable.": "[<span class=\"chem\">CuSO4</span>] = 0.140 mol dm<sup>−3</sup> = 22.3 g dm<sup>−3</sup>。未知の溶液は標準溶液の範囲の中にあるので、直線から読み取った値は信頼できます。",

    // Processing the data > common mistake > p
    "Reading an unknown from a part of the line you have extended beyond the last standard is not reliable: the line may bend at high absorbance. If the unknown is above the top standard, dilute it by a known factor, measure it again, and multiply the result by the factor.": "最後の標準溶液より先へ延ばした部分の直線から未知の濃度を読み取っても、信頼できません。吸光度が大きいところでは、直線が曲がることがあるからです。未知の溶液がいちばん濃い標準溶液より上にあるときは、決まった倍率でうすめてからもう一度測定し、結果にその倍率をかけます。",

    // Processing the data > try it > p
    "In another run the line of best fit passes through the origin with a gradient of 2.95 dm<sup>3</sup> mol<sup>−1</sup>. The mean absorbance of the unknown is 0.52. Calculate [<span class=\"chem\">CuSO4</span>].": "別の実験では、最もよく合う直線は原点を通り、傾きは 2.95 dm<sup>3</sup> mol<sup>−1</sup> でした。未知の溶液の吸光度の平均は 0.52 です。[<span class=\"chem\">CuSO4</span>] を計算しなさい。",

    // Processing the data > try it > li
    "Absorbance = gradient × concentration, for a line through the origin.": "原点を通る直線では、吸光度 = 傾き × 濃度です。",

    // Processing the data > try it > li
    "[<span class=\"chem\">CuSO4</span>] = 0.52 ÷ 2.95.": "[<span class=\"chem\">CuSO4</span>] = 0.52 ÷ 2.95。",

    // Processing the data > try it > p
    "The absorbance has 2 significant figures, so 0.18 (or 0.176) mol dm<sup>−3</sup>.": "吸光度は有効数字 2 桁なので、0.18（または 0.176）mol dm<sup>−3</sup> です。",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > p
    "Every piece of glassware has an uncertainty, usually printed on it. For a reading on a scale, it is half the smallest division or the precision of the display.": "ガラス器具には、それぞれ不確かさがあり、ふつうは器具に印刷されています。目盛を読むときは、最小目盛の半分か、表示の精度が不確かさになります。",

    // Uncertainties > table > caption
    "Typical uncertainties of the apparatus": "器具の代表的な不確かさ",

    // Uncertainties > table > th
    "Apparatus": "器具",

    // Uncertainties > table > th
    "Uncertainty": "不確かさ",

    // Uncertainties > table > th
    "Note": "メモ",

    // Uncertainties > table > th
    "Balance (2 d.p.)": "電子てんびん（小数第 2 位まで）",

    // Uncertainties > table > td
    "Per reading. A mass by difference uses two readings: ±0.02 g": "1 回の読みにつき。差し引きで求めた質量は 2 回の読みを使うので ±0.02 g",

    // Uncertainties > table > th
    "Volumetric flask, 250.0 cm<sup>3</sup>": "メスフラスコ 250.0 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.2 cm<sup>3</sup>": "±0.2 cm<sup>3</sup>",

    // Uncertainties > table > td
    "One volume only": "1 つの体積だけ",

    // Uncertainties > table > th
    "Volumetric pipette, 25.00 cm<sup>3</sup>": "ホールピペット 25.00 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.04 cm<sup>3</sup>": "±0.04 cm<sup>3</sup>",

    // Uncertainties > table > th
    "Burette": "ビュレット",

    // Uncertainties > table > td
    "±0.05 cm<sup>3</sup>": "±0.05 cm<sup>3</sup>",

    // Uncertainties > table > td
    "Per reading. A volume delivered uses two readings: ±0.10 cm<sup>3</sup>": "1 回の読みにつき。滴下した体積は 2 回の読みを使うので ±0.10 cm<sup>3</sup>",

    // Uncertainties > table > th
    "Measuring cylinder, 10 cm<sup>3</sup>": "メスシリンダー 10 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.1 cm<sup>3</sup>": "±0.1 cm<sup>3</sup>",

    // Uncertainties > table > td
    "Not precise enough for standard solutions": "標準溶液には精度が足りない",

    // Uncertainties > table > th
    "Colorimeter": "比色計",

    // Uncertainties > table > td
    "Absorbance has no units": "吸光度に単位はない",

    // Uncertainties > worked example > data-kicker attribute
    "Worked example 3": "例題 3",

    // Uncertainties > worked example > h3
    "Uncertainty in the stock and in one standard": "原液と 1 つの標準溶液の不確かさ",

    // Uncertainties > worked example > p
    "Use the worked example above: 15.59 g of solid in a 250.0 cm<sup>3</sup> flask gives 0.2497 mol dm<sup>−3</sup>. Standard 2 is 4.00 cm<sup>3</sup> of this stock and 6.00 cm<sup>3</sup> of water, each from a burette. Find the percentage uncertainty in each concentration.": "上の例題を使います。固体 15.59 g を 250.0 cm<sup>3</sup> のフラスコに入れると 0.2497 mol dm<sup>−3</sup> になります。標準溶液 2 は、この原液 4.00 cm<sup>3</sup> と水 6.00 cm<sup>3</sup> で、どちらもビュレットではかります。それぞれの濃度の百分率の不確かさを求めなさい。",

    // Uncertainties > worked example > data-title attribute
    "Stock: the mass": "原液：質量",

    // Uncertainties > worked example > p
    "Weighing by difference uses two readings, ±0.01 g each.": "差し引きによるひょう量では、±0.01 g の読みを 2 回使います。",

    // Uncertainties > worked example > data-title attribute
    "Stock: the volume": "原液：体積",

    // Uncertainties > worked example > p
    "Concentration = <i>n</i> ÷ <i>V</i> is a division, so the percentages add.": "濃度 = <i>n</i> ÷ <i>V</i> は割り算なので、百分率の不確かさを足します。",

    // Uncertainties > worked example > maths line
    "stock: 0.13 % + 0.08 % = 0.21 %, so 0.2497 ± 0.0005 mol dm<sup>−3</sup>": "原液：0.13 % + 0.08 % = 0.21 %、したがって 0.2497 ± 0.0005 mol dm<sup>−3</sup>",

    // Uncertainties > worked example > data-title attribute
    "Standard 2: the volumes": "標準溶液 2：体積",

    // Uncertainties > worked example > p
    "Each burette volume is a difference of two readings: ±0.10 cm<sup>3</sup>. The total volume is a sum of two volumes: ±0.20 cm<sup>3</sup>.": "ビュレットの体積は、どれも 2 回の読みの差なので ±0.10 cm<sup>3</sup> です。全体の体積は 2 つの体積の和なので ±0.20 cm<sup>3</sup> です。",

    // Uncertainties > worked example > maths line
    "stock taken: 0.10 ÷ 4.00 × 100 = 2.5 %": "とった原液：0.10 ÷ 4.00 × 100 = 2.5 %",

    // Uncertainties > worked example > maths line
    "total volume: 0.20 ÷ 10.00 × 100 = 2.0 %": "全体の体積：0.20 ÷ 10.00 × 100 = 2.0 %",

    // Uncertainties > worked example > data-title attribute
    "Standard 2: combine": "標準溶液 2：組み合わせる",

    // Uncertainties > worked example > p
    "<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub> × <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>: multiply and divide, so add all three percentages.": "<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub> × <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>：かけ算と割り算なので、3 つの百分率をすべて足します。",

    // Uncertainties > worked example > p
    "Stock: ±0.21 %. Standard 2: about ±5 %. The small volumes in the dilution, not the balance or the flask, control the uncertainty of the standards.": "原液：±0.21 %。標準溶液 2：約 ±5 %。標準溶液の不確かさを決めているのは、電子てんびんやフラスコではなく、希釈のときの少ない体積です。",

    // Uncertainties > key idea > p
    "The same absolute uncertainty is a bigger percentage of a smaller quantity. That is why the most dilute standard is the least certain, and why bigger volumes (a pipette into a 100.0 cm<sup>3</sup> flask, say) give better standards than a few cm<sup>3</sup> from a burette.": "同じ絶対不確かさでも、量が小さいほど百分率は大きくなります。だから、いちばんうすい標準溶液がいちばん不確かです。また、ビュレットで数 cm<sup>3</sup> とるより、大きな体積（たとえば、ホールピペットで 100.0 cm<sup>3</sup> のフラスコに入れる）のほうが、よい標準溶液になります。",

    // Uncertainties > h3
    "Comparing with the true value": "真の値とくらべる",

    // Uncertainties > p
    "Suppose the unknown was made by the teacher as 0.150 mol dm<sup>−3</sup>, and you found 0.140 mol dm<sup>−3</sup>.": "未知の溶液は先生が 0.150 mol dm<sup>−3</sup> としてつくったもので、あなたは 0.140 mol dm<sup>−3</sup> と求めたとします。",

    // Uncertainties > maths line
    "percentage error = |0.140 − 0.150| ÷ 0.150 × 100 = 6.7 %": "百分率誤差 = |0.140 − 0.150| ÷ 0.150 × 100 = 6.7 %",

    // Uncertainties > p
    "The uncertainty of the result is at least that of the standards (about 5 %), plus the reading of the absorbance (0.01 in 0.41, about 2.4 %), so around 7 %. The percentage error is about the same size, so the result is consistent with the true value within its uncertainty. If the error had been 20 %, you should look for a systematic error.": "結果の不確かさは、少なくとも標準溶液の不確かさ（約 5 %）があり、それに吸光度の読み（0.41 に対して 0.01、約 2.4 %）が加わるので、およそ 7 % です。百分率誤差はほぼ同じ大きさなので、結果はその不確かさの範囲で真の値と一致しています。誤差が 20 % だったら、系統誤差を探すべきです。",

    // Uncertainties > try it > p
    "A student makes a standard by running 10.00 cm<sup>3</sup> of stock from a volumetric pipette (±0.04 cm<sup>3</sup>) into a 50.00 cm<sup>3</sup> volumetric flask (±0.08 cm<sup>3</sup>) and making it up to the mark. Ignoring the uncertainty of the stock, calculate the percentage uncertainty in the new concentration.": "ある生徒が、原液 10.00 cm<sup>3</sup> をホールピペット（±0.04 cm<sup>3</sup>）で 50.00 cm<sup>3</sup> のメスフラスコ（±0.08 cm<sup>3</sup>）に入れ、標線まで水を加えて標準溶液をつくります。原液の不確かさは無視して、新しい濃度の百分率の不確かさを計算しなさい。",

    // Uncertainties > try it > li
    "Find the percentage uncertainty of each volume.": "それぞれの体積の百分率の不確かさを求めます。",

    // Uncertainties > try it > li
    "0.04 ÷ 10.00 × 100 and 0.08 ÷ 50.00 × 100, then add.": "0.04 ÷ 10.00 × 100 と 0.08 ÷ 50.00 × 100 を求めて、足します。",

    // Uncertainties > try it > maths line
    "pipette: 0.04 ÷ 10.00 × 100 = 0.4 %": "ホールピペット：0.04 ÷ 10.00 × 100 = 0.4 %",

    // Uncertainties > try it > maths line
    "flask: 0.08 ÷ 50.00 × 100 = 0.16 %": "フラスコ：0.08 ÷ 50.00 × 100 = 0.16 %",

    // Uncertainties > try it > maths line
    "total = 0.4 % + 0.16 % = 0.56 %": "合計 = 0.4 % + 0.16 % = 0.56 %",

    // Uncertainties > try it > p
    "About 0.6 %, much better than about 5 % with burettes into 10 cm<sup>3</sup>.": "約 0.6 % です。ビュレットで 10 cm<sup>3</sup> にした場合の約 5 % よりずっとよくなります。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差と改善",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "<dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">Random errors</dfn> make the points scatter about the line; more precise glassware and repeats reduce them. <dfn data-def=\"An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.\">Systematic errors</dfn> move every result the same way; only a better method removes them.": "<dfn data-def=\"くり返した読みが、真の値の上下に予測できない形でばらつく誤差です。くり返して平均をとると、その影響が小さくなります。\">偶然誤差 <span class=\"en-term\">(random errors)</span></dfn>は、点を直線のまわりにばらつかせます。より精密なガラス器具とくり返しで小さくできます。<dfn data-def=\"すべての結果を同じ向きにずらす誤差です。たとえば、いつも低すぎるなど。くり返しても取り除けず、方法を変える必要があります。\">系統誤差 <span class=\"en-term\">(systematic errors)</span></dfn>は、すべての結果を同じ向きにずらします。よりよい方法にしないと取り除けません。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "くり返した読みが、真の値の上下に予測できない形でばらつく誤差です。くり返して平均をとると、その影響が小さくなります。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.": "すべての結果を同じ向きにずらす誤差です。たとえば、いつも低すぎるなど。くり返しても取り除けず、方法を変える必要があります。",

    // Evaluation: errors and improvements > table > caption
    "Common errors, their effect, and how to fix them": "よくある誤差、その影響、直し方",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > th
    "Rinsings of the beaker and funnel not added to the flask": "ビーカーとろうとの洗液をフラスコに加えなかった",

    // Evaluation: errors and improvements > table > td
    "Some solute is lost: the true concentration is <strong>lower</strong> than the one calculated": "溶質の一部が失われる：真の濃度は計算した濃度より<strong>低い</strong>",

    // Evaluation: errors and improvements > table > td
    "Rinse beaker, rod and funnel with distilled water and add every rinsing to the flask": "ビーカー、ガラス棒、ろうとを蒸留水ですすぎ、洗液をすべてフラスコに加える",

    // Evaluation: errors and improvements > table > th
    "Water added past the mark": "標線を越えて水を加えた",

    // Evaluation: errors and improvements > table > td
    "Volume too large: concentration <strong>lower</strong> than calculated": "体積が大きすぎる：濃度は計算より<strong>低い</strong>",

    // Evaluation: errors and improvements > table > td
    "Add the last few cm<sup>3</sup> drop by drop with a dropping pipette, eye level with the mark": "最後の数 cm<sup>3</sup> は、目の高さを標線に合わせ、スポイトで 1 滴ずつ加える",

    // Evaluation: errors and improvements > table > th
    "Stopped below the mark, or meniscus read from above": "標線より下で止めた、またはメニスカスを上から読んだ",

    // Evaluation: errors and improvements > table > td
    "Volume too small: concentration <strong>higher</strong> than calculated": "体積が小さすぎる：濃度は計算より<strong>高い</strong>",

    // Evaluation: errors and improvements > table > td
    "Read the bottom of the meniscus with your eye level with the mark": "目の高さを標線に合わせ、メニスカスの底を読む",

    // Evaluation: errors and improvements > table > th
    "Flask not inverted to mix": "フラスコを逆さにして混ぜなかった",

    // Evaluation: errors and improvements > table > td
    "The solution is not uniform: samples taken from it are too dilute or too concentrated, at random": "溶液が均一でない：とった試料が、でたらめにうすすぎたり濃すぎたりする",

    // Evaluation: errors and improvements > table > td
    "Stopper and invert at least ten times": "栓をして、10 回以上逆さにして混ぜる",

    // Evaluation: errors and improvements > table > th
    "Mass of solid taken from the first reading only (no reweighing of the boat)": "固体の質量を最初の読みだけから求めた（皿をはかり直していない）",

    // Evaluation: errors and improvements > table > td
    "Crystals left in the boat are counted: calculated concentration <strong>higher</strong> than the true one": "皿に残った結晶まで数えている：計算した濃度が真の濃度より<strong>高い</strong>",

    // Evaluation: errors and improvements > table > td
    "Weigh by difference: reweigh the boat after tipping": "差し引きでひょう量する：固体をあけたあとに皿をはかり直す",

    // Evaluation: errors and improvements > table > th
    "Standards measured with measuring cylinders": "標準溶液をメスシリンダーではかった",

    // Evaluation: errors and improvements > table > td
    "Large random error: points scatter about the line, so the unknown is less certain": "偶然誤差が大きい：点が直線のまわりにばらつくので、未知の濃度が不確かになる",

    // Evaluation: errors and improvements > table > td
    "Use burettes, or pipettes and volumetric flasks": "ビュレット、またはホールピペットとメスフラスコを使う",

    // Evaluation: errors and improvements > table > th
    "Colorimeter not zeroed with the blank": "ブランクで比色計のゼロを合わせなかった",

    // Evaluation: errors and improvements > table > td
    "Every absorbance is too high by the same amount: the line does not pass through the origin. A line through the origin would then give an unknown that is too <strong>high</strong>": "すべての吸光度が同じだけ高すぎる：直線が原点を通らない。そのうえで原点を通る直線を使うと、未知の濃度が<strong>高すぎる</strong>値になる",

    // Evaluation: errors and improvements > table > td
    "Zero on a cuvette of distilled water before measuring, and check the zero again between readings": "測定の前に蒸留水を入れたセルでゼロを合わせ、測定の合間にもゼロを確かめる",

    // Evaluation: errors and improvements > table > th
    "Fingerprints, scratches or bubbles on the cuvette": "セルに指紋、傷、泡がある",

    // Evaluation: errors and improvements > table > td
    "Random extra absorbance: readings too high and scattered": "でたらめに余分な吸光度が加わる：読みが高すぎ、ばらつく",

    // Evaluation: errors and improvements > table > td
    "Hold cuvettes by the ridged sides, wipe the clear sides, tap out bubbles": "セルはざらざらした面を持ち、透明な面をふき、たたいて泡を抜く",

    // Evaluation: errors and improvements > table > th
    "Wrong filter (blue light for a blue solution)": "フィルターの色が違う（青色の溶液に青色の光）",

    // Evaluation: errors and improvements > table > td
    "Very small absorbances and a shallow line: a large percentage uncertainty": "吸光度がとても小さく、直線の傾きがゆるい：百分率の不確かさが大きい",

    // Evaluation: errors and improvements > table > td
    "Use the filter of the complementary colour (red or orange for a blue solution)": "補色のフィルターを使う（青色の溶液なら赤色か橙色）",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For each error, give the direction and the reason: “volume too large, so the concentration is lower than calculated”. Then give an improvement that fixes that exact error. The colour wheel in the data booklet tells you which filter is complementary to the colour of the solution.": "誤差ごとに、向きと理由を書きましょう：「体積が大きすぎるので、濃度は計算より低い」。そして、まさにその誤差を直す改善策を書きます。データブックレットの色相環を見れば、溶液の色の補色になるフィルターがわかります。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "These questions are in the style of Paper 1B: short parts built on practical data. Write your working on paper before you type an answer.": "これらの問題は Paper 1B の形式です。実験のデータをもとにした短い小問です。答えを入力する前に、紙に途中の計算を書きましょう。",

    // Exam practice > data-title attribute
    "Lab 6: standard solutions and calibration": "実験 6：標準溶液と検量線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copy table": "表をコピー",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Raw data": "生データ",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "No readings yet.": "まだ読みがありません。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copied. Paste it into a spreadsheet or your notes.": "コピーしました。表計算ソフトやノートに貼り付けてください。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copying is blocked here. Select the table and copy it by hand.": "ここではコピーできません。表を選択して、手でコピーしてください。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Volumetric flask": "メスフラスコ",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "100.0 cm³ (±0.10 cm³)": "100.0 cm³（±0.10 cm³）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "250.0 cm³ (±0.2 cm³)": "250.0 cm³（±0.2 cm³）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Check": "答え合わせ",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Transfer to the flask": "フラスコに移す",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Rinse beaker, rod and funnel; add rinsings": "ビーカー・ガラス棒・ろうとをすすぎ、洗液も加える",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Pour only, no rinsing": "注ぐだけで、すすがない",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Making up to the mark": "標線まで合わせる",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Eye level, last drops by dropping pipette": "目の高さで、最後はスポイト",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Fill quickly from the wash bottle": "洗びんから一気に入れる",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stop with the meniscus below the mark": "メニスカスが標線より下で止める",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mixing": "混ぜる",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stopper and invert ten times": "栓をして 10 回逆さにする",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Do not mix": "混ぜない",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Do the next step": "次のステップへ",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Start again": "最初からやり直す",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "A balance and a volumetric flask with a close-up of the neck, showing the meniscus and the graduation mark": "電子てんびんと、首の部分を拡大したメスフラスコ。メニスカスと標線が見える",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Part A: making the standard solution": "パート A：標準溶液をつくる",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Balance reading": "電子てんびんの読み",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Concentration from your data": "あなたのデータから求めた濃度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Concentration really in the flask": "フラスコに実際に入っている濃度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Your calculated mass of CuSO₄·5H₂O for {v} cm³ of {c} mol dm⁻³": "{c} mol dm⁻³ の溶液 {v} cm³ に必要な CuSO₄·5H₂O の質量（計算値）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Correct: aim for about {m} g. You do not need exactly this mass, but you must record the mass you use.": "正解：約 {m} g を目標にします。ちょうどこの質量である必要はありませんが、使った質量を記録しなければなりません。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Right value. Give it to 3 or 4 significant figures.": "値は正しいです。有効数字 3 桁か 4 桁で答えましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Type a number, such as 12.3.": "12.3 のように数を入力してください。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Not yet. Use n = CV with V in dm³, then m = n × M with the molar mass of the hydrate, 249.72 g mol⁻¹.": "まだ正解ではありません。V を dm³ にして n = CV を使い、それから水和物のモル質量 249.72 g mol⁻¹ を使って m = n × M を計算しましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Weigh the weighing boat with the solid.": "固体を入れたひょう量皿をはかる。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Tip the solid into a beaker and reweigh the empty boat.": "固体をビーカーにあけ、空の皿をはかり直す。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Dissolve the solid in about 100 cm³ of distilled water, stirring.": "固体を約 100 cm³ の蒸留水に、かき混ぜながら溶かす。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Transfer the solution to the volumetric flask through a funnel.": "溶液を、ろうとを使ってメスフラスコに移す。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Add distilled water up to the mark.": "標線まで蒸留水を加える。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stopper the flask and mix.": "フラスコに栓をして混ぜる。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "the mark": "標線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "{v} cm³ flask": "{v} cm³ フラスコ",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "balance, ±0.01 g": "電子てんびん ±0.01 g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Ready to weigh": "ひょう量の準備完了",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Step {n} of 6 done": "6 ステップ中 {n} 完了",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus on the mark": "メニスカスが標線上",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus above the mark": "メニスカスが標線より上",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus below the mark": "メニスカスが標線より下",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "(done)": "（完了）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "(next)": "（次）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of boat and solid / g": "皿と固体の質量 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of empty boat after tipping / g": "あけたあとの空の皿の質量 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of solid transferred / g": "移した固体の質量 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Volume of solution / cm³": "溶液の体積 / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Quantity": "量",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Value": "値",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The solution really in the flask differs from your calculated value by {d} %.": "フラスコに実際に入っている溶液は、計算した値と {d} % 違います。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Without rinsing, some copper(II) sulfate stayed in the beaker and funnel, so the true concentration is lower than you calculated.": "すすがなかったので、硫酸銅(II) の一部がビーカーとろうとに残りました。そのため、真の濃度は計算より低くなります。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You went past the mark, so the volume is too large and the true concentration is lower than you calculated.": "標線を越えたので、体積が大きすぎ、真の濃度は計算より低くなります。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You stopped below the mark, so the volume is too small and the true concentration is higher than you calculated.": "標線より下で止めたので、体積が小さすぎ、真の濃度は計算より高くなります。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Not mixed: a sample from the top of the flask is only {c} mol dm⁻³. The solution is not uniform.": "混ぜていません。フラスコの上のほうからとった試料は {c} mol dm⁻³ しかありません。溶液が均一ではありません。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Good technique: the only differences come from the balance and the tolerance of the flask, and they are tiny.": "よい手順です。違いは電子てんびんとフラスコの許容誤差から来るものだけで、とても小さくなっています。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Measure the volumes with": "体積をはかる器具",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Two burettes (±0.05 cm³)": "ビュレット 2 本（±0.05 cm³）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Two measuring cylinders (±0.1 cm³)": "メスシリンダー 2 本（±0.1 cm³）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Colorimeter filter": "比色計のフィルター",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Red": "赤",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Green": "緑",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Blue": "青",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "1. Make the standards": "1. 標準溶液をつくる",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "2. Zero with the blank": "2. ブランクでゼロを合わせる",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "3. Measure the standards": "3. 標準溶液を測定する",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "4. Measure the unknown (×3)": "4. 未知の溶液を測定する（×3）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Reveal the true value": "真の値を表示する",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "New run": "新しく実行",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Part B: standards and absorbance readings": "パート B：標準溶液と吸光度の読み",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Gradient of the line": "直線の傾き",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "y-intercept": "y 切片",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mean absorbance of the unknown": "未知の溶液の吸光度の平均",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Unknown concentration read from the line": "直線から読み取った未知の濃度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "standards": "標準溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "line of best fit": "近似直線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "unknown": "未知の溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Calibration graph: absorbance against concentration of copper(II) sulfate for the standards, with the line of best fit and the reading for the unknown": "検量線のグラフ。標準溶液の吸光度を硫酸銅(II) の濃度に対してプロットし、最もよく合う直線と、未知の溶液の読みを示したもの",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Start by making the five standards from the 0.250 mol dm⁻³ stock solution.": "まず、0.250 mol dm⁻³ の原液から 5 つの標準溶液をつくりましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The colorimeter reads zero with the blank. Now measure the standards.": "ブランクで比色計の読みがゼロになりました。次は標準溶液を測定しましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Zero the colorimeter with the blank (distilled water) before you measure.": "測定の前に、ブランク（蒸留水）で比色計のゼロを合わせましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You did not zero on the blank: every reading includes the absorbance of the cuvette and water, so the line does not pass through the origin.": "ブランクでゼロを合わせていません。すべての読みにセルと水の吸光度が含まれるので、直線が原点を通りません。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "With this filter the absorbances are small and the line is shallow, so each 0.01 reading error is a large part of the value. A blue solution absorbs red light most.": "このフィルターでは吸光度が小さく、直線の傾きがゆるいので、0.01 の読みの誤差が値の大きな部分を占めます。青色の溶液がいちばん多く吸収するのは赤色の光です。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Now measure the unknown three times.": "次は、未知の溶液を 3 回測定しましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Read across from the unknown’s mean absorbance to the line, then down to the concentration axis.": "未知の溶液の吸光度の平均から横に進んで直線に当たったら、下へ進んで濃度の軸を読みます。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Standard {n}": "標準溶液 {n}",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Tube": "試験管",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "V(stock) / cm³": "V(原液) / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "V(water) / cm³": "V(水) / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "mean absorbance = ({a} + {b} + {c}) ÷ 3 = {m}": "吸光度の平均 = ({a} + {b} + {c}) ÷ 3 = {m}",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The unknown is above the top standard. Dilute it by a known factor and measure it again.": "未知の溶液がいちばん濃い標準溶液より上にあります。決まった倍率でうすめて、もう一度測定しましょう。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The true concentration of the unknown is {c} mol dm⁻³. Your percentage error: {e} %.": "未知の溶液の真の濃度は {c} mol dm⁻³ です。あなたの百分率誤差：{e} %。",

  }
});
