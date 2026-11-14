/* lab-separation — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-separation', {
  strings: {

    // page title (browser tab)
    "Lab 1 Separating and purifying mixtures | Structure Lab": "실험 1 혼합물의 분리와 정제 | Structure Lab",

    // Separating and purifying mixtures > page header > p
    "Lab 1 · Structure 1.1": "실험 1 · Structure 1.1",

    // Separating and purifying mixtures > page header > h1
    "Separating and purifying mixtures": "혼합물의 분리와 정제",

    // Separating and purifying mixtures > page header > span
    "How do you decide on a way to separate a mixture, and how can you tell whether the product you get is pure?": "혼합물을 분리할 방법은 어떻게 정하고, 얻은 생성물이 순수한지는 어떻게 알 수 있을까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "This lab practises skills from Structure 1.1.1 and Tool 1. You will choose techniques for several mixtures, purify a solid by recrystallization, and check how pure it is. Tick each item when you can do it without help.": "이 실험에서는 Structure 1.1.1과 Tool 1의 기능을 연습해요. 여러 혼합물에 맞는 분리 방법을 고르고, 재결정으로 고체를 정제하고, 얼마나 순수한지 확인해요. 도움 없이 할 수 있게 되면 하나씩 체크하세요.",

    // What you need to be able to do > checklist > span
    "Choose a separation technique from the states of the parts of a mixture and a physical property that differs between them.": "혼합물을 이루는 성분의 상태와, 성분끼리 다른 물리적 성질을 보고 분리 방법을 고를 수 있어요.",

    // What you need to be able to do > checklist > span
    "Plan a sequence of steps to separate a soluble solid from an insoluble one, including drying both products.": "녹는 고체와 녹지 않는 고체를 분리하는 단계를 차례대로 계획할 수 있어요. 두 생성물을 말리는 단계까지 포함해요.",

    // What you need to be able to do > checklist > span
    "Describe recrystallization and give the reason for each key step.": "재결정을 서술하고, 핵심 단계마다 그 이유를 말할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Predict how a change in the method affects the yield and the purity of the product.": "방법을 바꾸면 생성물의 수득량과 순도가 어떻게 달라지는지 예측할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Use a melting range to judge whether a solid is pure.": "녹는점 범위로 고체가 순수한지 판단할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Calculate a percentage recovery and its uncertainty from mass readings.": "질량 측정값으로 회수율과 그 불확도를 계산할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors and suggest realistic improvements.": "우연 오차와 계통 오차를 찾고, 현실적인 개선 방법을 제안할 수 있어요.",

    // The chemistry behind it > data-toc attribute
    "Background": "배경",

    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "A mixture can be separated by physical methods because its parts are not chemically bonded. Each technique uses one physical property that is different for the parts: solubility, particle size or boiling point. The full table of techniques is in <a href=\"../topics/s1-1.html#separating\">Structure 1.1: separating mixtures</a>.": "혼합물의 성분은 화학적으로 결합되어 있지 않아서 물리적 방법으로 분리할 수 있어요. 각 방법은 성분마다 다른 물리적 성질 하나를 이용해요: 용해도, 입자 크기, 끓는점. 분리 방법을 모두 정리한 표는 <a href=\"../topics/s1-1.html#separating\">Structure 1.1: 혼합물의 분리</a>에 있어요.",

    // The chemistry behind it > p
    "Chemists also need to <strong>purify</strong> products. A solid made in a reaction usually contains small amounts of other substances. <dfn data-def=\"A technique that purifies a solid: dissolve it in the minimum volume of hot solvent, filter hot, cool to form crystals, filter, rinse with cold solvent and dry.\">Recrystallization</dfn> works when the product is much more soluble in a hot solvent than in the same solvent when cold.": "화학자는 생성물을 <strong>정제</strong>할 줄도 알아야 해요. 반응으로 만든 고체에는 보통 다른 물질이 조금씩 섞여 있어요. <dfn data-def=\"고체를 정제하는 방법: 최소한의 뜨거운 용매에 녹이고, 뜨거울 때 거르고, 식혀서 결정을 만든 뒤, 거르고, 차가운 용매로 헹구고 말려요.\">재결정 <span class=\"en-term\">(recrystallization)</span></dfn>은 생성물이 같은 용매에서 차가울 때보다 뜨거울 때 훨씬 더 잘 녹을 때 쓸 수 있어요.",

    // The chemistry behind it > data-def attribute
    "A technique that purifies a solid: dissolve it in the minimum volume of hot solvent, filter hot, cool to form crystals, filter, rinse with cold solvent and dry.": "고체를 정제하는 방법: 최소한의 뜨거운 용매에 녹이고, 뜨거울 때 거르고, 식혀서 결정을 만든 뒤, 거르고, 차가운 용매로 헹구고 말려요.",

    // The chemistry behind it > table > caption
    "Approximate solubility of benzoic acid in water": "물에 대한 벤조산의 대략적인 용해도",

    // The chemistry behind it > table > th
    "Temperature / °C": "온도 / °C",

    // The chemistry behind it > table > th
    "Mass that dissolves in 100 cm<sup>3</sup> of water / g": "물 100 cm<sup>3</sup>에 녹는 질량 / g",

    // The chemistry behind it > table > th
    "5 (ice bath)": "5 (얼음 중탕)",

    // The chemistry behind it > table > th
    "20 (room temperature)": "20 (실온)",

    // The chemistry behind it > table > th
    "95 (nearly boiling)": "95 (거의 끓는 물)",

    // The chemistry behind it > p
    "So hot water can dissolve about 20 times as much benzoic acid as cold water. A small amount of a soluble impurity stays dissolved when the solution cools, because there is too little of it to saturate the cold water. An insoluble impurity, such as sand, never dissolves, so it can be filtered off while the solution is hot.": "그래서 뜨거운 물은 차가운 물보다 벤조산을 약 20배 더 녹일 수 있어요. 녹는 불순물은 양이 적어서 차가운 물을 포화시키지 못하므로, 용액이 식어도 녹은 채로 남아요. 모래처럼 녹지 않는 불순물은 전혀 녹지 않으므로 용액이 뜨거울 때 걸러 낼 수 있어요.",

    // The chemistry behind it > key idea > p
    "A pure solid melts at a fixed temperature, over a narrow range of about 1 °C. Impurities lower the melting point and make it melt over a wider range. So a melting point is a quick check of purity, as well as of identity.": "순수한 고체는 약 1 °C의 좁은 범위, 즉 일정한 온도에서 녹아요. 불순물이 있으면 녹는점이 낮아지고 더 넓은 범위에서 녹아요. 그래서 녹는점은 물질이 무엇인지뿐 아니라 순도를 빠르게 확인하는 방법이기도 해요.",

    // The chemistry behind it > p
    "Chromatography is the other technique in Structure 1.1.1. It has its own practical: <a href=\"lab-chromatography.html\">Lab 2: Paper and thin-layer chromatography</a>.": "크로마토그래피는 Structure 1.1.1의 또 다른 분리 방법이에요. 따로 실험이 있어요: <a href=\"lab-chromatography.html\">실험 2: 종이 크로마토그래피와 얇은 막 크로마토그래피</a>.",

    // The chemistry behind it > not needed for IB > p
    "You do not need fractional distillation columns, separating funnels, sublimation or mixed melting points. You also do not need to explain why impurities lower a melting point in any depth. A percentage recovery is not a percentage yield: yields from reactions come later, in Reactivity 2.1.": "분별 증류관, 분별 깔때기, 승화, 혼합 녹는점은 필요 없어요. 불순물이 녹는점을 낮추는 이유를 깊이 설명할 필요도 없어요. 회수율은 수득률이 아니에요: 반응의 수득률은 나중에 Reactivity 2.1에서 나와요.",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to purify a sample of impure benzoic acid by recrystallization from water, find the percentage recovery, and use the melting range to judge the purity of the product.": "<strong>목적:</strong> 불순한 벤조산 시료를 물에서 재결정해 정제하고, 회수율을 구하고, 녹는점 범위로 생성물의 순도를 판단해요.",

    // Aim, variables and safety > p
    "The impure sample contains about 91 % benzoic acid, with some sand and a small amount of a soluble impurity.": "불순한 시료에는 벤조산이 약 91 % 들어 있고, 모래와 소량의 녹는 불순물이 섞여 있어요.",

    // Aim, variables and safety > table > caption
    "Variables in the recrystallization investigation": "재결정 실험의 변인",

    // Aim, variables and safety > table > th
    "Type": "유형",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "측정하거나 같게 유지하는 방법",

    // Aim, variables and safety > table > th
    "Independent": "독립 변인",

    // Aim, variables and safety > table > td
    "volume of hot water used (in other runs: the cooling method)": "사용한 뜨거운 물의 부피 (다른 회차에서는 냉각 방법)",

    // Aim, variables and safety > table > td
    "measuring cylinder, ±1 cm<sup>3</sup>": "눈금실린더, ±1 cm<sup>3</sup>",

    // Aim, variables and safety > table > th
    "Dependent": "종속 변인",

    // Aim, variables and safety > table > td
    "percentage recovery of benzoic acid": "벤조산의 회수율",

    // Aim, variables and safety > table > td
    "masses on a balance, ±0.01 g": "저울로 잰 질량, ±0.01 g",

    // Aim, variables and safety > table > td
    "melting range of the product": "생성물의 녹는점 범위",

    // Aim, variables and safety > table > td
    "melting point apparatus, ±0.5 °C": "녹는점 측정 장치, ±0.5 °C",

    // Aim, variables and safety > table > th
    "Controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "mass and batch of impure sample": "불순한 시료의 질량과 같은 병",

    // Aim, variables and safety > table > td
    "about 2 g from the same bottle": "같은 병에서 약 2 g",

    // Aim, variables and safety > table > td
    "temperature of the hot water and of the ice bath": "뜨거운 물과 얼음 중탕의 온도",

    // Aim, variables and safety > table > td
    "nearly boiling (about 95 °C); ice bath about 5 °C": "거의 끓는 물 (약 95 °C), 얼음 중탕 약 5 °C",

    // Aim, variables and safety > table > td
    "rinse and drying": "헹구기와 말리기",

    // Aim, variables and safety > table > td
    "same small volume of ice-cold water; dry to constant mass": "얼음처럼 차가운 물을 똑같이 조금, 질량이 일정해질 때까지 말리기",

    // Aim, variables and safety > h3
    "Equipment": "기구와 시약",

    // Aim, variables and safety > li
    "impure benzoic acid, about 2 g": "불순한 벤조산, 약 2 g",

    // Aim, variables and safety > li
    "distilled water": "증류수",

    // Aim, variables and safety > li
    "two 100 cm<sup>3</sup> beakers and a glass rod": "100 cm<sup>3</sup> 비커 2개와 유리 막대",

    // Aim, variables and safety > li
    "hot plate": "가열판",

    // Aim, variables and safety > li
    // Uncertainties > table > th
    "50 cm<sup>3</sup> measuring cylinder": "50 cm<sup>3</sup> 눈금실린더",

    // Aim, variables and safety > li
    "stemless filter funnel, fluted filter paper, conical flask": "목 없는 깔때기, 주름 거름종이, 삼각 플라스크",

    // Aim, variables and safety > li
    "ice bath": "얼음 중탕",

    // Aim, variables and safety > li
    "second funnel and filter paper (or a Büchner funnel with suction)": "두 번째 깔때기와 거름종이 (또는 감압 장치가 달린 뷰흐너 깔때기)",

    // Aim, variables and safety > li
    "watch glass and spatula": "시계 접시와 약숟가락",

    // Aim, variables and safety > li
    "balance reading to 0.01 g": "0.01 g까지 읽는 저울",

    // Aim, variables and safety > li
    "melting point apparatus with thermometer, capillary tubes": "온도계가 달린 녹는점 측정 장치, 모세관",

    // Aim, variables and safety > li
    "low-temperature oven or desiccator": "저온 오븐 또는 데시케이터",

    // Aim, variables and safety > p
    "Wear eye protection throughout. Benzoic acid causes serious eye irritation and its dust irritates the nose and throat: do not make dust, and wash your hands afterwards.": "실험하는 내내 보안경을 쓰세요. 벤조산은 눈에 심한 자극을 주고, 가루는 코와 목을 자극해요: 가루를 날리지 말고, 실험 뒤에는 손을 씻으세요.",

    // Aim, variables and safety > p
    "Nearly boiling water scalds. Move hot beakers with tongs or heat-resistant gloves, and remember the hot plate stays hot after it is switched off. The melting point block goes above 120 °C: do not touch it, and let it cool before you change capillaries. Capillary tubes are thin glass: put broken ones in the glass bin, not the ordinary bin.": "거의 끓는 물에 데일 수 있어요. 뜨거운 비커는 집게나 내열 장갑으로 옮기고, 가열판은 끈 뒤에도 뜨겁다는 것을 기억하세요. 녹는점 측정 장치의 가열 블록은 120 °C 넘게 올라가요: 만지지 말고, 모세관을 바꾸기 전에 식히세요. 모세관은 얇은 유리예요: 깨진 것은 일반 쓰레기통이 아니라 유리 수거함에 버리세요.",

    // Aim, variables and safety > p
    "If your teacher shows a distillation of ethanol and water, ethanol is highly flammable: heat it with an electric heater or water bath, never a naked flame, with anti-bumping granules in the flask.": "선생님이 ethanol과 물의 증류를 보여 준다면, ethanol은 불이 아주 잘 붙어요: 불꽃이 아니라 전기 가열기나 물 중탕으로 가열하고, 플라스크에 끓임쪽을 넣어요.",

    // Method > h2
    // widget string (assets/js/widgets-lab-separation.js)
    "Method": "방법",

    // Method > h3
    "Part A: recrystallization": "A 부분: 재결정",

    // Method > li
    "Weigh about 2 g of impure benzoic acid into a 100 cm<sup>3</sup> beaker. Record the mass to 0.01 g.": "100 cm<sup>3</sup> 비커에 불순한 벤조산 약 2 g을 달아 넣어요. 질량을 0.01 g까지 기록해요.",

    // Method > li
    "Heat about 60 cm<sup>3</sup> of distilled water on the hot plate until it nearly boils.": "증류수 약 60 cm<sup>3</sup>를 가열판에서 거의 끓을 때까지 가열해요.",

    // Method > li
    "Add the hot water to the solid in small portions, stirring and keeping it hot, until the benzoic acid has just dissolved. The sand will not dissolve. Record the volume used. <em>Why:</em> the less solvent you use, the less product stays dissolved when the solution cools.": "뜨거운 물을 고체에 조금씩 넣으면서 젓고 계속 뜨겁게 유지해요. 벤조산이 막 다 녹을 때까지 넣어요. 모래는 녹지 않아요. 사용한 부피를 기록해요. <em>이유:</em> 용매를 적게 쓸수록 용액이 식을 때 녹은 채로 남는 생성물이 적어요.",

    // Method > li
    "Add a few cm<sup>3</sup> more hot water (about one tenth extra). <em>Why:</em> a solution that is exactly saturated starts to crystallize in the funnel as it cools slightly.": "뜨거운 물을 몇 cm<sup>3</sup> 더 넣어요 (약 10분의 1 정도 더). <em>이유:</em> 딱 포화된 용액은 조금만 식어도 깔때기 안에서 결정이 생기기 시작해요.",

    // Method > li
    "Filter the hot solution through fluted filter paper in a warm, stemless funnel. <em>Why:</em> this removes insoluble impurities such as sand. A warm funnel with no stem gives the solution little chance to cool before it passes through.": "뜨거운 용액을 따뜻한 목 없는 깔때기에 놓은 주름 거름종이로 걸러요. <em>이유:</em> 모래 같은 녹지 않는 불순물을 없애요. 목이 없는 따뜻한 깔때기에서는 용액이 통과하기 전에 식을 틈이 거의 없어요.",

    // Method > li
    "Cover the filtrate and let it cool slowly to room temperature, then stand it in an ice bath for 10 minutes. <em>Why:</em> slow cooling gives larger crystals that trap less impurity; the ice bath makes more of the product crystallize.": "거른 액을 덮고 실온까지 천천히 식힌 다음, 얼음 중탕에 10분 동안 담가 둬요. <em>이유:</em> 천천히 식히면 큰 결정이 생겨서 불순물이 덜 갇혀요. 얼음 중탕은 생성물이 더 많이 결정으로 나오게 해요.",

    // Method > li
    "Filter to collect the crystals. Rinse them with a small volume of ice-cold water. <em>Why:</em> the rinse washes away the solution that contains the soluble impurity. Warm water would dissolve some of the crystals.": "걸러서 결정을 모아요. 얼음처럼 차가운 물을 조금 써서 헹궈요. <em>이유:</em> 헹구면 녹는 불순물이 든 용액이 씻겨 나가요. 따뜻한 물은 결정을 일부 녹여요.",

    // Method > li
    "Dry the crystals on a weighed watch glass in a low-temperature oven or a desiccator. Weigh, dry again and reweigh until two masses agree (constant mass). <em>Why:</em> any water left in the product adds to its mass.": "무게를 잰 시계 접시에 결정을 놓고 저온 오븐이나 데시케이터에서 말려요. 무게를 재고, 다시 말리고, 다시 재서 두 질량이 같아질 때까지 되풀이해요 (일정 질량). <em>이유:</em> 생성물에 남은 물은 질량을 늘려요.",

    // Method > h3
    "Part B: melting point": "B 부분: 녹는점",

    // Method > li
    "Grind a little of the dry product. Press the open end of a capillary tube into it and tap the tube until there is 2–3 mm of tightly packed solid at the bottom.": "마른 생성물을 조금 갈아요. 모세관의 열린 끝을 가루에 눌러 넣고, 바닥에 고체가 2–3 mm 단단히 채워질 때까지 관을 톡톡 쳐요.",

    // Method > li
    "Heat the block quickly to about 110 °C, then slowly, at 1–2 °C per minute. <em>Why:</em> if you heat fast, the thermometer gets ahead of the sample.": "가열 블록을 약 110 °C까지 빠르게 가열한 뒤, 분당 1–2 °C로 천천히 가열해요. <em>이유:</em> 빠르게 가열하면 온도계가 시료보다 앞서 올라가요.",

    // Method > li
    "Record the temperature when liquid first appears and when the last solid disappears. This is the melting range.": "액체가 처음 보일 때의 온도와 마지막 고체가 사라질 때의 온도를 기록해요. 이것이 녹는점 범위예요.",

    // Method > li
    "Repeat with the impure starting material and with pure benzoic acid, so you can compare all three.": "불순한 출발 물질과 순수한 벤조산으로도 되풀이해서 셋을 모두 비교해요.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > h3
    "1. Choose a technique": "1. 분리 방법 고르기",

    // Run the experiment > p
    "Start by matching techniques to mixtures. For each mixture, think about which part you want to keep and which property differs, then try a technique. Wrong choices are useful: see where each part ends up.": "먼저 혼합물에 맞는 분리 방법을 짝지어 봐요. 혼합물마다 어떤 성분을 남기고 싶은지, 어떤 성질이 다른지 생각한 다음 방법을 하나 시도해요. 틀린 선택도 쓸모가 있어요: 각 성분이 어디로 가는지 보세요.",

    // Run the experiment > widget > data-title attribute
    "Separation bench": "분리 실험대",

    // Run the experiment > widget > figcaption
    "Choose a mixture and a technique, then press Try it. The boxes show where each part ends up; a dashed box means it is lost. Notice that evaporation and distillation use the same property, but only distillation keeps the liquid.": "혼합물과 분리 방법을 고른 다음 해 보기를 누르세요. 상자는 각 성분이 어디로 가는지 보여 줘요. 점선 상자는 잃어버린다는 뜻이에요. 증발과 증류는 같은 성질을 이용하지만, 액체를 남기는 것은 증류뿐이라는 점에 주목하세요.",

    // Run the experiment > h3
    "2. Recrystallize the impure benzoic acid": "2. 불순한 벤조산 재결정하기",

    // Run the experiment > p
    "Do a first run with the method as written. Then change one thing at a time and compare the recovery and what the crystals look like. Each run uses a new sample of about 2 g, so the masses change slightly from run to run.": "처음에는 적힌 방법대로 해요. 그다음 한 번에 하나씩 바꾸면서 회수율과 결정의 모양을 비교해요. 회차마다 약 2 g의 새 시료를 쓰므로 질량이 회차마다 조금씩 달라요.",

    // Run the experiment > widget > data-title attribute
    // widget string (assets/js/widgets-lab-separation.js)
    "Recrystallization": "재결정",

    // Run the experiment > widget > figcaption
    "Set the method and press Run recrystallization. The graph shows why the volume matters: the dashed line is the concentration of your hot solution, and only the part above the solubility curve at the final temperature crystallizes. Copy the raw data into your notebook. The masses are model data.": "방법을 정하고 재결정 실행을 누르세요. 그래프는 부피가 왜 중요한지 보여 줘요: 점선은 뜨거운 용액의 농도이고, 마지막 온도에서 용해도 곡선보다 위에 있는 부분만 결정으로 나와요. 원자료를 노트에 옮겨 적으세요. 질량은 모형 자료예요.",

    // Run the experiment > h3
    "3. Test the purity": "3. 순도 시험하기",

    // Run the experiment > p
    "Products from your runs appear in the sample list. Compare one of them with the impure sample and with pure benzoic acid. Press the buttons at the moment you see each change.": "실험에서 얻은 생성물이 시료 목록에 나타나요. 그중 하나를 불순한 시료, 순수한 벤조산과 비교해요. 각 변화가 보이는 순간에 버튼을 누르세요.",

    // Run the experiment > widget > data-title attribute
    "Melting point apparatus": "녹는점 측정 장치",

    // Run the experiment > widget > figcaption
    "Press Start heating and watch the sample. Press \"Melting starts now\" when liquid first appears and \"Fully melted now\" when the last solid goes. Try the fast heating setting too, and compare the ranges. The readout describes the sample in words.": "가열 시작을 누르고 시료를 지켜보세요. 액체가 처음 보이면 \"지금 녹기 시작\"을, 마지막 고체가 사라지면 \"지금 다 녹음\"을 누르세요. 빠른 가열 설정으로도 해 보고 범위를 비교하세요. 표시창은 시료의 모습을 말로 알려 줘요.",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > p
    "The percentage recovery tells you how much of the starting material you got back as product. Find the mass of product by difference, then compare it with the mass you started with.": "회수율은 출발 물질 중 얼마를 생성물로 되찾았는지 알려 줘요. 생성물의 질량을 차이로 구한 다음, 처음 질량과 비교해요.",

    // Processing the data > equation > maths line
    "percentage recovery = <span class=\"frac\"><span><i>m</i><sub>p</sub></span><span><i>m</i><sub>s</sub></span></span> × 100": "회수율 = <span class=\"frac\"><span><i>m</i><sub>p</sub></span><span><i>m</i><sub>s</sub></span></span> × 100",

    // Processing the data > equation > dt
    "m<sub>p</sub>": "m<sub>p</sub>",

    // Processing the data > equation > dd
    "mass of dry product <span class=\"unit\">g</span>": "마른 생성물의 질량 <span class=\"unit\">g</span>",

    // Processing the data > equation > dt
    "m<sub>s</sub>": "m<sub>s</sub>",

    // Processing the data > equation > dd
    "mass of impure sample at the start <span class=\"unit\">g</span>": "처음 불순한 시료의 질량 <span class=\"unit\">g</span>",

    // Processing the data > worked example > data-kicker attribute
    "Worked example": "예제",

    // Processing the data > worked example > h3
    "Percentage recovery and purity from one run": "한 회차 자료로 구하는 회수율과 순도",

    // Processing the data > worked example > p
    "A student recrystallized 2.04 g of impure benzoic acid. The empty watch glass had a mass of 24.36 g. The watch glass with the dry product had a mass of 25.87 g. The product melted at 120.0–121.5 °C. The literature melting point of benzoic acid is 122 °C. Calculate the percentage recovery and comment on the purity.": "한 학생이 불순한 벤조산 2.04 g을 재결정했어요. 빈 시계 접시의 질량은 24.36 g이었어요. 마른 생성물이 담긴 시계 접시의 질량은 25.87 g이었어요. 생성물은 120.0–121.5 °C에서 녹았어요. 벤조산의 문헌 녹는점은 122 °C예요. 회수율을 계산하고 순도에 대해 의견을 말하시오.",

    // Processing the data > worked example > data-title attribute
    "Find the mass of product": "생성물의 질량 구하기",

    // Processing the data > worked example > p
    "The product was weighed on the watch glass, so subtract the mass of the glass.": "생성물을 시계 접시에 올려 쟀으므로 접시의 질량을 빼요.",

    // Processing the data > worked example > maths line
    "<i>m</i>(product) = 25.87 g − 24.36 g = 1.51 g": "<i>m</i>(생성물) = 25.87 g − 24.36 g = 1.51 g",

    // Processing the data > worked example > data-title attribute
    "Divide by the starting mass": "처음 질량으로 나누기",

    // Processing the data > worked example > p
    "Recovery compares what you got back with what you started with.": "회수율은 되찾은 양을 처음 양과 비교해요.",

    // Processing the data > worked example > maths line
    "recovery = (1.51 g / 2.04 g) × 100 = 74.0196… %": "회수율 = (1.51 g / 2.04 g) × 100 = 74.0196… %",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "자료에 맞춰 반올림하기",

    // Processing the data > worked example > p
    "Both masses have 3 significant figures.": "두 질량 모두 유효 숫자가 3자리예요.",

    // Processing the data > worked example > maths line
    "recovery = <b>74.0 %</b>": "회수율 = <b>74.0 %</b>",

    // Processing the data > worked example > data-title attribute
    "Interpret the melting range": "녹는점 범위 해석하기",

    // Processing the data > worked example > p
    "A pure solid melts sharply at its literature value; impurities lower and widen the range.": "순수한 고체는 문헌값에서 날카롭게 녹아요. 불순물은 범위를 낮추고 넓혀요.",

    // Processing the data > worked example > p
    "The range is 1.5 °C wide and ends 0.5 °C below 122 °C. The product is much purer than the starting material, but it may still hold a trace of impurity.": "범위의 폭은 1.5 °C이고, 122 °C보다 0.5 °C 낮은 곳에서 끝나요. 생성물은 출발 물질보다 훨씬 순수하지만, 아직 불순물이 아주 조금 남아 있을 수 있어요.",

    // Processing the data > worked example > p
    "Percentage recovery = 74.0 %. The narrow melting range close to 122 °C shows the product is nearly pure.": "회수율 = 74.0 %. 122 °C에 가까운 좁은 녹는점 범위는 생성물이 거의 순수하다는 것을 보여 줘요.",

    // Processing the data > try it > data-label attribute
    "Percentage recovery": "회수율",

    // Processing the data > try it > p
    "Another student starts with 3.12 g of impure benzoic acid. The empty watch glass has a mass of 25.08 g, and 27.66 g with the dry product. Calculate the percentage recovery.": "다른 학생은 불순한 벤조산 3.12 g으로 시작해요. 빈 시계 접시의 질량은 25.08 g이고, 마른 생성물을 올리면 27.66 g이에요. 회수율을 계산하시오.",

    // Processing the data > try it > li
    "First find the mass of product by difference.": "먼저 생성물의 질량을 차이로 구하세요.",

    // Processing the data > try it > li
    "The product has a mass of 2.58 g. Divide by 3.12 g and multiply by 100.": "생성물의 질량은 2.58 g이에요. 3.12 g으로 나누고 100을 곱하세요.",

    // Processing the data > try it > maths line
    "<i>m</i>(product) = 27.66 g − 25.08 g = 2.58 g": "<i>m</i>(생성물) = 27.66 g − 25.08 g = 2.58 g",

    // Processing the data > try it > maths line
    "recovery = (2.58 g / 3.12 g) × 100 = 82.7 %": "회수율 = (2.58 g / 3.12 g) × 100 = 82.7 %",

    // Processing the data > common mistake > p
    "A recovery close to or above 100 % is not good news. Some product is always lost, so a very high value usually means the product was still wet, or contains an impurity such as sand.": "회수율이 100 %에 가깝거나 100 %보다 높으면 좋은 소식이 아니에요. 생성물은 항상 조금 잃게 되므로, 아주 높은 값은 보통 생성물이 아직 젖어 있었거나 모래 같은 불순물이 들어 있다는 뜻이에요.",

    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > table > caption
    "Uncertainty of each reading": "각 측정값의 불확도",

    // Uncertainties > table > th
    "Apparatus": "기구",

    // Uncertainties > table > th
    "Reads to": "읽는 단위",

    // Uncertainties > table > th
    "Uncertainty of one reading": "측정값 하나의 불확도",

    // Uncertainties > table > th
    "balance": "저울",

    // Uncertainties > table > th
    "thermometer (1 °C divisions)": "온도계 (1 °C 눈금)",

    // Uncertainties > table > td
    "1 cm<sup>3</sup>": "1 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±1 cm<sup>3</sup>": "±1 cm<sup>3</sup>",

    // Uncertainties > h3
    "Propagating the uncertainty": "불확도 전파",

    // Uncertainties > p
    "Use the worked example data. The mass of product comes from <strong>two</strong> readings subtracted, so <strong>add the absolute uncertainties</strong>.": "예제 자료를 써요. 생성물의 질량은 측정값 <strong>2개</strong>를 빼서 구하므로 <strong>절대 불확도를 더해요</strong>.",

    // Uncertainties > maths line
    "Δ<i>m</i>(product) = ±(0.01 + 0.01) g = ±0.02 g": "Δ<i>m</i>(생성물) = ±(0.01 + 0.01) g = ±0.02 g",

    // Uncertainties > p
    "The recovery is a <strong>division</strong>, so <strong>add the percentage uncertainties</strong>.": "회수율은 <strong>나눗셈</strong>이므로 <strong>백분율 불확도를 더해요</strong>.",

    // Uncertainties > maths line
    "% uncertainty of <i>m</i>(product) = (0.02 / 1.51) × 100 = 1.32 %": "<i>m</i>(생성물)의 % 불확도 = (0.02 / 1.51) × 100 = 1.32 %",

    // Uncertainties > maths line
    "% uncertainty of <i>m</i>(impure sample) = (0.01 / 2.04) × 100 = 0.49 %": "<i>m</i>(불순한 시료)의 % 불확도 = (0.01 / 2.04) × 100 = 0.49 %",

    // Uncertainties > maths line
    "% uncertainty of recovery = 1.32 % + 0.49 % = 1.81 %": "회수율의 % 불확도 = 1.32 % + 0.49 % = 1.81 %",

    // Uncertainties > maths line
    "absolute uncertainty = 74.0 × 1.81 / 100 = ±1.3, so recovery = 74 ± 1 %": "절대 불확도 = 74.0 × 1.81 / 100 = ±1.3, 따라서 회수율 = 74 ± 1 %",

    // Uncertainties > p
    "The mass of impure sample is read once on a balance that was set to zero, so it carries one reading uncertainty. The absolute uncertainty is given to 1 significant figure, and the value is rounded to the same decimal place.": "불순한 시료의 질량은 영점을 맞춘 저울에서 한 번 읽으므로 측정값 하나의 불확도를 가져요. 절대 불확도는 유효 숫자 1자리로 나타내고, 값은 같은 소수 자리까지 반올림해요.",

    // Uncertainties > try it > data-label attribute
    "Percentage uncertainty of the recovery": "회수율의 백분율 불확도",

    // Uncertainties > try it > p
    "For the \"Try it\" data above (3.12 g of sample; watch glass 25.08 g, then 27.66 g), calculate the percentage uncertainty of the recovery. The balance reads to ±0.01 g.": "위 \"직접 해 보기\" 자료 (시료 3.12 g, 시계 접시 25.08 g, 그다음 27.66 g)로 회수율의 백분율 불확도를 계산하시오. 저울은 ±0.01 g까지 읽어요.",

    // Uncertainties > try it > li
    "The product mass (2.58 g) comes from two readings, so its uncertainty is ±0.02 g.": "생성물 질량 (2.58 g)은 측정값 2개로 구하므로 불확도는 ±0.02 g이에요.",

    // Uncertainties > try it > li
    "Add (0.02 / 2.58) × 100 and (0.01 / 3.12) × 100.": "(0.02 / 2.58) × 100과 (0.01 / 3.12) × 100을 더하세요.",

    // Uncertainties > try it > maths line
    "% uncertainty = 0.775 % + 0.321 % = 1.1 %": "% 불확도 = 0.775 % + 0.321 % = 1.1 %",

    // Uncertainties > h3
    "Comparing with the literature value": "문헌값과 비교하기",

    // Uncertainties > p
    "The impure starting material in the same experiment melted at 113.5–119.5 °C. Compare the temperature at which each sample is fully melted with the literature value of 122 °C.": "같은 실험에서 불순한 출발 물질은 113.5–119.5 °C에서 녹았어요. 각 시료가 다 녹은 온도를 문헌값 122 °C와 비교해요.",

    // Uncertainties > maths line
    "percentage error = |experimental − literature| / literature × 100": "백분율 오차 = |실험값 − 문헌값| / 문헌값 × 100",

    // Uncertainties > maths line
    "product: |121.5 − 122| / 122 × 100 = 0.4 %": "생성물: |121.5 − 122| / 122 × 100 = 0.4 %",

    // Uncertainties > maths line
    "impure sample: |119.5 − 122| / 122 × 100 = 2.0 %": "불순한 시료: |119.5 − 122| / 122 × 100 = 2.0 %",

    // Uncertainties > p
    "Then ask the more useful question: <strong>is the difference bigger than the uncertainty?</strong> For the product, the difference is 0.5 °C, the same as the thermometer uncertainty, so it agrees with the literature value. For the impure sample the difference is 2.5 °C, five times the uncertainty, so it is a real effect: the impurities lowered the melting point.": "그다음 더 쓸모 있는 질문을 해요: <strong>차이가 불확도보다 큰가?</strong> 생성물은 차이가 0.5 °C로 온도계의 불확도와 같으므로 문헌값과 일치해요. 불순한 시료는 차이가 2.5 °C로 불확도의 5배이므로 실제 효과예요: 불순물이 녹는점을 낮췄어요.",

    // Uncertainties > exam tip (shown in English + translation) > p
    "In Paper 1B, give an absolute uncertainty to 1 significant figure and the value to the same decimal place. When you compare with a literature value, say whether the difference is larger than the uncertainty. If it is, there must be a systematic error or a real effect such as an impurity.": "Paper 1B에서는 절대 불확도를 유효 숫자 1자리로, 값은 같은 소수 자리까지 나타내요. 문헌값과 비교할 때는 차이가 불확도보다 큰지 말하세요. 더 크다면 계통 오차가 있거나 불순물 같은 실제 효과가 있는 거예요.",

    // Evaluation: errors and improvements > data-toc attribute
    "Evaluation": "평가",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.\">random error</dfn> makes repeated results scatter, for example judging by eye the moment the last crystal melts. Repeating and averaging reduces its effect. A <dfn data-def=\"An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.\">systematic error</dfn> pushes every result the same way, for example weighing crystals that are still wet. Repeats do not help: you must change the method.": "<dfn data-def=\"반복 측정값이 참값의 위아래로 예측할 수 없게 흩어지게 하는 오차. 반복하고 평균을 내면 그 영향이 줄어요.\">우연 오차 <span class=\"en-term\">(random error)</span></dfn>는 반복한 결과를 흩어지게 해요. 마지막 결정이 녹는 순간을 눈으로 판단하는 것이 그 예예요. 반복하고 평균을 내면 그 영향이 줄어요. <dfn data-def=\"모든 결과를 같은 방향으로 치우치게 하는 오차. 반복해도 줄지 않으므로 방법이나 기구를 바꿔야 해요.\">계통 오차 <span class=\"en-term\">(systematic error)</span></dfn>는 모든 결과를 같은 쪽으로 밀어요. 아직 젖은 결정의 무게를 재는 것이 그 예예요. 반복해도 소용없어요: 방법을 바꿔야 해요.",

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
    "too much hot water used": "뜨거운 물을 너무 많이 씀",

    // Evaluation: errors and improvements > table > td
    "more benzoic acid stays dissolved after cooling, so the recovery is lower": "식힌 뒤에도 벤조산이 더 많이 녹아 있어서 회수율이 낮아져요",

    // Evaluation: errors and improvements > table > td
    "add hot water in small portions until the solid just dissolves; record the volume": "고체가 막 다 녹을 때까지 뜨거운 물을 조금씩 넣고, 부피를 기록해요",

    // Evaluation: errors and improvements > table > th
    "crystals form in the funnel during hot filtration": "뜨거울 때 거르는 동안 깔때기에서 결정이 생김",

    // Evaluation: errors and improvements > table > td
    "product is lost with the sand, so the recovery is lower": "생성물이 모래와 함께 버려져서 회수율이 낮아져요",

    // Evaluation: errors and improvements > table > td
    "use a stemless funnel warmed with hot water, add about one tenth extra hot solvent, filter quickly": "뜨거운 물로 데운 목 없는 깔때기를 쓰고, 뜨거운 용매를 약 10분의 1 더 넣고, 빨리 걸러요",

    // Evaluation: errors and improvements > table > th
    "cooling too quickly": "너무 빨리 식힘",

    // Evaluation: errors and improvements > table > td
    "small crystals trap impure solution, so the product melts lower and over a wider range": "작은 결정이 불순한 용액을 가둬서 생성물이 더 낮은 온도에서, 더 넓은 범위에 걸쳐 녹아요",

    // Evaluation: errors and improvements > table > td
    "cool slowly to room temperature first, then use the ice bath": "먼저 실온까지 천천히 식힌 다음 얼음 중탕을 써요",

    // Evaluation: errors and improvements > table > th
    "rinsing with warm water": "따뜻한 물로 헹굼",

    // Evaluation: errors and improvements > table > td
    "some crystals dissolve, so the recovery is lower": "결정이 일부 녹아서 회수율이 낮아져요",

    // Evaluation: errors and improvements > table > td
    "rinse with a small volume of ice-cold water": "얼음처럼 차가운 물을 조금 써서 헹궈요",

    // Evaluation: errors and improvements > table > th
    "product weighed while still wet (systematic)": "생성물이 아직 젖은 채로 무게를 잼 (계통)",

    // Evaluation: errors and improvements > table > td
    "water adds to the mass, so the recovery is too high; water also lowers the melting point": "물이 질량에 더해져서 회수율이 너무 높아져요. 물은 녹는점도 낮춰요",

    // Evaluation: errors and improvements > table > td
    "dry to constant mass in a low-temperature oven or desiccator": "저온 오븐이나 데시케이터에서 질량이 일정해질 때까지 말려요",

    // Evaluation: errors and improvements > table > th
    "crystals left on the paper and glassware": "거름종이와 유리 기구에 결정이 남음",

    // Evaluation: errors and improvements > table > td
    "recovery is lower": "회수율이 낮아져요",

    // Evaluation: errors and improvements > table > td
    "wash the last crystals across with a little of the cold filtrate": "차가운 거른 액을 조금 써서 남은 결정을 씻어 옮겨요",

    // Evaluation: errors and improvements > table > th
    "heating too fast in the melting point test (systematic)": "녹는점 시험에서 너무 빨리 가열함 (계통)",

    // Evaluation: errors and improvements > table > td
    "the thermometer runs ahead of the sample, so the readings are too high and the range looks wider": "온도계가 시료보다 앞서 올라가서 측정값이 너무 높고 범위가 더 넓어 보여요",

    // Evaluation: errors and improvements > table > td
    "heat quickly to about 10 °C below the expected value, then at 1–2 °C per minute": "예상값보다 약 10 °C 낮은 온도까지 빠르게 가열한 뒤, 분당 1–2 °C로 가열해요",

    // Evaluation: errors and improvements > table > th
    "judging the start and end of melting by eye (random)": "녹기 시작과 끝을 눈으로 판단함 (우연)",

    // Evaluation: errors and improvements > table > td
    "readings scatter by about 1 °C": "측정값이 약 1 °C 흩어져요",

    // Evaluation: errors and improvements > table > td
    "repeat with fresh capillaries and take the mean; run pure benzoic acid alongside as a check": "새 모세관으로 반복해서 평균을 내요. 확인용으로 순수한 벤조산을 함께 측정해요",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For an error, always say which way it moves the result and why. \"Human error\" earns nothing. A good improvement names a specific change to the apparatus or method that removes that error.": "오차를 말할 때는 결과를 어느 쪽으로 움직이는지와 그 이유를 꼭 말하세요. \"사람의 실수\"는 점수를 받지 못해요. 좋은 개선 방법은 그 오차를 없애는 기구나 방법의 구체적인 변화를 말해요.",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "These questions are in the style of Paper 1B: data from a practical, method, uncertainty and evaluation. Use the data given in each question.": "이 문제들은 Paper 1B 형식이에요: 실험 자료, 방법, 불확도, 평가. 각 문제에 주어진 자료를 쓰세요.",

    // Exam practice > data-title attribute
    "Lab 1 exam practice": "실험 1 시험 대비 연습",

    // widget string (assets/js/widgets-lab-separation.js)
    "No results yet.": "아직 결과가 없어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Sand in water": "모래와 물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: get the sand back.": "목표: 모래를 되찾기.",

    // widget string (assets/js/widgets-lab-separation.js)
    "sand": "모래",

    // widget string (assets/js/widgets-lab-separation.js)
    "water": "물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Salt water (sodium chloride solution)": "소금물 (염화 나트륨 수용액)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: get solid salt.": "목표: 고체 소금 얻기.",

    // widget string (assets/js/widgets-lab-separation.js)
    "salt": "소금",

    // widget string (assets/js/widgets-lab-separation.js)
    "Salt water, but you want the water": "소금물, 하지만 물을 얻고 싶음",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: collect pure water.": "목표: 순수한 물 모으기.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Ethanol and water (they mix completely)": "ethanol과 물 (완전히 섞여요)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: get the ethanol out.": "목표: ethanol 분리해 내기.",

    // widget string (assets/js/widgets-lab-separation.js)
    "ethanol": "ethanol",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dry mixture of sand and salt": "모래와 소금의 마른 혼합물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: a dry sample of each solid.": "목표: 두 고체를 각각 마른 상태로 얻기.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Impure benzoic acid crystals": "불순한 벤조산 결정",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: purer benzoic acid.": "목표: 더 순수한 벤조산.",

    // widget string (assets/js/widgets-lab-separation.js)
    "benzoic acid": "벤조산",

    // widget string (assets/js/widgets-lab-separation.js)
    "soluble impurity": "녹는 불순물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Black ink": "검은색 잉크",

    // widget string (assets/js/widgets-lab-separation.js)
    "Goal: find out how many dyes it contains.": "목표: 염료가 몇 가지 들어 있는지 알아내기.",

    // widget string (assets/js/widgets-lab-separation.js)
    "dyes": "염료",

    // widget string (assets/js/widgets-lab-separation.js)
    "solvent": "용매",

    // widget string (assets/js/widgets-lab-separation.js)
    "Filtration": "거름",

    // widget string (assets/js/widgets-lab-separation.js)
    "Evaporation, then crystallize": "증발 후 결정화",

    // widget string (assets/js/widgets-lab-separation.js)
    "Simple distillation": "단순 증류",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dissolve in water, filter, evaporate the filtrate": "물에 녹이고, 거르고, 거른 액을 증발",

    // widget string (assets/js/widgets-lab-separation.js)
    "Paper chromatography": "종이 크로마토그래피",

    // widget string (assets/js/widgets-lab-separation.js)
    "Mixture": "혼합물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Technique": "방법",

    // widget string (assets/js/widgets-lab-separation.js)
    "Try it": "해 보기",

    // widget string (assets/js/widgets-lab-separation.js)
    "Your attempts": "시도한 결과",

    // widget string (assets/js/widgets-lab-separation.js)
    "Result": "결과",

    // widget string (assets/js/widgets-lab-separation.js)
    "Choose a technique and press Try it.": "분리 방법을 고르고 해 보기를 누르세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Spots on the paper": "종이 위의 점",

    // widget string (assets/js/widgets-lab-separation.js)
    "three separate coloured spots": "색이 다른 점 3개",

    // widget string (assets/js/widgets-lab-separation.js)
    "The dyes separate into spots. This tells you how many dyes there are and, with known dyes beside it, which ones. Lab 2 runs this experiment and measures R<sub>F</sub> values.": "염료가 여러 점으로 분리돼요. 염료가 몇 가지인지 알 수 있고, 옆에 알고 있는 염료를 함께 찍으면 어떤 염료인지도 알 수 있어요. 실험 2에서 이 실험을 하고 R<sub>F</sub> 값을 측정해요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "On the paper": "종이 위",

    // widget string (assets/js/widgets-lab-separation.js)
    "a faint smear": "희미하게 번진 자국",

    // widget string (assets/js/widgets-lab-separation.js)
    "Chromatography separates tiny amounts of dissolved substances so you can identify them. It does not give you a usable sample of anything.": "크로마토그래피는 녹아 있는 아주 적은 양의 물질을 분리해서 무엇인지 확인하게 해 줘요. 쓸 수 있는 양의 시료를 얻는 방법은 아니에요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Crystals on the filter paper": "거름종이 위의 결정",

    // widget string (assets/js/widgets-lab-separation.js)
    "benzoic acid (purer)": "벤조산 (더 순수함)",

    // widget string (assets/js/widgets-lab-separation.js)
    "In the filtrate": "거른 액 속",

    // widget string (assets/js/widgets-lab-separation.js)
    "a little benzoic acid": "약간의 벤조산",

    // widget string (assets/js/widgets-lab-separation.js)
    "Benzoic acid dissolves well in hot water and poorly in cold water. The impurity is present in a small amount, so it stays dissolved when the solution cools. You lose a little product, which stays in solution.": "벤조산은 뜨거운 물에 잘 녹고 차가운 물에는 잘 녹지 않아요. 불순물은 양이 적어서 용액이 식어도 녹은 채로 남아요. 용액에 남는 생성물을 조금 잃게 돼요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Nothing useful": "쓸모 있는 것이 없음",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recrystallization purifies a solid that contains small amounts of impurities. This mixture is not like that.": "재결정은 불순물이 조금 섞인 고체를 정제하는 방법이에요. 이 혼합물은 그런 경우가 아니에요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "On the filter paper": "거름종이 위",

    // widget string (assets/js/widgets-lab-separation.js)
    "most of the benzoic acid, still impure": "벤조산 대부분, 아직 불순함",

    // widget string (assets/js/widgets-lab-separation.js)
    "In the evaporating basin": "증발 접시 안",

    // widget string (assets/js/widgets-lab-separation.js)
    "some benzoic acid": "약간의 벤조산",

    // widget string (assets/js/widgets-lab-separation.js)
    "Lost to the air": "공기 중으로 날아감",

    // widget string (assets/js/widgets-lab-separation.js)
    "Cold water dissolves only a little benzoic acid, so most stays on the paper with impurity still inside the crystals. Recrystallization is designed for this job.": "차가운 물은 벤조산을 조금밖에 녹이지 못해서, 대부분이 결정 속에 불순물을 품은 채 거름종이에 남아요. 이런 일에 맞게 만든 방법이 재결정이에요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "On the filter paper (residue)": "거름종이 위 (거름 찌꺼기)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Water dissolves the soluble solid. Filtration holds back the insoluble solid. Evaporation removes the water from the filtrate. Rinse and dry the residue, and dry the crystals.": "물이 녹는 고체를 녹여요. 거름이 녹지 않는 고체를 걸러 내요. 증발이 거른 액에서 물을 없애요. 거름 찌꺼기는 헹궈서 말리고, 결정도 말려요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Filtration needs a liquid. A dry mixture just sits on the paper. Dissolve the soluble part first.": "거름에는 액체가 필요해요. 마른 혼합물은 거름종이 위에 그대로 있을 뿐이에요. 먼저 녹는 성분을 녹이세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Still in the container": "아직 용기 안",

    // widget string (assets/js/widgets-lab-separation.js)
    "There is no liquid to evaporate or boil, so nothing separates. Heating a dry mixture does not separate these solids.": "증발시키거나 끓일 액체가 없으므로 아무것도 분리되지 않아요. 마른 혼합물을 가열해도 이 고체들은 분리되지 않아요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "nothing": "없음",

    // widget string (assets/js/widgets-lab-separation.js)
    "Passes through (filtrate)": "통과함 (거른 액)",

    // widget string (assets/js/widgets-lab-separation.js)
    "The solid grains are too big to pass through the paper. The liquid passes through.": "고체 알갱이가 너무 커서 거름종이를 통과하지 못해요. 액체는 통과해요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dissolved particles are as small as the solvent particles. They pass straight through the filter paper.": "녹아 있는 입자는 용매 입자만큼 작아요. 그래서 거름종이를 그대로 통과해요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Left in the basin": "증발 접시에 남음",

    // widget string (assets/js/widgets-lab-separation.js)
    "The liquid turns to vapour and escapes. Anything that does not evaporate is left behind.": "액체가 증기로 바뀌어 날아가요. 증발하지 않는 것은 남아요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The still-head thermometer starts at about {a} °C and rises slowly towards 100 °C.": "증류 헤드의 온도계는 약 {a} °C에서 시작해 100 °C를 향해 천천히 올라가요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Collected as distillate": "증류액으로 모임",

    // widget string (assets/js/widgets-lab-separation.js)
    "mostly ethanol, with some water": "대부분 ethanol, 물이 조금",

    // widget string (assets/js/widgets-lab-separation.js)
    "Left in the flask": "플라스크에 남음",

    // widget string (assets/js/widgets-lab-separation.js)
    "mostly water": "대부분 물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Ethanol boils at 78 °C and water at 100 °C, so the first distillate is rich in ethanol. Both liquids are volatile, so simple distillation cannot give pure ethanol.": "ethanol은 78 °C, 물은 100 °C에서 끓으므로 처음 나오는 증류액에는 ethanol이 많아요. 두 액체 모두 휘발성이므로 단순 증류로는 순수한 ethanol을 얻을 수 없어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The still-head thermometer reads {a} °C while the distillate is collected.": "증류액을 모으는 동안 증류 헤드의 온도계는 {a} °C를 가리켜요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The liquid boils, the vapour condenses in the condenser and is collected. Substances that do not boil stay in the flask.": "액체가 끓고, 증기가 냉각기에서 액화되어 모여요. 끓지 않는 물질은 플라스크에 남아요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "You do get the sand, but boiling off all that water is slow and wastes energy. Filtration does the job in minutes.": "모래를 얻기는 하지만, 그 많은 물을 끓여 없애는 것은 느리고 에너지를 낭비해요. 거름이면 몇 분 만에 끝나요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "This works.": "이 방법은 효과가 있어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "This only partly works.": "이 방법은 일부만 효과가 있어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "This does not work.": "이 방법은 효과가 없어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Hint: you only need to see the dyes, not collect them.": "힌트: 염료를 모을 필요는 없고 보기만 하면 돼요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "works": "효과 있음",

    // widget string (assets/js/widgets-lab-separation.js)
    "partly": "일부",

    // widget string (assets/js/widgets-lab-separation.js)
    "does not work": "효과 없음",

    // widget string (assets/js/widgets-lab-separation.js)
    "Volume of hot water": "뜨거운 물의 부피",

    // widget string (assets/js/widgets-lab-separation.js)
    "Hot filtration": "뜨거울 때 거르기",

    // widget string (assets/js/widgets-lab-separation.js)
    "Filter while hot": "뜨거울 때 거름",

    // widget string (assets/js/widgets-lab-separation.js)
    "Skip it": "건너뜀",

    // widget string (assets/js/widgets-lab-separation.js)
    "Cooling": "냉각",

    // widget string (assets/js/widgets-lab-separation.js)
    "Slowly to room temperature, then ice bath": "실온까지 천천히, 그다음 얼음 중탕",

    // widget string (assets/js/widgets-lab-separation.js)
    "Slowly to room temperature only": "실온까지 천천히만",

    // widget string (assets/js/widgets-lab-separation.js)
    "Straight into an ice bath": "바로 얼음 중탕에",

    // widget string (assets/js/widgets-lab-separation.js)
    "Rinse the crystals with": "결정 헹구기",

    // widget string (assets/js/widgets-lab-separation.js)
    "a little ice-cold water": "얼음처럼 차가운 물 조금",

    // widget string (assets/js/widgets-lab-separation.js)
    "warm water": "따뜻한 물",

    // widget string (assets/js/widgets-lab-separation.js)
    "no rinse": "헹구지 않음",

    // widget string (assets/js/widgets-lab-separation.js)
    "Before weighing": "무게 재기 전",

    // widget string (assets/js/widgets-lab-separation.js)
    "Dry to constant mass": "질량이 일정해질 때까지 말림",

    // widget string (assets/js/widgets-lab-separation.js)
    "Weigh straight away": "바로 무게 잼",

    // widget string (assets/js/widgets-lab-separation.js)
    "Run recrystallization": "재결정 실행",

    // widget string (assets/js/widgets-lab-separation.js)
    "Clear table": "표 지우기",

    // widget string (assets/js/widgets-lab-separation.js)
    "Graph of the solubility of benzoic acid in water against temperature, with a line for the concentration of your hot solution and the mass that crystallizes on cooling": "온도에 따른 물에 대한 벤조산의 용해도 그래프. 뜨거운 용액의 농도를 나타내는 선과 식힐 때 결정으로 나오는 질량이 함께 있어요",

    // widget string (assets/js/widgets-lab-separation.js)
    "Raw data (balance reads to ±0.01 g)": "원자료 (저울은 ±0.01 g까지 읽음)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Run": "회차",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(impure sample) / g": "m(불순한 시료) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(watch glass) / g": "m(시계 접시) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(watch glass + product) / g": "m(시계 접시 + 생성물) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "m(product) / g": "m(생성물) / g",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recovery / %": "회수율 / %",

    // widget string (assets/js/widgets-lab-separation.js)
    "Mass of product": "생성물의 질량",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recovery": "회수율",

    // widget string (assets/js/widgets-lab-separation.js)
    "What you see": "관찰 결과",

    // widget string (assets/js/widgets-lab-separation.js)
    "Set up the method and press Run recrystallization.": "방법을 정하고 재결정 실행을 누르세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "slow + ice": "천천히 + 얼음",

    // widget string (assets/js/widgets-lab-separation.js)
    "slow, room temp.": "천천히, 실온",

    // widget string (assets/js/widgets-lab-separation.js)
    "fast, ice": "빠르게, 얼음",

    // widget string (assets/js/widgets-lab-separation.js)
    "cold rinse": "차가운 물로 헹굼",

    // widget string (assets/js/widgets-lab-separation.js)
    "warm rinse": "따뜻한 물로 헹굼",

    // widget string (assets/js/widgets-lab-separation.js)
    "{v} cm³; {hot}; {cool}; {rinse}; {dry}": "{v} cm³; {hot}; {cool}; {rinse}; {dry}",

    // widget string (assets/js/widgets-lab-separation.js)
    "hot filtered": "뜨거울 때 거름",

    // widget string (assets/js/widgets-lab-separation.js)
    "not filtered hot": "뜨거울 때 거르지 않음",

    // widget string (assets/js/widgets-lab-separation.js)
    "dried": "말림",

    // widget string (assets/js/widgets-lab-separation.js)
    "damp": "축축함",

    // widget string (assets/js/widgets-lab-separation.js)
    "Almost no crystals form. Too much water: the benzoic acid stays dissolved.": "결정이 거의 생기지 않아요. 물이 너무 많아서 벤조산이 녹은 채로 남아요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Small, fine crystals.": "작고 고운 결정.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Large, needle-shaped white crystals.": "크고 바늘 모양인 흰 결정.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Grey grains of sand are mixed with the crystals.": "회색 모래 알갱이가 결정과 섞여 있어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The crystals look wet and stick together.": "결정이 젖어 보이고 서로 달라붙어 있어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The crystals are slightly off-white.": "결정이 약간 누르스름해요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Not all of the benzoic acid dissolved in {v} cm³ of hot water. The undissolved solid was filtered off with the sand and lost.": "뜨거운 물 {v} cm³에 벤조산이 다 녹지 않았어요. 녹지 않은 고체는 모래와 함께 걸러져 버려졌어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Not all of the benzoic acid dissolved, and it was not filtered off, so it ended up in the product with the sand.": "벤조산이 다 녹지 않았고 뜨거울 때 거르지도 않아서, 녹지 않은 고체가 모래와 함께 생성물에 들어갔어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The hot solution was nearly saturated, so some crystals formed early in the filter funnel and were lost.": "뜨거운 용액이 거의 포화 상태여서 거름 깔때기에서 결정이 일찍 생겨 버려졌어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "About {m} g of benzoic acid stayed dissolved in the cold filtrate.": "벤조산 약 {m} g이 차가운 거른 액에 녹은 채로 남았어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The warm rinse dissolved some of the crystals.": "따뜻한 물로 헹궈서 결정이 일부 녹았어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The mass includes water, so the recovery is too high.": "질량에 물이 포함되어 있어서 회수율이 너무 높아요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "temperature / °C": "온도 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "solubility / g per 100 cm³": "용해도 / 100 cm³당 g",

    // widget string (assets/js/widgets-lab-separation.js)
    "solubility curve": "용해도 곡선",

    // widget string (assets/js/widgets-lab-separation.js)
    "crystallizes": "결정으로 나옴",

    // widget string (assets/js/widgets-lab-separation.js)
    "stays dissolved": "녹은 채로 남음",

    // widget string (assets/js/widgets-lab-separation.js)
    "{v} cm³: not all dissolves at 95 °C": "{v} cm³: 95 °C에서 다 녹지 않음",

    // widget string (assets/js/widgets-lab-separation.js)
    "{v} cm³ of hot solution": "뜨거운 용액 {v} cm³",

    // widget string (assets/js/widgets-lab-separation.js)
    "Impure sample (before recrystallization)": "불순한 시료 (재결정 전)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Pure benzoic acid (reference)": "순수한 벤조산 (기준)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Your product from run {n}": "{n}회차에서 얻은 생성물",

    // widget string (assets/js/widgets-lab-separation.js)
    "Sample in the capillary": "모세관 속 시료",

    // widget string (assets/js/widgets-lab-separation.js)
    "Heating": "가열",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fast: 10 °C per minute all the way": "빠르게: 처음부터 끝까지 분당 10 °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fast to 110 °C, then 2 °C per minute": "110 °C까지 빠르게, 그다음 분당 2 °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Start heating": "가열 시작",

    // widget string (assets/js/widgets-lab-separation.js)
    "Melting starts now": "지금 녹기 시작",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fully melted now": "지금 다 녹음",

    // widget string (assets/js/widgets-lab-separation.js)
    "New capillary": "새 모세관",

    // widget string (assets/js/widgets-lab-separation.js)
    "Melting point apparatus: a thermometer and a magnified capillary tube holding the sample, which turns from solid to liquid as it is heated": "녹는점 측정 장치: 온도계와, 시료가 든 모세관을 확대한 그림. 가열하면 시료가 고체에서 액체로 바뀌어요",

    // widget string (assets/js/widgets-lab-separation.js)
    "Raw data (thermometer reads to ±0.5 °C)": "원자료 (온도계는 ±0.5 °C까지 읽음)",

    // widget string (assets/js/widgets-lab-separation.js)
    "Sample": "시료",

    // widget string (assets/js/widgets-lab-separation.js)
    "Melting starts / °C": "녹기 시작 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Fully melted / °C": "다 녹음 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Range / °C": "범위 / °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "Thermometer": "온도계",

    // widget string (assets/js/widgets-lab-separation.js)
    "Time": "시간",

    // widget string (assets/js/widgets-lab-separation.js)
    "Pause": "일시 정지",

    // widget string (assets/js/widgets-lab-separation.js)
    "Recorded: melting starts at {T} °C.": "기록함: {T} °C에서 녹기 시작.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Now watch for the moment the last solid disappears.": "이제 마지막 고체가 사라지는 순간을 지켜보세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Record the start first.": "시작 온도를 먼저 기록하세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Press \"Melting starts now\" when you first see liquid in the tube.": "관 속에 액체가 처음 보이면 \"지금 녹기 시작\"을 누르세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "fast": "빠르게",

    // widget string (assets/js/widgets-lab-separation.js)
    "slow near the melting point": "녹는점 근처에서 천천히",

    // widget string (assets/js/widgets-lab-separation.js)
    "The end is below the start. Repeat with a new capillary.": "끝 온도가 시작 온도보다 낮아요. 새 모세관으로 다시 하세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "A sharp melting range close to the literature value of 122 °C: the sample is close to pure.": "문헌값 122 °C에 가까운 날카로운 녹는점 범위: 시료가 거의 순수해요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The sample melts below 122 °C and over a range of {r} °C. Impurities lower the melting point and widen the range.": "시료가 122 °C보다 낮은 온도에서 {r} °C 범위에 걸쳐 녹아요. 불순물은 녹는점을 낮추고 범위를 넓혀요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "You heated fast. The thermometer runs ahead of the sample, so the readings are too high and the range looks wider. Heat slowly near the melting point.": "빠르게 가열했어요. 온도계가 시료보다 앞서 올라가서 측정값이 너무 높고 범위가 더 넓어 보여요. 녹는점 근처에서는 천천히 가열하세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Grains of sand did not melt at all. Sand is an insoluble impurity: hot filtration removes it.": "모래 알갱이는 전혀 녹지 않았어요. 모래는 녹지 않는 불순물이에요: 뜨거울 때 거르면 없어져요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The sample was damp. Water is an impurity too: dry the product before you test it.": "시료가 축축했어요. 물도 불순물이에요: 시험하기 전에 생성물을 말리세요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Range {a}–{b} °C": "범위 {a}–{b} °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "{m} min {s} s": "{m}분 {s}초",

    // widget string (assets/js/widgets-lab-separation.js)
    "{r} °C per min": "분당 {r} °C",

    // widget string (assets/js/widgets-lab-separation.js)
    "White solid.": "흰색 고체.",

    // widget string (assets/js/widgets-lab-separation.js)
    "The solid shrinks and the first drops of liquid appear.": "고체가 줄어들고 첫 액체 방울이 나타나요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Partly melted: solid and liquid together.": "일부 녹음: 고체와 액체가 함께 있어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Almost all liquid, a few crystals left.": "거의 다 액체, 결정이 몇 개 남음.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Clear liquid, but some gritty grains have not melted.": "맑은 액체지만, 녹지 않은 까끌까끌한 알갱이가 있어요.",

    // widget string (assets/js/widgets-lab-separation.js)
    "Clear liquid.": "맑은 액체.",

    // widget string (assets/js/widgets-lab-separation.js)
    "capillary (magnified)": "모세관 (확대)",

    // widget string (assets/js/widgets-lab-separation.js)
    "solid": "고체",

    // widget string (assets/js/widgets-lab-separation.js)
    "liquid": "액체",

    // widget string (assets/js/widgets-lab-separation.js)
    "Model data. Literature value: 122 °C.": "모형 자료. 문헌값: 122 °C.",

  }
});
