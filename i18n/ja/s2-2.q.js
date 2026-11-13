/* s2-2.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-2.q', {
  questions: {

    // ── s2-2-q001 · mcq · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q001": {
      // EN: <p>Which statement best describes a covalent bond?</p>
      stem: "<p>共有結合 (covalent bond) を最もよく説明している文はどれですか。</p>",
      options: [
        // EN: The electrostatic attraction between oppositely charged ions.
        "反対の電荷をもつイオンの間にはたらく静電気的な引力。",
        // EN: The electrostatic attraction between a shared pair of electrons and the positively charged nuclei.
        "共有電子対と、正の電荷をもつ原子核との間にはたらく静電気的な引力。",
        // EN: The electrostatic attraction between a lattice of cations and delocalized electrons.
        "陽イオンの結晶格子と非局在化電子との間にはたらく静電気的な引力。",
        // EN: The transfer of electrons from one atom to another atom.
        "ある原子から別の原子へ電子が移ること。",
      ],
      hints: [
        // EN: In a covalent bond, two atoms share a pair of electrons.
        "共有結合では、2 つの原子が 1 組の電子対を共有します。",
        // EN: A bond is always an electrostatic attraction. Ask: what is attracted to what?
        "結合は、いつも静電気的な引力です。何が何に引きつけられているのかを考えましょう。",
      ],
      // EN: <p>Two nuclei are both attracted to the same shared pair of electrons. That attraction holds the atoms together.</p><p>The markscheme wording is: <strong>electrostatic attraction between a shared pair of electrons and the positively charged nuclei</strong>.</p>
      solution: "<p>2 つの原子核が、同じ共有電子対に引きつけられます。この引力が原子どうしを結びつけています。</p><p>採点基準（マークスキーム）の表現は次のとおりです：<strong>electrostatic attraction between a shared pair of electrons and the positively charged nuclei</strong>（共有電子対と、正の電荷をもつ原子核との間の静電気的な引力）。</p>",
      misconception: {
        // EN (option A): This describes an ionic bond. In a covalent bond no ions form: the atoms share a pair of electrons.
        "0": "これはイオン結合の説明です。共有結合ではイオンはできません。原子どうしが電子対を共有します。",
        // EN (option C): This describes a metallic bond. In a covalent bond the shared pair stays between two nuclei. It is not delocalized through a lattice.
        "2": "これは金属結合の説明です。共有結合では、共有電子対は 2 つの原子核の間にとどまります。結晶格子全体に非局在化してはいません。",
        // EN (option D): Electron transfer happens when ions form. A bond is an attraction, not a transfer. In a covalent bond the electrons are shared.
        "3": "電子が移るのは、イオンができるときです。結合は引力であって、電子の移動ではありません。共有結合では電子を共有します。",
      },
    },

    // ── s2-2-q002 · numeric · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q002": {
      // EN: <p>The first step in drawing a Lewis formula is to count the valence electrons.</p><p>How many valence electrons must be shown in the Lewis formula of the carbonate ion, <span class="chem">CO3^2-</span>?</p>
      stem: "<p>ルイス構造式 (Lewis formula) を書くときは、まず価電子 (valence electrons) を数えます。</p><p>炭酸イオン <span class=\"chem\">CO3^2-</span> のルイス構造式には、価電子を何個書く必要がありますか。</p>",
      hints: [
        // EN: Carbon is in group 14, so it has 4 valence electrons. Oxygen is in group 16, so it has 6.
        "炭素は 14 族なので、価電子は 4 個です。酸素は 16 族なので、価電子は 6 個です。",
        // EN: The charge is 2−. A negative charge means extra electrons. Add them.
        "電荷は 2− です。負の電荷は、電子が余分にあることを表します。その分を足しましょう。",
      ],
      // EN: <div class="worked__math">C: 1 × 4 = 4</div><div class="worked__math">O: 3 × 6 = 18</div><div class="worked__math">charge 2−: add 2</div><div class="worked__math">total = 4 + 18 + 2 = 24 valence electrons</div><p>For a negative ion you add electrons. For a positive ion you subtract electrons.</p>
      solution: "<div class=\"worked__math\">C: 1 × 4 = 4</div><div class=\"worked__math\">O: 3 × 6 = 18</div><div class=\"worked__math\">電荷 2−: 2 を足す</div><div class=\"worked__math\">合計 = 4 + 18 + 2 = 24 個の価電子</div><p>陰イオンでは電子を足します。陽イオンでは電子を引きます。</p>",
    },

    // ── s2-2-q003 · numeric · foundation · SL · Structure 2.2.1 · 1 mark
    "s2-2-q003": {
      // EN: <p>How many lone pairs (non-bonding pairs) of electrons are there in the Lewis formula of one molecule of carbon dioxide, <span class="chem">CO2</span>?</p><p>Count the lone pairs on <strong>all</strong> the atoms.</p>
      stem: "<p>二酸化炭素 <span class=\"chem\">CO2</span> の分子 1 個のルイス構造式には、非共有電子対 (lone pairs, non-bonding pairs) が何組ありますか。</p><p><strong>すべて</strong>の原子の非共有電子対を数えましょう。</p>",
      hints: [
        // EN: Total valence electrons: 4 + 6 + 6 = 16, which is 8 pairs.
        "価電子の合計は 4 + 6 + 6 = 16 個で、8 組の電子対になります。",
        // EN: The structure is <span class="chem">O=C=O</span>. The two double bonds use 4 pairs. Where are the other pairs?
        "構造は <span class=\"chem\">O=C=O</span> です。2 つの二重結合に 4 組を使います。残りの電子対はどこにありますか。",
      ],
      // EN: <p><span class="chem">CO2</span> has 4 + (2 × 6) = 16 valence electrons, which is 8 pairs.</p><p>The two <span class="chem">C=O</span> double bonds use 4 pairs. The other 4 pairs are lone pairs: <strong>2 on each oxygen atom</strong>. Carbon has none.</p><p>Total lone pairs = <strong>4</strong>. A Lewis formula must show every lone pair, including those on the outer atoms.</p>
      solution: "<p><span class=\"chem\">CO2</span> の価電子は 4 + (2 × 6) = 16 個で、8 組の電子対になります。</p><p>2 つの <span class=\"chem\">C=O</span> 二重結合に 4 組を使います。残りの 4 組は非共有電子対で、<strong>酸素原子 1 個につき 2 組</strong>あります。炭素にはありません。</p><p>非共有電子対の合計 = <strong>4</strong> 組。ルイス構造式には、外側の原子のものも含めて、すべての非共有電子対を書かなければなりません。</p>",
    },

    // ── s2-2-q004 · mcq · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q004": {
      // EN: <p>Which is the correct Lewis formula of hydrogen cyanide, <span class="chem">HCN</span>?</p><p>Each line is one shared pair. Each pair of dots is one lone pair.</p>
      stem: "<p>シアン化水素 (hydrogen cyanide) <span class=\"chem\">HCN</span> の正しいルイス構造式はどれですか。</p><p>線 1 本は共有電子対 1 組を、点 2 個の組は非共有電子対 1 組を表します。</p>",
      options: [
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, no lone pairs" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H と C は単結合、C と N は三重結合。非共有電子対はない\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C double bond N, two lone pairs on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-2.6" x2="75.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="2.6" x2="75.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="93.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="88.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="88.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="93.8" cy="10.5" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H と C は単結合、C と N は二重結合。N に非共有電子対が 2 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-2.6\" x2=\"75.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"2.6\" x2=\"75.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"93.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"88.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"88.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"93.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, one lone pair on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="98.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="98.0" cy="-3.2" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H と C は単結合、C と N は三重結合。N に非共有電子対が 1 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"98.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"98.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/></svg>",
        // EN: <svg viewBox="-22 -22 128 44" width="128" height="44" role="img" aria-label="H single bond C, C triple bond N, one lone pair on C and one lone pair on N" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="31.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="-4.6" x2="75.0" y2="-4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="0.0" x2="75.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="49.0" y1="4.6" x2="75.0" y2="4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">H</text><text x="40" y="6" text-anchor="middle" font-size="17" fill="currentColor">C</text><circle cx="43.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="36.8" cy="-14.0" r="1.7" fill="currentColor"/><text x="84" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="98.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="98.0" cy="-3.2" r="1.7" fill="currentColor"/></svg>
        "<svg viewBox=\"-22 -22 128 44\" width=\"128\" height=\"44\" role=\"img\" aria-label=\"H と C は単結合、C と N は三重結合。C に非共有電子対が 1 組、N に非共有電子対が 1 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"31.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"-4.6\" x2=\"75.0\" y2=\"-4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"0.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"49.0\" y1=\"4.6\" x2=\"75.0\" y2=\"4.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">H</text><text x=\"40\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">C</text><circle cx=\"43.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"36.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"84\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"98.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"98.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/></svg>",
      ],
      hints: [
        // EN: Count the valence electrons first: H has 1, C has 4, N has 5.
        "まず価電子を数えます。H は 1 個、C は 4 個、N は 5 個です。",
        // EN: In the correct formula, C and N each have 8 electrons around them and H has 2.
        "正しい式では、C と N のまわりにはそれぞれ 8 個、H のまわりには 2 個の電子があります。",
        // EN: Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.
        "それぞれの図の電子を数えましょう。線 1 本につき 2 個、点の組 1 つにつき 2 個です。",
      ],
      // EN: <p>Valence electrons: 1 + 4 + 5 = <strong>10</strong> (5 pairs).</p><p><span class="chem">H–C≡N</span> uses 4 pairs in bonds: one in the single bond and three in the triple bond. The last pair is a lone pair on nitrogen.</p><p>Check: H has 2 electrons. C has 8 (four bonding pairs). N has 8 (three bonding pairs and one lone pair).</p>
      solution: "<p>価電子：1 + 4 + 5 = <strong>10</strong> 個（5 組）。</p><p><span class=\"chem\">H–C≡N</span> では、結合に 4 組を使います。単結合に 1 組、三重結合に 3 組です。最後の 1 組は、窒素の非共有電子対になります。</p><p>確認：H の電子は 2 個。C は 8 個（共有電子対 4 組）。N は 8 個（共有電子対 3 組と非共有電子対 1 組）。</p>",
      misconception: {
        // EN (option A): This drawing shows only 8 electrons. <span class="chem">HCN</span> has 1 + 4 + 5 = 10 valence electrons. The lone pair on nitrogen is missing, so nitrogen has only 6 electrons around it.
        "0": "この図には電子が 8 個しかありません。<span class=\"chem\">HCN</span> の価電子は 1 + 4 + 5 = 10 個です。窒素の非共有電子対が抜けているので、窒素のまわりの電子は 6 個だけになっています。",
        // EN (option B): The electron count (10) is right, but carbon has only 3 pairs (6 electrons) around it. Moving one lone pair from N into the bond makes a triple bond and gives carbon an octet.
        "1": "電子の数 (10 個) は合っています。でも、炭素のまわりには電子対が 3 組（電子 6 個）しかありません。N の非共有電子対を 1 組、結合に移すと三重結合になり、炭素がオクテットになります。",
        // EN (option D): This drawing shows 12 electrons, but only 10 valence electrons are available. Carbon would also have 5 pairs around it, which is more than an octet.
        "3": "この図には電子が 12 個ありますが、使える価電子は 10 個だけです。それに、炭素のまわりの電子対が 5 組になり、オクテットを超えてしまいます。",
      },
    },

    // ── s2-2-q005 · numeric · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q005": {
      // EN: <p>Ethanoic acid has the structural formula <span class="chem">CH3COOH</span>. One oxygen atom is joined to carbon by a double bond. The other oxygen atom is in an <span class="chem">O–H</span> group.</p><p>How many <strong>bonding pairs</strong> of electrons are there in the Lewis formula of one molecule of ethanoic acid?</p>
      stem: "<p>エタン酸 (ethanoic acid) の構造式は <span class=\"chem\">CH3COOH</span> です。酸素原子の 1 つは、炭素と二重結合でつながっています。もう 1 つの酸素原子は <span class=\"chem\">O–H</span> 基の中にあります。</p><p>エタン酸の分子 1 個のルイス構造式には、<strong>共有電子対</strong> (bonding pairs) が何組ありますか。</p>",
      hints: [
        // EN: List the bonds: three <span class="chem">C–H</span>, one <span class="chem">C–C</span>, one <span class="chem">C=O</span>, one <span class="chem">C–O</span>, one <span class="chem">O–H</span>.
        "結合を書き出しましょう。<span class=\"chem\">C–H</span> が 3 つ、<span class=\"chem\">C–C</span> が 1 つ、<span class=\"chem\">C=O</span> が 1 つ、<span class=\"chem\">C–O</span> が 1 つ、<span class=\"chem\">O–H</span> が 1 つです。",
        // EN: A double bond is two bonding pairs.
        "二重結合は共有電子対 2 組です。",
      ],
      // EN: <div class="worked__math">C–H: 3 pairs</div><div class="worked__math">C–C: 1 pair</div><div class="worked__math">C=O: 2 pairs</div><div class="worked__math">C–O: 1 pair</div><div class="worked__math">O–H: 1 pair</div><div class="worked__math">total = 8 bonding pairs</div><p>Check with the electron count. Valence electrons = (2 × 4) + (4 × 1) + (2 × 6) = 24, which is 12 pairs. There are 8 bonding pairs and 4 lone pairs (2 on each oxygen atom). 8 + 4 = 12.</p>
      solution: "<div class=\"worked__math\">C–H: 3 組</div><div class=\"worked__math\">C–C: 1 組</div><div class=\"worked__math\">C=O: 2 組</div><div class=\"worked__math\">C–O: 1 組</div><div class=\"worked__math\">O–H: 1 組</div><div class=\"worked__math\">合計 = 8 組の共有電子対</div><p>電子の数で確かめましょう。価電子 = (2 × 4) + (4 × 1) + (2 × 6) = 24 個で、12 組です。共有電子対が 8 組、非共有電子対が 4 組（酸素原子 1 個につき 2 組）あります。8 + 4 = 12。</p>",
    },

    // ── s2-2-q006 · multi · exam · SL · Structure 2.2.1 · 1 mark
    "s2-2-q006": {
      // EN: <p>In which of these molecules does the <strong>central atom</strong> have fewer than 8 electrons in its valence shell? Select all that apply.</p>
      stem: "<p>次の分子のうち、<strong>中心原子</strong> (central atom) の最外殻の電子が 8 個より少ないものはどれですか。当てはまるものをすべて選びましょう。</p>",
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
        "それぞれの中心原子の族を調べましょう。族から価電子の数がわかります。",
        // EN: Beryllium has 2 valence electrons and boron has 3. How many bonds can each form, and are any lone pairs left?
        "ベリリウムの価電子は 2 個、ホウ素は 3 個です。それぞれ結合を何本つくれますか。非共有電子対は残りますか。",
      ],
      // EN: <p><strong><span class="chem">BeCl2</span></strong>: Be has 2 valence electrons and forms 2 bonds. It has 2 pairs = 4 electrons.</p><p><strong><span class="chem">BF3</span></strong>: B has 3 valence electrons and forms 3 bonds. It has 3 pairs = 6 electrons.</p><p>In <span class="chem">NH3</span>, <span class="chem">CCl4</span> and <span class="chem">PCl3</span> the central atom has four pairs (bonding pairs plus lone pairs), so it has an octet.</p>
      solution: "<p><strong><span class=\"chem\">BeCl2</span></strong>：Be は価電子が 2 個で、結合を 2 本つくります。電子対は 2 組 = 電子 4 個です。</p><p><strong><span class=\"chem\">BF3</span></strong>：B は価電子が 3 個で、結合を 3 本つくります。電子対は 3 組 = 電子 6 個です。</p><p><span class=\"chem\">NH3</span>、<span class=\"chem\">CCl4</span>、<span class=\"chem\">PCl3</span> では、中心原子に電子対が 4 組（共有電子対と非共有電子対の合計）あるので、オクテットになっています。</p>",
      misconception: {
        // EN (option C): Nitrogen in <span class="chem">NH3</span> has three bonding pairs and one lone pair. That is 8 electrons. Remember to count the lone pair.
        "2": "<span class=\"chem\">NH3</span> の窒素には、共有電子対が 3 組と非共有電子対が 1 組あります。合わせて電子 8 個です。非共有電子対も忘れずに数えましょう。",
        // EN (option D): Carbon in <span class="chem">CCl4</span> has four bonding pairs. That is 8 electrons.
        "3": "<span class=\"chem\">CCl4</span> の炭素には、共有電子対が 4 組あります。電子 8 個です。",
        // EN (option E): Phosphorus in <span class="chem">PCl3</span> has three bonding pairs and one lone pair. That is 8 electrons.
        "4": "<span class=\"chem\">PCl3</span> のリンには、共有電子対が 3 組と非共有電子対が 1 組あります。合わせて電子 8 個です。",
      },
    },

    // ── s2-2-q007 · mcq · challenge · SL · Structure 2.2.1 · 1 mark
    "s2-2-q007": {
      // EN: <p>The peroxide ion has the formula <span class="chem">O2^2-</span>. Each oxygen atom in the ion obeys the octet rule.</p><p>Which is the correct Lewis formula of the peroxide ion?</p>
      stem: "<p>過酸化物イオン (peroxide ion) の化学式は <span class=\"chem\">O2^2-</span> です。このイオンでは、どちらの酸素原子もオクテット則 (octet rule) を満たしています。</p><p>過酸化物イオンの正しいルイス構造式はどれですか。</p>",
      options: [
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O double bond O, two lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="53.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="48.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="48.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="53.8" cy="10.5" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"電荷 2− のイオン。O と O は二重結合。それぞれの O に非共有電子対が 2 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"53.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"53.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O single bond O, two lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="35.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="53.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="48.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="48.2" cy="13.7" r="1.7" fill="currentColor"/><circle cx="53.8" cy="10.5" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"電荷 2− のイオン。O と O は単結合。それぞれの O に非共有電子対が 2 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"35.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"53.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"48.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"53.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O double bond O, three lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="14.0" r="1.7" fill="currentColor"/><circle cx="3.2" cy="14.0" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="58.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="58.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="40.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="47.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"電荷 2− のイオン。O と O は二重結合。それぞれの O に非共有電子対が 3 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
        // EN: <svg viewBox="-22 -22 108 44" width="108" height="44" role="img" aria-label="Ion with charge 2 minus. O single bond O, three lone pairs on each O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="0.0" x2="35.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="-14.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="-3.2" cy="14.0" r="1.7" fill="currentColor"/><circle cx="3.2" cy="14.0" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="58.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="58.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="40.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="47.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M58 -20H63V20H58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="67" y="-12" font-size="13" fill="currentColor">2−</text></svg>
        "<svg viewBox=\"-22 -22 108 44\" width=\"108\" height=\"44\" role=\"img\" aria-label=\"電荷 2− のイオン。O と O は単結合。それぞれの O に非共有電子対が 3 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"0.0\" x2=\"35.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-14.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"3.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"58.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M58 -20H63V20H58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"67\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">2−</text></svg>",
      ],
      hints: [
        // EN: Count the valence electrons: 6 from each oxygen atom, plus the electrons for the charge.
        "価電子を数えましょう。酸素原子 1 個につき 6 個で、そこに電荷の分の電子を足します。",
        // EN: 14 electrons is 7 pairs. Share them so that each oxygen atom has 4 pairs around it.
        "電子 14 個は 7 組です。それぞれの酸素原子のまわりが 4 組になるように分けましょう。",
        // EN: Count the electrons in each drawing: 2 for each line and 2 for each pair of dots.
        "それぞれの図の電子を数えましょう。線 1 本につき 2 個、点の組 1 つにつき 2 個です。",
      ],
      // EN: <div class="worked__math">valence electrons = (2 × 6) + 2 = 14, which is 7 pairs</div><p>With a <strong>single</strong> <span class="chem">O–O</span> bond (1 pair), 6 pairs are left. That is 3 lone pairs on each oxygen atom.</p><p>Check: each O has 1 bonding pair + 3 lone pairs = 8 electrons. The charge 2− must be shown.</p><p>The extra two electrons are why the ion has a single bond, while the <span class="chem">O2</span> molecule has a double bond.</p>
      solution: "<div class=\"worked__math\">価電子 = (2 × 6) + 2 = 14 個で、7 組</div><p><span class=\"chem\">O–O</span> を<strong>単結合</strong>（1 組）にすると、6 組が残ります。酸素原子 1 個につき非共有電子対が 3 組です。</p><p>確認：それぞれの O は、共有電子対 1 組 + 非共有電子対 3 組 = 電子 8 個。電荷 2− も必ず書きます。</p><p>このイオンが単結合で、<span class=\"chem\">O2</span> 分子が二重結合なのは、電子が 2 個多いからです。</p>",
      misconception: {
        // EN (option A): This drawing has 12 electrons. That is the count for an <span class="chem">O2</span> molecule. The ion has a 2− charge, so it has 2 more electrons: 14 in total.
        "0": "この図の電子は 12 個です。これは <span class=\"chem\">O2</span> 分子の電子の数です。イオンの電荷は 2− なので、電子が 2 個多く、合計 14 個になります。",
        // EN (option B): This drawing has only 10 electrons, and each oxygen atom has only 6 electrons around it. The ion has 14 valence electrons.
        "1": "この図には電子が 10 個しかなく、それぞれの酸素原子のまわりの電子も 6 個だけです。このイオンの価電子は 14 個です。",
        // EN (option C): This drawing has 16 electrons, and each oxygen atom has 10 electrons around it. The ion has 14 valence electrons.
        "2": "この図には電子が 16 個あり、それぞれの酸素原子のまわりの電子が 10 個になっています。このイオンの価電子は 14 個です。",
      },
    },

    // ── s2-2-q008 · numeric · foundation · SL · Structure 2.2.2 · 1 mark
    "s2-2-q008": {
      // EN: <p>A nitrogen molecule, <span class="chem">N2</span>, contains a triple bond.</p><p>How many <strong>electrons</strong> are shared between the two nitrogen atoms?</p>
      stem: "<p>窒素分子 <span class=\"chem\">N2</span> には三重結合 (triple bond) があります。</p><p>2 つの窒素原子の間で共有されている<strong>電子</strong>は何個ですか。</p>",
      hints: [
        // EN: A triple bond is three shared pairs.
        "三重結合は、共有電子対 3 組です。",
        // EN: The question asks for electrons, not pairs.
        "問われているのは電子の数です。電子対の数ではありません。",
      ],
      // EN: <p>Single bond: 1 shared pair. Double bond: 2 shared pairs. Triple bond: 3 shared pairs.</p><div class="worked__math">3 pairs × 2 electrons = 6 electrons</div><p>Each nitrogen atom also has one lone pair, which is not shared.</p>
      solution: "<p>単結合：共有電子対 1 組。二重結合：共有電子対 2 組。三重結合：共有電子対 3 組。</p><div class=\"worked__math\">3 組 × 電子 2 個 = 電子 6 個</div><p>それぞれの窒素原子には、非共有電子対も 1 組あります。これは共有されていません。</p>",
    },

    // ── s2-2-q009 · mcq · exam · SL · Structure 2.2.2 · 1 mark
    "s2-2-q009": {
      // EN: <p>Which species has the <strong>shortest</strong> bond between carbon and oxygen?</p>
      stem: "<p>炭素と酸素の間の結合が<strong>最も短い</strong>ものはどれですか。</p>",
      options: [
        // EN: methanol, <span class="chem">CH3OH</span>
        "メタノール <span class=\"chem\">CH3OH</span>",
        // EN: carbon dioxide, <span class="chem">CO2</span>
        "二酸化炭素 <span class=\"chem\">CO2</span>",
        // EN: carbon monoxide, <span class="chem">CO</span>
        "一酸化炭素 <span class=\"chem\">CO</span>",
        // EN: methoxymethane, <span class="chem">CH3OCH3</span>
        "メトキシメタン (methoxymethane) <span class=\"chem\">CH3OCH3</span>",
      ],
      hints: [
        // EN: Work out the Lewis formula of each species. How many pairs are shared between C and O?
        "それぞれのルイス構造式を考えましょう。C と O の間で共有されている電子対は何組ですか。",
        // EN: More shared pairs pull the two nuclei closer together.
        "共有電子対が多いほど、2 つの原子核は強く引き寄せられ、近づきます。",
        // EN: <span class="chem">CO</span> has 4 + 6 = 10 valence electrons. Both atoms need an octet.
        "<span class=\"chem\">CO</span> の価電子は 4 + 6 = 10 個です。どちらの原子もオクテットになる必要があります。",
      ],
      // EN: <p>Carbon monoxide has 10 valence electrons. The only way to give both atoms an octet is a <strong>triple bond</strong> with one lone pair on each atom.</p><p>Data booklet bond lengths: <span class="chem">C–O</span> 143 pm, <span class="chem">C=O</span> 122 pm, <span class="chem">C≡O</span> 113 pm.</p><p>More shared pairs give a stronger attraction between the nuclei and the shared electrons, so the bond is shorter.</p>
      solution: "<p>一酸化炭素の価電子は 10 個です。両方の原子をオクテットにするには、<strong>三重結合</strong>にして、それぞれの原子に非共有電子対を 1 組ずつ置くしかありません。</p><p>データブックレットの結合距離：<span class=\"chem\">C–O</span> 143 pm、<span class=\"chem\">C=O</span> 122 pm、<span class=\"chem\">C≡O</span> 113 pm。</p><p>共有電子対が多いほど、原子核と共有電子の間の引力が強くなるので、結合は短くなります。</p>",
      misconception: {
        // EN (option A): Methanol has a carbon–oxygen single bond (one shared pair). Single bonds are the longest. The booklet value is 143 pm.
        "0": "メタノールの炭素と酸素の間は単結合（共有電子対 1 組）です。単結合は最も長い結合です。データブックレットの値は 143 pm です。",
        // EN (option B): <span class="chem">CO2</span> has double bonds (122 pm). They are shorter than single bonds, but one of the other species has three shared pairs.
        "1": "<span class=\"chem\">CO2</span> の結合は二重結合 (122 pm) です。単結合より短いですが、ほかに共有電子対が 3 組あるものがあります。",
        // EN (option D): Methoxymethane has two carbon–oxygen single bonds. Single bonds are the longest. The booklet value is 143 pm.
        "3": "メトキシメタンには、炭素と酸素の間の単結合が 2 つあります。単結合は最も長い結合です。データブックレットの値は 143 pm です。",
      },
    },

    // ── s2-2-q010 · short · exam · SL · Structure 2.2.2 · 2 marks
    "s2-2-q010": {
      // EN: <p>The data booklet gives these values.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Carbon–carbon bonds</caption><thead><tr><th scope="col">Bond</th><th scope="col">Length / pm</th><th scope="col">Bond enthalpy / <span class="unit">kJ mol-1</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">C–C</span></th><td>154</td><td>346</td></tr><tr><th scope="row"><span class="chem">C=C</span></th><td>134</td><td>614</td></tr></tbody></table></div><p>Explain why the <span class="chem">C=C</span> bond is shorter and stronger than the <span class="chem">C–C</span> bond.</p>
      stem: "<p>データブックレットには、次の値がのっています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>炭素–炭素結合</caption><thead><tr><th scope=\"col\">結合</th><th scope=\"col\">結合距離 / pm</th><th scope=\"col\">結合エンタルピー / <span class=\"unit\">kJ mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">C–C</span></th><td>154</td><td>346</td></tr><tr><th scope=\"row\"><span class=\"chem\">C=C</span></th><td>134</td><td>614</td></tr></tbody></table></div><p><span class=\"chem\">C=C</span> 結合が <span class=\"chem\">C–C</span> 結合より短くて強い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Start with the number of shared pairs in each bond.
        "まず、それぞれの結合の共有電子対の数から考えましょう。",
        // EN: A covalent bond is an attraction. What is attracted to what, and why is it stronger here?
        "共有結合は引力です。何が何に引きつけられていますか。その引力が、ここではなぜ強くなるのでしょうか。",
      ],
      // EN: <p>A double bond has two shared pairs of electrons. A single bond has one shared pair.</p><p>With more shared electrons between them, the two nuclei are attracted more strongly to the shared electrons. This pulls the nuclei closer together (shorter bond), and more energy is needed to separate them (stronger bond).</p>
      answer: "<p>二重結合には共有電子対が 2 組あります。単結合には 1 組です。</p><p>原子核の間にある共有電子が多いので、2 つの原子核は共有電子により強く引きつけられます。そのため、原子核どうしが近づき（結合が短くなり）、引き離すのに必要なエネルギーも大きくなります（結合が強くなります）。</p>",
      markscheme: [
        // EN: The double bond has two shared pairs of electrons (four shared electrons) and the single bond has one shared pair. Accept: more shared electrons / greater electron density between the nuclei.
        "二重結合には共有電子対が 2 組（共有電子が 4 個）あり、単結合には 1 組ある。「共有電子が多い」/「原子核の間の電子密度が大きい」も可。",
        // EN: Greater (electrostatic) attraction between the nuclei and the shared electrons (so the nuclei are pulled closer together and more energy is needed to break the bond).
        "原子核と共有電子の間の（静電気的な）引力が大きい（そのため原子核どうしが近づき、結合を切るのに必要なエネルギーが大きくなる）。",
      ],
    },

    // ── s2-2-q011 · mcq · challenge · SL · Structure 2.2.2 · 1 mark
    "s2-2-q011": {
      // EN: <p>The table shows data booklet values for three carbon–carbon bonds.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Carbon–carbon bonds</caption><thead><tr><th scope="col">Bond</th><th scope="col">Shared pairs</th><th scope="col">Length / pm</th><th scope="col">Bond enthalpy / <span class="unit">kJ mol-1</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">C–C</span></th><td>1</td><td>154</td><td>346</td></tr><tr><th scope="row"><span class="chem">C=C</span></th><td>2</td><td>134</td><td>614</td></tr><tr><th scope="row"><span class="chem">C≡C</span></th><td>3</td><td>120</td><td>839</td></tr></tbody></table></div><p>Which statement is supported by <strong>all</strong> the data?</p>
      stem: "<p>表は、3 種類の炭素–炭素結合についてのデータブックレットの値です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>炭素–炭素結合</caption><thead><tr><th scope=\"col\">結合</th><th scope=\"col\">共有電子対の数</th><th scope=\"col\">結合距離 / pm</th><th scope=\"col\">結合エンタルピー / <span class=\"unit\">kJ mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">C–C</span></th><td>1</td><td>154</td><td>346</td></tr><tr><th scope=\"row\"><span class=\"chem\">C=C</span></th><td>2</td><td>134</td><td>614</td></tr><tr><th scope=\"row\"><span class=\"chem\">C≡C</span></th><td>3</td><td>120</td><td>839</td></tr></tbody></table></div><p><strong>すべて</strong>のデータに合っている文はどれですか。</p>",
      options: [
        // EN: Bond enthalpy is directly proportional to the number of shared pairs.
        "結合エンタルピーは、共有電子対の数に比例する。",
        // EN: Each extra shared pair makes the bond shorter and stronger, but each extra pair adds less strength than the pair before it.
        "共有電子対が 1 組増えるごとに結合は短く、強くなる。ただし、1 組増えたときの強さの増え方は、前の 1 組のときより小さい。",
        // EN: Longer bonds are stronger bonds.
        "長い結合ほど強い。",
        // EN: The triple bond is the weakest bond because six shared electrons repel each other strongly.
        "三重結合は、6 個の共有電子が強く反発し合うので、最も弱い結合である。",
      ],
      hints: [
        // EN: Bond enthalpy is the energy needed to break the bond. A bigger value means a stronger bond.
        "結合エンタルピー (bond enthalpy) は、結合を切るのに必要なエネルギーです。値が大きいほど結合は強くなります。",
        // EN: Find the increase from single to double, and from double to triple.
        "単結合から二重結合への増加と、二重結合から三重結合への増加を求めましょう。",
        // EN: For "directly proportional", doubling the pairs would double the bond enthalpy. Does it?
        "「比例する」なら、電子対が 2 倍になると結合エンタルピーも 2 倍になるはずです。そうなっていますか。",
      ],
      // EN: <div class="worked__math">single → double: 614 − 346 = 268 <span class="unit">kJ mol-1</span></div><div class="worked__math">double → triple: 839 − 614 = 225 <span class="unit">kJ mol-1</span></div><p>The first shared pair is worth 346. The second adds 268. The third adds 225. So each extra pair adds less than the one before.</p><p>The lengths fall from 154 to 134 to 120 pm. More shared pairs attract the two nuclei more strongly, so the bond is shorter and stronger.</p>
      solution: "<div class=\"worked__math\">単結合 → 二重結合: 614 − 346 = 268 <span class=\"unit\">kJ mol-1</span></div><div class=\"worked__math\">二重結合 → 三重結合: 839 − 614 = 225 <span class=\"unit\">kJ mol-1</span></div><p>1 組目の共有電子対の分は 346 です。2 組目で 268 増えます。3 組目で 225 増えます。つまり、1 組増えるごとの増え方は、前より小さくなります。</p><p>結合距離は 154、134、120 pm と短くなります。共有電子対が多いほど 2 つの原子核を強く引きつけるので、結合は短く、強くなります。</p>",
      misconception: {
        // EN (option A): Test it. Twice the single-bond value is 2 × 346 = 692, but the double bond is 614. Three times is 1038, but the triple bond is 839. The bond gets stronger, but not in proportion.
        "0": "確かめてみましょう。単結合の値の 2 倍は 2 × 346 = 692 ですが、二重結合は 614 です。3 倍は 1038 ですが、三重結合は 839 です。結合は強くなりますが、比例はしていません。",
        // EN (option C): Read the two columns together. As the length goes down (154, 134, 120 pm), the bond enthalpy goes up. Shorter bonds are stronger.
        "2": "2 つの列を合わせて読みましょう。結合距離が短くなる (154、134、120 pm) につれて、結合エンタルピーは大きくなります。短い結合ほど強いのです。",
        // EN (option D): The triple bond has the largest bond enthalpy (839), so it is the strongest of the three. A larger bond enthalpy means more energy is needed to break the bond.
        "3": "三重結合の結合エンタルピーは最も大きい (839) ので、3 つの中で最も強い結合です。結合エンタルピーが大きいほど、結合を切るのに多くのエネルギーが必要です。",
      },
    },

    // ── s2-2-q012 · mcq · foundation · SL · Structure 2.2.3 · 1 mark
    "s2-2-q012": {
      // EN: <p>What is a coordination bond?</p>
      stem: "<p>配位結合 (coordination bond) とは何ですか。</p>",
      options: [
        // EN: A covalent bond in which both electrons of the shared pair come from the same atom.
        "共有電子対の電子が 2 個とも同じ原子から出ている共有結合。",
        // EN: A covalent bond in which each atom gives one electron to the shared pair.
        "それぞれの原子が電子を 1 個ずつ出して共有電子対をつくる共有結合。",
        // EN: A bond formed when one atom transfers two electrons to another atom.
        "ある原子が別の原子に電子を 2 個渡してできる結合。",
        // EN: A weak attraction between a lone pair on one molecule and a hydrogen atom on another molecule.
        "ある分子の非共有電子対と、別の分子の水素原子との間にはたらく弱い引力。",
      ],
      hints: [
        // EN: A coordination bond is still a shared pair of electrons.
        "配位結合も、共有電子対であることに変わりはありません。",
        // EN: Think about where the two electrons come from.
        "2 個の電子がどこから来たのかを考えましょう。",
      ],
      // EN: <p>A coordination bond is a covalent bond in which <strong>both electrons of the shared pair originate from the same atom</strong>.</p><p>The atom that gives the pair must have a lone pair. The atom that accepts it must have space in its valence shell.</p>
      solution: "<p>配位結合は、<strong>共有電子対の電子が 2 個とも同じ原子から出ている</strong>共有結合です (both electrons of the shared pair originate from the same atom)。</p><p>電子対を出す原子には、非共有電子対がなければなりません。受け取る原子には、最外殻に空きがなければなりません。</p>",
      misconception: {
        // EN (option B): This is how most covalent bonds form. In a coordination bond, one atom gives both electrons.
        "1": "ほとんどの共有結合はこのようにしてできます。配位結合では、片方の原子が電子を 2 個とも出します。",
        // EN (option C): Transfer of electrons makes ions. In a coordination bond the pair is shared between the two atoms, not transferred.
        "2": "電子が移るとイオンができます。配位結合では、電子対は 2 つの原子の間で共有されます。移るのではありません。",
        // EN (option D): This describes a hydrogen bond, which is an intermolecular force. A coordination bond is a covalent bond inside a molecule or ion.
        "3": "これは水素結合の説明で、水素結合は分子間力です。配位結合は、分子やイオンの中にある共有結合です。",
      },
    },

    // ── s2-2-q013 · mcq · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q013": {
      // EN: <p>Ammonia reacts with a hydrogen ion to form the ammonium ion.</p><p><span class="chem">NH3 + H+ -> NH4+</span></p><p>Which statement about the new <span class="chem">N–H</span> bond is correct?</p>
      stem: "<p>アンモニアは水素イオンと反応して、アンモニウムイオンになります。</p><p><span class=\"chem\">NH3 + H+ -> NH4+</span></p><p>新しくできる <span class=\"chem\">N–H</span> 結合について、正しい文はどれですか。</p>",
      options: [
        // EN: The hydrogen ion provides both electrons for the bond.
        "この結合の電子は、2 個とも水素イオンが出す。",
        // EN: The bond is ionic, because it forms between a molecule and an ion.
        "分子とイオンの間にできるので、この結合はイオン結合である。",
        // EN: Nitrogen provides both electrons for the bond. In the ion, all four <span class="chem">N–H</span> bonds are the same.
        "この結合の電子は、2 個とも窒素が出す。イオンの中では、4 つの <span class=\"chem\">N–H</span> 結合はすべて同じである。",
        // EN: Nitrogen provides both electrons for the bond. In the ion, this bond is longer and weaker than the other three.
        "この結合の電子は、2 個とも窒素が出す。イオンの中では、この結合はほかの 3 つより長くて弱い。",
      ],
      hints: [
        // EN: How many electrons does <span class="chem">H+</span> have?
        "<span class=\"chem\">H+</span> には電子が何個ありますか。",
        // EN: Nitrogen in ammonia has one lone pair.
        "アンモニアの窒素には、非共有電子対が 1 組あります。",
        // EN: After the bond forms, can you tell which shared pair came from where?
        "結合ができたあと、どの共有電子対がどこから来たのか、見分けられるでしょうか。",
      ],
      // EN: <p><span class="chem">H+</span> has no electrons. Nitrogen in <span class="chem">NH3</span> has a lone pair. Nitrogen shares this pair with <span class="chem">H+</span>, so both electrons in the new bond come from nitrogen. This is a coordination bond.</p><p>After it forms, the coordination bond is the same as the other three <span class="chem">N–H</span> bonds. The ion is a regular tetrahedron.</p>
      solution: "<p><span class=\"chem\">H+</span> には電子がありません。<span class=\"chem\">NH3</span> の窒素には非共有電子対があります。窒素がこの電子対を <span class=\"chem\">H+</span> と共有するので、新しい結合の電子は 2 個とも窒素から来ています。これが配位結合です。</p><p>できたあとの配位結合は、ほかの 3 つの <span class=\"chem\">N–H</span> 結合と同じです。このイオンは正四面体形です。</p>",
      misconception: {
        // EN (option A): A hydrogen ion, <span class="chem">H+</span>, has no electrons. It cannot give any. The pair comes from the lone pair on nitrogen.
        "0": "水素イオン <span class=\"chem\">H+</span> には電子がありません。電子を出すことはできません。電子対は、窒素の非共有電子対から来ています。",
        // EN (option B): The pair of electrons is shared between N and H, so the bond is covalent. No electrons are transferred.
        "1": "電子対は N と H の間で共有されているので、この結合は共有結合です。電子は移っていません。",
        // EN (option D): The first part is right. But once the bond has formed, a shared pair is a shared pair. All four <span class="chem">N–H</span> bonds have the same length and strength.
        "3": "前半は合っています。でも、結合ができてしまえば、共有電子対はどれも同じ共有電子対です。4 つの <span class=\"chem\">N–H</span> 結合は、長さも強さもすべて同じです。",
      },
    },

    // ── s2-2-q014 · multi · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q014": {
      // EN: <p>Which of these species contain a coordination bond? Select all that apply.</p>
      stem: "<p>次のうち、配位結合を含むものはどれですか。当てはまるものをすべて選びましょう。</p>",
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
        "不対電子の数より多くの結合が必要な原子を探しましょう。",
        // EN: <span class="chem">NH4+</span> and <span class="chem">H3O+</span> form when a molecule with a lone pair bonds to <span class="chem">H+</span>.
        "<span class=\"chem\">NH4+</span> と <span class=\"chem\">H3O+</span> は、非共有電子対をもつ分子が <span class=\"chem\">H+</span> と結合してできます。",
        // EN: In <span class="chem">CO</span>, carbon has 4 valence electrons but takes part in a triple bond. Oxygen has 6. Count where the six shared electrons come from.
        "<span class=\"chem\">CO</span> では、炭素の価電子は 4 個ですが、三重結合をつくっています。酸素の価電子は 6 個です。共有されている 6 個の電子がどこから来たのかを数えましょう。",
      ],
      // EN: <p><strong><span class="chem">NH4+</span></strong>: the lone pair on N of <span class="chem">NH3</span> bonds to <span class="chem">H+</span>.</p><p><strong><span class="chem">H3O+</span></strong>: a lone pair on O of <span class="chem">H2O</span> bonds to <span class="chem">H+</span>.</p><p><strong><span class="chem">CO</span></strong>: the triple bond has 6 shared electrons. Carbon gives 2 and oxygen gives 4. So one of the three shared pairs comes only from oxygen.</p><p>In <span class="chem">CO2</span> and <span class="chem">CH4</span>, each atom gives one electron to every shared pair.</p>
      solution: "<p><strong><span class=\"chem\">NH4+</span></strong>：<span class=\"chem\">NH3</span> の N の非共有電子対が <span class=\"chem\">H+</span> と結合します。</p><p><strong><span class=\"chem\">H3O+</span></strong>：<span class=\"chem\">H2O</span> の O の非共有電子対の 1 組が <span class=\"chem\">H+</span> と結合します。</p><p><strong><span class=\"chem\">CO</span></strong>：三重結合には共有電子が 6 個あります。炭素が 2 個、酸素が 4 個出しています。つまり、3 組の共有電子対のうち 1 組は、酸素だけから来ています。</p><p><span class=\"chem\">CO2</span> と <span class=\"chem\">CH4</span> では、どの共有電子対にも、それぞれの原子が電子を 1 個ずつ出しています。</p>",
      misconception: {
        // EN (option D): In <span class="chem">CO2</span>, carbon gives 2 electrons to each double bond and each oxygen gives 2. Every shared pair has one electron from each atom.
        "3": "<span class=\"chem\">CO2</span> では、それぞれの二重結合に炭素が電子を 2 個、酸素が 2 個出しています。どの共有電子対も、両方の原子から 1 個ずつ来た電子でできています。",
        // EN (option E): In <span class="chem">CH4</span>, carbon gives one electron and hydrogen gives one electron to each bond. No atom gives both.
        "4": "<span class=\"chem\">CH4</span> では、それぞれの結合に炭素が電子を 1 個、水素が 1 個出しています。2 個とも出している原子はありません。",
      },
    },

    // ── s2-2-q015 · mcq · challenge · SL · Structure 2.2.3 · 1 mark
    "s2-2-q015": {
      // EN: <p>Ammonia, <span class="chem">NH3</span>, reacts with boron trifluoride, <span class="chem">BF3</span>, to form one molecule with a bond between nitrogen and boron: <span class="chem">H3N–BF3</span>.</p><p>Which row is correct for the product?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Atom that gives both electrons of the N–B bond</th><th scope="col">Arrangement of the four atoms around boron</th></tr></thead><tbody><tr><th scope="row">A</th><td>boron</td><td>tetrahedral</td></tr><tr><th scope="row">B</th><td>nitrogen</td><td>trigonal planar</td></tr><tr><th scope="row">C</th><td>nitrogen</td><td>tetrahedral</td></tr><tr><th scope="row">D</th><td>fluorine</td><td>trigonal pyramidal</td></tr></tbody></table></div>
      stem: "<p>アンモニア <span class=\"chem\">NH3</span> は三フッ化ホウ素 (boron trifluoride) <span class=\"chem\">BF3</span> と反応して、窒素とホウ素の間に結合をもつ 1 つの分子 <span class=\"chem\">H3N–BF3</span> になります。</p><p>生成物について、正しい行はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選択肢</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">N–B 結合の電子を 2 個とも出す原子</th><th scope=\"col\">ホウ素のまわりの 4 つの原子の配置</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>ホウ素</td><td>正四面体形</td></tr><tr><th scope=\"row\">B</th><td>窒素</td><td>平面三角形</td></tr><tr><th scope=\"row\">C</th><td>窒素</td><td>正四面体形</td></tr><tr><th scope=\"row\">D</th><td>フッ素</td><td>三角錐形</td></tr></tbody></table></div>",
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
        "<span class=\"chem\">NH3</span> と <span class=\"chem\">BF3</span> のルイス構造式を書きましょう。非共有電子対をもつ原子はどれですか。電子が 8 個より少ない原子はどれですか。",
        // EN: After the bond forms, count the electron domains around boron.
        "結合ができたあとの、ホウ素のまわりの電子領域 (electron domains) を数えましょう。",
      ],
      // EN: <p>Nitrogen in <span class="chem">NH3</span> has a lone pair. Boron in <span class="chem">BF3</span> has only 3 pairs (6 electrons). Nitrogen shares its lone pair with boron. Both electrons come from nitrogen, so this is a coordination bond.</p><p>Boron now has <strong>four bonding pairs and no lone pairs</strong>. Four electron domains repel to a <strong>tetrahedral</strong> arrangement. Before the reaction, <span class="chem">BF3</span> was trigonal planar.</p>
      solution: "<p><span class=\"chem\">NH3</span> の窒素には非共有電子対があります。<span class=\"chem\">BF3</span> のホウ素には電子対が 3 組（電子 6 個）しかありません。窒素が非共有電子対をホウ素と共有します。電子は 2 個とも窒素から来ているので、これは配位結合です。</p><p>これでホウ素には、<strong>共有電子対が 4 組あり、非共有電子対はありません</strong>。4 つの電子領域は反発し合って、<strong>正四面体形</strong>の配置になります。反応前の <span class=\"chem\">BF3</span> は平面三角形でした。</p>",
      misconception: {
        // EN (option A): Boron in <span class="chem">BF3</span> has only 6 electrons in its valence shell and no lone pair. It accepts a pair. It cannot give one.
        "0": "<span class=\"chem\">BF3</span> のホウ素は、最外殻の電子が 6 個しかなく、非共有電子対もありません。ホウ素は電子対を受け取る側です。出すことはできません。",
        // EN (option B): The donor atom is right. But boron now has four bonding pairs, not three. Four electron domains do not give a trigonal planar shape.
        "1": "電子対を出す原子は合っています。でも、いまホウ素にある共有電子対は 3 組ではなく 4 組です。電子領域が 4 つあると、平面三角形にはなりません。",
        // EN (option D): The new bond is between N and B, so fluorine is not the donor. Boron has four bonding pairs and no lone pair, so the shape around it is not trigonal pyramidal.
        "3": "新しい結合は N と B の間にできるので、電子対を出すのはフッ素ではありません。ホウ素には共有電子対が 4 組あり、非共有電子対がないので、ホウ素のまわりの形は三角錐形ではありません。",
      },
    },

    // ── s2-2-q016 · mcq · foundation · SL · Structure 2.2.4 · 1 mark
    "s2-2-q016": {
      // EN: <p>What is the molecular geometry (shape) of an ammonia molecule, <span class="chem">NH3</span>?</p>
      stem: "<p>アンモニア分子 <span class=\"chem\">NH3</span> の分子の形 (molecular geometry) はどれですか。</p>",
      options: [
        // EN: trigonal planar
        "平面三角形 (trigonal planar)",
        // EN: tetrahedral
        "正四面体形 (tetrahedral)",
        // EN: trigonal pyramidal
        "三角錐形 (trigonal pyramidal)",
        // EN: bent (V-shaped)
        "折れ線形 (bent, V-shaped)",
      ],
      hints: [
        // EN: Count the electron domains around nitrogen. Include the lone pair.
        "窒素のまわりの電子領域を数えましょう。非共有電子対も数に入れます。",
        // EN: The molecular geometry is the shape made by the atoms only.
        "分子の形は、原子だけがつくる形です。",
      ],
      // EN: <p>Nitrogen has 5 valence electrons. It forms three <span class="chem">N–H</span> bonds and keeps one lone pair. That is <strong>four electron domains</strong>.</p><p>Electron domain geometry: tetrahedral. One domain is a lone pair, so the atoms make a <strong>trigonal pyramidal</strong> shape.</p>
      solution: "<p>窒素の価電子は 5 個です。<span class=\"chem\">N–H</span> 結合を 3 本つくり、非共有電子対が 1 組残ります。合わせて<strong>電子領域は 4 つ</strong>です。</p><p>電子領域の配置 (electron domain geometry) は正四面体形です。そのうち 1 つが非共有電子対なので、原子がつくる形は<strong>三角錐形</strong>になります。</p>",
      misconception: {
        // EN (option A): Trigonal planar needs three electron domains. Nitrogen in <span class="chem">NH3</span> has four: three bonding pairs and one lone pair. The lone pair pushes the three bonds down out of the plane.
        "0": "平面三角形になるのは、電子領域が 3 つのときです。<span class=\"chem\">NH3</span> の窒素には 4 つあります。共有電子対が 3 組と非共有電子対が 1 組です。非共有電子対が 3 本の結合を押し下げるので、平面にはなりません。",
        // EN (option B): Tetrahedral is the electron domain geometry. The molecular geometry describes only the positions of the atoms, and one of the four domains is a lone pair.
        "1": "正四面体形は、電子領域の配置です。分子の形は原子の位置だけを表します。4 つの電子領域のうち 1 つは非共有電子対です。",
        // EN (option D): Bent needs two bonded atoms on the central atom. Nitrogen in <span class="chem">NH3</span> has three bonded atoms.
        "3": "折れ線形になるのは、中心原子に結合している原子が 2 個のときです。<span class=\"chem\">NH3</span> の窒素には、原子が 3 個結合しています。",
      },
    },

    // ── s2-2-q017 · numeric · foundation · SL · Structure 2.2.4 · 1 mark
    "s2-2-q017": {
      // EN: <p>What is the <span class="chem">H–C–H</span> bond angle in a methane molecule, <span class="chem">CH4</span>?</p>
      stem: "<p>メタン分子 <span class=\"chem\">CH4</span> の <span class=\"chem\">H–C–H</span> 結合角 (bond angle) は何度ですか。</p>",
      hints: [
        // EN: Carbon has four bonding pairs and no lone pairs.
        "炭素には共有電子対が 4 組あり、非共有電子対はありません。",
        // EN: Four electron domains move as far apart as possible in three dimensions. The molecule is not flat.
        "4 つの電子領域は、3 次元の空間でできるだけ遠くに離れます。この分子は平らではありません。",
      ],
      // EN: <p>Carbon has four electron domains, all bonding pairs. They repel equally and point to the corners of a tetrahedron.</p><p>The tetrahedral angle is <strong>109.5°</strong>. It is not 90°, because the molecule is three-dimensional, not a flat cross.</p>
      solution: "<p>炭素には電子領域が 4 つあり、すべて共有電子対です。どれも同じ強さで反発し合い、正四面体の頂点の方向を向きます。</p><p>正四面体形の結合角は <strong>109.5°</strong> です。90° ではありません。この分子は平らな十字形ではなく、立体的だからです。</p>",
    },

    // ── s2-2-q018 · mcq · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q018": {
      // EN: <p>A Lewis formula of the nitrite ion, <span class="chem">NO2-</span>, is shown. A Lewis formula does not show the shape.</p><p><svg viewBox="-22 -22 152 44" width="152" height="44" role="img" aria-label="Ion with charge 1 minus, drawn in a straight line. O double bond N, N single bond O. Two lone pairs on the first O, one lone pair on N, three lone pairs on the second O" style="vertical-align:middle;max-width:100%"><line x1="9.0" y1="-2.6" x2="35.0" y2="-2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9.0" y1="2.6" x2="35.0" y2="2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="53.0" y1="0.0" x2="79.0" y2="0.0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><text x="0" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="-4.2" cy="-13.7" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="-10.5" r="1.7" fill="currentColor"/><circle cx="-9.8" cy="10.5" r="1.7" fill="currentColor"/><circle cx="-4.2" cy="13.7" r="1.7" fill="currentColor"/><text x="44" y="6" text-anchor="middle" font-size="17" fill="currentColor">N</text><circle cx="47.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="40.8" cy="-14.0" r="1.7" fill="currentColor"/><text x="88" y="6" text-anchor="middle" font-size="17" fill="currentColor">O</text><circle cx="91.2" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="84.8" cy="-14.0" r="1.7" fill="currentColor"/><circle cx="102.0" cy="3.2" r="1.7" fill="currentColor"/><circle cx="102.0" cy="-3.2" r="1.7" fill="currentColor"/><circle cx="84.8" cy="14.0" r="1.7" fill="currentColor"/><circle cx="91.2" cy="14.0" r="1.7" fill="currentColor"/><path d="M-14 -20H-19V20H-14M102 -20H107V20H102" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="111" y="-12" font-size="13" fill="currentColor">−</text></svg></p><p>Which row gives the electron domain geometry and the molecular geometry around the nitrogen atom?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Electron domain geometry</th><th scope="col">Molecular geometry</th></tr></thead><tbody><tr><th scope="row">A</th><td>trigonal planar</td><td>trigonal planar</td></tr><tr><th scope="row">B</th><td>trigonal planar</td><td>bent (V-shaped)</td></tr><tr><th scope="row">C</th><td>tetrahedral</td><td>bent (V-shaped)</td></tr><tr><th scope="row">D</th><td>linear</td><td>linear</td></tr></tbody></table></div>
      stem: "<p>亜硝酸イオン (nitrite ion) <span class=\"chem\">NO2-</span> のルイス構造式を示します。ルイス構造式は、形までは表しません。</p><p><svg viewBox=\"-22 -22 152 44\" width=\"152\" height=\"44\" role=\"img\" aria-label=\"電荷 1− のイオン。一直線に描いてある。O と N は二重結合、N と O は単結合。1 つ目の O に非共有電子対が 2 組、N に 1 組、2 つ目の O に 3 組ある\" style=\"vertical-align:middle;max-width:100%\"><line x1=\"9.0\" y1=\"-2.6\" x2=\"35.0\" y2=\"-2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"9.0\" y1=\"2.6\" x2=\"35.0\" y2=\"2.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"53.0\" y1=\"0.0\" x2=\"79.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"-4.2\" cy=\"-13.7\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"-10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-9.8\" cy=\"10.5\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"-4.2\" cy=\"13.7\" r=\"1.7\" fill=\"currentColor\"/><text x=\"44\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">N</text><circle cx=\"47.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><text x=\"88\" y=\"6\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">O</text><circle cx=\"91.2\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"84.8\" cy=\"-14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"102.0\" cy=\"3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"102.0\" cy=\"-3.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"84.8\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"91.2\" cy=\"14.0\" r=\"1.7\" fill=\"currentColor\"/><path d=\"M-14 -20H-19V20H-14M102 -20H107V20H102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"111\" y=\"-12\" font-size=\"13\" fill=\"currentColor\">−</text></svg></p><p>窒素原子のまわりの電子領域の配置 (electron domain geometry) と分子の形 (molecular geometry) を正しく示している行はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選択肢</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">電子領域の配置</th><th scope=\"col\">分子の形</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>平面三角形</td><td>平面三角形</td></tr><tr><th scope=\"row\">B</th><td>平面三角形</td><td>折れ線形（V 字形）</td></tr><tr><th scope=\"row\">C</th><td>正四面体形</td><td>折れ線形（V 字形）</td></tr><tr><th scope=\"row\">D</th><td>直線形</td><td>直線形</td></tr></tbody></table></div>",
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
        "N のまわりの電子領域を数えましょう。二重結合は 1 つの領域として数えます。非共有電子対も 1 つの領域として数えます。",
        // EN: The electron domain geometry uses all the domains. The molecular geometry uses only the atoms.
        "電子領域の配置は、すべての領域で決まります。分子の形は、原子だけで決まります。",
      ],
      // EN: <p>Around nitrogen there are <strong>three electron domains</strong>: one double bond, one single bond and one lone pair.</p><p>Three domains repel to a <strong>trigonal planar</strong> electron domain geometry.</p><p>Only two of the domains hold atoms, so the molecular geometry is <strong>bent (V-shaped)</strong>. The bond angle is a little less than 120° (about 115°), because the lone pair repels more than the bonding pairs.</p>
      solution: "<p>窒素のまわりには<strong>電子領域が 3 つ</strong>あります。二重結合 1 つ、単結合 1 つ、非共有電子対 1 組です。</p><p>3 つの領域は反発し合い、電子領域の配置は<strong>平面三角形</strong>になります。</p><p>原子があるのは 2 つの領域だけなので、分子の形は<strong>折れ線形（V 字形）</strong>です。非共有電子対は共有電子対より強く反発するので、結合角は 120° より少し小さくなります（約 115°）。</p>",
      misconception: {
        // EN (option A): The electron domain geometry is right. But the molecular geometry describes only the atoms. One of the three domains is a lone pair, so only two positions hold atoms.
        "0": "電子領域の配置は合っています。でも、分子の形は原子だけを表します。3 つの領域のうち 1 つは非共有電子対なので、原子があるのは 2 か所だけです。",
        // EN (option C): A double bond counts as <strong>one</strong> electron domain. Nitrogen has three domains (double bond, single bond, lone pair), not four.
        "2": "二重結合は電子領域 <strong>1 つ</strong>として数えます。窒素の電子領域は 4 つではなく、3 つ（二重結合、単結合、非共有電子対）です。",
        // EN (option D): This ignores the lone pair on nitrogen. The lone pair is an electron domain. It repels the two bonds, so the ion is not linear.
        "3": "これは窒素の非共有電子対を無視しています。非共有電子対も電子領域です。2 本の結合と反発するので、このイオンは直線形にはなりません。",
      },
    },

    // ── s2-2-q019 · order · exam · SL · Structure 2.2.4 · 2 marks
    "s2-2-q019": {
      // EN: <p>Put these molecules in order of bond angle around the central atom. Put the <strong>smallest</strong> bond angle first.</p>
      stem: "<p>次の分子を、中心原子のまわりの結合角の順に並べましょう。結合角が<strong>最も小さい</strong>ものを最初にします。</p>",
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
        "それぞれの中心原子のまわりの電子領域を数えましょう。2 つ、3 つ、4 つのどれかです。",
        // EN: <span class="chem">H2O</span>, <span class="chem">NH3</span> and <span class="chem">CH4</span> all have four domains. They differ in the number of lone pairs.
        "<span class=\"chem\">H2O</span>、<span class=\"chem\">NH3</span>、<span class=\"chem\">CH4</span> は、どれも電子領域が 4 つです。違うのは非共有電子対の数です。",
        // EN: Lone pairs repel more than bonding pairs, so they squeeze the bond angle.
        "非共有電子対は共有電子対より強く反発するので、結合角をせばめます。",
      ],
      // EN: <p><span class="chem">H2O</span>: 4 domains, 2 lone pairs, about 104.5°.</p><p><span class="chem">NH3</span>: 4 domains, 1 lone pair, about 107°.</p><p><span class="chem">CH4</span>: 4 domains, no lone pairs, 109.5°.</p><p><span class="chem">BF3</span>: 3 domains, no lone pairs, 120°.</p><p><span class="chem">CO2</span>: 2 domains (each double bond is one domain), 180°.</p>
      solution: "<p><span class=\"chem\">H2O</span>：領域 4 つ、非共有電子対 2 組、約 104.5°。</p><p><span class=\"chem\">NH3</span>：領域 4 つ、非共有電子対 1 組、約 107°。</p><p><span class=\"chem\">CH4</span>：領域 4 つ、非共有電子対なし、109.5°。</p><p><span class=\"chem\">BF3</span>：領域 3 つ、非共有電子対なし、120°。</p><p><span class=\"chem\">CO2</span>：領域 2 つ（二重結合はそれぞれ 1 つの領域）、180°。</p>",
    },

    // ── s2-2-q020 · short · exam · SL · Structure 2.2.4 · 2 marks
    "s2-2-q020": {
      // EN: <p>The <span class="chem">H–C–H</span> bond angle in methane, <span class="chem">CH4</span>, is 109.5°. The <span class="chem">H–N–H</span> bond angle in ammonia, <span class="chem">NH3</span>, is about 107°.</p><p>Explain why the bond angle in ammonia is smaller.</p>
      stem: "<p>メタン <span class=\"chem\">CH4</span> の <span class=\"chem\">H–C–H</span> 結合角は 109.5° です。アンモニア <span class=\"chem\">NH3</span> の <span class=\"chem\">H–N–H</span> 結合角は約 107° です。</p><p>アンモニアの結合角のほうが小さい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare the electron domains around C and around N.
        "C のまわりと N のまわりの電子領域をくらべましょう。",
        // EN: Do all electron domains repel equally?
        "電子領域は、どれも同じ強さで反発するでしょうか。",
      ],
      // EN: <p>Both central atoms have four electron domains, so both have a tetrahedral electron domain geometry. In methane all four domains are bonding pairs. In ammonia there are three bonding pairs and one lone pair (non-bonding pair).</p><p>A lone pair repels more strongly than a bonding pair. It pushes the three bonding pairs closer together, so the angle is less than 109.5°.</p>
      answer: "<p>どちらの中心原子にも電子領域が 4 つあるので、電子領域の配置はどちらも正四面体形です。メタンでは、4 つの領域がすべて共有電子対です。アンモニアでは、共有電子対が 3 組と非共有電子対が 1 組あります。</p><p>非共有電子対は、共有電子対より強く反発します。3 組の共有電子対を押して近づけるので、結合角は 109.5° より小さくなります。</p>",
      markscheme: [
        // EN: Nitrogen in ammonia has one lone (non-bonding) pair and three bonding pairs, but carbon in methane has four bonding pairs and no lone pair. Accept: both have four electron domains but ammonia has a lone pair.
        "アンモニアの窒素には非共有電子対が 1 組と共有電子対が 3 組あるが、メタンの炭素には共有電子対が 4 組あり、非共有電子対はない。「どちらも電子領域は 4 つだが、アンモニアには非共有電子対がある」も可。",
        // EN: Lone pairs repel more than bonding pairs (so the bonding pairs are pushed closer together).
        "非共有電子対は共有電子対より強く反発する（そのため共有電子対どうしが押されて近づく）。",
      ],
    },

    // ── s2-2-q021 · mcq · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q021": {
      // EN: <p>Methanol has the structural formula <span class="chem">CH3OH</span>. Which row gives the geometry of the atoms around the carbon atom and around the oxygen atom?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Around carbon</th><th scope="col">Around oxygen</th></tr></thead><tbody><tr><th scope="row">A</th><td>tetrahedral</td><td>linear</td></tr><tr><th scope="row">B</th><td>tetrahedral</td><td>tetrahedral</td></tr><tr><th scope="row">C</th><td>trigonal pyramidal</td><td>bent (V-shaped)</td></tr><tr><th scope="row">D</th><td>tetrahedral</td><td>bent (V-shaped)</td></tr></tbody></table></div>
      stem: "<p>メタノールの構造式は <span class=\"chem\">CH3OH</span> です。炭素原子のまわりと酸素原子のまわりの原子の配置を正しく示している行はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選択肢</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">炭素のまわり</th><th scope=\"col\">酸素のまわり</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>正四面体形</td><td>直線形</td></tr><tr><th scope=\"row\">B</th><td>正四面体形</td><td>正四面体形</td></tr><tr><th scope=\"row\">C</th><td>三角錐形</td><td>折れ線形（V 字形）</td></tr><tr><th scope=\"row\">D</th><td>正四面体形</td><td>折れ線形（V 字形）</td></tr></tbody></table></div>",
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
        "それぞれの原子を、順番に「中心原子」として考えましょう。",
        // EN: Carbon: four bonding pairs. Oxygen: two bonding pairs and two lone pairs.
        "炭素：共有電子対 4 組。酸素：共有電子対 2 組と非共有電子対 2 組。",
      ],
      // EN: <p><strong>Carbon</strong> has four bonding pairs (three to H, one to O) and no lone pairs: <strong>tetrahedral</strong>, about 109.5°.</p><p><strong>Oxygen</strong> has four electron domains: two bonding pairs (to C and to H) and two lone pairs. The two atoms make a <strong>bent</strong> shape, like water, with an angle less than 109.5°.</p>
      solution: "<p><strong>炭素</strong>には共有電子対が 4 組（H と 3 組、O と 1 組）あり、非共有電子対はありません。<strong>正四面体形</strong>で、約 109.5° です。</p><p><strong>酸素</strong>には電子領域が 4 つあります。共有電子対が 2 組（C と H）と、非共有電子対が 2 組です。2 つの原子は、水と同じように<strong>折れ線形</strong>をつくり、角度は 109.5° より小さくなります。</p>",
      misconception: {
        // EN (option A): Oxygen has two bonding pairs <strong>and two lone pairs</strong>. The lone pairs repel the bonds, so <span class="chem">C–O–H</span> is not a straight line.
        "0": "酸素には共有電子対が 2 組と、<strong>非共有電子対が 2 組</strong>あります。非共有電子対が結合と反発するので、<span class=\"chem\">C–O–H</span> は一直線にはなりません。",
        // EN (option B): Tetrahedral is the electron domain geometry around oxygen. The question asks for the geometry of the atoms. Only two atoms are bonded to oxygen.
        "1": "正四面体形は、酸素のまわりの電子領域の配置です。問われているのは原子の配置です。酸素に結合している原子は 2 個だけです。",
        // EN (option C): Carbon is bonded to four atoms (three H and one O) and has no lone pair. Trigonal pyramidal needs three atoms and one lone pair.
        "2": "炭素は 4 個の原子（H 3 個と O 1 個）と結合していて、非共有電子対はありません。三角錐形になるのは、原子が 3 個と非共有電子対が 1 組のときです。",
      },
    },

    // ── s2-2-q022 · mcq · challenge · SL · Structure 2.2.4 · 1 mark
    "s2-2-q022": {
      // EN: <p>In methanal, <span class="chem">H2C=O</span>, the carbon atom is bonded to two hydrogen atoms and, by a double bond, to one oxygen atom.</p><p>Which is the best prediction of the <span class="chem">H–C–H</span> bond angle?</p>
      stem: "<p>メタナール (methanal) <span class=\"chem\">H2C=O</span> では、炭素原子は 2 個の水素原子と結合し、1 個の酸素原子と二重結合でつながっています。</p><p><span class=\"chem\">H–C–H</span> 結合角の予測として、最もよいものはどれですか。</p>",
      options: [
        // EN: Exactly 120°, because there are three electron domains and no lone pairs on carbon.
        "ちょうど 120°。炭素には電子領域が 3 つあり、非共有電子対がないから。",
        // EN: Slightly less than 120°, because the double bond repels more than the single bonds.
        "120° より少し小さい。二重結合は単結合より強く反発するから。",
        // EN: About 109.5°, because carbon forms four bonds.
        "約 109.5°。炭素は結合を 4 本つくるから。",
        // EN: Slightly more than 120°, because the double bond takes up less space than a single bond.
        "120° より少し大きい。二重結合は単結合より場所をとらないから。",
      ],
      hints: [
        // EN: How many electron domains are around carbon? A double bond counts as one.
        "炭素のまわりに電子領域はいくつありますか。二重結合は 1 つとして数えます。",
        // EN: A double bond has four electrons in it. Compare its repulsion with that of a single bond.
        "二重結合には電子が 4 個あります。その反発を、単結合の反発とくらべましょう。",
      ],
      // EN: <p>Carbon has <strong>three electron domains</strong> (two single bonds, one double bond). The shape is trigonal planar with angles near 120°.</p><p>The double bond has greater electron density, so it repels the two <span class="chem">C–H</span> bonding pairs more strongly. They are pushed together. The <span class="chem">H–C–H</span> angle is <strong>slightly less than 120°</strong> (the measured value is about 116°).</p>
      solution: "<p>炭素には<strong>電子領域が 3 つ</strong>（単結合 2 つ、二重結合 1 つ）あります。形は平面三角形で、角度は 120° に近くなります。</p><p>二重結合は電子密度が大きいので、2 組の <span class=\"chem\">C–H</span> 共有電子対をより強く反発します。そのため、2 組は押されて近づきます。<span class=\"chem\">H–C–H</span> の角度は <strong>120° より少し小さく</strong>なります（実測値は約 116°）。</p>",
      misconception: {
        // EN (option A): Three domains do give angles near 120°. But the three domains are not the same. The double bond has more electron density than a single bond, so the repulsions are not equal.
        "0": "電子領域が 3 つなら、角度はたしかに 120° に近くなります。でも、3 つの領域は同じではありません。二重結合は単結合より電子密度が大きいので、反発の強さが等しくありません。",
        // EN (option C): Count electron domains, not bonds. The double bond is one domain, so carbon has three domains, not four.
        "2": "数えるのは結合の本数ではなく、電子領域です。二重結合は 1 つの領域なので、炭素の電子領域は 4 つではなく 3 つです。",
        // EN (option D): A double bond holds four electrons, so it has more electron density than a single bond. It repels more, not less.
        "3": "二重結合には電子が 4 個あるので、単結合より電子密度が大きくなります。反発は弱くなるのではなく、強くなります。",
      },
    },

    // ── s2-2-q023 · mcq · foundation · SL · Structure 2.2.5 · 1 mark
    "s2-2-q023": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, Cl 3.2.</p><p>Which bond is the most polar?</p>
      stem: "<p>データブックレットの電気陰性度 (electronegativity) の値：H 2.2、C 2.6、N 3.0、O 3.4、Cl 3.2。</p><p>極性が最も大きい結合はどれですか。</p>",
      options: [
        // EN: <span class="chem">C–H</span>
        "<span class=\"chem\">C–H</span>",
        // EN: <span class="chem">N–H</span>
        "<span class=\"chem\">N–H</span>",
        // EN: <span class="chem">O–H</span>
        "<span class=\"chem\">O–H</span>",
        // EN: <span class="chem">H–Cl</span>
        "<span class=\"chem\">H–Cl</span>",
      ],
      hints: [
        // EN: Bond polarity comes from the difference in electronegativity of the two atoms.
        "結合の極性 (bond polarity) は、2 つの原子の電気陰性度の差から生じます。",
        // EN: Subtract the two values for each bond. The largest difference is the most polar bond.
        "それぞれの結合で、2 つの値の引き算をしましょう。差が最も大きい結合が、極性の最も大きい結合です。",
      ],
      // EN: <div class="worked__math">C–H: 2.6 − 2.2 = 0.4</div><div class="worked__math">N–H: 3.0 − 2.2 = 0.8</div><div class="worked__math">O–H: 3.4 − 2.2 = 1.2</div><div class="worked__math">H–Cl: 3.2 − 2.2 = 1.0</div><p>The largest difference is for <strong><span class="chem">O–H</span></strong>, so it is the most polar bond.</p>
      solution: "<div class=\"worked__math\">C–H: 2.6 − 2.2 = 0.4</div><div class=\"worked__math\">N–H: 3.0 − 2.2 = 0.8</div><div class=\"worked__math\">O–H: 3.4 − 2.2 = 1.2</div><div class=\"worked__math\">H–Cl: 3.2 − 2.2 = 1.0</div><p>差が最も大きいのは <strong><span class=\"chem\">O–H</span></strong> なので、これが極性の最も大きい結合です。</p>",
      misconception: {
        // EN (option A): The difference for <span class="chem">C–H</span> is 2.6 − 2.2 = 0.4. This is the smallest difference of the four, so it is the least polar bond here.
        "0": "<span class=\"chem\">C–H</span> の差は 2.6 − 2.2 = 0.4 です。4 つの中で最も小さい差なので、この中では極性が最も小さい結合です。",
        // EN (option B): The difference for <span class="chem">N–H</span> is 3.0 − 2.2 = 0.8. One of the other bonds has a larger difference.
        "1": "<span class=\"chem\">N–H</span> の差は 3.0 − 2.2 = 0.8 です。ほかに、もっと差の大きい結合があります。",
        // EN (option D): The difference for <span class="chem">H–Cl</span> is 3.2 − 2.2 = 1.0. This is large, but one of the other bonds has a larger difference.
        "3": "<span class=\"chem\">H–Cl</span> の差は 3.2 − 2.2 = 1.0 です。大きい値ですが、ほかに、もっと差の大きい結合があります。",
      },
    },

    // ── s2-2-q024 · numeric · foundation · SL · Structure 2.2.5 · 1 mark
    "s2-2-q024": {
      // EN: <p>The data booklet gives the electronegativity of carbon as 2.6 and of chlorine as 3.2.</p><p>Calculate the electronegativity difference for a <span class="chem">C–Cl</span> bond.</p>
      stem: "<p>データブックレットによると、電気陰性度は炭素が 2.6、塩素が 3.2 です。</p><p><span class=\"chem\">C–Cl</span> 結合の電気陰性度の差を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "大きいほうの値から小さいほうの値を引きます。",
      ],
      // EN: <div class="worked__math">difference = 3.2 − 2.6 = 0.6</div><p>Chlorine has the higher electronegativity, so it attracts the shared pair more strongly. Chlorine is δ− and carbon is δ+.</p><p>Electronegativity has no unit.</p>
      solution: "<div class=\"worked__math\">差 = 3.2 − 2.6 = 0.6</div><p>塩素のほうが電気陰性度が大きいので、共有電子対をより強く引きつけます。塩素が δ−、炭素が δ+ になります。</p><p>電気陰性度に単位はありません。</p>",
    },

    // ── s2-2-q025 · mcq · exam · SL · Structure 2.2.5 · 1 mark
    "s2-2-q025": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, Cl 3.2.</p><p>Which row shows the correct partial charges?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">Bond</th><th scope="col">δ+ atom</th><th scope="col">δ− atom</th></tr></thead><tbody><tr><th scope="row">A</th><td><span class="chem">N–H</span></td><td>N</td><td>H</td></tr><tr><th scope="row">B</th><td><span class="chem">C–Cl</span></td><td>C</td><td>Cl</td></tr><tr><th scope="row">C</th><td><span class="chem">O–F</span></td><td>F</td><td>O</td></tr><tr><th scope="row">D</th><td><span class="chem">C–H</span></td><td>C</td><td>H</td></tr></tbody></table></div>
      stem: "<p>データブックレットの電気陰性度の値：H 2.2、C 2.6、N 3.0、O 3.4、F 4.0、Cl 3.2。</p><p>部分電荷 (partial charges) を正しく示している行はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選択肢</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">結合</th><th scope=\"col\">δ+ の原子</th><th scope=\"col\">δ− の原子</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td><span class=\"chem\">N–H</span></td><td>N</td><td>H</td></tr><tr><th scope=\"row\">B</th><td><span class=\"chem\">C–Cl</span></td><td>C</td><td>Cl</td></tr><tr><th scope=\"row\">C</th><td><span class=\"chem\">O–F</span></td><td>F</td><td>O</td></tr><tr><th scope=\"row\">D</th><td><span class=\"chem\">C–H</span></td><td>C</td><td>H</td></tr></tbody></table></div>",
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
        // EN: The more electronegative atom attracts the shared pair more strongly.
        "電気陰性度の大きい原子のほうが、共有電子対を強く引きつけます。",
        // EN: The atom that pulls the electrons closer becomes slightly negative, δ−.
        "電子を自分のほうへ引き寄せた原子は、わずかに負の電荷 δ− を帯びます。",
      ],
      // EN: <p>In each bond, the atom with the <strong>higher</strong> electronegativity is δ−.</p><p><span class="chem">C–Cl</span>: Cl (3.2) is higher than C (2.6), so C is δ+ and Cl is δ−. Row B is correct.</p><p>The correct charges for the other rows: N δ− and H δ+; F δ− and O δ+; C δ− and H δ+.</p>
      solution: "<p>どの結合でも、電気陰性度の<strong>大きい</strong>ほうの原子が δ− になります。</p><p><span class=\"chem\">C–Cl</span>：Cl (3.2) は C (2.6) より大きいので、C が δ+、Cl が δ− です。B の行が正解です。</p><p>ほかの行の正しい電荷：N が δ−、H が δ+。F が δ−、O が δ+。C が δ−、H が δ+。</p>",
      misconception: {
        // EN (option A): Nitrogen (3.0) is more electronegative than hydrogen (2.2). Nitrogen pulls the shared pair closer, so nitrogen is δ−.
        "0": "窒素 (3.0) は水素 (2.2) より電気陰性度が大きい原子です。窒素が共有電子対を引き寄せるので、窒素が δ− になります。",
        // EN (option C): Fluorine (4.0) is more electronegative than oxygen (3.4). In this bond oxygen is the δ+ atom, even though oxygen is usually δ−.
        "2": "フッ素 (4.0) は酸素 (3.4) より電気陰性度が大きい原子です。酸素はふつう δ− になりますが、この結合では酸素が δ+ の原子です。",
        // EN (option D): With the booklet values, carbon (2.6) is more electronegative than hydrogen (2.2). Carbon is δ− and hydrogen is δ+.
        "3": "データブックレットの値では、炭素 (2.6) は水素 (2.2) より電気陰性度が大きくなっています。炭素が δ−、水素が δ+ です。",
      },
    },

    // ── s2-2-q026 · mcq · challenge · SL · Structure 2.2.5 · 1 mark
    "s2-2-q026": {
      // EN: <p>A student writes: "A covalent bond between atoms of two different elements is always polar."</p><p>Electronegativity values from the data booklet: H 2.2, C 2.6, N 3.0, O 3.4, F 4.0, S 2.6, Cl 3.2.</p><p>Which bond shows that the student is <strong>not</strong> always right?</p>
      stem: "<p>ある生徒が「異なる 2 つの元素の原子の間の共有結合は、必ず極性をもつ」と書きました。</p><p>データブックレットの電気陰性度の値：H 2.2、C 2.6、N 3.0、O 3.4、F 4.0、S 2.6、Cl 3.2。</p><p>この生徒の考えがいつも正しいとは<strong>かぎらない</strong>ことを示す結合はどれですか。</p>",
      options: [
        // EN: <span class="chem">C–H</span>
        "<span class=\"chem\">C–H</span>",
        // EN: <span class="chem">N–Cl</span>
        "<span class=\"chem\">N–Cl</span>",
        // EN: <span class="chem">C–S</span>
        "<span class=\"chem\">C–S</span>",
        // EN: <span class="chem">O–F</span>
        "<span class=\"chem\">O–F</span>",
      ],
      hints: [
        // EN: A bond is polar when the two atoms have different electronegativities.
        "結合が極性をもつのは、2 つの原子の電気陰性度が違うときです。",
        // EN: Calculate the difference for each bond. Is any difference zero?
        "それぞれの結合の差を計算しましょう。差が 0 になるものはありますか。",
      ],
      // EN: <div class="worked__math">C–H: 2.6 − 2.2 = 0.4</div><div class="worked__math">N–Cl: 3.2 − 3.0 = 0.2</div><div class="worked__math">C–S: 2.6 − 2.6 = 0.0</div><div class="worked__math">O–F: 4.0 − 3.4 = 0.6</div><p>Carbon and sulfur have the same booklet value. The shared pair is attracted equally by both atoms, so the model predicts a <strong>non-polar</strong> <span class="chem">C–S</span> bond. Polarity depends on the electronegativity difference, not on the atoms being different elements.</p>
      solution: "<div class=\"worked__math\">C–H: 2.6 − 2.2 = 0.4</div><div class=\"worked__math\">N–Cl: 3.2 − 3.0 = 0.2</div><div class=\"worked__math\">C–S: 2.6 − 2.6 = 0.0</div><div class=\"worked__math\">O–F: 4.0 − 3.4 = 0.6</div><p>炭素と硫黄は、データブックレットの値が同じです。共有電子対は両方の原子に同じ強さで引きつけられるので、このモデルでは <span class=\"chem\">C–S</span> 結合は<strong>無極性</strong> (non-polar) と予測されます。極性を決めるのは電気陰性度の差です。元素が違うかどうかではありません。</p>",
      misconception: {
        // EN (option A): The difference is 2.6 − 2.2 = 0.4. This is small, but it is not zero. The bond is slightly polar.
        "0": "差は 2.6 − 2.2 = 0.4 です。小さい値ですが、0 ではありません。この結合にはわずかに極性があります。",
        // EN (option B): The difference is 3.2 − 3.0 = 0.2. This is very small, but it is not zero. Look for a pair of atoms with the same value.
        "1": "差は 3.2 − 3.0 = 0.2 です。とても小さい値ですが、0 ではありません。値が同じ原子の組を探しましょう。",
        // EN (option D): Both atoms are very electronegative, but what matters is the <strong>difference</strong>: 4.0 − 3.4 = 0.6. The bond is polar.
        "3": "どちらの原子も電気陰性度がとても大きいのですが、大事なのは<strong>差</strong>です。4.0 − 3.4 = 0.6 なので、この結合には極性があります。",
      },
    },

    // ── s2-2-q027 · mcq · foundation · SL · Structure 2.2.6 · 1 mark
    "s2-2-q027": {
      // EN: <p>Which molecule is non-polar?</p>
      stem: "<p>無極性 (non-polar) の分子はどれですか。</p>",
      options: [
        // EN: <span class="chem">H2O</span>
        "<span class=\"chem\">H2O</span>",
        // EN: <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span>",
        // EN: <span class="chem">HCl</span>
        "<span class=\"chem\">HCl</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: All four molecules have polar bonds. The shape decides if the bond dipoles cancel.
        "4 つの分子は、どれも極性のある結合をもっています。結合の双極子 (bond dipoles) が打ち消し合うかどうかは、形で決まります。",
        // EN: Which molecule is linear with two identical bonds?
        "同じ結合を 2 つもつ直線形の分子はどれですか。",
      ],
      // EN: <p><span class="chem">CO2</span> is <strong>linear</strong>: <span class="chem">O=C=O</span>. The two <span class="chem">C=O</span> bond dipoles are equal in size and point in opposite directions. They cancel, so the molecule has no net dipole.</p><p>A molecule can have polar bonds and still be non-polar.</p>
      solution: "<p><span class=\"chem\">CO2</span> は<strong>直線形</strong>で、<span class=\"chem\">O=C=O</span> です。2 つの <span class=\"chem\">C=O</span> 結合の双極子は大きさが等しく、向きが反対です。打ち消し合うので、分子全体の双極子 (net dipole) はありません。</p><p>極性のある結合をもっていても、分子が無極性になることがあります。</p>",
      misconception: {
        // EN (option A): Water is bent. The two <span class="chem">O–H</span> bond dipoles point in different directions and do not cancel. Water is polar.
        "0": "水は折れ線形です。2 つの <span class=\"chem\">O–H</span> 結合の双極子は違う方向を向いていて、打ち消し合いません。水は極性分子です。",
        // EN (option B): Ammonia is trigonal pyramidal. The three <span class="chem">N–H</span> bond dipoles do not cancel. Ammonia is polar.
        "1": "アンモニアは三角錐形です。3 つの <span class=\"chem\">N–H</span> 結合の双極子は打ち消し合いません。アンモニアは極性分子です。",
        // EN (option C): <span class="chem">HCl</span> has one polar bond and nothing to cancel it. It is polar.
        "2": "<span class=\"chem\">HCl</span> には極性のある結合が 1 つあり、それを打ち消すものがありません。極性分子です。",
      },
    },

    // ── s2-2-q028 · multi · exam · SL · Structure 2.2.6 · 1 mark
    "s2-2-q028": {
      // EN: <p>Which of these molecules are polar (have a net dipole)? Select all that apply.</p>
      stem: "<p>次の分子のうち、極性分子（分子全体の双極子 (net dipole) をもつもの）はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: <span class="chem">CCl4</span>
        "<span class=\"chem\">CCl4</span>",
        // EN: <span class="chem">CHCl3</span>
        "<span class=\"chem\">CHCl3</span>",
        // EN: <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span>",
        // EN: <span class="chem">NF3</span>
        "<span class=\"chem\">NF3</span>",
        // EN: <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: Find the shape of each molecule first.
        "まず、それぞれの分子の形を調べましょう。",
        // EN: Bond dipoles cancel when identical bonds are arranged symmetrically around the central atom with no lone pairs.
        "同じ結合が中心原子のまわりに対称に並び、非共有電子対がないとき、結合の双極子は打ち消し合います。",
        // EN: Check each central atom for lone pairs, and check if all the outer atoms are the same.
        "それぞれの中心原子に非共有電子対があるかどうかを確かめましょう。外側の原子がすべて同じかどうかも確かめます。",
      ],
      // EN: <p><strong><span class="chem">CHCl3</span></strong>: tetrahedral, but the four bonds are not all the same (one <span class="chem">C–H</span>, three <span class="chem">C–Cl</span>). The bond dipoles do not cancel. Polar.</p><p><strong><span class="chem">NF3</span></strong>: nitrogen has a lone pair, so the shape is trigonal pyramidal. The three <span class="chem">N–F</span> bond dipoles do not cancel. Polar.</p><p><span class="chem">CCl4</span> (tetrahedral), <span class="chem">BF3</span> (trigonal planar) and <span class="chem">CO2</span> (linear) are symmetrical, so their bond dipoles cancel.</p>
      solution: "<p><strong><span class=\"chem\">CHCl3</span></strong>：正四面体形ですが、4 つの結合がすべて同じではありません（<span class=\"chem\">C–H</span> が 1 つ、<span class=\"chem\">C–Cl</span> が 3 つ）。結合の双極子は打ち消し合いません。極性分子です。</p><p><strong><span class=\"chem\">NF3</span></strong>：窒素に非共有電子対があるので、形は三角錐形です。3 つの <span class=\"chem\">N–F</span> 結合の双極子は打ち消し合いません。極性分子です。</p><p><span class=\"chem\">CCl4</span>（正四面体形）、<span class=\"chem\">BF3</span>（平面三角形）、<span class=\"chem\">CO2</span>（直線形）は対称なので、結合の双極子が打ち消し合います。</p>",
      misconception: {
        // EN (option A): <span class="chem">CCl4</span> is tetrahedral with four identical <span class="chem">C–Cl</span> bonds. The four bond dipoles cancel. Polar bonds do not always make a polar molecule.
        "0": "<span class=\"chem\">CCl4</span> は正四面体形で、同じ <span class=\"chem\">C–Cl</span> 結合が 4 つあります。4 つの結合の双極子は打ち消し合います。結合に極性があっても、分子が極性をもつとはかぎりません。",
        // EN (option C): <span class="chem">BF3</span> is trigonal planar with three identical <span class="chem">B–F</span> bonds at 120°. The three bond dipoles cancel.
        "2": "<span class=\"chem\">BF3</span> は平面三角形で、同じ <span class=\"chem\">B–F</span> 結合が 3 つ、120° の角度で並んでいます。3 つの結合の双極子は打ち消し合います。",
        // EN (option E): <span class="chem">CO2</span> is linear. The two equal <span class="chem">C=O</span> bond dipoles point in opposite directions and cancel.
        "4": "<span class=\"chem\">CO2</span> は直線形です。大きさの等しい 2 つの <span class=\"chem\">C=O</span> 結合の双極子が反対を向いていて、打ち消し合います。",
      },
    },

    // ── s2-2-q029 · short · exam · SL · Structure 2.2.6 · 2 marks
    "s2-2-q029": {
      // EN: <p>The bonds in carbon dioxide, <span class="chem">CO2</span>, and in water, <span class="chem">H2O</span>, are all polar.</p><p>Explain why a water molecule is polar but a carbon dioxide molecule is non-polar.</p>
      stem: "<p>二酸化炭素 <span class=\"chem\">CO2</span> の結合も、水 <span class=\"chem\">H2O</span> の結合も、すべて極性をもっています。</p><p>水分子は極性があるのに、二酸化炭素分子は無極性である理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: The question tells you the bonds are polar. So the answer must be about geometry.
        "結合に極性があることは、問題文に書いてあります。だから、答えは形についての説明になるはずです。",
        // EN: Name the shape of each molecule. Then say what happens to the bond dipoles.
        "それぞれの分子の形の名前を書きましょう。それから、結合の双極子がどうなるかを書きます。",
      ],
      // EN: <p>Carbon dioxide is linear, so the two equal bond dipoles point in opposite directions and cancel. There is no net dipole.</p><p>Water is bent (V-shaped), because oxygen has two lone pairs. The two bond dipoles do not cancel, so the molecule has a net dipole.</p>
      answer: "<p>二酸化炭素は直線形なので、大きさの等しい 2 つの結合の双極子が反対を向き、打ち消し合います。分子全体の双極子はありません。</p><p>水は、酸素に非共有電子対が 2 組あるので、折れ線形（V 字形）です。2 つの結合の双極子は打ち消し合わないので、分子全体として双極子をもちます。</p>",
      markscheme: [
        // EN: Carbon dioxide is linear / symmetrical, so the bond dipoles cancel (no net dipole).
        "二酸化炭素は直線形 / 対称なので、結合の双極子が打ち消し合う（分子全体の双極子がない）。",
        // EN: Water is bent / V-shaped / not symmetrical, so the bond dipoles do not cancel (there is a net dipole).
        "水は折れ線形 / V 字形 / 対称ではないので、結合の双極子が打ち消し合わない（分子全体の双極子がある）。",
      ],
    },

    // ── s2-2-q030 · mcq · challenge · SL · Structure 2.2.6 · 1 mark
    "s2-2-q030": {
      // EN: <p>Carbonyl sulfide has the structure <span class="chem">O=C=S</span>. Like carbon dioxide, it has two electron domains around the carbon atom.</p><p>Electronegativity values from the data booklet: C 2.6, O 3.4, S 2.6.</p><p>Which statement about carbonyl sulfide is correct?</p>
      stem: "<p>硫化カルボニル (carbonyl sulfide) の構造は <span class=\"chem\">O=C=S</span> です。二酸化炭素と同じように、炭素原子のまわりに電子領域が 2 つあります。</p><p>データブックレットの電気陰性度の値：C 2.6、O 3.4、S 2.6。</p><p>硫化カルボニルについて、正しい文はどれですか。</p>",
      options: [
        // EN: It is non-polar, because it is linear and the bond dipoles cancel.
        "無極性である。直線形で、結合の双極子が打ち消し合うから。",
        // EN: It is polar, because the molecule is bent.
        "極性がある。分子が折れ線形だから。",
        // EN: It is polar, because the two bonds have different polarities, so the bond dipoles do not cancel.
        "極性がある。2 つの結合の極性が違うので、結合の双極子が打ち消し合わないから。",
        // EN: It is non-polar, because oxygen and sulfur are in the same group.
        "無極性である。酸素と硫黄は同じ族だから。",
      ],
      hints: [
        // EN: Two electron domains: what is the shape?
        "電子領域が 2 つのとき、どんな形になりますか。",
        // EN: Calculate the electronegativity difference for <span class="chem">C=O</span> and for <span class="chem">C=S</span>.
        "<span class=\"chem\">C=O</span> と <span class=\"chem\">C=S</span> の電気陰性度の差を、それぞれ計算しましょう。",
        // EN: Dipoles cancel only if they are equal in size and opposite in direction.
        "双極子が打ち消し合うのは、大きさが等しく、向きが反対のときだけです。",
      ],
      // EN: <p>Shape: two electron domains around carbon, so the molecule is <strong>linear</strong>.</p><div class="worked__math">C=O: 3.4 − 2.6 = 0.8 (polar)</div><div class="worked__math">C=S: 2.6 − 2.6 = 0.0 (non-polar)</div><p>The <span class="chem">C=O</span> bond dipole has nothing equal and opposite to cancel it. The molecule has a <strong>net dipole</strong>, with the oxygen end δ−.</p><p>Molecular polarity depends on both bond polarity and geometry. Always check both.</p>
      solution: "<p>形：炭素のまわりの電子領域が 2 つなので、分子は<strong>直線形</strong>です。</p><div class=\"worked__math\">C=O: 3.4 − 2.6 = 0.8 (極性あり)</div><div class=\"worked__math\">C=S: 2.6 − 2.6 = 0.0 (無極性)</div><p><span class=\"chem\">C=O</span> 結合の双極子には、打ち消してくれる「大きさが等しく向きが反対の双極子」がありません。この分子は<strong>分子全体の双極子</strong> (net dipole) をもち、酸素側が δ− になります。</p><p>分子の極性は、結合の極性と分子の形の両方で決まります。必ず両方を確かめましょう。</p>",
      misconception: {
        // EN (option A): It is linear, but linear molecules are non-polar only when the two bond dipoles are <strong>equal</strong> and opposite. Here the two bonds are different.
        "0": "直線形であることは合っています。でも、直線形の分子が無極性になるのは、2 つの結合の双極子の大きさが<strong>等しく</strong>、向きが反対のときだけです。ここでは 2 つの結合が違います。",
        // EN (option B): Carbon has two electron domains and no lone pairs, so the molecule is linear, not bent. It is polar for a different reason.
        "1": "炭素には電子領域が 2 つあり、非共有電子対はないので、分子は折れ線形ではなく直線形です。極性がある理由は別にあります。",
        // EN (option D): Elements in the same group can have different electronegativities. Use the values: O is 3.4 and S is 2.6.
        "3": "同じ族の元素でも、電気陰性度が違うことがあります。値を使いましょう。O は 3.4、S は 2.6 です。",
      },
    },

    // ── s2-2-q031 · mcq · foundation · SL · Structure 2.2.7 · 1 mark
    "s2-2-q031": {
      // EN: <p>Diamond and silicon have the same type of structure. Which statement describes it?</p>
      stem: "<p>ダイヤモンドとケイ素 (silicon) は、同じ種類の構造をもっています。その構造を説明している文はどれですか。</p>",
      options: [
        // EN: Each atom is covalently bonded to three other atoms in flat layers.
        "それぞれの原子が、ほかの 3 個の原子と共有結合して、平らな層をつくっている。",
        // EN: Each atom is covalently bonded to four other atoms in a tetrahedral arrangement, through the whole structure.
        "それぞれの原子が、ほかの 4 個の原子と正四面体形に共有結合していて、それが構造全体に続いている。",
        // EN: Small molecules are held together by weak intermolecular forces.
        "小さな分子が、弱い分子間力で集まっている。",
        // EN: Positive ions are held in a lattice by delocalized electrons.
        "陽イオンが、非局在化電子によって結晶格子の中につなぎとめられている。",
      ],
      hints: [
        // EN: Carbon and silicon are both in group 14. Each atom has four valence electrons.
        "炭素とケイ素は、どちらも 14 族です。それぞれの原子に価電子が 4 個あります。",
        // EN: Four bonding pairs around one atom repel to which shape?
        "1 つの原子のまわりの 4 組の共有電子対は、反発し合ってどんな形になりますか。",
      ],
      // EN: <p>In diamond and in silicon, every atom forms <strong>four covalent bonds</strong> to four other atoms. The four bonds point to the corners of a tetrahedron (109.5°).</p><p>This pattern repeats in three dimensions. The result is a <strong>covalent network structure</strong>: a giant structure with strong covalent bonds throughout.</p>
      solution: "<p>ダイヤモンドでもケイ素でも、どの原子も、ほかの 4 個の原子と <strong>4 本の共有結合</strong>をつくります。4 本の結合は、正四面体の頂点の方向を向きます (109.5°)。</p><p>この並び方が 3 次元にくり返されます。こうしてできるのが<strong>共有結合の結晶</strong> (covalent network structure) です。全体が強い共有結合でつながった巨大な構造です。</p>",
      misconception: {
        // EN (option A): This describes graphite or graphene. In diamond and silicon, each atom uses all four valence electrons in four covalent bonds.
        "0": "これは黒鉛やグラフェンの説明です。ダイヤモンドとケイ素では、それぞれの原子が 4 個の価電子をすべて使って、4 本の共有結合をつくります。",
        // EN (option C): Diamond and silicon are covalent network structures. They do not contain separate small molecules.
        "2": "ダイヤモンドとケイ素は共有結合の結晶です。ばらばらの小さな分子は含まれていません。",
        // EN (option D): This describes a metal. Silicon and diamond have covalent bonds between atoms. There are no ions and no delocalized electrons.
        "3": "これは金属の説明です。ケイ素とダイヤモンドでは、原子どうしが共有結合しています。イオンも非局在化電子もありません。",
      },
    },

    // ── s2-2-q032 · multi · foundation · SL · Structure 2.2.7 · 1 mark
    "s2-2-q032": {
      // EN: <p>Which of these substances are good conductors of electricity? Select all that apply.</p>
      stem: "<p>次の物質のうち、電気をよく通すものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: diamond
        "ダイヤモンド (diamond)",
        // EN: graphite
        "黒鉛 (graphite)",
        // EN: graphene
        "グラフェン (graphene)",
        // EN: silicon dioxide
        "二酸化ケイ素 (silicon dioxide)",
        // EN: fullerene, <span class="chem">C60</span>
        "フラーレン (fullerene) <span class=\"chem\">C60</span>",
      ],
      hints: [
        // EN: A substance conducts if it has charged particles that are free to move.
        "自由に動ける電荷をもつ粒子があれば、物質は電気を通します。",
        // EN: In which structures does each carbon atom bond to only three other atoms?
        "それぞれの炭素原子が、ほかの 3 個の原子としか結合していない構造はどれですか。",
      ],
      // EN: <p>In <strong>graphite</strong> and <strong>graphene</strong>, each carbon atom forms only three covalent bonds. The fourth valence electron of each atom is <strong>delocalized</strong> across the whole layer. These electrons are free to move, so they carry charge.</p><p>Diamond and silicon dioxide have no delocalized electrons. In <span class="chem">C60</span>, electrons cannot move between molecules.</p>
      solution: "<p><strong>黒鉛</strong>と<strong>グラフェン</strong>では、それぞれの炭素原子がつくる共有結合は 3 本だけです。各原子の 4 個目の価電子は、層全体に<strong>非局在化</strong> (delocalized) しています。この電子は自由に動けるので、電荷を運びます。</p><p>ダイヤモンドと二酸化ケイ素には、非局在化電子がありません。<span class=\"chem\">C60</span> では、電子は分子から分子へ移れません。</p>",
      misconception: {
        // EN (option A): In diamond, each carbon atom uses all four valence electrons in covalent bonds. There are no delocalized electrons, so there is nothing to carry charge.
        "0": "ダイヤモンドでは、それぞれの炭素原子が 4 個の価電子をすべて共有結合に使っています。非局在化電子がないので、電荷を運ぶものがありません。",
        // EN (option D): In silicon dioxide, all the valence electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions.
        "3": "二酸化ケイ素では、価電子はすべて共有結合の中にあります。非局在化電子も、動けるイオンもありません。",
        // EN (option E): Electrons are delocalized inside each <span class="chem">C60</span> molecule, but they cannot move from one molecule to the next. So solid <span class="chem">C60</span> is a poor conductor.
        "4": "<span class=\"chem\">C60</span> の分子 1 個の中では、電子は非局在化しています。でも、ある分子からとなりの分子へは移れません。だから、固体の <span class=\"chem\">C60</span> は電気をあまり通しません。",
      },
    },

    // ── s2-2-q033 · short · exam · SL · Structure 2.2.7 · 3 marks
    "s2-2-q033": {
      // EN: <p>Diamond and graphite are allotropes of carbon. Diamond is very hard and does not conduct electricity. Graphite is soft and conducts electricity.</p><p>Explain these differences in terms of structure and bonding.</p>
      stem: "<p>ダイヤモンドと黒鉛 (graphite) は、炭素の同素体 (allotropes) です。ダイヤモンドはとても硬く、電気を通しません。黒鉛はやわらかく、電気を通します。</p><p>この違いを、構造と結合にもとづいて説明しなさい (explain)。</p>",
      hints: [
        // EN: How many covalent bonds does each carbon atom form in diamond? In graphite?
        "ダイヤモンドでは、それぞれの炭素原子は共有結合を何本つくりますか。黒鉛ではどうですか。",
        // EN: For hardness, think about what holds the layers of graphite together.
        "硬さについては、黒鉛の層どうしを何が結びつけているのかを考えましょう。",
        // EN: For conductivity, think about the fourth valence electron of each carbon atom in graphite.
        "電気伝導性については、黒鉛のそれぞれの炭素原子の 4 個目の価電子を考えましょう。",
      ],
      // EN: <p><strong>Diamond:</strong> each carbon atom is covalently bonded to four other carbon atoms in a three-dimensional (tetrahedral) network. The strong covalent bonds in all directions make it hard. All four valence electrons are in bonds, so there are no delocalized electrons and it does not conduct.</p><p><strong>Graphite:</strong> each carbon atom is covalently bonded to three other carbon atoms in layers of hexagons. There are only weak London (dispersion) forces between the layers, so the layers can slide over each other and graphite is soft. Each atom has one delocalized electron, which is free to move along the layers, so graphite conducts.</p>
      answer: "<p><strong>ダイヤモンド：</strong>それぞれの炭素原子が、ほかの 4 個の炭素原子と共有結合し、3 次元の（正四面体形の）網目構造をつくっています。あらゆる方向に強い共有結合があるので、硬くなります。4 個の価電子がすべて結合に使われているので、非局在化電子がなく、電気を通しません。</p><p><strong>黒鉛：</strong>それぞれの炭素原子が、ほかの 3 個の炭素原子と共有結合し、六角形が並んだ層をつくっています。層と層の間には弱いロンドン（分散）力しかないので、層どうしがすべり合うことができ、黒鉛はやわらかくなります。それぞれの原子に非局在化電子が 1 個あり、層に沿って自由に動けるので、黒鉛は電気を通します。</p>",
      markscheme: [
        // EN: Diamond: each carbon atom bonded to four others / three-dimensional (tetrahedral) covalent network, so it is hard. AND no delocalized electrons / all valence electrons used in bonds, so it does not conduct.
        "ダイヤモンド：それぞれの炭素原子がほかの 4 個と結合している / 3 次元の（正四面体形の）共有結合の網目構造なので、硬い。かつ、非局在化電子がない / 価電子がすべて結合に使われているので、電気を通さない。",
        // EN: Graphite is soft: layers held together by weak London (dispersion) forces, so the layers can slide over each other. Do not accept "van der Waals" alone or "weak bonds between atoms".
        "黒鉛がやわらかい理由：層どうしが弱いロンドン（分散）力で結びついているので、層がすべり合うことができる。「ファンデルワールス (van der Waals)」だけの答えや、「原子の間の弱い結合 (weak bonds between atoms)」は不可。",
        // EN: Graphite conducts: each carbon atom bonded to only three others, so there are delocalized electrons that are free to move (along the layers). Do not accept "free ions".
        "黒鉛が電気を通す理由：それぞれの炭素原子がほかの 3 個としか結合していないので、（層に沿って）自由に動ける非局在化電子がある。「自由なイオン (free ions)」は不可。",
      ],
    },

    // ── s2-2-q034 · short · exam · SL · Structure 2.2.7 · 3 marks
    "s2-2-q034": {
      // EN: <p>Carbon and silicon are both in group 14. Carbon dioxide, <span class="chem">CO2</span>, changes from solid to gas at −78 °C. Silicon dioxide, <span class="chem">SiO2</span>, melts at about 1700 °C.</p><p>Explain this large difference in terms of structure and bonding.</p>
      stem: "<p>炭素とケイ素は、どちらも 14 族です。二酸化炭素 <span class=\"chem\">CO2</span> は −78 °C で固体から気体に変わります。二酸化ケイ素 (silicon dioxide) <span class=\"chem\">SiO2</span> は約 1700 °C で融解します。</p><p>この大きな違いを、構造と結合にもとづいて説明しなさい (explain)。</p>",
      hints: [
        // EN: One of these substances is made of small molecules. The other is a giant structure.
        "この 2 つの物質のうち、一方は小さな分子でできています。もう一方は巨大な構造です。",
        // EN: For each substance, say exactly what must be broken or overcome.
        "それぞれの物質について、何を切らなければならないのか、何に打ち勝たなければならないのかを正確に書きましょう。",
        // EN: Finish with a comparison of strength.
        "最後に、強さをくらべて締めくくります。",
      ],
      // EN: <p>Silicon dioxide has a covalent network structure. Each silicon atom is covalently bonded to four oxygen atoms and each oxygen atom to two silicon atoms, through the whole structure. To melt it, strong covalent bonds must be broken.</p><p>Carbon dioxide is made of small, separate molecules. Only weak London (dispersion) forces between the molecules must be overcome. The covalent bonds inside the molecules do not break.</p><p>Covalent bonds are much stronger than London forces, so much more energy is needed for silicon dioxide.</p>
      answer: "<p>二酸化ケイ素は、共有結合の結晶です。それぞれのケイ素原子が 4 個の酸素原子と、それぞれの酸素原子が 2 個のケイ素原子と共有結合していて、それが構造全体に続いています。融解させるには、強い共有結合を切らなければなりません。</p><p>二酸化炭素は、ばらばらの小さな分子でできています。打ち勝つ必要があるのは、分子間の弱いロンドン（分散）力だけです。分子の中の共有結合は切れません。</p><p>共有結合はロンドン力よりずっと強いので、二酸化ケイ素のほうがずっと多くのエネルギーを必要とします。</p>",
      markscheme: [
        // EN: Silicon dioxide is a covalent network (giant covalent) structure, so covalent bonds (between atoms) must be broken.
        "二酸化ケイ素は共有結合の結晶（covalent network / giant covalent の構造）なので、（原子間の）共有結合を切らなければならない。",
        // EN: Carbon dioxide is (simple) molecular, so only London (dispersion) forces between molecules must be overcome. Accept "intermolecular forces". Do not accept covalent bonds breaking in carbon dioxide.
        "二酸化炭素は（単純な）分子でできているので、分子間のロンドン（分散）力に打ち勝つだけでよい。「分子間力 (intermolecular forces)」も可。二酸化炭素で共有結合が切れるとする答えは不可。",
        // EN: Covalent bonds are (much) stronger than London forces / intermolecular forces, so (much) more energy is needed. Do not accept "stronger bonding" with no bond or force named.
        "共有結合はロンドン力 / 分子間力より（ずっと）強いので、（ずっと）多くのエネルギーが必要である。結合や力の名前を挙げずに「結合が強い (stronger bonding)」とだけ書いた答えは不可。",
      ],
    },

    // ── s2-2-q035 · mcq · exam · SL · Structure 2.2.7 · 1 mark
    "s2-2-q035": {
      // EN: <p>Fullerene, <span class="chem">C60</span>, turns into a gas at a much lower temperature than diamond. It also dissolves in some non-polar solvents, but diamond does not.</p><p>Which statement explains these observations?</p>
      stem: "<p>フラーレン <span class=\"chem\">C60</span> は、ダイヤモンドよりずっと低い温度で気体になります。また、一部の無極性溶媒に溶けますが、ダイヤモンドは溶けません。</p><p>これらの観察結果を説明している文はどれですか。</p>",
      options: [
        // EN: The covalent bonds in <span class="chem">C60</span> are much weaker than the covalent bonds in diamond.
        "<span class=\"chem\">C60</span> の共有結合は、ダイヤモンドの共有結合よりずっと弱い。",
        // EN: <span class="chem">C60</span> is made of separate molecules with weak London (dispersion) forces between them. Diamond is a covalent network.
        "<span class=\"chem\">C60</span> はばらばらの分子でできていて、分子間には弱いロンドン（分散）力がはたらく。ダイヤモンドは共有結合の結晶である。",
        // EN: <span class="chem">C60</span> has delocalized electrons, and diamond does not.
        "<span class=\"chem\">C60</span> には非局在化電子があるが、ダイヤモンドにはない。",
        // EN: <span class="chem">C60</span> is made of layers that can slide over each other.
        "<span class=\"chem\">C60</span> は、すべり合うことのできる層でできている。",
      ],
      hints: [
        // EN: The formula <span class="chem">C60</span> tells you there are 60 atoms in one molecule.
        "化学式 <span class=\"chem\">C60</span> から、1 個の分子に原子が 60 個あることがわかります。",
        // EN: What must be overcome to separate molecules? What must be broken to separate the atoms in diamond?
        "分子どうしを引き離すには、何に打ち勝つ必要がありますか。ダイヤモンドの原子どうしを引き離すには、何を切る必要がありますか。",
      ],
      // EN: <p><span class="chem">C60</span> is a <strong>molecular</strong> allotrope. Each molecule is a cage of 60 carbon atoms, each bonded to three others. Between the molecules there are only weak London (dispersion) forces.</p><p>Little energy is needed to separate the molecules, and a non-polar solvent can separate them too. In diamond, strong covalent bonds through the whole network must be broken.</p>
      solution: "<p><span class=\"chem\">C60</span> は<strong>分子でできた</strong>同素体です。それぞれの分子は 60 個の炭素原子がつくるかご形で、どの原子もほかの 3 個と結合しています。分子と分子の間には、弱いロンドン（分散）力しかありません。</p><p>分子どうしを引き離すのに必要なエネルギーは小さく、無極性溶媒も分子を引き離せます。ダイヤモンドでは、網目構造全体に続く強い共有結合を切らなければなりません。</p>",
      misconception: {
        // EN (option A): The covalent bonds inside a <span class="chem">C60</span> molecule are strong, and they do not break when it turns into a gas. Only the forces between the molecules are overcome.
        "0": "<span class=\"chem\">C60</span> 分子の中の共有結合は強く、気体になるときも切れません。打ち勝つのは、分子間の力だけです。",
        // EN (option C): This is true, but it does not explain volatility or solubility. Those properties depend on what holds the particles together.
        "2": "これは正しい文ですが、揮発性や溶けやすさの説明にはなりません。こうした性質は、粒子どうしを何が結びつけているかで決まります。",
        // EN (option D): Layers describe graphite. <span class="chem">C60</span> molecules are closed cages of 60 carbon atoms.
        "3": "層があるのは黒鉛です。<span class=\"chem\">C60</span> 分子は、60 個の炭素原子でできた閉じたかごです。",
      },
    },

    // ── s2-2-q036 · mcq · challenge · SL · Structure 2.2.7 · 1 mark
    "s2-2-q036": {
      // EN: <p>X, Y and Z are three allotropes of carbon: diamond, graphite and fullerene (<span class="chem">C60</span>), in some order.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Properties of three allotropes of carbon</caption><thead><tr><th scope="col">Allotrope</th><th scope="col">Hardness</th><th scope="col">Electrical conductivity of the solid</th><th scope="col">Solubility in methylbenzene (a non-polar solvent)</th></tr></thead><tbody><tr><th scope="row">X</th><td>soft</td><td>good</td><td>insoluble</td></tr><tr><th scope="row">Y</th><td>soft</td><td>poor</td><td>dissolves slightly and colours the solvent</td></tr><tr><th scope="row">Z</th><td>very hard</td><td>poor</td><td>insoluble</td></tr></tbody></table></div><p>Which row identifies X and Y?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col">X</th><th scope="col">Y</th></tr></thead><tbody><tr><th scope="row">A</th><td>graphite</td><td>diamond</td></tr><tr><th scope="row">B</th><td>fullerene</td><td>graphite</td></tr><tr><th scope="row">C</th><td>diamond</td><td>fullerene</td></tr><tr><th scope="row">D</th><td>graphite</td><td>fullerene</td></tr></tbody></table></div>
      stem: "<p>X、Y、Z は炭素の 3 つの同素体で、ダイヤモンド、黒鉛、フラーレン (<span class=\"chem\">C60</span>) のどれかです。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>炭素の 3 つの同素体の性質</caption><thead><tr><th scope=\"col\">同素体</th><th scope=\"col\">硬さ</th><th scope=\"col\">固体の電気伝導性</th><th scope=\"col\">メチルベンゼン（無極性溶媒）への溶けやすさ</th></tr></thead><tbody><tr><th scope=\"row\">X</th><td>やわらかい</td><td>よい</td><td>溶けない</td></tr><tr><th scope=\"row\">Y</th><td>やわらかい</td><td>悪い</td><td>わずかに溶けて、溶媒に色がつく</td></tr><tr><th scope=\"row\">Z</th><td>とても硬い</td><td>悪い</td><td>溶けない</td></tr></tbody></table></div><p>X と Y を正しく特定している行はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選択肢</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">X</th><th scope=\"col\">Y</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>黒鉛</td><td>ダイヤモンド</td></tr><tr><th scope=\"row\">B</th><td>フラーレン</td><td>黒鉛</td></tr><tr><th scope=\"row\">C</th><td>ダイヤモンド</td><td>フラーレン</td></tr><tr><th scope=\"row\">D</th><td>黒鉛</td><td>フラーレン</td></tr></tbody></table></div>",
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
        // EN: Only one allotrope conducts well. Which one has delocalized electrons that can move through the whole structure?
        "電気をよく通す同素体は 1 つだけです。構造全体を動ける非局在化電子をもつのはどれですか。",
        // EN: Covalent network structures do not dissolve. Which allotrope is made of separate molecules?
        "共有結合の結晶は溶けません。ばらばらの分子でできている同素体はどれですか。",
      ],
      // EN: <p><strong>X</strong> is a good conductor and is soft: <strong>graphite</strong>. It has delocalized electrons in its layers, and weak London forces between layers.</p><p><strong>Y</strong> dissolves in a non-polar solvent, so it is made of separate molecules: <strong>fullerene</strong>. Only London forces between <span class="chem">C60</span> molecules must be overcome.</p><p><strong>Z</strong> is very hard, a poor conductor and insoluble: diamond.</p>
      solution: "<p><strong>X</strong> は電気をよく通し、やわらかいので、<strong>黒鉛</strong>です。層の中に非局在化電子があり、層と層の間には弱いロンドン力がはたらいています。</p><p><strong>Y</strong> は無極性溶媒に溶けるので、ばらばらの分子でできています。<strong>フラーレン</strong>です。打ち勝つ必要があるのは、<span class=\"chem\">C60</span> 分子の間のロンドン力だけです。</p><p><strong>Z</strong> はとても硬く、電気を通しにくく、溶けません。ダイヤモンドです。</p>",
      misconception: {
        // EN (option A): X is right. But diamond is very hard and does not dissolve, because it is a covalent network. Y is soft and dissolves, so Y must be made of separate molecules.
        "0": "X は合っています。でも、ダイヤモンドは共有結合の結晶なので、とても硬く、溶けません。Y はやわらかくて溶けるので、ばらばらの分子でできているはずです。",
        // EN (option B): The two are the wrong way round. A substance that dissolves must be made of separate molecules. Graphite is a covalent network and does not dissolve.
        "1": "2 つが逆になっています。溶ける物質は、ばらばらの分子でできているはずです。黒鉛は共有結合の結晶で、溶けません。",
        // EN (option C): Diamond is very hard and a poor conductor. X is soft and a good conductor, so X has delocalized electrons that can move through the whole structure.
        "2": "ダイヤモンドはとても硬く、電気を通しにくい物質です。X はやわらかく、電気をよく通すので、構造全体を動ける非局在化電子をもっています。",
      },
    },

    // ── s2-2-q037 · mcq · foundation · SL · Structure 2.2.8 · 1 mark
    "s2-2-q037": {
      // EN: <p>Which intermolecular force acts between methane molecules, <span class="chem">CH4</span>?</p>
      stem: "<p>メタン分子 <span class=\"chem\">CH4</span> の間にはたらく分子間力 (intermolecular force) はどれですか。</p>",
      options: [
        // EN: London (dispersion) forces only
        "ロンドン（分散）力 (London (dispersion) forces) だけ",
        // EN: dipole–dipole forces and London (dispersion) forces
        "双極子–双極子相互作用 (dipole–dipole forces) とロンドン（分散）力",
        // EN: hydrogen bonding and London (dispersion) forces
        "水素結合 (hydrogen bonding) とロンドン（分散）力",
        // EN: covalent bonds
        "共有結合 (covalent bonds)",
      ],
      hints: [
        // EN: Is a methane molecule polar or non-polar?
        "メタン分子は極性分子ですか、無極性分子ですか。",
        // EN: Which force exists between all molecules, including non-polar ones?
        "無極性の分子も含めて、すべての分子の間にはたらく力はどれですか。",
      ],
      // EN: <p>Methane is a <strong>non-polar</strong> molecule: it is tetrahedral, so the small <span class="chem">C–H</span> bond dipoles cancel.</p><p>Non-polar molecules attract each other only by <strong>London (dispersion) forces</strong>. These forces exist between all molecules.</p>
      solution: "<p>メタンは<strong>無極性</strong>の分子です。正四面体形なので、<span class=\"chem\">C–H</span> 結合の小さな双極子が打ち消し合います。</p><p>無極性分子どうしを引きつけるのは、<strong>ロンドン（分散）力</strong>だけです。この力は、すべての分子の間にはたらきます。</p>",
      misconception: {
        // EN (option B): Dipole–dipole forces need polar molecules. Methane is tetrahedral and symmetrical, so it has no net dipole.
        "1": "双極子–双極子相互作用がはたらくのは、極性分子の間です。メタンは正四面体形で対称なので、分子全体の双極子がありません。",
        // EN (option C): Methane contains hydrogen, but the hydrogen is bonded to carbon. Hydrogen bonding needs H bonded to N, O or F.
        "2": "メタンには水素がありますが、その水素は炭素と結合しています。水素結合には、N、O、F のどれかと結合した H が必要です。",
        // EN (option D): Covalent bonds are inside each molecule (between C and H). The question asks about the forces between molecules.
        "3": "共有結合は、それぞれの分子の中（C と H の間）にあります。問われているのは、分子と分子の間にはたらく力です。",
      },
    },

    // ── s2-2-q038 · mcq · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q038": {
      // EN: <p>Which substance has hydrogen bonding between its own molecules?</p>
      stem: "<p>同じ物質の分子どうしの間に水素結合 (hydrogen bonding) ができる物質はどれですか。</p>",
      options: [
        // EN: fluoromethane, <span class="chem">CH3F</span>
        "フルオロメタン (fluoromethane) <span class=\"chem\">CH3F</span>",
        // EN: methoxymethane, <span class="chem">CH3OCH3</span>
        "メトキシメタン (methoxymethane) <span class=\"chem\">CH3OCH3</span>",
        // EN: ethanal, <span class="chem">CH3CHO</span>
        "エタナール (ethanal) <span class=\"chem\">CH3CHO</span>",
        // EN: methanamine, <span class="chem">CH3NH2</span>
        "メタンアミン (methanamine) <span class=\"chem\">CH3NH2</span>",
      ],
      hints: [
        // EN: Hydrogen bonding needs a hydrogen atom covalently bonded to N, O or F.
        "水素結合には、N、O、F のどれかと共有結合した水素原子が必要です。",
        // EN: For each molecule, check which atom each hydrogen is bonded to.
        "それぞれの分子で、水素がどの原子と結合しているかを 1 つずつ確かめましょう。",
      ],
      // EN: <p>A hydrogen bond needs <strong>H covalently bonded to a very electronegative atom</strong> (N, O or F). That H is then attracted to a lone pair on N, O or F in a neighbouring molecule.</p><p>Only <span class="chem">CH3NH2</span> has such a hydrogen: the two H atoms of the <span class="chem">NH2</span> group. In the other three molecules, every H is bonded to carbon.</p>
      solution: "<p>水素結合には、<strong>電気陰性度のとても大きい原子（N、O、F）と共有結合した H</strong> が必要です。その H が、となりの分子の N、O、F の非共有電子対に引きつけられます。</p><p>そのような水素をもつのは <span class=\"chem\">CH3NH2</span> だけです。<span class=\"chem\">NH2</span> 基の 2 個の H 原子がそれにあたります。ほかの 3 つの分子では、H はすべて炭素と結合しています。</p>",
      misconception: {
        // EN (option A): The molecule contains H and F, but every H is bonded to carbon. There is no <span class="chem">H–F</span> bond, so there is no hydrogen that can form a hydrogen bond.
        "0": "この分子には H と F がありますが、H はすべて炭素と結合しています。<span class=\"chem\">H–F</span> 結合がないので、水素結合をつくれる水素がありません。",
        // EN (option B): The molecule contains H and O, but every H is bonded to carbon. There is no <span class="chem">O–H</span> bond. The forces are dipole–dipole and London forces.
        "1": "この分子には H と O がありますが、H はすべて炭素と結合しています。<span class=\"chem\">O–H</span> 結合はありません。はたらく力は、双極子–双極子相互作用とロンドン力です。",
        // EN (option C): The oxygen is double-bonded to carbon. Every H is bonded to carbon. With no <span class="chem">O–H</span> bond, ethanal molecules cannot hydrogen-bond to each other.
        "2": "酸素は炭素と二重結合しています。H はすべて炭素と結合しています。<span class=\"chem\">O–H</span> 結合がないので、エタナールの分子どうしは水素結合をつくれません。",
      },
    },

    // ── s2-2-q039 · multi · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q039": {
      // EN: <p>In IB Chemistry, "van der Waals forces" is an inclusive term. Which of these does it include? Select all that apply.</p>
      stem: "<p>IB 化学では、「ファンデルワールス力 (van der Waals forces)」はいくつかの力をまとめた呼び名です。次のうち、これに含まれるものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: London (dispersion) forces
        "ロンドン（分散）力 (London (dispersion) forces)",
        // EN: dipole–induced dipole forces
        "双極子–誘起双極子相互作用 (dipole–induced dipole forces)",
        // EN: dipole–dipole forces
        "双極子–双極子相互作用 (dipole–dipole forces)",
        // EN: hydrogen bonding
        "水素結合 (hydrogen bonding)",
        // EN: covalent bonds
        "共有結合 (covalent bonds)",
      ],
      hints: [
        // EN: The term covers three intermolecular forces.
        "この呼び名には、3 種類の分子間力が含まれます。",
        // EN: One intermolecular force is named separately, because it is stronger and needs H bonded to N, O or F.
        "分子間力のうち 1 つは、別の名前で呼ばれます。ほかより強く、N、O、F のどれかと結合した H が必要だからです。",
      ],
      // EN: <p>"Van der Waals forces" covers <strong>London (dispersion) forces, dipole–induced dipole forces and dipole–dipole forces</strong>.</p><p>It does not include hydrogen bonding.</p><p data-i18n="both">Exam tip: when you mean London forces, write "London (dispersion) forces". Markschemes do not accept "van der Waals" in place of "London".</p>
      solution: "<p>「ファンデルワールス力」には、<strong>ロンドン（分散）力、双極子–誘起双極子相互作用、双極子–双極子相互作用</strong>が含まれます。</p><p>水素結合は含まれません。</p><p data-i18n=\"both\">試験のポイント：ロンドン力のことを言いたいときは、\"London (dispersion) forces\" と書きましょう。採点基準では、\"London\" の代わりに \"van der Waals\" と書いても認められません。</p>",
      misconception: {
        // EN (option D): Hydrogen bonding is an intermolecular force, but the guide does not include it in the term "van der Waals forces".
        "3": "水素結合は分子間力ですが、『指導の手引き』(the guide) では「ファンデルワールス力」という呼び名に含めていません。",
        // EN (option E): Covalent bonds hold atoms together inside a molecule. Van der Waals forces act between molecules.
        "4": "共有結合は、分子の中で原子どうしを結びつけています。ファンデルワールス力は、分子と分子の間にはたらきます。",
      },
    },

    // ── s2-2-q040 · mcq · exam · SL · Structure 2.2.8 · 1 mark
    "s2-2-q040": {
      // EN: <p>A small amount of argon gas dissolves in water. Which force acts between an argon atom and a water molecule, in addition to London (dispersion) forces?</p>
      stem: "<p>アルゴンの気体は、水にわずかに溶けます。アルゴン原子と水分子の間には、ロンドン（分散）力のほかに、どの力がはたらきますか。</p>",
      options: [
        // EN: dipole–dipole forces
        "双極子–双極子相互作用 (dipole–dipole forces)",
        // EN: dipole–induced dipole forces
        "双極子–誘起双極子相互作用 (dipole–induced dipole forces)",
        // EN: hydrogen bonding
        "水素結合 (hydrogen bonding)",
        // EN: ionic bonding
        "イオン結合 (ionic bonding)",
      ],
      hints: [
        // EN: Water is a polar molecule. Argon is a non-polar atom.
        "水は極性分子です。アルゴンは無極性の原子です。",
        // EN: A polar molecule can push or pull the electron cloud of a nearby particle.
        "極性分子は、近くにある粒子の電子雲を押したり引いたりできます。",
      ],
      // EN: <p>Water has a permanent dipole. Argon has none.</p><p>When a water molecule comes close, its dipole distorts the electron cloud of the argon atom. This creates an <strong>induced dipole</strong> in argon. The attraction between the two is a <strong>dipole–induced dipole force</strong>.</p>
      solution: "<p>水には永久双極子 (permanent dipole) があります。アルゴンにはありません。</p><p>水分子が近づくと、その双極子がアルゴン原子の電子雲をゆがめます。すると、アルゴンに<strong>誘起双極子</strong> (induced dipole) ができます。この 2 つの間の引力が<strong>双極子–誘起双極子相互作用</strong>です。</p>",
      misconception: {
        // EN (option A): Dipole–dipole forces need two polar molecules. An argon atom has no permanent dipole.
        "0": "双極子–双極子相互作用には、極性分子が 2 つ必要です。アルゴン原子には永久双極子がありません。",
        // EN (option C): Hydrogen bonding needs an N, O or F atom on the other particle. Argon is not one of these.
        "2": "水素結合には、相手の粒子に N、O、F のどれかの原子が必要です。アルゴンはそのどれでもありません。",
        // EN (option D): Ionic bonding is the attraction between oppositely charged ions. Argon atoms and water molecules are not ions.
        "3": "イオン結合は、反対の電荷をもつイオンの間の引力です。アルゴン原子も水分子もイオンではありません。",
      },
    },

    // ── s2-2-q041 · short · exam · SL · Structure 2.2.8 · 2 marks
    "s2-2-q041": {
      // EN: <p>Liquid ammonia, <span class="chem">NH3</span>, has hydrogen bonding between its molecules.</p><p>Explain how a hydrogen bond forms between two ammonia molecules.</p>
      stem: "<p>液体アンモニア <span class=\"chem\">NH3</span> では、分子の間に水素結合があります。</p><p>2 つのアンモニア分子の間に水素結合ができるしくみを説明しなさい (explain)。</p>",
      hints: [
        // EN: A hydrogen bond has two parts. First: which atom is the hydrogen covalently bonded to?
        "水素結合の説明は 2 つの部分からなります。1 つ目：その水素は、どの原子と共有結合していますか。",
        // EN: Second: what on the other molecule attracts this hydrogen?
        "2 つ目：もう一方の分子の何が、この水素を引きつけますか。",
      ],
      // EN: <p>In ammonia, hydrogen is covalently bonded to nitrogen, which is a very electronegative atom. The <span class="chem">N–H</span> bond is polar, so the hydrogen atom is δ+.</p><p>This δ+ hydrogen is attracted to the lone pair on the (δ−) nitrogen atom of a neighbouring ammonia molecule. This attraction is the hydrogen bond.</p>
      answer: "<p>アンモニアでは、水素は窒素と共有結合しています。窒素は電気陰性度のとても大きい原子です。<span class=\"chem\">N–H</span> 結合には極性があるので、水素原子は δ+ になります。</p><p>この δ+ の水素が、となりのアンモニア分子の（δ− の）窒素原子の非共有電子対 (lone pair) に引きつけられます。この引力が水素結合です。</p>",
      markscheme: [
        // EN: Hydrogen is (covalently) bonded to nitrogen, a (highly) electronegative atom. Accept: the N–H bond is very polar / H is δ+.
        "水素が、電気陰性度の（非常に）大きい原子である窒素と（共有）結合している。「N–H 結合の極性がとても大きい」/「H が δ+ である」も可。",
        // EN: This hydrogen is attracted to (the lone pair on) the nitrogen atom of a neighbouring molecule. Accept a labelled diagram. Do not accept a description of the N–H covalent bond as the hydrogen bond.
        "この水素が、となりの分子の窒素原子（の非共有電子対）に引きつけられる。ラベルを付けた図も可。N–H 共有結合を水素結合として説明した答えは不可。",
      ],
    },

    // ── s2-2-q042 · mcq · challenge · SL · Structure 2.2.8 · 1 mark
    "s2-2-q042": {
      // EN: <p>Two compounds have the same molecular formula, <span class="chem">C3H9N</span>.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two isomers</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">P</th><td><span class="chem">CH3CH2CH2NH2</span></td><td>48</td></tr><tr><th scope="row">Q</th><td><span class="chem">(CH3)3N</span></td><td>3</td></tr></tbody></table></div><p>Which is the best explanation for the higher boiling point of P?</p>
      stem: "<p>2 つの化合物は、分子式がどちらも <span class=\"chem\">C3H9N</span> です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>2 つの異性体</caption><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">構造式</th><th scope=\"col\">沸点 / °C</th></tr></thead><tbody><tr><th scope=\"row\">P</th><td><span class=\"chem\">CH3CH2CH2NH2</span></td><td>48</td></tr><tr><th scope=\"row\">Q</th><td><span class=\"chem\">(CH3)3N</span></td><td>3</td></tr></tbody></table></div><p>P の沸点のほうが高い理由として、最もよい説明はどれですか。</p>",
      options: [
        // EN: P has more electrons than Q, so P has stronger London (dispersion) forces.
        "P は Q より電子が多いので、ロンドン（分散）力が強い。",
        // EN: P has hydrogen bonding between its molecules. Q has no hydrogen atom bonded to nitrogen, so Q has no hydrogen bonding between its molecules.
        "P は分子間に水素結合がある。Q には窒素と結合した水素原子がないので、分子間に水素結合がない。",
        // EN: The covalent bonds in P are stronger than the covalent bonds in Q.
        "P の共有結合は、Q の共有結合より強い。",
        // EN: P is polar and Q is non-polar.
        "P は極性分子で、Q は無極性分子である。",
      ],
      hints: [
        // EN: Both molecules contain N and H. Look at which atom the H atoms are bonded to.
        "どちらの分子にも N と H があります。H 原子がどの原子と結合しているかを見ましょう。",
        // EN: In Q, the nitrogen atom is bonded to three carbon atoms.
        "Q では、窒素原子は 3 個の炭素原子と結合しています。",
      ],
      // EN: <p>In <strong>P</strong>, two hydrogen atoms are bonded to nitrogen (<span class="chem">NH2</span>). These δ+ hydrogens are attracted to the lone pair on nitrogen in a neighbouring molecule. P has <strong>hydrogen bonding</strong>.</p><p>In <strong>Q</strong>, nitrogen is bonded to three carbon atoms. Every hydrogen is bonded to carbon. Q molecules attract each other only by dipole–dipole and London forces.</p><p>Hydrogen bonding is stronger, so more energy is needed to separate the molecules of P. Q is also more compact, which makes its London forces a little weaker.</p>
      solution: "<p><strong>P</strong> では、2 個の水素原子が窒素と結合しています (<span class=\"chem\">NH2</span>)。この δ+ の水素が、となりの分子の窒素の非共有電子対に引きつけられます。P には<strong>水素結合</strong>があります。</p><p><strong>Q</strong> では、窒素は 3 個の炭素原子と結合しています。水素はすべて炭素と結合しています。Q の分子どうしを引きつけるのは、双極子–双極子相互作用とロンドン力だけです。</p><p>水素結合のほうが強いので、P の分子どうしを引き離すには、より多くのエネルギーが必要です。また、Q のほうがコンパクトな形なので、ロンドン力も少し弱くなります。</p>",
      misconception: {
        // EN (option A): P and Q have the same molecular formula, so they have the same number of electrons.
        "0": "P と Q は分子式が同じなので、電子の数も同じです。",
        // EN (option C): Boiling separates molecules from each other. It does not break covalent bonds, so covalent bond strength does not decide the boiling point.
        "2": "沸騰では、分子どうしが引き離されます。共有結合は切れないので、共有結合の強さで沸点が決まるわけではありません。",
        // EN (option D): Q is also polar. Its nitrogen atom has a lone pair and three bonding pairs, so the shape around N is trigonal pyramidal and the bond dipoles do not cancel.
        "3": "Q も極性分子です。Q の窒素原子には非共有電子対が 1 組と共有電子対が 3 組あるので、N のまわりの形は三角錐形になり、結合の双極子は打ち消し合いません。",
      },
    },

    // ── s2-2-q043 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "s2-2-q043": {
      // EN: <p>Pure liquid hexane, <span class="chem">C6H14</span>, does not conduct electricity. Why?</p>
      stem: "<p>純粋な液体のヘキサン <span class=\"chem\">C6H14</span> は電気を通しません。なぜですか。</p>",
      options: [
        // EN: The covalent bonds in hexane are too strong.
        "ヘキサンの共有結合が強すぎるから。",
        // EN: Hexane has no ions and no delocalized electrons that are free to move.
        "ヘキサンには、自由に動けるイオンも非局在化電子もないから。",
        // EN: The London (dispersion) forces between hexane molecules are too weak.
        "ヘキサン分子の間のロンドン（分散）力が弱すぎるから。",
        // EN: The electrons in hexane are free to move but the molecules are not.
        "ヘキサンの電子は自由に動けるが、分子は動けないから。",
      ],
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that are free to move: ions or delocalized electrons.
        "物質が電気を通すには、自由に動ける電荷をもつ粒子が必要です。イオンか非局在化電子です。",
      ],
      // EN: <p>Hexane is made of neutral molecules. All its valence electrons are held in covalent bonds. So there are <strong>no mobile ions and no delocalized electrons</strong> to carry charge.</p><p>This is true for most molecular covalent substances, as solids and as liquids.</p>
      solution: "<p>ヘキサンは、電気的に中性の分子でできています。価電子はすべて共有結合の中にあります。だから、電荷を運ぶ<strong>動けるイオンも非局在化電子もありません</strong> (no mobile ions and no delocalized electrons)。</p><p>分子でできた共有結合の物質は、固体でも液体でも、ほとんどがこれに当てはまります。</p>",
      misconception: {
        // EN (option A): Bond strength is not the reason. A substance conducts only if it has charged particles that can move.
        "0": "結合の強さは理由ではありません。物質が電気を通すのは、動ける電荷をもつ粒子があるときだけです。",
        // EN (option C): Intermolecular forces affect the boiling point. They do not decide electrical conductivity.
        "2": "分子間力は沸点に影響します。電気伝導性を決めるものではありません。",
        // EN (option D): The electrons in hexane are held in covalent bonds between two atoms. They are not free to move through the liquid.
        "3": "ヘキサンの電子は、2 つの原子の間の共有結合の中にあります。液体の中を自由に動くことはできません。",
      },
    },

    // ── s2-2-q044 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "s2-2-q044": {
      // EN: <p>What is overcome when liquid water boils?</p>
      stem: "<p>液体の水が沸騰するとき、何に打ち勝つ必要がありますか。</p>",
      options: [
        // EN: the covalent bonds between hydrogen and oxygen atoms
        "水素原子と酸素原子の間の共有結合",
        // EN: the hydrogen bonds between water molecules
        "水分子の間の水素結合",
        // EN: the ionic bonds between water molecules
        "水分子の間のイオン結合",
        // EN: the attraction between the nuclei and the electrons in each atom
        "それぞれの原子の中の、原子核と電子の間の引力",
      ],
      hints: [
        // EN: Steam is still <span class="chem">H2O</span>. What has changed?
        "水蒸気も <span class=\"chem\">H2O</span> のままです。何が変わったのでしょうか。",
        // EN: Boiling separates molecules from each other.
        "沸騰では、分子どうしが引き離されます。",
      ],
      // EN: <p>Boiling separates the molecules from each other. The molecules stay whole.</p><p>So boiling overcomes the <strong>intermolecular forces</strong>. In water the strongest of these is <strong>hydrogen bonding</strong>. The <span class="chem">O–H</span> covalent bonds inside each molecule do not break.</p>
      solution: "<p>沸騰では、分子どうしが引き離されます。分子そのものは、こわれずに残ります。</p><p>つまり、沸騰で打ち勝つのは<strong>分子間力</strong> (intermolecular forces) です。水では、その中で最も強いのが<strong>水素結合</strong>です。それぞれの分子の中の <span class=\"chem\">O–H</span> 共有結合は切れません。</p>",
      misconception: {
        // EN (option A): If the <span class="chem">O–H</span> covalent bonds broke, the water would become hydrogen and oxygen. Steam is still made of <span class="chem">H2O</span> molecules.
        "0": "<span class=\"chem\">O–H</span> 共有結合が切れたら、水は水素と酸素になってしまいます。水蒸気も <span class=\"chem\">H2O</span> 分子でできています。",
        // EN (option C): Water molecules are neutral. There are no ions in pure water to form ionic bonds between molecules.
        "2": "水分子は電気的に中性です。純粋な水には、分子の間でイオン結合をつくるようなイオンはありません。",
        // EN (option D): Boiling does not remove electrons from atoms. It only separates whole molecules from each other.
        "3": "沸騰しても、原子から電子が取り除かれることはありません。分子がまるごと、たがいに引き離されるだけです。",
      },
    },

    // ── s2-2-q045 · short · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q045": {
      // EN: <p>Ethanol and methoxymethane have the same molecular formula, <span class="chem">C2H6O</span>, and the same molar mass.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two isomers</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">ethanol</th><td><span class="chem">CH3CH2OH</span></td><td>78</td></tr><tr><th scope="row">methoxymethane</th><td><span class="chem">CH3OCH3</span></td><td>−25</td></tr></tbody></table></div><p>Explain why ethanol has the higher boiling point.</p>
      stem: "<p>エタノールとメトキシメタン (methoxymethane) は、分子式がどちらも <span class=\"chem\">C2H6O</span> で、モル質量も同じです。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>2 つの異性体</caption><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">構造式</th><th scope=\"col\">沸点 / °C</th></tr></thead><tbody><tr><th scope=\"row\">エタノール</th><td><span class=\"chem\">CH3CH2OH</span></td><td>78</td></tr><tr><th scope=\"row\">メトキシメタン</th><td><span class=\"chem\">CH3OCH3</span></td><td>−25</td></tr></tbody></table></div><p>エタノールの沸点のほうが高い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Name the strongest intermolecular force in <strong>each</strong> substance.
        "<strong>それぞれ</strong>の物質について、最も強い分子間力の名前を書きましょう。",
        // EN: Then say which force is stronger. Link this to the energy needed.
        "それから、どちらの力が強いかを書きます。それを、必要なエネルギーと結びつけましょう。",
      ],
      // EN: <p>Ethanol has hydrogen bonding between its molecules, because it has a hydrogen atom bonded to oxygen (<span class="chem">O–H</span>). Methoxymethane has no <span class="chem">O–H</span> bond, so it has only dipole–dipole forces (and London forces) between its molecules.</p><p>Hydrogen bonding is stronger than dipole–dipole forces, so more energy is needed to separate the ethanol molecules.</p>
      answer: "<p>エタノールには、酸素と結合した水素原子 (<span class=\"chem\">O–H</span>) があるので、分子間に水素結合があります。メトキシメタンには <span class=\"chem\">O–H</span> 結合がないので、分子間には双極子–双極子相互作用（とロンドン力）しかありません。</p><p>水素結合は双極子–双極子相互作用より強いので、エタノールの分子どうしを引き離すには、より多くのエネルギーが必要です。</p>",
      markscheme: [
        // EN: Ethanol has hydrogen bonding (between molecules) AND methoxymethane has dipole–dipole forces (and London forces) only / no hydrogen bonding.
        "エタノールには（分子間に）水素結合がある。かつ、メトキシメタンには双極子–双極子相互作用（とロンドン力）しかない / 水素結合がない。",
        // EN: Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules.
        "水素結合は（双極子–双極子相互作用より）強いので、分子どうしを引き離すのにより多くのエネルギーが必要である。",
      ],
    },

    // ── s2-2-q046 · order · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q046": {
      // EN: <p>Put these four alkanes in order of boiling point. Put the <strong>lowest</strong> boiling point first.</p>
      stem: "<p>次の 4 つのアルカンを、沸点の順に並べましょう。沸点が<strong>最も低い</strong>ものを最初にします。</p>",
      options: [
        // EN: 2,2-dimethylpropane, <span class="chem">C(CH3)4</span>
        "2,2-ジメチルプロパン <span class=\"nowrap\">(2,2-dimethylpropane)</span> <span class=\"chem\">C(CH3)4</span>",
        // EN: 2-methylbutane, <span class="chem">(CH3)2CHCH2CH3</span>
        "2-メチルブタン <span class=\"nowrap\">(2-methylbutane)</span> <span class=\"chem\">(CH3)2CHCH2CH3</span>",
        // EN: pentane, <span class="chem">CH3CH2CH2CH2CH3</span>
        "ペンタン (pentane) <span class=\"chem\">CH3CH2CH2CH2CH3</span>",
        // EN: hexane, <span class="chem">CH3CH2CH2CH2CH2CH3</span>
        "ヘキサン (hexane) <span class=\"chem\">CH3CH2CH2CH2CH2CH3</span>",
      ],
      hints: [
        // EN: All four molecules are non-polar. Which intermolecular force acts between them?
        "4 つの分子はどれも無極性です。分子の間にはたらく分子間力はどれですか。",
        // EN: Three of them are isomers, <span class="chem">C5H12</span>. The fourth has more electrons.
        "このうち 3 つは <span class=\"chem\">C5H12</span> の異性体です。残りの 1 つは電子がもっと多くなっています。",
        // EN: A more branched molecule is more compact. It has less surface area in contact with its neighbours.
        "枝分かれが多い分子ほど、コンパクトな形になります。となりの分子とふれ合う表面積が小さくなります。",
      ],
      // EN: <p>All four are non-polar, so only <strong>London (dispersion) forces</strong> act between the molecules.</p><p>The three <span class="chem">C5H12</span> isomers have the same number of electrons. More branching makes a molecule more compact, with less surface contact between molecules, so the London forces are weaker.</p><p>Hexane has more electrons and a longer chain, so it has the strongest London forces.</p><p>Boiling points: 2,2-dimethylpropane 10 °C; 2-methylbutane 28 °C; pentane 36 °C; hexane 69 °C.</p>
      solution: "<p>4 つとも無極性なので、分子の間にはたらくのは<strong>ロンドン（分散）力</strong>だけです。</p><p><span class=\"chem\">C5H12</span> の 3 つの異性体は、電子の数が同じです。枝分かれが多いほど分子はコンパクトになり、分子どうしがふれ合う面積が小さくなるので、ロンドン力は弱くなります。</p><p>ヘキサンは電子が多く、鎖も長いので、ロンドン力が最も強くなります。</p><p>沸点：2,2-ジメチルプロパン 10 °C、2-メチルブタン 28 °C、ペンタン 36 °C、ヘキサン 69 °C。</p>",
    },

    // ── s2-2-q047 · mcq · exam · SL · Structure 2.2.9 · 1 mark
    "s2-2-q047": {
      // EN: <p>Three liquids have similar molar masses.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Three compounds of similar molar mass</caption><thead><tr><th scope="col">Compound</th><th scope="col">Structural formula</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th></tr></thead><tbody><tr><th scope="row">butane</th><td><span class="chem">CH3CH2CH2CH3</span></td><td>58</td></tr><tr><th scope="row">propanone</th><td><span class="chem">CH3COCH3</span></td><td>58</td></tr><tr><th scope="row">propan-1-ol</th><td><span class="chem">CH3CH2CH2OH</span></td><td>60</td></tr></tbody></table></div><p>Which compound is the most volatile, and why?</p>
      stem: "<p>3 つの液体は、モル質量がほぼ同じです。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>モル質量がほぼ同じ 3 つの化合物</caption><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">構造式</th><th scope=\"col\">モル質量 / <span class=\"unit\">g mol-1</span></th></tr></thead><tbody><tr><th scope=\"row\">ブタン (butane)</th><td><span class=\"chem\">CH3CH2CH2CH3</span></td><td>58</td></tr><tr><th scope=\"row\">プロパノン (propanone)</th><td><span class=\"chem\">CH3COCH3</span></td><td>58</td></tr><tr><th scope=\"row\">プロパン-1-オール (propan-1-ol)</th><td><span class=\"chem\">CH3CH2CH2OH</span></td><td>60</td></tr></tbody></table></div><p>揮発性 (volatility) が最も高い化合物はどれですか。その理由は何ですか。</p>",
      options: [
        // EN: Butane, because it has only London (dispersion) forces between its molecules.
        "ブタン。分子間にロンドン（分散）力しかないから。",
        // EN: Butane, because its covalent bonds are the weakest.
        "ブタン。共有結合が最も弱いから。",
        // EN: Propan-1-ol, because it has hydrogen bonding between its molecules.
        "プロパン-1-オール。分子間に水素結合があるから。",
        // EN: Propanone, because it has dipole–dipole forces between its molecules.
        "プロパノン。分子間に双極子–双極子相互作用があるから。",
      ],
      hints: [
        // EN: A volatile substance turns into a gas easily. It has a low boiling point.
        "揮発性の物質は、気体になりやすい物質です。沸点が低くなります。",
        // EN: Find the strongest intermolecular force in each compound.
        "それぞれの化合物で、最も強い分子間力を見つけましょう。",
        // EN: For similar molar mass: London forces < dipole–dipole forces < hydrogen bonding.
        "モル質量がほぼ同じなら、ロンドン力 < 双極子–双極子相互作用 < 水素結合の順に強くなります。",
      ],
      // EN: <p><strong>Volatile</strong> means the substance vaporizes easily. The most volatile compound has the weakest intermolecular forces.</p><p>Butane is non-polar: London forces only. Propanone is polar (<span class="chem">C=O</span>): dipole–dipole forces. Propan-1-ol has an <span class="chem">O–H</span> group: hydrogen bonding.</p><p>So <strong>butane</strong> is the most volatile. The boiling points agree: butane −1 °C, propanone 56 °C, propan-1-ol 97 °C.</p>
      solution: "<p><strong>揮発性</strong> (volatile) とは、物質が気化しやすいことです。揮発性が最も高い化合物は、分子間力が最も弱い化合物です。</p><p>ブタンは無極性なので、ロンドン力だけです。プロパノンは極性があり (<span class=\"chem\">C=O</span>)、双極子–双極子相互作用がはたらきます。プロパン-1-オールには <span class=\"chem\">O–H</span> 基があり、水素結合ができます。</p><p>だから、揮発性が最も高いのは<strong>ブタン</strong>です。沸点もこれに合っています。ブタン −1 °C、プロパノン 56 °C、プロパン-1-オール 97 °C です。</p>",
      misconception: {
        // EN (option B): The compound is right but the reason is wrong. Evaporation and boiling do not break covalent bonds. They overcome intermolecular forces.
        "1": "化合物は合っていますが、理由が違います。蒸発や沸騰では、共有結合は切れません。打ち勝つのは分子間力です。",
        // EN (option C): Hydrogen bonding is the strongest of these forces. Strong intermolecular forces make a substance <strong>less</strong> volatile.
        "2": "水素結合は、この中で最も強い力です。分子間力が強いと、物質の揮発性は<strong>低く</strong>なります。",
        // EN (option D): Dipole–dipole forces are stronger than London forces alone (for similar molar mass). So propanone is less volatile than the compound with London forces only.
        "3": "（モル質量がほぼ同じなら）双極子–双極子相互作用は、ロンドン力だけの場合より強くなります。だから、プロパノンは、ロンドン力しかない化合物より揮発性が低くなります。",
      },
    },

    // ── s2-2-q048 · short · exam · SL · Structure 2.2.9 · 2 marks
    "s2-2-q048": {
      // EN: <p>Ethanol, <span class="chem">CH3CH2OH</span>, mixes with water in all proportions. Hexan-1-ol, <span class="chem">CH3(CH2)5OH</span>, is only slightly soluble in water.</p><p>Explain why ethanol is soluble in water, and why hexan-1-ol is much less soluble.</p>
      stem: "<p>エタノール <span class=\"chem\">CH3CH2OH</span> は、水とどんな割合でも混ざり合います。ヘキサン-1-オール (hexan-1-ol) <span class=\"chem\">CH3(CH2)5OH</span> は、水にわずかしか溶けません。</p><p>エタノールが水に溶ける理由と、ヘキサン-1-オールがずっと溶けにくい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Which part of each molecule can form hydrogen bonds with water?
        "それぞれの分子のどの部分が、水と水素結合をつくれますか。",
        // EN: What is different about the rest of the hexan-1-ol molecule?
        "ヘキサン-1-オール分子の残りの部分は、どこが違いますか。",
      ],
      // EN: <p>Ethanol has a hydroxyl (<span class="chem">O–H</span>) group, so it can form hydrogen bonds with water molecules. This is why it dissolves.</p><p>Hexan-1-ol also has a hydroxyl group, but it has a much longer non-polar hydrocarbon chain. The chain cannot form hydrogen bonds with water (it attracts water only by weak London forces), so the molecule as a whole is much less soluble.</p>
      answer: "<p>エタノールにはヒドロキシ基 (hydroxyl group、<span class=\"chem\">O–H</span>) があるので、水分子と水素結合をつくれます。だから水に溶けます。</p><p>ヘキサン-1-オールにもヒドロキシ基がありますが、無極性の炭化水素鎖がずっと長くなっています。この鎖は水と水素結合をつくれません（弱いロンドン力で水を引きつけるだけです）。そのため、分子全体としては、ずっと溶けにくくなります。</p>",
      markscheme: [
        // EN: Ethanol / the hydroxyl (OH) group forms hydrogen bonds with water (molecules).
        "エタノール / ヒドロキシ基 (OH) が、水（分子）と水素結合をつくる。",
        // EN: Hexan-1-ol has a longer non-polar hydrocarbon chain, which cannot form hydrogen bonds with water. Accept: a larger part of the molecule is non-polar.
        "ヘキサン-1-オールは無極性の炭化水素鎖が長く、この鎖は水と水素結合をつくれない。「分子の中で無極性の部分が大きい」も可。",
      ],
    },

    // ── s2-2-q049 · short · challenge · SL · Structure 2.2.9 · 3 marks
    "s2-2-q049": {
      // EN: <p>Bromine, <span class="chem">Br2</span>, and iodine monochloride, <span class="chem">ICl</span>, have almost the same molar mass, and each molecule has 70 electrons.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two substances with 70 electrons in each molecule</caption><thead><tr><th scope="col">Substance</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row"><span class="chem">Br2</span></th><td>160</td><td>59</td></tr><tr><th scope="row"><span class="chem">ICl</span></th><td>162</td><td>97</td></tr></tbody></table></div><p>Electronegativity values from the data booklet: Cl 3.2, Br 3.0, I 2.7.</p><p>Explain why iodine monochloride has the higher boiling point.</p>
      stem: "<p>臭素 <span class=\"chem\">Br2</span> と一塩化ヨウ素 (iodine monochloride) <span class=\"chem\">ICl</span> は、モル質量がほぼ同じで、どちらの分子にも電子が 70 個あります。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>分子 1 個に電子が 70 個ある 2 つの物質</caption><thead><tr><th scope=\"col\">物質</th><th scope=\"col\">モル質量 / <span class=\"unit\">g mol-1</span></th><th scope=\"col\">沸点 / °C</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">Br2</span></th><td>160</td><td>59</td></tr><tr><th scope=\"row\"><span class=\"chem\">ICl</span></th><td>162</td><td>97</td></tr></tbody></table></div><p>データブックレットの電気陰性度の値：Cl 3.2、Br 3.0、I 2.7。</p><p>一塩化ヨウ素の沸点のほうが高い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: The question gives the number of electrons. Which intermolecular force depends on this?
        "問題文に電子の数が書いてあります。電子の数で決まる分子間力はどれですか。",
        // EN: Use the electronegativity values. Is each molecule polar?
        "電気陰性度の値を使いましょう。それぞれの分子に極性はありますか。",
        // EN: Finish by comparing the total strength of the forces and the energy needed.
        "最後に、力を合わせた強さと、必要なエネルギーをくらべて締めくくります。",
      ],
      // EN: <p>Both molecules have the same number of electrons, so their London (dispersion) forces are similar in strength.</p><p><span class="chem">Br2</span> is non-polar, because the two atoms are the same. <span class="chem">ICl</span> is polar, because chlorine is more electronegative than iodine (3.2 and 2.7). So <span class="chem">ICl</span> also has dipole–dipole forces between its molecules.</p><p>The total intermolecular forces in <span class="chem">ICl</span> are stronger, so more energy is needed to separate its molecules.</p>
      answer: "<p>どちらの分子も電子の数が同じなので、ロンドン（分散）力の強さはほぼ同じです。</p><p><span class=\"chem\">Br2</span> は、2 つの原子が同じなので無極性です。<span class=\"chem\">ICl</span> は、塩素がヨウ素より電気陰性度が大きい（3.2 と 2.7）ので、極性があります。だから <span class=\"chem\">ICl</span> には、分子間に双極子–双極子相互作用もはたらきます。</p><p><span class=\"chem\">ICl</span> のほうが分子間力の合計が強いので、分子どうしを引き離すには、より多くのエネルギーが必要です。</p>",
      markscheme: [
        // EN: London (dispersion) forces are similar in both, because the molecules have the same number of electrons / similar molar mass.
        "分子の電子の数が同じ / モル質量がほぼ同じなので、ロンドン（分散）力はどちらもほぼ同じである。",
        // EN: ICl is polar (Cl is more electronegative than I / electronegativity difference of 0.5) but Br<sub>2</sub> is non-polar, so ICl (also) has dipole–dipole forces.
        "ICl は極性がある（Cl は I より電気陰性度が大きい / 電気陰性度の差が 0.5）が、Br<sub>2</sub> は無極性である。そのため ICl には双極子–双極子相互作用（も）ある。",
        // EN: The intermolecular forces in ICl are stronger (overall), so more energy is needed to separate the molecules. Do not accept any reference to breaking covalent bonds.
        "ICl のほうが分子間力が（全体として）強いので、分子どうしを引き離すのにより多くのエネルギーが必要である。共有結合を切ることにふれた答えは、どれも不可。",
      ],
    },

    // ── s2-2-q050 · short · challenge · SL · Structure 2.2.9 · 4 marks
    "s2-2-q050": {
      // EN: <p>Hydrogen sulfide, <span class="chem">H2S</span>, has a higher molar mass than water, but a much lower boiling point.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Two hydrides of group 16</caption><thead><tr><th scope="col">Substance</th><th scope="col">Molar mass / <span class="unit">g mol-1</span></th><th scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row"><span class="chem">H2S</span></th><td>34</td><td>−60</td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td>18</td><td>100</td></tr></tbody></table></div><p>Electronegativity values from the data booklet: H 2.2, O 3.4, S 2.6.</p><p>(a) Deduce the molecular geometry of <span class="chem">H2S</span>. Give a reason.</p><p>(b) Deduce, with a reason, if the <span class="chem">H2S</span> molecule is polar.</p><p>(c) Explain why <span class="chem">H2S</span> has a lower boiling point than water.</p>
      stem: "<p>硫化水素 (hydrogen sulfide) <span class=\"chem\">H2S</span> は、水よりモル質量が大きいのに、沸点はずっと低くなっています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>16 族の 2 つの水素化物</caption><thead><tr><th scope=\"col\">物質</th><th scope=\"col\">モル質量 / <span class=\"unit\">g mol-1</span></th><th scope=\"col\">沸点 / °C</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">H2S</span></th><td>34</td><td>−60</td></tr><tr><th scope=\"row\"><span class=\"chem\">H2O</span></th><td>18</td><td>100</td></tr></tbody></table></div><p>データブックレットの電気陰性度の値：H 2.2、O 3.4、S 2.6。</p><p>(a) <span class=\"chem\">H2S</span> の分子の形 (molecular geometry) を導きなさい (deduce)。理由も書きましょう。</p><p>(b) <span class=\"chem\">H2S</span> 分子に極性があるかどうかを、理由をつけて導きなさい。</p><p>(c) <span class=\"chem\">H2S</span> の沸点が水より低い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: (a) Sulfur is in group 16, like oxygen. Count its bonding pairs and lone pairs.
        "(a) 硫黄は、酸素と同じ 16 族です。共有電子対と非共有電子対を数えましょう。",
        // EN: (b) Check two things: are the bonds polar, and do the bond dipoles cancel?
        "(b) 2 つのことを確かめます。結合に極性はありますか。結合の双極子は打ち消し合いますか。",
        // EN: (c) Name the strongest intermolecular force in each substance. Then compare their strengths.
        "(c) それぞれの物質で、最も強い分子間力の名前を書きましょう。それから、その強さをくらべます。",
      ],
      // EN: <p>(a) Bent (V-shaped). Sulfur has four electron domains: two bonding pairs and two lone pairs.</p><p>(b) Polar. The <span class="chem">S–H</span> bonds are polar (difference 2.6 − 2.2 = 0.4), and because the molecule is bent the bond dipoles do not cancel.</p><p>(c) <span class="chem">H2S</span> has dipole–dipole forces and London forces between its molecules. Water has hydrogen bonding, because H is bonded to the very electronegative O atom. Hydrogen bonding is stronger, so more energy is needed to separate water molecules. This outweighs the stronger London forces in <span class="chem">H2S</span>.</p>
      answer: "<p>(a) 折れ線形（V 字形）。硫黄には電子領域が 4 つあります。共有電子対が 2 組と非共有電子対が 2 組です。</p><p>(b) 極性があります。<span class=\"chem\">S–H</span> 結合には極性があり（差は 2.6 − 2.2 = 0.4）、分子が折れ線形なので、結合の双極子が打ち消し合いません。</p><p>(c) <span class=\"chem\">H2S</span> の分子間には、双極子–双極子相互作用とロンドン力がはたらきます。水には、H が電気陰性度のとても大きい O 原子と結合しているので、水素結合があります。水素結合のほうが強いので、水分子どうしを引き離すには、より多くのエネルギーが必要です。この効果は、<span class=\"chem\">H2S</span> のほうがロンドン力が強いことを上回ります。</p>",
      markscheme: [
        // EN: (a) Bent / V-shaped / angular AND two bonding pairs and two lone (non-bonding) pairs on sulfur / four electron domains with two lone pairs.
        "(a) 折れ線形 / V 字形 (bent / V-shaped / angular)。かつ、硫黄に共有電子対が 2 組と非共有電子対が 2 組ある / 電子領域が 4 つあり、そのうち 2 つが非共有電子対である。",
        // EN: (b) Polar, because the bond dipoles do not cancel / the molecule is not symmetrical (bent). Allow follow-through from the shape in (a).
        "(b) 極性がある。結合の双極子が打ち消し合わない / 分子が対称ではない（折れ線形）から。(a) の形からの誤りの持ち越し (follow-through) を認める。",
        // EN: (c) H<sub>2</sub>S has dipole–dipole forces (and London forces) AND water has hydrogen bonding.
        "(c) H<sub>2</sub>S には双極子–双極子相互作用（とロンドン力）がある。かつ、水には水素結合がある。",
        // EN: (c) Hydrogen bonding is stronger (than dipole–dipole forces), so more energy is needed to separate the molecules of water.
        "(c) 水素結合は（双極子–双極子相互作用より）強いので、水の分子どうしを引き離すのにより多くのエネルギーが必要である。",
      ],
    },

    // ── s2-2-q051 · mcq · challenge · SL · Structure 2.2.9 · 1 mark
    "s2-2-q051": {
      // EN: <p>Ethanal, <span class="chem">CH3CHO</span>, and propane, <span class="chem">CH3CH2CH3</span>, both have a molar mass of 44 <span class="unit">g mol-1</span>. Ethanal boils at 20 °C and propane boils at −42 °C.</p><p>A student explains: "Ethanal has the higher boiling point because it contains hydrogen and oxygen, so it forms hydrogen bonds between its molecules. Propane has only London (dispersion) forces."</p><p>Which statement correctly identifies the error in this explanation?</p>
      stem: "<p>エタナール (ethanal) <span class=\"chem\">CH3CHO</span> とプロパン <span class=\"chem\">CH3CH2CH3</span> は、モル質量がどちらも 44 <span class=\"unit\">g mol-1</span> です。エタナールは 20 °C、プロパンは −42 °C で沸騰します。</p><p>ある生徒が次のように説明しました。「エタナールの沸点のほうが高いのは、水素と酸素を含んでいて、分子間に水素結合ができるからです。プロパンにはロンドン（分散）力しかありません。」</p><p>この説明の誤りを正しく指摘している文はどれですか。</p>",
      options: [
        // EN: There is no error.
        "誤りはない。",
        // EN: Ethanal is non-polar, so it also has only London (dispersion) forces.
        "エタナールは無極性なので、エタナールにもロンドン（分散）力しかない。",
        // EN: In ethanal every hydrogen atom is bonded to carbon, so there is no hydrogen bonding between ethanal molecules. The extra force is dipole–dipole.
        "エタナールでは、水素原子はすべて炭素と結合しているので、エタナール分子の間に水素結合はない。加わっている力は、双極子–双極子相互作用である。",
        // EN: Boiling breaks the <span class="chem">C=O</span> bond in ethanal, and this bond is stronger than the bonds in propane.
        "沸騰するとエタナールの <span class=\"chem\">C=O</span> 結合が切れる。この結合は、プロパンの結合より強い。",
      ],
      hints: [
        // EN: Draw ethanal. Is any hydrogen atom bonded to oxygen?
        "エタナールの構造を書いてみましょう。酸素と結合している水素原子はありますか。",
        // EN: Ethanal has a polar <span class="chem">C=O</span> bond. Which intermolecular force do polar molecules have?
        "エタナールには、極性のある <span class=\"chem\">C=O</span> 結合があります。極性分子には、どの分子間力がはたらきますか。",
      ],
      // EN: <p>Hydrogen bonding needs H <strong>covalently bonded to</strong> N, O or F. In ethanal the oxygen is double-bonded to carbon and all four hydrogens are bonded to carbon. So ethanal molecules do not hydrogen-bond to each other.</p><p>Ethanal is polar, so it has <strong>dipole–dipole forces</strong> as well as London forces. Propane is non-polar and has London forces only. Dipole–dipole forces are stronger than London forces alone (for similar molar mass), so ethanal has the higher boiling point.</p>
      solution: "<p>水素結合には、N、O、F のどれかと<strong>共有結合した</strong> H が必要です。エタナールでは、酸素は炭素と二重結合していて、4 個の水素はすべて炭素と結合しています。だから、エタナールの分子どうしは水素結合をつくりません。</p><p>エタナールは極性分子なので、ロンドン力に加えて<strong>双極子–双極子相互作用</strong> (dipole–dipole forces) がはたらきます。プロパンは無極性で、ロンドン力だけです。（モル質量がほぼ同じなら）双極子–双極子相互作用は、ロンドン力だけの場合より強いので、エタナールの沸点のほうが高くなります。</p>",
      misconception: {
        // EN (option A): Check the structure of ethanal: <span class="chem">CH3–CH=O</span>. Containing H and O is not enough. Which atom is each H bonded to?
        "0": "エタナールの構造 <span class=\"chem\">CH3–CH=O</span> を確かめましょう。H と O を含んでいるだけでは足りません。それぞれの H は、どの原子と結合していますか。",
        // EN (option B): Ethanal is polar. The <span class="chem">C=O</span> bond has an electronegativity difference of 3.4 − 2.6 = 0.8, and its dipole is not cancelled.
        "1": "エタナールは極性分子です。<span class=\"chem\">C=O</span> 結合の電気陰性度の差は 3.4 − 2.6 = 0.8 で、その双極子は打ち消されません。",
        // EN (option D): Boiling does not break covalent bonds. It only overcomes the forces between molecules.
        "3": "沸騰では、共有結合は切れません。打ち勝つのは、分子と分子の間の力だけです。",
      },
    },

    // ── s2-2-q052 · mcq · foundation · SL · Structure 2.2.10 · 1 mark
    "s2-2-q052": {
      // EN: <p>How is the retardation factor, <i>R</i><sub>F</sub>, of a spot calculated?</p>
      stem: "<p>スポットの <i>R</i><sub>F</sub> 値 (retardation factor) は、どのように計算しますか。</p>",
      options: [
        // EN: distance moved by the solvent front ÷ distance moved by the spot
        "溶媒先端が進んだ距離 ÷ スポットが進んだ距離",
        // EN: distance moved by the spot ÷ distance moved by the solvent front, both measured from the baseline
        "スポットが進んだ距離 ÷ 溶媒先端が進んだ距離（どちらも原線からはかる）",
        // EN: distance moved by the spot ÷ total length of the paper
        "スポットが進んだ距離 ÷ 紙の全体の長さ",
        // EN: distance moved by the solvent front − distance moved by the spot
        "溶媒先端が進んだ距離 − スポットが進んだ距離",
      ],
      hints: [
        // EN: The value is always between 0 and 1.
        "値は、必ず 0 と 1 の間になります。",
        // EN: Both distances start at the baseline, where the sample was placed.
        "どちらの距離も、試料をつけた原線 (baseline) からはかります。",
      ],
      // EN: <p><i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.</p><p>Measure both distances <strong>from the baseline</strong>. The value has no unit and lies between 0 and 1.</p>
      solution: "<p><i>R</i><sub>F</sub> = スポットが進んだ距離 ÷ 溶媒先端 (solvent front) が進んだ距離。</p><p>どちらの距離も<strong>原線から</strong>はかります。値に単位はなく、0 と 1 の間になります。</p>",
      misconception: {
        // EN (option A): This is upside down. It would give a value greater than 1. A spot cannot move further than the solvent, so <i>R</i><sub>F</sub> is never more than 1.
        "0": "これは上下が逆です。これでは 1 より大きい値になってしまいます。スポットは溶媒より遠くへは進めないので、<i>R</i><sub>F</sub> が 1 を超えることはありません。",
        // EN (option C): Use the distance the solvent moved, not the length of the paper. The solvent front does not usually reach the top of the paper.
        "2": "使うのは溶媒が進んだ距離で、紙の長さではありません。溶媒先端は、ふつう紙のいちばん上までは届きません。",
        // EN (option D): <i>R</i><sub>F</sub> is a ratio, not a difference. It has no unit.
        "3": "<i>R</i><sub>F</sub> は比であって、差ではありません。単位はありません。",
      },
    },

    // ── s2-2-q053 · numeric · foundation · SL · Structure 2.2.10 · 1 mark
    "s2-2-q053": {
      // EN: <p>In a paper chromatography experiment, a spot of dye moves 3.6 cm from the baseline. The solvent front moves 8.0 cm from the baseline.</p><p>Calculate the <i>R</i><sub>F</sub> value of the dye. Give your answer to 2 significant figures.</p>
      stem: "<p>ペーパークロマトグラフィーの実験で、色素のスポットが原線から 3.6 cm 進みました。溶媒先端は原線から 8.0 cm 進みました。</p><p>この色素の <i>R</i><sub>F</sub> 値を計算しなさい (calculate)。有効数字 2 桁で答えましょう。</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.
        "<i>R</i><sub>F</sub> = スポットが進んだ距離 ÷ 溶媒先端が進んだ距離。",
        // EN: The answer must be less than 1 and has no unit.
        "答えは 1 より小さくなるはずで、単位はありません。",
      ],
      // EN: <div class="worked__math"><i>R</i><sub>F</sub> = 3.6 cm ÷ 8.0 cm = 0.45</div><p>The units cancel, so <i>R</i><sub>F</sub> has no unit.</p>
      solution: "<div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.6 cm ÷ 8.0 cm = 0.45</div><p>単位どうしが打ち消し合うので、<i>R</i><sub>F</sub> に単位はありません。</p>",
    },

    // ── s2-2-q054 · numeric · exam · SL · Structure 2.2.10 · 1 mark
    "s2-2-q054": {
      // EN: <p>The diagram shows a paper chromatogram of one dye. A ruler is placed next to the paper. All the labelled distances are measured in cm from the <strong>bottom edge</strong> of the paper.</p><p><svg viewBox="0 0 300 242" width="300" height="242" role="img" style="max-width:100%;height:auto" aria-label="Paper chromatogram with a ruler. Distances from the bottom edge of the paper: baseline 1.5 cm, centre of the spot 6.9 cm, solvent front 10.5 cm, top of the paper 12.0 cm."><line x1="40" x2="40" y1="230" y2="26" stroke="currentColor" stroke-width="1.2"/><line x1="32" x2="40" y1="230" y2="230" stroke="currentColor" stroke-width="1"/><text x="28" y="234" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="35" x2="40" y1="213" y2="213" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="196" y2="196" stroke="currentColor" stroke-width="1"/><text x="28" y="200" text-anchor="end" font-size="11" fill="currentColor">2</text><line x1="35" x2="40" y1="179" y2="179" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="162" y2="162" stroke="currentColor" stroke-width="1"/><text x="28" y="166" text-anchor="end" font-size="11" fill="currentColor">4</text><line x1="35" x2="40" y1="145" y2="145" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="128" y2="128" stroke="currentColor" stroke-width="1"/><text x="28" y="132" text-anchor="end" font-size="11" fill="currentColor">6</text><line x1="35" x2="40" y1="111" y2="111" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="94" y2="94" stroke="currentColor" stroke-width="1"/><text x="28" y="98" text-anchor="end" font-size="11" fill="currentColor">8</text><line x1="35" x2="40" y1="77" y2="77" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="60" y2="60" stroke="currentColor" stroke-width="1"/><text x="28" y="64" text-anchor="end" font-size="11" fill="currentColor">10</text><line x1="35" x2="40" y1="43" y2="43" stroke="currentColor" stroke-width="1"/><line x1="32" x2="40" y1="26" y2="26" stroke="currentColor" stroke-width="1"/><text x="28" y="30" text-anchor="end" font-size="11" fill="currentColor">12</text><text x="28" y="11" text-anchor="end" font-size="11" fill="currentColor">cm</text><rect x="56" y="26" width="84" height="204" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="56" x2="140" y1="204.5" y2="204.5" stroke="currentColor" stroke-width="1.2"/><line x1="56" x2="140" y1="51.5" y2="51.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M92 204.5l6 -6m-6 6l6 6m-6 -6l-6 -6m6 6l-6 6" stroke="currentColor" stroke-width="1.2" fill="none"/><ellipse cx="98" cy="112.69999999999999" rx="8" ry="5.5" fill="currentColor" fill-opacity="0.55" stroke="currentColor"/><line x1="142" x2="152" y1="26" y2="26" stroke="currentColor" stroke-width="1"/><text x="156" y="30" font-size="12" fill="currentColor">top of paper, 12.0</text><line x1="142" x2="152" y1="51.5" y2="51.5" stroke="currentColor" stroke-width="1"/><text x="156" y="55.5" font-size="12" fill="currentColor">solvent front, 10.5</text><line x1="142" x2="152" y1="112.69999999999999" y2="112.69999999999999" stroke="currentColor" stroke-width="1"/><text x="156" y="116.69999999999999" font-size="12" fill="currentColor">centre of spot, 6.9</text><line x1="142" x2="152" y1="204.5" y2="204.5" stroke="currentColor" stroke-width="1"/><text x="156" y="208.5" font-size="12" fill="currentColor">baseline, 1.5</text><line x1="142" x2="152" y1="230" y2="230" stroke="currentColor" stroke-width="1"/><text x="156" y="234" font-size="12" fill="currentColor">bottom edge, 0.0</text></svg></p><p>Calculate the <i>R</i><sub>F</sub> value of the dye. Give your answer to 2 significant figures.</p>
      stem: "<p>図は、ある 1 種類の色素のペーパークロマトグラムです。紙の横に定規を置いてあります。ラベルの距離はすべて、紙の<strong>下端</strong>から cm 単位ではかったものです。</p><p><svg viewBox=\"0 0 300 242\" width=\"300\" height=\"242\" role=\"img\" style=\"max-width:100%;height:auto\" aria-label=\"定規を添えたペーパークロマトグラム。紙の下端からの距離：原線 1.5 cm、スポットの中心 6.9 cm、溶媒先端 10.5 cm、紙の上端 12.0 cm。\"><line x1=\"40\" x2=\"40\" y1=\"230\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"32\" x2=\"40\" y1=\"230\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"234\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">0</text><line x1=\"35\" x2=\"40\" y1=\"213\" y2=\"213\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"196\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"200\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">2</text><line x1=\"35\" x2=\"40\" y1=\"179\" y2=\"179\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"162\" y2=\"162\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"166\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">4</text><line x1=\"35\" x2=\"40\" y1=\"145\" y2=\"145\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"128\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"132\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">6</text><line x1=\"35\" x2=\"40\" y1=\"111\" y2=\"111\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"94\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"98\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">8</text><line x1=\"35\" x2=\"40\" y1=\"77\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"60\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"64\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">10</text><line x1=\"35\" x2=\"40\" y1=\"43\" y2=\"43\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"32\" x2=\"40\" y1=\"26\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"28\" y=\"30\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">12</text><text x=\"28\" y=\"11\" text-anchor=\"end\" font-size=\"11\" fill=\"currentColor\">cm</text><rect x=\"56\" y=\"26\" width=\"84\" height=\"204\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"56\" x2=\"140\" y1=\"204.5\" y2=\"204.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"56\" x2=\"140\" y1=\"51.5\" y2=\"51.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/><path d=\"M92 204.5l6 -6m-6 6l6 6m-6 -6l-6 -6m6 6l-6 6\" stroke=\"currentColor\" stroke-width=\"1.2\" fill=\"none\"/><ellipse cx=\"98\" cy=\"112.69999999999999\" rx=\"8\" ry=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.55\" stroke=\"currentColor\"/><line x1=\"142\" x2=\"152\" y1=\"26\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"30\" font-size=\"12\" fill=\"currentColor\">紙の上端 12.0</text><line x1=\"142\" x2=\"152\" y1=\"51.5\" y2=\"51.5\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"55.5\" font-size=\"12\" fill=\"currentColor\">溶媒先端 10.5</text><line x1=\"142\" x2=\"152\" y1=\"112.69999999999999\" y2=\"112.69999999999999\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"116.69999999999999\" font-size=\"12\" fill=\"currentColor\">スポットの中心 6.9</text><line x1=\"142\" x2=\"152\" y1=\"204.5\" y2=\"204.5\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"208.5\" font-size=\"12\" fill=\"currentColor\">原線 1.5</text><line x1=\"142\" x2=\"152\" y1=\"230\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"156\" y=\"234\" font-size=\"12\" fill=\"currentColor\">下端 0.0</text></svg></p><p>この色素の <i>R</i><sub>F</sub> 値を計算しなさい (calculate)。有効数字 2 桁で答えましょう。</p>",
      hints: [
        // EN: Both distances in the <i>R</i><sub>F</sub> formula start at the baseline, not at the bottom edge.
        "<i>R</i><sub>F</sub> の式で使う距離は、どちらも原線からはかります。下端からではありません。",
        // EN: Distance moved by the spot = 6.9 − 1.5. Find the distance moved by the solvent front in the same way.
        "スポットが進んだ距離 = 6.9 − 1.5。溶媒先端が進んだ距離も、同じようにして求めましょう。",
        // EN: You do not need the position of the top of the paper.
        "紙の上端の位置は使いません。",
      ],
      // EN: <div class="worked__math">distance moved by spot = 6.9 − 1.5 = 5.4 cm</div><div class="worked__math">distance moved by solvent front = 10.5 − 1.5 = 9.0 cm</div><div class="worked__math"><i>R</i><sub>F</sub> = 5.4 cm ÷ 9.0 cm = 0.60</div><p>Common slips: 6.9 ÷ 10.5 = 0.66 (measured from the bottom edge) and 6.9 ÷ 12.0 = 0.58 (used the top of the paper).</p>
      solution: "<div class=\"worked__math\">スポットが進んだ距離 = 6.9 − 1.5 = 5.4 cm</div><div class=\"worked__math\">溶媒先端が進んだ距離 = 10.5 − 1.5 = 9.0 cm</div><div class=\"worked__math\"><i>R</i><sub>F</sub> = 5.4 cm ÷ 9.0 cm = 0.60</div><p>よくある間違い：6.9 ÷ 10.5 = 0.66（下端からはかった）と、6.9 ÷ 12.0 = 0.58（紙の上端を使った）。</p>",
    },

    // ── s2-2-q055 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "s2-2-q055": {
      // EN: <p>Two compounds, P and Q, are separated by thin layer chromatography (TLC). The stationary phase is silica, which is polar. The mobile phase is hexane, which is non-polar.</p><p>P and Q have the same structure, except that P has a hydroxyl (<span class="chem">–OH</span>) group where Q has a hydrogen atom.</p><p>The two spots have <i>R</i><sub>F</sub> values of 0.21 and 0.74. Which row is correct?</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Options</caption><thead><tr><th scope="col"></th><th scope="col"><i>R</i><sub>F</sub> of P</th><th scope="col">Reason</th></tr></thead><tbody><tr><th scope="row">A</th><td>0.21</td><td>P is more strongly attracted to the polar stationary phase</td></tr><tr><th scope="row">B</th><td>0.21</td><td>P is more strongly attracted to the non-polar mobile phase</td></tr><tr><th scope="row">C</th><td>0.74</td><td>P is more strongly attracted to the polar stationary phase</td></tr><tr><th scope="row">D</th><td>0.74</td><td>P is more strongly attracted to the non-polar mobile phase</td></tr></tbody></table></div>
      stem: "<p>2 つの化合物 P と Q を、薄層クロマトグラフィー (TLC) で分離します。固定相 (stationary phase) はシリカで、極性があります。移動相 (mobile phase) はヘキサンで、無極性です。</p><p>P と Q の構造は同じですが、Q で水素原子があるところに、P ではヒドロキシ基 (<span class=\"chem\">–OH</span>) があります。</p><p>2 つのスポットの <i>R</i><sub>F</sub> 値は 0.21 と 0.74 です。正しい行はどれですか。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>選択肢</caption><thead><tr><th scope=\"col\"></th><th scope=\"col\">P の <i>R</i><sub>F</sub></th><th scope=\"col\">理由</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>0.21</td><td>P のほうが、極性のある固定相に強く引きつけられる</td></tr><tr><th scope=\"row\">B</th><td>0.21</td><td>P のほうが、無極性の移動相に強く引きつけられる</td></tr><tr><th scope=\"row\">C</th><td>0.74</td><td>P のほうが、極性のある固定相に強く引きつけられる</td></tr><tr><th scope=\"row\">D</th><td>0.74</td><td>P のほうが、無極性の移動相に強く引きつけられる</td></tr></tbody></table></div>",
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
        // EN: Which compound is more polar, P or Q?
        "P と Q では、どちらの極性が大きいですか。",
        // EN: A component that is strongly attracted to the stationary phase spends more time not moving.
        "固定相に強く引きつけられる成分は、動かずにいる時間が長くなります。",
        // EN: A small <i>R</i><sub>F</sub> means the spot moved a short distance.
        "<i>R</i><sub>F</sub> が小さいのは、スポットが進んだ距離が短いということです。",
      ],
      // EN: <p>The <span class="chem">–OH</span> group makes <strong>P more polar</strong> than Q. P can form hydrogen bonds with the polar silica.</p><p>So P is more strongly attracted to the <strong>stationary phase</strong>. It is held back and moves a shorter distance: <i>R</i><sub>F</sub> = <strong>0.21</strong>.</p><p>Q is less polar. It is more attracted to the non-polar mobile phase and is carried further: <i>R</i><sub>F</sub> = 0.74.</p>
      solution: "<p><span class=\"chem\">–OH</span> 基があるので、<strong>P は Q より極性が大きく</strong>なります。P は、極性のあるシリカと水素結合をつくれます。</p><p>だから P は、<strong>固定相</strong>により強く引きつけられます。引きとめられて、進む距離が短くなります。<i>R</i><sub>F</sub> = <strong>0.21</strong> です。</p><p>Q は極性が小さい化合物です。無極性の移動相により強く引きつけられ、遠くまで運ばれます。<i>R</i><sub>F</sub> = 0.74 です。</p>",
      misconception: {
        // EN (option B): The <i>R</i><sub>F</sub> value is right, but the reason is wrong. A compound that is strongly attracted to the mobile phase is carried further and has a high <i>R</i><sub>F</sub>. Also, P is the more polar compound, so it is less attracted to hexane than Q is.
        "1": "<i>R</i><sub>F</sub> の値は合っていますが、理由が違います。移動相に強く引きつけられる化合物は遠くまで運ばれ、<i>R</i><sub>F</sub> が大きくなります。それに、P のほうが極性が大きいので、ヘキサンに引きつけられる強さは Q より弱くなります。",
        // EN (option C): The reason is right, but it leads to the other value. A compound that is strongly attracted to the stationary phase is held back, so it moves a short distance.
        "2": "理由は合っていますが、その理由からはもう一方の値になります。固定相に強く引きつけられる化合物は引きとめられるので、進む距離が短くなります。",
        // EN (option D): The polarity logic is reversed. The hydroxyl group makes P more polar (it can hydrogen-bond to silica), so P is attracted more to the stationary phase, not to hexane.
        "3": "極性の考え方が逆になっています。ヒドロキシ基があると P の極性は大きくなります（シリカと水素結合をつくれます）。だから P が強く引きつけられるのは、ヘキサンではなく固定相です。",
      },
    },

    // ── s2-2-q056 · short · exam · SL · Structure 2.2.10 · 2 marks
    "s2-2-q056": {
      // EN: <p>A mixture of two dyes is separated by paper chromatography. One dye moves further up the paper than the other.</p><p>Explain why the two dyes separate.</p>
      stem: "<p>2 種類の色素の混合物を、ペーパークロマトグラフィーで分離します。一方の色素は、もう一方より紙の上のほうまで進みます。</p><p>2 種類の色素が分かれる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Chromatography has two phases. Name them.
        "クロマトグラフィーには 2 つの相があります。その名前を書きましょう。",
        // EN: Each dye is attracted to both phases. What decides how far a dye moves?
        "どの色素も、両方の相に引きつけられます。色素が進む距離は、何で決まりますか。",
      ],
      // EN: <p>The two dyes have different relative attractions (intermolecular forces) to the mobile phase and to the stationary phase.</p><p>The dye that is more strongly attracted to (more soluble in) the mobile phase, and less strongly attracted to the stationary phase, is carried further by the solvent. It has the higher <i>R</i><sub>F</sub> value.</p>
      answer: "<p>2 種類の色素は、移動相 (mobile phase) と固定相 (stationary phase) に引きつけられる強さ（分子間力）のバランスが違います。</p><p>移動相により強く引きつけられ（移動相によく溶け）、固定相に引きつけられる強さが弱い色素は、溶媒によって遠くまで運ばれます。こちらの色素のほうが <i>R</i><sub>F</sub> 値が大きくなります。</p>",
      markscheme: [
        // EN: The dyes have different (relative) attractions / intermolecular forces to the mobile phase and the stationary phase. Accept: different solubility in the solvent / different adsorption on the stationary phase.
        "色素によって、移動相と固定相に引きつけられる（相対的な）強さ / 分子間力が違う。「溶媒への溶けやすさが違う」/「固定相への吸着の強さが違う」も可。",
        // EN: The dye that is more attracted to (more soluble in) the mobile phase / less attracted to the stationary phase moves further (has the higher R<sub>F</sub>).
        "移動相により強く引きつけられる（移動相によく溶ける）/ 固定相に引きつけられる強さが弱い色素のほうが、遠くまで進む（R<sub>F</sub> が大きい）。",
      ],
    },

    // ── s2-2-q057 · multi · exam · SL · Structure 2.2.10 · 2 marks
    "s2-2-q057": {
      // EN: <p>A food colouring, M, is tested by paper chromatography. The solvent front moves 10.0 cm from the baseline. M gives three spots, at 2.0 cm, 5.5 cm and 8.0 cm from the baseline.</p><p>Five pure dyes are tested on a <strong>second</strong> piece of the same paper with the same solvent. On this paper, the solvent front moves 8.0 cm from the baseline.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Second chromatogram (solvent front at 8.0 cm)</caption><thead><tr><th scope="col">Pure dye</th><th scope="col">Distance moved by spot / cm</th></tr></thead><tbody><tr><th scope="row">A</th><td>1.6</td></tr><tr><th scope="row">B</th><td>4.4</td></tr><tr><th scope="row">C</th><td>5.5</td></tr><tr><th scope="row">D</th><td>6.4</td></tr><tr><th scope="row">E</th><td>2.0</td></tr></tbody></table></div><p>Which dyes could be present in M? Select all that apply.</p>
      stem: "<p>食用色素 M を、ペーパークロマトグラフィーで調べます。溶媒先端は原線から 10.0 cm 進みました。M からは 3 つのスポットができ、原線から 2.0 cm、5.5 cm、8.0 cm のところにありました。</p><p>5 種類の純粋な色素を、同じ紙の<strong>別の 1 枚</strong>と同じ溶媒を使って調べます。この紙では、溶媒先端は原線から 8.0 cm 進みました。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>2 枚目のクロマトグラム（溶媒先端は 8.0 cm）</caption><thead><tr><th scope=\"col\">純粋な色素</th><th scope=\"col\">スポットが進んだ距離 / cm</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>1.6</td></tr><tr><th scope=\"row\">B</th><td>4.4</td></tr><tr><th scope=\"row\">C</th><td>5.5</td></tr><tr><th scope=\"row\">D</th><td>6.4</td></tr><tr><th scope=\"row\">E</th><td>2.0</td></tr></tbody></table></div><p>M に含まれている可能性がある色素はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
        // EN: E
        "E",
      ],
      hints: [
        // EN: The solvent fronts moved different distances, so you cannot compare distances directly.
        "溶媒先端が進んだ距離が違うので、距離をそのままくらべることはできません。",
        // EN: Calculate <i>R</i><sub>F</sub> for each spot of M (divide by 10.0) and for each pure dye (divide by 8.0).
        "M のそれぞれのスポット（10.0 で割る）と、それぞれの純粋な色素（8.0 で割る）の <i>R</i><sub>F</sub> を計算しましょう。",
        // EN: The same dye has the same <i>R</i><sub>F</sub> under the same conditions.
        "同じ色素は、同じ条件なら同じ <i>R</i><sub>F</sub> になります。",
      ],
      // EN: <p>Spots of M (solvent front 10.0 cm):</p><div class="worked__math">2.0 ÷ 10.0 = 0.20</div><div class="worked__math">5.5 ÷ 10.0 = 0.55</div><div class="worked__math">8.0 ÷ 10.0 = 0.80</div><p>Pure dyes (solvent front 8.0 cm):</p><div class="worked__math">A: 1.6 ÷ 8.0 = 0.20</div><div class="worked__math">B: 4.4 ÷ 8.0 = 0.55</div><div class="worked__math">C: 5.5 ÷ 8.0 = 0.69</div><div class="worked__math">D: 6.4 ÷ 8.0 = 0.80</div><div class="worked__math">E: 2.0 ÷ 8.0 = 0.25</div><p>The <i>R</i><sub>F</sub> values of <strong>A, B and D</strong> match the three spots of M. C and E moved the same <em>distances</em> as spots of M, but their <i>R</i><sub>F</sub> values do not match.</p>
      solution: "<p>M のスポット（溶媒先端 10.0 cm）：</p><div class=\"worked__math\">2.0 ÷ 10.0 = 0.20</div><div class=\"worked__math\">5.5 ÷ 10.0 = 0.55</div><div class=\"worked__math\">8.0 ÷ 10.0 = 0.80</div><p>純粋な色素（溶媒先端 8.0 cm）：</p><div class=\"worked__math\">A: 1.6 ÷ 8.0 = 0.20</div><div class=\"worked__math\">B: 4.4 ÷ 8.0 = 0.55</div><div class=\"worked__math\">C: 5.5 ÷ 8.0 = 0.69</div><div class=\"worked__math\">D: 6.4 ÷ 8.0 = 0.80</div><div class=\"worked__math\">E: 2.0 ÷ 8.0 = 0.25</div><p><strong>A、B、D</strong> の <i>R</i><sub>F</sub> 値が、M の 3 つのスポットと一致します。C と E は、進んだ<em>距離</em>は M のスポットと同じですが、<i>R</i><sub>F</sub> 値は一致しません。</p>",
      misconception: {
        // EN (option C): Dye C moved 5.5 cm, the same distance as one spot of M. But the solvent moved a different distance on the two papers. Compare <i>R</i><sub>F</sub> values: C has 5.5 ÷ 8.0 = 0.69, and no spot of M has this value.
        "2": "色素 C は 5.5 cm 進み、M のスポットの 1 つと同じ距離です。でも、2 枚の紙では溶媒が進んだ距離が違います。<i>R</i><sub>F</sub> 値でくらべましょう。C は 5.5 ÷ 8.0 = 0.69 で、M にはこの値のスポットがありません。",
        // EN (option E): Dye E moved 2.0 cm, the same distance as one spot of M. But its <i>R</i><sub>F</sub> is 2.0 ÷ 8.0 = 0.25, and the spot of M has 2.0 ÷ 10.0 = 0.20. Compare <i>R</i><sub>F</sub> values, not distances.
        "4": "色素 E は 2.0 cm 進み、M のスポットの 1 つと同じ距離です。でも、E の <i>R</i><sub>F</sub> は 2.0 ÷ 8.0 = 0.25 で、M のスポットは 2.0 ÷ 10.0 = 0.20 です。距離ではなく、<i>R</i><sub>F</sub> 値でくらべましょう。",
      },
    },

    // ── s2-2-q058 · numeric · challenge · SL · Structure 2.2.10 · 2 marks
    "s2-2-q058": {
      // EN: <p>Under certain conditions, a compound has an <i>R</i><sub>F</sub> value of 0.62.</p><p>A student draws the baseline 2.0 cm above the bottom edge of a TLC plate. The solvent front stops 14.0 cm above the bottom edge.</p><p>How far above the <strong>bottom edge</strong> of the plate will the centre of the spot be? Give your answer to 2 significant figures.</p>
      stem: "<p>ある条件で、ある化合物の <i>R</i><sub>F</sub> 値は 0.62 です。</p><p>生徒が、TLC プレートの下端から 2.0 cm 上に原線を引きました。溶媒先端は、下端から 14.0 cm 上のところで止まりました。</p><p>スポットの中心は、プレートの<strong>下端</strong>から何 cm 上にきますか。有効数字 2 桁で答えましょう。</p>",
      hints: [
        // EN: First find the distance the solvent front moved from the baseline.
        "まず、溶媒先端が原線から進んだ距離を求めましょう。",
        // EN: Rearrange: distance moved by the spot = <i>R</i><sub>F</sub> × distance moved by the solvent front.
        "式を変形します：スポットが進んだ距離 = <i>R</i><sub>F</sub> × 溶媒先端が進んだ距離。",
        // EN: That distance starts at the baseline. The question asks for the distance from the bottom edge.
        "この距離は原線からはかったものです。問われているのは、下端からの距離です。",
      ],
      // EN: <div class="worked__math">distance moved by solvent front = 14.0 − 2.0 = 12.0 cm</div><div class="worked__math">distance moved by spot = 0.62 × 12.0 cm = 7.44 cm</div><div class="worked__math">height above bottom edge = 7.44 + 2.0 = 9.44 cm</div><p>To 2 significant figures this is <strong>9.4 cm</strong>.</p><p>Common slips: 0.62 × 14.0 = 8.7 cm (used the bottom edge for the solvent distance) and 7.4 cm (forgot to add the 2.0 cm).</p>
      solution: "<div class=\"worked__math\">溶媒先端が進んだ距離 = 14.0 − 2.0 = 12.0 cm</div><div class=\"worked__math\">スポットが進んだ距離 = 0.62 × 12.0 cm = 7.44 cm</div><div class=\"worked__math\">下端からの高さ = 7.44 + 2.0 = 9.44 cm</div><p>有効数字 2 桁では <strong>9.4 cm</strong> です。</p><p>よくある間違い：0.62 × 14.0 = 8.7 cm（溶媒の距離を下端からはかった）と、7.4 cm（2.0 cm を足し忘れた）。</p>",
    },

    // ── s2-2-q059 · mcq · foundation · SL · Structure 2.2.2 · 1 mark
    "s2-2-q059": {
      // EN: <p>Which carbon–carbon bond is the <strong>longest</strong> and the <strong>weakest</strong>?</p>
      stem: "<p>炭素–炭素結合のうち、<strong>最も長く</strong>、<strong>最も弱い</strong>ものはどれですか。</p>",
      options: [
        // EN: the single bond, <span class="chem">C–C</span>
        "単結合 <span class=\"chem\">C–C</span>",
        // EN: the double bond, <span class="chem">C=C</span>
        "二重結合 <span class=\"chem\">C=C</span>",
        // EN: the triple bond, <span class="chem">C≡C</span>
        "三重結合 <span class=\"chem\">C≡C</span>",
        // EN: They all have the same length and strength.
        "どれも長さと強さは同じである。",
      ],
      hints: [
        // EN: Single, double and triple bonds have one, two and three shared pairs.
        "単結合、二重結合、三重結合には、共有電子対がそれぞれ 1 組、2 組、3 組あります。",
        // EN: Fewer shared pairs means a weaker attraction between the two nuclei and the shared electrons.
        "共有電子対が少ないほど、2 つの原子核と共有電子の間の引力は弱くなります。",
      ],
      // EN: <p>The single bond has only one shared pair. The attraction between the two nuclei and the shared electrons is weakest, so the nuclei are furthest apart.</p><p>Data booklet values: <span class="chem">C–C</span> 154 pm and 346 kJ mol<sup>−1</sup>; <span class="chem">C=C</span> 134 pm and 614 kJ mol<sup>−1</sup>; <span class="chem">C≡C</span> 120 pm and 839 kJ mol<sup>−1</sup>.</p>
      solution: "<p>単結合には、共有電子対が 1 組しかありません。2 つの原子核と共有電子の間の引力が最も弱いので、原子核どうしが最も離れています。</p><p>データブックレットの値：<span class=\"chem\">C–C</span> は 154 pm と 346 kJ mol<sup>−1</sup>、<span class=\"chem\">C=C</span> は 134 pm と 614 kJ mol<sup>−1</sup>、<span class=\"chem\">C≡C</span> は 120 pm と 839 kJ mol<sup>−1</sup>。</p>",
      misconception: {
        // EN (option B): A double bond has two shared pairs. It is shorter and stronger than a single bond, which has one shared pair.
        "1": "二重結合には共有電子対が 2 組あります。共有電子対が 1 組の単結合より短く、強い結合です。",
        // EN (option C): A triple bond has three shared pairs. The nuclei are attracted most strongly to the shared electrons, so this is the shortest and strongest bond.
        "2": "三重結合には共有電子対が 3 組あります。原子核が共有電子に最も強く引きつけられるので、最も短く、最も強い結合です。",
        // EN (option D): The number of shared pairs is different in each bond, so the attraction between the nuclei and the shared electrons is different too.
        "3": "共有電子対の数が結合ごとに違うので、原子核と共有電子の間の引力も違います。",
      },
    },

    // ── s2-2-q060 · order · exam · SL · Structure 2.2.2 · 2 marks
    "s2-2-q060": {
      // EN: <p>Three molecules each contain a bond between two nitrogen atoms. In all three, every nitrogen atom has 8 electrons around it and every hydrogen atom forms one bond.</p><p>Put the molecules in order of the length of the nitrogen–nitrogen bond. Put the <strong>shortest</strong> bond first.</p>
      stem: "<p>3 つの分子には、どれも 2 つの窒素原子の間の結合があります。3 つとも、どの窒素原子のまわりにも電子が 8 個あり、どの水素原子も結合を 1 本つくっています。</p><p>窒素–窒素結合の長さの順に、分子を並べましょう。結合が<strong>最も短い</strong>ものを最初にします。</p>",
      options: [
        // EN: nitrogen, <span class="chem">N2</span>
        "窒素 (nitrogen) <span class=\"chem\">N2</span>",
        // EN: diazene, <span class="chem">N2H2</span>
        "ジアゼン (diazene) <span class=\"chem\">N2H2</span>",
        // EN: hydrazine, <span class="chem">N2H4</span>
        "ヒドラジン (hydrazine) <span class=\"chem\">N2H4</span>",
      ],
      hints: [
        // EN: Deduce the Lewis formula of each molecule. Count the valence electrons first: 10, 12 and 14.
        "それぞれの分子のルイス構造式を導きましょう (deduce)。まず価電子を数えます。10 個、12 個、14 個です。",
        // EN: How many pairs are shared between the two nitrogen atoms in each molecule?
        "それぞれの分子で、2 つの窒素原子の間で共有されている電子対は何組ですか。",
        // EN: More shared pairs make a shorter bond.
        "共有電子対が多いほど、結合は短くなります。",
      ],
      // EN: <p><span class="chem">N2</span>: 10 valence electrons. The atoms share three pairs: <span class="chem">N≡N</span>.</p><p><span class="chem">N2H2</span>: 12 valence electrons. Each N has one bond to H and one lone pair, so the atoms share two pairs: <span class="chem">HN=NH</span>.</p><p><span class="chem">N2H4</span>: 14 valence electrons. Each N has two bonds to H and one lone pair, so the atoms share one pair: <span class="chem">H2N–NH2</span>.</p><p>More shared pairs give a greater attraction between the nuclei and the shared electrons, so the bond is shorter. Data booklet lengths: <span class="chem">N≡N</span> 110 pm, <span class="chem">N=N</span> 125 pm, <span class="chem">N–N</span> 146 pm.</p>
      solution: "<p><span class=\"chem\">N2</span>：価電子 10 個。原子どうしが 3 組を共有します：<span class=\"chem\">N≡N</span>。</p><p><span class=\"chem\">N2H2</span>：価電子 12 個。それぞれの N は H との結合が 1 本と非共有電子対が 1 組なので、原子どうしが 2 組を共有します：<span class=\"chem\">HN=NH</span>。</p><p><span class=\"chem\">N2H4</span>：価電子 14 個。それぞれの N は H との結合が 2 本と非共有電子対が 1 組なので、原子どうしが 1 組を共有します：<span class=\"chem\">H2N–NH2</span>。</p><p>共有電子対が多いほど、原子核と共有電子の間の引力が大きくなるので、結合は短くなります。データブックレットの結合距離：<span class=\"chem\">N≡N</span> 110 pm、<span class=\"chem\">N=N</span> 125 pm、<span class=\"chem\">N–N</span> 146 pm。</p>",
    },

    // ── s2-2-q061 · mcq · foundation · SL · Structure 2.2.3 · 1 mark
    "s2-2-q061": {
      // EN: <p>A water molecule bonds to a hydrogen ion to form the hydronium ion.</p><p><span class="chem">H2O + H+ -> H3O+</span></p><p>Where do the two electrons in the new <span class="chem">O–H</span> bond come from?</p>
      stem: "<p>水分子は水素イオンと結合して、ヒドロニウムイオン (hydronium ion) になります。</p><p><span class=\"chem\">H2O + H+ -> H3O+</span></p><p>新しくできる <span class=\"chem\">O–H</span> 結合の 2 個の電子は、どこから来ますか。</p>",
      options: [
        // EN: Both come from the oxygen atom.
        "2 個とも酸素原子から来る。",
        // EN: Both come from the hydrogen ion.
        "2 個とも水素イオンから来る。",
        // EN: One comes from the oxygen atom and one comes from the hydrogen ion.
        "1 個は酸素原子から、1 個は水素イオンから来る。",
        // EN: Both come from a hydrogen atom of the water molecule.
        "2 個とも水分子の水素原子から来る。",
      ],
      hints: [
        // EN: How many electrons does <span class="chem">H+</span> have?
        "<span class=\"chem\">H+</span> には電子が何個ありますか。",
        // EN: Which atom in a water molecule has lone pairs?
        "水分子の中で、非共有電子対をもつ原子はどれですか。",
      ],
      // EN: <p><span class="chem">H+</span> has no electrons. Oxygen in water has two lone pairs. Oxygen shares one lone pair with <span class="chem">H+</span>.</p><p>Both electrons of the shared pair come from the same atom, so the new bond is a <strong>coordination bond</strong>. Once formed, it is the same as the other two <span class="chem">O–H</span> bonds.</p>
      solution: "<p><span class=\"chem\">H+</span> には電子がありません。水の酸素には非共有電子対が 2 組あります。酸素は、そのうちの 1 組を <span class=\"chem\">H+</span> と共有します。</p><p>共有電子対の電子が 2 個とも同じ原子から来ているので、新しい結合は<strong>配位結合</strong> (coordination bond) です。できてしまえば、ほかの 2 つの <span class=\"chem\">O–H</span> 結合と同じです。</p>",
      misconception: {
        // EN (option B): A hydrogen ion, <span class="chem">H+</span>, has no electrons at all. It can only accept a pair.
        "1": "水素イオン <span class=\"chem\">H+</span> には、電子がまったくありません。電子対を受け取ることしかできません。",
        // EN (option C): This is how an ordinary covalent bond forms. But <span class="chem">H+</span> has no electron to give.
        "2": "ふつうの共有結合は、このようにしてできます。でも、<span class=\"chem\">H+</span> には出せる電子がありません。",
        // EN (option D): The hydrogen atoms in water have already used their one electron in an <span class="chem">O–H</span> bond. They have no lone pair to give.
        "3": "水の水素原子は、1 個しかない電子をすでに <span class=\"chem\">O–H</span> 結合に使っています。出せる非共有電子対はありません。",
      },
    },

    // ── s2-2-q062 · numeric · exam · SL · Structure 2.2.3 · 1 mark
    "s2-2-q062": {
      // EN: <p>In a carbon monoxide molecule, <span class="chem">CO</span>, the two atoms are joined by a triple bond. Each atom also has one lone pair.</p><p>A carbon atom has 4 valence electrons and an oxygen atom has 6.</p><p>How many of the six shared electrons came from the <strong>oxygen</strong> atom?</p>
      stem: "<p>一酸化炭素分子 <span class=\"chem\">CO</span> では、2 つの原子が三重結合でつながっています。それぞれの原子には、非共有電子対も 1 組あります。</p><p>炭素原子の価電子は 4 個、酸素原子の価電子は 6 個です。</p><p>共有されている 6 個の電子のうち、<strong>酸素</strong>原子から来たものは何個ですか。</p>",
      hints: [
        // EN: Each atom keeps one lone pair. That is 2 of its valence electrons.
        "どちらの原子も、非共有電子対を 1 組もっています。これは価電子のうちの 2 個です。",
        // EN: The electrons that an atom does not keep in a lone pair are the ones it gives to the bond.
        "原子が非共有電子対としてもっていない電子が、結合に出している電子です。",
      ],
      // EN: <div class="worked__math">oxygen: 6 valence electrons − 2 in its lone pair = 4 electrons in the bond</div><div class="worked__math">carbon: 4 valence electrons − 2 in its lone pair = 2 electrons in the bond</div><div class="worked__math">check: 4 + 2 = 6 shared electrons = 3 shared pairs</div><p>Carbon gives one electron to each of two shared pairs. Oxygen gives one electron to each of these, and <strong>both</strong> electrons of the third pair. So one of the three shared pairs is a coordination bond from oxygen to carbon.</p>
      solution: "<div class=\"worked__math\">酸素: 価電子 6 個 − 非共有電子対の 2 個 = 結合に 4 個</div><div class=\"worked__math\">炭素: 価電子 4 個 − 非共有電子対の 2 個 = 結合に 2 個</div><div class=\"worked__math\">確認: 4 + 2 = 共有電子 6 個 = 共有電子対 3 組</div><p>炭素は、2 組の共有電子対に電子を 1 個ずつ出しています。酸素は、この 2 組に 1 個ずつ出し、さらに 3 組目の電子を <strong>2 個とも</strong>出しています。つまり、3 組の共有電子対のうち 1 組は、酸素から炭素への配位結合です。</p>",
    },

    // ── s2-2-q063 · mcq · exam · SL · Structure 2.2.5 · 1 mark
    "s2-2-q063": {
      // EN: <p>Electronegativity values from the data booklet: H 2.2, F 4.0, Cl 3.2, Br 3.0.</p><p>Which list shows the bonds in order of <strong>increasing</strong> polarity?</p>
      stem: "<p>データブックレットの電気陰性度の値：H 2.2、F 4.0、Cl 3.2、Br 3.0。</p><p>結合を、極性が<strong>大きくなる</strong>順に並べたものはどれですか。</p>",
      options: [
        // EN: <span class="chem">H–F</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–Br</span>
        "<span class=\"chem\">H–F</span> &lt; <span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–Br</span>",
        // EN: <span class="chem">H–Br</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–F</span>
        "<span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–F</span>",
        // EN: <span class="chem">H–Cl</span> &lt; <span class="chem">H–Br</span> &lt; <span class="chem">H–F</span>
        "<span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–F</span>",
        // EN: <span class="chem">H–Br</span> &lt; <span class="chem">H–F</span> &lt; <span class="chem">H–Cl</span>
        "<span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–F</span> &lt; <span class=\"chem\">H–Cl</span>",
      ],
      hints: [
        // EN: Bond polarity depends on the difference in electronegativity.
        "結合の極性は、電気陰性度の差で決まります。",
        // EN: Calculate the difference for each bond. The smallest difference is the least polar bond.
        "それぞれの結合の差を計算しましょう。差が最も小さい結合が、極性の最も小さい結合です。",
      ],
      // EN: <div class="worked__math">H–Br: 3.0 − 2.2 = 0.8</div><div class="worked__math">H–Cl: 3.2 − 2.2 = 1.0</div><div class="worked__math">H–F: 4.0 − 2.2 = 1.8</div><p>A larger difference in electronegativity means a more polar bond. So the order is <span class="chem">H–Br</span> &lt; <span class="chem">H–Cl</span> &lt; <span class="chem">H–F</span>.</p>
      solution: "<div class=\"worked__math\">H–Br: 3.0 − 2.2 = 0.8</div><div class=\"worked__math\">H–Cl: 3.2 − 2.2 = 1.0</div><div class=\"worked__math\">H–F: 4.0 − 2.2 = 1.8</div><p>電気陰性度の差が大きいほど、結合の極性は大きくなります。だから、順番は <span class=\"chem\">H–Br</span> &lt; <span class=\"chem\">H–Cl</span> &lt; <span class=\"chem\">H–F</span> です。</p>",
      misconception: {
        // EN (option A): This is the order of decreasing polarity. The question asks for increasing polarity, so the smallest difference comes first.
        "0": "これは極性が小さくなる順です。問われているのは大きくなる順なので、差が最も小さいものが最初にきます。",
        // EN (option C): Compare the first two: H–Cl has a difference of 1.0 and H–Br has 0.8. The bond with the smaller difference is less polar.
        "2": "はじめの 2 つをくらべましょう。H–Cl の差は 1.0、H–Br の差は 0.8 です。差が小さいほうの結合が、極性が小さくなります。",
        // EN (option D): H–F has the largest difference (1.8), so it is the most polar bond. It must come last.
        "3": "H–F は差が最も大きい (1.8) ので、極性が最も大きい結合です。最後にくるはずです。",
      },
    },

    // ── s2-2-q064 · short · exam · SL · Structure 2.2.5 · 2 marks
    "s2-2-q064": {
      // EN: <p>Electronegativity values from the data booklet: C 2.6, F 4.0.</p><p>Deduce, giving a reason, the polarity of the <span class="chem">C–F</span> bond. Show the partial charges on the two atoms.</p>
      stem: "<p>データブックレットの電気陰性度の値：C 2.6、F 4.0。</p><p><span class=\"chem\">C–F</span> 結合の極性を、理由をつけて導きなさい (deduce)。2 つの原子の部分電荷 (partial charges) も示しましょう。</p>",
      hints: [
        // EN: Compare the two electronegativity values.
        "2 つの電気陰性度の値をくらべましょう。",
        // EN: The atom that attracts the shared pair more strongly becomes slightly negative.
        "共有電子対をより強く引きつける原子が、わずかに負の電荷を帯びます。",
      ],
      // EN: <p>The bond is polar, because fluorine is more electronegative than carbon (4.0 − 2.6 = 1.4). Fluorine attracts the shared pair of electrons more strongly.</p><p>Partial charges: carbon is δ+ and fluorine is δ−.</p>
      answer: "<p>フッ素は炭素より電気陰性度が大きい（4.0 − 2.6 = 1.4）ので、この結合には極性があります。フッ素のほうが、共有電子対をより強く引きつけます。</p><p>部分電荷：炭素が δ+、フッ素が δ− です。</p>",
      markscheme: [
        // EN: The bond is polar because the two atoms have different electronegativities / fluorine is more electronegative than carbon (difference of 1.4).
        "2 つの原子の電気陰性度が違う / フッ素は炭素より電気陰性度が大きい（差は 1.4）ので、この結合には極性がある。",
        // EN: C is δ+ AND F is δ−. Both partial charges are needed. Do not accept full charges, + and −.
        "C が δ+、かつ、F が δ−。部分電荷は両方とも必要。完全な電荷の + と − は不可。",
      ],
    },

    // ── s2-2-q065 · mcq · foundation · SL · Structure 2.2.6 · 1 mark
    "s2-2-q065": {
      // EN: <p>Which two things decide if a molecule is polar?</p>
      stem: "<p>分子に極性があるかどうかを決める 2 つのことは何ですか。</p>",
      options: [
        // EN: the polarity of its bonds and its molecular geometry
        "結合の極性と、分子の形",
        // EN: the polarity of its bonds only
        "結合の極性だけ",
        // EN: its molar mass and its molecular geometry
        "モル質量と、分子の形",
        // EN: the number of atoms and the number of bonds
        "原子の数と、結合の数",
      ],
      hints: [
        // EN: A molecule is polar if its bond dipoles do not cancel.
        "結合の双極子が打ち消し合わなければ、その分子には極性があります。",
        // EN: What decides the size of each bond dipole? What decides the directions in which they point?
        "それぞれの結合の双極子の大きさは、何で決まりますか。双極子の向きは、何で決まりますか。",
      ],
      // EN: <p>Molecular polarity depends on both <strong>bond polarity</strong> and <strong>molecular geometry</strong>.</p><p>The bonds must be polar, so that there are bond dipoles. And the shape must be one in which the bond dipoles do not cancel.</p>
      solution: "<p>分子の極性は、<strong>結合の極性</strong> (bond polarity) と<strong>分子の形</strong> (molecular geometry) の両方で決まります。</p><p>結合の双極子ができるように、結合に極性がなければなりません。そのうえで、結合の双極子が打ち消し合わない形でなければなりません。</p>",
      misconception: {
        // EN (option B): Polar bonds are not enough. In a symmetrical molecule such as <span class="chem">CO2</span>, the bond dipoles cancel and the molecule is non-polar.
        "1": "結合に極性があるだけでは足りません。<span class=\"chem\">CO2</span> のような対称な分子では、結合の双極子が打ち消し合い、分子は無極性になります。",
        // EN (option C): Molar mass affects the strength of London forces. It does not decide if the molecule has a net dipole.
        "2": "モル質量は、ロンドン力の強さに影響します。分子全体の双極子があるかどうかを決めるものではありません。",
        // EN (option D): Counting atoms and bonds does not tell you how charge is spread. <span class="chem">CO2</span> and <span class="chem">H2O</span> both have three atoms and two bonds, but only water is polar.
        "3": "原子や結合の数を数えても、電荷のかたよりはわかりません。<span class=\"chem\">CO2</span> も <span class=\"chem\">H2O</span> も原子が 3 個、結合が 2 つですが、極性があるのは水だけです。",
      },
    },

    // ── s2-2-q066 · short · exam · SL · Structure 2.2.6 · 2 marks
    "s2-2-q066": {
      // EN: <p>In a molecule of sulfur dioxide, <span class="chem">SO2</span>, the sulfur atom is bonded to two oxygen atoms and has one lone pair. The molecular geometry is bent (V-shaped).</p><p>Electronegativity values from the data booklet: O 3.4, S 2.6.</p><p>Explain why the sulfur dioxide molecule is polar.</p>
      stem: "<p>二酸化硫黄 (sulfur dioxide) <span class=\"chem\">SO2</span> の分子では、硫黄原子は 2 個の酸素原子と結合していて、非共有電子対が 1 組あります。分子の形は折れ線形（V 字形）です。</p><p>データブックレットの電気陰性度の値：O 3.4、S 2.6。</p><p>二酸化硫黄分子に極性がある理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: First mark: are the bonds polar? Use the electronegativity values.
        "1 点目：結合に極性はありますか。電気陰性度の値を使いましょう。",
        // EN: Second mark: what does the shape do to the two bond dipoles?
        "2 点目：この形だと、2 つの結合の双極子はどうなりますか。",
      ],
      // EN: <p>The sulfur–oxygen bonds are polar, because oxygen is more electronegative than sulfur (3.4 − 2.6 = 0.8).</p><p>The molecule is bent, so the two bond dipoles do not point in opposite directions. They do not cancel, and the molecule has a net dipole.</p>
      answer: "<p>酸素は硫黄より電気陰性度が大きい（3.4 − 2.6 = 0.8）ので、硫黄–酸素結合には極性があります。</p><p>分子は折れ線形なので、2 つの結合の双極子は反対向きになりません。打ち消し合わないので、分子全体として双極子をもちます。</p>",
      markscheme: [
        // EN: The (S–O) bonds are polar / there is an electronegativity difference between S and O.
        "(S–O) 結合に極性がある / S と O の間に電気陰性度の差がある。",
        // EN: The bond dipoles do not cancel / there is a net dipole, because the molecule is bent (not symmetrical).
        "分子が折れ線形である（対称ではない）ので、結合の双極子が打ち消し合わない / 分子全体の双極子 (net dipole) がある。",
      ],
    },

    // ── s2-2-q067 · mcq · foundation · SL · Structure 2.2.8 · 1 mark
    "s2-2-q067": {
      // EN: <p>Which intermolecular force acts between the molecules of <strong>every</strong> molecular substance?</p>
      stem: "<p>分子でできた物質なら<strong>どれでも</strong>、その分子の間にはたらく分子間力はどれですか。</p>",
      options: [
        // EN: hydrogen bonding
        "水素結合 (hydrogen bonding)",
        // EN: dipole–dipole forces
        "双極子–双極子相互作用 (dipole–dipole forces)",
        // EN: London (dispersion) forces
        "ロンドン（分散）力 (London (dispersion) forces)",
        // EN: dipole–induced dipole forces
        "双極子–誘起双極子相互作用 (dipole–induced dipole forces)",
      ],
      hints: [
        // EN: Think of a non-polar substance such as methane. It can still be turned into a liquid.
        "メタンのような無極性の物質を考えてみましょう。それでも液体にすることができます。",
        // EN: Which force needs only moving electrons?
        "動いている電子さえあればはたらく力はどれですか。",
      ],
      // EN: <p>All molecules contain electrons. The electrons are always moving, so every molecule can have a temporary dipole that induces a dipole in its neighbour.</p><p>So <strong>London (dispersion) forces</strong> act between all molecules, polar and non-polar.</p>
      solution: "<p>どの分子にも電子があります。電子はいつも動いているので、どの分子にも瞬間的な双極子 (temporary dipole) ができ、それがとなりの分子に双極子を誘起します。</p><p>だから、<strong>ロンドン（分散）力</strong>は、極性分子でも無極性分子でも、すべての分子の間にはたらきます。</p>",
      misconception: {
        // EN (option A): Hydrogen bonding needs a hydrogen atom bonded to a very electronegative atom such as N, O or F. Most molecules do not have one.
        "0": "水素結合には、N、O、F のような電気陰性度のとても大きい原子と結合した水素原子が必要です。ほとんどの分子には、そのような水素原子がありません。",
        // EN (option B): Dipole–dipole forces act only between polar molecules. Non-polar molecules such as <span class="chem">CH4</span> do not have them.
        "1": "双極子–双極子相互作用は、極性分子の間にだけはたらきます。<span class=\"chem\">CH4</span> のような無極性分子にははたらきません。",
        // EN (option D): This force needs one polar molecule and one non-polar molecule. It does not act in a pure non-polar substance.
        "3": "この力には、極性分子 1 つと無極性分子 1 つが必要です。純粋な無極性の物質の中でははたらきません。",
      },
    },

    // ── s2-2-q068 · numeric · exam · SL · Structure 2.2.4 · 1 mark
    "s2-2-q068": {
      // EN: <p>In phosphorus trichloride, <span class="chem">PCl3</span>, the phosphorus atom has three bonding pairs and one lone pair.</p><p>Predict a value for the <span class="chem">Cl–P–Cl</span> bond angle.</p>
      stem: "<p>三塩化リン (phosphorus trichloride) <span class=\"chem\">PCl3</span> では、リン原子に共有電子対が 3 組と非共有電子対が 1 組あります。</p><p><span class=\"chem\">Cl–P–Cl</span> 結合角の値を予測しなさい (predict)。</p>",
      hints: [
        // EN: Four electron domains give a tetrahedral electron domain geometry. What is the tetrahedral angle?
        "電子領域が 4 つあると、電子領域の配置は正四面体形になります。正四面体形の角度は何度ですか。",
        // EN: A lone pair repels more than a bonding pair. Is the angle larger or smaller than the tetrahedral angle?
        "非共有電子対は、共有電子対より強く反発します。角度は正四面体形の角度より大きくなりますか、小さくなりますか。",
      ],
      // EN: <p>Phosphorus has four electron domains, so the electron domain geometry is tetrahedral (109.5°). One domain is a lone pair, so the molecular geometry is trigonal pyramidal.</p><p>The lone pair repels the bonding pairs more strongly than they repel each other. The bond angle is <strong>less than 109.5°</strong>.</p><p>A markscheme accepts a range for a trigonal pyramidal molecule, such as 100° to 107°. The measured angle in <span class="chem">PCl3</span> is about 100°. Do not write 109.5°.</p>
      solution: "<p>リンには電子領域が 4 つあるので、電子領域の配置は正四面体形 (109.5°) です。そのうち 1 つが非共有電子対なので、分子の形は三角錐形です。</p><p>非共有電子対が共有電子対を反発する力は、共有電子対どうしの反発より強くなります。結合角は <strong>109.5° より小さく</strong>なります。</p><p>採点基準では、三角錐形の分子について、100° から 107° のように幅のある値を認めます。<span class=\"chem\">PCl3</span> の実測値は約 100° です。109.5° と書いてはいけません。</p>",
      // EN: any value from 100° to 107°
      answerDisplay: "100° から 107° までのどの値でも可",
    },

  }
});
