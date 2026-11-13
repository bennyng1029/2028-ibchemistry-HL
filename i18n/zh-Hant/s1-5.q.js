/* s1-5.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-5.q', {
  questions: {

    // ── s1-5-q001 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q001": {
      // EN: <p>Which statement is an assumption of the ideal gas model?</p>
      stem: "<p>以下哪一項是理想氣體模型的假設 (assumption)？</p>",
      options: [
        // EN: The particles attract each other weakly.
        "粒子之間有微弱的吸引。",
        // EN: A small amount of kinetic energy is lost in each collision.
        "每次碰撞都會損失少量動能。",
        // EN: The particles have negligible volume.
        "粒子的體積可忽略。",
        // EN: The particles have negligible mass.
        "粒子的質量可忽略。",
      ],
      hints: [
        // EN: There are four assumptions: moving particles, negligible particle volume, no intermolecular forces, elastic collisions.
        "共有四個假設：粒子在運動、粒子體積可忽略、沒有分子間引力、彈性碰撞。",
      ],
      // EN: <p>The ideal gas model assumes the particles themselves take up a negligible part of the volume of the container. It also assumes moving particles, no intermolecular forces and elastic collisions.</p>
      solution: "<p>理想氣體模型假設粒子本身只佔容器體積中可忽略的一部分。模型還假設粒子在運動、沒有分子間引力，以及碰撞是彈性的。</p>",
      misconception: {
        // EN (option A): The model assumes there are no intermolecular forces at all, not weak ones. Weak attractions describe a real gas.
        "0": "模型假設完全沒有分子間引力，而不是引力微弱。有微弱吸引的是真實氣體。",
        // EN (option B): That would be an inelastic collision. The model assumes collisions are elastic, so no kinetic energy is lost overall.
        "1": "那是非彈性碰撞。模型假設碰撞是彈性的，所以整體沒有損失動能。",
        // EN (option D): Ideal gas particles do have mass. It is their volume that is taken to be negligible.
        "3": "理想氣體的粒子有質量。假設為可忽略的是粒子的體積。",
      },
    },

    // ── s1-5-q002 · multi · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q002": {
      // EN: <p>Select <strong>all</strong> the assumptions of the ideal gas model.</p>
      stem: "<p>選出理想氣體模型的<strong>所有</strong>假設。</p>",
      options: [
        // EN: The gas consists of moving particles.
        "氣體由運動中的粒子組成。",
        // EN: All the particles move at the same speed.
        "所有粒子以相同的速率運動。",
        // EN: The particles have negligible volume.
        "粒子的體積可忽略。",
        // EN: There are no intermolecular forces between the particles.
        "粒子之間沒有分子間引力。",
        // EN: The particles have negligible mass.
        "粒子的質量可忽略。",
        // EN: All collisions between particles are elastic.
        "粒子之間的所有碰撞都是彈性碰撞。",
      ],
      hints: [
        // EN: There are exactly four correct statements.
        "剛好有四項正確。",
        // EN: Two of the four are about the particles themselves (their volume, the forces between them). One is about collisions.
        "四項之中，兩項關於粒子本身（粒子的體積、粒子之間的力），一項關於碰撞。",
      ],
      // EN: <p>The four assumptions are: moving particles; negligible particle volume; no intermolecular forces; elastic collisions.</p>
      solution: "<p>四個假設是：粒子在運動；粒子體積可忽略；沒有分子間引力；彈性碰撞。</p>",
      misconception: {
        // EN (option B): The model does not say this. The particles are moving, but nothing requires them all to have the same speed.
        "1": "模型沒有這樣說。粒子在運動，但沒有要求所有粒子的速率相同。",
        // EN (option E): The particles have mass. A gas can be weighed. It is the volume of the particles that is negligible.
        "4": "粒子有質量，氣體是可以稱重的。可忽略的是粒子的體積。",
      },
    },

    // ── s1-5-q003 · mcq · foundation · SL · Structure 1.5.2 · 1 mark
    "s1-5-q003": {
      // EN: <p>Under which conditions does a real gas behave <strong>most</strong> like an ideal gas?</p>
      stem: "<p>真實氣體在甚麼條件下<strong>最</strong>接近理想氣體？</p>",
      options: [
        // EN: High temperature and high pressure
        "高溫和高壓",
        // EN: High temperature and low pressure
        "高溫和低壓",
        // EN: Low temperature and high pressure
        "低溫和高壓",
        // EN: Low temperature and low pressure
        "低溫和低壓",
      ],
      hints: [
        // EN: When are the particles far apart? When are they moving too fast for attractions to matter?
        "粒子在甚麼時候相距很遠？在甚麼時候運動得太快，以致吸引起不了作用？",
      ],
      // EN: <p>At <strong>low pressure</strong> the particles are far apart, so their volume is negligible compared with the container. At <strong>high temperature</strong> they move fast, so intermolecular forces have little effect. Both assumptions of the model then hold well.</p>
      solution: "<p>在<strong>低壓</strong>下，粒子相距很遠，所以粒子的體積和容器相比可以忽略。在<strong>高溫</strong>下，粒子運動得快，所以分子間引力的影響很小。這時模型的兩個假設都很成立。</p>",
      misconception: {
        // EN (option A): The high temperature helps, but high pressure pushes the particles close together, so their own volume is no longer negligible.
        "0": "高溫有幫助，但高壓把粒子擠得很近，所以粒子本身的體積不再可以忽略。",
        // EN (option C): These are the conditions where a real gas deviates most. Slow, crowded particles are where gases turn into liquids.
        "2": "這是真實氣體偏離得最多的條件。粒子又慢又擠迫，氣體就會變成液體。",
        // EN (option D): The low pressure helps, but at low temperature the particles move slowly, so intermolecular forces become significant.
        "3": "低壓有幫助，但在低溫下粒子運動慢，所以分子間引力變得顯著。",
      },
    },

    // ── s1-5-q004 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q004": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 0.300 mol of an ideal gas at STP.</p>
      stem: "<p>計算 0.300 mol 理想氣體在 STP 下所佔的體積，以 <span class=\"unit\">dm3</span> 表示。</p>",
      hints: [
        // EN: The data booklet gives the molar volume of an ideal gas at STP.
        "數據手冊列出理想氣體在 STP 下的摩爾體積。",
        // EN: <span class="mono">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "<span class=\"mono\">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>",
      ],
      // EN: <div class="worked__math">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>
      solution: "<div class=\"worked__math\">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>",
    },

    // ── s1-5-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q005": {
      // EN: <p>A sample of argon occupies 4540 <span class="unit">cm3</span> at STP. Calculate the amount of argon, in mol.</p>
      stem: "<p>一個氬氣樣本在 STP 下佔 4540 <span class=\"unit\">cm3</span>。計算氬的物質的量，以 mol 表示。</p>",
      hints: [
        // EN: Convert the volume to dm<sup>3</sup> first: divide by 1000.
        "先把體積換算成 dm<sup>3</sup>：除以 1000。",
        // EN: <span class="mono">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "<span class=\"mono\">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>",
      ],
      // EN: <div class="worked__math">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class="worked__math">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>
      solution: "<div class=\"worked__math\">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class=\"worked__math\">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>",
    },

    // ── s1-5-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q006": {
      // EN: <p>A fixed mass of an ideal gas is kept at constant temperature. Which description fits a graph of pressure (vertical axis) against volume (horizontal axis)?</p>
      stem: "<p>固定質量的理想氣體保持在恆定溫度。以下哪一項描述符合壓強（縱軸）對體積（橫軸）的圖？</p>",
      options: [
        // EN: A straight line through the origin with a positive gradient
        "一條通過原點、斜率為正的直線",
        // EN: A straight line with a negative gradient that reaches zero pressure
        "一條斜率為負、會到達零壓強的直線",
        // EN: A curve that falls steeply at first and then levels off, without touching either axis
        "一條起初急降、然後漸趨平緩的曲線，不接觸任何一條軸",
        // EN: A horizontal straight line
        "一條水平直線",
      ],
      hints: [
        // EN: If the volume doubles, what happens to the pressure? And if it doubles again?
        "如果體積加倍，壓強會怎樣？再加倍呢？",
      ],
      // EN: <p>At constant temperature, <span class="mono">PV = constant</span>, so pressure is inversely proportional to volume. Each doubling of V halves P. This gives a falling curve that gets closer to both axes without touching them.</p>
      solution: "<p>溫度不變時，<span class=\"mono\">PV = 常數</span>，所以壓強與體積成反比。V 每加倍一次，P 就減半。這樣得出一條下降的曲線，越來越接近兩條軸，但不會碰到。</p>",
      misconception: {
        // EN (option A): That would mean pressure is directly proportional to volume. Squeezing a gas into a smaller volume raises its pressure, so the two move in opposite directions.
        "0": "這表示壓強與體積成正比。但把氣體壓縮到較小的體積，壓強會上升，所以兩者的變化方向相反。",
        // EN (option B): Inverse proportion is not a straight line going down. The pressure halves each time the volume doubles, so it never reaches zero.
        "1": "反比並不是一條向下的直線。體積每加倍一次，壓強就減半，所以永遠不會到達零。",
        // EN (option D): A horizontal line is the graph of PV against P. Pressure itself changes when the volume changes.
        "3": "水平線是 PV 對 P 的圖。體積改變時，壓強本身會改變。",
      },
    },

    // ── s1-5-q007 · mcq · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q007": {
      // EN: <p>What is 250 <span class="unit">cm3</span> expressed in <span class="unit">m3</span>?</p>
      stem: "<p>250 <span class=\"unit\">cm3</span> 以 <span class=\"unit\">m3</span> 表示是多少？</p>",
      options: [
        // EN: <span class="mono">0.250 m<sup>3</sup></span>
        "<span class=\"mono\">0.250 m<sup>3</sup></span>",
        // EN: <span class="mono">2.50 m<sup>3</sup></span>
        "<span class=\"mono\">2.50 m<sup>3</sup></span>",
        // EN: <span class="mono">2.50 × 10<sup>−4</sup> m<sup>3</sup></span>
        "<span class=\"mono\">2.50 × 10<sup>−4</sup> m<sup>3</sup></span>",
        // EN: <span class="mono">2.50 × 10<sup>8</sup> m<sup>3</sup></span>
        "<span class=\"mono\">2.50 × 10<sup>8</sup> m<sup>3</sup></span>",
      ],
      hints: [
        // EN: 1 m<sup>3</sup> = 1000 dm<sup>3</sup> and 1 dm<sup>3</sup> = 1000 cm<sup>3</sup>.
        "1 m<sup>3</sup> = 1000 dm<sup>3</sup>，1 dm<sup>3</sup> = 1000 cm<sup>3</sup>。",
      ],
      // EN: <div class="worked__math">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class="worked__math">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>In one step: divide cm<sup>3</sup> by 10<sup>6</sup> to get m<sup>3</sup>.</p>
      solution: "<div class=\"worked__math\">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class=\"worked__math\">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>一步完成：把以 cm<sup>3</sup> 表示的數值除以 10<sup>6</sup>，就得到 m<sup>3</sup>。</p>",
      misconception: {
        // EN (option A): Dividing by 1000 gives the volume in dm<sup>3</sup>, not m<sup>3</sup>. You need to divide by 1000 again.
        "0": "除以 1000 得到的是以 dm<sup>3</sup> 表示的體積，不是 m<sup>3</sup>。你要再除以 1000。",
        // EN (option B): There are 100 cm in 1 m, but volume is length cubed: 1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>.
        "1": "1 m 有 100 cm，但體積是長度的三次方：1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>。",
        // EN (option D): You multiplied by 10<sup>6</sup> instead of dividing. A cubic metre is much bigger than a cubic centimetre, so the number must get smaller.
        "3": "你乘以了 10<sup>6</sup>，而不是除以。一立方米比一立方厘米大得多，所以數字必須變小。",
      },
    },

    // ── s1-5-q008 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q008": {
      // EN: <p>Calculate the pressure, in kPa, of 1.00 mol of an ideal gas in a 10.0 <span class="unit">dm3</span> container at 300 K.</p>
      stem: "<p>1.00 mol 理想氣體在 300 K 下裝在 10.0 <span class=\"unit\">dm3</span> 的容器內。計算氣體的壓強，以 kPa 表示。</p>",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for P.
        "把 <span class=\"mono\">PV = nRT</span> 重排成求 P 的形式。",
        // EN: With V in dm<sup>3</sup>, the pressure comes out in kPa: <span class="mono">P = (1.00 × 8.31 × 300) ÷ 10.0</span>
        "V 以 dm<sup>3</sup> 為單位時，壓強的單位是 kPa：<span class=\"mono\">P = (1.00 × 8.31 × 300) ÷ 10.0</span>",
      ],
      // EN: <div class="worked__math">P = nRT ÷ V</div><div class="worked__math">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>To 3 significant figures: <strong>249 kPa</strong>.</p>
      solution: "<div class=\"worked__math\">P = nRT ÷ V</div><div class=\"worked__math\">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>取至 3 位有效數字：<strong>249 kPa</strong>。</p>",
    },

    // ── s1-5-q009 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q009": {
      // EN: <p>A fixed mass of an ideal gas is compressed to half its original volume at constant temperature. What happens to the pressure?</p>
      stem: "<p>固定質量的理想氣體在恆定溫度下壓縮至原來體積的一半。壓強會怎樣？</p>",
      options: [
        // EN: It halves.
        "減半。",
        // EN: It stays the same.
        "保持不變。",
        // EN: It doubles.
        "加倍。",
        // EN: It becomes four times larger.
        "變成四倍。",
      ],
      hints: [
        // EN: At constant temperature, <span class="mono">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>.
        "溫度不變時，<span class=\"mono\">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>。",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>The pressure doubles.</p>
      solution: "<div class=\"worked__math\">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>壓強加倍。</p>",
      misconception: {
        // EN (option A): That would be direct proportion. Pressure and volume are inversely proportional: when one goes down, the other goes up.
        "0": "那是正比。壓強與體積成反比：一個下降，另一個就上升。",
        // EN (option B): The same particles now hit a smaller wall area more often, so the pressure must rise.
        "1": "同樣的粒子現在更頻密地撞擊面積較小的容器壁，所以壓強一定上升。",
        // EN (option D): The relationship is P ∝ 1/V, not 1/V<sup>2</sup>. Halving V multiplies P by 2, not 4.
        "3": "關係是 P ∝ 1/V，不是 1/V<sup>2</sup>。V 減半令 P 乘以 2，不是 4。",
      },
    },

    // ── s1-5-q010 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q010": {
      // EN: <p>A gas occupies 3.00 <span class="unit">dm3</span> at 300 K. It is heated to 450 K at constant pressure. Calculate the new volume, in <span class="unit">dm3</span>.</p>
      stem: "<p>一種氣體在 300 K 下佔 3.00 <span class=\"unit\">dm3</span>。在壓強不變的情況下把它加熱至 450 K。計算新的體積，以 <span class=\"unit\">dm3</span> 表示。</p>",
      hints: [
        // EN: The pressure is constant, so it cancels from the combined gas law.
        "壓強不變，所以它在聯合氣體定律中抵消。",
        // EN: <span class="mono">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>
        "<span class=\"mono\">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>",
      ],
      // EN: <div class="worked__math">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class="worked__math">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>
      solution: "<div class=\"worked__math\">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class=\"worked__math\">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>",
    },

    // ── s1-5-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q011": {
      // EN: <p>A sealed, rigid container of gas is heated from 25 °C to 50 °C. What happens to the pressure of the gas?</p>
      stem: "<p>一個密封的堅硬容器裝有氣體，由 25 °C 加熱至 50 °C。氣體的壓強會怎樣？</p>",
      options: [
        // EN: It doubles.
        "加倍。",
        // EN: It increases by about 8 %.
        "增加約 8%。",
        // EN: It halves.
        "減半。",
        // EN: It stays the same because the container is rigid.
        "保持不變，因為容器是堅硬的。",
      ],
      hints: [
        // EN: Convert both temperatures to kelvin before comparing them.
        "比較之前，先把兩個溫度換算成開爾文。",
        // EN: At constant volume, <span class="mono">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>.
        "體積不變時，<span class=\"mono\">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>。",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class="worked__math">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>The pressure rises by about 8 %.</p>
      solution: "<div class=\"worked__math\">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class=\"worked__math\">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>壓強上升約 8%。</p>",
      misconception: {
        // EN (option A): You used the Celsius values. Pressure is proportional to temperature in kelvin: 298 K to 323 K is far from a doubling.
        "0": "你用了攝氏溫度的數值。壓強與開爾文溫度成正比：由 298 K 到 323 K，遠遠不到兩倍。",
        // EN (option C): Pressure and temperature are directly proportional, so heating raises the pressure. Also check you used kelvin.
        "2": "壓強與溫度成正比，所以加熱會令壓強上升。也要檢查你是否用了開爾文。",
        // EN (option D): A rigid container keeps the volume constant, not the pressure. Faster particles hit the walls harder and more often.
        "3": "堅硬的容器令體積不變，而不是令壓強不變。粒子運動加快，撞擊容器壁更用力，也更頻密。",
      },
    },

    // ── s1-5-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q012": {
      // EN: <p>A gas sample has a volume of 450 <span class="unit">cm3</span> at 27.0 °C and 98.0 kPa. Calculate the volume, in <span class="unit">cm3</span>, that the same sample would occupy at STP.</p>
      stem: "<p>一個氣體樣本在 27.0 °C 和 98.0 kPa 下的體積是 450 <span class=\"unit\">cm3</span>。計算同一樣本在 STP 下所佔的體積，以 <span class=\"unit\">cm3</span> 表示。</p>",
      hints: [
        // EN: STP is 273.15 K and 100 kPa. Use the combined gas law.
        "STP 是 273.15 K 和 100 kPa。使用聯合氣體定律。",
        // EN: T<sub>1</sub> = 300.15 K. <span class="mono">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>
        "T<sub>1</sub> = 300.15 K。<span class=\"mono\">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class="worked__math">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class="worked__math">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>To 3 significant figures: <strong>401 cm<sup>3</sup></strong>. Cooling and a slightly higher pressure both make the volume smaller, so this is sensible.</p>
      solution: "<div class=\"worked__math\">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class=\"worked__math\">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class=\"worked__math\">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>取至 3 位有效數字：<strong>401 cm<sup>3</sup></strong>。冷卻和稍高的壓強都令體積變小，所以這個答案合理。</p>",
    },

    // ── s1-5-q013 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q013": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 2.00 g of helium at 20.0 °C and 101 kPa.</p>
      stem: "<p>計算 2.00 g 氦氣在 20.0 °C 和 101 kPa 下所佔的體積，以 <span class=\"unit\">dm3</span> 表示。</p>",
      hints: [
        // EN: Find the amount of helium first: <span class="mono">n = m ÷ M</span>, with <i>A</i><sub>r</sub>(He) = 4.00.
        "先求氦的物質的量：<span class=\"mono\">n = m ÷ M</span>，其中 <i>A</i><sub>r</sub>(He) = 4.00。",
        // EN: Then <span class="mono">V = nRT ÷ P</span> with T = 293.15 K. With P in kPa, V is in dm<sup>3</sup>.
        "然後用 <span class=\"mono\">V = nRT ÷ P</span>，T = 293.15 K。P 以 kPa 為單位時，V 的單位是 dm<sup>3</sup>。",
      ],
      // EN: <div class="worked__math">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>To 3 significant figures: <strong>12.1 dm<sup>3</sup></strong>.</p>
      solution: "<div class=\"worked__math\">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>取至 3 位有效數字：<strong>12.1 dm<sup>3</sup></strong>。</p>",
    },

    // ── s1-5-q014 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q014": {
      // EN: <p>A 500 <span class="unit">cm3</span> flask contains nitrogen gas, <span class="chem">N2</span>, at 15.0 °C and 120 kPa. Calculate the mass of nitrogen in the flask, in g.</p>
      stem: "<p>一個 500 <span class=\"unit\">cm3</span> 的燒瓶在 15.0 °C 和 120 kPa 下裝有氮氣 <span class=\"chem\">N2</span>。計算燒瓶內氮氣的質量，以 g 表示。</p>",
      hints: [
        // EN: Convert first: 500 cm<sup>3</sup> to dm<sup>3</sup>, and 15.0 °C to K.
        "先換算：500 cm<sup>3</sup> 換成 dm<sup>3</sup>，15.0 °C 換成 K。",
        // EN: <span class="mono">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>
        "<span class=\"mono\">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>",
        // EN: Then <span class="mono">m = n × M</span>. Nitrogen gas is N<sub>2</sub>, so M = 28.02 g mol<sup>−1</sup>.
        "然後 <span class=\"mono\">m = n × M</span>。氮氣是 N<sub>2</sub>，所以 M = 28.02 g mol<sup>−1</sup>。",
      ],
      // EN: <div class="worked__math">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class="worked__math">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class="worked__math">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class="worked__math">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>To 3 significant figures: <strong>0.702 g</strong>.</p>
      solution: "<div class=\"worked__math\">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class=\"worked__math\">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class=\"worked__math\">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class=\"worked__math\">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>取至 3 位有效數字：<strong>0.702 g</strong>。</p>",
    },

    // ── s1-5-q015 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q015": {
      // EN: <p>0.412 g of an unknown gas occupies 185 <span class="unit">cm3</span> at 35.0 °C and 99.0 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>0.412 g 未知氣體在 35.0 °C 和 99.0 kPa 下佔 185 <span class=\"unit\">cm3</span>。計算這種氣體的摩爾質量，以 <span class=\"unit\">g mol-1</span> 表示。</p>",
      hints: [
        // EN: Two links: the gas equation gives the amount, then molar mass is mass ÷ amount.
        "分兩步：先用氣體方程求物質的量，然後摩爾質量是質量 ÷ 物質的量。",
        // EN: <span class="mono">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>
        "<span class=\"mono\">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>",
      ],
      // EN: <div class="worked__math">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class="worked__math">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class="worked__math">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>57.6 g mol<sup>−1</sup></strong>.</p>
      solution: "<div class=\"worked__math\">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class=\"worked__math\">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class=\"worked__math\">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>取至 3 位有效數字：<strong>57.6 g mol<sup>−1</sup></strong>。</p>",
    },

    // ── s1-5-q016 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q016": {
      // EN: <p>Which graph, for a fixed mass of an ideal gas, is a straight line that passes through the origin?</p>
      stem: "<p>對於固定質量的理想氣體，以下哪一幅圖是通過原點的直線？</p>",
      options: [
        // EN: Pressure against volume, at constant temperature
        "溫度不變時，壓強對體積",
        // EN: Pressure against 1/volume, at constant temperature
        "溫度不變時，壓強對 1/體積",
        // EN: Volume against temperature in °C, at constant pressure
        "壓強不變時，體積對攝氏溫度 (°C)",
        // EN: Pressure × volume against pressure, at constant temperature
        "溫度不變時，壓強 × 體積對壓強",
      ],
      hints: [
        // EN: A straight line through the origin means the two plotted quantities are directly proportional.
        "通過原點的直線，表示圖中的兩個量成正比。",
      ],
      // EN: <p>At constant temperature <span class="mono">P = nRT × (1/V)</span>, so P is directly proportional to 1/V. Plotting P against 1/V gives a straight line through the origin with gradient nRT.</p>
      solution: "<p>溫度不變時，<span class=\"mono\">P = nRT × (1/V)</span>，所以 P 與 1/V 成正比。用 P 對 1/V 作圖，得到一條通過原點的直線，斜率是 nRT。</p>",
      misconception: {
        // EN (option A): P against V is a falling curve, because P is inversely proportional to V.
        "0": "P 對 V 的圖是一條下降的曲線，因為 P 與 V 成反比。",
        // EN (option C): This is a straight line, but it does not pass through the origin. At 0 °C the gas still has a volume. The line reaches zero volume at −273.15 °C.
        "2": "這是一條直線，但不通過原點。在 0 °C 時氣體仍有體積。直線在 −273.15 °C 才到達零體積。",
        // EN (option D): PV is constant at constant temperature, so this graph is a horizontal line, not a line through the origin.
        "3": "溫度不變時 PV 不變，所以這幅圖是一條水平線，而不是通過原點的直線。",
      },
    },

    // ── s1-5-q017 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q017": {
      // EN: <p>Which sketch shows how the volume of a fixed mass of an ideal gas (vertical axis) changes with its temperature in <strong>°C</strong> (horizontal axis) at constant pressure? In each sketch the vertical axis is drawn at 0 on the horizontal scale.</p>
      stem: "<p>以下哪一幅略圖顯示，在壓強不變時，固定質量理想氣體的體積（縱軸）怎樣隨攝氏溫度（<strong>°C</strong>，橫軸）改變？每幅略圖的縱軸都畫在橫軸標度的 0 處。</p>",
      options: [
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that starts at the origin" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L104 16" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"一條由原點開始、斜率為正的直線\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 68 L104 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that crosses the vertical axis above zero; extended back with a dashed line it meets the horizontal axis at a negative value" style="vertical-align:middle"><path d="M16 68 H112 M44 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L44 48" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><path d="M44 48 L104 5.1" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="40" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"一條斜率為正的直線，在零以上與縱軸相交；用虛線向後延長，會在負值處與橫軸相交\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M44 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 68 L44 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><path d=\"M44 48 L104 5.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"40\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A curve that falls steeply and then levels off" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M24 12 C28 44 52 58 108 62" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"一條先急降、然後漸趨平緩的曲線\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M24 12 C28 44 52 58 108 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A horizontal straight line" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 30 H104" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"一條水平直線\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 30 H104\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
      ],
      hints: [
        // EN: Does a gas have zero volume at 0 °C?
        "氣體在 0 °C 時體積是零嗎？",
        // EN: Where would the volume of an ideal gas reach zero?
        "理想氣體的體積在哪個溫度才會到達零？",
      ],
      // EN: <p>Volume is directly proportional to temperature in kelvin. On a Celsius axis the same straight line is shifted: it crosses the volume axis above zero at 0 °C, and extrapolates back to zero volume at −273.15 °C (absolute zero).</p>
      solution: "<p>體積與開爾文溫度成正比。換成攝氏溫度軸，同一條直線會平移：在 0 °C 時，它在零以上與體積軸相交；向後外推，會在 −273.15 °C（絕對零度）到達零體積。</p>",
      misconception: {
        // EN (option A): This is the graph for temperature in kelvin. At 0 °C (273.15 K) a gas still has a volume, so the line cannot start at the origin.
        "0": "這是用開爾文溫度時的圖。在 0 °C (273.15 K) 時氣體仍有體積，所以直線不可能由原點開始。",
        // EN (option C): This is the shape of pressure against volume. Volume increases steadily with temperature.
        "2": "這是壓強對體積的圖的形狀。體積隨溫度穩定地增加。",
        // EN (option D): A horizontal line would mean the volume does not change on heating. At constant pressure a gas expands when heated.
        "3": "水平線表示加熱時體積不變。但在壓強不變時，氣體受熱會膨脹。",
      },
    },

    // ── s1-5-q018 · mcq · exam · SL · Structure 1.5.2 · 1 mark
    "s1-5-q018": {
      // EN: <p>The boiling points of four substances at 100 kPa are shown.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">helium, <span class="chem">He</span></th><td class="num">4</td></tr><tr><th scope="row">nitrogen, <span class="chem">N2</span></th><td class="num">77</td></tr><tr><th scope="row">methane, <span class="chem">CH4</span></th><td class="num">112</td></tr><tr><th scope="row">ammonia, <span class="chem">NH3</span></th><td class="num">240</td></tr></tbody></table></div><p>Which gas would you expect to deviate <strong>most</strong> from ideal behaviour at 300 K and 100 kPa?</p>
      stem: "<p>下表列出四種物質在 100 kPa 下的沸點。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">物質</th><th scope=\"col\" class=\"num\">沸點 / K</th></tr></thead><tbody><tr><th scope=\"row\">氦 <span class=\"chem\">He</span></th><td class=\"num\">4</td></tr><tr><th scope=\"row\">氮 <span class=\"chem\">N2</span></th><td class=\"num\">77</td></tr><tr><th scope=\"row\">甲烷 <span class=\"chem\">CH4</span></th><td class=\"num\">112</td></tr><tr><th scope=\"row\">氨 <span class=\"chem\">NH3</span></th><td class=\"num\">240</td></tr></tbody></table></div><p>在 300 K 和 100 kPa 下，你預期哪一種氣體<strong>最</strong>偏離理想行為？</p>",
      options: [
        // EN: Helium
        "氦 (helium)",
        // EN: Nitrogen
        "氮 (nitrogen)",
        // EN: Methane
        "甲烷 (methane)",
        // EN: Ammonia
        "氨 (ammonia)",
      ],
      hints: [
        // EN: A higher boiling point means stronger forces between the particles.
        "沸點較高，表示粒子之間的引力較強。",
        // EN: Which assumption of the ideal gas model is about forces?
        "理想氣體模型的哪一個假設與引力有關？",
      ],
      // EN: <p>Ammonia has the highest boiling point, so it has the strongest intermolecular forces. The ideal gas model assumes no intermolecular forces, so ammonia fits the model least well. At 300 K it is also the gas closest to its own boiling point.</p>
      solution: "<p>氨的沸點最高，所以它的分子間引力最強。理想氣體模型假設沒有分子間引力，所以氨最不符合模型。在 300 K 時，它也是最接近自己沸點的氣體。</p>",
      misconception: {
        // EN (option A): Helium has the lowest boiling point, so the weakest forces between its particles. It is the closest to ideal of the four.
        "0": "氦的沸點最低，所以粒子之間的引力最弱。它是四種之中最接近理想的。",
        // EN (option B): Nitrogen boils at only 77 K, which shows its intermolecular forces are weak. At 300 K it behaves almost ideally.
        "1": "氮在 77 K 這麼低的溫度就沸騰，可見它的分子間引力很弱。在 300 K 時它的行為幾乎是理想的。",
        // EN (option C): Methane has stronger forces than helium or nitrogen, but another gas in the table has a much higher boiling point.
        "2": "甲烷的引力比氦和氮強，但表中另一種氣體的沸點高得多。",
      },
    },

    // ── s1-5-q019 · short · exam · SL · Structure 1.5.2 · 2 marks
    "s1-5-q019": {
      // EN: <p>Explain why a real gas deviates from ideal gas behaviour at high pressure and at low temperature.</p>
      stem: "<p>解釋 (explain) 為何真實氣體在高壓和低溫下偏離理想氣體的行為。</p>",
      hints: [
        // EN: Link each condition to one assumption of the ideal gas model that stops being true.
        "把每個條件連繫到理想氣體模型中一個不再成立的假設。",
      ],
      // EN: <p>At high pressure the particles are close together, so the volume of the particles themselves is no longer negligible compared with the volume of the container. At low temperature the particles have less kinetic energy and move more slowly, so the intermolecular forces between them become significant.</p>
      answer: "<p>在高壓下，粒子靠得很近，所以粒子本身的體積和容器的體積相比，不再可以忽略。在低溫下，粒子的動能較少，運動較慢，所以粒子之間的分子間引力變得顯著。</p>",
      markscheme: [
        // EN: High pressure: particles are close together, so the volume of the particles is not negligible (compared with the volume of the gas/container).
        "高壓：粒子靠得很近，所以粒子的體積（和氣體／容器的體積相比）不可忽略。",
        // EN: Low temperature: particles move more slowly / have lower kinetic energy, so intermolecular forces (attractions) become significant / are no longer negligible.
        "低溫：粒子運動較慢／動能較低，所以分子間引力（吸引）變得顯著／不再可以忽略。",
      ],
    },

    // ── s1-5-q020 · short · exam · SL · Structure 1.5.1 · 2 marks
    "s1-5-q020": {
      // EN: <p>State <strong>two</strong> assumptions of the ideal gas model.</p>
      stem: "<p>寫出 (state) 理想氣體模型的<strong>兩個</strong>假設。</p>",
      hints: [
        // EN: Tick any two of the four points. The maximum is 2 marks.
        "剔選四點中的任何兩點。最多得 2 分。",
      ],
      // EN: <p>Any two of: the particles have negligible volume; there are no intermolecular forces between the particles; all collisions between particles are elastic; the gas consists of moving particles.</p>
      answer: "<p>以下任何兩項：粒子的體積可忽略；粒子之間沒有分子間引力；粒子之間的所有碰撞都是彈性碰撞；氣體由運動中的粒子組成。</p>",
      markscheme: [
        // EN: The particles have negligible volume (compared with the volume of the container). Do not accept “the gas has no volume”.
        "粒子的體積（和容器的體積相比）可忽略。不接受「氣體沒有體積」。",
        // EN: There are no intermolecular forces (no attractions or repulsions) between the particles.
        "粒子之間沒有分子間引力（沒有吸引或排斥）。",
        // EN: Collisions between particles are (perfectly) elastic / no kinetic energy is lost in collisions.
        "粒子之間的碰撞是（完全）彈性的／碰撞時沒有損失動能。",
        // EN: The gas consists of moving particles.
        "氣體由運動中的粒子組成。",
      ],
    },

    // ── s1-5-q021 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q021": {
      // EN: <p>A student calculates the amount of gas in a 250 <span class="unit">cm3</span> flask at 101 kPa and 298 K. The student substitutes <span class="mono">P = 101</span>, <span class="mono">V = 250</span>, <span class="mono">R = 8.31</span> and <span class="mono">T = 298</span> into <span class="mono">n = PV ÷ RT</span>. How does the student’s answer compare with the correct amount?</p>
      stem: "<p>一名學生計算 250 <span class=\"unit\">cm3</span> 燒瓶內的氣體在 101 kPa 和 298 K 下的物質的量。該學生把 <span class=\"mono\">P = 101</span>、<span class=\"mono\">V = 250</span>、<span class=\"mono\">R = 8.31</span> 和 <span class=\"mono\">T = 298</span> 代入 <span class=\"mono\">n = PV ÷ RT</span>。學生的答案和正確的物質的量相比，是怎樣的？</p>",
      options: [
        // EN: It is correct.
        "答案正確。",
        // EN: It is 1000 times too large.
        "是正確值的 1000 倍，太大。",
        // EN: It is 1000 times too small.
        "只有正確值的 1000 分之一，太小。",
        // EN: It is 10<sup>6</sup> times too large.
        "是正確值的 10<sup>6</sup> 倍，太大。",
      ],
      hints: [
        // EN: Which volume unit goes with kPa when R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>?
        "R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> 時，哪一個體積單位與 kPa 配對？",
      ],
      // EN: <p>With pressure in kPa, the volume must be in dm<sup>3</sup>: 250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>.</p><div class="worked__math">correct: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class="worked__math">student: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>The student’s value is 1000 times too large. More than 10 mol of gas in a small flask is a warning sign.</p>
      solution: "<p>壓強用 kPa，體積就必須用 dm<sup>3</sup>：250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>。</p><div class=\"worked__math\">正確: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class=\"worked__math\">學生: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>學生的數值是正確值的 1000 倍。小燒瓶內有超過 10 mol 氣體，就是一個警號。</p>",
      misconception: {
        // EN (option A): kPa must be paired with dm<sup>3</sup>. The volume here was left in cm<sup>3</sup>, so the units are not consistent.
        "0": "kPa 必須與 dm<sup>3</sup> 配對。這裏的體積仍用 cm<sup>3</sup>，所以單位不一致。",
        // EN (option C): The direction is wrong. V is on top of the fraction, and 250 is bigger than 0.250, so the answer comes out too large.
        "2": "方向錯了。V 在分數的分子，而 250 比 0.250 大，所以答案會偏大。",
        // EN (option D): A factor of 10<sup>6</sup> is the difference between cm<sup>3</sup> and m<sup>3</sup>. With kPa the matching unit is dm<sup>3</sup>, which is 1000 cm<sup>3</sup>.
        "3": "10<sup>6</sup> 倍是 cm<sup>3</sup> 和 m<sup>3</sup> 之間的差別。與 kPa 配對的單位是 dm<sup>3</sup>，即 1000 cm<sup>3</sup>。",
      },
    },

    // ── s1-5-q022 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q022": {
      // EN: <p>The temperature of a fixed mass of an ideal gas, measured in kelvin, is doubled. At the same time its volume is halved. By what factor does the pressure change?</p>
      stem: "<p>固定質量的理想氣體，以開爾文量度的溫度加倍，同時體積減半。壓強變成原來的多少倍？</p>",
      options: [
        // EN: × ¼
        "× ¼",
        // EN: × 1 (no change)
        "× 1（不變）",
        // EN: × 2
        "× 2",
        // EN: × 4
        "× 4",
      ],
      hints: [
        // EN: Rearrange the combined gas law for P<sub>2</sub>, then put in T<sub>2</sub> = 2T<sub>1</sub> and V<sub>2</sub> = ½V<sub>1</sub>.
        "把聯合氣體定律重排成求 P<sub>2</sub> 的形式，然後代入 T<sub>2</sub> = 2T<sub>1</sub> 和 V<sub>2</sub> = ½V<sub>1</sub>。",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>
      solution: "<div class=\"worked__math\">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>",
      misconception: {
        // EN (option A): Both changes raise the pressure. You have inverted both effects.
        "0": "兩個改變都令壓強上升。你把兩個影響都弄反了。",
        // EN (option B): The two changes do not cancel. Heating raises the pressure, and so does squeezing the gas into a smaller volume.
        "1": "兩個改變不會互相抵消。加熱令壓強上升，把氣體壓縮到較小的體積也令壓強上升。",
        // EN (option C): You have counted only one of the two changes. Each one doubles the pressure.
        "2": "你只計算了兩個改變的其中一個。每個改變都令壓強加倍。",
      },
    },

    // ── s1-5-q023 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q023": {
      // EN: <p>0.0500 mol of an ideal gas occupies 1.50 <span class="unit">dm3</span> at a pressure of 95.0 kPa. Calculate the temperature of the gas in <strong>°C</strong>.</p>
      stem: "<p>0.0500 mol 理想氣體在 95.0 kPa 的壓強下佔 1.50 <span class=\"unit\">dm3</span>。計算氣體的溫度，以 <strong>°C</strong> 表示。</p>",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for T. The answer comes out in kelvin.
        "把 <span class=\"mono\">PV = nRT</span> 重排成求 T 的形式。答案的單位是開爾文。",
        // EN: <span class="mono">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>, then subtract 273.15.
        "<span class=\"mono\">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>，然後減去 273.15。",
      ],
      // EN: <div class="worked__math">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class="worked__math">T = 342.96… − 273.15 = 69.81… °C</div><p>To 3 significant figures: <strong>69.8 °C</strong>.</p>
      solution: "<div class=\"worked__math\">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class=\"worked__math\">T = 342.96… − 273.15 = 69.81… °C</div><p>取至 3 位有效數字：<strong>69.8 °C</strong>。</p>",
    },

    // ── s1-5-q024 · order · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q024": {
      // EN: <p>A student measures the mass of a volatile liquid, and the volume, temperature and pressure of its vapour. Put the steps in order to find the molecular formula from these data and the empirical formula.</p>
      stem: "<p>一名學生量度了一種易揮發液體的質量，以及其蒸氣的體積、溫度和壓強。把以下步驟排列次序，利用這些數據和實驗式求出分子式。</p>",
      options: [
        // EN: Convert the temperature to kelvin and the volume to dm<sup>3</sup> (pressure in kPa).
        "把溫度換算成開爾文，體積換算成 dm<sup>3</sup>（壓強用 kPa）。",
        // EN: Calculate the amount of vapour using <span class="mono">n = PV ÷ RT</span>.
        "用 <span class=\"mono\">n = PV ÷ RT</span> 計算蒸氣的物質的量。",
        // EN: Calculate the molar mass using <span class="mono">M = m ÷ n</span>.
        "用 <span class=\"mono\">M = m ÷ n</span> 計算摩爾質量。",
        // EN: Divide the molar mass by the mass of one empirical formula unit.
        "把摩爾質量除以一個實驗式單位的質量。",
        // EN: Multiply the subscripts in the empirical formula by the whole number obtained.
        "把實驗式中的下標乘以所得的整數。",
      ],
      hints: [
        // EN: You cannot use the gas equation until the units are consistent.
        "單位一致之前，不能使用氣體方程。",
        // EN: The molar mass needs the amount of vapour, and the amount comes from the gas equation.
        "求摩爾質量需要蒸氣的物質的量，而物質的量由氣體方程求得。",
      ],
      // EN: <p>Units first, then the gas equation for the amount, then molar mass from mass ÷ amount. Comparing the molar mass with the empirical formula mass gives the whole-number multiple that turns the empirical formula into the molecular formula.</p>
      solution: "<p>先處理單位，再用氣體方程求物質的量，然後用質量 ÷ 物質的量求摩爾質量。把摩爾質量和實驗式質量比較，得出整數倍數，就可以把實驗式變成分子式。</p>",
    },

    // ── s1-5-q025 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q025": {
      // EN: <p>Which sample of gas occupies the largest volume at STP?</p>
      stem: "<p>以下哪一個氣體樣本在 STP 下佔的體積最大？</p>",
      options: [
        // EN: 4.0 g of hydrogen, <span class="chem">H2</span>
        "4.0 g 氫氣 <span class=\"chem\">H2</span>",
        // EN: 28.0 g of nitrogen, <span class="chem">N2</span>
        "28.0 g 氮氣 <span class=\"chem\">N2</span>",
        // EN: 44.0 g of carbon dioxide, <span class="chem">CO2</span>
        "44.0 g 二氧化碳 <span class=\"chem\">CO2</span>",
        // EN: 40.0 g of argon, <span class="chem">Ar</span>
        "40.0 g 氬氣 <span class=\"chem\">Ar</span>",
      ],
      hints: [
        // EN: At the same temperature and pressure, volume depends only on the amount of gas in moles.
        "在相同的溫度和壓強下，體積只取決於氣體的物質的量（摩爾數）。",
        // EN: Work out <span class="mono">n = m ÷ M</span> for each sample.
        "計算每個樣本的 <span class=\"mono\">n = m ÷ M</span>。",
      ],
      // EN: <div class="worked__math">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class="worked__math">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>Hydrogen has about twice the amount, so about twice the volume (about 45 dm<sup>3</sup> against about 22.7 dm<sup>3</sup>).</p>
      solution: "<div class=\"worked__math\">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class=\"worked__math\">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>氫氣的物質的量大約是其他樣本的兩倍，所以體積也大約是兩倍（約 45 dm<sup>3</sup>，其他約 22.7 dm<sup>3</sup>）。</p>",
      misconception: {
        // EN (option B): Gas volume depends on the amount in moles, not on the mass. 28.0 g of N<sub>2</sub> is about 1 mol.
        "1": "氣體體積取決於物質的量（摩爾數），而不是質量。28.0 g N<sub>2</sub> 大約是 1 mol。",
        // EN (option C): The largest mass does not mean the largest volume. 44.0 g of CO<sub>2</sub> is about 1 mol, and bigger molecules do not take up more room in an ideal gas.
        "2": "質量最大不代表體積最大。44.0 g CO<sub>2</sub> 大約是 1 mol，而且在理想氣體中，較大的分子不會佔更多空間。",
        // EN (option D): 40.0 g of argon is about 1 mol. Another sample contains about twice that amount.
        "3": "40.0 g 氬大約是 1 mol。另一個樣本的物質的量大約是它的兩倍。",
      },
    },

    // ── s1-5-q026 · multi · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q026": {
      // EN: <p>Select <strong>all</strong> the graphs that are straight lines through the origin for a fixed mass of an ideal gas.</p>
      stem: "<p>對於固定質量的理想氣體，選出<strong>所有</strong>是通過原點的直線的圖。</p>",
      options: [
        // EN: P against 1/V, at constant temperature
        "溫度不變時，P 對 1/V",
        // EN: P against V, at constant temperature
        "溫度不變時，P 對 V",
        // EN: V against T in kelvin, at constant pressure
        "壓強不變時，V 對 T（以開爾文為單位）",
        // EN: V against T in °C, at constant pressure
        "壓強不變時，V 對 T（以 °C 為單位）",
        // EN: P against T in kelvin, at constant volume
        "體積不變時，P 對 T（以開爾文為單位）",
        // EN: PV against P, at constant temperature
        "溫度不變時，PV 對 P",
      ],
      hints: [
        // EN: A straight line through the origin means direct proportion.
        "通過原點的直線表示成正比。",
        // EN: There are three correct answers.
        "有三個正確答案。",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>: P ∝ 1/V at constant T; V ∝ T (in K) at constant P; P ∝ T (in K) at constant V. Each of these direct proportions plots as a straight line through the origin.</p>
      solution: "<p>由 <span class=\"mono\">PV = nRT</span> 可知：T 不變時 P ∝ 1/V；P 不變時 V ∝ T（以 K 為單位）；V 不變時 P ∝ T（以 K 為單位）。這些正比關係作圖時，都是通過原點的直線。</p>",
      misconception: {
        // EN (option B): P against V is a curve. The inverse relationship only becomes a straight line when you plot P against 1/V.
        "1": "P 對 V 的圖是曲線。只有用 P 對 1/V 作圖，反比關係才會變成直線。",
        // EN (option D): A straight line, but not through the origin: at 0 °C the gas still has a volume. The line meets the temperature axis at −273.15 °C.
        "3": "是直線，但不通過原點：在 0 °C 時氣體仍有體積。直線在 −273.15 °C 與溫度軸相交。",
        // EN (option F): PV does not change at constant temperature, so this is a horizontal line.
        "5": "溫度不變時 PV 不會改變，所以這是一條水平線。",
      },
    },

    // ── s1-5-q031 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q031": {
      // EN: <p>The molar volume of an ideal gas is 22.7 <span class="unit">dm3 mol-1</span> at STP. Use the ideal gas equation to calculate the molar volume of an ideal gas, in <span class="unit">dm3 mol-1</span>, at 25.0 °C and 100 kPa.</p>
      stem: "<p>理想氣體在 STP 下的摩爾體積是 22.7 <span class=\"unit\">dm3 mol-1</span>。利用理想氣體方程，計算理想氣體在 25.0 °C 和 100 kPa 下的摩爾體積，以 <span class=\"unit\">dm3 mol-1</span> 表示。</p>",
      hints: [
        // EN: Molar volume is the volume of exactly 1 mol. Put n = 1 mol into <span class="mono">V = nRT ÷ P</span>.
        "摩爾體積是剛好 1 mol 的體積。把 n = 1 mol 代入 <span class=\"mono\">V = nRT ÷ P</span>。",
        // EN: <span class="mono">V = (1 × 8.31 × 298.15) ÷ 100</span>
        "<span class=\"mono\">V = (1 × 8.31 × 298.15) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>Molar volume = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>. It is larger than 22.7 because the gas is warmer. This is why 22.7 can only be used at STP.</p>
      solution: "<div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>摩爾體積 = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>。它比 22.7 大，因為氣體較暖。所以 22.7 只能在 STP 下使用。</p>",
    },

    // ── s1-5-q035 · short · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q035": {
      // EN: <p>The volume of a fixed mass of gas is measured at several temperatures between 0 °C and 100 °C at constant pressure. Describe the graph of volume against temperature in °C, and state what is found when the line is extrapolated to zero volume.</p>
      stem: "<p>在壓強不變的情況下，在 0 °C 至 100 °C 之間的多個溫度量度固定質量氣體的體積。描述 (describe) 體積對攝氏溫度 (°C) 的圖，並寫出 (state) 把直線外推至零體積時有甚麼發現。</p>",
      hints: [
        // EN: Is the volume zero at 0 °C?
        "在 0 °C 時體積是零嗎？",
        // EN: What is special about −273.15 °C?
        "−273.15 °C 有甚麼特別？",
      ],
      // EN: <p>The graph is a straight line with a positive gradient that does not pass through the origin (the volume is not zero at 0 °C). Extrapolated back, the line reaches zero volume at about −273 °C, which is absolute zero (0 K).</p>
      answer: "<p>這幅圖是一條斜率為正的直線，不通過原點（在 0 °C 時體積不是零）。向後外推，直線在約 −273 °C 到達零體積，這就是絕對零度 (0 K)。</p>",
      markscheme: [
        // EN: Straight line with positive gradient / volume increases linearly with temperature, not passing through the origin (positive intercept on the volume axis).
        "斜率為正的直線／體積隨溫度線性增加，不通過原點（在體積軸上有正截距）。",
        // EN: Extrapolates to zero volume at −273(.15) °C / absolute zero / 0 K.
        "外推至零體積時是 −273(.15) °C／絕對零度／0 K。",
      ],
    },

    // ── s1-5-q027 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q027": {
      // EN: <p>A compound contains 52.2 % carbon, 13.1 % hydrogen and 34.7 % oxygen by mass. When 0.230 g of the compound is vaporised at 100.0 °C and 100 kPa, the vapour occupies 155 <span class="unit">cm3</span>.</p><p>Calculate the molar mass of the compound, in <span class="unit">g mol-1</span>. Then use the solution to check that you can also deduce its molecular formula.</p>
      stem: "<p>某化合物按質量計含 52.2% 碳、13.1% 氫和 34.7% 氧。0.230 g 這種化合物在 100.0 °C 和 100 kPa 下汽化，蒸氣佔 155 <span class=\"unit\">cm3</span>。</p><p>計算這種化合物的摩爾質量，以 <span class=\"unit\">g mol-1</span> 表示。然後參考題解，檢查你是否也能推斷 (deduce) 它的分子式。</p>",
      hints: [
        // EN: The molar mass comes from the gas data alone: find n with the gas equation, then M = m ÷ n.
        "摩爾質量只需氣體數據就能求出：用氣體方程求 n，再用 M = m ÷ n。",
        // EN: <span class="mono">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>
        "<span class=\"mono\">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>",
        // EN: For the formula: find the empirical formula from the percentages, then compare its mass with M.
        "求分子式：先由百分率求實驗式，再把實驗式質量和 M 比較。",
      ],
      // EN: <div class="worked__math">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class="worked__math">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class="worked__math">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>Molecular formula: in 100 g there are</p><div class="worked__math">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class="worked__math">divide by 2.169: C 2.00 : H 5.98 : O 1.00, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1, so the molecular formula is also <strong>C<sub>2</sub>H<sub>6</sub>O</strong>.</p>
      solution: "<div class=\"worked__math\">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class=\"worked__math\">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class=\"worked__math\">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>分子式：100 g 中含有</p><div class=\"worked__math\">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class=\"worked__math\">除以 2.169: C 2.00 : H 5.98 : O 1.00，所以實驗式是 C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1，所以分子式也是 <strong>C<sub>2</sub>H<sub>6</sub>O</strong>。</p>",
    },

    // ── s1-5-q028 · mcq · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q028": {
      // EN: <p>A gaseous hydrocarbon has the empirical formula <span class="chem">CH2</span>. A 1.40 g sample occupies 0.755 <span class="unit">dm3</span> at 91.0 °C and 100 kPa. What is the molecular formula of the hydrocarbon?</p>
      stem: "<p>某氣態烴的實驗式是 <span class=\"chem\">CH2</span>。1.40 g 樣本在 91.0 °C 和 100 kPa 下佔 0.755 <span class=\"unit\">dm3</span>。這種烴的分子式是甚麼？</p>",
      options: [
        // EN: <span class="chem">CH2</span>
        "<span class=\"chem\">CH2</span>",
        // EN: <span class="chem">C2H4</span>
        "<span class=\"chem\">C2H4</span>",
        // EN: <span class="chem">C3H6</span>
        "<span class=\"chem\">C3H6</span>",
        // EN: <span class="chem">C4H8</span>
        "<span class=\"chem\">C4H8</span>",
      ],
      hints: [
        // EN: The conditions are not STP, so find the amount with <span class="mono">n = PV ÷ RT</span>.
        "條件不是 STP，所以用 <span class=\"mono\">n = PV ÷ RT</span> 求物質的量。",
        // EN: Then M = m ÷ n, and compare M with the mass of one CH<sub>2</sub> unit, 14.03 g mol<sup>−1</sup>.
        "然後 M = m ÷ n，再把 M 和一個 CH<sub>2</sub> 單位的質量 14.03 g mol<sup>−1</sup> 比較。",
      ],
      // EN: <div class="worked__math">T = 91.0 + 273.15 = 364.15 K</div><div class="worked__math">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class="worked__math">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class="worked__math">56.11… ÷ 14.03 = 4.00, so the molecular formula is (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>
      solution: "<div class=\"worked__math\">T = 91.0 + 273.15 = 364.15 K</div><div class=\"worked__math\">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class=\"worked__math\">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class=\"worked__math\">56.11… ÷ 14.03 = 4.00，所以分子式是 (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>",
      misconception: {
        // EN (option A): A molar mass of about 14 g mol<sup>−1</sup> comes from putting 91.0 into the equation as the temperature. Convert to kelvin first: 91.0 °C = 364.15 K.
        "0": "把 91.0 當作溫度直接代入方程，就會得出約 14 g mol<sup>−1</sup> 的摩爾質量。要先換算成開爾文：91.0 °C = 364.15 K。",
        // EN (option B): The molar mass is about 56 g mol<sup>−1</sup>. Divide by the mass of one CH<sub>2</sub> unit (14.03 g mol<sup>−1</sup>), which gives 4 units, not 2.
        "1": "摩爾質量約為 56 g mol<sup>−1</sup>。除以一個 CH<sub>2</sub> 單位的質量 (14.03 g mol<sup>−1</sup>)，得出 4 個單位，不是 2 個。",
        // EN (option C): You get 42 g mol<sup>−1</sup> if you use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount. That value applies only at STP, and this gas is at 91.0 °C. Use the gas equation.
        "2": "如果用 22.7 dm<sup>3</sup> mol<sup>−1</sup> 求物質的量，就會得出 42 g mol<sup>−1</sup>。這個數值只適用於 STP，而這種氣體處於 91.0 °C。請用氣體方程。",
      },
    },

    // ── s1-5-q029 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q029": {
      // EN: <p>A gas has a density of 1.25 <span class="unit">g dm-3</span> at 25.0 °C and 100 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>某氣體在 25.0 °C 和 100 kPa 下的密度是 1.25 <span class=\"unit\">g dm-3</span>。計算這種氣體的摩爾質量，以 <span class=\"unit\">g mol-1</span> 表示。</p>",
      hints: [
        // EN: A density of 1.25 g dm<sup>−3</sup> means that 1.00 dm<sup>3</sup> of the gas has a mass of 1.25 g.
        "密度是 1.25 g dm<sup>−3</sup>，表示 1.00 dm<sup>3</sup> 這種氣體的質量是 1.25 g。",
        // EN: Find the amount of gas in 1.00 dm<sup>3</sup> with <span class="mono">n = PV ÷ RT</span>, then use M = m ÷ n.
        "用 <span class=\"mono\">n = PV ÷ RT</span> 求 1.00 dm<sup>3</sup> 氣體的物質的量，再用 M = m ÷ n。",
      ],
      // EN: <p>Take exactly 1.00 dm<sup>3</sup> of the gas. Its mass is 1.25 g.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class="worked__math">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>31.0 g mol<sup>−1</sup></strong>.</p>
      solution: "<p>取剛好 1.00 dm<sup>3</sup> 的氣體。它的質量是 1.25 g。</p><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class=\"worked__math\">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>取至 3 位有效數字：<strong>31.0 g mol<sup>−1</sup></strong>。</p>",
    },

    // ── s1-5-q030 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q030": {
      // EN: <p>Sodium azide decomposes completely when heated:</p><p><span class="chem">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>Calculate the volume of nitrogen, in <span class="unit">dm3</span>, measured at 25.0 °C and 100 kPa, that is produced when 65.0 g of sodium azide decomposes.</p>
      stem: "<p>疊氮化鈉 (sodium azide) 受熱時完全分解：</p><p><span class=\"chem\">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>65.0 g 疊氮化鈉分解時會產生氮氣。計算這些氮氣在 25.0 °C 和 100 kPa 下量度的體積，以 <span class=\"unit\">dm3</span> 表示。</p>",
      hints: [
        // EN: Start with the amount of sodium azide: <span class="mono">n = m ÷ M</span>, with M(NaN<sub>3</sub>) = 22.99 + 3(14.01).
        "先求疊氮化鈉的物質的量：<span class=\"mono\">n = m ÷ M</span>，其中 M(NaN<sub>3</sub>) = 22.99 + 3(14.01)。",
        // EN: The equation says 2 mol of NaN<sub>3</sub> gives 3 mol of N<sub>2</sub>.
        "方程式顯示 2 mol NaN<sub>3</sub> 生成 3 mol N<sub>2</sub>。",
        // EN: The gas is not at STP (25.0 °C), so use <span class="mono">V = nRT ÷ P</span>.
        "氣體不是處於 STP（溫度是 25.0 °C），所以用 <span class=\"mono\">V = nRT ÷ P</span>。",
      ],
      // EN: <div class="worked__math">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class="worked__math">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class="worked__math">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>To 3 significant figures: <strong>37.2 dm<sup>3</sup></strong>. Using 22.7 dm<sup>3</sup> mol<sup>−1</sup> would give 34.0 dm<sup>3</sup>, which is wrong because the gas is not at STP.</p>
      solution: "<div class=\"worked__math\">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class=\"worked__math\">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class=\"worked__math\">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>取至 3 位有效數字：<strong>37.2 dm<sup>3</sup></strong>。用 22.7 dm<sup>3</sup> mol<sup>−1</sup> 會得出 34.0 dm<sup>3</sup>，這是錯的，因為氣體不是處於 STP。</p>",
    },

    // ── s1-5-q032 · short · challenge · SL · Structure 1.5.2 · 3 marks
    "s1-5-q032": {
      // EN: <p>Helium boils at 4 K and ammonia boils at 240 K (both at 100 kPa). At 250 K and 100 kPa, the measured volume of 1 mol of helium agrees very closely with the value predicted by <span class="mono">PV = nRT</span>. The measured volume of 1 mol of ammonia does not agree as closely.</p><p>Explain this difference, referring to the assumptions of the ideal gas model.</p>
      stem: "<p>氦在 4 K 沸騰，氨在 240 K 沸騰（兩者都在 100 kPa 下）。在 250 K 和 100 kPa 下，1 mol 氦的量度體積與 <span class=\"mono\">PV = nRT</span> 預測的數值非常吻合。1 mol 氨的量度體積就沒有那麼吻合。</p><p>參照理想氣體模型的假設，解釋 (explain) 這個差別。</p>",
      hints: [
        // EN: What does a boiling point tell you about the forces between particles?
        "沸點告訴你粒子之間的引力有多強？",
        // EN: How far above its own boiling point is each gas at 250 K?
        "在 250 K 時，每種氣體比自己的沸點高出多少？",
      ],
      // EN: <p>The much higher boiling point of ammonia shows that the intermolecular forces between ammonia molecules are much stronger than those between helium atoms. The ideal gas model assumes there are no intermolecular forces, so this assumption is less valid for ammonia. At 250 K ammonia is only just above its boiling point, so its particles are moving slowly enough for these forces to be significant, whereas helium is far above its boiling point and its very weak forces are negligible.</p>
      answer: "<p>氨的沸點高得多，可見氨分子之間的分子間引力遠比氦原子之間的強。理想氣體模型假設沒有分子間引力，所以這個假設對氨較不成立。在 250 K 時，氨只是剛剛高於它的沸點，粒子運動得夠慢，令這些引力變得顯著；而氦遠高於它的沸點，它那些非常弱的引力可以忽略。</p>",
      markscheme: [
        // EN: Ammonia has (much) stronger intermolecular forces than helium (shown by its higher boiling point).
        "氨的分子間引力比氦強（得多）（由它較高的沸點可見）。",
        // EN: The ideal gas model assumes no intermolecular forces (and negligible particle volume), so the assumption is less valid for ammonia.
        "理想氣體模型假設沒有分子間引力（以及粒子體積可忽略），所以這個假設對氨較不成立。",
        // EN: 250 K is a low temperature for ammonia / close to its boiling point, so its particles are slow enough for the forces to be significant; helium is far above its boiling point so its forces are negligible.
        "對氨來說，250 K 是低溫／接近它的沸點，所以粒子運動得夠慢，令引力變得顯著；氦遠高於它的沸點，所以它的引力可以忽略。",
      ],
    },

    // ── s1-5-q033 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q033": {
      // EN: <p>In dry air, 0.934 % of the particles are argon atoms. This means 0.934 % of the total amount of gas, in mol, is argon. A 2.00 <span class="unit">dm3</span> flask is filled with dry air at 20.0 °C and 101 kPa. Calculate the mass of argon in the flask, in g.</p>
      stem: "<p>在乾燥空氣中，0.934% 的粒子是氬原子。也就是說，氣體總物質的量（以 mol 計）的 0.934% 是氬。一個 2.00 <span class=\"unit\">dm3</span> 的燒瓶在 20.0 °C 和 101 kPa 下充滿乾燥空氣。計算燒瓶內氬的質量，以 g 表示。</p>",
      hints: [
        // EN: First find the total amount of gas in the flask with <span class="mono">n = PV ÷ RT</span>.
        "先用 <span class=\"mono\">n = PV ÷ RT</span> 求燒瓶內氣體的總物質的量。",
        // EN: 0.934 % of that amount is argon: multiply by 0.00934.
        "其中 0.934% 是氬：乘以 0.00934。",
        // EN: Then <span class="mono">m = n × M</span> with <i>A</i><sub>r</sub>(Ar) = 39.95.
        "然後用 <span class=\"mono\">m = n × M</span>，其中 <i>A</i><sub>r</sub>(Ar) = 39.95。",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(air) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class="worked__math">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class="worked__math">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>To 3 significant figures: <strong>0.0309 g</strong>.</p>
      solution: "<div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">n(空氣) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class=\"worked__math\">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class=\"worked__math\">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>取至 3 位有效數字：<strong>0.0309 g</strong>。</p>",
    },

    // ── s1-5-q034 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q034": {
      // EN: <p>A rigid 5.00 <span class="unit">dm3</span> cylinder contains gas at 300 kPa and 20.0 °C. Some gas is released until the pressure falls to 180 kPa. The temperature is still 20.0 °C. Calculate the amount of gas, in mol, that was released.</p>
      stem: "<p>一個堅硬的 5.00 <span class=\"unit\">dm3</span> 氣瓶裝有 300 kPa、20.0 °C 的氣體。放出部分氣體，直到壓強降至 180 kPa。溫度仍然是 20.0 °C。計算放出的氣體的物質的量，以 mol 表示。</p>",
      hints: [
        // EN: The amount of gas changes, so the combined gas law does not apply. Use <span class="mono">n = PV ÷ RT</span> before and after.
        "氣體的物質的量改變了，所以聯合氣體定律不適用。對放氣前和放氣後分別使用 <span class=\"mono\">n = PV ÷ RT</span>。",
        // EN: Shortcut: V and T are the same before and after, so the amount released is <span class="mono">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>.
        "捷徑：V 和 T 在前後都相同，所以放出的物質的量是 <span class=\"mono\">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>。",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(before) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class="worked__math">n(after) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class="worked__math">n(released) = 0.61574… − 0.36944… = 0.24629… mol</div><p>To 3 significant figures: <strong>0.246 mol</strong>.</p>
      solution: "<div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">n(放氣前) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class=\"worked__math\">n(放氣後) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class=\"worked__math\">n(放出) = 0.61574… − 0.36944… = 0.24629… mol</div><p>取至 3 位有效數字：<strong>0.246 mol</strong>。</p>",
    },

    // ── s1-5-q036 · numeric · challenge · SL · Structure 1.5.3 · 2 marks
    "s1-5-q036": {
      // EN: <p>A student changes the volume of a fixed mass of gas at a constant temperature of 25.0 °C and measures the pressure each time. A graph of pressure in kPa (vertical axis) against 1/volume in <span class="unit">dm-3</span> (horizontal axis) is a straight line through the origin. Its gradient is 62.0 <span class="unit">kPa dm3</span>.</p><p>Calculate the amount of gas, in mol.</p>
      stem: "<p>一名學生在 25.0 °C 的恆定溫度下改變固定質量氣體的體積，每次都量度壓強。壓強（以 kPa 為單位，縱軸）對 1/體積（以 <span class=\"unit\">dm-3</span> 為單位，橫軸）的圖是一條通過原點的直線，斜率是 62.0 <span class=\"unit\">kPa dm3</span>。</p><p>計算氣體的物質的量，以 mol 表示。</p>",
      hints: [
        // EN: Write <span class="mono">PV = nRT</span> as P = (something) × (1/V). The “something” is the gradient.
        "把 <span class=\"mono\">PV = nRT</span> 寫成 P = (某個量) × (1/V)。這「某個量」就是斜率。",
        // EN: The gradient is nRT, so <span class="mono">n = gradient ÷ RT</span>. Use T in kelvin.
        "斜率是 nRT，所以 <span class=\"mono\">n = 斜率 ÷ RT</span>。T 要用開爾文。",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>, P = nRT × (1/V). So a graph of P against 1/V has gradient nRT.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = gradient ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>To 3 significant figures: <strong>0.0250 mol</strong>. kPa × dm<sup>3</sup> = J, so the units match R.</p>
      solution: "<p>由 <span class=\"mono\">PV = nRT</span> 可得 P = nRT × (1/V)。所以 P 對 1/V 的圖，斜率是 nRT。</p><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">n = 斜率 ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>取至 3 位有效數字：<strong>0.0250 mol</strong>。kPa × dm<sup>3</sup> = J，所以單位與 R 配合。</p>",
    },

  }
});
