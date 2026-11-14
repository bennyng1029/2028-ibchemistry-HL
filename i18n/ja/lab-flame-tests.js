/* lab-flame-tests — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-flame-tests', {
  strings: {

    // page title (browser tab)
    "Lab 4 Flame tests and emission spectra | Structure Lab": "実験 4 炎色反応と発光スペクトル | Structure Lab",

    // Flame tests and emission spectra > page header > p
    "Lab 4 · Structure 1.3": "実験 4 · Structure 1.3",

    // Flame tests and emission spectra > page header > h1
    "Flame tests and emission spectra": "炎色反応と発光スペクトル",

    // Flame tests and emission spectra > page header > span
    "What can we observe and measure in the light given out by excited atoms, and how does it tell one element from another?": "励起された原子が出す光から、何を観察し、何を測定できるでしょうか。また、それによって元素をどのように見分けられるのでしょうか。",

    // What you need to be able to do > data-toc attribute
    "What you need to do": "できるようになること",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "ノートを見ないでできるようになったら、1 つずつチェックを入れましょう。",

    // What you need to be able to do > checklist > span
    "Carry out a flame test safely, and explain why the wire is cleaned and tested on its own first.": "炎色反応を安全に行い、ニクロム線を洗ってから、まずそれだけで炎に入れて確かめる理由を説明する。",

    // What you need to be able to do > checklist > span
    "Explain the colour of a flame or a discharge tube in terms of electrons falling to lower energy levels and emitting photons.": "炎や放電管の色を、電子が低いエネルギー準位に落ちて光子を放出することで説明する。",

    // What you need to be able to do > checklist > span
    "Tell a continuous spectrum from a line spectrum when you look through a spectroscope.": "分光器をのぞいたときに、連続スペクトルと線スペクトルを見分ける。",

    // What you need to be able to do > checklist > span
    "Read the wavelength of a line from a spectroscope scale and give it with its uncertainty.": "分光器の目盛りから線の波長を読み取り、不確かさを付けて示す。",

    // What you need to be able to do > checklist > span
    "Use lines of known wavelength to check a spectroscope, and correct a systematic error in its readings.": "波長がわかっている線を使って分光器を確かめ、その読みの系統誤差を補正する。",

    // What you need to be able to do > checklist > span
    "Identify the elements in a sample by matching every one of their lines to reference data.": "試料に含まれる元素を、その元素のすべての線を基準データと照らし合わせて特定する。",

    // What you need to be able to do > checklist > span
    "Describe, without calculation, how colour, wavelength, frequency and photon energy are related.": "色、波長、振動数、光子のエネルギーの関係を、計算を使わずに記述する。",

    // What you need to be able to do > checklist > Additional HL > span
    "Calculate the frequency, the energy of one photon and the energy per mole of photons from a measured wavelength.": "測定した波長から、振動数、光子 1 個のエネルギー、光子 1 mol あたりのエネルギーを計算する。",

    // What you need to be able to do > checklist > Additional HL > span
    "Calculate a first ionization energy from the wavelength or frequency of a convergence limit.": "収束限界の波長や振動数から、第一イオン化エネルギーを計算する。",

    // What you need to be able to do > checklist > span
    "Name the main sources of error in this practical and suggest realistic improvements.": "この実験のおもな誤差の原因を挙げ、現実的な改善策を提案する。",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "背景にある化学",

    // The chemistry behind it > p
    "Heat or an electric discharge gives atoms energy. An electron moves up to a higher energy level. The atom is now in an <dfn data-def=\"A state in which an electron is in a higher energy level than normal.\">excited state</dfn>.": "熱や放電によって、原子はエネルギーを受け取ります。電子はより高いエネルギー準位に移ります。このとき原子は<dfn data-def=\"電子がふつうより高いエネルギー準位にある状態。\">励起状態 <span class=\"en-term\">(excited state)</span></dfn>にあります。",

    // The chemistry behind it > data-def attribute
    "A state in which an electron is in a higher energy level than normal.": "電子がふつうより高いエネルギー準位にある状態。",

    // The chemistry behind it > p
    "The electron soon falls back to a lower energy level. As it falls, the atom emits a <dfn data-def=\"A packet of light energy.\">photon</dfn>. The energy of the photon equals the difference in energy between the two levels.": "電子はすぐに低いエネルギー準位にもどります。もどるときに、原子は<dfn data-def=\"光のエネルギーのかたまり。\">光子 <span class=\"en-term\">(photon)</span></dfn>を放出します。光子のエネルギーは、2 つの準位のエネルギーの差に等しくなります。",

    // The chemistry behind it > data-def attribute
    "A packet of light energy.": "光のエネルギーのかたまり。",

    // The chemistry behind it > p
    "The energy levels are fixed, so only certain energy differences are possible. Each atom therefore emits light of only certain wavelengths. Through a spectroscope you see a <b>line spectrum</b>: separate bright lines on a dark background. A hot solid, such as a lamp filament, gives a <b>continuous spectrum</b>: every colour, with no gaps.": "エネルギー準位は決まっているので、とりうるエネルギーの差も決まったものだけです。そのため、それぞれの原子は決まった波長の光だけを放出します。分光器を通して見ると、<b>線スペクトル</b>が見えます。暗い背景に、明るい線がとびとびに並んだものです。電球のフィラメントのような熱い固体は、<b>連続スペクトル</b>を出します。すべての色がすきまなく並んだものです。",

    // The chemistry behind it > p
    "Every element has its own set of energy levels, so every element has its own pattern of lines. That pattern identifies the element.": "元素ごとにエネルギー準位の組が違うので、元素ごとに線の並び方も違います。その並び方から元素を特定できます。",

    // The chemistry behind it > li
    "Shorter wavelength means higher frequency and more energy per photon.": "波長が短いほど、振動数が大きく、光子 1 個あたりのエネルギーも大きくなります。",

    // The chemistry behind it > li
    "Across the visible spectrum, violet light (about 400 nm) has the most energy per photon and red light (about 700 nm) the least.": "可視スペクトルの中では、紫色の光（約 400 nm）が光子 1 個あたりのエネルギーが最も大きく、赤色の光（約 700 nm）が最も小さくなります。",

    // The chemistry behind it > p
    "The full story is on the topic page: <a href=\"../topics/s1-3.html#emission\">emission spectra</a> and <a href=\"../topics/s1-3.html#hydrogen\">the hydrogen spectrum</a>.": "くわしくは、トピックのページの<a href=\"../topics/s1-3.html#emission\">発光スペクトル</a>と<a href=\"../topics/s1-3.html#hydrogen\">水素のスペクトル</a>を見てください。",

    // The chemistry behind it > Additional HL > h3
    "Turning a wavelength into an energy": "波長をエネルギーに直す",

    // The chemistry behind it > Additional HL > p
    "At HL you also calculate the energy. Two equations from the data booklet link wavelength, frequency and energy.": "HL では、エネルギーも計算します。データブックレットにある 2 つの式が、波長、振動数、エネルギーを結びつけます。",

    // The chemistry behind it > equation > Additional HL > dd
    "speed of light, 3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>": "光の速さ、3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>",

    // The chemistry behind it > equation > Additional HL > dd
    "wavelength <span class=\"unit\">m</span>": "波長 <span class=\"unit\">m</span>",

    // The chemistry behind it > equation > Additional HL > dd
    "frequency <span class=\"unit\">s-1</span> (Hz)": "振動数 <span class=\"unit\">s-1</span>（Hz）",

    // The chemistry behind it > equation > Additional HL > dd
    "energy of one photon <span class=\"unit\">J</span>": "光子 1 個のエネルギー <span class=\"unit\">J</span>",

    // The chemistry behind it > equation > Additional HL > dd
    "Planck constant, 6.63 × 10<sup>−34</sup> <span class=\"unit\">J s</span>": "プランク定数、6.63 × 10<sup>−34</sup> <span class=\"unit\">J s</span>",

    // The chemistry behind it > Additional HL > p
    "The lines of a series get closer together at higher frequency and finally merge. This <dfn data-def=\"The frequency (or wavelength) at which the lines of a series merge. For the series ending on the ground state it corresponds to ionization.\">limit of convergence</dfn> corresponds to the electron leaving the atom. For the series that ends on the ground state, its energy per mole is the first ionization energy. See <a href=\"../topics/s1-3.html#ionization\">convergence and ionization</a>.": "ある系列の線は、振動数が大きくなるほど間隔がせまくなり、最後には 1 つに重なります。この<dfn data-def=\"ある系列の線が 1 つに重なる振動数（または波長）。基底状態で終わる系列では、イオン化にあたる。\">収束限界 <span class=\"en-term\">(limit of convergence)</span></dfn>は、電子が原子から離れることにあたります。基底状態で終わる系列では、その 1 mol あたりのエネルギーが第一イオン化エネルギーです。<a href=\"../topics/s1-3.html#ionization\">収束とイオン化</a>を見てください。",

    // The chemistry behind it > Additional HL > data-def attribute
    "The frequency (or wavelength) at which the lines of a series merge. For the series ending on the ground state it corresponds to ionization.": "ある系列の線が 1 つに重なる振動数（または波長）。基底状態で終わる系列では、イオン化にあたる。",

    // The chemistry behind it > not needed for IB > p
    "The guide does not ask you to learn flame colours or the wavelengths of the lines of any element. In this lab they are practice data. In an exam the colours or the reference lines are given to you.": "『指導の手引き』では、炎色反応の色や、元素の線の波長を覚えることは求められていません。この実験では練習用のデータです。試験では、色や基準の線が与えられます。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的・変数・安全",

    // Aim, variables and safety > h3
    "Aim": "目的",

    // Aim, variables and safety > p
    "To identify metal ions from the colour they give to a flame, and to identify elements from the wavelengths of the lines in their emission spectra.": "炎につく色から金属イオンを特定し、発光スペクトルの線の波長から元素を特定する。",

    // Aim, variables and safety > h3
    "Variables": "変数",

    // Aim, variables and safety > table > caption
    "Variables in the two parts of this lab": "この実験の 2 つのパートの変数",

    // Aim, variables and safety > table > th
    "Type": "種類",

    // Aim, variables and safety > table > th
    // Method > h3
    // Run the experiment > h3
    "Part A: flame tests": "パート A：炎色反応",

    // Aim, variables and safety > table > th
    "Part B: spectroscope": "パート B：分光器",

    // Aim, variables and safety > table > th
    "Independent": "独立変数",

    // Aim, variables and safety > table > td
    "The metal ion in the salt": "塩に含まれる金属イオン",

    // Aim, variables and safety > table > td
    "The light source (element in the tube or flame)": "光源（管や炎の中の元素）",

    // Aim, variables and safety > table > th
    "Dependent": "従属変数",

    // Aim, variables and safety > table > td
    "The colour of the flame": "炎の色",

    // Aim, variables and safety > table > td
    "The wavelengths of the lines": "線の波長",

    // Aim, variables and safety > table > th
    "Controlled": "制御変数",

    // Aim, variables and safety > table > td
    "The same anion (all chlorides); the same hot, non-luminous part of a blue Bunsen flame; a clean wire for every test; the same background and lighting": "同じ陰イオン（すべて塩化物）。ガスバーナーの青い炎の、同じ高温で光らない部分。毎回きれいなニクロム線を使う。同じ背景と明るさ",

    // Aim, variables and safety > table > td
    "The same spectroscope, checked against lines of known wavelength; the same distance from the source; a darkened room": "波長がわかっている線で確かめた同じ分光器。光源からの距離を同じにする。部屋を暗くする",

    // Aim, variables and safety > h3
    "Equipment": "器具",

    // Aim, variables and safety > li
    "Bunsen burner, heat-resistant mat": "ガスバーナー、耐熱マット",

    // Aim, variables and safety > li
    "Nichrome wire loop in an insulated handle (one for each salt, if you can)": "絶縁された柄のついたニクロム線のループ（できれば塩ごとに 1 本）",

    // Aim, variables and safety > li
    "Dilute hydrochloric acid in a small beaker or watch glass, for cleaning the wire": "線を洗うための、小さなビーカーか時計皿に入れた希塩酸",

    // Aim, variables and safety > li
    "Solid samples on watch glasses: lithium chloride, sodium chloride, potassium chloride, calcium chloride, strontium chloride, copper(II) chloride; three unknown salts": "時計皿にのせた固体の試料：塩化リチウム、塩化ナトリウム、塩化カリウム、塩化カルシウム、塩化ストロンチウム、塩化銅(II)。未知の塩 3 種類",

    // Aim, variables and safety > li
    "Hand spectroscope with a wavelength scale marked every 10 nm": "10 nm ごとに波長の目盛りがある携帯用分光器",

    // Aim, variables and safety > li
    "Filament lamp; hydrogen, helium and mercury discharge tubes with their power supply (set up by your teacher)": "白熱電球。水素、ヘリウム、水銀の放電管とその電源（先生が準備する）",

    // Aim, variables and safety > p
    "<b>Eye protection</b> throughout. <b>Hydrochloric acid</b> is an irritant: use only a few cm<sup>3</sup> of dilute acid and wipe up spills at once.": "実験のあいだずっと<b>保護めがね</b>を着けましょう。<b>塩酸</b>は刺激性があります。うすい塩酸を数 cm<sup>3</sup> だけ使い、こぼしたらすぐにふき取りましょう。",

    // Aim, variables and safety > p
    "The <b>wire and its holder get very hot</b>. Hold it only by the insulated handle and rest it on the heat-resistant mat. Tie back long hair near the Bunsen flame.": "<b>ニクロム線とその持ち手はとても熱くなります</b>。絶縁された柄だけを持ち、耐熱マットの上に置きましょう。ガスバーナーの炎の近くでは、長い髪はまとめておきます。",

    // Aim, variables and safety > p
    "<b>Copper(II) chloride</b> is harmful if swallowed, and lithium and strontium chlorides are irritants. Use tiny amounts and wash your hands afterwards.": "<b>塩化銅(II)</b> は飲みこむと有害で、塩化リチウムと塩化ストロンチウムは刺激性があります。ごく少量を使い、実験のあとは手を洗いましょう。",

    // Aim, variables and safety > p
    "<b>Discharge tubes run at several thousand volts</b> and get hot. Only your teacher switches them on. Do not touch the tube or its connections. Never point a spectroscope at the Sun.": "<b>放電管は数千ボルトで動き</b>、熱くなります。スイッチを入れるのは先生だけです。管やその接続部にさわってはいけません。分光器を太陽に向けてはいけません。",

    // Method > data-toc attribute
    // Method > h2
    "Method": "方法",

    // Method > li
    "Light the Bunsen burner and open the air hole fully to get a blue, non-luminous flame. A yellow flame would hide the colours you are looking for.": "ガスバーナーに火をつけ、空気調節ねじを十分に開いて、青い光らない炎にします。炎が黄色いと、見たい色が隠れてしまいます。",

    // Method > li
    "Dip the wire loop in dilute hydrochloric acid, then hold it in the hottest part of the flame. Repeat until the wire gives <b>no colour</b> to the flame. This blank shows the wire is clean.": "ニクロム線のループを希塩酸にひたし、炎の最も熱い部分に入れます。ニクロム線を入れても炎に<b>色がつかなく</b>なるまでくり返します。この空試験で、ニクロム線がきれいなことを確かめます。",

    // Method > li
    "Dip the clean loop in the acid and then into the first salt, so a few grains stick to it.": "きれいなループを塩酸にひたしてから、1 つ目の塩につけて、粒が少しつくようにします。",

    // Method > li
    "Hold the loop at the edge of the flame. Record the colour straight away, in words. Some colours last only a second.": "ループを炎のふちに入れます。すぐに色を言葉で記録します。1 秒ほどしか続かない色もあります。",

    // Method > li
    "Clean the wire again (step 2) before every new salt. Traces of the last salt, or of sodium from your fingers, change the colour.": "新しい塩を調べる前に、毎回もう一度ニクロム線を洗います（ステップ 2）。前の塩や、指についたナトリウムが少しでも残っていると、色が変わってしまいます。",

    // Method > li
    "Test each known salt, then each unknown. Compare each unknown with the known salts under the same conditions.": "既知の塩をそれぞれ調べ、次に未知の塩をそれぞれ調べます。同じ条件で、それぞれの未知の塩を既知の塩とくらべます。",

    // Method > h3
    "Part B: emission spectra": "パート B：発光スペクトル",

    // Method > li
    "Look at the filament lamp through the spectroscope. You should see a continuous spectrum: a check that the spectroscope works.": "分光器で白熱電球を見ます。連続スペクトルが見えるはずです。これで分光器がはたらいていることを確かめます。",

    // Method > li
    "Look at the hydrogen discharge tube. Line up each bright line with the cross-hair and read the scale. These lines have known wavelengths, so they show whether the scale reads correctly.": "水素の放電管を見ます。明るい線を 1 本ずつ十字線に合わせ、目盛りを読みます。これらの線の波長はわかっているので、目盛りが正しく読めているかがわかります。",

    // Method > li
    "Record the wavelength of every line you can see for each tube and each flame. Give each reading with its uncertainty.": "それぞれの管と炎について、見えるすべての線の波長を記録します。どの読みにも不確かさを付けます。",

    // Method > li
    "Correct your readings using the result of step 8. Then compare the pattern of lines with reference data to identify each element.": "ステップ 8 の結果を使って、読みを補正します。次に、線の並び方を基準データとくらべて、それぞれの元素を特定します。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "実験を実行",

    // Run the experiment > widget > data-title attribute
    "Flame tests on metal salts": "金属の塩の炎色反応",

    // Run the experiment > widget > figcaption
    "Choose a salt, clean the wire, then dip and heat. Each test is added to the results table. Try one test without cleaning the wire first, and identify the three unknowns.": "塩を選び、ニクロム線を洗ってから、「つけて加熱する」を押します。試すたびに結果の表に追加されます。一度、ニクロム線を洗わずに試してみましょう。そして、3 つの未知の塩を特定しましょう。",

    // Run the experiment > common mistake > p
    "Lithium and strontium both give a red flame. A colour alone is not always enough to identify an ion. A spectroscope separates the light into lines and tells them apart.": "リチウムとストロンチウムは、どちらも赤い炎になります。色だけでは、イオンを特定できるとは限りません。分光器を使えば、光が線に分かれて、2 つを見分けられます。",

    // Run the experiment > h3
    "Part B: reading spectra with a spectroscope": "パート B：分光器でスペクトルを読む",

    // Run the experiment > widget > data-title attribute
    "Hand spectroscope": "携帯用分光器",

    // Run the experiment > widget > figcaption
    "Choose a light source. Move the cross-hair onto a line and record the reading. Start with the hydrogen tube to check the scale. “New spectroscope” gives you another instrument, which may have a different scale error.": "光源を選びます。十字線を線に合わせ、読みを記録します。まず水素の管で目盛りを確かめましょう。「新しい分光器」を押すと別の器具になり、目盛りの誤差が違うことがあります。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "データの処理",

    // Processing the data > h3
    "Correcting the readings and identifying the element": "読みを補正して元素を特定する",

    // Processing the data > p
    "A cheap spectroscope often has a scale that is slightly out of place. Every reading is then wrong by the same amount. This is a <b>systematic error</b>. You find it with a source whose lines you know, and then correct every other reading.": "安い分光器では、目盛りが少しずれていることがよくあります。すると、どの読みも同じだけ間違います。これは<b>系統誤差</b>です。線がわかっている光源を使ってずれを見つけ、ほかのすべての読みを補正します。",

    // Processing the data > table > caption
    "Reference data: the brightest visible lines (wavelength / nm, rounded)": "基準データ：見える線のうち最も明るいもの（波長 / nm、丸めた値）",

    // Processing the data > table > th
    "Element": "元素",

    // Processing the data > table > th
    "Lines / nm": "線 / nm",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-flame-tests.js)
    "hydrogen": "水素",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-flame-tests.js)
    "helium": "ヘリウム",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-flame-tests.js)
    "lithium": "リチウム",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-flame-tests.js)
    "sodium": "ナトリウム",

    // Processing the data > table > th
    // widget string (assets/js/widgets-lab-flame-tests.js)
    "mercury": "水銀",

    // Processing the data > p
    "Mercury’s 578 nm line is really a close pair, at 577 and 579 nm. A hand spectroscope shows it as one yellow line.": "水銀の 578 nm の線は、本当は 577 nm と 579 nm の近い 2 本の線です。携帯用分光器では、1 本の黄色い線に見えます。",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 1": "例題 1",

    // Processing the data > worked example > h3
    "Calibrate, correct, identify": "校正し、補正し、特定する",

    // Processing the data > worked example > p
    "Through one spectroscope, the hydrogen tube gave lines at 413, 437, 489 and 659 nm (each ±2 nm). An unknown tube gave lines at 408, 439, 549 and 581 nm. Identify the element in the unknown tube.": "ある分光器で見ると、水素の管の線は 413、437、489、659 nm（それぞれ ±2 nm）でした。未知の管の線は 408、439、549、581 nm でした。未知の管の中の元素を特定しなさい。",

    // Processing the data > worked example > data-title attribute
    "Compare hydrogen with the data": "水素をデータとくらべる",

    // Processing the data > worked example > p
    "Hydrogen’s lines are known, so any difference is an error in the scale.": "水素の線はわかっているので、違いがあれば目盛りの誤差です。",

    // Processing the data > worked example > data-title attribute
    "Name the error": "誤差の名前を挙げる",

    // Processing the data > worked example > p
    "Every reading is too high by the same amount. That is a systematic error, not random scatter.": "どの読みも同じだけ高すぎます。これは系統誤差で、偶然のばらつきではありません。",

    // Processing the data > worked example > maths line
    "correction = −3 nm": "補正 = −3 nm",

    // Processing the data > worked example > data-title attribute
    "Correct the unknown": "未知の管の読みを補正する",

    // Processing the data > worked example > p
    "Apply the same correction to every reading from this spectroscope.": "この分光器のすべての読みに、同じ補正をします。",

    // Processing the data > worked example > data-title attribute
    "Match the whole pattern": "線の並び方全体を照らし合わせる",

    // Processing the data > worked example > p
    "One line can match more than one element (436 is close to hydrogen’s 434). Only mercury has all four lines, and hydrogen’s 486 and 656 nm lines are missing.": "1 本の線が複数の元素と一致することがあります（436 は水素の 434 に近い値です）。4 本すべての線をもつのは水銀だけで、水素の 486 nm と 656 nm の線はありません。",

    // Processing the data > worked example > maths line
    "405, 436, 546, 578 nm = <b>mercury</b>": "405、436、546、578 nm = <b>水銀</b>",

    // Processing the data > worked example > p
    "The unknown tube contains mercury.": "未知の管には水銀が入っています。",

    // Processing the data > try it > p
    "Another spectroscope shows the hydrogen lines at 653 and 483 nm. Through the same spectroscope, a lithium salt in a flame shows a bright red line at 668 nm. Calculate the corrected wavelength of the red line.": "別の分光器では、水素の線が 653 nm と 483 nm に見えます。同じ分光器で、炎に入れたリチウムの塩は 668 nm に明るい赤色の線を示します。この赤色の線の、補正した波長を計算しなさい。",

    // Processing the data > try it > li
    "Compare the hydrogen readings with the data: 656 and 486 nm. Is the scale reading too high or too low, and by how much?": "水素の読みをデータの 656 nm と 486 nm とくらべましょう。目盛りの読みは高すぎますか、低すぎますか。どれだけずれていますか。",

    // Processing the data > try it > li
    "The scale reads 3 nm too low, so add 3 nm to every reading.": "目盛りは 3 nm 低く読めるので、すべての読みに 3 nm を足します。",

    // Processing the data > try it > maths line
    "656 − 653 = 3; 486 − 483 = 3, so the scale reads 3 nm too low": "656 − 653 = 3、486 − 483 = 3、よって目盛りは 3 nm 低く読める",

    // Processing the data > try it > maths line
    "corrected = 668 + 3 = <b>671 nm</b> (lithium’s red line)": "補正した値 = 668 + 3 = <b>671 nm</b>（リチウムの赤色の線）",

    // Processing the data > widget > data-title attribute
    "Identify the elements in an unknown tube": "未知の管の中の元素を特定する",

    // Processing the data > widget > figcaption
    "The readings come from a calibrated spectroscope, so each is within ±2 nm of the true value. Choose every element you think is present, then check. An element counts only if all of its lines are there.": "読みは校正した分光器のものなので、どれも真の値から ±2 nm 以内です。含まれていると思う元素をすべて選んでから、答え合わせをしましょう。元素が含まれているといえるのは、その元素のすべての線があるときだけです。",

    // Processing the data > Additional HL > h3
    "From a wavelength to an energy": "波長からエネルギーへ",

    // Processing the data > worked example > Additional HL > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > Additional HL > h3
    "Energy of the lithium red line": "リチウムの赤色の線のエネルギー",

    // Processing the data > worked example > Additional HL > p
    "The corrected wavelength of lithium’s red line is 671 nm. Calculate the frequency, the energy of one photon, and the energy of one mole of these photons in kJ mol<sup>−1</sup>.": "リチウムの赤色の線の補正した波長は 671 nm です。振動数、光子 1 個のエネルギー、この光子 1 mol のエネルギーを kJ mol<sup>−1</sup> で計算しなさい。",

    // Processing the data > worked example > Additional HL > data-title attribute
    "Convert to metres": "メートルに直す",

    // Processing the data > worked example > Additional HL > p
    "The speed of light is in m s<sup>−1</sup>, so the wavelength must be in m.": "光の速さは m s<sup>−1</sup> で表されているので、波長は m にする必要があります。",

    // Processing the data > worked example > Additional HL > data-title attribute
    "Find the frequency": "振動数を求める",

    // Processing the data > worked example > Additional HL > p
    "Rearrange <i>c</i> = <i>λf</i>.": "<i>c</i> = <i>λf</i> を変形します。",

    // Processing the data > worked example > Additional HL > data-title attribute
    "Energy of one photon": "光子 1 個のエネルギー",

    // Processing the data > worked example > Additional HL > p
    "Use <i>E</i> = <i>hf</i>. Keep the unrounded frequency.": "<i>E</i> = <i>hf</i> を使います。振動数は丸めずに使いましょう。",

    // Processing the data > worked example > Additional HL > data-title attribute
    "Per mole, in kJ": "1 mol あたり、kJ で",

    // Processing the data > worked example > Additional HL > p
    "Multiply by the Avogadro constant, then divide by 1000 to change J into kJ.": "アボガドロ定数をかけてから、1000 で割って J を kJ に直します。",

    // Processing the data > worked example > Additional HL > data-title attribute
    "Round to the data": "データに合わせて丸める",

    // Processing the data > worked example > Additional HL > p
    "The wavelength has 3 significant figures.": "波長は有効数字 3 桁です。",

    // Processing the data > worked example > Additional HL > p
    "4.47 × 10<sup>14</sup> s<sup>−1</sup>; 2.96 × 10<sup>−19</sup> J per photon; 178 kJ mol<sup>−1</sup>.": "4.47 × 10<sup>14</sup> s<sup>−1</sup>、光子 1 個あたり 2.96 × 10<sup>−19</sup> J、178 kJ mol<sup>−1</sup>。",

    // Processing the data > try it > Additional HL > p
    "Sodium gives a yellow line at 589 nm. Calculate the energy, in kJ mol<sup>−1</sup>, of one mole of photons of this light.": "ナトリウムは 589 nm に黄色の線を示します。この光の光子 1 mol のエネルギーを、kJ mol<sup>−1</sup> で計算しなさい。",

    // Processing the data > try it > Additional HL > li
    "Change 589 nm into metres, then find the frequency with <i>f</i> = <i>c</i> / <i>λ</i>.": "589 nm をメートルに直してから、<i>f</i> = <i>c</i> / <i>λ</i> で振動数を求めます。",

    // Processing the data > try it > Additional HL > li
    "Find <i>E</i> = <i>hf</i> for one photon, multiply by 6.02 × 10<sup>23</sup> and divide by 1000.": "光子 1 個について <i>E</i> = <i>hf</i> を求め、6.02 × 10<sup>23</sup> をかけて 1000 で割ります。",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "不確かさ",

    // Uncertainties > h3
    "The spectroscope reading": "分光器の読み",

    // Uncertainties > p
    "The scale is marked every 10 nm and each line has some width. You can judge the centre of a line to about ±2 nm. Write every reading with this absolute uncertainty, for example <span class=\"mono\">589 ± 2 nm</span>.": "目盛りは 10 nm ごとで、どの線にもある程度の幅があります。線の中心は約 ±2 nm まで判断できます。すべての読みに、この絶対不確かさを付けて書きましょう。たとえば <span class=\"mono\">589 ± 2 nm</span> です。",

    // Uncertainties > p
    "The percentage uncertainty is the absolute uncertainty divided by the reading, × 100:": "百分率の不確かさは、絶対不確かさを読みで割って 100 をかけたものです。",

    // Uncertainties > maths line
    "percentage uncertainty = 2 / 589 × 100 = 0.34 %": "百分率の不確かさ = 2 / 589 × 100 = 0.34 %",

    // Uncertainties > p
    "The uncertainty is small compared with the gaps between most lines. It is not small enough to separate lines that are closer than about 4 nm, such as helium’s 588 nm line and sodium’s 589 nm line. Then you must use the rest of the pattern.": "この不確かさは、ほとんどの線どうしの間隔にくらべて小さな値です。ただし、ヘリウムの 588 nm の線とナトリウムの 589 nm の線のように、約 4 nm より近い線を分けられるほど小さくはありません。そのときは、線の並び方のほかの部分を使う必要があります。",

    // Uncertainties > h3
    "Comparing with the literature value": "文献値とくらべる",

    // Uncertainties > p
    "Suppose you read sodium’s line as 593 ± 2 nm. The data value is 589 nm.": "ナトリウムの線を 593 ± 2 nm と読んだとします。データの値は 589 nm です。",

    // Uncertainties > maths line
    "percentage error = (593 − 589) / 589 × 100 = 0.68 %": "百分率誤差 = (593 − 589) / 589 × 100 = 0.68 %",

    // Uncertainties > p
    "The difference, 4 nm, is bigger than the uncertainty of 2 nm. So random error alone cannot explain it. There is probably a systematic error: the scale needs calibrating. If the difference were 2 nm or less, the reading would agree with the data within its uncertainty.": "差の 4 nm は、不確かさの 2 nm より大きくなっています。だから、偶然誤差だけでは説明できません。おそらく系統誤差があり、目盛りを校正する必要があります。差が 2 nm 以下なら、読みは不確かさの範囲でデータと一致しているといえます。",

    // Uncertainties > Additional HL > h3
    "Uncertainty in a calculated energy": "計算したエネルギーの不確かさ",

    // Uncertainties > Additional HL > p
    "The energy is <i>E</i> = <i>hc</i> / <i>λ</i>. The constants are treated as exact, so the percentage uncertainty in <i>E</i> is the same as in <i>λ</i>.": "エネルギーは <i>E</i> = <i>hc</i> / <i>λ</i> です。定数は正確な値として扱うので、<i>E</i> の百分率の不確かさは <i>λ</i> の百分率の不確かさと同じです。",

    // Uncertainties > Additional HL > maths line
    "671 ± 2 nm: 2 / 671 × 100 = 0.30 %; 0.30 % of 178 kJ mol<sup>−1</sup> = 0.5 kJ mol<sup>−1</sup>": "671 ± 2 nm：2 / 671 × 100 = 0.30 %、178 kJ mol<sup>−1</sup> の 0.30 % = 0.5 kJ mol<sup>−1</sup>",

    // Uncertainties > Additional HL > p
    "So the energy is <span class=\"mono\">178.4 ± 0.5 kJ mol<sup>−1</sup></span>. Give the absolute uncertainty to one significant figure and the value to the same decimal place.": "したがって、エネルギーは <span class=\"mono\">178.4 ± 0.5 kJ mol<sup>−1</sup></span> です。絶対不確かさは有効数字 1 桁で示し、値も同じ小数の位までにします。",

    // Uncertainties > h3
    "Reliability of the flame colours": "炎の色の信頼性",

    // Uncertainties > p
    "A flame colour is a qualitative observation, so it has no ± value. You make it reliable in other ways.": "炎の色は定性的な観察なので、± の値はありません。別の方法で信頼性を高めます。",

    // Uncertainties > li
    "<b>Blank:</b> heat the clean wire on its own first. If the flame stays blue, any colour later comes from the salt.": "<b>空試験：</b>まず、きれいなニクロム線だけを加熱します。炎が青いままなら、そのあとでつく色は塩によるものです。",

    // Uncertainties > li
    "<b>Known samples:</b> test the known salts under the same conditions, and compare each unknown with them, not with a colour from memory.": "<b>既知の試料：</b>同じ条件で既知の塩を調べ、それぞれの未知の塩を、記憶の中の色ではなく、既知の塩とくらべます。",

    // Uncertainties > li
    "<b>Repeats:</b> test each salt at least twice, with the wire cleaned in between. A second observer should agree with your description.": "<b>くり返し：</b>ニクロム線をそのつど洗いながら、それぞれの塩を少なくとも 2 回調べます。もう 1 人の観察者にも、同じ色に見えるかを確かめてもらいましょう。",

    // Uncertainties > li
    "<b>Confirm with a spectrum:</b> when two ions give similar colours, the pattern of lines settles it.": "<b>スペクトルで確かめる：</b>2 つのイオンが似た色を示すときは、線の並び方で決着がつきます。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差と改善",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評価：誤差と改善",

    // Evaluation: errors and improvements > p
    "<b>Random errors</b> make repeated readings scatter on both sides of the true value, such as judging the centre of a blurred line. Repeating and averaging reduces their effect. <b>Systematic errors</b> push every reading the same way, such as a scale that is out of place. Repeating does not help; calibration does.": "<b>偶然誤差</b>は、ぼやけた線の中心を判断するときのように、くり返した読みを真の値の両側にばらつかせます。くり返して平均をとると、その影響が小さくなります。<b>系統誤差</b>は、目盛りのずれのように、すべての読みを同じ向きにずらします。くり返しても役に立ちませんが、校正すれば解決できます。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error, their effect and improvements": "誤差の原因、その影響、改善策",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差の原因",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "結果への影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "現実的な改善策",

    // Evaluation: errors and improvements > table > td
    "Wire not cleaned, or touched with fingers (sodium)": "ニクロム線を洗っていない、または指でさわった（ナトリウム）",

    // Evaluation: errors and improvements > table > td
    "An extra yellow-orange colour mixes with, or hides, the true colour. Potassium’s pale lilac is the easiest to hide. Systematic.": "余分な黄橙色が本当の色に混ざったり、本当の色を隠したりする。カリウムのうすい赤紫色が最も隠れやすい。系統誤差。",

    // Evaluation: errors and improvements > table > td
    "Clean with dilute hydrochloric acid and heat until the flame shows no colour; use a separate wire or a wooden splint for each salt.": "希塩酸で洗い、炎に色がつかなくなるまで加熱する。塩ごとに別のニクロム線か木の棒を使う。",

    // Evaluation: errors and improvements > table > td
    "Colour judged by eye; some colours last only a moment": "色を目で判断する。一瞬しか続かない色もある",

    // Evaluation: errors and improvements > table > td
    "Different people describe the same flame differently. Random.": "同じ炎でも、人によって色の言い方が違う。偶然誤差。",

    // Evaluation: errors and improvements > table > td
    "Compare with known salts side by side, against a dark background; repeat; confirm with a spectroscope.": "暗い背景の前で既知の塩と並べてくらべる。くり返す。分光器で確かめる。",

    // Evaluation: errors and improvements > table > td
    "Spectroscope scale out of place": "分光器の目盛りがずれている",

    // Evaluation: errors and improvements > table > td
    "Every reading is too high (or too low) by the same amount. Systematic.": "どの読みも同じだけ高すぎる（または低すぎる）。系統誤差。",

    // Evaluation: errors and improvements > table > td
    "Calibrate with lines of known wavelength (the hydrogen tube or a sodium flame) and correct all readings.": "波長がわかっている線（水素の管やナトリウムの炎）で校正し、すべての読みを補正する。",

    // Evaluation: errors and improvements > table > td
    "Centre of a broad or faint line hard to judge": "幅の広い線やうすい線の中心を判断しにくい",

    // Evaluation: errors and improvements > table > td
    "Readings scatter by a few nm. Random.": "読みが数 nm ばらつく。偶然誤差。",

    // Evaluation: errors and improvements > table > td
    "Take several readings of each line and average; narrow the slit of the spectroscope; darken the room.": "それぞれの線を何回か読んで平均する。分光器のスリットをせまくする。部屋を暗くする。",

    // Evaluation: errors and improvements > table > td
    "Two elements with lines closer together than the uncertainty": "線どうしの間隔が不確かさより小さい 2 つの元素",

    // Evaluation: errors and improvements > table > td
    "One line cannot tell them apart (helium 588 nm, sodium 589 nm).": "1 本の線では見分けられない（ヘリウム 588 nm、ナトリウム 589 nm）。",

    // Evaluation: errors and improvements > table > td
    "Use the whole pattern of lines, or an instrument with higher resolution, such as a diffraction-grating spectrometer.": "線の並び方全体を使うか、回折格子分光計のような分解能の高い器具を使う。",

    // Evaluation: errors and improvements > table > td
    "Light from the room or the Bunsen flame": "部屋の明かりやガスバーナーの炎の光",

    // Evaluation: errors and improvements > table > td
    "A faint continuous background makes weak lines hard to see.": "うすい連続した背景光のせいで、弱い線が見えにくくなる。",

    // Evaluation: errors and improvements > table > td
    "Darken the room; use a blue, non-luminous flame; shield the source.": "部屋を暗くする。青い光らない炎を使う。光源のまわりをおおう。",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "“Repeat the experiment” earns no mark on its own. Say what you would repeat and why it helps (it reduces random error), or name the exact change, such as “calibrate the spectroscope with the hydrogen lines”.": "「実験をくり返す」だけでは点になりません。何をくり返すのか、それがなぜ役に立つのか（偶然誤差が小さくなる）を述べるか、「水素の線で分光器を校正する」のように、具体的な変更を挙げましょう。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "試験対策の問題",

    // Exam practice > p
    "Questions in the style of Paper 1B, built on this practical. You get feedback after each one, and questions you have not yet answered correctly come up first.": "この実験をもとにした Paper 1B 形式の問題です。1 問ごとにフィードバックがあり、まだ正解していない問題が先に出てきます。",

    // Exam practice > data-title attribute
    "Lab 4: flame tests and emission spectra": "実験 4：炎色反応と発光スペクトル",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "violet": "紫色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "blue": "青色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "green": "緑色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "yellow": "黄色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "orange": "橙色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "red": "赤色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "ultraviolet": "紫外線",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "infrared": "赤外線",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "lithium chloride": "塩化リチウム",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "lithium ion": "リチウムイオン",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "red (crimson)": "赤色（深紅色）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "deep red": "濃い赤色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "sodium chloride": "塩化ナトリウム",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "sodium ion": "ナトリウムイオン",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "yellow-orange, bright and long-lasting": "黄橙色、明るく長く続く",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "intense yellow-orange": "強い黄橙色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "potassium chloride": "塩化カリウム",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "potassium ion": "カリウムイオン",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "lilac (pale violet)": "赤紫色（うすい紫色）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "pale lilac, faint": "うすい赤紫色、かすか",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "calcium chloride": "塩化カルシウム",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "calcium ion": "カルシウムイオン",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "orange-red (brick red)": "橙赤色（れんが色）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "orange-red": "橙赤色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "strontium chloride": "塩化ストロンチウム",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "strontium ion": "ストロンチウムイオン",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "bright red": "明るい赤色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "copper(II) chloride": "塩化銅(II)",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "copper(II) ion": "銅(II) イオン",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "blue-green": "青緑色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "green with a blue edge": "緑色で、ふちが青色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown A": "未知試料 A",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown B": "未知試料 B",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown C": "未知試料 C",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Sample on the wire": "ニクロム線につける試料",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Clean the wire": "ニクロム線を洗う",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Dip and heat": "つけて加熱する",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Clear results": "結果を消す",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "A Bunsen burner with a blue flame in a dark viewing area. A wire loop holds the sample at the edge of the flame. The colour of the flame is named in the text below the picture and in the readout.": "暗い観察場所にある、青い炎のガスバーナー。線のループが試料を炎のふちに保っている。炎の色は、図の下の文と表示欄に言葉で示されている。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Last observation": "最後の観察",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Wire": "ニクロム線",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Results table (copy it into your notebook)": "結果の表（ノートに写しましょう）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Identify the unknowns: which metal ion does each one contain?": "未知試料を特定しましょう。それぞれに含まれている金属イオンはどれですか。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "choose": "選択",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Unknown {k}": "未知試料 {k}",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Check my identifications": "特定の答え合わせ",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown {k}": "未知試料 {k}",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Flame: blue (no sample)": "炎：青色（試料なし）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Blank test: the flame stays blue. The wire is clean.": "空試験：炎は青いままです。ニクロム線はきれいです。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Blank test: faint yellow-orange. The wire is not clean yet.": "空試験：かすかに黄橙色。ニクロム線はまだきれいではありません。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Flame colour: {c}": "炎の色：{c}",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "yellow-orange; the lilac colour is hidden": "黄橙色。赤紫色は隠れている",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "{c}, mixed with yellow-orange": "{c}、黄橙色が混ざる",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "{c}, with flashes of {o}": "{c}、ときどき{o}がちらつく",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Unknown {k}: correct, it contains the {ion}.": "未知試料 {k}：正解です。{ion}が含まれています。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Unknown {k}: it contains the {ion}. Lithium and strontium both give a red flame, so a flame test alone cannot tell them apart. Look at the spectrum.": "未知試料 {k}：{ion}が含まれています。リチウムとストロンチウムはどちらも赤い炎になるので、炎色反応だけでは見分けられません。スペクトルを見ましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Unknown {k}: not the {ion}. Test it again with a clean wire and compare it with the known salts side by side.": "未知試料 {k}：{ion}ではありません。きれいなニクロム線でもう一度調べ、既知の塩と並べてくらべましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Choose an ion for all three unknowns first.": "先に、3 つの未知試料すべてについてイオンを選びましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Not clean: traces of an earlier sample or of sodium may be on it.": "きれいではない：ニクロム線に前の試料やナトリウムが少し残っているかもしれません。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Clean: the last blank test gave no colour.": "きれい：最後の空試験では色がつきませんでした。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "{s}: {c}": "{s}：{c}",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Test": "回",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Sample": "試料",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Flame colour observed": "観察した炎の色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Wire cleaned first?": "先にニクロム線を洗ったか",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "yes": "はい",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "no": "いいえ",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "No tests yet. Clean the wire, then dip and heat.": "まだ試していません。ニクロム線を洗ってから、「つけて加熱する」を押しましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "filament lamp (white light)": "白熱電球（白色光）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "lamp": "電球",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "hydrogen discharge tube": "水素の放電管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "hydrogen tube": "水素の管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "helium discharge tube": "ヘリウムの放電管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "helium tube": "ヘリウムの管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "mercury discharge tube": "水銀の放電管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "mercury tube": "水銀の管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "flame with sodium chloride": "塩化ナトリウムを入れた炎",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "sodium flame": "ナトリウムの炎",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "flame with lithium chloride": "塩化リチウムを入れた炎",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "lithium flame": "リチウムの炎",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown discharge tube": "未知の放電管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown tube": "未知の管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Light source": "光源",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Cross-hair position on the scale": "目盛り上の十字線の位置",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Record reading": "読みを記録する",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "New spectroscope": "新しい分光器",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Clear readings": "読みを消す",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "The view through a hand spectroscope: a dark field with the spectrum of the chosen source above a wavelength scale from 400 to 700 nanometres, and a cross-hair marker. The readout says whether the cross-hair is on a bright line.": "携帯用分光器をのぞいたようす：暗い視野に、選んだ光源のスペクトルと、その下に 400〜700 ナノメートルの波長の目盛り、十字線の印がある。十字線が明るい線の上にあるかどうかは、表示欄に示される。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "scale reading / nm": "目盛りの読み / nm",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Cross-hair reading": "十字線の読み",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "At the cross-hair": "十字線の位置",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Spectrum": "スペクトル",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Readings table (each reading ±2 nm)": "読みの表（どの読みも ±2 nm）",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "A continuous spectrum has no separate lines to record. Every wavelength from violet to red is present.": "連続スペクトルには、記録できる別々の線がありません。紫色から赤色まで、すべての波長があります。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "There is no bright line at the cross-hair. Move it onto the centre of a line first.": "十字線の位置に明るい線がありません。まず十字線を線の中心に合わせましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Light of every colour. Here it is {c}.": "すべての色の光があります。ここでは{c}です。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Continuous: an unbroken band from violet to red.": "連続：紫色から赤色まで途切れずに続く帯。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "A bright {c} line, centred on the cross-hair.": "明るい{c}の線。中心が十字線に合っています。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "The edge of a bright {c} line. Move a little to centre it.": "明るい{c}の線のふちです。少し動かして中心に合わせましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Dark: no light of this wavelength.": "暗い：この波長の光はありません。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Line spectrum: 1 bright line on a dark background.": "線スペクトル：暗い背景に明るい線が 1 本。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Line spectrum: {n} bright lines on a dark background.": "線スペクトル：暗い背景に明るい線が {n} 本。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Reading": "読み",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Source": "光源",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Wavelength / nm": "波長 / nm",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Colour": "色",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Spectroscope": "分光器",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "number {n}": "{n} 台目",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "No readings yet. Put the cross-hair on a line and press “Record reading”.": "まだ読みがありません。十字線を線に合わせて「読みを記録する」を押しましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Five spectra on the same scale from 400 to 700 nanometres: the unknown tube at the top, then the reference line spectra of hydrogen, helium, lithium and mercury. The readings are listed in the text.": "400〜700 ナノメートルの同じ目盛りにそろえた 5 つのスペクトル：いちばん上が未知の管、その下に水素、ヘリウム、リチウム、水銀の基準の線スペクトル。読みは本文に示されている。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "unknown": "未知",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Which elements are in the tube? Choose all that apply.": "管にはどの元素が入っていますか。当てはまるものをすべて選びましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Check": "答え合わせ",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "New unknown tube": "新しい未知の管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Tubes identified correctly": "正しく特定できた管",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Choose at least one element first.": "先に元素を 1 つ以上選びましょう。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "{el} is present: all of its lines ({lines} nm) are in the readings, within ±2 nm.": "{el}は含まれています。すべての線（{lines} nm）が ±2 nm 以内で読みの中にあります。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "{el} is not present: some of its lines ({lines} nm) are missing.": "{el}は含まれていません。線（{lines} nm）の一部がありません。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Correct.": "正解です。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Not quite. An element is present only if every one of its lines is there.": "おしい！ 元素が含まれているといえるのは、その元素のすべての線があるときだけです。",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "{a} of {b}": "{a} / {b}",

    // widget string (assets/js/widgets-lab-flame-tests.js)
    "Readings / nm (±2 nm): {list}": "読み / nm（±2 nm）：{list}",

  }
});
