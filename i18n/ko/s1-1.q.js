/* s1-1.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-1.q', {
  questions: {

    // ── s1-1-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q001": {
      // EN: <p>Which of these is a <strong>homogeneous mixture</strong>?</p>
      stem: "<p>다음 중 <strong>균일 혼합물</strong>은 어느 것인가요?</p>",
      options: [
        // EN: Distilled water, <span class="chem">H2O</span>
        "증류수, <span class=\"chem\">H2O</span>",
        // EN: Clean, dry air
        "깨끗하고 건조한 공기",
        // EN: Sand stirred into water
        "물에 넣고 저은 모래",
        // EN: Copper wire
        "구리 선",
      ],
      hints: [
        // EN: A mixture contains more than one substance, and the substances are not chemically bonded to each other.
        "혼합물에는 두 가지 이상의 물질이 들어 있고, 그 물질들은 서로 화학 결합을 하고 있지 않아요.",
        // EN: Homogeneous means the composition is the same throughout. You cannot see separate parts.
        "균일하다는 것은 어느 부분이든 조성이 같다는 뜻이에요. 서로 다른 부분이 눈에 보이지 않아요.",
      ],
      // EN: <p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is the same throughout. That is a homogeneous mixture.</p>
      solution: "<p>건조한 공기는 여러 기체(주로 질소와 산소)가 고르게 섞인 혼합물이라서, 어느 부분이든 조성이 같아요. 이것이 균일 혼합물이에요.</p>",
      misconception: {
        // EN (option A): Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.
        "0": "물은 화합물이에요. 수소 원자와 산소 원자가 일정한 비율로 화학 결합을 하고 있으므로, 혼합물이 아니라 순물질이에요.",
        // EN (option C): This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.
        "2": "혼합물은 맞지만, 모래와 물이 따로 있는 부분이 눈에 보여요. 그래서 불균일 혼합물이에요.",
        // EN (option D): Copper is an element. It contains only one type of atom.
        "3": "구리는 원소예요. 한 종류의 원자만 들어 있어요.",
      },
    },

    // ── s1-1-q002 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q002": {
      // EN: <p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>
      stem: "<p>기체 시료의 온도가 25 °C예요. 이 온도는 몇 켈빈인가요? 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: Kelvin and degrees Celsius have the same step size. Only the zero point is different.
        "켈빈과 섭씨 온도는 눈금 한 칸의 크기가 같아요. 0점의 위치만 달라요.",
        // EN: <span class="mono">T(K) = T(°C) + 273.15</span>
        "<span class=\"mono\">T(K) = T(°C) + 273.15</span>",
      ],
      // EN: <div class="worked__math"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>유효 숫자 3자리로 나타내면 <strong>298 K</strong>예요.</p>",
    },

    // ── s1-1-q004 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "s1-1-q004": {
      // EN: <p>Put these steps in order to get dry salt crystals from a dry mixture of sand and salt.</p>
      stem: "<p>모래와 소금이 섞인 건조한 혼합물에서 건조한 소금 결정을 얻으려고 해요. 다음 단계를 순서대로 배열하세요.</p>",
      options: [
        // EN: Add water and stir so that the salt dissolves.
        "물을 넣고 저어서 소금을 녹인다.",
        // EN: Filter. The sand stays on the filter paper as the residue.
        "거른다. 모래는 거름 찌꺼기로 거름종이 위에 남는다.",
        // EN: Heat the filtrate to evaporate most of the water.
        "거른 액을 가열해서 물을 대부분 증발시킨다.",
        // EN: Leave the solution to cool and crystallize, then dry the crystals.
        "용액을 식혀서 결정이 생기게 한 뒤, 결정을 말린다.",
      ],
      hints: [
        // EN: Which property is different for sand and salt? Use it first.
        "모래와 소금은 어떤 성질이 다른가요? 그 성질을 먼저 이용하세요.",
        // EN: The salt ends up in the filtrate, still dissolved. What must happen to the water?
        "소금은 녹은 채로 거른 액에 들어 있어요. 물은 어떻게 해야 할까요?",
      ],
      // EN: <p>Salt is soluble in water and sand is not. Dissolving (solvation) then filtering separates them: sand is the residue and salt solution is the filtrate. Evaporating the water from the filtrate leaves the salt, which crystallizes and can be dried.</p>
      solution: "<p>소금은 물에 녹고 모래는 녹지 않아요. 용해(용매화)한 뒤 거르면 둘을 분리할 수 있어요. 모래는 거름 찌꺼기가 되고, 소금 용액은 거른 액이 돼요. 거른 액에서 물을 증발시키면 소금이 남고, 소금이 결정으로 되면 말릴 수 있어요.</p>",
    },

    // ── s1-1-q006 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q006": {
      // EN: <p>Which of these is a <strong>compound</strong>?</p>
      stem: "<p>다음 중 <strong>화합물</strong>은 어느 것인가요?</p>",
      options: [
        // EN: Chlorine gas, <span class="chem">Cl2</span>
        "염소 기체, <span class=\"chem\">Cl2</span>",
        // EN: Ammonia, <span class="chem">NH3</span>
        "암모니아, <span class=\"chem\">NH3</span>",
        // EN: Air
        "공기",
        // EN: Salt water
        "소금물",
      ],
      hints: [
        // EN: A compound contains atoms of two or more different elements, chemically bonded.
        "화합물에는 서로 다른 두 가지 이상의 원소의 원자들이 화학 결합을 하고 있어요.",
        // EN: Look at each formula. How many different elements does it contain?
        "각 화학식을 보세요. 서로 다른 원소가 몇 가지 들어 있나요?",
      ],
      // EN: <p>Ammonia contains nitrogen and hydrogen atoms chemically bonded in a fixed 1 : 3 ratio, so it is a compound. <span class="chem">Cl2</span> is an element. Air and salt water are mixtures.</p>
      solution: "<p>암모니아에는 질소 원자와 수소 원자가 일정한 1 : 3 비율로 화학 결합을 하고 있으므로 화합물이에요. <span class=\"chem\">Cl2</span>는 원소예요. 공기와 소금물은 혼합물이에요.</p>",
      misconception: {
        // EN (option A): A chlorine molecule has two atoms, but both are chlorine atoms. One type of atom means an element.
        "0": "염소 분자에는 원자가 2개 있지만, 둘 다 염소 원자예요. 원자가 한 종류뿐이면 원소예요.",
        // EN (option C): Air is a mixture. Its gases are not chemically bonded to each other and their proportions can vary.
        "2": "공기는 혼합물이에요. 공기 속 기체들은 서로 화학 결합을 하고 있지 않고, 그 비율도 달라질 수 있어요.",
        // EN (option D): Salt water is a mixture (a solution). The salt and water are not chemically bonded in a fixed ratio.
        "3": "소금물은 혼합물(용액)이에요. 소금과 물은 일정한 비율로 화학 결합을 하고 있지 않아요.",
      },
    },

    // ── s1-1-q007 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q007": {
      // EN: <p>On a very cold night, water vapour in the air forms ice crystals directly on a window, with no liquid in between. What is this change of state called?</p>
      stem: "<p>아주 추운 밤, 공기 속 수증기가 액체를 거치지 않고 바로 창문에 얼음 결정으로 생겨요. 이 상태 변화를 무엇이라고 하나요?</p>",
      options: [
        // EN: Sublimation
        "승화",
        // EN: Condensation
        "액화",
        // EN: Deposition
        "증착",
        // EN: Freezing
        "응고",
      ],
      hints: [
        // EN: Write down the starting state and the final state first.
        "먼저 처음 상태와 마지막 상태를 적어 보세요.",
        // EN: The change is gas → solid.
        "이 변화는 기체 → 고체예요.",
      ],
      // EN: <p>Water vapour is a gas and ice is a solid. The change gas → solid is called <strong>deposition</strong>.</p>
      solution: "<p>수증기는 기체이고 얼음은 고체예요. 기체 → 고체 변화를 <strong>증착</strong>이라고 해요.</p>",
      misconception: {
        // EN (option A): Sublimation is the opposite direction: solid to gas.
        "0": "승화는 반대 방향, 즉 고체에서 기체로 가는 변화예요.",
        // EN (option B): Condensation is gas to liquid. Here no liquid forms.
        "1": "액화는 기체에서 액체로 가는 변화예요. 여기서는 액체가 생기지 않아요.",
        // EN (option D): Freezing is liquid to solid. Here the starting state is a gas.
        "3": "응고는 액체에서 고체로 가는 변화예요. 여기서는 처음 상태가 기체예요.",
      },
    },

    // ── s1-1-q008 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q008": {
      // EN: <p>Which row describes the particles in a <strong>liquid</strong>?</p>
      stem: "<p><strong>액체</strong>의 입자를 바르게 설명한 행은 어느 것인가요?</p>",
      options: [
        // EN: Close together, regular arrangement, vibrate about fixed positions
        "서로 가까이 있음, 규칙적으로 배열됨, 고정된 위치에서 진동함",
        // EN: Close together, random arrangement, move past each other
        "서로 가까이 있음, 불규칙하게 배열됨, 서로 미끄러지듯 지나가며 움직임",
        // EN: Far apart, random arrangement, move past each other
        "서로 멀리 떨어져 있음, 불규칙하게 배열됨, 서로 미끄러지듯 지나가며 움직임",
        // EN: Far apart, random arrangement, move quickly in all directions
        "서로 멀리 떨어져 있음, 불규칙하게 배열됨, 모든 방향으로 빠르게 움직임",
      ],
      hints: [
        // EN: Think about three things: spacing, arrangement and movement.
        "세 가지를 생각해 보세요: 입자 사이의 거리, 배열, 움직임.",
        // EN: A liquid flows, but it is almost impossible to squash into a smaller volume. What does each fact tell you?
        "액체는 흐르지만, 눌러서 부피를 줄이는 것은 거의 불가능해요. 각 사실에서 무엇을 알 수 있나요?",
      ],
      // EN: <p>A liquid cannot easily be compressed, so its particles are close together. It flows and takes the shape of its container, so its particles are randomly arranged and can move past each other.</p>
      solution: "<p>액체는 쉽게 압축되지 않으므로 입자들이 서로 가까이 있어요. 또 액체는 흐르고 그릇의 모양을 따르므로, 입자들이 불규칙하게 배열되어 있고 서로 미끄러지듯 지나가며 움직일 수 있어요.</p>",
      misconception: {
        // EN (option A): That describes a solid. In a liquid the particles are not in fixed positions.
        "0": "고체에 대한 설명이에요. 액체에서는 입자가 고정된 위치에 있지 않아요.",
        // EN (option C): Particles in a liquid are still close together. That is why a liquid is very hard to compress.
        "2": "액체의 입자도 서로 가까이 있어요. 그래서 액체는 압축하기가 매우 어려워요.",
        // EN (option D): That describes a gas.
        "3": "기체에 대한 설명이에요.",
      },
    },

    // ── s1-1-q009 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q009": {
      // EN: <p>Liquid nitrogen boils at 77 K. What is this temperature in degrees Celsius? Give your answer to 3 significant figures.</p>
      stem: "<p>액체 질소는 77 K에서 끓어요. 이 온도는 섭씨 몇 도인가요? 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: Going from kelvin to degrees Celsius, the number gets smaller.
        "켈빈에서 섭씨 온도로 바꾸면 숫자가 작아져요.",
        // EN: <span class="mono">T(°C) = T(K) − 273.15</span>. The answer will be negative.
        "<span class=\"mono\">T(°C) = T(K) − 273.15</span>. 답은 음수가 돼요.",
      ],
      // EN: <div class="worked__math"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>To 3 significant figures this is <strong>−196 °C</strong>.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>유효 숫자 3자리로 나타내면 <strong>−196 °C</strong>예요.</p>",
    },

    // ── s1-1-q010 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q010": {
      // EN: <p>Sodium chloride is dissolved in water. Which formula with state symbol describes the dissolved sodium chloride?</p>
      stem: "<p>염화 나트륨을 물에 녹였어요. 녹아 있는 염화 나트륨을 나타내는 상태 기호가 붙은 화학식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">NaCl(s)</span>
        "<span class=\"chem\">NaCl(s)</span>",
        // EN: <span class="chem">NaCl(l)</span>
        "<span class=\"chem\">NaCl(l)</span>",
        // EN: <span class="chem">NaCl(g)</span>
        "<span class=\"chem\">NaCl(g)</span>",
        // EN: <span class="chem">NaCl(aq)</span>
        "<span class=\"chem\">NaCl(aq)</span>",
      ],
      hints: [
        // EN: One state symbol means “dissolved in water”. It comes from the word aqueous.
        "상태 기호 가운데 하나가 ‘물에 녹아 있음’을 뜻해요. 이 기호는 aqueous(수용액의)라는 단어에서 왔어요.",
      ],
      // EN: <p>(aq) means aqueous: dissolved in water. The solution is written <span class="chem">NaCl(aq)</span>.</p>
      solution: "<p>(aq)는 aqueous, 즉 물에 녹아 있다는 뜻이에요. 이 용액은 <span class=\"chem\">NaCl(aq)</span>로 써요.</p>",
      misconception: {
        // EN (option A): (s) means solid. Once the salt has dissolved it is no longer a solid.
        "0": "(s)는 고체를 뜻해요. 소금이 녹고 나면 더 이상 고체가 아니에요.",
        // EN (option B): (l) means a pure liquid. <span class="chem">NaCl(l)</span> would be molten salt, above 800 °C. Dissolved in water is (aq).
        "1": "(l)은 순수한 액체를 뜻해요. <span class=\"chem\">NaCl(l)</span>은 800 °C보다 높은 온도에서 녹은 소금(용융 염)이에요. 물에 녹아 있으면 (aq)예요.",
        // EN (option C): (g) means gas. Dissolving does not turn salt into a gas.
        "2": "(g)는 기체를 뜻해요. 녹는다고 해서 소금이 기체가 되지는 않아요.",
      },
    },

    // ── s1-1-q003 · multi · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q003": {
      // EN: <p>Which of these changes of state <strong>release</strong> energy to the surroundings? Select all that apply.</p>
      stem: "<p>다음 상태 변화 가운데 주위로 에너지를 <strong>방출하는</strong> 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Melting
        "융해",
        // EN: Freezing
        "응고",
        // EN: Evaporation
        "증발",
        // EN: Condensation
        "액화",
        // EN: Sublimation
        "승화",
        // EN: Deposition
        "증착",
      ],
      hints: [
        // EN: Think about the direction. Do the particles end up closer together and more strongly held, or further apart?
        "변화의 방향을 생각해 보세요. 입자들이 결국 더 가까워지고 더 강하게 붙잡히나요, 아니면 더 멀어지나요?",
      ],
      // EN: <p>Energy is released when particles come closer together and attractions form between them: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>
      solution: "<p>입자들이 서로 가까워지면서 입자 사이에 인력이 생길 때 에너지가 방출돼요: 기체에서 액체(액화), 액체에서 고체(응고), 기체에서 고체(증착). 이 변화들은 발열 변화예요.</p>",
      misconception: {
        // EN (option A): Melting needs energy in. The particles must overcome some of the attractions holding them in fixed positions.
        "0": "융해에는 에너지가 들어가야 해요. 입자들을 고정된 위치에 붙잡고 있는 인력의 일부를 이겨 내야 하기 때문이에요.",
        // EN (option C): Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape from the liquid.
        "2": "증발에는 에너지가 들어가야 해요. 입자가 액체에서 빠져나가려면 이웃 입자와의 인력을 이겨 내야 하기 때문이에요.",
        // EN (option E): Sublimation (solid to gas) needs energy in to separate the particles.
        "4": "승화(고체에서 기체)에는 입자들을 떼어 놓기 위해 에너지가 들어가야 해요.",
      },
    },

    // ── s1-1-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "s1-1-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>
      stem: "<p>순수한 고체를 일정한 빠르기로 가열해요. 고체가 녹는 동안 온도가 일정하게 유지되는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?
        "온도는 입자의 평균 운동 에너지를 나타내는 척도예요. 에너지가 그 밖에 어디로 갈 수 있을까요?",
      ],
      // EN: <p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>
      answer: "<p>고체가 녹는 동안, 공급된 에너지는 입자 사이의 인력을 이겨 내는 데 쓰이고, 이것은 입자의 퍼텐셜 에너지를 증가시켜요. 입자의 평균 운동 에너지는 변하지 않으므로 온도가 일정하게 유지돼요.</p>",
      markscheme: [
        // EN: Energy is used to overcome (or weaken) the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "에너지가 입자 사이의 인력을 이겨 내는(또는 약하게 하는) 데 쓰인다. 인정: 입자의 퍼텐셜 에너지를 증가시킨다.",
        // EN: The average kinetic energy of the particles does not change (so the temperature is constant).
        "입자의 평균 운동 에너지가 변하지 않는다(그래서 온도가 일정하다).",
      ],
    },

    // ── s1-1-q011 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q011": {
      // EN: <p>Propanone and water mix completely to give a clear, colourless liquid. Propanone boils at 56 °C and water boils at 100 °C. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of mixture</th><th scope="col">Best method to separate</th></tr></thead><tbody><tr><th scope="row">A</th><td>homogeneous</td><td>filtration</td></tr><tr><th scope="row">B</th><td>homogeneous</td><td>distillation</td></tr><tr><th scope="row">C</th><td>heterogeneous</td><td>filtration</td></tr><tr><th scope="row">D</th><td>heterogeneous</td><td>distillation</td></tr></tbody></table></div>
      stem: "<p>propanone(프로판온)과 물은 완전히 섞여서 맑고 색깔 없는 액체가 돼요. propanone은 56 °C에서, 물은 100 °C에서 끓어요. 바른 행은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">혼합물의 종류</th><th scope=\"col\">가장 알맞은 분리 방법</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>균일</td><td>거름</td></tr><tr><th scope=\"row\">B</th><td>균일</td><td>증류</td></tr><tr><th scope=\"row\">C</th><td>불균일</td><td>거름</td></tr><tr><th scope=\"row\">D</th><td>불균일</td><td>증류</td></tr></tbody></table></div>",
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
        // EN: “Mix completely” and “clear” tell you whether you can see separate parts.
        "‘완전히 섞인다’와 ‘맑다’는 서로 다른 부분이 눈에 보이는지 알려 줘요.",
        // EN: Which property is different for the two liquids? The question gives you the data.
        "두 액체는 어떤 성질이 다른가요? 문제에 자료가 주어져 있어요.",
      ],
      // EN: <p>The two liquids mix completely, so the composition is the same throughout: a homogeneous mixture. They have different boiling points, so they can be separated by distillation. Propanone has the lower boiling point, so it vaporizes more easily and is collected first.</p>
      solution: "<p>두 액체가 완전히 섞이므로 어느 부분이든 조성이 같아요: 균일 혼합물이에요. 두 액체는 끓는점이 다르므로 증류로 분리할 수 있어요. propanone은 끓는점이 더 낮아서 더 쉽게 기화하므로 먼저 모여요.</p>",
      misconception: {
        // EN (option A): The mixture type is right, but filtration only removes an undissolved solid. Both liquids pass through filter paper.
        "0": "혼합물의 종류는 맞지만, 거름은 녹지 않은 고체만 걸러 낼 수 있어요. 두 액체 모두 거름종이를 통과해요.",
        // EN (option C): The liquids mix completely, so the composition is the same throughout: homogeneous. And both liquids pass through filter paper.
        "2": "두 액체가 완전히 섞이므로 어느 부분이든 조성이 같아요: 균일 혼합물이에요. 게다가 두 액체 모두 거름종이를 통과해요.",
        // EN (option D): The method is right, but the liquids mix completely. There are no separate layers, so the mixture is homogeneous.
        "3": "방법은 맞지만, 두 액체는 완전히 섞여요. 층이 따로 생기지 않으므로 균일 혼합물이에요.",
      },
    },

    // ── s1-1-q012 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q012": {
      // EN: <p>A student sets up paper chromatography to separate the dyes in an ink. Why must the solvent level in the beaker start <strong>below</strong> the baseline where the ink spot is placed?</p>
      stem: "<p>한 학생이 잉크 속 염료들을 분리하려고 종이 크로마토그래피 장치를 준비해요. 비커 속 용매의 높이가 처음에 잉크 점을 찍은 출발선보다 <strong>아래</strong>에 있어야 하는 이유는 무엇인가요?</p>",
      options: [
        // EN: So that the solvent does not evaporate before it reaches the spot
        "용매가 점에 닿기 전에 증발하지 않도록",
        // EN: So that the dyes are carried up the paper and do not dissolve into the solvent in the beaker
        "염료가 종이를 따라 위로 운반되고, 비커 속 용매에 녹아 버리지 않도록",
        // EN: So that the pencil baseline does not dissolve in the solvent
        "연필로 그은 출발선이 용매에 녹지 않도록",
        // EN: So that the dyes react with the paper before the solvent reaches them
        "용매가 닿기 전에 염료가 종이와 반응하도록",
      ],
      hints: [
        // EN: Imagine the spot starting underneath the surface of the solvent. Where would the dyes go?
        "점이 처음부터 용매 표면 아래에 있다고 상상해 보세요. 염료는 어디로 갈까요?",
      ],
      // EN: <p>If the spot starts below the solvent surface, the dyes dissolve straight into the solvent in the beaker. With the solvent level below the baseline, the solvent rises up the paper, reaches the spot and carries the dyes upward, each by a different distance.</p>
      solution: "<p>점이 처음부터 용매 표면 아래에 있으면 염료가 비커 속 용매에 바로 녹아 버려요. 용매 높이가 출발선보다 아래에 있으면, 용매가 종이를 따라 올라가 점에 닿은 뒤 염료를 위로 운반해요. 염료마다 이동하는 거리가 달라요.</p>",
      misconception: {
        // EN (option A): Evaporation is reduced by putting a lid on the beaker. It is not the reason for the solvent level.
        "0": "증발은 비커에 뚜껑을 덮어서 줄여요. 용매 높이를 정하는 이유는 아니에요.",
        // EN (option C): Pencil does not dissolve in the solvent at any level. That is why the baseline is drawn in pencil and not in ink.
        "2": "연필은 용매 높이가 어떻든 용매에 녹지 않아요. 그래서 출발선을 잉크가 아니라 연필로 그어요.",
        // EN (option D): Chromatography is a physical separation. The dyes do not react with the paper.
        "3": "크로마토그래피는 물리적 분리 방법이에요. 염료는 종이와 반응하지 않아요.",
      },
    },

    // ── s1-1-q013 · short · exam · SL · Structure 1.1.1 · 2 marks
    "s1-1-q013": {
      // EN: <p>Distinguish between an element and a compound.</p>
      stem: "<p>원소와 화합물을 구별하시오 (distinguish).</p>",
      hints: [
        // EN: “Distinguish” asks for the difference. Write one clear statement about each, so the two can be compared.
        "‘구별하시오 (distinguish)’는 차이를 묻는 거예요. 둘을 비교할 수 있도록 각각에 대해 분명한 문장을 하나씩 쓰세요.",
      ],
      // EN: <p>An element contains only one type of atom and cannot be chemically broken down into simpler substances. A compound contains atoms of two or more different elements chemically bonded together in a fixed ratio.</p>
      answer: "<p>원소에는 한 종류의 원자만 들어 있고, 화학적인 방법으로 더 간단한 물질로 분해할 수 없어요. 화합물에는 서로 다른 두 가지 이상의 원소의 원자들이 일정한 비율로 화학 결합을 하고 있어요.</p>",
      markscheme: [
        // EN: Element: contains only one type of atom. Accept: cannot be chemically broken down into simpler substances.
        "원소: 한 종류의 원자만 들어 있다. 인정: 화학적인 방법으로 더 간단한 물질로 분해할 수 없다.",
        // EN: Compound: atoms of (two or more) different elements chemically bonded/combined. Accept: can be broken down into simpler substances by chemical means.
        "화합물: 서로 다른 (두 가지 이상의) 원소의 원자들이 화학 결합/결합되어 있다. 인정: 화학적인 방법으로 더 간단한 물질로 분해할 수 있다.",
      ],
    },

    // ── s1-1-q014 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q014": {
      // EN: <p>In recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent. What happens if much more hot solvent than this is used?</p>
      stem: "<p>재결정에서는 불순한 고체를 뜨거운 용매 <strong>최소</strong> 부피에 녹여요. 이보다 훨씬 많은 뜨거운 용매를 쓰면 어떻게 되나요?</p>",
      options: [
        // EN: Fewer crystals form on cooling, because more of the product stays dissolved
        "식힐 때 결정이 더 적게 생긴다. 생성물이 더 많이 녹은 채로 남기 때문이다",
        // EN: The insoluble impurities dissolve and can no longer be filtered off
        "녹지 않는 불순물이 녹아서 더 이상 걸러 낼 수 없다",
        // EN: The crystals form faster on cooling, so they are less pure
        "식힐 때 결정이 더 빨리 생기므로 순도가 낮아진다",
        // EN: The product reacts with the extra solvent
        "생성물이 여분의 용매와 반응한다",
      ],
      hints: [
        // EN: Even cold solvent dissolves a little of the product.
        "차가운 용매도 생성물을 조금은 녹여요.",
        // EN: More solvent can hold more dissolved product after cooling. What does that do to the mass of crystals?
        "용매가 많을수록 식힌 뒤에도 생성물이 더 많이 녹아 있을 수 있어요. 그러면 결정의 질량은 어떻게 될까요?",
      ],
      // EN: <p>Some product always stays dissolved in the cold solvent. The larger the volume of solvent, the more product stays in solution, so fewer crystals form and the yield is lower. Using the minimum volume of hot solvent gives a solution that is close to saturated, so most of the product crystallizes on cooling.</p>
      solution: "<p>생성물의 일부는 차가운 용매에도 항상 녹은 채로 남아요. 용매의 부피가 클수록 용액에 남는 생성물이 많아지므로, 결정이 더 적게 생기고 수득량이 줄어요. 뜨거운 용매를 최소 부피만 쓰면 포화에 가까운 용액이 되므로, 식힐 때 생성물 대부분이 결정이 돼요.</p>",
      misconception: {
        // EN (option B): Insoluble impurities do not dissolve in the solvent, however much is used. They are removed by filtering the hot solution.
        "1": "녹지 않는 불순물은 용매를 아무리 많이 써도 녹지 않아요. 이런 불순물은 뜨거운 용액을 걸러서 없애요.",
        // EN (option C): A more dilute solution does not crystallize faster. It may not crystallize at all.
        "2": "더 묽은 용액이 더 빨리 결정이 되지는 않아요. 아예 결정이 생기지 않을 수도 있어요.",
        // EN (option D): Recrystallization is a physical process. The solvent is chosen so that it does not react with the product.
        "3": "재결정은 물리적 과정이에요. 용매는 생성물과 반응하지 않는 것으로 골라요.",
      },
    },

    // ── s1-1-q015 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q015": {
      // EN: <p>A pure substance X is heated steadily from 20 °C. Its temperature rises to 80 °C and stays there for four minutes. It then rises to 218 °C and stays there for several minutes before rising again. What is present at 150 °C?</p>
      stem: "<p>순물질 X를 20 °C에서부터 일정하게 가열해요. 온도는 80 °C까지 올라간 뒤 4분 동안 그대로 유지돼요. 그다음 218 °C까지 올라가 몇 분 동안 유지되었다가 다시 올라가요. 150 °C에서는 무엇이 있나요?</p>",
      options: [
        // EN: Solid only
        "고체만",
        // EN: Solid and liquid together
        "고체와 액체가 함께",
        // EN: Liquid only
        "액체만",
        // EN: Gas only
        "기체만",
      ],
      hints: [
        // EN: A flat part of a heating curve is a change of state. There are two of them here.
        "가열 곡선에서 평평한 부분은 상태 변화예요. 여기에는 평평한 부분이 2개 있어요.",
        // EN: The melting point is 80 °C and the boiling point is 218 °C. Where does 150 °C sit?
        "녹는점은 80 °C이고 끓는점은 218 °C예요. 150 °C는 어디에 있나요?",
      ],
      // EN: <p>The temperature stays constant at 80 °C (melting) and at 218 °C (boiling). 150 °C is above the melting point and below the boiling point, on a sloping part of the curve, so X is a liquid only.</p>
      solution: "<p>온도는 80 °C(융해)와 218 °C(끓음)에서 일정하게 유지돼요. 150 °C는 녹는점보다 높고 끓는점보다 낮으며, 곡선의 기울어진 부분에 있으므로 X는 액체로만 있어요.</p>",
      misconception: {
        // EN (option A): X is a solid only below its melting point. The first flat part, at 80 °C, is the melting point.
        "0": "X는 녹는점보다 낮을 때만 고체로만 있어요. 첫 번째 평평한 부분인 80 °C가 녹는점이에요.",
        // EN (option B): Two states are present together only on a flat part of the curve. At 150 °C the temperature is rising.
        "1": "두 상태가 함께 있는 것은 곡선의 평평한 부분에서만이에요. 150 °C에서는 온도가 올라가고 있어요.",
        // EN (option D): X is a gas only above its boiling point. The second flat part, at 218 °C, is the boiling point.
        "3": "X는 끓는점보다 높을 때만 기체로만 있어요. 두 번째 평평한 부분인 218 °C가 끓는점이에요.",
      },
    },

    // ── s1-1-q016 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q016": {
      // EN: <p>In an experiment, a solution warms from 18.5 °C to 46.0 °C. What is the temperature <strong>change</strong> in kelvin?</p>
      stem: "<p>어떤 실험에서 용액의 온도가 18.5 °C에서 46.0 °C로 올라가요. 온도 <strong>변화</strong>는 몇 켈빈인가요?</p>",
      hints: [
        // EN: This is a change, not a single temperature reading.
        "이것은 변화이지, 온도를 한 번 잰 값이 아니에요.",
        // EN: One kelvin is the same size as one degree Celsius. Change = final − initial.
        "1 켈빈은 섭씨 1도와 크기가 같아요. 변화 = 나중 − 처음.",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>Check the long way: (46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K. The 273.15 cancels. Adding 273.15 to the change (to get 300.65) is a common error.</p>
      solution: "<div class=\"worked__math\">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>먼 길로 확인해 봐요: (46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K. 273.15는 서로 지워져요. 변화에 273.15를 더하는 것(그러면 300.65가 돼요)은 흔한 실수예요.</p>",
    },

    // ── s1-1-q017 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q017": {
      // EN: <p>Beaker 1 contains 50 g of water at 60 °C. Beaker 2 contains 200 g of water at 60 °C. Which statement about the average kinetic energy of the water molecules is correct?</p>
      stem: "<p>비커 1에는 60 °C의 물 50 g이, 비커 2에는 60 °C의 물 200 g이 들어 있어요. 물 분자의 평균 운동 에너지에 대한 설명으로 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: It is greater in beaker 1, because there are fewer molecules to share the energy
        "비커 1에서 더 크다. 에너지를 나누어 가질 분자가 더 적기 때문이다",
        // EN: It is greater in beaker 2, because there are more molecules
        "비커 2에서 더 크다. 분자가 더 많기 때문이다",
        // EN: It is the same in both beakers
        "두 비커에서 같다",
        // EN: It cannot be compared without knowing the volumes
        "부피를 모르면 비교할 수 없다",
      ],
      hints: [
        // EN: What does temperature measure? Compare the two temperatures.
        "온도는 무엇을 나타내나요? 두 온도를 비교해 보세요.",
      ],
      // EN: <p>Temperature is a measure of the average kinetic energy of the particles. Both beakers are at 60 °C (333.15 K), so the average kinetic energy of the molecules is the same in both. Beaker 2 has more molecules, so its total energy is greater, but the average is not.</p>
      solution: "<p>온도는 입자의 평균 운동 에너지를 나타내는 척도예요. 두 비커 모두 60 °C(333.15 K)이므로, 분자의 평균 운동 에너지는 두 비커에서 같아요. 비커 2에는 분자가 더 많아서 전체 에너지는 더 크지만, 평균은 그렇지 않아요.</p>",
      misconception: {
        // EN (option A): Temperature already measures the average per particle. The number of particles sharing the energy does not matter.
        "0": "온도는 이미 입자 하나당 평균을 나타내요. 에너지를 나누어 가지는 입자의 수는 상관없어요.",
        // EN (option B): Beaker 2 has more energy in total, but the question asks about the average per molecule. That depends only on temperature.
        "1": "비커 2의 전체 에너지는 더 크지만, 문제는 분자 하나당 평균을 묻고 있어요. 평균은 온도에만 달려 있어요.",
        // EN (option D): Volume is not needed. The temperature tells you the average kinetic energy.
        "3": "부피는 필요 없어요. 온도를 알면 평균 운동 에너지를 알 수 있어요.",
      },
    },

    // ── s1-1-q018 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q018": {
      // EN: <p>Solid calcium carbonate reacts with dilute hydrochloric acid. The products are calcium chloride solution, water and carbon dioxide gas. Which equation has the correct state symbols?</p>
      stem: "<p>고체 탄산 칼슘이 묽은 염산과 반응해요. 생성물은 염화 칼슘 용액, 물, 이산화 탄소 기체예요. 상태 기호가 바른 반응식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">CaCO3(s) + 2HCl(l) -> CaCl2(aq) + H2O(l) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(s) + 2HCl(l) -> CaCl2(aq) + H2O(l) + CO2(g)</span>",
        // EN: <span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(aq) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(aq) + CO2(g)</span>",
        // EN: <span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span>",
        // EN: <span class="chem">CaCO3(aq) + 2HCl(aq) -> CaCl2(s) + H2O(l) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(aq) + 2HCl(aq) -> CaCl2(s) + H2O(l) + CO2(g)</span>",
      ],
      hints: [
        // EN: Translate each phrase: “solid”, “dilute … acid”, “solution”, “gas”.
        "각 표현을 상태 기호로 바꿔 보세요: ‘고체’, ‘묽은 … 산’, ‘용액’, ‘기체’.",
        // EN: Water is written <span class="chem">H2O(l)</span>.
        "물은 <span class=\"chem\">H2O(l)</span>로 써요.",
      ],
      // EN: <p>Solid calcium carbonate is (s). Dilute hydrochloric acid and calcium chloride solution are dissolved in water, so both are (aq). Water is a pure liquid, (l). Carbon dioxide is a gas, (g).</p><p><span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>
      solution: "<p>고체 탄산 칼슘은 (s)예요. 묽은 염산과 염화 칼슘 용액은 물에 녹아 있으므로 둘 다 (aq)예요. 물은 순수한 액체이므로 (l)이에요. 이산화 탄소는 기체이므로 (g)예요.</p><p><span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>",
      misconception: {
        // EN (option A): Dilute hydrochloric acid is hydrogen chloride dissolved in water, so it is (aq). (l) would mean pure liquid hydrogen chloride.
        "0": "묽은 염산은 염화 수소가 물에 녹은 것이므로 (aq)예요. (l)이라면 순수한 액체 염화 수소를 뜻해요.",
        // EN (option B): Water is the solvent. It is a pure liquid, (l). It cannot be “dissolved in water”.
        "1": "물은 용매예요. 물은 순수한 액체이므로 (l)이에요. 물이 ‘물에 녹아 있을’ 수는 없어요.",
        // EN (option D): The question says the calcium carbonate is solid, (s), and the calcium chloride is a solution, (aq).
        "3": "문제에서 탄산 칼슘은 고체 (s)이고, 염화 칼슘은 용액 (aq)이라고 했어요.",
      },
    },

    // ── s1-1-q019 · short · exam · SL · Structure 1.1.2 · 2 marks
    "s1-1-q019": {
      // EN: <p>The air in a sealed syringe can easily be squeezed into a smaller volume. Water in the same syringe cannot. Explain this difference using the kinetic molecular theory.</p>
      stem: "<p>밀폐된 주사기 속 공기는 눌러서 쉽게 부피를 줄일 수 있어요. 같은 주사기에 든 물은 그렇게 할 수 없어요. 분자 운동론을 이용하여 이 차이를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare the spacing of the particles in a gas and in a liquid.
        "기체와 액체에서 입자 사이의 거리를 비교해 보세요.",
      ],
      // EN: <p>In a gas the particles are far apart, with a lot of empty space between them, so they can be pushed closer together. In a liquid the particles are already close together (touching), so there is very little space to push them into.</p>
      answer: "<p>기체에서는 입자들이 서로 멀리 떨어져 있고 입자 사이에 빈 공간이 많아서, 입자들을 더 가까이 밀어 넣을 수 있어요. 액체에서는 입자들이 이미 서로 가까이 있어서(맞닿아 있어서), 밀어 넣을 공간이 거의 없어요.</p>",
      markscheme: [
        // EN: Gas: particles are far apart / there is a lot of empty space between particles (so they can be pushed closer together).
        "기체: 입자들이 서로 멀리 떨어져 있다 / 입자 사이에 빈 공간이 많다(그래서 더 가까이 밀어 넣을 수 있다).",
        // EN: Liquid: particles are (already) close together / touching / there is very little space between particles.
        "액체: 입자들이 (이미) 서로 가까이 있다 / 맞닿아 있다 / 입자 사이에 공간이 거의 없다.",
      ],
    },

    // ── s1-1-q020 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q020": {
      // EN: <p>Mercury melts at −38.83 °C. What is this temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "<p>수은은 −38.83 °C에서 녹아요. 이 온도는 몇 켈빈인가요? 소수점 아래 2자리까지 답하세요.</p>",
      hints: [
        // EN: Keep the minus sign when you substitute.
        "값을 대입할 때 마이너스 부호를 빼먹지 마세요.",
        // EN: <span class="mono">T(K) = (−38.83) + 273.15</span>
        "<span class=\"mono\">T(K) = (−38.83) + 273.15</span>",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>Both values have two decimal places, so the answer keeps two. A common slip is to lose the minus sign, which gives 311.98 K.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>두 값 모두 소수점 아래 2자리이므로 답도 2자리로 나타내요. 마이너스 부호를 빼먹는 실수를 자주 하는데, 그러면 311.98 K가 나와요.</p>",
    },

    // ── s1-1-q021 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q021": {
      // EN: <p>When solid iodine is warmed gently, it turns directly into a purple gas: <span class="chem">I2(s) -> I2(g)</span>. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Name of the change</th><th scope="col">Energy</th></tr></thead><tbody><tr><th scope="row">A</th><td>sublimation</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">B</th><td>sublimation</td><td>released to the surroundings</td></tr><tr><th scope="row">C</th><td>deposition</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">D</th><td>evaporation</td><td>absorbed from the surroundings</td></tr></tbody></table></div>
      stem: "<p>고체 아이오딘을 살짝 가열하면 바로 보라색 기체로 변해요: <span class=\"chem\">I2(s) -> I2(g)</span>. 바른 행은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">변화의 이름</th><th scope=\"col\">에너지</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>승화</td><td>주위에서 흡수함</td></tr><tr><th scope=\"row\">B</th><td>승화</td><td>주위로 방출함</td></tr><tr><th scope=\"row\">C</th><td>증착</td><td>주위에서 흡수함</td></tr><tr><th scope=\"row\">D</th><td>증발</td><td>주위에서 흡수함</td></tr></tbody></table></div>",
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
        // EN: Read the state symbols: (s) → (g).
        "상태 기호를 읽어 보세요: (s) → (g).",
        // EN: Do the particles end up further apart or closer together?
        "입자들이 결국 더 멀어지나요, 더 가까워지나요?",
      ],
      // EN: <p>Solid → gas is sublimation. The particles must overcome the attractions between them to separate, which needs energy, so energy is absorbed from the surroundings (endothermic).</p>
      solution: "<p>고체 → 기체는 승화예요. 입자들이 떨어지려면 입자 사이의 인력을 이겨 내야 하고, 여기에는 에너지가 필요해요. 그래서 주위에서 에너지를 흡수해요(흡열).</p>",
      misconception: {
        // EN (option B): The name is right, but separating the particles of a solid needs energy in. Sublimation is endothermic.
        "1": "이름은 맞지만, 고체의 입자들을 떼어 놓으려면 에너지가 들어가야 해요. 승화는 흡열 변화예요.",
        // EN (option C): Deposition is the reverse change, gas to solid.
        "2": "증착은 반대 방향의 변화, 즉 기체에서 고체로 가는 변화예요.",
        // EN (option D): Evaporation starts from a liquid. The state symbols show the iodine starts as a solid.
        "3": "증발은 액체에서 시작해요. 상태 기호를 보면 아이오딘은 처음에 고체예요.",
      },
    },

    // ── s1-1-q029 · short · exam · SL · Structure 1.1.1 · 4 marks
    "s1-1-q029": {
      // EN: <p>A dry mixture contains iron filings, sand and salt (sodium chloride). Iron is attracted to a magnet. Sand and salt are not. Outline how to obtain a dry sample of each of the three solids.</p>
      stem: "<p>철가루, 모래, 소금(염화 나트륨)이 섞인 건조한 혼합물이 있어요. 철은 자석에 끌려가요. 모래와 소금은 끌려가지 않아요. 세 가지 고체를 각각 건조한 시료로 얻는 방법을 간단히 설명하시오 (outline).</p>",
      hints: [
        // EN: Find a physical property that is different for each solid. The question gives you one of them.
        "고체마다 다른 물리적 성질을 찾아보세요. 그중 하나는 문제에 나와 있어요.",
        // EN: After filtering, neither product is finished. One is wet and one is still dissolved.
        "거른 다음에도 두 생성물 모두 아직 완성되지 않았어요. 하나는 젖어 있고, 하나는 아직 녹아 있어요.",
      ],
      // EN: <p>Use a magnet to remove the iron filings. Add water to the sand and salt and stir, so that the salt dissolves. Filter: the sand stays on the filter paper as the residue. Rinse the sand with a little water and leave it to dry. Heat the filtrate to evaporate the water, leave it to crystallize, and dry the salt crystals.</p>
      answer: "<p>자석으로 철가루를 골라내요. 모래와 소금에 물을 넣고 저어서 소금을 녹여요. 걸러요: 모래는 거름 찌꺼기로 거름종이 위에 남아요. 모래를 물로 조금 헹군 뒤 말려요. 거른 액을 가열해서 물을 증발시키고, 결정이 생기게 둔 뒤 소금 결정을 말려요.</p>",
      markscheme: [
        // EN: Use a magnet to remove the iron (filings).
        "자석으로 철(가루)을 골라낸다.",
        // EN: Add water and stir / dissolve the salt.
        "물을 넣고 젓는다 / 소금을 녹인다.",
        // EN: Filter (to remove the sand): sand is the residue / salt solution is the filtrate.
        "거른다(모래를 없애기 위해): 모래는 거름 찌꺼기 / 소금 용액은 거른 액.",
        // EN: Rinse and dry the sand / the residue.
        "모래 / 거름 찌꺼기를 헹구고 말린다.",
        // EN: Evaporate the water from the filtrate / heat the filtrate and leave it to crystallize (to obtain the salt).
        "거른 액에서 물을 증발시킨다 / 거른 액을 가열하고 결정이 생기게 둔다(소금을 얻기 위해).",
      ],
    },

    // ── s1-1-q030 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q030": {
      // EN: <p>Evaporation and boiling are both types of vaporization. Which statement is correct?</p>
      stem: "<p>증발과 끓음은 둘 다 기화의 한 종류예요. 옳은 설명은 어느 것인가요?</p>",
      options: [
        // EN: Evaporation happens only at the boiling point
        "증발은 끓는점에서만 일어난다",
        // EN: Boiling happens only at the surface of the liquid
        "끓음은 액체 표면에서만 일어난다",
        // EN: Evaporation happens at the surface of the liquid, at temperatures below the boiling point
        "증발은 끓는점보다 낮은 온도에서 액체 표면에서 일어난다",
        // EN: Evaporation releases energy to the surroundings and boiling absorbs energy
        "증발은 주위로 에너지를 방출하고, 끓음은 에너지를 흡수한다",
      ],
      hints: [
        // EN: Think of a puddle drying up and a kettle boiling. Where does the vapour form in each one?
        "물웅덩이가 마르는 것과 주전자 물이 끓는 것을 떠올려 보세요. 각각 증기는 어디에서 생기나요?",
        // EN: Both changes are liquid → gas.
        "두 변화 모두 액체 → 기체예요.",
      ],
      // EN: <p>Evaporation takes place at the surface of a liquid, at temperatures below the boiling point. Boiling takes place at the boiling point, with bubbles of vapour forming throughout the liquid. Both are vaporization (liquid → gas), and both absorb energy.</p>
      solution: "<p>증발은 끓는점보다 낮은 온도에서 액체 표면에서 일어나요. 끓음은 끓는점에서 일어나고, 액체 전체에서 증기 거품이 생겨요. 둘 다 기화(액체 → 기체)이고, 둘 다 에너지를 흡수해요.</p>",
      misconception: {
        // EN (option A): That describes boiling. A puddle evaporates on a cool day, far below 100 °C.
        "0": "끓음에 대한 설명이에요. 물웅덩이는 100 °C보다 훨씬 낮은 서늘한 날에도 증발해요.",
        // EN (option B): That describes evaporation. In boiling, bubbles of vapour form all through the liquid.
        "1": "증발에 대한 설명이에요. 끓을 때는 액체 전체에서 증기 거품이 생겨요.",
        // EN (option D): Both are liquid → gas, so both absorb energy. The particles must overcome the attractions to their neighbours.
        "3": "둘 다 액체 → 기체이므로 둘 다 에너지를 흡수해요. 입자들이 이웃 입자와의 인력을 이겨 내야 하기 때문이에요.",
      },
    },

    // ── s1-1-q027 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q027": {
      // EN: <p>Three samples of nitrogen gas are at different temperatures: X is at 150 K, Y is at −150 °C and Z is at 150 °C. Which list puts the samples in order of the average kinetic energy of their molecules, <strong>lowest first</strong>?</p>
      stem: "<p>질소 기체 시료 3개의 온도가 서로 달라요: X는 150 K, Y는 −150 °C, Z는 150 °C예요. 분자의 평균 운동 에너지가 <strong>낮은 것부터</strong> 순서대로 나열한 것은 어느 것인가요?</p>",
      options: [
        // EN: X, Y, Z
        "X, Y, Z",
        // EN: Y, X, Z
        "Y, X, Z",
        // EN: Y, Z, X
        "Y, Z, X",
        // EN: They are all the same
        "모두 같다",
      ],
      hints: [
        // EN: Temperature is a measure of average kinetic energy, so the coldest sample has the lowest average kinetic energy.
        "온도는 평균 운동 에너지의 척도이므로, 가장 차가운 시료의 평균 운동 에너지가 가장 낮아요.",
        // EN: Put all three temperatures on the same scale before you compare them.
        "비교하기 전에 세 온도를 모두 같은 눈금으로 나타내세요.",
      ],
      // EN: <div class="worked__math">X: 150 K</div><div class="worked__math">Y: (−150) + 273.15 = 123.15 K</div><div class="worked__math">Z: 150 + 273.15 = 423.15 K</div><p>Temperature is a measure of the average kinetic energy of the particles. The order of temperature, lowest first, is Y, X, Z, so that is also the order of average kinetic energy.</p>
      solution: "<div class=\"worked__math\">X: 150 K</div><div class=\"worked__math\">Y: (−150) + 273.15 = 123.15 K</div><div class=\"worked__math\">Z: 150 + 273.15 = 423.15 K</div><p>온도는 입자의 평균 운동 에너지를 나타내는 척도예요. 온도가 낮은 것부터 나열하면 Y, X, Z이므로, 평균 운동 에너지의 순서도 이와 같아요.</p>",
      misconception: {
        // EN (option A): You may have treated −150 °C as larger than 150 K. Convert first: −150 °C = 123.15 K, which is colder than 150 K.
        "0": "−150 °C를 150 K보다 크다고 생각했을 수도 있어요. 먼저 바꿔 보세요: −150 °C = 123.15 K이고, 이것은 150 K보다 차가워요.",
        // EN (option C): X is at 150 K, which is −123.15 °C. That is much colder than Z at 150 °C, so X cannot have the highest average kinetic energy.
        "2": "X는 150 K, 즉 −123.15 °C예요. 이것은 150 °C인 Z보다 훨씬 차가우므로, X의 평균 운동 에너지가 가장 높을 수는 없어요.",
        // EN (option D): The number 150 appears three times, but the units and signs differ. These are three different temperatures.
        "3": "숫자 150이 세 번 나오지만, 단위와 부호가 달라요. 이 셋은 서로 다른 온도예요.",
      },
    },

    // ── s1-1-q028 · numeric · challenge · SL · Structure 1.1.3 · 2 marks
    "s1-1-q028": {
      // EN: <p>A liquid starts at −12.48 °C. It is warmed until its temperature has risen by 85.00 K. What is its final temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "<p>어떤 액체의 처음 온도는 −12.48 °C예요. 이 액체를 데워서 온도가 85.00 K만큼 올라갔어요. 나중 온도는 몇 켈빈인가요? 소수점 아래 2자리까지 답하세요.</p>",
      hints: [
        // EN: There are two different things here: a single temperature reading and a temperature change. Which one needs 273.15?
        "여기에는 서로 다른 두 가지가 있어요: 한 번 잰 온도 값과 온도 변화예요. 273.15가 필요한 것은 어느 쪽인가요?",
        // EN: Convert −12.48 °C to kelvin. Then add the rise. A rise of 85.00 K is the same as a rise of 85.00 °C.
        "−12.48 °C를 켈빈으로 바꾸세요. 그다음 올라간 만큼을 더하세요. 85.00 K 상승은 85.00 °C 상승과 같아요.",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class="worked__math"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>Only the starting reading is converted. Adding 273.15 to the rise as well gives 618.82 K, which is wrong. Forgetting to convert at all gives 72.52, which is the final temperature in °C, not in K.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class=\"worked__math\"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>처음 온도 값만 바꿔요. 상승한 값에도 273.15를 더하면 618.82 K가 나오는데, 이것은 틀린 답이에요. 아예 바꾸지 않으면 72.52가 나오는데, 이것은 K가 아니라 °C로 나타낸 나중 온도예요.</p>",
    },

    // ── s1-1-q024 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q024": {
      // EN: <p>The table gives the melting and boiling points of four substances. Which substance is a <strong>liquid</strong> at −50 °C?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num">Melting point / K</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">63</td><td class="num">77</td></tr><tr><th scope="row">B</th><td class="num">159</td><td class="num">352</td></tr><tr><th scope="row">C</th><td class="num">234</td><td class="num">630</td></tr><tr><th scope="row">D</th><td class="num">273</td><td class="num">373</td></tr></tbody></table></div>
      stem: "<p>표는 네 물질의 녹는점과 끓는점을 나타내요. −50 °C에서 <strong>액체</strong>인 물질은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\" class=\"num\">녹는점 / K</th><th scope=\"col\" class=\"num\">끓는점 / K</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">63</td><td class=\"num\">77</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">159</td><td class=\"num\">352</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">234</td><td class=\"num\">630</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">273</td><td class=\"num\">373</td></tr></tbody></table></div>",
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
        // EN: Put everything in the same unit first.
        "먼저 모두 같은 단위로 나타내세요.",
        // EN: −50 °C = 223.15 K. A liquid is above its melting point and below its boiling point.
        "−50 °C = 223.15 K. 액체는 녹는점보다 높고 끓는점보다 낮은 온도에 있어요.",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>A substance is a liquid when the temperature is between its melting point and its boiling point. Only B fits: 159 K &lt; 223.15 K &lt; 352 K. A is a gas. C and D are solids.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>온도가 녹는점과 끓는점 사이에 있을 때 물질은 액체예요. B만 맞아요: 159 K &lt; 223.15 K &lt; 352 K. A는 기체예요. C와 D는 고체예요.</p>",
      misconception: {
        // EN (option A): −50 °C is 223.15 K. That is above the boiling point of A (77 K), so A is a gas.
        "0": "−50 °C는 223.15 K예요. 이것은 A의 끓는점(77 K)보다 높으므로 A는 기체예요.",
        // EN (option C): −50 °C is 223.15 K. That is below the melting point of C (234 K), so C is still a solid.
        "2": "−50 °C는 223.15 K예요. 이것은 C의 녹는점(234 K)보다 낮으므로 C는 아직 고체예요.",
        // EN (option D): −50 °C is 223.15 K. That is below the melting point of D (273 K), so D is a solid.
        "3": "−50 °C는 223.15 K예요. 이것은 D의 녹는점(273 K)보다 낮으므로 D는 고체예요.",
      },
    },

    // ── s1-1-q025 · short · challenge · SL · Structure 1.1.3 · 3 marks
    "s1-1-q025": {
      // EN: <p>Steam at 100 °C causes a more serious burn than the same mass of liquid water at 100 °C. Explain this, using ideas about particles and changes of state.</p>
      stem: "<p>100 °C의 수증기는 같은 질량의 100 °C 액체 물보다 더 심한 화상을 입혀요. 입자와 상태 변화에 대한 생각을 이용하여 그 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: What is the same for the steam and the water? What is different?
        "수증기와 물에서 같은 것은 무엇인가요? 다른 것은 무엇인가요?",
        // EN: What happens to steam when it touches something cooler than 100 °C? Is energy absorbed or released?
        "수증기가 100 °C보다 차가운 것에 닿으면 어떻게 되나요? 에너지를 흡수하나요, 방출하나요?",
      ],
      // EN: <p>The steam and the water are at the same temperature, so their particles have the same average kinetic energy. But when steam touches cooler skin it condenses. Condensation releases energy, because forces of attraction form between the particles as they come close together. The liquid water formed then cools from 100 °C, releasing the same energy as the hot water would. So steam transfers more energy to the skin in total.</p>
      answer: "<p>수증기와 물은 온도가 같으므로 입자의 평균 운동 에너지가 같아요. 하지만 수증기가 더 차가운 피부에 닿으면 액화해요. 입자들이 서로 가까워지면서 입자 사이에 인력이 생기므로, 액화할 때 에너지가 방출돼요. 그다음 생긴 액체 물이 100 °C에서부터 식으면서, 뜨거운 물이 내놓는 것과 같은 에너지를 방출해요. 그래서 수증기가 피부에 전달하는 에너지가 전체적으로 더 많아요.</p>",
      markscheme: [
        // EN: Same temperature, so the particles have the same average kinetic energy. Accept: the difference is not due to temperature.
        "온도가 같으므로 입자의 평균 운동 에너지가 같다. 인정: 차이는 온도 때문이 아니다.",
        // EN: Steam condenses on the skin, and condensation releases energy / is exothermic.
        "수증기가 피부에서 액화하고, 액화는 에너지를 방출한다 / 발열 변화이다.",
        // EN: Energy is released because forces of attraction form between the particles (as they come closer together). Accept: steam also then cools as liquid water, so more energy is transferred in total.
        "입자 사이에 인력이 생기므로(입자들이 서로 가까워지면서) 에너지가 방출된다. 인정: 수증기는 그다음 액체 물로서 식기도 하므로, 전달되는 에너지가 전체적으로 더 많다.",
      ],
    },

    // ── s1-1-q026 · multi · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q026": {
      // EN: <p>A pure liquid is cooled steadily in a freezer. For several minutes it is freezing: liquid and solid are both present. Which statements are correct <strong>during this time</strong>? Select all that apply.</p>
      stem: "<p>순수한 액체를 냉동실에서 일정하게 냉각해요. 몇 분 동안 액체가 응고하고 있어서 액체와 고체가 함께 있어요. <strong>이 시간 동안</strong> 옳은 설명은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: The temperature of the substance stays constant.
        "물질의 온도가 일정하게 유지된다.",
        // EN: The average kinetic energy of the particles is decreasing.
        "입자의 평균 운동 에너지가 줄어들고 있다.",
        // EN: Energy is being released to the surroundings.
        "에너지가 주위로 방출되고 있다.",
        // EN: The particles stop moving as they join the solid.
        "입자들이 고체에 붙으면서 움직임을 멈춘다.",
        // EN: Forces of attraction hold more and more particles in fixed positions.
        "인력이 점점 더 많은 입자를 고정된 위치에 붙잡아 둔다.",
      ],
      hints: [
        // EN: Freezing is a change of state. What does a cooling curve look like during a change of state?
        "응고는 상태 변화예요. 상태 변화가 일어나는 동안 냉각 곡선은 어떤 모양인가요?",
        // EN: Energy keeps leaving the substance, but the temperature is not falling. Which kind of energy is changing?
        "에너지는 계속 물질에서 빠져나가지만, 온도는 내려가지 않아요. 어떤 종류의 에너지가 변하고 있을까요?",
      ],
      // EN: <p>During freezing the temperature stays constant, so the average kinetic energy of the particles does not change. Energy is still released to the colder surroundings: it comes from the decrease in potential energy as attractions hold the particles in fixed positions. The particles in the solid continue to vibrate.</p>
      solution: "<p>응고하는 동안 온도가 일정하게 유지되므로 입자의 평균 운동 에너지는 변하지 않아요. 그래도 더 차가운 주위로 에너지는 계속 방출돼요: 인력이 입자들을 고정된 위치에 붙잡으면서 퍼텐셜 에너지가 줄어들고, 그만큼의 에너지가 나오는 거예요. 고체 속 입자들은 계속 진동해요.</p>",
      misconception: {
        // EN (option B): The temperature is constant during freezing, so the average kinetic energy is constant too. The energy that leaves comes from the potential energy of the particles.
        "1": "응고하는 동안 온도가 일정하므로 평균 운동 에너지도 일정해요. 빠져나가는 에너지는 입자의 퍼텐셜 에너지에서 나와요.",
        // EN (option D): Particles in a solid still vibrate about their fixed positions. They do not stop moving.
        "3": "고체 속 입자들도 고정된 위치에서 계속 진동해요. 움직임을 멈추지 않아요.",
      },
    },

  }
});
