/* lab-chromatography — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-chromatography', {
  strings: {

    // page title (browser tab)
    "Lab 2 Paper and thin-layer chromatography | Structure Lab": "실험 2 종이 크로마토그래피와 얇은 막 크로마토그래피 | Structure Lab",

    // Paper and thin-layer chromatography > page header > p
    "Lab 2 · Structure 1.1 and 2.2": "실험 2 · Structure 1.1, 2.2",

    // Paper and thin-layer chromatography > page header > h1
    "Paper and thin-layer chromatography": "종이 크로마토그래피와 얇은 막 크로마토그래피",

    // Paper and thin-layer chromatography > page header > span
    "How can paper or thin-layer chromatography separate the parts of a mixture, and what do R<sub>F</sub> values tell you about them?": "종이 크로마토그래피나 얇은 막 크로마토그래피는 어떻게 혼합물의 성분을 분리할까요? 그리고 R<sub>F</sub> 값은 성분에 대해 무엇을 알려 줄까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "This lab practises the chromatography technique from Structure 1.1.1 and Tool 1, and the R<sub>F</sub> skills from Structure 2.2.10. Tick each item when you can do it without help.": "이 실험에서는 Structure 1.1.1과 Tool 1의 크로마토그래피 기법, 그리고 Structure 2.2.10의 R<sub>F</sub> 기능을 연습해요. 도움 없이 할 수 있게 되면 하나씩 체크하세요.",

    // What you need to be able to do > checklist > span
    "Describe how to run a paper or TLC chromatogram and give the reason for each key step.": "종이 크로마토그래피나 TLC로 크로마토그램을 전개하는 방법을 서술하고, 핵심 단계마다 그 이유를 말할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Measure the distances moved by a spot and by the solvent front, both from the baseline.": "점이 이동한 거리와 용매 전선이 이동한 거리를 둘 다 출발선에서부터 잴 수 있어요.",

    // What you need to be able to do > checklist > span
    "Calculate an R<sub>F</sub> value to a sensible precision, with no unit.": "R<sub>F</sub> 값을 알맞은 정밀도로, 단위 없이 계산할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Use R<sub>F</sub> values and reference substances to identify the parts of a mixture.": "R<sub>F</sub> 값과 기준 물질로 혼합물의 성분을 확인할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Explain differences in R<sub>F</sub> using the polarity of the substances and of the stationary and mobile phases.": "물질의 극성과 고정상, 이동상의 극성으로 R<sub>F</sub>의 차이를 설명할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Work out the uncertainty of an R<sub>F</sub> value and use it when you compare values.": "R<sub>F</sub> 값의 불확도를 구하고, 값을 비교할 때 그 불확도를 쓸 수 있어요.",

    // What you need to be able to do > checklist > span
    "Identify errors in a chromatography experiment and suggest realistic improvements.": "크로마토그래피 실험의 오차를 찾고, 현실적인 개선 방법을 제안할 수 있어요.",

    // The chemistry behind it > data-toc attribute
    "Background": "배경",

    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "Chromatography separates the parts of a mixture because they have different attractions, through intermolecular forces, to two phases. The <dfn data-def=\"The phase that does not move: the water held in the paper fibres, or the silica layer on a TLC plate.\">stationary phase</dfn> stays still. The <dfn data-def=\"The solvent that moves through the paper or plate, carrying the parts of the mixture with it.\">mobile phase</dfn> is the solvent that moves up and carries the mixture with it.": "크로마토그래피로 혼합물의 성분을 분리할 수 있는 것은, 성분마다 분자 간 힘을 통해 두 상에 끌리는 정도가 다르기 때문이에요. <dfn data-def=\"움직이지 않는 상: 종이 섬유에 붙잡혀 있는 물, 또는 TLC 판의 실리카 층.\">고정상 <span class=\"en-term\">(stationary phase)</span></dfn>은 가만히 있어요. <dfn data-def=\"종이나 판을 따라 움직이면서 혼합물의 성분을 함께 운반하는 용매.\">이동상 <span class=\"en-term\">(mobile phase)</span></dfn>은 위로 올라가면서 혼합물을 함께 운반하는 용매예요.",

    // The chemistry behind it > data-def attribute
    "The phase that does not move: the water held in the paper fibres, or the silica layer on a TLC plate.": "움직이지 않는 상: 종이 섬유에 붙잡혀 있는 물, 또는 TLC 판의 실리카 층.",

    // The chemistry behind it > data-def attribute
    "The solvent that moves through the paper or plate, carrying the parts of the mixture with it.": "종이나 판을 따라 움직이면서 혼합물의 성분을 함께 운반하는 용매.",

    // The chemistry behind it > table > caption
    "The two techniques in this lab": "이 실험의 두 가지 기법",

    // The chemistry behind it > table > th
    "Technique": "방법",

    // The chemistry behind it > table > th
    // widget string (assets/js/widgets-lab-chromatography.js)
    "Stationary phase": "고정상",

    // The chemistry behind it > table > th
    "Mobile phase used here": "여기서 쓰는 이동상",

    // The chemistry behind it > table > th
    "paper chromatography": "종이 크로마토그래피",

    // The chemistry behind it > table > td
    "water held in the cellulose fibres of the paper (polar)": "종이의 셀룰로스 섬유에 붙잡혀 있는 물 (극성)",

    // The chemistry behind it > table > td
    "mixtures of ethanol and water": "ethanol과 물의 혼합물",

    // The chemistry behind it > table > th
    "thin-layer chromatography (TLC)": "얇은 막 크로마토그래피 (TLC)",

    // The chemistry behind it > table > td
    "a thin layer of silica, <span class=\"chem\">SiO2</span>, on a plate (polar, with –OH groups on its surface)": "판 위에 입힌 얇은 실리카 층, <span class=\"chem\">SiO2</span> (극성, 표면에 –OH기가 있음)",

    // The chemistry behind it > table > td
    "mixtures of hexane and ethyl acetate": "hexane과 ethyl acetate의 혼합물",

    // The chemistry behind it > p
    "Both stationary phases are polar and can form hydrogen bonds. So a polar substance is held back strongly and moves only a short way. A less polar substance spends more time dissolved in the moving solvent and travels further. Making the mobile phase <strong>more polar</strong> helps it compete for the polar substances, so every spot moves further.": "두 고정상 모두 극성이고 수소 결합을 만들 수 있어요. 그래서 극성 물질은 강하게 붙잡혀 조금밖에 이동하지 못해요. 극성이 작은 물질은 움직이는 용매에 녹아 있는 시간이 더 길어서 더 멀리 이동해요. 이동상을 <strong>더 극성</strong>으로 만들면 이동상이 극성 물질을 더 잘 끌어당기므로 모든 점이 더 멀리 이동해요.",

    // The chemistry behind it > equation > maths line
    "<i>R</i><sub>F</sub> = <span class=\"frac\"><span>distance moved by the spot</span><span>distance moved by the solvent front</span></span>": "<i>R</i><sub>F</sub> = <span class=\"frac\"><span>점이 이동한 거리</span><span>용매 전선이 이동한 거리</span></span>",

    // The chemistry behind it > equation > dt
    // widget string (assets/js/widgets-lab-chromatography.js)
    "R<sub>F</sub>": "R<sub>F</sub>",

    // The chemistry behind it > equation > dd
    "retardation factor, between 0 and 1, no unit": "이동률, 0과 1 사이, 단위 없음",

    // The chemistry behind it > equation > dt
    "distances": "거리",

    // The chemistry behind it > equation > dd
    "both measured from the baseline; spot distance to the centre of the spot <span class=\"unit\">cm</span>": "둘 다 출발선에서부터 재요. 점의 거리는 점의 중심까지 <span class=\"unit\">cm</span>",

    // The chemistry behind it > p
    "A substance has the same R<sub>F</sub> value only if the stationary phase, the solvent and the temperature are the same. That is why known substances are run on the <strong>same</strong> paper as the mixture. The full theory is in <a href=\"../topics/s2-2.html#chromatography\">Structure 2.2: chromatography</a>, and the place of chromatography among other separation methods is in <a href=\"../topics/s1-1.html#separating\">Structure 1.1</a> and <a href=\"lab-separation.html\">Lab 1</a>.": "어떤 물질의 R<sub>F</sub> 값은 고정상, 용매, 온도가 같을 때만 같아요. 그래서 알고 있는 물질을 혼합물과 <strong>같은</strong> 종이에 함께 전개해요. 자세한 이론은 <a href=\"../topics/s2-2.html#chromatography\">Structure 2.2: 크로마토그래피</a>에, 여러 분리 방법 가운데 크로마토그래피의 위치는 <a href=\"../topics/s1-1.html#separating\">Structure 1.1</a>과 <a href=\"lab-separation.html\">실험 1</a>에 있어요.",

    // The chemistry behind it > not needed for IB > p
    "Locating agents (a UV lamp, iodine, ninhydrin) for colourless spots are not required. Nor are column chromatography, two-way chromatography, or how gas chromatographs and HPLC machines work. The equation the simulation uses to produce R<sub>F</sub> values is not part of the course.": "색이 없는 점을 보이게 하는 발색제(UV 램프, 아이오딘, 닌하이드린)는 필요 없어요. 관 크로마토그래피, 2차원 크로마토그래피, 기체 크로마토그래피와 HPLC 장치의 작동 원리도 필요 없어요. 시뮬레이션이 R<sub>F</sub> 값을 만드는 데 쓰는 식은 교육과정에 들어 있지 않아요.",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to find out which of four known substances, A to D, are present in a mixture M, and to investigate how the polarity of the mobile phase affects R<sub>F</sub> values.": "<strong>목적:</strong> 알고 있는 물질 A–D 4가지 중 어느 것이 혼합물 M에 들어 있는지 알아내고, 이동상의 극성이 R<sub>F</sub> 값에 어떤 영향을 주는지 탐구해요.",

    // Aim, variables and safety > table > caption
    "Variables in the solvent investigation": "용매 탐구의 변인",

    // Aim, variables and safety > table > th
    "Type": "유형",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "측정하거나 같게 유지하는 방법",

    // Aim, variables and safety > table > th
    "Independent": "독립 변인",

    // Aim, variables and safety > table > td
    "percentage of the more polar solvent in the mobile phase": "이동상에서 극성이 더 큰 용매의 백분율",

    // Aim, variables and safety > table > td
    "measured with graduated pipettes or a measuring cylinder": "눈금 피펫이나 눈금실린더로 측정",

    // Aim, variables and safety > table > th
    "Dependent": "종속 변인",

    // Aim, variables and safety > table > td
    "R<sub>F</sub> value of each spot": "각 점의 R<sub>F</sub> 값",

    // Aim, variables and safety > table > td
    "distances measured with a ruler, ±0.05 cm per reading": "자로 잰 거리, 측정값마다 ±0.05 cm",

    // Aim, variables and safety > table > th
    "Controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "type of paper or plate": "종이나 판의 종류",

    // Aim, variables and safety > table > td
    "cut from the same sheet or box": "같은 장이나 같은 상자에서 잘라 씀",

    // Aim, variables and safety > table > td
    "temperature and solvent vapour in the tank": "전개 용기 안의 온도와 용매 증기",

    // Aim, variables and safety > table > td
    "same room; lid on and tank left to saturate before each run": "같은 실험실, 뚜껑을 덮고 전개할 때마다 용기 안이 증기로 포화되도록 둠",

    // Aim, variables and safety > table > td
    "position and size of the spots": "점의 위치와 크기",

    // Aim, variables and safety > table > td
    "same baseline height (1.5 cm); small spots from a fine capillary": "같은 출발선 높이 (1.5 cm), 가는 모세관으로 찍은 작은 점",

    // Aim, variables and safety > h3
    "Equipment": "기구와 시약",

    // Aim, variables and safety > li
    "chromatography paper or silica TLC plates": "크로마토그래피 종이 또는 실리카 TLC 판",

    // Aim, variables and safety > li
    "mixture M and reference solutions A, B, C, D": "혼합물 M과 기준 용액 A, B, C, D",

    // Aim, variables and safety > li
    "fine glass capillary tubes for spotting": "점을 찍는 가는 유리 모세관",

    // Aim, variables and safety > li
    "chromatography tank or beaker with a lid": "뚜껑이 있는 크로마토그래피 전개 용기 또는 비커",

    // Aim, variables and safety > li
    "ethanol, water, hexane, ethyl acetate": "ethanol, 물, hexane, ethyl acetate",

    // Aim, variables and safety > li
    "10 cm<sup>3</sup> measuring cylinders": "10 cm<sup>3</sup> 눈금실린더",

    // Aim, variables and safety > li
    "pencil and 30 cm ruler (1 mm divisions)": "연필과 30 cm 자 (1 mm 눈금)",

    // Aim, variables and safety > li
    "fume cupboard": "흄 후드",

    // Aim, variables and safety > p
    "Wear eye protection. Ethanol, hexane and ethyl acetate are highly flammable: there must be no naked flames anywhere in the room. Hexane and ethyl acetate vapours are harmful and irritating, and long exposure to hexane can damage nerves: run TLC in a fume cupboard and keep the tank covered.": "보안경을 쓰세요. ethanol, hexane, ethyl acetate는 불이 아주 잘 붙어요: 실험실 어디에도 불꽃이 있으면 안 돼요. hexane과 ethyl acetate의 증기는 해롭고 자극적이며, hexane에 오래 노출되면 신경이 손상될 수 있어요: TLC는 흄 후드에서 하고 전개 용기를 덮어 두세요.",

    // Aim, variables and safety > p
    "Capillary tubes are thin glass: put broken ones in the glass bin. Do not scrape the silica layer, because the dust irritates the lungs. Pour used organic solvents into the labelled residue bottle, not down the sink.": "모세관은 얇은 유리예요: 깨진 것은 유리 수거함에 버리세요. 실리카 층을 긁지 마세요. 가루가 폐를 자극해요. 쓰고 난 유기 용매는 싱크대가 아니라 이름표가 붙은 폐액 병에 부으세요.",

    // Method > h2
    "Method": "방법",

    // Method > li
    "Draw a baseline in <strong>pencil</strong> 1.5 cm from the bottom of the paper and mark five lanes. <em>Why:</em> graphite does not dissolve in the solvent; ink would run.": "종이 아래쪽에서 1.5 cm 위에 <strong>연필</strong>로 출발선을 긋고 5개의 줄을 표시해요. <em>이유:</em> 흑연은 용매에 녹지 않지만, 잉크는 번져요.",

    // Method > li
    "Use a fine capillary to put a small spot of M on the baseline. Let it dry and add more to the same place two or three times. Spot A, B, C and D in the other lanes. <em>Why:</em> small, concentrated spots give compact spots that do not overlap.": "가는 모세관으로 출발선에 M을 작게 찍어요. 마르면 같은 자리에 두세 번 더 찍어요. 다른 줄에는 A, B, C, D를 찍어요. <em>이유:</em> 작고 진한 점을 찍어야 전개 후에도 점이 작게 모여 겹치지 않아요.",

    // Method > li
    "Pour the mobile phase into the tank to a depth of about 0.8 cm, put the lid on and leave it for a few minutes. <em>Why:</em> the air in the tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises.": "전개 용기에 이동상을 약 0.8 cm 깊이로 붓고 뚜껑을 덮어 몇 분 동안 둬요. <em>이유:</em> 용기 안 공기가 용매 증기로 차서, 용매가 올라가는 동안 종이에서 증발하지 않아요.",

    // Method > li
    "Stand the paper in the tank with the baseline <strong>above</strong> the solvent level, not touching the sides, and replace the lid. <em>Why:</em> spots below the solvent level would dissolve into the solvent in the tank.": "출발선이 용매 표면보다 <strong>위</strong>에 있고 벽에 닿지 않게 종이를 용기에 세우고 뚜껑을 다시 덮어요. <em>이유:</em> 점이 용매 표면보다 아래에 있으면 용기 속 용매에 녹아 버려요.",

    // Method > li
    "When the solvent front is about 1 cm from the top, take the paper out and mark the solvent front in pencil at once. <em>Why:</em> the front cannot be seen once the solvent evaporates, and if it reaches the top you cannot tell how far it would have gone.": "용매 전선이 위쪽 끝에서 약 1 cm 남았을 때 종이를 꺼내고 바로 연필로 용매 전선을 표시해요. <em>이유:</em> 용매가 증발하면 전선이 보이지 않고, 전선이 위쪽 끝에 닿으면 얼마나 더 갔을지 알 수 없어요.",

    // Method > li
    "Let the paper dry in the fume cupboard. Draw a pencil ring round each spot.": "흄 후드에서 종이를 말려요. 각 점 둘레에 연필로 동그라미를 그려요.",

    // Method > li
    "With the ruler's zero at the bottom edge, read the positions of the baseline, the solvent front and the centre of each spot. Subtract the baseline reading to get each distance.": "자의 0을 아래쪽 끝에 맞추고, 출발선, 용매 전선, 각 점의 중심 위치를 읽어요. 출발선의 눈금을 빼서 각 거리를 구해요.",

    // Method > li
    "Repeat with mobile phases of different composition, keeping everything else the same.": "다른 것은 모두 같게 하고, 조성이 다른 이동상으로 되풀이해요.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > h3
    "1. Identify the parts of mixture M": "1. 혼합물 M의 성분 확인하기",

    // Run the experiment > p
    "Run the paper with the method as written. Stop it before the solvent reaches the top. Then record readings for the baseline, the front and each spot, and decide which reference substances are in M. Afterwards, try each faulty set-up and see what goes wrong.": "적힌 방법대로 종이를 전개해요. 용매가 위쪽 끝에 닿기 전에 멈춰요. 그다음 출발선, 전선, 각 점의 눈금을 기록하고, 어떤 기준 물질이 M에 들어 있는지 정해요. 끝난 뒤에는 잘못된 장치를 하나씩 시도해 보고 무엇이 잘못되는지 보세요.",

    // Run the experiment > widget > data-title attribute
    "Chromatography tank": "전개 용기",

    // Run the experiment > widget > figcaption
    "Press Run, then \"Take out and mark the front\". Move the ruler line (slider, number box, or tap the picture), choose what the reading is for, and press Record reading. The table works out distances and R<sub>F</sub> values once you have recorded the baseline and the front. A new run gives slightly different values. All values are model data.": "전개를 누른 다음 \"꺼내서 전선 표시\"를 누르세요. 자 선을 움직이고(슬라이더, 숫자 상자, 또는 그림을 탭), 무엇의 눈금인지 고른 다음 눈금 기록을 누르세요. 출발선과 전선을 기록하면 표가 거리와 R<sub>F</sub> 값을 계산해 줘요. 새로 전개하면 값이 조금씩 달라요. 모든 값은 모형 자료예요.",

    // Run the experiment > h3
    "2. Change the polarity of the mobile phase": "2. 이동상의 극성 바꾸기",

    // Run the experiment > p
    "Now run mixture M in six mobile phases at once, from 0 % to 100 % of the more polar solvent. Look at the trend and choose the mobile phase that separates the three spots best.": "이제 극성이 더 큰 용매가 0 %에서 100 %까지 들어 있는 6가지 이동상에서 혼합물 M을 한꺼번에 전개해요. 경향을 보고, 세 점을 가장 잘 분리하는 이동상을 고르세요.",

    // Run the experiment > widget > data-title attribute
    "Solvent series": "용매 계열",

    // Run the experiment > widget > figcaption
    "Press Run all six. Each line is one spot of M, with its own marker shape: circle for spot 1, square for spot 2, triangle for spot 3. The \"smallest gap\" column shows how close the two nearest spots are. All values are model data.": "6개 모두 전개를 누르세요. 각 선은 M의 점 하나이고 표시 모양이 달라요: 점 1은 원, 점 2는 사각형, 점 3은 삼각형이에요. \"가장 작은 간격\" 열은 가장 가까운 두 점이 얼마나 가까운지 보여 줘요. 모든 값은 모형 자료예요.",

    // Run the experiment > key idea > p
    "Every R<sub>F</sub> value goes up as the mobile phase becomes more polar. The order of the spots does not change: the most polar substance, which is held most strongly by the polar stationary phase, always has the smallest R<sub>F</sub>.": "이동상의 극성이 커질수록 모든 R<sub>F</sub> 값이 커져요. 점의 순서는 바뀌지 않아요: 극성 고정상에 가장 강하게 붙잡히는, 극성이 가장 큰 물질의 R<sub>F</sub>가 항상 가장 작아요.",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > worked example > data-kicker attribute
    "Worked example": "예제",

    // Processing the data > worked example > h3
    "R<sub>F</sub> values from ruler readings": "자의 눈금으로 구하는 R<sub>F</sub> 값",

    // Processing the data > worked example > p
    "A student ran mixture M on paper with 40 % water in ethanol. With the ruler's zero at the bottom edge, the readings were: baseline 1.5 cm, solvent front 9.7 cm, spots of M at 3.6 cm, 5.6 cm and 8.7 cm. On the same paper, the references gave R<sub>F</sub> values of B 0.25, C 0.69 and D 0.87. Calculate the R<sub>F</sub> values of the three spots and identify them.": "한 학생이 ethanol에 물이 40 % 섞인 용매로 종이에 혼합물 M을 전개했어요. 자의 0을 아래쪽 끝에 맞췄을 때 눈금은 출발선 1.5 cm, 용매 전선 9.7 cm, M의 점 3.6 cm, 5.6 cm, 8.7 cm였어요. 같은 종이에서 기준 물질의 R<sub>F</sub> 값은 B 0.25, C 0.69, D 0.87이었어요. 세 점의 R<sub>F</sub> 값을 계산하고 무엇인지 확인하시오.",

    // Processing the data > worked example > data-title attribute
    "Turn readings into distances": "눈금을 거리로 바꾸기",

    // Processing the data > worked example > p
    "Both distances start at the baseline, not at the edge of the paper.": "두 거리 모두 종이 끝이 아니라 출발선에서 시작해요.",

    // Processing the data > worked example > maths line
    "solvent front: 9.7 cm − 1.5 cm = 8.2 cm": "용매 전선: 9.7 cm − 1.5 cm = 8.2 cm",

    // Processing the data > worked example > maths line
    "spots: 3.6 − 1.5 = 2.1 cm; 5.6 − 1.5 = 4.1 cm; 8.7 − 1.5 = 7.2 cm": "점: 3.6 − 1.5 = 2.1 cm; 5.6 − 1.5 = 4.1 cm; 8.7 − 1.5 = 7.2 cm",

    // Processing the data > worked example > data-title attribute
    "Divide each spot distance by the front distance": "각 점의 거리를 전선의 거리로 나누기",

    // Processing the data > worked example > p
    "The spot cannot move further than the solvent, so each answer is less than 1.": "점은 용매보다 더 멀리 갈 수 없으므로 답은 모두 1보다 작아요.",

    // Processing the data > worked example > maths line
    "spot 1: 2.1 / 8.2 = 0.256…": "점 1: 2.1 / 8.2 = 0.256…",

    // Processing the data > worked example > maths line
    "spot 2: 4.1 / 8.2 = 0.500": "점 2: 4.1 / 8.2 = 0.500",

    // Processing the data > worked example > maths line
    "spot 3: 7.2 / 8.2 = 0.878…": "점 3: 7.2 / 8.2 = 0.878…",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "자료에 맞춰 반올림하기",

    // Processing the data > worked example > p
    "The distances have 2 significant figures, so give R<sub>F</sub> to 2 decimal places (2 significant figures). It has no unit.": "거리의 유효 숫자가 2자리이므로 R<sub>F</sub>는 소수점 아래 2자리(유효 숫자 2자리)로 나타내요. 단위는 없어요.",

    // Processing the data > worked example > data-title attribute
    "Compare with the references": "기준 물질과 비교하기",

    // Processing the data > worked example > p
    "Same R<sub>F</sub> on the same paper means probably the same substance.": "같은 종이에서 R<sub>F</sub>가 같으면 같은 물질일 가능성이 커요.",

    // Processing the data > worked example > p
    "Spot 1 (0.26) matches B (0.25). Spot 3 (0.88) matches D (0.87). Spot 2 (0.50) does not match C (0.69) or any other reference.": "점 1 (0.26)은 B (0.25)와 맞아요. 점 3 (0.88)은 D (0.87)와 맞아요. 점 2 (0.50)는 C (0.69)와도, 다른 어떤 기준 물질과도 맞지 않아요.",

    // Processing the data > worked example > p
    "R<sub>F</sub> = 0.26, 0.50 and 0.88. M contains B, D and one substance that is not A, B, C or D.": "R<sub>F</sub> = 0.26, 0.50, 0.88. M에는 B, D, 그리고 A, B, C, D가 아닌 물질 하나가 들어 있어요.",

    // Processing the data > try it > data-label attribute
    // widget string (assets/js/widgets-lab-chromatography.js)
    "RF value": "RF 값",

    // Processing the data > try it > p
    "On a TLC plate, the ruler (zero at the bottom edge) reads 2.0 cm at the baseline, 10.4 cm at the solvent front and 7.1 cm at the centre of a spot. Calculate the R<sub>F</sub> value of the spot.": "TLC 판에서 자(0은 아래쪽 끝)의 눈금은 출발선 2.0 cm, 용매 전선 10.4 cm, 점의 중심 7.1 cm예요. 이 점의 R<sub>F</sub> 값을 계산하시오.",

    // Processing the data > try it > li
    "Subtract the baseline reading from both of the other readings first.": "먼저 다른 두 눈금에서 각각 출발선의 눈금을 빼세요.",

    // Processing the data > try it > li
    "The spot moved 5.1 cm and the front moved 8.4 cm. Divide.": "점은 5.1 cm, 전선은 8.4 cm 이동했어요. 나누세요.",

    // Processing the data > try it > maths line
    "spot: 7.1 cm − 2.0 cm = 5.1 cm; front: 10.4 cm − 2.0 cm = 8.4 cm": "점: 7.1 cm − 2.0 cm = 5.1 cm; 전선: 10.4 cm − 2.0 cm = 8.4 cm",

    // Processing the data > common mistake > p
    "Three slips cost marks: measuring from the edge of the paper instead of the baseline, dividing by the length of the paper instead of the distance to the solvent front, and giving R<sub>F</sub> a unit. An R<sub>F</sub> above 1 always means the fraction is upside down.": "점수를 잃는 실수 3가지: 출발선 대신 종이 끝에서 재기, 용매 전선까지의 거리 대신 종이 길이로 나누기, R<sub>F</sub>에 단위 붙이기. R<sub>F</sub>가 1보다 크면 언제나 분수를 거꾸로 쓴 거예요.",

    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > p
    "A ruler with 1 mm divisions can be read to ±0.05 cm. Each distance is the difference of two readings (the feature and the baseline), so add the absolute uncertainties:": "1 mm 눈금 자는 ±0.05 cm까지 읽을 수 있어요. 각 거리는 두 눈금(위치와 출발선)의 차이이므로 절대 불확도를 더해요:",

    // Uncertainties > p
    "R<sub>F</sub> is a division, so add the percentage uncertainties. For spot 1 in the worked example:": "R<sub>F</sub>는 나눗셈이므로 백분율 불확도를 더해요. 예제의 점 1은:",

    // Uncertainties > maths line
    "spot: (0.1 / 2.1) × 100 = 4.8 %": "점: (0.1 / 2.1) × 100 = 4.8 %",

    // Uncertainties > maths line
    "front: (0.1 / 8.2) × 100 = 1.2 %": "전선: (0.1 / 8.2) × 100 = 1.2 %",

    // Uncertainties > maths line
    "% uncertainty of <i>R</i><sub>F</sub> = 4.8 % + 1.2 % = 6.0 %": "<i>R</i><sub>F</sub>의 % 불확도 = 4.8 % + 1.2 % = 6.0 %",

    // Uncertainties > maths line
    "absolute uncertainty = 0.256 × 6.0 / 100 = ±0.015, so <i>R</i><sub>F</sub> = 0.26 ± 0.02": "절대 불확도 = 0.256 × 6.0 / 100 = ±0.015, 따라서 <i>R</i><sub>F</sub> = 0.26 ± 0.02",

    // Uncertainties > p
    "A spot that has moved only a short way has a large percentage uncertainty. Letting the solvent run further makes all the distances bigger and the percentage uncertainties smaller. Judging the centre of a wide, fuzzy spot adds more uncertainty than the ruler does, so keep the spots small.": "조금밖에 이동하지 않은 점은 백분율 불확도가 커요. 용매를 더 멀리 전개하면 모든 거리가 커지고 백분율 불확도가 작아져요. 넓고 흐릿한 점의 중심을 판단하는 것은 자보다 불확도를 더 크게 만들므로 점을 작게 찍으세요.",

    // Uncertainties > try it > data-label attribute
    "Percentage uncertainty": "백분율 불확도",

    // Uncertainties > try it > p
    "Calculate the percentage uncertainty of the R<sub>F</sub> value of spot 3 in the worked example (spot 7.2 cm, front 8.2 cm, each ±0.1 cm).": "예제에서 점 3의 R<sub>F</sub> 값의 백분율 불확도를 계산하시오 (점 7.2 cm, 전선 8.2 cm, 각각 ±0.1 cm).",

    // Uncertainties > try it > li
    "Work out the percentage uncertainty of each distance.": "각 거리의 백분율 불확도를 구하세요.",

    // Uncertainties > try it > li
    "Add (0.1 / 7.2) × 100 and (0.1 / 8.2) × 100.": "(0.1 / 7.2) × 100과 (0.1 / 8.2) × 100을 더하세요.",

    // Uncertainties > try it > maths line
    "% uncertainty = 1.39 % + 1.22 % = 2.6 %": "% 불확도 = 1.39 % + 1.22 % = 2.6 %",

    // Uncertainties > h3
    "Comparing with a reference value": "기준값과 비교하기",

    // Uncertainties > p
    "A data sheet gives R<sub>F</sub> = 0.25 for substance B under the same conditions. Spot 1 gave 0.256.": "자료표에는 같은 조건에서 물질 B의 R<sub>F</sub> = 0.25라고 나와 있어요. 점 1은 0.256이었어요.",

    // Uncertainties > maths line
    "percentage error = |0.256 − 0.25| / 0.25 × 100 = 2.4 %": "백분율 오차 = |0.256 − 0.25| / 0.25 × 100 = 2.4 %",

    // Uncertainties > p
    "The percentage error (2.4 %) is smaller than the percentage uncertainty (6.0 %), so spot 1 agrees with B. Spot 2 (0.50 ± 0.02) differs from C (0.69) by 0.19, which is about ten times its uncertainty, so spot 2 is not C. Literature R<sub>F</sub> values change with the paper, the solvent and the temperature, which is why running references on the same paper is more reliable than a data sheet.": "백분율 오차(2.4 %)가 백분율 불확도(6.0 %)보다 작으므로 점 1은 B와 일치해요. 점 2 (0.50 ± 0.02)는 C (0.69)와 0.19 차이가 나는데, 이는 불확도의 약 10배이므로 점 2는 C가 아니에요. 문헌의 R<sub>F</sub> 값은 종이, 용매, 온도에 따라 달라져요. 그래서 기준 물질을 같은 종이에 함께 전개하는 것이 자료표보다 믿을 만해요.",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Markschemes accept R<sub>F</sub> values within a small range, because distances are read from a diagram. Show both distances and the division. When you compare two values, say whether the difference is bigger than the uncertainty.": "채점 기준은 R<sub>F</sub> 값을 작은 범위 안에서 인정해요. 거리를 그림에서 읽기 때문이에요. 두 거리와 나눗셈을 모두 보이세요. 두 값을 비교할 때는 차이가 불확도보다 큰지 말하세요.",

    // Evaluation: errors and improvements > data-toc attribute
    "Evaluation": "평가",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.\">random error</dfn>, such as judging the centre of a spot, scatters the results; repeat runs and averages reduce it. A <dfn data-def=\"An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.\">systematic error</dfn>, such as measuring every distance from the edge of the paper, shifts every result the same way; only a change of method removes it.": "점의 중심을 판단하는 것 같은 <dfn data-def=\"반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.\">우연 오차 <span class=\"en-term\">(random error)</span></dfn>는 결과를 흩어지게 해요. 반복해서 전개하고 평균을 내면 줄어요. 모든 거리를 종이 끝에서 재는 것 같은 <dfn data-def=\"모든 결과를 같은 방향으로 치우치게 하는 오차. 반복해도 줄지 않으므로 방법이나 기구를 바꿔야 해요.\">계통 오차 <span class=\"en-term\">(systematic error)</span></dfn>는 모든 결과를 같은 쪽으로 옮겨요. 방법을 바꿔야만 없어져요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.": "반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.": "모든 결과를 같은 방향으로 치우치게 하는 오차. 반복해도 줄지 않으므로 방법이나 기구를 바꿔야 해요.",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in this practical": "이 실험의 오차 원인",

    // Evaluation: errors and improvements > table > th
    "Source of error": "오차 원인",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "결과에 미치는 영향",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "현실적인 개선 방법",

    // Evaluation: errors and improvements > table > th
    "large spots": "큰 점",

    // Evaluation: errors and improvements > table > td
    "spots spread and overlap, the centre is hard to judge, so R<sub>F</sub> values are less precise and two substances may look like one": "점이 퍼지고 겹쳐서 중심을 판단하기 어려우므로 R<sub>F</sub> 값의 정밀도가 낮아지고, 두 물질이 하나처럼 보일 수 있어요",

    // Evaluation: errors and improvements > table > td
    "use a fine capillary; apply small amounts and dry between applications": "가는 모세관을 써요. 조금씩 찍고, 찍을 때마다 말려요",

    // Evaluation: errors and improvements > table > th
    "no lid on the tank": "전개 용기에 뚜껑이 없음",

    // Evaluation: errors and improvements > table > td
    "solvent evaporates from the paper, so the front rises slowly and unevenly and R<sub>F</sub> values vary between runs": "용매가 종이에서 증발해서 전선이 천천히, 고르지 않게 올라가므로 R<sub>F</sub> 값이 전개할 때마다 달라져요",

    // Evaluation: errors and improvements > table > td
    "cover the tank and let it fill with solvent vapour before the run": "용기를 덮고, 전개하기 전에 용매 증기로 채워지게 둬요",

    // Evaluation: errors and improvements > table > th
    "front not marked at once (systematic)": "전선을 바로 표시하지 않음 (계통)",

    // Evaluation: errors and improvements > table > td
    "the solvent evaporates and the front is marked too low, so every R<sub>F</sub> is too high": "용매가 증발해서 전선이 너무 낮게 표시되므로 모든 R<sub>F</sub>가 너무 커져요",

    // Evaluation: errors and improvements > table > td
    "mark the front in pencil as soon as the paper comes out": "종이를 꺼내자마자 연필로 전선을 표시해요",

    // Evaluation: errors and improvements > table > th
    "solvent reaches the top edge": "용매가 위쪽 끝에 닿음",

    // Evaluation: errors and improvements > table > td
    "the true front distance is unknown, so R<sub>F</sub> cannot be calculated": "실제 전선의 거리를 알 수 없어서 R<sub>F</sub>를 계산할 수 없어요",

    // Evaluation: errors and improvements > table > td
    "take the paper out when the front is about 1 cm from the top": "전선이 위쪽 끝에서 약 1 cm 남았을 때 종이를 꺼내요",

    // Evaluation: errors and improvements > table > th
    "distances measured from the paper edge (systematic)": "종이 끝에서 거리를 잼 (계통)",

    // Evaluation: errors and improvements > table > td
    "both distances are too big by the same amount, so R<sub>F</sub> values are too high (closer to 1)": "두 거리 모두 같은 양만큼 너무 커서 R<sub>F</sub> 값이 너무 커져요 (1에 더 가까워져요)",

    // Evaluation: errors and improvements > table > td
    "measure every distance from the baseline": "모든 거리를 출발선에서부터 재요",

    // Evaluation: errors and improvements > table > th
    "spots close together": "점들이 서로 가까움",

    // Evaluation: errors and improvements > table > td
    "poor separation; the spots cannot be measured or told apart": "분리가 잘 안 돼서 점을 재거나 구별할 수 없어요",

    // Evaluation: errors and improvements > table > td
    "change the solvent composition, use longer paper, or use TLC": "용매 조성을 바꾸거나, 더 긴 종이를 쓰거나, TLC를 써요",

    // Evaluation: errors and improvements > table > th
    "short run (small distances, random)": "짧은 전개 (작은 거리, 우연)",

    // Evaluation: errors and improvements > table > td
    "the ±0.1 cm uncertainty is a large percentage of each distance": "±0.1 cm의 불확도가 각 거리에서 큰 백분율을 차지해요",

    // Evaluation: errors and improvements > table > td
    "let the solvent run further; repeat the run and average the R<sub>F</sub> values": "용매를 더 멀리 전개해요. 반복해서 전개하고 R<sub>F</sub> 값의 평균을 내요",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "These questions are in the style of Paper 1B: method, readings from a chromatogram, R<sub>F</sub> values, uncertainty, and links to polarity.": "이 문제들은 Paper 1B 형식이에요: 방법, 크로마토그램의 눈금 읽기, R<sub>F</sub> 값, 불확도, 극성과의 관계.",

    // Exam practice > data-title attribute
    "Lab 2 exam practice": "실험 2 시험 대비 연습",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No readings yet.": "아직 기록한 눈금이 없어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{a} % water, {b} % ethanol": "물 {a} %, ethanol {b} %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{a} % ethyl acetate, {b} % hexane": "ethyl acetate {a} %, hexane {b} %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Chromatography paper": "크로마토그래피 종이",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "TLC plate (silica)": "TLC 판 (실리카)",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "More polar solvent in the mobile phase": "이동상 속 극성이 더 큰 용매",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Set-up": "장치",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "As in the method": "방법대로",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No lid on the tank": "전개 용기에 뚜껑 없음",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Baseline drawn in ink": "잉크로 그은 출발선",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvent above the baseline": "용매가 출발선보다 위",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Large, wide spots": "크고 넓은 점",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Run": "전개",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Take out and mark the front": "꺼내서 전선 표시",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "New paper": "새 종이",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Mobile phase": "이동상",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Time": "시간",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Status": "상태",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Chromatogram with five lanes: mixture M and reference substances A, B, C and D, a pencil baseline, the solvent front and a ruler whose zero is at the bottom edge": "5개의 줄이 있는 크로마토그램: 혼합물 M과 기준 물질 A, B, C, D, 연필로 그은 출발선, 용매 전선, 그리고 0이 아래쪽 끝에 있는 자",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ruler line (zero at the bottom edge)": "자 선 (0은 아래쪽 끝)",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Baseline": "출발선",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvent front": "용매 전선",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 1 (lowest)": "M, 점 1 (가장 아래)",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 2": "M, 점 2",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 3 (highest)": "M, 점 3 (가장 위)",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot A": "점 A",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot B": "점 B",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot C": "점 C",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot D": "점 D",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Reading is for": "눈금 대상",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Record reading": "눈금 기록",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Raw data (ruler reads to ±0.05 cm)": "원자료 (자는 ±0.05 cm까지 읽음)",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Feature": "특징",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ruler reading / cm": "자 눈금 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Distance from baseline / cm": "출발선에서의 거리 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Which reference substances are in mixture M?": "혼합물 M에 들어 있는 기준 물질은 어느 것인가요?",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Check": "확인",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Pause": "일시 정지",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{m} min {s} s": "{m}분 {s}초",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ready. The solvent level is above the baseline.": "준비됨. 용매 표면이 출발선보다 위에 있어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ready. The spots are on the baseline, above the solvent. Press Run.": "준비됨. 점은 출발선 위, 용매보다 위에 있어요. 전개를 누르세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Running. Solvent front {d} cm above the baseline.": "전개 중. 용매 전선이 출발선에서 {d} cm 위에 있어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Paused.": "일시 정지됨.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The spots dissolved into the solvent in the tank. There is nothing to measure. Start again with the solvent below the baseline.": "점이 용기 속 용매에 녹아 버렸어요. 잴 것이 없어요. 용매가 출발선보다 아래에 오게 해서 다시 시작하세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The solvent reached the top edge. You cannot tell how far it would have gone, so you cannot find R<sub>F</sub> values. Start again and stop earlier.": "용매가 위쪽 끝에 닿았어요. 얼마나 더 갔을지 알 수 없으므로 R<sub>F</sub> 값을 구할 수 없어요. 다시 시작해서 더 일찍 멈추세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Finished. Move the ruler line to each feature and record the reading.": "끝났어요. 자 선을 각 위치로 옮기고 눈금을 기록하세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Without a lid the solvent evaporated from the paper: the front is uneven and the R<sub>F</sub> values will not repeat well.": "뚜껑이 없어서 용매가 종이에서 증발했어요: 전선이 고르지 않고 R<sub>F</sub> 값이 잘 재현되지 않을 거예요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The ink baseline dissolved and has run up the paper as a smear.": "잉크로 그은 출발선이 녹아서 종이 위로 번져 올라갔어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The large spots have spread out, so their centres are hard to judge and neighbouring spots may overlap.": "큰 점이 퍼져서 중심을 판단하기 어렵고 이웃한 점과 겹칠 수 있어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Finish the run first: take the paper out and mark the solvent front.": "먼저 전개를 끝내세요: 종이를 꺼내고 용매 전선을 표시하세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Check the position: the line is not on the {f}.": "위치를 확인하세요: 선이 {f}에 있지 않아요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "baseline": "출발선",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "solvent front": "용매 전선",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Measure to the centre of the spot.": "점의 중심까지 재세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Recorded {f}: {v} cm.": "{f} 기록함: {v} cm.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No valid result.": "유효한 결과가 없어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The solvent ran off the top, so the run cannot be used.": "용매가 위쪽 끝을 넘어가서 이 전개는 쓸 수 없어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 1 of M is level with B and spot 3 is level with D: same R<sub>F</sub> in the same run, so M contains B and D. Spot 2 is not level with any reference, so M also contains a substance that is not A, B, C or D.": "M의 점 1은 B와 같은 높이이고 점 3은 D와 같은 높이예요: 같은 전개에서 R<sub>F</sub>가 같으므로 M에는 B와 D가 들어 있어요. 점 2는 어떤 기준 물질과도 높이가 같지 않으므로, M에는 A, B, C, D가 아닌 물질도 들어 있어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Correct.": "정답이에요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Not yet.": "아직 아니에요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Compare spot 2 of M with spot C carefully. Calculate both R<sub>F</sub> values: they differ by more than the uncertainty.": "M의 점 2와 점 C를 자세히 비교하세요. 두 R<sub>F</sub> 값을 모두 계산해 보면 불확도보다 크게 차이 나요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "A substance is present if a spot in lane M has the same R<sub>F</sub> value as the reference spot.": "M 줄의 점이 기준 물질의 점과 R<sub>F</sub> 값이 같으면 그 물질이 들어 있는 거예요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Model data. Ruler line: dashed. Solvent front: solid line.": "모형 자료. 자 선: 점선. 용매 전선: 실선.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Run all six": "6개 모두 전개",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Graph of RF value against the percentage of the more polar solvent in the mobile phase, for the three spots of mixture M": "혼합물 M의 세 점에 대해, 이동상 속 극성이 더 큰 용매의 백분율에 따른 RF 값 그래프",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Results (RF from measured distances)": "결과 (잰 거리로 구한 RF)",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Polar solvent / %": "극성 용매 / %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Front / cm": "전선 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 1": "점 1",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 2": "점 2",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 3": "점 3",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Smallest gap": "가장 작은 간격",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Best mobile phase for separating M": "M을 분리하기에 가장 좋은 이동상",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvents": "용매",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ethanol (less polar) mixed with water (more polar).": "ethanol (극성이 더 작음)과 물 (극성이 더 큼)을 섞은 것.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Hexane (non-polar) mixed with ethyl acetate (more polar).": "hexane (무극성)과 ethyl acetate (극성이 더 큼)를 섞은 것.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Good choice.": "잘 골랐어요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Not the best.": "가장 좋은 선택은 아니에요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "All three spots are well apart here: the smallest gap between neighbouring spots is about as large as it gets.": "여기서는 세 점이 모두 잘 떨어져 있어요: 이웃한 점 사이의 가장 작은 간격이 거의 최대예요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "With so little of the polar solvent, the spots stay near the baseline and crowd together. Look for the column with the largest smallest gap.": "극성 용매가 이렇게 적으면 점들이 출발선 근처에 머물며 몰려 있어요. 가장 작은 간격이 가장 큰 열을 찾으세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "With so much of the polar solvent, the spots are carried near the front and crowd together. Look for the column with the largest smallest gap.": "극성 용매가 이렇게 많으면 점들이 전선 근처까지 운반되어 몰려 있어요. 가장 작은 간격이 가장 큰 열을 찾으세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "more polar solvent in the mobile phase / %": "이동상 속 극성이 더 큰 용매 / %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Press Run all six.": "6개 모두 전개를 누르세요.",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "spot {n}": "점 {n}",

  }
});
