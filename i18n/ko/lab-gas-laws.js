/* lab-gas-laws — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-gas-laws', {
  strings: {

    // page title (browser tab)
    "Lab 7 Investigating the gas laws | Structure Lab": "실험 7 기체 법칙 탐구 | Structure Lab",

    // Investigating the gas laws > page header > p
    "Lab 7 · Structure 1.5": "실험 7 · Structure 1.5",

    // Investigating the gas laws > page header > h1
    "Investigating the gas laws": "기체 법칙 탐구",

    // Investigating the gas laws > page header > span
    "What can measurements on a trapped sample of air tell us about how pressure, volume and temperature are linked, and is there a lowest possible temperature?": "가둬 둔 공기를 측정하면 압력, 부피, 온도가 어떻게 연결되어 있는지 알 수 있을까요? 그리고 가장 낮은 온도라는 것이 있을까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "These are practical skills. Tick each one when you can do it on your own.": "다음은 실험 기능이에요. 혼자서 할 수 있게 되면 하나씩 표시하세요.",

    // What you need to be able to do > checklist > span
    "Identify the independent, dependent and controlled variables in a gas experiment.": "기체 실험에서 독립 변인, 종속 변인, 통제 변인 찾기.",

    // What you need to be able to do > checklist > span
    "Record pressure, volume and temperature readings with their units and uncertainties.": "압력, 부피, 온도 측정값을 단위와 불확도와 함께 기록하기.",

    // What you need to be able to do > checklist > span
    "Test for inverse proportion by calculating <i>PV</i> or by plotting <i>P</i> against 1/<i>V</i>.": "<i>PV</i>를 계산하거나 1/<i>V</i>에 대한 <i>P</i> 그래프를 그려서 반비례인지 확인하기.",

    // What you need to be able to do > checklist > span
    "Plot a graph against temperature and draw a line of best fit.": "온도에 대한 그래프를 그리고 가장 잘 맞는 직선 긋기.",

    // What you need to be able to do > checklist > span
    "Extrapolate a straight line to estimate absolute zero.": "직선을 외삽해서 절대 영도 어림하기.",

    // What you need to be able to do > checklist > span
    "Estimate the uncertainty of an extrapolated value and compare it with the percentage error.": "외삽한 값의 불확도를 어림하고 백분율 오차와 비교하기.",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors and suggest realistic improvements.": "우연 오차와 계통 오차를 찾고 현실적인 개선 방법 제안하기.",

    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "Gas particles are always moving. They hit the walls of their container, and those collisions cause the pressure. For a <strong>fixed amount</strong> of an ideal gas, three relationships follow.": "기체 입자는 늘 움직여요. 입자들이 용기 벽에 부딪히고, 이 충돌이 압력을 만들어요. 이상 기체의 <strong>양이 일정하면</strong> 다음 세 가지 관계가 성립해요.",

    // The chemistry behind it > table > caption
    "Three relationships for a fixed amount of gas": "양이 일정한 기체의 세 가지 관계",

    // The chemistry behind it > table > th
    "Kept constant": "일정하게 유지하는 것",

    // The chemistry behind it > table > th
    "Relationship": "관계",

    // The chemistry behind it > table > th
    "Straight line through the origin": "원점을 지나는 직선",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "temperature": "온도",

    // The chemistry behind it > table > td
    "Pressure is inversely proportional to volume.": "압력은 부피에 반비례해요.",

    // The chemistry behind it > table > td
    "<i>P</i> against 1/<i>V</i>": "1/<i>V</i>에 대한 <i>P</i>",

    // The chemistry behind it > table > th
    "volume": "부피",

    // The chemistry behind it > table > td
    "Pressure is proportional to the absolute temperature.": "압력은 절대 온도에 비례해요.",

    // The chemistry behind it > table > td
    "<i>P</i> against <i>T</i> in K": "K 단위 <i>T</i>에 대한 <i>P</i>",

    // The chemistry behind it > table > th
    // Aim, variables and safety > table > td
    // Uncertainties > table > th
    "pressure": "압력",

    // The chemistry behind it > table > td
    "Volume is proportional to the absolute temperature.": "부피는 절대 온도에 비례해요.",

    // The chemistry behind it > table > td
    "<i>V</i> against <i>T</i> in K": "K 단위 <i>T</i>에 대한 <i>V</i>",

    // The chemistry behind it > p
    "In the laboratory you measure temperature in °C. A graph of pressure (or volume) against temperature in °C is still a straight line, but it does not pass through the origin. If you extend the line backwards, it meets the temperature axis at about −273 °C. That is <dfn data-def=\"The lowest possible temperature, 0 K or −273.15 °C. An ideal gas would have zero pressure and zero volume there.\">absolute zero</dfn>, 0 K. Extending a line beyond your data like this is called <dfn data-def=\"Extending a graph line beyond the range of the measured data to estimate a value.\">extrapolation</dfn>.": "실험실에서는 온도를 °C로 재요. °C 온도에 대한 압력(또는 부피) 그래프도 직선이지만, 원점을 지나지 않아요. 직선을 거꾸로 연장하면 약 −273 °C에서 온도 축과 만나요. 이것이 <dfn data-def=\"가장 낮은 온도로, 0 K 또는 −273.15 °C. 이상 기체는 이 온도에서 압력과 부피가 0이 돼요.\">절대 영도 <span class=\"en-term\">(absolute zero)</span></dfn>, 즉 0 K예요. 이처럼 자료 범위를 넘어 직선을 연장하는 것을 <dfn data-def=\"측정한 자료의 범위를 넘어 그래프 선을 연장해 값을 어림하는 것.\">외삽 <span class=\"en-term\">(extrapolation)</span></dfn>이라고 해요.",

    // The chemistry behind it > data-def attribute
    "The lowest possible temperature, 0 K or −273.15 °C. An ideal gas would have zero pressure and zero volume there.": "가장 낮은 온도로, 0 K 또는 −273.15 °C. 이상 기체는 이 온도에서 압력과 부피가 0이 돼요.",

    // The chemistry behind it > data-def attribute
    "Extending a graph line beyond the range of the measured data to estimate a value.": "측정한 자료의 범위를 넘어 그래프 선을 연장해 값을 어림하는 것.",

    // The chemistry behind it > p
    "The full story is on the topic page: <a href=\"../topics/s1-5.html#graphs\">gas-law graphs</a> and <a href=\"../topics/s1-5.html#pvnrt\">the ideal gas equation</a>.": "자세한 내용은 단원 페이지에 있어요: <a href=\"../topics/s1-5.html#graphs\">기체 법칙 그래프</a>와 <a href=\"../topics/s1-5.html#pvnrt\">이상 기체 방정식</a>.",

    // The chemistry behind it > key idea > p
    "All three relationships come from one equation, <i>PV</i> = <i>nRT</i>. Keep one of <i>P</i>, <i>V</i> and <i>T</i> (and <i>n</i>) fixed and the other two are proportional or inversely proportional, as long as <i>T</i> is in kelvin.": "세 관계는 모두 하나의 식 <i>PV</i> = <i>nRT</i>에서 나와요. <i>P</i>, <i>V</i>, <i>T</i> 중 하나와 <i>n</i>을 일정하게 두면 나머지 두 양은 비례하거나 반비례해요. 단, <i>T</i>는 켈빈 단위여야 해요.",

    // The chemistry behind it > not needed for IB > p
    "Books call these Boyle’s law, Charles’s law and the pressure law. The guide says the names of the gas laws will not be assessed. You need the relationships and their graphs, not the names.": "교과서에서는 이 관계들을 보일 법칙, 샤를 법칙, 압력 법칙이라고 불러요. IB 지침에 따르면 기체 법칙의 이름은 평가하지 않아요. 이름이 아니라 관계와 그래프를 알아야 해요.",

    // Aim, variables and safety > data-toc attribute
    "Aim, variables, safety": "목적, 변인, 안전",

    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> Part A: find how the pressure of a fixed amount of air changes with its volume at constant temperature. Part B: find how the pressure (at fixed volume) or the volume (at fixed pressure) changes with temperature, and use the graph to estimate absolute zero.": "<strong>목적.</strong> A 부분: 온도가 일정할 때 일정한 양의 공기의 압력이 부피에 따라 어떻게 변하는지 알아내요. B 부분: 압력(부피 일정) 또는 부피(압력 일정)가 온도에 따라 어떻게 변하는지 알아내고, 그래프로 절대 영도를 어림해요.",

    // Aim, variables and safety > table > caption
    "Variables": "변인",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    "Part A": "A 부분",

    // Aim, variables and safety > table > th
    "Part B, fixed volume": "B 부분, 부피 일정",

    // Aim, variables and safety > table > th
    "Part B, fixed pressure": "B 부분, 압력 일정",

    // Aim, variables and safety > table > th
    "independent": "독립 변인",

    // Aim, variables and safety > table > td
    "volume of the syringe": "주사기의 부피",

    // Aim, variables and safety > table > td
    "temperature of the water bath": "수조의 온도",

    // Aim, variables and safety > table > th
    "dependent": "종속 변인",

    // Aim, variables and safety > table > td
    "volume of the gas": "기체의 부피",

    // Aim, variables and safety > table > th
    "controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "temperature; amount of air (no leaks)": "온도; 공기의 양 (새지 않음)",

    // Aim, variables and safety > table > td
    "volume of the flask; amount of air (no leaks)": "플라스크의 부피; 공기의 양 (새지 않음)",

    // Aim, variables and safety > table > td
    "atmospheric pressure; amount of air (no leaks)": "대기압; 공기의 양 (새지 않음)",

    // Aim, variables and safety > h3
    "Equipment": "기구",

    // Aim, variables and safety > li
    "100 cm<sup>3</sup> gas syringe (±0.5 cm<sup>3</sup>), with a cap to seal the nozzle": "노즐을 막는 마개가 있는 100 cm<sup>3</sup> 기체 주사기 (±0.5 cm<sup>3</sup>)",

    // Aim, variables and safety > li
    "gas pressure sensor and data logger (±0.1 kPa, range up to about 210 kPa)": "기체 압력 센서와 데이터 로거 (±0.1 kPa, 약 210 kPa까지 측정)",

    // Aim, variables and safety > li
    "short, narrow plastic tube to join the syringe or flask to the sensor": "주사기나 플라스크를 센서에 연결하는 짧고 가는 플라스틱 관",

    // Aim, variables and safety > li
    "250 cm<sup>3</sup> borosilicate round-bottomed flask with a one-hole bung and glass tube": "구멍 하나 뚫린 고무마개와 유리관을 끼운 250 cm<sup>3</sup> 붕규산 유리 둥근 바닥 플라스크",

    // Aim, variables and safety > li
    "large beaker or electric water bath, kettle, ice, stirring rod": "큰 비커 또는 전기 수조, 전기 주전자, 얼음, 유리 막대",

    // Aim, variables and safety > li
    "thermometer, −10 °C to 110 °C (±0.5 °C)": "온도계, −10 °C ~ 110 °C (±0.5 °C)",

    // Aim, variables and safety > li
    "clamp stands, bosses and clamps": "스탠드, 클램프 홀더, 클램프",

    // Aim, variables and safety > p
    "Water near 90 °C scalds. Use an electric water bath or add kettle water slowly, never carry a full beaker of hot water, and clamp the flask so the bath cannot be knocked over. Wear eye protection: a sealed flask is above atmospheric pressure when hot, and a flask with a crack can break. Check the flask for cracks first, and never move a hot flask straight into ice water. Keep the data logger and any mains leads away from the water.": "90 °C 가까운 물은 화상을 입혀요. 전기 수조를 쓰거나 주전자 물을 천천히 넣고, 뜨거운 물이 가득 든 비커를 들고 다니지 마세요. 수조가 넘어지지 않도록 플라스크를 클램프로 고정하세요. 보안경을 쓰세요: 막힌 플라스크는 뜨거워지면 대기압보다 압력이 높아지고, 금이 간 플라스크는 깨질 수 있어요. 먼저 플라스크에 금이 갔는지 확인하고, 뜨거운 플라스크를 얼음물에 바로 옮기지 마세요. 데이터 로거와 전원선은 물에서 멀리 두세요.",

    // Method > h2
    "Method": "방법",

    // Method > h3
    "Part A: pressure and volume": "A 부분: 압력과 부피",

    // Method > li
    "Pull the plunger out to 50 cm<sup>3</sup>. Join the syringe to the pressure sensor with the shortest tube you have. <em>Why:</em> the air inside the tube is part of the trapped gas, but the syringe scale does not measure it.": "피스톤을 50 cm<sup>3</sup>까지 당겨요. 가장 짧은 관으로 주사기를 압력 센서에 연결해요. <em>이유:</em> 관 속 공기도 가둔 기체의 일부이지만, 주사기 눈금으로는 잴 수 없어요.",

    // Method > li
    "Test for leaks. Hold the plunger in at about 30 cm<sup>3</sup> for one minute. The pressure reading should not fall. <em>Why:</em> the amount of gas must stay constant.": "공기가 새는지 확인해요. 피스톤을 약 30 cm<sup>3</sup>에서 1분 동안 누르고 있어요. 압력 측정값이 떨어지지 않아야 해요. <em>이유:</em> 기체의 양이 일정해야 해요.",

    // Method > li
    "Move the plunger to a new volume. Wait about 30 seconds, then record the volume and the pressure. <em>Why:</em> pushing the plunger in quickly warms the gas a little. Waiting lets it return to room temperature.": "피스톤을 새 부피로 옮겨요. 약 30초 기다린 다음 부피와 압력을 기록해요. <em>이유:</em> 피스톤을 빨리 밀면 기체가 조금 데워져요. 기다리면 다시 실온으로 돌아와요.",

    // Method > li
    "Take readings from 25 cm<sup>3</sup> to 100 cm<sup>3</sup>, about every 10 cm<sup>3</sup>. Then repeat the readings, moving the plunger the other way. <em>Why:</em> a wide range shows the shape of the graph, and repeats show up leaks and friction.": "25 cm<sup>3</sup>부터 100 cm<sup>3</sup>까지 약 10 cm<sup>3</sup>마다 측정해요. 그다음 피스톤을 반대 방향으로 움직이며 다시 측정해요. <em>이유:</em> 범위가 넓으면 그래프의 모양이 드러나고, 반복하면 공기가 새거나 마찰이 있는지 드러나요.",

    // Method > li
    "Record the room temperature at the start and at the end. <em>Why:</em> temperature is a controlled variable, so you need to show it stayed the same.": "처음과 끝에 실온을 기록해요. <em>이유:</em> 온도는 통제 변인이므로 일정하게 유지되었다는 것을 보여야 해요.",

    // Method > h3
    "Part B: temperature": "B 부분: 온도",

    // Method > li
    "Clamp the dry flask so that as much of it as possible is under the water. Join it to the pressure sensor with a short tube. <em>Why:</em> all the gas should be at the bath temperature.": "마른 플라스크를 최대한 물에 잠기도록 클램프로 고정해요. 짧은 관으로 압력 센서에 연결해요. <em>이유:</em> 모든 기체가 수조의 온도에 있어야 해요.",

    // Method > li
    "Start with a mixture of ice and water at about 0 °C. Stir, wait until both the thermometer and the pressure reading are steady, then record both. <em>Why:</em> the gas inside the flask takes a few minutes to reach the temperature of the water.": "약 0 °C의 얼음물로 시작해요. 저은 다음, 온도계와 압력 측정값이 모두 안정될 때까지 기다렸다가 둘 다 기록해요. <em>이유:</em> 플라스크 속 기체가 물의 온도에 이르려면 몇 분이 걸려요.",

    // Method > li
    "Raise the temperature by about 10 °C to 15 °C, by heating or by adding hot water. Stir, wait, and record again. Continue up to about 90 °C. <em>Why:</em> a wide range of temperatures makes the extrapolation more reliable.": "가열하거나 뜨거운 물을 넣어 온도를 약 10 °C ~ 15 °C 올려요. 젓고, 기다리고, 다시 기록해요. 약 90 °C까지 계속해요. <em>이유:</em> 온도 범위가 넓을수록 외삽을 더 믿을 수 있어요.",

    // Method > li
    "For the fixed-pressure version, seal about 70 cm<sup>3</sup> of air in a gas syringe with a cap and hold it under the water. Record the volume instead of the pressure. Turn the plunger gently before each reading. <em>Why:</em> friction can stop the plunger moving freely, so the gas would not be at atmospheric pressure.": "압력 일정 실험에서는 기체 주사기에 공기 약 70 cm<sup>3</sup>를 넣고 마개로 막은 다음 물속에 넣어 둬요. 압력 대신 부피를 기록해요. 측정할 때마다 피스톤을 살짝 돌려요. <em>이유:</em> 마찰 때문에 피스톤이 자유롭게 움직이지 않으면 기체가 대기압에 있지 않게 돼요.",

    // Method > li
    "Plot pressure (or volume) against temperature in °C. Draw the line of best fit and extend it to the temperature axis.": "°C 온도에 대한 압력(또는 부피) 그래프를 그려요. 가장 잘 맞는 직선을 긋고 온도 축까지 연장해요.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > p
    "These are simulated experiments. Every reading has a small random error, like a real one, so a new run gives slightly different data. The precision is that of real apparatus. Copy your table into a spreadsheet if you want to plot it yourself.": "이것은 시뮬레이션 실험이에요. 실제 실험처럼 모든 측정값에 작은 우연 오차가 있어서, 새로 실험할 때마다 자료가 조금씩 달라요. 정밀도는 실제 기구와 같아요. 직접 그래프를 그리고 싶으면 표를 스프레드시트에 복사하세요.",

    // Run the experiment > widget > data-title attribute
    "Part A: squeeze the air in a gas syringe": "A 부분: 기체 주사기 속 공기 압축하기",

    // Run the experiment > widget > data-kicker attribute
    "Virtual experiment": "가상 실험",

    // Run the experiment > widget > figcaption
    "Set a syringe reading and record the pressure. Take at least six readings from 25 cm<sup>3</sup> to 100 cm<sup>3</sup>. Compare the two graphs: the curve of <i>P</i> against <i>V</i>, and the straight line of <i>P</i> against 1/<i>V</i>. Then try “Read the sensor at once” after big moves of the plunger, and look at the <i>PV</i> column.": "주사기 눈금을 정하고 압력을 기록해요. 25 cm<sup>3</sup>부터 100 cm<sup>3</sup>까지 적어도 6번 측정해요. 두 그래프를 비교해요: <i>V</i>에 대한 <i>P</i>의 곡선과 1/<i>V</i>에 대한 <i>P</i>의 직선. 그다음 피스톤을 크게 움직인 뒤 “센서 바로 읽기”를 해 보고, <i>PV</i> 열을 살펴봐요.",

    // Run the experiment > widget > data-title attribute
    "Part B: warm the air and find absolute zero": "B 부분: 공기를 데워 절대 영도 찾기",

    // Run the experiment > widget > figcaption
    "Choose a set-up. Set the bath temperature, take a reading, and repeat from about 0 °C to 90 °C. The graph extends your line of best fit back to the temperature axis. The readout gives your estimate of absolute zero and a range from the worst-fit lines. Switch the temperature axis to kelvin to see the line pass close to the origin. Then start a new run and choose “Read at once”: how far does your estimate move, and which way?": "장치를 고르세요. 수조 온도를 정하고 측정한 다음, 약 0 °C부터 90 °C까지 반복해요. 그래프는 가장 잘 맞는 직선을 온도 축까지 거꾸로 연장해요. 결과 창에 절대 영도 어림값과, 최악 적합 직선으로 구한 범위가 나와요. 온도 축을 켈빈으로 바꾸면 직선이 원점 가까이를 지나는 것을 볼 수 있어요. 그다음 새로 실험하면서 “바로 읽기”를 골라 봐요: 어림값이 얼마나, 어느 쪽으로 움직이나요?",

    // Run the experiment > exam tip (shown in English + translation) > p
    "On a graph you plot yourself, label each axis with the quantity and its unit (<span class=\"mono\">P / kPa</span>, <span class=\"mono\">θ / °C</span>), choose scales that spread the points over most of the grid, and draw one smooth line of best fit. Do not join the points dot to dot.": "직접 그래프를 그릴 때는 각 축에 양과 단위를 쓰고(<span class=\"mono\">P / kPa</span>, <span class=\"mono\">θ / °C</span>), 점들이 모눈의 대부분에 퍼지도록 눈금을 정하고, 매끄러운 가장 잘 맞는 직선 하나를 그어요. 점과 점을 하나씩 잇지 마세요.",

    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > p
    "Two calculations come out of this lab. From Part B, you find where the line meets the temperature axis. From Part A, you test whether <i>PV</i> stays constant and use the gradient to find the amount of gas.": "이 실험에서는 두 가지 계산을 해요. B 부분에서는 직선이 온도 축과 만나는 곳을 찾아요. A 부분에서는 <i>PV</i>가 일정한지 확인하고, 기울기로 기체의 양을 구해요.",

    // Processing the data > worked example > h3
    "Absolute zero from a pressure–temperature graph": "압력–온도 그래프로 절대 영도 구하기",

    // Processing the data > worked example > p
    "A student heats a sealed flask of air and plots pressure against temperature in °C. The line of best fit passes through (0.0 °C, 92.4 kPa) and (80.0 °C, 119.6 kPa). Estimate absolute zero from this line.": "한 학생이 공기가 든 막힌 플라스크를 가열하면서 °C 온도에 대한 압력 그래프를 그려요. 가장 잘 맞는 직선이 (0.0 °C, 92.4 kPa)와 (80.0 °C, 119.6 kPa)를 지나요. 이 직선으로 절대 영도를 어림하시오 (estimate).",

    // Processing the data > worked example > data-title attribute
    "Find the gradient": "기울기 구하기",

    // Processing the data > worked example > p
    "Use two points on the line, far apart, not two data points.": "자료 점 두 개가 아니라, 직선 위에서 멀리 떨어진 두 점을 써요.",

    // Processing the data > worked example > maths line
    "gradient = (119.6 − 92.4) kPa ÷ (80.0 − 0.0) °C = 27.2 ÷ 80.0 = 0.340 kPa °C<sup>−1</sup>": "기울기 = (119.6 − 92.4) kPa ÷ (80.0 − 0.0) °C = 27.2 ÷ 80.0 = 0.340 kPa °C<sup>−1</sup>",

    // Processing the data > worked example > data-title attribute
    "Read the intercept on the pressure axis": "압력 축의 절편 읽기",

    // Processing the data > worked example > p
    "The line passes through θ = 0.0 °C at 92.4 kPa, so that is the y-intercept.": "직선이 θ = 0.0 °C에서 92.4 kPa를 지나므로, 이 값이 y절편이에요.",

    // Processing the data > worked example > data-title attribute
    "Set the pressure to zero": "압력을 0으로 놓기",

    // Processing the data > worked example > p
    "An ideal gas has zero pressure at absolute zero, so solve for θ when <i>P</i> = 0.": "이상 기체는 절대 영도에서 압력이 0이므로, <i>P</i> = 0일 때의 θ를 구해요.",

    // Processing the data > worked example > data-title attribute
    "Round and compare": "반올림하고 비교하기",

    // Processing the data > worked example > p
    "The data have 3 significant figures. The literature value is −273.15 °C.": "자료는 유효 숫자 3자리예요. 문헌값은 −273.15 °C예요.",

    // Processing the data > worked example > maths line
    "percentage error = |−271.8 − (−273.15)| ÷ 273.15 × 100 = 0.5 %": "백분율 오차 = |−271.8 − (−273.15)| ÷ 273.15 × 100 = 0.5 %",

    // Processing the data > worked example > p
    "Absolute zero is about −272 °C, a 0.5 % difference from −273.15 °C.": "절대 영도는 약 −272 °C이고, −273.15 °C와 0.5 % 차이 나요.",

    // Processing the data > try it > p
    "In the fixed-pressure experiment, the line of best fit of volume against temperature passes through (10.0 °C, 52.6 cm<sup>3</sup>) and (90.0 °C, 67.4 cm<sup>3</sup>). Estimate absolute zero, in °C.": "압력 일정 실험에서 온도에 대한 부피의 가장 잘 맞는 직선이 (10.0 °C, 52.6 cm<sup>3</sup>)와 (90.0 °C, 67.4 cm<sup>3</sup>)를 지나요. 절대 영도를 °C 단위로 어림하시오 (estimate).",

    // Processing the data > try it > li
    "Find the gradient first, in cm<sup>3</sup> °C<sup>−1</sup>. Then work back from a known point to the temperature at which <i>V</i> = 0.": "먼저 기울기를 cm<sup>3</sup> °C<sup>−1</sup> 단위로 구해요. 그다음 알고 있는 점에서 거꾸로 계산해 <i>V</i> = 0이 되는 온도를 구해요.",

    // Processing the data > try it > li
    "gradient = (67.4 − 52.6) ÷ (90.0 − 10.0). The volume must fall by 52.6 cm<sup>3</sup> from the point at 10.0 °C.": "기울기 = (67.4 − 52.6) ÷ (90.0 − 10.0). 10.0 °C의 점에서 부피가 52.6 cm<sup>3</sup>만큼 줄어야 해요.",

    // Processing the data > try it > maths line
    "gradient = 14.8 cm<sup>3</sup> ÷ 80.0 °C = 0.185 cm<sup>3</sup> °C<sup>−1</sup>": "기울기 = 14.8 cm<sup>3</sup> ÷ 80.0 °C = 0.185 cm<sup>3</sup> °C<sup>−1</sup>",

    // Processing the data > try it > maths line
    "temperature fall needed = 52.6 ÷ 0.185 = 284.3 °C": "필요한 온도 하강 = 52.6 ÷ 0.185 = 284.3 °C",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "예제 2",

    // Processing the data > worked example > h3
    "Testing inverse proportion and finding the amount of gas": "반비례 확인하고 기체의 양 구하기",

    // Processing the data > worked example > p
    "In Part A at 21.0 °C a student records: 30 cm<sup>3</sup>, 168.6 kPa; 50 cm<sup>3</sup>, 101.3 kPa; 80 cm<sup>3</sup>, 63.5 kPa; 100 cm<sup>3</sup>, 50.8 kPa. Show that the pressure is inversely proportional to the volume, and calculate the amount of air, in mol.": "A 부분에서 21.0 °C일 때 한 학생이 다음을 기록해요: 30 cm<sup>3</sup>, 168.6 kPa; 50 cm<sup>3</sup>, 101.3 kPa; 80 cm<sup>3</sup>, 63.5 kPa; 100 cm<sup>3</sup>, 50.8 kPa. 압력이 부피에 반비례함을 보이고 (show), 공기의 양을 mol 단위로 계산하시오 (calculate).",

    // Processing the data > worked example > data-title attribute
    "Calculate PV for each reading": "각 측정값의 PV 계산하기",

    // Processing the data > worked example > p
    "If <i>P</i> is inversely proportional to <i>V</i>, the product <i>PV</i> is constant.": "<i>P</i>가 <i>V</i>에 반비례하면 곱 <i>PV</i>는 일정해요.",

    // Processing the data > worked example > data-title attribute
    "Judge the spread": "퍼진 정도 판단하기",

    // Processing the data > worked example > p
    "The values differ by less than 0.5 %, which is within the uncertainty of the volume readings (about 1.7 % at 30 cm<sup>3</sup>). So <i>PV</i> is constant within experimental error.": "값들의 차이가 0.5 %보다 작은데, 이는 부피 측정값의 불확도(30 cm<sup>3</sup>에서 약 1.7 %) 안에 들어요. 따라서 <i>PV</i>는 실험 오차 범위 안에서 일정해요.",

    // Processing the data > worked example > maths line
    "mean <i>PV</i> = 5071 kPa cm<sup>3</sup> ≈ 5.07 × 10<sup>3</sup> kPa cm<sup>3</sup>": "평균 <i>PV</i> = 5071 kPa cm<sup>3</sup> ≈ 5.07 × 10<sup>3</sup> kPa cm<sup>3</sup>",

    // Processing the data > worked example > data-title attribute
    "Convert to SI units": "SI 단위로 바꾸기",

    // Processing the data > worked example > p
    "1 kPa = 10<sup>3</sup> Pa and 1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>, so 1 kPa cm<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> = 10<sup>−3</sup> J.": "1 kPa = 10<sup>3</sup> Pa이고 1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>이므로, 1 kPa cm<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> = 10<sup>−3</sup> J예요.",

    // Processing the data > worked example > data-title attribute
    "Use PV = nRT": "PV = nRT 쓰기",

    // Processing the data > worked example > p
    "Temperature must be in kelvin: 21.0 + 273.15 = 294.15 K.": "온도는 켈빈 단위여야 해요: 21.0 + 273.15 = 294.15 K.",

    // Processing the data > worked example > maths line
    "<i>n</i> = <b>2.07 × 10<sup>−3</sup> mol</b> (3 significant figures)": "<i>n</i> = <b>2.07 × 10<sup>−3</sup> mol</b> (유효 숫자 3자리)",

    // Processing the data > worked example > p
    "<i>PV</i> is constant within error, so <i>P</i> ∝ 1/<i>V</i>. The syringe holds 2.07 × 10<sup>−3</sup> mol of air.": "<i>PV</i>가 오차 범위 안에서 일정하므로 <i>P</i> ∝ 1/<i>V</i>예요. 주사기에는 공기 2.07 × 10<sup>−3</sup> mol이 들어 있어요.",

    // Processing the data > try it > p
    "The gradient of a student’s graph of <i>P</i> against 1/<i>V</i> is 3.86 × 10<sup>3</sup> kPa cm<sup>3</sup>. The room temperature was 18.5 °C. Calculate the amount of air in the syringe, in mol.": "한 학생이 그린 1/<i>V</i>에 대한 <i>P</i> 그래프의 기울기가 3.86 × 10<sup>3</sup> kPa cm<sup>3</sup>예요. 실온은 18.5 °C였어요. 주사기 속 공기의 양을 mol 단위로 계산하시오 (calculate).",

    // Processing the data > try it > li
    "The gradient of <i>P</i> against 1/<i>V</i> equals <i>PV</i>. Convert kPa cm<sup>3</sup> to J (Pa m<sup>3</sup>) before you use <i>R</i> = 8.31.": "1/<i>V</i>에 대한 <i>P</i> 그래프의 기울기는 <i>PV</i>와 같아요. <i>R</i> = 8.31을 쓰기 전에 kPa cm<sup>3</sup>를 J(Pa m<sup>3</sup>)로 바꿔요.",

    // Processing the data > try it > li
    "3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> = 3.86 J. <i>T</i> = 18.5 + 273.15 = 291.65 K.": "3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> = 3.86 J. <i>T</i> = 18.5 + 273.15 = 291.65 K.",

    // Processing the data > common mistake > p
    "Putting kPa and cm<sup>3</sup> straight into <i>PV</i> = <i>nRT</i> with <i>R</i> = 8.31 gives an answer 1000 times too large. Use Pa and m<sup>3</sup>, or kPa and dm<sup>3</sup>. Always use kelvin for <i>T</i>: a temperature in °C gives nonsense.": "kPa와 cm<sup>3</sup>를 그대로 <i>R</i> = 8.31과 함께 <i>PV</i> = <i>nRT</i>에 넣으면 답이 1000배 너무 크게 나와요. Pa와 m<sup>3</sup>, 또는 kPa와 dm<sup>3</sup>를 쓰세요. <i>T</i>는 항상 켈빈을 쓰세요: °C 온도를 넣으면 말도 안 되는 값이 나와요.",

    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > h3
    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Readings": "측정값",

    // Uncertainties > table > caption
    "Uncertainty of the apparatus": "기구의 불확도",

    // Uncertainties > table > th
    "Reading": "측정값",

    // Uncertainties > table > th
    "Absolute uncertainty": "절대 불확도",

    // Uncertainties > table > th
    "Example": "예",

    // Uncertainties > table > th
    "Percentage uncertainty": "백분율 불확도",

    // Uncertainties > table > th
    "syringe volume": "주사기 부피",

    // Uncertainties > table > td
    "±0.5 cm<sup>3</sup>": "±0.5 cm<sup>3</sup>",

    // Uncertainties > table > td
    "30 cm<sup>3</sup>": "30 cm<sup>3</sup>",

    // Uncertainties > table > td
    "100 cm<sup>3</sup>": "100 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.1 kPa": "±0.1 kPa",

    // Uncertainties > table > td
    "168.6 kPa": "168.6 kPa",

    // Uncertainties > p
    "Percentage uncertainty = absolute uncertainty ÷ value × 100. The same reading has a much smaller percentage uncertainty in kelvin than in °C, because the number is bigger. A temperature <em>difference</em> uses two readings, so its absolute uncertainty is ±0.5 + 0.5 = ±1.0 °C.": "백분율 불확도 = 절대 불확도 ÷ 값 × 100. 같은 측정값이라도 켈빈으로 나타내면 수가 커서 °C보다 백분율 불확도가 훨씬 작아요. 온도 <em>차이</em>는 두 번 읽으므로 절대 불확도가 ±0.5 + 0.5 = ±1.0 °C예요.",

    // Uncertainties > p
    "For a product or a quotient, add the percentage uncertainties. At 30 cm<sup>3</sup>, <i>PV</i> has an uncertainty of 1.7 % + 0.06 % ≈ 1.7 %. The volume dominates. That is why the smallest volumes give the least certain points.": "곱이나 몫에서는 백분율 불확도를 더해요. 30 cm<sup>3</sup>에서 <i>PV</i>의 불확도는 1.7 % + 0.06 % ≈ 1.7 %예요. 부피가 대부분을 차지해요. 그래서 부피가 가장 작은 점들이 가장 불확실해요.",

    // Uncertainties > h3
    "The uncertainty of absolute zero": "절대 영도의 불확도",

    // Uncertainties > p
    "Your estimate comes from an extrapolation, so small errors in the line become large errors at −273 °C. One way to see how large is to draw two <dfn data-def=\"The steepest and the shallowest straight lines that still pass through the error bars of the data points.\">worst-fit lines</dfn>: the steepest and the shallowest lines that still pass through the error bars of your lowest and highest points.": "어림값은 외삽으로 구하므로, 직선의 작은 오차가 −273 °C에서는 큰 오차가 돼요. 얼마나 큰지 보는 한 가지 방법은 <dfn data-def=\"자료 점들의 오차 막대를 여전히 지나는 가장 가파른 직선과 가장 완만한 직선.\">최악 적합 직선 <span class=\"en-term\">(worst-fit lines)</span></dfn> 두 개를 긋는 거예요: 가장 낮은 점과 가장 높은 점의 오차 막대를 여전히 지나는 가장 가파른 직선과 가장 완만한 직선이에요.",

    // Uncertainties > data-def attribute
    "The steepest and the shallowest straight lines that still pass through the error bars of the data points.": "자료 점들의 오차 막대를 여전히 지나는 가장 가파른 직선과 가장 완만한 직선.",

    // Uncertainties > p
    "Take the worked example. The lowest and highest readings, (0.0 °C, 92.4 kPa) and (80.0 °C, 119.6 kPa), sit on the line, with error bars of ±0.5 °C and ±0.1 kPa.": "예제를 이용해요. 가장 낮은 측정값과 가장 높은 측정값인 (0.0 °C, 92.4 kPa)와 (80.0 °C, 119.6 kPa)는 직선 위에 있고, 오차 막대는 ±0.5 °C와 ±0.1 kPa예요.",

    // Uncertainties > li
    "Steepest line: through (0.5 °C, 92.3 kPa) and (79.5 °C, 119.7 kPa). It meets the axis at −266 °C.": "가장 가파른 직선: (0.5 °C, 92.3 kPa)와 (79.5 °C, 119.7 kPa)를 지나요. 축과 −266 °C에서 만나요.",

    // Uncertainties > li
    "Shallowest line: through (−0.5 °C, 92.5 kPa) and (80.5 °C, 119.5 kPa). It meets the axis at −278 °C.": "가장 완만한 직선: (−0.5 °C, 92.5 kPa)와 (80.5 °C, 119.5 kPa)를 지나요. 축과 −278 °C에서 만나요.",

    // Uncertainties > p
    "So the result is <span class=\"mono\">−272 ± 6 °C</span>. The literature value, −273.15 °C, lies inside this range. The 0.5 % percentage error is smaller than the uncertainty, so random error alone could explain the difference. If the literature value had been outside the range, a systematic error would be likely.": "따라서 결과는 <span class=\"mono\">−272 ± 6 °C</span>예요. 문헌값 −273.15 °C가 이 범위 안에 있어요. 백분율 오차 0.5 %가 불확도보다 작으므로, 우연 오차만으로도 차이를 설명할 수 있어요. 문헌값이 범위 밖에 있었다면 계통 오차가 있을 가능성이 커요.",

    // Uncertainties > key idea > p
    "Real data scatter more than the error bars of the instruments suggest, because of other random errors (the gas not quite at the bath temperature, uneven heating). The worst-fit lines then have to pass through all the points’ error bars, not just the two end points. The virtual experiment uses the two end points to keep things simple.": "실제 자료는 기기의 오차 막대보다 더 많이 흩어져요. 다른 우연 오차(기체가 수조 온도에 완전히 이르지 않음, 고르지 않은 가열) 때문이에요. 그러면 최악 적합 직선은 양 끝 두 점만이 아니라 모든 점의 오차 막대를 지나야 해요. 가상 실험에서는 간단하게 하려고 양 끝 두 점만 써요.",

    // Uncertainties > not needed for IB > p
    "The guide does not set a formal method for the uncertainty of a gradient or an intercept. Worst-fit lines are one common way. You will not need a statistical method such as least-squares error analysis.": "IB 지침은 기울기나 절편의 불확도를 구하는 공식적인 방법을 정하지 않아요. 최악 적합 직선은 흔히 쓰는 방법 중 하나예요. 최소 제곱 오차 분석 같은 통계적 방법은 필요 없어요.",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "오차와 개선",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">random error</dfn> scatters readings both ways; repeats reduce its effect. A <dfn data-def=\"An error that shifts every reading in the same direction. Repeats do not remove it; you must change the method or the apparatus.\">systematic error</dfn> pushes every reading the same way, so repeats do not help. You have to change the method.": "<dfn data-def=\"측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복 측정과 평균으로 영향을 줄일 수 있어요.\">우연 오차 <span class=\"en-term\">(random error)</span></dfn>는 측정값을 양쪽으로 흩어지게 해요. 반복하면 영향이 줄어요. <dfn data-def=\"모든 측정값을 같은 방향으로 옮기는 오차. 반복해도 없어지지 않고, 방법이나 기구를 바꿔야 해요.\">계통 오차 <span class=\"en-term\">(systematic error)</span></dfn>는 모든 측정값을 같은 방향으로 밀어내므로 반복해도 소용없어요. 방법을 바꿔야 해요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복 측정과 평균으로 영향을 줄일 수 있어요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that shifts every reading in the same direction. Repeats do not remove it; you must change the method or the apparatus.": "모든 측정값을 같은 방향으로 옮기는 오차. 반복해도 없어지지 않고, 방법이나 기구를 바꿔야 해요.",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in the gas-law experiments": "기체 법칙 실험의 오차 원인",

    // Evaluation: errors and improvements > table > th
    "Source of error": "오차 원인",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "결과에 미치는 영향",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "현실적인 개선 방법",

    // Evaluation: errors and improvements > table > td
    "Part B, fixed volume: the air in the connecting tube stays near room temperature (systematic).": "B 부분, 부피 일정: 연결관 속 공기가 실온 가까이에 머묾 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The pressure rises less than it should as the bath heats up. The gradient is too small, so the line meets the axis too far down: the estimate is more negative than −273 °C.": "수조가 데워질 때 압력이 원래보다 덜 올라가요. 기울기가 너무 작아서 직선이 축과 너무 아래쪽에서 만나요: 어림값이 −273 °C보다 더 큰 음수가 돼요.",

    // Evaluation: errors and improvements > table > td
    "Use a short, narrow tube and a large flask, and push the flask as deep into the water as possible.": "짧고 가는 관과 큰 플라스크를 쓰고, 플라스크를 최대한 깊이 물에 넣기.",

    // Evaluation: errors and improvements > table > td
    "Part B: readings taken before the gas reaches the bath temperature (systematic when heating).": "B 부분: 기체가 수조 온도에 이르기 전에 측정함 (가열할 때 계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The first reading, taken after a long wait in ice water, is correct. After each rise in temperature the gas is still cooler than the thermometer reading, so the later pressures (or volumes) are too low. The line is too shallow, so the estimate is more negative than −273 °C, often by a lot.": "얼음물에서 오래 기다린 뒤 잰 첫 측정값은 맞아요. 온도를 올릴 때마다 기체는 아직 온도계 눈금보다 차가우므로, 나중 압력(또는 부피)이 너무 낮아요. 직선이 너무 완만해서 어림값이 −273 °C보다 더 큰 음수가 되고, 차이가 큰 경우가 많아요.",

    // Evaluation: errors and improvements > table > td
    "Stir the water and wait until the sensor reading has stopped changing before you record.": "물을 젓고, 센서 측정값이 더 이상 변하지 않을 때까지 기다렸다가 기록하기.",

    // Evaluation: errors and improvements > table > td
    "Part B, fixed pressure: friction between the plunger and the barrel (systematic when heating).": "B 부분, 압력 일정: 피스톤과 실린더 사이의 마찰 (가열할 때 계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The plunger sticks behind the expanding gas, so the volumes read after heating are too small. The line is too shallow, so the estimate is more negative than −273 °C. Friction also adds random scatter.": "팽창하는 기체를 피스톤이 늦게 따라가므로, 가열한 뒤 읽은 부피가 너무 작아요. 직선이 너무 완만해서 어림값이 −273 °C보다 더 큰 음수가 돼요. 마찰은 무작위로 흩어지게도 해요.",

    // Evaluation: errors and improvements > table > td
    "Use a glass syringe, turn the plunger gently before each reading, or use a capillary tube with a bead of liquid instead.": "유리 주사기를 쓰거나, 측정할 때마다 피스톤을 살짝 돌리거나, 대신 액체 방울이 든 모세관을 쓰기.",

    // Evaluation: errors and improvements > table > td
    "Part A: air in the tube to the sensor is not included in <i>V</i> (systematic).": "A 부분: 센서로 가는 관 속 공기가 <i>V</i>에 포함되지 않음 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "<i>PV</i> falls slightly as <i>V</i> gets smaller, and the graph of <i>P</i> against 1/<i>V</i> does not pass exactly through the origin.": "<i>V</i>가 작아질수록 <i>PV</i>가 조금씩 줄고, 1/<i>V</i>에 대한 <i>P</i> 그래프가 원점을 정확히 지나지 않아요.",

    // Evaluation: errors and improvements > table > td
    "Use the shortest tube possible, or measure the tube’s volume and add it to every syringe reading.": "가능한 가장 짧은 관을 쓰거나, 관의 부피를 재서 모든 주사기 눈금에 더하기.",

    // Evaluation: errors and improvements > table > td
    "Part A: gas leaks out at the joints at high pressure (systematic).": "A 부분: 압력이 높을 때 이음매에서 기체가 샘 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The amount of gas falls, so <i>PV</i> falls during the run.": "기체의 양이 줄어서 실험하는 동안 <i>PV</i>가 줄어요.",

    // Evaluation: errors and improvements > table > td
    "Use tight push-fit joints, test for leaks first, and take readings without long delays.": "꽉 끼우는 이음매를 쓰고, 먼저 새는지 확인하고, 오래 지체하지 않고 측정하기.",

    // Evaluation: errors and improvements > table > td
    "Part A: reading straight after a quick compression (random or systematic).": "A 부분: 빠르게 압축한 직후에 측정함 (우연 오차 또는 계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The gas is briefly warmer, so the pressure is too high at small volumes.": "기체가 잠깐 더 따뜻해서, 부피가 작을 때 압력이 너무 높아요.",

    // Evaluation: errors and improvements > table > td
    "Move the plunger slowly and wait about 30 s before each reading.": "피스톤을 천천히 움직이고, 측정 전마다 약 30 s 기다리기.",

    // Evaluation: errors and improvements > table > td
    "Readings of the thermometer and the syringe scale (random).": "온도계와 주사기 눈금 읽기 (우연 오차).",

    // Evaluation: errors and improvements > table > td
    "Points scatter about the line, so the gradient and the intercept are less certain.": "점들이 직선 주위로 흩어져서 기울기와 절편이 덜 확실해요.",

    // Evaluation: errors and improvements > table > td
    "Take more readings over a wider range and repeat them; use a digital temperature probe.": "더 넓은 범위에서 더 많이 측정하고 반복하기; 디지털 온도 센서 쓰기.",

    // Evaluation: errors and improvements > table > td
    "Long extrapolation from 0–90 °C back to −273 °C.": "0–90 °C에서 −273 °C까지의 긴 외삽.",

    // Evaluation: errors and improvements > table > td
    "Small errors in the gradient give large errors in the estimate.": "기울기의 작은 오차가 어림값에서는 큰 오차가 돼요.",

    // Evaluation: errors and improvements > table > td
    "Use the widest safe temperature range and many evenly spread points.": "안전한 범위에서 가장 넓은 온도 범위와 고르게 퍼진 많은 점을 쓰기.",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For an error question, say three things: what the error is, which way it moves the result (bigger or smaller, and why), and a specific improvement. “Human error” and “be more careful” earn no marks.": "오차 문제에서는 세 가지를 쓰세요: 오차가 무엇인지, 결과를 어느 쪽으로 움직이는지(커지는지 작아지는지, 그리고 그 이유), 구체적인 개선 방법. “사람의 실수”나 “더 조심하기”는 점수를 받지 못해요.",

    // Evaluation: errors and improvements > not needed for IB > p
    "Air behaves almost ideally between 0 °C and 90 °C and up to about 200 kPa, so non-ideal behaviour is not a significant error here. You do not need to correct for it.": "공기는 0 °C에서 90 °C 사이, 약 200 kPa까지는 거의 이상 기체처럼 행동하므로, 여기서는 이상 기체에서 벗어나는 것이 중요한 오차가 아니에요. 보정할 필요가 없어요.",

    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "Paper 1B style questions on this practical: data, graphs, uncertainties and evaluation. All the questions are original.": "이 실험에 대한 Paper 1B 형식 문제예요: 자료, 그래프, 불확도, 평가. 모든 문제는 이 사이트에서 새로 만든 문제예요.",

    // Exam practice > data-title attribute
    "Gas laws lab: exam practice": "기체 법칙 실험: 시험 대비 연습",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "No readings yet.": "아직 측정값이 없어요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Syringe reading, V": "주사기 눈금, V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "After moving the plunger": "피스톤을 움직인 뒤",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Wait 30 s, then read the sensor": "30 s 기다렸다가 센서 읽기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Read the sensor at once": "센서 바로 읽기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph": "그래프",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P against 1/V": "1/V에 대한 P",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P against V": "V에 대한 P",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Record reading": "측정값 기록",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Delete last reading": "마지막 측정값 지우기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Last reading deleted.": "마지막 측정값을 지웠어요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run": "새 실험",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run: the syringe was refilled with air at {V} cm³ and sealed.": "새 실험: 주사기에 공기를 {V} cm³까지 다시 채우고 막았어요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copy data": "자료 복사",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "V / cm³ (±0.5)": "V / cm³ (±0.5)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P / kPa (±0.1)": "P / kPa (±0.1)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "1/V / cm⁻³": "1/V / cm⁻³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "PV / kPa cm³": "PV / kPa cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copied {n} readings as tab-separated text. Paste them into a spreadsheet.": "측정값 {n}개를 탭으로 구분한 텍스트로 복사했어요. 스프레드시트에 붙여 넣으세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copying is blocked in this browser. Select the table with the mouse and copy it instead.": "이 브라우저에서는 복사가 막혀 있어요. 마우스로 표를 선택해서 대신 복사하세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Pressure sensor": "압력 센서",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Room temperature": "실온",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Best-fit line": "가장 잘 맞는 직선",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Note": "메모",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A gas syringe sealed to a pressure sensor by a short tube. The plunger position shows the syringe reading. The sensor shows the pressure. The values are also in the readout.": "짧은 관으로 압력 센서에 연결해 막은 기체 주사기. 피스톤 위치가 주사기 눈금을, 센서가 압력을 보여 줌. 값은 결과 창에도 나옴.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "pressure sensor": "압력 센서",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gas syringe (cm³)": "기체 주사기 (cm³)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "That is plenty of readings. Delete one or start a new run.": "측정값이 충분히 많아요. 하나를 지우거나 새로 실험하세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded V = {V} cm³, P = {p} kPa.": "기록함: V = {V} cm³, P = {p} kPa.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of pressure against 1/V for the readings in the table, with a straight line of best fit.": "표의 측정값으로 그린 1/V에 대한 압력 그래프와 가장 잘 맞는 직선.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P / kPa": "P / kPa",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Curve P = k/V": "곡선 P = k/V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of pressure against volume for the readings in the table, with a curve through the points.": "표의 측정값으로 그린 부피에 대한 압력 그래프와 점들을 지나는 곡선.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "V / cm³": "V / cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Record at least three readings over the whole range of the syringe.": "주사기의 전체 범위에 걸쳐 적어도 3번 측정하세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gradient = {m} kPa cm³, y-intercept = {b} kPa": "기울기 = {m} kPa cm³, y절편 = {b} kPa",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "PV ranges from {lo} to {hi} kPa cm³": "PV 범위: {lo} ~ {hi} kPa cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Air was sealed in the syringe at {V} cm³. Move the plunger, then record the sensor reading.": "주사기에 공기를 {V} cm³ 넣고 막았어요. 피스톤을 움직인 다음 센서 측정값을 기록하세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Set-up": "장치",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Fixed volume (pressure sensor)": "부피 일정 (압력 센서)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Fixed pressure (gas syringe)": "압력 일정 (기체 주사기)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Water-bath temperature": "수조 온도",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Before each reading": "측정하기 전마다",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Stir and wait 3 minutes": "젓고 3분 기다리기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Read at once": "바로 읽기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Temperature axis": "온도 축",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ in °C, extrapolated": "°C 단위 θ, 외삽",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "T in K": "K 단위 T",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Take reading": "측정하기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run: fresh apparatus, sealed with air at room temperature and left in the bath until steady.": "새 실험: 새 장치에 실온의 공기를 넣고 막은 다음, 안정될 때까지 수조에 넣어 두었어요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ / °C (±0.5)": "θ / °C (±0.5)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "T / K": "T / K",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Thermometer": "온도계",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Last reading": "마지막 측정값",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Absolute zero estimate": "절대 영도 어림값",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A 250 cm³ flask of air is sealed and joined to a pressure sensor. The volume is fixed. Change the bath temperature and take readings.": "공기가 든 250 cm³ 플라스크를 막고 압력 센서에 연결했어요. 부피는 일정해요. 수조 온도를 바꾸면서 측정하세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A gas syringe holding {V} cm³ of air at room temperature is sealed and held under the water. The plunger moves, so the pressure stays at atmospheric pressure.": "실온의 공기 {V} cm³가 든 기체 주사기를 막고 물속에 넣어 두었어요. 피스톤이 움직이므로 압력은 대기압으로 유지돼요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A water bath with a thermometer. Fixed volume: a sealed flask in the bath joined by a tube to a pressure sensor. Fixed pressure: a sealed gas syringe under the water. The readings are in the readout.": "온도계가 있는 수조. 부피 일정: 수조 속 막힌 플라스크가 관으로 압력 센서에 연결됨. 압력 일정: 물속에 있는 막힌 기체 주사기. 측정값은 결과 창에 나옴.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "water bath": "수조",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "air": "공기",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "sealed gas syringe (cm³)": "막힌 기체 주사기 (cm³)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded θ = {th} °C, P = {y} kPa.": "기록함: θ = {th} °C, P = {y} kPa.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded θ = {th} °C, V = {y} cm³.": "기록함: θ = {th} °C, V = {y} cm³.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Best-fit line, extrapolated": "가장 잘 맞는 직선, 외삽",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "≈ {x} °C": "≈ {x} °C",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "meets the axis below −300 °C": "−300 °C 아래에서 축과 만남",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{v} {u} at 0 K": "0 K에서 {v} {u}",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of the readings against temperature in kelvin, with the line of best fit.": "켈빈 온도에 대한 측정값 그래프와 가장 잘 맞는 직선.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of the readings against temperature in degrees Celsius. The line of best fit is extended back to where it meets the temperature axis.": "섭씨온도에 대한 측정값 그래프. 가장 잘 맞는 직선을 온도 축과 만나는 곳까지 거꾸로 연장함.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ / °C": "θ / °C",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Take at least three readings, spread from 0 °C to 90 °C.": "0 °C부터 90 °C까지 퍼지게 적어도 3번 측정하세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gradient in {u} °C⁻¹": "기울기 단위: {u} °C⁻¹",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{x} °C. Spread your readings over a wider range to estimate its uncertainty.": "{x} °C. 불확도를 어림하려면 측정값을 더 넓은 범위에 퍼뜨리세요.",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{x} °C (worst-fit lines: {a} °C to {z} °C)": "{x} °C (최악 적합 직선: {a} °C ~ {z} °C)",

  }
});
