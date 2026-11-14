/* lab-empirical-formula.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-empirical-formula.q', {
  questions: {

    // ── lab-empirical-formula-q001 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q001": {
      // EN: <p>A student burns magnesium ribbon in a crucible to find the empirical formula of magnesium oxide. The method says to lift the lid slightly, every minute or so, and then put it straight back.</p><p>What is the reason for this?</p>
      stem: "<p>某學生在坩堝中燃燒鎂帶，以求出氧化鎂的實驗式。實驗方法要求每隔大約一分鐘把蓋子略為揭起，然後立即蓋回。</p><p>這樣做的原因是甚麼？</p>",
      options: [
        // EN: To let water vapour escape from the crucible
        "讓水蒸氣從坩堝中逸出",
        // EN: To let oxygen in while keeping most of the magnesium oxide in the crucible
        "讓氧氣進入，同時把大部分氧化鎂留在坩堝中",
        // EN: To check whether the magnesium has melted
        "檢查鎂是否已經熔化",
        // EN: To cool the crucible so that it does not crack
        "使坩堝冷卻，以免破裂",
      ],
      hints: [
        // EN: Write the equation for the reaction. Which reactant comes from the air?
        "寫出這個反應的方程式。哪一種反應物來自空氣？",
        // EN: What would you see escaping if the lid were left off?
        "如果不蓋蓋子，你會看到甚麼逸出？",
      ],
      // EN: <p>The reaction <span class="chem">2Mg + O2 -> 2MgO</span> needs oxygen from the air, so the lid must be lifted to let air in. But the product forms as a fine white smoke, so the lid must go straight back on to stop it escaping. Losing product would make the mass of oxygen too low.</p>
      solution: "<p>反應 <span class=\"chem\">2Mg + O2 -> 2MgO</span> 需要空氣中的氧，所以必須揭起蓋子讓空氣進入。但生成物以幼細的白煙形式形成，所以必須立即蓋回蓋子，防止白煙逸出。失去生成物會使氧的質量過低。</p>",
      misconception: {
        // EN (option A): No water is formed when magnesium burns. The only reactant from the air that matters here is oxygen.
        "0": "鎂燃燒時不會生成水。這裏唯一重要的、來自空氣的反應物是氧。",
        // EN (option C): Whether the metal melts does not change the result. Think about what the reaction needs from the air, and what could be lost.
        "2": "金屬是否熔化不會改變結果。想想反應需要空氣中的甚麼，以及甚麼可能會損失。",
        // EN (option D): The crucible is designed to take strong heating. Lifting the lid is about the gases and the solid product.
        "3": "坩堝本身是設計來承受強熱的。揭起蓋子關乎氣體和固體生成物。",
      },
    },

    // ── lab-empirical-formula-q002 · numeric · foundation · SL · Structure 1.4.3 · 2 marks
    "lab-empirical-formula-q002": {
      // EN: <p>A student heats magnesium in a crucible until the mass is constant. The balance reads to 0.01 g.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible and lid</th><td class="num">23.18</td></tr><tr><th scope="row">Crucible, lid and magnesium</th><td class="num">23.42</td></tr><tr><th scope="row">Crucible, lid and product (constant)</th><td class="num">23.58</td></tr></tbody></table></div><p>Calculate the amount, in mol, of oxygen atoms that combined with the magnesium. <i>A</i><sub>r</sub>(O) = 16.00</p>
      stem: "<p>某學生在坩堝中加熱鎂，直至質量不變。天平讀數至 0.01 g。</p><div class=\"table-scroll\"><table class=\"data\"><caption>原始數據</caption><thead><tr><th scope=\"col\">讀數</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">坩堝和蓋</th><td class=\"num\">23.18</td></tr><tr><th scope=\"row\">坩堝、蓋和鎂</th><td class=\"num\">23.42</td></tr><tr><th scope=\"row\">坩堝、蓋和生成物（質量不變）</th><td class=\"num\">23.58</td></tr></tbody></table></div><p>計算 (calculate) 與鎂化合的氧原子的物質的量，以 mol 表示。<i>A</i><sub>r</sub>(O) = 16.00</p>",
      hints: [
        // EN: The gain in mass from the magnesium reading to the final reading is the mass of oxygen.
        "由加入鎂後的讀數到最終讀數所增加的質量，就是氧的質量。",
        // EN: <i>n</i> = <i>m</i> ÷ <i>M</i> with the molar mass of oxygen atoms, 16.00 <span class="unit">g mol-1</span>.
        "用 <i>n</i> = <i>m</i> ÷ <i>M</i>，氧原子的摩爾質量是 16.00 <span class=\"unit\">g mol-1</span>。",
      ],
      // EN: <div class="worked__math">mass of O = 23.58 <span class="unit">g</span> − 23.42 <span class="unit">g</span> = 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = 0.16 <span class="unit">g</span> ÷ 16.00 <span class="unit">g mol-1</span> = 0.010 <span class="unit">mol</span></div><p>Use the mass of oxygen <em>atoms</em> (16.00), because the question asks for atoms. 0.16 g has 2 significant figures, so the answer is 0.010 mol.</p>
      solution: "<div class=\"worked__math\">O 的質量 = 23.58 <span class=\"unit\">g</span> − 23.42 <span class=\"unit\">g</span> = 0.16 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = 0.16 <span class=\"unit\">g</span> ÷ 16.00 <span class=\"unit\">g mol-1</span> = 0.010 <span class=\"unit\">mol</span></div><p>用氧<em>原子</em>的質量 (16.00)，因為題目問的是原子。0.16 g 有 2 位有效數字，所以答案是 0.010 mol。</p>",
    },

    // ── lab-empirical-formula-q003 · short · exam · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q003": {
      // EN: <p>A student uses a balance that reads to 0.001 g.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible and lid</th><td class="num">25.317</td></tr><tr><th scope="row">Crucible, lid and magnesium</th><td class="num">25.803</td></tr><tr><th scope="row">After heating to constant mass</th><td class="num">26.111</td></tr></tbody></table></div><p>Determine the empirical formula of the oxide. Show your working. <i>A</i><sub>r</sub>: Mg = 24.31, O = 16.00</p>
      stem: "<p>某學生使用讀數至 0.001 g 的天平。</p><div class=\"table-scroll\"><table class=\"data\"><caption>原始數據</caption><thead><tr><th scope=\"col\">讀數</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">坩堝和蓋</th><td class=\"num\">25.317</td></tr><tr><th scope=\"row\">坩堝、蓋和鎂</th><td class=\"num\">25.803</td></tr><tr><th scope=\"row\">加熱至質量不變後</th><td class=\"num\">26.111</td></tr></tbody></table></div><p>求出 (determine) 這種氧化物的實驗式。寫出計算步驟。<i>A</i><sub>r</sub>：Mg = 24.31，O = 16.00</p>",
      hints: [
        // EN: First find two masses: magnesium (before heating) and oxygen (the gain on heating).
        "先求出兩個質量：鎂（加熱前）和氧（加熱時增加的質量）。",
        // EN: Convert each mass to moles, then divide both by the smaller amount.
        "把每個質量換算成摩爾，然後把兩者都除以較小的物質的量。",
      ],
      // EN: <div class="worked__math">mass of Mg = 25.803 <span class="unit">g</span> − 25.317 <span class="unit">g</span> = 0.486 <span class="unit">g</span></div><div class="worked__math">mass of O = 26.111 <span class="unit">g</span> − 25.803 <span class="unit">g</span> = 0.308 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 <span class="unit">mol</span></div><div class="worked__math">Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1</div><p>1.04 is within experimental error of 1, so the empirical formula is <span class="chem">MgO</span>.</p>
      solution: "<div class=\"worked__math\">Mg 的質量 = 25.803 <span class=\"unit\">g</span> − 25.317 <span class=\"unit\">g</span> = 0.486 <span class=\"unit\">g</span></div><div class=\"worked__math\">O 的質量 = 26.111 <span class=\"unit\">g</span> − 25.803 <span class=\"unit\">g</span> = 0.308 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 <span class=\"unit\">mol</span></div><div class=\"worked__math\">Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1</div><p>1.04 與 1 的差異在實驗誤差之內，所以實驗式是 <span class=\"chem\">MgO</span>。</p>",
      // EN: <p>mass of Mg = 25.803 − 25.317 = 0.486 g; mass of O = 26.111 − 25.803 = 0.308 g.</p><p><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol; <i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol.</p><p>Mg : O = 1.04 : 1 ≈ 1 : 1, so the empirical formula is <span class="chem">MgO</span>.</p>
      answer: "<p>Mg 的質量 = 25.803 − 25.317 = 0.486 g；O 的質量 = 26.111 − 25.803 = 0.308 g。</p><p><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol；<i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol。</p><p>Mg : O = 1.04 : 1 ≈ 1 : 1，所以實驗式是 <span class=\"chem\">MgO</span>。</p>",
      markscheme: [
        // EN: M1: mass of Mg = 0.486 g AND mass of O = 0.308 g.
        "M1：Mg 的質量 = 0.486 g，以及 O 的質量 = 0.308 g。",
        // EN: M2: n(Mg) = 0.0200 mol AND n(O) = 0.0193 mol (ECF from M1).
        "M2：n(Mg) = 0.0200 mol，以及 n(O) = 0.0193 mol（M1 的承前錯誤可得分）。",
        // EN: M3: ratio close to 1 : 1, so MgO. (Award [3] for a correct final answer with working.)
        "M3：比值接近 1 : 1，所以是 MgO。（最終答案正確並有計算步驟，給 [3] 分。）",
      ],
    },

    // ── lab-empirical-formula-q004 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q004": {
      // EN: <p>During the magnesium experiment, a small part of the magnesium reacts with nitrogen in the air to form magnesium nitride, <span class="chem">Mg3N2</span>, instead of magnesium oxide.</p><p>What is the effect on the experimental ratio <i>n</i>(O) : <i>n</i>(Mg), and why?</p>
      stem: "<p>在鎂的實驗中，一小部分鎂與空氣中的氮反應，生成氮化鎂 <span class=\"chem\">Mg3N2</span>，而不是氧化鎂。</p><p>這對實驗所得的比值 <i>n</i>(O) : <i>n</i>(Mg) 有甚麼影響？為甚麼？</p>",
      options: [
        // EN: Higher, because the nitrogen adds extra mass to the product
        "較高，因為氮為生成物增加了額外的質量",
        // EN: Lower, because forming the nitride adds less mass for each mole of magnesium than forming the oxide
        "較低，因為每摩爾鎂生成氮化物所增加的質量比生成氧化物少",
        // EN: No change, because the student only calculates the amount of oxygen
        "沒有改變，因為學生只計算氧的物質的量",
        // EN: Lower, because the nitrogen escapes as a gas
        "較低，因為氮以氣體形式逸出",
      ],
      hints: [
        // EN: The student assumes every gram gained is oxygen.
        "學生假設增加的每一克都是氧。",
        // EN: Compare the mass gained by 3 mol of Mg when it forms Mg₃N₂ and when it forms 3 MgO.
        "比較 3 mol Mg 生成 Mg₃N₂ 和生成 3 MgO 時所增加的質量。",
      ],
      // EN: <p>3 mol of Mg gain 2 × 14.01 = 28.02 g as <span class="chem">Mg3N2</span>, but 3 × 16.00 = 48.00 g as 3 <span class="chem">MgO</span>. So the total mass gain is smaller than it should be. The student counts all of the gain as oxygen, so the calculated amount of oxygen is too low and the ratio O : Mg is <strong>too low</strong>.</p><p>Improvement: add a few drops of distilled water to the cooled product and heat again. The nitride is converted to the oxide.</p>
      solution: "<p>3 mol Mg 生成 <span class=\"chem\">Mg3N2</span> 時增加 2 × 14.01 = 28.02 g，但生成 3 <span class=\"chem\">MgO</span> 時增加 3 × 16.00 = 48.00 g。所以增加的總質量比應有的少。學生把增加的質量全部當作氧計算，所以計算出的氧的物質的量過低，比值 O : Mg <strong>過低</strong>。</p><p>改進方法：在冷卻了的生成物中加入幾滴蒸餾水，再加熱。氮化物會轉化為氧化物。</p>",
      misconception: {
        // EN (option A): The nitrogen does add mass, but compare it with the mass the oxide would have added for the same magnesium. Three Mg atoms gain 28.02 g mol⁻¹ as Mg₃N₂ but 48.00 g mol⁻¹ as three MgO.
        "0": "氮確實增加了質量，但要與相同份量的鎂生成氧化物時增加的質量比較。三個 Mg 原子生成 Mg₃N₂ 時增加 28.02 g mol⁻¹，但生成三個 MgO 時增加 48.00 g mol⁻¹。",
        // EN (option C): The student does not know that any nitride has formed. All of the mass gain is counted as oxygen, so the nitride does change the calculated ratio.
        "2": "學生並不知道有氮化物生成。增加的質量全部被當作氧計算，所以氮化物確實會改變計算出的比值。",
        // EN (option D): The nitrogen stays in the solid as nitride ions. It is the smaller mass gain that matters.
        "3": "氮以氮化物離子的形式留在固體中。重要的是增加的質量較少。",
      },
    },

    // ── lab-empirical-formula-q005 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q005": {
      // EN: <p>A student heats hydrated magnesium sulfate, <span class="chem">MgSO4.xH2O</span>, to constant mass.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible</th><td class="num">15.62</td></tr><tr><th scope="row">Crucible and hydrate</th><td class="num">19.32</td></tr><tr><th scope="row">Crucible and anhydrous salt (constant)</th><td class="num">17.43</td></tr></tbody></table></div><p>Calculate the value of <i>x</i>, to the nearest whole number. <i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>某學生把水合硫酸鎂 <span class=\"chem\">MgSO4.xH2O</span> 加熱至質量不變。</p><div class=\"table-scroll\"><table class=\"data\"><caption>原始數據</caption><thead><tr><th scope=\"col\">讀數</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">坩堝</th><td class=\"num\">15.62</td></tr><tr><th scope=\"row\">坩堝和水合物</th><td class=\"num\">19.32</td></tr><tr><th scope=\"row\">坩堝和無水鹽（質量不變）</th><td class=\"num\">17.43</td></tr></tbody></table></div><p>計算 (calculate) <i>x</i> 的數值，取至最接近的整數。<i>M</i>(<span class=\"chem\">MgSO4</span>) = 120.38 <span class=\"unit\">g mol-1</span>，<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Mass of anhydrous salt = final − crucible. Mass of water = (crucible + hydrate) − final.
        "無水鹽的質量 = 最終質量 − 坩堝。水的質量 = (坩堝 + 水合物) − 最終質量。",
        // EN: x = n(H₂O) ÷ n(MgSO₄).
        "x = n(H₂O) ÷ n(MgSO₄)。",
      ],
      // EN: <div class="worked__math">mass of <span class="chem">MgSO4</span> = 17.43 − 15.62 = 1.81 <span class="unit">g</span></div><div class="worked__math">mass of water = 19.32 − 17.43 = 1.89 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(<span class="chem">MgSO4</span>) = 1.81 ÷ 120.38 = 0.01504 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 1.89 ÷ 18.02 = 0.1049 <span class="unit">mol</span></div><div class="worked__math"><i>x</i> = 0.1049 ÷ 0.01504 = 6.98</div><p>To the nearest whole number, <i>x</i> = <strong>7</strong>: <span class="chem">MgSO4.7H2O</span>.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">MgSO4</span> 的質量 = 17.43 − 15.62 = 1.81 <span class=\"unit\">g</span></div><div class=\"worked__math\">水的質量 = 19.32 − 17.43 = 1.89 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">MgSO4</span>) = 1.81 ÷ 120.38 = 0.01504 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = 1.89 ÷ 18.02 = 0.1049 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>x</i> = 0.1049 ÷ 0.01504 = 6.98</div><p>取至最接近的整數，<i>x</i> = <strong>7</strong>：<span class=\"chem\">MgSO4.7H2O</span>。</p>",
    },

    // ── lab-empirical-formula-q006 · short · foundation · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q006": {
      // EN: <p>A student heats hydrated copper(II) sulfate and weighs it after each heating, on a balance that reads to 0.01 g. The last two readings are 20.14 g and then 20.12 g.</p><p>State and explain whether the student can stop heating.</p>
      stem: "<p>某學生加熱水合硫酸銅(II)，每次加熱後都用讀數至 0.01 g 的天平稱量。最後兩個讀數是 20.14 g，然後是 20.12 g。</p><p>寫出 (state) 並解釋 (explain) 學生是否可以停止加熱。</p>",
      hints: [
        // EN: How big is the difference between the readings, compared with what the balance can show?
        "兩個讀數之間的差異，和天平能顯示的數值相比有多大？",
        // EN: What does a falling mass tell you about the water?
        "質量下降告訴你水的甚麼情況？",
      ],
      // EN: <p>Constant mass means two consecutive readings agree within the balance’s precision. 20.14 g and 20.12 g differ by 0.02 g, so the mass is still going down: not all of the water has gone yet. Stopping now would make the mass of water too small and <i>x</i> too low.</p>
      solution: "<p>質量不變的意思是連續兩個讀數在天平的精密度之內相同。20.14 g 和 20.12 g 相差 0.02 g，所以質量仍在下降：並非所有水都已除去。現在停止會使水的質量過小，<i>x</i> 過低。</p>",
      // EN: <p>No. The two readings differ by 0.02 g, which is more than the precision of the balance, so the mass is still falling and some water is still present. The student should heat, cool and weigh again until two readings in a row agree (within 0.01 g).</p>
      answer: "<p>不可以。兩個讀數相差 0.02 g，大於天平的精密度，所以質量仍在下降，仍然有一些水。學生應該再加熱、冷卻和稱量，直至連續兩個讀數相同（相差在 0.01 g 之內）。</p>",
      markscheme: [
        // EN: No: the mass is still decreasing / the readings are not the same within 0.01 g.
        "不可以：質量仍在減少／讀數在 0.01 g 之內並不相同。",
        // EN: Some water of crystallization is still present, so heat, cool and reweigh until two consecutive masses agree.
        "仍有一些結晶水，所以要加熱、冷卻並再稱量，直至連續兩個質量相同。",
      ],
    },

    // ── lab-empirical-formula-q007 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q007": {
      // EN: <p>A student heats hydrated copper(II) sulfate very strongly. The white powder starts to turn black, because some <span class="chem">CuSO4</span> decomposes into <span class="chem">CuO</span> and gaseous <span class="chem">SO3</span>.</p><p>What is the effect on the calculated value of <i>x</i>?</p>
      stem: "<p>某學生非常強烈地加熱水合硫酸銅(II)。白色粉末開始變黑，因為部分 <span class=\"chem\">CuSO4</span> 分解成 <span class=\"chem\">CuO</span> 和氣態的 <span class=\"chem\">SO3</span>。</p><p>這對計算出的 <i>x</i> 數值有甚麼影響？</p>",
      options: [
        // EN: Too high, because the extra loss of mass is counted as water
        "過高，因為額外失去的質量被當作水計算",
        // EN: Too low, because copper(II) oxide is heavier than copper(II) sulfate
        "過低，因為氧化銅(II) 比硫酸銅(II) 重",
        // EN: No effect, because all of the water has still been removed
        "沒有影響，因為所有水仍然已經除去",
        // EN: Too low, because less water is lost
        "過低，因為失去的水較少",
      ],
      hints: [
        // EN: Does decomposition make the solid lighter or heavier?
        "分解會使固體變輕還是變重？",
        // EN: The student calculates the mass of water as (mass before) − (mass after).
        "學生把水的質量計算為（加熱前的質量）−（加熱後的質量）。",
      ],
      // EN: <p>Losing <span class="chem">SO3</span> makes the final mass too low. So the mass of “water” (before − after) is too high, and the mass of anhydrous salt is too low. Both changes make <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">CuSO4</span>) <strong>too high</strong>. Heat gently and stop when the solid is white all through.</p>
      solution: "<p>失去 <span class=\"chem\">SO3</span> 使最終質量過低。所以「水」的質量（加熱前 − 加熱後）過高，無水鹽的質量過低。這兩個變化都使 <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>) <strong>過高</strong>。要溫和加熱，固體完全變白時就停止。</p>",
      misconception: {
        // EN (option B): One mole of CuO (79.55 g) is lighter than one mole of CuSO₄ (159.62 g). Decomposition makes the solid lighter, not heavier.
        "1": "一摩爾 CuO (79.55 g) 比一摩爾 CuSO₄ (159.62 g) 輕。分解使固體變輕，而不是變重。",
        // EN (option C): The water has gone, but extra mass has gone too. The student cannot tell the two losses apart.
        "2": "水已經除去，但也失去了額外的質量。學生無法把兩種損失分辨出來。",
        // EN (option D): The water is all lost. The question is what happens to the mass of the solid left behind.
        "3": "水已經全部失去。問題在於剩下的固體的質量會怎樣。",
      },
    },

    // ── lab-empirical-formula-q008 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q008": {
      // EN: <p>A student lets the hot anhydrous copper(II) sulfate cool on the open bench for 20 minutes before each weighing. What is the most likely effect on the value of <i>x</i>?</p>
      stem: "<p>某學生每次稱量前，都讓熱的無水硫酸銅(II) 在敞開的實驗枱上冷卻 20 分鐘。這對 <i>x</i> 的數值最可能有甚麼影響？</p>",
      options: [
        // EN: Too high, because the solid loses more water as it cools slowly
        "過高，因為固體慢慢冷卻時失去更多水",
        // EN: Too low, because the solid absorbs water from the air, so the final mass is too high
        "過低，因為固體從空氣中吸收水分，所以最終質量過高",
        // EN: Too low, because the hot crucible makes the balance read high
        "過低，因為熱的坩堝使天平讀數偏高",
        // EN: No effect, because the solid was already weighed hot
        "沒有影響，因為固體已經在熱的時候稱量過",
      ],
      hints: [
        // EN: Anhydrous copper(II) sulfate is used as a test for water. What does it do in moist air?
        "無水硫酸銅(II) 用來測試水。它在潮濕的空氣中會怎樣？",
        // EN: If the final mass is too high, is the calculated mass of water too high or too low?
        "如果最終質量過高，計算出的水的質量是過高還是過低？",
      ],
      // EN: <p>Anhydrous copper(II) sulfate takes water back from the air. So the final mass is too high, the calculated mass of water is too low and the anhydrous mass is too high. <i>x</i> comes out <strong>too low</strong>. Cool the crucible in a desiccator and weigh it as soon as it is cool.</p>
      solution: "<p>無水硫酸銅(II) 會從空氣中重新吸收水分。所以最終質量過高，計算出的水的質量過低，無水鹽的質量過高。<i>x</i> 的結果<strong>過低</strong>。要在乾燥器中冷卻坩堝，一冷卻就立即稱量。</p>",
      misconception: {
        // EN (option A): Once the solid is cool it is no longer losing water. Anhydrous copper(II) sulfate does the opposite in moist air.
        "0": "固體冷卻後就不再失去水。無水硫酸銅(II) 在潮濕的空氣中會做相反的事。",
        // EN (option C): Weighing a hot crucible does give wrong readings, but this student waited until it was cool. Think about what the solid does in air.
        "2": "稱量熱的坩堝確實會得出錯誤的讀數，但這個學生等到坩堝冷卻了才稱量。想想固體在空氣中會怎樣。",
        // EN (option D): The solid is weighed after it cools, so anything it gains while cooling is in the reading.
        "3": "固體是在冷卻後才稱量的，所以它在冷卻期間增加的任何質量都計入了讀數中。",
      },
    },

    // ── lab-empirical-formula-q009 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q009": {
      // EN: <p>In a hydrate experiment, the crucible and hydrate weigh 22.46 g before heating and 21.31 g at constant mass. The balance reads to ±0.01 g.</p><p>Calculate the percentage uncertainty in the mass of water lost.</p>
      stem: "<p>在一個水合物實驗中，坩堝和水合物在加熱前重 22.46 g，在質量不變時重 21.31 g。天平讀數至 ±0.01 g。</p><p>計算 (calculate) 失去的水的質量的百分不確定度。</p>",
      hints: [
        // EN: The mass of water is a difference of two readings. Add their absolute uncertainties.
        "水的質量是兩個讀數之差。把它們的絕對不確定度相加。",
        // EN: Percentage uncertainty = absolute uncertainty ÷ value × 100.
        "百分不確定度 = 絕對不確定度 ÷ 數值 × 100。",
      ],
      // EN: <div class="worked__math">mass of water = 22.46 − 21.31 = 1.15 <span class="unit">g</span></div><div class="worked__math">absolute uncertainty = ±0.01 + ±0.01 = ±0.02 <span class="unit">g</span></div><div class="worked__math">percentage uncertainty = 0.02 ÷ 1.15 × 100 = 1.7 %</div><p>A common slip is to use ±0.01 g. Every mass found by difference uses two readings.</p>
      solution: "<div class=\"worked__math\">水的質量 = 22.46 − 21.31 = 1.15 <span class=\"unit\">g</span></div><div class=\"worked__math\">絕對不確定度 = ±0.01 + ±0.01 = ±0.02 <span class=\"unit\">g</span></div><div class=\"worked__math\">百分不確定度 = 0.02 ÷ 1.15 × 100 = 1.7 %</div><p>常見的失誤是用 ±0.01 g。每個用相減法求得的質量都用了兩個讀數。</p>",
    },

    // ── lab-empirical-formula-q010 · numeric · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q010": {
      // EN: <p>A student’s experiment gives <i>x</i> = 4.60 for hydrated copper(II) sulfate. The accepted formula is <span class="chem">CuSO4.5H2O</span>.</p><p>Calculate the percentage error.</p>
      stem: "<p>某學生的實驗得出水合硫酸銅(II) 的 <i>x</i> = 4.60。公認的化學式是 <span class=\"chem\">CuSO4.5H2O</span>。</p><p>計算 (calculate) 百分誤差。</p>",
      hints: [
        // EN: Percentage error = |experimental − accepted| ÷ accepted × 100.
        "百分誤差 = |實驗值 − 公認值| ÷ 公認值 × 100。",
      ],
      // EN: <div class="worked__math">percentage error = |4.60 − 5| ÷ 5 × 100 = 8.0 %</div><p>The difference is always divided by the <em>accepted</em> value, not by the student’s value.</p>
      solution: "<div class=\"worked__math\">百分誤差 = |4.60 − 5| ÷ 5 × 100 = 8.0 %</div><p>差異總是除以<em>公認</em>值，而不是除以學生所得的數值。</p>",
    },

    // ── lab-empirical-formula-q011 · short · challenge · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q011": {
      // EN: <p>A 0.580 g sample of a hydrocarbon is burned completely in excess oxygen. The products are 1.760 g of <span class="chem">CO2</span> and 0.900 g of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the hydrocarbon. <i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>, <i>A</i><sub>r</sub>: C = 12.01, H = 1.01</p>
      stem: "<p>把 0.580 g 某烴的樣本在過量氧氣中完全燃燒。生成物是 1.760 g <span class=\"chem\">CO2</span> 和 0.900 g <span class=\"chem\">H2O</span>。</p><p>求出 (determine) 這種烴的實驗式。<i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>，<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>，<i>A</i><sub>r</sub>：C = 12.01，H = 1.01</p>",
      hints: [
        // EN: All the carbon ends up in CO₂ and all the hydrogen in H₂O.
        "所有碳最後都在 CO₂ 中，所有氫都在 H₂O 中。",
        // EN: Each H₂O molecule holds two H atoms. Your ratio will not be a whole number at first.
        "每個 H₂O 分子含有兩個 H 原子。你的比值起初不會是整數。",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 <span class="unit">mol</span></div><div class="worked__math">C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50</div><p>2.50 is not close to a whole number, so it is a real ratio: multiply by 2 to get 2 : 5. The empirical formula is <span class="chem">C2H5</span>.</p><p>Check for oxygen: mass of C + H = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g. This equals the sample mass within the precision of the data, so the compound contains no oxygen, as expected for a hydrocarbon.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 <span class=\"unit\">mol</span></div><div class=\"worked__math\">C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50</div><p>2.50 並不接近整數，所以這是真實的比值：乘以 2，得出 2 : 5。實驗式是 <span class=\"chem\">C2H5</span>。</p><p>檢查有沒有氧：C + H 的質量 = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g。在數據的精密度之內，這等於樣本的質量，所以化合物不含氧，與烴的預期相符。</p>",
      // EN: <p><i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol. <i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol.</p><p>C : H = 1 : 2.50 = 2 : 5. Empirical formula <span class="chem">C2H5</span>. (Check: 0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g, the mass of the sample, so there is no oxygen.)</p>
      answer: "<p><i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol。<i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol。</p><p>C : H = 1 : 2.50 = 2 : 5。實驗式是 <span class=\"chem\">C2H5</span>。（檢查：0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g，即樣本的質量，所以沒有氧。）</p>",
      markscheme: [
        // EN: M1: n(C) = n(CO₂) = 0.0400 mol.
        "M1：n(C) = n(CO₂) = 0.0400 mol。",
        // EN: M2: n(H) = 2 × n(H₂O) = 0.0999 mol.
        "M2：n(H) = 2 × n(H₂O) = 0.0999 mol。",
        // EN: M3: C : H = 1 : 2.5 = 2 : 5, so C₂H₅. (Do not accept CH₂ or CH₃: 2.5 must be multiplied up, not rounded.)
        "M3：C : H = 1 : 2.5 = 2 : 5，所以是 C₂H₅。（不接受 CH₂ 或 CH₃：2.5 必須乘大，不可以取整數。）",
      ],
    },

    // ── lab-empirical-formula-q012 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q012": {
      // EN: <p>A student heats iron in oxygen and calculates the mole ratio Fe : O = 1 : 1.48. Which empirical formula fits the data best?</p>
      stem: "<p>某學生在氧中加熱鐵，計算出摩爾比 Fe : O = 1 : 1.48。哪一個實驗式最符合數據？</p>",
      options: [
        // EN: <span class="chem">FeO</span>
        "<span class=\"chem\">FeO</span>",
        // EN: <span class="chem">Fe2O3</span>
        "<span class=\"chem\">Fe2O3</span>",
        // EN: <span class="chem">Fe3O4</span>
        "<span class=\"chem\">Fe3O4</span>",
        // EN: <span class="chem">Fe3O2</span>
        "<span class=\"chem\">Fe3O2</span>",
      ],
      hints: [
        // EN: Is 1.48 close to a whole number? Is it close to a simple fraction?
        "1.48 接近整數嗎？它接近一個簡單分數嗎？",
        // EN: 1.5 = 3/2. Multiply both sides of the ratio by 2.
        "1.5 = 3/2。把比值的兩邊都乘以 2。",
      ],
      // EN: <p>1.48 is very close to 1.5. Multiply both numbers by 2: Fe : O = 2 : 2.96 ≈ 2 : 3. The empirical formula is <span class="chem">Fe2O3</span>. Ratios such as 1.5, 1.33 and 1.25 must be multiplied up, not rounded.</p>
      solution: "<p>1.48 非常接近 1.5。把兩個數字都乘以 2：Fe : O = 2 : 2.96 ≈ 2 : 3。實驗式是 <span class=\"chem\">Fe2O3</span>。1.5、1.33 和 1.25 這類比值必須乘大，不可以取整數。</p>",
      misconception: {
        // EN (option A): Rounding 1.48 to 1 throws away a real difference of almost 50 %. That is far too big to be experimental error.
        "0": "把 1.48 取整數為 1，會丟掉接近 50 % 的真實差異。這遠大於實驗誤差。",
        // EN (option C): Fe₃O₄ has Fe : O = 1 : 1.33. Your value 1.48 is much closer to another simple ratio.
        "2": "Fe₃O₄ 的 Fe : O = 1 : 1.33。你的數值 1.48 更接近另一個簡單比值。",
        // EN (option D): In Fe₃O₂ there is less oxygen than iron, so O ÷ Fe would be below 1.
        "3": "Fe₃O₂ 中氧比鐵少，所以 O ÷ Fe 會小於 1。",
      },
    },

    // ── lab-empirical-formula-q013 · short · exam · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q013": {
      // EN: <p>In the magnesium experiment, a student uses 0.24 g of magnesium and a balance that reads to 0.01 g. The mass of oxygen gained is 0.16 g, with an uncertainty of ±0.02 g (12.5 %).</p><p>Suggest <strong>two</strong> changes to the method that would reduce the percentage uncertainty in the mass of oxygen. Explain one of them.</p>
      stem: "<p>在鎂的實驗中，某學生用 0.24 g 鎂和讀數至 0.01 g 的天平。增加的氧的質量是 0.16 g，不確定度是 ±0.02 g (12.5 %)。</p><p>提出 (suggest) 實驗方法的<strong>兩項</strong>改變，以減少氧的質量的百分不確定度。解釋 (explain) 其中一項。</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty ÷ value × 100. Which two numbers in that fraction could you change?
        "百分不確定度 = 絕對不確定度 ÷ 數值 × 100。你可以改變這個分數中的哪兩個數字？",
      ],
      // EN: <p>Percentage uncertainty = absolute uncertainty ÷ measured value × 100. To make it smaller you can make the top smaller (a balance reading to 0.001 g gives ±0.002 g for a difference) or the bottom bigger (more magnesium gives more oxygen). With 0.48 g of Mg and a 0.01 g balance, the uncertainty in about 0.32 g of oxygen falls to about 6 %.</p>
      solution: "<p>百分不確定度 = 絕對不確定度 ÷ 量得的數值 × 100。要使它變小，可以使分子變小（讀數至 0.001 g 的天平使質量差的不確定度變成 ±0.002 g），或使分母變大（較多的鎂得出較多的氧）。用 0.48 g Mg 和 0.01 g 的天平，約 0.32 g 氧的不確定度會降至約 6 %。</p>",
      // EN: <p>Use a longer piece of magnesium ribbon (a bigger sample), and use a balance that reads to 0.001 g. With a bigger sample the mass of oxygen is larger, but the absolute uncertainty of the balance stays the same, so it is a smaller percentage.</p>
      answer: "<p>用較長的鎂帶（較大的樣本），並用讀數至 0.001 g 的天平。樣本較大，氧的質量就較大，但天平的絕對不確定度保持不變，所以所佔的百分率較小。</p>",
      markscheme: [
        // EN: Two valid changes: a larger mass of magnesium / longer ribbon AND a more precise balance (0.001 g).
        "兩項有效的改變：較大質量的鎂／較長的鎂帶，以及更精密的天平 (0.001 g)。",
        // EN: Explanation: the same absolute uncertainty is a smaller fraction of a larger mass / a 0.001 g balance has a ten times smaller absolute uncertainty. (Repeating and averaging reduces random error but does not change the uncertainty of one reading; accept it only as a third point.)
        "解釋：相同的絕對不確定度佔較大質量的比例較小／0.001 g 天平的絕對不確定度小十倍。（重複並取平均值可以減少隨機誤差，但不會改變單一讀數的不確定度；只可作為第三點接受。）",
      ],
    },

    // ── lab-empirical-formula-q014 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q014": {
      // EN: <p>A student finds the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14 for magnesium oxide. The expected value is 1.00. Which conclusion is best supported?</p>
      stem: "<p>某學生求得氧化鎂的比值 <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14。預期值是 1.00。哪一個結論最有根據？</p>",
      options: [
        // EN: There must be a systematic error, because the result is not 1.00
        "一定有系統誤差，因為結果不是 1.00",
        // EN: The result agrees with MgO within its uncertainty, so random error could explain the difference
        "在不確定度範圍內，結果與 MgO 相符，所以隨機誤差可以解釋這個差異",
        // EN: The formula of the oxide is not MgO, because the percentage error is 7 %
        "這種氧化物的化學式不是 MgO，因為百分誤差是 7 %",
        // EN: The uncertainty is too large to say anything, so the data should be discarded
        "不確定度太大，不能作出任何結論，所以應該捨棄數據",
      ],
      hints: [
        // EN: Work out the range of values the uncertainty allows: 0.93 − 0.14 to 0.93 + 0.14.
        "計算不確定度容許的數值範圍：0.93 − 0.14 至 0.93 + 0.14。",
        // EN: Is 1.00 inside that range?
        "1.00 在這個範圍內嗎？",
      ],
      // EN: <p>The uncertainty gives a range of 0.79 to 1.07. The expected value 1.00 lies inside it. So the result is consistent with <span class="chem">MgO</span>, and the 7 % difference can be explained by random error alone. To test for a systematic error, the uncertainty must first be made smaller: more magnesium and a 0.001 g balance.</p>
      solution: "<p>不確定度給出的範圍是 0.79 至 1.07。預期值 1.00 在這個範圍內。所以結果與 <span class=\"chem\">MgO</span> 一致，7 % 的差異單憑隨機誤差就可以解釋。要測試有沒有系統誤差，必須先把不確定度減小：用更多的鎂和 0.001 g 的天平。</p>",
      misconception: {
        // EN (option A): A result that differs from 1.00 is expected for every real measurement. Compare the size of the difference with the size of the uncertainty.
        "0": "每次真實的量度，結果都預期會與 1.00 有差異。要把差異的大小和不確定度的大小比較。",
        // EN (option C): A 7 % difference is smaller than the 15 % uncertainty, so the data do not rule out MgO.
        "2": "7 % 的差異小於 15 % 的不確定度，所以數據不能排除 MgO。",
        // EN (option D): The range 0.79 to 1.07 still rules out other simple ratios such as 1.5 and 0.5. Large uncertainty is a reason to improve the method, not to throw the data away.
        "3": "0.79 至 1.07 的範圍仍然排除了 1.5 和 0.5 等其他簡單比值。不確定度大是改進實驗方法的理由，而不是捨棄數據的理由。",
      },
    },

  }
});
