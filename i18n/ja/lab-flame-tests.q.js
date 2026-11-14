/* lab-flame-tests.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-flame-tests.q', {
  questions: {

    // ── lab-flame-tests-q001 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q001": {
      // EN: <p>A student looks at four light sources through a hand spectroscope. Which source gives a <strong>continuous</strong> spectrum?</p>
      stem: "<p>ある生徒が、携帯用分光器で 4 つの光源を見ます。<strong>連続</strong>スペクトルになるのはどの光源ですか。</p>",
      options: [
        // EN: A hydrogen discharge tube
        "水素の放電管",
        // EN: A flame containing sodium chloride
        "塩化ナトリウムを入れた炎",
        // EN: The hot filament of a lamp
        "電球の熱いフィラメント",
        // EN: A mercury discharge tube
        "水銀の放電管",
      ],
      hints: [
        // EN: Which source is a hot solid, rather than excited atoms of a gas?
        "励起された気体の原子ではなく、熱い固体なのはどの光源でしょうか。",
      ],
      // EN: <p>A hot solid emits light of every wavelength, so the spectrum is an unbroken band from violet to red. The other three sources contain excited gaseous atoms, which emit only certain wavelengths: a line spectrum.</p>
      solution: "<p>熱い固体はすべての波長の光を出すので、スペクトルは紫色から赤色まで途切れない帯になります。ほかの 3 つの光源には、励起された気体の原子があり、決まった波長の光だけを出します。これが線スペクトルです。</p>",
      misconception: {
        // EN (option A): Excited hydrogen atoms emit only certain wavelengths, so you see separate lines.
        "0": "励起された水素原子は決まった波長の光だけを出すので、別々の線が見えます。",
        // EN (option B): The sodium atoms in the flame emit one strong yellow-orange line, not a full band of colours.
        "1": "炎の中のナトリウム原子は、強い黄橙色の線を 1 本出します。色が全部そろった帯にはなりません。",
        // EN (option D): Mercury atoms emit a few separate lines (violet, blue, green, yellow), so this is a line spectrum.
        "3": "水銀原子は、いくつかの別々の線（紫色、青色、緑色、黄色）を出すので、これは線スペクトルです。",
      },
    },

    // ── lab-flame-tests-q002 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q002": {
      // EN: <p>Before each flame test, a student dips the wire loop in dilute hydrochloric acid and holds it in the flame until the flame shows no colour. What is the main reason for this?</p>
      stem: "<p>ある生徒は、炎色反応を行う前に毎回、ニクロム線のループを希塩酸にひたし、炎に色がつかなくなるまで炎に入れます。そのおもな理由はどれですか。</p>",
      options: [
        // EN: To make the salt stick to the wire
        "塩をニクロム線につきやすくするため",
        // EN: To remove traces of earlier samples, so that only the new salt colours the flame
        "前の試料の残りを取り除き、新しい塩だけが炎に色をつけるようにするため",
        // EN: To turn the metal ions into metal atoms before the test
        "調べる前に、金属イオンを金属原子に変えるため",
        // EN: To make the flame hotter
        "炎の温度を高くするため",
      ],
      hints: [
        // EN: Think about what the blank test (no colour) tells you.
        "空試験（色がつかない）から何がわかるかを考えましょう。",
      ],
      // EN: <p>Traces of an earlier salt, or of sodium from fingers, would add their own colour. Heating the cleaned wire until the flame shows no colour is a blank test: it shows that any colour later comes from the new salt.</p>
      solution: "<p>前の塩や、指についたナトリウムが少しでも残っていると、その色が加わってしまいます。洗ったニクロム線を炎に色がつかなくなるまで加熱するのは空試験で、そのあとでつく色が新しい塩によるものだとわかります。</p>",
      misconception: {
        // EN (option A): The acid does help solid stick to the wire, but heating until there is no colour is a check that the wire is clean.
        "0": "塩酸は固体をニクロム線につきやすくしますが、色がつかなくなるまで加熱するのは、ニクロム線がきれいかを確かめるためです。",
        // EN (option C): The cleaning step happens before any sample is added. It is about what is already on the wire.
        "2": "洗うステップは、試料をつける前に行います。もともとニクロム線についているもののための操作です。",
        // EN (option D): The acid does not change the temperature of the flame.
        "3": "塩酸は炎の温度を変えません。",
      },
    },

    // ── lab-flame-tests-q003 · short · exam · SL · Structure 1.3.1 · 2 marks
    "lab-flame-tests-q003": {
      // EN: <p>When a little copper(II) chloride is held in a Bunsen flame, the flame turns blue-green. Explain how the coloured light is produced.</p>
      stem: "<p>塩化銅(II) を少しガスバーナーの炎に入れると、炎が青緑色になります。色のついた光がどのように生じるかを説明しなさい (explain)。</p>",
      hints: [
        // EN: What does the heat do to the electrons?
        "熱は電子に何をするでしょうか。",
        // EN: What is given out when they return, and what fixes its energy?
        "電子がもどるときに何が放出されるでしょうか。そのエネルギーは何で決まるでしょうか。",
      ],
      // EN: <p>See the model answer. Two ideas earn the marks: excitation by heat, then emission of photons as electrons return to lower levels.</p>
      solution: "<p>模範解答を見てください。点になる考えは 2 つです。熱による励起と、電子が低い準位にもどるときの光子の放出です。</p>",
      // EN: <p>Heat from the flame excites electrons in the copper atoms (or ions) to higher energy levels. The electrons then fall back to lower energy levels and emit photons. The energy of each photon equals the energy difference between the two levels. Only certain differences are possible, so only certain wavelengths are emitted, and these give the colour we see.</p>
      answer: "<p>炎の熱によって、銅の原子（またはイオン）の電子が、より高いエネルギー準位に励起されます。その電子が低いエネルギー準位にもどるときに、光子を放出します。光子 1 個のエネルギーは、2 つの準位のエネルギーの差に等しくなります。とりうる差は決まったものだけなので、決まった波長の光だけが放出され、それが見える色になります。</p>",
      markscheme: [
        // EN: Electrons are excited / promoted to higher energy levels by the heat of the flame.
        "炎の熱によって、電子がより高いエネルギー準位に励起される / 移る。",
        // EN: Electrons fall / return to lower energy levels and emit photons (light) whose energy equals the difference between the levels (accept: of specific wavelengths/frequencies).
        "電子が低いエネルギー準位に落ちる / もどり、準位のエネルギーの差に等しいエネルギーをもつ光子（光）を放出する（特定の波長 / 振動数の光、も可）。",
      ],
    },

    // ── lab-flame-tests-q004 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q004": {
      // EN: <p>Two unknown salts both give a red flame. One contains lithium ions and the other strontium ions. Which method is most likely to tell them apart?</p>
      stem: "<p>2 つの未知の塩は、どちらも赤い炎になります。一方はリチウムイオンを、もう一方はストロンチウムイオンを含んでいます。2 つを見分けられる可能性が最も高い方法はどれですか。</p>",
      options: [
        // EN: Repeat each flame test three times and take the average colour
        "それぞれの炎色反応を 3 回くり返し、色の平均をとる",
        // EN: Use a larger amount of each salt
        "それぞれの塩をもっと多く使う",
        // EN: Look at each flame through a spectroscope and compare the lines with reference spectra
        "それぞれの炎を分光器で見て、線を基準のスペクトルとくらべる",
        // EN: Use a luminous (yellow) Bunsen flame instead of a blue one
        "青い炎ではなく、光る（黄色い）ガスバーナーの炎を使う",
      ],
      hints: [
        // EN: Each element has its own pattern of lines, even when the colours look alike.
        "色が似て見えても、元素ごとに線の並び方は違います。",
      ],
      // EN: <p>A spectroscope splits the light into separate lines. Lithium and strontium have different energy levels, so their lines are at different wavelengths. Matching the lines with reference spectra identifies each element.</p>
      solution: "<p>分光器は光を別々の線に分けます。リチウムとストロンチウムはエネルギー準位が違うので、線の波長も違います。線を基準のスペクトルと照らし合わせれば、それぞれの元素を特定できます。</p>",
      misconception: {
        // EN (option A): Repeating reduces random error, but both colours are red each time. You cannot average a colour.
        "0": "くり返すと偶然誤差は小さくなりますが、どちらの色も毎回赤色です。色の平均はとれません。",
        // EN (option B): More salt gives a brighter flame, not a different colour.
        "1": "塩を多くすると炎は明るくなりますが、色は変わりません。",
        // EN (option D): A yellow flame makes the colours harder to see, not easier.
        "3": "黄色い炎では、色が見やすくなるどころか、見にくくなります。",
      },
    },

    // ── lab-flame-tests-q005 · numeric · exam · SL · Structure 1.3.2 · 2 marks
    "lab-flame-tests-q005": {
      // EN: <p>A student checks a spectroscope with a hydrogen tube.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Hydrogen lines through the spectroscope</caption><thead><tr><th scope="col">Data value / nm</th><th scope="col">Reading / nm (±2)</th></tr></thead><tbody><tr><th scope="row">410</th><td>414</td></tr><tr><th scope="row">486</th><td>490</td></tr><tr><th scope="row">656</th><td>660</td></tr></tbody></table></div><p>With the same spectroscope, a mercury tube gives a green line at a reading of 550 nm. Calculate the corrected wavelength, in nm, of the green line.</p>
      stem: "<p>ある生徒が、水素の管で分光器を確かめます。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>分光器で見た水素の線</caption><thead><tr><th scope=\"col\">データの値 / nm</th><th scope=\"col\">読み / nm（±2）</th></tr></thead><tbody><tr><th scope=\"row\">410</th><td>414</td></tr><tr><th scope=\"row\">486</th><td>490</td></tr><tr><th scope=\"row\">656</th><td>660</td></tr></tbody></table></div><p>同じ分光器で、水銀の管は読み 550 nm のところに緑色の線を示します。この緑色の線の補正した波長を nm で計算しなさい (calculate)。</p>",
      hints: [
        // EN: By how much does the scale read too high or too low for every hydrogen line?
        "水素のどの線でも、目盛りはどれだけ高すぎる、または低すぎるでしょうか。",
        // EN: Apply the same correction to the mercury reading.
        "水銀の読みに、同じ補正をしましょう。",
      ],
      // EN: <div class="worked__math">414 − 410 = 4; 490 − 486 = 4; 660 − 656 = 4</div><div class="worked__math">every reading is 4 nm too high (systematic error)</div><div class="worked__math">corrected = 550 − 4 = <b>546 nm</b></div>
      solution: "<div class=\"worked__math\">414 − 410 = 4、490 − 486 = 4、660 − 656 = 4</div><div class=\"worked__math\">どの読みも 4 nm 高すぎる（系統誤差）</div><div class=\"worked__math\">補正した値 = 550 − 4 = <b>546 nm</b></div>",
    },

    // ── lab-flame-tests-q006 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q006": {
      // EN: <p>A helium tube shows lines at 447 nm (blue), 502 nm (green), 588 nm (yellow-orange) and 668 nm (red). Which line is produced by photons of the <strong>highest energy</strong>?</p>
      stem: "<p>ヘリウムの管は、447 nm（青色）、502 nm（緑色）、588 nm（黄橙色）、668 nm（赤色）に線を示します。<strong>最もエネルギーの大きい</strong>光子によって生じる線はどれですか。</p>",
      options: [
        // EN: 447 nm
        "447 nm",
        // EN: 502 nm
        "502 nm",
        // EN: 588 nm
        "588 nm",
        // EN: 668 nm
        "668 nm",
      ],
      hints: [
        // EN: Shorter wavelength means higher frequency.
        "波長が短いほど、振動数が大きくなります。",
      ],
      // EN: <p>The shortest wavelength has the highest frequency and so the highest energy per photon: <b>447 nm</b>, the blue line.</p>
      solution: "<p>波長が最も短い線は振動数が最も大きいので、光子 1 個あたりのエネルギーも最も大きくなります。<b>447 nm</b> の青色の線です。</p>",
      misconception: {
        // EN (option B): Energy rises as wavelength falls. There is a line with a shorter wavelength than 502 nm.
        "1": "波長が短くなるほど、エネルギーは大きくなります。502 nm より波長の短い線があります。",
        // EN (option C): This line is the brightest in the helium spectrum, but brightness depends on how many photons there are, not on the energy of each one.
        "2": "この線はヘリウムのスペクトルで最も明るい線ですが、明るさは光子の数で決まり、光子 1 個のエネルギーでは決まりません。",
        // EN (option D): This is the longest wavelength, so it has the lowest frequency and the lowest energy per photon.
        "3": "これは最も長い波長なので、振動数が最も小さく、光子 1 個あたりのエネルギーも最も小さくなります。",
      },
    },

    // ── lab-flame-tests-q007 · numeric · exam · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q007": {
      // EN: <p>A student records a hydrogen line as 486 ± 2 nm. Calculate the percentage uncertainty of this reading.</p>
      stem: "<p>ある生徒が、水素の線を 486 ± 2 nm と記録しました。この読みの百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty / reading × 100.
        "百分率の不確かさ = 絶対不確かさ / 読み × 100。",
      ],
      // EN: <div class="worked__math">2 / 486 × 100 = <b>0.41 %</b></div>
      solution: "<div class=\"worked__math\">2 / 486 × 100 = <b>0.41 %</b></div>",
      // EN: 0.41 % (accept 0.4 %)
      answerDisplay: "0.41 %（0.4 % も可）",
    },

    // ── lab-flame-tests-q008 · short · exam · SL · Structure 1.3.2 · 2 marks
    "lab-flame-tests-q008": {
      // EN: <p>A student reads all four visible hydrogen lines through a spectroscope. Every reading is 3 or 4 nm higher than the data value. The readings agree with each other when repeated.</p><p>State the type of error, and suggest how the student should deal with it.</p>
      stem: "<p>ある生徒が、分光器で水素の 4 本の可視線をすべて読みます。どの読みも、データの値より 3 nm か 4 nm 高くなっています。くり返して読んでも、読みどうしはよく一致します。</p><p>誤差の種類を述べなさい (state)。また、生徒がこの誤差にどう対処すべきかを提案しなさい (suggest)。</p>",
      hints: [
        // EN: Are the readings scattered on both sides of the true values, or all shifted one way?
        "読みは真の値の両側にばらついているでしょうか。それとも、すべて一方向にずれているでしょうか。",
      ],
      // EN: <p>All readings are too high by a similar amount, so the error is systematic. Averaging repeats cannot remove it, but a calibration with known lines can.</p>
      solution: "<p>どの読みも同じくらい高すぎるので、系統誤差です。くり返して平均をとっても取り除けませんが、わかっている線で校正すれば取り除けます。</p>",
      // EN: <p>It is a systematic error: every reading is shifted the same way by about the same amount (the scale is out of place). Repeating will not remove it. The student should calibrate the spectroscope: find the shift using lines of known wavelength (such as these hydrogen lines) and subtract it from every reading.</p>
      answer: "<p>系統誤差です。どの読みも、同じ向きに、ほぼ同じだけずれています（目盛りがずれています）。くり返しても取り除けません。生徒は分光器を校正すべきです。波長がわかっている線（この水素の線など）を使ってずれを求め、それをすべての読みから引きます。</p>",
      markscheme: [
        // EN: Systematic error (accept: zero / calibration error of the scale).
        "系統誤差（目盛りのゼロ点の誤差 / 校正の誤差、も可）。",
        // EN: Calibrate with lines of known wavelength and subtract the shift (about 3–4 nm) from every reading (do not accept "repeat the readings").
        "波長がわかっている線で校正し、すべての読みからずれ（約 3–4 nm）を引く（「読みをくり返す」は不可）。",
      ],
    },

    // ── lab-flame-tests-q009 · mcq · challenge · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q009": {
      // EN: <p>A calibrated spectroscope gives these readings (each ±2 nm) for a tube that contains one or two elements:</p><p class="mono">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Reference lines</caption><thead><tr><th scope="col">Element</th><th scope="col">Lines / nm</th></tr></thead><tbody><tr><th scope="row">hydrogen</th><td>410, 434, 486, 656</td></tr><tr><th scope="row">helium</th><td>447, 471, 492, 502, 588, 668</td></tr><tr><th scope="row">lithium</th><td>610, 671</td></tr><tr><th scope="row">sodium</th><td>589</td></tr></tbody></table></div><p>Which elements are in the tube?</p>
      stem: "<p>校正した分光器で、1 種類か 2 種類の元素を含む管を見ると、次の読み（それぞれ ±2 nm）が得られます。</p><p class=\"mono\">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>基準の線</caption><thead><tr><th scope=\"col\">元素</th><th scope=\"col\">線 / nm</th></tr></thead><tbody><tr><th scope=\"row\">水素</th><td>410, 434, 486, 656</td></tr><tr><th scope=\"row\">ヘリウム</th><td>447, 471, 492, 502, 588, 668</td></tr><tr><th scope=\"row\">リチウム</th><td>610, 671</td></tr><tr><th scope=\"row\">ナトリウム</th><td>589</td></tr></tbody></table></div><p>管に入っている元素はどれですか。</p>",
      options: [
        // EN: Hydrogen and helium
        "水素とヘリウム",
        // EN: Helium and sodium
        "ヘリウムとナトリウム",
        // EN: Hydrogen, helium and lithium
        "水素、ヘリウム、リチウム",
        // EN: Helium only
        "ヘリウムだけ",
      ],
      hints: [
        // EN: Check each element: are all of its lines present?
        "元素を 1 つずつ確かめましょう。その元素の線はすべてありますか。",
        // EN: An element with a missing line is not present.
        "線が 1 本でも欠けている元素は、含まれていません。",
      ],
      // EN: <p>Hydrogen: 409, 433, 487, 657 match 410, 434, 486, 656. Helium: 448, 471, 492, 502, 587, 669 match all six helium lines. Lithium is ruled out (no line near 610 nm). Sodium cannot be confirmed: its one line is hidden by helium’s 588 nm line, and nothing needs it. Answer: <b>hydrogen and helium</b>.</p>
      solution: "<p>水素：409、433、487、657 が 410、434、486、656 と一致します。ヘリウム：448、471、492、502、587、669 が、ヘリウムの 6 本の線すべてと一致します。リチウムは除外されます（610 nm の近くに線がありません）。ナトリウムは確認できません。ただ 1 本の線がヘリウムの 588 nm の線に隠れていて、ナトリウムがなくても説明できるからです。答え：<b>水素とヘリウム</b>。</p>",
      misconception: {
        // EN (option B): Sodium’s only line, 589 nm, overlaps helium’s 588 nm line, so the 587 nm reading is explained by helium. And you still have to explain 409, 433, 487 and 657 nm.
        "1": "ナトリウムのただ 1 本の線 589 nm は、ヘリウムの 588 nm の線と重なるので、587 nm の読みはヘリウムで説明できます。それに、409、433、487、657 nm も説明する必要があります。",
        // EN (option C): Lithium needs a line at 610 nm as well as 671 nm. There is no reading near 610 nm.
        "2": "リチウムには、671 nm だけでなく 610 nm の線も必要です。610 nm の近くに読みはありません。",
        // EN (option D): Helium explains six readings, but 409, 433, 487 and 657 nm do not belong to helium.
        "3": "ヘリウムで 6 つの読みは説明できますが、409、433、487、657 nm はヘリウムの線ではありません。",
      },
    },

    // ── lab-flame-tests-q010 · short · exam · SL · Structure 1.3.1 · 2 marks
    "lab-flame-tests-q010": {
      // EN: <p>A student tests potassium chloride with a wire that was used for sodium chloride and not cleaned. The flame is yellow-orange. The data say potassium gives a lilac flame.</p><p>Explain the student’s observation and suggest an improvement.</p>
      stem: "<p>ある生徒が、塩化ナトリウムに使って洗っていないニクロム線で、塩化カリウムを調べます。炎は黄橙色になります。データによると、カリウムは赤紫色の炎になります。</p><p>この生徒の観察を説明しなさい (explain)。また、改善策を提案しなさい (suggest)。</p>",
      hints: [
        // EN: What was on the wire before the potassium salt?
        "カリウムの塩の前に、ニクロム線には何がついていたでしょうか。",
        // EN: Which colour is more intense?
        "どちらの色のほうが強いでしょうか。",
      ],
      // EN: <p>See the model answer: contamination by sodium, and a blank test with a cleaned wire as the improvement.</p>
      solution: "<p>模範解答を見てください。ナトリウムによる汚染と、改善策としての、洗ったニクロム線による空試験です。</p>",
      // EN: <p>Traces of sodium chloride were still on the wire. Sodium gives an intense yellow-orange colour, which hides the pale lilac of potassium. The student should clean the wire with dilute hydrochloric acid and heat it until the flame shows no colour before each test (or use a fresh wire or splint for each salt).</p>
      answer: "<p>ニクロム線に塩化ナトリウムがまだ少し残っていました。ナトリウムは強い黄橙色を出すので、カリウムのうすい赤紫色が隠れてしまいます。生徒は、毎回調べる前にニクロム線を希塩酸で洗い、炎に色がつかなくなるまで加熱すべきです（または、塩ごとに新しいニクロム線か木の棒を使います）。</p>",
      markscheme: [
        // EN: Sodium (ions) left on the wire / contamination gives yellow-orange light that masks the lilac colour.
        "ニクロム線に残ったナトリウム（イオン）/ 汚染によって黄橙色の光が出て、赤紫色が隠れる。",
        // EN: Clean the wire with (hydrochloric) acid and heat until no colour is seen, before each test (accept: separate wire or splint for each salt).
        "毎回調べる前に、ニクロム線を（塩）酸で洗い、色が見えなくなるまで加熱する（塩ごとに別のニクロム線か木の棒を使う、も可）。",
      ],
    },

    // ── lab-flame-tests-q011 · numeric · exam · AHL · Structure 1.3.6 · 2 marks
    "lab-flame-tests-q011": {
      // EN: <p>Lithium’s red line has a corrected wavelength of 671 nm. Calculate the energy, in J, of one photon of this light.</p>
      stem: "<p>リチウムの赤色の線の補正した波長は 671 nm です。この光の光子 1 個のエネルギーを J で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Find the frequency first: f = c / λ, with λ in metres.
        "まず振動数を求めます。f = c / λ で、λ はメートルで表します。",
        // EN: Then E = hf.
        "次に E = hf です。",
      ],
      // EN: <div class="worked__math"><i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup></div><div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b></div>
      solution: "<div class=\"worked__math\"><i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup></div><div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b></div>",
    },

    // ── lab-flame-tests-q012 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "lab-flame-tests-q012": {
      // EN: <p>Mercury gives a green line at 546 nm. Calculate the energy, in kJ mol<sup>−1</sup>, of one mole of photons of this light.</p>
      stem: "<p>水銀は 546 nm に緑色の線を示します。この光の光子 1 mol のエネルギーを kJ mol<sup>−1</sup> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: λ = 5.46 × 10<sup>−7</sup> m. Use f = c / λ and E = hf.
        "λ = 5.46 × 10<sup>−7</sup> m です。f = c / λ と E = hf を使いましょう。",
        // EN: Multiply by the Avogadro constant and divide by 1000.
        "アボガドロ定数をかけて、1000 で割ります。",
      ],
      // EN: <div class="worked__math"><i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup></div><div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J</div><div class="worked__math">3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 kJ mol<sup>−1</sup></b></div>
      solution: "<div class=\"worked__math\"><i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup></div><div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J</div><div class=\"worked__math\">3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 kJ mol<sup>−1</sup></b></div>",
    },

    // ── lab-flame-tests-q013 · numeric · challenge · AHL · Structure 1.3.6 · 3 marks
    "lab-flame-tests-q013": {
      // EN: <p>In the emission spectrum of hydrogen, the lines that end on the ground state converge at a frequency of 3.29 × 10<sup>15</sup> s<sup>−1</sup>. Calculate the first ionization energy of hydrogen in kJ mol<sup>−1</sup>.</p>
      stem: "<p>水素の発光スペクトルで、基底状態で終わる線は 3.29 × 10<sup>15</sup> s<sup>−1</sup> の振動数に収束します。水素の第一イオン化エネルギーを kJ mol<sup>−1</sup> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: At the convergence limit the electron is removed from the atom. E = hf gives the energy for one atom.
        "収束限界では、電子が原子から取り除かれます。E = hf で原子 1 個あたりのエネルギーが求まります。",
        // EN: Multiply by the Avogadro constant and divide by 1000.
        "アボガドロ定数をかけて、1000 で割ります。",
      ],
      // EN: <div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 2.181 × 10<sup>−18</sup> J per atom</div><div class="worked__math">2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 kJ mol<sup>−1</sup></b></div>
      solution: "<div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 2.181 × 10<sup>−18</sup> J（原子 1 個あたり）</div><div class=\"worked__math\">2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 kJ mol<sup>−1</sup></b></div>",
      // EN: 1310 kJ mol<sup>−1</sup> (1313 to 4 significant figures)
      answerDisplay: "1310 kJ mol<sup>−1</sup>（有効数字 4 桁では 1313）",
    },

    // ── lab-flame-tests-q014 · mcq · challenge · AHL · Structure 1.3.6 · 1 mark
    "lab-flame-tests-q014": {
      // EN: <p>A student wants to find the first ionization energy of hydrogen from the convergence limit, using a hand spectroscope and a hydrogen tube. Why can this not be done?</p>
      stem: "<p>ある生徒が、携帯用分光器と水素の管を使って、収束限界から水素の第一イオン化エネルギーを求めようとしています。これができないのはなぜですか。</p>",
      options: [
        // EN: The lines that end on the ground state (n = 1) are in the ultraviolet, which the spectroscope cannot show
        "基底状態（n = 1）で終わる線は紫外線の領域にあり、分光器では見えないから",
        // EN: Hydrogen has only four lines, so there is no convergence limit
        "水素には線が 4 本しかないので、収束限界がないから",
        // EN: The visible lines are too bright to read
        "可視線が明るすぎて読めないから",
        // EN: The convergence limit is at the red end of the spectrum, beyond 700 nm
        "収束限界はスペクトルの赤色の端、700 nm より先にあるから",
      ],
      hints: [
        // EN: Which energy level does the electron fall to for the first ionization energy? Is that transition visible?
        "第一イオン化エネルギーでは、電子はどのエネルギー準位に落ちるでしょうか。その遷移は目に見えるでしょうか。",
      ],
      // EN: <p>The first ionization energy needs the series that ends on n = 1. Those transitions have large energy differences, so the lines are in the ultraviolet. The visible lines end on n = 2, and their limit gives the energy to remove an electron from n = 2, not from the ground state.</p>
      solution: "<p>第一イオン化エネルギーには、n = 1 で終わる系列が必要です。その遷移はエネルギーの差が大きいので、線は紫外線の領域にあります。可視線は n = 2 で終わる線で、その収束限界からわかるのは、基底状態ではなく n = 2 から電子を取り除くエネルギーです。</p>",
      misconception: {
        // EN (option B): Only four lines are visible, but each series has many more lines, crowding together towards its limit.
        "1": "見える線は 4 本だけですが、どの系列にもずっと多くの線があり、収束限界に向かって密集していきます。",
        // EN (option C): Brightness is not the problem. The question is which region of the spectrum the needed lines are in.
        "2": "明るさは問題ではありません。問題は、必要な線がスペクトルのどの領域にあるかです。",
        // EN (option D): Lines converge at higher frequency, so towards shorter wavelengths, not towards the red end.
        "3": "線は振動数が大きいほうに、つまり波長が短いほうに収束します。赤色の端のほうではありません。",
      },
    },

  }
});
