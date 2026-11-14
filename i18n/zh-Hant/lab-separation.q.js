/* lab-separation.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-separation.q', {
  questions: {

    // ── lab-separation-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q001": {
      // EN: <p>A student wants to collect pure water from a sample of sea water. Which technique should be used?</p>
      stem: "<p>某學生想從一份海水樣本中收集純水。應該用哪一種技術？</p>",
      options: [
        // EN: Filtration
        "過濾",
        // EN: Evaporation
        "蒸發",
        // EN: Simple distillation
        "簡單蒸餾",
        // EN: Recrystallization
        "再結晶",
      ],
      hints: [
        // EN: Which part do you want to keep: the solid or the liquid?
        "你想保留哪一部分：固體還是液體？",
        // EN: You need a technique that turns the water into vapour and then turns it back into liquid.
        "你需要一種技術，把水變成蒸氣，再把蒸氣變回液體。",
      ],
      // EN: <p>Distillation boils the water, condenses the vapour and collects it as the distillate. The salt is not volatile, so it stays in the flask. Evaporation uses the same property (volatility) but loses the water.</p>
      solution: "<p>蒸餾把水煮沸，使蒸氣冷凝，並把它收集為餾液。鹽不易揮發，所以留在燒瓶中。蒸發利用同一種性質（揮發性），但會失去水。</p>",
      misconception: {
        // EN (option A): The salt is dissolved. Dissolved particles pass straight through filter paper, so the filtrate is still sea water.
        "0": "鹽已經溶解。已溶解的粒子會直接穿過濾紙，所以濾液仍然是海水。",
        // EN (option B): Evaporation keeps the salt, but the water escapes into the air as vapour. You want to keep the water.
        "1": "蒸發能保留鹽，但水會變成蒸氣散失到空氣中。你想保留的是水。",
        // EN (option D): Recrystallization purifies a solid product. Here you want the liquid.
        "3": "再結晶法用來提純固體生成物。這裏你想要的是液體。",
      },
    },

    // ── lab-separation-q002 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q002": {
      // EN: <p>Ethanol and water mix completely. Which physical property allows them to be separated by distillation?</p>
      stem: "<p>乙醇和水完全互溶。哪一種物理性質使它們可以用蒸餾分離？</p>",
      options: [
        // EN: Their densities are different.
        "它們的密度不同。",
        // EN: Their boiling points are different.
        "它們的沸點不同。",
        // EN: Only ethanol is soluble in water.
        "只有乙醇可溶於水。",
        // EN: Their particle sizes are different.
        "它們的粒子大小不同。",
      ],
      hints: [
        // EN: Distillation involves boiling and condensing.
        "蒸餾涉及沸騰和冷凝。",
      ],
      // EN: <p>Ethanol boils at 78 °C and water at 100 °C. Distillation uses this difference in volatility: the vapour first collected is rich in ethanol.</p>
      solution: "<p>乙醇的沸點是 78 °C，水是 100 °C。蒸餾利用這個揮發性的差異：最先收集到的蒸氣含大量乙醇。</p>",
      misconception: {
        // EN (option A): Density matters for liquids that do not mix, which form layers. These two liquids mix completely.
        "0": "密度對不互溶、會分層的液體才重要。這兩種液體完全互溶。",
        // EN (option C): They mix in all proportions, so solubility cannot be the difference here.
        "2": "它們能以任何比例互溶，所以這裏的差異不可能是溶解度。",
        // EN (option D): Particle size is what filtration uses, for an undissolved solid. Molecules in a solution all pass through filter paper.
        "3": "過濾利用的是粒子大小，用於未溶解的固體。溶液中的分子全都會穿過濾紙。",
      },
    },

    // ── lab-separation-q003 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q003": {
      // EN: <p>Put these steps for recrystallizing an impure solid into the correct order.</p>
      stem: "<p>把以下再結晶不純固體的步驟按正確次序排列。</p>",
      options: [
        // EN: Dissolve the solid in the minimum volume of hot solvent.
        "把固體溶解在最少量的熱溶劑中。",
        // EN: Filter the hot solution to remove insoluble impurities.
        "把熱溶液過濾，除去不溶雜質。",
        // EN: Let the filtrate cool slowly, then cool it in an ice bath.
        "讓濾液慢慢冷卻，然後放在冰浴中冷卻。",
        // EN: Filter to collect the crystals.
        "過濾收集晶體。",
        // EN: Rinse the crystals with a little ice-cold solvent.
        "用少量冰冷的溶劑沖洗晶體。",
        // EN: Dry the crystals to constant mass.
        "把晶體乾燥至質量不變。",
      ],
      hints: [
        // EN: The insoluble impurities must be removed while the product is still dissolved.
        "必須在生成物仍然溶解時除去不溶雜質。",
        // EN: The crystals must be collected before they can be rinsed or dried.
        "必須先收集晶體，才能沖洗或乾燥它們。",
      ],
      // EN: <p>Dissolve hot, filter hot, cool to crystallize, filter to collect, rinse cold, dry. The hot filtration has to come before cooling, while the product is in solution and only the insoluble impurity is solid.</p>
      solution: "<p>趁熱溶解、趁熱過濾、冷卻使其結晶、過濾收集、用冷溶劑沖洗、乾燥。趁熱過濾必須在冷卻之前進行，那時生成物仍在溶液中，只有不溶雜質是固體。</p>",
    },

    // ── lab-separation-q004 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q004": {
      // EN: <p>In a recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent.</p><p>Explain why using a large excess of hot solvent reduces the mass of crystals obtained.</p>
      stem: "<p>在再結晶中，不純的固體溶解在<strong>最少量</strong>的熱溶劑中。</p><p>解釋 (explain) 為甚麼用大量過量的熱溶劑會減少所得晶體的質量。</p>",
      hints: [
        // EN: Does the product become completely insoluble when the solvent is cold?
        "溶劑冷卻後，生成物會變得完全不溶嗎？",
        // EN: The mass that stays dissolved depends on how much solvent there is.
        "留在溶液中的質量取決於溶劑有多少。",
      ],
      // EN: <p>Solubility is a mass per volume of solvent. Doubling the solvent volume doubles the mass of product that can stay dissolved at the final temperature, and that mass is lost with the filtrate.</p>
      solution: "<p>溶解度是每單位體積溶劑可溶解的質量。溶劑體積加倍，在最終溫度下可以留在溶液中的生成物質量也會加倍，而這部分質量會隨濾液損失。</p>",
      // EN: <p>Some of the product always remains dissolved in the cold solvent. The more solvent there is, the greater the mass of product that stays in solution after cooling, so fewer crystals form.</p>
      answer: "<p>總有部分生成物留在冷溶劑中。溶劑越多，冷卻後留在溶液中的生成物質量就越大，所以形成的晶體越少。</p>",
      markscheme: [
        // EN: The product is (still slightly) soluble in the cold solvent / some product stays dissolved after cooling.
        "生成物在冷溶劑中（仍然略為）可溶／冷卻後有部分生成物留在溶液中。",
        // EN: A larger volume of solvent keeps a larger mass of product dissolved, so less crystallizes / lower yield. (Accept: the solution may not become saturated on cooling.)
        "較大體積的溶劑使較大質量的生成物留在溶液中，所以結晶的較少／產量較低。（也接受：溶液冷卻時可能不會變得飽和。）",
      ],
    },

    // ── lab-separation-q005 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q005": {
      // EN: <p>After recrystallization, a student collects the crystals by filtration and rinses them.</p><p>Explain why the crystals are rinsed, and why the rinsing solvent must be ice-cold.</p>
      stem: "<p>再結晶後，某學生用過濾收集晶體，並把晶體沖洗。</p><p>解釋 (explain) 為甚麼要沖洗晶體，以及為甚麼沖洗用的溶劑必須是冰冷的。</p>",
      hints: [
        // EN: What is still wet on the surface of freshly filtered crystals?
        "剛過濾出來的晶體表面還沾着甚麼液體？",
        // EN: How does the solubility of the product change with temperature?
        "生成物的溶解度怎樣隨溫度改變？",
      ],
      // EN: <p>Two marks: one for what the rinse removes (impure solution on the surface), one for why it is cold (less product dissolves, so the yield is kept).</p>
      solution: "<p>兩分：一分給沖洗除去的東西（表面的不純溶液），一分給為甚麼要用冷溶劑（溶解的生成物較少，所以能保住產量）。</p>",
      // EN: <p>The rinse washes off the solution left on the crystals, which contains the dissolved impurities. Ice-cold solvent is used because the product is much less soluble at low temperature, so very little of the crystals dissolves.</p>
      answer: "<p>沖洗會洗走留在晶體上的溶液，這些溶液含有已溶解的雜質。使用冰冷的溶劑，是因為生成物在低溫時的溶解度低得多，所以只有極少量晶體會溶解。</p>",
      markscheme: [
        // EN: Rinsing removes the solution (filtrate / mother liquor) on the surface of the crystals, which contains the soluble impurities.
        "沖洗除去晶體表面的溶液（濾液／母液），這些溶液含有可溶雜質。",
        // EN: Cold solvent dissolves (very) little of the product / warm solvent would dissolve some of the crystals and lower the yield.
        "冷溶劑只溶解（極）少量生成物／溫熱的溶劑會溶解部分晶體，降低產量。",
      ],
    },

    // ── lab-separation-q006 · numeric · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q006": {
      // EN: <p>A student recrystallized a sample of impure benzoic acid and recorded these masses.</p><div class="table-scroll"><table class="data"><caption>Mass readings</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">impure benzoic acid</th><td class="num">2.56</td></tr><tr><th scope="row">empty watch glass</th><td class="num">23.47</td></tr><tr><th scope="row">watch glass + dry crystals</th><td class="num">25.41</td></tr></tbody></table></div><p>Calculate the percentage recovery of benzoic acid.</p>
      stem: "<p>某學生把一份不純的苯甲酸樣本再結晶，並記錄了以下質量。</p><div class=\"table-scroll\"><table class=\"data\"><caption>質量讀數</caption><thead><tr><th scope=\"col\">讀數</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">不純的苯甲酸</th><td class=\"num\">2.56</td></tr><tr><th scope=\"row\">空錶面玻璃</th><td class=\"num\">23.47</td></tr><tr><th scope=\"row\">錶面玻璃 + 乾燥晶體</th><td class=\"num\">25.41</td></tr></tbody></table></div><p>計算 (calculate) 苯甲酸的百分回收率。</p>",
      hints: [
        // EN: First find the mass of crystals by difference.
        "先用相減法求出晶體的質量。",
        // EN: Percentage recovery = (mass of crystals / mass of impure sample) × 100.
        "百分回收率 = (晶體的質量 / 不純樣本的質量) × 100。",
      ],
      // EN: <div class="worked__math"><i>m</i>(crystals) = 25.41 <span class="unit">g</span> − 23.47 <span class="unit">g</span> = 1.94 <span class="unit">g</span></div><div class="worked__math">recovery = (1.94 <span class="unit">g</span> / 2.56 <span class="unit">g</span>) × 100 = 75.78… %</div><div class="worked__math">recovery = <strong>75.8 %</strong></div><p>M1 for the mass of crystals, M2 for the percentage.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(晶體) = 25.41 <span class=\"unit\">g</span> − 23.47 <span class=\"unit\">g</span> = 1.94 <span class=\"unit\">g</span></div><div class=\"worked__math\">回收率 = (1.94 <span class=\"unit\">g</span> / 2.56 <span class=\"unit\">g</span>) × 100 = 75.78… %</div><div class=\"worked__math\">回收率 = <strong>75.8 %</strong></div><p>M1 給晶體的質量，M2 給百分率。</p>",
    },

    // ── lab-separation-q007 · numeric · exam · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q007": {
      // EN: <p>Using the data in the table, calculate the percentage uncertainty in the mass of dry crystals. The balance has an uncertainty of ±0.01 <span class="unit">g</span> for each reading.</p><div class="table-scroll"><table class="data"><caption>Mass readings</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">empty watch glass</th><td class="num">23.47</td></tr><tr><th scope="row">watch glass + dry crystals</th><td class="num">25.41</td></tr></tbody></table></div>
      stem: "<p>用表中的數據，計算 (calculate) 乾燥晶體質量的百分不確定度。天平每個讀數的不確定度是 ±0.01 <span class=\"unit\">g</span>。</p><div class=\"table-scroll\"><table class=\"data\"><caption>質量讀數</caption><thead><tr><th scope=\"col\">讀數</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">空錶面玻璃</th><td class=\"num\">23.47</td></tr><tr><th scope=\"row\">錶面玻璃 + 乾燥晶體</th><td class=\"num\">25.41</td></tr></tbody></table></div>",
      hints: [
        // EN: The mass of crystals comes from two readings. Add their absolute uncertainties.
        "晶體的質量由兩個讀數得出。把它們的絕對不確定度相加。",
        // EN: Divide ±0.02 g by the mass of crystals, 1.94 g, and multiply by 100.
        "把 ±0.02 g 除以晶體的質量 1.94 g，再乘以 100。",
      ],
      // EN: <div class="worked__math">Δ<i>m</i> = ±(0.01 + 0.01) <span class="unit">g</span> = ±0.02 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(crystals) = 25.41 − 23.47 = 1.94 <span class="unit">g</span></div><div class="worked__math">percentage uncertainty = (0.02 / 1.94) × 100 = <strong>1.0 %</strong></div><p>A common slip is to use ±0.01 g only. A mass found by difference always involves two readings.</p>
      solution: "<div class=\"worked__math\">Δ<i>m</i> = ±(0.01 + 0.01) <span class=\"unit\">g</span> = ±0.02 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(晶體) = 25.41 − 23.47 = 1.94 <span class=\"unit\">g</span></div><div class=\"worked__math\">百分不確定度 = (0.02 / 1.94) × 100 = <strong>1.0 %</strong></div><p>常見的失誤是只用 ±0.01 g。用相減法求得的質量，一定涉及兩個讀數。</p>",
    },

    // ── lab-separation-q008 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q008": {
      // EN: <p>The literature melting point of benzoic acid is 122 °C. Four samples were tested. Which sample is the purest?</p><div class="table-scroll"><table class="data"><caption>Melting ranges</caption><thead><tr><th scope="col">Sample</th><th scope="col" class="num">Melting range / °C</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">114–119</td></tr><tr><th scope="row">B</th><td class="num">121.5–122.5</td></tr><tr><th scope="row">C</th><td class="num">118–122</td></tr><tr><th scope="row">D</th><td class="num">123–127</td></tr></tbody></table></div>
      stem: "<p>苯甲酸熔點的文獻值是 122 °C。測試了四份樣本。哪一份樣本最純？</p><div class=\"table-scroll\"><table class=\"data\"><caption>熔點範圍</caption><thead><tr><th scope=\"col\">樣本</th><th scope=\"col\" class=\"num\">熔點範圍 / °C</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">114–119</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">121.5–122.5</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">118–122</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">123–127</td></tr></tbody></table></div>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: A pure substance melts at its literature value over a narrow range.
        "純物質在文獻值的溫度熔化，熔點範圍很窄。",
      ],
      // EN: <p>Sample B melts over 1 °C, around the literature value. Impurities lower the melting point and widen the range, as in A and C.</p>
      solution: "<p>樣本 B 在文獻值附近、1 °C 的範圍內熔化。雜質會降低熔點並使熔點範圍變闊，就像 A 和 C 一樣。</p>",
      misconception: {
        // EN (option A): Sample A melts well below 122 °C and over 5 °C. Both are signs of impurity.
        "0": "樣本 A 在遠低於 122 °C 的溫度熔化，熔點範圍達 5 °C。兩者都是含雜質的跡象。",
        // EN (option C): Sample C finishes melting at 122 °C, but it starts 4 °C lower. A wide range shows impurity.
        "2": "樣本 C 在 122 °C 完全熔化，但開始熔化的溫度低了 4 °C。熔點範圍闊表示含有雜質。",
        // EN (option D): Impurities lower a melting point; they do not raise it. A range above the literature value and 4 °C wide suggests a different substance, or heating too fast.
        "3": "雜質會降低熔點，不會升高熔點。熔點範圍高於文獻值，而且闊 4 °C，表示這是另一種物質，或加熱太快。",
      },
    },

    // ── lab-separation-q009 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q009": {
      // EN: <p>A student weighs the crystals straight after filtering them. The percentage recovery is 104 %.</p><p>Suggest the reason for this result and an improvement to the method.</p>
      stem: "<p>某學生過濾晶體後立即稱量。百分回收率是 104 %。</p><p>提出 (suggest) 這個結果的原因，以及實驗方法的一項改進。</p>",
      hints: [
        // EN: Recovery above 100 % means the measured mass contains something that is not benzoic acid.
        "回收率高於 100 %，表示量得的質量包含了不是苯甲酸的東西。",
        // EN: What liquid was just poured through the crystals?
        "剛才有甚麼液體倒過晶體？",
      ],
      // EN: <p>Some product is always lost, so a recovery above 100 % shows extra mass. Straight after filtration the crystals are wet. Drying to constant mass makes sure all the water has gone. (Accept also: insoluble impurity such as sand not removed, with "filter the hot solution" as the improvement.)</p>
      solution: "<p>生成物總會有損失，所以回收率高於 100 % 表示有額外的質量。剛過濾後的晶體是潮濕的。乾燥至質量不變，可以確保所有水分都已除去。（也接受：沒有除去沙之類的不溶雜質，改進方法是「把熱溶液過濾」。）</p>",
      // EN: <p>The crystals were still wet, so the mass included water. Dry the crystals in a low-temperature oven or desiccator, weighing them repeatedly until the mass is constant.</p>
      answer: "<p>晶體仍然潮濕，所以質量包括了水。把晶體放在低溫焗爐或乾燥器中乾燥，反覆稱量，直至質量不變。</p>",
      markscheme: [
        // EN: The crystals still contain water / solvent, so the measured mass is too high.
        "晶體仍含有水／溶劑，所以量得的質量過高。",
        // EN: Dry (in an oven / desiccator) and reweigh until the mass is constant / heat to constant mass.
        "乾燥（在焗爐／乾燥器中）後再稱量，直至質量不變／加熱至質量不變。",
      ],
    },

    // ── lab-separation-q010 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q010": {
      // EN: <p>A student heats a capillary tube of pure benzoic acid at 15 °C per minute in a melting point apparatus. What is the most likely effect on the recorded melting range?</p>
      stem: "<p>某學生在熔點測定儀中以每分鐘 15 °C 的速率加熱一支裝有純苯甲酸的毛細管。記錄到的熔點範圍最可能受到甚麼影響？</p>",
      options: [
        // EN: Lower than 122 °C and narrower
        "低於 122 °C，而且較窄",
        // EN: Lower than 122 °C and wider
        "低於 122 °C，而且較闊",
        // EN: Higher than 122 °C and wider
        "高於 122 °C，而且較闊",
        // EN: Exactly 122 °C, because the sample is pure
        "剛好是 122 °C，因為樣本是純的",
      ],
      hints: [
        // EN: Heat takes time to pass from the block into the sample.
        "熱量需要時間由加熱座傳到樣本。",
        // EN: When the sample finally melts, has the thermometer already gone past that temperature?
        "樣本終於熔化時，溫度計是否已經超過了那個溫度？",
      ],
      // EN: <p>With fast heating the thermometer is hotter than the sample, so each change is recorded at too high a reading. The temperature also rises a long way between the first drop and the last crystal, so the range looks wider. Heat at 1–2 °C per minute near the melting point.</p>
      solution: "<p>加熱快時，溫度計比樣本熱，所以每個變化都在過高的讀數記錄。由第一滴液體到最後一顆晶體之間，溫度也升高了很多，所以熔點範圍看來較闊。接近熔點時，要以每分鐘 1–2 °C 的速率加熱。</p>",
      misconception: {
        // EN (option A): A lower melting point is caused by impurities, not by the heating rate. Here the thermometer gets ahead of the sample.
        "0": "熔點較低是雜質造成的，不是加熱速率造成的。這裏溫度計的讀數走在樣本前面。",
        // EN (option B): A lower and wider range is the sign of an impure sample. This sample is pure; the problem is the heating rate.
        "1": "熔點範圍較低又較闊，是樣本不純的跡象。這份樣本是純的；問題在於加熱速率。",
        // EN (option D): The true melting point does not change, but the recorded value does: the reading depends on how well the sample keeps up with the thermometer.
        "3": "真正的熔點不會改變，但記錄到的數值會改變：讀數取決於樣本的溫度能否跟上溫度計。",
      },
    },

    // ── lab-separation-q011 · short · exam · SL · Structure 1.1.1 · 4 marks
    "lab-separation-q011": {
      // EN: <p>A student has a dry mixture of powdered chalk (calcium carbonate, insoluble in water) and potassium nitrate (soluble in water).</p><p>Outline a method to obtain a dry sample of each solid.</p>
      stem: "<p>某學生有一份乾燥的混合物，含粉狀粉筆（碳酸鈣，不溶於水）和硝酸鉀（可溶於水）。</p><p>概述 (outline) 一個方法，得到每種固體的乾燥樣本。</p>",
      hints: [
        // EN: Which solid dissolves in water? Use that difference first.
        "哪一種固體溶於水？先利用這個差異。",
        // EN: After filtering, each solid still needs a final step: the residue is wet and the other solid is still dissolved.
        "過濾後，每種固體仍需要最後一步：殘餘物是濕的，另一種固體仍在溶液中。",
      ],
      // EN: <p>One mark for each workable step in a sensible order: dissolve, filter, rinse and dry the residue, evaporate the filtrate and crystallize. Forgetting the final step for each solid is the most common way to lose marks.</p>
      solution: "<p>每個可行、而且次序合理的步驟得一分：溶解、過濾、沖洗並弄乾殘餘物、蒸發濾液並使其結晶。忘記每種固體的最後一步，是最常見的失分原因。</p>",
      // EN: <ol><li>Add distilled water and stir until the potassium nitrate has dissolved.</li><li>Filter: the chalk is the residue and the potassium nitrate solution is the filtrate.</li><li>Rinse the chalk with a little distilled water and dry it in an oven.</li><li>Heat the filtrate to evaporate some of the water, leave it to crystallize, then filter and dry the crystals.</li></ol>
      answer: "<ol><li>加入蒸餾水並攪拌，直至硝酸鉀溶解。</li><li>過濾：粉筆是殘餘物，硝酸鉀溶液是濾液。</li><li>用少量蒸餾水沖洗粉筆，然後放在焗爐中弄乾。</li><li>加熱濾液，蒸發部分水分，讓它結晶，然後過濾並把晶體弄乾。</li></ol>",
      markscheme: [
        // EN: Add (distilled) water and stir / dissolve the potassium nitrate.
        "加入（蒸餾）水並攪拌／溶解硝酸鉀。",
        // EN: Filter (to separate the chalk as the residue).
        "過濾（把粉筆分離為殘餘物）。",
        // EN: Rinse and dry the residue (chalk).
        "沖洗並弄乾殘餘物（粉筆）。",
        // EN: Evaporate (heat) the filtrate and crystallize / dry the potassium nitrate. (Steps must be in a workable order.)
        "蒸發（加熱）濾液並使其結晶／弄乾硝酸鉀。（步驟必須按可行的次序。）",
      ],
    },

    // ── lab-separation-q012 · multi · challenge · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q012": {
      // EN: <p>A recrystallization gave a low percentage recovery but a pure product. Which changes to the method would increase the recovery? Select all that apply.</p>
      stem: "<p>某次再結晶的百分回收率很低，但生成物是純的。實驗方法的哪些改變會提高回收率？選出所有正確選項。</p>",
      options: [
        // EN: Use a smaller volume of hot solvent.
        "使用較少量的熱溶劑。",
        // EN: Cool the filtrate in an ice bath before filtering off the crystals.
        "過濾出晶體之前，把濾液放在冰浴中冷卻。",
        // EN: Rinse the crystals with warm solvent.
        "用溫熱的溶劑沖洗晶體。",
        // EN: Warm the funnel before the hot filtration.
        "趁熱過濾之前先把漏斗預熱。",
        // EN: Skip the hot filtration step.
        "略過趁熱過濾的步驟。",
      ],
      hints: [
        // EN: Product is lost where it stays dissolved or crystallizes in the wrong place.
        "生成物留在溶液中，或在錯誤的地方結晶，就會損失。",
      ],
      // EN: <p>Less solvent and a lower final temperature both leave less product dissolved. A warm funnel stops crystals forming on the filter paper during hot filtration. Warm rinsing loses product, and skipping hot filtration only adds impurity.</p>
      solution: "<p>較少的溶劑和較低的最終溫度，都會使留在溶液中的生成物較少。溫熱的漏斗可以防止趁熱過濾時晶體在濾紙上形成。用溫熱的溶劑沖洗會損失生成物，略過趁熱過濾只會增加雜質。</p>",
      misconception: {
        // EN (option C): Warm solvent dissolves more of the crystals, so the recovery falls further.
        "2": "溫熱的溶劑會溶解更多晶體，所以回收率會進一步下降。",
        // EN (option E): Skipping hot filtration may add mass, but that mass is insoluble impurity, not product. The product becomes less pure.
        "4": "略過趁熱過濾可能會增加質量，但增加的是不溶雜質，不是生成物。生成物會變得較不純。",
      },
    },

    // ── lab-separation-q013 · short · challenge · SL · Structure 1.1.1 · 3 marks
    "lab-separation-q013": {
      // EN: <p>A student recrystallizes impure benzoic acid twice: once cooling the hot filtrate slowly, and once plunging it straight into an ice bath. The thermometer has an uncertainty of ±0.5 °C. The literature melting point is 122 °C.</p><div class="table-scroll"><table class="data"><caption>Results</caption><thead><tr><th scope="col">Cooling</th><th scope="col" class="num">Recovery / %</th><th scope="col" class="num">Melting range / °C</th></tr></thead><tbody><tr><th scope="row">slow, then ice bath</th><td class="num">78</td><td class="num">121.0–122.0</td></tr><tr><th scope="row">straight into ice bath</th><td class="num">80</td><td class="num">118.5–121.0</td></tr></tbody></table></div><p>Evaluate which cooling method is better, using the data.</p>
      stem: "<p>某學生把不純的苯甲酸再結晶兩次：一次讓熱濾液慢慢冷卻，一次把它直接放進冰浴。溫度計的不確定度是 ±0.5 °C。熔點的文獻值是 122 °C。</p><div class=\"table-scroll\"><table class=\"data\"><caption>結果</caption><thead><tr><th scope=\"col\">冷卻方法</th><th scope=\"col\" class=\"num\">回收率 / %</th><th scope=\"col\" class=\"num\">熔點範圍 / °C</th></tr></thead><tbody><tr><th scope=\"row\">慢慢冷卻，然後冰浴</th><td class=\"num\">78</td><td class=\"num\">121.0–122.0</td></tr><tr><th scope=\"row\">直接放進冰浴</th><td class=\"num\">80</td><td class=\"num\">118.5–121.0</td></tr></tbody></table></div><p>用數據評價 (evaluate) 哪一種冷卻方法較好。</p>",
      hints: [
        // EN: Compare both columns. Which difference is large compared with its uncertainty?
        "比較兩欄。哪一個差異比它的不確定度大？",
        // EN: What does a low, wide melting range tell you?
        "熔點範圍低而闊，告訴你甚麼？",
      ],
      // EN: <p>"Evaluate" means weigh up both sides. Fast cooling gains a little mass, but the melting range shows impurity is trapped in the small crystals. The 2 % gain may be partly the mass of the impurity itself.</p>
      solution: "<p>「評價」的意思是權衡兩方面。快速冷卻得到稍多的質量，但熔點範圍顯示雜質被困在細小的晶體中。多出的 2 % 可能部分就是雜質本身的質量。</p>",
      // EN: <p>The recoveries are similar (78 % and 80 %). Slow cooling gives a melting range of 1.0 °C that ends at 122 °C, within the ±0.5 °C uncertainty of the literature value, so the product is pure. Fast cooling gives a lower, wider range (2.5 °C, starting 3.5 °C below 122 °C), which is much bigger than the uncertainty, so impurity is present: small crystals formed quickly trap impure solution. Slow cooling is better because purity is the aim and the recovery is almost the same.</p>
      answer: "<p>兩個回收率相近（78 % 和 80 %）。慢慢冷卻得到的熔點範圍是 1.0 °C，終點是 122 °C，在文獻值 ±0.5 °C 的不確定度之內，所以生成物是純的。快速冷卻得到的熔點範圍較低又較闊（2.5 °C，起點比 122 °C 低 3.5 °C），遠大於不確定度，所以含有雜質：快速形成的細小晶體困住了不純的溶液。慢慢冷卻較好，因為目的是得到純的生成物，而回收率幾乎相同。</p>",
      markscheme: [
        // EN: Recoveries are similar / fast cooling gives only slightly more product (2 % more).
        "回收率相近／快速冷卻只得到稍多的生成物（多 2 %）。",
        // EN: Fast cooling gives a lower and wider melting range, so the product is less pure; the difference from 122 °C is larger than the ±0.5 °C uncertainty.
        "快速冷卻得到較低又較闊的熔點範圍，所以生成物較不純；與 122 °C 的差異大於 ±0.5 °C 的不確定度。",
        // EN: Slow cooling is better / gives larger crystals that trap less impurity (and the aim is a pure product).
        "慢慢冷卻較好／形成較大的晶體，困住的雜質較少（而且目的是得到純的生成物）。",
      ],
    },

  }
});
