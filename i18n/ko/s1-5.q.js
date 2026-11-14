/* s1-5.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-5.q', {
  questions: {

    // ── s1-5-q001 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q001": {
      // EN: <p>Which statement is an assumption of the ideal gas model?</p>
      stem: "<p>이상 기체 모형의 가정은 어느 것인가요?</p>",
      options: [
        // EN: The particles attract each other weakly.
        "입자들이 서로 약하게 끌어당긴다.",
        // EN: A small amount of kinetic energy is lost in each collision.
        "충돌할 때마다 운동 에너지가 조금씩 없어진다.",
        // EN: The particles have negligible volume.
        "입자의 부피는 무시할 수 있다.",
        // EN: The particles have negligible mass.
        "입자의 질량은 무시할 수 있다.",
      ],
      hints: [
        // EN: There are four assumptions: moving particles, negligible particle volume, no intermolecular forces, elastic collisions.
        "가정은 4가지예요: 움직이는 입자, 무시할 수 있는 입자 부피, 분자 간 힘 없음, 탄성 충돌.",
      ],
      // EN: <p>The ideal gas model assumes the particles themselves take up a negligible part of the volume of the container. It also assumes moving particles, no intermolecular forces and elastic collisions.</p>
      solution: "<p>이상 기체 모형은 입자 자체가 차지하는 부피가 용기 부피에 비해 무시할 만큼 작다고 가정해요. 또 입자가 움직이고, 분자 간 힘이 없고, 충돌이 탄성 충돌이라고 가정해요.</p>",
      misconception: {
        // EN (option A): The model assumes there are no intermolecular forces at all, not weak ones. Weak attractions describe a real gas.
        "0": "이 모형은 분자 간 힘이 약한 것이 아니라 아예 없다고 가정해요. 약한 인력은 실제 기체의 특징이에요.",
        // EN (option B): That would be an inelastic collision. The model assumes collisions are elastic, so no kinetic energy is lost overall.
        "1": "그것은 비탄성 충돌이에요. 이 모형은 충돌이 탄성 충돌이라고 가정하므로, 전체적으로 운동 에너지가 없어지지 않아요.",
        // EN (option D): Ideal gas particles do have mass. It is their volume that is taken to be negligible.
        "3": "이상 기체 입자에도 질량은 있어요. 무시할 수 있다고 보는 것은 입자의 부피예요.",
      },
    },

    // ── s1-5-q002 · multi · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q002": {
      // EN: <p>Select <strong>all</strong> the assumptions of the ideal gas model.</p>
      stem: "<p>이상 기체 모형의 가정을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: The gas consists of moving particles.
        "기체는 움직이는 입자로 이루어져 있다.",
        // EN: All the particles move at the same speed.
        "모든 입자는 같은 속력으로 움직인다.",
        // EN: The particles have negligible volume.
        "입자의 부피는 무시할 수 있다.",
        // EN: There are no intermolecular forces between the particles.
        "입자 사이에 분자 간 힘이 없다.",
        // EN: The particles have negligible mass.
        "입자의 질량은 무시할 수 있다.",
        // EN: All collisions between particles are elastic.
        "입자 사이의 충돌은 모두 탄성 충돌이다.",
      ],
      hints: [
        // EN: There are exactly four correct statements.
        "맞는 문장은 정확히 네 개예요.",
        // EN: Two of the four are about the particles themselves (their volume, the forces between them). One is about collisions.
        "네 개 중 두 개는 입자 자체에 관한 것(입자의 부피, 입자 사이의 힘)이에요. 한 개는 충돌에 관한 것이에요.",
      ],
      // EN: <p>The four assumptions are: moving particles; negligible particle volume; no intermolecular forces; elastic collisions.</p>
      solution: "<p>가정 4가지는 다음과 같아요: 움직이는 입자, 무시할 수 있는 입자 부피, 분자 간 힘 없음, 탄성 충돌.</p>",
      misconception: {
        // EN (option B): The model does not say this. The particles are moving, but nothing requires them all to have the same speed.
        "1": "모형은 이런 가정을 하지 않아요. 입자는 움직이지만, 모두 같은 속력이어야 할 필요는 없어요.",
        // EN (option E): The particles have mass. A gas can be weighed. It is the volume of the particles that is negligible.
        "4": "입자에는 질량이 있어요. 기체도 무게를 잴 수 있어요. 무시할 수 있는 것은 입자의 부피예요.",
      },
    },

    // ── s1-5-q003 · mcq · foundation · SL · Structure 1.5.2 · 1 mark
    "s1-5-q003": {
      // EN: <p>Under which conditions does a real gas behave <strong>most</strong> like an ideal gas?</p>
      stem: "<p>실제 기체가 이상 기체와 <strong>가장</strong> 비슷하게 행동하는 조건은 어느 것인가요?</p>",
      options: [
        // EN: High temperature and high pressure
        "높은 온도, 높은 압력",
        // EN: High temperature and low pressure
        "높은 온도, 낮은 압력",
        // EN: Low temperature and high pressure
        "낮은 온도, 높은 압력",
        // EN: Low temperature and low pressure
        "낮은 온도, 낮은 압력",
      ],
      hints: [
        // EN: When are the particles far apart? When are they moving too fast for attractions to matter?
        "입자들이 서로 멀리 떨어져 있는 것은 언제일까요? 입자가 너무 빨리 움직여서 인력이 거의 영향을 주지 못하는 것은 언제일까요?",
      ],
      // EN: <p>At <strong>low pressure</strong> the particles are far apart, so their volume is negligible compared with the container. At <strong>high temperature</strong> they move fast, so intermolecular forces have little effect. Both assumptions of the model then hold well.</p>
      solution: "<p><strong>낮은 압력</strong>에서는 입자들이 멀리 떨어져 있으므로, 입자의 부피가 용기 부피에 비해 무시할 만큼 작아요. <strong>높은 온도</strong>에서는 입자가 빠르게 움직이므로, 분자 간 힘의 영향이 거의 없어요. 그래서 모형의 두 가정이 모두 잘 맞아요.</p>",
      misconception: {
        // EN (option A): The high temperature helps, but high pressure pushes the particles close together, so their own volume is no longer negligible.
        "0": "높은 온도는 도움이 되지만, 높은 압력은 입자들을 서로 가깝게 밀어붙여요. 그러면 입자 자체의 부피를 더 이상 무시할 수 없어요.",
        // EN (option C): These are the conditions where a real gas deviates most. Slow, crowded particles are where gases turn into liquids.
        "2": "이것은 실제 기체가 이상 기체에서 가장 많이 벗어나는 조건이에요. 느리고 빽빽하게 모인 입자는 기체가 액체로 바뀌는 상황이에요.",
        // EN (option D): The low pressure helps, but at low temperature the particles move slowly, so intermolecular forces become significant.
        "3": "낮은 압력은 도움이 되지만, 낮은 온도에서는 입자가 느리게 움직이므로 분자 간 힘이 커져요.",
      },
    },

    // ── s1-5-q004 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q004": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 0.300 mol of an ideal gas at STP.</p>
      stem: "<p>STP에서 이상 기체 0.300 mol이 차지하는 부피를 <span class=\"unit\">dm3</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: The data booklet gives the molar volume of an ideal gas at STP.
        "데이터 부클릿에 STP에서 이상 기체의 몰 부피가 나와 있어요.",
        // EN: <span class="mono">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "<span class=\"mono\">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>",
      ],
      // EN: <div class="worked__math">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>
      solution: "<div class=\"worked__math\">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>",
    },

    // ── s1-5-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q005": {
      // EN: <p>A sample of argon occupies 4540 <span class="unit">cm3</span> at STP. Calculate the amount of argon, in mol.</p>
      stem: "<p>아르곤 시료가 STP에서 4540 <span class=\"unit\">cm3</span>를 차지해요. 아르곤의 양을 mol 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Convert the volume to dm<sup>3</sup> first: divide by 1000.
        "먼저 부피를 dm<sup>3</sup>로 바꾸세요: 1000으로 나눠요.",
        // EN: <span class="mono">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "<span class=\"mono\">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>",
      ],
      // EN: <div class="worked__math">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class="worked__math">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>
      solution: "<div class=\"worked__math\">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class=\"worked__math\">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>",
    },

    // ── s1-5-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q006": {
      // EN: <p>A fixed mass of an ideal gas is kept at constant temperature. Which description fits a graph of pressure (vertical axis) against volume (horizontal axis)?</p>
      stem: "<p>일정한 질량의 이상 기체를 일정한 온도로 유지해요. 압력(세로축)과 부피(가로축)의 그래프를 바르게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: A straight line through the origin with a positive gradient
        "원점을 지나고 기울기가 양수인 직선",
        // EN: A straight line with a negative gradient that reaches zero pressure
        "기울기가 음수이고 압력 0에 닿는 직선",
        // EN: A curve that falls steeply at first and then levels off, without touching either axis
        "처음에는 가파르게 내려가다가 점점 완만해지고, 어느 축에도 닿지 않는 곡선",
        // EN: A horizontal straight line
        "수평한 직선",
      ],
      hints: [
        // EN: If the volume doubles, what happens to the pressure? And if it doubles again?
        "부피가 2배가 되면 압력은 어떻게 될까요? 다시 2배가 되면요?",
      ],
      // EN: <p>At constant temperature, <span class="mono">PV = constant</span>, so pressure is inversely proportional to volume. Each doubling of V halves P. This gives a falling curve that gets closer to both axes without touching them.</p>
      solution: "<p>온도가 일정하면 <span class=\"mono\">PV = constant</span>이므로, 압력은 부피에 반비례해요. V가 2배가 될 때마다 P는 절반이 돼요. 그래서 두 축에 점점 가까워지지만 닿지는 않는, 내려가는 곡선이 돼요.</p>",
      misconception: {
        // EN (option A): That would mean pressure is directly proportional to volume. Squeezing a gas into a smaller volume raises its pressure, so the two move in opposite directions.
        "0": "그것은 압력이 부피에 비례한다는 뜻이에요. 기체를 더 작은 부피로 압축하면 압력이 커지므로, 두 양은 반대 방향으로 변해요.",
        // EN (option B): Inverse proportion is not a straight line going down. The pressure halves each time the volume doubles, so it never reaches zero.
        "1": "반비례는 내려가는 직선이 아니에요. 부피가 2배가 될 때마다 압력이 절반이 되므로, 압력은 절대 0이 되지 않아요.",
        // EN (option D): A horizontal line is the graph of PV against P. Pressure itself changes when the volume changes.
        "3": "수평한 직선은 PV와 P의 그래프예요. 압력 자체는 부피가 변하면 함께 변해요.",
      },
    },

    // ── s1-5-q007 · mcq · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q007": {
      // EN: <p>What is 250 <span class="unit">cm3</span> expressed in <span class="unit">m3</span>?</p>
      stem: "<p>250 <span class=\"unit\">cm3</span>를 <span class=\"unit\">m3</span>로 나타내면 얼마인가요?</p>",
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
        "1 m<sup>3</sup> = 1000 dm<sup>3</sup>이고 1 dm<sup>3</sup> = 1000 cm<sup>3</sup>예요.",
      ],
      // EN: <div class="worked__math">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class="worked__math">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>In one step: divide cm<sup>3</sup> by 10<sup>6</sup> to get m<sup>3</sup>.</p>
      solution: "<div class=\"worked__math\">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class=\"worked__math\">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>한 번에 하려면: cm<sup>3</sup> 값을 10<sup>6</sup>으로 나누면 m<sup>3</sup> 값이 돼요.</p>",
      misconception: {
        // EN (option A): Dividing by 1000 gives the volume in dm<sup>3</sup>, not m<sup>3</sup>. You need to divide by 1000 again.
        "0": "1000으로 나누면 m<sup>3</sup>가 아니라 dm<sup>3</sup> 단위의 부피가 나와요. 1000으로 한 번 더 나눠야 해요.",
        // EN (option B): There are 100 cm in 1 m, but volume is length cubed: 1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>.
        "1": "1 m는 100 cm이지만, 부피는 길이의 세제곱이에요: 1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>.",
        // EN (option D): You multiplied by 10<sup>6</sup> instead of dividing. A cubic metre is much bigger than a cubic centimetre, so the number must get smaller.
        "3": "10<sup>6</sup>으로 나누지 않고 곱했어요. 1세제곱미터는 1세제곱센티미터보다 훨씬 크므로, 숫자는 작아져야 해요.",
      },
    },

    // ── s1-5-q008 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q008": {
      // EN: <p>Calculate the pressure, in kPa, of 1.00 mol of an ideal gas in a 10.0 <span class="unit">dm3</span> container at 300 K.</p>
      stem: "<p>300 K에서 10.0 <span class=\"unit\">dm3</span> 용기에 들어 있는 이상 기체 1.00 mol의 압력을 kPa 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for P.
        "<span class=\"mono\">PV = nRT</span>를 P에 대해 정리하세요.",
        // EN: With V in dm<sup>3</sup>, the pressure comes out in kPa: <span class="mono">P = (1.00 × 8.31 × 300) ÷ 10.0</span>
        "V를 dm<sup>3</sup>로 넣으면 압력은 kPa 단위로 나와요: <span class=\"mono\">P = (1.00 × 8.31 × 300) ÷ 10.0</span>",
      ],
      // EN: <div class="worked__math">P = nRT ÷ V</div><div class="worked__math">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>To 3 significant figures: <strong>249 kPa</strong>.</p>
      solution: "<div class=\"worked__math\">P = nRT ÷ V</div><div class=\"worked__math\">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>유효 숫자 3자리로: <strong>249 kPa</strong>.</p>",
    },

    // ── s1-5-q009 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q009": {
      // EN: <p>A fixed mass of an ideal gas is compressed to half its original volume at constant temperature. What happens to the pressure?</p>
      stem: "<p>일정한 질량의 이상 기체를 일정한 온도에서 처음 부피의 절반으로 압축해요. 압력은 어떻게 되나요?</p>",
      options: [
        // EN: It halves.
        "절반이 된다.",
        // EN: It stays the same.
        "변하지 않는다.",
        // EN: It doubles.
        "2배가 된다.",
        // EN: It becomes four times larger.
        "4배가 된다.",
      ],
      hints: [
        // EN: At constant temperature, <span class="mono">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>.
        "온도가 일정하면 <span class=\"mono\">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>예요.",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>The pressure doubles.</p>
      solution: "<div class=\"worked__math\">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>압력은 2배가 돼요.</p>",
      misconception: {
        // EN (option A): That would be direct proportion. Pressure and volume are inversely proportional: when one goes down, the other goes up.
        "0": "그것은 비례 관계일 때예요. 압력과 부피는 반비례하므로, 하나가 줄면 다른 하나는 커져요.",
        // EN (option B): The same particles now hit a smaller wall area more often, so the pressure must rise.
        "1": "같은 입자들이 이제 더 좁은 벽 면적에 더 자주 부딪치므로, 압력은 커져야 해요.",
        // EN (option D): The relationship is P ∝ 1/V, not 1/V<sup>2</sup>. Halving V multiplies P by 2, not 4.
        "3": "관계는 P ∝ 1/V이지, 1/V<sup>2</sup>가 아니에요. V가 절반이 되면 P는 4배가 아니라 2배가 돼요.",
      },
    },

    // ── s1-5-q010 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q010": {
      // EN: <p>A gas occupies 3.00 <span class="unit">dm3</span> at 300 K. It is heated to 450 K at constant pressure. Calculate the new volume, in <span class="unit">dm3</span>.</p>
      stem: "<p>어떤 기체가 300 K에서 3.00 <span class=\"unit\">dm3</span>를 차지해요. 압력을 일정하게 유지하면서 450 K로 가열해요. 새 부피를 <span class=\"unit\">dm3</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: The pressure is constant, so it cancels from the combined gas law.
        "압력이 일정하므로, 보일-샤를 법칙에서 압력이 약분돼요.",
        // EN: <span class="mono">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>
        "<span class=\"mono\">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>",
      ],
      // EN: <div class="worked__math">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class="worked__math">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>
      solution: "<div class=\"worked__math\">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class=\"worked__math\">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>",
    },

    // ── s1-5-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q011": {
      // EN: <p>A sealed, rigid container of gas is heated from 25 °C to 50 °C. What happens to the pressure of the gas?</p>
      stem: "<p>밀폐된 단단한 용기에 든 기체를 25 °C에서 50 °C로 가열해요. 기체의 압력은 어떻게 되나요?</p>",
      options: [
        // EN: It doubles.
        "2배가 된다.",
        // EN: It increases by about 8 %.
        "약 8 % 커진다.",
        // EN: It halves.
        "절반이 된다.",
        // EN: It stays the same because the container is rigid.
        "용기가 단단하므로 변하지 않는다.",
      ],
      hints: [
        // EN: Convert both temperatures to kelvin before comparing them.
        "비교하기 전에 두 온도를 모두 켈빈으로 바꾸세요.",
        // EN: At constant volume, <span class="mono">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>.
        "부피가 일정하면 <span class=\"mono\">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>예요.",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class="worked__math">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>The pressure rises by about 8 %.</p>
      solution: "<div class=\"worked__math\">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class=\"worked__math\">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>압력은 약 8 % 커져요.</p>",
      misconception: {
        // EN (option A): You used the Celsius values. Pressure is proportional to temperature in kelvin: 298 K to 323 K is far from a doubling.
        "0": "섭씨온도 값을 그대로 썼어요. 압력은 켈빈 온도에 비례해요: 298 K에서 323 K로는 2배와 거리가 멀어요.",
        // EN (option C): Pressure and temperature are directly proportional, so heating raises the pressure. Also check you used kelvin.
        "2": "압력과 온도는 비례하므로, 가열하면 압력이 커져요. 켈빈 온도를 썼는지도 확인하세요.",
        // EN (option D): A rigid container keeps the volume constant, not the pressure. Faster particles hit the walls harder and more often.
        "3": "단단한 용기는 압력이 아니라 부피를 일정하게 유지해요. 더 빨라진 입자는 벽에 더 세게, 더 자주 부딪쳐요.",
      },
    },

    // ── s1-5-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q012": {
      // EN: <p>A gas sample has a volume of 450 <span class="unit">cm3</span> at 27.0 °C and 98.0 kPa. Calculate the volume, in <span class="unit">cm3</span>, that the same sample would occupy at STP.</p>
      stem: "<p>어떤 기체 시료의 부피가 27.0 °C, 98.0 kPa에서 450 <span class=\"unit\">cm3</span>예요. 같은 시료가 STP에서 차지하는 부피를 <span class=\"unit\">cm3</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: STP is 273.15 K and 100 kPa. Use the combined gas law.
        "STP는 273.15 K, 100 kPa예요. 보일-샤를 법칙을 쓰세요.",
        // EN: T<sub>1</sub> = 300.15 K. <span class="mono">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>
        "T<sub>1</sub> = 300.15 K. <span class=\"mono\">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class="worked__math">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class="worked__math">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>To 3 significant figures: <strong>401 cm<sup>3</sup></strong>. Cooling and a slightly higher pressure both make the volume smaller, so this is sensible.</p>
      solution: "<div class=\"worked__math\">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class=\"worked__math\">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class=\"worked__math\">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>유효 숫자 3자리로: <strong>401 cm<sup>3</sup></strong>. 온도가 낮아지고 압력이 조금 높아지면 둘 다 부피를 줄이므로, 이 답은 타당해요.</p>",
    },

    // ── s1-5-q013 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q013": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 2.00 g of helium at 20.0 °C and 101 kPa.</p>
      stem: "<p>20.0 °C, 101 kPa에서 헬륨 2.00 g이 차지하는 부피를 <span class=\"unit\">dm3</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Find the amount of helium first: <span class="mono">n = m ÷ M</span>, with <i>A</i><sub>r</sub>(He) = 4.00.
        "먼저 헬륨의 양을 구하세요: <span class=\"mono\">n = m ÷ M</span>, <i>A</i><sub>r</sub>(He) = 4.00.",
        // EN: Then <span class="mono">V = nRT ÷ P</span> with T = 293.15 K. With P in kPa, V is in dm<sup>3</sup>.
        "그다음 T = 293.15 K로 <span class=\"mono\">V = nRT ÷ P</span>를 계산해요. P를 kPa로 넣으면 V는 dm<sup>3</sup> 단위예요.",
      ],
      // EN: <div class="worked__math">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>To 3 significant figures: <strong>12.1 dm<sup>3</sup></strong>.</p>
      solution: "<div class=\"worked__math\">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>유효 숫자 3자리로: <strong>12.1 dm<sup>3</sup></strong>.</p>",
    },

    // ── s1-5-q014 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q014": {
      // EN: <p>A 500 <span class="unit">cm3</span> flask contains nitrogen gas, <span class="chem">N2</span>, at 15.0 °C and 120 kPa. Calculate the mass of nitrogen in the flask, in g.</p>
      stem: "<p>500 <span class=\"unit\">cm3</span> 플라스크에 15.0 °C, 120 kPa의 질소 기체 <span class=\"chem\">N2</span>가 들어 있어요. 플라스크 속 질소의 질량을 g 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Convert first: 500 cm<sup>3</sup> to dm<sup>3</sup>, and 15.0 °C to K.
        "먼저 단위를 바꾸세요: 500 cm<sup>3</sup>는 dm<sup>3</sup>로, 15.0 °C는 K로.",
        // EN: <span class="mono">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>
        "<span class=\"mono\">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>",
        // EN: Then <span class="mono">m = n × M</span>. Nitrogen gas is N<sub>2</sub>, so M = 28.02 g mol<sup>−1</sup>.
        "그다음 <span class=\"mono\">m = n × M</span>이에요. 질소 기체는 N<sub>2</sub>이므로 M = 28.02 g mol<sup>−1</sup>이에요.",
      ],
      // EN: <div class="worked__math">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class="worked__math">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class="worked__math">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class="worked__math">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>To 3 significant figures: <strong>0.702 g</strong>.</p>
      solution: "<div class=\"worked__math\">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class=\"worked__math\">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class=\"worked__math\">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class=\"worked__math\">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>유효 숫자 3자리로: <strong>0.702 g</strong>.</p>",
    },

    // ── s1-5-q015 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q015": {
      // EN: <p>0.412 g of an unknown gas occupies 185 <span class="unit">cm3</span> at 35.0 °C and 99.0 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>미지의 기체 0.412 g이 35.0 °C, 99.0 kPa에서 185 <span class=\"unit\">cm3</span>를 차지해요. 이 기체의 몰 질량을 <span class=\"unit\">g mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Two links: the gas equation gives the amount, then molar mass is mass ÷ amount.
        "두 단계로 이어져요: 기체 방정식으로 양을 구하고, 몰 질량은 질량 ÷ 양이에요.",
        // EN: <span class="mono">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>
        "<span class=\"mono\">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>",
      ],
      // EN: <div class="worked__math">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class="worked__math">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class="worked__math">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>57.6 g mol<sup>−1</sup></strong>.</p>
      solution: "<div class=\"worked__math\">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class=\"worked__math\">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class=\"worked__math\">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>유효 숫자 3자리로: <strong>57.6 g mol<sup>−1</sup></strong>.</p>",
    },

    // ── s1-5-q016 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q016": {
      // EN: <p>Which graph, for a fixed mass of an ideal gas, is a straight line that passes through the origin?</p>
      stem: "<p>일정한 질량의 이상 기체에서, 원점을 지나는 직선이 되는 그래프는 어느 것인가요?</p>",
      options: [
        // EN: Pressure against volume, at constant temperature
        "온도가 일정할 때, 압력과 부피의 그래프",
        // EN: Pressure against 1/volume, at constant temperature
        "온도가 일정할 때, 압력과 1/부피의 그래프",
        // EN: Volume against temperature in °C, at constant pressure
        "압력이 일정할 때, 부피와 °C 온도의 그래프",
        // EN: Pressure × volume against pressure, at constant temperature
        "온도가 일정할 때, 압력 × 부피와 압력의 그래프",
      ],
      hints: [
        // EN: A straight line through the origin means the two plotted quantities are directly proportional.
        "원점을 지나는 직선은 그래프의 두 양이 비례한다는 뜻이에요.",
      ],
      // EN: <p>At constant temperature <span class="mono">P = nRT × (1/V)</span>, so P is directly proportional to 1/V. Plotting P against 1/V gives a straight line through the origin with gradient nRT.</p>
      solution: "<p>온도가 일정하면 <span class=\"mono\">P = nRT × (1/V)</span>이므로, P는 1/V에 비례해요. P를 1/V에 대해 그리면 원점을 지나고 기울기가 nRT인 직선이 돼요.</p>",
      misconception: {
        // EN (option A): P against V is a falling curve, because P is inversely proportional to V.
        "0": "P와 V의 그래프는 내려가는 곡선이에요. P가 V에 반비례하기 때문이에요.",
        // EN (option C): This is a straight line, but it does not pass through the origin. At 0 °C the gas still has a volume. The line reaches zero volume at −273.15 °C.
        "2": "이것은 직선이지만 원점을 지나지 않아요. 0 °C에서도 기체에는 부피가 있어요. 이 직선은 −273.15 °C에서 부피 0에 닿아요.",
        // EN (option D): PV is constant at constant temperature, so this graph is a horizontal line, not a line through the origin.
        "3": "온도가 일정하면 PV는 일정하므로, 이 그래프는 원점을 지나는 직선이 아니라 수평한 직선이에요.",
      },
    },

    // ── s1-5-q017 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q017": {
      // EN: <p>Which sketch shows how the volume of a fixed mass of an ideal gas (vertical axis) changes with its temperature in <strong>°C</strong> (horizontal axis) at constant pressure? In each sketch the vertical axis is drawn at 0 on the horizontal scale.</p>
      stem: "<p>압력이 일정할 때, 일정한 질량의 이상 기체의 부피(세로축)가 <strong>°C</strong> 온도(가로축)에 따라 어떻게 변하는지 나타낸 개형은 어느 것인가요? 각 그림에서 세로축은 가로축 눈금의 0 위치에 그려져 있어요.</p>",
      options: [
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that starts at the origin" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L104 16" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"원점에서 시작하고 기울기가 양수인 직선\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 68 L104 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that crosses the vertical axis above zero; extended back with a dashed line it meets the horizontal axis at a negative value" style="vertical-align:middle"><path d="M16 68 H112 M44 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L44 48" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><path d="M44 48 L104 5.1" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="40" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"기울기가 양수이고 세로축과 0보다 위에서 만나는 직선. 점선으로 거꾸로 연장하면 가로축과 음의 값에서 만남\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M44 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 68 L44 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><path d=\"M44 48 L104 5.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"40\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A curve that falls steeply and then levels off" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M24 12 C28 44 52 58 108 62" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"가파르게 내려가다가 완만해지는 곡선\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M24 12 C28 44 52 58 108 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A horizontal straight line" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 30 H104" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"수평한 직선\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 30 H104\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
      ],
      hints: [
        // EN: Does a gas have zero volume at 0 °C?
        "0 °C에서 기체의 부피는 0일까요?",
        // EN: Where would the volume of an ideal gas reach zero?
        "이상 기체의 부피가 0이 되는 곳은 어디일까요?",
      ],
      // EN: <p>Volume is directly proportional to temperature in kelvin. On a Celsius axis the same straight line is shifted: it crosses the volume axis above zero at 0 °C, and extrapolates back to zero volume at −273.15 °C (absolute zero).</p>
      solution: "<p>부피는 켈빈 온도에 비례해요. 섭씨온도 축에서는 같은 직선이 옆으로 옮겨져요: 0 °C에서 0보다 위에서 부피 축과 만나고, 거꾸로 외삽하면 −273.15 °C(절대 영도)에서 부피가 0이 돼요.</p>",
      misconception: {
        // EN (option A): This is the graph for temperature in kelvin. At 0 °C (273.15 K) a gas still has a volume, so the line cannot start at the origin.
        "0": "이것은 켈빈 온도에 대한 그래프예요. 0 °C(273.15 K)에서도 기체에는 부피가 있으므로, 직선이 원점에서 시작할 수 없어요.",
        // EN (option C): This is the shape of pressure against volume. Volume increases steadily with temperature.
        "2": "이것은 압력과 부피 그래프의 모양이에요. 부피는 온도에 따라 일정하게 커져요.",
        // EN (option D): A horizontal line would mean the volume does not change on heating. At constant pressure a gas expands when heated.
        "3": "수평한 직선은 가열해도 부피가 변하지 않는다는 뜻이에요. 압력이 일정하면 기체는 가열할 때 팽창해요.",
      },
    },

    // ── s1-5-q018 · mcq · exam · SL · Structure 1.5.2 · 1 mark
    "s1-5-q018": {
      // EN: <p>The boiling points of four substances at 100 kPa are shown.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">helium, <span class="chem">He</span></th><td class="num">4</td></tr><tr><th scope="row">nitrogen, <span class="chem">N2</span></th><td class="num">77</td></tr><tr><th scope="row">methane, <span class="chem">CH4</span></th><td class="num">112</td></tr><tr><th scope="row">ammonia, <span class="chem">NH3</span></th><td class="num">240</td></tr></tbody></table></div><p>Which gas would you expect to deviate <strong>most</strong> from ideal behaviour at 300 K and 100 kPa?</p>
      stem: "<p>100 kPa에서 네 물질의 끓는점이 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">물질</th><th scope=\"col\" class=\"num\">끓는점 / K</th></tr></thead><tbody><tr><th scope=\"row\">헬륨, <span class=\"chem\">He</span></th><td class=\"num\">4</td></tr><tr><th scope=\"row\">질소, <span class=\"chem\">N2</span></th><td class=\"num\">77</td></tr><tr><th scope=\"row\">메테인, <span class=\"chem\">CH4</span></th><td class=\"num\">112</td></tr><tr><th scope=\"row\">암모니아, <span class=\"chem\">NH3</span></th><td class=\"num\">240</td></tr></tbody></table></div><p>300 K, 100 kPa에서 이상 기체의 행동에서 <strong>가장</strong> 많이 벗어날 것으로 예상되는 기체는 어느 것인가요?</p>",
      options: [
        // EN: Helium
        "헬륨",
        // EN: Nitrogen
        "질소",
        // EN: Methane
        "메테인",
        // EN: Ammonia
        "암모니아",
      ],
      hints: [
        // EN: A higher boiling point means stronger forces between the particles.
        "끓는점이 높을수록 입자 사이의 힘이 강해요.",
        // EN: Which assumption of the ideal gas model is about forces?
        "이상 기체 모형의 가정 중 힘에 관한 것은 무엇일까요?",
      ],
      // EN: <p>Ammonia has the highest boiling point, so it has the strongest intermolecular forces. The ideal gas model assumes no intermolecular forces, so ammonia fits the model least well. At 300 K it is also the gas closest to its own boiling point.</p>
      solution: "<p>암모니아는 끓는점이 가장 높으므로, 분자 간 힘이 가장 강해요. 이상 기체 모형은 분자 간 힘이 없다고 가정하므로, 암모니아가 모형에 가장 덜 맞아요. 또 300 K에서 암모니아는 자기 끓는점에 가장 가까운 기체이기도 해요.</p>",
      misconception: {
        // EN (option A): Helium has the lowest boiling point, so the weakest forces between its particles. It is the closest to ideal of the four.
        "0": "헬륨은 끓는점이 가장 낮으므로, 입자 사이의 힘이 가장 약해요. 네 기체 중 이상 기체에 가장 가까워요.",
        // EN (option B): Nitrogen boils at only 77 K, which shows its intermolecular forces are weak. At 300 K it behaves almost ideally.
        "1": "질소는 겨우 77 K에서 끓어요. 이것은 분자 간 힘이 약하다는 뜻이에요. 300 K에서 질소는 거의 이상 기체처럼 행동해요.",
        // EN (option C): Methane has stronger forces than helium or nitrogen, but another gas in the table has a much higher boiling point.
        "2": "메테인은 헬륨이나 질소보다 힘이 강하지만, 표에는 끓는점이 훨씬 더 높은 기체가 있어요.",
      },
    },

    // ── s1-5-q019 · short · exam · SL · Structure 1.5.2 · 2 marks
    "s1-5-q019": {
      // EN: <p>Explain why a real gas deviates from ideal gas behaviour at high pressure and at low temperature.</p>
      stem: "<p>실제 기체가 높은 압력과 낮은 온도에서 이상 기체의 행동에서 벗어나는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Link each condition to one assumption of the ideal gas model that stops being true.
        "각 조건을, 더 이상 성립하지 않게 되는 이상 기체 모형의 가정 하나와 연결하세요.",
      ],
      // EN: <p>At high pressure the particles are close together, so the volume of the particles themselves is no longer negligible compared with the volume of the container. At low temperature the particles have less kinetic energy and move more slowly, so the intermolecular forces between them become significant.</p>
      answer: "<p>높은 압력에서는 입자들이 서로 가까이 있으므로, 입자 자체의 부피를 용기 부피에 비해 더 이상 무시할 수 없어요. 낮은 온도에서는 입자의 운동 에너지가 작아 더 느리게 움직이므로, 입자 사이의 분자 간 힘이 커져요.</p>",
      markscheme: [
        // EN: High pressure: particles are close together, so the volume of the particles is not negligible (compared with the volume of the gas/container).
        "높은 압력: 입자들이 서로 가까이 있으므로 입자의 부피를 (기체/용기의 부피에 비해) 무시할 수 없다.",
        // EN: Low temperature: particles move more slowly / have lower kinetic energy, so intermolecular forces (attractions) become significant / are no longer negligible.
        "낮은 온도: 입자가 더 느리게 움직인다 / 운동 에너지가 더 작다. 그래서 분자 간 힘(인력)이 커진다 / 더 이상 무시할 수 없다.",
      ],
    },

    // ── s1-5-q020 · short · exam · SL · Structure 1.5.1 · 2 marks
    "s1-5-q020": {
      // EN: <p>State <strong>two</strong> assumptions of the ideal gas model.</p>
      stem: "<p>이상 기체 모형의 가정 <strong>두 가지</strong>를 쓰시오 (state).</p>",
      hints: [
        // EN: Tick any two of the four points. The maximum is 2 marks.
        "네 항목 중 아무거나 두 개에 체크하세요. 최대 2점이에요.",
      ],
      // EN: <p>Any two of: the particles have negligible volume; there are no intermolecular forces between the particles; all collisions between particles are elastic; the gas consists of moving particles.</p>
      answer: "<p>다음 중 아무거나 두 가지: 입자의 부피는 무시할 수 있다, 입자 사이에 분자 간 힘이 없다, 입자 사이의 충돌은 모두 탄성 충돌이다, 기체는 움직이는 입자로 이루어져 있다.</p>",
      markscheme: [
        // EN: The particles have negligible volume (compared with the volume of the container). Do not accept “the gas has no volume”.
        "입자의 부피는 (용기의 부피에 비해) 무시할 수 있다. “기체는 부피가 없다”는 인정하지 않는다.",
        // EN: There are no intermolecular forces (no attractions or repulsions) between the particles.
        "입자 사이에 분자 간 힘(인력이나 반발력)이 없다.",
        // EN: Collisions between particles are (perfectly) elastic / no kinetic energy is lost in collisions.
        "입자 사이의 충돌은 (완전한) 탄성 충돌이다 / 충돌할 때 운동 에너지가 없어지지 않는다.",
        // EN: The gas consists of moving particles.
        "기체는 움직이는 입자로 이루어져 있다.",
      ],
    },

    // ── s1-5-q021 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q021": {
      // EN: <p>A student calculates the amount of gas in a 250 <span class="unit">cm3</span> flask at 101 kPa and 298 K. The student substitutes <span class="mono">P = 101</span>, <span class="mono">V = 250</span>, <span class="mono">R = 8.31</span> and <span class="mono">T = 298</span> into <span class="mono">n = PV ÷ RT</span>. How does the student’s answer compare with the correct amount?</p>
      stem: "<p>한 학생이 101 kPa, 298 K에서 250 <span class=\"unit\">cm3</span> 플라스크에 든 기체의 양을 계산해요. 학생은 <span class=\"mono\">n = PV ÷ RT</span>에 <span class=\"mono\">P = 101</span>, <span class=\"mono\">V = 250</span>, <span class=\"mono\">R = 8.31</span>, <span class=\"mono\">T = 298</span>을 대입해요. 학생의 답은 올바른 양과 비교해 어떤가요?</p>",
      options: [
        // EN: It is correct.
        "맞다.",
        // EN: It is 1000 times too large.
        "1000배 너무 크다.",
        // EN: It is 1000 times too small.
        "1000배 너무 작다.",
        // EN: It is 10<sup>6</sup> times too large.
        "10<sup>6</sup>배 너무 크다.",
      ],
      hints: [
        // EN: Which volume unit goes with kPa when R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>?
        "R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>일 때, kPa와 함께 쓰는 부피 단위는 무엇일까요?",
      ],
      // EN: <p>With pressure in kPa, the volume must be in dm<sup>3</sup>: 250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>.</p><div class="worked__math">correct: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class="worked__math">student: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>The student’s value is 1000 times too large. More than 10 mol of gas in a small flask is a warning sign.</p>
      solution: "<p>압력을 kPa로 쓰면 부피는 dm<sup>3</sup>로 써야 해요: 250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>.</p><div class=\"worked__math\">올바른 계산: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class=\"worked__math\">학생의 계산: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>학생의 값은 1000배 너무 커요. 작은 플라스크에 기체가 10 mol 넘게 들어 있다면 무언가 잘못됐다는 신호예요.</p>",
      misconception: {
        // EN (option A): kPa must be paired with dm<sup>3</sup>. The volume here was left in cm<sup>3</sup>, so the units are not consistent.
        "0": "kPa는 dm<sup>3</sup>와 짝지어야 해요. 여기서는 부피를 cm<sup>3</sup> 그대로 두었으므로 단위가 맞지 않아요.",
        // EN (option C): The direction is wrong. V is on top of the fraction, and 250 is bigger than 0.250, so the answer comes out too large.
        "2": "방향이 틀렸어요. V는 분수의 분자에 있고 250은 0.250보다 크므로, 답이 너무 크게 나와요.",
        // EN (option D): A factor of 10<sup>6</sup> is the difference between cm<sup>3</sup> and m<sup>3</sup>. With kPa the matching unit is dm<sup>3</sup>, which is 1000 cm<sup>3</sup>.
        "3": "10<sup>6</sup>배는 cm<sup>3</sup>와 m<sup>3</sup>의 차이예요. kPa와 맞는 단위는 dm<sup>3</sup>이고, 이것은 1000 cm<sup>3</sup>예요.",
      },
    },

    // ── s1-5-q022 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q022": {
      // EN: <p>The temperature of a fixed mass of an ideal gas, measured in kelvin, is doubled. At the same time its volume is halved. By what factor does the pressure change?</p>
      stem: "<p>일정한 질량의 이상 기체의 켈빈 온도를 2배로 해요. 동시에 부피는 절반으로 줄여요. 압력은 몇 배로 변하나요?</p>",
      options: [
        // EN: × ¼
        "× ¼",
        // EN: × 1 (no change)
        "× 1 (변화 없음)",
        // EN: × 2
        "× 2",
        // EN: × 4
        "× 4",
      ],
      hints: [
        // EN: Rearrange the combined gas law for P<sub>2</sub>, then put in T<sub>2</sub> = 2T<sub>1</sub> and V<sub>2</sub> = ½V<sub>1</sub>.
        "보일-샤를 법칙을 P<sub>2</sub>에 대해 정리한 다음, T<sub>2</sub> = 2T<sub>1</sub>, V<sub>2</sub> = ½V<sub>1</sub>을 넣으세요.",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>
      solution: "<div class=\"worked__math\">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>",
      misconception: {
        // EN (option A): Both changes raise the pressure. You have inverted both effects.
        "0": "두 변화 모두 압력을 높여요. 두 효과를 모두 거꾸로 생각했어요.",
        // EN (option B): The two changes do not cancel. Heating raises the pressure, and so does squeezing the gas into a smaller volume.
        "1": "두 변화는 서로 상쇄되지 않아요. 가열하면 압력이 커지고, 기체를 더 작은 부피로 압축해도 압력이 커져요.",
        // EN (option C): You have counted only one of the two changes. Each one doubles the pressure.
        "2": "두 변화 중 하나만 셌어요. 각각이 압력을 2배로 만들어요.",
      },
    },

    // ── s1-5-q023 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q023": {
      // EN: <p>0.0500 mol of an ideal gas occupies 1.50 <span class="unit">dm3</span> at a pressure of 95.0 kPa. Calculate the temperature of the gas in <strong>°C</strong>.</p>
      stem: "<p>이상 기체 0.0500 mol이 95.0 kPa의 압력에서 1.50 <span class=\"unit\">dm3</span>를 차지해요. 기체의 온도를 <strong>°C</strong> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for T. The answer comes out in kelvin.
        "<span class=\"mono\">PV = nRT</span>를 T에 대해 정리하세요. 답은 켈빈 단위로 나와요.",
        // EN: <span class="mono">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>, then subtract 273.15.
        "<span class=\"mono\">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>을 구한 다음, 273.15를 빼요.",
      ],
      // EN: <div class="worked__math">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class="worked__math">T = 342.96… − 273.15 = 69.81… °C</div><p>To 3 significant figures: <strong>69.8 °C</strong>.</p>
      solution: "<div class=\"worked__math\">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class=\"worked__math\">T = 342.96… − 273.15 = 69.81… °C</div><p>유효 숫자 3자리로: <strong>69.8 °C</strong>.</p>",
    },

    // ── s1-5-q024 · order · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q024": {
      // EN: <p>A student measures the mass of a volatile liquid, and the volume, temperature and pressure of its vapour. Put the steps in order to find the molecular formula from these data and the empirical formula.</p>
      stem: "<p>한 학생이 휘발성 액체의 질량과, 그 증기의 부피, 온도, 압력을 측정해요. 이 자료와 실험식으로 분자식을 구하는 단계를 순서대로 배열하세요.</p>",
      options: [
        // EN: Convert the temperature to kelvin and the volume to dm<sup>3</sup> (pressure in kPa).
        "온도는 켈빈으로, 부피는 dm<sup>3</sup>로 바꾼다(압력은 kPa).",
        // EN: Calculate the amount of vapour using <span class="mono">n = PV ÷ RT</span>.
        "<span class=\"mono\">n = PV ÷ RT</span>로 증기의 양을 계산한다.",
        // EN: Calculate the molar mass using <span class="mono">M = m ÷ n</span>.
        "<span class=\"mono\">M = m ÷ n</span>으로 몰 질량을 계산한다.",
        // EN: Divide the molar mass by the mass of one empirical formula unit.
        "몰 질량을 실험식 한 단위의 질량으로 나눈다.",
        // EN: Multiply the subscripts in the empirical formula by the whole number obtained.
        "실험식의 아래 첨자에 얻은 정수를 곱한다.",
      ],
      hints: [
        // EN: You cannot use the gas equation until the units are consistent.
        "단위가 맞기 전에는 기체 방정식을 쓸 수 없어요.",
        // EN: The molar mass needs the amount of vapour, and the amount comes from the gas equation.
        "몰 질량을 구하려면 증기의 양이 필요하고, 양은 기체 방정식에서 나와요.",
      ],
      // EN: <p>Units first, then the gas equation for the amount, then molar mass from mass ÷ amount. Comparing the molar mass with the empirical formula mass gives the whole-number multiple that turns the empirical formula into the molecular formula.</p>
      solution: "<p>먼저 단위를 맞추고, 기체 방정식으로 양을 구한 다음, 질량 ÷ 양으로 몰 질량을 구해요. 몰 질량을 실험식량과 비교하면 정수배가 나오고, 이 정수배로 실험식을 분자식으로 바꿔요.</p>",
    },

    // ── s1-5-q025 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q025": {
      // EN: <p>Which sample of gas occupies the largest volume at STP?</p>
      stem: "<p>STP에서 가장 큰 부피를 차지하는 기체 시료는 어느 것인가요?</p>",
      options: [
        // EN: 4.0 g of hydrogen, <span class="chem">H2</span>
        "수소 <span class=\"chem\">H2</span> 4.0 g",
        // EN: 28.0 g of nitrogen, <span class="chem">N2</span>
        "질소 <span class=\"chem\">N2</span> 28.0 g",
        // EN: 44.0 g of carbon dioxide, <span class="chem">CO2</span>
        "이산화 탄소 <span class=\"chem\">CO2</span> 44.0 g",
        // EN: 40.0 g of argon, <span class="chem">Ar</span>
        "아르곤 <span class=\"chem\">Ar</span> 40.0 g",
      ],
      hints: [
        // EN: At the same temperature and pressure, volume depends only on the amount of gas in moles.
        "온도와 압력이 같으면, 부피는 기체의 양(mol)에만 달려 있어요.",
        // EN: Work out <span class="mono">n = m ÷ M</span> for each sample.
        "각 시료에 대해 <span class=\"mono\">n = m ÷ M</span>을 계산해 보세요.",
      ],
      // EN: <div class="worked__math">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class="worked__math">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>Hydrogen has about twice the amount, so about twice the volume (about 45 dm<sup>3</sup> against about 22.7 dm<sup>3</sup>).</p>
      solution: "<div class=\"worked__math\">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class=\"worked__math\">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>수소는 양이 약 2배이므로, 부피도 약 2배예요(약 22.7 dm<sup>3</sup>에 비해 약 45 dm<sup>3</sup>).</p>",
      misconception: {
        // EN (option B): Gas volume depends on the amount in moles, not on the mass. 28.0 g of N<sub>2</sub> is about 1 mol.
        "1": "기체의 부피는 질량이 아니라 양(mol)에 달려 있어요. N<sub>2</sub> 28.0 g은 약 1 mol이에요.",
        // EN (option C): The largest mass does not mean the largest volume. 44.0 g of CO<sub>2</sub> is about 1 mol, and bigger molecules do not take up more room in an ideal gas.
        "2": "질량이 가장 크다고 부피가 가장 큰 것은 아니에요. CO<sub>2</sub> 44.0 g은 약 1 mol이고, 이상 기체에서는 분자가 크다고 자리를 더 차지하지 않아요.",
        // EN (option D): 40.0 g of argon is about 1 mol. Another sample contains about twice that amount.
        "3": "아르곤 40.0 g은 약 1 mol이에요. 다른 시료에는 그 양의 약 2배가 들어 있어요.",
      },
    },

    // ── s1-5-q026 · multi · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q026": {
      // EN: <p>Select <strong>all</strong> the graphs that are straight lines through the origin for a fixed mass of an ideal gas.</p>
      stem: "<p>일정한 질량의 이상 기체에서 원점을 지나는 직선이 되는 그래프를 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: P against 1/V, at constant temperature
        "온도가 일정할 때, P와 1/V의 그래프",
        // EN: P against V, at constant temperature
        "온도가 일정할 때, P와 V의 그래프",
        // EN: V against T in kelvin, at constant pressure
        "압력이 일정할 때, V와 켈빈 온도 T의 그래프",
        // EN: V against T in °C, at constant pressure
        "압력이 일정할 때, V와 °C 온도 T의 그래프",
        // EN: P against T in kelvin, at constant volume
        "부피가 일정할 때, P와 켈빈 온도 T의 그래프",
        // EN: PV against P, at constant temperature
        "온도가 일정할 때, PV와 P의 그래프",
      ],
      hints: [
        // EN: A straight line through the origin means direct proportion.
        "원점을 지나는 직선은 비례 관계를 뜻해요.",
        // EN: There are three correct answers.
        "정답은 세 개예요.",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>: P ∝ 1/V at constant T; V ∝ T (in K) at constant P; P ∝ T (in K) at constant V. Each of these direct proportions plots as a straight line through the origin.</p>
      solution: "<p><span class=\"mono\">PV = nRT</span>에서: T가 일정하면 P ∝ 1/V, P가 일정하면 V ∝ T(K), V가 일정하면 P ∝ T(K)예요. 이 비례 관계는 각각 원점을 지나는 직선으로 그려져요.</p>",
      misconception: {
        // EN (option B): P against V is a curve. The inverse relationship only becomes a straight line when you plot P against 1/V.
        "1": "P와 V의 그래프는 곡선이에요. 반비례 관계는 P를 1/V에 대해 그려야 직선이 돼요.",
        // EN (option D): A straight line, but not through the origin: at 0 °C the gas still has a volume. The line meets the temperature axis at −273.15 °C.
        "3": "직선이지만 원점을 지나지 않아요: 0 °C에서도 기체에는 부피가 있어요. 이 직선은 −273.15 °C에서 온도 축과 만나요.",
        // EN (option F): PV does not change at constant temperature, so this is a horizontal line.
        "5": "온도가 일정하면 PV는 변하지 않으므로, 이 그래프는 수평한 직선이에요.",
      },
    },

    // ── s1-5-q031 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q031": {
      // EN: <p>The molar volume of an ideal gas is 22.7 <span class="unit">dm3 mol-1</span> at STP. Use the ideal gas equation to calculate the molar volume of an ideal gas, in <span class="unit">dm3 mol-1</span>, at 25.0 °C and 100 kPa.</p>
      stem: "<p>STP에서 이상 기체의 몰 부피는 22.7 <span class=\"unit\">dm3 mol-1</span>이에요. 이상 기체 방정식을 이용해 25.0 °C, 100 kPa에서 이상 기체의 몰 부피를 <span class=\"unit\">dm3 mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Molar volume is the volume of exactly 1 mol. Put n = 1 mol into <span class="mono">V = nRT ÷ P</span>.
        "몰 부피는 정확히 1 mol의 부피예요. <span class=\"mono\">V = nRT ÷ P</span>에 n = 1 mol을 넣으세요.",
        // EN: <span class="mono">V = (1 × 8.31 × 298.15) ÷ 100</span>
        "<span class=\"mono\">V = (1 × 8.31 × 298.15) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>Molar volume = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>. It is larger than 22.7 because the gas is warmer. This is why 22.7 can only be used at STP.</p>
      solution: "<div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>몰 부피 = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>. 기체의 온도가 더 높으므로 22.7보다 커요. 그래서 22.7은 STP에서만 쓸 수 있어요.</p>",
    },

    // ── s1-5-q035 · short · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q035": {
      // EN: <p>The volume of a fixed mass of gas is measured at several temperatures between 0 °C and 100 °C at constant pressure. Describe the graph of volume against temperature in °C, and state what is found when the line is extrapolated to zero volume.</p>
      stem: "<p>압력을 일정하게 유지하면서 0 °C에서 100 °C 사이의 여러 온도에서 일정한 질량의 기체의 부피를 측정해요. 부피와 °C 온도의 그래프를 서술하고 (describe), 직선을 부피 0까지 외삽하면 무엇을 알 수 있는지 쓰시오 (state).</p>",
      hints: [
        // EN: Is the volume zero at 0 °C?
        "0 °C에서 부피는 0일까요?",
        // EN: What is special about −273.15 °C?
        "−273.15 °C는 어떤 특별한 온도일까요?",
      ],
      // EN: <p>The graph is a straight line with a positive gradient that does not pass through the origin (the volume is not zero at 0 °C). Extrapolated back, the line reaches zero volume at about −273 °C, which is absolute zero (0 K).</p>
      answer: "<p>그래프는 기울기가 양수이고 원점을 지나지 않는 직선이에요(0 °C에서 부피가 0이 아님). 거꾸로 외삽하면 직선은 약 −273 °C에서 부피 0에 닿고, 이 온도가 절대 영도(0 K)예요.</p>",
      markscheme: [
        // EN: Straight line with positive gradient / volume increases linearly with temperature, not passing through the origin (positive intercept on the volume axis).
        "기울기가 양수인 직선 / 부피가 온도에 따라 일차적으로(직선으로) 증가한다. 원점을 지나지 않는다(부피 축의 절편이 양수).",
        // EN: Extrapolates to zero volume at −273(.15) °C / absolute zero / 0 K.
        "−273(.15) °C / 절대 영도 / 0 K에서 부피 0으로 외삽된다.",
      ],
    },

    // ── s1-5-q027 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q027": {
      // EN: <p>A compound contains 52.2 % carbon, 13.1 % hydrogen and 34.7 % oxygen by mass. When 0.230 g of the compound is vaporised at 100.0 °C and 100 kPa, the vapour occupies 155 <span class="unit">cm3</span>.</p><p>Calculate the molar mass of the compound, in <span class="unit">g mol-1</span>. Then use the solution to check that you can also deduce its molecular formula.</p>
      stem: "<p>어떤 화합물은 질량으로 탄소 52.2 %, 수소 13.1 %, 산소 34.7 %를 포함해요. 이 화합물 0.230 g을 100.0 °C, 100 kPa에서 기화하면 증기가 155 <span class=\"unit\">cm3</span>를 차지해요.</p><p>이 화합물의 몰 질량을 <span class=\"unit\">g mol-1</span> 단위로 계산하시오 (calculate). 그다음 풀이를 보고 분자식도 추론할 수 있는지 확인해 보세요.</p>",
      hints: [
        // EN: The molar mass comes from the gas data alone: find n with the gas equation, then M = m ÷ n.
        "몰 질량은 기체 자료만으로 구할 수 있어요: 기체 방정식으로 n을 구한 다음, M = m ÷ n.",
        // EN: <span class="mono">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>
        "<span class=\"mono\">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>",
        // EN: For the formula: find the empirical formula from the percentages, then compare its mass with M.
        "분자식을 구하려면: 백분율에서 실험식을 구한 다음, 실험식의 질량을 M과 비교하세요.",
      ],
      // EN: <div class="worked__math">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class="worked__math">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class="worked__math">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>Molecular formula: in 100 g there are</p><div class="worked__math">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class="worked__math">divide by 2.169: C 2.00 : H 5.98 : O 1.00, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1, so the molecular formula is also <strong>C<sub>2</sub>H<sub>6</sub>O</strong>.</p>
      solution: "<div class=\"worked__math\">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class=\"worked__math\">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class=\"worked__math\">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>분자식: 100 g 속에 들어 있는 양은</p><div class=\"worked__math\">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class=\"worked__math\">2.169로 나누면: C 2.00 : H 5.98 : O 1.00, 따라서 실험식은 C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1이므로, 분자식도 <strong>C<sub>2</sub>H<sub>6</sub>O</strong>예요.</p>",
    },

    // ── s1-5-q028 · mcq · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q028": {
      // EN: <p>A gaseous hydrocarbon has the empirical formula <span class="chem">CH2</span>. A 1.40 g sample occupies 0.755 <span class="unit">dm3</span> at 91.0 °C and 100 kPa. What is the molecular formula of the hydrocarbon?</p>
      stem: "<p>어떤 기체 탄화수소의 실험식은 <span class=\"chem\">CH2</span>예요. 이 탄화수소 1.40 g이 91.0 °C, 100 kPa에서 0.755 <span class=\"unit\">dm3</span>를 차지해요. 이 탄화수소의 분자식은 무엇인가요?</p>",
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
        "조건이 STP가 아니므로, <span class=\"mono\">n = PV ÷ RT</span>로 양을 구하세요.",
        // EN: Then M = m ÷ n, and compare M with the mass of one CH<sub>2</sub> unit, 14.03 g mol<sup>−1</sup>.
        "그다음 M = m ÷ n을 구하고, M을 CH<sub>2</sub> 한 단위의 질량 14.03 g mol<sup>−1</sup>과 비교하세요.",
      ],
      // EN: <div class="worked__math">T = 91.0 + 273.15 = 364.15 K</div><div class="worked__math">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class="worked__math">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class="worked__math">56.11… ÷ 14.03 = 4.00, so the molecular formula is (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>
      solution: "<div class=\"worked__math\">T = 91.0 + 273.15 = 364.15 K</div><div class=\"worked__math\">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class=\"worked__math\">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class=\"worked__math\">56.11… ÷ 14.03 = 4.00, 따라서 분자식은 (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>",
      misconception: {
        // EN (option A): A molar mass of about 14 g mol<sup>−1</sup> comes from putting 91.0 into the equation as the temperature. Convert to kelvin first: 91.0 °C = 364.15 K.
        "0": "몰 질량이 약 14 g mol<sup>−1</sup>로 나오는 것은 온도에 91.0을 그대로 넣었기 때문이에요. 먼저 켈빈으로 바꾸세요: 91.0 °C = 364.15 K.",
        // EN (option B): The molar mass is about 56 g mol<sup>−1</sup>. Divide by the mass of one CH<sub>2</sub> unit (14.03 g mol<sup>−1</sup>), which gives 4 units, not 2.
        "1": "몰 질량은 약 56 g mol<sup>−1</sup>이에요. 이것을 CH<sub>2</sub> 한 단위의 질량(14.03 g mol<sup>−1</sup>)으로 나누면 2단위가 아니라 4단위가 나와요.",
        // EN (option C): You get 42 g mol<sup>−1</sup> if you use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount. That value applies only at STP, and this gas is at 91.0 °C. Use the gas equation.
        "2": "양을 구할 때 22.7 dm<sup>3</sup> mol<sup>−1</sup>을 쓰면 42 g mol<sup>−1</sup>이 나와요. 이 값은 STP에서만 쓸 수 있는데, 이 기체는 91.0 °C에 있어요. 기체 방정식을 쓰세요.",
      },
    },

    // ── s1-5-q029 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q029": {
      // EN: <p>A gas has a density of 1.25 <span class="unit">g dm-3</span> at 25.0 °C and 100 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>어떤 기체의 밀도가 25.0 °C, 100 kPa에서 1.25 <span class=\"unit\">g dm-3</span>예요. 이 기체의 몰 질량을 <span class=\"unit\">g mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: A density of 1.25 g dm<sup>−3</sup> means that 1.00 dm<sup>3</sup> of the gas has a mass of 1.25 g.
        "밀도가 1.25 g dm<sup>−3</sup>라는 것은 기체 1.00 dm<sup>3</sup>의 질량이 1.25 g이라는 뜻이에요.",
        // EN: Find the amount of gas in 1.00 dm<sup>3</sup> with <span class="mono">n = PV ÷ RT</span>, then use M = m ÷ n.
        "<span class=\"mono\">n = PV ÷ RT</span>로 기체 1.00 dm<sup>3</sup> 속의 양을 구한 다음, M = m ÷ n을 쓰세요.",
      ],
      // EN: <p>Take exactly 1.00 dm<sup>3</sup> of the gas. Its mass is 1.25 g.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class="worked__math">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>31.0 g mol<sup>−1</sup></strong>.</p>
      solution: "<p>기체를 정확히 1.00 dm<sup>3</sup>만큼 생각해요. 그 질량은 1.25 g이에요.</p><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class=\"worked__math\">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>유효 숫자 3자리로: <strong>31.0 g mol<sup>−1</sup></strong>.</p>",
    },

    // ── s1-5-q030 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q030": {
      // EN: <p>Sodium azide decomposes completely when heated:</p><p><span class="chem">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>Calculate the volume of nitrogen, in <span class="unit">dm3</span>, measured at 25.0 °C and 100 kPa, that is produced when 65.0 g of sodium azide decomposes.</p>
      stem: "<p>아자이드화 나트륨은 가열하면 완전히 분해돼요:</p><p><span class=\"chem\">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>아자이드화 나트륨 65.0 g이 분해될 때 생기는 질소의 부피를 25.0 °C, 100 kPa에서 측정한 값으로, <span class=\"unit\">dm3</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Start with the amount of sodium azide: <span class="mono">n = m ÷ M</span>, with M(NaN<sub>3</sub>) = 22.99 + 3(14.01).
        "아자이드화 나트륨의 양부터 구하세요: <span class=\"mono\">n = m ÷ M</span>, M(NaN<sub>3</sub>) = 22.99 + 3(14.01).",
        // EN: The equation says 2 mol of NaN<sub>3</sub> gives 3 mol of N<sub>2</sub>.
        "반응식에 따르면 NaN<sub>3</sub> 2 mol에서 N<sub>2</sub> 3 mol이 생겨요.",
        // EN: The gas is not at STP (25.0 °C), so use <span class="mono">V = nRT ÷ P</span>.
        "기체가 STP에 있지 않으므로(25.0 °C), <span class=\"mono\">V = nRT ÷ P</span>를 쓰세요.",
      ],
      // EN: <div class="worked__math">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class="worked__math">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class="worked__math">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>To 3 significant figures: <strong>37.2 dm<sup>3</sup></strong>. Using 22.7 dm<sup>3</sup> mol<sup>−1</sup> would give 34.0 dm<sup>3</sup>, which is wrong because the gas is not at STP.</p>
      solution: "<div class=\"worked__math\">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class=\"worked__math\">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class=\"worked__math\">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>유효 숫자 3자리로: <strong>37.2 dm<sup>3</sup></strong>. 22.7 dm<sup>3</sup> mol<sup>−1</sup>을 쓰면 34.0 dm<sup>3</sup>가 나오는데, 기체가 STP에 있지 않으므로 이것은 틀린 값이에요.</p>",
    },

    // ── s1-5-q032 · short · challenge · SL · Structure 1.5.2 · 3 marks
    "s1-5-q032": {
      // EN: <p>Helium boils at 4 K and ammonia boils at 240 K (both at 100 kPa). At 250 K and 100 kPa, the measured volume of 1 mol of helium agrees very closely with the value predicted by <span class="mono">PV = nRT</span>. The measured volume of 1 mol of ammonia does not agree as closely.</p><p>Explain this difference, referring to the assumptions of the ideal gas model.</p>
      stem: "<p>헬륨은 4 K에서, 암모니아는 240 K에서 끓어요(둘 다 100 kPa에서). 250 K, 100 kPa에서 헬륨 1 mol의 부피를 측정하면 <span class=\"mono\">PV = nRT</span>로 예측한 값과 매우 잘 맞아요. 암모니아 1 mol의 측정 부피는 그만큼 잘 맞지 않아요.</p><p>이상 기체 모형의 가정을 언급하여 이 차이를 설명하시오 (explain).</p>",
      hints: [
        // EN: What does a boiling point tell you about the forces between particles?
        "끓는점은 입자 사이의 힘에 대해 무엇을 알려 줄까요?",
        // EN: How far above its own boiling point is each gas at 250 K?
        "250 K에서 각 기체는 자기 끓는점보다 얼마나 높은 온도에 있을까요?",
      ],
      // EN: <p>The much higher boiling point of ammonia shows that the intermolecular forces between ammonia molecules are much stronger than those between helium atoms. The ideal gas model assumes there are no intermolecular forces, so this assumption is less valid for ammonia. At 250 K ammonia is only just above its boiling point, so its particles are moving slowly enough for these forces to be significant, whereas helium is far above its boiling point and its very weak forces are negligible.</p>
      answer: "<p>암모니아의 끓는점이 훨씬 높다는 것은 암모니아 분자 사이의 분자 간 힘이 헬륨 원자 사이의 힘보다 훨씬 강하다는 뜻이에요. 이상 기체 모형은 분자 간 힘이 없다고 가정하므로, 이 가정은 암모니아에 덜 들어맞아요. 250 K에서 암모니아는 끓는점보다 겨우 조금 높으므로, 입자가 충분히 느리게 움직여서 이 힘이 커져요. 반면 헬륨은 끓는점보다 훨씬 높은 온도에 있고, 매우 약한 힘은 무시할 수 있어요.</p>",
      markscheme: [
        // EN: Ammonia has (much) stronger intermolecular forces than helium (shown by its higher boiling point).
        "암모니아는 헬륨보다 분자 간 힘이 (훨씬) 강하다(더 높은 끓는점이 보여 줌).",
        // EN: The ideal gas model assumes no intermolecular forces (and negligible particle volume), so the assumption is less valid for ammonia.
        "이상 기체 모형은 분자 간 힘이 없다고(그리고 입자 부피는 무시할 수 있다고) 가정하므로, 이 가정은 암모니아에 덜 들어맞는다.",
        // EN: 250 K is a low temperature for ammonia / close to its boiling point, so its particles are slow enough for the forces to be significant; helium is far above its boiling point so its forces are negligible.
        "250 K는 암모니아에게 낮은 온도이다 / 끓는점에 가깝다. 그래서 입자가 충분히 느려서 힘이 커진다. 헬륨은 끓는점보다 훨씬 높으므로 힘을 무시할 수 있다.",
      ],
    },

    // ── s1-5-q033 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q033": {
      // EN: <p>In dry air, 0.934 % of the particles are argon atoms. This means 0.934 % of the total amount of gas, in mol, is argon. A 2.00 <span class="unit">dm3</span> flask is filled with dry air at 20.0 °C and 101 kPa. Calculate the mass of argon in the flask, in g.</p>
      stem: "<p>건조한 공기에서 입자의 0.934 %가 아르곤 원자예요. 즉 전체 기체의 양(mol)의 0.934 %가 아르곤이에요. 2.00 <span class=\"unit\">dm3</span> 플라스크를 20.0 °C, 101 kPa의 건조한 공기로 채워요. 플라스크 속 아르곤의 질량을 g 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: First find the total amount of gas in the flask with <span class="mono">n = PV ÷ RT</span>.
        "먼저 <span class=\"mono\">n = PV ÷ RT</span>로 플라스크 속 기체의 전체 양을 구하세요.",
        // EN: 0.934 % of that amount is argon: multiply by 0.00934.
        "그 양의 0.934 %가 아르곤이에요: 0.00934를 곱하세요.",
        // EN: Then <span class="mono">m = n × M</span> with <i>A</i><sub>r</sub>(Ar) = 39.95.
        "그다음 <i>A</i><sub>r</sub>(Ar) = 39.95로 <span class=\"mono\">m = n × M</span>을 계산해요.",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(air) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class="worked__math">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class="worked__math">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>To 3 significant figures: <strong>0.0309 g</strong>.</p>
      solution: "<div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">n(공기) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class=\"worked__math\">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class=\"worked__math\">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>유효 숫자 3자리로: <strong>0.0309 g</strong>.</p>",
    },

    // ── s1-5-q034 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q034": {
      // EN: <p>A rigid 5.00 <span class="unit">dm3</span> cylinder contains gas at 300 kPa and 20.0 °C. Some gas is released until the pressure falls to 180 kPa. The temperature is still 20.0 °C. Calculate the amount of gas, in mol, that was released.</p>
      stem: "<p>단단한 5.00 <span class=\"unit\">dm3</span> 실린더에 300 kPa, 20.0 °C의 기체가 들어 있어요. 압력이 180 kPa로 떨어질 때까지 기체를 일부 빼내요. 온도는 여전히 20.0 °C예요. 빠져나간 기체의 양을 mol 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: The amount of gas changes, so the combined gas law does not apply. Use <span class="mono">n = PV ÷ RT</span> before and after.
        "기체의 양이 변하므로 보일-샤를 법칙은 쓸 수 없어요. 빼내기 전과 후에 각각 <span class=\"mono\">n = PV ÷ RT</span>를 쓰세요.",
        // EN: Shortcut: V and T are the same before and after, so the amount released is <span class="mono">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>.
        "지름길: 전후에 V와 T가 같으므로, 빠져나간 양은 <span class=\"mono\">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>예요.",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(before) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class="worked__math">n(after) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class="worked__math">n(released) = 0.61574… − 0.36944… = 0.24629… mol</div><p>To 3 significant figures: <strong>0.246 mol</strong>.</p>
      solution: "<div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">n(전) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class=\"worked__math\">n(후) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class=\"worked__math\">n(빠져나감) = 0.61574… − 0.36944… = 0.24629… mol</div><p>유효 숫자 3자리로: <strong>0.246 mol</strong>.</p>",
    },

    // ── s1-5-q036 · numeric · challenge · SL · Structure 1.5.3 · 2 marks
    "s1-5-q036": {
      // EN: <p>A student changes the volume of a fixed mass of gas at a constant temperature of 25.0 °C and measures the pressure each time. A graph of pressure in kPa (vertical axis) against 1/volume in <span class="unit">dm-3</span> (horizontal axis) is a straight line through the origin. Its gradient is 62.0 <span class="unit">kPa dm3</span>.</p><p>Calculate the amount of gas, in mol.</p>
      stem: "<p>한 학생이 25.0 °C의 일정한 온도에서 일정한 질량의 기체의 부피를 바꾸면서 매번 압력을 측정해요. kPa 단위의 압력(세로축)과 <span class=\"unit\">dm-3</span> 단위의 1/부피(가로축)의 그래프는 원점을 지나는 직선이에요. 기울기는 62.0 <span class=\"unit\">kPa dm3</span>예요.</p><p>기체의 양을 mol 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Write <span class="mono">PV = nRT</span> as P = (something) × (1/V). The “something” is the gradient.
        "<span class=\"mono\">PV = nRT</span>를 P = (무언가) × (1/V) 꼴로 쓰세요. 그 “무언가”가 기울기예요.",
        // EN: The gradient is nRT, so <span class="mono">n = gradient ÷ RT</span>. Use T in kelvin.
        "기울기는 nRT이므로 <span class=\"mono\">n = gradient ÷ RT</span>예요. T는 켈빈으로 쓰세요.",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>, P = nRT × (1/V). So a graph of P against 1/V has gradient nRT.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = gradient ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>To 3 significant figures: <strong>0.0250 mol</strong>. kPa × dm<sup>3</sup> = J, so the units match R.</p>
      solution: "<p><span class=\"mono\">PV = nRT</span>에서 P = nRT × (1/V)예요. 따라서 P와 1/V의 그래프의 기울기는 nRT예요.</p><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">n = 기울기 ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>유효 숫자 3자리로: <strong>0.0250 mol</strong>. kPa × dm<sup>3</sup> = J이므로, 단위가 R과 맞아요.</p>",
    },

  }
});
