/* lab-heating-curve — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-heating-curve', {
  strings: {

    // page title (browser tab)
    "Lab 3 Heating and cooling curves | Structure Lab": "실험 3 가열 곡선과 냉각 곡선 | Structure Lab",

    // Heating and cooling curves > page header > p
    "Lab 3 · Structure 1.1": "실험 3 · Structure 1.1",

    // Heating and cooling curves > page header > h1
    "Heating and cooling curves": "가열 곡선과 냉각 곡선",

    // Heating and cooling curves > page header > span
    "What can a graph of temperature against time tell us about what the particles are doing when a substance changes state?": "물질의 상태가 변할 때, 시간에 따른 온도 그래프는 입자가 무엇을 하고 있는지에 대해 무엇을 알려 줄까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "This lab practises the skills behind Structure 1.1.2 and 1.1.3. All of it is SL and HL core. Tick each item when you can do it without help.": "이 실험에서는 Structure 1.1.2와 1.1.3의 바탕이 되는 기능을 연습해요. 모두 SL과 HL 공통 핵심 내용이에요. 도움 없이 할 수 있게 되면 하나씩 체크하세요.",

    // What you need to be able to do > checklist > span
    "Plan a heating or cooling experiment: name the independent, dependent and controlled variables, and give real safety precautions.": "가열 또는 냉각 실험을 계획할 수 있어요: 독립 변인, 종속 변인, 통제 변인을 말하고 실제 안전 수칙을 제시해요.",

    // What you need to be able to do > checklist > span
    "Record temperature and time in a table with headings, units and the uncertainty of each instrument.": "머리글, 단위, 각 기구의 불확도를 갖춘 표에 온도와 시간을 기록할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Plot a heating or cooling curve with labelled axes and a smooth line through the points.": "축 이름을 붙이고 점들을 지나는 매끄러운 선을 그려 가열 곡선이나 냉각 곡선을 그릴 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find a melting point (or freezing point) from the flat part of a curve, and convert it to kelvin.": "곡선의 평평한 부분에서 녹는점(또는 어는점)을 찾고 켈빈으로 바꿀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Explain the flat parts with particles: energy overcomes the forces between the particles, and the average kinetic energy stays the same.": "평평한 부분을 입자로 설명할 수 있어요: 에너지는 입자 사이의 힘을 이겨 내는 데 쓰이고, 평균 운동 에너지는 그대로예요.",

    // What you need to be able to do > checklist > span
    "Recognize supercooling on a cooling curve, and read the freezing point from the plateau, not from the dip.": "냉각 곡선에서 과냉각을 알아보고, 어는점을 움푹 팬 곳이 아니라 평평한 구간에서 읽을 수 있어요.",

    // What you need to be able to do > checklist > span
    "State the uncertainty of a temperature reading, work out a percentage uncertainty, and compare it with a percentage error.": "온도 측정값의 불확도를 말하고, 백분율 불확도를 구해 백분율 오차와 비교할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors in the method and suggest realistic improvements.": "방법에서 우연 오차와 계통 오차를 찾고, 현실적인 개선 방법을 제안할 수 있어요.",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "When you heat a solid at a steady rate, its temperature rises. Then, at the melting point, the temperature stops rising while the solid melts. Only when all of it has melted does the temperature start to rise again.": "고체를 일정한 빠르기로 가열하면 온도가 올라가요. 그러다 녹는점에서 고체가 녹는 동안에는 온도가 더 이상 오르지 않아요. 모두 녹은 다음에야 온도가 다시 올라가기 시작해요.",

    // The chemistry behind it > p
    "Temperature is a measure of the <dfn data-def=\"The average of the kinetic energies of all the particles in a sample. Temperature in kelvin is a measure of it.\">average kinetic energy</dfn> of the particles. On a sloping part of the curve, the energy supplied makes the particles move faster, so the temperature rises. On a flat part, the energy supplied is used to overcome the attractions between the particles. Their potential energy increases, but their average kinetic energy does not change, so the temperature stays constant.": "온도는 입자의 <dfn data-def=\"시료에 있는 모든 입자의 운동 에너지의 평균. 켈빈 온도는 이것의 척도예요.\">평균 운동 에너지 <span class=\"en-term\">(average kinetic energy)</span></dfn>의 척도예요. 곡선의 기울어진 부분에서는 공급된 에너지가 입자를 더 빨리 움직이게 하므로 온도가 올라가요. 평평한 부분에서는 공급된 에너지가 입자 사이의 인력을 이겨 내는 데 쓰여요. 입자의 퍼텐셜 에너지는 커지지만 평균 운동 에너지는 변하지 않으므로 온도가 일정하게 유지돼요.",

    // The chemistry behind it > data-def attribute
    "The average of the kinetic energies of all the particles in a sample. Temperature in kelvin is a measure of it.": "시료에 있는 모든 입자의 운동 에너지의 평균. 켈빈 온도는 이것의 척도예요.",

    // The chemistry behind it > p
    "A cooling curve is the same story backwards. As a liquid freezes, the particles are pulled into fixed positions by the attractive forces, and energy is released. That energy keeps the temperature constant until all the liquid has frozen.": "냉각 곡선은 같은 이야기를 거꾸로 한 거예요. 액체가 응고할 때 입자는 인력에 끌려 정해진 자리에 놓이고, 에너지가 방출돼요. 이 에너지 덕분에 액체가 모두 얼 때까지 온도가 일정하게 유지돼요.",

    // The chemistry behind it > p
    "For the full story, see <a href=\"../topics/s1-1.html#curves\">heating curves</a>, <a href=\"../topics/s1-1.html#changes\">changes of state</a> and <a href=\"../topics/s1-1.html#temperature\">temperature and kelvin</a> in Structure 1.1. Why stearic acid melts at a higher temperature than lauric acid is about <a href=\"../topics/s2-2.html#imf\">intermolecular forces</a> (Structure 2.2).": "자세한 내용은 Structure 1.1의 <a href=\"../topics/s1-1.html#curves\">가열 곡선</a>, <a href=\"../topics/s1-1.html#changes\">상태 변화</a>, <a href=\"../topics/s1-1.html#temperature\">온도와 켈빈</a>을 보세요. 스테아르산이 라우르산보다 높은 온도에서 녹는 이유는 <a href=\"../topics/s2-2.html#imf\">분자 간 힘</a>(Structure 2.2)과 관련이 있어요.",

    // The chemistry behind it > equation > dd
    "temperature in kelvin <span class=\"unit\">K</span>": "켈빈 온도 <span class=\"unit\">K</span>",

    // The chemistry behind it > equation > dd
    "temperature in degrees Celsius <span class=\"unit\">°C</span>": "섭씨 온도 <span class=\"unit\">°C</span>",

    // The chemistry behind it > p
    "A change of 1 K is the same size as a change of 1 °C. So a temperature <em>difference</em>, and its uncertainty, has the same number in both units.": "1 K의 변화는 1 °C의 변화와 크기가 같아요. 그래서 온도 <em>차이</em>와 그 불확도는 두 단위에서 숫자가 같아요.",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to find the melting point of a pure solid from its heating curve and its freezing point from its cooling curve, and to see how the flat parts depend on the rate of heating or cooling.": "<strong>목적:</strong> 순수한 고체의 가열 곡선에서 녹는점을, 냉각 곡선에서 어는점을 구하고, 평평한 부분이 가열이나 냉각의 빠르기에 따라 어떻게 달라지는지 알아봐요.",

    // Aim, variables and safety > table > caption
    "Variables": "변인",

    // Aim, variables and safety > table > th
    "Type": "유형",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "측정하거나 같게 유지하는 방법",

    // Aim, variables and safety > table > th
    "Independent": "독립 변인",

    // Aim, variables and safety > table > td
    "time": "시간",

    // Aim, variables and safety > table > td
    "stopwatch, reading at fixed intervals (for example every 30 s)": "초시계, 일정한 간격(예: 30 s마다)으로 읽기",

    // Aim, variables and safety > table > th
    "Dependent": "종속 변인",

    // Aim, variables and safety > table > td
    "temperature of the sample": "시료의 온도",

    // Aim, variables and safety > table > td
    "thermometer with its bulb in the middle of the sample": "구부가 시료 가운데에 오게 꽂은 온도계",

    // Aim, variables and safety > table > th
    "Controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "mass of sample": "시료의 질량",

    // Aim, variables and safety > table > td
    "weigh about 5 g on a balance (±0.01 g) for every run": "회차마다 저울(±0.01 g)로 약 5 g씩 달기",

    // Aim, variables and safety > table > td
    "temperature of the water bath (or hotplate setting)": "물 중탕의 온도 (또는 가열판 설정)",

    // Aim, variables and safety > table > td
    "check the bath with a second thermometer; stir it": "두 번째 온도계로 중탕 온도를 확인하고 저어 주기",

    // Aim, variables and safety > table > td
    "position of the thermometer": "온도계의 위치",

    // Aim, variables and safety > table > td
    "bulb fully covered by the sample, not touching the glass": "구부가 시료에 완전히 잠기고 유리에 닿지 않게 하기",

    // Aim, variables and safety > table > td
    "same thermometer and same tube": "같은 온도계와 같은 시험관",

    // Aim, variables and safety > table > td
    "use the same apparatus for heating and cooling runs": "가열과 냉각에 같은 기구 쓰기",

    // Aim, variables and safety > p
    "The rate of heating or cooling is not a variable you want to change during a run. In this lab you change it <em>between</em> runs to see its effect on the shape of the curve.": "가열이나 냉각의 빠르기는 한 회차 안에서 바꾸고 싶은 변인이 아니에요. 이 실험에서는 곡선 모양에 미치는 영향을 보려고 회차와 회차 <em>사이</em>에 바꿔요.",

    // Aim, variables and safety > h3
    "Equipment": "기구와 시약",

    // Aim, variables and safety > li
    "Boiling tube held in a clamp and stand, about 5 g of stearic acid or lauric acid": "스탠드와 클램프에 고정한 큰 시험관, 스테아르산 또는 라우르산 약 5 g",

    // Aim, variables and safety > li
    "Thermometer (−10 to 110 °C, 1 °C divisions) or a digital temperature probe and data logger": "온도계 (−10–110 °C, 1 °C 눈금) 또는 디지털 온도 센서와 데이터 로거",

    // Aim, variables and safety > li
    "250 cm<sup>3</sup> beaker as a water bath, a kettle or hotplate to provide hot water, a stopwatch": "물 중탕으로 쓸 250 cm<sup>3</sup> 비커, 뜨거운 물을 준비할 전기 주전자나 가열판, 초시계",

    // Aim, variables and safety > li
    "For water: crushed ice in a beaker on a hotplate, a stirring rod, and an ice–salt mixture for the cooling run": "물의 경우: 가열판 위 비커에 담은 잘게 부순 얼음, 젓개, 냉각용 얼음–소금 혼합물",

    // Aim, variables and safety > p
    "Wear eye protection. The water bath and the molten acids are hot enough to scald (up to about 95 °C): hold the boiling tube with a clamp or tongs, and let it cool before you touch it. Heat the acids in a water bath, never directly in a Bunsen flame: they would overheat, give off irritating fumes and could catch fire. Stearic acid and lauric acid irritate the eyes and skin, so avoid contact and wash off any spills. Never try to pull a thermometer out of the solid: it can snap. Re-melt the solid in the water bath first. When boiling water, add anti-bumping granules and keep your face away from the steam. An ice–salt mixture at −20 °C can cause cold burns, so do not hold it in your bare hand.": "보안경을 쓰세요. 물 중탕과 녹은 산은 데일 만큼 뜨거워요 (약 95 °C까지): 큰 시험관은 클램프나 집게로 잡고, 식은 다음에 만지세요. 산은 물 중탕으로 가열하고, 분젠 버너 불꽃으로 직접 가열하지 마세요: 너무 뜨거워져 자극적인 연기가 나고 불이 붙을 수 있어요. 스테아르산과 라우르산은 눈과 피부를 자극하므로 닿지 않게 하고, 쏟으면 씻어 내세요. 굳은 고체에서 온도계를 억지로 빼지 마세요: 부러질 수 있어요. 먼저 물 중탕에서 고체를 다시 녹이세요. 물을 끓일 때는 끓임쪽을 넣고 얼굴을 수증기에서 멀리 두세요. −20 °C의 얼음–소금 혼합물은 동상을 입힐 수 있으므로 맨손으로 잡지 마세요.",

    // Method > h2
    "Method": "방법",

    // Method > h3
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Heating curve": "가열 곡선",

    // Method > li
    "Put about 5 g of the solid in a dry boiling tube and push the thermometer into it so that the bulb is in the middle of the solid. <em>Why:</em> the bulb must measure the sample, not the air or the glass.": "마른 큰 시험관에 고체를 약 5 g 넣고, 온도계의 구부가 고체 가운데에 오도록 꽂아요. <em>이유:</em> 구부는 공기나 유리가 아니라 시료의 온도를 재야 해요.",

    // Method > li
    "Record the starting temperature at time 0.": "시간 0에서 처음 온도를 기록해요.",

    // Method > li
    "Clamp the tube in a water bath that is about 10–15 °C above the expected melting point, and start the stopwatch. <em>Why:</em> a bath close to the melting point heats the sample slowly and evenly, so the flat part is long and clear.": "예상 녹는점보다 약 10–15 °C 높은 물 중탕에 시험관을 고정하고 초시계를 켜요. <em>이유:</em> 녹는점에 가까운 중탕은 시료를 천천히, 고르게 가열하므로 평평한 부분이 길고 뚜렷해요.",

    // Method > li
    "Record the temperature every 30 s, and note what you see (solid, solid and liquid, liquid). <em>Why:</em> the observations tell you which flat part is a change of state.": "30 s마다 온도를 기록하고, 보이는 모습(고체, 고체와 액체, 액체)을 적어요. <em>이유:</em> 관찰한 내용으로 어느 평평한 부분이 상태 변화인지 알 수 있어요.",

    // Method > li
    "Once the solid has melted, gently stir with the thermometer and keep recording until the temperature has risen by about 10 °C.": "고체가 다 녹으면 온도계로 살살 저으면서 온도가 약 10 °C 더 오를 때까지 계속 기록해요.",

    // Method > h3
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Cooling curve": "냉각 곡선",

    // Method > li
    "Heat the tube until all the solid has melted and the liquid is about 15 °C above the melting point.": "고체가 모두 녹고 액체가 녹는점보다 약 15 °C 높아질 때까지 시험관을 가열해요.",

    // Method > li
    "Take the tube out of the bath, dry the outside, and clamp it in an empty beaker so that air surrounds it. Start the stopwatch. <em>Why:</em> the air slows the cooling, so the freezing plateau lasts several minutes.": "시험관을 중탕에서 꺼내 바깥을 닦고, 공기로 둘러싸이도록 빈 비커 안에 고정해요. 초시계를 켜요. <em>이유:</em> 공기가 냉각을 늦추므로 응고하는 평평한 구간이 몇 분 동안 이어져요.",

    // Method > li
    "Record the temperature every 30 s, stirring gently while the sample is still liquid. Note when the first crystals appear. <em>Why:</em> stirring keeps the temperature even and helps crystals start to form, which reduces supercooling.": "30 s마다 온도를 기록하고, 시료가 액체인 동안 살살 저어요. 처음 결정이 보이는 때를 적어요. <em>이유:</em> 저으면 온도가 고르게 유지되고 결정이 생기기 시작하는 것을 도와서 과냉각이 줄어요.",

    // Method > li
    "Stop when the temperature is about 10 °C below the freezing point.": "온도가 어는점보다 약 10 °C 낮아지면 멈춰요.",

    // Method > li
    "Plot temperature (y-axis) against time (x-axis) for each run and draw a smooth curve through the points.": "회차마다 시간(x축)에 따른 온도(y축)를 그리고, 점들을 지나는 매끄러운 곡선을 그려요.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > p
    "Choose a substance and an experiment, then press Start. The stopwatch runs faster than real time. Readings are taken at the interval you choose and go into the table and the graph. Every new run gives slightly different results, just as in a real lab.": "물질과 실험을 고른 다음 시작을 누르세요. 초시계는 실제보다 빠르게 가요. 고른 간격마다 측정값을 읽어 표와 그래프에 넣어요. 실제 실험처럼 새로 할 때마다 결과가 조금씩 달라요.",

    // Run the experiment > widget > data-title attribute
    "Heating and cooling rig": "가열·냉각 장치",

    // Run the experiment > widget > figcaption
    "The drawing shows the sample: the hatched part is solid and the plain part is liquid. Use “Find the flat parts” to list each stretch of readings taken while two states were present, with its mean, and any flat stretch at the end where the sample has reached the temperature of its surroundings. The model is simplified: each run has a small random thermometer error and, for the acids, a sample that is not perfectly pure.": "그림은 시료를 보여 줘요: 빗금 친 부분은 고체이고 무늬 없는 부분은 액체예요. “평평한 부분 찾기”를 쓰면 두 상태가 함께 있는 동안 읽은 측정값 구간과 그 평균, 그리고 시료가 주변 온도에 도달해 끝에서 평평해진 구간을 보여 줘요. 이 모형은 단순화한 것이에요: 회차마다 온도계에 작은 우연 오차가 있고, 산의 경우 시료가 완전히 순수하지 않아요.",

    // Run the experiment > h3
    "Runs to try": "해 볼 실험",

    // Run the experiment > li
    "Stearic acid, heating curve, gentle rate. Find the melting point.": "스테아르산, 가열 곡선, 완만한 빠르기. 녹는점을 구해요.",

    // Run the experiment > li
    "Stearic acid, cooling curve, slow rate. Is there a dip before the plateau? Compare the freezing point with the melting point.": "스테아르산, 냉각 곡선, 느린 빠르기. 평평한 구간 앞에 움푹 팬 곳이 있나요? 어는점을 녹는점과 비교해요.",

    // Run the experiment > li
    "Repeat run 1 at the fast rate. What happens to the length and the flatness of the plateau?": "1번 실험을 빠른 빠르기로 다시 해요. 평평한 구간의 길이와 평평함은 어떻게 되나요?",

    // Run the experiment > li
    "Water (ice), heating curve. You should see two flat parts. Which is melting and which is boiling?": "물(얼음), 가열 곡선. 평평한 부분이 2개 보일 거예요. 어느 것이 융해이고 어느 것이 끓음인가요?",

    // Run the experiment > li
    "Change to the digital probe and readings every 15 s. Does the plateau become easier to read?": "디지털 센서로 바꾸고 15 s마다 읽어요. 평평한 구간을 읽기가 더 쉬워지나요?",

    // Run the experiment > key idea > p
    "A flat part is a change of state only if two states are present together. At the end of a heating run the liquid also stops warming once it reaches the temperature of the water bath. That flat part is not a melting point. Your observations column tells the two apart.": "평평한 부분은 두 상태가 함께 있을 때만 상태 변화예요. 가열 실험 끝 무렵에는 액체도 물 중탕의 온도에 도달하면 더 이상 데워지지 않아요. 그 평평한 부분은 녹는점이 아니에요. 관찰 내용 열을 보면 둘을 구별할 수 있어요.",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > p
    "To find the melting point (or freezing point), find the flat part of the curve where two states are present. Take the mean of the readings on it. Do not include the readings before the plateau starts or after it ends.": "녹는점(또는 어는점)을 구하려면 곡선에서 두 상태가 함께 있는 평평한 부분을 찾아요. 그 위의 측정값의 평균을 내요. 평평한 구간이 시작되기 전이나 끝난 뒤의 측정값은 넣지 마세요.",

    // Processing the data > table > caption
    "Cooling stearic acid in air (readings every 30 s, thermometer ±0.5 °C)": "공기 중에서 스테아르산 식히기 (30 s마다 읽음, 온도계 ±0.5 °C)",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Time / s": "시간 / s",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Temperature / °C": "온도 / °C",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "What you see": "관찰 결과",

    // Processing the data > table > td
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "liquid": "액체",

    // Processing the data > table > td
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "crystals forming in liquid": "액체 속에서 결정이 생김",

    // Processing the data > table > td
    // widget string (assets/js/widgets-lab-heating-curve.js)
    "solid": "고체",

    // Processing the data > worked example > h3
    "The freezing point of stearic acid": "스테아르산의 어는점",

    // Processing the data > worked example > p
    "Use the table above. Find the freezing point of the sample in °C and in K. The literature value is 69.3 °C. Calculate the percentage error.": "위 표를 써요. 시료의 어는점을 °C와 K로 구하세요. 문헌값은 69.3 °C예요. 백분율 오차를 계산하시오.",

    // Processing the data > worked example > data-title attribute
    "Spot the supercooling": "과냉각 찾기",

    // Processing the data > worked example > p
    "The liquid cooled below its freezing point before crystals formed. Then the energy released as crystals formed warmed it back up.": "결정이 생기기 전에 액체가 어는점보다 낮게 식었어요. 그다음 결정이 생기면서 방출된 에너지가 액체를 다시 데웠어요.",

    // Processing the data > worked example > maths line
    "dip to 67.5 °C at 150 s, then up to 68.5 °C at 180 s": "150 s에 67.5 °C까지 내려갔다가 180 s에 68.5 °C로 올라감",

    // Processing the data > worked example > data-title attribute
    "Choose the plateau readings": "평평한 구간의 측정값 고르기",

    // Processing the data > worked example > p
    "The plateau is where liquid and solid are both present, from 180 s to 330 s. The dip at 150 s is not part of it.": "평평한 구간은 액체와 고체가 함께 있는 180 s에서 330 s까지예요. 150 s의 움푹 팬 곳은 여기에 들어가지 않아요.",

    // Processing the data > worked example > data-title attribute
    "Take the mean": "평균 내기",

    // Processing the data > worked example > p
    "A mean of several readings reduces the effect of random errors.": "여러 측정값의 평균을 내면 우연 오차의 영향이 줄어요.",

    // Processing the data > worked example > maths line
    "mean = (4 × 68.5 + 2 × 68.0) ÷ 6 = 410.0 ÷ 6 = 68.33 °C": "평균 = (4 × 68.5 + 2 × 68.0) ÷ 6 = 410.0 ÷ 6 = 68.33 °C",

    // Processing the data > worked example > data-title attribute
    "Convert to kelvin": "켈빈으로 바꾸기",

    // Processing the data > worked example > p
    "Add 273.15. The kelvin and the degree Celsius are the same size.": "273.15를 더해요. 켈빈과 섭씨 1도는 크기가 같아요.",

    // Processing the data > worked example > data-title attribute
    "Percentage error": "백분율 오차",

    // Processing the data > worked example > p
    "Compare with the literature value: |experimental − literature| ÷ literature × 100.": "문헌값과 비교해요: |실험값 − 문헌값| ÷ 문헌값 × 100.",

    // Processing the data > worked example > maths line
    "% error = (69.3 − 68.33) ÷ 69.3 × 100 = 1.39 %": "% 오차 = (69.3 − 68.33) ÷ 69.3 × 100 = 1.39 %",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "자료에 맞춰 반올림하기",

    // Processing the data > worked example > p
    "The thermometer reads to ±0.5 °C, so give the temperature to one decimal place.": "온도계는 ±0.5 °C까지 읽으므로 온도는 소수점 아래 1자리까지 나타내요.",

    // Processing the data > worked example > maths line
    "freezing point = <b>68.3 °C = 341.5 K</b>; % error = <b>1.4 %</b>": "어는점 = <b>68.3 °C = 341.5 K</b>, % 오차 = <b>1.4 %</b>",

    // Processing the data > worked example > p
    "68.3 °C (341.5 K), 1.4 % below the literature value.": "68.3 °C (341.5 K), 문헌값보다 1.4 % 낮아요.",

    // Processing the data > common mistake > p
    "Reading the freezing point from the lowest point of the dip (67.5 °C here) is a common error. The dip is supercooled liquid, which is not a stable state. The freezing point is the temperature of the plateau that follows.": "움푹 팬 곳의 가장 낮은 점(여기서는 67.5 °C)에서 어는점을 읽는 실수가 흔해요. 움푹 팬 곳은 과냉각된 액체로, 안정한 상태가 아니에요. 어는점은 그 뒤에 오는 평평한 구간의 온도예요.",

    // Processing the data > try it > p
    "A student heats lauric acid in a water bath. The readings on the flat part of the heating curve are 43.0, 43.0, 43.5, 43.5, 43.5 and 44.0 °C. The literature melting point of lauric acid is 43.8 °C. Calculate the percentage error in the student’s melting point.": "한 학생이 물 중탕에서 라우르산을 가열해요. 가열 곡선의 평평한 부분에서 읽은 값은 43.0, 43.0, 43.5, 43.5, 43.5, 44.0 °C예요. 라우르산의 문헌 녹는점은 43.8 °C예요. 학생이 구한 녹는점의 백분율 오차를 계산하시오.",

    // Processing the data > try it > li
    "First find the mean of the six plateau readings.": "먼저 평평한 구간에서 읽은 6개 값의 평균을 구하세요.",

    // Processing the data > try it > li
    "The mean is 43.42 °C. Now use (43.8 − mean) ÷ 43.8 × 100.": "평균은 43.42 °C예요. 이제 (43.8 − 평균) ÷ 43.8 × 100을 쓰세요.",

    // Processing the data > try it > maths line
    "mean = (2 × 43.0 + 3 × 43.5 + 44.0) ÷ 6 = 260.5 ÷ 6 = 43.42 °C": "평균 = (2 × 43.0 + 3 × 43.5 + 44.0) ÷ 6 = 260.5 ÷ 6 = 43.42 °C",

    // Processing the data > try it > maths line
    "% error = (43.8 − 43.42) ÷ 43.8 × 100 = 0.88 %": "% 오차 = (43.8 − 43.42) ÷ 43.8 × 100 = 0.88 %",

    // Processing the data > try it > p
    "About 0.9 %. The experimental value is a little low, which is what a slightly impure sample would give.": "약 0.9 %. 실험값이 조금 낮은데, 이는 시료가 약간 불순할 때 나오는 결과예요.",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > p
    "A glass thermometer with 1 °C divisions can be read to the nearest half division, so each reading is ±0.5 °C. A digital probe that shows one decimal place is ±0.1 °C. The stopwatch is about ±1 s, mostly from your reaction time, which is small compared with a 30 s interval.": "1 °C 눈금의 유리 온도계는 반 눈금까지 읽을 수 있으므로 측정값마다 ±0.5 °C예요. 소수점 아래 1자리까지 보여 주는 디지털 센서는 ±0.1 °C예요. 초시계는 약 ±1 s인데, 대부분 반응 시간 때문이며 30 s 간격에 비하면 작아요.",

    // Uncertainties > table > caption
    "Uncertainties for the stearic acid result": "스테아르산 결과의 불확도",

    // Uncertainties > table > th
    "Quantity": "양",

    // Uncertainties > table > th
    "Value": "값",

    // Uncertainties > table > th
    "How the uncertainty is found": "불확도를 구하는 방법",

    // Uncertainties > table > th
    "Freezing point": "어는점",

    // Uncertainties > table > td
    "the uncertainty of one reading (the readings vary by less than this)": "측정값 하나의 불확도 (측정값의 변동은 이보다 작아요)",

    // Uncertainties > table > th
    "Percentage uncertainty": "백분율 불확도",

    // Uncertainties > table > th
    "In kelvin": "켈빈으로",

    // Uncertainties > table > td
    "adding 273.15 does not change the absolute uncertainty": "273.15를 더해도 절대 불확도는 변하지 않아요",

    // Uncertainties > table > th
    "Depth of supercooling": "과냉각의 깊이",

    // Uncertainties > table > td
    "a difference of two readings: add the absolute uncertainties, 0.5 + 0.5": "두 측정값의 차이: 절대 불확도를 더해요, 0.5 + 0.5",

    // Uncertainties > p
    "Notice two things. In kelvin the percentage uncertainty is much smaller (0.5 ÷ 341.5 × 100 = 0.15 %), because the number is bigger but the absolute uncertainty is the same. And the depth of supercooling, 1.0 ± 1.0 °C, is no bigger than its uncertainty: a single run cannot show it clearly. A probe at ±0.1 °C would.": "두 가지를 눈여겨보세요. 켈빈으로 나타내면 백분율 불확도가 훨씬 작아요(0.5 ÷ 341.5 × 100 = 0.15 %). 숫자는 커졌지만 절대 불확도는 같기 때문이에요. 그리고 과냉각의 깊이 1.0 ± 1.0 °C는 불확도보다 크지 않아요: 한 번의 실험으로는 과냉각을 뚜렷하게 보일 수 없어요. ±0.1 °C 센서라면 보일 수 있어요.",

    // Uncertainties > p
    "The rules: for a sum or a difference, add the absolute uncertainties. For a product or a quotient, add the percentage uncertainties. This lab only needs the first rule.": "규칙: 합이나 차에서는 절대 불확도를 더해요. 곱이나 몫에서는 백분율 불확도를 더해요. 이 실험에는 첫 번째 규칙만 필요해요.",

    // Uncertainties > h3
    "Is the difference from the literature value real?": "문헌값과의 차이는 실제일까요?",

    // Uncertainties > p
    "Compare the percentage error with the percentage uncertainty.": "백분율 오차를 백분율 불확도와 비교해요.",

    // Uncertainties > li
    "<strong>Stearic acid:</strong> percentage error 1.4 % is larger than the percentage uncertainty 0.7 %. The difference cannot be explained by reading the thermometer alone. There must be a systematic error, such as an impure sample or a thermometer that reads low.": "<strong>스테아르산:</strong> 백분율 오차 1.4 %가 백분율 불확도 0.7 %보다 커요. 이 차이는 온도계 눈금 읽기만으로는 설명할 수 없어요. 불순한 시료나 낮게 읽히는 온도계 같은 계통 오차가 있는 게 분명해요.",

    // Uncertainties > li
    "<strong>Lauric acid (Try it):</strong> percentage error 0.9 % is smaller than the percentage uncertainty (0.5 ÷ 43.4 × 100 = 1.2 %). The result agrees with the literature value within the uncertainty of the measurement.": "<strong>라우르산 (직접 해 보기):</strong> 백분율 오차 0.9 %가 백분율 불확도(0.5 ÷ 43.4 × 100 = 1.2 %)보다 작아요. 결과는 측정의 불확도 안에서 문헌값과 일치해요.",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Give an absolute uncertainty to one significant figure, and quote the value to the same decimal place: 68.3 ± 0.5 °C, not 68.33 ± 0.5 °C. When asked whether random error explains a result, compare the percentage error with the percentage uncertainty, and say which is larger.": "절대 불확도는 유효 숫자 1자리로 나타내고, 값은 같은 소수 자리까지 써요: 68.33 ± 0.5 °C가 아니라 68.3 ± 0.5 °C. 결과를 우연 오차로 설명할 수 있는지 물으면, 백분율 오차를 백분율 불확도와 비교하고 어느 쪽이 더 큰지 말하세요.",

    // Evaluation: errors and improvements > data-toc attribute
    // Evaluation: errors and improvements > table > caption
    "Errors and improvements": "오차와 개선",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "<dfn data-def=\"Errors that scatter readings unpredictably above and below the true value. Repeating and averaging reduces their effect.\">Random errors</dfn> scatter readings both ways, so repeating and taking a mean reduces them. <dfn data-def=\"Errors that shift every reading in the same direction, for example a thermometer that always reads 0.5 °C low. Repeating does not reduce them.\">Systematic errors</dfn> push every reading the same way, so repeats do not help. You must change the method or the apparatus.": "<dfn data-def=\"측정값을 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.\">우연 오차 <span class=\"en-term\">(random errors)</span></dfn>는 측정값을 양쪽으로 흩어지게 하므로, 반복해서 평균을 내면 줄어요. <dfn data-def=\"모든 측정값을 같은 방향으로 치우치게 하는 오차. 예를 들어 항상 0.5 °C 낮게 읽히는 온도계. 반복해도 줄지 않아요.\">계통 오차 <span class=\"en-term\">(systematic errors)</span></dfn>는 모든 측정값을 같은 쪽으로 밀기 때문에 반복해도 소용없어요. 방법이나 기구를 바꿔야 해요.",

    // Evaluation: errors and improvements > data-def attribute
    "Errors that scatter readings unpredictably above and below the true value. Repeating and averaging reduces their effect.": "측정값을 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.",

    // Evaluation: errors and improvements > data-def attribute
    "Errors that shift every reading in the same direction, for example a thermometer that always reads 0.5 °C low. Repeating does not reduce them.": "모든 측정값을 같은 방향으로 치우치게 하는 오차. 예를 들어 항상 0.5 °C 낮게 읽히는 온도계. 반복해도 줄지 않아요.",

    // Evaluation: errors and improvements > table > th
    "Source of error": "오차 원인",

    // Evaluation: errors and improvements > table > th
    "Type and effect on the result": "종류와 결과에 미치는 영향",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "현실적인 개선 방법",

    // Evaluation: errors and improvements > table > td
    "Impurities in the sample (school-grade stearic acid contains other fatty acids)": "시료 속 불순물 (학교용 스테아르산에는 다른 지방산이 들어 있음)",

    // Evaluation: errors and improvements > table > td
    "Systematic. The melting point is lower than the literature value and the plateau slopes, because an impure solid melts over a range.": "계통. 불순한 고체는 일정한 범위에 걸쳐 녹으므로, 녹는점이 문헌값보다 낮고 평평한 구간이 기울어요.",

    // Evaluation: errors and improvements > table > td
    "Use a purer sample, or recrystallize it first. Report a melting range.": "더 순수한 시료를 쓰거나 먼저 재결정해요. 녹는점 범위를 보고해요.",

    // Evaluation: errors and improvements > table > td
    "Thermometer calibration offset": "온도계의 보정 오차",

    // Evaluation: errors and improvements > table > td
    "Systematic. Every reading is shifted by the same amount, so the melting point is too high or too low.": "계통. 모든 측정값이 같은 양만큼 치우치므로 녹는점이 너무 높거나 너무 낮아요.",

    // Evaluation: errors and improvements > table > td
    "Check the thermometer in a mixture of ice and pure water (0 °C) and correct the readings.": "얼음과 순수한 물의 혼합물(0 °C)로 온도계를 확인하고 측정값을 보정해요.",

    // Evaluation: errors and improvements > table > td
    "Heating or cooling too fast": "너무 빨리 가열하거나 냉각함",

    // Evaluation: errors and improvements > table > td
    "The outside of the sample changes state before the middle, so the plateau is short and sloped. The mean is harder to judge.": "시료의 바깥쪽이 가운데보다 먼저 상태가 변하므로 평평한 구간이 짧고 기울어요. 평균을 판단하기 어려워요.",

    // Evaluation: errors and improvements > table > td
    "Use a water bath only 10–15 °C above the melting point; cool in air, not in cold water; stir the bath.": "녹는점보다 10–15 °C만 높은 물 중탕을 써요. 찬물이 아니라 공기 중에서 식혀요. 중탕을 저어요.",

    // Evaluation: errors and improvements > table > td
    "Thermometer bulb not fully in the sample, or touching the glass": "온도계 구부가 시료에 완전히 잠기지 않았거나 유리에 닿음",

    // Evaluation: errors and improvements > table > td
    "Systematic. The reading follows the bath or the air, not the sample, so the plateau is unclear.": "계통. 측정값이 시료가 아니라 중탕이나 공기의 온도를 따라가므로 평평한 구간이 뚜렷하지 않아요.",

    // Evaluation: errors and improvements > table > td
    "Place the bulb in the middle of the sample and clamp the thermometer in place.": "구부를 시료 가운데에 두고 온도계를 클램프로 고정해요.",

    // Evaluation: errors and improvements > table > td
    "Supercooling on the cooling curve": "냉각 곡선의 과냉각",

    // Evaluation: errors and improvements > table > td
    "A dip below the freezing point. If the lowest reading is used, the freezing point is too low.": "어는점 아래로 움푹 팬 곳. 가장 낮은 측정값을 쓰면 어는점이 너무 낮아요.",

    // Evaluation: errors and improvements > table > td
    "Stir gently or add a seed crystal; read the plateau after the dip.": "살살 젓거나 씨결정을 넣어요. 움푹 팬 곳 뒤의 평평한 구간을 읽어요.",

    // Evaluation: errors and improvements > table > td
    "Reading the scale (parallax, judging half divisions)": "눈금 읽기 (시차, 반 눈금 판단)",

    // Evaluation: errors and improvements > table > td
    "Random. Readings scatter by about ±0.5 °C.": "우연. 측정값이 약 ±0.5 °C 흩어져요.",

    // Evaluation: errors and improvements > table > td
    "Read at eye level, take the mean of several plateau readings, or use a digital probe (±0.1 °C).": "눈높이에서 읽고, 평평한 구간에서 여러 번 읽어 평균을 내거나 디지털 센서(±0.1 °C)를 써요.",

    // Evaluation: errors and improvements > table > td
    "Readings too far apart (60 s)": "측정 간격이 너무 김 (60 s)",

    // Evaluation: errors and improvements > table > td
    "Few points on the plateau; the start and end of the plateau and any dip can be missed.": "평평한 구간의 점이 적어요. 평평한 구간의 시작과 끝, 움푹 팬 곳을 놓칠 수 있어요.",

    // Evaluation: errors and improvements > table > td
    "Take readings every 15 s, or use a data logger.": "15 s마다 읽거나 데이터 로거를 써요.",

    // Evaluation: errors and improvements > common mistake > p
    "“Human error” or “use more accurate equipment” earns no marks. Name the error, say which way it moves the result, and give an improvement that fixes that error.": "“사람의 실수”나 “더 정확한 기구 쓰기”는 점수를 받지 못해요. 오차의 이름을 말하고, 결과를 어느 쪽으로 움직이는지 말하고, 그 오차를 고치는 개선 방법을 제시하세요.",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "These questions are in the style of Paper 1B: they are built on the experiment you have just done. Work on paper first, then check.": "이 문제들은 Paper 1B 형식이에요: 방금 한 실험을 바탕으로 해요. 먼저 종이에 풀고 확인하세요.",

    // Exam practice > data-title attribute
    "Lab 3 exam practice": "실험 3 시험 대비 연습",

    // Exam practice > not needed for IB > p
    "You do not need to calculate the energy needed for each part of the curve, and you do not need specific or latent heat values. Energy calculations come in Reactivity 1.1. Phase diagrams are not in the course.": "곡선의 각 부분에 필요한 에너지를 계산하거나 비열, 잠열 값을 알 필요는 없어요. 에너지 계산은 Reactivity 1.1에서 나와요. 상평형 그림은 교육과정에 없어요.",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Stearic acid": "스테아르산",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle: water bath at about 80 °C": "완만하게: 약 80 °C 물 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: water bath at about 95 °C": "빠르게: 약 95 °C 물 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Slow: tube in an empty beaker (air)": "느리게: 빈 비커 속 시험관 (공기)",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: tube in a beaker of cold water": "빠르게: 찬물이 든 비커 속 시험관",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Lauric acid": "라우르산",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle: water bath at about 55 °C": "완만하게: 약 55 °C 물 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: water bath at about 70 °C": "빠르게: 약 70 °C 물 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Water (ice)": "물 (얼음)",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle: hotplate on a low setting": "완만하게: 가열판 약하게",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: hotplate on a high setting": "빠르게: 가열판 세게",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Slow: ice–salt bath at about −10 °C": "느리게: 약 −10 °C 얼음–소금 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Fast: ice–salt bath at about −20 °C": "빠르게: 약 −20 °C 얼음–소금 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Substance": "물질",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Experiment": "실험",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Rate": "빠르기",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Gentle": "완만하게",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Thermometer": "온도계",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Glass, 1 °C divisions (±0.5 °C)": "유리, 1 °C 눈금 (±0.5 °C)",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Digital probe (±0.1 °C)": "디지털 센서 (±0.1 °C)",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Reading every": "측정 간격",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "15 s": "15 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "30 s": "30 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "60 s": "60 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Clock speed": "시계 속도",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "10 × real time": "실제의 10배",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "30 × real time": "실제의 30배",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "60 × real time": "실제의 60배",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Start": "시작",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Run to the end": "끝까지 실행",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "New run": "새 실험",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Find the flat parts": "평평한 부분 찾기",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Time": "시간",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Readings": "측정값",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Flat parts": "평평한 부분",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Apparatus: a boiling tube of the sample with a thermometer, in a water bath or on a hotplate. The drawing shows how much of the sample is solid and how much is liquid.": "장치: 온도계를 꽂은 시료가 든 큰 시험관이 물 중탕이나 가열판 위에 있어요. 그림은 시료 중 고체와 액체가 각각 얼마인지 보여 줘요.",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Run finished": "실험 끝",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Pause": "일시 정지",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Continue": "계속",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "water": "물",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice forming in water": "물속에서 얼음이 생김",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice": "얼음",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice and water": "얼음과 물",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "solid and liquid": "고체와 액체",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "water, boiling": "물, 끓는 중",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "{s} s": "{s} s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "{T} °C": "{T} °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Press “Find the flat parts” when you have enough readings.": "측정값이 충분하면 “평평한 부분 찾기”를 누르세요.",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "No readings yet. Press Start.": "아직 측정값이 없어요. 시작을 누르세요.",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "No flat part yet: no two readings in a row were taken while two states were present.": "아직 평평한 부분이 없어요: 두 상태가 함께 있는 동안 연달아 읽은 측정값이 2개 이상 없어요.",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "boiling seen": "끓음이 보임",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "change of state seen": "상태 변화가 보임",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "one state only: the sample has reached the temperature of its surroundings": "한 가지 상태뿐: 시료가 주변 온도에 도달했어요",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "{a}–{b} s: mean {m} °C (readings {lo} to {hi} °C), {what}": "{a}–{b} s: 평균 {m} °C (측정값 {lo}–{hi} °C), {what}",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Hide the flat parts": "평평한 부분 숨기기",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Raw data: {name}, {mode}": "원자료: {name}, {mode}",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "heating": "가열",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "cooling": "냉각",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "±1 s": "±1 s",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "±0.5 °C": "±0.5 °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "±0.1 °C": "±0.1 °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "No readings yet.": "아직 측정값이 없어요.",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "readings": "측정값",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "mean {m} °C": "평균 {m} °C",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "lit. m.p.": "문헌 녹는점",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "lit. b.p.": "문헌 끓는점",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "Graph of temperature against time for the readings in the table": "표의 측정값으로 그린 시간에 따른 온도 그래프",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "hotplate": "가열판",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "boiling water": "끓는 물",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "water bath": "물 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "ice–salt bath": "얼음–소금 중탕",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "cold water": "찬물",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "air": "공기",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "around the tube: {what}": "시험관 주변: {what}",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "stopwatch": "초시계",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "thermometer": "온도계",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "sample": "시료",

    // widget string (assets/js/widgets-lab-heating-curve.js)
    "air pressure {p} kPa": "기압 {p} kPa",

  }
});
