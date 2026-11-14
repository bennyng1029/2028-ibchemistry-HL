/* lab-periodicity.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-periodicity.q', {
  questions: {

    // ── lab-periodicity-q001 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q001": {
      // EN: <p>A few drops of a halogen solution are added to a solution of a potassium halide. In which mixture does a displacement reaction take place?</p>
      stem: "<p>ハロゲン化カリウムの水溶液に、ハロゲンの溶液を数滴加えます。置換反応が起こる混合物はどれですか。</p>",
      options: [
        // EN: Iodine solution and potassium bromide
        "ヨウ素溶液と臭化カリウム",
        // EN: Bromine water and potassium chloride
        "臭素水と塩化カリウム",
        // EN: Bromine water and potassium iodide
        "臭素水とヨウ化カリウム",
        // EN: Iodine solution and potassium chloride
        "ヨウ素溶液と塩化カリウム",
      ],
      hints: [
        // EN: A halogen displaces only halide ions of halogens below it in group 17.
        "ハロゲンが置換できるのは、17 族で自分より下にあるハロゲンのハロゲン化物イオンだけです。",
      ],
      // EN: <p>Bromine is above iodine in group 17, so it is more reactive. It takes electrons from iodide ions: <span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>.</p>
      solution: "<p>臭素は 17 族でヨウ素より上にあるので、反応性が高くなります。臭素はヨウ化物イオンから電子を奪います：<span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>。</p>",
      misconception: {
        // EN (option A): Iodine is below bromine in group 17, so it is less reactive and cannot take electrons from bromide ions.
        "0": "ヨウ素は 17 族で臭素より下にあるので、反応性が低く、臭化物イオンから電子を奪えません。",
        // EN (option B): Bromine is below chlorine, so it is less reactive and cannot displace chloride ions.
        "1": "臭素は塩素より下にあるので、反応性が低く、塩化物イオンを置換できません。",
        // EN (option D): Iodine is the least reactive of the three, so it displaces neither chloride nor bromide ions.
        "3": "ヨウ素は 3 つの中で最も反応性が低いので、塩化物イオンも臭化物イオンも置換しません。",
      },
    },

    // ── lab-periodicity-q002 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q002": {
      // EN: <p>Chlorine water is added to a colourless solution of an unknown potassium halide. Cyclohexane is then added and the tube is shaken. The top (cyclohexane) layer is violet.</p><p>Which ion was in the unknown solution? (In cyclohexane: chlorine is colourless, bromine is orange and iodine is violet.)</p>
      stem: "<p>未知のハロゲン化カリウムの無色の水溶液に塩素水を加えます。次にシクロヘキサンを加えて、試験管を振ります。上の（シクロヘキサンの）層は紫色です。</p><p>未知の溶液に含まれていたイオンはどれですか。（シクロヘキサン中で、塩素は無色、臭素は橙色、ヨウ素は紫色です。）</p>",
      options: [
        // EN: Chloride
        "塩化物イオン",
        // EN: Bromide
        "臭化物イオン",
        // EN: Iodide
        "ヨウ化物イオン",
        // EN: Potassium
        "カリウムイオン",
      ],
      hints: [
        // EN: Which halogen is violet in cyclohexane? Where did it come from?
        "シクロヘキサン中で紫色になるハロゲンはどれでしょうか。それはどこから来たのでしょうか。",
      ],
      // EN: <p>The violet layer shows iodine. Chlorine did not bring any iodine with it, so the iodine must have formed from iodide ions: <span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span>.</p>
      solution: "<p>紫色の層からヨウ素があることがわかります。塩素はヨウ素を持ちこんでいないので、ヨウ素はヨウ化物イオンからできたはずです：<span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span>。</p>",
      misconception: {
        // EN (option A): Chlorine cannot react with chloride ions, so the top layer would stay colourless.
        "0": "塩素は塩化物イオンとは反応できないので、上の層は無色のままのはずです。",
        // EN (option B): Bromide ions would give bromine, which is orange in cyclohexane.
        "1": "臭化物イオンなら臭素ができ、シクロヘキサン中で橙色になります。",
        // EN (option D): Potassium ions are spectator ions: they are in every one of these salts and do not react.
        "3": "カリウムイオンは傍観イオンです。これらの塩のどれにも含まれ、反応しません。",
      },
    },

    // ── lab-periodicity-q003 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q003": {
      // EN: <p>When chlorine water is added to potassium iodide solution, the solution turns brown. Write the ionic equation, with state symbols, for the reaction.</p>
      stem: "<p>ヨウ化カリウム水溶液に塩素水を加えると、溶液は褐色になります。この反応のイオン反応式を、状態記号を付けて書きなさい (write)。</p>",
      hints: [
        // EN: Chlorine takes electrons from iodide ions. What forms?
        "塩素はヨウ化物イオンから電子を奪います。何ができるでしょうか。",
        // EN: Leave out the ions that do not change.
        "変化しないイオンは除きましょう。",
      ],
      // EN: <div class="worked__math"><span class="chem">Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)</span></div><div class="worked__math">remove K<sup>+</sup>: <b><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></b></div>
      solution: "<div class=\"worked__math\"><span class=\"chem\">Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)</span></div><div class=\"worked__math\">K<sup>+</sup> を除く：<b><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></b></div>",
      // EN: <p><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></p><p>The potassium ions are spectator ions and are left out.</p>
      answer: "<p><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></p><p>カリウムイオンは傍観イオンなので除く。</p>",
      markscheme: [
        // EN: Correct species: Cl₂ and I⁻ on the left, Cl⁻ and I₂ on the right, with no K⁺.
        "正しい化学種：左辺に Cl₂ と I⁻、右辺に Cl⁻ と I₂ があり、K⁺ がない。",
        // EN: Balanced (2I⁻ and 2Cl⁻) with correct state symbols (all aq).
        "係数がそろっていて（2I⁻ と 2Cl⁻）、状態記号が正しい（すべて aq）。",
      ],
    },

    // ── lab-periodicity-q004 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q004": {
      // EN: <p>Bromine water is added to potassium chloride solution. The colour of the mixture is the same as that of the control tube (bromine water and water). Explain this observation.</p>
      stem: "<p>塩化カリウム水溶液に臭素水を加えます。混合物の色は、対照の試験管（臭素水と水）と同じです。この観察を説明しなさい (explain)。</p>",
      hints: [
        // EN: What does "same as the control" tell you about whether anything happened?
        "「対照と同じ」ということから、何かが起こったかどうかについて何がわかるでしょうか。",
        // EN: Compare how strongly bromine and chlorine atoms attract an extra electron.
        "臭素原子と塩素原子が、加わる電子をどれくらい強く引きつけるかをくらべましょう。",
      ],
      // EN: <p>See the model answer: the observation (no change) and the reason (bromine is less reactive, because its atoms attract electrons less strongly).</p>
      solution: "<p>模範解答を見ましょう。観察（変化なし）と、その理由（臭素は反応性が低い。その原子が電子を引きつける力が弱いから）の両方が必要です。</p>",
      // EN: <p>No reaction takes place, so no new halogen forms and the colour is just that of bromine. Bromine is less reactive than chlorine: a bromine atom is larger, so its outer energy level is further from the nucleus and more shielded, and it attracts an extra electron less strongly than a chlorine atom. So bromine cannot take electrons from chloride ions.</p>
      answer: "<p>反応が起こらないので、新しいハロゲンはできず、色は臭素の色だけである。臭素は塩素より反応性が低い。臭素原子は大きいので、最外殻が原子核から遠く、遮蔽も大きいため、加わる電子を引きつける力が塩素原子より弱い。そのため、臭素は塩化物イオンから電子を奪えない。</p>",
      markscheme: [
        // EN: No reaction / bromine does not displace chloride ions, because bromine is less reactive than chlorine.
        "反応しない / 臭素は塩化物イオンを置換しない。臭素は塩素より反応性が低いから。",
        // EN: Bromine atoms are larger / the outer level is further from the nucleus and more shielded, so they attract an electron less strongly than chlorine atoms.
        "臭素原子のほうが大きい / 最外殻が原子核から遠く、遮蔽が大きいので、電子を引きつける力が塩素原子より弱い。",
      ],
    },

    // ── lab-periodicity-q005 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q005": {
      // EN: <p>In the halogen experiment, a student also adds each halogen solution to a tube containing distilled water instead of a halide solution. What is the purpose of this tube?</p>
      stem: "<p>ハロゲンの実験で、ある生徒は、ハロゲン化物の溶液の代わりに蒸留水を入れた試験管にも、それぞれのハロゲンの溶液を加えます。この試験管の目的は何ですか。</p>",
      options: [
        // EN: To dilute the halogen so that the reaction is slower
        "反応が遅くなるように、ハロゲンをうすめるため",
        // EN: To show the colour of the halogen solution when no reaction happens, for comparison
        "くらべるために、反応が起こらないときのハロゲンの溶液の色を示すため",
        // EN: To check that the halide solutions are all the same concentration
        "ハロゲン化物の溶液がすべて同じ濃度であることを確かめるため",
        // EN: To make the cyclohexane layer separate more quickly
        "シクロヘキサンの層を速く分離させるため",
      ],
      hints: [
        // EN: How do you know whether a colour is new, or was there already?
        "ある色が新しくできたものか、もとからあったものかは、どうすればわかるでしょうか。",
      ],
      // EN: <p>The water tube is a control. It shows the colour of the halogen solution when nothing reacts. A tube that ends up a different colour from the control shows that a new halogen has formed.</p>
      solution: "<p>水の試験管は対照です。何も反応しないときの、ハロゲンの溶液の色がわかります。最後に対照と違う色になった試験管があれば、新しいハロゲンができたことがわかります。</p>",
      misconception: {
        // EN (option A): The water tube is a separate tube; it is not added to the other mixtures.
        "0": "水の試験管は別の試験管です。ほかの混合物に加えるものではありません。",
        // EN (option C): Water contains no halide ions, so it cannot tell you anything about their concentrations.
        "2": "水にはハロゲン化物イオンが含まれないので、その濃度については何もわかりません。",
        // EN (option D): The layers separate because cyclohexane and water do not mix, whatever is dissolved in them.
        "3": "層が分かれるのは、何が溶けていても、シクロヘキサンと水が混ざらないからです。",
      },
    },

    // ── lab-periodicity-q006 · numeric · exam · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q006": {
      // EN: <p>A teacher drops pieces of potassium of the same size onto water and times how long each piece takes to disappear.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Times for potassium</caption><thead><tr><th scope="col">Run</th><th scope="col" class="num">Time / s</th></tr></thead><tbody><tr><th scope="row">1</th><td class="num">4.6</td></tr><tr><th scope="row">2</th><td class="num">3.9</td></tr><tr><th scope="row">3</th><td class="num">4.3</td></tr><tr><th scope="row">4</th><td class="num">4.0</td></tr></tbody></table></div><p>Calculate the mean time, in s.</p>
      stem: "<p>先生が、同じ大きさのカリウムのかけらを水の上に落とし、それぞれがなくなるまでの時間をはかります。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>カリウムの時間</caption><thead><tr><th scope=\"col\">実行</th><th scope=\"col\" class=\"num\">時間 / s</th></tr></thead><tbody><tr><th scope=\"row\">1</th><td class=\"num\">4.6</td></tr><tr><th scope=\"row\">2</th><td class=\"num\">3.9</td></tr><tr><th scope=\"row\">3</th><td class=\"num\">4.3</td></tr><tr><th scope=\"row\">4</th><td class=\"num\">4.0</td></tr></tbody></table></div><p>平均の時間を s で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Add the four times and divide by 4.
        "4 つの時間を足して、4 で割りましょう。",
        // EN: Give the mean to the same number of decimal places as the data.
        "平均は、データと同じ小数の位までにしましょう。",
      ],
      // EN: <div class="worked__math">(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b></div>
      solution: "<div class=\"worked__math\">(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b></div>",
    },

    // ── lab-periodicity-q007 · short · exam · SL · Structure 3.1.4 · 3 marks
    "lab-periodicity-q007": {
      // EN: <p>A small piece of sodium is dropped onto water containing universal indicator. State three observations, and write the equation for the reaction.</p>
      stem: "<p>万能指示薬を加えた水の上に、小さなナトリウムのかけらを落とします。観察を 3 つ述べ (state)、反応の化学反応式を書きなさい (write)。</p>",
      hints: [
        // EN: Think about what you see happen to the metal, and to the indicator.
        "金属に起こることと、指示薬に起こることを考えましょう。",
        // EN: The products are a hydroxide and a gas.
        "生成物は水酸化物と気体です。",
      ],
      // EN: <p>See the model answer. "Hydrogen is given off" is a conclusion, not an observation; say "fizzes" or "bubbles".</p>
      solution: "<p>模範解答を見ましょう。「水素が発生する」は結論で、観察ではありません。「泡が出る」と書きましょう。</p>",
      // EN: <p>The sodium floats; it melts into a ball; it fizzes (bubbles of gas) and moves about on the surface; it gets smaller and disappears; the indicator turns from green to purple (blue). <span class="chem">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></p>
      answer: "<p>ナトリウムは浮く。融けて球になる。泡（気体の泡）を出して水面を動き回る。小さくなって消える。指示薬が緑色から紫色（青色）に変わる。<span class=\"chem\">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></p>",
      markscheme: [
        // EN: Any two observations: floats / melts into a ball / fizzes or effervescence / moves on the surface / gets smaller or disappears.
        "観察のうち 2 つ：浮く / 融けて球になる / 泡が出る（発泡する）/ 水面を動く / 小さくなる、または消える。",
        // EN: The indicator turns purple (or blue): an alkaline solution forms.
        "指示薬が紫色（または青色）に変わる：アルカリ性の溶液ができる。",
        // EN: Equation: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) (state symbols not needed for the mark).
        "化学反応式：2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)（この点には状態記号は不要）。",
      ],
    },

    // ── lab-periodicity-q008 · mcq · challenge · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q008": {
      // EN: <p>A class records the mean time for a 3 mm cube of each metal to disappear on water.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Mean times</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Mean time / s</th></tr></thead><tbody><tr><th scope="row">lithium</th><td class="num">57 ± 4</td></tr><tr><th scope="row">sodium</th><td class="num">14 ± 1</td></tr><tr><th scope="row">potassium</th><td class="num">4.2 ± 0.4</td></tr></tbody></table></div><p>Which conclusion is best supported by these data?</p>
      stem: "<p>あるクラスが、それぞれの金属の 3 mm 角の立方体が水の上でなくなるまでの平均の時間を記録します。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>平均の時間</caption><thead><tr><th scope=\"col\">金属</th><th scope=\"col\" class=\"num\">平均の時間 / s</th></tr></thead><tbody><tr><th scope=\"row\">リチウム</th><td class=\"num\">57 ± 4</td></tr><tr><th scope=\"row\">ナトリウム</th><td class=\"num\">14 ± 1</td></tr><tr><th scope=\"row\">カリウム</th><td class=\"num\">4.2 ± 0.4</td></tr></tbody></table></div><p>これらのデータが最もよく裏づける結論はどれですか。</p>",
      options: [
        // EN: Reactivity increases down group 1, because the outer electron is lost more easily
        "1 族を下へいくほど反応性が高くなる。最外殻電子が失われやすくなるから",
        // EN: Reactivity increases down group 1, because the atoms have more protons to attract water
        "1 族を下へいくほど反応性が高くなる。原子の陽子が多くなり、水を引きつけるから",
        // EN: The data cannot show a trend, because each time has an uncertainty
        "どの時間にも不確かさがあるので、データからは傾向を示せない",
        // EN: Potassium reacts about 14 times faster than lithium, so its first ionization energy is 14 times smaller
        "カリウムはリチウムの約 14 倍速く反応するので、第一イオン化エネルギーは 14 分の 1 である",
      ],
      hints: [
        // EN: Do the ranges of the results overlap?
        "結果の範囲は重なっているでしょうか。",
        // EN: Which explanation is about losing the outer electron?
        "最外殻電子を失うことについての説明はどれでしょうか。",
      ],
      // EN: <p>The times fall steeply from lithium to potassium, far more than the uncertainties, so the metals become more reactive down the group. The outer electron is further from the nucleus and more shielded, so it is lost more easily.</p>
      solution: "<p>時間はリチウムからカリウムへ大きく減っていて、その差は不確かさよりずっと大きいので、金属は族を下へいくほど反応性が高くなります。最外殻電子は原子核から遠く、遮蔽も大きいので、失われやすくなります。</p>",
      misconception: {
        // EN (option B): The trend is right, but the reason is wrong. The extra nuclear charge is outweighed by the greater distance and shielding of the outer electron.
        "1": "傾向は正しいですが、理由が間違っています。増えた核電荷よりも、最外殻電子の距離が大きくなることと遮蔽の効果のほうが上回ります。",
        // EN (option C): The differences between the metals are far bigger than the uncertainties, and the ranges do not overlap, so the trend is real.
        "2": "金属の間の違いは不確かさよりずっと大きく、範囲も重ならないので、傾向は本物です。",
        // EN (option D): Reaction time is not proportional to ionization energy. The first ionization energy of potassium (419 kJ mol⁻¹) is only a little lower than that of lithium (520 kJ mol⁻¹).
        "3": "反応時間はイオン化エネルギーに比例しません。カリウムの第一イオン化エネルギー（419 kJ mol⁻¹）は、リチウム（520 kJ mol⁻¹）より少し小さいだけです。",
      },
    },

    // ── lab-periodicity-q009 · mcq · foundation · SL · Structure 3.1.5 · 1 mark
    "lab-periodicity-q009": {
      // EN: <p>A student adds four oxides, W, X, Y and Z, to water and measures the pH of each mixture with a pH meter. Distilled water on its own gives pH 5.8.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>pH of each oxide with water</caption><thead><tr><th scope="col">Oxide</th><th scope="col" class="num">pH</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">12.3</td></tr><tr><th scope="row">X</th><td class="num">5.8</td></tr><tr><th scope="row">Y</th><td class="num">2.4</td></tr><tr><th scope="row">Z</th><td class="num">10.1</td></tr></tbody></table></div><p>Which oxide could be sulfur dioxide?</p>
      stem: "<p>ある生徒が、4 つの酸化物 W、X、Y、Z を水に加え、それぞれの混合物の pH を pH メーターで測定します。蒸留水だけでは pH 5.8 です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>それぞれの酸化物と水の pH</caption><thead><tr><th scope=\"col\">酸化物</th><th scope=\"col\" class=\"num\">pH</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">12.3</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">5.8</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">2.4</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">10.1</td></tr></tbody></table></div><p>二酸化硫黄である可能性があるのはどの酸化物ですか。</p>",
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
        // EN: Sulfur is a non-metal. What kind of solution does its oxide form?
        "硫黄は非金属です。その酸化物は、どんな溶液をつくるでしょうか。",
      ],
      // EN: <p>Sulfur dioxide is an acidic oxide: <span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span>. The only reading well below the control is <b>Y</b>, pH 2.4.</p>
      solution: "<p>二酸化硫黄は酸性酸化物です：<span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span>。対照よりかなり低い読みは、<b>Y</b> の pH 2.4 だけです。</p>",
      misconception: {
        // EN (option A): pH 12.3 is strongly alkaline: this is a basic metal oxide such as calcium oxide.
        "0": "pH 12.3 は強いアルカリ性です。酸化カルシウムのような塩基性の金属酸化物です。",
        // EN (option B): pH 5.8 is the same as the control, so this oxide has not dissolved. Sulfur dioxide dissolves and forms an acid.
        "1": "pH 5.8 は対照と同じなので、この酸化物は溶けていません。二酸化硫黄は溶けて酸をつくります。",
        // EN (option D): pH 10.1 is alkaline: a basic metal oxide such as magnesium oxide.
        "3": "pH 10.1 はアルカリ性です。酸化マグネシウムのような塩基性の金属酸化物です。",
      },
    },

    // ── lab-periodicity-q010 · short · exam · SL · Structure 3.1.5 · 2 marks
    "lab-periodicity-q010": {
      // EN: <p>Lithium burns in air to form lithium oxide, a white solid. When the solid is added to water containing universal indicator, the indicator turns purple. Deduce the equation, with state symbols, for the reaction of lithium oxide with water.</p>
      stem: "<p>リチウムは空気中で燃えて、白い固体の酸化リチウムになります。この固体を万能指示薬を加えた水に入れると、指示薬は紫色になります。酸化リチウムと水の反応の化学反応式を、状態記号を付けて導きなさい (deduce)。</p>",
      hints: [
        // EN: Lithium forms Li⁺ ions. What are the formulas of its oxide and hydroxide?
        "リチウムは Li⁺ イオンになります。その酸化物と水酸化物の化学式は何でしょうか。",
        // EN: A basic oxide + water → a metal hydroxide.
        "塩基性酸化物 + 水 → 金属の水酸化物。",
      ],
      // EN: <div class="worked__math">Li<sub>2</sub>O + H<sub>2</sub>O → LiOH (not balanced)</div><div class="worked__math"><b><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></b></div>
      solution: "<div class=\"worked__math\">Li<sub>2</sub>O + H<sub>2</sub>O → LiOH（係数がそろっていない）</div><div class=\"worked__math\"><b><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></b></div>",
      // EN: <p><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></p><p>Lithium is in group 1, so its ion is Li⁺: the oxide is Li₂O and the hydroxide is LiOH.</p>
      answer: "<p><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></p><p>リチウムは 1 族なので、イオンは Li⁺ である。酸化物は Li₂O、水酸化物は LiOH。</p>",
      markscheme: [
        // EN: Correct formulas: Li₂O and LiOH.
        "正しい化学式：Li₂O と LiOH。",
        // EN: Balanced (2LiOH) with correct state symbols.
        "係数がそろっていて（2LiOH）、状態記号が正しい。",
      ],
    },

    // ── lab-periodicity-q011 · short · exam · SL · Structure 3.1.5 · 2 marks
    "lab-periodicity-q011": {
      // EN: <p>Sulfur is burned in a gas jar of air in a fume cupboard. Water is added and the jar is shaken. The pH of the water falls from 5.8 to 2.4. Write the equation, with state symbols, for the reaction that lowers the pH, and state one environmental problem caused by this reaction in the atmosphere.</p>
      stem: "<p>ドラフトの中で、空気の入った集気びんで硫黄を燃やします。水を加えて、集気びんを振ります。水の pH は 5.8 から 2.4 に下がります。pH を下げる反応の化学反応式を状態記号を付けて書き (write)、この反応が大気中で引き起こす環境問題を 1 つ述べなさい (state)。</p>",
      hints: [
        // EN: Burning sulfur forms sulfur dioxide. Add its atoms to those of water to get the acid.
        "硫黄が燃えると二酸化硫黄ができます。その原子を水の原子と合わせると、酸になります。",
      ],
      // EN: <p>Sulfur dioxide is an acidic oxide. It reacts with water to form sulfurous acid, H₂SO₃. Gaseous non-metal oxides dissolving in rain water cause acid rain.</p>
      solution: "<p>二酸化硫黄は酸性酸化物です。水と反応して亜硫酸 H₂SO₃ になります。気体の非金属酸化物が雨水に溶けると、酸性雨になります。</p>",
      // EN: <p><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></p><p>In the atmosphere this forms acid rain, which damages buildings, trees and life in lakes.</p>
      answer: "<p><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></p><p>大気中では、これが酸性雨になり、建物、樹木、湖の生物に被害を与える。</p>",
      markscheme: [
        // EN: SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq) (accept → for ⇌).
        "SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)（⇌ の代わりに → も認める）。",
        // EN: Acid rain (accept a named effect of acid rain).
        "酸性雨（酸性雨の具体的な影響を挙げてもよい）。",
      ],
    },

    // ── lab-periodicity-q012 · mcq · challenge · SL · Structure 3.1.5 · 1 mark
    "lab-periodicity-q012": {
      // EN: <p>A student stirs 0.50 g of aluminium oxide with 50 cm<sup>3</sup> of distilled water. The pH is 5.8, the same as the distilled water on its own. Which statement is correct?</p>
      stem: "<p>ある生徒が、酸化アルミニウム 0.50 g を蒸留水 50 cm<sup>3</sup> とかき混ぜます。pH は 5.8 で、蒸留水だけのときと同じです。正しい文はどれですか。</p>",
      options: [
        // EN: Aluminium oxide is a neutral oxide, because the pH did not change
        "pH が変わらなかったので、酸化アルミニウムは中性の酸化物である",
        // EN: Aluminium oxide is an acidic oxide, because the pH is below 7
        "pH が 7 より小さいので、酸化アルミニウムは酸性酸化物である",
        // EN: The test cannot show the character of aluminium oxide, because it does not dissolve in water
        "酸化アルミニウムは水に溶けないので、この実験ではその性質を示せない",
        // EN: The pH meter must be faulty, because a metal oxide always gives pH above 7
        "金属の酸化物ならいつも pH が 7 より大きくなるので、pH メーターが故障している",
      ],
      hints: [
        // EN: Compare the reading with the control, not with 7.
        "読みを、7 ではなく対照とくらべましょう。",
      ],
      // EN: <p>The reading equals the control, so the oxide did not dissolve or react with water. To show that aluminium oxide is amphoteric, you would need to test it with an acid and with an alkali.</p>
      solution: "<p>読みは対照と同じなので、この酸化物は水に溶けず、反応もしませんでした。酸化アルミニウムが両性であることを示すには、酸とアルカリの両方で調べる必要があります。</p>",
      misconception: {
        // EN (option A): No change in pH means nothing dissolved, not that the oxide is neutral. Aluminium oxide reacts with both acids and bases: it is amphoteric.
        "0": "pH が変わらないことは、何も溶けなかったという意味で、酸化物が中性だという意味ではありません。酸化アルミニウムは酸とも塩基とも反応する、両性酸化物です。",
        // EN (option B): pH 5.8 is just the control value: dissolved carbon dioxide from the air makes distilled water slightly acidic.
        "1": "pH 5.8 は対照の値にすぎません。空気中の二酸化炭素が溶けているので、蒸留水はわずかに酸性になります。",
        // EN (option D): Insoluble metal oxides do not change the pH. The meter gave the same reading as the control, which is what you expect.
        "3": "水に溶けない金属の酸化物は、pH を変えません。メーターが対照と同じ読みを示したのは、予想どおりです。",
      },
    },

    // ── lab-periodicity-q013 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q013": {
      // EN: <p>A student repeats the chlorine water and potassium bromide test with chlorine water from a bottle that had been left open for two weeks. This time the colour change is very faint. Suggest a reason, and an improvement.</p>
      stem: "<p>ある生徒が、2 週間ふたを開けたままにしておいたびんの塩素水を使って、塩素水と臭化カリウムの実験をくり返します。今回は、色の変化がとてもかすかです。その理由と改善策を提案しなさい (suggest)。</p>",
      hints: [
        // EN: Chlorine is a gas at room temperature. What happens to it in an open bottle?
        "塩素は室温で気体です。ふたの開いたびんの中で、塩素はどうなるでしょうか。",
      ],
      // EN: <p>See the model answer. This is a systematic error: repeating with the same bottle gives the same faint result.</p>
      solution: "<p>模範解答を見ましょう。これは系統誤差です。同じびんでくり返しても、同じかすかな結果になります。</p>",
      // EN: <p>Chlorine escapes from the solution over time (it is a gas), so the old chlorine water contains very little chlorine. Only a little bromine forms, so the colour is faint. Use freshly made chlorine water, kept in a stoppered bottle.</p>
      answer: "<p>時間がたつと塩素は（気体なので）溶液から逃げるので、古い塩素水には塩素がほとんど含まれていない。臭素が少ししかできないので、色がかすかになる。つくりたての塩素水を使い、栓をしたびんに保存する。</p>",
      markscheme: [
        // EN: Chlorine has escaped / the concentration of chlorine is lower, so little bromine forms.
        "塩素が逃げた / 塩素の濃度が低くなったので、臭素が少ししかできない。",
        // EN: Use freshly made chlorine water (accept: keep it stoppered; add more drops and compare with a control).
        "つくりたての塩素水を使う（認める：栓をしておく、滴数を増やして対照とくらべる）。",
      ],
    },

  }
});
