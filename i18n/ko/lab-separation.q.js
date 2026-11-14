/* lab-separation.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-separation.q', {
  questions: {

    // ── lab-separation-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q001": {
      // EN: <p>A student wants to collect pure water from a sample of sea water. Which technique should be used?</p>
      stem: "<p>한 학생이 바닷물 시료에서 순수한 물을 모으려고 해요. 어떤 방법을 써야 하나요?</p>",
      options: [
        // EN: Filtration
        "거름",
        // EN: Evaporation
        "증발",
        // EN: Simple distillation
        "단순 증류",
        // EN: Recrystallization
        "재결정",
      ],
      hints: [
        // EN: Which part do you want to keep: the solid or the liquid?
        "남기고 싶은 것은 어느 쪽인가요: 고체인가요, 액체인가요?",
        // EN: You need a technique that turns the water into vapour and then turns it back into liquid.
        "물을 증기로 바꾼 다음 다시 액체로 되돌리는 방법이 필요해요.",
      ],
      // EN: <p>Distillation boils the water, condenses the vapour and collects it as the distillate. The salt is not volatile, so it stays in the flask. Evaporation uses the same property (volatility) but loses the water.</p>
      solution: "<p>증류는 물을 끓이고, 증기를 액화시켜 증류액으로 모아요. 소금은 휘발성이 없으므로 플라스크에 남아요. 증발도 같은 성질(휘발성)을 이용하지만 물을 잃어버려요.</p>",
      misconception: {
        // EN (option A): The salt is dissolved. Dissolved particles pass straight through filter paper, so the filtrate is still sea water.
        "0": "소금은 녹아 있어요. 녹아 있는 입자는 거름종이를 그대로 통과하므로 거른 액은 여전히 바닷물이에요.",
        // EN (option B): Evaporation keeps the salt, but the water escapes into the air as vapour. You want to keep the water.
        "1": "증발하면 소금은 남지만, 물은 증기가 되어 공기 중으로 날아가요. 남기고 싶은 것은 물이에요.",
        // EN (option D): Recrystallization purifies a solid product. Here you want the liquid.
        "3": "재결정은 고체 생성물을 정제해요. 여기서 얻고 싶은 것은 액체예요.",
      },
    },

    // ── lab-separation-q002 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q002": {
      // EN: <p>Ethanol and water mix completely. Which physical property allows them to be separated by distillation?</p>
      stem: "<p>ethanol과 물은 완전히 섞여요. 어떤 물리적 성질 덕분에 증류로 둘을 분리할 수 있나요?</p>",
      options: [
        // EN: Their densities are different.
        "밀도가 달라요.",
        // EN: Their boiling points are different.
        "끓는점이 달라요.",
        // EN: Only ethanol is soluble in water.
        "ethanol만 물에 녹아요.",
        // EN: Their particle sizes are different.
        "입자 크기가 달라요.",
      ],
      hints: [
        // EN: Distillation involves boiling and condensing.
        "증류에는 끓음과 액화가 있어요.",
      ],
      // EN: <p>Ethanol boils at 78 °C and water at 100 °C. Distillation uses this difference in volatility: the vapour first collected is rich in ethanol.</p>
      solution: "<p>ethanol은 78 °C, 물은 100 °C에서 끓어요. 증류는 이런 휘발성의 차이를 이용해요: 처음 모은 증기에는 ethanol이 많아요.</p>",
      misconception: {
        // EN (option A): Density matters for liquids that do not mix, which form layers. These two liquids mix completely.
        "0": "밀도는 섞이지 않아 층을 이루는 액체에서 중요해요. 이 두 액체는 완전히 섞여요.",
        // EN (option C): They mix in all proportions, so solubility cannot be the difference here.
        "2": "두 액체는 어떤 비율로도 섞이므로 용해도가 차이점일 수는 없어요.",
        // EN (option D): Particle size is what filtration uses, for an undissolved solid. Molecules in a solution all pass through filter paper.
        "3": "입자 크기는 녹지 않은 고체를 거를 때 이용하는 성질이에요. 용액 속 분자는 모두 거름종이를 통과해요.",
      },
    },

    // ── lab-separation-q003 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q003": {
      // EN: <p>Put these steps for recrystallizing an impure solid into the correct order.</p>
      stem: "<p>불순한 고체를 재결정하는 다음 단계를 올바른 순서로 배열하세요.</p>",
      options: [
        // EN: Dissolve the solid in the minimum volume of hot solvent.
        "최소한의 뜨거운 용매에 고체를 녹여요.",
        // EN: Filter the hot solution to remove insoluble impurities.
        "뜨거운 용액을 걸러 녹지 않는 불순물을 없애요.",
        // EN: Let the filtrate cool slowly, then cool it in an ice bath.
        "거른 액을 천천히 식힌 다음 얼음 중탕에서 식혀요.",
        // EN: Filter to collect the crystals.
        "걸러서 결정을 모아요.",
        // EN: Rinse the crystals with a little ice-cold solvent.
        "얼음처럼 차가운 용매를 조금 써서 결정을 헹궈요.",
        // EN: Dry the crystals to constant mass.
        "결정을 질량이 일정해질 때까지 말려요.",
      ],
      hints: [
        // EN: The insoluble impurities must be removed while the product is still dissolved.
        "녹지 않는 불순물은 생성물이 아직 녹아 있을 때 없애야 해요.",
        // EN: The crystals must be collected before they can be rinsed or dried.
        "결정을 헹구거나 말리려면 먼저 결정을 모아야 해요.",
      ],
      // EN: <p>Dissolve hot, filter hot, cool to crystallize, filter to collect, rinse cold, dry. The hot filtration has to come before cooling, while the product is in solution and only the insoluble impurity is solid.</p>
      solution: "<p>뜨겁게 녹이고, 뜨거울 때 거르고, 식혀서 결정을 만들고, 걸러서 모으고, 차갑게 헹구고, 말려요. 뜨거울 때 거르는 단계는 식히기 전, 즉 생성물이 녹아 있고 녹지 않는 불순물만 고체일 때 해야 해요.</p>",
    },

    // ── lab-separation-q004 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q004": {
      // EN: <p>In a recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent.</p><p>Explain why using a large excess of hot solvent reduces the mass of crystals obtained.</p>
      stem: "<p>재결정에서는 불순한 고체를 <strong>최소한</strong>의 뜨거운 용매에 녹여요.</p><p>뜨거운 용매를 너무 많이 쓰면 얻는 결정의 질량이 줄어드는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Does the product become completely insoluble when the solvent is cold?
        "용매가 차가워지면 생성물이 전혀 녹지 않게 되나요?",
        // EN: The mass that stays dissolved depends on how much solvent there is.
        "녹은 채로 남는 질량은 용매의 양에 따라 달라요.",
      ],
      // EN: <p>Solubility is a mass per volume of solvent. Doubling the solvent volume doubles the mass of product that can stay dissolved at the final temperature, and that mass is lost with the filtrate.</p>
      solution: "<p>용해도는 용매의 부피당 질량이에요. 용매의 부피를 2배로 하면 마지막 온도에서 녹은 채로 남을 수 있는 생성물의 질량도 2배가 되고, 그 질량은 거른 액과 함께 버려져요.</p>",
      // EN: <p>Some of the product always remains dissolved in the cold solvent. The more solvent there is, the greater the mass of product that stays in solution after cooling, so fewer crystals form.</p>
      answer: "<p>생성물의 일부는 차가운 용매에도 항상 녹은 채로 남아요. 용매가 많을수록 식힌 뒤 용액에 남는 생성물의 질량이 커지므로 결정이 적게 생겨요.</p>",
      markscheme: [
        // EN: The product is (still slightly) soluble in the cold solvent / some product stays dissolved after cooling.
        "생성물은 차가운 용매에도 (여전히 조금) 녹는다 / 식힌 뒤에도 생성물의 일부가 녹은 채로 남는다.",
        // EN: A larger volume of solvent keeps a larger mass of product dissolved, so less crystallizes / lower yield. (Accept: the solution may not become saturated on cooling.)
        "용매의 부피가 클수록 녹은 채로 남는 생성물의 질량이 커지므로 결정으로 나오는 양이 적다 / 수득량이 낮다. (인정: 식혀도 용액이 포화되지 않을 수 있다.)",
      ],
    },

    // ── lab-separation-q005 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q005": {
      // EN: <p>After recrystallization, a student collects the crystals by filtration and rinses them.</p><p>Explain why the crystals are rinsed, and why the rinsing solvent must be ice-cold.</p>
      stem: "<p>재결정 뒤, 한 학생이 걸러서 결정을 모으고 헹궈요.</p><p>결정을 헹구는 이유와, 헹구는 용매가 얼음처럼 차가워야 하는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: What is still wet on the surface of freshly filtered crystals?
        "막 거른 결정의 표면에 아직 묻어 있는 것은 무엇인가요?",
        // EN: How does the solubility of the product change with temperature?
        "생성물의 용해도는 온도에 따라 어떻게 변하나요?",
      ],
      // EN: <p>Two marks: one for what the rinse removes (impure solution on the surface), one for why it is cold (less product dissolves, so the yield is kept).</p>
      solution: "<p>2점: 1점은 헹굼이 없애는 것(표면의 불순한 용액), 1점은 차가운 용매를 쓰는 이유(생성물이 덜 녹아서 수득량이 유지됨)에 줘요.</p>",
      // EN: <p>The rinse washes off the solution left on the crystals, which contains the dissolved impurities. Ice-cold solvent is used because the product is much less soluble at low temperature, so very little of the crystals dissolves.</p>
      answer: "<p>헹구면 결정에 남아 있는 용액이 씻겨 나가는데, 이 용액에는 녹아 있는 불순물이 들어 있어요. 생성물은 낮은 온도에서 훨씬 덜 녹으므로, 얼음처럼 차가운 용매를 쓰면 결정이 아주 조금만 녹아요.</p>",
      markscheme: [
        // EN: Rinsing removes the solution (filtrate / mother liquor) on the surface of the crystals, which contains the soluble impurities.
        "헹굼은 결정 표면의 용액(거른 액 / 모액)을 없애는데, 이 용액에는 녹는 불순물이 들어 있다.",
        // EN: Cold solvent dissolves (very) little of the product / warm solvent would dissolve some of the crystals and lower the yield.
        "차가운 용매는 생성물을 (아주) 조금만 녹인다 / 따뜻한 용매는 결정을 일부 녹여서 수득량을 낮춘다.",
      ],
    },

    // ── lab-separation-q006 · numeric · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q006": {
      // EN: <p>A student recrystallized a sample of impure benzoic acid and recorded these masses.</p><div class="table-scroll"><table class="data"><caption>Mass readings</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">impure benzoic acid</th><td class="num">2.56</td></tr><tr><th scope="row">empty watch glass</th><td class="num">23.47</td></tr><tr><th scope="row">watch glass + dry crystals</th><td class="num">25.41</td></tr></tbody></table></div><p>Calculate the percentage recovery of benzoic acid.</p>
      stem: "<p>한 학생이 불순한 벤조산 시료를 재결정하고 다음 질량을 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>질량 측정값</caption><thead><tr><th scope=\"col\">측정 항목</th><th scope=\"col\" class=\"num\">질량 / g</th></tr></thead><tbody><tr><th scope=\"row\">불순한 벤조산</th><td class=\"num\">2.56</td></tr><tr><th scope=\"row\">빈 시계 접시</th><td class=\"num\">23.47</td></tr><tr><th scope=\"row\">시계 접시 + 마른 결정</th><td class=\"num\">25.41</td></tr></tbody></table></div><p>벤조산의 회수율을 계산하시오 (calculate).</p>",
      hints: [
        // EN: First find the mass of crystals by difference.
        "먼저 결정의 질량을 차이로 구하세요.",
        // EN: Percentage recovery = (mass of crystals / mass of impure sample) × 100.
        "회수율 = (결정의 질량 / 불순한 시료의 질량) × 100.",
      ],
      // EN: <div class="worked__math"><i>m</i>(crystals) = 25.41 <span class="unit">g</span> − 23.47 <span class="unit">g</span> = 1.94 <span class="unit">g</span></div><div class="worked__math">recovery = (1.94 <span class="unit">g</span> / 2.56 <span class="unit">g</span>) × 100 = 75.78… %</div><div class="worked__math">recovery = <strong>75.8 %</strong></div><p>M1 for the mass of crystals, M2 for the percentage.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(결정) = 25.41 <span class=\"unit\">g</span> − 23.47 <span class=\"unit\">g</span> = 1.94 <span class=\"unit\">g</span></div><div class=\"worked__math\">회수율 = (1.94 <span class=\"unit\">g</span> / 2.56 <span class=\"unit\">g</span>) × 100 = 75.78… %</div><div class=\"worked__math\">회수율 = <strong>75.8 %</strong></div><p>M1은 결정의 질량, M2는 백분율이에요.</p>",
    },

    // ── lab-separation-q007 · numeric · exam · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q007": {
      // EN: <p>Using the data in the table, calculate the percentage uncertainty in the mass of dry crystals. The balance has an uncertainty of ±0.01 <span class="unit">g</span> for each reading.</p><div class="table-scroll"><table class="data"><caption>Mass readings</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">empty watch glass</th><td class="num">23.47</td></tr><tr><th scope="row">watch glass + dry crystals</th><td class="num">25.41</td></tr></tbody></table></div>
      stem: "<p>표의 자료를 써서 마른 결정 질량의 백분율 불확도를 계산하시오 (calculate). 저울의 불확도는 측정값마다 ±0.01 <span class=\"unit\">g</span>이에요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>질량 측정값</caption><thead><tr><th scope=\"col\">측정 항목</th><th scope=\"col\" class=\"num\">질량 / g</th></tr></thead><tbody><tr><th scope=\"row\">빈 시계 접시</th><td class=\"num\">23.47</td></tr><tr><th scope=\"row\">시계 접시 + 마른 결정</th><td class=\"num\">25.41</td></tr></tbody></table></div>",
      hints: [
        // EN: The mass of crystals comes from two readings. Add their absolute uncertainties.
        "결정의 질량은 측정값 2개로 구해요. 두 값의 절대 불확도를 더하세요.",
        // EN: Divide ±0.02 g by the mass of crystals, 1.94 g, and multiply by 100.
        "±0.02 g을 결정의 질량 1.94 g으로 나누고 100을 곱하세요.",
      ],
      // EN: <div class="worked__math">Δ<i>m</i> = ±(0.01 + 0.01) <span class="unit">g</span> = ±0.02 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(crystals) = 25.41 − 23.47 = 1.94 <span class="unit">g</span></div><div class="worked__math">percentage uncertainty = (0.02 / 1.94) × 100 = <strong>1.0 %</strong></div><p>A common slip is to use ±0.01 g only. A mass found by difference always involves two readings.</p>
      solution: "<div class=\"worked__math\">Δ<i>m</i> = ±(0.01 + 0.01) <span class=\"unit\">g</span> = ±0.02 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(결정) = 25.41 − 23.47 = 1.94 <span class=\"unit\">g</span></div><div class=\"worked__math\">백분율 불확도 = (0.02 / 1.94) × 100 = <strong>1.0 %</strong></div><p>±0.01 g만 쓰는 실수가 흔해요. 차이로 구한 질량에는 항상 측정값이 2개 들어 있어요.</p>",
    },

    // ── lab-separation-q008 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q008": {
      // EN: <p>The literature melting point of benzoic acid is 122 °C. Four samples were tested. Which sample is the purest?</p><div class="table-scroll"><table class="data"><caption>Melting ranges</caption><thead><tr><th scope="col">Sample</th><th scope="col" class="num">Melting range / °C</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">114–119</td></tr><tr><th scope="row">B</th><td class="num">121.5–122.5</td></tr><tr><th scope="row">C</th><td class="num">118–122</td></tr><tr><th scope="row">D</th><td class="num">123–127</td></tr></tbody></table></div>
      stem: "<p>벤조산의 문헌 녹는점은 122 °C예요. 시료 4개를 시험했어요. 가장 순수한 시료는 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><caption>녹는점 범위</caption><thead><tr><th scope=\"col\">시료</th><th scope=\"col\" class=\"num\">녹는점 범위 / °C</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">114–119</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">121.5–122.5</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">118–122</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">123–127</td></tr></tbody></table></div>",
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
        "순물질은 문헌값에서 좁은 범위에 걸쳐 녹아요.",
      ],
      // EN: <p>Sample B melts over 1 °C, around the literature value. Impurities lower the melting point and widen the range, as in A and C.</p>
      solution: "<p>시료 B는 문헌값 근처에서 1 °C 범위에 걸쳐 녹아요. A와 C처럼 불순물은 녹는점을 낮추고 범위를 넓혀요.</p>",
      misconception: {
        // EN (option A): Sample A melts well below 122 °C and over 5 °C. Both are signs of impurity.
        "0": "시료 A는 122 °C보다 훨씬 낮은 온도에서 5 °C 범위에 걸쳐 녹아요. 둘 다 불순물이 있다는 신호예요.",
        // EN (option C): Sample C finishes melting at 122 °C, but it starts 4 °C lower. A wide range shows impurity.
        "2": "시료 C는 122 °C에서 다 녹지만, 4 °C 낮은 온도에서 녹기 시작해요. 범위가 넓으면 불순물이 있다는 뜻이에요.",
        // EN (option D): Impurities lower a melting point; they do not raise it. A range above the literature value and 4 °C wide suggests a different substance, or heating too fast.
        "3": "불순물은 녹는점을 낮추지 높이지 않아요. 문헌값보다 높고 폭이 4 °C인 범위는 다른 물질이거나 너무 빨리 가열했다는 뜻이에요.",
      },
    },

    // ── lab-separation-q009 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q009": {
      // EN: <p>A student weighs the crystals straight after filtering them. The percentage recovery is 104 %.</p><p>Suggest the reason for this result and an improvement to the method.</p>
      stem: "<p>한 학생이 결정을 거른 직후에 무게를 재요. 회수율이 104 %가 나와요.</p><p>이런 결과가 나온 이유와 방법의 개선점을 제안하시오 (suggest).</p>",
      hints: [
        // EN: Recovery above 100 % means the measured mass contains something that is not benzoic acid.
        "회수율이 100 %보다 높다는 것은 측정한 질량에 벤조산이 아닌 것이 들어 있다는 뜻이에요.",
        // EN: What liquid was just poured through the crystals?
        "방금 결정 위로 부은 액체는 무엇인가요?",
      ],
      // EN: <p>Some product is always lost, so a recovery above 100 % shows extra mass. Straight after filtration the crystals are wet. Drying to constant mass makes sure all the water has gone. (Accept also: insoluble impurity such as sand not removed, with "filter the hot solution" as the improvement.)</p>
      solution: "<p>생성물은 항상 조금 잃게 되므로, 회수율이 100 %보다 높으면 질량이 더 있다는 뜻이에요. 거른 직후의 결정은 젖어 있어요. 질량이 일정해질 때까지 말리면 물이 모두 빠져나갔다는 것을 확인할 수 있어요. (인정: 모래 같은 녹지 않는 불순물을 없애지 않음, 개선점은 \"뜨거운 용액을 거른다\".)</p>",
      // EN: <p>The crystals were still wet, so the mass included water. Dry the crystals in a low-temperature oven or desiccator, weighing them repeatedly until the mass is constant.</p>
      answer: "<p>결정이 아직 젖어 있어서 질량에 물이 포함됐어요. 결정을 저온 오븐이나 데시케이터에서 말리고, 질량이 일정해질 때까지 여러 번 무게를 재요.</p>",
      markscheme: [
        // EN: The crystals still contain water / solvent, so the measured mass is too high.
        "결정에 아직 물 / 용매가 들어 있어서 측정한 질량이 너무 크다.",
        // EN: Dry (in an oven / desiccator) and reweigh until the mass is constant / heat to constant mass.
        "(오븐 / 데시케이터에서) 말리고 질량이 일정해질 때까지 다시 무게를 잰다 / 질량이 일정해질 때까지 가열한다.",
      ],
    },

    // ── lab-separation-q010 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q010": {
      // EN: <p>A student heats a capillary tube of pure benzoic acid at 15 °C per minute in a melting point apparatus. What is the most likely effect on the recorded melting range?</p>
      stem: "<p>한 학생이 녹는점 측정 장치에서 순수한 벤조산이 든 모세관을 분당 15 °C로 가열해요. 기록한 녹는점 범위에 미칠 가장 그럴듯한 영향은 무엇인가요?</p>",
      options: [
        // EN: Lower than 122 °C and narrower
        "122 °C보다 낮고 더 좁아요",
        // EN: Lower than 122 °C and wider
        "122 °C보다 낮고 더 넓어요",
        // EN: Higher than 122 °C and wider
        "122 °C보다 높고 더 넓어요",
        // EN: Exactly 122 °C, because the sample is pure
        "시료가 순수하므로 정확히 122 °C예요",
      ],
      hints: [
        // EN: Heat takes time to pass from the block into the sample.
        "열이 가열 블록에서 시료로 전달되는 데는 시간이 걸려요.",
        // EN: When the sample finally melts, has the thermometer already gone past that temperature?
        "시료가 마침내 녹을 때, 온도계는 이미 그 온도를 지나 있나요?",
      ],
      // EN: <p>With fast heating the thermometer is hotter than the sample, so each change is recorded at too high a reading. The temperature also rises a long way between the first drop and the last crystal, so the range looks wider. Heat at 1–2 °C per minute near the melting point.</p>
      solution: "<p>빠르게 가열하면 온도계가 시료보다 뜨거워서, 변화마다 너무 높은 값으로 기록돼요. 또 첫 방울과 마지막 결정 사이에 온도가 많이 올라가서 범위가 더 넓어 보여요. 녹는점 근처에서는 분당 1–2 °C로 가열하세요.</p>",
      misconception: {
        // EN (option A): A lower melting point is caused by impurities, not by the heating rate. Here the thermometer gets ahead of the sample.
        "0": "녹는점이 낮아지는 원인은 가열 속도가 아니라 불순물이에요. 여기서는 온도계가 시료보다 앞서 올라가요.",
        // EN (option B): A lower and wider range is the sign of an impure sample. This sample is pure; the problem is the heating rate.
        "1": "더 낮고 더 넓은 범위는 불순한 시료의 신호예요. 이 시료는 순수해요. 문제는 가열 속도예요.",
        // EN (option D): The true melting point does not change, but the recorded value does: the reading depends on how well the sample keeps up with the thermometer.
        "3": "실제 녹는점은 변하지 않지만, 기록한 값은 변해요: 측정값은 시료가 온도계를 얼마나 잘 따라가는지에 달려 있어요.",
      },
    },

    // ── lab-separation-q011 · short · exam · SL · Structure 1.1.1 · 4 marks
    "lab-separation-q011": {
      // EN: <p>A student has a dry mixture of powdered chalk (calcium carbonate, insoluble in water) and potassium nitrate (soluble in water).</p><p>Outline a method to obtain a dry sample of each solid.</p>
      stem: "<p>한 학생에게 분필 가루(탄산 칼슘, 물에 녹지 않음)와 질산 칼륨(물에 녹음)의 마른 혼합물이 있어요.</p><p>두 고체를 각각 마른 상태로 얻는 방법을 간단히 설명하시오 (outline).</p>",
      hints: [
        // EN: Which solid dissolves in water? Use that difference first.
        "물에 녹는 고체는 어느 것인가요? 먼저 그 차이를 이용하세요.",
        // EN: After filtering, each solid still needs a final step: the residue is wet and the other solid is still dissolved.
        "거른 뒤에도 각 고체에는 마지막 단계가 필요해요: 거름 찌꺼기는 젖어 있고, 다른 고체는 아직 녹아 있어요.",
      ],
      // EN: <p>One mark for each workable step in a sensible order: dissolve, filter, rinse and dry the residue, evaporate the filtrate and crystallize. Forgetting the final step for each solid is the most common way to lose marks.</p>
      solution: "<p>알맞은 순서로 된, 실제로 할 수 있는 단계마다 1점: 녹이기, 거르기, 거름 찌꺼기 헹구고 말리기, 거른 액 증발시켜 결정화하기. 각 고체의 마지막 단계를 빠뜨리는 것이 점수를 잃는 가장 흔한 경우예요.</p>",
      // EN: <ol><li>Add distilled water and stir until the potassium nitrate has dissolved.</li><li>Filter: the chalk is the residue and the potassium nitrate solution is the filtrate.</li><li>Rinse the chalk with a little distilled water and dry it in an oven.</li><li>Heat the filtrate to evaporate some of the water, leave it to crystallize, then filter and dry the crystals.</li></ol>
      answer: "<ol><li>증류수를 넣고 질산 칼륨이 다 녹을 때까지 저어요.</li><li>걸러요: 분필은 거름 찌꺼기이고, 질산 칼륨 수용액은 거른 액이에요.</li><li>분필을 증류수로 조금 헹구고 오븐에서 말려요.</li><li>거른 액을 가열해 물을 일부 증발시키고, 결정이 생기게 둔 다음, 걸러서 결정을 말려요.</li></ol>",
      markscheme: [
        // EN: Add (distilled) water and stir / dissolve the potassium nitrate.
        "(증류)수를 넣고 젓는다 / 질산 칼륨을 녹인다.",
        // EN: Filter (to separate the chalk as the residue).
        "거른다 (분필을 거름 찌꺼기로 분리한다).",
        // EN: Rinse and dry the residue (chalk).
        "거름 찌꺼기(분필)를 헹구고 말린다.",
        // EN: Evaporate (heat) the filtrate and crystallize / dry the potassium nitrate. (Steps must be in a workable order.)
        "거른 액을 증발시키고(가열하고) 결정화한다 / 질산 칼륨을 말린다. (단계는 실제로 할 수 있는 순서여야 한다.)",
      ],
    },

    // ── lab-separation-q012 · multi · challenge · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q012": {
      // EN: <p>A recrystallization gave a low percentage recovery but a pure product. Which changes to the method would increase the recovery? Select all that apply.</p>
      stem: "<p>재결정을 했더니 생성물은 순수했지만 회수율이 낮았어요. 방법을 어떻게 바꾸면 회수율이 높아지나요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Use a smaller volume of hot solvent.
        "뜨거운 용매를 더 적게 써요.",
        // EN: Cool the filtrate in an ice bath before filtering off the crystals.
        "결정을 걸러 내기 전에 거른 액을 얼음 중탕에서 식혀요.",
        // EN: Rinse the crystals with warm solvent.
        "따뜻한 용매로 결정을 헹궈요.",
        // EN: Warm the funnel before the hot filtration.
        "뜨거울 때 거르기 전에 깔때기를 데워요.",
        // EN: Skip the hot filtration step.
        "뜨거울 때 거르는 단계를 건너뛰어요.",
      ],
      hints: [
        // EN: Product is lost where it stays dissolved or crystallizes in the wrong place.
        "생성물은 녹은 채로 남거나 엉뚱한 곳에서 결정이 될 때 잃게 돼요.",
      ],
      // EN: <p>Less solvent and a lower final temperature both leave less product dissolved. A warm funnel stops crystals forming on the filter paper during hot filtration. Warm rinsing loses product, and skipping hot filtration only adds impurity.</p>
      solution: "<p>용매를 적게 쓰고 마지막 온도를 낮추면 둘 다 녹은 채로 남는 생성물이 줄어요. 깔때기를 데우면 뜨거울 때 거르는 동안 거름종이에 결정이 생기지 않아요. 따뜻한 용매로 헹구면 생성물을 잃고, 뜨거울 때 거르기를 건너뛰면 불순물만 더해져요.</p>",
      misconception: {
        // EN (option C): Warm solvent dissolves more of the crystals, so the recovery falls further.
        "2": "따뜻한 용매는 결정을 더 많이 녹이므로 회수율이 더 떨어져요.",
        // EN (option E): Skipping hot filtration may add mass, but that mass is insoluble impurity, not product. The product becomes less pure.
        "4": "뜨거울 때 거르기를 건너뛰면 질량이 늘 수도 있지만, 그 질량은 생성물이 아니라 녹지 않는 불순물이에요. 생성물의 순도가 낮아져요.",
      },
    },

    // ── lab-separation-q013 · short · challenge · SL · Structure 1.1.1 · 3 marks
    "lab-separation-q013": {
      // EN: <p>A student recrystallizes impure benzoic acid twice: once cooling the hot filtrate slowly, and once plunging it straight into an ice bath. The thermometer has an uncertainty of ±0.5 °C. The literature melting point is 122 °C.</p><div class="table-scroll"><table class="data"><caption>Results</caption><thead><tr><th scope="col">Cooling</th><th scope="col" class="num">Recovery / %</th><th scope="col" class="num">Melting range / °C</th></tr></thead><tbody><tr><th scope="row">slow, then ice bath</th><td class="num">78</td><td class="num">121.0–122.0</td></tr><tr><th scope="row">straight into ice bath</th><td class="num">80</td><td class="num">118.5–121.0</td></tr></tbody></table></div><p>Evaluate which cooling method is better, using the data.</p>
      stem: "<p>한 학생이 불순한 벤조산을 두 번 재결정해요: 한 번은 뜨거운 거른 액을 천천히 식히고, 한 번은 바로 얼음 중탕에 담가요. 온도계의 불확도는 ±0.5 °C예요. 문헌 녹는점은 122 °C예요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>결과</caption><thead><tr><th scope=\"col\">냉각</th><th scope=\"col\" class=\"num\">회수율 / %</th><th scope=\"col\" class=\"num\">녹는점 범위 / °C</th></tr></thead><tbody><tr><th scope=\"row\">천천히, 그다음 얼음 중탕</th><td class=\"num\">78</td><td class=\"num\">121.0–122.0</td></tr><tr><th scope=\"row\">바로 얼음 중탕에</th><td class=\"num\">80</td><td class=\"num\">118.5–121.0</td></tr></tbody></table></div><p>자료를 써서 어느 냉각 방법이 더 나은지 평가하시오 (evaluate).</p>",
      hints: [
        // EN: Compare both columns. Which difference is large compared with its uncertainty?
        "두 열을 모두 비교하세요. 어느 차이가 불확도에 비해 큰가요?",
        // EN: What does a low, wide melting range tell you?
        "낮고 넓은 녹는점 범위는 무엇을 알려 주나요?",
      ],
      // EN: <p>"Evaluate" means weigh up both sides. Fast cooling gains a little mass, but the melting range shows impurity is trapped in the small crystals. The 2 % gain may be partly the mass of the impurity itself.</p>
      solution: "<p>\"평가하시오\"는 양쪽을 모두 따져 본다는 뜻이에요. 빠르게 식히면 질량이 조금 늘지만, 녹는점 범위를 보면 작은 결정 속에 불순물이 갇혀 있어요. 늘어난 2 %는 일부가 불순물 자체의 질량일 수 있어요.</p>",
      // EN: <p>The recoveries are similar (78 % and 80 %). Slow cooling gives a melting range of 1.0 °C that ends at 122 °C, within the ±0.5 °C uncertainty of the literature value, so the product is pure. Fast cooling gives a lower, wider range (2.5 °C, starting 3.5 °C below 122 °C), which is much bigger than the uncertainty, so impurity is present: small crystals formed quickly trap impure solution. Slow cooling is better because purity is the aim and the recovery is almost the same.</p>
      answer: "<p>회수율은 비슷해요(78 %와 80 %). 천천히 식히면 녹는점 범위가 1.0 °C이고 122 °C에서 끝나서, 문헌값과 ±0.5 °C의 불확도 안에서 일치하므로 생성물은 순수해요. 빠르게 식히면 범위가 더 낮고 넓은데(2.5 °C, 122 °C보다 3.5 °C 낮은 곳에서 시작), 이는 불확도보다 훨씬 크므로 불순물이 있어요: 빨리 생긴 작은 결정이 불순한 용액을 가둬요. 목표는 순도이고 회수율은 거의 같으므로 천천히 식히는 방법이 더 나아요.</p>",
      markscheme: [
        // EN: Recoveries are similar / fast cooling gives only slightly more product (2 % more).
        "회수율은 비슷하다 / 빠르게 식히면 생성물이 조금만 더 많다 (2 % 더).",
        // EN: Fast cooling gives a lower and wider melting range, so the product is less pure; the difference from 122 °C is larger than the ±0.5 °C uncertainty.
        "빠르게 식히면 녹는점 범위가 더 낮고 넓으므로 생성물의 순도가 낮다. 122 °C와의 차이가 ±0.5 °C의 불확도보다 크다.",
        // EN: Slow cooling is better / gives larger crystals that trap less impurity (and the aim is a pure product).
        "천천히 식히는 것이 더 낫다 / 불순물을 덜 가두는 더 큰 결정이 생긴다 (그리고 목표는 순수한 생성물이다).",
      ],
    },

  }
});
