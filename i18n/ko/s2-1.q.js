/* s2-1.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's2-1.q', {
  questions: {

    // ── s2-1-q001 · mcq · foundation · SL · Structure 2.1.1 · 1 mark
    "s2-1-q001": {
      // EN: <p>A magnesium atom has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span></span>. What is the charge of the ion that magnesium forms?</p>
      stem: "<p>마그네슘 원자의 전자 배치는 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span></span>이에요. 마그네슘이 만드는 이온의 전하는 무엇인가요?</p>",
      options: [
        // EN: 1+
        "1+",
        // EN: 2+
        "2+",
        // EN: 2−
        "2−",
        // EN: 6−
        "6−",
      ],
      hints: [
        // EN: Which shell is the outer shell, and how many electrons does it hold?
        "어느 껍질이 바깥 껍질이고, 그 껍질에 전자가 몇 개 있나요?",
        // EN: Magnesium is a metal. Do metal atoms lose or gain electrons?
        "마그네슘은 금속이에요. 금속 원자는 전자를 잃을까요, 얻을까요?",
      ],
      // EN: <p>The outer shell is shell 3, which holds 2 electrons (<span class="mono"><span class="nowrap">3s<sup>2</sup></span></span>). Magnesium is a metal, so the atom loses both.</p><div class="worked__math">charge = 12 protons − 10 electrons = 2+</div><p>The ion is <span class="chem">Mg^2+</span>, with the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.</p>
      solution: "<p>바깥 껍질은 3번째 껍질이고, 전자 2개가 들어 있어요(<span class=\"mono\"><span class=\"nowrap\">3s<sup>2</sup></span></span>). 마그네슘은 금속이므로 원자가 이 전자를 모두 잃어요.</p><div class=\"worked__math\">전하 = 양성자 12개 − 전자 10개 = 2+</div><p>이온은 <span class=\"chem\">Mg^2+</span>이고, 전자 배치는 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>이에요.</p>",
      misconception: {
        // EN (option A): Magnesium has two electrons in its outer shell, and it loses both of them, not one.
        "0": "마그네슘은 바깥 껍질에 전자가 2개 있고, 1개가 아니라 2개를 모두 잃어요.",
        // EN (option C): The size is right but the sign is wrong. Losing two negative electrons leaves more protons than electrons, so the ion is positive.
        "2": "크기는 맞지만 부호가 틀렸어요. 음전하를 띤 전자 2개를 잃으면 양성자가 전자보다 많아지므로, 이온은 양전하를 띠어요.",
        // EN (option D): A metal atom with two outer electrons does not gain six more. Losing two electrons takes far less energy.
        "3": "바깥 전자가 2개인 금속 원자는 전자 6개를 더 얻지 않아요. 전자 2개를 잃는 데 드는 에너지가 훨씬 적어요.",
      },
    },

    // ── s2-1-q002 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q002": {
      // EN: <p>Why does sodium chloride dissolve in water?</p>
      stem: "<p>염화 나트륨은 왜 물에 녹나요?</p>",
      options: [
        // EN: Polar water molecules attract the ions strongly enough to separate them from the lattice.
        "극성인 물 분자가 이온을 충분히 강하게 끌어당겨서 격자에서 떼어 내요.",
        // EN: Water molecules break the covalent bonds between the sodium atoms and the chlorine atoms.
        "물 분자가 나트륨 원자와 염소 원자 사이의 공유 결합을 끊어요.",
        // EN: Sodium chloride molecules fit into the spaces between the water molecules.
        "염화 나트륨 분자가 물 분자 사이의 빈 공간에 들어가요.",
        // EN: Water reacts with the ions and changes them back into atoms.
        "물이 이온과 반응해서 이온을 다시 원자로 바꿔요.",
      ],
      hints: [
        // EN: What particles is sodium chloride made of?
        "염화 나트륨은 어떤 입자로 이루어져 있나요?",
        // EN: A water molecule has a slightly negative end and a slightly positive end. What will each end attract?
        "물 분자에는 약간 음전하를 띤 쪽과 약간 양전하를 띤 쪽이 있어요. 각 쪽은 무엇을 끌어당길까요?",
      ],
      // EN: <p>Water molecules are polar. The slightly negative oxygen end is attracted to <span class="chem">Na+</span> ions and the slightly positive hydrogen end is attracted to <span class="chem">Cl-</span> ions. Together these attractions are strong enough to pull the ions out of the lattice. The separated ions are then surrounded by water molecules.</p>
      solution: "<p>물 분자는 극성이에요. 약간 음전하를 띤 산소 쪽은 <span class=\"chem\">Na+</span> 이온에 끌리고, 약간 양전하를 띤 수소 쪽은 <span class=\"chem\">Cl-</span> 이온에 끌려요. 이 인력들이 합쳐지면 이온을 격자에서 끌어낼 만큼 강해져요. 떨어져 나온 이온은 물 분자에 둘러싸여요.</p>",
      misconception: {
        // EN (option B): Sodium chloride has no covalent bonds between sodium and chlorine. It is a lattice of ions held together by electrostatic attraction.
        "1": "염화 나트륨에는 나트륨과 염소 사이의 공유 결합이 없어요. 염화 나트륨은 정전기적 인력으로 묶여 있는 이온의 격자예요.",
        // EN (option C): There are no sodium chloride molecules. The solid is a lattice of separate <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions.
        "2": "염화 나트륨 분자라는 것은 없어요. 고체는 서로 떨어져 있는 <span class=\"chem\">Na+</span> 이온과 <span class=\"chem\">Cl-</span> 이온으로 된 격자예요.",
        // EN (option D): The ions stay as ions in the solution. That is why the solution conducts electricity.
        "3": "이온은 용액 속에서도 이온으로 남아 있어요. 그래서 용액이 전기를 통해요.",
      },
    },

    // ── s2-1-q003 · numeric · foundation · SL · Structure 2.1.1 · 1 mark
    "s2-1-q003": {
      // EN: <p>An atom has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>4</sup></span></span>. How many electrons does this atom gain when it forms its usual ion?</p>
      stem: "<p>어떤 원자의 전자 배치는 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>4</sup></span></span>이에요. 이 원자가 보통의 이온이 될 때 전자를 몇 개 얻나요?</p>",
      hints: [
        // EN: Count the electrons in the outer shell: add the 3s and 3p electrons.
        "바깥 껍질의 전자 수를 세어 봐요: 3s 전자와 3p 전자를 더하세요.",
        // EN: A non-metal atom gains electrons until its outer s and p sublevels hold eight electrons.
        "비금속 원자는 바깥 s 부껍질과 p 부껍질에 전자가 8개 찰 때까지 전자를 얻어요.",
      ],
      // EN: <div class="worked__math">outer shell: 3s<sup>2</sup> 3p<sup>4</sup> = 6 electrons</div><div class="worked__math">electrons gained = 8 − 6 = 2</div><p>The atom gains <strong>2</strong> electrons and forms an ion with a charge of 2−. (The element is sulfur and the ion is <span class="chem">S^2-</span>.)</p>
      solution: "<div class=\"worked__math\">바깥 껍질: 3s<sup>2</sup> 3p<sup>4</sup> = 전자 6개</div><div class=\"worked__math\">얻는 전자 수 = 8 − 6 = 2</div><p>이 원자는 전자 <strong>2</strong>개를 얻어서 전하가 2−인 이온이 돼요. (이 원소는 황이고, 이온은 <span class=\"chem\">S^2-</span>예요.)</p>",
    },

    // ── s2-1-q004 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q004": {
      // EN: <p>What is an ionic bond?</p>
      stem: "<p>이온 결합이란 무엇인가요?</p>",
      options: [
        // EN: The transfer of electrons from a metal atom to a non-metal atom
        "금속 원자에서 비금속 원자로 전자가 이동하는 것",
        // EN: The electrostatic attraction between oppositely charged ions
        "반대 전하를 띤 이온 사이의 정전기적 인력",
        // EN: The electrostatic attraction between two nuclei and a shared pair of electrons
        "두 원자핵과 공유된 전자쌍 사이의 정전기적 인력",
        // EN: The electrostatic attraction between cations and delocalized electrons
        "양이온과 비편재화된 전자 사이의 정전기적 인력",
      ],
      hints: [
        // EN: The question asks what the bond <em>is</em>, not how the ions were made.
        "이 문제는 이온이 어떻게 만들어졌는지가 아니라, 결합이 <em>무엇인지</em>를 묻고 있어요.",
        // EN: Which two kinds of particle are in an ionic compound, and what force acts between them?
        "이온 결합 화합물에는 어떤 두 종류의 입자가 있고, 그 사이에는 어떤 힘이 작용하나요?",
      ],
      // EN: <p>An ionic bond is the electrostatic attraction between oppositely charged ions (cations and anions).</p>
      solution: "<p>이온 결합은 반대 전하를 띤 이온(양이온과 음이온) 사이의 정전기적 인력이에요.</p>",
      misconception: {
        // EN (option A): The transfer of electrons is how the ions form. The bond is the attraction between the ions afterwards. Markschemes do not accept “transfer of electrons” as the definition.
        "0": "전자의 이동은 이온이 만들어지는 과정이에요. 결합은 그 뒤에 생긴 이온 사이의 인력이에요. 채점 기준에서는 “전자의 이동”을 정의로 인정하지 않아요.",
        // EN (option C): A shared pair of electrons describes a covalent bond. In an ionic bond no electrons are shared.
        "2": "공유된 전자쌍은 공유 결합을 설명하는 말이에요. 이온 결합에서는 전자를 공유하지 않아요.",
        // EN (option D): Cations and delocalized electrons describe a metal. An ionic compound contains cations and anions.
        "3": "양이온과 비편재화된 전자는 금속을 설명하는 말이에요. 이온 결합 화합물에는 양이온과 음이온이 있어요.",
      },
    },

    // ── s2-1-q005 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q005": {
      // EN: <p>What is the formula of calcium chloride?</p>
      stem: "<p>염화 칼슘의 화학식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">CaCl</span>
        "<span class=\"chem\">CaCl</span>",
        // EN: <span class="chem">Ca2Cl</span>
        "<span class=\"chem\">Ca2Cl</span>",
        // EN: <span class="chem">CaCl2</span>
        "<span class=\"chem\">CaCl2</span>",
        // EN: <span class="chem">Ca(Cl)2</span>
        "<span class=\"chem\">Ca(Cl)2</span>",
      ],
      hints: [
        // EN: Calcium is in group 2 and chlorine is in group 17. Write the two ions with their charges.
        "칼슘은 2족, 염소는 17족이에요. 두 이온을 전하와 함께 써 봐요.",
        // EN: How many 1− ions balance one 2+ ion?
        "1− 이온 몇 개가 2+ 이온 하나와 균형을 이루나요?",
      ],
      // EN: <p>The ions are <span class="chem">Ca^2+</span> and <span class="chem">Cl-</span>.</p><div class="worked__math">1 × (2+) = 2+ &nbsp; and &nbsp; 2 × (1−) = 2−</div><p>The formula is <span class="chem">CaCl2</span>.</p>
      solution: "<p>이온은 <span class=\"chem\">Ca^2+</span>와 <span class=\"chem\">Cl-</span>예요.</p><div class=\"worked__math\">1 × (2+) = 2+ &nbsp; 그리고 &nbsp; 2 × (1−) = 2−</div><p>화학식은 <span class=\"chem\">CaCl2</span>예요.</p>",
      misconception: {
        // EN (option A): One <span class="chem">Ca^2+</span> and one <span class="chem">Cl-</span> give a total charge of 1+. The charges must add up to zero.
        "0": "<span class=\"chem\">Ca^2+</span> 하나와 <span class=\"chem\">Cl-</span> 하나를 합하면 전체 전하가 1+가 돼요. 전하를 모두 더하면 0이 되어야 해요.",
        // EN (option B): The numbers are the wrong way round. Two <span class="chem">Ca^2+</span> ions would give 4+ against only 1−.
        "1": "숫자가 서로 바뀌었어요. <span class=\"chem\">Ca^2+</span> 이온 2개는 4+인데, 음전하는 1−뿐이에요.",
        // EN (option D): The ratio is right, but brackets are only used around a polyatomic ion. Chloride is a single atom, so no brackets are needed.
        "3": "비는 맞지만, 괄호는 다원자 이온에만 써요. 염화 이온은 원자 하나로 되어 있으므로 괄호가 필요 없어요.",
      },
    },

    // ── s2-1-q006 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q006": {
      // EN: <p>What is the name of <span class="chem">K2S</span>?</p>
      stem: "<p><span class=\"chem\">K2S</span>의 이름은 무엇인가요?</p>",
      options: [
        // EN: potassium sulfide
        "potassium sulfide (황화 칼륨)",
        // EN: potassium sulfate
        "potassium sulfate (황산 칼륨)",
        // EN: dipotassium sulfide
        "dipotassium sulfide (황화 이칼륨)",
        // EN: potassium(II) sulfide
        "potassium(II) sulfide (황화 칼륨(II))",
      ],
      hints: [
        // EN: The compound contains only two elements. What ending does the anion take?
        "이 화합물에는 원소가 두 가지만 들어 있어요. 음이온 이름은 어떤 어미로 끝날까요?",
      ],
      // EN: <p>The cation is named first: potassium. The anion is made from one element, sulfur, so its name ends in -ide: sulfide. The name is <strong>potassium sulfide</strong>.</p>
      solution: "<p>양이온 이름을 먼저 써요: potassium(칼륨). 음이온은 황 한 원소로 되어 있으므로 이름이 -ide로 끝나요: sulfide(황화 이온). 이름은 <strong>potassium sulfide</strong>(황화 칼륨)예요.</p>",
      misconception: {
        // EN (option B): Sulfate is the polyatomic ion <span class="chem">SO4^2-</span>, which contains oxygen. This formula has no oxygen.
        "1": "sulfate(황산 이온)는 산소를 포함하는 다원자 이온 <span class=\"chem\">SO4^2-</span>예요. 이 화학식에는 산소가 없어요.",
        // EN (option C): Names of ionic compounds do not use prefixes such as di-. The number of ions follows from the charges.
        "2": "이온 결합 화합물의 영어 이름에는 di- 같은 접두사를 쓰지 않아요. 이온의 개수는 전하로부터 정해져요.",
        // EN (option D): A Roman numeral is only used for a metal that can form more than one ion. Potassium, in group 1, only forms <span class="chem">K+</span>. A numeral would also show the charge, which is 1+, not 2+.
        "3": "로마 숫자는 두 가지 이상의 이온을 만들 수 있는 금속에만 써요. 1족인 칼륨은 <span class=\"chem\">K+</span>만 만들어요. 또 로마 숫자는 전하를 나타내는데, 칼륨 이온의 전하는 2+가 아니라 1+예요.",
      },
    },

    // ── s2-1-q007 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q007": {
      // EN: <p>Which row gives the correct name and formula of a polyatomic ion?</p>
      stem: "<p>다원자 이온의 이름과 화학식이 바르게 짝지어진 것은 어느 것인가요?</p>",
      options: [
        // EN: sulfate, <span class="chem">SO3^2-</span>
        "황산 이온(sulfate), <span class=\"chem\">SO3^2-</span>",
        // EN: carbonate, <span class="chem">CO3-</span>
        "탄산 이온(carbonate), <span class=\"chem\">CO3-</span>",
        // EN: nitrate, <span class="chem">NO3-</span>
        "질산 이온(nitrate), <span class=\"chem\">NO3-</span>",
        // EN: ammonium, <span class="chem">NH3+</span>
        "암모늄 이온(ammonium), <span class=\"chem\">NH3+</span>",
      ],
      hints: [
        // EN: Check two things in each row: the number of atoms and the charge.
        "각 줄에서 두 가지를 확인하세요: 원자의 개수와 전하.",
      ],
      // EN: <p>Nitrate is <span class="chem">NO3-</span>. The others should be sulfate <span class="chem">SO4^2-</span>, carbonate <span class="chem">CO3^2-</span> and ammonium <span class="chem">NH4+</span>.</p>
      solution: "<p>질산 이온은 <span class=\"chem\">NO3-</span>예요. 나머지의 바른 화학식은 황산 이온 <span class=\"chem\">SO4^2-</span>, 탄산 이온 <span class=\"chem\">CO3^2-</span>, 암모늄 이온 <span class=\"chem\">NH4+</span>예요.</p>",
      misconception: {
        // EN (option A): Sulfate has four oxygen atoms: <span class="chem">SO4^2-</span>.
        "0": "황산 이온에는 산소 원자가 4개 있어요: <span class=\"chem\">SO4^2-</span>.",
        // EN (option B): The atoms are right but the charge is wrong. Carbonate is <span class="chem">CO3^2-</span>.
        "1": "원자는 맞지만 전하가 틀렸어요. 탄산 이온은 <span class=\"chem\">CO3^2-</span>예요.",
        // EN (option D): <span class="chem">NH3</span> is ammonia, a neutral molecule. The ammonium ion has four hydrogen atoms: <span class="chem">NH4+</span>.
        "3": "<span class=\"chem\">NH3</span>는 중성 분자인 암모니아예요. 암모늄 이온에는 수소 원자가 4개 있어요: <span class=\"chem\">NH4+</span>.",
      },
    },

    // ── s2-1-q008 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q008": {
      // EN: <p>Why does solid sodium chloride <strong>not</strong> conduct electricity?</p>
      stem: "<p>고체 염화 나트륨은 왜 전기를 통하지 <strong>않나요</strong>?</p>",
      options: [
        // EN: It contains no charged particles.
        "전하를 띤 입자가 없어요.",
        // EN: Its ions are held in fixed positions in the lattice.
        "이온이 격자 속 고정된 위치에 붙잡혀 있어요.",
        // EN: Its electrons are held in fixed positions in the lattice.
        "전자가 격자 속 고정된 위치에 붙잡혀 있어요.",
        // EN: Its molecules have no overall charge.
        "분자가 전체적으로 전하를 띠지 않아요.",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move.
        "물질이 전기를 통하려면 자유롭게 움직일 수 있는, 전하를 띤 입자가 있어야 해요.",
        // EN: Which charged particles does sodium chloride contain? Can they move in the solid?
        "염화 나트륨에는 어떤 전하를 띤 입자가 있나요? 그 입자는 고체 속에서 움직일 수 있나요?",
      ],
      // EN: <p>Solid sodium chloride contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate. Because the ions cannot move from place to place, no charge can flow.</p>
      solution: "<p>고체 염화 나트륨에는 이온이 있지만, 강한 정전기적 인력 때문에 격자 속 고정된 위치에 붙잡혀 있어요. 이온은 제자리에서 진동만 할 수 있어요. 이온이 이곳저곳으로 이동할 수 없으므로 전하가 흐를 수 없어요.</p>",
      misconception: {
        // EN (option A): Solid sodium chloride is made of charged particles: <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions. The problem is that they cannot move.
        "0": "고체 염화 나트륨은 전하를 띤 입자, 곧 <span class=\"chem\">Na+</span> 이온과 <span class=\"chem\">Cl-</span> 이온으로 이루어져 있어요. 문제는 이 이온들이 움직일 수 없다는 점이에요.",
        // EN (option C): In an ionic compound the charge would be carried by ions, not by electrons. The explanation must be about the ions.
        "2": "이온 결합 화합물에서 전하를 옮기는 것은 전자가 아니라 이온이에요. 이온에 대해 설명해야 해요.",
        // EN (option D): Sodium chloride has no molecules. It is a lattice of ions.
        "3": "염화 나트륨에는 분자가 없어요. 염화 나트륨은 이온의 격자예요.",
      },
    },

    // ── s2-1-q009 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q009": {
      // EN: <p>Which quantity is a measure of the strength of the ionic bonding in a compound?</p>
      stem: "<p>화합물에서 이온 결합의 세기를 나타내는 양은 어느 것인가요?</p>",
      options: [
        // EN: Electronegativity
        "전기 음성도",
        // EN: First ionization energy
        "제1 이온화 에너지",
        // EN: Lattice enthalpy
        "격자 엔탈피",
        // EN: Relative formula mass
        "상대 화학식량",
      ],
      hints: [
        // EN: Which quantity is the energy needed to separate the ions of a solid lattice completely?
        "고체 격자의 이온을 완전히 떼어 놓는 데 필요한 에너지는 어느 양인가요?",
      ],
      // EN: <p>Lattice enthalpy is the enthalpy change when one mole of a solid ionic compound is separated into gaseous ions. The stronger the electrostatic attraction between the ions, the larger the lattice enthalpy.</p>
      solution: "<p>격자 엔탈피는 고체 이온 결합 화합물 1몰이 기체 이온으로 분리될 때의 엔탈피 변화예요. 이온 사이의 정전기적 인력이 강할수록 격자 엔탈피가 커요.</p>",
      misconception: {
        // EN (option A): Electronegativity describes how strongly one atom attracts bonding electrons. It is a property of an element, not of the bonding in a compound.
        "0": "전기 음성도는 한 원자가 결합 전자를 얼마나 강하게 끌어당기는지를 나타내요. 화합물 속 결합의 성질이 아니라 원소의 성질이에요.",
        // EN (option B): First ionization energy is the energy needed to remove an electron from a gaseous atom. It does not measure the attraction between ions in a lattice.
        "1": "제1 이온화 에너지는 기체 상태의 원자에서 전자 하나를 떼어 내는 데 필요한 에너지예요. 격자 속 이온 사이의 인력을 나타내지 않아요.",
        // EN (option D): Relative formula mass is the mass of a formula unit. It tells you nothing about how strongly the ions attract each other.
        "3": "상대 화학식량은 화학식 단위 하나의 질량이에요. 이온끼리 얼마나 강하게 끌어당기는지에 대해서는 아무것도 알려 주지 않아요.",
      },
    },

    // ── s2-1-q010 · order · foundation · SL · Structure 2.1.2 · 2 marks
    "s2-1-q010": {
      // EN: <p>Put these steps in order to deduce the formula of aluminium oxide.</p>
      stem: "<p>산화 알루미늄의 화학식을 추론하는 단계를 순서대로 놓으세요.</p>",
      options: [
        // EN: Write the two ions: <span class="chem">Al^3+</span> and <span class="chem">O^2-</span>.
        "두 이온을 써요: <span class=\"chem\">Al^3+</span>와 <span class=\"chem\">O^2-</span>.",
        // EN: Find the smallest total charge that 3 and 2 both divide into: 6.
        "3과 2로 모두 나누어떨어지는 가장 작은 총전하를 찾아요: 6.",
        // EN: Work out the numbers of ions: two <span class="chem">Al^3+</span> give 6+ and three <span class="chem">O^2-</span> give 6−.
        "이온의 개수를 구해요: <span class=\"chem\">Al^3+</span> 2개는 6+, <span class=\"chem\">O^2-</span> 3개는 6−가 돼요.",
        // EN: Write the formula: <span class="chem">Al2O3</span>.
        "화학식을 써요: <span class=\"chem\">Al2O3</span>.",
      ],
      hints: [
        // EN: You cannot balance the charges until you know them.
        "전하를 알기 전에는 전하의 균형을 맞출 수 없어요.",
        // EN: The formula is the last thing you write.
        "화학식은 맨 마지막에 써요.",
      ],
      // EN: <p>Start from the ions and their charges. Find the smallest common total (6), work out how many of each ion give that total, then write those numbers as subscripts: <span class="chem">Al2O3</span>.</p>
      solution: "<p>이온과 그 전하에서 시작해요. 가장 작은 공통 총전하(6)를 찾고, 그 총전하가 되려면 각 이온이 몇 개 필요한지 구한 다음, 그 수를 아래 첨자로 써요: <span class=\"chem\">Al2O3</span>.</p>",
    },

    // ── s2-1-q011 · mcq · exam · SL · Structure 2.1.1 · 1 mark
    "s2-1-q011": {
      // EN: <p>Which ion has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>6</sup></span></span>?</p>
      stem: "<p>전자 배치가 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>6</sup></span></span>인 이온은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">Na+</span>
        "<span class=\"chem\">Na+</span>",
        // EN: <span class="chem">O^2-</span>
        "<span class=\"chem\">O^2-</span>",
        // EN: <span class="chem">S^2-</span>
        "<span class=\"chem\">S^2-</span>",
        // EN: <span class="chem">Mg^2+</span>
        "<span class=\"chem\">Mg^2+</span>",
      ],
      hints: [
        // EN: Add the superscripts to find how many electrons the ion has.
        "위 첨자를 모두 더해서 이온의 전자 수를 구하세요.",
        // EN: For each ion, work out the number of electrons: atomic number minus the charge (with its sign).
        "각 이온의 전자 수를 구하세요: 원자 번호에서 전하(부호 포함)를 빼요.",
      ],
      // EN: <p>The configuration has 2 + 2 + 6 + 2 + 6 = 18 electrons.</p><div class="worked__math">S<sup>2−</sup>: 16 + 2 = 18 electrons</div><p>The other three ions each have 10 electrons. Only <span class="chem">S^2-</span> has 18.</p>
      solution: "<p>이 배치의 전자 수는 2 + 2 + 6 + 2 + 6 = 18개예요.</p><div class=\"worked__math\">S<sup>2−</sup>: 16 + 2 = 전자 18개</div><p>나머지 세 이온은 모두 전자가 10개예요. 전자가 18개인 것은 <span class=\"chem\">S^2-</span>뿐이에요.</p>",
      misconception: {
        // EN (option A): A sodium atom has 11 electrons and loses 1. <span class="chem">Na+</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "0": "나트륨 원자는 전자가 11개이고 1개를 잃어요. <span class=\"chem\">Na+</span>의 전자는 10개예요: <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>.",
        // EN (option B): An oxygen atom has 8 electrons and gains 2. <span class="chem">O^2-</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "1": "산소 원자는 전자가 8개이고 2개를 얻어요. <span class=\"chem\">O^2-</span>의 전자는 10개예요: <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>.",
        // EN (option D): A magnesium atom has 12 electrons and loses 2. <span class="chem">Mg^2+</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "3": "마그네슘 원자는 전자가 12개이고 2개를 잃어요. <span class=\"chem\">Mg^2+</span>의 전자는 10개예요: <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>.",
      },
    },

    // ── s2-1-q012 · mcq · exam · SL · Structure 2.1.1 · 1 mark
    "s2-1-q012": {
      // EN: <p>Iron forms two chlorides, <span class="chem">FeCl2</span> and <span class="chem">FeCl3</span>. Which statement explains this?</p>
      stem: "<p>철은 <span class=\"chem\">FeCl2</span>와 <span class=\"chem\">FeCl3</span>, 두 가지 염화물을 만들어요. 이것을 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: Chlorine can form ions with two different charges.
        "염소는 전하가 서로 다른 두 가지 이온을 만들 수 있어요.",
        // EN: Iron is a transition element and can form ions with different charges.
        "철은 전이 원소여서 전하가 다른 여러 이온을 만들 수 있어요.",
        // EN: Iron has isotopes with different numbers of neutrons.
        "철에는 중성자 수가 다른 동위 원소가 있어요.",
        // EN: The charge of an iron ion is equal to its group number.
        "철 이온의 전하는 족 번호와 같아요.",
      ],
      hints: [
        // EN: The chloride ion is always <span class="chem">Cl-</span>. What must the charge on iron be in each compound?
        "염화 이온은 항상 <span class=\"chem\">Cl-</span>예요. 각 화합물에서 철의 전하는 얼마여야 할까요?",
      ],
      // EN: <p>Each chloride ion is 1−. In <span class="chem">FeCl2</span> the iron ion is <span class="chem">Fe^2+</span> and in <span class="chem">FeCl3</span> it is <span class="chem">Fe^3+</span>. Iron is a transition element, and a transition element can form ions with different charges. The compounds are iron(II) chloride and iron(III) chloride.</p>
      solution: "<p>염화 이온은 각각 1−예요. <span class=\"chem\">FeCl2</span>에서 철 이온은 <span class=\"chem\">Fe^2+</span>이고, <span class=\"chem\">FeCl3</span>에서는 <span class=\"chem\">Fe^3+</span>예요. 철은 전이 원소이고, 전이 원소는 전하가 다른 여러 이온을 만들 수 있어요. 두 화합물은 염화 철(II)과 염화 철(III)이에요.</p>",
      misconception: {
        // EN (option A): Chlorine, in group 17, forms only the chloride ion, <span class="chem">Cl-</span>. The difference is in the iron ion.
        "0": "17족인 염소는 염화 이온 <span class=\"chem\">Cl-</span>만 만들어요. 차이는 철 이온에 있어요.",
        // EN (option C): Isotopes differ in neutrons, which does not change the charge of an ion or the formula of a compound.
        "2": "동위 원소는 중성자 수만 달라요. 이것은 이온의 전하나 화합물의 화학식을 바꾸지 않아요.",
        // EN (option D): Iron is in group 8, and its common ions are 2+ and 3+. The group number does not give the charge of a transition element ion.
        "3": "철은 8족이고, 흔한 이온은 2+와 3+예요. 전이 원소 이온의 전하는 족 번호로 알 수 없어요.",
      },
    },

    // ── s2-1-q013 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q013": {
      // EN: <p>What is the formula of ammonium sulfate?</p>
      stem: "<p>황산 암모늄의 화학식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">NH4SO4</span>
        "<span class=\"chem\">NH4SO4</span>",
        // EN: <span class="chem">(NH4)2SO4</span>
        "<span class=\"chem\">(NH4)2SO4</span>",
        // EN: <span class="chem">NH4(SO4)2</span>
        "<span class=\"chem\">NH4(SO4)2</span>",
        // EN: <span class="chem">(NH4)2S</span>
        "<span class=\"chem\">(NH4)2S</span>",
      ],
      hints: [
        // EN: Write the two ions with their charges: ammonium and sulfate.
        "두 이온을 전하와 함께 써 봐요: 암모늄 이온과 황산 이온.",
        // EN: How many 1+ ions balance one 2− ion? Do you need brackets?
        "1+ 이온 몇 개가 2− 이온 하나와 균형을 이루나요? 괄호가 필요한가요?",
      ],
      // EN: <p>The ions are <span class="chem">NH4+</span> and <span class="chem">SO4^2-</span>.</p><div class="worked__math">2 × (1+) = 2+ &nbsp; and &nbsp; 1 × (2−) = 2−</div><p>Two ammonium ions need brackets: <span class="chem">(NH4)2SO4</span>.</p>
      solution: "<p>이온은 <span class=\"chem\">NH4+</span>와 <span class=\"chem\">SO4^2-</span>예요.</p><div class=\"worked__math\">2 × (1+) = 2+ &nbsp; 그리고 &nbsp; 1 × (2−) = 2−</div><p>암모늄 이온이 2개이므로 괄호가 필요해요: <span class=\"chem\">(NH4)2SO4</span>.</p>",
      misconception: {
        // EN (option A): One <span class="chem">NH4+</span> (1+) does not balance one <span class="chem">SO4^2-</span> (2−). The total charge would be 1−.
        "0": "<span class=\"chem\">NH4+</span> 하나(1+)는 <span class=\"chem\">SO4^2-</span> 하나(2−)와 균형을 이루지 못해요. 전체 전하가 1−가 돼요.",
        // EN (option C): The numbers are the wrong way round. One 1+ ion and two 2− ions give a total charge of 3−.
        "2": "숫자가 서로 바뀌었어요. 1+ 이온 하나와 2− 이온 두 개를 합하면 전체 전하가 3−가 돼요.",
        // EN (option D): This is ammonium sulf<em>ide</em>. Sulfate is the polyatomic ion <span class="chem">SO4^2-</span>.
        "3": "이것은 황화 암모늄(ammonium sulf<em>ide</em>)이에요. 황산 이온(sulfate)은 다원자 이온 <span class=\"chem\">SO4^2-</span>예요.",
      },
    },

    // ── s2-1-q014 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q014": {
      // EN: <p>What is the formula of iron(III) hydroxide?</p>
      stem: "<p>수산화 철(III)의 화학식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">Fe3OH</span>
        "<span class=\"chem\">Fe3OH</span>",
        // EN: <span class="chem">FeOH3</span>
        "<span class=\"chem\">FeOH3</span>",
        // EN: <span class="chem">Fe(OH)2</span>
        "<span class=\"chem\">Fe(OH)2</span>",
        // EN: <span class="chem">Fe(OH)3</span>
        "<span class=\"chem\">Fe(OH)3</span>",
      ],
      hints: [
        // EN: The Roman numeral gives the charge on the iron ion.
        "로마 숫자는 철 이온의 전하를 나타내요.",
        // EN: Hydroxide is <span class="chem">OH-</span>. How many are needed to balance 3+?
        "수산화 이온은 <span class=\"chem\">OH-</span>예요. 3+와 균형을 이루려면 몇 개가 필요한가요?",
      ],
      // EN: <p>The ions are <span class="chem">Fe^3+</span> and <span class="chem">OH-</span>.</p><div class="worked__math">1 × (3+) = 3+ &nbsp; and &nbsp; 3 × (1−) = 3−</div><p>Three hydroxide ions need brackets: <span class="chem">Fe(OH)3</span>.</p>
      solution: "<p>이온은 <span class=\"chem\">Fe^3+</span>와 <span class=\"chem\">OH-</span>예요.</p><div class=\"worked__math\">1 × (3+) = 3+ &nbsp; 그리고 &nbsp; 3 × (1−) = 3−</div><p>수산화 이온이 3개이므로 괄호가 필요해요: <span class=\"chem\">Fe(OH)3</span>.</p>",
      misconception: {
        // EN (option A): The Roman numeral III is the charge on the iron ion, 3+. It is not the number of iron ions.
        "0": "로마 숫자 III은 철 이온의 전하, 곧 3+를 나타내요. 철 이온의 개수가 아니에요.",
        // EN (option B): Without brackets, the 3 applies only to hydrogen. Three hydroxide ions must be written <span class="chem">(OH)3</span>.
        "1": "괄호가 없으면 3은 수소에만 적용돼요. 수산화 이온 3개는 <span class=\"chem\">(OH)3</span>처럼 써야 해요.",
        // EN (option C): This is iron(II) hydroxide. Two <span class="chem">OH-</span> ions only balance a 2+ ion.
        "2": "이것은 수산화 철(II)이에요. <span class=\"chem\">OH-</span> 이온 2개는 2+ 이온과만 균형을 이뤄요.",
      },
    },

    // ── s2-1-q015 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q015": {
      // EN: <p>What is the name of <span class="chem">CuCO3</span>?</p>
      stem: "<p><span class=\"chem\">CuCO3</span>의 이름은 무엇인가요?</p>",
      options: [
        // EN: copper carbonate
        "copper carbonate (탄산 구리)",
        // EN: copper(I) carbonate
        "copper(I) carbonate (탄산 구리(I))",
        // EN: copper(II) carbonate
        "copper(II) carbonate (탄산 구리(II))",
        // EN: copper(II) carbide
        "copper(II) carbide (탄화 구리(II))",
      ],
      hints: [
        // EN: What is the charge on a carbonate ion?
        "탄산 이온의 전하는 얼마인가요?",
        // EN: The compound is neutral and contains one copper ion. What must its charge be?
        "이 화합물은 중성이고 구리 이온이 하나 들어 있어요. 구리 이온의 전하는 얼마여야 할까요?",
      ],
      // EN: <p>Carbonate is <span class="chem">CO3^2-</span>. One copper ion balances one carbonate ion, so the copper ion is <span class="chem">Cu^2+</span>. Copper can also form <span class="chem">Cu+</span>, so the name needs the Roman numeral: <strong>copper(II) carbonate</strong>.</p>
      solution: "<p>탄산 이온은 <span class=\"chem\">CO3^2-</span>예요. 구리 이온 하나가 탄산 이온 하나와 균형을 이루므로 구리 이온은 <span class=\"chem\">Cu^2+</span>예요. 구리는 <span class=\"chem\">Cu+</span>도 만들 수 있으므로 이름에 로마 숫자가 필요해요: <strong>copper(II) carbonate</strong>(탄산 구리(II)).</p>",
      misconception: {
        // EN (option A): Copper is a transition element that can form more than one ion, so the name needs a Roman numeral to show the charge.
        "0": "구리는 두 가지 이상의 이온을 만들 수 있는 전이 원소이므로, 이름에 전하를 나타내는 로마 숫자가 필요해요.",
        // EN (option B): Carbonate is 2−. One copper ion balances it, so the copper ion must be 2+, not 1+. Copper(I) carbonate would be <span class="chem">Cu2CO3</span>.
        "1": "탄산 이온은 2−예요. 구리 이온 하나가 이것과 균형을 이루므로 구리 이온은 1+가 아니라 2+여야 해요. copper(I) carbonate(탄산 구리(I))는 <span class=\"chem\">Cu2CO3</span>예요.",
        // EN (option D): The metal is right, but <span class="chem">CO3^2-</span> is the polyatomic ion carbonate. An -ide ending is for an anion of one element.
        "3": "금속은 맞지만, <span class=\"chem\">CO3^2-</span>는 다원자 이온인 carbonate(탄산 이온)예요. -ide 어미는 한 원소로 된 음이온에 써요.",
      },
    },

    // ── s2-1-q016 · numeric · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q016": {
      // EN: <p>Deduce the formula of calcium phosphate. How many <strong>ions</strong>, in total, are in one formula unit?</p>
      stem: "<p>인산 칼슘의 화학식을 추론하시오 (deduce). 화학식 단위 하나에는 <strong>이온</strong>이 모두 몇 개 있나요?</p>",
      hints: [
        // EN: The ions are <span class="chem">Ca^2+</span> and <span class="chem">PO4^3-</span>. Find the smallest total charge that 2 and 3 both divide into.
        "이온은 <span class=\"chem\">Ca^2+</span>와 <span class=\"chem\">PO4^3-</span>예요. 2와 3으로 모두 나누어떨어지는 가장 작은 총전하를 찾으세요.",
        // EN: A phosphate ion counts as one ion, although it contains five atoms.
        "인산 이온은 원자 5개로 되어 있지만, 이온 하나로 세요.",
      ],
      // EN: <div class="worked__math">smallest common total charge = 6</div><div class="worked__math">6 ÷ 2 = 3 Ca<sup>2+</sup> ions &nbsp; and &nbsp; 6 ÷ 3 = 2 PO<sub>4</sub><sup>3−</sup> ions</div><p>The formula is <span class="chem">Ca3(PO4)2</span>. One formula unit contains 3 + 2 = <strong>5</strong> ions.</p>
      solution: "<div class=\"worked__math\">가장 작은 공통 총전하 = 6</div><div class=\"worked__math\">6 ÷ 2 = 3개의 Ca<sup>2+</sup> 이온 &nbsp; 그리고 &nbsp; 6 ÷ 3 = 2개의 PO<sub>4</sub><sup>3−</sup> 이온</div><p>화학식은 <span class=\"chem\">Ca3(PO4)2</span>예요. 화학식 단위 하나에는 이온이 3 + 2 = <strong>5</strong>개 들어 있어요.</p>",
    },

    // ── s2-1-q017 · short · exam · SL · Structure 2.1.2 · 2 marks
    "s2-1-q017": {
      // EN: <p>Sodium hydrogencarbonate, <span class="chem">NaHCO3</span>, contains both ionic bonds and covalent bonds. State where each type of bond is found in this compound.</p>
      stem: "<p>탄산수소 나트륨 <span class=\"chem\">NaHCO3</span>에는 이온 결합과 공유 결합이 모두 있어요. 이 화합물에서 각 결합이 어디에 있는지 쓰시오 (state).</p>",
      hints: [
        // EN: Split the formula into its two ions first.
        "먼저 화학식을 두 이온으로 나누세요.",
        // EN: A polyatomic ion is a group of atoms. What kind of bond holds the atoms in the group together?
        "다원자 이온은 원자의 무리예요. 무리 안의 원자들을 묶어 주는 결합은 어떤 종류인가요?",
      ],
      // EN: <p>The ionic bonding is between the sodium ions, <span class="chem">Na+</span>, and the hydrogencarbonate ions, <span class="chem">HCO3-</span>. The covalent bonds are between the atoms inside each hydrogencarbonate ion (between carbon and oxygen, and between oxygen and hydrogen).</p>
      answer: "<p>이온 결합은 나트륨 이온 <span class=\"chem\">Na+</span>와 탄산수소 이온 <span class=\"chem\">HCO3-</span> 사이에 있어요. 공유 결합은 각 탄산수소 이온 안의 원자 사이(탄소와 산소 사이, 산소와 수소 사이)에 있어요.</p>",
      markscheme: [
        // EN: Ionic: between the sodium ion / Na⁺ and the hydrogencarbonate ion / HCO₃⁻. Accept: between the cation and the (polyatomic) anion.
        "이온 결합: 나트륨 이온 / Na⁺와 탄산수소 이온 / HCO₃⁻ 사이. 인정: 양이온과 (다원자) 음이온 사이.",
        // EN: Covalent: between the atoms within the hydrogencarbonate ion. Accept: between C and O / between O and H.
        "공유 결합: 탄산수소 이온 안의 원자 사이. 인정: C와 O 사이 / O와 H 사이.",
      ],
    },

    // ── s2-1-q018 · short · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q018": {
      // EN: <p>State what is meant by the term <em>ionic bond</em>.</p>
      stem: "<p><em>이온 결합</em> (ionic bond)이라는 용어의 뜻을 쓰시오 (state).</p>",
      hints: [
        // EN: Name the force, and name the particles it acts between.
        "힘의 이름과, 그 힘이 어떤 입자 사이에 작용하는지 쓰세요.",
      ],
      // EN: <p>An ionic bond is the electrostatic attraction between oppositely charged ions.</p>
      answer: "<p>이온 결합은 반대 전하를 띤 이온 사이의 정전기적 인력이에요.</p>",
      markscheme: [
        // EN: Electrostatic attraction between oppositely charged ions. Accept: between cations and anions / between positive and negative ions. Do not accept: “transfer of electrons” alone, or an answer without “electrostatic”.
        "반대 전하를 띤 이온 사이의 정전기적 인력. 인정: 양이온과 음이온 사이 / 양전하를 띤 이온과 음전하를 띤 이온 사이. 불인정: “전자의 이동”만 쓴 답, 또는 “정전기적(electrostatic)”이라는 말이 없는 답.",
      ],
    },

    // ── s2-1-q019 · multi · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q019": {
      // EN: <p>Which statements about solid sodium chloride are correct? Select all that apply.</p>
      stem: "<p>고체 염화 나트륨에 대한 설명으로 옳은 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Each sodium ion is surrounded by chloride ions.
        "각 나트륨 이온은 염화 이온에 둘러싸여 있어요.",
        // EN: The solid is made of separate NaCl molecules.
        "고체는 서로 떨어져 있는 NaCl 분자로 이루어져 있어요.",
        // EN: The formula NaCl gives the ratio of the ions in the lattice.
        "화학식 NaCl은 격자 속 이온의 비를 나타내요.",
        // EN: The electrostatic attraction between the ions acts in all directions.
        "이온 사이의 정전기적 인력은 모든 방향으로 작용해요.",
        // EN: Each sodium ion is bonded to only one chloride ion.
        "각 나트륨 이온은 염화 이온 하나와만 결합해 있어요.",
        // EN: The lattice contains delocalized electrons.
        "격자에 비편재화된 전자가 있어요.",
      ],
      hints: [
        // EN: Picture the lattice: what are the nearest neighbours of each ion?
        "격자를 떠올려 봐요: 각 이온과 가장 가까이 있는 이웃은 무엇인가요?",
        // EN: Does the formula of an ionic compound describe a molecule or a ratio?
        "이온 결합 화합물의 화학식은 분자를 나타내나요, 비를 나타내나요?",
      ],
      // EN: <p>Sodium chloride is a three-dimensional lattice. Each ion is surrounded by ions of the opposite charge, and the electrostatic attraction acts in all directions. There are no molecules, so the formula NaCl is an empirical formula: it gives the ratio of the ions, 1 : 1.</p>
      solution: "<p>염화 나트륨은 3차원 격자예요. 각 이온은 반대 전하를 띤 이온에 둘러싸여 있고, 정전기적 인력은 모든 방향으로 작용해요. 분자가 없으므로 화학식 NaCl은 실험식이에요: 이온의 비 1 : 1을 나타내요.</p>",
      misconception: {
        // EN (option B): There are no molecules in an ionic lattice. Every ion attracts all the oppositely charged ions around it.
        "1": "이온 격자에는 분자가 없어요. 모든 이온은 주위에 있는 반대 전하의 이온을 모두 끌어당겨요.",
        // EN (option E): The attraction is not between one pair. A sodium ion attracts every chloride ion near it, in all directions.
        "4": "인력은 한 쌍 사이에만 작용하지 않아요. 나트륨 이온은 주변의 모든 염화 이온을 모든 방향으로 끌어당겨요.",
        // EN (option F): Delocalized electrons are found in metals. In sodium chloride all the electrons belong to individual ions.
        "5": "비편재화된 전자는 금속에 있어요. 염화 나트륨에서는 모든 전자가 각각의 이온에 속해 있어요.",
      },
    },

    // ── s2-1-q020 · mcq · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q020": {
      // EN: <p>The table gives some properties of four substances, W, X, Y and Z. The data are illustrative. Which substance is most likely to be an ionic compound?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col">Conducts when solid?</th><th scope="col">Conducts when molten?</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">1085</td><td>yes</td><td>yes</td></tr><tr><th scope="row">X</th><td class="num">770</td><td>no</td><td>yes</td></tr><tr><th scope="row">Y</th><td class="num">1700</td><td>no</td><td>no</td></tr><tr><th scope="row">Z</th><td class="num">80</td><td>no</td><td>no</td></tr></tbody></table></div>
      stem: "<p>표는 네 물질 W, X, Y, Z의 몇 가지 성질을 나타내요. 자료는 설명을 위한 예시예요. 이온 결합 화합물일 가능성이 가장 큰 물질은 어느 것인가요?</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">물질</th><th scope=\"col\" class=\"num\">녹는점 / °C</th><th scope=\"col\">고체일 때 전기가 통하나요?</th><th scope=\"col\">녹았을 때 전기가 통하나요?</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">1085</td><td>예</td><td>예</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">770</td><td>아니요</td><td>예</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">1700</td><td>아니요</td><td>아니요</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">80</td><td>아니요</td><td>아니요</td></tr></tbody></table></div>",
      options: [
        // EN: W
        "W",
        // EN: X
        "X",
        // EN: Y
        "Y",
        // EN: Z
        "Z",
      ],
      hints: [
        // EN: An ionic compound contains ions. When can those ions move?
        "이온 결합 화합물에는 이온이 있어요. 그 이온은 언제 움직일 수 있나요?",
        // EN: Look for a high melting point together with conduction only in the molten state.
        "녹는점이 높으면서, 녹았을 때만 전기가 통하는 물질을 찾으세요.",
      ],
      // EN: <p>An ionic compound has a high melting point, because of the strong electrostatic attraction in the lattice. It does not conduct when solid (ions in fixed positions) but does conduct when molten (ions free to move). Only <strong>X</strong> fits all three.</p>
      solution: "<p>이온 결합 화합물은 격자 속 강한 정전기적 인력 때문에 녹는점이 높아요. 고체일 때는 전기가 통하지 않지만(이온이 고정된 위치에 있음), 녹았을 때는 전기가 통해요(이온이 자유롭게 움직임). 세 가지 조건에 모두 맞는 것은 <strong>X</strong>뿐이에요.</p>",
      misconception: {
        // EN (option A): W conducts when solid. In a solid ionic compound the ions are in fixed positions, so it does not conduct. W behaves like a metal.
        "0": "W는 고체일 때 전기가 통해요. 고체 이온 결합 화합물에서는 이온이 고정된 위치에 있으므로 전기가 통하지 않아요. W는 금속처럼 행동해요.",
        // EN (option C): Y has a high melting point, but it does not conduct when molten. A molten ionic compound has ions that are free to move, so it must conduct.
        "2": "Y는 녹는점이 높지만, 녹았을 때 전기가 통하지 않아요. 녹은 이온 결합 화합물에는 자유롭게 움직이는 이온이 있으므로 반드시 전기가 통해야 해요.",
        // EN (option D): Z melts at a low temperature and never conducts. An ionic lattice needs a lot of energy to break down, and its molten form conducts.
        "3": "Z는 낮은 온도에서 녹고 전기가 전혀 통하지 않아요. 이온 격자를 무너뜨리려면 에너지가 많이 필요하고, 녹은 상태에서는 전기가 통해요.",
      },
    },

    // ── s2-1-q021 · order · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q021": {
      // EN: <p>Arrange these sodium halides in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>
      stem: "<p>다음 할로젠화 나트륨을 격자 엔탈피가 증가하는 순서로, <strong>가장 작은 것부터</strong> 나열하세요.</p>",
      options: [
        // EN: <span class="chem">NaI</span>
        "<span class=\"chem\">NaI</span>",
        // EN: <span class="chem">NaBr</span>
        "<span class=\"chem\">NaBr</span>",
        // EN: <span class="chem">NaCl</span>
        "<span class=\"chem\">NaCl</span>",
        // EN: <span class="chem">NaF</span>
        "<span class=\"chem\">NaF</span>",
      ],
      hints: [
        // EN: The cation and all the charges are the same. What is different?
        "양이온과 모든 전하가 같아요. 무엇이 다른가요?",
        // EN: Ionic radius increases down group 17. Smaller ions get closer together.
        "17족에서 아래로 갈수록 이온 반지름이 커져요. 이온이 작을수록 서로 더 가까이 다가갈 수 있어요.",
      ],
      // EN: <p>All four contain <span class="chem">Na+</span> and a 1− ion, so only the ionic radius of the halide ion changes. Data booklet radii: <span class="chem">I-</span> 220 pm, <span class="chem">Br-</span> 196 pm, <span class="chem">Cl-</span> 181 pm, <span class="chem">F-</span> 133 pm. The smaller the anion, the closer the ions and the stronger the electrostatic attraction.</p><div class="worked__math">NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)</div>
      solution: "<p>네 화합물 모두 <span class=\"chem\">Na+</span>와 1− 이온을 포함하므로, 할로젠화 이온의 이온 반지름만 달라져요. 데이터 부클릿의 반지름: <span class=\"chem\">I-</span> 220 pm, <span class=\"chem\">Br-</span> 196 pm, <span class=\"chem\">Cl-</span> 181 pm, <span class=\"chem\">F-</span> 133 pm. 음이온이 작을수록 이온 사이가 가깝고 정전기적 인력이 강해요.</p><div class=\"worked__math\">NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)</div>",
    },

    // ── s2-1-q022 · short · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q022": {
      // EN: <p>The lattice enthalpy of magnesium oxide is 3791 <span class="unit">kJ mol-1</span>. The lattice enthalpy of barium oxide is 3054 <span class="unit">kJ mol-1</span>. Explain why the lattice enthalpy of magnesium oxide is larger.</p>
      stem: "<p>산화 마그네슘의 격자 엔탈피는 3791 <span class=\"unit\">kJ mol-1</span>이고, 산화 바륨의 격자 엔탈피는 3054 <span class=\"unit\">kJ mol-1</span>이에요. 산화 마그네슘의 격자 엔탈피가 더 큰 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare the two cations. Is it the charge or the ionic radius that is different?
        "두 양이온을 비교하세요. 다른 것은 전하인가요, 이온 반지름인가요?",
        // EN: Finish by naming the force that is stronger.
        "마지막에는 더 강해지는 힘의 이름을 쓰세요.",
      ],
      // EN: <p>Both compounds contain a 2+ ion and the oxide ion, so the charges are the same. The <span class="chem">Mg^2+</span> ion has a smaller ionic radius than the <span class="chem">Ba^2+</span> ion (72 pm against 135 pm), so the ions are closer together in magnesium oxide. The electrostatic attraction between the oppositely charged ions is therefore stronger.</p>
      answer: "<p>두 화합물 모두 2+ 이온과 산화 이온을 포함하므로 전하는 같아요. <span class=\"chem\">Mg^2+</span> 이온은 <span class=\"chem\">Ba^2+</span> 이온보다 이온 반지름이 작아요(72 pm 대 135 pm). 그래서 산화 마그네슘에서 이온 사이가 더 가까워요. 따라서 반대 전하를 띤 이온 사이의 정전기적 인력이 더 강해요.</p>",
      markscheme: [
        // EN: Mg²⁺ has a smaller ionic radius than Ba²⁺. Accept: the ions are closer together / smaller distance between the ions in MgO. Do not accept: “atomic radius” or “magnesium is smaller” without reference to ions.
        "Mg²⁺는 Ba²⁺보다 이온 반지름이 작아요. 인정: 이온 사이가 더 가까워요 / MgO에서 이온 사이의 거리가 더 짧아요. 불인정: 이온을 언급하지 않고 “원자 반지름” 또는 “마그네슘이 더 작아요”라고만 쓴 답.",
        // EN: Stronger electrostatic attraction between the (oppositely charged) ions in MgO. Accept: stronger attraction between Mg²⁺ and O²⁻.
        "MgO에서 (반대 전하를 띤) 이온 사이의 정전기적 인력이 더 강해요. 인정: Mg²⁺와 O²⁻ 사이의 인력이 더 강해요.",
      ],
    },

    // ── s2-1-q023 · short · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q023": {
      // EN: <p>Explain why sodium chloride conducts electricity when it is molten but not when it is solid.</p>
      stem: "<p>염화 나트륨이 녹은 상태에서는 전기를 통하지만 고체 상태에서는 전기를 통하지 않는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Which charged particles does sodium chloride contain?
        "염화 나트륨에는 어떤 전하를 띤 입자가 있나요?",
        // EN: Write one sentence about the solid and one about the liquid.
        "고체에 대해 한 문장, 액체에 대해 한 문장을 쓰세요.",
      ],
      // EN: <p>In the solid, the ions are held in fixed positions in the lattice and cannot move. When the solid melts, the lattice breaks down and the ions are free to move, so they can carry charge.</p>
      answer: "<p>고체에서는 이온이 격자 속 고정된 위치에 붙잡혀 있어서 움직일 수 없어요. 고체가 녹으면 격자가 무너지고 이온이 자유롭게 움직일 수 있게 되므로, 이온이 전하를 옮길 수 있어요.</p>",
      markscheme: [
        // EN: Solid: ions are in fixed positions / ions cannot move (through the lattice).
        "고체: 이온이 고정된 위치에 있어요 / 이온이 (격자 속을) 움직일 수 없어요.",
        // EN: Molten: ions are free to move / mobile ions (carry the charge). Do not accept: electrons are free to move.
        "녹은 상태: 이온이 자유롭게 움직여요 / 움직일 수 있는 이온이 있어요(이 이온이 전하를 옮겨요). 불인정: 전자가 자유롭게 움직여요.",
      ],
    },

    // ── s2-1-q024 · multi · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q024": {
      // EN: <p>Which properties are typical of an ionic compound such as potassium bromide? Select all that apply.</p>
      stem: "<p>브로민화 칼륨 같은 이온 결합 화합물의 전형적인 성질은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: High melting point
        "높은 녹는점",
        // EN: Low volatility
        "낮은 휘발성",
        // EN: Conducts electricity when solid
        "고체일 때 전기가 통함",
        // EN: Conducts electricity when molten
        "녹았을 때 전기가 통함",
        // EN: Dissolves well in non-polar solvents such as hexane
        "hexane 같은 무극성 용매에 잘 녹음",
        // EN: Brittle
        "부서지기 쉬움",
      ],
      hints: [
        // EN: Start from the structure: a lattice of ions held by strong electrostatic attraction.
        "구조에서 시작하세요: 강한 정전기적 인력으로 묶인 이온의 격자.",
        // EN: For each property ask: does it need a lot of energy? Can the ions move?
        "각 성질에 대해 물어보세요: 에너지가 많이 필요한가요? 이온이 움직일 수 있나요?",
      ],
      // EN: <p>The strong electrostatic attraction between the ions gives a high melting point and a low volatility. The solid does not conduct because its ions are in fixed positions, but the molten compound conducts because its ions are free to move. The solid is brittle: a force can bring ions of the same charge next to each other, and they repel. It does not dissolve in non-polar solvents.</p>
      solution: "<p>이온 사이의 강한 정전기적 인력 때문에 녹는점이 높고 휘발성이 낮아요. 고체는 이온이 고정된 위치에 있어서 전기가 통하지 않지만, 녹은 화합물은 이온이 자유롭게 움직이므로 전기가 통해요. 고체는 부서지기 쉬워요: 힘을 받으면 같은 전하의 이온이 서로 이웃하게 되고, 이 이온들이 서로 밀어내기 때문이에요. 무극성 용매에는 녹지 않아요.</p>",
      misconception: {
        // EN (option C): In the solid the ions are held in fixed positions in the lattice, so they cannot carry charge.
        "2": "고체에서는 이온이 격자 속 고정된 위치에 붙잡혀 있으므로 전하를 옮길 수 없어요.",
        // EN (option E): Non-polar molecules do not attract ions strongly enough to pull them out of the lattice. Ionic compounds are more likely to dissolve in a polar solvent such as water.
        "4": "무극성 분자는 이온을 격자에서 끌어낼 만큼 강하게 끌어당기지 못해요. 이온 결합 화합물은 물 같은 극성 용매에 더 잘 녹아요.",
      },
    },

    // ── s2-1-q025 · order · challenge · SL · Structure 2.1.3 · 2 marks
    "s2-1-q025": {
      // EN: <p>Use the charges of the ions, and the ionic radii in section 10 of the data booklet, to arrange these compounds in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>
      stem: "<p>이온의 전하와 데이터 부클릿 10절의 이온 반지름을 이용해서, 다음 화합물을 격자 엔탈피가 증가하는 순서로, <strong>가장 작은 것부터</strong> 나열하세요.</p>",
      options: [
        // EN: <span class="chem">KCl</span>
        "<span class=\"chem\">KCl</span>",
        // EN: <span class="chem">NaF</span>
        "<span class=\"chem\">NaF</span>",
        // EN: <span class="chem">CaCl2</span>
        "<span class=\"chem\">CaCl2</span>",
        // EN: <span class="chem">BaO</span>
        "<span class=\"chem\">BaO</span>",
        // EN: <span class="chem">MgO</span>
        "<span class=\"chem\">MgO</span>",
      ],
      hints: [
        // EN: Sort by ion charge first. Which compounds contain only 1+ and 1− ions? Which contain a 2+ ion and a 2− ion?
        "먼저 이온의 전하로 나누세요. 1+ 이온과 1− 이온만 있는 화합물은 어느 것인가요? 2+ 이온과 2− 이온이 있는 화합물은 어느 것인가요?",
        // EN: Within a group with the same charges, the compound with the smaller ions has the larger lattice enthalpy.
        "전하가 같은 무리 안에서는 이온이 더 작은 화합물의 격자 엔탈피가 더 커요.",
      ],
      // EN: <p><strong>Charges first.</strong> KCl and NaF contain 1+ and 1− ions. <span class="chem">CaCl2</span> contains a 2+ ion and 1− ions. BaO and MgO contain 2+ and 2− ions. Higher charges give stronger electrostatic attraction.</p><p><strong>Then ionic radius.</strong> <span class="chem">Na+</span> (102 pm) and <span class="chem">F-</span> (133 pm) are smaller than <span class="chem">K+</span> (138 pm) and <span class="chem">Cl-</span> (181 pm), so NaF is above KCl. <span class="chem">Mg^2+</span> (72 pm) is smaller than <span class="chem">Ba^2+</span> (135 pm), so MgO is above BaO.</p><div class="worked__math">KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)</div>
      solution: "<p><strong>먼저 전하.</strong> KCl과 NaF에는 1+ 이온과 1− 이온이 있어요. <span class=\"chem\">CaCl2</span>에는 2+ 이온과 1− 이온이 있어요. BaO와 MgO에는 2+ 이온과 2− 이온이 있어요. 전하가 클수록 정전기적 인력이 강해요.</p><p><strong>다음은 이온 반지름.</strong> <span class=\"chem\">Na+</span>(102 pm)와 <span class=\"chem\">F-</span>(133 pm)는 <span class=\"chem\">K+</span>(138 pm)와 <span class=\"chem\">Cl-</span>(181 pm)보다 작으므로, NaF의 격자 엔탈피가 KCl보다 커요. <span class=\"chem\">Mg^2+</span>(72 pm)는 <span class=\"chem\">Ba^2+</span>(135 pm)보다 작으므로, MgO의 격자 엔탈피가 BaO보다 커요.</p><div class=\"worked__math\">KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)</div>",
    },

    // ── s2-1-q026 · mcq · challenge · SL · Structure 2.1.2 · 1 mark
    "s2-1-q026": {
      // EN: <p>Element X has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span>. Element Y has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>. X and Y form an ionic compound. Which row is correct?</p>
      stem: "<p>원소 X의 전자 배치는 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span>이고, 원소 Y의 전자 배치는 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>이에요. X와 Y는 이온 결합 화합물을 만들어요. 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: Formula <span class="chem">X3Y2</span>. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "화학식 <span class=\"chem\">X3Y2</span>. 두 이온의 전자 배치는 모두 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>이에요.",
        // EN: Formula <span class="chem">X2Y3</span>. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "화학식 <span class=\"chem\">X2Y3</span>. 두 이온의 전자 배치는 모두 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>이에요.",
        // EN: Formula <span class="chem">X2Y3</span>. The ions have the configurations <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span> and <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>.
        "화학식 <span class=\"chem\">X2Y3</span>. 이온의 전자 배치는 각각 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span>, <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>이에요.",
        // EN: Formula XY. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "화학식 XY. 두 이온의 전자 배치는 모두 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>이에요.",
      ],
      hints: [
        // EN: How many outer electrons does each atom have? Which one is the metal?
        "각 원자의 바깥 전자는 몇 개인가요? 어느 쪽이 금속인가요?",
        // EN: X loses 3 electrons and Y gains 2. Write the two ions, then balance the charges.
        "X는 전자 3개를 잃고 Y는 2개를 얻어요. 두 이온을 쓴 다음 전하의 균형을 맞추세요.",
      ],
      // EN: <p>X has 3 outer electrons (<span class="mono"><span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span>) and loses them: <span class="chem">X^3+</span>, <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>. Y has 6 outer electrons (<span class="mono"><span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>) and gains 2: <span class="chem">Y^2-</span>, <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.</p><div class="worked__math">2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−</div><p>The formula is <span class="chem">X2Y3</span>. (X is aluminium and Y is oxygen.)</p>
      solution: "<p>X는 바깥 전자가 3개(<span class=\"mono\"><span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span>)이고 이것을 잃어요: <span class=\"chem\">X^3+</span>, <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>. Y는 바깥 전자가 6개(<span class=\"mono\"><span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>)이고 2개를 얻어요: <span class=\"chem\">Y^2-</span>, <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>.</p><div class=\"worked__math\">2 × (3+) = 6+ &nbsp; 그리고 &nbsp; 3 × (2−) = 6−</div><p>화학식은 <span class=\"chem\">X2Y3</span>예요. (X는 알루미늄, Y는 산소예요.)</p>",
      misconception: {
        // EN (option A): The configurations are right, but the subscripts are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.
        "0": "전자 배치는 맞지만, 아래 첨자가 서로 바뀌었어요. 3+ 이온 세 개와 2− 이온 두 개는 9+ 대 4−가 돼요.",
        // EN (option C): The formula is right, but these are the configurations of the neutral atoms. The ions have lost or gained electrons.
        "2": "화학식은 맞지만, 이것은 중성 원자의 전자 배치예요. 이온은 전자를 잃거나 얻은 상태예요.",
        // EN (option D): One 3+ ion and one 2− ion leave a total charge of 1+. The charges must add up to zero.
        "3": "3+ 이온 하나와 2− 이온 하나를 합하면 전체 전하가 1+로 남아요. 전하를 모두 더하면 0이 되어야 해요.",
      },
    },

    // ── s2-1-q027 · short · challenge · SL · Structure 2.1.3 · 3 marks
    "s2-1-q027": {
      // EN: <p>The table gives data booklet values for sodium fluoride and calcium oxide.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Compound</th><th scope="col">Ionic radii / pm</th><th scope="col" class="num">Lattice enthalpy / kJ mol<sup>−1</sup></th></tr></thead><tbody><tr><th scope="row">NaF</th><td><span class="chem">Na+</span> 102, <span class="chem">F-</span> 133</td><td class="num">930</td></tr><tr><th scope="row">CaO</th><td><span class="chem">Ca^2+</span> 100, <span class="chem">O^2-</span> 140</td><td class="num">3401</td></tr></tbody></table></div><p>Use the data to explain why the lattice enthalpy of calcium oxide is much larger than that of sodium fluoride.</p>
      stem: "<p>표는 플루오린화 나트륨과 산화 칼슘의 데이터 부클릿 값을 나타내요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">화합물</th><th scope=\"col\">이온 반지름 / pm</th><th scope=\"col\" class=\"num\">격자 엔탈피 / kJ mol<sup>−1</sup></th></tr></thead><tbody><tr><th scope=\"row\">NaF</th><td><span class=\"chem\">Na+</span> 102, <span class=\"chem\">F-</span> 133</td><td class=\"num\">930</td></tr><tr><th scope=\"row\">CaO</th><td><span class=\"chem\">Ca^2+</span> 100, <span class=\"chem\">O^2-</span> 140</td><td class=\"num\">3401</td></tr></tbody></table></div><p>자료를 이용해서 산화 칼슘의 격자 엔탈피가 플루오린화 나트륨보다 훨씬 큰 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Add the two radii for each compound. What do you notice?
        "각 화합물에서 두 반지름을 더하세요. 무엇을 알 수 있나요?",
        // EN: If the distance between the ions is nearly the same, which other factor is left?
        "이온 사이의 거리가 거의 같다면, 남은 다른 요인은 무엇인가요?",
      ],
      // EN: <p>The ionic radii are almost the same in the two compounds: the sum of the radii is 102 + 133 = 235 pm in NaF and 100 + 140 = 240 pm in CaO. So the distance between the ions cannot explain the difference. The ions in CaO have twice the charge (2+ and 2−, against 1+ and 1−). The electrostatic attraction between the oppositely charged ions is therefore much stronger in CaO, and more energy is needed to separate the ions.</p>
      answer: "<p>두 화합물의 이온 반지름은 거의 같아요: 반지름의 합은 NaF에서 102 + 133 = 235 pm, CaO에서 100 + 140 = 240 pm이에요. 그래서 이온 사이의 거리로는 차이를 설명할 수 없어요. CaO의 이온은 전하가 2배예요(2+와 2−, NaF는 1+와 1−). 따라서 반대 전하를 띤 이온 사이의 정전기적 인력이 CaO에서 훨씬 강하고, 이온을 떼어 놓는 데 더 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: The ionic radii / the distances between the ions are (almost) the same in both compounds (235 pm and 240 pm), so radius does not explain the difference.
        "두 화합물에서 이온 반지름 / 이온 사이의 거리가 (거의) 같아요(235 pm과 240 pm). 그래서 반지름으로는 차이를 설명할 수 없어요.",
        // EN: The ions in CaO have higher charges: 2+ and 2− against 1+ and 1−.
        "CaO의 이온은 전하가 더 커요: 2+와 2−, 이에 비해 NaF는 1+와 1−예요.",
        // EN: Stronger electrostatic attraction between the (oppositely charged) ions in CaO. Accept: more energy needed to separate the ions.
        "CaO에서 (반대 전하를 띤) 이온 사이의 정전기적 인력이 더 강해요. 인정: 이온을 떼어 놓는 데 더 많은 에너지가 필요해요.",
      ],
    },

    // ── s2-1-q028 · multi · challenge · SL · Structure 2.1.3 · 1 mark
    "s2-1-q028": {
      // EN: <p>The lattice enthalpy of calcium fluoride, <span class="chem">CaF2</span>, is 2651 <span class="unit">kJ mol-1</span>. The lattice enthalpy of calcium chloride, <span class="chem">CaCl2</span>, is 2271 <span class="unit">kJ mol-1</span>. Which statements help to explain why the value for calcium fluoride is larger? Select all that apply.</p>
      stem: "<p>플루오린화 칼슘 <span class=\"chem\">CaF2</span>의 격자 엔탈피는 2651 <span class=\"unit\">kJ mol-1</span>이고, 염화 칼슘 <span class=\"chem\">CaCl2</span>의 격자 엔탈피는 2271 <span class=\"unit\">kJ mol-1</span>이에요. 플루오린화 칼슘의 값이 더 큰 이유를 설명하는 데 도움이 되는 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: The fluoride ion has a smaller ionic radius than the chloride ion.
        "플루오린화 이온은 염화 이온보다 이온 반지름이 작아요.",
        // EN: The fluoride ion has a higher charge than the chloride ion.
        "플루오린화 이온은 염화 이온보다 전하가 커요.",
        // EN: The centres of the ions are closer together in calcium fluoride.
        "플루오린화 칼슘에서 이온의 중심이 서로 더 가까워요.",
        // EN: The electrostatic attraction between the ions is stronger in calcium fluoride.
        "플루오린화 칼슘에서 이온 사이의 정전기적 인력이 더 강해요.",
        // EN: The intermolecular forces are stronger in calcium fluoride.
        "플루오린화 칼슘에서 분자 간 힘이 더 강해요.",
      ],
      hints: [
        // EN: Both compounds contain <span class="chem">Ca^2+</span>. Compare the two anions: charge and ionic radius.
        "두 화합물 모두 <span class=\"chem\">Ca^2+</span>를 포함해요. 두 음이온의 전하와 이온 반지름을 비교하세요.",
        // EN: Data booklet: <span class="chem">F-</span> 133 pm, <span class="chem">Cl-</span> 181 pm.
        "데이터 부클릿: <span class=\"chem\">F-</span> 133 pm, <span class=\"chem\">Cl-</span> 181 pm.",
      ],
      // EN: <p>Both anions are 1−, so charge does not explain the difference. <span class="chem">F-</span> (133 pm) is smaller than <span class="chem">Cl-</span> (181 pm), so the centres of the ions are closer together in <span class="chem">CaF2</span>. The electrostatic attraction between the oppositely charged ions is stronger, and the lattice enthalpy is larger.</p>
      solution: "<p>두 음이온 모두 1−이므로 전하로는 차이를 설명할 수 없어요. <span class=\"chem\">F-</span>(133 pm)는 <span class=\"chem\">Cl-</span>(181 pm)보다 작으므로 <span class=\"chem\">CaF2</span>에서 이온의 중심이 서로 더 가까워요. 반대 전하를 띤 이온 사이의 정전기적 인력이 더 강하고, 격자 엔탈피가 더 커요.</p>",
      misconception: {
        // EN (option B): Fluoride and chloride are both in group 17, so both ions have a charge of 1−. The charges are the same in the two compounds.
        "1": "플루오린과 염소는 모두 17족이므로 두 이온의 전하는 모두 1−예요. 두 화합물에서 전하는 같아요.",
        // EN (option E): Ionic compounds have no molecules, so there are no intermolecular forces. The force is electrostatic attraction between ions.
        "4": "이온 결합 화합물에는 분자가 없으므로 분자 간 힘도 없어요. 작용하는 힘은 이온 사이의 정전기적 인력이에요.",
      },
    },

    // ── s2-1-q029 · mcq · challenge · SL · Structure 2.1.2 · 1 mark
    "s2-1-q029": {
      // EN: <p>The dichromate ion has the formula <span class="chem">Cr2O7^2-</span>. What is the formula of iron(III) dichromate?</p>
      stem: "<p>다이크로뮴산 이온의 화학식은 <span class=\"chem\">Cr2O7^2-</span>예요. 다이크로뮴산 철(III)의 화학식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">FeCr2O7</span>
        "<span class=\"chem\">FeCr2O7</span>",
        // EN: <span class="chem">Fe3(Cr2O7)2</span>
        "<span class=\"chem\">Fe3(Cr2O7)2</span>",
        // EN: <span class="chem">Fe2(Cr2O7)3</span>
        "<span class=\"chem\">Fe2(Cr2O7)3</span>",
        // EN: <span class="chem">Fe2Cr6O21</span>
        "<span class=\"chem\">Fe2Cr6O21</span>",
      ],
      hints: [
        // EN: You do not need to know this ion. Treat it like sulfate: a 2− polyatomic ion.
        "이 이온을 외우고 있을 필요는 없어요. 황산 이온처럼 2− 다원자 이온으로 다루세요.",
        // EN: Iron(III) is 3+. Find the smallest total charge that 3 and 2 both divide into.
        "철(III)은 3+예요. 3과 2로 모두 나누어떨어지는 가장 작은 총전하를 찾으세요.",
      ],
      // EN: <p>The ions are <span class="chem">Fe^3+</span> and <span class="chem">Cr2O7^2-</span>. The smallest common total is 6.</p><div class="worked__math">2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−</div><p>Three dichromate ions go in brackets: <span class="chem">Fe2(Cr2O7)3</span>.</p>
      solution: "<p>이온은 <span class=\"chem\">Fe^3+</span>와 <span class=\"chem\">Cr2O7^2-</span>예요. 가장 작은 공통 총전하는 6이에요.</p><div class=\"worked__math\">2 × (3+) = 6+ &nbsp; 그리고 &nbsp; 3 × (2−) = 6−</div><p>다이크로뮴산 이온 3개는 괄호 안에 넣어요: <span class=\"chem\">Fe2(Cr2O7)3</span>.</p>",
      misconception: {
        // EN (option A): One <span class="chem">Fe^3+</span> and one <span class="chem">Cr2O7^2-</span> leave a total charge of 1+. This would be the formula of iron(II) dichromate.
        "0": "<span class=\"chem\">Fe^3+</span> 하나와 <span class=\"chem\">Cr2O7^2-</span> 하나를 합하면 전체 전하가 1+로 남아요. 이것은 다이크로뮴산 철(II)의 화학식이에요.",
        // EN (option B): The numbers are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.
        "1": "숫자가 서로 바뀌었어요. 3+ 이온 세 개와 2− 이온 두 개는 9+ 대 4−가 돼요.",
        // EN (option D): The numbers of atoms are right, but the dichromate ion must stay together in brackets. The formula has to show that the compound contains three <span class="chem">Cr2O7^2-</span> ions.
        "3": "원자의 개수는 맞지만, 다이크로뮴산 이온은 괄호 안에 한 덩어리로 남아 있어야 해요. 화학식은 이 화합물에 <span class=\"chem\">Cr2O7^2-</span> 이온이 세 개 들어 있다는 것을 보여 주어야 해요.",
      },
    },

    // ── s2-1-q030 · short · challenge · SL · Structure 2.1.3 · 3 marks
    "s2-1-q030": {
      // EN: <p>A student writes this about magnesium chloride, <span class="chem">MgCl2</span>:</p><p><em>“Solid magnesium chloride does not conduct electricity because it contains no ions. When it melts, its electrons become free to move, so it conducts. It has a high melting point because the intermolecular forces between the magnesium chloride molecules are strong.”</em></p><p>Identify the three errors and correct each one.</p>
      stem: "<p>한 학생이 염화 마그네슘 <span class=\"chem\">MgCl2</span>에 대해 이렇게 썼어요:</p><p><em>“고체 염화 마그네슘은 이온이 없기 때문에 전기를 통하지 않는다. 녹으면 전자가 자유롭게 움직일 수 있게 되므로 전기를 통한다. 염화 마그네슘 분자 사이의 분자 간 힘이 강하기 때문에 녹는점이 높다.”</em></p><p>세 가지 오류를 찾아 (identify) 각각 바르게 고치시오.</p>",
      hints: [
        // EN: Take one sentence at a time. What particles is magnesium chloride made of?
        "한 문장씩 살펴보세요. 염화 마그네슘은 어떤 입자로 이루어져 있나요?",
        // EN: Which particles move in a molten ionic compound?
        "녹은 이온 결합 화합물에서는 어떤 입자가 움직이나요?",
        // EN: What holds an ionic lattice together?
        "이온 격자를 묶어 주는 것은 무엇인가요?",
      ],
      // EN: <p>(1) The solid does contain ions, <span class="chem">Mg^2+</span> and <span class="chem">Cl-</span>. It does not conduct because the ions are held in fixed positions in the lattice. (2) When it melts, it is the ions, not electrons, that become free to move and carry the charge. (3) There are no molecules and no intermolecular forces. The melting point is high because the electrostatic attraction between the oppositely charged ions in the lattice is strong, so a lot of energy is needed to overcome it.</p>
      answer: "<p>(1) 고체에는 이온 <span class=\"chem\">Mg^2+</span>와 <span class=\"chem\">Cl-</span>가 분명히 있어요. 전기를 통하지 않는 이유는 이온이 격자 속 고정된 위치에 붙잡혀 있기 때문이에요. (2) 녹았을 때 자유롭게 움직여 전하를 옮기는 것은 전자가 아니라 이온이에요. (3) 분자도 없고 분자 간 힘도 없어요. 녹는점이 높은 것은 격자 속 반대 전하를 띤 이온 사이의 정전기적 인력이 강해서, 이것을 이겨 내는 데 에너지가 많이 필요하기 때문이에요.</p>",
      markscheme: [
        // EN: The solid contains ions, but they are in fixed positions / cannot move (so it does not conduct).
        "고체에는 이온이 있지만, 이온이 고정된 위치에 있어요 / 움직일 수 없어요(그래서 전기를 통하지 않아요).",
        // EN: When molten, the ions (not electrons) are free to move / carry the charge.
        "녹은 상태에서는 (전자가 아니라) 이온이 자유롭게 움직여요 / 전하를 옮겨요.",
        // EN: There are no molecules / no intermolecular forces: the high melting point is due to strong electrostatic attraction between oppositely charged ions (in the lattice).
        "분자가 없어요 / 분자 간 힘이 없어요: 녹는점이 높은 것은 (격자 속) 반대 전하를 띤 이온 사이의 강한 정전기적 인력 때문이에요.",
      ],
    },

  }
});
