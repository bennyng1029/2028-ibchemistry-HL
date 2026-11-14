/* lab-gas-laws.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-gas-laws.q', {
  questions: {

    // ── lab-gas-laws-q001 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q001": {
      // EN: <p>A student measures the pressure, <i>P</i>, of a fixed amount of air in a gas syringe at different volumes, <i>V</i>, at constant temperature. Which graph of the results is a straight line through the origin?</p>
      stem: "<p>一名學生在溫度不變時，量度氣體注射器中固定物質的量的空氣在不同體積 <i>V</i> 時的壓強 <i>P</i>。結果的哪一幅圖表是一條穿過原點的直線？</p>",
      options: [
        // EN: <i>P</i> against <i>V</i>
        "<i>P</i> 對 <i>V</i>",
        // EN: <i>P</i> against 1/<i>V</i>
        "<i>P</i> 對 1/<i>V</i>",
        // EN: <i>PV</i> against <i>P</i>
        "<i>PV</i> 對 <i>P</i>",
        // EN: <i>P</i> against <i>V</i><sup>2</sup>
        "<i>P</i> 對 <i>V</i><sup>2</sup>",
      ],
      hints: [
        // EN: If <i>P</i> is inversely proportional to <i>V</i>, then <i>P</i> = <i>k</i> × (something). What is the something?
        "如果 <i>P</i> 與 <i>V</i> 成反比，那麼 <i>P</i> = <i>k</i> × (某個量)。這個量是甚麼？",
      ],
      // EN: <p>At constant temperature <i>PV</i> = <i>k</i>, so <i>P</i> = <i>k</i> × (1/<i>V</i>). A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin with gradient <i>k</i>.</p>
      solution: "<p>溫度不變時 <i>PV</i> = <i>k</i>，所以 <i>P</i> = <i>k</i> × (1/<i>V</i>)。<i>P</i> 對 1/<i>V</i> 的圖表是一條穿過原點、斜率為 <i>k</i> 的直線。</p>",
      misconception: {
        // EN (option A): Pressure falls as volume rises, so this graph is a curve with a negative slope, not a straight line through the origin.
        "0": "體積增加時壓強下降，所以這幅圖表是一條斜率為負的曲線，而不是穿過原點的直線。",
        // EN (option C): <i>PV</i> is constant, so this graph is a horizontal straight line. It does not pass through the origin.
        "2": "<i>PV</i> 是常數，所以這幅圖表是一條水平直線。它不穿過原點。",
        // EN (option D): There is no square in the relationship. Pressure is inversely proportional to volume itself.
        "3": "這個關係中沒有平方。壓強與體積本身成反比。",
      },
    },

    // ── lab-gas-laws-q002 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q002": {
      // EN: <p>A sealed gas syringe is held in a water bath. The graph of the volume of the gas against temperature in °C is a straight line. The line of best fit passes through (20.0 °C, 61.2 <span class="unit">cm3</span>) and (80.0 °C, 73.8 <span class="unit">cm3</span>).</p><p>Estimate absolute zero from these data, in °C.</p>
      stem: "<p>一支密封的氣體注射器放在水浴中。氣體體積對攝氏溫度的圖表是一條直線。最佳擬合線穿過 (20.0 °C, 61.2 <span class=\"unit\">cm3</span>) 和 (80.0 °C, 73.8 <span class=\"unit\">cm3</span>)。</p><p>從這些數據估算 (estimate) 絕對零度，以 °C 表示。</p>",
      hints: [
        // EN: Find the gradient of the line first.
        "先求直線的斜率。",
        // EN: From (20.0 °C, 61.2 cm³), how far must the temperature fall for the volume to fall by 61.2 cm³?
        "從 (20.0 °C, 61.2 cm³) 開始，溫度要下降多少，體積才會下降 61.2 cm³？",
      ],
      // EN: <div class="worked__math">gradient = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class="worked__math">fall in temperature for <i>V</i> = 0: 61.2 ÷ 0.210 = 291.4 °C</div><div class="worked__math">θ = 20.0 − 291.4 = −271 °C</div><p>M1 for the gradient, M2 for the answer. Accept answers from −270 °C to −273 °C.</p>
      solution: "<div class=\"worked__math\">斜率 = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class=\"worked__math\"><i>V</i> = 0 所需的溫度下降：61.2 ÷ 0.210 = 291.4 °C</div><div class=\"worked__math\">θ = 20.0 − 291.4 = −271 °C</div><p>M1：求出斜率；M2：求出答案。接受 −270 °C 至 −273 °C 的答案。</p>",
    },

    // ── lab-gas-laws-q003 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q003": {
      // EN: <p>A flask of air in a water bath is joined to a pressure sensor by a long plastic tube. The air in the tube stays at room temperature while the bath is heated from 0 °C to 90 °C. How does this affect the estimate of absolute zero found by extrapolating the graph of pressure against temperature in °C?</p>
      stem: "<p>水浴中的一個空氣燒瓶以一條長塑膠管連接到壓強感應器。水浴由 0 °C 加熱至 90 °C 時，管內的空氣一直保持室溫。這對外推壓強對攝氏溫度的圖表所得的絕對零度估算值有甚麼影響？</p>",
      options: [
        // EN: The estimate is lower (more negative) than the true value.
        "估算值比真實值低（更負）。",
        // EN: The estimate is higher (less negative) than the true value.
        "估算值比真實值高（較不負）。",
        // EN: There is no effect, because the amount of gas is constant.
        "沒有影響，因為氣體的物質的量不變。",
        // EN: There is no effect, because only the gradient changes.
        "沒有影響，因為只有斜率改變。",
      ],
      hints: [
        // EN: Does the pressure rise by more or by less than it would if all the air were heated?
        "壓強上升的幅度，比所有空氣都被加熱時多還是少？",
        // EN: A shallower line through the same starting point meets the temperature axis where?
        "一條從相同起點出發、較平的直線，會在哪裏與溫度軸相交？",
      ],
      // EN: <p>Some of the gas is not heated, so the pressure rises by less than expected. The gradient of the line is too small. Extended backwards from the same point, a shallower line meets the temperature axis further from 0 °C, so the estimate is more negative than −273 °C.</p>
      solution: "<p>部分氣體沒有被加熱，所以壓強上升得比預期少。直線的斜率太小。從同一點向後延長，較平的直線會在離 0 °C 較遠的地方與溫度軸相交，所以估算值比 −273 °C 更負。</p>",
      misconception: {
        // EN (option B): Think about the gradient. Part of the gas is not heated, so the pressure rises less than it should. A shallower line meets the temperature axis further to the left.
        "1": "想想斜率。部分氣體沒有被加熱，所以壓強上升得比應有的少。較平的直線會在更左邊與溫度軸相交。",
        // EN (option C): The amount is constant, but not all of the gas is at the bath temperature. That changes how much the pressure rises.
        "2": "物質的量不變，但並非所有氣體都處於水浴溫度。這會改變壓強上升的幅度。",
        // EN (option D): The estimate of absolute zero comes from the gradient and the intercept together. A smaller gradient moves the point where the line meets the axis.
        "3": "絕對零度的估算值同時取決於斜率和截距。較小的斜率會移動直線與軸相交的位置。",
      },
    },

    // ── lab-gas-laws-q004 · short · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q004": {
      // EN: <p>In the fixed-volume experiment, the student is told to stir the water and wait until the pressure reading is steady before each reading. Explain why, and state how the readings would be affected if the student did not wait while heating the bath.</p>
      stem: "<p>在體積固定的實驗中，學生被告知每次讀數前要攪拌水，並等候壓強讀數穩定。解釋 (explain) 原因，並寫出 (state) 如果學生在加熱水浴時沒有等候，讀數會受到甚麼影響。</p>",
      hints: [
        // EN: Which is measured by the thermometer: the gas or the water?
        "溫度計量度的是哪一樣：氣體還是水？",
      ],
      // EN: <p>The gas inside the flask takes time to reach the temperature of the water, because heat must pass through the glass. If the student reads at once while heating, the gas is cooler than the thermometer reading, so the pressure recorded is too low for the temperature recorded.</p>
      answer: "<p>燒瓶內的氣體需要時間才能達到水的溫度，因為熱必須穿過玻璃傳遞。如果學生在加熱時立即讀數，氣體比溫度計讀數冷，所以記錄的壓強相對於記錄的溫度太低。</p>",
      markscheme: [
        // EN: The gas (inside the flask) takes time to reach the temperature of the water / thermal equilibrium must be reached.
        "（燒瓶內的）氣體需要時間才能達到水的溫度／必須達到熱平衡。",
        // EN: Without waiting, the gas is cooler than the recorded temperature, so the pressure is too low (for each recorded temperature).
        "沒有等候的話，氣體比記錄的溫度冷，所以（在每個記錄的溫度下）壓強太低。",
      ],
    },

    // ── lab-gas-laws-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q005": {
      // EN: <p>A student’s estimate of absolute zero is −259 °C. Calculate the percentage error, using −273 °C as the literature value.</p>
      stem: "<p>一名學生估算的絕對零度是 −259 °C。以 −273 °C 為文獻值，計算 (calculate) 百分誤差。</p>",
      hints: [
        // EN: Percentage error = |experimental value − literature value| ÷ |literature value| × 100.
        "百分誤差 = |實驗值 − 文獻值| ÷ |文獻值| × 100。",
      ],
      // EN: <div class="worked__math">percentage error = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>
      solution: "<div class=\"worked__math\">百分誤差 = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>",
    },

    // ── lab-gas-laws-q006 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "lab-gas-laws-q006": {
      // EN: <p>A gas syringe contains 60.0 <span class="unit">cm3</span> of air at 101.2 kPa. The plunger is pushed in slowly to 40.0 <span class="unit">cm3</span>. The temperature does not change and no gas escapes. Calculate the new pressure, in kPa.</p>
      stem: "<p>一支氣體注射器裝有 60.0 <span class=\"unit\">cm3</span> 101.2 kPa 的空氣。活塞被慢慢推入至 40.0 <span class=\"unit\">cm3</span>。溫度不變，也沒有氣體逸出。計算 (calculate) 新的壓強，以 kPa 表示。</p>",
      hints: [
        // EN: At constant temperature and amount, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>. The volume units cancel, so you do not need to convert them.
        "溫度和物質的量不變時，<i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>。體積單位會互相抵消，所以不需要換算。",
      ],
      // EN: <div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>The volume falls to two-thirds, so the pressure rises by a factor of 1.5.</p>
      solution: "<div class=\"worked__math\"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>體積下降至三分之二，所以壓強上升至 1.5 倍。</p>",
    },

    // ── lab-gas-laws-q007 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q007": {
      // EN: <p>In an experiment to find how the pressure of a gas depends on its volume, which variables must be controlled?</p>
      stem: "<p>在探究氣體壓強怎樣取決於體積的實驗中，哪些變量必須受到控制？</p>",
      options: [
        // EN: The temperature and the amount of gas
        "溫度和氣體的物質的量",
        // EN: The pressure and the temperature
        "壓強和溫度",
        // EN: The volume and the amount of gas
        "體積和氣體的物質的量",
        // EN: The temperature only
        "只有溫度",
      ],
      hints: [
        // EN: <i>PV</i> = <i>nRT</i>. Which quantities are not <i>P</i> or <i>V</i>?
        "<i>PV</i> = <i>nRT</i>。哪些量不是 <i>P</i> 或 <i>V</i>？",
      ],
      // EN: <p><i>V</i> is the independent variable and <i>P</i> the dependent variable. In <i>PV</i> = <i>nRT</i>, the other two quantities, <i>n</i> and <i>T</i>, must be kept constant (<i>R</i> is a constant anyway). So the syringe must not leak and the temperature must not change.</p>
      solution: "<p><i>V</i> 是自變量，<i>P</i> 是應變量。在 <i>PV</i> = <i>nRT</i> 中，另外兩個量 <i>n</i> 和 <i>T</i> 必須保持不變（<i>R</i> 本身就是常數）。所以注射器不可漏氣，溫度也不可改變。</p>",
      misconception: {
        // EN (option B): Pressure is the dependent variable here. It is what you measure, so it cannot be kept constant.
        "1": "在這裏壓強是應變量。它是你量度的量，所以不能保持不變。",
        // EN (option C): Volume is the independent variable. It is what you change on purpose.
        "2": "體積是自變量。它是你刻意改變的量。",
        // EN (option D): If gas leaks out, the pressure falls for a reason that has nothing to do with the volume. The amount of gas must be kept constant too.
        "3": "如果氣體漏出，壓強會因與體積無關的原因而下降。氣體的物質的量也必須保持不變。",
      },
    },

    // ── lab-gas-laws-q008 · short · challenge · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q008": {
      // EN: <p>In a pressure–volume experiment at constant room temperature, a student calculates <i>PV</i> for each reading. <i>PV</i> falls steadily from 5080 kPa <span class="unit">cm3</span> at 100 <span class="unit">cm3</span> to 4990 kPa <span class="unit">cm3</span> at 30 <span class="unit">cm3</span>. Suggest <strong>two</strong> reasons for this trend.</p>
      stem: "<p>在一個室溫不變的壓強－體積實驗中，一名學生計算每個讀數的 <i>PV</i>。<i>PV</i> 由 100 <span class=\"unit\">cm3</span> 時的 5080 kPa <span class=\"unit\">cm3</span> 穩定地下降至 30 <span class=\"unit\">cm3</span> 時的 4990 kPa <span class=\"unit\">cm3</span>。提出 (suggest) 這個趨勢的<strong>兩個</strong>原因。</p>",
      hints: [
        // EN: <i>PV</i> = <i>nRT</i>. Which of <i>n</i> or <i>T</i> could have changed?
        "<i>PV</i> = <i>nRT</i>。<i>n</i> 或 <i>T</i> 哪一個可能改變了？",
        // EN: Is all of the trapped gas inside the syringe barrel?
        "被困住的氣體是否全部都在注射器的針筒內？",
      ],
      // EN: <p>Gas may leak out at the joints when it is compressed to a high pressure, so the amount of gas falls. Also, the gas in the tube to the sensor is not included in the syringe reading; its volume is a bigger fraction of the total at small volumes, so the measured <i>V</i> is too small by a larger percentage and <i>PV</i> appears to fall.</p>
      answer: "<p>氣體被壓縮至高壓時，可能從接駁處漏出，所以氣體的物質的量減少。此外，通往感應器的管內氣體沒有計入注射器讀數；體積小時，這些氣體佔總體積的比例較大，所以量得的 <i>V</i> 偏小的百分比較大，<i>PV</i> 看起來就下降了。</p>",
      markscheme: [
        // EN: Gas leaks (out of the syringe or joints) at higher pressure, so the amount of gas decreases.
        "在較高壓強下氣體（從注射器或接駁處）漏出，所以氣體的物質的量減少。",
        // EN: The volume of gas in the connecting tube (or sensor) is not included in <i>V</i>, and it is a larger fraction of the total at small syringe volumes.
        "連接管（或感應器）內氣體的體積沒有計入 <i>V</i>，而在注射器體積小時，它佔總體積的比例較大。",
        // EN: Accept: the temperature of the room fell during the experiment (readings at small volumes taken later).
        "接受：實驗期間室溫下降了（小體積的讀數較後才讀取）。",
      ],
    },

    // ── lab-gas-laws-q009 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q009": {
      // EN: <p>A thermometer has an uncertainty of ±0.5 °C. A water bath is heated from 20.0 °C to 80.0 °C. Calculate the percentage uncertainty in the temperature change.</p>
      stem: "<p>一支溫度計的不確定度是 ±0.5 °C。一個水浴由 20.0 °C 加熱至 80.0 °C。計算 (calculate) 溫度變化的百分不確定度。</p>",
      hints: [
        // EN: The temperature change uses two readings. For a difference, add the absolute uncertainties.
        "溫度變化用兩個讀數。求差時，把絕對不確定度相加。",
      ],
      // EN: <div class="worked__math">Δθ = 80.0 − 20.0 = 60.0 °C, uncertainty = ±(0.5 + 0.5) = ±1.0 °C</div><div class="worked__math">percentage uncertainty = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>M1 for ±1.0 °C, M2 for 1.7 %.</p>
      solution: "<div class=\"worked__math\">Δθ = 80.0 − 20.0 = 60.0 °C，不確定度 = ±(0.5 + 0.5) = ±1.0 °C</div><div class=\"worked__math\">百分不確定度 = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>M1：±1.0 °C；M2：1.7 %。</p>",
    },

    // ── lab-gas-laws-q010 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "lab-gas-laws-q010": {
      // EN: <p>A sealed flask of air is heated at constant volume. Which statement explains why the pressure increases?</p>
      stem: "<p>一個密封的空氣燒瓶在體積不變下被加熱。哪一項陳述解釋了壓強為甚麼增加？</p>",
      options: [
        // EN: The particles expand, so they hit the walls more often.
        "粒子膨脹，所以撞擊容器壁更頻密。",
        // EN: The particles move faster, so they hit the walls more often and with more force.
        "粒子移動得更快，所以撞擊容器壁更頻密，力也更大。",
        // EN: More particles are produced as the gas is heated.
        "氣體受熱時產生了更多粒子。",
        // EN: The intermolecular forces between the particles become weaker.
        "粒子之間的分子間引力變弱。",
      ],
      hints: [
        // EN: What happens to the kinetic energy of the particles when the temperature rises?
        "溫度上升時，粒子的動能怎樣改變？",
      ],
      // EN: <p>At a higher temperature the particles have more kinetic energy and move faster. In the same volume they collide with the walls more frequently and with greater force, so the pressure is higher.</p>
      solution: "<p>溫度較高時，粒子有較多動能，移動得較快。在相同體積中，它們與容器壁碰撞得更頻密，力也更大，所以壓強較高。</p>",
      misconception: {
        // EN (option A): Particles do not get bigger when heated. In the ideal gas model their volume is negligible anyway.
        "0": "粒子受熱時不會變大。在理想氣體模型中，粒子的體積本來就可以忽略。",
        // EN (option C): The flask is sealed. The number of particles stays the same.
        "2": "燒瓶是密封的。粒子的數目保持不變。",
        // EN (option D): The ideal gas model assumes there are no intermolecular forces at all. The rise in pressure comes from faster particles.
        "3": "理想氣體模型假設完全沒有分子間引力。壓強上升是因為粒子移動得更快。",
      },
    },

    // ── lab-gas-laws-q011 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q011": {
      // EN: <p>The volume of a fixed amount of gas at constant pressure is measured at several temperatures. Graph I shows volume against temperature in K. Graph II shows the same data against temperature in °C. Which statement is correct?</p>
      stem: "<p>在壓強不變時，量度固定物質的量的氣體在幾個溫度下的體積。圖表 I 顯示體積對開爾文溫度。圖表 II 顯示相同數據對攝氏溫度。哪一項陳述是正確的？</p>",
      options: [
        // EN: Both graphs are straight lines through the origin.
        "兩幅圖表都是穿過原點的直線。",
        // EN: Graph I passes through the origin. Graph II meets the temperature axis at about −273 °C.
        "圖表 I 穿過原點。圖表 II 在約 −273 °C 與溫度軸相交。",
        // EN: Graph II passes through the origin. Graph I meets the temperature axis at about 273 K.
        "圖表 II 穿過原點。圖表 I 在約 273 K 與溫度軸相交。",
        // EN: Graph I is steeper than graph II.
        "圖表 I 比圖表 II 陡。",
      ],
      hints: [
        // EN: At what temperature would an ideal gas have zero volume? Write it in both units.
        "理想氣體在甚麼溫度時體積為零？用兩種單位寫出。",
      ],
      // EN: <p>Volume is proportional to the absolute temperature, so graph I is a straight line through the origin (0 K). Graph II is the same line moved along by 273, so it meets the axis at about −273 °C. The gradients are the same, because a kelvin and a degree Celsius are the same size.</p>
      solution: "<p>體積與絕對溫度成正比，所以圖表 I 是一條穿過原點 (0 K) 的直線。圖表 II 是同一條直線沿軸移動了 273，所以它在約 −273 °C 與軸相交。兩者的斜率相同，因為 1 開爾文和 1 攝氏度的大小相同。</p>",
      misconception: {
        // EN (option A): At 0 °C a gas still has a volume. So the line in °C cannot pass through the origin.
        "0": "在 0 °C 時氣體仍有體積。所以以 °C 為單位的直線不可能穿過原點。",
        // EN (option C): It is the other way round. Zero volume is reached at 0 K, which is −273 °C.
        "2": "剛好相反。體積在 0 K 即 −273 °C 時才變為零。",
        // EN (option D): A change of 1 K is the same size as a change of 1 °C. The two lines have the same gradient; one is just shifted along the axis.
        "3": "1 K 的變化與 1 °C 的變化大小相同。兩條直線的斜率相同；其中一條只是沿軸移動了。",
      },
    },

    // ── lab-gas-laws-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "lab-gas-laws-q012": {
      // EN: <p>A sealed flask of air reads 100.4 kPa at 20.0 °C. Assuming the volume and amount of gas are constant, calculate the pressure expected at 90.0 °C, in kPa.</p>
      stem: "<p>一個密封的空氣燒瓶在 20.0 °C 時讀數是 100.4 kPa。假設氣體的體積和物質的量不變，計算 (calculate) 在 90.0 °C 時預期的壓強，以 kPa 表示。</p>",
      hints: [
        // EN: Pressure is proportional to the absolute temperature. Convert both temperatures to kelvin first.
        "壓強與絕對溫度成正比。先把兩個溫度換算為開爾文。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K; <i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>Using °C (100.4 × 90.0 ÷ 20.0 = 452 kPa) is the classic mistake. M1 for kelvin temperatures.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K；<i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class=\"worked__math\"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>用 °C（100.4 × 90.0 ÷ 20.0 = 452 kPa）是典型的錯誤。M1：使用開爾文溫度。</p>",
    },

    // ── lab-gas-laws-q013 · order · foundation · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q013": {
      // EN: <p>Put these steps of the fixed-volume experiment in a sensible order.</p>
      stem: "<p>把體積固定的實驗步驟按合理的次序排列。</p>",
      options: [
        // EN: Clamp a dry flask in a beaker of ice and water and join it to a pressure sensor.
        "把乾燥的燒瓶夾在裝有冰水的燒杯中，並連接到壓強感應器。",
        // EN: Stir, wait until the readings are steady, and record the temperature and the pressure.
        "攪拌，等候讀數穩定，然後記錄溫度和壓強。",
        // EN: Raise the temperature of the bath by about 10 °C.
        "把水浴的溫度升高約 10 °C。",
        // EN: Repeat the readings up to about 90 °C.
        "重複讀數直至約 90 °C。",
        // EN: Plot pressure against temperature in °C and extrapolate the line of best fit to zero pressure.
        "繪畫壓強對攝氏溫度的圖表，並把最佳擬合線外推至壓強為零。",
      ],
      hints: [
        // EN: You must be able to take the first reading before you change anything.
        "在改變任何東西之前，你必須能夠讀取第一個讀數。",
      ],
      // EN: <p>Set up the flask at the lowest temperature, take a steady reading, raise the temperature, and repeat across the range. Only then plot the graph and extrapolate it.</p>
      solution: "<p>在最低溫度裝好燒瓶，讀取穩定的讀數，升高溫度，然後在整個範圍內重複。之後才繪畫圖表並外推。</p>",
    },

    // ── lab-gas-laws-q014 · mcq · challenge · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q014": {
      // EN: <p>A student’s line of best fit meets the temperature axis at −270 °C. The steepest and shallowest lines that fit the error bars meet the axis at −259 °C and −281 °C. Which is the best conclusion? (Literature value: −273 °C.)</p>
      stem: "<p>一名學生的最佳擬合線在 −270 °C 與溫度軸相交。符合誤差棒的最陡和最平直線分別在 −259 °C 和 −281 °C 與軸相交。哪一項是最好的結論？（文獻值：−273 °C。）</p>",
      options: [
        // EN: Absolute zero = −270 ± 11 °C. The literature value lies within this range, so random error can explain the difference.
        "絕對零度 = −270 ± 11 °C。文獻值在這個範圍之內，所以隨機誤差可以解釋這個差異。",
        // EN: Absolute zero = −270 ± 22 °C. The literature value lies within this range.
        "絕對零度 = −270 ± 22 °C。文獻值在這個範圍之內。",
        // EN: Absolute zero = −270 ± 11 °C. The result is not −273 °C, so there must be a systematic error.
        "絕對零度 = −270 ± 11 °C。結果不是 −273 °C，所以一定有系統誤差。",
        // EN: Absolute zero = −270 ± 0.5 °C, because the thermometer has an uncertainty of ±0.5 °C.
        "絕對零度 = −270 ± 0.5 °C，因為溫度計的不確定度是 ±0.5 °C。",
      ],
      hints: [
        // EN: The uncertainty is half of the range between the worst-fit values.
        "不確定度是兩個最差擬合值之間範圍的一半。",
        // EN: Is the 3 °C difference bigger or smaller than the uncertainty?
        "3 °C 的差異比不確定度大還是小？",
      ],
      // EN: <p>Half the range: (−259 − (−281)) ÷ 2 = 11 °C, so the result is −270 ± 11 °C. The literature value, −273 °C, lies inside −281 °C to −259 °C. The difference is smaller than the uncertainty, so random error alone could explain it.</p>
      solution: "<p>範圍的一半：(−259 − (−281)) ÷ 2 = 11 °C，所以結果是 −270 ± 11 °C。文獻值 −273 °C 在 −281 °C 至 −259 °C 之內。差異小於不確定度，所以單憑隨機誤差已可解釋它。</p>",
      misconception: {
        // EN (option B): The whole range from −281 °C to −259 °C is 22 °C wide. The uncertainty is half of that, on either side of the best value.
        "1": "由 −281 °C 至 −259 °C 的整個範圍寬 22 °C。不確定度是它的一半，在最佳值的兩邊。",
        // EN (option C): A difference from the literature value does not prove a systematic error. Here the difference (3 °C) is smaller than the uncertainty (11 °C).
        "2": "與文獻值有差異，並不證明有系統誤差。這裏的差異 (3 °C) 小於不確定度 (11 °C)。",
        // EN (option D): The uncertainty of an extrapolated value is far bigger than the uncertainty of one reading. A small error in the gradient is magnified over 270 °C.
        "3": "外推值的不確定度遠大於單一讀數的不確定度。斜率的小誤差經過 270 °C 被放大了。",
      },
    },

  }
});
