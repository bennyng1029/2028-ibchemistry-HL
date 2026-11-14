/* s3-1.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's3-1.q', {
  questions: {

    // ── s3-1-q001 · mcq · foundation · SL · Structure 3.1.1 · 1 mark
    "s3-1-q001": {
      // EN: <p>Which element is a metalloid?</p>
      stem: "<p>준금속인 원소는 어느 것인가요?</p>",
      options: [
        // EN: Aluminium, Al
        "알루미늄, Al",
        // EN: Phosphorus, P
        "인, P",
        // EN: Silicon, Si
        "규소, Si",
        // EN: Sulfur, S
        "황, S",
      ],
      hints: [
        // EN: Find the four elements in period 3 of your periodic table.
        "주기율표의 3주기에서 이 네 원소를 찾아보세요.",
        // EN: Metalloids lie on the diagonal boundary between the metals (left) and the non-metals (right).
        "준금속은 금속(왼쪽)과 비금속(오른쪽) 사이의 대각선 경계에 있어요.",
      ],
      // EN: <p>Metals are on the left and in the centre of the periodic table. Non-metals are on the upper right. The metalloids lie on the diagonal boundary between them. They include B, Si, Ge, As, Sb and Te. <strong>Silicon</strong> is a metalloid. Its properties are between those of a metal and a non-metal.</p>
      solution: "<p>금속은 주기율표의 왼쪽과 가운데에 있어요. 비금속은 오른쪽 위에 있어요. 준금속은 그 둘 사이의 대각선 경계에 있어요. B, Si, Ge, As, Sb, Te가 준금속이에요. <strong>규소</strong>는 준금속이에요. 규소의 성질은 금속과 비금속의 중간이에요.</p>",
      misconception: {
        // EN (option A): Aluminium sits next to the metalloids, but it is a metal. It is shiny, it conducts electricity well and it forms <span class="chem">Al^3+</span> ions.
        "0": "알루미늄은 준금속 바로 옆에 있지만 금속이에요. 광택이 있고, 전기를 잘 통하며, <span class=\"chem\">Al^3+</span> 이온을 만들어요.",
        // EN (option B): Phosphorus is a non-metal. It does not conduct electricity and its oxide is acidic.
        "1": "인은 비금속이에요. 전기가 통하지 않고, 인의 산화물은 산성이에요.",
        // EN (option D): Sulfur is a non-metal. It is a brittle yellow solid that does not conduct electricity.
        "3": "황은 비금속이에요. 잘 부서지는 노란색 고체이고 전기가 통하지 않아요.",
      },
    },

    // ── s3-1-q002 · mcq · foundation · SL · Structure 3.1.1 · 1 mark
    "s3-1-q002": {
      // EN: <p>The diagram shows an outline of the periodic table divided into four regions, A, B, C and D.</p><p><svg viewBox="0 0 294 161.5" width="294" height="161.5" style="max-width:100%;height:auto" role="img" aria-label="Outline of the periodic table divided into four regions. Region A is the two columns on the left, groups 1 and 2. Region B is the wide middle part, groups 3 to 12. Region C is the six columns on the right, groups 13 to 18. Region D is the two long rows drawn below the main table."><polygon points="12,10 27,10 27,25 42,25 42,115 12,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="27" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">A</text><polygon points="42,55 192,55 192,115 42,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="117" y="91" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">B</text><polygon points="192,25 267,25 267,10 282,10 282,115 192,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="237" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">C</text><polygon points="57,125.5 267,125.5 267,155.5 57,155.5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="162" y="146.5" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">D</text><text x="19.5" y="8" text-anchor="middle" font-size="10" fill="currentColor">1</text><text x="274.5" y="8" text-anchor="middle" font-size="10" fill="currentColor">18</text></svg></p><p>Which region is the d-block?</p>
      stem: "<p>그림은 주기율표의 윤곽을 A, B, C, D의 4개 영역으로 나눈 것이에요.</p><p><svg viewBox=\"0 0 294 161.5\" width=\"294\" height=\"161.5\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"4개 영역으로 나눈 주기율표의 윤곽. 영역 A는 왼쪽의 2개 열로, 1족과 2족이에요. 영역 B는 가운데의 넓은 부분으로, 3족에서 12족까지예요. 영역 C는 오른쪽의 6개 열로, 13족에서 18족까지예요. 영역 D는 본 표 아래에 따로 그린 긴 2개 행이에요.\"><polygon points=\"12,10 27,10 27,25 42,25 42,115 12,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"27\" y=\"76\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">A</text><polygon points=\"42,55 192,55 192,115 42,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"117\" y=\"91\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">B</text><polygon points=\"192,25 267,25 267,10 282,10 282,115 192,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"237\" y=\"76\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">C</text><polygon points=\"57,125.5 267,125.5 267,155.5 57,155.5\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"162\" y=\"146.5\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">D</text><text x=\"19.5\" y=\"8\" text-anchor=\"middle\" font-size=\"10\" fill=\"currentColor\">1</text><text x=\"274.5\" y=\"8\" text-anchor=\"middle\" font-size=\"10\" fill=\"currentColor\">18</text></svg></p><p>d 구역은 어느 영역인가요?</p>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: A d sublevel holds up to 10 electrons. Which region is 10 columns wide?
        "d 부껍질에는 전자가 10개까지 들어가요. 폭이 10칸인 영역은 어디인가요?",
        // EN: An s sublevel holds 2 electrons, a p sublevel 6 and an f sublevel 14.
        "s 부껍질에는 전자가 2개, p 부껍질에는 6개, f 부껍질에는 14개 들어가요.",
      ],
      // EN: <p>The width of each block matches the number of electrons its sublevel can hold. The s-block is 2 columns wide (A). The d-block is 10 columns wide: groups 3 to 12 (<strong>B</strong>). The p-block is 6 columns wide (C). The f-block is 14 columns wide (D).</p><p>One exception: helium is drawn at the top of group 18, but its configuration is <span class="mono nowrap">1s<sup>2</sup></span>.</p>
      solution: "<p>각 구역의 폭은 그 부껍질에 들어갈 수 있는 전자 수와 같아요. s 구역은 폭이 2칸이에요(A). d 구역은 폭이 10칸으로, 3족에서 12족까지예요(<strong>B</strong>). p 구역은 폭이 6칸이에요(C). f 구역은 폭이 14칸이에요(D).</p><p>예외가 하나 있어요. 헬륨은 18족 맨 위에 그려져 있지만, 전자 배치는 <span class=\"mono nowrap\">1s<sup>2</sup></span>이에요.</p>",
      misconception: {
        // EN (option A): Region A is groups 1 and 2. In these elements the outer electrons are in an s sublevel, so this is the s-block.
        "0": "영역 A는 1족과 2족이에요. 이 원소들은 바깥 전자가 s 부껍질에 있으므로 s 구역이에요.",
        // EN (option C): Region C is groups 13 to 18. In these elements a p sublevel is being filled, so this is the p-block.
        "2": "영역 C는 13족에서 18족까지예요. 이 원소들은 p 부껍질이 채워지고 있으므로 p 구역이에요.",
        // EN (option D): Region D is the two rows drawn below the main table. In these elements an f sublevel is being filled, so this is the f-block.
        "3": "영역 D는 본 표 아래에 따로 그린 2개 행이에요. 이 원소들은 f 부껍질이 채워지고 있으므로 f 구역이에요.",
      },
    },

    // ── s3-1-q003 · multi · exam · SL · Structure 3.1.1 · 1 mark
    "s3-1-q003": {
      // EN: <p>Tin, Sn, has atomic number 50. Use the periodic table in the data booklet. Which statements about tin are correct? Select all that apply.</p>
      stem: "<p>주석(Sn)의 원자 번호는 50이에요. 데이터 부클릿의 주기율표를 이용하세요. 주석에 대한 설명으로 옳은 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Tin is in the p-block.
        "주석은 p 구역에 있어요.",
        // EN: Tin is a transition element.
        "주석은 전이 원소예요.",
        // EN: Tin is a metal.
        "주석은 금속이에요.",
        // EN: Tin is in group 4.
        "주석은 4족에 있어요.",
        // EN: Tin is in period 5.
        "주석은 5주기에 있어요.",
      ],
      hints: [
        // EN: Find Sn in the data booklet. Read its row (period) and its column (group).
        "데이터 부클릿에서 Sn을 찾으세요. 그 행(주기)과 열(족)을 읽으세요.",
        // EN: Groups 13 to 18 are the p-block. The lower part of the p-block contains metals.
        "13족에서 18족까지가 p 구역이에요. p 구역의 아래쪽에는 금속이 있어요.",
      ],
      // EN: <p>Tin is in period 5 and group 14. Groups 13 to 18 form the <strong>p-block</strong>. Tin lies below and to the left of the metalloid boundary, so it is a <strong>metal</strong>. It is not a transition element, because it is not in the d-block.</p>
      solution: "<p>주석은 5주기, 14족에 있어요. 13족에서 18족까지는 <strong>p 구역</strong>이에요. 주석은 준금속 경계의 왼쪽 아래에 있으므로 <strong>금속</strong>이에요. 주석은 d 구역에 있지 않으므로 전이 원소가 아니에요.</p>",
      misconception: {
        // EN (option B): The transition elements are in the d-block. Tin is in group 14, which is in the p-block. Not every metal is a transition element.
        "1": "전이 원소는 d 구역에 있어요. 주석은 14족이고, 14족은 p 구역이에요. 모든 금속이 전이 원소인 것은 아니에요.",
        // EN (option D): Groups are numbered from 1 to 18. Tin has four valence electrons, but it is in group 14. Group 4 starts with titanium.
        "3": "족 번호는 1에서 18까지예요. 주석의 원자가 전자는 4개이지만 주석은 14족에 있어요. 4족은 타이타늄으로 시작해요.",
      },
    },

    // ── s3-1-q004 · mcq · exam · SL · Structure 3.1.1 · 1 mark
    "s3-1-q004": {
      // EN: <p>Use the periodic table in the data booklet. Which row gives the correct block and type for the element?</p>
      stem: "<p>데이터 부클릿의 주기율표를 이용하세요. 원소의 구역과 종류가 옳게 짝지어진 것은 어느 것인가요?</p>",
      options: [
        // EN: Zinc, Zn: s-block, metal
        "아연, Zn: s 구역, 금속",
        // EN: Germanium, Ge: p-block, non-metal
        "저마늄, Ge: p 구역, 비금속",
        // EN: Gallium, Ga: p-block, metal
        "갈륨, Ga: p 구역, 금속",
        // EN: Cerium, Ce: d-block, metal
        "세륨, Ce: d 구역, 금속",
      ],
      hints: [
        // EN: Find the group of each element. Groups 1–2: s-block. Groups 3–12: d-block. Groups 13–18: p-block.
        "각 원소의 족을 찾으세요. 1–2족: s 구역. 3–12족: d 구역. 13–18족: p 구역.",
        // EN: The metalloids include B, Si, Ge, As, Sb and Te.
        "준금속에는 B, Si, Ge, As, Sb, Te가 있어요.",
      ],
      // EN: <p>Gallium is in group 13, so it is in the <strong>p-block</strong>. It is below aluminium and to the left of the metalloid boundary, so it is a <strong>metal</strong>. The p-block contains metals, metalloids and non-metals.</p>
      solution: "<p>갈륨은 13족에 있으므로 <strong>p 구역</strong>이에요. 알루미늄 아래, 준금속 경계의 왼쪽에 있으므로 <strong>금속</strong>이에요. p 구역에는 금속, 준금속, 비금속이 모두 있어요.</p>",
      misconception: {
        // EN (option A): Zinc is a metal, but it is in group 12. Groups 3 to 12 are the d-block.
        "0": "아연은 금속이지만 12족에 있어요. 3족에서 12족까지는 d 구역이에요.",
        // EN (option B): Germanium is in the p-block, but it lies on the diagonal boundary. It is a metalloid.
        "1": "저마늄은 p 구역에 있지만 대각선 경계 위에 있어요. 저마늄은 준금속이에요.",
        // EN (option D): Cerium is a metal, but it is in the first of the two rows drawn below the main table. Those rows are the f-block.
        "3": "세륨은 금속이지만, 본 표 아래에 따로 그린 2개 행 가운데 첫째 행에 있어요. 그 행들은 f 구역이에요.",
      },
    },

    // ── s3-1-q005 · mcq · foundation · SL · Structure 3.1.2 · 1 mark
    "s3-1-q005": {
      // EN: <p>An atom has the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>. Where is the element in the periodic table?</p>
      stem: "<p>어떤 원자의 전자 배치가 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>이에요. 이 원소는 주기율표의 어디에 있나요?</p>",
      options: [
        // EN: Period 3, group 16
        "3주기, 16족",
        // EN: Period 3, group 6
        "3주기, 6족",
        // EN: Period 4, group 16
        "4주기, 16족",
        // EN: Period 6, group 3
        "6주기, 3족",
      ],
      hints: [
        // EN: Which is the highest energy level that contains electrons? That is the period.
        "전자가 들어 있는 가장 높은 에너지 준위는 무엇인가요? 그것이 주기예요.",
        // EN: Count the electrons in that outer level. For the p-block, add 10 to get the group number.
        "그 바깥 준위의 전자 수를 세어 보세요. p 구역에서는 10을 더하면 족 번호가 돼요.",
      ],
      // EN: <p>The outer occupied energy level is n = 3, so the element is in <strong>period 3</strong>. The outer level holds 2 + 4 = 6 valence electrons. The element is in the p-block, so the group is 6 + 10 = <strong>16</strong>. The element is sulfur.</p>
      solution: "<p>전자가 들어 있는 가장 바깥 에너지 준위는 n = 3이므로, 이 원소는 <strong>3주기</strong>에 있어요. 바깥 준위에는 원자가 전자가 2 + 4 = 6개 있어요. 이 원소는 p 구역에 있으므로 족은 6 + 10 = <strong>16</strong>이에요. 이 원소는 황이에요.</p>",
      misconception: {
        // EN (option B): The atom has 6 valence electrons, but groups are numbered 1 to 18. For a p-block element, group number = valence electrons + 10.
        "1": "이 원자의 원자가 전자는 6개이지만, 족 번호는 1에서 18까지예요. p 구역 원소에서는 족 번호 = 원자가 전자 수 + 10이에요.",
        // EN (option C): The period number is the outer energy level that contains electrons. Here that is level 3, not 4.
        "2": "주기 번호는 전자가 들어 있는 가장 바깥 에너지 준위의 번호예요. 여기서는 4가 아니라 3이에요.",
        // EN (option D): Period and group are swapped. The outer energy level (3) gives the period. The valence electrons (6) give the group.
        "3": "주기와 족이 서로 바뀌었어요. 가장 바깥 에너지 준위(3)가 주기를, 원자가 전자 수(6)가 족을 알려 줘요.",
      },
    },

    // ── s3-1-q006 · mcq · exam · SL · Structure 3.1.2 · 1 mark
    "s3-1-q006": {
      // EN: <p>An element is in period 4 and group 7 of the periodic table. What is the electron configuration of its atom?</p>
      stem: "<p>어떤 원소가 주기율표의 4주기, 7족에 있어요. 이 원자의 전자 배치는 무엇인가요?</p>",
      options: [
        // EN: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 4p<sup>5</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 4p<sup>5</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>",
        // EN: <span class="mono nowrap">[Kr] 4s<sup>2</sup> 3d<sup>5</sup></span>
        "<span class=\"mono nowrap\">[Kr] 4s<sup>2</sup> 3d<sup>5</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>",
      ],
      hints: [
        // EN: Groups 3 to 12 in period 4 are the d-block. The 3d sublevel is being filled.
        "4주기의 3족에서 12족까지는 d 구역이에요. 3d 부껍질이 채워지고 있어요.",
        // EN: For groups 3 to 12: group number = number of 4s electrons + number of 3d electrons.
        "3족에서 12족까지: 족 번호 = 4s 전자 수 + 3d 전자 수.",
      ],
      // EN: <p>Period 4 means the outer energy level is n = 4, and the core is argon. Group 7 is in the d-block, so the 4s and 3d electrons add up to 7: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>. The element is manganese. (IB also accepts <span class="mono nowrap">[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span>.)</p>
      solution: "<p>4주기이므로 가장 바깥 에너지 준위는 n = 4이고, 안쪽 핵심은 아르곤이에요. 7족은 d 구역에 있으므로 4s 전자와 3d 전자를 더하면 7개예요: <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>. 이 원소는 망가니즈예요. (IB에서는 <span class=\"mono nowrap\">[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span>도 정답으로 인정해요.)</p>",
      misconception: {
        // EN (option A): This configuration has 7 electrons in the fourth level, but it also leaves out the 3d sublevel. Seven outer s and p electrons belong to group 17, not group 7.
        "0": "이 배치는 넷째 준위에 전자가 7개 있지만, 3d 부껍질을 빠뜨렸어요. 바깥 s, p 전자가 7개이면 7족이 아니라 17족이에요.",
        // EN (option B): For groups 3 to 12, the group number equals the number of 4s electrons plus 3d electrons. Here 2 + 7 = 9, which is group 9.
        "1": "3족에서 12족까지는 족 번호 = 4s 전자 수 + 3d 전자 수예요. 여기서는 2 + 7 = 9이므로 9족이에요.",
        // EN (option C): The noble gas in the brackets is the one at the end of the period before. For period 4 that is argon. [Kr] would put the element in period 5.
        "2": "괄호 안의 비활성 기체는 바로 앞 주기의 끝에 있는 원소예요. 4주기에서는 아르곤이에요. [Kr]이면 이 원소가 5주기에 있게 돼요.",
      },
    },

    // ── s3-1-q007 · multi · exam · SL · Structure 3.1.2 · 1 mark
    "s3-1-q007": {
      // EN: <p>Which statements are correct? Select all that apply.</p>
      stem: "<p>옳은 설명은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Elements in the same group have the same number of valence electrons.
        "같은 족의 원소들은 원자가 전자 수가 같아요.",
        // EN: Elements in the same period have the same number of valence electrons.
        "같은 주기의 원소들은 원자가 전자 수가 같아요.",
        // EN: The period number is the number of the outer energy level that contains electrons.
        "주기 번호는 전자가 들어 있는 가장 바깥 에너지 준위의 번호예요.",
        // EN: Bromine is a halogen.
        "브로민은 할로젠이에요.",
        // EN: Calcium is an alkali metal.
        "칼슘은 알칼리 금속이에요.",
      ],
      hints: [
        // EN: A group is a column. A period is a row.
        "족은 세로줄(열)이고, 주기는 가로줄(행)이에요.",
        // EN: Alkali metals: group 1. Halogens: group 17. Noble gases: group 18. Transition elements: in the d-block.
        "알칼리 금속: 1족. 할로젠: 17족. 비활성 기체: 18족. 전이 원소: d 구역.",
      ],
      // EN: <p>Elements in a <strong>group</strong> have the same number of valence electrons. Elements in a <strong>period</strong> have the same outer occupied energy level, and the period number is the number of that level. Bromine is in group 17, so it is a halogen. Calcium is in group 2, so it is not an alkali metal.</p>
      solution: "<p>같은 <strong>족</strong>의 원소들은 원자가 전자 수가 같아요. 같은 <strong>주기</strong>의 원소들은 전자가 들어 있는 가장 바깥 에너지 준위가 같고, 주기 번호가 그 준위의 번호예요. 브로민은 17족이므로 할로젠이에요. 칼슘은 2족이므로 알칼리 금속이 아니에요.</p>",
      misconception: {
        // EN (option B): Across a period the number of valence electrons increases by one each time. What stays the same in a period is the outer occupied energy level.
        "1": "주기를 따라 가면 원자가 전자 수가 하나씩 늘어나요. 한 주기 안에서 같은 것은 전자가 들어 있는 가장 바깥 에너지 준위예요.",
        // EN (option E): The alkali metals are the group 1 metals (Li, Na, K, …). Calcium is in group 2.
        "4": "알칼리 금속은 1족 금속이에요(Li, Na, K, …). 칼슘은 2족이에요.",
      },
    },

    // ── s3-1-q008 · mcq · challenge · SL · Structure 3.1.2 · 1 mark
    "s3-1-q008": {
      // EN: <p>The ion <span class="chem">X^2-</span> has the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>. Where is element X in the periodic table?</p>
      stem: "<p>이온 <span class=\"chem\">X^2-</span>의 전자 배치는 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>이에요. 원소 X는 주기율표의 어디에 있나요?</p>",
      options: [
        // EN: Period 4, group 18
        "4주기, 18족",
        // EN: Period 4, group 16
        "4주기, 16족",
        // EN: Period 5, group 2
        "5주기, 2족",
        // EN: Period 3, group 16
        "3주기, 16족",
      ],
      hints: [
        // EN: How many electrons does the ion have? How many does the neutral atom have?
        "이 이온의 전자는 몇 개인가요? 중성 원자의 전자는 몇 개인가요?",
        // EN: A 2− ion has two more electrons than its atom. Remove the last two electrons that were added.
        "2− 이온은 원자보다 전자가 2개 더 많아요. 마지막에 더해진 전자 2개를 빼세요.",
        // EN: Then read the period from the outer level and the group from the valence electrons.
        "그다음 바깥 준위로 주기를, 원자가 전자로 족을 읽으세요.",
      ],
      // EN: <p>The ion has 36 electrons. A 2− ion has gained two electrons, so the atom of X has 34 electrons: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>.</p><p>The outer level is n = 4, so X is in <strong>period 4</strong>. It has 2 + 4 = 6 valence electrons and is in the p-block, so the group is 6 + 10 = <strong>16</strong>. X is selenium.</p>
      solution: "<p>이 이온의 전자는 36개예요. 2− 이온은 전자 2개를 얻은 것이므로 X 원자의 전자는 34개예요: <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>.</p><p>바깥 준위가 n = 4이므로 X는 <strong>4주기</strong>에 있어요. 원자가 전자가 2 + 4 = 6개이고 p 구역에 있으므로, 족은 6 + 10 = <strong>16</strong>이에요. X는 셀레늄이에요.</p>",
      misconception: {
        // EN (option A): This is the position of the atom that has this configuration (krypton). The question gives the configuration of a 2− ion, which has two more electrons than the atom of X.
        "0": "이것은 이 전자 배치를 가진 원자(크립톤)의 위치예요. 문제에 주어진 것은 2− 이온의 전자 배치이고, 이 이온은 X 원자보다 전자가 2개 더 많아요.",
        // EN (option C): This adds two electrons. A 2− ion has gained two electrons, so the atom has two <em>fewer</em> electrons than the ion.
        "2": "이것은 전자 2개를 더한 거예요. 2− 이온은 전자 2개를 얻었으므로, 원자는 이온보다 전자가 2개 <em>적어요</em>.",
        // EN (option D): The outer occupied level of the ion is n = 4, not n = 3. A sulfide ion has only 18 electrons. This ion has 36.
        "3": "이 이온에서 전자가 들어 있는 가장 바깥 준위는 n = 3이 아니라 n = 4예요. 황화 이온의 전자는 18개뿐이에요. 이 이온의 전자는 36개예요.",
      },
    },

    // ── s3-1-q009 · mcq · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q009": {
      // EN: <p>The table shows atomic radii from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Atomic radius / 10<sup>−12</sup> m</caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Na</th><th class="num" scope="col">Mg</th><th class="num" scope="col">Al</th><th class="num" scope="col">Si</th><th class="num" scope="col">P</th><th class="num" scope="col">S</th><th class="num" scope="col">Cl</th></tr></thead><tbody><tr><th scope="row">Radius</th><td class="num">160</td><td class="num">140</td><td class="num">124</td><td class="num">114</td><td class="num">109</td><td class="num">104</td><td class="num">100</td></tr></tbody></table></div><p>Which statement explains the trend?</p>
      stem: "<p>표는 데이터 부클릿에 있는 원자 반지름이에요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>원자 반지름 / 10<sup>−12</sup> m</caption><thead><tr><th scope=\"col\">원소</th><th class=\"num\" scope=\"col\">Na</th><th class=\"num\" scope=\"col\">Mg</th><th class=\"num\" scope=\"col\">Al</th><th class=\"num\" scope=\"col\">Si</th><th class=\"num\" scope=\"col\">P</th><th class=\"num\" scope=\"col\">S</th><th class=\"num\" scope=\"col\">Cl</th></tr></thead><tbody><tr><th scope=\"row\">반지름</th><td class=\"num\">160</td><td class=\"num\">140</td><td class=\"num\">124</td><td class=\"num\">114</td><td class=\"num\">109</td><td class=\"num\">104</td><td class=\"num\">100</td></tr></tbody></table></div><p>이 경향을 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: The number of occupied energy levels decreases across the period.
        "주기를 따라 전자가 들어 있는 에너지 준위의 수가 줄어들어요.",
        // EN: Shielding by inner electrons decreases across the period.
        "주기를 따라 안쪽 전자에 의한 가려막기가 줄어들어요.",
        // EN: The nuclear charge increases, and the outer electrons are in the same energy level with similar shielding.
        "핵전하가 커지고, 바깥 전자는 같은 에너지 준위에 있어서 가려막기 정도가 비슷해요.",
        // EN: The atoms gain electrons across the period, and electrons repel each other.
        "주기를 따라 갈수록 원자의 전자가 많아지고, 전자끼리 서로 밀어내요.",
      ],
      hints: [
        // EN: Describe the trend first: does the radius increase or decrease from Na to Cl?
        "먼저 경향을 서술해 보세요. Na에서 Cl로 갈수록 반지름이 커지나요, 작아지나요?",
        // EN: Compare Na and Cl: number of protons, number of occupied energy levels, number of inner electrons.
        "Na와 Cl을 비교해 보세요: 양성자 수, 전자가 들어 있는 에너지 준위 수, 안쪽 전자 수.",
      ],
      // EN: <p>The radius decreases from 160 to 100 (in 10<sup>−12</sup> m). Across period 3 the number of protons rises from 11 to 17, so the <strong>nuclear charge increases</strong>. The outer electrons are all in the <strong>same energy level</strong> (n = 3) and are shielded by the same 10 inner electrons. The outer electrons are attracted more strongly and are pulled closer to the nucleus.</p>
      solution: "<p>반지름은 160에서 100으로 작아져요(단위 10<sup>−12</sup> m). 3주기를 따라 양성자 수가 11에서 17로 늘어나므로 <strong>핵전하가 커져요</strong>. 바깥 전자는 모두 <strong>같은 에너지 준위</strong>(n = 3)에 있고, 똑같이 10개의 안쪽 전자에 가려져 있어요. 그래서 바깥 전자가 더 세게 끌려 원자핵 가까이 당겨져요.</p>",
      misconception: {
        // EN (option A): All period 3 atoms have three occupied energy levels. The number of levels does not change across a period.
        "0": "3주기 원자는 모두 전자가 들어 있는 에너지 준위가 3개예요. 한 주기 안에서 준위의 수는 변하지 않아요.",
        // EN (option B): Every period 3 atom has the same 10 inner electrons, so the shielding by inner electrons stays about the same.
        "1": "3주기 원자는 모두 안쪽 전자가 똑같이 10개이므로, 안쪽 전자에 의한 가려막기는 거의 같아요.",
        // EN (option D): More repulsion would make the atoms larger. The data show that the atoms get smaller. The extra protons in the nucleus have the larger effect.
        "3": "반발이 커지면 원자가 커져야 해요. 자료를 보면 원자는 작아져요. 원자핵에 늘어난 양성자의 효과가 더 커요.",
      },
    },

    // ── s3-1-q010 · order · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q010": {
      // EN: <p>Use the positions of these elements in the periodic table. Put them in order of <strong>increasing electronegativity</strong> (lowest first).</p>
      stem: "<p>주기율표에서 이 원소들의 위치를 이용하세요. <strong>전기 음성도가 커지는 순서</strong>(가장 작은 것부터)로 늘어놓으세요.</p>",
      options: [
        // EN: Potassium, K
        "칼륨, K",
        // EN: Sodium, Na
        "나트륨, Na",
        // EN: Silicon, Si
        "규소, Si",
        // EN: Chlorine, Cl
        "염소, Cl",
        // EN: Fluorine, F
        "플루오린, F",
      ],
      hints: [
        // EN: Electronegativity increases across a period, from left to right.
        "전기 음성도는 주기를 따라 왼쪽에서 오른쪽으로 갈수록 커져요.",
        // EN: Electronegativity decreases down a group. Compare K with Na, and Cl with F.
        "전기 음성도는 족 아래로 갈수록 작아져요. K와 Na, Cl과 F를 비교해 보세요.",
      ],
      // EN: <p>Electronegativity is a measure of how strongly an atom attracts a bonding pair of electrons. It <strong>increases across a period</strong>: the nuclear charge increases while the shielding stays about the same. It <strong>decreases down a group</strong>: the bonding electrons are further from the nucleus and more shielded.</p><p>Data booklet values: K 0.8, Na 0.9, Si 1.9, Cl 3.2, F 4.0.</p>
      solution: "<p>전기 음성도는 원자가 공유 전자쌍을 얼마나 세게 끌어당기는지를 나타내는 척도예요. 전기 음성도는 <strong>주기를 따라 커져요</strong>: 가려막기는 거의 같은데 핵전하가 커지기 때문이에요. 또 <strong>족 아래로 갈수록 작아져요</strong>: 결합 전자가 원자핵에서 더 멀고 더 많이 가려지기 때문이에요.</p><p>데이터 부클릿 값: K 0.8, Na 0.9, Si 1.9, Cl 3.2, F 4.0.</p>",
    },

    // ── s3-1-q011 · mcq · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q011": {
      // EN: <p>Which equation represents the first electron affinity of chlorine?</p>
      stem: "<p>염소의 제1 전자 친화도를 나타내는 반응식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">Cl(g) -> Cl+(g) + e-</span>
        "<span class=\"chem\">Cl(g) -> Cl+(g) + e-</span>",
        // EN: <span class="chem">Cl-(g) -> Cl(g) + e-</span>
        "<span class=\"chem\">Cl-(g) -> Cl(g) + e-</span>",
        // EN: <span class="chem">Cl2(g) + 2e- -> 2Cl-(g)</span>
        "<span class=\"chem\">Cl2(g) + 2e- -> 2Cl-(g)</span>",
        // EN: <span class="chem">Cl(g) + e- -> Cl-(g)</span>
        "<span class=\"chem\">Cl(g) + e- -> Cl-(g)</span>",
      ],
      hints: [
        // EN: “Affinity” here is about gaining an electron, not losing one.
        "여기서 ‘친화도’는 전자를 잃는 것이 아니라 얻는 것에 관한 말이에요.",
        // EN: The starting particle is one gaseous atom.
        "출발하는 입자는 기체 원자 하나예요.",
      ],
      // EN: <p>The first electron affinity is the energy change when one mole of electrons is added to one mole of gaseous atoms to form one mole of gaseous 1− ions:</p><div class="worked__math"><span class="chem">Cl(g) + e- -> Cl-(g)</span></div><p>For chlorine the data booklet value is −349 kJ mol<sup>−1</sup>. The negative sign shows that energy is released.</p>
      solution: "<p>제1 전자 친화도는 기체 원자 1몰에 전자 1몰을 더해 기체 1− 이온 1몰을 만들 때의 에너지 변화예요:</p><div class=\"worked__math\"><span class=\"chem\">Cl(g) + e- -> Cl-(g)</span></div><p>염소의 데이터 부클릿 값은 −349 kJ mol<sup>−1</sup>이에요. 음의 부호는 에너지가 방출된다는 뜻이에요.</p>",
      misconception: {
        // EN (option A): This equation removes an electron from the atom. It represents the first ionization energy.
        "0": "이 반응식은 원자에서 전자를 떼어 내요. 제1 이온화 에너지를 나타내요.",
        // EN (option B): This equation removes an electron from the ion. It is the reverse of the electron affinity.
        "1": "이 반응식은 이온에서 전자를 떼어 내요. 전자 친화도의 역반응이에요.",
        // EN (option C): Electron affinity is defined for separate gaseous <em>atoms</em>, not for molecules, and for one mole of electrons gained.
        "2": "전자 친화도는 분자가 아니라 따로 떨어진 기체 <em>원자</em>에 대해, 그리고 전자 1몰을 얻을 때에 대해 정의해요.",
      },
    },

    // ── s3-1-q012 · short · exam · SL · Structure 3.1.3 · 2 marks
    "s3-1-q012": {
      // EN: <p>The first ionization energies of three group 1 elements are: Li 520, Na 496, K 419 (in kJ mol<sup>−1</sup>).</p><p>Explain why the first ionization energy decreases down group 1.</p>
      stem: "<p>1족 원소 3가지의 제1 이온화 에너지는 Li 520, Na 496, K 419예요(단위 kJ mol<sup>−1</sup>).</p><p>1족 아래로 갈수록 제1 이온화 에너지가 작아지는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Write the outer electron of each atom: 2s, 3s, 4s.
        "각 원자의 바깥 전자를 쓰세요: 2s, 3s, 4s.",
        // EN: Give two reasons why the nucleus holds a 4s electron in K less strongly than a 2s electron in Li.
        "K의 4s 전자를 원자핵이 Li의 2s 전자보다 약하게 붙잡는 이유를 2가지 드세요.",
      ],
      // EN: <p>Down the group, the outer electron is in a higher energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove the electron.</p><p>Do not write only “the atomic radius increases”. Say <em>why</em>: the electron is in a higher energy level and is more shielded.</p>
      answer: "<p>족 아래로 갈수록 바깥 전자가 더 높은 에너지 준위에 있으므로 원자핵에서 더 멀어요. 또 안쪽 전자가 더 많아서 바깥 전자가 원자핵으로부터 더 많이 가려져요. (핵전하는 더 크지만) 원자핵과 바깥 전자 사이의 인력이 약해지므로, 전자를 떼어 내는 데 필요한 에너지가 작아져요.</p><p>“원자 반지름이 커진다”라고만 쓰지 마세요. <em>왜</em> 그런지 쓰세요: 전자가 더 높은 에너지 준위에 있고 더 많이 가려지기 때문이에요.</p>",
      markscheme: [
        // EN: The outer electron is in a higher energy level / further from the nucleus (do not accept “atomic radius increases” alone).
        "바깥 전자가 더 높은 에너지 준위에 있다 / 원자핵에서 더 멀다(“원자 반지름이 커진다”만으로는 인정하지 않음).",
        // EN: There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker.
        "안쪽 전자에 의한 가려막기가 더 커서 원자핵과 바깥 전자 사이의 인력이 더 약하다.",
      ],
    },

    // ── s3-1-q013 · order · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q013": {
      // EN: <p>These five ions all have the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>. Put them in order of <strong>increasing ionic radius</strong> (smallest first).</p>
      stem: "<p>다음 5가지 이온은 모두 전자 배치가 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>이에요. <strong>이온 반지름이 커지는 순서</strong>(가장 작은 것부터)로 늘어놓으세요.</p>",
      options: [
        // EN: <span class="chem">Al^3+</span>
        "<span class=\"chem\">Al^3+</span>",
        // EN: <span class="chem">Mg^2+</span>
        "<span class=\"chem\">Mg^2+</span>",
        // EN: <span class="chem">Na+</span>
        "<span class=\"chem\">Na+</span>",
        // EN: <span class="chem">F-</span>
        "<span class=\"chem\">F-</span>",
        // EN: <span class="chem">O^2-</span>
        "<span class=\"chem\">O^2-</span>",
      ],
      hints: [
        // EN: All five ions have 10 electrons. What is different about them?
        "5가지 이온 모두 전자가 10개예요. 무엇이 다른가요?",
        // EN: Count the protons in each nucleus. More protons pull the same 10 electrons closer.
        "각 원자핵의 양성자 수를 세어 보세요. 양성자가 많을수록 같은 10개의 전자를 더 가까이 끌어당겨요.",
      ],
      // EN: <p>Each ion has 10 electrons in the same arrangement. The number of protons is different: O 8, F 9, Na 11, Mg 12, Al 13. A larger nuclear charge attracts the same number of electrons more strongly, so the ion is smaller.</p><p>Data booklet ionic radii (in 10<sup>−12</sup> m): <span class="chem">Al^3+</span> 54, <span class="chem">Mg^2+</span> 72, <span class="chem">Na+</span> 102, <span class="chem">F-</span> 133, <span class="chem">O^2-</span> 140.</p>
      solution: "<p>각 이온은 전자 10개가 같은 방식으로 배치되어 있어요. 다른 것은 양성자 수예요: O 8, F 9, Na 11, Mg 12, Al 13. 핵전하가 클수록 같은 수의 전자를 더 세게 끌어당기므로 이온이 더 작아요.</p><p>데이터 부클릿의 이온 반지름(단위 10<sup>−12</sup> m): <span class=\"chem\">Al^3+</span> 54, <span class=\"chem\">Mg^2+</span> 72, <span class=\"chem\">Na+</span> 102, <span class=\"chem\">F-</span> 133, <span class=\"chem\">O^2-</span> 140.</p>",
    },

    // ── s3-1-q014 · mcq · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q014": {
      // EN: <p>The data booklet gives these radii: Na atom 160, <span class="chem">Na+</span> ion 102 (in 10<sup>−12</sup> m).</p><p>Which statement best explains why the sodium ion is much smaller than the sodium atom?</p>
      stem: "<p>데이터 부클릿에 나온 반지름은 Na 원자 160, <span class=\"chem\">Na+</span> 이온 102예요(단위 10<sup>−12</sup> m).</p><p>나트륨 이온이 나트륨 원자보다 훨씬 작은 이유를 가장 잘 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: The ion has more protons than the atom.
        "이온은 원자보다 양성자가 더 많아요.",
        // EN: The ion has one fewer occupied energy level than the atom.
        "이온은 원자보다 전자가 들어 있는 에너지 준위가 1개 적어요.",
        // EN: The ion has gained an electron, so the nucleus attracts the electrons more strongly.
        "이온은 전자를 얻었으므로 원자핵이 전자를 더 세게 끌어당겨요.",
        // EN: The ion has more shielding than the atom.
        "이온은 원자보다 가려막기가 더 커요.",
      ],
      hints: [
        // EN: Write the electron configuration of Na and of <span class="chem">Na+</span>.
        "Na와 <span class=\"chem\">Na+</span>의 전자 배치를 쓰세요.",
        // EN: Which energy level is the outer one in each?
        "각각에서 가장 바깥 에너지 준위는 어느 것인가요?",
      ],
      // EN: <p>Na is <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. <span class="chem">Na+</span> is <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>. The ion has lost its only electron in the third energy level, so it has <strong>one fewer occupied energy level</strong>. The same 11 protons now attract only 10 electrons, so the remaining electrons are held more closely.</p><p>The opposite happens for a negative ion: <span class="chem">Cl-</span> (181) is larger than Cl (100), because the extra electron increases the repulsion between the outer electrons while the nuclear charge stays the same.</p>
      solution: "<p>Na는 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>이에요. <span class=\"chem\">Na+</span>는 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>이에요. 이온은 셋째 에너지 준위에 있던 단 하나의 전자를 잃었으므로 <strong>전자가 들어 있는 에너지 준위가 1개 적어요</strong>. 같은 11개의 양성자가 이제 전자 10개만 끌어당기므로, 남은 전자는 더 가까이 붙잡혀요.</p><p>음이온에서는 반대 일이 일어나요: <span class=\"chem\">Cl-</span>(181)은 Cl(100)보다 커요. 핵전하는 그대로인데, 더해진 전자 때문에 바깥 전자 사이의 반발이 커지기 때문이에요.</p>",
      misconception: {
        // EN (option A): Forming an ion does not change the nucleus. The atom and the ion both have 11 protons.
        "0": "이온이 되어도 원자핵은 변하지 않아요. 원자와 이온 모두 양성자가 11개예요.",
        // EN (option C): A positive ion forms when an atom <em>loses</em> an electron. Sodium loses its 3s electron.
        "2": "양이온은 원자가 전자를 <em>잃을</em> 때 생겨요. 나트륨은 3s 전자를 잃어요.",
        // EN (option D): The ion has fewer electrons than the atom, so it cannot have more shielding.
        "3": "이온은 원자보다 전자가 적으므로 가려막기가 더 클 수 없어요.",
      },
    },

    // ── s3-1-q015 · short · challenge · SL · Structure 3.1.3 · 3 marks
    "s3-1-q015": {
      // EN: <p>The table shows ionic radii from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Ionic radius / 10<sup>−12</sup> m</caption><thead><tr><th scope="col">Ion</th><th class="num" scope="col"><span class="chem">S^2-</span></th><th class="num" scope="col"><span class="chem">Cl-</span></th><th class="num" scope="col"><span class="chem">K+</span></th><th class="num" scope="col"><span class="chem">Ca^2+</span></th></tr></thead><tbody><tr><th scope="row">Radius</th><td class="num">184</td><td class="num">181</td><td class="num">138</td><td class="num">100</td></tr></tbody></table></div><p>Explain the trend in ionic radius from <span class="chem">S^2-</span> to <span class="chem">Ca^2+</span>.</p>
      stem: "<p>표는 데이터 부클릿에 있는 이온 반지름이에요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>이온 반지름 / 10<sup>−12</sup> m</caption><thead><tr><th scope=\"col\">이온</th><th class=\"num\" scope=\"col\"><span class=\"chem\">S^2-</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">Cl-</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">K+</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">Ca^2+</span></th></tr></thead><tbody><tr><th scope=\"row\">반지름</th><td class=\"num\">184</td><td class=\"num\">181</td><td class=\"num\">138</td><td class=\"num\">100</td></tr></tbody></table></div><p><span class=\"chem\">S^2-</span>에서 <span class=\"chem\">Ca^2+</span>까지 이온 반지름의 경향을 설명하시오 (explain).</p>",
      hints: [
        // EN: Count the electrons in each ion.
        "각 이온의 전자 수를 세어 보세요.",
        // EN: Count the protons in each ion.
        "각 이온의 양성자 수를 세어 보세요.",
        // EN: Link the two: same electrons, different pull.
        "두 가지를 연결하세요: 전자 수는 같고, 끌어당기는 힘은 달라요.",
      ],
      // EN: <p>All four ions have 18 electrons and the same electron configuration, <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>. The nuclear charge increases from 16 protons in <span class="chem">S^2-</span> to 20 protons in <span class="chem">Ca^2+</span>. The same number of electrons is attracted more strongly by the larger nuclear charge, so the electrons are pulled closer to the nucleus and the radius decreases.</p>
      answer: "<p>4가지 이온 모두 전자가 18개이고 전자 배치가 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>로 같아요. 핵전하는 <span class=\"chem\">S^2-</span>의 양성자 16개에서 <span class=\"chem\">Ca^2+</span>의 양성자 20개까지 커져요. 같은 수의 전자가 더 큰 핵전하에 더 세게 끌리므로, 전자가 원자핵 가까이 당겨지고 반지름이 작아져요.</p>",
      markscheme: [
        // EN: All four ions have the same number of electrons / the same electron configuration (18 electrons; accept “isoelectronic”).
        "4가지 이온 모두 전자 수가 같다 / 전자 배치가 같다(전자 18개, “등전자”도 인정).",
        // EN: The nuclear charge / number of protons increases from S (16) to Ca (20).
        "핵전하 / 양성자 수가 S(16)에서 Ca(20)로 커진다.",
        // EN: So the electrons are attracted more strongly / pulled closer to the nucleus (and the radius decreases).
        "그래서 전자가 더 세게 끌린다 / 원자핵 가까이 당겨진다(반지름이 작아진다).",
      ],
    },

    // ── s3-1-q016 · multi · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q016": {
      // EN: <p>Which of these <strong>increase</strong> across period 3 from sodium to chlorine? Select all that apply.</p>
      stem: "<p>나트륨에서 염소까지 3주기를 따라 <strong>커지는</strong> 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Nuclear charge
        "핵전하",
        // EN: Atomic radius
        "원자 반지름",
        // EN: First ionization energy (general trend)
        "제1 이온화 에너지(전체적인 경향)",
        // EN: Electronegativity
        "전기 음성도",
        // EN: Number of occupied energy levels
        "전자가 들어 있는 에너지 준위의 수",
      ],
      hints: [
        // EN: Start with the nucleus: what changes from Na (Z = 11) to Cl (Z = 17)?
        "원자핵부터 생각해 보세요: Na(Z = 11)에서 Cl(Z = 17)로 가면서 무엇이 바뀌나요?",
        // EN: A stronger attraction for outer electrons makes the atom smaller, makes an electron harder to remove, and attracts bonding electrons more.
        "바깥 전자를 더 세게 끌어당기면 원자는 작아지고, 전자는 떼어 내기 어려워지고, 결합 전자는 더 많이 끌려와요.",
      ],
      // EN: <p>Across period 3 the <strong>nuclear charge</strong> increases (11 to 17 protons). The outer electrons are in the same energy level with similar shielding, so they are attracted more strongly. This means:</p><ul><li>atomic radius decreases (160 to 100, in 10<sup>−12</sup> m);</li><li>first ionization energy generally increases (Na 496, Cl 1251 kJ mol<sup>−1</sup>);</li><li>electronegativity increases (Na 0.9, Cl 3.2).</li></ul><p>The number of occupied energy levels stays at three.</p>
      solution: "<p>3주기를 따라 <strong>핵전하</strong>가 커져요(양성자 11개에서 17개). 바깥 전자는 같은 에너지 준위에 있고 가려막기 정도가 비슷하므로 더 세게 끌려요. 그래서:</p><ul><li>원자 반지름은 작아져요(160에서 100, 단위 10<sup>−12</sup> m);</li><li>제1 이온화 에너지는 대체로 커져요(Na 496, Cl 1251 kJ mol<sup>−1</sup>);</li><li>전기 음성도는 커져요(Na 0.9, Cl 3.2).</li></ul><p>전자가 들어 있는 에너지 준위의 수는 3개 그대로예요.</p>",
      misconception: {
        // EN (option B): Atomic radius decreases across a period: Na 160, Cl 100 (in 10<sup>−12</sup> m). The increasing nuclear charge pulls the outer electrons closer.
        "1": "원자 반지름은 주기를 따라 작아져요: Na 160, Cl 100(단위 10<sup>−12</sup> m). 커지는 핵전하가 바깥 전자를 더 가까이 끌어당겨요.",
        // EN (option E): Every period 3 atom has three occupied energy levels. That is what makes them one period.
        "4": "3주기 원자는 모두 전자가 들어 있는 에너지 준위가 3개예요. 그래서 같은 주기에 있는 거예요.",
      },
    },

    // ── s3-1-q017 · mcq · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q017": {
      // EN: <p>The table shows first electron affinities from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First electron affinity / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">F</th><th class="num" scope="col">Cl</th><th class="num" scope="col">Br</th><th class="num" scope="col">I</th></tr></thead><tbody><tr><th scope="row">EA</th><td class="num">−328</td><td class="num">−349</td><td class="num">−325</td><td class="num">−295</td></tr></tbody></table></div><p>Which statement is supported by the data?</p>
      stem: "<p>표는 데이터 부클릿에 있는 제1 전자 친화도예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>제1 전자 친화도 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">원소</th><th class=\"num\" scope=\"col\">F</th><th class=\"num\" scope=\"col\">Cl</th><th class=\"num\" scope=\"col\">Br</th><th class=\"num\" scope=\"col\">I</th></tr></thead><tbody><tr><th scope=\"row\">EA</th><td class=\"num\">−328</td><td class=\"num\">−349</td><td class=\"num\">−325</td><td class=\"num\">−295</td></tr></tbody></table></div><p>이 자료가 뒷받침하는 설명은 어느 것인가요?</p>",
      options: [
        // EN: A fluorine atom releases the most energy when it gains an electron.
        "플루오린 원자는 전자를 얻을 때 에너지를 가장 많이 방출해요.",
        // EN: Energy must be supplied to add an electron to each of these atoms.
        "이 원자들 각각에 전자를 더하려면 에너지를 공급해야 해요.",
        // EN: From chlorine to iodine, less energy is released when an atom gains an electron.
        "염소에서 아이오딘으로 갈수록, 원자가 전자를 얻을 때 방출하는 에너지가 작아져요.",
        // EN: Electron affinity becomes more exothermic down the whole group.
        "족 전체에서 아래로 갈수록 전자 친화도가 더 발열적이 돼요.",
      ],
      hints: [
        // EN: A more negative value means more energy is released.
        "값이 더 큰 음수일수록 에너지가 더 많이 방출된다는 뜻이에요.",
        // EN: Compare the size of the numbers from Cl down to I.
        "Cl에서 I까지 내려가며 숫자의 크기를 비교해 보세요.",
      ],
      // EN: <p>From chlorine to iodine the values change from −349 to −325 to −295 kJ mol<sup>−1</sup>. They become less negative, so <strong>less energy is released</strong>.</p><p>Explanation: down the group, the added electron enters a higher energy level. It is further from the nucleus and more shielded, so it is attracted less strongly.</p><p>Fluorine does not follow the pattern. Its atom is very small, so the added electron is repelled more by the electrons already there. You do not need to explain this exception.</p>
      solution: "<p>염소에서 아이오딘으로 가면서 값은 −349, −325, −295 kJ mol<sup>−1</sup>로 바뀌어요. 음의 값이 작아지므로 <strong>방출되는 에너지가 작아져요</strong>.</p><p>설명: 족 아래로 갈수록 더해진 전자가 더 높은 에너지 준위에 들어가요. 그 전자는 원자핵에서 더 멀고 더 많이 가려지므로 덜 세게 끌려요.</p><p>플루오린은 이 경향을 따르지 않아요. 플루오린 원자는 매우 작아서, 더해진 전자가 이미 있던 전자들에게 더 많이 밀려나요. 이 예외는 설명하지 않아도 돼요.</p>",
      misconception: {
        // EN (option A): Read the values again: chlorine (−349) is more negative than fluorine (−328), so chlorine releases more energy. Fluorine has the highest electronegativity, but that is a different property.
        "0": "값을 다시 읽어 보세요: 염소(−349)가 플루오린(−328)보다 더 큰 음수이므로 염소가 에너지를 더 많이 방출해요. 플루오린은 전기 음성도가 가장 크지만, 그것은 다른 성질이에요.",
        // EN (option B): All four values are negative. A negative energy change means energy is released (exothermic).
        "1": "4개의 값이 모두 음수예요. 에너지 변화가 음수이면 에너지가 방출된다(발열)는 뜻이에요.",
        // EN (option D): From Cl to Br to I the values become <em>less</em> negative: −349, −325, −295. Less energy is released.
        "3": "Cl에서 Br, I로 갈수록 값이 <em>덜</em> 음수가 돼요: −349, −325, −295. 방출되는 에너지가 작아져요.",
      },
    },

    // ── s3-1-q018 · short · challenge · SL · Structure 3.1.3 · 3 marks
    "s3-1-q018": {
      // EN: <p>The first ionization energies of three elements are: F 1681, Cl 1251, S 1000 (in kJ mol<sup>−1</sup>).</p><p>Explain why the first ionization energy of fluorine is higher than that of chlorine, and why that of chlorine is higher than that of sulfur.</p>
      stem: "<p>세 원소의 제1 이온화 에너지는 F 1681, Cl 1251, S 1000이에요(단위 kJ mol<sup>−1</sup>).</p><p>플루오린의 제1 이온화 에너지가 염소보다 큰 이유와, 염소의 제1 이온화 에너지가 황보다 큰 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Treat the two comparisons separately. F and Cl are in the same group. Cl and S are in the same period.
        "두 비교를 따로 생각하세요. F와 Cl은 같은 족이에요. Cl과 S는 같은 주기예요.",
        // EN: Same group: what changes is the energy level and the shielding.
        "같은 족: 달라지는 것은 에너지 준위와 가려막기예요.",
        // EN: Same period: what changes is the nuclear charge.
        "같은 주기: 달라지는 것은 핵전하예요.",
      ],
      // EN: <p><strong>F and Cl</strong> (same group): the outer electrons of fluorine are in the second energy level. Those of chlorine are in the third. The outer electron in fluorine is closer to the nucleus and is shielded by fewer inner electrons, so it is attracted more strongly.</p><p><strong>Cl and S</strong> (same period): the outer electrons are in the same energy level (n = 3) with the same shielding. Chlorine has 17 protons and sulfur has 16, so chlorine has the larger nuclear charge and attracts its outer electrons more strongly. More energy is needed to remove one.</p>
      answer: "<p><strong>F와 Cl</strong>(같은 족): 플루오린의 바깥 전자는 둘째 에너지 준위에 있어요. 염소의 바깥 전자는 셋째 준위에 있어요. 플루오린의 바깥 전자는 원자핵에 더 가깝고 더 적은 안쪽 전자에 가려지므로 더 세게 끌려요.</p><p><strong>Cl과 S</strong>(같은 주기): 바깥 전자는 같은 에너지 준위(n = 3)에 있고 가려막기도 같아요. 염소는 양성자가 17개, 황은 16개이므로 염소의 핵전하가 더 크고 바깥 전자를 더 세게 끌어당겨요. 그래서 전자 하나를 떼어 내는 데 에너지가 더 많이 필요해요.</p>",
      markscheme: [
        // EN: In F the outer electron is in a lower energy level / closer to the nucleus / less shielded than in Cl.
        "F의 바깥 전자는 Cl보다 낮은 에너지 준위에 있다 / 원자핵에 더 가깝다 / 덜 가려진다.",
        // EN: In Cl and S the outer electrons are in the same energy level / have the same (similar) shielding.
        "Cl과 S의 바깥 전자는 같은 에너지 준위에 있다 / 가려막기가 같다(비슷하다).",
        // EN: Cl has a greater nuclear charge / more protons than S, so the outer electron is attracted more strongly.
        "Cl은 S보다 핵전하가 크다 / 양성자가 많으므로 바깥 전자가 더 세게 끌린다.",
      ],
    },

    // ── s3-1-q019 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "s3-1-q019": {
      // EN: <p>A small piece of sodium is added to a large trough of water. What is observed?</p>
      stem: "<p>큰 수조의 물에 작은 나트륨 조각을 넣어요. 무엇이 관찰되나요?</p>",
      options: [
        // EN: The sodium sinks and reacts slowly.
        "나트륨이 가라앉고 천천히 반응해요.",
        // EN: The sodium floats, moves across the surface and fizzes.
        "나트륨이 물에 뜨고, 수면 위를 돌아다니며 거품을 내요.",
        // EN: The sodium floats and a brown gas is given off.
        "나트륨이 물에 뜨고 갈색 기체가 나와요.",
        // EN: The sodium sinks and a white precipitate forms.
        "나트륨이 가라앉고 흰색 앙금이 생겨요.",
      ],
      hints: [
        // EN: Is sodium more dense or less dense than water?
        "나트륨은 물보다 밀도가 큰가요, 작은가요?",
        // EN: One product is a gas. What do you see when a gas forms in a liquid?
        "생성물 하나는 기체예요. 액체 속에서 기체가 생기면 무엇이 보이나요?",
      ],
      // EN: <p>Sodium <strong>floats</strong>, melts into a ball, <strong>moves</strong> across the surface, <strong>fizzes</strong> and gets smaller until it disappears. The solution left is alkaline.</p><div class="worked__math"><span class="chem">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></div>
      solution: "<p>나트륨은 <strong>물에 뜨고</strong>, 녹아서 공 모양이 되며, 수면 위를 <strong>돌아다니고</strong>, <strong>거품을 내면서</strong> 점점 작아지다가 사라져요. 남은 용액은 알칼리성이에요.</p><div class=\"worked__math\"><span class=\"chem\">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></div>",
      misconception: {
        // EN (option A): Sodium is less dense than water, so it floats. The reaction is fast.
        "0": "나트륨은 물보다 밀도가 작아서 물에 떠요. 반응은 빨라요.",
        // EN (option C): The gas is hydrogen, which is colourless.
        "2": "이 기체는 수소이고, 수소는 무색이에요.",
        // EN (option D): Sodium floats. The product, sodium hydroxide, is soluble, so the solution stays clear and colourless.
        "3": "나트륨은 물에 떠요. 생성물인 수산화 나트륨은 물에 녹으므로 용액은 투명하고 무색인 채로 있어요.",
      },
    },

    // ── s3-1-q020 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "s3-1-q020": {
      // EN: <p>Which is the correct balanced equation for the reaction of potassium with water?</p>
      stem: "<p>칼륨과 물의 반응을 나타내는 올바른 균형 반응식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">K(s) + H2O(l) -> KOH(aq) + H2(g)</span>
        "<span class=\"chem\">K(s) + H2O(l) -> KOH(aq) + H2(g)</span>",
        // EN: <span class="chem">2K(s) + H2O(l) -> K2O(aq) + H2(g)</span>
        "<span class=\"chem\">2K(s) + H2O(l) -> K2O(aq) + H2(g)</span>",
        // EN: <span class="chem">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span>
        "<span class=\"chem\">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span>",
        // EN: <span class="chem">K(s) + 2H2O(l) -> K(OH)2(aq) + H2(g)</span>
        "<span class=\"chem\">K(s) + 2H2O(l) -> K(OH)2(aq) + H2(g)</span>",
      ],
      hints: [
        // EN: Products: a metal hydroxide and hydrogen gas.
        "생성물: 금속 수산화물과 수소 기체.",
        // EN: Potassium forms <span class="chem">K+</span>. Write the formula of the hydroxide, then balance H.
        "칼륨은 <span class=\"chem\">K+</span>을 만들어요. 수산화물의 화학식을 쓴 다음 H의 수를 맞추세요.",
      ],
      // EN: <div class="worked__math"><span class="chem">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span></div><p>Check: K 2 = 2; H 4 = 2 + 2; O 2 = 2. All group 1 metals react in the same way, because each atom loses its one valence electron to form a 1+ ion.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span></div><p>확인: K 2 = 2; H 4 = 2 + 2; O 2 = 2. 1족 금속은 모두 같은 방식으로 반응해요. 원자마다 원자가 전자 1개를 잃고 1+ 이온이 되기 때문이에요.</p>",
      misconception: {
        // EN (option A): The formulas are right, but the equation is not balanced. Count hydrogen: 2 on the left, 3 on the right.
        "0": "화학식은 맞지만 반응식의 균형이 맞지 않아요. 수소를 세어 보세요: 왼쪽에 2개, 오른쪽에 3개예요.",
        // EN (option B): A group 1 metal and water give the metal <em>hydroxide</em> and hydrogen. The oxide would react with water to give the hydroxide.
        "1": "1족 금속과 물이 반응하면 금속 <em>수산화물</em>과 수소가 생겨요. 산화물이 생긴다면 그 산화물이 물과 반응해 수산화물이 될 거예요.",
        // EN (option D): Potassium is in group 1, so it forms the 1+ ion. The hydroxide is KOH, not <span class="chem">K(OH)2</span>.
        "3": "칼륨은 1족이므로 1+ 이온이 돼요. 수산화물은 <span class=\"chem\">K(OH)2</span>가 아니라 KOH예요.",
      },
    },

    // ── s3-1-q021 · short · exam · SL · Structure 3.1.4 · 3 marks
    "s3-1-q021": {
      // EN: <p>Lithium, sodium and potassium all react with water. Describe and explain the trend in reactivity from lithium to potassium.</p>
      stem: "<p>리튬, 나트륨, 칼륨은 모두 물과 반응해요. 리튬에서 칼륨까지 반응성의 경향을 서술하고 설명하시오 (describe and explain).</p>",
      hints: [
        // EN: “Describe” needs the direction of the trend. “Explain” needs the reason.
        "‘서술하시오’에는 경향의 방향이 필요해요. ‘설명하시오’에는 이유가 필요해요.",
        // EN: In this reaction each metal atom loses one electron. What makes that electron easier to lose?
        "이 반응에서 금속 원자는 각각 전자 1개를 잃어요. 무엇 때문에 그 전자를 잃기 쉬워지나요?",
      ],
      // EN: <p>The reactivity increases down the group: the reaction with water becomes more vigorous from lithium to sodium to potassium.</p><p>Down the group, the outer electron is in a higher energy level. It is further from the nucleus and more shielded by inner electrons. The attraction between the nucleus and the outer electron is weaker, so the first ionization energy is lower and the atom loses its outer electron more easily.</p>
      answer: "<p>반응성은 족 아래로 갈수록 커져요: 물과의 반응은 리튬, 나트륨, 칼륨 순서로 더 격렬해져요.</p><p>족 아래로 갈수록 바깥 전자가 더 높은 에너지 준위에 있어요. 그 전자는 원자핵에서 더 멀고 안쪽 전자에 더 많이 가려져요. 원자핵과 바깥 전자 사이의 인력이 약해지므로, 제1 이온화 에너지가 작아지고 원자가 바깥 전자를 더 쉽게 잃어요.</p>",
      markscheme: [
        // EN: Reactivity increases down the group / the reaction becomes more vigorous from Li to K.
        "반응성은 족 아래로 갈수록 커진다 / Li에서 K로 갈수록 반응이 더 격렬해진다.",
        // EN: Down the group the outer electron is in a higher energy level / further from the nucleus AND more shielded.
        "족 아래로 갈수록 바깥 전자가 더 높은 에너지 준위에 있다 / 원자핵에서 더 멀다, 그리고 더 많이 가려진다.",
        // EN: So the attraction for the outer electron is weaker / the ionization energy is lower / the outer electron is lost more easily.
        "그래서 바깥 전자에 대한 인력이 약하다 / 이온화 에너지가 작다 / 바깥 전자를 더 쉽게 잃는다.",
      ],
    },

    // ── s3-1-q022 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "s3-1-q022": {
      // EN: <p>Pairs of aqueous solutions are mixed. In which mixture does a reaction occur?</p>
      stem: "<p>두 수용액을 짝지어 섞어요. 반응이 일어나는 혼합물은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">Br2(aq)</span> and <span class="chem">KCl(aq)</span>
        "<span class=\"chem\">Br2(aq)</span>와 <span class=\"chem\">KCl(aq)</span>",
        // EN: <span class="chem">I2(aq)</span> and <span class="chem">KBr(aq)</span>
        "<span class=\"chem\">I2(aq)</span>와 <span class=\"chem\">KBr(aq)</span>",
        // EN: <span class="chem">I2(aq)</span> and <span class="chem">KCl(aq)</span>
        "<span class=\"chem\">I2(aq)</span>와 <span class=\"chem\">KCl(aq)</span>",
        // EN: <span class="chem">Cl2(aq)</span> and <span class="chem">KI(aq)</span>
        "<span class=\"chem\">Cl2(aq)</span>와 <span class=\"chem\">KI(aq)</span>",
      ],
      hints: [
        // EN: Reactivity decreases down group 17: <span class="chem">Cl2</span> &gt; <span class="chem">Br2</span> &gt; <span class="chem">I2</span>.
        "반응성은 17족 아래로 갈수록 작아져요: <span class=\"chem\">Cl2</span> &gt; <span class=\"chem\">Br2</span> &gt; <span class=\"chem\">I2</span>.",
        // EN: A halogen displaces the halide ion of a halogen <em>below</em> it in the group.
        "할로젠은 같은 족에서 자기보다 <em>아래</em>에 있는 할로젠의 할로젠화 이온을 치환해요.",
      ],
      // EN: <p>A more reactive halogen displaces a less reactive halogen from its halide ion. Chlorine is above iodine, so it reacts:</p><div class="worked__math"><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></div><p>The mixture turns brown as iodine forms. A chlorine atom is smaller than an iodine atom, so the electron it gains is closer to the nucleus and less shielded. Chlorine attracts the extra electron more strongly.</p>
      solution: "<p>반응성이 더 큰 할로젠은 반응성이 더 작은 할로젠을 그 할로젠화 이온에서 치환해요. 염소는 아이오딘보다 위에 있으므로 반응해요:</p><div class=\"worked__math\"><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></div><p>아이오딘이 생기면서 혼합물이 갈색으로 변해요. 염소 원자는 아이오딘 원자보다 작으므로, 염소가 얻는 전자는 원자핵에 더 가깝고 덜 가려져요. 그래서 염소가 더해지는 전자를 더 세게 끌어당겨요.</p>",
      misconception: {
        // EN (option A): Bromine is below chlorine in group 17, so it is less reactive. It cannot displace chloride ions.
        "0": "브로민은 17족에서 염소 아래에 있으므로 반응성이 더 작아요. 염화 이온을 치환할 수 없어요.",
        // EN (option B): Iodine is below bromine in group 17, so it is less reactive. It cannot displace bromide ions.
        "1": "아이오딘은 17족에서 브로민 아래에 있으므로 반응성이 더 작아요. 브로민화 이온을 치환할 수 없어요.",
        // EN (option C): Iodine is the least reactive of the three halogens here. It cannot displace chloride ions.
        "2": "아이오딘은 여기 나온 세 할로젠 가운데 반응성이 가장 작아요. 염화 이온을 치환할 수 없어요.",
      },
    },

    // ── s3-1-q023 · short · challenge · SL · Structure 3.1.4 · 3 marks
    "s3-1-q023": {
      // EN: <p>A student has an aqueous solution of one halogen, <span class="chem">X2</span>. The halogen is chlorine, bromine or iodine.</p><ul><li>Test 1: <span class="chem">X2(aq)</span> is added to <span class="chem">KCl(aq)</span>. No reaction occurs.</li><li>Test 2: <span class="chem">X2(aq)</span> is added to <span class="chem">KI(aq)</span>. A reaction occurs and iodine forms.</li></ul><p>Identify <span class="chem">X2</span>, explain your reasoning, and write an ionic equation, with state symbols, for the reaction in test 2.</p>
      stem: "<p>한 학생이 할로젠 <span class=\"chem\">X2</span> 한 가지의 수용액을 가지고 있어요. 이 할로젠은 염소, 브로민, 아이오딘 가운데 하나예요.</p><ul><li>실험 1: <span class=\"chem\">X2(aq)</span>를 <span class=\"chem\">KCl(aq)</span>에 넣어요. 반응이 일어나지 않아요.</li><li>실험 2: <span class=\"chem\">X2(aq)</span>를 <span class=\"chem\">KI(aq)</span>에 넣어요. 반응이 일어나 아이오딘이 생겨요.</li></ul><p><span class=\"chem\">X2</span>가 무엇인지 찾고 (identify), 그렇게 판단한 이유를 설명하시오 (explain). 또 실험 2의 반응을 나타내는 이온 반응식을 상태 기호를 포함해 쓰시오 (write).</p>",
      hints: [
        // EN: Which halogens can displace iodide ions?
        "아이오딘화 이온을 치환할 수 있는 할로젠은 무엇인가요?",
        // EN: Which halogen cannot displace chloride ions but can displace iodide ions?
        "염화 이온은 치환하지 못하지만 아이오딘화 이온은 치환할 수 있는 할로젠은 무엇인가요?",
        // EN: In the ionic equation leave out <span class="chem">K+</span>. It does not change.
        "이온 반응식에서 <span class=\"chem\">K+</span>은 빼세요. 변하지 않기 때문이에요.",
      ],
      // EN: <p><span class="chem">X2</span> is <strong>bromine</strong>. A halogen displaces the halide ions of a less reactive halogen. Test 2 shows that <span class="chem">X2</span> is more reactive than iodine, so it is not iodine. Test 1 shows that <span class="chem">X2</span> cannot displace chloride ions, so it is less reactive than chlorine (and it is not chlorine, which does not react with its own ions). Reactivity decreases down group 17, so <span class="chem">X2</span> is bromine.</p><div class="worked__math"><span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span></div>
      answer: "<p><span class=\"chem\">X2</span>는 <strong>브로민</strong>이에요. 할로젠은 반응성이 더 작은 할로젠의 할로젠화 이온을 치환해요. 실험 2는 <span class=\"chem\">X2</span>가 아이오딘보다 반응성이 크다는 것을 보여 주므로 아이오딘이 아니에요. 실험 1은 <span class=\"chem\">X2</span>가 염화 이온을 치환할 수 없다는 것을 보여 주므로, 염소보다 반응성이 작아요(그리고 염소도 아니에요. 염소는 자기 자신의 이온과 반응하지 않아요). 반응성은 17족 아래로 갈수록 작아지므로 <span class=\"chem\">X2</span>는 브로민이에요.</p><div class=\"worked__math\"><span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span></div>",
      markscheme: [
        // EN: X<sub>2</sub> is bromine / Br<sub>2</sub>.
        "X<sub>2</sub>는 브로민 / Br<sub>2</sub>이다.",
        // EN: It displaces iodide ions, so it is more reactive than iodine, but it does not displace chloride ions, so it is less reactive than chlorine (accept: reactivity decreases down group 17).
        "아이오딘화 이온을 치환하므로 아이오딘보다 반응성이 크지만, 염화 이온은 치환하지 않으므로 염소보다 반응성이 작다(“반응성은 17족 아래로 갈수록 작아진다”도 인정).",
        // EN: <span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span> (balanced, with state symbols).
        "<span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>(균형이 맞고 상태 기호 포함).",
      ],
    },

    // ── s3-1-q024 · mcq · foundation · SL · Structure 3.1.5 · 1 mark
    "s3-1-q024": {
      // EN: <p>Aluminium oxide is described as an amphoteric oxide. What does “amphoteric” mean?</p>
      stem: "<p>산화 알루미늄은 양쪽성 산화물이라고 해요. ‘양쪽성’은 무슨 뜻인가요?</p>",
      options: [
        // EN: The oxide is neutral: it reacts with neither acids nor bases.
        "이 산화물은 중성이어서 산과도 염기와도 반응하지 않아요.",
        // EN: The oxide reacts with both acids and bases.
        "이 산화물은 산과도 염기와도 반응해요.",
        // EN: The oxide dissolves in water to give a solution with pH 7.
        "이 산화물은 물에 녹아 pH 7인 용액을 만들어요.",
        // EN: The oxide contains both a metal and a non-metal.
        "이 산화물은 금속과 비금속을 모두 포함해요.",
      ],
      hints: [
        // EN: Think about where aluminium is in period 3: between the metals with basic oxides and the non-metals with acidic oxides.
        "3주기에서 알루미늄이 어디에 있는지 생각해 보세요: 염기성 산화물을 만드는 금속과 산성 산화물을 만드는 비금속 사이에 있어요.",
      ],
      // EN: <p>An amphoteric oxide can act as a base and as an acid: it <strong>reacts with both acids and bases</strong>. Across a period the oxides change from basic (metals, on the left) through amphoteric to acidic (non-metals, on the right). Aluminium oxide is in the middle.</p>
      solution: "<p>양쪽성 산화물은 염기로도, 산으로도 작용할 수 있어요. 즉 <strong>산과도 염기와도 반응해요</strong>. 주기를 따라 산화물은 염기성(왼쪽의 금속)에서 양쪽성을 거쳐 산성(오른쪽의 비금속)으로 바뀌어요. 산화 알루미늄은 그 가운데에 있어요.</p>",
      misconception: {
        // EN (option A): Amphoteric is not the same as neutral. A neutral oxide reacts with neither. An amphoteric oxide reacts with both.
        "0": "양쪽성은 중성과 같지 않아요. 중성 산화물은 어느 쪽과도 반응하지 않아요. 양쪽성 산화물은 양쪽 모두와 반응해요.",
        // EN (option C): Amphoteric describes how the oxide reacts, not the pH of a solution. Aluminium oxide does not dissolve in water.
        "2": "양쪽성은 산화물이 어떻게 반응하는지를 나타내는 말이지, 용액의 pH를 나타내는 말이 아니에요. 산화 알루미늄은 물에 녹지 않아요.",
        // EN (option D): Every metal oxide contains a metal and a non-metal (oxygen). Amphoteric describes acid–base behaviour.
        "3": "금속 산화물은 모두 금속과 비금속(산소)을 포함해요. 양쪽성은 산·염기로서의 성질을 나타내요.",
      },
    },

    // ── s3-1-q025 · order · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q025": {
      // EN: <p>Put these period 3 oxides in order, from the <strong>most basic</strong> (top) to the <strong>most acidic</strong> (bottom).</p>
      stem: "<p>다음 3주기 산화물을 <strong>가장 염기성인 것</strong>(위)부터 <strong>가장 산성인 것</strong>(아래)까지 순서대로 늘어놓으세요.</p>",
      options: [
        // EN: <span class="chem">Na2O</span>
        "<span class=\"chem\">Na2O</span>",
        // EN: <span class="chem">MgO</span>
        "<span class=\"chem\">MgO</span>",
        // EN: <span class="chem">Al2O3</span>
        "<span class=\"chem\">Al2O3</span>",
        // EN: <span class="chem">SO3</span>
        "<span class=\"chem\">SO3</span>",
      ],
      hints: [
        // EN: Find Na, Mg, Al and S in period 3.
        "3주기에서 Na, Mg, Al, S를 찾으세요.",
        // EN: Metal oxides are basic. Non-metal oxides are acidic. The change across the period is gradual.
        "금속 산화물은 염기성이에요. 비금속 산화물은 산성이에요. 주기를 따라 조금씩 바뀌어요.",
      ],
      // EN: <p>Across period 3 the elements change from metals to non-metals, and the oxides change from basic to acidic. <span class="chem">Na2O</span> is strongly basic and <span class="chem">MgO</span> is basic. <span class="chem">Al2O3</span> is amphoteric. <span class="chem">SO3</span> is a non-metal oxide and is strongly acidic.</p>
      solution: "<p>3주기를 따라 원소는 금속에서 비금속으로 바뀌고, 산화물은 염기성에서 산성으로 바뀌어요. <span class=\"chem\">Na2O</span>는 강한 염기성이고 <span class=\"chem\">MgO</span>는 염기성이에요. <span class=\"chem\">Al2O3</span>는 양쪽성이에요. <span class=\"chem\">SO3</span>는 비금속 산화물이고 강한 산성이에요.</p>",
    },

    // ── s3-1-q026 · short · exam · SL · Structure 3.1.5 · 2 marks
    "s3-1-q026": {
      // EN: <p>Deduce equations, including state symbols, for the reactions with water of:</p><ul><li>(a) lithium oxide</li><li>(b) calcium oxide.</li></ul>
      stem: "<p>다음 물질이 물과 반응할 때의 반응식을 상태 기호를 포함해 추론하시오 (deduce).</p><ul><li>(a) 산화 리튬</li><li>(b) 산화 칼슘</li></ul>",
      hints: [
        // EN: Metal oxide + water → metal hydroxide.
        "금속 산화물 + 물 → 금속 수산화물.",
        // EN: Lithium forms <span class="chem">Li+</span> and calcium forms <span class="chem">Ca^2+</span>. Write each hydroxide formula first, then balance.
        "리튬은 <span class=\"chem\">Li+</span>, 칼슘은 <span class=\"chem\">Ca^2+</span>을 만들어요. 각 수산화물의 화학식을 먼저 쓴 다음 균형을 맞추세요.",
      ],
      // EN: <div class="worked__math"><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></div><div class="worked__math"><span class="chem">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span></div><p>An oxide of a group 1 or group 2 metal reacts with water to form the metal hydroxide only. No hydrogen forms. The solutions are alkaline.</p>
      answer: "<div class=\"worked__math\"><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></div><div class=\"worked__math\"><span class=\"chem\">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span></div><p>1족이나 2족 금속의 산화물은 물과 반응해 금속 수산화물만 만들어요. 수소는 생기지 않아요. 용액은 알칼리성이에요.</p>",
      markscheme: [
        // EN: <span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span> (balanced, with state symbols).
        "<span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span>(균형이 맞고 상태 기호 포함).",
        // EN: <span class="chem">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span> (with state symbols; accept <span class="chem">Ca(OH)2(s)</span>).
        "<span class=\"chem\">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span>(상태 기호 포함; <span class=\"chem\">Ca(OH)2(s)</span>도 인정).",
      ],
    },

    // ── s3-1-q027 · mcq · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q027": {
      // EN: <p>Which statement about ocean acidification is correct?</p>
      stem: "<p>해양 산성화에 대한 설명으로 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: It is caused mainly by acid rain falling into the sea.
        "주로 바다에 내리는 산성비 때문에 생겨요.",
        // EN: It is caused by sulfur dioxide from the sea floor dissolving in sea water.
        "바다 밑바닥에서 나온 이산화 황이 바닷물에 녹아서 생겨요.",
        // EN: It is caused by more carbon dioxide from the atmosphere dissolving in sea water.
        "대기 중의 이산화 탄소가 바닷물에 더 많이 녹아서 생겨요.",
        // EN: It is caused by metal oxides dissolving in sea water.
        "금속 산화물이 바닷물에 녹아서 생겨요.",
      ],
      hints: [
        // EN: Which gas in the atmosphere is increasing in concentration?
        "대기 중에서 농도가 높아지고 있는 기체는 무엇인가요?",
        // EN: Is the oxide of carbon acidic or basic?
        "탄소의 산화물은 산성인가요, 염기성인가요?",
      ],
      // EN: <p>Carbon dioxide is an acidic non-metal oxide. As the level of <span class="chem">CO2</span> in the atmosphere rises, more of it dissolves in sea water and forms carbonic acid:</p><div class="worked__math"><span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>This lowers the pH of the sea water. The process is called ocean acidification.</p>
      solution: "<p>이산화 탄소는 산성인 비금속 산화물이에요. 대기 중 <span class=\"chem\">CO2</span>의 양이 늘어나면 더 많은 양이 바닷물에 녹아 탄산을 만들어요:</p><div class=\"worked__math\"><span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>그러면 바닷물의 pH가 낮아져요. 이 과정을 해양 산성화라고 해요.</p>",
      misconception: {
        // EN (option A): Acid rain and ocean acidification are two different problems. Acid rain is caused by oxides of sulfur and nitrogen. Ocean acidification is caused by carbon dioxide.
        "0": "산성비와 해양 산성화는 서로 다른 문제예요. 산성비는 황과 질소의 산화물 때문에 생겨요. 해양 산성화는 이산화 탄소 때문에 생겨요.",
        // EN (option B): Sulfur dioxide is linked to acid rain. The cause of ocean acidification is the rising level of carbon dioxide in the atmosphere.
        "1": "이산화 황은 산성비와 관련이 있어요. 해양 산성화의 원인은 대기 중 이산화 탄소의 증가예요.",
        // EN (option D): Metal oxides are basic. They would raise the pH, not lower it.
        "3": "금속 산화물은 염기성이에요. pH를 낮추는 것이 아니라 높일 거예요.",
      },
    },

    // ── s3-1-q028 · short · challenge · SL · Structure 3.1.5 · 3 marks
    "s3-1-q028": {
      // EN: <p>Some coal contains sulfur. When the coal burns, the sulfur also burns. Explain how this leads to acid rain. Include two equations with state symbols.</p>
      stem: "<p>어떤 석탄에는 황이 들어 있어요. 석탄이 탈 때 황도 함께 타요. 이것이 어떻게 산성비로 이어지는지 설명하시오 (explain). 상태 기호를 포함한 반응식 2개를 쓰세요.</p>",
      hints: [
        // EN: First equation: sulfur burning in oxygen.
        "첫째 반응식: 황이 산소 속에서 타는 반응.",
        // EN: Second equation: the oxide reacting with water. A non-metal oxide and water form an acid.
        "둘째 반응식: 그 산화물이 물과 반응하는 반응. 비금속 산화물과 물은 산을 만들어요.",
        // EN: Finish by saying what the acid does to the rain.
        "마지막으로 그 산이 빗물에 어떤 영향을 주는지 쓰세요.",
      ],
      // EN: <p>The sulfur burns to form sulfur dioxide, a gaseous non-metal oxide:</p><div class="worked__math"><span class="chem">S(s) + O2(g) -> SO2(g)</span></div><p>Sulfur dioxide is an acidic oxide. It reacts with water in the atmosphere to form an acid:</p><div class="worked__math"><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>The acid lowers the pH of the rain. (Sulfur dioxide can also be oxidized in the air to <span class="chem">SO3</span>, which reacts with water to form sulfuric acid: <span class="chem">SO3(g) + H2O(l) -> H2SO4(aq)</span>.)</p>
      answer: "<p>황은 타서 기체 비금속 산화물인 이산화 황이 돼요:</p><div class=\"worked__math\"><span class=\"chem\">S(s) + O2(g) -> SO2(g)</span></div><p>이산화 황은 산성 산화물이에요. 대기 중의 물과 반응해 산을 만들어요:</p><div class=\"worked__math\"><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>이 산이 빗물의 pH를 낮춰요. (이산화 황은 공기 중에서 산화되어 <span class=\"chem\">SO3</span>가 될 수도 있고, 이것이 물과 반응하면 황산이 돼요: <span class=\"chem\">SO3(g) + H2O(l) -> H2SO4(aq)</span>.)</p>",
      markscheme: [
        // EN: <span class="chem">S(s) + O2(g) -> SO2(g)</span>
        "<span class=\"chem\">S(s) + O2(g) -> SO2(g)</span>",
        // EN: <span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span> (accept →; accept <span class="chem">SO3(g) + H2O(l) -> H2SO4(aq)</span>).
        "<span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span>(→도 인정; <span class=\"chem\">SO3(g) + H2O(l) -> H2SO4(aq)</span>도 인정).",
        // EN: Sulfur dioxide is an acidic (non-metal) oxide that dissolves in / reacts with rain water to form an acid, so the pH of the rain is lowered.
        "이산화 황은 산성 (비금속) 산화물이어서 빗물에 녹아 / 빗물과 반응해 산을 만들고, 그래서 빗물의 pH가 낮아진다.",
      ],
    },

    // ── s3-1-q029 · mcq · challenge · SL · Structure 3.1.5 · 1 mark
    "s3-1-q029": {
      // EN: <p>Selenium is directly below sulfur in group 16. Selenium dioxide, <span class="chem">SeO2</span>, is a solid that dissolves in water. Which is the best prediction for this reaction?</p>
      stem: "<p>셀레늄은 16족에서 황 바로 아래에 있어요. 이산화 셀레늄 <span class=\"chem\">SeO2</span>는 물에 녹는 고체예요. 이 반응에 대한 가장 알맞은 예측은 어느 것인가요?</p>",
      options: [
        // EN: An alkaline solution forms: <span class="chem">SeO2(s) + 2H2O(l) -> Se(OH)4(aq)</span>
        "알칼리성 용액이 생겨요: <span class=\"chem\">SeO2(s) + 2H2O(l) -> Se(OH)4(aq)</span>",
        // EN: A neutral solution forms, because <span class="chem">SeO2</span> is amphoteric.
        "<span class=\"chem\">SeO2</span>는 양쪽성이므로 중성 용액이 생겨요.",
        // EN: An acidic solution forms: <span class="chem">SeO2(s) + H2O(l) -> H2SeO4(aq)</span>
        "산성 용액이 생겨요: <span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO4(aq)</span>",
        // EN: An acidic solution forms: <span class="chem">SeO2(s) + H2O(l) -> H2SeO3(aq)</span>
        "산성 용액이 생겨요: <span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO3(aq)</span>",
      ],
      hints: [
        // EN: Is selenium a metal or a non-metal? Use its group.
        "셀레늄은 금속인가요, 비금속인가요? 족을 이용해 판단하세요.",
        // EN: Use the reaction of <span class="chem">SO2</span> with water as your model.
        "<span class=\"chem\">SO2</span>와 물의 반응을 본보기로 삼으세요.",
        // EN: Check that the equation you choose is balanced.
        "고른 반응식의 균형이 맞는지 확인하세요.",
      ],
      // EN: <p>Elements in the same group have similar chemical properties. Sulfur dioxide is an acidic non-metal oxide:</p><div class="worked__math"><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>Selenium is also a non-metal in group 16, so <span class="chem">SeO2</span> should react in the same way:</p><div class="worked__math"><span class="chem">SeO2(s) + H2O(l) -> H2SeO3(aq)</span></div><p>Check: Se 1 = 1; O 3 = 3; H 2 = 2. The solution is acidic.</p>
      solution: "<p>같은 족의 원소들은 화학적 성질이 비슷해요. 이산화 황은 산성인 비금속 산화물이에요:</p><div class=\"worked__math\"><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>셀레늄도 16족의 비금속이므로 <span class=\"chem\">SeO2</span>도 같은 방식으로 반응할 거예요:</p><div class=\"worked__math\"><span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO3(aq)</span></div><p>확인: Se 1 = 1; O 3 = 3; H 2 = 2. 용액은 산성이에요.</p>",
      misconception: {
        // EN (option A): Hydroxides form from the oxides of metals in groups 1 and 2. Selenium is a non-metal, like sulfur, so its oxide is acidic.
        "0": "수산화물은 1족과 2족 금속의 산화물에서 생겨요. 셀레늄은 황처럼 비금속이므로 그 산화물은 산성이에요.",
        // EN (option B): Amphoteric does not mean neutral, and amphoteric oxides are found near the metal–non-metal boundary. Selenium is a non-metal in group 16.
        "1": "양쪽성은 중성이라는 뜻이 아니고, 양쪽성 산화물은 금속과 비금속의 경계 근처에서 볼 수 있어요. 셀레늄은 16족의 비금속이에요.",
        // EN (option C): The oxide is acidic, but this equation is not balanced: 3 oxygen atoms on the left and 4 on the right. Compare with <span class="chem">SO2</span>, which forms <span class="chem">H2SO3</span>.
        "2": "산화물은 산성이 맞지만, 이 반응식은 균형이 맞지 않아요: 산소 원자가 왼쪽에 3개, 오른쪽에 4개예요. <span class=\"chem\">H2SO3</span>를 만드는 <span class=\"chem\">SO2</span>와 비교해 보세요.",
      },
    },

    // ── s3-1-q030 · mcq · foundation · SL · Structure 3.1.6 · 1 mark
    "s3-1-q030": {
      // EN: <p>Which is the oxidation state of sulfur in the sulfate ion, <span class="chem">SO4^2-</span>, written correctly?</p>
      stem: "<p>황산 이온 <span class=\"chem\">SO4^2-</span>에서 황의 산화수를 바르게 쓴 것은 어느 것인가요?</p>",
      options: [
        // EN: 6+
        "6+",
        // EN: +6
        "+6",
        // EN: −2
        "−2",
        // EN: +8
        "+8",
      ],
      hints: [
        // EN: Oxygen is −2 in most compounds.
        "대부분의 화합물에서 산소는 −2예요.",
        // EN: The oxidation states in an ion add up to the charge on the ion.
        "이온에서 산화수를 모두 더하면 이온의 전하와 같아요.",
        // EN: Write the sign first, then the number.
        "부호를 먼저 쓰고, 그다음 숫자를 쓰세요.",
      ],
      // EN: <p>Let the oxidation state of sulfur be <i>x</i>. Oxygen is −2.</p><div class="worked__math"><i>x</i> + 4(−2) = −2</div><div class="worked__math"><i>x</i> = −2 + 8 = <b>+6</b></div><p>Write the sign first and then the number: +6. A Roman numeral (VI) is also accepted. “6+” and “6” do not score.</p>
      solution: "<p>황의 산화수를 <i>x</i>라고 해요. 산소는 −2예요.</p><div class=\"worked__math\"><i>x</i> + 4(−2) = −2</div><div class=\"worked__math\"><i>x</i> = −2 + 8 = <b>+6</b></div><p>부호를 먼저 쓰고 숫자를 써요: +6. 로마 숫자(VI)도 인정해요. “6+”나 “6”은 점수를 받지 못해요.</p>",
      misconception: {
        // EN (option A): The number is right, but the notation is not. An oxidation state has the sign first: +6. “6+” is how you write the charge on an ion. IB markschemes reject “6+”.
        "0": "숫자는 맞지만 표기법이 틀렸어요. 산화수는 부호를 먼저 써요: +6. “6+”는 이온의 전하를 쓰는 방법이에요. IB 채점 기준은 “6+”를 인정하지 않아요.",
        // EN (option C): This is the charge on the whole ion. It is the <em>sum</em> of all the oxidation states, not the oxidation state of sulfur.
        "2": "이것은 이온 전체의 전하예요. 이것은 모든 산화수의 <em>합</em>이지, 황의 산화수가 아니에요.",
        // EN (option D): This treats the ion as if it had no charge. The oxidation states must add up to the charge on the ion, −2, not to zero.
        "3": "이것은 이온에 전하가 없는 것처럼 계산한 거예요. 산화수의 합은 0이 아니라 이온의 전하인 −2가 되어야 해요.",
      },
    },

    // ── s3-1-q031 · mcq · foundation · SL · Structure 3.1.6 · 1 mark
    "s3-1-q031": {
      // EN: <p>The oxidation state of each chlorine atom in <span class="chem">Cl2</span> is 0. Which statement explains this?</p>
      stem: "<p><span class=\"chem\">Cl2</span>에서 각 염소 원자의 산화수는 0이에요. 그 이유를 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: The molecule has no overall charge.
        "분자 전체에 전하가 없어요.",
        // EN: Each chlorine atom has seven valence electrons.
        "염소 원자는 각각 원자가 전자가 7개예요.",
        // EN: The two atoms are identical, so the bonding electrons are shared equally and no electrons are transferred.
        "두 원자가 똑같아서 결합 전자를 똑같이 나누어 가지므로 전자가 이동하지 않아요.",
        // EN: The bond in <span class="chem">Cl2</span> is ionic, so the two charges cancel.
        "<span class=\"chem\">Cl2</span>의 결합은 이온 결합이어서 두 전하가 서로 상쇄돼요.",
      ],
      hints: [
        // EN: An oxidation state is the charge an atom would have if the compound were made of ions.
        "산화수는 화합물이 이온으로 이루어져 있다고 가정할 때 원자가 가질 전하예요.",
        // EN: To imagine ions, you give the bonding electrons to the more electronegative atom. What if both atoms are the same?
        "이온을 상상하려면 결합 전자를 전기 음성도가 더 큰 원자에게 줘요. 두 원자가 같다면 어떻게 될까요?",
      ],
      // EN: <p>The oxidation state shows the number of electrons transferred in forming a bond. In an element, the atoms are identical and have the same electronegativity. The bonding electrons are <strong>shared equally</strong>, so <strong>no electrons are transferred</strong> and each atom has oxidation state 0.</p>
      solution: "<p>산화수는 결합이 생길 때 이동한 전자의 수를 나타내요. 원소에서는 원자들이 똑같고 전기 음성도도 같아요. 결합 전자를 <strong>똑같이 나누어 가지므로</strong> <strong>전자가 이동하지 않고</strong>, 각 원자의 산화수는 0이에요.</p>",
      misconception: {
        // EN (option A): True, but it is not the reason. HCl also has no overall charge, yet its atoms have oxidation states +1 and −1.
        "0": "맞는 말이지만 이유는 아니에요. HCl도 전체 전하가 없지만, 원자의 산화수는 +1과 −1이에요.",
        // EN (option B): True, but the number of valence electrons does not fix the oxidation state. Chlorine is −1 in NaCl and 0 in <span class="chem">Cl2</span>.
        "1": "맞는 말이지만 원자가 전자 수로 산화수가 정해지지는 않아요. 염소는 NaCl에서 −1이고 <span class=\"chem\">Cl2</span>에서 0이에요.",
        // EN (option D): The bond in <span class="chem">Cl2</span> is covalent. Two identical atoms cannot transfer electrons to each other.
        "3": "<span class=\"chem\">Cl2</span>의 결합은 공유 결합이에요. 똑같은 두 원자는 서로에게 전자를 줄 수 없어요.",
      },
    },

    // ── s3-1-q032 · numeric · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q032": {
      // EN: <p>Deduce the oxidation state of oxygen in hydrogen peroxide, <span class="chem">H2O2</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>과산화 수소 <span class=\"chem\">H2O2</span>에서 산소의 산화수를 추론하시오 (deduce).</p><p>부호를 먼저, 그다음 숫자를 입력하세요. 예: +3 또는 −3.</p>",
      hints: [
        // EN: Hydrogen is +1 here, because it is bonded to a non-metal.
        "여기서 수소는 비금속과 결합해 있으므로 +1이에요.",
        // EN: The oxidation states in a compound add up to zero. Do not assume that oxygen is −2.
        "화합물에서 산화수의 합은 0이에요. 산소가 −2라고 미리 정하지 마세요.",
      ],
      // EN: <p>Hydrogen is +1. Let the oxidation state of oxygen be <i>x</i>.</p><div class="worked__math">2(+1) + 2<i>x</i> = 0</div><div class="worked__math"><i>x</i> = <b>−1</b></div><p>Oxygen is −2 in most compounds, but in <strong>peroxides</strong> it is −1. Always work it out from the other atoms.</p>
      solution: "<p>수소는 +1이에요. 산소의 산화수를 <i>x</i>라고 해요.</p><div class=\"worked__math\">2(+1) + 2<i>x</i> = 0</div><div class=\"worked__math\"><i>x</i> = <b>−1</b></div><p>대부분의 화합물에서 산소는 −2이지만, <strong>과산화물</strong>에서는 −1이에요. 항상 다른 원자들로부터 계산해서 구하세요.</p>",
      // EN: In an exam, write −1 with the sign first.
      correctNote: "시험에서는 부호를 먼저 써서 −1로 쓰세요.",
    },

    // ── s3-1-q033 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q033": {
      // EN: <p>In which compound does hydrogen have the oxidation state −1?</p>
      stem: "<p>수소의 산화수가 −1인 화합물은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">H2O2</span>
        "<span class=\"chem\">H2O2</span>",
        // EN: <span class="chem">HCl</span>
        "<span class=\"chem\">HCl</span>",
        // EN: <span class="chem">NaH</span>
        "<span class=\"chem\">NaH</span>",
      ],
      hints: [
        // EN: Hydrogen is +1 when it is bonded to a more electronegative atom.
        "수소는 전기 음성도가 더 큰 원자와 결합하면 +1이에요.",
        // EN: Which compound has hydrogen bonded to a metal?
        "수소가 금속과 결합해 있는 화합물은 어느 것인가요?",
      ],
      // EN: <p>Sodium is a group 1 metal and is always +1 in its compounds. In NaH the oxidation states add up to zero, so hydrogen is <strong>−1</strong>. Hydrogen is −1 in <strong>metal hydrides</strong>, because the metal is less electronegative than hydrogen.</p>
      solution: "<p>나트륨은 1족 금속이고 화합물에서 항상 +1이에요. NaH에서 산화수의 합은 0이므로 수소는 <strong>−1</strong>이에요. <strong>금속 수소화물</strong>에서 수소는 −1이에요. 금속의 전기 음성도가 수소보다 작기 때문이에요.</p>",
      misconception: {
        // EN (option A): Nitrogen is more electronegative than hydrogen. In <span class="chem">NH3</span> nitrogen is −3 and hydrogen is +1.
        "0": "질소는 수소보다 전기 음성도가 커요. <span class=\"chem\">NH3</span>에서 질소는 −3, 수소는 +1이에요.",
        // EN (option B): In hydrogen peroxide it is the <em>oxygen</em> that has the unusual value, −1. Hydrogen is +1.
        "1": "과산화 수소에서 특이한 값 −1을 갖는 것은 <em>산소</em>예요. 수소는 +1이에요.",
        // EN (option C): Chlorine is more electronegative than hydrogen. In HCl hydrogen is +1 and chlorine is −1.
        "2": "염소는 수소보다 전기 음성도가 커요. HCl에서 수소는 +1, 염소는 −1이에요.",
      },
    },

    // ── s3-1-q034 · numeric · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q034": {
      // EN: <p>Deduce the oxidation state of chromium in the dichromate ion, <span class="chem">Cr2O7^2-</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>다이크로뮴산 이온 <span class=\"chem\">Cr2O7^2-</span>에서 크로뮴의 산화수를 추론하시오 (deduce).</p><p>부호를 먼저, 그다음 숫자를 입력하세요. 예: +3 또는 −3.</p>",
      hints: [
        // EN: Oxygen is −2. There are seven oxygen atoms.
        "산소는 −2예요. 산소 원자는 7개예요.",
        // EN: The total must equal the charge on the ion, −2.
        "합계는 이온의 전하인 −2와 같아야 해요.",
        // EN: There are two chromium atoms. Divide the total for chromium by 2.
        "크로뮴 원자는 2개예요. 크로뮴의 합계를 2로 나누세요.",
      ],
      // EN: <p>Let the oxidation state of chromium be <i>x</i>. Oxygen is −2.</p><div class="worked__math">2<i>x</i> + 7(−2) = −2</div><div class="worked__math">2<i>x</i> = −2 + 14 = +12</div><div class="worked__math"><i>x</i> = <b>+6</b></div><p>The ion can be named dichromate(VI).</p>
      solution: "<p>크로뮴의 산화수를 <i>x</i>라고 해요. 산소는 −2예요.</p><div class=\"worked__math\">2<i>x</i> + 7(−2) = −2</div><div class=\"worked__math\">2<i>x</i> = −2 + 14 = +12</div><div class=\"worked__math\"><i>x</i> = <b>+6</b></div><p>이 이온은 다이크로뮴산(VI) 이온이라고 부를 수 있어요.</p>",
      // EN: In an exam, write +6 with the sign first. “6+” and “6” do not score.
      correctNote: "시험에서는 부호를 먼저 써서 +6으로 쓰세요. “6+”나 “6”은 점수를 받지 못해요.",
    },

    // ── s3-1-q035 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q035": {
      // EN: <p>What is the formula of copper(I) oxide?</p>
      stem: "<p>산화 구리(I)의 화학식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">CuO</span>
        "<span class=\"chem\">CuO</span>",
        // EN: <span class="chem">CuO2</span>
        "<span class=\"chem\">CuO2</span>",
        // EN: <span class="chem">Cu2O</span>
        "<span class=\"chem\">Cu2O</span>",
        // EN: <span class="chem">Cu2O3</span>
        "<span class=\"chem\">Cu2O3</span>",
      ],
      hints: [
        // EN: The Roman numeral (I) means that copper has oxidation state +1.
        "로마 숫자 (I)은 구리의 산화수가 +1이라는 뜻이에요.",
        // EN: Oxide is <span class="chem">O^2-</span>. How many +1 ions balance one 2− ion?
        "산화 이온은 <span class=\"chem\">O^2-</span>예요. 2− 이온 하나와 균형을 이루려면 +1 이온이 몇 개 필요한가요?",
      ],
      // EN: <p>The Roman numeral gives the oxidation state of copper: +1. Oxygen is −2. Two copper atoms at +1 balance one oxygen at −2:</p><div class="worked__math">2(+1) + (−2) = 0</div><p>The formula is <span class="chem">Cu2O</span>.</p>
      solution: "<p>로마 숫자는 구리의 산화수를 알려 줘요: +1. 산소는 −2예요. +1인 구리 원자 2개가 −2인 산소 1개와 균형을 이뤄요:</p><div class=\"worked__math\">2(+1) + (−2) = 0</div><p>화학식은 <span class=\"chem\">Cu2O</span>예요.</p>",
      misconception: {
        // EN (option A): In CuO, copper is +2 (it balances one <span class="chem">O^2-</span>). This is copper(II) oxide.
        "0": "CuO에서 구리는 +2예요(<span class=\"chem\">O^2-</span> 하나와 균형을 이뤄요). 이것은 산화 구리(II)예요.",
        // EN (option B): The Roman numeral gives the oxidation state of the metal, not the number of oxygen atoms. In <span class="chem">CuO2</span> copper would be +4.
        "1": "로마 숫자는 산소 원자의 수가 아니라 금속의 산화수를 나타내요. <span class=\"chem\">CuO2</span>라면 구리는 +4일 거예요.",
        // EN (option D): In <span class="chem">Cu2O3</span> copper would be +3: 2<i>x</i> + 3(−2) = 0. That would be copper(III) oxide.
        "3": "<span class=\"chem\">Cu2O3</span>라면 구리는 +3일 거예요: 2<i>x</i> + 3(−2) = 0. 그것은 산화 구리(III)예요.",
      },
    },

    // ── s3-1-q036 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q036": {
      // EN: <p>The sulfate(IV) ion is also called the sulfite ion. Which is its formula?</p>
      stem: "<p>황산(IV) 이온은 아황산 이온이라고도 해요. 이 이온의 화학식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">SO3^2-</span>
        "<span class=\"chem\">SO3^2-</span>",
        // EN: <span class="chem">SO4^2-</span>
        "<span class=\"chem\">SO4^2-</span>",
        // EN: <span class="chem">SO3</span>
        "<span class=\"chem\">SO3</span>",
        // EN: <span class="chem">S^2-</span>
        "<span class=\"chem\">S^2-</span>",
      ],
      hints: [
        // EN: The Roman numeral (IV) is the oxidation state of sulfur: +4.
        "로마 숫자 (IV)는 황의 산화수예요: +4.",
        // EN: Test each ion: sulfur + oxygens (each −2) = charge on the ion.
        "각 이온을 확인해 보세요: 황 + 산소들(각각 −2) = 이온의 전하.",
      ],
      // EN: <p>Sulfate(IV) means sulfur has oxidation state +4. Test <span class="chem">SO3^2-</span>:</p><div class="worked__math"><i>x</i> + 3(−2) = −2</div><div class="worked__math"><i>x</i> = <b>+4</b></div><p>So <span class="chem">SO3^2-</span> is sulfate(IV), or sulfite. <span class="chem">SO4^2-</span> is sulfate(VI), or sulfate. In the same way, <span class="chem">NO2-</span> is nitrite (nitrogen +3) and <span class="chem">NO3-</span> is nitrate (nitrogen +5). IB accepts both kinds of name.</p>
      solution: "<p>황산(IV)은 황의 산화수가 +4라는 뜻이에요. <span class=\"chem\">SO3^2-</span>를 확인해 봐요:</p><div class=\"worked__math\"><i>x</i> + 3(−2) = −2</div><div class=\"worked__math\"><i>x</i> = <b>+4</b></div><p>그러므로 <span class=\"chem\">SO3^2-</span>는 황산(IV) 이온, 즉 아황산 이온이에요. <span class=\"chem\">SO4^2-</span>는 황산(VI) 이온, 즉 황산 이온이에요. 같은 방식으로 <span class=\"chem\">NO2-</span>는 아질산 이온(질소 +3)이고 <span class=\"chem\">NO3-</span>는 질산 이온(질소 +5)이에요. IB에서는 두 가지 이름을 모두 인정해요.</p>",
      misconception: {
        // EN (option B): In <span class="chem">SO4^2-</span> sulfur is +6: <i>x</i> + 4(−2) = −2. This is sulfate(VI), usually called sulfate.
        "1": "<span class=\"chem\">SO4^2-</span>에서 황은 +6이에요: <i>x</i> + 4(−2) = −2. 이것은 황산(VI) 이온이고, 보통 황산 이온이라고 불러요.",
        // EN (option C): <span class="chem">SO3</span> is a molecule, sulfur trioxide, not an ion. Sulfur is +6 in it.
        "2": "<span class=\"chem\">SO3</span>는 이온이 아니라 분자인 삼산화 황이에요. 여기서 황은 +6이에요.",
        // EN (option D): <span class="chem">S^2-</span> is the sulfide ion. Sulfur is −2. Names ending in -ate or -ite contain oxygen.
        "3": "<span class=\"chem\">S^2-</span>는 황화 이온이에요. 황은 −2예요. 영어 이름이 -ate나 -ite로 끝나는 이온(한국어로는 ‘~산 이온’, ‘아~산 이온’)에는 산소가 들어 있어요.",
      },
    },

    // ── s3-1-q037 · order · challenge · SL · Structure 3.1.6 · 1 mark
    "s3-1-q037": {
      // EN: <p>Put these species in order of <strong>increasing oxidation state of nitrogen</strong> (most negative first).</p>
      stem: "<p>다음 화학종을 <strong>질소의 산화수가 커지는 순서</strong>(가장 작은 음수부터)로 늘어놓으세요.</p>",
      options: [
        // EN: <span class="chem">NH4+</span>
        "<span class=\"chem\">NH4+</span>",
        // EN: <span class="chem">N2H4</span>
        "<span class=\"chem\">N2H4</span>",
        // EN: <span class="chem">N2</span>
        "<span class=\"chem\">N2</span>",
        // EN: <span class="chem">NO2-</span>
        "<span class=\"chem\">NO2-</span>",
        // EN: <span class="chem">NO3-</span>
        "<span class=\"chem\">NO3-</span>",
      ],
      hints: [
        // EN: Hydrogen is +1 and oxygen is −2 in all of these.
        "이 화학종들에서 수소는 모두 +1, 산소는 모두 −2예요.",
        // EN: For an ion, the total equals the charge on the ion. For an element, the oxidation state is 0.
        "이온에서는 합계가 이온의 전하와 같아요. 홑원소 물질에서는 산화수가 0이에요.",
        // EN: In <span class="chem">N2H4</span> there are two nitrogen atoms: divide by 2.
        "<span class=\"chem\">N2H4</span>에는 질소 원자가 2개 있어요: 2로 나누세요.",
      ],
      // EN: <div class="worked__math"><span class="chem">NH4+</span>: <i>x</i> + 4(+1) = +1, so <i>x</i> = −3</div><div class="worked__math"><span class="chem">N2H4</span>: 2<i>x</i> + 4(+1) = 0, so <i>x</i> = −2</div><div class="worked__math"><span class="chem">N2</span>: element, so <i>x</i> = 0</div><div class="worked__math"><span class="chem">NO2-</span>: <i>x</i> + 2(−2) = −1, so <i>x</i> = +3</div><div class="worked__math"><span class="chem">NO3-</span>: <i>x</i> + 3(−2) = −1, so <i>x</i> = +5</div><p>Nitrogen shows oxidation states from −3 to +5.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">NH4+</span>: <i>x</i> + 4(+1) = +1, 따라서 <i>x</i> = −3</div><div class=\"worked__math\"><span class=\"chem\">N2H4</span>: 2<i>x</i> + 4(+1) = 0, 따라서 <i>x</i> = −2</div><div class=\"worked__math\"><span class=\"chem\">N2</span>: 홑원소 물질, 따라서 <i>x</i> = 0</div><div class=\"worked__math\"><span class=\"chem\">NO2-</span>: <i>x</i> + 2(−2) = −1, 따라서 <i>x</i> = +3</div><div class=\"worked__math\"><span class=\"chem\">NO3-</span>: <i>x</i> + 3(−2) = −1, 따라서 <i>x</i> = +5</div><p>질소는 −3부터 +5까지의 산화수를 가져요.</p>",
    },

    // ── s3-1-q038 · mcq · foundation · AHL · Structure 3.1.7 · 1 mark
    "s3-1-q038": {
      // EN: <p>The table shows first ionization energies from the data booklet for period 2.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First ionization energy / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Li</th><th class="num" scope="col">Be</th><th class="num" scope="col">B</th><th class="num" scope="col">C</th><th class="num" scope="col">N</th><th class="num" scope="col">O</th><th class="num" scope="col">F</th><th class="num" scope="col">Ne</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">520</td><td class="num">900</td><td class="num">801</td><td class="num">1086</td><td class="num">1402</td><td class="num">1314</td><td class="num">1681</td><td class="num">2081</td></tr></tbody></table></div><p>The general trend is an increase. Which two elements have a <strong>lower</strong> first ionization energy than the element before them?</p>
      stem: "<p>표는 데이터 부클릿에 있는 2주기 원소의 제1 이온화 에너지예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>제1 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">원소</th><th class=\"num\" scope=\"col\">Li</th><th class=\"num\" scope=\"col\">Be</th><th class=\"num\" scope=\"col\">B</th><th class=\"num\" scope=\"col\">C</th><th class=\"num\" scope=\"col\">N</th><th class=\"num\" scope=\"col\">O</th><th class=\"num\" scope=\"col\">F</th><th class=\"num\" scope=\"col\">Ne</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">520</td><td class=\"num\">900</td><td class=\"num\">801</td><td class=\"num\">1086</td><td class=\"num\">1402</td><td class=\"num\">1314</td><td class=\"num\">1681</td><td class=\"num\">2081</td></tr></tbody></table></div><p>전체적인 경향은 증가예요. 제1 이온화 에너지가 바로 앞 원소보다 <strong>작은</strong> 두 원소는 어느 것인가요?</p>",
      options: [
        // EN: Be and N
        "Be와 N",
        // EN: B and O
        "B와 O",
        // EN: C and F
        "C와 F",
        // EN: Li and Ne
        "Li와 Ne",
      ],
      hints: [
        // EN: Go along the row. Compare each value with the one to its left.
        "표의 행을 따라가며 각 값을 왼쪽 값과 비교해 보세요.",
        // EN: There are two places where the value goes down.
        "값이 내려가는 곳이 두 군데 있어요.",
      ],
      // EN: <p>The value falls from Be (900) to <strong>B</strong> (801), and from N (1402) to <strong>O</strong> (1314). These two decreases are called discontinuities.</p><ul><li>B: the electron is removed from the 2p sublevel, which is higher in energy than the 2s sublevel.</li><li>O: the electron is removed from a 2p orbital that holds two electrons. The two electrons repel each other, so one is removed more easily.</li></ul>
      solution: "<p>값은 Be(900)에서 <strong>B</strong>(801)로, N(1402)에서 <strong>O</strong>(1314)로 떨어져요. 이 두 감소를 불연속이라고 해요.</p><ul><li>B: 2s 부껍질보다 에너지가 높은 2p 부껍질에서 전자를 떼어 내요.</li><li>O: 전자 2개가 들어 있는 2p 오비탈에서 전자를 떼어 내요. 두 전자가 서로 밀어내므로 하나를 더 쉽게 떼어 낼 수 있어요.</li></ul>",
      misconception: {
        // EN (option A): Be (900) is higher than Li (520), and N (1402) is higher than C (1086). These are the elements that come <em>before</em> each decrease.
        "0": "Be(900)는 Li(520)보다 크고, N(1402)은 C(1086)보다 커요. 이 원소들은 각 감소의 <em>바로 앞</em>에 있는 원소예요.",
        // EN (option C): C (1086) is higher than B (801), and F (1681) is higher than O (1314). These follow the general trend.
        "2": "C(1086)는 B(801)보다 크고, F(1681)는 O(1314)보다 커요. 이 원소들은 전체적인 경향을 따라요.",
        // EN (option D): Li is the first element in the period, and Ne has the highest value of all.
        "3": "Li는 주기의 첫 원소이고, Ne는 모든 원소 가운데 값이 가장 커요.",
      },
    },

    // ── s3-1-q039 · short · exam · AHL · Structure 3.1.7 · 2 marks
    "s3-1-q039": {
      // EN: <p>The first ionization energy of magnesium is 738 kJ mol<sup>−1</sup>. The first ionization energy of aluminium is 578 kJ mol<sup>−1</sup>.</p><p>Explain why the value for aluminium is lower, even though aluminium has a greater nuclear charge.</p>
      stem: "<p>마그네슘의 제1 이온화 에너지는 738 kJ mol<sup>−1</sup>이에요. 알루미늄의 제1 이온화 에너지는 578 kJ mol<sup>−1</sup>이에요.</p><p>알루미늄의 핵전하가 더 큰데도 알루미늄의 값이 더 작은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Write the electron configuration of each atom.
        "각 원자의 전자 배치를 쓰세요.",
        // EN: From which sublevel is the electron removed in each atom? Which sublevel is higher in energy?
        "각 원자에서 전자는 어느 부껍질에서 떨어져 나가나요? 어느 부껍질의 에너지가 더 높나요?",
      ],
      // EN: <p>Mg is <span class="mono nowrap">[Ne] 3s<sup>2</sup></span> and Al is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span>. In magnesium the electron is removed from the 3s sublevel. In aluminium it is removed from the 3p sublevel. The 3p sublevel is higher in energy than the 3s sublevel, so less energy is needed to remove the electron.</p><p>Do not write that a full 3s sublevel is “specially stable”. Base your answer on the energy of the electron that is removed.</p>
      answer: "<p>Mg는 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup></span>이고 Al은 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span>이에요. 마그네슘에서는 3s 부껍질에서 전자를 떼어 내요. 알루미늄에서는 3p 부껍질에서 떼어 내요. 3p 부껍질은 3s 부껍질보다 에너지가 높으므로, 전자를 떼어 내는 데 필요한 에너지가 더 작아요.</p><p>꽉 찬 3s 부껍질이 “특별히 안정하다”라고 쓰지 마세요. 떨어져 나가는 전자의 에너지를 근거로 답하세요.</p>",
      markscheme: [
        // EN: In Al the electron is removed from the 3p sublevel, and in Mg from the 3s sublevel.
        "Al에서는 3p 부껍질에서, Mg에서는 3s 부껍질에서 전자가 떨어져 나간다.",
        // EN: The 3p sublevel is higher in energy than the 3s sublevel (accept: the 3p electron is further from the nucleus / is also shielded by the 3s electrons), so less energy is needed.
        "3p 부껍질은 3s 부껍질보다 에너지가 높으므로(“3p 전자가 원자핵에서 더 멀다 / 3s 전자에 의해서도 가려진다”도 인정) 필요한 에너지가 더 작다.",
      ],
    },

    // ── s3-1-q040 · short · exam · AHL · Structure 3.1.7 · 2 marks
    "s3-1-q040": {
      // EN: <p>The first ionization energy of phosphorus is 1012 kJ mol<sup>−1</sup>. The first ionization energy of sulfur is 1000 kJ mol<sup>−1</sup>.</p><p>Explain why the value for sulfur is lower, even though sulfur has a greater nuclear charge.</p>
      stem: "<p>인의 제1 이온화 에너지는 1012 kJ mol<sup>−1</sup>이에요. 황의 제1 이온화 에너지는 1000 kJ mol<sup>−1</sup>이에요.</p><p>황의 핵전하가 더 큰데도 황의 값이 더 작은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Draw the 3p orbitals as three boxes for P and for S.
        "P와 S의 3p 오비탈을 각각 상자 3개로 그려 보세요.",
        // EN: In which atom does one box contain two electrons? What do two electrons in one orbital do to each other?
        "어느 원자에서 상자 하나에 전자가 2개 들어 있나요? 한 오비탈에 있는 두 전자는 서로에게 어떤 영향을 주나요?",
      ],
      // EN: <p>P is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>: each of the three 3p orbitals holds one electron. S is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>: one 3p orbital holds two electrons. In sulfur the electron is removed from this doubly occupied orbital. The two electrons in the same orbital repel each other, so less energy is needed to remove one of them.</p><p>Do not write that a half-filled 3p sublevel is “specially stable”. IB does not accept this.</p>
      answer: "<p>P는 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>이에요: 3개의 3p 오비탈에 전자가 하나씩 들어 있어요. S는 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>이에요: 3p 오비탈 하나에 전자가 2개 들어 있어요. 황에서는 전자 2개가 들어 있는 이 오비탈에서 전자를 떼어 내요. 같은 오비탈에 있는 두 전자는 서로 밀어내므로, 그중 하나를 떼어 내는 데 필요한 에너지가 더 작아요.</p><p>반쯤 채워진 3p 부껍질이 “특별히 안정하다”라고 쓰지 마세요. IB에서는 이 답을 인정하지 않아요.</p>",
      markscheme: [
        // EN: In S the electron is removed from a 3p orbital that contains two electrons / a paired electron is removed (in P each 3p orbital contains one electron).
        "S에서는 전자 2개가 들어 있는 3p 오비탈에서 전자가 떨어져 나간다 / 쌍을 이룬 전자가 떨어져 나간다(P에서는 각 3p 오비탈에 전자가 1개씩 들어 있다).",
        // EN: The two electrons in the same orbital repel each other, so less energy is needed to remove one.
        "같은 오비탈에 있는 두 전자는 서로 밀어내므로, 하나를 떼어 내는 데 필요한 에너지가 더 작다.",
      ],
    },

    // ── s3-1-q041 · mcq · challenge · AHL · Structure 3.1.7 · 1 mark
    "s3-1-q041": {
      // EN: <p>The graph shows the first ionization energies of the period 3 elements, from the data booklet.</p><p><svg viewBox="0 0 316 196" width="316" height="196" style="max-width:100%;height:auto" role="img" aria-label="Graph of first ionization energy in kilojoules per mole against element for period 3. Sodium 496, magnesium 738, aluminium 578, silicon 787, phosphorus 1012, sulfur 1000, chlorine 1251, argon 1520. The general trend is upward, with small decreases at aluminium and at sulfur."><path d="M58 14V170H306" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="53" x2="306" y1="170" y2="170" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="174" text-anchor="end" font-size="12" fill="currentColor">0</text><line x1="53" x2="306" y1="131" y2="131" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="135" text-anchor="end" font-size="12" fill="currentColor">400</text><line x1="53" x2="306" y1="92" y2="92" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="96" text-anchor="end" font-size="12" fill="currentColor">800</text><line x1="53" x2="306" y1="53" y2="53" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="57" text-anchor="end" font-size="12" fill="currentColor">1200</text><line x1="53" x2="306" y1="14" y2="14" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="18" text-anchor="end" font-size="12" fill="currentColor">1600</text><text x="74" y="187" text-anchor="middle" font-size="12" fill="currentColor">Na</text><text x="104.85714285714286" y="187" text-anchor="middle" font-size="12" fill="currentColor">Mg</text><text x="135.71428571428572" y="187" text-anchor="middle" font-size="12" fill="currentColor">Al</text><text x="166.57142857142856" y="187" text-anchor="middle" font-size="12" fill="currentColor">Si</text><text x="197.42857142857144" y="187" text-anchor="middle" font-size="12" fill="currentColor">P</text><text x="228.28571428571428" y="187" text-anchor="middle" font-size="12" fill="currentColor">S</text><text x="259.1428571428571" y="187" text-anchor="middle" font-size="12" fill="currentColor">Cl</text><text x="290" y="187" text-anchor="middle" font-size="12" fill="currentColor">Ar</text><path d="M74.0 121.6L104.9 98.0L135.7 113.6L166.6 93.3L197.4 71.3L228.3 72.5L259.1 48.0L290.0 21.8" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="74.0" cy="121.6" r="4" fill="currentColor"/><circle cx="104.9" cy="98.0" r="4" fill="currentColor"/><circle cx="135.7" cy="113.6" r="4" fill="currentColor"/><circle cx="166.6" cy="93.3" r="4" fill="currentColor"/><circle cx="197.4" cy="71.3" r="4" fill="currentColor"/><circle cx="228.3" cy="72.5" r="4" fill="currentColor"/><circle cx="259.1" cy="48.0" r="4" fill="currentColor"/><circle cx="290.0" cy="21.8" r="4" fill="currentColor"/><text transform="translate(14 92) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">first IE / kJ mol⁻¹</text></svg></p><p>What do the decreases at aluminium and at sulfur show?</p>
      stem: "<p>그래프는 데이터 부클릿에 있는 3주기 원소의 제1 이온화 에너지예요.</p><p><svg viewBox=\"0 0 316 196\" width=\"316\" height=\"196\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"3주기 원소에 대한 제1 이온화 에너지(단위: 킬로줄/몰) 그래프. 나트륨 496, 마그네슘 738, 알루미늄 578, 규소 787, 인 1012, 황 1000, 염소 1251, 아르곤 1520. 전체적으로 증가하는 경향이고, 알루미늄과 황에서 조금 감소해요.\"><path d=\"M58 14V170H306\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"53\" x2=\"306\" y1=\"170\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"174\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">0</text><line x1=\"53\" x2=\"306\" y1=\"131\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"135\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400</text><line x1=\"53\" x2=\"306\" y1=\"92\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"96\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">800</text><line x1=\"53\" x2=\"306\" y1=\"53\" y2=\"53\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"57\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">1200</text><line x1=\"53\" x2=\"306\" y1=\"14\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"18\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">1600</text><text x=\"74\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Na</text><text x=\"104.85714285714286\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Mg</text><text x=\"135.71428571428572\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Al</text><text x=\"166.57142857142856\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Si</text><text x=\"197.42857142857144\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">P</text><text x=\"228.28571428571428\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">S</text><text x=\"259.1428571428571\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Cl</text><text x=\"290\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Ar</text><path d=\"M74.0 121.6L104.9 98.0L135.7 113.6L166.6 93.3L197.4 71.3L228.3 72.5L259.1 48.0L290.0 21.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><circle cx=\"74.0\" cy=\"121.6\" r=\"4\" fill=\"currentColor\"/><circle cx=\"104.9\" cy=\"98.0\" r=\"4\" fill=\"currentColor\"/><circle cx=\"135.7\" cy=\"113.6\" r=\"4\" fill=\"currentColor\"/><circle cx=\"166.6\" cy=\"93.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"197.4\" cy=\"71.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"228.3\" cy=\"72.5\" r=\"4\" fill=\"currentColor\"/><circle cx=\"259.1\" cy=\"48.0\" r=\"4\" fill=\"currentColor\"/><circle cx=\"290.0\" cy=\"21.8\" r=\"4\" fill=\"currentColor\"/><text transform=\"translate(14 92) rotate(-90)\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">제1 IE / kJ mol⁻¹</text></svg></p><p>알루미늄과 황에서 값이 감소한다는 것은 무엇을 보여 주나요?</p>",
      options: [
        // EN: A filled or half-filled sublevel has a special stability.
        "채워지거나 반쯤 채워진 부껍질은 특별히 안정해요.",
        // EN: The nuclear charge decreases at aluminium and at sulfur.
        "알루미늄과 황에서 핵전하가 작아져요.",
        // EN: The electrons in the third energy level do not all have the same energy.
        "셋째 에너지 준위에 있는 전자들의 에너지가 모두 같지는 않아요.",
        // EN: Aluminium and sulfur each start a new main energy level.
        "알루미늄과 황에서 각각 새로운 주 에너지 준위가 시작돼요.",
      ],
      hints: [
        // EN: If all the n = 3 electrons had the same energy, what would the graph look like?
        "n = 3의 전자들이 모두 같은 에너지를 가진다면, 그래프는 어떤 모양일까요?",
        // EN: The decrease at Al comes with the first 3p electron. What does that tell you about 3s and 3p?
        "Al에서의 감소는 첫 번째 3p 전자와 함께 나타나요. 이것은 3s와 3p에 대해 무엇을 알려 주나요?",
      ],
      // EN: <p>Nuclear charge increases steadily across the period. If all the electrons in the third energy level had the same energy, the first ionization energy would rise steadily too. It does not.</p><p>The decrease at aluminium shows that the 3p electron is at a higher energy than the 3s electrons. So the main energy level is split into <strong>sublevels of different energy</strong>. The decrease at sulfur shows the effect of repulsion when a p orbital holds two electrons. The discontinuities are evidence for sublevels.</p>
      solution: "<p>핵전하는 주기를 따라 꾸준히 커져요. 셋째 에너지 준위의 전자들이 모두 같은 에너지를 가진다면, 제1 이온화 에너지도 꾸준히 커질 거예요. 하지만 그렇지 않아요.</p><p>알루미늄에서의 감소는 3p 전자가 3s 전자보다 에너지가 높다는 것을 보여 줘요. 그러므로 주 에너지 준위는 <strong>에너지가 서로 다른 부껍질</strong>로 나뉘어 있어요. 황에서의 감소는 p 오비탈 하나에 전자가 2개 들어 있을 때 생기는 반발의 효과를 보여 줘요. 이 불연속은 부껍질이 있다는 증거예요.</p>",
      misconception: {
        // EN (option A): The guide says explanations must be based on the energy of the electron removed, not on “special stability”. Markschemes reject this argument.
        "0": "교수요목 안내서에 따르면, 설명은 “특별한 안정성”이 아니라 떨어져 나가는 전자의 에너지를 근거로 해야 해요. 채점 기준에서는 이 논리를 인정하지 않아요.",
        // EN (option B): The nuclear charge increases by one proton at every step across the period, including at aluminium and sulfur.
        "1": "핵전하는 주기를 따라 한 단계마다 양성자 1개씩 커져요. 알루미늄과 황에서도 마찬가지예요.",
        // EN (option D): All period 3 elements have their outer electrons in the same main energy level, n = 3. A new main level starts at the next period (potassium), where the drop is much larger.
        "3": "3주기 원소는 모두 바깥 전자가 같은 주 에너지 준위 n = 3에 있어요. 새로운 주 준위는 다음 주기(칼륨)에서 시작되고, 거기서는 값이 훨씬 크게 떨어져요.",
      },
    },

    // ── s3-1-q042 · multi · foundation · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q042": {
      // EN: <p>Which are characteristic properties of transition elements? Select all that apply.</p>
      stem: "<p>전이 원소의 특징적인 성질은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: Variable oxidation states
        "여러 가지 산화수",
        // EN: Low melting points
        "낮은 녹는점",
        // EN: Formation of coloured compounds
        "색깔 있는 화합물을 만듦",
        // EN: Catalytic properties
        "촉매 성질",
        // EN: Formation of complex ions with ligands
        "리간드와 착이온을 만듦",
        // EN: Poor electrical conductivity
        "낮은 전기 전도성",
      ],
      hints: [
        // EN: Think about iron or copper: are they easy to melt? Do they conduct?
        "철이나 구리를 생각해 보세요: 쉽게 녹나요? 전기가 통하나요?",
        // EN: The guide lists six properties: variable oxidation state, high melting points, magnetic properties, catalytic properties, coloured compounds and complex ions.
        "교수요목 안내서에는 6가지 성질이 나와요: 여러 가지 산화수, 높은 녹는점, 자기적 성질, 촉매 성질, 색깔 있는 화합물, 착이온.",
      ],
      // EN: <p>Transition elements have incomplete d sublevels. This gives them characteristic properties: <strong>variable oxidation states</strong>, <strong>high melting points</strong>, <strong>magnetic properties</strong>, <strong>catalytic properties</strong>, <strong>coloured compounds</strong>, and <strong>complex ions with ligands</strong>. You need to recognize this list.</p>
      solution: "<p>전이 원소는 d 부껍질이 다 채워져 있지 않아요. 그래서 특징적인 성질을 보여요: <strong>여러 가지 산화수</strong>, <strong>높은 녹는점</strong>, <strong>자기적 성질</strong>, <strong>촉매 성질</strong>, <strong>색깔 있는 화합물</strong>, <strong>리간드와 착이온 형성</strong>. 이 목록을 알아볼 수 있어야 해요.</p>",
      misconception: {
        // EN (option B): Transition elements have <em>high</em> melting points. Their metallic bonding is strong.
        "1": "전이 원소는 녹는점이 <em>높아요</em>. 금속 결합이 강하기 때문이에요.",
        // EN (option F): Transition elements are metals. They are good electrical conductors.
        "5": "전이 원소는 금속이에요. 전기를 잘 통해요.",
      },
    },

    // ── s3-1-q043 · mcq · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q043": {
      // EN: <p>Zinc is in the d-block. Its atom has the configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> and its only common ion is <span class="chem">Zn^2+</span>. Why is zinc not classed as a transition element?</p>
      stem: "<p>아연은 d 구역에 있어요. 아연 원자의 전자 배치는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span>이고, 흔한 이온은 <span class=\"chem\">Zn^2+</span> 하나뿐이에요. 아연을 전이 원소로 분류하지 않는 이유는 무엇인가요?</p>",
      options: [
        // EN: Zinc has a full 4s sublevel.
        "아연은 4s 부껍질이 꽉 차 있어요.",
        // EN: Neither the zinc atom nor the <span class="chem">Zn^2+</span> ion has an incomplete d sublevel.
        "아연 원자와 <span class=\"chem\">Zn^2+</span> 이온 모두 다 채워지지 않은 d 부껍질이 없어요.",
        // EN: The <span class="chem">Zn^2+</span> ion has the configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>8</sup></span>.
        "<span class=\"chem\">Zn^2+</span> 이온의 전자 배치는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>8</sup></span>이에요.",
        // EN: Zinc is a metal with a high density.
        "아연은 밀도가 큰 금속이에요.",
      ],
      hints: [
        // EN: What feature of the d sublevel makes an element a transition element?
        "d 부껍질의 어떤 특징이 있어야 전이 원소가 되나요?",
        // EN: Write the configuration of <span class="chem">Zn^2+</span>. Remember which electrons are lost first.
        "<span class=\"chem\">Zn^2+</span>의 전자 배치를 쓰세요. 어떤 전자가 먼저 떨어져 나가는지 기억하세요.",
      ],
      // EN: <p>A transition element has an <strong>incomplete d sublevel</strong> (as an atom or in its ions). Zn is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> and <span class="chem">Zn^2+</span> is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The 3d sublevel is full in both. So zinc does not show the characteristic properties: it has one oxidation state in its compounds, and its compounds are not coloured.</p>
      solution: "<p>전이 원소는 (원자 상태나 이온 상태에서) <strong>다 채워지지 않은 d 부껍질</strong>을 가져요. Zn은 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span>이고 <span class=\"chem\">Zn^2+</span>는 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>이에요. 둘 다 3d 부껍질이 꽉 차 있어요. 그래서 아연은 특징적인 성질을 보이지 않아요: 화합물에서 산화수가 한 가지뿐이고, 화합물에 색깔이 없어요.</p>",
      misconception: {
        // EN (option A): True, but iron and many other transition elements also have a full 4s sublevel. The d sublevel is what matters.
        "0": "맞는 말이지만, 철을 비롯한 많은 전이 원소도 4s 부껍질이 꽉 차 있어요. 중요한 것은 d 부껍질이에요.",
        // EN (option C): The 4s electrons are lost first when a first-row d-block atom forms an ion. <span class="chem">Zn^2+</span> is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>.
        "2": "첫째 줄 d 구역 원자가 이온이 될 때는 4s 전자가 먼저 떨어져 나가요. <span class=\"chem\">Zn^2+</span>는 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>이에요.",
        // EN (option D): True, but this does not decide whether an element is a transition element.
        "3": "맞는 말이지만, 이것으로 전이 원소인지 아닌지가 정해지지는 않아요.",
      },
    },

    // ── s3-1-q044 · short · challenge · AHL · Structure 3.1.8 · 2 marks
    "s3-1-q044": {
      // EN: <p>Scandium has the electron configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>1</sup></span>. In its compounds it forms only the <span class="chem">Sc^3+</span> ion.</p><p>Give one argument for and one argument against classing scandium as a transition element.</p>
      stem: "<p>스칸듐의 전자 배치는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>1</sup></span>이에요. 스칸듐은 화합물에서 <span class=\"chem\">Sc^3+</span> 이온만 만들어요.</p><p>스칸듐을 전이 원소로 분류하는 것에 찬성하는 근거 하나와 반대하는 근거 하나를 쓰세요.</p>",
      hints: [
        // EN: Look at the 3d sublevel in the atom.
        "원자의 3d 부껍질을 보세요.",
        // EN: Now write the configuration of <span class="chem">Sc^3+</span>. Which three electrons are lost?
        "이제 <span class=\"chem\">Sc^3+</span>의 전자 배치를 쓰세요. 어떤 전자 3개가 떨어져 나가나요?",
      ],
      // EN: <p><strong>For:</strong> the scandium atom has an incomplete d sublevel (<span class="mono nowrap">3d<sup>1</sup></span>).</p><p><strong>Against:</strong> the only ion, <span class="chem">Sc^3+</span>, has the configuration <span class="mono nowrap">[Ar]</span>, with no d electrons. So scandium does not show characteristic properties of transition elements: it has only one oxidation state (+3) in its compounds, and its compounds are not coloured.</p>
      answer: "<p><strong>찬성:</strong> 스칸듐 원자는 다 채워지지 않은 d 부껍질(<span class=\"mono nowrap\">3d<sup>1</sup></span>)을 가져요.</p><p><strong>반대:</strong> 유일한 이온인 <span class=\"chem\">Sc^3+</span>의 전자 배치는 <span class=\"mono nowrap\">[Ar]</span>이고, d 전자가 없어요. 그래서 스칸듐은 전이 원소의 특징적인 성질을 보이지 않아요: 화합물에서 산화수가 한 가지(+3)뿐이고, 화합물에 색깔이 없어요.</p>",
      markscheme: [
        // EN: For: the atom has an incomplete / partially filled d sublevel (3d<sup>1</sup>).
        "찬성: 원자가 다 채워지지 않은 / 부분적으로 채워진 d 부껍질(3d<sup>1</sup>)을 가진다.",
        // EN: Against: <span class="chem">Sc^3+</span> has no d electrons / is [Ar] (accept: it shows only one oxidation state / its compounds are not coloured).
        "반대: <span class=\"chem\">Sc^3+</span>에는 d 전자가 없다 / [Ar]이다(“산화수가 한 가지뿐이다 / 화합물에 색깔이 없다”도 인정).",
      ],
    },

    // ── s3-1-q045 · mcq · foundation · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q045": {
      // EN: <p>Transition elements form complex ions with ligands. What is a ligand?</p>
      stem: "<p>전이 원소는 리간드와 착이온을 만들어요. 리간드란 무엇인가요?</p>",
      options: [
        // EN: The positive metal ion at the centre of a complex ion.
        "착이온의 중심에 있는 금속 양이온.",
        // EN: A molecule or ion that accepts a pair of electrons from a metal ion.
        "금속 이온으로부터 전자쌍을 받는 분자나 이온.",
        // EN: An ion outside the square brackets that balances the charge of a complex ion.
        "대괄호 바깥에서 착이온의 전하와 균형을 이루는 이온.",
        // EN: A molecule or ion with a lone pair of electrons that forms a coordination bond to a central metal ion.
        "비공유 전자쌍을 가지고 있어서 중심 금속 이온과 배위 결합을 만드는 분자나 이온.",
      ],
      hints: [
        // EN: Examples of ligands: <span class="chem">H2O</span>, <span class="chem">NH3</span>, <span class="chem">Cl-</span>. What do these have in common?
        "리간드의 예: <span class=\"chem\">H2O</span>, <span class=\"chem\">NH3</span>, <span class=\"chem\">Cl-</span>. 이들의 공통점은 무엇인가요?",
        // EN: In a coordination bond, both electrons of the shared pair come from the same atom.
        "배위 결합에서는 공유 전자쌍의 두 전자가 모두 같은 원자에서 와요.",
      ],
      // EN: <p>A ligand is a molecule or ion that has a <strong>lone pair of electrons</strong>. It donates the lone pair to the central metal ion and forms a <strong>coordination bond</strong>. In <span class="chem">[Cu(H2O)6]^2+</span> the six water molecules are the ligands.</p>
      solution: "<p>리간드는 <strong>비공유 전자쌍</strong>을 가진 분자나 이온이에요. 리간드는 비공유 전자쌍을 중심 금속 이온에 내주어 <strong>배위 결합</strong>을 만들어요. <span class=\"chem\">[Cu(H2O)6]^2+</span>에서는 물 분자 6개가 리간드예요.</p>",
      misconception: {
        // EN (option A): The metal ion is the centre of the complex. The ligands are the species bonded around it.
        "0": "금속 이온은 착이온의 중심이에요. 리간드는 그 주위에 결합한 화학종이에요.",
        // EN (option B): The direction is reversed. The ligand <em>donates</em> the electron pair. The metal ion accepts it.
        "1": "방향이 거꾸로예요. 리간드가 전자쌍을 <em>내주고</em>, 금속 이온이 그것을 받아요.",
        // EN (option C): An ion outside the brackets is not bonded to the metal ion. Ligands are written inside the square brackets.
        "2": "대괄호 바깥의 이온은 금속 이온과 결합해 있지 않아요. 리간드는 대괄호 안에 써요.",
      },
    },

    // ── s3-1-q046 · numeric · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q046": {
      // EN: <p>Deduce the oxidation state of chromium in the compound <span class="chem">[Cr(H2O)4Cl2]Cl</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>화합물 <span class=\"chem\">[Cr(H2O)4Cl2]Cl</span>에서 크로뮴의 산화수를 추론하시오 (deduce).</p><p>부호를 먼저, 그다음 숫자를 입력하세요. 예: +3 또는 −3.</p>",
      hints: [
        // EN: The chloride ion outside the brackets is <span class="chem">Cl-</span>. What is the charge on the complex ion inside the brackets?
        "대괄호 바깥의 염화 이온은 <span class=\"chem\">Cl-</span>이에요. 대괄호 안 착이온의 전하는 얼마인가요?",
        // EN: Water is a neutral ligand. Each chloride ligand is 1−.
        "물은 전하가 없는 리간드예요. 염화 리간드는 각각 1−예요.",
        // EN: Chromium + ligand charges = charge on the complex ion.
        "크로뮴 + 리간드의 전하 = 착이온의 전하.",
      ],
      // EN: <p>The compound has no overall charge. The ion outside the brackets is <span class="chem">Cl-</span>, so the complex ion is <span class="chem">[Cr(H2O)4Cl2]+</span>.</p><p>Inside the complex: water is neutral (0), and each chloride ligand is −1. Let chromium be <i>x</i>.</p><div class="worked__math"><i>x</i> + 4(0) + 2(−1) = +1</div><div class="worked__math"><i>x</i> = <b>+3</b></div>
      solution: "<p>이 화합물은 전체 전하가 없어요. 대괄호 바깥의 이온이 <span class=\"chem\">Cl-</span>이므로 착이온은 <span class=\"chem\">[Cr(H2O)4Cl2]+</span>예요.</p><p>착이온 안에서 물은 전하가 없고(0), 염화 리간드는 각각 −1이에요. 크로뮴을 <i>x</i>라고 해요.</p><div class=\"worked__math\"><i>x</i> + 4(0) + 2(−1) = +1</div><div class=\"worked__math\"><i>x</i> = <b>+3</b></div>",
      // EN: In an exam, write +3 (or III) with the sign first. “3+” and “3” do not score.
      correctNote: "시험에서는 부호를 먼저 써서 +3(또는 III)으로 쓰세요. “3+”나 “3”은 점수를 받지 못해요.",
    },

    // ── s3-1-q047 · multi · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q047": {
      // EN: <p>Which statements about the complex ion <span class="chem">[CuCl4]^2-</span> are correct? Select all that apply.</p>
      stem: "<p>착이온 <span class=\"chem\">[CuCl4]^2-</span>에 대한 설명으로 옳은 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: The chloride ions are the ligands.
        "염화 이온이 리간드예요.",
        // EN: Each chloride ion donates a pair of electrons to the copper ion.
        "각 염화 이온은 구리 이온에 전자쌍을 내줘요.",
        // EN: The bonds between copper and chlorine are coordination bonds.
        "구리와 염소 사이의 결합은 배위 결합이에요.",
        // EN: The oxidation state of copper is −2.
        "구리의 산화수는 −2예요.",
        // EN: The copper ion donates pairs of electrons to the chloride ions.
        "구리 이온이 염화 이온에 전자쌍을 내줘요.",
        // EN: The oxidation state of copper is +2.
        "구리의 산화수는 +2예요.",
      ],
      hints: [
        // EN: Each ligand is a chloride ion, <span class="chem">Cl-</span>, with lone pairs.
        "각 리간드는 비공유 전자쌍을 가진 염화 이온 <span class=\"chem\">Cl-</span>이에요.",
        // EN: Copper + 4(−1) = −2.
        "구리 + 4(−1) = −2.",
      ],
      // EN: <p>The four chloride ions are the <strong>ligands</strong>. Each one donates a lone pair to the copper ion, so each Cu–Cl bond is a <strong>coordination bond</strong>.</p><div class="worked__math"><i>x</i> + 4(−1) = −2</div><div class="worked__math"><i>x</i> = <b>+2</b></div><p>The oxidation state of copper is +2.</p>
      solution: "<p>염화 이온 4개가 <strong>리간드</strong>예요. 각 염화 이온은 비공유 전자쌍을 구리 이온에 내주므로, 각 Cu–Cl 결합은 <strong>배위 결합</strong>이에요.</p><div class=\"worked__math\"><i>x</i> + 4(−1) = −2</div><div class=\"worked__math\"><i>x</i> = <b>+2</b></div><p>구리의 산화수는 +2예요.</p>",
      misconception: {
        // EN (option D): The charge on the whole complex ion is 2−. That is not the oxidation state of copper. Four <span class="chem">Cl-</span> ligands give −4, so copper is +2.
        "3": "착이온 전체의 전하는 2−예요. 그것은 구리의 산화수가 아니에요. <span class=\"chem\">Cl-</span> 리간드 4개가 −4이므로 구리는 +2예요.",
        // EN (option E): The direction is reversed. Ligands donate lone pairs. The metal ion accepts them.
        "4": "방향이 거꾸로예요. 리간드가 비공유 전자쌍을 내주고, 금속 이온이 그것을 받아요.",
      },
    },

    // ── s3-1-q048 · mcq · foundation · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q048": {
      // EN: <p>An iron atom has the electron configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. What is the electron configuration of the <span class="chem">Fe^2+</span> ion?</p>
      stem: "<p>철 원자의 전자 배치는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>이에요. <span class=\"chem\">Fe^2+</span> 이온의 전자 배치는 무엇인가요?</p>",
      options: [
        // EN: <span class="mono nowrap">[Ar] 3d<sup>6</sup></span>
        "<span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>",
      ],
      hints: [
        // EN: A 2+ ion has lost two electrons.
        "2+ 이온은 전자 2개를 잃은 거예요.",
        // EN: Which sublevel loses electrons first: 4s or 3d?
        "어느 부껍질의 전자가 먼저 떨어져 나가나요: 4s인가요, 3d인가요?",
      ],
      // EN: <p>The 4s sublevel is filled before 3d, but in the ion the <strong>4s electrons are lost first</strong>. Remove the two 4s electrons:</p><div class="worked__math">Fe: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp;→&nbsp; <span class="chem">Fe^2+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>6</sup></span></b></div>
      solution: "<p>4s 부껍질은 3d보다 먼저 채워지지만, 이온이 될 때는 <strong>4s 전자가 먼저 떨어져 나가요</strong>. 4s 전자 2개를 빼세요:</p><div class=\"worked__math\">Fe: <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Fe^2+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span></b></div>",
      misconception: {
        // EN (option B): This removes two 3d electrons. When a first-row transition atom forms an ion, the 4s electrons are lost first.
        "1": "이것은 3d 전자 2개를 뺀 거예요. 첫째 줄 전이 원소의 원자가 이온이 될 때는 4s 전자가 먼저 떨어져 나가요.",
        // EN (option C): This removes one 4s and one 3d electron. Both 4s electrons are lost before any 3d electron.
        "2": "이것은 4s 전자 1개와 3d 전자 1개를 뺀 거예요. 3d 전자보다 먼저 4s 전자 2개가 모두 떨어져 나가요.",
        // EN (option D): This is the configuration of the atom. A 2+ ion has two fewer electrons.
        "3": "이것은 원자의 전자 배치예요. 2+ 이온은 전자가 2개 더 적어요.",
      },
    },

    // ── s3-1-q049 · mcq · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q049": {
      // EN: <p>What is the electron configuration of the <span class="chem">Cu^2+</span> ion?</p>
      stem: "<p><span class=\"chem\">Cu^2+</span> 이온의 전자 배치는 무엇인가요?</p>",
      options: [
        // EN: <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>8</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>8</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>
        "<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 3d<sup>9</sup></span>
        "<span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span>",
        // EN: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>
        "<span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>",
      ],
      hints: [
        // EN: Copper is one of the two exceptions in the first row. Its atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>.
        "구리는 첫째 줄의 두 예외 가운데 하나예요. 구리 원자는 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>이에요.",
        // EN: Remove the 4s electron first, then one 3d electron.
        "4s 전자를 먼저 빼고, 그다음 3d 전자 1개를 빼세요.",
      ],
      // EN: <p>The copper atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>. Remove two electrons: first the 4s electron, then one 3d electron.</p><div class="worked__math">Cu: <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class="chem">Cu+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class="chem">Cu^2+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>9</sup></span></b></div>
      solution: "<p>구리 원자는 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>이에요. 전자 2개를 빼요: 먼저 4s 전자, 그다음 3d 전자 1개예요.</p><div class=\"worked__math\">Cu: <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Cu+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Cu^2+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span></b></div>",
      misconception: {
        // EN (option A): This keeps the 4s electron and removes two 3d electrons. The 4s electron is lost first.
        "0": "이것은 4s 전자를 남기고 3d 전자 2개를 뺀 거예요. 4s 전자가 먼저 떨어져 나가요.",
        // EN (option B): This starts from <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span> and removes two 3d electrons. The copper atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>, and 4s is lost first.
        "1": "이것은 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>에서 시작해 3d 전자 2개를 뺀 거예요. 구리 원자는 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>이고, 4s 전자가 먼저 떨어져 나가요.",
        // EN (option D): This is <span class="chem">Cu+</span>, which has lost only the 4s electron. <span class="chem">Cu^2+</span> has lost one more.
        "3": "이것은 4s 전자만 잃은 <span class=\"chem\">Cu+</span>예요. <span class=\"chem\">Cu^2+</span>는 전자를 하나 더 잃었어요.",
      },
    },

    // ── s3-1-q050 · multi · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q050": {
      // EN: <p>Which ions have the electron configuration <span class="mono nowrap">[Ar] 3d<sup>5</sup></span>? Select all that apply.</p>
      stem: "<p>전자 배치가 <span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span>인 이온은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: <span class="chem">Cr^3+</span>
        "<span class=\"chem\">Cr^3+</span>",
        // EN: <span class="chem">Mn^2+</span>
        "<span class=\"chem\">Mn^2+</span>",
        // EN: <span class="chem">Fe^2+</span>
        "<span class=\"chem\">Fe^2+</span>",
        // EN: <span class="chem">Fe^3+</span>
        "<span class=\"chem\">Fe^3+</span>",
        // EN: <span class="chem">Co^2+</span>
        "<span class=\"chem\">Co^2+</span>",
      ],
      hints: [
        // EN: A quick check: number of electrons in the ion = atomic number − charge.
        "빠르게 확인하는 방법: 이온의 전자 수 = 원자 번호 − 전하.",
        // EN: <span class="mono nowrap">[Ar] 3d<sup>5</sup></span> has 18 + 5 = 23 electrons.
        "<span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span>의 전자는 18 + 5 = 23개예요.",
      ],
      // EN: <p><span class="mono nowrap">[Ar] 3d<sup>5</sup></span> has 23 electrons. Count the electrons in each ion (atomic number − charge):</p><div class="worked__math"><span class="chem">Cr^3+</span>: 24 − 3 = 21 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>3</sup></span></div><div class="worked__math"><span class="chem">Mn^2+</span>: 25 − 2 = 23 &nbsp; <b><span class="mono nowrap">[Ar] 3d<sup>5</sup></span></b></div><div class="worked__math"><span class="chem">Fe^2+</span>: 26 − 2 = 24 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>6</sup></span></div><div class="worked__math"><span class="chem">Fe^3+</span>: 26 − 3 = 23 &nbsp; <b><span class="mono nowrap">[Ar] 3d<sup>5</sup></span></b></div><div class="worked__math"><span class="chem">Co^2+</span>: 27 − 2 = 25 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>7</sup></span></div><p>In these ions all the 4s electrons have been lost, so every electron beyond the argon core is a 3d electron.</p>
      solution: "<p><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span>의 전자는 23개예요. 각 이온의 전자 수를 세어 보세요(원자 번호 − 전하):</p><div class=\"worked__math\"><span class=\"chem\">Cr^3+</span>: 24 − 3 = 21 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>3</sup></span></div><div class=\"worked__math\"><span class=\"chem\">Mn^2+</span>: 25 − 2 = 23 &nbsp; <b><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span></b></div><div class=\"worked__math\"><span class=\"chem\">Fe^2+</span>: 26 − 2 = 24 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span></div><div class=\"worked__math\"><span class=\"chem\">Fe^3+</span>: 26 − 3 = 23 &nbsp; <b><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span></b></div><div class=\"worked__math\"><span class=\"chem\">Co^2+</span>: 27 − 2 = 25 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>7</sup></span></div><p>이 이온들은 4s 전자를 모두 잃었으므로, 아르곤 핵심 바깥의 전자는 모두 3d 전자예요.</p>",
      misconception: {
        // EN (option A): Cr is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>. Removing three electrons (4s first) leaves <span class="mono nowrap">[Ar] 3d<sup>3</sup></span>.
        "0": "Cr은 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>이에요. 전자 3개를 빼면(4s 먼저) <span class=\"mono nowrap\">[Ar] 3d<sup>3</sup></span>이 남아요.",
        // EN (option C): Fe is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. Removing the two 4s electrons leaves <span class="mono nowrap">[Ar] 3d<sup>6</sup></span>.
        "2": "Fe는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>이에요. 4s 전자 2개를 빼면 <span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span>이 남아요.",
        // EN (option E): Co is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>. Removing the two 4s electrons leaves <span class="mono nowrap">[Ar] 3d<sup>7</sup></span>.
        "4": "Co는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>이에요. 4s 전자 2개를 빼면 <span class=\"mono nowrap\">[Ar] 3d<sup>7</sup></span>이 남아요.",
      },
    },

    // ── s3-1-q051 · numeric · challenge · AHL · Structure 3.1.9 · 2 marks
    "s3-1-q051": {
      // EN: <p>The compound <span class="chem">VOSO4</span> contains the sulfate ion, <span class="chem">SO4^2-</span>. Deduce the number of 3d electrons in the vanadium ion in this compound.</p>
      stem: "<p>화합물 <span class=\"chem\">VOSO4</span>에는 황산 이온 <span class=\"chem\">SO4^2-</span>이 들어 있어요. 이 화합물에서 바나듐 이온의 3d 전자 수를 추론하시오 (deduce).</p>",
      hints: [
        // EN: First find the oxidation state of vanadium. Sulfate is 2− and oxygen is −2.
        "먼저 바나듐의 산화수를 구하세요. 황산 이온은 2−이고 산소는 −2예요.",
        // EN: A vanadium atom is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>.
        "바나듐 원자는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>이에요.",
        // EN: Remove that number of electrons, 4s first.
        "그 수만큼 전자를 빼세요. 4s 전자부터 빼요.",
      ],
      // EN: <p><strong>Step 1: oxidation state.</strong> Let vanadium be <i>x</i>. Oxygen is −2 and sulfate is 2−.</p><div class="worked__math"><i>x</i> + (−2) + (−2) = 0</div><div class="worked__math"><i>x</i> = +4</div><p><strong>Step 2: configuration.</strong> V is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>. Remove four electrons: the two 4s electrons first, then two 3d electrons.</p><div class="worked__math">V<sup>4+</sup>: <span class="mono nowrap">[Ar] 3d<sup>1</sup></span></div><p>The ion has <strong>1</strong> 3d electron.</p>
      solution: "<p><strong>1단계: 산화수.</strong> 바나듐을 <i>x</i>라고 해요. 산소는 −2이고 황산 이온은 2−예요.</p><div class=\"worked__math\"><i>x</i> + (−2) + (−2) = 0</div><div class=\"worked__math\"><i>x</i> = +4</div><p><strong>2단계: 전자 배치.</strong> V는 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>이에요. 전자 4개를 빼요: 먼저 4s 전자 2개, 그다음 3d 전자 2개예요.</p><div class=\"worked__math\">V<sup>4+</sup>: <span class=\"mono nowrap\">[Ar] 3d<sup>1</sup></span></div><p>이 이온의 3d 전자는 <strong>1</strong>개예요.</p>",
      // EN: 3d electrons
      unit: "3d 전자",
    },

    // ── s3-1-q052 · mcq · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q052": {
      // EN: <p>Calcium has only the oxidation state +2 in its compounds. Vanadium has the oxidation states +2, +3, +4 and +5 in its compounds. The table shows successive ionization energies.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">Ca</th><td class="num">590</td><td class="num">1145</td><td class="num">4912</td><td class="num">6491</td><td class="num"></td><td class="num"></td></tr><tr><th scope="row">V</th><td class="num">651</td><td class="num">1414</td><td class="num">2830</td><td class="num">4507</td><td class="num">6299</td><td class="num">12 363</td></tr></tbody></table></div><p>Which statement explains the difference?</p>
      stem: "<p>칼슘은 화합물에서 산화수 +2만 가져요. 바나듐은 화합물에서 +2, +3, +4, +5의 산화수를 가져요. 표는 순차 이온화 에너지를 나타내요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>순차 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">제1</th><th class=\"num\" scope=\"col\">제2</th><th class=\"num\" scope=\"col\">제3</th><th class=\"num\" scope=\"col\">제4</th><th class=\"num\" scope=\"col\">제5</th><th class=\"num\" scope=\"col\">제6</th></tr></thead><tbody><tr><th scope=\"row\">Ca</th><td class=\"num\">590</td><td class=\"num\">1145</td><td class=\"num\">4912</td><td class=\"num\">6491</td><td class=\"num\"></td><td class=\"num\"></td></tr><tr><th scope=\"row\">V</th><td class=\"num\">651</td><td class=\"num\">1414</td><td class=\"num\">2830</td><td class=\"num\">4507</td><td class=\"num\">6299</td><td class=\"num\">12 363</td></tr></tbody></table></div><p>이 차이를 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: Every ionization energy of vanadium is lower than the same ionization energy of calcium.
        "바나듐의 이온화 에너지는 모두 칼슘의 같은 차수 이온화 에너지보다 작아요.",
        // EN: Vanadium has a greater nuclear charge, so it holds its electrons less strongly.
        "바나듐은 핵전하가 더 크므로 전자를 덜 세게 붙잡아요.",
        // EN: The first five ionization energies of vanadium are close in value. For calcium there is a very large increase after the second.
        "바나듐의 처음 5개 이온화 에너지는 값이 서로 가까워요. 칼슘은 둘째 값 다음에 매우 크게 증가해요.",
        // EN: A calcium atom has only two electrons that can be removed.
        "칼슘 원자에는 떼어 낼 수 있는 전자가 2개뿐이에요.",
      ],
      hints: [
        // EN: Find the increase from each value to the next.
        "각 값에서 다음 값까지 얼마나 증가하는지 구하세요.",
        // EN: Where is the first very large increase for Ca? Where is it for V?
        "Ca에서 처음으로 매우 크게 증가하는 곳은 어디인가요? V에서는 어디인가요?",
      ],
      // EN: <p>Look at the increase from each ionization energy to the next.</p><div class="worked__math">Ca: +555, then +3767</div><div class="worked__math">V: +763, +1416, +1677, +1792, then +6064</div><p>For calcium there is a very large increase after the second electron. The third electron comes from an inner energy level (3p), so calcium forms only <span class="chem">Ca^2+</span>.</p><p>For vanadium the first five values rise in small steps, because the 4s and 3d electrons are close in energy. The <strong>successive ionization energies are close in value</strong>, so vanadium can lose different numbers of electrons and shows variable oxidation states. The large increase comes only after the fifth electron.</p>
      solution: "<p>각 이온화 에너지에서 다음 이온화 에너지까지의 증가량을 보세요.</p><div class=\"worked__math\">Ca: +555, 그다음 +3767</div><div class=\"worked__math\">V: +763, +1416, +1677, +1792, 그다음 +6064</div><p>칼슘은 둘째 전자 다음에 매우 크게 증가해요. 셋째 전자는 안쪽 에너지 준위(3p)에서 나오므로 칼슘은 <span class=\"chem\">Ca^2+</span>만 만들어요.</p><p>바나듐은 처음 5개 값이 조금씩 커져요. 4s 전자와 3d 전자의 에너지가 서로 가깝기 때문이에요. <strong>순차 이온화 에너지의 값이 서로 가까우므로</strong>, 바나듐은 잃는 전자의 수가 달라질 수 있고 여러 가지 산화수를 보여요. 큰 증가는 다섯째 전자 다음에야 나타나요.</p>",
      misconception: {
        // EN (option A): Check the data: the 1st and 2nd values for vanadium (651, 1414) are higher than those for calcium (590, 1145).
        "0": "자료를 확인하세요: 바나듐의 제1, 제2 값(651, 1414)은 칼슘의 값(590, 1145)보다 커요.",
        // EN (option B): A greater nuclear charge attracts electrons <em>more</em> strongly, not less.
        "1": "핵전하가 크면 전자를 덜 세게가 아니라 <em>더</em> 세게 끌어당겨요.",
        // EN (option D): A calcium atom has 20 electrons, and the table gives a 3rd and a 4th ionization energy. The third electron can be removed, but it needs much more energy.
        "3": "칼슘 원자의 전자는 20개이고, 표에는 제3, 제4 이온화 에너지도 나와 있어요. 셋째 전자도 떼어 낼 수는 있지만 훨씬 더 많은 에너지가 필요해요.",
      },
    },

    // ── s3-1-q053 · numeric · challenge · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q053": {
      // EN: <p>The table shows the first six successive ionization energies of a first-row transition element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">659</td><td class="num">1310</td><td class="num">2653</td><td class="num">4175</td><td class="num">9581</td><td class="num">11 533</td></tr></tbody></table></div><p>Deduce the highest oxidation state that this element is likely to show in its compounds.</p><p>Type the sign first and then the number, for example +3.</p>
      stem: "<p>표는 첫째 줄 전이 원소 하나의 처음 6개 순차 이온화 에너지예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>순차 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">제1</th><th class=\"num\" scope=\"col\">제2</th><th class=\"num\" scope=\"col\">제3</th><th class=\"num\" scope=\"col\">제4</th><th class=\"num\" scope=\"col\">제5</th><th class=\"num\" scope=\"col\">제6</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">659</td><td class=\"num\">1310</td><td class=\"num\">2653</td><td class=\"num\">4175</td><td class=\"num\">9581</td><td class=\"num\">11 533</td></tr></tbody></table></div><p>이 원소가 화합물에서 보일 가능성이 있는 가장 높은 산화수를 추론하시오 (deduce).</p><p>부호를 먼저, 그다음 숫자를 입력하세요. 예: +3.</p>",
      hints: [
        // EN: Find the increase from each value to the next.
        "각 값에서 다음 값까지 얼마나 증가하는지 구하세요.",
        // EN: The 4s and 3d electrons are close in energy. The next electron comes from an inner level and needs much more energy.
        "4s 전자와 3d 전자는 에너지가 서로 가까워요. 그다음 전자는 안쪽 준위에서 나오므로 훨씬 더 많은 에너지가 필요해요.",
        // EN: Count the electrons removed before the very large increase.
        "매우 크게 증가하기 전까지 떼어 낸 전자의 수를 세어 보세요.",
      ],
      // EN: <p>Find the increase from each value to the next.</p><div class="worked__math">+651, +1343, +1522, then <b>+5406</b>, then +1952</div><p>The first four values rise in small steps. These four electrons are the 4s and 3d electrons, which are close in energy. The fifth electron needs much more energy, because it comes from the inner 3p sublevel.</p><p>The atom has four outer (4s and 3d) electrons, so the highest oxidation state is <strong>+4</strong>. The element is titanium, <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span>.</p>
      solution: "<p>각 값에서 다음 값까지의 증가량을 구해요.</p><div class=\"worked__math\">+651, +1343, +1522, 그다음 <b>+5406</b>, 그다음 +1952</div><p>처음 4개 값은 조금씩 커져요. 이 4개의 전자는 에너지가 서로 가까운 4s 전자와 3d 전자예요. 다섯째 전자는 안쪽의 3p 부껍질에서 나오므로 훨씬 더 많은 에너지가 필요해요.</p><p>이 원자는 바깥 전자(4s와 3d)가 4개이므로, 가장 높은 산화수는 <strong>+4</strong>예요. 이 원소는 타이타늄 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span>이에요.</p>",
      // EN: In an exam, write +4 with the sign first.
      correctNote: "시험에서는 부호를 먼저 써서 +4로 쓰세요.",
    },

    // ── s3-1-q054 · mcq · foundation · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q054": {
      // EN: <p>The diagram shows the colour wheel from the data booklet.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>A solution of a transition element complex absorbs orange light. What colour does the solution appear in white light?</p>
      stem: "<p>그림은 데이터 부클릿에 있는 색상환이에요.</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"데이터 부클릿의 색상환. 크기가 같은 6개 부채꼴로, 맨 위에서 시계 방향으로: 주황 585–647 나노미터, 노랑 575–585, 초록 491–575, 파랑 424–491, 보라 400–424, 빨강 647–700. 주황은 파랑의 맞은편, 노랑은 보라의 맞은편, 초록은 빨강의 맞은편에 있어요.\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">주황</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">노랑</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">초록</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">파랑</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">보라</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">빨강</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>어떤 전이 원소 착화합물의 용액이 주황색 빛을 흡수해요. 이 용액은 백색광 아래에서 무슨 색으로 보이나요?</p>",
      options: [
        // EN: Orange
        "주황색",
        // EN: Yellow
        "노란색",
        // EN: Blue
        "파란색",
        // EN: Red
        "빨간색",
      ],
      hints: [
        // EN: The colour you see is complementary to the colour absorbed.
        "눈에 보이는 색은 흡수된 색의 보색이에요.",
        // EN: On the wheel, complementary colours are directly opposite each other.
        "색상환에서 보색은 서로 정반대편에 있어요.",
      ],
      // EN: <p>The colour observed is <strong>complementary</strong> to the colour absorbed. Complementary colours are opposite each other on the colour wheel. Blue is opposite orange, so the solution appears <strong>blue</strong>.</p>
      solution: "<p>눈에 보이는 색은 흡수된 색의 <strong>보색</strong>이에요. 보색은 색상환에서 서로 맞은편에 있어요. 파랑은 주황의 맞은편에 있으므로 용액은 <strong>파란색</strong>으로 보여요.</p>",
      misconception: {
        // EN (option A): Orange is the colour that is absorbed, so it is removed from the light that reaches your eye. You see what is left.
        "0": "주황색은 흡수되는 색이므로, 눈에 들어오는 빛에서 빠져요. 눈에는 남은 빛의 색이 보여요.",
        // EN (option B): Yellow is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.
        "1": "노랑은 색상환에서 주황 바로 옆에 있어요. 보색은 옆이 아니라 정반대편, 즉 <em>맞은편</em>에 있어요.",
        // EN (option D): Red is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.
        "3": "빨강은 색상환에서 주황 바로 옆에 있어요. 보색은 옆이 아니라 정반대편, 즉 <em>맞은편</em>에 있어요.",
      },
    },

    // ── s3-1-q055 · short · exam · AHL · Structure 3.1.10 · 3 marks
    "s3-1-q055": {
      // EN: <p>A solution that contains the complex ion <span class="chem">[Cu(H2O)6]^2+</span> is blue. Explain why this complex ion is coloured.</p>
      stem: "<p>착이온 <span class=\"chem\">[Cu(H2O)6]^2+</span>이 들어 있는 용액은 파란색이에요. 이 착이온이 색을 띠는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Start with the d electrons of <span class="chem">Cu^2+</span>.
        "<span class=\"chem\">Cu^2+</span>의 d 전자부터 생각해 보세요.",
        // EN: What do the ligands do to the d orbitals? What happens to an electron when light arrives?
        "리간드는 d 오비탈에 어떤 영향을 주나요? 빛이 들어오면 전자에는 무슨 일이 일어나나요?",
        // EN: Finish with the link between the colour absorbed and the colour seen.
        "마지막으로 흡수된 색과 보이는 색의 관계를 쓰세요.",
      ],
      // EN: <p>The <span class="chem">Cu^2+</span> ion has a partially filled d sublevel (<span class="mono nowrap">[Ar] 3d<sup>9</sup></span>). The ligands (water molecules) cause the d orbitals to split into two sets with different energies. An electron absorbs light and is promoted from a lower-energy d orbital to a higher-energy d orbital. The energy gap corresponds to light in the visible region. The colour observed (blue) is complementary to the colour absorbed (orange).</p><p>Do not write that the complex <em>emits</em> blue light. The colour comes from absorption.</p>
      answer: "<p><span class=\"chem\">Cu^2+</span> 이온은 부분적으로 채워진 d 부껍질(<span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span>)을 가져요. 리간드(물 분자) 때문에 d 오비탈이 에너지가 서로 다른 두 무리로 갈라져요. 전자가 빛을 흡수해 에너지가 낮은 d 오비탈에서 에너지가 높은 d 오비탈로 올라가요. 이 에너지 차이는 가시광선 영역의 빛에 해당해요. 보이는 색(파랑)은 흡수된 색(주황)의 보색이에요.</p><p>착이온이 파란색 빛을 <em>방출한다</em>고 쓰지 마세요. 색은 흡수 때문에 생겨요.</p>",
      markscheme: [
        // EN: The ion has partially filled d orbitals / an incomplete d sublevel.
        "이온이 부분적으로 채워진 d 오비탈 / 다 채워지지 않은 d 부껍질을 가진다.",
        // EN: The ligands cause the d orbitals to split (into two sets of different energy).
        "리간드 때문에 d 오비탈이 (에너지가 다른 두 무리로) 갈라진다.",
        // EN: Light is absorbed as electrons are promoted / move to higher-energy d orbitals.
        "전자가 에너지가 더 높은 d 오비탈로 올라갈 / 이동할 때 빛이 흡수된다.",
        // EN: The energy gap corresponds to (the frequency of) visible light.
        "에너지 차이는 가시광선(의 진동수)에 해당한다.",
        // EN: The colour observed is complementary to the colour absorbed (only if absorption of light is mentioned).
        "보이는 색은 흡수된 색의 보색이다(빛의 흡수를 언급한 경우에만).",
      ],
    },

    // ── s3-1-q056 · mcq · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q056": {
      // EN: <p>A solution that contains a transition element complex ion appears green in white light. Which statement explains this?</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p>
      stem: "<p>전이 원소 착이온이 들어 있는 용액이 백색광 아래에서 초록색으로 보여요. 그 이유를 설명하는 것은 어느 것인가요?</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"데이터 부클릿의 색상환. 크기가 같은 6개 부채꼴로, 맨 위에서 시계 방향으로: 주황 585–647 나노미터, 노랑 575–585, 초록 491–575, 파랑 424–491, 보라 400–424, 빨강 647–700. 주황은 파랑의 맞은편, 노랑은 보라의 맞은편, 초록은 빨강의 맞은편에 있어요.\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">주황</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">노랑</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">초록</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">파랑</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">보라</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">빨강</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p>",
      options: [
        // EN: Electrons fall from higher-energy d orbitals to lower-energy d orbitals and emit green light.
        "전자가 에너지가 높은 d 오비탈에서 에너지가 낮은 d 오비탈로 떨어지면서 초록색 빛을 방출해요.",
        // EN: The complex absorbs green light when electrons are promoted between the split d orbitals.
        "전자가 갈라진 d 오비탈 사이에서 올라갈 때 착이온이 초록색 빛을 흡수해요.",
        // EN: The complex absorbs red light when electrons are promoted between the split d orbitals. The light that is left appears green.
        "전자가 갈라진 d 오비탈 사이에서 올라갈 때 착이온이 빨간색 빛을 흡수해요. 남은 빛이 초록색으로 보여요.",
        // EN: The complex absorbs all colours of visible light except red.
        "착이온이 빨간색을 뺀 모든 색의 가시광선을 흡수해요.",
      ],
      hints: [
        // EN: Is the colour caused by light being absorbed or by light being emitted?
        "색은 빛이 흡수되어서 생기나요, 방출되어서 생기나요?",
        // EN: Find the colour opposite green on the wheel.
        "색상환에서 초록의 맞은편에 있는 색을 찾으세요.",
      ],
      // EN: <p>White light passes through the solution. The complex <strong>absorbs</strong> light of one colour, and the energy promotes an electron from a lower-energy d orbital to a higher-energy d orbital. The colour seen is the complementary colour. Red is opposite green on the wheel, so the complex absorbs <strong>red</strong> light and appears green.</p>
      solution: "<p>백색광이 용액을 통과해요. 착이온은 한 가지 색의 빛을 <strong>흡수하고</strong>, 그 에너지로 전자가 에너지가 낮은 d 오비탈에서 에너지가 높은 d 오비탈로 올라가요. 눈에 보이는 색은 그 보색이에요. 색상환에서 빨강은 초록의 맞은편에 있으므로, 착이온은 <strong>빨간색</strong> 빛을 흡수하고 초록색으로 보여요.</p>",
      misconception: {
        // EN (option A): This describes emission. The colour of a complex comes from <em>absorption</em> of part of the white light, not from light given out.
        "0": "이것은 방출을 설명한 거예요. 착이온의 색은 빛을 내보내서가 아니라 백색광의 일부를 <em>흡수</em>해서 생겨요.",
        // EN (option B): If green light were absorbed, it would be missing from the light that reaches your eye. The solution would appear red.
        "1": "초록색 빛이 흡수된다면, 눈에 들어오는 빛에서 초록색이 빠질 거예요. 그러면 용액은 빨간색으로 보일 거예요.",
        // EN (option D): If only red light passed through, the solution would appear red, not green.
        "3": "빨간색 빛만 통과한다면 용액은 초록색이 아니라 빨간색으로 보일 거예요.",
      },
    },

    // ── s3-1-q057 · numeric · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q057": {
      // EN: <p>A complex ion absorbs light most strongly at a wavelength of 510 nm. Calculate the frequency of this light, in Hz.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>어떤 착이온은 파장 510 nm에서 빛을 가장 강하게 흡수해요. 이 빛의 진동수를 Hz 단위로 계산하시오 (calculate).</p><p><i>c</i> = <i>λf</i>와 <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>을 이용하세요.</p>",
      hints: [
        // EN: Convert the wavelength to metres first: 1 nm = 10<sup>−9</sup> m.
        "먼저 파장을 미터로 바꾸세요: 1 nm = 10<sup>−9</sup> m.",
        // EN: Rearrange <i>c</i> = <i>λf</i> to <i>f</i> = <i>c</i> / <i>λ</i>.
        "<i>c</i> = <i>λf</i>를 <i>f</i> = <i>c</i> / <i>λ</i>로 바꾸세요.",
      ],
      // EN: <div class="worked__math"><i>λ</i> = 510 nm = 510 × 10<sup>−9</sup> m = 5.10 × 10<sup>−7</sup> m</div><div class="worked__math"><i>f</i> = <i>c</i> / <i>λ</i></div><div class="worked__math">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (5.10 × 10<sup>−7</sup> m)</div><div class="worked__math">= <b>5.88 × 10<sup>14</sup> Hz</b> &nbsp; (3 s.f.)</div><p>On the colour wheel, 510 nm is green light (491–575 nm). The complex absorbs green, so it appears red.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = 510 nm = 510 × 10<sup>−9</sup> m = 5.10 × 10<sup>−7</sup> m</div><div class=\"worked__math\"><i>f</i> = <i>c</i> / <i>λ</i></div><div class=\"worked__math\">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (5.10 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">= <b>5.88 × 10<sup>14</sup> Hz</b> &nbsp; (유효 숫자 3자리)</div><p>색상환에서 510 nm는 초록색 빛(491–575 nm)이에요. 착이온이 초록색을 흡수하므로 빨간색으로 보여요.</p>",
    },

    // ── s3-1-q058 · numeric · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q058": {
      // EN: <p>A complex ion absorbs light of frequency 6.38 × 10<sup>14</sup> Hz. Calculate the wavelength of this light, in nm.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>어떤 착이온이 진동수 6.38 × 10<sup>14</sup> Hz인 빛을 흡수해요. 이 빛의 파장을 nm 단위로 계산하시오 (calculate).</p><p><i>c</i> = <i>λf</i>와 <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>을 이용하세요.</p>",
      hints: [
        // EN: Rearrange <i>c</i> = <i>λf</i> to <i>λ</i> = <i>c</i> / <i>f</i>. The answer is in metres.
        "<i>c</i> = <i>λf</i>를 <i>λ</i> = <i>c</i> / <i>f</i>로 바꾸세요. 답의 단위는 미터예요.",
        // EN: Convert metres to nanometres: multiply by 10<sup>9</sup>.
        "미터를 나노미터로 바꾸세요: 10<sup>9</sup>을 곱해요.",
      ],
      // EN: <div class="worked__math"><i>λ</i> = <i>c</i> / <i>f</i></div><div class="worked__math">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (6.38 × 10<sup>14</sup> s<sup>−1</sup>)</div><div class="worked__math">= 4.702… × 10<sup>−7</sup> m</div><div class="worked__math">= <b>470 nm</b> &nbsp; (3 s.f.)</div><p>On the colour wheel, 470 nm is blue light (424–491 nm). The complex absorbs blue, so it appears orange.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = <i>c</i> / <i>f</i></div><div class=\"worked__math\">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (6.38 × 10<sup>14</sup> s<sup>−1</sup>)</div><div class=\"worked__math\">= 4.702… × 10<sup>−7</sup> m</div><div class=\"worked__math\">= <b>470 nm</b> &nbsp; (유효 숫자 3자리)</div><p>색상환에서 470 nm는 파란색 빛(424–491 nm)이에요. 착이온이 파란색을 흡수하므로 주황색으로 보여요.</p>",
    },

    // ── s3-1-q059 · mcq · challenge · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q059": {
      // EN: <p>A complex ion absorbs light of frequency 7.25 × 10<sup>14</sup> Hz. Use <i>c</i> = <i>λf</i> and the colour wheel.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>Which row is correct?</p>
      stem: "<p>어떤 착이온이 진동수 7.25 × 10<sup>14</sup> Hz인 빛을 흡수해요. <i>c</i> = <i>λf</i>와 색상환을 이용하세요.</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"데이터 부클릿의 색상환. 크기가 같은 6개 부채꼴로, 맨 위에서 시계 방향으로: 주황 585–647 나노미터, 노랑 575–585, 초록 491–575, 파랑 424–491, 보라 400–424, 빨강 647–700. 주황은 파랑의 맞은편, 노랑은 보라의 맞은편, 초록은 빨강의 맞은편에 있어요.\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">주황</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">노랑</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">초록</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">파랑</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">보라</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">빨강</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: yellow. Colour observed: violet.
        "흡수된 파장: 414 nm. 흡수된 색: 노랑. 보이는 색: 보라.",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: violet.
        "흡수된 파장: 414 nm. 흡수된 색: 보라. 보이는 색: 보라.",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: blue.
        "흡수된 파장: 414 nm. 흡수된 색: 보라. 보이는 색: 파랑.",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: yellow.
        "흡수된 파장: 414 nm. 흡수된 색: 보라. 보이는 색: 노랑.",
      ],
      hints: [
        // EN: <i>λ</i> = <i>c</i> / <i>f</i>. Convert the answer from m to nm.
        "<i>λ</i> = <i>c</i> / <i>f</i>. 답을 m에서 nm로 바꾸세요.",
        // EN: Find the band on the wheel that contains this wavelength. That is the colour absorbed.
        "색상환에서 이 파장이 들어 있는 구간을 찾으세요. 그것이 흡수된 색이에요.",
        // EN: The colour observed is opposite on the wheel.
        "보이는 색은 색상환에서 맞은편에 있어요.",
      ],
      // EN: <div class="worked__math"><i>λ</i> = <i>c</i> / <i>f</i> = (3.00 × 10<sup>8</sup>) ÷ (7.25 × 10<sup>14</sup>)</div><div class="worked__math">= 4.14 × 10<sup>−7</sup> m = <b>414 nm</b></div><p>414 nm lies between 400 nm and 424 nm, so the light absorbed is <strong>violet</strong>. Yellow is opposite violet on the wheel, so the complex appears <strong>yellow</strong>.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = <i>c</i> / <i>f</i> = (3.00 × 10<sup>8</sup>) ÷ (7.25 × 10<sup>14</sup>)</div><div class=\"worked__math\">= 4.14 × 10<sup>−7</sup> m = <b>414 nm</b></div><p>414 nm는 400 nm와 424 nm 사이에 있으므로, 흡수된 빛은 <strong>보라색</strong>이에요. 색상환에서 노랑은 보라의 맞은편에 있으므로 착이온은 <strong>노란색</strong>으로 보여요.</p>",
      misconception: {
        // EN (option A): The two colours are swapped. The wavelength you calculate is the light <em>absorbed</em>: 414 nm is in the violet band (400–424 nm).
        "0": "두 색이 서로 바뀌었어요. 계산한 파장은 <em>흡수된</em> 빛의 파장이에요: 414 nm는 보라색 구간(400–424 nm)에 있어요.",
        // EN (option B): The complex does not give out the light it absorbs. Violet is removed from the white light, so you see the complementary colour.
        "1": "착이온은 흡수한 빛을 다시 내보내지 않아요. 백색광에서 보라색이 빠지므로 그 보색이 보여요.",
        // EN (option C): Blue is next to violet on the wheel. The complementary colour is directly opposite.
        "2": "색상환에서 파랑은 보라 바로 옆에 있어요. 보색은 정반대편에 있어요.",
      },
    },

    // ── s3-1-q060 · mcq · challenge · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q060": {
      // EN: <p>Which compound is expected to be coloured?</p>
      stem: "<p>색깔을 띨 것으로 예상되는 화합물은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">CuCl</span>
        "<span class=\"chem\">CuCl</span>",
        // EN: <span class="chem">ScCl3</span>
        "<span class=\"chem\">ScCl3</span>",
        // EN: <span class="chem">ZnSO4</span>
        "<span class=\"chem\">ZnSO4</span>",
        // EN: <span class="chem">TiCl3</span>
        "<span class=\"chem\">TiCl3</span>",
      ],
      hints: [
        // EN: Find the charge on the metal ion in each compound.
        "각 화합물에서 금속 이온의 전하를 구하세요.",
        // EN: Write the electron configuration of each ion (4s lost first).
        "각 이온의 전자 배치를 쓰세요(4s 전자가 먼저 떨어져 나가요).",
        // EN: Colour needs a partially filled d sublevel: at least one d electron, and at least one space.
        "색을 띠려면 부분적으로 채워진 d 부껍질이 필요해요: d 전자가 적어도 1개 있고, 빈자리도 적어도 1개 있어야 해요.",
      ],
      // EN: <p>Colour needs an electron that can be promoted from one d orbital to another. So the ion must have a <strong>partially filled d sublevel</strong>.</p><div class="worked__math"><span class="chem">Cu+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp; full: not coloured</div><div class="worked__math"><span class="chem">Sc^3+</span>: <span class="mono nowrap">[Ar]</span> &nbsp; empty: not coloured</div><div class="worked__math"><span class="chem">Zn^2+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp; full: not coloured</div><div class="worked__math"><span class="chem">Ti^3+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>1</sup></span></b> &nbsp; partially filled: coloured</div>
      solution: "<p>색을 띠려면 한 d 오비탈에서 다른 d 오비탈로 올라갈 수 있는 전자가 있어야 해요. 그래서 이온은 <strong>부분적으로 채워진 d 부껍질</strong>을 가져야 해요.</p><div class=\"worked__math\"><span class=\"chem\">Cu+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp; 꽉 참: 색 없음</div><div class=\"worked__math\"><span class=\"chem\">Sc^3+</span>: <span class=\"mono nowrap\">[Ar]</span> &nbsp; 비어 있음: 색 없음</div><div class=\"worked__math\"><span class=\"chem\">Zn^2+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp; 꽉 참: 색 없음</div><div class=\"worked__math\"><span class=\"chem\">Ti^3+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>1</sup></span></b> &nbsp; 부분적으로 채워짐: 색 있음</div>",
      misconception: {
        // EN (option A): CuCl contains <span class="chem">Cu+</span>, which is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The d sublevel is full, so no electron can be promoted between d orbitals.
        "0": "CuCl에는 <span class=\"chem\">Cu+</span>이 들어 있고, 그 배치는 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>이에요. d 부껍질이 꽉 차 있으므로 d 오비탈 사이에서 올라갈 수 있는 전자가 없어요.",
        // EN (option B): <span class="chem">ScCl3</span> contains <span class="chem">Sc^3+</span>, which is <span class="mono nowrap">[Ar]</span>. There are no d electrons to promote.
        "1": "<span class=\"chem\">ScCl3</span>에는 <span class=\"chem\">Sc^3+</span>이 들어 있고, 그 배치는 <span class=\"mono nowrap\">[Ar]</span>이에요. 올라갈 d 전자가 없어요.",
        // EN (option C): <span class="chem">ZnSO4</span> contains <span class="chem">Zn^2+</span>, which is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The d sublevel is full, so no electron can be promoted between d orbitals.
        "2": "<span class=\"chem\">ZnSO4</span>에는 <span class=\"chem\">Zn^2+</span>이 들어 있고, 그 배치는 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>이에요. d 부껍질이 꽉 차 있으므로 d 오비탈 사이에서 올라갈 수 있는 전자가 없어요.",
      },
    },

    // ── s3-1-q061 · numeric · challenge · AHL · Structure 3.1.10 · 2 marks
    "s3-1-q061": {
      // EN: <p>A solution of a complex ion appears yellow in white light. Use the colour wheel to find the range of wavelengths that the complex absorbs.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>Calculate the <strong>lowest</strong> frequency of light in this range, in Hz. Use <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>어떤 착이온의 용액이 백색광 아래에서 노란색으로 보여요. 색상환을 이용해 이 착이온이 흡수하는 파장의 범위를 찾으세요.</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"데이터 부클릿의 색상환. 크기가 같은 6개 부채꼴로, 맨 위에서 시계 방향으로: 주황 585–647 나노미터, 노랑 575–585, 초록 491–575, 파랑 424–491, 보라 400–424, 빨강 647–700. 주황은 파랑의 맞은편, 노랑은 보라의 맞은편, 초록은 빨강의 맞은편에 있어요.\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">주황</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">노랑</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">초록</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">파랑</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">보라</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">빨강</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>이 범위에서 <strong>가장 낮은</strong> 빛의 진동수를 Hz 단위로 계산하시오 (calculate). <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>을 이용하세요.</p>",
      hints: [
        // EN: The colour absorbed is opposite yellow on the wheel. Read its two boundary wavelengths.
        "흡수된 색은 색상환에서 노랑의 맞은편에 있어요. 그 색 구간의 양 끝 파장을 읽으세요.",
        // EN: <i>f</i> = <i>c</i> / <i>λ</i>. Does the lowest frequency go with the longest or the shortest wavelength?
        "<i>f</i> = <i>c</i> / <i>λ</i>. 가장 낮은 진동수는 가장 긴 파장과 짝을 이루나요, 가장 짧은 파장과 짝을 이루나요?",
        // EN: Convert nm to m before you divide.
        "나누기 전에 nm를 m로 바꾸세요.",
      ],
      // EN: <p>Violet is opposite yellow, so the complex absorbs violet light: 400 nm to 424 nm.</p><p>Frequency and wavelength are inversely proportional (<i>f</i> = <i>c</i> / <i>λ</i>). The <strong>lowest</strong> frequency goes with the <strong>longest</strong> wavelength, 424 nm.</p><div class="worked__math"><i>λ</i> = 424 nm = 4.24 × 10<sup>−7</sup> m</div><div class="worked__math"><i>f</i> = (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (4.24 × 10<sup>−7</sup> m)</div><div class="worked__math">= <b>7.08 × 10<sup>14</sup> Hz</b> &nbsp; (3 s.f.)</div><p>(Using 400 nm gives 7.50 × 10<sup>14</sup> Hz. That is the highest frequency in the range.)</p>
      solution: "<p>보라는 노랑의 맞은편에 있으므로, 착이온은 보라색 빛(400 nm에서 424 nm까지)을 흡수해요.</p><p>진동수와 파장은 반비례해요(<i>f</i> = <i>c</i> / <i>λ</i>). <strong>가장 낮은</strong> 진동수는 <strong>가장 긴</strong> 파장인 424 nm와 짝을 이뤄요.</p><div class=\"worked__math\"><i>λ</i> = 424 nm = 4.24 × 10<sup>−7</sup> m</div><div class=\"worked__math\"><i>f</i> = (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (4.24 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">= <b>7.08 × 10<sup>14</sup> Hz</b> &nbsp; (유효 숫자 3자리)</div><p>(400 nm를 쓰면 7.50 × 10<sup>14</sup> Hz가 나와요. 그것은 이 범위에서 가장 높은 진동수예요.)</p>",
    },

    // ── s3-1-q062 · mcq · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q062": {
      // EN: <p>Carbon dioxide dissolves in water and reacts with it. Which equation shows this reaction?</p>
      stem: "<p>이산화 탄소는 물에 녹아 물과 반응해요. 이 반응을 나타내는 반응식은 어느 것인가요?</p>",
      options: [
        // EN: <span class="chem">CO2(g) + 2H2O(l) -> C(OH)4(aq)</span>
        "<span class=\"chem\">CO2(g) + 2H2O(l) -> C(OH)4(aq)</span>",
        // EN: <span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span>
        "<span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span>",
        // EN: <span class="chem">CO2(g) + H2O(l) <=> H2CO4(aq)</span>
        "<span class=\"chem\">CO2(g) + H2O(l) <=> H2CO4(aq)</span>",
        // EN: <span class="chem">CO2(g) + H2O(l) -> CO(g) + H2O2(aq)</span>
        "<span class=\"chem\">CO2(g) + H2O(l) -> CO(g) + H2O2(aq)</span>",
      ],
      hints: [
        // EN: Carbon is a non-metal. Is its oxide basic or acidic?
        "탄소는 비금속이에요. 탄소의 산화물은 염기성인가요, 산성인가요?",
        // EN: Non-metal oxide + water → acid. Add the atoms of <span class="chem">CO2</span> and <span class="chem">H2O</span> together.
        "비금속 산화물 + 물 → 산. <span class=\"chem\">CO2</span>와 <span class=\"chem\">H2O</span>의 원자를 모두 더하세요.",
      ],
      // EN: <p>Carbon dioxide is an acidic non-metal oxide. It reacts with water to form carbonic acid:</p><div class="worked__math"><span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>Check: C 1 = 1; O 2 + 1 = 3; H 2 = 2. The reaction is reversible. The solution is weakly acidic. This reaction is the cause of ocean acidification.</p>
      solution: "<p>이산화 탄소는 산성인 비금속 산화물이에요. 물과 반응해 탄산을 만들어요:</p><div class=\"worked__math\"><span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>확인: C 1 = 1; O 2 + 1 = 3; H 2 = 2. 이 반응은 가역 반응이에요. 용액은 약한 산성이에요. 이 반응이 해양 산성화의 원인이에요.</p>",
      misconception: {
        // EN (option A): Hydroxides form when the oxide of a group 1 or group 2 metal reacts with water. Carbon is a non-metal, so its oxide is acidic and forms an acid.
        "0": "수산화물은 1족이나 2족 금속의 산화물이 물과 반응할 때 생겨요. 탄소는 비금속이므로 그 산화물은 산성이고 산을 만들어요.",
        // EN (option C): This equation is not balanced: there are 3 oxygen atoms on the left and 4 on the right. Add the atoms of the oxide and the water to get the formula of the acid.
        "2": "이 반응식은 균형이 맞지 않아요: 산소 원자가 왼쪽에 3개, 오른쪽에 4개예요. 산화물과 물의 원자를 더해서 산의 화학식을 구하세요.",
        // EN (option D): Carbon dioxide does not take oxygen from water or give oxygen to it. A non-metal oxide and water combine to form one product, an acid.
        "3": "이산화 탄소는 물에서 산소를 빼앗거나 물에 산소를 주지 않아요. 비금속 산화물과 물이 결합해 생성물 한 가지, 즉 산을 만들어요.",
      },
    },

  }
});
