/* s3-1.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's3-1.q', {
  questions: {

    // ── s3-1-q001 · mcq · foundation · SL · Structure 3.1.1 · 1 mark
    "s3-1-q001": {
      // EN: <p>Which element is a metalloid?</p>
      stem: "<p>半金属 (metalloid) はどの元素ですか。</p>",
      options: [
        // EN: Aluminium, Al
        "アルミニウム Al",
        // EN: Phosphorus, P
        "リン P",
        // EN: Silicon, Si
        "ケイ素 Si",
        // EN: Sulfur, S
        "硫黄 S",
      ],
      hints: [
        // EN: Find the four elements in period 3 of your periodic table.
        "周期表の第 3 周期で、この 4 つの元素を探しましょう。",
        // EN: Metalloids lie on the diagonal boundary between the metals (left) and the non-metals (right).
        "半金属は、金属（左側）と非金属（右側）を分ける斜めの境界線の上にあります。",
      ],
      // EN: <p>Metals are on the left and in the centre of the periodic table. Non-metals are on the upper right. The metalloids lie on the diagonal boundary between them. They include B, Si, Ge, As, Sb and Te. <strong>Silicon</strong> is a metalloid. Its properties are between those of a metal and a non-metal.</p>
      solution: "<p>金属は周期表の左側と中央にあります。非金属は右上にあります。半金属は、その間の斜めの境界線の上にあります。B、Si、Ge、As、Sb、Te などです。<strong>ケイ素</strong>は半金属です。性質は金属と非金属の中間です。</p>",
      misconception: {
        // EN (option A): Aluminium sits next to the metalloids, but it is a metal. It is shiny, it conducts electricity well and it forms <span class="chem">Al^3+</span> ions.
        "0": "アルミニウムは半金属のとなりにありますが、金属です。光沢があり、電気をよく通し、<span class=\"chem\">Al^3+</span> イオンになります。",
        // EN (option B): Phosphorus is a non-metal. It does not conduct electricity and its oxide is acidic.
        "1": "リンは非金属です。電気を通さず、酸化物は酸性です。",
        // EN (option D): Sulfur is a non-metal. It is a brittle yellow solid that does not conduct electricity.
        "3": "硫黄は非金属です。もろい黄色の固体で、電気を通しません。",
      },
    },

    // ── s3-1-q002 · mcq · foundation · SL · Structure 3.1.1 · 1 mark
    "s3-1-q002": {
      // EN: <p>The diagram shows an outline of the periodic table divided into four regions, A, B, C and D.</p><p><svg viewBox="0 0 294 161.5" width="294" height="161.5" style="max-width:100%;height:auto" role="img" aria-label="Outline of the periodic table divided into four regions. Region A is the two columns on the left, groups 1 and 2. Region B is the wide middle part, groups 3 to 12. Region C is the six columns on the right, groups 13 to 18. Region D is the two long rows drawn below the main table."><polygon points="12,10 27,10 27,25 42,25 42,115 12,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="27" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">A</text><polygon points="42,55 192,55 192,115 42,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="117" y="91" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">B</text><polygon points="192,25 267,25 267,10 282,10 282,115 192,115" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="237" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">C</text><polygon points="57,125.5 267,125.5 267,155.5 57,155.5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><text x="162" y="146.5" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">D</text><text x="19.5" y="8" text-anchor="middle" font-size="10" fill="currentColor">1</text><text x="274.5" y="8" text-anchor="middle" font-size="10" fill="currentColor">18</text></svg></p><p>Which region is the d-block?</p>
      stem: "<p>図は周期表の輪郭です。A、B、C、D の 4 つの領域に分けてあります。</p><p><svg viewBox=\"0 0 294 161.5\" width=\"294\" height=\"161.5\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"4 つの領域に分けた周期表の輪郭。領域 A は左側の 2 列で、1 族と 2 族。領域 B は中央の幅の広い部分で、3〜12 族。領域 C は右側の 6 列で、13〜18 族。領域 D は、表の本体の下にかかれた 2 つの長い行。\"><polygon points=\"12,10 27,10 27,25 42,25 42,115 12,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"27\" y=\"76\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">A</text><polygon points=\"42,55 192,55 192,115 42,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"117\" y=\"91\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">B</text><polygon points=\"192,25 267,25 267,10 282,10 282,115 192,115\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"237\" y=\"76\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">C</text><polygon points=\"57,125.5 267,125.5 267,155.5 57,155.5\" fill=\"currentColor\" fill-opacity=\"0.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"162\" y=\"146.5\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" fill=\"currentColor\">D</text><text x=\"19.5\" y=\"8\" text-anchor=\"middle\" font-size=\"10\" fill=\"currentColor\">1</text><text x=\"274.5\" y=\"8\" text-anchor=\"middle\" font-size=\"10\" fill=\"currentColor\">18</text></svg></p><p>d ブロックはどの領域ですか。</p>",
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
        "d 副準位には電子が 10 個まで入ります。幅が 10 列の領域はどれですか。",
        // EN: An s sublevel holds 2 electrons, a p sublevel 6 and an f sublevel 14.
        "s 副準位には電子が 2 個、p 副準位には 6 個、f 副準位には 14 個入ります。",
      ],
      // EN: <p>The width of each block matches the number of electrons its sublevel can hold. The s-block is 2 columns wide (A). The d-block is 10 columns wide: groups 3 to 12 (<strong>B</strong>). The p-block is 6 columns wide (C). The f-block is 14 columns wide (D).</p><p>One exception: helium is drawn at the top of group 18, but its configuration is <span class="mono nowrap">1s<sup>2</sup></span>.</p>
      solution: "<p>各ブロックの幅は、その副準位に入る電子の数と同じです。s ブロックは幅 2 列（A）です。d ブロックは幅 10 列で、3〜12 族（<strong>B</strong>）です。p ブロックは幅 6 列（C）です。f ブロックは幅 14 列（D）です。</p><p>例外が 1 つあります。ヘリウムは 18 族のいちばん上にかかれていますが、電子配置は <span class=\"mono nowrap\">1s<sup>2</sup></span> です。</p>",
      misconception: {
        // EN (option A): Region A is groups 1 and 2. In these elements the outer electrons are in an s sublevel, so this is the s-block.
        "0": "領域 A は 1 族と 2 族です。これらの元素では、外側の電子が s 副準位にあります。だから s ブロックです。",
        // EN (option C): Region C is groups 13 to 18. In these elements a p sublevel is being filled, so this is the p-block.
        "2": "領域 C は 13〜18 族です。これらの元素では、p 副準位に電子が入っていきます。だから p ブロックです。",
        // EN (option D): Region D is the two rows drawn below the main table. In these elements an f sublevel is being filled, so this is the f-block.
        "3": "領域 D は、表の本体の下にかかれた 2 つの行です。これらの元素では、f 副準位に電子が入っていきます。だから f ブロックです。",
      },
    },

    // ── s3-1-q003 · multi · exam · SL · Structure 3.1.1 · 1 mark
    "s3-1-q003": {
      // EN: <p>Tin, Sn, has atomic number 50. Use the periodic table in the data booklet. Which statements about tin are correct? Select all that apply.</p>
      stem: "<p>スズ Sn の原子番号は 50 です。データブックレットの周期表を使いましょう。スズについて正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Tin is in the p-block.
        "スズは p ブロックにある。",
        // EN: Tin is a transition element.
        "スズは遷移元素である。",
        // EN: Tin is a metal.
        "スズは金属である。",
        // EN: Tin is in group 4.
        "スズは 4 族にある。",
        // EN: Tin is in period 5.
        "スズは第 5 周期にある。",
      ],
      hints: [
        // EN: Find Sn in the data booklet. Read its row (period) and its column (group).
        "データブックレットで Sn を探します。行（周期）と列（族）を読み取りましょう。",
        // EN: Groups 13 to 18 are the p-block. The lower part of the p-block contains metals.
        "13〜18 族が p ブロックです。p ブロックの下のほうには金属があります。",
      ],
      // EN: <p>Tin is in period 5 and group 14. Groups 13 to 18 form the <strong>p-block</strong>. Tin lies below and to the left of the metalloid boundary, so it is a <strong>metal</strong>. It is not a transition element, because it is not in the d-block.</p>
      solution: "<p>スズは第 5 周期、14 族にあります。13〜18 族は <strong>p ブロック</strong>です。スズは半金属の境界線の左下にあるので、<strong>金属</strong>です。d ブロックにないので、遷移元素ではありません。</p>",
      misconception: {
        // EN (option B): The transition elements are in the d-block. Tin is in group 14, which is in the p-block. Not every metal is a transition element.
        "1": "遷移元素は d ブロックにあります。スズは 14 族で、p ブロックにあります。金属がすべて遷移元素というわけではありません。",
        // EN (option D): Groups are numbered from 1 to 18. Tin has four valence electrons, but it is in group 14. Group 4 starts with titanium.
        "3": "族の番号は 1 から 18 までです。スズの価電子は 4 個ですが、族は 14 族です。4 族はチタンから始まります。",
      },
    },

    // ── s3-1-q004 · mcq · exam · SL · Structure 3.1.1 · 1 mark
    "s3-1-q004": {
      // EN: <p>Use the periodic table in the data booklet. Which row gives the correct block and type for the element?</p>
      stem: "<p>データブックレットの周期表を使いましょう。元素のブロックと種類の組み合わせが正しいものはどれですか。</p>",
      options: [
        // EN: Zinc, Zn: s-block, metal
        "亜鉛 Zn：s ブロック、金属",
        // EN: Germanium, Ge: p-block, non-metal
        "ゲルマニウム Ge：p ブロック、非金属",
        // EN: Gallium, Ga: p-block, metal
        "ガリウム Ga：p ブロック、金属",
        // EN: Cerium, Ce: d-block, metal
        "セリウム Ce：d ブロック、金属",
      ],
      hints: [
        // EN: Find the group of each element. Groups 1–2: s-block. Groups 3–12: d-block. Groups 13–18: p-block.
        "それぞれの元素の族を探します。1–2 族は s ブロック、3–12 族は d ブロック、13–18 族は p ブロックです。",
        // EN: The metalloids include B, Si, Ge, As, Sb and Te.
        "半金属は B、Si、Ge、As、Sb、Te などです。",
      ],
      // EN: <p>Gallium is in group 13, so it is in the <strong>p-block</strong>. It is below aluminium and to the left of the metalloid boundary, so it is a <strong>metal</strong>. The p-block contains metals, metalloids and non-metals.</p>
      solution: "<p>ガリウムは 13 族なので、<strong>p ブロック</strong>にあります。アルミニウムの下、半金属の境界線の左にあるので、<strong>金属</strong>です。p ブロックには、金属、半金属、非金属があります。</p>",
      misconception: {
        // EN (option A): Zinc is a metal, but it is in group 12. Groups 3 to 12 are the d-block.
        "0": "亜鉛は金属ですが、12 族にあります。3〜12 族は d ブロックです。",
        // EN (option B): Germanium is in the p-block, but it lies on the diagonal boundary. It is a metalloid.
        "1": "ゲルマニウムは p ブロックにありますが、斜めの境界線の上にあります。半金属です。",
        // EN (option D): Cerium is a metal, but it is in the first of the two rows drawn below the main table. Those rows are the f-block.
        "3": "セリウムは金属ですが、表の本体の下にかかれた 2 つの行のうち、上の行にあります。この 2 行は f ブロックです。",
      },
    },

    // ── s3-1-q005 · mcq · foundation · SL · Structure 3.1.2 · 1 mark
    "s3-1-q005": {
      // EN: <p>An atom has the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>. Where is the element in the periodic table?</p>
      stem: "<p>ある原子の電子配置は <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span> です。この元素は周期表のどこにありますか。</p>",
      options: [
        // EN: Period 3, group 16
        "第 3 周期、16 族",
        // EN: Period 3, group 6
        "第 3 周期、6 族",
        // EN: Period 4, group 16
        "第 4 周期、16 族",
        // EN: Period 6, group 3
        "第 6 周期、3 族",
      ],
      hints: [
        // EN: Which is the highest energy level that contains electrons? That is the period.
        "電子が入っているエネルギー準位のうち、いちばん高いのはどれですか。それが周期です。",
        // EN: Count the electrons in that outer level. For the p-block, add 10 to get the group number.
        "そのいちばん外側の準位にある電子を数えます。p ブロックでは、10 をたすと族の番号になります。",
      ],
      // EN: <p>The outer occupied energy level is n = 3, so the element is in <strong>period 3</strong>. The outer level holds 2 + 4 = 6 valence electrons. The element is in the p-block, so the group is 6 + 10 = <strong>16</strong>. The element is sulfur.</p>
      solution: "<p>電子が入っているいちばん外側のエネルギー準位は n = 3 です。だから、この元素は<strong>第 3 周期</strong>にあります。いちばん外側の準位には、2 + 4 = 6 個の価電子があります。p ブロックの元素なので、族は 6 + 10 = <strong>16</strong> 族です。この元素は硫黄です。</p>",
      misconception: {
        // EN (option B): The atom has 6 valence electrons, but groups are numbered 1 to 18. For a p-block element, group number = valence electrons + 10.
        "1": "この原子の価電子は 6 個ですが、族の番号は 1 から 18 までです。p ブロックの元素では、族の番号 = 価電子の数 + 10 です。",
        // EN (option C): The period number is the outer energy level that contains electrons. Here that is level 3, not 4.
        "2": "周期の番号は、電子が入っているいちばん外側のエネルギー準位の番号です。ここでは 4 ではなく 3 です。",
        // EN (option D): Period and group are swapped. The outer energy level (3) gives the period. The valence electrons (6) give the group.
        "3": "周期と族が逆になっています。いちばん外側のエネルギー準位（3）が周期です。価電子の数（6）から族がわかります。",
      },
    },

    // ── s3-1-q006 · mcq · exam · SL · Structure 3.1.2 · 1 mark
    "s3-1-q006": {
      // EN: <p>An element is in period 4 and group 7 of the periodic table. What is the electron configuration of its atom?</p>
      stem: "<p>ある元素は、周期表の第 4 周期、7 族にあります。この原子の電子配置はどれですか。</p>",
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
        "第 4 周期の 3〜12 族は d ブロックです。3d 副準位に電子が入っていきます。",
        // EN: For groups 3 to 12: group number = number of 4s electrons + number of 3d electrons.
        "3〜12 族では、族の番号 = 4s 電子の数 + 3d 電子の数 です。",
      ],
      // EN: <p>Period 4 means the outer energy level is n = 4, and the core is argon. Group 7 is in the d-block, so the 4s and 3d electrons add up to 7: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>. The element is manganese. (IB also accepts <span class="mono nowrap">[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span>.)</p>
      solution: "<p>第 4 周期なので、いちばん外側のエネルギー準位は n = 4 で、内側はアルゴンの電子配置です。7 族は d ブロックなので、4s 電子と 3d 電子を合わせて 7 個です。<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> となります。この元素はマンガンです。（IB は <span class=\"mono nowrap\">[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span> も認めます。）</p>",
      misconception: {
        // EN (option A): This configuration has 7 electrons in the fourth level, but it also leaves out the 3d sublevel. Seven outer s and p electrons belong to group 17, not group 7.
        "0": "この電子配置では、4 番目の準位に電子が 7 個ありますが、3d 副準位が抜けています。外側の s 電子と p 電子が合わせて 7 個なら 17 族で、7 族ではありません。",
        // EN (option B): For groups 3 to 12, the group number equals the number of 4s electrons plus 3d electrons. Here 2 + 7 = 9, which is group 9.
        "1": "3〜12 族では、族の番号は 4s 電子の数と 3d 電子の数の和です。ここでは 2 + 7 = 9 なので、9 族です。",
        // EN (option C): The noble gas in the brackets is the one at the end of the period before. For period 4 that is argon. [Kr] would put the element in period 5.
        "2": "かっこの中の貴ガスは、1 つ前の周期の最後にある貴ガスです。第 4 周期ならアルゴンです。[Kr] と書くと、第 5 周期の元素になってしまいます。",
      },
    },

    // ── s3-1-q007 · multi · exam · SL · Structure 3.1.2 · 1 mark
    "s3-1-q007": {
      // EN: <p>Which statements are correct? Select all that apply.</p>
      stem: "<p>正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Elements in the same group have the same number of valence electrons.
        "同じ族の元素は、価電子の数が同じである。",
        // EN: Elements in the same period have the same number of valence electrons.
        "同じ周期の元素は、価電子の数が同じである。",
        // EN: The period number is the number of the outer energy level that contains electrons.
        "周期の番号は、電子が入っているいちばん外側のエネルギー準位の番号である。",
        // EN: Bromine is a halogen.
        "臭素はハロゲンである。",
        // EN: Calcium is an alkali metal.
        "カルシウムはアルカリ金属である。",
      ],
      hints: [
        // EN: A group is a column. A period is a row.
        "族は縦の列です。周期は横の行です。",
        // EN: Alkali metals: group 1. Halogens: group 17. Noble gases: group 18. Transition elements: in the d-block.
        "アルカリ金属は 1 族、ハロゲンは 17 族、貴ガスは 18 族です。遷移元素は d ブロックにあります。",
      ],
      // EN: <p>Elements in a <strong>group</strong> have the same number of valence electrons. Elements in a <strong>period</strong> have the same outer occupied energy level, and the period number is the number of that level. Bromine is in group 17, so it is a halogen. Calcium is in group 2, so it is not an alkali metal.</p>
      solution: "<p>同じ<strong>族</strong>の元素は、価電子の数が同じです。同じ<strong>周期</strong>の元素は、電子が入っているいちばん外側のエネルギー準位が同じで、その準位の番号が周期の番号です。臭素は 17 族なので、ハロゲンです。カルシウムは 2 族なので、アルカリ金属ではありません。</p>",
      misconception: {
        // EN (option B): Across a period the number of valence electrons increases by one each time. What stays the same in a period is the outer occupied energy level.
        "1": "周期を左から右へ進むと、価電子は 1 個ずつ増えます。同じ周期で変わらないのは、電子が入っているいちばん外側のエネルギー準位です。",
        // EN (option E): The alkali metals are the group 1 metals (Li, Na, K, …). Calcium is in group 2.
        "4": "アルカリ金属は 1 族の金属（Li、Na、K、…）です。カルシウムは 2 族です。",
      },
    },

    // ── s3-1-q008 · mcq · challenge · SL · Structure 3.1.2 · 1 mark
    "s3-1-q008": {
      // EN: <p>The ion <span class="chem">X^2-</span> has the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>. Where is element X in the periodic table?</p>
      stem: "<p>イオン <span class=\"chem\">X^2-</span> の電子配置は <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span> です。元素 X は周期表のどこにありますか。</p>",
      options: [
        // EN: Period 4, group 18
        "第 4 周期、18 族",
        // EN: Period 4, group 16
        "第 4 周期、16 族",
        // EN: Period 5, group 2
        "第 5 周期、2 族",
        // EN: Period 3, group 16
        "第 3 周期、16 族",
      ],
      hints: [
        // EN: How many electrons does the ion have? How many does the neutral atom have?
        "このイオンの電子は何個ですか。中性の原子では何個ですか。",
        // EN: A 2− ion has two more electrons than its atom. Remove the last two electrons that were added.
        "2− のイオンは、原子より電子が 2 個多くなっています。最後に入った 2 個の電子を取り除きましょう。",
        // EN: Then read the period from the outer level and the group from the valence electrons.
        "それから、いちばん外側の準位から周期を、価電子の数から族を読み取ります。",
      ],
      // EN: <p>The ion has 36 electrons. A 2− ion has gained two electrons, so the atom of X has 34 electrons: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>.</p><p>The outer level is n = 4, so X is in <strong>period 4</strong>. It has 2 + 4 = 6 valence electrons and is in the p-block, so the group is 6 + 10 = <strong>16</strong>. X is selenium.</p>
      solution: "<p>このイオンの電子は 36 個です。2− のイオンは電子を 2 個受け取っているので、X の原子の電子は 34 個です。電子配置は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span> です。</p><p>いちばん外側の準位は n = 4 なので、X は<strong>第 4 周期</strong>にあります。価電子は 2 + 4 = 6 個で、p ブロックの元素なので、族は 6 + 10 = <strong>16</strong> 族です。X はセレンです。</p>",
      misconception: {
        // EN (option A): This is the position of the atom that has this configuration (krypton). The question gives the configuration of a 2− ion, which has two more electrons than the atom of X.
        "0": "これは、この電子配置をもつ原子（クリプトン）の位置です。問題の電子配置は 2− のイオンのもので、X の原子より電子が 2 個多くなっています。",
        // EN (option C): This adds two electrons. A 2− ion has gained two electrons, so the atom has two <em>fewer</em> electrons than the ion.
        "2": "これは電子を 2 個たしています。2− のイオンは電子を 2 個受け取っています。だから、原子の電子はイオンより 2 個<em>少ない</em>のです。",
        // EN (option D): The outer occupied level of the ion is n = 4, not n = 3. A sulfide ion has only 18 electrons. This ion has 36.
        "3": "このイオンで電子が入っているいちばん外側の準位は n = 4 で、n = 3 ではありません。硫化物イオンの電子は 18 個だけです。このイオンには 36 個あります。",
      },
    },

    // ── s3-1-q009 · mcq · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q009": {
      // EN: <p>The table shows atomic radii from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Atomic radius / 10<sup>−12</sup> m</caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Na</th><th class="num" scope="col">Mg</th><th class="num" scope="col">Al</th><th class="num" scope="col">Si</th><th class="num" scope="col">P</th><th class="num" scope="col">S</th><th class="num" scope="col">Cl</th></tr></thead><tbody><tr><th scope="row">Radius</th><td class="num">160</td><td class="num">140</td><td class="num">124</td><td class="num">114</td><td class="num">109</td><td class="num">104</td><td class="num">100</td></tr></tbody></table></div><p>Which statement explains the trend?</p>
      stem: "<p>表は、データブックレットにある原子半径です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>原子半径 / 10<sup>−12</sup> m</caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">Na</th><th class=\"num\" scope=\"col\">Mg</th><th class=\"num\" scope=\"col\">Al</th><th class=\"num\" scope=\"col\">Si</th><th class=\"num\" scope=\"col\">P</th><th class=\"num\" scope=\"col\">S</th><th class=\"num\" scope=\"col\">Cl</th></tr></thead><tbody><tr><th scope=\"row\">半径</th><td class=\"num\">160</td><td class=\"num\">140</td><td class=\"num\">124</td><td class=\"num\">114</td><td class=\"num\">109</td><td class=\"num\">104</td><td class=\"num\">100</td></tr></tbody></table></div><p>この傾向を説明している文はどれですか。</p>",
      options: [
        // EN: The number of occupied energy levels decreases across the period.
        "周期を左から右へ進むと、電子が入っているエネルギー準位の数が減る。",
        // EN: Shielding by inner electrons decreases across the period.
        "周期を左から右へ進むと、内側の電子による遮蔽が小さくなる。",
        // EN: The nuclear charge increases, and the outer electrons are in the same energy level with similar shielding.
        "核電荷が大きくなる。一方、外側の電子は同じエネルギー準位にあり、遮蔽はほぼ同じである。",
        // EN: The atoms gain electrons across the period, and electrons repel each other.
        "周期を左から右へ進むと原子の電子が増え、電子どうしが反発する。",
      ],
      hints: [
        // EN: Describe the trend first: does the radius increase or decrease from Na to Cl?
        "まず傾向を言葉にしましょう。Na から Cl へ、半径は大きくなりますか、小さくなりますか。",
        // EN: Compare Na and Cl: number of protons, number of occupied energy levels, number of inner electrons.
        "Na と Cl をくらべます。陽子の数、電子が入っているエネルギー準位の数、内側の電子の数はどうですか。",
      ],
      // EN: <p>The radius decreases from 160 to 100 (in 10<sup>−12</sup> m). Across period 3 the number of protons rises from 11 to 17, so the <strong>nuclear charge increases</strong>. The outer electrons are all in the <strong>same energy level</strong> (n = 3) and are shielded by the same 10 inner electrons. The outer electrons are attracted more strongly and are pulled closer to the nucleus.</p>
      solution: "<p>半径は 160 から 100 へ小さくなります（単位は 10<sup>−12</sup> m）。第 3 周期を左から右へ進むと、陽子の数は 11 から 17 へ増えます。だから<strong>核電荷 (nuclear charge) が大きくなります</strong>。外側の電子はすべて<strong>同じエネルギー準位</strong>（n = 3）にあり、同じ 10 個の内側の電子に遮蔽 (shielding) されています。外側の電子はより強く引きつけられ、原子核の近くへ引き寄せられます。</p>",
      misconception: {
        // EN (option A): All period 3 atoms have three occupied energy levels. The number of levels does not change across a period.
        "0": "第 3 周期の原子は、どれも 3 つのエネルギー準位に電子が入っています。周期を左から右へ進んでも、準位の数は変わりません。",
        // EN (option B): Every period 3 atom has the same 10 inner electrons, so the shielding by inner electrons stays about the same.
        "1": "第 3 周期の原子は、どれも同じ 10 個の内側の電子をもっています。だから、内側の電子による遮蔽はほぼ同じです。",
        // EN (option D): More repulsion would make the atoms larger. The data show that the atoms get smaller. The extra protons in the nucleus have the larger effect.
        "3": "反発が大きくなるなら、原子は大きくなるはずです。データでは原子は小さくなっています。原子核の陽子が増える効果のほうが大きいのです。",
      },
    },

    // ── s3-1-q010 · order · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q010": {
      // EN: <p>Use the positions of these elements in the periodic table. Put them in order of <strong>increasing electronegativity</strong> (lowest first).</p>
      stem: "<p>次の元素の周期表での位置を使います。<strong>電気陰性度の小さい順</strong>（いちばん小さいものを先）に並べましょう。</p>",
      options: [
        // EN: Potassium, K
        "カリウム K",
        // EN: Sodium, Na
        "ナトリウム Na",
        // EN: Silicon, Si
        "ケイ素 Si",
        // EN: Chlorine, Cl
        "塩素 Cl",
        // EN: Fluorine, F
        "フッ素 F",
      ],
      hints: [
        // EN: Electronegativity increases across a period, from left to right.
        "電気陰性度は、周期を左から右へ進むと大きくなります。",
        // EN: Electronegativity decreases down a group. Compare K with Na, and Cl with F.
        "電気陰性度は、族を上から下へ進むと小さくなります。K と Na、Cl と F をくらべましょう。",
      ],
      // EN: <p>Electronegativity is a measure of how strongly an atom attracts a bonding pair of electrons. It <strong>increases across a period</strong>: the nuclear charge increases while the shielding stays about the same. It <strong>decreases down a group</strong>: the bonding electrons are further from the nucleus and more shielded.</p><p>Data booklet values: K 0.8, Na 0.9, Si 1.9, Cl 3.2, F 4.0.</p>
      solution: "<p>電気陰性度 (electronegativity) は、原子が共有電子対を引きつける強さの尺度です。<strong>周期を左から右へ進むと大きくなります</strong>。核電荷が大きくなり、遮蔽はほぼ同じだからです。<strong>族を上から下へ進むと小さくなります</strong>。共有電子対が原子核から遠くなり、より強く遮蔽されるからです。</p><p>データブックレットの値：K 0.8、Na 0.9、Si 1.9、Cl 3.2、F 4.0。</p>",
    },

    // ── s3-1-q011 · mcq · foundation · SL · Structure 3.1.3 · 1 mark
    "s3-1-q011": {
      // EN: <p>Which equation represents the first electron affinity of chlorine?</p>
      stem: "<p>塩素の第一電子親和力 (first electron affinity) を表す式はどれですか。</p>",
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
        "ここでの「親和力 (affinity)」は、電子を受け取ることについての言葉です。失うことではありません。",
        // EN: The starting particle is one gaseous atom.
        "出発点の粒子は、気体の原子 1 個です。",
      ],
      // EN: <p>The first electron affinity is the energy change when one mole of electrons is added to one mole of gaseous atoms to form one mole of gaseous 1− ions:</p><div class="worked__math"><span class="chem">Cl(g) + e- -> Cl-(g)</span></div><p>For chlorine the data booklet value is −349 kJ mol<sup>−1</sup>. The negative sign shows that energy is released.</p>
      solution: "<p>第一電子親和力は、気体の原子 1 モルに電子 1 モルを加えて、気体の 1− のイオン 1 モルができるときのエネルギー変化です。</p><div class=\"worked__math\"><span class=\"chem\">Cl(g) + e- -> Cl-(g)</span></div><p>塩素では、データブックレットの値は −349 kJ mol<sup>−1</sup> です。負の符号は、エネルギーが放出されることを表します。</p>",
      misconception: {
        // EN (option A): This equation removes an electron from the atom. It represents the first ionization energy.
        "0": "この式は、原子から電子を取り除いています。第一イオン化エネルギーを表す式です。",
        // EN (option B): This equation removes an electron from the ion. It is the reverse of the electron affinity.
        "1": "この式は、イオンから電子を取り除いています。電子親和力の逆の変化です。",
        // EN (option C): Electron affinity is defined for separate gaseous <em>atoms</em>, not for molecules, and for one mole of electrons gained.
        "2": "電子親和力は、分子ではなく、ばらばらの気体の<em>原子</em>について定義します。また、受け取る電子は 1 モルです。",
      },
    },

    // ── s3-1-q012 · short · exam · SL · Structure 3.1.3 · 2 marks
    "s3-1-q012": {
      // EN: <p>The first ionization energies of three group 1 elements are: Li 520, Na 496, K 419 (in kJ mol<sup>−1</sup>).</p><p>Explain why the first ionization energy decreases down group 1.</p>
      stem: "<p>1 族の 3 つの元素の第一イオン化エネルギーは、Li 520、Na 496、K 419 です（単位は kJ mol<sup>−1</sup>）。</p><p>1 族を上から下へ進むと第一イオン化エネルギーが小さくなる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Write the outer electron of each atom: 2s, 3s, 4s.
        "それぞれの原子の、いちばん外側の電子を書きましょう。2s、3s、4s です。",
        // EN: Give two reasons why the nucleus holds a 4s electron in K less strongly than a 2s electron in Li.
        "K の 4s 電子は、Li の 2s 電子より原子核に弱く引きつけられています。その理由を 2 つあげましょう。",
      ],
      // EN: <p>Down the group, the outer electron is in a higher energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove the electron.</p><p>Do not write only “the atomic radius increases”. Say <em>why</em>: the electron is in a higher energy level and is more shielded.</p>
      answer: "<p>族を上から下へ進むと、いちばん外側の電子はより高いエネルギー準位に入るので、原子核から遠くなります。内側の電子も増えるので、いちばん外側の電子は原子核からより強く遮蔽されます。（核電荷は大きくなりますが）原子核といちばん外側の電子の間の引力は弱くなります。だから、その電子を取り除くのに必要なエネルギーは少なくなります。</p><p>「原子半径が大きくなる」とだけ書いてはいけません。<em>なぜ</em>かを書きましょう。電子がより高いエネルギー準位にあり、より強く遮蔽されているからです。</p>",
      markscheme: [
        // EN: The outer electron is in a higher energy level / further from the nucleus (do not accept “atomic radius increases” alone).
        "いちばん外側の電子が、より高いエネルギー準位にある / 原子核からより遠い（「原子半径が大きくなる」だけでは認めない）。",
        // EN: There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker.
        "内側の電子による遮蔽が大きくなるので、原子核といちばん外側の電子の間の引力が弱くなる。",
      ],
    },

    // ── s3-1-q013 · order · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q013": {
      // EN: <p>These five ions all have the electron configuration <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>. Put them in order of <strong>increasing ionic radius</strong> (smallest first).</p>
      stem: "<p>次の 5 つのイオンは、どれも電子配置が <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span> です。<strong>イオン半径の小さい順</strong>（いちばん小さいものを先）に並べましょう。</p>",
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
        "5 つのイオンは、どれも電子が 10 個です。では、何が違いますか。",
        // EN: Count the protons in each nucleus. More protons pull the same 10 electrons closer.
        "それぞれの原子核の陽子を数えましょう。陽子が多いほど、同じ 10 個の電子を近くへ引き寄せます。",
      ],
      // EN: <p>Each ion has 10 electrons in the same arrangement. The number of protons is different: O 8, F 9, Na 11, Mg 12, Al 13. A larger nuclear charge attracts the same number of electrons more strongly, so the ion is smaller.</p><p>Data booklet ionic radii (in 10<sup>−12</sup> m): <span class="chem">Al^3+</span> 54, <span class="chem">Mg^2+</span> 72, <span class="chem">Na+</span> 102, <span class="chem">F-</span> 133, <span class="chem">O^2-</span> 140.</p>
      solution: "<p>どのイオンも、10 個の電子が同じ配置で入っています。陽子の数は違います。O 8、F 9、Na 11、Mg 12、Al 13 です。核電荷が大きいほど、同じ数の電子をより強く引きつけるので、イオンは小さくなります。</p><p>データブックレットのイオン半径（単位は 10<sup>−12</sup> m）：<span class=\"chem\">Al^3+</span> 54、<span class=\"chem\">Mg^2+</span> 72、<span class=\"chem\">Na+</span> 102、<span class=\"chem\">F-</span> 133、<span class=\"chem\">O^2-</span> 140。</p>",
    },

    // ── s3-1-q014 · mcq · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q014": {
      // EN: <p>The data booklet gives these radii: Na atom 160, <span class="chem">Na+</span> ion 102 (in 10<sup>−12</sup> m).</p><p>Which statement best explains why the sodium ion is much smaller than the sodium atom?</p>
      stem: "<p>データブックレットには、次の半径がのっています。Na 原子 160、<span class=\"chem\">Na+</span> イオン 102（単位は 10<sup>−12</sup> m）。</p><p>ナトリウムイオンがナトリウム原子よりずっと小さい理由を、いちばんよく説明している文はどれですか。</p>",
      options: [
        // EN: The ion has more protons than the atom.
        "イオンは原子より陽子が多い。",
        // EN: The ion has one fewer occupied energy level than the atom.
        "イオンは原子より、電子が入っているエネルギー準位が 1 つ少ない。",
        // EN: The ion has gained an electron, so the nucleus attracts the electrons more strongly.
        "イオンは電子を 1 個受け取ったので、原子核が電子をより強く引きつける。",
        // EN: The ion has more shielding than the atom.
        "イオンは原子より遮蔽が大きい。",
      ],
      hints: [
        // EN: Write the electron configuration of Na and of <span class="chem">Na+</span>.
        "Na と <span class=\"chem\">Na+</span> の電子配置を書きましょう。",
        // EN: Which energy level is the outer one in each?
        "それぞれ、いちばん外側のエネルギー準位はどれですか。",
      ],
      // EN: <p>Na is <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. <span class="chem">Na+</span> is <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>. The ion has lost its only electron in the third energy level, so it has <strong>one fewer occupied energy level</strong>. The same 11 protons now attract only 10 electrons, so the remaining electrons are held more closely.</p><p>The opposite happens for a negative ion: <span class="chem">Cl-</span> (181) is larger than Cl (100), because the extra electron increases the repulsion between the outer electrons while the nuclear charge stays the same.</p>
      solution: "<p>Na は <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span> です。<span class=\"chem\">Na+</span> は <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span> です。イオンは、3 番目のエネルギー準位にあったただ 1 個の電子を失っています。だから、<strong>電子が入っているエネルギー準位が 1 つ少なく</strong>なっています。同じ 11 個の陽子が、10 個の電子だけを引きつけるので、残った電子はより近くに引きつけられます。</p><p>陰イオンでは逆のことが起こります。<span class=\"chem\">Cl-</span>（181）は Cl（100）より大きくなります。核電荷は変わらないのに、電子が 1 個増えて、外側の電子どうしの反発が大きくなるからです。</p>",
      misconception: {
        // EN (option A): Forming an ion does not change the nucleus. The atom and the ion both have 11 protons.
        "0": "イオンになっても、原子核は変わりません。原子もイオンも陽子は 11 個です。",
        // EN (option C): A positive ion forms when an atom <em>loses</em> an electron. Sodium loses its 3s electron.
        "2": "陽イオンは、原子が電子を<em>失って</em>できます。ナトリウムは 3s 電子を失います。",
        // EN (option D): The ion has fewer electrons than the atom, so it cannot have more shielding.
        "3": "イオンは原子より電子が少ないので、遮蔽が大きくなることはありません。",
      },
    },

    // ── s3-1-q015 · short · challenge · SL · Structure 3.1.3 · 3 marks
    "s3-1-q015": {
      // EN: <p>The table shows ionic radii from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Ionic radius / 10<sup>−12</sup> m</caption><thead><tr><th scope="col">Ion</th><th class="num" scope="col"><span class="chem">S^2-</span></th><th class="num" scope="col"><span class="chem">Cl-</span></th><th class="num" scope="col"><span class="chem">K+</span></th><th class="num" scope="col"><span class="chem">Ca^2+</span></th></tr></thead><tbody><tr><th scope="row">Radius</th><td class="num">184</td><td class="num">181</td><td class="num">138</td><td class="num">100</td></tr></tbody></table></div><p>Explain the trend in ionic radius from <span class="chem">S^2-</span> to <span class="chem">Ca^2+</span>.</p>
      stem: "<p>表は、データブックレットにあるイオン半径です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>イオン半径 / 10<sup>−12</sup> m</caption><thead><tr><th scope=\"col\">イオン</th><th class=\"num\" scope=\"col\"><span class=\"chem\">S^2-</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">Cl-</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">K+</span></th><th class=\"num\" scope=\"col\"><span class=\"chem\">Ca^2+</span></th></tr></thead><tbody><tr><th scope=\"row\">半径</th><td class=\"num\">184</td><td class=\"num\">181</td><td class=\"num\">138</td><td class=\"num\">100</td></tr></tbody></table></div><p><span class=\"chem\">S^2-</span> から <span class=\"chem\">Ca^2+</span> までのイオン半径の傾向を説明しなさい (explain)。</p>",
      hints: [
        // EN: Count the electrons in each ion.
        "それぞれのイオンの電子を数えましょう。",
        // EN: Count the protons in each ion.
        "それぞれのイオンの陽子を数えましょう。",
        // EN: Link the two: same electrons, different pull.
        "この 2 つをつなげます。電子は同じで、引きつける力が違います。",
      ],
      // EN: <p>All four ions have 18 electrons and the same electron configuration, <span class="mono nowrap">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>. The nuclear charge increases from 16 protons in <span class="chem">S^2-</span> to 20 protons in <span class="chem">Ca^2+</span>. The same number of electrons is attracted more strongly by the larger nuclear charge, so the electrons are pulled closer to the nucleus and the radius decreases.</p>
      answer: "<p>4 つのイオンはどれも電子が 18 個で、電子配置は同じ <span class=\"mono nowrap\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span> です。核電荷は、<span class=\"chem\">S^2-</span> の陽子 16 個から <span class=\"chem\">Ca^2+</span> の陽子 20 個へ大きくなります。同じ数の電子が、大きくなった核電荷により強く引きつけられます。だから、電子は原子核の近くへ引き寄せられ、半径は小さくなります。</p>",
      markscheme: [
        // EN: All four ions have the same number of electrons / the same electron configuration (18 electrons; accept “isoelectronic”).
        "4 つのイオンはどれも電子の数が同じ / 電子配置が同じ（電子 18 個。「等電子的 (isoelectronic)」も認める）。",
        // EN: The nuclear charge / number of protons increases from S (16) to Ca (20).
        "核電荷 / 陽子の数が、S（16）から Ca（20）へ大きくなる。",
        // EN: So the electrons are attracted more strongly / pulled closer to the nucleus (and the radius decreases).
        "だから、電子はより強く引きつけられる / 原子核の近くへ引き寄せられる（そして半径が小さくなる）。",
      ],
    },

    // ── s3-1-q016 · multi · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q016": {
      // EN: <p>Which of these <strong>increase</strong> across period 3 from sodium to chlorine? Select all that apply.</p>
      stem: "<p>第 3 周期をナトリウムから塩素へ進むとき、<strong>大きくなる</strong>ものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Nuclear charge
        "核電荷",
        // EN: Atomic radius
        "原子半径",
        // EN: First ionization energy (general trend)
        "第一イオン化エネルギー（全体の傾向）",
        // EN: Electronegativity
        "電気陰性度",
        // EN: Number of occupied energy levels
        "電子が入っているエネルギー準位の数",
      ],
      hints: [
        // EN: Start with the nucleus: what changes from Na (Z = 11) to Cl (Z = 17)?
        "原子核から考えましょう。Na（Z = 11）から Cl（Z = 17）へ、何が変わりますか。",
        // EN: A stronger attraction for outer electrons makes the atom smaller, makes an electron harder to remove, and attracts bonding electrons more.
        "外側の電子を引きつける力が強くなると、原子は小さくなります。電子は取り除きにくくなります。共有電子対を引きつける力も強くなります。",
      ],
      // EN: <p>Across period 3 the <strong>nuclear charge</strong> increases (11 to 17 protons). The outer electrons are in the same energy level with similar shielding, so they are attracted more strongly. This means:</p><ul><li>atomic radius decreases (160 to 100, in 10<sup>−12</sup> m);</li><li>first ionization energy generally increases (Na 496, Cl 1251 kJ mol<sup>−1</sup>);</li><li>electronegativity increases (Na 0.9, Cl 3.2).</li></ul><p>The number of occupied energy levels stays at three.</p>
      solution: "<p>第 3 周期を左から右へ進むと、<strong>核電荷</strong>が大きくなります（陽子 11 個から 17 個へ）。外側の電子は同じエネルギー準位にあり、遮蔽はほぼ同じなので、より強く引きつけられます。その結果は次のとおりです。</p><ul><li>原子半径は小さくなる（160 から 100 へ、単位は 10<sup>−12</sup> m）。</li><li>第一イオン化エネルギーは、全体として大きくなる（Na 496、Cl 1251 kJ mol<sup>−1</sup>）。</li><li>電気陰性度は大きくなる（Na 0.9、Cl 3.2）。</li></ul><p>電子が入っているエネルギー準位の数は、3 つのままです。</p>",
      misconception: {
        // EN (option B): Atomic radius decreases across a period: Na 160, Cl 100 (in 10<sup>−12</sup> m). The increasing nuclear charge pulls the outer electrons closer.
        "1": "原子半径は、周期を左から右へ進むと小さくなります。Na 160、Cl 100 です（単位は 10<sup>−12</sup> m）。大きくなる核電荷が、外側の電子を近くへ引き寄せます。",
        // EN (option E): Every period 3 atom has three occupied energy levels. That is what makes them one period.
        "4": "第 3 周期の原子は、どれも 3 つのエネルギー準位に電子が入っています。だから同じ周期なのです。",
      },
    },

    // ── s3-1-q017 · mcq · exam · SL · Structure 3.1.3 · 1 mark
    "s3-1-q017": {
      // EN: <p>The table shows first electron affinities from the data booklet.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First electron affinity / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">F</th><th class="num" scope="col">Cl</th><th class="num" scope="col">Br</th><th class="num" scope="col">I</th></tr></thead><tbody><tr><th scope="row">EA</th><td class="num">−328</td><td class="num">−349</td><td class="num">−325</td><td class="num">−295</td></tr></tbody></table></div><p>Which statement is supported by the data?</p>
      stem: "<p>表は、データブックレットにある第一電子親和力です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>第一電子親和力 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">F</th><th class=\"num\" scope=\"col\">Cl</th><th class=\"num\" scope=\"col\">Br</th><th class=\"num\" scope=\"col\">I</th></tr></thead><tbody><tr><th scope=\"row\">EA</th><td class=\"num\">−328</td><td class=\"num\">−349</td><td class=\"num\">−325</td><td class=\"num\">−295</td></tr></tbody></table></div><p>このデータから言えることはどれですか。</p>",
      options: [
        // EN: A fluorine atom releases the most energy when it gains an electron.
        "電子を 1 個受け取るとき、いちばん多くのエネルギーを放出するのはフッ素原子である。",
        // EN: Energy must be supplied to add an electron to each of these atoms.
        "これらの原子に電子を 1 個加えるには、どれもエネルギーを与えなければならない。",
        // EN: From chlorine to iodine, less energy is released when an atom gains an electron.
        "塩素からヨウ素へ進むと、原子が電子を 1 個受け取るときに放出されるエネルギーは少なくなる。",
        // EN: Electron affinity becomes more exothermic down the whole group.
        "電子親和力は、族全体を通して、上から下へ進むほど発熱が大きくなる。",
      ],
      hints: [
        // EN: A more negative value means more energy is released.
        "値が負に大きいほど、放出されるエネルギーが多いことを表します。",
        // EN: Compare the size of the numbers from Cl down to I.
        "Cl から I まで、数値の大きさをくらべましょう。",
      ],
      // EN: <p>From chlorine to iodine the values change from −349 to −325 to −295 kJ mol<sup>−1</sup>. They become less negative, so <strong>less energy is released</strong>.</p><p>Explanation: down the group, the added electron enters a higher energy level. It is further from the nucleus and more shielded, so it is attracted less strongly.</p><p>Fluorine does not follow the pattern. Its atom is very small, so the added electron is repelled more by the electrons already there. You do not need to explain this exception.</p>
      solution: "<p>塩素からヨウ素へ、値は −349、−325、−295 kJ mol<sup>−1</sup> と変わります。負の値が小さくなっていくので、<strong>放出されるエネルギーは少なくなります</strong>。</p><p>説明：族を上から下へ進むと、加わる電子はより高いエネルギー準位に入ります。原子核から遠くなり、より強く遮蔽されるので、引きつけられる力は弱くなります。</p><p>フッ素はこの規則性に合いません。フッ素原子はとても小さいので、加わる電子は、すでにある電子からより強く反発されます。この例外を説明できる必要はありません。</p>",
      misconception: {
        // EN (option A): Read the values again: chlorine (−349) is more negative than fluorine (−328), so chlorine releases more energy. Fluorine has the highest electronegativity, but that is a different property.
        "0": "値をもう一度読みましょう。塩素（−349）のほうがフッ素（−328）より負に大きいので、塩素のほうが多くのエネルギーを放出します。フッ素は電気陰性度がいちばん大きい元素ですが、それは別の性質です。",
        // EN (option B): All four values are negative. A negative energy change means energy is released (exothermic).
        "1": "4 つの値はどれも負です。エネルギー変化が負なら、エネルギーが放出されます（発熱）。",
        // EN (option D): From Cl to Br to I the values become <em>less</em> negative: −349, −325, −295. Less energy is released.
        "3": "Cl、Br、I と進むと、負の値は<em>小さく</em>なります。−349、−325、−295 です。放出されるエネルギーは少なくなります。",
      },
    },

    // ── s3-1-q018 · short · challenge · SL · Structure 3.1.3 · 3 marks
    "s3-1-q018": {
      // EN: <p>The first ionization energies of three elements are: F 1681, Cl 1251, S 1000 (in kJ mol<sup>−1</sup>).</p><p>Explain why the first ionization energy of fluorine is higher than that of chlorine, and why that of chlorine is higher than that of sulfur.</p>
      stem: "<p>3 つの元素の第一イオン化エネルギーは、F 1681、Cl 1251、S 1000 です（単位は kJ mol<sup>−1</sup>）。</p><p>フッ素の第一イオン化エネルギーが塩素より大きい理由と、塩素の第一イオン化エネルギーが硫黄より大きい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Treat the two comparisons separately. F and Cl are in the same group. Cl and S are in the same period.
        "2 つの比較を分けて考えましょう。F と Cl は同じ族です。Cl と S は同じ周期です。",
        // EN: Same group: what changes is the energy level and the shielding.
        "同じ族：変わるのは、エネルギー準位と遮蔽です。",
        // EN: Same period: what changes is the nuclear charge.
        "同じ周期：変わるのは核電荷です。",
      ],
      // EN: <p><strong>F and Cl</strong> (same group): the outer electrons of fluorine are in the second energy level. Those of chlorine are in the third. The outer electron in fluorine is closer to the nucleus and is shielded by fewer inner electrons, so it is attracted more strongly.</p><p><strong>Cl and S</strong> (same period): the outer electrons are in the same energy level (n = 3) with the same shielding. Chlorine has 17 protons and sulfur has 16, so chlorine has the larger nuclear charge and attracts its outer electrons more strongly. More energy is needed to remove one.</p>
      answer: "<p><strong>F と Cl</strong>（同じ族）：フッ素の外側の電子は 2 番目のエネルギー準位にあります。塩素では 3 番目です。フッ素のいちばん外側の電子は原子核に近く、遮蔽する内側の電子も少ないので、より強く引きつけられます。</p><p><strong>Cl と S</strong>（同じ周期）：外側の電子は同じエネルギー準位（n = 3）にあり、遮蔽も同じです。塩素の陽子は 17 個、硫黄は 16 個です。だから塩素のほうが核電荷が大きく、外側の電子をより強く引きつけます。電子を 1 個取り除くのに、より多くのエネルギーが必要です。</p>",
      markscheme: [
        // EN: In F the outer electron is in a lower energy level / closer to the nucleus / less shielded than in Cl.
        "F のいちばん外側の電子は、Cl とくらべて、より低いエネルギー準位にある / 原子核に近い / 遮蔽が小さい。",
        // EN: In Cl and S the outer electrons are in the same energy level / have the same (similar) shielding.
        "Cl と S では、外側の電子が同じエネルギー準位にある / 遮蔽が同じ（ほぼ同じ）。",
        // EN: Cl has a greater nuclear charge / more protons than S, so the outer electron is attracted more strongly.
        "Cl は S より核電荷が大きい / 陽子が多いので、いちばん外側の電子がより強く引きつけられる。",
      ],
    },

    // ── s3-1-q019 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "s3-1-q019": {
      // EN: <p>A small piece of sodium is added to a large trough of water. What is observed?</p>
      stem: "<p>大きな水槽に入れた水に、ナトリウムの小さなかけらを加えます。何が観察されますか。</p>",
      options: [
        // EN: The sodium sinks and reacts slowly.
        "ナトリウムは沈み、ゆっくり反応する。",
        // EN: The sodium floats, moves across the surface and fizzes.
        "ナトリウムは浮き、水面を動き回り、泡を出す。",
        // EN: The sodium floats and a brown gas is given off.
        "ナトリウムは浮き、褐色の気体が発生する。",
        // EN: The sodium sinks and a white precipitate forms.
        "ナトリウムは沈み、白い沈殿ができる。",
      ],
      hints: [
        // EN: Is sodium more dense or less dense than water?
        "ナトリウムの密度は、水より大きいですか、小さいですか。",
        // EN: One product is a gas. What do you see when a gas forms in a liquid?
        "生成物の 1 つは気体です。液体の中で気体ができると、何が見えますか。",
      ],
      // EN: <p>Sodium <strong>floats</strong>, melts into a ball, <strong>moves</strong> across the surface, <strong>fizzes</strong> and gets smaller until it disappears. The solution left is alkaline.</p><div class="worked__math"><span class="chem">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></div>
      solution: "<p>ナトリウムは<strong>浮き</strong>、融けて球になり、水面を<strong>動き回り</strong>、<strong>泡を出し</strong>ながら小さくなって、最後には消えます。残った溶液はアルカリ性です。</p><div class=\"worked__math\"><span class=\"chem\">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></div>",
      misconception: {
        // EN (option A): Sodium is less dense than water, so it floats. The reaction is fast.
        "0": "ナトリウムは水より密度が小さいので、浮きます。反応は速く進みます。",
        // EN (option C): The gas is hydrogen, which is colourless.
        "2": "発生する気体は水素で、無色です。",
        // EN (option D): Sodium floats. The product, sodium hydroxide, is soluble, so the solution stays clear and colourless.
        "3": "ナトリウムは浮きます。生成物の水酸化ナトリウムは水に溶けるので、溶液は無色透明のままです。",
      },
    },

    // ── s3-1-q020 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "s3-1-q020": {
      // EN: <p>Which is the correct balanced equation for the reaction of potassium with water?</p>
      stem: "<p>カリウムと水の反応を表す、係数の合った正しい化学反応式はどれですか。</p>",
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
        "生成物は、金属の水酸化物と水素の気体です。",
        // EN: Potassium forms <span class="chem">K+</span>. Write the formula of the hydroxide, then balance H.
        "カリウムは <span class=\"chem\">K+</span> になります。水酸化物の化学式を書いてから、H の数を合わせましょう。",
      ],
      // EN: <div class="worked__math"><span class="chem">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span></div><p>Check: K 2 = 2; H 4 = 2 + 2; O 2 = 2. All group 1 metals react in the same way, because each atom loses its one valence electron to form a 1+ ion.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)</span></div><p>確認：K 2 = 2、H 4 = 2 + 2、O 2 = 2。1 族の金属は、どれも同じように反応します。どの原子も、1 個の価電子を失って 1+ のイオンになるからです。</p>",
      misconception: {
        // EN (option A): The formulas are right, but the equation is not balanced. Count hydrogen: 2 on the left, 3 on the right.
        "0": "化学式は正しいのですが、式の係数が合っていません。水素を数えましょう。左辺に 2 個、右辺に 3 個あります。",
        // EN (option B): A group 1 metal and water give the metal <em>hydroxide</em> and hydrogen. The oxide would react with water to give the hydroxide.
        "1": "1 族の金属と水からは、金属の<em>水酸化物</em>と水素ができます。酸化物ができたとしても、水と反応して水酸化物になります。",
        // EN (option D): Potassium is in group 1, so it forms the 1+ ion. The hydroxide is KOH, not <span class="chem">K(OH)2</span>.
        "3": "カリウムは 1 族なので、1+ のイオンになります。水酸化物は KOH で、<span class=\"chem\">K(OH)2</span> ではありません。",
      },
    },

    // ── s3-1-q021 · short · exam · SL · Structure 3.1.4 · 3 marks
    "s3-1-q021": {
      // EN: <p>Lithium, sodium and potassium all react with water. Describe and explain the trend in reactivity from lithium to potassium.</p>
      stem: "<p>リチウム、ナトリウム、カリウムは、どれも水と反応します。リチウムからカリウムまでの反応性の傾向を記述し (describe)、説明しなさい (explain)。</p>",
      hints: [
        // EN: “Describe” needs the direction of the trend. “Explain” needs the reason.
        "「記述しなさい (describe)」には、傾向の向きが必要です。「説明しなさい (explain)」には、理由が必要です。",
        // EN: In this reaction each metal atom loses one electron. What makes that electron easier to lose?
        "この反応では、金属の原子がそれぞれ電子を 1 個失います。その電子が失われやすくなるのはなぜですか。",
      ],
      // EN: <p>The reactivity increases down the group: the reaction with water becomes more vigorous from lithium to sodium to potassium.</p><p>Down the group, the outer electron is in a higher energy level. It is further from the nucleus and more shielded by inner electrons. The attraction between the nucleus and the outer electron is weaker, so the first ionization energy is lower and the atom loses its outer electron more easily.</p>
      answer: "<p>反応性は、族を上から下へ進むと大きくなります。水との反応は、リチウム、ナトリウム、カリウムの順に激しくなります。</p><p>族を上から下へ進むと、いちばん外側の電子はより高いエネルギー準位に入ります。原子核から遠くなり、内側の電子により強く遮蔽されます。原子核といちばん外側の電子の間の引力が弱くなるので、第一イオン化エネルギーは小さくなり、原子はいちばん外側の電子を失いやすくなります。</p>",
      markscheme: [
        // EN: Reactivity increases down the group / the reaction becomes more vigorous from Li to K.
        "反応性は、族を上から下へ進むと大きくなる / 反応は Li から K へ激しくなる。",
        // EN: Down the group the outer electron is in a higher energy level / further from the nucleus AND more shielded.
        "族を上から下へ進むと、いちばん外側の電子がより高いエネルギー準位にある / 原子核からより遠い。かつ (AND)、より強く遮蔽される。",
        // EN: So the attraction for the outer electron is weaker / the ionization energy is lower / the outer electron is lost more easily.
        "だから、いちばん外側の電子を引きつける力が弱くなる / イオン化エネルギーが小さくなる / いちばん外側の電子が失われやすくなる。",
      ],
    },

    // ── s3-1-q022 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "s3-1-q022": {
      // EN: <p>Pairs of aqueous solutions are mixed. In which mixture does a reaction occur?</p>
      stem: "<p>水溶液を 2 つずつ混ぜます。反応が起こる組み合わせはどれですか。</p>",
      options: [
        // EN: <span class="chem">Br2(aq)</span> and <span class="chem">KCl(aq)</span>
        "<span class=\"chem\">Br2(aq)</span> と <span class=\"chem\">KCl(aq)</span>",
        // EN: <span class="chem">I2(aq)</span> and <span class="chem">KBr(aq)</span>
        "<span class=\"chem\">I2(aq)</span> と <span class=\"chem\">KBr(aq)</span>",
        // EN: <span class="chem">I2(aq)</span> and <span class="chem">KCl(aq)</span>
        "<span class=\"chem\">I2(aq)</span> と <span class=\"chem\">KCl(aq)</span>",
        // EN: <span class="chem">Cl2(aq)</span> and <span class="chem">KI(aq)</span>
        "<span class=\"chem\">Cl2(aq)</span> と <span class=\"chem\">KI(aq)</span>",
      ],
      hints: [
        // EN: Reactivity decreases down group 17: <span class="chem">Cl2</span> &gt; <span class="chem">Br2</span> &gt; <span class="chem">I2</span>.
        "17 族を上から下へ進むと、反応性は小さくなります。<span class=\"chem\">Cl2</span> &gt; <span class=\"chem\">Br2</span> &gt; <span class=\"chem\">I2</span> です。",
        // EN: A halogen displaces the halide ion of a halogen <em>below</em> it in the group.
        "ハロゲンは、族の中で自分より<em>下</em>にあるハロゲンのハロゲン化物イオンを置換します。",
      ],
      // EN: <p>A more reactive halogen displaces a less reactive halogen from its halide ion. Chlorine is above iodine, so it reacts:</p><div class="worked__math"><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></div><p>The mixture turns brown as iodine forms. A chlorine atom is smaller than an iodine atom, so the electron it gains is closer to the nucleus and less shielded. Chlorine attracts the extra electron more strongly.</p>
      solution: "<p>反応性の高いハロゲンは、反応性の低いハロゲンを、そのハロゲン化物イオンから追い出します。これを置換 (displacement) といいます。塩素はヨウ素より上にあるので、反応します。</p><div class=\"worked__math\"><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></div><p>ヨウ素ができるので、混合物は褐色になります。塩素原子はヨウ素原子より小さいので、受け取る電子は原子核に近く、遮蔽も小さくなります。塩素のほうが、加わる電子をより強く引きつけます。</p>",
      misconception: {
        // EN (option A): Bromine is below chlorine in group 17, so it is less reactive. It cannot displace chloride ions.
        "0": "臭素は 17 族で塩素より下にあるので、反応性が低くなります。塩化物イオンを置換できません。",
        // EN (option B): Iodine is below bromine in group 17, so it is less reactive. It cannot displace bromide ions.
        "1": "ヨウ素は 17 族で臭素より下にあるので、反応性が低くなります。臭化物イオンを置換できません。",
        // EN (option C): Iodine is the least reactive of the three halogens here. It cannot displace chloride ions.
        "2": "ヨウ素は、この 3 つのハロゲンの中で反応性がいちばん低いものです。塩化物イオンを置換できません。",
      },
    },

    // ── s3-1-q023 · short · challenge · SL · Structure 3.1.4 · 3 marks
    "s3-1-q023": {
      // EN: <p>A student has an aqueous solution of one halogen, <span class="chem">X2</span>. The halogen is chlorine, bromine or iodine.</p><ul><li>Test 1: <span class="chem">X2(aq)</span> is added to <span class="chem">KCl(aq)</span>. No reaction occurs.</li><li>Test 2: <span class="chem">X2(aq)</span> is added to <span class="chem">KI(aq)</span>. A reaction occurs and iodine forms.</li></ul><p>Identify <span class="chem">X2</span>, explain your reasoning, and write an ionic equation, with state symbols, for the reaction in test 2.</p>
      stem: "<p>生徒が、あるハロゲン <span class=\"chem\">X2</span> の水溶液をもっています。このハロゲンは、塩素、臭素、ヨウ素のどれかです。</p><ul><li>テスト 1：<span class=\"chem\">X2(aq)</span> を <span class=\"chem\">KCl(aq)</span> に加える。反応は起こらない。</li><li>テスト 2：<span class=\"chem\">X2(aq)</span> を <span class=\"chem\">KI(aq)</span> に加える。反応が起こり、ヨウ素ができる。</li></ul><p><span class=\"chem\">X2</span> を特定し (identify)、そう考えた理由を説明しなさい (explain)。また、テスト 2 の反応のイオン反応式 (ionic equation) を、状態記号をつけて書きなさい。</p>",
      hints: [
        // EN: Which halogens can displace iodide ions?
        "ヨウ化物イオンを置換できるハロゲンはどれですか。",
        // EN: Which halogen cannot displace chloride ions but can displace iodide ions?
        "塩化物イオンは置換できないが、ヨウ化物イオンは置換できるハロゲンはどれですか。",
        // EN: In the ionic equation leave out <span class="chem">K+</span>. It does not change.
        "イオン反応式では、<span class=\"chem\">K+</span> を省きます。変化しないからです。",
      ],
      // EN: <p><span class="chem">X2</span> is <strong>bromine</strong>. A halogen displaces the halide ions of a less reactive halogen. Test 2 shows that <span class="chem">X2</span> is more reactive than iodine, so it is not iodine. Test 1 shows that <span class="chem">X2</span> cannot displace chloride ions, so it is less reactive than chlorine (and it is not chlorine, which does not react with its own ions). Reactivity decreases down group 17, so <span class="chem">X2</span> is bromine.</p><div class="worked__math"><span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span></div>
      answer: "<p><span class=\"chem\">X2</span> は<strong>臭素</strong>です。ハロゲンは、自分より反応性の低いハロゲンのハロゲン化物イオンを置換します。テスト 2 から、<span class=\"chem\">X2</span> はヨウ素より反応性が高いとわかります。だからヨウ素ではありません。テスト 1 から、<span class=\"chem\">X2</span> は塩化物イオンを置換できないとわかります。だから塩素より反応性が低いのです（塩素でもありません。塩素は自分自身のイオンとは反応しません）。17 族を上から下へ進むと反応性は小さくなるので、<span class=\"chem\">X2</span> は臭素です。</p><div class=\"worked__math\"><span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span></div>",
      markscheme: [
        // EN: X<sub>2</sub> is bromine / Br<sub>2</sub>.
        "X<sub>2</sub> は臭素 / Br<sub>2</sub>。",
        // EN: It displaces iodide ions, so it is more reactive than iodine, but it does not displace chloride ions, so it is less reactive than chlorine (accept: reactivity decreases down group 17).
        "ヨウ化物イオンを置換するので、ヨウ素より反応性が高い。しかし、塩化物イオンを置換しないので、塩素より反応性が低い（「17 族を上から下へ進むと反応性が小さくなる」も認める）。",
        // EN: <span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span> (balanced, with state symbols).
        "<span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>（係数が合っていて、状態記号がある）。",
      ],
    },

    // ── s3-1-q024 · mcq · foundation · SL · Structure 3.1.5 · 1 mark
    "s3-1-q024": {
      // EN: <p>Aluminium oxide is described as an amphoteric oxide. What does “amphoteric” mean?</p>
      stem: "<p>酸化アルミニウムは両性酸化物 (amphoteric oxide) といわれます。「両性 (amphoteric)」とはどういう意味ですか。</p>",
      options: [
        // EN: The oxide is neutral: it reacts with neither acids nor bases.
        "中性の酸化物で、酸とも塩基とも反応しない。",
        // EN: The oxide reacts with both acids and bases.
        "酸とも塩基とも反応する酸化物である。",
        // EN: The oxide dissolves in water to give a solution with pH 7.
        "水に溶けて、pH 7 の溶液になる酸化物である。",
        // EN: The oxide contains both a metal and a non-metal.
        "金属と非金属の両方を含む酸化物である。",
      ],
      hints: [
        // EN: Think about where aluminium is in period 3: between the metals with basic oxides and the non-metals with acidic oxides.
        "アルミニウムが第 3 周期のどこにあるかを考えましょう。酸化物が塩基性の金属と、酸化物が酸性の非金属の間にあります。",
      ],
      // EN: <p>An amphoteric oxide can act as a base and as an acid: it <strong>reacts with both acids and bases</strong>. Across a period the oxides change from basic (metals, on the left) through amphoteric to acidic (non-metals, on the right). Aluminium oxide is in the middle.</p>
      solution: "<p>両性酸化物は、塩基としても酸としてもはたらきます。つまり、<strong>酸とも塩基とも反応します</strong>。周期を左から右へ進むと、酸化物は塩基性（左側の金属）から両性をへて、酸性（右側の非金属）へ変わります。酸化アルミニウムはその中間にあります。</p>",
      misconception: {
        // EN (option A): Amphoteric is not the same as neutral. A neutral oxide reacts with neither. An amphoteric oxide reacts with both.
        "0": "両性は中性と同じではありません。中性の酸化物は、酸とも塩基とも反応しません。両性酸化物は、どちらとも反応します。",
        // EN (option C): Amphoteric describes how the oxide reacts, not the pH of a solution. Aluminium oxide does not dissolve in water.
        "2": "両性は、酸化物の反応のしかたを表す言葉で、溶液の pH のことではありません。酸化アルミニウムは水に溶けません。",
        // EN (option D): Every metal oxide contains a metal and a non-metal (oxygen). Amphoteric describes acid–base behaviour.
        "3": "金属の酸化物は、どれも金属と非金属（酸素）を含みます。両性は、酸・塩基としての性質を表す言葉です。",
      },
    },

    // ── s3-1-q025 · order · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q025": {
      // EN: <p>Put these period 3 oxides in order, from the <strong>most basic</strong> (top) to the <strong>most acidic</strong> (bottom).</p>
      stem: "<p>次の第 3 周期の酸化物を、<strong>塩基性がいちばん強いもの</strong>（上）から<strong>酸性がいちばん強いもの</strong>（下）の順に並べましょう。</p>",
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
        "第 3 周期で Na、Mg、Al、S を探しましょう。",
        // EN: Metal oxides are basic. Non-metal oxides are acidic. The change across the period is gradual.
        "金属の酸化物は塩基性です。非金属の酸化物は酸性です。周期を左から右へ、少しずつ変わっていきます。",
      ],
      // EN: <p>Across period 3 the elements change from metals to non-metals, and the oxides change from basic to acidic. <span class="chem">Na2O</span> is strongly basic and <span class="chem">MgO</span> is basic. <span class="chem">Al2O3</span> is amphoteric. <span class="chem">SO3</span> is a non-metal oxide and is strongly acidic.</p>
      solution: "<p>第 3 周期を左から右へ進むと、元素は金属から非金属へ変わり、酸化物は塩基性から酸性へ変わります。<span class=\"chem\">Na2O</span> は強い塩基性で、<span class=\"chem\">MgO</span> は塩基性です。<span class=\"chem\">Al2O3</span> は両性です。<span class=\"chem\">SO3</span> は非金属の酸化物で、強い酸性です。</p>",
    },

    // ── s3-1-q026 · short · exam · SL · Structure 3.1.5 · 2 marks
    "s3-1-q026": {
      // EN: <p>Deduce equations, including state symbols, for the reactions with water of:</p><ul><li>(a) lithium oxide</li><li>(b) calcium oxide.</li></ul>
      stem: "<p>次の物質と水との反応の化学反応式を、状態記号をつけて導きなさい (deduce)。</p><ul><li>(a) 酸化リチウム (lithium oxide)</li><li>(b) 酸化カルシウム (calcium oxide)</li></ul>",
      hints: [
        // EN: Metal oxide + water → metal hydroxide.
        "金属の酸化物 + 水 → 金属の水酸化物。",
        // EN: Lithium forms <span class="chem">Li+</span> and calcium forms <span class="chem">Ca^2+</span>. Write each hydroxide formula first, then balance.
        "リチウムは <span class=\"chem\">Li+</span> に、カルシウムは <span class=\"chem\">Ca^2+</span> になります。まず水酸化物の化学式を書き、それから係数を合わせましょう。",
      ],
      // EN: <div class="worked__math"><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></div><div class="worked__math"><span class="chem">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span></div><p>An oxide of a group 1 or group 2 metal reacts with water to form the metal hydroxide only. No hydrogen forms. The solutions are alkaline.</p>
      answer: "<div class=\"worked__math\"><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></div><div class=\"worked__math\"><span class=\"chem\">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span></div><p>1 族や 2 族の金属の酸化物は、水と反応して金属の水酸化物だけをつくります。水素はできません。溶液はアルカリ性です。</p>",
      markscheme: [
        // EN: <span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span> (balanced, with state symbols).
        "<span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span>（係数が合っていて、状態記号がある）。",
        // EN: <span class="chem">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span> (with state symbols; accept <span class="chem">Ca(OH)2(s)</span>).
        "<span class=\"chem\">CaO(s) + H2O(l) -> Ca(OH)2(aq)</span>（状態記号がある。<span class=\"chem\">Ca(OH)2(s)</span> も認める）。",
      ],
    },

    // ── s3-1-q027 · mcq · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q027": {
      // EN: <p>Which statement about ocean acidification is correct?</p>
      stem: "<p>海洋酸性化 (ocean acidification) について、正しい文はどれですか。</p>",
      options: [
        // EN: It is caused mainly by acid rain falling into the sea.
        "おもな原因は、酸性雨が海に降ることである。",
        // EN: It is caused by sulfur dioxide from the sea floor dissolving in sea water.
        "原因は、海底から出る二酸化硫黄が海水に溶けることである。",
        // EN: It is caused by more carbon dioxide from the atmosphere dissolving in sea water.
        "原因は、大気中の二酸化炭素が海水に溶ける量が増えることである。",
        // EN: It is caused by metal oxides dissolving in sea water.
        "原因は、金属の酸化物が海水に溶けることである。",
      ],
      hints: [
        // EN: Which gas in the atmosphere is increasing in concentration?
        "大気中で濃度が増えている気体はどれですか。",
        // EN: Is the oxide of carbon acidic or basic?
        "炭素の酸化物は酸性ですか、塩基性ですか。",
      ],
      // EN: <p>Carbon dioxide is an acidic non-metal oxide. As the level of <span class="chem">CO2</span> in the atmosphere rises, more of it dissolves in sea water and forms carbonic acid:</p><div class="worked__math"><span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>This lowers the pH of the sea water. The process is called ocean acidification.</p>
      solution: "<p>二酸化炭素は、非金属の酸化物で、酸性酸化物です。大気中の <span class=\"chem\">CO2</span> が増えると、海水に溶ける量が増え、炭酸ができます。</p><div class=\"worked__math\"><span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>これで海水の pH が下がります。この変化を海洋酸性化といいます。</p>",
      misconception: {
        // EN (option A): Acid rain and ocean acidification are two different problems. Acid rain is caused by oxides of sulfur and nitrogen. Ocean acidification is caused by carbon dioxide.
        "0": "酸性雨と海洋酸性化は、別々の問題です。酸性雨の原因は、硫黄と窒素の酸化物です。海洋酸性化の原因は、二酸化炭素です。",
        // EN (option B): Sulfur dioxide is linked to acid rain. The cause of ocean acidification is the rising level of carbon dioxide in the atmosphere.
        "1": "二酸化硫黄は酸性雨に関係します。海洋酸性化の原因は、大気中の二酸化炭素が増えていることです。",
        // EN (option D): Metal oxides are basic. They would raise the pH, not lower it.
        "3": "金属の酸化物は塩基性です。pH を下げるのではなく、上げるはずです。",
      },
    },

    // ── s3-1-q028 · short · challenge · SL · Structure 3.1.5 · 3 marks
    "s3-1-q028": {
      // EN: <p>Some coal contains sulfur. When the coal burns, the sulfur also burns. Explain how this leads to acid rain. Include two equations with state symbols.</p>
      stem: "<p>石炭には、硫黄を含むものがあります。石炭が燃えると、硫黄も燃えます。これがどのようにして酸性雨 (acid rain) につながるかを説明しなさい (explain)。状態記号をつけた化学反応式を 2 つ入れましょう。</p>",
      hints: [
        // EN: First equation: sulfur burning in oxygen.
        "1 つ目の式：硫黄が酸素の中で燃える反応です。",
        // EN: Second equation: the oxide reacting with water. A non-metal oxide and water form an acid.
        "2 つ目の式：その酸化物が水と反応します。非金属の酸化物と水からは、酸ができます。",
        // EN: Finish by saying what the acid does to the rain.
        "最後に、その酸が雨をどう変えるかを書きましょう。",
      ],
      // EN: <p>The sulfur burns to form sulfur dioxide, a gaseous non-metal oxide:</p><div class="worked__math"><span class="chem">S(s) + O2(g) -> SO2(g)</span></div><p>Sulfur dioxide is an acidic oxide. It reacts with water in the atmosphere to form an acid:</p><div class="worked__math"><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>The acid lowers the pH of the rain. (Sulfur dioxide can also be oxidized in the air to <span class="chem">SO3</span>, which reacts with water to form sulfuric acid: <span class="chem">SO3(g) + H2O(l) -> H2SO4(aq)</span>.)</p>
      answer: "<p>硫黄が燃えて、二酸化硫黄ができます。二酸化硫黄は気体で、非金属の酸化物です。</p><div class=\"worked__math\"><span class=\"chem\">S(s) + O2(g) -> SO2(g)</span></div><p>二酸化硫黄は酸性酸化物です。大気中の水と反応して、酸ができます。</p><div class=\"worked__math\"><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>この酸が雨の pH を下げます。（二酸化硫黄は、空気中で酸化されて <span class=\"chem\">SO3</span> になることもあります。これが水と反応すると、硫酸ができます。<span class=\"chem\">SO3(g) + H2O(l) -> H2SO4(aq)</span>）</p>",
      markscheme: [
        // EN: <span class="chem">S(s) + O2(g) -> SO2(g)</span>
        "<span class=\"chem\">S(s) + O2(g) -> SO2(g)</span>",
        // EN: <span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span> (accept →; accept <span class="chem">SO3(g) + H2O(l) -> H2SO4(aq)</span>).
        "<span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span>（→ も認める。<span class=\"chem\">SO3(g) + H2O(l) -> H2SO4(aq)</span> も認める）。",
        // EN: Sulfur dioxide is an acidic (non-metal) oxide that dissolves in / reacts with rain water to form an acid, so the pH of the rain is lowered.
        "二酸化硫黄は酸性の（非金属の）酸化物で、雨水に溶けて / 雨水と反応して酸をつくる。だから、雨の pH が下がる。",
      ],
    },

    // ── s3-1-q029 · mcq · challenge · SL · Structure 3.1.5 · 1 mark
    "s3-1-q029": {
      // EN: <p>Selenium is directly below sulfur in group 16. Selenium dioxide, <span class="chem">SeO2</span>, is a solid that dissolves in water. Which is the best prediction for this reaction?</p>
      stem: "<p>セレンは、16 族で硫黄のすぐ下にあります。二酸化セレン <span class=\"chem\">SeO2</span> は固体で、水に溶けます。この反応の予測として、いちばんよいものはどれですか。</p>",
      options: [
        // EN: An alkaline solution forms: <span class="chem">SeO2(s) + 2H2O(l) -> Se(OH)4(aq)</span>
        "アルカリ性の溶液ができる：<span class=\"chem\">SeO2(s) + 2H2O(l) -> Se(OH)4(aq)</span>",
        // EN: A neutral solution forms, because <span class="chem">SeO2</span> is amphoteric.
        "<span class=\"chem\">SeO2</span> は両性なので、中性の溶液ができる。",
        // EN: An acidic solution forms: <span class="chem">SeO2(s) + H2O(l) -> H2SeO4(aq)</span>
        "酸性の溶液ができる：<span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO4(aq)</span>",
        // EN: An acidic solution forms: <span class="chem">SeO2(s) + H2O(l) -> H2SeO3(aq)</span>
        "酸性の溶液ができる：<span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO3(aq)</span>",
      ],
      hints: [
        // EN: Is selenium a metal or a non-metal? Use its group.
        "セレンは金属ですか、非金属ですか。族から考えましょう。",
        // EN: Use the reaction of <span class="chem">SO2</span> with water as your model.
        "<span class=\"chem\">SO2</span> と水の反応を手本にしましょう。",
        // EN: Check that the equation you choose is balanced.
        "選んだ式の係数が合っているか、確かめましょう。",
      ],
      // EN: <p>Elements in the same group have similar chemical properties. Sulfur dioxide is an acidic non-metal oxide:</p><div class="worked__math"><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>Selenium is also a non-metal in group 16, so <span class="chem">SeO2</span> should react in the same way:</p><div class="worked__math"><span class="chem">SeO2(s) + H2O(l) -> H2SeO3(aq)</span></div><p>Check: Se 1 = 1; O 3 = 3; H 2 = 2. The solution is acidic.</p>
      solution: "<p>同じ族の元素は、化学的性質が似ています。二酸化硫黄は、非金属の酸化物で、酸性酸化物です。</p><div class=\"worked__math\"><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></div><p>セレンも 16 族の非金属なので、<span class=\"chem\">SeO2</span> も同じように反応するはずです。</p><div class=\"worked__math\"><span class=\"chem\">SeO2(s) + H2O(l) -> H2SeO3(aq)</span></div><p>確認：Se 1 = 1、O 3 = 3、H 2 = 2。溶液は酸性です。</p>",
      misconception: {
        // EN (option A): Hydroxides form from the oxides of metals in groups 1 and 2. Selenium is a non-metal, like sulfur, so its oxide is acidic.
        "0": "水酸化物ができるのは、1 族と 2 族の金属の酸化物です。セレンは硫黄と同じ非金属なので、酸化物は酸性です。",
        // EN (option B): Amphoteric does not mean neutral, and amphoteric oxides are found near the metal–non-metal boundary. Selenium is a non-metal in group 16.
        "1": "両性は中性という意味ではありません。また、両性酸化物は金属と非金属の境界の近くにあります。セレンは 16 族の非金属です。",
        // EN (option C): The oxide is acidic, but this equation is not balanced: 3 oxygen atoms on the left and 4 on the right. Compare with <span class="chem">SO2</span>, which forms <span class="chem">H2SO3</span>.
        "2": "酸化物が酸性なのは正しいのですが、この式は原子の数が合っていません。酸素原子が左辺に 3 個、右辺に 4 個あります。<span class=\"chem\">SO2</span> とくらべましょう。<span class=\"chem\">H2SO3</span> ができます。",
      },
    },

    // ── s3-1-q030 · mcq · foundation · SL · Structure 3.1.6 · 1 mark
    "s3-1-q030": {
      // EN: <p>Which is the oxidation state of sulfur in the sulfate ion, <span class="chem">SO4^2-</span>, written correctly?</p>
      stem: "<p>硫酸イオン <span class=\"chem\">SO4^2-</span> の硫黄の酸化数 (oxidation state) を、正しい書き方で表しているものはどれですか。</p>",
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
        "酸素は、ほとんどの化合物で −2 です。",
        // EN: The oxidation states in an ion add up to the charge on the ion.
        "イオンの中の酸化数を合計すると、イオンの電荷になります。",
        // EN: Write the sign first, then the number.
        "符号を先に、数字をあとに書きます。",
      ],
      // EN: <p>Let the oxidation state of sulfur be <i>x</i>. Oxygen is −2.</p><div class="worked__math"><i>x</i> + 4(−2) = −2</div><div class="worked__math"><i>x</i> = −2 + 8 = <b>+6</b></div><p>Write the sign first and then the number: +6. A Roman numeral (VI) is also accepted. “6+” and “6” do not score.</p>
      solution: "<p>硫黄の酸化数を <i>x</i> とします。酸素は −2 です。</p><div class=\"worked__math\"><i>x</i> + 4(−2) = −2</div><div class=\"worked__math\"><i>x</i> = −2 + 8 = <b>+6</b></div><p>符号を先に、数字をあとに書きます。+6 です。ローマ数字（VI）も認められます。「6+」や「6」では点になりません。</p>",
      misconception: {
        // EN (option A): The number is right, but the notation is not. An oxidation state has the sign first: +6. “6+” is how you write the charge on an ion. IB markschemes reject “6+”.
        "0": "数字は正しいのですが、書き方が違います。酸化数は符号を先に書いて、+6 とします。「6+」はイオンの電荷の書き方です。IB の採点基準は「6+」を認めません。",
        // EN (option C): This is the charge on the whole ion. It is the <em>sum</em> of all the oxidation states, not the oxidation state of sulfur.
        "2": "これはイオン全体の電荷です。すべての酸化数の<em>合計</em>で、硫黄の酸化数ではありません。",
        // EN (option D): This treats the ion as if it had no charge. The oxidation states must add up to the charge on the ion, −2, not to zero.
        "3": "これは、イオンに電荷がないものとして計算しています。酸化数の合計は、0 ではなく、イオンの電荷 −2 にならなければいけません。",
      },
    },

    // ── s3-1-q031 · mcq · foundation · SL · Structure 3.1.6 · 1 mark
    "s3-1-q031": {
      // EN: <p>The oxidation state of each chlorine atom in <span class="chem">Cl2</span> is 0. Which statement explains this?</p>
      stem: "<p><span class=\"chem\">Cl2</span> の塩素原子の酸化数は、どちらも 0 です。その理由を説明している文はどれですか。</p>",
      options: [
        // EN: The molecule has no overall charge.
        "分子全体に電荷がない。",
        // EN: Each chlorine atom has seven valence electrons.
        "塩素原子は、どちらも価電子が 7 個ある。",
        // EN: The two atoms are identical, so the bonding electrons are shared equally and no electrons are transferred.
        "2 つの原子は同じなので、共有電子対は均等に共有され、電子の移動がない。",
        // EN: The bond in <span class="chem">Cl2</span> is ionic, so the two charges cancel.
        "<span class=\"chem\">Cl2</span> の結合はイオン結合なので、2 つの電荷が打ち消し合う。",
      ],
      hints: [
        // EN: An oxidation state is the charge an atom would have if the compound were made of ions.
        "酸化数とは、化合物がイオンでできていると考えたときに、原子がもつ電荷です。",
        // EN: To imagine ions, you give the bonding electrons to the more electronegative atom. What if both atoms are the same?
        "イオンを考えるには、共有電子対を電気陰性度の大きいほうの原子に割り当てます。では、2 つの原子が同じならどうなりますか。",
      ],
      // EN: <p>The oxidation state shows the number of electrons transferred in forming a bond. In an element, the atoms are identical and have the same electronegativity. The bonding electrons are <strong>shared equally</strong>, so <strong>no electrons are transferred</strong> and each atom has oxidation state 0.</p>
      solution: "<p>酸化数は、結合ができるときに移動した電子の数を表します。単体では、原子はどれも同じで、電気陰性度も同じです。共有電子対は<strong>均等に共有</strong>されるので、<strong>電子の移動はなく</strong>、どの原子も酸化数は 0 です。</p>",
      misconception: {
        // EN (option A): True, but it is not the reason. HCl also has no overall charge, yet its atoms have oxidation states +1 and −1.
        "0": "正しい文ですが、理由にはなりません。HCl も分子全体に電荷はありませんが、原子の酸化数は +1 と −1 です。",
        // EN (option B): True, but the number of valence electrons does not fix the oxidation state. Chlorine is −1 in NaCl and 0 in <span class="chem">Cl2</span>.
        "1": "正しい文ですが、価電子の数で酸化数が決まるわけではありません。塩素は NaCl では −1、<span class=\"chem\">Cl2</span> では 0 です。",
        // EN (option D): The bond in <span class="chem">Cl2</span> is covalent. Two identical atoms cannot transfer electrons to each other.
        "3": "<span class=\"chem\">Cl2</span> の結合は共有結合です。同じ原子どうしでは、たがいに電子を移すことはできません。",
      },
    },

    // ── s3-1-q032 · numeric · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q032": {
      // EN: <p>Deduce the oxidation state of oxygen in hydrogen peroxide, <span class="chem">H2O2</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>過酸化水素 (hydrogen peroxide) <span class=\"chem\">H2O2</span> の酸素の酸化数を導きなさい (deduce)。</p><p>符号を先に、数字をあとに入力しましょう。例：+3 や −3。</p>",
      hints: [
        // EN: Hydrogen is +1 here, because it is bonded to a non-metal.
        "ここでは水素は +1 です。非金属と結合しているからです。",
        // EN: The oxidation states in a compound add up to zero. Do not assume that oxygen is −2.
        "化合物の中の酸化数を合計すると、0 になります。酸素を −2 と決めつけないようにしましょう。",
      ],
      // EN: <p>Hydrogen is +1. Let the oxidation state of oxygen be <i>x</i>.</p><div class="worked__math">2(+1) + 2<i>x</i> = 0</div><div class="worked__math"><i>x</i> = <b>−1</b></div><p>Oxygen is −2 in most compounds, but in <strong>peroxides</strong> it is −1. Always work it out from the other atoms.</p>
      solution: "<p>水素は +1 です。酸素の酸化数を <i>x</i> とします。</p><div class=\"worked__math\">2(+1) + 2<i>x</i> = 0</div><div class=\"worked__math\"><i>x</i> = <b>−1</b></div><p>酸素は、ほとんどの化合物で −2 ですが、<strong>過酸化物</strong> (peroxide) では −1 です。必ずほかの原子から計算して求めましょう。</p>",
      // EN: In an exam, write −1 with the sign first.
      correctNote: "試験では、符号を先にして −1 と書きます。",
    },

    // ── s3-1-q033 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q033": {
      // EN: <p>In which compound does hydrogen have the oxidation state −1?</p>
      stem: "<p>水素の酸化数が −1 である化合物はどれですか。</p>",
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
        "水素は、自分より電気陰性度の大きい原子と結合しているとき、+1 です。",
        // EN: Which compound has hydrogen bonded to a metal?
        "水素が金属と結合している化合物はどれですか。",
      ],
      // EN: <p>Sodium is a group 1 metal and is always +1 in its compounds. In NaH the oxidation states add up to zero, so hydrogen is <strong>−1</strong>. Hydrogen is −1 in <strong>metal hydrides</strong>, because the metal is less electronegative than hydrogen.</p>
      solution: "<p>ナトリウムは 1 族の金属で、化合物の中ではいつも +1 です。NaH の酸化数を合計すると 0 になるので、水素は <strong>−1</strong> です。水素は、<strong>金属の水素化物</strong> (metal hydride) では −1 です。金属のほうが水素より電気陰性度が小さいからです。</p>",
      misconception: {
        // EN (option A): Nitrogen is more electronegative than hydrogen. In <span class="chem">NH3</span> nitrogen is −3 and hydrogen is +1.
        "0": "窒素は水素より電気陰性度が大きい元素です。<span class=\"chem\">NH3</span> では、窒素が −3、水素が +1 です。",
        // EN (option B): In hydrogen peroxide it is the <em>oxygen</em> that has the unusual value, −1. Hydrogen is +1.
        "1": "過酸化水素でいつもと違う値（−1）になるのは、<em>酸素</em>のほうです。水素は +1 です。",
        // EN (option C): Chlorine is more electronegative than hydrogen. In HCl hydrogen is +1 and chlorine is −1.
        "2": "塩素は水素より電気陰性度が大きい元素です。HCl では、水素が +1、塩素が −1 です。",
      },
    },

    // ── s3-1-q034 · numeric · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q034": {
      // EN: <p>Deduce the oxidation state of chromium in the dichromate ion, <span class="chem">Cr2O7^2-</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>二クロム酸イオン (dichromate ion) <span class=\"chem\">Cr2O7^2-</span> のクロムの酸化数を導きなさい (deduce)。</p><p>符号を先に、数字をあとに入力しましょう。例：+3 や −3。</p>",
      hints: [
        // EN: Oxygen is −2. There are seven oxygen atoms.
        "酸素は −2 です。酸素原子は 7 個あります。",
        // EN: The total must equal the charge on the ion, −2.
        "合計は、イオンの電荷 −2 に等しくなければいけません。",
        // EN: There are two chromium atoms. Divide the total for chromium by 2.
        "クロム原子は 2 個あります。クロム全体の値を 2 でわりましょう。",
      ],
      // EN: <p>Let the oxidation state of chromium be <i>x</i>. Oxygen is −2.</p><div class="worked__math">2<i>x</i> + 7(−2) = −2</div><div class="worked__math">2<i>x</i> = −2 + 14 = +12</div><div class="worked__math"><i>x</i> = <b>+6</b></div><p>The ion can be named dichromate(VI).</p>
      solution: "<p>クロムの酸化数を <i>x</i> とします。酸素は −2 です。</p><div class=\"worked__math\">2<i>x</i> + 7(−2) = −2</div><div class=\"worked__math\">2<i>x</i> = −2 + 14 = +12</div><div class=\"worked__math\"><i>x</i> = <b>+6</b></div><p>このイオンは、二クロム(VI)酸イオン (dichromate(VI)) とも呼べます。</p>",
      // EN: In an exam, write +6 with the sign first. “6+” and “6” do not score.
      correctNote: "試験では、符号を先にして +6 と書きます。「6+」や「6」では点になりません。",
    },

    // ── s3-1-q035 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q035": {
      // EN: <p>What is the formula of copper(I) oxide?</p>
      stem: "<p>酸化銅(I) (copper(I) oxide) の化学式はどれですか。</p>",
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
        "ローマ数字 (I) は、銅の酸化数が +1 であることを表します。",
        // EN: Oxide is <span class="chem">O^2-</span>. How many +1 ions balance one 2− ion?
        "酸化物イオンは <span class=\"chem\">O^2-</span> です。+1 のイオンが何個あれば、2− のイオン 1 個とつり合いますか。",
      ],
      // EN: <p>The Roman numeral gives the oxidation state of copper: +1. Oxygen is −2. Two copper atoms at +1 balance one oxygen at −2:</p><div class="worked__math">2(+1) + (−2) = 0</div><p>The formula is <span class="chem">Cu2O</span>.</p>
      solution: "<p>ローマ数字は銅の酸化数を表します。+1 です。酸素は −2 です。+1 の銅原子 2 個が、−2 の酸素 1 個とつり合います。</p><div class=\"worked__math\">2(+1) + (−2) = 0</div><p>化学式は <span class=\"chem\">Cu2O</span> です。</p>",
      misconception: {
        // EN (option A): In CuO, copper is +2 (it balances one <span class="chem">O^2-</span>). This is copper(II) oxide.
        "0": "CuO では、銅は +2 です（<span class=\"chem\">O^2-</span> 1 個とつり合います）。これは酸化銅(II) です。",
        // EN (option B): The Roman numeral gives the oxidation state of the metal, not the number of oxygen atoms. In <span class="chem">CuO2</span> copper would be +4.
        "1": "ローマ数字は金属の酸化数を表します。酸素原子の数ではありません。<span class=\"chem\">CuO2</span> なら、銅は +4 になります。",
        // EN (option D): In <span class="chem">Cu2O3</span> copper would be +3: 2<i>x</i> + 3(−2) = 0. That would be copper(III) oxide.
        "3": "<span class=\"chem\">Cu2O3</span> なら、銅は +3 になります。2<i>x</i> + 3(−2) = 0 だからです。これは酸化銅(III) になります。",
      },
    },

    // ── s3-1-q036 · mcq · exam · SL · Structure 3.1.6 · 1 mark
    "s3-1-q036": {
      // EN: <p>The sulfate(IV) ion is also called the sulfite ion. Which is its formula?</p>
      stem: "<p>硫酸(IV)イオン (sulfate(IV) ion) は、亜硫酸イオン (sulfite ion) とも呼ばれます。その化学式はどれですか。</p>",
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
        "ローマ数字 (IV) は硫黄の酸化数で、+4 です。",
        // EN: Test each ion: sulfur + oxygens (each −2) = charge on the ion.
        "それぞれのイオンで確かめましょう。硫黄 + 酸素（それぞれ −2）= イオンの電荷 です。",
      ],
      // EN: <p>Sulfate(IV) means sulfur has oxidation state +4. Test <span class="chem">SO3^2-</span>:</p><div class="worked__math"><i>x</i> + 3(−2) = −2</div><div class="worked__math"><i>x</i> = <b>+4</b></div><p>So <span class="chem">SO3^2-</span> is sulfate(IV), or sulfite. <span class="chem">SO4^2-</span> is sulfate(VI), or sulfate. In the same way, <span class="chem">NO2-</span> is nitrite (nitrogen +3) and <span class="chem">NO3-</span> is nitrate (nitrogen +5). IB accepts both kinds of name.</p>
      solution: "<p>sulfate(IV) は、硫黄の酸化数が +4 という意味です。<span class=\"chem\">SO3^2-</span> で確かめます。</p><div class=\"worked__math\"><i>x</i> + 3(−2) = −2</div><div class=\"worked__math\"><i>x</i> = <b>+4</b></div><p>だから、<span class=\"chem\">SO3^2-</span> が sulfate(IV)、つまり亜硫酸イオン (sulfite) です。<span class=\"chem\">SO4^2-</span> は sulfate(VI)、つまり硫酸イオン (sulfate) です。同じように、<span class=\"chem\">NO2-</span> は亜硝酸イオン (nitrite) で窒素は +3、<span class=\"chem\">NO3-</span> は硝酸イオン (nitrate) で窒素は +5 です。IB はどちらの種類の名前も認めます。</p>",
      misconception: {
        // EN (option B): In <span class="chem">SO4^2-</span> sulfur is +6: <i>x</i> + 4(−2) = −2. This is sulfate(VI), usually called sulfate.
        "1": "<span class=\"chem\">SO4^2-</span> では、硫黄は +6 です。<i>x</i> + 4(−2) = −2 だからです。これは sulfate(VI) で、ふつうは硫酸イオン (sulfate) と呼びます。",
        // EN (option C): <span class="chem">SO3</span> is a molecule, sulfur trioxide, not an ion. Sulfur is +6 in it.
        "2": "<span class=\"chem\">SO3</span> は三酸化硫黄という分子で、イオンではありません。この中の硫黄は +6 です。",
        // EN (option D): <span class="chem">S^2-</span> is the sulfide ion. Sulfur is −2. Names ending in -ate or -ite contain oxygen.
        "3": "<span class=\"chem\">S^2-</span> は硫化物イオン (sulfide) です。硫黄は −2 です。英語名が -ate や -ite で終わるイオンは、酸素を含みます。",
      },
    },

    // ── s3-1-q037 · order · challenge · SL · Structure 3.1.6 · 1 mark
    "s3-1-q037": {
      // EN: <p>Put these species in order of <strong>increasing oxidation state of nitrogen</strong> (most negative first).</p>
      stem: "<p>次の化学種を、<strong>窒素の酸化数の小さい順</strong>（負にいちばん大きいものを先）に並べましょう。</p>",
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
        "ここでは、水素はどれも +1、酸素はどれも −2 です。",
        // EN: For an ion, the total equals the charge on the ion. For an element, the oxidation state is 0.
        "イオンでは、合計がイオンの電荷に等しくなります。単体では、酸化数は 0 です。",
        // EN: In <span class="chem">N2H4</span> there are two nitrogen atoms: divide by 2.
        "<span class=\"chem\">N2H4</span> には窒素原子が 2 個あります。2 でわりましょう。",
      ],
      // EN: <div class="worked__math"><span class="chem">NH4+</span>: <i>x</i> + 4(+1) = +1, so <i>x</i> = −3</div><div class="worked__math"><span class="chem">N2H4</span>: 2<i>x</i> + 4(+1) = 0, so <i>x</i> = −2</div><div class="worked__math"><span class="chem">N2</span>: element, so <i>x</i> = 0</div><div class="worked__math"><span class="chem">NO2-</span>: <i>x</i> + 2(−2) = −1, so <i>x</i> = +3</div><div class="worked__math"><span class="chem">NO3-</span>: <i>x</i> + 3(−2) = −1, so <i>x</i> = +5</div><p>Nitrogen shows oxidation states from −3 to +5.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">NH4+</span>：<i>x</i> + 4(+1) = +1 だから <i>x</i> = −3</div><div class=\"worked__math\"><span class=\"chem\">N2H4</span>：2<i>x</i> + 4(+1) = 0 だから <i>x</i> = −2</div><div class=\"worked__math\"><span class=\"chem\">N2</span>：単体だから <i>x</i> = 0</div><div class=\"worked__math\"><span class=\"chem\">NO2-</span>：<i>x</i> + 2(−2) = −1 だから <i>x</i> = +3</div><div class=\"worked__math\"><span class=\"chem\">NO3-</span>：<i>x</i> + 3(−2) = −1 だから <i>x</i> = +5</div><p>窒素の酸化数は、−3 から +5 までの値をとります。</p>",
    },

    // ── s3-1-q038 · mcq · foundation · AHL · Structure 3.1.7 · 1 mark
    "s3-1-q038": {
      // EN: <p>The table shows first ionization energies from the data booklet for period 2.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First ionization energy / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Li</th><th class="num" scope="col">Be</th><th class="num" scope="col">B</th><th class="num" scope="col">C</th><th class="num" scope="col">N</th><th class="num" scope="col">O</th><th class="num" scope="col">F</th><th class="num" scope="col">Ne</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">520</td><td class="num">900</td><td class="num">801</td><td class="num">1086</td><td class="num">1402</td><td class="num">1314</td><td class="num">1681</td><td class="num">2081</td></tr></tbody></table></div><p>The general trend is an increase. Which two elements have a <strong>lower</strong> first ionization energy than the element before them?</p>
      stem: "<p>表は、データブックレットにある第 2 周期の第一イオン化エネルギーです。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>第一イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">Li</th><th class=\"num\" scope=\"col\">Be</th><th class=\"num\" scope=\"col\">B</th><th class=\"num\" scope=\"col\">C</th><th class=\"num\" scope=\"col\">N</th><th class=\"num\" scope=\"col\">O</th><th class=\"num\" scope=\"col\">F</th><th class=\"num\" scope=\"col\">Ne</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">520</td><td class=\"num\">900</td><td class=\"num\">801</td><td class=\"num\">1086</td><td class=\"num\">1402</td><td class=\"num\">1314</td><td class=\"num\">1681</td><td class=\"num\">2081</td></tr></tbody></table></div><p>全体の傾向としては大きくなっています。1 つ前の元素より第一イオン化エネルギーが<strong>小さい</strong>元素は、どの 2 つですか。</p>",
      options: [
        // EN: Be and N
        "Be と N",
        // EN: B and O
        "B と O",
        // EN: C and F
        "C と F",
        // EN: Li and Ne
        "Li と Ne",
      ],
      hints: [
        // EN: Go along the row. Compare each value with the one to its left.
        "行を左から順に見ていきます。それぞれの値を、左どなりの値とくらべましょう。",
        // EN: There are two places where the value goes down.
        "値が下がるところが 2 か所あります。",
      ],
      // EN: <p>The value falls from Be (900) to <strong>B</strong> (801), and from N (1402) to <strong>O</strong> (1314). These two decreases are called discontinuities.</p><ul><li>B: the electron is removed from the 2p sublevel, which is higher in energy than the 2s sublevel.</li><li>O: the electron is removed from a 2p orbital that holds two electrons. The two electrons repel each other, so one is removed more easily.</li></ul>
      solution: "<p>値は Be（900）から <strong>B</strong>（801）へ、また N（1402）から <strong>O</strong>（1314）へ下がります。この 2 つの減少を、不連続 (discontinuity) といいます。</p><ul><li>B：電子は 2p 副準位から取り除かれます。2p 副準位は 2s 副準位よりエネルギーが高いのです。</li><li>O：電子は、2 個の電子が入っている 2p 軌道から取り除かれます。2 個の電子は反発し合うので、1 個が取り除かれやすくなります。</li></ul>",
      misconception: {
        // EN (option A): Be (900) is higher than Li (520), and N (1402) is higher than C (1086). These are the elements that come <em>before</em> each decrease.
        "0": "Be（900）は Li（520）より大きく、N（1402）は C（1086）より大きくなっています。この 2 つは、値が下がるところの<em>直前</em>にある元素です。",
        // EN (option C): C (1086) is higher than B (801), and F (1681) is higher than O (1314). These follow the general trend.
        "2": "C（1086）は B（801）より大きく、F（1681）は O（1314）より大きくなっています。この 2 つは全体の傾向どおりです。",
        // EN (option D): Li is the first element in the period, and Ne has the highest value of all.
        "3": "Li はこの周期の最初の元素です。Ne はいちばん大きい値をもっています。",
      },
    },

    // ── s3-1-q039 · short · exam · AHL · Structure 3.1.7 · 2 marks
    "s3-1-q039": {
      // EN: <p>The first ionization energy of magnesium is 738 kJ mol<sup>−1</sup>. The first ionization energy of aluminium is 578 kJ mol<sup>−1</sup>.</p><p>Explain why the value for aluminium is lower, even though aluminium has a greater nuclear charge.</p>
      stem: "<p>マグネシウムの第一イオン化エネルギーは 738 kJ mol<sup>−1</sup> です。アルミニウムの第一イオン化エネルギーは 578 kJ mol<sup>−1</sup> です。</p><p>アルミニウムのほうが核電荷が大きいのに、値が小さい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Write the electron configuration of each atom.
        "それぞれの原子の電子配置を書きましょう。",
        // EN: From which sublevel is the electron removed in each atom? Which sublevel is higher in energy?
        "それぞれの原子で、電子はどの副準位から取り除かれますか。エネルギーが高いのはどちらの副準位ですか。",
      ],
      // EN: <p>Mg is <span class="mono nowrap">[Ne] 3s<sup>2</sup></span> and Al is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span>. In magnesium the electron is removed from the 3s sublevel. In aluminium it is removed from the 3p sublevel. The 3p sublevel is higher in energy than the 3s sublevel, so less energy is needed to remove the electron.</p><p>Do not write that a full 3s sublevel is “specially stable”. Base your answer on the energy of the electron that is removed.</p>
      answer: "<p>Mg は <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup></span>、Al は <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span> です。マグネシウムでは、電子は 3s 副準位から取り除かれます。アルミニウムでは、3p 副準位から取り除かれます。3p 副準位は 3s 副準位よりエネルギーが高いので、電子を取り除くのに必要なエネルギーは少なくなります。</p><p>満たされた 3s 副準位が「特別に安定」だと書いてはいけません。取り除かれる電子のエネルギーをもとに答えましょう。</p>",
      markscheme: [
        // EN: In Al the electron is removed from the 3p sublevel, and in Mg from the 3s sublevel.
        "Al では電子が 3p 副準位から取り除かれ、Mg では 3s 副準位から取り除かれる。",
        // EN: The 3p sublevel is higher in energy than the 3s sublevel (accept: the 3p electron is further from the nucleus / is also shielded by the 3s electrons), so less energy is needed.
        "3p 副準位は 3s 副準位よりエネルギーが高い（「3p 電子のほうが原子核から遠い / 3s 電子にも遮蔽される」も認める）。だから、必要なエネルギーが少ない。",
      ],
    },

    // ── s3-1-q040 · short · exam · AHL · Structure 3.1.7 · 2 marks
    "s3-1-q040": {
      // EN: <p>The first ionization energy of phosphorus is 1012 kJ mol<sup>−1</sup>. The first ionization energy of sulfur is 1000 kJ mol<sup>−1</sup>.</p><p>Explain why the value for sulfur is lower, even though sulfur has a greater nuclear charge.</p>
      stem: "<p>リンの第一イオン化エネルギーは 1012 kJ mol<sup>−1</sup> です。硫黄の第一イオン化エネルギーは 1000 kJ mol<sup>−1</sup> です。</p><p>硫黄のほうが核電荷が大きいのに、値が小さい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Draw the 3p orbitals as three boxes for P and for S.
        "P と S について、3p 軌道を 3 つの箱で描きましょう。",
        // EN: In which atom does one box contain two electrons? What do two electrons in one orbital do to each other?
        "1 つの箱に電子が 2 個入っているのは、どちらの原子ですか。同じ軌道の 2 個の電子は、たがいにどうなりますか。",
      ],
      // EN: <p>P is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>: each of the three 3p orbitals holds one electron. S is <span class="mono nowrap">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>: one 3p orbital holds two electrons. In sulfur the electron is removed from this doubly occupied orbital. The two electrons in the same orbital repel each other, so less energy is needed to remove one of them.</p><p>Do not write that a half-filled 3p sublevel is “specially stable”. IB does not accept this.</p>
      answer: "<p>P は <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span> です。3 つの 3p 軌道に、電子が 1 個ずつ入っています。S は <span class=\"mono nowrap\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span> です。3p 軌道の 1 つに、電子が 2 個入っています。硫黄では、電子はこの 2 個入った軌道から取り除かれます。同じ軌道にある 2 個の電子は反発し合うので、そのうち 1 個を取り除くのに必要なエネルギーは少なくなります。</p><p>半分満たされた 3p 副準位が「特別に安定」だと書いてはいけません。IB はこの答えを認めません。</p>",
      markscheme: [
        // EN: In S the electron is removed from a 3p orbital that contains two electrons / a paired electron is removed (in P each 3p orbital contains one electron).
        "S では、電子が 2 個入っている 3p 軌道から電子が取り除かれる / 対になった電子が取り除かれる（P では、どの 3p 軌道にも電子が 1 個ずつ入っている）。",
        // EN: The two electrons in the same orbital repel each other, so less energy is needed to remove one.
        "同じ軌道にある 2 個の電子は反発し合うので、1 個を取り除くのに必要なエネルギーが少ない。",
      ],
    },

    // ── s3-1-q041 · mcq · challenge · AHL · Structure 3.1.7 · 1 mark
    "s3-1-q041": {
      // EN: <p>The graph shows the first ionization energies of the period 3 elements, from the data booklet.</p><p><svg viewBox="0 0 316 196" width="316" height="196" style="max-width:100%;height:auto" role="img" aria-label="Graph of first ionization energy in kilojoules per mole against element for period 3. Sodium 496, magnesium 738, aluminium 578, silicon 787, phosphorus 1012, sulfur 1000, chlorine 1251, argon 1520. The general trend is upward, with small decreases at aluminium and at sulfur."><path d="M58 14V170H306" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="53" x2="306" y1="170" y2="170" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="174" text-anchor="end" font-size="12" fill="currentColor">0</text><line x1="53" x2="306" y1="131" y2="131" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="135" text-anchor="end" font-size="12" fill="currentColor">400</text><line x1="53" x2="306" y1="92" y2="92" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="96" text-anchor="end" font-size="12" fill="currentColor">800</text><line x1="53" x2="306" y1="53" y2="53" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="57" text-anchor="end" font-size="12" fill="currentColor">1200</text><line x1="53" x2="306" y1="14" y2="14" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="49" y="18" text-anchor="end" font-size="12" fill="currentColor">1600</text><text x="74" y="187" text-anchor="middle" font-size="12" fill="currentColor">Na</text><text x="104.85714285714286" y="187" text-anchor="middle" font-size="12" fill="currentColor">Mg</text><text x="135.71428571428572" y="187" text-anchor="middle" font-size="12" fill="currentColor">Al</text><text x="166.57142857142856" y="187" text-anchor="middle" font-size="12" fill="currentColor">Si</text><text x="197.42857142857144" y="187" text-anchor="middle" font-size="12" fill="currentColor">P</text><text x="228.28571428571428" y="187" text-anchor="middle" font-size="12" fill="currentColor">S</text><text x="259.1428571428571" y="187" text-anchor="middle" font-size="12" fill="currentColor">Cl</text><text x="290" y="187" text-anchor="middle" font-size="12" fill="currentColor">Ar</text><path d="M74.0 121.6L104.9 98.0L135.7 113.6L166.6 93.3L197.4 71.3L228.3 72.5L259.1 48.0L290.0 21.8" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="74.0" cy="121.6" r="4" fill="currentColor"/><circle cx="104.9" cy="98.0" r="4" fill="currentColor"/><circle cx="135.7" cy="113.6" r="4" fill="currentColor"/><circle cx="166.6" cy="93.3" r="4" fill="currentColor"/><circle cx="197.4" cy="71.3" r="4" fill="currentColor"/><circle cx="228.3" cy="72.5" r="4" fill="currentColor"/><circle cx="259.1" cy="48.0" r="4" fill="currentColor"/><circle cx="290.0" cy="21.8" r="4" fill="currentColor"/><text transform="translate(14 92) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">first IE / kJ mol⁻¹</text></svg></p><p>What do the decreases at aluminium and at sulfur show?</p>
      stem: "<p>グラフは、データブックレットにある第 3 周期の元素の第一イオン化エネルギーです。</p><p><svg viewBox=\"0 0 316 196\" width=\"316\" height=\"196\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"第 3 周期の元素の第一イオン化エネルギー（単位はキロジュール毎モル）のグラフ。ナトリウム 496、マグネシウム 738、アルミニウム 578、ケイ素 787、リン 1012、硫黄 1000、塩素 1251、アルゴン 1520。全体としては右上がりで、アルミニウムと硫黄のところで少し下がっている。\"><path d=\"M58 14V170H306\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"53\" x2=\"306\" y1=\"170\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"174\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">0</text><line x1=\"53\" x2=\"306\" y1=\"131\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"135\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400</text><line x1=\"53\" x2=\"306\" y1=\"92\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"96\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">800</text><line x1=\"53\" x2=\"306\" y1=\"53\" y2=\"53\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"57\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">1200</text><line x1=\"53\" x2=\"306\" y1=\"14\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"49\" y=\"18\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">1600</text><text x=\"74\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Na</text><text x=\"104.85714285714286\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Mg</text><text x=\"135.71428571428572\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Al</text><text x=\"166.57142857142856\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Si</text><text x=\"197.42857142857144\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">P</text><text x=\"228.28571428571428\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">S</text><text x=\"259.1428571428571\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Cl</text><text x=\"290\" y=\"187\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">Ar</text><path d=\"M74.0 121.6L104.9 98.0L135.7 113.6L166.6 93.3L197.4 71.3L228.3 72.5L259.1 48.0L290.0 21.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><circle cx=\"74.0\" cy=\"121.6\" r=\"4\" fill=\"currentColor\"/><circle cx=\"104.9\" cy=\"98.0\" r=\"4\" fill=\"currentColor\"/><circle cx=\"135.7\" cy=\"113.6\" r=\"4\" fill=\"currentColor\"/><circle cx=\"166.6\" cy=\"93.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"197.4\" cy=\"71.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"228.3\" cy=\"72.5\" r=\"4\" fill=\"currentColor\"/><circle cx=\"259.1\" cy=\"48.0\" r=\"4\" fill=\"currentColor\"/><circle cx=\"290.0\" cy=\"21.8\" r=\"4\" fill=\"currentColor\"/><text transform=\"translate(14 92) rotate(-90)\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">第一 IE / kJ mol⁻¹</text></svg></p><p>アルミニウムと硫黄のところで値が下がることから、何がわかりますか。</p>",
      options: [
        // EN: A filled or half-filled sublevel has a special stability.
        "完全に満たされた副準位や半分満たされた副準位は、特別に安定である。",
        // EN: The nuclear charge decreases at aluminium and at sulfur.
        "アルミニウムと硫黄のところで、核電荷が小さくなる。",
        // EN: The electrons in the third energy level do not all have the same energy.
        "3 番目のエネルギー準位の電子は、すべてが同じエネルギーをもつわけではない。",
        // EN: Aluminium and sulfur each start a new main energy level.
        "アルミニウムと硫黄は、それぞれ新しい主エネルギー準位の始まりである。",
      ],
      hints: [
        // EN: If all the n = 3 electrons had the same energy, what would the graph look like?
        "n = 3 の電子がすべて同じエネルギーだったら、グラフはどんな形になりますか。",
        // EN: The decrease at Al comes with the first 3p electron. What does that tell you about 3s and 3p?
        "Al での減少は、最初の 3p 電子といっしょに現れます。このことから、3s と 3p について何がわかりますか。",
      ],
      // EN: <p>Nuclear charge increases steadily across the period. If all the electrons in the third energy level had the same energy, the first ionization energy would rise steadily too. It does not.</p><p>The decrease at aluminium shows that the 3p electron is at a higher energy than the 3s electrons. So the main energy level is split into <strong>sublevels of different energy</strong>. The decrease at sulfur shows the effect of repulsion when a p orbital holds two electrons. The discontinuities are evidence for sublevels.</p>
      solution: "<p>核電荷は、周期を左から右へ一定の割合で大きくなります。3 番目のエネルギー準位の電子がすべて同じエネルギーなら、第一イオン化エネルギーも同じように大きくなっていくはずです。しかし、そうなっていません。</p><p>アルミニウムでの減少は、3p 電子が 3s 電子より高いエネルギーにあることを示します。つまり、主エネルギー準位は<strong>エネルギーの違う副準位</strong>に分かれています。硫黄での減少は、1 つの p 軌道に電子が 2 個入ったときの反発の効果を示します。この不連続は、副準位があることの証拠です。</p>",
      misconception: {
        // EN (option A): The guide says explanations must be based on the energy of the electron removed, not on “special stability”. Markschemes reject this argument.
        "0": "『指導の手引き』は、説明は「特別な安定性」ではなく、取り除かれる電子のエネルギーにもとづくこと、としています。採点基準はこの説明を認めません。",
        // EN (option B): The nuclear charge increases by one proton at every step across the period, including at aluminium and sulfur.
        "1": "核電荷は、周期を 1 つ進むごとに陽子 1 個分ずつ大きくなります。アルミニウムと硫黄のところでも同じです。",
        // EN (option D): All period 3 elements have their outer electrons in the same main energy level, n = 3. A new main level starts at the next period (potassium), where the drop is much larger.
        "3": "第 3 周期の元素は、どれも外側の電子が同じ主エネルギー準位 n = 3 にあります。新しい主エネルギー準位は次の周期（カリウム）から始まり、そこでは値がずっと大きく下がります。",
      },
    },

    // ── s3-1-q042 · multi · foundation · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q042": {
      // EN: <p>Which are characteristic properties of transition elements? Select all that apply.</p>
      stem: "<p>遷移元素 (transition elements) に特徴的な性質はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Variable oxidation states
        "複数の酸化数をとる",
        // EN: Low melting points
        "融点が低い",
        // EN: Formation of coloured compounds
        "有色の化合物をつくる",
        // EN: Catalytic properties
        "触媒作用がある",
        // EN: Formation of complex ions with ligands
        "配位子と錯イオンをつくる",
        // EN: Poor electrical conductivity
        "電気伝導性が低い",
      ],
      hints: [
        // EN: Think about iron or copper: are they easy to melt? Do they conduct?
        "鉄や銅を思いうかべましょう。融かしやすいですか。電気を通しますか。",
        // EN: The guide lists six properties: variable oxidation state, high melting points, magnetic properties, catalytic properties, coloured compounds and complex ions.
        "『指導の手引き』には 6 つの性質があがっています。複数の酸化数、高い融点、磁性、触媒作用、有色の化合物、錯イオンです。",
      ],
      // EN: <p>Transition elements have incomplete d sublevels. This gives them characteristic properties: <strong>variable oxidation states</strong>, <strong>high melting points</strong>, <strong>magnetic properties</strong>, <strong>catalytic properties</strong>, <strong>coloured compounds</strong>, and <strong>complex ions with ligands</strong>. You need to recognize this list.</p>
      solution: "<p>遷移元素は、不完全な d 副準位をもっています。そのために、特徴的な性質があります。<strong>複数の酸化数</strong> (variable oxidation states)、<strong>高い融点</strong> (high melting points)、<strong>磁性</strong> (magnetic properties)、<strong>触媒作用</strong> (catalytic properties)、<strong>有色の化合物</strong> (coloured compounds)、<strong>配位子との錯イオン</strong> (complex ions with ligands) です。この一覧を見分けられるようにしておきましょう。</p>",
      misconception: {
        // EN (option B): Transition elements have <em>high</em> melting points. Their metallic bonding is strong.
        "1": "遷移元素は融点が<em>高い</em>元素です。金属結合が強いからです。",
        // EN (option F): Transition elements are metals. They are good electrical conductors.
        "5": "遷移元素は金属です。電気をよく通します。",
      },
    },

    // ── s3-1-q043 · mcq · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q043": {
      // EN: <p>Zinc is in the d-block. Its atom has the configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> and its only common ion is <span class="chem">Zn^2+</span>. Why is zinc not classed as a transition element?</p>
      stem: "<p>亜鉛は d ブロックにあります。原子の電子配置は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> で、よく見られるイオンは <span class=\"chem\">Zn^2+</span> だけです。亜鉛が遷移元素に分類されないのはなぜですか。</p>",
      options: [
        // EN: Zinc has a full 4s sublevel.
        "亜鉛は 4s 副準位が完全に満たされている。",
        // EN: Neither the zinc atom nor the <span class="chem">Zn^2+</span> ion has an incomplete d sublevel.
        "亜鉛の原子も <span class=\"chem\">Zn^2+</span> イオンも、不完全な d 副準位をもたない。",
        // EN: The <span class="chem">Zn^2+</span> ion has the configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>8</sup></span>.
        "<span class=\"chem\">Zn^2+</span> イオンの電子配置は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>8</sup></span> である。",
        // EN: Zinc is a metal with a high density.
        "亜鉛は密度の大きい金属である。",
      ],
      hints: [
        // EN: What feature of the d sublevel makes an element a transition element?
        "ある元素が遷移元素かどうかは、d 副準位のどんな特徴で決まりますか。",
        // EN: Write the configuration of <span class="chem">Zn^2+</span>. Remember which electrons are lost first.
        "<span class=\"chem\">Zn^2+</span> の電子配置を書きましょう。どの電子が先に失われるかを思い出しましょう。",
      ],
      // EN: <p>A transition element has an <strong>incomplete d sublevel</strong> (as an atom or in its ions). Zn is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span> and <span class="chem">Zn^2+</span> is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The 3d sublevel is full in both. So zinc does not show the characteristic properties: it has one oxidation state in its compounds, and its compounds are not coloured.</p>
      solution: "<p>遷移元素は、（原子またはイオンで）<strong>不完全な d 副準位</strong> (incomplete d sublevel) をもつ元素です。Zn は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup></span>、<span class=\"chem\">Zn^2+</span> は <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> です。どちらも 3d 副準位が完全に満たされています。だから、亜鉛は遷移元素に特徴的な性質を示しません。化合物の中での酸化数は 1 つだけで、化合物に色もありません。</p>",
      misconception: {
        // EN (option A): True, but iron and many other transition elements also have a full 4s sublevel. The d sublevel is what matters.
        "0": "正しい文ですが、鉄など多くの遷移元素も 4s 副準位が完全に満たされています。大事なのは d 副準位です。",
        // EN (option C): The 4s electrons are lost first when a first-row d-block atom forms an ion. <span class="chem">Zn^2+</span> is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>.
        "2": "第一遷移系列の d ブロックの原子がイオンになるときは、4s 電子が先に失われます。<span class=\"chem\">Zn^2+</span> は <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> です。",
        // EN (option D): True, but this does not decide whether an element is a transition element.
        "3": "正しい文ですが、遷移元素かどうかは、これでは決まりません。",
      },
    },

    // ── s3-1-q044 · short · challenge · AHL · Structure 3.1.8 · 2 marks
    "s3-1-q044": {
      // EN: <p>Scandium has the electron configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>1</sup></span>. In its compounds it forms only the <span class="chem">Sc^3+</span> ion.</p><p>Give one argument for and one argument against classing scandium as a transition element.</p>
      stem: "<p>スカンジウムの電子配置は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>1</sup></span> です。化合物の中では、<span class=\"chem\">Sc^3+</span> イオンにしかなりません。</p><p>スカンジウムを遷移元素に分類することについて、賛成の根拠を 1 つ、反対の根拠を 1 つあげましょう。</p>",
      hints: [
        // EN: Look at the 3d sublevel in the atom.
        "原子の 3d 副準位を見ましょう。",
        // EN: Now write the configuration of <span class="chem">Sc^3+</span>. Which three electrons are lost?
        "次に、<span class=\"chem\">Sc^3+</span> の電子配置を書きましょう。どの 3 個の電子が失われますか。",
      ],
      // EN: <p><strong>For:</strong> the scandium atom has an incomplete d sublevel (<span class="mono nowrap">3d<sup>1</sup></span>).</p><p><strong>Against:</strong> the only ion, <span class="chem">Sc^3+</span>, has the configuration <span class="mono nowrap">[Ar]</span>, with no d electrons. So scandium does not show characteristic properties of transition elements: it has only one oxidation state (+3) in its compounds, and its compounds are not coloured.</p>
      answer: "<p><strong>賛成：</strong>スカンジウム原子は、不完全な d 副準位（<span class=\"mono nowrap\">3d<sup>1</sup></span>）をもっています。</p><p><strong>反対：</strong>ただ 1 つのイオン <span class=\"chem\">Sc^3+</span> の電子配置は <span class=\"mono nowrap\">[Ar]</span> で、d 電子がありません。だから、スカンジウムは遷移元素に特徴的な性質を示しません。化合物の中での酸化数は 1 つ（+3）だけで、化合物に色もありません。</p>",
      markscheme: [
        // EN: For: the atom has an incomplete / partially filled d sublevel (3d<sup>1</sup>).
        "賛成：原子が不完全な / 一部だけ満たされた d 副準位（3d<sup>1</sup>）をもつ。",
        // EN: Against: <span class="chem">Sc^3+</span> has no d electrons / is [Ar] (accept: it shows only one oxidation state / its compounds are not coloured).
        "反対：<span class=\"chem\">Sc^3+</span> には d 電子がない / [Ar] である（「酸化数が 1 つしかない / 化合物に色がない」も認める）。",
      ],
    },

    // ── s3-1-q045 · mcq · foundation · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q045": {
      // EN: <p>Transition elements form complex ions with ligands. What is a ligand?</p>
      stem: "<p>遷移元素は、配位子と錯イオン (complex ion) をつくります。配位子 (ligand) とは何ですか。</p>",
      options: [
        // EN: The positive metal ion at the centre of a complex ion.
        "錯イオンの中心にある、正の電荷をもつ金属イオン。",
        // EN: A molecule or ion that accepts a pair of electrons from a metal ion.
        "金属イオンから電子対を受け取る分子やイオン。",
        // EN: An ion outside the square brackets that balances the charge of a complex ion.
        "角かっこの外にあって、錯イオンの電荷とつり合うイオン。",
        // EN: A molecule or ion with a lone pair of electrons that forms a coordination bond to a central metal ion.
        "非共有電子対をもち、中心の金属イオンと配位結合をつくる分子やイオン。",
      ],
      hints: [
        // EN: Examples of ligands: <span class="chem">H2O</span>, <span class="chem">NH3</span>, <span class="chem">Cl-</span>. What do these have in common?
        "配位子の例：<span class=\"chem\">H2O</span>、<span class=\"chem\">NH3</span>、<span class=\"chem\">Cl-</span>。これらに共通するものは何ですか。",
        // EN: In a coordination bond, both electrons of the shared pair come from the same atom.
        "配位結合では、共有電子対の電子が 2 個とも同じ原子から出されます。",
      ],
      // EN: <p>A ligand is a molecule or ion that has a <strong>lone pair of electrons</strong>. It donates the lone pair to the central metal ion and forms a <strong>coordination bond</strong>. In <span class="chem">[Cu(H2O)6]^2+</span> the six water molecules are the ligands.</p>
      solution: "<p>配位子は、<strong>非共有電子対</strong> (lone pair) をもつ分子やイオンです。その非共有電子対を中心の金属イオンに与えて、<strong>配位結合</strong> (coordination bond) をつくります。<span class=\"chem\">[Cu(H2O)6]^2+</span> では、6 個の水分子が配位子です。</p>",
      misconception: {
        // EN (option A): The metal ion is the centre of the complex. The ligands are the species bonded around it.
        "0": "金属イオンは錯体の中心です。配位子は、そのまわりに結合している化学種です。",
        // EN (option B): The direction is reversed. The ligand <em>donates</em> the electron pair. The metal ion accepts it.
        "1": "向きが逆です。配位子は電子対を<em>与える</em>側です。受け取るのは金属イオンです。",
        // EN (option C): An ion outside the brackets is not bonded to the metal ion. Ligands are written inside the square brackets.
        "2": "角かっこの外のイオンは、金属イオンと結合していません。配位子は角かっこの中に書きます。",
      },
    },

    // ── s3-1-q046 · numeric · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q046": {
      // EN: <p>Deduce the oxidation state of chromium in the compound <span class="chem">[Cr(H2O)4Cl2]Cl</span>.</p><p>Type the sign first and then the number, for example +3 or −3.</p>
      stem: "<p>化合物 <span class=\"chem\">[Cr(H2O)4Cl2]Cl</span> のクロムの酸化数を導きなさい (deduce)。</p><p>符号を先に、数字をあとに入力しましょう。例：+3 や −3。</p>",
      hints: [
        // EN: The chloride ion outside the brackets is <span class="chem">Cl-</span>. What is the charge on the complex ion inside the brackets?
        "角かっこの外の塩化物イオンは <span class=\"chem\">Cl-</span> です。角かっこの中の錯イオンの電荷はいくつですか。",
        // EN: Water is a neutral ligand. Each chloride ligand is 1−.
        "水は電荷のない配位子です。塩化物イオンの配位子は、それぞれ 1− です。",
        // EN: Chromium + ligand charges = charge on the complex ion.
        "クロム + 配位子の電荷 = 錯イオンの電荷 です。",
      ],
      // EN: <p>The compound has no overall charge. The ion outside the brackets is <span class="chem">Cl-</span>, so the complex ion is <span class="chem">[Cr(H2O)4Cl2]+</span>.</p><p>Inside the complex: water is neutral (0), and each chloride ligand is −1. Let chromium be <i>x</i>.</p><div class="worked__math"><i>x</i> + 4(0) + 2(−1) = +1</div><div class="worked__math"><i>x</i> = <b>+3</b></div>
      solution: "<p>化合物全体には電荷がありません。角かっこの外のイオンは <span class=\"chem\">Cl-</span> なので、錯イオンは <span class=\"chem\">[Cr(H2O)4Cl2]+</span> です。</p><p>錯イオンの中では、水は電荷なし（0）、塩化物イオンの配位子はそれぞれ −1 です。クロムを <i>x</i> とします。</p><div class=\"worked__math\"><i>x</i> + 4(0) + 2(−1) = +1</div><div class=\"worked__math\"><i>x</i> = <b>+3</b></div>",
      // EN: In an exam, write +3 (or III) with the sign first. “3+” and “3” do not score.
      correctNote: "試験では、符号を先にして +3（または III）と書きます。「3+」や「3」では点になりません。",
    },

    // ── s3-1-q047 · multi · exam · AHL · Structure 3.1.8 · 1 mark
    "s3-1-q047": {
      // EN: <p>Which statements about the complex ion <span class="chem">[CuCl4]^2-</span> are correct? Select all that apply.</p>
      stem: "<p>錯イオン <span class=\"chem\">[CuCl4]^2-</span> について、正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: The chloride ions are the ligands.
        "塩化物イオンが配位子である。",
        // EN: Each chloride ion donates a pair of electrons to the copper ion.
        "塩化物イオンは、それぞれ電子対を 1 つ銅イオンに与える。",
        // EN: The bonds between copper and chlorine are coordination bonds.
        "銅と塩素の間の結合は配位結合である。",
        // EN: The oxidation state of copper is −2.
        "銅の酸化数は −2 である。",
        // EN: The copper ion donates pairs of electrons to the chloride ions.
        "銅イオンが、塩化物イオンに電子対を与える。",
        // EN: The oxidation state of copper is +2.
        "銅の酸化数は +2 である。",
      ],
      hints: [
        // EN: Each ligand is a chloride ion, <span class="chem">Cl-</span>, with lone pairs.
        "配位子はどれも、非共有電子対をもつ塩化物イオン <span class=\"chem\">Cl-</span> です。",
        // EN: Copper + 4(−1) = −2.
        "銅 + 4(−1) = −2。",
      ],
      // EN: <p>The four chloride ions are the <strong>ligands</strong>. Each one donates a lone pair to the copper ion, so each Cu–Cl bond is a <strong>coordination bond</strong>.</p><div class="worked__math"><i>x</i> + 4(−1) = −2</div><div class="worked__math"><i>x</i> = <b>+2</b></div><p>The oxidation state of copper is +2.</p>
      solution: "<p>4 個の塩化物イオンが<strong>配位子</strong>です。それぞれが非共有電子対を銅イオンに与えるので、Cu–Cl 結合はどれも<strong>配位結合</strong>です。</p><div class=\"worked__math\"><i>x</i> + 4(−1) = −2</div><div class=\"worked__math\"><i>x</i> = <b>+2</b></div><p>銅の酸化数は +2 です。</p>",
      misconception: {
        // EN (option D): The charge on the whole complex ion is 2−. That is not the oxidation state of copper. Four <span class="chem">Cl-</span> ligands give −4, so copper is +2.
        "3": "錯イオン全体の電荷が 2− です。これは銅の酸化数ではありません。4 個の <span class=\"chem\">Cl-</span> 配位子で −4 になるので、銅は +2 です。",
        // EN (option E): The direction is reversed. Ligands donate lone pairs. The metal ion accepts them.
        "4": "向きが逆です。配位子が非共有電子対を与えます。金属イオンはそれを受け取ります。",
      },
    },

    // ── s3-1-q048 · mcq · foundation · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q048": {
      // EN: <p>An iron atom has the electron configuration <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. What is the electron configuration of the <span class="chem">Fe^2+</span> ion?</p>
      stem: "<p>鉄原子の電子配置は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> です。<span class=\"chem\">Fe^2+</span> イオンの電子配置はどれですか。</p>",
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
        "2+ のイオンは、電子を 2 個失っています。",
        // EN: Which sublevel loses electrons first: 4s or 3d?
        "先に電子を失うのは、4s と 3d のどちらの副準位ですか。",
      ],
      // EN: <p>The 4s sublevel is filled before 3d, but in the ion the <strong>4s electrons are lost first</strong>. Remove the two 4s electrons:</p><div class="worked__math">Fe: <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp;→&nbsp; <span class="chem">Fe^2+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>6</sup></span></b></div>
      solution: "<p>4s 副準位は 3d より先に電子が入りますが、イオンになるときは <strong>4s 電子が先に失われます</strong>。2 個の 4s 電子を取り除きます。</p><div class=\"worked__math\">Fe: <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Fe^2+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span></b></div>",
      misconception: {
        // EN (option B): This removes two 3d electrons. When a first-row transition atom forms an ion, the 4s electrons are lost first.
        "1": "これは 3d 電子を 2 個取り除いています。第一遷移系列の原子がイオンになるときは、4s 電子が先に失われます。",
        // EN (option C): This removes one 4s and one 3d electron. Both 4s electrons are lost before any 3d electron.
        "2": "これは 4s 電子を 1 個、3d 電子を 1 個取り除いています。3d 電子が失われる前に、4s 電子が 2 個とも失われます。",
        // EN (option D): This is the configuration of the atom. A 2+ ion has two fewer electrons.
        "3": "これは原子の電子配置です。2+ のイオンは、電子が 2 個少なくなっています。",
      },
    },

    // ── s3-1-q049 · mcq · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q049": {
      // EN: <p>What is the electron configuration of the <span class="chem">Cu^2+</span> ion?</p>
      stem: "<p><span class=\"chem\">Cu^2+</span> イオンの電子配置はどれですか。</p>",
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
        "銅は、第一遷移系列にある 2 つの例外の 1 つです。原子は <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> です。",
        // EN: Remove the 4s electron first, then one 3d electron.
        "先に 4s 電子を取り除き、次に 3d 電子を 1 個取り除きます。",
      ],
      // EN: <p>The copper atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>. Remove two electrons: first the 4s electron, then one 3d electron.</p><div class="worked__math">Cu: <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class="chem">Cu+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class="chem">Cu^2+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>9</sup></span></b></div>
      solution: "<p>銅原子は <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> です。電子を 2 個取り除きます。先に 4s 電子、次に 3d 電子を 1 個です。</p><div class=\"worked__math\">Cu: <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Cu+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp;→&nbsp; <span class=\"chem\">Cu^2+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span></b></div>",
      misconception: {
        // EN (option A): This keeps the 4s electron and removes two 3d electrons. The 4s electron is lost first.
        "0": "これは 4s 電子を残して、3d 電子を 2 個取り除いています。4s 電子が先に失われます。",
        // EN (option B): This starts from <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span> and removes two 3d electrons. The copper atom is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>, and 4s is lost first.
        "1": "これは <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span> から始めて、3d 電子を 2 個取り除いています。銅原子は <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> で、4s が先に失われます。",
        // EN (option D): This is <span class="chem">Cu+</span>, which has lost only the 4s electron. <span class="chem">Cu^2+</span> has lost one more.
        "3": "これは <span class=\"chem\">Cu+</span> で、4s 電子だけを失ったものです。<span class=\"chem\">Cu^2+</span> は、もう 1 個失っています。",
      },
    },

    // ── s3-1-q050 · multi · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q050": {
      // EN: <p>Which ions have the electron configuration <span class="mono nowrap">[Ar] 3d<sup>5</sup></span>? Select all that apply.</p>
      stem: "<p>電子配置が <span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span> であるイオンはどれですか。当てはまるものをすべて選びましょう。</p>",
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
        "すばやく確かめる方法：イオンの電子の数 = 原子番号 − 電荷 です。",
        // EN: <span class="mono nowrap">[Ar] 3d<sup>5</sup></span> has 18 + 5 = 23 electrons.
        "<span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span> の電子は 18 + 5 = 23 個です。",
      ],
      // EN: <p><span class="mono nowrap">[Ar] 3d<sup>5</sup></span> has 23 electrons. Count the electrons in each ion (atomic number − charge):</p><div class="worked__math"><span class="chem">Cr^3+</span>: 24 − 3 = 21 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>3</sup></span></div><div class="worked__math"><span class="chem">Mn^2+</span>: 25 − 2 = 23 &nbsp; <b><span class="mono nowrap">[Ar] 3d<sup>5</sup></span></b></div><div class="worked__math"><span class="chem">Fe^2+</span>: 26 − 2 = 24 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>6</sup></span></div><div class="worked__math"><span class="chem">Fe^3+</span>: 26 − 3 = 23 &nbsp; <b><span class="mono nowrap">[Ar] 3d<sup>5</sup></span></b></div><div class="worked__math"><span class="chem">Co^2+</span>: 27 − 2 = 25 &nbsp; <span class="mono nowrap">[Ar] 3d<sup>7</sup></span></div><p>In these ions all the 4s electrons have been lost, so every electron beyond the argon core is a 3d electron.</p>
      solution: "<p><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span> の電子は 23 個です。それぞれのイオンの電子を数えます（原子番号 − 電荷）。</p><div class=\"worked__math\"><span class=\"chem\">Cr^3+</span>: 24 − 3 = 21 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>3</sup></span></div><div class=\"worked__math\"><span class=\"chem\">Mn^2+</span>: 25 − 2 = 23 &nbsp; <b><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span></b></div><div class=\"worked__math\"><span class=\"chem\">Fe^2+</span>: 26 − 2 = 24 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span></div><div class=\"worked__math\"><span class=\"chem\">Fe^3+</span>: 26 − 3 = 23 &nbsp; <b><span class=\"mono nowrap\">[Ar] 3d<sup>5</sup></span></b></div><div class=\"worked__math\"><span class=\"chem\">Co^2+</span>: 27 − 2 = 25 &nbsp; <span class=\"mono nowrap\">[Ar] 3d<sup>7</sup></span></div><p>これらのイオンでは、4s 電子がすべて失われています。だから、アルゴンの電子配置より外にある電子は、すべて 3d 電子です。</p>",
      misconception: {
        // EN (option A): Cr is <span class="mono nowrap">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>. Removing three electrons (4s first) leaves <span class="mono nowrap">[Ar] 3d<sup>3</sup></span>.
        "0": "Cr は <span class=\"mono nowrap\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> です。電子を 3 個（4s から先に）取り除くと、<span class=\"mono nowrap\">[Ar] 3d<sup>3</sup></span> が残ります。",
        // EN (option C): Fe is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. Removing the two 4s electrons leaves <span class="mono nowrap">[Ar] 3d<sup>6</sup></span>.
        "2": "Fe は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> です。2 個の 4s 電子を取り除くと、<span class=\"mono nowrap\">[Ar] 3d<sup>6</sup></span> が残ります。",
        // EN (option E): Co is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>. Removing the two 4s electrons leaves <span class="mono nowrap">[Ar] 3d<sup>7</sup></span>.
        "4": "Co は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span> です。2 個の 4s 電子を取り除くと、<span class=\"mono nowrap\">[Ar] 3d<sup>7</sup></span> が残ります。",
      },
    },

    // ── s3-1-q051 · numeric · challenge · AHL · Structure 3.1.9 · 2 marks
    "s3-1-q051": {
      // EN: <p>The compound <span class="chem">VOSO4</span> contains the sulfate ion, <span class="chem">SO4^2-</span>. Deduce the number of 3d electrons in the vanadium ion in this compound.</p>
      stem: "<p>化合物 <span class=\"chem\">VOSO4</span> は、硫酸イオン <span class=\"chem\">SO4^2-</span> を含みます。この化合物のバナジウムイオンにある 3d 電子の数を導きなさい (deduce)。</p>",
      hints: [
        // EN: First find the oxidation state of vanadium. Sulfate is 2− and oxygen is −2.
        "まずバナジウムの酸化数を求めます。硫酸イオンは 2−、酸素は −2 です。",
        // EN: A vanadium atom is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>.
        "バナジウム原子は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span> です。",
        // EN: Remove that number of electrons, 4s first.
        "その数だけ電子を取り除きます。4s から先です。",
      ],
      // EN: <p><strong>Step 1: oxidation state.</strong> Let vanadium be <i>x</i>. Oxygen is −2 and sulfate is 2−.</p><div class="worked__math"><i>x</i> + (−2) + (−2) = 0</div><div class="worked__math"><i>x</i> = +4</div><p><strong>Step 2: configuration.</strong> V is <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>. Remove four electrons: the two 4s electrons first, then two 3d electrons.</p><div class="worked__math">V<sup>4+</sup>: <span class="mono nowrap">[Ar] 3d<sup>1</sup></span></div><p>The ion has <strong>1</strong> 3d electron.</p>
      solution: "<p><strong>ステップ 1：酸化数。</strong>バナジウムを <i>x</i> とします。酸素は −2、硫酸イオンは 2− です。</p><div class=\"worked__math\"><i>x</i> + (−2) + (−2) = 0</div><div class=\"worked__math\"><i>x</i> = +4</div><p><strong>ステップ 2：電子配置。</strong>V は <span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span> です。電子を 4 個取り除きます。先に 4s 電子を 2 個、次に 3d 電子を 2 個です。</p><div class=\"worked__math\">V<sup>4+</sup>: <span class=\"mono nowrap\">[Ar] 3d<sup>1</sup></span></div><p>このイオンの 3d 電子は <strong>1</strong> 個です。</p>",
      // EN: 3d electrons
      unit: "個の 3d 電子",
    },

    // ── s3-1-q052 · mcq · exam · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q052": {
      // EN: <p>Calcium has only the oxidation state +2 in its compounds. Vanadium has the oxidation states +2, +3, +4 and +5 in its compounds. The table shows successive ionization energies.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">Ca</th><td class="num">590</td><td class="num">1145</td><td class="num">4912</td><td class="num">6491</td><td class="num"></td><td class="num"></td></tr><tr><th scope="row">V</th><td class="num">651</td><td class="num">1414</td><td class="num">2830</td><td class="num">4507</td><td class="num">6299</td><td class="num">12 363</td></tr></tbody></table></div><p>Which statement explains the difference?</p>
      stem: "<p>カルシウムは、化合物の中で酸化数 +2 しかとりません。バナジウムは、化合物の中で酸化数 +2、+3、+4、+5 をとります。表は逐次イオン化エネルギー (successive ionization energies) です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">第 1</th><th class=\"num\" scope=\"col\">第 2</th><th class=\"num\" scope=\"col\">第 3</th><th class=\"num\" scope=\"col\">第 4</th><th class=\"num\" scope=\"col\">第 5</th><th class=\"num\" scope=\"col\">第 6</th></tr></thead><tbody><tr><th scope=\"row\">Ca</th><td class=\"num\">590</td><td class=\"num\">1145</td><td class=\"num\">4912</td><td class=\"num\">6491</td><td class=\"num\"></td><td class=\"num\"></td></tr><tr><th scope=\"row\">V</th><td class=\"num\">651</td><td class=\"num\">1414</td><td class=\"num\">2830</td><td class=\"num\">4507</td><td class=\"num\">6299</td><td class=\"num\">12 363</td></tr></tbody></table></div><p>この違いを説明している文はどれですか。</p>",
      options: [
        // EN: Every ionization energy of vanadium is lower than the same ionization energy of calcium.
        "バナジウムのイオン化エネルギーは、どれも、カルシウムの同じ番号のイオン化エネルギーより小さい。",
        // EN: Vanadium has a greater nuclear charge, so it holds its electrons less strongly.
        "バナジウムのほうが核電荷が大きいので、電子を引きつける力が弱い。",
        // EN: The first five ionization energies of vanadium are close in value. For calcium there is a very large increase after the second.
        "バナジウムの最初の 5 つのイオン化エネルギーは、値が近い。カルシウムでは、第 2 のあとで値がとても大きく増える。",
        // EN: A calcium atom has only two electrons that can be removed.
        "カルシウム原子には、取り除ける電子が 2 個しかない。",
      ],
      hints: [
        // EN: Find the increase from each value to the next.
        "それぞれの値から次の値までの増え方を求めましょう。",
        // EN: Where is the first very large increase for Ca? Where is it for V?
        "Ca で最初にとても大きく増えるのはどこですか。V ではどこですか。",
      ],
      // EN: <p>Look at the increase from each ionization energy to the next.</p><div class="worked__math">Ca: +555, then +3767</div><div class="worked__math">V: +763, +1416, +1677, +1792, then +6064</div><p>For calcium there is a very large increase after the second electron. The third electron comes from an inner energy level (3p), so calcium forms only <span class="chem">Ca^2+</span>.</p><p>For vanadium the first five values rise in small steps, because the 4s and 3d electrons are close in energy. The <strong>successive ionization energies are close in value</strong>, so vanadium can lose different numbers of electrons and shows variable oxidation states. The large increase comes only after the fifth electron.</p>
      solution: "<p>それぞれのイオン化エネルギーから次の値までの増え方を見ます。</p><div class=\"worked__math\">Ca: +555、次に +3767</div><div class=\"worked__math\">V: +763, +1416, +1677, +1792、次に +6064</div><p>カルシウムでは、2 個目の電子のあとで値がとても大きく増えます。3 個目の電子は内側のエネルギー準位（3p）から取り除かれるので、カルシウムは <span class=\"chem\">Ca^2+</span> にしかなりません。</p><p>バナジウムでは、最初の 5 つの値が少しずつ大きくなります。4s 電子と 3d 電子のエネルギーが近いからです。<strong>逐次イオン化エネルギーの値が近い</strong>ので、バナジウムは失う電子の数を変えることができ、複数の酸化数をとります。値が大きく増えるのは、5 個目の電子のあとだけです。</p>",
      misconception: {
        // EN (option A): Check the data: the 1st and 2nd values for vanadium (651, 1414) are higher than those for calcium (590, 1145).
        "0": "データを確かめましょう。バナジウムの第 1 と第 2 の値（651、1414）は、カルシウムの値（590、1145）より大きくなっています。",
        // EN (option B): A greater nuclear charge attracts electrons <em>more</em> strongly, not less.
        "1": "核電荷が大きいほど、電子を引きつける力は<em>強く</em>なります。弱くはなりません。",
        // EN (option D): A calcium atom has 20 electrons, and the table gives a 3rd and a 4th ionization energy. The third electron can be removed, but it needs much more energy.
        "3": "カルシウム原子の電子は 20 個で、表には第 3 と第 4 のイオン化エネルギーものっています。3 個目の電子も取り除けますが、ずっと多くのエネルギーが必要です。",
      },
    },

    // ── s3-1-q053 · numeric · challenge · AHL · Structure 3.1.9 · 1 mark
    "s3-1-q053": {
      // EN: <p>The table shows the first six successive ionization energies of a first-row transition element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">659</td><td class="num">1310</td><td class="num">2653</td><td class="num">4175</td><td class="num">9581</td><td class="num">11 533</td></tr></tbody></table></div><p>Deduce the highest oxidation state that this element is likely to show in its compounds.</p><p>Type the sign first and then the number, for example +3.</p>
      stem: "<p>表は、ある第一遷移系列の元素について、最初の 6 つの逐次イオン化エネルギーを示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">第 1</th><th class=\"num\" scope=\"col\">第 2</th><th class=\"num\" scope=\"col\">第 3</th><th class=\"num\" scope=\"col\">第 4</th><th class=\"num\" scope=\"col\">第 5</th><th class=\"num\" scope=\"col\">第 6</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">659</td><td class=\"num\">1310</td><td class=\"num\">2653</td><td class=\"num\">4175</td><td class=\"num\">9581</td><td class=\"num\">11 533</td></tr></tbody></table></div><p>この元素が化合物の中でとると考えられる、いちばん大きい酸化数を導きなさい (deduce)。</p><p>符号を先に、数字をあとに入力しましょう。例：+3。</p>",
      hints: [
        // EN: Find the increase from each value to the next.
        "それぞれの値から次の値までの増え方を求めましょう。",
        // EN: The 4s and 3d electrons are close in energy. The next electron comes from an inner level and needs much more energy.
        "4s 電子と 3d 電子はエネルギーが近いです。その次の電子は内側の準位から取り除かれるので、ずっと多くのエネルギーが必要です。",
        // EN: Count the electrons removed before the very large increase.
        "値がとても大きく増える前に取り除かれた電子を数えましょう。",
      ],
      // EN: <p>Find the increase from each value to the next.</p><div class="worked__math">+651, +1343, +1522, then <b>+5406</b>, then +1952</div><p>The first four values rise in small steps. These four electrons are the 4s and 3d electrons, which are close in energy. The fifth electron needs much more energy, because it comes from the inner 3p sublevel.</p><p>The atom has four outer (4s and 3d) electrons, so the highest oxidation state is <strong>+4</strong>. The element is titanium, <span class="mono nowrap">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span>.</p>
      solution: "<p>それぞれの値から次の値までの増え方を求めます。</p><div class=\"worked__math\">+651, +1343, +1522、次に <b>+5406</b>、次に +1952</div><p>最初の 4 つの値は少しずつ大きくなります。この 4 個の電子は 4s 電子と 3d 電子で、エネルギーが近いのです。5 個目の電子は、内側の 3p 副準位から取り除かれるので、ずっと多くのエネルギーが必要です。</p><p>この原子には外側の電子（4s と 3d）が 4 個あるので、いちばん大きい酸化数は <strong>+4</strong> です。この元素はチタンで、<span class=\"mono nowrap\">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span> です。</p>",
      // EN: In an exam, write +4 with the sign first.
      correctNote: "試験では、符号を先にして +4 と書きます。",
    },

    // ── s3-1-q054 · mcq · foundation · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q054": {
      // EN: <p>The diagram shows the colour wheel from the data booklet.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>A solution of a transition element complex absorbs orange light. What colour does the solution appear in white light?</p>
      stem: "<p>図は、データブックレットにある色相環 (colour wheel) です。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"データブックレットの色相環。同じ大きさの 6 つの扇形が、上から時計回りに並ぶ。橙色 585〜647 ナノメートル、黄色 575〜585、緑色 491〜575、青色 424〜491、紫色 400〜424、赤色 647〜700。橙色の反対側は青色、黄色の反対側は紫色、緑色の反対側は赤色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黄</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">緑</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">青</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">赤</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>ある遷移元素の錯体の溶液は、橙色 (orange) の光を吸収します。白色光のもとで、この溶液は何色に見えますか。</p>",
      options: [
        // EN: Orange
        "橙色 (orange)",
        // EN: Yellow
        "黄色 (yellow)",
        // EN: Blue
        "青色 (blue)",
        // EN: Red
        "赤色 (red)",
      ],
      hints: [
        // EN: The colour you see is complementary to the colour absorbed.
        "見える色は、吸収される色の補色 (complementary colour) です。",
        // EN: On the wheel, complementary colours are directly opposite each other.
        "色相環では、補色どうしは真向かいにあります。",
      ],
      // EN: <p>The colour observed is <strong>complementary</strong> to the colour absorbed. Complementary colours are opposite each other on the colour wheel. Blue is opposite orange, so the solution appears <strong>blue</strong>.</p>
      solution: "<p>見える色は、吸収される色の<strong>補色</strong>です。補色どうしは、色相環で向かい合っています。橙色の向かいは青色なので、溶液は<strong>青色</strong>に見えます。</p>",
      misconception: {
        // EN (option A): Orange is the colour that is absorbed, so it is removed from the light that reaches your eye. You see what is left.
        "0": "橙色は吸収される色です。だから、目に届く光からは取り除かれています。見えるのは残った光です。",
        // EN (option B): Yellow is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.
        "1": "黄色は、色相環で橙色のとなりにあります。補色はとなりではなく、<em>真向かい</em>にあります。",
        // EN (option D): Red is next to orange on the wheel. The complementary colour is directly <em>opposite</em>, not next to it.
        "3": "赤色は、色相環で橙色のとなりにあります。補色はとなりではなく、<em>真向かい</em>にあります。",
      },
    },

    // ── s3-1-q055 · short · exam · AHL · Structure 3.1.10 · 3 marks
    "s3-1-q055": {
      // EN: <p>A solution that contains the complex ion <span class="chem">[Cu(H2O)6]^2+</span> is blue. Explain why this complex ion is coloured.</p>
      stem: "<p>錯イオン <span class=\"chem\">[Cu(H2O)6]^2+</span> を含む溶液は青色です。この錯イオンに色がある理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Start with the d electrons of <span class="chem">Cu^2+</span>.
        "<span class=\"chem\">Cu^2+</span> の d 電子から始めましょう。",
        // EN: What do the ligands do to the d orbitals? What happens to an electron when light arrives?
        "配位子は d 軌道をどう変えますか。光が当たると、電子はどうなりますか。",
        // EN: Finish with the link between the colour absorbed and the colour seen.
        "最後に、吸収される色と見える色の関係を書きましょう。",
      ],
      // EN: <p>The <span class="chem">Cu^2+</span> ion has a partially filled d sublevel (<span class="mono nowrap">[Ar] 3d<sup>9</sup></span>). The ligands (water molecules) cause the d orbitals to split into two sets with different energies. An electron absorbs light and is promoted from a lower-energy d orbital to a higher-energy d orbital. The energy gap corresponds to light in the visible region. The colour observed (blue) is complementary to the colour absorbed (orange).</p><p>Do not write that the complex <em>emits</em> blue light. The colour comes from absorption.</p>
      answer: "<p><span class=\"chem\">Cu^2+</span> イオンは、一部だけ満たされた d 副準位（<span class=\"mono nowrap\">[Ar] 3d<sup>9</sup></span>）をもっています。配位子（水分子）によって、d 軌道はエネルギーの違う 2 組に分裂します。電子は光を吸収して、エネルギーの低い d 軌道からエネルギーの高い d 軌道へ移ります（励起されます）。このエネルギーの差は、可視領域の光にあたります。見える色（青色）は、吸収される色（橙色）の補色です。</p><p>錯体が青色の光を<em>放出する</em>と書いてはいけません。色は吸収によって生じます。</p>",
      markscheme: [
        // EN: The ion has partially filled d orbitals / an incomplete d sublevel.
        "イオンが、一部だけ満たされた d 軌道 / 不完全な d 副準位をもつ。",
        // EN: The ligands cause the d orbitals to split (into two sets of different energy).
        "配位子によって、d 軌道が（エネルギーの違う 2 組に）分裂する。",
        // EN: Light is absorbed as electrons are promoted / move to higher-energy d orbitals.
        "電子がエネルギーの高い d 軌道へ移る（励起される）ときに、光が吸収される。",
        // EN: The energy gap corresponds to (the frequency of) visible light.
        "エネルギーの差が、可視光（の振動数）にあたる。",
        // EN: The colour observed is complementary to the colour absorbed (only if absorption of light is mentioned).
        "見える色は、吸収される色の補色である（光の吸収にふれている場合だけ）。",
      ],
    },

    // ── s3-1-q056 · mcq · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q056": {
      // EN: <p>A solution that contains a transition element complex ion appears green in white light. Which statement explains this?</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p>
      stem: "<p>ある遷移元素の錯イオンを含む溶液は、白色光のもとで緑色 (green) に見えます。これを説明している文はどれですか。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"データブックレットの色相環。同じ大きさの 6 つの扇形が、上から時計回りに並ぶ。橙色 585〜647 ナノメートル、黄色 575〜585、緑色 491〜575、青色 424〜491、紫色 400〜424、赤色 647〜700。橙色の反対側は青色、黄色の反対側は紫色、緑色の反対側は赤色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黄</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">緑</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">青</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">赤</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p>",
      options: [
        // EN: Electrons fall from higher-energy d orbitals to lower-energy d orbitals and emit green light.
        "電子がエネルギーの高い d 軌道から低い d 軌道へ落ち、緑色の光を放出する。",
        // EN: The complex absorbs green light when electrons are promoted between the split d orbitals.
        "分裂した d 軌道の間で電子が高い準位へ移るときに、錯体が緑色の光を吸収する。",
        // EN: The complex absorbs red light when electrons are promoted between the split d orbitals. The light that is left appears green.
        "分裂した d 軌道の間で電子が高い準位へ移るときに、錯体が赤色の光を吸収する。残った光が緑色に見える。",
        // EN: The complex absorbs all colours of visible light except red.
        "錯体は、赤色以外のすべての色の可視光を吸収する。",
      ],
      hints: [
        // EN: Is the colour caused by light being absorbed or by light being emitted?
        "色の原因は、光の吸収ですか、光の放出ですか。",
        // EN: Find the colour opposite green on the wheel.
        "色相環で、緑色の向かいにある色を探しましょう。",
      ],
      // EN: <p>White light passes through the solution. The complex <strong>absorbs</strong> light of one colour, and the energy promotes an electron from a lower-energy d orbital to a higher-energy d orbital. The colour seen is the complementary colour. Red is opposite green on the wheel, so the complex absorbs <strong>red</strong> light and appears green.</p>
      solution: "<p>白色光が溶液を通ります。錯体は 1 つの色の光を<strong>吸収</strong>し、そのエネルギーで電子がエネルギーの低い d 軌道から高い d 軌道へ移ります（励起されます）。見える色は補色です。色相環で緑色の向かいは赤色なので、錯体は<strong>赤色</strong>の光を吸収し、緑色に見えます。</p>",
      misconception: {
        // EN (option A): This describes emission. The colour of a complex comes from <em>absorption</em> of part of the white light, not from light given out.
        "0": "これは発光の説明です。錯体の色は、白色光の一部を<em>吸収</em>することで生じます。光を出すからではありません。",
        // EN (option B): If green light were absorbed, it would be missing from the light that reaches your eye. The solution would appear red.
        "1": "緑色の光が吸収されると、目に届く光から緑色がなくなります。溶液は赤色に見えるはずです。",
        // EN (option D): If only red light passed through, the solution would appear red, not green.
        "3": "赤色の光だけが通りぬけるなら、溶液は緑色ではなく赤色に見えるはずです。",
      },
    },

    // ── s3-1-q057 · numeric · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q057": {
      // EN: <p>A complex ion absorbs light most strongly at a wavelength of 510 nm. Calculate the frequency of this light, in Hz.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>ある錯イオンは、波長 510 nm の光をいちばん強く吸収します。この光の振動数を Hz 単位で計算しなさい (calculate)。</p><p><i>c</i> = <i>λf</i> と <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup> を使いましょう。</p>",
      hints: [
        // EN: Convert the wavelength to metres first: 1 nm = 10<sup>−9</sup> m.
        "まず波長をメートルに直します。1 nm = 10<sup>−9</sup> m です。",
        // EN: Rearrange <i>c</i> = <i>λf</i> to <i>f</i> = <i>c</i> / <i>λ</i>.
        "<i>c</i> = <i>λf</i> を変形して、<i>f</i> = <i>c</i> / <i>λ</i> にします。",
      ],
      // EN: <div class="worked__math"><i>λ</i> = 510 nm = 510 × 10<sup>−9</sup> m = 5.10 × 10<sup>−7</sup> m</div><div class="worked__math"><i>f</i> = <i>c</i> / <i>λ</i></div><div class="worked__math">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (5.10 × 10<sup>−7</sup> m)</div><div class="worked__math">= <b>5.88 × 10<sup>14</sup> Hz</b> &nbsp; (3 s.f.)</div><p>On the colour wheel, 510 nm is green light (491–575 nm). The complex absorbs green, so it appears red.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = 510 nm = 510 × 10<sup>−9</sup> m = 5.10 × 10<sup>−7</sup> m</div><div class=\"worked__math\"><i>f</i> = <i>c</i> / <i>λ</i></div><div class=\"worked__math\">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (5.10 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">= <b>5.88 × 10<sup>14</sup> Hz</b> &nbsp; （有効数字 3 桁）</div><p>色相環では、510 nm は緑色の光（491–575 nm）です。錯体は緑色を吸収するので、赤色に見えます。</p>",
    },

    // ── s3-1-q058 · numeric · exam · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q058": {
      // EN: <p>A complex ion absorbs light of frequency 6.38 × 10<sup>14</sup> Hz. Calculate the wavelength of this light, in nm.</p><p>Use <i>c</i> = <i>λf</i> and <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>ある錯イオンは、振動数 6.38 × 10<sup>14</sup> Hz の光を吸収します。この光の波長を nm 単位で計算しなさい (calculate)。</p><p><i>c</i> = <i>λf</i> と <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup> を使いましょう。</p>",
      hints: [
        // EN: Rearrange <i>c</i> = <i>λf</i> to <i>λ</i> = <i>c</i> / <i>f</i>. The answer is in metres.
        "<i>c</i> = <i>λf</i> を変形して、<i>λ</i> = <i>c</i> / <i>f</i> にします。答えはメートル単位で出ます。",
        // EN: Convert metres to nanometres: multiply by 10<sup>9</sup>.
        "メートルをナノメートルに直します。10<sup>9</sup> をかけましょう。",
      ],
      // EN: <div class="worked__math"><i>λ</i> = <i>c</i> / <i>f</i></div><div class="worked__math">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (6.38 × 10<sup>14</sup> s<sup>−1</sup>)</div><div class="worked__math">= 4.702… × 10<sup>−7</sup> m</div><div class="worked__math">= <b>470 nm</b> &nbsp; (3 s.f.)</div><p>On the colour wheel, 470 nm is blue light (424–491 nm). The complex absorbs blue, so it appears orange.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = <i>c</i> / <i>f</i></div><div class=\"worked__math\">= (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (6.38 × 10<sup>14</sup> s<sup>−1</sup>)</div><div class=\"worked__math\">= 4.702… × 10<sup>−7</sup> m</div><div class=\"worked__math\">= <b>470 nm</b> &nbsp; （有効数字 3 桁）</div><p>色相環では、470 nm は青色の光（424–491 nm）です。錯体は青色を吸収するので、橙色に見えます。</p>",
    },

    // ── s3-1-q059 · mcq · challenge · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q059": {
      // EN: <p>A complex ion absorbs light of frequency 7.25 × 10<sup>14</sup> Hz. Use <i>c</i> = <i>λf</i> and the colour wheel.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>Which row is correct?</p>
      stem: "<p>ある錯イオンは、振動数 7.25 × 10<sup>14</sup> Hz の光を吸収します。<i>c</i> = <i>λf</i> と色相環を使いましょう。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"データブックレットの色相環。同じ大きさの 6 つの扇形が、上から時計回りに並ぶ。橙色 585〜647 ナノメートル、黄色 575〜585、緑色 491〜575、青色 424〜491、紫色 400〜424、赤色 647〜700。橙色の反対側は青色、黄色の反対側は紫色、緑色の反対側は赤色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黄</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">緑</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">青</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">赤</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>正しい組み合わせはどれですか。</p>",
      options: [
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: yellow. Colour observed: violet.
        "吸収される波長：414 nm。吸収される色：黄色。見える色：紫色。",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: violet.
        "吸収される波長：414 nm。吸収される色：紫色。見える色：紫色。",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: blue.
        "吸収される波長：414 nm。吸収される色：紫色。見える色：青色。",
        // EN: Wavelength absorbed: 414 nm. Colour absorbed: violet. Colour observed: yellow.
        "吸収される波長：414 nm。吸収される色：紫色。見える色：黄色。",
      ],
      hints: [
        // EN: <i>λ</i> = <i>c</i> / <i>f</i>. Convert the answer from m to nm.
        "<i>λ</i> = <i>c</i> / <i>f</i>。答えを m から nm に直しましょう。",
        // EN: Find the band on the wheel that contains this wavelength. That is the colour absorbed.
        "色相環で、この波長が入る範囲を探します。それが吸収される色です。",
        // EN: The colour observed is opposite on the wheel.
        "見える色は、色相環でその向かいにあります。",
      ],
      // EN: <div class="worked__math"><i>λ</i> = <i>c</i> / <i>f</i> = (3.00 × 10<sup>8</sup>) ÷ (7.25 × 10<sup>14</sup>)</div><div class="worked__math">= 4.14 × 10<sup>−7</sup> m = <b>414 nm</b></div><p>414 nm lies between 400 nm and 424 nm, so the light absorbed is <strong>violet</strong>. Yellow is opposite violet on the wheel, so the complex appears <strong>yellow</strong>.</p>
      solution: "<div class=\"worked__math\"><i>λ</i> = <i>c</i> / <i>f</i> = (3.00 × 10<sup>8</sup>) ÷ (7.25 × 10<sup>14</sup>)</div><div class=\"worked__math\">= 4.14 × 10<sup>−7</sup> m = <b>414 nm</b></div><p>414 nm は 400 nm と 424 nm の間にあるので、吸収される光は<strong>紫色</strong> (violet) です。色相環で紫色の向かいは黄色なので、錯体は<strong>黄色</strong>に見えます。</p>",
      misconception: {
        // EN (option A): The two colours are swapped. The wavelength you calculate is the light <em>absorbed</em>: 414 nm is in the violet band (400–424 nm).
        "0": "2 つの色が逆になっています。計算した波長は、<em>吸収される</em>光の波長です。414 nm は紫色の範囲（400–424 nm）にあります。",
        // EN (option B): The complex does not give out the light it absorbs. Violet is removed from the white light, so you see the complementary colour.
        "1": "錯体は、吸収した光を出すわけではありません。白色光から紫色が取り除かれるので、見えるのは補色です。",
        // EN (option C): Blue is next to violet on the wheel. The complementary colour is directly opposite.
        "2": "青色は、色相環で紫色のとなりにあります。補色は真向かいにあります。",
      },
    },

    // ── s3-1-q060 · mcq · challenge · AHL · Structure 3.1.10 · 1 mark
    "s3-1-q060": {
      // EN: <p>Which compound is expected to be coloured?</p>
      stem: "<p>色があると考えられる化合物はどれですか。</p>",
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
        "それぞれの化合物で、金属イオンの電荷を求めましょう。",
        // EN: Write the electron configuration of each ion (4s lost first).
        "それぞれのイオンの電子配置を書きましょう（4s が先に失われます）。",
        // EN: Colour needs a partially filled d sublevel: at least one d electron, and at least one space.
        "色が出るには、一部だけ満たされた d 副準位が必要です。d 電子が少なくとも 1 個あり、空きも少なくとも 1 つあることです。",
      ],
      // EN: <p>Colour needs an electron that can be promoted from one d orbital to another. So the ion must have a <strong>partially filled d sublevel</strong>.</p><div class="worked__math"><span class="chem">Cu+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp; full: not coloured</div><div class="worked__math"><span class="chem">Sc^3+</span>: <span class="mono nowrap">[Ar]</span> &nbsp; empty: not coloured</div><div class="worked__math"><span class="chem">Zn^2+</span>: <span class="mono nowrap">[Ar] 3d<sup>10</sup></span> &nbsp; full: not coloured</div><div class="worked__math"><span class="chem">Ti^3+</span>: <b><span class="mono nowrap">[Ar] 3d<sup>1</sup></span></b> &nbsp; partially filled: coloured</div>
      solution: "<p>色が出るには、ある d 軌道から別の d 軌道へ移る（励起される）ことのできる電子が必要です。だから、イオンは<strong>一部だけ満たされた d 副準位</strong> (partially filled d sublevel) をもっていなければいけません。</p><div class=\"worked__math\"><span class=\"chem\">Cu+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp; 完全に満たされている: 色がない</div><div class=\"worked__math\"><span class=\"chem\">Sc^3+</span>: <span class=\"mono nowrap\">[Ar]</span> &nbsp; 空: 色がない</div><div class=\"worked__math\"><span class=\"chem\">Zn^2+</span>: <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> &nbsp; 完全に満たされている: 色がない</div><div class=\"worked__math\"><span class=\"chem\">Ti^3+</span>: <b><span class=\"mono nowrap\">[Ar] 3d<sup>1</sup></span></b> &nbsp; 一部だけ満たされている: 色がある</div>",
      misconception: {
        // EN (option A): CuCl contains <span class="chem">Cu+</span>, which is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The d sublevel is full, so no electron can be promoted between d orbitals.
        "0": "CuCl は <span class=\"chem\">Cu+</span> を含み、その電子配置は <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> です。d 副準位が完全に満たされているので、d 軌道の間で電子を高い準位へ移すことはできません。",
        // EN (option B): <span class="chem">ScCl3</span> contains <span class="chem">Sc^3+</span>, which is <span class="mono nowrap">[Ar]</span>. There are no d electrons to promote.
        "1": "<span class=\"chem\">ScCl3</span> は <span class=\"chem\">Sc^3+</span> を含み、その電子配置は <span class=\"mono nowrap\">[Ar]</span> です。高い準位へ移せる d 電子がありません。",
        // EN (option C): <span class="chem">ZnSO4</span> contains <span class="chem">Zn^2+</span>, which is <span class="mono nowrap">[Ar] 3d<sup>10</sup></span>. The d sublevel is full, so no electron can be promoted between d orbitals.
        "2": "<span class=\"chem\">ZnSO4</span> は <span class=\"chem\">Zn^2+</span> を含み、その電子配置は <span class=\"mono nowrap\">[Ar] 3d<sup>10</sup></span> です。d 副準位が完全に満たされているので、d 軌道の間で電子を高い準位へ移すことはできません。",
      },
    },

    // ── s3-1-q061 · numeric · challenge · AHL · Structure 3.1.10 · 2 marks
    "s3-1-q061": {
      // EN: <p>A solution of a complex ion appears yellow in white light. Use the colour wheel to find the range of wavelengths that the complex absorbs.</p><p><svg viewBox="0 0 300 224" width="300" height="224" style="max-width:100%;height:auto" role="img" aria-label="Colour wheel from the data booklet. Six equal sectors, clockwise from the top: orange, 585 to 647 nanometres; yellow, 575 to 585; green, 491 to 575; blue, 424 to 491; violet, 400 to 424; red, 647 to 700. Orange is opposite blue, yellow is opposite violet, and green is opposite red."><circle cx="150" cy="112" r="74" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="112" x2="224.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="47.9" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="76.0" y2="112.0" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="113.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="112" x2="187.0" y2="176.1" stroke="currentColor" stroke-width="1.2"/><text x="150.0" y="70.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Orange</text><text x="189.7" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Yellow</text><text x="189.7" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Green</text><text x="150.0" y="161.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Blue</text><text x="110.3" y="138.9" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Violet</text><text x="110.3" y="93.1" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">Red</text><text x="110.0" y="40.7" text-anchor="end" font-size="12" fill="currentColor">647 nm</text><text x="190.0" y="40.7" text-anchor="start" font-size="12" fill="currentColor">585 nm</text><text x="232.0" y="116.0" text-anchor="start" font-size="12" fill="currentColor">575 nm</text><text x="190.0" y="193.3" text-anchor="start" font-size="12" fill="currentColor">491 nm</text><text x="110.0" y="193.3" text-anchor="end" font-size="12" fill="currentColor">424 nm</text><text x="68.0" y="108.0" text-anchor="end" font-size="12" fill="currentColor">700 nm</text><text x="68.0" y="126.0" text-anchor="end" font-size="12" fill="currentColor">400 nm</text></svg></p><p>Calculate the <strong>lowest</strong> frequency of light in this range, in Hz. Use <i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</p>
      stem: "<p>ある錯イオンの溶液は、白色光のもとで黄色 (yellow) に見えます。色相環を使って、この錯体が吸収する波長の範囲を求めましょう。</p><p><svg viewBox=\"0 0 300 224\" width=\"300\" height=\"224\" style=\"max-width:100%;height:auto\" role=\"img\" aria-label=\"データブックレットの色相環。同じ大きさの 6 つの扇形が、上から時計回りに並ぶ。橙色 585〜647 ナノメートル、黄色 575〜585、緑色 491〜575、青色 424〜491、紫色 400〜424、赤色 647〜700。橙色の反対側は青色、黄色の反対側は紫色、緑色の反対側は赤色。\"><circle cx=\"150\" cy=\"112\" r=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"112\" x2=\"224.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"76.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"113.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"150\" y1=\"112\" x2=\"187.0\" y2=\"176.1\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150.0\" y=\"70.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">橙</text><text x=\"189.7\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">黄</text><text x=\"189.7\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">緑</text><text x=\"150.0\" y=\"161.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">青</text><text x=\"110.3\" y=\"138.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">紫</text><text x=\"110.3\" y=\"93.1\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">赤</text><text x=\"110.0\" y=\"40.7\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">647 nm</text><text x=\"190.0\" y=\"40.7\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">585 nm</text><text x=\"232.0\" y=\"116.0\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">575 nm</text><text x=\"190.0\" y=\"193.3\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">491 nm</text><text x=\"110.0\" y=\"193.3\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">424 nm</text><text x=\"68.0\" y=\"108.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">700 nm</text><text x=\"68.0\" y=\"126.0\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">400 nm</text></svg></p><p>この範囲の光のうち、<strong>いちばん小さい</strong>振動数を Hz 単位で計算しなさい (calculate)。<i>c</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup> を使いましょう。</p>",
      hints: [
        // EN: The colour absorbed is opposite yellow on the wheel. Read its two boundary wavelengths.
        "吸収される色は、色相環で黄色の向かいにあります。その両端の波長を読み取りましょう。",
        // EN: <i>f</i> = <i>c</i> / <i>λ</i>. Does the lowest frequency go with the longest or the shortest wavelength?
        "<i>f</i> = <i>c</i> / <i>λ</i>。いちばん小さい振動数になるのは、いちばん長い波長ですか、いちばん短い波長ですか。",
        // EN: Convert nm to m before you divide.
        "わり算の前に、nm を m に直しましょう。",
      ],
      // EN: <p>Violet is opposite yellow, so the complex absorbs violet light: 400 nm to 424 nm.</p><p>Frequency and wavelength are inversely proportional (<i>f</i> = <i>c</i> / <i>λ</i>). The <strong>lowest</strong> frequency goes with the <strong>longest</strong> wavelength, 424 nm.</p><div class="worked__math"><i>λ</i> = 424 nm = 4.24 × 10<sup>−7</sup> m</div><div class="worked__math"><i>f</i> = (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (4.24 × 10<sup>−7</sup> m)</div><div class="worked__math">= <b>7.08 × 10<sup>14</sup> Hz</b> &nbsp; (3 s.f.)</div><p>(Using 400 nm gives 7.50 × 10<sup>14</sup> Hz. That is the highest frequency in the range.)</p>
      solution: "<p>黄色の向かいは紫色なので、錯体は紫色の光を吸収します。400 nm から 424 nm までです。</p><p>振動数と波長は反比例します（<i>f</i> = <i>c</i> / <i>λ</i>）。<strong>いちばん小さい</strong>振動数になるのは、<strong>いちばん長い</strong>波長の 424 nm です。</p><div class=\"worked__math\"><i>λ</i> = 424 nm = 4.24 × 10<sup>−7</sup> m</div><div class=\"worked__math\"><i>f</i> = (3.00 × 10<sup>8</sup> m s<sup>−1</sup>) ÷ (4.24 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">= <b>7.08 × 10<sup>14</sup> Hz</b> &nbsp; （有効数字 3 桁）</div><p>（400 nm を使うと 7.50 × 10<sup>14</sup> Hz になります。これは、この範囲でいちばん大きい振動数です。）</p>",
    },

    // ── s3-1-q062 · mcq · exam · SL · Structure 3.1.5 · 1 mark
    "s3-1-q062": {
      // EN: <p>Carbon dioxide dissolves in water and reacts with it. Which equation shows this reaction?</p>
      stem: "<p>二酸化炭素は水に溶け、水と反応します。この反応を表す式はどれですか。</p>",
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
        "炭素は非金属です。その酸化物は塩基性ですか、酸性ですか。",
        // EN: Non-metal oxide + water → acid. Add the atoms of <span class="chem">CO2</span> and <span class="chem">H2O</span> together.
        "非金属の酸化物 + 水 → 酸。<span class=\"chem\">CO2</span> と <span class=\"chem\">H2O</span> の原子をたし合わせましょう。",
      ],
      // EN: <p>Carbon dioxide is an acidic non-metal oxide. It reacts with water to form carbonic acid:</p><div class="worked__math"><span class="chem">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>Check: C 1 = 1; O 2 + 1 = 3; H 2 = 2. The reaction is reversible. The solution is weakly acidic. This reaction is the cause of ocean acidification.</p>
      solution: "<p>二酸化炭素は、非金属の酸化物で、酸性酸化物です。水と反応して炭酸 (carbonic acid) ができます。</p><div class=\"worked__math\"><span class=\"chem\">CO2(g) + H2O(l) <=> H2CO3(aq)</span></div><p>確認：C 1 = 1、O 2 + 1 = 3、H 2 = 2。この反応は可逆反応です。溶液は弱い酸性です。この反応が海洋酸性化の原因です。</p>",
      misconception: {
        // EN (option A): Hydroxides form when the oxide of a group 1 or group 2 metal reacts with water. Carbon is a non-metal, so its oxide is acidic and forms an acid.
        "0": "水酸化物ができるのは、1 族や 2 族の金属の酸化物が水と反応するときです。炭素は非金属なので、酸化物は酸性で、酸ができます。",
        // EN (option C): This equation is not balanced: there are 3 oxygen atoms on the left and 4 on the right. Add the atoms of the oxide and the water to get the formula of the acid.
        "2": "この式は原子の数が合っていません。酸素原子が左辺に 3 個、右辺に 4 個あります。酸化物と水の原子をたし合わせると、酸の化学式になります。",
        // EN (option D): Carbon dioxide does not take oxygen from water or give oxygen to it. A non-metal oxide and water combine to form one product, an acid.
        "3": "二酸化炭素は、水から酸素をうばうことも、水に酸素を与えることもありません。非金属の酸化物と水は結びついて、酸という 1 つの生成物になります。",
      },
    },

  }
});
