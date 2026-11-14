/* lab-gas-laws — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-gas-laws', {
  strings: {

    // page title (browser tab)
    "Lab 7 Investigating the gas laws | Structure Lab": "実験 7 気体の法則を調べる | Structure Lab",

    // Investigating the gas laws > page header > p
    "Lab 7 · Structure 1.5": "実験 7 · Structure 1.5",

    // Investigating the gas laws > page header > h1
    "Investigating the gas laws": "気体の法則を調べる",

    // Investigating the gas laws > page header > span
    "What can measurements on a trapped sample of air tell us about how pressure, volume and temperature are linked, and is there a lowest possible temperature?": "閉じこめた空気の試料を測定すると、圧力・体積・温度がどのように関係しているかについて、何がわかるのでしょうか。また、これ以上低くならない温度はあるのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "These are practical skills. Tick each one when you can do it on your own.": "これらは実験のスキルです。自分の力でできるようになったら、1 つずつチェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Identify the independent, dependent and controlled variables in a gas experiment.": "気体の実験で、独立変数・従属変数・制御変数を見分ける。",

    // What you need to be able to do > checklist > span
    "Record pressure, volume and temperature readings with their units and uncertainties.": "圧力・体積・温度の読みを、単位と不確かさを付けて記録する。",

    // What you need to be able to do > checklist > span
    "Test for inverse proportion by calculating <i>PV</i> or by plotting <i>P</i> against 1/<i>V</i>.": "<i>PV</i> を計算するか、<i>P</i> を 1/<i>V</i> に対してプロットして、反比例かどうかを確かめる。",

    // What you need to be able to do > checklist > span
    "Plot a graph against temperature and draw a line of best fit.": "温度に対するグラフをかき、最もよく合う直線を引く。",

    // What you need to be able to do > checklist > span
    "Extrapolate a straight line to estimate absolute zero.": "直線を外挿して、絶対零度を見積もる。",

    // What you need to be able to do > checklist > span
    "Estimate the uncertainty of an extrapolated value and compare it with the percentage error.": "外挿した値の不確かさを見積もり、百分率誤差とくらべる。",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors and suggest realistic improvements.": "偶然誤差と系統誤差を見分け、現実的な改善策を提案する。",

    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "Gas particles are always moving. They hit the walls of their container, and those collisions cause the pressure. For a <strong>fixed amount</strong> of an ideal gas, three relationships follow.": "気体の粒子はいつも動いています。粒子は容器の壁にぶつかり、その衝突が圧力を生みます。理想気体の量が<strong>一定</strong>なら、次の 3 つの関係が成り立ちます。",

    // The chemistry behind it > table > caption
    "Three relationships for a fixed amount of gas": "一定量の気体についての 3 つの関係",

    // The chemistry behind it > table > th
    "Kept constant": "一定に保つもの",

    // The chemistry behind it > table > th
    "Relationship": "関係",

    // The chemistry behind it > table > th
    "Straight line through the origin": "原点を通る直線になるグラフ",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "temperature": "温度",

    // The chemistry behind it > table > td
    "Pressure is inversely proportional to volume.": "圧力は体積に反比例する。",

    // The chemistry behind it > table > td
    "<i>P</i> against 1/<i>V</i>": "1/<i>V</i> に対する <i>P</i>",

    // The chemistry behind it > table > th
    "volume": "体積",

    // The chemistry behind it > table > td
    "Pressure is proportional to the absolute temperature.": "圧力は絶対温度に比例する。",

    // The chemistry behind it > table > td
    "<i>P</i> against <i>T</i> in K": "<i>T</i>（K）に対する <i>P</i>",

    // The chemistry behind it > table > th
    // Aim, variables and safety > table > td
    // Uncertainties > table > th
    "pressure": "圧力",

    // The chemistry behind it > table > td
    "Volume is proportional to the absolute temperature.": "体積は絶対温度に比例する。",

    // The chemistry behind it > table > td
    "<i>V</i> against <i>T</i> in K": "<i>T</i>（K）に対する <i>V</i>",

    // The chemistry behind it > p
    "In the laboratory you measure temperature in °C. A graph of pressure (or volume) against temperature in °C is still a straight line, but it does not pass through the origin. If you extend the line backwards, it meets the temperature axis at about −273 °C. That is <dfn data-def=\"The lowest possible temperature, 0 K or −273.15 °C. An ideal gas would have zero pressure and zero volume there.\">absolute zero</dfn>, 0 K. Extending a line beyond your data like this is called <dfn data-def=\"Extending a graph line beyond the range of the measured data to estimate a value.\">extrapolation</dfn>.": "実験室では、温度を °C ではかります。圧力（または体積）を °C で表した温度に対してプロットしても直線になりますが、原点は通りません。直線を左へ延ばすと、約 −273 °C で温度の軸と交わります。これが<dfn data-def=\"これ以上低くならない温度で、0 K、つまり −273.15 °C です。理想気体の圧力と体積は、そこでゼロになるはずです。\">絶対零度 <span class=\"en-term\">(absolute zero)</span></dfn>、0 K です。このように、データの範囲の外まで直線を延ばすことを<dfn data-def=\"測定したデータの範囲の外までグラフの線を延ばして、値を見積もることです。\">外挿 <span class=\"en-term\">(extrapolation)</span></dfn>といいます。",

    // The chemistry behind it > data-def attribute
    "The lowest possible temperature, 0 K or −273.15 °C. An ideal gas would have zero pressure and zero volume there.": "これ以上低くならない温度で、0 K、つまり −273.15 °C です。理想気体の圧力と体積は、そこでゼロになるはずです。",

    // The chemistry behind it > data-def attribute
    "Extending a graph line beyond the range of the measured data to estimate a value.": "測定したデータの範囲の外までグラフの線を延ばして、値を見積もることです。",

    // The chemistry behind it > p
    "The full story is on the topic page: <a href=\"../topics/s1-5.html#graphs\">gas-law graphs</a> and <a href=\"../topics/s1-5.html#pvnrt\">the ideal gas equation</a>.": "くわしい説明はトピックのページにあります：<a href=\"../topics/s1-5.html#graphs\">気体の法則のグラフ</a>、<a href=\"../topics/s1-5.html#pvnrt\">理想気体の状態方程式</a>。",

    // The chemistry behind it > key idea > p
    "All three relationships come from one equation, <i>PV</i> = <i>nRT</i>. Keep one of <i>P</i>, <i>V</i> and <i>T</i> (and <i>n</i>) fixed and the other two are proportional or inversely proportional, as long as <i>T</i> is in kelvin.": "3 つの関係は、すべて 1 つの式 <i>PV</i> = <i>nRT</i> から出てきます。<i>P</i>、<i>V</i>、<i>T</i> のうち 1 つ（と <i>n</i>）を一定にすると、残りの 2 つは比例か反比例の関係になります。ただし、<i>T</i> はケルビンで表さなければなりません。",

    // The chemistry behind it > not needed for IB > p
    "Books call these Boyle’s law, Charles’s law and the pressure law. The guide says the names of the gas laws will not be assessed. You need the relationships and their graphs, not the names.": "教科書では、これらをボイルの法則、シャルルの法則、圧力の法則と呼びます。『指導の手引き』には、気体の法則の名前は評価しないと書かれています。必要なのは関係とそのグラフで、名前ではありません。",

    // Aim, variables and safety > data-toc attribute
    "Aim, variables, safety": "目的・変数・安全",

    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> Part A: find how the pressure of a fixed amount of air changes with its volume at constant temperature. Part B: find how the pressure (at fixed volume) or the volume (at fixed pressure) changes with temperature, and use the graph to estimate absolute zero.": "<strong>目的</strong>　パート A：温度一定のもとで、一定量の空気の圧力が体積によってどう変わるかを調べる。パート B：圧力（体積一定）または体積（圧力一定）が温度によってどう変わるかを調べ、そのグラフから絶対零度を見積もる。",

    // Aim, variables and safety > table > caption
    "Variables": "変数",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    "Part A": "パート A",

    // Aim, variables and safety > table > th
    "Part B, fixed volume": "パート B（体積一定）",

    // Aim, variables and safety > table > th
    "Part B, fixed pressure": "パート B（圧力一定）",

    // Aim, variables and safety > table > th
    "independent": "独立変数",

    // Aim, variables and safety > table > td
    "volume of the syringe": "シリンジの体積",

    // Aim, variables and safety > table > td
    "temperature of the water bath": "水浴の温度",

    // Aim, variables and safety > table > th
    "dependent": "従属変数",

    // Aim, variables and safety > table > td
    "volume of the gas": "気体の体積",

    // Aim, variables and safety > table > th
    "controlled": "制御変数",

    // Aim, variables and safety > table > td
    "temperature; amount of air (no leaks)": "温度、空気の量（もれがないこと）",

    // Aim, variables and safety > table > td
    "volume of the flask; amount of air (no leaks)": "フラスコの体積、空気の量（もれがないこと）",

    // Aim, variables and safety > table > td
    "atmospheric pressure; amount of air (no leaks)": "大気圧、空気の量（もれがないこと）",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "100 cm<sup>3</sup> gas syringe (±0.5 cm<sup>3</sup>), with a cap to seal the nozzle": "100 cm<sup>3</sup> の気体用シリンジ（注射器、±0.5 cm<sup>3</sup>）と、先をふさぐキャップ",

    // Aim, variables and safety > li
    "gas pressure sensor and data logger (±0.1 kPa, range up to about 210 kPa)": "気体の圧力センサーとデータロガー（±0.1 kPa、約 210 kPa まで測定可能）",

    // Aim, variables and safety > li
    "short, narrow plastic tube to join the syringe or flask to the sensor": "シリンジやフラスコをセンサーにつなぐ、短くて細いプラスチックの管",

    // Aim, variables and safety > li
    "250 cm<sup>3</sup> borosilicate round-bottomed flask with a one-hole bung and glass tube": "250 cm<sup>3</sup> のホウケイ酸ガラスの丸底フラスコと、穴が 1 つのゴム栓、ガラス管",

    // Aim, variables and safety > li
    "large beaker or electric water bath, kettle, ice, stirring rod": "大きなビーカーまたは電気式の水浴、電気ポット、氷、ガラス棒",

    // Aim, variables and safety > li
    "thermometer, −10 °C to 110 °C (±0.5 °C)": "温度計、−10 °C〜110 °C（±0.5 °C）",

    // Aim, variables and safety > li
    "clamp stands, bosses and clamps": "スタンド、ムッフ、クランプ",

    // Aim, variables and safety > p
    "Water near 90 °C scalds. Use an electric water bath or add kettle water slowly, never carry a full beaker of hot water, and clamp the flask so the bath cannot be knocked over. Wear eye protection: a sealed flask is above atmospheric pressure when hot, and a flask with a crack can break. Check the flask for cracks first, and never move a hot flask straight into ice water. Keep the data logger and any mains leads away from the water.": "90 °C 近くの水はやけどをします。電気式の水浴を使うか、ポットのお湯をゆっくり加えましょう。熱いお湯でいっぱいのビーカーを持ち運んではいけません。水浴が倒れないように、フラスコはクランプで固定します。保護めがねをかけましょう。密閉したフラスコは、熱いと大気圧より圧力が高くなり、ひびの入ったフラスコは割れることがあります。まずフラスコにひびがないか確かめ、熱いフラスコをいきなり氷水に入れてはいけません。データロガーや電源コードは水から離しておきましょう。",

    // Method > h2
    "Method": "方法",

    // Method > h3
    "Part A: pressure and volume": "パート A：圧力と体積",

    // Method > li
    "Pull the plunger out to 50 cm<sup>3</sup>. Join the syringe to the pressure sensor with the shortest tube you have. <em>Why:</em> the air inside the tube is part of the trapped gas, but the syringe scale does not measure it.": "ピストンを 50 cm<sup>3</sup> まで引き出します。手元でいちばん短い管で、シリンジを圧力センサーにつなぎます。<em>理由：</em>管の中の空気も閉じこめた気体の一部ですが、シリンジの目盛ではその分をはかれないからです。",

    // Method > li
    "Test for leaks. Hold the plunger in at about 30 cm<sup>3</sup> for one minute. The pressure reading should not fall. <em>Why:</em> the amount of gas must stay constant.": "もれがないか確かめます。ピストンを約 30 cm<sup>3</sup> の位置で 1 分間押さえておきます。圧力の読みが下がらなければ大丈夫です。<em>理由：</em>気体の量は一定でなければならないからです。",

    // Method > li
    "Move the plunger to a new volume. Wait about 30 seconds, then record the volume and the pressure. <em>Why:</em> pushing the plunger in quickly warms the gas a little. Waiting lets it return to room temperature.": "ピストンを新しい体積まで動かします。約 30 秒待ってから、体積と圧力を記録します。<em>理由：</em>ピストンを速く押しこむと、気体が少し温まります。待てば室温にもどります。",

    // Method > li
    "Take readings from 25 cm<sup>3</sup> to 100 cm<sup>3</sup>, about every 10 cm<sup>3</sup>. Then repeat the readings, moving the plunger the other way. <em>Why:</em> a wide range shows the shape of the graph, and repeats show up leaks and friction.": "25 cm<sup>3</sup> から 100 cm<sup>3</sup> まで、約 10 cm<sup>3</sup> ごとに読みをとります。次に、ピストンを逆向きに動かしながら、くり返し読みをとります。<em>理由：</em>範囲が広いとグラフの形がわかり、くり返すと、もれや摩擦が見つかります。",

    // Method > li
    "Record the room temperature at the start and at the end. <em>Why:</em> temperature is a controlled variable, so you need to show it stayed the same.": "室温を最初と最後に記録します。<em>理由：</em>温度は制御変数なので、変わらなかったことを示す必要があります。",

    // Method > h3
    "Part B: temperature": "パート B：温度",

    // Method > li
    "Clamp the dry flask so that as much of it as possible is under the water. Join it to the pressure sensor with a short tube. <em>Why:</em> all the gas should be at the bath temperature.": "乾いたフラスコを、できるだけ多くの部分が水の中に入るようにクランプで固定します。短い管で圧力センサーにつなぎます。<em>理由：</em>気体のすべてが水浴の温度になるようにするためです。",

    // Method > li
    "Start with a mixture of ice and water at about 0 °C. Stir, wait until both the thermometer and the pressure reading are steady, then record both. <em>Why:</em> the gas inside the flask takes a few minutes to reach the temperature of the water.": "約 0 °C の氷と水の混合物から始めます。かき混ぜて、温度計と圧力の読みの両方が安定するまで待ってから、両方を記録します。<em>理由：</em>フラスコの中の気体が水の温度になるには、数分かかります。",

    // Method > li
    "Raise the temperature by about 10 °C to 15 °C, by heating or by adding hot water. Stir, wait, and record again. Continue up to about 90 °C. <em>Why:</em> a wide range of temperatures makes the extrapolation more reliable.": "加熱するか、お湯を加えて、温度を約 10 °C〜15 °C 上げます。かき混ぜて、待ってから、また記録します。約 90 °C まで続けます。<em>理由：</em>温度の範囲が広いほど、外挿の信頼性が高くなります。",

    // Method > li
    "For the fixed-pressure version, seal about 70 cm<sup>3</sup> of air in a gas syringe with a cap and hold it under the water. Record the volume instead of the pressure. Turn the plunger gently before each reading. <em>Why:</em> friction can stop the plunger moving freely, so the gas would not be at atmospheric pressure.": "圧力一定の実験では、約 70 cm<sup>3</sup> の空気を気体用シリンジに入れてキャップでふさぎ、水の中に沈めておきます。圧力の代わりに体積を記録します。読みをとる前には毎回、ピストンを軽く回します。<em>理由：</em>摩擦があるとピストンが自由に動かず、気体が大気圧にならないからです。",

    // Method > li
    "Plot pressure (or volume) against temperature in °C. Draw the line of best fit and extend it to the temperature axis.": "圧力（または体積）を、°C で表した温度に対してプロットします。最もよく合う直線を引き、温度の軸まで延ばします。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > p
    "These are simulated experiments. Every reading has a small random error, like a real one, so a new run gives slightly different data. The precision is that of real apparatus. Copy your table into a spreadsheet if you want to plot it yourself.": "これらはシミュレーションの実験です。本物と同じように、どの読みにも小さな偶然誤差があるので、新しく実行するたびに少しずつ違うデータになります。精度は実際の器具と同じです。自分でグラフをかきたいときは、表を表計算ソフトにコピーしましょう。",

    // Run the experiment > widget > data-title attribute
    "Part A: squeeze the air in a gas syringe": "パート A：気体用シリンジの空気を押し縮める",

    // Run the experiment > widget > data-kicker attribute
    "Virtual experiment": "バーチャル実験",

    // Run the experiment > widget > figcaption
    "Set a syringe reading and record the pressure. Take at least six readings from 25 cm<sup>3</sup> to 100 cm<sup>3</sup>. Compare the two graphs: the curve of <i>P</i> against <i>V</i>, and the straight line of <i>P</i> against 1/<i>V</i>. Then try “Read the sensor at once” after big moves of the plunger, and look at the <i>PV</i> column.": "シリンジの読みを決めて、圧力を記録します。25 cm<sup>3</sup> から 100 cm<sup>3</sup> まで、少なくとも 6 回読みをとりましょう。2 つのグラフ、つまり <i>P</i> と <i>V</i> の曲線と、<i>P</i> と 1/<i>V</i> の直線をくらべます。次に、ピストンを大きく動かしたあとで「すぐにセンサーを読む」を試し、<i>PV</i> の列を見てみましょう。",

    // Run the experiment > widget > data-title attribute
    "Part B: warm the air and find absolute zero": "パート B：空気を温めて絶対零度を求める",

    // Run the experiment > widget > figcaption
    "Choose a set-up. Set the bath temperature, take a reading, and repeat from about 0 °C to 90 °C. The graph extends your line of best fit back to the temperature axis. The readout gives your estimate of absolute zero and a range from the worst-fit lines. Switch the temperature axis to kelvin to see the line pass close to the origin. Then start a new run and choose “Read at once”: how far does your estimate move, and which way?": "装置を選びます。水浴の温度を決めて読みをとり、約 0 °C から 90 °C までくり返します。グラフでは、最もよく合う直線が温度の軸まで延ばされます。表示欄には、絶対零度の見積もりと、傾き最大・最小の直線から求めた範囲が出ます。温度の軸をケルビンに切り替えると、直線が原点の近くを通るのがわかります。それから新しく実行して「すぐに読む」を選びましょう。見積もりはどれくらい、どちらに動くでしょうか。",

    // Run the experiment > exam tip (shown in English + translation) > p
    "On a graph you plot yourself, label each axis with the quantity and its unit (<span class=\"mono\">P / kPa</span>, <span class=\"mono\">θ / °C</span>), choose scales that spread the points over most of the grid, and draw one smooth line of best fit. Do not join the points dot to dot.": "自分でグラフをかくときは、それぞれの軸に量と単位を書き（<span class=\"mono\">P / kPa</span>、<span class=\"mono\">θ / °C</span>）、点が方眼の大部分に広がるように目盛を選び、なめらかな最もよく合う直線を 1 本引きます。点と点を順に結んではいけません。",

    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > p
    "Two calculations come out of this lab. From Part B, you find where the line meets the temperature axis. From Part A, you test whether <i>PV</i> stays constant and use the gradient to find the amount of gas.": "この実験からは 2 つの計算が出てきます。パート B からは、直線が温度の軸と交わる点を求めます。パート A からは、<i>PV</i> が一定かどうかを確かめ、傾きから気体の物質量を求めます。",

    // Processing the data > worked example > h3
    "Absolute zero from a pressure–temperature graph": "圧力と温度のグラフから絶対零度を求める",

    // Processing the data > worked example > p
    "A student heats a sealed flask of air and plots pressure against temperature in °C. The line of best fit passes through (0.0 °C, 92.4 kPa) and (80.0 °C, 119.6 kPa). Estimate absolute zero from this line.": "ある生徒が、空気を密閉したフラスコを加熱し、圧力を °C で表した温度に対してプロットします。最もよく合う直線は (0.0 °C, 92.4 kPa) と (80.0 °C, 119.6 kPa) を通ります。この直線から絶対零度を見積もりなさい。",

    // Processing the data > worked example > data-title attribute
    "Find the gradient": "傾きを求める",

    // Processing the data > worked example > p
    "Use two points on the line, far apart, not two data points.": "データの点 2 つではなく、直線上の離れた 2 点を使います。",

    // Processing the data > worked example > maths line
    "gradient = (119.6 − 92.4) kPa ÷ (80.0 − 0.0) °C = 27.2 ÷ 80.0 = 0.340 kPa °C<sup>−1</sup>": "傾き = (119.6 − 92.4) kPa ÷ (80.0 − 0.0) °C = 27.2 ÷ 80.0 = 0.340 kPa °C<sup>−1</sup>",

    // Processing the data > worked example > data-title attribute
    "Read the intercept on the pressure axis": "圧力の軸の切片を読む",

    // Processing the data > worked example > p
    "The line passes through θ = 0.0 °C at 92.4 kPa, so that is the y-intercept.": "直線は θ = 0.0 °C で 92.4 kPa を通るので、これが y 切片です。",

    // Processing the data > worked example > data-title attribute
    "Set the pressure to zero": "圧力をゼロにする",

    // Processing the data > worked example > p
    "An ideal gas has zero pressure at absolute zero, so solve for θ when <i>P</i> = 0.": "理想気体の圧力は絶対零度でゼロになるので、<i>P</i> = 0 のときの θ を求めます。",

    // Processing the data > worked example > data-title attribute
    "Round and compare": "丸めて、くらべる",

    // Processing the data > worked example > p
    "The data have 3 significant figures. The literature value is −273.15 °C.": "データは有効数字 3 桁です。文献値は −273.15 °C です。",

    // Processing the data > worked example > maths line
    "percentage error = |−271.8 − (−273.15)| ÷ 273.15 × 100 = 0.5 %": "百分率誤差 = |−271.8 − (−273.15)| ÷ 273.15 × 100 = 0.5 %",

    // Processing the data > worked example > p
    "Absolute zero is about −272 °C, a 0.5 % difference from −273.15 °C.": "絶対零度は約 −272 °C で、−273.15 °C との差は 0.5 % です。",

    // Processing the data > try it > p
    "In the fixed-pressure experiment, the line of best fit of volume against temperature passes through (10.0 °C, 52.6 cm<sup>3</sup>) and (90.0 °C, 67.4 cm<sup>3</sup>). Estimate absolute zero, in °C.": "圧力一定の実験で、体積を温度に対してプロットした最もよく合う直線は、(10.0 °C, 52.6 cm<sup>3</sup>) と (90.0 °C, 67.4 cm<sup>3</sup>) を通ります。絶対零度を °C で見積もりなさい。",

    // Processing the data > try it > li
    "Find the gradient first, in cm<sup>3</sup> °C<sup>−1</sup>. Then work back from a known point to the temperature at which <i>V</i> = 0.": "まず、傾きを cm<sup>3</sup> °C<sup>−1</sup> で求めます。それから、わかっている点から、<i>V</i> = 0 になる温度までさかのぼります。",

    // Processing the data > try it > li
    "gradient = (67.4 − 52.6) ÷ (90.0 − 10.0). The volume must fall by 52.6 cm<sup>3</sup> from the point at 10.0 °C.": "傾き = (67.4 − 52.6) ÷ (90.0 − 10.0)。体積は、10.0 °C の点から 52.6 cm<sup>3</sup> 減らなければなりません。",

    // Processing the data > try it > maths line
    "gradient = 14.8 cm<sup>3</sup> ÷ 80.0 °C = 0.185 cm<sup>3</sup> °C<sup>−1</sup>": "傾き = 14.8 cm<sup>3</sup> ÷ 80.0 °C = 0.185 cm<sup>3</sup> °C<sup>−1</sup>",

    // Processing the data > try it > maths line
    "temperature fall needed = 52.6 ÷ 0.185 = 284.3 °C": "必要な温度の低下 = 52.6 ÷ 0.185 = 284.3 °C",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > h3
    "Testing inverse proportion and finding the amount of gas": "反比例を確かめ、気体の物質量を求める",

    // Processing the data > worked example > p
    "In Part A at 21.0 °C a student records: 30 cm<sup>3</sup>, 168.6 kPa; 50 cm<sup>3</sup>, 101.3 kPa; 80 cm<sup>3</sup>, 63.5 kPa; 100 cm<sup>3</sup>, 50.8 kPa. Show that the pressure is inversely proportional to the volume, and calculate the amount of air, in mol.": "パート A で、21.0 °C のとき、ある生徒が次のように記録しました：30 cm<sup>3</sup>、168.6 kPa。50 cm<sup>3</sup>、101.3 kPa。80 cm<sup>3</sup>、63.5 kPa。100 cm<sup>3</sup>、50.8 kPa。圧力が体積に反比例することを示し、空気の物質量を mol で計算しなさい。",

    // Processing the data > worked example > data-title attribute
    "Calculate PV for each reading": "それぞれの読みで PV を計算する",

    // Processing the data > worked example > p
    "If <i>P</i> is inversely proportional to <i>V</i>, the product <i>PV</i> is constant.": "<i>P</i> が <i>V</i> に反比例するなら、積 <i>PV</i> は一定です。",

    // Processing the data > worked example > data-title attribute
    "Judge the spread": "ばらつきを判断する",

    // Processing the data > worked example > p
    "The values differ by less than 0.5 %, which is within the uncertainty of the volume readings (about 1.7 % at 30 cm<sup>3</sup>). So <i>PV</i> is constant within experimental error.": "値の違いは 0.5 % より小さく、体積の読みの不確かさ（30 cm<sup>3</sup> で約 1.7 %）の範囲に入っています。したがって、<i>PV</i> は実験誤差の範囲で一定です。",

    // Processing the data > worked example > maths line
    "mean <i>PV</i> = 5071 kPa cm<sup>3</sup> ≈ 5.07 × 10<sup>3</sup> kPa cm<sup>3</sup>": "<i>PV</i> の平均 = 5071 kPa cm<sup>3</sup> ≈ 5.07 × 10<sup>3</sup> kPa cm<sup>3</sup>",

    // Processing the data > worked example > data-title attribute
    "Convert to SI units": "SI 単位に直す",

    // Processing the data > worked example > p
    "1 kPa = 10<sup>3</sup> Pa and 1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>, so 1 kPa cm<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> = 10<sup>−3</sup> J.": "1 kPa = 10<sup>3</sup> Pa、1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup> なので、1 kPa cm<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> = 10<sup>−3</sup> J です。",

    // Processing the data > worked example > data-title attribute
    "Use PV = nRT": "PV = nRT を使う",

    // Processing the data > worked example > p
    "Temperature must be in kelvin: 21.0 + 273.15 = 294.15 K.": "温度はケルビンで表します：21.0 + 273.15 = 294.15 K。",

    // Processing the data > worked example > maths line
    "<i>n</i> = <b>2.07 × 10<sup>−3</sup> mol</b> (3 significant figures)": "<i>n</i> = <b>2.07 × 10<sup>−3</sup> mol</b> (有効数字 3 桁)",

    // Processing the data > worked example > p
    "<i>PV</i> is constant within error, so <i>P</i> ∝ 1/<i>V</i>. The syringe holds 2.07 × 10<sup>−3</sup> mol of air.": "<i>PV</i> は誤差の範囲で一定なので、<i>P</i> ∝ 1/<i>V</i> です。シリンジには 2.07 × 10<sup>−3</sup> mol の空気が入っています。",

    // Processing the data > try it > p
    "The gradient of a student’s graph of <i>P</i> against 1/<i>V</i> is 3.86 × 10<sup>3</sup> kPa cm<sup>3</sup>. The room temperature was 18.5 °C. Calculate the amount of air in the syringe, in mol.": "ある生徒の <i>P</i> と 1/<i>V</i> のグラフの傾きは 3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> です。室温は 18.5 °C でした。シリンジの中の空気の物質量を mol で計算しなさい。",

    // Processing the data > try it > li
    "The gradient of <i>P</i> against 1/<i>V</i> equals <i>PV</i>. Convert kPa cm<sup>3</sup> to J (Pa m<sup>3</sup>) before you use <i>R</i> = 8.31.": "<i>P</i> と 1/<i>V</i> のグラフの傾きは <i>PV</i> に等しくなります。<i>R</i> = 8.31 を使う前に、kPa cm<sup>3</sup> を J（Pa m<sup>3</sup>）に直しましょう。",

    // Processing the data > try it > li
    "3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> = 3.86 J. <i>T</i> = 18.5 + 273.15 = 291.65 K.": "3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> = 3.86 J。<i>T</i> = 18.5 + 273.15 = 291.65 K。",

    // Processing the data > common mistake > p
    "Putting kPa and cm<sup>3</sup> straight into <i>PV</i> = <i>nRT</i> with <i>R</i> = 8.31 gives an answer 1000 times too large. Use Pa and m<sup>3</sup>, or kPa and dm<sup>3</sup>. Always use kelvin for <i>T</i>: a temperature in °C gives nonsense.": "kPa と cm<sup>3</sup> をそのまま <i>R</i> = 8.31 の <i>PV</i> = <i>nRT</i> に入れると、答えが 1000 倍大きくなります。Pa と m<sup>3</sup>、または kPa と dm<sup>3</sup> を使いましょう。<i>T</i> にはいつもケルビンを使います。°C の温度を入れると、意味のない答えになります。",

    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > h3
    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Readings": "読み",

    // Uncertainties > table > caption
    "Uncertainty of the apparatus": "器具の不確かさ",

    // Uncertainties > table > th
    "Reading": "読み",

    // Uncertainties > table > th
    "Absolute uncertainty": "絶対不確かさ",

    // Uncertainties > table > th
    "Example": "例",

    // Uncertainties > table > th
    "Percentage uncertainty": "百分率の不確かさ",

    // Uncertainties > table > th
    "syringe volume": "シリンジの体積",

    // Uncertainties > table > td
    "±0.5 cm<sup>3</sup>": "±0.5 cm<sup>3</sup>",

    // Uncertainties > table > td
    "30 cm<sup>3</sup>": "30 cm<sup>3</sup>",

    // Uncertainties > table > td
    "100 cm<sup>3</sup>": "100 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.1 kPa": "±0.1 kPa",

    // Uncertainties > table > td
    "168.6 kPa": "168.6 kPa",

    // Uncertainties > p
    "Percentage uncertainty = absolute uncertainty ÷ value × 100. The same reading has a much smaller percentage uncertainty in kelvin than in °C, because the number is bigger. A temperature <em>difference</em> uses two readings, so its absolute uncertainty is ±0.5 + 0.5 = ±1.0 °C.": "百分率の不確かさ = 絶対不確かさ ÷ 値 × 100。同じ読みでも、ケルビンで表すと °C より数が大きいので、百分率の不確かさはずっと小さくなります。温度の<em>差</em>は 2 回の読みを使うので、その絶対不確かさは ±0.5 + 0.5 = ±1.0 °C です。",

    // Uncertainties > p
    "For a product or a quotient, add the percentage uncertainties. At 30 cm<sup>3</sup>, <i>PV</i> has an uncertainty of 1.7 % + 0.06 % ≈ 1.7 %. The volume dominates. That is why the smallest volumes give the least certain points.": "積や商では、百分率の不確かさを足します。30 cm<sup>3</sup> では、<i>PV</i> の不確かさは 1.7 % + 0.06 % ≈ 1.7 % です。体積の不確かさが大部分を占めます。だから、体積が最も小さい点が最も不確かになります。",

    // Uncertainties > h3
    "The uncertainty of absolute zero": "絶対零度の不確かさ",

    // Uncertainties > p
    "Your estimate comes from an extrapolation, so small errors in the line become large errors at −273 °C. One way to see how large is to draw two <dfn data-def=\"The steepest and the shallowest straight lines that still pass through the error bars of the data points.\">worst-fit lines</dfn>: the steepest and the shallowest lines that still pass through the error bars of your lowest and highest points.": "見積もりは外挿から出てくるので、直線の小さな誤差が −273 °C では大きな誤差になります。どれくらい大きいかを見る方法の 1 つは、<dfn data-def=\"データの点のエラーバーを通る直線のうち、傾きが最も急な直線と最もゆるい直線です。\">傾き最大・最小の直線 <span class=\"en-term\">(worst-fit lines)</span></dfn>を 2 本引くことです。最も低い点と最も高い点のエラーバーを通る直線のうち、傾きが最も急なものと最もゆるいものです。",

    // Uncertainties > data-def attribute
    "The steepest and the shallowest straight lines that still pass through the error bars of the data points.": "データの点のエラーバーを通る直線のうち、傾きが最も急な直線と最もゆるい直線です。",

    // Uncertainties > p
    "Take the worked example. The lowest and highest readings, (0.0 °C, 92.4 kPa) and (80.0 °C, 119.6 kPa), sit on the line, with error bars of ±0.5 °C and ±0.1 kPa.": "例題を使います。最も低い読みと最も高い読み (0.0 °C, 92.4 kPa) と (80.0 °C, 119.6 kPa) は直線上にあり、エラーバーは ±0.5 °C と ±0.1 kPa です。",

    // Uncertainties > li
    "Steepest line: through (0.5 °C, 92.3 kPa) and (79.5 °C, 119.7 kPa). It meets the axis at −266 °C.": "傾きが最も急な直線：(0.5 °C, 92.3 kPa) と (79.5 °C, 119.7 kPa) を通る。軸とは −266 °C で交わる。",

    // Uncertainties > li
    "Shallowest line: through (−0.5 °C, 92.5 kPa) and (80.5 °C, 119.5 kPa). It meets the axis at −278 °C.": "傾きが最もゆるい直線：(−0.5 °C, 92.5 kPa) と (80.5 °C, 119.5 kPa) を通る。軸とは −278 °C で交わる。",

    // Uncertainties > p
    "So the result is <span class=\"mono\">−272 ± 6 °C</span>. The literature value, −273.15 °C, lies inside this range. The 0.5 % percentage error is smaller than the uncertainty, so random error alone could explain the difference. If the literature value had been outside the range, a systematic error would be likely.": "したがって、結果は <span class=\"mono\">−272 ± 6 °C</span> です。文献値 −273.15 °C は、この範囲の中にあります。百分率誤差 0.5 % は不確かさより小さいので、この違いは偶然誤差だけで説明できます。文献値が範囲の外にあったなら、系統誤差がある可能性が高いでしょう。",

    // Uncertainties > key idea > p
    "Real data scatter more than the error bars of the instruments suggest, because of other random errors (the gas not quite at the bath temperature, uneven heating). The worst-fit lines then have to pass through all the points’ error bars, not just the two end points. The virtual experiment uses the two end points to keep things simple.": "実際のデータは、ほかの偶然誤差（気体が水浴の温度になりきっていない、加熱にむらがある）があるので、器具のエラーバーから予想されるよりも大きくばらつきます。そのときは、傾き最大・最小の直線は、両端の 2 点だけでなく、すべての点のエラーバーを通らなければなりません。バーチャル実験では、簡単にするために両端の 2 点を使っています。",

    // Uncertainties > not needed for IB > p
    "The guide does not set a formal method for the uncertainty of a gradient or an intercept. Worst-fit lines are one common way. You will not need a statistical method such as least-squares error analysis.": "『指導の手引き』には、傾きや切片の不確かさを求める決まった方法はありません。傾き最大・最小の直線は、よく使われる方法の 1 つです。最小二乗法による誤差解析のような統計的な方法は必要ありません。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差と改善",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">random error</dfn> scatters readings both ways; repeats reduce its effect. A <dfn data-def=\"An error that shifts every reading in the same direction. Repeats do not remove it; you must change the method or the apparatus.\">systematic error</dfn> pushes every reading the same way, so repeats do not help. You have to change the method.": "<dfn data-def=\"読みが、真の値の上下に予測できない形でばらつく誤差です。くり返して平均をとると、その影響が小さくなります。\">偶然誤差 <span class=\"en-term\">(random error)</span></dfn>は、読みを両方向にばらつかせます。くり返すと、その影響が小さくなります。<dfn data-def=\"すべての読みを同じ向きにずらす誤差です。くり返しても取り除けず、方法か器具を変えなければなりません。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>は、すべての読みを同じ向きにずらすので、くり返しても役に立ちません。方法を変える必要があります。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "読みが、真の値の上下に予測できない形でばらつく誤差です。くり返して平均をとると、その影響が小さくなります。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that shifts every reading in the same direction. Repeats do not remove it; you must change the method or the apparatus.": "すべての読みを同じ向きにずらす誤差です。くり返しても取り除けず、方法か器具を変えなければなりません。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in the gas-law experiments": "気体の法則の実験での誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > td
    "Part B, fixed volume: the air in the connecting tube stays near room temperature (systematic).": "パート B（体積一定）：つないだ管の中の空気が室温近くのままになる（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The pressure rises less than it should as the bath heats up. The gradient is too small, so the line meets the axis too far down: the estimate is more negative than −273 °C.": "水浴が温まっても、圧力が本来ほど上がらない。傾きが小さすぎるので、直線が軸と交わる点が下がりすぎる。見積もりは −273 °C より負に大きくなる。",

    // Evaluation: errors and improvements > table > td
    "Use a short, narrow tube and a large flask, and push the flask as deep into the water as possible.": "短くて細い管と大きなフラスコを使い、フラスコをできるだけ深く水に沈める。",

    // Evaluation: errors and improvements > table > td
    "Part B: readings taken before the gas reaches the bath temperature (systematic when heating).": "パート B：気体が水浴の温度になる前に読みをとる（加熱するときは系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The first reading, taken after a long wait in ice water, is correct. After each rise in temperature the gas is still cooler than the thermometer reading, so the later pressures (or volumes) are too low. The line is too shallow, so the estimate is more negative than −273 °C, often by a lot.": "氷水で長く待ってからとった最初の読みは正しい。温度を上げるたびに、気体はまだ温度計の読みより冷たいので、あとの圧力（または体積）が低すぎる。直線の傾きがゆるすぎるので、見積もりは −273 °C より負に大きくなり、その差が大きいことも多い。",

    // Evaluation: errors and improvements > table > td
    "Stir the water and wait until the sensor reading has stopped changing before you record.": "水をかき混ぜ、センサーの読みが変わらなくなるまで待ってから記録する。",

    // Evaluation: errors and improvements > table > td
    "Part B, fixed pressure: friction between the plunger and the barrel (systematic when heating).": "パート B（圧力一定）：ピストンと筒の間の摩擦（加熱するときは系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The plunger sticks behind the expanding gas, so the volumes read after heating are too small. The line is too shallow, so the estimate is more negative than −273 °C. Friction also adds random scatter.": "膨張する気体にピストンがついていけず、加熱後に読む体積が小さすぎる。直線の傾きがゆるすぎるので、見積もりは −273 °C より負に大きくなる。摩擦は、でたらめなばらつきも加える。",

    // Evaluation: errors and improvements > table > td
    "Use a glass syringe, turn the plunger gently before each reading, or use a capillary tube with a bead of liquid instead.": "ガラス製のシリンジを使う、読みの前に毎回ピストンを軽く回す、または代わりに液体の粒を入れた毛細管を使う。",

    // Evaluation: errors and improvements > table > td
    "Part A: air in the tube to the sensor is not included in <i>V</i> (systematic).": "パート A：センサーまでの管の中の空気が <i>V</i> に含まれていない（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "<i>PV</i> falls slightly as <i>V</i> gets smaller, and the graph of <i>P</i> against 1/<i>V</i> does not pass exactly through the origin.": "<i>V</i> が小さくなるにつれて <i>PV</i> が少し小さくなり、<i>P</i> と 1/<i>V</i> のグラフがちょうど原点を通らない。",

    // Evaluation: errors and improvements > table > td
    "Use the shortest tube possible, or measure the tube’s volume and add it to every syringe reading.": "できるだけ短い管を使うか、管の体積をはかって、シリンジの読みすべてに足す。",

    // Evaluation: errors and improvements > table > td
    "Part A: gas leaks out at the joints at high pressure (systematic).": "パート A：圧力が高いと、つなぎ目から気体がもれる（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The amount of gas falls, so <i>PV</i> falls during the run.": "気体の量が減るので、実験中に <i>PV</i> が小さくなる。",

    // Evaluation: errors and improvements > table > td
    "Use tight push-fit joints, test for leaks first, and take readings without long delays.": "しっかりはまる差しこみ式のつなぎ目を使い、まずもれを確かめ、長い間をおかずに読みをとる。",

    // Evaluation: errors and improvements > table > td
    "Part A: reading straight after a quick compression (random or systematic).": "パート A：速く圧縮した直後に読む（偶然誤差または系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The gas is briefly warmer, so the pressure is too high at small volumes.": "気体が一時的に温まるので、体積が小さいところで圧力が高すぎる。",

    // Evaluation: errors and improvements > table > td
    "Move the plunger slowly and wait about 30 s before each reading.": "ピストンをゆっくり動かし、読みの前に毎回約 30 s 待つ。",

    // Evaluation: errors and improvements > table > td
    "Readings of the thermometer and the syringe scale (random).": "温度計とシリンジの目盛の読み（偶然誤差）。",

    // Evaluation: errors and improvements > table > td
    "Points scatter about the line, so the gradient and the intercept are less certain.": "点が直線のまわりにばらつくので、傾きと切片が不確かになる。",

    // Evaluation: errors and improvements > table > td
    "Take more readings over a wider range and repeat them; use a digital temperature probe.": "より広い範囲でより多くの読みをとり、くり返す。デジタル温度計を使う。",

    // Evaluation: errors and improvements > table > td
    "Long extrapolation from 0–90 °C back to −273 °C.": "0〜90 °C から −273 °C までの長い外挿。",

    // Evaluation: errors and improvements > table > td
    "Small errors in the gradient give large errors in the estimate.": "傾きの小さな誤差が、見積もりの大きな誤差になる。",

    // Evaluation: errors and improvements > table > td
    "Use the widest safe temperature range and many evenly spread points.": "安全な範囲でできるだけ広い温度範囲を使い、均等に広がった多くの点をとる。",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For an error question, say three things: what the error is, which way it moves the result (bigger or smaller, and why), and a specific improvement. “Human error” and “be more careful” earn no marks.": "誤差の問題では、3 つのことを書きましょう。誤差は何か、それが結果をどちらに動かすか（大きくするか小さくするか、そしてその理由）、そして具体的な改善策です。「人為的な誤差」や「もっと注意する」では点になりません。",

    // Evaluation: errors and improvements > not needed for IB > p
    "Air behaves almost ideally between 0 °C and 90 °C and up to about 200 kPa, so non-ideal behaviour is not a significant error here. You do not need to correct for it.": "0 °C から 90 °C、約 200 kPa までの範囲では、空気はほぼ理想気体としてふるまいます。そのため、ここでは理想気体からのずれは大きな誤差になりません。補正する必要はありません。",

    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "Paper 1B style questions on this practical: data, graphs, uncertainties and evaluation. All the questions are original.": "この実験についての Paper 1B 形式の問題です。データ、グラフ、不確かさ、評価を扱います。問題はすべてオリジナルです。",

    // Exam practice > data-title attribute
    "Gas laws lab: exam practice": "気体の法則の実験：試験対策の問題",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "No readings yet.": "まだ読みがありません。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Syringe reading, V": "シリンジの読み V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "After moving the plunger": "ピストンを動かしたあと",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Wait 30 s, then read the sensor": "30 秒待ってからセンサーを読む",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Read the sensor at once": "すぐにセンサーを読む",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph": "グラフ",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P against 1/V": "1/V に対する P",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P against V": "V に対する P",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Record reading": "読みを記録",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Delete last reading": "最後の読みを削除",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Last reading deleted.": "最後の読みを削除しました。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run": "新しく実行",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run: the syringe was refilled with air at {V} cm³ and sealed.": "新しく実行：シリンジに空気を {V} cm³ 入れ直して密閉しました。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copy data": "データをコピー",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "V / cm³ (±0.5)": "V / cm³ (±0.5)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P / kPa (±0.1)": "P / kPa (±0.1)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "1/V / cm⁻³": "1/V / cm⁻³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "PV / kPa cm³": "PV / kPa cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copied {n} readings as tab-separated text. Paste them into a spreadsheet.": "{n} 個の読みをタブ区切りのテキストとしてコピーしました。表計算ソフトに貼り付けてください。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copying is blocked in this browser. Select the table with the mouse and copy it instead.": "このブラウザーではコピーできません。マウスで表を選択してコピーしてください。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Pressure sensor": "圧力センサー",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Room temperature": "室温",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Best-fit line": "近似直線",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Note": "メモ",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A gas syringe sealed to a pressure sensor by a short tube. The plunger position shows the syringe reading. The sensor shows the pressure. The values are also in the readout.": "短い管で圧力センサーにつないで密閉した気体用シリンジ。ピストンの位置がシリンジの読みを、センサーが圧力を示す。値は表示欄にも出る。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "pressure sensor": "圧力センサー",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gas syringe (cm³)": "シリンジ (cm³)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "That is plenty of readings. Delete one or start a new run.": "読みは十分な数になりました。1 つ削除するか、新しく実行してください。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded V = {V} cm³, P = {p} kPa.": "記録しました：V = {V} cm³、P = {p} kPa。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of pressure against 1/V for the readings in the table, with a straight line of best fit.": "表の読みについて、圧力を 1/V に対してプロットし、最もよく合う直線を引いたグラフ。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P / kPa": "P / kPa",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Curve P = k/V": "曲線 P = k/V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of pressure against volume for the readings in the table, with a curve through the points.": "表の読みについて、圧力を体積に対してプロットし、点を通る曲線を引いたグラフ。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "V / cm³": "V / cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Record at least three readings over the whole range of the syringe.": "シリンジの範囲全体で、少なくとも 3 回読みを記録しましょう。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gradient = {m} kPa cm³, y-intercept = {b} kPa": "傾き = {m} kPa cm³、y 切片 = {b} kPa",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "PV ranges from {lo} to {hi} kPa cm³": "PV は {lo}〜{hi} kPa cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Air was sealed in the syringe at {V} cm³. Move the plunger, then record the sensor reading.": "シリンジに空気を {V} cm³ 入れて密閉しました。ピストンを動かしてから、センサーの読みを記録しましょう。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Set-up": "装置",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Fixed volume (pressure sensor)": "体積一定（圧力センサー）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Fixed pressure (gas syringe)": "圧力一定（気体用シリンジ）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Water-bath temperature": "水浴の温度",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Before each reading": "それぞれの読みの前に",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Stir and wait 3 minutes": "かき混ぜて 3 分待つ",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Read at once": "すぐに読む",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Temperature axis": "温度の軸",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ in °C, extrapolated": "θ（°C）、外挿あり",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "T in K": "T（K）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Take reading": "読みをとる",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run: fresh apparatus, sealed with air at room temperature and left in the bath until steady.": "新しく実行：新しい装置に室温の空気を密閉し、安定するまで水浴に入れておきました。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ / °C (±0.5)": "θ / °C (±0.5)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "T / K": "T / K",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Thermometer": "温度計",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Last reading": "最後の読み",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Absolute zero estimate": "絶対零度の見積もり",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A 250 cm³ flask of air is sealed and joined to a pressure sensor. The volume is fixed. Change the bath temperature and take readings.": "250 cm³ のフラスコに空気を密閉し、圧力センサーにつないであります。体積は一定です。水浴の温度を変えて読みをとりましょう。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A gas syringe holding {V} cm³ of air at room temperature is sealed and held under the water. The plunger moves, so the pressure stays at atmospheric pressure.": "室温の空気 {V} cm³ を入れた気体用シリンジを密閉し、水の中に沈めてあります。ピストンが動くので、圧力は大気圧のままです。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A water bath with a thermometer. Fixed volume: a sealed flask in the bath joined by a tube to a pressure sensor. Fixed pressure: a sealed gas syringe under the water. The readings are in the readout.": "温度計を入れた水浴。体積一定：水浴の中の密閉したフラスコを、管で圧力センサーにつないだもの。圧力一定：水の中に沈めた密閉した気体用シリンジ。読みは表示欄に出る。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "water bath": "水浴",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "air": "空気",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "sealed gas syringe (cm³)": "密閉したシリンジ (cm³)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded θ = {th} °C, P = {y} kPa.": "記録しました：θ = {th} °C、P = {y} kPa。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded θ = {th} °C, V = {y} cm³.": "記録しました：θ = {th} °C、V = {y} cm³。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Best-fit line, extrapolated": "近似直線（外挿）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "≈ {x} °C": "≈ {x} °C",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "meets the axis below −300 °C": "−300 °C より下で軸と交わる",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{v} {u} at 0 K": "0 K で {v} {u}",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of the readings against temperature in kelvin, with the line of best fit.": "読みをケルビンで表した温度に対してプロットし、最もよく合う直線を引いたグラフ。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of the readings against temperature in degrees Celsius. The line of best fit is extended back to where it meets the temperature axis.": "読みをセルシウス温度に対してプロットしたグラフ。最もよく合う直線を、温度の軸と交わるところまで左へ延ばしてある。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ / °C": "θ / °C",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Take at least three readings, spread from 0 °C to 90 °C.": "0 °C から 90 °C まで広げて、少なくとも 3 回読みをとりましょう。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gradient in {u} °C⁻¹": "傾き（{u} °C⁻¹）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{x} °C. Spread your readings over a wider range to estimate its uncertainty.": "{x} °C。不確かさを見積もるには、もっと広い範囲で読みをとりましょう。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{x} °C (worst-fit lines: {a} °C to {z} °C)": "{x} °C（傾き最大・最小の直線：{a} °C〜{z} °C）",

  }
});
