/* lab-heating-curve.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-heating-curve.q', {
  questions: {

    // ── lab-heating-curve-q001 · mcq · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q001": {
      // EN: <p>A liquid is left to cool in air. Its cooling curve has a flat part. What is happening during the flat part?</p>
      stem: "<p>액체를 공기 중에 두어 식혀요. 냉각 곡선에 평평한 부분이 있어요. 평평한 부분에서는 무슨 일이 일어나고 있나요?</p>",
      options: [
        // EN: The liquid is freezing, and energy is released as attractions form between the particles.
        "액체가 응고하고 있고, 입자 사이에 인력이 생기면서 에너지가 방출돼요.",
        // EN: The liquid has stopped losing energy to the surroundings.
        "액체가 주변으로 에너지를 잃는 것을 멈췄어요.",
        // EN: The particles have stopped moving.
        "입자가 움직임을 멈췄어요.",
        // EN: The liquid is boiling, so its temperature cannot change.
        "액체가 끓고 있어서 온도가 변할 수 없어요.",
      ],
      hints: [
        // EN: On a cooling curve, which change of state happens as the temperature falls past the melting point?
        "냉각 곡선에서 온도가 녹는점을 지나 내려갈 때 어떤 상태 변화가 일어나나요?",
      ],
      // EN: <p>On the flat part the liquid is freezing. As particles are pulled into fixed positions, attractions form and energy is released. This replaces the energy lost to the air, so the average kinetic energy, and the temperature, stay constant until all the liquid has frozen.</p>
      solution: "<p>평평한 부분에서는 액체가 응고하고 있어요. 입자가 정해진 자리로 끌려가면서 인력이 생기고 에너지가 방출돼요. 이 에너지가 공기로 잃는 에너지를 채워 주므로, 액체가 모두 얼 때까지 평균 운동 에너지와 온도가 일정하게 유지돼요.</p>",
      misconception: {
        // EN (option B): Energy is still being lost to the surroundings. The loss is balanced by the energy released as the liquid freezes, so the temperature stays the same.
        "1": "에너지는 여전히 주변으로 빠져나가고 있어요. 잃는 에너지가 액체가 응고하면서 방출하는 에너지와 균형을 이루므로 온도가 그대로예요.",
        // EN (option C): Particles in a solid still vibrate. The average kinetic energy is constant on the flat part, not zero.
        "2": "고체 속 입자도 여전히 진동해요. 평평한 부분에서 평균 운동 에너지는 0이 아니라 일정해요.",
        // EN (option D): The sample is cooling, not being heated. A flat part on a cooling curve is a change from liquid to solid (or from gas to liquid).
        "3": "시료는 가열되는 것이 아니라 식고 있어요. 냉각 곡선의 평평한 부분은 액체에서 고체로(또는 기체에서 액체로) 바뀌는 변화예요.",
      },
    },

    // ── lab-heating-curve-q002 · mcq · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q002": {
      // EN: <p>Stearic acid is heated in a water bath. Its temperature stays at about 69 °C while it melts. Which statement explains this?</p>
      stem: "<p>스테아르산을 물 중탕에서 가열해요. 스테아르산이 녹는 동안 온도가 약 69 °C로 유지돼요. 이것을 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: No energy is absorbed by the stearic acid while it melts.
        "스테아르산이 녹는 동안에는 에너지를 흡수하지 않아요.",
        // EN: The energy absorbed increases the average kinetic energy of the particles.
        "흡수한 에너지가 입자의 평균 운동 에너지를 높여요.",
        // EN: The energy absorbed is used to overcome the forces between the molecules.
        "흡수한 에너지가 분자 사이의 힘을 이겨 내는 데 쓰여요.",
        // EN: The energy absorbed breaks the covalent bonds inside the molecules.
        "흡수한 에너지가 분자 안의 공유 결합을 끊어요.",
      ],
      hints: [
        // EN: Temperature measures the average kinetic energy of the particles. If the temperature is constant, where is the energy going?
        "온도는 입자의 평균 운동 에너지의 척도예요. 온도가 일정하다면 에너지는 어디로 가고 있을까요?",
      ],
      // EN: <p>The energy absorbed is used to overcome the intermolecular forces that hold the molecules in fixed positions. This increases their potential energy. The average kinetic energy does not change, so the temperature stays constant.</p>
      solution: "<p>흡수한 에너지는 분자를 정해진 자리에 붙잡아 두는 분자 간 힘을 이겨 내는 데 쓰여요. 그러면 분자의 퍼텐셜 에너지가 커져요. 평균 운동 에너지는 변하지 않으므로 온도가 일정하게 유지돼요.</p>",
      misconception: {
        // EN (option A): Energy is still flowing in from the hotter water bath. It goes into the change of state instead of raising the temperature.
        "0": "더 뜨거운 물 중탕에서 에너지는 계속 들어오고 있어요. 그 에너지는 온도를 높이는 대신 상태 변화에 쓰여요.",
        // EN (option B): If the average kinetic energy increased, the temperature would rise. On the flat part it does not.
        "1": "평균 운동 에너지가 커진다면 온도가 올라갈 거예요. 평평한 부분에서는 그렇지 않아요.",
        // EN (option D): Melting is a physical change. The molecules stay whole: only the attractions between molecules are overcome.
        "3": "녹는 것은 물리 변화예요. 분자는 그대로 있고, 분자 사이의 인력만 극복돼요.",
      },
    },

    // ── lab-heating-curve-q003 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q003": {
      // EN: <p>A student reads the freezing point of a sample as 68.5 °C. What is this temperature in kelvin? Give your answer to one decimal place.</p>
      stem: "<p>한 학생이 시료의 어는점을 68.5 °C로 읽었어요. 이 온도는 켈빈으로 얼마인가요? 소수점 아래 1자리까지 답하세요.</p>",
      hints: [
        // EN: Add 273.15 to a temperature in °C to get kelvin.
        "°C 온도에 273.15를 더하면 켈빈이 돼요.",
      ],
      // EN: <div class="worked__math"><i>T</i> = 68.5 + 273.15 = 341.65 K</div><p>To one decimal place: <strong>341.7 K</strong> (341.6 K is also accepted, since 341.65 sits on the rounding boundary).</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 68.5 + 273.15 = 341.65 K</div><p>소수점 아래 1자리까지: <strong>341.7 K</strong> (341.65는 반올림 경계에 있으므로 341.6 K도 인정해요).</p>",
    },

    // ── lab-heating-curve-q004 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q004": {
      // EN: <p>A thermometer reads to ±0.5 °C. The melting point of a sample is measured as 52.0 °C. Calculate the percentage uncertainty in this value.</p>
      stem: "<p>온도계는 ±0.5 °C까지 읽어요. 시료의 녹는점을 52.0 °C로 측정했어요. 이 값의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty ÷ measured value × 100.
        "백분율 불확도 = 절대 불확도 ÷ 측정값 × 100.",
      ],
      // EN: <div class="worked__math">% uncertainty = 0.5 ÷ 52.0 × 100 = 0.96 %</div><p>About <strong>1 %</strong>.</p>
      solution: "<div class=\"worked__math\">% 불확도 = 0.5 ÷ 52.0 × 100 = 0.96 %</div><p>약 <strong>1 %</strong>.</p>",
    },

    // ── lab-heating-curve-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Its heating curve has a flat part at its melting point. Explain, in terms of particles, why the temperature does not rise during this flat part.</p>
      stem: "<p>순수한 고체를 일정한 빠르기로 가열해요. 가열 곡선의 녹는점에 평평한 부분이 있어요. 이 평평한 부분에서 온도가 오르지 않는 이유를 입자로 설명하시오 (explain).</p>",
      hints: [
        // EN: Two marks: one for where the energy goes, one for what happens to the kinetic energy.
        "2점: 1점은 에너지가 어디로 가는지, 1점은 운동 에너지에 무슨 일이 일어나는지예요.",
      ],
      // EN: <p>The energy supplied is used to overcome the attractive forces between the particles (it increases their potential energy). The average kinetic energy of the particles stays the same, so the temperature is constant.</p>
      answer: "<p>공급된 에너지는 입자 사이의 인력을 이겨 내는 데 쓰여요(입자의 퍼텐셜 에너지를 높여요). 입자의 평균 운동 에너지는 그대로이므로 온도가 일정해요.</p>",
      markscheme: [
        // EN: Energy is used to overcome / weaken the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "에너지는 입자 사이의 인력을 이겨 내는 / 약하게 하는 데 쓰인다. 인정: 입자의 퍼텐셜 에너지를 증가시킨다.",
        // EN: The average kinetic energy of the particles does not change. Do not accept: “no energy is absorbed”.
        "입자의 평균 운동 에너지는 변하지 않는다. 불인정: “에너지를 흡수하지 않는다”.",
      ],
    },

    // ── lab-heating-curve-q006 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q006": {
      // EN: <p>A solid is heated in a water bath at 70 °C. The thermometer reads to ±0.5 °C.</p><div class="table-scroll"><table class="data"><caption>Heating data</caption><thead><tr><th scope="col" class="num">Time / s</th><th scope="col" class="num">Temperature / °C</th><th scope="col">What you see</th></tr></thead><tbody><tr><td class="num">0</td><td class="num">20.0</td><td>solid</td></tr><tr><td class="num">60</td><td class="num">36.5</td><td>solid</td></tr><tr><td class="num">120</td><td class="num">45.5</td><td>solid and liquid</td></tr><tr><td class="num">180</td><td class="num">46.0</td><td>solid and liquid</td></tr><tr><td class="num">240</td><td class="num">46.0</td><td>solid and liquid</td></tr><tr><td class="num">300</td><td class="num">46.5</td><td>solid and liquid</td></tr><tr><td class="num">360</td><td class="num">55.0</td><td>liquid</td></tr><tr><td class="num">420</td><td class="num">64.0</td><td>liquid</td></tr><tr><td class="num">480</td><td class="num">68.5</td><td>liquid</td></tr><tr><td class="num">540</td><td class="num">69.0</td><td>liquid</td></tr><tr><td class="num">600</td><td class="num">69.0</td><td>liquid</td></tr></tbody></table></div><p>What is the best value for the melting point of the solid?</p>
      stem: "<p>고체를 70 °C 물 중탕에서 가열해요. 온도계는 ±0.5 °C까지 읽어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>가열 자료</caption><thead><tr><th scope=\"col\" class=\"num\">시간 / s</th><th scope=\"col\" class=\"num\">온도 / °C</th><th scope=\"col\">관찰 결과</th></tr></thead><tbody><tr><td class=\"num\">0</td><td class=\"num\">20.0</td><td>고체</td></tr><tr><td class=\"num\">60</td><td class=\"num\">36.5</td><td>고체</td></tr><tr><td class=\"num\">120</td><td class=\"num\">45.5</td><td>고체와 액체</td></tr><tr><td class=\"num\">180</td><td class=\"num\">46.0</td><td>고체와 액체</td></tr><tr><td class=\"num\">240</td><td class=\"num\">46.0</td><td>고체와 액체</td></tr><tr><td class=\"num\">300</td><td class=\"num\">46.5</td><td>고체와 액체</td></tr><tr><td class=\"num\">360</td><td class=\"num\">55.0</td><td>액체</td></tr><tr><td class=\"num\">420</td><td class=\"num\">64.0</td><td>액체</td></tr><tr><td class=\"num\">480</td><td class=\"num\">68.5</td><td>액체</td></tr><tr><td class=\"num\">540</td><td class=\"num\">69.0</td><td>액체</td></tr><tr><td class=\"num\">600</td><td class=\"num\">69.0</td><td>액체</td></tr></tbody></table></div><p>이 고체의 녹는점으로 가장 알맞은 값은 무엇인가요?</p>",
      options: [
        // EN: 45.5 °C
        "45.5 °C",
        // EN: 46.0 °C
        "46.0 °C",
        // EN: 55.0 °C
        "55.0 °C",
        // EN: 69.0 °C
        "69.0 °C",
      ],
      hints: [
        // EN: Which readings were taken while solid and liquid were both present?
        "고체와 액체가 함께 있는 동안 읽은 값은 어느 것인가요?",
        // EN: Take the mean of those readings.
        "그 값들의 평균을 내세요.",
      ],
      // EN: <p>Solid and liquid are both present from 120 s to 300 s. The mean of those four readings is (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C. The flat part at 69.0 °C is the liquid reaching the bath temperature (70 °C), not a change of state.</p>
      solution: "<p>고체와 액체는 120 s에서 300 s까지 함께 있어요. 이 4개 값의 평균은 (45.5 + 46.0 + 46.0 + 46.5) ÷ 4 = 46.0 °C예요. 69.0 °C의 평평한 부분은 액체가 중탕 온도(70 °C)에 도달한 것이지 상태 변화가 아니에요.</p>",
      misconception: {
        // EN (option A): That is the first plateau reading. One reading is less reliable than the mean of all the readings on the flat part.
        "0": "이것은 평평한 구간의 첫 번째 값이에요. 값 하나는 평평한 부분의 모든 값의 평균보다 믿을 만하지 않아요.",
        // EN (option C): At 360 s the sample is all liquid and warming up. The melting point is where solid and liquid are present together.
        "2": "360 s에서 시료는 모두 액체이고 데워지고 있어요. 녹는점은 고체와 액체가 함께 있는 곳이에요.",
        // EN (option D): The last readings are flat because the liquid has reached the temperature of the water bath. Only one state is present, so this is not a change of state.
        "3": "마지막 값들이 평평한 것은 액체가 물 중탕의 온도에 도달했기 때문이에요. 한 가지 상태만 있으므로 상태 변화가 아니에요.",
      },
    },

    // ── lab-heating-curve-q007 · short · exam · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q007": {
      // EN: <p>On a cooling curve of lauric acid, the temperature falls to 42.0 °C while the sample is still all liquid. When crystals appear, it rises to 43.5 °C and stays there. Explain these observations.</p>
      stem: "<p>라우르산의 냉각 곡선에서, 시료가 아직 모두 액체인 동안 온도가 42.0 °C까지 내려가요. 결정이 나타나면 온도가 43.5 °C로 올라가 그대로 유지돼요. 이 관찰 결과를 설명하시오 (explain).</p>",
      hints: [
        // EN: Is a liquid always able to freeze as soon as it reaches its freezing point?
        "액체는 어는점에 도달하자마자 언제나 얼 수 있을까요?",
        // EN: Is freezing endothermic or exothermic?
        "응고는 흡열인가요, 발열인가요?",
      ],
      // EN: <p>The liquid supercooled: it cooled below its freezing point before crystals started to form. When crystals formed, energy was released as attractions formed between the molecules. This raised the temperature to the freezing point, 43.5 °C, where it stays while the rest of the liquid freezes.</p>
      answer: "<p>액체가 과냉각되었어요: 결정이 생기기 시작하기 전에 어는점보다 낮게 식었어요. 결정이 생길 때 분자 사이에 인력이 생기면서 에너지가 방출됐어요. 이 에너지가 온도를 어는점인 43.5 °C까지 올렸고, 나머지 액체가 어는 동안 온도가 그대로 유지돼요.</p>",
      markscheme: [
        // EN: The liquid has cooled below its freezing point without freezing / supercooled. Accept: crystals had not yet started to form.
        "액체가 얼지 않은 채 어는점보다 낮게 식었다 / 과냉각되었다. 인정: 결정이 아직 생기기 시작하지 않았다.",
        // EN: Freezing releases energy (attractions form between molecules), which raises the temperature to the freezing point.
        "응고는 에너지를 방출하며(분자 사이에 인력이 생긴다), 이 에너지가 온도를 어는점까지 올린다.",
      ],
    },

    // ── lab-heating-curve-q008 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q008": {
      // EN: <p>A sample of stearic acid contains a small amount of another fatty acid as an impurity. How does the impurity affect the heating curve compared with that of pure stearic acid?</p>
      stem: "<p>스테아르산 시료에 다른 지방산이 불순물로 조금 들어 있어요. 순수한 스테아르산과 비교하면 불순물은 가열 곡선에 어떤 영향을 주나요?</p>",
      options: [
        // EN: The plateau is at a higher temperature and is perfectly flat.
        "평평한 구간이 더 높은 온도에 있고 완전히 평평해요.",
        // EN: The plateau is at a lower temperature and slopes upwards slightly.
        "평평한 구간이 더 낮은 온도에 있고 약간 위로 기울어요.",
        // EN: The plateau is at the same temperature but is longer.
        "평평한 구간이 같은 온도에 있지만 더 길어요.",
        // EN: There is no plateau at all.
        "평평한 구간이 전혀 없어요.",
      ],
      hints: [
        // EN: An impure solid melts over a range of temperatures. What does that look like on the curve?
        "불순한 고체는 일정한 온도 범위에 걸쳐 녹아요. 곡선에서는 어떻게 보일까요?",
      ],
      // EN: <p>An impure solid melts at a lower temperature, and over a range rather than at one temperature. The plateau is lower and slopes upwards slightly. This is one reason a measured melting point can be below the literature value.</p>
      solution: "<p>불순한 고체는 더 낮은 온도에서, 한 온도가 아니라 일정한 범위에 걸쳐 녹아요. 평평한 구간이 더 낮고 약간 위로 기울어요. 이것이 측정한 녹는점이 문헌값보다 낮을 수 있는 한 가지 이유예요.</p>",
      misconception: {
        // EN (option A): Impurities do not raise the melting point of a solid. They disturb the regular arrangement, so it melts at a lower temperature.
        "0": "불순물은 고체의 녹는점을 높이지 않아요. 규칙적인 배열을 흐트러뜨리므로 더 낮은 온도에서 녹아요.",
        // EN (option C): A small amount of impurity changes the melting temperature, not only the length of the plateau.
        "2": "불순물이 조금만 있어도 평평한 구간의 길이뿐 아니라 녹는 온도가 바뀌어요.",
        // EN (option D): A slightly impure solid still melts over a narrow range, so there is still a near-flat part.
        "3": "약간 불순한 고체도 좁은 범위에 걸쳐 녹으므로 거의 평평한 부분이 여전히 있어요.",
      },
    },

    // ── lab-heating-curve-q009 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q009": {
      // EN: <p>The temperature of a sample rises from 21.5 °C to 68.0 °C. Each reading has an uncertainty of ±0.5 °C. What is the absolute uncertainty, in °C, of the temperature rise?</p>
      stem: "<p>시료의 온도가 21.5 °C에서 68.0 °C로 올라가요. 각 측정값의 불확도는 ±0.5 °C예요. 온도 상승의 절대 불확도는 몇 °C인가요?</p>",
      hints: [
        // EN: The temperature rise is a difference of two readings. For a difference, add the absolute uncertainties.
        "온도 상승은 두 측정값의 차이예요. 차에서는 절대 불확도를 더해요.",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C</div><div class="worked__math">uncertainty = 0.5 + 0.5 = ±1.0 °C</div><p>So the rise is 46.5 ± 1.0 °C. The uncertainties add even though the values are subtracted.</p>
      solution: "<div class=\"worked__math\">Δ<i>T</i> = 68.0 − 21.5 = 46.5 °C</div><div class=\"worked__math\">불확도 = 0.5 + 0.5 = ±1.0 °C</div><p>따라서 온도 상승은 46.5 ± 1.0 °C예요. 값은 빼더라도 불확도는 더해요.</p>",
    },

    // ── lab-heating-curve-q010 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q010": {
      // EN: <p>A student’s thermometer reads 0.8 °C too low at every temperature. Which change to the method would remove this error?</p>
      stem: "<p>한 학생의 온도계는 모든 온도에서 0.8 °C 낮게 읽혀요. 방법을 어떻게 바꾸면 이 오차를 없앨 수 있나요?</p>",
      options: [
        // EN: Repeat the experiment three times and take the mean.
        "실험을 3번 되풀이하고 평균을 내요.",
        // EN: Take readings every 15 s instead of every 30 s.
        "30 s마다가 아니라 15 s마다 읽어요.",
        // EN: Place the thermometer in a mixture of ice and pure water, then correct every reading by the difference from 0 °C.
        "온도계를 얼음과 순수한 물의 혼합물에 넣은 다음, 0 °C와의 차이만큼 모든 측정값을 보정해요.",
        // EN: Read the thermometer at eye level.
        "눈높이에서 온도계를 읽어요.",
      ],
      hints: [
        // EN: Is this a random or a systematic error? Which kind is reduced by repeats?
        "이것은 우연 오차인가요, 계통 오차인가요? 반복하면 줄어드는 것은 어느 쪽인가요?",
      ],
      // EN: <p>This is a systematic error. It is removed by calibrating the thermometer against a known fixed point, such as ice and pure water at 0 °C, and correcting the readings.</p>
      solution: "<p>이것은 계통 오차예요. 0 °C의 얼음과 순수한 물처럼 알고 있는 고정점으로 온도계를 보정하고 측정값을 고치면 없어져요.</p>",
      misconception: {
        // EN (option A): A thermometer that always reads low gives a systematic error. Every repeat is low by the same amount, so the mean is low too.
        "0": "항상 낮게 읽히는 온도계는 계통 오차를 만들어요. 반복할 때마다 같은 양만큼 낮으므로 평균도 낮아요.",
        // EN (option B): More frequent readings help you see the plateau, but each reading is still 0.8 °C low.
        "1": "더 자주 읽으면 평평한 구간이 잘 보이지만, 측정값은 여전히 하나하나 0.8 °C 낮아요.",
        // EN (option D): Reading at eye level reduces parallax, a random error. It does not fix a scale that is shifted.
        "3": "눈높이에서 읽으면 우연 오차인 시차가 줄어요. 치우친 눈금을 고치지는 못해요.",
      },
    },

    // ── lab-heating-curve-q011 · short · challenge · SL · Structure 1.1.3 · 2 marks
    "lab-heating-curve-q011": {
      // EN: <p>Two students heat the same mass of stearic acid. Student A uses a water bath at 80 °C. Student B uses a bath at 95 °C. Student B’s plateau is shorter and slopes more. Explain why, and suggest why Student A’s method gives a more reliable melting point.</p>
      stem: "<p>두 학생이 같은 질량의 스테아르산을 가열해요. 학생 A는 80 °C 물 중탕을 써요. 학생 B는 95 °C 중탕을 써요. 학생 B의 평평한 구간이 더 짧고 더 기울어요. 그 이유를 설명하고 (explain), 학생 A의 방법이 더 믿을 만한 녹는점을 주는 이유를 제안하시오 (suggest).</p>",
      hints: [
        // EN: Think about the rate at which energy reaches the sample, and whether every part of the sample is at the same temperature.
        "에너지가 시료에 전달되는 빠르기와, 시료의 모든 부분이 같은 온도인지 생각해 보세요.",
      ],
      // EN: <p>The hotter bath transfers energy faster, so the solid melts in less time (a shorter plateau). The outside of the sample melts and warms up before the middle, so the sample is not at one temperature and the plateau slopes. Student A heats more slowly, so the whole sample stays close to the melting point and there are more readings on a flatter plateau.</p>
      answer: "<p>더 뜨거운 중탕은 에너지를 더 빨리 전달하므로 고체가 더 짧은 시간에 녹아요(평평한 구간이 짧음). 시료의 바깥쪽이 가운데보다 먼저 녹고 데워지므로 시료 전체가 한 온도가 아니고, 평평한 구간이 기울어요. 학생 A는 더 천천히 가열하므로 시료 전체가 녹는점 가까이에 머물고, 더 평평한 구간에서 더 많은 값을 읽을 수 있어요.</p>",
      markscheme: [
        // EN: Energy is transferred faster from the hotter bath, so melting takes less time / the plateau is shorter.
        "더 뜨거운 중탕에서 에너지가 더 빨리 전달되므로 녹는 시간이 짧다 / 평평한 구간이 짧다.",
        // EN: Temperature is not uniform: the outside melts and warms before the centre (so the plateau slopes). Slower heating gives more readings on a flatter plateau. Accept either point for the second mark.
        "온도가 고르지 않다: 바깥쪽이 가운데보다 먼저 녹고 데워진다 (그래서 평평한 구간이 기운다). 천천히 가열하면 더 평평한 구간에서 더 많은 값을 읽을 수 있다. 두 번째 점수는 둘 중 하나면 인정.",
      ],
    },

    // ── lab-heating-curve-q012 · mcq · challenge · SL · Structure 2.2.8 · 1 mark
    "lab-heating-curve-q012": {
      // EN: <p>Lauric acid, <span class="chem">C11H23COOH</span>, melts at 43.8 °C. Stearic acid, <span class="chem">C17H35COOH</span>, melts at 69.3 °C. Which is the best explanation for the higher melting point of stearic acid?</p>
      stem: "<p>라우르산 <span class=\"chem\">C11H23COOH</span>는 43.8 °C에서 녹아요. 스테아르산 <span class=\"chem\">C17H35COOH</span>는 69.3 °C에서 녹아요. 스테아르산의 녹는점이 더 높은 이유로 가장 알맞은 설명은 어느 것인가요?</p>",
      options: [
        // EN: Stearic acid molecules have stronger covalent bonds.
        "스테아르산 분자의 공유 결합이 더 강해요.",
        // EN: Stearic acid molecules are larger, with more electrons, so the London (dispersion) forces between them are stronger.
        "스테아르산 분자가 더 크고 전자가 더 많아서, 분자 사이의 런던 분산력이 더 강해요.",
        // EN: Stearic acid forms hydrogen bonds but lauric acid does not.
        "스테아르산은 수소 결합을 하지만 라우르산은 하지 않아요.",
        // EN: Stearic acid is an ionic compound.
        "스테아르산은 이온 결합 화합물이에요.",
      ],
      hints: [
        // EN: What is the difference between the two molecules? What kind of force depends on the size of a molecule?
        "두 분자의 차이는 무엇인가요? 분자의 크기에 따라 달라지는 힘은 어떤 종류인가요?",
      ],
      // EN: <p>The two acids differ only in the length of the hydrocarbon chain. The longer chain of stearic acid has more electrons, so the London (dispersion) forces between its molecules are stronger. More energy is needed to overcome them, so the melting point is higher.</p>
      solution: "<p>두 산은 탄화수소 사슬의 길이만 달라요. 스테아르산의 더 긴 사슬에는 전자가 더 많으므로 분자 사이의 런던 분산력이 더 강해요. 이를 이겨 내는 데 에너지가 더 많이 필요하므로 녹는점이 더 높아요.</p>",
      misconception: {
        // EN (option A): Melting does not break covalent bonds inside the molecules. It overcomes the forces between molecules.
        "0": "녹을 때 분자 안의 공유 결합은 끊어지지 않아요. 분자 사이의 힘을 이겨 내는 거예요.",
        // EN (option C): Both acids have the same –COOH group, so both form hydrogen bonds. The difference is in the length of the carbon chain.
        "2": "두 산 모두 같은 –COOH기가 있으므로 둘 다 수소 결합을 해요. 차이는 탄소 사슬의 길이에 있어요.",
        // EN (option D): Both are molecular compounds made of non-metals bonded covalently.
        "3": "둘 다 비금속 원소가 공유 결합으로 이루어진 분자 화합물이에요.",
      },
    },

    // ── lab-heating-curve-q013 · multi · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q013": {
      // EN: <p>Which of these are <strong>systematic</strong> errors in a melting point experiment? Select all that apply.</p>
      stem: "<p>녹는점 실험에서 <strong>계통</strong> 오차는 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: The sample contains an impurity.
        "시료에 불순물이 들어 있어요.",
        // EN: The reading is judged between two scale divisions, sometimes a little high and sometimes a little low.
        "눈금 두 칸 사이에서 값을 판단하는데, 때로는 조금 높게, 때로는 조금 낮게 읽어요.",
        // EN: The thermometer bulb is above the sample, in the air of the tube.
        "온도계 구부가 시료 위, 시험관 속 공기 중에 있어요.",
        // EN: The stopwatch is started a fraction of a second late on some readings and early on others.
        "어떤 측정에서는 초시계를 아주 조금 늦게, 다른 측정에서는 일찍 눌러요.",
      ],
      hints: [
        // EN: A systematic error moves every result in the same direction.
        "계통 오차는 모든 결과를 같은 방향으로 움직여요.",
      ],
      // EN: <p>An impurity always lowers the melting point, and a bulb in the air always reads the air rather than the sample: both shift the result one way, so both are systematic. Judging the scale and the reaction time scatter both ways, so they are random.</p>
      solution: "<p>불순물은 항상 녹는점을 낮추고, 공기 중의 구부는 항상 시료가 아니라 공기의 온도를 읽어요: 둘 다 결과를 한쪽으로 옮기므로 계통 오차예요. 눈금 판단과 반응 시간은 양쪽으로 흩어지므로 우연 오차예요.</p>",
      misconception: {
        // EN (option B): Judging between divisions scatters readings both ways. That is a random error.
        "1": "눈금 사이를 판단하면 측정값이 양쪽으로 흩어져요. 그것은 우연 오차예요.",
        // EN (option D): A reaction time that is sometimes late and sometimes early scatters the times both ways. That is random.
        "3": "반응 시간이 때로는 늦고 때로는 빠르면 시간이 양쪽으로 흩어져요. 그것은 우연 오차예요.",
      },
    },

    // ── lab-heating-curve-q014 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "lab-heating-curve-q014": {
      // EN: <p>A student measures the melting point of benzoic acid as 120.5 °C. The literature value is 122.4 °C. Calculate the percentage error.</p>
      stem: "<p>한 학생이 벤조산의 녹는점을 120.5 °C로 측정했어요. 문헌값은 122.4 °C예요. 백분율 오차를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Percentage error = |experimental − literature| ÷ literature × 100.
        "백분율 오차 = |실험값 − 문헌값| ÷ 문헌값 × 100.",
      ],
      // EN: <div class="worked__math">% error = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %</div><p>About <strong>1.6 %</strong>. With a ±0.5 °C thermometer the percentage uncertainty is 0.5 ÷ 120.5 × 100 = 0.4 %, which is smaller, so a systematic error such as an impurity is likely.</p>
      solution: "<div class=\"worked__math\">% 오차 = (122.4 − 120.5) ÷ 122.4 × 100 = 1.55 %</div><p>약 <strong>1.6 %</strong>. ±0.5 °C 온도계에서 백분율 불확도는 0.5 ÷ 120.5 × 100 = 0.4 %로 더 작으므로, 불순물 같은 계통 오차가 있을 가능성이 커요.</p>",
    },

  }
});
