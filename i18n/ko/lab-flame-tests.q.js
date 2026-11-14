/* lab-flame-tests.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-flame-tests.q', {
  questions: {

    // ── lab-flame-tests-q001 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q001": {
      // EN: <p>A student looks at four light sources through a hand spectroscope. Which source gives a <strong>continuous</strong> spectrum?</p>
      stem: "<p>한 학생이 휴대용 분광기로 광원 4개를 봐요. <strong>연속</strong> 스펙트럼을 내는 광원은 어느 것인가요?</p>",
      options: [
        // EN: A hydrogen discharge tube
        "수소 방전관",
        // EN: A flame containing sodium chloride
        "염화 나트륨이 든 불꽃",
        // EN: The hot filament of a lamp
        "전구의 뜨거운 필라멘트",
        // EN: A mercury discharge tube
        "수은 방전관",
      ],
      hints: [
        // EN: Which source is a hot solid, rather than excited atoms of a gas?
        "기체의 들뜬 원자가 아니라 뜨거운 고체인 광원은 어느 것인가요?",
      ],
      // EN: <p>A hot solid emits light of every wavelength, so the spectrum is an unbroken band from violet to red. The other three sources contain excited gaseous atoms, which emit only certain wavelengths: a line spectrum.</p>
      solution: "<p>뜨거운 고체는 모든 파장의 빛을 내므로, 스펙트럼은 보라색에서 빨간색까지 끊김 없는 띠예요. 나머지 세 광원에는 기체 상태의 들뜬 원자가 있어서 특정한 파장만 내요: 선 스펙트럼이에요.</p>",
      misconception: {
        // EN (option A): Excited hydrogen atoms emit only certain wavelengths, so you see separate lines.
        "0": "들뜬 수소 원자는 특정한 파장만 내므로 떨어진 선들이 보여요.",
        // EN (option B): The sodium atoms in the flame emit one strong yellow-orange line, not a full band of colours.
        "1": "불꽃 속 나트륨 원자는 색의 띠 전체가 아니라 강한 노란 주황색 선 하나를 내요.",
        // EN (option D): Mercury atoms emit a few separate lines (violet, blue, green, yellow), so this is a line spectrum.
        "3": "수은 원자는 떨어진 선 몇 개(보라색, 파란색, 초록색, 노란색)를 내므로 선 스펙트럼이에요.",
      },
    },

    // ── lab-flame-tests-q002 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q002": {
      // EN: <p>Before each flame test, a student dips the wire loop in dilute hydrochloric acid and holds it in the flame until the flame shows no colour. What is the main reason for this?</p>
      stem: "<p>불꽃 반응을 할 때마다 학생은 먼저 니크롬선 고리를 묽은 염산에 담갔다가 불꽃에 아무 색도 나타나지 않을 때까지 불꽃에 대요. 그 주된 이유는 무엇인가요?</p>",
      options: [
        // EN: To make the salt stick to the wire
        "염이 니크롬선에 잘 붙게 하려고",
        // EN: To remove traces of earlier samples, so that only the new salt colours the flame
        "앞 시료의 흔적을 없애서 새 염만 불꽃에 색을 내게 하려고",
        // EN: To turn the metal ions into metal atoms before the test
        "시험 전에 금속 이온을 금속 원자로 바꾸려고",
        // EN: To make the flame hotter
        "불꽃을 더 뜨겁게 하려고",
      ],
      hints: [
        // EN: Think about what the blank test (no colour) tells you.
        "바탕 시험(색 없음)이 무엇을 알려 주는지 생각해 보세요.",
      ],
      // EN: <p>Traces of an earlier salt, or of sodium from fingers, would add their own colour. Heating the cleaned wire until the flame shows no colour is a blank test: it shows that any colour later comes from the new salt.</p>
      solution: "<p>앞 염의 흔적이나 손가락에서 묻은 나트륨은 자기 색을 더해요. 닦은 니크롬선을 불꽃에 색이 나타나지 않을 때까지 가열하는 것은 바탕 시험이에요: 나중에 나타나는 색이 새 염에서 나온다는 것을 보여 줘요.</p>",
      misconception: {
        // EN (option A): The acid does help solid stick to the wire, but heating until there is no colour is a check that the wire is clean.
        "0": "산이 고체를 니크롬선에 붙이는 데 도움이 되기는 하지만, 색이 나타나지 않을 때까지 가열하는 것은 니크롬선이 깨끗한지 확인하는 거예요.",
        // EN (option C): The cleaning step happens before any sample is added. It is about what is already on the wire.
        "2": "닦는 단계는 시료를 묻히기 전에 해요. 니크롬선에 이미 묻어 있는 것과 관련이 있어요.",
        // EN (option D): The acid does not change the temperature of the flame.
        "3": "산은 불꽃의 온도를 바꾸지 않아요.",
      },
    },

    // ── lab-flame-tests-q003 · short · exam · SL · Structure 1.3.1 · 2 marks
    "lab-flame-tests-q003": {
      // EN: <p>When a little copper(II) chloride is held in a Bunsen flame, the flame turns blue-green. Explain how the coloured light is produced.</p>
      stem: "<p>염화 구리(II)를 조금 분젠 불꽃에 대면 불꽃이 청록색이 돼요. 색이 있는 빛이 어떻게 생기는지 설명하시오 (explain).</p>",
      hints: [
        // EN: What does the heat do to the electrons?
        "열은 전자에 무슨 일을 하나요?",
        // EN: What is given out when they return, and what fixes its energy?
        "전자가 돌아올 때 무엇을 내보내고, 그 에너지는 무엇으로 정해지나요?",
      ],
      // EN: <p>See the model answer. Two ideas earn the marks: excitation by heat, then emission of photons as electrons return to lower levels.</p>
      solution: "<p>모범 답안을 보세요. 점수를 받는 생각은 2가지예요: 열에 의한 들뜸, 그리고 전자가 더 낮은 준위로 돌아오면서 광자를 방출하는 것.</p>",
      // EN: <p>Heat from the flame excites electrons in the copper atoms (or ions) to higher energy levels. The electrons then fall back to lower energy levels and emit photons. The energy of each photon equals the energy difference between the two levels. Only certain differences are possible, so only certain wavelengths are emitted, and these give the colour we see.</p>
      answer: "<p>불꽃의 열이 구리 원자(또는 이온)의 전자를 더 높은 에너지 준위로 들뜨게 해요. 그다음 전자가 더 낮은 에너지 준위로 떨어지면서 광자를 방출해요. 각 광자의 에너지는 두 준위의 에너지 차이와 같아요. 특정한 차이만 가능하므로 특정한 파장만 방출되고, 이것이 우리가 보는 색이 돼요.</p>",
      markscheme: [
        // EN: Electrons are excited / promoted to higher energy levels by the heat of the flame.
        "불꽃의 열로 전자가 더 높은 에너지 준위로 들뜬다 / 올라간다.",
        // EN: Electrons fall / return to lower energy levels and emit photons (light) whose energy equals the difference between the levels (accept: of specific wavelengths/frequencies).
        "전자가 더 낮은 에너지 준위로 떨어지며 / 돌아오며 광자(빛)를 방출하고, 그 에너지는 준위 사이의 차이와 같다 (인정: 특정한 파장/진동수의).",
      ],
    },

    // ── lab-flame-tests-q004 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q004": {
      // EN: <p>Two unknown salts both give a red flame. One contains lithium ions and the other strontium ions. Which method is most likely to tell them apart?</p>
      stem: "<p>모르는 염 2가지가 둘 다 빨간 불꽃을 내요. 하나에는 리튬 이온이, 다른 하나에는 스트론튬 이온이 들어 있어요. 둘을 구별할 가능성이 가장 큰 방법은 어느 것인가요?</p>",
      options: [
        // EN: Repeat each flame test three times and take the average colour
        "불꽃 반응을 각각 3번 되풀이하고 색의 평균을 내요",
        // EN: Use a larger amount of each salt
        "염을 각각 더 많이 써요",
        // EN: Look at each flame through a spectroscope and compare the lines with reference spectra
        "각 불꽃을 분광기로 보고 선을 기준 스펙트럼과 비교해요",
        // EN: Use a luminous (yellow) Bunsen flame instead of a blue one
        "파란 불꽃 대신 빛을 내는 (노란) 분젠 불꽃을 써요",
      ],
      hints: [
        // EN: Each element has its own pattern of lines, even when the colours look alike.
        "색이 비슷해 보여도 원소마다 고유한 선의 무늬가 있어요.",
      ],
      // EN: <p>A spectroscope splits the light into separate lines. Lithium and strontium have different energy levels, so their lines are at different wavelengths. Matching the lines with reference spectra identifies each element.</p>
      solution: "<p>분광기는 빛을 떨어진 선들로 나눠요. 리튬과 스트론튬은 에너지 준위가 달라서 선의 파장이 달라요. 선을 기준 스펙트럼과 맞춰 보면 각 원소를 확인할 수 있어요.</p>",
      misconception: {
        // EN (option A): Repeating reduces random error, but both colours are red each time. You cannot average a colour.
        "0": "반복하면 우연 오차가 줄지만, 두 색은 매번 빨간색이에요. 색은 평균을 낼 수 없어요.",
        // EN (option B): More salt gives a brighter flame, not a different colour.
        "1": "염이 많으면 불꽃이 더 밝아질 뿐 색이 달라지지 않아요.",
        // EN (option D): A yellow flame makes the colours harder to see, not easier.
        "3": "노란 불꽃은 색을 더 보기 어렵게 만들어요.",
      },
    },

    // ── lab-flame-tests-q005 · numeric · exam · SL · Structure 1.3.2 · 2 marks
    "lab-flame-tests-q005": {
      // EN: <p>A student checks a spectroscope with a hydrogen tube.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Hydrogen lines through the spectroscope</caption><thead><tr><th scope="col">Data value / nm</th><th scope="col">Reading / nm (±2)</th></tr></thead><tbody><tr><th scope="row">410</th><td>414</td></tr><tr><th scope="row">486</th><td>490</td></tr><tr><th scope="row">656</th><td>660</td></tr></tbody></table></div><p>With the same spectroscope, a mercury tube gives a green line at a reading of 550 nm. Calculate the corrected wavelength, in nm, of the green line.</p>
      stem: "<p>한 학생이 수소 방전관으로 분광기를 확인해요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>분광기로 본 수소 선</caption><thead><tr><th scope=\"col\">자료값 / nm</th><th scope=\"col\">측정값 / nm (±2)</th></tr></thead><tbody><tr><th scope=\"row\">410</th><td>414</td></tr><tr><th scope=\"row\">486</th><td>490</td></tr><tr><th scope=\"row\">656</th><td>660</td></tr></tbody></table></div><p>같은 분광기로 보면 수은 방전관은 550 nm 눈금에서 초록 선을 보여요. 초록 선의 보정한 파장을 nm 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: By how much does the scale read too high or too low for every hydrogen line?
        "수소 선마다 눈금이 얼마나 높게 또는 낮게 읽히나요?",
        // EN: Apply the same correction to the mercury reading.
        "수은의 측정값에도 같은 보정을 하세요.",
      ],
      // EN: <div class="worked__math">414 − 410 = 4; 490 − 486 = 4; 660 − 656 = 4</div><div class="worked__math">every reading is 4 nm too high (systematic error)</div><div class="worked__math">corrected = 550 − 4 = <b>546 nm</b></div>
      solution: "<div class=\"worked__math\">414 − 410 = 4; 490 − 486 = 4; 660 − 656 = 4</div><div class=\"worked__math\">모든 측정값이 4 nm 높음 (계통 오차)</div><div class=\"worked__math\">보정값 = 550 − 4 = <b>546 nm</b></div>",
    },

    // ── lab-flame-tests-q006 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q006": {
      // EN: <p>A helium tube shows lines at 447 nm (blue), 502 nm (green), 588 nm (yellow-orange) and 668 nm (red). Which line is produced by photons of the <strong>highest energy</strong>?</p>
      stem: "<p>헬륨 방전관은 447 nm(파란색), 502 nm(초록색), 588 nm(노란 주황색), 668 nm(빨간색)에서 선을 보여요. <strong>에너지가 가장 큰</strong> 광자가 만드는 선은 어느 것인가요?</p>",
      options: [
        // EN: 447 nm
        "447 nm",
        // EN: 502 nm
        "502 nm",
        // EN: 588 nm
        "588 nm",
        // EN: 668 nm
        "668 nm",
      ],
      hints: [
        // EN: Shorter wavelength means higher frequency.
        "파장이 짧을수록 진동수가 커요.",
      ],
      // EN: <p>The shortest wavelength has the highest frequency and so the highest energy per photon: <b>447 nm</b>, the blue line.</p>
      solution: "<p>파장이 가장 짧은 선이 진동수가 가장 크므로 광자 하나의 에너지도 가장 커요: <b>447 nm</b>, 파란 선이에요.</p>",
      misconception: {
        // EN (option B): Energy rises as wavelength falls. There is a line with a shorter wavelength than 502 nm.
        "1": "파장이 짧아질수록 에너지가 커져요. 502 nm보다 파장이 짧은 선이 있어요.",
        // EN (option C): This line is the brightest in the helium spectrum, but brightness depends on how many photons there are, not on the energy of each one.
        "2": "이 선은 헬륨 스펙트럼에서 가장 밝지만, 밝기는 광자 하나하나의 에너지가 아니라 광자가 얼마나 많은지에 달려 있어요.",
        // EN (option D): This is the longest wavelength, so it has the lowest frequency and the lowest energy per photon.
        "3": "이것은 가장 긴 파장이므로 진동수가 가장 작고 광자 하나의 에너지도 가장 작아요.",
      },
    },

    // ── lab-flame-tests-q007 · numeric · exam · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q007": {
      // EN: <p>A student records a hydrogen line as 486 ± 2 nm. Calculate the percentage uncertainty of this reading.</p>
      stem: "<p>한 학생이 수소 선을 486 ± 2 nm로 기록해요. 이 측정값의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty / reading × 100.
        "백분율 불확도 = 절대 불확도 / 측정값 × 100.",
      ],
      // EN: <div class="worked__math">2 / 486 × 100 = <b>0.41 %</b></div>
      solution: "<div class=\"worked__math\">2 / 486 × 100 = <b>0.41 %</b></div>",
      // EN: 0.41 % (accept 0.4 %)
      answerDisplay: "0.41 % (0.4 % 인정)",
    },

    // ── lab-flame-tests-q008 · short · exam · SL · Structure 1.3.2 · 2 marks
    "lab-flame-tests-q008": {
      // EN: <p>A student reads all four visible hydrogen lines through a spectroscope. Every reading is 3 or 4 nm higher than the data value. The readings agree with each other when repeated.</p><p>State the type of error, and suggest how the student should deal with it.</p>
      stem: "<p>한 학생이 분광기로 수소의 가시광선 선 4개를 모두 읽어요. 모든 측정값이 자료값보다 3 nm 또는 4 nm 높아요. 반복해도 측정값은 서로 일치해요.</p><p>오차의 종류를 쓰고 (state), 학생이 이 오차를 어떻게 처리해야 하는지 제안하시오 (suggest).</p>",
      hints: [
        // EN: Are the readings scattered on both sides of the true values, or all shifted one way?
        "측정값이 참값의 양쪽으로 흩어져 있나요, 아니면 모두 한쪽으로 치우쳐 있나요?",
      ],
      // EN: <p>All readings are too high by a similar amount, so the error is systematic. Averaging repeats cannot remove it, but a calibration with known lines can.</p>
      solution: "<p>모든 측정값이 비슷한 양만큼 너무 높으므로 계통 오차예요. 반복해서 평균을 내도 없어지지 않지만, 알고 있는 선으로 보정하면 없앨 수 있어요.</p>",
      // EN: <p>It is a systematic error: every reading is shifted the same way by about the same amount (the scale is out of place). Repeating will not remove it. The student should calibrate the spectroscope: find the shift using lines of known wavelength (such as these hydrogen lines) and subtract it from every reading.</p>
      answer: "<p>계통 오차예요: 모든 측정값이 같은 쪽으로 거의 같은 양만큼 치우쳐 있어요(눈금이 어긋나 있음). 반복해도 없어지지 않아요. 학생은 분광기를 보정해야 해요: 파장을 알고 있는 선(이 수소 선 같은)으로 치우친 양을 구하고, 모든 측정값에서 그만큼 빼요.</p>",
      markscheme: [
        // EN: Systematic error (accept: zero / calibration error of the scale).
        "계통 오차 (인정: 눈금의 영점 / 보정 오차).",
        // EN: Calibrate with lines of known wavelength and subtract the shift (about 3–4 nm) from every reading (do not accept "repeat the readings").
        "파장을 알고 있는 선으로 보정하고 모든 측정값에서 치우친 양(약 3–4 nm)을 뺀다 (불인정: \"측정을 반복한다\").",
      ],
    },

    // ── lab-flame-tests-q009 · mcq · challenge · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q009": {
      // EN: <p>A calibrated spectroscope gives these readings (each ±2 nm) for a tube that contains one or two elements:</p><p class="mono">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Reference lines</caption><thead><tr><th scope="col">Element</th><th scope="col">Lines / nm</th></tr></thead><tbody><tr><th scope="row">hydrogen</th><td>410, 434, 486, 656</td></tr><tr><th scope="row">helium</th><td>447, 471, 492, 502, 588, 668</td></tr><tr><th scope="row">lithium</th><td>610, 671</td></tr><tr><th scope="row">sodium</th><td>589</td></tr></tbody></table></div><p>Which elements are in the tube?</p>
      stem: "<p>보정한 분광기로 원소가 1가지 또는 2가지 들어 있는 방전관을 보았더니 다음 값(각각 ±2 nm)이 나왔어요:</p><p class=\"mono\">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>기준 선</caption><thead><tr><th scope=\"col\">원소</th><th scope=\"col\">선 / nm</th></tr></thead><tbody><tr><th scope=\"row\">수소</th><td>410, 434, 486, 656</td></tr><tr><th scope=\"row\">헬륨</th><td>447, 471, 492, 502, 588, 668</td></tr><tr><th scope=\"row\">리튬</th><td>610, 671</td></tr><tr><th scope=\"row\">나트륨</th><td>589</td></tr></tbody></table></div><p>방전관에 들어 있는 원소는 어느 것인가요?</p>",
      options: [
        // EN: Hydrogen and helium
        "수소와 헬륨",
        // EN: Helium and sodium
        "헬륨과 나트륨",
        // EN: Hydrogen, helium and lithium
        "수소, 헬륨, 리튬",
        // EN: Helium only
        "헬륨만",
      ],
      hints: [
        // EN: Check each element: are all of its lines present?
        "원소마다 확인하세요: 그 원소의 선이 모두 있나요?",
        // EN: An element with a missing line is not present.
        "선이 하나라도 없는 원소는 들어 있지 않아요.",
      ],
      // EN: <p>Hydrogen: 409, 433, 487, 657 match 410, 434, 486, 656. Helium: 448, 471, 492, 502, 587, 669 match all six helium lines. Lithium is ruled out (no line near 610 nm). Sodium cannot be confirmed: its one line is hidden by helium’s 588 nm line, and nothing needs it. Answer: <b>hydrogen and helium</b>.</p>
      solution: "<p>수소: 409, 433, 487, 657이 410, 434, 486, 656과 맞아요. 헬륨: 448, 471, 492, 502, 587, 669가 헬륨 선 6개와 모두 맞아요. 리튬은 제외돼요(610 nm 근처에 선이 없음). 나트륨은 확인할 수 없어요: 하나뿐인 선이 헬륨의 588 nm 선에 가려지고, 나트륨이 있어야 설명되는 값도 없어요. 답: <b>수소와 헬륨</b>.</p>",
      misconception: {
        // EN (option B): Sodium’s only line, 589 nm, overlaps helium’s 588 nm line, so the 587 nm reading is explained by helium. And you still have to explain 409, 433, 487 and 657 nm.
        "1": "나트륨의 하나뿐인 선 589 nm는 헬륨의 588 nm 선과 겹치므로 587 nm 측정값은 헬륨으로 설명돼요. 그리고 409, 433, 487, 657 nm도 여전히 설명해야 해요.",
        // EN (option C): Lithium needs a line at 610 nm as well as 671 nm. There is no reading near 610 nm.
        "2": "리튬이 있으려면 671 nm뿐 아니라 610 nm에도 선이 있어야 해요. 610 nm 근처의 측정값은 없어요.",
        // EN (option D): Helium explains six readings, but 409, 433, 487 and 657 nm do not belong to helium.
        "3": "헬륨으로 측정값 6개를 설명할 수 있지만, 409, 433, 487, 657 nm는 헬륨의 선이 아니에요.",
      },
    },

    // ── lab-flame-tests-q010 · short · exam · SL · Structure 1.3.1 · 2 marks
    "lab-flame-tests-q010": {
      // EN: <p>A student tests potassium chloride with a wire that was used for sodium chloride and not cleaned. The flame is yellow-orange. The data say potassium gives a lilac flame.</p><p>Explain the student’s observation and suggest an improvement.</p>
      stem: "<p>한 학생이 염화 나트륨에 썼던 니크롬선을 닦지 않고 염화 칼륨을 시험해요. 불꽃은 노란 주황색이에요. 자료에 따르면 칼륨은 연보라색 불꽃을 내요.</p><p>학생의 관찰 결과를 설명하고 (explain), 개선 방법을 제안하시오 (suggest).</p>",
      hints: [
        // EN: What was on the wire before the potassium salt?
        "칼륨 염 전에 니크롬선에 무엇이 묻어 있었나요?",
        // EN: Which colour is more intense?
        "어느 색이 더 강한가요?",
      ],
      // EN: <p>See the model answer: contamination by sodium, and a blank test with a cleaned wire as the improvement.</p>
      solution: "<p>모범 답안을 보세요: 나트륨에 의한 오염, 그리고 개선 방법으로 닦은 니크롬선으로 하는 바탕 시험.</p>",
      // EN: <p>Traces of sodium chloride were still on the wire. Sodium gives an intense yellow-orange colour, which hides the pale lilac of potassium. The student should clean the wire with dilute hydrochloric acid and heat it until the flame shows no colour before each test (or use a fresh wire or splint for each salt).</p>
      answer: "<p>니크롬선에 염화 나트륨이 아직 조금 남아 있었어요. 나트륨은 강한 노란 주황색을 내서 칼륨의 옅은 연보라색을 가려요. 학생은 시험할 때마다 먼저 니크롬선을 묽은 염산으로 닦고 불꽃에 색이 나타나지 않을 때까지 가열해야 해요(또는 염마다 새 니크롬선이나 나무 막대를 써요).</p>",
      markscheme: [
        // EN: Sodium (ions) left on the wire / contamination gives yellow-orange light that masks the lilac colour.
        "니크롬선에 남은 나트륨 (이온) / 오염이 노란 주황색 빛을 내서 연보라색을 가린다.",
        // EN: Clean the wire with (hydrochloric) acid and heat until no colour is seen, before each test (accept: separate wire or splint for each salt).
        "시험할 때마다 먼저 니크롬선을 (염)산으로 닦고 색이 보이지 않을 때까지 가열한다 (인정: 염마다 다른 니크롬선이나 나무 막대).",
      ],
    },

    // ── lab-flame-tests-q011 · numeric · exam · AHL · Structure 1.3.6 · 2 marks
    "lab-flame-tests-q011": {
      // EN: <p>Lithium’s red line has a corrected wavelength of 671 nm. Calculate the energy, in J, of one photon of this light.</p>
      stem: "<p>리튬 빨간 선의 보정한 파장은 671 nm예요. 이 빛의 광자 하나의 에너지를 J 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Find the frequency first: f = c / λ, with λ in metres.
        "먼저 진동수를 구하세요: f = c / λ, λ는 미터 단위로.",
        // EN: Then E = hf.
        "그다음 E = hf.",
      ],
      // EN: <div class="worked__math"><i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup></div><div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b></div>
      solution: "<div class=\"worked__math\"><i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup></div><div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b></div>",
    },

    // ── lab-flame-tests-q012 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "lab-flame-tests-q012": {
      // EN: <p>Mercury gives a green line at 546 nm. Calculate the energy, in kJ mol<sup>−1</sup>, of one mole of photons of this light.</p>
      stem: "<p>수은은 546 nm에서 초록 선을 내요. 이 빛의 광자 1몰의 에너지를 kJ mol<sup>−1</sup> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: λ = 5.46 × 10<sup>−7</sup> m. Use f = c / λ and E = hf.
        "λ = 5.46 × 10<sup>−7</sup> m. f = c / λ와 E = hf를 쓰세요.",
        // EN: Multiply by the Avogadro constant and divide by 1000.
        "아보가드로 상수를 곱하고 1000으로 나누세요.",
      ],
      // EN: <div class="worked__math"><i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup></div><div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J</div><div class="worked__math">3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 kJ mol<sup>−1</sup></b></div>
      solution: "<div class=\"worked__math\"><i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup></div><div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J</div><div class=\"worked__math\">3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 kJ mol<sup>−1</sup></b></div>",
    },

    // ── lab-flame-tests-q013 · numeric · challenge · AHL · Structure 1.3.6 · 3 marks
    "lab-flame-tests-q013": {
      // EN: <p>In the emission spectrum of hydrogen, the lines that end on the ground state converge at a frequency of 3.29 × 10<sup>15</sup> s<sup>−1</sup>. Calculate the first ionization energy of hydrogen in kJ mol<sup>−1</sup>.</p>
      stem: "<p>수소의 방출 스펙트럼에서 바닥상태에서 끝나는 선들은 진동수 3.29 × 10<sup>15</sup> s<sup>−1</sup>에서 수렴해요. 수소의 제1 이온화 에너지를 kJ mol<sup>−1</sup> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: At the convergence limit the electron is removed from the atom. E = hf gives the energy for one atom.
        "수렴 한계에서 전자가 원자에서 떨어져 나가요. E = hf는 원자 하나의 에너지를 줘요.",
        // EN: Multiply by the Avogadro constant and divide by 1000.
        "아보가드로 상수를 곱하고 1000으로 나누세요.",
      ],
      // EN: <div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 2.181 × 10<sup>−18</sup> J per atom</div><div class="worked__math">2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 kJ mol<sup>−1</sup></b></div>
      solution: "<div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 원자 하나당 2.181 × 10<sup>−18</sup> J</div><div class=\"worked__math\">2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 kJ mol<sup>−1</sup></b></div>",
      // EN: 1310 kJ mol<sup>−1</sup> (1313 to 4 significant figures)
      answerDisplay: "1310 kJ mol<sup>−1</sup> (유효 숫자 4자리로는 1313)",
    },

    // ── lab-flame-tests-q014 · mcq · challenge · AHL · Structure 1.3.6 · 1 mark
    "lab-flame-tests-q014": {
      // EN: <p>A student wants to find the first ionization energy of hydrogen from the convergence limit, using a hand spectroscope and a hydrogen tube. Why can this not be done?</p>
      stem: "<p>한 학생이 휴대용 분광기와 수소 방전관으로 수렴 한계에서 수소의 제1 이온화 에너지를 구하려고 해요. 이것이 불가능한 이유는 무엇인가요?</p>",
      options: [
        // EN: The lines that end on the ground state (n = 1) are in the ultraviolet, which the spectroscope cannot show
        "바닥상태(n = 1)에서 끝나는 선은 자외선 영역에 있어서 분광기로 볼 수 없어요",
        // EN: Hydrogen has only four lines, so there is no convergence limit
        "수소에는 선이 4개뿐이므로 수렴 한계가 없어요",
        // EN: The visible lines are too bright to read
        "가시광선 선이 너무 밝아서 읽을 수 없어요",
        // EN: The convergence limit is at the red end of the spectrum, beyond 700 nm
        "수렴 한계는 스펙트럼의 빨간색 쪽 끝, 700 nm 너머에 있어요",
      ],
      hints: [
        // EN: Which energy level does the electron fall to for the first ionization energy? Is that transition visible?
        "제1 이온화 에너지에서 전자는 어느 에너지 준위로 떨어지나요? 그 전이는 눈에 보이나요?",
      ],
      // EN: <p>The first ionization energy needs the series that ends on n = 1. Those transitions have large energy differences, so the lines are in the ultraviolet. The visible lines end on n = 2, and their limit gives the energy to remove an electron from n = 2, not from the ground state.</p>
      solution: "<p>제1 이온화 에너지에는 n = 1에서 끝나는 계열이 필요해요. 이 전이들은 에너지 차이가 커서 선이 자외선 영역에 있어요. 가시광선 선은 n = 2에서 끝나고, 그 한계는 바닥상태가 아니라 n = 2에서 전자를 떼어 내는 에너지를 줘요.</p>",
      misconception: {
        // EN (option B): Only four lines are visible, but each series has many more lines, crowding together towards its limit.
        "1": "보이는 선은 4개뿐이지만, 계열마다 선이 훨씬 더 많고 한계 쪽으로 갈수록 빽빽하게 모여요.",
        // EN (option C): Brightness is not the problem. The question is which region of the spectrum the needed lines are in.
        "2": "밝기는 문제가 아니에요. 필요한 선이 스펙트럼의 어느 영역에 있는지가 문제예요.",
        // EN (option D): Lines converge at higher frequency, so towards shorter wavelengths, not towards the red end.
        "3": "선은 진동수가 큰 쪽, 즉 파장이 짧은 쪽으로 수렴하지 빨간색 쪽 끝으로 수렴하지 않아요.",
      },
    },

  }
});
