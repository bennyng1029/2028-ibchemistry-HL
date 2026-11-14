/* lab-molar-mass-gas — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-molar-mass-gas', {
  strings: {

    // page title (browser tab)
    "Lab 8 Molar volume and the molar mass of a gas | Structure Lab": "실험 8 몰 부피와 기체의 몰 질량 | Structure Lab",

    // Molar volume and the molar mass of a gas > page header > p
    "Lab 8 · Structure 1.5 and 1.4": "실험 8 · Structure 1.5, 1.4",

    // Molar volume and the molar mass of a gas > page header > h1
    "Molar volume and the molar mass of a gas": "몰 부피와 기체의 몰 질량",

    // Molar volume and the molar mass of a gas > page header > span
    "How can a mass, a volume, a temperature and a pressure be combined, through the ideal gas equation, to give the molar mass of a gas?": "질량, 부피, 온도, 압력을 이상 기체 방정식으로 어떻게 묶어서 기체의 몰 질량을 구할 수 있을까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "These are practical skills. Tick each one when you can do it on your own.": "다음은 실험 기능이에요. 혼자서 할 수 있게 되면 하나씩 표시하세요.",

    // What you need to be able to do > checklist > span
    "Convert cm<sup>3</sup> to m<sup>3</sup>, kPa to Pa and °C to K before using <i>PV</i> = <i>nRT</i>.": "<i>PV</i> = <i>nRT</i>를 쓰기 전에 cm<sup>3</sup>를 m<sup>3</sup>로, kPa를 Pa로, °C를 K로 바꾸기.",

    // What you need to be able to do > checklist > span
    "Find the molar volume of hydrogen at room conditions from magnesium and excess acid.": "마그네슘과 과량의 산으로 실온·대기압에서 수소의 몰 부피 구하기.",

    // What you need to be able to do > checklist > span
    "Convert a measured molar volume to STP and compare it with 22.7 dm<sup>3</sup> mol<sup>−1</sup>.": "측정한 몰 부피를 STP(표준 온도와 압력) 값으로 바꾸고 22.7 dm<sup>3</sup> mol<sup>−1</sup>과 비교하기.",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a volatile liquid with <i>M</i> = <i>mRT</i> / <i>PV</i>.": "<i>M</i> = <i>mRT</i> / <i>PV</i>로 휘발성 액체의 몰 질량 계산하기.",

    // What you need to be able to do > checklist > span
    "Find a molar volume or a molar mass from the gradient of a graph.": "그래프의 기울기로 몰 부피나 몰 질량 구하기.",

    // What you need to be able to do > checklist > span
    "Propagate uncertainties through <i>M</i> = <i>mRT</i> / <i>PV</i> and compare them with the percentage error.": "<i>M</i> = <i>mRT</i> / <i>PV</i>에서 불확도를 전파하고 백분율 오차와 비교하기.",

    // What you need to be able to do > checklist > span
    "Explain whether a named error makes the result too high or too low, and suggest an improvement.": "주어진 오차가 결과를 너무 높게 하는지 너무 낮게 하는지 설명하고, 개선 방법 제안하기.",

    // The chemistry behind it > h2
    "The chemistry behind it": "바탕이 되는 화학",

    // The chemistry behind it > p
    "The ideal gas equation links the amount of a gas to things you can measure: its pressure, volume and temperature. The amount also equals mass ÷ molar mass. Put the two together and you can find the molar mass of a gas from four measurements.": "이상 기체 방정식은 기체의 양을 잴 수 있는 양, 즉 압력, 부피, 온도와 연결해요. 기체의 양은 질량 ÷ 몰 질량과도 같아요. 이 둘을 합치면 측정값 4개로 기체의 몰 질량을 구할 수 있어요.",

    // The chemistry behind it > equation > maths line
    "<i>PV</i> = <i>nRT</i> and <i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span>, so <i>M</i> = <span class=\"frac\"><span><i>mRT</i></span><span><i>PV</i></span></span>": "<i>PV</i> = <i>nRT</i>이고 <i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span>이므로 <i>M</i> = <span class=\"frac\"><span><i>mRT</i></span><span><i>PV</i></span></span>",

    // The chemistry behind it > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "몰 질량 <span class=\"unit\">g mol-1</span>",

    // The chemistry behind it > equation > dd
    "mass of the gas <span class=\"unit\">g</span>": "기체의 질량 <span class=\"unit\">g</span>",

    // The chemistry behind it > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "기체 상수, 8.31 <span class=\"unit\">J K-1 mol-1</span>",

    // The chemistry behind it > equation > dd
    "temperature <span class=\"unit\">K</span>": "온도 <span class=\"unit\">K</span>",

    // The chemistry behind it > equation > dd
    "pressure <span class=\"unit\">Pa</span>": "압력 <span class=\"unit\">Pa</span>",

    // The chemistry behind it > equation > dd
    "volume <span class=\"unit\">m3</span>": "부피 <span class=\"unit\">m3</span>",

    // The chemistry behind it > p
    "The <dfn data-def=\"The volume occupied by one mole of a gas at a stated temperature and pressure.\">molar volume</dfn> is the volume of one mole of gas, <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i>. For an ideal gas it is the same for every gas at the same temperature and pressure. At STP (273.15 K, 100 kPa) it is 22.7 dm<sup>3</sup> mol<sup>−1</sup>. A laboratory is warmer than 0 °C, so the molar volume there is larger, about 24 to 25 dm<sup>3</sup> mol<sup>−1</sup>. Work it out from <i>RT</i> / <i>P</i>; it is not in the data booklet.": "<dfn data-def=\"정해진 온도와 압력에서 기체 1몰이 차지하는 부피.\">몰 부피 <span class=\"en-term\">(molar volume)</span></dfn>는 기체 1몰의 부피로, <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i>이에요. 이상 기체에서는 온도와 압력이 같으면 모든 기체에서 같아요. STP(273.15 K, 100 kPa)에서는 22.7 dm<sup>3</sup> mol<sup>−1</sup>이에요. 실험실은 0 °C보다 따뜻하므로 몰 부피가 더 커서 약 24 ~ 25 dm<sup>3</sup> mol<sup>−1</sup>이에요. 이 값은 데이터 부클릿에 없으니 <i>RT</i> / <i>P</i>로 계산하세요.",

    // The chemistry behind it > data-def attribute
    "The volume occupied by one mole of a gas at a stated temperature and pressure.": "정해진 온도와 압력에서 기체 1몰이 차지하는 부피.",

    // The chemistry behind it > p
    "In Part A, magnesium reacts with excess hydrochloric acid. One mole of magnesium gives one mole of hydrogen:": "A 부분에서는 마그네슘이 과량의 염산과 반응해요. 마그네슘 1몰에서 수소 1몰이 생겨요:",

    // The chemistry behind it > p
    "<span class=\"chem\">Mg(s) + 2HCl(aq) -&gt; MgCl2(aq) + H2(g)</span>": "<span class=\"chem\">Mg(s) + 2HCl(aq) -&gt; MgCl2(aq) + H2(g)</span>",

    // The chemistry behind it > p
    "In Part B, a weighed sample of a liquid with a low boiling point is turned into vapour inside a heated gas syringe.": "B 부분에서는 질량을 잰 끓는점이 낮은 액체 시료를 가열한 기체 주사기 안에서 증기로 만들어요.",

    // The chemistry behind it > p
    "More on the topic pages: <a href=\"../topics/s1-5.html#pvnrt\">the ideal gas equation</a>, <a href=\"../topics/s1-5.html#molar-mass\">molar mass of a gas</a>, <a href=\"../topics/s1-5.html#molar-volume\">molar volume at STP</a> and <a href=\"../topics/s1-4.html#avogadro\">Avogadro’s law</a>.": "단원 페이지에서 더 알아봐요: <a href=\"../topics/s1-5.html#pvnrt\">이상 기체 방정식</a>, <a href=\"../topics/s1-5.html#molar-mass\">기체의 몰 질량</a>, <a href=\"../topics/s1-5.html#molar-volume\">STP에서의 몰 부피</a>, <a href=\"../topics/s1-4.html#avogadro\">아보가드로 법칙</a>.",

    // The chemistry behind it > table > caption
    "Unit traps in PV = nRT (R = 8.31 J K⁻¹ mol⁻¹)": "PV = nRT의 단위 함정 (R = 8.31 J K⁻¹ mol⁻¹)",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "Quantity": "양",

    // The chemistry behind it > table > th
    "Measured in": "측정 단위",

    // The chemistry behind it > table > th
    "Convert to": "바꿀 단위",

    // The chemistry behind it > table > th
    "How": "방법",

    // The chemistry behind it > table > th
    "volume": "부피",

    // The chemistry behind it > table > td
    "cm<sup>3</sup>": "cm<sup>3</sup>",

    // The chemistry behind it > table > td
    "× 10<sup>−6</sup> (divide by 1 000 000)": "× 10<sup>−6</sup> (1 000 000으로 나누기)",

    // The chemistry behind it > table > td
    "dm<sup>3</sup>": "dm<sup>3</sup>",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "pressure": "압력",

    // The chemistry behind it > table > td
    "kPa": "kPa",

    // The chemistry behind it > table > td
    "Pa": "Pa",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "temperature": "온도",

    // The chemistry behind it > key idea > p
    "kPa with dm<sup>3</sup> also works, because 1 kPa × 1 dm<sup>3</sup> = 1 J. What never works is mixing them: kPa with m<sup>3</sup>, or Pa with cm<sup>3</sup>.": "kPa와 dm<sup>3</sup>를 함께 써도 돼요. 1 kPa × 1 dm<sup>3</sup> = 1 J이기 때문이에요. 절대 안 되는 것은 섞어 쓰는 거예요: kPa와 m<sup>3</sup>, 또는 Pa와 cm<sup>3</sup>.",

    // Aim, variables and safety > data-toc attribute
    "Aim, variables, safety": "목적, 변인, 안전",

    // Aim, variables and safety > h2
    "Aim, variables and safety": "목적, 변인, 안전",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> Part A: find the molar volume of hydrogen at room temperature and pressure, and compare it with the ideal gas value. Part B: find the molar mass of an unknown volatile liquid and identify it.": "<strong>목적.</strong> A 부분: 실온·대기압에서 수소의 몰 부피를 구하고 이상 기체 값과 비교해요. B 부분: 모르는 휘발성 액체의 몰 질량을 구하고 그 액체가 무엇인지 알아내요.",

    // Aim, variables and safety > table > caption
    "Variables": "변인",

    // Aim, variables and safety > table > th
    "Variable": "변인",

    // Aim, variables and safety > table > th
    "Part A: magnesium and acid": "A 부분: 마그네슘과 산",

    // Aim, variables and safety > table > th
    "Part B: volatile liquid": "B 부분: 휘발성 액체",

    // Aim, variables and safety > table > th
    "independent": "독립 변인",

    // Aim, variables and safety > table > td
    "mass of magnesium": "마그네슘의 질량",

    // Aim, variables and safety > table > td
    "mass of liquid injected": "주입한 액체의 질량",

    // Aim, variables and safety > table > th
    "dependent": "종속 변인",

    // Aim, variables and safety > table > td
    "volume of hydrogen": "수소의 부피",

    // Aim, variables and safety > table > td
    "volume of vapour": "증기의 부피",

    // Aim, variables and safety > table > th
    "controlled": "통제 변인",

    // Aim, variables and safety > table > td
    "room temperature and pressure; acid in excess; the way the magnesium is added": "실온과 대기압; 과량의 산; 마그네슘을 넣는 방법",

    // Aim, variables and safety > table > td
    "temperature of the heating jacket; atmospheric pressure": "가열 재킷의 온도; 대기압",

    // Aim, variables and safety > h3
    "Equipment": "기구",

    // Aim, variables and safety > li
    "Part A: magnesium ribbon and sandpaper, balance (±0.001 g), 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> hydrochloric acid, conical flask, small test tube to stand inside it, bung and delivery tube, 100 cm<sup>3</sup> gas syringe (±0.5 cm<sup>3</sup>), thermometer (±0.5 °C), barometer or digital pressure sensor (±0.1 kPa)": "A 부분: 마그네슘 리본과 사포, 저울(±0.001 g), 1.0 mol dm<sup>−3</sup> 염산 50 cm<sup>3</sup>, 삼각 플라스크, 플라스크 안에 세울 작은 시험관, 고무마개와 유도관, 100 cm<sup>3</sup> 기체 주사기(±0.5 cm<sup>3</sup>), 온도계(±0.5 °C), 기압계 또는 디지털 압력 센서(±0.1 kPa)",

    // Aim, variables and safety > li
    "Part B: 100 cm<sup>3</sup> gas syringe in an electric heating jacket (or a steam jacket), self-sealing rubber cap, 1 cm<sup>3</sup> hypodermic syringe, balance (±0.001 g), thermometer, barometer, the unknown liquid": "B 부분: 전기 가열 재킷(또는 증기 재킷)에 넣은 100 cm<sup>3</sup> 기체 주사기, 자동 밀폐 고무 마개, 1 cm<sup>3</sup> 피하 주사기, 저울(±0.001 g), 온도계, 기압계, 모르는 액체",

    // Aim, variables and safety > p
    "Hydrogen is extremely flammable and forms explosive mixtures with air: no flames anywhere near Part A, and release the gas only into a well-ventilated room. Hydrochloric acid at 1.0 mol dm<sup>−3</sup> irritates the eyes and skin, so wear eye protection and rinse any splashes with plenty of water. The volatile liquids in Part B (such as propanone or hexane) are highly flammable and their vapours are harmful: use a fume cupboard, heat only with the electric or steam jacket, never a Bunsen burner. The heating jacket is hot enough to burn. Point the hypodermic needle away from people and put it in a sharps container after use.": "수소는 불이 아주 잘 붙고 공기와 폭발성 혼합물을 만들어요: A 부분 근처에는 불꽃을 절대 두지 말고, 기체는 환기가 잘되는 방에서만 내보내세요. 1.0 mol dm<sup>−3</sup> 염산은 눈과 피부를 자극하므로 보안경을 쓰고, 튀면 물로 충분히 씻으세요. B 부분의 휘발성 액체(propanone이나 hexane 등)는 불이 아주 잘 붙고 증기가 해로워요: 흄 후드를 쓰고, 전기 재킷이나 증기 재킷으로만 가열하고, 분젠 버너는 절대 쓰지 마세요. 가열 재킷은 화상을 입을 만큼 뜨거워요. 피하 주사기 바늘은 사람을 향하지 않게 하고, 다 쓰면 주사침 폐기 용기에 넣으세요.",

    // Method > h2
    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Method": "방법",

    // Method > h3
    "Part A: molar volume of hydrogen": "A 부분: 수소의 몰 부피",

    // Method > li
    "Rub a length of magnesium ribbon with sandpaper until it is shiny. <em>Why:</em> the dull coating is magnesium oxide. It adds to the mass but gives no hydrogen.": "마그네슘 리본을 반짝일 때까지 사포로 문질러요. <em>이유:</em> 칙칙한 막은 산화 마그네슘이에요. 질량에는 더해지지만 수소는 만들지 않아요.",

    // Method > li
    "Cut and weigh a piece of about 0.07 g. <em>Why:</em> at room conditions 0.1 g of magnesium gives about 100 cm<sup>3</sup> of hydrogen, which would fill the syringe.": "약 0.07 g이 되게 잘라서 질량을 재요. <em>이유:</em> 실온·대기압에서 마그네슘 0.1 g은 수소를 약 100 cm<sup>3</sup> 만들어서 주사기가 가득 차요.",

    // Method > li
    "Put 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> hydrochloric acid in the flask. Stand the magnesium in a small dry test tube inside the flask. <em>Why:</em> the acid is in large excess, so all the magnesium reacts.": "1.0 mol dm<sup>−3</sup> 염산 50 cm<sup>3</sup>를 플라스크에 넣어요. 마그네슘을 작은 마른 시험관에 넣어 플라스크 안에 세워요. <em>이유:</em> 산이 크게 과량이므로 마그네슘이 모두 반응해요.",

    // Method > li
    "Fit the bung joined to the gas syringe and check that the syringe reads zero. Then tip the flask so the acid reaches the magnesium. <em>Why:</em> no hydrogen escapes before the apparatus is sealed.": "기체 주사기에 연결된 고무마개를 끼우고 주사기 눈금이 0인지 확인해요. 그다음 플라스크를 기울여 산이 마그네슘에 닿게 해요. <em>이유:</em> 장치를 막기 전에 수소가 빠져나가지 않아요.",

    // Method > li
    "When the fizzing stops, wait until the flask has cooled to room temperature, then read the volume. <em>Why:</em> the reaction gives out heat, and warm gas takes up more space.": "거품이 멈추면 플라스크가 실온으로 식을 때까지 기다린 다음 부피를 읽어요. <em>이유:</em> 반응에서 열이 나오고, 따뜻한 기체는 부피를 더 많이 차지해요.",

    // Method > li
    "Record the room temperature and the atmospheric pressure. Repeat with different masses of magnesium.": "실온과 대기압을 기록해요. 마그네슘의 질량을 바꿔 가며 반복해요.",

    // Method > h3
    "Part B: molar mass of a volatile liquid": "B 부분: 휘발성 액체의 몰 질량",

    // Method > li
    "Heat the gas syringe in its jacket to a steady temperature at least 20 °C above the boiling point of the liquid. Let a few cm<sup>3</sup> of air warm up inside, and record this starting volume. <em>Why:</em> all the liquid must turn into vapour, and the vapour should be far from condensing.": "기체 주사기를 재킷에서 가열해 액체의 끓는점보다 적어도 20 °C 높은 일정한 온도로 맞춰요. 공기 몇 cm<sup>3</sup>를 안에서 데우고, 이 처음 부피를 기록해요. <em>이유:</em> 액체가 모두 증기가 되어야 하고, 증기가 응축되기 쉬운 상태에서 멀리 떨어져 있어야 해요.",

    // Method > li
    "Draw about 0.15 cm<sup>3</sup> of the liquid into the hypodermic syringe and weigh it. <em>Why:</em> the vapour must not overfill the gas syringe.": "피하 주사기에 액체를 약 0.15 cm<sup>3</sup> 빨아들이고 질량을 재요. <em>이유:</em> 증기가 기체 주사기를 넘치게 하면 안 돼요.",

    // Method > li
    "Push the needle through the self-sealing cap, inject the liquid, withdraw the needle and reweigh the hypodermic syringe at once. <em>Why:</em> the mass injected is the difference between the two weighings.": "바늘을 자동 밀폐 마개에 꽂아 액체를 주입하고, 바늘을 뺀 다음 바로 피하 주사기의 질량을 다시 재요. <em>이유:</em> 주입한 질량은 두 측정값의 차이예요.",

    // Method > li
    "Wait until the plunger stops moving. Record the final volume and the jacket temperature. <em>Why:</em> the vapour must reach the jacket temperature.": "피스톤이 멈출 때까지 기다려요. 마지막 부피와 재킷 온도를 기록해요. <em>이유:</em> 증기가 재킷 온도에 이르러야 해요.",

    // Method > li
    "Record the atmospheric pressure. Repeat with different volumes of liquid at the same jacket temperature.": "대기압을 기록해요. 같은 재킷 온도에서 액체의 부피를 바꿔 가며 반복해요.",

    // Method > key idea > p
    "Another common version uses butane from a gas lighter. Weigh the lighter, release the gas under water into an upturned measuring cylinder full of water, dry the lighter and weigh it again. The data are processed in exactly the same way.": "흔히 쓰는 다른 방법은 가스 라이터의 butane을 이용해요. 라이터의 질량을 재고, 물을 가득 채워 거꾸로 세운 눈금실린더 속으로 물속에서 기체를 내보낸 다음, 라이터를 말려 질량을 다시 재요. 자료는 똑같은 방법으로 처리해요.",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "실험 실행",

    // Run the experiment > p
    "These are simulated experiments. Every reading has a small random error, like a real one, and the apparatus has realistic precision. Some method choices add a systematic error on purpose. Try them, and see which way they push the result.": "이것은 시뮬레이션 실험이에요. 실제 실험처럼 모든 측정값에 작은 우연 오차가 있고, 기구의 정밀도도 실제와 비슷해요. 일부 방법 선택은 일부러 계통 오차를 더해요. 직접 해 보고 결과가 어느 쪽으로 밀리는지 살펴봐요.",

    // Run the experiment > widget > data-title attribute
    "Part A: magnesium and hydrochloric acid": "A 부분: 마그네슘과 염산",

    // Run the experiment > widget > data-kicker attribute
    "Virtual experiment": "가상 실험",

    // Run the experiment > widget > figcaption
    "Choose a mass of magnesium and run the reaction. Do at least three runs with different masses, using the careful method. Then change one method choice at a time and see how the molar volume changes. The table converts each run to a molar volume; the graph gives one from the gradient.": "마그네슘 질량을 고르고 반응시켜요. 조심스러운 방법으로 질량을 달리하여 적어도 3번 실험해요. 그다음 방법 선택을 하나씩 바꾸면서 몰 부피가 어떻게 변하는지 살펴봐요. 표는 실험마다 몰 부피로 바꿔 주고, 그래프는 기울기로 몰 부피를 하나 구해 줘요.",

    // Run the experiment > widget > data-title attribute
    "Part B: vaporize a volatile liquid": "B 부분: 휘발성 액체 기화하기",

    // Run the experiment > widget > figcaption
    "Choose an unknown liquid, set the jacket temperature and inject. Use at least three different volumes at the same temperature, then work out the molar mass before you reveal the liquid. Try a jacket temperature close to, or below, the boiling point and see what happens.": "모르는 액체를 고르고, 재킷 온도를 정하고, 주입해요. 같은 온도에서 적어도 3가지 다른 부피를 쓰고, 액체를 공개하기 전에 몰 질량을 계산해요. 재킷 온도를 끓는점 가까이 또는 그보다 낮게 해서 어떻게 되는지도 살펴봐요.",

    // Processing the data > h2
    "Processing the data": "자료 처리",

    // Processing the data > worked example > h3
    "Molar volume of hydrogen": "수소의 몰 부피",

    // Processing the data > worked example > p
    "0.0742 g of magnesium reacts with excess hydrochloric acid. The hydrogen has a volume of 76.5 cm<sup>3</sup> at 23.0 °C and 100.6 kPa. Calculate the molar volume of hydrogen under these conditions, and convert it to STP.": "마그네슘 0.0742 g이 과량의 염산과 반응해요. 수소의 부피는 23.0 °C, 100.6 kPa에서 76.5 cm<sup>3</sup>예요. 이 조건에서 수소의 몰 부피를 계산하고 (calculate), STP 값으로 바꾸시오.",

    // Processing the data > worked example > data-title attribute
    "Amount of magnesium": "마그네슘의 양",

    // Processing the data > worked example > p
    "Use <i>A</i><sub>r</sub>(Mg) = 24.31 from the data booklet.": "데이터 부클릿의 <i>A</i><sub>r</sub>(Mg) = 24.31을 써요.",

    // Processing the data > worked example > data-title attribute
    "Amount of hydrogen": "수소의 양",

    // Processing the data > worked example > p
    "The equation shows 1 mol of Mg gives 1 mol of H<sub>2</sub>.": "반응식에 따르면 Mg 1 mol에서 H<sub>2</sub> 1 mol이 생겨요.",

    // Processing the data > worked example > data-title attribute
    "Molar volume at room conditions": "실온·대기압에서의 몰 부피",

    // Processing the data > worked example > p
    "Convert the volume to dm<sup>3</sup> to get the usual unit.": "흔히 쓰는 단위로 나타내기 위해 부피를 dm<sup>3</sup>로 바꿔요.",

    // Processing the data > worked example > data-title attribute
    "Convert to STP": "STP 값으로 바꾸기",

    // Processing the data > worked example > p
    "Use the combined gas law, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> / <i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> / <i>T</i><sub>2</sub>, with temperatures in kelvin. STP is 100 kPa and 273.15 K.": "보일-샤를 법칙 <i>P</i><sub>1</sub><i>V</i><sub>1</sub> / <i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> / <i>T</i><sub>2</sub>를 쓰고, 온도는 켈빈으로 써요. STP는 100 kPa, 273.15 K예요.",

    // Processing the data > worked example > data-title attribute
    "Compare with the data booklet": "데이터 부클릿 값과 비교하기",

    // Processing the data > worked example > p
    "Percentage error = |experimental − literature| ÷ literature × 100.": "백분율 오차 = |실험값 − 문헌값| ÷ 문헌값 × 100.",

    // Processing the data > worked example > maths line
    "percentage error = (23.26 − 22.7) ÷ 22.7 × 100 = 2.4 %": "백분율 오차 = (23.26 − 22.7) ÷ 22.7 × 100 = 2.4 %",

    // Processing the data > worked example > p
    "25.1 dm<sup>3</sup> mol<sup>−1</sup> at 23.0 °C and 100.6 kPa, which is 23.3 dm<sup>3</sup> mol<sup>−1</sup> at STP: 2.4 % above 22.7 dm<sup>3</sup> mol<sup>−1</sup>.": "23.0 °C, 100.6 kPa에서 25.1 dm<sup>3</sup> mol<sup>−1</sup>이고, STP에서는 23.3 dm<sup>3</sup> mol<sup>−1</sup>이에요: 22.7 dm<sup>3</sup> mol<sup>−1</sup>보다 2.4 % 커요.",

    // Processing the data > try it > p
    "0.0585 g of magnesium gives 59.0 cm<sup>3</sup> of hydrogen with excess acid. Calculate the molar volume of hydrogen under the conditions of the experiment, in dm<sup>3</sup> mol<sup>−1</sup>.": "마그네슘 0.0585 g이 과량의 산과 반응해 수소 59.0 cm<sup>3</sup>를 만들어요. 실험 조건에서 수소의 몰 부피를 dm<sup>3</sup> mol<sup>−1</sup> 단위로 계산하시오 (calculate).",

    // Processing the data > try it > li
    "Find the amount of magnesium. It equals the amount of hydrogen.": "마그네슘의 양을 구해요. 이 값은 수소의 양과 같아요.",

    // Processing the data > try it > li
    "<i>n</i> = 0.0585 ÷ 24.31. Then divide the volume in dm<sup>3</sup> by that amount.": "<i>n</i> = 0.0585 ÷ 24.31. 그다음 dm<sup>3</sup> 단위 부피를 이 양으로 나눠요.",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "예제 2",

    // Processing the data > worked example > h3
    "Molar mass of a volatile liquid": "휘발성 액체의 몰 질량",

    // Processing the data > worked example > p
    "A hypodermic syringe weighs 12.483 g before and 12.331 g after injecting a liquid into a gas syringe at 99.0 °C. The gas syringe reading rises from 4.5 cm<sup>3</sup> to 84.0 cm<sup>3</sup>. The atmospheric pressure is 101.0 kPa. Calculate the molar mass of the liquid.": "피하 주사기의 질량이 99.0 °C의 기체 주사기에 액체를 주입하기 전에는 12.483 g, 주입한 뒤에는 12.331 g이에요. 기체 주사기 눈금은 4.5 cm<sup>3</sup>에서 84.0 cm<sup>3</sup>로 올라가요. 대기압은 101.0 kPa예요. 이 액체의 몰 질량을 계산하시오 (calculate).",

    // Processing the data > worked example > data-title attribute
    "Find the mass and the volume": "질량과 부피 구하기",

    // Processing the data > worked example > p
    "Both come from the difference between two readings.": "둘 다 두 측정값의 차이로 구해요.",

    // Processing the data > worked example > data-title attribute
    "Convert to SI units": "SI 단위로 바꾸기",

    // Processing the data > worked example > p
    "<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> needs Pa, m<sup>3</sup> and K.": "<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>에는 Pa, m<sup>3</sup>, K가 필요해요.",

    // Processing the data > worked example > data-title attribute
    "Substitute into M = mRT / PV": "M = mRT / PV에 대입하기",

    // Processing the data > worked example > p
    "Keep the mass in grams, so the molar mass comes out in g mol<sup>−1</sup>.": "질량을 그램으로 두면 몰 질량이 g mol<sup>−1</sup> 단위로 나와요.",

    // Processing the data > worked example > data-title attribute
    "Round and identify": "반올림하고 물질 알아내기",

    // Processing the data > worked example > p
    "The mass, 0.152 g, has 3 significant figures.": "질량 0.152 g은 유효 숫자 3자리예요.",

    // Processing the data > worked example > maths line
    "propanone, <span class=\"chem\">C3H6O</span>: <i>M</i> = 58.09 g mol<sup>−1</sup>; percentage error = 0.8 %": "propanone, <span class=\"chem\">C3H6O</span>: <i>M</i> = 58.09 g mol<sup>−1</sup>; 백분율 오차 = 0.8 %",

    // Processing the data > worked example > p
    "58.5 g mol<sup>−1</sup>, which fits propanone (58.09 g mol<sup>−1</sup>).": "58.5 g mol<sup>−1</sup>이고, propanone(58.09 g mol<sup>−1</sup>)과 맞아요.",

    // Processing the data > try it > p
    "0.103 g of a liquid is injected into a gas syringe at 98.5 °C. The volume of vapour is 36.5 cm<sup>3</sup> and the pressure is 100.2 kPa. Calculate the molar mass of the liquid, in g mol<sup>−1</sup>.": "액체 0.103 g을 98.5 °C의 기체 주사기에 주입해요. 증기의 부피는 36.5 cm<sup>3</sup>이고 압력은 100.2 kPa예요. 이 액체의 몰 질량을 g mol<sup>−1</sup> 단위로 계산하시오 (calculate).",

    // Processing the data > try it > li
    "Convert first: cm<sup>3</sup> to m<sup>3</sup>, kPa to Pa, °C to K.": "먼저 단위를 바꿔요: cm<sup>3</sup>는 m<sup>3</sup>로, kPa는 Pa로, °C는 K로.",

    // Processing the data > try it > maths line
    "<i>M</i> = 318.1 ÷ 3.657 = 87.0 g mol<sup>−1</sup> (hexane, <span class=\"chem\">C6H14</span>, is 86.20 g mol<sup>−1</sup>)": "<i>M</i> = 318.1 ÷ 3.657 = 87.0 g mol<sup>−1</sup> (hexane, <span class=\"chem\">C6H14</span>는 86.20 g mol<sup>−1</sup>)",

    // Processing the data > h3
    "Using a graph instead of one run": "실험 한 번 대신 그래프 쓰기",

    // Processing the data > p
    "Plot the volume of gas against the mass, for several runs, and draw a line of best fit through the origin. A graph averages out random errors and shows up an odd run. The gradient is the volume per gram.": "여러 번 실험한 결과로 질량에 대한 기체 부피 그래프를 그리고, 원점을 지나는 가장 잘 맞는 직선을 그어요. 그래프는 우연 오차를 평균 내 주고, 이상한 실험 결과를 드러내 줘요. 기울기는 1그램당 부피예요.",

    // Processing the data > li
    "Part A: molar volume = gradient (cm<sup>3</sup> g<sup>−1</sup>) × 24.31 g mol<sup>−1</sup> ÷ 1000.": "A 부분: 몰 부피 = 기울기 (cm<sup>3</sup> g<sup>−1</sup>) × 24.31 g mol<sup>−1</sup> ÷ 1000.",

    // Processing the data > li
    "Part B: <i>V</i> / <i>m</i> = <i>RT</i> / <i>PM</i>, so <i>M</i> = <i>RT</i> ÷ (<i>P</i> × gradient), with the gradient in m<sup>3</sup> g<sup>−1</sup>.": "B 부분: <i>V</i> / <i>m</i> = <i>RT</i> / <i>PM</i>이므로 <i>M</i> = <i>RT</i> ÷ (<i>P</i> × 기울기)이고, 기울기는 m<sup>3</sup> g<sup>−1</sup> 단위로 써요.",

    // Processing the data > p
    "If your best line clearly misses the origin, a similar amount of gas was lost (or gained) in every run. That is a sign of a systematic error.": "가장 잘 맞는 직선이 원점에서 확실히 벗어나면, 매번 비슷한 양의 기체를 잃었(또는 얻었)다는 뜻이에요. 계통 오차가 있다는 신호예요.",

    // Processing the data > common mistake > p
    "Using <i>P</i> in kPa with <i>V</i> in cm<sup>3</sup> makes <i>PV</i> 1000 times too big, so the molar mass comes out 1000 times too small. Using °C instead of K is just as serious. If a molar mass looks impossible (0.06 g mol<sup>−1</sup>, or 2000 g mol<sup>−1</sup>), check the units first.": "<i>P</i>를 kPa로, <i>V</i>를 cm<sup>3</sup>로 쓰면 <i>PV</i>가 1000배 너무 커지므로 몰 질량은 1000배 너무 작게 나와요. K 대신 °C를 쓰는 것도 똑같이 심각해요. 몰 질량이 말이 안 되는 값(0.06 g mol<sup>−1</sup>이나 2000 g mol<sup>−1</sup>)이면 먼저 단위를 확인하세요.",

    // Uncertainties > h2
    "Uncertainties": "불확도",

    // Uncertainties > p
    "For a product or a quotient such as <i>M</i> = <i>mRT</i> / <i>PV</i>, add the percentage uncertainties of the measured quantities. <i>R</i> is a constant and adds nothing. A mass or a volume found by difference uses two readings, so add their absolute uncertainties first.": "<i>M</i> = <i>mRT</i> / <i>PV</i>처럼 곱이나 몫에서는 측정한 양의 백분율 불확도를 더해요. <i>R</i>은 상수이므로 더할 것이 없어요. 차이로 구한 질량이나 부피는 두 번 읽은 값이므로 먼저 두 절대 불확도를 더해요.",

    // Uncertainties > table > caption
    "Propagating uncertainties for worked example 2": "예제 2의 불확도 전파",

    // Uncertainties > table > th
    "Value": "값",

    // Uncertainties > table > th
    "Absolute uncertainty": "절대 불확도",

    // Uncertainties > table > th
    "Percentage uncertainty": "백분율 불확도",

    // Uncertainties > table > th
    "mass, two weighings": "질량, 두 번 측정",

    // Uncertainties > table > th
    "volume, two readings": "부피, 두 번 읽기",

    // Uncertainties > table > td
    "79.5 cm<sup>3</sup>": "79.5 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±1.0 cm<sup>3</sup>": "±1.0 cm<sup>3</sup>",

    // Uncertainties > table > td
    "101.0 kPa": "101.0 kPa",

    // Uncertainties > table > td
    "±0.1 kPa": "±0.1 kPa",

    // Uncertainties > table > th
    "molar mass": "몰 질량",

    // Uncertainties > table > td
    "58.5 g mol<sup>−1</sup>": "58.5 g mol<sup>−1</sup>",

    // Uncertainties > table > td
    "±1.6 g mol<sup>−1</sup>": "±1.6 g mol<sup>−1</sup>",

    // Uncertainties > p
    "So <span class=\"mono\">M = 58.5 ± 1.6 g mol<sup>−1</sup></span>, or <span class=\"mono\">59 ± 2 g mol<sup>−1</sup></span> with the uncertainty to one significant figure. The percentage error compared with propanone is 0.8 %, smaller than the 2.8 % uncertainty. The result agrees with propanone within experimental uncertainty. The mass and the volume dominate: a larger sample, within the range of the syringe, would reduce both.": "따라서 <span class=\"mono\">M = 58.5 ± 1.6 g mol<sup>−1</sup></span>이고, 불확도를 유효 숫자 1자리로 쓰면 <span class=\"mono\">59 ± 2 g mol<sup>−1</sup></span>예요. propanone과 비교한 백분율 오차는 0.8 %로, 불확도 2.8 %보다 작아요. 결과는 실험 불확도 범위 안에서 propanone과 일치해요. 질량과 부피가 불확도의 대부분을 차지해요: 주사기 범위 안에서 시료를 더 크게 하면 둘 다 줄어요.",

    // Uncertainties > h3
    "Part A: is the difference bigger than the uncertainty?": "A 부분: 차이가 불확도보다 클까요?",

    // Uncertainties > p
    "In worked example 1, the mass (0.0742 ± 0.001 g) has an uncertainty of 1.3 % and the volume (76.5 ± 0.5 cm<sup>3</sup>, one reading from zero) 0.7 %. The molar volume therefore has an uncertainty of about 2.0 %: <span class=\"mono\">25.1 ± 0.5 dm<sup>3</sup> mol<sup>−1</sup></span>.": "예제 1에서 질량(0.0742 ± 0.001 g)의 불확도는 1.3 %이고, 부피(76.5 ± 0.5 cm<sup>3</sup>, 0에서 한 번 읽음)는 0.7 %예요. 따라서 몰 부피의 불확도는 약 2.0 %예요: <span class=\"mono\">25.1 ± 0.5 dm<sup>3</sup> mol<sup>−1</sup></span>.",

    // Uncertainties > p
    "The ideal gas value at 23.0 °C and 100.6 kPa is <i>RT</i> / <i>P</i> = 8.31 × 296.15 ÷ 100.6 = 24.5 dm<sup>3</sup> mol<sup>−1</sup>. The measured value is 2.5 % higher, which is more than the 2.0 % uncertainty. Random error alone does not explain it, so a systematic error is likely. The table in the next section suggests which.": "23.0 °C, 100.6 kPa에서 이상 기체 값은 <i>RT</i> / <i>P</i> = 8.31 × 296.15 ÷ 100.6 = 24.5 dm<sup>3</sup> mol<sup>−1</sup>이에요. 측정값은 2.5 % 더 커서, 불확도 2.0 %보다 차이가 커요. 우연 오차만으로는 설명할 수 없으므로 계통 오차가 있을 가능성이 커요. 다음 절의 표에서 어떤 오차인지 짐작할 수 있어요.",

    // Uncertainties > not needed for IB > p
    "Hydrogen collected over aqueous acid (or butane collected over water) also contains some water vapour, so the gas volume is a little larger than the volume of dry gas. Correcting for this uses the vapour pressure of water and partial pressures, which are not in the IB guide. You only need to recognize it as a source of error that makes the volume too large.": "염산 수용액 위에서 모은 수소(또는 물 위에서 모은 butane)에는 수증기도 조금 들어 있으므로, 기체 부피가 마른 기체의 부피보다 조금 커요. 이것을 보정하려면 물의 증기 압력과 부분 압력을 써야 하는데, 이는 IB 지침에 없어요. 부피를 너무 크게 만드는 오차 원인이라는 것만 알아보면 돼요.",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "오차와 개선",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "평가: 오차와 개선",

    // Evaluation: errors and improvements > p
    "A random error scatters the results; repeats and a graph reduce its effect. A systematic error pushes every result the same way; only a change of method fixes it. For each error below, follow the chain: what happens to the measured quantity, then what happens to the result.": "우연 오차는 결과를 흩어지게 해요. 반복 실험과 그래프로 영향을 줄일 수 있어요. 계통 오차는 모든 결과를 같은 방향으로 밀어내요. 방법을 바꿔야만 고칠 수 있어요. 아래의 각 오차마다 순서대로 따라가 봐요: 측정한 양이 어떻게 되는지, 그다음 결과가 어떻게 되는지.",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in finding molar volume and molar mass": "몰 부피와 몰 질량을 구할 때의 오차 원인",

    // Evaluation: errors and improvements > table > th
    "Source of error": "오차 원인",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "결과에 미치는 영향",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "현실적인 개선 방법",

    // Evaluation: errors and improvements > table > td
    "Part A: oxide coating on the magnesium (systematic).": "A 부분: 마그네슘 표면의 산화물 막 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "Part of the mass is magnesium oxide, which gives no hydrogen. Less gas forms than the mass suggests, so the molar volume is too low.": "질량의 일부는 수소를 만들지 않는 산화 마그네슘이에요. 질량으로 예상한 것보다 기체가 적게 생기므로 몰 부피가 너무 낮아요.",

    // Evaluation: errors and improvements > table > td
    "Clean the ribbon with sandpaper until it is shiny, just before weighing.": "질량을 재기 직전에 리본을 반짝일 때까지 사포로 닦기.",

    // Evaluation: errors and improvements > table > td
    "Part A: hydrogen escapes before the bung is fitted (systematic).": "A 부분: 고무마개를 끼우기 전에 수소가 빠져나감 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The volume measured is too small, so the molar volume is too low.": "측정한 부피가 너무 작으므로 몰 부피가 너무 낮아요.",

    // Evaluation: errors and improvements > table > td
    "Keep the magnesium in a small tube (or on a thread) above the acid and tip the flask only after sealing it.": "마그네슘을 산 위의 작은 시험관 속(또는 실에 매달아)에 두고, 막은 다음에야 플라스크를 기울이기.",

    // Evaluation: errors and improvements > table > td
    "Part A: volume read while the gas is still warm (systematic).": "A 부분: 기체가 아직 따뜻할 때 부피를 읽음 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The reaction is exothermic. Warm gas takes up more space, so the molar volume is too high.": "이 반응은 발열 반응이에요. 따뜻한 기체는 부피를 더 많이 차지하므로 몰 부피가 너무 높아요.",

    // Evaluation: errors and improvements > table > td
    "Wait until the flask is back at room temperature, then read the volume.": "플라스크가 실온으로 돌아올 때까지 기다렸다가 부피 읽기.",

    // Evaluation: errors and improvements > table > td
    "Part A: the hydrogen contains water vapour (systematic).": "A 부분: 수소에 수증기가 섞임 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The volume includes some water vapour, so the molar volume is too high.": "부피에 수증기가 조금 포함되므로 몰 부피가 너무 높아요.",

    // Evaluation: errors and improvements > table > td
    "Note it as a limitation. (The correction is beyond the guide; see the box above.)": "한계점으로 적어 두기. (보정은 IB 지침 범위 밖이에요. 위의 상자를 보세요.)",

    // Evaluation: errors and improvements > table > td
    "Part A: some hydrogen dissolves in the acid (systematic, small).": "A 부분: 수소 일부가 산에 녹음 (계통 오차, 작음).",

    // Evaluation: errors and improvements > table > td
    "The volume is slightly too small, so the molar volume is slightly too low.": "부피가 조금 너무 작으므로 몰 부피가 조금 너무 낮아요.",

    // Evaluation: errors and improvements > table > td
    "Hydrogen is only slightly soluble, so this effect is very small. Use the smallest volume of acid that is still in excess.": "수소는 아주 조금만 녹으므로 이 영향은 아주 작아요. 과량이 되는 범위에서 가장 적은 부피의 산 쓰기.",

    // Evaluation: errors and improvements > table > td
    "Part B: the vapour is close to its boiling point (systematic).": "B 부분: 증기가 끓는점에 가까움 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The attractions between the molecules are no longer negligible, so the vapour takes up less space than an ideal gas would. <i>V</i> is too small, so <i>M</i> is too high.": "분자 사이의 인력을 더 이상 무시할 수 없으므로, 증기가 이상 기체보다 부피를 적게 차지해요. <i>V</i>가 너무 작으므로 <i>M</i>이 너무 높아요.",

    // Evaluation: errors and improvements > table > td
    "Set the jacket at least 20–30 °C above the boiling point of the liquid.": "재킷 온도를 액체의 끓는점보다 적어도 20–30 °C 높게 맞추기.",

    // Evaluation: errors and improvements > table > td
    "Part B: not all of the liquid vaporizes (systematic).": "B 부분: 액체가 모두 기화하지 않음 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "<i>V</i> is too small for the mass recorded, so <i>M</i> is too high.": "기록한 질량에 비해 <i>V</i>가 너무 작으므로 <i>M</i>이 너무 높아요.",

    // Evaluation: errors and improvements > table > td
    "Use a higher jacket temperature or a smaller sample. Check that no drops remain.": "재킷 온도를 더 높이거나 시료를 더 적게 쓰기. 방울이 남아 있지 않은지 확인하기.",

    // Evaluation: errors and improvements > table > td
    "Part B: liquid evaporates from the needle between weighing and injecting (systematic).": "B 부분: 질량을 잰 뒤 주입하기 전에 바늘에서 액체가 증발함 (계통 오차).",

    // Evaluation: errors and improvements > table > td
    "The mass recorded is larger than the mass that reached the syringe, so <i>M</i> is too high.": "기록한 질량이 실제로 주사기에 들어간 질량보다 크므로 <i>M</i>이 너무 높아요.",

    // Evaluation: errors and improvements > table > td
    "Inject straight after the first weighing and reweigh at once.": "첫 측정 직후에 주입하고 바로 다시 재기.",

    // Evaluation: errors and improvements > table > td
    "Both: friction in the gas syringe, and reading the scale (random).": "두 부분 모두: 기체 주사기의 마찰, 눈금 읽기 (우연 오차).",

    // Evaluation: errors and improvements > table > td
    "Volumes scatter, so the result is less precise.": "부피가 흩어지므로 결과가 덜 정밀해요.",

    // Evaluation: errors and improvements > table > td
    "Turn the plunger gently before reading; do several runs and use a graph.": "읽기 전에 피스톤을 살짝 돌리기; 여러 번 실험하고 그래프 쓰기.",

    // Evaluation: errors and improvements > table > td
    "Both: small masses on a ±0.001 g balance (random).": "두 부분 모두: ±0.001 g 저울로 잰 작은 질량 (우연 오차).",

    // Evaluation: errors and improvements > table > td
    "A large percentage uncertainty in <i>m</i> (1.3 % for 0.07 g).": "<i>m</i>의 백분율 불확도가 커요 (0.07 g에서 1.3 %).",

    // Evaluation: errors and improvements > table > td
    "Use the largest sample the syringe allows, or a ±0.0001 g balance.": "주사기가 허용하는 가장 큰 시료를 쓰거나, ±0.0001 g 저울 쓰기.",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "Markschemes want the direction <em>and</em> the reason. “The molar volume is too low because some hydrogen escaped before the bung was fitted, so the volume measured was too small” earns the mark. “Gas escaped” on its own usually does not.": "채점 기준은 방향<em>과</em> 이유를 원해요. “마개를 끼우기 전에 수소 일부가 빠져나가서 측정한 부피가 너무 작았으므로 몰 부피가 너무 낮다”는 점수를 받아요. “기체가 빠져나갔다”만 쓰면 보통 점수를 받지 못해요.",

    // Exam practice > h2
    "Exam practice": "시험 대비 연습",

    // Exam practice > p
    "Paper 1B style questions on this practical: calculations, unit traps, uncertainties and evaluation. All the questions are original.": "이 실험에 대한 Paper 1B 형식 문제예요: 계산, 단위 함정, 불확도, 평가. 모든 문제는 이 사이트에서 새로 만든 문제예요.",

    // Exam practice > data-title attribute
    "Molar mass of a gas lab: exam practice": "기체의 몰 질량 실험: 시험 대비 연습",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "No readings yet.": "아직 측정값이 없어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Mass of magnesium ribbon to cut": "자를 마그네슘 리본의 질량",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ribbon surface": "리본 표면",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Cleaned with sandpaper": "사포로 닦음",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Dull, as supplied": "받은 그대로, 칙칙함",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Adding the magnesium": "마그네슘 넣기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Tipped in after the bung is fitted": "마개를 끼운 뒤 기울여 넣기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Dropped in, then the bung fitted": "떨어뜨린 뒤 마개 끼우기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Volume read": "부피 읽기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "After cooling to room temperature": "실온으로 식힌 뒤",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "As soon as the fizzing stops": "거품이 멈추자마자",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Run the reaction": "반응시키기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Delete last run": "마지막 실험 지우기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last run deleted.": "마지막 실험을 지웠어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "New day": "다른 날",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A new day: new room temperature and pressure, and an empty results table.": "다른 날: 실온과 기압이 새로 바뀌고, 결과 표가 비었어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copy data": "자료 복사",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m(Mg) / g (±0.001)": "m(Mg) / g (±0.001)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V(H₂) / cm³ (±0.5)": "V(H₂) / cm³ (±0.5)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "θ / °C (±0.5)": "θ / °C (±0.5)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "P / kPa (±0.1)": "P / kPa (±0.1)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copied {n} runs as tab-separated text. Paste them into a spreadsheet.": "실험 {n}번의 결과를 탭으로 구분한 텍스트로 복사했어요. 스프레드시트에 붙여 넣으세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copying is blocked in this browser. Select the table with the mouse and copy it instead.": "이 브라우저에서는 복사가 막혀 있어요. 마우스로 표를 선택해서 대신 복사하세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Room conditions": "실온·대기압 조건",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last run": "마지막 실험",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar volume, mean of runs": "몰 부피, 실험 평균",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar volume from the gradient": "기울기로 구한 몰 부피",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ideal gas value at room conditions": "실온·대기압에서의 이상 기체 값",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Note": "메모",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A conical flask of hydrochloric acid with a small tube of magnesium inside, sealed with a bung. A delivery tube leads to a horizontal gas syringe. The plunger moves out as hydrogen is produced. The readings are in the readout.": "염산이 든 삼각 플라스크 안에 마그네슘이 든 작은 시험관이 있고, 고무마개로 막혀 있음. 유도관이 수평으로 놓인 기체 주사기로 이어짐. 수소가 생기면 피스톤이 밖으로 밀려남. 측정값은 결과 창에 나옴.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "HCl(aq), excess": "HCl(aq), 과량",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gas syringe": "기체 주사기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "reacting…": "반응 중…",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "That is plenty of runs. Delete one or start a new day.": "실험을 충분히 많이 했어요. 하나를 지우거나 다른 날로 넘어가세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The magnesium is reacting. Hydrogen pushes the plunger out.": "마그네슘이 반응하고 있어요. 수소가 피스톤을 밖으로 밀어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The plunger reached the end of the syringe and gas escaped. This run cannot be used: use less magnesium.": "피스톤이 주사기 끝까지 가서 기체가 빠져나갔어요. 이 실험은 쓸 수 없어요: 마그네슘을 더 적게 쓰세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Recorded m = {m} g, V = {V} cm³.": "기록함: m = {m} g, V = {V} cm³.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Runs": "실험 결과",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Best-fit line": "가장 잘 맞는 직선",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ideal gas": "이상 기체",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Graph of the volume of hydrogen against the mass of magnesium for each run, with a best-fit line through the origin and the line expected for an ideal gas at room conditions.": "실험마다 마그네슘 질량에 대한 수소 부피를 나타낸 그래프. 원점을 지나는 가장 잘 맞는 직선과, 실온·대기압에서 이상 기체일 때 예상되는 직선이 있음.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m(Mg) / g": "m(Mg) / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V(H₂) / cm³": "V(H₂) / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "{v} dm³ mol⁻¹ (at STP: {s} dm³ mol⁻¹, data booklet {b})": "{v} dm³ mol⁻¹ (STP에서: {s} dm³ mol⁻¹, 데이터 부클릿 {b})",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Run the reaction at least once.": "적어도 한 번 반응시키세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gradient = {k} cm³ g⁻¹, so molar volume = {v} dm³ mol⁻¹": "기울기 = {k} cm³ g⁻¹, 따라서 몰 부피 = {v} dm³ mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Do at least three runs with different masses.": "질량을 달리하여 적어도 3번 실험하세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "cleaned": "닦음",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "dull": "칙칙함",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "tipped in": "기울여 넣음",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "dropped in": "떨어뜨림",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "cooled": "식힘",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "warm": "따뜻함",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "n(H₂) / mol": "n(H₂) / mol",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V<sub>m</sub> / dm³ mol⁻¹": "V<sub>m</sub> / dm³ mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Choose a mass of magnesium and run the reaction. The acid is in excess, so all the magnesium reacts.": "마그네슘 질량을 고르고 반응시키세요. 산이 과량이므로 마그네슘이 모두 반응해요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "propanone": "propanone",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "hexane": "hexane",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ethanol": "ethanol",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Liquid": "액체",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Reveal the liquid": "액체 공개",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid A": "모르는 액체 A",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid B": "모르는 액체 B",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid C": "모르는 액체 C",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Heating-jacket temperature": "가열 재킷 온도",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Volume of liquid drawn up": "빨아들인 액체의 부피",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject and read": "주입하고 읽기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Delete last reading": "마지막 측정값 지우기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last reading deleted.": "마지막 측정값을 지웠어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Hide the liquid": "액체 숨기기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A new day: a new atmospheric pressure, and an empty results table.": "다른 날: 대기압이 새로 바뀌고, 결과 표가 비었어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m before / g": "처음 m / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m after / g": "나중 m / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V before / cm³": "처음 V / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V after / cm³": "나중 V / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copied {n} readings as tab-separated text. Paste them into a spreadsheet.": "측정값 {n}개를 탭으로 구분한 텍스트로 복사했어요. 스프레드시트에 붙여 넣으세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Atmospheric pressure": "대기압",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last injection": "마지막 주입",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar mass, mean": "몰 질량, 평균",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar mass from the gradient": "기울기로 구한 몰 질량",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The liquid": "액체",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A gas syringe inside a heating jacket. A hypodermic syringe injects the liquid through a self-sealing rubber cap on the nozzle. The vapour pushes the plunger out. The readings are in the readout.": "가열 재킷 안의 기체 주사기. 피하 주사기가 노즐의 자동 밀폐 고무 마개를 통해 액체를 주입함. 증기가 피스톤을 밖으로 밀어냄. 측정값은 결과 창에 나옴.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "heating jacket": "가열 재킷",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "hypodermic": "피하 주사기",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "That is plenty of readings. Delete one or start a new day.": "측정값이 충분히 많아요. 하나를 지우거나 다른 날로 넘어가세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The plunger reached the end of the syringe and vapour escaped. This reading cannot be used: inject less liquid.": "피스톤이 주사기 끝까지 가서 증기가 빠져나갔어요. 이 측정값은 쓸 수 없어요: 액체를 더 적게 주입하세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Drops of liquid are still visible in the syringe. Not all of the liquid has vaporized at this temperature.": "주사기 안에 아직 액체 방울이 보여요. 이 온도에서는 액체가 모두 기화하지 않았어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Recorded. The vapour pushed the plunger from {a} cm³ to {b} cm³.": "기록했어요. 증기가 피스톤을 {a} cm³에서 {b} cm³까지 밀었어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject the liquid to take a reading.": "측정하려면 액체를 주입하세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm = {m} g, but the syringe overflowed.": "Δm = {m} g, 하지만 주사기가 넘쳤어요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm = {m} g, ΔV = {v} cm³, θ = {th} °C": "Δm = {m} g, ΔV = {v} cm³, θ = {th} °C",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gradient = {k} cm³ g⁻¹, so M = {M} g mol⁻¹": "기울기 = {k} cm³ g⁻¹, 따라서 M = {M} g mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject at least three different volumes at the same jacket temperature.": "같은 재킷 온도에서 적어도 3가지 다른 부피를 주입하세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "{name}, {formula}, M = {M} g mol⁻¹, boiling point {bp} °C.": "{name}, {formula}, M = {M} g mol⁻¹, 끓는점 {bp} °C.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Your percentage error: {e} %.": "내 백분율 오차: {e} %.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Hidden. Work out M first, then reveal it.": "숨겨져 있어요. 먼저 M을 계산한 다음 공개하세요.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Injections": "주입 결과",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Graph of the volume of vapour against the mass of liquid injected, with a best-fit line through the origin.": "주입한 액체의 질량에 대한 증기 부피 그래프와 원점을 지나는 가장 잘 맞는 직선.",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm / g": "Δm / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ΔV / cm³": "ΔV / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm / g (±0.002)": "Δm / g (±0.002)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ΔV / cm³ (±1.0)": "ΔV / cm³ (±1.0)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "M / g mol⁻¹": "M / g mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Choose a liquid, set the jacket temperature and inject. Keep the jacket temperature the same for every injection you want on one graph.": "액체를 고르고, 재킷 온도를 정하고, 주입하세요. 한 그래프에 넣을 주입은 모두 같은 재킷 온도로 하세요.",

  }
});
