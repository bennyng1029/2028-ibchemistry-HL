/* lab-standard-solution.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-standard-solution.q', {
  questions: {

    // ── lab-standard-solution-q001 · numeric · foundation · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q001": {
      // EN: <p>A student needs 250.0 <span class="unit">cm3</span> of a 0.0400 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of sodium carbonate the student must weigh. <i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "<p>一名學生需要 250.0 <span class=\"unit\">cm3</span> 0.0400 <span class=\"unit\">mol dm-3</span> 的碳酸鈉 <span class=\"chem\">Na2CO3</span> 標準溶液。</p><p>計算 (calculate) 這名學生必須稱取的碳酸鈉質量。<i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Convert 250.0 cm³ to dm³ first.
        "先把 250.0 cm³ 換算為 dm³。",
        // EN: n = C × V, then m = n × M.
        "n = C × V，然後 m = n × M。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250.0 <span class="unit">cm3</span> ÷ 1000 = 0.2500 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.0400 <span class="unit">mol dm-3</span> × 0.2500 <span class="unit">dm3</span> = 0.0100 <span class="unit">mol</span></div><div class="worked__math"><i>m</i> = 0.0100 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span> = 1.06 <span class="unit">g</span></div><p>M1 for the amount (with the volume in dm³), M2 for the mass.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 250.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.2500 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = 0.0400 <span class=\"unit\">mol dm-3</span> × 0.2500 <span class=\"unit\">dm3</span> = 0.0100 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>m</i> = 0.0100 <span class=\"unit\">mol</span> × 105.99 <span class=\"unit\">g mol-1</span> = 1.06 <span class=\"unit\">g</span></div><p>M1：求出物質的量（體積以 dm³ 為單位）；M2：求出質量。</p>",
    },

    // ── lab-standard-solution-q002 · order · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q002": {
      // EN: <p>Put these steps for preparing a standard solution in the correct order.</p>
      stem: "<p>把配製標準溶液的步驟按正確次序排列。</p>",
      options: [
        // EN: Weigh the solid accurately
        "準確稱量固體",
        // EN: Dissolve it in a small volume of distilled water in a beaker
        "在燒杯中用少量蒸餾水把固體溶解",
        // EN: Pour the solution through a funnel into a volumetric flask
        "把溶液經漏斗倒進容量瓶",
        // EN: Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask
        "用蒸餾水沖洗燒杯、玻璃棒和漏斗，並把洗液加進容量瓶",
        // EN: Add distilled water until the bottom of the meniscus is on the mark
        "加入蒸餾水，直至彎液面底部在刻度線上",
        // EN: Stopper the flask and invert it several times
        "塞好容量瓶，倒轉數次",
      ],
      hints: [
        // EN: The solid must be fully dissolved before it goes into the flask.
        "固體必須完全溶解，才可以放進容量瓶。",
        // EN: Mixing comes last, once the volume is right.
        "體積正確之後，最後才搖勻。",
      ],
      // EN: <p>Weigh → dissolve in a beaker → transfer to the volumetric flask → add the rinsings → make up to the mark → stopper and invert. The rinsings go in <em>before</em> making up to the mark, because they are part of the final volume.</p>
      solution: "<p>稱量 → 在燒杯中溶解 → 轉移到容量瓶 → 加入洗液 → 加水至刻度線 → 塞好並倒轉。洗液要在加水至刻度線<em>之前</em>加入，因為洗液是最終體積的一部分。</p>",
    },

    // ── lab-standard-solution-q003 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q003": {
      // EN: <p>A student must measure exactly 10.00 <span class="unit">cm3</span> of a stock solution for a dilution. Which piece of glassware is the most suitable?</p>
      stem: "<p>一名學生做稀釋時，必須準確量取 10.00 <span class=\"unit\">cm3</span> 儲備溶液。哪一件玻璃儀器最合適？</p>",
      options: [
        // EN: A 10 cm³ measuring cylinder
        "10 cm³ 量筒",
        // EN: A 10.00 cm³ volumetric pipette
        "10.00 cm³ 移液管",
        // EN: A 50 cm³ beaker
        "50 cm³ 燒杯",
        // EN: A 25 cm³ conical flask
        "25 cm³ 錐形瓶",
      ],
      hints: [
        // EN: Which piece of glassware is made to deliver one volume very precisely?
        "哪一件玻璃儀器是專為非常精密地放出一個體積而設計的？",
      ],
      // EN: <p>A volumetric (bulb) pipette delivers one fixed volume with a small uncertainty (about ±0.02 to ±0.04 <span class="unit">cm3</span>). A burette would also be acceptable. A measuring cylinder is not precise enough.</p>
      solution: "<p>移液管（球形移液管）放出一個固定體積，不確定度很小（約 ±0.02 至 ±0.04 <span class=\"unit\">cm3</span>）。用滴定管也可以接受。量筒的精密度不足。</p>",
      misconception: {
        // EN (option A): A measuring cylinder is fine for rough volumes, but its uncertainty is several times larger than that of a pipette. Markschemes do not accept it for a standard solution or dilution.
        "0": "量筒適合量取粗略的體積，但它的不確定度比移液管大好幾倍。配製標準溶液或稀釋時，評分準則不接受量筒。",
        // EN (option C): The marks on a beaker are only a rough guide, often ±5 % or worse.
        "2": "燒杯上的刻度只是粗略的參考，誤差往往達 ±5 % 或更大。",
        // EN (option D): A conical flask is used to hold a solution in a titration. Its marks, if any, are not for measuring.
        "3": "錐形瓶在滴定中用來盛載溶液。它上面即使有刻度，也不是用來量度的。",
      },
    },

    // ── lab-standard-solution-q004 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q004": {
      // EN: <p>To make one standard, a student runs 3.50 <span class="unit">cm3</span> of 0.250 <span class="unit">mol dm-3</span> copper(II) sulfate from one burette and 6.50 <span class="unit">cm3</span> of distilled water from another into a test tube, and mixes them.</p><p>Calculate the concentration of copper(II) sulfate in the test tube.</p>
      stem: "<p>為了配製一種標準溶液，一名學生從一支滴定管放出 3.50 <span class=\"unit\">cm3</span> 0.250 <span class=\"unit\">mol dm-3</span> 硫酸銅(II) 溶液，再從另一支滴定管放出 6.50 <span class=\"unit\">cm3</span> 蒸餾水到一支試管中，然後混勻。</p><p>計算 (calculate) 試管中硫酸銅(II) 的濃度。</p>",
      hints: [
        // EN: The total volume is 3.50 + 6.50 cm³.
        "總體積是 3.50 + 6.50 cm³。",
        // EN: C₂ = C₁ × V₁ ÷ V₂.
        "C₂ = C₁ × V₁ ÷ V₂。",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 <span class="unit">cm3</span></div><div class="worked__math"><i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 <span class="unit">mol dm-3</span></div>
      solution: "<div class=\"worked__math\"><i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 <span class=\"unit\">cm3</span></div><div class=\"worked__math\"><i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 <span class=\"unit\">mol dm-3</span></div>",
    },

    // ── lab-standard-solution-q005 · short · exam · SL · Structure 1.4.5 · 3 marks
    "lab-standard-solution-q005": {
      // EN: <p>Describe how you would prepare 100.0 <span class="unit">cm3</span> of 0.0250 <span class="unit">mol dm-3</span> copper(II) sulfate solution from a 0.250 <span class="unit">mol dm-3</span> stock solution. Include the volume of stock solution needed.</p>
      stem: "<p>描述 (describe) 你會怎樣用 0.250 <span class=\"unit\">mol dm-3</span> 儲備溶液配製 100.0 <span class=\"unit\">cm3</span> 0.0250 <span class=\"unit\">mol dm-3</span> 硫酸銅(II) 溶液。答案要包括所需儲備溶液的體積。</p>",
      hints: [
        // EN: Use C₁V₁ = C₂V₂ to find V₁.
        "用 C₁V₁ = C₂V₂ 求 V₁。",
        // EN: Name the glassware for each volume, then say how to finish and mix.
        "寫出量取每個體積所用的玻璃儀器，再說明怎樣完成和搖勻。",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 <span class="unit">cm3</span></div><p>Pipette 10.0 cm³ of stock into a 100.0 cm³ volumetric flask. Add distilled water until the bottom of the meniscus is on the mark, adding the last drops with a dropping pipette. Stopper and invert several times. Do not write “add 90 cm³ of water”: the flask is filled <em>to the mark</em>.</p>
      solution: "<div class=\"worked__math\"><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 <span class=\"unit\">cm3</span></div><p>用移液管把 10.0 cm³ 儲備溶液放進 100.0 cm³ 容量瓶。加入蒸餾水，直至彎液面底部在刻度線上，最後幾滴用滴管加入。塞好並倒轉數次。不要寫「加入 90 cm³ 水」：容量瓶是加水<em>至刻度線</em>的。</p>",
      // EN: <p><i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³. Measure 10.0 cm³ of the stock with a pipette (or burette) into a 100.0 cm³ volumetric flask. Add distilled water up to the mark, then stopper and invert to mix.</p>
      answer: "<p><i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³。用移液管（或滴定管）量取 10.0 cm³ 儲備溶液，放進 100.0 cm³ 容量瓶。加入蒸餾水至刻度線，然後塞好並倒轉搖勻。</p>",
      markscheme: [
        // EN: M1: volume of stock = 10.0 cm³.
        "M1：儲備溶液的體積 = 10.0 cm³。",
        // EN: M2: measured with a (volumetric) pipette OR burette, into a 100.0 cm³ volumetric flask. (Do not accept a measuring cylinder.)
        "M2：用（容量）移液管或滴定管量取，放進 100.0 cm³ 容量瓶。（不接受量筒。）",
        // EN: M3: make up to the mark with distilled/deionized water AND stopper and invert/mix.
        "M3：用蒸餾水／去離子水加至刻度線，並且塞好並倒轉／搖勻。",
      ],
    },

    // ── lab-standard-solution-q006 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q006": {
      // EN: <p>A student plots a calibration curve for copper(II) sulfate. The line of best fit has a gradient of 2.84 <span class="unit">dm3 mol-1</span> and a <i>y</i>-intercept of 0.01. The mean absorbance of an unknown solution is 0.52.</p><p>Calculate the concentration of copper(II) sulfate in the unknown.</p>
      stem: "<p>一名學生繪畫硫酸銅(II) 的校準曲線。最佳擬合線的斜率是 2.84 <span class=\"unit\">dm3 mol-1</span>，<i>y</i> 截距是 0.01。一種未知溶液的平均吸光度是 0.52。</p><p>計算 (calculate) 未知溶液中硫酸銅(II) 的濃度。</p>",
      hints: [
        // EN: The line is absorbance = gradient × concentration + intercept.
        "直線是：吸光度 = 斜率 × 濃度 + 截距。",
        // EN: Rearrange: concentration = (absorbance − intercept) ÷ gradient.
        "重排：濃度 = (吸光度 − 截距) ÷ 斜率。",
      ],
      // EN: <div class="worked__math">[<span class="chem">CuSO4</span>] = (0.52 − 0.01) ÷ 2.84 = 0.18 <span class="unit">mol dm-3</span></div><p>The absorbance has 2 significant figures, so 0.18 <span class="unit">mol dm-3</span> (0.180 is also accepted).</p>
      solution: "<div class=\"worked__math\">[<span class=\"chem\">CuSO4</span>] = (0.52 − 0.01) ÷ 2.84 = 0.18 <span class=\"unit\">mol dm-3</span></div><p>吸光度有 2 位有效數字，所以答案是 0.18 <span class=\"unit\">mol dm-3</span>（0.180 也接受）。</p>",
    },

    // ── lab-standard-solution-q007 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q007": {
      // EN: <p>Copper(II) sulfate solution is blue. Why is a red filter used in the colorimeter when making its calibration curve?</p>
      stem: "<p>硫酸銅(II) 溶液是藍色的。為甚麼繪畫它的校準曲線時，比色計要用紅色濾光片？</p>",
      options: [
        // EN: The solution absorbs red light most strongly, so absorbance changes most with concentration
        "溶液最強烈吸收紅光，所以吸光度隨濃度的變化最大",
        // EN: Blue light passes through the solution, so the colorimeter measures the blue colour
        "藍光穿過溶液，所以比色計量度的是藍色",
        // EN: Red light has the most energy, so it gives the largest readings
        "紅光的能量最高，所以讀數最大",
        // EN: The filter should be the same colour as the solution
        "濾光片應與溶液的顏色相同",
      ],
      hints: [
        // EN: A solution looks blue because blue light reaches your eye. What happens to the other colours?
        "溶液看起來是藍色，是因為藍光到達你的眼睛。其他顏色怎樣了？",
        // EN: Look at the colour wheel in the data booklet.
        "看看數據手冊中的色輪。",
      ],
      // EN: <p>A blue solution absorbs the complementary colour, orange–red, most strongly. With a red filter the absorbance changes a lot as the concentration changes, so the calibration line is steep and each reading is precise compared with its size.</p>
      solution: "<p>藍色溶液最強烈吸收它的補色，即橙紅色。用紅色濾光片時，吸光度隨濃度變化很大，所以校準直線很陡，每個讀數相對於它的大小都很精密。</p>",
      misconception: {
        // EN (option B): The solution looks blue because blue light passes through it. Light that passes through is not absorbed, so it shows little change with concentration.
        "1": "溶液看起來是藍色，是因為藍光穿過了它。穿過的光沒有被吸收，所以隨濃度的變化很小。",
        // EN (option C): Red light has the lowest energy of the visible colours. The choice is about which colour the solution absorbs.
        "2": "紅光是可見光中能量最低的顏色。選擇的關鍵在於溶液吸收哪種顏色。",
        // EN (option D): A filter of the same colour lets through light the solution hardly absorbs. The readings would be tiny.
        "3": "與溶液顏色相同的濾光片，讓溶液幾乎不吸收的光通過。讀數會非常小。",
      },
    },

    // ── lab-standard-solution-q008 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q008": {
      // EN: <p>While making a standard solution, a student adds water too quickly and the meniscus ends up above the mark of the volumetric flask. The student calculates the concentration from the mass weighed and the volume of the flask. How does the true concentration compare with the calculated value?</p>
      stem: "<p>配製標準溶液時，一名學生加水太快，彎液面最終高於容量瓶的刻度線。這名學生用稱取的質量和容量瓶的體積計算濃度。真正濃度與計算值相比是怎樣？</p>",
      options: [
        // EN: Higher, because more water dissolves more solid
        "較高，因為較多的水能溶解較多固體",
        // EN: Lower, because the same amount of solute is in a larger volume
        "較低，因為相同物質的量的溶質分佈在較大的體積中",
        // EN: The same, because the amount of solute has not changed
        "相同，因為溶質的物質的量沒有改變",
        // EN: Lower, because some solute is lost over the mark
        "較低，因為部分溶質從刻度線上方流失了",
      ],
      hints: [
        // EN: Concentration = amount ÷ volume. Which of these has changed?
        "濃度 = 物質的量 ÷ 體積。哪一個改變了？",
      ],
      // EN: <p>The amount of solute is unchanged but the volume is larger than the flask’s stated volume, so the true concentration is <strong>lower</strong> than calculated. The solution must be made again; you cannot remove water. Add the last few cm³ with a dropping pipette.</p>
      solution: "<p>溶質的物質的量不變，但體積大於容量瓶標明的體積，所以真正濃度比計算值<strong>低</strong>。溶液必須重新配製；你無法把水取走。最後幾 cm³ 要用滴管加入。</p>",
      misconception: {
        // EN (option A): All the solid had already dissolved. Extra water only spreads the same amount of solute through more volume.
        "0": "所有固體早已溶解。多加的水只會把相同物質的量的溶質分佈到更大的體積中。",
        // EN (option C): The amount is the same, but concentration is amount ÷ volume, and the volume is now larger.
        "2": "物質的量相同，但濃度是物質的量 ÷ 體積，而體積現在變大了。",
        // EN (option D): Nothing is lost from the flask. The problem is the extra water.
        "3": "容量瓶中沒有任何東西流失。問題在於多加了水。",
      },
    },

    // ── lab-standard-solution-q009 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q009": {
      // EN: <p>A student weighs 2.50 g of solid by difference on a balance that reads to ±0.01 g, and makes it up to 100.0 <span class="unit">cm3</span> in a volumetric flask with an uncertainty of ±0.10 <span class="unit">cm3</span>.</p><p>Calculate the percentage uncertainty in the concentration of the solution. Ignore the uncertainty in the molar mass.</p>
      stem: "<p>一名學生用讀數至 ±0.01 g 的天平，以差減稱量法稱取 2.50 g 固體，並在不確定度為 ±0.10 <span class=\"unit\">cm3</span> 的容量瓶中加水至 100.0 <span class=\"unit\">cm3</span>。</p><p>計算 (calculate) 溶液濃度的百分不確定度。不計摩爾質量的不確定度。</p>",
      hints: [
        // EN: Weighing by difference uses two readings, so the mass is ±0.02 g.
        "差減稱量法用兩個讀數，所以質量是 ±0.02 g。",
        // EN: Concentration = (m ÷ M) ÷ V: add the percentage uncertainties of m and V.
        "濃度 = (m ÷ M) ÷ V：把 m 和 V 的百分不確定度相加。",
      ],
      // EN: <div class="worked__math">mass: 0.02 ÷ 2.50 × 100 = 0.8 %</div><div class="worked__math">volume: 0.10 ÷ 100.0 × 100 = 0.1 %</div><div class="worked__math">concentration: 0.8 % + 0.1 % = 0.9 %</div><p>The balance, not the flask, controls the uncertainty here. A larger mass, or a balance reading to 0.001 g, would reduce it.</p>
      solution: "<div class=\"worked__math\">質量：0.02 ÷ 2.50 × 100 = 0.8 %</div><div class=\"worked__math\">體積：0.10 ÷ 100.0 × 100 = 0.1 %</div><div class=\"worked__math\">濃度：0.8 % + 0.1 % = 0.9 %</div><p>在這裏，決定不確定度的是天平，而不是容量瓶。用較大的質量，或讀數至 0.001 g 的天平，可減少不確定度。</p>",
    },

    // ── lab-standard-solution-q010 · short · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q010": {
      // EN: <p>A student makes five standards by running 2.00, 4.00, 6.00, 8.00 and 10.00 <span class="unit">cm3</span> of stock solution from a burette into test tubes, and making each up to 10.00 <span class="unit">cm3</span> with water from a second burette.</p><p>Explain why the standard made from 2.00 <span class="unit">cm3</span> of stock has the largest percentage uncertainty in its concentration.</p>
      stem: "<p>一名學生配製五種標準溶液：從一支滴定管把 2.00、4.00、6.00、8.00 和 10.00 <span class=\"unit\">cm3</span> 儲備溶液放進試管，再用第二支滴定管的水把每支試管加至 10.00 <span class=\"unit\">cm3</span>。</p><p>解釋 (explain) 為甚麼由 2.00 <span class=\"unit\">cm3</span> 儲備溶液配製的標準溶液，濃度的百分不確定度最大。</p>",
      hints: [
        // EN: Does the burette’s uncertainty depend on how much you run out?
        "滴定管的不確定度是否取決於你放出多少溶液？",
        // EN: Percentage uncertainty = absolute ÷ value × 100.
        "百分不確定度 = 絕對不確定度 ÷ 數值 × 100。",
      ],
      // EN: <p>The burette uncertainty is fixed (±0.05 cm³ per reading, so ±0.10 cm³ for a volume run out). 0.10 ÷ 2.00 × 100 = 5 %, but 0.10 ÷ 10.00 × 100 = 1 %. The smallest volume carries the largest percentage uncertainty.</p>
      solution: "<p>滴定管的不確定度是固定的（每個讀數 ±0.05 cm³，所以放出的體積是 ±0.10 cm³）。0.10 ÷ 2.00 × 100 = 5 %，但 0.10 ÷ 10.00 × 100 = 1 %。最小的體積有最大的百分不確定度。</p>",
      // EN: <p>Every volume from the burette has the same absolute uncertainty (±0.10 cm³ from two readings). For the smallest volume, 2.00 cm³, this is the largest fraction of the volume (5 %, compared with 1 % for 10.00 cm³), so its concentration has the largest percentage uncertainty.</p>
      answer: "<p>從滴定管放出的每個體積都有相同的絕對不確定度（兩個讀數，共 ±0.10 cm³）。對最小的體積 2.00 cm³ 來說，這佔體積的比例最大（5 %，而 10.00 cm³ 只有 1 %），所以它的濃度有最大的百分不確定度。</p>",
      markscheme: [
        // EN: Same absolute uncertainty (±0.05 cm³ per reading / ±0.10 cm³ per volume) for every volume measured with the burette.
        "用滴定管量取的每個體積，絕對不確定度都相同（每個讀數 ±0.05 cm³／每個體積 ±0.10 cm³）。",
        // EN: It is the largest percentage / fraction of the smallest volume (2.00 cm³): 5 % compared with 1 % for 10.00 cm³.
        "它佔最小體積（2.00 cm³）的百分比／比例最大：5 %，而 10.00 cm³ 只有 1 %。",
      ],
    },

    // ── lab-standard-solution-q011 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q011": {
      // EN: <p>A calibration curve uses standards with absorbances from 0.00 to 0.74. An unknown solution gives an absorbance of 0.95. What should the student do?</p>
      stem: "<p>一條校準曲線所用的標準溶液，吸光度由 0.00 至 0.74。一種未知溶液的吸光度是 0.95。學生應該怎樣做？</p>",
      options: [
        // EN: Extend the line of best fit and read the concentration from it
        "延長最佳擬合線，從延長線讀出濃度",
        // EN: Dilute the unknown by a known factor, measure it again, and multiply the result by the factor
        "按已知倍數稀釋未知溶液，再量度一次，然後把結果乘以該倍數",
        // EN: Change to a filter of a different colour and measure the unknown only
        "改用另一種顏色的濾光片，只量度未知溶液",
        // EN: Report the concentration of the most concentrated standard
        "報告最濃的標準溶液的濃度",
      ],
      hints: [
        // EN: Is the unknown inside the range of the standards?
        "未知溶液是否在標準溶液的範圍之內？",
        // EN: How could you bring it inside that range without losing track of its concentration?
        "怎樣才能把它帶到這個範圍之內，同時仍知道它的濃度？",
      ],
      // EN: <p>Only read values inside the range of the standards. Dilute the unknown accurately (for example 10.00 cm³ by pipette into a 25.00 cm³ volumetric flask, a factor of 2.5), measure it, read its concentration from the line, and multiply by the dilution factor.</p>
      solution: "<p>只讀取標準溶液範圍之內的數值。準確稀釋未知溶液（例如用移液管把 10.00 cm³ 放進 25.00 cm³ 容量瓶，稀釋倍數是 2.5），量度它，從直線讀出它的濃度，再乘以稀釋倍數。</p>",
      misconception: {
        // EN (option A): The line has only been tested inside the range of the standards. Above that it may bend, so extrapolating is not reliable.
        "0": "直線只在標準溶液的範圍之內驗證過。超出這個範圍，直線可能會彎曲，所以外推並不可靠。",
        // EN (option C): Every reading must use the same filter as the standards, or the line no longer applies.
        "2": "每個讀數都必須用與標準溶液相同的濾光片，否則直線就不再適用。",
        // EN (option D): The unknown is more concentrated than the top standard, so this value would certainly be too low.
        "3": "未知溶液比最濃的標準溶液更濃，所以這個數值一定太低。",
      },
    },

    // ── lab-standard-solution-q012 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q012": {
      // EN: <p>A calibration curve gives [<span class="chem">CuSO4</span>] = 0.138 <span class="unit">mol dm-3</span> for an unknown solution. Calculate the concentration in <span class="unit">g dm-3</span>. <i>M</i>(<span class="chem">CuSO4</span>) = 159.62 <span class="unit">g mol-1</span></p>
      stem: "<p>一條校準曲線給出一種未知溶液的 [<span class=\"chem\">CuSO4</span>] = 0.138 <span class=\"unit\">mol dm-3</span>。計算 (calculate) 以 <span class=\"unit\">g dm-3</span> 表示的濃度。<i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.
        "由 mol dm⁻³ 換算為 g dm⁻³，要乘以摩爾質量。",
      ],
      // EN: <div class="worked__math">0.138 <span class="unit">mol dm-3</span> × 159.62 <span class="unit">g mol-1</span> = 22.0 <span class="unit">g dm-3</span></div><p>The square brackets mean “concentration in mol dm⁻³”. Use the molar mass of the dissolved substance, <span class="chem">CuSO4</span>, not of the hydrate.</p>
      solution: "<div class=\"worked__math\">0.138 <span class=\"unit\">mol dm-3</span> × 159.62 <span class=\"unit\">g mol-1</span> = 22.0 <span class=\"unit\">g dm-3</span></div><p>方括號表示「以 mol dm⁻³ 表示的濃度」。用溶解了的物質 <span class=\"chem\">CuSO4</span> 的摩爾質量，而不是水合物的摩爾質量。</p>",
    },

    // ── lab-standard-solution-q013 · mcq · challenge · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q013": {
      // EN: <p>A student forgets to zero the colorimeter with the blank. Every reading, for the standards and for the unknown, is 0.05 higher than it should be. The student draws the line of best fit through the points, without forcing it through the origin.</p><div class="table-scroll"><table class="data"><caption>Two of the readings</caption><thead><tr><th scope="col">Solution</th><th scope="col" class="num">[CuSO₄] / mol dm⁻³</th><th scope="col" class="num">Absorbance</th></tr></thead><tbody><tr><th scope="row">Standard 1</th><td class="num">0.0500</td><td class="num">0.20</td></tr><tr><th scope="row">Standard 5</th><td class="num">0.2500</td><td class="num">0.79</td></tr></tbody></table></div><p>What is the effect on the concentration of the unknown read from the line?</p>
      stem: "<p>一名學生忘了用空白溶液把比色計校零。每個讀數（標準溶液和未知溶液）都比應有的數值高 0.05。學生按數據點畫出最佳擬合線，沒有強制它穿過原點。</p><div class=\"table-scroll\"><table class=\"data\"><caption>其中兩個讀數</caption><thead><tr><th scope=\"col\">溶液</th><th scope=\"col\" class=\"num\">[CuSO₄] / mol dm⁻³</th><th scope=\"col\" class=\"num\">吸光度</th></tr></thead><tbody><tr><th scope=\"row\">標準溶液 1</th><td class=\"num\">0.0500</td><td class=\"num\">0.20</td></tr><tr><th scope=\"row\">標準溶液 5</th><td class=\"num\">0.2500</td><td class=\"num\">0.79</td></tr></tbody></table></div><p>這對從直線讀出的未知濃度有甚麼影響？</p>",
      options: [
        // EN: Little or no effect, because the line and the unknown are both shifted up by the same amount
        "影響很小或沒有影響，因為直線和未知溶液都向上移了相同的數值",
        // EN: Too high, because the unknown’s absorbance is 0.05 too high
        "太高，因為未知溶液的吸光度高了 0.05",
        // EN: Too low, because the line is shifted up more than the unknown
        "太低，因為直線向上移的幅度比未知溶液大",
        // EN: Too high, because the gradient of the line is larger
        "太高，因為直線的斜率較大",
      ],
      hints: [
        // EN: What does adding 0.05 to every point do to the line of best fit: its gradient, or its intercept?
        "每個數據點都加 0.05，會改變最佳擬合線的斜率還是截距？",
        // EN: Then where does the unknown land on the shifted line?
        "那麼未知溶液落在移動了的直線上哪裏？",
      ],
      // EN: <p>A constant offset raises every point by 0.05, so the best-fit line moves up by 0.05 with the same gradient: its intercept becomes about 0.05 instead of 0. The unknown is raised by the same 0.05, so reading across to the line gives the same concentration. It is still a systematic error: if the student had forced the line through the origin, the result would be too high. Zeroing with the blank removes it.</p>
      solution: "<p>固定的偏移使每個數據點都升高 0.05，所以最佳擬合線向上移 0.05，斜率不變：截距變成約 0.05 而不是 0。未知溶液也升高了同樣的 0.05，所以橫向讀到直線得出的濃度相同。這仍然是系統誤差：如果學生強制直線穿過原點，結果就會太高。用空白溶液校零可消除這個誤差。</p>",
      misconception: {
        // EN (option B): The unknown is 0.05 too high, but so is the line at every concentration. Reading across lands on the same concentration.
        "1": "未知溶液高了 0.05，但直線在每個濃度也同樣高了 0.05。橫向讀到直線，會落在相同的濃度。",
        // EN (option C): The offset is the same for every reading, so the line and the unknown move by exactly the same amount.
        "2": "每個讀數的偏移都相同，所以直線和未知溶液移動的數值完全一樣。",
        // EN (option D): Adding the same amount to every reading moves the line up without changing its slope.
        "3": "每個讀數都加上相同的數值，會使直線向上移，但不改變它的斜率。",
      },
    },

  }
});
