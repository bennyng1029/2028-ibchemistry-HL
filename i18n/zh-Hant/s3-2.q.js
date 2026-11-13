/* s3-2.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's3-2.q', {
  questions: {

    // ── s3-2-q001 · mcq · foundation · SL · Structure 3.2.1 · 1 mark
    "s3-2-q001": {
      // EN: <p>Propan-2-ol can be represented in four ways. Which one is the <strong>condensed structural formula</strong>?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C<sub>3</sub>H<sub>8</sub>O</span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub></span>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -49 54 53" width="54" height="53" role="img" aria-label="Skeletal formula. Line notation: CC(O)C" data-g="S:C.C.O1.C;0-1,1-2,1-3" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -31.5"/><path d="M22.5 -13L45 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-34.4" text-anchor="middle">O</text><text x="27.7" y="-34.4" text-anchor="start">H</text></g></svg>
        "",
        // EN: <svg class="mol mol--structural" viewBox="-45 -78 158 122" width="158" height="122" role="img" aria-label="Full structural formula. Line notation: CC(O)C" data-g="F:C.C.C.H.H.H.O.H.H.H.H.H;0-1,1-2,0-3,0-4,0-5,1-6,6-7,1-8,2-9,2-10,2-11" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7.5 0L26.5 0"/><path d="M41.5 0L60.5 0"/><path d="M-7.5 0L-26.5 0"/><path d="M0 -7.5L0 -26.5"/><path d="M0 7.5L0 26.5"/><path d="M34 -7.5L34 -26.5"/><path d="M34 -41.5L34 -60.5"/><path d="M34 7.5L34 26.5"/><path d="M75.5 0L94.5 0"/><path d="M68 -7.5L68 -26.5"/><path d="M68 7.5L68 26.5"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="0" y="4.6" text-anchor="middle">C</text><text x="34" y="4.6" text-anchor="middle">C</text><text x="68" y="4.6" text-anchor="middle">C</text><text x="-34" y="4.6" text-anchor="middle">H</text><text x="0" y="-29.4" text-anchor="middle">H</text><text x="0" y="38.6" text-anchor="middle">H</text><text x="34" y="-29.4" text-anchor="middle">O</text><text x="34" y="-63.4" text-anchor="middle">H</text><text x="34" y="38.6" text-anchor="middle">H</text><text x="102" y="4.6" text-anchor="middle">H</text><text x="68" y="-29.4" text-anchor="middle">H</text><text x="68" y="38.6" text-anchor="middle">H</text></g></svg>
        "",
      ],
      hints: [
        // EN: A condensed structural formula is written on one line. It lists each carbon atom followed by the atoms joined to it.
        "",
      ],
      // EN: <p><span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub></span> is the condensed structural formula. Read it carbon by carbon: a <span class="chem">CH<sub>3</sub></span> group, then a CH carbon that carries an OH group (the brackets show a branch), then another <span class="chem">CH<sub>3</sub></span> group.</p><p><span class="chem">C<sub>3</sub>H<sub>8</sub>O</span> is the molecular formula. The zig-zag drawing is the skeletal formula. The drawing with every atom and bond is the full structural formula.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the molecular formula. It counts the atoms of each element in one molecule, but it does not show how they are joined.
        "0": "",
        // EN (option C): This is the skeletal formula. Each line is a bond, each end or corner is a carbon atom, and hydrogen atoms on carbon are not drawn.
        "2": "",
        // EN (option D): This is the full structural formula. It shows every atom and every bond. A condensed formula writes each carbon with its atoms as a group, without drawing bonds.
        "3": "",
      },
    },

    // ── s3-2-q002 · numeric · foundation · SL · Structure 3.2.1 · 1 mark
    "s3-2-q002": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -49 99 53" width="99" height="53" role="img" aria-label="Skeletal formula. Line notation: CC(O)CC(C)C" data-g="S:C.C.O1.C.C.C.C;0-1,1-2,1-3,3-4,4-5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -31.5"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L67.5 -39"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-34.4" text-anchor="middle">O</text><text x="27.7" y="-34.4" text-anchor="start">H</text></g></svg></p><p>How many <strong>carbon</strong> atoms are there in one molecule?</p>
      stem: "",
      hints: [
        // EN: In a skeletal formula, every end of a line and every corner is a carbon atom, unless another symbol is written there.
        "",
        // EN: Count the ends and the corners. Do not count the O of the OH group.
        "",
      ],
      // EN: <p>Count each line end and each corner that has no symbol.</p><p>Along the chain there are 5 carbon atoms: the left end, three corners, and the right end. The branch at the right adds 1 more line end.</p><div class="worked__math">5 + 1 = 6 carbon atoms</div><p>The line that goes to OH ends at an oxygen atom, so it is not a carbon atom. The molecular formula is <span class="chem">C<sub>6</sub>H<sub>14</sub>O</span>.</p>
      solution: "",
      // EN: carbon atoms
      unit: "",
    },

    // ── s3-2-q003 · numeric · exam · SL · Structure 3.2.1 · 1 mark
    "s3-2-q003": {
      // EN: <p>The skeletal formula of a hydrocarbon is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -43 99 47" width="99" height="47" role="img" aria-label="Skeletal formula. Line notation: CC(C)=CCC" data-g="S:C.C.C.C.C.C;0-1,1-2,1=3,3-4,4-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M28.1 -14.6L43.7 -5.6"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg></p><p>How many <strong>hydrogen</strong> atoms are there in one molecule?</p>
      stem: "",
      hints: [
        // EN: Each carbon atom forms four bonds in total. The bonds that are not drawn are bonds to hydrogen.
        "",
        // EN: A double bond counts as two of the four bonds for each carbon atom it joins.
        "",
        // EN: Work along the molecule and write the number of H atoms on each carbon. Then add them.
        "",
      ],
      // EN: <p>There are 6 carbon atoms. Give each one enough hydrogen atoms to make four bonds.</p><div class="worked__math">three line ends: 3 × <span class="chem">CH<sub>3</sub></span> = 9 H</div><div class="worked__math">C=C carbon with the branch: 4 bonds to carbon already, 0 H</div><div class="worked__math">other C=C carbon: 3 bonds drawn, 1 H</div><div class="worked__math"><span class="chem">CH<sub>2</sub></span> corner: 2 H</div><div class="worked__math">total = 9 + 0 + 1 + 2 = 12 H</div><p>The molecular formula is <span class="chem">C<sub>6</sub>H<sub>12</sub></span>. This fits the general formula of the alkenes, <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub></span>.</p>
      solution: "",
      // EN: hydrogen atoms
      unit: "",
    },

    // ── s3-2-q004 · mcq · exam · SL · Structure 3.2.1 · 1 mark
    "s3-2-q004": {
      // EN: <p>What is the <strong>molecular formula</strong> of the compound with this skeletal formula?</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -49 117 59" width="117" height="59" role="img" aria-label="Skeletal formula. Line notation: CC(C)CC(=O)O" data-g="S:C.C.C.C.C.O.O1;0-1,1-2,1-3,3-4,4=5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M69.7 -13L69.7 -31.5"/><path d="M65.3 -13L65.3 -31.5"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-34.4" text-anchor="middle">O</text><text x="90.1" y="4.6" text-anchor="middle">O</text><text x="95.3" y="4.6" text-anchor="start">H</text></g></svg></p>
      stem: "",
      options: [
        // EN: <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>5</sub>H<sub>10</sub>O<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>5</sub>H<sub>12</sub>O<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span>
        "",
      ],
      hints: [
        // EN: Count the carbon atoms first: line ends and corners with no symbol.
        "",
        // EN: Then give each carbon atom enough hydrogen atoms to make four bonds. Remember the H in OH.
        "",
      ],
      // EN: <p>Carbon: 2 line ends on the left, 2 corners in the chain, and the carbon joined to both oxygen atoms. That is 5 C.</p><div class="worked__math">2 × <span class="chem">CH<sub>3</sub></span> = 6 H</div><div class="worked__math">CH (branch point) = 1 H</div><div class="worked__math"><span class="chem">CH<sub>2</sub></span> = 2 H</div><div class="worked__math">C(=O)OH carbon = 0 H, and OH = 1 H</div><div class="worked__math">total = 6 + 1 + 2 + 1 = 10 H</div><p>There are 2 O atoms. The molecular formula is <span class="chem">C<sub>5</sub>H<sub>10</sub>O<sub>2</sub></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): One carbon atom is missing. The end of the short branch line is a carbon atom too, and so is the carbon that holds the two oxygen atoms.
        "0": "",
        // EN (option C): This has two hydrogen atoms too many. The carbon with the C=O double bond uses two of its four bonds for that oxygen, so it holds no hydrogen atoms.
        "2": "",
        // EN (option D): There are two oxygen atoms: one in the C=O double bond and one in the OH group.
        "3": "",
      },
    },

    // ── s3-2-q005 · mcq · exam · SL · Structure 3.2.1 · 1 mark
    "s3-2-q005": {
      // EN: <p>The full structural formula of a compound is shown.</p><p data-i18n="off"><svg class="mol mol--structural" viewBox="-45 -44 226 88" width="226" height="88" role="img" aria-label="Full structural formula. Line notation: CCCC(=O)O" data-g="F:C.C.C.C.O.H.H.H.H.H.H.H.O.H;0-1,1-2,2-3,3-4,0-5,0-6,0-7,1-8,1-9,2-10,2-11,3=12,4-13" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7.5 0L26.5 0"/><path d="M41.5 0L60.5 0"/><path d="M75.5 0L94.5 0"/><path d="M109.5 0L128.5 0"/><path d="M-7.5 0L-26.5 0"/><path d="M0 -7.5L0 -26.5"/><path d="M0 7.5L0 26.5"/><path d="M34 -7.5L34 -26.5"/><path d="M34 7.5L34 26.5"/><path d="M68 -7.5L68 -26.5"/><path d="M68 7.5L68 26.5"/><path d="M104.3 -7.5L104.3 -26.5"/><path d="M99.7 -7.5L99.7 -26.5"/><path d="M143.5 0L162.5 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="0" y="4.6" text-anchor="middle">C</text><text x="34" y="4.6" text-anchor="middle">C</text><text x="68" y="4.6" text-anchor="middle">C</text><text x="102" y="4.6" text-anchor="middle">C</text><text x="136" y="4.6" text-anchor="middle">O</text><text x="-34" y="4.6" text-anchor="middle">H</text><text x="0" y="-29.4" text-anchor="middle">H</text><text x="0" y="38.6" text-anchor="middle">H</text><text x="34" y="-29.4" text-anchor="middle">H</text><text x="34" y="38.6" text-anchor="middle">H</text><text x="68" y="-29.4" text-anchor="middle">H</text><text x="68" y="38.6" text-anchor="middle">H</text><text x="102" y="-29.4" text-anchor="middle">O</text><text x="170" y="4.6" text-anchor="middle">H</text></g></svg></p><p>What is its <strong>empirical formula</strong>?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>2</sub>H<sub>4</sub>O</span>
        "",
        // EN: <span class="chem">CH<sub>2</sub>O</span>
        "",
      ],
      hints: [
        // EN: First count the atoms to get the molecular formula.
        "",
        // EN: Then divide every subscript by the same largest whole number.
        "",
      ],
      // EN: <p>Count the atoms in the drawing: 4 C, 8 H and 2 O. The molecular formula is <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></span>.</p><div class="worked__math">4 : 8 : 2 = 2 : 4 : 1 &nbsp; (divide by 2)</div><p>The empirical formula is <span class="chem">C<sub>2</sub>H<sub>4</sub>O</span>.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the molecular formula. The empirical formula is the simplest whole-number ratio, so divide every subscript by the largest number that divides all of them.
        "0": "",
        // EN (option B): Carbon and hydrogen were divided by 2, but oxygen was not. Every subscript must be divided by the same number.
        "1": "",
        // EN (option D): Carbon and hydrogen were divided by 4, but oxygen by 2. The ratio 4 : 8 : 2 can only be divided by 2.
        "3": "",
      },
    },

    // ── s3-2-q006 · mcq · exam · SL · Structure 3.2.1 · 1 mark
    "s3-2-q006": {
      // EN: <p>Which skeletal formula represents <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CHO</span>?</p>
      stem: "",
      options: [
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -43 106 53" width="106" height="53" role="img" aria-label="Skeletal formula. Line notation: CC(C)CC=O" data-g="S:C.C.C.C.C.O;0-1,1-2,1-3,3-4,4=5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M66.4 -11.1L82.5 -1.8"/><path d="M68.6 -14.9L84.7 -5.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="4.6" text-anchor="middle">O</text></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -17 117 47" width="117" height="47" role="img" aria-label="Skeletal formula. Line notation: CCC(C)CO" data-g="S:C.C.C.C.C.O1;0-1,1-2,2-3,2-4,4-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="4.6" text-anchor="middle">O</text><text x="95.3" y="4.6" text-anchor="start">H</text></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -17 106 47" width="106" height="47" role="img" aria-label="Skeletal formula. Line notation: CCC(C)C=O" data-g="S:C.C.C.C.C.O;0-1,1-2,2-3,2-4,4=5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M66.4 -11.1L82.5 -1.8"/><path d="M68.6 -14.9L84.7 -5.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="4.6" text-anchor="middle">O</text></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -49 99 79" width="99" height="79" role="img" aria-label="Skeletal formula. Line notation: CCC(C)C(=O)C" data-g="S:C.C.C.C.C.O.C;0-1,1-2,2-3,2-4,4=5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M69.7 -13L69.7 -31.5"/><path d="M65.3 -13L65.3 -31.5"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-34.4" text-anchor="middle">O</text></g></svg>
        "",
      ],
      hints: [
        // EN: Count the carbon atoms in the condensed formula. The skeletal formula must have the same number of line ends and corners.
        "",
        // EN: CHO means a carbon atom with a double bond to O and a single bond to H.
        "",
      ],
      // EN: <p>Read the condensed formula from left to right: <span class="chem">CH<sub>3</sub></span>, <span class="chem">CH<sub>2</sub></span>, then a CH that carries a <span class="chem">CH<sub>3</sub></span> branch, then CHO. That is 5 carbon atoms.</p><p>The correct drawing has a chain of four carbon atoms that ends in C=O, with a one-carbon branch on the carbon next to the C=O carbon.</p>
      solution: "",
      misconception: {
        // EN (option A): The branch is on the wrong carbon atom. In the condensed formula the CH that carries <span class="chem">CH<sub>3</sub></span> is joined directly to CHO.
        "0": "",
        // EN (option B): CHO is not C–OH. In CHO the carbon atom has a double bond to oxygen and a single bond to hydrogen.
        "1": "",
        // EN (option D): This drawing has six carbon atoms. CHO is at the end of a chain: its carbon holds H, not another carbon atom.
        "3": "",
      },
    },

    // ── s3-2-q007 · short · exam · SL · Structure 3.2.1 · 2 marks
    "s3-2-q007": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -49 76 79" width="76" height="79" role="img" aria-label="Skeletal formula. Line notation: CC(=O)C(C)C" data-g="S:C.C.O.C.C.C;0-1,1=2,1-3,3-4,3-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M24.7 -13L24.7 -31.5"/><path d="M20.3 -13L20.3 -31.5"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-34.4" text-anchor="middle">O</text></g></svg></p><p>Deduce (a) the molecular formula and (b) a condensed structural formula of the compound.</p>
      stem: "",
      hints: [
        // EN: Count carbon atoms at line ends and corners. Then add hydrogen atoms so that each carbon has four bonds.
        "",
        // EN: In a condensed formula a C=O in the middle of a chain is written CO. A branch is written in brackets after the carbon that carries it.
        "",
      ],
      // EN: <p>(a) <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span></p><p>(b) <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub></span> &nbsp;or&nbsp; <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)CH<sub>3</sub></span></p><p>There are 5 carbon atoms: three line ends, the C=O carbon and the branch-point carbon. The three line ends are <span class="chem">CH<sub>3</sub></span> groups (9 H) and the branch point is CH (1 H). The C=O carbon has no hydrogen atoms.</p>
      answer: "",
      markscheme: [
        // EN: (a) <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span> (elements in any order).
        "",
        // EN: (b) <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub></span> (accept <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)CH<sub>3</sub></span>, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCOCH<sub>3</sub></span> or <span class="chem">CH<sub>3</sub>C(O)CH(CH<sub>3</sub>)<sub>2</sub></span>). Do not accept a molecular formula here.
        "",
      ],
    },

    // ── s3-2-q008 · mcq · challenge · SL · Structure 3.2.1 · 1 mark
    "s3-2-q008": {
      // EN: <p>Paracetamol is a medicine that reduces pain. Its skeletal formula is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -62 162 84" width="162" height="84" role="img" aria-label="Skeletal formula. Line notation: CC(=O)NC1=CC=C(O)C=C1" data-g="S:C.C.O.N1.C.C.C.C.O1.C.C;0-1,1=2,1-3,3-4,4=5,5-6,6=7,7-8,7-9,9=10,4-10" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M24.7 -13L24.7 -31.5"/><path d="M20.3 -13L20.3 -31.5"/><path d="M22.5 -13L38.5 -3.7"/><path d="M51.5 -3.7L67.5 -13"/><path d="M67.5 -13L90.1 0"/><path d="M73.1 -14.6L88.7 -5.6"/><path d="M90.1 0L112.6 -13"/><path d="M112.6 -13L112.6 -39"/><path d="M108.4 -17L108.4 -35"/><path d="M112.6 -39L128.6 -48.2"/><path d="M112.6 -39L90.1 -52"/><path d="M90.1 -52L67.5 -39"/><path d="M88.7 -46.4L73.1 -37.4"/><path d="M67.5 -13L67.5 -39"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-34.4" text-anchor="middle">O</text><text x="45" y="4.6" text-anchor="middle">N</text><text x="45" y="17.6" text-anchor="middle">H</text><text x="135.1" y="-47.4" text-anchor="middle">O</text><text x="140.3" y="-47.4" text-anchor="start">H</text></g></svg></p><p>What is the molecular formula of paracetamol?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C<sub>8</sub>H<sub>5</sub>NO<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>7</sub>H<sub>9</sub>NO<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>8</sub>H<sub>9</sub>NO<sub>2</sub></span>
        "",
        // EN: <span class="chem">C<sub>8</sub>H<sub>15</sub>NO<sub>2</sub></span>
        "",
      ],
      hints: [
        // EN: Count carbon atoms: the six corners of the ring, the C=O carbon and the line end.
        "",
        // EN: Ring carbons that carry N or O have no hydrogen atoms. The other four ring carbons have one each.
        "",
        // EN: Do not forget the hydrogen atoms written in NH and OH.
        "",
      ],
      // EN: <p>Carbon: 6 in the ring + the C=O carbon + the <span class="chem">CH<sub>3</sub></span> line end = 8 C.</p><div class="worked__math"><span class="chem">CH<sub>3</sub></span> = 3 H</div><div class="worked__math">N–H = 1 H</div><div class="worked__math">four ring C–H = 4 H</div><div class="worked__math">O–H = 1 H</div><div class="worked__math">total = 3 + 1 + 4 + 1 = 9 H</div><p>There is 1 N atom and there are 2 O atoms. The molecular formula is <span class="chem">C<sub>8</sub>H<sub>9</sub>NO<sub>2</sub></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): The four hydrogen atoms on the ring are missing. A ring carbon with only three bonds drawn (counting the double bond as two) holds one hydrogen atom.
        "0": "",
        // EN (option B): One carbon atom is missing. The free line end on the left is a <span class="chem">CH<sub>3</sub></span> group.
        "1": "",
        // EN (option D): This treats the ring as if it had only single bonds. Each ring carbon is part of one double bond, so it has room for at most one hydrogen atom.
        "3": "",
      },
    },

    // ── s3-2-q009 · mcq · foundation · SL · Structure 3.2.2 · 1 mark
    "s3-2-q009": {
      // EN: <p>Ethanol is <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH</span>. What is the name of the <strong>functional group</strong> –OH in ethanol?</p>
      stem: "",
      options: [
        // EN: Alcohol
        "",
        // EN: Hydroxide
        "",
        // EN: Hydroxyl
        "",
        // EN: Carboxyl
        "",
      ],
      hints: [
        // EN: A class name (such as alcohol) and a functional group name are different things. Which one does the question ask for?
        "",
      ],
      // EN: <p>The group –OH joined to a carbon atom by a covalent bond is the <strong>hydroxyl</strong> group. Compounds that contain it belong to the class called alcohols.</p><p>Exam point: if the question says “functional group”, write hydroxyl. If it says “class” or “homologous series”, write alcohol.</p>
      solution: "",
      misconception: {
        // EN (option A): “Alcohol” is the name of the class of compound (the homologous series). The question asks for the name of the group, and markschemes do not accept the class name.
        "0": "",
        // EN (option B): Hydroxide is the ion <span class="chem">OH</span><sup>−</sup> in ionic compounds such as NaOH. In ethanol the OH is joined to carbon by a covalent bond.
        "1": "",
        // EN (option D): Carboxyl is the group –COOH, where the OH is on a carbon that also has a C=O double bond.
        "3": "",
      },
    },

    // ── s3-2-q010 · mcq · foundation · SL · Structure 3.2.2 · 1 mark
    "s3-2-q010": {
      // EN: <p>Which hydrocarbon is <strong>unsaturated</strong>?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span>
        "",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>3</sub></span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub></span>
        "",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>4</sub>C</span>
        "",
      ],
      hints: [
        // EN: Unsaturated means that the molecule contains at least one carbon–carbon double or triple bond.
        "",
      ],
      // EN: <p>A saturated compound has only single bonds between its carbon atoms. An unsaturated compound has at least one carbon–carbon double bond or triple bond.</p><p><span class="chem">CH<sub>3</sub>CH=CHCH<sub>3</sub></span> has a C=C double bond, so it is unsaturated. The other three are alkanes.</p>
      solution: "",
      misconception: {
        // EN (option A): This is butane. All its carbon–carbon bonds are single bonds, so it is saturated.
        "0": "",
        // EN (option B): A branch does not make a molecule unsaturated. Every carbon–carbon bond here is a single bond.
        "1": "",
        // EN (option D): This molecule is highly branched, but it has only single bonds between carbon atoms. It is saturated.
        "3": "",
      },
    },

    // ── s3-2-q011 · mcq · foundation · SL · Structure 3.2.2 · 1 mark
    "s3-2-q011": {
      // EN: <p>The skeletal formula of propanal is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -23 83 27" width="83" height="27" role="img" aria-label="Skeletal formula. Line notation: CCC=O" data-g="S:C.C.C.O;0-1,1-2,2=3" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M46.1 1.9L62.2 -7.3"/><path d="M43.9 -1.9L60 -11.2"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-8.4" text-anchor="middle">O</text></g></svg></p><p>What is the name of the <strong>functional group</strong> in propanal?</p>
      stem: "",
      options: [
        // EN: Aldehyde
        "",
        // EN: Carbonyl
        "",
        // EN: Carboxyl
        "",
        // EN: Alkoxy
        "",
      ],
      hints: [
        // EN: The group is C=O. Aldehydes and ketones both contain it.
        "",
      ],
      // EN: <p>The C=O group is the <strong>carbonyl</strong> group. Aldehydes have it at the end of the chain. Ketones have it in the middle of the chain.</p><p>Aldehyde is the name of the class, so it does not answer a question about the functional group.</p>
      solution: "",
      misconception: {
        // EN (option A): “Aldehyde” is the class of compound. The functional group in an aldehyde has a different name, and the class name does not score when the group is asked for.
        "0": "",
        // EN (option C): Carboxyl is –COOH. It needs an OH on the same carbon as the C=O. Propanal has no OH.
        "2": "",
        // EN (option D): Alkoxy is an oxygen atom with single bonds to two carbon atoms (C–O–C). Here the oxygen has a double bond to one carbon.
        "3": "",
      },
    },

    // ── s3-2-q012 · mcq · exam · SL · Structure 3.2.2 · 1 mark
    "s3-2-q012": {
      // EN: <p>A compound has the condensed formula <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CONH<sub>2</sub></span>. Which row gives the name of its functional group and the name of its class?</p>
      stem: "",
      options: [
        // EN: Functional group: amino. Class: amine.
        "",
        // EN: Functional group: amido. Class: amide.
        "",
        // EN: Functional group: amide. Class: amido.
        "",
        // EN: Functional group: carbonyl. Class: ketone.
        "",
      ],
      hints: [
        // EN: Look at what is joined to the C=O carbon: a carbon chain on one side and <span class="chem">NH<sub>2</sub></span> on the other.
        "",
        // EN: One word in each row is a group name and the other is a class name. Check they are in the right columns.
        "",
      ],
      // EN: <p><span class="chem">CONH<sub>2</sub></span> is a C=O with a nitrogen atom on the same carbon. This is the <strong>amido</strong> group. Compounds with this group are <strong>amides</strong>.</p><p>Compare: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub></span> has an amino group and is an amine.</p>
      solution: "",
      misconception: {
        // EN (option A): An amino group is <span class="chem">NH<sub>2</sub></span> on a carbon that has no C=O. Here the nitrogen is joined directly to the C=O carbon, which makes a different group.
        "0": "",
        // EN (option C): The two words are the wrong way round. Group names often end in -o or -yl (amino, amido, hydroxyl). Class names are the family names (amine, amide, alcohol).
        "2": "",
        // EN (option D): A ketone has C=O between two carbon atoms. Here the C=O carbon is joined to nitrogen, so the C=O and the <span class="chem">NH<sub>2</sub></span> count together as one group.
        "3": "",
      },
    },

    // ── s3-2-q013 · multi · exam · SL · Structure 3.2.2 · 1 mark
    "s3-2-q013": {
      // EN: <p>Aspirin is a common medicine. Its skeletal formula is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-22.2 -88 139 131" width="139" height="131" role="img" aria-label="Skeletal formula. Line notation: OC(=O)C1=CC=CC=C1OC(C)=O" data-g="S:O1.C.O.C.C.C.C.C.C.O.C.C.O;0-1,1=2,1-3,3=4,4-5,5=6,6-7,7=8,3-8,8-9,9-10,10-11,10=12" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6.5 -3.7L22.5 -13"/><path d="M24.7 -13L24.7 -31.5"/><path d="M20.3 -13L20.3 -31.5"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M49.2 4L49.2 22"/><path d="M45 26L67.5 39"/><path d="M67.5 39L90.1 26"/><path d="M68.9 33.4L84.5 24.4"/><path d="M90.1 26L90.1 0"/><path d="M90.1 0L67.5 -13"/><path d="M84.5 1.6L68.9 -7.4"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L67.5 -31.5"/><path d="M74 -42.8L90.1 -52"/><path d="M90.1 -52L112.6 -39"/><path d="M92.3 -52L92.3 -70.5"/><path d="M87.9 -52L87.9 -70.5"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="0" y="4.6" text-anchor="middle">O</text><text x="-5.2" y="4.6" text-anchor="end">H</text><text x="22.5" y="-34.4" text-anchor="middle">O</text><text x="67.5" y="-34.4" text-anchor="middle">O</text><text x="90.1" y="-73.4" text-anchor="middle">O</text></g></svg></p><p>Which functional groups are present in aspirin? Select <strong>all</strong> that apply.</p>
      stem: "",
      options: [
        // EN: Carboxyl
        "",
        // EN: Ester
        "",
        // EN: Phenyl
        "",
        // EN: Hydroxyl
        "",
        // EN: Alkoxy
        "",
      ],
      hints: [
        // EN: Look at each oxygen atom together with its neighbours before you name a group.
        "",
        // EN: C(=O)–OH is one group. C(=O)–O–C is one group.
        "",
      ],
      // EN: <p>Aspirin has three functional groups.</p><ul><li><strong>Phenyl</strong>: the six-carbon ring with alternating double bonds.</li><li><strong>Carboxyl</strong>: the C(=O)OH on the ring.</li><li><strong>Ester</strong>: the C(=O)–O–C link, with the O joined to the ring.</li></ul><p>There is no separate hydroxyl group and no alkoxy group, because each of those oxygen atoms is next to a C=O.</p>
      solution: "",
      misconception: {
        // EN (option D): The only OH in aspirin is on a carbon that also has a C=O. Together they make one carboxyl group. It is not counted as a separate hydroxyl group.
        "3": "",
        // EN (option E): Alkoxy is C–O–C with no C=O next to the oxygen. In aspirin the C–O–C oxygen is next to a C=O, so it is part of an ester group.
        "4": "",
      },
    },

    // ── s3-2-q014 · mcq · challenge · SL · Structure 3.2.2 · 1 mark
    "s3-2-q014": {
      // EN: <p>The skeletal formulas of two biologically active compounds, X and Y, are shown.</p><p data-i18n="off"><span style="display:inline-block;white-space:nowrap;margin:0 1.5em 0.4em 0"><strong>X</strong>&nbsp; <svg class="mol mol--skeletal" viewBox="-4 -62 162 84" width="162" height="84" role="img" aria-label="Skeletal formula. Line notation: CC(=O)NC1=CC=C(O)C=C1" data-g="S:C.C.O.N1.C.C.C.C.O1.C.C;0-1,1=2,1-3,3-4,4=5,5-6,6=7,7-8,7-9,9=10,4-10" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M24.7 -13L24.7 -31.5"/><path d="M20.3 -13L20.3 -31.5"/><path d="M22.5 -13L38.5 -3.7"/><path d="M51.5 -3.7L67.5 -13"/><path d="M67.5 -13L90.1 0"/><path d="M73.1 -14.6L88.7 -5.6"/><path d="M90.1 0L112.6 -13"/><path d="M112.6 -13L112.6 -39"/><path d="M108.4 -17L108.4 -35"/><path d="M112.6 -39L128.6 -48.2"/><path d="M112.6 -39L90.1 -52"/><path d="M90.1 -52L67.5 -39"/><path d="M88.7 -46.4L73.1 -37.4"/><path d="M67.5 -13L67.5 -39"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-34.4" text-anchor="middle">O</text><text x="45" y="4.6" text-anchor="middle">N</text><text x="45" y="17.6" text-anchor="middle">H</text><text x="135.1" y="-47.4" text-anchor="middle">O</text><text x="140.3" y="-47.4" text-anchor="start">H</text></g></svg></span> <span style="display:inline-block;white-space:nowrap;margin:0 1.5em 0.4em 0"><strong>Y</strong>&nbsp; <svg class="mol mol--skeletal" viewBox="-22.2 -62 180 72" width="180" height="72" role="img" aria-label="Skeletal formula. Line notation: NCCC1=CC=C(O)C=C1" data-g="S:N2.C.C.C.C.C.C.O1.C.C;0-1,1-2,2-3,3=4,4-5,5=6,6-7,6-8,8=9,3-9" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6.5 -3.7L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/><path d="M73.1 -14.6L88.7 -5.6"/><path d="M90.1 0L112.6 -13"/><path d="M112.6 -13L112.6 -39"/><path d="M108.4 -17L108.4 -35"/><path d="M112.6 -39L128.6 -48.2"/><path d="M112.6 -39L90.1 -52"/><path d="M90.1 -52L67.5 -39"/><path d="M88.7 -46.4L73.1 -37.4"/><path d="M67.5 -13L67.5 -39"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="0" y="4.6" text-anchor="middle">N</text><text x="-5.2" y="4.6" text-anchor="end">H<tspan font-size="9.5" dy="3">2</tspan></text><text x="135.1" y="-47.4" text-anchor="middle">O</text><text x="140.3" y="-47.4" text-anchor="start">H</text></g></svg></span></p><p>Which functional groups are present in <strong>both</strong> X and Y?</p>
      stem: "",
      options: [
        // EN: Amino, hydroxyl and phenyl
        "",
        // EN: Hydroxyl and phenyl
        "",
        // EN: Alcohol and benzene
        "",
        // EN: Carbonyl, hydroxyl and phenyl
        "",
      ],
      hints: [
        // EN: List the groups in X first, then the groups in Y. Then compare the two lists.
        "",
        // EN: Check what each nitrogen atom is joined to. Is there a C=O on the next carbon?
        "",
      ],
      // EN: <p>X contains hydroxyl (OH on the ring), phenyl (the ring) and amido (N joined to C=O).</p><p>Y contains hydroxyl, phenyl and amino (<span class="chem">NH<sub>2</sub></span> on a carbon with no C=O).</p><p>The groups in both are <strong>hydroxyl and phenyl</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): Only Y has an amino group. In X the nitrogen is joined to a C=O carbon, so X has an amido group.
        "0": "",
        // EN (option C): These are not names of functional groups. Alcohol is a class and benzene is a compound. The group names are hydroxyl and phenyl.
        "2": "",
        // EN (option D): Y has no C=O at all. In X the C=O is part of the amido group, so it is not named as a separate carbonyl group.
        "3": "",
      },
    },

    // ── s3-2-q015 · short · exam · SL · Structure 3.2.2 · 2 marks
    "s3-2-q015": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -23 117 33" width="117" height="33" role="img" aria-label="Skeletal formula. Line notation: COCCN" data-g="S:C.O.C.C.N2;0-1,1-2,2-3,3-4" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L16 -9.2"/><path d="M29 -9.2L45 0"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-8.4" text-anchor="middle">O</text><text x="90.1" y="4.6" text-anchor="middle">N</text><text x="95.3" y="4.6" text-anchor="start">H<tspan font-size="9.5" dy="3">2</tspan></text></g></svg></p><p>State the names of the <strong>two</strong> functional groups in this compound.</p>
      stem: "",
      hints: [
        // EN: Group names are asked for, not class names.
        "",
        // EN: One group is an oxygen atom between two carbon atoms. The other is <span class="chem">NH<sub>2</sub></span>.
        "",
      ],
      // EN: <p>Alkoxy and amino.</p><p>The oxygen atom has single bonds to two carbon atoms (C–O–C). This is an alkoxy group. The class of compound with this group is the ethers.</p><p>The <span class="chem">NH<sub>2</sub></span> on a carbon atom is an amino group. The class of compound is the amines.</p>
      answer: "",
      markscheme: [
        // EN: Alkoxy. (Do not award the mark for “ether”: that is the class name.)
        "",
        // EN: Amino. (Accept “amine”, but amino is the safe answer.)
        "",
      ],
    },

    // ── s3-2-q016 · mcq · challenge · SL · Structure 3.2.2 · 1 mark
    "s3-2-q016": {
      // EN: <p>The skeletal formula of a compound is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-22.2 -23 162 59" width="162" height="59" role="img" aria-label="Skeletal formula. Line notation: NCC(=O)CCOC" data-g="S:N2.C.C.O.C.C.O.C;0-1,1-2,2=3,2-4,4-5,5-6,6-7" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6.5 -3.7L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M42.8 0L42.8 18.5"/><path d="M47.2 0L47.2 18.5"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/><path d="M90.1 0L106.1 -9.2"/><path d="M119.1 -9.2L135.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="0" y="4.6" text-anchor="middle">N</text><text x="-5.2" y="4.6" text-anchor="end">H<tspan font-size="9.5" dy="3">2</tspan></text><text x="45" y="30.6" text-anchor="middle">O</text><text x="112.6" y="-8.4" text-anchor="middle">O</text></g></svg></p><p>Which list names <strong>all</strong> the functional groups in this compound?</p>
      stem: "",
      options: [
        // EN: Amido and alkoxy
        "",
        // EN: Amino, carbonyl and ester
        "",
        // EN: Amino, carbonyl and alkoxy
        "",
        // EN: Amine, ketone and ether
        "",
      ],
      hints: [
        // EN: For N and for each O, check the atoms it is bonded to directly.
        "",
        // EN: Amido and ester groups need the N or O to be on the C=O carbon itself.
        "",
      ],
      // EN: <p>Work from left to right.</p><ul><li><span class="chem">NH<sub>2</sub></span> on a <span class="chem">CH<sub>2</sub></span> carbon: <strong>amino</strong>.</li><li>C=O with a carbon atom on each side: <strong>carbonyl</strong>.</li><li>O with single bonds to two carbon atoms, and no C=O next to it: <strong>alkoxy</strong>.</li></ul><p>Amine, ketone and ether are the matching class names.</p>
      solution: "",
      misconception: {
        // EN (option A): In an amido group the nitrogen is bonded directly to the C=O carbon. Here there is a <span class="chem">CH<sub>2</sub></span> between N and C=O, so they are two separate groups.
        "0": "",
        // EN (option B): In an ester the C–O–C oxygen is bonded directly to the C=O carbon. Here two <span class="chem">CH<sub>2</sub></span> groups separate them.
        "1": "",
        // EN (option D): These are the correct classes, but the question asks for functional groups. Class names do not score when group names are asked for.
        "3": "",
      },
    },

    // ── s3-2-q017 · mcq · foundation · SL · Structure 3.2.3 · 1 mark
    "s3-2-q017": {
      // EN: <p>Which statement is correct for the members of one homologous series?</p>
      stem: "",
      options: [
        // EN: They have the same molecular formula.
        "",
        // EN: Each member differs from the next by a <span class="chem">CH<sub>2</sub></span> unit.
        "",
        // EN: They have the same boiling point.
        "",
        // EN: They have different functional groups.
        "",
      ],
      hints: [
        // EN: Compare methane <span class="chem">CH<sub>4</sub></span>, ethane <span class="chem">C<sub>2</sub>H<sub>6</sub></span> and propane <span class="chem">C<sub>3</sub>H<sub>8</sub></span>. What is added each time?
        "",
      ],
      // EN: <p>A homologous series is a family of compounds with the same functional group. Each member differs from the next by a common unit, <span class="chem">CH<sub>2</sub></span>.</p><p>Members share one general formula and have similar chemical properties. Their physical properties show a gradual trend.</p>
      solution: "",
      misconception: {
        // EN (option A): Compounds with the same molecular formula are isomers. Members of a homologous series have the same <em>general</em> formula, but different molecular formulas.
        "0": "",
        // EN (option C): Physical properties change gradually along the series. For example, the boiling point rises as the chain gets longer.
        "2": "",
        // EN (option D): All members of a homologous series have the same functional group. That is why their chemical properties are similar.
        "3": "",
      },
    },

    // ── s3-2-q018 · mcq · foundation · SL · Structure 3.2.3 · 1 mark
    "s3-2-q018": {
      // EN: <p>What is the general formula of the alkenes (non-cyclic, with one C=C double bond)?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub></span>
        "",
        // EN: <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub></span>
        "",
        // EN: <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub></span>
        "",
        // EN: <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>+1</sub></span>
        "",
      ],
      hints: [
        // EN: Test each formula with ethene, <span class="chem">C<sub>2</sub>H<sub>4</sub></span>, and propene, <span class="chem">C<sub>3</sub>H<sub>6</sub></span>.
        "",
      ],
      // EN: <p>Ethene is <span class="chem">C<sub>2</sub>H<sub>4</sub></span> and propene is <span class="chem">C<sub>3</sub>H<sub>6</sub></span>. In each one the number of H atoms is twice the number of C atoms.</p><p>The general formula is <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the general formula of the alkanes. An alkene has two hydrogen atoms fewer than the alkane with the same number of carbon atoms.
        "0": "",
        // EN (option C): This is the general formula of the alkynes, which have one carbon–carbon triple bond.
        "2": "",
        // EN (option D): This is an alkyl group, such as <span class="chem">CH<sub>3</sub></span> or <span class="chem">C<sub>2</sub>H<sub>5</sub></span>. It is part of a molecule, not a complete molecule.
        "3": "",
      },
    },

    // ── s3-2-q019 · mcq · exam · SL · Structure 3.2.3 · 1 mark
    "s3-2-q019": {
      // EN: <p>Which compound is in the same homologous series as ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH</span>?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>OCH<sub>3</sub></span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CHO</span>
        "",
        // EN: <span class="chem">HOCH<sub>2</sub>CH<sub>2</sub>OH</span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>
        "",
      ],
      hints: [
        // EN: Members of one series have the same functional group.
        "",
        // EN: They differ only by one or more <span class="chem">CH<sub>2</sub></span> units.
        "",
      ],
      // EN: <p>Ethanol has one hydroxyl group on a saturated carbon chain. <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span> (butan-1-ol) also has one hydroxyl group, and it has two more <span class="chem">CH<sub>2</sub></span> units.</p><p>Both fit the general formula <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>+1</sub>OH</span>.</p>
      solution: "",
      misconception: {
        // EN (option A): This has the same molecular formula as ethanol, so it is an isomer. Its functional group is alkoxy (C–O–C), so it is an ether, not an alcohol.
        "0": "",
        // EN (option B): This is an aldehyde. Its functional group is carbonyl (C=O), not hydroxyl.
        "1": "",
        // EN (option C): This has two hydroxyl groups. It differs from ethanol by an extra O atom, not by <span class="chem">CH<sub>2</sub></span> units.
        "2": "",
      },
    },

    // ── s3-2-q020 · numeric · exam · SL · Structure 3.2.3 · 1 mark
    "s3-2-q020": {
      // EN: <p>The first three members of the carboxylic acid homologous series are <span class="chem">CH<sub>2</sub>O<sub>2</sub></span>, <span class="chem">C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></span> and <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></span>.</p><p>How many <strong>hydrogen</strong> atoms are there in one molecule of the member with six carbon atoms?</p>
      stem: "",
      hints: [
        // EN: What changes from one member to the next?
        "",
        // EN: Each extra carbon atom brings two extra hydrogen atoms. Write the general formula.
        "",
      ],
      // EN: <p>Each member has one more <span class="chem">CH<sub>2</sub></span> than the one before. The number of H atoms is always twice the number of C atoms, and there are always 2 O atoms.</p><div class="worked__math">general formula: <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O<sub>2</sub></span></div><div class="worked__math">n = 6: &nbsp; H = 2 × 6 = 12</div><p>The member with six carbon atoms is <span class="chem">C<sub>6</sub>H<sub>12</sub>O<sub>2</sub></span> (hexanoic acid).</p>
      solution: "",
      // EN: hydrogen atoms
      unit: "",
    },

    // ── s3-2-q021 · multi · exam · SL · Structure 3.2.3 · 1 mark
    "s3-2-q021": {
      // EN: <p>Which statements describe the members of a homologous series? Select <strong>all</strong> that apply.</p>
      stem: "",
      options: [
        // EN: They can be described by the same general formula.
        "",
        // EN: They have similar chemical properties.
        "",
        // EN: They have the same molecular formula.
        "",
        // EN: They show a gradual change in physical properties.
        "",
        // EN: They have the same molar mass.
        "",
      ],
      hints: [
        // EN: Think about what stays the same along the series (the functional group) and what changes (the chain length).
        "",
      ],
      // EN: <p>Members of a homologous series:</p><ul><li>have the same functional group, so they have similar chemical properties;</li><li>fit the same general formula;</li><li>differ from the next member by <span class="chem">CH<sub>2</sub></span>;</li><li>show a gradual trend in physical properties such as boiling point.</li></ul><p>Their molecular formulas and molar masses are different.</p>
      solution: "",
      misconception: {
        // EN (option C): Compounds with the same molecular formula are isomers. Members of a homologous series have different molecular formulas, such as <span class="chem">CH<sub>4</sub></span>, <span class="chem">C<sub>2</sub>H<sub>6</sub></span> and <span class="chem">C<sub>3</sub>H<sub>8</sub></span>.
        "2": "",
        // EN (option E): Each member has one more <span class="chem">CH<sub>2</sub></span> than the last, so the molar mass rises by about 14 <span class="unit">g mol-1</span> each time.
        "4": "",
      },
    },

    // ── s3-2-q022 · multi · challenge · SL · Structure 3.2.3 · 1 mark
    "s3-2-q022": {
      // EN: <p>Which homologous series have the general formula <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O</span>? Consider saturated, non-cyclic members only. Select <strong>all</strong> that apply.</p>
      stem: "",
      options: [
        // EN: Aldehydes
        "",
        // EN: Ketones
        "",
        // EN: Alcohols
        "",
        // EN: Ethers
        "",
        // EN: Carboxylic acids
        "",
      ],
      hints: [
        // EN: Write the molecular formula of one small member of each series and test it.
        "",
        // EN: A C=O double bond removes two hydrogen atoms compared with a molecule that has only single bonds.
        "",
      ],
      // EN: <p>Test one member of each series.</p><div class="worked__math">propanal <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO</span> = <span class="chem">C<sub>3</sub>H<sub>6</sub>O</span></div><div class="worked__math">propanone <span class="chem">CH<sub>3</sub>COCH<sub>3</sub></span> = <span class="chem">C<sub>3</sub>H<sub>6</sub>O</span></div><div class="worked__math">ethanol <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH</span> = <span class="chem">C<sub>2</sub>H<sub>6</sub>O</span></div><div class="worked__math">methoxymethane <span class="chem">CH<sub>3</sub>OCH<sub>3</sub></span> = <span class="chem">C<sub>2</sub>H<sub>6</sub>O</span></div><div class="worked__math">ethanoic acid <span class="chem">CH<sub>3</sub>COOH</span> = <span class="chem">C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></span></div><p>Only the aldehydes and the ketones fit <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O</span>. This is why an aldehyde and a ketone with the same number of carbon atoms are functional group isomers.</p>
      solution: "",
      misconception: {
        // EN (option C): Test with ethanol, <span class="chem">C<sub>2</sub>H<sub>6</sub>O</span>. Alcohols have only single bonds, so they fit <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O</span>.
        "2": "",
        // EN (option D): Test with methoxymethane, <span class="chem">CH<sub>3</sub>OCH<sub>3</sub></span>, which is <span class="chem">C<sub>2</sub>H<sub>6</sub>O</span>. Ethers fit <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O</span>, the same as alcohols.
        "3": "",
        // EN (option E): Carboxylic acids have two oxygen atoms. Ethanoic acid is <span class="chem">C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></span>, so the series fits <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O<sub>2</sub></span>.
        "4": "",
      },
    },

    // ── s3-2-q023 · mcq · foundation · SL · Structure 3.2.4 · 1 mark
    "s3-2-q023": {
      // EN: <p>How does the boiling point change from methane to hexane in the alkane homologous series, and why?</p>
      stem: "",
      options: [
        // EN: It increases, because the covalent bonds in the molecules become stronger.
        "",
        // EN: It increases, because the London (dispersion) forces between the molecules become stronger.
        "",
        // EN: It decreases, because larger molecules are held together more weakly.
        "",
        // EN: It stays the same, because all alkanes have the same type of bonding.
        "",
      ],
      hints: [
        // EN: When a liquid boils, the molecules move apart but stay whole.
        "",
        // EN: Each extra <span class="chem">CH<sub>2</sub></span> adds 8 electrons to the molecule.
        "",
      ],
      // EN: <p>The boiling point <strong>increases</strong> along the series. Each member has one more <span class="chem">CH<sub>2</sub></span>, so it has more electrons and a larger surface.</p><p>This makes the London (dispersion) forces between the molecules stronger. More energy is needed to separate the molecules.</p>
      solution: "",
      misconception: {
        // EN (option A): Boiling does not break the covalent bonds inside molecules. It separates whole molecules from each other, so the forces <em>between</em> molecules matter.
        "0": "",
        // EN (option C): Larger molecules have more electrons, so the forces between them are stronger, not weaker.
        "2": "",
        // EN (option D): The type of force is the same, but its strength is not. More electrons give stronger London (dispersion) forces.
        "3": "",
      },
    },

    // ── s3-2-q024 · short · exam · SL · Structure 3.2.4 · 2 marks
    "s3-2-q024": {
      // EN: <p>The table shows the boiling points of the first six alkanes.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Boiling points of the straight-chain alkanes</caption><thead><tr><th scope="col">Alkane</th><th class="num" scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">methane, <span class="chem">CH<sub>4</sub></span></th><td class="num">−161</td></tr><tr><th scope="row">ethane, <span class="chem">C<sub>2</sub>H<sub>6</sub></span></th><td class="num">−89</td></tr><tr><th scope="row">propane, <span class="chem">C<sub>3</sub>H<sub>8</sub></span></th><td class="num">−42</td></tr><tr><th scope="row">butane, <span class="chem">C<sub>4</sub>H<sub>10</sub></span></th><td class="num">−0.5</td></tr><tr><th scope="row">pentane, <span class="chem">C<sub>5</sub>H<sub>12</sub></span></th><td class="num">36</td></tr><tr><th scope="row">hexane, <span class="chem">C<sub>6</sub>H<sub>14</sub></span></th><td class="num">69</td></tr></tbody></table></div><p>Explain the trend in boiling point shown by the data.</p>
      stem: "",
      hints: [
        // EN: Name the force that acts between alkane molecules.
        "",
        // EN: Say what changes in the molecule, how that changes the force, and what that means for the energy needed.
        "",
      ],
      // EN: <p>The boiling point increases as the number of carbon atoms increases. Each molecule has more electrons (a greater molar mass and a larger surface area) than the one before, so the London (dispersion) forces between the molecules are stronger. More energy is needed to overcome these forces and separate the molecules.</p>
      answer: "",
      markscheme: [
        // EN: More electrons / greater molar mass / larger surface area (as the chain length increases), so stronger London (dispersion) forces between molecules.
        "",
        // EN: More energy is needed to overcome the intermolecular forces / to separate the molecules. (Do not accept any answer that says covalent bonds are broken.)
        "",
      ],
    },

    // ── s3-2-q025 · order · exam · SL · Structure 3.2.4 · 1 mark
    "s3-2-q025": {
      // EN: <p>These four compounds have similar molar masses (58 to 60 <span class="unit">g mol-1</span>). Put them in order of <strong>increasing boiling point</strong> (lowest boiling point first).</p>
      stem: "",
      options: [
        // EN: Butane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span>
        "",
        // EN: Propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO</span>
        "",
        // EN: Propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>
        "",
        // EN: Ethanoic acid, <span class="chem">CH<sub>3</sub>COOH</span>
        "",
      ],
      hints: [
        // EN: The molar masses are similar, so the London (dispersion) forces are similar. Look for other forces.
        "",
        // EN: Which molecules are polar? Which have an H atom bonded to O, so that they can form hydrogen bonds with each other?
        "",
      ],
      // EN: <p>The London (dispersion) forces are similar, so the functional group decides the order.</p><ul><li>Butane, −0.5 °C: London (dispersion) forces only.</li><li>Propanal, 48 °C: the C=O group is polar, so there are also dipole–dipole forces.</li><li>Propan-1-ol, 97 °C: the O–H group forms hydrogen bonds.</li><li>Ethanoic acid, 118 °C: hydrogen bonds, and more of them.</li></ul><p>Ethanoic acid is higher than propan-1-ol because the carboxyl group forms more hydrogen bonds: both its C=O and its O–H take part.</p>
      solution: "",
    },

    // ── s3-2-q026 · mcq · exam · SL · Structure 3.2.4 · 1 mark
    "s3-2-q026": {
      // EN: <p>Propane and ethanol have similar molar masses (44.11 and 46.08 <span class="unit">g mol-1</span>). Each molecule has 26 electrons.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Boiling points of two compounds</caption><thead><tr><th scope="col">Compound</th><th class="num" scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">propane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub></span></th><td class="num">−42</td></tr><tr><th scope="row">ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH</span></th><td class="num">78</td></tr></tbody></table></div><p>Which statement explains why the boiling point of ethanol is much higher?</p>
      stem: "",
      options: [
        // EN: The O–H covalent bond in ethanol is stronger than the C–H bonds in propane.
        "",
        // EN: Ethanol molecules form hydrogen bonds with each other.
        "",
        // EN: Ethanol has much stronger London (dispersion) forces than propane.
        "",
        // EN: Ethanol contains ions, and propane does not.
        "",
      ],
      hints: [
        // EN: Boiling separates molecules from each other. Which forces act between ethanol molecules but not between propane molecules?
        "",
      ],
      // EN: <p>Propane is non-polar. Only London (dispersion) forces act between its molecules.</p><p>Ethanol has a hydroxyl group. The H atom bonded to O in one molecule is attracted to a lone pair on the O atom of another molecule. This is hydrogen bonding, which is stronger than London (dispersion) forces between molecules of this size. More energy is needed to separate the molecules.</p>
      solution: "",
      misconception: {
        // EN (option A): No covalent bond is broken when a liquid boils. The strength of bonds inside the molecule does not decide the boiling point.
        "0": "",
        // EN (option C): The two molecules have the same number of electrons, so their London (dispersion) forces are similar. This cannot explain a difference of 120 °C.
        "2": "",
        // EN (option D): Ethanol is a molecular covalent compound. The hydroxyl group is not a hydroxide ion.
        "3": "",
      },
    },

    // ── s3-2-q027 · short · challenge · SL · Structure 3.2.4 · 3 marks
    "s3-2-q027": {
      // EN: <p>The three compounds in the table are structural isomers with the molecular formula <span class="chem">C<sub>5</sub>H<sub>12</sub></span>.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Boiling points of three isomers</caption><thead><tr><th scope="col">Compound</th><th class="num" scope="col">Boiling point / °C</th></tr></thead><tbody><tr><th scope="row">pentane</th><td class="num">36</td></tr><tr><th scope="row">2-methylbutane</th><td class="num">28</td></tr><tr><th scope="row">2,2-dimethylpropane</th><td class="num">9.5</td></tr></tbody></table></div><p>Pentane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span>, has no branches. 2-methylbutane, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>3</sub></span>, has one branch. 2,2-dimethylpropane, <span class="chem">(CH<sub>3</sub>)<sub>4</sub>C</span>, has two branches.</p><p>Explain why the boiling points are different, even though the three compounds have the same molar mass.</p>
      stem: "",
      hints: [
        // EN: The number of electrons is the same in all three, so look at the shape of each molecule.
        "",
        // EN: How well can long, straight molecules lie next to each other, compared with ball-shaped molecules?
        "",
      ],
      // EN: <p>All three molecules have the same number of electrons, and all three are non-polar, so the only forces between the molecules are London (dispersion) forces. A more branched molecule is more compact (closer to a sphere). It has a smaller surface area in contact with neighbouring molecules. The London (dispersion) forces are therefore weaker, and less energy is needed to separate the molecules. So the boiling point falls as branching increases.</p>
      answer: "",
      markscheme: [
        // EN: The only intermolecular forces are London (dispersion) forces (in all three compounds) / the number of electrons is the same.
        "",
        // EN: More branching gives a more compact / more spherical molecule with a smaller surface area (less contact between molecules).
        "",
        // EN: So the London (dispersion) forces are weaker and less energy is needed to separate the molecules (accept the reverse argument for the straight chain).
        "",
      ],
    },

    // ── s3-2-q028 · mcq · foundation · SL · Structure 3.2.5 · 1 mark
    "s3-2-q028": {
      // EN: <p>What is the IUPAC name of <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>?</p>
      stem: "",
      options: [
        // EN: Butan-4-ol
        "",
        // EN: Butanal
        "",
        // EN: Butan-1-ol
        "",
        // EN: Butanol
        "",
      ],
      hints: [
        // EN: Count the carbon atoms in the chain to get the stem.
        "",
        // EN: Number the chain so that the carbon with OH has the lowest number, and put that number before -ol.
        "",
      ],
      // EN: <p>Step 1: the longest chain has 4 carbon atoms, so the stem is but-. All bonds between carbon atoms are single, so it is butan-.</p><p>Step 2: the functional group is hydroxyl, so the ending is -ol.</p><p>Step 3: number from the end nearest the OH. The OH is on carbon 1.</p><p>The name is <strong>butan-1-ol</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): The chain was numbered from the wrong end. Number from the end that gives the hydroxyl group the lowest possible number.
        "0": "",
        // EN (option B): The ending -al is for aldehydes (CHO). A compound with a hydroxyl group has the ending -ol.
        "1": "",
        // EN (option D): The position number is missing. Without it the name could also mean the isomer with OH on the second carbon.
        "3": "",
      },
    },

    // ── s3-2-q029 · numeric · foundation · SL · Structure 3.2.5 · 1 mark
    "s3-2-q029": {
      // EN: <p>The skeletal formula of an alkane is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -56 99 60" width="99" height="60" role="img" aria-label="Skeletal formula. Line notation: CC(CC)CCC" data-g="S:C.C.C.C.C.C.C;0-1,1-2,2-3,1-4,4-5,5-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -39L45 -52"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg></p><p>The first step in naming it is to find the longest continuous chain of carbon atoms. How many carbon atoms are in the <strong>longest chain</strong>?</p>
      stem: "",
      hints: [
        // EN: The longest chain does not have to be drawn in a straight line across the page. It can go round a corner.
        "",
        // EN: Try starting at each line end in turn. Count the longest path to another line end.
        "",
      ],
      // EN: <p>The chain drawn across the page has only 5 carbon atoms. A longer path starts at the end of the two-carbon branch, goes down to the main zig-zag, and then runs to the right-hand end.</p><div class="worked__math">2 (branch) + 4 (rest of the zig-zag) = 6 carbon atoms</div><p>The parent chain is hexane. The one carbon atom left over (the left-hand end) is a methyl group on carbon 3, so the compound is 3-methylhexane.</p>
      solution: "",
      // EN: carbon atoms
      unit: "",
    },

    // ── s3-2-q030 · mcq · exam · SL · Structure 3.2.5 · 1 mark
    "s3-2-q030": {
      // EN: <p>What is the IUPAC name of this compound?</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -43 99 79" width="99" height="79" role="img" aria-label="Skeletal formula. Line notation: CC(C)C(Cl)CC" data-g="S:C.C.C.C.Cl.C.C;0-1,1-2,1-3,3-4,3-5,5-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 16"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="45" y="30.6" text-anchor="middle">Cl</text></g></svg></p>
      stem: "",
      options: [
        // EN: 3-chloro-4-methylpentane
        "",
        // EN: 2-methyl-3-chloropentane
        "",
        // EN: 3-chloro-2-methylpentane
        "",
        // EN: 2-chloro-1,1-dimethylbutane
        "",
      ],
      hints: [
        // EN: Find the longest chain. Then number it from the end that gives the substituents the lowest numbers.
        "",
        // EN: Write the substituents in alphabetical order.
        "",
      ],
      // EN: <p>Step 1: the longest chain has 5 carbon atoms: pentane.</p><p>Step 2: there are two substituents, a methyl group and a chlorine atom. Numbering from the left gives positions 2 and 3. Numbering from the right gives 3 and 4. Use 2 and 3.</p><p>Step 3: list the substituents alphabetically: chloro before methyl.</p><p>The name is <strong>3-chloro-2-methylpentane</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): The chain was numbered from the wrong end. Numbering from the other end gives the lower set of numbers, 2 and 3, instead of 3 and 4.
        "0": "",
        // EN (option B): The numbers are right, but IUPAC lists substituents in alphabetical order: chloro comes before methyl. (Markschemes have accepted this order in written answers, but it is not the IUPAC name.)
        "1": "",
        // EN (option D): The longest chain was not used. The chain has five carbon atoms (pentane), not four.
        "3": "",
      },
    },

    // ── s3-2-q031 · mcq · exam · SL · Structure 3.2.5 · 1 mark
    "s3-2-q031": {
      // EN: <p>What is the IUPAC name of this compound?</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -43 106 53" width="106" height="53" role="img" aria-label="Skeletal formula. Line notation: CC(C)CC=O" data-g="S:C.C.C.C.C.O;0-1,1-2,1-3,3-4,4=5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M66.4 -11.1L82.5 -1.8"/><path d="M68.6 -14.9L84.7 -5.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="4.6" text-anchor="middle">O</text></g></svg></p>
      stem: "",
      options: [
        // EN: 2-methylbutanal
        "",
        // EN: 3-methylbutanal
        "",
        // EN: 3-methylbutan-1-one
        "",
        // EN: Pentanal
        "",
      ],
      hints: [
        // EN: The C=O is at the end of the chain. Which class is this, and what is its ending?
        "",
        // EN: The carbon atom of the C=O group is carbon 1.
        "",
      ],
      // EN: <p>Step 1: the longest chain that includes the C=O carbon has 4 carbon atoms: butan-.</p><p>Step 2: the C=O is at the end of the chain, so the compound is an aldehyde: butanal. The C=O carbon is carbon 1, so no number is needed for it.</p><p>Step 3: the methyl group is on carbon 3.</p><p>The name is <strong>3-methylbutanal</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): The chain was numbered from the wrong end. In an aldehyde the C=O carbon is always carbon 1.
        "0": "",
        // EN (option C): The ending -one is for ketones, where the C=O is inside the chain. A C=O at the end of the chain is an aldehyde, with the ending -al.
        "2": "",
        // EN (option D): Pentanal has an unbranched chain of five carbon atoms. This molecule has a chain of four carbon atoms and a methyl branch. The two are isomers.
        "3": "",
      },
    },

    // ── s3-2-q032 · mcq · exam · SL · Structure 3.2.5 · 1 mark
    "s3-2-q032": {
      // EN: <p>What is the IUPAC name of this compound?</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -49 99 53" width="99" height="53" role="img" aria-label="Skeletal formula. Line notation: CC(C)CC(=O)C" data-g="S:C.C.C.C.C.O.C;0-1,1-2,1-3,3-4,4=5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M69.7 -13L69.7 -31.5"/><path d="M65.3 -13L65.3 -31.5"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-34.4" text-anchor="middle">O</text></g></svg></p>
      stem: "",
      options: [
        // EN: 2-methylpentan-4-one
        "",
        // EN: 4-methylpentan-2-one
        "",
        // EN: 4-methylpentanone
        "",
        // EN: 1,1-dimethylbutan-3-one
        "",
      ],
      hints: [
        // EN: The C=O is inside the chain. Which class is this, and what is its ending?
        "",
        // EN: Number the chain from the end nearer to the C=O.
        "",
      ],
      // EN: <p>Step 1: the longest chain has 5 carbon atoms: pentan-.</p><p>Step 2: the C=O is inside the chain, so the compound is a ketone, with the ending -one. Number from the right-hand end so that the C=O carbon is carbon 2: pentan-2-one.</p><p>Step 3: the methyl group is then on carbon 4.</p><p>The name is <strong>4-methylpentan-2-one</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): The chain was numbered from the wrong end. The carbonyl group must get the lowest possible number, so it is carbon 2, not carbon 4.
        "0": "",
        // EN (option C): The position of the C=O is missing. In a five-carbon chain the C=O could be on carbon 2 or carbon 3, so the number is needed.
        "2": "",
        // EN (option D): The longest chain was not used. The chain has five carbon atoms (pentane), with one methyl branch.
        "3": "",
      },
    },

    // ── s3-2-q033 · mcq · exam · SL · Structure 3.2.5 · 1 mark
    "s3-2-q033": {
      // EN: <p>Which skeletal formula represents <strong>2-methylbutanoic acid</strong>?</p>
      stem: "",
      options: [
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -49 117 59" width="117" height="59" role="img" aria-label="Skeletal formula. Line notation: CC(C)CC(=O)O" data-g="S:C.C.C.C.C.O.O1;0-1,1-2,1-3,3-4,4=5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M69.7 -13L69.7 -31.5"/><path d="M65.3 -13L65.3 -31.5"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-34.4" text-anchor="middle">O</text><text x="90.1" y="4.6" text-anchor="middle">O</text><text x="95.3" y="4.6" text-anchor="start">H</text></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -17 106 47" width="106" height="47" role="img" aria-label="Skeletal formula. Line notation: CCC(C)C=O" data-g="S:C.C.C.C.C.O;0-1,1-2,2-3,2-4,4=5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M66.4 -11.1L82.5 -1.8"/><path d="M68.6 -14.9L84.7 -5.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="4.6" text-anchor="middle">O</text></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -23 139 59" width="139" height="59" role="img" aria-label="Skeletal formula. Line notation: CCC(C)CC(=O)O" data-g="S:C.C.C.C.C.C.O.O1;0-1,1-2,2-3,2-4,4-5,5=6,5-7" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/><path d="M87.9 0L87.9 18.5"/><path d="M92.3 0L92.3 18.5"/><path d="M90.1 0L106.1 -9.2"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="30.6" text-anchor="middle">O</text><text x="112.6" y="-8.4" text-anchor="middle">O</text><text x="117.8" y="-8.4" text-anchor="start">H</text></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -49 117 79" width="117" height="79" role="img" aria-label="Skeletal formula. Line notation: CCC(C)C(=O)O" data-g="S:C.C.C.C.C.O.O1;0-1,1-2,2-3,2-4,4=5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M69.7 -13L69.7 -31.5"/><path d="M65.3 -13L65.3 -31.5"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-34.4" text-anchor="middle">O</text><text x="90.1" y="4.6" text-anchor="middle">O</text><text x="95.3" y="4.6" text-anchor="start">H</text></g></svg>
        "",
      ],
      hints: [
        // EN: Butanoic acid has four carbon atoms in the chain, including the carbon of the COOH group.
        "",
        // EN: The COOH carbon is carbon 1. Put the methyl group on carbon 2.
        "",
      ],
      // EN: <p>Build the molecule from the name.</p><p>butan-: a chain of 4 carbon atoms. -oic acid: carbon 1 is the carbon of a COOH group. 2-methyl: a <span class="chem">CH<sub>3</sub></span> branch on carbon 2, the carbon next to COOH.</p><p>The condensed formula is <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)COOH</span>.</p>
      solution: "",
      misconception: {
        // EN (option A): This is 3-methylbutanoic acid. The carbon of the COOH group is carbon 1, so carbon 2 is the carbon next to it.
        "0": "",
        // EN (option B): This has no OH on the C=O carbon, so it is an aldehyde (2-methylbutanal), not a carboxylic acid.
        "1": "",
        // EN (option C): This chain is too long. The carbon atom of the COOH group is counted as part of the four-carbon butan- chain. This drawing is 3-methylpentanoic acid.
        "2": "",
      },
    },

    // ── s3-2-q034 · short · exam · SL · Structure 3.2.5 · 2 marks
    "s3-2-q034": {
      // EN: <p>The skeletal formula of an alkene is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -43 99 47" width="99" height="47" role="img" aria-label="Skeletal formula. Line notation: CC=CC(C)C" data-g="S:C.C.C.C.C.C;0-1,1=2,2-3,3-4,3-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M21.4 -11.1L43.9 1.9"/><path d="M23.6 -14.9L46.1 -1.9"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L67.5 -39"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg></p><p>State the IUPAC name of this compound. Show how you chose the numbers.</p>
      stem: "",
      hints: [
        // EN: The parent chain must contain both carbon atoms of the C=C.
        "",
        // EN: The double bond gets the lowest possible number. The branch takes whatever number follows from that.
        "",
      ],
      // EN: <p><strong>4-methylpent-2-ene</strong></p><p>The longest chain that contains the C=C has 5 carbon atoms: pent-. Number from the end nearer to the double bond. The double bond then starts at carbon 2: pent-2-ene. The methyl group is on carbon 4.</p><p>Numbering from the other end would give 2-methylpent-3-ene. This is wrong because the double bond must get the lowest possible number.</p>
      answer: "",
      markscheme: [
        // EN: Parent chain: pent-2-ene (five carbon atoms, numbered so that the double bond starts at carbon 2).
        "",
        // EN: Complete name: 4-methylpent-2-ene. (Missing hyphens are not penalised. Do not accept 2-methylpent-3-ene.)
        "",
      ],
    },

    // ── s3-2-q035 · mcq · exam · SL · Structure 3.2.5 · 1 mark
    "s3-2-q035": {
      // EN: <p>What is the IUPAC name of this compound?</p><p data-i18n="off"><svg class="mol mol--structural" viewBox="-45 -44 192 88" width="192" height="88" role="img" aria-label="Full structural formula. Line notation: CC(Cl)(Cl)CC" data-g="F:C.C.C.C.H.H.H.Cl.Cl.H.H.H.H.H;0-1,1-2,2-3,0-4,0-5,0-6,1-7,1-8,2-9,2-10,3-11,3-12,3-13" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7.5 0L26.5 0"/><path d="M41.5 0L60.5 0"/><path d="M75.5 0L94.5 0"/><path d="M-7.5 0L-26.5 0"/><path d="M0 -7.5L0 -26.5"/><path d="M0 7.5L0 26.5"/><path d="M34 -7.5L34 -26.5"/><path d="M34 7.5L34 26.5"/><path d="M68 -7.5L68 -26.5"/><path d="M68 7.5L68 26.5"/><path d="M109.5 0L128.5 0"/><path d="M102 -7.5L102 -26.5"/><path d="M102 7.5L102 26.5"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="0" y="4.6" text-anchor="middle">C</text><text x="34" y="4.6" text-anchor="middle">C</text><text x="68" y="4.6" text-anchor="middle">C</text><text x="102" y="4.6" text-anchor="middle">C</text><text x="-34" y="4.6" text-anchor="middle">H</text><text x="0" y="-29.4" text-anchor="middle">H</text><text x="0" y="38.6" text-anchor="middle">H</text><text x="34" y="-29.4" text-anchor="middle">Cl</text><text x="34" y="38.6" text-anchor="middle">Cl</text><text x="68" y="-29.4" text-anchor="middle">H</text><text x="68" y="38.6" text-anchor="middle">H</text><text x="136" y="4.6" text-anchor="middle">H</text><text x="102" y="-29.4" text-anchor="middle">H</text><text x="102" y="38.6" text-anchor="middle">H</text></g></svg></p>
      stem: "",
      options: [
        // EN: 2-dichlorobutane
        "",
        // EN: 2,2-chlorobutane
        "",
        // EN: 3,3-dichlorobutane
        "",
        // EN: 2,2-dichlorobutane
        "",
      ],
      hints: [
        // EN: Count the carbon atoms in the chain, then number from the end nearer to the chlorine atoms.
        "",
        // EN: Two identical substituents: give one number for each, and use the prefix di-.
        "",
      ],
      // EN: <p>Step 1: the chain has 4 carbon atoms and only single bonds: butane.</p><p>Step 2: number from the left, so that the chlorine atoms are on carbon 2 (not carbon 3).</p><p>Step 3: there are two chlorine atoms. Give a number for each and use di-: 2,2-dichloro.</p><p>The name is <strong>2,2-dichlorobutane</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): Each substituent needs its own number, even when both are on the same carbon atom. Write 2,2- for two chlorine atoms on carbon 2.
        "0": "",
        // EN (option B): The prefix di- is missing. Two identical substituents need both the numbers (2,2-) and the prefix di-.
        "1": "",
        // EN (option C): The chain was numbered from the wrong end. Number from the end nearer to the chlorine atoms, so they are on carbon 2.
        "2": "",
      },
    },

    // ── s3-2-q036 · mcq · challenge · SL · Structure 3.2.5 · 1 mark
    "s3-2-q036": {
      // EN: <p>What is the IUPAC name of this compound?</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -49 117 59" width="117" height="59" role="img" aria-label="Skeletal formula. Line notation: CC(C)=CC(=O)O" data-g="S:C.C.C.C.C.O.O1;0-1,1-2,1=3,3-4,4=5,4-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M28.1 -14.6L43.7 -5.6"/><path d="M45 0L67.5 -13"/><path d="M69.7 -13L69.7 -31.5"/><path d="M65.3 -13L65.3 -31.5"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="67.5" y="-34.4" text-anchor="middle">O</text><text x="90.1" y="4.6" text-anchor="middle">O</text><text x="95.3" y="4.6" text-anchor="start">H</text></g></svg></p>
      stem: "",
      options: [
        // EN: 3-methylbutanoic acid
        "",
        // EN: 2-methylbut-2-en-4-oic acid
        "",
        // EN: 3-methylbut-2-enoic acid
        "",
        // EN: 3-methylbut-2-enal
        "",
      ],
      hints: [
        // EN: Start numbering at the carbon atom of the COOH group.
        "",
        // EN: The name needs three parts: the branch, the position of the C=C, and the ending for the carboxyl group.
        "",
      ],
      // EN: <p>Step 1: the longest chain that includes the COOH carbon has 4 carbon atoms: but-.</p><p>Step 2: the COOH carbon is carbon 1. The C=C double bond starts at carbon 2: but-2-en-.</p><p>Step 3: the group is carboxyl, so the ending is -oic acid: but-2-enoic acid.</p><p>Step 4: the methyl branch is on carbon 3.</p><p>The name is <strong>3-methylbut-2-enoic acid</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): This name is for a saturated acid. The C=C double bond must be shown in the name by -en- and its position.
        "0": "",
        // EN (option B): The chain was numbered from the wrong end. The carbon atom of the COOH group is always carbon 1.
        "1": "",
        // EN (option D): The ending -al is for an aldehyde. The C=O carbon here also carries an OH, so the group is carboxyl and the ending is -oic acid.
        "3": "",
      },
    },

    // ── s3-2-q037 · mcq · challenge · SL · Structure 3.2.5 · 1 mark
    "s3-2-q037": {
      // EN: <p>What is the IUPAC name of this compound?</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -49 76 92" width="76" height="92" role="img" aria-label="Skeletal formula. Line notation: CC(O)C(CC)C" data-g="S:C.C.O1.C.C.C.C;0-1,1-2,1-3,3-4,4-5,3-6" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -31.5"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 26L67.5 39"/><path d="M45 0L67.5 -13"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="22.5" y="-34.4" text-anchor="middle">O</text><text x="27.7" y="-34.4" text-anchor="start">H</text></g></svg></p>
      stem: "",
      options: [
        // EN: 3-ethylbutan-2-ol
        "",
        // EN: 3-methylpentan-2-ol
        "",
        // EN: 3-methylpentan-4-ol
        "",
        // EN: 2-ethylbutan-3-ol
        "",
      ],
      hints: [
        // EN: Look for the longest chain that contains the carbon with the OH. It may go round a corner.
        "",
        // EN: Number the chain from the end nearer to the OH.
        "",
      ],
      // EN: <p>Step 1: the longest chain that contains the C–OH carbon runs from the left-hand end, through the carbon with OH and the branch point, and on through the two-carbon branch. It has 5 carbon atoms: pentan-.</p><p>Step 2: number from the end nearer to the OH. The OH is on carbon 2: pentan-2-ol.</p><p>Step 3: the one carbon atom left over is a methyl group on carbon 3.</p><p>The name is <strong>3-methylpentan-2-ol</strong>. Its condensed formula is <span class="chem">CH<sub>3</sub>CH(OH)CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): The chain drawn across the page has four carbon atoms, but it is not the longest. A chain of five goes through the two-carbon branch.
        "0": "",
        // EN (option C): The five-carbon chain is right, but it was numbered from the wrong end. The hydroxyl group must get the lowest possible number.
        "2": "",
        // EN (option D): Two slips: the longest chain has five carbon atoms, not four, and the hydroxyl group must get the lowest possible number.
        "3": "",
      },
    },

    // ── s3-2-q038 · mcq · foundation · SL · Structure 3.2.6 · 1 mark
    "s3-2-q038": {
      // EN: <p>What are structural isomers?</p>
      stem: "",
      options: [
        // EN: Compounds with the same general formula but different numbers of carbon atoms
        "",
        // EN: Compounds with the same molecular formula but different connectivities of their atoms
        "",
        // EN: Compounds with the same empirical formula but different molar masses
        "",
        // EN: Atoms with the same number of protons but different numbers of neutrons
        "",
      ],
      hints: [
        // EN: Isomers contain the same atoms. What is different about them?
        "",
      ],
      // EN: <p>Structural isomers have the <strong>same molecular formula</strong> but <strong>different connectivities</strong>: the atoms are joined together in a different order.</p><p>Example: butane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span>, and methylpropane, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>CH</span>, are both <span class="chem">C<sub>4</sub>H<sub>10</sub></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): This describes members of a homologous series. Isomers have exactly the same atoms.
        "0": "",
        // EN (option C): These compounds have different molecular formulas (for example <span class="chem">C<sub>2</sub>H<sub>4</sub></span> and <span class="chem">C<sub>3</sub>H<sub>6</sub></span>), so they are not isomers.
        "2": "",
        // EN (option D): This describes isotopes of an element. Isomers are compounds.
        "3": "",
      },
    },

    // ── s3-2-q039 · mcq · foundation · SL · Structure 3.2.6 · 1 mark
    "s3-2-q039": {
      // EN: <p>Which compound is a <strong>secondary</strong> alcohol?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>
        "",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH</span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub></span>
        "",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH</span>
        "",
      ],
      hints: [
        // EN: Find the carbon atom that is bonded to the OH group.
        "",
        // EN: Count how many other carbon atoms are bonded directly to that carbon: one = primary, two = secondary, three = tertiary.
        "",
      ],
      // EN: <p>Look only at the carbon atom that carries the OH group, and count the carbon atoms joined to it.</p><p>In <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub></span> (propan-2-ol) that carbon is joined to two <span class="chem">CH<sub>3</sub></span> groups. Two carbon atoms means a <strong>secondary</strong> alcohol.</p>
      solution: "",
      misconception: {
        // EN (option A): The carbon that holds the OH is joined to only one other carbon atom. This is a primary alcohol.
        "0": "",
        // EN (option B): The branch is on the next carbon along. The carbon that holds the OH is <span class="chem">CH<sub>2</sub></span>, joined to only one other carbon atom, so this is a primary alcohol.
        "1": "",
        // EN (option D): The carbon that holds the OH is joined to three other carbon atoms. This is a tertiary alcohol.
        "3": "",
      },
    },

    // ── s3-2-q040 · numeric · foundation · SL · Structure 3.2.6 · 1 mark
    "s3-2-q040": {
      // EN: <p>How many structural isomers have the molecular formula <span class="chem">C<sub>5</sub>H<sub>12</sub></span>?</p>
      stem: "",
      hints: [
        // EN: Start with the unbranched chain of five carbon atoms.
        "",
        // EN: Then shorten the chain to four carbon atoms and add one methyl branch. Then try a chain of three with two branches.
        "",
        // EN: Check that you have not drawn the same molecule twice in a different position.
        "",
      ],
      // EN: <p>Work from the longest chain to the shortest.</p><ul><li>Chain of 5: pentane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span></li><li>Chain of 4 with one methyl branch: 2-methylbutane, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>3</sub></span></li><li>Chain of 3 with two methyl branches: 2,2-dimethylpropane, <span class="chem">(CH<sub>3</sub>)<sub>4</sub>C</span></li></ul><p>There are <strong>3</strong> isomers. A methyl group on carbon 3 of butane is the same molecule as 2-methylbutane, seen from the other end.</p>
      solution: "",
      // EN: isomers
      unit: "",
    },

    // ── s3-2-q041 · mcq · foundation · SL · Structure 3.2.6 · 1 mark
    "s3-2-q041": {
      // EN: <p>The skeletal formulas of two alcohols, X and Y, are shown.</p><p data-i18n="off"><span style="display:inline-block;white-space:nowrap;margin:0 1.5em 0.4em 0"><strong>X</strong>&nbsp; <svg class="mol mol--skeletal" viewBox="-4 -17 117 27" width="117" height="27" role="img" aria-label="Skeletal formula. Line notation: CCCCO" data-g="S:C.C.C.C.O1;0-1,1-2,2-3,3-4" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L83.6 -3.7"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="90.1" y="4.6" text-anchor="middle">O</text><text x="95.3" y="4.6" text-anchor="start">H</text></g></svg></span> <span style="display:inline-block;white-space:nowrap;margin:0 1.5em 0.4em 0"><strong>Y</strong>&nbsp; <svg class="mol mol--skeletal" viewBox="-4 -17 76 53" width="76" height="53" role="img" aria-label="Skeletal formula. Line notation: CCC(O)C" data-g="S:C.C.C.O1.C;0-1,1-2,2-3,2-4" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 18.5"/><path d="M45 0L67.5 -13"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"><text x="45" y="30.6" text-anchor="middle">O</text><text x="50.2" y="30.6" text-anchor="start">H</text></g></svg></span></p><p>How are X and Y related?</p>
      stem: "",
      options: [
        // EN: They are chain isomers.
        "",
        // EN: They are position isomers.
        "",
        // EN: They are functional group isomers.
        "",
        // EN: They are not isomers.
        "",
      ],
      hints: [
        // EN: Check the molecular formula of each. Then compare the carbon chain, the functional group, and where the group is.
        "",
      ],
      // EN: <p>Both molecules are <span class="chem">C<sub>4</sub>H<sub>10</sub>O</span>. Both have the same unbranched four-carbon chain and the same functional group, hydroxyl.</p><p>Only the position of the group is different: carbon 1 in X (butan-1-ol) and carbon 2 in Y (butan-2-ol). They are <strong>position isomers</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): Chain isomers have differently branched carbon chains. Here both molecules have an unbranched chain of four carbon atoms.
        "0": "",
        // EN (option C): Functional group isomers have different functional groups. Both molecules have a hydroxyl group.
        "2": "",
        // EN (option D): Both have the molecular formula <span class="chem">C<sub>4</sub>H<sub>10</sub>O</span> and their atoms are joined differently, so they are isomers.
        "3": "",
      },
    },

    // ── s3-2-q042 · mcq · exam · SL · Structure 3.2.6 · 1 mark
    "s3-2-q042": {
      // EN: <p>Which compound is a <strong>secondary</strong> amine?</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub></span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>NHCH<sub>3</sub></span>
        "",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>3</sub>N</span>
        "",
        // EN: <span class="chem">(CH<sub>3</sub>)<sub>3</sub>CNH<sub>2</sub></span>
        "",
      ],
      hints: [
        // EN: For amines, the rule is about the nitrogen atom, not about a carbon atom.
        "",
        // EN: Count the carbon atoms bonded directly to N.
        "",
      ],
      // EN: <p>Amines are classified by the number of carbon atoms bonded to the nitrogen atom.</p><p>In <span class="chem">CH<sub>3</sub>CH<sub>2</sub>NHCH<sub>3</sub></span> the nitrogen is bonded to two carbon atoms (and one H). It is a <strong>secondary</strong> amine.</p><p>This is different from alcohols and halogenoalkanes, where you count the carbon atoms on the carbon that holds the group.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the alcohol rule used by mistake. For amines, count the carbon atoms bonded to the <em>nitrogen</em>. Here the N is bonded to one carbon, so the amine is primary.
        "0": "",
        // EN (option C): The nitrogen atom is bonded to three carbon atoms. This is a tertiary amine.
        "2": "",
        // EN (option D): The nitrogen atom is bonded to only one carbon atom, so this is a primary amine. The branching of that carbon does not matter.
        "3": "",
      },
    },

    // ── s3-2-q043 · mcq · exam · SL · Structure 3.2.6 · 1 mark
    "s3-2-q043": {
      // EN: <p>Two halogenoalkanes are X, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>3</sub></span>, and Y, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>Br</span>. Which row classifies them correctly?</p>
      stem: "",
      options: [
        // EN: X is primary. Y is secondary.
        "",
        // EN: X is secondary. Y is primary.
        "",
        // EN: X is secondary. Y is secondary.
        "",
        // EN: X is secondary. Y is tertiary.
        "",
      ],
      hints: [
        // EN: Find the carbon atom bonded to Br in each molecule.
        "",
        // EN: Count the other carbon atoms bonded directly to that carbon.
        "",
      ],
      // EN: <p>X: the C–Br carbon is bonded to two other carbon atoms (<span class="chem">CH<sub>2</sub></span> and <span class="chem">CH<sub>3</sub></span>). X is <strong>secondary</strong>. It is 2-bromobutane.</p><p>Y: the C–Br carbon is <span class="chem">CH<sub>2</sub>Br</span>, bonded to one other carbon atom. Y is <strong>primary</strong>. It is 1-bromo-2-methylpropane.</p>
      solution: "",
      misconception: {
        // EN (option A): The two answers are the wrong way round. Count the carbon atoms on the carbon that holds the Br.
        "0": "",
        // EN (option C): In Y the branch is on the carbon next to the C–Br carbon. The C–Br carbon itself is <span class="chem">CH<sub>2</sub></span>, joined to only one carbon atom.
        "2": "",
        // EN (option D): In Y the carbon with three carbon neighbours is the CH, but the Br is on the <span class="chem">CH<sub>2</sub></span> carbon next to it.
        "3": "",
      },
    },

    // ── s3-2-q044 · numeric · exam · SL · Structure 3.2.6 · 1 mark
    "s3-2-q044": {
      // EN: <p>How many structural isomers have the molecular formula <span class="chem">C<sub>4</sub>H<sub>9</sub>Br</span>?</p>
      stem: "",
      hints: [
        // EN: There are two possible carbon chains for four carbon atoms: unbranched, and branched.
        "",
        // EN: For each chain, put the Br on each different carbon atom in turn.
        "",
        // EN: Carbon atoms that are equivalent (for example the two ends of butane) give the same molecule.
        "",
      ],
      // EN: <p>Unbranched chain (butane): Br on carbon 1 or on carbon 2.</p><p>Branched chain (methylpropane): Br on a <span class="chem">CH<sub>3</sub></span> carbon or on the central carbon.</p><ul><li>1-bromobutane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Br</span> (primary)</li><li>2-bromobutane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>3</sub></span> (secondary)</li><li>1-bromo-2-methylpropane, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>Br</span> (primary)</li><li>2-bromo-2-methylpropane, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>CBr</span> (tertiary)</li></ul><p>There are <strong>4</strong> structural isomers.</p>
      solution: "",
      // EN: isomers
      unit: "",
    },

    // ── s3-2-q045 · mcq · exam · SL · Structure 3.2.6 · 1 mark
    "s3-2-q045": {
      // EN: <p>The skeletal formula of compound X is shown.</p><p data-i18n="off"><svg class="mol mol--skeletal" viewBox="-4 -43 99 47" width="99" height="47" role="img" aria-label="Skeletal formula. Line notation: CC(C)CCC" data-g="S:C.C.C.C.C.C;0-1,1-2,1-3,3-4,4-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg></p><p>Three of the drawings below are structural isomers of X. Which drawing shows <strong>X itself</strong>, drawn in a different way?</p>
      stem: "",
      options: [
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -17 99 47" width="99" height="47" role="img" aria-label="Skeletal formula. Line notation: CCC(C)CC" data-g="S:C.C.C.C.C.C;0-1,1-2,2-3,2-4,4-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/><path d="M67.5 -13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -39.5 76 44" width="76" height="44" role="img" aria-label="Skeletal formula. Line notation: CC(C)(C)CC" data-g="S:C.C.C.C.C.C;0-1,1-2,1-3,1-4,4-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L9.5 -35.5"/><path d="M22.5 -13L35.5 -35.5"/><path d="M22.5 -13L45 0"/><path d="M45 0L67.5 -13"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -4 99 47" width="99" height="47" role="img" aria-label="Skeletal formula. Line notation: CCCC(C)C" data-g="S:C.C.C.C.C.C;0-1,1-2,2-3,3-4,3-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 13"/><path d="M22.5 13L45 0"/><path d="M45 0L67.5 13"/><path d="M67.5 13L67.5 39"/><path d="M67.5 13L90.1 0"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg>
        "",
        // EN: <svg class="mol mol--skeletal" viewBox="-4 -43 76 73" width="76" height="73" role="img" aria-label="Skeletal formula. Line notation: CC(C)C(C)C" data-g="S:C.C.C.C.C.C;0-1,1-2,1-3,3-4,3-5" style="vertical-align:middle;max-width:100%;height:auto"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M0 0L22.5 -13"/><path d="M22.5 -13L22.5 -39"/><path d="M22.5 -13L45 0"/><path d="M45 0L45 26"/><path d="M45 0L67.5 -13"/></g><g fill="currentColor" stroke="none" font-size="13" font-weight="500"></g></svg>
        "",
      ],
      hints: [
        // EN: Turning a drawing over, or drawing it from the other end, does not make a new molecule.
        "",
        // EN: Name each drawing: find the longest chain, then the position of each branch. Two drawings with the same name are the same compound.
        "",
      ],
      // EN: <p>Name X: the longest chain has 5 carbon atoms, and there is one methyl branch on carbon 2. X is 2-methylpentane.</p><p>The correct drawing also has a five-carbon chain with one methyl branch on the second carbon from one end. It is X, turned over and drawn from the other end.</p><p>The other three are 3-methylpentane, 2,2-dimethylbutane and 2,3-dimethylbutane. All are <span class="chem">C<sub>6</sub>H<sub>14</sub></span>, so they are chain isomers of X.</p>
      solution: "",
      misconception: {
        // EN (option A): Here the branch is on the middle carbon of a five-carbon chain (3-methylpentane). In X the branch is on the second carbon.
        "0": "",
        // EN (option B): This molecule has two branches on the same carbon and a longest chain of four (2,2-dimethylbutane). X has one branch and a longest chain of five.
        "1": "",
        // EN (option D): This molecule has two branches on neighbouring carbon atoms and a longest chain of four (2,3-dimethylbutane). X has one branch.
        "3": "",
      },
    },

    // ── s3-2-q046 · mcq · exam · SL · Structure 3.2.6 · 1 mark
    "s3-2-q046": {
      // EN: <p>Which pair of compounds are <strong>functional group isomers</strong>?</p>
      stem: "",
      options: [
        // EN: Propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>, and propan-2-ol, <span class="chem">CH<sub>3</sub>CH(OH)CH<sub>3</sub></span>
        "",
        // EN: Butane, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span>, and methylpropane, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>CH</span>
        "",
        // EN: Propanal, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CHO</span>, and propanone, <span class="chem">CH<sub>3</sub>COCH<sub>3</sub></span>
        "",
        // EN: Ethanol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH</span>, and propan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>
        "",
      ],
      hints: [
        // EN: Functional group isomers have the same molecular formula but belong to different classes of compound.
        "",
      ],
      // EN: <p>Propanal and propanone are both <span class="chem">C<sub>3</sub>H<sub>6</sub>O</span>. Propanal is an aldehyde and propanone is a ketone, so they belong to different classes.</p><p>They are <strong>functional group isomers</strong>. (Both contain a carbonyl group, but its place in the chain puts them in different homologous series.)</p>
      solution: "",
      misconception: {
        // EN (option A): Both are alcohols. Only the position of the hydroxyl group differs, so these are position isomers.
        "0": "",
        // EN (option B): Both are alkanes. Only the branching of the carbon chain differs, so these are chain isomers.
        "1": "",
        // EN (option D): These have different molecular formulas (<span class="chem">C<sub>2</sub>H<sub>6</sub>O</span> and <span class="chem">C<sub>3</sub>H<sub>8</sub>O</span>), so they are not isomers. They are members of the same homologous series.
        "3": "",
      },
    },

    // ── s3-2-q047 · numeric · challenge · SL · Structure 3.2.6 · 1 mark
    "s3-2-q047": {
      // EN: <p>How many structural isomers have the molecular formula <span class="chem">C<sub>4</sub>H<sub>10</sub>O</span>? Include isomers from every class of compound.</p>
      stem: "",
      hints: [
        // EN: The formula fits <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O</span>, so there are no double bonds and no rings. Which two classes fit?
        "",
        // EN: Alcohols: use both four-carbon chains, and put OH on each different carbon.
        "",
        // EN: Ethers: put the O atom between two carbon groups. The groups can be 1 + 3 carbon atoms or 2 + 2.
        "",
      ],
      // EN: <p>The oxygen atom can be in a hydroxyl group (alcohols) or between two carbon atoms (ethers).</p><p><strong>Alcohols (4)</strong></p><ul><li>butan-1-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span></li><li>butan-2-ol, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH(OH)CH<sub>3</sub></span></li><li>2-methylpropan-1-ol, <span class="chem">(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH</span></li><li>2-methylpropan-2-ol, <span class="chem">(CH<sub>3</sub>)<sub>3</sub>COH</span></li></ul><p><strong>Ethers (3)</strong></p><ul><li><span class="chem">CH<sub>3</sub>OCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span></li><li><span class="chem">CH<sub>3</sub>OCH(CH<sub>3</sub>)<sub>2</sub></span></li><li><span class="chem">CH<sub>3</sub>CH<sub>2</sub>OCH<sub>2</sub>CH<sub>3</sub></span></li></ul><div class="worked__math">4 + 3 = 7 structural isomers</div><p>You do not need to name the ethers.</p>
      solution: "",
      // EN: isomers
      unit: "",
    },

    // ── s3-2-q048 · multi · challenge · SL · Structure 3.2.6 · 1 mark
    "s3-2-q048": {
      // EN: <p>Which compounds are <strong>functional group isomers</strong> of propanoic acid, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COOH</span>? Select <strong>all</strong> that apply.</p>
      stem: "",
      options: [
        // EN: <span class="chem">CH<sub>3</sub>COOCH<sub>3</sub></span>
        "",
        // EN: <span class="chem">HOOCCH<sub>2</sub>CH<sub>3</sub></span>
        "",
        // EN: <span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub></span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH</span>
        "",
        // EN: <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>OH</span>
        "",
      ],
      hints: [
        // EN: Work out the molecular formula of propanoic acid first. An isomer must match it exactly.
        "",
        // EN: Then check the functional group: it must be different from carboxyl.
        "",
      ],
      // EN: <p>Propanoic acid is <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></span> and its functional group is carboxyl.</p><ul><li><span class="chem">CH<sub>3</sub>COOCH<sub>3</sub></span> is <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></span> with an ester group: a functional group isomer.</li><li><span class="chem">HCOOCH<sub>2</sub>CH<sub>3</sub></span> is <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></span> with an ester group: a functional group isomer.</li><li><span class="chem">CH<sub>3</sub>COCH<sub>2</sub>OH</span> is <span class="chem">C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></span> with a carbonyl group and a hydroxyl group: a functional group isomer.</li><li><span class="chem">HOOCCH<sub>2</sub>CH<sub>3</sub></span> is propanoic acid.</li><li><span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH</span> is <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></span>, a different molecular formula.</li></ul>
      solution: "",
      misconception: {
        // EN (option B): This is propanoic acid itself, written from the other end. Writing a formula backwards does not make a new compound.
        "1": "",
        // EN (option D): This has four carbon atoms, so its molecular formula is <span class="chem">C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></span>. It is the next member of the same homologous series, not an isomer.
        "3": "",
      },
    },

    // ── s3-2-q049 · short · challenge · SL · Structure 3.2.6 · 3 marks
    "s3-2-q049": {
      // EN: <p>Pentan-2-one is <span class="chem">CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></span>. State the IUPAC name of:</p><p>(a) a position isomer of pentan-2-one;</p><p>(b) a chain isomer of pentan-2-one that is also a ketone;</p><p>(c) a functional group isomer of pentan-2-one.</p>
      stem: "",
      hints: [
        // EN: Every answer must have the molecular formula <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span>.
        "",
        // EN: Position isomer: move the C=O along the same chain. Chain isomer: change the branching of the carbon chain.
        "",
        // EN: Which other class has the general formula <span class="chem">C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O</span>?
        "",
      ],
      // EN: <p>Pentan-2-one is <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span>.</p><p>(a) <strong>Pentan-3-one</strong>, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub></span>. The chain is the same, and the C=O has moved to carbon 3.</p><p>(b) <strong>3-methylbutan-2-one</strong>, <span class="chem">CH<sub>3</sub>COCH(CH<sub>3</sub>)<sub>2</sub></span>. The carbon chain is now branched.</p><p>(c) <strong>Pentanal</strong>, <span class="chem">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CHO</span>, or another aldehyde with the formula <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span>. An aldehyde is in a different class from a ketone.</p>
      answer: "",
      markscheme: [
        // EN: (a) Pentan-3-one.
        "",
        // EN: (b) 3-methylbutan-2-one (accept 3-methylbutanone).
        "",
        // EN: (c) Pentanal (accept 2-methylbutanal, 3-methylbutanal or 2,2-dimethylpropanal; accept any other correctly named compound with the formula <span class="chem">C<sub>5</sub>H<sub>10</sub>O</span> that is not a ketone).
        "",
      ],
    },

    // ── s3-2-q050 · mcq · foundation · SL · Structure 3.2.1 · 1 mark
    "s3-2-q050": {
      // EN: <p>A drawing of a molecule shows one bond as a solid wedge and one bond as a dashed wedge. The other bonds are plain lines. Which type of formula is this?</p>
      stem: "",
      options: [
        // EN: Skeletal formula
        "",
        // EN: Stereochemical formula
        "",
        // EN: Condensed structural formula
        "",
        // EN: Empirical formula
        "",
      ],
      hints: [
        // EN: Wedges are used to show three dimensions on flat paper.
        "",
      ],
      // EN: <p>This is a <strong>stereochemical formula</strong>. It shows the 3-D arrangement of the bonds around an atom.</p><p>A solid wedge is a bond that comes towards you. A dashed wedge is a bond that goes away from you. Plain lines are bonds in the plane of the page.</p><p>At this level you need to recognize this type of formula. You do not have to draw it unless the question tells you to.</p>
      solution: "",
      misconception: {
        // EN (option A): A skeletal formula uses plain lines only. It shows the carbon chain as a zig-zag and does not show which bonds point towards you or away from you.
        "0": "",
        // EN (option C): A condensed structural formula is written on one line, such as <span class="chem">CH<sub>3</sub>CH<sub>2</sub>OH</span>. It has no wedges.
        "2": "",
        // EN (option D): An empirical formula gives only the simplest whole-number ratio of the atoms. It is not a drawing.
        "3": "",
      },
    },

  }
});
