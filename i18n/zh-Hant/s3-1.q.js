/* s3-1.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's3-1.q', {
  questions: {

    // ── s3-1-q001 · mcq · foundation · SL · Structure 3.1.1 · 1 mark
    "s3-1-q001": {
      // EN: <p>Which element is a metalloid?</p>
      stem: "<p>以下哪一種元素是類金屬 (metalloid)？</p>",
      options: [
        // EN: Aluminium, Al
        "鋁 Al",
        // EN: Phosphorus, P
        "磷 P",
        // EN: Silicon, Si
        "矽 Si",
        // EN: Sulfur, S
        "硫 S",
      ],
      hints: [
        // EN: Find the four elements in period 3 of your periodic table.
        "在週期表的第 3 週期找出這四種元素。",
        // EN: Metalloids lie on the diagonal boundary between the metals (left) and the non-metals (right).
        "類金屬位於金屬（左邊）和非金屬（右邊）之間的斜向分界線上。",
      ],
      // EN: <p>Metals are on the left and in the centre of the periodic table. Non-metals are on the upper right. The metalloids lie on the diagonal boundary between them. They include B, Si, Ge, As, Sb and Te. <strong>Silicon</strong> is a metalloid. Its properties are between those of a metal and a non-metal.</p>
      solution: "<p>金屬在週期表的左邊和中間。非金屬在右上方。類金屬位於兩者之間的斜向分界線上，包括 B、Si、Ge、As、Sb 和 Te。<strong>矽</strong>是類金屬。它的性質介乎金屬和非金屬之間。</p>",
      misconception: {
        // EN (option A): Aluminium sits next to the metalloids, but it is a metal. It is shiny, it conducts electricity well and it forms <span class="chem">Al^3+</span> ions.
        "0": "鋁緊貼類金屬，但它是金屬。鋁有光澤，導電性良好，並形成 <span class=\"chem\">Al^3+</span> 離子。",
        // EN (option B): Phosphorus is a non-metal. It does not conduct electricity and its oxide is acidic.
        "1": "磷是非金屬。它不導電，氧化物是酸性的。",
        // EN (option D): Sulfur is a non-metal. It is a brittle yellow solid that does not conduct electricity.
        "3": "硫是非金屬。它是黃色的脆固體，不導電。",
      },
    },

    // ── s3-1-q002 · mcq · foundation · SL · Structure 3.1.1 · 1 mark
    "s3-1-q002": {
      // EN: <p>The diagram shows an outline of the periodic table divided into four regions, A, B, C and D.</p><p><svg viewBox="0 0 294 161.5" width="294" height="161.5" style="max-width:100%;height:auto" role="img" aria-label="Outline of the periodic table divided into four regions. Region A is the two columns on the left, groups 1 and 2. Region B is the wide middle part, groups 3 to 12. Region C is the six columns on the right, groups 13 to 18. Region D is the two long rows drawn below the main table."><polygon points="12,10 27,10 27,25 42,25 42,115 12,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="27" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">A</text><polygon points="42,55 192,55 192,115 42,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="117" y="91" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">B</text><polygon points="192,25 267,25 267,10 282,10 282,115 192,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="237" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">C</text><polygon points="57,125.5 267,125.5 267,155.5 57,155.5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="162" y="146.5" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">D</text><text x="19.5" y="8" text-anchor="middle" font-size="10" fill="currentColor">1</text><text x="274.5" y="8" text-anchor="middle" font-size="10" fill="currentColor">18</text></svg></p><p>Which region is the d-block?</p>
      stem: "<p>下圖是週期表的輪廓，分成 A、B、C、D 四個區域。</p><p><svg viewBox=\"0 0 294 161.5\" width=\"294\" height=\"161.5\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"週期表的輪廓，分成四個區域。區域 A 是左邊的兩列，即第 1 和第 2 族。區域 B 是中間較闊的部分，即第 3 至 12 族。區域 C 是右邊的六列，即第 13 至 18 族。區域 D 是畫在主表下方的兩個長橫行。\"><polygon points=\"12,10 27,10 27,25 42,25 42,115 12,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"27\" y=\"76\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">A</text><polygon points=\"42,55 192,55 192,115 42,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"117\" y=\"91\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">B</text><polygon points=\"192,25 267,25 267,10 282,10 282,115 192,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"237\" y=\"76\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">C</text><polygon points=\"57,125.5 267,125.5 267,155.5 57,155.5\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"162\" y=\"146.5\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">D</text><text x=\"19.5\" y=\"8\" text-anchor=\"middle\" font-size=\"10\" fill=\"currentColor\">1</text><text x=\"274.5\" y=\"8\" text-anchor=\"middle\" font-size=\"10\" fill=\"currentColor\">18</text></svg></p><p>哪一個區域是 d 區 (d-block)？</p>",
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
        "d 亞層最多容納 10 個電子。哪一個區域闊 10 列？",
        // EN: An s sublevel holds 2 electrons, a p sublevel 6 and an f sublevel 14.
        "s 亞層容納 2 個電子，p 亞層容納 6 個，f 亞層容納 14 個。",
      ],
      // EN: <p>The width of each block matches the number of electrons its sublevel can hold. The s-block is 2 columns wide (A). The d-block is 10 columns wide: groups 3 to 12 (<strong>B</strong>). The p-block is 6 columns wide (C). The f-block is 14 columns wide (D).</p><p>One exception: helium is drawn at the top of group 18, but its configuration is <span class="mono nowrap">1s<sup>2</sup></span>.</p>
      solution: "<p>每個區的闊度，等於它的亞層可容納的電子數目。s 區闊 2 列 (A)。d 區闊 10 列：第 3 至 12 族 (<strong>B</strong>)。p 區闊 6 列 (C)。f 區闊 14 列 (D)。</p><p>有一個例外：氦畫在第 18 族的頂部，但它的電子排佈是 <span class=\"mono nowrap\">1s<sup>2</sup></span>。</p>",
      misconception: {
        // EN (option A): Region A is groups 1 and 2. In these elements the outer electrons are in an s sublevel, so this is the s-block.
        "0": "區域 A 是第 1 和第 2 族。這些元素的最外層電子在 s 亞層，所以這是 s 區。",
        // EN (option C): Region C is groups 13 to 18. In these elements a p sublevel is being filled, so this is the p-block.
        "2": "區域 C 是第 13 至 18 族。這些元素正在填充 p 亞層，所以這是 p 區。",
        // EN (option D): Region D is the two rows drawn below the main table. In these elements an f sublevel is being filled, so this is the f-block.
        "3": "區域 D 是畫在主表下方的兩個橫行。這些元素正在填充 f 亞層，所以這是 f 區。",
      },
    },

    // ── s3-1-q003 · multi · exam · SL · Structure 3.1.1 · 1 mark
    "s3-1-q003": {
      // EN: <p>Tin, Sn, has atomic number 50. Use the periodic table in the data booklet. Which statements about tin are correct? Select all that apply.</p>
      stem: "<p>錫 (tin) Sn 的原子序是 50。使用數據手冊中的週期表。以下哪些關於錫的敘述正確？選出所有正確選項。</p>",
      options: [
        // EN: Tin is in the p-block.
        "錫在 p 區。",
        // EN: Tin is a transition element.
        "錫是過渡元素。",
        // EN: Tin is a metal.
        "錫是金屬。",
        // EN: Tin is in group 4.
        "錫在第 4 族。",
        // EN: Tin is in period 5.
        "錫在第 5 週期。",
      ],
      hints: [
        // EN: Find Sn in the data booklet. Read its row (period) and its column (group).
        "在數據手冊中找出 Sn。看看它在哪一橫行（週期）和哪一直列（族）。",
        // EN: Groups 13 to 18 are the p-block. The lower part of the p-block contains metals.
        "第 13 至 18 族是 p 區。p 區的下半部分有金屬。",
      ],
      // EN: <p>Tin is in period 5 and group 14. Groups 13 to 18 form the <strong>p-block</strong>. Tin lies below and to the left of the metalloid boundary, so it is a <strong>metal</strong>. It is not a transition element, because it is not in the d-block.</p>
      solution: "<p>錫在第 5 週期、第 14 族。第 13 至 18 族組成 <strong>p 區</strong>。錫在類金屬分界線的左下方，所以是<strong>金屬</strong>。錫不在 d 區，所以不是過渡元素。</p>",
      misconception: {
        // EN (option B): The transition elements are in the d-block. Tin is in group 14, which is in the p-block. Not every metal is a transition element.
        "1": "過渡元素在 d 區。錫在第 14 族，屬於 p 區。不是每種金屬都是過渡元素。",
        // EN (option D): Groups are numbered from 1 to 18. Tin has four valence electrons, but it is in group 14. Group 4 starts with titanium.
        "3": "族的編號是 1 至 18。錫有四個價電子，但它在第 14 族。第 4 族由鈦開始。",
      },
    },

    // ── s3-1-q004 · mcq · exam · SL · Structure 3.1.1 · 1 mark
    "s3-1-q004": {
      // EN: <p>Use the periodic table in the data booklet. Which row gives the correct block and type for the element?</p>
      stem: "<p>使用數據手冊中的週期表。哪一項所列的區和元素類別都正確？</p>",
      options: [
        // EN: Zinc, Zn: s-block, metal
        "鋅 Zn：s 區，金屬",
        // EN: Germanium, Ge: p-block, non-metal
        "鍺 Ge：p 區，非金屬",
        // EN: Gallium, Ga: p-block, metal
        "鎵 Ga：p 區，金屬",
        // EN: Cerium, Ce: d-block, metal
        "鈰 Ce：d 區，金屬",
      ],
      hints: [
        // EN: Find the group of each element. Groups 1–2: s-block. Groups 3–12: d-block. Groups 13–18: p-block.
        "找出每種元素所屬的族。第 1–2 族：s 區。第 3–12 族：d 區。第 13–18 族：p 區。",
        // EN: The metalloids include B, Si, Ge, As, Sb and Te.
        "類金屬包括 B、Si、Ge、As、Sb 和 Te。",
      ],
      // EN: <p>Gallium is in group 13, so it is in the <strong>p-block</strong>. It is below aluminium and to the left of the metalloid boundary, so it is a <strong>metal</strong>. The p-block contains metals, metalloids and non-metals.</p>
      solution: "<p>鎵在第 13 族，所以在 <strong>p 區</strong>。它在鋁的下方、類金屬分界線的左邊，所以是<strong>金屬</strong>。p 區包含金屬、類金屬和非金屬。</p>",
      misconception: {
        // EN (option A): Zinc is a metal, but it is in group 12. Groups 3 to 12 are the d-block.
        "0": "鋅是金屬，但它在第 12 族。第 3 至 12 族是 d 區。",
        // EN (option B): Germanium is in the p-block, but it lies on the diagonal boundary. It is a metalloid.
        "1": "鍺在 p 區，但它位於斜向分界線上，是類金屬。",
        // EN (option D): Cerium is a metal, but it is in the first of the two rows drawn below the main table. Those rows are the f-block.
        "3": "鈰是金屬，但它在主表下方兩個橫行的第一行。這兩行是 f 區。",
      },
    },

    // ── s3-1-q005 · mcq · foundation · SL · Structure 3.1.2 · 1 mark
    "s3-1-q005": {
      // EN: <p>An atom has the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>. Where is the element in the periodic table?</p>
      stem: "<p>某原子的電子排佈是 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>。這種元素在週期表的甚麼位置？</p>",
      options: [
        // EN: Period 3, group 16
        "第 3 週期，第 16 族",
        // EN: Period 3, group 6
        "第 3 週期，第 6 族",
        // EN: Period 4, group 16
        "第 4 週期，第 16 族",
        // EN: Period 6, group 3
        "第 6 週期，第 3 族",
      ],
      hints: [
        // EN: Which is the highest energy level that contains electrons? That is the period.
        "有電子的最高能級是哪一個？它就是週期數。",
        // EN: Count the electrons in that outer level. For the p-block, add 10 to get the group number.
        "數一數這個最外層能級的電子。p 區元素要加 10 才得出族數。",
      ],
      // EN: <p>The outer occupied energy level is n = 3, so the element is in <strong>period 3</strong>. The outer level holds 2 + 4 = 6 valence electrons. The element is in the p-block, so the group is 6 + 10 = <strong>16</strong>. The element is sulfur.</p>
      solution: "<p>最外層有電子的能級是 n = 3，所以元素在<strong>第 3 週期</strong>。最外層有 2 + 4 = 6 個價電子。元素在 p 區，所以族數是 6 + 10 = <strong>16</strong>。這種元素是硫。</p>",
      misconception: {
        // EN (option B): The atom has 6 valence electrons, but groups are numbered 1 to 18. For a p-block element, group number = valence electrons + 10.
        "1": "這個原子有 6 個價電子，但族的編號是 1 至 18。p 區元素的族數 = 價電子數目 + 10。",
        // EN (option C): The period number is the outer energy level that contains electrons. Here that is level 3, not 4.
        "2": "週期數是最外層有電子的能級。這裏是第 3 能級，不是第 4。",
        // EN (option D): Period and group are swapped. The outer energy level (3) gives the period. The valence electrons (6) give the group.
        "3": "週期和族調轉了。最外層能級 (3) 給出週期。價電子數目 (6) 給出族。",
      },
    },

    // ── s3-1-q006 · mcq · exam · SL · Structure 3.1.2 · 1 mark
    "s3-1-q006": {
      // EN: <p>An element is in period 4 and group 7 of the periodic table. What is the electron configuration of its atom?</p>
      stem: "<p>某元素在週期表的第 4 週期、第 7 族。它的原子的電子排佈是甚麼？</p>",
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
        "第 4 週期的第 3 至 12 族是 d 區，正在填充 3d 亞層。",
        // EN: For groups 3 to 12: group number = number of 4s electrons + number of 3d electrons.
        "第 3 至 12 族：族數 = 4s 電子數目 + 3d 電子數目。",
      ],
      // EN: <p>Period 4 means the outer energy level is n = 4, and the core is argon. Group 7 is in the d-block, so the 4s and 3d electrons add up to 7: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>. The element is manganese. (IB also accepts <span class="mono nowrap">[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span>.)</p>
      solution: "<p>第 4 週期表示最外層能級是 n = 4，核心是氬。第 7 族在 d 區，所以 4s 和 3d 電子合共 7 個：<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>。這種元素是錳。（IB 也接受 <span class=\"mono nowrap\">[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span>。）</p>",
      misconception: {
        // EN (option A): This configuration has 7 electrons in the fourth level, but it also leaves out the 3d sublevel. Seven outer s and p electrons belong to group 17, not group 7.
        "0": "這個排佈在第四能級有 7 個電子，但漏了 3d 亞層。最外層有七個 s 和 p 電子的是第 17 族，不是第 7 族。",
        // EN (option B): For groups 3 to 12, the group number equals the number of 4s electrons plus 3d electrons. Here 2 + 7 = 9, which is group 9.
        "1": "第 3 至 12 族的族數，等於 4s 電子數目加 3d 電子數目。這裏 2 + 7 = 9，是第 9 族。",
        // EN (option C): The noble gas in the brackets is the one at the end of the period before. For period 4 that is argon. [Kr] would put the element in period 5.
        "2": "方括號內的貴氣體，是上一個週期末的那一種。對第 4 週期來說是氬。寫 [Kr] 會把元素放到第 5 週期。",
      },
    },

    // ── s3-1-q007 · multi · exam · SL · Structure 3.1.2 · 1 mark
    "s3-1-q007": {
      // EN: <p>Which statements are correct? Select all that apply.</p>
      stem: "<p>以下哪些敘述正確？選出所有正確選項。</p>",
      options: [
        // EN: Elements in the same group have the same number of valence electrons.
        "同一族的元素有相同數目的價電子。",
        // EN: Elements in the same period have the same number of valence electrons.
        "同一週期的元素有相同數目的價電子。",
        // EN: The period number is the number of the outer energy level that contains electrons.
        "週期數是最外層有電子的能級的編號。",
        // EN: Bromine is a halogen.
        "溴是鹵素。",
        // EN: Calcium is an alkali metal.
        "鈣是鹼金屬。",
      ],
      hints: [
        // EN: A group is a column. A period is a row.
        "族是直列。週期是橫行。",
        // EN: Alkali metals: group 1. Halogens: group 17. Noble gases: group 18. Transition elements: in the d-block.
        "鹼金屬：第 1 族。鹵素：第 17 族。貴氣體：第 18 族。過渡元素：在 d 區。",
      ],
      // EN: <p>Elements in a <strong>group</strong> have the same number of valence electrons. Elements in a <strong>period</strong> have the same outer occupied energy level, and the period number is the number of that level. Bromine is in group 17, so it is a halogen. Calcium is in group 2, so it is not an alkali metal.</p>
      solution: "<p>同一<strong>族</strong>的元素有相同數目的價電子。同一<strong>週期</strong>的元素，最外層有電子的能級相同，週期數就是這個能級的編號。溴在第 17 族，所以是鹵素。鈣在第 2 族，所以不是鹼金屬。</p>",
      misconception: {
        // EN (option B): Across a period the number of valence electrons increases by one each time. What stays the same in a period is the outer occupied energy level.
        "1": "橫跨一個週期，價電子的數目每次增加一個。同一週期內不變的，是最外層有電子的能級。",
        // EN (option E): The alkali metals are the group 1 metals (Li, Na, K, …). Calcium is in group 2.
        "4": "鹼金屬是第 1 族的金屬（Li、Na、K、…）。鈣在第 2 族。",
      },
    },

    // ── s3-1-q008 · mcq · challenge · SL · Structure 3.1.2 · 1 mark
    "s3-1-q008": {
      // EN: <p>The ion <span class="chem">X^2-</span> has the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>. Where is element X in the periodic table?</p>
      stem: "<p>離子 <span class=\"chem\">X^2-</span> 的電子排佈是 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>。元素 X 在週期表的甚麼位置？</p>",
      options: [
        // EN: Period 4, group 18
        "第 4 週期，第 18 族",
        // EN: Period 4, group 16
        "第 4 週期，第 16 族",
        // EN: Period 5, group 2
        "第 5 週期，第 2 族",
        // EN: Period 3, group 16
        "第 3 週期，第 16 族",
      ],
      hints: [
        // EN: How many electrons does the ion have? How many does the neutral atom have?
        "這個離子有多少個電子？中性原子又有多少個？",
        // EN: A 2− ion has two more electrons than its atom. Remove the last two electrons that were added.
        "2− 離子比它的原子多兩個電子。移走最後加入的兩個電子。",
        // EN: Then read the period from the outer level and the group from the valence electrons.
        "然後由最外層能級讀出週期，由價電子數目讀出族。",
      ],
      // EN: <p>The ion has 36 electrons. A 2− ion has gained two electrons, so the atom of X has 34 electrons: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>.</p><p>The outer level is n = 4, so X is in <strong>period 4</strong>. It has 2 + 4 = 6 valence electrons and is in the p-block, so the group is 6 + 10 = <strong>16</strong>. X is selenium.</p>
      solution: "<p>這個離子有 36 個電子。2− 離子是獲得了兩個電子，所以 X 的原子有 34 個電子：<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>。</p><p>最外層能級是 n = 4，所以 X 在<strong>第 4 週期</strong>。它有 2 + 4 = 6 個價電子，並在 p 區，所以族數是 6 + 10 = <strong>16</strong>。X 是硒。</p>",
      misconception: {
        // EN (option A): This is the position of the atom that has this configuration (krypton). The question gives the configuration of a 2− ion, which has two more electrons than the atom of X.
        "0": "這是擁有這個電子排佈的原子（氪）的位置。題目給的是 2− 離子的電子排佈，它比 X 的原子多兩個電子。",
        // EN (option C): This adds two electrons. A 2− ion has gained two electrons, so the atom has two <em>fewer</em> electrons than the ion.
        "2": "這是加上了兩個電子。2− 離子是獲得了兩個電子，所以原子的電子比離子<em>少</em>兩個。",
        // EN (option D): The outer occupied level of the ion is n = 4, not n = 3. A sulfide ion has only 18 electrons. This ion has 36.
        "3": "離子最外層有電子的能級是 n = 4，不是 n = 3。硫離子只有 18 個電子。這個離子有 36 個。",
      },
    },

    // ── s3-1-q009 · mcq · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q009": {
      // EN: <p>The table shows atomic radii from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Atomic radius / 10<sup>−12</sup> m</caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Na</th><th class="num" scope="col">Mg</th><th class="num" scope="col">Al</th><th class="num" scope="col">Si</th><th class="num" scope="col">P</th><th class="num" scope="col">S</th><th class="num" scope="col">Cl</th></tr></thead><tbody><tr><th scope="row">Radius</th><td class="num">160</td><td class="num">140</td><td class="num">124</td><td class="num">114</td><td class="num">109</td><td class="num">104</td><td class="num">100</td></tr></tbody></table></div><p>Which statement explains the trend?</p>
      stem: "<p>下表列出數據手冊中的原子半徑。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>原子半徑 / 10<sup>−12</sup> m</caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">Na</th><th class=\"num\" scope=\"col\">Mg</th><th class=\"num\" scope=\"col\">Al</th><th class=\"num\" scope=\"col\">Si</th><th class=\"num\" scope=\"col\">P</th><th class=\"num\" scope=\"col\">S</th><th class=\"num\" scope=\"col\">Cl</th></tr></thead><tbody><tr><th scope=\"row\">半徑</th><td class=\"num\">160</td><td class=\"num\">140</td><td class=\"num\">124</td><td class=\"num\">114</td><td class=\"num\">109</td><td class=\"num\">104</td><td class=\"num\">100</td></tr></tbody></table></div><p>以下哪一項解釋了這個趨勢？</p>",
      options: [
        // EN: The number of occupied energy levels decreases across the period.
        "橫跨這個週期，有電子的能級數目減少。",
        // EN: Shielding by inner electrons decreases across the period.
        "橫跨這個週期，內層電子的屏蔽減弱。",
        // EN: The nuclear charge increases, and the outer electrons are in the same energy level with similar shielding.
        "核電荷增加，而最外層電子都在同一能級，屏蔽相若。",
        // EN: The atoms gain electrons across the period, and electrons repel each other.
        "橫跨這個週期，原子的電子增多，而電子互相排斥。",
      ],
      hints: [
        // EN: Describe the trend first: does the radius increase or decrease from Na to Cl?
        "先描述趨勢：由 Na 到 Cl，半徑是增加還是減少？",
        // EN: Compare Na and Cl: number of protons, number of occupied energy levels, number of inner electrons.
        "比較 Na 和 Cl：質子數目、有電子的能級數目、內層電子數目。",
      ],
      // EN: <p>The radius decreases from 160 to 100 (in 10<sup>−12</sup> m). Across period 3 the number of protons rises from 11 to 17, so the <strong>nuclear charge increases</strong>. The outer electrons are all in the <strong>same energy level</strong> (n = 3) and are shielded by the same 10 inner electrons. The outer electrons are attracted more strongly and are pulled closer to the nucleus.</p>
      solution: "<p>半徑由 160 減至 100（單位是 10<sup>−12</sup> m）。橫跨第 3 週期，質子數目由 11 增至 17，所以<strong>核電荷增加</strong>。最外層電子全部在<strong>同一能級</strong> (n = 3)，並受相同的 10 個內層電子屏蔽。最外層電子受到的吸引較強，被拉近原子核。</p>",
      misconception: {
        // EN (option A): All period 3 atoms have three occupied energy levels. The number of levels does not change across a period.
        "0": "第 3 週期的原子全部有三個有電子的能級。橫跨一個週期，能級數目不變。",
        // EN (option B): Every period 3 atom has the same 10 inner electrons, so the shielding by inner electrons stays about the same.
        "1": "第 3 週期每個原子都有相同的 10 個內層電子，所以內層電子的屏蔽大致不變。",
        // EN (option D): More repulsion would make the atoms larger. The data show that the atoms get smaller. The extra protons in the nucleus have the larger effect.
        "3": "排斥增強會令原子變大。數據顯示原子變小。原子核內多出的質子影響較大。",
      },
    },

    // ── s3-1-q010 · order · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q010": {
      // EN: <p>Use the positions of these elements in the periodic table. Put them in order of <strong>increasing electronegativity</strong> (lowest first).</p>
      stem: "<p>根據這些元素在週期表的位置，把它們按<strong>電負性 (electronegativity) 由低至高</strong>排列（最低的排最先）。</p>",
      options: [
        // EN: Potassium, K
        "鉀 K",
        // EN: Sodium, Na
        "鈉 Na",
        // EN: Silicon, Si
        "矽 Si",
        // EN: Chlorine, Cl
        "氯 Cl",
        // EN: Fluorine, F
        "氟 F",
      ],
      hints: [
        // EN: Electronegativity increases across a period, from left to right.
        "橫跨一個週期，由左至右，電負性增加。",
        // EN: Electronegativity decreases down a group. Compare K with Na, and Cl with F.
        "沿一族向下，電負性減少。比較 K 和 Na，以及 Cl 和 F。",
      ],
      // EN: <p>Electronegativity is a measure of how strongly an atom attracts a bonding pair of electrons. It <strong>increases across a period</strong>: the nuclear charge increases while the shielding stays about the same. It <strong>decreases down a group</strong>: the bonding electrons are further from the nucleus and more shielded.</p><p>Data booklet values: K 0.8, Na 0.9, Si 1.9, Cl 3.2, F 4.0.</p>
      solution: "<p>電負性量度原子吸引鍵合電子對的能力有多強。<strong>橫跨一個週期，電負性增加</strong>：核電荷增加，而屏蔽大致不變。<strong>沿一族向下，電負性減少</strong>：鍵合電子離原子核較遠，受到的屏蔽也較多。</p><p>數據手冊的數值：K 0.8、Na 0.9、Si 1.9、Cl 3.2、F 4.0。</p>",
    },

    // ── s3-1-q011 · mcq · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q011": {
      // EN: <p>Which equation represents the first electron affinity of chlorine?</p>
      stem: "<p>以下哪一條方程式代表氯的第一電子親合勢 (first electron affinity)？</p>",
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
        "這裏的「親合」是指獲得電子，不是失去電子。",
        // EN: The starting particle is one gaseous atom.
        "起始的粒子是一個氣態原子。",
      ],
      // EN: <p>The first electron affinity is the energy change when one mole of electrons is added to one mole of gaseous atoms to form one mole of gaseous 1− ions:</p><div class="worked__math"><span class="chem">Cl(g) + e- -> Cl-(g)</span></div><p>For chlorine the data booklet value is −349 kJ mol<sup>−1</sup>. The negative sign shows that energy is released.</p>
      solution: "<p>第一電子親合勢是指一摩爾氣態原子獲得一摩爾電子，形成一摩爾氣態 1− 離子時的能量變化：</p><div class=\"worked__math\"><span class=\"chem\">Cl(g) + e- -> Cl-(g)</span></div><p>數據手冊中氯的數值是 −349 kJ mol<sup>−1</sup>。負號表示釋出能量。</p>",
      misconception: {
        // EN (option A): This equation removes an electron from the atom. It represents the first ionization energy.
        "0": "這條方程式是從原子移走一個電子。它代表第一電離能。",
        // EN (option B): This equation removes an electron from the ion. It is the reverse of the electron affinity.
        "1": "這條方程式是從離子移走一個電子。它是電子親合勢的逆過程。",
        // EN (option C): Electron affinity is defined for separate gaseous <em>atoms</em>, not for molecules, and for one mole of electrons gained.
        "2": "電子親合勢的定義，是針對獨立的氣態<em>原子</em>，不是分子，而且是獲得一摩爾電子。",
      },
    },

    // ── s3-1-q012 · short · exam · SL · Structure 3.1.3 · 2 marks
    "s3-1-q012": {
      // EN: <p>The first ionization energies of three group 1 elements are: Li 520, Na 496, K 419 (in kJ mol<sup>−1</sup>).</p><p>Explain why the first ionization energy decreases down group 1.</p>
      stem: "<p>三種第 1 族元素的第一電離能是：Li 520、Na 496、K 419（單位是 kJ mol<sup>−1</sup>）。</p><p>解釋 (explain) 為甚麼沿第 1 族向下，第一電離能減少。</p>",
      hints: [
        // EN: Write the outer electron of each atom: 2s, 3s, 4s.
        "寫出每個原子的最外層電子：2s、3s、4s。",
        // EN: Give two reasons why the nucleus holds a 4s electron in K less strongly than a 2s electron in Li.
        "提出兩個原因，說明為甚麼原子核對 K 的 4s 電子的吸引，比對 Li 的 2s 電子弱。",
      ],
      // EN: <p>Down the group, the outer electron is in a higher energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove the electron.</p><p>Do not write only “the atomic radius increases”. Say <em>why</em>: the electron is in a higher energy level and is more shielded.</p>
      answer: "<p>沿這一族向下，最外層電子在較高的能級，所以離原子核較遠。內層電子也較多，所以最外層電子受到的屏蔽較多。原子核與最外層電子之間的吸引較弱（雖然核電荷較大），所以移走這個電子所需的能量較少。</p><p>不要只寫「原子半徑增加」。要說出<em>原因</em>：電子在較高的能級，並受到較多屏蔽。</p>",
      markscheme: [
        // EN: The outer electron is in a higher energy level / further from the nucleus (do not accept “atomic radius increases” alone).
        "最外層電子在較高的能級／離原子核較遠（只寫「原子半徑增加」不接受）。",
        // EN: There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker.
        "內層電子的屏蔽較多，所以原子核與最外層電子之間的吸引較弱。",
      ],
    },

    // ── s3-1-q013 · order · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q013": {
      // EN: <p>These five ions all have the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>. Put them in order of <strong>increasing ionic radius</strong> (smallest first).</p>
      stem: "<p>這五個離子的電子排佈都是 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。把它們按<strong>離子半徑 (ionic radius) 由小至大</strong>排列（最小的排最先）。</p>",
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
        "五個離子都有 10 個電子。它們有甚麼不同？",
        // EN: Count the protons in each nucleus. More protons pull the same 10 electrons closer.
        "數一數每個原子核的質子。質子越多，把同樣的 10 個電子拉得越近。",
      ],
      // EN: <p>Each ion has 10 electrons in the same arrangement. The number of protons is different: O 8, F 9, Na 11, Mg 12, Al 13. A larger nuclear charge attracts the same number of electrons more strongly, so the ion is smaller.</p><p>Data booklet ionic radii (in 10<sup>−12</sup> m): <span class="chem">Al^3+</span> 54, <span class="chem">Mg^2+</span> 72, <span class="chem">Na+</span> 102, <span class="chem">F-</span> 133, <span class="chem">O^2-</span> 140.</p>
      solution: "<p>每個離子都有 10 個電子，排列方式相同。質子數目卻不同：O 8、F 9、Na 11、Mg 12、Al 13。核電荷越大，對相同數目的電子吸引越強，所以離子越小。</p><p>數據手冊的離子半徑（單位是 10<sup>−12</sup> m）：<span class=\"chem\">Al^3+</span> 54、<span class=\"chem\">Mg^2+</span> 72、<span class=\"chem\">Na+</span> 102、<span class=\"chem\">F-</span> 133、<span class=\"chem\">O^2-</span> 140。</p>",
    },

    // ── s3-1-q014 · mcq · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q014": {
      // EN: <p>The data booklet gives these radii: Na atom 160, <span class="chem">Na+</span> ion 102 (in 10<sup>−12</sup> m).</p><p>Which statement best explains why the sodium ion is much smaller than the sodium atom?</p>
      stem: "<p>數據手冊給出以下半徑：Na 原子 160、<span class=\"chem\">Na+</span> 離子 102（單位是 10<sup>−12</sup> m）。</p><p>以下哪一項最能解釋為甚麼鈉離子比鈉原子小得多？</p>",
      options: [
        // EN: The ion has more protons than the atom.
        "離子的質子比原子多。",
        // EN: The ion has one fewer occupied energy level than the atom.
        "離子比原子少一個有電子的能級。",
        // EN: The ion has gained an electron, so the nucleus attracts the electrons more strongly.
        "離子獲得了一個電子，所以原子核對電子的吸引較強。",
        // EN: The ion has more shielding than the atom.
        "離子受到的屏蔽比原子多。",
      ],
      hints: [
        // EN: Write the electron configuration of Na and of <span class="chem">Na+</span>.
        "寫出 Na 和 <span class=\"chem\">Na+</span> 的電子排佈。",
        // EN: Which energy level is the outer one in each?
        "兩者的最外層能級分別是哪一個？",
      ],
      // EN: <p>Na is <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. <span class="chem">Na+</span> is <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>. The ion has lost its only electron in the third energy level, so it has <strong>one fewer occupied energy level</strong>. The same 11 protons now attract only 10 electrons, so the remaining electrons are held more closely.</p><p>The opposite happens for a negative ion: <span class="chem">Cl-</span> (181) is larger than Cl (100), because the extra electron increases the repulsion between the outer electrons while the nuclear charge stays the same.</p>
      solution: "<p>Na 是 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>。<span class=\"chem\">Na+</span> 是 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。離子失去了第三能級唯一的電子，所以<strong>少了一個有電子的能級</strong>。同樣的 11 個質子現在只吸引 10 個電子，所以餘下的電子被拉得更近。</p><p>負離子的情況相反：<span class=\"chem\">Cl-</span> (181) 比 Cl (100) 大，因為多出的電子令最外層電子之間的排斥增加，而核電荷不變。</p>",
      misconception: {
        // EN (option A): Forming an ion does not change the nucleus. The atom and the ion both have 11 protons.
        "0": "形成離子不會改變原子核。原子和離子都有 11 個質子。",
        // EN (option C): A positive ion forms when an atom <em>loses</em> an electron. Sodium loses its 3s electron.
        "2": "正離子是原子<em>失去</em>電子而形成的。鈉失去它的 3s 電子。",
        // EN (option D): The ion has fewer electrons than the atom, so it cannot have more shielding.
        "3": "離子的電子比原子少，所以屏蔽不可能較多。",
      },
    },

    // ── s3-1-q015 · short · challenge · SL · Structure 3.1.3 · 3 marks
    "s3-1-q015": {
      // EN: <p>The table shows ionic radii from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Ionic radius / 10<sup>−12</sup> m</caption><thead><tr><th scope="col">Ion</th><th class="num" scope="col"><span class="chem">S^2-</span></th><th class="num" scope="col"><span class="chem">Cl-</span></th><th class="num" scope="col"><span class="chem">K+</span></th><th class="num" scope="col"><span class="chem">Ca^2+</span></th></tr></thead><tbody><tr><th scope="row">Radius</th><td class="num">184</td><td class="num">181</td><td class="num">138</td><td class="num">100</td></tr></tbody></table></div><p>Explain the trend in ionic radius from <span class="chem">S^2-</span> to <span class="chem">Ca^2+</span>.</p>
      stem: "<p>下表列出數據手冊中的離子半徑。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>離子半徑 / 10<sup>−12</sup> m</caption><thead><tr><th scope=\"col\">離子</th><th class=\"num\" scope=\"col\"><span class=\"chem\">S^2-</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">Cl-</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">K+</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">Ca^2+</span></th></tr></thead><tbody><tr><th scope=\"row\">半徑</th><td class=\"num\">184</td><td class=\"num\">181</td><td class=\"num\">138</td><td class=\"num\">100</td></tr></tbody></table></div><p>解釋 (explain) 由 <span class=\"chem\">S^2-</span> 到 <span class=\"chem\">Ca^2+</span> 離子半徑的趨勢。</p>",
      hints: [
        // EN: Count the electrons in each ion.
        "數一數每個離子的電子。",
        // EN: Count the protons in each ion.
        "數一數每個離子的質子。",
        // EN: Link the two: same electrons, different pull.
        "把兩者連起來：電子相同，拉力不同。",
      ],
      // EN: <p>All four ions have 18 electrons and the same electron configuration, <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>. The nuclear charge increases from 16 protons in <span class="chem">S^2-</span> to 20 protons in <span class="chem">Ca^2+</span>. The same number of electrons is attracted more strongly by the larger nuclear charge, so the electrons are pulled closer to the nucleus and the radius decreases.</p>
      answer: "<p>四個離子都有 18 個電子，電子排佈相同，都是 <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>。核電荷由 <span class=\"chem\">S^2-</span> 的 16 個質子增至 <span class=\"chem\">Ca^2+</span> 的 20 個質子。電子數目相同，核電荷越大，吸引越強，所以電子被拉近原子核，半徑減少。</p>",
      markscheme: [
        // EN: All four ions have the same number of electrons / the same electron configuration (18 electrons; accept “isoelectronic”).
        "四個離子的電子數目相同／電子排佈相同（18 個電子；接受「等電子數 (isoelectronic)」）。",
        // EN: The nuclear charge / number of protons increases from S (16) to Ca (20).
        "由 S (16) 到 Ca (20)，核電荷／質子數目增加。",
        // EN: So the electrons are attracted more strongly / pulled closer to the nucleus (and the radius decreases).
        "所以電子受到的吸引較強／被拉近原子核（半徑因而減少）。",
      ],
    },

    // ── s3-1-q016 · multi · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q016": {
      // EN: <p>Which of these <strong>increase</strong> across period 3 from sodium to chlorine? Select all that apply.</p>
      stem: "<p>橫跨第 3 週期，由鈉到氯，以下哪些會<strong>增加</strong>？選出所有正確選項。</p>",
      options: [
        // EN: Nuclear charge
        "核電荷",
        // EN: Atomic radius
        "原子半徑",
        // EN: First ionization energy (general trend)
        "第一電離能（整體趨勢）",
        // EN: Electronegativity
        "電負性",
        // EN: Number of occupied energy levels
        "有電子的能級數目",
      ],
      hints: [
        // EN: Start with the nucleus: what changes from Na (Z = 11) to Cl (Z = 17)?
        "由原子核開始想：由 Na (Z = 11) 到 Cl (Z = 17)，甚麼改變了？",
        // EN: A stronger attraction for outer electrons makes the atom smaller, makes an electron harder to remove, and attracts bonding electrons more.
        "對最外層電子的吸引越強，原子越小，電子越難移走，對鍵合電子的吸引也越強。",
      ],
      // EN: <p>Across period 3 the <strong>nuclear charge</strong> increases (11 to 17 protons). The outer electrons are in the same energy level with similar shielding, so they are attracted more strongly. This means:</p><ul><li>atomic radius decreases (160 to 100, in 10<sup>−12</sup> m);</li><li>first ionization energy generally increases (Na 496, Cl 1251 kJ mol<sup>−1</sup>);</li><li>electronegativity increases (Na 0.9, Cl 3.2).</li></ul><p>The number of occupied energy levels stays at three.</p>
      solution: "<p>橫跨第 3 週期，<strong>核電荷</strong>增加（由 11 個質子增至 17 個）。最外層電子在同一能級，屏蔽相若，所以受到的吸引較強。因此：</p><ul><li>原子半徑減少（由 160 減至 100，單位是 10<sup>−12</sup> m）；</li><li>第一電離能大致上增加（Na 496、Cl 1251 kJ mol<sup>−1</sup>）；</li><li>電負性增加（Na 0.9、Cl 3.2）。</li></ul><p>有電子的能級數目維持在三個。</p>",
      misconception: {
        // EN (option B): Atomic radius decreases across a period: Na 160, Cl 100 (in 10<sup>−12</sup> m). The increasing nuclear charge pulls the outer electrons closer.
        "1": "橫跨一個週期，原子半徑減少：Na 160、Cl 100（單位是 10<sup>−12</sup> m）。核電荷增加，把最外層電子拉得更近。",
        // EN (option E): Every period 3 atom has three occupied energy levels. That is what makes them one period.
        "4": "第 3 週期每個原子都有三個有電子的能級。這正是它們屬於同一週期的原因。",
      },
    },

    // ── s3-1-q017 · mcq · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q017": {
      // EN: <p>The table shows first electron affinities from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First electron affinity / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">F</th><th class="num" scope="col">Cl</th><th class="num" scope="col">Br</th><th class="num" scope="col">I</th></tr></thead><tbody><tr><th scope="row">EA</th><td class="num">−328</td><td class="num">−349</td><td class="num">−325</td><td class="num">−295</td></tr></tbody></table></div><p>Which statement is supported by the data?</p>
      stem: "<p>下表列出數據手冊中的第一電子親合勢 (first electron affinity)。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>第一電子親合勢 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">F</th><th class=\"num\" scope=\"col\">Cl</th><th class=\"num\" scope=\"col\">Br</th><th class=\"num\" scope=\"col\">I</th></tr></thead><tbody><tr><th scope=\"row\">電子親合勢</th><td class=\"num\">−328</td><td class=\"num\">−349</td><td class=\"num\">−325</td><td class=\"num\">−295</td></tr></tbody></table></div><p>數據支持以下哪一項敘述？</p>",
      options: [
        // EN: A fluorine atom releases the most energy when it gains an electron.
        "氟原子獲得一個電子時，釋出的能量最多。",
        // EN: Energy must be supplied to add an electron to each of these atoms.
        "要把電子加到這些原子，每一種都必須供給能量。",
        // EN: From chlorine to iodine, less energy is released when an atom gains an electron.
        "由氯到碘，原子獲得一個電子時釋出的能量減少。",
        // EN: Electron affinity becomes more exothermic down the whole group.
        "沿整個族向下，電子親合勢的放熱程度越來越大。",
      ],
      hints: [
        // EN: A more negative value means more energy is released.
        "數值越負，釋出的能量越多。",
        // EN: Compare the size of the numbers from Cl down to I.
        "比較由 Cl 向下到 I 的數值大小。",
      ],
      // EN: <p>From chlorine to iodine the values change from −349 to −325 to −295 kJ mol<sup>−1</sup>. They become less negative, so <strong>less energy is released</strong>.</p><p>Explanation: down the group, the added electron enters a higher energy level. It is further from the nucleus and more shielded, so it is attracted less strongly.</p><p>Fluorine does not follow the pattern. Its atom is very small, so the added electron is repelled more by the electrons already there. You do not need to explain this exception.</p>
      solution: "<p>由氯到碘，數值由 −349 變為 −325，再變為 −295 kJ mol<sup>−1</sup>。數值越來越不負，所以<strong>釋出的能量減少</strong>。</p><p>解釋：沿這一族向下，加入的電子進入較高的能級。它離原子核較遠，受到的屏蔽較多，所以受到的吸引較弱。</p><p>氟不符合這個規律。氟原子很小，所以加入的電子受原有電子的排斥較大。你不需要解釋這個例外。</p>",
      misconception: {
        // EN (option A): Read the values again: chlorine (−349) is more negative than fluorine (−328), so chlorine releases more energy. Fluorine has the highest electronegativity, but that is a different property.
        "0": "再看一次數值：氯 (−349) 比氟 (−328) 更負，所以氯釋出的能量較多。氟的電負性最高，但那是另一種性質。",
        // EN (option B): All four values are negative. A negative energy change means energy is released (exothermic).
        "1": "四個數值全是負數。能量變化是負數，表示釋出能量（放熱）。",
        // EN (option D): From Cl to Br to I the values become <em>less</em> negative: −349, −325, −295. Less energy is released.
        "3": "由 Cl 到 Br 再到 I，數值越來越<em>不</em>負：−349、−325、−295。釋出的能量減少。",
      },
    },

    // ── s3-1-q018 · short · challenge · SL · Structure 3.1.3 · 3 marks
    "s3-1-q018": {
      // EN: <p>The first ionization energies of three elements are: F 1681, Cl 1251, S 1000 (in kJ mol<sup>−1</sup>).</p><p>Explain why the first ionization energy of fluorine is higher than that of chlorine, and why that of chlorine is higher than that of sulfur.</p>
      stem: "<p>三種元素的第一電離能是：F 1681、Cl 1251、S 1000（單位是 kJ mol<sup>−1</sup>）。</p><p>解釋 (explain) 為甚麼氟的第一電離能比氯高，以及為甚麼氯的第一電離能比硫高。</p>",
      hints: [
        // EN: Treat the two comparisons separately. F and Cl are in the same group. Cl and S are in the same period.
        "把兩項比較分開處理。F 和 Cl 在同一族。Cl 和 S 在同一週期。",
        // EN: Same group: what changes is the energy level and the shielding.
        "同一族：改變的是能級和屏蔽。",
        // EN: Same period: what changes is the nuclear charge.
        "同一週期：改變的是核電荷。",
      ],
      // EN: <p><strong>F and Cl</strong> (same group): the outer electrons of fluorine are in the second energy level. Those of chlorine are in the third. The outer electron in fluorine is closer to the nucleus and is shielded by fewer inner electrons, so it is attracted more strongly.</p><p><strong>Cl and S</strong> (same period): the outer electrons are in the same energy level (n = 3) with the same shielding. Chlorine has 17 protons and sulfur has 16, so chlorine has the larger nuclear charge and attracts its outer electrons more strongly. More energy is needed to remove one.</p>
      answer: "<p><strong>F 和 Cl</strong>（同一族）：氟的最外層電子在第二能級，氯的在第三能級。氟的最外層電子較接近原子核，屏蔽它的內層電子也較少，所以受到的吸引較強。</p><p><strong>Cl 和 S</strong>（同一週期）：最外層電子在同一能級 (n = 3)，屏蔽相同。氯有 17 個質子，硫有 16 個，所以氯的核電荷較大，對最外層電子的吸引較強。移走一個電子所需的能量較多。</p>",
      markscheme: [
        // EN: In F the outer electron is in a lower energy level / closer to the nucleus / less shielded than in Cl.
        "F 的最外層電子比 Cl 的在較低的能級／較接近原子核／受到的屏蔽較少。",
        // EN: In Cl and S the outer electrons are in the same energy level / have the same (similar) shielding.
        "Cl 和 S 的最外層電子在同一能級／屏蔽相同（相若）。",
        // EN: Cl has a greater nuclear charge / more protons than S, so the outer electron is attracted more strongly.
        "Cl 的核電荷比 S 大／質子比 S 多，所以最外層電子受到的吸引較強。",
      ],
    },

    // ── s3-1-q019 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "s3-1-q019": {
      // EN: <p>A small piece of sodium is added to a large trough of water. What is observed?</p>
      stem: "<p>把一小塊鈉放進一大槽水中。會觀察到甚麼？</p>",
      options: [
        // EN: The sodium sinks and reacts slowly.
        "鈉下沉，並緩慢地反應。",
        // EN: The sodium floats, moves across the surface and fizzes.
        "鈉浮在水面，在水面上四處移動，並嘶嘶地冒出氣泡。",
        // EN: The sodium floats and a brown gas is given off.
        "鈉浮在水面，並釋出棕色氣體。",
        // EN: The sodium sinks and a white precipitate forms.
        "鈉下沉，並生成白色沉澱物。",
      ],
      hints: [
        // EN: Is sodium more dense or less dense than water?
        "鈉的密度比水大還是小？",
        // EN: One product is a gas. What do you see when a gas forms in a liquid?
        "其中一種生成物是氣體。液體中有氣體生成時，你會看到甚麼？",
      ],
      // EN: <p>Sodium <strong>floats</strong>, melts into a ball, <strong>moves</strong> across the surface, <strong>fizzes</strong> and gets smaller until it disappears. The solution left is alkaline.</p><div class="worked__math"><span class="chem">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></div>
      solution: "<p>鈉<strong>浮在水面</strong>，熔化成小球，在水面上<strong>四處移動</strong>，<strong>嘶嘶地冒出氣泡</strong>，並逐漸變小，直至消失。餘下的溶液呈鹼性。</p><div class=\"worked__math\"><span class=\"chem\">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></div>",
      misconception: {
        // EN (option A): Sodium is less dense than water, so it floats. The reaction is fast.
        "0": "鈉的密度比水小，所以浮在水面。反應很快。",
        // EN (option C): The gas is hydrogen, which is colourless.
        "2": "這種氣體是氫，它是無色的。",
        // EN (option D): Sodium floats. The product, sodium hydroxide, is soluble, so the solution stays clear and colourless.
        "3": "鈉浮在水面。生成物氫氧化鈉可溶於水，所以溶液保持澄清無色。",
      },
    },

    // ── s3-1-q020 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "s3-1-q020": {
      // EN: <p>Which is the correct balanced equation for the reaction of potassium with water?</p>
      stem: "<p>以下哪一條是鉀與水反應的正確平衡方程式？</p>",
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
        "生成物：金屬氫氧化物和氫氣。",
        // EN: Potassium forms <span class="chem">K+</span>. Write the formula of the hydroxide, then balance H.
        "鉀形成 <span class=\"chem\">K+</span>。先寫出氫氧化物的化學式，再配平 H。",
      ],
      // EN: <div class="worked__math"><span class="chem">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span></div><p>Check: K 2 = 2; H 4 = 2 + 2; O 2 = 2. All group 1 metals react in the same way, because each atom loses its one valence electron to form a 1+ ion.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span></div><p>檢查：K 2 = 2；H 4 = 2 + 2；O 2 = 2。所有第 1 族金屬的反應方式都相同，因為每個原子都失去唯一的價電子，形成 1+ 離子。</p>",
      misconception: {
        // EN (option A): The formulas are right, but the equation is not balanced. Count hydrogen: 2 on the left, 3 on the right.
        "0": "化學式都正確，但方程式未配平。數一數氫：左邊 2 個，右邊 3 個。",
        // EN (option B): A group 1 metal and water give the metal <em>hydroxide</em> and hydrogen. The oxide would react with water to give the hydroxide.
        "1": "第 1 族金屬與水反應，生成金屬<em>氫氧化物</em>和氫。氧化物會與水反應，生成氫氧化物。",
        // EN (option D): Potassium is in group 1, so it forms the 1+ ion. The hydroxide is KOH, not <span class="chem">K(OH)2</span>.
        "3": "鉀在第 1 族，所以形成 1+ 離子。氫氧化物是 KOH，不是 <span class=\"chem\">K(OH)2</span>。",
      },
    },

    // ── s3-1-q021 · short · exam · SL · Structure 3.1.4 · 3 marks
    "s3-1-q021": {
      // EN: <p>Lithium, sodium and potassium all react with water. Describe and explain the trend in reactivity from lithium to potassium.</p>
      stem: "<p>鋰、鈉和鉀都與水反應。描述 (describe) 並解釋 (explain) 由鋰到鉀的活潑性趨勢。</p>",
      hints: [
        // EN: “Describe” needs the direction of the trend. “Explain” needs the reason.
        "「描述」要寫出趨勢的方向。「解釋」要寫出原因。",
        // EN: In this reaction each metal atom loses one electron. What makes that electron easier to lose?
        "在這個反應中，每個金屬原子失去一個電子。甚麼令這個電子較容易失去？",
      ],
      // EN: <p>The reactivity increases down the group: the reaction with water becomes more vigorous from lithium to sodium to potassium.</p><p>Down the group, the outer electron is in a higher energy level. It is further from the nucleus and more shielded by inner electrons. The attraction between the nucleus and the outer electron is weaker, so the first ionization energy is lower and the atom loses its outer electron more easily.</p>
      answer: "<p>沿這一族向下，活潑性增加：由鋰到鈉再到鉀，與水的反應越來越劇烈。</p><p>沿這一族向下，最外層電子在較高的能級。它離原子核較遠，受內層電子的屏蔽也較多。原子核與最外層電子之間的吸引較弱，所以第一電離能較低，原子較容易失去最外層電子。</p>",
      markscheme: [
        // EN: Reactivity increases down the group / the reaction becomes more vigorous from Li to K.
        "沿這一族向下，活潑性增加／由 Li 到 K，反應越來越劇烈。",
        // EN: Down the group the outer electron is in a higher energy level / further from the nucleus AND more shielded.
        "沿這一族向下，最外層電子在較高的能級／離原子核較遠，並且 (AND) 受到的屏蔽較多。",
        // EN: So the attraction for the outer electron is weaker / the ionization energy is lower / the outer electron is lost more easily.
        "所以對最外層電子的吸引較弱／電離能較低／較容易失去最外層電子。",
      ],
    },

    // ── s3-1-q022 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "s3-1-q022": {
      // EN: <p>Pairs of aqueous solutions are mixed. In which mixture does a reaction occur?</p>
      stem: "<p>把以下各對水溶液混合。哪一對混合後會發生反應？</p>",
      options: [
        // EN: <span class="chem">Br2(aq)</span> and <span class="chem">KCl(aq)</span>
        "<span class=\"chem\">Br2(aq)</span> 和 <span class=\"chem\">KCl(aq)</span>",
        // EN: <span class="chem">I2(aq)</span> and <span class="chem">KBr(aq)</span>
        "<span class=\"chem\">I2(aq)</span> 和 <span class=\"chem\">KBr(aq)</span>",
        // EN: <span class="chem">I2(aq)</span> and <span class="chem">KCl(aq)</span>
        "<span class=\"chem\">I2(aq)</span> 和 <span class=\"chem\">KCl(aq)</span>",
        // EN: <span class="chem">Cl2(aq)</span> and <span class="chem">KI(aq)</span>
        "<span class=\"chem\">Cl2(aq)</span> 和 <span class=\"chem\">KI(aq)</span>",
      ],
      hints: [
        // EN: Reactivity decreases down group 17: <span class="chem">Cl2</span> &gt; <span class="chem">Br2</span> &gt; <span class="chem">I2</span>.
        "沿第 17 族向下，活潑性減少：<span class=\"chem\">Cl2</span> &gt; <span class=\"chem\">Br2</span> &gt; <span class=\"chem\">I2</span>。",
        // EN: A halogen displaces the halide ion of a halogen <em>below</em> it in the group.
        "鹵素可以置換族中位置在它<em>下面</em>的鹵素的鹵離子。",
      ],
      // EN: <p>A more reactive halogen displaces a less reactive halogen from its halide ion. Chlorine is above iodine, so it reacts:</p><div class="worked__math"><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></div><p>The mixture turns brown as iodine forms. A chlorine atom is smaller than an iodine atom, so the electron it gains is closer to the nucleus and less shielded. Chlorine attracts the extra electron more strongly.</p>
      solution: "<p>活性較高的鹵素，可以把活性較低的鹵素從它的鹵離子中置換出來。氯在碘的上面，所以會反應：</p><div class=\"worked__math\"><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></div><p>碘生成時，混合物變成棕色。氯原子比碘原子小，所以它獲得的電子較接近原子核，受到的屏蔽也較少。氯對額外電子的吸引較強。</p>",
      misconception: {
        // EN (option A): Bromine is below chlorine in group 17, so it is less reactive. It cannot displace chloride ions.
        "0": "溴在第 17 族中位於氯的下面，所以活性較低。它不能置換氯離子。",
        // EN (option B): Iodine is below bromine in group 17, so it is less reactive. It cannot displace bromide ions.
        "1": "碘在第 17 族中位於溴的下面，所以活性較低。它不能置換溴離子。",
        // EN (option C): Iodine is the least reactive of the three halogens here. It cannot displace chloride ions.
        "2": "碘是這三種鹵素中活性最低的。它不能置換氯離子。",
      },
    },

    // ── s3-1-q023 · short · challenge · SL · Structure 3.1.4 · 3 marks
    "s3-1-q023": {
      // EN: <p>A student has an aqueous solution of one halogen, <span class="chem">X2</span>. The halogen is chlorine, bromine or iodine.</p><ul><li>Test 1: <span class="chem">X2(aq)</span> is added to <span class="chem">KCl(aq)</span>. No reaction occurs.</li><li>Test 2: <span class="chem">X2(aq)</span> is added to <span class="chem">KI(aq)</span>. A reaction occurs and iodine forms.</li></ul><p>Identify <span class="chem">X2</span>, explain your reasoning, and write an ionic equation, with state symbols, for the reaction in test 2.</p>
      stem: "<p>一名學生有一種鹵素 <span class=\"chem\">X2</span> 的水溶液。這種鹵素是氯、溴或碘。</p><ul><li>測試 1：把 <span class=\"chem\">X2(aq)</span> 加入 <span class=\"chem\">KCl(aq)</span>。沒有反應。</li><li>測試 2：把 <span class=\"chem\">X2(aq)</span> 加入 <span class=\"chem\">KI(aq)</span>。發生反應，並生成碘。</li></ul><p>指出 <span class=\"chem\">X2</span> 是哪一種鹵素 (identify)，解釋 (explain) 你的推論，並寫出測試 2 中反應的離子方程式 (ionic equation)，須包括物態符號。</p>",
      hints: [
        // EN: Which halogens can displace iodide ions?
        "哪些鹵素可以置換碘離子？",
        // EN: Which halogen cannot displace chloride ions but can displace iodide ions?
        "哪一種鹵素不能置換氯離子，但可以置換碘離子？",
        // EN: In the ionic equation leave out <span class="chem">K+</span>. It does not change.
        "離子方程式不用寫 <span class=\"chem\">K+</span>。它沒有改變。",
      ],
      // EN: <p><span class="chem">X2</span> is <strong>bromine</strong>. A halogen displaces the halide ions of a less reactive halogen. Test 2 shows that <span class="chem">X2</span> is more reactive than iodine, so it is not iodine. Test 1 shows that <span class="chem">X2</span> cannot displace chloride ions, so it is less reactive than chlorine (and it is not chlorine, which does not react with its own ions). Reactivity decreases down group 17, so <span class="chem">X2</span> is bromine.</p><div class="worked__math"><span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span></div>
      answer: "<p><span class=\"chem\">X2</span> 是<strong>溴</strong>。鹵素可以置換活性比它低的鹵素的鹵離子。測試 2 顯示 <span class=\"chem\">X2</span> 的活性比碘高，所以它不是碘。測試 1 顯示 <span class=\"chem\">X2</span> 不能置換氯離子，所以它的活性比氯低（它也不是氯，因為氯不會與自己的離子反應）。沿第 17 族向下，活潑性減少，所以 <span class=\"chem\">X2</span> 是溴。</p><div class=\"worked__math\"><span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span></div>",
      markscheme: [
        // EN: X<sub>2</sub> is bromine / Br<sub>2</sub>.
        "X<sub>2</sub> 是溴／Br<sub>2</sub>。",
        // EN: It displaces iodide ions, so it is more reactive than iodine, but it does not displace chloride ions, so it is less reactive than chlorine (accept: reactivity decreases down group 17).
        "它可以置換碘離子，所以活性比碘高；但它不能置換氯離子，所以活性比氯低（接受：沿第 17 族向下，活潑性減少）。",
        // EN: <span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span> (balanced, with state symbols).
        "<span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>（已配平，並有物態符號）。",
      ],
    },

    // ── s3-1-q024 · mcq · foundation · SL · Structure 3.1.5 · 1 mark
    "s3-1-q024": {
      // EN: <p>Aluminium oxide is described as an amphoteric oxide. What does “amphoteric” mean?</p>
      stem: "<p>氧化鋁 (aluminium oxide) 稱為兩性氧化物 (amphoteric oxide)。「兩性 (amphoteric)」是甚麼意思？</p>",
      options: [
        // EN: The oxide is neutral: it reacts with neither acids nor bases.
        "這種氧化物是中性的：它與酸和鹼都不反應。",
        // EN: The oxide reacts with both acids and bases.
        "這種氧化物與酸和鹼都能反應。",
        // EN: The oxide dissolves in water to give a solution with pH 7.
        "這種氧化物溶於水，得出 pH 7 的溶液。",
        // EN: The oxide contains both a metal and a non-metal.
        "這種氧化物同時含有金屬和非金屬。",
      ],
      hints: [
        // EN: Think about where aluminium is in period 3: between the metals with basic oxides and the non-metals with acidic oxides.
        "想想鋁在第 3 週期的位置：在氧化物呈鹼性的金屬，和氧化物呈酸性的非金屬之間。",
      ],
      // EN: <p>An amphoteric oxide can act as a base and as an acid: it <strong>reacts with both acids and bases</strong>. Across a period the oxides change from basic (metals, on the left) through amphoteric to acidic (non-metals, on the right). Aluminium oxide is in the middle.</p>
      solution: "<p>兩性氧化物既可以作為鹼，也可以作為酸：它<strong>與酸和鹼都能反應</strong>。橫跨一個週期，氧化物由鹼性（左邊的金屬）經兩性變為酸性（右邊的非金屬）。氧化鋁在中間。</p>",
      misconception: {
        // EN (option A): Amphoteric is not the same as neutral. A neutral oxide reacts with neither. An amphoteric oxide reacts with both.
        "0": "兩性不等於中性。中性氧化物與兩者都不反應。兩性氧化物與兩者都反應。",
        // EN (option C): Amphoteric describes how the oxide reacts, not the pH of a solution. Aluminium oxide does not dissolve in water.
        "2": "兩性描述的是氧化物怎樣反應，不是溶液的 pH。氧化鋁不溶於水。",
        // EN (option D): Every metal oxide contains a metal and a non-metal (oxygen). Amphoteric describes acid–base behaviour.
        "3": "每種金屬氧化物都含有金屬和非金屬（氧）。兩性描述的是酸鹼性質。",
      },
    },

    // ── s3-1-q025 · order · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q025": {
      // EN: <p>Put these period 3 oxides in order, from the <strong>most basic</strong> (top) to the <strong>most acidic</strong> (bottom).</p>
      stem: "<p>把這些第 3 週期的氧化物排列次序，由<strong>鹼性最強</strong>（最上）到<strong>酸性最強</strong>（最下）。</p>",
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
        "在第 3 週期找出 Na、Mg、Al 和 S。",
        // EN: Metal oxides are basic. Non-metal oxides are acidic. The change across the period is gradual.
        "金屬氧化物是鹼性的。非金屬氧化物是酸性的。橫跨週期的變化是逐漸的。",
      ],
      // EN: <p>Across period 3 the elements change from metals to non-metals, and the oxides change from basic to acidic. <span class="chem">Na2O</span> is strongly basic and <span class="chem">MgO</span> is basic. <span class="chem">Al2O3</span> is amphoteric. <span class="chem">SO3</span> is a non-metal oxide and is strongly acidic.</p>
      solution: "<p>橫跨第 3 週期，元素由金屬變為非金屬，氧化物由鹼性變為酸性。<span class=\"chem\">Na2O</span> 是強鹼性，<span class=\"chem\">MgO</span> 是鹼性。<span class=\"chem\">Al2O3</span> 是兩性。<span class=\"chem\">SO3</span> 是非金屬氧化物，是強酸性。</p>",
    },

    // ── s3-1-q026 · short · exam · SL · Structure 3.1.5 · 2 marks
    "s3-1-q026": {
      // EN: <p>Deduce equations, including state symbols, for the reactions with water of:</p><ul><li>(a) lithium oxide</li><li>(b) calcium oxide.</li></ul>
      stem: "<p>推斷 (deduce) 以下物質與水反應的方程式，須包括物態符號：</p><ul><li>(a) 氧化鋰 (lithium oxide)</li><li>(b) 氧化鈣 (calcium oxide)。</li></ul>",
      hints: [
        // EN: Metal oxide + water → metal hydroxide.
        "金屬氧化物 + 水 → 金屬氫氧化物。",
        // EN: Lithium forms <span class="chem">Li+</span> and calcium forms <span class="chem">Ca^2+</span>. Write each hydroxide formula first, then balance.
        "鋰形成 <span class=\"chem\">Li+</span>，鈣形成 <span class=\"chem\">Ca^2+</span>。先寫出每種氫氧化物的化學式，再配平。",
      ],
      // EN: <div class="worked__math"><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></div><div class="worked__math"><span class="chem">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span></div><p>An oxide of a group 1 or group 2 metal reacts with water to form the metal hydroxide only. No hydrogen forms. The solutions are alkaline.</p>
      answer: "<div class=\"worked__math\"><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></div><div class=\"worked__math\"><span class=\"chem\">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span></div><p>第 1 族或第 2 族金屬的氧化物與水反應，只生成金屬氫氧化物。沒有氫生成。溶液呈鹼性。</p>",
      markscheme: [
        // EN: <span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span> (balanced, with state symbols).
        "<span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span>（已配平，並有物態符號）。",
        // EN: <span class="chem">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span> (with state symbols; accept <span class="chem">Ca(OH)2(s)</span>).
        "<span class=\"chem\">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span>（有物態符號；接受 <span class=\"chem\">Ca(OH)2(s)</span>）。",
      ],
    },

    // ── s3-1-q027 · mcq · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q027": {
      // EN: <p>Which statement about ocean acidification is correct?</p>
      stem: "<p>以下哪一項關於海洋酸化 (ocean acidification) 的敘述正確？</p>",
      options: [
        // EN: It is caused mainly by acid rain falling into the sea.
        "主要成因是酸雨落入海中。",
        // EN: It is caused by sulfur dioxide from the sea floor dissolving in sea water.
        "成因是海床的二氧化硫溶於海水。",
        // EN: It is caused by more carbon dioxide from the atmosphere dissolving in sea water.
        "成因是大氣中有更多二氧化碳溶於海水。",
        // EN: It is caused by metal oxides dissolving in sea water.
        "成因是金屬氧化物溶於海水。",
      ],
      hints: [
        // EN: Which gas in the atmosphere is increasing in concentration?
        "大氣中哪一種氣體的濃度正在上升？",
        // EN: Is the oxide of carbon acidic or basic?
        "碳的氧化物是酸性還是鹼性？",
      ],
      // EN: <p>Carbon dioxide is an acidic non-metal oxide. As the level of <span class="chem">CO2</span> in the atmosphere rises, more of it dissolves in sea water and forms carbonic acid:</p><div class="worked__math"><span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>This lowers the pH of the sea water. The process is called ocean acidification.</p>
      solution: "<p>二氧化碳是酸性的非金屬氧化物。大氣中的 <span class=\"chem\">CO2</span> 含量上升，就有更多二氧化碳溶於海水，生成碳酸 (carbonic acid)：</p><div class=\"worked__math\"><span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>這會降低海水的 pH。這個過程稱為海洋酸化。</p>",
      misconception: {
        // EN (option A): Acid rain and ocean acidification are two different problems. Acid rain is caused by oxides of sulfur and nitrogen. Ocean acidification is caused by carbon dioxide.
        "0": "酸雨和海洋酸化是兩個不同的問題。酸雨由硫和氮的氧化物造成。海洋酸化由二氧化碳造成。",
        // EN (option B): Sulfur dioxide is linked to acid rain. The cause of ocean acidification is the rising level of carbon dioxide in the atmosphere.
        "1": "二氧化硫與酸雨有關。海洋酸化的成因是大氣中二氧化碳含量上升。",
        // EN (option D): Metal oxides are basic. They would raise the pH, not lower it.
        "3": "金屬氧化物是鹼性的。它們會令 pH 上升，不是下降。",
      },
    },

    // ── s3-1-q028 · short · challenge · SL · Structure 3.1.5 · 3 marks
    "s3-1-q028": {
      // EN: <p>Some coal contains sulfur. When the coal burns, the sulfur also burns. Explain how this leads to acid rain. Include two equations with state symbols.</p>
      stem: "<p>有些煤含有硫。煤燃燒時，硫也會燃燒。解釋 (explain) 這怎樣導致酸雨 (acid rain)。答案須包括兩條附有物態符號的方程式。</p>",
      hints: [
        // EN: First equation: sulfur burning in oxygen.
        "第一條方程式：硫在氧中燃燒。",
        // EN: Second equation: the oxide reacting with water. A non-metal oxide and water form an acid.
        "第二條方程式：氧化物與水反應。非金屬氧化物與水生成酸。",
        // EN: Finish by saying what the acid does to the rain.
        "最後說明這種酸對雨水有甚麼影響。",
      ],
      // EN: <p>The sulfur burns to form sulfur dioxide, a gaseous non-metal oxide:</p><div class="worked__math"><span class="chem">S(s) + O2(g) -> SO2(g)</span></div><p>Sulfur dioxide is an acidic oxide. It reacts with water in the atmosphere to form an acid:</p><div class="worked__math"><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>The acid lowers the pH of the rain. (Sulfur dioxide can also be oxidized in the air to <span class="chem">SO3</span>, which reacts with water to form sulfuric acid: <span class="chem">SO3(g) + H2O(l) -> H2SO4(aq)</span>.)</p>
      answer: "<p>硫燃燒生成二氧化硫，它是氣態的非金屬氧化物：</p><div class=\"worked__math\"><span class=\"chem\">S(s) + O2(g) -> SO2(g)</span></div><p>二氧化硫是酸性氧化物。它與大氣中的水反應，生成酸：</p><div class=\"worked__math\"><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>這種酸令雨水的 pH 下降。（二氧化硫也可以在空氣中被氧化成 <span class=\"chem\">SO3</span>，再與水反應生成硫酸：<span class=\"chem\">SO3(g) + H2O(l) -> H2SO4(aq)</span>。）</p>",
      markscheme: [
        // EN: <span class="chem">S(s) + O2(g) -> SO2(g)</span>
        "<span class=\"chem\">S(s) + O2(g) -> SO2(g)</span>",
        // EN: <span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span> (accept →; accept <span class="chem">SO3(g) + H2O(l) -> H2SO4(aq)</span>).
        "<span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span>（接受 →；接受 <span class=\"chem\">SO3(g) + H2O(l) -> H2SO4(aq)</span>）。",
        // EN: Sulfur dioxide is an acidic (non-metal) oxide that dissolves in / reacts with rain water to form an acid, so the pH of the rain is lowered.
        "二氧化硫是酸性（非金屬）氧化物，溶於雨水／與雨水反應生成酸，所以雨水的 pH 下降。",
      ],
    },

    // ── s3-1-q029 · mcq · challenge · SL · Structure 3.1.5 · 1 mark
    "s3-1-q029": {
      // EN: <p>Selenium is directly below sulfur in group 16. Selenium dioxide, <span class="chem">SeO2</span>, is a solid that dissolves in water. Which is the best prediction for this reaction?</p>
      stem: "<p>硒在第 16 族中位於硫的正下方。二氧化硒 (selenium dioxide) <span class=\"chem\">SeO2</span> 是可溶於水的固體。以下哪一項是對這個反應的最佳預測？</p>",
      options: [
        // EN: An alkaline solution forms: <span class="chem">SeO2(s) + 2H2O(l) -> Se(OH)4(aq)</span>
        "生成鹼性溶液：<span class=\"chem\">SeO2(s) + 2H2O(l) -> Se(OH)4(aq)</span>",
        // EN: A neutral solution forms, because <span class="chem">SeO2</span> is amphoteric.
        "生成中性溶液，因為 <span class=\"chem\">SeO2</span> 是兩性的。",
        // EN: An acidic solution forms: <span class="chem">SeO2(s) + H2O(l) -> H2SeO4(aq)</span>
        "生成酸性溶液：<span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO4(aq)</span>",
        // EN: An acidic solution forms: <span class="chem">SeO2(s) + H2O(l) -> H2SeO3(aq)</span>
        "生成酸性溶液：<span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO3(aq)</span>",
      ],
      hints: [
        // EN: Is selenium a metal or a non-metal? Use its group.
        "硒是金屬還是非金屬？根據它所屬的族判斷。",
        // EN: Use the reaction of <span class="chem">SO2</span> with water as your model.
        "以 <span class=\"chem\">SO2</span> 與水的反應作為參照。",
        // EN: Check that the equation you choose is balanced.
        "檢查你選的方程式是否已配平。",
      ],
      // EN: <p>Elements in the same group have similar chemical properties. Sulfur dioxide is an acidic non-metal oxide:</p><div class="worked__math"><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>Selenium is also a non-metal in group 16, so <span class="chem">SeO2</span> should react in the same way:</p><div class="worked__math"><span class="chem">SeO2(s) + H2O(l) -> H2SeO3(aq)</span></div><p>Check: Se 1 = 1; O 3 = 3; H 2 = 2. The solution is acidic.</p>
      solution: "<p>同一族的元素有相似的化學性質。二氧化硫是酸性的非金屬氧化物：</p><div class=\"worked__math\"><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>硒也是第 16 族的非金屬，所以 <span class=\"chem\">SeO2</span> 應該以同樣方式反應：</p><div class=\"worked__math\"><span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO3(aq)</span></div><p>檢查：Se 1 = 1；O 3 = 3；H 2 = 2。溶液呈酸性。</p>",
      misconception: {
        // EN (option A): Hydroxides form from the oxides of metals in groups 1 and 2. Selenium is a non-metal, like sulfur, so its oxide is acidic.
        "0": "氫氧化物由第 1 和第 2 族金屬的氧化物生成。硒像硫一樣是非金屬，所以它的氧化物是酸性的。",
        // EN (option B): Amphoteric does not mean neutral, and amphoteric oxides are found near the metal–non-metal boundary. Selenium is a non-metal in group 16.
        "1": "兩性不等於中性，而且兩性氧化物出現在金屬與非金屬的分界線附近。硒是第 16 族的非金屬。",
        // EN (option C): The oxide is acidic, but this equation is not balanced: 3 oxygen atoms on the left and 4 on the right. Compare with <span class="chem">SO2</span>, which forms <span class="chem">H2SO3</span>.
        "2": "這種氧化物是酸性的，但這條方程式未配平：左邊有 3 個氧原子，右邊有 4 個。與 <span class=\"chem\">SO2</span> 比較，它生成的是 <span class=\"chem\">H2SO3</span>。",
      },
    },

    // ── s3-1-q030 · mcq · foundation · SL · Structure 3.1.6 · 1 mark
    "s3-1-q030": {
      // EN: <p>Which is the oxidation state of sulfur in the sulfate ion, <span class="chem">SO4^2-</span>, written correctly?</p>
      stem: "<p>以下哪一項正確寫出硫酸根離子 (sulfate ion) <span class=\"chem\">SO4^2-</span> 中硫的氧化態 (oxidation state)？</p>",
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
        "氧在大多數化合物中是 −2。",
        // EN: The oxidation states in an ion add up to the charge on the ion.
        "離子中各氧化態的總和等於離子的電荷。",
        // EN: Write the sign first, then the number.
        "先寫正負號，再寫數字。",
      ],
      // EN: <p>Let the oxidation state of sulfur be <i>x</i>. Oxygen is −2.</p><div class="worked__math"><i>x</i> + 4(−2) = −2</div><div class="worked__math"><i>x</i> = −2 + 8 = <b>+6</b></div><p>Write the sign first and then the number: +6. A Roman numeral (VI) is also accepted. “6+” and “6” do not score.</p>
      solution: "<p>設硫的氧化態為 <i>x</i>。氧是 −2。</p><div class=\"worked__math\"><i>x</i> + 4(−2) = −2</div><div class=\"worked__math\"><i>x</i> = −2 + 8 = <b>+6</b></div><p>先寫正負號，再寫數字：+6。寫羅馬數字 (VI) 也可以。「6+」和「6」都不得分。</p>",
      misconception: {
        // EN (option A): The number is right, but the notation is not. An oxidation state has the sign first: +6. “6+” is how you write the charge on an ion. IB markschemes reject “6+”.
        "0": "數字正確，但寫法不對。氧化態要先寫正負號：+6。「6+」是離子電荷的寫法。IB 評分準則不接受「6+」。",
        // EN (option C): This is the charge on the whole ion. It is the <em>sum</em> of all the oxidation states, not the oxidation state of sulfur.
        "2": "這是整個離子的電荷。它是所有氧化態的<em>總和</em>，不是硫的氧化態。",
        // EN (option D): This treats the ion as if it had no charge. The oxidation states must add up to the charge on the ion, −2, not to zero.
        "3": "這是把離子當作不帶電荷。氧化態的總和必須等於離子的電荷 −2，不是零。",
      },
    },

    // ── s3-1-q031 · mcq · foundation · SL · Structure 3.1.6 · 1 mark
    "s3-1-q031": {
      // EN: <p>The oxidation state of each chlorine atom in <span class="chem">Cl2</span> is 0. Which statement explains this?</p>
      stem: "<p><span class=\"chem\">Cl2</span> 中每個氯原子的氧化態都是 0。以下哪一項解釋了這一點？</p>",
      options: [
        // EN: The molecule has no overall charge.
        "分子整體不帶電荷。",
        // EN: Each chlorine atom has seven valence electrons.
        "每個氯原子有七個價電子。",
        // EN: The two atoms are identical, so the bonding electrons are shared equally and no electrons are transferred.
        "兩個原子完全相同，所以鍵合電子被平均共用，沒有電子轉移。",
        // EN: The bond in <span class="chem">Cl2</span> is ionic, so the two charges cancel.
        "<span class=\"chem\">Cl2</span> 中的鍵是離子鍵，所以兩個電荷互相抵銷。",
      ],
      hints: [
        // EN: An oxidation state is the charge an atom would have if the compound were made of ions.
        "氧化態是假設化合物由離子組成時，原子所帶的電荷。",
        // EN: To imagine ions, you give the bonding electrons to the more electronegative atom. What if both atoms are the same?
        "想像離子時，要把鍵合電子歸給電負性較高的原子。如果兩個原子相同呢？",
      ],
      // EN: <p>The oxidation state shows the number of electrons transferred in forming a bond. In an element, the atoms are identical and have the same electronegativity. The bonding electrons are <strong>shared equally</strong>, so <strong>no electrons are transferred</strong> and each atom has oxidation state 0.</p>
      solution: "<p>氧化態顯示成鍵時轉移了多少個電子。在元素中，原子完全相同，電負性也相同。鍵合電子被<strong>平均共用</strong>，所以<strong>沒有電子轉移</strong>，每個原子的氧化態都是 0。</p>",
      misconception: {
        // EN (option A): True, but it is not the reason. HCl also has no overall charge, yet its atoms have oxidation states +1 and −1.
        "0": "這句話正確，但不是原因。HCl 整體也不帶電荷，但它的原子的氧化態是 +1 和 −1。",
        // EN (option B): True, but the number of valence electrons does not fix the oxidation state. Chlorine is −1 in NaCl and 0 in <span class="chem">Cl2</span>.
        "1": "這句話正確，但價電子數目不能決定氧化態。氯在 NaCl 中是 −1，在 <span class=\"chem\">Cl2</span> 中是 0。",
        // EN (option D): The bond in <span class="chem">Cl2</span> is covalent. Two identical atoms cannot transfer electrons to each other.
        "3": "<span class=\"chem\">Cl2</span> 中的鍵是共價鍵。兩個相同的原子不能互相轉移電子。",
      },
    },

    // ── s3-1-q032 · numeric · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q032": {
      // EN: <p>Deduce the oxidation state of oxygen in hydrogen peroxide, <span class="chem">H2O2</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>推斷 (deduce) 過氧化氫 (hydrogen peroxide) <span class=\"chem\">H2O2</span> 中氧的氧化態。</p><p>先輸入正負號，再輸入數字，例如 +3 或 −3。</p>",
      hints: [
        // EN: Hydrogen is +1 here, because it is bonded to a non-metal.
        "這裏氫是 +1，因為它與非金屬鍵合。",
        // EN: The oxidation states in a compound add up to zero. Do not assume that oxygen is −2.
        "化合物中各氧化態的總和是零。不要假設氧是 −2。",
      ],
      // EN: <p>Hydrogen is +1. Let the oxidation state of oxygen be <i>x</i>.</p><div class="worked__math">2(+1) + 2<i>x</i> = 0</div><div class="worked__math"><i>x</i> = <b>−1</b></div><p>Oxygen is −2 in most compounds, but in <strong>peroxides</strong> it is −1. Always work it out from the other atoms.</p>
      solution: "<p>氫是 +1。設氧的氧化態為 <i>x</i>。</p><div class=\"worked__math\">2(+1) + 2<i>x</i> = 0</div><div class=\"worked__math\"><i>x</i> = <b>−1</b></div><p>氧在大多數化合物中是 −2，但在<strong>過氧化物</strong> (peroxides) 中是 −1。每次都要根據其他原子計算出來。</p>",
      // EN: In an exam, write −1 with the sign first.
      correctNote: "考試時要寫 −1，正負號在前。",
    },

    // ── s3-1-q033 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q033": {
      // EN: <p>In which compound does hydrogen have the oxidation state −1?</p>
      stem: "<p>在以下哪一種化合物中，氫的氧化態是 −1？</p>",
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
        "氫與電負性較高的原子鍵合時是 +1。",
        // EN: Which compound has hydrogen bonded to a metal?
        "哪一種化合物中的氫與金屬鍵合？",
      ],
      // EN: <p>Sodium is a group 1 metal and is always +1 in its compounds. In NaH the oxidation states add up to zero, so hydrogen is <strong>−1</strong>. Hydrogen is −1 in <strong>metal hydrides</strong>, because the metal is less electronegative than hydrogen.</p>
      solution: "<p>鈉是第 1 族金屬，在化合物中一定是 +1。NaH 中各氧化態的總和是零，所以氫是 <strong>−1</strong>。氫在<strong>金屬氫化物</strong> (metal hydrides) 中是 −1，因為金屬的電負性比氫低。</p>",
      misconception: {
        // EN (option A): Nitrogen is more electronegative than hydrogen. In <span class="chem">NH3</span> nitrogen is −3 and hydrogen is +1.
        "0": "氮的電負性比氫高。在 <span class=\"chem\">NH3</span> 中，氮是 −3，氫是 +1。",
        // EN (option B): In hydrogen peroxide it is the <em>oxygen</em> that has the unusual value, −1. Hydrogen is +1.
        "1": "在過氧化氫中，數值特別的是<em>氧</em>，它是 −1。氫是 +1。",
        // EN (option C): Chlorine is more electronegative than hydrogen. In HCl hydrogen is +1 and chlorine is −1.
        "2": "氯的電負性比氫高。在 HCl 中，氫是 +1，氯是 −1。",
      },
    },

    // ── s3-1-q034 · numeric · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q034": {
      // EN: <p>Deduce the oxidation state of chromium in the dichromate ion, <span class="chem">Cr2O7^2-</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>推斷 (deduce) 重鉻酸根離子 (dichromate ion) <span class=\"chem\">Cr2O7^2-</span> 中鉻的氧化態。</p><p>先輸入正負號，再輸入數字，例如 +3 或 −3。</p>",
      hints: [
        // EN: Oxygen is −2. There are seven oxygen atoms.
        "氧是 −2。共有七個氧原子。",
        // EN: The total must equal the charge on the ion, −2.
        "總和必須等於離子的電荷 −2。",
        // EN: There are two chromium atoms. Divide the total for chromium by 2.
        "有兩個鉻原子。把鉻的總數除以 2。",
      ],
      // EN: <p>Let the oxidation state of chromium be <i>x</i>. Oxygen is −2.</p><div class="worked__math">2<i>x</i> + 7(−2) = −2</div><div class="worked__math">2<i>x</i> = −2 + 14 = +12</div><div class="worked__math"><i>x</i> = <b>+6</b></div><p>The ion can be named dichromate(VI).</p>
      solution: "<p>設鉻的氧化態為 <i>x</i>。氧是 −2。</p><div class=\"worked__math\">2<i>x</i> + 7(−2) = −2</div><div class=\"worked__math\">2<i>x</i> = −2 + 14 = +12</div><div class=\"worked__math\"><i>x</i> = <b>+6</b></div><p>這個離子可以稱為重鉻酸根(VI)離子 (dichromate(VI))。</p>",
      // EN: In an exam, write +6 with the sign first. “6+” and “6” do not score.
      correctNote: "考試時要寫 +6，正負號在前。「6+」和「6」都不得分。",
    },

    // ── s3-1-q035 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q035": {
      // EN: <p>What is the formula of copper(I) oxide?</p>
      stem: "<p>氧化銅(I) (copper(I) oxide) 的化學式是甚麼？</p>",
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
        "羅馬數字 (I) 表示銅的氧化態是 +1。",
        // EN: Oxide is <span class="chem">O^2-</span>. How many +1 ions balance one 2− ion?
        "氧離子是 <span class=\"chem\">O^2-</span>。要多少個 +1 離子才能平衡一個 2− 離子？",
      ],
      // EN: <p>The Roman numeral gives the oxidation state of copper: +1. Oxygen is −2. Two copper atoms at +1 balance one oxygen at −2:</p><div class="worked__math">2(+1) + (−2) = 0</div><p>The formula is <span class="chem">Cu2O</span>.</p>
      solution: "<p>羅馬數字給出銅的氧化態：+1。氧是 −2。兩個 +1 的銅原子平衡一個 −2 的氧：</p><div class=\"worked__math\">2(+1) + (−2) = 0</div><p>化學式是 <span class=\"chem\">Cu2O</span>。</p>",
      misconception: {
        // EN (option A): In CuO, copper is +2 (it balances one <span class="chem">O^2-</span>). This is copper(II) oxide.
        "0": "在 CuO 中，銅是 +2（它平衡一個 <span class=\"chem\">O^2-</span>）。這是氧化銅(II)。",
        // EN (option B): The Roman numeral gives the oxidation state of the metal, not the number of oxygen atoms. In <span class="chem">CuO2</span> copper would be +4.
        "1": "羅馬數字給出金屬的氧化態，不是氧原子的數目。在 <span class=\"chem\">CuO2</span> 中，銅會是 +4。",
        // EN (option D): In <span class="chem">Cu2O3</span> copper would be +3: 2<i>x</i> + 3(−2) = 0. That would be copper(III) oxide.
        "3": "在 <span class=\"chem\">Cu2O3</span> 中，銅會是 +3：2<i>x</i> + 3(−2) = 0。那會是氧化銅(III)。",
      },
    },

    // ── s3-1-q036 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q036": {
      // EN: <p>The sulfate(IV) ion is also called the sulfite ion. Which is its formula?</p>
      stem: "<p>硫酸根(IV)離子 (sulfate(IV) ion) 又稱為亞硫酸根離子 (sulfite ion)。以下哪一個是它的化學式？</p>",
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
        "羅馬數字 (IV) 是硫的氧化態：+4。",
        // EN: Test each ion: sulfur + oxygens (each −2) = charge on the ion.
        "逐一測試每個離子：硫 + 各個氧（每個 −2）= 離子的電荷。",
      ],
      // EN: <p>Sulfate(IV) means sulfur has oxidation state +4. Test <span class="chem">SO3^2-</span>:</p><div class="worked__math"><i>x</i> + 3(−2) = −2</div><div class="worked__math"><i>x</i> = <b>+4</b></div><p>So <span class="chem">SO3^2-</span> is sulfate(IV), or sulfite. <span class="chem">SO4^2-</span> is sulfate(VI), or sulfate. In the same way, <span class="chem">NO2-</span> is nitrite (nitrogen +3) and <span class="chem">NO3-</span> is nitrate (nitrogen +5). IB accepts both kinds of name.</p>
      solution: "<p>硫酸根(IV) 表示硫的氧化態是 +4。測試 <span class=\"chem\">SO3^2-</span>：</p><div class=\"worked__math\"><i>x</i> + 3(−2) = −2</div><div class=\"worked__math\"><i>x</i> = <b>+4</b></div><p>所以 <span class=\"chem\">SO3^2-</span> 是硫酸根(IV)，即亞硫酸根 (sulfite)。<span class=\"chem\">SO4^2-</span> 是硫酸根(VI)，即硫酸根 (sulfate)。同樣，<span class=\"chem\">NO2-</span> 是亞硝酸根 (nitrite)（氮是 +3），<span class=\"chem\">NO3-</span> 是硝酸根 (nitrate)（氮是 +5）。兩種名稱 IB 都接受。</p>",
      misconception: {
        // EN (option B): In <span class="chem">SO4^2-</span> sulfur is +6: <i>x</i> + 4(−2) = −2. This is sulfate(VI), usually called sulfate.
        "1": "在 <span class=\"chem\">SO4^2-</span> 中，硫是 +6：<i>x</i> + 4(−2) = −2。這是硫酸根(VI)，通常稱為硫酸根 (sulfate)。",
        // EN (option C): <span class="chem">SO3</span> is a molecule, sulfur trioxide, not an ion. Sulfur is +6 in it.
        "2": "<span class=\"chem\">SO3</span> 是分子，即三氧化硫，不是離子。其中的硫是 +6。",
        // EN (option D): <span class="chem">S^2-</span> is the sulfide ion. Sulfur is −2. Names ending in -ate or -ite contain oxygen.
        "3": "<span class=\"chem\">S^2-</span> 是硫離子 (sulfide ion)。硫是 −2。英文名稱以 -ate 或 -ite 結尾的離子含有氧。",
      },
    },

    // ── s3-1-q037 · order · challenge · SL · Structure 3.1.6 · 1 mark
    "s3-1-q037": {
      // EN: <p>Put these species in order of <strong>increasing oxidation state of nitrogen</strong> (most negative first).</p>
      stem: "<p>把這些物種按<strong>氮的氧化態由低至高</strong>排列（最負的排最先）。</p>",
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
        "在這些物種中，氫全是 +1，氧全是 −2。",
        // EN: For an ion, the total equals the charge on the ion. For an element, the oxidation state is 0.
        "離子的總和等於離子的電荷。元素的氧化態是 0。",
        // EN: In <span class="chem">N2H4</span> there are two nitrogen atoms: divide by 2.
        "<span class=\"chem\">N2H4</span> 有兩個氮原子：要除以 2。",
      ],
      // EN: <div class="worked__math"><span class="chem">NH4+</span>: <i>x</i> + 4(+1) = +1, so <i>x</i> = −3</div><div class="worked__math"><span class="chem">N2H4</span>: 2<i>x</i> + 4(+1) = 0, so <i>x</i> = −2</div><div class="worked__math"><span class="chem">N2</span>: element, so <i>x</i> = 0</div><div class="worked__math"><span class="chem">NO2-</span>: <i>x</i> + 2(−2) = −1, so <i>x</i> = +3</div><div class="worked__math"><span class="chem">NO3-</span>: <i>x</i> + 3(−2) = −1, so <i>x</i> = +5</div><p>Nitrogen shows oxidation states from −3 to +5.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">NH4+</span>: <i>x</i> + 4(+1) = +1，所以 <i>x</i> = −3</div><div class=\"worked__math\"><span class=\"chem\">N2H4</span>: 2<i>x</i> + 4(+1) = 0，所以 <i>x</i> = −2</div><div class=\"worked__math\"><span class=\"chem\">N2</span>: 元素，所以 <i>x</i> = 0</div><div class=\"worked__math\"><span class=\"chem\">NO2-</span>: <i>x</i> + 2(−2) = −1，所以 <i>x</i> = +3</div><div class=\"worked__math\"><span class=\"chem\">NO3-</span>: <i>x</i> + 3(−2) = −1，所以 <i>x</i> = +5</div><p>氮的氧化態可以由 −3 到 +5。</p>",
    },

    // ── s3-1-q038 · mcq · foundation · AHL · Structure 3.1.7 · 1 mark
    "s3-1-q038": {
      // EN: <p>The table shows first ionization energies from the data booklet for period 2.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First ionization energy / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Li</th><th class="num" scope="col">Be</th><th class="num" scope="col">B</th><th class="num" scope="col">C</th><th class="num" scope="col">N</th><th class="num" scope="col">O</th><th class="num" scope="col">F</th><th class="num" scope="col">Ne</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">520</td><td class="num">900</td><td class="num">801</td><td class="num">1086</td><td class="num">1402</td><td class="num">1314</td><td class="num">1681</td><td class="num">2081</td></tr></tbody></table></div><p>The general trend is an increase. Which two elements have a <strong>lower</strong> first ionization energy than the element before them?</p>
      stem: "<p>下表列出數據手冊中第 2 週期元素的第一電離能。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>第一電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">Li</th><th class=\"num\" scope=\"col\">Be</th><th class=\"num\" scope=\"col\">B</th><th class=\"num\" scope=\"col\">C</th><th class=\"num\" scope=\"col\">N</th><th class=\"num\" scope=\"col\">O</th><th class=\"num\" scope=\"col\">F</th><th class=\"num\" scope=\"col\">Ne</th></tr></thead><tbody><tr><th scope=\"row\">電離能</th><td class=\"num\">520</td><td class=\"num\">900</td><td class=\"num\">801</td><td class=\"num\">1086</td><td class=\"num\">1402</td><td class=\"num\">1314</td><td class=\"num\">1681</td><td class=\"num\">2081</td></tr></tbody></table></div><p>整體趨勢是增加。哪兩種元素的第一電離能比前一種元素<strong>低</strong>？</p>",
      options: [
        // EN: Be and N
        "Be 和 N",
        // EN: B and O
        "B 和 O",
        // EN: C and F
        "C 和 F",
        // EN: Li and Ne
        "Li 和 Ne",
      ],
      hints: [
        // EN: Go along the row. Compare each value with the one to its left.
        "沿着這一行看。把每個數值與它左邊的數值比較。",
        // EN: There are two places where the value goes down.
        "有兩處數值下降。",
      ],
      // EN: <p>The value falls from Be (900) to <strong>B</strong> (801), and from N (1402) to <strong>O</strong> (1314). These two decreases are called discontinuities.</p><ul><li>B: the electron is removed from the 2p sublevel, which is higher in energy than the 2s sublevel.</li><li>O: the electron is removed from a 2p orbital that holds two electrons. The two electrons repel each other, so one is removed more easily.</li></ul>
      solution: "<p>數值由 Be (900) 降至 <strong>B</strong> (801)，又由 N (1402) 降至 <strong>O</strong> (1314)。這兩處下降稱為不連續處 (discontinuities)。</p><ul><li>B：電子從 2p 亞層移走，2p 亞層的能量比 2s 亞層高。</li><li>O：電子從一個有兩個電子的 2p 軌態移走。這兩個電子互相排斥，所以其中一個較容易移走。</li></ul>",
      misconception: {
        // EN (option A): Be (900) is higher than Li (520), and N (1402) is higher than C (1086). These are the elements that come <em>before</em> each decrease.
        "0": "Be (900) 比 Li (520) 高，N (1402) 比 C (1086) 高。這兩種是每次下降<em>之前</em>的元素。",
        // EN (option C): C (1086) is higher than B (801), and F (1681) is higher than O (1314). These follow the general trend.
        "2": "C (1086) 比 B (801) 高，F (1681) 比 O (1314) 高。它們符合整體趨勢。",
        // EN (option D): Li is the first element in the period, and Ne has the highest value of all.
        "3": "Li 是這個週期的第一種元素，而 Ne 的數值是最高的。",
      },
    },

    // ── s3-1-q039 · short · exam · AHL · Structure 3.1.7 · 2 marks
    "s3-1-q039": {
      // EN: <p>The first ionization energy of magnesium is 738 kJ mol<sup>−1</sup>. The first ionization energy of aluminium is 578 kJ mol<sup>−1</sup>.</p><p>Explain why the value for aluminium is lower, even though aluminium has a greater nuclear charge.</p>
      stem: "<p>鎂的第一電離能是 738 kJ mol<sup>−1</sup>。鋁的第一電離能是 578 kJ mol<sup>−1</sup>。</p><p>解釋 (explain) 為甚麼鋁的核電荷較大，數值卻較低。</p>",
      hints: [
        // EN: Write the electron configuration of each atom.
        "寫出每個原子的電子排佈。",
        // EN: From which sublevel is the electron removed in each atom? Which sublevel is higher in energy?
        "每個原子的電子是從哪一個亞層移走的？哪一個亞層的能量較高？",
      ],
      // EN: <p>Mg is <span class="mono nowrap">[Ne] 3s<sup>2</sup></span> and Al is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span>. In magnesium the electron is removed from the 3s sublevel. In aluminium it is removed from the 3p sublevel. The 3p sublevel is higher in energy than the 3s sublevel, so less energy is needed to remove the electron.</p><p>Do not write that a full 3s sublevel is “specially stable”. Base your answer on the energy of the electron that is removed.</p>
      answer: "<p>Mg 是 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup></span>，Al 是 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span>。鎂的電子從 3s 亞層移走。鋁的電子從 3p 亞層移走。3p 亞層的能量比 3s 亞層高，所以移走電子所需的能量較少。</p><p>不要寫全滿的 3s 亞層「特別穩定」。答案要以被移走電子的能量為依據。</p>",
      markscheme: [
        // EN: In Al the electron is removed from the 3p sublevel, and in Mg from the 3s sublevel.
        "Al 的電子從 3p 亞層移走，Mg 的電子從 3s 亞層移走。",
        // EN: The 3p sublevel is higher in energy than the 3s sublevel (accept: the 3p electron is further from the nucleus / is also shielded by the 3s electrons), so less energy is needed.
        "3p 亞層的能量比 3s 亞層高（接受：3p 電子離原子核較遠／還受到 3s 電子屏蔽），所以所需的能量較少。",
      ],
    },

    // ── s3-1-q040 · short · exam · AHL · Structure 3.1.7 · 2 marks
    "s3-1-q040": {
      // EN: <p>The first ionization energy of phosphorus is 1012 kJ mol<sup>−1</sup>. The first ionization energy of sulfur is 1000 kJ mol<sup>−1</sup>.</p><p>Explain why the value for sulfur is lower, even though sulfur has a greater nuclear charge.</p>
      stem: "<p>磷的第一電離能是 1012 kJ mol<sup>−1</sup>。硫的第一電離能是 1000 kJ mol<sup>−1</sup>。</p><p>解釋 (explain) 為甚麼硫的核電荷較大，數值卻較低。</p>",
      hints: [
        // EN: Draw the 3p orbitals as three boxes for P and for S.
        "為 P 和 S 各畫三個方格，代表 3p 軌態。",
        // EN: In which atom does one box contain two electrons? What do two electrons in one orbital do to each other?
        "哪一個原子有一個方格內有兩個電子？同一軌態內的兩個電子會怎樣互相影響？",
      ],
      // EN: <p>P is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>: each of the three 3p orbitals holds one electron. S is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>: one 3p orbital holds two electrons. In sulfur the electron is removed from this doubly occupied orbital. The two electrons in the same orbital repel each other, so less energy is needed to remove one of them.</p><p>Do not write that a half-filled 3p sublevel is “specially stable”. IB does not accept this.</p>
      answer: "<p>P 是 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>：三個 3p 軌態各有一個電子。S 是 <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>：其中一個 3p 軌態有兩個電子。硫的電子從這個有兩個電子的軌態移走。同一軌態內的兩個電子互相排斥，所以移走其中一個所需的能量較少。</p><p>不要寫半滿的 3p 亞層「特別穩定」。IB 不接受這個說法。</p>",
      markscheme: [
        // EN: In S the electron is removed from a 3p orbital that contains two electrons / a paired electron is removed (in P each 3p orbital contains one electron).
        "S 的電子從一個有兩個電子的 3p 軌態移走／移走的是成對電子（P 的每個 3p 軌態只有一個電子）。",
        // EN: The two electrons in the same orbital repel each other, so less energy is needed to remove one.
        "同一軌態內的兩個電子互相排斥，所以移走其中一個所需的能量較少。",
      ],
    },

    // ── s3-1-q041 · mcq · challenge · AHL · Structure 3.1.7 · 1 mark
    "s3-1-q041": {
      // EN: <p>The graph shows the first ionization energies of the period 3 elements, from the data booklet.</p><p><svg viewBox="0 0 316 196" width="316" height="196" style="max-width:100%;height:auto" role="img" aria-label="Graph of first ionization energy in kilojoules per mole against element for period 3. Sodium 496, magnesium 738, aluminium 578, silicon 787, phosphorus 1012, sulfur 1000, chlorine 1251, argon 1520. The general trend is upward, with small decreases at aluminium and at sulfur."><path d="M58 14V170H306" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="53" x2="306" y1="170" y2="170" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="174" text-anchor="end" font-size="12" fill="currentColor">0</text><line x1="53" x2="306" y1="131" y2="131" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="135" text-anchor="end" font-size="12" fill="currentColor">400</text><line x1="53" x2="306" y1="92" y2="92" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="96" text-anchor="end" font-size="12" fill="currentColor">800</text><line x1="53" x2="306" y1="53" y2="53" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="57" text-anchor="end" font-size="12" fill="currentColor">1200</text><line x1="53" x2="306" y1="14" y2="14" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="18" text-anchor="end" font-size="12" fill="currentColor">1600</text><text x="74" y="187" text-anchor="middle" font-size="12" fill="currentColor">Na</text><text x="104.85714285714286" y="187" text-anchor="middle" font-size="12" fill="currentColor">Mg</text><text x="135.71428571428572" y="187" text-anchor="middle" font-size="12" fill="currentColor">Al</text><text x="166.57142857142856" y="187" text-anchor="middle" font-size="12" fill="currentColor">Si</text><text x="197.42857142857144" y="187" text-anchor="middle" font-size="12" fill="currentColor">P</text><text x="228.28571428571428" y="187" text-anchor="middle" font-size="12" fill="currentColor">S</text><text x="259.1428571428571" y="187" text-anchor="middle" font-size="12" fill="currentColor">Cl</text><text x="290" y="187" text-anchor="middle" font-size="12" fill="currentColor">Ar</text><path d="M74.0 121.6L104.9 98.0L135.7 113.6L166.6 93.3L197.4 71.3L228.3 72.5L259.1 48.0L290.0 21.8" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="74.0" cy="121.6" r="4" fill="currentColor"/><circle cx="104.9" cy="98.0" r="4" fill="currentColor"/><circle cx="135.7" cy="113.6" r="4" fill="currentColor"/><circle cx="166.6" cy="93.3" r="4" fill="currentColor"/><circle cx="197.4" cy="71.3" r="4" fill="currentColor"/><circle cx="228.3" cy="72.5" r="4" fill="currentColor"/><circle cx="259.1" cy="48.0" r="4" fill="currentColor"/><circle cx="290.0" cy="21.8" r="4" fill="currentColor"/><text transform="translate(14 92) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">first IE / kJ mol⁻¹</text></svg></p><p>What do the decreases at aluminium and at sulfur show?</p>
      stem: "<p>下圖顯示第 3 週期元素的第一電離能，數據來自數據手冊。</p><p><svg viewBox=\"0 0 316 196\" width=\"316\" height=\"196\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"第 3 週期各元素的第一電離能圖表，單位是千焦耳每摩爾。鈉 496、鎂 738、鋁 578、矽 787、磷 1012、硫 1000、氯 1251、氬 1520。整體趨勢向上，在鋁和硫兩處稍為下降。\"><path d=\"M58 14V170H306\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"53\" x2=\"306\" y1=\"170\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"174\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">0</text><line x1=\"53\" x2=\"306\" y1=\"131\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"135\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400</text><line x1=\"53\" x2=\"306\" y1=\"92\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"96\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">800</text><line x1=\"53\" x2=\"306\" y1=\"53\" y2=\"53\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"57\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">1200</text><line x1=\"53\" x2=\"306\" y1=\"14\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"18\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">1600</text><text x=\"74\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Na</text><text x=\"104.85714285714286\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Mg</text><text x=\"135.71428571428572\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Al</text><text x=\"166.57142857142856\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Si</text><text x=\"197.42857142857144\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">P</text><text x=\"228.28571428571428\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">S</text><text x=\"259.1428571428571\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Cl</text><text x=\"290\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Ar</text><path d=\"M74.0 121.6L104.9 98.0L135.7 113.6L166.6 93.3L197.4 71.3L228.3 72.5L259.1 48.0L290.0 21.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><circle cx=\"74.0\" cy=\"121.6\" r=\"4\" fill=\"currentColor\"/><circle cx=\"104.9\" cy=\"98.0\" r=\"4\" fill=\"currentColor\"/><circle cx=\"135.7\" cy=\"113.6\" r=\"4\" fill=\"currentColor\"/><circle cx=\"166.6\" cy=\"93.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"197.4\" cy=\"71.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"228.3\" cy=\"72.5\" r=\"4\" fill=\"currentColor\"/><circle cx=\"259.1\" cy=\"48.0\" r=\"4\" fill=\"currentColor\"/><circle cx=\"290.0\" cy=\"21.8\" r=\"4\" fill=\"currentColor\"/><text transform=\"translate(14 92) rotate(-90)\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">第一電離能 / kJ mol⁻¹</text></svg></p><p>鋁和硫兩處的下降顯示了甚麼？</p>",
      options: [
        // EN: A filled or half-filled sublevel has a special stability.
        "全滿或半滿的亞層特別穩定。",
        // EN: The nuclear charge decreases at aluminium and at sulfur.
        "核電荷在鋁和硫兩處減少。",
        // EN: The electrons in the third energy level do not all have the same energy.
        "第三能級的電子，能量並不完全相同。",
        // EN: Aluminium and sulfur each start a new main energy level.
        "鋁和硫各自開始一個新的主能級。",
      ],
      hints: [
        // EN: If all the n = 3 electrons had the same energy, what would the graph look like?
        "如果所有 n = 3 的電子能量相同，圖表會是甚麼樣子？",
        // EN: The decrease at Al comes with the first 3p electron. What does that tell you about 3s and 3p?
        "Al 處的下降，是隨第一個 3p 電子出現的。這說明 3s 和 3p 有甚麼分別？",
      ],
      // EN: <p>Nuclear charge increases steadily across the period. If all the electrons in the third energy level had the same energy, the first ionization energy would rise steadily too. It does not.</p><p>The decrease at aluminium shows that the 3p electron is at a higher energy than the 3s electrons. So the main energy level is split into <strong>sublevels of different energy</strong>. The decrease at sulfur shows the effect of repulsion when a p orbital holds two electrons. The discontinuities are evidence for sublevels.</p>
      solution: "<p>橫跨這個週期，核電荷穩定地增加。如果第三能級的所有電子能量相同，第一電離能也會穩定地上升。事實並非如此。</p><p>鋁處的下降，顯示 3p 電子的能量比 3s 電子高。所以主能級分成<strong>能量不同的亞層</strong>。硫處的下降，顯示 p 軌態有兩個電子時排斥的影響。這些不連續處是亞層存在的證據。</p>",
      misconception: {
        // EN (option A): The guide says explanations must be based on the energy of the electron removed, not on “special stability”. Markschemes reject this argument.
        "0": "學科指南說明，解釋必須以被移走電子的能量為依據，不能用「特別穩定」。評分準則不接受這個論點。",
        // EN (option B): The nuclear charge increases by one proton at every step across the period, including at aluminium and sulfur.
        "1": "橫跨這個週期，每一步核電荷都增加一個質子，鋁和硫也不例外。",
        // EN (option D): All period 3 elements have their outer electrons in the same main energy level, n = 3. A new main level starts at the next period (potassium), where the drop is much larger.
        "3": "第 3 週期所有元素的最外層電子都在同一個主能級 n = 3。新的主能級在下一個週期（鉀）才開始，那裏的下降大得多。",
      },
    },

    // ── s3-1-q042 · multi · foundation · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q042": {
      // EN: <p>Which are characteristic properties of transition elements? Select all that apply.</p>
      stem: "<p>以下哪些是過渡元素 (transition elements) 的特徵性質？選出所有正確選項。</p>",
      options: [
        // EN: Variable oxidation states
        "可變氧化態",
        // EN: Low melting points
        "熔點低",
        // EN: Formation of coloured compounds
        "生成有色化合物",
        // EN: Catalytic properties
        "有催化性質",
        // EN: Formation of complex ions with ligands
        "與配位體生成絡離子",
        // EN: Poor electrical conductivity
        "導電性差",
      ],
      hints: [
        // EN: Think about iron or copper: are they easy to melt? Do they conduct?
        "想想鐵或銅：它們容易熔化嗎？它們導電嗎？",
        // EN: The guide lists six properties: variable oxidation state, high melting points, magnetic properties, catalytic properties, coloured compounds and complex ions.
        "學科指南列出六項性質：可變氧化態、高熔點、磁性、催化性質、有色化合物和絡離子。",
      ],
      // EN: <p>Transition elements have incomplete d sublevels. This gives them characteristic properties: <strong>variable oxidation states</strong>, <strong>high melting points</strong>, <strong>magnetic properties</strong>, <strong>catalytic properties</strong>, <strong>coloured compounds</strong>, and <strong>complex ions with ligands</strong>. You need to recognize this list.</p>
      solution: "<p>過渡元素有未填滿的 d 亞層。這令它們有以下特徵性質：<strong>可變氧化態</strong>、<strong>高熔點</strong>、<strong>磁性</strong>、<strong>催化性質</strong>、<strong>有色化合物</strong>，以及<strong>與配位體生成絡離子</strong>。你要認得這張清單。</p>",
      misconception: {
        // EN (option B): Transition elements have <em>high</em> melting points. Their metallic bonding is strong.
        "1": "過渡元素的熔點<em>高</em>。它們的金屬鍵很強。",
        // EN (option F): Transition elements are metals. They are good electrical conductors.
        "5": "過渡元素是金屬。它們是良好的導電體。",
      },
    },

    // ── s3-1-q043 · mcq · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q043": {
      // EN: <p>Zinc is in the d-block. Its atom has the configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> and its only common ion is <span class="chem">Zn^2+</span>. Why is zinc not classed as a transition element?</p>
      stem: "<p>鋅在 d 區。它的原子的電子排佈是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span>，唯一常見的離子是 <span class=\"chem\">Zn^2+</span>。為甚麼鋅不歸類為過渡元素？</p>",
      options: [
        // EN: Zinc has a full 4s sublevel.
        "鋅的 4s 亞層是全滿的。",
        // EN: Neither the zinc atom nor the <span class="chem">Zn^2+</span> ion has an incomplete d sublevel.
        "鋅原子和 <span class=\"chem\">Zn^2+</span> 離子都沒有未填滿的 d 亞層。",
        // EN: The <span class="chem">Zn^2+</span> ion has the configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>8</sup></span>.
        "<span class=\"chem\">Zn^2+</span> 離子的電子排佈是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>8</sup></span>。",
        // EN: Zinc is a metal with a high density.
        "鋅是密度高的金屬。",
      ],
      hints: [
        // EN: What feature of the d sublevel makes an element a transition element?
        "d 亞層的甚麼特點令元素成為過渡元素？",
        // EN: Write the configuration of <span class="chem">Zn^2+</span>. Remember which electrons are lost first.
        "寫出 <span class=\"chem\">Zn^2+</span> 的電子排佈。記住哪些電子先失去。",
      ],
      // EN: <p>A transition element has an <strong>incomplete d sublevel</strong> (as an atom or in its ions). Zn is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> and <span class="chem">Zn^2+</span> is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The 3d sublevel is full in both. So zinc does not show the characteristic properties: it has one oxidation state in its compounds, and its compounds are not coloured.</p>
      solution: "<p>過渡元素有<strong>未填滿的 d 亞層</strong>（在原子或它的離子中）。Zn 是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span>，<span class=\"chem\">Zn^2+</span> 是 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>。兩者的 3d 亞層都是全滿的。所以鋅沒有過渡元素的特徵性質：它在化合物中只有一種氧化態，它的化合物也沒有顏色。</p>",
      misconception: {
        // EN (option A): True, but iron and many other transition elements also have a full 4s sublevel. The d sublevel is what matters.
        "0": "這句話正確，但鐵和很多其他過渡元素的 4s 亞層也是全滿的。關鍵在於 d 亞層。",
        // EN (option C): The 4s electrons are lost first when a first-row d-block atom forms an ion. <span class="chem">Zn^2+</span> is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>.
        "2": "第一列 d 區原子形成離子時，4s 電子先失去。<span class=\"chem\">Zn^2+</span> 是 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>。",
        // EN (option D): True, but this does not decide whether an element is a transition element.
        "3": "這句話正確，但它不能決定元素是否過渡元素。",
      },
    },

    // ── s3-1-q044 · short · challenge · AHL · Structure 3.1.8 · 2 marks
    "s3-1-q044": {
      // EN: <p>Scandium has the electron configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>1</sup></span>. In its compounds it forms only the <span class="chem">Sc^3+</span> ion.</p><p>Give one argument for and one argument against classing scandium as a transition element.</p>
      stem: "<p>鈧的電子排佈是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>1</sup></span>。它在化合物中只形成 <span class=\"chem\">Sc^3+</span> 離子。</p><p>就鈧應否歸類為過渡元素，提出一個支持的論點和一個反對的論點。</p>",
      hints: [
        // EN: Look at the 3d sublevel in the atom.
        "看看原子的 3d 亞層。",
        // EN: Now write the configuration of <span class="chem">Sc^3+</span>. Which three electrons are lost?
        "再寫出 <span class=\"chem\">Sc^3+</span> 的電子排佈。失去的是哪三個電子？",
      ],
      // EN: <p><strong>For:</strong> the scandium atom has an incomplete d sublevel (<span class="mono nowrap">3d<sup>1</sup></span>).</p><p><strong>Against:</strong> the only ion, <span class="chem">Sc^3+</span>, has the configuration <span class="mono nowrap">[Ar]</span>, with no d electrons. So scandium does not show characteristic properties of transition elements: it has only one oxidation state (+3) in its compounds, and its compounds are not coloured.</p>
      answer: "<p><strong>支持：</strong>鈧原子有未填滿的 d 亞層 (<span class=\"mono nowrap\">3d<sup>1</sup></span>)。</p><p><strong>反對：</strong>它唯一的離子 <span class=\"chem\">Sc^3+</span> 的電子排佈是 <span class=\"mono nowrap\">[Ar]</span>，沒有 d 電子。所以鈧沒有過渡元素的特徵性質：它在化合物中只有一種氧化態 (+3)，它的化合物也沒有顏色。</p>",
      markscheme: [
        // EN: For: the atom has an incomplete / partially filled d sublevel (3d<sup>1</sup>).
        "支持：原子有未填滿／部分填充的 d 亞層 (3d<sup>1</sup>)。",
        // EN: Against: <span class="chem">Sc^3+</span> has no d electrons / is [Ar] (accept: it shows only one oxidation state / its compounds are not coloured).
        "反對：<span class=\"chem\">Sc^3+</span> 沒有 d 電子／是 [Ar]（接受：它只有一種氧化態／它的化合物沒有顏色）。",
      ],
    },

    // ── s3-1-q045 · mcq · foundation · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q045": {
      // EN: <p>Transition elements form complex ions with ligands. What is a ligand?</p>
      stem: "<p>過渡元素與配位體生成絡離子 (complex ions)。配位體 (ligand) 是甚麼？</p>",
      options: [
        // EN: The positive metal ion at the centre of a complex ion.
        "位於絡離子中心的金屬正離子。",
        // EN: A molecule or ion that accepts a pair of electrons from a metal ion.
        "從金屬離子接受一對電子的分子或離子。",
        // EN: An ion outside the square brackets that balances the charge of a complex ion.
        "在方括號外、平衡絡離子電荷的離子。",
        // EN: A molecule or ion with a lone pair of electrons that forms a coordination bond to a central metal ion.
        "具有孤電子對，並與中心金屬離子形成配位鍵的分子或離子。",
      ],
      hints: [
        // EN: Examples of ligands: <span class="chem">H2O</span>, <span class="chem">NH3</span>, <span class="chem">Cl-</span>. What do these have in common?
        "配位體的例子：<span class=\"chem\">H2O</span>、<span class=\"chem\">NH3</span>、<span class=\"chem\">Cl-</span>。它們有甚麼共通點？",
        // EN: In a coordination bond, both electrons of the shared pair come from the same atom.
        "在配位鍵中，共用電子對的兩個電子都來自同一個原子。",
      ],
      // EN: <p>A ligand is a molecule or ion that has a <strong>lone pair of electrons</strong>. It donates the lone pair to the central metal ion and forms a <strong>coordination bond</strong>. In <span class="chem">[Cu(H2O)6]^2+</span> the six water molecules are the ligands.</p>
      solution: "<p>配位體是具有<strong>孤電子對</strong> (lone pair) 的分子或離子。它把孤電子對給予中心金屬離子，形成<strong>配位鍵</strong> (coordination bond)。在 <span class=\"chem\">[Cu(H2O)6]^2+</span> 中，六個水分子是配位體。</p>",
      misconception: {
        // EN (option A): The metal ion is the centre of the complex. The ligands are the species bonded around it.
        "0": "金屬離子是絡合物的中心。配位體是鍵合在它周圍的物種。",
        // EN (option B): The direction is reversed. The ligand <em>donates</em> the electron pair. The metal ion accepts it.
        "1": "方向相反了。是配位體<em>給出</em>電子對，金屬離子接受。",
        // EN (option C): An ion outside the brackets is not bonded to the metal ion. Ligands are written inside the square brackets.
        "2": "方括號外的離子沒有與金屬離子鍵合。配位體寫在方括號內。",
      },
    },

    // ── s3-1-q046 · numeric · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q046": {
      // EN: <p>Deduce the oxidation state of chromium in the compound <span class="chem">[Cr(H2O)4Cl2]Cl</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>推斷 (deduce) 化合物 <span class=\"chem\">[Cr(H2O)4Cl2]Cl</span> 中鉻的氧化態。</p><p>先輸入正負號，再輸入數字，例如 +3 或 −3。</p>",
      hints: [
        // EN: The chloride ion outside the brackets is <span class="chem">Cl-</span>. What is the charge on the complex ion inside the brackets?
        "方括號外的氯離子是 <span class=\"chem\">Cl-</span>。方括號內的絡離子帶甚麼電荷？",
        // EN: Water is a neutral ligand. Each chloride ligand is 1−.
        "水是中性配位體。每個氯離子配位體是 1−。",
        // EN: Chromium + ligand charges = charge on the complex ion.
        "鉻 + 配位體的電荷 = 絡離子的電荷。",
      ],
      // EN: <p>The compound has no overall charge. The ion outside the brackets is <span class="chem">Cl-</span>, so the complex ion is <span class="chem">[Cr(H2O)4Cl2]+</span>.</p><p>Inside the complex: water is neutral (0), and each chloride ligand is −1. Let chromium be <i>x</i>.</p><div class="worked__math"><i>x</i> + 4(0) + 2(−1) = +1</div><div class="worked__math"><i>x</i> = <b>+3</b></div>
      solution: "<p>化合物整體不帶電荷。方括號外的離子是 <span class=\"chem\">Cl-</span>，所以絡離子是 <span class=\"chem\">[Cr(H2O)4Cl2]+</span>。</p><p>絡離子內：水是中性 (0)，每個氯離子配位體是 −1。設鉻為 <i>x</i>。</p><div class=\"worked__math\"><i>x</i> + 4(0) + 2(−1) = +1</div><div class=\"worked__math\"><i>x</i> = <b>+3</b></div>",
      // EN: In an exam, write +3 (or III) with the sign first. “3+” and “3” do not score.
      correctNote: "考試時要寫 +3（或 III），正負號在前。「3+」和「3」都不得分。",
    },

    // ── s3-1-q047 · multi · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q047": {
      // EN: <p>Which statements about the complex ion <span class="chem">[CuCl4]^2-</span> are correct? Select all that apply.</p>
      stem: "<p>以下哪些關於絡離子 <span class=\"chem\">[CuCl4]^2-</span> 的敘述正確？選出所有正確選項。</p>",
      options: [
        // EN: The chloride ions are the ligands.
        "氯離子是配位體。",
        // EN: Each chloride ion donates a pair of electrons to the copper ion.
        "每個氯離子給出一對電子予銅離子。",
        // EN: The bonds between copper and chlorine are coordination bonds.
        "銅與氯之間的鍵是配位鍵。",
        // EN: The oxidation state of copper is −2.
        "銅的氧化態是 −2。",
        // EN: The copper ion donates pairs of electrons to the chloride ions.
        "銅離子給出多對電子予氯離子。",
        // EN: The oxidation state of copper is +2.
        "銅的氧化態是 +2。",
      ],
      hints: [
        // EN: Each ligand is a chloride ion, <span class="chem">Cl-</span>, with lone pairs.
        "每個配位體都是氯離子 <span class=\"chem\">Cl-</span>，帶有孤電子對。",
        // EN: Copper + 4(−1) = −2.
        "銅 + 4(−1) = −2。",
      ],
      // EN: <p>The four chloride ions are the <strong>ligands</strong>. Each one donates a lone pair to the copper ion, so each Cu–Cl bond is a <strong>coordination bond</strong>.</p><div class="worked__math"><i>x</i> + 4(−1) = −2</div><div class="worked__math"><i>x</i> = <b>+2</b></div><p>The oxidation state of copper is +2.</p>
      solution: "<p>四個氯離子是<strong>配位體</strong>。每個都給出一個孤電子對予銅離子，所以每個 Cu–Cl 鍵都是<strong>配位鍵</strong>。</p><div class=\"worked__math\"><i>x</i> + 4(−1) = −2</div><div class=\"worked__math\"><i>x</i> = <b>+2</b></div><p>銅的氧化態是 +2。</p>",
      misconception: {
        // EN (option D): The charge on the whole complex ion is 2−. That is not the oxidation state of copper. Four <span class="chem">Cl-</span> ligands give −4, so copper is +2.
        "3": "整個絡離子的電荷是 2−。這不是銅的氧化態。四個 <span class=\"chem\">Cl-</span> 配位體合共 −4，所以銅是 +2。",
        // EN (option E): The direction is reversed. Ligands donate lone pairs. The metal ion accepts them.
        "4": "方向相反了。是配位體給出孤電子對，金屬離子接受。",
      },
    },

    // ── s3-1-q048 · mcq · foundation · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q048": {
      // EN: <p>An iron atom has the electron configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. What is the electron configuration of the <span class="chem">Fe^2+</span> ion?</p>
      stem: "<p>鐵原子的電子排佈是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>。<span class=\"chem\">Fe^2+</span> 離子的電子排佈是甚麼？</p>",
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
        "2+ 離子失去了兩個電子。",
        // EN: Which sublevel loses electrons first: 4s or 3d?
        "哪一個亞層先失去電子：4s 還是 3d？",
      ],
      // EN: <p>The 4s sublevel is filled before 3d, but in the ion the <strong>4s electrons are lost first</strong>. Remove the two 4s electrons:</p><div class="worked__math">Fe: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp;→&nbsp; <span class="chem">Fe^2+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>6</sup></span></b></div>
      solution: "<p>4s 亞層比 3d 先填充，但形成離子時，<strong>4s 電子先失去</strong>。移走兩個 4s 電子：</p><div class=\"worked__math\">Fe: <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Fe^2+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span></b></div>",
      misconception: {
        // EN (option B): This removes two 3d electrons. When a first-row transition atom forms an ion, the 4s electrons are lost first.
        "1": "這是移走了兩個 3d 電子。第一列過渡元素的原子形成離子時，4s 電子先失去。",
        // EN (option C): This removes one 4s and one 3d electron. Both 4s electrons are lost before any 3d electron.
        "2": "這是移走了一個 4s 電子和一個 3d 電子。兩個 4s 電子都失去後，才輪到 3d 電子。",
        // EN (option D): This is the configuration of the atom. A 2+ ion has two fewer electrons.
        "3": "這是原子的電子排佈。2+ 離子少了兩個電子。",
      },
    },

    // ── s3-1-q049 · mcq · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q049": {
      // EN: <p>What is the electron configuration of the <span class="chem">Cu^2+</span> ion?</p>
      stem: "<p><span class=\"chem\">Cu^2+</span> 離子的電子排佈是甚麼？</p>",
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
        "銅是第一列的兩個例外之一。它的原子是 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>。",
        // EN: Remove the 4s electron first, then one 3d electron.
        "先移走 4s 電子，再移走一個 3d 電子。",
      ],
      // EN: <p>The copper atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>. Remove two electrons: first the 4s electron, then one 3d electron.</p><div class="worked__math">Cu: <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class="chem">Cu+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class="chem">Cu^2+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>9</sup></span></b></div>
      solution: "<p>銅原子是 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>。移走兩個電子：先移走 4s 電子，再移走一個 3d 電子。</p><div class=\"worked__math\">Cu: <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Cu+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Cu^2+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span></b></div>",
      misconception: {
        // EN (option A): This keeps the 4s electron and removes two 3d electrons. The 4s electron is lost first.
        "0": "這是保留了 4s 電子，移走了兩個 3d 電子。4s 電子先失去。",
        // EN (option B): This starts from <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span> and removes two 3d electrons. The copper atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>, and 4s is lost first.
        "1": "這是由 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span> 開始，再移走兩個 3d 電子。銅原子是 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>，而且 4s 先失去。",
        // EN (option D): This is <span class="chem">Cu+</span>, which has lost only the 4s electron. <span class="chem">Cu^2+</span> has lost one more.
        "3": "這是 <span class=\"chem\">Cu+</span>，它只失去了 4s 電子。<span class=\"chem\">Cu^2+</span> 再失去一個。",
      },
    },

    // ── s3-1-q050 · multi · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q050": {
      // EN: <p>Which ions have the electron configuration <span class="mono nowrap">[Ar] 3d<sup>5</sup></span>? Select all that apply.</p>
      stem: "<p>以下哪些離子的電子排佈是 <span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span>？選出所有正確選項。</p>",
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
        "快速檢查：離子的電子數目 = 原子序 − 電荷。",
        // EN: <span class="mono nowrap">[Ar] 3d<sup>5</sup></span> has 18 + 5 = 23 electrons.
        "<span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span> 有 18 + 5 = 23 個電子。",
      ],
      // EN: <p><span class="mono nowrap">[Ar] 3d<sup>5</sup></span> has 23 electrons. Count the electrons in each ion (atomic number − charge):</p><div class="worked__math"><span class="chem">Cr^3+</span>: 24 − 3 = 21 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>3</sup></span></div><div class="worked__math"><span class="chem">Mn^2+</span>: 25 − 2 = 23 &nbsp; <b><span class="mono nowrap">[Ar] 3d<sup>5</sup></span></b></div><div class="worked__math"><span class="chem">Fe^2+</span>: 26 − 2 = 24 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>6</sup></span></div><div class="worked__math"><span class="chem">Fe^3+</span>: 26 − 3 = 23 &nbsp; <b><span class="mono nowrap">[Ar] 3d<sup>5</sup></span></b></div><div class="worked__math"><span class="chem">Co^2+</span>: 27 − 2 = 25 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>7</sup></span></div><p>In these ions all the 4s electrons have been lost, so every electron beyond the argon core is a 3d electron.</p>
      solution: "<p><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span> 有 23 個電子。數一數每個離子的電子（原子序 − 電荷）：</p><div class=\"worked__math\"><span class=\"chem\">Cr^3+</span>: 24 − 3 = 21 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>3</sup></span></div><div class=\"worked__math\"><span class=\"chem\">Mn^2+</span>: 25 − 2 = 23 &nbsp; <b><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span></b></div><div class=\"worked__math\"><span class=\"chem\">Fe^2+</span>: 26 − 2 = 24 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span></div><div class=\"worked__math\"><span class=\"chem\">Fe^3+</span>: 26 − 3 = 23 &nbsp; <b><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span></b></div><div class=\"worked__math\"><span class=\"chem\">Co^2+</span>: 27 − 2 = 25 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>7</sup></span></div><p>這些離子的 4s 電子已全部失去，所以氬核心以外的每個電子都是 3d 電子。</p>",
      misconception: {
        // EN (option A): Cr is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>. Removing three electrons (4s first) leaves <span class="mono nowrap">[Ar] 3d<sup>3</sup></span>.
        "0": "Cr 是 <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>。移走三個電子（先 4s）後，餘下 <span class=\"mono nowrap\">[Ar] 3d<sup>3</sup></span>。",
        // EN (option C): Fe is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. Removing the two 4s electrons leaves <span class="mono nowrap">[Ar] 3d<sup>6</sup></span>.
        "2": "Fe 是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>。移走兩個 4s 電子後，餘下 <span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span>。",
        // EN (option E): Co is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>. Removing the two 4s electrons leaves <span class="mono nowrap">[Ar] 3d<sup>7</sup></span>.
        "4": "Co 是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>。移走兩個 4s 電子後，餘下 <span class=\"mono nowrap\">[Ar] 3d<sup>7</sup></span>。",
      },
    },

    // ── s3-1-q051 · numeric · challenge · AHL · Structure 3.1.9 · 2 marks
    "s3-1-q051": {
      // EN: <p>The compound <span class="chem">VOSO4</span> contains the sulfate ion, <span class="chem">SO4^2-</span>. Deduce the number of 3d electrons in the vanadium ion in this compound.</p>
      stem: "<p>化合物 <span class=\"chem\">VOSO4</span> 含有硫酸根離子 <span class=\"chem\">SO4^2-</span>。推斷 (deduce) 這種化合物中釩離子的 3d 電子數目。</p>",
      hints: [
        // EN: First find the oxidation state of vanadium. Sulfate is 2− and oxygen is −2.
        "先求出釩的氧化態。硫酸根是 2−，氧是 −2。",
        // EN: A vanadium atom is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>.
        "釩原子是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>。",
        // EN: Remove that number of electrons, 4s first.
        "移走這個數目的電子，先移走 4s。",
      ],
      // EN: <p><strong>Step 1: oxidation state.</strong> Let vanadium be <i>x</i>. Oxygen is −2 and sulfate is 2−.</p><div class="worked__math"><i>x</i> + (−2) + (−2) = 0</div><div class="worked__math"><i>x</i> = +4</div><p><strong>Step 2: configuration.</strong> V is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>. Remove four electrons: the two 4s electrons first, then two 3d electrons.</p><div class="worked__math">V<sup>4+</sup>: <span class="mono nowrap">[Ar] 3d<sup>1</sup></span></div><p>The ion has <strong>1</strong> 3d electron.</p>
      solution: "<p><strong>第 1 步：氧化態。</strong>設釩為 <i>x</i>。氧是 −2，硫酸根是 2−。</p><div class=\"worked__math\"><i>x</i> + (−2) + (−2) = 0</div><div class=\"worked__math\"><i>x</i> = +4</div><p><strong>第 2 步：電子排佈。</strong>V 是 <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>。移走四個電子：先移走兩個 4s 電子，再移走兩個 3d 電子。</p><div class=\"worked__math\">V<sup>4+</sup>: <span class=\"mono nowrap\">[Ar] 3d<sup>1</sup></span></div><p>這個離子有 <strong>1</strong> 個 3d 電子。</p>",
      // EN: 3d electrons
      unit: "個 3d 電子",
    },

    // ── s3-1-q052 · mcq · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q052": {
      // EN: <p>Calcium has only the oxidation state +2 in its compounds. Vanadium has the oxidation states +2, +3, +4 and +5 in its compounds. The table shows successive ionization energies.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">Ca</th><td class="num">590</td><td class="num">1145</td><td class="num">4912</td><td class="num">6491</td><td class="num"></td><td class="num"></td></tr><tr><th scope="row">V</th><td class="num">651</td><td class="num">1414</td><td class="num">2830</td><td class="num">4507</td><td class="num">6299</td><td class="num">12 363</td></tr></tbody></table></div><p>Which statement explains the difference?</p>
      stem: "<p>鈣在化合物中只有 +2 這一種氧化態。釩在化合物中有 +2、+3、+4 和 +5 四種氧化態。下表列出逐級電離能 (successive ionization energies)。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">第 1</th><th class=\"num\" scope=\"col\">第 2</th><th class=\"num\" scope=\"col\">第 3</th><th class=\"num\" scope=\"col\">第 4</th><th class=\"num\" scope=\"col\">第 5</th><th class=\"num\" scope=\"col\">第 6</th></tr></thead><tbody><tr><th scope=\"row\">Ca</th><td class=\"num\">590</td><td class=\"num\">1145</td><td class=\"num\">4912</td><td class=\"num\">6491</td><td class=\"num\"></td><td class=\"num\"></td></tr><tr><th scope=\"row\">V</th><td class=\"num\">651</td><td class=\"num\">1414</td><td class=\"num\">2830</td><td class=\"num\">4507</td><td class=\"num\">6299</td><td class=\"num\">12 363</td></tr></tbody></table></div><p>以下哪一項解釋了這個分別？</p>",
      options: [
        // EN: Every ionization energy of vanadium is lower than the same ionization energy of calcium.
        "釩的每一個電離能，都比鈣同一級的電離能低。",
        // EN: Vanadium has a greater nuclear charge, so it holds its electrons less strongly.
        "釩的核電荷較大，所以對電子的吸引較弱。",
        // EN: The first five ionization energies of vanadium are close in value. For calcium there is a very large increase after the second.
        "釩的首五個電離能數值相近。鈣在第二個之後有非常大的升幅。",
        // EN: A calcium atom has only two electrons that can be removed.
        "鈣原子只有兩個電子可以移走。",
      ],
      hints: [
        // EN: Find the increase from each value to the next.
        "求出每個數值到下一個數值的升幅。",
        // EN: Where is the first very large increase for Ca? Where is it for V?
        "Ca 的第一個非常大的升幅在哪裏？V 的又在哪裏？",
      ],
      // EN: <p>Look at the increase from each ionization energy to the next.</p><div class="worked__math">Ca: +555, then +3767</div><div class="worked__math">V: +763, +1416, +1677, +1792, then +6064</div><p>For calcium there is a very large increase after the second electron. The third electron comes from an inner energy level (3p), so calcium forms only <span class="chem">Ca^2+</span>.</p><p>For vanadium the first five values rise in small steps, because the 4s and 3d electrons are close in energy. The <strong>successive ionization energies are close in value</strong>, so vanadium can lose different numbers of electrons and shows variable oxidation states. The large increase comes only after the fifth electron.</p>
      solution: "<p>看看每個電離能到下一個的升幅。</p><div class=\"worked__math\">Ca: +555，然後 +3767</div><div class=\"worked__math\">V: +763, +1416, +1677, +1792，然後 +6064</div><p>鈣在第二個電子之後有非常大的升幅。第三個電子來自內層能級 (3p)，所以鈣只形成 <span class=\"chem\">Ca^2+</span>。</p><p>釩的首五個數值逐步小幅上升，因為 4s 和 3d 電子的能量相近。<strong>逐級電離能的數值相近</strong>，所以釩可以失去不同數目的電子，顯示可變氧化態。大的升幅要到第五個電子之後才出現。</p>",
      misconception: {
        // EN (option A): Check the data: the 1st and 2nd values for vanadium (651, 1414) are higher than those for calcium (590, 1145).
        "0": "核對數據：釩的第 1 和第 2 個數值 (651、1414) 比鈣的 (590、1145) 高。",
        // EN (option B): A greater nuclear charge attracts electrons <em>more</em> strongly, not less.
        "1": "核電荷較大，對電子的吸引會<em>較強</em>，不是較弱。",
        // EN (option D): A calcium atom has 20 electrons, and the table gives a 3rd and a 4th ionization energy. The third electron can be removed, but it needs much more energy.
        "3": "鈣原子有 20 個電子，而且表中列出了第 3 和第 4 電離能。第三個電子可以移走，但所需的能量多得多。",
      },
    },

    // ── s3-1-q053 · numeric · challenge · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q053": {
      // EN: <p>The table shows the first six successive ionization energies of a first-row transition element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">659</td><td class="num">1310</td><td class="num">2653</td><td class="num">4175</td><td class="num">9581</td><td class="num">11 533</td></tr></tbody></table></div><p>Deduce the highest oxidation state that this element is likely to show in its compounds.</p><p>Type the sign first and then the number, for example +3.</p>
      stem: "<p>下表列出某第一列過渡元素的首六個逐級電離能。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">第 1</th><th class=\"num\" scope=\"col\">第 2</th><th class=\"num\" scope=\"col\">第 3</th><th class=\"num\" scope=\"col\">第 4</th><th class=\"num\" scope=\"col\">第 5</th><th class=\"num\" scope=\"col\">第 6</th></tr></thead><tbody><tr><th scope=\"row\">電離能</th><td class=\"num\">659</td><td class=\"num\">1310</td><td class=\"num\">2653</td><td class=\"num\">4175</td><td class=\"num\">9581</td><td class=\"num\">11 533</td></tr></tbody></table></div><p>推斷 (deduce) 這種元素在化合物中可能顯示的最高氧化態。</p><p>先輸入正負號，再輸入數字，例如 +3。</p>",
      hints: [
        // EN: Find the increase from each value to the next.
        "求出每個數值到下一個數值的升幅。",
        // EN: The 4s and 3d electrons are close in energy. The next electron comes from an inner level and needs much more energy.
        "4s 和 3d 電子的能量相近。再下一個電子來自內層能級，所需的能量多得多。",
        // EN: Count the electrons removed before the very large increase.
        "數一數在非常大的升幅之前移走了多少個電子。",
      ],
      // EN: <p>Find the increase from each value to the next.</p><div class="worked__math">+651, +1343, +1522, then <b>+5406</b>, then +1952</div><p>The first four values rise in small steps. These four electrons are the 4s and 3d electrons, which are close in energy. The fifth electron needs much more energy, because it comes from the inner 3p sublevel.</p><p>The atom has four outer (4s and 3d) electrons, so the highest oxidation state is <strong>+4</strong>. The element is titanium, <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span>.</p>
      solution: "<p>求出每個數值到下一個數值的升幅。</p><div class=\"worked__math\">+651, +1343, +1522，然後 <b>+5406</b>，然後 +1952</div><p>首四個數值逐步小幅上升。這四個電子是 4s 和 3d 電子，它們的能量相近。第五個電子所需的能量多得多，因為它來自內層的 3p 亞層。</p><p>原子有四個外層（4s 和 3d）電子，所以最高氧化態是 <strong>+4</strong>。這種元素是鈦，<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span>。</p>",
      // EN: In an exam, write +4 with the sign first.
      correctNote: "考試時要寫 +4，正負號在前。",
    },

    // ── s3-1-q054 · mcq · foundation · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q054": {
      // EN: <p>The diagram shows the colour wheel from the data booklet.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>A solution of a transition element complex absorbs orange light. What colour does the solution appear in white light?</p>
      stem: "<p>下圖是數據手冊中的色輪 (colour wheel)。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"數據手冊中的色輪。六個相等的扇形，由頂部起順時針方向：橙色，585 至 647 納米；黃色，575 至 585；綠色，491 至 575；藍色，424 至 491；紫色，400 至 424；紅色，647 至 700。橙色對着藍色，黃色對着紫色，綠色對着紅色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黃</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">綠</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">藍</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紅</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>某過渡元素絡合物的溶液吸收橙色光。在白光下，這個溶液呈甚麼顏色？</p>",
      options: [
        // EN: Orange
        "橙色",
        // EN: Yellow
        "黃色",
        // EN: Blue
        "藍色",
        // EN: Red
        "紅色",
      ],
      hints: [
        // EN: The colour you see is complementary to the colour absorbed.
        "你看到的顏色，是被吸收顏色的補色。",
        // EN: On the wheel, complementary colours are directly opposite each other.
        "在色輪上，互為補色的兩種顏色正對着對方。",
      ],
      // EN: <p>The colour observed is <strong>complementary</strong> to the colour absorbed. Complementary colours are opposite each other on the colour wheel. Blue is opposite orange, so the solution appears <strong>blue</strong>.</p>
      solution: "<p>觀察到的顏色是被吸收顏色的<strong>補色</strong> (complementary colour)。互為補色的顏色在色輪上相對。藍色對着橙色，所以溶液呈<strong>藍色</strong>。</p>",
      misconception: {
        // EN (option A): Orange is the colour that is absorbed, so it is removed from the light that reaches your eye. You see what is left.
        "0": "橙色是被吸收的顏色，所以它從到達你眼睛的光中消失了。你看到的是餘下的光。",
        // EN (option B): Yellow is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.
        "1": "黃色在色輪上與橙色相鄰。補色在正<em>對面</em>，不是旁邊。",
        // EN (option D): Red is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.
        "3": "紅色在色輪上與橙色相鄰。補色在正<em>對面</em>，不是旁邊。",
      },
    },

    // ── s3-1-q055 · short · exam · AHL · Structure 3.1.10 · 3 marks
    "s3-1-q055": {
      // EN: <p>A solution that contains the complex ion <span class="chem">[Cu(H2O)6]^2+</span> is blue. Explain why this complex ion is coloured.</p>
      stem: "<p>含有絡離子 <span class=\"chem\">[Cu(H2O)6]^2+</span> 的溶液是藍色的。解釋 (explain) 為甚麼這個絡離子有顏色。</p>",
      hints: [
        // EN: Start with the d electrons of <span class="chem">Cu^2+</span>.
        "由 <span class=\"chem\">Cu^2+</span> 的 d 電子開始。",
        // EN: What do the ligands do to the d orbitals? What happens to an electron when light arrives?
        "配位體對 d 軌態有甚麼影響？光照到時，電子會怎樣？",
        // EN: Finish with the link between the colour absorbed and the colour seen.
        "最後說明被吸收的顏色與看到的顏色有甚麼關係。",
      ],
      // EN: <p>The <span class="chem">Cu^2+</span> ion has a partially filled d sublevel (<span class="mono nowrap">[Ar] 3d<sup>9</sup></span>). The ligands (water molecules) cause the d orbitals to split into two sets with different energies. An electron absorbs light and is promoted from a lower-energy d orbital to a higher-energy d orbital. The energy gap corresponds to light in the visible region. The colour observed (blue) is complementary to the colour absorbed (orange).</p><p>Do not write that the complex <em>emits</em> blue light. The colour comes from absorption.</p>
      answer: "<p><span class=\"chem\">Cu^2+</span> 離子有部分填充的 d 亞層 (<span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span>)。配位體（水分子）令 d 軌態分裂成能量不同的兩組。電子吸收光，由能量較低的 d 軌態躍遷到能量較高的 d 軌態。這個能量差對應可見光區的光。觀察到的顏色（藍色）是被吸收顏色（橙色）的補色。</p><p>不要寫絡合物<em>發射</em>藍光。顏色來自吸收。</p>",
      markscheme: [
        // EN: The ion has partially filled d orbitals / an incomplete d sublevel.
        "離子有部分填充的 d 軌態／未填滿的 d 亞層。",
        // EN: The ligands cause the d orbitals to split (into two sets of different energy).
        "配位體令 d 軌態分裂（成能量不同的兩組）。",
        // EN: Light is absorbed as electrons are promoted / move to higher-energy d orbitals.
        "電子躍遷／移到能量較高的 d 軌態時吸收光。",
        // EN: The energy gap corresponds to (the frequency of) visible light.
        "能量差對應可見光（的頻率）。",
        // EN: The colour observed is complementary to the colour absorbed (only if absorption of light is mentioned).
        "觀察到的顏色是被吸收顏色的補色（必須提到吸收光才給分）。",
      ],
    },

    // ── s3-1-q056 · mcq · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q056": {
      // EN: <p>A solution that contains a transition element complex ion appears green in white light. Which statement explains this?</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p>
      stem: "<p>某溶液含有過渡元素的絡離子，在白光下呈綠色。以下哪一項解釋了這個現象？</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"數據手冊中的色輪。六個相等的扇形，由頂部起順時針方向：橙色，585 至 647 納米；黃色，575 至 585；綠色，491 至 575；藍色，424 至 491；紫色，400 至 424；紅色，647 至 700。橙色對着藍色，黃色對着紫色，綠色對着紅色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黃</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">綠</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">藍</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紅</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p>",
      options: [
        // EN: Electrons fall from higher-energy d orbitals to lower-energy d orbitals and emit green light.
        "電子由能量較高的 d 軌態跌回能量較低的 d 軌態，並發射綠光。",
        // EN: The complex absorbs green light when electrons are promoted between the split d orbitals.
        "電子在分裂的 d 軌態之間躍遷時，絡合物吸收綠光。",
        // EN: The complex absorbs red light when electrons are promoted between the split d orbitals. The light that is left appears green.
        "電子在分裂的 d 軌態之間躍遷時，絡合物吸收紅光。餘下的光呈綠色。",
        // EN: The complex absorbs all colours of visible light except red.
        "絡合物吸收紅色以外所有顏色的可見光。",
      ],
      hints: [
        // EN: Is the colour caused by light being absorbed or by light being emitted?
        "顏色是因為光被吸收，還是因為發射光？",
        // EN: Find the colour opposite green on the wheel.
        "在色輪上找出綠色對面的顏色。",
      ],
      // EN: <p>White light passes through the solution. The complex <strong>absorbs</strong> light of one colour, and the energy promotes an electron from a lower-energy d orbital to a higher-energy d orbital. The colour seen is the complementary colour. Red is opposite green on the wheel, so the complex absorbs <strong>red</strong> light and appears green.</p>
      solution: "<p>白光穿過溶液。絡合物<strong>吸收</strong>其中一種顏色的光，這些能量令電子由能量較低的 d 軌態躍遷到能量較高的 d 軌態。看到的顏色是補色。紅色在色輪上對着綠色，所以絡合物吸收<strong>紅</strong>光，呈綠色。</p>",
      misconception: {
        // EN (option A): This describes emission. The colour of a complex comes from <em>absorption</em> of part of the white light, not from light given out.
        "0": "這是描述發射。絡合物的顏色來自<em>吸收</em>部分白光，不是來自發出的光。",
        // EN (option B): If green light were absorbed, it would be missing from the light that reaches your eye. The solution would appear red.
        "1": "如果綠光被吸收，到達你眼睛的光就沒有綠光。溶液會呈紅色。",
        // EN (option D): If only red light passed through, the solution would appear red, not green.
        "3": "如果只有紅光穿過，溶液會呈紅色，不是綠色。",
      },
    },

    // ── s3-1-q057 · numeric · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q057": {
      // EN: <p>A complex ion absorbs light most strongly at a wavelength of 510 nm. Calculate the frequency of this light, in Hz.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>某絡離子在波長 510 nm 處吸收光最強。計算 (calculate) 這種光的頻率，以 Hz 為單位。</p><p>使用 <i>c</i> = <i>λf</i> 和 <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>。</p>",
      hints: [
        // EN: Convert the wavelength to metres first: 1 nm = 10<sup>−9</sup> m.
        "先把波長換算成米：1 nm = 10<sup>−9</sup> m。",
        // EN: Rearrange <i>c</i> = <i>λf</i> to <i>f</i> = <i>c</i> / <i>λ</i>.
        "把 <i>c</i> = <i>λf</i> 重排成 <i>f</i> = <i>c</i> / <i>λ</i>。",
      ],
      // EN: <div class="worked__math"><i>λ</i> = 510 nm = 510 × 10<sup>−9</sup> m = 5.10 × 10<sup>−7</sup> m</div><div class="worked__math"><i>f</i> = <i>c</i> / <i>λ</i></div><div class="worked__math">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (5.10 × 10<sup>−7</sup> m)</div><div class="worked__math">= <b>5.88 × 10<sup>14</sup> Hz</b> &nbsp; (3 s.f.)</div><p>On the colour wheel, 510 nm is green light (491–575 nm). The complex absorbs green, so it appears red.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = 510 nm = 510 × 10<sup>−9</sup> m = 5.10 × 10<sup>−7</sup> m</div><div class=\"worked__math\"><i>f</i> = <i>c</i> / <i>λ</i></div><div class=\"worked__math\">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (5.10 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">= <b>5.88 × 10<sup>14</sup> Hz</b> &nbsp; (3 位有效數字)</div><p>在色輪上，510 nm 是綠光 (491–575 nm)。絡合物吸收綠光，所以呈紅色。</p>",
    },

    // ── s3-1-q058 · numeric · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q058": {
      // EN: <p>A complex ion absorbs light of frequency 6.38 × 10<sup>14</sup> Hz. Calculate the wavelength of this light, in nm.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>某絡離子吸收頻率為 6.38 × 10<sup>14</sup> Hz 的光。計算 (calculate) 這種光的波長，以 nm 為單位。</p><p>使用 <i>c</i> = <i>λf</i> 和 <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>。</p>",
      hints: [
        // EN: Rearrange <i>c</i> = <i>λf</i> to <i>λ</i> = <i>c</i> / <i>f</i>. The answer is in metres.
        "把 <i>c</i> = <i>λf</i> 重排成 <i>λ</i> = <i>c</i> / <i>f</i>。答案的單位是米。",
        // EN: Convert metres to nanometres: multiply by 10<sup>9</sup>.
        "把米換算成納米：乘以 10<sup>9</sup>。",
      ],
      // EN: <div class="worked__math"><i>λ</i> = <i>c</i> / <i>f</i></div><div class="worked__math">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (6.38 × 10<sup>14</sup> s<sup>−1</sup>)</div><div class="worked__math">= 4.702… × 10<sup>−7</sup> m</div><div class="worked__math">= <b>470 nm</b> &nbsp; (3 s.f.)</div><p>On the colour wheel, 470 nm is blue light (424–491 nm). The complex absorbs blue, so it appears orange.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = <i>c</i> / <i>f</i></div><div class=\"worked__math\">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (6.38 × 10<sup>14</sup> s<sup>−1</sup>)</div><div class=\"worked__math\">= 4.702… × 10<sup>−7</sup> m</div><div class=\"worked__math\">= <b>470 nm</b> &nbsp; (3 位有效數字)</div><p>在色輪上，470 nm 是藍光 (424–491 nm)。絡合物吸收藍光，所以呈橙色。</p>",
    },

    // ── s3-1-q059 · mcq · challenge · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q059": {
      // EN: <p>A complex ion absorbs light of frequency 7.25 × 10<sup>14</sup> Hz. Use <i>c</i> = <i>λf</i> and the colour wheel.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>Which row is correct?</p>
      stem: "<p>某絡離子吸收頻率為 7.25 × 10<sup>14</sup> Hz 的光。使用 <i>c</i> = <i>λf</i> 和色輪。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"數據手冊中的色輪。六個相等的扇形，由頂部起順時針方向：橙色，585 至 647 納米；黃色，575 至 585；綠色，491 至 575；藍色，424 至 491；紫色，400 至 424；紅色，647 至 700。橙色對着藍色，黃色對着紫色，綠色對着紅色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黃</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">綠</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">藍</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紅</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>以下哪一項正確？</p>",
      options: [
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: yellow. Colour observed: violet.
        "吸收的波長：414 nm。吸收的顏色：黃色。觀察到的顏色：紫色。",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: violet.
        "吸收的波長：414 nm。吸收的顏色：紫色。觀察到的顏色：紫色。",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: blue.
        "吸收的波長：414 nm。吸收的顏色：紫色。觀察到的顏色：藍色。",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: yellow.
        "吸收的波長：414 nm。吸收的顏色：紫色。觀察到的顏色：黃色。",
      ],
      hints: [
        // EN: <i>λ</i> = <i>c</i> / <i>f</i>. Convert the answer from m to nm.
        "<i>λ</i> = <i>c</i> / <i>f</i>。把答案由 m 換算成 nm。",
        // EN: Find the band on the wheel that contains this wavelength. That is the colour absorbed.
        "在色輪上找出包含這個波長的色帶。那就是被吸收的顏色。",
        // EN: The colour observed is opposite on the wheel.
        "觀察到的顏色在色輪的對面。",
      ],
      // EN: <div class="worked__math"><i>λ</i> = <i>c</i> / <i>f</i> = (3.00 × 10<sup>8</sup>) ÷ (7.25 × 10<sup>14</sup>)</div><div class="worked__math">= 4.14 × 10<sup>−7</sup> m = <b>414 nm</b></div><p>414 nm lies between 400 nm and 424 nm, so the light absorbed is <strong>violet</strong>. Yellow is opposite violet on the wheel, so the complex appears <strong>yellow</strong>.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = <i>c</i> / <i>f</i> = (3.00 × 10<sup>8</sup>) ÷ (7.25 × 10<sup>14</sup>)</div><div class=\"worked__math\">= 4.14 × 10<sup>−7</sup> m = <b>414 nm</b></div><p>414 nm 在 400 nm 和 424 nm 之間，所以被吸收的是<strong>紫</strong>光。黃色在色輪上對着紫色，所以絡合物呈<strong>黃色</strong>。</p>",
      misconception: {
        // EN (option A): The two colours are swapped. The wavelength you calculate is the light <em>absorbed</em>: 414 nm is in the violet band (400–424 nm).
        "0": "兩種顏色調轉了。你計算出來的波長是被<em>吸收</em>的光：414 nm 在紫色帶 (400–424 nm) 內。",
        // EN (option B): The complex does not give out the light it absorbs. Violet is removed from the white light, so you see the complementary colour.
        "1": "絡合物不會把吸收了的光發出來。紫色從白光中消失了，所以你看到的是補色。",
        // EN (option C): Blue is next to violet on the wheel. The complementary colour is directly opposite.
        "2": "藍色在色輪上與紫色相鄰。補色在正對面。",
      },
    },

    // ── s3-1-q060 · mcq · challenge · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q060": {
      // EN: <p>Which compound is expected to be coloured?</p>
      stem: "<p>預期以下哪一種化合物有顏色？</p>",
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
        "求出每種化合物中金屬離子的電荷。",
        // EN: Write the electron configuration of each ion (4s lost first).
        "寫出每個離子的電子排佈（4s 先失去）。",
        // EN: Colour needs a partially filled d sublevel: at least one d electron, and at least one space.
        "要有顏色，d 亞層必須部分填充：最少有一個 d 電子，也最少有一個空位。",
      ],
      // EN: <p>Colour needs an electron that can be promoted from one d orbital to another. So the ion must have a <strong>partially filled d sublevel</strong>.</p><div class="worked__math"><span class="chem">Cu+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp; full: not coloured</div><div class="worked__math"><span class="chem">Sc^3+</span>: <span class="mono nowrap">[Ar]</span> &nbsp; empty: not coloured</div><div class="worked__math"><span class="chem">Zn^2+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp; full: not coloured</div><div class="worked__math"><span class="chem">Ti^3+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>1</sup></span></b> &nbsp; partially filled: coloured</div>
      solution: "<p>要有顏色，必須有電子可以由一個 d 軌態躍遷到另一個 d 軌態。所以離子必須有<strong>部分填充的 d 亞層</strong>。</p><div class=\"worked__math\"><span class=\"chem\">Cu+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp; 全滿：沒有顏色</div><div class=\"worked__math\"><span class=\"chem\">Sc^3+</span>: <span class=\"mono nowrap\">[Ar]</span> &nbsp; 全空：沒有顏色</div><div class=\"worked__math\"><span class=\"chem\">Zn^2+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp; 全滿：沒有顏色</div><div class=\"worked__math\"><span class=\"chem\">Ti^3+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>1</sup></span></b> &nbsp; 部分填充：有顏色</div>",
      misconception: {
        // EN (option A): CuCl contains <span class="chem">Cu+</span>, which is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The d sublevel is full, so no electron can be promoted between d orbitals.
        "0": "CuCl 含有 <span class=\"chem\">Cu+</span>，它是 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>。d 亞層是全滿的，所以沒有電子可以在 d 軌態之間躍遷。",
        // EN (option B): <span class="chem">ScCl3</span> contains <span class="chem">Sc^3+</span>, which is <span class="mono nowrap">[Ar]</span>. There are no d electrons to promote.
        "1": "<span class=\"chem\">ScCl3</span> 含有 <span class=\"chem\">Sc^3+</span>，它是 <span class=\"mono nowrap\">[Ar]</span>。沒有 d 電子可以躍遷。",
        // EN (option C): <span class="chem">ZnSO4</span> contains <span class="chem">Zn^2+</span>, which is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The d sublevel is full, so no electron can be promoted between d orbitals.
        "2": "<span class=\"chem\">ZnSO4</span> 含有 <span class=\"chem\">Zn^2+</span>，它是 <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span>。d 亞層是全滿的，所以沒有電子可以在 d 軌態之間躍遷。",
      },
    },

    // ── s3-1-q061 · numeric · challenge · AHL · Structure 3.1.10 · 2 marks
    "s3-1-q061": {
      // EN: <p>A solution of a complex ion appears yellow in white light. Use the colour wheel to find the range of wavelengths that the complex absorbs.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>Calculate the <strong>lowest</strong> frequency of light in this range, in Hz. Use <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>某絡離子的溶液在白光下呈黃色。利用色輪找出這個絡合物吸收的波長範圍。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"數據手冊中的色輪。六個相等的扇形，由頂部起順時針方向：橙色，585 至 647 納米；黃色，575 至 585；綠色，491 至 575；藍色，424 至 491；紫色，400 至 424；紅色，647 至 700。橙色對着藍色，黃色對着紫色，綠色對着紅色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黃</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">綠</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">藍</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紅</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>計算 (calculate) 這個範圍內<strong>最低</strong>的光頻率，以 Hz 為單位。使用 <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>",
      hints: [
        // EN: The colour absorbed is opposite yellow on the wheel. Read its two boundary wavelengths.
        "被吸收的顏色在色輪上對着黃色。讀出它兩端邊界的波長。",
        // EN: <i>f</i> = <i>c</i> / <i>λ</i>. Does the lowest frequency go with the longest or the shortest wavelength?
        "<i>f</i> = <i>c</i> / <i>λ</i>。最低的頻率對應最長還是最短的波長？",
        // EN: Convert nm to m before you divide.
        "先把 nm 換算成 m，再做除法。",
      ],
      // EN: <p>Violet is opposite yellow, so the complex absorbs violet light: 400 nm to 424 nm.</p><p>Frequency and wavelength are inversely proportional (<i>f</i> = <i>c</i> / <i>λ</i>). The <strong>lowest</strong> frequency goes with the <strong>longest</strong> wavelength, 424 nm.</p><div class="worked__math"><i>λ</i> = 424 nm = 4.24 × 10<sup>−7</sup> m</div><div class="worked__math"><i>f</i> = (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (4.24 × 10<sup>−7</sup> m)</div><div class="worked__math">= <b>7.08 × 10<sup>14</sup> Hz</b> &nbsp; (3 s.f.)</div><p>(Using 400 nm gives 7.50 × 10<sup>14</sup> Hz. That is the highest frequency in the range.)</p>
      solution: "<p>紫色對着黃色，所以絡合物吸收紫光：400 nm 至 424 nm。</p><p>頻率與波長成反比 (<i>f</i> = <i>c</i> / <i>λ</i>)。<strong>最低</strong>的頻率對應<strong>最長</strong>的波長，即 424 nm。</p><div class=\"worked__math\"><i>λ</i> = 424 nm = 4.24 × 10<sup>−7</sup> m</div><div class=\"worked__math\"><i>f</i> = (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (4.24 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">= <b>7.08 × 10<sup>14</sup> Hz</b> &nbsp; (3 位有效數字)</div><p>（用 400 nm 計算會得出 7.50 × 10<sup>14</sup> Hz。那是這個範圍內最高的頻率。）</p>",
    },

    // ── s3-1-q062 · mcq · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q062": {
      // EN: <p>Carbon dioxide dissolves in water and reacts with it. Which equation shows this reaction?</p>
      stem: "<p>二氧化碳溶於水，並與水反應。以下哪一條方程式顯示這個反應？</p>",
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
        "碳是非金屬。它的氧化物是鹼性還是酸性？",
        // EN: Non-metal oxide + water → acid. Add the atoms of <span class="chem">CO2</span> and <span class="chem">H2O</span> together.
        "非金屬氧化物 + 水 → 酸。把 <span class=\"chem\">CO2</span> 和 <span class=\"chem\">H2O</span> 的原子加起來。",
      ],
      // EN: <p>Carbon dioxide is an acidic non-metal oxide. It reacts with water to form carbonic acid:</p><div class="worked__math"><span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>Check: C 1 = 1; O 2 + 1 = 3; H 2 = 2. The reaction is reversible. The solution is weakly acidic. This reaction is the cause of ocean acidification.</p>
      solution: "<p>二氧化碳是酸性的非金屬氧化物。它與水反應，生成碳酸 (carbonic acid)：</p><div class=\"worked__math\"><span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>檢查：C 1 = 1；O 2 + 1 = 3；H 2 = 2。這個反應是可逆的。溶液呈弱酸性。這個反應是海洋酸化的成因。</p>",
      misconception: {
        // EN (option A): Hydroxides form when the oxide of a group 1 or group 2 metal reacts with water. Carbon is a non-metal, so its oxide is acidic and forms an acid.
        "0": "氫氧化物是第 1 族或第 2 族金屬的氧化物與水反應時生成的。碳是非金屬，所以它的氧化物是酸性的，生成的是酸。",
        // EN (option C): This equation is not balanced: there are 3 oxygen atoms on the left and 4 on the right. Add the atoms of the oxide and the water to get the formula of the acid.
        "2": "這條方程式未配平：左邊有 3 個氧原子，右邊有 4 個。把氧化物和水的原子加起來，就得出酸的化學式。",
        // EN (option D): Carbon dioxide does not take oxygen from water or give oxygen to it. A non-metal oxide and water combine to form one product, an acid.
        "3": "二氧化碳不會從水奪取氧，也不會把氧給予水。非金屬氧化物與水化合，只生成一種生成物，就是酸。",
      },
    },

  }
});
