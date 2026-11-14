/* lab-standard-solution — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-standard-solution', {
  strings: {

    // page title (browser tab)
    "Lab 6 Standard solutions and calibration curves | Structure Lab": "실험 6 표준 용액과 검량선 | Structure Lab",

    // Standard solutions and calibration curves > page header > p
    "Lab 6 · Structure 1.4": "실험 6 · Structure 1.4",

    // Standard solutions and calibration curves > page header > h1
    "Standard solutions and calibration curves": "표준 용액과 검량선",

    // Standard solutions and calibration curves > page header > span
    "How do we make a solution whose concentration we know exactly, and then use it to measure a concentration we do not know?": "농도를 정확히 아는 용액은 어떻게 만들고, 그 용액으로 모르는 농도는 어떻게 잴까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "In part A you make a standard solution of copper(II) sulfate. In part B you dilute it to make a set of standards, measure how much light each absorbs, and use the graph to find the concentration of an unknown. Tick each skill when you can do it without notes.": "A 부분에서는 황산 구리(II) 표준 용액을 만들어요. B 부분에서는 이 용액을 희석해 표준 용액 여러 개를 만들고, 각각이 빛을 얼마나 흡수하는지 잰 다음, 그래프로 미지 용액의 농도를 구해요. 노트 없이 할 수 있게 된 기능에 하나씩 표시하세요.",

    // What you need to be able to do > checklist > span
    "Calculate the mass of solid needed for a given volume and concentration of solution.": "주어진 부피와 농도의 용액을 만드는 데 필요한 고체의 질량 계산하기.",

    // What you need to be able to do > checklist > span
    "Describe how to prepare a standard solution in a volumetric flask, using the words a markscheme expects.": "채점 기준이 요구하는 표현을 써서 부피 플라스크로 표준 용액을 만드는 방법 서술하기.",

    // What you need to be able to do > checklist > span
    "Calculate and describe a dilution, and choose suitable glassware for it.": "희석을 계산하고 서술하기, 그리고 알맞은 유리 기구 고르기.",

    // What you need to be able to do > checklist > span
    "Make a set of standards, plot a calibration curve and read an unknown concentration from it.": "표준 용액 세트를 만들고, 검량선을 그리고, 검량선에서 미지 농도 읽기.",

    // What you need to be able to do > checklist > span
    "Explain why a colorimeter filter of the complementary colour is used.": "비색계에 보색 필터를 쓰는 이유 설명하기.",

    // What you need to be able to do > checklist > span
    "Propagate uncertainties from the balance, flask, pipette and burette into a concentration.": "저울, 플라스크, 피펫, 뷰렛의 불확도를 농도의 불확도로 전파하기.",

    // What you need to be able to do > checklist > span
    "Say how each common error changes the concentration, and suggest a realistic improvement.": "흔한 오차 각각이 농도를 어떻게 바꾸는지 말하고, 현실적인 개선 방법 제안하기.",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "A <dfn data-def=\"A solution whose concentration is known accurately.\">standard solution</dfn> is a solution whose concentration is known accurately. You make it by dissolving a weighed mass of solid and making the solution up to an exact volume. Two relationships do all the work:": "<dfn data-def=\"농도가 정확히 알려진 용액.\">표준 용액 <span class=\"en-term\">(standard solution)</span></dfn>은 농도가 정확히 알려진 용액이에요. 질량을 잰 고체를 녹이고, 용액을 정확한 부피로 맞추어 만들어요. 다음 두 관계식이면 충분해요:",

    // The chemistry behind it > data-def attribute
    "A solution whose concentration is known accurately.": "농도가 정확히 알려진 용액.",

    // The chemistry behind it > equation > dd
    "amount of solute <span class=\"unit\">mol</span>": "용질의 양 <span class=\"unit\">mol</span>",

    // The chemistry behind it > equation > dd
    "mass of solute <span class=\"unit\">g</span>": "용질의 질량 <span class=\"unit\">g</span>",

    // The chemistry behind it > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "몰 질량 <span class=\"unit\">g mol-1</span>",

    // The chemistry behind it > equation > dd
    "concentration <span class=\"unit\">mol dm-3</span>": "농도 <span class=\"unit\">mol dm-3</span>",

    // The chemistry behind it > equation > dd
    "volume of solution <span class=\"unit\">dm3</span>": "용액의 부피 <span class=\"unit\">dm3</span>",

    // The chemistry behind it > p
    "Diluting a solution does not change the amount of solute, so <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. The full explanations are on the topic page: <a href=\"../topics/s1-4.html#concentration\">Concentration</a>.": "용액을 희석해도 용질의 양은 변하지 않으므로 <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>예요. 자세한 설명은 단원 페이지에 있어요: <a href=\"../topics/s1-4.html#concentration\">농도</a>.",

    // The chemistry behind it > h3
    "Why copper(II) sulfate?": "왜 황산 구리(II)일까요?",

    // The chemistry behind it > p
    "Copper(II) sulfate solution is blue. The more concentrated it is, the deeper the blue and the more light it absorbs. A <dfn data-def=\"An instrument that shines light of one colour through a sample and measures how much of it is absorbed.\">colorimeter</dfn> measures this as a number called <dfn data-def=\"A measure of how much light a sample absorbs. It has no units. 0 means no light is absorbed.\">absorbance</dfn>. Over a sensible range, a graph of absorbance against concentration is a straight line. That graph is the <dfn data-def=\"A graph of an instrument reading against the known concentrations of standards, used to read off an unknown concentration.\">calibration curve</dfn>.": "황산 구리(II) 수용액은 파란색이에요. 진할수록 파란색이 짙어지고 빛을 더 많이 흡수해요. <dfn data-def=\"한 가지 색의 빛을 시료에 통과시켜, 그 빛이 얼마나 흡수되는지 재는 기기.\">비색계 <span class=\"en-term\">(colorimeter)</span></dfn>는 이것을 <dfn data-def=\"시료가 빛을 얼마나 흡수하는지 나타내는 값. 단위가 없어요. 0은 빛이 전혀 흡수되지 않는다는 뜻이에요.\">흡광도 <span class=\"en-term\">(absorbance)</span></dfn>라는 수로 재요. 적당한 범위에서는 농도에 대한 흡광도 그래프가 직선이에요. 이 그래프가 <dfn data-def=\"표준 용액의 알려진 농도에 대해 기기 측정값을 그린 그래프. 미지 농도를 읽어 내는 데 써요.\">검량선 <span class=\"en-term\">(calibration curve)</span></dfn>이에요.",

    // The chemistry behind it > data-def attribute
    "An instrument that shines light of one colour through a sample and measures how much of it is absorbed.": "한 가지 색의 빛을 시료에 통과시켜, 그 빛이 얼마나 흡수되는지 재는 기기.",

    // The chemistry behind it > data-def attribute
    "A measure of how much light a sample absorbs. It has no units. 0 means no light is absorbed.": "시료가 빛을 얼마나 흡수하는지 나타내는 값. 단위가 없어요. 0은 빛이 전혀 흡수되지 않는다는 뜻이에요.",

    // The chemistry behind it > data-def attribute
    "A graph of an instrument reading against the known concentrations of standards, used to read off an unknown concentration.": "표준 용액의 알려진 농도에 대해 기기 측정값을 그린 그래프. 미지 농도를 읽어 내는 데 써요.",

    // The chemistry behind it > p
    "The solid you weigh is the hydrate, <span class=\"chem\">CuSO4.5H2O</span>, <i>M</i> = 249.72 g mol<sup>−1</sup>. One mole of it gives one mole of <span class=\"chem\">CuSO4</span> in solution, so [<span class=\"chem\">CuSO4</span>] = <i>n</i>(hydrate) ÷ <i>V</i>.": "저울로 재는 고체는 수화물인 <span class=\"chem\">CuSO4.5H2O</span>이고, <i>M</i> = 249.72 g mol<sup>−1</sup>이에요. 이 고체 1몰은 용액에서 <span class=\"chem\">CuSO4</span> 1몰이 되므로 [<span class=\"chem\">CuSO4</span>] = <i>n</i>(수화물) ÷ <i>V</i>예요.",

    // The chemistry behind it > not needed for IB > p
    "You do not need the Beer–Lambert law or any equation for absorbance. You only need the method: standards of known concentration, a graph, a line of best fit, and reading the unknown from the line. The colorimeter here is simulated with a straight-line response.": "비어-람베르트 법칙이나 흡광도 식은 알 필요가 없어요. 방법만 알면 돼요: 농도를 아는 표준 용액, 그래프, 가장 잘 맞는 직선, 그리고 직선에서 미지 농도 읽기. 여기의 비색계는 직선으로 반응하도록 시뮬레이션한 것이에요.",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> To prepare a 0.250 mol dm<sup>−3</sup> standard solution of copper(II) sulfate, and to use it to find the concentration of an unknown copper(II) sulfate solution with a calibration curve.": "<strong>목적.</strong> 0.250 mol dm<sup>−3</sup> 황산 구리(II) 표준 용액을 만들고, 이 용액과 검량선을 이용해 농도를 모르는 황산 구리(II) 용액의 농도를 구해요.",

    // Aim, variables and safety > table > caption
    "Variables in part B": "B 부분의 변인",

    // Aim, variables and safety > table > th
    "Type": "종류",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    "How": "방법",

    // Aim, variables and safety > table > th
    "Independent": "독립 변인",

    // Aim, variables and safety > table > td
    "Concentration of each standard": "각 표준 용액의 농도",

    // Aim, variables and safety > table > td
    "Volumes of stock solution and water measured from two burettes": "뷰렛 2개로 잰 원액과 물의 부피",

    // Aim, variables and safety > table > th
    "Dependent": "종속 변인",

    // Aim, variables and safety > table > td
    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Absorbance": "흡광도",

    // Aim, variables and safety > table > td
    "Read on the colorimeter, ±0.01": "비색계에서 읽음, ±0.01",

    // Aim, variables and safety > table > th
    "Controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "Filter (colour of light)": "필터 (빛의 색)",

    // Aim, variables and safety > table > td
    "The same red filter for every reading": "모든 측정에 같은 빨간색 필터",

    // Aim, variables and safety > table > td
    "Path length and cuvette": "빛이 지나는 길이와 큐벳",

    // Aim, variables and safety > table > td
    "The same cuvette, same way round, filled to the same height": "같은 큐벳을 같은 방향으로, 같은 높이까지 채움",

    // Aim, variables and safety > table > td
    "Zero of the colorimeter": "비색계의 영점",

    // Aim, variables and safety > table > td
    "Set with a cuvette of distilled water (the blank) before measuring": "측정 전에 증류수가 든 큐벳(바탕 용액)으로 맞춤",

    // Aim, variables and safety > table > td
    "Temperature": "온도",

    // Aim, variables and safety > table > td
    "All solutions at room temperature": "모든 용액을 실온으로",

    // Aim, variables and safety > h3
    "Equipment": "기구",

    // Aim, variables and safety > li
    "Hydrated copper(II) sulfate, weighing boat, spatula, balance reading to 0.01 g": "황산 구리(II) 수화물, 칭량 접시, 약숟가락, 0.01 g까지 읽는 저울",

    // Aim, variables and safety > li
    "Beaker, glass stirring rod, filter funnel, wash bottle of distilled water, dropping pipette": "비커, 유리 막대, 깔때기, 증류수 세척병, 스포이트",

    // Aim, variables and safety > li
    "250.0 cm<sup>3</sup> volumetric flask (±0.2 cm<sup>3</sup>) with stopper": "마개가 있는 250.0 cm<sup>3</sup> 부피 플라스크 (±0.2 cm<sup>3</sup>)",

    // Aim, variables and safety > li
    "Two 50 cm<sup>3</sup> burettes (±0.05 cm<sup>3</sup> per reading), six test tubes in a rack": "50 cm<sup>3</sup> 뷰렛 2개 (한 번 읽을 때 ±0.05 cm<sup>3</sup>), 시험관대에 꽂은 시험관 6개",

    // Aim, variables and safety > li
    "Colorimeter with a red filter, cuvettes, tissue": "빨간색 필터를 끼운 비색계, 큐벳, 화장지",

    // Aim, variables and safety > p
    "Wear eye protection. Copper(II) sulfate, solid and solution, is harmful if swallowed and causes eye and skin irritation. Wipe up spills at once and wash your hands after the practical. It is very toxic to aquatic life, so collect all leftover solutions in the labelled waste container and do not pour them down the sink. Fill burettes below eye level, with a funnel, and remove the funnel before you take a reading. Glassware such as volumetric flasks breaks easily: hold the flask by the neck and the stopper together when you invert it.": "보안경을 쓰세요. 황산 구리(II)는 고체든 용액이든 삼키면 해롭고, 눈과 피부를 자극해요. 흘리면 바로 닦고 실험 후에는 손을 씻으세요. 수생 생물에 독성이 매우 강하므로 남은 용액은 모두 이름표가 붙은 폐액 용기에 모으고 개수대에 버리지 마세요. 뷰렛은 눈높이보다 낮은 곳에서 깔때기로 채우고, 눈금을 읽기 전에 깔때기를 빼세요. 부피 플라스크 같은 유리 기구는 깨지기 쉬워요. 플라스크를 뒤집을 때는 목과 마개를 함께 잡으세요.",

    // Method > h2
    "Method": "방법",

    // Method > h3
    "Part A: the standard solution": "A 부분: 표준 용액",

    // Method > li
    "Calculate the mass of <span class=\"chem\">CuSO4.5H2O</span> needed (15.61 g for 250.0 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup>).": "필요한 <span class=\"chem\">CuSO4.5H2O</span>의 질량을 계산해요 (0.250 mol dm<sup>−3</sup> 용액 250.0 cm<sup>3</sup>에는 15.61 g).",

    // Method > li
    "Weigh a weighing boat with about that mass of solid. Record the mass exactly; it does not need to be exactly 15.61 g.": "칭량 접시에 그 정도 질량의 고체를 담아 무게를 재요. 질량을 정확히 기록하세요. 꼭 15.61 g일 필요는 없어요.",

    // Method > li
    "Tip the solid into a beaker, then reweigh the empty boat. <span class=\"muted\">This is weighing by difference: the mass in the beaker is what you use, even if a few crystals stay in the boat.</span>": "고체를 비커에 쏟은 다음, 빈 접시의 무게를 다시 재요. <span class=\"muted\">이것이 차감 칭량(weighing by difference)이에요. 접시에 결정이 조금 남아 있어도, 계산에는 비커에 들어간 질량을 써요.</span>",

    // Method > li
    "Add about 100 cm<sup>3</sup> of distilled water and stir until all the solid has dissolved. <span class=\"muted\">Solid that has not dissolved would not reach the flask evenly.</span>": "증류수 약 100 cm<sup>3</sup>를 넣고 고체가 모두 녹을 때까지 저어요. <span class=\"muted\">녹지 않은 고체는 플라스크에 고르게 들어가지 않아요.</span>",

    // Method > li
    "Pour the solution through a funnel into the volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask. <span class=\"muted\">This makes sure all the weighed solute ends up in the flask.</span>": "깔때기를 통해 용액을 부피 플라스크에 부어요. 비커, 유리 막대, 깔때기를 증류수로 헹구고, 헹군 물도 플라스크에 넣어요. <span class=\"muted\">이렇게 해야 잰 용질이 모두 플라스크에 들어가요.</span>",

    // Method > li
    "Add distilled water until the bottom of the meniscus sits on the mark, with your eye level with the mark. Add the last few drops with a dropping pipette. <span class=\"muted\">Overshooting cannot be undone.</span>": "메니스커스의 바닥이 표선에 닿을 때까지 증류수를 넣어요. 이때 눈높이를 표선에 맞추어요. 마지막 몇 방울은 스포이트로 넣어요. <span class=\"muted\">표선을 넘기면 되돌릴 수 없어요.</span>",

    // Method > li
    "Stopper the flask and invert it ten or more times. <span class=\"muted\">Otherwise the solution near the bottom is more concentrated than near the top.</span>": "플라스크에 마개를 막고 10번 이상 뒤집어요. <span class=\"muted\">그러지 않으면 바닥 쪽 용액이 위쪽보다 진해요.</span>",

    // Method > h3
    "Part B: standards and the calibration curve": "B 부분: 표준 용액 세트와 검량선",

    // Method > li
    "Fill one burette with the standard solution and one with distilled water.": "뷰렛 하나에는 표준 용액을, 다른 하나에는 증류수를 채워요.",

    // Method > li
    "Run 2.00, 4.00, 6.00, 8.00 and 10.00 cm<sup>3</sup> of standard into five test tubes, and add water to make each up to 10.00 cm<sup>3</sup>. Mix each tube.": "표준 용액 2.00, 4.00, 6.00, 8.00, 10.00 cm<sup>3</sup>를 시험관 5개에 각각 넣고, 물을 넣어 각각 10.00 cm<sup>3</sup>로 맞춰요. 시험관마다 섞어요.",

    // Method > li
    "Fit the red filter. Put the blank (distilled water) in the colorimeter and set the reading to zero.": "빨간색 필터를 끼워요. 바탕 용액(증류수)을 비색계에 넣고 측정값을 0으로 맞춰요.",

    // Method > li
    "Measure the absorbance of each standard. Rinse the cuvette with the next solution before you fill it, and wipe the clear sides with tissue.": "각 표준 용액의 흡광도를 재요. 큐벳을 채우기 전에 다음 용액으로 헹구고, 투명한 면은 화장지로 닦아요.",

    // Method > li
    "Measure the unknown three times and take the mean.": "미지 용액을 3번 재고 평균을 구해요.",

    // Method > li
    "Plot absorbance against concentration, draw the line of best fit, and read the unknown’s concentration from the line.": "농도에 대한 흡광도 그래프를 그리고, 가장 잘 맞는 직선을 그은 다음, 직선에서 미지 용액의 농도를 읽어요.",

    // Method > exam tip (shown in English + translation) > p
    "For “describe how to prepare a standard solution”, markschemes look for: <strong>dissolve in distilled (or deionized) water</strong>; transfer <strong>with rinsings</strong> to a <strong>volumetric flask</strong>; <strong>make up to the mark</strong>; <strong>stopper and invert</strong> to mix. “Add 250 cm<sup>3</sup> of water” loses the mark.": "“표준 용액을 만드는 방법을 서술하시오”에서 채점 기준이 찾는 것은: <strong>증류수(또는 탈이온수)에 녹이기</strong>; <strong>헹군 물과 함께</strong> <strong>부피 플라스크</strong>로 옮기기; <strong>표선까지 채우기</strong>; <strong>마개를 막고 뒤집어</strong> 섞기. “물 250 cm<sup>3</sup>를 넣는다”라고 쓰면 점수를 잃어요.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > p
    "Every run gives slightly different readings, as a real one would. Try the good technique first, then change one choice at a time to see what each error does.": "실제 실험처럼 할 때마다 측정값이 조금씩 달라요. 먼저 올바른 방법으로 해 보고, 그다음 선택을 하나씩 바꾸면서 각 오차가 어떤 영향을 주는지 살펴봐요.",

    // Run the experiment > widget > data-title attribute
    "Part A: make the standard solution": "A 부분: 표준 용액 만들기",

    // Run the experiment > widget > figcaption
    "Check your mass calculation first, then do each step in order. The choices change how you transfer the solution, make it up to the mark and mix it. At the end, compare the concentration you would calculate with what is really in the flask.": "먼저 질량 계산을 확인하고, 단계를 순서대로 해요. 용액을 옮기는 방법, 표선까지 채우는 방법, 섞는 방법을 선택할 수 있어요. 마지막에 내가 계산할 농도와 플라스크에 실제로 들어 있는 농도를 비교해요.",

    // Run the experiment > widget > data-title attribute
    "Part B: standards, colorimeter and calibration curve": "B 부분: 표준 용액 세트, 비색계, 검량선",

    // Run the experiment > widget > figcaption
    "Make the standards, zero the colorimeter on the blank, measure the standards and the unknown, then read the unknown from the line. Try measuring cylinders instead of burettes, or a filter of the wrong colour, and watch the points scatter or the line flatten.": "표준 용액을 만들고, 바탕 용액으로 비색계의 영점을 맞추고, 표준 용액과 미지 용액을 잰 다음, 직선에서 미지 농도를 읽어요. 뷰렛 대신 눈금실린더를 쓰거나 다른 색 필터를 써 보고, 점이 흩어지거나 직선이 완만해지는 것을 살펴봐요.",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > worked example > h3
    "The concentration of the standard solution": "표준 용액의 농도",

    // Processing the data > worked example > p
    "A student wants 250.0 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup> copper(II) sulfate. They weigh by difference: boat and solid 17.43 g, empty boat afterwards 1.84 g. Calculate the mass they should aim for, and the actual concentration they made. <i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>.": "한 학생이 0.250 mol dm<sup>−3</sup> 황산 구리(II) 250.0 cm<sup>3</sup>를 만들려고 해요. 차감 칭량을 해서 접시와 고체는 17.43 g, 쏟은 뒤의 빈 접시는 1.84 g이었어요. 목표로 해야 할 질량과 실제로 만든 농도를 계산하시오 (calculate). <i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>.",

    // Processing the data > worked example > data-title attribute
    "Amount needed": "필요한 양",

    // Processing the data > worked example > p
    "Convert the volume to dm<sup>3</sup> first, then use <i>n</i> = <i>CV</i>.": "먼저 부피를 dm<sup>3</sup>로 바꾼 다음, <i>n</i> = <i>CV</i>를 써요.",

    // Processing the data > worked example > data-title attribute
    "Mass to aim for": "목표 질량",

    // Processing the data > worked example > p
    "Use the molar mass of the hydrate, because that is the solid on the balance.": "수화물의 몰 질량을 써요. 저울에 올린 고체가 수화물이니까요.",

    // Processing the data > worked example > data-title attribute
    "Mass actually used": "실제로 쓴 질량",

    // Processing the data > worked example > p
    "The mass in the beaker is the difference between the two readings.": "비커에 들어간 질량은 두 측정값의 차이예요.",

    // Processing the data > worked example > data-title attribute
    "Actual concentration": "실제 농도",

    // Processing the data > worked example > p
    "Report the concentration you really made, not the one you aimed for.": "목표로 한 농도가 아니라 실제로 만든 농도를 보고해요.",

    // Processing the data > worked example > p
    "Aim for 15.61 g. The solution made is 0.2497 mol dm<sup>−3</sup> (4 s.f., matching 15.59 g and 250.0 cm<sup>3</sup>).": "15.61 g을 목표로 해요. 만든 용액은 0.2497 mol dm<sup>−3</sup>예요 (15.59 g과 250.0 cm<sup>3</sup>에 맞춘 유효 숫자 4자리).",

    // Processing the data > try it > p
    "Another student uses a 100.0 cm<sup>3</sup> volumetric flask. Boat and solid: 7.95 g. Empty boat afterwards: 1.69 g. Calculate the concentration of copper(II) sulfate in the flask.": "다른 학생은 100.0 cm<sup>3</sup> 부피 플라스크를 써요. 접시와 고체: 7.95 g. 쏟은 뒤의 빈 접시: 1.69 g. 플라스크 속 황산 구리(II)의 농도를 계산하시오 (calculate).",

    // Processing the data > try it > li
    "Mass transferred = 7.95 − 1.69. Then <i>n</i> = <i>m</i> ÷ 249.72.": "옮긴 질량 = 7.95 − 1.69. 그다음 <i>n</i> = <i>m</i> ÷ 249.72.",

    // Processing the data > try it > li
    "[<span class=\"chem\">CuSO4</span>] = <i>n</i> ÷ 0.1000 dm<sup>3</sup>.": "[<span class=\"chem\">CuSO4</span>] = <i>n</i> ÷ 0.1000 dm<sup>3</sup>.",

    // Processing the data > h3
    "Diluting to make the standards": "희석해서 표준 용액 만들기",

    // Processing the data > p
    "Each standard is a dilution of the stock, so use <i>C</i><sub>2</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>, where <i>V</i><sub>2</sub> is the total volume (stock + water).": "각 표준 용액은 원액을 희석한 것이므로 <i>C</i><sub>2</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>를 써요. 여기서 <i>V</i><sub>2</sub>는 전체 부피(원액 + 물)예요.",

    // Processing the data > try it > p
    "A test tube holds 7.00 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup> copper(II) sulfate and 3.00 cm<sup>3</sup> of distilled water. Calculate the concentration of the mixture.": "시험관에 0.250 mol dm<sup>−3</sup> 황산 구리(II) 7.00 cm<sup>3</sup>와 증류수 3.00 cm<sup>3</sup>가 들어 있어요. 이 혼합 용액의 농도를 계산하시오 (calculate).",

    // Processing the data > try it > li
    "The total volume is 7.00 + 3.00 = 10.00 cm<sup>3</sup>.": "전체 부피는 7.00 + 3.00 = 10.00 cm<sup>3</sup>예요.",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "예제 2",

    // Processing the data > worked example > h3
    "Reading an unknown from the calibration curve": "검량선에서 미지 농도 읽기",

    // Processing the data > worked example > table > caption
    "Calibration data (red filter)": "검량 자료 (빨간색 필터)",

    // Processing the data > worked example > table > th
    "Standard": "표준 용액",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "[CuSO₄] / mol dm⁻³": "[CuSO₄] / mol dm⁻³",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Blank": "바탕 용액",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Unknown": "미지 용액",

    // Processing the data > worked example > p
    "Find the concentration of the unknown in mol dm<sup>−3</sup> and in g dm<sup>−3</sup>. <i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 g mol<sup>−1</sup>.": "미지 용액의 농도를 mol dm<sup>−3</sup> 단위와 g dm<sup>−3</sup> 단위로 구하시오. <i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 g mol<sup>−1</sup>.",

    // Processing the data > worked example > data-title attribute
    "Average the unknown": "미지 용액의 평균 구하기",

    // Processing the data > worked example > p
    "Repeat readings reduce the effect of random error.": "반복 측정은 우연 오차의 영향을 줄여요.",

    // Processing the data > worked example > maths line
    "mean absorbance = (0.41 + 0.42 + 0.41) ÷ 3 = 0.413": "평균 흡광도 = (0.41 + 0.42 + 0.41) ÷ 3 = 0.413",

    // Processing the data > worked example > data-title attribute
    "Find the gradient of the line": "직선의 기울기 구하기",

    // Processing the data > worked example > p
    "The points lie close to a straight line through the origin. Use two points on the line, far apart.": "점들이 원점을 지나는 직선 가까이에 있어요. 직선 위에서 멀리 떨어진 두 점을 써요.",

    // Processing the data > worked example > maths line
    "gradient = (0.740 − 0.000) ÷ (0.2500 − 0.0000) = 2.96 dm<sup>3</sup> mol<sup>−1</sup>": "기울기 = (0.740 − 0.000) ÷ (0.2500 − 0.0000) = 2.96 dm<sup>3</sup> mol<sup>−1</sup>",

    // Processing the data > worked example > data-title attribute
    "Read the concentration": "농도 읽기",

    // Processing the data > worked example > p
    "On the graph you read across from the absorbance to the line and down to the axis. The gradient does the same job.": "그래프에서는 흡광도에서 가로로 직선까지 간 다음, 아래로 축까지 내려가 읽어요. 기울기로 계산해도 같은 결과가 나와요.",

    // Processing the data > worked example > data-title attribute
    "Convert to g dm⁻³": "g dm⁻³로 바꾸기",

    // Processing the data > worked example > p
    "Multiply by the molar mass of the dissolved substance, <span class=\"chem\">CuSO4</span>.": "녹아 있는 물질인 <span class=\"chem\">CuSO4</span>의 몰 질량을 곱해요.",

    // Processing the data > worked example > p
    "[<span class=\"chem\">CuSO4</span>] = 0.140 mol dm<sup>−3</sup> = 22.3 g dm<sup>−3</sup>. The unknown lies inside the range of the standards, so reading it from the line is reliable.": "[<span class=\"chem\">CuSO4</span>] = 0.140 mol dm<sup>−3</sup> = 22.3 g dm<sup>−3</sup>. 미지 용액이 표준 용액의 범위 안에 있으므로 직선에서 읽은 값을 믿을 수 있어요.",

    // Processing the data > common mistake > p
    "Reading an unknown from a part of the line you have extended beyond the last standard is not reliable: the line may bend at high absorbance. If the unknown is above the top standard, dilute it by a known factor, measure it again, and multiply the result by the factor.": "마지막 표준 용액보다 더 연장한 직선 부분에서 미지 농도를 읽으면 믿을 수 없어요. 흡광도가 높으면 직선이 휠 수 있어요. 미지 용액이 가장 진한 표준 용액보다 위에 있으면, 알고 있는 배수로 희석해서 다시 재고, 결과에 그 배수를 곱해요.",

    // Processing the data > try it > p
    "In another run the line of best fit passes through the origin with a gradient of 2.95 dm<sup>3</sup> mol<sup>−1</sup>. The mean absorbance of the unknown is 0.52. Calculate [<span class=\"chem\">CuSO4</span>].": "다른 실험에서 가장 잘 맞는 직선이 원점을 지나고 기울기는 2.95 dm<sup>3</sup> mol<sup>−1</sup>이에요. 미지 용액의 평균 흡광도는 0.52예요. [<span class=\"chem\">CuSO4</span>]를 계산하시오 (calculate).",

    // Processing the data > try it > li
    "Absorbance = gradient × concentration, for a line through the origin.": "원점을 지나는 직선에서는 흡광도 = 기울기 × 농도예요.",

    // Processing the data > try it > li
    "[<span class=\"chem\">CuSO4</span>] = 0.52 ÷ 2.95.": "[<span class=\"chem\">CuSO4</span>] = 0.52 ÷ 2.95.",

    // Processing the data > try it > p
    "The absorbance has 2 significant figures, so 0.18 (or 0.176) mol dm<sup>−3</sup>.": "흡광도가 유효 숫자 2자리이므로 0.18 (또는 0.176) mol dm<sup>−3</sup>예요.",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > p
    "Every piece of glassware has an uncertainty, usually printed on it. For a reading on a scale, it is half the smallest division or the precision of the display.": "모든 유리 기구에는 불확도가 있고, 보통 기구에 인쇄되어 있어요. 눈금을 읽을 때의 불확도는 가장 작은 눈금의 절반이거나 표시 장치의 정밀도예요.",

    // Uncertainties > table > caption
    "Typical uncertainties of the apparatus": "기구의 일반적인 불확도",

    // Uncertainties > table > th
    "Apparatus": "기구",

    // Uncertainties > table > th
    "Uncertainty": "불확도",

    // Uncertainties > table > th
    "Note": "메모",

    // Uncertainties > table > th
    "Balance (2 d.p.)": "저울 (소수점 아래 2자리)",

    // Uncertainties > table > td
    "Per reading. A mass by difference uses two readings: ±0.02 g": "한 번 읽을 때의 값. 차감 칭량은 두 번 읽으므로: ±0.02 g",

    // Uncertainties > table > th
    "Volumetric flask, 250.0 cm<sup>3</sup>": "부피 플라스크, 250.0 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.2 cm<sup>3</sup>": "±0.2 cm<sup>3</sup>",

    // Uncertainties > table > td
    "One volume only": "한 가지 부피만 잼",

    // Uncertainties > table > th
    "Volumetric pipette, 25.00 cm<sup>3</sup>": "부피 피펫, 25.00 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.04 cm<sup>3</sup>": "±0.04 cm<sup>3</sup>",

    // Uncertainties > table > th
    "Burette": "뷰렛",

    // Uncertainties > table > td
    "±0.05 cm<sup>3</sup>": "±0.05 cm<sup>3</sup>",

    // Uncertainties > table > td
    "Per reading. A volume delivered uses two readings: ±0.10 cm<sup>3</sup>": "한 번 읽을 때의 값. 넣은 부피는 두 번 읽으므로: ±0.10 cm<sup>3</sup>",

    // Uncertainties > table > th
    "Measuring cylinder, 10 cm<sup>3</sup>": "눈금실린더, 10 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.1 cm<sup>3</sup>": "±0.1 cm<sup>3</sup>",

    // Uncertainties > table > td
    "Not precise enough for standard solutions": "표준 용액에 쓰기에는 정밀하지 않음",

    // Uncertainties > table > th
    "Colorimeter": "비색계",

    // Uncertainties > table > td
    "Absorbance has no units": "흡광도는 단위가 없음",

    // Uncertainties > worked example > data-kicker attribute
    "Worked example 3": "예제 3",

    // Uncertainties > worked example > h3
    "Uncertainty in the stock and in one standard": "원액과 표준 용액 하나의 불확도",

    // Uncertainties > worked example > p
    "Use the worked example above: 15.59 g of solid in a 250.0 cm<sup>3</sup> flask gives 0.2497 mol dm<sup>−3</sup>. Standard 2 is 4.00 cm<sup>3</sup> of this stock and 6.00 cm<sup>3</sup> of water, each from a burette. Find the percentage uncertainty in each concentration.": "위의 예제를 이용해요: 고체 15.59 g을 250.0 cm<sup>3</sup> 플라스크에 녹이면 0.2497 mol dm<sup>−3</sup>예요. 표준 용액 2는 이 원액 4.00 cm<sup>3</sup>와 물 6.00 cm<sup>3</sup>를 각각 뷰렛으로 넣어 만들어요. 각 농도의 백분율 불확도를 구하시오.",

    // Uncertainties > worked example > data-title attribute
    "Stock: the mass": "원액: 질량",

    // Uncertainties > worked example > p
    "Weighing by difference uses two readings, ±0.01 g each.": "차감 칭량은 두 번 읽고, 한 번에 ±0.01 g이에요.",

    // Uncertainties > worked example > data-title attribute
    "Stock: the volume": "원액: 부피",

    // Uncertainties > worked example > p
    "Concentration = <i>n</i> ÷ <i>V</i> is a division, so the percentages add.": "농도 = <i>n</i> ÷ <i>V</i>는 나눗셈이므로 백분율 불확도를 더해요.",

    // Uncertainties > worked example > maths line
    "stock: 0.13 % + 0.08 % = 0.21 %, so 0.2497 ± 0.0005 mol dm<sup>−3</sup>": "원액: 0.13 % + 0.08 % = 0.21 %, 따라서 0.2497 ± 0.0005 mol dm<sup>−3</sup>",

    // Uncertainties > worked example > data-title attribute
    "Standard 2: the volumes": "표준 용액 2: 부피",

    // Uncertainties > worked example > p
    "Each burette volume is a difference of two readings: ±0.10 cm<sup>3</sup>. The total volume is a sum of two volumes: ±0.20 cm<sup>3</sup>.": "뷰렛으로 잰 부피는 각각 두 측정값의 차이예요: ±0.10 cm<sup>3</sup>. 전체 부피는 두 부피의 합이에요: ±0.20 cm<sup>3</sup>.",

    // Uncertainties > worked example > maths line
    "stock taken: 0.10 ÷ 4.00 × 100 = 2.5 %": "넣은 원액: 0.10 ÷ 4.00 × 100 = 2.5 %",

    // Uncertainties > worked example > maths line
    "total volume: 0.20 ÷ 10.00 × 100 = 2.0 %": "전체 부피: 0.20 ÷ 10.00 × 100 = 2.0 %",

    // Uncertainties > worked example > data-title attribute
    "Standard 2: combine": "표준 용액 2: 합치기",

    // Uncertainties > worked example > p
    "<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub> × <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>: multiply and divide, so add all three percentages.": "<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub> × <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>: 곱하고 나누므로 백분율 3개를 모두 더해요.",

    // Uncertainties > worked example > p
    "Stock: ±0.21 %. Standard 2: about ±5 %. The small volumes in the dilution, not the balance or the flask, control the uncertainty of the standards.": "원액: ±0.21 %. 표준 용액 2: 약 ±5 %. 표준 용액의 불확도를 좌우하는 것은 저울이나 플라스크가 아니라 희석에 쓴 작은 부피예요.",

    // Uncertainties > key idea > p
    "The same absolute uncertainty is a bigger percentage of a smaller quantity. That is why the most dilute standard is the least certain, and why bigger volumes (a pipette into a 100.0 cm<sup>3</sup> flask, say) give better standards than a few cm<sup>3</sup> from a burette.": "같은 절대 불확도라도 양이 작을수록 백분율이 커요. 그래서 가장 묽은 표준 용액의 불확도가 가장 크고, 뷰렛으로 넣은 몇 cm<sup>3</sup>보다 큰 부피(예를 들어 피펫으로 100.0 cm<sup>3</sup> 플라스크에 넣기)로 만든 표준 용액이 더 좋아요.",

    // Uncertainties > h3
    "Comparing with the true value": "참값과 비교하기",

    // Uncertainties > p
    "Suppose the unknown was made by the teacher as 0.150 mol dm<sup>−3</sup>, and you found 0.140 mol dm<sup>−3</sup>.": "선생님이 미지 용액을 0.150 mol dm<sup>−3</sup>로 만들었고, 여러분은 0.140 mol dm<sup>−3</sup>를 얻었다고 해 봐요.",

    // Uncertainties > maths line
    "percentage error = |0.140 − 0.150| ÷ 0.150 × 100 = 6.7 %": "백분율 오차 = |0.140 − 0.150| ÷ 0.150 × 100 = 6.7 %",

    // Uncertainties > p
    "The uncertainty of the result is at least that of the standards (about 5 %), plus the reading of the absorbance (0.01 in 0.41, about 2.4 %), so around 7 %. The percentage error is about the same size, so the result is consistent with the true value within its uncertainty. If the error had been 20 %, you should look for a systematic error.": "결과의 불확도는 적어도 표준 용액의 불확도(약 5 %)에 흡광도 읽기의 불확도(0.41에서 0.01, 약 2.4 %)를 더한 값, 즉 약 7 %예요. 백분율 오차가 이와 비슷하므로, 결과는 불확도 범위 안에서 참값과 일치해요. 오차가 20 %였다면 계통 오차를 찾아봐야 해요.",

    // Uncertainties > try it > p
    "A student makes a standard by running 10.00 cm<sup>3</sup> of stock from a volumetric pipette (±0.04 cm<sup>3</sup>) into a 50.00 cm<sup>3</sup> volumetric flask (±0.08 cm<sup>3</sup>) and making it up to the mark. Ignoring the uncertainty of the stock, calculate the percentage uncertainty in the new concentration.": "한 학생이 부피 피펫(±0.04 cm<sup>3</sup>)으로 원액 10.00 cm<sup>3</sup>를 50.00 cm<sup>3</sup> 부피 플라스크(±0.08 cm<sup>3</sup>)에 넣고 표선까지 채워 표준 용액을 만들어요. 원액의 불확도는 무시하고, 새 농도의 백분율 불확도를 계산하시오 (calculate).",

    // Uncertainties > try it > li
    "Find the percentage uncertainty of each volume.": "각 부피의 백분율 불확도를 구해요.",

    // Uncertainties > try it > li
    "0.04 ÷ 10.00 × 100 and 0.08 ÷ 50.00 × 100, then add.": "0.04 ÷ 10.00 × 100과 0.08 ÷ 50.00 × 100을 구한 다음 더해요.",

    // Uncertainties > try it > maths line
    "pipette: 0.04 ÷ 10.00 × 100 = 0.4 %": "피펫: 0.04 ÷ 10.00 × 100 = 0.4 %",

    // Uncertainties > try it > maths line
    "flask: 0.08 ÷ 50.00 × 100 = 0.16 %": "플라스크: 0.08 ÷ 50.00 × 100 = 0.16 %",

    // Uncertainties > try it > maths line
    "total = 0.4 % + 0.16 % = 0.56 %": "합계 = 0.4 % + 0.16 % = 0.56 %",

    // Uncertainties > try it > p
    "About 0.6 %, much better than about 5 % with burettes into 10 cm<sup>3</sup>.": "약 0.6 %예요. 뷰렛으로 10 cm<sup>3</sup>를 만들 때의 약 5 %보다 훨씬 좋아요.",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "오차와 개선",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "<dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">Random errors</dfn> make the points scatter about the line; more precise glassware and repeats reduce them. <dfn data-def=\"An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.\">Systematic errors</dfn> move every result the same way; only a better method removes them.": "<dfn data-def=\"반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복 측정과 평균으로 영향을 줄일 수 있어요.\">우연 오차 <span class=\"en-term\">(random errors)</span></dfn>는 점들을 직선 주위로 흩어지게 해요. 더 정밀한 유리 기구와 반복 측정으로 줄일 수 있어요. <dfn data-def=\"모든 결과를 같은 방향으로, 예를 들어 항상 너무 낮게 밀어내는 오차. 반복해도 없어지지 않고, 방법을 바꿔야 해요.\">계통 오차 <span class=\"en-term\">(systematic errors)</span></dfn>는 모든 결과를 같은 방향으로 옮겨요. 더 나은 방법만이 이 오차를 없앨 수 있어요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복 측정과 평균으로 영향을 줄일 수 있어요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.": "모든 결과를 같은 방향으로, 예를 들어 항상 너무 낮게 밀어내는 오차. 반복해도 없어지지 않고, 방법을 바꿔야 해요.",

    // Evaluation: errors and improvements > table > caption
    "Common errors, their effect, and how to fix them": "흔한 오차, 그 영향, 고치는 방법",

    // Evaluation: errors and improvements > table > th
    "Source of error": "오차 원인",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "결과에 미치는 영향",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "현실적인 개선 방법",

    // Evaluation: errors and improvements > table > th
    "Rinsings of the beaker and funnel not added to the flask": "비커와 깔때기를 헹군 물을 플라스크에 넣지 않음",

    // Evaluation: errors and improvements > table > td
    "Some solute is lost: the true concentration is <strong>lower</strong> than the one calculated": "용질 일부를 잃어요: 실제 농도가 계산한 농도보다 <strong>낮아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Rinse beaker, rod and funnel with distilled water and add every rinsing to the flask": "비커, 유리 막대, 깔때기를 증류수로 헹구고 헹군 물을 모두 플라스크에 넣기",

    // Evaluation: errors and improvements > table > th
    "Water added past the mark": "표선을 넘게 물을 넣음",

    // Evaluation: errors and improvements > table > td
    "Volume too large: concentration <strong>lower</strong> than calculated": "부피가 너무 커요: 농도가 계산값보다 <strong>낮아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Add the last few cm<sup>3</sup> drop by drop with a dropping pipette, eye level with the mark": "마지막 몇 cm<sup>3</sup>는 눈높이를 표선에 맞추고 스포이트로 한 방울씩 넣기",

    // Evaluation: errors and improvements > table > th
    "Stopped below the mark, or meniscus read from above": "표선 아래에서 멈춤, 또는 메니스커스를 위에서 내려다보고 읽음",

    // Evaluation: errors and improvements > table > td
    "Volume too small: concentration <strong>higher</strong> than calculated": "부피가 너무 작아요: 농도가 계산값보다 <strong>높아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Read the bottom of the meniscus with your eye level with the mark": "눈높이를 표선에 맞추고 메니스커스의 바닥을 읽기",

    // Evaluation: errors and improvements > table > th
    "Flask not inverted to mix": "섞기 위해 플라스크를 뒤집지 않음",

    // Evaluation: errors and improvements > table > td
    "The solution is not uniform: samples taken from it are too dilute or too concentrated, at random": "용액이 균일하지 않아요: 덜어 낸 시료가 무작위로 너무 묽거나 너무 진해요",

    // Evaluation: errors and improvements > table > td
    "Stopper and invert at least ten times": "마개를 막고 적어도 10번 뒤집기",

    // Evaluation: errors and improvements > table > th
    "Mass of solid taken from the first reading only (no reweighing of the boat)": "고체의 질량을 첫 측정값만으로 구함 (접시를 다시 재지 않음)",

    // Evaluation: errors and improvements > table > td
    "Crystals left in the boat are counted: calculated concentration <strong>higher</strong> than the true one": "접시에 남은 결정까지 계산에 들어가요: 계산한 농도가 실제보다 <strong>높아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Weigh by difference: reweigh the boat after tipping": "차감 칭량하기: 쏟은 뒤 접시를 다시 재기",

    // Evaluation: errors and improvements > table > th
    "Standards measured with measuring cylinders": "표준 용액을 눈금실린더로 잼",

    // Evaluation: errors and improvements > table > td
    "Large random error: points scatter about the line, so the unknown is less certain": "우연 오차가 커요: 점들이 직선 주위로 흩어져서 미지 농도가 덜 확실해요",

    // Evaluation: errors and improvements > table > td
    "Use burettes, or pipettes and volumetric flasks": "뷰렛을 쓰거나, 피펫과 부피 플라스크를 쓰기",

    // Evaluation: errors and improvements > table > th
    "Colorimeter not zeroed with the blank": "바탕 용액으로 비색계의 영점을 맞추지 않음",

    // Evaluation: errors and improvements > table > td
    "Every absorbance is too high by the same amount: the line does not pass through the origin. A line through the origin would then give an unknown that is too <strong>high</strong>": "모든 흡광도가 같은 양만큼 너무 높아요: 직선이 원점을 지나지 않아요. 이때 원점을 지나는 직선을 쓰면 미지 농도가 너무 <strong>높게</strong> 나와요",

    // Evaluation: errors and improvements > table > td
    "Zero on a cuvette of distilled water before measuring, and check the zero again between readings": "측정 전에 증류수가 든 큐벳으로 영점을 맞추고, 측정 사이사이에 영점을 다시 확인하기",

    // Evaluation: errors and improvements > table > th
    "Fingerprints, scratches or bubbles on the cuvette": "큐벳에 지문, 긁힘, 기포가 있음",

    // Evaluation: errors and improvements > table > td
    "Random extra absorbance: readings too high and scattered": "무작위로 흡광도가 더해져요: 측정값이 너무 높고 흩어져요",

    // Evaluation: errors and improvements > table > td
    "Hold cuvettes by the ridged sides, wipe the clear sides, tap out bubbles": "큐벳은 홈이 있는 면을 잡고, 투명한 면을 닦고, 톡톡 쳐서 기포를 빼기",

    // Evaluation: errors and improvements > table > th
    "Wrong filter (blue light for a blue solution)": "잘못된 필터 (파란색 용액에 파란빛)",

    // Evaluation: errors and improvements > table > td
    "Very small absorbances and a shallow line: a large percentage uncertainty": "흡광도가 아주 작고 직선이 완만해요: 백분율 불확도가 커요",

    // Evaluation: errors and improvements > table > td
    "Use the filter of the complementary colour (red or orange for a blue solution)": "보색 필터 쓰기 (파란색 용액에는 빨간색이나 주황색)",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For each error, give the direction and the reason: “volume too large, so the concentration is lower than calculated”. Then give an improvement that fixes that exact error. The colour wheel in the data booklet tells you which filter is complementary to the colour of the solution.": "오차마다 방향과 이유를 쓰세요: “부피가 너무 크므로 농도가 계산값보다 낮다”. 그다음 바로 그 오차를 고치는 개선 방법을 쓰세요. 데이터 부클릿의 색상환을 보면 용액의 색에 대한 보색 필터를 알 수 있어요.",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "These questions are in the style of Paper 1B: short parts built on practical data. Write your working on paper before you type an answer.": "이 문제들은 Paper 1B 형식이에요: 실험 자료를 바탕으로 한 짧은 소문항들이에요. 답을 입력하기 전에 종이에 풀이를 써 보세요.",

    // Exam practice > data-title attribute
    "Lab 6: standard solutions and calibration": "실험 6: 표준 용액과 검량",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copy table": "표 복사",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Raw data": "원자료",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "No readings yet.": "아직 측정값이 없어요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copied. Paste it into a spreadsheet or your notes.": "복사했어요. 스프레드시트나 노트에 붙여 넣으세요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copying is blocked here. Select the table and copy it by hand.": "여기서는 복사가 막혀 있어요. 표를 선택해서 직접 복사하세요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Volumetric flask": "부피 플라스크",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "100.0 cm³ (±0.10 cm³)": "100.0 cm³ (±0.10 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "250.0 cm³ (±0.2 cm³)": "250.0 cm³ (±0.2 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Check": "확인",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Transfer to the flask": "플라스크로 옮기기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Rinse beaker, rod and funnel; add rinsings": "비커·막대·깔때기 헹군 물도 넣기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Pour only, no rinsing": "붓기만 하고 헹구지 않기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Making up to the mark": "표선까지 채우기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Eye level, last drops by dropping pipette": "눈높이에서, 마지막은 스포이트로",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Fill quickly from the wash bottle": "세척병으로 빠르게 채우기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stop with the meniscus below the mark": "메니스커스가 표선 아래일 때 멈추기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mixing": "섞기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stopper and invert ten times": "마개를 막고 10번 뒤집기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Do not mix": "섞지 않기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Do the next step": "다음 단계 하기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Start again": "처음부터 다시",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "A balance and a volumetric flask with a close-up of the neck, showing the meniscus and the graduation mark": "저울과 부피 플라스크. 플라스크 목을 확대해 메니스커스와 표선을 보여 줌",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Part A: making the standard solution": "A 부분: 표준 용액 만들기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Balance reading": "저울 측정값",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Concentration from your data": "내 자료로 구한 농도",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Concentration really in the flask": "플라스크 속 실제 농도",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Your calculated mass of CuSO₄·5H₂O for {v} cm³ of {c} mol dm⁻³": "{c} mol dm⁻³ 용액 {v} cm³에 필요한 CuSO₄·5H₂O 질량 계산값",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Correct: aim for about {m} g. You do not need exactly this mass, but you must record the mass you use.": "맞아요: 약 {m} g을 목표로 해요. 꼭 이 질량일 필요는 없지만, 실제로 쓴 질량은 기록해야 해요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Right value. Give it to 3 or 4 significant figures.": "값은 맞아요. 유효 숫자 3자리나 4자리로 쓰세요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Type a number, such as 12.3.": "12.3처럼 수를 입력하세요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Not yet. Use n = CV with V in dm³, then m = n × M with the molar mass of the hydrate, 249.72 g mol⁻¹.": "아직 아니에요. V를 dm³로 바꿔 n = CV를 쓴 다음, 수화물의 몰 질량 249.72 g mol⁻¹로 m = n × M을 계산해요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Weigh the weighing boat with the solid.": "고체를 담은 칭량 접시의 무게를 재요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Tip the solid into a beaker and reweigh the empty boat.": "고체를 비커에 쏟고 빈 접시의 무게를 다시 재요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Dissolve the solid in about 100 cm³ of distilled water, stirring.": "고체를 증류수 약 100 cm³에 넣고 저어서 녹여요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Transfer the solution to the volumetric flask through a funnel.": "깔때기를 통해 용액을 부피 플라스크로 옮겨요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Add distilled water up to the mark.": "표선까지 증류수를 넣어요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stopper the flask and mix.": "플라스크에 마개를 막고 섞어요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "the mark": "표선",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "{v} cm³ flask": "{v} cm³ 플라스크",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "balance, ±0.01 g": "저울, ±0.01 g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Ready to weigh": "잴 준비 완료",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Step {n} of 6 done": "6단계 중 {n}단계 완료",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus on the mark": "메니스커스가 표선에 맞음",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus above the mark": "메니스커스가 표선 위",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus below the mark": "메니스커스가 표선 아래",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "(done)": "(완료)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "(next)": "(다음)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of boat and solid / g": "접시와 고체의 질량 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of empty boat after tipping / g": "쏟은 뒤 빈 접시의 질량 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of solid transferred / g": "옮긴 고체의 질량 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Volume of solution / cm³": "용액의 부피 / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Quantity": "양",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Value": "값",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The solution really in the flask differs from your calculated value by {d} %.": "플라스크 속 실제 용액은 계산값과 {d} % 차이 나요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Without rinsing, some copper(II) sulfate stayed in the beaker and funnel, so the true concentration is lower than you calculated.": "헹구지 않아서 황산 구리(II) 일부가 비커와 깔때기에 남았어요. 그래서 실제 농도가 계산한 값보다 낮아요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You went past the mark, so the volume is too large and the true concentration is lower than you calculated.": "표선을 넘겼어요. 그래서 부피가 너무 크고 실제 농도가 계산한 값보다 낮아요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You stopped below the mark, so the volume is too small and the true concentration is higher than you calculated.": "표선 아래에서 멈췄어요. 그래서 부피가 너무 작고 실제 농도가 계산한 값보다 높아요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Not mixed: a sample from the top of the flask is only {c} mol dm⁻³. The solution is not uniform.": "섞지 않았어요: 플라스크 위쪽에서 덜어 낸 시료는 {c} mol dm⁻³밖에 안 돼요. 용액이 균일하지 않아요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Good technique: the only differences come from the balance and the tolerance of the flask, and they are tiny.": "올바른 방법이에요: 차이는 저울과 플라스크의 허용 오차에서만 생기고, 아주 작아요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Measure the volumes with": "부피를 잴 기구",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Two burettes (±0.05 cm³)": "뷰렛 2개 (±0.05 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Two measuring cylinders (±0.1 cm³)": "눈금실린더 2개 (±0.1 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Colorimeter filter": "비색계 필터",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Red": "빨간색",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Green": "초록색",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Blue": "파란색",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "1. Make the standards": "1. 표준 용액 만들기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "2. Zero with the blank": "2. 바탕 용액으로 영점 맞추기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "3. Measure the standards": "3. 표준 용액 재기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "4. Measure the unknown (×3)": "4. 미지 용액 재기 (×3)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Reveal the true value": "참값 보기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "New run": "새 실험",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Part B: standards and absorbance readings": "B 부분: 표준 용액과 흡광도 측정값",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Gradient of the line": "직선의 기울기",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "y-intercept": "y절편",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mean absorbance of the unknown": "미지 용액의 평균 흡광도",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Unknown concentration read from the line": "직선에서 읽은 미지 농도",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "standards": "표준 용액",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "line of best fit": "가장 잘 맞는 직선",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "unknown": "미지 용액",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Calibration graph: absorbance against concentration of copper(II) sulfate for the standards, with the line of best fit and the reading for the unknown": "검량선 그래프: 표준 용액의 황산 구리(II) 농도에 대한 흡광도, 가장 잘 맞는 직선, 미지 용액의 측정값",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Start by making the five standards from the 0.250 mol dm⁻³ stock solution.": "먼저 0.250 mol dm⁻³ 원액으로 표준 용액 5개를 만들어요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The colorimeter reads zero with the blank. Now measure the standards.": "바탕 용액을 넣은 비색계가 0을 가리켜요. 이제 표준 용액을 재요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Zero the colorimeter with the blank (distilled water) before you measure.": "재기 전에 바탕 용액(증류수)으로 비색계의 영점을 맞추세요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You did not zero on the blank: every reading includes the absorbance of the cuvette and water, so the line does not pass through the origin.": "바탕 용액으로 영점을 맞추지 않았어요: 모든 측정값에 큐벳과 물의 흡광도가 들어가서 직선이 원점을 지나지 않아요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "With this filter the absorbances are small and the line is shallow, so each 0.01 reading error is a large part of the value. A blue solution absorbs red light most.": "이 필터로는 흡광도가 작고 직선이 완만해서, 0.01의 읽기 오차가 값의 큰 부분을 차지해요. 파란색 용액은 빨간빛을 가장 많이 흡수해요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Now measure the unknown three times.": "이제 미지 용액을 3번 재요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Read across from the unknown’s mean absorbance to the line, then down to the concentration axis.": "미지 용액의 평균 흡광도에서 가로로 직선까지 간 다음, 아래로 농도 축까지 내려가 읽어요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Standard {n}": "표준 용액 {n}",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Tube": "시험관",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "V(stock) / cm³": "V(원액) / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "V(water) / cm³": "V(물) / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "mean absorbance = ({a} + {b} + {c}) ÷ 3 = {m}": "평균 흡광도 = ({a} + {b} + {c}) ÷ 3 = {m}",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The unknown is above the top standard. Dilute it by a known factor and measure it again.": "미지 용액이 가장 진한 표준 용액보다 위에 있어요. 알고 있는 배수로 희석해서 다시 재요.",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The true concentration of the unknown is {c} mol dm⁻³. Your percentage error: {e} %.": "미지 용액의 실제 농도는 {c} mol dm⁻³예요. 내 백분율 오차: {e} %.",

  }
});
