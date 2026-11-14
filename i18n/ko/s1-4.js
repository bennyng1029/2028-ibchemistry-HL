/* s1-4 — ko translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-4', {
  strings: {

    // page title (browser tab)
    "1.4 Counting particles by mass: the mole | Structure Lab": "1.4 질량으로 입자 세기: 몰 | Structure Lab",

    // Counting particles by mass: the mole > page header > p
    "Structure 1.4": "Structure 1.4",

    // Counting particles by mass: the mole > page header > h1
    "Counting particles by mass: the mole": "질량으로 입자 세기: 몰",

    // Counting particles by mass: the mole > page header > span
    "How do we quantify matter on the atomic scale?": "원자 수준에서 물질의 양은 어떻게 나타낼까요?",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 것",

    // What you need to be able to do > p
    "This topic is almost all calculation, and every later calculation in the course is built on it. Tick each item when you can do it without looking at your notes. All of it is SL and HL core. There is no Additional HL content in 1.4.": "이 단원은 거의 다 계산이에요. 그리고 이 과정에서 나오는 이후의 모든 계산이 이 단원을 바탕으로 해요. 노트를 보지 않고 할 수 있게 되면 각 항목에 체크하세요. 모두 SL과 HL 공통 내용이에요. 1.4에는 AHL(HL 추가 내용)이 없어요.",

    // What you need to be able to do > checklist > span
    "Convert an amount in moles to a number of atoms, molecules, ions or formula units, and back, using the Avogadro constant.": "아보가드로 상수를 이용해 몰로 나타낸 양을 원자, 분자, 이온 또는 화학식 단위의 개수로 바꾸고, 거꾸로도 바꾸기.",

    // What you need to be able to do > checklist > span
    "Work out a relative formula mass, <i>M</i><sub>r</sub>, from relative atomic masses, and say why <i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> have no units.": "상대 원자 질량으로 상대 화학식량 <i>M</i><sub>r</sub>를 구하고, <i>A</i><sub>r</sub>와 <i>M</i><sub>r</sub>에 단위가 없는 이유 말하기.",

    // What you need to be able to do > checklist > span
    "Solve problems that link mass, amount and number of particles using <i>n</i> = <i>m</i> / <i>M</i>.": "<i>n</i> = <i>m</i> / <i>M</i>을 이용해 질량, 물질의 양, 입자 수를 연결하는 문제 풀기.",

    // What you need to be able to do > checklist > span
    "Go from percentage composition by mass to an empirical formula, and from a formula to percentage composition.": "질량 백분율 조성에서 실험식 구하기, 그리고 화학식에서 질량 백분율 조성 구하기.",

    // What you need to be able to do > checklist > span
    "Find an empirical formula from mass data, including combustion data and heating a hydrate.": "연소 자료와 수화물 가열 자료를 포함해, 질량 자료에서 실험식 구하기.",

    // What you need to be able to do > checklist > span
    "Find a molecular formula from an empirical formula and a molar mass.": "실험식과 몰 질량에서 분자식 구하기.",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>n</i> = <i>CV</i>, and convert between <span class=\"unit\">mol dm-3</span> and <span class=\"unit\">g dm-3</span>.": "<i>n</i> = <i>CV</i>로 문제를 풀고, <span class=\"unit\">mol dm-3</span>와 <span class=\"unit\">g dm-3</span> 사이를 변환하기.",

    // What you need to be able to do > checklist > span
    "Describe how to prepare a standard solution and a dilution, and how a calibration curve gives an unknown concentration.": "표준 용액과 희석 용액을 만드는 방법, 그리고 검량선으로 모르는 농도를 구하는 방법 서술하기.",

    // What you need to be able to do > checklist > span
    "State Avogadro’s law and use the mole ratio of an equation to find volumes of reacting gases.": "아보가드로 법칙을 말하고, 반응식의 몰 비로 반응하는 기체의 부피 구하기.",

    // Before any mole calculation: three questions > data-toc attribute
    "Before you calculate": "계산하기 전에",

    // Before any mole calculation: three questions > h2
    "Before any mole calculation: three questions": "몰 계산 전에: 세 가지 질문",

    // Before any mole calculation: three questions > p
    "Most lost marks in this topic do not come from hard chemistry. They come from pressing calculator buttons before you know where you are going. So use the same routine every time, even when the question looks short.": "이 단원에서 잃는 점수는 대부분 어려운 화학 때문이 아니에요. 어디로 가는지 알기도 전에 계산기 버튼부터 누르기 때문이에요. 그러니 문제가 짧아 보여도 매번 같은 순서를 따르세요.",

    // Before any mole calculation: three questions > li
    "<strong>What am I given, and in what units?</strong><span>Write each value with its unit and say what it is: a mass in g, a volume in cm<sup>3</sup>, a concentration in mol dm<sup>−3</sup>, a number of particles.</span>": "<strong>무엇이 주어졌고, 단위는 무엇인가?</strong><span>각 값을 단위와 함께 쓰고 그것이 무엇인지 적으세요: g 단위의 질량, cm<sup>3</sup> 단위의 부피, mol dm<sup>−3</sup> 단위의 농도, 입자의 개수.</span>",

    // Before any mole calculation: three questions > li
    "<strong>What do I want, and in what units?</strong><span>Underline it in the question. “Amount” always means moles. “Number of atoms” is not the same as “number of molecules”.</span>": "<strong>무엇을 구해야 하고, 단위는 무엇인가?</strong><span>문제에서 밑줄을 그으세요. “Amount(양)”는 언제나 몰을 뜻해요. “원자의 개수”와 “분자의 개수”는 같지 않아요.</span>",

    // Before any mole calculation: three questions > li
    "<strong>Which link connects them?</strong><span>Every route goes through <b>moles</b>. Pick the relationship that turns what you have into moles, then the one that turns moles into what you want.</span>": "<strong>어떤 관계식이 둘을 연결하는가?</strong><span>모든 경로는 <b>몰</b>을 거쳐요. 가진 것을 몰로 바꾸는 관계식을 고르고, 그다음 몰을 원하는 것으로 바꾸는 관계식을 고르세요.</span>",

    // Before any mole calculation: three questions > key idea > p
    "There are only three relationships to choose from in this topic: <span class=\"mono\"><i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub></span> for particles, <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for mass, and <span class=\"mono\"><i>n</i> = <i>C</i> × <i>V</i></span> for solutions. The mole is the meeting point of all three.": "이 단원에서 고를 관계식은 3가지뿐이에요: 입자 수에는 <span class=\"mono\"><i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub></span>, 질량에는 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>, 용액에는 <span class=\"mono\"><i>n</i> = <i>C</i> × <i>V</i></span>. 몰은 이 세 가지가 모두 만나는 곳이에요.",

    // Before any mole calculation: three questions > h3
    "Get the units right first": "먼저 단위를 맞추세요",

    // Before any mole calculation: three questions > p
    "The relationships only work in their own units: mass in <span class=\"unit\">g</span>, volume of solution in <span class=\"unit\">dm3</span>. Questions often give <span class=\"unit\">cm3</span> or <span class=\"unit\">mg</span> instead. Convert before you substitute, and write the conversion down as its own line.": "관계식은 정해진 단위에서만 성립해요: 질량은 <span class=\"unit\">g</span>, 용액의 부피는 <span class=\"unit\">dm3</span>. 문제에서는 대신 <span class=\"unit\">cm3</span>나 <span class=\"unit\">mg</span>를 주는 경우가 많아요. 대입하기 전에 변환하고, 변환 과정을 따로 한 줄로 써 두세요.",

    // Before any mole calculation: three questions > widget > data-title attribute
    "Unit-conversion strip": "단위 변환 띠",

    // Before any mole calculation: three questions > widget > figcaption
    "Type a value and choose its unit. Each step to the right is a unit 1000 times bigger, so the number gets 1000 times smaller.": "값을 입력하고 단위를 고르세요. 오른쪽으로 한 칸 갈 때마다 단위가 1000배 커지므로, 숫자는 1000배 작아져요.",

    // Before any mole calculation: three questions > common mistake > p
    "Putting a volume in <span class=\"unit\">cm3</span> straight into <i>n</i> = <i>CV</i> gives an answer 1000 times too big. A quick check: 25 cm<sup>3</sup> is a small amount of liquid, so in dm<sup>3</sup> it must be a small number, 0.025.": "<span class=\"unit\">cm3</span> 단위의 부피를 그대로 <i>n</i> = <i>CV</i>에 넣으면 답이 1000배 너무 커져요. 빠른 확인법: 25 cm<sup>3</sup>는 적은 양의 액체이므로, dm<sup>3</sup>로 나타내면 작은 수인 0.025가 되어야 해요.",

    // Before any mole calculation: three questions > try it > p
    "A pipette delivers 25.0 cm<sup>3</sup> of solution. What is this volume in dm<sup>3</sup>?": "피펫으로 용액 25.0 cm<sup>3</sup>를 옮겨요. 이 부피는 몇 dm<sup>3</sup>일까요?",

    // Before any mole calculation: three questions > try it > li
    "A dm<sup>3</sup> is bigger than a cm<sup>3</sup>. Will the number get bigger or smaller?": "dm<sup>3</sup>는 cm<sup>3</sup>보다 커요. 숫자는 커질까요, 작아질까요?",

    // Before any mole calculation: three questions > try it > li
    "Divide by 1000: <span class=\"mono\">25.0 ÷ 1000</span>. Keep three significant figures.": "1000으로 나누세요: <span class=\"mono\">25.0 ÷ 1000</span>. 유효 숫자 3자리를 유지하세요.",

    // Before any mole calculation: three questions > try it > p
    "The zero at the end matters. It shows the value is known to three significant figures.": "끝의 0이 중요해요. 이 값이 유효 숫자 3자리까지 알려져 있다는 것을 보여 줘요.",

    // Before any mole calculation: three questions > h3
    "Significant figures: a short guide": "유효 숫자: 짧은 안내",

    // Before any mole calculation: three questions > p
    "<dfn data-def=\"The digits in a number that carry real information about its precision. Leading zeros do not count.\">Significant figures</dfn> (s.f.) tell the reader how precisely a value is known. Your answer cannot be more precise than the data you started with.": "<dfn data-def=\"수의 정밀도에 대한 실제 정보를 담고 있는 숫자. 앞에 오는 0은 세지 않아요.\">유효 숫자 <span class=\"en-term\">(significant figures)</span></dfn>(s.f.)는 어떤 값이 얼마나 정밀하게 알려져 있는지 알려 줘요. 답은 처음 주어진 자료보다 더 정밀할 수 없어요.",

    // Before any mole calculation: three questions > data-def attribute
    "The digits in a number that carry real information about its precision. Leading zeros do not count.": "수의 정밀도에 대한 실제 정보를 담고 있는 숫자. 앞에 오는 0은 세지 않아요.",

    // Before any mole calculation: three questions > table > caption
    "Counting significant figures": "유효 숫자 세기",

    // Before any mole calculation: three questions > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Value": "값",

    // Before any mole calculation: three questions > table > th
    "Why": "이유",

    // Before any mole calculation: three questions > table > td
    "Zeros after the decimal point at the end count.": "소수점 뒤 끝에 있는 0은 세요.",

    // Before any mole calculation: three questions > table > td
    "Zeros at the front only place the decimal point. They do not count.": "앞에 있는 0은 소수점 위치만 정해요. 세지 않아요.",

    // Before any mole calculation: three questions > table > td
    "A volumetric flask is precise, so its volume is often given to 4 s.f.": "부피 플라스크는 정밀하므로, 그 부피는 흔히 유효 숫자 4자리(4 s.f.)로 나타내요.",

    // Before any mole calculation: three questions > table > td
    "In scientific notation, count the digits in front of the “× 10”.": "과학적 표기법에서는 “× 10” 앞의 숫자만 세요.",

    // Before any mole calculation: three questions > li
    "Keep the full value in your calculator through every step. Rounding in the middle can change the last digit of the answer.": "모든 단계에서 계산기에 전체 값을 그대로 두세요. 중간에 반올림하면 답의 마지막 자리가 달라질 수 있어요.",

    // Before any mole calculation: three questions > li
    "Round once, at the end. Look at the data in the question, find the value with the fewest significant figures, and give your answer to that many. In most questions that is 3.": "반올림은 마지막에 한 번만 하세요. 문제의 자료를 보고 유효 숫자가 가장 적은 값을 찾아, 답을 그 자릿수로 나타내세요. 대부분의 문제에서는 3자리예요.",

    // Before any mole calculation: three questions > li
    "Counted and defined numbers do not limit you: the 2 in <span class=\"chem\">H2O</span>, the coefficients in an equation, the 1000 in a unit conversion.": "세어서 얻은 수와 정의된 수는 유효 숫자를 제한하지 않아요: <span class=\"chem\">H2O</span>의 2, 반응식의 계수, 단위 변환의 1000이 그래요.",

    // Before any mole calculation: three questions > li
    "Write the unit after every final answer.": "최종 답 뒤에는 항상 단위를 쓰세요.",

    // Before any mole calculation: three questions > exam tip (shown in English + translation) > p
    "IB markschemes give their answers to the precision of the data: usually 3 s.f., and 4 s.f. when the data are given to 4. Match the data and you are safe. A mark is not normally taken off for significant figures unless the question asks for a set number, so do not panic about them. Show your working too. If you slip in one step, the later steps can still earn marks when the method is correct.": "IB 채점 기준은 자료의 정밀도에 맞춰 답을 줘요: 보통 유효 숫자 3자리(3 s.f.)이고, 자료가 4자리로 주어지면 4자리(4 s.f.)예요. 자료에 맞추면 안전해요. 문제에서 자릿수를 정해 주지 않는 한 보통 유효 숫자 때문에 점수를 깎지 않으니 너무 걱정하지 마세요. 풀이 과정도 보이세요. 한 단계에서 실수해도 방법이 맞으면 그 뒤 단계에서 점수를 받을 수 있어요.",

    // The mole and the Avogadro constant > data-toc attribute
    "The mole": "몰",

    // The mole and the Avogadro constant > h2
    "The mole and the Avogadro constant": "몰과 아보가드로 상수",

    // The mole and the Avogadro constant > p
    "Eggs are sold by the dozen, and paper by the ream of 500 sheets. When things are small and you need a lot of them, you count in groups. Atoms are so small that the group has to be enormous.": "달걀은 다스(12개) 단위로, 종이는 500장 묶음인 연(ream) 단위로 팔아요. 물건이 작고 많이 필요할 때는 묶음으로 세요. 원자는 너무 작아서 그 묶음이 엄청나게 커야 해요.",

    // The mole and the Avogadro constant > p
    "The <dfn data-def=\"The SI unit of amount of substance. One mole contains exactly the number of elementary entities given by the Avogadro constant.\">mole</dfn> (symbol <span class=\"unit\">mol</span>) is the SI unit of <dfn data-def=\"The quantity that counts particles in groups of the Avogadro constant. Symbol n, unit mol.\">amount of substance</dfn>, symbol <i>n</i>. One mole contains exactly the number of elementary entities given by the <dfn data-def=\"The number of elementary entities in one mole. Symbol NA. In the data booklet as 6.02 × 10^23 mol^-1.\">Avogadro constant</dfn>, <i>N</i><sub>A</sub>.": "<dfn data-def=\"물질의 양의 SI 단위. 1몰에는 아보가드로 상수만큼의 기본 입자가 정확히 들어 있어요.\">몰 <span class=\"en-term\">(mole)</span></dfn>(기호 <span class=\"unit\">mol</span>)은 <dfn data-def=\"입자를 아보가드로 상수만큼씩 묶어서 세는 양. 기호 n, 단위 mol.\">물질의 양 <span class=\"en-term\">(amount of substance)</span></dfn>(기호 <i>n</i>)의 SI 단위예요. 1몰에는 <dfn data-def=\"1몰에 들어 있는 기본 입자의 수. 기호 NA. 데이터 부클릿에는 6.02 × 10^23 mol^-1로 나와 있어요.\">아보가드로 상수 <span class=\"en-term\">(Avogadro constant)</span></dfn> <i>N</i><sub>A</sub>만큼의 기본 입자가 정확히 들어 있어요.",

    // The mole and the Avogadro constant > data-def attribute
    "The SI unit of amount of substance. One mole contains exactly the number of elementary entities given by the Avogadro constant.": "물질의 양의 SI 단위. 1몰에는 아보가드로 상수만큼의 기본 입자가 정확히 들어 있어요.",

    // The mole and the Avogadro constant > data-def attribute
    "The quantity that counts particles in groups of the Avogadro constant. Symbol n, unit mol.": "입자를 아보가드로 상수만큼씩 묶어서 세는 양. 기호 n, 단위 mol.",

    // The mole and the Avogadro constant > data-def attribute
    "The number of elementary entities in one mole. Symbol NA. In the data booklet as 6.02 × 10^23 mol^-1.": "1몰에 들어 있는 기본 입자의 수. 기호 NA. 데이터 부클릿에는 6.02 × 10^23 mol^-1로 나와 있어요.",

    // The mole and the Avogadro constant > p
    "An <dfn data-def=\"The particle being counted: an atom, a molecule, an ion, an electron, any other particle, or a specified group of particles such as a formula unit.\">elementary entity</dfn> is whatever particle you are counting. It may be an atom, a molecule, an ion, an electron, or a specified group of particles such as one <dfn data-def=\"The group of ions shown by the formula of an ionic compound, for example one Na+ and one Cl- for NaCl.\">formula unit</dfn> of <span class=\"chem\">NaCl</span>. So always say <em>what</em> you have a mole of.": "<dfn data-def=\"세고 있는 입자: 원자, 분자, 이온, 전자, 그 밖의 입자, 또는 화학식 단위처럼 정해진 입자 묶음.\">기본 입자 <span class=\"en-term\">(elementary entity)</span></dfn>는 여러분이 세고 있는 입자예요. 원자, 분자, 이온, 전자일 수도 있고, <span class=\"chem\">NaCl</span>의 <dfn data-def=\"이온 결합 화합물의 화학식이 나타내는 이온 묶음. 예를 들어 NaCl에서는 Na+ 1개와 Cl- 1개.\">화학식 단위 <span class=\"en-term\">(formula unit)</span></dfn> 하나처럼 정해진 입자 묶음일 수도 있어요. 그러니 <em>무엇</em>의 몰인지 항상 말하세요.",

    // The mole and the Avogadro constant > data-def attribute
    "The particle being counted: an atom, a molecule, an ion, an electron, any other particle, or a specified group of particles such as a formula unit.": "세고 있는 입자: 원자, 분자, 이온, 전자, 그 밖의 입자, 또는 화학식 단위처럼 정해진 입자 묶음.",

    // The mole and the Avogadro constant > data-def attribute
    "The group of ions shown by the formula of an ionic compound, for example one Na+ and one Cl- for NaCl.": "이온 결합 화합물의 화학식이 나타내는 이온 묶음. 예를 들어 NaCl에서는 Na+ 1개와 Cl- 1개.",

    // The mole and the Avogadro constant > data booklet note > p
    "<i>N</i><sub>A</sub> = <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>. The unit mol<sup>−1</sup> means “per mole”. You do not need to memorize the value, but you must know when to use it.": "<i>N</i><sub>A</sub> = <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>. 단위 mol<sup>−1</sup>은 “1몰당”이라는 뜻이에요. 값을 외울 필요는 없지만, 언제 쓰는지는 알아야 해요.",

    // The mole and the Avogadro constant > equation > dd
    "number of particles (no unit)": "입자 수 (단위 없음)",

    // The mole and the Avogadro constant > equation > dd
    // Molar mass: weighing instead of counting > equation > dd
    "amount of substance <span class=\"unit\">mol</span>": "물질의 양 <span class=\"unit\">mol</span>",

    // The mole and the Avogadro constant > equation > dt
    "N<sub>A</sub>": "N<sub>A</sub>",

    // The mole and the Avogadro constant > equation > dd
    "Avogadro constant <span class=\"unit\">mol-1</span>": "아보가드로 상수 <span class=\"unit\">mol-1</span>",

    // The mole and the Avogadro constant > p
    "This relationship is not printed in the data booklet, so learn it. It follows from the definition. Moles to particles: multiply by <i>N</i><sub>A</sub>. Particles to moles: divide by <i>N</i><sub>A</sub>. A number of particles is always huge and an amount in moles is usually small, so check that your answer went the right way.": "이 관계식은 데이터 부클릿에 나와 있지 않으니 외워 두세요. 정의에서 바로 나와요. 몰에서 입자 수로: <i>N</i><sub>A</sub>를 곱해요. 입자 수에서 몰로: <i>N</i><sub>A</sub>로 나눠요. 입자 수는 항상 엄청나게 크고 몰로 나타낸 양은 대개 작으니, 답이 맞는 방향으로 갔는지 확인하세요.",

    // The mole and the Avogadro constant > widget > data-title attribute
    "How big is a mole?": "1몰은 얼마나 클까요?",

    // The mole and the Avogadro constant > widget > figcaption
    "The line is a powers-of-ten scale, so one mole is not “a bit more” than the other markers: it is a million times more than the number of seconds since the Big Bang. Choose a substance and a mass to see how many particles an ordinary sample holds.": "이 선은 10의 거듭제곱 눈금이에요. 그래서 1몰은 다른 표시보다 “조금 더 많은” 것이 아니에요: 빅뱅 이후 흐른 초의 수보다 백만 배나 많아요. 물질과 질량을 골라 평범한 시료에 입자가 몇 개 들어 있는지 보세요.",

    // The mole and the Avogadro constant > h3
    "Atoms inside molecules, ions inside formulas": "분자 속의 원자, 화학식 속의 이온",

    // The mole and the Avogadro constant > p
    "A formula is a recipe for one particle, and also for one mole of them. One molecule of <span class=\"chem\">NH3</span> contains 1 nitrogen atom and 3 hydrogen atoms. So one mole of <span class=\"chem\">NH3</span> molecules contains 1 mol of N atoms and 3 mol of H atoms.": "화학식은 입자 하나의 조리법이자, 그 입자 1몰의 조리법이기도 해요. <span class=\"chem\">NH3</span> 분자 1개에는 질소 원자 1개와 수소 원자 3개가 들어 있어요. 그래서 <span class=\"chem\">NH3</span> 분자 1몰에는 N 원자 1 mol과 H 원자 3 mol이 들어 있어요.",

    // The mole and the Avogadro constant > p
    "The same works for ionic compounds. One formula unit of <span class=\"chem\">MgCl2</span> contains one <span class=\"chem\">Mg^2+</span> ion and two <span class=\"chem\">Cl-</span> ions. So 1 mol of <span class=\"chem\">MgCl2</span> contains 1 mol of <span class=\"chem\">Mg^2+</span> ions, 2 mol of <span class=\"chem\">Cl-</span> ions, and 3 mol of ions in total.": "이온 결합 화합물도 마찬가지예요. <span class=\"chem\">MgCl2</span>의 화학식 단위 하나에는 <span class=\"chem\">Mg^2+</span> 이온 1개와 <span class=\"chem\">Cl-</span> 이온 2개가 들어 있어요. 그래서 <span class=\"chem\">MgCl2</span> 1 mol에는 <span class=\"chem\">Mg^2+</span> 이온 1 mol, <span class=\"chem\">Cl-</span> 이온 2 mol, 모두 합쳐 이온 3 mol이 들어 있어요.",

    // The mole and the Avogadro constant > h3
    // Relative atomic mass and relative formula mass > h3
    // Molar mass: weighing instead of counting > h3
    // Concentration of solutions > h3
    // Avogadro’s law and reacting gas volumes > h3
    "Method in words": "말로 정리한 방법",

    // The mole and the Avogadro constant > li
    "Name the particle the question asks about: molecules, atoms of one element, all atoms, or ions.": "문제에서 묻는 입자가 무엇인지 말하세요: 분자, 한 원소의 원자, 모든 원자, 또는 이온.",

    // The mole and the Avogadro constant > li
    "If it asks about atoms or ions inside a formula, multiply the amount of the compound by the subscript first.": "화학식 속의 원자나 이온을 묻는다면, 먼저 화합물의 양에 아래 첨자를 곱하세요.",

    // The mole and the Avogadro constant > li
    "Multiply moles by <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span> to get the number, or divide a number by it to get moles.": "몰에 <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>를 곱해 개수를 구하거나, 개수를 이 값으로 나눠 몰을 구하세요.",

    // The mole and the Avogadro constant > li
    "Give the answer in scientific notation, to the significant figures of the data.": "답은 과학적 표기법으로, 자료의 유효 숫자에 맞춰 쓰세요.",

    // The mole and the Avogadro constant > worked example > h3
    "Moles to number of molecules": "몰에서 분자 수로",

    // The mole and the Avogadro constant > worked example > p
    "Calculate the number of molecules in 0.350 mol of carbon dioxide, <span class=\"chem\">CO2</span>.": "이산화 탄소 <span class=\"chem\">CO2</span> 0.350 mol에 들어 있는 분자 수를 계산하시오 (calculate).",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Ask the three questions": "세 가지 질문하기",

    // The mole and the Avogadro constant > worked example > p
    "Given: an amount, 0.350 mol. Wanted: a number of molecules. Link: the Avogadro constant.": "주어진 것: 양 0.350 mol. 구할 것: 분자 수. 연결 고리: 아보가드로 상수.",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Substitute with units": "단위와 함께 대입하기",

    // The mole and the Avogadro constant > worked example > p
    "mol × mol<sup>−1</sup> cancels, leaving a pure number. That is what a count should be.": "mol × mol<sup>−1</sup>은 약분되어 단위 없는 수만 남아요. 개수라면 그래야 해요.",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Round to the data": "자료에 맞춰 반올림하기",

    // The mole and the Avogadro constant > worked example > p
    "0.350 and 6.02 both have 3 significant figures, so the answer has 3.": "0.350과 6.02는 둘 다 유효 숫자가 3자리이므로, 답도 3자리예요.",

    // The mole and the Avogadro constant > worked example > maths line
    "<i>N</i> = <b>2.11 × 10<sup>23</sup> molecules</b>": "<i>N</i> = <b>분자 2.11 × 10<sup>23</sup>개</b>",

    // The mole and the Avogadro constant > worked example > p
    "2.11 × 10<sup>23</sup> molecules of CO<sub>2</sub>": "CO<sub>2</sub> 분자 2.11 × 10<sup>23</sup>개",

    // The mole and the Avogadro constant > worked example > h3
    "Atoms inside a molecule": "분자 속의 원자",

    // The mole and the Avogadro constant > worked example > p
    "Calculate the number of hydrogen atoms in 0.125 mol of ammonia, <span class=\"chem\">NH3</span>.": "암모니아 <span class=\"chem\">NH3</span> 0.125 mol에 들어 있는 수소 원자 수를 계산하시오 (calculate).",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Spot what is being counted": "무엇을 세는지 찾기",

    // The mole and the Avogadro constant > worked example > p
    "The question asks for hydrogen atoms, not ammonia molecules. Each molecule holds 3 of them.": "문제는 암모니아 분자가 아니라 수소 원자를 묻고 있어요. 분자 하나에 수소 원자가 3개 들어 있어요.",

    // The mole and the Avogadro constant > worked example > maths line
    "1 mol NH<sub>3</sub> contains 3 mol H atoms": "NH<sub>3</sub> 1 mol에는 H 원자 3 mol이 들어 있음",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Find the amount of hydrogen atoms": "수소 원자의 양 구하기",

    // The mole and the Avogadro constant > worked example > p
    "Use the subscript from the formula as a multiplier while you are still in moles.": "아직 몰 단계에 있을 때 화학식의 아래 첨자를 곱하는 수로 쓰세요.",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Convert moles to a number": "몰을 개수로 바꾸기",

    // The mole and the Avogadro constant > worked example > p
    "Now it is the same step as before: multiply by the Avogadro constant.": "이제 앞과 같은 단계예요: 아보가드로 상수를 곱하세요.",

    // The mole and the Avogadro constant > worked example > p
    "The data have 3 significant figures. The 3 from the formula is an exact count and does not limit the answer.": "자료는 유효 숫자가 3자리예요. 화학식에서 나온 3은 정확한 개수이므로 답의 자릿수를 제한하지 않아요.",

    // The mole and the Avogadro constant > worked example > maths line
    "<i>N</i>(H) = <b>2.26 × 10<sup>23</sup> atoms</b>": "<i>N</i>(H) = <b>원자 2.26 × 10<sup>23</sup>개</b>",

    // The mole and the Avogadro constant > worked example > p
    "2.26 × 10<sup>23</sup> hydrogen atoms": "수소 원자 2.26 × 10<sup>23</sup>개",

    // The mole and the Avogadro constant > common mistake > p
    "“One mole of oxygen” is unclear. One mole of <span class=\"chem\">O2</span> molecules contains two moles of O atoms. Hydrogen, nitrogen, oxygen, fluorine, chlorine, bromine and iodine exist as two-atom molecules, so check whether the question means atoms or molecules.": "“산소 1몰”은 뜻이 분명하지 않아요. <span class=\"chem\">O2</span> 분자 1몰에는 O 원자 2몰이 들어 있어요. 수소, 질소, 산소, 플루오린, 염소, 브로민, 아이오딘은 원자 2개로 된 분자로 존재하니, 문제가 원자를 말하는지 분자를 말하는지 확인하세요.",

    // The mole and the Avogadro constant > try it > p
    "A piece of copper wire contains 1.50 × 10<sup>22</sup> copper atoms. Calculate the amount of copper, in mol.": "구리 선 한 조각에 구리 원자 1.50 × 10<sup>22</sup>개가 들어 있어요. 구리의 양을 mol 단위로 계산하시오 (calculate).",

    // The mole and the Avogadro constant > try it > li
    "You have a number of particles and you want moles. Will the answer be bigger or smaller than 1?": "입자 수를 알고 몰을 구하려고 해요. 답은 1보다 클까요, 작을까요?",

    // The mole and the Avogadro constant > try it > li
    "Divide by the Avogadro constant: <span class=\"mono\">1.50 × 10<sup>22</sup> ÷ 6.02 × 10<sup>23</sup></span>.": "아보가드로 상수로 나누세요: <span class=\"mono\">1.50 × 10<sup>22</sup> ÷ 6.02 × 10<sup>23</sup></span>.",

    // The mole and the Avogadro constant > try it > p
    "To 3 significant figures: <strong>0.0249 mol</strong>. There are fewer atoms than one mole, so the amount is less than 1.": "유효 숫자 3자리로: <strong>0.0249 mol</strong>. 원자 수가 1몰보다 적으므로 양은 1보다 작아요.",

    // The mole and the Avogadro constant > try it > data-label attribute
    "Number of ions": "이온의 수",

    // The mole and the Avogadro constant > try it > p
    "Calculate the total number of ions in 0.200 mol of calcium chloride, <span class=\"chem\">CaCl2</span>.": "염화 칼슘 <span class=\"chem\">CaCl2</span> 0.200 mol에 들어 있는 이온의 총수를 계산하시오 (calculate).",

    // The mole and the Avogadro constant > try it > li
    "How many ions are in one formula unit of <span class=\"chem\">CaCl2</span>? Count the <span class=\"chem\">Ca^2+</span> and the <span class=\"chem\">Cl-</span> ions.": "<span class=\"chem\">CaCl2</span>의 화학식 단위 하나에 이온이 몇 개 있을까요? <span class=\"chem\">Ca^2+</span> 이온과 <span class=\"chem\">Cl-</span> 이온을 세어 보세요.",

    // The mole and the Avogadro constant > try it > li
    "There are 3 ions per formula unit, so <i>n</i>(ions) = 3 × 0.200 mol. Then multiply by <span class=\"mono\">6.02 × 10<sup>23</sup></span>.": "화학식 단위 하나에 이온이 3개 있으므로 <i>n</i>(이온) = 3 × 0.200 mol이에요. 그다음 <span class=\"mono\">6.02 × 10<sup>23</sup></span>을 곱하세요.",

    // The mole and the Avogadro constant > try it > maths line
    "<i>n</i>(ions) = 3 × 0.200 mol = 0.600 mol": "<i>n</i>(이온) = 3 × 0.200 mol = 0.600 mol",

    // The mole and the Avogadro constant > try it > p
    "To 3 significant figures: <strong>3.61 × 10<sup>23</sup> ions</strong>.": "유효 숫자 3자리로: <strong>이온 3.61 × 10<sup>23</sup>개</strong>.",

    // The mole and the Avogadro constant > not needed for IB > p
    "You may see an older definition: “the amount that contains as many particles as 12 g of carbon-12”. The IB guide does not use it. It defines the mole by a fixed number of particles. That number is exactly 6.02214076 × 10<sup>23</sup>, but you only ever use the data booklet value, 6.02 × 10<sup>23</sup>. You do not need the history of the change.": "예전 정의를 볼 수도 있어요: “탄소-12 12 g에 들어 있는 입자 수만큼의 입자를 포함하는 양”. IB 지침에서는 이 정의를 쓰지 않아요. IB는 정해진 입자 수로 몰을 정의해요. 그 수는 정확히 6.02214076 × 10<sup>23</sup>이지만, 계산에는 언제나 데이터 부클릿 값 6.02 × 10<sup>23</sup>만 써요. 정의가 바뀐 역사는 몰라도 돼요.",

    // The mole and the Avogadro constant > data-title attribute
    "The mole: quick check": "몰: 빠른 확인",

    // Relative atomic mass and relative formula mass > data-toc attribute
    "Relative masses": "상대 질량",

    // Relative atomic mass and relative formula mass > h2
    "Relative atomic mass and relative formula mass": "상대 원자 질량과 상대 화학식량",

    // Relative atomic mass and relative formula mass > p
    "One atom has a mass of around 10<sup>−23</sup> g. Numbers like that are awkward, so chemists compare atoms with each other instead. The standard is the carbon-12 atom, <span class=\"chem\">^12C</span>, which is given a mass of exactly 12 units.": "원자 하나의 질량은 약 10<sup>−23</sup> g이에요. 이런 수는 다루기 불편해서, 화학자들은 대신 원자끼리 비교해요. 기준은 탄소-12 원자 <span class=\"chem\">^12C</span>이고, 그 질량을 정확히 12로 정해요.",

    // Relative atomic mass and relative formula mass > p
    "The <dfn data-def=\"The weighted average mass of the atoms of an element, taking isotopic abundance into account, relative to one-twelfth of the mass of an atom of carbon-12. It has no units.\">relative atomic mass</dfn>, <i>A</i><sub>r</sub>, of an element is the weighted average mass of its atoms compared with one-twelfth of the mass of a carbon-12 atom. It is an average because most elements are a mixture of isotopes (see topic 1.2). That is why chlorine has <i>A</i><sub>r</sub> = 35.45, although no single chlorine atom has that mass.": "원소의 <dfn data-def=\"동위 원소의 존재 비율을 고려한 원소 원자들의 가중 평균 질량을 탄소-12 원자 질량의 1/12과 비교한 값. 단위가 없어요.\">상대 원자 질량 <span class=\"en-term\">(relative atomic mass)</span></dfn> <i>A</i><sub>r</sub>는 그 원자들의 가중 평균 질량을 탄소-12 원자 질량의 12분의 1과 비교한 값이에요. 평균인 이유는 대부분의 원소가 동위 원소의 혼합물이기 때문이에요(1.2 단원 참고). 그래서 염소 원자 중 그 질량을 가진 원자는 하나도 없는데도 염소의 <i>A</i><sub>r</sub> = 35.45예요.",

    // Relative atomic mass and relative formula mass > data-def attribute
    "The weighted average mass of the atoms of an element, taking isotopic abundance into account, relative to one-twelfth of the mass of an atom of carbon-12. It has no units.": "동위 원소의 존재 비율을 고려한 원소 원자들의 가중 평균 질량을 탄소-12 원자 질량의 1/12과 비교한 값. 단위가 없어요.",

    // Relative atomic mass and relative formula mass > p
    "The <dfn data-def=\"The sum of the relative atomic masses of all the atoms in a formula. It has no units.\">relative formula mass</dfn>, <i>M</i><sub>r</sub>, is the sum of the <i>A</i><sub>r</sub> values of every atom in the formula. For a substance made of molecules it is also called the relative molecular mass.": "<dfn data-def=\"화학식에 있는 모든 원자의 상대 원자 질량을 더한 값. 단위가 없어요.\">상대 화학식량 <span class=\"en-term\">(relative formula mass)</span></dfn> <i>M</i><sub>r</sub>는 화학식에 있는 모든 원자의 <i>A</i><sub>r</sub> 값을 더한 값이에요. 분자로 이루어진 물질에서는 상대 분자 질량(분자량)이라고도 해요.",

    // Relative atomic mass and relative formula mass > data-def attribute
    "The sum of the relative atomic masses of all the atoms in a formula. It has no units.": "화학식에 있는 모든 원자의 상대 원자 질량을 더한 값. 단위가 없어요.",

    // Relative atomic mass and relative formula mass > key idea > p
    "<i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios: one mass divided by another mass. The units cancel, so they have <strong>no units</strong>.": "<i>A</i><sub>r</sub>와 <i>M</i><sub>r</sub>는 비예요: 한 질량을 다른 질량으로 나눈 값이에요. 단위가 약분되므로 <strong>단위가 없어요</strong>.",

    // Relative atomic mass and relative formula mass > data booklet note > p
    "The periodic table in the data booklet gives <i>A</i><sub>r</sub> to two decimal places: H 1.01, C 12.01, N 14.01, O 16.00, Na 22.99, Cl 35.45. Use these values in calculations, not rounded whole numbers.": "데이터 부클릿의 주기율표는 <i>A</i><sub>r</sub>를 소수점 아래 2자리까지 줘요: H 1.01, C 12.01, N 14.01, O 16.00, Na 22.99, Cl 35.45. 계산에는 반올림한 정수가 아니라 이 값을 쓰세요.",

    // Relative atomic mass and relative formula mass > li
    "List each element in the formula.": "화학식에 있는 원소를 하나씩 적으세요.",

    // Relative atomic mass and relative formula mass > li
    "Count its atoms. A subscript outside a bracket multiplies everything inside the bracket.": "각 원소의 원자 수를 세세요. 괄호 밖의 아래 첨자는 괄호 안의 모든 것에 곱해져요.",

    // Relative atomic mass and relative formula mass > li
    "Multiply each count by the element’s <i>A</i><sub>r</sub> (2 d.p.).": "각 원자 수에 그 원소의 <i>A</i><sub>r</sub>(소수점 아래 2자리)를 곱하세요.",

    // Relative atomic mass and relative formula mass > li
    "Add the subtotals. Give <i>M</i><sub>r</sub> to 2 decimal places, with no unit.": "소계를 더하세요. <i>M</i><sub>r</sub>는 단위 없이 소수점 아래 2자리로 쓰세요.",

    // Relative atomic mass and relative formula mass > widget > data-title attribute
    "Molar mass builder": "몰 질량 만들기",

    // Relative atomic mass and relative formula mass > widget > figcaption
    "Type a formula or build one with the buttons. The table counts every atom, including those inside brackets and in water of crystallization. It uses the <i>A</i><sub>r</sub> values from the data booklet.": "화학식을 입력하거나 버튼으로 만들어 보세요. 표는 괄호 안과 결정수 속의 원자까지 모든 원자를 세요. 데이터 부클릿의 <i>A</i><sub>r</sub> 값을 써요.",

    // Relative atomic mass and relative formula mass > worked example > h3
    "Relative formula mass with brackets": "괄호가 있는 상대 화학식량",

    // Relative atomic mass and relative formula mass > worked example > p
    "Determine the relative formula mass of calcium nitrate, <span class=\"chem\">Ca(NO3)2</span>.": "질산 칼슘 <span class=\"chem\">Ca(NO3)2</span>의 상대 화학식량을 구하시오 (determine).",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Count the atoms": "원자 세기",

    // Relative atomic mass and relative formula mass > worked example > p
    "The 2 outside the bracket doubles everything inside it: 2 × N and 2 × 3 = 6 O.": "괄호 밖의 2는 괄호 안의 모든 것을 2배로 해요: 2 × N, 그리고 2 × 3 = 6 O.",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Multiply by each relative atomic mass": "각 상대 원자 질량 곱하기",

    // Relative atomic mass and relative formula mass > worked example > p
    "Use the two-decimal-place values from the data booklet.": "데이터 부클릿의 소수점 아래 2자리 값을 쓰세요.",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Add the subtotals": "소계 더하기",

    // Relative atomic mass and relative formula mass > worked example > p
    "When you add, keep the decimal places of the data: two.": "더할 때는 자료의 소수점 자릿수, 즉 2자리를 유지하세요.",

    // Relative atomic mass and relative formula mass > worked example > p
    "<i>M</i><sub>r</sub> = 164.10 (no units)": "<i>M</i><sub>r</sub> = 164.10 (단위 없음)",

    // Relative atomic mass and relative formula mass > p
    "A <dfn data-def=\"A salt whose crystals contain a fixed number of water molecules per formula unit, called water of crystallization.\">hydrated salt</dfn> has water molecules built into its crystals. The dot in <span class=\"chem\">CuSO4.5H2O</span> means “with”, so add five whole waters: <span class=\"mono\">63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72</span>.": "<dfn data-def=\"결정 속에 화학식 단위당 정해진 수의 물 분자가 들어 있는 염. 이 물을 결정수라고 해요.\">수화물 염 <span class=\"en-term\">(hydrated salt)</span></dfn>은 결정 속에 물 분자가 들어 있어요. <span class=\"chem\">CuSO4.5H2O</span>의 점은 “~와 함께”라는 뜻이므로, 물 분자 다섯 개를 통째로 더하세요: <span class=\"mono\">63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72</span>.",

    // Relative atomic mass and relative formula mass > data-def attribute
    "A salt whose crystals contain a fixed number of water molecules per formula unit, called water of crystallization.": "결정 속에 화학식 단위당 정해진 수의 물 분자가 들어 있는 염. 이 물을 결정수라고 해요.",

    // Relative atomic mass and relative formula mass > common mistake > p
    "In <span class=\"chem\">Ca(NO3)2</span> it is easy to count only 3 oxygen atoms and get 116.10. The subscript after a bracket multiplies every atom inside it. Count atoms first, then use the calculator.": "<span class=\"chem\">Ca(NO3)2</span>에서 산소 원자를 3개만 세어 116.10을 얻기 쉬워요. 괄호 뒤의 아래 첨자는 괄호 안의 모든 원자에 곱해져요. 먼저 원자를 세고, 그다음 계산기를 쓰세요.",

    // Relative atomic mass and relative formula mass > try it > data-label attribute
    "Mr": "Mr",

    // Relative atomic mass and relative formula mass > try it > p
    "Determine the relative formula mass of aluminium sulfate, <span class=\"chem\">Al2(SO4)3</span>. Give your answer to 2 decimal places. (<i>A</i><sub>r</sub>: Al 26.98, S 32.07, O 16.00)": "황산 알루미늄 <span class=\"chem\">Al2(SO4)3</span>의 상대 화학식량을 구하시오 (determine). 답은 소수점 아래 2자리로 쓰시오. (<i>A</i><sub>r</sub>: Al 26.98, S 32.07, O 16.00)",

    // Relative atomic mass and relative formula mass > try it > li
    "Count the atoms first. How many S atoms and how many O atoms are in three sulfate groups?": "먼저 원자를 세세요. 황산 이온 3개에 S 원자와 O 원자가 각각 몇 개 있을까요?",

    // Relative atomic mass and relative formula mass > try it > li
    "There are 2 Al, 3 S and 12 O: <span class=\"mono\">2(26.98) + 3(32.07) + 12(16.00)</span>.": "Al 2개, S 3개, O 12개가 있어요: <span class=\"mono\">2(26.98) + 3(32.07) + 12(16.00)</span>.",

    // Relative atomic mass and relative formula mass > try it > p
    "<strong>342.17</strong>, with no unit, because it is a relative mass.": "<strong>342.17</strong>, 상대 질량이므로 단위가 없어요.",

    // Relative atomic mass and relative formula mass > not needed for IB > p
    "You do not need the unified atomic mass unit (u or Da) or the mass of one atom in kilograms for this topic. Calculating <i>A</i><sub>r</sub> from isotope abundances belongs to topic 1.2.": "이 단원에서는 통일 원자 질량 단위(u 또는 Da)나 원자 하나의 질량을 킬로그램으로 나타낸 값이 필요 없어요. 동위 원소 존재 비율로 <i>A</i><sub>r</sub>를 계산하는 것은 1.2 단원 내용이에요.",

    // Relative atomic mass and relative formula mass > data-title attribute
    "Relative masses: quick check": "상대 질량: 빠른 확인",

    // Molar mass: weighing instead of counting > data-toc attribute
    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Molar mass": "몰 질량",

    // Molar mass: weighing instead of counting > h2
    "Molar mass: weighing instead of counting": "몰 질량: 세는 대신 무게 재기",

    // Molar mass: weighing instead of counting > p
    "A bank does not count coins one by one. It weighs the bag, because it knows the mass of one coin. Chemists do the same with atoms. If you know the mass of one mole of a substance, a balance tells you how many particles you have.": "은행은 동전을 하나하나 세지 않아요. 동전 하나의 질량을 알기 때문에 자루의 무게를 재요. 화학자도 원자에 대해 똑같이 해요. 물질 1몰의 질량을 알면, 저울로 입자가 몇 개 있는지 알 수 있어요.",

    // Molar mass: weighing instead of counting > p
    "The <dfn data-def=\"The mass of one mole of a substance. Symbol M, units g mol^-1. It has the same number as the relative formula mass.\">molar mass</dfn>, <i>M</i>, is the mass of one mole of a substance. Its units are <span class=\"unit\">g mol-1</span>. The mole is chosen so that the molar mass has the same number as <i>M</i><sub>r</sub>: water has <i>M</i><sub>r</sub> = 18.02, so <i>M</i> = 18.02 g mol<sup>−1</sup>.": "<dfn data-def=\"물질 1몰의 질량. 기호 M, 단위 g mol^-1. 상대 화학식량과 같은 수예요.\">몰 질량 <span class=\"en-term\">(molar mass)</span></dfn> <i>M</i>은 물질 1몰의 질량이에요. 단위는 <span class=\"unit\">g mol-1</span>이에요. 몰은 몰 질량이 <i>M</i><sub>r</sub>와 같은 수가 되도록 정해져 있어요: 물은 <i>M</i><sub>r</sub> = 18.02이므로 <i>M</i> = 18.02 g mol<sup>−1</sup>이에요.",

    // Molar mass: weighing instead of counting > data-def attribute
    "The mass of one mole of a substance. Symbol M, units g mol^-1. It has the same number as the relative formula mass.": "물질 1몰의 질량. 기호 M, 단위 g mol^-1. 상대 화학식량과 같은 수예요.",

    // Molar mass: weighing instead of counting > table > caption
    "Same number, different meaning": "같은 수, 다른 뜻",

    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Quantity": "양",

    // Molar mass: weighing instead of counting > table > th
    "Symbol": "기호",

    // Molar mass: weighing instead of counting > table > th
    "For water": "물의 경우",

    // Molar mass: weighing instead of counting > table > th
    "Units": "단위",

    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Relative formula mass": "상대 화학식량",

    // Molar mass: weighing instead of counting > table > td
    "<i>M</i><sub>r</sub>": "<i>M</i><sub>r</sub>",

    // Molar mass: weighing instead of counting > table > td
    "none": "없음",

    // Molar mass: weighing instead of counting > table > td
    "<span class=\"unit\">g mol-1</span>": "<span class=\"unit\">g mol-1</span>",

    // Molar mass: weighing instead of counting > table > th
    "Mass of your sample": "시료의 질량",

    // Molar mass: weighing instead of counting > table > td
    "whatever you weighed": "잰 값 그대로",

    // Molar mass: weighing instead of counting > equation > dd
    "mass of the sample <span class=\"unit\">g</span>": "시료의 질량 <span class=\"unit\">g</span>",

    // Molar mass: weighing instead of counting > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "몰 질량 <span class=\"unit\">g mol-1</span>",

    // Molar mass: weighing instead of counting > data booklet note > p
    "<i>n</i> = <i>m</i> / <i>M</i> is printed in the data booklet. Rearranged: <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> and <span class=\"mono\"><i>M</i> = <i>m</i> ÷ <i>n</i></span>.": "<i>n</i> = <i>m</i> / <i>M</i>은 데이터 부클릿에 나와 있어요. 식을 바꾸면: <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>, <span class=\"mono\"><i>M</i> = <i>m</i> ÷ <i>n</i></span>.",

    // Molar mass: weighing instead of counting > p
    "Let the units check your rearrangement. Grams divided by grams-per-mole gives moles: <span class=\"mono\">g ÷ g mol<sup>−1</sup> = mol</span>. If your units come out as something else, the formula is upside down.": "식을 바르게 바꿨는지 단위로 확인하세요. 그램을 몰당 그램으로 나누면 몰이 돼요: <span class=\"mono\">g ÷ g mol<sup>−1</sup> = mol</span>. 단위가 다르게 나오면 식이 뒤집힌 거예요.",

    // Molar mass: weighing instead of counting > h3
    // Molar mass: weighing instead of counting > widget > data-title attribute
    "The mole map": "몰 지도",

    // Molar mass: weighing instead of counting > p
    "Mass, particles, solutions and gases never convert directly into each other. Each one converts to moles, and moles convert to each of the others. That is the whole topic in one picture.": "질량, 입자 수, 용액, 기체는 서로 직접 바뀌지 않아요. 각각 몰로 바뀌고, 몰은 다시 나머지 각각으로 바뀌어요. 이 그림 하나가 이 단원 전체예요.",

    // Molar mass: weighing instead of counting > widget > figcaption
    "Choose what you are given and what you want, then type a value and a formula. The route lights up and the working appears line by line with units. Solutions are covered in section 1.4.5. The gas-volume link uses the molar volume at STP from the data booklet, which belongs to topic 1.5.": "주어진 것과 구할 것을 고른 다음, 값과 화학식을 입력하세요. 경로에 불이 들어오고 풀이가 단위와 함께 한 줄씩 나타나요. 용액은 1.4.5절에서 다뤄요. 기체 부피 연결은 데이터 부클릿의 STP 몰 부피를 쓰는데, 이것은 1.5 단원 내용이에요.",

    // Molar mass: weighing instead of counting > li
    "Ask the three questions. Find “given” and “wanted” on the mole map.": "세 가지 질문을 하세요. 몰 지도에서 “주어진 것”과 “구할 것”을 찾으세요.",

    // Molar mass: weighing instead of counting > li
    "If mass is involved, work out the molar mass <i>M</i> from the formula.": "질량이 관련되면 화학식으로 몰 질량 <i>M</i>을 구하세요.",

    // Molar mass: weighing instead of counting > li
    "Step 1: convert what you are given into moles.": "1단계: 주어진 것을 몰로 바꾸세요.",

    // Molar mass: weighing instead of counting > li
    "Step 2: convert moles into what you want. If the question asks about atoms or ions inside the formula, multiply by the subscript while you are in moles.": "2단계: 몰을 구할 것으로 바꾸세요. 화학식 속의 원자나 이온을 묻는다면, 몰 단계에 있을 때 아래 첨자를 곱하세요.",

    // Molar mass: weighing instead of counting > li
    "Round once at the end and add the unit.": "마지막에 한 번 반올림하고 단위를 붙이세요.",

    // Molar mass: weighing instead of counting > worked example > h3
    "Mass to moles": "질량에서 몰로",

    // Molar mass: weighing instead of counting > worked example > p
    "Calculate the amount, in mol, of calcium carbonate in a 12.5 g piece of marble. Assume the marble is pure <span class=\"chem\">CaCO3</span>.": "대리석 12.5 g 조각에 들어 있는 탄산 칼슘의 양을 mol 단위로 계산하시오 (calculate). 대리석은 순수한 <span class=\"chem\">CaCO3</span>라고 가정하시오.",

    // Molar mass: weighing instead of counting > worked example > p
    "Given: a mass in g. Wanted: an amount in mol. Link: molar mass.": "주어진 것: g 단위의 질량. 구할 것: mol 단위의 양. 연결 고리: 몰 질량.",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Find the molar mass": "몰 질량 구하기",

    // Molar mass: weighing instead of counting > worked example > p
    "You need <i>M</i> before you can use the relationship. One Ca, one C, three O.": "관계식을 쓰려면 먼저 <i>M</i>이 필요해요. Ca 1개, C 1개, O 3개.",

    // Molar mass: weighing instead of counting > worked example > p
    "Keep the extra digits in your calculator for now.": "지금은 계산기에 남는 자릿수를 그대로 두세요.",

    // Molar mass: weighing instead of counting > worked example > p
    "The mass has 3 significant figures.": "질량은 유효 숫자가 3자리예요.",

    // Molar mass: weighing instead of counting > worked example > p
    "0.125 mol of CaCO<sub>3</sub>": "CaCO<sub>3</sub> 0.125 mol",

    // Molar mass: weighing instead of counting > worked example > h3
    "Mass to number of atoms (two links)": "질량에서 원자 수로 (연결 고리 2개)",

    // Molar mass: weighing instead of counting > worked example > p
    "Calculate the number of oxygen atoms in 4.90 g of sulfuric acid, <span class=\"chem\">H2SO4</span>.": "황산 <span class=\"chem\">H2SO4</span> 4.90 g에 들어 있는 산소 원자 수를 계산하시오 (calculate).",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Plan the route on the mole map": "몰 지도에서 경로 계획하기",

    // Molar mass: weighing instead of counting > worked example > p
    "Mass and particles do not connect directly. Go mass → moles of H<sub>2</sub>SO<sub>4</sub> → moles of O atoms → number of O atoms.": "질량과 입자 수는 직접 연결되지 않아요. 질량 → H<sub>2</sub>SO<sub>4</sub>의 몰 → O 원자의 몰 → O 원자 수 순서로 가세요.",

    // Molar mass: weighing instead of counting > worked example > maths line
    "g &nbsp;→&nbsp; mol H<sub>2</sub>SO<sub>4</sub> &nbsp;→&nbsp; mol O &nbsp;→&nbsp; number of O atoms": "g &nbsp;→&nbsp; mol H<sub>2</sub>SO<sub>4</sub> &nbsp;→&nbsp; mol O &nbsp;→&nbsp; O 원자 수",

    // Molar mass: weighing instead of counting > worked example > p
    "Mass is involved, so <i>M</i> is needed.": "질량이 관련되므로 <i>M</i>이 필요해요.",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Convert mass to moles": "질량을 몰로 바꾸기",

    // Molar mass: weighing instead of counting > worked example > p
    "This is the first link: <i>n</i> = <i>m</i> ÷ <i>M</i>.": "이것이 첫 번째 연결 고리예요: <i>n</i> = <i>m</i> ÷ <i>M</i>.",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Use the subscript": "아래 첨자 쓰기",

    // Molar mass: weighing instead of counting > worked example > p
    "Each H<sub>2</sub>SO<sub>4</sub> contains 4 oxygen atoms.": "H<sub>2</sub>SO<sub>4</sub> 하나에는 산소 원자가 4개 들어 있어요.",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Convert moles to a number and round": "몰을 개수로 바꾸고 반올림하기",

    // Molar mass: weighing instead of counting > worked example > p
    "Second link: multiply by <i>N</i><sub>A</sub>. Round to the 3 significant figures of the data.": "두 번째 연결 고리: <i>N</i><sub>A</sub>를 곱해요. 자료에 맞춰 유효 숫자 3자리로 반올림하세요.",

    // Molar mass: weighing instead of counting > worked example > maths line
    "<i>N</i>(O) = <b>1.20 × 10<sup>23</sup> atoms</b>": "<i>N</i>(O) = <b>원자 1.20 × 10<sup>23</sup>개</b>",

    // Molar mass: weighing instead of counting > worked example > p
    "1.20 × 10<sup>23</sup> oxygen atoms": "산소 원자 1.20 × 10<sup>23</sup>개",

    // Molar mass: weighing instead of counting > common mistake > p
    "Multiplying when you should divide is the classic slip. Estimate first: 4.90 g is much less than one mole of H<sub>2</sub>SO<sub>4</sub> (98.09 g), so the amount must be much less than 1 mol. An answer of 481 mol cannot be right.": "나눠야 할 때 곱하는 것이 가장 흔한 실수예요. 먼저 어림해 보세요: 4.90 g은 H<sub>2</sub>SO<sub>4</sub> 1몰(98.09 g)보다 훨씬 적으므로, 양은 1 mol보다 훨씬 작아야 해요. 481 mol이라는 답은 맞을 수 없어요.",

    // Molar mass: weighing instead of counting > try it > p
    "Calculate the mass of 0.0450 mol of sodium hydroxide, <span class=\"chem\">NaOH</span>. (<i>A</i><sub>r</sub>: Na 22.99, O 16.00, H 1.01)": "수산화 나트륨 <span class=\"chem\">NaOH</span> 0.0450 mol의 질량을 계산하시오 (calculate). (<i>A</i><sub>r</sub>: Na 22.99, O 16.00, H 1.01)",

    // Molar mass: weighing instead of counting > try it > li
    "You have moles and want grams. Rearrange <i>n</i> = <i>m</i> / <i>M</i> to make <i>m</i> the subject.": "몰을 알고 그램을 구하려고 해요. <i>n</i> = <i>m</i> / <i>M</i>을 <i>m</i>에 대한 식으로 바꾸세요.",

    // Molar mass: weighing instead of counting > try it > li
    "<i>M</i>(NaOH) = 22.99 + 16.00 + 1.01 = 40.00 g mol<sup>−1</sup>. Then <i>m</i> = <i>n</i> × <i>M</i>.": "<i>M</i>(NaOH) = 22.99 + 16.00 + 1.01 = 40.00 g mol<sup>−1</sup>. 그다음 <i>m</i> = <i>n</i> × <i>M</i>.",

    // Molar mass: weighing instead of counting > try it > p
    "<strong>1.80 g</strong> (3 significant figures).": "<strong>1.80 g</strong> (유효 숫자 3자리).",

    // Molar mass: weighing instead of counting > try it > p
    "A sample of carbon dioxide contains 3.01 × 10<sup>22</sup> molecules. Calculate its mass. (<i>A</i><sub>r</sub>: C 12.01, O 16.00)": "이산화 탄소 시료에 분자 3.01 × 10<sup>22</sup>개가 들어 있어요. 이 시료의 질량을 계산하시오 (calculate). (<i>A</i><sub>r</sub>: C 12.01, O 16.00)",

    // Molar mass: weighing instead of counting > try it > li
    "Particles and mass do not connect directly. Which quantity do you go through?": "입자 수와 질량은 직접 연결되지 않아요. 어떤 양을 거쳐 가야 할까요?",

    // Molar mass: weighing instead of counting > try it > li
    "First <i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CO<sub>2</sub>) = 44.01 g mol<sup>−1</sup>.": "먼저 <i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub>. 그다음 <i>m</i> = <i>n</i> × <i>M</i>, 여기서 <i>M</i>(CO<sub>2</sub>) = 44.01 g mol<sup>−1</sup>.",

    // Molar mass: weighing instead of counting > try it > p
    "To 3 significant figures: <strong>2.20 g</strong>.": "유효 숫자 3자리로: <strong>2.20 g</strong>.",

    // Molar mass: weighing instead of counting > not needed for IB > data-title attribute
    // Concentration of solutions > not needed for IB > data-title attribute
    // Avogadro’s law and reacting gas volumes > not needed for IB > data-title attribute
    "Comes later": "나중에 배워요",

    // Molar mass: weighing instead of counting > not needed for IB > p
    "Using molar masses with a balanced equation to find the mass of a product, and limiting reactant, percentage yield and atom economy, are all in Reactivity 2.1. They use exactly the mass ⇄ moles steps you are learning here, with one extra step in the middle.": "균형 맞춘 반응식과 몰 질량으로 생성물의 질량을 구하는 것, 그리고 한계 반응물, 수득률, 원자 경제성은 모두 Reactivity 2.1에서 배워요. 여기서 배우는 질량 ⇄ 몰 단계를 그대로 쓰고, 가운데에 한 단계가 더 들어갈 뿐이에요.",

    // Molar mass: weighing instead of counting > data-title attribute
    "Molar mass: quick check": "몰 질량: 빠른 확인",

    // Empirical and molecular formulas > data-toc attribute
    // Empirical and molecular formulas > h2
    "Empirical and molecular formulas": "실험식과 분자식",

    // Empirical and molecular formulas > p
    "A recipe that says “2 parts flour to 1 part butter” gives you the ratio, but not how big the batch is. Chemical formulas come in the same two kinds.": "“밀가루 2, 버터 1의 비율”이라고 쓴 조리법은 비율은 알려 주지만 한 번에 얼마나 만드는지는 알려 주지 않아요. 화학식도 똑같이 두 종류가 있어요.",

    // Empirical and molecular formulas > p
    "The <dfn data-def=\"The simplest whole-number ratio of atoms of each element present in a compound.\">empirical formula</dfn> of a compound gives the simplest ratio of atoms of each element present in it. The <dfn data-def=\"The actual number of atoms of each element present in one molecule.\">molecular formula</dfn> gives the actual number of atoms of each element present in a molecule.": "화합물의 <dfn data-def=\"화합물에 들어 있는 각 원소의 원자 수를 가장 간단한 정수비로 나타낸 것.\">실험식 <span class=\"en-term\">(empirical formula)</span></dfn>은 그 화합물에 들어 있는 각 원소의 원자 수를 가장 간단한 비로 나타내요. <dfn data-def=\"분자 하나에 들어 있는 각 원소의 실제 원자 수.\">분자식 <span class=\"en-term\">(molecular formula)</span></dfn>은 분자 하나에 들어 있는 각 원소의 실제 원자 수를 나타내요.",

    // Empirical and molecular formulas > data-def attribute
    "The simplest whole-number ratio of atoms of each element present in a compound.": "화합물에 들어 있는 각 원소의 원자 수를 가장 간단한 정수비로 나타낸 것.",

    // Empirical and molecular formulas > data-def attribute
    "The actual number of atoms of each element present in one molecule.": "분자 하나에 들어 있는 각 원소의 실제 원자 수.",

    // Empirical and molecular formulas > table > caption
    "Empirical and molecular formulas compared": "실험식과 분자식 비교",

    // Empirical and molecular formulas > table > th
    "Compound": "화합물",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Molecular formula": "분자식",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Empirical formula": "실험식",

    // Empirical and molecular formulas > table > th
    "Molecular ÷ empirical": "분자식 ÷ 실험식",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "glucose": "포도당",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">CH2O</span>": "<span class=\"chem\">CH2O</span>",

    // Empirical and molecular formulas > table > th
    "ethene": "ethene(에텐)",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">CH2</span>": "<span class=\"chem\">CH2</span>",

    // Empirical and molecular formulas > table > th
    "hydrogen peroxide": "과산화 수소",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">HO</span>": "<span class=\"chem\">HO</span>",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "water": "물",

    // Empirical and molecular formulas > p
    "The molecular formula is always a whole-number multiple of the empirical formula. Sometimes the multiple is 1 and the two are the same. Ionic compounds such as <span class=\"chem\">NaCl</span> have no molecules, so their formula is already an empirical formula.": "분자식은 항상 실험식의 정수배예요. 그 배수가 1이어서 둘이 같을 때도 있어요. <span class=\"chem\">NaCl</span> 같은 이온 결합 화합물에는 분자가 없으므로, 화학식이 이미 실험식이에요.",

    // Empirical and molecular formulas > h3
    "From a formula to percentage composition": "화학식에서 질량 백분율 조성으로",

    // Empirical and molecular formulas > p
    "<dfn data-def=\"The percentage of the total mass of a compound that is due to each element.\">Percentage composition by mass</dfn> says what share of a compound’s mass comes from each element.": "<dfn data-def=\"화합물의 전체 질량 중 각 원소가 차지하는 백분율.\">질량 백분율 조성 <span class=\"en-term\">(percentage composition by mass)</span></dfn>은 화합물의 질량 중 각 원소가 차지하는 몫을 알려 줘요.",

    // Empirical and molecular formulas > data-def attribute
    "The percentage of the total mass of a compound that is due to each element.": "화합물의 전체 질량 중 각 원소가 차지하는 백분율.",

    // Empirical and molecular formulas > equation > maths line
    "% of element = <span class=\"frac\"><span>atoms of element × <i>A</i><sub>r</sub></span><span><i>M</i><sub>r</sub></span></span> × 100": "원소의 % = <span class=\"frac\"><span>원소의 원자 수 × <i>A</i><sub>r</sub></span><span><i>M</i><sub>r</sub></span></span> × 100",

    // Empirical and molecular formulas > equation > dt
    "A<sub>r</sub>": "A<sub>r</sub>",

    // Empirical and molecular formulas > equation > dd
    "relative atomic mass of the element (no units)": "원소의 상대 원자 질량 (단위 없음)",

    // Empirical and molecular formulas > equation > dt
    "M<sub>r</sub>": "M<sub>r</sub>",

    // Empirical and molecular formulas > equation > dd
    "relative formula mass of the compound (no units)": "화합물의 상대 화학식량 (단위 없음)",

    // Empirical and molecular formulas > p
    "For iron(III) oxide, <span class=\"chem\">Fe2O3</span>: <i>M</i><sub>r</sub> = <span class=\"mono\">2(55.85) + 3(16.00) = 159.70</span>. So the percentage of iron is <span class=\"mono\">111.70 ÷ 159.70 × 100 = 69.94 %</span>, and oxygen is the rest, <span class=\"mono\">30.06 %</span>. The percentages must add up to 100.": "산화 철(III) <span class=\"chem\">Fe2O3</span>의 경우: <i>M</i><sub>r</sub> = <span class=\"mono\">2(55.85) + 3(16.00) = 159.70</span>. 따라서 철의 백분율은 <span class=\"mono\">111.70 ÷ 159.70 × 100 = 69.94 %</span>이고, 산소는 나머지인 <span class=\"mono\">30.06 %</span>예요. 백분율을 모두 더하면 100이 되어야 해요.",

    // Empirical and molecular formulas > try it > p
    "Urea, <span class=\"chem\">CO(NH2)2</span>, is used as a fertilizer because of its nitrogen content. Calculate the percentage by mass of nitrogen in urea. (<i>A</i><sub>r</sub>: C 12.01, O 16.00, N 14.01, H 1.01)": "요소 <span class=\"chem\">CO(NH2)2</span>는 질소를 포함하고 있어서 비료로 쓰여요. 요소에서 질소의 질량 백분율을 계산하시오 (calculate). (<i>A</i><sub>r</sub>: C 12.01, O 16.00, N 14.01, H 1.01)",

    // Empirical and molecular formulas > try it > li
    "How many nitrogen atoms are in the formula? The 2 outside the bracket matters.": "화학식에 질소 원자가 몇 개 있을까요? 괄호 밖의 2가 중요해요.",

    // Empirical and molecular formulas > try it > li
    "<i>M</i><sub>r</sub> = 12.01 + 16.00 + 2(14.01) + 4(1.01) = 60.07. Then % N = <span class=\"mono\">2(14.01) ÷ 60.07 × 100</span>.": "<i>M</i><sub>r</sub> = 12.01 + 16.00 + 2(14.01) + 4(1.01) = 60.07. 그다음 N의 % = <span class=\"mono\">2(14.01) ÷ 60.07 × 100</span>.",

    // Empirical and molecular formulas > try it > p
    "To 3 significant figures: <strong>46.6 %</strong>.": "유효 숫자 3자리로: <strong>46.6 %</strong>.",

    // Empirical and molecular formulas > h3
    "From composition to an empirical formula: the table method": "조성에서 실험식으로: 표 방법",

    // Empirical and molecular formulas > p
    "Going the other way is the more common exam question. A formula is a ratio of <em>atoms</em>, which means a ratio of <em>moles</em>. But the data are masses. So the job is: convert each mass to moles, then simplify the ratio.": "반대 방향으로 가는 문제가 시험에 더 자주 나와요. 화학식은 <em>원자</em>의 비, 즉 <em>몰</em>의 비예요. 그런데 자료는 질량이에요. 그러니 할 일은: 각 질량을 몰로 바꾼 다음, 비를 간단히 하는 거예요.",

    // Empirical and molecular formulas > li
    "Make a column for each element. Write its mass in g. If you are given percentages, imagine a 100 g sample, so 40 % becomes 40 g.": "원소마다 열을 하나씩 만드세요. 각 원소의 질량을 g 단위로 쓰세요. 백분율이 주어지면 100 g 시료를 떠올리세요. 그러면 40 %는 40 g이 돼요.",

    // Empirical and molecular formulas > li
    "Divide each mass by that element’s <i>A</i><sub>r</sub>. This gives the amount of each element in mol.": "각 질량을 그 원소의 <i>A</i><sub>r</sub>로 나누세요. 그러면 각 원소의 양이 mol 단위로 나와요.",

    // Empirical and molecular formulas > li
    "Divide every amount by the smallest one. The smallest becomes 1.": "모든 양을 가장 작은 양으로 나누세요. 가장 작은 것이 1이 돼요.",

    // Empirical and molecular formulas > li
    "If every number is now within about 0.1 of a whole number, round. If one ends in about .5, multiply them all by 2. If one ends in about .33 or .67, multiply by 3. If one ends in .25 or .75, multiply by 4.": "이제 모든 수가 정수에서 약 0.1 이내라면 반올림하세요. 하나가 약 .5로 끝나면 모두에 2를 곱하세요. 하나가 약 .33이나 .67로 끝나면 3을 곱하세요. 하나가 .25나 .75로 끝나면 4를 곱하세요.",

    // Empirical and molecular formulas > li
    "Write the formula with the whole numbers as subscripts.": "정수를 아래 첨자로 해서 화학식을 쓰세요.",

    // Empirical and molecular formulas > worked example > h3
    "Empirical formula from percentage composition": "질량 백분율 조성에서 실험식 구하기",

    // Empirical and molecular formulas > worked example > p
    "A compound contains 48.64 % carbon, 8.16 % hydrogen and 43.20 % oxygen by mass. Determine its empirical formula.": "어떤 화합물은 질량으로 탄소 48.64 %, 수소 8.16 %, 산소 43.20 %를 포함해요. 이 화합물의 실험식을 구하시오 (determine).",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Turn percentages into masses": "백분율을 질량으로 바꾸기",

    // Empirical and molecular formulas > worked example > p
    "In a 100 g sample, each percentage is the mass in grams. Any sample size gives the same ratio, and 100 g is the easiest.": "100 g 시료에서는 각 백분율이 곧 그램 단위의 질량이에요. 시료의 크기가 얼마든 같은 비가 나오는데, 100 g이 가장 쉬워요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Convert each mass to moles": "각 질량을 몰로 바꾸기",

    // Empirical and molecular formulas > worked example > p
    "A formula counts atoms, so you need amounts, not masses. Use <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>.": "화학식은 원자를 세므로, 질량이 아니라 양이 필요해요. <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>를 쓰세요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the smallest": "가장 작은 값으로 나누기",

    // Empirical and molecular formulas > worked example > p
    "This sets the smallest amount to 1 and shows the ratio clearly. The smallest is 2.700.": "이렇게 하면 가장 작은 양이 1이 되고 비가 분명히 보여요. 가장 작은 값은 2.700이에요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Clear the fraction": "분수 없애기",

    // Empirical and molecular formulas > worked example > p
    "1.50 is not close to a whole number, so it must not be rounded. Multiplying everything by 2 turns it into 3.": "1.50은 정수에 가깝지 않으므로 반올림하면 안 돼요. 모두에 2를 곱하면 3이 돼요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Write the formula": "화학식 쓰기",

    // Empirical and molecular formulas > worked example > p
    "5.98 is within experimental error of 6, so the ratio is 3 : 6 : 2.": "5.98은 실험 오차 범위 안에서 6이므로, 비는 3 : 6 : 2예요.",

    // Empirical and molecular formulas > worked example > maths line
    "empirical formula = <b>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b>": "실험식 = <b>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b>",

    // Empirical and molecular formulas > widget > data-title attribute
    "Empirical formula solver": "실험식 풀이 도구",

    // Empirical and molecular formulas > widget > figcaption
    "Enter your own percentages or masses and watch each column of the table method fill in. Switch to “Combustion analysis” for CO<sub>2</sub> and H<sub>2</sub>O data. Add a molar mass to get the molecular formula too.": "직접 백분율이나 질량을 입력하고 표 방법의 각 열이 채워지는 것을 보세요. CO<sub>2</sub>와 H<sub>2</sub>O 자료를 쓰려면 “연소 분석”으로 바꾸세요. 몰 질량을 넣으면 분자식도 구할 수 있어요.",

    // Empirical and molecular formulas > common mistake > p
    "Three slips cause most wrong formulas. Using the percentages directly as the ratio, without dividing by <i>A</i><sub>r</sub>. Dividing by atomic number instead of <i>A</i><sub>r</sub>. Rounding 1.5 up to 2, or 1.33 down to 1, instead of multiplying by 2 or 3.": "틀린 화학식은 대부분 3가지 실수에서 나와요. <i>A</i><sub>r</sub>로 나누지 않고 백분율을 그대로 비로 쓰기. <i>A</i><sub>r</sub> 대신 원자 번호로 나누기. 2나 3을 곱하지 않고 1.5를 2로 올리거나 1.33을 1로 내려 반올림하기.",

    // Empirical and molecular formulas > try it > p
    "An oxide of phosphorus contains 43.64 % phosphorus and 56.36 % oxygen by mass. Its empirical formula can be written <span class=\"chem\">P2Ox</span>. Find the whole number <i>x</i>. (<i>A</i><sub>r</sub>: P 30.97, O 16.00)": "어떤 인 산화물은 질량으로 인 43.64 %와 산소 56.36 %를 포함해요. 이 화합물의 실험식은 <span class=\"chem\">P2Ox</span>로 쓸 수 있어요. 정수 <i>x</i>를 구하시오. (<i>A</i><sub>r</sub>: P 30.97, O 16.00)",

    // Empirical and molecular formulas > try it > li
    "Use the table method: divide each percentage by <i>A</i><sub>r</sub>, then divide both by the smaller answer.": "표 방법을 쓰세요: 각 백분율을 <i>A</i><sub>r</sub>로 나눈 다음, 둘 다 더 작은 값으로 나누세요.",

    // Empirical and molecular formulas > try it > li
    "You should get P : O = 1 : 2.50. What do you multiply by to make both numbers whole?": "P : O = 1 : 2.50이 나와야 해요. 두 수를 모두 정수로 만들려면 무엇을 곱해야 할까요?",

    // Empirical and molecular formulas > try it > p
    "The empirical formula is P<sub>2</sub>O<sub>5</sub>, so <strong><i>x</i> = 5</strong>.": "실험식은 P<sub>2</sub>O<sub>5</sub>이므로 <strong><i>x</i> = 5</strong>예요.",

    // Empirical and molecular formulas > data-title attribute
    "Composition and empirical formulas: quick check": "조성과 실험식: 빠른 확인",

    // Empirical and molecular formulas > h3
    "Empirical formula from combustion data": "연소 자료로 실험식 구하기",

    // Empirical and molecular formulas > p
    "Many compounds contain only carbon, hydrogen and oxygen. To analyse one, a weighed sample is burned completely in excess oxygen. The carbon dioxide and the water that form are collected and weighed.": "많은 화합물이 탄소, 수소, 산소만으로 이루어져 있어요. 이런 화합물을 분석할 때는 무게를 잰 시료를 과량의 산소 속에서 완전히 태워요. 생긴 이산화 탄소와 물을 모아서 무게를 재요.",

    // Empirical and molecular formulas > key idea > p
    "Every carbon atom in the sample ends up in a <span class=\"chem\">CO2</span> molecule. Every hydrogen atom ends up in an <span class=\"chem\">H2O</span> molecule. The oxygen in the products comes partly from the air, so the oxygen in the sample is found by subtraction.": "시료 속의 탄소 원자는 모두 <span class=\"chem\">CO2</span> 분자로 가요. 수소 원자는 모두 <span class=\"chem\">H2O</span> 분자로 가요. 생성물 속의 산소는 일부가 공기에서 오므로, 시료 속의 산소는 빼기로 구해요.",

    // Empirical and molecular formulas > li
    "Mass of C in the sample = mass of <span class=\"chem\">CO2</span> × <span class=\"mono\">12.01 ÷ 44.01</span>.": "시료 속 C의 질량 = <span class=\"chem\">CO2</span>의 질량 × <span class=\"mono\">12.01 ÷ 44.01</span>.",

    // Empirical and molecular formulas > li
    "Mass of H in the sample = mass of <span class=\"chem\">H2O</span> × <span class=\"mono\">2(1.01) ÷ 18.02</span>. The 2 is there because each water molecule holds two hydrogen atoms.": "시료 속 H의 질량 = <span class=\"chem\">H2O</span>의 질량 × <span class=\"mono\">2(1.01) ÷ 18.02</span>. 물 분자 하나에 수소 원자가 두 개 있으므로 2가 들어가요.",

    // Empirical and molecular formulas > li
    "Mass of O in the sample = mass of sample − mass of C − mass of H.": "시료 속 O의 질량 = 시료의 질량 − C의 질량 − H의 질량.",

    // Empirical and molecular formulas > li
    "Now use the table method on the three masses.": "이제 세 질량에 표 방법을 쓰세요.",

    // Empirical and molecular formulas > p
    "You can also work in moles: <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) and <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). You still need the masses of C and H to find the oxygen by difference.": "몰로 계산해도 돼요: <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). 그래도 산소를 차이로 구하려면 C와 H의 질량이 필요해요.",

    // Empirical and molecular formulas > worked example > h3
    "Empirical formula from combustion analysis": "연소 분석으로 실험식 구하기",

    // Empirical and molecular formulas > worked example > p
    "A compound contains only carbon, hydrogen and oxygen. Complete combustion of 0.660 g of it produces 1.319 g of <span class=\"chem\">CO2</span> and 0.540 g of <span class=\"chem\">H2O</span>. Determine the empirical formula.": "어떤 화합물은 탄소, 수소, 산소만으로 이루어져 있어요. 이 화합물 0.660 g을 완전 연소시키면 <span class=\"chem\">CO2</span> 1.319 g과 <span class=\"chem\">H2O</span> 0.540 g이 생겨요. 실험식을 구하시오 (determine).",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of carbon": "탄소의 질량 구하기",

    // Empirical and molecular formulas > worked example > p
    "All the carbon is now in the CO<sub>2</sub>. Carbon makes up 12.01 out of every 44.01 g of CO<sub>2</sub>.": "이제 탄소는 모두 CO<sub>2</sub> 속에 있어요. CO<sub>2</sub> 44.01 g마다 12.01 g이 탄소예요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of hydrogen": "수소의 질량 구하기",

    // Empirical and molecular formulas > worked example > p
    "All the hydrogen is now in the H<sub>2</sub>O. Hydrogen makes up 2.02 out of every 18.02 g of water.": "이제 수소는 모두 H<sub>2</sub>O 속에 있어요. 물 18.02 g마다 2.02 g이 수소예요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of oxygen by difference": "차이로 산소의 질량 구하기",

    // Empirical and molecular formulas > worked example > p
    "Whatever is not carbon or hydrogen must be oxygen. Use unrounded values from your calculator.": "탄소도 수소도 아닌 것은 산소일 수밖에 없어요. 계산기의 반올림하지 않은 값을 쓰세요.",

    // Empirical and molecular formulas > worked example > p
    "From here it is the ordinary table method.": "여기서부터는 보통의 표 방법이에요.",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the smallest and write the formula": "가장 작은 값으로 나누고 화학식 쓰기",

    // Empirical and molecular formulas > worked example > p
    "The smallest is 0.01497. The ratios are whole numbers within experimental error.": "가장 작은 값은 0.01497이에요. 비는 실험 오차 범위 안에서 정수예요.",

    // Empirical and molecular formulas > worked example > maths line
    "empirical formula = <b>C<sub>2</sub>H<sub>4</sub>O</b>": "실험식 = <b>C<sub>2</sub>H<sub>4</sub>O</b>",

    // Empirical and molecular formulas > exam tip (shown in English + translation) > p
    "A typical 3-mark combustion question gives one mark for the masses or amounts of C and H, one for oxygen by difference, and one for the formula. Lay your working out in that order so each mark is easy to find.": "전형적인 3점짜리 연소 문제는 C와 H의 질량이나 양에 1점, 차이로 구한 산소에 1점, 화학식에 1점을 줘요. 각 점수를 쉽게 찾을 수 있도록 풀이를 이 순서로 쓰세요.",

    // Empirical and molecular formulas > try it > p
    "A compound contains only C, H and O. Burning 1.150 g of it completely gives 2.197 g of <span class=\"chem\">CO2</span> and 1.349 g of <span class=\"chem\">H2O</span>. Calculate the mass of oxygen in the 1.150 g sample, to 3 significant figures.": "어떤 화합물은 C, H, O만으로 이루어져 있어요. 이 화합물 1.150 g을 완전히 태우면 <span class=\"chem\">CO2</span> 2.197 g과 <span class=\"chem\">H2O</span> 1.349 g이 생겨요. 1.150 g 시료 속 산소의 질량을 유효 숫자 3자리로 계산하시오 (calculate).",

    // Empirical and molecular formulas > try it > li
    "Find the mass of carbon from the CO<sub>2</sub> and the mass of hydrogen from the H<sub>2</sub>O. Then subtract both from 1.150 g.": "CO<sub>2</sub>에서 탄소의 질량을, H<sub>2</sub>O에서 수소의 질량을 구하세요. 그다음 1.150 g에서 둘을 빼세요.",

    // Empirical and molecular formulas > try it > li
    "<i>m</i>(C) = 2.197 × 12.01 ÷ 44.01 and <i>m</i>(H) = 1.349 × 2.02 ÷ 18.02. Do not round them before you subtract.": "",

    // Empirical and molecular formulas > try it > p
    "<strong>0.399 g</strong> of oxygen. Carrying on: the amounts are C 0.04992 mol, H 0.1497 mol and O 0.02495 mol, a ratio of 2 : 6 : 1, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O.": "",

    // Empirical and molecular formulas > h3
    "From empirical formula to molecular formula": "",

    // Empirical and molecular formulas > p
    "The empirical formula gives the ratio. To find the real molecule you need one more fact: the molar mass. It usually comes from another experiment, often a gas measurement (topic 1.5).": "",

    // Empirical and molecular formulas > li
    "Work out the mass of the empirical formula, from <i>A</i><sub>r</sub> values.": "",

    // Empirical and molecular formulas > li
    "Divide the molar mass by the empirical formula mass. The answer should be a whole number.": "",

    // Empirical and molecular formulas > li
    "Multiply every subscript in the empirical formula by that whole number.": "",

    // Empirical and molecular formulas > worked example > h3
    "Molecular formula from molar mass": "",

    // Empirical and molecular formulas > worked example > p
    "The compound in the last worked example has the empirical formula <span class=\"chem\">C2H4O</span>. Its molar mass is 88.12 g mol<sup>−1</sup>. Determine its molecular formula.": "",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the empirical formula mass": "",

    // Empirical and molecular formulas > worked example > p
    "You need to know how heavy one “unit” of the ratio is.": "",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide the molar mass by it": "",

    // Empirical and molecular formulas > worked example > p
    "This tells you how many empirical units fit into one molecule.": "",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Multiply the subscripts": "",

    // Empirical and molecular formulas > worked example > p
    "Two units per molecule, so double every subscript.": "",

    // Empirical and molecular formulas > try it > data-label attribute
    "Carbon atoms": "",

    // Empirical and molecular formulas > try it > p
    "A sugar has the empirical formula <span class=\"chem\">CH2O</span> and a molar mass of 180.18 g mol<sup>−1</sup>. How many carbon atoms are in one molecule of the sugar? (<i>A</i><sub>r</sub>: C 12.01, H 1.01, O 16.00)": "",

    // Empirical and molecular formulas > try it > li
    "Find the mass of one CH<sub>2</sub>O unit first.": "",

    // Empirical and molecular formulas > try it > li
    "The empirical formula mass is 30.03. Divide 180.18 by it to see how many units make one molecule.": "",

    // Empirical and molecular formulas > try it > maths line
    "empirical formula mass = 12.01 + 2(1.01) + 16.00 = 30.03": "",

    // Empirical and molecular formulas > try it > p
    "The molecular formula is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, so there are <strong>6</strong> carbon atoms.": "",

    // Empirical and molecular formulas > common mistake > p
    "Read which formula the question wants. If it asks for the empirical formula of <span class=\"chem\">C4H8O2</span>, simplify to <span class=\"chem\">C2H4O</span>. If it asks for the molecular formula, do not simplify.": "",

    // Empirical and molecular formulas > h3
    "Water of crystallization from heating a hydrate": "",

    // Empirical and molecular formulas > p
    "The same table method finds the <i>x</i> in a hydrated salt such as <span class=\"chem\">CuSO4.xH2O</span>. A weighed sample is heated so the water is driven off as steam. What is left is the <dfn data-def=\"Without water. An anhydrous salt has lost its water of crystallization.\">anhydrous</dfn> salt. The mass lost is the mass of water.": "",

    // Empirical and molecular formulas > data-def attribute
    "Without water. An anhydrous salt has lost its water of crystallization.": "",

    // Empirical and molecular formulas > p
    "Here the two “elements” in the table are the anhydrous salt and the water. Divide each mass by its own molar mass, then divide by the amount of salt.": "",

    // Empirical and molecular formulas > worked example > h3
    "Finding x in a hydrate": "",

    // Empirical and molecular formulas > worked example > p
    "4.99 g of hydrated copper(II) sulfate, <span class=\"chem\">CuSO4.xH2O</span>, is heated to constant mass. 3.19 g of anhydrous <span class=\"chem\">CuSO4</span> remains. Determine <i>x</i>.": "",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of water lost": "",

    // Empirical and molecular formulas > worked example > p
    "The only thing that left the crucible was water.": "",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Convert both masses to moles": "",

    // Empirical and molecular formulas > worked example > p
    "The formula is a mole ratio of salt to water. <i>M</i>(CuSO<sub>4</sub>) = 63.55 + 32.07 + 4(16.00) = 159.62 g mol<sup>−1</sup>.": "",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the amount of salt": "",

    // Empirical and molecular formulas > worked example > p
    "You want the number of waters for each one CuSO<sub>4</sub>.": "",

    // Empirical and molecular formulas > worked example > p
    "<i>x</i> must be a whole number, because it counts molecules.": "",

    // Empirical and molecular formulas > worked example > maths line
    "<i>x</i> = <b>5</b>, so the formula is CuSO<sub>4</sub>·5H<sub>2</sub>O": "",

    // Empirical and molecular formulas > exam tip (shown in English + translation) > p
    "“Heat to constant mass” means heat, cool, weigh, and repeat until two weighings agree. It shows that all the water has gone. If some water stays behind, the mass lost is too small and the calculated <i>x</i> is too low.": "",

    // Empirical and molecular formulas > try it > p
    "6.16 g of hydrated magnesium sulfate, <span class=\"chem\">MgSO4.xH2O</span>, is heated to constant mass. 3.01 g of anhydrous <span class=\"chem\">MgSO4</span> remains. Determine the whole number <i>x</i>. (<i>M</i>: <span class=\"chem\">MgSO4</span> 120.38 g mol<sup>−1</sup>, <span class=\"chem\">H2O</span> 18.02 g mol<sup>−1</sup>)": "",

    // Empirical and molecular formulas > try it > li
    "The mass of water is the mass lost on heating: 6.16 g − 3.01 g.": "",

    // Empirical and molecular formulas > try it > li
    "Convert 3.01 g of MgSO<sub>4</sub> and 3.15 g of H<sub>2</sub>O to moles. Then divide the moles of water by the moles of salt.": "",

    // Empirical and molecular formulas > try it > p
    "Rounded to a whole number, <strong><i>x</i> = 7</strong>: MgSO<sub>4</sub>·7H<sub>2</sub>O.": "",

    // Empirical and molecular formulas > not needed for IB > p
    "Combustion problems in this topic use compounds of carbon, hydrogen and oxygen, with oxygen found by difference. You do not need to know how an elemental analyser works.": "",

    // Empirical and molecular formulas > data-title attribute
    "Combustion, molecular formulas and hydrates: quick check": "",

    // Concentration of solutions > data-toc attribute
    "Concentration": "",

    // Concentration of solutions > h2
    "Concentration of solutions": "",

    // Concentration of solutions > p
    "Two glasses of squash can hold the same amount of syrup but taste different, because one has more water in it. What matters is how much is dissolved <em>per unit volume</em>. That is concentration.": "",

    // Concentration of solutions > p
    "A <dfn data-def=\"The substance that dissolves.\">solute</dfn> dissolves in a <dfn data-def=\"The liquid that does the dissolving, usually water.\">solvent</dfn> to make a <dfn data-def=\"A homogeneous mixture of a solute dissolved in a solvent.\">solution</dfn>. The <dfn data-def=\"The amount of solute, in mol, per cubic decimetre of solution. Units mol dm^-3. Shown by square brackets.\">molar concentration</dfn> is the amount of solute divided by the volume of the solution. Its units are <span class=\"unit\">mol dm-3</span>.": "",

    // Concentration of solutions > data-def attribute
    "The substance that dissolves.": "",

    // Concentration of solutions > data-def attribute
    "The liquid that does the dissolving, usually water.": "",

    // Concentration of solutions > data-def attribute
    "A homogeneous mixture of a solute dissolved in a solvent.": "",

    // Concentration of solutions > data-def attribute
    "The amount of solute, in mol, per cubic decimetre of solution. Units mol dm^-3. Shown by square brackets.": "",

    // Concentration of solutions > equation > dd
    "amount of solute <span class=\"unit\">mol</span>": "",

    // Concentration of solutions > equation > dd
    "molar concentration <span class=\"unit\">mol dm-3</span>": "",

    // Concentration of solutions > equation > dd
    "volume of solution <span class=\"unit\">dm3</span>": "",

    // Concentration of solutions > data booklet note > p
    "<i>n</i> = <i>CV</i> is printed in the data booklet. Rearranged: <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> and <span class=\"mono\"><i>V</i> = <i>n</i> ÷ <i>C</i></span>. The volume must be in dm<sup>3</sup>.": "",

    // Concentration of solutions > p
    "Square brackets mean “molar concentration of”. So <span class=\"mono\">[NaCl] = 0.400 mol dm<sup>−3</sup></span> reads “the concentration of sodium chloride is 0.400 moles per cubic decimetre”. You are expected to use this notation.": "",

    // Concentration of solutions > key idea > p
    "<i>V</i> is the volume of the finished <strong>solution</strong>, not the volume of water you added. Dissolving a solid changes the volume a little, which is why solutions are made up to a mark and not by adding a measured volume of water.": "",

    // Concentration of solutions > h3
    "Two ways to state a concentration": "",

    // Concentration of solutions > p
    "The <dfn data-def=\"The mass of solute, in g, per cubic decimetre of solution. Units g dm^-3.\">mass concentration</dfn> is the mass of solute per volume of solution, in <span class=\"unit\">g dm-3</span>. The two are linked by the molar mass, in exactly the way mass and moles are.": "",

    // Concentration of solutions > data-def attribute
    "The mass of solute, in g, per cubic decimetre of solution. Units g dm^-3.": "",

    // Concentration of solutions > equation > maths line
    "mass concentration = <i>C</i> × <i>M</i>": "",

    // Concentration of solutions > equation > dd
    "molar mass of the solute <span class=\"unit\">g mol-1</span>": "",

    // Concentration of solutions > p
    "The mass concentration comes out in <span class=\"unit\">g dm-3</span>. For example, 0.0500 mol dm<sup>−3</sup> sulfuric acid (<i>M</i> = 98.09 g mol<sup>−1</sup>) is <span class=\"mono\">0.0500 × 98.09 = 4.90 g dm<sup>−3</sup></span>. To go from g dm<sup>−3</sup> to mol dm<sup>−3</sup>, divide by <i>M</i>.": "",

    // Concentration of solutions > li
    "Ask the three questions. Is the solute given as a mass, an amount or a concentration?": "",

    // Concentration of solutions > li
    "Convert every volume from cm<sup>3</sup> to dm<sup>3</sup> by dividing by 1000. Write this as its own line.": "",

    // Concentration of solutions > li
    "If you have a mass of solute, convert it to moles with <i>n</i> = <i>m</i> ÷ <i>M</i>.": "",

    // Concentration of solutions > li
    "Use <i>n</i> = <i>CV</i>, rearranged for what you want.": "",

    // Concentration of solutions > li
    "Check the size of the answer, round, and write the unit.": "",

    // Concentration of solutions > worked example > h3
    "Concentration from mass and volume": "",

    // Concentration of solutions > worked example > p
    "5.85 g of sodium chloride, <span class=\"chem\">NaCl</span>, is dissolved in distilled water and the solution is made up to 250.0 cm<sup>3</sup>. Calculate the concentration in mol dm<sup>−3</sup> and in g dm<sup>−3</sup>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Convert the volume to dm³": "",

    // Concentration of solutions > worked example > p
    "<i>n</i> = <i>CV</i> only works with the volume in dm<sup>3</sup>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Convert the mass to moles": "",

    // Concentration of solutions > worked example > p
    "Molar concentration needs an amount in mol, not a mass.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Divide amount by volume": "",

    // Concentration of solutions > worked example > p
    "Rearranging <i>n</i> = <i>CV</i> gives <i>C</i> = <i>n</i> ÷ <i>V</i>.": "",

    // Concentration of solutions > worked example > p
    "The mass has 3 significant figures, the fewest in the data.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Find the mass concentration": "",

    // Concentration of solutions > worked example > p
    "Mass per volume uses the mass directly. There is no need to go through moles.": "",

    // Concentration of solutions > worked example > p
    "0.400 mol dm<sup>−3</sup>, which is 23.4 g dm<sup>−3</sup>": "",

    // Concentration of solutions > common mistake > p
    "Dividing by 250 instead of 0.2500 gives 0.000400, an answer 1000 times too small. Mixing up the two units is also common. For the same solution, the value in <span class=\"unit\">g dm-3</span> is always the bigger number, because every molar mass is greater than 1 g mol<sup>−1</sup>.": "",

    // Concentration of solutions > try it > p
    "Calculate the amount, in mol, of solute in 20.0 cm<sup>3</sup> of a 0.150 mol dm<sup>−3</sup> solution.": "",

    // Concentration of solutions > try it > li
    "Which relationship links amount, concentration and volume? What unit must the volume be in?": "",

    // Concentration of solutions > try it > li
    "<i>V</i> = 20.0 ÷ 1000 = 0.0200 dm<sup>3</sup>. Then <i>n</i> = <i>C</i> × <i>V</i>.": "",

    // Concentration of solutions > try it > p
    "<strong>0.00300 mol</strong>, or 3.00 × 10<sup>−3</sup> mol.": "",

    // Concentration of solutions > try it > p
    "1.20 g of sodium hydroxide, <span class=\"chem\">NaOH</span>, is dissolved and made up to 250.0 cm<sup>3</sup> of solution. Calculate [NaOH]. (<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>)": "",

    // Concentration of solutions > try it > li
    "Two conversions are needed before you can divide: mass to moles, and cm<sup>3</sup> to dm<sup>3</sup>.": "",

    // Concentration of solutions > try it > li
    "<i>n</i> = 1.20 ÷ 40.00 = 0.0300 mol and <i>V</i> = 0.2500 dm<sup>3</sup>. Now <i>C</i> = <i>n</i> ÷ <i>V</i>.": "",

    // Concentration of solutions > try it > p
    "<strong>0.120 mol dm<sup>−3</sup></strong>": "",

    // Concentration of solutions > try it > p
    "A bottle is labelled “sodium hydroxide, 8.00 g dm<sup>−3</sup>”. Convert this to a molar concentration. (<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>)": "",

    // Concentration of solutions > try it > li
    "Going from grams to moles: do you multiply or divide by the molar mass?": "",

    // Concentration of solutions > try it > li
    "Divide: <span class=\"mono\">8.00 g dm<sup>−3</sup> ÷ 40.00 g mol<sup>−1</sup></span>.": "",

    // Concentration of solutions > try it > p
    "<strong>0.200 mol dm<sup>−3</sup></strong>. The units confirm it: g dm<sup>−3</sup> ÷ g mol<sup>−1</sup> = mol dm<sup>−3</sup>.": "",

    // Concentration of solutions > h3
    "Concentration of the ions": "",

    // Concentration of solutions > p
    "When an ionic compound dissolves, its ions separate. The formula tells you how many of each you get. One <span class=\"chem\">MgCl2</span> gives one <span class=\"chem\">Mg^2+</span> and two <span class=\"chem\">Cl-</span>. So in 0.150 mol dm<sup>−3</sup> <span class=\"chem\">MgCl2</span>, <span class=\"mono\">[Mg<sup>2+</sup>] = 0.150 mol dm<sup>−3</sup></span> and <span class=\"mono\">[Cl<sup>−</sup>] = 2 × 0.150 = 0.300 mol dm<sup>−3</sup></span>.": "",

    // Concentration of solutions > data-title attribute
    "Concentration calculations: quick check": "",

    // Concentration of solutions > h3
    "Making a standard solution": "",

    // Concentration of solutions > p
    "A <dfn data-def=\"A solution whose concentration is known accurately.\">standard solution</dfn> is one whose concentration is known accurately. It is made in a <dfn data-def=\"A flask with a long narrow neck and a single graduation mark. It holds one accurately known volume, such as 250.0 cm^3.\">volumetric flask</dfn>, which has a single mark on a narrow neck and holds one precise volume.": "",

    // Concentration of solutions > data-def attribute
    "A solution whose concentration is known accurately.": "",

    // Concentration of solutions > data-def attribute
    "A flask with a long narrow neck and a single graduation mark. It holds one accurately known volume, such as 250.0 cm^3.": "",

    // Concentration of solutions > widget > data-title attribute
    "Solution lab": "",

    // Concentration of solutions > widget > figcaption
    "Choose a solute, a mass and a flask to see both concentrations with the working. Switch the task to “Dilute a stock solution” to explore <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. Flask sizes are drawn roughly to scale. The depth of shading is illustrative: it shows “more concentrated” or “less concentrated”, not a measured colour.": "",

    // Concentration of solutions > worked example > h3
    "Mass needed for a standard solution": "",

    // Concentration of solutions > worked example > p
    "Calculate the mass of anhydrous sodium carbonate, <span class=\"chem\">Na2CO3</span>, needed to prepare 250.0 cm<sup>3</sup> of a 0.1000 mol dm<sup>−3</sup> solution.": "",

    // Concentration of solutions > worked example > p
    "Given: a concentration and a volume. Wanted: a mass. Route: solution → moles → mass.": "",

    // Concentration of solutions > worked example > maths line
    "<i>n</i> = <i>CV</i> &nbsp; then &nbsp; <i>m</i> = <i>n</i> × <i>M</i>": "",

    // Concentration of solutions > worked example > p
    "The concentration is per dm<sup>3</sup>, so the volume must match.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Find the amount needed": "",

    // Concentration of solutions > worked example > p
    "This is the amount of solute that must end up in the flask.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Convert moles to mass": "",

    // Concentration of solutions > worked example > p
    "A balance measures grams, not moles.": "",

    // Concentration of solutions > worked example > p
    "Standard-solution data are given to 4 significant figures, so the answer is too.": "",

    // Concentration of solutions > worked example > p
    "2.650 g of Na<sub>2</sub>CO<sub>3</sub>": "",

    // Concentration of solutions > p
    "Calculating the mass is half the job. You also need to be able to describe the procedure:": "",

    // Concentration of solutions > li
    "Weigh the solid accurately on a balance.": "",

    // Concentration of solutions > li
    "Dissolve it in a small volume of <strong>distilled</strong> (or deionized) water in a beaker, stirring until none is left.": "",

    // Concentration of solutions > li
    "Pour the solution through a funnel into the volumetric flask. Rinse the beaker, the stirring rod and the funnel with distilled water, and add the <strong>rinsings</strong> to the flask.": "",

    // Concentration of solutions > li
    "Add distilled water until the bottom of the meniscus sits on the <strong>mark</strong>. Add the last drops with a dropping pipette.": "",

    // Concentration of solutions > li
    "Stopper the flask and <strong>invert</strong> it several times to mix.": "",

    // Concentration of solutions > exam tip (shown in English + translation) > p
    "Markschemes reward specific words: <strong>volumetric flask</strong>, <strong>distilled or deionized water</strong>, transfer <strong>with rinsings</strong>, <strong>make up to the mark</strong>, <strong>stopper and invert to mix</strong>. Writing only “water” can lose a mark. “Add 250 cm<sup>3</sup> of water” is wrong chemistry: the flask is filled <em>up to</em> the mark, so the solution, not the water, is 250.0 cm<sup>3</sup>.": "",

    // Concentration of solutions > try it > p
    "Calculate the mass of hydrated copper(II) sulfate, <span class=\"chem\">CuSO4.5H2O</span>, needed to prepare 100.0 cm<sup>3</sup> of a 0.200 mol dm<sup>−3</sup> solution. (<i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>)": "",

    // Concentration of solutions > try it > li
    "Route: solution → moles → mass. Start by converting 100.0 cm<sup>3</sup> to dm<sup>3</sup>.": "",

    // Concentration of solutions > try it > li
    "<i>n</i> = 0.200 × 0.1000 = 0.0200 mol. Then <i>m</i> = <i>n</i> × <i>M</i>, using the molar mass of the hydrate, because that is the solid you weigh.": "",

    // Concentration of solutions > try it > p
    "To 3 significant figures (set by 0.200): <strong>4.99 g</strong>.": "",

    // Concentration of solutions > h3
    // widget string (assets/js/widgets-s1-4.js)
    "Dilution": "",

    // Concentration of solutions > p
    "Adding water to squash makes it weaker, but the syrup is all still there. <dfn data-def=\"Lowering the concentration of a solution by adding more solvent. The amount of solute does not change.\">Dilution</dfn> lowers the concentration by adding solvent. The amount of solute does not change.": "",

    // Concentration of solutions > data-def attribute
    "Lowering the concentration of a solution by adding more solvent. The amount of solute does not change.": "",

    // Concentration of solutions > p
    "Amount before = amount after. Since <i>n</i> = <i>CV</i>, that gives the dilution relationship.": "",

    // Concentration of solutions > equation > dd
    "concentration of the stock solution <span class=\"unit\">mol dm-3</span>": "",

    // Concentration of solutions > equation > dd
    "volume of stock solution taken <span class=\"unit\">cm3</span>": "",

    // Concentration of solutions > equation > dd
    "concentration after dilution <span class=\"unit\">mol dm-3</span>": "",

    // Concentration of solutions > equation > dd
    "final total volume <span class=\"unit\">cm3</span>": "",

    // Concentration of solutions > p
    "This relationship is not in the data booklet, so learn where it comes from. The two volumes may both be in cm<sup>3</sup> or both in dm<sup>3</sup>, as long as they match. The <dfn data-def=\"How many times a solution has been diluted: final volume divided by the volume of stock taken.\">dilution factor</dfn> is <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>. A “10 times” dilution divides the concentration by 10.": "",

    // Concentration of solutions > data-def attribute
    "How many times a solution has been diluted: final volume divided by the volume of stock taken.": "",

    // Concentration of solutions > worked example > h3
    "Volume of stock solution for a dilution": "",

    // Concentration of solutions > worked example > p
    "What volume of 2.00 mol dm<sup>−3</sup> hydrochloric acid is needed to prepare 250.0 cm<sup>3</sup> of 0.100 mol dm<sup>−3</sup> hydrochloric acid?": "",

    // Concentration of solutions > worked example > data-title attribute
    "Label the four quantities": "",

    // Concentration of solutions > worked example > p
    "“1” is the stock solution you start with. “2” is the diluted solution you end with. The unknown is <i>V</i><sub>1</sub>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Rearrange for the unknown": "",

    // Concentration of solutions > worked example > p
    "The amount of HCl is the same before and after: <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>.": "",

    // Concentration of solutions > worked example > p
    "The concentration units cancel, so <i>V</i><sub>1</sub> comes out in the same unit as <i>V</i><sub>2</sub>.": "",

    // Concentration of solutions > worked example > data-title attribute
    "Check with the dilution factor": "",

    // Concentration of solutions > worked example > data-label attribute
    // Avogadro’s law and reacting gas volumes > worked example > data-label attribute
    "Check": "",

    // Concentration of solutions > worked example > p
    "The concentration falls 20 times (2.00 ÷ 0.100), so the volume must grow 20 times.": "",

    // Concentration of solutions > worked example > p
    "12.5 cm<sup>3</sup> of the 2.00 mol dm<sup>−3</sup> acid": "",

    // Concentration of solutions > p
    "You also need to describe the procedure. Markschemes look for these points:": "",

    // Concentration of solutions > li
    "Use a <strong>pipette</strong> (or a burette) to measure the stock solution. A measuring cylinder is not precise enough.": "",

    // Concentration of solutions > li
    "Run it into a <strong>volumetric flask</strong> of the right size, here 250.0 cm<sup>3</sup>.": "",

    // Concentration of solutions > li
    "Add <strong>distilled water</strong> up to the <strong>mark</strong>.": "",

    // Concentration of solutions > li
    "Stopper and invert several times to <strong>mix</strong>.": "",

    // Concentration of solutions > common mistake > p
    "“Add 237.5 cm<sup>3</sup> of water” is not the right description. <i>V</i><sub>2</sub> is the <em>total</em> final volume, and volumes do not always add exactly. The correct instruction is to make the solution up to the mark.": "",

    // Concentration of solutions > p
    "A <dfn data-def=\"A series of dilutions in which each new solution is made by diluting the one before it by the same factor.\">serial dilution</dfn> repeats the same step. Dilute a 1.00 mol dm<sup>−3</sup> stock 10 times to get 0.100 mol dm<sup>−3</sup>. Dilute that 10 times to get 0.0100 mol dm<sup>−3</sup>, and so on. It reaches very low concentrations without measuring tiny volumes.": "",

    // Concentration of solutions > data-def attribute
    "A series of dilutions in which each new solution is made by diluting the one before it by the same factor.": "",

    // Concentration of solutions > try it > p
    "10.0 cm<sup>3</sup> of a 0.500 mol dm<sup>−3</sup> solution is pipetted into a 250.0 cm<sup>3</sup> volumetric flask and made up to the mark with distilled water. Calculate the concentration of the diluted solution.": "",

    // Concentration of solutions > try it > li
    "Which values are <i>C</i><sub>1</sub>, <i>V</i><sub>1</sub> and <i>V</i><sub>2</sub>? The unknown is <i>C</i><sub>2</sub>. It must be smaller than 0.500.": "",

    // Concentration of solutions > try it > p
    "<strong>0.0200 mol dm<sup>−3</sup></strong>. The dilution factor is 250.0 ÷ 10.0 = 25, and 0.500 ÷ 25 = 0.0200.": "",

    // Concentration of solutions > h3
    "Finding a concentration with a calibration curve": "",

    // Concentration of solutions > p
    "Some solutions are coloured, and the more concentrated they are, the more light they absorb. A <dfn data-def=\"An instrument that measures how much light of a chosen colour a solution absorbs.\">colorimeter</dfn> or spectrophotometer measures this as a number called absorbance. That gives a quick way to find an unknown concentration.": "",

    // Concentration of solutions > data-def attribute
    "An instrument that measures how much light of a chosen colour a solution absorbs.": "",

    // Concentration of solutions > li
    "Make several standard solutions of known concentration, usually by diluting one stock solution.": "",

    // Concentration of solutions > li
    "Measure the absorbance of each one.": "",

    // Concentration of solutions > li
    "Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. This graph is the <dfn data-def=\"A graph of an instrument reading against known concentrations, used to read off an unknown concentration.\">calibration curve</dfn>.": "",

    // Concentration of solutions > data-def attribute
    "A graph of an instrument reading against known concentrations, used to read off an unknown concentration.": "",

    // Concentration of solutions > li
    "Measure the absorbance of the unknown solution and read its concentration from the line.": "",

    // Concentration of solutions > widget > data-title attribute
    "Reading a calibration curve": "",

    // Concentration of solutions > widget > figcaption
    "The crosses are six standard solutions (example data, not a real experiment). Move the slider to set the absorbance of an unknown. Read across to the line, then down to the axis. The unknown must lie inside the range of the standards.": "",

    // Concentration of solutions > not needed for IB > p
    "You do not need the Beer–Lambert law or any equation for absorbance. You only need the idea: known standards, a graph, a line of best fit, and reading the unknown from it. Concentration units such as ppm, molality, percentage by mass and mole fraction are not in the IB guide. Use <span class=\"unit\">mol dm-3</span> and <span class=\"unit\">g dm-3</span>.": "",

    // Concentration of solutions > not needed for IB > p
    "Titration calculations, where a solution of known concentration is used to find another through a reaction, belong to Reactivity 2.1 and Reactivity 3.1. They combine <i>n</i> = <i>CV</i> from this section with the mole ratio of an equation.": "",

    // Concentration of solutions > data-title attribute
    "Standard solutions, dilution and calibration: quick check": "",

    // Avogadro’s law and reacting gas volumes > data-toc attribute
    // Avogadro’s law and reacting gas volumes > key idea > data-title attribute
    "Avogadro’s law": "",

    // Avogadro’s law and reacting gas volumes > h2
    "Avogadro’s law and reacting gas volumes": "",

    // Avogadro’s law and reacting gas volumes > p
    "In a gas, the particles are far apart. Almost all of the volume is empty space, so the size of the particles themselves hardly matters. A balloon of hydrogen and a balloon of carbon dioxide of the same size, at the same temperature and pressure, hold the same number of molecules, even though the carbon dioxide molecules are much heavier.": "",

    // Avogadro’s law and reacting gas volumes > key idea > p
    "Equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules.": "",

    // Avogadro’s law and reacting gas volumes > p
    "Equal numbers of molecules means equal amounts in moles. So for gases at the same temperature and pressure, volume is directly proportional to amount. Double the moles, double the volume.": "",

    // Avogadro’s law and reacting gas volumes > p
    "This has a very useful result. In a balanced equation, the coefficients give the mole ratio. For gases, the same coefficients also give the <strong>volume ratio</strong>. You can work in volumes and never calculate a single mole.": "",

    // Avogadro’s law and reacting gas volumes > widget > data-title attribute
    "Reacting gas volumes": "",

    // Avogadro’s law and reacting gas volumes > widget > figcaption
    "Pick a reaction, choose one gas and set its volume. The other volumes follow from the coefficients. Box heights are in proportion to the volumes. This is a model: each dot stands for the same very large number of molecules, and every box has the same number of dots per unit area, as Avogadro’s law says.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Write the balanced equation with state symbols. Only substances marked (g) take part in the volume ratio.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Check that all volumes are measured at the same temperature and pressure.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Find the coefficient of the gas you know and of the gas you want.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Volume wanted = volume known × (coefficient wanted ÷ coefficient known).": "",

    // Avogadro’s law and reacting gas volumes > li
    "Keep the same volume unit throughout. There is no need to convert cm<sup>3</sup> to dm<sup>3</sup>, because it is a ratio.": "",

    // Avogadro’s law and reacting gas volumes > worked example > h3
    "Volumes of reacting gases": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Propane burns completely in oxygen:": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "<span class=\"chem\">C3H8(g) + 5O2(g) -&gt; 3CO2(g) + 4H2O(l)</span>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "25.0 cm<sup>3</sup> of propane is burned. All volumes are measured at the same temperature and pressure. Calculate the volume of oxygen needed and the volume of carbon dioxide formed.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Read the mole ratio": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The coefficients tell you how many moles react. An unwritten coefficient is 1.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Use Avogadro’s law": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Same temperature and pressure, so the volume ratio of the gases equals the mole ratio.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "volume ratio = 1 : 5 : 3": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Scale to the volume given": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Multiply by coefficient wanted ÷ coefficient known. The coefficients are exact, so the answers keep 3 significant figures.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Check the state symbols": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The water is a liquid, (l). It is not a gas, so it adds nothing to the gas volume.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "gas before: 25.0 + 125 = 150 cm<sup>3</sup> &nbsp; gas after: 75.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "125 cm<sup>3</sup> of O<sub>2</sub> is needed and 75.0 cm<sup>3</sup> of CO<sub>2</sub> forms": "",

    // Avogadro’s law and reacting gas volumes > common mistake > p
    "Volumes of gases are not conserved in a reaction. In the example, 150 cm<sup>3</sup> of gas becomes 75.0 cm<sup>3</sup>. Mass is conserved and atoms are conserved, but the number of gas molecules can change. Also watch for <span class=\"chem\">H2O(l)</span>: counting liquid water as a gas volume is a common wrong answer.": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Carbon monoxide burns in oxygen: <span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>. What volume of oxygen is needed to react completely with 150 cm<sup>3</sup> of carbon monoxide, at the same temperature and pressure? Give your answer to 3 significant figures.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "What is the mole ratio of CO to O<sub>2</sub> in the equation? The volume ratio is the same.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "CO : O<sub>2</sub> = 2 : 1, so <i>V</i>(O<sub>2</sub>) = 150 × (1 ÷ 2).": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "<strong>75.0 cm<sup>3</sup></strong> of oxygen.": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Ammonia is made from nitrogen and hydrogen: <span class=\"chem\">N2(g) + 3H2(g) -&gt; 2NH3(g)</span>. What volume of ammonia forms when 45.0 cm<sup>3</sup> of hydrogen reacts completely, at the same temperature and pressure?": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "Find the coefficients of the gas you know (H<sub>2</sub>) and the gas you want (NH<sub>3</sub>).": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "H<sub>2</sub> : NH<sub>3</sub> = 3 : 2, so <i>V</i>(NH<sub>3</sub>) = 45.0 × (2 ÷ 3).": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "<strong>30.0 cm<sup>3</sup></strong> of ammonia. It also needs 45.0 ÷ 3 = 15.0 cm<sup>3</sup> of nitrogen.": "",

    // Avogadro’s law and reacting gas volumes > h3
    "When one gas is in excess": "",

    // Avogadro’s law and reacting gas volumes > p
    "Sometimes more of one gas is supplied than the reaction needs. The question then says that gas is “in <dfn data-def=\"More than the amount needed to react. Some of it is left over at the end.\">excess</dfn>”. Some of it is left over at the end, mixed with the gases that were made.": "",

    // Avogadro’s law and reacting gas volumes > data-def attribute
    "More than the amount needed to react. Some of it is left over at the end.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Use the volume ratio to find how much of the excess gas <em>reacts</em>.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Gas left over = volume supplied − volume that reacted.": "",

    // Avogadro’s law and reacting gas volumes > li
    "Gas at the end = gas left over + gaseous products. Leave out anything marked (l) or (s).": "",

    // Avogadro’s law and reacting gas volumes > worked example > h3
    "Gas left at the end": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "10.0 cm<sup>3</sup> of methane is burned in 50.0 cm<sup>3</sup> of oxygen, which is an excess:": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "<span class=\"chem\">CH4(g) + 2O2(g) -&gt; CO2(g) + 2H2O(l)</span>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "All volumes are measured at the same temperature and pressure. Calculate the total volume of gas at the end.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the oxygen that reacts": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "All the methane burns, because oxygen is in excess. The ratio CH<sub>4</sub> : O<sub>2</sub> is 1 : 2.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "<i>V</i>(O<sub>2</sub> reacting) = 10.0 cm<sup>3</sup> × <span class=\"frac\"><span>2</span><span>1</span></span> = 20.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the oxygen left over": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "What was supplied, minus what was used.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    // Avogadro’s law and reacting gas volumes > try it > maths line
    "<i>V</i>(O<sub>2</sub> left) = 50.0 cm<sup>3</sup> − 20.0 cm<sup>3</sup> = 30.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the gas made": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The ratio CH<sub>4</sub> : CO<sub>2</sub> is 1 : 1. The water is a liquid, so it is not counted.": "",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Add the gases present at the end": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The container now holds the oxygen left over and the carbon dioxide made.": "",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "<i>V</i>(total) = 30.0 cm<sup>3</sup> + 10.0 cm<sup>3</sup> = <b>40.0 cm<sup>3</sup></b>": "",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "40.0 cm<sup>3</sup> of gas: 30.0 cm<sup>3</sup> of O<sub>2</sub> and 10.0 cm<sup>3</sup> of CO<sub>2</sub>": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "40.0 cm<sup>3</sup> of carbon monoxide is burned in 50.0 cm<sup>3</sup> of oxygen, which is an excess: <span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>. Calculate the total volume of gas at the end, at the same temperature and pressure.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "Two gases are present at the end: the oxygen left over and the carbon dioxide made. Find each one.": "",

    // Avogadro’s law and reacting gas volumes > try it > li
    "O<sub>2</sub> reacting = 40.0 × (1 ÷ 2) = 20.0 cm<sup>3</sup>, so 30.0 cm<sup>3</sup> is left. CO<sub>2</sub> made = 40.0 × (2 ÷ 2).": "",

    // Avogadro’s law and reacting gas volumes > try it > maths line
    "<i>V</i>(O<sub>2</sub> reacting) = 40.0 cm<sup>3</sup> × <span class=\"frac\"><span>1</span><span>2</span></span> = 20.0 cm<sup>3</sup>": "",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Total: 30.0 + 40.0 = <strong>70.0 cm<sup>3</sup></strong>.": "",

    // Avogadro’s law and reacting gas volumes > exam tip (shown in English + translation) > p
    "If you are asked to state Avogadro’s law, include all three parts: equal volumes of gases, same temperature and pressure, equal numbers of molecules. In a calculation, write “volume ratio = mole ratio” before you use the coefficients.": "",

    // Avogadro’s law and reacting gas volumes > not needed for IB > p
    "The molar volume of a gas (22.7 dm<sup>3</sup> mol<sup>−1</sup> at STP) and <i>PV</i> = <i>nRT</i> are in topic 1.5. In this topic, the question tells you which gas is in excess. Working out for yourself which reactant runs out first (the limiting reactant) is taught in Reactivity 2.1.": "",

    // Avogadro’s law and reacting gas volumes > data-title attribute
    "Avogadro’s law: quick check": "",

    // Where this topic stops > data-toc attribute
    "What is not in 1.4": "",

    // Where this topic stops > h2
    "Where this topic stops": "",

    // Where this topic stops > p
    "Textbooks and online tutors often pile extra material onto the mole. This table shows what is in Structure 1.4, what comes later in the course, and what you can leave alone.": "",

    // Where this topic stops > table > caption
    "In, later, or not needed": "",

    // Where this topic stops > table > th
    "Idea": "",

    // Where this topic stops > table > th
    "Status": "",

    // Where this topic stops > table > th
    "Moles ⇄ particles, mass, concentration": "",

    // Where this topic stops > table > td
    "In this topic (1.4.1, 1.4.3, 1.4.5)": "",

    // Where this topic stops > table > th
    "Empirical and molecular formulas, including combustion data": "",

    // Where this topic stops > table > td
    "In this topic (1.4.4)": "",

    // Where this topic stops > table > th
    "Standard solutions, dilution, calibration curves": "",

    // Where this topic stops > table > td
    "In this topic (1.4.5)": "",

    // Where this topic stops > table > th
    "Gas volume ratios from an equation, including a gas you are told is in excess": "",

    // Where this topic stops > table > td
    "In this topic (1.4.6)": "",

    // Where this topic stops > table > th
    "Reacting masses from an equation": "",

    // Where this topic stops > table > td
    "Later: Reactivity 2.1": "",

    // Where this topic stops > table > th
    "Finding the limiting reactant, percentage yield, atom economy": "",

    // Where this topic stops > table > th
    "Percentage uncertainty of a concentration you have made": "",

    // Where this topic stops > table > td
    "Later: the uncertainty skills in Tool 3": "",

    // Where this topic stops > table > th
    "Titration calculations": "",

    // Where this topic stops > table > td
    "Later: Reactivity 2.1 and 3.1": "",

    // Where this topic stops > table > th
    "Molar volume at STP, <i>PV</i> = <i>nRT</i>": "",

    // Where this topic stops > table > td
    "Next topic: Structure 1.5": "",

    // Where this topic stops > table > th
    "ppm, molality, percentage by mass as a concentration, mole fraction": "",

    // Where this topic stops > table > td
    "Not in the IB guide": "",

    // Where this topic stops > table > th
    "Old values: 22.4 dm<sup>3</sup> mol<sup>−1</sup>, “24 dm<sup>3</sup> at room temperature”": "",

    // Where this topic stops > table > td
    "Not used. The data booklet gives 22.7 dm<sup>3</sup> mol<sup>−1</sup> at STP": "",

    // Linking it up > data-toc attribute
    // Linking it up > h2
    "Linking it up": "",

    // Linking it up > p
    "The guide lists linking questions that connect this topic to others. Here are short answers to four of them.": "",

    // Linking it up > h3
    "How can molar masses be used with chemical equations to determine the masses of the products of a reaction?": "",

    // Linking it up > p
    "An equation gives a ratio in moles, but a balance measures grams. So you convert the mass of a reactant to moles with its molar mass, use the mole ratio from the equation, then convert the moles of product back to a mass with the product’s molar mass. The two outer steps are from this topic. The full method is taught in Reactivity 2.1.": "",

    // Linking it up > h3
    "What is the importance of approximation in the determination of an empirical formula?": "",

    // Linking it up > p
    "Measured masses always carry some error, so the mole ratio never comes out as perfect whole numbers. You have to judge when 2.99 means 3. You also have to judge when a value is <em>not</em> an error: 1.50 or 1.33 are real ratios that must be multiplied up, not rounded. Good approximation means rounding small differences and respecting large ones.": "",

    // Linking it up > h3
    "What are the considerations in the choice of glassware used in preparing a standard solution and a serial dilution?": "",

    // Linking it up > p
    "The concentration is only as accurate as the volumes. A volumetric flask and a pipette are each made to deliver one volume very precisely, so they are used for the final volume and for the portion of stock solution. A beaker or measuring cylinder has a much larger uncertainty and is only used for rough work, such as dissolving the solid. In a serial dilution, any error in one step is carried into every later step, which makes precise glassware even more important.": "",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most from an ideal gas?": "",

    // Linking it up > p
    "At low temperature and high pressure. Then the particles are close together and moving slowly, so the forces between them and the space the particles take up are no longer negligible. Topic 1.5 explains this.": "",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "",

    // Exam-style practice > p
    "Work through the three levels in order. Use the three questions on every calculation, and write your working on paper before you type an answer. Each set draws questions you have not yet answered correctly first.": "",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "",

    // Exam-style practice > data-title attribute
    "1.4 foundation": "",

    // Exam-style practice > h3
    "Exam standard": "",

    // Exam-style practice > data-title attribute
    "1.4 exam standard": "",

    // Exam-style practice > h3
    "Challenge: level 7 stretch": "",

    // Exam-style practice > data-title attribute
    "1.4 challenge": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Leave the charge off, or write it with ^ as in SO4^2-. A charge does not change the molar mass.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a formula, for example H2O or Ca(OH)2.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Use capital letters for element symbols: write H2O, not h2o.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "There is a closing bracket with no opening bracket.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Check the capital letters near “{ch}”. Each symbol starts with one capital letter.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "I cannot read “{ch}” in a formula.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling and the capital letters.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A bracket is not closed.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Something is missing after the dot.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution volumes are usually given in cm<sup>3</sup>. <i>n</i> = <i>CV</i> needs dm<sup>3</sup>. The gas equation in topic 1.5 needs m<sup>3</sup>. Going to a bigger unit makes the number smaller, so you divide.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "<i>n</i> = <i>m</i> ÷ <i>M</i> needs the mass in g, because <i>M</i> is in g mol<sup>−1</sup>. Going to a bigger unit makes the number smaller, so you divide.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Unit": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a number, for example 25.0.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "carbon dioxide": "",

    // widget string (assets/js/widgets-s1-4.js)
    "copper": "",

    // widget string (assets/js/widgets-s1-4.js)
    "iron": "",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium chloride": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Substance": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{name} ({formula})": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of sample": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Number line on a powers-of-ten scale from 1 to 10 to the power 24, marking the number of people on Earth, the number of seconds since the Big Bang, one mole, and the number of particles in your sample": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Particles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Inside them": "",

    // widget string (assets/js/widgets-s1-4.js)
    "people on Earth": "",

    // widget string (assets/js/widgets-s1-4.js)
    "about {n}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "seconds since the Big Bang": "",

    // widget string (assets/js/widgets-s1-4.js)
    "one mole": "",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of molecules": "",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of formula units": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Each big tick is 1000 times the one before.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} molecules": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} formula units": "",

    // widget string (assets/js/widgets-s1-4.js)
    "each particle is one atom": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{per} ions each: {N} ions": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{per} atoms each: {N} atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Counting one particle every second, one mole would take about {years} years. That is over a million times the age of the universe (about {age} years).": "",

    // widget string (assets/js/widgets-s1-4.js)
    "If all 8 billion people counted together at that speed, it would still take about {n} million years.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Yet one mole of water molecules is only {m} g of water: about {v} cm<sup>3</sup>, a little more than a tablespoon.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Formula": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Or load an example": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Build the formula with buttons": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dot for water of crystallization": "",

    // widget string (assets/js/widgets-s1-4.js)
    "open bracket": "",

    // widget string (assets/js/widgets-s1-4.js)
    "close bracket": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Delete": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Clear": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Atoms in one formula unit": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Breakdown of {formula}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Element": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Atoms": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Subtotal": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Total": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{value} <span class=\"mole-unitnote\">(no units)</span>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass (g)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount (mol)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount / mol": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Number of particles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution: concentration and volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration / mol dm<sup>−3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume at STP (dm³)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume at STP / dm<sup>3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration (mol dm⁻³)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "I am given": "",

    // widget string (assets/js/widgets-s1-4.js)
    "I want": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume of solution / cm<sup>3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume of solution made / cm<sup>3</sup>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Substance (formula)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The mole map: amount in moles in the centre, linked to mass, number of particles, solution concentration and volume, and gas volume at STP": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass, m": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Particles, N": "",

    // widget string (assets/js/widgets-s1-4.js)
    "a number": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount, n": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution, C and V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume, V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dm³, at STP only": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to mol: C × V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to C: n ÷ V": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to mol: ÷ 22.7": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to dm³: × 22.7": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Path": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Answer": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "amount": "",

    // widget string (assets/js/widgets-s1-4.js)
    "number of particles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "gas volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "GIVEN": "",

    // widget string (assets/js/widgets-s1-4.js)
    "WANTED": "",

    // widget string (assets/js/widgets-s1-4.js)
    "via moles": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A solution to a concentration is one step: <i>C</i> = <i>n</i> ÷ <i>V</i>. Pick a different quantity to convert to.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Pick two different quantities.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive number for the quantity you are given. You can write 1.5e22 or 1.5 × 10^22.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{error} The molar mass is needed whenever mass is involved.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the volume of the solution in cm<sup>3</sup>.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "({sf} s.f.)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "That is the number of molecules or formula units of {formula}. Each one contains {atoms} atoms, so the number of atoms is {atoms} × {N} = {total}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "For an element written as a single atom, such as {formula}, the particles are atoms.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the volume of solution made, in cm<sup>3</sup>.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "As a mass concentration of {formula}: {C} × {M} = {G}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> is the molar volume of an ideal gas at STP (273.15 K and 100 kPa) from the data booklet. It works only for gases, only at STP. Topic 1.5 covers it.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The formula is not needed for this conversion. Molar mass only matters when mass is involved.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The answer is rounded to {sf} significant figures to match the value you typed. The working keeps extra digits until the end.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "concentration": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{from} → {to} (one step)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{from} → amount → {to} (two steps)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g gives {c} g CO₂ and {h} g H₂O": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g gives {c} g CO₂ and {h} g H₂O (a hydrocarbon)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .5). Do not round it. Multiply every ratio by 2 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .33 or .67). Do not round it. Multiply every ratio by 3 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .25 or .75). Do not round it. Multiply every ratio by 4 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .2, .4, .6 or .8). Do not round it. Multiply every ratio by 5 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .17 or .83). Do not round it. Multiply every ratio by 6 to clear the fraction.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type of data": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Masses or percentages": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Combustion analysis": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Values are": "",

    // widget string (assets/js/widgets-s1-4.js)
    "percentages by mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "masses in g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Load an example": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Elements and their values": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Element {n}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Value {n}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Combustion data": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of compound / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of CO<sub>2</sub> formed / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of H<sub>2</sub>O formed / g": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Molar mass, if known / g mol<sup>−1</sup> (optional)": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Empirical formula mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive percentage for {sym}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive mass for {sym}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{sym} appears twice. Give each element one row.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Enter at least two elements.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "% by mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Your percentages add up to {sum} %, not 100 %. If one element (often oxygen) is not given, find it by difference: 100 − the others.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Percentages: imagine 100 g of the compound. Then {p} % means {p} g.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the three masses in grams.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of C = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of H = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The carbon and hydrogen add up to more than the sample mass. Check the three masses.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of O = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of O = {calc}, which is zero within rounding": "",

    // widget string (assets/js/widgets-s1-4.js)
    "All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Oxygen cannot be found this way because extra oxygen came from the air, so it is found by difference.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Here they account for the whole sample, so there is no oxygen: the compound is a hydrocarbon.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "÷ smallest": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Whole number": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The table method": "",

    // widget string (assets/js/widgets-s1-4.js)
    "These ratios are not close to whole numbers, even after multiplying by 2, 3, 4, 5 or 6. Check the data, and check that no element is missing.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Some ratios are a little away from whole numbers. Experimental data are never exact, so values within about 0.1 are rounded.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "empirical formula = {formula}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "empirical formula mass = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "<i>M</i> ÷ empirical formula mass = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "molecular formula = the empirical formula = {formula}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "molecular formula = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "That is not close to a whole number, so this molar mass does not fit this empirical formula. Check both.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "needs the molar mass": "",

    // widget string (assets/js/widgets-s1-4.js)
    "the mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "hydrated copper(II) sulfate": "",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium carbonate": "",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium hydroxide": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Task": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Make a standard solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Dilute a stock solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Stock concentration, C₁": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume taken by pipette, V₁": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask, V₂": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask filled to the graduation mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount of solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Molar concentration": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass concentration": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g of solute": "",

    // widget string (assets/js/widgets-s1-4.js)
    "weighed on a balance": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dissolve,": "",

    // widget string (assets/js/widgets-s1-4.js)
    "make up": "",

    // widget string (assets/js/widgets-s1-4.js)
    "to the mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{v} cm³ flask": "",

    // widget string (assets/js/widgets-s1-4.js)
    "blue solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "colourless solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A balance with {m} g of {name} and a {v} cm3 volumetric flask filled to the graduation mark": "",

    // widget string (assets/js/widgets-s1-4.js)
    "mass concentration = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The solid weighed is the hydrate, so its molar mass includes the five waters. One mole of the hydrate gives one mole of CuSO<sub>4</sub> in solution. Check: {C} × {M} = {G}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Check: {C} × {M} = {G}.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "{G} <span class=\"mole-unitnote\">(of hydrate)</span>": "",

    // widget string (assets/js/widgets-s1-4.js)
    "stock solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "pipette": "",

    // widget string (assets/js/widgets-s1-4.js)
    "add water": "",

    // widget string (assets/js/widgets-s1-4.js)
    "A beaker of stock solution, and a {v} cm3 volumetric flask holding the paler diluted solution": "",

    // widget string (assets/js/widgets-s1-4.js)
    "dilution factor = {calc}": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The amount of solute does not change: {n} mol leaves the pipette and {n} mol is in the flask. Only the volume changes. The volumes can stay in cm<sup>3</sup> here because the same unit is on both sides.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "diluted {factor} times": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Absorbance of the unknown": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Calibration curve: absorbance against concentration for six standard solutions, with a straight line of best fit": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Absorbance measured": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration read from the line": "",

    // widget string (assets/js/widgets-s1-4.js)
    "concentration / mol dm⁻³": "",

    // widget string (assets/js/widgets-s1-4.js)
    "absorbance": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Reaction": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas whose volume you set": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Its volume": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Boxes of gas whose heights are in proportion to the reacting volumes": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume ratio of the gases": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas before": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas after": "",

    // widget string (assets/js/widgets-s1-4.js)
    "liquid:": "",

    // widget string (assets/js/widgets-s1-4.js)
    "not a gas": "",

    // widget string (assets/js/widgets-s1-4.js)
    "you set this": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Same temperature and pressure, so the volume ratio of the gases equals the mole ratio in the equation. Multiply by (coefficient wanted ÷ coefficient given).": "",

    // widget string (assets/js/widgets-s1-4.js)
    "The water is a liquid here. Its volume is tiny compared with the gases, and Avogadro’s law applies to gases only, so it is left out of the gas volumes.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Total gas volume: {before} of reactants becomes {after} of product. Here the total stays the same, because the equation has the same number of gas molecules on each side. That is not true for most reactions.": "",

    // widget string (assets/js/widgets-s1-4.js)
    "Total gas volume: {before} of reactants becomes {after} of product. Volume is not conserved, because the number of gas molecules changes. Mass is conserved.": "",

  }
});
