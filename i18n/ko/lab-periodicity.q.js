/* lab-periodicity.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-periodicity.q', {
  questions: {

    // ── lab-periodicity-q001 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q001": {
      // EN: <p>A few drops of a halogen solution are added to a solution of a potassium halide. In which mixture does a displacement reaction take place?</p>
      stem: "<p>할로젠화 칼륨 용액에 할로젠 용액을 몇 방울 넣어요. 치환 반응이 일어나는 혼합물은 어느 것인가요?</p>",
      options: [
        // EN: Iodine solution and potassium bromide
        "아이오딘 용액과 브로민화 칼륨",
        // EN: Bromine water and potassium chloride
        "브로민수와 염화 칼륨",
        // EN: Bromine water and potassium iodide
        "브로민수와 아이오딘화 칼륨",
        // EN: Iodine solution and potassium chloride
        "아이오딘 용액과 염화 칼륨",
      ],
      hints: [
        // EN: A halogen displaces only halide ions of halogens below it in group 17.
        "할로젠은 17족에서 자기보다 아래에 있는 할로젠의 할로젠화 이온만 치환해요.",
      ],
      // EN: <p>Bromine is above iodine in group 17, so it is more reactive. It takes electrons from iodide ions: <span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>.</p>
      solution: "<p>브로민은 17족에서 아이오딘보다 위에 있으므로 반응성이 더 커요. 브로민은 아이오딘화 이온에서 전자를 빼앗아요: <span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>.</p>",
      misconception: {
        // EN (option A): Iodine is below bromine in group 17, so it is less reactive and cannot take electrons from bromide ions.
        "0": "아이오딘은 17족에서 브로민보다 아래에 있으므로 반응성이 더 작고, 브로민화 이온에서 전자를 빼앗을 수 없어요.",
        // EN (option B): Bromine is below chlorine, so it is less reactive and cannot displace chloride ions.
        "1": "브로민은 염소보다 아래에 있으므로 반응성이 더 작고, 염화 이온을 치환할 수 없어요.",
        // EN (option D): Iodine is the least reactive of the three, so it displaces neither chloride nor bromide ions.
        "3": "아이오딘은 셋 중 반응성이 가장 작으므로 염화 이온도 브로민화 이온도 치환하지 못해요.",
      },
    },

    // ── lab-periodicity-q002 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q002": {
      // EN: <p>Chlorine water is added to a colourless solution of an unknown potassium halide. Cyclohexane is then added and the tube is shaken. The top (cyclohexane) layer is violet.</p><p>Which ion was in the unknown solution? (In cyclohexane: chlorine is colourless, bromine is orange and iodine is violet.)</p>
      stem: "<p>모르는 할로젠화 칼륨의 무색 용액에 염소수를 넣어요. 그다음 cyclohexane을 넣고 시험관을 흔들어요. 위(cyclohexane)층이 보라색이에요.</p><p>모르는 용액에 들어 있던 이온은 무엇인가요? (cyclohexane 속에서: 염소는 무색, 브로민은 주황색, 아이오딘은 보라색)</p>",
      options: [
        // EN: Chloride
        "염화 이온",
        // EN: Bromide
        "브로민화 이온",
        // EN: Iodide
        "아이오딘화 이온",
        // EN: Potassium
        "칼륨 이온",
      ],
      hints: [
        // EN: Which halogen is violet in cyclohexane? Where did it come from?
        "cyclohexane 속에서 보라색인 할로젠은 무엇일까요? 그 할로젠은 어디에서 왔을까요?",
      ],
      // EN: <p>The violet layer shows iodine. Chlorine did not bring any iodine with it, so the iodine must have formed from iodide ions: <span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span>.</p>
      solution: "<p>보라색 층은 아이오딘이 있다는 것을 보여 줘요. 염소수에는 아이오딘이 없었으므로, 아이오딘은 아이오딘화 이온에서 생긴 것이 틀림없어요: <span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span>.</p>",
      misconception: {
        // EN (option A): Chlorine cannot react with chloride ions, so the top layer would stay colourless.
        "0": "염소는 염화 이온과 반응할 수 없으므로 위층은 무색으로 남을 거예요.",
        // EN (option B): Bromide ions would give bromine, which is orange in cyclohexane.
        "1": "브로민화 이온이었다면 브로민이 생겨서 cyclohexane 속에서 주황색일 거예요.",
        // EN (option D): Potassium ions are spectator ions: they are in every one of these salts and do not react.
        "3": "칼륨 이온은 구경꾼 이온이에요: 이 염들에 모두 들어 있고 반응하지 않아요.",
      },
    },

    // ── lab-periodicity-q003 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q003": {
      // EN: <p>When chlorine water is added to potassium iodide solution, the solution turns brown. Write the ionic equation, with state symbols, for the reaction.</p>
      stem: "<p>아이오딘화 칼륨 용액에 염소수를 넣으면 용액이 갈색으로 변해요. 이 반응의 이온 반응식을 상태 기호와 함께 쓰시오 (write).</p>",
      hints: [
        // EN: Chlorine takes electrons from iodide ions. What forms?
        "염소는 아이오딘화 이온에서 전자를 빼앗아요. 무엇이 생길까요?",
        // EN: Leave out the ions that do not change.
        "변하지 않는 이온은 빼요.",
      ],
      // EN: <div class="worked__math"><span class="chem">Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)</span></div><div class="worked__math">remove K<sup>+</sup>: <b><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></b></div>
      solution: "<div class=\"worked__math\"><span class=\"chem\">Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)</span></div><div class=\"worked__math\">K<sup>+</sup> 빼기: <b><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></b></div>",
      // EN: <p><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></p><p>The potassium ions are spectator ions and are left out.</p>
      answer: "<p><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></p><p>칼륨 이온은 구경꾼 이온이므로 뺀다.</p>",
      markscheme: [
        // EN: Correct species: Cl₂ and I⁻ on the left, Cl⁻ and I₂ on the right, with no K⁺.
        "올바른 화학종: 왼쪽에 Cl₂와 I⁻, 오른쪽에 Cl⁻와 I₂, K⁺는 없음.",
        // EN: Balanced (2I⁻ and 2Cl⁻) with correct state symbols (all aq).
        "계수가 맞고 (2I⁻와 2Cl⁻) 상태 기호가 옳음 (모두 aq).",
      ],
    },

    // ── lab-periodicity-q004 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q004": {
      // EN: <p>Bromine water is added to potassium chloride solution. The colour of the mixture is the same as that of the control tube (bromine water and water). Explain this observation.</p>
      stem: "<p>염화 칼륨 용액에 브로민수를 넣어요. 혼합물의 색이 대조군 시험관(브로민수와 물)의 색과 같아요. 이 관찰 결과를 설명하시오 (explain).</p>",
      hints: [
        // EN: What does "same as the control" tell you about whether anything happened?
        "\"대조군과 같다\"는 것은 무슨 일이 일어났는지에 대해 무엇을 알려 줄까요?",
        // EN: Compare how strongly bromine and chlorine atoms attract an extra electron.
        "브로민 원자와 염소 원자가 더해지는 전자를 얼마나 강하게 끌어당기는지 비교해 봐요.",
      ],
      // EN: <p>See the model answer: the observation (no change) and the reason (bromine is less reactive, because its atoms attract electrons less strongly).</p>
      solution: "<p>모범 답안을 보세요: 관찰(변화 없음)과 이유(브로민 원자가 전자를 덜 강하게 끌어당기므로 브로민의 반응성이 더 작음).</p>",
      // EN: <p>No reaction takes place, so no new halogen forms and the colour is just that of bromine. Bromine is less reactive than chlorine: a bromine atom is larger, so its outer energy level is further from the nucleus and more shielded, and it attracts an extra electron less strongly than a chlorine atom. So bromine cannot take electrons from chloride ions.</p>
      answer: "<p>반응이 일어나지 않으므로 새 할로젠이 생기지 않고, 색은 브로민의 색 그대로이다. 브로민은 염소보다 반응성이 작다: 브로민 원자는 더 커서 바깥 에너지 준위가 원자핵에서 더 멀고 더 많이 가려막혀 있으므로, 염소 원자보다 더해지는 전자를 덜 강하게 끌어당긴다. 그래서 브로민은 염화 이온에서 전자를 빼앗을 수 없다.</p>",
      markscheme: [
        // EN: No reaction / bromine does not displace chloride ions, because bromine is less reactive than chlorine.
        "반응 없음 / 브로민은 염소보다 반응성이 작으므로 염화 이온을 치환하지 않는다.",
        // EN: Bromine atoms are larger / the outer level is further from the nucleus and more shielded, so they attract an electron less strongly than chlorine atoms.
        "브로민 원자가 더 크다 / 바깥 준위가 원자핵에서 더 멀고 더 많이 가려막혀 있으므로, 염소 원자보다 전자를 덜 강하게 끌어당긴다.",
      ],
    },

    // ── lab-periodicity-q005 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q005": {
      // EN: <p>In the halogen experiment, a student also adds each halogen solution to a tube containing distilled water instead of a halide solution. What is the purpose of this tube?</p>
      stem: "<p>할로젠 실험에서 한 학생이 할로젠화물 용액 대신 증류수가 든 시험관에도 각 할로젠 용액을 넣어요. 이 시험관의 목적은 무엇인가요?</p>",
      options: [
        // EN: To dilute the halogen so that the reaction is slower
        "할로젠을 묽혀서 반응을 느리게 하려고",
        // EN: To show the colour of the halogen solution when no reaction happens, for comparison
        "반응이 일어나지 않을 때의 할로젠 용액 색을 보여 주어 비교하려고",
        // EN: To check that the halide solutions are all the same concentration
        "할로젠화물 용액의 농도가 모두 같은지 확인하려고",
        // EN: To make the cyclohexane layer separate more quickly
        "cyclohexane 층이 더 빨리 나뉘게 하려고",
      ],
      hints: [
        // EN: How do you know whether a colour is new, or was there already?
        "어떤 색이 새로 생긴 것인지, 원래 있던 것인지 어떻게 알 수 있을까요?",
      ],
      // EN: <p>The water tube is a control. It shows the colour of the halogen solution when nothing reacts. A tube that ends up a different colour from the control shows that a new halogen has formed.</p>
      solution: "<p>물이 든 시험관은 대조군이에요. 아무것도 반응하지 않을 때의 할로젠 용액 색을 보여 줘요. 대조군과 다른 색이 된 시험관은 새 할로젠이 생겼다는 것을 보여 줘요.</p>",
      misconception: {
        // EN (option A): The water tube is a separate tube; it is not added to the other mixtures.
        "0": "물이 든 시험관은 따로 있는 시험관이에요. 다른 혼합물에 넣지 않아요.",
        // EN (option C): Water contains no halide ions, so it cannot tell you anything about their concentrations.
        "2": "물에는 할로젠화 이온이 없으므로, 그 농도에 대해서는 아무것도 알려 줄 수 없어요.",
        // EN (option D): The layers separate because cyclohexane and water do not mix, whatever is dissolved in them.
        "3": "무엇이 녹아 있든, cyclohexane과 물은 섞이지 않으므로 층이 나뉘어요.",
      },
    },

    // ── lab-periodicity-q006 · numeric · exam · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q006": {
      // EN: <p>A teacher drops pieces of potassium of the same size onto water and times how long each piece takes to disappear.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Times for potassium</caption><thead><tr><th scope="col">Run</th><th scope="col" class="num">Time / s</th></tr></thead><tbody><tr><th scope="row">1</th><td class="num">4.6</td></tr><tr><th scope="row">2</th><td class="num">3.9</td></tr><tr><th scope="row">3</th><td class="num">4.3</td></tr><tr><th scope="row">4</th><td class="num">4.0</td></tr></tbody></table></div><p>Calculate the mean time, in s.</p>
      stem: "<p>선생님이 같은 크기의 칼륨 조각을 물 위에 떨어뜨리고, 각 조각이 사라지는 데 걸리는 시간을 재요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>칼륨의 시간</caption><thead><tr><th scope=\"col\">실험</th><th scope=\"col\" class=\"num\">시간 / s</th></tr></thead><tbody><tr><th scope=\"row\">1</th><td class=\"num\">4.6</td></tr><tr><th scope=\"row\">2</th><td class=\"num\">3.9</td></tr><tr><th scope=\"row\">3</th><td class=\"num\">4.3</td></tr><tr><th scope=\"row\">4</th><td class=\"num\">4.0</td></tr></tbody></table></div><p>평균 시간을 s 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Add the four times and divide by 4.
        "네 시간을 더하고 4로 나눠요.",
        // EN: Give the mean to the same number of decimal places as the data.
        "평균은 자료와 같은 소수 자리까지 써요.",
      ],
      // EN: <div class="worked__math">(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b></div>
      solution: "<div class=\"worked__math\">(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b></div>",
    },

    // ── lab-periodicity-q007 · short · exam · SL · Structure 3.1.4 · 3 marks
    "lab-periodicity-q007": {
      // EN: <p>A small piece of sodium is dropped onto water containing universal indicator. State three observations, and write the equation for the reaction.</p>
      stem: "<p>만능 지시약을 넣은 물 위에 작은 나트륨 조각을 떨어뜨려요. 관찰 결과 3가지를 쓰고 (state), 반응의 반응식을 쓰시오.</p>",
      hints: [
        // EN: Think about what you see happen to the metal, and to the indicator.
        "금속에 일어나는 일과 지시약에 일어나는 일을 생각해 봐요.",
        // EN: The products are a hydroxide and a gas.
        "생성물은 수산화물과 기체예요.",
      ],
      // EN: <p>See the model answer. "Hydrogen is given off" is a conclusion, not an observation; say "fizzes" or "bubbles".</p>
      solution: "<p>모범 답안을 보세요. \"수소가 나온다\"는 관찰이 아니라 결론이에요. \"거품이 난다\"나 \"기포가 생긴다\"라고 쓰세요.</p>",
      // EN: <p>The sodium floats; it melts into a ball; it fizzes (bubbles of gas) and moves about on the surface; it gets smaller and disappears; the indicator turns from green to purple (blue). <span class="chem">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></p>
      answer: "<p>나트륨이 물 위에 뜬다; 공 모양으로 녹는다; 거품(기체 방울)이 나며 표면 위를 돌아다닌다; 점점 작아지다가 사라진다; 지시약이 초록색에서 보라색(파란색)으로 변한다. <span class=\"chem\">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></p>",
      markscheme: [
        // EN: Any two observations: floats / melts into a ball / fizzes or effervescence / moves on the surface / gets smaller or disappears.
        "관찰 중 아무거나 2가지: 뜬다 / 공 모양으로 녹는다 / 거품이 난다 / 표면 위를 움직인다 / 작아지거나 사라진다.",
        // EN: The indicator turns purple (or blue): an alkaline solution forms.
        "지시약이 보라색(또는 파란색)으로 변한다: 알칼리성 용액이 생긴다.",
        // EN: Equation: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) (state symbols not needed for the mark).
        "반응식: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) (점수를 받는 데 상태 기호는 필요 없음).",
      ],
    },

    // ── lab-periodicity-q008 · mcq · challenge · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q008": {
      // EN: <p>A class records the mean time for a 3 mm cube of each metal to disappear on water.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Mean times</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Mean time / s</th></tr></thead><tbody><tr><th scope="row">lithium</th><td class="num">57 ± 4</td></tr><tr><th scope="row">sodium</th><td class="num">14 ± 1</td></tr><tr><th scope="row">potassium</th><td class="num">4.2 ± 0.4</td></tr></tbody></table></div><p>Which conclusion is best supported by these data?</p>
      stem: "<p>한 반이 각 금속의 3 mm 정육면체 조각이 물 위에서 사라지는 평균 시간을 기록해요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>평균 시간</caption><thead><tr><th scope=\"col\">금속</th><th scope=\"col\" class=\"num\">평균 시간 / s</th></tr></thead><tbody><tr><th scope=\"row\">리튬</th><td class=\"num\">57 ± 4</td></tr><tr><th scope=\"row\">나트륨</th><td class=\"num\">14 ± 1</td></tr><tr><th scope=\"row\">칼륨</th><td class=\"num\">4.2 ± 0.4</td></tr></tbody></table></div><p>이 자료가 가장 잘 뒷받침하는 결론은 어느 것인가요?</p>",
      options: [
        // EN: Reactivity increases down group 1, because the outer electron is lost more easily
        "1족 아래로 갈수록 반응성이 커진다. 바깥 전자를 더 쉽게 잃기 때문이다",
        // EN: Reactivity increases down group 1, because the atoms have more protons to attract water
        "1족 아래로 갈수록 반응성이 커진다. 원자에 물을 끌어당길 양성자가 더 많기 때문이다",
        // EN: The data cannot show a trend, because each time has an uncertainty
        "시간마다 불확도가 있으므로 이 자료로는 경향을 보여 줄 수 없다",
        // EN: Potassium reacts about 14 times faster than lithium, so its first ionization energy is 14 times smaller
        "칼륨은 리튬보다 약 14배 빨리 반응하므로 제1 이온화 에너지가 14배 작다",
      ],
      hints: [
        // EN: Do the ranges of the results overlap?
        "결과의 범위가 겹치나요?",
        // EN: Which explanation is about losing the outer electron?
        "바깥 전자를 잃는 것에 대한 설명은 어느 것일까요?",
      ],
      // EN: <p>The times fall steeply from lithium to potassium, far more than the uncertainties, so the metals become more reactive down the group. The outer electron is further from the nucleus and more shielded, so it is lost more easily.</p>
      solution: "<p>리튬에서 칼륨으로 갈수록 시간이 불확도보다 훨씬 크게 줄어드므로, 족 아래로 갈수록 금속의 반응성이 커져요. 바깥 전자가 원자핵에서 더 멀고 더 많이 가려막혀 있으므로 더 쉽게 잃어요.</p>",
      misconception: {
        // EN (option B): The trend is right, but the reason is wrong. The extra nuclear charge is outweighed by the greater distance and shielding of the outer electron.
        "1": "경향은 맞지만 이유가 틀렸어요. 핵전하가 커지는 효과보다 바깥 전자의 거리가 멀어지고 가려막기가 커지는 효과가 더 커요.",
        // EN (option C): The differences between the metals are far bigger than the uncertainties, and the ranges do not overlap, so the trend is real.
        "2": "금속 사이의 차이가 불확도보다 훨씬 크고 범위가 겹치지 않으므로, 이 경향은 실제로 있는 거예요.",
        // EN (option D): Reaction time is not proportional to ionization energy. The first ionization energy of potassium (419 kJ mol⁻¹) is only a little lower than that of lithium (520 kJ mol⁻¹).
        "3": "반응 시간은 이온화 에너지에 비례하지 않아요. 칼륨의 제1 이온화 에너지(419 kJ mol⁻¹)는 리튬(520 kJ mol⁻¹)보다 조금 낮을 뿐이에요.",
      },
    },

    // ── lab-periodicity-q009 · mcq · foundation · SL · Structure 3.1.5 · 1 mark
    "lab-periodicity-q009": {
      // EN: <p>A student adds four oxides, W, X, Y and Z, to water and measures the pH of each mixture with a pH meter. Distilled water on its own gives pH 5.8.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>pH of each oxide with water</caption><thead><tr><th scope="col">Oxide</th><th scope="col" class="num">pH</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">12.3</td></tr><tr><th scope="row">X</th><td class="num">5.8</td></tr><tr><th scope="row">Y</th><td class="num">2.4</td></tr><tr><th scope="row">Z</th><td class="num">10.1</td></tr></tbody></table></div><p>Which oxide could be sulfur dioxide?</p>
      stem: "<p>한 학생이 산화물 W, X, Y, Z 4가지를 물에 넣고 pH 미터로 각 혼합물의 pH를 재요. 증류수만 쟀을 때는 pH 5.8이에요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>물에 넣은 각 산화물의 pH</caption><thead><tr><th scope=\"col\">산화물</th><th scope=\"col\" class=\"num\">pH</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">12.3</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">5.8</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">2.4</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">10.1</td></tr></tbody></table></div><p>이산화 황일 수 있는 산화물은 어느 것인가요?</p>",
      options: [
        // EN: W
        "W",
        // EN: X
        "X",
        // EN: Y
        "Y",
        // EN: Z
        "Z",
      ],
      hints: [
        // EN: Sulfur is a non-metal. What kind of solution does its oxide form?
        "황은 비금속이에요. 황의 산화물은 어떤 용액을 만들까요?",
      ],
      // EN: <p>Sulfur dioxide is an acidic oxide: <span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span>. The only reading well below the control is <b>Y</b>, pH 2.4.</p>
      solution: "<p>이산화 황은 산성 산화물이에요: <span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span>. 대조군보다 훨씬 낮은 측정값은 pH 2.4인 <b>Y</b>뿐이에요.</p>",
      misconception: {
        // EN (option A): pH 12.3 is strongly alkaline: this is a basic metal oxide such as calcium oxide.
        "0": "pH 12.3은 강한 알칼리성이에요: 산화 칼슘 같은 염기성 금속 산화물이에요.",
        // EN (option B): pH 5.8 is the same as the control, so this oxide has not dissolved. Sulfur dioxide dissolves and forms an acid.
        "1": "pH 5.8은 대조군과 같으므로 이 산화물은 녹지 않았어요. 이산화 황은 녹아서 산을 만들어요.",
        // EN (option D): pH 10.1 is alkaline: a basic metal oxide such as magnesium oxide.
        "3": "pH 10.1은 알칼리성이에요: 산화 마그네슘 같은 염기성 금속 산화물이에요.",
      },
    },

    // ── lab-periodicity-q010 · short · exam · SL · Structure 3.1.5 · 2 marks
    "lab-periodicity-q010": {
      // EN: <p>Lithium burns in air to form lithium oxide, a white solid. When the solid is added to water containing universal indicator, the indicator turns purple. Deduce the equation, with state symbols, for the reaction of lithium oxide with water.</p>
      stem: "<p>리튬은 공기 중에서 타서 흰색 고체인 산화 리튬이 돼요. 이 고체를 만능 지시약을 넣은 물에 넣으면 지시약이 보라색으로 변해요. 산화 리튬과 물의 반응식을 상태 기호와 함께 추론하시오 (deduce).</p>",
      hints: [
        // EN: Lithium forms Li⁺ ions. What are the formulas of its oxide and hydroxide?
        "리튬은 Li⁺ 이온이 돼요. 리튬의 산화물과 수산화물의 화학식은 무엇일까요?",
        // EN: A basic oxide + water → a metal hydroxide.
        "염기성 산화물 + 물 → 금속 수산화물.",
      ],
      // EN: <div class="worked__math">Li<sub>2</sub>O + H<sub>2</sub>O → LiOH (not balanced)</div><div class="worked__math"><b><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></b></div>
      solution: "<div class=\"worked__math\">Li<sub>2</sub>O + H<sub>2</sub>O → LiOH (계수 안 맞춤)</div><div class=\"worked__math\"><b><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></b></div>",
      // EN: <p><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></p><p>Lithium is in group 1, so its ion is Li⁺: the oxide is Li₂O and the hydroxide is LiOH.</p>
      answer: "<p><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></p><p>리튬은 1족이므로 이온은 Li⁺이다: 산화물은 Li₂O, 수산화물은 LiOH이다.</p>",
      markscheme: [
        // EN: Correct formulas: Li₂O and LiOH.
        "올바른 화학식: Li₂O와 LiOH.",
        // EN: Balanced (2LiOH) with correct state symbols.
        "계수가 맞고 (2LiOH) 상태 기호가 옳음.",
      ],
    },

    // ── lab-periodicity-q011 · short · exam · SL · Structure 3.1.5 · 2 marks
    "lab-periodicity-q011": {
      // EN: <p>Sulfur is burned in a gas jar of air in a fume cupboard. Water is added and the jar is shaken. The pH of the water falls from 5.8 to 2.4. Write the equation, with state symbols, for the reaction that lowers the pH, and state one environmental problem caused by this reaction in the atmosphere.</p>
      stem: "<p>흄 후드 안에서 공기가 든 기체 병에 황을 태워요. 물을 넣고 병을 흔들어요. 물의 pH가 5.8에서 2.4로 내려가요. pH를 낮추는 반응의 반응식을 상태 기호와 함께 쓰고 (write), 대기 중에서 이 반응이 일으키는 환경 문제를 하나 쓰시오 (state).</p>",
      hints: [
        // EN: Burning sulfur forms sulfur dioxide. Add its atoms to those of water to get the acid.
        "황이 타면 이산화 황이 생겨요. 그 원자들에 물의 원자들을 더하면 산이 돼요.",
      ],
      // EN: <p>Sulfur dioxide is an acidic oxide. It reacts with water to form sulfurous acid, H₂SO₃. Gaseous non-metal oxides dissolving in rain water cause acid rain.</p>
      solution: "<p>이산화 황은 산성 산화물이에요. 물과 반응해 아황산 H₂SO₃를 만들어요. 기체인 비금속 산화물이 빗물에 녹으면 산성비가 돼요.</p>",
      // EN: <p><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></p><p>In the atmosphere this forms acid rain, which damages buildings, trees and life in lakes.</p>
      answer: "<p><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></p><p>대기 중에서 이 반응은 산성비를 만들고, 산성비는 건물, 나무, 호수의 생물에 피해를 준다.</p>",
      markscheme: [
        // EN: SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq) (accept → for ⇌).
        "SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq) (⇌ 대신 → 인정).",
        // EN: Acid rain (accept a named effect of acid rain).
        "산성비 (산성비의 구체적인 영향을 쓴 경우도 인정).",
      ],
    },

    // ── lab-periodicity-q012 · mcq · challenge · SL · Structure 3.1.5 · 1 mark
    "lab-periodicity-q012": {
      // EN: <p>A student stirs 0.50 g of aluminium oxide with 50 cm<sup>3</sup> of distilled water. The pH is 5.8, the same as the distilled water on its own. Which statement is correct?</p>
      stem: "<p>한 학생이 산화 알루미늄 0.50 g을 증류수 50 cm<sup>3</sup>와 함께 저어요. pH는 5.8로, 증류수만 쟀을 때와 같아요. 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: Aluminium oxide is a neutral oxide, because the pH did not change
        "pH가 변하지 않았으므로 산화 알루미늄은 중성 산화물이다",
        // EN: Aluminium oxide is an acidic oxide, because the pH is below 7
        "pH가 7보다 낮으므로 산화 알루미늄은 산성 산화물이다",
        // EN: The test cannot show the character of aluminium oxide, because it does not dissolve in water
        "산화 알루미늄은 물에 녹지 않으므로, 이 시험으로는 그 성질을 보여 줄 수 없다",
        // EN: The pH meter must be faulty, because a metal oxide always gives pH above 7
        "금속 산화물은 언제나 pH 7보다 높으므로 pH 미터가 고장 났다",
      ],
      hints: [
        // EN: Compare the reading with the control, not with 7.
        "측정값을 7이 아니라 대조군과 비교해 봐요.",
      ],
      // EN: <p>The reading equals the control, so the oxide did not dissolve or react with water. To show that aluminium oxide is amphoteric, you would need to test it with an acid and with an alkali.</p>
      solution: "<p>측정값이 대조군과 같으므로 산화물은 물에 녹거나 물과 반응하지 않았어요. 산화 알루미늄이 양쪽성이라는 것을 보이려면 산과 알칼리로 각각 시험해야 해요.</p>",
      misconception: {
        // EN (option A): No change in pH means nothing dissolved, not that the oxide is neutral. Aluminium oxide reacts with both acids and bases: it is amphoteric.
        "0": "pH 변화가 없다는 것은 산화물이 중성이라는 뜻이 아니라 아무것도 녹지 않았다는 뜻이에요. 산화 알루미늄은 산과도 염기와도 반응해요: 양쪽성이에요.",
        // EN (option B): pH 5.8 is just the control value: dissolved carbon dioxide from the air makes distilled water slightly acidic.
        "1": "pH 5.8은 대조군 값일 뿐이에요: 공기 중의 이산화 탄소가 녹아서 증류수가 약한 산성이 돼요.",
        // EN (option D): Insoluble metal oxides do not change the pH. The meter gave the same reading as the control, which is what you expect.
        "3": "녹지 않는 금속 산화물은 pH를 바꾸지 않아요. pH 미터가 대조군과 같은 값을 보인 것은 예상한 그대로예요.",
      },
    },

    // ── lab-periodicity-q013 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q013": {
      // EN: <p>A student repeats the chlorine water and potassium bromide test with chlorine water from a bottle that had been left open for two weeks. This time the colour change is very faint. Suggest a reason, and an improvement.</p>
      stem: "<p>한 학생이 2주 동안 열어 둔 병의 염소수로 염소수와 브로민화 칼륨 시험을 반복해요. 이번에는 색 변화가 아주 희미해요. 그 이유와 개선 방법을 제안하시오 (suggest).</p>",
      hints: [
        // EN: Chlorine is a gas at room temperature. What happens to it in an open bottle?
        "염소는 실온에서 기체예요. 열어 둔 병에서 염소는 어떻게 될까요?",
      ],
      // EN: <p>See the model answer. This is a systematic error: repeating with the same bottle gives the same faint result.</p>
      solution: "<p>모범 답안을 보세요. 이것은 계통 오차예요: 같은 병으로 반복하면 똑같이 희미한 결과가 나와요.</p>",
      // EN: <p>Chlorine escapes from the solution over time (it is a gas), so the old chlorine water contains very little chlorine. Only a little bromine forms, so the colour is faint. Use freshly made chlorine water, kept in a stoppered bottle.</p>
      answer: "<p>(염소는 기체이므로) 시간이 지나면 염소가 용액에서 빠져나가서, 오래된 염소수에는 염소가 아주 조금만 들어 있다. 브로민이 조금만 생기므로 색이 희미하다. 마개를 막은 병에 보관한, 새로 만든 염소수를 쓴다.</p>",
      markscheme: [
        // EN: Chlorine has escaped / the concentration of chlorine is lower, so little bromine forms.
        "염소가 빠져나갔다 / 염소의 농도가 낮아서 브로민이 조금만 생긴다.",
        // EN: Use freshly made chlorine water (accept: keep it stoppered; add more drops and compare with a control).
        "새로 만든 염소수를 쓴다 (인정: 마개를 막아 보관한다; 방울 수를 늘리고 대조군과 비교한다).",
      ],
    },

  }
});
