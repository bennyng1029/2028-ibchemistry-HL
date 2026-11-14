/* lab-molar-mass-gas.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-molar-mass-gas.q', {
  questions: {

    // ── lab-molar-mass-gas-q001 · numeric · foundation · SL · Structure 1.4.6 · 2 marks
    "lab-molar-mass-gas-q001": {
      // EN: <p>0.0850 g of magnesium reacts with excess hydrochloric acid.</p><p><span class="chem">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>Calculate the volume of hydrogen produced at STP, in <span class="unit">cm3</span>.</p>
      stem: "<p>0.0850 g 鎂與過量的氫氯酸反應。</p><p><span class=\"chem\">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>計算 (calculate) 在 STP 下產生的氫的體積，以 <span class=\"unit\">cm3</span> 表示。</p>",
      hints: [
        // EN: Find the amount of magnesium. The equation gives the amount of hydrogen.
        "求出鎂的物質的量。方程式給出氫的物質的量。",
        // EN: At STP one mole of an ideal gas occupies 22.7 dm³.
        "在 STP 下，1 摩爾理想氣體佔 22.7 dm³。",
      ],
      // EN: <div class="worked__math"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class="worked__math"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>
      solution: "<div class=\"worked__math\"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class=\"worked__math\"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>",
    },

    // ── lab-molar-mass-gas-q002 · numeric · foundation · SL · Structure 1.5.3 · 2 marks
    "lab-molar-mass-gas-q002": {
      // EN: <p>In an experiment, 0.0620 g of magnesium reacts with excess acid and gives 63.5 <span class="unit">cm3</span> of hydrogen at room temperature and pressure. Calculate the molar volume of hydrogen under these conditions, in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>在一個實驗中，0.0620 g 鎂與過量的酸反應，在常溫常壓下產生 63.5 <span class=\"unit\">cm3</span> 氫。計算 (calculate) 氫在這些條件下的摩爾體積，以 <span class=\"unit\">dm3 mol-1</span> 表示。</p>",
      hints: [
        // EN: One mole of Mg gives one mole of H₂.
        "1 摩爾 Mg 產生 1 摩爾 H₂。",
        // EN: Molar volume = volume in dm³ ÷ amount in mol.
        "摩爾體積 = 以 dm³ 表示的體積 ÷ 以 mol 表示的物質的量。",
      ],
      // EN: <div class="worked__math"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>
      solution: "<div class=\"worked__math\"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class=\"worked__math\"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>",
    },

    // ── lab-molar-mass-gas-q003 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "lab-molar-mass-gas-q003": {
      // EN: <p>A student calculates the molar mass of a vapour using <i>M</i> = <i>mRT</i> / <i>PV</i> with <i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>. The mass is in g and the temperature in K, but the student uses the pressure in kPa and the volume in <span class="unit">cm3</span>. How does the student’s answer compare with the correct value?</p>
      stem: "<p>一名學生用 <i>M</i> = <i>mRT</i> / <i>PV</i> 和 <i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> 計算一種蒸氣的摩爾質量。質量以 g 為單位，溫度以 K 為單位，但學生用了以 kPa 表示的壓強和以 <span class=\"unit\">cm3</span> 表示的體積。學生的答案與正確數值相比是怎樣？</p>",
      options: [
        // EN: It is 1000 times too large.
        "大了 1000 倍。",
        // EN: It is 1000 times too small.
        "小了 1000 倍。",
        // EN: It is 10<sup>6</sup> times too small.
        "小了 10<sup>6</sup> 倍。",
        // EN: It is correct, because the units cancel.
        "正確，因為單位互相抵消。",
      ],
      hints: [
        // EN: 1 kPa = 10³ Pa and 1 cm³ = 10⁻⁶ m³. What is 1 kPa cm³ in Pa m³?
        "1 kPa = 10³ Pa，1 cm³ = 10⁻⁶ m³。1 kPa cm³ 是多少 Pa m³？",
      ],
      // EN: <p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup>. So the number used for <i>PV</i> is 1000 times larger than the SI value. <i>PV</i> is in the denominator, so <i>M</i> comes out 1000 times too small.</p>
      solution: "<p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup>。所以用作 <i>PV</i> 的數值比 SI 數值大 1000 倍。<i>PV</i> 在分母，所以 <i>M</i> 小了 1000 倍。</p>",
      misconception: {
        // EN (option A): Check the direction. kPa × cm³ gives a number for <i>PV</i> that is 1000 times larger than Pa × m³. <i>PV</i> is on the bottom of the fraction.
        "0": "檢查方向。kPa × cm³ 得出的 <i>PV</i> 數值比 Pa × m³ 大 1000 倍。<i>PV</i> 在分數的下方。",
        // EN (option C): The two conversions partly cancel: a pressure in kPa is a number 10³ times smaller than in Pa, but a volume in cm³ is a number 10⁶ times larger than in m³. Overall <i>PV</i> is 10³ times too big as a number.
        "2": "兩個換算部分互相抵消：以 kPa 表示的壓強，數值比以 Pa 表示時小 10³ 倍；但以 cm³ 表示的體積，數值比以 m³ 表示時大 10⁶ 倍。整體來說，<i>PV</i> 的數值大了 10³ 倍。",
        // EN (option D): <i>R</i> = 8.31 is in J K⁻¹ mol⁻¹, and 1 J = 1 Pa m³. Units of <i>P</i> and <i>V</i> must match that.
        "3": "<i>R</i> = 8.31 的單位是 J K⁻¹ mol⁻¹，而 1 J = 1 Pa m³。<i>P</i> 和 <i>V</i> 的單位必須與此配合。",
      },
    },

    // ── lab-molar-mass-gas-q004 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "lab-molar-mass-gas-q004": {
      // EN: <p>0.211 g of a volatile liquid is injected into a gas syringe in a heating jacket at 80.0 °C. The volume of vapour formed is 73.5 <span class="unit">cm3</span> at 99.8 kPa. Calculate the molar mass of the liquid, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>把 0.211 g 一種易揮發液體注入放在 80.0 °C 加熱套中的氣體注射器。在 99.8 kPa 下形成的蒸氣體積是 73.5 <span class=\"unit\">cm3</span>。計算 (calculate) 這種液體的摩爾質量，以 <span class=\"unit\">g mol-1</span> 表示。</p>",
      hints: [
        // EN: Convert to Pa, m³ and K first.
        "先換算為 Pa、m³ 和 K。",
        // EN: <i>M</i> = <i>mRT</i> / <i>PV</i>.
        "<i>M</i> = <i>mRT</i> / <i>PV</i>。",
      ],
      // EN: <div class="worked__math"><i>T</i> = 80.0 + 273.15 = 353.15 K; <i>P</i> = 9.98 × 10<sup>4</sup> Pa; <i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class="worked__math"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>M1 for the unit conversions, M2 for the amount, M3 for the answer. A correct final answer scores all three.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 80.0 + 273.15 = 353.15 K；<i>P</i> = 9.98 × 10<sup>4</sup> Pa；<i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class=\"worked__math\"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class=\"worked__math\"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>M1：單位換算；M2：物質的量；M3：答案。最終答案正確可得全部三分。</p>",
    },

    // ── lab-molar-mass-gas-q005 · short · exam · SL · Structure 1.5.2 · 2 marks
    "lab-molar-mass-gas-q005": {
      // EN: <p>In the volatile-liquid method, the heating jacket is set at least 20 °C above the boiling point of the liquid. Explain <strong>two</strong> reasons for this.</p>
      stem: "<p>在易揮發液體的方法中，加熱套設在比液體沸點高至少 20 °C。解釋 (explain) 這樣做的<strong>兩個</strong>原因。</p>",
      hints: [
        // EN: What would happen to a drop of liquid that does not evaporate?
        "一滴沒有蒸發的液體會怎樣？",
        // EN: Under which conditions does a real gas deviate from ideal behaviour?
        "真實氣體在甚麼條件下偏離理想行為？",
      ],
      // EN: <p>All of the liquid must vaporize; any liquid left over means the volume is too small. Far above its boiling point the vapour behaves more like an ideal gas, because the particles move faster and the intermolecular forces become negligible, so <i>PV</i> = <i>nRT</i> applies.</p>
      answer: "<p>所有液體都必須汽化；任何剩下的液體都表示體積太小。在遠高於沸點的溫度下，蒸氣的行為較接近理想氣體，因為粒子移動得較快，分子間引力變得可以忽略，所以 <i>PV</i> = <i>nRT</i> 適用。</p>",
      markscheme: [
        // EN: So that all the liquid vaporizes / no liquid remains (otherwise <i>V</i> is too small and <i>M</i> too high).
        "使所有液體都汽化／沒有液體剩下（否則 <i>V</i> 太小而 <i>M</i> 太高）。",
        // EN: Close to the boiling point the intermolecular forces are significant / the vapour is not ideal; well above it the vapour behaves (more) ideally.
        "接近沸點時分子間引力顯著／蒸氣不是理想的；遠高於沸點時蒸氣的行為（較）接近理想。",
      ],
    },

    // ── lab-molar-mass-gas-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-molar-mass-gas-q006": {
      // EN: <p>A student uses magnesium ribbon with a dull coating of magnesium oxide, without cleaning it, to find the molar volume of hydrogen. How is the result affected?</p>
      stem: "<p>一名學生用表面有一層暗啞氧化鎂的鎂帶求氫的摩爾體積，沒有先把它擦淨。結果受到甚麼影響？</p>",
      options: [
        // EN: The molar volume is too low.
        "摩爾體積太低。",
        // EN: The molar volume is too high.
        "摩爾體積太高。",
        // EN: No effect, because magnesium oxide also reacts with the acid.
        "沒有影響，因為氧化鎂也與酸反應。",
        // EN: No effect, because the acid is in excess.
        "沒有影響，因為酸過量。",
      ],
      hints: [
        // EN: Does magnesium oxide produce hydrogen when it reacts with acid?
        "氧化鎂與酸反應時會產生氫嗎？",
      ],
      // EN: <p>Part of the weighed mass is MgO, which reacts to give MgCl<sub>2</sub> and water but no hydrogen. The student calculates the amount of hydrogen from the full mass, so the amount used is too large and the volume measured too small for it. The molar volume, <i>V</i> ÷ <i>n</i>, is too low.</p>
      solution: "<p>稱量的質量中有一部分是 MgO，它反應生成 MgCl<sub>2</sub> 和水，但不產生氫。學生用全部質量計算氫的物質的量，所以所用的物質的量太大，而量得的體積相對於這個物質的量太小。摩爾體積 <i>V</i> ÷ <i>n</i> 太低。</p>",
      misconception: {
        // EN (option B): Follow the chain. The oxide adds mass but no hydrogen. Less gas for the same recorded mass means a smaller volume per mole.
        "1": "按思路推理。氧化物增加了質量，但不產生氫。相同的記錄質量產生較少氣體，表示每摩爾的體積較小。",
        // EN (option C): Magnesium oxide does react with the acid, but it forms magnesium chloride and water, not hydrogen.
        "2": "氧化鎂確實與酸反應，但它生成氯化鎂和水，而不是氫。",
        // EN (option D): Excess acid makes sure all the solid reacts. It cannot make the oxide produce hydrogen.
        "3": "過量的酸確保所有固體都反應。它不能使氧化物產生氫。",
      },
    },

    // ── lab-molar-mass-gas-q007 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-molar-mass-gas-q007": {
      // EN: <p>The reaction of magnesium with hydrochloric acid is exothermic. A student reads the gas syringe as soon as the fizzing stops, while the flask is still warm, and uses the room temperature in the calculation. What is the effect on the molar volume at room conditions?</p>
      stem: "<p>鎂與氫氯酸的反應是放熱的。一名學生在停止冒泡後、錐形瓶仍然溫暖時就立即讀取氣體注射器，並在計算中使用室溫。這對室內條件下的摩爾體積有甚麼影響？</p>",
      options: [
        // EN: It is too high, because warm gas occupies a larger volume.
        "太高，因為溫暖的氣體佔較大的體積。",
        // EN: It is too low, because warm gas occupies a smaller volume.
        "太低，因為溫暖的氣體佔較小的體積。",
        // EN: It is too low, because less hydrogen is produced at a higher temperature.
        "太低，因為溫度較高時產生的氫較少。",
        // EN: No effect, because the amount of hydrogen is the same.
        "沒有影響，因為氫的物質的量相同。",
      ],
      hints: [
        // EN: At constant pressure, how does the volume of a gas change with temperature?
        "在壓強不變時，氣體的體積怎樣隨溫度改變？",
      ],
      // EN: <p>The amount of hydrogen is fixed by the magnesium. Warm gas has a larger volume than the same gas at room temperature, so the volume read is too large and <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> is too high. Wait for the flask to cool before reading.</p>
      solution: "<p>氫的物質的量由鎂決定。溫暖的氣體比室溫下同一份氣體的體積大，所以讀得的體積太大，<i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> 太高。讀數前要等候錐形瓶冷卻。</p>",
      misconception: {
        // EN (option B): At constant pressure, volume is proportional to the absolute temperature. Warmer gas takes up more space, not less.
        "1": "在壓強不變時，體積與絕對溫度成正比。較暖的氣體佔較多空間，而不是較少。",
        // EN (option C): The amount of hydrogen depends only on the mass of magnesium. Temperature changes the volume that amount occupies.
        "2": "氫的物質的量只取決於鎂的質量。溫度改變的是這些氫所佔的體積。",
        // EN (option D): The amount is the same, but the volume read is not the volume at room temperature. That volume is larger.
        "3": "物質的量相同，但讀得的體積不是室溫下的體積。讀得的體積較大。",
      },
    },

    // ── lab-molar-mass-gas-q008 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "lab-molar-mass-gas-q008": {
      // EN: <p>Data from a volatile-liquid experiment:</p><ul><li>mass of liquid (two weighings) = 0.125 ± 0.002 g</li><li>volume of vapour (two readings) = 62.0 ± 1.0 <span class="unit">cm3</span></li><li>temperature = 371.2 ± 0.5 K</li><li>pressure = 100.5 ± 0.1 kPa</li></ul><p>Calculate the percentage uncertainty in the molar mass calculated with <i>M</i> = <i>mRT</i> / <i>PV</i>.</p>
      stem: "<p>一個易揮發液體實驗的數據：</p><ul><li>液體的質量（兩次稱量）= 0.125 ± 0.002 g</li><li>蒸氣的體積（兩個讀數）= 62.0 ± 1.0 <span class=\"unit\">cm3</span></li><li>溫度 = 371.2 ± 0.5 K</li><li>壓強 = 100.5 ± 0.1 kPa</li></ul><p>計算 (calculate) 用 <i>M</i> = <i>mRT</i> / <i>PV</i> 計算出的摩爾質量的百分不確定度。</p>",
      hints: [
        // EN: For products and quotients, add the percentage uncertainties.
        "對於乘積和商，把百分不確定度相加。",
        // EN: <i>R</i> is a constant, so it has no uncertainty.
        "<i>R</i> 是常數，所以沒有不確定度。",
      ],
      // EN: <div class="worked__math">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class="worked__math">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class="worked__math">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %; %<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class="worked__math">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>
      solution: "<div class=\"worked__math\">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class=\"worked__math\">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class=\"worked__math\">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %；%<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class=\"worked__math\">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>",
    },

    // ── lab-molar-mass-gas-q009 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "lab-molar-mass-gas-q009": {
      // EN: <p>A student’s molar volume of hydrogen is 24.6 <span class="unit">dm3 mol-1</span> at 22.0 °C and 101.5 kPa. Calculate the molar volume this corresponds to at STP (273.15 K and 100 kPa), in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>一名學生求得氫在 22.0 °C 和 101.5 kPa 下的摩爾體積是 24.6 <span class=\"unit\">dm3 mol-1</span>。計算 (calculate) 這相當於 STP（273.15 K 和 100 kPa）下的摩爾體積，以 <span class=\"unit\">dm3 mol-1</span> 表示。</p>",
      hints: [
        // EN: Use <i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂ with temperatures in kelvin.
        "用 <i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂，溫度以開爾文為單位。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class="worked__math"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>The data booklet value is 22.7 dm<sup>3</sup> mol<sup>−1</sup>, so this result is 1.8 % high.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class=\"worked__math\"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>數據手冊的數值是 22.7 dm<sup>3</sup> mol<sup>−1</sup>，所以這個結果高了 1.8 %。</p>",
    },

    // ── lab-molar-mass-gas-q010 · short · challenge · SL · Structure 1.5.4 · 4 marks
    "lab-molar-mass-gas-q010": {
      // EN: <p>A student releases butane from a gas lighter into an upturned measuring cylinder full of water. The lighter is weighed before and after. The student’s molar mass for butane is 52.6 g mol<sup>−1</sup>; the accepted value is 58.14 g mol<sup>−1</sup>. Suggest <strong>two</strong> reasons why the result is too low, and an improvement for each.</p>
      stem: "<p>一名學生把打火機中的丁烷釋放到一個倒轉並注滿水的量筒中。打火機在之前和之後都稱量過。學生求得丁烷的摩爾質量是 52.6 g mol<sup>−1</sup>；公認數值是 58.14 g mol<sup>−1</sup>。提出 (suggest) 結果太低的<strong>兩個</strong>原因，並為每個原因提出一項改進。</p>",
      hints: [
        // EN: <i>M</i> = <i>m</i> ÷ <i>n</i>. Too low a result means <i>m</i> too small or <i>n</i> too large.
        "<i>M</i> = <i>m</i> ÷ <i>n</i>。結果太低，表示 <i>m</i> 太小或 <i>n</i> 太大。",
        // EN: Which measurement could water on the lighter affect?
        "打火機上的水可能影響哪一項量度？",
      ],
      // EN: <p>The lighter was still wet when reweighed, so the loss in mass (the mass of butane) was too small; dry the lighter thoroughly before the second weighing. The water level inside the cylinder was above the level outside, so the gas was below atmospheric pressure and the amount calculated with atmospheric pressure was too large; raise or lower the cylinder until the levels are equal before reading. The gas also contains water vapour, so the volume is larger than the volume of butane alone.</p>
      answer: "<p>再稱量時打火機仍然是濕的，所以減少的質量（丁烷的質量）太小；第二次稱量前要把打火機徹底弄乾。量筒內的水位高於量筒外的水位，所以氣體低於大氣壓強，用大氣壓強計算出的物質的量太大；讀數前要升高或降低量筒，直至內外水位相同。氣體也含有水蒸氣，所以體積比單是丁烷的體積大。</p>",
      markscheme: [
        // EN: The lighter was wet when reweighed / water on the lighter, so the mass of butane released appears too small (<i>M</i> too low).
        "再稱量時打火機是濕的／打火機上有水，所以釋放的丁烷質量看來太小（<i>M</i> 太低）。",
        // EN: Improvement: dry the lighter thoroughly (with paper towel) before reweighing.
        "改進：再稱量前（用紙巾）把打火機徹底弄乾。",
        // EN: Water levels inside and outside the cylinder not equal, so the gas pressure is not atmospheric pressure / <i>n</i> calculated too large (<i>M</i> too low).
        "量筒內外的水位不相同，所以氣體壓強不是大氣壓強／計算出的 <i>n</i> 太大（<i>M</i> 太低）。",
        // EN: Improvement: adjust the cylinder so the water levels are equal before reading the volume.
        "改進：讀取體積前調整量筒，使內外水位相同。",
        // EN: Accept: the collected gas contains water vapour, so the volume is too large (<i>M</i> too low); note it as a limitation.
        "接受：收集的氣體含有水蒸氣，所以體積太大（<i>M</i> 太低）；把它記為一項局限。",
        // EN: Accept: the measuring cylinder was read at the top of the meniscus / gas volume over-read; read at eye level.
        "接受：在彎液面頂部讀取量筒／氣體體積讀得太大；眼睛要平視讀數。",
      ],
    },

    // ── lab-molar-mass-gas-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "lab-molar-mass-gas-q011": {
      // EN: <p>A student injects different masses, <i>m</i>, of one liquid into a heated gas syringe at constant temperature <i>T</i> and pressure <i>P</i>, and plots the volume of vapour, <i>V</i>, against <i>m</i>. The line passes through the origin with gradient <i>k</i>. Which expression gives the molar mass?</p>
      stem: "<p>一名學生在溫度 <i>T</i> 和壓強 <i>P</i> 不變下，把不同質量 <i>m</i> 的同一種液體注入加熱了的氣體注射器，並繪畫蒸氣體積 <i>V</i> 對 <i>m</i> 的圖表。直線穿過原點，斜率是 <i>k</i>。哪一個表達式給出摩爾質量？</p>",
      options: [
        // EN: <i>RT</i> / <i>Pk</i>
        "<i>RT</i> / <i>Pk</i>",
        // EN: <i>Pk</i> / <i>RT</i>
        "<i>Pk</i> / <i>RT</i>",
        // EN: <i>kRT</i> / <i>P</i>
        "<i>kRT</i> / <i>P</i>",
        // EN: <i>P</i> / <i>kRT</i>
        "<i>P</i> / <i>kRT</i>",
      ],
      hints: [
        // EN: Rearrange <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> into the form <i>V</i> = (something) × <i>m</i>.
        "把 <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> 重排成 <i>V</i> = (某個量) × <i>m</i> 的形式。",
      ],
      // EN: <p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i>, so the gradient <i>k</i> = <i>RT</i> / <i>PM</i>. Rearranging: <i>M</i> = <i>RT</i> / <i>Pk</i>.</p>
      solution: "<p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i>，所以斜率 <i>k</i> = <i>RT</i> / <i>PM</i>。重排：<i>M</i> = <i>RT</i> / <i>Pk</i>。</p>",
      misconception: {
        // EN (option B): This is the reciprocal. Start from <i>V</i> = <i>mRT</i> / <i>PM</i> and pick out the part that multiplies <i>m</i>.
        "1": "這是倒數。從 <i>V</i> = <i>mRT</i> / <i>PM</i> 開始，找出乘以 <i>m</i> 的部分。",
        // EN (option C): This would be correct only if the gradient were proportional to <i>M</i>. A heavier vapour gives fewer moles per gram, so a smaller gradient.
        "2": "只有斜率與 <i>M</i> 成正比，這才正確。較重的蒸氣每克的摩爾數較少，所以斜率較小。",
        // EN (option D): Check the dimensions: <i>RT</i> / <i>P</i> has units of volume per mole, so it must sit on top.
        "3": "檢查量綱：<i>RT</i> / <i>P</i> 的單位是每摩爾的體積，所以它必須在分子。",
      },
    },

    // ── lab-molar-mass-gas-q012 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-molar-mass-gas-q012": {
      // EN: <p>A graph of the volume of hydrogen against the mass of magnesium (with excess acid) is a straight line through the origin with a gradient of 1015 <span class="unit">cm3</span> g<sup>−1</sup>. Calculate the molar volume of hydrogen under the conditions of the experiment, in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>氫的體積對鎂的質量（酸過量）的圖表是一條穿過原點的直線，斜率是 1015 <span class=\"unit\">cm3</span> g<sup>−1</sup>。計算 (calculate) 氫在實驗條件下的摩爾體積，以 <span class=\"unit\">dm3 mol-1</span> 表示。</p>",
      hints: [
        // EN: The gradient is the volume of hydrogen from 1 g of magnesium. How many grams of magnesium are in one mole?
        "斜率是 1 g 鎂產生的氫的體積。1 摩爾鎂有多少克？",
      ],
      // EN: <div class="worked__math">volume from 1 mol of Mg = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class="worked__math"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup> (1 mol of Mg gives 1 mol of H<sub>2</sub>)</div>
      solution: "<div class=\"worked__math\">1 mol Mg 產生的體積 = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class=\"worked__math\"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup>（1 mol Mg 產生 1 mol H<sub>2</sub>）</div>",
    },

    // ── lab-molar-mass-gas-q013 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "lab-molar-mass-gas-q013": {
      // EN: <p>Why would the molar volume measured for hydrogen be the same as that for oxygen under the same conditions of temperature and pressure?</p>
      stem: "<p>為甚麼在相同的溫度和壓強條件下，量得的氫的摩爾體積與氧的相同？</p>",
      options: [
        // EN: Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules.
        "在相同溫度和壓強下，相同體積的氣體含有相同數目的分子。",
        // EN: Hydrogen and oxygen molecules have the same mass.
        "氫分子和氧分子的質量相同。",
        // EN: Hydrogen and oxygen molecules are the same size.
        "氫分子和氧分子的大小相同。",
        // EN: Both gases are diatomic, so they contain the same number of atoms per gram.
        "兩種氣體都是雙原子的，所以每克含有相同數目的原子。",
      ],
      hints: [
        // EN: This is Avogadro’s law.
        "這是亞佛加德羅定律。",
      ],
      // EN: <p>Avogadro’s law: equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules. So one mole of any ideal gas occupies the same volume under the same conditions.</p>
      solution: "<p>亞佛加德羅定律：在相同溫度和壓強下，相同體積的任何氣體都含有相同數目的分子。所以在相同條件下，1 摩爾任何理想氣體所佔的體積都相同。</p>",
      misconception: {
        // EN (option B): An O₂ molecule is 16 times heavier than an H₂ molecule. Mass does not decide the volume of a gas.
        "1": "一個 O₂ 分子比一個 H₂ 分子重 16 倍。質量不決定氣體的體積。",
        // EN (option C): In the ideal gas model the volume of the particles is negligible, so their size does not matter.
        "2": "在理想氣體模型中，粒子的體積可以忽略，所以粒子的大小並不重要。",
        // EN (option D): A gram of hydrogen contains far more molecules than a gram of oxygen. The molar volume is about the number of molecules, not the mass.
        "3": "1 克氫所含的分子比 1 克氧多得多。摩爾體積與分子的數目有關，而不是質量。",
      },
    },

    // ── lab-molar-mass-gas-q014 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "lab-molar-mass-gas-q014": {
      // EN: <p>Why is the hydrochloric acid used in excess when finding the molar volume of hydrogen from magnesium?</p>
      stem: "<p>用鎂求氫的摩爾體積時，為甚麼要用過量的氫氯酸？</p>",
      options: [
        // EN: So that all the magnesium reacts, and the amount of hydrogen depends only on the mass of magnesium.
        "使所有鎂都反應，氫的物質的量就只取決於鎂的質量。",
        // EN: So that the reaction is fast enough to finish before the gas cools.
        "使反應夠快，在氣體冷卻之前完成。",
        // EN: So that the acid absorbs the heat given out by the reaction.
        "使酸吸收反應放出的熱。",
        // EN: So that the hydrogen does not dissolve in the solution.
        "使氫不溶解在溶液中。",
      ],
      hints: [
        // EN: The calculation uses the mass of magnesium. What has to happen to all of it?
        "計算用的是鎂的質量。所有鎂都必須怎樣？",
      ],
      // EN: <p>The amount of hydrogen is calculated from the mass of magnesium, using the 1 : 1 ratio. That only works if all the magnesium reacts, so the magnesium must be the limiting reactant and the acid must be in excess.</p>
      solution: "<p>氫的物質的量是用 1 : 1 的比例，從鎂的質量計算出來的。只有所有鎂都反應，這才成立，所以鎂必須是限量反應物，而酸必須過量。</p>",
      misconception: {
        // EN (option B): Excess acid may speed things up a little, but that is not why it is used. The calculation needs every gram of magnesium to react.
        "1": "過量的酸可能會稍為加快反應，但這不是使用它的原因。計算需要每一克鎂都反應。",
        // EN (option C): The volume of acid has little effect on the temperature, and you wait for the gas to cool anyway.
        "2": "酸的體積對溫度影響很小，而且你本來就會等候氣體冷卻。",
        // EN (option D): The acid is mostly water. More of it would, if anything, dissolve slightly more hydrogen.
        "3": "酸大部分是水。酸較多的話，如果有影響，也只會溶解稍多的氫。",
      },
    },

  }
});
