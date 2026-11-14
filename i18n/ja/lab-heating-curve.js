/* lab-heating-curve — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-heating-curve', {
  strings: {

    // page title (browser tab)
    "Lab 3 Heating and cooling curves | Structure Lab": "実験 3 加熱曲線と冷却曲線 | Structure Lab",

    // Heating and cooling curves > page header > p
    "Lab 3 · Structure 1.1": "実験 3 · Structure 1.1",

    // Heating and cooling curves > page header > h1
    "Heating and cooling curves": "加熱曲線と冷却曲線",

    // Heating and cooling curves > page header > span
    "What can a graph of temperature against time tell us about what the particles are doing when a substance changes state?": "物質の状態が変わるとき、温度と時間のグラフから、粒子のようすについて何がわかるでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "This lab practises the skills behind Structure 1.1.2 and 1.1.3. All of it is SL and HL core. Tick each item when you can do it without help.": "この実験では、Structure 1.1.2 と 1.1.3 のもとになるスキルを練習します。すべて SL の内容（SL・HL 共通）です。助けなしでできるようになったら、チェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Plan a heating or cooling experiment: name the independent, dependent and controlled variables, and give real safety precautions.": "加熱や冷却の実験を計画する。独立変数・従属変数・制御変数を挙げ、実際に役立つ安全上の注意を示す。",

    // What you need to be able to do > checklist > span
    "Record temperature and time in a table with headings, units and the uncertainty of each instrument.": "見出し、単位、それぞれの器具の不確かさを付けた表に、温度と時間を記録する。",

    // What you need to be able to do > checklist > span
    "Plot a heating or cooling curve with labelled axes and a smooth line through the points.": "軸にラベルを付け、点を通るなめらかな線を引いて、加熱曲線や冷却曲線をかく。",

    // What you need to be able to do > checklist > span
    "Find a melting point (or freezing point) from the flat part of a curve, and convert it to kelvin.": "曲線の平らな部分から融点（または凝固点）を求め、ケルビンに換算する。",

    // What you need to be able to do > checklist > span
    "Explain the flat parts with particles: energy overcomes the forces between the particles, and the average kinetic energy stays the same.": "平らな部分を粒子で説明する。エネルギーは粒子のあいだの力に打ち勝つのに使われ、平均運動エネルギーは変わらない。",

    // What you need to be able to do > checklist > span
    "Recognize supercooling on a cooling curve, and read the freezing point from the plateau, not from the dip.": "冷却曲線で過冷却を見分け、凝固点を、くぼみではなく平らな部分から読み取る。",

    // What you need to be able to do > checklist > span
    "State the uncertainty of a temperature reading, work out a percentage uncertainty, and compare it with a percentage error.": "温度の読みの不確かさを述べ、百分率の不確かさを求め、百分率誤差とくらべる。",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors in the method and suggest realistic improvements.": "方法の中の偶然誤差と系統誤差を特定し、現実的な改善策を提案する。",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "When you heat a solid at a steady rate, its temperature rises. Then, at the melting point, the temperature stops rising while the solid melts. Only when all of it has melted does the temperature start to rise again.": "固体を一定の割合で加熱すると、温度が上がります。そして融点に達すると、固体が融解しているあいだは温度が上がらなくなります。すべて融解してはじめて、温度がまた上がりはじめます。",

    // The chemistry behind it > p
    "Temperature is a measure of the <dfn data-def=\"The average of the kinetic energies of all the particles in a sample. Temperature in kelvin is a measure of it.\">average kinetic energy</dfn> of the particles. On a sloping part of the curve, the energy supplied makes the particles move faster, so the temperature rises. On a flat part, the energy supplied is used to overcome the attractions between the particles. Their potential energy increases, but their average kinetic energy does not change, so the temperature stays constant.": "温度は、粒子の<dfn data-def=\"試料に含まれるすべての粒子の運動エネルギーの平均。ケルビンで表した温度はその尺度である。\">平均運動エネルギー <span class=\"en-term\">(average kinetic energy)</span></dfn>の尺度です。曲線の傾いた部分では、加えたエネルギーで粒子の動きが速くなるので、温度が上がります。平らな部分では、加えたエネルギーは粒子のあいだの引力に打ち勝つのに使われます。粒子の位置エネルギーは増えますが、平均運動エネルギーは変わらないので、温度は一定に保たれます。",

    // The chemistry behind it > data-def attribute
    "The average of the kinetic energies of all the particles in a sample. Temperature in kelvin is a measure of it.": "試料に含まれるすべての粒子の運動エネルギーの平均。ケルビンで表した温度はその尺度である。",

    // The chemistry behind it > p
    "A cooling curve is the same story backwards. As a liquid freezes, the particles are pulled into fixed positions by the attractive forces, and energy is released. That energy keeps the temperature constant until all the liquid has frozen.": "冷却曲線は、同じことを逆向きにたどったものです。液体が凝固するとき、粒子は引力によって決まった位置に引きよせられ、エネルギーが放出されます。そのエネルギーによって、液体がすべて凝固するまで温度が一定に保たれます。",

    // The chemistry behind it > p
    "For the full story, see <a href=\"../topics/s1-1.html#curves\">heating curves</a>, <a href=\"../topics/s1-1.html#changes\">changes of state</a> and <a href=\"../topics/s1-1.html#temperature\">temperature and kelvin</a> in Structure 1.1. Why stearic acid melts at a higher temperature than lauric acid is about <a href=\"../topics/s2-2.html#imf\">intermolecular forces</a> (Structure 2.2).": "くわしくは、Structure 1.1 の<a href=\"../topics/s1-1.html#curves\">加熱曲線</a>、<a href=\"../topics/s1-1.html#changes\">状態変化</a>、<a href=\"../topics/s1-1.html#temperature\">温度とケルビン</a>を見てください。ステアリン酸がラウリン酸より高い温度で融解する理由は、<a href=\"../topics/s2-2.html#imf\">分子間力</a>（Structure 2.2）の話です。",

    // The chemistry behind it > equation > dd
    "temperature in kelvin <span class=\"unit\">K</span>": "ケルビンで表した温度 <span class=\"unit\">K</span>",

    // The chemistry behind it > equation > dd
    "temperature in degrees Celsius <span class=\"unit\">°C</span>": "セルシウス度で表した温度 <span class=\"unit\">°C</span>",

    // The chemistry behind it > p
    "A change of 1 K is the same size as a change of 1 °C. So a temperature <em>difference</em>, and its uncertainty, has the same number in both units.": "1 K の変化は、1 °C の変化と同じ大きさです。だから、温度の<em>差</em>とその不確かさは、どちらの単位でも同じ数値になります。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to find the melting point of a pure solid from its heating curve and its freezing point from its cooling curve, and to see how the flat parts depend on the rate of heating or cooling.": "<strong>目的：</strong>純粋な固体の融点を加熱曲線から、凝固点を冷却曲線から求める。また、平らな部分が加熱や冷却の速さによってどう変わるかを調べる。",

    // Aim, variables and safety > table > caption
    "Variables": "変数",

    // Aim, variables and safety > table > th
    "Type": "種類",

    // Aim, variables and safety > table > th
    "Variable": "変数",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "測定方法・一定に保つ方法",

    // Aim, variables and safety > table > th
    "Independent": "独立変数",

    // Aim, variables and safety > table > td
    "time": "時間",

    // Aim, variables and safety > table > td
    "stopwatch, reading at fixed intervals (for example every 30 s)": "ストップウォッチ。決まった間隔で読む（たとえば 30 s ごと）",

    // Aim, variables and safety > table > th
    "Dependent": "従属変数",

    // Aim, variables and safety > table > td
    "temperature of the sample": "試料の温度",

    // Aim, variables and safety > table > td
    "thermometer with its bulb in the middle of the sample": "球部が試料の中央にくるようにした温度計",

    // Aim, variables and safety > table > th
    "Controlled": "制御変数",

    // Aim, variables and safety > table > td
    "mass of sample": "試料の質量",

    // Aim, variables and safety > table > td
    "weigh about 5 g on a balance (±0.01 g) for every run": "毎回、電子てんびん（±0.01 g）で約 5 g をはかる",

    // Aim, variables and safety > table > td
    "temperature of the water bath (or hotplate setting)": "水浴の温度（またはホットプレートの設定）",

    // Aim, variables and safety > table > td
    "check the bath with a second thermometer; stir it": "2 本目の温度計で水浴の温度を確かめ、水浴をかき混ぜる",

    // Aim, variables and safety > table > td
    "position of the thermometer": "温度計の位置",

    // Aim, variables and safety > table > td
    "bulb fully covered by the sample, not touching the glass": "球部は試料に完全にうまり、ガラスにはふれない",

    // Aim, variables and safety > table > td
    "same thermometer and same tube": "同じ温度計と同じ試験管",

    // Aim, variables and safety > table > td
    "use the same apparatus for heating and cooling runs": "加熱と冷却で同じ器具を使う",

    // Aim, variables and safety > p
    "The rate of heating or cooling is not a variable you want to change during a run. In this lab you change it <em>between</em> runs to see its effect on the shape of the curve.": "加熱や冷却の速さは、1 回の実験の途中で変える変数ではありません。この実験では、曲線の形への影響を見るために、実験と実験の<em>あいだ</em>で変えます。",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "Boiling tube held in a clamp and stand, about 5 g of stearic acid or lauric acid": "スタンドとクランプで固定した大型試験管、ステアリン酸またはラウリン酸約 5 g",

    // Aim, variables and safety > li
    "Thermometer (−10 to 110 °C, 1 °C divisions) or a digital temperature probe and data logger": "温度計（−10〜110 °C、1 °C 目盛り）、またはデジタル温度センサーとデータロガー",

    // Aim, variables and safety > li
    "250 cm<sup>3</sup> beaker as a water bath, a kettle or hotplate to provide hot water, a stopwatch": "水浴にする 250 cm<sup>3</sup> ビーカー、湯をつくる電気ケトルかホットプレート、ストップウォッチ",

    // Aim, variables and safety > li
    "For water: crushed ice in a beaker on a hotplate, a stirring rod, and an ice–salt mixture for the cooling run": "水の場合：ホットプレートにのせたビーカーに入れた砕いた氷、ガラス棒、冷却の実験用の氷と食塩の寒剤",

    // Aim, variables and safety > p
    "Wear eye protection. The water bath and the molten acids are hot enough to scald (up to about 95 °C): hold the boiling tube with a clamp or tongs, and let it cool before you touch it. Heat the acids in a water bath, never directly in a Bunsen flame: they would overheat, give off irritating fumes and could catch fire. Stearic acid and lauric acid irritate the eyes and skin, so avoid contact and wash off any spills. Never try to pull a thermometer out of the solid: it can snap. Re-melt the solid in the water bath first. When boiling water, add anti-bumping granules and keep your face away from the steam. An ice–salt mixture at −20 °C can cause cold burns, so do not hold it in your bare hand.": "保護めがねを着けましょう。水浴と融解した酸は、やけどをするほど熱くなります（約 95 °C まで）。大型試験管はクランプかトングで持ち、冷めるまでさわらないようにします。酸は必ず水浴で加熱し、ガスバーナーの炎で直接加熱してはいけません。熱くなりすぎて刺激性の煙が出たり、火がついたりすることがあります。ステアリン酸とラウリン酸は目や皮膚を刺激するので、ふれないようにし、こぼしたら洗い流しましょう。固まった固体から温度計を引き抜こうとしてはいけません。折れることがあります。まず水浴で固体を融解させましょう。水を沸騰させるときは沸騰石を入れ、湯気に顔を近づけないようにします。−20 °C の氷と食塩の寒剤は凍傷の原因になるので、素手で持たないようにしましょう。",

    // Method > h2
    "Method": "方法",

    // Method > h3
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Heating curve": "加熱曲線",

    // Method > li
    "Put about 5 g of the solid in a dry boiling tube and push the thermometer into it so that the bulb is in the middle of the solid. <em>Why:</em> the bulb must measure the sample, not the air or the glass.": "乾いた大型試験管に固体約 5 g を入れ、温度計の球部が固体の中央にくるように温度計を差しこみます。<em>理由：</em>球部で測るのは試料の温度で、空気やガラスの温度ではないからです。",

    // Method > li
    "Record the starting temperature at time 0.": "時間 0 のときの最初の温度を記録します。",

    // Method > li
    "Clamp the tube in a water bath that is about 10–15 °C above the expected melting point, and start the stopwatch. <em>Why:</em> a bath close to the melting point heats the sample slowly and evenly, so the flat part is long and clear.": "予想される融点より約 10–15 °C 高い水浴に試験管を固定し、ストップウォッチをスタートさせます。<em>理由：</em>融点に近い温度の水浴なら、試料がゆっくり均一に温まるので、平らな部分が長くはっきりします。",

    // Method > li
    "Record the temperature every 30 s, and note what you see (solid, solid and liquid, liquid). <em>Why:</em> the observations tell you which flat part is a change of state.": "30 s ごとに温度を記録し、見えるようす（固体、固体と液体、液体）を書きとめます。<em>理由：</em>観察から、どの平らな部分が状態変化なのかがわかるからです。",

    // Method > li
    "Once the solid has melted, gently stir with the thermometer and keep recording until the temperature has risen by about 10 °C.": "固体が融解したら、温度計で静かにかき混ぜ、温度が約 10 °C 上がるまで記録を続けます。",

    // Method > h3
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Cooling curve": "冷却曲線",

    // Method > li
    "Heat the tube until all the solid has melted and the liquid is about 15 °C above the melting point.": "固体がすべて融解し、液体が融点より約 15 °C 高くなるまで試験管を加熱します。",

    // Method > li
    "Take the tube out of the bath, dry the outside, and clamp it in an empty beaker so that air surrounds it. Start the stopwatch. <em>Why:</em> the air slows the cooling, so the freezing plateau lasts several minutes.": "試験管を水浴から取り出して外側をふき、まわりが空気になるように空のビーカーの中に固定します。ストップウォッチをスタートさせます。<em>理由：</em>空気の中では冷え方がゆっくりになるので、凝固中の平らな部分が数分間続きます。",

    // Method > li
    "Record the temperature every 30 s, stirring gently while the sample is still liquid. Note when the first crystals appear. <em>Why:</em> stirring keeps the temperature even and helps crystals start to form, which reduces supercooling.": "試料がまだ液体のあいだは静かにかき混ぜながら、30 s ごとに温度を記録します。最初の結晶が現れたときを書きとめます。<em>理由：</em>かき混ぜると温度が均一になり、結晶ができはじめやすくなるので、過冷却が小さくなります。",

    // Method > li
    "Stop when the temperature is about 10 °C below the freezing point.": "温度が凝固点より約 10 °C 低くなったら終わりにします。",

    // Method > li
    "Plot temperature (y-axis) against time (x-axis) for each run and draw a smooth curve through the points.": "それぞれの実験について、温度（y 軸）と時間（x 軸）のグラフをかき、点を通るなめらかな曲線を引きます。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > p
    "Choose a substance and an experiment, then press Start. The stopwatch runs faster than real time. Readings are taken at the interval you choose and go into the table and the graph. Every new run gives slightly different results, just as in a real lab.": "物質と実験を選び、「スタート」を押します。ストップウォッチは実際の時間より速く進みます。読みは選んだ間隔でとられ、表とグラフに入ります。実際の実験と同じように、新しく実験するたびに結果は少しずつ違います。",

    // Run the experiment > widget > data-title attribute
    "Heating and cooling rig": "加熱・冷却の実験装置",

    // Run the experiment > widget > figcaption
    "The drawing shows the sample: the hatched part is solid and the plain part is liquid. Use “Find the flat parts” to list each stretch of readings taken while two states were present, with its mean, and any flat stretch at the end where the sample has reached the temperature of its surroundings. The model is simplified: each run has a small random thermometer error and, for the acids, a sample that is not perfectly pure.": "図は試料のようすを表しています。斜線の部分は固体、無地の部分は液体です。「平らな部分を探す」を使うと、2 つの状態があるあいだにとった読みのまとまりが、その平均とともに一覧になります。最後に、試料が周囲の温度に達して平らになった部分があれば、それも示されます。モデルは単純化してあります。どの実験にも温度計の小さな偶然誤差があり、酸の試料は完全には純粋ではありません。",

    // Run the experiment > h3
    "Runs to try": "試してみる実験",

    // Run the experiment > li
    "Stearic acid, heating curve, gentle rate. Find the melting point.": "ステアリン酸、加熱曲線、おだやかな速さ。融点を求めましょう。",

    // Run the experiment > li
    "Stearic acid, cooling curve, slow rate. Is there a dip before the plateau? Compare the freezing point with the melting point.": "ステアリン酸、冷却曲線、ゆっくりした速さ。平らな部分の前にくぼみはありますか。凝固点を融点とくらべましょう。",

    // Run the experiment > li
    "Repeat run 1 at the fast rate. What happens to the length and the flatness of the plateau?": "1 つ目の実験を速い速さでくり返します。平らな部分の長さと平らさはどうなりますか。",

    // Run the experiment > li
    "Water (ice), heating curve. You should see two flat parts. Which is melting and which is boiling?": "水（氷）、加熱曲線。平らな部分が 2 つ見えるはずです。どちらが融解で、どちらが沸騰でしょうか。",

    // Run the experiment > li
    "Change to the digital probe and readings every 15 s. Does the plateau become easier to read?": "デジタル温度センサーに変えて、15 s ごとに読みます。平らな部分は読み取りやすくなりますか。",

    // Run the experiment > key idea > p
    "A flat part is a change of state only if two states are present together. At the end of a heating run the liquid also stops warming once it reaches the temperature of the water bath. That flat part is not a melting point. Your observations column tells the two apart.": "平らな部分が状態変化なのは、2 つの状態がいっしょにあるときだけです。加熱の実験の最後には、液体も水浴の温度に達すると温まらなくなります。その平らな部分は融点ではありません。観察の列を見れば、2 つを見分けられます。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > p
    "To find the melting point (or freezing point), find the flat part of the curve where two states are present. Take the mean of the readings on it. Do not include the readings before the plateau starts or after it ends.": "融点（または凝固点）を求めるには、2 つの状態があるときの曲線の平らな部分を見つけます。そこにある読みの平均をとります。平らな部分が始まる前と終わったあとの読みは含めません。",

    // Processing the data > table > caption
    "Cooling stearic acid in air (readings every 30 s, thermometer ±0.5 °C)": "空気中でのステアリン酸の冷却（30 s ごとに読む、温度計 ±0.5 °C）",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Time / s": "時間 / s",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Temperature / °C": "温度 / °C",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "What you see": "見えるようす",

    // Processing the data > table > td
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "liquid": "液体",

    // Processing the data > table > td
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "crystals forming in liquid": "液体の中に結晶ができている",

    // Processing the data > table > td
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "solid": "固体",

    // Processing the data > worked example > h3
    "The freezing point of stearic acid": "ステアリン酸の凝固点",

    // Processing the data > worked example > p
    "Use the table above. Find the freezing point of the sample in °C and in K. The literature value is 69.3 °C. Calculate the percentage error.": "上の表を使います。試料の凝固点を °C と K で求めなさい。文献値は 69.3 °C です。百分率誤差を計算しなさい。",

    // Processing the data > worked example > data-title attribute
    "Spot the supercooling": "過冷却を見つける",

    // Processing the data > worked example > p
    "The liquid cooled below its freezing point before crystals formed. Then the energy released as crystals formed warmed it back up.": "液体は、結晶ができる前に凝固点より低い温度まで冷えました。そのあと、結晶ができるときに放出されたエネルギーで、温度がまた上がりました。",

    // Processing the data > worked example > maths line
    "dip to 67.5 °C at 150 s, then up to 68.5 °C at 180 s": "150 s で 67.5 °C までくぼみ、そのあと 180 s で 68.5 °C まで上がる",

    // Processing the data > worked example > data-title attribute
    "Choose the plateau readings": "平らな部分の読みを選ぶ",

    // Processing the data > worked example > p
    "The plateau is where liquid and solid are both present, from 180 s to 330 s. The dip at 150 s is not part of it.": "平らな部分は、液体と固体の両方があるところで、180 s から 330 s までです。150 s のくぼみは含めません。",

    // Processing the data > worked example > data-title attribute
    "Take the mean": "平均をとる",

    // Processing the data > worked example > p
    "A mean of several readings reduces the effect of random errors.": "いくつかの読みの平均をとると、偶然誤差の影響が小さくなります。",

    // Processing the data > worked example > maths line
    "mean = (4 × 68.5 + 2 × 68.0) ÷ 6 = 410.0 ÷ 6 = 68.33 °C": "平均 = (4 × 68.5 + 2 × 68.0) ÷ 6 = 410.0 ÷ 6 = 68.33 °C",

    // Processing the data > worked example > data-title attribute
    "Convert to kelvin": "ケルビンに換算する",

    // Processing the data > worked example > p
    "Add 273.15. The kelvin and the degree Celsius are the same size.": "273.15 を足します。ケルビンとセルシウス度の大きさは同じです。",

    // Processing the data > worked example > data-title attribute
    "Percentage error": "百分率誤差",

    // Processing the data > worked example > p
    "Compare with the literature value: |experimental − literature| ÷ literature × 100.": "文献値とくらべます：|実験値 − 文献値| ÷ 文献値 × 100。",

    // Processing the data > worked example > maths line
    "% error = (69.3 − 68.33) ÷ 69.3 × 100 = 1.39 %": "百分率誤差 = (69.3 − 68.33) ÷ 69.3 × 100 = 1.39 %",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "データに合わせて丸める",

    // Processing the data > worked example > p
    "The thermometer reads to ±0.5 °C, so give the temperature to one decimal place.": "温度計は ±0.5 °C まで読めるので、温度は小数第 1 位まで示します。",

    // Processing the data > worked example > maths line
    "freezing point = <b>68.3 °C = 341.5 K</b>; % error = <b>1.4 %</b>": "凝固点 = <b>68.3 °C = 341.5 K</b>、百分率誤差 = <b>1.4 %</b>",

    // Processing the data > worked example > p
    "68.3 °C (341.5 K), 1.4 % below the literature value.": "68.3 °C（341.5 K）。文献値より 1.4 % 低い。",

    // Processing the data > common mistake > p
    "Reading the freezing point from the lowest point of the dip (67.5 °C here) is a common error. The dip is supercooled liquid, which is not a stable state. The freezing point is the temperature of the plateau that follows.": "くぼみの最も低い点（ここでは 67.5 °C）から凝固点を読むのは、よくある間違いです。くぼみは過冷却された液体で、安定な状態ではありません。凝固点は、そのあとに続く平らな部分の温度です。",

    // Processing the data > try it > p
    "A student heats lauric acid in a water bath. The readings on the flat part of the heating curve are 43.0, 43.0, 43.5, 43.5, 43.5 and 44.0 °C. The literature melting point of lauric acid is 43.8 °C. Calculate the percentage error in the student’s melting point.": "ある生徒が、水浴でラウリン酸を加熱します。加熱曲線の平らな部分の読みは 43.0、43.0、43.5、43.5、43.5、44.0 °C です。ラウリン酸の融点の文献値は 43.8 °C です。この生徒の融点の百分率誤差を計算しなさい。",

    // Processing the data > try it > li
    "First find the mean of the six plateau readings.": "まず、平らな部分の 6 つの読みの平均を求めます。",

    // Processing the data > try it > li
    "The mean is 43.42 °C. Now use (43.8 − mean) ÷ 43.8 × 100.": "平均は 43.42 °C です。次に (43.8 − 平均) ÷ 43.8 × 100 を使います。",

    // Processing the data > try it > maths line
    "mean = (2 × 43.0 + 3 × 43.5 + 44.0) ÷ 6 = 260.5 ÷ 6 = 43.42 °C": "平均 = (2 × 43.0 + 3 × 43.5 + 44.0) ÷ 6 = 260.5 ÷ 6 = 43.42 °C",

    // Processing the data > try it > maths line
    "% error = (43.8 − 43.42) ÷ 43.8 × 100 = 0.88 %": "百分率誤差 = (43.8 − 43.42) ÷ 43.8 × 100 = 0.88 %",

    // Processing the data > try it > p
    "About 0.9 %. The experimental value is a little low, which is what a slightly impure sample would give.": "約 0.9 %。実験値は少し低くなっています。これは、試料がわずかに純粋でない場合に予想される結果です。",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > p
    "A glass thermometer with 1 °C divisions can be read to the nearest half division, so each reading is ±0.5 °C. A digital probe that shows one decimal place is ±0.1 °C. The stopwatch is about ±1 s, mostly from your reaction time, which is small compared with a 30 s interval.": "1 °C 目盛りのガラス製温度計は、目盛りの半分まで読めるので、1 回の読みは ±0.5 °C です。小数第 1 位まで表示するデジタル温度センサーは ±0.1 °C です。ストップウォッチは約 ±1 s で、そのほとんどは反応時間によるものです。30 s の間隔にくらべれば小さな値です。",

    // Uncertainties > table > caption
    "Uncertainties for the stearic acid result": "ステアリン酸の結果の不確かさ",

    // Uncertainties > table > th
    "Quantity": "量",

    // Uncertainties > table > th
    "Value": "値",

    // Uncertainties > table > th
    "How the uncertainty is found": "不確かさの求め方",

    // Uncertainties > table > th
    "Freezing point": "凝固点",

    // Uncertainties > table > td
    "the uncertainty of one reading (the readings vary by less than this)": "1 回の読みの不確かさ（読みのばらつきはこれより小さい）",

    // Uncertainties > table > th
    "Percentage uncertainty": "百分率の不確かさ",

    // Uncertainties > table > th
    "In kelvin": "ケルビンで表すと",

    // Uncertainties > table > td
    "adding 273.15 does not change the absolute uncertainty": "273.15 を足しても、絶対不確かさは変わらない",

    // Uncertainties > table > th
    "Depth of supercooling": "過冷却の深さ",

    // Uncertainties > table > td
    "a difference of two readings: add the absolute uncertainties, 0.5 + 0.5": "2 つの読みの差なので、絶対不確かさを足す。0.5 + 0.5",

    // Uncertainties > p
    "Notice two things. In kelvin the percentage uncertainty is much smaller (0.5 ÷ 341.5 × 100 = 0.15 %), because the number is bigger but the absolute uncertainty is the same. And the depth of supercooling, 1.0 ± 1.0 °C, is no bigger than its uncertainty: a single run cannot show it clearly. A probe at ±0.1 °C would.": "2 つのことに注目しましょう。ケルビンで表すと、百分率の不確かさはずっと小さくなります（0.5 ÷ 341.5 × 100 = 0.15 %）。数値は大きくなりますが、絶対不確かさは同じだからです。また、過冷却の深さ 1.0 ± 1.0 °C は、その不確かさより大きくありません。1 回の実験では、過冷却をはっきり示せないのです。±0.1 °C の温度センサーなら示せます。",

    // Uncertainties > p
    "The rules: for a sum or a difference, add the absolute uncertainties. For a product or a quotient, add the percentage uncertainties. This lab only needs the first rule.": "規則は次のとおりです。和や差では、絶対不確かさを足します。積や商では、百分率の不確かさを足します。この実験で必要なのは、1 つ目の規則だけです。",

    // Uncertainties > h3
    "Is the difference from the literature value real?": "文献値との差は本当の差か",

    // Uncertainties > p
    "Compare the percentage error with the percentage uncertainty.": "百分率誤差を百分率の不確かさとくらべます。",

    // Uncertainties > li
    "<strong>Stearic acid:</strong> percentage error 1.4 % is larger than the percentage uncertainty 0.7 %. The difference cannot be explained by reading the thermometer alone. There must be a systematic error, such as an impure sample or a thermometer that reads low.": "<strong>ステアリン酸：</strong>百分率誤差 1.4 % は、百分率の不確かさ 0.7 % より大きくなっています。この差は、温度計の読みだけでは説明できません。試料が純粋でない、温度計が低めに表示する、といった系統誤差があるはずです。",

    // Uncertainties > li
    "<strong>Lauric acid (Try it):</strong> percentage error 0.9 % is smaller than the percentage uncertainty (0.5 ÷ 43.4 × 100 = 1.2 %). The result agrees with the literature value within the uncertainty of the measurement.": "<strong>ラウリン酸（やってみよう）：</strong>百分率誤差 0.9 % は、百分率の不確かさ（0.5 ÷ 43.4 × 100 = 1.2 %）より小さくなっています。この結果は、測定の不確かさの範囲で文献値と一致しています。",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Give an absolute uncertainty to one significant figure, and quote the value to the same decimal place: 68.3 ± 0.5 °C, not 68.33 ± 0.5 °C. When asked whether random error explains a result, compare the percentage error with the percentage uncertainty, and say which is larger.": "絶対不確かさは有効数字 1 桁で示し、値も同じ小数の位まで示します。68.33 ± 0.5 °C ではなく、68.3 ± 0.5 °C です。偶然誤差で結果を説明できるかを問われたら、百分率誤差を百分率の不確かさとくらべ、どちらが大きいかを述べましょう。",

    // Evaluation: errors and improvements > data-toc attribute
    // Evaluation: errors and improvements > table > caption
    "Errors and improvements": "誤差と改善",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "<dfn data-def=\"Errors that scatter readings unpredictably above and below the true value. Repeating and averaging reduces their effect.\">Random errors</dfn> scatter readings both ways, so repeating and taking a mean reduces them. <dfn data-def=\"Errors that shift every reading in the same direction, for example a thermometer that always reads 0.5 °C low. Repeating does not reduce them.\">Systematic errors</dfn> push every reading the same way, so repeats do not help. You must change the method or the apparatus.": "<dfn data-def=\"読みを、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。\">偶然誤差 <span class=\"en-term\">(random errors)</span></dfn>は、読みを両方向にばらつかせるので、くり返して平均をとると小さくなります。<dfn data-def=\"すべての読みを同じ向きにずらす誤差。たとえば、いつも 0.5 °C 低く表示する温度計。くり返しても小さくならない。\">系統誤差 <span class=\"en-term\">(systematic errors)</span></dfn>は、すべての読みを同じ向きにずらすので、くり返しても役に立ちません。方法か器具を変える必要があります。",

    // Evaluation: errors and improvements > data-def attribute
    "Errors that scatter readings unpredictably above and below the true value. Repeating and averaging reduces their effect.": "読みを、真の値の上下に予測できない形でばらつかせる誤差。くり返して平均をとると、その影響が小さくなる。",

    // Evaluation: errors and improvements > data-def attribute
    "Errors that shift every reading in the same direction, for example a thermometer that always reads 0.5 °C low. Repeating does not reduce them.": "すべての読みを同じ向きにずらす誤差。たとえば、いつも 0.5 °C 低く表示する温度計。くり返しても小さくならない。",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Type and effect on the result": "誤差の種類と結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > td
    "Impurities in the sample (school-grade stearic acid contains other fatty acids)": "試料中の不純物（学校用のステアリン酸には、ほかの脂肪酸が含まれている）",

    // Evaluation: errors and improvements > table > td
    "Systematic. The melting point is lower than the literature value and the plateau slopes, because an impure solid melts over a range.": "系統誤差。純粋でない固体はある範囲で融解するので、融点が文献値より低くなり、平らな部分が傾く。",

    // Evaluation: errors and improvements > table > td
    "Use a purer sample, or recrystallize it first. Report a melting range.": "より純粋な試料を使うか、先に再結晶する。融点範囲で報告する。",

    // Evaluation: errors and improvements > table > td
    "Thermometer calibration offset": "温度計の校正のずれ",

    // Evaluation: errors and improvements > table > td
    "Systematic. Every reading is shifted by the same amount, so the melting point is too high or too low.": "系統誤差。すべての読みが同じだけずれるので、融点が高すぎたり低すぎたりする。",

    // Evaluation: errors and improvements > table > td
    "Check the thermometer in a mixture of ice and pure water (0 °C) and correct the readings.": "氷と純粋な水の混合物（0 °C）で温度計を確かめ、読みを補正する。",

    // Evaluation: errors and improvements > table > td
    "Heating or cooling too fast": "加熱や冷却が速すぎる",

    // Evaluation: errors and improvements > table > td
    "The outside of the sample changes state before the middle, so the plateau is short and sloped. The mean is harder to judge.": "試料の外側が中央より先に状態変化するので、平らな部分が短く傾く。平均を判断しにくくなる。",

    // Evaluation: errors and improvements > table > td
    "Use a water bath only 10–15 °C above the melting point; cool in air, not in cold water; stir the bath.": "融点より 10–15 °C だけ高い水浴を使う。冷水ではなく空気中で冷やす。水浴をかき混ぜる。",

    // Evaluation: errors and improvements > table > td
    "Thermometer bulb not fully in the sample, or touching the glass": "温度計の球部が試料に完全に入っていない、またはガラスにふれている",

    // Evaluation: errors and improvements > table > td
    "Systematic. The reading follows the bath or the air, not the sample, so the plateau is unclear.": "系統誤差。読みが試料ではなく水浴や空気の温度に引きずられるので、平らな部分がはっきりしない。",

    // Evaluation: errors and improvements > table > td
    "Place the bulb in the middle of the sample and clamp the thermometer in place.": "球部を試料の中央に置き、温度計をクランプで固定する。",

    // Evaluation: errors and improvements > table > td
    "Supercooling on the cooling curve": "冷却曲線での過冷却",

    // Evaluation: errors and improvements > table > td
    "A dip below the freezing point. If the lowest reading is used, the freezing point is too low.": "凝固点より低いくぼみができる。最も低い読みを使うと、凝固点が低くなりすぎる。",

    // Evaluation: errors and improvements > table > td
    "Stir gently or add a seed crystal; read the plateau after the dip.": "静かにかき混ぜるか、種結晶を加える。くぼみのあとの平らな部分を読む。",

    // Evaluation: errors and improvements > table > td
    "Reading the scale (parallax, judging half divisions)": "目盛りの読み取り（視差、目盛りの半分の判断）",

    // Evaluation: errors and improvements > table > td
    "Random. Readings scatter by about ±0.5 °C.": "偶然誤差。読みが約 ±0.5 °C ばらつく。",

    // Evaluation: errors and improvements > table > td
    "Read at eye level, take the mean of several plateau readings, or use a digital probe (±0.1 °C).": "目の高さで読む。平らな部分の読みをいくつかとって平均する。またはデジタル温度センサー（±0.1 °C）を使う。",

    // Evaluation: errors and improvements > table > td
    "Readings too far apart (60 s)": "読みの間隔が長すぎる（60 s）",

    // Evaluation: errors and improvements > table > td
    "Few points on the plateau; the start and end of the plateau and any dip can be missed.": "平らな部分の点が少ない。平らな部分の始まりと終わりや、くぼみを見逃すことがある。",

    // Evaluation: errors and improvements > table > td
    "Take readings every 15 s, or use a data logger.": "15 s ごとに読むか、データロガーを使う。",

    // Evaluation: errors and improvements > common mistake > p
    "“Human error” or “use more accurate equipment” earns no marks. Name the error, say which way it moves the result, and give an improvement that fixes that error.": "「人為的な誤差（human error）」や「もっと正確な器具を使う」では点になりません。誤差の名前を挙げ、それが結果をどちらの向きに動かすかを述べ、その誤差を解決する改善策を示しましょう。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "These questions are in the style of Paper 1B: they are built on the experiment you have just done. Work on paper first, then check.": "これらは Paper 1B 形式の問題で、いま行った実験をもとにしています。まず紙の上で解いてから、答え合わせをしましょう。",

    // Exam practice > data-title attribute
    "Lab 3 exam practice": "実験 3 試験対策の問題",

    // Exam practice > not needed for IB > p
    "You do not need to calculate the energy needed for each part of the curve, and you do not need specific or latent heat values. Energy calculations come in Reactivity 1.1. Phase diagrams are not in the course.": "曲線のそれぞれの部分に必要なエネルギーを計算する必要はありません。比熱や潜熱の値も必要ありません。エネルギーの計算は Reactivity 1.1 で学びます。状態図は範囲外です。",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Stearic acid": "ステアリン酸",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle: water bath at about 80 °C": "おだやか：約 80 °C の水浴",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: water bath at about 95 °C": "速い：約 95 °C の水浴",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Slow: tube in an empty beaker (air)": "ゆっくり：空のビーカーの中（空気）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: tube in a beaker of cold water": "速い：冷水を入れたビーカーの中",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Lauric acid": "ラウリン酸",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle: water bath at about 55 °C": "おだやか：約 55 °C の水浴",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: water bath at about 70 °C": "速い：約 70 °C の水浴",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Water (ice)": "水（氷）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle: hotplate on a low setting": "おだやか：ホットプレートの設定が低",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: hotplate on a high setting": "速い：ホットプレートの設定が高",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Slow: ice–salt bath at about −10 °C": "ゆっくり：約 −10 °C の寒剤（氷と食塩）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: ice–salt bath at about −20 °C": "速い：約 −20 °C の寒剤（氷と食塩）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Substance": "物質",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Experiment": "実験",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Rate": "速さ",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle": "おだやか",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Thermometer": "温度計",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Glass, 1 °C divisions (±0.5 °C)": "ガラス製、1 °C 目盛り（±0.5 °C）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Digital probe (±0.1 °C)": "デジタル温度センサー（±0.1 °C）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Reading every": "読みの間隔",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "15 s": "15 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "30 s": "30 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "60 s": "60 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Clock speed": "時計の速さ",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "10 × real time": "実際の 10 倍",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "30 × real time": "実際の 30 倍",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "60 × real time": "実際の 60 倍",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Start": "スタート",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Run to the end": "最後まで進める",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "New run": "新しい実験",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Find the flat parts": "平らな部分を探す",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Time": "時間",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Readings": "読み",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Flat parts": "平らな部分",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Apparatus: a boiling tube of the sample with a thermometer, in a water bath or on a hotplate. The drawing shows how much of the sample is solid and how much is liquid.": "装置：温度計を入れた試料入りの大型試験管が、水浴の中かホットプレートの上にある。図には、試料のうちどれだけが固体で、どれだけが液体かが示されている。",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Run finished": "実験終了",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Pause": "一時停止",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Continue": "続ける",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "water": "水",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice forming in water": "水の中に氷ができている",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice": "氷",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice and water": "氷と水",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "solid and liquid": "固体と液体",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "water, boiling": "水、沸騰中",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "{s} s": "{s} s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "{T} °C": "{T} °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Press “Find the flat parts” when you have enough readings.": "読みが十分にたまったら「平らな部分を探す」を押しましょう。",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "No readings yet. Press Start.": "まだ読みがありません。「スタート」を押しましょう。",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "No flat part yet: no two readings in a row were taken while two states were present.": "まだ平らな部分はありません。2 つの状態があるあいだに、続けてとった読みが 2 つ以上ありません。",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "boiling seen": "沸騰を観察",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "change of state seen": "状態変化を観察",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "one state only: the sample has reached the temperature of its surroundings": "1 つの状態だけ：試料が周囲の温度に達した",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "{a}–{b} s: mean {m} °C (readings {lo} to {hi} °C), {what}": "{a}–{b} s：平均 {m} °C（読みは {lo}〜{hi} °C）、{what}",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Hide the flat parts": "平らな部分を隠す",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Raw data: {name}, {mode}": "生データ：{name}、{mode}",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "heating": "加熱",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "cooling": "冷却",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "±1 s": "±1 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "±0.5 °C": "±0.5 °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "±0.1 °C": "±0.1 °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "No readings yet.": "まだ読みがありません。",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "readings": "読み",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "mean {m} °C": "平均 {m} °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "lit. m.p.": "融点(文献値)",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "lit. b.p.": "沸点(文献値)",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Graph of temperature against time for the readings in the table": "表の読みから作った、温度と時間のグラフ",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "hotplate": "ホットプレート",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "boiling water": "沸騰している水",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "water bath": "水浴",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice–salt bath": "寒剤（氷と食塩）",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "cold water": "冷水",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "air": "空気",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "around the tube: {what}": "試験管のまわり：{what}",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "stopwatch": "ストップウォッチ",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "thermometer": "温度計",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "sample": "試料",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "air pressure {p} kPa": "気圧 {p} kPa",

  }
});
