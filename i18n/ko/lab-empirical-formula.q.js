/* lab-empirical-formula.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-empirical-formula.q', {
  questions: {

    // ── lab-empirical-formula-q001 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q001": {
      // EN: <p>A student burns magnesium ribbon in a crucible to find the empirical formula of magnesium oxide. The method says to lift the lid slightly, every minute or so, and then put it straight back.</p><p>What is the reason for this?</p>
      stem: "<p>한 학생이 산화 마그네슘의 실험식을 구하려고 도가니에서 마그네슘 리본을 태워요. 방법에는 1분쯤마다 뚜껑을 살짝 들어 올렸다가 바로 다시 덮으라고 적혀 있어요.</p><p>그 이유는 무엇인가요?</p>",
      options: [
        // EN: To let water vapour escape from the crucible
        "도가니에서 수증기가 빠져나가게 하려고",
        // EN: To let oxygen in while keeping most of the magnesium oxide in the crucible
        "산소는 들어가게 하면서 산화 마그네슘은 대부분 도가니에 남게 하려고",
        // EN: To check whether the magnesium has melted
        "마그네슘이 녹았는지 확인하려고",
        // EN: To cool the crucible so that it does not crack
        "도가니가 깨지지 않게 식히려고",
      ],
      hints: [
        // EN: Write the equation for the reaction. Which reactant comes from the air?
        "반응식을 써 보세요. 어느 반응물이 공기에서 오나요?",
        // EN: What would you see escaping if the lid were left off?
        "뚜껑을 열어 두면 무엇이 빠져나가는 것이 보일까요?",
      ],
      // EN: <p>The reaction <span class="chem">2Mg + O2 -> 2MgO</span> needs oxygen from the air, so the lid must be lifted to let air in. But the product forms as a fine white smoke, so the lid must go straight back on to stop it escaping. Losing product would make the mass of oxygen too low.</p>
      solution: "<p><span class=\"chem\">2Mg + O2 -> 2MgO</span> 반응에는 공기 중의 산소가 필요하므로 뚜껑을 들어 올려 공기가 들어가게 해야 해요. 하지만 생성물은 고운 흰 연기로 생기므로 빠져나가지 않게 바로 다시 덮어야 해요. 생성물을 잃으면 산소의 질량이 너무 작아져요.</p>",
      misconception: {
        // EN (option A): No water is formed when magnesium burns. The only reactant from the air that matters here is oxygen.
        "0": "마그네슘이 탈 때 물은 생기지 않아요. 여기서 중요한 공기 중의 반응물은 산소뿐이에요.",
        // EN (option C): Whether the metal melts does not change the result. Think about what the reaction needs from the air, and what could be lost.
        "2": "금속이 녹는지는 결과를 바꾸지 않아요. 반응에 공기에서 무엇이 필요한지, 무엇을 잃을 수 있는지 생각해 보세요.",
        // EN (option D): The crucible is designed to take strong heating. Lifting the lid is about the gases and the solid product.
        "3": "도가니는 세게 가열해도 견디도록 만들어졌어요. 뚜껑을 들어 올리는 것은 기체와 고체 생성물 때문이에요.",
      },
    },

    // ── lab-empirical-formula-q002 · numeric · foundation · SL · Structure 1.4.3 · 2 marks
    "lab-empirical-formula-q002": {
      // EN: <p>A student heats magnesium in a crucible until the mass is constant. The balance reads to 0.01 g.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible and lid</th><td class="num">23.18</td></tr><tr><th scope="row">Crucible, lid and magnesium</th><td class="num">23.42</td></tr><tr><th scope="row">Crucible, lid and product (constant)</th><td class="num">23.58</td></tr></tbody></table></div><p>Calculate the amount, in mol, of oxygen atoms that combined with the magnesium. <i>A</i><sub>r</sub>(O) = 16.00</p>
      stem: "<p>한 학생이 질량이 일정해질 때까지 도가니에서 마그네슘을 가열해요. 저울은 0.01 g까지 읽어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>원자료</caption><thead><tr><th scope=\"col\">측정 항목</th><th scope=\"col\" class=\"num\">질량 / g</th></tr></thead><tbody><tr><th scope=\"row\">도가니와 뚜껑</th><td class=\"num\">23.18</td></tr><tr><th scope=\"row\">도가니, 뚜껑, 마그네슘</th><td class=\"num\">23.42</td></tr><tr><th scope=\"row\">도가니, 뚜껑, 생성물 (일정)</th><td class=\"num\">23.58</td></tr></tbody></table></div><p>마그네슘과 결합한 산소 원자의 양을 mol 단위로 계산하시오 (calculate). <i>A</i><sub>r</sub>(O) = 16.00</p>",
      hints: [
        // EN: The gain in mass from the magnesium reading to the final reading is the mass of oxygen.
        "마그네슘을 넣은 값에서 마지막 값까지 늘어난 질량이 산소의 질량이에요.",
        // EN: <i>n</i> = <i>m</i> ÷ <i>M</i> with the molar mass of oxygen atoms, 16.00 <span class="unit">g mol-1</span>.
        "산소 원자의 몰 질량 16.00 <span class=\"unit\">g mol-1</span>로 <i>n</i> = <i>m</i> ÷ <i>M</i>을 쓰세요.",
      ],
      // EN: <div class="worked__math">mass of O = 23.58 <span class="unit">g</span> − 23.42 <span class="unit">g</span> = 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = 0.16 <span class="unit">g</span> ÷ 16.00 <span class="unit">g mol-1</span> = 0.010 <span class="unit">mol</span></div><p>Use the mass of oxygen <em>atoms</em> (16.00), because the question asks for atoms. 0.16 g has 2 significant figures, so the answer is 0.010 mol.</p>
      solution: "<div class=\"worked__math\">O의 질량 = 23.58 <span class=\"unit\">g</span> − 23.42 <span class=\"unit\">g</span> = 0.16 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = 0.16 <span class=\"unit\">g</span> ÷ 16.00 <span class=\"unit\">g mol-1</span> = 0.010 <span class=\"unit\">mol</span></div><p>문제에서 원자를 묻고 있으므로 산소 <em>원자</em>의 질량(16.00)을 써요. 0.16 g은 유효 숫자가 2자리이므로 답은 0.010 mol이에요.</p>",
    },

    // ── lab-empirical-formula-q003 · short · exam · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q003": {
      // EN: <p>A student uses a balance that reads to 0.001 g.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible and lid</th><td class="num">25.317</td></tr><tr><th scope="row">Crucible, lid and magnesium</th><td class="num">25.803</td></tr><tr><th scope="row">After heating to constant mass</th><td class="num">26.111</td></tr></tbody></table></div><p>Determine the empirical formula of the oxide. Show your working. <i>A</i><sub>r</sub>: Mg = 24.31, O = 16.00</p>
      stem: "<p>한 학생이 0.001 g까지 읽는 저울을 써요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>원자료</caption><thead><tr><th scope=\"col\">측정 항목</th><th scope=\"col\" class=\"num\">질량 / g</th></tr></thead><tbody><tr><th scope=\"row\">도가니와 뚜껑</th><td class=\"num\">25.317</td></tr><tr><th scope=\"row\">도가니, 뚜껑, 마그네슘</th><td class=\"num\">25.803</td></tr><tr><th scope=\"row\">질량이 일정해질 때까지 가열한 후</th><td class=\"num\">26.111</td></tr></tbody></table></div><p>산화물의 실험식을 구하시오 (determine). 풀이 과정을 보이세요. <i>A</i><sub>r</sub>: Mg = 24.31, O = 16.00</p>",
      hints: [
        // EN: First find two masses: magnesium (before heating) and oxygen (the gain on heating).
        "먼저 두 질량을 구하세요: 마그네슘(가열 전)과 산소(가열할 때 늘어난 질량).",
        // EN: Convert each mass to moles, then divide both by the smaller amount.
        "각 질량을 몰로 바꾼 다음, 둘 다 더 작은 양으로 나누세요.",
      ],
      // EN: <div class="worked__math">mass of Mg = 25.803 <span class="unit">g</span> − 25.317 <span class="unit">g</span> = 0.486 <span class="unit">g</span></div><div class="worked__math">mass of O = 26.111 <span class="unit">g</span> − 25.803 <span class="unit">g</span> = 0.308 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 <span class="unit">mol</span></div><div class="worked__math">Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1</div><p>1.04 is within experimental error of 1, so the empirical formula is <span class="chem">MgO</span>.</p>
      solution: "<div class=\"worked__math\">Mg의 질량 = 25.803 <span class=\"unit\">g</span> − 25.317 <span class=\"unit\">g</span> = 0.486 <span class=\"unit\">g</span></div><div class=\"worked__math\">O의 질량 = 26.111 <span class=\"unit\">g</span> − 25.803 <span class=\"unit\">g</span> = 0.308 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 <span class=\"unit\">mol</span></div><div class=\"worked__math\">Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1</div><p>1.04는 실험 오차 범위 안에서 1이므로 실험식은 <span class=\"chem\">MgO</span>예요.</p>",
      // EN: <p>mass of Mg = 25.803 − 25.317 = 0.486 g; mass of O = 26.111 − 25.803 = 0.308 g.</p><p><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol; <i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol.</p><p>Mg : O = 1.04 : 1 ≈ 1 : 1, so the empirical formula is <span class="chem">MgO</span>.</p>
      answer: "<p>Mg의 질량 = 25.803 − 25.317 = 0.486 g, O의 질량 = 26.111 − 25.803 = 0.308 g.</p><p><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol, <i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol.</p><p>Mg : O = 1.04 : 1 ≈ 1 : 1이므로 실험식은 <span class=\"chem\">MgO</span>예요.</p>",
      markscheme: [
        // EN: M1: mass of Mg = 0.486 g AND mass of O = 0.308 g.
        "M1: Mg의 질량 = 0.486 g 그리고 O의 질량 = 0.308 g.",
        // EN: M2: n(Mg) = 0.0200 mol AND n(O) = 0.0193 mol (ECF from M1).
        "M2: n(Mg) = 0.0200 mol 그리고 n(O) = 0.0193 mol (M1에서 ECF).",
        // EN: M3: ratio close to 1 : 1, so MgO. (Award [3] for a correct final answer with working.)
        "M3: 비가 1 : 1에 가까우므로 MgO. (풀이 과정과 함께 최종 답이 옳으면 [3]점.)",
      ],
    },

    // ── lab-empirical-formula-q004 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q004": {
      // EN: <p>During the magnesium experiment, a small part of the magnesium reacts with nitrogen in the air to form magnesium nitride, <span class="chem">Mg3N2</span>, instead of magnesium oxide.</p><p>What is the effect on the experimental ratio <i>n</i>(O) : <i>n</i>(Mg), and why?</p>
      stem: "<p>마그네슘 실험에서 마그네슘의 일부가 산화 마그네슘 대신 공기 중의 질소와 반응해 질화 마그네슘 <span class=\"chem\">Mg3N2</span>가 생겨요.</p><p>실험으로 구한 비 <i>n</i>(O) : <i>n</i>(Mg)에 어떤 영향이 있고, 그 이유는 무엇인가요?</p>",
      options: [
        // EN: Higher, because the nitrogen adds extra mass to the product
        "질소가 생성물에 질량을 더 보태므로 커져요",
        // EN: Lower, because forming the nitride adds less mass for each mole of magnesium than forming the oxide
        "질화물이 생길 때 마그네슘 1몰당 늘어나는 질량이 산화물이 생길 때보다 작으므로 작아져요",
        // EN: No change, because the student only calculates the amount of oxygen
        "학생은 산소의 양만 계산하므로 변하지 않아요",
        // EN: Lower, because the nitrogen escapes as a gas
        "질소가 기체로 빠져나가므로 작아져요",
      ],
      hints: [
        // EN: The student assumes every gram gained is oxygen.
        "학생은 늘어난 질량이 모두 산소라고 가정해요.",
        // EN: Compare the mass gained by 3 mol of Mg when it forms Mg₃N₂ and when it forms 3 MgO.
        "Mg 3 mol이 Mg₃N₂가 될 때와 3 MgO가 될 때 늘어나는 질량을 비교해 보세요.",
      ],
      // EN: <p>3 mol of Mg gain 2 × 14.01 = 28.02 g as <span class="chem">Mg3N2</span>, but 3 × 16.00 = 48.00 g as 3 <span class="chem">MgO</span>. So the total mass gain is smaller than it should be. The student counts all of the gain as oxygen, so the calculated amount of oxygen is too low and the ratio O : Mg is <strong>too low</strong>.</p><p>Improvement: add a few drops of distilled water to the cooled product and heat again. The nitride is converted to the oxide.</p>
      solution: "<p>Mg 3 mol은 <span class=\"chem\">Mg3N2</span>가 되면 2 × 14.01 = 28.02 g이 늘지만, 3 <span class=\"chem\">MgO</span>가 되면 3 × 16.00 = 48.00 g이 늘어요. 그래서 늘어난 질량 전체가 원래보다 작아요. 학생은 늘어난 질량을 모두 산소로 계산하므로, 계산한 산소의 양이 너무 작고 비 O : Mg가 <strong>너무 작아요</strong>.</p><p>개선 방법: 식은 생성물에 증류수를 몇 방울 넣고 다시 가열해요. 질화물이 산화물로 바뀌어요.</p>",
      misconception: {
        // EN (option A): The nitrogen does add mass, but compare it with the mass the oxide would have added for the same magnesium. 3 mol of Mg gain 28.02 g as Mg₃N₂ but 48.00 g as 3 mol of MgO.
        "0": "질소가 질량을 보태기는 하지만, 같은 마그네슘으로 산화물이 생길 때 늘어났을 질량과 비교해 보세요. Mg 3 mol은 Mg₃N₂가 되면 28.02 g, MgO 3 mol이 되면 48.00 g이 늘어요.",
        // EN (option C): The student does not know that any nitride has formed. All of the mass gain is counted as oxygen, so the nitride does change the calculated ratio.
        "2": "학생은 질화물이 생겼다는 것을 몰라요. 늘어난 질량은 모두 산소로 계산되므로, 질화물은 계산한 비를 바꿔요.",
        // EN (option D): The nitrogen stays in the solid as nitride ions. It is the smaller mass gain that matters.
        "3": "질소는 질화 이온으로 고체 속에 남아요. 중요한 것은 늘어난 질량이 더 작다는 점이에요.",
      },
    },

    // ── lab-empirical-formula-q005 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q005": {
      // EN: <p>A student heats hydrated magnesium sulfate, <span class="chem">MgSO4.xH2O</span>, to constant mass.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible</th><td class="num">15.62</td></tr><tr><th scope="row">Crucible and hydrate</th><td class="num">19.32</td></tr><tr><th scope="row">Crucible and anhydrous salt (constant)</th><td class="num">17.43</td></tr></tbody></table></div><p>Calculate the value of <i>x</i>, to the nearest whole number. <i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>한 학생이 수화된 황산 마그네슘 <span class=\"chem\">MgSO4.xH2O</span>를 질량이 일정해질 때까지 가열해요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>원자료</caption><thead><tr><th scope=\"col\">측정 항목</th><th scope=\"col\" class=\"num\">질량 / g</th></tr></thead><tbody><tr><th scope=\"row\">도가니</th><td class=\"num\">15.62</td></tr><tr><th scope=\"row\">도가니와 수화물</th><td class=\"num\">19.32</td></tr><tr><th scope=\"row\">도가니와 무수 염 (일정)</th><td class=\"num\">17.43</td></tr></tbody></table></div><p><i>x</i> 값을 가장 가까운 정수로 계산하시오 (calculate). <i>M</i>(<span class=\"chem\">MgSO4</span>) = 120.38 <span class=\"unit\">g mol-1</span>, <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Mass of anhydrous salt = final − crucible. Mass of water = (crucible + hydrate) − final.
        "무수 염의 질량 = 마지막 − 도가니. 물의 질량 = (도가니 + 수화물) − 마지막.",
        // EN: x = n(H₂O) ÷ n(MgSO₄).
        "x = n(H₂O) ÷ n(MgSO₄).",
      ],
      // EN: <div class="worked__math">mass of <span class="chem">MgSO4</span> = 17.43 − 15.62 = 1.81 <span class="unit">g</span></div><div class="worked__math">mass of water = 19.32 − 17.43 = 1.89 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(<span class="chem">MgSO4</span>) = 1.81 ÷ 120.38 = 0.01504 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 1.89 ÷ 18.02 = 0.1049 <span class="unit">mol</span></div><div class="worked__math"><i>x</i> = 0.1049 ÷ 0.01504 = 6.98</div><p>To the nearest whole number, <i>x</i> = <strong>7</strong>: <span class="chem">MgSO4.7H2O</span>.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">MgSO4</span>의 질량 = 17.43 − 15.62 = 1.81 <span class=\"unit\">g</span></div><div class=\"worked__math\">물의 질량 = 19.32 − 17.43 = 1.89 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">MgSO4</span>) = 1.81 ÷ 120.38 = 0.01504 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = 1.89 ÷ 18.02 = 0.1049 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>x</i> = 0.1049 ÷ 0.01504 = 6.98</div><p>가장 가까운 정수로 <i>x</i> = <strong>7</strong>: <span class=\"chem\">MgSO4.7H2O</span>.</p>",
    },

    // ── lab-empirical-formula-q006 · short · foundation · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q006": {
      // EN: <p>A student heats hydrated copper(II) sulfate and weighs it after each heating, on a balance that reads to 0.01 g. The last two readings are 20.14 g and then 20.12 g.</p><p>State and explain whether the student can stop heating.</p>
      stem: "<p>한 학생이 수화된 황산 구리(II)를 가열하고, 가열할 때마다 0.01 g까지 읽는 저울로 무게를 재요. 마지막 두 값은 20.14 g, 그다음 20.12 g이에요.</p><p>학생이 가열을 멈춰도 되는지 쓰고 (state), 그 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: How big is the difference between the readings, compared with what the balance can show?
        "두 값의 차이는 저울이 보여 줄 수 있는 것에 비해 얼마나 큰가요?",
        // EN: What does a falling mass tell you about the water?
        "질량이 줄어든다는 것은 물에 대해 무엇을 알려 주나요?",
      ],
      // EN: <p>Constant mass means two consecutive readings agree within the balance’s precision. 20.14 g and 20.12 g differ by 0.02 g, so the mass is still going down: not all of the water has gone yet. Stopping now would make the mass of water too small and <i>x</i> too low.</p>
      solution: "<p>질량이 일정하다는 것은 연달아 잰 두 값이 저울의 정밀도 안에서 같다는 뜻이에요. 20.14 g과 20.12 g은 0.02 g 차이가 나므로 질량이 아직 줄고 있어요: 물이 아직 다 빠져나가지 않았어요. 지금 멈추면 물의 질량이 너무 작고 <i>x</i>가 너무 작아져요.</p>",
      // EN: <p>No. The two readings differ by 0.02 g, which is more than the precision of the balance, so the mass is still falling and some water is still present. The student should heat, cool and weigh again until two readings in a row agree (within 0.01 g).</p>
      answer: "<p>아니요. 두 값은 0.02 g 차이가 나는데 이는 저울의 정밀도보다 크므로, 질량이 아직 줄고 있고 물이 아직 일부 남아 있어요. 학생은 연달아 잰 두 값이 (0.01 g 안에서) 같아질 때까지 가열하고, 식히고, 다시 무게를 재야 해요.</p>",
      markscheme: [
        // EN: No: the mass is still decreasing / the readings are not the same within 0.01 g.
        "아니다: 질량이 아직 줄고 있다 / 두 값이 0.01 g 안에서 같지 않다.",
        // EN: Some water of crystallization is still present, so heat, cool and reweigh until two consecutive masses agree.
        "결정수가 아직 일부 남아 있으므로, 연달아 잰 두 질량이 같아질 때까지 가열하고, 식히고, 다시 무게를 잰다.",
      ],
    },

    // ── lab-empirical-formula-q007 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q007": {
      // EN: <p>A student heats hydrated copper(II) sulfate very strongly. The white powder starts to turn black, because some <span class="chem">CuSO4</span> decomposes into <span class="chem">CuO</span> and gaseous <span class="chem">SO3</span>.</p><p>What is the effect on the calculated value of <i>x</i>?</p>
      stem: "<p>한 학생이 수화된 황산 구리(II)를 아주 세게 가열해요. <span class=\"chem\">CuSO4</span>의 일부가 <span class=\"chem\">CuO</span>와 기체 <span class=\"chem\">SO3</span>로 분해되어 흰 가루가 검게 변하기 시작해요.</p><p>계산한 <i>x</i> 값에 어떤 영향이 있나요?</p>",
      options: [
        // EN: Too high, because the extra loss of mass is counted as water
        "추가로 잃은 질량이 물로 계산되므로 너무 커요",
        // EN: Too low, because copper(II) oxide is heavier than copper(II) sulfate
        "산화 구리(II)가 황산 구리(II)보다 무거우므로 너무 작아요",
        // EN: No effect, because all of the water has still been removed
        "물은 여전히 모두 없어졌으므로 영향이 없어요",
        // EN: Too low, because less water is lost
        "잃는 물이 적어지므로 너무 작아요",
      ],
      hints: [
        // EN: Does decomposition make the solid lighter or heavier?
        "분해되면 고체가 가벼워지나요, 무거워지나요?",
        // EN: The student calculates the mass of water as (mass before) − (mass after).
        "학생은 물의 질량을 (전 질량) − (후 질량)으로 계산해요.",
      ],
      // EN: <p>Losing <span class="chem">SO3</span> makes the final mass too low. So the mass of “water” (before − after) is too high, and the mass of anhydrous salt is too low. Both changes make <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">CuSO4</span>) <strong>too high</strong>. Heat gently and stop when the solid is white all through.</p>
      solution: "<p><span class=\"chem\">SO3</span>를 잃으면 마지막 질량이 너무 작아요. 그래서 “물”의 질량(전 − 후)은 너무 크고, 무수 염의 질량은 너무 작아요. 두 변화 모두 <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>)를 <strong>너무 크게</strong> 만들어요. 약하게 가열하고, 고체가 속까지 하얘지면 멈추세요.</p>",
      misconception: {
        // EN (option B): One mole of CuO (79.55 g) is lighter than one mole of CuSO₄ (159.62 g). Decomposition makes the solid lighter, not heavier.
        "1": "CuO 1몰(79.55 g)은 CuSO₄ 1몰(159.62 g)보다 가벼워요. 분해되면 고체는 무거워지는 것이 아니라 가벼워져요.",
        // EN (option C): The water has gone, but extra mass has gone too. The student cannot tell the two losses apart.
        "2": "물은 없어졌지만 질량이 더 없어졌어요. 학생은 두 가지 잃은 질량을 구별할 수 없어요.",
        // EN (option D): The water is all lost. The question is what happens to the mass of the solid left behind.
        "3": "물은 모두 없어져요. 문제는 남은 고체의 질량이 어떻게 되는지예요.",
      },
    },

    // ── lab-empirical-formula-q008 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q008": {
      // EN: <p>A student lets the hot anhydrous copper(II) sulfate cool on the open bench for 20 minutes before each weighing. What is the most likely effect on the value of <i>x</i>?</p>
      stem: "<p>한 학생이 무게를 잴 때마다 뜨거운 무수 황산 구리(II)를 실험대 위에서 20분 동안 식혀요. <i>x</i> 값에 가장 그럴듯한 영향은 무엇인가요?</p>",
      options: [
        // EN: Too high, because the solid loses more water as it cools slowly
        "고체가 천천히 식으면서 물을 더 잃으므로 너무 커요",
        // EN: Too low, because the solid absorbs water from the air, so the final mass is too high
        "고체가 공기에서 물을 흡수해서 마지막 질량이 너무 크므로 너무 작아요",
        // EN: Too low, because the hot crucible makes the balance read high
        "뜨거운 도가니 때문에 저울이 높게 읽히므로 너무 작아요",
        // EN: No effect, because the solid was already weighed hot
        "고체는 이미 뜨거울 때 무게를 쟀으므로 영향이 없어요",
      ],
      hints: [
        // EN: Anhydrous copper(II) sulfate is used as a test for water. What does it do in moist air?
        "무수 황산 구리(II)는 물을 검출하는 데 써요. 습한 공기에서 무엇을 할까요?",
        // EN: If the final mass is too high, is the calculated mass of water too high or too low?
        "마지막 질량이 너무 크면, 계산한 물의 질량은 너무 클까요, 너무 작을까요?",
      ],
      // EN: <p>Anhydrous copper(II) sulfate takes water back from the air. So the final mass is too high, the calculated mass of water is too low and the anhydrous mass is too high. <i>x</i> comes out <strong>too low</strong>. Cool the crucible in a desiccator and weigh it as soon as it is cool.</p>
      solution: "<p>무수 황산 구리(II)는 공기에서 물을 다시 흡수해요. 그래서 마지막 질량이 너무 크고, 계산한 물의 질량은 너무 작고, 무수 염의 질량은 너무 커요. <i>x</i>가 <strong>너무 작게</strong> 나와요. 도가니를 데시케이터에서 식히고, 식자마자 무게를 재세요.</p>",
      misconception: {
        // EN (option A): Once the solid is cool it is no longer losing water. Anhydrous copper(II) sulfate does the opposite in moist air.
        "0": "고체가 식고 나면 더 이상 물을 잃지 않아요. 무수 황산 구리(II)는 습한 공기에서 그 반대로 해요.",
        // EN (option C): Weighing a hot crucible does give wrong readings, but this student waited until it was cool. Think about what the solid does in air.
        "2": "뜨거운 도가니의 무게를 재면 값이 틀리게 나오지만, 이 학생은 식을 때까지 기다렸어요. 고체가 공기 중에서 무엇을 하는지 생각해 보세요.",
        // EN (option D): The solid is weighed after it cools, so anything it gains while cooling is in the reading.
        "3": "고체는 식은 뒤에 무게를 재므로, 식는 동안 얻은 것은 모두 측정값에 들어가요.",
      },
    },

    // ── lab-empirical-formula-q009 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q009": {
      // EN: <p>In a hydrate experiment, the crucible and hydrate weigh 22.46 g before heating and 21.31 g at constant mass. The balance reads to ±0.01 g.</p><p>Calculate the percentage uncertainty in the mass of water lost.</p>
      stem: "<p>수화물 실험에서 도가니와 수화물의 질량은 가열 전 22.46 g, 질량이 일정해졌을 때 21.31 g이에요. 저울은 ±0.01 g까지 읽어요.</p><p>잃은 물의 질량의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: The mass of water is a difference of two readings. Add their absolute uncertainties.
        "물의 질량은 두 측정값의 차이예요. 두 값의 절대 불확도를 더하세요.",
        // EN: Percentage uncertainty = absolute uncertainty ÷ value × 100.
        "백분율 불확도 = 절대 불확도 ÷ 값 × 100.",
      ],
      // EN: <div class="worked__math">mass of water = 22.46 − 21.31 = 1.15 <span class="unit">g</span></div><div class="worked__math">absolute uncertainty = ±0.01 + ±0.01 = ±0.02 <span class="unit">g</span></div><div class="worked__math">percentage uncertainty = 0.02 ÷ 1.15 × 100 = 1.7 %</div><p>A common slip is to use ±0.01 g. Every mass found by difference uses two readings.</p>
      solution: "<div class=\"worked__math\">물의 질량 = 22.46 − 21.31 = 1.15 <span class=\"unit\">g</span></div><div class=\"worked__math\">절대 불확도 = ±0.01 + ±0.01 = ±0.02 <span class=\"unit\">g</span></div><div class=\"worked__math\">백분율 불확도 = 0.02 ÷ 1.15 × 100 = 1.7 %</div><p>±0.01 g을 쓰는 실수가 흔해요. 차이로 구한 질량에는 항상 측정값이 2개 쓰여요.</p>",
    },

    // ── lab-empirical-formula-q010 · numeric · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q010": {
      // EN: <p>A student’s experiment gives <i>x</i> = 4.60 for hydrated copper(II) sulfate. The accepted formula is <span class="chem">CuSO4.5H2O</span>.</p><p>Calculate the percentage error.</p>
      stem: "<p>한 학생의 실험에서 수화된 황산 구리(II)의 <i>x</i> = 4.60이 나와요. 인정된 화학식은 <span class=\"chem\">CuSO4.5H2O</span>예요.</p><p>백분율 오차를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Percentage error = |experimental − accepted| ÷ accepted × 100.
        "백분율 오차 = |실험값 − 인정값| ÷ 인정값 × 100.",
      ],
      // EN: <div class="worked__math">percentage error = |4.60 − 5| ÷ 5 × 100 = 8.0 %</div><p>The difference is always divided by the <em>accepted</em> value, not by the student’s value.</p>
      solution: "<div class=\"worked__math\">백분율 오차 = |4.60 − 5| ÷ 5 × 100 = 8.0 %</div><p>차이는 언제나 학생의 값이 아니라 <em>인정값</em>으로 나눠요.</p>",
    },

    // ── lab-empirical-formula-q011 · short · challenge · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q011": {
      // EN: <p>A 0.580 g sample of a hydrocarbon is burned completely in excess oxygen. The products are 1.760 g of <span class="chem">CO2</span> and 0.900 g of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the hydrocarbon. <i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>, <i>A</i><sub>r</sub>: C = 12.01, H = 1.01</p>
      stem: "<p>탄화수소 시료 0.580 g을 과량의 산소에서 완전히 태워요. 생성물은 <span class=\"chem\">CO2</span> 1.760 g과 <span class=\"chem\">H2O</span> 0.900 g이에요.</p><p>이 탄화수소의 실험식을 구하시오 (determine). <i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>, <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>, <i>A</i><sub>r</sub>: C = 12.01, H = 1.01</p>",
      hints: [
        // EN: All the carbon ends up in CO₂ and all the hydrogen in H₂O.
        "탄소는 모두 CO₂에, 수소는 모두 H₂O에 들어가요.",
        // EN: Each H₂O molecule holds two H atoms. Your ratio will not be a whole number at first.
        "H₂O 분자 하나에는 H 원자가 2개 있어요. 처음에는 비가 정수로 나오지 않을 거예요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 <span class="unit">mol</span></div><div class="worked__math">C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50</div><p>2.50 is not close to a whole number, so it is a real ratio: multiply by 2 to get 2 : 5. The empirical formula is <span class="chem">C2H5</span>.</p><p>Check for oxygen: mass of C + H = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g. This equals the sample mass within the precision of the data, so the compound contains no oxygen, as expected for a hydrocarbon.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 <span class=\"unit\">mol</span></div><div class=\"worked__math\">C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50</div><p>2.50은 정수에 가깝지 않으므로 실제 비예요: 2를 곱해 2 : 5로 만들어요. 실험식은 <span class=\"chem\">C2H5</span>예요.</p><p>산소가 있는지 확인: C + H의 질량 = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g. 이는 자료의 정밀도 안에서 시료의 질량과 같으므로, 탄화수소에서 예상하듯 이 화합물에는 산소가 없어요.</p>",
      // EN: <p><i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol. <i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol.</p><p>C : H = 1 : 2.50 = 2 : 5. Empirical formula <span class="chem">C2H5</span>. (Check: 0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g, the mass of the sample, so there is no oxygen.)</p>
      answer: "<p><i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol. <i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol.</p><p>C : H = 1 : 2.50 = 2 : 5. 실험식 <span class=\"chem\">C2H5</span>. (확인: 0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g으로 시료의 질량과 같으므로 산소가 없어요.)</p>",
      markscheme: [
        // EN: M1: n(C) = n(CO₂) = 0.0400 mol.
        "M1: n(C) = n(CO₂) = 0.0400 mol.",
        // EN: M2: n(H) = 2 × n(H₂O) = 0.0999 mol.
        "M2: n(H) = 2 × n(H₂O) = 0.0999 mol.",
        // EN: M3: C : H = 1 : 2.5 = 2 : 5, so C₂H₅. (Do not accept CH₂ or CH₃: 2.5 must be multiplied up, not rounded.)
        "M3: C : H = 1 : 2.5 = 2 : 5, 따라서 C₂H₅. (불인정: CH₂나 CH₃. 2.5는 반올림하지 않고 정수가 되도록 곱해야 한다.)",
      ],
    },

    // ── lab-empirical-formula-q012 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q012": {
      // EN: <p>A student heats iron in oxygen and calculates the mole ratio Fe : O = 1 : 1.48. Which empirical formula fits the data best?</p>
      stem: "<p>한 학생이 산소 속에서 철을 가열하고 몰비 Fe : O = 1 : 1.48을 계산해요. 자료에 가장 잘 맞는 실험식은 어느 것인가요?</p>",
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
        "1.48은 정수에 가깝나요? 간단한 분수에 가깝나요?",
        // EN: 1.5 = 3/2. Multiply both sides of the ratio by 2.
        "1.5 = 3/2. 비의 양쪽에 2를 곱하세요.",
      ],
      // EN: <p>1.48 is very close to 1.5. Multiply both numbers by 2: Fe : O = 2 : 2.96 ≈ 2 : 3. The empirical formula is <span class="chem">Fe2O3</span>. Ratios such as 1.5, 1.33 and 1.25 must be multiplied up, not rounded.</p>
      solution: "<p>1.48은 1.5에 아주 가까워요. 두 수에 2를 곱하면 Fe : O = 2 : 2.96 ≈ 2 : 3이에요. 실험식은 <span class=\"chem\">Fe2O3</span>예요. 1.5, 1.33, 1.25 같은 비는 반올림하지 말고 정수가 되도록 곱해야 해요.</p>",
      misconception: {
        // EN (option A): Rounding 1.48 to 1 throws away a real difference of almost 50 %. That is far too big to be experimental error.
        "0": "1.48을 1로 반올림하면 거의 50 %에 이르는 실제 차이를 버리는 거예요. 실험 오차라고 하기에는 너무 커요.",
        // EN (option C): Fe₃O₄ has Fe : O = 1 : 1.33. Your value 1.48 is much closer to another simple ratio.
        "2": "Fe₃O₄는 Fe : O = 1 : 1.33이에요. 1.48은 다른 간단한 비에 훨씬 더 가까워요.",
        // EN (option D): In Fe₃O₂ there is less oxygen than iron, so O ÷ Fe would be below 1.
        "3": "Fe₃O₂에는 산소가 철보다 적으므로 O ÷ Fe가 1보다 작을 거예요.",
      },
    },

    // ── lab-empirical-formula-q013 · short · exam · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q013": {
      // EN: <p>In the magnesium experiment, a student uses 0.24 g of magnesium and a balance that reads to 0.01 g. The mass of oxygen gained is 0.16 g, with an uncertainty of ±0.02 g (12.5 %).</p><p>Suggest <strong>two</strong> changes to the method that would reduce the percentage uncertainty in the mass of oxygen. Explain one of them.</p>
      stem: "<p>마그네슘 실험에서 한 학생이 마그네슘 0.24 g과 0.01 g까지 읽는 저울을 써요. 늘어난 산소의 질량은 0.16 g이고, 불확도는 ±0.02 g(12.5 %)이에요.</p><p>산소 질량의 백분율 불확도를 줄일 방법의 변화를 <strong>두 가지</strong> 제안하시오 (suggest). 그중 하나를 설명하시오 (explain).</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty ÷ value × 100. Which two numbers in that fraction could you change?
        "백분율 불확도 = 절대 불확도 ÷ 값 × 100. 이 분수에서 바꿀 수 있는 두 수는 무엇인가요?",
      ],
      // EN: <p>Percentage uncertainty = absolute uncertainty ÷ measured value × 100. To make it smaller you can make the top smaller (a balance reading to 0.001 g gives ±0.002 g for a difference) or the bottom bigger (more magnesium gives more oxygen). With 0.48 g of Mg and a 0.01 g balance, the uncertainty in about 0.32 g of oxygen falls to about 6 %.</p>
      solution: "<p>백분율 불확도 = 절대 불확도 ÷ 측정값 × 100. 이를 줄이려면 분자를 작게 하거나(0.001 g까지 읽는 저울을 쓰면 차이의 불확도가 ±0.002 g), 분모를 크게 하면 돼요(마그네슘이 많으면 산소도 많아요). Mg 0.48 g과 0.01 g 저울을 쓰면, 약 0.32 g인 산소의 불확도가 약 6 %로 떨어져요.</p>",
      // EN: <p>Use a longer piece of magnesium ribbon (a bigger sample), and use a balance that reads to 0.001 g. With a bigger sample the mass of oxygen is larger, but the absolute uncertainty of the balance stays the same, so it is a smaller percentage.</p>
      answer: "<p>더 긴 마그네슘 리본(더 많은 시료)을 쓰고, 0.001 g까지 읽는 저울을 써요. 시료가 많으면 산소의 질량이 커지지만 저울의 절대 불확도는 그대로이므로 백분율은 더 작아져요.</p>",
      markscheme: [
        // EN: Two valid changes: a larger mass of magnesium / longer ribbon AND a more precise balance (0.001 g).
        "알맞은 변화 두 가지: 더 많은 마그네슘 / 더 긴 리본 그리고 더 정밀한 저울(0.001 g).",
        // EN: Explanation: the same absolute uncertainty is a smaller fraction of a larger mass / a 0.001 g balance has a ten times smaller absolute uncertainty. (Repeating and averaging reduces random error but does not change the uncertainty of one reading; accept it only as a third point.)
        "설명: 같은 절대 불확도가 더 큰 질량에서는 더 작은 비율이 된다 / 0.001 g 저울은 절대 불확도가 10배 작다. (반복해서 평균을 내면 우연 오차가 줄지만 측정값 하나의 불확도는 바뀌지 않는다. 세 번째 항목으로만 인정.)",
      ],
    },

    // ── lab-empirical-formula-q014 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q014": {
      // EN: <p>A student finds the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14 for magnesium oxide. The expected value is 1.00. Which conclusion is best supported?</p>
      stem: "<p>한 학생이 산화 마그네슘에 대해 비 <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14를 구해요. 예상값은 1.00이에요. 가장 잘 뒷받침되는 결론은 어느 것인가요?</p>",
      options: [
        // EN: There must be a systematic error, because the result is not 1.00
        "결과가 1.00이 아니므로 계통 오차가 있는 게 분명해요",
        // EN: The result agrees with MgO within its uncertainty, so random error could explain the difference
        "결과가 불확도 안에서 MgO와 일치하므로, 우연 오차로 차이를 설명할 수 있어요",
        // EN: The formula of the oxide is not MgO, because the percentage error is 7 %
        "백분율 오차가 7 %이므로 산화물의 화학식은 MgO가 아니에요",
        // EN: The uncertainty is too large to say anything, so the data should be discarded
        "불확도가 너무 커서 아무것도 말할 수 없으므로 자료를 버려야 해요",
      ],
      hints: [
        // EN: Work out the range of values the uncertainty allows: 0.93 − 0.14 to 0.93 + 0.14.
        "불확도가 허용하는 값의 범위를 구하세요: 0.93 − 0.14에서 0.93 + 0.14까지.",
        // EN: Is 1.00 inside that range?
        "1.00이 그 범위 안에 있나요?",
      ],
      // EN: <p>The uncertainty gives a range of 0.79 to 1.07. The expected value 1.00 lies inside it. So the result is consistent with <span class="chem">MgO</span>, and the 7 % difference can be explained by random error alone. To test for a systematic error, the uncertainty must first be made smaller: more magnesium and a 0.001 g balance.</p>
      solution: "<p>불확도로 정해지는 범위는 0.79에서 1.07까지예요. 예상값 1.00은 그 안에 있어요. 그래서 결과는 <span class=\"chem\">MgO</span>와 일치하고, 7 %의 차이는 우연 오차만으로 설명할 수 있어요. 계통 오차가 있는지 알아보려면 먼저 불확도를 줄여야 해요: 마그네슘을 더 많이, 0.001 g 저울을 써요.</p>",
      misconception: {
        // EN (option A): A result that differs from 1.00 is expected for every real measurement. Compare the size of the difference with the size of the uncertainty.
        "0": "실제 측정에서는 결과가 1.00과 다른 것이 당연해요. 차이의 크기를 불확도의 크기와 비교하세요.",
        // EN (option C): A 7 % difference is smaller than the 15 % uncertainty, so the data do not rule out MgO.
        "2": "7 %의 차이는 15 %의 불확도보다 작으므로 자료가 MgO를 배제하지 않아요.",
        // EN (option D): The range 0.79 to 1.07 still rules out other simple ratios such as 1.5 and 0.5. Large uncertainty is a reason to improve the method, not to throw the data away.
        "3": "0.79에서 1.07까지의 범위로도 1.5나 0.5 같은 다른 간단한 비는 배제할 수 있어요. 불확도가 크면 자료를 버릴 것이 아니라 방법을 개선해야 해요.",
      },
    },

  }
});
