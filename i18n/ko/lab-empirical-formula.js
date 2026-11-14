/* lab-empirical-formula — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-empirical-formula', {
  strings: {

    // page title (browser tab)
    "Lab 5 Finding an empirical formula by experiment | Structure Lab": "실험 5 실험으로 실험식 구하기 | Structure Lab",

    // Finding an empirical formula by experiment > page header > p
    "Lab 5 · Structure 1.4": "실험 5 · Structure 1.4",

    // Finding an empirical formula by experiment > page header > h1
    "Finding an empirical formula by experiment": "실험으로 실험식 구하기",

    // Finding an empirical formula by experiment > page header > span
    "How can the change in mass when a substance is burned or heated tell us the formula of a compound?": "물질을 태우거나 가열할 때의 질량 변화로 어떻게 화합물의 화학식을 알 수 있을까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "This lab has two parts. In part A you burn magnesium to find the formula of magnesium oxide. In part B you heat a hydrated salt to find how much water of crystallization it holds. Tick each skill when you can do it without notes.": "이 실험은 두 부분으로 되어 있어요. A 부분에서는 마그네슘을 태워 산화 마그네슘의 화학식을 구해요. B 부분에서는 수화된 염을 가열해 결정수가 얼마나 들어 있는지 구해요. 노트 없이 할 수 있게 되면 하나씩 체크하세요.",

    // What you need to be able to do > checklist > span
    "Describe how to burn magnesium in a crucible so that oxygen gets in but no product escapes.": "산소는 들어가지만 생성물은 빠져나가지 않게 도가니에서 마그네슘을 태우는 방법을 서술할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Explain what “heating to constant mass” means and why it is needed.": "“질량이 일정해질 때까지 가열하기”가 무슨 뜻인지, 왜 필요한지 설명할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the value of <i>x</i> in a hydrated salt from the mass lost on heating.": "가열할 때 잃은 질량으로 수화된 염의 <i>x</i> 값을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Turn mass data into amounts in moles and then into a simple whole-number ratio.": "질량 자료를 몰 단위의 양으로 바꾸고, 다시 간단한 정수비로 바꿀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Decide when a ratio such as 0.93 can be rounded to 1, and when a ratio such as 1.5 must be multiplied up.": "0.93 같은 비를 1로 반올림해도 될 때와, 1.5 같은 비에 수를 곱해야 할 때를 판단할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Use the masses of carbon dioxide and water from a combustion to find an empirical formula.": "연소에서 나온 이산화 탄소와 물의 질량으로 실험식을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Propagate balance uncertainties through a mass difference and a ratio, and compare the result with the expected formula.": "질량 차이와 비에 저울의 불확도를 전파하고, 그 결과를 예상 화학식과 비교할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Say how each common error changes the result, and suggest a realistic improvement.": "흔한 오차가 결과를 어떻게 바꾸는지 말하고, 현실적인 개선 방법을 제안할 수 있어요.",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "An <dfn data-def=\"The simplest whole-number ratio of the atoms of each element in a compound.\">empirical formula</dfn> gives the simplest whole-number ratio of atoms in a compound. To find it, you need the mass of each element in a sample. Then <i>n</i> = <i>m</i> ÷ <i>M</i> turns each mass into an amount in moles, and the ratio of the amounts is the ratio of the atoms. The full method is on the topic page: <a href=\"../topics/s1-4.html#formulas\">Empirical and molecular formulas</a>.": "<dfn data-def=\"화합물에 들어 있는 각 원소의 원자 수를 가장 간단한 정수비로 나타낸 것.\">실험식 <span class=\"en-term\">(empirical formula)</span></dfn>은 화합물 속 원자 수를 가장 간단한 정수비로 나타내요. 실험식을 구하려면 시료 속 각 원소의 질량이 필요해요. 그다음 <i>n</i> = <i>m</i> ÷ <i>M</i>으로 각 질량을 몰 단위의 양으로 바꾸면, 양의 비가 곧 원자 수의 비예요. 전체 방법은 단원 페이지에 있어요: <a href=\"../topics/s1-4.html#formulas\">실험식과 분자식</a>.",

    // The chemistry behind it > data-def attribute
    "The simplest whole-number ratio of the atoms of each element in a compound.": "화합물에 들어 있는 각 원소의 원자 수를 가장 간단한 정수비로 나타낸 것.",

    // The chemistry behind it > h3
    "Part A: magnesium burning in air": "A 부분: 공기 중에서 타는 마그네슘",

    // The chemistry behind it > p
    "When magnesium burns, it combines with oxygen from the air. The solid gets <strong>heavier</strong>, because the oxygen atoms now sit in the solid product.": "마그네슘이 타면 공기 중의 산소와 결합해요. 산소 원자가 고체 생성물 속에 들어가므로 고체가 <strong>더 무거워져요</strong>.",

    // The chemistry behind it > p
    "<span class=\"chem\">2Mg(s) + O2(g) -&gt; 2MgO(s)</span>": "<span class=\"chem\">2Mg(s) + O2(g) -&gt; 2MgO(s)</span>",

    // The chemistry behind it > p
    "So you weigh the magnesium before, and the oxide after. The increase in mass is the mass of oxygen that combined.": "그래서 반응 전에 마그네슘의 무게를, 반응 뒤에 산화물의 무게를 재요. 늘어난 질량이 결합한 산소의 질량이에요.",

    // The chemistry behind it > h3
    "Part B: driving off water of crystallization": "B 부분: 결정수 날려 보내기",

    // The chemistry behind it > p
    "Many salts form crystals with water molecules built into the lattice. This is <dfn data-def=\"Water molecules that are part of the crystal lattice of a salt, in a fixed ratio to the formula unit.\">water of crystallization</dfn>. Blue hydrated copper(II) sulfate loses this water on gentle heating and turns into a white powder.": "많은 염은 격자 속에 물 분자가 들어 있는 결정을 만들어요. 이것이 <dfn data-def=\"염의 결정 격자를 이루는 물 분자. 화학식 단위에 대해 일정한 비로 들어 있어요.\">결정수 <span class=\"en-term\">(water of crystallization)</span></dfn>예요. 파란색의 수화된 황산 구리(II)는 약하게 가열하면 이 물을 잃고 흰 가루로 바뀌어요.",

    // The chemistry behind it > data-def attribute
    "Water molecules that are part of the crystal lattice of a salt, in a fixed ratio to the formula unit.": "염의 결정 격자를 이루는 물 분자. 화학식 단위에 대해 일정한 비로 들어 있어요.",

    // The chemistry behind it > p
    "<span class=\"chem\">CuSO4.xH2O(s) -&gt; CuSO4(s) + xH2O(g)</span>": "<span class=\"chem\">CuSO4.xH2O(s) -&gt; CuSO4(s) + xH2O(g)</span>",

    // The chemistry behind it > p
    "This time the solid gets <strong>lighter</strong>. The loss in mass is the mass of water. The mass left is the anhydrous salt.": "이번에는 고체가 <strong>더 가벼워져요</strong>. 잃은 질량이 물의 질량이에요. 남은 질량은 무수 염이에요.",

    // The chemistry behind it > key idea > p
    "In both parts, the balance cannot see atoms. It sees mass. The whole method rests on knowing which change in mass belongs to which substance: a gain of oxygen in part A, a loss of water in part B.": "두 부분 모두 저울은 원자를 볼 수 없어요. 저울은 질량을 봐요. 전체 방법은 어떤 질량 변화가 어떤 물질의 것인지 아는 데 달려 있어요: A 부분에서는 산소가 늘어나고, B 부분에서는 물이 줄어들어요.",

    // The chemistry behind it > h3
    "Linking question: combustion data": "연결 질문: 연소 자료",

    // The chemistry behind it > p
    "The same idea works for compounds of carbon and hydrogen. Burn a known mass completely in excess oxygen and collect the products. All the carbon ends up in <span class=\"chem\">CO2</span> and all the hydrogen in <span class=\"chem\">H2O</span>. So <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) and <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). If the compound also contains oxygen, its mass is found by difference. You will meet one of these in the exam practice.": "같은 생각을 탄소와 수소의 화합물에도 쓸 수 있어요. 질량을 아는 시료를 과량의 산소에서 완전히 태우고 생성물을 모아요. 탄소는 모두 <span class=\"chem\">CO2</span>에, 수소는 모두 <span class=\"chem\">H2O</span>에 들어가요. 그래서 <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)예요. 화합물에 산소도 들어 있다면 산소의 질량은 차이로 구해요. 시험 대비 연습에서 이런 문제를 하나 만나게 될 거예요.",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> To find the empirical formula of magnesium oxide, and the value of <i>x</i> in <span class=\"chem\">CuSO4.xH2O</span>, from measured masses.": "<strong>목적.</strong> 측정한 질량으로 산화 마그네슘의 실험식과 <span class=\"chem\">CuSO4.xH2O</span>의 <i>x</i> 값을 구해요.",

    // Aim, variables and safety > p
    "These are measurements, not investigations of a cause and effect, so there is no independent variable to change. What matters is what you measure and what you keep the same.": "이것은 원인과 결과를 탐구하는 것이 아니라 측정이므로, 바꿀 독립 변인이 없어요. 중요한 것은 무엇을 측정하고 무엇을 같게 유지하는지예요.",

    // Aim, variables and safety > table > caption
    "Variables in the two parts": "두 부분의 변인",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    // Method > h3
    "Part A: magnesium oxide": "A 부분: 산화 마그네슘",

    // Aim, variables and safety > table > th
    "Part B: hydrated salt": "B 부분: 수화된 염",

    // Aim, variables and safety > table > th
    "Measured": "측정하는 것",

    // Aim, variables and safety > table > td
    "Mass of crucible and lid; with magnesium; with the oxide after each heating": "도가니와 뚜껑의 질량, 마그네슘을 넣은 질량, 가열할 때마다 산화물이 든 질량",

    // Aim, variables and safety > table > td
    "Mass of crucible; with the hydrate; after each heating": "도가니의 질량, 수화물을 넣은 질량, 가열할 때마다의 질량",

    // Aim, variables and safety > table > th
    "Calculated": "계산하는 것",

    // Aim, variables and safety > table > td
    "Mass of magnesium, mass of oxygen, mole ratio Mg : O": "마그네슘의 질량, 산소의 질량, 몰비 Mg : O",

    // Aim, variables and safety > table > td
    "Mass of anhydrous salt, mass of water, value of <i>x</i>": "무수 염의 질량, 물의 질량, <i>x</i> 값",

    // Aim, variables and safety > table > th
    "Controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "Same balance for every reading; same crucible and lid; heat until the mass is constant": "모든 측정에 같은 저울, 같은 도가니와 뚜껑, 질량이 일정해질 때까지 가열",

    // Aim, variables and safety > table > td
    "Same balance; same crucible; gentle heating; cool the same way before every weighing": "같은 저울, 같은 도가니, 약한 가열, 무게를 잴 때마다 같은 방법으로 식히기",

    // Aim, variables and safety > h3
    "Equipment": "기구와 시약",

    // Aim, variables and safety > li
    "Porcelain crucible with lid, pipeclay triangle, tripod, heatproof mat, Bunsen burner, crucible tongs": "뚜껑이 있는 사기 도가니, 점토 삼각형, 삼발이, 내열 매트, 분젠 버너, 도가니 집게",

    // Aim, variables and safety > li
    "Balance reading to 0.01 g (or 0.001 g if available)": "0.01 g까지 읽는 저울 (있으면 0.001 g)",

    // Aim, variables and safety > li
    "About 25 cm of magnesium ribbon, cleaned with emery paper to remove the dull oxide layer": "사포로 닦아 칙칙한 산화물 층을 없앤 마그네슘 리본 약 25 cm",

    // Aim, variables and safety > li
    "About 2.5 g of hydrated copper(II) sulfate crystals; a desiccator for cooling if available": "수화된 황산 구리(II) 결정 약 2.5 g, 식힐 때 쓸 데시케이터 (있으면)",

    // Aim, variables and safety > p
    "Wear eye protection throughout. Burning magnesium gives out a very bright white light that includes ultraviolet: do not look straight at it, and lift the lid only a little, with tongs. The crucible, lid, triangle and tripod stay hot long after they stop glowing, so move them only with tongs and let them cool on the heatproof mat. Keep the rest of the magnesium ribbon away from the flame. Copper(II) sulfate is harmful if swallowed and irritates the eyes and skin; wash your hands after use and put the residue in the waste container, not the sink, because it is toxic to aquatic life. Do not heat copper(II) sulfate strongly: above about 600 °C it decomposes and gives off sulfur trioxide, which is corrosive.": "실험하는 내내 보안경을 쓰세요. 타는 마그네슘은 자외선이 섞인 아주 밝은 흰빛을 내요: 똑바로 쳐다보지 말고, 뚜껑은 집게로 조금만 들어 올리세요. 도가니, 뚜껑, 점토 삼각형, 삼발이는 빛을 내지 않게 된 뒤에도 오랫동안 뜨거우므로 집게로만 옮기고 내열 매트 위에서 식히세요. 남은 마그네슘 리본은 불꽃에서 멀리 두세요. 황산 구리(II)는 삼키면 해롭고 눈과 피부를 자극해요. 쓴 뒤에는 손을 씻고, 수생 생물에 독성이 있으므로 남은 고체는 싱크대가 아니라 폐기물 용기에 버리세요. 황산 구리(II)를 세게 가열하지 마세요: 약 600 °C보다 높아지면 분해되어 부식성인 삼산화 황이 나와요.",

    // Method > h2
    "Method": "방법",

    // Method > li
    "Heat the empty crucible and lid for a minute, let them cool, then weigh them together. <span class=\"muted\">This drives off any moisture, so the first reading is a true starting mass.</span>": "빈 도가니와 뚜껑을 1분 동안 가열하고 식힌 다음 함께 무게를 재요. <span class=\"muted\">이렇게 하면 습기가 날아가서 첫 측정값이 진짜 처음 질량이 돼요.</span>",

    // Method > li
    "Coil the cleaned magnesium ribbon loosely, put it in the crucible, and weigh crucible, lid and magnesium together.": "닦은 마그네슘 리본을 느슨하게 감아 도가니에 넣고, 도가니, 뚜껑, 마그네슘을 함께 무게를 재요.",

    // Method > li
    "Put the crucible on the pipeclay triangle with the lid on. Heat gently at first, then strongly.": "뚜껑을 덮은 도가니를 점토 삼각형 위에 올려요. 처음에는 약하게, 그다음 세게 가열해요.",

    // Method > li
    "Every minute or so, lift the lid slightly with tongs for a moment, then put it back. <span class=\"muted\">Lifting lets fresh air in, so there is oxygen for the reaction. Putting it back stops the white smoke of magnesium oxide escaping.</span>": "1분쯤마다 집게로 뚜껑을 살짝 들어 올렸다가 바로 다시 덮어요. <span class=\"muted\">들어 올리면 새 공기가 들어가서 반응에 필요한 산소가 생겨요. 다시 덮으면 산화 마그네슘의 흰 연기가 빠져나가지 않아요.</span>",

    // Method > li
    "When the magnesium no longer glows when the lid is lifted, take the lid off and heat strongly for two more minutes.": "뚜껑을 들어 올려도 마그네슘이 더 이상 빛을 내지 않으면, 뚜껑을 열고 2분 더 세게 가열해요.",

    // Method > li
    "Let everything cool, then weigh crucible, lid and contents.": "모두 식힌 다음 도가니, 뚜껑, 내용물의 무게를 재요.",

    // Method > li
    "Heat again for two minutes, cool and reweigh. Repeat until two readings in a row agree to within 0.01 g. <span class=\"muted\">This is heating to constant mass. It shows that the reaction is complete.</span>": "다시 2분 동안 가열하고, 식히고, 다시 무게를 재요. 연달아 잰 두 값이 0.01 g 안에서 같아질 때까지 되풀이해요. <span class=\"muted\">이것이 질량이 일정해질 때까지 가열하는 거예요. 반응이 끝났다는 것을 보여 줘요.</span>",

    // Method > h3
    "Part B: hydrated copper(II) sulfate": "B 부분: 수화된 황산 구리(II)",

    // Method > li
    "Weigh a clean, dry crucible.": "깨끗하고 마른 도가니의 무게를 재요.",

    // Method > li
    "Add about 2.5 g of the blue crystals and weigh again.": "파란 결정을 약 2.5 g 넣고 다시 무게를 재요.",

    // Method > li
    "Heat gently, with the lid off, stirring now and then with a glass rod. <span class=\"muted\">Gentle heating stops the crystals spitting out, and stops the anhydrous salt decomposing.</span>": "뚜껑을 열고 약하게 가열하면서 가끔 유리 막대로 저어요. <span class=\"muted\">약하게 가열하면 결정이 튀어 나가지 않고, 무수 염이 분해되지 않아요.</span>",

    // Method > li
    "When the solid is white all through, let it cool in a desiccator, then weigh. <span class=\"muted\">Anhydrous copper(II) sulfate takes water back from the air, so it should not cool on the open bench.</span>": "고체가 속까지 하얗게 되면 데시케이터에서 식힌 다음 무게를 재요. <span class=\"muted\">무수 황산 구리(II)는 공기에서 물을 다시 흡수하므로 실험대 위에 그냥 두고 식히면 안 돼요.</span>",

    // Method > li
    "Heat, cool and weigh again until two readings agree to within 0.01 g.": "두 값이 0.01 g 안에서 같아질 때까지 가열하고, 식히고, 다시 무게를 재요.",

    // Method > exam tip (shown in English + translation) > p
    "“Heat to constant mass” earns its mark only with the detail: heat, cool, weigh, and <strong>repeat until two consecutive masses are the same</strong> (within the balance’s precision). Then say why: all the magnesium has reacted, or all the water has been removed.": "“질량이 일정해질 때까지 가열하기”는 자세히 써야 점수를 받아요: 가열하고, 식히고, 무게를 재고, <strong>연달아 잰 두 질량이 같아질 때까지 되풀이한다</strong>(저울의 정밀도 안에서). 그다음 이유를 말하세요: 마그네슘이 모두 반응했다, 또는 물이 모두 없어졌다.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > p
    "Each run uses a new piece of apparatus and a new sample, so your readings change a little from run to run, just as in a real lab. Work through the buttons from left to right. Write your readings down, or copy the raw data table, before you process them.": "회차마다 새 기구와 새 시료를 쓰므로, 실제 실험처럼 측정값이 회차마다 조금씩 달라요. 버튼을 왼쪽부터 차례대로 누르세요. 자료를 처리하기 전에 측정값을 적어 두거나 원자료 표를 복사하세요.",

    // Run the experiment > widget > data-title attribute
    "Part A: burning magnesium in a crucible": "A 부분: 도가니에서 마그네슘 태우기",

    // Run the experiment > widget > figcaption
    "Choose how you use the lid and which balance you have, then weigh, add the magnesium and heat until the mass stops changing. Try the “lid left off” and “lid never lifted” options to see what each error does to the ratio.": "뚜껑을 어떻게 쓸지와 어떤 저울을 쓸지 고른 다음, 무게를 재고, 마그네슘을 넣고, 질량이 더 이상 변하지 않을 때까지 가열하세요. “뚜껑을 연 채로”와 “뚜껑을 들어 올리지 않음”도 해 보고, 각 오차가 비를 어떻게 바꾸는지 보세요.",

    // Run the experiment > widget > data-title attribute
    "Part B: heating hydrated copper(II) sulfate": "B 부분: 수화된 황산 구리(II) 가열하기",

    // Run the experiment > widget > figcaption
    "Heat gently and cool in a desiccator for a good result. Then try strong heating, or cooling on the open bench, and see why the mass never settles or why <i>x</i> comes out wrong.": "좋은 결과를 얻으려면 약하게 가열하고 데시케이터에서 식히세요. 그다음 세게 가열하거나 실험대 위에서 식혀 보고, 왜 질량이 일정해지지 않는지, 왜 <i>x</i>가 틀리게 나오는지 보세요.",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > p
    "The route is always the same: masses of each part, then amounts in moles, then divide by the smallest amount, then a whole-number ratio. Use the data booklet <i>A</i><sub>r</sub> values: Mg = 24.31, O = 16.00, H = 1.01, S = 32.07, Cu = 63.55.": "순서는 언제나 같아요: 각 부분의 질량, 그다음 몰 단위의 양, 그다음 가장 작은 양으로 나누기, 그다음 정수비. 데이터 부클릿의 <i>A</i><sub>r</sub> 값을 써요: Mg = 24.31, O = 16.00, H = 1.01, S = 32.07, Cu = 63.55.",

    // Processing the data > worked example > h3
    "The formula of magnesium oxide": "산화 마그네슘의 화학식",

    // Processing the data > worked example > p
    "A student records these readings on a balance that reads to 0.01 g.": "한 학생이 0.01 g까지 읽는 저울로 다음 값을 기록해요.",

    // Processing the data > worked example > table > caption
    "Part A raw data": "A 부분 원자료",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reading": "측정 항목",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Mass / g": "질량 / g",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and lid": "도가니와 뚜껑",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible, lid and magnesium": "도가니, 뚜껑, 마그네슘",

    // Processing the data > worked example > table > th
    "After heating 1": "가열 1 후",

    // Processing the data > worked example > table > th
    "After heating 2": "가열 2 후",

    // Processing the data > worked example > table > th
    "After heating 3": "가열 3 후",

    // Processing the data > worked example > p
    "Determine the empirical formula of magnesium oxide.": "산화 마그네슘의 실험식을 구하시오.",

    // Processing the data > worked example > data-title attribute
    "Find the mass of each element": "각 원소의 질량 구하기",

    // Processing the data > worked example > p
    "Use the last, constant reading. The gain in mass is the oxygen that combined.": "마지막의 일정한 값을 써요. 늘어난 질량이 결합한 산소예요.",

    // Processing the data > worked example > maths line
    "mass of Mg = 26.78 g − 26.42 g = 0.36 g": "Mg의 질량 = 26.78 g − 26.42 g = 0.36 g",

    // Processing the data > worked example > maths line
    "mass of O = 27.00 g − 26.78 g = 0.22 g": "O의 질량 = 27.00 g − 26.78 g = 0.22 g",

    // Processing the data > worked example > data-title attribute
    "Convert each mass to moles": "각 질량을 몰로 바꾸기",

    // Processing the data > worked example > p
    "Atoms combine in a ratio of numbers, not of masses, so use <i>n</i> = <i>m</i> ÷ <i>M</i> for each element.": "원자는 질량의 비가 아니라 개수의 비로 결합하므로, 원소마다 <i>n</i> = <i>m</i> ÷ <i>M</i>을 써요.",

    // Processing the data > worked example > data-title attribute
    "Divide by the smaller amount": "더 작은 양으로 나누기",

    // Processing the data > worked example > p
    "This makes the smaller number exactly 1, so the ratio is easy to read.": "이렇게 하면 작은 수가 정확히 1이 되어서 비를 읽기 쉬워요.",

    // Processing the data > worked example > maths line
    "or, as O ÷ Mg: 0.01375 ÷ 0.01481 = 0.93": "또는 O ÷ Mg로: 0.01375 ÷ 0.01481 = 0.93",

    // Processing the data > worked example > data-title attribute
    "Judge the whole-number ratio": "정수비 판단하기",

    // Processing the data > worked example > p
    "1.08 : 1 is close to 1 : 1. The gap is small enough to be experimental error (see the uncertainty section). It is not close to a real ratio such as 3 : 2 = 1.5 : 1.": "1.08 : 1은 1 : 1에 가까워요. 차이가 실험 오차일 만큼 작아요(불확도 부분을 보세요). 3 : 2 = 1.5 : 1 같은 실제 비에는 가깝지 않아요.",

    // Processing the data > worked example > maths line
    "Mg : O ≈ 1 : 1, so the empirical formula is <b>MgO</b>": "Mg : O ≈ 1 : 1, 따라서 실험식은 <b>MgO</b>",

    // Processing the data > worked example > p
    "<span class=\"chem\">MgO</span> (measured ratio Mg : O = 1.08 : 1)": "<span class=\"chem\">MgO</span> (측정한 비 Mg : O = 1.08 : 1)",

    // Processing the data > common mistake > p
    "Using the masses directly (0.36 : 0.22) instead of moles gives a ratio that means nothing. Another slip is to take the mass of oxygen from the first heating reading. Always use the reading where the mass has become constant.": "몰 대신 질량을 그대로 쓰면(0.36 : 0.22) 아무 의미 없는 비가 나와요. 첫 번째 가열 뒤의 값으로 산소의 질량을 구하는 것도 흔한 실수예요. 언제나 질량이 일정해진 값을 쓰세요.",

    // Processing the data > h3
    "Now you: the value of <i>x</i> in a hydrate": "이제 직접: 수화물의 <i>x</i> 값",

    // Processing the data > p
    "For a hydrate, the two “parts” are the anhydrous salt and the water. Treat <span class=\"chem\">CuSO4</span> as one unit with <i>M</i> = 159.62 g mol<sup>−1</sup>, and water with <i>M</i> = 18.02 g mol<sup>−1</sup>. Then <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>).": "수화물에서 두 “부분”은 무수 염과 물이에요. <span class=\"chem\">CuSO4</span>는 <i>M</i> = 159.62 g mol<sup>−1</sup>인 하나의 단위로, 물은 <i>M</i> = 18.02 g mol<sup>−1</sup>로 다뤄요. 그러면 <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>)예요.",

    // Processing the data > try it > p
    "A student heats hydrated copper(II) sulfate. Crucible: 18.47 g. Crucible and hydrate: 21.03 g. After heating: 20.25 g, 20.14 g, 20.12 g, 20.12 g. Calculate the value of <i>x</i> in <span class=\"chem\">CuSO4.xH2O</span> from these data, before rounding to a whole number.": "한 학생이 수화된 황산 구리(II)를 가열해요. 도가니: 18.47 g. 도가니와 수화물: 21.03 g. 가열 후: 20.25 g, 20.14 g, 20.12 g, 20.12 g. 이 자료로 정수로 반올림하기 전의 <span class=\"chem\">CuSO4.xH2O</span>의 <i>x</i> 값을 계산하시오.",

    // Processing the data > try it > li
    "Mass of anhydrous salt = final mass − crucible. Mass of water = (crucible + hydrate) − final mass.": "무수 염의 질량 = 마지막 질량 − 도가니. 물의 질량 = (도가니 + 수화물) − 마지막 질량.",

    // Processing the data > try it > li
    "Anhydrous: 1.65 g; water: 0.91 g. Now find <i>n</i> of each and divide <i>n</i>(water) by <i>n</i>(<span class=\"chem\">CuSO4</span>).": "무수 염: 1.65 g, 물: 0.91 g. 이제 각각의 <i>n</i>을 구하고, <i>n</i>(물)을 <i>n</i>(<span class=\"chem\">CuSO4</span>)로 나누세요.",

    // Processing the data > try it > maths line
    "mass of <span class=\"chem\">CuSO4</span> = 20.12 g − 18.47 g = 1.65 g": "<span class=\"chem\">CuSO4</span>의 질량 = 20.12 g − 18.47 g = 1.65 g",

    // Processing the data > try it > maths line
    "mass of water = 21.03 g − 20.12 g = 0.91 g": "물의 질량 = 21.03 g − 20.12 g = 0.91 g",

    // Processing the data > try it > p
    "<i>x</i> = 4.9 to 2 significant figures (0.91 g has only 2). The nearest whole number is 5, so the formula is <span class=\"chem\">CuSO4.5H2O</span>.": "유효 숫자 2자리로 <i>x</i> = 4.9 (0.91 g이 2자리뿐이에요). 가장 가까운 정수는 5이므로 화학식은 <span class=\"chem\">CuSO4.5H2O</span>예요.",

    // Processing the data > key idea > p
    "Approximation is a judgement, not a rule. Round 0.93 or 4.89 to the nearest whole number only when the difference is within your experimental uncertainty. A ratio such as 1 : 1.50 or 1 : 1.33 is real: multiply by 2 or 3 to get whole numbers (2 : 3, 3 : 4).": "어림은 규칙이 아니라 판단이에요. 0.93이나 4.89는 차이가 실험의 불확도 안에 있을 때만 가장 가까운 정수로 반올림하세요. 1 : 1.50이나 1 : 1.33 같은 비는 실제 비예요: 2나 3을 곱해 정수로 만드세요(2 : 3, 3 : 4).",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > p
    "A balance that reads to 0.01 g has an uncertainty of ±0.01 g in every reading. The masses you use are <strong>differences</strong> of two readings, so their uncertainties add.": "0.01 g까지 읽는 저울은 측정값마다 ±0.01 g의 불확도가 있어요. 쓰는 질량은 두 측정값의 <strong>차이</strong>이므로 불확도가 더해져요.",

    // Uncertainties > table > caption
    "Rules for propagating uncertainties": "불확도 전파 규칙",

    // Uncertainties > table > th
    "Operation": "연산",

    // Uncertainties > table > th
    "What to add": "더하는 것",

    // Uncertainties > table > th
    "Example": "예",

    // Uncertainties > table > th
    "Adding or subtracting": "덧셈이나 뺄셈",

    // Uncertainties > table > td
    "absolute uncertainties": "절대 불확도",

    // Uncertainties > table > th
    "Multiplying or dividing": "곱셈이나 나눗셈",

    // Uncertainties > table > td
    "percentage uncertainties": "백분율 불확도",

    // Uncertainties > table > td
    "<span class=\"mono\">ratio = <i>n</i>(O) ÷ <i>n</i>(Mg)</span>: add the % uncertainties of the two masses": "<span class=\"mono\">비 = <i>n</i>(O) ÷ <i>n</i>(Mg)</span>: 두 질량의 % 불확도를 더해요",

    // Uncertainties > p
    "The molar masses come from the data booklet. Their uncertainty is tiny compared with the balance, so you can ignore it.": "몰 질량은 데이터 부클릿에서 가져와요. 그 불확도는 저울에 비하면 아주 작으므로 무시해도 돼요.",

    // Uncertainties > worked example > data-kicker attribute
    "Worked example 2": "예제 2",

    // Uncertainties > worked example > h3
    "How sure is the magnesium oxide ratio?": "산화 마그네슘의 비는 얼마나 확실할까요?",

    // Uncertainties > worked example > p
    "Use the part A data above (balance ±0.01 g). Find the uncertainty in the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93, and compare it with the expected value of 1.00 for <span class=\"chem\">MgO</span>.": "위의 A 부분 자료(저울 ±0.01 g)를 써요. 비 <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93의 불확도를 구하고, <span class=\"chem\">MgO</span>의 예상값 1.00과 비교해요.",

    // Uncertainties > worked example > data-title attribute
    "Absolute uncertainty of each mass": "각 질량의 절대 불확도",

    // Uncertainties > worked example > p
    "Each mass is a difference of two readings, each ±0.01 g.": "각 질량은 두 측정값(각각 ±0.01 g)의 차이예요.",

    // Uncertainties > worked example > maths line
    "mass of Mg = 0.36 ± 0.02 g": "Mg의 질량 = 0.36 ± 0.02 g",

    // Uncertainties > worked example > maths line
    "mass of O = 0.22 ± 0.02 g": "O의 질량 = 0.22 ± 0.02 g",

    // Uncertainties > worked example > data-title attribute
    "Turn them into percentages": "백분율로 바꾸기",

    // Uncertainties > worked example > p
    "Percentage uncertainty = absolute uncertainty ÷ value × 100.": "백분율 불확도 = 절대 불확도 ÷ 값 × 100.",

    // Uncertainties > worked example > data-title attribute
    "Add them for the ratio": "비에 대해 더하기",

    // Uncertainties > worked example > p
    "<i>n</i> = <i>m</i> ÷ <i>M</i> carries the same percentage as the mass, and a ratio is a division, so the percentages add.": "<i>n</i> = <i>m</i> ÷ <i>M</i>은 질량과 같은 백분율 불확도를 가지고, 비는 나눗셈이므로 백분율이 더해져요.",

    // Uncertainties > worked example > maths line
    "ratio: 5.6 % + 9.1 % = 14.7 % ≈ 15 %": "비: 5.6 % + 9.1 % = 14.7 % ≈ 15 %",

    // Uncertainties > worked example > maths line
    "0.93 × 0.15 = 0.14, so ratio = 0.93 ± 0.14": "0.93 × 0.15 = 0.14, 따라서 비 = 0.93 ± 0.14",

    // Uncertainties > worked example > data-title attribute
    "Compare with the expected value": "예상값과 비교하기",

    // Uncertainties > worked example > p
    "Percentage error = |experimental − expected| ÷ expected × 100.": "백분율 오차 = |실험값 − 예상값| ÷ 예상값 × 100.",

    // Uncertainties > worked example > maths line
    "percentage error = |0.93 − 1.00| ÷ 1.00 × 100 = 7 %": "백분율 오차 = |0.93 − 1.00| ÷ 1.00 × 100 = 7 %",

    // Uncertainties > worked example > maths line
    "7 % &lt; 15 %: the difference lies <b>inside</b> the uncertainty": "7 % &lt; 15 %: 차이가 불확도 <b>안</b>에 있음",

    // Uncertainties > worked example > p
    "Ratio = 0.93 ± 0.14 (about ±15 %). The result agrees with <span class=\"chem\">MgO</span> within its uncertainty. Random error from the balance is large enough to explain the whole gap.": "비 = 0.93 ± 0.14 (약 ±15 %). 결과는 불확도 안에서 <span class=\"chem\">MgO</span>와 일치해요. 저울에서 생기는 우연 오차만으로 차이 전체를 설명할 수 있어요.",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Quote an absolute uncertainty to one significant figure and the value to the same decimal place: 0.9 ± 0.1, not 0.93 ± 0.14, in a final answer. When the percentage error is <strong>bigger</strong> than the percentage uncertainty, random error alone cannot explain it: look for a systematic error.": "최종 답에서는 절대 불확도를 유효 숫자 1자리로, 값은 같은 소수 자리까지 써요: 0.93 ± 0.14가 아니라 0.9 ± 0.1. 백분율 오차가 백분율 불확도보다 <strong>크면</strong> 우연 오차만으로는 설명할 수 없어요: 계통 오차를 찾아보세요.",

    // Uncertainties > p
    "The magnesium experiment uses small masses, so a 0.01 g reading is a large fraction of each. A balance reading to 0.001 g makes each mass about ten times more precise. A longer piece of ribbon helps too. Try both in the experiment above.": "마그네슘 실험은 질량이 작아서 0.01 g의 측정값이 각 질량에서 큰 비율을 차지해요. 0.001 g까지 읽는 저울을 쓰면 각 질량이 약 10배 더 정밀해져요. 더 긴 리본도 도움이 돼요. 위 실험에서 둘 다 해 보세요.",

    // Uncertainties > try it > p
    "Use the hydrate data from the “Try it” in the processing section (anhydrous salt 1.65 g, water 0.91 g; balance ±0.01 g). Calculate the percentage uncertainty in the value of <i>x</i>.": "자료 처리 부분의 “직접 해 보기” 수화물 자료(무수 염 1.65 g, 물 0.91 g, 저울 ±0.01 g)를 써요. <i>x</i> 값의 백분율 불확도를 계산하시오.",

    // Uncertainties > try it > li
    "Each mass is a difference of two readings, so each has an absolute uncertainty of ±0.02 g.": "각 질량은 두 측정값의 차이이므로 절대 불확도가 각각 ±0.02 g이에요.",

    // Uncertainties > try it > li
    "<i>x</i> is a ratio of the two amounts. Add the two percentage uncertainties: 0.02 ÷ 0.91 × 100 and 0.02 ÷ 1.65 × 100.": "<i>x</i>는 두 양의 비예요. 두 백분율 불확도를 더하세요: 0.02 ÷ 0.91 × 100과 0.02 ÷ 1.65 × 100.",

    // Uncertainties > try it > maths line
    "water: 0.02 ÷ 0.91 × 100 = 2.20 %": "물: 0.02 ÷ 0.91 × 100 = 2.20 %",

    // Uncertainties > try it > maths line
    "anhydrous salt: 0.02 ÷ 1.65 × 100 = 1.21 %": "무수 염: 0.02 ÷ 1.65 × 100 = 1.21 %",

    // Uncertainties > try it > p
    "So <i>x</i> = 4.89 ± 0.17, or 4.9 ± 0.2. The expected value 5 lies inside this range, and the percentage error (2.3 %) is smaller than the uncertainty.": "따라서 <i>x</i> = 4.89 ± 0.17, 또는 4.9 ± 0.2예요. 예상값 5는 이 범위 안에 있고, 백분율 오차(2.3 %)는 불확도보다 작아요.",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "오차와 개선",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">random error</dfn> scatters results both ways; repeats and a more precise balance reduce it. A <dfn data-def=\"An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.\">systematic error</dfn> pushes every result the same way; only a change of method removes it. In these experiments most of the important errors are systematic.": "<dfn data-def=\"반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.\">우연 오차 <span class=\"en-term\">(random error)</span></dfn>는 결과를 양쪽으로 흩어지게 해요. 반복하거나 더 정밀한 저울을 쓰면 줄어요. <dfn data-def=\"모든 결과를 같은 쪽으로, 예를 들어 항상 너무 낮게 치우치게 하는 오차. 반복해도 없어지지 않으므로 방법을 바꿔야 해요.\">계통 오차 <span class=\"en-term\">(systematic error)</span></dfn>는 모든 결과를 같은 쪽으로 밀어요. 방법을 바꿔야만 없어져요. 이 실험들에서 중요한 오차는 대부분 계통 오차예요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.",

    // Evaluation: errors and improvements > data-def attribute
    "An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.": "모든 결과를 같은 쪽으로, 예를 들어 항상 너무 낮게 치우치게 하는 오차. 반복해도 없어지지 않으므로 방법을 바꿔야 해요.",

    // Evaluation: errors and improvements > table > caption
    "Common errors, their effect, and how to fix them": "흔한 오차, 그 영향, 고치는 방법",

    // Evaluation: errors and improvements > table > th
    "Source of error": "오차 원인",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "결과에 미치는 영향",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "현실적인 개선 방법",

    // Evaluation: errors and improvements > table > th
    "White smoke of <span class=\"chem\">MgO</span> escapes when the lid is off or lifted too long": "뚜껑을 열어 두거나 너무 오래 들어 올려서 <span class=\"chem\">MgO</span>의 흰 연기가 빠져나감",

    // Evaluation: errors and improvements > table > td
    "Final mass too low, so mass of O too low: ratio O : Mg too <strong>low</strong> (looks like too much Mg)": "마지막 질량이 너무 작아서 O의 질량이 너무 작아요: 비 O : Mg가 너무 <strong>작아요</strong> (Mg가 너무 많아 보임)",

    // Evaluation: errors and improvements > table > td
    "Keep the lid on; lift it only slightly and briefly with tongs": "뚜껑을 덮어 두고, 집게로 살짝, 잠깐만 들어 올려요",

    // Evaluation: errors and improvements > table > th
    "Lid never lifted, so too little oxygen gets in": "뚜껑을 한 번도 들어 올리지 않아서 산소가 너무 적게 들어감",

    // Evaluation: errors and improvements > table > td
    "Some Mg does not react; mass of O too low: ratio too <strong>low</strong>. The mass can look constant even though the reaction is unfinished": "Mg 일부가 반응하지 않아서 O의 질량이 너무 작아요: 비가 너무 <strong>작아요</strong>. 반응이 끝나지 않았는데도 질량이 일정해 보일 수 있어요",

    // Evaluation: errors and improvements > table > td
    "Lift the lid every minute; check that no grey metal is left before the final weighings": "1분마다 뚜껑을 들어 올려요. 마지막으로 무게를 재기 전에 회색 금속이 남아 있지 않은지 확인해요",

    // Evaluation: errors and improvements > table > th
    "Some magnesium reacts with nitrogen in the air to form <span class=\"chem\">Mg3N2</span>": "마그네슘 일부가 공기 중의 질소와 반응해 <span class=\"chem\">Mg3N2</span>가 생김",

    // Evaluation: errors and improvements > table > td
    "Nitride is lighter than the oxide for the same Mg, so mass gain too small: ratio too <strong>low</strong>": "같은 양의 Mg에 대해 질화물이 산화물보다 가벼워서 늘어난 질량이 너무 작아요: 비가 너무 <strong>작아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Add a few drops of distilled water to the cooled solid and heat again: the nitride turns into the oxide (ammonia is given off)": "식은 고체에 증류수를 몇 방울 넣고 다시 가열해요: 질화물이 산화물로 바뀌어요 (암모니아가 나와요)",

    // Evaluation: errors and improvements > table > th
    "Oxide layer on the ribbon before you start": "시작하기 전에 리본에 산화물 층이 있음",

    // Evaluation: errors and improvements > table > td
    "Part of the “magnesium” mass is already oxide, so less oxygen is gained: ratio too <strong>low</strong>": "“마그네슘” 질량의 일부가 이미 산화물이라서 늘어나는 산소가 적어요: 비가 너무 <strong>작아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Clean the ribbon with emery paper just before weighing": "무게를 재기 직전에 사포로 리본을 닦아요",

    // Evaluation: errors and improvements > table > th
    "Hydrate not heated to constant mass (some water left)": "수화물을 질량이 일정해질 때까지 가열하지 않음 (물이 일부 남음)",

    // Evaluation: errors and improvements > table > td
    "Mass of water too low and anhydrous mass too high: <i>x</i> too <strong>low</strong>": "물의 질량이 너무 작고 무수 염의 질량이 너무 커요: <i>x</i>가 너무 <strong>작아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Heat, cool and reweigh until two masses agree within 0.01 g": "두 질량이 0.01 g 안에서 같아질 때까지 가열하고, 식히고, 다시 무게를 재요",

    // Evaluation: errors and improvements > table > th
    "Heating the hydrate too strongly (solid turns black)": "수화물을 너무 세게 가열함 (고체가 검게 변함)",

    // Evaluation: errors and improvements > table > td
    "<span class=\"chem\">CuSO4</span> decomposes to <span class=\"chem\">CuO</span> and <span class=\"chem\">SO3</span>; extra mass is lost and counted as water: <i>x</i> too <strong>high</strong>. The mass never becomes constant": "<span class=\"chem\">CuSO4</span>가 <span class=\"chem\">CuO</span>와 <span class=\"chem\">SO3</span>로 분해돼요. 추가로 잃은 질량이 물로 계산돼요: <i>x</i>가 너무 <strong>커요</strong>. 질량이 끝내 일정해지지 않아요",

    // Evaluation: errors and improvements > table > td
    "Heat gently with a small flame; stop when the solid is white all through": "작은 불꽃으로 약하게 가열해요. 고체가 속까지 하얘지면 멈춰요",

    // Evaluation: errors and improvements > table > th
    "Crystals spit out of the crucible at the start": "처음에 결정이 도가니 밖으로 튀어 나감",

    // Evaluation: errors and improvements > table > td
    "Lost solid is counted as water: <i>x</i> too <strong>high</strong>": "잃은 고체가 물로 계산돼요: <i>x</i>가 너무 <strong>커요</strong>",

    // Evaluation: errors and improvements > table > td
    "Heat gently at first, with a lid partly on, and stir": "처음에는 뚜껑을 반쯤 덮고 약하게 가열하면서 저어요",

    // Evaluation: errors and improvements > table > th
    "Anhydrous salt cools on the open bench": "무수 염을 실험대 위에서 식힘",

    // Evaluation: errors and improvements > table > td
    "It takes water back from the air, so the final mass is too high: <i>x</i> too <strong>low</strong>": "공기에서 물을 다시 흡수해서 마지막 질량이 너무 커요: <i>x</i>가 너무 <strong>작아요</strong>",

    // Evaluation: errors and improvements > table > td
    "Cool in a desiccator, and weigh as soon as it is cool": "데시케이터에서 식히고, 식자마자 무게를 재요",

    // Evaluation: errors and improvements > table > th
    "Small masses read on a 0.01 g balance": "작은 질량을 0.01 g 저울로 읽음",

    // Evaluation: errors and improvements > table > td
    "Random error: large percentage uncertainty (about 15 % in the Mg : O ratio)": "우연 오차: 백분율 불확도가 커요 (Mg : O 비에서 약 15 %)",

    // Evaluation: errors and improvements > table > td
    "Use a 0.001 g balance, a bigger sample, and repeat the whole experiment": "0.001 g 저울과 더 많은 시료를 쓰고, 실험 전체를 반복해요",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "An evaluation point earns marks when it has three parts: the error, its direction (too high or too low, and why), and an improvement that fixes <em>that</em> error. “Human error” and “be more careful” earn nothing.": "평가 항목은 세 부분이 있어야 점수를 받아요: 오차, 그 방향(너무 높은지 낮은지와 그 이유), 그리고 <em>그</em> 오차를 고치는 개선 방법. “사람의 실수”와 “더 조심한다”는 점수를 받지 못해요.",

    // Evaluation: errors and improvements > not needed for IB > p
    "You do not need to learn the reaction of magnesium with nitrogen or the decomposition of copper(II) sulfate for the exam. They are here only to explain the errors. You are expected to reason about the direction of an error from the data, not to recall these equations.": "시험을 위해 마그네슘과 질소의 반응이나 황산 구리(II)의 분해를 외울 필요는 없어요. 여기서는 오차를 설명하려고 나온 것뿐이에요. 이 반응식을 기억해 내는 것이 아니라, 자료로부터 오차의 방향을 추론할 수 있으면 돼요.",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "These questions are in the style of Paper 1B: short parts built on practical data. Write your working on paper before you type an answer.": "이 문제들은 Paper 1B 형식이에요: 실험 자료를 바탕으로 한 짧은 소문항이에요. 답을 입력하기 전에 종이에 풀이를 쓰세요.",

    // Exam practice > data-title attribute
    "Lab 5: empirical formula by experiment": "실험 5: 실험으로 실험식 구하기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Raw data": "원자료",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copy table": "표 복사",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "No readings yet.": "아직 측정값이 없어요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copied. Paste it into a spreadsheet or your notes.": "복사했어요. 스프레드시트나 노트에 붙여 넣으세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copying is blocked here. Select the table and copy it by hand.": "여기서는 복사가 막혀 있어요. 표를 선택해서 직접 복사하세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "balance, ±{u} g": "저울, ±{u} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "lid": "뚜껑",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "How you use the lid": "뚜껑 쓰는 방법",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid on, lifted briefly every minute": "뚜껑을 덮고, 1분마다 잠깐 들어 올림",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid left off": "뚜껑을 연 채로",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid never lifted": "뚜껑을 들어 올리지 않음",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Balance": "저울",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reads to 0.01 g": "0.01 g까지 읽음",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reads to 0.001 g": "0.001 g까지 읽음",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Length of magnesium ribbon": "마그네슘 리본의 길이",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "1. Weigh crucible and lid": "1. 도가니와 뚜껑 무게 재기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "2. Add magnesium and weigh": "2. 마그네슘 넣고 무게 재기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "3. Heat, cool and weigh": "3. 가열, 식히기, 무게 재기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Add drops of water, reheat": "물 몇 방울 넣고 다시 가열",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Show the processing": "처리 과정 보기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "New run": "새 실험",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "A crucible with a lid on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading": "분젠 버너 위 점토 삼각형에 올린 뚜껑 있는 도가니와, 마지막 측정값을 보여 주는 저울",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Part A: masses of crucible, lid and contents": "A 부분: 도가니, 뚜껑, 내용물의 질량",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Balance reading": "저울 눈금",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "What to do next": "다음에 할 일",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "After heating {n}": "가열 {n} 후",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "After adding water and heating": "물을 넣고 가열한 후",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Empty crucible and lid": "빈 도가니와 뚜껑",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and lid weighed": "도가니와 뚜껑 무게를 잼",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Magnesium ribbon in the crucible": "도가니 속 마그네슘 리본",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Cooled after heating {n}": "가열 {n} 후 식힘",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "some grey metal is left": "회색 금속이 조금 남아 있음",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "white powder, no metal left": "흰 가루, 금속이 남아 있지 않음",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Weigh the empty crucible and lid.": "빈 도가니와 뚜껑의 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Choose a length of ribbon, then add it and weigh.": "리본 길이를 고른 다음 넣고 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heat the crucible. Then let it cool and weigh it.": "도가니를 가열하세요. 그다음 식혀서 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Constant mass: the last two readings agree. Process your data.": "일정한 질량: 마지막 두 값이 같아요. 자료를 처리하세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Ten heatings and still not constant. Check your technique and start a new run.": "10번 가열했는데도 일정하지 않아요. 방법을 확인하고 새로 시작하세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "The mass is still changing. Heat, cool and weigh again.": "질량이 아직 변하고 있어요. 다시 가열하고, 식히고, 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of Mg = {a} g − {b} g = {c} g": "Mg의 질량 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of O = {a} g − {b} g = {c} g": "O의 질량 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "ratio O ÷ Mg = {r}, so Mg : O = 1 : {r}": "비 O ÷ Mg = {r}, 따라서 Mg : O = 1 : {r}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "uncertainty in the ratio ≈ {u} % + {v} % = {p} %": "비의 불확도 ≈ {u} % + {v} % = {p} %",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "ratio = {pm}": "비 = {pm}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Your mass is not constant yet, so these numbers may change.": "질량이 아직 일정하지 않으므로 이 수들은 바뀔 수 있어요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Expected for MgO: a ratio of 1.00. Your percentage error: {e} %.": "MgO의 예상값: 비 1.00. 내 백분율 오차: {e} %.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heating": "가열",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Gentle, with stirring": "약하게, 저으면서",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Strong, roaring flame": "세게, 센 불꽃",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Cooling before each weighing": "무게 재기 전 식히는 곳",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "In a desiccator": "데시케이터 안",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "On the open bench": "실험대 위",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Mass of crystals to add": "넣을 결정의 질량",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "1. Weigh empty crucible": "1. 빈 도가니 무게 재기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "2. Add crystals and weigh": "2. 결정 넣고 무게 재기",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "A crucible of copper(II) sulfate on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading": "분젠 버너 위 점토 삼각형에 올린 황산 구리(II)가 든 도가니와, 마지막 측정값을 보여 주는 저울",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Part B: masses of crucible and contents": "B 부분: 도가니와 내용물의 질량",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "The solid looks": "고체의 모습",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible": "도가니",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and hydrate": "도가니와 수화물",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Nothing in the crucible yet.": "도가니에 아직 아무것도 없어요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "blue crystals": "파란 결정",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "pale blue and white": "연한 파란색과 흰색",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "a white powder": "흰 가루",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "{base}, with black patches": "{base}, 검은 얼룩이 있음",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Empty crucible": "빈 도가니",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible weighed": "도가니 무게를 잼",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Blue crystals in the crucible": "도가니 속 파란 결정",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Weigh the empty crucible.": "빈 도가니의 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Choose a mass of crystals, then add them and weigh.": "결정의 질량을 고른 다음 넣고 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heat the crystals. Then let them cool and weigh.": "결정을 가열하세요. 그다음 식혀서 무게를 재세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Ten heatings and the mass is still changing. Something is going wrong: start a new run.": "10번 가열했는데도 질량이 계속 변해요. 뭔가 잘못되고 있어요: 새로 시작하세요.",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of anhydrous CuSO₄ = {a} g − {b} g = {c} g": "무수 CuSO₄의 질량 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of water = {a} g − {b} g = {c} g": "물의 질량 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "uncertainty in x ≈ {p} %, so x = {pm}": "x의 불확도 ≈ {p} %, 따라서 x = {pm}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Expected: x = 5. Your percentage error: {e} %.": "예상값: x = 5. 내 백분율 오차: {e} %.",

  }
});
