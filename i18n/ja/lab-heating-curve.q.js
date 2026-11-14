/* lab-heating-curve.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-heating-curve.q', {
  questions: {

    // ── lab-heating-curve-q001 · mcq · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q001": {
      // EN: <p>A liquid is left to cool in air. Its cooling curve has a flat part. What is happening during the flat part?</p>
      stem: "<p>ある液体を空気中に置いて冷まします。その冷却曲線には平らな部分があります。平らな部分では何が起こっていますか。</p>",
      options: [
        // EN: The liquid is freezing, and energy is released as attractions form between the particles.
        "液体が凝固していて、粒子のあいだに引力がはたらくようになるときにエネルギーが放出される。",
        // EN: The liquid has stopped losing energy to the surroundings.
        "液体が外界（周囲）にエネルギーを失わなくなった。",
        // EN: The particles have stopped moving.
        "粒子が動かなくなった。",
        // EN: The liquid is boiling, so its temperature cannot change.
        "液体が沸騰しているので、温度が変わらない。",
      ],
      hints: [
        // EN: On a cooling curve, which change of state happens as the temperature falls past the melting point?
        "冷却曲線で、温度が融点を下回っていくときに起こる状態変化は何でしょうか。",
      ],
      // EN: <p>On the flat part the liquid is freezing. As particles are pulled into fixed positions, attractions form and energy is released. This replaces the energy lost to the air, so the average kinetic energy, and the temperature, stay constant until all the liquid has frozen.</p>
      solution: "<p>平らな部分では、液体が凝固しています。粒子が決まった位置に引きよせられると、粒子のあいだに引力がはたらき、エネルギーが放出されます。このエネルギーが空気に失われるエネルギーを補うので、液体がすべて凝固するまで、平均運動エネルギーと温度は一定に保たれます。</p>",
      misconception: {
        // EN (option B): Energy is still being lost to the surroundings. The loss is balanced by the energy released as the liquid freezes, so the temperature stays the same.
        "1": "エネルギーは外界（周囲）に失われ続けています。その損失を、液体が凝固するときに放出されるエネルギーが打ち消すので、温度は変わりません。",
        // EN (option C): Particles in a solid still vibrate. The average kinetic energy is constant on the flat part, not zero.
        "2": "固体の中の粒子も振動しています。平らな部分で一定なのは平均運動エネルギーで、ゼロになるわけではありません。",
        // EN (option D): The sample is cooling, not being heated. A flat part on a cooling curve is a change from liquid to solid (or from gas to liquid).
        "3": "試料は冷えているのであって、加熱されているのではありません。冷却曲線の平らな部分は、液体から固体（または気体から液体）への変化です。",
      },
    },

    // ── lab-heating-curve-q002 · mcq · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q002": {
      // EN: <p>Stearic acid is heated in a water bath. Its temperature stays at about 69 °C while it melts. Which statement explains this?</p>
      stem: "<p>ステアリン酸を水浴で加熱します。融解しているあいだ、温度は約 69 °C のままです。このことを説明している記述はどれですか。</p>",
      options: [
        // EN: No energy is absorbed by the stearic acid while it melts.
        "融解しているあいだ、ステアリン酸はエネルギーを吸収しない。",
        // EN: The energy absorbed increases the average kinetic energy of the particles.
        "吸収したエネルギーは、粒子の平均運動エネルギーを大きくする。",
        // EN: The energy absorbed is used to overcome the forces between the molecules.
        "吸収したエネルギーは、分子のあいだの力に打ち勝つのに使われる。",
        // EN: The energy absorbed breaks the covalent bonds inside the molecules.
        "吸収したエネルギーは、分子の中の共有結合を切る。",
      ],
      hints: [
        // EN: Temperature measures the average kinetic energy of the particles. If the temperature is constant, where is the energy going?
        "温度は粒子の平均運動エネルギーの尺度です。温度が一定なら、エネルギーはどこに行っているのでしょうか。",
      ],
      // EN: <p>The energy absorbed is used to overcome the intermolecular forces that hold the molecules in fixed positions. This increases their potential energy. The average kinetic energy does not change, so the temperature stays constant.</p>
      solution: "<p>吸収したエネルギーは、分子を決まった位置にとどめている分子間力に打ち勝つのに使われます。これによって分子の位置エネルギーが増えます。平均運動エネルギーは変わらないので、温度は一定に保たれます。</p>",
      misconception: {
        // EN (option A): Energy is still flowing in from the hotter water bath. It goes into the change of state instead of raising the temperature.
        "0": "より熱い水浴から、エネルギーは流れこみ続けています。そのエネルギーは、温度を上げる代わりに状態変化に使われます。",
        // EN (option B): If the average kinetic energy increased, the temperature would rise. On the flat part it does not.
        "1": "平均運動エネルギーが大きくなれば、温度は上がります。平らな部分では上がりません。",
        // EN (option D): Melting is a physical change. The molecules stay whole: only the attractions between molecules are overcome.
        "3": "融解は物理変化です。分子はそのままの形を保ち、分子のあいだの引力だけが打ち負かされます。",
      },
    },

    // ── lab-heating-curve-q003 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q003": {
      // EN: <p>A student reads the freezing point of a sample as 68.5 °C. What is this temperature in kelvin? Give your answer to one decimal place.</p>
      stem: "<p>ある生徒が、試料の凝固点を 68.5 °C と読みました。この温度はケルビンでいくつですか。小数第 1 位まで答えなさい。</p>",
      hints: [
        // EN: Add 273.15 to a temperature in °C to get kelvin.
        "°C で表した温度に 273.15 を足すと、ケルビンになります。",
      ],
      // EN: <div class="worked__math"><i>T</i> = 68.5 + 273.15 = 341.65 K</div><p>To one decimal place: <strong>341.7 K</strong> (341.6 K is also accepted, since 341.65 sits on the rounding boundary).</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 68.5 + 273.15 = 341.65 K</div><p>小数第 1 位まで：<strong>341.7 K</strong>（341.65 はちょうど丸めの境目なので、341.6 K も正解とします）。</p>",
    },

    // ── lab-heating-curve-q004 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q004": {
      // EN: <p>A thermometer reads to ±0.5 °C. The melting point of a sample is measured as 52.0 °C. Calculate the percentage uncertainty in this value.</p>
      stem: "<p>温度計は ±0.5 °C まで読めます。ある試料の融点は 52.0 °C と測定されました。この値の百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty ÷ measured value × 100.
        "百分率の不確かさ = 絶対不確かさ ÷ 測定値 × 100。",
      ],
      // EN: <div class="worked__math">% uncertainty = 0.5 ÷ 52.0 × 100 = 0.96 %</div><p>About <strong>1 %</strong>.</p>
      solution: "<div class=\"worked__math\">百分率の不確かさ = 0.5 ÷ 52.0 × 100 = 0.96 %</div><p>約 <strong>1 %</strong> です。</p>",
    },

    // ── lab-heating-curve-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Its heating curve has a flat part at its melting point. Explain, in terms of particles, why the temperature does not rise during this flat part.</p>
      stem: "<p>純粋な固体を一定の割合で加熱します。その加熱曲線には、融点のところに平らな部分があります。この平らな部分で温度が上がらない理由を、粒子を使って説明しなさい (explain)。</p>",
      hints: [
        // EN: Two marks: one for where the energy goes, one for what happens to the kinetic energy.
        "2 点です。1 点はエネルギーがどこに行くか、もう 1 点は運動エネルギーがどうなるかです。",
      ],
      // EN: <p>The energy supplied is used to overcome the attractive forces between the particles (it increases their potential energy). The average kinetic energy of the particles stays the same, so the temperature is constant.</p>
      answer: "<p>加えたエネルギーは、粒子のあいだの引力に打ち勝つのに使われます（粒子の位置エネルギーが増えます）。粒子の平均運動エネルギーは変わらないので、温度は一定です。</p>",
      markscheme: [
        // EN: Energy is used to overcome / weaken the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "エネルギーは、粒子のあいだの引力に打ち勝つ / 引力を弱めるのに使われる。粒子の位置エネルギーが増える、も可。",
        // EN: The average kinetic energy of the particles does not change. Do not accept: “no energy is absorbed”.
        "粒子の平均運動エネルギーは変わらない。「エネルギーは吸収されない」は不可。",
      ],
    },

    // ── lab-heating-curve-q006 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q006": {
      // EN: <p>A solid is heated in a water bath at 70 °C. The thermometer reads to ±0.5 °C.</p><div class="table-scroll"><table class="data"><caption>Heating data</caption><thead><tr><th scope="col" class="num">Time / s</th><th scope="col" class="num">Temperature / °C</th><th scope="col">What you see</th></tr></thead><tbody><tr><td class="num">0</td><td class="num">20.0</td><td>solid</td></tr><tr><td class="num">60</td><td class="num">36.5</td><td>solid</td></tr><tr><td class="num">120</td><td class="num">45.5</td><td>solid and liquid</td></tr><tr><td class="num">180</td><td class="num">46.0</td><td>solid and liquid</td></tr><tr><td class="num">240</td><td class="num">46.0</td><td>solid and liquid</td></tr><tr><td class="num">300</td><td class="num">46.5</td><td>solid and liquid</td></tr><tr><td class="num">360</td><td class="num">55.0</td><td>liquid</td></tr><tr><td class="num">420</td><td class="num">64.0</td><td>liquid</td></tr><tr><td class="num">480</td><td class="num">68.5</td><td>liquid</td></tr><tr><td class="num">540</td><td class="num">69.0</td><td>liquid</td></tr><tr><td class="num">600</td><td class="num">69.0</td><td>liquid</td></tr></tbody></table></div><p>What is the best value for the melting point of the solid?</p>
      stem: "<p>ある固体を 70 °C の水浴で加熱します。温度計は ±0.5 °C まで読めます。</p><div class=\"table-scroll\"><table class=\"data\"><caption>加熱のデータ</caption><thead><tr><th scope=\"col\" class=\"num\">時間 / s</th><th scope=\"col\" class=\"num\">温度 / °C</th><th scope=\"col\">見えるようす</th></tr></thead><tbody><tr><td class=\"num\">0</td><td class=\"num\">20.0</td><td>固体</td></tr><tr><td class=\"num\">60</td><td class=\"num\">36.5</td><td>固体</td></tr><tr><td class=\"num\">120</td><td class=\"num\">45.5</td><td>固体と液体</td></tr><tr><td class=\"num\">180</td><td class=\"num\">46.0</td><td>固体と液体</td></tr><tr><td class=\"num\">240</td><td class=\"num\">46.0</td><td>固体と液体</td></tr><tr><td class=\"num\">300</td><td class=\"num\">46.5</td><td>固体と液体</td></tr><tr><td class=\"num\">360</td><td class=\"num\">55.0</td><td>液体</td></tr><tr><td class=\"num\">420</td><td class=\"num\">64.0</td><td>液体</td></tr><tr><td class=\"num\">480</td><td class=\"num\">68.5</td><td>液体</td></tr><tr><td class=\"num\">540</td><td class=\"num\">69.0</td><td>液体</td></tr><tr><td class=\"num\">600</td><td class=\"num\">69.0</td><td>液体</td></tr></tbody></table></div><p>この固体の融点として最もよい値はどれですか。</p>",
      options: [
        // EN: 45.5 °C
        "45.5 °C",
        // EN: 46.0 °C
        "46.0 °C",
        // EN: 55.0 °C
        "55.0 °C",
        // EN: 69.0 °C
        "69.0 °C",
      ],
      hints: [
        // EN: Which readings were taken while solid and liquid were both present?
        "固体と液体の両方があるあいだにとった読みはどれでしょうか。",
        // EN: Take the mean of those readings.
        "それらの読みの平均をとりましょう。",
      ],
      // EN: <p>Solid and liquid are both present from 120 s to 300 s. The mean of those four readings is (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C. The flat part at 69.0 °C is the liquid reaching the bath temperature (70 °C), not a change of state.</p>
      solution: "<p>固体と液体の両方があるのは、120 s から 300 s までです。その 4 つの読みの平均は (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C です。69.0 °C の平らな部分は、液体が水浴の温度（70 °C）に達したもので、状態変化ではありません。</p>",
      misconception: {
        // EN (option A): That is the first plateau reading. One reading is less reliable than the mean of all the readings on the flat part.
        "0": "これは平らな部分の最初の読みです。1 つの読みは、平らな部分のすべての読みの平均より信頼性が低くなります。",
        // EN (option C): At 360 s the sample is all liquid and warming up. The melting point is where solid and liquid are present together.
        "2": "360 s では、試料はすべて液体で、温まっているところです。融点は、固体と液体がいっしょにあるところです。",
        // EN (option D): The last readings are flat because the liquid has reached the temperature of the water bath. Only one state is present, so this is not a change of state.
        "3": "最後の読みが平らなのは、液体が水浴の温度に達したからです。状態は 1 つだけなので、これは状態変化ではありません。",
      },
    },

    // ── lab-heating-curve-q007 · short · exam · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q007": {
      // EN: <p>On a cooling curve of lauric acid, the temperature falls to 42.0 °C while the sample is still all liquid. When crystals appear, it rises to 43.5 °C and stays there. Explain these observations.</p>
      stem: "<p>ラウリン酸の冷却曲線で、試料がまだすべて液体のうちに、温度が 42.0 °C まで下がります。結晶が現れると、温度は 43.5 °C まで上がり、そのまま一定になります。これらの観察を説明しなさい (explain)。</p>",
      hints: [
        // EN: Is a liquid always able to freeze as soon as it reaches its freezing point?
        "液体は、凝固点に達するとすぐに凝固できるとは限らないのでしょうか。",
        // EN: Is freezing endothermic or exothermic?
        "凝固は吸熱でしょうか、発熱でしょうか。",
      ],
      // EN: <p>The liquid supercooled: it cooled below its freezing point before crystals started to form. When crystals formed, energy was released as attractions formed between the molecules. This raised the temperature to the freezing point, 43.5 °C, where it stays while the rest of the liquid freezes.</p>
      answer: "<p>液体は過冷却になりました。結晶ができはじめる前に、凝固点より低い温度まで冷えたのです。結晶ができると、分子のあいだに引力がはたらくようになり、エネルギーが放出されました。これによって温度が凝固点の 43.5 °C まで上がり、残りの液体が凝固するあいだ、その温度に保たれます。</p>",
      markscheme: [
        // EN: The liquid has cooled below its freezing point without freezing / supercooled. Accept: crystals had not yet started to form.
        "液体が凝固しないまま凝固点より低い温度まで冷えた / 過冷却になった。結晶がまだできはじめていなかった、も可。",
        // EN: Freezing releases energy (attractions form between molecules), which raises the temperature to the freezing point.
        "凝固するとエネルギーが放出され（分子のあいだに引力がはたらくようになる）、それによって温度が凝固点まで上がる。",
      ],
    },

    // ── lab-heating-curve-q008 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q008": {
      // EN: <p>A sample of stearic acid contains a small amount of another fatty acid as an impurity. How does the impurity affect the heating curve compared with that of pure stearic acid?</p>
      stem: "<p>ステアリン酸の試料に、別の脂肪酸が不純物として少量含まれています。純粋なステアリン酸とくらべて、この不純物は加熱曲線にどのような影響を与えますか。</p>",
      options: [
        // EN: The plateau is at a higher temperature and is perfectly flat.
        "平らな部分がより高い温度になり、完全に平らになる。",
        // EN: The plateau is at a lower temperature and slopes upwards slightly.
        "平らな部分がより低い温度になり、わずかに右上がりに傾く。",
        // EN: The plateau is at the same temperature but is longer.
        "平らな部分は同じ温度だが、長くなる。",
        // EN: There is no plateau at all.
        "平らな部分がまったくなくなる。",
      ],
      hints: [
        // EN: An impure solid melts over a range of temperatures. What does that look like on the curve?
        "純粋でない固体は、ある温度範囲で融解します。それは曲線の上でどう見えるでしょうか。",
      ],
      // EN: <p>An impure solid melts at a lower temperature, and over a range rather than at one temperature. The plateau is lower and slopes upwards slightly. This is one reason a measured melting point can be below the literature value.</p>
      solution: "<p>純粋でない固体は、より低い温度で、しかも 1 つの温度ではなくある範囲で融解します。平らな部分は低くなり、わずかに右上がりに傾きます。測定した融点が文献値より低くなることがある理由の 1 つです。</p>",
      misconception: {
        // EN (option A): Impurities do not raise the melting point of a solid. They disturb the regular arrangement, so it melts at a lower temperature.
        "0": "不純物は固体の融点を上げません。規則正しい配列を乱すので、より低い温度で融解します。",
        // EN (option C): A small amount of impurity changes the melting temperature, not only the length of the plateau.
        "2": "少量の不純物は、平らな部分の長さだけでなく、融解する温度も変えます。",
        // EN (option D): A slightly impure solid still melts over a narrow range, so there is still a near-flat part.
        "3": "わずかに純粋でない固体も、せまい範囲で融解するので、ほぼ平らな部分はやはりあります。",
      },
    },

    // ── lab-heating-curve-q009 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q009": {
      // EN: <p>The temperature of a sample rises from 21.5 °C to 68.0 °C. Each reading has an uncertainty of ±0.5 °C. What is the absolute uncertainty, in °C, of the temperature rise?</p>
      stem: "<p>ある試料の温度が 21.5 °C から 68.0 °C に上がります。それぞれの読みの不確かさは ±0.5 °C です。温度上昇の絶対不確かさは、°C でいくつですか。</p>",
      hints: [
        // EN: The temperature rise is a difference of two readings. For a difference, add the absolute uncertainties.
        "温度上昇は 2 つの読みの差です。差では、絶対不確かさを足します。",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C</div><div class="worked__math">uncertainty = 0.5 + 0.5 = ±1.0 °C</div><p>So the rise is 46.5 ± 1.0 °C. The uncertainties add even though the values are subtracted.</p>
      solution: "<div class=\"worked__math\">Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C</div><div class=\"worked__math\">不確かさ = 0.5 + 0.5 = ±1.0 °C</div><p>したがって、温度上昇は 46.5 ± 1.0 °C です。値は引き算しても、不確かさは足し算になります。</p>",
    },

    // ── lab-heating-curve-q010 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q010": {
      // EN: <p>A student’s thermometer reads 0.8 °C too low at every temperature. Which change to the method would remove this error?</p>
      stem: "<p>ある生徒の温度計は、どの温度でも 0.8 °C 低く表示します。方法をどう変えれば、この誤差を取り除けますか。</p>",
      options: [
        // EN: Repeat the experiment three times and take the mean.
        "実験を 3 回くり返して平均をとる。",
        // EN: Take readings every 15 s instead of every 30 s.
        "30 s ごとではなく、15 s ごとに読む。",
        // EN: Place the thermometer in a mixture of ice and pure water, then correct every reading by the difference from 0 °C.
        "温度計を氷と純粋な水の混合物に入れ、0 °C との差だけ、すべての読みを補正する。",
        // EN: Read the thermometer at eye level.
        "温度計を目の高さで読む。",
      ],
      hints: [
        // EN: Is this a random or a systematic error? Which kind is reduced by repeats?
        "これは偶然誤差でしょうか、系統誤差でしょうか。くり返すと小さくなるのはどちらでしょうか。",
      ],
      // EN: <p>This is a systematic error. It is removed by calibrating the thermometer against a known fixed point, such as ice and pure water at 0 °C, and correcting the readings.</p>
      solution: "<p>これは系統誤差です。0 °C の氷と純粋な水のような、わかっている定点で温度計を校正し、読みを補正すれば取り除けます。</p>",
      misconception: {
        // EN (option A): A thermometer that always reads low gives a systematic error. Every repeat is low by the same amount, so the mean is low too.
        "0": "いつも低く表示する温度計では、系統誤差が生じます。くり返すたびに同じだけ低くなるので、平均も低くなります。",
        // EN (option B): More frequent readings help you see the plateau, but each reading is still 0.8 °C low.
        "1": "読みの回数を増やせば平らな部分は見やすくなりますが、どの読みもやはり 0.8 °C 低いままです。",
        // EN (option D): Reading at eye level reduces parallax, a random error. It does not fix a scale that is shifted.
        "3": "目の高さで読むと、偶然誤差である視差は小さくなります。目盛りがずれていることは解決できません。",
      },
    },

    // ── lab-heating-curve-q011 · short · challenge · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q011": {
      // EN: <p>Two students heat the same mass of stearic acid. Student A uses a water bath at 80 °C. Student B uses a bath at 95 °C. Student B’s plateau is shorter and slopes more. Explain why, and suggest why Student A’s method gives a more reliable melting point.</p>
      stem: "<p>2 人の生徒が、同じ質量のステアリン酸を加熱します。生徒 A は 80 °C の水浴を使います。生徒 B は 95 °C の水浴を使います。生徒 B の平らな部分は短く、より傾いています。その理由を説明しなさい (explain)。また、生徒 A の方法のほうが信頼できる融点が得られる理由を提案しなさい (suggest)。</p>",
      hints: [
        // EN: Think about the rate at which energy reaches the sample, and whether every part of the sample is at the same temperature.
        "エネルギーが試料に届く速さと、試料のどの部分も同じ温度になっているかを考えましょう。",
      ],
      // EN: <p>The hotter bath transfers energy faster, so the solid melts in less time (a shorter plateau). The outside of the sample melts and warms up before the middle, so the sample is not at one temperature and the plateau slopes. Student A heats more slowly, so the whole sample stays close to the melting point and there are more readings on a flatter plateau.</p>
      answer: "<p>熱い水浴ほどエネルギーを速く伝えるので、固体が短い時間で融解します（平らな部分が短くなります）。試料の外側が中央より先に融解して温まるので、試料が 1 つの温度にならず、平らな部分が傾きます。生徒 A はよりゆっくり加熱するので、試料全体が融点の近くに保たれ、より平らな部分でたくさんの読みがとれます。</p>",
      markscheme: [
        // EN: Energy is transferred faster from the hotter bath, so melting takes less time / the plateau is shorter.
        "熱い水浴からはエネルギーが速く伝わるので、融解にかかる時間が短い / 平らな部分が短くなる。",
        // EN: Temperature is not uniform: the outside melts and warms before the centre (so the plateau slopes). Slower heating gives more readings on a flatter plateau. Accept either point for the second mark.
        "温度が均一でない。外側が中央より先に融解して温まる（だから平らな部分が傾く）。ゆっくり加熱すると、より平らな部分でたくさんの読みがとれる。2 点目はどちらでも可。",
      ],
    },

    // ── lab-heating-curve-q012 · mcq · challenge · SL · Structure 2.2.8 · 1 mark
    "lab-heating-curve-q012": {
      // EN: <p>Lauric acid, <span class="chem">C11H23COOH</span>, melts at 43.8 °C. Stearic acid, <span class="chem">C17H35COOH</span>, melts at 69.3 °C. Which is the best explanation for the higher melting point of stearic acid?</p>
      stem: "<p>ラウリン酸 <span class=\"chem\">C11H23COOH</span> は 43.8 °C で融解します。ステアリン酸 <span class=\"chem\">C17H35COOH</span> は 69.3 °C で融解します。ステアリン酸の融点が高いことを最もよく説明しているのはどれですか。</p>",
      options: [
        // EN: Stearic acid molecules have stronger covalent bonds.
        "ステアリン酸の分子のほうが、共有結合が強い。",
        // EN: Stearic acid molecules are larger, with more electrons, so the London (dispersion) forces between them are stronger.
        "ステアリン酸の分子のほうが大きく、電子が多いので、分子のあいだのロンドン（分散）力が強い。",
        // EN: Stearic acid forms hydrogen bonds but lauric acid does not.
        "ステアリン酸は水素結合をつくるが、ラウリン酸はつくらない。",
        // EN: Stearic acid is an ionic compound.
        "ステアリン酸はイオン化合物である。",
      ],
      hints: [
        // EN: What is the difference between the two molecules? What kind of force depends on the size of a molecule?
        "2 つの分子の違いは何でしょうか。分子の大きさによって変わるのは、どんな種類の力でしょうか。",
      ],
      // EN: <p>The two acids differ only in the length of the hydrocarbon chain. The longer chain of stearic acid has more electrons, so the London (dispersion) forces between its molecules are stronger. More energy is needed to overcome them, so the melting point is higher.</p>
      solution: "<p>2 つの酸の違いは、炭化水素の鎖の長さだけです。ステアリン酸の長い鎖には電子が多いので、分子のあいだのロンドン（分散）力が強くなります。それに打ち勝つにはより多くのエネルギーが必要なので、融点が高くなります。</p>",
      misconception: {
        // EN (option A): Melting does not break covalent bonds inside the molecules. It overcomes the forces between molecules.
        "0": "融解では、分子の中の共有結合は切れません。分子のあいだの力に打ち勝つだけです。",
        // EN (option C): Both acids have the same –COOH group, so both form hydrogen bonds. The difference is in the length of the carbon chain.
        "2": "どちらの酸も同じ –COOH 基をもつので、どちらも水素結合をつくります。違いは炭素鎖の長さにあります。",
        // EN (option D): Both are molecular compounds made of non-metals bonded covalently.
        "3": "どちらも、非金属どうしが共有結合でつながった分子からなる化合物です。",
      },
    },

    // ── lab-heating-curve-q013 · multi · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q013": {
      // EN: <p>Which of these are <strong>systematic</strong> errors in a melting point experiment? Select all that apply.</p>
      stem: "<p>融点の実験で、<strong>系統誤差</strong>にあたるものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: The sample contains an impurity.
        "試料に不純物が含まれている。",
        // EN: The reading is judged between two scale divisions, sometimes a little high and sometimes a little low.
        "2 つの目盛りのあいだで読みを判断するので、少し高くなったり、少し低くなったりする。",
        // EN: The thermometer bulb is above the sample, in the air of the tube.
        "温度計の球部が試料より上の、試験管の中の空気にある。",
        // EN: The stopwatch is started a fraction of a second late on some readings and early on others.
        "ストップウォッチを押すのが、ある読みでは一瞬遅れ、別の読みでは一瞬早くなる。",
      ],
      hints: [
        // EN: A systematic error moves every result in the same direction.
        "系統誤差は、すべての結果を同じ向きに動かします。",
      ],
      // EN: <p>An impurity always lowers the melting point, and a bulb in the air always reads the air rather than the sample: both shift the result one way, so both are systematic. Judging the scale and the reaction time scatter both ways, so they are random.</p>
      solution: "<p>不純物はいつも融点を下げます。球部が空気中にあれば、いつも試料ではなく空気の温度を読みます。どちらも結果を一方向にずらすので、系統誤差です。目盛りの判断と反応時間は両方向にばらつくので、偶然誤差です。</p>",
      misconception: {
        // EN (option B): Judging between divisions scatters readings both ways. That is a random error.
        "1": "目盛りのあいだの判断は、読みを両方向にばらつかせます。これは偶然誤差です。",
        // EN (option D): A reaction time that is sometimes late and sometimes early scatters the times both ways. That is random.
        "3": "反応時間が遅れたり早くなったりすると、時間が両方向にばらつきます。これは偶然誤差です。",
      },
    },

    // ── lab-heating-curve-q014 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q014": {
      // EN: <p>A student measures the melting point of benzoic acid as 120.5 °C. The literature value is 122.4 °C. Calculate the percentage error.</p>
      stem: "<p>ある生徒が、安息香酸の融点を 120.5 °C と測定しました。文献値は 122.4 °C です。百分率誤差を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Percentage error = |experimental − literature| ÷ literature × 100.
        "百分率誤差 = |実験値 − 文献値| ÷ 文献値 × 100。",
      ],
      // EN: <div class="worked__math">% error = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %</div><p>About <strong>1.6 %</strong>. With a ±0.5 °C thermometer the percentage uncertainty is 0.5 ÷ 120.5 × 100 = 0.4 %, which is smaller, so a systematic error such as an impurity is likely.</p>
      solution: "<div class=\"worked__math\">百分率誤差 = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %</div><p>約 <strong>1.6 %</strong> です。温度計が ±0.5 °C なら、百分率の不確かさは 0.5 ÷ 120.5 × 100 = 0.4 % で、こちらのほうが小さいので、不純物のような系統誤差がある可能性が高いといえます。</p>",
    },

  }
});
