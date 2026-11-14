/* lab-gas-laws.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-gas-laws.q', {
  questions: {

    // ── lab-gas-laws-q001 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q001": {
      // EN: <p>A student measures the pressure, <i>P</i>, of a fixed amount of air in a gas syringe at different volumes, <i>V</i>, at constant temperature. Which graph of the results is a straight line through the origin?</p>
      stem: "<p>ある生徒が、温度一定のもとで、気体用シリンジに入れた一定量の空気の圧力 <i>P</i> を、いろいろな体積 <i>V</i> で測定します。結果のグラフのうち、原点を通る直線になるのはどれですか。</p>",
      options: [
        // EN: <i>P</i> against <i>V</i>
        "<i>V</i> に対する <i>P</i>",
        // EN: <i>P</i> against 1/<i>V</i>
        "1/<i>V</i> に対する <i>P</i>",
        // EN: <i>PV</i> against <i>P</i>
        "<i>P</i> に対する <i>PV</i>",
        // EN: <i>P</i> against <i>V</i><sup>2</sup>
        "<i>V</i><sup>2</sup> に対する <i>P</i>",
      ],
      hints: [
        // EN: If <i>P</i> is inversely proportional to <i>V</i>, then <i>P</i> = <i>k</i> × (something). What is the something?
        "<i>P</i> が <i>V</i> に反比例するなら、<i>P</i> = <i>k</i> ×（何か）です。その「何か」は何でしょうか。",
      ],
      // EN: <p>At constant temperature <i>PV</i> = <i>k</i>, so <i>P</i> = <i>k</i> × (1/<i>V</i>). A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin with gradient <i>k</i>.</p>
      solution: "<p>温度一定では <i>PV</i> = <i>k</i> なので、<i>P</i> = <i>k</i> × (1/<i>V</i>) です。1/<i>V</i> に対する <i>P</i> のグラフは、原点を通る傾き <i>k</i> の直線になります。</p>",
      misconception: {
        // EN (option A): Pressure falls as volume rises, so this graph is a curve with a negative slope, not a straight line through the origin.
        "0": "体積が増えると圧力は下がるので、このグラフは傾きが負の曲線になり、原点を通る直線にはなりません。",
        // EN (option C): <i>PV</i> is constant, so this graph is a horizontal straight line. It does not pass through the origin.
        "2": "<i>PV</i> は一定なので、このグラフは水平な直線になります。原点は通りません。",
        // EN (option D): There is no square in the relationship. Pressure is inversely proportional to volume itself.
        "3": "この関係に 2 乗はありません。圧力は体積そのものに反比例します。",
      },
    },

    // ── lab-gas-laws-q002 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q002": {
      // EN: <p>A sealed gas syringe is held in a water bath. The graph of the volume of the gas against temperature in °C is a straight line. The line of best fit passes through (20.0 °C, 61.2 <span class="unit">cm3</span>) and (80.0 °C, 73.8 <span class="unit">cm3</span>).</p><p>Estimate absolute zero from these data, in °C.</p>
      stem: "<p>密閉した気体用シリンジを水浴に入れておきます。気体の体積を °C で表した温度に対してプロットしたグラフは直線です。最もよく合う直線は (20.0 °C, 61.2 <span class=\"unit\">cm3</span>) と (80.0 °C, 73.8 <span class=\"unit\">cm3</span>) を通ります。</p><p>これらのデータから、絶対零度を °C で見積もりなさい (estimate)。</p>",
      hints: [
        // EN: Find the gradient of the line first.
        "まず直線の傾きを求めましょう。",
        // EN: From (20.0 °C, 61.2 cm³), how far must the temperature fall for the volume to fall by 61.2 cm³?
        "(20.0 °C, 61.2 cm³) から、体積が 61.2 cm³ 減るには、温度がどれだけ下がればよいでしょうか。",
      ],
      // EN: <div class="worked__math">gradient = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class="worked__math">fall in temperature for <i>V</i> = 0: 61.2 ÷ 0.210 = 291.4 °C</div><div class="worked__math">θ = 20.0 − 291.4 = −271 °C</div><p>M1 for the gradient, M2 for the answer. Accept answers from −270 °C to −273 °C.</p>
      solution: "<div class=\"worked__math\">傾き = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class=\"worked__math\"><i>V</i> = 0 になるまでの温度の低下：61.2 ÷ 0.210 = 291.4 °C</div><div class=\"worked__math\">θ = 20.0 − 291.4 = −271 °C</div><p>傾きで M1、答えで M2。−270 °C〜−273 °C の答えを認める。</p>",
    },

    // ── lab-gas-laws-q003 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q003": {
      // EN: <p>A flask of air in a water bath is joined to a pressure sensor by a long plastic tube. The air in the tube stays at room temperature while the bath is heated from 0 °C to 90 °C. How does this affect the estimate of absolute zero found by extrapolating the graph of pressure against temperature in °C?</p>
      stem: "<p>水浴に入れた空気のフラスコが、長いプラスチックの管で圧力センサーにつながっています。水浴を 0 °C から 90 °C まで加熱する間、管の中の空気は室温のままです。このことは、圧力を °C で表した温度に対してプロットしたグラフを外挿して求める絶対零度の見積もりに、どう影響しますか。</p>",
      options: [
        // EN: The estimate is lower (more negative) than the true value.
        "見積もりは真の値より低く（より負に）なる。",
        // EN: The estimate is higher (less negative) than the true value.
        "見積もりは真の値より高く（負の度合いが小さく）なる。",
        // EN: There is no effect, because the amount of gas is constant.
        "影響はない。気体の量は一定だから。",
        // EN: There is no effect, because only the gradient changes.
        "影響はない。変わるのは傾きだけだから。",
      ],
      hints: [
        // EN: Does the pressure rise by more or by less than it would if all the air were heated?
        "圧力の上がり方は、空気をすべて加熱した場合より大きいでしょうか、小さいでしょうか。",
        // EN: A shallower line through the same starting point meets the temperature axis where?
        "同じ出発点を通る、傾きのゆるい直線は、温度の軸とどこで交わるでしょうか。",
      ],
      // EN: <p>Some of the gas is not heated, so the pressure rises by less than expected. The gradient of the line is too small. Extended backwards from the same point, a shallower line meets the temperature axis further from 0 °C, so the estimate is more negative than −273 °C.</p>
      solution: "<p>気体の一部が加熱されないので、圧力の上がり方が予想より小さくなります。直線の傾きが小さすぎます。同じ点から左へ延ばすと、傾きのゆるい直線は 0 °C からより遠いところで温度の軸と交わるので、見積もりは −273 °C より負に大きくなります。</p>",
      misconception: {
        // EN (option B): Think about the gradient. Part of the gas is not heated, so the pressure rises less than it should. A shallower line meets the temperature axis further to the left.
        "1": "傾きを考えましょう。気体の一部が加熱されないので、圧力は本来ほど上がりません。傾きのゆるい直線は、温度の軸と、より左で交わります。",
        // EN (option C): The amount is constant, but not all of the gas is at the bath temperature. That changes how much the pressure rises.
        "2": "量は一定ですが、気体のすべてが水浴の温度になっているわけではありません。それによって、圧力の上がり方が変わります。",
        // EN (option D): The estimate of absolute zero comes from the gradient and the intercept together. A smaller gradient moves the point where the line meets the axis.
        "3": "絶対零度の見積もりは、傾きと切片の両方から決まります。傾きが小さくなると、直線が軸と交わる点が動きます。",
      },
    },

    // ── lab-gas-laws-q004 · short · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q004": {
      // EN: <p>In the fixed-volume experiment, the student is told to stir the water and wait until the pressure reading is steady before each reading. Explain why, and state how the readings would be affected if the student did not wait while heating the bath.</p>
      stem: "<p>体積一定の実験で、生徒は、読みをとる前に毎回、水をかき混ぜて圧力の読みが安定するまで待つように言われています。その理由を説明しなさい (explain)。また、水浴を加熱している間に待たなかった場合、読みにどんな影響があるかを述べなさい (state)。</p>",
      hints: [
        // EN: Which is measured by the thermometer: the gas or the water?
        "温度計がはかっているのは、気体でしょうか、水でしょうか。",
      ],
      // EN: <p>The gas inside the flask takes time to reach the temperature of the water, because heat must pass through the glass. If the student reads at once while heating, the gas is cooler than the thermometer reading, so the pressure recorded is too low for the temperature recorded.</p>
      answer: "<p>熱はガラスを通って伝わらなければならないので、フラスコの中の気体が水の温度になるには時間がかかります。加熱中にすぐ読むと、気体は温度計の読みより冷たいので、記録した圧力は、記録した温度に対して低すぎます。</p>",
      markscheme: [
        // EN: The gas (inside the flask) takes time to reach the temperature of the water / thermal equilibrium must be reached.
        "（フラスコの中の）気体が水の温度になるには時間がかかる / 熱平衡に達しなければならない。",
        // EN: Without waiting, the gas is cooler than the recorded temperature, so the pressure is too low (for each recorded temperature).
        "待たないと、気体は記録した温度より冷たいので、（記録したそれぞれの温度に対して）圧力が低すぎる。",
      ],
    },

    // ── lab-gas-laws-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q005": {
      // EN: <p>A student’s estimate of absolute zero is −259 °C. Calculate the percentage error, using −273 °C as the literature value.</p>
      stem: "<p>ある生徒の絶対零度の見積もりは −259 °C です。文献値を −273 °C として、百分率誤差を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Percentage error = |experimental value − literature value| ÷ |literature value| × 100.
        "百分率誤差 = |実験値 − 文献値| ÷ |文献値| × 100。",
      ],
      // EN: <div class="worked__math">percentage error = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>
      solution: "<div class=\"worked__math\">百分率誤差 = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>",
    },

    // ── lab-gas-laws-q006 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "lab-gas-laws-q006": {
      // EN: <p>A gas syringe contains 60.0 <span class="unit">cm3</span> of air at 101.2 kPa. The plunger is pushed in slowly to 40.0 <span class="unit">cm3</span>. The temperature does not change and no gas escapes. Calculate the new pressure, in kPa.</p>
      stem: "<p>気体用シリンジに、101.2 kPa で 60.0 <span class=\"unit\">cm3</span> の空気が入っています。ピストンをゆっくり 40.0 <span class=\"unit\">cm3</span> まで押しこみます。温度は変わらず、気体はもれません。新しい圧力を kPa で計算しなさい (calculate)。</p>",
      hints: [
        // EN: At constant temperature and amount, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>. The volume units cancel, so you do not need to convert them.
        "温度と量が一定なら、<i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> です。体積の単位は打ち消し合うので、換算する必要はありません。",
      ],
      // EN: <div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>The volume falls to two-thirds, so the pressure rises by a factor of 1.5.</p>
      solution: "<div class=\"worked__math\"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>体積が 3 分の 2 になるので、圧力は 1.5 倍になります。</p>",
    },

    // ── lab-gas-laws-q007 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q007": {
      // EN: <p>In an experiment to find how the pressure of a gas depends on its volume, which variables must be controlled?</p>
      stem: "<p>気体の圧力が体積によってどう変わるかを調べる実験で、制御しなければならない変数はどれですか。</p>",
      options: [
        // EN: The temperature and the amount of gas
        "温度と気体の量",
        // EN: The pressure and the temperature
        "圧力と温度",
        // EN: The volume and the amount of gas
        "体積と気体の量",
        // EN: The temperature only
        "温度だけ",
      ],
      hints: [
        // EN: <i>PV</i> = <i>nRT</i>. Which quantities are not <i>P</i> or <i>V</i>?
        "<i>PV</i> = <i>nRT</i>。<i>P</i> でも <i>V</i> でもない量はどれでしょうか。",
      ],
      // EN: <p><i>V</i> is the independent variable and <i>P</i> the dependent variable. In <i>PV</i> = <i>nRT</i>, the other two quantities, <i>n</i> and <i>T</i>, must be kept constant (<i>R</i> is a constant anyway). So the syringe must not leak and the temperature must not change.</p>
      solution: "<p><i>V</i> が独立変数で、<i>P</i> が従属変数です。<i>PV</i> = <i>nRT</i> のほかの 2 つの量、<i>n</i> と <i>T</i> は一定に保たなければなりません（<i>R</i> はもともと定数です）。したがって、シリンジから気体がもれてはならず、温度も変わってはいけません。</p>",
      misconception: {
        // EN (option B): Pressure is the dependent variable here. It is what you measure, so it cannot be kept constant.
        "1": "ここでは圧力が従属変数です。測定するものなので、一定に保つことはできません。",
        // EN (option C): Volume is the independent variable. It is what you change on purpose.
        "2": "体積は独立変数です。わざと変えるものです。",
        // EN (option D): If gas leaks out, the pressure falls for a reason that has nothing to do with the volume. The amount of gas must be kept constant too.
        "3": "気体がもれると、体積とは関係のない理由で圧力が下がります。気体の量も一定に保たなければなりません。",
      },
    },

    // ── lab-gas-laws-q008 · short · challenge · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q008": {
      // EN: <p>In a pressure–volume experiment at constant room temperature, a student calculates <i>PV</i> for each reading. <i>PV</i> falls steadily from 5080 kPa <span class="unit">cm3</span> at 100 <span class="unit">cm3</span> to 4990 kPa <span class="unit">cm3</span> at 30 <span class="unit">cm3</span>. Suggest <strong>two</strong> reasons for this trend.</p>
      stem: "<p>室温一定で行う圧力と体積の実験で、ある生徒がそれぞれの読みについて <i>PV</i> を計算します。<i>PV</i> は、100 <span class=\"unit\">cm3</span> での 5080 kPa <span class=\"unit\">cm3</span> から、30 <span class=\"unit\">cm3</span> での 4990 kPa <span class=\"unit\">cm3</span> まで、少しずつ小さくなっています。この傾向の理由を <strong>2 つ</strong>挙げなさい (suggest)。</p>",
      hints: [
        // EN: <i>PV</i> = <i>nRT</i>. Which of <i>n</i> or <i>T</i> could have changed?
        "<i>PV</i> = <i>nRT</i>。<i>n</i> と <i>T</i> のどちらが変わった可能性があるでしょうか。",
        // EN: Is all of the trapped gas inside the syringe barrel?
        "閉じこめた気体は、すべてシリンジの筒の中にあるでしょうか。",
      ],
      // EN: <p>Gas may leak out at the joints when it is compressed to a high pressure, so the amount of gas falls. Also, the gas in the tube to the sensor is not included in the syringe reading; its volume is a bigger fraction of the total at small volumes, so the measured <i>V</i> is too small by a larger percentage and <i>PV</i> appears to fall.</p>
      answer: "<p>高い圧力まで圧縮すると、つなぎ目から気体がもれ、気体の量が減るのかもしれません。また、センサーまでの管の中の気体は、シリンジの読みに含まれていません。体積が小さいほど、その体積が全体に占める割合が大きくなるので、測定した <i>V</i> が小さすぎる割合が大きくなり、<i>PV</i> が小さくなるように見えます。</p>",
      markscheme: [
        // EN: Gas leaks (out of the syringe or joints) at higher pressure, so the amount of gas decreases.
        "圧力が高いと、気体が（シリンジやつなぎ目から）もれるので、気体の量が減る。",
        // EN: The volume of gas in the connecting tube (or sensor) is not included in <i>V</i>, and it is a larger fraction of the total at small syringe volumes.
        "つないだ管（またはセンサー）の中の気体の体積が <i>V</i> に含まれておらず、シリンジの体積が小さいほど、それが全体に占める割合が大きくなる。",
        // EN: Accept: the temperature of the room fell during the experiment (readings at small volumes taken later).
        "認める：実験中に室温が下がった（体積の小さい読みをあとでとった）。",
      ],
    },

    // ── lab-gas-laws-q009 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q009": {
      // EN: <p>A thermometer has an uncertainty of ±0.5 °C. A water bath is heated from 20.0 °C to 80.0 °C. Calculate the percentage uncertainty in the temperature change.</p>
      stem: "<p>温度計の不確かさは ±0.5 °C です。水浴を 20.0 °C から 80.0 °C まで加熱します。温度変化の百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: The temperature change uses two readings. For a difference, add the absolute uncertainties.
        "温度変化は 2 回の読みを使います。差では、絶対不確かさを足します。",
      ],
      // EN: <div class="worked__math">Δθ = 80.0 − 20.0 = 60.0 °C, uncertainty = ±(0.5 + 0.5) = ±1.0 °C</div><div class="worked__math">percentage uncertainty = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>M1 for ±1.0 °C, M2 for 1.7 %.</p>
      solution: "<div class=\"worked__math\">Δθ = 80.0 − 20.0 = 60.0 °C、不確かさ = ±(0.5 + 0.5) = ±1.0 °C</div><div class=\"worked__math\">百分率の不確かさ = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>±1.0 °C で M1、1.7 % で M2。</p>",
    },

    // ── lab-gas-laws-q010 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "lab-gas-laws-q010": {
      // EN: <p>A sealed flask of air is heated at constant volume. Which statement explains why the pressure increases?</p>
      stem: "<p>空気を密閉したフラスコを、体積一定で加熱します。圧力が大きくなる理由を説明している文はどれですか。</p>",
      options: [
        // EN: The particles expand, so they hit the walls more often.
        "粒子が膨張するので、壁にぶつかる回数が増える。",
        // EN: The particles move faster, so they hit the walls more often and with more force.
        "粒子が速く動くので、壁にぶつかる回数が増え、ぶつかる力も大きくなる。",
        // EN: More particles are produced as the gas is heated.
        "気体を加熱すると、粒子が多くできる。",
        // EN: The intermolecular forces between the particles become weaker.
        "粒子の間の分子間力が弱くなる。",
      ],
      hints: [
        // EN: What happens to the kinetic energy of the particles when the temperature rises?
        "温度が上がると、粒子の運動エネルギーはどうなるでしょうか。",
      ],
      // EN: <p>At a higher temperature the particles have more kinetic energy and move faster. In the same volume they collide with the walls more frequently and with greater force, so the pressure is higher.</p>
      solution: "<p>温度が高いほど、粒子の運動エネルギーは大きく、速く動きます。同じ体積の中では、粒子が壁にぶつかる回数が増え、ぶつかる力も大きくなるので、圧力が高くなります。</p>",
      misconception: {
        // EN (option A): Particles do not get bigger when heated. In the ideal gas model their volume is negligible anyway.
        "0": "粒子は加熱されても大きくなりません。それに、理想気体モデルでは粒子の体積は無視できるほど小さいとします。",
        // EN (option C): The flask is sealed. The number of particles stays the same.
        "2": "フラスコは密閉されています。粒子の数は変わりません。",
        // EN (option D): The ideal gas model assumes there are no intermolecular forces at all. The rise in pressure comes from faster particles.
        "3": "理想気体モデルでは、分子間力はまったくないと仮定します。圧力が上がるのは、粒子が速くなるからです。",
      },
    },

    // ── lab-gas-laws-q011 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q011": {
      // EN: <p>The volume of a fixed amount of gas at constant pressure is measured at several temperatures. Graph I shows volume against temperature in K. Graph II shows the same data against temperature in °C. Which statement is correct?</p>
      stem: "<p>圧力一定で、一定量の気体の体積をいくつかの温度で測定します。グラフ I は、体積を K で表した温度に対してプロットしたものです。グラフ II は、同じデータを °C で表した温度に対してプロットしたものです。正しい文はどれですか。</p>",
      options: [
        // EN: Both graphs are straight lines through the origin.
        "どちらのグラフも原点を通る直線である。",
        // EN: Graph I passes through the origin. Graph II meets the temperature axis at about −273 °C.
        "グラフ I は原点を通る。グラフ II は約 −273 °C で温度の軸と交わる。",
        // EN: Graph II passes through the origin. Graph I meets the temperature axis at about 273 K.
        "グラフ II は原点を通る。グラフ I は約 273 K で温度の軸と交わる。",
        // EN: Graph I is steeper than graph II.
        "グラフ I はグラフ II より傾きが急である。",
      ],
      hints: [
        // EN: At what temperature would an ideal gas have zero volume? Write it in both units.
        "理想気体の体積がゼロになるのは何度でしょうか。両方の単位で書いてみましょう。",
      ],
      // EN: <p>Volume is proportional to the absolute temperature, so graph I is a straight line through the origin (0 K). Graph II is the same line moved along by 273, so it meets the axis at about −273 °C. The gradients are the same, because a kelvin and a degree Celsius are the same size.</p>
      solution: "<p>体積は絶対温度に比例するので、グラフ I は原点（0 K）を通る直線です。グラフ II は同じ直線を 273 だけ横にずらしたものなので、約 −273 °C で軸と交わります。1 K と 1 °C の大きさは同じなので、傾きは同じです。</p>",
      misconception: {
        // EN (option A): At 0 °C a gas still has a volume. So the line in °C cannot pass through the origin.
        "0": "0 °C でも、気体には体積があります。だから、°C の直線は原点を通りません。",
        // EN (option C): It is the other way round. Zero volume is reached at 0 K, which is −273 °C.
        "2": "逆です。体積がゼロになるのは 0 K、つまり −273 °C です。",
        // EN (option D): A change of 1 K is the same size as a change of 1 °C. The two lines have the same gradient; one is just shifted along the axis.
        "3": "1 K の変化と 1 °C の変化は同じ大きさです。2 本の直線の傾きは同じで、一方が軸にそってずれているだけです。",
      },
    },

    // ── lab-gas-laws-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "lab-gas-laws-q012": {
      // EN: <p>A sealed flask of air reads 100.4 kPa at 20.0 °C. Assuming the volume and amount of gas are constant, calculate the pressure expected at 90.0 °C, in kPa.</p>
      stem: "<p>空気を密閉したフラスコの読みは、20.0 °C で 100.4 kPa です。気体の体積と量は一定だとして、90.0 °C で予想される圧力を kPa で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Pressure is proportional to the absolute temperature. Convert both temperatures to kelvin first.
        "圧力は絶対温度に比例します。まず、両方の温度をケルビンに直しましょう。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K; <i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>Using °C (100.4 × 90.0 ÷ 20.0 = 452 kPa) is the classic mistake. M1 for kelvin temperatures.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K；<i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class=\"worked__math\"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>°C を使う（100.4 × 90.0 ÷ 20.0 = 452 kPa）のは典型的な間違いです。ケルビンの温度で M1。</p>",
    },

    // ── lab-gas-laws-q013 · order · foundation · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q013": {
      // EN: <p>Put these steps of the fixed-volume experiment in a sensible order.</p>
      stem: "<p>体積一定の実験の次のステップを、適切な順に並べなさい。</p>",
      options: [
        // EN: Clamp a dry flask in a beaker of ice and water and join it to a pressure sensor.
        "乾いたフラスコを氷水の入ったビーカーにクランプで固定し、圧力センサーにつなぐ。",
        // EN: Stir, wait until the readings are steady, and record the temperature and the pressure.
        "かき混ぜて読みが安定するまで待ち、温度と圧力を記録する。",
        // EN: Raise the temperature of the bath by about 10 °C.
        "水浴の温度を約 10 °C 上げる。",
        // EN: Repeat the readings up to about 90 °C.
        "約 90 °C まで、読みをくり返しとる。",
        // EN: Plot pressure against temperature in °C and extrapolate the line of best fit to zero pressure.
        "圧力を °C で表した温度に対してプロットし、最もよく合う直線を圧力ゼロまで外挿する。",
      ],
      hints: [
        // EN: You must be able to take the first reading before you change anything.
        "何かを変える前に、最初の読みをとれるようにしておかなければなりません。",
      ],
      // EN: <p>Set up the flask at the lowest temperature, take a steady reading, raise the temperature, and repeat across the range. Only then plot the graph and extrapolate it.</p>
      solution: "<p>フラスコを最も低い温度で準備し、安定した読みをとり、温度を上げ、範囲全体でくり返します。そのあとで初めて、グラフをかいて外挿します。</p>",
    },

    // ── lab-gas-laws-q014 · mcq · challenge · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q014": {
      // EN: <p>A student’s line of best fit meets the temperature axis at −270 °C. The steepest and shallowest lines that fit the error bars meet the axis at −259 °C and −281 °C. Which is the best conclusion? (Literature value: −273 °C.)</p>
      stem: "<p>ある生徒の最もよく合う直線は、−270 °C で温度の軸と交わります。エラーバーに合う傾きが最も急な直線と最もゆるい直線は、−259 °C と −281 °C で軸と交わります。最もよい結論はどれですか。（文献値：−273 °C）</p>",
      options: [
        // EN: Absolute zero = −270 ± 11 °C. The literature value lies within this range, so random error can explain the difference.
        "絶対零度 = −270 ± 11 °C。文献値はこの範囲の中にあるので、違いは偶然誤差で説明できる。",
        // EN: Absolute zero = −270 ± 22 °C. The literature value lies within this range.
        "絶対零度 = −270 ± 22 °C。文献値はこの範囲の中にある。",
        // EN: Absolute zero = −270 ± 11 °C. The result is not −273 °C, so there must be a systematic error.
        "絶対零度 = −270 ± 11 °C。結果が −273 °C ではないので、系統誤差があるはずである。",
        // EN: Absolute zero = −270 ± 0.5 °C, because the thermometer has an uncertainty of ±0.5 °C.
        "絶対零度 = −270 ± 0.5 °C。温度計の不確かさが ±0.5 °C だから。",
      ],
      hints: [
        // EN: The uncertainty is half of the range between the worst-fit values.
        "不確かさは、傾き最大・最小の直線から求めた値の範囲の半分です。",
        // EN: Is the 3 °C difference bigger or smaller than the uncertainty?
        "3 °C の違いは、不確かさより大きいでしょうか、小さいでしょうか。",
      ],
      // EN: <p>Half the range: (−259 − (−281)) ÷ 2 = 11 °C, so the result is −270 ± 11 °C. The literature value, −273 °C, lies inside −281 °C to −259 °C. The difference is smaller than the uncertainty, so random error alone could explain it.</p>
      solution: "<p>範囲の半分：(−259 − (−281)) ÷ 2 = 11 °C なので、結果は −270 ± 11 °C です。文献値 −273 °C は −281 °C〜−259 °C の中にあります。違いは不確かさより小さいので、偶然誤差だけで説明できます。</p>",
      misconception: {
        // EN (option B): The whole range from −281 °C to −259 °C is 22 °C wide. The uncertainty is half of that, on either side of the best value.
        "1": "−281 °C から −259 °C までの範囲全体の幅は 22 °C です。不確かさはその半分で、最もよい値の両側にとります。",
        // EN (option C): A difference from the literature value does not prove a systematic error. Here the difference (3 °C) is smaller than the uncertainty (11 °C).
        "2": "文献値と違っても、系統誤差があるとは言えません。ここでは、違い（3 °C）は不確かさ（11 °C）より小さいのです。",
        // EN (option D): The uncertainty of an extrapolated value is far bigger than the uncertainty of one reading. A small error in the gradient is magnified over 270 °C.
        "3": "外挿した値の不確かさは、1 回の読みの不確かさよりずっと大きくなります。傾きの小さな誤差が、270 °C にわたって拡大されます。",
      },
    },

  }
});
