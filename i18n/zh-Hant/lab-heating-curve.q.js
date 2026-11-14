/* lab-heating-curve.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-heating-curve.q', {
  questions: {

    // ── lab-heating-curve-q001 · mcq · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q001": {
      // EN: <p>A liquid is left to cool in air. Its cooling curve has a flat part. What is happening during the flat part?</p>
      stem: "<p>把一種液體放在空氣中冷卻。它的冷卻曲線有一段平坦部分。在平坦部分期間發生了甚麼事？</p>",
      options: [
        // EN: The liquid is freezing, and energy is released as attractions form between the particles.
        "液體正在凝固，粒子之間形成吸引力時放出能量。",
        // EN: The liquid has stopped losing energy to the surroundings.
        "液體已停止向周圍環境散失能量。",
        // EN: The particles have stopped moving.
        "粒子已停止移動。",
        // EN: The liquid is boiling, so its temperature cannot change.
        "液體正在沸騰，所以溫度不能改變。",
      ],
      hints: [
        // EN: On a cooling curve, which change of state happens as the temperature falls past the melting point?
        "在冷卻曲線上，溫度降至低於熔點時，會發生哪一種物態變化？",
      ],
      // EN: <p>On the flat part the liquid is freezing. As particles are pulled into fixed positions, attractions form and energy is released. This replaces the energy lost to the air, so the average kinetic energy, and the temperature, stay constant until all the liquid has frozen.</p>
      solution: "<p>在平坦部分，液體正在凝固。粒子被拉到固定位置時，粒子之間形成吸引力，並放出能量。這些能量補充了散失到空氣中的能量，所以平均動能和溫度保持不變，直至所有液體都凝固。</p>",
      misconception: {
        // EN (option B): Energy is still being lost to the surroundings. The loss is balanced by the energy released as the liquid freezes, so the temperature stays the same.
        "1": "能量仍在散失到周圍環境中。液體凝固時放出的能量抵銷了散失的能量，所以溫度保持不變。",
        // EN (option C): Particles in a solid still vibrate. The average kinetic energy is constant on the flat part, not zero.
        "2": "固體中的粒子仍然在振動。在平坦部分，平均動能保持不變，而不是零。",
        // EN (option D): The sample is cooling, not being heated. A flat part on a cooling curve is a change from liquid to solid (or from gas to liquid).
        "3": "樣本正在冷卻，不是被加熱。冷卻曲線上的平坦部分是由液體變成固體（或由氣體變成液體）的變化。",
      },
    },

    // ── lab-heating-curve-q002 · mcq · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q002": {
      // EN: <p>Stearic acid is heated in a water bath. Its temperature stays at about 69 °C while it melts. Which statement explains this?</p>
      stem: "<p>在水浴中加熱硬脂酸。它熔化期間，溫度保持在約 69 °C。以下哪一項敘述能解釋這個現象？</p>",
      options: [
        // EN: No energy is absorbed by the stearic acid while it melts.
        "硬脂酸熔化時沒有吸收能量。",
        // EN: The energy absorbed increases the average kinetic energy of the particles.
        "吸收的能量增加了粒子的平均動能。",
        // EN: The energy absorbed is used to overcome the forces between the molecules.
        "吸收的能量用來克服分子之間的作用力。",
        // EN: The energy absorbed breaks the covalent bonds inside the molecules.
        "吸收的能量破壞了分子內的共價鍵。",
      ],
      hints: [
        // EN: Temperature measures the average kinetic energy of the particles. If the temperature is constant, where is the energy going?
        "溫度量度的是粒子的平均動能。如果溫度不變，能量去了哪裏？",
      ],
      // EN: <p>The energy absorbed is used to overcome the intermolecular forces that hold the molecules in fixed positions. This increases their potential energy. The average kinetic energy does not change, so the temperature stays constant.</p>
      solution: "<p>吸收的能量用來克服把分子保持在固定位置的分子間引力。這使分子的勢能增加。平均動能不變，所以溫度保持不變。</p>",
      misconception: {
        // EN (option A): Energy is still flowing in from the hotter water bath. It goes into the change of state instead of raising the temperature.
        "0": "能量仍然由較熱的水浴流入。這些能量用於物態變化，而不是用來升高溫度。",
        // EN (option B): If the average kinetic energy increased, the temperature would rise. On the flat part it does not.
        "1": "如果平均動能增加，溫度就會上升。在平坦部分，溫度沒有上升。",
        // EN (option D): Melting is a physical change. The molecules stay whole: only the attractions between molecules are overcome.
        "3": "熔化是物理變化。分子保持完整：只有分子之間的吸引力被克服。",
      },
    },

    // ── lab-heating-curve-q003 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q003": {
      // EN: <p>A student reads the freezing point of a sample as 68.5 °C. What is this temperature in kelvin? Give your answer to one decimal place.</p>
      stem: "<p>某學生讀出一份樣本的凝固點是 68.5 °C。這個溫度以開爾文表示是多少？答案取至小數點後 1 位。</p>",
      hints: [
        // EN: Add 273.15 to a temperature in °C to get kelvin.
        "以 °C 表示的溫度加上 273.15，就得出開爾文。",
      ],
      // EN: <div class="worked__math"><i>T</i> = 68.5 + 273.15 = 341.65 K</div><p>To one decimal place: <strong>341.7 K</strong> (341.6 K is also accepted, since 341.65 sits on the rounding boundary).</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 68.5 + 273.15 = 341.65 K</div><p>取至小數點後 1 位：<strong>341.7 K</strong>（也接受 341.6 K，因為 341.65 剛好在四捨五入的分界上）。</p>",
    },

    // ── lab-heating-curve-q004 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q004": {
      // EN: <p>A thermometer reads to ±0.5 °C. The melting point of a sample is measured as 52.0 °C. Calculate the percentage uncertainty in this value.</p>
      stem: "<p>一支溫度計讀數至 ±0.5 °C。一份樣本的熔點量得 52.0 °C。計算 (calculate) 這個數值的百分不確定度。</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty ÷ measured value × 100.
        "百分不確定度 = 絕對不確定度 ÷ 量得的數值 × 100。",
      ],
      // EN: <div class="worked__math">% uncertainty = 0.5 ÷ 52.0 × 100 = 0.96 %</div><p>About <strong>1 %</strong>.</p>
      solution: "<div class=\"worked__math\">百分不確定度 = 0.5 ÷ 52.0 × 100 = 0.96 %</div><p>約 <strong>1 %</strong>。</p>",
    },

    // ── lab-heating-curve-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Its heating curve has a flat part at its melting point. Explain, in terms of particles, why the temperature does not rise during this flat part.</p>
      stem: "<p>以穩定的速率加熱一種純固體。它的加熱曲線在熔點有一段平坦部分。以粒子的角度解釋 (explain) 為甚麼在這段平坦部分期間溫度不會上升。</p>",
      hints: [
        // EN: Two marks: one for where the energy goes, one for what happens to the kinetic energy.
        "兩分：一分給能量去了哪裏，一分給動能有甚麼變化。",
      ],
      // EN: <p>The energy supplied is used to overcome the attractive forces between the particles (it increases their potential energy). The average kinetic energy of the particles stays the same, so the temperature is constant.</p>
      answer: "<p>供給的能量用來克服粒子之間的吸引力（使粒子的勢能增加）。粒子的平均動能保持不變，所以溫度不變。</p>",
      markscheme: [
        // EN: Energy is used to overcome / weaken the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "能量用來克服／削弱粒子之間的吸引力。接受：增加粒子的勢能。",
        // EN: The average kinetic energy of the particles does not change. Do not accept: “no energy is absorbed”.
        "粒子的平均動能沒有改變。不接受：「沒有吸收能量」。",
      ],
    },

    // ── lab-heating-curve-q006 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q006": {
      // EN: <p>A solid is heated in a water bath at 70 °C. The thermometer reads to ±0.5 °C.</p><div class="table-scroll"><table class="data"><caption>Heating data</caption><thead><tr><th scope="col" class="num">Time / s</th><th scope="col" class="num">Temperature / °C</th><th scope="col">What you see</th></tr></thead><tbody><tr><td class="num">0</td><td class="num">20.0</td><td>solid</td></tr><tr><td class="num">60</td><td class="num">36.5</td><td>solid</td></tr><tr><td class="num">120</td><td class="num">45.5</td><td>solid and liquid</td></tr><tr><td class="num">180</td><td class="num">46.0</td><td>solid and liquid</td></tr><tr><td class="num">240</td><td class="num">46.0</td><td>solid and liquid</td></tr><tr><td class="num">300</td><td class="num">46.5</td><td>solid and liquid</td></tr><tr><td class="num">360</td><td class="num">55.0</td><td>liquid</td></tr><tr><td class="num">420</td><td class="num">64.0</td><td>liquid</td></tr><tr><td class="num">480</td><td class="num">68.5</td><td>liquid</td></tr><tr><td class="num">540</td><td class="num">69.0</td><td>liquid</td></tr><tr><td class="num">600</td><td class="num">69.0</td><td>liquid</td></tr></tbody></table></div><p>What is the best value for the melting point of the solid?</p>
      stem: "<p>在 70 °C 的水浴中加熱一種固體。溫度計讀數至 ±0.5 °C。</p><div class=\"table-scroll\"><table class=\"data\"><caption>加熱數據</caption><thead><tr><th scope=\"col\" class=\"num\">時間 / s</th><th scope=\"col\" class=\"num\">溫度 / °C</th><th scope=\"col\">你看到的情況</th></tr></thead><tbody><tr><td class=\"num\">0</td><td class=\"num\">20.0</td><td>固體</td></tr><tr><td class=\"num\">60</td><td class=\"num\">36.5</td><td>固體</td></tr><tr><td class=\"num\">120</td><td class=\"num\">45.5</td><td>固體和液體</td></tr><tr><td class=\"num\">180</td><td class=\"num\">46.0</td><td>固體和液體</td></tr><tr><td class=\"num\">240</td><td class=\"num\">46.0</td><td>固體和液體</td></tr><tr><td class=\"num\">300</td><td class=\"num\">46.5</td><td>固體和液體</td></tr><tr><td class=\"num\">360</td><td class=\"num\">55.0</td><td>液體</td></tr><tr><td class=\"num\">420</td><td class=\"num\">64.0</td><td>液體</td></tr><tr><td class=\"num\">480</td><td class=\"num\">68.5</td><td>液體</td></tr><tr><td class=\"num\">540</td><td class=\"num\">69.0</td><td>液體</td></tr><tr><td class=\"num\">600</td><td class=\"num\">69.0</td><td>液體</td></tr></tbody></table></div><p>這種固體熔點的最佳數值是多少？</p>",
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
        "哪些讀數是在固體和液體同時存在時讀取的？",
        // EN: Take the mean of those readings.
        "取這些讀數的平均值。",
      ],
      // EN: <p>Solid and liquid are both present from 120 s to 300 s. The mean of those four readings is (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C. The flat part at 69.0 °C is the liquid reaching the bath temperature (70 °C), not a change of state.</p>
      solution: "<p>由 120 s 至 300 s，固體和液體同時存在。這四個讀數的平均值是 (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C。69.0 °C 的平坦部分是液體達到了水浴的溫度 (70 °C)，不是物態變化。</p>",
      misconception: {
        // EN (option A): That is the first plateau reading. One reading is less reliable than the mean of all the readings on the flat part.
        "0": "這是平台的第一個讀數。單一個讀數不及平坦部分上所有讀數的平均值可靠。",
        // EN (option C): At 360 s the sample is all liquid and warming up. The melting point is where solid and liquid are present together.
        "2": "在 360 s 時，樣本全部是液體，正在升溫。熔點是固體和液體同時存在時的溫度。",
        // EN (option D): The last readings are flat because the liquid has reached the temperature of the water bath. Only one state is present, so this is not a change of state.
        "3": "最後幾個讀數平坦，是因為液體已達到水浴的溫度。只有一種物態，所以這不是物態變化。",
      },
    },

    // ── lab-heating-curve-q007 · short · exam · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q007": {
      // EN: <p>On a cooling curve of lauric acid, the temperature falls to 42.0 °C while the sample is still all liquid. When crystals appear, it rises to 43.5 °C and stays there. Explain these observations.</p>
      stem: "<p>在月桂酸的冷卻曲線上，樣本仍全是液體時，溫度降至 42.0 °C。晶體出現時，溫度升至 43.5 °C，並保持在這個溫度。解釋 (explain) 這些觀察結果。</p>",
      hints: [
        // EN: Is a liquid always able to freeze as soon as it reaches its freezing point?
        "液體是否一到達凝固點就一定能凝固？",
        // EN: Is freezing endothermic or exothermic?
        "凝固是吸熱還是放熱？",
      ],
      // EN: <p>The liquid supercooled: it cooled below its freezing point before crystals started to form. When crystals formed, energy was released as attractions formed between the molecules. This raised the temperature to the freezing point, 43.5 °C, where it stays while the rest of the liquid freezes.</p>
      answer: "<p>液體出現了過冷：晶體開始形成之前，它已冷卻到低於凝固點。晶體形成時，分子之間形成吸引力，並放出能量。這使溫度升至凝固點 43.5 °C，其餘液體凝固期間溫度一直保持在這裏。</p>",
      markscheme: [
        // EN: The liquid has cooled below its freezing point without freezing / supercooled. Accept: crystals had not yet started to form.
        "液體冷卻到低於凝固點而沒有凝固／過冷。接受：晶體仍未開始形成。",
        // EN: Freezing releases energy (attractions form between molecules), which raises the temperature to the freezing point.
        "凝固放出能量（分子之間形成吸引力），使溫度升至凝固點。",
      ],
    },

    // ── lab-heating-curve-q008 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q008": {
      // EN: <p>A sample of stearic acid contains a small amount of another fatty acid as an impurity. How does the impurity affect the heating curve compared with that of pure stearic acid?</p>
      stem: "<p>一份硬脂酸樣本含有少量另一種脂肪酸作為雜質。與純硬脂酸相比，雜質怎樣影響加熱曲線？</p>",
      options: [
        // EN: The plateau is at a higher temperature and is perfectly flat.
        "平台在較高的溫度，而且完全平坦。",
        // EN: The plateau is at a lower temperature and slopes upwards slightly.
        "平台在較低的溫度，而且稍微向上傾斜。",
        // EN: The plateau is at the same temperature but is longer.
        "平台在相同的溫度，但較長。",
        // EN: There is no plateau at all.
        "完全沒有平台。",
      ],
      hints: [
        // EN: An impure solid melts over a range of temperatures. What does that look like on the curve?
        "不純的固體在一個溫度範圍內熔化。這在曲線上看來是怎樣的？",
      ],
      // EN: <p>An impure solid melts at a lower temperature, and over a range rather than at one temperature. The plateau is lower and slopes upwards slightly. This is one reason a measured melting point can be below the literature value.</p>
      solution: "<p>不純的固體在較低的溫度熔化，而且在一個溫度範圍內熔化，而不是在單一溫度。平台較低，並稍微向上傾斜。這是量得的熔點可能低於文獻值的其中一個原因。</p>",
      misconception: {
        // EN (option A): Impurities do not raise the melting point of a solid. They disturb the regular arrangement, so it melts at a lower temperature.
        "0": "雜質不會升高固體的熔點。雜質擾亂規則的排列，所以固體在較低的溫度熔化。",
        // EN (option C): A small amount of impurity changes the melting temperature, not only the length of the plateau.
        "2": "少量雜質會改變熔化溫度，不只是改變平台的長度。",
        // EN (option D): A slightly impure solid still melts over a narrow range, so there is still a near-flat part.
        "3": "略為不純的固體仍在一個窄的範圍內熔化，所以仍然有一段近乎平坦的部分。",
      },
    },

    // ── lab-heating-curve-q009 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q009": {
      // EN: <p>The temperature of a sample rises from 21.5 °C to 68.0 °C. Each reading has an uncertainty of ±0.5 °C. What is the absolute uncertainty, in °C, of the temperature rise?</p>
      stem: "<p>一份樣本的溫度由 21.5 °C 升至 68.0 °C。每個讀數的不確定度是 ±0.5 °C。溫度上升的絕對不確定度是多少 °C？</p>",
      hints: [
        // EN: The temperature rise is a difference of two readings. For a difference, add the absolute uncertainties.
        "溫度上升是兩個讀數之差。差的不確定度，要把絕對不確定度相加。",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C</div><div class="worked__math">uncertainty = 0.5 + 0.5 = ±1.0 °C</div><p>So the rise is 46.5 ± 1.0 °C. The uncertainties add even though the values are subtracted.</p>
      solution: "<div class=\"worked__math\">Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C</div><div class=\"worked__math\">不確定度 = 0.5 + 0.5 = ±1.0 °C</div><p>所以溫度上升是 46.5 ± 1.0 °C。即使數值是相減，不確定度也是相加。</p>",
    },

    // ── lab-heating-curve-q010 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q010": {
      // EN: <p>A student’s thermometer reads 0.8 °C too low at every temperature. Which change to the method would remove this error?</p>
      stem: "<p>某學生的溫度計在每個溫度的讀數都低了 0.8 °C。實驗方法的哪一項改變能消除這個誤差？</p>",
      options: [
        // EN: Repeat the experiment three times and take the mean.
        "重複實驗三次並取平均值。",
        // EN: Take readings every 15 s instead of every 30 s.
        "每 15 s 而不是每 30 s 讀數一次。",
        // EN: Place the thermometer in a mixture of ice and pure water, then correct every reading by the difference from 0 °C.
        "把溫度計放在冰和純水的混合物中，然後按與 0 °C 的差異校正每個讀數。",
        // EN: Read the thermometer at eye level.
        "視線與溫度計刻度保持水平地讀數。",
      ],
      hints: [
        // EN: Is this a random or a systematic error? Which kind is reduced by repeats?
        "這是隨機誤差還是系統誤差？重複量度能減少哪一種？",
      ],
      // EN: <p>This is a systematic error. It is removed by calibrating the thermometer against a known fixed point, such as ice and pure water at 0 °C, and correcting the readings.</p>
      solution: "<p>這是系統誤差。要消除它，就要用已知的定點（例如 0 °C 的冰和純水）校準溫度計，並校正讀數。</p>",
      misconception: {
        // EN (option A): A thermometer that always reads low gives a systematic error. Every repeat is low by the same amount, so the mean is low too.
        "0": "讀數總是偏低的溫度計會造成系統誤差。每次重複都低了相同的數值，所以平均值也偏低。",
        // EN (option B): More frequent readings help you see the plateau, but each reading is still 0.8 °C low.
        "1": "讀數更頻密有助你看到平台，但每個讀數仍然低了 0.8 °C。",
        // EN (option D): Reading at eye level reduces parallax, a random error. It does not fix a scale that is shifted.
        "3": "視線保持水平可以減少視差，視差是隨機誤差。這不能修正偏移了的刻度。",
      },
    },

    // ── lab-heating-curve-q011 · short · challenge · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q011": {
      // EN: <p>Two students heat the same mass of stearic acid. Student A uses a water bath at 80 °C. Student B uses a bath at 95 °C. Student B’s plateau is shorter and slopes more. Explain why, and suggest why Student A’s method gives a more reliable melting point.</p>
      stem: "<p>兩個學生加熱相同質量的硬脂酸。學生 A 用 80 °C 的水浴，學生 B 用 95 °C 的水浴。學生 B 的平台較短，傾斜得較多。解釋 (explain) 原因，並提出 (suggest) 為甚麼學生 A 的方法得出的熔點較可靠。</p>",
      hints: [
        // EN: Think about the rate at which energy reaches the sample, and whether every part of the sample is at the same temperature.
        "想想能量傳到樣本的速率，以及樣本每個部分是否都在相同的溫度。",
      ],
      // EN: <p>The hotter bath transfers energy faster, so the solid melts in less time (a shorter plateau). The outside of the sample melts and warms up before the middle, so the sample is not at one temperature and the plateau slopes. Student A heats more slowly, so the whole sample stays close to the melting point and there are more readings on a flatter plateau.</p>
      answer: "<p>較熱的水浴傳遞能量較快，所以固體熔化所需的時間較短（平台較短）。樣本外層比中間先熔化和升溫，所以樣本不是處於單一溫度，平台傾斜。學生 A 加熱較慢，所以整份樣本都保持在接近熔點的溫度，較平坦的平台上有較多讀數。</p>",
      markscheme: [
        // EN: Energy is transferred faster from the hotter bath, so melting takes less time / the plateau is shorter.
        "較熱的水浴傳遞能量較快，所以熔化所需的時間較短／平台較短。",
        // EN: Temperature is not uniform: the outside melts and warms before the centre (so the plateau slopes). Slower heating gives more readings on a flatter plateau. Accept either point for the second mark.
        "溫度不均勻：外層比中心先熔化和升溫（所以平台傾斜）。加熱較慢，在較平坦的平台上有較多讀數。第二分接受任何一點。",
      ],
    },

    // ── lab-heating-curve-q012 · mcq · challenge · SL · Structure 2.2.8 · 1 mark
    "lab-heating-curve-q012": {
      // EN: <p>Lauric acid, <span class="chem">C11H23COOH</span>, melts at 43.8 °C. Stearic acid, <span class="chem">C17H35COOH</span>, melts at 69.3 °C. Which is the best explanation for the higher melting point of stearic acid?</p>
      stem: "<p>月桂酸 <span class=\"chem\">C11H23COOH</span> 在 43.8 °C 熔化。硬脂酸 <span class=\"chem\">C17H35COOH</span> 在 69.3 °C 熔化。哪一項是硬脂酸熔點較高的最佳解釋？</p>",
      options: [
        // EN: Stearic acid molecules have stronger covalent bonds.
        "硬脂酸分子的共價鍵較強。",
        // EN: Stearic acid molecules are larger, with more electrons, so the London (dispersion) forces between them are stronger.
        "硬脂酸分子較大，電子較多，所以分子之間的倫敦（色散）力較強。",
        // EN: Stearic acid forms hydrogen bonds but lauric acid does not.
        "硬脂酸會形成氫鍵，但月桂酸不會。",
        // EN: Stearic acid is an ionic compound.
        "硬脂酸是離子化合物。",
      ],
      hints: [
        // EN: What is the difference between the two molecules? What kind of force depends on the size of a molecule?
        "兩種分子有甚麼分別？哪一種作用力取決於分子的大小？",
      ],
      // EN: <p>The two acids differ only in the length of the hydrocarbon chain. The longer chain of stearic acid has more electrons, so the London (dispersion) forces between its molecules are stronger. More energy is needed to overcome them, so the melting point is higher.</p>
      solution: "<p>兩種酸只是烴鏈的長度不同。硬脂酸的鏈較長，電子較多，所以分子之間的倫敦（色散）力較強。克服這些作用力需要較多能量，所以熔點較高。</p>",
      misconception: {
        // EN (option A): Melting does not break covalent bonds inside the molecules. It overcomes the forces between molecules.
        "0": "熔化不會破壞分子內的共價鍵，而是克服分子之間的作用力。",
        // EN (option C): Both acids have the same –COOH group, so both form hydrogen bonds. The difference is in the length of the carbon chain.
        "2": "兩種酸都有相同的 –COOH 基，所以都會形成氫鍵。分別在於碳鏈的長度。",
        // EN (option D): Both are molecular compounds made of non-metals bonded covalently.
        "3": "兩者都是由非金屬以共價鍵結合而成的分子化合物。",
      },
    },

    // ── lab-heating-curve-q013 · multi · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q013": {
      // EN: <p>Which of these are <strong>systematic</strong> errors in a melting point experiment? Select all that apply.</p>
      stem: "<p>以下哪些是熔點實驗中的<strong>系統</strong>誤差？選出所有正確選項。</p>",
      options: [
        // EN: The sample contains an impurity.
        "樣本含有雜質。",
        // EN: The reading is judged between two scale divisions, sometimes a little high and sometimes a little low.
        "讀數是在兩個刻度之間估計的，有時略高，有時略低。",
        // EN: The thermometer bulb is above the sample, in the air of the tube.
        "溫度計的玻璃泡在樣本上方，處於試管內的空氣中。",
        // EN: The stopwatch is started a fraction of a second late on some readings and early on others.
        "有些讀數的秒錶遲了零點幾秒開動，有些則早了。",
      ],
      hints: [
        // EN: A systematic error moves every result in the same direction.
        "系統誤差使每個結果都向同一方向偏移。",
      ],
      // EN: <p>An impurity always lowers the melting point, and a bulb in the air always reads the air rather than the sample: both shift the result one way, so both are systematic. Judging the scale and the reaction time scatter both ways, so they are random.</p>
      solution: "<p>雜質總是降低熔點，而在空氣中的玻璃泡總是量度空氣而不是樣本：兩者都使結果向同一方向偏移，所以都是系統誤差。估計刻度和反應時間都會使結果向兩個方向分散，所以是隨機誤差。</p>",
      misconception: {
        // EN (option B): Judging between divisions scatters readings both ways. That is a random error.
        "1": "在刻度之間估計會使讀數向兩個方向分散。這是隨機誤差。",
        // EN (option D): A reaction time that is sometimes late and sometimes early scatters the times both ways. That is random.
        "3": "反應時間有時遲、有時早，會使時間向兩個方向分散。這是隨機誤差。",
      },
    },

    // ── lab-heating-curve-q014 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q014": {
      // EN: <p>A student measures the melting point of benzoic acid as 120.5 °C. The literature value is 122.4 °C. Calculate the percentage error.</p>
      stem: "<p>某學生量得苯甲酸的熔點是 120.5 °C。文獻值是 122.4 °C。計算 (calculate) 百分誤差。</p>",
      hints: [
        // EN: Percentage error = |experimental − literature| ÷ literature × 100.
        "百分誤差 = |實驗值 − 文獻值| ÷ 文獻值 × 100。",
      ],
      // EN: <div class="worked__math">% error = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %</div><p>About <strong>1.6 %</strong>. With a ±0.5 °C thermometer the percentage uncertainty is 0.5 ÷ 120.5 × 100 = 0.4 %, which is smaller, so a systematic error such as an impurity is likely.</p>
      solution: "<div class=\"worked__math\">百分誤差 = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %</div><p>約 <strong>1.6 %</strong>。用 ±0.5 °C 的溫度計，百分不確定度是 0.5 ÷ 120.5 × 100 = 0.4 %，比百分誤差小，所以很可能有系統誤差，例如雜質。</p>",
    },

  }
});
