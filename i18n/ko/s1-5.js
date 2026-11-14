/* s1-5 — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Ideal gases | Structure Lab": "1.5 이상 기체 | Structure Lab",

    // Ideal gases > page header > p
    "Structure 1.5": "Structure 1.5",

    // Ideal gases > page header > h1
    "Ideal gases": "이상 기체",

    // Ideal gases > page header > span
    "How does the model of ideal gas behaviour help us to predict the behaviour of real gases?": "이상 기체의 행동 모형은 실제 기체의 행동을 예측하는 데 어떻게 도움이 될까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes. Everything in this topic is SL core. There is no Additional HL content in 1.5.": "노트를 보지 않고 할 수 있게 되면 하나씩 체크하세요. 이 단원의 내용은 모두 SL 핵심 내용이에요. 1.5에는 AHL(HL 추가 내용)이 없어요.",

    // What you need to be able to do > checklist > span
    "Recognize the key assumptions of the ideal gas model.": "이상 기체 모형의 핵심 가정을 알아봐요.",

    // What you need to be able to do > checklist > span
    "Explain why real gases deviate from the model, especially at low temperature and high pressure.": "실제 기체가 모형에서 벗어나는 이유를, 특히 낮은 온도와 높은 압력에서 설명해요.",

    // What you need to be able to do > checklist > span
    "Use the molar volume of an ideal gas at STP to convert between amount and gas volume.": "STP에서 이상 기체의 몰 부피를 이용해 물질의 양과 기체 부피를 서로 바꿔요.",

    // What you need to be able to do > checklist > span
    "Describe and sketch how pressure, volume and temperature are related for a fixed mass of gas, and analyse graphs of these variables.": "일정한 질량의 기체에서 압력, 부피, 온도가 어떤 관계인지 서술하고 개형을 그리며, 이 변수들의 그래프를 분석해요.",

    // What you need to be able to do > checklist > span
    "Use the combined gas law when the conditions of a gas change.": "기체의 조건이 바뀔 때 보일-샤를 법칙(결합 기체 법칙)을 이용해요.",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>PV</i> = <i>nRT</i>, using consistent units.": "단위를 맞추어 <i>PV</i> = <i>nRT</i>로 문제를 풀어요.",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a gas from experimental data.": "실험 자료로부터 기체의 몰 질량을 계산해요.",

    // The ideal gas model > h2
    "The ideal gas model": "이상 기체 모형",

    // The ideal gas model > p
    "Pump up a bicycle tyre and you can feel the gas pushing back. That push is <dfn data-def=\"The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.\">pressure</dfn>. It comes from billions of tiny particles hitting the inside of the tyre.": "자전거 타이어에 바람을 넣으면 기체가 되밀어 내는 것을 느낄 수 있어요. 이 미는 힘이 <dfn data-def=\"어떤 면에 작용하는 단위 넓이당 힘이에요. 기체의 압력은 입자가 용기 벽에 충돌해서 생겨요.\">압력 <span class=\"en-term\">(pressure)</span></dfn>이에요. 압력은 수십억 개의 아주 작은 입자가 타이어 안쪽에 부딪쳐서 생겨요.",

    // The ideal gas model > data-def attribute
    "The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.": "어떤 면에 작용하는 단위 넓이당 힘이에요. 기체의 압력은 입자가 용기 벽에 충돌해서 생겨요.",

    // The ideal gas model > p
    "Real gas particles are complicated. So chemists use a simplified picture called an <dfn data-def=\"A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.\">ideal gas</dfn>. It is a model: it leaves out details to make the mathematics manageable.": "실제 기체 입자는 복잡해요. 그래서 화학자들은 <dfn data-def=\"움직이는 입자로 이루어진 모형 기체예요. 입자의 부피는 무시할 수 있고, 분자 간 힘이 없으며, 모든 충돌은 탄성 충돌이에요.\">이상 기체 <span class=\"en-term\">(ideal gas)</span></dfn>라는 단순화한 그림을 써요. 이것은 모형이에요. 수학을 다루기 쉽게 하려고 세부 사항을 뺀 거예요.",

    // The ideal gas model > data-def attribute
    "A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.": "움직이는 입자로 이루어진 모형 기체예요. 입자의 부피는 무시할 수 있고, 분자 간 힘이 없으며, 모든 충돌은 탄성 충돌이에요.",

    // The ideal gas model > p
    "The model makes four assumptions. Learn these four.": "이 모형에는 네 가지 가정이 있어요. 이 네 가지를 외워 두세요.",

    // The ideal gas model > li
    "The gas consists of <strong>moving particles</strong>.": "기체는 <strong>움직이는 입자</strong>로 이루어져 있어요.",

    // The ideal gas model > li
    "The particles have <strong>negligible volume</strong>. The particles themselves take up almost none of the space in the container.": "입자의 <strong>부피는 무시할 수 있어요</strong>. 입자 자체는 용기 안의 공간을 거의 차지하지 않아요.",

    // The ideal gas model > li
    "There are <strong>no intermolecular forces</strong>. The particles do not attract or repel each other.": "<strong>분자 간 힘이 없어요</strong>. 입자들은 서로 끌어당기지도 밀어내지도 않아요.",

    // The ideal gas model > li
    "All collisions between particles are <strong>elastic</strong>.": "입자 사이의 모든 충돌은 <strong>탄성 충돌</strong>이에요.",

    // The ideal gas model > p
    "An <dfn data-def=\"A collision in which the total kinetic energy of the particles is the same before and after.\">elastic collision</dfn> is one where no kinetic energy is lost overall. The particles bounce apart with the same total kinetic energy they had before.": "<dfn data-def=\"충돌 전과 후에 입자들의 전체 운동 에너지가 같은 충돌이에요.\">탄성 충돌 <span class=\"en-term\">(elastic collision)</span></dfn>은 전체적으로 운동 에너지를 잃지 않는 충돌이에요. 입자들은 충돌 전과 같은 전체 운동 에너지를 가진 채 튕겨 나가요.",

    // The ideal gas model > data-def attribute
    "A collision in which the total kinetic energy of the particles is the same before and after.": "충돌 전과 후에 입자들의 전체 운동 에너지가 같은 충돌이에요.",

    // The ideal gas model > p
    "<dfn data-def=\"Small enough to be ignored without changing the answer in any way that matters.\">Negligible</dfn> means small enough to ignore. A gas at room conditions is almost entirely empty space, so ignoring the size of the particles is usually a very good approximation.": "<dfn data-def=\"무시해도 답이 의미 있게 달라지지 않을 만큼 작은 것이에요.\">무시할 수 있다 <span class=\"en-term\">(negligible)</span></dfn>는 무시해도 될 만큼 작다는 뜻이에요. 실온의 기체는 거의 대부분이 빈 공간이에요. 그래서 입자의 크기를 무시해도 대개 아주 좋은 근삿값이 돼요.",

    // The ideal gas model > data-def attribute
    "Small enough to be ignored without changing the answer in any way that matters.": "무시해도 답이 의미 있게 달라지지 않을 만큼 작은 것이에요.",

    // The ideal gas model > key idea > p
    "An ideal gas does not exist. It is a model that real gases follow closely under everyday conditions. That is why one equation works for hydrogen, oxygen and carbon dioxide alike.": "이상 기체는 실제로 존재하지 않아요. 일상적인 조건에서 실제 기체가 꽤 잘 따르는 모형이에요. 그래서 수소, 산소, 이산화 탄소에 똑같이 하나의 식을 쓸 수 있어요.",

    // The ideal gas model > exam tip (shown in English + translation) > p
    "If you are asked to state assumptions, use the exact phrases: <em>negligible volume</em> (of the particles), <em>no intermolecular forces</em>, <em>elastic collisions</em>. Writing “the gas has no volume” loses the mark. The gas fills its container. It is the particles whose volume is negligible.": "가정을 쓰라는(state) 문제에서는 정확한 표현을 쓰세요: <em>negligible volume</em>(입자의 부피는 무시할 수 있음), <em>no intermolecular forces</em>(분자 간 힘이 없음), <em>elastic collisions</em>(탄성 충돌). “기체는 부피가 없다”라고 쓰면 점수를 잃어요. 기체는 용기를 가득 채워요. 부피를 무시할 수 있는 것은 입자예요.",

    // The ideal gas model > not needed for IB > p
    "Textbooks often list more assumptions and go on to derive gas pressure from particle speeds. The four statements above are what the IB guide lists. You do not need the kinetic energy equation (<span class=\"mono\">E = 3/2 RT</span>), root-mean-square speeds or any derivation.": "교과서에는 가정이 더 많이 나오기도 하고, 입자의 속력으로부터 기체 압력을 유도하기도 해요. 위의 네 가지가 IB 지침에 나오는 가정이에요. 운동 에너지 식(<span class=\"mono\">E = 3/2 RT</span>), 제곱 평균 제곱근 속력, 유도 과정은 몰라도 돼요.",

    // The ideal gas model > data-title attribute
    "Ideal gas model: quick check": "이상 기체 모형: 빠른 확인",

    // Real gases and the limits of the model > data-toc attribute
    "Real gases": "실제 기체",

    // Real gases and the limits of the model > h2
    "Real gases and the limits of the model": "실제 기체와 모형의 한계",

    // Real gases and the limits of the model > p
    "Cool steam and it turns into liquid water. An ideal gas could never do that, because its particles do not attract each other. So real gases cannot be exactly ideal.": "수증기를 식히면 액체인 물이 돼요. 이상 기체는 절대 그렇게 될 수 없어요. 입자들이 서로 끌어당기지 않기 때문이에요. 그래서 실제 기체는 완전히 이상적일 수 없어요.",

    // Real gases and the limits of the model > p
    "A <dfn data-def=\"An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.\">real gas</dfn> breaks two of the assumptions. Its particles do have some volume, and they do attract each other. Under most conditions both effects are tiny. Under two conditions they are not.": "<dfn data-def=\"실제로 존재하는 기체예요. 입자 자체에 부피가 있고 입자끼리 서로 끌어당기기 때문에 이상 기체 모형을 정확히 따르지 않아요.\">실제 기체 <span class=\"en-term\">(real gas)</span></dfn>는 가정 중 두 가지에 맞지 않아요. 입자에는 어느 정도 부피가 있고, 입자끼리 서로 끌어당겨요. 대부분의 조건에서는 두 효과 모두 아주 작아요. 하지만 두 가지 조건에서는 그렇지 않아요.",

    // Real gases and the limits of the model > data-def attribute
    "An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.": "실제로 존재하는 기체예요. 입자 자체에 부피가 있고 입자끼리 서로 끌어당기기 때문에 이상 기체 모형을 정확히 따르지 않아요.",

    // Real gases and the limits of the model > h3
    "High pressure: particle volume matters": "높은 압력: 입자의 부피가 중요해져요",

    // Real gases and the limits of the model > p
    "At high pressure the gas is squeezed into a small space. The particles are close together. Their own volume is now a noticeable share of the container, so it is no longer negligible. Because the particles are close, the forces between them are also more significant.": "높은 압력에서는 기체가 좁은 공간으로 압축돼요. 입자들이 서로 가까이 있어요. 이제 입자 자체의 부피가 용기에서 무시할 수 없는 비율을 차지해서, 더 이상 무시할 수 없어요. 입자들이 가까이 있기 때문에 입자 사이의 힘도 더 커져요.",

    // Real gases and the limits of the model > h3
    "Low temperature: intermolecular forces matter": "낮은 온도: 분자 간 힘이 중요해져요",

    // Real gases and the limits of the model > p
    "At low temperature the particles have less kinetic energy and move more slowly. Slow particles are affected more by the attractions between them, so the intermolecular forces are no longer negligible. Cool a real gas far enough and those forces pull the particles together into a liquid.": "낮은 온도에서는 입자의 운동 에너지가 작아서 더 느리게 움직여요. 느린 입자는 입자 사이의 인력에 더 크게 영향을 받아요. 그래서 분자 간 힘을 더 이상 무시할 수 없어요. 실제 기체를 충분히 식히면 이 힘이 입자들을 끌어모아 액체가 돼요.",

    // Real gases and the limits of the model > key idea > p
    "Real gases deviate most from ideal behaviour at <strong>low temperature and high pressure</strong>. They behave most like an ideal gas at <strong>high temperature and low pressure</strong>.": "실제 기체는 <strong>낮은 온도와 높은 압력</strong>에서 이상적인 행동에서 가장 많이 벗어나요. <strong>높은 온도와 낮은 압력</strong>에서 이상 기체와 가장 비슷하게 행동해요.",

    // Real gases and the limits of the model > widget > data-title attribute
    "Real versus ideal: when does the model break down?": "실제 기체와 이상 기체: 모형은 언제 맞지 않을까?",

    // Real gases and the limits of the model > widget > data-kicker attribute
    "Qualitative model": "정성적 모형",

    // Real gases and the limits of the model > widget > figcaption
    "Move the temperature and pressure sliders and watch the three bars. Dashed lines mark attractions between slow, close particles. This is an illustration to build your intuition. Nothing here is calculated from an equation, and the particles are drawn far too large.": "온도와 압력 슬라이더를 움직이면서 막대 세 개를 지켜보세요. 점선은 느리고 가까이 있는 입자 사이의 인력을 나타내요. 직관을 기르기 위한 그림이에요. 여기 있는 것은 식으로 계산한 것이 아니고, 입자는 실제보다 훨씬 크게 그렸어요.",

    // Real gases and the limits of the model > h3
    "Which gases are closest to ideal?": "어떤 기체가 이상 기체에 가장 가까울까?",

    // Real gases and the limits of the model > p
    "Gases with <strong>weak intermolecular forces</strong> and <strong>small particles</strong> match the model best. Helium and hydrogen are very close to ideal under ordinary conditions. Gases with stronger attractions between their molecules, such as ammonia, deviate more under the same conditions.": "<strong>분자 간 힘이 약하고</strong> <strong>입자가 작은</strong> 기체가 모형과 가장 잘 맞아요. 헬륨과 수소는 보통 조건에서 이상 기체에 아주 가까워요. 암모니아처럼 분자 사이의 인력이 더 강한 기체는 같은 조건에서 더 많이 벗어나요.",

    // Real gases and the limits of the model > p
    "You will study the types of intermolecular force in Structure 2.2. For now, one clue is enough: a gas with a higher boiling point has stronger forces between its particles.": "분자 간 힘의 종류는 Structure 2.2에서 배워요. 지금은 단서 하나면 충분해요: 끓는점이 높은 기체일수록 입자 사이의 힘이 더 강해요.",

    // Real gases and the limits of the model > exam tip (shown in English + translation) > p
    "For “explain why a real gas deviates” questions, give a condition and a reason for each mark. <em>High pressure: particles are close together, so the volume of the particles is not negligible.</em> <em>Low temperature: particles move more slowly, so intermolecular forces become significant.</em>": "“실제 기체가 벗어나는 이유를 설명하시오” 문제에서는 1점마다 조건 하나와 이유 하나를 쓰세요. <em>높은 압력: 입자들이 서로 가까이 있으므로 입자의 부피를 무시할 수 없다.</em> <em>낮은 온도: 입자가 더 느리게 움직이므로 분자 간 힘이 커진다.</em>",

    // Real gases and the limits of the model > common mistake > p
    "Do not swap the conditions. “High temperature and low pressure” describes where a gas is <em>most</em> ideal. A quick check: think of where a gas turns into a liquid (cold and squeezed). That is where it is least ideal.": "조건을 서로 바꾸지 마세요. “높은 온도와 낮은 압력”은 기체가 <em>가장</em> 이상적인 조건이에요. 빠르게 확인하는 방법: 기체가 액체로 바뀌는 곳(차갑고 압축된 곳)을 떠올려 보세요. 그곳이 가장 덜 이상적인 곳이에요.",

    // Real gases and the limits of the model > not needed for IB > p
    "No mathematics is required for real gases. You do not need the van der Waals equation, the compressibility factor <i>Z</i>, or any calculation of how far a gas deviates. A reasoned explanation in words is all the IB asks for.": "실제 기체에는 수학이 필요하지 않아요. 반데르발스 식, 압축 인자 <i>Z</i>, 기체가 얼마나 벗어나는지에 대한 계산은 몰라도 돼요. IB가 요구하는 것은 말로 하는 논리적인 설명뿐이에요.",

    // Real gases and the limits of the model > data-title attribute
    "Real gases: quick check": "실제 기체: 빠른 확인",

    // Molar volume of an ideal gas > data-toc attribute
    "Molar volume at STP": "STP에서의 몰 부피",

    // Molar volume of an ideal gas > h2
    "Molar volume of an ideal gas": "이상 기체의 몰 부피",

    // Molar volume of an ideal gas > p
    "Picture a box a little under 30 cm along each side, about the space taken up by four footballs. At 0 °C and 100 kPa, that box holds one mole of gas. It does not matter which gas.": "한 변이 30 cm보다 조금 짧은 상자를 떠올려 보세요. 축구공 네 개가 차지하는 공간쯤이에요. 0 °C, 100 kPa에서 이 상자에는 기체 1몰이 들어가요. 어떤 기체인지는 상관없어요.",

    // Molar volume of an ideal gas > p
    "This follows from Avogadro’s law, which you met in Structure 1.4: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Turn it around: equal numbers of molecules occupy equal volumes.": "이것은 Structure 1.4에서 배운 아보가드로 법칙에서 나와요: 같은 온도와 압력에서 같은 부피의 기체에는 같은 수의 분자가 들어 있어요. 거꾸로 말하면, 같은 수의 분자는 같은 부피를 차지해요.",

    // Molar volume of an ideal gas > p
    "The <dfn data-def=\"The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.\">molar volume</dfn>, <i>V</i><sub>m</sub>, is the volume of one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "<dfn data-def=\"이상 기체 1몰이 차지하는 부피예요. 특정한 온도와 압력에서 일정한 값이에요.\">몰 부피 <span class=\"en-term\">(molar volume)</span></dfn> <i>V</i><sub>m</sub>은 이상 기체 1몰의 부피예요. 특정한 온도와 압력에서 일정한 값이에요.",

    // Molar volume of an ideal gas > data-def attribute
    "The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "이상 기체 1몰이 차지하는 부피예요. 특정한 온도와 압력에서 일정한 값이에요.",

    // Molar volume of an ideal gas > p
    "<dfn data-def=\"Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.\">STP</dfn> stands for standard temperature and pressure: <span class=\"mono\">273.15 K</span> (0 °C) and <span class=\"mono\">100 kPa</span>. At STP the molar volume of an ideal gas is <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<dfn data-def=\"표준 온도와 압력: 273.15 K (0 °C), 100 kPa예요.\">표준 온도와 압력 <span class=\"en-term\">(STP)</span></dfn>은 standard temperature and pressure의 약자로, <span class=\"mono\">273.15 K</span>(0 °C), <span class=\"mono\">100 kPa</span>이에요. STP에서 이상 기체의 몰 부피는 <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>이에요.",

    // Molar volume of an ideal gas > data-def attribute
    "Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.": "표준 온도와 압력: 273.15 K (0 °C), 100 kPa예요.",

    // Molar volume of an ideal gas > equation > dd
    // The ideal gas equation > equation > dd
    "amount of gas <span class=\"unit\">mol</span>": "기체의 양 <span class=\"unit\">mol</span>",

    // Molar volume of an ideal gas > equation > dd
    "volume of the gas <span class=\"unit\">dm3</span>": "기체의 부피 <span class=\"unit\">dm3</span>",

    // Molar volume of an ideal gas > equation > dt
    "V<sub>m</sub>": "V<sub>m</sub>",

    // Molar volume of an ideal gas > equation > dd
    "molar volume, 22.7 at STP <span class=\"unit\">dm3 mol-1</span>": "몰 부피, STP에서 22.7 <span class=\"unit\">dm3 mol-1</span>",

    // Molar volume of an ideal gas > data booklet note > p
    "The data booklet gives the molar volume of an ideal gas at STP as <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> (also written <span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span>), with STP defined as 273.15 K and 100 kPa. The relationship <i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> is not printed, so learn it.": "데이터 부클릿에는 STP에서 이상 기체의 몰 부피가 <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>(<span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span>로도 씀)로 나와 있고, STP는 273.15 K, 100 kPa로 정의되어 있어요. <i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> 관계식은 나와 있지 않으니 외워 두세요.",

    // Molar volume of an ideal gas > widget > data-title attribute
    "How big is a mole of gas at STP?": "STP에서 기체 1몰은 얼마나 클까?",

    // Molar volume of an ideal gas > widget > data-kicker attribute
    "To scale": "실제 비율",

    // Molar volume of an ideal gas > widget > figcaption
    "Move either slider. The shaded cube shows the gas at STP, drawn to the same scale as a football and a 1 dm<sup>3</sup> cube. The amount and the volume always stay in the ratio 22.7 dm<sup>3</sup> for each mole.": "슬라이더 중 하나를 움직여 보세요. 색칠한 정육면체는 STP의 기체를 나타내고, 축구공과 1 dm<sup>3</sup> 정육면체와 같은 비율로 그렸어요. 물질의 양과 부피는 항상 1몰당 22.7 dm<sup>3</sup>의 비를 유지해요.",

    // Molar volume of an ideal gas > common mistake > p
    "Older books and many websites use <span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span>. That value is for 0 °C and a pressure of 101.325 kPa (1 atmosphere), which was the older standard pressure. The IB data booklet defines STP as 0 °C and 100 kPa. The pressure is slightly lower, so the gas takes up slightly more space: <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>. Using 22.4 in an IB exam gives a wrong answer.": "옛날 책과 많은 웹사이트에서는 <span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span>을 써요. 이 값은 0 °C, 101.325 kPa(1기압)일 때의 값이고, 101.325 kPa는 예전의 표준 압력이었어요. IB 데이터 부클릿은 STP를 0 °C, 100 kPa로 정의해요. 압력이 조금 더 낮으니 기체가 조금 더 많은 공간을 차지해요: <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>. IB 시험에서 22.4를 쓰면 틀린 답이 나와요.",

    // Molar volume of an ideal gas > h3
    // The combined gas law > h3
    // The ideal gas equation > h3
    // Molar mass of a gas from experimental data > h3
    "Method in words": "방법 정리",

    // Molar volume of an ideal gas > li
    "Check the conditions are STP. If they are not, use <i>PV</i> = <i>nRT</i> instead (later on this page).": "조건이 STP인지 확인해요. STP가 아니면 대신 <i>PV</i> = <i>nRT</i>를 써요(이 페이지 뒷부분).",

    // Molar volume of an ideal gas > li
    "Put the volume in dm<sup>3</sup>. To convert from cm<sup>3</sup>, divide by 1000.": "부피를 dm<sup>3</sup>로 나타내요. cm<sup>3</sup>에서 바꾸려면 1000으로 나눠요.",

    // Molar volume of an ideal gas > li
    "To find amount: <i>n</i> = <i>V</i> ÷ 22.7. To find volume: <i>V</i> = <i>n</i> × 22.7.": "물질의 양 구하기: <i>n</i> = <i>V</i> ÷ 22.7. 부피 구하기: <i>V</i> = <i>n</i> × 22.7.",

    // Molar volume of an ideal gas > worked example > h3
    "Amount from a gas volume at STP": "STP에서 기체 부피로 물질의 양 구하기",

    // Molar volume of an ideal gas > worked example > p
    "A sample of nitrogen gas occupies 568 cm<sup>3</sup> at STP. Calculate the amount of nitrogen, in mol.": "질소 기체 시료가 STP에서 568 cm<sup>3</sup>를 차지해요. 질소의 양을 mol 단위로 계산하시오 (calculate).",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Convert the volume to dm³": "부피를 dm³로 바꾸기",

    // Molar volume of an ideal gas > worked example > p
    "The molar volume is in dm<sup>3</sup> mol<sup>−1</sup>, so the volume must be in dm<sup>3</sup> too. There are 1000 cm<sup>3</sup> in 1 dm<sup>3</sup>.": "몰 부피의 단위가 dm<sup>3</sup> mol<sup>−1</sup>이므로 부피도 dm<sup>3</sup>여야 해요. 1 dm<sup>3</sup>는 1000 cm<sup>3</sup>예요.",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Write the relationship": "관계식 쓰기",

    // Molar volume of an ideal gas > worked example > p
    "The gas is at STP, so one mole occupies 22.7 dm<sup>3</sup>.": "기체가 STP에 있으므로 1몰은 22.7 dm<sup>3</sup>를 차지해요.",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // widget string (assets/js/widgets-s1-5.js)
    "Substitute with units": "단위와 함께 대입하기",

    // Molar volume of an ideal gas > worked example > p
    "dm<sup>3</sup> divided by dm<sup>3</sup> mol<sup>−1</sup> leaves mol. The units confirm the method.": "dm<sup>3</sup>를 dm<sup>3</sup> mol<sup>−1</sup>로 나누면 mol이 남아요. 단위를 보면 방법이 맞는지 확인할 수 있어요.",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Round to the data": "자료에 맞춰 반올림하기",

    // Molar volume of an ideal gas > worked example > p
    "568 cm<sup>3</sup> and 22.7 both have 3 significant figures.": "568 cm<sup>3</sup>와 22.7은 모두 유효 숫자가 3자리예요.",

    // Molar volume of an ideal gas > worked example > p
    "0.0250 mol of N<sub>2</sub>": "N<sub>2</sub> 0.0250 mol",

    // Molar volume of an ideal gas > try it > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.0420 mol of carbon dioxide at STP.": "STP에서 이산화 탄소 0.0420 mol이 차지하는 부피를 dm<sup>3</sup> 단위로 계산하시오 (calculate).",

    // Molar volume of an ideal gas > try it > li
    "At STP, every mole of an ideal gas occupies the same volume. Which data booklet value is that?": "STP에서는 이상 기체 1몰이 모두 같은 부피를 차지해요. 데이터 부클릿의 어떤 값일까요?",

    // Molar volume of an ideal gas > try it > li
    "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.953 dm<sup>3</sup></strong>.": "유효 숫자 3자리로: <strong>0.953 dm<sup>3</sup></strong>.",

    // Molar volume of an ideal gas > try it > p
    "A balloon contains 1250 cm<sup>3</sup> of helium at STP. Calculate the amount of helium, in mol.": "풍선에 STP에서 헬륨 1250 cm<sup>3</sup>가 들어 있어요. 헬륨의 양을 mol 단위로 계산하시오 (calculate).",

    // Molar volume of an ideal gas > try it > li
    "Convert the volume first: 1250 cm<sup>3</sup> is how many dm<sup>3</sup>?": "먼저 부피를 바꿔요: 1250 cm<sup>3</sup>는 몇 dm<sup>3</sup>일까요?",

    // Molar volume of an ideal gas > try it > li
    "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.0551 mol</strong>.": "유효 숫자 3자리로: <strong>0.0551 mol</strong>.",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> works only at STP. If a question gives any other temperature or pressure, such as 25 °C, the molar volume is different and you need <i>PV</i> = <i>nRT</i>.": "22.7 dm<sup>3</sup> mol<sup>−1</sup>은 STP에서만 쓸 수 있어요. 문제에서 25 °C처럼 다른 온도나 압력이 주어지면 몰 부피가 달라지므로 <i>PV</i> = <i>nRT</i>를 써야 해요.",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "The data booklet also lists SATP (standard ambient temperature and pressure): 298.15 K (25 °C) and 100 kPa. It gives no molar volume for SATP, so 22.7 does not apply there. Use <i>PV</i> = <i>nRT</i>.": "데이터 부클릿에는 SATP(표준 상온 상압)도 나와요: 298.15 K (25 °C), 100 kPa. SATP의 몰 부피는 나와 있지 않으므로 SATP에서는 22.7을 쓸 수 없어요. <i>PV</i> = <i>nRT</i>를 쓰세요.",

    // Molar volume of an ideal gas > data-title attribute
    "Molar volume: quick check": "몰 부피: 빠른 확인",

    // How pressure, volume and temperature are related > data-toc attribute
    "P, V and T graphs": "P, V, T 그래프",

    // How pressure, volume and temperature are related > h2
    "How pressure, volume and temperature are related": "압력, 부피, 온도의 관계",

    // How pressure, volume and temperature are related > p
    "Push the plunger of a sealed syringe and it pushes back harder. Leave a football outside on a cold night and it goes soft. These are the relationships in this section.": "막힌 주사기의 피스톤을 누르면 더 세게 되밀어요. 추운 밤에 축구공을 밖에 두면 말랑해져요. 이 절에서 다루는 관계가 바로 이런 것들이에요.",

    // How pressure, volume and temperature are related > p
    "A gas sample is described by four variables: pressure <i>P</i>, volume <i>V</i>, temperature <i>T</i> and amount <i>n</i>. To see how two of them are related, you hold the others constant. A <dfn data-def=\"A sample in which the amount of gas, n, does not change. No gas enters or leaves.\">fixed mass</dfn> of gas means <i>n</i> is constant.": "기체 시료는 4가지 변수로 나타내요: 압력 <i>P</i>, 부피 <i>V</i>, 온도 <i>T</i>, 물질의 양 <i>n</i>. 두 변수의 관계를 보려면 나머지는 일정하게 유지해요. <dfn data-def=\"기체의 양 n이 변하지 않는 시료예요. 기체가 들어오거나 나가지 않아요.\">일정한 질량 <span class=\"en-term\">(fixed mass)</span></dfn>의 기체란 <i>n</i>이 일정하다는 뜻이에요.",

    // How pressure, volume and temperature are related > data-def attribute
    "A sample in which the amount of gas, n, does not change. No gas enters or leaves.": "기체의 양 n이 변하지 않는 시료예요. 기체가 들어오거나 나가지 않아요.",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Ideal gas sandbox": "이상 기체 실험실",

    // How pressure, volume and temperature are related > widget > data-kicker attribute
    "Model": "모형",

    // How pressure, volume and temperature are related > widget > figcaption
    "Choose an experiment, then drag the highlighted variable or press “Run the experiment”. The pressure is calculated from <i>PV</i> = <i>nRT</i>. In the picture, the particle speed scales with √<i>T</i>, the number of particles with <i>n</i>, and the length of the cylinder with <i>V</i>. The particles are drawn much larger than to scale, and there are far fewer of them than in a real sample.": "실험을 고른 다음, 강조된 변수를 끌거나 “실험 실행”을 누르세요. 압력은 <i>PV</i> = <i>nRT</i>로 계산해요. 그림에서 입자의 속력은 √<i>T</i>에, 입자의 수는 <i>n</i>에, 실린더의 길이는 <i>V</i>에 따라 바뀌어요. 입자는 실제 비율보다 훨씬 크게 그렸고, 개수도 실제 시료보다 훨씬 적어요.",

    // How pressure, volume and temperature are related > h3
    "Pressure and volume (temperature constant)": "압력과 부피 (온도 일정)",

    // How pressure, volume and temperature are related > p
    "Squeeze a gas into half the volume and the particles hit the walls twice as often. The pressure doubles.": "기체를 절반 부피로 압축하면 입자가 벽에 부딪치는 횟수가 2배가 돼요. 압력이 2배가 돼요.",

    // How pressure, volume and temperature are related > p
    "Pressure is <dfn data-def=\"Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.\">inversely proportional</dfn> to volume: <span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>, so <span class=\"mono\"><i>PV</i> = constant</span>. A graph of <i>P</i> against <i>V</i> is a curve. A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin.": "압력은 부피에 <dfn data-def=\"한 양이 2배가 될 때 다른 양이 절반이 되면 두 양은 반비례해요. 두 양의 곱은 일정해요.\">반비례 <span class=\"en-term\">(inversely proportional)</span></dfn>해요: <span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>, 따라서 <span class=\"mono\"><i>PV</i> = 일정</span>. <i>P</i>를 <i>V</i>에 대해 그린 그래프는 곡선이에요. <i>P</i>를 1/<i>V</i>에 대해 그린 그래프는 원점을 지나는 직선이에요.",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.": "한 양이 2배가 될 때 다른 양이 절반이 되면 두 양은 반비례해요. 두 양의 곱은 일정해요.",

    // How pressure, volume and temperature are related > h3
    "Volume and temperature (pressure constant)": "부피와 온도 (압력 일정)",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a container with a freely moving piston. The particles move faster and push the piston out until the pressure inside matches the pressure outside again. The volume increases.": "자유롭게 움직이는 피스톤이 달린 용기에서 기체를 가열해요. 입자가 더 빨리 움직이고, 안쪽 압력이 바깥 압력과 다시 같아질 때까지 피스톤을 밀어내요. 부피가 늘어나요.",

    // How pressure, volume and temperature are related > p
    "Volume is <dfn data-def=\"Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.\">directly proportional</dfn> to the temperature in kelvin: <span class=\"mono\"><i>V</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>V</i>/<i>T</i> = constant</span>. A graph of <i>V</i> against <i>T</i> in kelvin is a straight line through the origin.": "부피는 켈빈 온도에 <dfn data-def=\"한 양을 2배로 하면 다른 양도 2배가 되면 두 양은 비례해요. 그래프는 원점을 지나는 직선이에요.\">비례 <span class=\"en-term\">(directly proportional)</span></dfn>해요: <span class=\"mono\"><i>V</i> ∝ <i>T</i></span>, 따라서 <span class=\"mono\"><i>V</i>/<i>T</i> = 일정</span>. <i>V</i>를 켈빈 온도 <i>T</i>에 대해 그린 그래프는 원점을 지나는 직선이에요.",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.": "한 양을 2배로 하면 다른 양도 2배가 되면 두 양은 비례해요. 그래프는 원점을 지나는 직선이에요.",

    // How pressure, volume and temperature are related > p
    "Plot the same data against temperature in °C and you still get a straight line, but it does not pass through the origin. Extend the line backwards (extrapolate) and it reaches zero volume at <span class=\"mono\">−273.15 °C</span>. That temperature is <dfn data-def=\"0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.\">absolute zero</dfn>, 0 K.": "같은 자료를 °C 온도에 대해 그려도 직선이 나오지만, 원점을 지나지 않아요. 직선을 뒤로 늘이면(외삽하면) <span class=\"mono\">−273.15 °C</span>에서 부피가 0이 돼요. 이 온도가 <dfn data-def=\"0 K 또는 −273.15 °C: 가장 낮은 온도로, 이 온도에서 이상 기체의 부피는 0이 돼요.\">절대 영도 <span class=\"en-term\">(absolute zero)</span></dfn>, 곧 0 K예요.",

    // How pressure, volume and temperature are related > data-def attribute
    "0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.": "0 K 또는 −273.15 °C: 가장 낮은 온도로, 이 온도에서 이상 기체의 부피는 0이 돼요.",

    // How pressure, volume and temperature are related > h3
    "Pressure and temperature (volume constant)": "압력과 온도 (부피 일정)",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a rigid container. The particles move faster, so they hit the walls harder and more often. The pressure increases.": "단단한 용기에서 기체를 가열해요. 입자가 더 빨리 움직이므로 벽에 더 세게, 더 자주 부딪쳐요. 압력이 커져요.",

    // How pressure, volume and temperature are related > p
    "Pressure is directly proportional to the temperature in kelvin: <span class=\"mono\"><i>P</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>P</i>/<i>T</i> = constant</span>. A graph of <i>P</i> against <i>T</i> in kelvin is a straight line through the origin.": "압력은 켈빈 온도에 비례해요: <span class=\"mono\"><i>P</i> ∝ <i>T</i></span>, 따라서 <span class=\"mono\"><i>P</i>/<i>T</i> = 일정</span>. <i>P</i>를 켈빈 온도 <i>T</i>에 대해 그린 그래프는 원점을 지나는 직선이에요.",

    // How pressure, volume and temperature are related > table > caption
    "Three relationships for a fixed mass of an ideal gas": "일정한 질량의 이상 기체에 대한 3가지 관계",

    // How pressure, volume and temperature are related > table > th
    "Held constant": "일정하게 유지하는 것",

    // How pressure, volume and temperature are related > table > th
    "Relationship": "관계",

    // How pressure, volume and temperature are related > table > th
    "What stays the same": "변하지 않는 것",

    // How pressure, volume and temperature are related > table > th
    "Graph": "그래프",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ 1/<i>V</i> (inverse)": "<i>P</i> ∝ 1/<i>V</i> (반비례)",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>V</i>: curve. <i>P</i> against 1/<i>V</i>: line through origin.": "<i>P</i>–<i>V</i> 그래프: 곡선. <i>P</i>–1/<i>V</i> 그래프: 원점을 지나는 직선.",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "<i>V</i> ∝ <i>T</i> (비례, <i>T</i>는 K)",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> against <i>T</i>/K: line through origin.": "<i>V</i>–<i>T</i>/K 그래프: 원점을 지나는 직선.",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "<i>P</i> ∝ <i>T</i> (비례, <i>T</i>는 K)",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>T</i>/K: line through origin.": "<i>P</i>–<i>T</i>/K 그래프: 원점을 지나는 직선.",

    // How pressure, volume and temperature are related > common mistake > p
    "The direct proportions work only in kelvin. Heating a gas from 20 °C to 40 °C does not double its volume or pressure. In kelvin that is 293 K to 313 K, an increase of about 7 %.": "비례 관계는 켈빈 온도에서만 성립해요. 기체를 20 °C에서 40 °C로 가열해도 부피나 압력이 2배가 되지 않아요. 켈빈으로 바꾸면 293 K에서 313 K로, 약 7 % 늘어날 뿐이에요.",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Gas-law graphs: the shapes to know": "기체 법칙 그래프: 알아야 할 모양",

    // How pressure, volume and temperature are related > widget > figcaption
    "Study the six sketches, then press “Test yourself” and match each relationship to its shape. Notice that <i>PV</i> against <i>P</i> is flat: at constant temperature the product <i>PV</i> does not change.": "6개의 그래프 개형을 살펴본 다음 “스스로 확인하기”를 누르고 각 관계를 알맞은 모양과 짝지어 보세요. <i>PV</i>를 <i>P</i>에 대해 그린 그래프는 수평이라는 점에 주목하세요: 온도가 일정하면 곱 <i>PV</i>는 변하지 않아요.",

    // How pressure, volume and temperature are related > exam tip (shown in English + translation) > p
    "When you sketch a graph, label both axes with the quantity and its unit, and make it clear whether a straight line passes through the origin. For <i>V</i> against <i>T</i> in °C, show the line meeting the temperature axis at −273 °C, usually as a dashed extrapolation.": "그래프의 개형을 그릴 때는 두 축 모두에 양과 단위를 쓰고, 직선이 원점을 지나는지 분명히 나타내세요. <i>V</i>를 °C 온도 <i>T</i>에 대해 그린 그래프에서는 직선이 −273 °C에서 온도 축과 만나도록 그리고, 보통 이 부분은 점선으로 외삽해요.",

    // How pressure, volume and temperature are related > not needed for IB > p
    "These relationships have historical names (Boyle’s law, Charles’s law, Gay-Lussac’s law). The IB will not assess the names. You need the relationships and their graphs, not who discovered them.": "이 관계들에는 역사적인 이름이 있어요(보일 법칙, 샤를 법칙, 게이뤼삭 법칙). IB는 이름을 평가하지 않아요. 누가 발견했는지가 아니라 관계와 그래프를 알면 돼요.",

    // How pressure, volume and temperature are related > data-title attribute
    "Relationships and graphs: quick check": "관계와 그래프: 빠른 확인",

    // The combined gas law > h2
    "The combined gas law": "보일-샤를 법칙",

    // The combined gas law > p
    "A weather balloon rises. The air outside gets colder and the pressure drops, both at once. To find the new volume you need one equation that handles pressure, volume and temperature together.": "기상 관측 기구가 올라가요. 바깥 공기는 차가워지고 압력도 낮아져요. 두 가지가 동시에 일어나요. 새 부피를 구하려면 압력, 부피, 온도를 한꺼번에 다루는 식이 하나 필요해요.",

    // The combined gas law > p
    "Putting the three relationships together gives the <dfn data-def=\"P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.\">combined gas law</dfn>. It links two sets of conditions for the same sample of gas: state 1 (before) and state 2 (after).": "세 가지 관계를 합치면 <dfn data-def=\"조건이 상태 1에서 상태 2로 바뀌는 일정한 양의 기체에 대해 P1V1/T1 = P2V2/T2예요.\">보일-샤를 법칙 <span class=\"en-term\">(combined gas law)</span></dfn>이 돼요. 이 법칙은 같은 기체 시료의 두 가지 조건, 곧 상태 1(변화 전)과 상태 2(변화 후)를 연결해요.",

    // The combined gas law > data-def attribute
    "P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.": "조건이 상태 1에서 상태 2로 바뀌는 일정한 양의 기체에 대해 P1V1/T1 = P2V2/T2예요.",

    // The combined gas law > equation > dd
    "pressure, same unit on both sides <span class=\"unit\">kPa</span>": "압력, 양쪽에 같은 단위 <span class=\"unit\">kPa</span>",

    // The combined gas law > equation > dd
    "volume, same unit on both sides <span class=\"unit\">dm3</span>": "부피, 양쪽에 같은 단위 <span class=\"unit\">dm3</span>",

    // The combined gas law > equation > dd
    "temperature, always in kelvin <span class=\"unit\">K</span>": "온도, 항상 켈빈 <span class=\"unit\">K</span>",

    // The combined gas law > equation > dd
    "before and after the change, for a fixed amount of gas": "일정한 양의 기체에서 변화 전과 후",

    // The combined gas law > data booklet note > p
    "The combined gas law is printed in the data booklet. You do not need to memorise it, but you do need to rearrange it.": "보일-샤를 법칙은 데이터 부클릿에 나와 있어요. 외울 필요는 없지만, 식을 변형할 줄은 알아야 해요.",

    // The combined gas law > li
    "List <i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub> and <i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>. Mark the unknown with a question mark.": "<i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub>과 <i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>를 적어요. 모르는 값에는 물음표를 표시해요.",

    // The combined gas law > li
    "Convert both temperatures to kelvin: add 273.15.": "두 온도를 모두 켈빈으로 바꿔요: 273.15를 더해요.",

    // The combined gas law > li
    "Check that the two pressures share a unit and the two volumes share a unit. They do not have to be Pa or m<sup>3</sup>, because the units cancel.": "두 압력의 단위가 같고 두 부피의 단위가 같은지 확인해요. 단위가 약분되므로 꼭 Pa나 m<sup>3</sup>일 필요는 없어요.",

    // The combined gas law > li
    "If a variable is constant, it cancels. Cross it out on both sides.": "어떤 변수가 일정하면 약분돼요. 양쪽에서 지워요.",

    // The combined gas law > li
    "Rearrange for the unknown, substitute, and round at the end.": "모르는 값에 대해 식을 정리하고, 대입한 다음, 마지막에 반올림해요.",

    // The combined gas law > li
    "Sense check: did the answer move in the direction you expected?": "타당성 확인: 답이 예상한 방향으로 바뀌었나요?",

    // The combined gas law > worked example > h3
    "New volume when pressure and temperature both change": "압력과 온도가 모두 바뀔 때의 새 부피",

    // The combined gas law > worked example > p
    "A gas syringe contains 85.0 cm<sup>3</sup> of gas at 22.0 °C and 101 kPa. Calculate the volume of the gas, in cm<sup>3</sup>, at 65.0 °C and 125 kPa.": "기체 주사기에 22.0 °C, 101 kPa에서 기체 85.0 cm<sup>3</sup>가 들어 있어요. 65.0 °C, 125 kPa에서 이 기체의 부피를 cm<sup>3</sup> 단위로 계산하시오 (calculate).",

    // The combined gas law > worked example > data-title attribute
    "List the two states": "두 상태 적기",

    // The combined gas law > worked example > p
    "Sorting the data first stops you mixing up “before” and “after”.": "자료를 먼저 정리하면 “변화 전”과 “변화 후”를 헷갈리지 않아요.",

    // The combined gas law > worked example > data-title attribute
    "Convert temperatures to kelvin": "온도를 켈빈으로 바꾸기",

    // The combined gas law > worked example > p
    "The gas relationships are proportional only on the kelvin scale.": "기체의 관계는 켈빈 온도에서만 비례해요.",

    // The combined gas law > worked example > data-title attribute
    "Rearrange for V₂": "V₂에 대해 정리하기",

    // The combined gas law > worked example > p
    "Multiply both sides by <i>T</i><sub>2</sub> and divide by <i>P</i><sub>2</sub> to leave <i>V</i><sub>2</sub> alone.": "양쪽에 <i>T</i><sub>2</sub>를 곱하고 <i>P</i><sub>2</sub>로 나누어 <i>V</i><sub>2</sub>만 남겨요.",

    // The combined gas law > worked example > p
    "kPa cancels with kPa and K with K, leaving cm<sup>3</sup>. No conversion to dm<sup>3</sup> is needed here.": "kPa는 kPa끼리, K는 K끼리 약분되어 cm<sup>3</sup>가 남아요. 여기서는 dm<sup>3</sup>로 바꿀 필요가 없어요.",

    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    "Round and sense check": "반올림하고 타당성 확인하기",

    // The combined gas law > worked example > data-label attribute
    // The ideal gas equation > worked example > data-label attribute
    "Check": "확인",

    // The combined gas law > worked example > p
    "Heating makes the gas expand, but the larger pressure squeezes it more. A slightly smaller volume is reasonable. The data have 3 significant figures.": "가열하면 기체가 팽창하지만, 더 큰 압력이 기체를 더 많이 압축해요. 부피가 조금 줄어드는 것이 타당해요. 자료의 유효 숫자는 3자리예요.",

    // The combined gas law > worked example > p
    "78.7 cm<sup>3</sup>": "78.7 cm<sup>3</sup>",

    // The combined gas law > try it > p
    "A gas occupies 2.40 dm<sup>3</sup> at 15.0 °C. It is heated to 80.0 °C at constant pressure. Calculate the new volume, in dm<sup>3</sup>.": "어떤 기체가 15.0 °C에서 2.40 dm<sup>3</sup>를 차지해요. 압력을 일정하게 유지하면서 80.0 °C로 가열해요. 새 부피를 dm<sup>3</sup> 단위로 계산하시오 (calculate).",

    // The combined gas law > try it > li
    "The pressure is constant, so <i>P</i> cancels. You are left with <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>. What must you do to the temperatures first?": "압력이 일정하므로 <i>P</i>가 약분돼요. <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>가 남아요. 온도에 먼저 무엇을 해야 할까요?",

    // The combined gas law > try it > li
    "<i>T</i><sub>1</sub> = 288.15 K and <i>T</i><sub>2</sub> = 353.15 K. Then <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>.": "<i>T</i><sub>1</sub> = 288.15 K, <i>T</i><sub>2</sub> = 353.15 K. 그러면 <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>.",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>2.94 dm<sup>3</sup></strong>. If you got 12.8 dm<sup>3</sup>, you used °C.": "유효 숫자 3자리로: <strong>2.94 dm<sup>3</sup></strong>. 12.8 dm<sup>3</sup>가 나왔다면 °C를 쓴 거예요.",

    // The combined gas law > try it > p
    "A sealed, rigid steel container holds gas at 310 kPa and 20.0 °C. It is left in the sun and warms to 55.0 °C. Calculate the new pressure, in kPa.": "밀폐된 단단한 강철 용기에 310 kPa, 20.0 °C의 기체가 들어 있어요. 이 용기를 햇빛 아래 두었더니 55.0 °C로 따뜻해졌어요. 새 압력을 kPa 단위로 계산하시오 (calculate).",

    // The combined gas law > try it > li
    "Rigid means the volume is constant, so <i>V</i> cancels: <i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>.": "단단하다는 것은 부피가 일정하다는 뜻이므로 <i>V</i>가 약분돼요: <i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>.",

    // The combined gas law > try it > li
    "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>.": "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>.",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>347 kPa</strong>.": "유효 숫자 3자리로: <strong>347 kPa</strong>.",

    // The combined gas law > common mistake > p
    "The combined gas law is only for a fixed amount of gas. If gas is added or escapes between the two states, <i>n</i> has changed and you need <i>PV</i> = <i>nRT</i> for each state.": "보일-샤를 법칙은 일정한 양의 기체에만 쓸 수 있어요. 두 상태 사이에 기체가 더해지거나 빠져나가면 <i>n</i>이 바뀐 것이므로, 각 상태에 <i>PV</i> = <i>nRT</i>를 써야 해요.",

    // The combined gas law > data-title attribute
    "Combined gas law: quick check": "보일-샤를 법칙: 빠른 확인",

    // The ideal gas equation > data-toc attribute
    "PV = nRT": "PV = nRT",

    // The ideal gas equation > h2
    "The ideal gas equation": "이상 기체 방정식",

    // The ideal gas equation > p
    "The combined gas law compares a gas before and after a change. Often you have only one set of conditions and want to know how much gas is there. For that you need the <dfn data-def=\"PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.\">ideal gas equation</dfn>.": "보일-샤를 법칙은 변화 전과 후의 기체를 비교해요. 하지만 조건이 한 가지만 주어지고 기체가 얼마나 있는지 알고 싶을 때가 많아요. 그럴 때는 <dfn data-def=\"PV = nRT: 이상 기체의 압력, 부피, 물질의 양, 온도를 연결하는 식이에요.\">이상 기체 방정식 <span class=\"en-term\">(ideal gas equation)</span></dfn>이 필요해요.",

    // The ideal gas equation > data-def attribute
    "PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.": "PV = nRT: 이상 기체의 압력, 부피, 물질의 양, 온도를 연결하는 식이에요.",

    // The ideal gas equation > equation > dd
    "pressure <span class=\"unit\">Pa</span> (or kPa)": "압력 <span class=\"unit\">Pa</span> (또는 kPa)",

    // The ideal gas equation > equation > dd
    "volume <span class=\"unit\">m3</span> (or dm<sup>3</sup> with kPa)": "부피 <span class=\"unit\">m3</span> (kPa와 함께 쓸 때는 dm<sup>3</sup>)",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "기체 상수, 8.31 <span class=\"unit\">J K-1 mol-1</span>",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "temperature <span class=\"unit\">K</span>": "온도 <span class=\"unit\">K</span>",

    // The ideal gas equation > data booklet note > p
    "The equation <i>PV</i> = <i>nRT</i> and the value <span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> are both in the data booklet.": "<i>PV</i> = <i>nRT</i> 식과 <span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> 값은 모두 데이터 부클릿에 나와 있어요.",

    // The ideal gas equation > h3
    "Units: the part that costs the most marks": "단위: 점수를 가장 많이 잃는 부분",

    // The ideal gas equation > p
    "<i>R</i> is given in joules. So the product <i>P</i> × <i>V</i> must come out in joules too. Two pairs of units do this.": "<i>R</i>은 줄(J) 단위로 주어져요. 그러니 <i>P</i> × <i>V</i>도 줄 단위가 되어야 해요. 이렇게 되는 단위 조합이 두 가지 있어요.",

    // The ideal gas equation > table > caption
    "Two consistent unit sets for PV = nRT, both with R = 8.31 J K⁻¹ mol⁻¹": "PV = nRT에 쓰는 일관된 단위 조합 2가지 (둘 다 R = 8.31 J K⁻¹ mol⁻¹)",

    // The ideal gas equation > table > th
    "Set": "조합",

    // The ideal gas equation > table > th
    "Pressure": "압력",

    // The ideal gas equation > table > th
    "Volume": "부피",

    // The ideal gas equation > table > th
    "Why P × V is in joules": "P × V가 줄인 이유",

    // The ideal gas equation > table > th
    "SI base": "SI 기본 단위",

    // The ideal gas equation > table > td
    "Pa": "Pa",

    // The ideal gas equation > table > td
    "1 Pa = 1 N m<sup>−2</sup>, so Pa × m<sup>3</sup> = N m = J": "1 Pa = 1 N m<sup>−2</sup>, 따라서 Pa × m<sup>3</sup> = N m = J",

    // The ideal gas equation > table > th
    "Lab-sized": "실험실 크기",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "kPa": "kPa",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "dm<sup>3</sup>": "dm<sup>3</sup>",

    // The ideal gas equation > table > td
    "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J": "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J",

    // The ideal gas equation > p
    "In the second set the factor of 1000 in kPa cancels the factor of 1/1000 in dm<sup>3</sup>. Both sets give the same answer. Choose one set and convert everything into it before you substitute.": "두 번째 조합에서는 kPa의 1000배가 dm<sup>3</sup>의 1/1000배와 상쇄돼요. 두 조합은 같은 답을 줘요. 한 조합을 골라서, 대입하기 전에 모든 값을 그 단위로 바꾸세요.",

    // The ideal gas equation > table > caption
    "Conversions you will use every time": "매번 쓰는 단위 변환",

    // The ideal gas equation > table > th
    "From": "변환 전",

    // The ideal gas equation > table > th
    "To": "변환 후",

    // The ideal gas equation > table > th
    "Do this": "방법",

    // The ideal gas equation > table > th
    "Example": "예",

    // The ideal gas equation > table > td
    "add 273.15": "273.15를 더함",

    // The ideal gas equation > table > th
    "cm<sup>3</sup>": "cm<sup>3</sup>",

    // The ideal gas equation > table > td
    "divide by 1000": "1000으로 나눔",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>": "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>",

    // The ideal gas equation > table > td
    "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>": "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>",

    // The ideal gas equation > table > td
    "divide by 1 000 000": "1 000 000으로 나눔",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>": "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>",

    // The ideal gas equation > table > td
    "multiply by 1000": "1000을 곱함",

    // The ideal gas equation > table > td
    "101 kPa = 1.01 × 10<sup>5</sup> Pa": "101 kPa = 1.01 × 10<sup>5</sup> Pa",

    // The ideal gas equation > li
    "List what you know (<i>P</i>, <i>V</i>, <i>n</i>, <i>T</i>) and mark the unknown.": "아는 값(<i>P</i>, <i>V</i>, <i>n</i>, <i>T</i>)을 적고 모르는 값을 표시해요.",

    // The ideal gas equation > li
    "Convert: <i>T</i> to K. Then either <i>P</i> to kPa and <i>V</i> to dm<sup>3</sup>, or <i>P</i> to Pa and <i>V</i> to m<sup>3</sup>.": "단위 바꾸기: <i>T</i>는 K로. 그다음 <i>P</i>는 kPa, <i>V</i>는 dm<sup>3</sup>로 바꾸거나, <i>P</i>는 Pa, <i>V</i>는 m<sup>3</sup>로 바꿔요.",

    // The ideal gas equation > li
    "If you have a mass instead of an amount, use <i>n</i> = <i>m</i> ÷ <i>M</i> (from Structure 1.4).": "물질의 양 대신 질량이 주어지면 <i>n</i> = <i>m</i> ÷ <i>M</i>을 써요(Structure 1.4).",

    // The ideal gas equation > li
    "Rearrange <i>PV</i> = <i>nRT</i> for the unknown before you put numbers in.": "숫자를 넣기 전에 <i>PV</i> = <i>nRT</i>를 모르는 값에 대해 정리해요.",

    // The ideal gas equation > li
    "Substitute with units, calculate, and round at the end.": "단위와 함께 대입하고, 계산한 다음, 마지막에 반올림해요.",

    // The ideal gas equation > table > caption
    "PV = nRT rearranged for each variable": "각 변수에 대해 정리한 PV = nRT",

    // The ideal gas equation > table > th
    "To find": "구하는 값",

    // The ideal gas equation > table > th
    "Use": "쓰는 식",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "pressure": "압력",

    // The ideal gas equation > table > td
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i>": "<i>P</i> = <i>nRT</i> ÷ <i>V</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "volume": "부피",

    // The ideal gas equation > table > td
    "<i>V</i> = <i>nRT</i> ÷ <i>P</i>": "<i>V</i> = <i>nRT</i> ÷ <i>P</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "amount": "물질의 양",

    // The ideal gas equation > table > td
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i>": "<i>n</i> = <i>PV</i> ÷ <i>RT</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "temperature": "온도",

    // The ideal gas equation > table > td
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i>": "<i>T</i> = <i>PV</i> ÷ <i>nR</i>",

    // The ideal gas equation > widget > data-title attribute
    "PV = nRT solver with unit coach": "단위 코치가 있는 PV = nRT 계산기",

    // The ideal gas equation > widget > figcaption
    "Choose what to find, type the values in the units the question gives, and read the working from top to bottom: conversions first, then the rearrangement, then the substitution. Use it to check your own working, not to replace it.": "구할 값을 고르고, 문제에 주어진 단위 그대로 값을 입력한 다음, 풀이를 위에서 아래로 읽어 보세요: 먼저 단위 변환, 다음 식 정리, 그다음 대입이에요. 내 풀이를 대신하는 데가 아니라 확인하는 데 쓰세요.",

    // The ideal gas equation > worked example > h3
    "Finding a volume with kPa and dm³": "kPa와 dm³로 부피 구하기",

    // The ideal gas equation > worked example > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.150 mol of carbon dioxide at 25.0 °C and 98.5 kPa.": "25.0 °C, 98.5 kPa에서 이산화 탄소 0.150 mol이 차지하는 부피를 dm<sup>3</sup> 단위로 계산하시오 (calculate).",

    // The ideal gas equation > worked example > data-title attribute
    "List and convert": "적고 단위 바꾸기",

    // The ideal gas equation > worked example > p
    "The pressure is already in kPa, so the answer will come out in dm<sup>3</sup>. Only the temperature needs converting.": "압력이 이미 kPa이므로 답은 dm<sup>3</sup>로 나와요. 온도만 바꾸면 돼요.",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for V": "V에 대해 정리하기",

    // The ideal gas equation > worked example > p
    "Divide both sides of <i>PV</i> = <i>nRT</i> by <i>P</i>.": "<i>PV</i> = <i>nRT</i>의 양쪽을 <i>P</i>로 나눠요.",

    // The ideal gas equation > worked example > p
    "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K leaves J. Then J ÷ kPa gives dm<sup>3</sup>.": "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K는 J가 남아요. 그다음 J ÷ kPa는 dm<sup>3</sup>가 돼요.",

    // The ideal gas equation > worked example > p
    "One mole at STP is 22.7 dm<sup>3</sup>, so 0.150 mol near room conditions should be a few dm<sup>3</sup>. The data have 3 significant figures.": "STP에서 1몰은 22.7 dm<sup>3</sup>이므로, 실온 근처에서 0.150 mol은 몇 dm<sup>3</sup> 정도여야 해요. 자료의 유효 숫자는 3자리예요.",

    // The ideal gas equation > worked example > p
    "3.77 dm<sup>3</sup>": "3.77 dm<sup>3</sup>",

    // The ideal gas equation > worked example > h3
    "Finding an amount, then a mass, with Pa and m³": "Pa와 m³로 물질의 양을 구한 다음 질량 구하기",

    // The ideal gas equation > worked example > p
    "A 2.50 dm<sup>3</sup> flask contains oxygen gas, O<sub>2</sub>, at 27.0 °C and 150 kPa. Calculate the mass of oxygen in the flask.": "2.50 dm<sup>3</sup> 플라스크에 27.0 °C, 150 kPa의 산소 기체 O<sub>2</sub>가 들어 있어요. 플라스크 안 산소의 질량을 계산하시오 (calculate).",

    // The ideal gas equation > worked example > data-title attribute
    "Convert to Pa, m³ and K": "Pa, m³, K로 바꾸기",

    // The ideal gas equation > worked example > p
    "This example uses the SI base set to show that it gives the same kind of answer. You could also keep kPa and dm<sup>3</sup>.": "이 예제는 SI 기본 단위 조합을 써도 같은 답이 나온다는 것을 보여 줘요. kPa와 dm<sup>3</sup>를 그대로 써도 돼요.",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for n": "n에 대해 정리하기",

    // The ideal gas equation > worked example > p
    "You need the amount before you can find a mass. Divide both sides by <i>RT</i>.": "질량을 구하려면 먼저 물질의 양이 필요해요. 양쪽을 <i>RT</i>로 나눠요.",

    // The ideal gas equation > worked example > p
    "Pa × m<sup>3</sup> = J on top. J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup> underneath. J ÷ J mol<sup>−1</sup> leaves mol.": "분자는 Pa × m<sup>3</sup> = J. 분모는 J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup>. J ÷ J mol<sup>−1</sup>은 mol이 남아요.",

    // The ideal gas equation > worked example > data-title attribute
    "Convert amount to mass": "물질의 양을 질량으로 바꾸기",

    // The ideal gas equation > worked example > p
    "Oxygen gas is O<sub>2</sub>, so <i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup>. Keep the unrounded value of <i>n</i> in your calculator.": "산소 기체는 O<sub>2</sub>이므로 <i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup>이에요. 계산기에는 반올림하지 않은 <i>n</i> 값을 그대로 두세요.",

    // The ideal gas equation > worked example > p
    "The data have 3 significant figures.": "자료의 유효 숫자는 3자리예요.",

    // The ideal gas equation > worked example > p
    "4.81 g of O<sub>2</sub>": "O<sub>2</sub> 4.81 g",

    // The ideal gas equation > try it > p
    "Calculate the pressure, in kPa, of 0.250 mol of gas in a 5.00 dm<sup>3</sup> container at 30.0 °C.": "30.0 °C에서 5.00 dm<sup>3</sup> 용기에 들어 있는 기체 0.250 mol의 압력을 kPa 단위로 계산하시오 (calculate).",

    // The ideal gas equation > try it > li
    "The volume is in dm<sup>3</sup>, so the pressure will come out in kPa. Convert the temperature to kelvin.": "부피가 dm<sup>3</sup>이므로 압력은 kPa로 나와요. 온도를 켈빈으로 바꿔요.",

    // The ideal gas equation > try it > li
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>.": "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>.",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>126 kPa</strong>.": "유효 숫자 3자리로: <strong>126 kPa</strong>.",

    // The ideal gas equation > try it > p
    "0.100 mol of gas occupies 2.00 dm<sup>3</sup> at a pressure of 150 kPa. Calculate the temperature of the gas, in K.": "기체 0.100 mol이 150 kPa의 압력에서 2.00 dm<sup>3</sup>를 차지해요. 이 기체의 온도를 K 단위로 계산하시오 (calculate).",

    // The ideal gas equation > try it > li
    "kPa and dm<sup>3</sup> already match, so no conversion is needed. Rearrange <i>PV</i> = <i>nRT</i> for <i>T</i>.": "kPa와 dm<sup>3</sup>가 이미 짝이 맞으므로 단위를 바꿀 필요가 없어요. <i>PV</i> = <i>nRT</i>를 <i>T</i>에 대해 정리해요.",

    // The ideal gas equation > try it > li
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>.": "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>.",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>361 K</strong>. The equation always gives temperature in kelvin.": "유효 숫자 3자리로: <strong>361 K</strong>. 이 식으로 구한 온도는 항상 켈빈 단위예요.",

    // The ideal gas equation > try it > p
    "A gas syringe holds 250 cm<sup>3</sup> of methane, CH<sub>4</sub>, at 18.0 °C and 102 kPa. Calculate the mass of methane, in g.": "기체 주사기에 18.0 °C, 102 kPa의 메테인 CH<sub>4</sub> 250 cm<sup>3</sup>가 들어 있어요. 메테인의 질량을 g 단위로 계산하시오 (calculate).",

    // The ideal gas equation > try it > li
    "Two conversions are needed before you start: cm<sup>3</sup> to dm<sup>3</sup> and °C to K.": "시작하기 전에 두 가지를 바꿔야 해요: cm<sup>3</sup>를 dm<sup>3</sup>로, °C를 K로.",

    // The ideal gas equation > try it > li
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup>.": "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>. 그다음 <i>m</i> = <i>n</i> × <i>M</i>이고, <i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup>이에요.",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>0.169 g</strong>.": "유효 숫자 3자리로: <strong>0.169 g</strong>.",

    // The ideal gas equation > common mistake > p
    "The two classic errors are leaving the temperature in °C, and putting cm<sup>3</sup> straight in with kPa. The first gives an answer that is wildly out. The second is out by exactly 1000. If your amount of gas in a small flask comes out as several moles, check your volume unit.": "대표적인 실수 두 가지는 온도를 °C 그대로 두는 것과, kPa와 함께 cm<sup>3</sup>를 바로 넣는 것이에요. 첫 번째는 답이 터무니없이 틀려요. 두 번째는 정확히 1000배 틀려요. 작은 플라스크 속 기체의 양이 몇 몰이나 나오면 부피 단위를 확인하세요.",

    // The ideal gas equation > exam tip (shown in English + translation) > p
    "In a 2-mark gas equation question, one mark is usually for correct unit conversions (kelvin, and matching pressure and volume units) and one for the answer. Write the conversions as separate lines so the first mark is safe even if your final answer slips.": "2점짜리 기체 방정식 문제에서는 보통 1점은 올바른 단위 변환(켈빈, 그리고 압력과 부피 단위 맞추기)에, 1점은 답에 주어요. 단위 변환을 따로 한 줄씩 쓰면 최종 답이 틀려도 첫 번째 점수는 지킬 수 있어요.",

    // The ideal gas equation > not needed for IB > p
    "IB uses SI units only for pressure and volume, so you will not meet atm, mmHg, bar or litres in gas questions. Partial pressures (Dalton’s law), Graham’s law of effusion and mole fractions are not in the guide at all. If a textbook chapter turns to those, you can stop.": "IB는 압력과 부피에 SI 단위만 써요. 그래서 기체 문제에서 atm, mmHg, bar, 리터는 나오지 않아요. 부분 압력(돌턴 법칙), 그레이엄의 분출 법칙, 몰 분율은 지침에 전혀 없어요. 교과서 단원이 이런 내용으로 넘어가면 거기서 멈춰도 돼요.",

    // The ideal gas equation > data-title attribute
    "PV = nRT: quick check": "PV = nRT: 빠른 확인",

    // Molar mass of a gas from experimental data > data-toc attribute
    "Molar mass from gas data": "기체 자료로 몰 질량 구하기",

    // Molar mass of a gas from experimental data > h2
    "Molar mass of a gas from experimental data": "실험 자료로부터 기체의 몰 질량 구하기",

    // Molar mass of a gas from experimental data > p
    "You have an unknown liquid that evaporates easily (a <dfn data-def=\"A volatile liquid is one that evaporates easily.\">volatile</dfn> liquid). Inject a weighed drop into a warm gas syringe and it turns to vapour. Read the volume, the temperature and the pressure, and you can work out its molar mass.": "쉽게 증발하는 미지의 액체(<dfn data-def=\"휘발성 액체는 쉽게 증발하는 액체예요.\">휘발성 <span class=\"en-term\">(volatile)</span></dfn> 액체)가 있어요. 질량을 잰 한 방울을 따뜻한 기체 주사기에 주입하면 증기로 바뀌어요. 부피, 온도, 압력을 읽으면 몰 질량을 구할 수 있어요.",

    // Molar mass of a gas from experimental data > data-def attribute
    "A volatile liquid is one that evaporates easily.": "휘발성 액체는 쉽게 증발하는 액체예요.",

    // Molar mass of a gas from experimental data > p
    "The idea has two links. The gas equation gives the amount, <i>n</i>. Then molar mass is mass divided by amount.": "이 방법은 두 단계로 이어져요. 기체 방정식으로 물질의 양 <i>n</i>을 구해요. 그다음 몰 질량은 질량을 물질의 양으로 나눈 값이에요.",

    // Molar mass of a gas from experimental data > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "몰 질량 <span class=\"unit\">g mol-1</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "mass of the gas sample <span class=\"unit\">g</span>": "기체 시료의 질량 <span class=\"unit\">g</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "amount of gas, from <i>n</i> = <i>PV</i> ÷ <i>RT</i> <span class=\"unit\">mol</span>": "기체의 양, <i>n</i> = <i>PV</i> ÷ <i>RT</i>로 구함 <span class=\"unit\">mol</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "pressure <span class=\"unit\">kPa</span>": "압력 <span class=\"unit\">kPa</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "volume <span class=\"unit\">dm3</span>": "부피 <span class=\"unit\">dm3</span>",

    // Molar mass of a gas from experimental data > p
    "The combined form <i>M</i> = <i>mRT</i> ÷ <i>PV</i> is not in the data booklet. You do not need to memorise it. Working in two steps (find <i>n</i>, then <i>M</i> = <i>m</i> ÷ <i>n</i>) is safer and shows your method.": "합친 식 <i>M</i> = <i>mRT</i> ÷ <i>PV</i>는 데이터 부클릿에 없어요. 외울 필요는 없어요. 두 단계로 푸는 것(<i>n</i>을 구한 다음 <i>M</i> = <i>m</i> ÷ <i>n</i>)이 더 안전하고 풀이 방법도 잘 보여 줘요.",

    // Molar mass of a gas from experimental data > li
    "Convert <i>T</i> to K, and <i>P</i> and <i>V</i> to a matching pair (kPa with dm<sup>3</sup>).": "<i>T</i>를 K로 바꾸고, <i>P</i>와 <i>V</i>를 짝이 맞는 단위(kPa와 dm<sup>3</sup>)로 바꿔요.",

    // Molar mass of a gas from experimental data > li
    "Find the amount of gas: <i>n</i> = <i>PV</i> ÷ <i>RT</i>.": "기체의 양 구하기: <i>n</i> = <i>PV</i> ÷ <i>RT</i>.",

    // Molar mass of a gas from experimental data > li
    "Find the molar mass: <i>M</i> = <i>m</i> ÷ <i>n</i>, with the mass in g.": "몰 질량 구하기: <i>M</i> = <i>m</i> ÷ <i>n</i>, 질량은 g 단위로.",

    // Molar mass of a gas from experimental data > li
    "If you also know the empirical formula, divide <i>M</i> by the empirical formula mass to find how many empirical units make one molecule.": "실험식도 안다면 <i>M</i>을 실험식량으로 나누어, 분자 하나에 실험식 단위가 몇 개 들어 있는지 구해요.",

    // Molar mass of a gas from experimental data > worked example > h3
    "Molar mass of a volatile liquid": "휘발성 액체의 몰 질량",

    // Molar mass of a gas from experimental data > worked example > p
    "0.180 g of a volatile liquid is injected into a gas syringe kept at 100.0 °C. It vaporises completely and the vapour occupies 95.1 cm<sup>3</sup> at 101 kPa. Calculate the molar mass of the liquid.": "휘발성 액체 0.180 g을 100.0 °C로 유지한 기체 주사기에 주입해요. 액체는 완전히 기화하고, 증기는 101 kPa에서 95.1 cm<sup>3</sup>를 차지해요. 이 액체의 몰 질량을 계산하시오 (calculate).",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the units": "단위 바꾸기",

    // Molar mass of a gas from experimental data > worked example > p
    "With the pressure in kPa, the volume must be in dm<sup>3</sup>. The temperature must be in kelvin.": "압력이 kPa이면 부피는 dm<sup>3</sup>여야 해요. 온도는 켈빈이어야 해요.",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of vapour": "증기의 양 구하기",

    // Molar mass of a gas from experimental data > worked example > p
    "The gas equation counts the moles of vapour without needing to know what the substance is.": "기체 방정식을 쓰면 물질이 무엇인지 몰라도 증기의 몰수를 구할 수 있어요.",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Divide mass by amount": "질량을 물질의 양으로 나누기",

    // Molar mass of a gas from experimental data > worked example > p
    "Molar mass is the mass of one mole, so it is grams divided by moles.": "몰 질량은 1몰의 질량이므로, 그램을 몰로 나눈 값이에요.",

    // Molar mass of a gas from experimental data > worked example > p
    "The mass, volume and pressure have 3 significant figures.": "질량, 부피, 압력의 유효 숫자는 3자리예요.",

    // Molar mass of a gas from experimental data > worked example > p
    "58.1 g mol<sup>−1</sup>": "58.1 g mol<sup>−1</sup>",

    // Molar mass of a gas from experimental data > worked example > h3
    "From percentage composition and gas data to a molecular formula": "질량 백분율 조성과 기체 자료로 분자식 구하기",

    // Molar mass of a gas from experimental data > worked example > p
    "A hydrocarbon contains 85.6 % carbon and 14.4 % hydrogen by mass. A 0.500 g sample of the gas occupies 221 cm<sup>3</sup> at 25.0 °C and 100 kPa. Determine the molecular formula of the hydrocarbon.": "어떤 탄화수소는 질량으로 탄소 85.6 %, 수소 14.4 %를 포함해요. 이 기체 0.500 g이 25.0 °C, 100 kPa에서 221 cm<sup>3</sup>를 차지해요. 이 탄화수소의 분자식을 구하시오 (determine).",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the empirical formula": "실험식 구하기",

    // Molar mass of a gas from experimental data > worked example > p
    "This is the Structure 1.4 method: imagine 100 g, divide each mass by <i>A</i><sub>r</sub>, then divide by the smallest.": "Structure 1.4의 방법이에요: 100 g이 있다고 생각하고, 각 질량을 <i>A</i><sub>r</sub>로 나눈 다음, 가장 작은 값으로 나눠요.",

    // Molar mass of a gas from experimental data > worked example > maths line
    "ratio H : C = 14.25… ÷ 7.127… = 2.00, so the empirical formula is CH<sub>2</sub>": "비 H : C = 14.25… ÷ 7.127… = 2.00, 따라서 실험식은 CH<sub>2</sub>",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the gas data": "기체 자료의 단위 바꾸기",

    // Molar mass of a gas from experimental data > worked example > p
    "kPa needs dm<sup>3</sup>, and the temperature must be in kelvin.": "kPa에는 dm<sup>3</sup>가 필요하고, 온도는 켈빈이어야 해요.",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of gas": "기체의 양 구하기",

    // Molar mass of a gas from experimental data > worked example > p
    "The conditions are not STP, so use the gas equation, not 22.7.": "조건이 STP가 아니므로 22.7이 아니라 기체 방정식을 써요.",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the molar mass": "몰 질량 구하기",

    // Molar mass of a gas from experimental data > worked example > p
    "Mass divided by amount.": "질량을 물질의 양으로 나눠요.",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Compare with the empirical formula mass": "실험식량과 비교하기",

    // Molar mass of a gas from experimental data > worked example > p
    "The molecular formula is a whole-number multiple of the empirical formula. Experimental data rarely give an exact whole number, so round to the nearest one.": "분자식은 실험식의 정수배예요. 실험 자료로는 정확한 정수가 나오는 경우가 드물기 때문에 가장 가까운 정수로 반올림해요.",

    // Molar mass of a gas from experimental data > worked example > maths line
    "molecular formula = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>": "분자식 = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>",

    // Molar mass of a gas from experimental data > try it > p
    "1.26 g of a gas occupies 0.750 dm<sup>3</sup> at 20.0 °C and 96.0 kPa. Calculate the molar mass of the gas.": "기체 1.26 g이 20.0 °C, 96.0 kPa에서 0.750 dm<sup>3</sup>를 차지해요. 이 기체의 몰 질량을 계산하시오 (calculate).",

    // Molar mass of a gas from experimental data > try it > li
    "Find the amount of gas first with <i>n</i> = <i>PV</i> ÷ <i>RT</i>. Remember kelvin.": "먼저 <i>n</i> = <i>PV</i> ÷ <i>RT</i>로 기체의 양을 구해요. 켈빈을 잊지 마세요.",

    // Molar mass of a gas from experimental data > try it > li
    "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>. Then <i>M</i> = 1.26 g ÷ <i>n</i>.": "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>. 그다음 <i>M</i> = 1.26 g ÷ <i>n</i>.",

    // Molar mass of a gas from experimental data > try it > p
    "To 3 significant figures: <strong>42.6 g mol<sup>−1</sup></strong>.": "유효 숫자 3자리로: <strong>42.6 g mol<sup>−1</sup></strong>.",

    // Molar mass of a gas from experimental data > h3
    "Gas density uses the same idea": "기체의 밀도도 같은 생각을 써요",

    // Molar mass of a gas from experimental data > p
    "Density is mass divided by volume. If a question gives the density of a gas, it has given you the mass of a known volume. For example, a density of 1.25 g dm<sup>−3</sup> means 1.25 g occupies 1.00 dm<sup>3</sup>. Put those two values into the method above. There is no new formula to learn.": "밀도는 질량을 부피로 나눈 값이에요. 문제에서 기체의 밀도를 주었다면, 알려진 부피의 질량을 준 것과 같아요. 예를 들어 밀도가 1.25 g dm<sup>−3</sup>이면 1.25 g이 1.00 dm<sup>3</sup>를 차지한다는 뜻이에요. 이 두 값을 위의 방법에 넣으면 돼요. 새로 외울 식은 없어요.",

    // Molar mass of a gas from experimental data > exam tip (shown in English + translation) > p
    "These questions are often chained: empirical formula in one part, molar mass from gas data in the next, molecular formula at the end. Each part is marked with “error carried forward”. If an earlier answer is wrong but you use it correctly afterwards, you still earn the later marks. So keep going, and show every line.": "이런 문제는 여러 문항이 이어지는 경우가 많아요: 한 문항에서 실험식, 다음 문항에서 기체 자료로 몰 질량, 마지막에 분자식을 구해요. 각 문항은 “error carried forward”(앞의 오류 이어 채점) 방식으로 채점해요. 앞의 답이 틀려도 그 답을 뒤에서 올바르게 쓰면 뒤 문항의 점수는 받을 수 있어요. 그러니 멈추지 말고 모든 줄을 써 보이세요.",

    // Molar mass of a gas from experimental data > common mistake > p
    "Do not use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount unless the gas is at STP. Vapour in a syringe at 100 °C takes up much more space per mole than that.": "기체가 STP에 있지 않으면 물질의 양을 구할 때 22.7 dm<sup>3</sup> mol<sup>−1</sup>을 쓰지 마세요. 100 °C 주사기 속의 증기는 1몰당 그보다 훨씬 많은 공간을 차지해요.",

    // Molar mass of a gas from experimental data > data-title attribute
    "Molar mass from gas data: quick check": "기체 자료로 몰 질량 구하기: 빠른 확인",

    // Linking it up > h2
    "Linking it up": "연결해 보기",

    // Linking it up > p
    "The IB guide asks linking questions that connect this topic to others. Short answers to four of them:": "IB 지침에는 이 단원을 다른 단원과 연결하는 연결 질문이 있어요. 그중 네 가지에 대한 짧은 답이에요:",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most?": "아보가드로 법칙은 이상 기체에 적용돼요. 실제 기체는 어떤 조건에서 가장 많이 벗어날까요?",

    // Linking it up > p
    "At low temperature and high pressure. There the particles are slow and close together, so intermolecular forces and the volume of the particles are no longer negligible. Under those conditions, equal volumes of two real gases may not contain exactly equal numbers of molecules.": "낮은 온도와 높은 압력에서요. 이때 입자는 느리고 서로 가까이 있어서, 분자 간 힘과 입자의 부피를 더 이상 무시할 수 없어요. 이런 조건에서는 두 실제 기체가 같은 부피라도 분자 수가 정확히 같지 않을 수 있어요.",

    // Linking it up > h3
    "Under comparable conditions, why do some gases deviate more than others?": "비슷한 조건에서 왜 어떤 기체는 다른 기체보다 더 많이 벗어날까요?",

    // Linking it up > p
    "Gases whose particles attract each other more strongly deviate more, because the “no intermolecular forces” assumption fits them less well. Larger particles also make the “negligible volume” assumption less accurate. Structure 2.2 explains why some molecules attract more strongly than others.": "입자끼리 더 강하게 끌어당기는 기체가 더 많이 벗어나요. “분자 간 힘이 없다”는 가정이 덜 맞기 때문이에요. 입자가 클수록 “부피를 무시할 수 있다”는 가정도 덜 정확해져요. 어떤 분자가 다른 분자보다 더 강하게 끌어당기는 이유는 Structure 2.2에서 설명해요.",

    // Linking it up > h3
    "Graphs can be sketches or accurately plotted points. What are the advantages and limitations of each?": "그래프는 개형일 수도 있고 정확하게 찍은 점일 수도 있어요. 각각의 장점과 한계는 무엇일까요?",

    // Linking it up > p
    "A sketch shows the shape of a relationship quickly: curve or line, through the origin or not. It carries no scale, so you cannot read values from it. Plotted data points let you find a gradient or an intercept, judge the scatter and spot anomalous results, and extrapolate (for example to absolute zero). They take longer, and they are only as reliable as the measurements and the range that was measured.": "개형은 관계의 모양을 빠르게 보여 줘요: 곡선인지 직선인지, 원점을 지나는지 아닌지. 눈금이 없어서 값을 읽을 수는 없어요. 자료 점을 찍으면 기울기나 절편을 구하고, 흩어진 정도를 판단하고, 이상한 결과를 찾고, 외삽(예를 들어 절대 영도까지)할 수 있어요. 시간이 더 걸리고, 측정값과 측정한 범위만큼만 믿을 수 있어요.",

    // Linking it up > h3
    "How can the ideal gas law be used to find the molar mass of a gas from experimental data?": "이상 기체 법칙을 이용해 실험 자료로부터 기체의 몰 질량을 어떻게 구할 수 있을까요?",

    // Linking it up > p
    "Measure the mass, pressure, volume and temperature of a gas sample. Use <i>n</i> = <i>PV</i> ÷ <i>RT</i> to find the amount, then <i>M</i> = <i>m</i> ÷ <i>n</i>. The result assumes the gas behaves ideally, so it is most accurate at high temperature and low pressure.": "기체 시료의 질량, 압력, 부피, 온도를 측정해요. <i>n</i> = <i>PV</i> ÷ <i>RT</i>로 물질의 양을 구한 다음 <i>M</i> = <i>m</i> ÷ <i>n</i>을 구해요. 이 결과는 기체가 이상적으로 행동한다고 가정한 것이므로, 높은 온도와 낮은 압력에서 가장 정확해요.",

    // Exam-style practice > h2
    "Exam-style practice": "시험 유형 연습",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. All questions are original and stay inside the syllabus. Have your data booklet and calculator ready.": "첫걸음부터 도전까지 3세트예요. 모든 문제는 새로 만든 것이고 교수요목 범위 안에 있어요. 데이터 부클릿과 계산기를 준비하세요.",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "기초: 한 번에 한 개념씩",

    // Exam-style practice > data-title attribute
    "1.5 foundation": "1.5 기초",

    // Exam-style practice > h3
    "Exam standard": "시험 수준",

    // Exam-style practice > data-title attribute
    "1.5 exam standard": "1.5 시험 수준",

    // Exam-style practice > h3
    "Challenge: multi-step and unfamiliar contexts": "도전: 여러 단계와 낯선 상황",

    // Exam-style practice > data-title attribute
    "1.5 challenge": "1.5 도전",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature and amount are held constant. Move the volume slider.": "온도와 물질의 양이 일정해요. 부피 슬라이더를 움직여 보세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume and amount are held constant (a rigid container). Move the temperature slider.": "부피와 물질의 양이 일정해요(단단한 용기). 온도 슬라이더를 움직여 보세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure is held at {P} kPa and the amount at {n} mol. The piston is free to move. Move the temperature slider.": "압력은 {P} kPa, 물질의 양은 {n} mol로 일정해요. 피스톤은 자유롭게 움직여요. 온도 슬라이더를 움직여 보세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Experiment": "실험",

    // widget string (assets/js/widgets-s1-5.js)
    "P against V (T and n constant)": "P–V (T, n 일정)",

    // widget string (assets/js/widgets-s1-5.js)
    "P against T (V and n constant)": "P–T (V, n 일정)",

    // widget string (assets/js/widgets-s1-5.js)
    "V against T (P and n constant)": "V–T (P, n 일정)",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, T": "온도, T",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, V": "부피, V",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas, n": "기체의 양, n",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause particles": "입자 멈추기",

    // widget string (assets/js/widgets-s1-5.js)
    "Run the experiment": "실험 실행",

    // widget string (assets/js/widgets-s1-5.js)
    "Clear graph": "그래프 지우기",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, P": "압력, P",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, n": "물질의 양, n",

    // widget string (assets/js/widgets-s1-5.js)
    "PV ÷ nT": "PV ÷ nT",

    // widget string (assets/js/widgets-s1-5.js)
    "This experiment": "이 실험",

    // widget string (assets/js/widgets-s1-5.js)
    "Left: a cylinder of gas particles closed by a piston. Right: a graph of the two variables in the chosen experiment, traced as you move the slider. All values are in the readout below.": "왼쪽: 피스톤으로 막힌 실린더 속 기체 입자. 오른쪽: 고른 실험의 두 변수 그래프로, 슬라이더를 움직이면 그려져요. 모든 값은 아래 표시창에 있어요.",

    // widget string (assets/js/widgets-s1-5.js)
    "volume / {unit}": "부피 / {unit}",

    // widget string (assets/js/widgets-s1-5.js)
    "Model of the gas": "기체 모형",

    // widget string (assets/js/widgets-s1-5.js)
    "piston": "피스톤",

    // widget string (assets/js/widgets-s1-5.js)
    "extrapolated to {T} K": "{T} K까지 외삽",

    // widget string (assets/js/widgets-s1-5.js)
    "Play particles": "입자 움직이기",

    // widget string (assets/js/widgets-s1-5.js)
    "The grey line is your previous run.": "회색 선은 이전 실행 결과예요.",

    // widget string (assets/js/widgets-s1-5.js)
    "a curve that falls steeply at first and then levels off, never touching either axis": "처음에는 가파르게 내려가다가 점점 평평해지며, 두 축 어디에도 닿지 않는 곡선",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line through the origin": "원점을 지나는 직선",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line that does not pass through the origin; extended back, it meets the horizontal axis at a negative value": "원점을 지나지 않는 직선. 뒤로 늘이면 가로축과 음의 값에서 만남",

    // widget string (assets/js/widgets-s1-5.js)
    "a horizontal straight line": "수평인 직선",

    // widget string (assets/js/widgets-s1-5.js)
    "T and n constant": "T, n 일정",

    // widget string (assets/js/widgets-s1-5.js)
    "P is inversely proportional to V. Doubling V halves P.": "P는 V에 반비례해요. V를 2배로 하면 P는 절반이 돼요.",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to 1/V, so this plot turns the curve into a straight line.": "P는 1/V에 비례하므로, 이렇게 그리면 곡선이 직선이 돼요.",

    // widget string (assets/js/widgets-s1-5.js)
    "P and n constant": "P, n 일정",

    // widget string (assets/js/widgets-s1-5.js)
    "V is directly proportional to T in kelvin. Zero volume would be reached at 0 K.": "V는 켈빈 온도 T에 비례해요. 0 K에서 부피가 0이 될 거예요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Still a straight line, but 0 °C is not zero on the kelvin scale. Extended back, the line reaches V = 0 at {T} °C.": "여전히 직선이지만, 0 °C는 켈빈 눈금에서 0이 아니에요. 뒤로 늘이면 직선은 {T} °C에서 V = 0에 닿아요.",

    // widget string (assets/js/widgets-s1-5.js)
    "V and n constant": "V, n 일정",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to T in kelvin.": "P는 켈빈 온도 T에 비례해요.",

    // widget string (assets/js/widgets-s1-5.js)
    "PV = nRT. With n and T fixed, PV stays the same whatever the pressure.": "PV = nRT. n과 T가 일정하면 압력이 얼마이든 PV는 변하지 않아요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph of {y} against {x}: {shape}": "{y}–{x} 그래프 개형: {shape}",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph: {shape}": "그래프 개형: {shape}",

    // widget string (assets/js/widgets-s1-5.js)
    "negative": "음수",

    // widget string (assets/js/widgets-s1-5.js)
    "Matching exercise": "짝짓기 연습",

    // widget string (assets/js/widgets-s1-5.js)
    "{y} against {x}": "{y}–{x}",

    // widget string (assets/js/widgets-s1-5.js)
    "Shape {letter}": "모양 {letter}",

    // widget string (assets/js/widgets-s1-5.js)
    "Each relationship below is for a fixed mass of an ideal gas. Choose the shape of its graph. A shape can be used more than once.": "아래의 각 관계는 일정한 질량의 이상 기체에 대한 것이에요. 그래프의 모양을 고르세요. 같은 모양을 여러 번 써도 돼요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape": "모양 고르기",

    // widget string (assets/js/widgets-s1-5.js)
    "Check my matches": "짝지은 답 확인",

    // widget string (assets/js/widgets-s1-5.js)
    "Not answered yet.": "아직 답하지 않았어요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Correct. {why}": "정답. {why}",

    // widget string (assets/js/widgets-s1-5.js)
    "Not this shape. Ask: is it direct or inverse proportion, and is the horizontal axis zero at the origin?": "이 모양이 아니에요. 스스로 물어보세요: 비례인가 반비례인가? 가로축은 원점에서 0인가?",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. All matched. Open the labelled gallery to see them together.": "{total}개 중 {right}개 정답. 모두 짝지었어요. 이름 붙은 그래프 모음을 열어 한꺼번에 보세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct ({blank} not answered). Change your choices and check again.": "{total}개 중 {right}개 정답({blank}개는 답하지 않음). 선택을 바꾸고 다시 확인하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. Change your choices and check again.": "{total}개 중 {right}개 정답. 선택을 바꾸고 다시 확인하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Test yourself: match the shapes": "스스로 확인하기: 모양 짝짓기",

    // widget string (assets/js/widgets-s1-5.js)
    "Show the labelled gallery": "이름 붙은 그래프 모음 보기",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape for each relationship, then press Check.": "각 관계에 맞는 모양을 고른 다음 확인을 누르세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Study the six graphs, then test yourself.": "그래프 6개를 살펴본 다음 스스로 확인해 보세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Find": "구할 값",

    // widget string (assets/js/widgets-s1-5.js)
    "pressure, P": "압력, P",

    // widget string (assets/js/widgets-s1-5.js)
    "volume, V": "부피, V",

    // widget string (assets/js/widgets-s1-5.js)
    "temperature, T": "온도, T",

    // widget string (assets/js/widgets-s1-5.js)
    "amount, n": "물질의 양, n",

    // widget string (assets/js/widgets-s1-5.js)
    "mass, m (formula known)": "질량, m (화학식을 알 때)",

    // widget string (assets/js/widgets-s1-5.js)
    "molar mass, M (mass known)": "몰 질량, M (질량을 알 때)",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas given as": "기체의 양이 주어진 방식",

    // widget string (assets/js/widgets-s1-5.js)
    "amount in mol": "mol 단위의 물질의 양",

    // widget string (assets/js/widgets-s1-5.js)
    "mass in g and a formula": "g 단위의 질량과 화학식",

    // widget string (assets/js/widgets-s1-5.js)
    "Work in": "계산 단위",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} and {v}": "{p}와 {v}",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit for {quantity}": "{quantity}의 단위",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, {sym}": "압력, {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, {sym}": "부피, {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, {sym}": "온도, {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, {sym}": "물질의 양, {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Mass, {sym}": "질량, {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "mass": "질량",

    // widget string (assets/js/widgets-s1-5.js)
    "Formula of the gas": "기체의 화학식",

    // widget string (assets/js/widgets-s1-5.js)
    "formula": "화학식",

    // widget string (assets/js/widgets-s1-5.js)
    "Answer": "답",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit check": "단위 확인",

    // widget string (assets/js/widgets-s1-5.js)
    "(already in {unit})": "(이미 {unit})",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a pressure greater than zero.": "0보다 큰 압력을 입력하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a volume greater than zero.": "0보다 큰 부피를 입력하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a temperature.": "온도를 입력하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "The temperature must be above absolute zero (0 K, {T} °C).": "온도는 절대 영도(0 K, {T} °C)보다 높아야 해요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Type a formula using element symbols up to krypton, such as {a} or {b}.": "크립톤까지의 원소 기호로 화학식을 입력하세요. 예: {a}, {b}.",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a mass greater than zero.": "0보다 큰 질량을 입력하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter an amount greater than zero.": "0보다 큰 물질의 양을 입력하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Waiting for valid values.": "올바른 값을 기다리는 중이에요.",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq}": "그다음 {eq}",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq} (the same as {eq2})": "그다음 {eq} ({eq2}와 같음)",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too big.": "<b>온도를 °C 그대로 두었어요.</b> {right} K 대신 {wrong}을 쓰면 답이 {factor}배 너무 커져요.",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too small.": "<b>온도를 °C 그대로 두었어요.</b> {right} K 대신 {wrong}을 쓰면 답이 {factor}배 너무 작아져요.",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} °C directly would give a zero or negative answer, which is impossible. Always add 273.15 first.": "<b>온도를 °C 그대로 두었어요.</b> {wrong} °C를 그대로 쓰면 답이 0이나 음수가 되는데, 이것은 불가능해요. 항상 먼저 273.15를 더하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too big. 1 {dm3} = 1000 {cm3}.": "<b>{cm3}를 {dm3}처럼 썼어요.</b> {value}를 kPa와 함께 바로 넣으면 답이 1000배 너무 커져요. 1 {dm3} = 1000 {cm3}.",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too small. 1 {dm3} = 1000 {cm3}.": "<b>{cm3}를 {dm3}처럼 썼어요.</b> {value}를 kPa와 함께 바로 넣으면 답이 1000배 너무 작아져요. 1 {dm3} = 1000 {cm3}.",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Mixed unit sets.</b> kPa goes with {dm3}, and Pa goes with {m3}. Pairing kPa with {m3}, or Pa with {dm3}, puts the answer out by a factor of 1000.": "<b>단위 조합이 섞였어요.</b> kPa는 {dm3}와, Pa는 {m3}와 함께 써요. kPa를 {m3}와, 또는 Pa를 {dm3}와 짝지으면 답이 1000배 틀려요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Convert to the units you chose": "고른 단위로 바꾸기",

    // widget string (assets/js/widgets-s1-5.js)
    "Rearrange {eq}": "{eq} 정리하기",

    // widget string (assets/js/widgets-s1-5.js)
    "({n} significant figures)": "(유효 숫자 {n}자리)",

    // widget string (assets/js/widgets-s1-5.js)
    "In an exam, round to the smallest number of significant figures in the data you were given.": "시험에서는 주어진 자료 중 가장 적은 유효 숫자 자릿수에 맞춰 반올림하세요.",

    // widget string (assets/js/widgets-s1-5.js)
    "Classic errors to avoid here": "여기서 피해야 할 대표적인 실수",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} {times} {v} = J, so it matches R in {Runit}.": "{p} {times} {v} = J이므로 {Runit} 단위의 R과 맞아요.",

    // widget string (assets/js/widgets-s1-5.js)
    "small particles, weak forces (for example helium)": "작은 입자, 약한 힘 (예: 헬륨)",

    // widget string (assets/js/widgets-s1-5.js)
    "larger particles, stronger forces (for example ammonia)": "더 큰 입자, 더 강한 힘 (예: 암모니아)",

    // widget string (assets/js/widgets-s1-5.js)
    "Type of gas": "기체의 종류",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature (0 = very low, 100 = very high)": "온도 (0 = 아주 낮음, 100 = 아주 높음)",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure (0 = very low, 100 = very high)": "압력 (0 = 아주 낮음, 100 = 아주 높음)",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause": "멈추기",

    // widget string (assets/js/widgets-s1-5.js)
    "Most ideal conditions": "가장 이상적인 조건",

    // widget string (assets/js/widgets-s1-5.js)
    "Least ideal conditions": "가장 덜 이상적인 조건",

    // widget string (assets/js/widgets-s1-5.js)
    "How close to ideal?": "이상 기체에 얼마나 가까울까?",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume": "입자의 부피",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces": "분자 간 힘",

    // widget string (assets/js/widgets-s1-5.js)
    "Remember": "기억하기",

    // widget string (assets/js/widgets-s1-5.js)
    "Far from ideal": "이상 기체와 거리가 멂",

    // widget string (assets/js/widgets-s1-5.js)
    "Noticeably non-ideal": "눈에 띄게 이상적이지 않음",

    // widget string (assets/js/widgets-s1-5.js)
    "Fairly close to ideal": "이상 기체에 꽤 가까움",

    // widget string (assets/js/widgets-s1-5.js)
    "Very close to ideal": "이상 기체에 아주 가까움",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are far apart": "무시할 수 있음: 입자가 멀리 떨어져 있음",

    // widget string (assets/js/widgets-s1-5.js)
    "starting to matter": "영향이 생기기 시작함",

    // widget string (assets/js/widgets-s1-5.js)
    "significant: particles are crowded": "무시할 수 없음: 입자가 빽빽함",

    // widget string (assets/js/widgets-s1-5.js)
    "a large share of the space": "공간의 큰 부분을 차지함",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are fast and far apart": "무시할 수 있음: 입자가 빠르고 멀리 떨어져 있음",

    // widget string (assets/js/widgets-s1-5.js)
    "significant": "무시할 수 없음",

    // widget string (assets/js/widgets-s1-5.js)
    "strong effect: particles are slow and close": "영향이 큼: 입자가 느리고 가까이 있음",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume matters": "입자의 부피가 중요함",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces matter": "분자 간 힘이 중요함",

    // widget string (assets/js/widgets-s1-5.js)
    "Close to ideal behaviour": "이상 기체에 가까운 행동",

    // widget string (assets/js/widgets-s1-5.js)
    "hardly ↔ a lot": "거의 없음 ↔ 많음",

    // widget string (assets/js/widgets-s1-5.js)
    "not at all ↔ very": "전혀 아님 ↔ 매우",

    // widget string (assets/js/widgets-s1-5.js)
    "This picture is a qualitative illustration. The bars are not calculated from any gas equation, and particle sizes are exaggerated.": "이 그림은 정성적인 설명이에요. 막대는 어떤 기체 방정식으로도 계산한 것이 아니고, 입자 크기는 과장되어 있어요.",

    // widget string (assets/js/widgets-s1-5.js)
    "A box of gas particles. Higher pressure makes the box smaller so the particles are crowded. Lower temperature makes them slower, and dashed lines show attractions between close neighbours. Three bars below show how much particle volume and intermolecular forces matter and how close the gas is to ideal behaviour.": "기체 입자가 든 상자. 압력이 높을수록 상자가 작아져서 입자가 빽빽해져요. 온도가 낮을수록 입자가 느려지고, 점선은 가까운 이웃 입자 사이의 인력을 나타내요. 아래의 막대 3개는 입자의 부피와 분자 간 힘이 얼마나 중요한지, 그리고 기체가 이상적인 행동에 얼마나 가까운지를 보여 줘요.",

    // widget string (assets/js/widgets-s1-5.js)
    "volume at low pressure": "낮은 압력에서의 부피",

    // widget string (assets/js/widgets-s1-5.js)
    "Play": "재생",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP, V": "STP에서의 부피, V",

    // widget string (assets/js/widgets-s1-5.js)
    "{n} mol": "{n} mol",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP": "STP에서의 부피",

    // widget string (assets/js/widgets-s1-5.js)
    "Cube side": "정육면체 한 변",

    // widget string (assets/js/widgets-s1-5.js)
    "Working": "풀이",

    // widget string (assets/js/widgets-s1-5.js)
    "A cube holding the chosen amount of gas at STP, drawn to scale beside a football about 22 centimetres across and a 1 cubic decimetre cube. The values are in the readout below.": "고른 양의 기체를 STP에서 담는 정육면체를, 지름 약 22센티미터인 축구공과 1세제곱데시미터 정육면체 옆에 같은 비율로 그렸어요. 값은 아래 표시창에 있어요.",

    // widget string (assets/js/widgets-s1-5.js)
    "gas at STP": "STP의 기체",

    // widget string (assets/js/widgets-s1-5.js)
    "football": "축구공",

    // widget string (assets/js/widgets-s1-5.js)
    "scale: {length} cm": "축척: {length} cm",

    // widget string (assets/js/widgets-s1-5.js)
    "{working}. The same for any ideal gas: {examples}.": "{working}. 어떤 이상 기체든 같아요: {examples}.",

  }
});
