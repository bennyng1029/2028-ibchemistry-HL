/* s1-3 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-3', {
  strings: {

    // page title (browser tab)
    "1.3 Electron configurations | Structure Lab": "1.3 電子配置 | Structure Lab",

    // Electron configurations > page header > p
    "Structure 1.3": "Structure 1.3",

    // Electron configurations > page header > h1
    // Writing electron configurations > data-toc attribute
    "Electron configurations": "電子配置",

    // Electron configurations > page header > span
    "How can we model the energy states of electrons in atoms?": "原子の中の電子のエネルギー状態は、どのようなモデルで表せるのでしょうか。",

    // What you need to be able to do > data-toc attribute
    "What you need to do": "できるようになること",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "ノートを見ないでできるようになったら、1 つずつチェックを入れましょう。",

    // What you need to be able to do > checklist > span
    "Explain how an emission spectrum is produced: electrons in excited states return to lower energy levels and emit photons.": "発光スペクトルができるしくみを説明できる。励起状態の電子が低いエネルギー準位に戻るときに、光子を放出する。",

    // What you need to be able to do > checklist > span
    "Describe, without calculation, how colour, wavelength, frequency and energy are related across the electromagnetic spectrum.": "電磁スペクトル全体で、色・波長・振動数・エネルギーがどう関係するかを、計算なしで説明できる。",

    // What you need to be able to do > checklist > span
    "Tell a continuous spectrum from a line spectrum.": "連続スペクトルと線スペクトルを見分けられる。",

    // What you need to be able to do > checklist > span
    "Describe the hydrogen emission spectrum: link the lines to transitions down to n = 1, n = 2 and n = 3, and explain what the converging lines show.": "水素の発光スペクトルを説明できる。それぞれの線を n = 1、n = 2、n = 3 へ落ちる遷移と結びつけ、線が収束していくことから何がわかるかを説明できる。",

    // What you need to be able to do > checklist > span
    "Deduce the maximum number of electrons in a main energy level using 2n<sup>2</sup>.": "2n<sup>2</sup> を使って、主エネルギー準位に入る電子の最大数を導ける。",

    // What you need to be able to do > checklist > span
    "Name the sublevels s, p, d and f in order of energy, and recognize the shape and orientation of an s orbital and the three p orbitals.": "副準位 s、p、d、f をエネルギーの順に言える。s 軌道と 3 つの p 軌道の形と向きを見分けられる。",

    // What you need to be able to do > checklist > span
    "Apply the Aufbau principle, Hund’s rule and the Pauli exclusion principle to fill orbitals.": "構成原理、フントの規則、パウリの排他原理を使って、軌道に電子を入れられる。",

    // What you need to be able to do > checklist > span
    "Write full and condensed electron configurations and draw orbital diagrams for atoms and ions up to Z = 36, including the exceptions Cr and Cu.": "Z = 36 までの原子とイオンについて、完全な電子配置と省略形の電子配置を書き、軌道図を描ける。例外の Cr と Cu も含む。",

    // What you need to be able to do > checklist > Additional HL > span
    "Deduce the configurations of ions of the first-row d-block metals, removing 4s electrons before 3d.": "第 4 周期の d ブロック金属のイオンの電子配置を導ける。3d より先に 4s の電子を取り除く。",

    // What you need to be able to do > checklist > Additional HL > span
    "Explain that the limit of convergence corresponds to ionization, and calculate a first ionization energy from the wavelength or frequency of that limit (and the reverse).": "収束限界がイオン化に対応することを説明できる。収束限界の波長または振動数から第一イオン化エネルギーを計算でき、その逆もできる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Explain the trends and the discontinuities in first ionization energy across a period and down a group.": "第一イオン化エネルギーが、周期を左から右へ、族を上から下へどう変わるか、その傾向と不連続を説明できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Deduce the group of an element from its successive ionization energies.": "逐次イオン化エネルギーから、元素の族を導ける。",

    // Light, photons and emission spectra > data-toc attribute
    "Light and emission spectra": "光と発光スペクトル",

    // Light, photons and emission spectra > h2
    "Light, photons and emission spectra": "光・光子・発光スペクトル",

    // Light, photons and emission spectra > p
    "Sprinkle salt into a gas flame and the flame turns yellow. A neon sign glows red. Fireworks get their colours from different metal compounds. In each case, atoms that have been given energy are giving it back out as light.": "ガスの炎に食塩をふりかけると、炎が黄色になります。ネオンサインは赤く光ります。花火の色は、いろいろな金属の化合物から出ています。どの場合も、エネルギーを受け取った原子が、そのエネルギーを光として外に出しています。",

    // Light, photons and emission spectra > p
    "The pattern of light an element gives out is its <dfn data-def=\"The set of wavelengths of light given out by atoms of an element when their excited electrons return to lower energy levels.\">emission spectrum</dfn>. This section explains where that light comes from.": "元素が出す光のパターンを、その元素の<dfn data-def=\"ある元素の原子で、励起された電子が低いエネルギー準位に戻るときに出る光の波長の集まり。\">発光スペクトル <span class=\"en-term\">(emission spectrum)</span></dfn>といいます。このセクションでは、その光がどこから来るのかを説明します。",

    // Light, photons and emission spectra > data-def attribute
    "The set of wavelengths of light given out by atoms of an element when their excited electrons return to lower energy levels.": "ある元素の原子で、励起された電子が低いエネルギー準位に戻るときに出る光の波長の集まり。",

    // Light, photons and emission spectra > h3
    "How an atom emits light": "原子が光を出すしくみ",

    // Light, photons and emission spectra > p
    "Electrons in an atom can only have certain fixed amounts of energy. These allowed energies are called <dfn data-def=\"One of the fixed, allowed energies an electron can have in an atom.\">energy levels</dfn>. Think of a ladder: you can stand on a rung, but not between rungs.": "原子の中の電子は、決まったいくつかのエネルギーしかもてません。この許されたエネルギーを<dfn data-def=\"原子の中の電子がもつことのできる、決まったエネルギーの 1 つ。\">エネルギー準位 <span class=\"en-term\">(energy levels)</span></dfn>といいます。はしごを思い浮かべてください。段の上には立てますが、段と段の間には立てません。",

    // Light, photons and emission spectra > data-def attribute
    "One of the fixed, allowed energies an electron can have in an atom.": "原子の中の電子がもつことのできる、決まったエネルギーの 1 つ。",

    // Light, photons and emission spectra > aria-label attribute
    "Two energy levels. The electron sits on the lower level.": "2 つのエネルギー準位。電子は下の準位にある。",

    // Light, photons and emission spectra > p
    "<b>1. Ground state.</b> The electron is in the lowest energy level available.": "<b>1. 基底状態 (ground state)。</b>電子は、入ることのできるいちばん低いエネルギー準位にあります。",

    // Light, photons and emission spectra > aria-label attribute
    "The electron has moved up to the higher level. An upward arrow shows energy being absorbed.": "電子が上の準位に移っている。上向きの矢印は、エネルギーの吸収を表す。",

    // Light, photons and emission spectra > p
    "<b>2. Excited state.</b> The atom absorbs energy, from heat or electricity. The electron moves up to a higher level.": "<b>2. 励起状態 (excited state)。</b>原子が、熱や電気からエネルギーを吸収します。電子は高い準位に移ります。",

    // Light, photons and emission spectra > aria-label attribute
    "The electron falls back to the lower level. A wavy arrow leaving the atom shows a photon being emitted.": "電子が下の準位に落ちて戻る。原子から出ていく波形の矢印は、光子の放出を表す。",

    // Light, photons and emission spectra > p
    "<b>3. Emission.</b> The electron falls back to a lower level. The energy it loses leaves as one photon of light.": "<b>3. 発光 (emission)。</b>電子が低い準位に落ちて戻ります。失ったエネルギーは、1 個の光子として出ていきます。",

    // Light, photons and emission spectra > figcaption
    "A model of emission with two energy levels. The energy of the photon equals the energy gap between the two levels.": "2 つのエネルギー準位で表した発光のモデル。光子のエネルギーは、2 つの準位のエネルギーの差に等しくなります。",

    // Light, photons and emission spectra > p
    "A <dfn data-def=\"A single packet of light energy. Its energy depends on the frequency of the light.\">photon</dfn> is one packet of light energy. The excited state does not last. When the electron falls, the atom emits exactly one photon, and the photon carries away exactly the energy difference between the two levels.": "<dfn data-def=\"光のエネルギーのひとかたまり。そのエネルギーは光の振動数で決まる。\">光子 <span class=\"en-term\">(photon)</span></dfn>は、光のエネルギーのひとかたまりです。励起状態は長く続きません。電子が落ちるとき、原子は光子をちょうど 1 個放出します。その光子は、2 つの準位のエネルギーの差とちょうど同じエネルギーを運び去ります。",

    // Light, photons and emission spectra > data-def attribute
    "A single packet of light energy. Its energy depends on the frequency of the light.": "光のエネルギーのひとかたまり。そのエネルギーは光の振動数で決まる。",

    // Light, photons and emission spectra > key idea > p
    "Emission spectra are produced by atoms emitting photons when electrons in excited states return to lower energy levels. A big energy gap gives a high-energy photon. A small gap gives a low-energy photon.": "発光スペクトルは、励起状態の電子が低いエネルギー準位に戻るときに、原子が光子を放出することで生じます。エネルギーの差が大きいと、エネルギーの高い光子が出ます。差が小さいと、エネルギーの低い光子が出ます。",

    // Light, photons and emission spectra > h3
    "Colour, wavelength, frequency and energy": "色・波長・振動数・エネルギー",

    // Light, photons and emission spectra > p
    "Light is one kind of electromagnetic radiation. So are radio waves, microwaves, infrared (IR), ultraviolet (UV), X-rays and gamma rays. Together they make up the <dfn>electromagnetic spectrum</dfn>. They differ in wavelength and frequency.": "光は電磁波（電磁放射）の一種です。電波、マイクロ波、赤外線（IR）、紫外線（UV）、X 線、ガンマ線も同じ仲間です。これらをまとめて<dfn>電磁スペクトル <span class=\"en-term\">(electromagnetic spectrum)</span></dfn>といいます。それぞれの違いは、波長と振動数です。",

    // Light, photons and emission spectra > p
    "<dfn data-def=\"The distance from one wave peak to the next. Symbol λ. Often given in nanometres for light.\">Wavelength</dfn> is the distance from one wave peak to the next. <dfn data-def=\"The number of waves that pass a point each second. Symbol f. Unit hertz, Hz, which is the same as s⁻¹.\">Frequency</dfn> is the number of waves passing a point each second. All electromagnetic radiation travels at the same speed in a vacuum, so if the waves are shorter, more of them pass each second.": "<dfn data-def=\"波の山から次の山までの距離。記号は λ。光ではナノメートル（nm）で表すことが多い。\">波長 <span class=\"en-term\">(wavelength)</span></dfn>は、波の山から次の山までの距離です。<dfn data-def=\"ある点を 1 秒間に通る波の数。記号は f。単位はヘルツ（Hz）で、s⁻¹ と同じ。\">振動数 <span class=\"en-term\">(frequency)</span></dfn>は、ある点を 1 秒間に通る波の数です。電磁波はどれも、真空中を同じ速さで進みます。そのため、波が短いほど、1 秒間に通る波の数は多くなります。",

    // Light, photons and emission spectra > data-def attribute
    "The distance from one wave peak to the next. Symbol λ. Often given in nanometres for light.": "波の山から次の山までの距離。記号は λ。光ではナノメートル（nm）で表すことが多い。",

    // Light, photons and emission spectra > data-def attribute
    "The number of waves that pass a point each second. Symbol f. Unit hertz, Hz, which is the same as s⁻¹.": "ある点を 1 秒間に通る波の数。記号は f。単位はヘルツ（Hz）で、s⁻¹ と同じ。",

    // Light, photons and emission spectra > aria-label attribute
    "A wave with long wavelength: only two complete waves fit in the picture.": "波長の長い波。図の中に、波が 2 つ分しか入らない。",

    // Light, photons and emission spectra > p
    "<b>Red light.</b> Longer wavelength, lower frequency, less energy per photon.": "<b>赤い光。</b>波長が長く、振動数が低く、光子 1 個のエネルギーが小さい。",

    // Light, photons and emission spectra > aria-label attribute
    "A wave with short wavelength: about five complete waves fit in the same width.": "波長の短い波。同じ幅に、波が約 5 つ分入る。",

    // Light, photons and emission spectra > p
    "<b>Violet light.</b> Shorter wavelength, higher frequency, more energy per photon.": "<b>紫の光。</b>波長が短く、振動数が高く、光子 1 個のエネルギーが大きい。",

    // Light, photons and emission spectra > figcaption
    "Two waves drawn over the same distance. More waves in the same space means a shorter wavelength and a higher frequency.": "同じ距離に描いた 2 つの波。同じ長さに入る波の数が多いほど、波長は短く、振動数は高くなります。",

    // Light, photons and emission spectra > table > caption
    "The electromagnetic spectrum, in order": "電磁スペクトル（順番に並べたもの）",

    // Light, photons and emission spectra > table > th
    // widget string (assets/js/widgets-s1-3.js)
    "Region": "領域",

    // Light, photons and emission spectra > table > th
    // widget string (assets/js/widgets-s1-3.js)
    "Wavelength": "波長",

    // Light, photons and emission spectra > table > th
    "Frequency": "振動数",

    // Light, photons and emission spectra > table > th
    "Energy per photon": "光子 1 個のエネルギー",

    // Light, photons and emission spectra > table > th
    "radio waves": "電波",

    // Light, photons and emission spectra > table > td
    "longest": "最も長い",

    // Light, photons and emission spectra > table > td
    "lowest": "最も低い",

    // Light, photons and emission spectra > table > th
    "microwaves": "マイクロ波",

    // Light, photons and emission spectra > table > td
    "gets shorter going down the table": "表の下へいくほど短くなる",

    // Light, photons and emission spectra > table > td
    "gets higher going down the table": "表の下へいくほど高くなる",

    // Light, photons and emission spectra > table > th
    // The hydrogen emission spectrum > table > td
    "infrared (IR)": "赤外線（IR）",

    // Light, photons and emission spectra > table > th
    "visible: red (700 nm) to violet (400 nm)": "可視光：赤（700 nm）〜紫（400 nm）",

    // Light, photons and emission spectra > table > th
    // The hydrogen emission spectrum > table > td
    "ultraviolet (UV)": "紫外線（UV）",

    // Light, photons and emission spectra > table > th
    "X-rays": "X 線",

    // Light, photons and emission spectra > table > th
    "gamma rays": "ガンマ線",

    // Light, photons and emission spectra > table > td
    "shortest": "最も短い",

    // Light, photons and emission spectra > table > td
    "highest": "最も高い",

    // Light, photons and emission spectra > key idea > p
    "Energy and frequency go up together. Wavelength goes the opposite way. So: shorter wavelength = higher frequency = higher energy. Within visible light, violet has the most energy per photon and red has the least.": "エネルギーと振動数は、いっしょに大きくなります。波長はその逆です。つまり、波長が短い = 振動数が高い = エネルギーが高い、です。可視光の中では、光子 1 個のエネルギーは紫が最も大きく、赤が最も小さくなります。",

    // Light, photons and emission spectra > data booklet note > p
    "Section 5 of the data booklet shows the electromagnetic spectrum on a wavelength scale, with an arrow for increasing energy and the visible region from 400 nm to 700 nm. Section 15 gives the wavelengths of each colour. You do not need to memorize the numbers.": "データブックレットのセクション 5 には、波長の目盛りで表した電磁スペクトルが載っています。エネルギーが大きくなる向きの矢印と、400 nm から 700 nm の可視領域も示されています。セクション 15 には、それぞれの色の波長が載っています。数値を暗記する必要はありません。",

    // Light, photons and emission spectra > h3
    "Continuous and line spectra": "連続スペクトルと線スペクトル",

    // Light, photons and emission spectra > p
    "Pass white light from a hot filament through a prism and you see every colour, merging smoothly from red to violet. That is a <dfn data-def=\"A spectrum that contains all the wavelengths (or frequencies) in a range, with no gaps.\">continuous spectrum</dfn>: it contains all the wavelengths in a range.": "熱いフィラメントから出る白色光をプリズムに通すと、すべての色が見えます。赤から紫まで、色がなめらかにつながっています。これが<dfn data-def=\"ある範囲の波長（または振動数）を、すき間なくすべて含むスペクトル。\">連続スペクトル <span class=\"en-term\">(continuous spectrum)</span></dfn>です。ある範囲の波長をすべて含んでいます。",

    // Light, photons and emission spectra > data-def attribute
    "A spectrum that contains all the wavelengths (or frequencies) in a range, with no gaps.": "ある範囲の波長（または振動数）を、すき間なくすべて含むスペクトル。",

    // Light, photons and emission spectra > p
    "Now pass an electric current through a tube of low-pressure hydrogen gas. The tube glows. Send that light through a prism and you see only a few sharp coloured lines on a dark background. That is a <dfn data-def=\"A spectrum that contains only certain separate wavelengths (or frequencies), seen as lines.\">line spectrum</dfn>: it contains only certain separate wavelengths.": "次に、低圧の水素ガスを入れた管に電流を流します。管が光ります。その光をプリズムに通すと、暗い背景の上に、色のついた細い線が数本だけ見えます。これが<dfn data-def=\"決まったいくつかの、とびとびの波長（または振動数）だけを含み、線として見えるスペクトル。\">線スペクトル <span class=\"en-term\">(line spectrum)</span></dfn>です。決まったいくつかの、とびとびの波長だけを含んでいます。",

    // Light, photons and emission spectra > data-def attribute
    "A spectrum that contains only certain separate wavelengths (or frequencies), seen as lines.": "決まったいくつかの、とびとびの波長（または振動数）だけを含み、線として見えるスペクトル。",

    // Light, photons and emission spectra > widget > data-title attribute
    "Continuous spectrum and line spectrum": "連続スペクトルと線スペクトル",

    // Light, photons and emission spectra > widget > figcaption
    "Move the wavelength marker. The continuous spectrum has light at every wavelength. Hydrogen emits at only four visible wavelengths. Try 656, 486, 434 and 410 nm.": "波長のマーカーを動かしてみましょう。連続スペクトルには、どの波長にも光があります。水素が可視領域で出す光の波長は 4 つだけです。656、486、434、410 nm を試してみましょう。",

    // Light, photons and emission spectra > p
    "In the lab, the light source is a gas discharge tube and the light is split with a prism or a diffraction grating. You can record what you see (the colours and pattern of lines) and what you measure (the wavelength of each line).": "実験室では、光源に気体放電管を使い、プリズムか回折格子で光を分けます。見えたもの（線の色と並び方）と、測ったもの（それぞれの線の波長）の両方を記録できます。",

    // Light, photons and emission spectra > common mistake > p
    "“Shorter wavelength means lower energy” is the wrong way round. Shorter waves have a higher frequency, and a higher frequency means more energy per photon. Blue and violet photons carry more energy than red ones.": "「波長が短いほどエネルギーが低い」は逆です。波長が短い波は振動数が高く、振動数が高いほど光子 1 個のエネルギーは大きくなります。青や紫の光子は、赤の光子より大きなエネルギーを運びます。",

    // Light, photons and emission spectra > exam tip (shown in English + translation) > p
    "To distinguish the two spectra, say what each contains: a continuous spectrum has <b>all wavelengths (or frequencies)</b> in a range; a line spectrum has <b>only certain, discrete wavelengths (or frequencies)</b>.": "2 つのスペクトルを区別するには、それぞれが何を含むかを書きます。連続スペクトルは、ある範囲の<b>すべての波長（または振動数）</b>を含みます。線スペクトルは、<b>決まったとびとびの波長（または振動数）だけ</b>を含みます。",

    // Light, photons and emission spectra > not needed for IB > p
    "At SL the link between energy, frequency and wavelength is descriptive only. There are no calculations with <span class=\"mono\">E = hf</span> or <span class=\"mono\">c = λf</span> in the SL part of this topic.": "SL では、エネルギー・振動数・波長の関係は、言葉で説明できれば十分です。このトピックの SL の範囲では、<span class=\"mono\">E = hf</span> や <span class=\"mono\">c = λf</span> を使う計算は出ません。",

    // Light, photons and emission spectra > data-title attribute
    "Light and spectra: quick check": "光とスペクトル：確認クイズ",

    // The hydrogen emission spectrum > data-toc attribute
    "The hydrogen spectrum": "水素のスペクトル",

    // The hydrogen emission spectrum > h2
    "The hydrogen emission spectrum": "水素の発光スペクトル",

    // The hydrogen emission spectrum > p
    "Hydrogen is the simplest atom: one proton and one electron. Its line spectrum is the clearest evidence we have that electrons in atoms have fixed energy levels.": "水素は最も単純な原子で、陽子 1 個と電子 1 個からできています。水素の線スペクトルは、原子の中の電子が決まったエネルギー準位をもつことを示す、最もはっきりした証拠です。",

    // The hydrogen emission spectrum > h3
    "Why lines are evidence for energy levels": "線がエネルギー準位の証拠になる理由",

    // The hydrogen emission spectrum > p
    "If the electron in a hydrogen atom could have any energy, it could lose any amount of energy when it falls. The atom would then emit photons of every energy, and you would see a continuous spectrum.": "もし水素原子の電子がどんなエネルギーでももてるなら、落ちるときに失うエネルギーも、どんな大きさにでもなれます。すると原子はあらゆるエネルギーの光子を放出し、連続スペクトルが見えるはずです。",

    // The hydrogen emission spectrum > p
    "That is not what happens. Hydrogen emits only certain wavelengths. So the electron can only lose certain amounts of energy. So the electron can only have certain energies. We say the energy levels are <dfn data-def=\"Separate and fixed, with nothing allowed in between.\">discrete</dfn>.": "実際はそうなりません。水素は決まった波長の光だけを出します。つまり、電子が失うエネルギーは決まった大きさだけです。ということは、電子がもてるエネルギーも決まった値だけです。このことを、エネルギー準位は<dfn data-def=\"1 つ 1 つが分かれていて決まっており、その間の値はとれないこと。\">とびとび <span class=\"en-term\">(discrete)</span></dfn>である、といいます。",

    // The hydrogen emission spectrum > data-def attribute
    "Separate and fixed, with nothing allowed in between.": "1 つ 1 つが分かれていて決まっており、その間の値はとれないこと。",

    // The hydrogen emission spectrum > key idea > p
    "Each line in the spectrum is produced by electrons falling between one particular pair of energy levels. The line emission spectrum of hydrogen is evidence that electrons exist in discrete energy levels.": "スペクトルの 1 本 1 本の線は、ある決まった 2 つのエネルギー準位の間を電子が落ちることで生じます。水素の線スペクトル（発光スペクトル）は、電子がとびとびのエネルギー準位に存在することの証拠です。",

    // The hydrogen emission spectrum > h3
    "The energy levels of hydrogen": "水素のエネルギー準位",

    // The hydrogen emission spectrum > p
    "The main energy levels are numbered <span class=\"mono\">n = 1, 2, 3, …</span> going up in energy. <span class=\"mono\">n = 1</span> is the lowest. The levels are not evenly spaced. The gap from n = 1 to n = 2 is large. Each gap after that is smaller. The levels get closer and closer together and <dfn data-def=\"Get closer and closer together until they meet.\">converge</dfn> at high energy. The point where they meet is labelled <span class=\"mono\">n = ∞</span>.": "主エネルギー準位 (main energy levels) には、エネルギーの低い順に <span class=\"mono\">n = 1, 2, 3, …</span> と番号をつけます。<span class=\"mono\">n = 1</span> が最も低い準位です。準位の間隔は等しくありません。n = 1 と n = 2 の間隔は大きく、その先の間隔はだんだん小さくなります。準位どうしはどんどん近づき、高いエネルギーで<dfn data-def=\"どんどん近づいていき、最後には 1 つに集まること。\">収束 <span class=\"en-term\">(converge)</span></dfn>します。準位が 1 つに集まるところを <span class=\"mono\">n = ∞</span> と表します。",

    // The hydrogen emission spectrum > data-def attribute
    "Get closer and closer together until they meet.": "どんどん近づいていき、最後には 1 つに集まること。",

    // The hydrogen emission spectrum > widget > data-title attribute
    "Hydrogen: from energy levels to spectral lines": "水素：エネルギー準位からスペクトルの線へ",

    // The hydrogen emission spectrum > widget > data-kicker attribute
    "Model": "モデル",

    // The hydrogen emission spectrum > widget > figcaption
    "Choose the level the electron falls from and the level it falls to. The arrow shows the transition, and the line appears on the spectrum below at its measured wavelength. Collect several lines to one level, then press “Show every line in this series” to see them converge. The diagram is drawn to scale. The energy values on the right are there for reference. You do not need to know them.": "電子が落ちる前の準位と、落ちた先の準位を選びましょう。矢印がその遷移（準位の間の移動）を表し、下のスペクトルには、実際に測定された波長の位置に線が現れます。同じ準位へ落ちる線をいくつか集めてから「この系列の線をすべて表示」を押すと、線が収束していくようすが見えます。図は正しい縮尺で描いてあります。右側のエネルギーの値は参考です。覚える必要はありません。",

    // The hydrogen emission spectrum > h3
    "Three sets of lines": "3 組の線",

    // The hydrogen emission spectrum > p
    "The lines fall into sets. Each set contains all the transitions that end on the same lower level.": "線はいくつかの組に分けられます。1 つの組には、同じ下の準位で終わる遷移 (transitions) がすべて入ります。",

    // The hydrogen emission spectrum > table > caption
    "Transitions in the hydrogen emission spectrum": "水素の発光スペクトルの遷移",

    // The hydrogen emission spectrum > table > th
    "Electron falls to": "電子が落ちる先",

    // The hydrogen emission spectrum > table > th
    "Size of the energy drop": "エネルギーの落差",

    // The hydrogen emission spectrum > table > th
    "Region of the spectrum": "スペクトルの領域",

    // The hydrogen emission spectrum > table > td
    "largest": "最大",

    // The hydrogen emission spectrum > table > td
    "medium": "中くらい",

    // The hydrogen emission spectrum > table > td
    "visible (from n = 3, 4, 5, 6)": "可視光（n = 3、4、5、6 から）",

    // The hydrogen emission spectrum > table > td
    "smallest": "最小",

    // The hydrogen emission spectrum > p
    "The four visible lines come from electrons falling to n = 2. The red line is the smallest of these drops (from n = 3). The violet line is the largest of the four (from n = 6).": "可視領域の 4 本の線は、電子が n = 2 へ落ちるときに生じます。赤い線は、このうち落差が最も小さいもの（n = 3 から）です。紫の線は、4 本のうち落差が最も大きいもの（n = 6 から）です。",

    // The hydrogen emission spectrum > h3
    "Convergence": "収束",

    // The hydrogen emission spectrum > p
    "Within each set, the lines get closer together as the frequency gets higher. Eventually they merge. This happens because the energy levels themselves get closer together at higher energy. A drop from n = 6 is only a little bigger than a drop from n = 5, so their two lines sit close together.": "それぞれの組の中では、振動数が高くなるほど線の間隔がせまくなります。最後には 1 つに重なります。これは、エネルギー準位そのものが、高いエネルギーほど近づいているからです。n = 6 からの落差は n = 5 からの落差より少し大きいだけなので、2 本の線は近くに並びます。",

    // The hydrogen emission spectrum > common mistake > p
    "The lines converge at the <b>high-energy</b> end of each set: high frequency, short wavelength. They do not converge at the low-energy end. In the visible set, the lines bunch together towards violet, not towards red.": "線は、それぞれの組の<b>エネルギーが高い</b>側で収束します。つまり、振動数が高く、波長が短い側です。エネルギーが低い側では収束しません。可視領域の組では、線は赤ではなく紫のほうに集まります。",

    // The hydrogen emission spectrum > common mistake > p
    "The visible lines end on n = 2, not on n = 1. Drops to n = 1 release so much energy that the photons are ultraviolet, which you cannot see.": "可視領域の線は、n = 1 ではなく n = 2 で終わります。n = 1 へ落ちるときはとても大きなエネルギーが出るので、光子は紫外線になり、目には見えません。",

    // The hydrogen emission spectrum > exam tip (shown in English + translation) > p
    "“Describe the emission spectrum of hydrogen” wants: a series of <b>lines</b> (not a continuous band); the lines <b>converge at higher frequency or energy</b>; lines arise from electron transitions from higher levels <b>down to</b> a lower level (n = 2 for visible). On a diagram, emission arrows point <b>downwards</b>. An arrow pointing up shows an electron gaining energy, which is not emission.": "「水素の発光スペクトルを記述しなさい」と問われたら、次のことを書きます。ひと続きの帯ではなく、何本もの<b>線</b>であること。線は<b>振動数（エネルギー）が高いほうで収束する</b>こと。線は、高い準位から低い準位<b>へ落ちる</b>電子遷移で生じること（可視光なら n = 2）。図では、発光の矢印を<b>下向き</b>に描きます。上向きの矢印は電子がエネルギーを得ることを表すので、発光ではありません。",

    // The hydrogen emission spectrum > not needed for IB > p
    "The names of the sets of lines (Lyman, Balmer, Paschen) will not be assessed. You do not need the Rydberg equation, a formula for the energy of each level, or the energy values printed on the diagram above. Transitions ending on levels above n = 3 are not required either.": "線の組の名前（ライマン、バルマー、パッシェン）は、試験に出ません。リュードベリの式、各準位のエネルギーを求める式、上の図に書いてあるエネルギーの値も必要ありません。n = 3 より上の準位で終わる遷移も範囲外です。",

    // The hydrogen emission spectrum > data-title attribute
    "Hydrogen spectrum: quick check": "水素のスペクトル：確認クイズ",

    // Main energy levels and 2n2 > data-toc attribute
    "Main energy levels and 2n²": "主エネルギー準位と 2n²",

    // Main energy levels and 2n2 > h2
    "Main energy levels and 2n<sup>2</sup>": "主エネルギー準位と 2n<sup>2</sup>",

    // Main energy levels and 2n2 > p
    "Atoms with more than one electron also have main energy levels numbered n = 1, 2, 3 and so on. Think of them as the floors of a building, with n = 1 on the ground floor, closest to the nucleus. Each floor has a limited number of places.": "電子が 2 個以上ある原子にも、n = 1、2、3… と番号のついた主エネルギー準位があります。建物の階だと考えてください。n = 1 が 1 階で、原子核にいちばん近い階です。どの階も、入れる数に限りがあります。",

    // Main energy levels and 2n2 > equation > maths line
    "maximum number of electrons = 2<i>n</i><sup>2</sup>": "電子の最大数 = 2<i>n</i><sup>2</sup>",

    // Main energy levels and 2n2 > equation > dd
    "the number of the main energy level: a whole number, 1, 2, 3, … (no unit)": "主エネルギー準位の番号。1、2、3… の整数（単位なし）",

    // Main energy levels and 2n2 > table > caption
    "How many electrons each main energy level can hold": "それぞれの主エネルギー準位に入る電子の数",

    // Main energy levels and 2n2 > table > th
    "Working": "計算",

    // Main energy levels and 2n2 > table > th
    // Sublevels and orbital shapes > table > th
    "Maximum electrons": "電子の最大数",

    // Main energy levels and 2n2 > common mistake > p
    "Square first, then double. For n = 3, <span class=\"mono\">2n<sup>2</sup></span> is <span class=\"mono\">2 × 9 = 18</span>, not <span class=\"mono\">(2 × 3)<sup>2</sup> = 36</span>. And 18 is the number that n = 3 can hold on its own, not the running total for n = 1 to 3.": "先に 2 乗して、それから 2 倍します。n = 3 のとき、<span class=\"mono\">2n<sup>2</sup></span> は <span class=\"mono\">2 × 9 = 18</span> です。<span class=\"mono\">(2 × 3)<sup>2</sup> = 36</span> ではありません。また、18 は n = 3 だけに入る数です。n = 1 から 3 までの合計ではありません。",

    // Main energy levels and 2n2 > try it > data-label attribute
    // Writing electron configurations > try it > data-label attribute
    "Number of electrons": "電子の数",

    // Main energy levels and 2n2 > try it > p
    "What is the maximum number of electrons that can occupy the n = 4 main energy level?": "n = 4 の主エネルギー準位に入る電子の最大数はいくつですか。",

    // Main energy levels and 2n2 > try it > li
    "Use 2n<sup>2</sup>. Which do you do first: square, or multiply by 2?": "2n<sup>2</sup> を使います。2 乗するのと 2 倍するのと、どちらが先ですか。",

    // Main energy levels and 2n2 > try it > li
    "Square n first: <span class=\"mono\">4<sup>2</sup> = 16</span>. Then double it.": "先に n を 2 乗します：<span class=\"mono\">4<sup>2</sup> = 16</span>。それから 2 倍します。",

    // Main energy levels and 2n2 > data-title attribute
    "Main energy levels: quick check": "主エネルギー準位：確認クイズ",

    // Sublevels and orbital shapes > data-toc attribute
    "Sublevels and orbitals": "副準位と軌道",

    // Sublevels and orbital shapes > h2
    "Sublevels and orbital shapes": "副準位と軌道の形",

    // Sublevels and orbital shapes > p
    "Stay with the building picture. Each floor (main energy level) is divided into corridors called <dfn data-def=\"A division of a main energy level. The four types are s, p, d and f.\">sublevels</dfn>. Each corridor contains rooms called <dfn data-def=\"A region of space where there is a high probability of finding an electron. One orbital holds at most two electrons, with opposite spins.\">orbitals</dfn>. Each room holds at most two electrons.": "建物のたとえを続けましょう。それぞれの階（主エネルギー準位）は、<dfn data-def=\"主エネルギー準位をさらに分けたもの。s、p、d、f の 4 種類がある。\">副準位 <span class=\"en-term\">(sublevels)</span></dfn>という廊下に分かれています。それぞれの廊下には、<dfn data-def=\"電子が見つかる確率が高い空間の領域。1 つの軌道には、スピンが逆向きの電子が最大 2 個まで入る。\">軌道 <span class=\"en-term\">(orbitals)</span></dfn>という部屋があります。1 つの部屋に入れる電子は、最大 2 個です。",

    // Sublevels and orbital shapes > data-def attribute
    "A division of a main energy level. The four types are s, p, d and f.": "主エネルギー準位をさらに分けたもの。s、p、d、f の 4 種類がある。",

    // Sublevels and orbital shapes > data-def attribute
    "A region of space where there is a high probability of finding an electron. One orbital holds at most two electrons, with opposite spins.": "電子が見つかる確率が高い空間の領域。1 つの軌道には、スピンが逆向きの電子が最大 2 個まで入る。",

    // Sublevels and orbital shapes > p
    "There are four types of sublevel: <span class=\"mono\">s</span>, <span class=\"mono\">p</span>, <span class=\"mono\">d</span> and <span class=\"mono\">f</span>. Within one main energy level, their energy increases in that order: s is lowest, then p, then d, then f.": "副準位には <span class=\"mono\">s</span>、<span class=\"mono\">p</span>、<span class=\"mono\">d</span>、<span class=\"mono\">f</span> の 4 種類があります。同じ主エネルギー準位の中では、この順にエネルギーが高くなります。s が最も低く、次が p、その次が d、そして f です。",

    // Sublevels and orbital shapes > table > caption
    "The four types of sublevel": "4 種類の副準位",

    // Sublevels and orbital shapes > table > th
    "Sublevel": "副準位",

    // Sublevels and orbital shapes > table > th
    // Sublevels and orbital shapes > try it > data-label attribute
    "Number of orbitals": "軌道の数",

    // Sublevels and orbital shapes > p
    "Main energy level n contains n types of sublevel. A sublevel is named by its level number and its letter, such as <span class=\"mono\">2p</span> or <span class=\"mono\">3d</span>.": "主エネルギー準位 n には、n 種類の副準位があります。副準位は、準位の番号と文字で <span class=\"mono\">2p</span> や <span class=\"mono\">3d</span> のように表します。",

    // Sublevels and orbital shapes > table > caption
    "What each main energy level contains": "それぞれの主エネルギー準位の中身",

    // Sublevels and orbital shapes > table > th
    "Sublevels": "副準位",

    // Sublevels and orbital shapes > table > th
    "Orbitals": "軌道の数",

    // Sublevels and orbital shapes > table > th
    "Maximum electrons (2n<sup>2</sup>)": "電子の最大数（2n<sup>2</sup>）",

    // Sublevels and orbital shapes > p
    "The two tables agree. Two electrons per orbital, times the number of orbitals, gives 2n<sup>2</sup> every time.": "2 つの表は合っています。軌道 1 つに電子 2 個、これに軌道の数をかけると、いつも 2n<sup>2</sup> になります。",

    // Sublevels and orbital shapes > h3
    "What an orbital looks like": "軌道はどんな形？",

    // Sublevels and orbital shapes > p
    "An electron is not a tiny planet on a fixed track. We cannot say exactly where it is. An orbital is a region of space where there is a high probability of finding the electron. You need to recognize two shapes.": "電子は、決まった道を回る小さな惑星ではありません。電子がどこにあるかを正確に言うことはできません。軌道とは、電子が見つかる確率が高い空間の領域のことです。見分けられるようにする形は 2 つです。",

    // Sublevels and orbital shapes > widget > data-title attribute
    "Shapes of the s orbital and the three p orbitals": "s 軌道と 3 つの p 軌道の形",

    // Sublevels and orbital shapes > widget > data-kicker attribute
    "Recognize only": "形を見分けるだけ",

    // Sublevels and orbital shapes > widget > figcaption
    "An s orbital is a sphere. A p orbital is a dumbbell. The three p orbitals in a sublevel have the same shape and energy but point along three different axes, at right angles to each other. The nucleus is at the point where the axes cross.": "s 軌道は球形です。p 軌道は亜鈴形（ダンベル形）です。同じ副準位の 3 つの p 軌道は、形もエネルギーも同じですが、互いに直角な 3 本の軸に沿って、別々の方向を向いています。原子核は、軸が交わる点にあります。",

    // Sublevels and orbital shapes > common mistake > p
    "“Orbit”, “orbital”, “sublevel” and “energy level” are not the same thing. An orbital is one region holding up to two electrons. A sublevel is a set of orbitals of the same type (the 2p sublevel has three orbitals). A main energy level is a set of sublevels.": "英語の orbit（惑星の通り道のような軌道）、orbital（軌道）、sublevel（副準位）、energy level（エネルギー準位）は、同じものではありません。軌道 (orbital) は、電子が最大 2 個入る 1 つの領域です。副準位は、同じ種類の軌道の集まりです（2p 副準位には軌道が 3 つあります）。主エネルギー準位は、副準位の集まりです。",

    // Sublevels and orbital shapes > not needed for IB > p
    "You only need to recognize the s shape and the three p shapes. Shapes of d and f orbitals, quantum numbers, nodes, wave functions, the Schrödinger equation and the Heisenberg uncertainty principle are not in the IB Chemistry guide.": "見分けられればよいのは、s 軌道の形と 3 つの p 軌道の形だけです。d 軌道と f 軌道の形、量子数、節、波動関数、シュレーディンガー方程式、ハイゼンベルクの不確定性原理は、IB 化学の『指導の手引き』にはありません。",

    // Sublevels and orbital shapes > try it > p
    "How many orbitals are there in total in the n = 3 main energy level?": "n = 3 の主エネルギー準位には、軌道が全部でいくつありますか。",

    // Sublevels and orbital shapes > try it > li
    "List the sublevels in n = 3 first. There are three types.": "まず、n = 3 にある副準位を挙げましょう。3 種類あります。",

    // Sublevels and orbital shapes > try it > li
    "3s has 1 orbital, 3p has 3 and 3d has 5. Add them.": "3s には軌道が 1 つ、3p には 3 つ、3d には 5 つあります。これを足します。",

    // Sublevels and orbital shapes > try it > maths line
    "1 (3s) + 3 (3p) + 5 (3d) = 9 orbitals": "1 (3s) + 3 (3p) + 5 (3d) = 9 個の軌道",

    // Sublevels and orbital shapes > try it > p
    "Check: 9 orbitals × 2 electrons = 18 electrons, which matches 2n<sup>2</sup> for n = 3.": "確認：軌道 9 個 × 電子 2 個 = 電子 18 個。n = 3 のときの 2n<sup>2</sup> と合っています。",

    // Sublevels and orbital shapes > data-title attribute
    "Sublevels and orbitals: quick check": "副準位と軌道：確認クイズ",

    // Writing electron configurations > h2
    "Writing electron configurations": "電子配置の書き方",

    // Writing electron configurations > p
    "An <dfn data-def=\"A list showing which sublevels the electrons of an atom or ion occupy, and how many electrons are in each.\">electron configuration</dfn> is the address list for the electrons in an atom: which sublevels are occupied, and by how many electrons. For sodium it is <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. The big number is the main energy level, the letter is the sublevel, and the superscript is the number of electrons in it.": "<dfn data-def=\"原子やイオンの電子がどの副準位に入っているか、それぞれに何個入っているかを示したもの。\">電子配置 <span class=\"en-term\">(electron configuration)</span></dfn>は、原子の中の電子の住所録のようなものです。どの副準位に、電子が何個入っているかを表します。ナトリウム Na では <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span> です。大きく書いた数字が主エネルギー準位、文字が副準位、上付きの数字がそこに入っている電子の数です。",

    // Writing electron configurations > data-def attribute
    "A list showing which sublevels the electrons of an atom or ion occupy, and how many electrons are in each.": "原子やイオンの電子がどの副準位に入っているか、それぞれに何個入っているかを示したもの。",

    // Writing electron configurations > h3
    "Three rules for filling orbitals": "軌道に電子を入れる 3 つの規則",

    // Writing electron configurations > p
    "Picture people getting onto a bus. They take the nearest seats first. They each take an empty double seat before anyone sits next to a stranger. And a double seat holds two people at most. Electrons follow three rules that work the same way.": "バスに乗る人たちを思い浮かべてください。まず、近い席から座ります。次に、知らない人の隣に座る前に、空いている 2 人がけの席に 1 人ずつ座ります。そして、2 人がけの席に座れるのは 2 人までです。電子も、これと同じような 3 つの規則に従います。",

    // Writing electron configurations > table > caption
    "The three rules, and what each one tells you to do": "3 つの規則と、それぞれですること",

    // Writing electron configurations > table > th
    "Rule": "規則",

    // Writing electron configurations > table > th
    "What it says": "内容",

    // Writing electron configurations > table > th
    "In a diagram": "図では",

    // Writing electron configurations > table > th
    "Aufbau principle": "構成原理 (Aufbau principle)",

    // Writing electron configurations > table > td
    "Electrons fill the lowest-energy sublevel that has space, before going into a higher one.": "電子は、空きのある副準位のうち、エネルギーが最も低いものから入る。そのあとで高い副準位に入る。",

    // Writing electron configurations > table > td
    "Fill from the bottom up.": "下から順に入れる。",

    // Writing electron configurations > table > th
    "Hund’s rule": "フントの規則 (Hund’s rule)",

    // Writing electron configurations > table > td
    "Within a sublevel, every orbital gets one electron before any orbital gets a second. The single electrons have the same spin.": "1 つの副準位の中では、すべての軌道に電子が 1 個ずつ入ってから、2 個目が入る。1 個だけ入っている電子どうしは、スピンの向きが同じ。",

    // Writing electron configurations > table > td
    "One arrow in each box first, all pointing the same way. Then go back and pair.": "まず、どの箱にも矢印を 1 本ずつ、すべて同じ向きに入れる。それから戻って対にする。",

    // Writing electron configurations > table > th
    "Pauli exclusion principle": "パウリの排他原理 (Pauli exclusion principle)",

    // Writing electron configurations > table > td
    "An orbital holds at most two electrons, and the two must have opposite spins.": "1 つの軌道に入る電子は最大 2 個で、その 2 個のスピンは逆向きでなければならない。",

    // Writing electron configurations > table > td
    "Never more than two arrows in a box: one up, one down.": "1 つの箱に入る矢印は 2 本まで。上向き 1 本と下向き 1 本。",

    // Writing electron configurations > p
    "<dfn data-def=\"A property of an electron that has two possible values, drawn as an up arrow or a down arrow.\">Spin</dfn> is a property of an electron with two possible values. We draw them as an up arrow and a down arrow.": "<dfn data-def=\"電子がもつ性質で、2 通りの値がある。上向きの矢印か下向きの矢印で表す。\">スピン <span class=\"en-term\">(spin)</span></dfn>は電子がもつ性質で、2 通りの値があります。上向きの矢印と下向きの矢印で表します。",

    // Writing electron configurations > data-def attribute
    "A property of an electron that has two possible values, drawn as an up arrow or a down arrow.": "電子がもつ性質で、2 通りの値がある。上向きの矢印か下向きの矢印で表す。",

    // Writing electron configurations > h3
    "The filling order": "電子が入る順番",

    // Writing electron configurations > p
    "For the elements you need (up to Z = 36), the sublevels fill in this order:": "学習する範囲の元素（Z = 36 まで）では、副準位にこの順番で電子が入ります。",

    // Writing electron configurations > equation > dd
    "holds up to 2 electrons": "電子が最大 2 個入る",

    // Writing electron configurations > equation > dd
    "holds up to 6 electrons": "電子が最大 6 個入る",

    // Writing electron configurations > equation > dd
    "holds up to 10 electrons": "電子が最大 10 個入る",

    // Writing electron configurations > p
    "The one surprise is that <b>4s fills before 3d</b>. In an atom where both are empty, the 4s sublevel is slightly lower in energy than 3d, so potassium and calcium put their outer electrons into 4s.": "1 つだけ意外なのは、<b>3d より先に 4s に入る</b>ことです。どちらも空の原子では、4s 副準位のほうが 3d よりエネルギーが少し低くなっています。そのため、カリウム K とカルシウム Ca では、外側の電子が 4s に入ります。",

    // Writing electron configurations > h3
    "Three ways to show a configuration": "電子配置の 3 つの表し方",

    // Writing electron configurations > p
    "<b>Full configuration.</b> Every sublevel is written out: <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span> for sulfur.": "<b>完全な電子配置 (full configuration)。</b>すべての副準位を書きます。硫黄 S では <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span> です。",

    // Writing electron configurations > p
    "<b>Condensed configuration.</b> The inner electrons are replaced by the symbol of the previous noble gas in square brackets: <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span> for sulfur. The noble gas cores you need are <span class=\"mono\">[He]</span> = 2 electrons, <span class=\"mono\">[Ne]</span> = 10 and <span class=\"mono\">[Ar]</span> = 18.": "<b>省略形の電子配置 (condensed configuration)。</b>内側の電子を、1 つ前の貴ガスの元素記号を角かっこに入れたもので置き換えます。硫黄では <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span> です。覚えておく貴ガスの芯 (noble gas core) は、<span class=\"mono\">[He]</span> = 電子 2 個、<span class=\"mono\">[Ne]</span> = 10 個、<span class=\"mono\">[Ar]</span> = 18 個です。",

    // Writing electron configurations > p
    "<b>Orbital diagram</b> (arrow-in-box diagram). Each orbital is a box and each electron is an arrow. Boxes for higher-energy sublevels are drawn higher up. This is the only notation that shows Hund’s rule and spin.": "<b>軌道図 (orbital diagram)</b>（箱と矢印の図）。軌道 1 つを箱 1 つ、電子 1 個を矢印 1 本で表します。エネルギーの高い副準位の箱ほど、上に描きます。フントの規則とスピンを示せるのは、この書き方だけです。",

    // Writing electron configurations > widget > data-title attribute
    "Electron configuration builder": "電子配置ビルダー",

    // Writing electron configurations > widget > figcaption
    "Choose any element up to krypton, then an atom or one of its common ions. In “Fill it yourself” mode, click a box to add an electron. If you break a rule, the builder names it and the electron is not placed. Try chromium and copper.": "クリプトンまでの元素を 1 つ選び、次に原子か、よくあるイオンを選びましょう。「自分で入れる」モードでは、箱をクリックすると電子が 1 個入ります。規則を破ると、どの規則かが表示され、電子は入りません。クロムと銅を試してみましょう。",

    // Writing electron configurations > worked example > h3
    "Configuration and orbital diagram of iron": "鉄の電子配置と軌道図",

    // Writing electron configurations > worked example > p
    "Deduce the full electron configuration and the condensed electron configuration of an iron atom, Fe (Z = 26). Draw the orbital diagram for its 4s and 3d sublevels.": "鉄原子 Fe（Z = 26）の完全な電子配置と省略形の電子配置を導きなさい (deduce)。また、4s と 3d の副準位の軌道図を描きなさい (draw)。",

    // Writing electron configurations > worked example > data-title attribute
    "Count the electrons": "電子を数える",

    // Writing electron configurations > worked example > p
    "A neutral atom has the same number of electrons as protons, and Z is the number of protons.": "電気的に中性の原子では、電子の数は陽子の数と同じです。Z は陽子の数です。",

    // Writing electron configurations > worked example > maths line
    "Fe: Z = 26, so 26 electrons": "Fe：Z = 26 なので、電子は 26 個",

    // Writing electron configurations > worked example > data-title attribute
    "Fill in order, counting as you go": "順番に入れながら、数えていく",

    // Writing electron configurations > worked example > p
    "Aufbau principle: lowest energy first. Keep a running total so you know when to stop.": "構成原理：エネルギーの低いところから先に入れます。どこで止めるかがわかるように、入れた電子の合計を書いていきます。",

    // Writing electron configurations > worked example > maths line
    "6 electrons left → 3d<sup>6</sup> (26)": "残りの電子 6 個 → 3d<sup>6</sup> (26)",

    // Writing electron configurations > worked example > data-title attribute
    "Write the full configuration": "完全な電子配置を書く",

    // Writing electron configurations > worked example > p
    "Check that the superscripts add up to 26.": "上付きの数字の合計が 26 になることを確かめます。",

    // Writing electron configurations > worked example > data-title attribute
    "Condense with the noble gas core": "貴ガスの芯を使って省略する",

    // Writing electron configurations > worked example > p
    "The first 18 electrons, up to 3p<sup>6</sup>, are the configuration of argon. Replace them with [Ar].": "3p<sup>6</sup> までの最初の 18 個の電子は、アルゴンの電子配置と同じです。これを [Ar] に置き換えます。",

    // Writing electron configurations > worked example > data-title attribute
    "Draw the boxes": "箱を描く",

    // Writing electron configurations > worked example > p
    "Hund’s rule: put one electron in each of the five 3d boxes first (5 electrons), then pair the sixth. Pauli: the pair has opposite spins.": "フントの規則：まず 5 つの 3d の箱に電子を 1 個ずつ入れ（5 個）、6 個目で対をつくります。パウリの排他原理：対になった 2 個はスピンが逆向きです。",

    // Writing electron configurations > worked example > maths line
    "4 unpaired electrons": "不対電子 4 個",

    // Writing electron configurations > worked example > p
    "Full: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup>. Condensed: [Ar] 4s<sup>2</sup> 3d<sup>6</sup>. In a full diagram the 3d boxes are drawn slightly higher than the 4s box.": "完全な電子配置：1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup>。省略形：[Ar] 4s<sup>2</sup> 3d<sup>6</sup>。完全な軌道図では、3d の箱を 4s の箱より少し高い位置に描きます。",

    // Writing electron configurations > exam tip (shown in English + translation) > p
    "Examiners accept the 4s and 3d sublevels in either order: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> or <span class=\"mono\">[Ar] 3d<sup>6</sup> 4s<sup>2</sup></span>. This site writes them in filling order. If the question says “full”, do not use a noble gas core.": "試験では、4s と 3d の副準位はどちらの順で書いても正解になります。<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> でも <span class=\"mono\">[Ar] 3d<sup>6</sup> 4s<sup>2</sup></span> でもかまいません。このサイトでは、電子が入る順に書いています。問題に「full（完全な）」とあったら、貴ガスの芯を使ってはいけません。",

    // Writing electron configurations > h3
    "Two exceptions: chromium and copper": "2 つの例外：クロムと銅",

    // Writing electron configurations > p
    "Following the filling order, you would expect chromium to be <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span> and copper to be <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>. Both are wrong. In each atom, one electron sits in 3d instead of 4s.": "電子が入る順番どおりなら、クロム Cr は <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>、銅 Cu は <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span> になりそうです。どちらも間違いです。どちらの原子でも、電子 1 個が 4s ではなく 3d に入っています。",

    // Writing electron configurations > table > caption
    "The two exceptions you must know": "必ず覚える 2 つの例外",

    // Writing electron configurations > table > th
    "Atom": "原子",

    // Writing electron configurations > table > th
    "Expected (wrong)": "予想（間違い）",

    // Writing electron configurations > table > th
    "Actual": "実際",

    // Writing electron configurations > table > th
    "4s and 3d boxes": "4s と 3d の箱",

    // Writing electron configurations > table > th
    "Cr (Z = 24)": "Cr（Z = 24）",

    // Writing electron configurations > table > td
    "[Ar] 4s<sup>2</sup> 3d<sup>4</sup>": "[Ar] 4s<sup>2</sup> 3d<sup>4</sup>",

    // Writing electron configurations > table > td
    "<b>[Ar] 4s<sup>1</sup> 3d<sup>5</sup></b>": "<b>[Ar] 4s<sup>1</sup> 3d<sup>5</sup></b>",

    // Writing electron configurations > table > th
    "Cu (Z = 29)": "Cu（Z = 29）",

    // Writing electron configurations > table > td
    "[Ar] 4s<sup>2</sup> 3d<sup>9</sup>": "[Ar] 4s<sup>2</sup> 3d<sup>9</sup>",

    // Writing electron configurations > table > td
    "<b>[Ar] 4s<sup>1</sup> 3d<sup>10</sup></b>": "<b>[Ar] 4s<sup>1</sup> 3d<sup>10</sup></b>",

    // Writing electron configurations > p
    "The 4s and 3d sublevels are very close in energy. For these two atoms, the arrangement with one electron in 4s has the lower energy overall.": "4s と 3d の副準位は、エネルギーがとても近くなっています。この 2 つの原子では、4s に電子が 1 個だけ入る配置のほうが、全体のエネルギーが低くなります。",

    // Writing electron configurations > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Writing electron configurations > worked example > h3
    "Chromium and copper": "クロムと銅",

    // Writing electron configurations > worked example > p
    "State the condensed electron configurations of a chromium atom (Z = 24) and a copper atom (Z = 29), and the number of unpaired electrons in each.": "クロム原子（Z = 24）と銅原子（Z = 29）について、省略形の電子配置と不対電子の数を述べなさい (state)。",

    // Writing electron configurations > worked example > data-title attribute
    "Find the electrons after the argon core": "アルゴンの芯のあとの電子を数える",

    // Writing electron configurations > worked example > p
    "Argon accounts for 18 electrons. The rest go into 4s and 3d.": "アルゴンの分が 18 個です。残りは 4s と 3d に入ります。",

    // Writing electron configurations > worked example > maths line
    "Cr: 24 − 18 = 6 electrons Cu: 29 − 18 = 11 electrons": "Cr：24 − 18 = 6 個の電子　　Cu：29 − 18 = 11 個の電子",

    // Writing electron configurations > worked example > data-title attribute
    "Spot the exception": "例外に気づく",

    // Writing electron configurations > worked example > p
    "Cr and Cu are the two atoms where 4s holds one electron, not two. If the filling order gives you 3d<sup>4</sup> or 3d<sup>9</sup>, stop and move one electron from 4s to 3d.": "Cr と Cu は、4s の電子が 2 個ではなく 1 個になる 2 つの原子です。電子が入る順番どおりにして 3d<sup>4</sup> か 3d<sup>9</sup> になったら、そこで止まって、電子を 1 個 4s から 3d に移します。",

    // Writing electron configurations > worked example > data-title attribute
    "Count unpaired electrons from the boxes": "箱から不対電子を数える",

    // Writing electron configurations > worked example > p
    "Hund’s rule: five d electrons occupy the five d orbitals singly. Ten d electrons fill all five orbitals in pairs.": "フントの規則：d 電子が 5 個なら、5 つの d 軌道に 1 個ずつ入ります。d 電子が 10 個なら、5 つの軌道すべてで対になります。",

    // Writing electron configurations > worked example > maths line
    "Cr: 1 (in 4s) + 5 (in 3d) = 6 unpaired": "Cr：1 (4s) + 5 (3d) = 不対電子 6 個",

    // Writing electron configurations > worked example > maths line
    "Cu: 1 (in 4s) + 0 (in 3d) = 1 unpaired": "Cu：1 (4s) + 0 (3d) = 不対電子 1 個",

    // Writing electron configurations > worked example > p
    "Cr: [Ar] 4s<sup>1</sup> 3d<sup>5</sup>, 6 unpaired electrons. Cu: [Ar] 4s<sup>1</sup> 3d<sup>10</sup>, 1 unpaired electron.": "Cr：[Ar] 4s<sup>1</sup> 3d<sup>5</sup>、不対電子 6 個。Cu：[Ar] 4s<sup>1</sup> 3d<sup>10</sup>、不対電子 1 個。",

    // Writing electron configurations > not needed for IB > p
    "Cr and Cu are the only exceptions you need, and you are asked to know them, not to explain them. You do not need configurations beyond Z = 36 (krypton), or exceptions among heavier elements.": "覚える例外は Cr と Cu だけです。求められるのは知っていることで、理由の説明ではありません。Z = 36（クリプトン）より先の電子配置や、もっと重い元素の例外は必要ありません。",

    // Writing electron configurations > h3
    "Ions": "イオン",

    // Writing electron configurations > p
    "For an ion, start from the atom and then change the number of electrons.": "イオンでは、まず原子の電子配置を書き、それから電子の数を変えます。",

    // Writing electron configurations > li
    "<b>Negative ion:</b> add electrons to the next available space. <span class=\"chem\">Cl-</span> has 17 + 1 = 18 electrons.": "<b>陰イオン：</b>次に空いているところへ電子を加えます。<span class=\"chem\">Cl-</span> の電子は 17 + 1 = 18 個です。",

    // Writing electron configurations > li
    "<b>Positive ion:</b> remove electrons from the highest main energy level. <span class=\"chem\">Ca^2+</span> has 20 − 2 = 18 electrons.": "<b>陽イオン：</b>最も高い主エネルギー準位から電子を取り除きます。<span class=\"chem\">Ca^2+</span> の電子は 20 − 2 = 18 個です。",

    // Writing electron configurations > worked example > data-kicker attribute
    "Worked example 3": "例題 3",

    // Writing electron configurations > worked example > h3
    "The ions in calcium sulfide": "硫化カルシウムのイオン",

    // Writing electron configurations > worked example > p
    "Calcium sulfide, <span class=\"chem\">CaS</span>, contains <span class=\"chem\">Ca^2+</span> and <span class=\"chem\">S^2-</span> ions. Deduce the full electron configuration of each ion.": "硫化カルシウム <span class=\"chem\">CaS</span> は、<span class=\"chem\">Ca^2+</span> と <span class=\"chem\">S^2-</span> のイオンからできています。それぞれのイオンの完全な電子配置を導きなさい (deduce)。",

    // Writing electron configurations > worked example > data-title attribute
    "Write the atoms first": "まず原子の電子配置を書く",

    // Writing electron configurations > worked example > p
    "An ion’s configuration is built from the atom’s. Ca has Z = 20 and S has Z = 16.": "イオンの電子配置は、原子の電子配置をもとにつくります。Ca は Z = 20、S は Z = 16 です。",

    // Writing electron configurations > worked example > data-title attribute
    "Remove two electrons from Ca": "Ca から電子を 2 個取り除く",

    // Writing electron configurations > worked example > p
    "A 2+ ion has lost two electrons. They come from the highest main energy level, which is 4s.": "2+ のイオンは、電子を 2 個失っています。電子は最も高い主エネルギー準位、つまり 4s から出ていきます。",

    // Writing electron configurations > worked example > maths line
    "Ca<sup>2+</sup>: 20 − 2 = 18 electrons → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>": "Ca<sup>2+</sup>：20 − 2 = 電子 18 個 → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>",

    // Writing electron configurations > worked example > data-title attribute
    "Add two electrons to S": "S に電子を 2 個加える",

    // Writing electron configurations > worked example > p
    "A 2− ion has gained two electrons. They go into the next space, which is in 3p.": "2− のイオンは、電子を 2 個受け取っています。電子は次に空いているところ、つまり 3p に入ります。",

    // Writing electron configurations > worked example > maths line
    "S<sup>2−</sup>: 16 + 2 = 18 electrons → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>": "S<sup>2−</sup>：16 + 2 = 電子 18 個 → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>",

    // Writing electron configurations > worked example > data-title attribute
    "Check against a noble gas": "貴ガスと比べて確かめる",

    // Writing electron configurations > worked example > data-label attribute
    // Writing electron configurations > worked example > Additional HL > data-label attribute
    "Check": "確認",

    // Writing electron configurations > worked example > p
    "Both ions have 18 electrons, the same configuration as an argon atom. That is a good sign for ions of main-group elements.": "どちらのイオンも電子は 18 個で、アルゴン原子と同じ電子配置です。典型元素のイオンでは、これは正しくできている目安になります。",

    // Writing electron configurations > worked example > p
    "Both ions are 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>.": "どちらのイオンも 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> です。",

    // Writing electron configurations > common mistake > p
    "Do not write an ion with the atom’s configuration. <span class=\"chem\">S^2-</span> is not <span class=\"mono\">…3p<sup>4</sup></span>. Always adjust the electron count for the charge: a negative charge means extra electrons, a positive charge means fewer.": "イオンを原子の電子配置のまま書いてはいけません。<span class=\"chem\">S^2-</span> は <span class=\"mono\">…3p<sup>4</sup></span> ではありません。必ず電荷に合わせて電子の数を変えましょう。負の電荷なら電子が多く、正の電荷なら電子が少なくなります。",

    // Writing electron configurations > Additional HL > h3
    "Ions of the d-block metals: 4s goes first": "d ブロック金属のイオン：4s が先に出ていく",

    // Writing electron configurations > Additional HL > p
    "When a first-row d-block atom (Sc to Zn) forms a positive ion, <b>the 4s electrons are removed before any 3d electrons</b>. This seems backwards, because 4s filled first. But once the 3d sublevel contains electrons, it is lower in energy than 4s. The 4s electrons are then the outermost and the easiest to remove.": "第 4 周期の d ブロックの原子（Sc〜Zn）が陽イオンになるとき、<b>3d の電子より先に、4s の電子が取り除かれます</b>。4s のほうが先に入ったので、逆のように思えます。しかし、3d 副準位に電子が入ると、3d は 4s よりエネルギーが低くなります。そのため 4s の電子がいちばん外側になり、最も取り除きやすくなります。",

    // Writing electron configurations > Additional HL > p
    "The syllabus places these ions under Structure 3.1 at HL, so you will meet them again there. They also appear in questions on this topic.": "シラバスでは、これらのイオンは HL の Structure 3.1 に入っているので、そこでもう一度学びます。このトピックの問題にも出てきます。",

    // Writing electron configurations > worked example > Additional HL > data-kicker attribute
    "Worked example 4": "例題 4",

    // Writing electron configurations > worked example > Additional HL > h3
    "Iron(II) and iron(III) ions": "鉄(II) イオンと鉄(III) イオン",

    // Writing electron configurations > worked example > Additional HL > p
    "Deduce the condensed electron configurations of <span class=\"chem\">Fe^2+</span> and <span class=\"chem\">Fe^3+</span>.": "<span class=\"chem\">Fe^2+</span> と <span class=\"chem\">Fe^3+</span> の省略形の電子配置を導きなさい (deduce)。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Start from the atom": "原子から始める",

    // Writing electron configurations > worked example > Additional HL > p
    "You cannot write the ion without the atom. Do not start from the electron count of the ion and fill from 1s.": "原子の電子配置がないと、イオンは書けません。イオンの電子の数から始めて、1s から入れていってはいけません。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Remove two electrons, from 4s": "4s から電子を 2 個取り除く",

    // Writing electron configurations > worked example > Additional HL > p
    "For d-block ions, the 4s electrons are lost first.": "d ブロックのイオンでは、4s の電子が先に失われます。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Remove a third electron, from 3d": "3 個目の電子は 3d から取り除く",

    // Writing electron configurations > worked example > Additional HL > p
    "4s is now empty, so the next electron comes from 3d.": "4s は空になったので、次の電子は 3d から出ていきます。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Check the electron count": "電子の数を確かめる",

    // Writing electron configurations > worked example > Additional HL > p
    "Fe<sup>2+</sup> should have 26 − 2 = 24 electrons and Fe<sup>3+</sup> should have 26 − 3 = 23.": "Fe<sup>2+</sup> の電子は 26 − 2 = 24 個、Fe<sup>3+</sup> の電子は 26 − 3 = 23 個のはずです。",

    // Writing electron configurations > worked example > Additional HL > p
    "Fe<sup>2+</sup> is [Ar] 3d<sup>6</sup> and Fe<sup>3+</sup> is [Ar] 3d<sup>5</sup>.": "Fe<sup>2+</sup> は [Ar] 3d<sup>6</sup>、Fe<sup>3+</sup> は [Ar] 3d<sup>5</sup> です。",

    // Writing electron configurations > common mistake > Additional HL > p
    "Writing <span class=\"chem\">Fe^2+</span> as <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span> removes the electrons from 3d. That is the most common error with these ions. Take them from 4s. For ions of Cr and Cu, start from the real atom configurations (4s<sup>1</sup>): <span class=\"chem\">Cu^2+</span> is <span class=\"mono\">[Ar] 3d<sup>9</sup></span> and <span class=\"chem\">Cr^3+</span> is <span class=\"mono\">[Ar] 3d<sup>3</sup></span>.": "<span class=\"chem\">Fe^2+</span> を <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span> と書くと、電子を 3d から取り除いたことになります。これらのイオンでいちばん多い間違いです。電子は 4s から取りましょう。Cr と Cu のイオンでは、実際の原子の電子配置（4s<sup>1</sup>）から始めます。<span class=\"chem\">Cu^2+</span> は <span class=\"mono\">[Ar] 3d<sup>9</sup></span>、<span class=\"chem\">Cr^3+</span> は <span class=\"mono\">[Ar] 3d<sup>3</sup></span> です。",

    // Writing electron configurations > try it > Additional HL > data-label attribute
    // Writing electron configurations > try it > data-label attribute
    // widget string (assets/js/widgets-s1-3.js)
    "Unpaired electrons": "不対電子の数",

    // Writing electron configurations > try it > Additional HL > p
    "How many unpaired electrons are there in an <span class=\"chem\">Fe^3+</span> ion?": "<span class=\"chem\">Fe^3+</span> イオンには、不対電子が何個ありますか。",

    // Writing electron configurations > try it > Additional HL > li
    "Write the configuration of the ion first. Which electrons leave an iron atom first?": "まずイオンの電子配置を書きましょう。鉄原子から最初に出ていくのは、どの電子ですか。",

    // Writing electron configurations > try it > Additional HL > li
    "<span class=\"chem\">Fe^3+</span> is [Ar] 3d<sup>5</sup>. Put five electrons into five d orbitals using Hund’s rule.": "<span class=\"chem\">Fe^3+</span> は [Ar] 3d<sup>5</sup> です。フントの規則に従って、5 個の電子を 5 つの d 軌道に入れましょう。",

    // Writing electron configurations > try it > Additional HL > p
    "Each of the five 3d orbitals holds one electron, so there are <strong>5</strong> unpaired electrons.": "5 つの 3d 軌道に電子が 1 個ずつ入るので、不対電子は <strong>5</strong> 個です。",

    // Writing electron configurations > try it > p
    "How many unpaired electrons are there in a phosphorus atom (Z = 15) in its ground state?": "基底状態のリン原子（Z = 15）には、不対電子が何個ありますか。",

    // Writing electron configurations > try it > li
    "Write the configuration. Only a partly filled sublevel can contain unpaired electrons.": "電子配置を書きましょう。不対電子があるのは、途中まで電子が入った副準位だけです。",

    // Writing electron configurations > try it > li
    "P is [Ne] 3s<sup>2</sup> 3p<sup>3</sup>. Place three electrons in the three 3p orbitals using Hund’s rule.": "P は [Ne] 3s<sup>2</sup> 3p<sup>3</sup> です。フントの規則に従って、3 個の電子を 3 つの 3p 軌道に入れましょう。",

    // Writing electron configurations > try it > p
    "Hund’s rule puts one electron in each 3p orbital, so there are <strong>3</strong> unpaired electrons.": "フントの規則により、3p 軌道に電子が 1 個ずつ入るので、不対電子は <strong>3</strong> 個です。",

    // Writing electron configurations > try it > p
    "How many electrons are in the 3d sublevel of a copper atom (Z = 29)?": "銅原子（Z = 29）の 3d 副準位には、電子が何個ありますか。",

    // Writing electron configurations > try it > li
    "Copper is one of the two exceptions. What happens to its 4s sublevel?": "銅は 2 つの例外の 1 つです。4s 副準位はどうなりますか。",

    // Writing electron configurations > try it > li
    "Cu is [Ar] 4s<sup>1</sup> 3d<sup>?</sup>. There are 29 − 18 = 11 electrons after the argon core, and one of them is in 4s.": "Cu は [Ar] 4s<sup>1</sup> 3d<sup>?</sup> です。アルゴンの芯のあとの電子は 29 − 18 = 11 個で、そのうち 1 個が 4s に入ります。",

    // Writing electron configurations > try it > p
    "The 3d sublevel holds <strong>10</strong> electrons. Following the filling order without the exception would give 9, which is wrong.": "3d 副準位の電子は <strong>10</strong> 個です。例外を考えずに順番どおりに入れると 9 個になり、間違いです。",

    // Writing electron configurations > data-title attribute
    "Electron configurations: quick check": "電子配置：確認クイズ",

    // The convergence limit and ionization energy > Additional HL > data-toc attribute
    "Convergence limit and ionization": "収束限界とイオン化",

    // The convergence limit and ionization energy > Additional HL > h2
    "The convergence limit and ionization energy": "収束限界とイオン化エネルギー",

    // The convergence limit and ionization energy > Additional HL > p
    "Go back to the hydrogen energy levels. The levels converge at n = ∞. An electron that reaches n = ∞ is no longer held by the nucleus. It has left the atom. The atom has been <dfn data-def=\"Turned into an ion by removing (or adding) an electron.\">ionized</dfn>.": "水素のエネルギー準位に戻りましょう。準位は n = ∞ で収束します。n = ∞ に達した電子は、もう原子核に引きとめられていません。原子から出ていったのです。このとき原子は<dfn data-def=\"電子を取り除く（または加える）ことで、イオンになること。\">イオン化 <span class=\"en-term\">(ionized)</span></dfn>されています。",

    // The convergence limit and ionization energy > Additional HL > data-def attribute
    "Turned into an ion by removing (or adding) an electron.": "電子を取り除く（または加える）ことで、イオンになること。",

    // The convergence limit and ionization energy > Additional HL > p
    "The <dfn data-def=\"The minimum energy needed to remove one mole of electrons from one mole of gaseous atoms in their ground state, forming one mole of gaseous 1+ ions.\">first ionization energy</dfn> (first IE) is the minimum energy needed to remove one mole of electrons from one mole of gaseous atoms in their ground state:": "<dfn data-def=\"基底状態にある気体の原子 1 mol から電子 1 mol を取り除き、気体の 1+ イオン 1 mol をつくるのに必要な最小のエネルギー。\">第一イオン化エネルギー <span class=\"en-term\">(first ionization energy)</span></dfn>（略して first IE）は、基底状態にある気体の原子 1 mol から、電子 1 mol を取り除くのに必要な最小のエネルギーです。次の変化にあたります。",

    // The convergence limit and ionization energy > Additional HL > data-def attribute
    "The minimum energy needed to remove one mole of electrons from one mole of gaseous atoms in their ground state, forming one mole of gaseous 1+ ions.": "基底状態にある気体の原子 1 mol から電子 1 mol を取り除き、気体の 1+ イオン 1 mol をつくるのに必要な最小のエネルギー。",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "one mole of gaseous atoms": "気体の原子 1 mol",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "one mole of gaseous ions with a 1+ charge": "1+ の電荷をもつ気体のイオン 1 mol",

    // The convergence limit and ionization energy > equation > Additional HL > dt
    "IE": "IE",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "the energy needed for this change, in <span class=\"unit\">kJ mol-1</span>": "この変化に必要なエネルギー。単位は <span class=\"unit\">kJ mol-1</span>",

    // The convergence limit and ionization energy > Additional HL > p
    "For hydrogen, that means lifting the electron from n = 1 to n = ∞. Now look at the emission spectrum. The lines from transitions down to n = 1 converge at a limit. A photon at that limit has exactly the energy of a fall from n = ∞ to n = 1. That is the same energy gap as ionization, travelled in the opposite direction.": "水素では、電子を n = 1 から n = ∞ まで持ち上げることにあたります。ここで発光スペクトルを見てみましょう。n = 1 へ落ちる遷移の線は、ある限界に向かって収束します。その限界の光子は、n = ∞ から n = 1 へ落ちるときとちょうど同じエネルギーをもちます。これは、イオン化と同じエネルギーの差を、逆向きにたどったものです。",

    // The convergence limit and ionization energy > key idea > Additional HL > p
    "In an emission spectrum, the limit of convergence at higher frequency corresponds to ionization. Find the frequency or wavelength of that limit, and you can calculate the first ionization energy.": "発光スペクトルでは、振動数の高い側にある収束限界 (limit of convergence) が、イオン化に対応します。その限界の振動数か波長がわかれば、第一イオン化エネルギーを計算できます。",

    // The convergence limit and ionization energy > Additional HL > p
    "In the hydrogen explorer above, choose “falls from ∞” and “to 1” to see this limit and its calculation.": "上の水素の教材で、落ちる前の準位に「∞」、落ちた先の準位に「1」を選ぶと、この限界とその計算が見られます。",

    // The convergence limit and ionization energy > Additional HL > h3
    "The two equations": "2 つの式",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "energy of one photon <span class=\"unit\">J</span>": "光子 1 個のエネルギー <span class=\"unit\">J</span>",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "Planck constant, <span class=\"mono\">6.63 × 10<sup>−34</sup></span> <span class=\"unit\">J s</span>": "プランク定数、<span class=\"mono\">6.63 × 10<sup>−34</sup></span> <span class=\"unit\">J s</span>",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "frequency <span class=\"unit\">Hz</span> (the same as <span class=\"unit\">s-1</span>)": "振動数 <span class=\"unit\">Hz</span>（<span class=\"unit\">s-1</span> と同じ）",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "speed of light, <span class=\"mono\">3.00 × 10<sup>8</sup></span> <span class=\"unit\">m s-1</span>": "光の速さ、<span class=\"mono\">3.00 × 10<sup>8</sup></span> <span class=\"unit\">m s-1</span>",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "wavelength <span class=\"unit\">m</span>": "波長 <span class=\"unit\">m</span>",

    // The convergence limit and ionization energy > data booklet note > Additional HL > p
    "Both equations, and the values of <i>h</i>, <i>c</i> and the Avogadro constant (<span class=\"mono\">6.02 × 10<sup>23</sup></span> <span class=\"unit\">mol-1</span>), are in the data booklet. First ionization energies of the elements are in section 9.": "どちらの式も、<i>h</i>、<i>c</i>、アボガドロ定数（<span class=\"mono\">6.02 × 10<sup>23</sup></span> <span class=\"unit\">mol-1</span>）の値も、データブックレットに載っています。元素の第一イオン化エネルギーはセクション 9 にあります。",

    // The convergence limit and ionization energy > Additional HL > p
    "<span class=\"mono\">E = hf</span> gives the energy of <b>one photon</b>, which ionizes <b>one atom</b>. Ionization energies are quoted <b>per mole</b> of atoms, in kJ. So there are always two extra steps: multiply by the Avogadro constant, and convert J to kJ.": "<span class=\"mono\">E = hf</span> で求まるのは<b>光子 1 個</b>のエネルギーで、これは<b>原子 1 個</b>をイオン化するエネルギーです。イオン化エネルギーは、原子 <b>1 mol あたり</b>の値を kJ で表します。そのため、いつも 2 つのステップが加わります。アボガドロ定数をかけることと、J を kJ に直すことです。",

    // The convergence limit and ionization energy > Additional HL > h3
    "Method in words": "解き方を言葉で",

    // The convergence limit and ionization energy > Additional HL > p
    "<b>From the convergence limit to the first IE:</b>": "<b>収束限界から第一イオン化エネルギーへ：</b>",

    // The convergence limit and ionization energy > Additional HL > li
    "If you are given a wavelength, convert it to metres (<span class=\"mono\">1 nm = 1 × 10<sup>−9</sup> m</span>), then find the frequency with <span class=\"mono\">f = c / λ</span>.": "波長が与えられていたら、メートルに直します（<span class=\"mono\">1 nm = 1 × 10<sup>−9</sup> m</span>）。次に <span class=\"mono\">f = c / λ</span> で振動数を求めます。",

    // The convergence limit and ionization energy > Additional HL > li
    "Find the energy of one photon with <span class=\"mono\">E = hf</span>. This is in joules, for one atom.": "<span class=\"mono\">E = hf</span> で光子 1 個のエネルギーを求めます。これは原子 1 個あたりの値で、単位は J です。",

    // The convergence limit and ionization energy > Additional HL > li
    "Multiply by <span class=\"mono\">6.02 × 10<sup>23</sup></span> to get joules per mole.": "<span class=\"mono\">6.02 × 10<sup>23</sup></span> をかけて、1 mol あたりの J にします。",

    // The convergence limit and ionization energy > Additional HL > li
    "Divide by 1000 to get <span class=\"unit\">kJ mol-1</span>.": "1000 で割って <span class=\"unit\">kJ mol-1</span> にします。",

    // The convergence limit and ionization energy > Additional HL > p
    "<b>From the first IE to the convergence limit</b> (the same steps, backwards):": "<b>第一イオン化エネルギーから収束限界へ</b>（同じステップを逆にたどります）：",

    // The convergence limit and ionization energy > Additional HL > li
    "Multiply by 1000 to convert <span class=\"unit\">kJ mol-1</span> to <span class=\"unit\">J mol-1</span>.": "1000 をかけて、<span class=\"unit\">kJ mol-1</span> を <span class=\"unit\">J mol-1</span> に直します。",

    // The convergence limit and ionization energy > Additional HL > li
    "Divide by <span class=\"mono\">6.02 × 10<sup>23</sup></span> to get joules for one atom.": "<span class=\"mono\">6.02 × 10<sup>23</sup></span> で割って、原子 1 個あたりの J にします。",

    // The convergence limit and ionization energy > Additional HL > li
    "Find the frequency with <span class=\"mono\">f = E / h</span>.": "<span class=\"mono\">f = E / h</span> で振動数を求めます。",

    // The convergence limit and ionization energy > Additional HL > li
    "Find the wavelength with <span class=\"mono\">λ = c / f</span>. Convert to nm if asked.": "<span class=\"mono\">λ = c / f</span> で波長を求めます。問題で求められたら nm に直します。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-kicker attribute
    "Worked example 5": "例題 5",

    // The convergence limit and ionization energy > worked example > Additional HL > h3
    "From convergence limit to first ionization energy": "収束限界から第一イオン化エネルギーを求める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "In the emission spectrum of hydrogen, the lines from transitions to n = 1 converge at a wavelength of 91.2 nm. Calculate the first ionization energy of hydrogen, in <span class=\"unit\">kJ mol-1</span>.": "水素の発光スペクトルで、n = 1 への遷移による線は、波長 91.2 nm で収束します。水素の第一イオン化エネルギーを <span class=\"unit\">kJ mol-1</span> の単位で計算しなさい (calculate)。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert the wavelength to metres": "波長をメートルに直す",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "The speed of light is in m s<sup>−1</sup>, so the wavelength must be in m. Nano means × 10<sup>−9</sup>.": "光の速さの単位は m s<sup>−1</sup> なので、波長は m で表す必要があります。ナノ（n）は × 10<sup>−9</sup> の意味です。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Find the frequency": "振動数を求める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "E = hf needs a frequency. Rearrange c = λf to get f = c / λ.": "E = hf には振動数が必要です。c = λf を変形して f = c / λ とします。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Find the energy for one atom": "原子 1 個あたりのエネルギーを求める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "One photon at the limit has the energy needed to ionize one atom. Keep the unrounded frequency in your calculator.": "限界の光子 1 個は、原子 1 個をイオン化するのに必要なエネルギーをもっています。振動数は丸めずに、電卓に残しておきましょう。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Scale up to one mole": "1 mol あたりに直す",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Ionization energy is per mole of atoms. One mole is 6.02 × 10<sup>23</sup> atoms.": "イオン化エネルギーは、原子 1 mol あたりの値です。1 mol は 6.02 × 10<sup>23</sup> 個の原子です。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert J to kJ and round": "J を kJ に直して丸める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Divide by 1000. The data have 3 significant figures, so the answer does too.": "1000 で割ります。データは有効数字 3 桁なので、答えも 3 桁にします。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "1310 kJ mol<sup>−1</sup> (1.31 × 10<sup>3</sup> kJ mol<sup>−1</sup>). The data booklet value is 1312 kJ mol<sup>−1</sup>, so the answer is sensible.": "1310 kJ mol<sup>−1</sup>（1.31 × 10<sup>3</sup> kJ mol<sup>−1</sup>）。データブックレットの値は 1312 kJ mol<sup>−1</sup> なので、妥当な答えです。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-kicker attribute
    "Worked example 6": "例題 6",

    // The convergence limit and ionization energy > worked example > Additional HL > h3
    "From first ionization energy to wavelength": "第一イオン化エネルギーから波長を求める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "The first ionization energy of sodium is 496 kJ mol<sup>−1</sup>. Calculate the wavelength, in nm, of the convergence limit in the emission spectrum of sodium that corresponds to this ionization.": "ナトリウムの第一イオン化エネルギーは 496 kJ mol<sup>−1</sup> です。ナトリウムの発光スペクトルで、このイオン化に対応する収束限界の波長を nm の単位で計算しなさい (calculate)。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert kJ to J": "kJ を J に直す",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "The Planck constant is in J s, so the energy must be in J.": "プランク定数の単位は J s なので、エネルギーは J で表す必要があります。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "E = hf is about one photon and one atom. Divide by the number of atoms in a mole.": "E = hf は、光子 1 個と原子 1 個についての式です。1 mol に含まれる原子の数で割ります。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Rearrange E = hf to get f = E / h.": "E = hf を変形して f = E / h とします。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Find the wavelength": "波長を求める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Rearrange c = λf to get λ = c / f. The answer comes out in metres.": "c = λf を変形して λ = c / f とします。答えはメートルで出ます。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert m to nm and round": "m を nm に直して丸める",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "1 nm = 1 × 10<sup>−9</sup> m, so divide by 10<sup>−9</sup>. Three significant figures in the data.": "1 nm = 1 × 10<sup>−9</sup> m なので、10<sup>−9</sup> で割ります。データは有効数字 3 桁です。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "241 nm (2.41 × 10<sup>−7</sup> m). This is shorter than 400 nm, so the limit is in the ultraviolet.": "241 nm（2.41 × 10<sup>−7</sup> m）。400 nm より短いので、この限界は紫外線の領域にあります。",

    // The convergence limit and ionization energy > common mistake > Additional HL > p
    "Three slips cost most of the marks here. Leaving the wavelength in nm gives a frequency that is 10<sup>9</sup> times too small. Forgetting the Avogadro constant gives an answer that is wrong by a factor of 6.02 × 10<sup>23</sup>. Forgetting kJ ↔ J gives an answer wrong by 1000. Write the unit on every line and you will catch them.": "ここで点を失う原因は、ほとんどが次の 3 つのミスです。波長を nm のままにすると、振動数が 10<sup>9</sup> 分の 1 になってしまいます。アボガドロ定数を忘れると、答えが 6.02 × 10<sup>23</sup> 倍ずれます。kJ ↔ J の換算を忘れると、答えが 1000 倍ずれます。どの行にも単位を書けば、ミスに気づけます。",

    // The convergence limit and ionization energy > exam tip (shown in English + translation) > Additional HL > p
    "This calculation is usually worth 3 marks: one for the energy per atom (the Avogadro constant and the kJ ↔ J step), one for using <span class=\"mono\">E = hf</span>, one for using <span class=\"mono\">c = λf</span>. A wrong early step can still earn later marks if your working is clear, so show every line.": "この計算はふつう 3 点です。原子 1 個あたりのエネルギー（アボガドロ定数と kJ ↔ J のステップ）に 1 点、<span class=\"mono\">E = hf</span> を使うことに 1 点、<span class=\"mono\">c = λf</span> を使うことに 1 点です。はじめのステップを間違えても、途中の計算がはっきり書いてあれば、あとの点はもらえることがあります。すべての行を書きましょう。",

    // The convergence limit and ionization energy > try it > Additional HL > p
    "The convergence limit in the emission spectrum of helium that corresponds to its first ionization has a frequency of 5.94 × 10<sup>15</sup> Hz. Calculate the first ionization energy of helium in kJ mol<sup>−1</sup>.": "ヘリウムの発光スペクトルで、第一イオン化に対応する収束限界の振動数は 5.94 × 10<sup>15</sup> Hz です。ヘリウムの第一イオン化エネルギーを kJ mol<sup>−1</sup> の単位で計算しなさい (calculate)。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "You already have the frequency, so you can skip c = λf. Which equation turns a frequency into an energy?": "振動数はもうわかっているので、c = λf は使わなくてすみます。振動数からエネルギーを求める式はどれですか。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "<span class=\"mono\">E = hf = 6.63 × 10<sup>−34</sup> × 5.94 × 10<sup>15</sup></span> gives joules for one atom. Then two more steps: per mole, and J to kJ.": "<span class=\"mono\">E = hf = 6.63 × 10<sup>−34</sup> × 5.94 × 10<sup>15</sup></span> で、原子 1 個あたりの J が出ます。あと 2 ステップです。1 mol あたりに直し、J を kJ に直します。",

    // The convergence limit and ionization energy > try it > Additional HL > p
    "The data booklet value for helium is 2372 kJ mol<sup>−1</sup>.": "データブックレットのヘリウムの値は 2372 kJ mol<sup>−1</sup> です。",

    // The convergence limit and ionization energy > try it > Additional HL > p
    "The first ionization energy of lithium is 520 kJ mol<sup>−1</sup>. Calculate the wavelength, in nm, of the convergence limit that corresponds to this ionization.": "リチウムの第一イオン化エネルギーは 520 kJ mol<sup>−1</sup> です。このイオン化に対応する収束限界の波長を nm の単位で計算しなさい (calculate)。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "Work backwards: kJ mol<sup>−1</sup> → J mol<sup>−1</sup> → J for one atom → frequency → wavelength.": "逆向きに進みます：kJ mol<sup>−1</sup> → J mol<sup>−1</sup> → 原子 1 個あたりの J → 振動数 → 波長。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "Energy for one atom: <span class=\"mono\">520 × 1000 / (6.02 × 10<sup>23</sup>)</span> J. Then <span class=\"mono\">f = E / h</span> and <span class=\"mono\">λ = c / f</span>. Your wavelength will be in metres.": "原子 1 個あたりのエネルギー：<span class=\"mono\">520 × 1000 / (6.02 × 10<sup>23</sup>)</span> J。次に <span class=\"mono\">f = E / h</span>、<span class=\"mono\">λ = c / f</span> を使います。波長はメートルで出ます。",

    // The convergence limit and ionization energy > not needed for IB > Additional HL > p
    "You do not need the electronvolt, the photoelectric effect, or calculations that use a formula for the energy of each level. Everything here uses only <span class=\"mono\">E = hf</span>, <span class=\"mono\">c = λf</span> and the Avogadro constant.": "電子ボルト、光電効果、各準位のエネルギーを求める式を使う計算は必要ありません。ここで使うのは <span class=\"mono\">E = hf</span>、<span class=\"mono\">c = λf</span>、アボガドロ定数だけです。",

    // The convergence limit and ionization energy > Additional HL > data-title attribute
    "Convergence limit and ionization energy: quick check": "収束限界とイオン化エネルギー：確認クイズ",

    // Trends in first ionization energy > Additional HL > data-toc attribute
    // Trends in first ionization energy > Additional HL > h2
    "Trends in first ionization energy": "第一イオン化エネルギーの傾向",

    // Trends in first ionization energy > Additional HL > p
    "How hard is it to pull the outermost electron off an atom? It depends on how strongly the nucleus attracts that electron. Three things decide that.": "原子からいちばん外側の電子を引き離すのは、どれくらい大変でしょうか。それは、原子核がその電子をどれくらい強く引きつけているかで決まります。これを決める要因は 3 つあります。",

    // Trends in first ionization energy > Additional HL > li
    "<b>Nuclear charge.</b> More protons means a stronger pull.": "<b>核電荷 (nuclear charge)。</b>原子核の正電荷のことです。陽子が多いほど、引きつける力は強くなります。",

    // Trends in first ionization energy > Additional HL > li
    "<b>Distance.</b> An electron in a higher main energy level is further from the nucleus, so the pull is weaker.": "<b>距離。</b>高い主エネルギー準位にある電子ほど原子核から遠いので、引きつける力は弱くなります。",

    // Trends in first ionization energy > Additional HL > li
    "<b>Shielding.</b> Electrons in inner main energy levels sit between the nucleus and the outer electron. They repel the outer electron and cancel part of the pull. This is called <dfn data-def=\"The reduction in the attraction between the nucleus and an outer electron, caused by repulsion from electrons in inner energy levels.\">shielding</dfn>.": "<b>遮蔽。</b>内側の主エネルギー準位にある電子は、原子核と外側の電子の間にあります。これらの電子は外側の電子と反発し、原子核が引きつける力の一部を打ち消します。これを<dfn data-def=\"内側のエネルギー準位にある電子との反発によって、原子核と外側の電子の間の引力が弱まること。\">遮蔽（しゃへい） <span class=\"en-term\">(shielding)</span></dfn>といいます。",

    // Trends in first ionization energy > Additional HL > data-def attribute
    "The reduction in the attraction between the nucleus and an outer electron, caused by repulsion from electrons in inner energy levels.": "内側のエネルギー準位にある電子との反発によって、原子核と外側の電子の間の引力が弱まること。",

    // Trends in first ionization energy > widget > Additional HL > data-title attribute
    "First ionization energy, hydrogen to krypton": "第一イオン化エネルギー：水素からクリプトンまで",

    // Trends in first ionization energy > widget > Additional HL > figcaption
    "Tap a point or move the slider. The readout compares each element with the one before it (the trend across a period) and the one above it (the trend down a group). Values are from the data booklet.": "点をタップするか、スライダーを動かしましょう。表示欄では、それぞれの元素を、1 つ前の元素（周期を左から右への傾向）と、1 つ上の元素（族を上から下への傾向）と比べます。値はデータブックレットのものです。",

    // Trends in first ionization energy > Additional HL > h3
    "Across a period: a general increase": "周期を左から右へ：全体として増加",

    // Trends in first ionization energy > Additional HL > p
    "From left to right across a period, each atom has one more proton. The extra electrons go into the same main energy level, so the shielding by inner electrons stays about the same. The outer electrons are pulled in more strongly, and more energy is needed to remove one.": "周期を左から右へ進むと、原子の陽子が 1 個ずつ増えます。増えた電子は同じ主エネルギー準位に入るので、内側の電子による遮蔽はほとんど変わりません。外側の電子はより強く引きつけられ、1 個取り除くのに必要なエネルギーが大きくなります。",

    // Trends in first ionization energy > Additional HL > h3
    "Down a group: a decrease": "族を上から下へ：減少",

    // Trends in first ionization energy > Additional HL > p
    "Going down a group, the outer electron is in a higher main energy level each time. It is further from the nucleus and there are more inner electrons shielding it. These two effects outweigh the larger nuclear charge, so less energy is needed to remove it.": "族を下へ進むと、いちばん外側の電子は、1 つずつ高い主エネルギー準位に入ります。原子核から遠くなり、遮蔽する内側の電子も増えます。この 2 つの効果が核電荷の増加を上回るので、取り除くのに必要なエネルギーは小さくなります。",

    // Trends in first ionization energy > Additional HL > h3
    "Two discontinuities in each period": "各周期にある 2 つの不連続",

    // Trends in first ionization energy > Additional HL > p
    "The increase across a period is not smooth. A <dfn data-def=\"A break in a trend: a point where the value goes the opposite way to the general pattern.\">discontinuity</dfn> is a place where the trend briefly goes the other way. There are two in period 2, and the same two in period 3.": "周期を左から右への増加は、なめらかではありません。<dfn data-def=\"傾向がとぎれるところ。値が全体の規則性と逆向きに変わる点。\">不連続 <span class=\"en-term\">(discontinuity)</span></dfn>とは、傾向が一時的に逆向きになるところです。第 2 周期に 2 か所あり、第 3 周期にも同じ 2 か所があります。",

    // Trends in first ionization energy > Additional HL > data-def attribute
    "A break in a trend: a point where the value goes the opposite way to the general pattern.": "傾向がとぎれるところ。値が全体の規則性と逆向きに変わる点。",

    // Trends in first ionization energy > table > Additional HL > caption
    "The discontinuities and their explanations": "不連続とその説明",

    // Trends in first ionization energy > table > Additional HL > th
    "Where": "場所",

    // Trends in first ionization energy > table > Additional HL > th
    "Data / kJ mol<sup>−1</sup>": "データ / kJ mol<sup>−1</sup>",

    // Trends in first ionization energy > table > Additional HL > th
    "Electron removed": "取り除かれる電子",

    // Trends in first ionization energy > table > Additional HL > th
    "Why the second is lower": "2 番目のほうが低い理由",

    // Trends in first ionization energy > table > Additional HL > th
    "Group 2 → 13<br>Be → B, Mg → Al": "2 族 → 13 族<br>Be → B、Mg → Al",

    // Trends in first ionization energy > table > Additional HL > td
    "Be 900, B 801<br>Mg 738, Al 578": "Be 900、B 801<br>Mg 738、Al 578",

    // Trends in first ionization energy > table > Additional HL > td
    "Be: from 2s<br>B: from 2p": "Be：2s から<br>B：2p から",

    // Trends in first ionization energy > table > Additional HL > td
    "The p sublevel is higher in energy than the s sublevel of the same main energy level. An electron that starts higher in energy needs less energy to remove.": "p 副準位は、同じ主エネルギー準位の s 副準位よりエネルギーが高くなっています。はじめからエネルギーの高い電子は、少ないエネルギーで取り除けます。",

    // Trends in first ionization energy > table > Additional HL > th
    "Group 15 → 16<br>N → O, P → S": "15 族 → 16 族<br>N → O、P → S",

    // Trends in first ionization energy > table > Additional HL > td
    "N: from a singly occupied 2p orbital<br>O: from a doubly occupied 2p orbital": "N：電子が 1 個だけ入った 2p 軌道から<br>O：電子が 2 個入った 2p 軌道から",

    // Trends in first ionization energy > table > Additional HL > td
    "In O, two electrons share one 2p orbital. They repel each other, so one of them is removed more easily.": "O では、1 つの 2p 軌道に電子が 2 個入っています。この 2 個は互いに反発するので、片方が取り除かれやすくなります。",

    // Trends in first ionization energy > Additional HL > p
    "The orbital diagrams show the second case clearly:": "軌道図を見ると、2 つ目の場合がよくわかります。",

    // Trends in first ionization energy > key idea > Additional HL > p
    "These discontinuities are evidence that main energy levels are divided into sublevels. If n = 2 were a single level, first ionization energy would rise steadily from Li to Ne.": "この不連続は、主エネルギー準位が副準位に分かれていることの証拠です。もし n = 2 が 1 つの準位だけなら、第一イオン化エネルギーは Li から Ne まで一様に上がっていくはずです。",

    // Trends in first ionization energy > worked example > Additional HL > data-kicker attribute
    "Worked example 7": "例題 7",

    // Trends in first ionization energy > worked example > Additional HL > h3
    "Explaining a discontinuity": "不連続を説明する",

    // Trends in first ionization energy > worked example > Additional HL > p
    "(a) Explain why the first ionization energy of boron (801 kJ mol<sup>−1</sup>) is lower than that of beryllium (900 kJ mol<sup>−1</sup>). (b) Explain why the first ionization energy of oxygen (1314 kJ mol<sup>−1</sup>) is lower than that of nitrogen (1402 kJ mol<sup>−1</sup>).": "(a) ホウ素の第一イオン化エネルギー（801 kJ mol<sup>−1</sup>）が、ベリリウム（900 kJ mol<sup>−1</sup>）より低い理由を説明しなさい (explain)。(b) 酸素の第一イオン化エネルギー（1314 kJ mol<sup>−1</sup>）が、窒素（1402 kJ mol<sup>−1</sup>）より低い理由を説明しなさい。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "Write both configurations": "両方の電子配置を書く",

    // Trends in first ionization energy > worked example > Additional HL > p
    "The explanation is always about which electron is removed. You cannot see that without the configurations.": "説明のポイントは、いつも「どの電子が取り除かれるか」です。電子配置を書かないと、それがわかりません。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(a) Name the sublevel each electron leaves": "(a) 電子が出ていく副準位を、それぞれ答える",

    // Trends in first ionization energy > worked example > Additional HL > p
    "One mark is for identifying the two sublevels.": "1 点は、2 つの副準位を特定することでもらえます。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "Be loses a 2s electron. B loses a 2p electron.": "Be は 2s 電子を失います。B は 2p 電子を失います。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(a) Give the energy reason": "(a) エネルギーにもとづく理由を書く",

    // Trends in first ionization energy > worked example > Additional HL > p
    "The second mark is for the reason, stated in terms of the energy of the electron removed.": "2 点目は理由に対する点です。取り除かれる電子のエネルギーに注目して書きます。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "2p is higher in energy than 2s,": "2p は 2s よりエネルギーが高いので、",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "so less energy is needed to remove the 2p electron.": "2p 電子を取り除くのに必要なエネルギーは小さくなります。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(b) Describe how the 2p orbitals are occupied": "(b) 2p 軌道への電子の入り方を記述する",

    // Trends in first ionization energy > worked example > Additional HL > p
    "Both atoms lose a 2p electron, so the sublevel is not the difference this time. Look at the orbitals.": "どちらの原子も 2p 電子を失うので、今回は副準位の違いではありません。軌道を見ましょう。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "N: three 2p orbitals, each with one electron.": "N：三つの 2p 軌道に、電子が一つずつ入っています。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "O: one 2p orbital holds a pair of electrons.": "O：2p 軌道の一つに、電子が対になって入っています。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(b) Give the energy reason": "(b) エネルギーにもとづく理由を書く",

    // Trends in first ionization energy > worked example > Additional HL > p
    "Repulsion raises the energy of the paired electron, which makes it easier to remove.": "反発があると、対になった電子のエネルギーが高くなり、取り除きやすくなります。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "The two electrons in the same orbital repel each other,": "同じ軌道に入った電子どうしは互いに反発するので、",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "so less energy is needed to remove one of them.": "そのうちの片方を取り除くのに必要なエネルギーは小さくなります。",

    // Trends in first ionization energy > worked example > Additional HL > p
    "(a) The electron removed from B is in the 2p sublevel, which is higher in energy than the 2s sublevel that Be loses an electron from, so it is removed more easily. (b) The electron removed from O is paired in a 2p orbital; repulsion between the two electrons in that orbital means it is removed more easily than an electron from one of the singly occupied 2p orbitals in N.": "(a) B から取り除かれる電子は 2p 副準位にあります。2p 副準位は、Be が電子を失う 2s 副準位よりエネルギーが高いので、この電子は取り除かれやすくなります。(b) O から取り除かれる電子は、2p 軌道で対になっています。その軌道の 2 個の電子が反発するので、N の電子が 1 個だけ入った 2p 軌道の電子より取り除かれやすくなります。",

    // Trends in first ionization energy > exam tip (shown in English + translation) > Additional HL > p
    "Base your explanation on <b>the energy of the electron being removed</b>. Do not write that a half-filled or full sublevel is “specially stable”: the syllabus asks you not to, and examiners have refused that kind of answer. Name the sublevels or orbitals, then say why the electron is easier to remove.": "説明は、<b>取り除かれる電子のエネルギー</b>にもとづいて書きましょう。半分満たされた副準位や完全に満たされた副準位が「特に安定」とは書かないでください。シラバスがそう書かないよう求めていて、試験官はこの種の答えを認めていません。副準位か軌道の名前を挙げ、そのうえで電子が取り除きやすい理由を書きます。",

    // Trends in first ionization energy > common mistake > Additional HL > p
    "Shielding does not increase across a period, and atoms do not get bigger across a period. The outer electrons are in the same main energy level, so the number of inner, shielding electrons stays the same while the nuclear charge rises.": "周期を左から右へ進んでも、遮蔽は大きくなりません。原子も大きくなりません。外側の電子は同じ主エネルギー準位にあるので、遮蔽する内側の電子の数は変わらず、核電荷だけが大きくなります。",

    // Trends in first ionization energy > not needed for IB > Additional HL > p
    "You are not asked to calculate an “effective nuclear charge” or to explain the small changes across the d-block (Sc to Zn). The periodic trend in ionization energy comes back in Structure 3.1, with atomic radius and electronegativity. There, the general trend across a period and down a group is also SL content. The discontinuities stay HL only.": "「有効核電荷」を計算することや、d ブロック（Sc〜Zn）での小さな変化を説明することは求められません。イオン化エネルギーの周期的な傾向は、Structure 3.1 で、原子半径や電気陰性度といっしょにもう一度出てきます。そこでは、周期を左から右へ、族を上から下への全体的な傾向は、SL の内容でもあります。不連続は HL だけの内容のままです。",

    // Trends in first ionization energy > Additional HL > data-title attribute
    "Trends in first ionization energy: quick check": "第一イオン化エネルギーの傾向：確認クイズ",

    // Successive ionization energies > Additional HL > data-toc attribute
    // Successive ionization energies > Additional HL > h2
    "Successive ionization energies": "逐次イオン化エネルギー",

    // Successive ionization energies > Additional HL > p
    "You can keep removing electrons from an atom, one at a time. The energies needed are the <dfn data-def=\"The energies needed to remove the first, second, third (and so on) electrons from an atom, one after another.\">successive ionization energies</dfn>: first, second, third and so on. The second ionization energy is for this change:": "原子からは、電子を 1 個ずつ、続けて取り除いていくことができます。そのたびに必要なエネルギーが<dfn data-def=\"原子から 1 個目、2 個目、3 個目…の電子を、順に 1 個ずつ取り除くのに必要なエネルギー。\">逐次イオン化エネルギー <span class=\"en-term\">(successive ionization energies)</span></dfn>です。第一、第二、第三…と続きます。第二イオン化エネルギーは、次の変化に必要なエネルギーです。",

    // Successive ionization energies > Additional HL > data-def attribute
    "The energies needed to remove the first, second, third (and so on) electrons from an atom, one after another.": "原子から 1 個目、2 個目、3 個目…の電子を、順に 1 個ずつ取り除くのに必要なエネルギー。",

    // Successive ionization energies > equation > Additional HL > dd
    "one mole of gaseous 1+ ions": "気体の 1+ イオン 1 mol",

    // Successive ionization energies > equation > Additional HL > dd
    "one mole of gaseous 2+ ions": "気体の 2+ イオン 1 mol",

    // Successive ionization energies > Additional HL > h3
    "Two patterns to explain": "説明できるようにする 2 つの規則性",

    // Successive ionization energies > Additional HL > p
    "<b>They always increase.</b> Each electron is pulled away from an ion with a greater positive charge than the last. The same nuclear charge attracts fewer electrons, and there is less repulsion between the electrons that remain. The remaining electrons are held more strongly.": "<b>必ず大きくなっていく。</b>電子を取り除くたびに、前より正電荷の大きいイオンから電子を引き離すことになります。同じ核電荷が、より少ない電子を引きつけます。残った電子どうしの反発も小さくなります。そのため、残った電子はより強く引きつけられます。",

    // Successive ionization energies > Additional HL > p
    "<b>Sometimes there is a large jump.</b> A large jump means the next electron comes from a main energy level closer to the nucleus. That electron is nearer to the nucleus and has fewer inner electrons shielding it, so it is held far more strongly.": "<b>ときどき大きなジャンプがある。</b>大きなジャンプ (large jump) は、次の電子が、原子核により近い主エネルギー準位から出ていくことを意味します。その電子は原子核に近く、遮蔽する内側の電子も少ないので、はるかに強く引きつけられています。",

    // Successive ionization energies > key idea > Additional HL > p
    "Count the electrons removed <b>before</b> the first large jump. That is the number of electrons in the outer main energy level, and it tells you the group. One electron before the jump: group 1. Three before the jump: group 13.": "最初の大きなジャンプの<b>前に</b>取り除かれた電子を数えましょう。それが最も外側の主エネルギー準位（最外殻）にある電子の数で、そこから族がわかります。ジャンプの前が 1 個なら 1 族。3 個なら 13 族です。",

    // Successive ionization energies > widget > Additional HL > data-title attribute
    "Successive ionization energies detective": "逐次イオン化エネルギーで元素を推理",

    // Successive ionization energies > widget > Additional HL > figcaption
    "Choose an element and find the large jumps. The brackets show which main energy level each electron comes from. Switch the scale from log(IE) to IE to see why a log scale is used. Then choose “Mystery element” and deduce its group.": "元素を選んで、大きなジャンプを見つけましょう。かっこは、それぞれの電子がどの主エネルギー準位から出ていくかを示します。目盛りを log(IE) から IE に切り替えると、対数目盛を使う理由がわかります。次に「なぞの元素」を選んで、その族を導きましょう。",

    // Successive ionization energies > Additional HL > h3
    "Why the graph uses a log scale": "グラフに対数目盛を使う理由",

    // Successive ionization energies > Additional HL > p
    "Successive ionization energies cover a huge range. For sodium, the first is 496 kJ mol<sup>−1</sup> and the last is 159 076 kJ mol<sup>−1</sup>. On an ordinary scale, the small early values are squashed flat against the axis and the jumps among them disappear. Plotting <span class=\"mono\">log(IE)</span> compresses the range, so every jump is visible on one graph.": "逐次イオン化エネルギーの値は、とても広い範囲にわたります。ナトリウムでは、最初が 496 kJ mol<sup>−1</sup>、最後が 159 076 kJ mol<sup>−1</sup> です。ふつうの目盛りでは、はじめのほうの小さな値が軸にはりついてつぶれ、その間のジャンプが見えなくなります。<span class=\"mono\">log(IE)</span> をプロットすると範囲が縮まり、すべてのジャンプが 1 つのグラフで見えるようになります。",

    // Successive ionization energies > Additional HL > p
    "A log scale also shows what matters: how many <em>times</em> bigger each value is than the one before, not how many kJ bigger.": "対数目盛 (log scale) には、大事なことが見えるという利点もあります。それぞれの値が前の値より何 kJ 大きいかではなく、<em>何倍</em>大きいかです。",

    // Successive ionization energies > worked example > Additional HL > data-kicker attribute
    "Worked example 8": "例題 8",

    // Successive ionization energies > worked example > Additional HL > h3
    "Deducing the group from data": "データから族を導く",

    // Successive ionization energies > worked example > Additional HL > p
    "The first six successive ionization energies of a period 3 element X, in kJ mol<sup>−1</sup>, are: <span class=\"mono\">738, 1451, 7733, 10 543, 13 630, 18 020</span>. Deduce the group of X, identify X, and state its electron configuration.": "第 3 周期の元素 X の、最初の 6 つの逐次イオン化エネルギーは、kJ mol<sup>−1</sup> の単位で <span class=\"mono\">738, 1451, 7733, 10 543, 13 630, 18 020</span> です。X の族を導き (deduce)、X を特定し (identify)、その電子配置を述べなさい (state)。",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Compare each value with the one before": "それぞれの値を 1 つ前の値と比べる",

    // Successive ionization energies > worked example > Additional HL > p
    "You are looking for one step that is much bigger than the others. Divide each value by the previous one.": "ほかよりずっと大きい段階を 1 つ探します。それぞれの値を、1 つ前の値で割ります。",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Locate the large jump": "大きなジャンプの位置を見つける",

    // Successive ionization energies > worked example > Additional HL > p
    "Most steps are less than 2 times. One step is more than 5 times.": "ほとんどの段階は 2 倍未満です。1 つだけ 5 倍を超えています。",

    // Successive ionization energies > worked example > Additional HL > maths line
    "Large jump between the 2nd and 3rd ionization energies": "2 番目と 3 番目のイオン化エネルギーの間に大きなジャンプ",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Count the electrons before the jump": "ジャンプの前の電子を数える",

    // Successive ionization energies > worked example > Additional HL > p
    "Electrons removed before the jump are in the outer main energy level. The third electron comes from the next level in.": "ジャンプの前に取り除かれる電子は、最も外側の主エネルギー準位にあります。3 個目の電子は、1 つ内側の準位から出ていきます。",

    // Successive ionization energies > worked example > Additional HL > maths line
    "2 outer electrons → <b>group 2</b>": "最外殻の電子 2 個 → <b>2 族</b>",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Identify the element and write its configuration": "元素を特定し、電子配置を書く",

    // Successive ionization energies > worked example > Additional HL > p
    "Period 3 means the outer electrons are in n = 3. Group 2 means there are two of them, in 3s.": "第 3 周期なので、最外殻の電子は n = 3 にあります。2 族なので、その電子は 2 個で、3s にあります。",

    // Successive ionization energies > worked example > Additional HL > p
    "X is in group 2. It is magnesium, 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>.": "X は 2 族の元素です。マグネシウムで、電子配置は 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> です。",

    // Successive ionization energies > common mistake > Additional HL > p
    "Two slips to avoid. First, off by one: if the jump is between the 3rd and 4th values, the element has 3 outer electrons, not 4. Second, do not judge by the size of the gap in kJ. In the magnesium data the gap from the 8th to the 9th value is 5992 kJ mol<sup>−1</sup>, almost as big as the true jump (6282 kJ mol<sup>−1</sup>), but it is only a 1.23 times increase.": "避けたいミスが 2 つあります。1 つ目は、1 つずれることです。ジャンプが 3 番目と 4 番目の値の間にあれば、最外殻の電子は 4 個ではなく 3 個です。2 つ目は、kJ で見た差の大きさで判断してしまうことです。マグネシウムのデータでは、8 番目と 9 番目の値の差は 5992 kJ mol<sup>−1</sup> で、本当のジャンプ（6282 kJ mol<sup>−1</sup>）とほとんど同じ大きさです。しかし、増え方は 1.23 倍しかありません。",

    // Successive ionization energies > exam tip (shown in English + translation) > Additional HL > p
    "Give the IUPAC group number. Three outer electrons means group <b>13</b>, not group 3. Five means group 15. To explain a jump, write: the electron is removed from a main energy level <b>closer to the nucleus</b>, with <b>less shielding</b>, so it is attracted more strongly.": "族の番号は IUPAC の番号で答えます。最外殻の電子が 3 個なら <b>13</b> 族で、3 族ではありません。5 個なら 15 族です。ジャンプを説明するには、こう書きます。電子は<b>原子核により近い</b>主エネルギー準位から取り除かれ、<b>遮蔽が小さい</b>ので、より強く引きつけられている。",

    // Successive ionization energies > try it > Additional HL > data-label attribute
    "Group number": "族の番号",

    // Successive ionization energies > try it > Additional HL > p
    "The first seven successive ionization energies of an element, in kJ mol<sup>−1</sup>, are: <span class=\"mono\">1012, 1907, 2914, 4964, 6274, 21 267, 25 431</span>. Which group of the periodic table is the element in?": "ある元素の最初の 7 つの逐次イオン化エネルギーは、kJ mol<sup>−1</sup> の単位で <span class=\"mono\">1012, 1907, 2914, 4964, 6274, 21 267, 25 431</span> です。この元素は周期表の何族ですか。",

    // Successive ionization energies > try it > Additional HL > li
    "Find the step where the value becomes several times bigger. Count how many electrons were removed before it.": "値が数倍に大きくなる段階を見つけましょう。その前に取り除かれた電子が何個かを数えます。",

    // Successive ionization energies > try it > Additional HL > li
    "The large jump is from 6274 to 21 267, between the 5th and 6th values. So there are 5 outer electrons. Which group has 5 outer electrons?": "大きなジャンプは 6274 から 21 267 で、5 番目と 6 番目の値の間です。つまり、最外殻の電子は 5 個です。最外殻の電子が 5 個なのは何族ですか。",

    // Successive ionization energies > try it > Additional HL > maths line
    "21 267 / 6274 = 3.39 (all other steps are less than 2 times)": "21 267 / 6274 = 3.39（ほかの段階はどれも 2 倍未満）",

    // Successive ionization energies > try it > Additional HL > p
    "The jump comes after the 5th electron, so the element has 5 outer electrons. It is in group <strong>15</strong>. (The data are for phosphorus.)": "ジャンプは 5 個目の電子のあとにあるので、最外殻の電子は 5 個です。この元素は <strong>15</strong> 族です。（リンのデータです。）",

    // Successive ionization energies > not needed for IB > Additional HL > p
    "You never need to remember ionization energy values. Questions give you the data, as a table or a graph. Databases are a good source if you want to plot your own.": "イオン化エネルギーの値を覚える必要は、まったくありません。問題では、データが表かグラフで与えられます。自分でグラフを描いてみたいときは、データベースがよい情報源になります。",

    // Successive ionization energies > Additional HL > data-title attribute
    "Successive ionization energies: quick check": "逐次イオン化エネルギー：確認クイズ",

    // Linking it up > h2
    "Linking it up": "つなげて考える",

    // Linking it up > p
    "The syllabus asks questions that connect this topic to others. Here are short answers to four of them.": "シラバスには、このトピックをほかのトピックと結びつける問いがあります。そのうち 4 つに短く答えます。",

    // Linking it up > h3
    "How do emission spectra provide evidence for the existence of different elements?": "発光スペクトルは、異なる元素が存在することの証拠をどのように示しますか。",

    // Linking it up > p
    "Every element has its own set of energy levels, because every element has a different nuclear charge and a different number of electrons. So every element emits its own pattern of lines, like a fingerprint. A set of lines that matches no known element points to a new one. Helium was detected in the spectrum of the Sun before it was found on Earth.": "元素ごとに、エネルギー準位の組は違います。核電荷も電子の数も、元素によって違うからです。そのため、どの元素も指紋のように、その元素だけの線のパターンを出します。知られているどの元素とも合わない線の組があれば、新しい元素があるとわかります。ヘリウムは、地球で見つかる前に、太陽のスペクトルの中で発見されました。",

    // Linking it up > h3
    "How does an element’s highest main energy level relate to its period number?": "元素の最も高い主エネルギー準位は、周期の番号とどう関係していますか。",

    // Linking it up > p
    "They are the same number. Sodium is <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. Its highest occupied main energy level is n = 3, and it is in period 3. You will use this in Structure 3.1.": "同じ数です。ナトリウムは <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span> です。電子が入っている最も高い主エネルギー準位は n = 3 で、ナトリウムは第 3 周期にあります。これは Structure 3.1 で使います。",

    // Linking it up > h3
    "What is the relationship between energy sublevels and the blocks of the periodic table?": "エネルギーの副準位と周期表のブロックには、どんな関係がありますか。",

    // Linking it up > p
    "The block tells you which type of sublevel is being filled. Groups 1 and 2 are the s-block. Groups 13 to 18 are the p-block. Groups 3 to 12 are the d-block. The widths match the sublevels: 2 columns for s (2 electrons), 6 for p, 10 for d. This is developed in Structure 3.1.": "ブロックから、どの種類の副準位に電子が入っていくところなのかがわかります。1 族と 2 族は s ブロックです。13〜18 族は p ブロックです。3〜12 族は d ブロックです。ブロックの幅は副準位と合っています。s は 2 列（電子 2 個）、p は 6 列、d は 10 列です。くわしくは Structure 3.1 で学びます。",

    // Linking it up > Additional HL > h3
    "Why are log scales useful when discussing ionization energies and [H<sup>+</sup>]?": "イオン化エネルギーや [H<sup>+</sup>] を考えるとき、対数目盛が役に立つのはなぜですか。",

    // Linking it up > Additional HL > p
    "Both quantities range over many powers of ten. A log scale turns “ten times bigger” into “one unit higher”, so very large and very small values fit on one readable axis. For ionization energies that makes the jumps visible. For hydrogen ion concentration it gives the pH scale, which you will meet in Reactivity 3.1.": "どちらの量も、10 の何乗もの範囲にわたって変わります。対数目盛では「10 倍大きい」が「1 目盛り高い」になるので、とても大きい値ととても小さい値を、1 本の読みやすい軸にのせられます。イオン化エネルギーでは、これでジャンプが見えるようになります。水素イオン濃度では pH の目盛りになります。pH は Reactivity 3.1 で学びます。",

    // Linking it up > Additional HL > h3
    "How do successive ionization energies help to explain variable oxidation states?": "逐次イオン化エネルギーは、複数の酸化数をとることの説明にどう役立ちますか。",

    // Linking it up > Additional HL > p
    "For a first-row transition element, the 4s and 3d electrons are close in energy, so the first few successive ionization energies rise gradually with no large jump between them. Several different numbers of electrons can be lost for a similar energy cost. That is why iron forms both <span class=\"chem\">Fe^2+</span> and <span class=\"chem\">Fe^3+</span>. This is developed in Structure 3.1 at HL.": "第 4 周期の遷移元素では、4s と 3d の電子のエネルギーが近いので、はじめのいくつかの逐次イオン化エネルギーは少しずつ大きくなり、その間に大きなジャンプがありません。失う電子の数が違っても、必要なエネルギーはあまり変わりません。そのため、鉄は <span class=\"chem\">Fe^2+</span> と <span class=\"chem\">Fe^3+</span> の両方をつくります。くわしくは HL の Structure 3.1 で学びます。",

    // Exam-style practice > h2
    "Exam-style practice": "試験形式の練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. You get feedback after each question, and questions you have not yet answered correctly come up first.": "最初の一歩から発展問題まで、3 つのセットがあります。1 問ごとにフィードバックが出ます。まだ正解していない問題が先に出ます。",

    // Exam-style practice > data-title attribute
    "1.3 Foundation: one idea at a time": "1.3 基礎：一度に 1 つの考え方",

    // Exam-style practice > data-title attribute
    "1.3 Exam standard": "1.3 試験レベル",

    // Exam-style practice > data-title attribute
    "1.3 Challenge": "1.3 チャレンジ",

    // Exam-style practice > Additional HL > data-title attribute
    "1.3 Additional HL only: ionization energies": "1.3 HL 追加内容のみ：イオン化エネルギー",

    // widget string (assets/js/widgets-s1-3.js)
    "violet": "紫",

    // widget string (assets/js/widgets-s1-3.js)
    "blue": "青",

    // widget string (assets/js/widgets-s1-3.js)
    "green": "緑",

    // widget string (assets/js/widgets-s1-3.js)
    "yellow": "黄",

    // widget string (assets/js/widgets-s1-3.js)
    "orange": "オレンジ",

    // widget string (assets/js/widgets-s1-3.js)
    "red": "赤",

    // widget string (assets/js/widgets-s1-3.js)
    "ultraviolet": "紫外線",

    // widget string (assets/js/widgets-s1-3.js)
    "infrared": "赤外線",

    // widget string (assets/js/widgets-s1-3.js)
    "Colour": "色",

    // widget string (assets/js/widgets-s1-3.js)
    "Compared with red light (700 nm)": "赤い光（700 nm）と比べると",

    // widget string (assets/js/widgets-s1-3.js)
    "Hydrogen at this wavelength": "この波長での水素",

    // widget string (assets/js/widgets-s1-3.js)
    "Two spectra on the same wavelength scale from 400 to 700 nanometres. The top strip is a continuous spectrum: an unbroken band of colour from violet to red. The bottom strip is the line emission spectrum of hydrogen: four separate bright lines at 410, 434, 486 and 656 nanometres on a dark background.": "400〜700 ナノメートルの同じ波長目盛りに並べた 2 つのスペクトル。上の帯は連続スペクトルで、紫から赤まで色がとぎれずに続く。下の帯は水素の線スペクトル（発光スペクトル）で、暗い背景の上に、410、434、486、656 ナノメートルの 4 本の明るい線が離れて並ぶ。",

    // widget string (assets/js/widgets-s1-3.js)
    "Continuous spectrum": "連続スペクトル",

    // widget string (assets/js/widgets-s1-3.js)
    "Line emission spectrum of hydrogen": "水素の線スペクトル（発光スペクトル）",

    // widget string (assets/js/widgets-s1-3.js)
    "wavelength / nm": "波長 / nm",

    // widget string (assets/js/widgets-s1-3.js)
    "← higher frequency, higher energy": "← 振動数が高い、エネルギーが高い",

    // widget string (assets/js/widgets-s1-3.js)
    "{colour}, {nm} nm": "{colour}、{nm} nm",

    // widget string (assets/js/widgets-s1-3.js)
    "This is the red end of the visible spectrum: the longest wavelength, lowest frequency and lowest energy per photon that you can see.": "ここは可視スペクトルの赤い端です。目に見える光の中で、波長が最も長く、振動数が最も低く、光子 1 個のエネルギーが最も小さくなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Shorter wavelength, so higher frequency and more energy per photon.": "波長が短いので、振動数が高く、光子 1 個のエネルギーが大きくなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Bright line. Hydrogen atoms emit light of {nm} nm.": "明るい線。水素原子は {nm} nm の光を放出します。",

    // widget string (assets/js/widgets-s1-3.js)
    "Dark. Hydrogen atoms emit no light of this wavelength. The continuous spectrum has light here.": "暗い。水素原子はこの波長の光を放出しません。連続スペクトルには、ここにも光があります。",

    // widget string (assets/js/widgets-s1-3.js)
    "n equals infinity": "n = 無限大",

    // widget string (assets/js/widgets-s1-3.js)
    "n equals {n}": "n = {n}",

    // widget string (assets/js/widgets-s1-3.js)
    "Electron falls from n =": "落ちる前の準位 n =",

    // widget string (assets/js/widgets-s1-3.js)
    "to n =": "落ちた先の準位 n =",

    // widget string (assets/js/widgets-s1-3.js)
    "Show every line in this series": "この系列の線をすべて表示",

    // widget string (assets/js/widgets-s1-3.js)
    "Clear my lines": "自分の線を消す",

    // widget string (assets/js/widgets-s1-3.js)
    "Transition": "遷移",

    // widget string (assets/js/widgets-s1-3.js)
    "What it shows": "わかること",

    // widget string (assets/js/widgets-s1-3.js)
    "Energy-level diagram of the hydrogen atom, drawn to scale. Level n = 1 is far below the others. Levels n = 2 to n = 6 get closer and closer together and converge at n = infinity, where the energy is zero. Downward arrows show the transitions you have chosen.": "水素原子のエネルギー準位図。正しい縮尺で描いてある。準位 n = 1 は、ほかの準位よりずっと下にある。n = 2 から n = 6 の準位はどんどん近づき、エネルギーが 0 になる n = 無限大で収束する。下向きの矢印は、選んだ遷移を表す。",

    // widget string (assets/js/widgets-s1-3.js)
    "energy": "エネルギー",

    // widget string (assets/js/widgets-s1-3.js)
    "energy / {unit}": "エネルギー / {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "Arrow: electron falls, photon emitted": "矢印：電子が落ち、光子が出る",

    // widget string (assets/js/widgets-s1-3.js)
    "Each arrow: one electron falls and one photon is emitted": "矢印 1 本：電子 1 個が落ち、光子 1 個が放出される",

    // widget string (assets/js/widgets-s1-3.js)
    "Spectrum strip for the chosen series, plotted against frequency. The lines get closer together towards high frequency and stop at the convergence limit.": "選んだ系列のスペクトルの帯。横軸は振動数。線は振動数の高いほうへいくほど間隔がせまくなり、収束限界で終わる。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lines from transitions down to n = {n}": "n = {n} へ落ちる遷移の線",

    // widget string (assets/js/widgets-s1-3.js)
    "Dark band: visible light. Paler band on the right: ultraviolet.": "濃い帯：可視光。右側のうすい帯：紫外線。",

    // widget string (assets/js/widgets-s1-3.js)
    "All of these lines are ultraviolet (not visible).": "これらの線はすべて紫外線です（目に見えません）。",

    // widget string (assets/js/widgets-s1-3.js)
    "All of these lines are infrared (not visible).": "これらの線はすべて赤外線です（目に見えません）。",

    // widget string (assets/js/widgets-s1-3.js)
    "from n =": "落ちる前の n =",

    // widget string (assets/js/widgets-s1-3.js)
    "frequency and energy increase →": "振動数とエネルギーが大きくなる →",

    // widget string (assets/js/widgets-s1-3.js)
    "visible, blue (close to green)": "可視光、青（緑に近い）",

    // widget string (assets/js/widgets-s1-3.js)
    "visible, blue (close to violet)": "可視光、青（紫に近い）",

    // widget string (assets/js/widgets-s1-3.js)
    "visible, {colour}": "可視光、{colour}",

    // widget string (assets/js/widgets-s1-3.js)
    "This is the convergence limit of the series. The lines crowd together and stop here, because the energy levels themselves converge at n = ∞.": "ここがこの系列の収束限界です。線はここに集まって終わります。エネルギー準位そのものが n = ∞ で収束するからです。",

    // widget string (assets/js/widgets-s1-3.js)
    "Drops to n = 1 are the largest, so these photons have the most energy. All of these lines are ultraviolet.": "n = 1 への落差は最も大きいので、これらの光子のエネルギーは最も大きくなります。これらの線はすべて紫外線です。",

    // widget string (assets/js/widgets-s1-3.js)
    "A drop to n = 2 from n = 3, 4, 5 or 6 gives one of the four visible lines. A bigger drop gives a shorter wavelength.": "n = 3、4、5、6 から n = 2 へ落ちると、可視領域の 4 本の線のどれかになります。落差が大きいほど、波長は短くなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Drops to n = 2 from levels above n = 6 fall just outside the visible region, in the ultraviolet.": "n = 6 より上の準位から n = 2 へ落ちると、可視領域のすぐ外側の紫外線になります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Drops to n = 3 are small, so these photons have little energy. All of these lines are infrared.": "n = 3 への落差は小さいので、これらの光子のエネルギーは小さくなります。これらの線はすべて赤外線です。",

    // widget string (assets/js/widgets-s1-3.js)
    "This limit is for electrons falling to n = 1, the ground state. So this energy is the first ionization energy of hydrogen. The data booklet value is 1312 {unit}.": "この限界は、電子が基底状態の n = 1 へ落ちるときのものです。そのため、このエネルギーは水素の第一イオン化エネルギーです。データブックレットの値は 1312 {unit} です。",

    // widget string (assets/js/widgets-s1-3.js)
    "This limit belongs to electrons falling to n = {n}. It is the energy needed to remove an electron that starts in n = {n}, not the first ionization energy. For that you need the limit of the lines ending on n = 1.": "この限界は、電子が n = {n} へ落ちるときのものです。n = {n} にある電子を取り除くのに必要なエネルギーで、第一イオン化エネルギーではありません。第一イオン化エネルギーを求めるには、n = 1 で終わる線の限界が必要です。",

    // widget string (assets/js/widgets-s1-3.js)
    "This matches the gap between the two levels on the diagram. The wavelength is rounded to 3 significant figures, so the last digit can differ by 1.": "これは、図の 2 つの準位の差と合っています。波長は有効数字 3 桁に丸めてあるので、最後の桁が 1 だけ違うことがあります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Additional HL": "HL 追加内容",

    // widget string (assets/js/widgets-s1-3.js)
    "Calculate this limit step by step": "この限界を順を追って計算する",

    // widget string (assets/js/widgets-s1-3.js)
    "Calculate this photon step by step": "この光子を順を追って計算する",

    // widget string (assets/js/widgets-s1-3.js)
    "{E} J per photon": "{E} J（光子 1 個あたり）",

    // widget string (assets/js/widgets-s1-3.js)
    "per mole: {E} J × 6.02 × 10<sup>23</sup> mol<sup>−1</sup> ÷ 1000 = {m} {unit}": "1 mol あたり：{E} J × 6.02 × 10<sup>23</sup> mol<sup>−1</sup> ÷ 1000 = {m} {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "s orbital": "s 軌道",

    // widget string (assets/js/widgets-s1-3.js)
    "Sphere. The same in every direction.": "球形。どの方向にも同じ。",

    // widget string (assets/js/widgets-s1-3.js)
    "An s orbital: a sphere centred on the nucleus, where the x, y and z axes cross.": "s 軌道：原子核を中心とする球。原子核は x、y、z 軸が交わる点にある。",

    // widget string (assets/js/widgets-s1-3.js)
    "p<sub>x</sub> orbital": "p<sub>x</sub> 軌道",

    // widget string (assets/js/widgets-s1-3.js)
    "Dumbbell along the x axis.": "x 軸に沿ったダンベル形。",

    // widget string (assets/js/widgets-s1-3.js)
    "A p x orbital: a dumbbell of two lobes lying along the x axis, one on each side of the nucleus.": "p x 軌道：2 つのふくらみからなるダンベル形で、x 軸に沿って原子核の両側に 1 つずつある。",

    // widget string (assets/js/widgets-s1-3.js)
    "p<sub>y</sub> orbital": "p<sub>y</sub> 軌道",

    // widget string (assets/js/widgets-s1-3.js)
    "Dumbbell along the y axis.": "y 軸に沿ったダンベル形。",

    // widget string (assets/js/widgets-s1-3.js)
    "A p y orbital: a dumbbell of two lobes lying along the y axis.": "p y 軌道：2 つのふくらみからなるダンベル形で、y 軸に沿っている。",

    // widget string (assets/js/widgets-s1-3.js)
    "p<sub>z</sub> orbital": "p<sub>z</sub> 軌道",

    // widget string (assets/js/widgets-s1-3.js)
    "Dumbbell along the z axis.": "z 軸に沿ったダンベル形。",

    // widget string (assets/js/widgets-s1-3.js)
    "A p z orbital: a dumbbell of two lobes lying along the z axis.": "p z 軌道：2 つのふくらみからなるダンベル形で、z 軸に沿っている。",

    // widget string (assets/js/widgets-s1-3.js)
    "Element": "元素",

    // widget string (assets/js/widgets-s1-3.js)
    "Atom or ion": "原子かイオン",

    // widget string (assets/js/widgets-s1-3.js)
    "{symbol}{charge} ion": "{symbol}{charge} イオン",

    // widget string (assets/js/widgets-s1-3.js)
    "{symbol} atom": "{symbol} 原子",

    // widget string (assets/js/widgets-s1-3.js)
    "Mode": "モード",

    // widget string (assets/js/widgets-s1-3.js)
    "Show me": "見本を見る",

    // widget string (assets/js/widgets-s1-3.js)
    "Fill it yourself": "自分で入れる",

    // widget string (assets/js/widgets-s1-3.js)
    "Next arrow": "次の矢印",

    // widget string (assets/js/widgets-s1-3.js)
    "spin up": "上向きスピン",

    // widget string (assets/js/widgets-s1-3.js)
    "spin down": "下向きスピン",

    // widget string (assets/js/widgets-s1-3.js)
    "Undo": "元に戻す",

    // widget string (assets/js/widgets-s1-3.js)
    "Clear": "すべて消す",

    // widget string (assets/js/widgets-s1-3.js)
    "Last electron removed.": "最後に入れた電子を取り消しました。",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram": "軌道図",

    // widget string (assets/js/widgets-s1-3.js)
    "Full configuration": "完全な電子配置",

    // widget string (assets/js/widgets-s1-3.js)
    "Condensed configuration": "省略形の電子配置",

    // widget string (assets/js/widgets-s1-3.js)
    "Click an orbital box to add an electron. Start with the lowest-energy sublevel. Choose the arrow direction with <b>Next arrow</b>.": "軌道の箱をクリックすると、電子が 1 個入ります。エネルギーが最も低い副準位から始めましょう。矢印の向きは<b>次の矢印</b>で選びます。",

    // widget string (assets/js/widgets-s1-3.js)
    "A hydrogen atom has only 1 electron. It is already placed.": "水素原子の電子は 1 個だけです。すでに入っています。",

    // widget string (assets/js/widgets-s1-3.js)
    "A {name} atom has only {n} electrons. They are all placed.": "{name}原子の電子は {n} 個だけです。すべて入りました。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Pauli exclusion principle broken.</b> An orbital can hold at most two electrons. This one is full.": "<b>パウリの排他原理に反しています。</b>1 つの軌道に入る電子は最大 2 個です。この軌道はもういっぱいです。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Pauli exclusion principle broken.</b> Two electrons in the same orbital must have opposite spins. Switch <b>Next arrow</b> to the other direction.": "<b>パウリの排他原理に反しています。</b>同じ軌道の 2 個の電子は、スピンが逆向きでなければなりません。<b>次の矢印</b>を反対の向きに切り替えましょう。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Aufbau principle broken.</b> Electrons go into the lowest-energy sublevel that has space. The {lower} sublevel is lower in energy than {sub} and is not full yet.": "<b>構成原理に反しています。</b>電子は、空きのある副準位のうち、エネルギーが最も低いものに入ります。{lower} 副準位は {sub} よりエネルギーが低く、まだいっぱいになっていません。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Hund’s rule broken.</b> Every orbital in a sublevel gets one electron before any orbital gets a second. There is still an empty {sub} orbital.": "<b>フントの規則に反しています。</b>副準位のすべての軌道に電子が 1 個ずつ入ってから、2 個目が入ります。{sub} 軌道にまだ空きがあります。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Hund’s rule broken.</b> Single electrons in the same sublevel have parallel spins, so their arrows point the same way. Switch <b>Next arrow</b>.": "<b>フントの規則に反しています。</b>同じ副準位に 1 個ずつ入っている電子は、スピンが平行なので、矢印は同じ向きです。<b>次の矢印</b>を切り替えましょう。",

    // widget string (assets/js/widgets-s1-3.js)
    "Electron added to {sub}. Electrons still to place: {n}.": "{sub} に電子が入りました。残りの電子：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Complete.</b> This is the ground-state configuration of {name}: {config}. You used the exception: one electron in 4s.": "<b>完成です。</b>これが{name}の基底状態の電子配置です：{config}。例外のとおり、4s の電子を 1 個にできました。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Complete.</b> This is the ground-state configuration of {name}: {config}.": "<b>完成です。</b>これが{name}の基底状態の電子配置です：{config}。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Nearly.</b> This is what the filling order predicts, but {name} is one of the two exceptions you must know. Its real configuration is {config}. Press Undo to take one electron out of 4s, then put it in 3d.": "<b>おしい。</b>電子が入る順番どおりならこうなりますが、{name}は必ず覚える 2 つの例外の 1 つです。実際の電子配置は {config} です。「元に戻す」を押して 4s から電子を 1 個取り出し、3d に入れましょう。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, empty. Add an electron.": "{sub} 軌道 {i}、空。電子を入れる。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, empty. Add an electron.": "{sub} 軌道、空。電子を入れる。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, full with 2 electrons.": "{sub} 軌道 {i}、電子 2 個でいっぱい。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, full with 2 electrons.": "{sub} 軌道、電子 2 個でいっぱい。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, 1 electron with spin up. Add an electron.": "{sub} 軌道 {i}、上向きスピンの電子が 1 個。電子を入れる。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, 1 electron with spin up. Add an electron.": "{sub} 軌道、上向きスピンの電子が 1 個。電子を入れる。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, 1 electron with spin down. Add an electron.": "{sub} 軌道 {i}、下向きスピンの電子が 1 個。電子を入れる。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, 1 electron with spin down. Add an electron.": "{sub} 軌道、下向きスピンの電子が 1 個。電子を入れる。",

    // widget string (assets/js/widgets-s1-3.js)
    "energy (not to scale)": "エネルギー（縮尺は正確ではない）",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram you are filling for a {name} atom. {done} of {n} electrons placed.": "{name}原子の軌道図を作成中。電子 {n} 個のうち {done} 個を入れた。",

    // widget string (assets/js/widgets-s1-3.js)
    "{done} of {n} electrons placed": "{n} 個中 {done} 個の電子を配置",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram for {species}. Electrons in each sublevel: {list}.": "{species}の軌道図。それぞれの副準位の電子：{list}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram for {species}. It has no electrons.": "{species}の軌道図。電子はない。",

    // widget string (assets/js/widgets-s1-3.js)
    "no electrons": "電子なし",

    // widget string (assets/js/widgets-s1-3.js)
    "none: no noble gas comes before this element": "なし：この元素より前に貴ガスがない",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Exception.</b> Chromium is 4s<sup>1</sup> 3d<sup>5</sup>, not 4s<sup>2</sup> 3d<sup>4</sup>. The 4s and 3d sublevels are very close in energy, and for this atom the arrangement with one 4s electron has the lower energy. Cr and Cu are the only two exceptions you need to know.": "<b>例外。</b>クロムは 4s<sup>2</sup> 3d<sup>4</sup> ではなく、4s<sup>1</sup> 3d<sup>5</sup> です。4s と 3d の副準位はエネルギーがとても近く、この原子では 4s の電子が 1 個の配置のほうがエネルギーが低くなります。覚える例外は Cr と Cu の 2 つだけです。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Exception.</b> Copper is 4s<sup>1</sup> 3d<sup>10</sup>, not 4s<sup>2</sup> 3d<sup>9</sup>. The 4s and 3d sublevels are very close in energy, and for this atom the arrangement with one 4s electron has the lower energy. Cr and Cu are the only two exceptions you need to know.": "<b>例外。</b>銅は 4s<sup>2</sup> 3d<sup>9</sup> ではなく、4s<sup>1</sup> 3d<sup>10</sup> です。4s と 3d の副準位はエネルギーがとても近く、この原子では 4s の電子が 1 個の配置のほうがエネルギーが低くなります。覚える例外は Cr と Cu の 2 つだけです。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species} has {n} electrons, filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Note that 4s fills before 3d.": "{species}の電子は {n} 個で、1s、2s、2p、3s、3p、4s、3d、4p の順に入ります。3d より先に 4s に入ることに注意しましょう。",

    // widget string (assets/js/widgets-s1-3.js)
    "H has 1 electron. It goes into 1s, the lowest-energy sublevel.": "H の電子は 1 個です。エネルギーが最も低い副準位の 1s に入ります。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species} has {n} electrons, filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p.": "{species}の電子は {n} 個で、1s、2s、2p、3s、3p、4s、3d、4p の順に入ります。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species} is a hydrogen atom that has lost its only electron. It is a bare proton.": "{species}は、ただ 1 個の電子を失った水素原子です。陽子だけになっています。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and add electrons to the next space. Electrons added: {k}. Total: {n}.": "{species}：原子（{atom}）から始めて、次に空いているところへ電子を加えます。加えた電子：{k} 個。合計：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "AHL": "AHL",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and remove electrons. Electrons removed: {k}. <b>The 4s electrons are removed before any 3d electron.</b> Once 3d holds electrons it is lower in energy than 4s, which is why the diagram for this ion shows 3d below 4s. Ions of the d-block metals are assessed at HL (Structure 3.1).": "{species}：原子（{atom}）から始めて、電子を取り除きます。取り除いた電子：{k} 個。<b>3d の電子より先に、4s の電子が取り除かれます。</b>3d に電子が入ると、3d は 4s よりエネルギーが低くなります。このイオンの図で 3d が 4s より下にあるのは、そのためです。d ブロック金属のイオンは HL で出題されます（Structure 3.1）。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and remove electrons from the highest main energy level, 4p first and then 4s. Electrons removed: {k}. Total left: {n}.": "{species}：原子（{atom}）から始めて、最も高い主エネルギー準位から電子を取り除きます。先に 4p、次に 4s です。取り除いた電子：{k} 個。残りの合計：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and remove electrons from the highest main energy level. Electrons removed: {k}. Total left: {n}.": "{species}：原子（{atom}）から始めて、最も高い主エネルギー準位から電子を取り除きます。取り除いた電子：{k} 個。残りの合計：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "That is the same configuration as a helium atom.": "これはヘリウム原子と同じ電子配置です。",

    // widget string (assets/js/widgets-s1-3.js)
    "That is the same configuration as a neon atom.": "これはネオン原子と同じ電子配置です。",

    // widget string (assets/js/widgets-s1-3.js)
    "That is the same configuration as an argon atom.": "これはアルゴン原子と同じ電子配置です。",

    // widget string (assets/js/widgets-s1-3.js)
    "Atomic number, Z": "原子番号 Z",

    // widget string (assets/js/widgets-s1-3.js)
    "Jump to a discontinuity": "不連続へ移動",

    // widget string (assets/js/widgets-s1-3.js)
    "Join up a group": "同じ族を線で結ぶ",

    // widget string (assets/js/widgets-s1-3.js)
    "none": "なし",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 1 (Li, Na, K)": "1 族（Li、Na、K）",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 2 (Be, Mg, Ca)": "2 族（Be、Mg、Ca）",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 17 (F, Cl, Br)": "17 族（F、Cl、Br）",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 18 (He, Ne, Ar, Kr)": "18 族（He、Ne、Ar、Kr）",

    // widget string (assets/js/widgets-s1-3.js)
    "First ionization energy": "第一イオン化エネルギー",

    // widget string (assets/js/widgets-s1-3.js)
    "Electron removed from": "電子が取り除かれる場所",

    // widget string (assets/js/widgets-s1-3.js)
    "Compared with the element before it": "1 つ前の元素と比べると",

    // widget string (assets/js/widgets-s1-3.js)
    "Compared with the element above it": "1 つ上の元素と比べると",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of first ionization energy against atomic number for hydrogen to krypton. The values rise across each period with small dips after groups 2 and 15, peak at each noble gas, then drop sharply at the start of the next period.": "水素からクリプトンまでの、原子番号に対する第一イオン化エネルギーのグラフ。値は各周期で左から右へ大きくなるが、2 族と 15 族のあとで少し下がる。貴ガスで最大になり、次の周期のはじめで急に下がる。",

    // widget string (assets/js/widgets-s1-3.js)
    "period {n}": "第 {n} 周期",

    // widget string (assets/js/widgets-s1-3.js)
    "atomic number, Z": "原子番号 Z",

    // widget string (assets/js/widgets-s1-3.js)
    "first IE / {unit}": "第一 IE / {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "{symbol} ({name}), Z = {z}": "{symbol}（{name}）、Z = {z}",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} sublevel": "{sub} 副準位",

    // widget string (assets/js/widgets-s1-3.js)
    "Hydrogen is the first element. Its one electron is in 1s, close to the nucleus, with no inner electrons to shield it.": "水素は最初の元素です。1 個の電子は原子核に近い 1s にあり、遮蔽する内側の電子はありません。",

    // widget string (assets/js/widgets-s1-3.js)
    "Higher than H ({pv}). Helium has two protons instead of one, and both electrons are in the same 1s sublevel with no inner electrons to shield them. The attraction to the nucleus is much stronger.": "H（{pv}）より高くなっています。ヘリウムの陽子は 1 個ではなく 2 個です。2 個の電子はどちらも同じ 1s 副準位にあり、遮蔽する内側の電子はありません。原子核との引力はずっと強くなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Large drop from {prev} ({pv}). A new period starts. The electron removed is in a new main energy level (n = {n}), further from the nucleus and shielded by more inner electrons, so it is attracted less strongly.": "{prev}（{pv}）から大きく下がります。新しい周期の始まりです。取り除かれる電子は新しい主エネルギー準位（n = {n}）にあります。原子核から遠く、より多くの内側の電子に遮蔽されるので、引きつけられる力が弱くなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {prev} ({pv}), even though the nuclear charge is greater. This is a discontinuity. The electron removed from {el} is in the {sub} sublevel, which is higher in energy than the {ssub} sublevel that {prev} loses an electron from. A higher-energy electron needs less energy to remove.": "{prev}（{pv}）より低くなっています。核電荷は大きいのに、です。これが不連続です。{el} から取り除かれる電子は {sub} 副準位にあり、これは {prev} が電子を失う {ssub} 副準位よりエネルギーが高くなっています。エネルギーの高い電子は、少ないエネルギーで取り除けます。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {prev} ({pv}), even though the nuclear charge is greater. This is a discontinuity. In {prev} each {sub} orbital holds one electron. In {el} one {sub} orbital holds a pair. Two electrons in the same orbital repel each other, so one of them is removed more easily.": "{prev}（{pv}）より低くなっています。核電荷は大きいのに、です。これが不連続です。{prev} では、どの {sub} 軌道にも電子が 1 個ずつ入っています。{el} では、{sub} 軌道の 1 つに電子が対になって入っています。同じ軌道にある 2 個の電子は互いに反発するので、片方が取り除かれやすくなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Part of the d-block (Sc to Zn). First ionization energy changes only a little here: {prev} is {pv}. You are not asked to explain these small rises and falls in Structure 1.3.": "d ブロック（Sc〜Zn）の元素です。ここでは、第一イオン化エネルギーは少ししか変わりません。{prev} は {pv} です。こうした小さな上がり下がりの説明は、Structure 1.3 では求められません。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {prev} ({pv}). The electron removed from {el} is in the {sub} sublevel, which is higher in energy than the {ssub} sublevel that {prev} loses an electron from. A higher-energy electron needs less energy to remove.": "{prev}（{pv}）より低くなっています。{el} から取り除かれる電子は {sub} 副準位にあり、これは {prev} が電子を失う {ssub} 副準位よりエネルギーが高くなっています。エネルギーの高い電子は、少ないエネルギーで取り除けます。",

    // widget string (assets/js/widgets-s1-3.js)
    "Higher than {prev} ({pv}). This is the general trend across a period. The nuclear charge increases by one proton. The electron removed is in the same main energy level, so the shielding by inner electrons is about the same. The outer electrons are held more strongly and the atom is smaller.": "{prev}（{pv}）より高くなっています。これが周期を左から右への全体的な傾向です。核電荷は陽子 1 個分大きくなります。取り除かれる電子は同じ主エネルギー準位にあるので、内側の電子による遮蔽はほとんど同じです。外側の電子はより強く引きつけられ、原子は小さくなります。",

    // widget string (assets/js/widgets-s1-3.js)
    "No element above it within Z = 1 to 36.": "Z = 1〜36 の範囲では、上に元素がありません。",

    // widget string (assets/js/widgets-s1-3.js)
    "Nothing above it. This is period 1.": "上に元素はありません。ここは第 1 周期です。",

    // widget string (assets/js/widgets-s1-3.js)
    "Period 2 elements are at the top of their groups. Step down to period 3 to see the group trend.": "第 2 周期の元素は、族のいちばん上にあります。第 3 周期へ進むと、族の傾向が見られます。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {above} ({av}). This is the trend down a group. The outer electron is in a higher main energy level (n = {n} instead of n = {m}), so it is further from the nucleus and shielded by more inner electrons. This outweighs the greater nuclear charge.": "{above}（{av}）より低くなっています。これが族を上から下への傾向です。いちばん外側の電子は、より高い主エネルギー準位（n = {m} ではなく n = {n}）にあります。そのため原子核から遠く、より多くの内側の電子に遮蔽されます。この効果が、核電荷の増加を上回ります。",

    // widget string (assets/js/widgets-s1-3.js)
    "Almost the same as {above} ({av}). This is an exception to the usual decrease down a group. You will not be asked to explain it.": "{above}（{av}）とほとんど同じです。族を下へ進むとふつうは小さくなるので、これは例外です。この説明を求められることはありません。",

    // widget string (assets/js/widgets-s1-3.js)
    "Mystery element": "なぞの元素",

    // widget string (assets/js/widgets-s1-3.js)
    "Vertical scale": "縦軸の目盛り",

    // widget string (assets/js/widgets-s1-3.js)
    "New mystery element": "新しいなぞの元素",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of successive ionization energies against the number of the electron removed.": "取り除かれる電子の順番に対する、逐次イオン化エネルギーのグラフ。",

    // widget string (assets/js/widgets-s1-3.js)
    "Which group is the mystery element in?": "なぞの元素は何族ですか。",

    // widget string (assets/js/widgets-s1-3.js)
    "Group {g}": "{g} 族",

    // widget string (assets/js/widgets-s1-3.js)
    "Successive ionization energies / {unit}": "逐次イオン化エネルギー / {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "How to read it": "読み取り方",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Correct.</b> The first large jump comes after electron {v}, so the number of electrons in the outer main energy level is {v}: group {g}. The element is {name}.": "<b>正解です。</b>最初の大きなジャンプは {v} 個目の電子のあとにあります。つまり、最も外側の主エネルギー準位の電子は {v} 個で、{g} 族です。この元素は{name}です。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>One out.</b> Find the first large jump and count the electrons removed <em>before</em> it. If the jump is between electron 3 and electron 4, then 3 electrons are in the outer level. Count again.": "<b>1 つずれています。</b>最初の大きなジャンプを見つけ、その<em>前</em>に取り除かれた電子を数えましょう。ジャンプが 3 個目と 4 個目の電子の間にあれば、最外殻の電子は 3 個です。もう一度数えてみましょう。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Not yet.</b> Look for the first place where the graph steps up sharply. Ignore the small steps. A group {g} element would have that jump after electron {k}.": "<b>まだです。</b>グラフが最初に急に上がるところを探しましょう。小さな段差は無視します。{g} 族の元素なら、そのジャンプは {k} 個目の電子のあとにあります。",

    // widget string (assets/js/widgets-s1-3.js)
    "number of the electron removed": "取り除かれる電子の順番",

    // widget string (assets/js/widgets-s1-3.js)
    "log(IE / {unit})": "log(IE / {unit})",

    // widget string (assets/js/widgets-s1-3.js)
    "IE / {unit} (k = thousand)": "IE / {unit}（k = 1000）",

    // widget string (assets/js/widgets-s1-3.js)
    "Mystery element, first {n} values": "なぞの元素、最初の {n} 個の値",

    // widget string (assets/js/widgets-s1-3.js)
    "Find the first large jump. Count the electrons removed before it. That number is the number of outer electrons.": "最初の大きなジャンプを見つけましょう。その前に取り除かれた電子を数えます。その数が最外殻の電子の数です。",

    // widget string (assets/js/widgets-s1-3.js)
    "First large jump: after electron {v} (the value becomes {ratio} times bigger). Outer electrons: {v}. Group {g}.": "最初の大きなジャンプ：{v} 個目の電子のあと（値が {ratio} 倍になる）。最外殻の電子：{v} 個。{g} 族。",

    // widget string (assets/js/widgets-s1-3.js)
    "First large jump: after electron {v} (the value becomes {ratio} times bigger). Outer electrons: {v}. Group {g}. The brackets, read from left to right, give the electrons in each main energy level, outermost first: {list}.": "最初の大きなジャンプ：{v} 個目の電子のあと（値が {ratio} 倍になる）。最外殻の電子：{v} 個。{g} 族。かっこを左から右へ読むと、外側から順に、それぞれの主エネルギー準位の電子の数がわかります：{list}。",

    // widget string (assets/js/widgets-s1-3.js)
    "The smaller step after electron 1 is a change of sublevel (p to s), not a new main energy level.": "1 個目の電子のあとの小さな段差は、副準位が変わること（p から s）によるもので、新しい主エネルギー準位ではありません。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of the logarithm of successive ionization energy against the number of the electron removed, for {name}. Values in order, in kilojoules per mole: {values}.": "{name}の、取り除かれる電子の順番に対する逐次イオン化エネルギーの対数のグラフ。値は順に（単位はキロジュール毎モル）：{values}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of the logarithm of successive ionization energy against the number of the electron removed, for a mystery element. Values in order, in kilojoules per mole: {values}.": "なぞの元素の、取り除かれる電子の順番に対する逐次イオン化エネルギーの対数のグラフ。値は順に（単位はキロジュール毎モル）：{values}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of successive ionization energy against the number of the electron removed, for {name}. Values in order, in kilojoules per mole: {values}.": "{name}の、取り除かれる電子の順番に対する逐次イオン化エネルギーのグラフ。値は順に（単位はキロジュール毎モル）：{values}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of successive ionization energy against the number of the electron removed, for a mystery element. Values in order, in kilojoules per mole: {values}.": "なぞの元素の、取り除かれる電子の順番に対する逐次イオン化エネルギーのグラフ。値は順に（単位はキロジュール毎モル）：{values}。",

  }
});
