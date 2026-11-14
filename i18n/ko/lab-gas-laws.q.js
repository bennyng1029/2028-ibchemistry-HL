/* lab-gas-laws.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-gas-laws.q', {
  questions: {

    // ── lab-gas-laws-q001 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q001": {
      // EN: <p>A student measures the pressure, <i>P</i>, of a fixed amount of air in a gas syringe at different volumes, <i>V</i>, at constant temperature. Which graph of the results is a straight line through the origin?</p>
      stem: "<p>한 학생이 온도가 일정할 때 기체 주사기 속 일정한 양의 공기의 압력 <i>P</i>를 여러 부피 <i>V</i>에서 재요. 결과를 나타낸 그래프 중 원점을 지나는 직선은 어느 것인가요?</p>",
      options: [
        // EN: <i>P</i> against <i>V</i>
        "<i>V</i>에 대한 <i>P</i>",
        // EN: <i>P</i> against 1/<i>V</i>
        "1/<i>V</i>에 대한 <i>P</i>",
        // EN: <i>PV</i> against <i>P</i>
        "<i>P</i>에 대한 <i>PV</i>",
        // EN: <i>P</i> against <i>V</i><sup>2</sup>
        "<i>V</i><sup>2</sup>에 대한 <i>P</i>",
      ],
      hints: [
        // EN: If <i>P</i> is inversely proportional to <i>V</i>, then <i>P</i> = <i>k</i> × (something). What is the something?
        "<i>P</i>가 <i>V</i>에 반비례하면 <i>P</i> = <i>k</i> × (무엇)이에요. 그 무엇은 무엇일까요?",
      ],
      // EN: <p>At constant temperature <i>PV</i> = <i>k</i>, so <i>P</i> = <i>k</i> × (1/<i>V</i>). A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin with gradient <i>k</i>.</p>
      solution: "<p>온도가 일정하면 <i>PV</i> = <i>k</i>이므로 <i>P</i> = <i>k</i> × (1/<i>V</i>)예요. 1/<i>V</i>에 대한 <i>P</i> 그래프는 기울기가 <i>k</i>이고 원점을 지나는 직선이에요.</p>",
      misconception: {
        // EN (option A): Pressure falls as volume rises, so this graph is a curve with a negative slope, not a straight line through the origin.
        "0": "부피가 커지면 압력이 작아지므로, 이 그래프는 원점을 지나는 직선이 아니라 기울기가 음수인 곡선이에요.",
        // EN (option C): <i>PV</i> is constant, so this graph is a horizontal straight line. It does not pass through the origin.
        "2": "<i>PV</i>가 일정하므로 이 그래프는 수평인 직선이에요. 원점을 지나지 않아요.",
        // EN (option D): There is no square in the relationship. Pressure is inversely proportional to volume itself.
        "3": "이 관계에는 제곱이 없어요. 압력은 부피 그 자체에 반비례해요.",
      },
    },

    // ── lab-gas-laws-q002 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q002": {
      // EN: <p>A sealed gas syringe is held in a water bath. The graph of the volume of the gas against temperature in °C is a straight line. The line of best fit passes through (20.0 °C, 61.2 <span class="unit">cm3</span>) and (80.0 °C, 73.8 <span class="unit">cm3</span>).</p><p>Estimate absolute zero from these data, in °C.</p>
      stem: "<p>막힌 기체 주사기를 수조에 넣어 두었어요. °C 온도에 대한 기체 부피 그래프는 직선이에요. 가장 잘 맞는 직선이 (20.0 °C, 61.2 <span class=\"unit\">cm3</span>)와 (80.0 °C, 73.8 <span class=\"unit\">cm3</span>)를 지나요.</p><p>이 자료로 절대 영도를 °C 단위로 어림하시오 (estimate).</p>",
      hints: [
        // EN: Find the gradient of the line first.
        "먼저 직선의 기울기를 구해요.",
        // EN: From (20.0 °C, 61.2 cm³), how far must the temperature fall for the volume to fall by 61.2 cm³?
        "(20.0 °C, 61.2 cm³)에서 부피가 61.2 cm³만큼 줄려면 온도가 얼마나 내려가야 할까요?",
      ],
      // EN: <div class="worked__math">gradient = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class="worked__math">fall in temperature for <i>V</i> = 0: 61.2 ÷ 0.210 = 291.4 °C</div><div class="worked__math">θ = 20.0 − 291.4 = −271 °C</div><p>M1 for the gradient, M2 for the answer. Accept answers from −270 °C to −273 °C.</p>
      solution: "<div class=\"worked__math\">기울기 = (73.8 − 61.2) ÷ (80.0 − 20.0) = 12.6 ÷ 60.0 = 0.210 cm<sup>3</sup> °C<sup>−1</sup></div><div class=\"worked__math\"><i>V</i> = 0이 되는 온도 하강: 61.2 ÷ 0.210 = 291.4 °C</div><div class=\"worked__math\">θ = 20.0 − 291.4 = −271 °C</div><p>M1은 기울기, M2는 답이에요. −270 °C부터 −273 °C까지의 답을 인정해요.</p>",
    },

    // ── lab-gas-laws-q003 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q003": {
      // EN: <p>A flask of air in a water bath is joined to a pressure sensor by a long plastic tube. The air in the tube stays at room temperature while the bath is heated from 0 °C to 90 °C. How does this affect the estimate of absolute zero found by extrapolating the graph of pressure against temperature in °C?</p>
      stem: "<p>수조 속 공기가 든 플라스크가 긴 플라스틱 관으로 압력 센서에 연결되어 있어요. 수조를 0 °C에서 90 °C까지 가열하는 동안 관 속 공기는 실온에 머물러요. °C 온도에 대한 압력 그래프를 외삽해서 구한 절대 영도 어림값에 이것은 어떤 영향을 주나요?</p>",
      options: [
        // EN: The estimate is lower (more negative) than the true value.
        "어림값이 참값보다 낮다(더 큰 음수).",
        // EN: The estimate is higher (less negative) than the true value.
        "어림값이 참값보다 높다(더 작은 음수).",
        // EN: There is no effect, because the amount of gas is constant.
        "기체의 양이 일정하므로 영향이 없다.",
        // EN: There is no effect, because only the gradient changes.
        "기울기만 바뀌므로 영향이 없다.",
      ],
      hints: [
        // EN: Does the pressure rise by more or by less than it would if all the air were heated?
        "모든 공기를 가열할 때보다 압력이 더 많이 올라갈까요, 덜 올라갈까요?",
        // EN: A shallower line through the same starting point meets the temperature axis where?
        "같은 시작점을 지나는 더 완만한 직선은 온도 축과 어디에서 만날까요?",
      ],
      // EN: <p>Some of the gas is not heated, so the pressure rises by less than expected. The gradient of the line is too small. Extended backwards from the same point, a shallower line meets the temperature axis further from 0 °C, so the estimate is more negative than −273 °C.</p>
      solution: "<p>기체 일부가 가열되지 않으므로 압력이 예상보다 덜 올라가요. 직선의 기울기가 너무 작아요. 같은 점에서 거꾸로 연장하면, 더 완만한 직선은 0 °C에서 더 먼 곳에서 온도 축과 만나므로 어림값이 −273 °C보다 더 큰 음수가 돼요.</p>",
      misconception: {
        // EN (option B): Think about the gradient. Part of the gas is not heated, so the pressure rises less than it should. A shallower line meets the temperature axis further to the left.
        "1": "기울기를 생각해 봐요. 기체 일부가 가열되지 않으므로 압력이 원래보다 덜 올라가요. 더 완만한 직선은 온도 축과 더 왼쪽에서 만나요.",
        // EN (option C): The amount is constant, but not all of the gas is at the bath temperature. That changes how much the pressure rises.
        "2": "양은 일정하지만, 모든 기체가 수조 온도에 있는 것은 아니에요. 그래서 압력이 올라가는 정도가 달라져요.",
        // EN (option D): The estimate of absolute zero comes from the gradient and the intercept together. A smaller gradient moves the point where the line meets the axis.
        "3": "절대 영도 어림값은 기울기와 절편을 함께 써서 구해요. 기울기가 작아지면 직선이 축과 만나는 점이 움직여요.",
      },
    },

    // ── lab-gas-laws-q004 · short · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q004": {
      // EN: <p>In the fixed-volume experiment, the student is told to stir the water and wait until the pressure reading is steady before each reading. Explain why, and state how the readings would be affected if the student did not wait while heating the bath.</p>
      stem: "<p>부피 일정 실험에서, 학생은 측정할 때마다 물을 젓고 압력 측정값이 안정될 때까지 기다리라는 지시를 받아요. 그 이유를 설명하고 (explain), 수조를 가열하면서 기다리지 않으면 측정값이 어떤 영향을 받는지 쓰시오 (state).</p>",
      hints: [
        // EN: Which is measured by the thermometer: the gas or the water?
        "온도계가 재는 것은 기체일까요, 물일까요?",
      ],
      // EN: <p>The gas inside the flask takes time to reach the temperature of the water, because heat must pass through the glass. If the student reads at once while heating, the gas is cooler than the thermometer reading, so the pressure recorded is too low for the temperature recorded.</p>
      answer: "<p>열이 유리를 통해 전달되어야 하므로, 플라스크 속 기체가 물의 온도에 이르려면 시간이 걸려요. 가열하면서 바로 읽으면 기체가 온도계 눈금보다 차가우므로, 기록한 압력이 기록한 온도에 비해 너무 낮아요.</p>",
      markscheme: [
        // EN: The gas (inside the flask) takes time to reach the temperature of the water / thermal equilibrium must be reached.
        "(플라스크 속) 기체가 물의 온도에 이르는 데 시간이 걸린다 / 열평형에 도달해야 한다.",
        // EN: Without waiting, the gas is cooler than the recorded temperature, so the pressure is too low (for each recorded temperature).
        "기다리지 않으면 기체가 기록한 온도보다 차가우므로, (기록한 각 온도에 대해) 압력이 너무 낮다.",
      ],
    },

    // ── lab-gas-laws-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q005": {
      // EN: <p>A student’s estimate of absolute zero is −259 °C. Calculate the percentage error, using −273 °C as the literature value.</p>
      stem: "<p>한 학생이 어림한 절대 영도는 −259 °C예요. 문헌값을 −273 °C로 하여 백분율 오차를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Percentage error = |experimental value − literature value| ÷ |literature value| × 100.
        "백분율 오차 = |실험값 − 문헌값| ÷ |문헌값| × 100.",
      ],
      // EN: <div class="worked__math">percentage error = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>
      solution: "<div class=\"worked__math\">백분율 오차 = |−259 − (−273)| ÷ 273 × 100 = 14 ÷ 273 × 100 = 5.1 %</div>",
    },

    // ── lab-gas-laws-q006 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "lab-gas-laws-q006": {
      // EN: <p>A gas syringe contains 60.0 <span class="unit">cm3</span> of air at 101.2 kPa. The plunger is pushed in slowly to 40.0 <span class="unit">cm3</span>. The temperature does not change and no gas escapes. Calculate the new pressure, in kPa.</p>
      stem: "<p>기체 주사기에 101.2 kPa의 공기 60.0 <span class=\"unit\">cm3</span>가 들어 있어요. 피스톤을 천천히 밀어 40.0 <span class=\"unit\">cm3</span>로 만들어요. 온도는 변하지 않고 기체도 새지 않아요. 새 압력을 kPa 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: At constant temperature and amount, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>. The volume units cancel, so you do not need to convert them.
        "온도와 양이 일정하면 <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>예요. 부피 단위는 약분되므로 바꿀 필요가 없어요.",
      ],
      // EN: <div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>The volume falls to two-thirds, so the pressure rises by a factor of 1.5.</p>
      solution: "<div class=\"worked__math\"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> = 101.2 × 60.0 ÷ 40.0 = 152 kPa</div><p>부피가 3분의 2로 줄었으므로 압력은 1.5배가 돼요.</p>",
    },

    // ── lab-gas-laws-q007 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q007": {
      // EN: <p>In an experiment to find how the pressure of a gas depends on its volume, which variables must be controlled?</p>
      stem: "<p>기체의 압력이 부피에 따라 어떻게 달라지는지 알아보는 실험에서 통제해야 하는 변인은 무엇인가요?</p>",
      options: [
        // EN: The temperature and the amount of gas
        "온도와 기체의 양",
        // EN: The pressure and the temperature
        "압력과 온도",
        // EN: The volume and the amount of gas
        "부피와 기체의 양",
        // EN: The temperature only
        "온도만",
      ],
      hints: [
        // EN: <i>PV</i> = <i>nRT</i>. Which quantities are not <i>P</i> or <i>V</i>?
        "<i>PV</i> = <i>nRT</i>. <i>P</i>나 <i>V</i>가 아닌 양은 무엇일까요?",
      ],
      // EN: <p><i>V</i> is the independent variable and <i>P</i> the dependent variable. In <i>PV</i> = <i>nRT</i>, the other two quantities, <i>n</i> and <i>T</i>, must be kept constant (<i>R</i> is a constant anyway). So the syringe must not leak and the temperature must not change.</p>
      solution: "<p><i>V</i>는 독립 변인이고 <i>P</i>는 종속 변인이에요. <i>PV</i> = <i>nRT</i>에서 나머지 두 양인 <i>n</i>과 <i>T</i>를 일정하게 유지해야 해요 (<i>R</i>은 원래 상수예요). 그래서 주사기에서 기체가 새면 안 되고 온도가 변하면 안 돼요.</p>",
      misconception: {
        // EN (option B): Pressure is the dependent variable here. It is what you measure, so it cannot be kept constant.
        "1": "여기서 압력은 종속 변인이에요. 측정하는 양이므로 일정하게 유지할 수 없어요.",
        // EN (option C): Volume is the independent variable. It is what you change on purpose.
        "2": "부피는 독립 변인이에요. 일부러 바꾸는 양이에요.",
        // EN (option D): If gas leaks out, the pressure falls for a reason that has nothing to do with the volume. The amount of gas must be kept constant too.
        "3": "기체가 새어 나가면 부피와 상관없는 이유로 압력이 떨어져요. 기체의 양도 일정하게 유지해야 해요.",
      },
    },

    // ── lab-gas-laws-q008 · short · challenge · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q008": {
      // EN: <p>In a pressure–volume experiment at constant room temperature, a student calculates <i>PV</i> for each reading. <i>PV</i> falls steadily from 5080 kPa <span class="unit">cm3</span> at 100 <span class="unit">cm3</span> to 4990 kPa <span class="unit">cm3</span> at 30 <span class="unit">cm3</span>. Suggest <strong>two</strong> reasons for this trend.</p>
      stem: "<p>실온이 일정한 압력–부피 실험에서, 한 학생이 측정값마다 <i>PV</i>를 계산해요. <i>PV</i>는 100 <span class=\"unit\">cm3</span>에서 5080 kPa <span class=\"unit\">cm3</span>부터 30 <span class=\"unit\">cm3</span>에서 4990 kPa <span class=\"unit\">cm3</span>까지 꾸준히 줄어요. 이런 경향의 이유를 <strong>두 가지</strong> 제안하시오 (suggest).</p>",
      hints: [
        // EN: <i>PV</i> = <i>nRT</i>. Which of <i>n</i> or <i>T</i> could have changed?
        "<i>PV</i> = <i>nRT</i>. <i>n</i>과 <i>T</i> 중 무엇이 바뀌었을 수 있을까요?",
        // EN: Is all of the trapped gas inside the syringe barrel?
        "가둔 기체가 모두 주사기 통 안에 있을까요?",
      ],
      // EN: <p>Gas may leak out at the joints when it is compressed to a high pressure, so the amount of gas falls. Also, the gas in the tube to the sensor is not included in the syringe reading; its volume is a bigger fraction of the total at small volumes, so the measured <i>V</i> is too small by a larger percentage and <i>PV</i> appears to fall.</p>
      answer: "<p>기체를 높은 압력으로 압축하면 이음매에서 기체가 새어 나가서 기체의 양이 줄 수 있어요. 또 센서로 가는 관 속 기체는 주사기 눈금에 포함되지 않아요. 부피가 작을 때는 이 부피가 전체에서 차지하는 비율이 더 크므로, 측정한 <i>V</i>가 더 큰 백분율만큼 너무 작아지고 <i>PV</i>가 줄어드는 것처럼 보여요.</p>",
      markscheme: [
        // EN: Gas leaks (out of the syringe or joints) at higher pressure, so the amount of gas decreases.
        "압력이 높을 때 기체가 (주사기나 이음매에서) 새어 나가서 기체의 양이 줄어든다.",
        // EN: The volume of gas in the connecting tube (or sensor) is not included in <i>V</i>, and it is a larger fraction of the total at small syringe volumes.
        "연결관(또는 센서) 속 기체의 부피가 <i>V</i>에 포함되지 않고, 주사기 부피가 작을 때 이 부피가 전체에서 차지하는 비율이 더 크다.",
        // EN: Accept: the temperature of the room fell during the experiment (readings at small volumes taken later).
        "인정: 실험하는 동안 실온이 내려갔다 (작은 부피에서의 측정을 나중에 했다).",
      ],
    },

    // ── lab-gas-laws-q009 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q009": {
      // EN: <p>A thermometer has an uncertainty of ±0.5 °C. A water bath is heated from 20.0 °C to 80.0 °C. Calculate the percentage uncertainty in the temperature change.</p>
      stem: "<p>온도계의 불확도는 ±0.5 °C예요. 수조를 20.0 °C에서 80.0 °C까지 가열해요. 온도 변화의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: The temperature change uses two readings. For a difference, add the absolute uncertainties.
        "온도 변화는 두 번 읽은 값으로 구해요. 차이에서는 절대 불확도를 더해요.",
      ],
      // EN: <div class="worked__math">Δθ = 80.0 − 20.0 = 60.0 °C, uncertainty = ±(0.5 + 0.5) = ±1.0 °C</div><div class="worked__math">percentage uncertainty = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>M1 for ±1.0 °C, M2 for 1.7 %.</p>
      solution: "<div class=\"worked__math\">Δθ = 80.0 − 20.0 = 60.0 °C, 불확도 = ±(0.5 + 0.5) = ±1.0 °C</div><div class=\"worked__math\">백분율 불확도 = 1.0 ÷ 60.0 × 100 = 1.7 %</div><p>M1은 ±1.0 °C, M2는 1.7 %예요.</p>",
    },

    // ── lab-gas-laws-q010 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "lab-gas-laws-q010": {
      // EN: <p>A sealed flask of air is heated at constant volume. Which statement explains why the pressure increases?</p>
      stem: "<p>공기가 든 막힌 플라스크를 부피가 일정한 상태로 가열해요. 압력이 커지는 이유를 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: The particles expand, so they hit the walls more often.
        "입자가 팽창해서 벽에 더 자주 부딪힌다.",
        // EN: The particles move faster, so they hit the walls more often and with more force.
        "입자가 더 빨리 움직여서 벽에 더 자주, 더 큰 힘으로 부딪힌다.",
        // EN: More particles are produced as the gas is heated.
        "기체를 가열하면 입자가 더 많이 생긴다.",
        // EN: The intermolecular forces between the particles become weaker.
        "입자 사이의 분자 간 힘이 약해진다.",
      ],
      hints: [
        // EN: What happens to the kinetic energy of the particles when the temperature rises?
        "온도가 올라가면 입자의 운동 에너지는 어떻게 될까요?",
      ],
      // EN: <p>At a higher temperature the particles have more kinetic energy and move faster. In the same volume they collide with the walls more frequently and with greater force, so the pressure is higher.</p>
      solution: "<p>온도가 높으면 입자의 운동 에너지가 커서 더 빨리 움직여요. 같은 부피에서 벽에 더 자주, 더 큰 힘으로 충돌하므로 압력이 높아요.</p>",
      misconception: {
        // EN (option A): Particles do not get bigger when heated. In the ideal gas model their volume is negligible anyway.
        "0": "입자는 가열해도 커지지 않아요. 게다가 이상 기체 모형에서는 입자의 부피를 무시해요.",
        // EN (option C): The flask is sealed. The number of particles stays the same.
        "2": "플라스크는 막혀 있어요. 입자 수는 그대로예요.",
        // EN (option D): The ideal gas model assumes there are no intermolecular forces at all. The rise in pressure comes from faster particles.
        "3": "이상 기체 모형은 분자 간 힘이 전혀 없다고 가정해요. 압력이 커지는 것은 입자가 더 빨라지기 때문이에요.",
      },
    },

    // ── lab-gas-laws-q011 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q011": {
      // EN: <p>The volume of a fixed amount of gas at constant pressure is measured at several temperatures. Graph I shows volume against temperature in K. Graph II shows the same data against temperature in °C. Which statement is correct?</p>
      stem: "<p>압력이 일정할 때 일정한 양의 기체의 부피를 여러 온도에서 재요. 그래프 I은 K 단위 온도에 대한 부피를 나타내요. 그래프 II는 같은 자료를 °C 단위 온도에 대해 나타내요. 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: Both graphs are straight lines through the origin.
        "두 그래프 모두 원점을 지나는 직선이다.",
        // EN: Graph I passes through the origin. Graph II meets the temperature axis at about −273 °C.
        "그래프 I은 원점을 지난다. 그래프 II는 약 −273 °C에서 온도 축과 만난다.",
        // EN: Graph II passes through the origin. Graph I meets the temperature axis at about 273 K.
        "그래프 II는 원점을 지난다. 그래프 I은 약 273 K에서 온도 축과 만난다.",
        // EN: Graph I is steeper than graph II.
        "그래프 I이 그래프 II보다 가파르다.",
      ],
      hints: [
        // EN: At what temperature would an ideal gas have zero volume? Write it in both units.
        "이상 기체의 부피가 0이 되는 온도는 몇 도일까요? 두 단위로 모두 써 봐요.",
      ],
      // EN: <p>Volume is proportional to the absolute temperature, so graph I is a straight line through the origin (0 K). Graph II is the same line moved along by 273, so it meets the axis at about −273 °C. The gradients are the same, because a kelvin and a degree Celsius are the same size.</p>
      solution: "<p>부피는 절대 온도에 비례하므로 그래프 I은 원점(0 K)을 지나는 직선이에요. 그래프 II는 같은 직선을 273만큼 옮긴 것이므로 약 −273 °C에서 축과 만나요. 1 켈빈과 1 섭씨도는 크기가 같으므로 기울기도 같아요.</p>",
      misconception: {
        // EN (option A): At 0 °C a gas still has a volume. So the line in °C cannot pass through the origin.
        "0": "0 °C에서도 기체는 부피가 있어요. 그래서 °C 그래프의 직선은 원점을 지날 수 없어요.",
        // EN (option C): It is the other way round. Zero volume is reached at 0 K, which is −273 °C.
        "2": "반대예요. 부피가 0이 되는 것은 0 K, 즉 −273 °C예요.",
        // EN (option D): A change of 1 K is the same size as a change of 1 °C. The two lines have the same gradient; one is just shifted along the axis.
        "3": "1 K의 변화는 1 °C의 변화와 크기가 같아요. 두 직선은 기울기가 같고, 하나가 축을 따라 옮겨졌을 뿐이에요.",
      },
    },

    // ── lab-gas-laws-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "lab-gas-laws-q012": {
      // EN: <p>A sealed flask of air reads 100.4 kPa at 20.0 °C. Assuming the volume and amount of gas are constant, calculate the pressure expected at 90.0 °C, in kPa.</p>
      stem: "<p>공기가 든 막힌 플라스크의 압력이 20.0 °C에서 100.4 kPa예요. 부피와 기체의 양이 일정하다고 가정하고, 90.0 °C에서 예상되는 압력을 kPa 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Pressure is proportional to the absolute temperature. Convert both temperatures to kelvin first.
        "압력은 절대 온도에 비례해요. 먼저 두 온도를 모두 켈빈으로 바꿔요.",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K; <i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class="worked__math"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>Using °C (100.4 × 90.0 ÷ 20.0 = 452 kPa) is the classic mistake. M1 for kelvin temperatures.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>1</sub> = 20.0 + 273.15 = 293.15 K; <i>T</i><sub>2</sub> = 90.0 + 273.15 = 363.15 K</div><div class=\"worked__math\"><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = 100.4 × 363.15 ÷ 293.15 = 124 kPa</div><p>°C를 쓰는 것(100.4 × 90.0 ÷ 20.0 = 452 kPa)이 대표적인 실수예요. M1은 켈빈 온도예요.</p>",
    },

    // ── lab-gas-laws-q013 · order · foundation · SL · Structure 1.5.3 · 2 marks
    "lab-gas-laws-q013": {
      // EN: <p>Put these steps of the fixed-volume experiment in a sensible order.</p>
      stem: "<p>부피 일정 실험의 단계를 알맞은 순서로 놓으세요.</p>",
      options: [
        // EN: Clamp a dry flask in a beaker of ice and water and join it to a pressure sensor.
        "마른 플라스크를 얼음물이 든 비커에 클램프로 고정하고 압력 센서에 연결한다.",
        // EN: Stir, wait until the readings are steady, and record the temperature and the pressure.
        "젓고, 측정값이 안정될 때까지 기다린 다음, 온도와 압력을 기록한다.",
        // EN: Raise the temperature of the bath by about 10 °C.
        "수조의 온도를 약 10 °C 올린다.",
        // EN: Repeat the readings up to about 90 °C.
        "약 90 °C까지 측정을 반복한다.",
        // EN: Plot pressure against temperature in °C and extrapolate the line of best fit to zero pressure.
        "°C 온도에 대한 압력 그래프를 그리고 가장 잘 맞는 직선을 압력 0까지 외삽한다.",
      ],
      hints: [
        // EN: You must be able to take the first reading before you change anything.
        "무엇이든 바꾸기 전에 첫 측정을 할 수 있어야 해요.",
      ],
      // EN: <p>Set up the flask at the lowest temperature, take a steady reading, raise the temperature, and repeat across the range. Only then plot the graph and extrapolate it.</p>
      solution: "<p>가장 낮은 온도에서 플라스크를 설치하고, 안정된 측정값을 얻고, 온도를 올리고, 범위 전체에 걸쳐 반복해요. 그런 다음에야 그래프를 그리고 외삽해요.</p>",
    },

    // ── lab-gas-laws-q014 · mcq · challenge · SL · Structure 1.5.3 · 1 mark
    "lab-gas-laws-q014": {
      // EN: <p>A student’s line of best fit meets the temperature axis at −270 °C. The steepest and shallowest lines that fit the error bars meet the axis at −259 °C and −281 °C. Which is the best conclusion? (Literature value: −273 °C.)</p>
      stem: "<p>한 학생의 가장 잘 맞는 직선은 −270 °C에서 온도 축과 만나요. 오차 막대에 맞는 가장 가파른 직선과 가장 완만한 직선은 −259 °C와 −281 °C에서 축과 만나요. 가장 알맞은 결론은 어느 것인가요? (문헌값: −273 °C)</p>",
      options: [
        // EN: Absolute zero = −270 ± 11 °C. The literature value lies within this range, so random error can explain the difference.
        "절대 영도 = −270 ± 11 °C. 문헌값이 이 범위 안에 있으므로 우연 오차로 차이를 설명할 수 있다.",
        // EN: Absolute zero = −270 ± 22 °C. The literature value lies within this range.
        "절대 영도 = −270 ± 22 °C. 문헌값이 이 범위 안에 있다.",
        // EN: Absolute zero = −270 ± 11 °C. The result is not −273 °C, so there must be a systematic error.
        "절대 영도 = −270 ± 11 °C. 결과가 −273 °C가 아니므로 반드시 계통 오차가 있다.",
        // EN: Absolute zero = −270 ± 0.5 °C, because the thermometer has an uncertainty of ±0.5 °C.
        "절대 영도 = −270 ± 0.5 °C. 온도계의 불확도가 ±0.5 °C이기 때문이다.",
      ],
      hints: [
        // EN: The uncertainty is half of the range between the worst-fit values.
        "불확도는 최악 적합 값들 사이 범위의 절반이에요.",
        // EN: Is the 3 °C difference bigger or smaller than the uncertainty?
        "3 °C의 차이는 불확도보다 클까요, 작을까요?",
      ],
      // EN: <p>Half the range: (−259 − (−281)) ÷ 2 = 11 °C, so the result is −270 ± 11 °C. The literature value, −273 °C, lies inside −281 °C to −259 °C. The difference is smaller than the uncertainty, so random error alone could explain it.</p>
      solution: "<p>범위의 절반: (−259 − (−281)) ÷ 2 = 11 °C이므로 결과는 −270 ± 11 °C예요. 문헌값 −273 °C는 −281 °C ~ −259 °C 안에 있어요. 차이가 불확도보다 작으므로 우연 오차만으로도 설명할 수 있어요.</p>",
      misconception: {
        // EN (option B): The whole range from −281 °C to −259 °C is 22 °C wide. The uncertainty is half of that, on either side of the best value.
        "1": "−281 °C부터 −259 °C까지의 전체 범위는 폭이 22 °C예요. 불확도는 그 절반으로, 가장 좋은 값의 양쪽으로 잡아요.",
        // EN (option C): A difference from the literature value does not prove a systematic error. Here the difference (3 °C) is smaller than the uncertainty (11 °C).
        "2": "문헌값과 차이가 난다고 계통 오차가 증명되지는 않아요. 여기서는 차이(3 °C)가 불확도(11 °C)보다 작아요.",
        // EN (option D): The uncertainty of an extrapolated value is far bigger than the uncertainty of one reading. A small error in the gradient is magnified over 270 °C.
        "3": "외삽한 값의 불확도는 측정값 하나의 불확도보다 훨씬 커요. 기울기의 작은 오차가 270 °C에 걸쳐 커져요.",
      },
    },

  }
});
