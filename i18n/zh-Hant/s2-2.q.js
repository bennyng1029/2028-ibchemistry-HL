/* s2-2.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's2-2.q', {
  questions: {

    // ── s2-2-q001 · mcq · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q001": {
      // EN: <p>Which statement best describes a covalent bond?</p>
      stem: "<p>以下哪一項最能描述共價鍵？</p>",
      options: [
        // EN: The electrostatic attraction between oppositely charged ions.
        "帶相反電荷的離子之間的靜電引力。",
        // EN: The electrostatic attraction between a shared pair of electrons and the positively charged nuclei.
        "共用電子對與帶正電荷的原子核之間的靜電引力。",
        // EN: The electrostatic attraction between a lattice of cations and delocalized electrons.
        "陽離子晶格與離域電子之間的靜電引力。",
        // EN: The transfer of electrons from one atom to another atom.
        "電子由一個原子轉移到另一個原子。",
      ],
      hints: [
        // EN: In a covalent bond, two atoms share a pair of electrons.
        "在共價鍵中，兩個原子共用一對電子。",
        // EN: A bond is always an electrostatic attraction. Ask: what is attracted to what?
        "化學鍵必定是一種靜電引力 (electrostatic attraction)。想一想：是甚麼吸引甚麼？",
      ],
      // EN: <p>Two nuclei are both attracted to the same shared pair of electrons. That attraction holds the atoms together.</p><p>The markscheme wording is: <strong>electrostatic attraction between a shared pair of electrons and the positively charged nuclei</strong>.</p>
      solution: "<p>兩個原子核都受同一對共用電子吸引。這種引力把兩個原子拉在一起。</p><p>評分準則的用語是：<strong>共用電子對與帶正電荷的原子核之間的靜電引力</strong>，英文是「electrostatic attraction between a shared pair of electrons and the positively charged nuclei」。</p>",
      misconception: {
        // EN (option A): This describes an ionic bond. In a covalent bond no ions form: the atoms share a pair of electrons.
        "0": "這是離子鍵的描述。共價鍵中沒有離子形成：原子共用一對電子。",
        // EN (option C): This describes a metallic bond. In a covalent bond the shared pair stays between two nuclei. It is not delocalized through a lattice.
        "2": "這是金屬鍵的描述。在共價鍵中，共用電子對留在兩個原子核之間，不會在整個晶格中離域。",
        // EN (option D): Electron transfer happens when ions form. A bond is an attraction, not a transfer. In a covalent bond the electrons are shared.
        "3": "形成離子時才有電子轉移。化學鍵是一種引力，不是轉移。共價鍵中的電子是共用的。",
      },
    },

    // ── s2-2-q002 · numeric · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q002": {
      // EN: <p>The first step in drawing a Lewis formula is to count the valence electrons.</p><p>How many valence electrons must be shown in the Lewis formula of the carbonate ion, <span class="chem">CO3^2-</span>?</p>
      stem: "<p>繪畫路易斯結構式 (Lewis formula) 的第一步，是數出價電子 (valence electrons) 的數目。</p><p>碳酸根離子 <span class=\"chem\">CO3^2-</span> 的路易斯結構式中，必須顯示多少個價電子？</p>",
      hints: [
        // EN: Carbon is in group 14, so it has 4 valence electrons. Oxygen is in group 16, so it has 6.
        "碳在第 14 族，所以有 4 個價電子。氧在第 16 族，所以有 6 個。",
        // EN: The charge is 2−. A negative charge means extra electrons. Add them.
        "電荷是 2−。負電荷代表有額外的電子，要把它們加上去。",
      ],
      // EN: <div class="worked__math">C: 1 × 4 = 4</div><div class="worked__math">O: 3 × 6 = 18</div><div class="worked__math">charge 2−: add 2</div><div class="worked__math">total = 4 + 18 + 2 = 24 valence electrons</div><p>For a negative ion you add electrons. For a positive ion you subtract electrons.</p>
      solution: "<div class=\"worked__math\">C: 1 × 4 = 4</div><div class=\"worked__math\">O: 3 × 6 = 18</div><div class=\"worked__math\">電荷 2−: 加 2</div><div class=\"worked__math\">總數 = 4 + 18 + 2 = 24 個價電子</div><p>陰離子要加上電子，陽離子要減去電子。</p>",
    },

    // ── s2-2-q003 · numeric · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q003": {
      // EN: <p>How many lone pairs (non-bonding pairs) of electrons are there in the Lewis formula of one molecule of carbon dioxide, <span class="chem">CO2</span>?</p><p>Count the lone pairs on <strong>all</strong> the atoms.</p>
      stem: "<p>一個二氧化碳分子 <span class=\"chem\">CO2</span> 的路易斯結構式中，有多少個孤電子對 (lone pairs)，即非鍵合電子對 (non-bonding pairs)？</p><p>要數出<strong>所有</strong>原子上的孤電子對。</p>",
      hints: [
        // EN: Total valence electrons: 4 + 6 + 6 = 16, which is 8 pairs.
        "價電子總數：4 + 6 + 6 = 16，即 8 對。",
        // EN: The structure is <span class="chem">O=C=O</span>. The two double bonds use 4 pairs. Where are the other pairs?
        "結構是 <span class=\"chem\">O=C=O</span>。兩個雙鍵用了 4 對。其餘的電子對在哪裏？",
      ],
      // EN: <p><span class="chem">CO2</span> has 4 + (2 × 6) = 16 valence electrons, which is 8 pairs.</p><p>The two <span class="chem">C=O</span> double bonds use 4 pairs. The other 4 pairs are lone pairs: <strong>2 on each oxygen atom</strong>. Carbon has none.</p><p>Total lone pairs = <strong>4</strong>. A Lewis formula must show every lone pair, including those on the outer atoms.</p>
      solution: "<p><span class=\"chem\">CO2</span> 有 4 + (2 × 6) = 16 個價電子，即 8 對。</p><p>兩個 <span class=\"chem\">C=O</span> 雙鍵用了 4 對。其餘 4 對是孤電子對：<strong>每個氧原子各有 2 對</strong>。碳沒有孤電子對。</p><p>孤電子對總數 = <strong>4</strong>。路易斯結構式必須顯示每一個孤電子對，包括外圍原子上的。</p>",
    },

    // ── s2-2-q004 · mcq · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q004": {
      // EN: <p>Which is the correct Lewis formula of hydrogen cyanide, <span class="chem">HCN</span>?</p><p>Each line is one shared pair. Each pair of dots is one lone pair.</p>
      stem: "<p>以下哪一個是氰化氫 (hydrogen cyanide) <span class=\"chem\">HCN</span> 的正確路易斯結構式？</p><p>每條線代表一對共用電子。每一對點代表一個孤電子對。</p>",
      options: [
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, no lone pairs" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H 與 C 以單鍵連接，C 與 N 以三鍵連接，沒有孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C double bond N, two lone pairs on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-2.6" x2="75.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="2.6" x2="75.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="93.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="88.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="88.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="93.8" cy="10.5" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H 與 C 以單鍵連接，C 與 N 以雙鍵連接，N 上有兩個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-2.6\" x2=\"75.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"2.6\" x2=\"75.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"93.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"88.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"88.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"93.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, one lone pair on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="98.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="98.0" cy="-3.2" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H 與 C 以單鍵連接，C 與 N 以三鍵連接，N 上有一個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"98.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"98.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, one lone pair on C and one lone pair on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><circle cx="43.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="36.8" cy="-14.0" r="1.7" fill="currentColor"/><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="98.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="98.0" cy="-3.2" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H 與 C 以單鍵連接，C 與 N 以三鍵連接，C 和 N 上各有一個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><circle cx=\"43.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"36.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"98.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"98.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/></svg>",
      ],
      hints: [
        // EN: Count the valence electrons first: H has 1, C has 4, N has 5.
        "先數價電子：H 有 1 個，C 有 4 個，N 有 5 個。",
        // EN: In the correct formula, C and N each have 8 electrons around them and H has 2.
        "在正確的結構式中，C 和 N 周圍各有 8 個電子，H 有 2 個。",
        // EN: Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.
        "數一數每幅圖中的電子：每條線 2 個，每一對點 2 個。",
      ],
      // EN: <p>Valence electrons: 1 + 4 + 5 = <strong>10</strong> (5 pairs).</p><p><span class="chem">H–C≡N</span> uses 4 pairs in bonds: one in the single bond and three in the triple bond. The last pair is a lone pair on nitrogen.</p><p>Check: H has 2 electrons. C has 8 (four bonding pairs). N has 8 (three bonding pairs and one lone pair).</p>
      solution: "<p>價電子：1 + 4 + 5 = <strong>10</strong> 個（5 對）。</p><p><span class=\"chem\">H–C≡N</span> 用了 4 對來形成鍵：單鍵一對，三鍵三對。最後一對是氮上的孤電子對。</p><p>檢查：H 有 2 個電子。C 有 8 個（四個鍵合電子對）。N 有 8 個（三個鍵合電子對和一個孤電子對）。</p>",
      misconception: {
        // EN (option A): This drawing shows only 8 electrons. <span class="chem">HCN</span> has 1 + 4 + 5 = 10 valence electrons. The lone pair on nitrogen is missing, so nitrogen has only 6 electrons around it.
        "0": "這幅圖只顯示了 8 個電子。<span class=\"chem\">HCN</span> 有 1 + 4 + 5 = 10 個價電子。氮上的孤電子對漏了，所以氮周圍只有 6 個電子。",
        // EN (option B): The electron count (10) is right, but carbon has only 3 pairs (6 electrons) around it. Moving one lone pair from N into the bond makes a triple bond and gives carbon an octet.
        "1": "電子數目（10 個）是對的，但碳周圍只有 3 對（6 個電子）。把 N 的一個孤電子對移到鍵中，就成為三鍵，碳也有了八隅體。",
        // EN (option D): This drawing shows 12 electrons, but only 10 valence electrons are available. Carbon would also have 5 pairs around it, which is more than an octet.
        "3": "這幅圖顯示了 12 個電子，但只有 10 個價電子可用。碳周圍也會有 5 對電子，超過了八隅體。",
      },
    },

    // ── s2-2-q005 · numeric · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q005": {
      // EN: <p>Ethanoic acid has the structural formula <span class="chem">CH3COOH</span>. One oxygen atom is joined to carbon by a double bond. The other oxygen atom is in an <span class="chem">O–H</span> group.</p><p>How many <strong>bonding pairs</strong> of electrons are there in the Lewis formula of one molecule of ethanoic acid?</p>
      stem: "<p>乙酸 (ethanoic acid) 的結構式是 <span class=\"chem\">CH3COOH</span>。其中一個氧原子以雙鍵與碳連接，另一個氧原子在 <span class=\"chem\">O–H</span> 基團中。</p><p>一個乙酸分子的路易斯結構式中，有多少個<strong>鍵合電子對</strong> (bonding pairs)？</p>",
      hints: [
        // EN: List the bonds: three <span class="chem">C–H</span>, one <span class="chem">C–C</span>, one <span class="chem">C=O</span>, one <span class="chem">C–O</span>, one <span class="chem">O–H</span>.
        "列出所有的鍵：三個 <span class=\"chem\">C–H</span>、一個 <span class=\"chem\">C–C</span>、一個 <span class=\"chem\">C=O</span>、一個 <span class=\"chem\">C–O</span>、一個 <span class=\"chem\">O–H</span>。",
        // EN: A double bond is two bonding pairs.
        "一個雙鍵是兩個鍵合電子對。",
      ],
      // EN: <div class="worked__math">C–H: 3 pairs</div><div class="worked__math">C–C: 1 pair</div><div class="worked__math">C=O: 2 pairs</div><div class="worked__math">C–O: 1 pair</div><div class="worked__math">O–H: 1 pair</div><div class="worked__math">total = 8 bonding pairs</div><p>Check with the electron count. Valence electrons = (2 × 4) + (4 × 1) + (2 × 6) = 24, which is 12 pairs. There are 8 bonding pairs and 4 lone pairs (2 on each oxygen atom). 8 + 4 = 12.</p>
      solution: "<div class=\"worked__math\">C–H: 3 對</div><div class=\"worked__math\">C–C: 1 對</div><div class=\"worked__math\">C=O: 2 對</div><div class=\"worked__math\">C–O: 1 對</div><div class=\"worked__math\">O–H: 1 對</div><div class=\"worked__math\">總數 = 8 個鍵合電子對</div><p>用電子數目來檢查。價電子 = (2 × 4) + (4 × 1) + (2 × 6) = 24 個，即 12 對。有 8 個鍵合電子對和 4 個孤電子對（每個氧原子各 2 個）。8 + 4 = 12。</p>",
    },

    // ── s2-2-q006 · multi · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q006": {
      // EN: <p>In which of these molecules does the <strong>central atom</strong> have fewer than 8 electrons in its valence shell? Select all that apply.</p>
      stem: "<p>以下哪些分子的<strong>中心原子</strong>，價電子層中的電子少於 8 個？選出所有正確選項。</p>",
      options: [
        // EN: <span class="chem">BeCl2</span>
        "<span class=\"chem\">BeCl2</span>",
        // EN: <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>",
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">CCl4</span>
        "<span class=\"chem\">CCl4</span>",
        // EN: <span class="chem">PCl3</span>
        "<span class=\"chem\">PCl3</span>",
      ],
      hints: [
        // EN: Find the group of each central atom. That tells you its number of valence electrons.
        "找出每個中心原子所屬的族，就知道它有多少個價電子。",
        // EN: Beryllium has 2 valence electrons and boron has 3. How many bonds can each form, and are any lone pairs left?
        "鈹有 2 個價電子，硼有 3 個。它們各能形成多少個鍵？還有孤電子對剩下嗎？",
      ],
      // EN: <p><strong><span class="chem">BeCl2</span></strong>: Be has 2 valence electrons and forms 2 bonds. It has 2 pairs = 4 electrons.</p><p><strong><span class="chem">BF3</span></strong>: B has 3 valence electrons and forms 3 bonds. It has 3 pairs = 6 electrons.</p><p>In <span class="chem">NH3</span>, <span class="chem">CCl4</span> and <span class="chem">PCl3</span> the central atom has four pairs (bonding pairs plus lone pairs), so it has an octet.</p>
      solution: "<p><strong><span class=\"chem\">BeCl2</span></strong>：Be 有 2 個價電子，形成 2 個鍵。它有 2 對 = 4 個電子。</p><p><strong><span class=\"chem\">BF3</span></strong>：B 有 3 個價電子，形成 3 個鍵。它有 3 對 = 6 個電子。</p><p>在 <span class=\"chem\">NH3</span>、<span class=\"chem\">CCl4</span> 和 <span class=\"chem\">PCl3</span> 中，中心原子有四對電子（鍵合電子對加孤電子對），所以有八隅體。</p>",
      misconception: {
        // EN (option C): Nitrogen in <span class="chem">NH3</span> has three bonding pairs and one lone pair. That is 8 electrons. Remember to count the lone pair.
        "2": "<span class=\"chem\">NH3</span> 中的氮有三個鍵合電子對和一個孤電子對，即 8 個電子。記得把孤電子對也數進去。",
        // EN (option D): Carbon in <span class="chem">CCl4</span> has four bonding pairs. That is 8 electrons.
        "3": "<span class=\"chem\">CCl4</span> 中的碳有四個鍵合電子對，即 8 個電子。",
        // EN (option E): Phosphorus in <span class="chem">PCl3</span> has three bonding pairs and one lone pair. That is 8 electrons.
        "4": "<span class=\"chem\">PCl3</span> 中的磷有三個鍵合電子對和一個孤電子對，即 8 個電子。",
      },
    },

    // ── s2-2-q007 · mcq · challenge · SL · Structure 2.2.1 · 1 mark
    "s2-2-q007": {
      // EN: <p>The peroxide ion has the formula <span class="chem">O2^2-</span>. Each oxygen atom in the ion obeys the octet rule.</p><p>Which is the correct Lewis formula of the peroxide ion?</p>
      stem: "<p>過氧離子 (peroxide ion) 的化學式是 <span class=\"chem\">O2^2-</span>。離子中每個氧原子都符合八隅體規則 (octet rule)。</p><p>以下哪一個是過氧離子的正確路易斯結構式？</p>",
      options: [
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O double bond O, two lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="53.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="48.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="48.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="53.8" cy="10.5" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"帶 2− 電荷的離子。O 與 O 以雙鍵連接，每個 O 上有兩個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"53.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"53.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O single bond O, two lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="35.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="53.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="48.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="48.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="53.8" cy="10.5" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"帶 2− 電荷的離子。O 與 O 以單鍵連接，每個 O 上有兩個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"35.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"53.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"53.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O double bond O, three lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="14.0" r="1.7" fill="currentColor"/><circle cx="3.2" cy="14.0" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="58.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="58.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="40.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="47.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"帶 2− 電荷的離子。O 與 O 以雙鍵連接，每個 O 上有三個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O single bond O, three lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="35.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="14.0" r="1.7" fill="currentColor"/><circle cx="3.2" cy="14.0" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="58.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="58.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="40.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="47.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"帶 2− 電荷的離子。O 與 O 以單鍵連接，每個 O 上有三個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"35.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
      ],
      hints: [
        // EN: Count the valence electrons: 6 from each oxygen atom, plus the electrons for the charge.
        "數價電子：每個氧原子 6 個，再加上電荷所代表的電子。",
        // EN: 14 electrons is 7 pairs. Share them so that each oxygen atom has 4 pairs around it.
        "14 個電子即 7 對。分配這些電子對，使每個氧原子周圍有 4 對。",
        // EN: Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.
        "數一數每幅圖中的電子：每條線 2 個，每一對點 2 個。",
      ],
      // EN: <div class="worked__math">valence electrons = (2 × 6) + 2 = 14, which is 7 pairs</div><p>With a <strong>single</strong> <span class="chem">O–O</span> bond (1 pair), 6 pairs are left. That is 3 lone pairs on each oxygen atom.</p><p>Check: each O has 1 bonding pair + 3 lone pairs = 8 electrons. The charge 2− must be shown.</p><p>The extra two electrons are why the ion has a single bond, while the <span class="chem">O2</span> molecule has a double bond.</p>
      solution: "<div class=\"worked__math\">價電子 = (2 × 6) + 2 = 14 個，即 7 對</div><p>用<strong>單</strong>鍵 <span class=\"chem\">O–O</span>（1 對）連接，餘下 6 對，即每個氧原子有 3 個孤電子對。</p><p>檢查：每個 O 有 1 個鍵合電子對 + 3 個孤電子對 = 8 個電子。必須標出電荷 2−。</p><p>正因為多了兩個電子，這個離子是單鍵，而 <span class=\"chem\">O2</span> 分子是雙鍵。</p>",
      misconception: {
        // EN (option A): This drawing has 12 electrons. That is the count for an <span class="chem">O2</span> molecule. The ion has a 2− charge, so it has 2 more electrons: 14 in total.
        "0": "這幅圖有 12 個電子，那是 <span class=\"chem\">O2</span> 分子的電子數目。這個離子帶 2− 電荷，所以多 2 個電子，共 14 個。",
        // EN (option B): This drawing has only 10 electrons, and each oxygen atom has only 6 electrons around it. The ion has 14 valence electrons.
        "1": "這幅圖只有 10 個電子，每個氧原子周圍只有 6 個電子。這個離子有 14 個價電子。",
        // EN (option C): This drawing has 16 electrons, and each oxygen atom has 10 electrons around it. The ion has 14 valence electrons.
        "2": "這幅圖有 16 個電子，每個氧原子周圍有 10 個電子。這個離子有 14 個價電子。",
      },
    },

    // ── s2-2-q008 · numeric · foundation · SL · Structure 2.2.2 · 1 mark
    "s2-2-q008": {
      // EN: <p>A nitrogen molecule, <span class="chem">N2</span>, contains a triple bond.</p><p>How many <strong>electrons</strong> are shared between the two nitrogen atoms?</p>
      stem: "<p>氮分子 <span class=\"chem\">N2</span> 含有一個三鍵。</p><p>兩個氮原子之間共用多少個<strong>電子</strong>？</p>",
      hints: [
        // EN: A triple bond is three shared pairs.
        "三鍵是三對共用電子。",
        // EN: The question asks for electrons, not pairs.
        "題目問的是電子的數目，不是電子對的數目。",
      ],
      // EN: <p>Single bond: 1 shared pair. Double bond: 2 shared pairs. Triple bond: 3 shared pairs.</p><div class="worked__math">3 pairs × 2 electrons = 6 electrons</div><p>Each nitrogen atom also has one lone pair, which is not shared.</p>
      solution: "<p>單鍵：1 對共用電子。雙鍵：2 對。三鍵：3 對。</p><div class=\"worked__math\">3 對 × 2 個電子 = 6 個電子</div><p>每個氮原子還有一個孤電子對，這對電子不是共用的。</p>",
    },

    // ── s2-2-q009 · mcq · exam · SL · Structure 2.2.2 · 1 mark
    "s2-2-q009": {
      // EN: <p>Which species has the <strong>shortest</strong> bond between carbon and oxygen?</p>
      stem: "<p>以下哪一個物種中，碳與氧之間的鍵<strong>最短</strong>？</p>",
      options: [
        // EN: methanol, <span class="chem">CH3OH</span>
        "甲醇 (methanol) <span class=\"chem\">CH3OH</span>",
        // EN: carbon dioxide, <span class="chem">CO2</span>
        "二氧化碳 <span class=\"chem\">CO2</span>",
        // EN: carbon monoxide, <span class="chem">CO</span>
        "一氧化碳 <span class=\"chem\">CO</span>",
        // EN: methoxymethane, <span class="chem">CH3OCH3</span>
        "甲氧基甲烷 (methoxymethane) <span class=\"chem\">CH3OCH3</span>",
      ],
      hints: [
        // EN: Work out the Lewis formula of each species. How many pairs are shared between C and O?
        "寫出每個物種的路易斯結構式。C 和 O 之間共用多少對電子？",
        // EN: More shared pairs pull the two nuclei closer together.
        "共用電子對越多，兩個原子核就被拉得越近。",
        // EN: <span class="chem">CO</span> has 4 + 6 = 10 valence electrons. Both atoms need an octet.
        "<span class=\"chem\">CO</span> 有 4 + 6 = 10 個價電子。兩個原子都需要八隅體。",
      ],
      // EN: <p>Carbon monoxide has 10 valence electrons. The only way to give both atoms an octet is a <strong>triple bond</strong> with one lone pair on each atom.</p><p>Data booklet bond lengths: <span class="chem">C–O</span> 143 pm, <span class="chem">C=O</span> 122 pm, <span class="chem">C≡O</span> 113 pm.</p><p>More shared pairs give a stronger attraction between the nuclei and the shared electrons, so the bond is shorter.</p>
      solution: "<p>一氧化碳有 10 個價電子。要令兩個原子都有八隅體，唯一的方法是形成<strong>三鍵</strong>，每個原子各有一個孤電子對。</p><p>數據手冊的鍵長：<span class=\"chem\">C–O</span> 143 pm，<span class=\"chem\">C=O</span> 122 pm，<span class=\"chem\">C≡O</span> 113 pm。</p><p>共用電子對越多，原子核與共用電子之間的引力越強，所以鍵越短。</p>",
      misconception: {
        // EN (option A): Methanol has a carbon–oxygen single bond (one shared pair). Single bonds are the longest. The booklet value is 143 pm.
        "0": "甲醇有碳氧單鍵（一對共用電子）。單鍵最長，手冊的數值是 143 pm。",
        // EN (option B): <span class="chem">CO2</span> has double bonds (122 pm). They are shorter than single bonds, but one of the other species has three shared pairs.
        "1": "<span class=\"chem\">CO2</span> 有雙鍵 (122 pm)。雙鍵比單鍵短，但另一個物種有三對共用電子。",
        // EN (option D): Methoxymethane has two carbon–oxygen single bonds. Single bonds are the longest. The booklet value is 143 pm.
        "3": "甲氧基甲烷有兩個碳氧單鍵。單鍵最長，手冊的數值是 143 pm。",
      },
    },

    // ── s2-2-q010 · short · exam · SL · Structure 2.2.2 · 2 marks
    "s2-2-q010": {
      // EN: <p>The data booklet gives these values.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Carbon–carbon bonds</caption><thead><tr><th scope="col">Bond</th><th scope="col">Length / pm</th><th scope="col">Bond enthalpy / <span class="unit">kJ mol-1</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">C–C</span></th><td>154</td><td>346</td></tr><tr><th scope="row"><span class="chem">C=C</span></th><td>134</td><td>614</td></tr></tbody></table></div><p>Explain why the <span class="chem">C=C</span> bond is shorter and stronger than the <span class="chem">C–C</span> bond.</p>
      stem: "<p>數據手冊提供以下數值。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>碳碳鍵</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">鍵長 / pm</th><th scope=\"col\">鍵焓 / <span class=\"unit\">kJ mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">C–C</span></th><td>154</td><td>346</td></tr><tr><th scope=\"row\"><span class=\"chem\">C=C</span></th><td>134</td><td>614</td></tr></tbody></table></div><p>解釋 (explain) 為甚麼 <span class=\"chem\">C=C</span> 鍵比 <span class=\"chem\">C–C</span> 鍵短而且強。</p>",
      hints: [
        // EN: Start with the number of shared pairs in each bond.
        "先看每種鍵有多少對共用電子。",
        // EN: A covalent bond is an attraction. What is attracted to what, and why is it stronger here?
        "共價鍵是一種引力。是甚麼吸引甚麼？為甚麼這裏的引力較強？",
      ],
      // EN: <p>A double bond has two shared pairs of electrons. A single bond has one shared pair.</p><p>With more shared electrons between them, the two nuclei are attracted more strongly to the shared electrons. This pulls the nuclei closer together (shorter bond), and more energy is needed to separate them (stronger bond).</p>
      answer: "<p>雙鍵有兩對共用電子，單鍵只有一對。</p><p>兩個原子核之間的共用電子較多，原子核受共用電子的吸引就較強。這把兩個原子核拉得更近（鍵較短），要把它們分開也需要較多能量（鍵較強）。</p>",
      markscheme: [
        // EN: The double bond has two shared pairs of electrons (four shared electrons) and the single bond has one shared pair. Accept: more shared electrons / greater electron density between the nuclei.
        "雙鍵有兩對共用電子（四個共用電子），單鍵有一對。接受：共用電子較多／原子核之間的電子密度較大。",
        // EN: Greater (electrostatic) attraction between the nuclei and the shared electrons (so the nuclei are pulled closer together and more energy is needed to break the bond).
        "原子核與共用電子之間的（靜電）引力較大（所以原子核被拉得更近，斷鍵需要較多能量）。",
      ],
    },

    // ── s2-2-q011 · mcq · challenge · SL · Structure 2.2.2 · 1 mark
    "s2-2-q011": {
      // EN: <p>The table shows data booklet values for three carbon–carbon bonds.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Carbon–carbon bonds</caption><thead><tr><th scope="col">Bond</th><th scope="col">Shared pairs</th><th scope="col">Length / pm</th><th scope="col">Bond enthalpy / <span class="unit">kJ mol-1</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">C–C</span></th><td>1</td><td>154</td><td>346</td></tr><tr><th scope="row"><span class="chem">C=C</span></th><td>2</td><td>134</td><td>614</td></tr><tr><th scope="row"><span class="chem">C≡C</span></th><td>3</td><td>120</td><td>839</td></tr></tbody></table></div><p>Which statement is supported by <strong>all</strong> the data?</p>
      stem: "<p>下表列出數據手冊中三種碳碳鍵的數值。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>碳碳鍵</caption><thead><tr><th scope=\"col\">鍵</th><th scope=\"col\">共用電子對</th><th scope=\"col\">鍵長 / pm</th><th scope=\"col\">鍵焓 / <span class=\"unit\">kJ mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">C–C</span></th><td>1</td><td>154</td><td>346</td></tr><tr><th scope=\"row\"><span class=\"chem\">C=C</span></th><td>2</td><td>134</td><td>614</td></tr><tr><th scope=\"row\"><span class=\"chem\">C≡C</span></th><td>3</td><td>120</td><td>839</td></tr></tbody></table></div><p>以下哪一項陳述得到<strong>所有</strong>數據支持？</p>",
      options: [
        // EN: Bond enthalpy is directly proportional to the number of shared pairs.
        "鍵焓與共用電子對的數目成正比。",
        // EN: Each extra shared pair makes the bond shorter and stronger, but each extra pair adds less strength than the pair before it.
        "每多一對共用電子，鍵就變得較短、較強，但每多一對所增加的強度都比前一對少。",
        // EN: Longer bonds are stronger bonds.
        "鍵越長就越強。",
        // EN: The triple bond is the weakest bond because six shared electrons repel each other strongly.
        "三鍵是最弱的鍵，因為六個共用電子互相強烈排斥。",
      ],
      hints: [
        // EN: Bond enthalpy is the energy needed to break the bond. A bigger value means a stronger bond.
        "鍵焓 (bond enthalpy) 是斷鍵所需的能量。數值越大，鍵越強。",
        // EN: Find the increase from single to double, and from double to triple.
        "找出由單鍵到雙鍵、以及由雙鍵到三鍵的增幅。",
        // EN: For "directly proportional", doubling the pairs would double the bond enthalpy. Does it?
        "如果是「成正比」，電子對數目加倍，鍵焓也應該加倍。實際是這樣嗎？",
      ],
      // EN: <div class="worked__math">single → double: 614 − 346 = 268 <span class="unit">kJ mol-1</span></div><div class="worked__math">double → triple: 839 − 614 = 225 <span class="unit">kJ mol-1</span></div><p>The first shared pair is worth 346. The second adds 268. The third adds 225. So each extra pair adds less than the one before.</p><p>The lengths fall from 154 to 134 to 120 pm. More shared pairs attract the two nuclei more strongly, so the bond is shorter and stronger.</p>
      solution: "<div class=\"worked__math\">單鍵 → 雙鍵: 614 − 346 = 268 <span class=\"unit\">kJ mol-1</span></div><div class=\"worked__math\">雙鍵 → 三鍵: 839 − 614 = 225 <span class=\"unit\">kJ mol-1</span></div><p>第一對共用電子值 346。第二對增加 268。第三對增加 225。所以每多一對，增加的都比前一對少。</p><p>鍵長由 154 降至 134，再降至 120 pm。共用電子對越多，對兩個原子核的吸引越強，所以鍵較短、較強。</p>",
      misconception: {
        // EN (option A): Test it. Twice the single-bond value is 2 × 346 = 692, but the double bond is 614. Three times is 1038, but the triple bond is 839. The bond gets stronger, but not in proportion.
        "0": "驗算一下。單鍵數值的兩倍是 2 × 346 = 692，但雙鍵是 614。三倍是 1038，但三鍵是 839。鍵確實變強，但不成正比。",
        // EN (option C): Read the two columns together. As the length goes down (154, 134, 120 pm), the bond enthalpy goes up. Shorter bonds are stronger.
        "2": "把兩欄一起看。鍵長下降（154、134、120 pm）時，鍵焓上升。較短的鍵較強。",
        // EN (option D): The triple bond has the largest bond enthalpy (839), so it is the strongest of the three. A larger bond enthalpy means more energy is needed to break the bond.
        "3": "三鍵的鍵焓最大 (839)，所以是三者中最強的。鍵焓越大，斷鍵所需的能量越多。",
      },
    },

    // ── s2-2-q012 · mcq · foundation · SL · Structure 2.2.3 · 1 mark
    "s2-2-q012": {
      // EN: <p>What is a coordination bond?</p>
      stem: "<p>甚麼是配位鍵 (coordination bond)？</p>",
      options: [
        // EN: A covalent bond in which both electrons of the shared pair come from the same atom.
        "共用電子對的兩個電子都來自同一個原子的共價鍵。",
        // EN: A covalent bond in which each atom gives one electron to the shared pair.
        "兩個原子各提供一個電子給共用電子對的共價鍵。",
        // EN: A bond formed when one atom transfers two electrons to another atom.
        "一個原子把兩個電子轉移給另一個原子而形成的鍵。",
        // EN: A weak attraction between a lone pair on one molecule and a hydrogen atom on another molecule.
        "一個分子上的孤電子對與另一個分子上的氫原子之間的弱引力。",
      ],
      hints: [
        // EN: A coordination bond is still a shared pair of electrons.
        "配位鍵仍然是一對共用電子。",
        // EN: Think about where the two electrons come from.
        "想一想這兩個電子從哪裏來。",
      ],
      // EN: <p>A coordination bond is a covalent bond in which <strong>both electrons of the shared pair originate from the same atom</strong>.</p><p>The atom that gives the pair must have a lone pair. The atom that accepts it must have space in its valence shell.</p>
      solution: "<p>配位鍵是一種共價鍵，其中<strong>共用電子對的兩個電子都來自同一個原子</strong>。</p><p>提供電子對的原子必須有孤電子對。接受電子對的原子，價電子層中必須有空位。</p>",
      misconception: {
        // EN (option B): This is how most covalent bonds form. In a coordination bond, one atom gives both electrons.
        "1": "大多數共價鍵都是這樣形成的。在配位鍵中，兩個電子都由同一個原子提供。",
        // EN (option C): Transfer of electrons makes ions. In a coordination bond the pair is shared between the two atoms, not transferred.
        "2": "電子轉移會生成離子。在配位鍵中，電子對由兩個原子共用，沒有轉移。",
        // EN (option D): This describes a hydrogen bond, which is an intermolecular force. A coordination bond is a covalent bond inside a molecule or ion.
        "3": "這是氫鍵的描述，氫鍵是一種分子間引力。配位鍵是分子或離子內的共價鍵。",
      },
    },

    // ── s2-2-q013 · mcq · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q013": {
      // EN: <p>Ammonia reacts with a hydrogen ion to form the ammonium ion.</p><p><span class="chem">NH3 + H+ -> NH4+</span></p><p>Which statement about the new <span class="chem">N–H</span> bond is correct?</p>
      stem: "<p>氨與氫離子反應，生成銨離子。</p><p><span class=\"chem\">NH3 + H+ -> NH4+</span></p><p>以下哪一項關於新形成的 <span class=\"chem\">N–H</span> 鍵的陳述是正確的？</p>",
      options: [
        // EN: The hydrogen ion provides both electrons for the bond.
        "氫離子提供了這個鍵的兩個電子。",
        // EN: The bond is ionic, because it forms between a molecule and an ion.
        "這個鍵是離子鍵，因為它在分子和離子之間形成。",
        // EN: Nitrogen provides both electrons for the bond. In the ion, all four <span class="chem">N–H</span> bonds are the same.
        "氮提供了這個鍵的兩個電子。在離子中，四個 <span class=\"chem\">N–H</span> 鍵完全相同。",
        // EN: Nitrogen provides both electrons for the bond. In the ion, this bond is longer and weaker than the other three.
        "氮提供了這個鍵的兩個電子。在離子中，這個鍵比其餘三個長而且弱。",
      ],
      hints: [
        // EN: How many electrons does <span class="chem">H+</span> have?
        "<span class=\"chem\">H+</span> 有多少個電子？",
        // EN: Nitrogen in ammonia has one lone pair.
        "氨中的氮有一個孤電子對。",
        // EN: After the bond forms, can you tell which shared pair came from where?
        "鍵形成之後，你還能分辨哪一對共用電子來自哪裏嗎？",
      ],
      // EN: <p><span class="chem">H+</span> has no electrons. Nitrogen in <span class="chem">NH3</span> has a lone pair. Nitrogen shares this pair with <span class="chem">H+</span>, so both electrons in the new bond come from nitrogen. This is a coordination bond.</p><p>After it forms, the coordination bond is the same as the other three <span class="chem">N–H</span> bonds. The ion is a regular tetrahedron.</p>
      solution: "<p><span class=\"chem\">H+</span> 沒有電子。<span class=\"chem\">NH3</span> 中的氮有一個孤電子對。氮與 <span class=\"chem\">H+</span> 共用這對電子，所以新鍵的兩個電子都來自氮。這是配位鍵。</p><p>配位鍵形成之後，與其餘三個 <span class=\"chem\">N–H</span> 鍵完全相同。這個離子是正四面體。</p>",
      misconception: {
        // EN (option A): A hydrogen ion, <span class="chem">H+</span>, has no electrons. It cannot give any. The pair comes from the lone pair on nitrogen.
        "0": "氫離子 <span class=\"chem\">H+</span> 沒有電子，不能提供任何電子。這對電子來自氮上的孤電子對。",
        // EN (option B): The pair of electrons is shared between N and H, so the bond is covalent. No electrons are transferred.
        "1": "這對電子由 N 和 H 共用，所以是共價鍵。沒有電子轉移。",
        // EN (option D): The first part is right. But once the bond has formed, a shared pair is a shared pair. All four <span class="chem">N–H</span> bonds have the same length and strength.
        "3": "前半句是對的。但鍵一旦形成，共用電子對就是共用電子對。四個 <span class=\"chem\">N–H</span> 鍵的長度和強度都相同。",
      },
    },

    // ── s2-2-q014 · multi · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q014": {
      // EN: <p>Which of these species contain a coordination bond? Select all that apply.</p>
      stem: "<p>以下哪些物種含有配位鍵 (coordination bond)？選出所有正確選項。</p>",
      options: [
        // EN: <span class="chem">NH4+</span>
        "<span class=\"chem\">NH4+</span>",
        // EN: <span class="chem">H3O+</span>
        "<span class=\"chem\">H3O+</span>",
        // EN: <span class="chem">CO</span>
        "<span class=\"chem\">CO</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
        // EN: <span class="chem">CH4</span>
        "<span class=\"chem\">CH4</span>",
      ],
      hints: [
        // EN: Look for an atom that needs more bonds than its unpaired electrons allow.
        "找出這樣的原子：它要形成的鍵，比它的不成對電子所容許的多。",
        // EN: <span class="chem">NH4+</span> and <span class="chem">H3O+</span> form when a molecule with a lone pair bonds to <span class="chem">H+</span>.
        "<span class=\"chem\">NH4+</span> 和 <span class=\"chem\">H3O+</span> 都是由帶孤電子對的分子與 <span class=\"chem\">H+</span> 鍵合而成的。",
        // EN: In <span class="chem">CO</span>, carbon has 4 valence electrons but takes part in a triple bond. Oxygen has 6. Count where the six shared electrons come from.
        "在 <span class=\"chem\">CO</span> 中，碳有 4 個價電子，卻參與一個三鍵。氧有 6 個。數一數六個共用電子分別來自哪裏。",
      ],
      // EN: <p><strong><span class="chem">NH4+</span></strong>: the lone pair on N of <span class="chem">NH3</span> bonds to <span class="chem">H+</span>.</p><p><strong><span class="chem">H3O+</span></strong>: a lone pair on O of <span class="chem">H2O</span> bonds to <span class="chem">H+</span>.</p><p><strong><span class="chem">CO</span></strong>: the triple bond has 6 shared electrons. Carbon gives 2 and oxygen gives 4. So one of the three shared pairs comes only from oxygen.</p><p>In <span class="chem">CO2</span> and <span class="chem">CH4</span>, each atom gives one electron to every shared pair.</p>
      solution: "<p><strong><span class=\"chem\">NH4+</span></strong>：<span class=\"chem\">NH3</span> 中 N 的孤電子對與 <span class=\"chem\">H+</span> 鍵合。</p><p><strong><span class=\"chem\">H3O+</span></strong>：<span class=\"chem\">H2O</span> 中 O 的一個孤電子對與 <span class=\"chem\">H+</span> 鍵合。</p><p><strong><span class=\"chem\">CO</span></strong>：三鍵有 6 個共用電子。碳提供 2 個，氧提供 4 個。所以三對共用電子中，有一對只來自氧。</p><p>在 <span class=\"chem\">CO2</span> 和 <span class=\"chem\">CH4</span> 中，每一對共用電子都由兩個原子各提供一個電子。</p>",
      misconception: {
        // EN (option D): In <span class="chem">CO2</span>, carbon gives 2 electrons to each double bond and each oxygen gives 2. Every shared pair has one electron from each atom.
        "3": "在 <span class=\"chem\">CO2</span> 中，碳向每個雙鍵提供 2 個電子，每個氧也提供 2 個。每一對共用電子都是兩個原子各出一個電子。",
        // EN (option E): In <span class="chem">CH4</span>, carbon gives one electron and hydrogen gives one electron to each bond. No atom gives both.
        "4": "在 <span class=\"chem\">CH4</span> 中，每個鍵都由碳提供一個電子、氫提供一個電子。沒有原子同時提供兩個。",
      },
    },

    // ── s2-2-q015 · mcq · challenge · SL · Structure 2.2.3 · 1 mark
    "s2-2-q015": {
      // EN: <p>Ammonia, <span class="chem">NH3</span>, reacts with boron trifluoride, <span class="chem">BF3</span>, to form one molecule with a bond between nitrogen and boron: <span class="chem">H3N–BF3</span>.</p><p>Which row is correct for the product?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Atom that gives both electrons of the N–B bond</th><th scope="col">Arrangement of the four atoms around boron</th></tr></thead><tbody><tr><th scope="row">A</th><td>boron</td><td>tetrahedral</td></tr><tr><th scope="row">B</th><td>nitrogen</td><td>trigonal planar</td></tr><tr><th scope="row">C</th><td>nitrogen</td><td>tetrahedral</td></tr><tr><th scope="row">D</th><td>fluorine</td><td>trigonal pyramidal</td></tr></tbody></table></div>
      stem: "<p>氨 <span class=\"chem\">NH3</span> 與三氟化硼 (boron trifluoride) <span class=\"chem\">BF3</span> 反應，生成一個分子，其中氮和硼之間有一個鍵：<span class=\"chem\">H3N–BF3</span>。</p><p>關於這個生成物，哪一行正確？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選項</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">提供 N–B 鍵兩個電子的原子</th><th scope=\"col\">硼周圍四個原子的排列</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>硼</td><td>四面體形</td></tr><tr><th scope=\"row\">B</th><td>氮</td><td>平面三角形</td></tr><tr><th scope=\"row\">C</th><td>氮</td><td>四面體形</td></tr><tr><th scope=\"row\">D</th><td>氟</td><td>三角錐體形</td></tr></tbody></table></div>",
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
        // EN: Draw the Lewis formulas of <span class="chem">NH3</span> and <span class="chem">BF3</span>. Which atom has a lone pair? Which atom has fewer than 8 electrons?
        "繪畫 <span class=\"chem\">NH3</span> 和 <span class=\"chem\">BF3</span> 的路易斯結構式。哪個原子有孤電子對？哪個原子的電子少於 8 個？",
        // EN: After the bond forms, count the electron domains around boron.
        "鍵形成之後，數一數硼周圍的電子域 (electron domains)。",
      ],
      // EN: <p>Nitrogen in <span class="chem">NH3</span> has a lone pair. Boron in <span class="chem">BF3</span> has only 3 pairs (6 electrons). Nitrogen shares its lone pair with boron. Both electrons come from nitrogen, so this is a coordination bond.</p><p>Boron now has <strong>four bonding pairs and no lone pairs</strong>. Four electron domains repel to a <strong>tetrahedral</strong> arrangement. Before the reaction, <span class="chem">BF3</span> was trigonal planar.</p>
      solution: "<p><span class=\"chem\">NH3</span> 中的氮有一個孤電子對。<span class=\"chem\">BF3</span> 中的硼只有 3 對電子（6 個電子）。氮與硼共用它的孤電子對。兩個電子都來自氮，所以這是配位鍵。</p><p>硼現在有<strong>四個鍵合電子對，沒有孤電子對</strong>。四個電子域互相排斥，形成<strong>四面體形</strong>排列。反應前，<span class=\"chem\">BF3</span> 是平面三角形。</p>",
      misconception: {
        // EN (option A): Boron in <span class="chem">BF3</span> has only 6 electrons in its valence shell and no lone pair. It accepts a pair. It cannot give one.
        "0": "<span class=\"chem\">BF3</span> 中的硼，價電子層只有 6 個電子，沒有孤電子對。它接受一對電子，不能提供。",
        // EN (option B): The donor atom is right. But boron now has four bonding pairs, not three. Four electron domains do not give a trigonal planar shape.
        "1": "提供電子的原子是對的。但硼現在有四個鍵合電子對，不是三個。四個電子域不會形成平面三角形。",
        // EN (option D): The new bond is between N and B, so fluorine is not the donor. Boron has four bonding pairs and no lone pair, so the shape around it is not trigonal pyramidal.
        "3": "新鍵在 N 和 B 之間，所以提供電子的不是氟。硼有四個鍵合電子對，沒有孤電子對，所以它周圍的形狀不是三角錐體形。",
      },
    },

    // ── s2-2-q016 · mcq · foundation · SL · Structure 2.2.4 · 1 mark
    "s2-2-q016": {
      // EN: <p>What is the molecular geometry (shape) of an ammonia molecule, <span class="chem">NH3</span>?</p>
      stem: "<p>氨分子 <span class=\"chem\">NH3</span> 的分子形狀 (molecular geometry) 是甚麼？</p>",
      options: [
        // EN: trigonal planar
        "平面三角形 (trigonal planar)",
        // EN: tetrahedral
        "四面體形 (tetrahedral)",
        // EN: trigonal pyramidal
        "三角錐體形 (trigonal pyramidal)",
        // EN: bent (V-shaped)
        "彎曲形（V 形）(bent)",
      ],
      hints: [
        // EN: Count the electron domains around nitrogen. Include the lone pair.
        "數一數氮周圍的電子域 (electron domains)，孤電子對也要算。",
        // EN: The molecular geometry is the shape made by the atoms only.
        "分子形狀只看原子所構成的形狀。",
      ],
      // EN: <p>Nitrogen has 5 valence electrons. It forms three <span class="chem">N–H</span> bonds and keeps one lone pair. That is <strong>four electron domains</strong>.</p><p>Electron domain geometry: tetrahedral. One domain is a lone pair, so the atoms make a <strong>trigonal pyramidal</strong> shape.</p>
      solution: "<p>氮有 5 個價電子。它形成三個 <span class=\"chem\">N–H</span> 鍵，並保留一個孤電子對。即<strong>四個電子域</strong>。</p><p>電子域幾何形狀 (electron domain geometry)：四面體形。其中一個電子域是孤電子對，所以原子構成<strong>三角錐體形</strong>。</p>",
      misconception: {
        // EN (option A): Trigonal planar needs three electron domains. Nitrogen in <span class="chem">NH3</span> has four: three bonding pairs and one lone pair. The lone pair pushes the three bonds down out of the plane.
        "0": "平面三角形需要三個電子域。<span class=\"chem\">NH3</span> 中的氮有四個：三個鍵合電子對和一個孤電子對。孤電子對把三個鍵向下推離平面。",
        // EN (option B): Tetrahedral is the electron domain geometry. The molecular geometry describes only the positions of the atoms, and one of the four domains is a lone pair.
        "1": "四面體形是電子域幾何形狀。分子形狀只描述原子的位置，而四個電子域中有一個是孤電子對。",
        // EN (option D): Bent needs two bonded atoms on the central atom. Nitrogen in <span class="chem">NH3</span> has three bonded atoms.
        "3": "彎曲形的中心原子只連接兩個原子。<span class=\"chem\">NH3</span> 中的氮連接了三個原子。",
      },
    },

    // ── s2-2-q017 · numeric · foundation · SL · Structure 2.2.4 · 1 mark
    "s2-2-q017": {
      // EN: <p>What is the <span class="chem">H–C–H</span> bond angle in a methane molecule, <span class="chem">CH4</span>?</p>
      stem: "<p>甲烷分子 <span class=\"chem\">CH4</span> 中，<span class=\"chem\">H–C–H</span> 鍵角 (bond angle) 是多少？</p>",
      hints: [
        // EN: Carbon has four bonding pairs and no lone pairs.
        "碳有四個鍵合電子對，沒有孤電子對。",
        // EN: Four electron domains move as far apart as possible in three dimensions. The molecule is not flat.
        "四個電子域在三維空間中盡量互相遠離。分子不是平面的。",
      ],
      // EN: <p>Carbon has four electron domains, all bonding pairs. They repel equally and point to the corners of a tetrahedron.</p><p>The tetrahedral angle is <strong>109.5°</strong>. It is not 90°, because the molecule is three-dimensional, not a flat cross.</p>
      solution: "<p>碳有四個電子域，全是鍵合電子對。它們的排斥力相等，指向四面體的四個角。</p><p>四面體的鍵角是 <strong>109.5°</strong>。不是 90°，因為分子是立體的，不是平面的十字形。</p>",
    },

    // ── s2-2-q018 · mcq · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q018": {
      // EN: <p>A Lewis formula of the nitrite ion, <span class="chem">NO2-</span>, is shown. A Lewis formula does not show the shape.</p><p><svg viewBox="-22 -22 152 44" width="152" height="44" role="img" aria-label="Ion with charge 1 minus, drawn in a straight line. O double bond N, N single bond O. Two lone pairs on the first O, one lone pair on N, three lone pairs on the second O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="53.0" y1="0.0" x2="79.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><text x="88" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="91.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="84.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="102.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="102.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="84.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="91.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M102 -20H107V20H102" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="111" y="-12" font-size="13" fill="currentColor">−</text></svg></p><p>Which row gives the electron domain geometry and the molecular geometry around the nitrogen atom?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Electron domain geometry</th><th scope="col">Molecular geometry</th></tr></thead><tbody><tr><th scope="row">A</th><td>trigonal planar</td><td>trigonal planar</td></tr><tr><th scope="row">B</th><td>trigonal planar</td><td>bent (V-shaped)</td></tr><tr><th scope="row">C</th><td>tetrahedral</td><td>bent (V-shaped)</td></tr><tr><th scope="row">D</th><td>linear</td><td>linear</td></tr></tbody></table></div>
      stem: "<p>下圖是亞硝酸根離子 (nitrite ion) <span class=\"chem\">NO2-</span> 的一個路易斯結構式。路易斯結構式並不顯示形狀。</p><p><svg viewBox=\"-22 -22 152 44\" width=\"152\" height=\"44\" role=\"img\" aria-label=\"帶 1− 電荷的離子，畫成一直線。O 與 N 以雙鍵連接，N 與 O 以單鍵連接。第一個 O 上有兩個孤電子對，N 上有一個孤電子對，第二個 O 上有三個孤電子對\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"53.0\" y1=\"0.0\" x2=\"79.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"88\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"91.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"84.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"102.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"102.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"84.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"91.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M102 -20H107V20H102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"111\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">−</text></svg></p><p>哪一行正確列出氮原子周圍的電子域幾何形狀 (electron domain geometry) 和分子形狀 (molecular geometry)？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選項</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">電子域幾何形狀</th><th scope=\"col\">分子形狀</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>平面三角形</td><td>平面三角形</td></tr><tr><th scope=\"row\">B</th><td>平面三角形</td><td>彎曲形（V 形）</td></tr><tr><th scope=\"row\">C</th><td>四面體形</td><td>彎曲形（V 形）</td></tr><tr><th scope=\"row\">D</th><td>直線形</td><td>直線形</td></tr></tbody></table></div>",
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
        // EN: Count the electron domains around N. A double bond counts as one domain. A lone pair counts as one domain.
        "數一數 N 周圍的電子域。一個雙鍵算一個電子域。一個孤電子對也算一個電子域。",
        // EN: The electron domain geometry uses all the domains. The molecular geometry uses only the atoms.
        "電子域幾何形狀看所有電子域。分子形狀只看原子。",
      ],
      // EN: <p>Around nitrogen there are <strong>three electron domains</strong>: one double bond, one single bond and one lone pair.</p><p>Three domains repel to a <strong>trigonal planar</strong> electron domain geometry.</p><p>Only two of the domains hold atoms, so the molecular geometry is <strong>bent (V-shaped)</strong>. The bond angle is a little less than 120° (about 115°), because the lone pair repels more than the bonding pairs.</p>
      solution: "<p>氮周圍有<strong>三個電子域</strong>：一個雙鍵、一個單鍵和一個孤電子對。</p><p>三個電子域互相排斥，形成<strong>平面三角形</strong>的電子域幾何形狀。</p><p>只有兩個電子域連接着原子，所以分子形狀是<strong>彎曲形（V 形）</strong>。鍵角略小於 120°（約 115°），因為孤電子對的排斥力比鍵合電子對大。</p>",
      misconception: {
        // EN (option A): The electron domain geometry is right. But the molecular geometry describes only the atoms. One of the three domains is a lone pair, so only two positions hold atoms.
        "0": "電子域幾何形狀是對的。但分子形狀只描述原子。三個電子域中有一個是孤電子對，所以只有兩個位置有原子。",
        // EN (option C): A double bond counts as <strong>one</strong> electron domain. Nitrogen has three domains (double bond, single bond, lone pair), not four.
        "2": "一個雙鍵只算<strong>一個</strong>電子域。氮有三個電子域（雙鍵、單鍵、孤電子對），不是四個。",
        // EN (option D): This ignores the lone pair on nitrogen. The lone pair is an electron domain. It repels the two bonds, so the ion is not linear.
        "3": "這忽略了氮上的孤電子對。孤電子對也是一個電子域。它排斥那兩個鍵，所以這個離子不是直線形。",
      },
    },

    // ── s2-2-q019 · order · exam · SL · Structure 2.2.4 · 2 marks
    "s2-2-q019": {
      // EN: <p>Put these molecules in order of bond angle around the central atom. Put the <strong>smallest</strong> bond angle first.</p>
      stem: "<p>按中心原子周圍的鍵角 (bond angle) 大小排列這些分子。鍵角<strong>最小</strong>的排在最前。</p>",
      options: [
        // EN: <span class="chem">H2O</span>
        "<span class=\"chem\">H2O</span>",
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">CH4</span>
        "<span class=\"chem\">CH4</span>",
        // EN: <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: Count the electron domains around each central atom: 2, 3 or 4.
        "數一數每個中心原子周圍的電子域：2、3 或 4 個。",
        // EN: <span class="chem">H2O</span>, <span class="chem">NH3</span> and <span class="chem">CH4</span> all have four domains. They differ in the number of lone pairs.
        "<span class=\"chem\">H2O</span>、<span class=\"chem\">NH3</span> 和 <span class=\"chem\">CH4</span> 都有四個電子域，分別在於孤電子對的數目。",
        // EN: Lone pairs repel more than bonding pairs, so they squeeze the bond angle.
        "孤電子對的排斥力比鍵合電子對大，所以會把鍵角壓小。",
      ],
      // EN: <p><span class="chem">H2O</span>: 4 domains, 2 lone pairs, about 104.5°.</p><p><span class="chem">NH3</span>: 4 domains, 1 lone pair, about 107°.</p><p><span class="chem">CH4</span>: 4 domains, no lone pairs, 109.5°.</p><p><span class="chem">BF3</span>: 3 domains, no lone pairs, 120°.</p><p><span class="chem">CO2</span>: 2 domains (each double bond is one domain), 180°.</p>
      solution: "<p><span class=\"chem\">H2O</span>：4 個電子域，2 個孤電子對，約 104.5°。</p><p><span class=\"chem\">NH3</span>：4 個電子域，1 個孤電子對，約 107°。</p><p><span class=\"chem\">CH4</span>：4 個電子域，沒有孤電子對，109.5°。</p><p><span class=\"chem\">BF3</span>：3 個電子域，沒有孤電子對，120°。</p><p><span class=\"chem\">CO2</span>：2 個電子域（每個雙鍵算一個電子域），180°。</p>",
    },

    // ── s2-2-q020 · short · exam · SL · Structure 2.2.4 · 2 marks
    "s2-2-q020": {
      // EN: <p>The <span class="chem">H–C–H</span> bond angle in methane, <span class="chem">CH4</span>, is 109.5°. The <span class="chem">H–N–H</span> bond angle in ammonia, <span class="chem">NH3</span>, is about 107°.</p><p>Explain why the bond angle in ammonia is smaller.</p>
      stem: "<p>甲烷 <span class=\"chem\">CH4</span> 的 <span class=\"chem\">H–C–H</span> 鍵角是 109.5°。氨 <span class=\"chem\">NH3</span> 的 <span class=\"chem\">H–N–H</span> 鍵角約為 107°。</p><p>解釋 (explain) 為甚麼氨的鍵角較小。</p>",
      hints: [
        // EN: Compare the electron domains around C and around N.
        "比較 C 周圍和 N 周圍的電子域。",
        // EN: Do all electron domains repel equally?
        "所有電子域的排斥力都相等嗎？",
      ],
      // EN: <p>Both central atoms have four electron domains, so both have a tetrahedral electron domain geometry. In methane all four domains are bonding pairs. In ammonia there are three bonding pairs and one lone pair (non-bonding pair).</p><p>A lone pair repels more strongly than a bonding pair. It pushes the three bonding pairs closer together, so the angle is less than 109.5°.</p>
      answer: "<p>兩個中心原子都有四個電子域，所以電子域幾何形狀都是四面體形。甲烷的四個電子域全是鍵合電子對。氨有三個鍵合電子對和一個孤電子對（非鍵合電子對）。</p><p>孤電子對的排斥力比鍵合電子對強。它把三個鍵合電子對推得更近，所以鍵角小於 109.5°。</p>",
      markscheme: [
        // EN: Nitrogen in ammonia has one lone (non-bonding) pair and three bonding pairs, but carbon in methane has four bonding pairs and no lone pair. Accept: both have four electron domains but ammonia has a lone pair.
        "氨中的氮有一個孤電子對（非鍵合電子對）和三個鍵合電子對，而甲烷中的碳有四個鍵合電子對，沒有孤電子對。接受：兩者都有四個電子域，但氨有一個孤電子對。",
        // EN: Lone pairs repel more than bonding pairs (so the bonding pairs are pushed closer together).
        "孤電子對的排斥力比鍵合電子對大（所以鍵合電子對被推得更近）。",
      ],
    },

    // ── s2-2-q021 · mcq · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q021": {
      // EN: <p>Methanol has the structural formula <span class="chem">CH3OH</span>. Which row gives the geometry of the atoms around the carbon atom and around the oxygen atom?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Around carbon</th><th scope="col">Around oxygen</th></tr></thead><tbody><tr><th scope="row">A</th><td>tetrahedral</td><td>linear</td></tr><tr><th scope="row">B</th><td>tetrahedral</td><td>tetrahedral</td></tr><tr><th scope="row">C</th><td>trigonal pyramidal</td><td>bent (V-shaped)</td></tr><tr><th scope="row">D</th><td>tetrahedral</td><td>bent (V-shaped)</td></tr></tbody></table></div>
      stem: "<p>甲醇 (methanol) 的結構式是 <span class=\"chem\">CH3OH</span>。哪一行正確列出碳原子周圍和氧原子周圍的原子所構成的幾何形狀？</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選項</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">碳周圍</th><th scope=\"col\">氧周圍</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>四面體形</td><td>直線形</td></tr><tr><th scope=\"row\">B</th><td>四面體形</td><td>四面體形</td></tr><tr><th scope=\"row\">C</th><td>三角錐體形</td><td>彎曲形（V 形）</td></tr><tr><th scope=\"row\">D</th><td>四面體形</td><td>彎曲形（V 形）</td></tr></tbody></table></div>",
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
        // EN: Treat each atom in turn as a "central atom".
        "把每個原子輪流當作「中心原子」。",
        // EN: Carbon: four bonding pairs. Oxygen: two bonding pairs and two lone pairs.
        "碳：四個鍵合電子對。氧：兩個鍵合電子對和兩個孤電子對。",
      ],
      // EN: <p><strong>Carbon</strong> has four bonding pairs (three to H, one to O) and no lone pairs: <strong>tetrahedral</strong>, about 109.5°.</p><p><strong>Oxygen</strong> has four electron domains: two bonding pairs (to C and to H) and two lone pairs. The two atoms make a <strong>bent</strong> shape, like water, with an angle less than 109.5°.</p>
      solution: "<p><strong>碳</strong>有四個鍵合電子對（三個連接 H，一個連接 O），沒有孤電子對：<strong>四面體形</strong>，約 109.5°。</p><p><strong>氧</strong>有四個電子域：兩個鍵合電子對（連接 C 和 H）和兩個孤電子對。兩個原子構成<strong>彎曲形</strong>，與水相似，鍵角小於 109.5°。</p>",
      misconception: {
        // EN (option A): Oxygen has two bonding pairs <strong>and two lone pairs</strong>. The lone pairs repel the bonds, so <span class="chem">C–O–H</span> is not a straight line.
        "0": "氧有兩個鍵合電子對，<strong>還有兩個孤電子對</strong>。孤電子對排斥那兩個鍵，所以 <span class=\"chem\">C–O–H</span> 不是一條直線。",
        // EN (option B): Tetrahedral is the electron domain geometry around oxygen. The question asks for the geometry of the atoms. Only two atoms are bonded to oxygen.
        "1": "四面體形是氧周圍的電子域幾何形狀。題目問的是原子所構成的形狀。只有兩個原子與氧鍵合。",
        // EN (option C): Carbon is bonded to four atoms (three H and one O) and has no lone pair. Trigonal pyramidal needs three atoms and one lone pair.
        "2": "碳與四個原子鍵合（三個 H 和一個 O），沒有孤電子對。三角錐體形需要三個原子和一個孤電子對。",
      },
    },

    // ── s2-2-q022 · mcq · challenge · SL · Structure 2.2.4 · 1 mark
    "s2-2-q022": {
      // EN: <p>In methanal, <span class="chem">H2C=O</span>, the carbon atom is bonded to two hydrogen atoms and, by a double bond, to one oxygen atom.</p><p>Which is the best prediction of the <span class="chem">H–C–H</span> bond angle?</p>
      stem: "<p>在甲醛 (methanal) <span class=\"chem\">H2C=O</span> 中，碳原子與兩個氫原子鍵合，並以雙鍵與一個氧原子鍵合。</p><p>以下哪一項對 <span class=\"chem\">H–C–H</span> 鍵角的預測最好？</p>",
      options: [
        // EN: Exactly 120°, because there are three electron domains and no lone pairs on carbon.
        "剛好 120°，因為碳有三個電子域，沒有孤電子對。",
        // EN: Slightly less than 120°, because the double bond repels more than the single bonds.
        "略小於 120°，因為雙鍵的排斥力比單鍵大。",
        // EN: About 109.5°, because carbon forms four bonds.
        "約 109.5°，因為碳形成四個鍵。",
        // EN: Slightly more than 120°, because the double bond takes up less space than a single bond.
        "略大於 120°，因為雙鍵佔的空間比單鍵小。",
      ],
      hints: [
        // EN: How many electron domains are around carbon? A double bond counts as one.
        "碳周圍有多少個電子域？一個雙鍵算一個。",
        // EN: A double bond has four electrons in it. Compare its repulsion with that of a single bond.
        "雙鍵中有四個電子。把它的排斥力與單鍵的比較。",
      ],
      // EN: <p>Carbon has <strong>three electron domains</strong> (two single bonds, one double bond). The shape is trigonal planar with angles near 120°.</p><p>The double bond has greater electron density, so it repels the two <span class="chem">C–H</span> bonding pairs more strongly. They are pushed together. The <span class="chem">H–C–H</span> angle is <strong>slightly less than 120°</strong> (the measured value is about 116°).</p>
      solution: "<p>碳有<strong>三個電子域</strong>（兩個單鍵、一個雙鍵）。形狀是平面三角形，鍵角接近 120°。</p><p>雙鍵的電子密度較大，所以對兩個 <span class=\"chem\">C–H</span> 鍵合電子對的排斥較強，把它們推近。<span class=\"chem\">H–C–H</span> 鍵角<strong>略小於 120°</strong>（量度所得的數值約為 116°）。</p>",
      misconception: {
        // EN (option A): Three domains do give angles near 120°. But the three domains are not the same. The double bond has more electron density than a single bond, so the repulsions are not equal.
        "0": "三個電子域確實令鍵角接近 120°。但這三個電子域並不相同。雙鍵的電子密度比單鍵大，所以排斥力不相等。",
        // EN (option C): Count electron domains, not bonds. The double bond is one domain, so carbon has three domains, not four.
        "2": "要數電子域，不是數鍵。雙鍵是一個電子域，所以碳有三個電子域，不是四個。",
        // EN (option D): A double bond holds four electrons, so it has more electron density than a single bond. It repels more, not less.
        "3": "雙鍵有四個電子，所以電子密度比單鍵大。它的排斥力較大，不是較小。",
      },
    },

    // ── s2-2-q023 · mcq · foundation · SL · Structure 2.2.5 · 1 mark
    "s2-2-q023": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, Cl 3.2.</p><p>Which bond is the most polar?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C–H</span>
        "",
        // EN: <span class="chem">N–H</span>
        "",
        // EN: <span class="chem">O–H</span>
        "",
        // EN: <span class="chem">H–Cl</span>
        "",
      ],
      hints: [
        // EN: Bond polarity comes from the difference in electronegativity of the two atoms.
        "",
        // EN: Subtract the two values for each bond. The largest difference is the most polar bond.
        "",
      ],
      // EN: <div class="worked__math">C–H: 2.6 − 2.2 = 0.4</div><div class="worked__math">N–H: 3.0 − 2.2 = 0.8</div><div class="worked__math">O–H: 3.4 − 2.2 = 1.2</div><div class="worked__math">H–Cl: 3.2 − 2.2 = 1.0</div><p>The largest difference is for <strong><span class="chem">O–H</span></strong>, so it is the most polar bond.</p>
      solution: "",
      misconception: {
        // EN (option A): The difference for <span class="chem">C–H</span> is 2.6 − 2.2 = 0.4. This is the smallest difference of the four, so it is the least polar bond here.
        "0": "",
        // EN (option B): The difference for <span class="chem">N–H</span> is 3.0 − 2.2 = 0.8. One of the other bonds has a larger difference.
        "1": "",
        // EN (option D): The difference for <span class="chem">H–Cl</span> is 3.2 − 2.2 = 1.0. This is large, but one of the other bonds has a larger difference.
        "3": "",
      },
    },

    // ── s2-2-q024 · numeric · foundation · SL · Structure 2.2.5 · 1 mark
    "s2-2-q024": {
      // EN: <p>The data booklet gives the electronegativity of carbon as 2.6 and of chlorine as 3.2.</p><p>Calculate the electronegativity difference for a <span class="chem">C–Cl</span> bond.</p>
      stem: "",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "",
      ],
      // EN: <div class="worked__math">difference = 3.2 − 2.6 = 0.6</div><p>Chlorine has the higher electronegativity, so it attracts the shared pair more strongly. Chlorine is δ− and carbon is δ+.</p><p>Electronegativity has no unit.</p>
      solution: "",
    },

    // ── s2-2-q025 · mcq · exam · SL · Structure 2.2.5 · 1 mark
    "s2-2-q025": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, Cl 3.2.</p><p>Which row shows the correct partial charges?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Bond</th><th scope="col">δ+ atom</th><th scope="col">δ− atom</th></tr></thead><tbody><tr><th scope="row">A</th><td><span class="chem">N–H</span></td><td>N</td><td>H</td></tr><tr><th scope="row">B</th><td><span class="chem">C–Cl</span></td><td>C</td><td>Cl</td></tr><tr><th scope="row">C</th><td><span class="chem">O–F</span></td><td>F</td><td>O</td></tr><tr><th scope="row">D</th><td><span class="chem">C–H</span></td><td>C</td><td>H</td></tr></tbody></table></div>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
      ],
      hints: [
        // EN: The more electronegative atom attracts the shared pair more strongly.
        "",
        // EN: The atom that pulls the electrons closer becomes slightly negative, δ−.
        "",
      ],
      // EN: <p>In each bond, the atom with the <strong>higher</strong> electronegativity is δ−.</p><p><span class="chem">C–Cl</span>: Cl (3.2) is higher than C (2.6), so C is δ+ and Cl is δ−. Row B is correct.</p><p>The correct charges for the other rows: N δ− and H δ+; F δ− and O δ+; C δ− and H δ+.</p>
      solution: "",
      misconception: {
        // EN (option A): Nitrogen (3.0) is more electronegative than hydrogen (2.2). Nitrogen pulls the shared pair closer, so nitrogen is δ−.
        "0": "",
        // EN (option C): Fluorine (4.0) is more electronegative than oxygen (3.4). In this bond oxygen is the δ+ atom, even though oxygen is usually δ−.
        "2": "",
        // EN (option D): With the booklet values, carbon (2.6) is more electronegative than hydrogen (2.2). Carbon is δ− and hydrogen is δ+.
        "3": "",
      },
    },

    // ── s2-2-q026 · mcq · challenge · SL · Structure 2.2.5 · 1 mark
    "s2-2-q026": {
      // EN: <p>A student writes: "A covalent bond between atoms of two different elements is always polar."</p><p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, S 2.6, Cl 3.2.</p><p>Which bond shows that the student is <strong>not</strong> always right?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C–H</span>
        "",
        // EN: <span class="chem">N–Cl</span>
        "",
        // EN: <span class="chem">C–S</span>
        "",
        // EN: <span class="chem">O–F</span>
        "",
      ],
      hints: [
        // EN: A bond is polar when the two atoms have different electronegativities.
        "",
        // EN: Calculate the difference for each bond. Is any difference zero?
        "",
      ],
      // EN: <div class="worked__math">C–H: 2.6 − 2.2 = 0.4</div><div class="worked__math">N–Cl: 3.2 − 3.0 = 0.2</div><div class="worked__math">C–S: 2.6 − 2.6 = 0.0</div><div class="worked__math">O–F: 4.0 − 3.4 = 0.6</div><p>Carbon and sulfur have the same booklet value. The shared pair is attracted equally by both atoms, so the model predicts a <strong>non-polar</strong> <span class="chem">C–S</span> bond. Polarity depends on the electronegativity difference, not on the atoms being different elements.</p>
      solution: "",
      misconception: {
        // EN (option A): The difference is 2.6 − 2.2 = 0.4. This is small, but it is not zero. The bond is slightly polar.
        "0": "",
        // EN (option B): The difference is 3.2 − 3.0 = 0.2. This is very small, but it is not zero. Look for a pair of atoms with the same value.
        "1": "",
        // EN (option D): Both atoms are very electronegative, but what matters is the <strong>difference</strong>: 4.0 − 3.4 = 0.6. The bond is polar.
        "3": "",
      },
    },

    // ── s2-2-q027 · mcq · foundation · SL · Structure 2.2.6 · 1 mark
    "s2-2-q027": {
      // EN: <p>Which molecule is non-polar?</p>
      stem: "",
      options: [
        // EN: <span class="chem">H2O</span>
        "",
        // EN: <span class="chem">NH3</span>
        "",
        // EN: <span class="chem">HCl</span>
        "",
        // EN: <span class="chem">CO2</span>
        "",
      ],
      hints: [
        // EN: All four molecules have polar bonds. The shape decides if the bond dipoles cancel.
        "",
        // EN: Which molecule is linear with two identical bonds?
        "",
      ],
      // EN: <p><span class="chem">CO2</span> is <strong>linear</strong>: <span class="chem">O=C=O</span>. The two <span class="chem">C=O</span> bond dipoles are equal in size and point in opposite directions. They cancel, so the molecule has no net dipole.</p><p>A molecule can have polar bonds and still be non-polar.</p>
      solution: "",
      misconception: {
        // EN (option A): Water is bent. The two <span class="chem">O–H</span> bond dipoles point in different directions and do not cancel. Water is polar.
        "0": "",
        // EN (option B): Ammonia is trigonal pyramidal. The three <span class="chem">N–H</span> bond dipoles do not cancel. Ammonia is polar.
        "1": "",
        // EN (option C): <span class="chem">HCl</span> has one polar bond and nothing to cancel it. It is polar.
        "2": "",
      },
    },

    // ── s2-2-q028 · multi · exam · SL · Structure 2.2.6 · 1 mark
    "s2-2-q028": {
      // EN: <p>Which of these molecules are polar (have a net dipole)? Select all that apply.</p>
      stem: "",
      options: [
        // EN: <span class="chem">CCl4</span>
        "",
        // EN: <span class="chem">CHCl3</span>
        "",
        // EN: <span class="chem">BF3</span>
        "",
        // EN: <span class="chem">NF3</span>
        "",
        // EN: <span class="chem">CO2</span>
        "",
      ],
      hints: [
        // EN: Find the shape of each molecule first.
        "",
        // EN: Bond dipoles cancel when identical bonds are arranged symmetrically around the central atom with no lone pairs.
        "",
        // EN: Check each central atom for lone pairs, and check if all the outer atoms are the same.
        "",
      ],
      // EN: <p><strong><span class="chem">CHCl3</span></strong>: tetrahedral, but the four bonds are not all the same (one <span class="chem">C–H</span>, three <span class="chem">C–Cl</span>). The bond dipoles do not cancel. Polar.</p><p><strong><span class="chem">NF3</span></strong>: nitrogen has a lone pair, so the shape is trigonal pyramidal. The three <span class="chem">N–F</span> bond dipoles do not cancel. Polar.</p><p><span class="chem">CCl4</span> (tetrahedral), <span class="chem">BF3</span> (trigonal planar) and <span class="chem">CO2</span> (linear) are symmetrical, so their bond dipoles cancel.</p>
      solution: "",
      misconception: {
        // EN (option A): <span class="chem">CCl4</span> is tetrahedral with four identical <span class="chem">C–Cl</span> bonds. The four bond dipoles cancel. Polar bonds do not always make a polar molecule.
        "0": "",
        // EN (option C): <span class="chem">BF3</span> is trigonal planar with three identical <span class="chem">B–F</span> bonds at 120°. The three bond dipoles cancel.
        "2": "",
        // EN (option E): <span class="chem">CO2</span> is linear. The two equal <span class="chem">C=O</span> bond dipoles point in opposite directions and cancel.
        "4": "",
      },
    },

    // ── s2-2-q029 · short · exam · SL · Structure 2.2.6 · 2 marks
    "s2-2-q029": {
      // EN: <p>The bonds in carbon dioxide, <span class="chem">CO2</span>, and in water, <span class="chem">H2O</span>, are all polar.</p><p>Explain why a water molecule is polar but a carbon dioxide molecule is non-polar.</p>
      stem: "",
      hints: [
        // EN: The question tells you the bonds are polar. So the answer must be about geometry.
        "",
        // EN: Name the shape of each molecule. Then say what happens to the bond dipoles.
        "",
      ],
      // EN: <p>Carbon dioxide is linear, so the two equal bond dipoles point in opposite directions and cancel. There is no net dipole.</p><p>Water is bent (V-shaped), because oxygen has two lone pairs. The two bond dipoles do not cancel, so the molecule has a net dipole.</p>
      answer: "",
      markscheme: [
        // EN: Carbon dioxide is linear / symmetrical, so the bond dipoles cancel (no net dipole).
        "",
        // EN: Water is bent / V-shaped / not symmetrical, so the bond dipoles do not cancel (there is a net dipole).
        "",
      ],
    },

    // ── s2-2-q030 · mcq · challenge · SL · Structure 2.2.6 · 1 mark
    "s2-2-q030": {
      // EN: <p>Carbonyl sulfide has the structure <span class="chem">O=C=S</span>. Like carbon dioxide, it has two electron domains around the carbon atom.</p><p>Electronegativity values from the data booklet: C 2.6, O 3.4, S 2.6.</p><p>Which statement about carbonyl sulfide is correct?</p>
      stem: "",
      options: [
        // EN: It is non-polar, because it is linear and the bond dipoles cancel.
        "",
        // EN: It is polar, because the molecule is bent.
        "",
        // EN: It is polar, because the two bonds have different polarities, so the bond dipoles do not cancel.
        "",
        // EN: It is non-polar, because oxygen and sulfur are in the same group.
        "",
      ],
      hints: [
        // EN: Two electron domains: what is the shape?
        "",
        // EN: Calculate the electronegativity difference for <span class="chem">C=O</span> and for <span class="chem">C=S</span>.
        "",
        // EN: Dipoles cancel only if they are equal in size and opposite in direction.
        "",
      ],
      // EN: <p>Shape: two electron domains around carbon, so the molecule is <strong>linear</strong>.</p><div class="worked__math">C=O: 3.4 − 2.6 = 0.8 (polar)</div><div class="worked__math">C=S: 2.6 − 2.6 = 0.0 (non-polar)</div><p>The <span class="chem">C=O</span> bond dipole has nothing equal and opposite to cancel it. The molecule has a <strong>net dipole</strong>, with the oxygen end δ−.</p><p>Molecular polarity depends on both bond polarity and geometry. Always check both.</p>
      solution: "",
      misconception: {
        // EN (option A): It is linear, but linear molecules are non-polar only when the two bond dipoles are <strong>equal</strong> and opposite. Here the two bonds are different.
        "0": "",
        // EN (option B): Carbon has two electron domains and no lone pairs, so the molecule is linear, not bent. It is polar for a different reason.
        "1": "",
        // EN (option D): Elements in the same group can have different electronegativities. Use the values: O is 3.4 and S is 2.6.
        "3": "",
      },
    },

    // ── s2-2-q031 · mcq · foundation · SL · Structure 2.2.7 · 1 mark
    "s2-2-q031": {
      // EN: <p>Diamond and silicon have the same type of structure. Which statement describes it?</p>
      stem: "",
      options: [
        // EN: Each atom is covalently bonded to three other atoms in flat layers.
        "",
        // EN: Each atom is covalently bonded to four other atoms in a tetrahedral arrangement, through the whole structure.
        "",
        // EN: Small molecules are held together by weak intermolecular forces.
        "",
        // EN: Positive ions are held in a lattice by delocalized electrons.
        "",
      ],
      hints: [
        // EN: Carbon and silicon are both in group 14. Each atom has four valence electrons.
        "",
        // EN: Four bonding pairs around one atom repel to which shape?
        "",
      ],
      // EN: <p>In diamond and in silicon, every atom forms <strong>four covalent bonds</strong> to four other atoms. The four bonds point to the corners of a tetrahedron (109.5°).</p><p>This pattern repeats in three dimensions. The result is a <strong>covalent network structure</strong>: a giant structure with strong covalent bonds throughout.</p>
      solution: "",
      misconception: {
        // EN (option A): This describes graphite or graphene. In diamond and silicon, each atom uses all four valence electrons in four covalent bonds.
        "0": "",
        // EN (option C): Diamond and silicon are covalent network structures. They do not contain separate small molecules.
        "2": "",
        // EN (option D): This describes a metal. Silicon and diamond have covalent bonds between atoms. There are no ions and no delocalized electrons.
        "3": "",
      },
    },

    // ── s2-2-q032 · multi · foundation · SL · Structure 2.2.7 · 1 mark
    "s2-2-q032": {
      // EN: <p>Which of these substances are good conductors of electricity? Select all that apply.</p>
      stem: "",
      options: [
        // EN: diamond
        "",
        // EN: graphite
        "",
        // EN: graphene
        "",
        // EN: silicon dioxide
        "",
        // EN: fullerene, <span class="chem">C60</span>
        "",
      ],
      hints: [
        // EN: A substance conducts if it has charged particles that are free to move.
        "",
        // EN: In which structures does each carbon atom bond to only three other atoms?
        "",
      ],
      // EN: <p>In <strong>graphite</strong> and <strong>graphene</strong>, each carbon atom forms only three covalent bonds. The fourth valence electron of each atom is <strong>delocalized</strong> across the whole layer. These electrons are free to move, so they carry charge.</p><p>Diamond and silicon dioxide have no delocalized electrons. In <span class="chem">C60</span>, electrons cannot move between molecules.</p>
      solution: "",
      misconception: {
        // EN (option A): In diamond, each carbon atom uses all four valence electrons in covalent bonds. There are no delocalized electrons, so there is nothing to carry charge.
        "0": "",
        // EN (option D): In silicon dioxide, all the valence electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions.
        "3": "",
        // EN (option E): Electrons are delocalized inside each <span class="chem">C60</span> molecule, but they cannot move from one molecule to the next. So solid <span class="chem">C60</span> is a poor conductor.
        "4": "",
      },
    },

    // ── s2-2-q033 · short · exam · SL · Structure 2.2.7 · 3 marks
    "s2-2-q033": {
      // EN: <p>Diamond and graphite are allotropes of carbon. Diamond is very hard and does not conduct electricity. Graphite is soft and conducts electricity.</p><p>Explain these differences in terms of structure and bonding.</p>
      stem: "",
      hints: [
        // EN: How many covalent bonds does each carbon atom form in diamond? In graphite?
        "",
        // EN: For hardness, think about what holds the layers of graphite together.
        "",
        // EN: For conductivity, think about the fourth valence electron of each carbon atom in graphite.
        "",
      ],
      // EN: <p><strong>Diamond:</strong> each carbon atom is covalently bonded to four other carbon atoms in a three-dimensional (tetrahedral) network. The strong covalent bonds in all directions make it hard. All four valence electrons are in bonds, so there are no delocalized electrons and it does not conduct.</p><p><strong>Graphite:</strong> each carbon atom is covalently bonded to three other carbon atoms in layers of hexagons. There are only weak London (dispersion) forces between the layers, so the layers can slide over each other and graphite is soft. Each atom has one delocalized electron, which is free to move along the layers, so graphite conducts.</p>
      answer: "",
      markscheme: [
        // EN: Diamond: each carbon atom bonded to four others / three-dimensional (tetrahedral) covalent network, so it is hard. AND no delocalized electrons / all valence electrons used in bonds, so it does not conduct.
        "",
        // EN: Graphite is soft: layers held together by weak London (dispersion) forces, so the layers can slide over each other. Do not accept "van der Waals" alone or "weak bonds between atoms".
        "",
        // EN: Graphite conducts: each carbon atom bonded to only three others, so there are delocalized electrons that are free to move (along the layers). Do not accept "free ions".
        "",
      ],
    },

    // ── s2-2-q034 · short · exam · SL · Structure 2.2.7 · 3 marks
    "s2-2-q034": {
      // EN: <p>Carbon and silicon are both in group 14. Carbon dioxide, <span class="chem">CO2</span>, changes from solid to gas at −78 °C. Silicon dioxide, <span class="chem">SiO2</span>, melts at about 1700 °C.</p><p>Explain this large difference in terms of structure and bonding.</p>
      stem: "",
      hints: [
        // EN: One of these substances is made of small molecules. The other is a giant structure.
        "",
        // EN: For each substance, say exactly what must be broken or overcome.
        "",
        // EN: Finish with a comparison of strength.
        "",
      ],
      // EN: <p>Silicon dioxide has a covalent network structure. Each silicon atom is covalently bonded to four oxygen atoms and each oxygen atom to two silicon atoms, through the whole structure. To melt it, strong covalent bonds must be broken.</p><p>Carbon dioxide is made of small, separate molecules. Only weak London (dispersion) forces between the molecules must be overcome. The covalent bonds inside the molecules do not break.</p><p>Covalent bonds are much stronger than London forces, so much more energy is needed for silicon dioxide.</p>
      answer: "",
      markscheme: [
        // EN: Silicon dioxide is a covalent network (giant covalent) structure, so covalent bonds (between atoms) must be broken.
        "",
        // EN: Carbon dioxide is (simple) molecular, so only London (dispersion) forces between molecules must be overcome. Accept "intermolecular forces". Do not accept covalent bonds breaking in carbon dioxide.
        "",
        // EN: Covalent bonds are (much) stronger than London forces / intermolecular forces, so (much) more energy is needed. Do not accept "stronger bonding" with no bond or force named.
        "",
      ],
    },

    // ── s2-2-q035 · mcq · exam · SL · Structure 2.2.7 · 1 mark
    "s2-2-q035": {
      // EN: <p>Fullerene, <span class="chem">C60</span>, turns into a gas at a much lower temperature than diamond. It also dissolves in some non-polar solvents, but diamond does not.</p><p>Which statement explains these observations?</p>
      stem: "",
      options: [
        // EN: The covalent bonds in <span class="chem">C60</span> are much weaker than the covalent bonds in diamond.
        "",
        // EN: <span class="chem">C60</span> is made of separate molecules with weak London (dispersion) forces between them. Diamond is a covalent network.
        "",
        // EN: <span class="chem">C60</span> has delocalized electrons, and diamond does not.
        "",
        // EN: <span class="chem">C60</span> is made of layers that can slide over each other.
        "",
      ],
      hints: [
        // EN: The formula <span class="chem">C60</span> tells you there are 60 atoms in one molecule.
        "",
        // EN: What must be overcome to separate molecules? What must be broken to separate the atoms in diamond?
        "",
      ],
      // EN: <p><span class="chem">C60</span> is a <strong>molecular</strong> allotrope. Each molecule is a cage of 60 carbon atoms, each bonded to three others. Between the molecules there are only weak London (dispersion) forces.</p><p>Little energy is needed to separate the molecules, and a non-polar solvent can separate them too. In diamond, strong covalent bonds through the whole network must be broken.</p>
      solution: "",
      misconception: {
        // EN (option A): The covalent bonds inside a <span class="chem">C60</span> molecule are strong, and they do not break when it turns into a gas. Only the forces between the molecules are overcome.
        "0": "",
        // EN (option C): This is true, but it does not explain volatility or solubility. Those properties depend on what holds the particles together.
        "2": "",
        // EN (option D): Layers describe graphite. <span class="chem">C60</span> molecules are closed cages of 60 carbon atoms.
        "3": "",
      },
    },

    // ── s2-2-q036 · mcq · challenge · SL · Structure 2.2.7 · 1 mark
    "s2-2-q036": {
      // EN: <p>X, Y and Z are three allotropes of carbon: diamond, graphite and fullerene (<span class="chem">C60</span>), in some order.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Properties of three allotropes of carbon</caption><thead><tr><th scope="col">Allotrope</th><th scope="col">Hardness</th><th scope="col">Electrical conductivity of the solid</th><th scope="col">Solubility in methylbenzene (a non-polar solvent)</th></tr></thead><tbody><tr><th scope="row">X</th><td>soft</td><td>good</td><td>insoluble</td></tr><tr><th scope="row">Y</th><td>soft</td><td>poor</td><td>dissolves slightly and colours the solvent</td></tr><tr><th scope="row">Z</th><td>very hard</td><td>poor</td><td>insoluble</td></tr></tbody></table></div><p>Which row identifies X and Y?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">X</th><th scope="col">Y</th></tr></thead><tbody><tr><th scope="row">A</th><td>graphite</td><td>diamond</td></tr><tr><th scope="row">B</th><td>fullerene</td><td>graphite</td></tr><tr><th scope="row">C</th><td>diamond</td><td>fullerene</td></tr><tr><th scope="row">D</th><td>graphite</td><td>fullerene</td></tr></tbody></table></div>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
      ],
      hints: [
        // EN: Only one allotrope conducts well. Which one has delocalized electrons that can move through the whole structure?
        "",
        // EN: Covalent network structures do not dissolve. Which allotrope is made of separate molecules?
        "",
      ],
      // EN: <p><strong>X</strong> is a good conductor and is soft: <strong>graphite</strong>. It has delocalized electrons in its layers, and weak London forces between layers.</p><p><strong>Y</strong> dissolves in a non-polar solvent, so it is made of separate molecules: <strong>fullerene</strong>. Only London forces between <span class="chem">C60</span> molecules must be overcome.</p><p><strong>Z</strong> is very hard, a poor conductor and insoluble: diamond.</p>
      solution: "",
      misconception: {
        // EN (option A): X is right. But diamond is very hard and does not dissolve, because it is a covalent network. Y is soft and dissolves, so Y must be made of separate molecules.
        "0": "",
        // EN (option B): The two are the wrong way round. A substance that dissolves must be made of separate molecules. Graphite is a covalent network and does not dissolve.
        "1": "",
        // EN (option C): Diamond is very hard and a poor conductor. X is soft and a good conductor, so X has delocalized electrons that can move through the whole structure.
        "2": "",
      },
    },

    // ── s2-2-q037 · mcq · foundation · SL · Structure 2.2.8 · 1 mark
    "s2-2-q037": {
      // EN: <p>Which intermolecular force acts between methane molecules, <span class="chem">CH4</span>?</p>
      stem: "",
      options: [
        // EN: London (dispersion) forces only
        "",
        // EN: dipole–dipole forces and London (dispersion) forces
        "",
        // EN: hydrogen bonding and London (dispersion) forces
        "",
        // EN: covalent bonds
        "",
      ],
      hints: [
        // EN: Is a methane molecule polar or non-polar?
        "",
        // EN: Which force exists between all molecules, including non-polar ones?
        "",
      ],
      // EN: <p>Methane is a <strong>non-polar</strong> molecule: it is tetrahedral, so the small <span class="chem">C–H</span> bond dipoles cancel.</p><p>Non-polar molecules attract each other only by <strong>London (dispersion) forces</strong>. These forces exist between all molecules.</p>
      solution: "",
      misconception: {
        // EN (option B): Dipole–dipole forces need polar molecules. Methane is tetrahedral and symmetrical, so it has no net dipole.
        "1": "",
        // EN (option C): Methane contains hydrogen, but the hydrogen is bonded to carbon. Hydrogen bonding needs H bonded to N, O or F.
        "2": "",
        // EN (option D): Covalent bonds are inside each molecule (between C and H). The question asks about the forces between molecules.
        "3": "",
      },
    },

    // ── s2-2-q038 · mcq · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q038": {
      // EN: <p>Which substance has hydrogen bonding between its own molecules?</p>
      stem: "",
      options: [
        // EN: fluoromethane, <span class="chem">CH3F</span>
        "",
        // EN: methoxymethane, <span class="chem">CH3OCH3</span>
        "",
        // EN: ethanal, <span class="chem">CH3CHO</span>
        "",
        // EN: methanamine, <span class="chem">CH3NH2</span>
        "",
      ],
      hints: [
        // EN: Hydrogen bonding needs a hydrogen atom covalently bonded to N, O or F.
        "",
        // EN: For each molecule, check which atom each hydrogen is bonded to.
        "",
      ],
      // EN: <p>A hydrogen bond needs <strong>H covalently bonded to a very electronegative atom</strong> (N, O or F). That H is then attracted to a lone pair on N, O or F in a neighbouring molecule.</p><p>Only <span class="chem">CH3NH2</span> has such a hydrogen: the two H atoms of the <span class="chem">NH2</span> group. In the other three molecules, every H is bonded to carbon.</p>
      solution: "",
      misconception: {
        // EN (option A): The molecule contains H and F, but every H is bonded to carbon. There is no <span class="chem">H–F</span> bond, so there is no hydrogen that can form a hydrogen bond.
        "0": "",
        // EN (option B): The molecule contains H and O, but every H is bonded to carbon. There is no <span class="chem">O–H</span> bond. The forces are dipole–dipole and London forces.
        "1": "",
        // EN (option C): The oxygen is double-bonded to carbon. Every H is bonded to carbon. With no <span class="chem">O–H</span> bond, ethanal molecules cannot hydrogen-bond to each other.
        "2": "",
      },
    },

    // ── s2-2-q039 · multi · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q039": {
      // EN: <p>In IB Chemistry, "van der Waals forces" is an inclusive term. Which of these does it include? Select all that apply.</p>
      stem: "",
      options: [
        // EN: London (dispersion) forces
        "",
        // EN: dipole–induced dipole forces
        "",
        // EN: dipole–dipole forces
        "",
        // EN: hydrogen bonding
        "",
        // EN: covalent bonds
        "",
      ],
      hints: [
        // EN: The term covers three intermolecular forces.
        "",
        // EN: One intermolecular force is named separately, because it is stronger and needs H bonded to N, O or F.
        "",
      ],
      // EN: <p>"Van der Waals forces" covers <strong>London (dispersion) forces, dipole–induced dipole forces and dipole–dipole forces</strong>.</p><p>It does not include hydrogen bonding.</p><p>Exam tip: when you mean London forces, write "London (dispersion) forces". Markschemes do not accept "van der Waals" in place of "London".</p>
      solution: "",
      misconception: {
        // EN (option D): Hydrogen bonding is an intermolecular force, but the guide does not include it in the term "van der Waals forces".
        "3": "",
        // EN (option E): Covalent bonds hold atoms together inside a molecule. Van der Waals forces act between molecules.
        "4": "",
      },
    },

    // ── s2-2-q040 · mcq · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q040": {
      // EN: <p>A small amount of argon gas dissolves in water. Which force acts between an argon atom and a water molecule, in addition to London (dispersion) forces?</p>
      stem: "",
      options: [
        // EN: dipole–dipole forces
        "",
        // EN: dipole–induced dipole forces
        "",
        // EN: hydrogen bonding
        "",
        // EN: ionic bonding
        "",
      ],
      hints: [
        // EN: Water is a polar molecule. Argon is a non-polar atom.
        "",
        // EN: A polar molecule can push or pull the electron cloud of a nearby particle.
        "",
      ],
      // EN: <p>Water has a permanent dipole. Argon has none.</p><p>When a water molecule comes close, its dipole distorts the electron cloud of the argon atom. This creates an <strong>induced dipole</strong> in argon. The attraction between the two is a <strong>dipole–induced dipole force</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): Dipole–dipole forces need two polar molecules. An argon atom has no permanent dipole.
        "0": "",
        // EN (option C): Hydrogen bonding needs an N, O or F atom on the other particle. Argon is not one of these.
        "2": "",
        // EN (option D): Ionic bonding is the attraction between oppositely charged ions. Argon atoms and water molecules are not ions.
        "3": "",
      },
    },

    // ── s2-2-q041 · short · exam · SL · Structure 2.2.8 · 2 marks
    "s2-2-q041": {
      // EN: <p>Liquid ammonia, <span class="chem">NH3</span>, has hydrogen bonding between its molecules.</p><p>Explain how a hydrogen bond forms between two ammonia molecules.</p>
      stem: "",
      hints: [
        // EN: A hydrogen bond has two parts. First: which atom is the hydrogen covalently bonded to?
        "",
        // EN: Second: what on the other molecule attracts this hydrogen?
        "",
      ],
      // EN: <p>In ammonia, hydrogen is covalently bonded to nitrogen, which is a very electronegative atom. The <span class="chem">N–H</span> bond is polar, so the hydrogen atom is δ+.</p><p>This δ+ hydrogen is attracted to the lone pair on the (δ−) nitrogen atom of a neighbouring ammonia molecule. This attraction is the hydrogen bond.</p>
      answer: "",
      markscheme: [
        // EN: Hydrogen is (covalently) bonded to nitrogen, a (highly) electronegative atom. Accept: the N–H bond is very polar / H is δ+.
        "",
        // EN: This hydrogen is attracted to (the lone pair on) the nitrogen atom of a neighbouring molecule. Accept a labelled diagram. Do not accept a description of the N–H covalent bond as the hydrogen bond.
        "",
      ],
    },

    // ── s2-2-q042 · mcq · challenge · SL · Structure 2.2.8 · 1 mark
    "s2-2-q042": {
      // EN: <p>Two compounds have the same molecular formula, <span class="chem">C3H9N</span>.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two isomers</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">P</th><td><span class="chem">CH3CH2CH2NH2</span></td><td>48</td></tr><tr><th scope="row">Q</th><td><span class="chem">(CH3)3N</span></td><td>3</td></tr></tbody></table></div><p>Which is the best explanation for the higher boiling point of P?</p>
      stem: "",
      options: [
        // EN: P has more electrons than Q, so P has stronger London (dispersion) forces.
        "",
        // EN: P has hydrogen bonding between its molecules. Q has no hydrogen atom bonded to nitrogen, so Q has no hydrogen bonding between its molecules.
        "",
        // EN: The covalent bonds in P are stronger than the covalent bonds in Q.
        "",
        // EN: P is polar and Q is non-polar.
        "",
      ],
      hints: [
        // EN: Both molecules contain N and H. Look at which atom the H atoms are bonded to.
        "",
        // EN: In Q, the nitrogen atom is bonded to three carbon atoms.
        "",
      ],
      // EN: <p>In <strong>P</strong>, two hydrogen atoms are bonded to nitrogen (<span class="chem">NH2</span>). These δ+ hydrogens are attracted to the lone pair on nitrogen in a neighbouring molecule. P has <strong>hydrogen bonding</strong>.</p><p>In <strong>Q</strong>, nitrogen is bonded to three carbon atoms. Every hydrogen is bonded to carbon. Q molecules attract each other only by dipole–dipole and London forces.</p><p>Hydrogen bonding is stronger, so more energy is needed to separate the molecules of P. Q is also more compact, which makes its London forces a little weaker.</p>
      solution: "",
      misconception: {
        // EN (option A): P and Q have the same molecular formula, so they have the same number of electrons.
        "0": "",
        // EN (option C): Boiling separates molecules from each other. It does not break covalent bonds, so covalent bond strength does not decide the boiling point.
        "2": "",
        // EN (option D): Q is also polar. Its nitrogen atom has a lone pair and three bonding pairs, so the shape around N is trigonal pyramidal and the bond dipoles do not cancel.
        "3": "",
      },
    },

    // ── s2-2-q043 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "s2-2-q043": {
      // EN: <p>Pure liquid hexane, <span class="chem">C6H14</span>, does not conduct electricity. Why?</p>
      stem: "",
      options: [
        // EN: The covalent bonds in hexane are too strong.
        "",
        // EN: Hexane has no ions and no delocalized electrons that are free to move.
        "",
        // EN: The London (dispersion) forces between hexane molecules are too weak.
        "",
        // EN: The electrons in hexane are free to move but the molecules are not.
        "",
      ],
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that are free to move: ions or delocalized electrons.
        "",
      ],
      // EN: <p>Hexane is made of neutral molecules. All its valence electrons are held in covalent bonds. So there are <strong>no mobile ions and no delocalized electrons</strong> to carry charge.</p><p>This is true for most molecular covalent substances, as solids and as liquids.</p>
      solution: "",
      misconception: {
        // EN (option A): Bond strength is not the reason. A substance conducts only if it has charged particles that can move.
        "0": "",
        // EN (option C): Intermolecular forces affect the boiling point. They do not decide electrical conductivity.
        "2": "",
        // EN (option D): The electrons in hexane are held in covalent bonds between two atoms. They are not free to move through the liquid.
        "3": "",
      },
    },

    // ── s2-2-q044 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "s2-2-q044": {
      // EN: <p>What is overcome when liquid water boils?</p>
      stem: "",
      options: [
        // EN: the covalent bonds between hydrogen and oxygen atoms
        "",
        // EN: the hydrogen bonds between water molecules
        "",
        // EN: the ionic bonds between water molecules
        "",
        // EN: the attraction between the nuclei and the electrons in each atom
        "",
      ],
      hints: [
        // EN: Steam is still <span class="chem">H2O</span>. What has changed?
        "",
        // EN: Boiling separates molecules from each other.
        "",
      ],
      // EN: <p>Boiling separates the molecules from each other. The molecules stay whole.</p><p>So boiling overcomes the <strong>intermolecular forces</strong>. In water the strongest of these is <strong>hydrogen bonding</strong>. The <span class="chem">O–H</span> covalent bonds inside each molecule do not break.</p>
      solution: "",
      misconception: {
        // EN (option A): If the <span class="chem">O–H</span> covalent bonds broke, the water would become hydrogen and oxygen. Steam is still made of <span class="chem">H2O</span> molecules.
        "0": "",
        // EN (option C): Water molecules are neutral. There are no ions in pure water to form ionic bonds between molecules.
        "2": "",
        // EN (option D): Boiling does not remove electrons from atoms. It only separates whole molecules from each other.
        "3": "",
      },
    },

    // ── s2-2-q045 · short · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q045": {
      // EN: <p>Ethanol and methoxymethane have the same molecular formula, <span class="chem">C2H6O</span>, and the same molar mass.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two isomers</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">ethanol</th><td><span class="chem">CH3CH2OH</span></td><td>78</td></tr><tr><th scope="row">methoxymethane</th><td><span class="chem">CH3OCH3</span></td><td>−25</td></tr></tbody></table></div><p>Explain why ethanol has the higher boiling point.</p>
      stem: "",
      hints: [
        // EN: Name the strongest intermolecular force in <strong>each</strong> substance.
        "",
        // EN: Then say which force is stronger. Link this to the energy needed.
        "",
      ],
      // EN: <p>Ethanol has hydrogen bonding between its molecules, because it has a hydrogen atom bonded to oxygen (<span class="chem">O–H</span>). Methoxymethane has no <span class="chem">O–H</span> bond, so it has only dipole–dipole forces (and London forces) between its molecules.</p><p>Hydrogen bonding is stronger than dipole–dipole forces, so more energy is needed to separate the ethanol molecules.</p>
      answer: "",
      markscheme: [
        // EN: Ethanol has hydrogen bonding (between molecules) AND methoxymethane has dipole–dipole forces (and London forces) only / no hydrogen bonding.
        "",
        // EN: Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules.
        "",
      ],
    },

    // ── s2-2-q046 · order · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q046": {
      // EN: <p>Put these four alkanes in order of boiling point. Put the <strong>lowest</strong> boiling point first.</p>
      stem: "",
      options: [
        // EN: 2,2-dimethylpropane, <span class="chem">C(CH3)4</span>
        "",
        // EN: 2-methylbutane, <span class="chem">(CH3)2CHCH2CH3</span>
        "",
        // EN: pentane, <span class="chem">CH3CH2CH2CH2CH3</span>
        "",
        // EN: hexane, <span class="chem">CH3CH2CH2CH2CH2CH3</span>
        "",
      ],
      hints: [
        // EN: All four molecules are non-polar. Which intermolecular force acts between them?
        "",
        // EN: Three of them are isomers, <span class="chem">C5H12</span>. The fourth has more electrons.
        "",
        // EN: A more branched molecule is more compact. It has less surface area in contact with its neighbours.
        "",
      ],
      // EN: <p>All four are non-polar, so only <strong>London (dispersion) forces</strong> act between the molecules.</p><p>The three <span class="chem">C5H12</span> isomers have the same number of electrons. More branching makes a molecule more compact, with less surface contact between molecules, so the London forces are weaker.</p><p>Hexane has more electrons and a longer chain, so it has the strongest London forces.</p><p>Boiling points: 2,2-dimethylpropane 10 °C; 2-methylbutane 28 °C; pentane 36 °C; hexane 69 °C.</p>
      solution: "",
    },

    // ── s2-2-q047 · mcq · exam · SL · Structure 2.2.9 · 1 mark
    "s2-2-q047": {
      // EN: <p>Three liquids have similar molar masses.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Three compounds of similar molar mass</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th></tr></thead><tbody><tr><th scope="row">butane</th><td><span class="chem">CH3CH2CH2CH3</span></td><td>58</td></tr><tr><th scope="row">propanone</th><td><span class="chem">CH3COCH3</span></td><td>58</td></tr><tr><th scope="row">propan-1-ol</th><td><span class="chem">CH3CH2CH2OH</span></td><td>60</td></tr></tbody></table></div><p>Which compound is the most volatile, and why?</p>
      stem: "",
      options: [
        // EN: Butane, because it has only London (dispersion) forces between its molecules.
        "",
        // EN: Butane, because its covalent bonds are the weakest.
        "",
        // EN: Propan-1-ol, because it has hydrogen bonding between its molecules.
        "",
        // EN: Propanone, because it has dipole–dipole forces between its molecules.
        "",
      ],
      hints: [
        // EN: A volatile substance turns into a gas easily. It has a low boiling point.
        "",
        // EN: Find the strongest intermolecular force in each compound.
        "",
        // EN: For similar molar mass: London forces < dipole–dipole forces < hydrogen bonding.
        "",
      ],
      // EN: <p><strong>Volatile</strong> means the substance vaporizes easily. The most volatile compound has the weakest intermolecular forces.</p><p>Butane is non-polar: London forces only. Propanone is polar (<span class="chem">C=O</span>): dipole–dipole forces. Propan-1-ol has an <span class="chem">O–H</span> group: hydrogen bonding.</p><p>So <strong>butane</strong> is the most volatile. The boiling points agree: butane −1 °C, propanone 56 °C, propan-1-ol 97 °C.</p>
      solution: "",
      misconception: {
        // EN (option B): The compound is right but the reason is wrong. Evaporation and boiling do not break covalent bonds. They overcome intermolecular forces.
        "1": "",
        // EN (option C): Hydrogen bonding is the strongest of these forces. Strong intermolecular forces make a substance <strong>less</strong> volatile.
        "2": "",
        // EN (option D): Dipole–dipole forces are stronger than London forces alone (for similar molar mass). So propanone is less volatile than the compound with London forces only.
        "3": "",
      },
    },

    // ── s2-2-q048 · short · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q048": {
      // EN: <p>Ethanol, <span class="chem">CH3CH2OH</span>, mixes with water in all proportions. Hexan-1-ol, <span class="chem">CH3(CH2)5OH</span>, is only slightly soluble in water.</p><p>Explain why ethanol is soluble in water, and why hexan-1-ol is much less soluble.</p>
      stem: "",
      hints: [
        // EN: Which part of each molecule can form hydrogen bonds with water?
        "",
        // EN: What is different about the rest of the hexan-1-ol molecule?
        "",
      ],
      // EN: <p>Ethanol has a hydroxyl (<span class="chem">O–H</span>) group, so it can form hydrogen bonds with water molecules. This is why it dissolves.</p><p>Hexan-1-ol also has a hydroxyl group, but it has a much longer non-polar hydrocarbon chain. The chain cannot form hydrogen bonds with water (it attracts water only by weak London forces), so the molecule as a whole is much less soluble.</p>
      answer: "",
      markscheme: [
        // EN: Ethanol / the hydroxyl (OH) group forms hydrogen bonds with water (molecules).
        "",
        // EN: Hexan-1-ol has a longer non-polar hydrocarbon chain, which cannot form hydrogen bonds with water. Accept: a larger part of the molecule is non-polar.
        "",
      ],
    },

    // ── s2-2-q049 · short · challenge · SL · Structure 2.2.9 · 3 marks
    "s2-2-q049": {
      // EN: <p>Bromine, <span class="chem">Br2</span>, and iodine monochloride, <span class="chem">ICl</span>, have almost the same molar mass, and each molecule has 70 electrons.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two substances with 70 electrons in each molecule</caption><thead><tr><th scope="col">Substance</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row"><span class="chem">Br2</span></th><td>160</td><td>59</td></tr><tr><th scope="row"><span class="chem">ICl</span></th><td>162</td><td>97</td></tr></tbody></table></div><p>Electronegativity values from the data booklet: Cl 3.2, Br 3.0, I 2.7.</p><p>Explain why iodine monochloride has the higher boiling point.</p>
      stem: "",
      hints: [
        // EN: The question gives the number of electrons. Which intermolecular force depends on this?
        "",
        // EN: Use the electronegativity values. Is each molecule polar?
        "",
        // EN: Finish by comparing the total strength of the forces and the energy needed.
        "",
      ],
      // EN: <p>Both molecules have the same number of electrons, so their London (dispersion) forces are similar in strength.</p><p><span class="chem">Br2</span> is non-polar, because the two atoms are the same. <span class="chem">ICl</span> is polar, because chlorine is more electronegative than iodine (3.2 and 2.7). So <span class="chem">ICl</span> also has dipole–dipole forces between its molecules.</p><p>The total intermolecular forces in <span class="chem">ICl</span> are stronger, so more energy is needed to separate its molecules.</p>
      answer: "",
      markscheme: [
        // EN: London (dispersion) forces are similar in both, because the molecules have the same number of electrons / similar molar mass.
        "",
        // EN: ICl is polar (Cl is more electronegative than I / electronegativity difference of 0.5) but Br<sub>2</sub> is non-polar, so ICl (also) has dipole–dipole forces.
        "",
        // EN: The intermolecular forces in ICl are stronger (overall), so more energy is needed to separate the molecules. Do not accept any reference to breaking covalent bonds.
        "",
      ],
    },

    // ── s2-2-q050 · short · challenge · SL · Structure 2.2.9 · 4 marks
    "s2-2-q050": {
      // EN: <p>Hydrogen sulfide, <span class="chem">H2S</span>, has a higher molar mass than water, but a much lower boiling point.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two hydrides of group 16</caption><thead><tr><th scope="col">Substance</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row"><span class="chem">H2S</span></th><td>34</td><td>−60</td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td>18</td><td>100</td></tr></tbody></table></div><p>Electronegativity values from the data booklet: H 2.2, O 3.4, S 2.6.</p><p>(a) Deduce the molecular geometry of <span class="chem">H2S</span>. Give a reason.</p><p>(b) Deduce, with a reason, if the <span class="chem">H2S</span> molecule is polar.</p><p>(c) Explain why <span class="chem">H2S</span> has a lower boiling point than water.</p>
      stem: "",
      hints: [
        // EN: (a) Sulfur is in group 16, like oxygen. Count its bonding pairs and lone pairs.
        "",
        // EN: (b) Check two things: are the bonds polar, and do the bond dipoles cancel?
        "",
        // EN: (c) Name the strongest intermolecular force in each substance. Then compare their strengths.
        "",
      ],
      // EN: <p>(a) Bent (V-shaped). Sulfur has four electron domains: two bonding pairs and two lone pairs.</p><p>(b) Polar. The <span class="chem">S–H</span> bonds are polar (difference 2.6 − 2.2 = 0.4), and because the molecule is bent the bond dipoles do not cancel.</p><p>(c) <span class="chem">H2S</span> has dipole–dipole forces and London forces between its molecules. Water has hydrogen bonding, because H is bonded to the very electronegative O atom. Hydrogen bonding is stronger, so more energy is needed to separate water molecules. This outweighs the stronger London forces in <span class="chem">H2S</span>.</p>
      answer: "",
      markscheme: [
        // EN: (a) Bent / V-shaped / angular AND two bonding pairs and two lone (non-bonding) pairs on sulfur / four electron domains with two lone pairs.
        "",
        // EN: (b) Polar, because the bond dipoles do not cancel / the molecule is not symmetrical (bent). Allow follow-through from the shape in (a).
        "",
        // EN: (c) H<sub>2</sub>S has dipole–dipole forces (and London forces) AND water has hydrogen bonding.
        "",
        // EN: (c) Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules of water.
        "",
      ],
    },

    // ── s2-2-q051 · mcq · challenge · SL · Structure 2.2.9 · 1 mark
    "s2-2-q051": {
      // EN: <p>Ethanal, <span class="chem">CH3CHO</span>, and propane, <span class="chem">CH3CH2CH3</span>, both have a molar mass of 44 <span class="unit">g mol-1</span>. Ethanal boils at 20 °C and propane boils at −42 °C.</p><p>A student explains: "Ethanal has the higher boiling point because it contains hydrogen and oxygen, so it forms hydrogen bonds between its molecules. Propane has only London (dispersion) forces."</p><p>Which statement correctly identifies the error in this explanation?</p>
      stem: "",
      options: [
        // EN: There is no error.
        "",
        // EN: Ethanal is non-polar, so it also has only London (dispersion) forces.
        "",
        // EN: In ethanal every hydrogen atom is bonded to carbon, so there is no hydrogen bonding between ethanal molecules. The extra force is dipole–dipole.
        "",
        // EN: Boiling breaks the <span class="chem">C=O</span> bond in ethanal, and this bond is stronger than the bonds in propane.
        "",
      ],
      hints: [
        // EN: Draw ethanal. Is any hydrogen atom bonded to oxygen?
        "",
        // EN: Ethanal has a polar <span class="chem">C=O</span> bond. Which intermolecular force do polar molecules have?
        "",
      ],
      // EN: <p>Hydrogen bonding needs H <strong>covalently bonded to</strong> N, O or F. In ethanal the oxygen is double-bonded to carbon and all four hydrogens are bonded to carbon. So ethanal molecules do not hydrogen-bond to each other.</p><p>Ethanal is polar, so it has <strong>dipole–dipole forces</strong> as well as London forces. Propane is non-polar and has London forces only. Dipole–dipole forces are stronger than London forces alone (for similar molar mass), so ethanal has the higher boiling point.</p>
      solution: "",
      misconception: {
        // EN (option A): Check the structure of ethanal: <span class="chem">CH3–CH=O</span>. Containing H and O is not enough. Which atom is each H bonded to?
        "0": "",
        // EN (option B): Ethanal is polar. The <span class="chem">C=O</span> bond has an electronegativity difference of 3.4 − 2.6 = 0.8, and its dipole is not cancelled.
        "1": "",
        // EN (option D): Boiling does not break covalent bonds. It only overcomes the forces between molecules.
        "3": "",
      },
    },

    // ── s2-2-q052 · mcq · foundation · SL · Structure 2.2.10 · 1 mark
    "s2-2-q052": {
      // EN: <p>How is the retardation factor, <i>R</i><sub>F</sub>, of a spot calculated?</p>
      stem: "",
      options: [
        // EN: distance moved by the solvent front ÷ distance moved by the spot
        "",
        // EN: distance moved by the spot ÷ distance moved by the solvent front, both measured from the baseline
        "",
        // EN: distance moved by the spot ÷ total length of the paper
        "",
        // EN: distance moved by the solvent front − distance moved by the spot
        "",
      ],
      hints: [
        // EN: The value is always between 0 and 1.
        "",
        // EN: Both distances start at the baseline, where the sample was placed.
        "",
      ],
      // EN: <p><i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.</p><p>Measure both distances <strong>from the baseline</strong>. The value has no unit and lies between 0 and 1.</p>
      solution: "",
      misconception: {
        // EN (option A): This is upside down. It would give a value greater than 1. A spot cannot move further than the solvent, so <i>R</i><sub>F</sub> is never more than 1.
        "0": "",
        // EN (option C): Use the distance the solvent moved, not the length of the paper. The solvent front does not usually reach the top of the paper.
        "2": "",
        // EN (option D): <i>R</i><sub>F</sub> is a ratio, not a difference. It has no unit.
        "3": "",
      },
    },

    // ── s2-2-q053 · numeric · foundation · SL · Structure 2.2.10 · 1 mark
    "s2-2-q053": {
      // EN: <p>In a paper chromatography experiment, a spot of dye moves 3.6 cm from the baseline. The solvent front moves 8.0 cm from the baseline.</p><p>Calculate the <i>R</i><sub>F</sub> value of the dye. Give your answer to 2 significant figures.</p>
      stem: "",
      hints: [
        // EN: <i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.
        "",
        // EN: The answer must be less than 1 and has no unit.
        "",
      ],
      // EN: <div class="worked__math"><i>R</i><sub>F</sub> = 3.6 cm ÷ 8.0 cm = 0.45</div><p>The units cancel, so <i>R</i><sub>F</sub> has no unit.</p>
      solution: "",
    },

    // ── s2-2-q054 · numeric · exam · SL · Structure 2.2.10 · 1 mark
    "s2-2-q054": {
      // EN: <p>The diagram shows a paper chromatogram of one dye. A ruler is placed next to the paper. All the labelled distances are measured in cm from the <strong>bottom edge</strong> of the paper.</p><p><svg viewBox="0 0 300 242" width="300" height="242" role="img" style="max-width:100%;height:auto" aria-label="Paper chromatogram with a ruler. Distances from the bottom edge of the paper: baseline 1.5 cm, centre of the spot 6.9 cm, solvent front 10.5 cm, top of the paper 12.0 cm."><line x1="40" x2="40" y1="230" y2="26" stroke="currentColor" stroke-width="1.2"/><line x1="32" x2="40" y1="230" y2="230" stroke="currentColor" stroke-width="1"/><text x="28" y="234" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="35" x2="40" y1="213" y2="213" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="196" y2="196" stroke="currentColor" stroke-width="1"/><text x="28" y="200" text-anchor="end" font-size="11" fill="currentColor">2</text><line x1="35" x2="40" y1="179" y2="179" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="162" y2="162" stroke="currentColor" stroke-width="1"/><text x="28" y="166" text-anchor="end" font-size="11" fill="currentColor">4</text><line x1="35" x2="40" y1="145" y2="145" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="128" y2="128" stroke="currentColor" stroke-width="1"/><text x="28" y="132" text-anchor="end" font-size="11" fill="currentColor">6</text><line x1="35" x2="40" y1="111" y2="111" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="94" y2="94" stroke="currentColor" stroke-width="1"/><text x="28" y="98" text-anchor="end" font-size="11" fill="currentColor">8</text><line x1="35" x2="40" y1="77" y2="77" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="60" y2="60" stroke="currentColor" stroke-width="1"/><text x="28" y="64" text-anchor="end" font-size="11" fill="currentColor">10</text><line x1="35" x2="40" y1="43" y2="43" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="26" y2="26" stroke="currentColor" stroke-width="1"/><text x="28" y="30" text-anchor="end" font-size="11" fill="currentColor">12</text><text x="28" y="11" text-anchor="end" font-size="11" fill="currentColor">cm</text><rect x="56" y="26" width="84" height="204" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="56" x2="140" y1="204.5" y2="204.5" stroke="currentColor" stroke-width="1.2"/><line x1="56" x2="140" y1="51.5" y2="51.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M92 204.5l6 -6m-6 6l6 6m-6 -6l-6 -6m6 6l-6 6" stroke="currentColor" stroke-width="1.2" fill="none"/><ellipse cx="98" cy="112.69999999999999" rx="8" ry="5.5" fill="currentColor" fill-opacity="0.55" stroke="currentColor"/><line x1="142" x2="152" y1="26" y2="26" stroke="currentColor" stroke-width="1"/><text x="156" y="30" font-size="12" fill="currentColor">top of paper, 12.0</text><line x1="142" x2="152" y1="51.5" y2="51.5" stroke="currentColor" stroke-width="1"/><text x="156" y="55.5" font-size="12" fill="currentColor">solvent front, 10.5</text><line x1="142" x2="152" y1="112.69999999999999" y2="112.69999999999999" stroke="currentColor" stroke-width="1"/><text x="156" y="116.69999999999999" font-size="12" fill="currentColor">centre of spot, 6.9</text><line x1="142" x2="152" y1="204.5" y2="204.5" stroke="currentColor" stroke-width="1"/><text x="156" y="208.5" font-size="12" fill="currentColor">baseline, 1.5</text><line x1="142" x2="152" y1="230" y2="230" stroke="currentColor" stroke-width="1"/><text x="156" y="234" font-size="12" fill="currentColor">bottom edge, 0.0</text></svg></p><p>Calculate the <i>R</i><sub>F</sub> value of the dye. Give your answer to 2 significant figures.</p>
      stem: "",
      hints: [
        // EN: Both distances in the <i>R</i><sub>F</sub> formula start at the baseline, not at the bottom edge.
        "",
        // EN: Distance moved by the spot = 6.9 − 1.5. Find the distance moved by the solvent front in the same way.
        "",
        // EN: You do not need the position of the top of the paper.
        "",
      ],
      // EN: <div class="worked__math">distance moved by spot = 6.9 − 1.5 = 5.4 cm</div><div class="worked__math">distance moved by solvent front = 10.5 − 1.5 = 9.0 cm</div><div class="worked__math"><i>R</i><sub>F</sub> = 5.4 cm ÷ 9.0 cm = 0.60</div><p>Common slips: 6.9 ÷ 10.5 = 0.66 (measured from the bottom edge) and 6.9 ÷ 12.0 = 0.58 (used the top of the paper).</p>
      solution: "",
    },

    // ── s2-2-q055 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "s2-2-q055": {
      // EN: <p>Two compounds, P and Q, are separated by thin layer chromatography (TLC). The stationary phase is silica, which is polar. The mobile phase is hexane, which is non-polar.</p><p>P and Q have the same structure, except that P has a hydroxyl (<span class="chem">–OH</span>) group where Q has a hydrogen atom.</p><p>The two spots have <i>R</i><sub>F</sub> values of 0.21 and 0.74. Which row is correct?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col"><i>R</i><sub>F</sub> of P</th><th scope="col">Reason</th></tr></thead><tbody><tr><th scope="row">A</th><td>0.21</td><td>P is more strongly attracted to the polar stationary phase</td></tr><tr><th scope="row">B</th><td>0.21</td><td>P is more strongly attracted to the non-polar mobile phase</td></tr><tr><th scope="row">C</th><td>0.74</td><td>P is more strongly attracted to the polar stationary phase</td></tr><tr><th scope="row">D</th><td>0.74</td><td>P is more strongly attracted to the non-polar mobile phase</td></tr></tbody></table></div>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
      ],
      hints: [
        // EN: Which compound is more polar, P or Q?
        "",
        // EN: A component that is strongly attracted to the stationary phase spends more time not moving.
        "",
        // EN: A small <i>R</i><sub>F</sub> means the spot moved a short distance.
        "",
      ],
      // EN: <p>The <span class="chem">–OH</span> group makes <strong>P more polar</strong> than Q. P can form hydrogen bonds with the polar silica.</p><p>So P is more strongly attracted to the <strong>stationary phase</strong>. It is held back and moves a shorter distance: <i>R</i><sub>F</sub> = <strong>0.21</strong>.</p><p>Q is less polar. It is more attracted to the non-polar mobile phase and is carried further: <i>R</i><sub>F</sub> = 0.74.</p>
      solution: "",
      misconception: {
        // EN (option B): The <i>R</i><sub>F</sub> value is right, but the reason is wrong. A compound that is strongly attracted to the mobile phase is carried further and has a high <i>R</i><sub>F</sub>. Also, P is the more polar compound, so it is less attracted to hexane than Q is.
        "1": "",
        // EN (option C): The reason is right, but it leads to the other value. A compound that is strongly attracted to the stationary phase is held back, so it moves a short distance.
        "2": "",
        // EN (option D): The polarity logic is reversed. The hydroxyl group makes P more polar (it can hydrogen-bond to silica), so P is attracted more to the stationary phase, not to hexane.
        "3": "",
      },
    },

    // ── s2-2-q056 · short · exam · SL · Structure 2.2.10 · 2 marks
    "s2-2-q056": {
      // EN: <p>A mixture of two dyes is separated by paper chromatography. One dye moves further up the paper than the other.</p><p>Explain why the two dyes separate.</p>
      stem: "",
      hints: [
        // EN: Chromatography has two phases. Name them.
        "",
        // EN: Each dye is attracted to both phases. What decides how far a dye moves?
        "",
      ],
      // EN: <p>The two dyes have different relative attractions (intermolecular forces) to the mobile phase and to the stationary phase.</p><p>The dye that is more strongly attracted to (more soluble in) the mobile phase, and less strongly attracted to the stationary phase, is carried further by the solvent. It has the higher <i>R</i><sub>F</sub> value.</p>
      answer: "",
      markscheme: [
        // EN: The dyes have different (relative) attractions / intermolecular forces to the mobile phase and the stationary phase. Accept: different solubility in the solvent / different adsorption on the stationary phase.
        "",
        // EN: The dye that is more attracted to (more soluble in) the mobile phase / less attracted to the stationary phase moves further (has the higher R<sub>F</sub>).
        "",
      ],
    },

    // ── s2-2-q057 · multi · exam · SL · Structure 2.2.10 · 2 marks
    "s2-2-q057": {
      // EN: <p>A food colouring, M, is tested by paper chromatography. The solvent front moves 10.0 cm from the baseline. M gives three spots, at 2.0 cm, 5.5 cm and 8.0 cm from the baseline.</p><p>Five pure dyes are tested on a <strong>second</strong> piece of the same paper with the same solvent. On this paper, the solvent front moves 8.0 cm from the baseline.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Second chromatogram (solvent front at 8.0 cm)</caption><thead><tr><th scope="col">Pure dye</th><th scope="col">Distance moved by spot / cm</th></tr></thead><tbody><tr><th scope="row">A</th><td>1.6</td></tr><tr><th scope="row">B</th><td>4.4</td></tr><tr><th scope="row">C</th><td>5.5</td></tr><tr><th scope="row">D</th><td>6.4</td></tr><tr><th scope="row">E</th><td>2.0</td></tr></tbody></table></div><p>Which dyes could be present in M? Select all that apply.</p>
      stem: "",
      options: [
        // EN: A
        "",
        // EN: B
        "",
        // EN: C
        "",
        // EN: D
        "",
        // EN: E
        "",
      ],
      hints: [
        // EN: The solvent fronts moved different distances, so you cannot compare distances directly.
        "",
        // EN: Calculate <i>R</i><sub>F</sub> for each spot of M (divide by 10.0) and for each pure dye (divide by 8.0).
        "",
        // EN: The same dye has the same <i>R</i><sub>F</sub> under the same conditions.
        "",
      ],
      // EN: <p>Spots of M (solvent front 10.0 cm):</p><div class="worked__math">2.0 ÷ 10.0 = 0.20</div><div class="worked__math">5.5 ÷ 10.0 = 0.55</div><div class="worked__math">8.0 ÷ 10.0 = 0.80</div><p>Pure dyes (solvent front 8.0 cm):</p><div class="worked__math">A: 1.6 ÷ 8.0 = 0.20</div><div class="worked__math">B: 4.4 ÷ 8.0 = 0.55</div><div class="worked__math">C: 5.5 ÷ 8.0 = 0.69</div><div class="worked__math">D: 6.4 ÷ 8.0 = 0.80</div><div class="worked__math">E: 2.0 ÷ 8.0 = 0.25</div><p>The <i>R</i><sub>F</sub> values of <strong>A, B and D</strong> match the three spots of M. C and E moved the same <em>distances</em> as spots of M, but their <i>R</i><sub>F</sub> values do not match.</p>
      solution: "",
      misconception: {
        // EN (option C): Dye C moved 5.5 cm, the same distance as one spot of M. But the solvent moved a different distance on the two papers. Compare <i>R</i><sub>F</sub> values: C has 5.5 ÷ 8.0 = 0.69, and no spot of M has this value.
        "2": "",
        // EN (option E): Dye E moved 2.0 cm, the same distance as one spot of M. But its <i>R</i><sub>F</sub> is 2.0 ÷ 8.0 = 0.25, and the spot of M has 2.0 ÷ 10.0 = 0.20. Compare <i>R</i><sub>F</sub> values, not distances.
        "4": "",
      },
    },

    // ── s2-2-q058 · numeric · challenge · SL · Structure 2.2.10 · 2 marks
    "s2-2-q058": {
      // EN: <p>Under certain conditions, a compound has an <i>R</i><sub>F</sub> value of 0.62.</p><p>A student draws the baseline 2.0 cm above the bottom edge of a TLC plate. The solvent front stops 14.0 cm above the bottom edge.</p><p>How far above the <strong>bottom edge</strong> of the plate will the centre of the spot be? Give your answer to 2 significant figures.</p>
      stem: "",
      hints: [
        // EN: First find the distance the solvent front moved from the baseline.
        "",
        // EN: Rearrange: distance moved by the spot = <i>R</i><sub>F</sub> × distance moved by the solvent front.
        "",
        // EN: That distance starts at the baseline. The question asks for the distance from the bottom edge.
        "",
      ],
      // EN: <div class="worked__math">distance moved by solvent front = 14.0 − 2.0 = 12.0 cm</div><div class="worked__math">distance moved by spot = 0.62 × 12.0 cm = 7.44 cm</div><div class="worked__math">height above bottom edge = 7.44 + 2.0 = 9.44 cm</div><p>To 2 significant figures this is <strong>9.4 cm</strong>.</p><p>Common slips: 0.62 × 14.0 = 8.7 cm (used the bottom edge for the solvent distance) and 7.4 cm (forgot to add the 2.0 cm).</p>
      solution: "",
    },

    // ── s2-2-q059 · mcq · foundation · SL · Structure 2.2.2 · 1 mark
    "s2-2-q059": {
      // EN: <p>Which carbon–carbon bond is the <strong>longest</strong> and the <strong>weakest</strong>?</p>
      stem: "",
      options: [
        // EN: the single bond, <span class="chem">C–C</span>
        "",
        // EN: the double bond, <span class="chem">C=C</span>
        "",
        // EN: the triple bond, <span class="chem">C≡C</span>
        "",
        // EN: They all have the same length and strength.
        "",
      ],
      hints: [
        // EN: Single, double and triple bonds have one, two and three shared pairs.
        "",
        // EN: Fewer shared pairs means a weaker attraction between the two nuclei and the shared electrons.
        "",
      ],
      // EN: <p>The single bond has only one shared pair. The attraction between the two nuclei and the shared electrons is weakest, so the nuclei are furthest apart.</p><p>Data booklet values: <span class="chem">C–C</span> 154 pm and 346 kJ mol<sup>−1</sup>; <span class="chem">C=C</span> 134 pm and 614 kJ mol<sup>−1</sup>; <span class="chem">C≡C</span> 120 pm and 839 kJ mol<sup>−1</sup>.</p>
      solution: "",
      misconception: {
        // EN (option B): A double bond has two shared pairs. It is shorter and stronger than a single bond, which has one shared pair.
        "1": "",
        // EN (option C): A triple bond has three shared pairs. The nuclei are attracted most strongly to the shared electrons, so this is the shortest and strongest bond.
        "2": "",
        // EN (option D): The number of shared pairs is different in each bond, so the attraction between the nuclei and the shared electrons is different too.
        "3": "",
      },
    },

    // ── s2-2-q060 · order · exam · SL · Structure 2.2.2 · 2 marks
    "s2-2-q060": {
      // EN: <p>Three molecules each contain a bond between two nitrogen atoms. In all three, every nitrogen atom has 8 electrons around it and every hydrogen atom forms one bond.</p><p>Put the molecules in order of the length of the nitrogen–nitrogen bond. Put the <strong>shortest</strong> bond first.</p>
      stem: "",
      options: [
        // EN: nitrogen, <span class="chem">N2</span>
        "",
        // EN: diazene, <span class="chem">N2H2</span>
        "",
        // EN: hydrazine, <span class="chem">N2H4</span>
        "",
      ],
      hints: [
        // EN: Deduce the Lewis formula of each molecule. Count the valence electrons first: 10, 12 and 14.
        "",
        // EN: How many pairs are shared between the two nitrogen atoms in each molecule?
        "",
        // EN: More shared pairs make a shorter bond.
        "",
      ],
      // EN: <p><span class="chem">N2</span>: 10 valence electrons. The atoms share three pairs: <span class="chem">N≡N</span>.</p><p><span class="chem">N2H2</span>: 12 valence electrons. Each N has one bond to H and one lone pair, so the atoms share two pairs: <span class="chem">HN=NH</span>.</p><p><span class="chem">N2H4</span>: 14 valence electrons. Each N has two bonds to H and one lone pair, so the atoms share one pair: <span class="chem">H2N–NH2</span>.</p><p>More shared pairs give a greater attraction between the nuclei and the shared electrons, so the bond is shorter. Data booklet lengths: <span class="chem">N≡N</span> 110 pm, <span class="chem">N=N</span> 125 pm, <span class="chem">N–N</span> 146 pm.</p>
      solution: "",
    },

    // ── s2-2-q061 · mcq · foundation · SL · Structure 2.2.3 · 1 mark
    "s2-2-q061": {
      // EN: <p>A water molecule bonds to a hydrogen ion to form the hydronium ion.</p><p><span class="chem">H2O + H+ -> H3O+</span></p><p>Where do the two electrons in the new <span class="chem">O–H</span> bond come from?</p>
      stem: "",
      options: [
        // EN: Both come from the oxygen atom.
        "",
        // EN: Both come from the hydrogen ion.
        "",
        // EN: One comes from the oxygen atom and one comes from the hydrogen ion.
        "",
        // EN: Both come from a hydrogen atom of the water molecule.
        "",
      ],
      hints: [
        // EN: How many electrons does <span class="chem">H+</span> have?
        "",
        // EN: Which atom in a water molecule has lone pairs?
        "",
      ],
      // EN: <p><span class="chem">H+</span> has no electrons. Oxygen in water has two lone pairs. Oxygen shares one lone pair with <span class="chem">H+</span>.</p><p>Both electrons of the shared pair come from the same atom, so the new bond is a <strong>coordination bond</strong>. Once formed, it is the same as the other two <span class="chem">O–H</span> bonds.</p>
      solution: "",
      misconception: {
        // EN (option B): A hydrogen ion, <span class="chem">H+</span>, has no electrons at all. It can only accept a pair.
        "1": "",
        // EN (option C): This is how an ordinary covalent bond forms. But <span class="chem">H+</span> has no electron to give.
        "2": "",
        // EN (option D): The hydrogen atoms in water have already used their one electron in an <span class="chem">O–H</span> bond. They have no lone pair to give.
        "3": "",
      },
    },

    // ── s2-2-q062 · numeric · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q062": {
      // EN: <p>In a carbon monoxide molecule, <span class="chem">CO</span>, the two atoms are joined by a triple bond. Each atom also has one lone pair.</p><p>A carbon atom has 4 valence electrons and an oxygen atom has 6.</p><p>How many of the six shared electrons came from the <strong>oxygen</strong> atom?</p>
      stem: "",
      hints: [
        // EN: Each atom keeps one lone pair. That is 2 of its valence electrons.
        "",
        // EN: The electrons that an atom does not keep in a lone pair are the ones it gives to the bond.
        "",
      ],
      // EN: <div class="worked__math">oxygen: 6 valence electrons − 2 in its lone pair = 4 electrons in the bond</div><div class="worked__math">carbon: 4 valence electrons − 2 in its lone pair = 2 electrons in the bond</div><div class="worked__math">check: 4 + 2 = 6 shared electrons = 3 shared pairs</div><p>Carbon gives one electron to each of two shared pairs. Oxygen gives one electron to each of these, and <strong>both</strong> electrons of the third pair. So one of the three shared pairs is a coordination bond from oxygen to carbon.</p>
      solution: "",
    },

    // ── s2-2-q063 · mcq · exam · SL · Structure 2.2.5 · 1 mark
    "s2-2-q063": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, F 4.0, Cl 3.2, Br 3.0.</p><p>Which list shows the bonds in order of <strong>increasing</strong> polarity?</p>
      stem: "",
      options: [
        // EN: <span class="chem">H–F</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–Br</span>
        "",
        // EN: <span class="chem">H–Br</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–F</span>
        "",
        // EN: <span class="chem">H–Cl</span> &lt; <span class="chem">H–Br</span> &lt; <span class="chem">H–F</span>
        "",
        // EN: <span class="chem">H–Br</span> &lt; <span class="chem">H–F</span> &lt; <span class="chem">H–Cl</span>
        "",
      ],
      hints: [
        // EN: Bond polarity depends on the difference in electronegativity.
        "",
        // EN: Calculate the difference for each bond. The smallest difference is the least polar bond.
        "",
      ],
      // EN: <div class="worked__math">H–Br: 3.0 − 2.2 = 0.8</div><div class="worked__math">H–Cl: 3.2 − 2.2 = 1.0</div><div class="worked__math">H–F: 4.0 − 2.2 = 1.8</div><p>A larger difference in electronegativity means a more polar bond. So the order is <span class="chem">H–Br</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–F</span>.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the order of decreasing polarity. The question asks for increasing polarity, so the smallest difference comes first.
        "0": "",
        // EN (option C): Compare the first two: H–Cl has a difference of 1.0 and H–Br has 0.8. The bond with the smaller difference is less polar.
        "2": "",
        // EN (option D): H–F has the largest difference (1.8), so it is the most polar bond. It must come last.
        "3": "",
      },
    },

    // ── s2-2-q064 · short · exam · SL · Structure 2.2.5 · 2 marks
    "s2-2-q064": {
      // EN: <p>Electronegativity values from the data booklet: C 2.6, F 4.0.</p><p>Deduce, giving a reason, the polarity of the <span class="chem">C–F</span> bond. Show the partial charges on the two atoms.</p>
      stem: "",
      hints: [
        // EN: Compare the two electronegativity values.
        "",
        // EN: The atom that attracts the shared pair more strongly becomes slightly negative.
        "",
      ],
      // EN: <p>The bond is polar, because fluorine is more electronegative than carbon (4.0 − 2.6 = 1.4). Fluorine attracts the shared pair of electrons more strongly.</p><p>Partial charges: carbon is δ+ and fluorine is δ−.</p>
      answer: "",
      markscheme: [
        // EN: The bond is polar because the two atoms have different electronegativities / fluorine is more electronegative than carbon (difference of 1.4).
        "",
        // EN: C is δ+ AND F is δ−. Both partial charges are needed. Do not accept full charges, + and −.
        "",
      ],
    },

    // ── s2-2-q065 · mcq · foundation · SL · Structure 2.2.6 · 1 mark
    "s2-2-q065": {
      // EN: <p>Which two things decide if a molecule is polar?</p>
      stem: "",
      options: [
        // EN: the polarity of its bonds and its molecular geometry
        "",
        // EN: the polarity of its bonds only
        "",
        // EN: its molar mass and its molecular geometry
        "",
        // EN: the number of atoms and the number of bonds
        "",
      ],
      hints: [
        // EN: A molecule is polar if its bond dipoles do not cancel.
        "",
        // EN: What decides the size of each bond dipole? What decides the directions in which they point?
        "",
      ],
      // EN: <p>Molecular polarity depends on both <strong>bond polarity</strong> and <strong>molecular geometry</strong>.</p><p>The bonds must be polar, so that there are bond dipoles. And the shape must be one in which the bond dipoles do not cancel.</p>
      solution: "",
      misconception: {
        // EN (option B): Polar bonds are not enough. In a symmetrical molecule such as <span class="chem">CO2</span>, the bond dipoles cancel and the molecule is non-polar.
        "1": "",
        // EN (option C): Molar mass affects the strength of London forces. It does not decide if the molecule has a net dipole.
        "2": "",
        // EN (option D): Counting atoms and bonds does not tell you how charge is spread. <span class="chem">CO2</span> and <span class="chem">H2O</span> both have three atoms and two bonds, but only water is polar.
        "3": "",
      },
    },

    // ── s2-2-q066 · short · exam · SL · Structure 2.2.6 · 2 marks
    "s2-2-q066": {
      // EN: <p>In a molecule of sulfur dioxide, <span class="chem">SO2</span>, the sulfur atom is bonded to two oxygen atoms and has one lone pair. The molecular geometry is bent (V-shaped).</p><p>Electronegativity values from the data booklet: O 3.4, S 2.6.</p><p>Explain why the sulfur dioxide molecule is polar.</p>
      stem: "",
      hints: [
        // EN: First mark: are the bonds polar? Use the electronegativity values.
        "",
        // EN: Second mark: what does the shape do to the two bond dipoles?
        "",
      ],
      // EN: <p>The sulfur–oxygen bonds are polar, because oxygen is more electronegative than sulfur (3.4 − 2.6 = 0.8).</p><p>The molecule is bent, so the two bond dipoles do not point in opposite directions. They do not cancel, and the molecule has a net dipole.</p>
      answer: "",
      markscheme: [
        // EN: The (S–O) bonds are polar / there is an electronegativity difference between S and O.
        "",
        // EN: The bond dipoles do not cancel / there is a net dipole, because the molecule is bent (not symmetrical).
        "",
      ],
    },

    // ── s2-2-q067 · mcq · foundation · SL · Structure 2.2.8 · 1 mark
    "s2-2-q067": {
      // EN: <p>Which intermolecular force acts between the molecules of <strong>every</strong> molecular substance?</p>
      stem: "",
      options: [
        // EN: hydrogen bonding
        "",
        // EN: dipole–dipole forces
        "",
        // EN: London (dispersion) forces
        "",
        // EN: dipole–induced dipole forces
        "",
      ],
      hints: [
        // EN: Think of a non-polar substance such as methane. It can still be turned into a liquid.
        "",
        // EN: Which force needs only moving electrons?
        "",
      ],
      // EN: <p>All molecules contain electrons. The electrons are always moving, so every molecule can have a temporary dipole that induces a dipole in its neighbour.</p><p>So <strong>London (dispersion) forces</strong> act between all molecules, polar and non-polar.</p>
      solution: "",
      misconception: {
        // EN (option A): Hydrogen bonding needs a hydrogen atom bonded to a very electronegative atom such as N, O or F. Most molecules do not have one.
        "0": "",
        // EN (option B): Dipole–dipole forces act only between polar molecules. Non-polar molecules such as <span class="chem">CH4</span> do not have them.
        "1": "",
        // EN (option D): This force needs one polar molecule and one non-polar molecule. It does not act in a pure non-polar substance.
        "3": "",
      },
    },

    // ── s2-2-q068 · numeric · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q068": {
      // EN: <p>In phosphorus trichloride, <span class="chem">PCl3</span>, the phosphorus atom has three bonding pairs and one lone pair.</p><p>Predict a value for the <span class="chem">Cl–P–Cl</span> bond angle.</p>
      stem: "",
      hints: [
        // EN: Four electron domains give a tetrahedral electron domain geometry. What is the tetrahedral angle?
        "",
        // EN: A lone pair repels more than a bonding pair. Is the angle larger or smaller than the tetrahedral angle?
        "",
      ],
      // EN: <p>Phosphorus has four electron domains, so the electron domain geometry is tetrahedral (109.5°). One domain is a lone pair, so the molecular geometry is trigonal pyramidal.</p><p>The lone pair repels the bonding pairs more strongly than they repel each other. The bond angle is <strong>less than 109.5°</strong>.</p><p>A markscheme accepts a range for a trigonal pyramidal molecule, such as 100° to 107°. The measured angle in <span class="chem">PCl3</span> is about 100°. Do not write 109.5°.</p>
      solution: "",
      // EN: any value from 100° to 107°
      answerDisplay: "",
    },

  }
});
