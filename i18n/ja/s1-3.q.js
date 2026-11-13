/* s1-3.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-3.q', {
  questions: {

    // ── s1-3-q001 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q001": {
      // EN: <p>Which statement describes a <strong>line</strong> spectrum?</p>
      stem: "<p><strong>線</strong>スペクトル (line spectrum) を正しく説明している文はどれですか。</p>",
      options: [
        // EN: It contains all the wavelengths in a range, so the colours merge into each other.
        "ある範囲の波長をすべて含み、色が切れ目なくつながっている。",
        // EN: It contains only certain separate wavelengths, seen as individual lines.
        "決まったとびとびの波長だけを含み、1 本ずつ分かれた線として見える。",
        // EN: It contains only one wavelength, seen as a single line.
        "波長を 1 つだけ含み、1 本の線として見える。",
        // EN: It contains every wavelength of the electromagnetic spectrum.
        "電磁スペクトルのすべての波長を含む。",
      ],
      hints: [
        // EN: Picture a rainbow next to a set of thin coloured lines on a dark background. Which one is the line spectrum?
        "虹と、暗い背景に並んだ細い色の線を思い浮かべましょう。線スペクトルはどちらですか。",
      ],
      // EN: <p>A <strong>continuous</strong> spectrum contains all wavelengths (or frequencies) in a range. A <strong>line</strong> spectrum contains only certain discrete wavelengths (or frequencies), seen as separate lines.</p>
      solution: "<p><strong>連続</strong>スペクトルは、ある範囲の波長（または振動数）をすべて含みます。<strong>線</strong>スペクトルは、決まったとびとびの波長（または振動数）だけを含み、分かれた線として見えます。</p>",
      misconception: {
        // EN (option A): This describes a continuous spectrum, such as the rainbow of colours from white light passed through a prism.
        "0": "これは連続スペクトルの説明です。白色光をプリズムに通したときに見える虹色がその例です。",
        // EN (option C): A line spectrum usually has many lines. Each line is one wavelength, but there are several of them.
        "2": "線スペクトルには、ふつう線が何本もあります。1 本の線は 1 つの波長ですが、線は複数あります。",
        // EN (option D): This is the opposite idea. A line spectrum is missing most wavelengths. Only a few specific ones are present.
        "3": "考え方が逆です。線スペクトルでは、ほとんどの波長が欠けています。決まったいくつかの波長だけがあります。",
      },
    },

    // ── s1-3-q002 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q002": {
      // EN: <p>Which colour of visible light has photons of the <strong>highest</strong> energy?</p>
      stem: "<p>可視光のうち、光子のエネルギーが<strong>最も大きい</strong>のは何色の光ですか。</p>",
      options: [
        // EN: Red
        "赤",
        // EN: Yellow
        "黄",
        // EN: Green
        "緑",
        // EN: Violet
        "紫",
      ],
      hints: [
        // EN: The data booklet shows the visible region running from violet (about 400 nm) to red (about 700 nm).
        "データブックレットでは、可視光の領域は紫（約 400 nm）から赤（約 700 nm）までです。",
        // EN: Shorter wavelength means higher frequency, and higher frequency means higher energy.
        "波長が短いほど振動数は大きく、振動数が大きいほどエネルギーは大きくなります。",
      ],
      // EN: <p>Violet light has the shortest wavelength in the visible region (about 400 nm). Shorter wavelength means higher frequency and higher energy, so violet photons have the highest energy.</p>
      solution: "<p>紫の光は、可視光の領域で波長が最も短い光です（約 400 nm）。波長が短いほど振動数とエネルギーは大きいので、紫の光子のエネルギーが最大です。</p>",
      misconception: {
        // EN (option A): Red light has the longest wavelength in the visible region, so it has the lowest frequency and the lowest energy.
        "0": "赤い光は可視光の領域で波長が最も長いので、振動数もエネルギーも最も小さくなります。",
        // EN (option B): Yellow is in the middle of the visible region. Look for the colour with the shortest wavelength.
        "1": "黄は可視光の領域の中ほどにあります。波長が最も短い色を探しましょう。",
        // EN (option C): Green is in the middle of the visible region. Look for the colour with the shortest wavelength.
        "2": "緑は可視光の領域の中ほどにあります。波長が最も短い色を探しましょう。",
      },
    },

    // ── s1-3-q003 · order · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q003": {
      // EN: <p>Put these types of electromagnetic radiation in order of <strong>increasing frequency</strong> (lowest frequency first).</p>
      stem: "<p>次の電磁波を、<strong>振動数が小さい順</strong>に並べてください（振動数が最も小さいものが先頭）。</p>",
      options: [
        // EN: Infrared
        "赤外線",
        // EN: Red light
        "赤い光",
        // EN: Green light
        "緑の光",
        // EN: Violet light
        "紫の光",
        // EN: Ultraviolet
        "紫外線",
      ],
      hints: [
        // EN: Increasing frequency is the same order as increasing energy and <em>decreasing</em> wavelength.
        "振動数が大きくなる順は、エネルギーが大きくなる順と同じです。波長は<em>短く</em>なる順です。",
        // EN: Infrared lies next to the red end of the visible region. Ultraviolet lies next to the violet end.
        "赤外線は、可視光の赤い端のとなりにあります。紫外線は、紫の端のとなりにあります。",
      ],
      // EN: <p>Infrared has the longest wavelength of these, so it has the lowest frequency. Within the visible region the wavelength falls from red (about 700 nm) through green to violet (about 400 nm), so the frequency rises. Ultraviolet has a shorter wavelength than violet, so it has the highest frequency and the highest energy.</p>
      solution: "<p>この中で波長が最も長いのは赤外線なので、振動数は最も小さくなります。可視光の領域では、赤（約 700 nm）から緑、紫（約 400 nm）へと波長が短くなるので、振動数は大きくなります。紫外線は紫より波長が短いので、振動数もエネルギーも最大です。</p>",
    },

    // ── s1-3-q004 · short · exam · SL · Structure 1.3.1 · 2 marks
    "s1-3-q004": {
      // EN: <p>A sample of gaseous atoms is given energy by an electric discharge. Explain how one line in the emission spectrum of the element is produced.</p>
      stem: "<p>気体の原子の試料に、放電でエネルギーを与えます。この元素の発光スペクトル (emission spectrum) の線が 1 本できるしくみを説明しなさい (explain)。</p>",
      hints: [
        // EN: Start with where the electron is after the atom has absorbed energy.
        "原子がエネルギーを吸収したあと、電子がどこにあるかから書き始めましょう。",
        // EN: What leaves the atom when the electron drops down, and what fixes its energy?
        "電子が下の準位に落ちるとき、原子から何が出ていきますか。そのエネルギーは何で決まりますか。",
      ],
      // EN: <p>The energy excites an electron to a higher energy level. The electron then returns (falls) to a lower energy level and emits a photon. The energy of the photon equals the difference in energy between the two levels, so the light has one specific frequency (wavelength), which is seen as a line.</p>
      answer: "<p>エネルギーを受け取った電子は、高いエネルギー準位へ励起されます。その後、電子は低いエネルギー準位へ戻り（落ち）、光子を放出します。光子のエネルギーは 2 つの準位のエネルギー差に等しいので、光は決まった 1 つの振動数（波長）をもち、1 本の線として見えます。</p>",
      markscheme: [
        // EN: An electron (in an excited state) returns/falls from a higher energy level to a lower energy level.
        "（励起状態の）電子が、高いエネルギー準位から低いエネルギー準位へ戻る / 落ちる。",
        // EN: A photon is emitted whose energy equals the difference between the two levels (accept: light of a specific frequency/wavelength is emitted).
        "2 つの準位のエネルギー差に等しいエネルギーをもつ光子が放出される（「決まった振動数 / 波長の光が放出される」も可）。",
      ],
    },

    // ── s1-3-q005 · mcq · foundation · SL · Structure 1.3.2 · 1 mark
    "s1-3-q005": {
      // EN: <p>In the emission spectrum of hydrogen, electrons fall to the first, second or third energy level. Which row gives the region of the electromagnetic spectrum for each set of lines?</p>
      stem: "<p>水素の発光スペクトルでは、電子が第 1、第 2、第 3 のエネルギー準位に落ちます。それぞれの線の組が現れる電磁スペクトルの領域を、正しく示している組み合わせはどれですか。</p>",
      options: [
        // EN: To n = 1: visible. To n = 2: ultraviolet. To n = 3: infrared.
        "n = 1 へ：可視光。n = 2 へ：紫外線。n = 3 へ：赤外線。",
        // EN: To n = 1: ultraviolet. To n = 2: visible. To n = 3: infrared.
        "n = 1 へ：紫外線。n = 2 へ：可視光。n = 3 へ：赤外線。",
        // EN: To n = 1: infrared. To n = 2: visible. To n = 3: ultraviolet.
        "n = 1 へ：赤外線。n = 2 へ：可視光。n = 3 へ：紫外線。",
        // EN: To n = 1: ultraviolet. To n = 2: infrared. To n = 3: visible.
        "n = 1 へ：紫外線。n = 2 へ：赤外線。n = 3 へ：可視光。",
      ],
      hints: [
        // EN: Falls to the lowest level release the most energy.
        "最も低い準位に落ちるとき、放出されるエネルギーは最大です。",
        // EN: In order of decreasing energy: ultraviolet, visible, infrared.
        "エネルギーが大きい順に、紫外線、可視光、赤外線です。",
      ],
      // EN: <p>The gap between n = 1 and the levels above it is the largest, so falls to n = 1 emit the highest-energy photons: <strong>ultraviolet</strong>. Falls to n = 2 release less energy: <strong>visible</strong>. Falls to n = 3 release less again: <strong>infrared</strong>.</p>
      solution: "<p>n = 1 とその上の準位との差が最も大きいので、n = 1 に落ちるときに最もエネルギーの大きい光子が出ます。これが<strong>紫外線</strong>です。n = 2 に落ちるときはエネルギーがそれより小さく、<strong>可視光</strong>です。n = 3 に落ちるときはさらに小さく、<strong>赤外線</strong>です。</p>",
      misconception: {
        // EN (option A): The visible lines do not end at n = 1. Falls to n = 1 release the most energy, and that puts them in the ultraviolet.
        "0": "可視光の線は、n = 1 に落ちるときの線ではありません。n = 1 に落ちるときに放出されるエネルギーは最大なので、紫外線になります。",
        // EN (option C): This is the right list in the wrong direction. Falls to n = 1 are the largest drops in energy, so they give the highest-energy radiation, not the lowest.
        "2": "領域の名前は合っていますが、順番が逆です。n = 1 に落ちるときにエネルギーが最も大きく下がるので、エネルギーが最小ではなく、最大の電磁波が出ます。",
        // EN (option D): Visible light has more energy than infrared, so it must come from the larger drops. Falls to n = 2 release more energy than falls to n = 3.
        "3": "可視光は赤外線よりエネルギーが大きいので、より大きく落ちるときに出るはずです。n = 2 に落ちるときのほうが、n = 3 に落ちるときより多くのエネルギーが放出されます。",
      },
    },

    // ── s1-3-q006 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "s1-3-q006": {
      // EN: <p>Which electron transition in a hydrogen atom <strong>emits</strong> radiation of the <strong>shortest wavelength</strong>?</p>
      stem: "<p>水素原子の電子遷移のうち、<strong>波長が最も短い</strong>電磁波を<strong>放出する</strong>のはどれですか。</p>",
      options: [
        // EN: n = 4 to n = 3
        "n = 4 から n = 3",
        // EN: n = 5 to n = 2
        "n = 5 から n = 2",
        // EN: n = 2 to n = 1
        "n = 2 から n = 1",
        // EN: n = 1 to n = 3
        "n = 1 から n = 3",
      ],
      hints: [
        // EN: Shortest wavelength means highest energy, so look for the largest fall in energy.
        "波長が最も短いとは、エネルギーが最も大きいということです。エネルギーが最も大きく下がる遷移を探しましょう。",
        // EN: The energy levels are not evenly spaced. They get closer together as n increases.
        "エネルギー準位の間隔は等しくありません。n が大きくなるほど間隔はせまくなります。",
      ],
      // EN: <p>Shortest wavelength means highest frequency and highest energy. The levels converge, so the gap between n = 1 and n = 2 is by far the largest gap. Any fall to n = 1 gives ultraviolet radiation, which has more energy than the visible lines (falls to n = 2) or the infrared lines (falls to n = 3). So n = 2 to n = 1 emits the shortest wavelength of the four.</p>
      solution: "<p>波長が最も短いとは、振動数とエネルギーが最も大きいということです。準位は収束するので、n = 1 と n = 2 の差がとびぬけて大きくなります。n = 1 に落ちる遷移はどれも紫外線を出します。紫外線は、可視光の線（n = 2 に落ちる）や赤外線の線（n = 3 に落ちる）よりエネルギーが大きい電磁波です。したがって、4 つのうち波長が最も短いのは n = 2 から n = 1 への遷移です。</p>",
      misconception: {
        // EN (option A): This is a fall between two levels that are close together in energy. It is a small energy change, so it gives a long wavelength (infrared).
        "0": "これは、エネルギーの近い 2 つの準位の間で落ちる遷移です。エネルギーの変化が小さいので、波長は長くなります（赤外線）。",
        // EN (option B): This electron crosses more levels, but the levels above n = 2 are close together. The single gap from n = 2 to n = 1 is larger than the whole drop from n = 5 to n = 2.
        "1": "この電子は多くの準位をまたぎますが、n = 2 より上の準位は間隔がせまくなっています。n = 2 から n = 1 への 1 段の差のほうが、n = 5 から n = 2 までの落差全体より大きいのです。",
        // EN (option D): This electron moves <em>up</em>. The atom must absorb energy for that, so no radiation is emitted.
        "3": "この電子は<em>上</em>へ移ります。そのためには原子がエネルギーを吸収しなければならないので、電磁波は放出されません。",
      },
    },

    // ── s1-3-q007 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "s1-3-q007": {
      // EN: <p>In each set of lines in the hydrogen emission spectrum, the lines get closer together towards the high-frequency end. What does this show?</p>
      stem: "<p>水素の発光スペクトルでは、どの線の組でも、振動数の大きい側ほど線の間隔がせまくなります。このことから何がわかりますか。</p>",
      options: [
        // EN: The energy levels get closer together as their energy increases.
        "エネルギーが高くなるほど、エネルギー準位の間隔はせまくなる。",
        // EN: The energy levels are equally spaced.
        "エネルギー準位は等間隔である。",
        // EN: Electrons can have any energy inside the atom.
        "原子の中の電子は、どんなエネルギーでもとれる。",
        // EN: Electrons in higher energy levels move more slowly.
        "高いエネルギー準位の電子ほど、ゆっくり動く。",
      ],
      hints: [
        // EN: Each line is one energy difference. If two lines are close together, what does that say about the two starting levels?
        "1 本の線は 1 つのエネルギー差に対応します。2 本の線が近いとき、電子が出発した 2 つの準位について何がいえますか。",
      ],
      // EN: <p>Lines that are close together come from electrons falling from levels that are close in energy. The lines converge at high frequency, so the energy levels converge (get closer together) at higher energy.</p>
      solution: "<p>間隔のせまい線は、エネルギーの近い準位から電子が落ちてできます。線は振動数の大きい側で収束するので、エネルギー準位もエネルギーの高いところで収束します（間隔がせまくなります）。</p>",
      misconception: {
        // EN (option B): Equally spaced levels would not make the lines bunch up. The lines converge because the gaps between higher levels shrink.
        "1": "準位が等間隔なら、線が片側に寄り集まることはありません。線が収束するのは、高い準位ほど間隔がせまくなるからです。",
        // EN (option C): If electrons could have any energy, the spectrum would be continuous. Separate lines show the opposite.
        "2": "電子がどんなエネルギーでもとれるなら、スペクトルは連続になります。分かれた線が見えることは、その逆を示しています。",
        // EN (option D): The spectrum gives information about energy differences between levels. It does not tell you how fast the electrons move.
        "3": "スペクトルからわかるのは、準位の間のエネルギー差です。電子の動く速さはわかりません。",
      },
    },

    // ── s1-3-q008 · multi · exam · SL · Structure 1.3.2 · 2 marks
    "s1-3-q008": {
      // EN: <p>Which statements about the emission spectrum of hydrogen are correct?</p>
      stem: "<p>水素の発光スペクトルについて、正しい文はどれですか。</p>",
      options: [
        // EN: It is made of separate lines, not a continuous band of colour.
        "色が連続した帯ではなく、分かれた線でできている。",
        // EN: Each line is produced when an electron moves from a lower to a higher energy level.
        "それぞれの線は、電子が低いエネルギー準位から高いエネルギー準位へ移るときにできる。",
        // EN: Within each set of lines, the lines get closer together as the frequency increases.
        "どの線の組でも、振動数が大きくなるほど線の間隔がせまくなる。",
        // EN: The lines in the visible region come from electrons falling to n = 2.
        "可視光の領域の線は、電子が n = 2 に落ちるときにできる。",
        // EN: Falls to n = 1 give lines of lower energy than falls to n = 3.
        "n = 1 に落ちるときの線は、n = 3 に落ちるときの線よりエネルギーが小さい。",
        // EN: Each line corresponds to photons of one specific energy.
        "それぞれの線は、決まった 1 つのエネルギーをもつ光子に対応する。",
      ],
      hints: [
        // EN: Emission means the atom gives out light. Which direction must the electron move?
        "発光とは、原子が光を出すことです。電子はどちら向きに移るはずですか。",
        // EN: Largest fall in energy gives the highest-energy radiation.
        "エネルギーが最も大きく下がるとき、最もエネルギーの大きい電磁波が出ます。",
      ],
      // EN: <p>The spectrum is a line spectrum. Each line is light of one frequency, emitted when an electron falls from a higher to a lower energy level, so each line corresponds to photons of one specific energy. The visible lines come from falls to n = 2. Falls to n = 1 give ultraviolet lines (higher energy) and falls to n = 3 give infrared lines (lower energy). In each set the lines converge at high frequency.</p>
      solution: "<p>このスペクトルは線スペクトルです。それぞれの線は 1 つの振動数の光で、電子が高いエネルギー準位から低いエネルギー準位へ落ちるときに放出されます。そのため、それぞれの線は決まった 1 つのエネルギーをもつ光子に対応します。可視光の線は n = 2 に落ちるときにできます。n = 1 に落ちると紫外線の線（エネルギーが大きい）、n = 3 に落ちると赤外線の線（エネルギーが小さい）になります。どの組でも、線は振動数の大きい側で収束します。</p>",
      misconception: {
        // EN (option B): Moving up needs energy to be absorbed. Emission lines come from electrons falling from a higher level to a lower one.
        "1": "上の準位へ移るには、エネルギーを吸収しなければなりません。発光スペクトルの線は、電子が高い準位から低い準位へ落ちるときにできます。",
        // EN (option E): Falls to n = 1 are the largest drops in energy. They give ultraviolet lines, which have more energy than the infrared lines from falls to n = 3.
        "4": "n = 1 に落ちるとき、エネルギーは最も大きく下がります。このとき紫外線の線ができ、n = 3 に落ちるときの赤外線の線よりエネルギーが大きくなります。",
      },
    },

    // ── s1-3-q009 · short · exam · SL · Structure 1.3.2 · 3 marks
    "s1-3-q009": {
      // EN: <p>The emission spectrum of hydrogen is a line spectrum, not a continuous spectrum. Explain how this is evidence that the electron in a hydrogen atom can only be in certain energy levels.</p>
      stem: "<p>水素の発光スペクトルは連続スペクトルではなく、線スペクトル (line spectrum) です。このことが、水素原子の電子は決まったエネルギー準位 (energy levels) にしか存在できないことの証拠になる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: What does each line tell you about the energy of the photons emitted?
        "それぞれの線から、放出される光子のエネルギーについて何がわかりますか。",
        // EN: Link the photon energy to the two levels the electron moves between.
        "光子のエネルギーを、電子が移動する 2 つの準位と結びつけましょう。",
        // EN: Finish with the contrast: what would you see if any energy were allowed?
        "最後に対比を書きます。どんなエネルギーでもとれるなら、何が見えるはずですか。",
      ],
      // EN: <p>A line spectrum shows that the atom emits light of only certain frequencies, so only photons of certain energies are emitted. Each photon is emitted when the electron falls from a higher energy level to a lower one, and the energy of the photon equals the difference in energy between those two levels. Only certain energy differences are seen, so the electron can only have certain fixed (discrete) energies. If the electron could have any energy, every energy difference would be possible and the spectrum would be continuous.</p>
      answer: "<p>線スペクトルは、原子が決まった振動数の光だけを放出することを示しています。つまり、決まったエネルギーの光子だけが放出されます。光子は、電子が高いエネルギー準位から低いエネルギー準位へ落ちるときに放出され、そのエネルギーは 2 つの準位のエネルギー差に等しくなります。決まったエネルギー差しか見られないので、電子は決まったとびとびの（離散的な）エネルギーしかとれません。もし電子がどんなエネルギーでもとれるなら、あらゆるエネルギー差が可能になり、スペクトルは連続になるはずです。</p>",
      markscheme: [
        // EN: Only certain/specific frequencies (or wavelengths, or photon energies) are emitted.
        "決まった / 特定の振動数（または波長、光子のエネルギー）だけが放出される。",
        // EN: Each photon/line is produced when an electron falls from a higher to a lower energy level, and its energy equals the energy difference between the two levels.
        "それぞれの光子 / 線は、電子が高いエネルギー準位から低いエネルギー準位へ落ちるときにできる。そのエネルギーは 2 つの準位のエネルギー差に等しい。",
        // EN: So only certain energy differences are possible, which means the energy levels are discrete/fixed (accept: if any energy were allowed the spectrum would be continuous).
        "したがって、決まったエネルギー差しかありえない。つまり、エネルギー準位はとびとび（離散的） / 決まった値である（「どんなエネルギーでもとれるならスペクトルは連続になる」も可）。",
      ],
    },

    // ── s1-3-q010 · mcq · challenge · SL · Structure 1.3.2 · 1 mark
    "s1-3-q010": {
      // EN: <p>The diagram shows some energy levels of the hydrogen atom (not to scale) and four electron transitions, P, Q, R and S.</p><p><svg viewBox="0 0 300 210" width="300" height="210" role="img" aria-label="Energy level diagram for hydrogen, not to scale. Horizontal lines for n = 1 at the bottom up to n = 5, getting closer together, and a dashed line for n = infinity at the top. Four downward arrows: P from n = 2 to n = 1, Q from n = 3 to n = 2, R from n = 5 to n = 2, S from n = 4 to n = 3."><line x1="62" x2="286" y1="196" y2="196" stroke="currentColor" stroke-width="1.4"/><text x="54" y="200" text-anchor="end" font-size="13" fill="currentColor">n = 1</text><line x1="62" x2="286" y1="112" y2="112" stroke="currentColor" stroke-width="1.4"/><text x="54" y="116" text-anchor="end" font-size="13" fill="currentColor">n = 2</text><line x1="62" x2="286" y1="68" y2="68" stroke="currentColor" stroke-width="1.4"/><text x="54" y="72" text-anchor="end" font-size="13" fill="currentColor">n = 3</text><line x1="62" x2="286" y1="44" y2="44" stroke="currentColor" stroke-width="1.4"/><text x="54" y="48" text-anchor="end" font-size="13" fill="currentColor">n = 4</text><line x1="62" x2="286" y1="30" y2="30" stroke="currentColor" stroke-width="1.4"/><text x="54" y="34" text-anchor="end" font-size="13" fill="currentColor">n = 5</text><line x1="62" x2="286" y1="16" y2="16" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="54" y="20" text-anchor="end" font-size="13" fill="currentColor">n = ∞</text><path d="M96 112V194M91 186L96 194L101 186" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="105" y="182" font-size="14" font-weight="700" fill="currentColor">P</text><path d="M148 68V110M143 102L148 110L153 102" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="157" y="98" font-size="14" font-weight="700" fill="currentColor">Q</text><path d="M200 30V110M195 102L200 110L205 102" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="209" y="98" font-size="14" font-weight="700" fill="currentColor">R</text><path d="M252 44V66M247 58L252 66L257 58" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="261" y="60" font-size="14" font-weight="700" fill="currentColor">S</text></svg></p><p>Which transition emits <strong>visible</strong> light of the <strong>lowest frequency</strong>?</p>
      stem: "<p>図は、水素原子のエネルギー準位の一部（縮尺は正確ではありません）と、4 つの電子遷移 P、Q、R、S を示しています。</p><p><svg viewBox=\"0 0 300 210\" width=\"300\" height=\"210\" role=\"img\" aria-label=\"水素のエネルギー準位図（縮尺は正確ではない）。いちばん下の n = 1 から n = 5 までの水平な線があり、上へいくほど間隔がせまくなる。いちばん上に n = ∞ の破線がある。下向きの矢印が 4 本ある。P は n = 2 から n = 1 へ、Q は n = 3 から n = 2 へ、R は n = 5 から n = 2 へ、S は n = 4 から n = 3 へ。\"><line x1=\"62\" x2=\"286\" y1=\"196\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"200\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 1</text><line x1=\"62\" x2=\"286\" y1=\"112\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"116\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 2</text><line x1=\"62\" x2=\"286\" y1=\"68\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"72\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 3</text><line x1=\"62\" x2=\"286\" y1=\"44\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"48\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 4</text><line x1=\"62\" x2=\"286\" y1=\"30\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 5</text><line x1=\"62\" x2=\"286\" y1=\"16\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"/><text x=\"54\" y=\"20\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = ∞</text><path d=\"M96 112V194M91 186L96 194L101 186\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"105\" y=\"182\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">P</text><path d=\"M148 68V110M143 102L148 110L153 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"157\" y=\"98\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Q</text><path d=\"M200 30V110M195 102L200 110L205 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"209\" y=\"98\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">R</text><path d=\"M252 44V66M247 58L252 66L257 58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"261\" y=\"60\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">S</text></svg></p><p><strong>可視光</strong>のうち、<strong>振動数が最も小さい</strong>光を放出する遷移はどれですか。</p>",
      options: [
        // EN: P
        "P",
        // EN: Q
        "Q",
        // EN: R
        "R",
        // EN: S
        "S",
      ],
      hints: [
        // EN: First find the arrows that give visible light. Which level must they end on?
        "まず、可視光を出す矢印を見つけましょう。その矢印はどの準位で終わるはずですか。",
        // EN: Then compare the lengths of those falls. Smaller fall in energy means lower frequency.
        "次に、その矢印の長さをくらべます。エネルギーの下がり方が小さいほど、振動数は小さくなります。",
      ],
      // EN: <p>Visible lines come from falls to n = 2, so only Q (n = 3 to n = 2) and R (n = 5 to n = 2) are visible. Q is the smaller fall in energy, so its photon has less energy and a lower frequency. The answer is Q. (P is ultraviolet and S is infrared.)</p>
      solution: "<p>可視光の線は n = 2 に落ちるときにできるので、可視光になるのは Q（n = 3 から n = 2）と R（n = 5 から n = 2）だけです。Q のほうがエネルギーの下がり方が小さいので、光子のエネルギーが小さく、振動数も小さくなります。答えは Q です。（P は紫外線、S は赤外線です。）</p>",
      misconception: {
        // EN (option A): P ends on n = 1. Falls to n = 1 give ultraviolet radiation, which is not visible and has the highest frequency of the four.
        "0": "P は n = 1 で終わります。n = 1 に落ちると紫外線が出ます。紫外線は目に見えず、4 つのうち振動数が最大です。",
        // EN (option C): R does give visible light because it ends on n = 2. But it is a larger fall than Q, so its frequency is higher.
        "2": "R は n = 2 で終わるので、たしかに可視光を出します。しかし Q より大きく落ちるので、振動数は Q より大きくなります。",
        // EN (option D): S has the lowest frequency of all four, but it ends on n = 3. Falls to n = 3 give infrared radiation, which is not visible.
        "3": "S は 4 つのうち振動数が最小ですが、n = 3 で終わります。n = 3 に落ちると赤外線が出るので、目に見えません。",
      },
    },

    // ── s1-3-q011 · numeric · challenge · SL · Structure 1.3.2 · 1 mark
    "s1-3-q011": {
      // EN: <p>In a sample of hydrogen gas, atoms are excited so that the highest level reached by any electron is n = 5. The electrons can return to lower levels in one fall or in several smaller falls.</p><p>How many different lines can appear in the <strong>visible</strong> region of the emission spectrum?</p>
      stem: "<p>水素の気体の試料で原子を励起したところ、電子が到達した最も高い準位は n = 5 でした。電子は、1 回で低い準位に戻ることも、何回かに分けて少しずつ戻ることもできます。</p><p>発光スペクトルの<strong>可視光</strong>の領域には、異なる線が何本現れる可能性がありますか。</p>",
      hints: [
        // EN: Visible lines come from falls that end on one particular level. Which one?
        "可視光の線は、ある決まった準位で終わる遷移からできます。どの準位ですか。",
        // EN: List every level above it that an electron could start from.
        "その準位より上で、電子が出発できる準位をすべて書き出しましょう。",
      ],
      // EN: <p>Visible lines come from falls that end on n = 2. The electron can start from n = 3, n = 4 or n = 5 (it can reach n = 3 or n = 4 by an earlier, smaller fall from n = 5).</p><div class="worked__math">n&nbsp;=&nbsp;5 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;4 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;3 → n&nbsp;=&nbsp;2</div><p>That is <strong>3</strong> lines in the visible region. The other possible falls end on n = 1 (ultraviolet) or on n = 3 or n = 4 (infrared).</p>
      solution: "<p>可視光の線は、n = 2 で終わる遷移からできます。電子は n = 3、n = 4、n = 5 のどれからでも出発できます（n = 5 から先に少しだけ落ちれば、n = 3 や n = 4 に移れます）。</p><div class=\"worked__math\">n&nbsp;=&nbsp;5 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;4 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;3 → n&nbsp;=&nbsp;2</div><p>したがって、可視光の領域の線は <strong>3</strong> 本です。そのほかの遷移は、n = 1 で終わる（紫外線）か、n = 3 または n = 4 で終わります（赤外線）。</p>",
      // EN: lines
      unit: "本",
    },

    // ── s1-3-q012 · numeric · foundation · SL · Structure 1.3.3 · 1 mark
    "s1-3-q012": {
      // EN: <p>What is the maximum number of electrons that can occupy the main energy level n = 4?</p>
      stem: "<p>主エネルギー準位 n = 4 に入る電子は、最大で何個ですか。</p>",
      hints: [
        // EN: A main energy level n can hold a maximum of 2n<sup>2</sup> electrons.
        "主エネルギー準位 n には、最大 2n<sup>2</sup> 個の電子が入ります。",
        // EN: Square n first, then multiply by 2.
        "先に n を 2 乗し、それから 2 をかけます。",
      ],
      // EN: <div class="worked__math">maximum = 2n<sup>2</sup><br>&nbsp;&nbsp;= 2 × 4<sup>2</sup><br>&nbsp;&nbsp;= 2 × 16<br>&nbsp;&nbsp;= 32 electrons</div><p>Check with the sublevels: 4s (2) + 4p (6) + 4d (10) + 4f (14) = 32.</p><p>Common slips: 2n = 8, and n<sup>2</sup> = 16 (that is the number of orbitals, each of which holds two electrons).</p>
      solution: "<div class=\"worked__math\">最大数 = 2n<sup>2</sup><br>&nbsp;&nbsp;= 2 × 4<sup>2</sup><br>&nbsp;&nbsp;= 2 × 16<br>&nbsp;&nbsp;= 32 個</div><p>副準位で確かめましょう：4s (2) + 4p (6) + 4d (10) + 4f (14) = 32。</p><p>よくある間違い：2n = 8 とする。n<sup>2</sup> = 16 とする（これは軌道の数です。1 つの軌道には電子が 2 個入ります）。</p>",
      // EN: electrons
      unit: "個",
    },

    // ── s1-3-q013 · mcq · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q013": {
      // EN: <p>Which row describes the shapes of an s orbital and a p orbital?</p>
      stem: "<p>s 軌道と p 軌道の形を正しく示している組み合わせはどれですか。</p>",
      options: [
        // EN: s orbital: spherical. p orbital: dumbbell-shaped.
        "s 軌道：球形。p 軌道：亜鈴形（ダンベル形）。",
        // EN: s orbital: dumbbell-shaped. p orbital: spherical.
        "s 軌道：亜鈴形（ダンベル形）。p 軌道：球形。",
        // EN: s orbital: circular path around the nucleus. p orbital: figure-of-eight path around the nucleus.
        "s 軌道：原子核のまわりの円形の道すじ。p 軌道：原子核のまわりの 8 の字形の道すじ。",
        // EN: s orbital: spherical. p orbital: spherical, but larger.
        "s 軌道：球形。p 軌道：球形だが、より大きい。",
      ],
      hints: [
        // EN: One of them looks the same from every direction. The other has two lobes, one on each side of the nucleus.
        "一方は、どの方向から見ても同じ形です。もう一方にはローブ（ふくらみ）が 2 つあり、原子核の両側に 1 つずつあります。",
      ],
      // EN: <p>An s orbital is spherical, centred on the nucleus. A p orbital is dumbbell-shaped: two lobes on opposite sides of the nucleus. There are three p orbitals in a p sublevel, pointing along the x, y and z axes.</p>
      solution: "<p>s 軌道は、原子核を中心とする球形 (spherical) です。p 軌道は亜鈴形（ダンベル形, dumbbell-shaped）で、原子核をはさんで反対側に 2 つのローブ（ふくらみ）があります。p 副準位には p 軌道が 3 つあり、それぞれ x 軸、y 軸、z 軸の方向を向いています。</p>",
      misconception: {
        // EN (option B): These are the right two shapes, swapped. The s orbital is the sphere.
        "1": "2 つの形は合っていますが、入れ替わっています。球形なのは s 軌道です。",
        // EN (option C): An orbital is not a path. It is a region of space where there is a high probability of finding the electron.
        "2": "軌道は道すじではありません。電子が見つかる確率の高い空間の領域です。",
        // EN (option D): A larger sphere describes an s orbital in a higher main energy level (2s compared with 1s). A p orbital has two lobes.
        "3": "より大きい球は、より高い主エネルギー準位の s 軌道にあたります（1s に対する 2s）。p 軌道にはローブが 2 つあります。",
      },
    },

    // ── s1-3-q014 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q014": {
      // EN: <p>The diagram shows one atomic orbital. The nucleus is where the axes cross.</p><p><svg viewBox="0 0 262 196" width="262" height="196" role="img" aria-label="An orbital drawn on x, y and z axes. It has two lobes, one on each side of the nucleus, pointing along the horizontal axis, which is labelled x. The vertical axis is labelled y and the dashed diagonal axis is labelled z."><line x1="20" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="130" y1="186" x2="130" y2="14" stroke="currentColor" stroke-width="1.2"/><line x1="76" y1="154" x2="184" y2="46" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="246" y="105" font-size="14" fill="currentColor">x</text><text x="126" y="11" text-anchor="middle" font-size="14" fill="currentColor">y</text><text x="190" y="44" font-size="14" fill="currentColor">z</text><path d="M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/><path d="M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/><circle cx="130" cy="100" r="3" fill="currentColor"/></svg></p><p>Which orbital is shown?</p>
      stem: "<p>図は、ある原子軌道を 1 つ示しています。軸が交わるところに原子核があります。</p><p><svg viewBox=\"0 0 262 196\" width=\"262\" height=\"196\" role=\"img\" aria-label=\"x、y、z 軸の上に描いた軌道。原子核の両側に 1 つずつ、合わせて 2 つのローブがあり、x と書かれた水平な軸に沿っている。垂直な軸は y、斜めの破線の軸は z と書かれている。\"><line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"130\" y1=\"186\" x2=\"130\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"76\" y1=\"154\" x2=\"184\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/><text x=\"246\" y=\"105\" font-size=\"14\" fill=\"currentColor\">x</text><text x=\"126\" y=\"11\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">y</text><text x=\"190\" y=\"44\" font-size=\"14\" fill=\"currentColor\">z</text><path d=\"M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"currentColor\"/></svg></p><p>どの軌道ですか。</p>",
      options: [
        // EN: s
        "s",
        // EN: p<sub>x</sub>
        "p<sub>x</sub>",
        // EN: p<sub>y</sub>
        "p<sub>y</sub>",
        // EN: p<sub>z</sub>
        "p<sub>z</sub>",
      ],
      hints: [
        // EN: Two lobes means a p orbital.
        "ローブ（ふくらみ）が 2 つあれば p 軌道です。",
        // EN: A p orbital is named after the axis that its lobes lie along.
        "p 軌道の名前は、ローブが沿っている軸からつけられます。",
      ],
      // EN: <p>The orbital has two lobes, one on each side of the nucleus, so it is a p orbital. The lobes lie along the x axis, so it is p<sub>x</sub>. The other two p orbitals have the same shape and the same energy, but point along the y and z axes.</p>
      solution: "<p>この軌道には、原子核の両側に 1 つずつ、2 つのローブ（ふくらみ）があるので、p 軌道です。ローブは x 軸に沿っているので、p<sub>x</sub> です。残りの 2 つの p 軌道は形もエネルギーも同じですが、y 軸と z 軸の方向を向いています。</p>",
      misconception: {
        // EN (option A): An s orbital is a sphere centred on the nucleus. This orbital has two lobes.
        "0": "s 軌道は原子核を中心とする球形です。この軌道にはローブが 2 つあります。",
        // EN (option C): A p<sub>y</sub> orbital has its lobes along the y axis. Check which axis runs through the middle of both lobes here.
        "2": "p<sub>y</sub> 軌道のローブは y 軸に沿っています。この図で、2 つのローブの真ん中を通っている軸はどれか確かめましょう。",
        // EN (option D): A p<sub>z</sub> orbital has its lobes along the z axis. Check which axis runs through the middle of both lobes here.
        "3": "p<sub>z</sub> 軌道のローブは z 軸に沿っています。この図で、2 つのローブの真ん中を通っている軸はどれか確かめましょう。",
      },
    },

    // ── s1-3-q015 · mcq · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q015": {
      // EN: <p>What is the full electron configuration of a phosphorus atom (Z = 15) in its ground state?</p>
      stem: "<p>基底状態のリン原子（Z = 15）の完全な電子配置 (full electron configuration) はどれですか。</p>",
      options: [
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3d<sup>3</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3d<sup>3</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>8</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>8</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup></span>",
      ],
      hints: [
        // EN: The superscripts must add up to 15.
        "上付きの数字の合計が 15 になるはずです。",
        // EN: Fill in the order 1s, 2s, 2p, 3s, 3p. An s sublevel holds 2 electrons and a p sublevel holds 6.
        "1s、2s、2p、3s、3p の順に電子を入れます。s 副準位には電子が 2 個、p 副準位には 6 個入ります。",
      ],
      // EN: <p>Fill the sublevels from the lowest energy upwards (Aufbau principle): 1s (2), 2s (2), 2p (6), 3s (2). That is 12 electrons. The remaining 3 go into 3p.</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 3 = 15)</div>
      solution: "<p>エネルギーの低い副準位から順に電子を入れます。これが構成原理 (Aufbau principle) です。1s (2)、2s (2)、2p (6)、3s (2) で 12 個になります。残りの 3 個は 3p に入ります。</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 3 = 15)</div>",
      misconception: {
        // EN (option B): After 3s the next sublevel to fill is 3p, not 3d. The 3d sublevel is higher in energy than 4s.
        "1": "3s の次に電子が入るのは 3p で、3d ではありません。3d 副準位は 4s よりエネルギーが高い副準位です。",
        // EN (option C): A p sublevel has three orbitals, so it holds at most 6 electrons, not 8.
        "2": "p 副準位には軌道が 3 つあるので、入る電子は最大 6 個です。8 個は入りません。",
        // EN (option D): Count the electrons: 2 + 2 + 6 + 2 + 5 = 17. That is chlorine. Phosphorus has 15.
        "3": "電子を数えましょう。2 + 2 + 6 + 2 + 5 = 17 です。これは塩素です。リンの電子は 15 個です。",
      },
    },

    // ── s1-3-q016 · order · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q016": {
      // EN: <p>Put these sublevels in the order in which they are filled as atomic number increases (first to be filled at the top).</p>
      stem: "<p>次の副準位を、原子番号が大きくなるにつれて電子が入っていく順に並べてください（最初に入るものがいちばん上）。</p>",
      options: [
        // EN: 3s
        "3s",
        // EN: 3p
        "3p",
        // EN: 4s
        "4s",
        // EN: 3d
        "3d",
        // EN: 4p
        "4p",
      ],
      hints: [
        // EN: Electrons go into the lowest-energy sublevel available (Aufbau principle).
        "電子は、空いている副準位のうちエネルギーが最も低いものに入ります。これが構成原理 (Aufbau principle) です。",
        // EN: One sublevel of the fourth main energy level is filled before the 3d sublevel.
        "第 4 主エネルギー準位の副準位のうち 1 つは、3d 副準位より先に満たされます。",
      ],
      // EN: <p>The order of filling is 3s, 3p, 4s, 3d, 4p. The 4s sublevel is filled before 3d: potassium is <span class="mono">[Ar] 4s<sup>1</sup></span> and calcium is <span class="mono">[Ar] 4s<sup>2</sup></span>. The 3d sublevel then fills from scandium to zinc, and 4p fills from gallium to krypton.</p>
      solution: "<p>電子が入る順は 3s、3p、4s、3d、4p です。4s 副準位は 3d より先に満たされます。カリウム (K) は <span class=\"mono\">[Ar] 4s<sup>1</sup></span>、カルシウム (Ca) は <span class=\"mono\">[Ar] 4s<sup>2</sup></span> です。その後、スカンジウムから亜鉛までで 3d 副準位が満たされ、ガリウムからクリプトンまでで 4p が満たされます。</p>",
    },

    // ── s1-3-q017 · mcq · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q017": {
      // EN: <p>A student draws this orbital diagram for a beryllium atom (Z = 4).</p><p><svg viewBox="0 0 80 56" width="80" height="56" role="img" aria-label="Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains two up arrows."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 25V8M64 13L68 8L72 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>ある生徒が、ベリリウム原子（Z = 4）の軌道図を次のように描きました。</p><p><svg viewBox=\"0 0 80 56\" width=\"80\" height=\"56\" role=\"img\" aria-label=\"軌道図。1s の箱には上向きの矢印 1 本と下向きの矢印 1 本が入っている。2s の箱には上向きの矢印が 2 本入っている。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 25V8M64 13L68 8L72 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text></svg></p><p>この図は、どの規則または原理に反していますか。</p>",
      options: [
        // EN: The Aufbau principle
        "構成原理 (Aufbau principle)",
        // EN: Hund’s rule
        "フントの規則 (Hund’s rule)",
        // EN: The Pauli exclusion principle
        "パウリの排他原理 (Pauli exclusion principle)",
        // EN: None. The diagram is correct.
        "どれにも反していない。図は正しい。",
      ],
      hints: [
        // EN: Compare the two arrows in the 1s box with the two arrows in the 2s box.
        "1s の箱の 2 本の矢印と、2s の箱の 2 本の矢印をくらべましょう。",
        // EN: Which principle says that two electrons in the same orbital must have opposite spins?
        "同じ軌道に入る 2 個の電子は逆向きのスピンをもつ、という原理はどれですか。",
      ],
      // EN: <p>The two electrons in the 2s orbital are drawn with the same spin (both arrows up). The <strong>Pauli exclusion principle</strong> says an orbital can hold at most two electrons, and they must have opposite spins. The 2s box should show one arrow up and one arrow down.</p>
      solution: "<p>2s 軌道の 2 個の電子が、同じスピンで描かれています（矢印が両方とも上向き）。<strong>パウリの排他原理</strong>によると、1 つの軌道に入る電子は最大 2 個で、スピンは逆向きでなければなりません。2s の箱には、上向きの矢印 1 本と下向きの矢印 1 本を描くのが正解です。</p>",
      misconception: {
        // EN (option A): The Aufbau principle is about filling the lowest-energy sublevels first. Here 1s is full before 2s is used, so the order is right.
        "0": "構成原理は、エネルギーの低い副準位から先に電子を入れるという原理です。この図では 1s が満たされてから 2s を使っているので、順番は合っています。",
        // EN (option B): Hund’s rule is about how electrons spread out over several orbitals of the same energy, such as the three 2p orbitals. A 2s sublevel has only one orbital.
        "1": "フントの規則は、3 つの 2p 軌道のように、同じエネルギーの軌道がいくつかあるときの電子の入り方についての規則です。2s 副準位には軌道が 1 つしかありません。",
        // EN (option D): Look at the two arrows in the 2s box. They point the same way.
        "3": "2s の箱の 2 本の矢印を見ましょう。同じ向きになっています。",
      },
    },

    // ── s1-3-q018 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q018": {
      // EN: <p>What is the electron configuration of the sulfide ion, <span class="chem">S^2-</span>? (Sulfur has Z = 16.)</p>
      stem: "<p>硫化物イオン <span class=\"chem\">S^2-</span> の電子配置はどれですか。（硫黄は Z = 16 です。）</p>",
      options: [
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup></span>",
      ],
      hints: [
        // EN: Work out the number of electrons first: atomic number, then adjust for the charge.
        "まず電子の数を求めます。原子番号から始めて、電荷の分だけ調整します。",
        // EN: A negative charge means extra electrons.
        "負の電荷は、電子が余分にあるという意味です。",
      ],
      // EN: <p>A sulfur atom has 16 electrons. The 2− charge means two extra electrons: 16 + 2 = 18 electrons.</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span><br>&nbsp;&nbsp;(the same configuration as argon)</div>
      solution: "<p>硫黄原子には電子が 16 個あります。電荷が 2− なので、電子が 2 個多くなります。16 + 2 = 18 個です。</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span><br>&nbsp;&nbsp;（アルゴンと同じ電子配置）</div>",
      misconception: {
        // EN (option A): This has 14 electrons. A 2− charge means the atom has <em>gained</em> two electrons, not lost them.
        "0": "これは電子が 14 個です。電荷が 2− ということは、原子が電子を 2 個<em>受け取った</em>ということです。失ったのではありません。",
        // EN (option B): This is the sulfur atom, with 16 electrons. The ion has two more.
        "1": "これは電子が 16 個の硫黄原子です。イオンにはあと 2 個あります。",
        // EN (option D): This has 20 electrons. The ion has 16 + 2 = 18.
        "3": "これは電子が 20 個です。このイオンの電子は 16 + 2 = 18 個です。",
      },
    },

    // ── s1-3-q019 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q019": {
      // EN: <p>What is the condensed electron configuration of a chromium atom (Z = 24) in its ground state?</p>
      stem: "<p>基底状態のクロム原子（Z = 24）の省略形の電子配置 (condensed electron configuration) はどれですか。</p>",
      options: [
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>",
        // EN: <span class="mono">[Ar] 3d<sup>6</sup></span>
        "<span class=\"mono\">[Ar] 3d<sup>6</sup></span>",
        // EN: <span class="mono">[Kr] 4s<sup>1</sup> 3d<sup>5</sup></span>
        "<span class=\"mono\">[Kr] 4s<sup>1</sup> 3d<sup>5</sup></span>",
      ],
      hints: [
        // EN: Argon has 18 electrons, so 6 more are needed.
        "アルゴンの電子は 18 個なので、あと 6 個必要です。",
        // EN: Chromium and copper are the two exceptions to the usual filling order.
        "クロムと銅の 2 つは、ふつうの電子の入る順の例外です。",
      ],
      // EN: <p>Chromium has 24 electrons: the argon core (18) plus 6. The usual order predicts <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>, but chromium is an exception. Its ground state is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>. (Writing it as <span class="mono">[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span> is also accepted.)</p>
      solution: "<p>クロムの電子は 24 個です。アルゴンの電子配置（芯）の 18 個に 6 個を足します。ふつうの順では <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span> と予想されますが、クロムは例外です。基底状態は <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> です。（<span class=\"mono\">[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span> と書いても正解です。）</p>",
      misconception: {
        // EN (option A): This is what the usual filling order predicts, but chromium is one of the two exceptions you must know.
        "0": "ふつうの順ではこうなりますが、クロムは覚えておくべき 2 つの例外の 1 つです。",
        // EN (option C): This has the right number of electrons, but the 4s orbital is not empty in a chromium atom.
        "2": "電子の数は合っていますが、クロム原子の 4s 軌道は空ではありません。",
        // EN (option D): The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after chromium.
        "3": "貴ガスの電子配置（芯）には、その元素より<em>前</em>の貴ガスを使います。クリプトン（Z = 36）はクロムより後にあります。",
      },
    },

    // ── s1-3-q020 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q020": {
      // EN: <p>What is the full electron configuration of a copper atom (Z = 29) in its ground state?</p>
      stem: "<p>基底状態の銅原子（Z = 29）の完全な電子配置 (full electron configuration) はどれですか。</p>",
      options: [
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>9</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>9</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>10</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>10</sup></span>",
        // EN: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>
        "<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>",
      ],
      hints: [
        // EN: The superscripts must add up to 29.
        "上付きの数字の合計が 29 になるはずです。",
        // EN: Chromium and copper are the two exceptions to the usual filling order.
        "クロムと銅の 2 つは、ふつうの電子の入る順の例外です。",
      ],
      // EN: <p>Copper has 29 electrons. The usual order predicts <span class="mono">4s<sup>2</sup> 3d<sup>9</sup></span> after the argon core, but copper is an exception. Its ground state is</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 6 + 1 + 10 = 29)</div>
      solution: "<p>銅の電子は 29 個です。ふつうの順では、アルゴンの電子配置（芯）の後は <span class=\"mono\">4s<sup>2</sup> 3d<sup>9</sup></span> と予想されますが、銅は例外です。基底状態は次のとおりです。</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 6 + 1 + 10 = 29)</div>",
      misconception: {
        // EN (option A): This is what the usual filling order predicts, but copper is one of the two exceptions you must know.
        "0": "ふつうの順ではこうなりますが、銅は覚えておくべき 2 つの例外の 1 つです。",
        // EN (option C): Count the electrons: this has 28. A copper atom has 29.
        "2": "電子を数えましょう。これは 28 個です。銅原子の電子は 29 個です。",
        // EN (option D): Count the electrons: this has 30. That is zinc.
        "3": "電子を数えましょう。これは 30 個です。これは亜鉛です。",
      },
    },

    // ── s1-3-q021 · numeric · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q021": {
      // EN: <p>How many <strong>unpaired</strong> electrons are there in an iron atom (Z = 26) in its ground state?</p>
      stem: "<p>基底状態の鉄原子（Z = 26）には、<strong>不対</strong>電子 (unpaired electrons) が何個ありますか。</p>",
      hints: [
        // EN: Write the configuration first. Only a partly filled sublevel can contain unpaired electrons.
        "まず電子配置を書きましょう。不対電子があるのは、一部だけ満たされた副準位だけです。",
        // EN: A d sublevel has five orbitals. Put one electron in each orbital before pairing any (Hund’s rule).
        "d 副準位には軌道が 5 つあります。どの軌道にも電子を 1 個ずつ入れてから、対をつくります（フントの規則）。",
      ],
      // EN: <p>Iron is <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. The 4s orbital is full, so its two electrons are paired. The 3d sublevel has five orbitals and six electrons. By Hund’s rule the first five electrons go into separate orbitals, and the sixth pairs up with one of them.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagram for iron beyond the argon core. The 4s box has one up and one down arrow. The five 3d boxes hold: an up and a down arrow, then one up arrow in each of the other four."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">4s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="78" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M93 25V8M89 13L93 8L97 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M123 25V8M119 13L123 8L127 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="123" y="50" text-anchor="middle" font-size="14" fill="currentColor">3d</text></svg></p><p>That leaves <strong>4</strong> unpaired electrons.</p>
      solution: "<p>鉄は <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> です。4s 軌道は満たされているので、その 2 個の電子は対になっています。3d 副準位には軌道が 5 つあり、電子が 6 個あります。フントの規則により、はじめの 5 個は別々の軌道に入り、6 個目はそのうちの 1 つと対になります。</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"アルゴンの芯より外側の鉄の軌道図。4s の箱には上向きと下向きの矢印が 1 本ずつある。5 つの 3d の箱には、最初の箱に上向きと下向きの矢印、残りの 4 つの箱に上向きの矢印が 1 本ずつある。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"78\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M93 25V8M89 13L93 8L97 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M123 25V8M119 13L123 8L127 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"123\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3d</text></svg></p><p>したがって、不対電子は <strong>4</strong> 個です。</p>",
      // EN: unpaired electrons
      unit: "個",
    },

    // ── s1-3-q022 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q022": {
      // EN: <p>A student draws this orbital diagram for a nitrogen atom (Z = 7) in its ground state.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Orbital diagram. The 1s box and the 2s box each contain one up arrow and one down arrow. Of the three 2p boxes, the first contains an up arrow and a down arrow, the second contains one up arrow, and the third is empty."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M104 25V8M100 13L104 8L108 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M114 7V24M110 19L114 24L118 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>ある生徒が、基底状態の窒素原子（Z = 7）の軌道図を次のように描きました。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"軌道図。1s の箱と 2s の箱には、それぞれ上向きの矢印 1 本と下向きの矢印 1 本が入っている。3 つの 2p の箱のうち、1 つ目には上向きと下向きの矢印、2 つ目には上向きの矢印 1 本が入り、3 つ目は空である。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M104 25V8M100 13L104 8L108 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M114 7V24M110 19L114 24L118 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>この図は、どの規則または原理に反していますか。</p>",
      options: [
        // EN: The Aufbau principle
        "構成原理 (Aufbau principle)",
        // EN: Hund’s rule
        "フントの規則 (Hund’s rule)",
        // EN: The Pauli exclusion principle
        "パウリの排他原理 (Pauli exclusion principle)",
        // EN: None. The diagram is correct.
        "どれにも反していない。図は正しい。",
      ],
      hints: [
        // EN: The number of electrons (7) and the order of the sublevels are both right. Look at how the 2p electrons are arranged.
        "電子の数（7 個）も副準位の順も合っています。2p の電子の入り方を見ましょう。",
        // EN: Which rule says orbitals of the same energy are each occupied singly before any is doubly occupied?
        "同じエネルギーの軌道には、まず電子が 1 個ずつ入り、その後で 2 個目が入る、という規則はどれですか。",
      ],
      // EN: <p><strong>Hund’s rule</strong>: orbitals in the same sublevel are each occupied by one electron, with parallel spins, before any orbital is doubly occupied. The three 2p electrons of nitrogen should be in three separate 2p orbitals, all with the same spin.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Correct orbital diagram for nitrogen. The 1s and 2s boxes each contain a pair of opposite arrows. Each of the three 2p boxes contains one up arrow."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M169 25V8M165 13L169 8L173 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p>
      solution: "<p><strong>フントの規則</strong>です。同じ副準位の軌道には、まず電子が 1 個ずつ、同じ向きのスピン（平行スピン）で入ります。その後で、2 個目の電子が入ります。窒素の 3 個の 2p 電子は、3 つの別々の 2p 軌道に、すべて同じスピンで入るのが正解です。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"窒素の正しい軌道図。1s と 2s の箱には、それぞれ逆向きの矢印が 1 対入っている。3 つの 2p の箱には、それぞれ上向きの矢印が 1 本入っている。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M169 25V8M165 13L169 8L173 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p>",
      misconception: {
        // EN (option A): The sublevels are filled in the right order: 1s, then 2s, then 2p. The problem is inside the 2p sublevel.
        "0": "副準位に電子が入る順は合っています。1s、2s、2p の順です。問題は 2p 副準位の中にあります。",
        // EN (option C): Every orbital that holds two electrons shows one arrow up and one arrow down, so the Pauli exclusion principle is obeyed.
        "2": "電子が 2 個入っている軌道は、どれも上向きの矢印 1 本と下向きの矢印 1 本になっています。パウリの排他原理は守られています。",
        // EN (option D): Look at the 2p sublevel. One orbital holds a pair while another orbital of the same energy is empty.
        "3": "2p 副準位を見ましょう。1 つの軌道に対が入っているのに、同じエネルギーの別の軌道が空のままです。",
      },
    },

    // ── s1-3-q023 · multi · exam · SL · Structure 1.3.5 · 2 marks
    "s1-3-q023": {
      // EN: <p>Which ions have the same electron configuration as an argon atom, <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>?</p>
      stem: "<p>アルゴン原子の電子配置は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span> です。これと同じ電子配置をもつイオンはどれですか。</p>",
      options: [
        // EN: <span class="chem">K+</span>
        "<span class=\"chem\">K+</span>",
        // EN: <span class="chem">Cl-</span>
        "<span class=\"chem\">Cl-</span>",
        // EN: <span class="chem">Na+</span>
        "<span class=\"chem\">Na+</span>",
        // EN: <span class="chem">Ca^2+</span>
        "<span class=\"chem\">Ca^2+</span>",
        // EN: <span class="chem">O^2-</span>
        "<span class=\"chem\">O^2-</span>",
        // EN: <span class="chem">S^2-</span>
        "<span class=\"chem\">S^2-</span>",
      ],
      hints: [
        // EN: Argon has 18 electrons. Count the electrons in each ion.
        "アルゴンの電子は 18 個です。それぞれのイオンの電子を数えましょう。",
        // EN: Electrons in an ion = atomic number − charge. For a 2− ion, subtracting −2 adds two.
        "イオンの電子の数 = 原子番号 − 電荷。2− のイオンでは、−2 を引くので 2 個増えます。",
      ],
      // EN: <p>Argon has 18 electrons. Count the electrons in each ion:</p><div class="worked__math"><span class="chem">K+</span>: 19 − 1 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">Cl-</span>: 17 + 1 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">Na+</span>: 11 − 1 = 10 &nbsp; no (neon)</div><div class="worked__math"><span class="chem">Ca^2+</span>: 20 − 2 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">O^2-</span>: 8 + 2 = 10 &nbsp; no (neon)</div><div class="worked__math"><span class="chem">S^2-</span>: 16 + 2 = 18 &nbsp; yes</div>
      solution: "<p>アルゴンの電子は 18 個です。それぞれのイオンの電子を数えます。</p><div class=\"worked__math\"><span class=\"chem\">K+</span>: 19 − 1 = 18 &nbsp; 同じ</div><div class=\"worked__math\"><span class=\"chem\">Cl-</span>: 17 + 1 = 18 &nbsp; 同じ</div><div class=\"worked__math\"><span class=\"chem\">Na+</span>: 11 − 1 = 10 &nbsp; 違う（ネオンと同じ）</div><div class=\"worked__math\"><span class=\"chem\">Ca^2+</span>: 20 − 2 = 18 &nbsp; 同じ</div><div class=\"worked__math\"><span class=\"chem\">O^2-</span>: 8 + 2 = 10 &nbsp; 違う（ネオンと同じ）</div><div class=\"worked__math\"><span class=\"chem\">S^2-</span>: 16 + 2 = 18 &nbsp; 同じ</div>",
      misconception: {
        // EN (option C): A sodium atom has 11 electrons, so <span class="chem">Na+</span> has 10. That is the configuration of neon, not argon.
        "2": "ナトリウム (Na) 原子の電子は 11 個なので、<span class=\"chem\">Na+</span> の電子は 10 個です。これはアルゴンではなく、ネオンの電子配置です。",
        // EN (option E): An oxygen atom has 8 electrons, so <span class="chem">O^2-</span> has 10. That is the configuration of neon, not argon.
        "4": "酸素原子の電子は 8 個なので、<span class=\"chem\">O^2-</span> の電子は 10 個です。これはアルゴンではなく、ネオンの電子配置です。",
      },
    },

    // ── s1-3-q024 · numeric · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q024": {
      // EN: <p>How many <strong>orbitals</strong> are there in total in the main energy level n = 3?</p>
      stem: "<p>主エネルギー準位 n = 3 には、<strong>軌道</strong>が全部で何個ありますか。</p>",
      hints: [
        // EN: The third main energy level has three sublevels: 3s, 3p and 3d.
        "第 3 主エネルギー準位には、3s、3p、3d の 3 つの副準位があります。",
        // EN: An s sublevel has 1 orbital, a p sublevel has 3 and a d sublevel has 5.
        "s 副準位には軌道が 1 個、p 副準位には 3 個、d 副準位には 5 個あります。",
      ],
      // EN: <div class="worked__math">3s: 1 orbital &nbsp; 3p: 3 orbitals &nbsp; 3d: 5 orbitals</div><div class="worked__math">total = 1 + 3 + 5 = 9 orbitals</div><p>Check: each orbital holds 2 electrons, so n = 3 holds 9 × 2 = 18 electrons, which agrees with 2n<sup>2</sup> = 18. The common slip is to answer 18, which is the number of electrons, not orbitals.</p>
      solution: "<div class=\"worked__math\">3s：1 個 &nbsp; 3p：3 個 &nbsp; 3d：5 個</div><div class=\"worked__math\">合計 = 1 + 3 + 5 = 9 個</div><p>確かめ：1 つの軌道には電子が 2 個入るので、n = 3 には 9 × 2 = 18 個の電子が入ります。これは 2n<sup>2</sup> = 18 と合います。よくある間違いは 18 と答えることです。18 は軌道の数ではなく、電子の数です。</p>",
      // EN: orbitals
      unit: "個",
    },

    // ── s1-3-q025 · mcq · challenge · SL · Structure 1.3.5 · 1 mark
    "s1-3-q025": {
      // EN: <p>Atoms of element X have the configuration <span class="mono">[Ne] 3s<sup>2</sup></span>. Atoms of element Y have the configuration <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>. X and Y form an ionic compound in which each ion has a noble gas configuration.</p><p>Which row gives the formula of the compound and the configurations of the ions?</p>
      stem: "<p>元素 X の原子の電子配置は <span class=\"mono\">[Ne] 3s<sup>2</sup></span> です。元素 Y の原子の電子配置は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span> です。X と Y はイオン化合物をつくり、どちらのイオンも貴ガスと同じ電子配置になります。</p><p>化合物の化学式とイオンの電子配置を正しく示している組み合わせはどれですか。</p>",
      options: [
        // EN: X<sub>3</sub>Y<sub>2</sub>. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "X<sub>3</sub>Y<sub>2</sub>。どちらのイオンも <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。",
        // EN: X<sub>2</sub>Y<sub>3</sub>. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "X<sub>2</sub>Y<sub>3</sub>。どちらのイオンも <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。",
        // EN: X<sub>3</sub>Y<sub>2</sub>. The X ion is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span> and the Y ion is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup></span>.
        "X<sub>3</sub>Y<sub>2</sub>。X のイオンは <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>、Y のイオンは <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup></span>。",
        // EN: XY. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "XY。どちらのイオンも <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。",
      ],
      hints: [
        // EN: X has two outer electrons. Y has five. Which loses electrons and which gains?
        "X の最外殻の電子は 2 個、Y は 5 個です。電子を失うのはどちらで、受け取るのはどちらですか。",
        // EN: Find the charge on each ion, then balance the charges to get the formula.
        "それぞれのイオンの電荷を求め、電荷がつり合うようにして化学式を決めます。",
      ],
      // EN: <p>X (<span class="mono">[Ne] 3s<sup>2</sup></span>, magnesium) loses its two 3s electrons to form X<sup>2+</sup>: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Y (<span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>, nitrogen) gains three electrons to form Y<sup>3−</sup>: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Balance the charges: 3 × (2+) = 6+ and 2 × (3−) = 6−, so the formula is X<sub>3</sub>Y<sub>2</sub> (<span class="chem">Mg3N2</span>).</p>
      solution: "<p>X（<span class=\"mono\">[Ne] 3s<sup>2</sup></span>、マグネシウム）は 3s の電子 2 個を失って X<sup>2+</sup> になります：<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。</p><p>Y（<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>、窒素）は電子を 3 個受け取って Y<sup>3−</sup> になります：<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。</p><p>電荷をつり合わせます。3 × (2+) = 6+、2 × (3−) = 6− なので、化学式は X<sub>3</sub>Y<sub>2</sub>（<span class=\"chem\">Mg3N2</span>）です。</p>",
      misconception: {
        // EN (option B): The configurations are right, but the formula is not. Three 2+ ions balance two 3− ions, so the numbers go the other way round.
        "1": "電子配置は合っていますが、化学式が違います。2+ のイオン 3 個と 3− のイオン 2 個でつり合うので、数字が逆です。",
        // EN (option C): Y is a non-metal with five outer electrons. It gains three electrons to fill 2p. It does not lose its 2p electrons.
        "2": "Y は最外殻の電子が 5 個の非金属です。電子を 3 個受け取って 2p を満たします。2p の電子を失うことはありません。",
        // EN (option D): The charges are not equal in size. X forms a 2+ ion and Y forms a 3− ion, so a 1 : 1 formula is not neutral.
        "3": "2 つのイオンの電荷の大きさは同じではありません。X は 2+ のイオン、Y は 3− のイオンになるので、1 : 1 の化学式では電気的に中性になりません。",
      },
    },

    // ── s1-3-q026 · mcq · challenge · SL · Structure 1.3.5 · 1 mark
    "s1-3-q026": {
      // EN: <p>Which atom has the <strong>greatest</strong> number of unpaired electrons in its ground state?</p>
      stem: "<p>基底状態で不対電子 (unpaired electrons) の数が<strong>最も多い</strong>原子はどれですか。</p>",
      options: [
        // EN: Cr (Z = 24)
        "Cr (Z = 24)",
        // EN: Mn (Z = 25)
        "Mn (Z = 25)",
        // EN: Fe (Z = 26)
        "Fe (Z = 26)",
        // EN: As (Z = 33)
        "As (Z = 33)",
      ],
      hints: [
        // EN: Write the condensed configuration of each atom. Remember the two exceptions.
        "それぞれの原子の省略形の電子配置を書きましょう。2 つの例外を忘れずに。",
        // EN: Use Hund’s rule in each partly filled sublevel: one electron per orbital before any pairing.
        "一部だけ満たされた副準位では、フントの規則を使います。対をつくる前に、どの軌道にも電子を 1 個ずつ入れます。",
      ],
      // EN: <p>Write each configuration and count the singly occupied orbitals.</p><div class="worked__math">Cr: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> &nbsp; 1 + 5<br>&nbsp;&nbsp;= 6 unpaired</div><div class="worked__math">Mn: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> &nbsp; 5 unpaired</div><div class="worked__math">Fe: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp; 4 unpaired</div><div class="worked__math">As: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> &nbsp; 3 unpaired</div><p>Chromium is an exception to the usual filling order. Its single 4s electron and its five 3d electrons are all unpaired, so it has the most: 6.</p>
      solution: "<p>それぞれの電子配置を書き、電子が 1 個だけ入っている軌道を数えます。</p><div class=\"worked__math\">Cr: <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> &nbsp; 1 + 5<br>&nbsp;&nbsp;= 不対電子 6 個</div><div class=\"worked__math\">Mn: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> &nbsp; 不対電子 5 個</div><div class=\"worked__math\">Fe: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp; 不対電子 4 個</div><div class=\"worked__math\">As: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> &nbsp; 不対電子 3 個</div><p>クロムは、ふつうの電子の入る順の例外です。1 個の 4s 電子と 5 個の 3d 電子がすべて不対電子なので、最も多い 6 個になります。</p>",
      misconception: {
        // EN (option B): Manganese, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>, has five unpaired electrons. One of the other atoms has more, because of an exception to the usual filling order.
        "1": "マンガン <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> の不対電子は 5 個です。ほかの原子の 1 つは、ふつうの電子の入る順の例外なので、これより多くなります。",
        // EN (option C): Iron, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>, has four unpaired electrons. The sixth 3d electron has to pair up.
        "2": "鉄 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> の不対電子は 4 個です。6 個目の 3d 電子は対になるしかありません。",
        // EN (option D): Arsenic, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span>, has three unpaired electrons, all in 4p. The 3d sublevel is full.
        "3": "ヒ素 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> の不対電子は 3 個で、すべて 4p にあります。3d 副準位は満たされています。",
      },
    },

    // ── s1-3-q027 · mcq · exam · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q027": {
      // EN: <p>What is the condensed electron configuration of the <span class="chem">Fe^3+</span> ion? (Iron has Z = 26.)</p>
      stem: "<p><span class=\"chem\">Fe^3+</span> イオンの省略形の電子配置 (condensed electron configuration) はどれですか。（鉄は Z = 26 です。）</p>",
      options: [
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>3</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>4</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>4</sup></span>",
        // EN: <span class="mono">[Ar] 3d<sup>5</sup></span>
        "<span class=\"mono\">[Ar] 3d<sup>5</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>",
      ],
      hints: [
        // EN: Start from the atom: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. Three electrons must be removed.
        "原子の電子配置 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> から始めます。電子を 3 個取り除きます。",
        // EN: Which sublevel loses electrons first when a first-row transition element forms a positive ion?
        "第一遷移系列の元素が陽イオンになるとき、先に電子を失うのはどの副準位ですか。",
      ],
      // EN: <p>The iron atom is <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. When first-row transition elements form ions, the 4s electrons are removed before the 3d electrons. Remove the two 4s electrons, then one 3d electron:</p><div class="worked__math"><span class="chem">Fe^3+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span><br>&nbsp;&nbsp;(26 − 3 = 23 electrons)</div><p>This skill is listed for HL in Structure 3.1.</p>
      solution: "<p>鉄原子は <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> です。第一遷移系列の元素（第 4 周期の遷移元素）がイオンになるときは、3d の電子より先に 4s の電子が取り除かれます。4s の電子 2 個を取り除き、次に 3d の電子を 1 個取り除きます。</p><div class=\"worked__math\"><span class=\"chem\">Fe^3+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span><br>&nbsp;&nbsp;(26 − 3 = 23 個)</div><p>このスキルは、Structure 3.1 の HL の内容です。</p>",
      misconception: {
        // EN (option A): This removes all three electrons from 3d. When a first-row transition element forms an ion, the 4s electrons are lost first.
        "0": "これは 3 個の電子をすべて 3d から取り除いています。第一遷移系列の元素がイオンになるときは、4s の電子が先に失われます。",
        // EN (option B): This removes one 4s electron and two 3d electrons. Both 4s electrons are lost before any 3d electron.
        "1": "これは 4s の電子を 1 個、3d の電子を 2 個取り除いています。3d の電子より先に、4s の電子が 2 個とも失われます。",
        // EN (option D): This has three <em>more</em> electrons than the atom. A 3+ charge means three electrons have been lost.
        "3": "これは原子より電子が 3 個<em>多く</em>なっています。電荷が 3+ ということは、電子を 3 個失ったということです。",
      },
    },

    // ── s1-3-q028 · mcq · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q028": {
      // EN: <p>Which feature of the emission spectrum of an atom can be used to find its first ionization energy?</p>
      stem: "<p>原子の発光スペクトルのどの特徴から、第一イオン化エネルギー (first ionization energy) を求められますか。</p>",
      options: [
        // EN: The line with the lowest frequency in the visible region
        "可視光の領域で振動数が最も小さい線",
        // EN: The total number of lines in the spectrum
        "スペクトルの線の総数",
        // EN: The limit of convergence at high frequency
        "振動数の大きい側にある収束限界 (limit of convergence)",
        // EN: The spacing between the first two lines of a set
        "1 つの組の最初の 2 本の線の間隔",
      ],
      hints: [
        // EN: Ionization means the electron is removed completely, to n = ∞. Where do the lines end up as the upper level gets higher and higher?
        "イオン化とは、電子が完全に取り除かれて n = ∞ に移ることです。上の準位がどんどん高くなると、線はどこに行きつきますか。",
      ],
      // EN: <p>The lines in a set get closer together at higher frequency until they merge. This point is the <strong>limit of convergence</strong>. It corresponds to the electron moving between the lower level and n = ∞, which is ionization. Its frequency (or wavelength) gives the ionization energy using E = hf.</p>
      solution: "<p>1 つの組の線は、振動数が大きくなるほど間隔がせまくなり、最後には 1 つに重なります。この点が<strong>収束限界</strong>です。これは、電子が下の準位と n = ∞ の間を移ること、つまりイオン化に対応します。その振動数（または波長）から、E = hf を使ってイオン化エネルギーを求められます。</p>",
      misconception: {
        // EN (option A): A single line gives the energy difference between two levels inside the atom. Ionization means the electron leaves the atom completely.
        "0": "1 本の線からわかるのは、原子の中の 2 つの準位のエネルギー差です。イオン化とは、電子が原子から完全に離れることです。",
        // EN (option B): The number of lines does not measure an energy.
        "1": "線の数は、エネルギーを表す量ではありません。",
        // EN (option D): The spacing between two lines gives the energy difference between two upper levels. It does not give the energy needed to remove the electron.
        "3": "2 本の線の間隔からわかるのは、上にある 2 つの準位のエネルギー差です。電子を取り除くのに必要なエネルギーはわかりません。",
      },
    },

    // ── s1-3-q029 · mcq · exam · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q029": {
      // EN: <p>Why does the first ionization energy generally <strong>increase</strong> across period 3, from sodium to argon?</p>
      stem: "<p>第 3 周期で、ナトリウム (Na) からアルゴン (Ar) へと第一イオン化エネルギーがおおむね<strong>大きくなる</strong>のはなぜですか。</p>",
      options: [
        // EN: The number of occupied main energy levels increases.
        "電子が入っている主エネルギー準位の数が増えるから。",
        // EN: The nuclear charge increases while the shielding by inner electrons stays about the same.
        "核電荷 (nuclear charge) が大きくなる一方で、内側の電子による遮蔽 (shielding) はほぼ変わらないから。",
        // EN: The atoms get larger, so the outer electrons are further from the nucleus.
        "原子が大きくなり、最外殻の電子が原子核から遠くなるから。",
        // EN: The shielding by inner electrons increases with each element.
        "内側の電子による遮蔽が、元素ごとに大きくなるから。",
      ],
      hints: [
        // EN: What changes in the nucleus from one element to the next?
        "元素が 1 つ進むごとに、原子核では何が変わりますか。",
        // EN: Are the extra electrons going into a new main energy level or the same one?
        "増えた電子は、新しい主エネルギー準位に入りますか。それとも同じ準位に入りますか。",
      ],
      // EN: <p>Across the period the number of protons increases, so the nuclear charge increases. The outer electrons are all in the same main energy level (n = 3), so the shielding by the inner electrons is about the same. The outer electrons are attracted more strongly to the nucleus (and are closer to it), so more energy is needed to remove one.</p>
      solution: "<p>周期を左から右へ進むと陽子の数が増えるので、原子核の正電荷（核電荷）が大きくなります。最外殻の電子はすべて同じ主エネルギー準位（n = 3）にあるので、内側の電子による遮蔽（内側の電子が原子核の引力をさえぎること）はほぼ同じです。最外殻の電子は原子核により強く引きつけられ（原子核にも近くなり）、1 個取り除くのに必要なエネルギーが大きくなります。</p>",
      misconception: {
        // EN (option A): All the period 3 elements have three occupied main energy levels. A new level starts only at the next period.
        "0": "第 3 周期の元素はどれも、電子が入っている主エネルギー準位が 3 つです。新しい準位が始まるのは、次の周期からです。",
        // EN (option C): The atoms get <em>smaller</em> across a period. And an electron further from the nucleus would be easier to remove, not harder.
        "2": "周期を左から右へ進むと、原子は<em>小さく</em>なります。また、電子が原子核から遠いほど、取り除きにくくなるのではなく、取り除きやすくなります。",
        // EN (option D): Across a period the extra electrons go into the same main energy level, so the number of inner (shielding) electrons does not change. More shielding would also make ionization easier, not harder.
        "3": "周期を左から右へ進むとき、増えた電子は同じ主エネルギー準位に入ります。そのため、内側の（遮蔽する）電子の数は変わりません。また、遮蔽が大きくなれば、イオン化はしにくくなるのではなく、しやすくなります。",
      },
    },

    // ── s1-3-q030 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q030": {
      // EN: <p>The first ionization energies of three group 1 elements are: Li 520, Na 496 and K 419 <span class="unit">kJ mol-1</span>.</p><p>Explain why the first ionization energy decreases down the group.</p>
      stem: "<p>3 つの 1 族元素の第一イオン化エネルギーは、Li 520、Na 496、K 419 <span class=\"unit\">kJ mol-1</span> です。</p><p>族を上から下へ進むと第一イオン化エネルギーが小さくなる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare where the outer electron is: 2s in Li, 3s in Na, 4s in K.
        "最外殻の電子がどこにあるかをくらべましょう。Li は 2s、Na は 3s、K は 4s です。",
        // EN: Two things change that both weaken the attraction to the nucleus. Name both.
        "原子核との引力を弱くする変化が 2 つあります。両方を書きましょう。",
      ],
      // EN: <p>Going down the group, the outer electron is in a higher main energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove it.</p>
      answer: "<p>族を下へ進むと、最外殻の電子はより高い主エネルギー準位に入るので、原子核から遠くなります。内側の電子も増えるので、最外殻の電子は原子核からより強く遮蔽されます。そのため（核電荷は大きくなっても）原子核と最外殻の電子の間の引力は弱くなり、電子を取り除くのに必要なエネルギーは小さくなります。</p>",
      markscheme: [
        // EN: The outer electron is in a higher main energy level / is further from the nucleus (accept: atomic radius increases).
        "最外殻の電子がより高い主エネルギー準位にある / 原子核からより遠い（「原子半径が大きくなる」も可）。",
        // EN: There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker (this outweighs the increase in nuclear charge).
        "内側の電子による遮蔽が大きくなるので、原子核と最外殻の電子の間の引力が弱くなる（この効果が核電荷の増加を上回る）。",
      ],
    },

    // ── s1-3-q031 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q031": {
      // EN: <p>The first ionization energy of beryllium is 900 <span class="unit">kJ mol-1</span> and that of boron is 801 <span class="unit">kJ mol-1</span>, even though boron has the greater nuclear charge.</p><p>Explain why boron has the lower first ionization energy.</p>
      stem: "<p>ベリリウムの第一イオン化エネルギーは 900 <span class=\"unit\">kJ mol-1</span>、ホウ素は 801 <span class=\"unit\">kJ mol-1</span> です。核電荷 (nuclear charge) はホウ素のほうが大きいのに、こうなっています。</p><p>ホウ素の第一イオン化エネルギーのほうが小さい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Write the electron configuration of each atom. Which sublevel does the outermost electron come from?
        "それぞれの原子の電子配置を書きましょう。いちばん外側の電子は、どの副準位の電子ですか。",
        // EN: Base the explanation on the energy of the electron that is removed.
        "取り除かれる電子のエネルギーをもとに説明しましょう。",
      ],
      // EN: <p>Beryllium is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup></span>, so the electron removed comes from the 2s sublevel. Boron is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup></span>, so the electron removed comes from the 2p sublevel. The 2p sublevel is higher in energy than the 2s sublevel (the 2p electron is also shielded by the 2s electrons), so less energy is needed to remove it.</p>
      answer: "<p>ベリリウムは <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup></span> なので、取り除かれる電子は 2s 副準位の電子です。ホウ素は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup></span> なので、取り除かれる電子は 2p 副準位の電子です。2p 副準位は 2s 副準位よりエネルギーが高い（2p の電子は 2s の電子に遮蔽されてもいる）ので、取り除くのに必要なエネルギーが小さくなります。</p>",
      markscheme: [
        // EN: The electron is removed from the 2p sublevel in B but from the 2s sublevel in Be (accept: configurations 1s² 2s² 2p¹ and 1s² 2s² used to show this).
        "取り除かれる電子は、B では 2p 副準位、Be では 2s 副準位の電子である（「電子配置 1s² 2s² 2p¹ と 1s² 2s² を使って示す」も可）。",
        // EN: The 2p sublevel is higher in energy than 2s / the 2p electron is further from the nucleus and shielded by the 2s electrons, so it is easier to remove.
        "2p 副準位は 2s よりエネルギーが高い / 2p の電子は原子核からより遠く、2s の電子に遮蔽されている。そのため取り除きやすい。",
      ],
    },

    // ── s1-3-q032 · short · challenge · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q032": {
      // EN: <p>The first ionization energy of nitrogen is 1402 <span class="unit">kJ mol-1</span> and that of oxygen is 1314 <span class="unit">kJ mol-1</span>. In both atoms the electron is removed from the 2p sublevel, and oxygen has the greater nuclear charge.</p><p>Explain why oxygen has the lower first ionization energy.</p>
      stem: "<p>窒素の第一イオン化エネルギーは 1402 <span class=\"unit\">kJ mol-1</span>、酸素は 1314 <span class=\"unit\">kJ mol-1</span> です。どちらの原子でも電子は 2p 副準位から取り除かれ、核電荷 (nuclear charge) は酸素のほうが大きくなっています。</p><p>酸素の第一イオン化エネルギーのほうが小さい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Draw the three 2p boxes for each atom and fill them using Hund’s rule.
        "それぞれの原子について 2p の箱を 3 つ描き、フントの規則に従って電子を入れましょう。",
        // EN: What is different about the orbital that the electron leaves in oxygen?
        "酸素で電子が出ていく軌道は、どこが違いますか。",
        // EN: Do not write about a half-filled sublevel being "stable". Explain using repulsion and the energy of the electron removed.
        "半分満たされた副準位は「安定」だから、とは書かないでください。反発 (repulsion) と、取り除かれる電子のエネルギーを使って説明しましょう。",
      ],
      // EN: <p>Nitrogen is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>: each 2p orbital holds one electron. Oxygen is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></span>: one 2p orbital holds two electrons. The electron removed from oxygen comes from this doubly occupied 2p orbital. The two electrons in the same orbital repel each other, which raises the energy of the electron, so less energy is needed to remove it.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagrams of the 2p sublevel. In nitrogen each of the three 2p boxes holds one up arrow. In oxygen the first 2p box holds an up and a down arrow and the other two hold one up arrow each."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M17 25V8M13 13L17 8L21 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M47 25V8M43 13L47 8L51 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="62" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M77 25V8M73 13L77 8L81 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="47" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p in N</text><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M118 25V8M114 13L118 8L122 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 7V24M124 19L128 24L132 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="153" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p in O</text></svg></p>
      answer: "<p>窒素は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span> で、2p 軌道のそれぞれに電子が 1 個ずつ入っています。酸素は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></span> で、2p 軌道の 1 つに電子が 2 個入っています。酸素から取り除かれる電子は、この 2 個入った 2p 軌道の電子です。同じ軌道にある 2 個の電子は互いに反発し、電子のエネルギーが高くなるので、取り除くのに必要なエネルギーが小さくなります。</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"2p 副準位の軌道図。窒素では、3 つの 2p の箱にそれぞれ上向きの矢印が 1 本ある。酸素では、最初の 2p の箱に上向きと下向きの矢印があり、残りの 2 つの箱に上向きの矢印が 1 本ずつある。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M17 25V8M13 13L17 8L21 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"32\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M47 25V8M43 13L47 8L51 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"62\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M77 25V8M73 13L77 8L81 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"47\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">N の 2p</text><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M118 25V8M114 13L118 8L122 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M128 7V24M124 19L128 24L132 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"153\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">O の 2p</text></svg></p>",
      markscheme: [
        // EN: In O the electron is removed from a doubly occupied 2p orbital / a 2p orbital containing a pair of electrons (in N each 2p orbital is singly occupied).
        "O では、電子が 2 個入った 2p 軌道 / 電子対のある 2p 軌道から電子が取り除かれる（N では、どの 2p 軌道にも電子が 1 個ずつ入っている）。",
        // EN: Repulsion between the two electrons in the same orbital makes the electron easier to remove (accept: raises its energy).
        "同じ軌道にある 2 個の電子の間の反発により、電子が取り除きやすくなる（「電子のエネルギーが高くなる」も可）。",
      ],
    },

    // ── s1-3-q033 · numeric · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q033": {
      // EN: <p>The red line in the visible emission spectrum of hydrogen has a wavelength of 656 nm.</p><p>Calculate the frequency of this light. Use c = 3.00 × 10<sup>8</sup> <span class="unit">m s-1</span> and give your answer to three significant figures.</p>
      stem: "<p>水素の可視光の発光スペクトルにある赤い線の波長は 656 nm です。</p><p>この光の振動数を計算しなさい (calculate)。c = 3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span> を使い、有効数字 3 桁で答えてください。</p>",
      hints: [
        // EN: The data booklet gives c = λf. Rearrange it to make f the subject.
        "データブックレットに c = λf があります。f について解く形に変形しましょう。",
        // EN: Convert the wavelength to metres first: 1 nm = 1 × 10<sup>−9</sup> m.
        "先に波長をメートルに直します：1 nm = 1 × 10<sup>−9</sup> m。",
      ],
      // EN: <p>Convert the wavelength to metres, then use c = λf.</p><div class="worked__math">λ = 656 nm<br>&nbsp;&nbsp;= 656 × 10<sup>−9</sup> m<br>&nbsp;&nbsp;= 6.56 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (6.56 × 10<sup>−7</sup> m)</div><div class="worked__math">f = 4.57 × 10<sup>14</sup> <span class="unit">s-1</span><br>&nbsp;&nbsp;= 4.57 × 10<sup>14</sup> Hz</div><p>If you leave the wavelength in nm you get 4.57 × 10<sup>5</sup>, which is too small by a factor of 10<sup>9</sup>.</p>
      solution: "<p>波長をメートルに直してから、c = λf を使います。</p><div class=\"worked__math\">λ = 656 nm<br>&nbsp;&nbsp;= 656 × 10<sup>−9</sup> m<br>&nbsp;&nbsp;= 6.56 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (6.56 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">f = 4.57 × 10<sup>14</sup> <span class=\"unit\">s-1</span><br>&nbsp;&nbsp;= 4.57 × 10<sup>14</sup> Hz</div><p>波長を nm のままにすると 4.57 × 10<sup>5</sup> になります。これは正しい値の 10<sup>9</sup> 分の 1 で、小さすぎます。</p>",
    },

    // ── s1-3-q034 · numeric · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q034": {
      // EN: <p>One line in the emission spectrum of hydrogen has a frequency of 6.17 × 10<sup>14</sup> Hz.</p><p>Calculate the energy of one photon of this light. Use h = 6.63 × 10<sup>−34</sup> J s and give your answer to three significant figures.</p>
      stem: "<p>水素の発光スペクトルのある線の振動数は 6.17 × 10<sup>14</sup> Hz です。</p><p>この光の光子 1 個のエネルギーを計算しなさい (calculate)。h = 6.63 × 10<sup>−34</sup> J s を使い、有効数字 3 桁で答えてください。</p>",
      hints: [
        // EN: The data booklet gives E = hf.
        "データブックレットに E = hf があります。",
        // EN: Multiply the two numbers. Add the powers of ten: −34 + 14.
        "2 つの数をかけます。10 の指数は足します：−34 + 14。",
      ],
      // EN: <div class="worked__math">E = hf</div><div class="worked__math">E = (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (6.17 × 10<sup>14</sup> <span class="unit">s-1</span>)</div><div class="worked__math">E = 4.09 × 10<sup>−19</sup> J</div><p>This is the energy of <em>one</em> photon, so it is the energy change of one atom. It is a very small number of joules.</p>
      solution: "<div class=\"worked__math\">E = hf</div><div class=\"worked__math\">E = (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (6.17 × 10<sup>14</sup> <span class=\"unit\">s-1</span>)</div><div class=\"worked__math\">E = 4.09 × 10<sup>−19</sup> J</div><p>これは光子 <em>1 個</em>のエネルギーなので、原子 1 個のエネルギー変化にあたります。ジュールで表すと、とても小さい数になります。</p>",
    },

    // ── s1-3-q035 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q035": {
      // EN: <p>In the emission spectrum of hydrogen, the lines produced by electrons falling to n = 1 converge at a wavelength of 91.2 nm.</p><p>Calculate the first ionization energy of hydrogen, in <span class="unit">kJ mol-1</span>. Use the data booklet values of h, c and the Avogadro constant.</p>
      stem: "<p>水素の発光スペクトルで、電子が n = 1 に落ちるときにできる線は、波長 91.2 nm で収束します。</p><p>水素の第一イオン化エネルギーを <span class=\"unit\">kJ mol-1</span> の単位で計算しなさい (calculate)。h、c、アボガドロ定数はデータブックレットの値を使ってください。</p>",
      hints: [
        // EN: Three steps: wavelength → frequency (c = λf), frequency → energy of one photon (E = hf), energy for one atom → energy for one mole.
        "3 つのステップで解きます。波長 → 振動数（c = λf）、振動数 → 光子 1 個のエネルギー（E = hf）、原子 1 個のエネルギー → 1 mol のエネルギー。",
        // EN: Convert 91.2 nm to metres before you start.
        "計算を始める前に、91.2 nm をメートルに直します。",
        // EN: To go from J per atom to <span class="unit">kJ mol-1</span>, multiply by 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> and divide by 1000.
        "原子 1 個あたりの J から <span class=\"unit\">kJ mol-1</span> に直すには、6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> をかけて、1000 で割ります。",
      ],
      // EN: <p>The convergence limit corresponds to ionization, so the photon at 91.2 nm has the energy needed to ionize one atom.</p><div class="worked__math">λ = 91.2 nm = 9.12 × 10<sup>−8</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (9.12 × 10<sup>−8</sup> m)<br>&nbsp;&nbsp;= 3.289 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (3.289 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 2.181 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">for one mole: 2.181 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 1.313 × 10<sup>6</sup> <span class="unit">J mol-1</span></div><div class="worked__math">IE = 1.313 × 10<sup>6</sup> <span class="unit">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 1313 <span class="unit">kJ mol-1</span> ≈ 1310 <span class="unit">kJ mol-1</span></div><p>Check: the data booklet value for hydrogen is 1312 <span class="unit">kJ mol-1</span>. Common slips: leaving the wavelength in nm, stopping at the energy of one atom (2.18 × 10<sup>−18</sup> J), and forgetting to divide by 1000.</p>
      solution: "<p>収束限界 (convergence limit) はイオン化に対応します。つまり、91.2 nm の光子は、原子 1 個をイオン化するのに必要なエネルギーをもっています。</p><div class=\"worked__math\">λ = 91.2 nm = 9.12 × 10<sup>−8</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (9.12 × 10<sup>−8</sup> m)<br>&nbsp;&nbsp;= 3.289 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (3.289 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 2.181 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;（原子 1 個あたり）</div><div class=\"worked__math\">1 mol あたり：2.181 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 1.313 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">IE = 1.313 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 1313 <span class=\"unit\">kJ mol-1</span> ≈ 1310 <span class=\"unit\">kJ mol-1</span></div><p>確かめ：データブックレットの水素の値は 1312 <span class=\"unit\">kJ mol-1</span> です。よくある間違い：波長を nm のままにする。原子 1 個のエネルギー（2.18 × 10<sup>−18</sup> J）で止める。1000 で割るのを忘れる。</p>",
      // EN: 1310 (or 1313)
      answerDisplay: "1310 (または 1313)",
    },

    // ── s1-3-q036 · numeric · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q036": {
      // EN: <p>In the emission spectrum of helium atoms, the lines produced by electrons falling to the lowest energy level converge at a frequency of 5.94 × 10<sup>15</sup> Hz.</p><p>Calculate the first ionization energy of helium, in <span class="unit">kJ mol-1</span>.</p>
      stem: "<p>ヘリウム原子の発光スペクトルで、電子が最も低いエネルギー準位に落ちるときにできる線は、振動数 5.94 × 10<sup>15</sup> Hz で収束します。</p><p>ヘリウムの第一イオン化エネルギーを <span class=\"unit\">kJ mol-1</span> の単位で計算しなさい (calculate)。</p>",
      hints: [
        // EN: You already have the frequency, so go straight to E = hf.
        "振動数はもうわかっているので、すぐに E = hf を使います。",
        // EN: E = hf gives the energy for one atom in joules. The answer must be for one mole, in kilojoules.
        "E = hf で求まるのは、原子 1 個あたりのエネルギー（単位は J）です。答えは 1 mol あたりの値で、単位は kJ にします。",
      ],
      // EN: <div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (5.94 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 3.938 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">for one mole: 3.938 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 2.371 × 10<sup>6</sup> <span class="unit">J mol-1</span></div><div class="worked__math">IE = 2.371 × 10<sup>6</sup> <span class="unit">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 2371 <span class="unit">kJ mol-1</span> ≈ 2370 <span class="unit">kJ mol-1</span></div><p>This is the highest first ionization energy of any element. The data booklet value is 2372 <span class="unit">kJ mol-1</span>.</p>
      solution: "<div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (5.94 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 3.938 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;（原子 1 個あたり）</div><div class=\"worked__math\">1 mol あたり：3.938 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 2.371 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">IE = 2.371 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 2371 <span class=\"unit\">kJ mol-1</span> ≈ 2370 <span class=\"unit\">kJ mol-1</span></div><p>これは、すべての元素の中で最も大きい第一イオン化エネルギーです。データブックレットの値は 2372 <span class=\"unit\">kJ mol-1</span> です。</p>",
    },

    // ── s1-3-q037 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q037": {
      // EN: <p>The first ionization energy of sodium is 496 <span class="unit">kJ mol-1</span>.</p><p>Calculate the wavelength, in nm, of the convergence limit that corresponds to the ionization of a gaseous sodium atom. Give your answer to three significant figures.</p>
      stem: "<p>ナトリウム (Na) の第一イオン化エネルギーは 496 <span class=\"unit\">kJ mol-1</span> です。</p><p>気体のナトリウム原子のイオン化に対応する収束限界 (convergence limit) の波長を、nm の単位で計算しなさい (calculate)。有効数字 3 桁で答えてください。</p>",
      hints: [
        // EN: This is the usual calculation in reverse. First find the energy needed to ionize <em>one</em> atom, in joules.
        "いつもの計算を逆にたどります。まず、原子 <em>1 個</em>をイオン化するのに必要なエネルギーを J で求めます。",
        // EN: kJ → J: multiply by 1000. One mole → one atom: divide by 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span>.
        "kJ → J：1000 をかける。1 mol → 原子 1 個：6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> で割る。",
        // EN: Then f = E ÷ h, and λ = c ÷ f. Convert metres to nm at the end.
        "次に f = E ÷ h、λ = c ÷ f を使います。最後にメートルを nm に直します。",
      ],
      // EN: <p>Work backwards: energy per mole → energy per atom → frequency → wavelength.</p><div class="worked__math">IE = 496 <span class="unit">kJ mol-1</span><br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class="unit">J mol-1</span></div><div class="worked__math">for one atom: E<br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class="unit">J mol-1</span> ÷ 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 8.239 × 10<sup>−19</sup> J</div><div class="worked__math">f = E ÷ h<br>&nbsp;&nbsp;= (8.239 × 10<sup>−19</sup> J)<br>&nbsp;&nbsp;÷ (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;= 1.243 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">λ = c ÷ f<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (1.243 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 2.41 × 10<sup>−7</sup> m</div><div class="worked__math">λ = 2.41 × 10<sup>−7</sup> m × 10<sup>9</sup> <span class="unit">nm m-1</span><br>&nbsp;&nbsp;= 241 nm</div><p>241 nm is in the ultraviolet region. If you forget to change kJ to J, you get a wavelength 1000 times too long.</p>
      solution: "<p>逆向きに進みます：1 mol あたりのエネルギー → 原子 1 個あたりのエネルギー → 振動数 → 波長。</p><div class=\"worked__math\">IE = 496 <span class=\"unit\">kJ mol-1</span><br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">原子 1 個あたり：E<br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span> ÷ 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 8.239 × 10<sup>−19</sup> J</div><div class=\"worked__math\">f = E ÷ h<br>&nbsp;&nbsp;= (8.239 × 10<sup>−19</sup> J)<br>&nbsp;&nbsp;÷ (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;= 1.243 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">λ = c ÷ f<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (1.243 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 2.41 × 10<sup>−7</sup> m</div><div class=\"worked__math\">λ = 2.41 × 10<sup>−7</sup> m × 10<sup>9</sup> <span class=\"unit\">nm m-1</span><br>&nbsp;&nbsp;= 241 nm</div><p>241 nm は紫外線の領域です。kJ を J に直し忘れると、波長が 1000 倍長くなってしまいます。</p>",
    },

    // ── s1-3-q038 · mcq · challenge · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q038": {
      // EN: <p>Ultraviolet radiation of wavelength 200 nm shines on separate samples of gaseous sodium atoms and gaseous magnesium atoms. The first ionization energies are Na 496 <span class="unit">kJ mol-1</span> and Mg 738 <span class="unit">kJ mol-1</span>.</p><p>For which atoms does one photon of this radiation have enough energy to remove an electron from an atom in its ground state?</p>
      stem: "<p>波長 200 nm の紫外線を、気体のナトリウム (Na) 原子の試料と、気体のマグネシウム (Mg) 原子の試料に別々に当てます。第一イオン化エネルギーは Na 496 <span class=\"unit\">kJ mol-1</span>、Mg 738 <span class=\"unit\">kJ mol-1</span> です。</p><p>この紫外線の光子 1 個が、基底状態の原子から電子を取り除くのに十分なエネルギーをもつのは、どの原子の場合ですか。</p>",
      options: [
        // EN: Both sodium and magnesium
        "ナトリウムとマグネシウムの両方",
        // EN: Sodium only
        "ナトリウムだけ",
        // EN: Magnesium only
        "マグネシウムだけ",
        // EN: Neither sodium nor magnesium
        "ナトリウムでもマグネシウムでもない",
      ],
      hints: [
        // EN: Find the energy of one photon with f = c ÷ λ and E = hf.
        "f = c ÷ λ と E = hf を使って、光子 1 個のエネルギーを求めます。",
        // EN: Convert to <span class="unit">kJ mol-1</span> so that you can compare it with the two ionization energies.
        "2 つのイオン化エネルギーとくらべられるように、<span class=\"unit\">kJ mol-1</span> に直します。",
      ],
      // EN: <div class="worked__math">λ = 200 nm = 2.00 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (2.00 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 1.50 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (1.50 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 9.945 × 10<sup>−19</sup> J &nbsp; (one photon)</div><div class="worked__math">per mole: 9.945 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 599 <span class="unit">kJ mol-1</span></div><p>599 <span class="unit">kJ mol-1</span> is more than 496 <span class="unit">kJ mol-1</span> (Na) but less than 738 <span class="unit">kJ mol-1</span> (Mg). So a photon has enough energy to ionize a sodium atom but not a magnesium atom.</p>
      solution: "<div class=\"worked__math\">λ = 200 nm = 2.00 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (2.00 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 1.50 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (1.50 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 9.945 × 10<sup>−19</sup> J &nbsp; （光子 1 個）</div><div class=\"worked__math\">1 mol あたり：9.945 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 599 <span class=\"unit\">kJ mol-1</span></div><p>599 <span class=\"unit\">kJ mol-1</span> は 496 <span class=\"unit\">kJ mol-1</span>（Na）より大きく、738 <span class=\"unit\">kJ mol-1</span>（Mg）より小さい値です。したがって、光子 1 個のエネルギーは、ナトリウム原子をイオン化するには十分ですが、マグネシウム原子をイオン化するには足りません。</p>",
      misconception: {
        // EN (option A): The energy of one mole of these photons is 5.99 × 10<sup>5</sup> <span class="unit">J mol-1</span>. That looks larger than 738, but the units are different. Convert it to <span class="unit">kJ mol-1</span> before comparing.
        "0": "この光子 1 mol のエネルギーは 5.99 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span> です。738 より大きく見えますが、単位が違います。くらべる前に <span class=\"unit\">kJ mol-1</span> に直しましょう。",
        // EN (option C): A photon needs <em>at least</em> the ionization energy. The atom with the lower ionization energy is the one that is easier to ionize.
        "2": "光子には、<em>少なくとも</em>イオン化エネルギーと同じだけのエネルギーが必要です。イオン化しやすいのは、イオン化エネルギーの小さいほうの原子です。",
        // EN (option D): The energy of one photon is about 10<sup>−18</sup> J, which looks tiny next to 496. But 496 <span class="unit">kJ mol-1</span> is for a mole of atoms. Multiply the photon energy by the Avogadro constant before comparing.
        "3": "光子 1 個のエネルギーは約 10<sup>−18</sup> J で、496 にくらべてとても小さく見えます。しかし 496 <span class=\"unit\">kJ mol-1</span> は原子 1 mol あたりの値です。くらべる前に、光子のエネルギーにアボガドロ定数をかけましょう。",
      },
    },

    // ── s1-3-q039 · numeric · challenge · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q039": {
      // EN: <p>In the emission spectrum of hydrogen, the lines in and near the visible region are produced by electrons falling to n = 2. These lines converge at a wavelength of 365 nm.</p><p>Calculate the energy, in <span class="unit">kJ mol-1</span>, needed to remove an electron from the n = 2 level of a hydrogen atom. Give your answer to three significant figures.</p>
      stem: "<p>水素の発光スペクトルで、可視光の領域とその近くにある線は、電子が n = 2 に落ちるときにできます。これらの線は波長 365 nm で収束します。</p><p>水素原子の n = 2 の準位から電子を取り除くのに必要なエネルギーを、<span class=\"unit\">kJ mol-1</span> の単位で計算しなさい (calculate)。有効数字 3 桁で答えてください。</p>",
      hints: [
        // EN: The method is the same as for a first ionization energy: the convergence limit of a set of lines corresponds to removing the electron from the level where those lines end.
        "解き方は第一イオン化エネルギーのときと同じです。ある線の組の収束限界は、その線が終わる準位から電子を取り除くことに対応します。",
        // EN: λ → f with c = λf, then E = hf, then scale from one atom to one mole and from J to kJ.
        "c = λf で λ → f、次に E = hf、最後に原子 1 個から 1 mol へ、J から kJ へ換算します。",
      ],
      // EN: <p>This convergence limit corresponds to an electron moving between n = 2 and n = ∞.</p><div class="worked__math">λ = 365 nm = 3.65 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (3.65 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 8.219 × 10<sup>14</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (8.219 × 10<sup>14</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 5.449 × 10<sup>−19</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">per mole: 5.449 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 328 <span class="unit">kJ mol-1</span></div><p>This is much less than the first ionization energy of hydrogen (1312 <span class="unit">kJ mol-1</span>). The first ionization energy is for an atom in its ground state, with the electron in n = 1. An electron already in n = 2 is higher in energy, so less energy is needed to remove it. To find a first ionization energy you must use the convergence limit of the lines that end on the ground state.</p>
      solution: "<p>この収束限界は、電子が n = 2 と n = ∞ の間を移ることに対応します。</p><div class=\"worked__math\">λ = 365 nm = 3.65 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (3.65 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 8.219 × 10<sup>14</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (8.219 × 10<sup>14</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 5.449 × 10<sup>−19</sup> J<br>&nbsp;&nbsp;（原子 1 個あたり）</div><div class=\"worked__math\">1 mol あたり：5.449 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 328 <span class=\"unit\">kJ mol-1</span></div><p>これは水素の第一イオン化エネルギー（1312 <span class=\"unit\">kJ mol-1</span>）よりずっと小さい値です。第一イオン化エネルギーは、電子が n = 1 にある基底状態の原子についての値です。すでに n = 2 にある電子はエネルギーが高いので、取り除くのに必要なエネルギーは小さくなります。第一イオン化エネルギーを求めるには、基底状態で終わる線の収束限界を使わなければなりません。</p>",
    },

    // ── s1-3-q040 · short · challenge · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q040": {
      // EN: <p>The table shows the first ionization energies of the period 3 elements.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First ionization energy / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Na</th><th class="num" scope="col">Mg</th><th class="num" scope="col">Al</th><th class="num" scope="col">Si</th><th class="num" scope="col">P</th><th class="num" scope="col">S</th><th class="num" scope="col">Cl</th><th class="num" scope="col">Ar</th></tr></thead><tbody><tr><th scope="row">First IE</th><td class="num">496</td><td class="num">738</td><td class="num">578</td><td class="num">787</td><td class="num">1012</td><td class="num">1000</td><td class="num">1251</td><td class="num">1520</td></tr></tbody></table></div><p>The values do not rise steadily. Use the data to explain how the two decreases are evidence that the third main energy level is divided into sublevels.</p>
      stem: "<p>表は、第 3 周期の元素の第一イオン化エネルギーを示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>第一イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">Na</th><th class=\"num\" scope=\"col\">Mg</th><th class=\"num\" scope=\"col\">Al</th><th class=\"num\" scope=\"col\">Si</th><th class=\"num\" scope=\"col\">P</th><th class=\"num\" scope=\"col\">S</th><th class=\"num\" scope=\"col\">Cl</th><th class=\"num\" scope=\"col\">Ar</th></tr></thead><tbody><tr><th scope=\"row\">第一 IE</th><td class=\"num\">496</td><td class=\"num\">738</td><td class=\"num\">578</td><td class=\"num\">787</td><td class=\"num\">1012</td><td class=\"num\">1000</td><td class=\"num\">1251</td><td class=\"num\">1520</td></tr></tbody></table></div><p>値は一様には大きくなっていません。このデータを使って、2 か所の減少が、第 3 主エネルギー準位が副準位 (sublevels) に分かれていることの証拠になる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Find the two places where the value goes down, not up.
        "値が大きくならずに、小さくなっているところを 2 か所見つけましょう。",
        // EN: For each one, write the configurations of the two elements and ask which electron is removed.
        "それぞれについて、2 つの元素の電子配置を書き、どの電子が取り除かれるかを考えましょう。",
        // EN: Finish by saying what the pattern would look like if there were no sublevels.
        "最後に、副準位がなかったらどんな傾向になるかを書きましょう。",
      ],
      // EN: <p>If all the n = 3 electrons had the same energy, the first ionization energy would rise steadily across the period as the nuclear charge increases. It does not.</p><p>The value falls from Mg (738) to Al (578). In Mg the electron is removed from the 3s sublevel, but in Al it is removed from the 3p sublevel. The 3p sublevel is higher in energy than 3s, so the electron is easier to remove. This shows that n = 3 contains sublevels of different energy.</p><p>The value falls from P (1012) to S (1000). In P each 3p orbital holds one electron. In S the electron is removed from a 3p orbital that holds two electrons. Repulsion between the paired electrons makes it easier to remove. This shows that the 3p sublevel is made of orbitals that fill singly before they pair.</p>
      answer: "<p>n = 3 の電子がすべて同じエネルギーなら、周期を左から右へ進んで核電荷が大きくなるにつれて、第一イオン化エネルギーは一様に大きくなるはずです。実際はそうなっていません。</p><p>値は Mg（738）から Al（578）で小さくなります。Mg では 3s 副準位から、Al では 3p 副準位から電子が取り除かれます。3p 副準位は 3s よりエネルギーが高いので、電子は取り除きやすくなります。このことから、n = 3 にはエネルギーの異なる副準位があることがわかります。</p><p>値は P（1012）から S（1000）で小さくなります。P では、3p 軌道のそれぞれに電子が 1 個ずつ入っています。S では、電子が 2 個入った 3p 軌道から電子が取り除かれます。対になった電子の間の反発により、電子は取り除きやすくなります。このことから、3p 副準位は軌道でできていて、電子はまず 1 個ずつ入ってから対になることがわかります。</p>",
      markscheme: [
        // EN: Mg to Al decrease: the electron is removed from the 3p sublevel in Al but from 3s in Mg, and 3p is higher in energy than 3s (so n = 3 is split into sublevels of different energy).
        "Mg から Al での減少：電子は Al では 3p 副準位、Mg では 3s から取り除かれ、3p は 3s よりエネルギーが高い（つまり n = 3 はエネルギーの異なる副準位に分かれている）。",
        // EN: P to S decrease: the electron in S is removed from a doubly occupied 3p orbital, and repulsion between the paired electrons makes it easier to remove (in P the 3p orbitals are singly occupied).
        "P から S での減少：S では電子が 2 個入った 3p 軌道から電子が取り除かれ、対になった電子の間の反発で取り除きやすくなる（P では 3p 軌道に電子が 1 個ずつ入っている）。",
        // EN: Link to evidence: with a single undivided energy level the ionization energy would increase steadily with nuclear charge / the decreases come after the 3s sublevel is full and after each 3p orbital holds one electron, which matches the s and p sublevels.
        "証拠との結びつき：エネルギー準位が 1 つだけで、副準位に分かれていないなら、イオン化エネルギーは核電荷とともに一様に大きくなるはずである / 減少は、3s 副準位が満たされた後と、3p 軌道のそれぞれに電子が 1 個入った後に起こり、s 副準位と p 副準位に合う。",
      ],
    },

    // ── s1-3-q041 · numeric · foundation · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q041": {
      // EN: <p>The table shows the first four successive ionization energies of an element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">590</td><td class="num">1145</td><td class="num">4912</td><td class="num">6491</td></tr></tbody></table></div><p>In which group of the periodic table is the element? Type the group number.</p>
      stem: "<p>表は、ある元素の 1 番目から 4 番目までの逐次イオン化エネルギー (successive ionization energies) を示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1 番目</th><th class=\"num\" scope=\"col\">2 番目</th><th class=\"num\" scope=\"col\">3 番目</th><th class=\"num\" scope=\"col\">4 番目</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">590</td><td class=\"num\">1145</td><td class=\"num\">4912</td><td class=\"num\">6491</td></tr></tbody></table></div><p>この元素は周期表の何族ですか。族の番号を入力してください。</p>",
      hints: [
        // EN: Look for the place where the ionization energy suddenly becomes several times larger.
        "イオン化エネルギーが急に何倍にも大きくなるところを探しましょう。",
        // EN: The number of electrons removed <em>before</em> the large jump is the number of outer electrons.
        "大きな跳ね上がりの<em>前</em>に取り除かれた電子の数が、最外殻の電子の数です。",
      ],
      // EN: <p>Compare each value with the one before it.</p><div class="worked__math">1st → 2nd: 590 → 1145<br>&nbsp;&nbsp;(about 2 times)</div><div class="worked__math">2nd → 3rd: 1145 → 4912<br>&nbsp;&nbsp;(about 4 times: the large jump)</div><div class="worked__math">3rd → 4th: 4912 → 6491<br>&nbsp;&nbsp;(about 1.3 times)</div><p>Two electrons are removed before the large jump, so the atom has two outer electrons. The third electron comes from a main energy level closer to the nucleus. The element is in <strong>group 2</strong>. (These are the values for calcium.)</p>
      solution: "<p>それぞれの値を、1 つ前の値とくらべます。</p><div class=\"worked__math\">1 番目 → 2 番目: 590 → 1145<br>&nbsp;&nbsp;（約 2 倍）</div><div class=\"worked__math\">2 番目 → 3 番目: 1145 → 4912<br>&nbsp;&nbsp;（約 4 倍：大きな跳ね上がり）</div><div class=\"worked__math\">3 番目 → 4 番目: 4912 → 6491<br>&nbsp;&nbsp;（約 1.3 倍）</div><p>大きな跳ね上がりの前に電子が 2 個取り除かれているので、この原子の最外殻の電子は 2 個です。3 個目の電子は、原子核により近い主エネルギー準位から取り除かれます。この元素は <strong>2 族</strong>です。（これはカルシウムの値です。）</p>",
    },

    // ── s1-3-q042 · mcq · exam · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q042": {
      // EN: <p>The table shows the first six successive ionization energies of an element in period 3.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">787</td><td class="num">1577</td><td class="num">3232</td><td class="num">4356</td><td class="num">16 091</td><td class="num">19 805</td></tr></tbody></table></div><p>Which element is it?</p>
      stem: "<p>表は、第 3 周期のある元素の 1 番目から 6 番目までの逐次イオン化エネルギー (successive ionization energies) を示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1 番目</th><th class=\"num\" scope=\"col\">2 番目</th><th class=\"num\" scope=\"col\">3 番目</th><th class=\"num\" scope=\"col\">4 番目</th><th class=\"num\" scope=\"col\">5 番目</th><th class=\"num\" scope=\"col\">6 番目</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">787</td><td class=\"num\">1577</td><td class=\"num\">3232</td><td class=\"num\">4356</td><td class=\"num\">16 091</td><td class=\"num\">19 805</td></tr></tbody></table></div><p>この元素はどれですか。</p>",
      options: [
        // EN: Aluminium
        "アルミニウム",
        // EN: Silicon
        "ケイ素",
        // EN: Phosphorus
        "リン",
        // EN: Sulfur
        "硫黄",
      ],
      hints: [
        // EN: Find the largest jump between two neighbouring values.
        "となり合う 2 つの値の間で、最も大きく跳ね上がるところを見つけましょう。",
        // EN: Count the electrons removed before that jump. That is the number of outer electrons.
        "その跳ね上がりの前に取り除かれた電子を数えます。それが最外殻の電子の数です。",
      ],
      // EN: <p>The values rise gradually up to the 4th (4356), then jump to 16 091 for the 5th. That is about 3.7 times larger. Four electrons are removed before the jump, so the atom has four outer electrons and is in group 14. The group 14 element in period 3 is <strong>silicon</strong>, <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span>. The 5th electron has to come from the n = 2 level.</p>
      solution: "<p>値は 4 番目（4356）まではゆるやかに大きくなり、5 番目で 16 091 に跳ね上がります。約 3.7 倍です。跳ね上がりの前に電子が 4 個取り除かれているので、この原子の最外殻の電子は 4 個で、14 族です。第 3 周期の 14 族元素は<strong>ケイ素</strong> <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span> です。5 個目の電子は n = 2 の準位から取り除かれます。</p>",
      misconception: {
        // EN (option A): Aluminium is in group 13, so its large jump comes after the 3rd electron. Here the 4th value (4356) is not much larger than the 3rd (3232).
        "0": "アルミニウムは 13 族なので、大きな跳ね上がりは 3 個目の電子の後にきます。この表では、4 番目の値（4356）は 3 番目の値（3232）とくらべてそれほど大きくありません。",
        // EN (option C): This counts the electron <em>after</em> the jump as an outer electron. The 5th electron is the first one taken from the inner level. Phosphorus would have its large jump after the 5th electron.
        "2": "これは、跳ね上がりの<em>後</em>の電子を最外殻の電子として数えています。5 個目の電子は、内側の準位から取り除かれる最初の電子です。リンなら、大きな跳ね上がりは 5 個目の電子の後にきます。",
        // EN (option D): Sulfur has six outer electrons, so all six of these values would rise gradually with no large jump.
        "3": "硫黄の最外殻の電子は 6 個なので、この 6 つの値はすべてゆるやかに大きくなり、大きな跳ね上がりはないはずです。",
      },
    },

    // ── s1-3-q043 · mcq · challenge · AHL · Structure 1.3.7 · 2 marks
    "s1-3-q043": {
      // EN: <p>The table shows successive ionization energies of two elements, X and Y. Both are in period 3.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th><th class="num" scope="col">7th</th><th class="num" scope="col">8th</th></tr></thead><tbody><tr><th scope="row">X</th><td class="num">738</td><td class="num">1451</td><td class="num">7733</td><td class="num">10 543</td><td class="num">13 630</td><td class="num">18 020</td><td class="num">21 711</td><td class="num">25 661</td></tr><tr><th scope="row">Y</th><td class="num">1251</td><td class="num">2298</td><td class="num">3822</td><td class="num">5159</td><td class="num">6542</td><td class="num">9362</td><td class="num">11 018</td><td class="num">33 604</td></tr></tbody></table></div><p>X and Y form an ionic compound. What is its formula?</p>
      stem: "<p>表は、2 つの元素 X と Y の逐次イオン化エネルギーを示しています。どちらも第 3 周期の元素です。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1 番目</th><th class=\"num\" scope=\"col\">2 番目</th><th class=\"num\" scope=\"col\">3 番目</th><th class=\"num\" scope=\"col\">4 番目</th><th class=\"num\" scope=\"col\">5 番目</th><th class=\"num\" scope=\"col\">6 番目</th><th class=\"num\" scope=\"col\">7 番目</th><th class=\"num\" scope=\"col\">8 番目</th></tr></thead><tbody><tr><th scope=\"row\">X</th><td class=\"num\">738</td><td class=\"num\">1451</td><td class=\"num\">7733</td><td class=\"num\">10 543</td><td class=\"num\">13 630</td><td class=\"num\">18 020</td><td class=\"num\">21 711</td><td class=\"num\">25 661</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">1251</td><td class=\"num\">2298</td><td class=\"num\">3822</td><td class=\"num\">5159</td><td class=\"num\">6542</td><td class=\"num\">9362</td><td class=\"num\">11 018</td><td class=\"num\">33 604</td></tr></tbody></table></div><p>X と Y はイオン化合物をつくります。その化学式はどれですか。</p>",
      options: [
        // EN: XY
        "XY",
        // EN: XY<sub>2</sub>
        "XY<sub>2</sub>",
        // EN: X<sub>2</sub>Y
        "X<sub>2</sub>Y",
        // EN: X<sub>2</sub>Y<sub>7</sub>
        "X<sub>2</sub>Y<sub>7</sub>",
      ],
      hints: [
        // EN: Find the large jump for each element to get its number of outer electrons.
        "元素ごとに大きな跳ね上がりを見つけて、最外殻の電子の数を求めます。",
        // EN: X is a metal and Y is a non-metal. What charge does each ion have?
        "X は金属、Y は非金属です。それぞれのイオンの電荷はいくつですか。",
        // EN: Balance the charges.
        "電荷をつり合わせます。",
      ],
      // EN: <p><strong>X:</strong> the large jump is between the 2nd (1451) and 3rd (7733) values. X has two outer electrons, so it is in group 2 and forms X<sup>2+</sup>.</p><p><strong>Y:</strong> the values rise gradually until the large jump between the 7th (11 018) and 8th (33 604). Y has seven outer electrons, so it is in group 17 and gains one electron to form Y<sup>−</sup>.</p><p>One X<sup>2+</sup> ion needs two Y<sup>−</sup> ions, so the formula is XY<sub>2</sub>. (X is magnesium and Y is chlorine: <span class="chem">MgCl2</span>.)</p>
      solution: "<p><strong>X：</strong>大きな跳ね上がりは、2 番目（1451）と 3 番目（7733）の値の間にあります。X の最外殻の電子は 2 個なので、2 族の元素で、X<sup>2+</sup> になります。</p><p><strong>Y：</strong>値はゆるやかに大きくなり、7 番目（11 018）と 8 番目（33 604）の間で大きく跳ね上がります。Y の最外殻の電子は 7 個なので、17 族の元素で、電子を 1 個受け取って Y<sup>−</sup> になります。</p><p>X<sup>2+</sup> イオン 1 個に対して Y<sup>−</sup> イオンが 2 個必要なので、化学式は XY<sub>2</sub> です。（X はマグネシウム、Y は塩素で、<span class=\"chem\">MgCl2</span> です。）</p>",
      misconception: {
        // EN (option A): A 1 : 1 formula needs charges of equal size. X has two outer electrons and forms a 2+ ion. Y has seven outer electrons and gains one electron to form a 1− ion.
        "0": "1 : 1 の化学式になるのは、電荷の大きさが等しいときです。X の最外殻の電子は 2 個で、2+ のイオンになります。Y の最外殻の電子は 7 個で、電子を 1 個受け取って 1− のイオンになります。",
        // EN (option C): The ratio is the wrong way round. X forms X<sup>2+</sup> and Y forms Y<sup>−</sup>, so two Y ions are needed for each X ion.
        "2": "比が逆です。X は X<sup>2+</sup>、Y は Y<sup>−</sup> になるので、X のイオン 1 個に対して Y のイオンが 2 個必要です。",
        // EN (option D): This uses the numbers of outer electrons (2 and 7) as if they were the ion charges. Y does not lose seven electrons. It gains one to complete its outer level.
        "3": "これは、最外殻の電子の数（2 と 7）をそのままイオンの電荷として使っています。Y は電子を 7 個失うのではありません。1 個受け取って、最外殻を満たします。",
      },
    },

    // ── s1-3-q044 · short · exam · AHL · Structure 1.3.7 · 3 marks
    "s1-3-q044": {
      // EN: <p>The first four successive ionization energies of aluminium (Z = 13) are 578, 1817, 2745 and 11 577 <span class="unit">kJ mol-1</span>.</p><p>(a) Explain why the second ionization energy is greater than the first. [1]</p><p>(b) Explain why the fourth ionization energy is very much greater than the third. [2]</p>
      stem: "<p>アルミニウム（Z = 13）の 1 番目から 4 番目までの逐次イオン化エネルギーは、578、1817、2745、11 577 <span class=\"unit\">kJ mol-1</span> です。</p><p>(a) 第二イオン化エネルギーが第一より大きい理由を説明しなさい (explain)。[1]</p><p>(b) 第四イオン化エネルギーが第三よりはるかに大きい理由を説明しなさい (explain)。[2]</p>",
      hints: [
        // EN: For (a): after one electron has gone, what is the particle that the next electron leaves?
        "(a)：電子が 1 個取り除かれた後、次の電子はどんな粒子から出ていきますか。",
        // EN: For (b): write the configuration of aluminium. Where does the fourth electron come from?
        "(b)：アルミニウムの電子配置を書きましょう。4 個目の電子はどこの電子ですか。",
      ],
      // EN: <p>(a) The second electron is removed from a positive ion, not from a neutral atom. The same nuclear charge now attracts fewer electrons (there is less repulsion between the remaining electrons), so each electron is held more strongly.</p><p>(b) Aluminium is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>. The first three electrons come from the third main energy level. The fourth electron comes from the second main energy level (2p), which is closer to the nucleus. It is shielded by fewer inner electrons, so it is attracted much more strongly and needs much more energy to remove.</p>
      answer: "<p>(a) 2 個目の電子は、中性の原子ではなく、陽イオンから取り除かれます。同じ核電荷が、より少ない電子を引きつけることになります（残った電子の間の反発も小さくなります）。そのため、どの電子もより強く引きつけられます。</p><p>(b) アルミニウムは <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup></span> です。はじめの 3 個の電子は、第 3 主エネルギー準位の電子です。4 個目の電子は、原子核により近い第 2 主エネルギー準位（2p）の電子です。この電子を遮蔽する内側の電子は少ないので、ずっと強く引きつけられ、取り除くのにずっと大きなエネルギーが必要です。</p>",
      markscheme: [
        // EN: (a) The electron is removed from a positive ion / the same nuclear charge attracts fewer electrons / less electron–electron repulsion, so the attraction is stronger.
        "(a) 電子は陽イオンから取り除かれる / 同じ核電荷がより少ない電子を引きつける / 電子どうしの反発が小さくなる。そのため引力が強くなる。",
        // EN: (b) The fourth electron is removed from a main energy level closer to the nucleus / from n = 2 (2p), not n = 3.
        "(b) 4 個目の電子は、原子核により近い主エネルギー準位 / n = 3 ではなく n = 2（2p）から取り除かれる。",
        // EN: (b) It is less shielded (fewer inner electrons) and so much more strongly attracted to the nucleus.
        "(b) 遮蔽が小さく（内側の電子が少なく）、原子核にずっと強く引きつけられる。",
      ],
    },

    // ── s1-3-q045 · mcq · challenge · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q045": {
      // EN: <p>The graph shows log<sub>10</sub> of the first eight successive ionization energies of an element.</p><p><svg viewBox="0 0 310 220" width="310" height="220" role="img" aria-label="Graph of log to base 10 of ionization energy against the number of the electron removed, from 1 to 8. The points rise gently from about 3.0 for the first electron to about 3.8 for the fifth, jump sharply to about 4.3 for the sixth, then rise gently to about 4.5 for the eighth."><path d="M52 16V176H300" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="47" x2="300" y1="158.2222222222222" y2="158.2222222222222" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="162.2222222222222" text-anchor="end" font-size="12" fill="currentColor">3.0</text><line x1="47" x2="300" y1="113.77777777777776" y2="113.77777777777776" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="117.77777777777776" text-anchor="end" font-size="12" fill="currentColor">3.5</text><line x1="47" x2="300" y1="69.3333333333333" y2="69.3333333333333" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="73.3333333333333" text-anchor="end" font-size="12" fill="currentColor">4.0</text><line x1="47" x2="300" y1="24.888888888888886" y2="24.888888888888886" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="28.888888888888886" text-anchor="end" font-size="12" fill="currentColor">4.5</text><line x1="66" x2="66" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="66" y="195" text-anchor="middle" font-size="12" fill="currentColor">1</text><line x1="97.42857142857143" x2="97.42857142857143" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="97.42857142857143" y="195" text-anchor="middle" font-size="12" fill="currentColor">2</text><line x1="128.85714285714286" x2="128.85714285714286" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="128.85714285714286" y="195" text-anchor="middle" font-size="12" fill="currentColor">3</text><line x1="160.28571428571428" x2="160.28571428571428" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="160.28571428571428" y="195" text-anchor="middle" font-size="12" fill="currentColor">4</text><line x1="191.71428571428572" x2="191.71428571428572" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="191.71428571428572" y="195" text-anchor="middle" font-size="12" fill="currentColor">5</text><line x1="223.14285714285714" x2="223.14285714285714" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="223.14285714285714" y="195" text-anchor="middle" font-size="12" fill="currentColor">6</text><line x1="254.57142857142858" x2="254.57142857142858" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="254.57142857142858" y="195" text-anchor="middle" font-size="12" fill="currentColor">7</text><line x1="286" x2="286" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="286" y="195" text-anchor="middle" font-size="12" fill="currentColor">8</text><path d="M66.0 157.8L97.4 133.3L128.9 116.9L160.3 96.4L191.7 87.3L223.1 40.2L254.6 33.3L286.0 27.1" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="66.0" cy="157.8" r="4" fill="currentColor"/><circle cx="97.4" cy="133.3" r="4" fill="currentColor"/><circle cx="128.9" cy="116.9" r="4" fill="currentColor"/><circle cx="160.3" cy="96.4" r="4" fill="currentColor"/><circle cx="191.7" cy="87.3" r="4" fill="currentColor"/><circle cx="223.1" cy="40.2" r="4" fill="currentColor"/><circle cx="254.6" cy="33.3" r="4" fill="currentColor"/><circle cx="286.0" cy="27.1" r="4" fill="currentColor"/><text x="176" y="214" text-anchor="middle" font-size="12" fill="currentColor">number of the electron removed</text><text transform="translate(14 96) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">log₁₀(IE / kJ mol⁻¹)</text></svg></p><p>In which group of the periodic table is the element?</p>
      stem: "<p>グラフは、ある元素の 1 番目から 8 番目までの逐次イオン化エネルギーの log<sub>10</sub> を示しています。</p><p><svg viewBox=\"0 0 310 220\" width=\"310\" height=\"220\" role=\"img\" aria-label=\"取り除く電子の番号（1 から 8）に対して、イオン化エネルギーの常用対数（底が 10 の対数）をとったグラフ。点は、1 個目の電子の約 3.0 から 5 個目の約 3.8 までゆるやかに上がり、6 個目で約 4.3 に急に跳ね上がる。その後、8 個目の約 4.5 までゆるやかに上がる。\"><path d=\"M52 16V176H300\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"47\" x2=\"300\" y1=\"158.2222222222222\" y2=\"158.2222222222222\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"162.2222222222222\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">3.0</text><line x1=\"47\" x2=\"300\" y1=\"113.77777777777776\" y2=\"113.77777777777776\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"117.77777777777776\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">3.5</text><line x1=\"47\" x2=\"300\" y1=\"69.3333333333333\" y2=\"69.3333333333333\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"73.3333333333333\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">4.0</text><line x1=\"47\" x2=\"300\" y1=\"24.888888888888886\" y2=\"24.888888888888886\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"28.888888888888886\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">4.5</text><line x1=\"66\" x2=\"66\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"66\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">1</text><line x1=\"97.42857142857143\" x2=\"97.42857142857143\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"97.42857142857143\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">2</text><line x1=\"128.85714285714286\" x2=\"128.85714285714286\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"128.85714285714286\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">3</text><line x1=\"160.28571428571428\" x2=\"160.28571428571428\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"160.28571428571428\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">4</text><line x1=\"191.71428571428572\" x2=\"191.71428571428572\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"191.71428571428572\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">5</text><line x1=\"223.14285714285714\" x2=\"223.14285714285714\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"223.14285714285714\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">6</text><line x1=\"254.57142857142858\" x2=\"254.57142857142858\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"254.57142857142858\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">7</text><line x1=\"286\" x2=\"286\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"286\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">8</text><path d=\"M66.0 157.8L97.4 133.3L128.9 116.9L160.3 96.4L191.7 87.3L223.1 40.2L254.6 33.3L286.0 27.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><circle cx=\"66.0\" cy=\"157.8\" r=\"4\" fill=\"currentColor\"/><circle cx=\"97.4\" cy=\"133.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"128.9\" cy=\"116.9\" r=\"4\" fill=\"currentColor\"/><circle cx=\"160.3\" cy=\"96.4\" r=\"4\" fill=\"currentColor\"/><circle cx=\"191.7\" cy=\"87.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"223.1\" cy=\"40.2\" r=\"4\" fill=\"currentColor\"/><circle cx=\"254.6\" cy=\"33.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"286.0\" cy=\"27.1\" r=\"4\" fill=\"currentColor\"/><text x=\"176\" y=\"214\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">取り除く電子の番号</text><text transform=\"translate(14 96) rotate(-90)\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">log₁₀(IE / kJ mol⁻¹)</text></svg></p><p>この元素は周期表の何族ですか。</p>",
      options: [
        // EN: Group 13
        "13 族",
        // EN: Group 14
        "14 族",
        // EN: Group 15
        "15 族",
        // EN: Group 16
        "16 族",
      ],
      hints: [
        // EN: Find the one place where the graph steps up sharply.
        "グラフが急に上がるところを 1 か所見つけましょう。",
        // EN: How many points lie before the step? That is the number of outer electrons.
        "その段差の前に点はいくつありますか。それが最外殻の電子の数です。",
        // EN: For groups 13 to 18, group number = 10 + number of outer electrons.
        "13〜18 族では、族の番号 = 10 + 最外殻の電子の数 です。",
      ],
      // EN: <p>The first five points rise gently. Between the 5th and 6th points the graph steps up sharply. On a log scale, a step of about 0.5 means the value becomes about 3 times larger. So five electrons are removed before the large jump: the atom has five outer electrons and the element is in <strong>group 15</strong>. (The data are for phosphorus, <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>.)</p><p>A log scale is used because successive ionization energies cover a very wide range. On an ordinary scale the first few points would be squashed together at the bottom of the graph.</p>
      solution: "<p>はじめの 5 つの点はゆるやかに上がります。5 番目と 6 番目の点の間で、グラフは急に上がります。対数目盛で約 0.5 上がると、値は約 3 倍になります。つまり、大きな跳ね上がりの前に電子が 5 個取り除かれています。この原子の最外殻の電子は 5 個で、元素は <strong>15 族</strong>です。（このデータはリン <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span> のものです。）</p><p>対数目盛を使うのは、逐次イオン化エネルギーの値の範囲がとても広いからです。ふつうの目盛では、はじめのいくつかの点がグラフの下のほうに押しつぶされてしまいます。</p>",
      misconception: {
        // EN (option A): A group 13 element has three outer electrons, so the large jump would come between the 3rd and 4th points. Here those points rise gently.
        "0": "13 族の元素の最外殻の電子は 3 個なので、大きな跳ね上がりは 3 番目と 4 番目の点の間にくるはずです。このグラフでは、その 2 点はゆるやかに上がっています。",
        // EN (option B): A group 14 element has four outer electrons, so the large jump would come between the 4th and 5th points. Count the points before the jump again.
        "1": "14 族の元素の最外殻の電子は 4 個なので、大きな跳ね上がりは 4 番目と 5 番目の点の間にくるはずです。跳ね上がりの前の点をもう一度数えましょう。",
        // EN (option D): This counts the 6th electron as an outer electron. The 6th electron is the first one <em>after</em> the jump, so it comes from the inner level.
        "3": "これは、6 個目の電子を最外殻の電子として数えています。6 個目の電子は、跳ね上がりの<em>後</em>の最初の電子なので、内側の準位の電子です。",
      },
    },

    // ── s1-3-q046 · mcq · challenge · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q046": {
      // EN: <p>An element has twelve successive ionization energies. There are only two large jumps. Some of the values are shown.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">10th</th><th class="num" scope="col">11th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">1451</td><td class="num">7733</td><td class="num">35 458</td><td class="num">169 988</td></tr></tbody></table></div><p>Which arrangement of electrons in main energy levels fits these data?</p>
      stem: "<p>ある元素には、逐次イオン化エネルギーが 12 個あります。大きな跳ね上がりは 2 か所だけです。値の一部を表に示します。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">2 番目</th><th class=\"num\" scope=\"col\">3 番目</th><th class=\"num\" scope=\"col\">10 番目</th><th class=\"num\" scope=\"col\">11 番目</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">1451</td><td class=\"num\">7733</td><td class=\"num\">35 458</td><td class=\"num\">169 988</td></tr></tbody></table></div><p>主エネルギー準位への電子の入り方のうち、このデータに合うものはどれですか。</p>",
      options: [
        // EN: n = 1: 2 electrons. n = 2: 8 electrons. n = 3: 2 electrons.
        "n = 1：電子 2 個。n = 2：電子 8 個。n = 3：電子 2 個。",
        // EN: n = 1: 2 electrons. n = 2: 2 electrons. n = 3: 8 electrons.
        "n = 1：電子 2 個。n = 2：電子 2 個。n = 3：電子 8 個。",
        // EN: n = 1: 10 electrons. n = 2: 2 electrons.
        "n = 1：電子 10 個。n = 2：電子 2 個。",
        // EN: n = 1: 2 electrons. n = 2: 10 electrons.
        "n = 1：電子 2 個。n = 2：電子 10 個。",
      ],
      hints: [
        // EN: Twelve ionization energies means twelve electrons.
        "イオン化エネルギーが 12 個あるということは、電子が 12 個あるということです。",
        // EN: Each large jump marks the start of a new main energy level, closer to the nucleus.
        "大きな跳ね上がりは、原子核により近い新しい主エネルギー準位の始まりを示します。",
        // EN: The first electrons removed are the outermost ones.
        "最初に取り除かれるのは、いちばん外側の電子です。",
      ],
      // EN: <p>Twelve ionization energies means the atom has twelve electrons. The jumps split them into three groups:</p><div class="worked__math">electrons 1 and 2: easiest to remove → outer level (n&nbsp;=&nbsp;3)</div><div class="worked__math">large jump (1451 → 7733)</div><div class="worked__math">electrons 3 to 10: eight electrons → next level in (n&nbsp;=&nbsp;2)</div><div class="worked__math">large jump (35 458 → 169 988)</div><div class="worked__math">electrons 11 and 12: hardest to remove → closest to the nucleus (n&nbsp;=&nbsp;1)</div><p>So the arrangement is 2, 8, 2: the element is magnesium, <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup></span>, in group 2 and period 3.</p>
      solution: "<p>イオン化エネルギーが 12 個あるので、この原子の電子は 12 個です。跳ね上がりによって、電子は 3 つの組に分かれます。</p><div class=\"worked__math\">電子 1 と 2：最も取り除きやすい → 最外殻の準位 (n&nbsp;=&nbsp;3)</div><div class=\"worked__math\">大きな跳ね上がり (1451 → 7733)</div><div class=\"worked__math\">電子 3〜10：8 個の電子 → 1 つ内側の準位 (n&nbsp;=&nbsp;2)</div><div class=\"worked__math\">大きな跳ね上がり (35 458 → 169 988)</div><div class=\"worked__math\">電子 11 と 12：最も取り除きにくい → 原子核に最も近い準位 (n&nbsp;=&nbsp;1)</div><p>したがって、電子の入り方は 2、8、2 です。この元素はマグネシウム <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup></span> で、2 族、第 3 周期の元素です。</p>",
      misconception: {
        // EN (option B): The right numbers in the wrong order. The first electrons to be removed are the outer ones, so the group of 2 before the first jump is in the highest level, not the middle one.
        "1": "数は合っていますが、順番が違います。最初に取り除かれるのは最外殻の電子です。したがって、最初の跳ね上がりの前の 2 個の組は、真ん中の準位ではなく、最も高い準位にあります。",
        // EN (option C): This uses only the first jump. The second jump, between the 10th and 11th values, shows that the ten inner electrons are in two different main energy levels.
        "2": "これは 1 つ目の跳ね上がりしか使っていません。10 番目と 11 番目の値の間にある 2 つ目の跳ね上がりから、内側の 10 個の電子が 2 つの異なる主エネルギー準位にあることがわかります。",
        // EN (option D): This uses only the second jump. The first jump, between the 2nd and 3rd values, shows that the first two electrons are in a different main energy level from the next eight.
        "3": "これは 2 つ目の跳ね上がりしか使っていません。2 番目と 3 番目の値の間にある 1 つ目の跳ね上がりから、はじめの 2 個の電子は、次の 8 個とは別の主エネルギー準位にあることがわかります。",
      },
    },

    // ── s1-3-q047 · mcq · exam · SL · Structure 1.3.1 · 1 mark
    "s1-3-q047": {
      // EN: <p>Radiation X has a longer wavelength than radiation Y. Which row compares X with Y?</p>
      stem: "<p>電磁波 X は、電磁波 Y より波長が長いとします。X を Y とくらべた文として正しいものはどれですか。</p>",
      options: [
        // EN: X has the higher frequency and the higher energy per photon.
        "X のほうが振動数が大きく、光子 1 個あたりのエネルギーも大きい。",
        // EN: X has the higher frequency and the lower energy per photon.
        "X のほうが振動数が大きく、光子 1 個あたりのエネルギーは小さい。",
        // EN: X has the lower frequency and the higher energy per photon.
        "X のほうが振動数が小さく、光子 1 個あたりのエネルギーは大きい。",
        // EN: X has the lower frequency and the lower energy per photon.
        "X のほうが振動数が小さく、光子 1 個あたりのエネルギーも小さい。",
      ],
      hints: [
        // EN: Wavelength and frequency go in opposite directions.
        "波長と振動数は、逆向きに変化します。",
        // EN: Energy per photon goes in the same direction as frequency.
        "光子 1 個あたりのエネルギーは、振動数と同じ向きに変化します。",
      ],
      // EN: <p>A longer wavelength means a lower frequency. A lower frequency means less energy per photon. So X has the lower frequency and the lower energy.</p>
      solution: "<p>波長が長いほど、振動数は小さくなります。振動数が小さいほど、光子 1 個あたりのエネルギーは小さくなります。したがって、X のほうが振動数もエネルギーも小さくなります。</p>",
      misconception: {
        // EN (option A): This is the wrong way round. Longer waves mean fewer waves pass each second, so the frequency is lower.
        "0": "逆です。波長が長いと、1 秒間に通過する波の数が少なくなるので、振動数は小さくなります。",
        // EN (option B): Frequency and energy always change in the same direction. A higher frequency cannot go with a lower energy.
        "1": "振動数とエネルギーは、いつも同じ向きに変化します。振動数が大きいのにエネルギーが小さい、ということはありません。",
        // EN (option C): Frequency and energy always change in the same direction. A lower frequency means less energy per photon, not more.
        "2": "振動数とエネルギーは、いつも同じ向きに変化します。振動数が小さければ、光子 1 個あたりのエネルギーは大きくなるのではなく、小さくなります。",
      },
    },

    // ── s1-3-q048 · mcq · exam · SL · Structure 1.3.1 · 1 mark
    "s1-3-q048": {
      // EN: <p>Three elements each give a strong line in the visible part of their emission spectrum: lithium at 671 nm (red), sodium at 589 nm (orange-yellow) and barium at 554 nm (green).</p><p>Which statement is correct?</p>
      stem: "<p>3 つの元素の発光スペクトルには、それぞれ可視光の領域に強い線があります。リチウムは 671 nm（赤）、ナトリウム (Na) は 589 nm（橙黄色）、バリウムは 554 nm（緑）です。</p><p>正しい文はどれですか。</p>",
      options: [
        // EN: The lithium line comes from the largest fall in energy by an electron.
        "リチウムの線は、電子のエネルギーが最も大きく下がるときにできる。",
        // EN: The barium line comes from the largest fall in energy by an electron.
        "バリウムの線は、電子のエネルギーが最も大きく下がるときにできる。",
        // EN: All three lines come from falls of the same size, because all light travels at the same speed.
        "光はすべて同じ速さで進むので、3 本の線はどれも、電子のエネルギーが同じだけ下がるときにできる。",
        // EN: The sodium line has the lowest frequency.
        "ナトリウムの線の振動数が最も小さい。",
      ],
      hints: [
        // EN: The energy of the photon equals the energy the electron loses when it falls.
        "光子のエネルギーは、電子が落ちるときに失うエネルギーに等しくなります。",
        // EN: Shortest wavelength = highest frequency = highest energy.
        "波長が最も短い = 振動数が最も大きい = エネルギーが最も大きい。",
      ],
      // EN: <p>The photon carries away the energy that the electron loses. The barium line has the shortest wavelength (554 nm), so it has the highest frequency and the highest photon energy. It comes from the largest fall in energy. The lithium line (671 nm) comes from the smallest.</p>
      solution: "<p>光子は、電子が失ったエネルギーを運び去ります。バリウムの線は波長が最も短い（554 nm）ので、振動数も光子のエネルギーも最大です。この線は、電子のエネルギーが最も大きく下がるときにできます。リチウムの線（671 nm）は、最も小さく下がるときにできます。</p>",
      misconception: {
        // EN (option A): Lithium has the longest wavelength of the three, so its photons have the lowest energy. That means the smallest fall, not the largest.
        "0": "3 つのうち波長が最も長いのはリチウムなので、光子のエネルギーは最も小さくなります。つまり、エネルギーの下がり方は最大ではなく、最小です。",
        // EN (option C): The speed is the same, but the wavelengths are different. A different wavelength means a different frequency and a different photon energy.
        "2": "速さは同じですが、波長が違います。波長が違えば、振動数も光子のエネルギーも違います。",
        // EN (option D): The lowest frequency goes with the longest wavelength. That is the lithium line at 671 nm.
        "3": "振動数が最も小さいのは、波長が最も長い線です。それは 671 nm のリチウムの線です。",
      },
    },

    // ── s1-3-q049 · mcq · foundation · SL · Structure 1.3.3 · 1 mark
    "s1-3-q049": {
      // EN: <p>Which main energy level can hold a maximum of 18 electrons?</p>
      stem: "<p>電子が最大 18 個入る主エネルギー準位はどれですか。</p>",
      options: [
        // EN: n = 2
        "n = 2",
        // EN: n = 3
        "n = 3",
        // EN: n = 4
        "n = 4",
        // EN: n = 9
        "n = 9",
      ],
      hints: [
        // EN: A main energy level n holds at most 2n<sup>2</sup> electrons.
        "主エネルギー準位 n には、最大 2n<sup>2</sup> 個の電子が入ります。",
        // EN: Try n = 1, 2, 3, 4 in turn.
        "n = 1、2、3、4 を順に試しましょう。",
      ],
      // EN: <div class="worked__math">n = 1: 2 × 1 = 2</div><div class="worked__math">n = 2: 2 × 4 = 8</div><div class="worked__math">n = 3: 2 × 9 = 18</div><div class="worked__math">n = 4: 2 × 16 = 32</div><p>The level that holds 18 electrons is <strong>n = 3</strong>.</p>
      solution: "<div class=\"worked__math\">n = 1: 2 × 1 = 2</div><div class=\"worked__math\">n = 2: 2 × 4 = 8</div><div class=\"worked__math\">n = 3: 2 × 9 = 18</div><div class=\"worked__math\">n = 4: 2 × 16 = 32</div><p>電子が 18 個入る準位は <strong>n = 3</strong> です。</p>",
      misconception: {
        // EN (option A): For n = 2 the maximum is 2 × 2<sup>2</sup> = 8 electrons.
        "0": "n = 2 では、最大 2 × 2<sup>2</sup> = 8 個です。",
        // EN (option C): For n = 4 the maximum is 2 × 4<sup>2</sup> = 32 electrons.
        "2": "n = 4 では、最大 2 × 4<sup>2</sup> = 32 個です。",
        // EN (option D): This uses 2 × n = 18. The rule is 2n<sup>2</sup>: square n first, then double.
        "3": "これは 2 × n = 18 としています。正しい式は 2n<sup>2</sup> です。先に n を 2 乗し、それから 2 倍します。",
      },
    },

    // ── s1-3-q050 · mcq · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q050": {
      // EN: <p>What is the total number of electrons needed to fill the first three main energy levels (n = 1, n = 2 and n = 3) completely?</p>
      stem: "<p>はじめの 3 つの主エネルギー準位（n = 1、n = 2、n = 3）を完全に満たすには、電子が全部で何個必要ですか。</p>",
      options: [
        // EN: 12
        "12",
        // EN: 18
        "18",
        // EN: 28
        "28",
        // EN: 36
        "36",
      ],
      hints: [
        // EN: Work out 2n<sup>2</sup> for each of the three levels.
        "3 つの準位それぞれについて 2n<sup>2</sup> を計算します。",
        // EN: Then add the three numbers.
        "次に、3 つの数を足します。",
      ],
      // EN: <div class="worked__math">n = 1: 2 × 1<sup>2</sup> = 2</div><div class="worked__math">n = 2: 2 × 2<sup>2</sup> = 8</div><div class="worked__math">n = 3: 2 × 3<sup>2</sup> = 18</div><div class="worked__math">total = 2 + 8 + 18 = 28 electrons</div>
      solution: "<div class=\"worked__math\">n = 1: 2 × 1<sup>2</sup> = 2</div><div class=\"worked__math\">n = 2: 2 × 2<sup>2</sup> = 8</div><div class=\"worked__math\">n = 3: 2 × 3<sup>2</sup> = 18</div><div class=\"worked__math\">合計 = 2 + 8 + 18 = 28 個</div>",
      misconception: {
        // EN (option A): This adds 2n for each level: 2 + 4 + 6. The rule is 2n<sup>2</sup>.
        "0": "これは準位ごとに 2n を足しています：2 + 4 + 6。正しい式は 2n<sup>2</sup> です。",
        // EN (option B): 18 is the number that n = 3 holds on its own. The question asks for all three levels together.
        "1": "18 は、n = 3 だけに入る数です。問題では、3 つの準位を合わせた数を聞いています。",
        // EN (option D): This is (2 × 3)<sup>2</sup>. Square n first, then double, and do it for each level.
        "3": "これは (2 × 3)<sup>2</sup> です。先に n を 2 乗し、それから 2 倍します。これを準位ごとに計算します。",
      },
    },

    // ── s1-3-q051 · numeric · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q051": {
      // EN: <p>A main energy level can hold a maximum of 50 electrons. What is the value of n for this level?</p>
      stem: "<p>ある主エネルギー準位には、電子が最大 50 個入ります。この準位の n の値はいくつですか。</p>",
      hints: [
        // EN: Use 2n<sup>2</sup> = 50 and work backwards.
        "2n<sup>2</sup> = 50 を使い、逆算します。",
        // EN: Divide by 2 first. Then take the square root.
        "先に 2 で割ります。それから平方根をとります。",
      ],
      // EN: <div class="worked__math">2n<sup>2</sup> = 50</div><div class="worked__math">n<sup>2</sup> = 50 ÷ 2 = 25</div><div class="worked__math">n = 5</div><p>Check: 2 × 5<sup>2</sup> = 2 × 25 = 50.</p>
      solution: "<div class=\"worked__math\">2n<sup>2</sup> = 50</div><div class=\"worked__math\">n<sup>2</sup> = 50 ÷ 2 = 25</div><div class=\"worked__math\">n = 5</div><p>確かめ：2 × 5<sup>2</sup> = 2 × 25 = 50。</p>",
    },

    // ── s1-3-q052 · numeric · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q052": {
      // EN: <p>A zinc atom (Z = 30) has the configuration <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>.</p><p>How many electrons are in its third main energy level (n = 3)?</p>
      stem: "<p>亜鉛原子（Z = 30）の電子配置は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span> です。</p><p>第 3 主エネルギー準位（n = 3）には電子が何個ありますか。</p>",
      hints: [
        // EN: The first number in each term is the main energy level. Find every term that starts with 3.
        "それぞれの項の最初の数字が、主エネルギー準位を表します。3 で始まる項をすべて見つけましょう。",
        // EN: There are three of them: 3s, 3p and 3d.
        "3s、3p、3d の 3 つあります。",
      ],
      // EN: <div class="worked__math">3s<sup>2</sup> + 3p<sup>6</sup> + 3d<sup>10</sup></div><div class="worked__math">2 + 6 + 10 = 18 electrons</div><p>The third main energy level of zinc is full: 2n<sup>2</sup> = 2 × 3<sup>2</sup> = 18. The common slip is to answer 8 by leaving out the 3d electrons, which are written after 4s.</p>
      solution: "<div class=\"worked__math\">3s<sup>2</sup> + 3p<sup>6</sup> + 3d<sup>10</sup></div><div class=\"worked__math\">2 + 6 + 10 = 18 個</div><p>亜鉛の第 3 主エネルギー準位は満たされています：2n<sup>2</sup> = 2 × 3<sup>2</sup> = 18。よくある間違いは、4s の後に書かれている 3d の電子を入れ忘れて、8 と答えることです。</p>",
      // EN: electrons
      unit: "個",
    },

    // ── s1-3-q053 · mcq · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q053": {
      // EN: <p>Which sublevel does <strong>not</strong> exist?</p>
      stem: "<p>存在<strong>しない</strong>副準位はどれですか。</p>",
      options: [
        // EN: 1s
        "1s",
        // EN: 2p
        "2p",
        // EN: 2d
        "2d",
        // EN: 3d
        "3d",
      ],
      hints: [
        // EN: Main energy level n contains n types of sublevel.
        "主エネルギー準位 n には、n 種類の副準位があります。",
        // EN: n = 1 has s only. n = 2 has s and p. n = 3 has s, p and d.
        "n = 1 は s だけ。n = 2 は s と p。n = 3 は s、p、d。",
      ],
      // EN: <p>Main energy level n contains n types of sublevel. The second level has only two: 2s and 2p. The d sublevels start at n = 3, so <strong>2d</strong> does not exist.</p>
      solution: "<p>主エネルギー準位 n には、n 種類の副準位があります。第 2 準位には 2s と 2p の 2 つしかありません。d 副準位は n = 3 から始まるので、<strong>2d</strong> は存在しません。</p>",
      misconception: {
        // EN (option A): Every main energy level has an s sublevel. 1s is the only sublevel in n = 1.
        "0": "どの主エネルギー準位にも s 副準位があります。n = 1 にある副準位は 1s だけです。",
        // EN (option B): The second main energy level has two sublevels: 2s and 2p.
        "1": "第 2 主エネルギー準位には、2s と 2p の 2 つの副準位があります。",
        // EN (option D): The third main energy level has three sublevels: 3s, 3p and 3d.
        "3": "第 3 主エネルギー準位には、3s、3p、3d の 3 つの副準位があります。",
      },
    },

    // ── s1-3-q054 · order · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q054": {
      // EN: <p>Put the four sublevels of the fourth main energy level in order of <strong>increasing energy</strong> (lowest energy first).</p>
      stem: "<p>第 4 主エネルギー準位の 4 つの副準位を、<strong>エネルギーが低い順</strong>に並べてください（エネルギーが最も低いものが先頭）。</p>",
      options: [
        // EN: 4s
        "4s",
        // EN: 4p
        "4p",
        // EN: 4d
        "4d",
        // EN: 4f
        "4f",
      ],
      hints: [
        // EN: Within one main energy level, the sublevels always go in the same order of energy.
        "1 つの主エネルギー準位の中では、副準位のエネルギーの順はいつも同じです。",
        // EN: The order of the letters is s, p, d, f.
        "文字の順は s、p、d、f です。",
      ],
      // EN: <p>Within one main energy level the energy of the sublevels increases in the order s, p, d, f. So the order is 4s, 4p, 4d, 4f.</p>
      solution: "<p>1 つの主エネルギー準位の中では、副準位のエネルギーは s、p、d、f の順に高くなります。したがって、順番は 4s、4p、4d、4f です。</p>",
    },

    // ── s1-3-q055 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q055": {
      // EN: <p>Which statement about the three orbitals in a 2p sublevel is correct?</p>
      stem: "<p>2p 副準位の 3 つの軌道について、正しい文はどれですか。</p>",
      options: [
        // EN: They have the same shape and the same energy, but point along three different axes.
        "形もエネルギーも同じだが、3 つの異なる軸の方向を向いている。",
        // EN: They have three different shapes.
        "形が 3 つとも異なる。",
        // EN: They have three different energies.
        "エネルギーが 3 つとも異なる。",
        // EN: Together they can hold a maximum of three electrons.
        "3 つ合わせて、電子が最大 3 個入る。",
      ],
      hints: [
        // EN: Think of the names p<sub>x</sub>, p<sub>y</sub> and p<sub>z</sub>. What do the letters x, y and z tell you?
        "p<sub>x</sub>、p<sub>y</sub>、p<sub>z</sub> という名前を考えましょう。x、y、z の文字は何を表していますか。",
      ],
      // EN: <p>The three p orbitals in a sublevel are all dumbbell-shaped and have the same energy. They differ only in orientation: they lie along the x, y and z axes, at right angles to each other. Each holds up to two electrons, so the sublevel holds up to six.</p>
      solution: "<p>1 つの副準位にある 3 つの p 軌道は、どれも亜鈴形（ダンベル形）で、エネルギーも同じです。違うのは向きだけで、互いに直角な x 軸、y 軸、z 軸に沿っています。それぞれに電子が最大 2 個入るので、副準位全体では最大 6 個入ります。</p>",
      misconception: {
        // EN (option B): All three p orbitals are dumbbell-shaped. Only their direction in space is different.
        "1": "3 つの p 軌道はどれも亜鈴形（ダンベル形）です。違うのは空間での向きだけです。",
        // EN (option C): Orbitals in the same sublevel have the same energy. That is why Hund’s rule is needed to decide how they fill.
        "2": "同じ副準位の軌道は、エネルギーが同じです。だからこそ、電子の入り方を決めるフントの規則が必要になります。",
        // EN (option D): Each orbital can hold two electrons, so three p orbitals hold up to six.
        "3": "1 つの軌道には電子が 2 個入るので、3 つの p 軌道には最大 6 個入ります。",
      },
    },

    // ── s1-3-q056 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q056": {
      // EN: <p>Which row gives the number of sublevels and the total number of orbitals in the second main energy level (n = 2)?</p>
      stem: "<p>第 2 主エネルギー準位（n = 2）の副準位の数と、軌道の総数を正しく示している組み合わせはどれですか。</p>",
      options: [
        // EN: 2 sublevels and 2 orbitals
        "副準位 2 つ、軌道 2 個",
        // EN: 2 sublevels and 4 orbitals
        "副準位 2 つ、軌道 4 個",
        // EN: 2 sublevels and 8 orbitals
        "副準位 2 つ、軌道 8 個",
        // EN: 3 sublevels and 9 orbitals
        "副準位 3 つ、軌道 9 個",
      ],
      hints: [
        // EN: Name the sublevels in n = 2 first.
        "まず、n = 2 にある副準位の名前を挙げましょう。",
        // EN: An s sublevel has 1 orbital. A p sublevel has 3.
        "s 副準位には軌道が 1 個、p 副準位には 3 個あります。",
      ],
      // EN: <div class="worked__math">sublevels in n&nbsp;=&nbsp;2: 2s and 2p<br>&nbsp;&nbsp;(2 sublevels)</div><div class="worked__math">orbitals: 1 (2s) + 3 (2p) = 4</div><p>Check: 4 orbitals × 2 electrons = 8 electrons, which agrees with 2n<sup>2</sup> = 8.</p>
      solution: "<div class=\"worked__math\">n&nbsp;=&nbsp;2 の副準位：2s と 2p<br>&nbsp;&nbsp;（副準位 2 つ）</div><div class=\"worked__math\">軌道：1 (2s) + 3 (2p) = 4</div><p>確かめ：軌道 4 個 × 電子 2 個 = 電子 8 個。これは 2n<sup>2</sup> = 8 と合います。</p>",
      misconception: {
        // EN (option A): There are two sublevels, but they do not have one orbital each. The 2p sublevel has three orbitals.
        "0": "副準位は 2 つですが、軌道が 1 個ずつあるわけではありません。2p 副準位には軌道が 3 個あります。",
        // EN (option C): 8 is the number of electrons that n = 2 can hold. Each orbital holds two electrons, so there are 4 orbitals.
        "2": "8 は、n = 2 に入る電子の数です。1 つの軌道には電子が 2 個入るので、軌道は 4 個です。",
        // EN (option D): This describes n = 3 (3s, 3p and 3d). There is no 2d sublevel.
        "3": "これは n = 3（3s、3p、3d）の説明です。2d という副準位はありません。",
      },
    },

    // ── s1-3-q057 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q057": {
      // EN: <p>A student draws this orbital diagram for a carbon atom (Z = 6) in its ground state.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains one up arrow only. Each of the three 2p boxes contains one up arrow."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M63 25V8M59 13L63 8L67 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M169 25V8M165 13L169 8L173 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>ある生徒が、基底状態の炭素原子（Z = 6）の軌道図を次のように描きました。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"軌道図。1s の箱には上向きの矢印 1 本と下向きの矢印 1 本が入っている。2s の箱には上向きの矢印が 1 本だけ入っている。3 つの 2p の箱には、それぞれ上向きの矢印が 1 本入っている。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M63 25V8M59 13L63 8L67 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M169 25V8M165 13L169 8L173 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>この図は、どの規則または原理に反していますか。</p>",
      options: [
        // EN: The Aufbau principle
        "構成原理 (Aufbau principle)",
        // EN: Hund’s rule
        "フントの規則 (Hund’s rule)",
        // EN: The Pauli exclusion principle
        "パウリの排他原理 (Pauli exclusion principle)",
        // EN: None. The diagram is correct.
        "どれにも反していない。図は正しい。",
      ],
      hints: [
        // EN: The total number of electrons (6) is right. Check each sublevel from the lowest energy upwards.
        "電子の総数（6 個）は合っています。エネルギーの低い副準位から順に確かめましょう。",
        // EN: Is every lower-energy sublevel full before the next one is used?
        "次の副準位を使う前に、それよりエネルギーの低い副準位はすべて満たされていますか。",
      ],
      // EN: <p>The <strong>Aufbau principle</strong> says electrons fill the lowest-energy sublevel that has space. Here the 2s sublevel holds only one electron, but there are three electrons in the higher-energy 2p sublevel. In the ground state, 2s is filled first.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Correct orbital diagram for carbon. The 1s and 2s boxes each contain a pair of opposite arrows. Two of the three 2p boxes contain one up arrow each and the third is empty."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>The correct diagram is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></span>, with the two 2p electrons in separate orbitals.</p>
      solution: "<p><strong>構成原理</strong>によると、電子は、空きがある副準位のうちエネルギーが最も低いものに入ります。この図では、2s 副準位に電子が 1 個しかないのに、エネルギーの高い 2p 副準位に電子が 3 個あります。基底状態では、2s が先に満たされます。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"炭素の正しい軌道図。1s と 2s の箱には、それぞれ逆向きの矢印が 1 対入っている。3 つの 2p の箱のうち 2 つに上向きの矢印が 1 本ずつ入り、3 つ目は空である。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>正しい図は <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></span> で、2 個の 2p 電子は別々の軌道に入ります。</p>",
      misconception: {
        // EN (option B): Hund’s rule is obeyed inside the 2p sublevel: each 2p orbital holds one electron and the spins are parallel. The problem is that 2p is being used too early.
        "1": "2p 副準位の中では、フントの規則は守られています。どの 2p 軌道にも電子が 1 個ずつ入り、スピンは同じ向きです。問題は、2p を使うのが早すぎることです。",
        // EN (option C): No orbital holds two electrons with the same spin, and no orbital holds more than two. The Pauli exclusion principle is obeyed.
        "2": "同じスピンの電子が 2 個入った軌道も、電子が 3 個以上入った軌道もありません。パウリの排他原理は守られています。",
        // EN (option D): Count the electrons in 2s. That sublevel still has space, but an electron has been put in the higher-energy 2p sublevel.
        "3": "2s の電子を数えましょう。この副準位にはまだ空きがあるのに、エネルギーの高い 2p 副準位に電子が入っています。",
      },
    },

    // ── s1-3-q058 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q058": {
      // EN: <p>What is the condensed electron configuration of a selenium atom (Z = 34) in its ground state?</p>
      stem: "<p>基底状態のセレン原子（Z = 34）の省略形の電子配置 (condensed electron configuration) はどれですか。</p>",
      options: [
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 4p<sup>4</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 4p<sup>4</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>",
        // EN: <span class="mono">[Kr] 4p<sup>4</sup></span>
        "<span class=\"mono\">[Kr] 4p<sup>4</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>",
      ],
      hints: [
        // EN: Argon accounts for 18 electrons, so 16 more are needed.
        "アルゴンの分が 18 個なので、あと 16 個必要です。",
        // EN: After the argon core the order is 4s, then 3d, then 4p.
        "アルゴンの電子配置（芯）の後は、4s、3d、4p の順です。",
      ],
      // EN: <p>Selenium has 34 electrons: the argon core (18) plus 16.</p><div class="worked__math">4s<sup>2</sup> (2) &nbsp; 3d<sup>10</sup> (12) &nbsp; 4p<sup>4</sup> (16)</div><div class="worked__math"><span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span><br>&nbsp;&nbsp;(18 + 2 + 10 + 4 = 34)</div><p>Writing it as <span class="mono">[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></span> is also accepted.</p>
      solution: "<p>セレンの電子は 34 個です。アルゴンの電子配置（芯）の 18 個と、残りの 16 個に分けます：34 = 18 + 16.</p><div class=\"worked__math\">4s<sup>2</sup> (2) &nbsp; 3d<sup>10</sup> (12) &nbsp; 4p<sup>4</sup> (16)</div><div class=\"worked__math\"><span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span><br>&nbsp;&nbsp;(18 + 2 + 10 + 4 = 34)</div><p><span class=\"mono\">[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></span> と書いても正解です。</p>",
      misconception: {
        // EN (option A): Count the electrons: 18 + 2 + 4 = 24. The ten 3d electrons are missing. The 3d sublevel fills before 4p.
        "0": "電子を数えましょう。18 + 2 + 4 = 24 です。3d の電子 10 個が抜けています。3d 副準位は 4p より先に満たされます。",
        // EN (option C): The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after selenium.
        "2": "貴ガスの電子配置（芯）には、その元素より<em>前</em>の貴ガスを使います。クリプトン（Z = 36）はセレンより後にあります。",
        // EN (option D): Count the electrons: 18 + 2 + 10 + 6 = 36. That is krypton (or the ion <span class="chem">Se^2-</span>), not a selenium atom.
        "3": "電子を数えましょう。18 + 2 + 10 + 6 = 36 です。これはクリプトン（またはイオン <span class=\"chem\">Se^2-</span>）で、セレン原子ではありません。",
      },
    },

    // ── s1-3-q059 · mcq · exam · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q059": {
      // EN: <p>What is the condensed electron configuration of the <span class="chem">Cu^2+</span> ion? (Copper has Z = 29.)</p>
      stem: "<p><span class=\"chem\">Cu^2+</span> イオンの省略形の電子配置 (condensed electron configuration) はどれですか。（銅は Z = 29 です。）</p>",
      options: [
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>8</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>8</sup></span>",
        // EN: <span class="mono">[Ar] 3d<sup>9</sup></span>
        "<span class=\"mono\">[Ar] 3d<sup>9</sup></span>",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>
        "<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>",
      ],
      hints: [
        // EN: Start from the real configuration of the copper atom. Copper is one of the two exceptions.
        "銅原子の実際の電子配置から始めます。銅は 2 つの例外の 1 つです。",
        // EN: The atom is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>. Remove two electrons, starting with 4s.
        "原子は <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> です。4s から始めて、電子を 2 個取り除きます。",
      ],
      // EN: <p>The copper atom is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> (an exception to the usual filling order). Remove the single 4s electron first, then one 3d electron:</p><div class="worked__math"><span class="chem">Cu^2+</span>: <span class="mono">[Ar] 3d<sup>9</sup></span><br>&nbsp;&nbsp;(29 − 2 = 27 electrons)</div><p>This skill is listed for HL in Structure 3.1.</p>
      solution: "<p>銅原子は <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> です（ふつうの電子の入る順の例外）。まず 1 個だけの 4s 電子を取り除き、次に 3d の電子を 1 個取り除きます。</p><div class=\"worked__math\"><span class=\"chem\">Cu^2+</span>: <span class=\"mono\">[Ar] 3d<sup>9</sup></span><br>&nbsp;&nbsp;(29 − 2 = 27 個)</div><p>このスキルは、Structure 3.1 の HL の内容です。</p>",
      misconception: {
        // EN (option A): This keeps the 4s electrons and removes electrons from 3d. In ions of the first-row d-block metals, 4s is emptied first.
        "0": "これは 4s の電子を残して、3d から電子を取り除いています。第一遷移系列の d ブロック金属のイオンでは、4s が先に空になります。",
        // EN (option B): This keeps one electron in 4s. The 4s sublevel is emptied before any 3d electron is removed.
        "1": "これは 4s に電子を 1 個残しています。3d の電子が取り除かれる前に、4s 副準位が空になります。",
        // EN (option D): Count the electrons: 18 + 2 + 9 = 29. That is the number in a copper atom, and it is not the atom’s real configuration either.
        "3": "電子を数えましょう。18 + 2 + 9 = 29 です。これは銅原子の電子の数です。しかも、銅原子の実際の電子配置でもありません。",
      },
    },

    // ── s1-3-q060 · mcq · challenge · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q060": {
      // EN: <p>Which pair of ions have the same electron configuration?</p>
      stem: "<p>電子配置が同じイオンの組はどれですか。</p>",
      options: [
        // EN: <span class="chem">Mn^2+</span> and <span class="chem">Fe^2+</span>
        "<span class=\"chem\">Mn^2+</span> と <span class=\"chem\">Fe^2+</span>",
        // EN: <span class="chem">Mn^2+</span> and <span class="chem">Fe^3+</span>
        "<span class=\"chem\">Mn^2+</span> と <span class=\"chem\">Fe^3+</span>",
        // EN: <span class="chem">Cr^3+</span> and <span class="chem">Fe^3+</span>
        "<span class=\"chem\">Cr^3+</span> と <span class=\"chem\">Fe^3+</span>",
        // EN: <span class="chem">Ti^2+</span> and <span class="chem">Ca^2+</span>
        "<span class=\"chem\">Ti^2+</span> と <span class=\"chem\">Ca^2+</span>",
      ],
      hints: [
        // EN: Count the electrons in each ion: atomic number minus the charge. Mn is 25, Fe is 26, Cr is 24, Ti is 22, Ca is 20.
        "それぞれのイオンの電子を数えます。原子番号から電荷を引きます。Mn は 25、Fe は 26、Cr は 24、Ti は 22、Ca は 20 です。",
        // EN: Two ions with the same number of electrons, both with an empty 4s sublevel, have the same configuration.
        "電子の数が同じで、どちらも 4s 副準位が空のイオンは、電子配置が同じです。",
      ],
      // EN: <p>Write each atom, then remove the 4s electrons before any 3d electrons.</p><div class="worked__math">Mn: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> → <span class="chem">Mn^2+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span></div><div class="worked__math">Fe: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> → <span class="chem">Fe^2+</span>: <span class="mono">[Ar] 3d<sup>6</sup></span> → <span class="chem">Fe^3+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span></div><div class="worked__math">Cr: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> → <span class="chem">Cr^3+</span>: <span class="mono">[Ar] 3d<sup>3</sup></span></div><div class="worked__math">Ti: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span> → <span class="chem">Ti^2+</span>: <span class="mono">[Ar] 3d<sup>2</sup></span></div><p><span class="chem">Mn^2+</span> and <span class="chem">Fe^3+</span> both have 23 electrons and are both <span class="mono">[Ar] 3d<sup>5</sup></span>.</p>
      solution: "<p>それぞれの原子の電子配置を書き、3d の電子より先に 4s の電子を取り除きます。</p><div class=\"worked__math\">Mn: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> → <span class=\"chem\">Mn^2+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span></div><div class=\"worked__math\">Fe: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> → <span class=\"chem\">Fe^2+</span>: <span class=\"mono\">[Ar] 3d<sup>6</sup></span> → <span class=\"chem\">Fe^3+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span></div><div class=\"worked__math\">Cr: <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> → <span class=\"chem\">Cr^3+</span>: <span class=\"mono\">[Ar] 3d<sup>3</sup></span></div><div class=\"worked__math\">Ti: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span> → <span class=\"chem\">Ti^2+</span>: <span class=\"mono\">[Ar] 3d<sup>2</sup></span></div><p><span class=\"chem\">Mn^2+</span> と <span class=\"chem\">Fe^3+</span> はどちらも電子が 23 個で、どちらも <span class=\"mono\">[Ar] 3d<sup>5</sup></span> です。</p>",
      misconception: {
        // EN (option A): Same charge, but different numbers of electrons: <span class="chem">Mn^2+</span> has 23 and <span class="chem">Fe^2+</span> has 24.
        "0": "電荷は同じですが、電子の数が違います。<span class=\"chem\">Mn^2+</span> は 23 個、<span class=\"chem\">Fe^2+</span> は 24 個です。",
        // EN (option C): Same charge, but different numbers of electrons: <span class="chem">Cr^3+</span> has 21 and <span class="chem">Fe^3+</span> has 23.
        "2": "電荷は同じですが、電子の数が違います。<span class=\"chem\">Cr^3+</span> は 21 個、<span class=\"chem\">Fe^3+</span> は 23 個です。",
        // EN (option D): <span class="chem">Ca^2+</span> has 18 electrons, <span class="mono">[Ar]</span>. <span class="chem">Ti^2+</span> has 20 electrons, <span class="mono">[Ar] 3d<sup>2</sup></span>.
        "3": "<span class=\"chem\">Ca^2+</span> の電子は 18 個で、<span class=\"mono\">[Ar]</span> です。<span class=\"chem\">Ti^2+</span> の電子は 20 個で、<span class=\"mono\">[Ar] 3d<sup>2</sup></span> です。",
      },
    },

    // ── s1-3-q061 · mcq · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q061": {
      // EN: <p>Which equation represents the <strong>first ionization energy</strong> of magnesium?</p>
      stem: "<p>マグネシウムの<strong>第一イオン化エネルギー</strong> (first ionization energy) を表す式はどれですか。</p>",
      options: [
        // EN: <span class="chem">Mg(s) -> Mg+(g) + e-</span>
        "<span class=\"chem\">Mg(s) -> Mg+(g) + e-</span>",
        // EN: <span class="chem">Mg(g) -> Mg+(g) + e-</span>
        "<span class=\"chem\">Mg(g) -> Mg+(g) + e-</span>",
        // EN: <span class="chem">Mg(g) -> Mg^2+(g) + 2e-</span>
        "<span class=\"chem\">Mg(g) -> Mg^2+(g) + 2e-</span>",
        // EN: <span class="chem">Mg(g) + e- -> Mg-(g)</span>
        "<span class=\"chem\">Mg(g) + e- -> Mg-(g)</span>",
      ],
      hints: [
        // EN: First ionization energy: one mole of electrons is removed from one mole of gaseous atoms.
        "第一イオン化エネルギー：気体の原子 1 mol から、電子 1 mol を取り除きます。",
        // EN: Check the state symbols and the number of electrons.
        "状態記号と電子の数を確かめましょう。",
      ],
      // EN: <p>The first ionization energy is the energy needed to remove one mole of electrons from one mole of gaseous atoms, forming one mole of gaseous 1+ ions:</p><div class="worked__math"><span class="chem">Mg(g) -> Mg+(g) + e-</span></div><p>Both species must have the state symbol (g).</p>
      solution: "<p>第一イオン化エネルギーは、気体の原子 1 mol から電子 1 mol を取り除いて、気体の 1+ イオン 1 mol にするのに必要なエネルギーです。</p><div class=\"worked__math\"><span class=\"chem\">Mg(g) -> Mg+(g) + e-</span></div><p>どちらの化学種にも状態記号 (g) が必要です。</p>",
      misconception: {
        // EN (option A): Ionization energy is defined for <em>gaseous</em> atoms. Starting from the solid would include the energy needed to turn the solid into separate atoms.
        "0": "イオン化エネルギーは、<em>気体</em>の原子について定義されます。固体から始めると、固体をばらばらの原子にするエネルギーも含まれてしまいます。",
        // EN (option C): This removes two electrons. The first ionization energy is for removing one electron from each atom.
        "2": "これは電子を 2 個取り除いています。第一イオン化エネルギーは、それぞれの原子から電子を 1 個取り除くときの値です。",
        // EN (option D): This atom gains an electron. Ionization means an electron is removed.
        "3": "この原子は電子を受け取っています。イオン化とは、電子が取り除かれることです。",
      },
    },

    // ── s1-3-q062 · mcq · exam · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q062": {
      // EN: <p>The first ionization energy of phosphorus is 1012 <span class="unit">kJ mol-1</span> and that of sulfur is 1000 <span class="unit">kJ mol-1</span>. Which statement explains why the value for sulfur is lower?</p>
      stem: "<p>リンの第一イオン化エネルギーは 1012 <span class=\"unit\">kJ mol-1</span>、硫黄は 1000 <span class=\"unit\">kJ mol-1</span> です。硫黄の値のほうが小さい理由を説明している文はどれですか。</p>",
      options: [
        // EN: The electron removed from sulfur is in a 3p orbital that holds two electrons, and these two electrons repel each other.
        "硫黄から取り除かれる電子は、電子が 2 個入った 3p 軌道にあり、この 2 個の電子が互いに反発するから。",
        // EN: The electron removed from sulfur is in the 3p sublevel, but the electron removed from phosphorus is in the 3s sublevel.
        "硫黄から取り除かれる電子は 3p 副準位にあるが、リンから取り除かれる電子は 3s 副準位にあるから。",
        // EN: Sulfur has more inner electrons than phosphorus, so its outer electrons are more shielded.
        "硫黄はリンより内側の電子が多く、最外殻の電子がより強く遮蔽されるから。",
        // EN: Sulfur has a smaller nuclear charge than phosphorus.
        "硫黄の核電荷はリンより小さいから。",
      ],
      hints: [
        // EN: Write both configurations. Which sublevel does each atom lose an electron from?
        "両方の電子配置を書きましょう。それぞれの原子は、どの副準位から電子を失いますか。",
        // EN: Draw the three 3p boxes for each atom. What is different in sulfur?
        "それぞれの原子について 3p の箱を 3 つ描きましょう。硫黄ではどこが違いますか。",
      ],
      // EN: <p>P is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>: each 3p orbital holds one electron. S is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>: one 3p orbital holds a pair. The electron removed from sulfur comes from this doubly occupied orbital. Repulsion between the two electrons in the same orbital raises the energy of the electron, so less energy is needed to remove it.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagrams of the 3p sublevel. In phosphorus each of the three 3p boxes holds one up arrow. In sulfur the first 3p box holds an up and a down arrow and the other two hold one up arrow each."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M17 25V8M13 13L17 8L21 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M47 25V8M43 13L47 8L51 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="62" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M77 25V8M73 13L77 8L81 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="47" y="50" text-anchor="middle" font-size="14" fill="currentColor">3p in P</text><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M118 25V8M114 13L118 8L122 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 7V24M124 19L128 24L132 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="153" y="50" text-anchor="middle" font-size="14" fill="currentColor">3p in S</text></svg></p>
      solution: "<p>P は <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span> で、3p 軌道のそれぞれに電子が 1 個ずつ入っています。S は <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span> で、3p 軌道の 1 つに電子対が入っています。硫黄から取り除かれる電子は、この 2 個入った軌道の電子です。同じ軌道にある 2 個の電子の間の反発 (repulsion) で電子のエネルギーが高くなるので、取り除くのに必要なエネルギーが小さくなります。</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"3p 副準位の軌道図。リンでは、3 つの 3p の箱にそれぞれ上向きの矢印が 1 本ある。硫黄では、最初の 3p の箱に上向きと下向きの矢印があり、残りの 2 つの箱に上向きの矢印が 1 本ずつある。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M17 25V8M13 13L17 8L21 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"32\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M47 25V8M43 13L47 8L51 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"62\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M77 25V8M73 13L77 8L81 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"47\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">P の 3p</text><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M118 25V8M114 13L118 8L122 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M128 7V24M124 19L128 24L132 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"153\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">S の 3p</text></svg></p>",
      misconception: {
        // EN (option B): Both atoms lose a 3p electron: P is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span> and S is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>. A change of sublevel explains the fall from Mg to Al, not this one.
        "1": "どちらの原子も 3p の電子を失います。P は <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>、S は <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span> です。副準位の違いで説明できるのは、Mg から Al での減少のほうです。",
        // EN (option C): Both atoms have the same ten inner electrons (<span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>), so the shielding by inner electrons is the same.
        "2": "どちらの原子も、内側の電子は同じ 10 個（<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>）です。そのため、内側の電子による遮蔽は同じです。",
        // EN (option D): Sulfur has 16 protons and phosphorus has 15. Sulfur has the <em>greater</em> nuclear charge, which is why the lower value needs explaining.
        "3": "硫黄の陽子は 16 個、リンは 15 個です。核電荷は硫黄のほうが<em>大きい</em>のです。だからこそ、値が小さいことに説明が必要になります。",
      },
    },

    // ── s1-3-q063 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q063": {
      // EN: <p>The first ionization energy of sulfur is 1000 <span class="unit">kJ mol-1</span> and that of chlorine is 1251 <span class="unit">kJ mol-1</span>.</p><p>Explain why chlorine has the higher first ionization energy.</p>
      stem: "<p>硫黄の第一イオン化エネルギーは 1000 <span class=\"unit\">kJ mol-1</span>、塩素は 1251 <span class=\"unit\">kJ mol-1</span> です。</p><p>塩素の第一イオン化エネルギーのほうが大きい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: What is different about the two nuclei?
        "2 つの原子核は、どこが違いますか。",
        // EN: Are the outer electrons in the same main energy level? What does that tell you about shielding?
        "最外殻の電子は、同じ主エネルギー準位にありますか。そこから遮蔽 (shielding) について何がわかりますか。",
        // EN: Do not argue from how close chlorine is to a full sublevel. Compare the attraction for the electron that is removed.
        "塩素は副準位が満たされるのに近いから、という説明はしないでください。取り除かれる電子にはたらく引力をくらべましょう。",
      ],
      // EN: <p>Chlorine has one more proton than sulfur, so its nuclear charge is greater. In both atoms the electron is removed from the 3p sublevel, in the same main energy level, so the shielding by inner electrons is the same. The outer electron in chlorine is attracted more strongly to the nucleus (and is slightly closer to it), so more energy is needed to remove it.</p>
      answer: "<p>塩素は硫黄より陽子が 1 個多いので、核電荷が大きくなります。どちらの原子でも、電子は同じ主エネルギー準位の 3p 副準位から取り除かれるので、内側の電子による遮蔽は同じです。塩素の最外殻の電子は原子核により強く引きつけられ（原子核にも少し近く）、取り除くのに必要なエネルギーが大きくなります。</p>",
      markscheme: [
        // EN: Chlorine has a greater nuclear charge / more protons.
        "塩素のほうが核電荷が大きい / 陽子が多い。",
        // EN: The electron is removed from the same main energy level (or sublevel), so shielding is the same/similar, and the attraction to the nucleus is stronger (accept: smaller atomic radius).
        "電子は同じ主エネルギー準位（または副準位）から取り除かれるので、遮蔽は同じ / ほぼ同じで、原子核との引力がより強い（「原子半径が小さい」も可）。",
      ],
    },

    // ── s1-3-q064 · mcq · foundation · SL · Structure 1.3.2 · 1 mark
    "s1-3-q064": {
      // EN: <p>The four lines in the <strong>visible</strong> part of the hydrogen emission spectrum are produced when electrons fall to which energy level?</p>
      stem: "<p>水素の発光スペクトルの<strong>可視光</strong>の領域にある 4 本の線は、電子がどのエネルギー準位に落ちるときにできますか。</p>",
      options: [
        // EN: n = 1
        "n = 1",
        // EN: n = 2
        "n = 2",
        // EN: n = 3
        "n = 3",
        // EN: n = ∞
        "n = ∞",
      ],
      hints: [
        // EN: Three sets of lines: falls to n = 1, to n = 2 and to n = 3.
        "線の組は 3 つあります。n = 1、n = 2、n = 3 に落ちるものです。",
        // EN: In order of decreasing energy the regions are ultraviolet, visible, infrared.
        "エネルギーが大きい順に、紫外線、可視光、赤外線の領域です。",
      ],
      // EN: <p>Visible lines come from electrons falling to <strong>n = 2</strong> (from n = 3, 4, 5 and 6). Falls to n = 1 give ultraviolet lines and falls to n = 3 give infrared lines.</p>
      solution: "<p>可視光の線は、電子が <strong>n = 2</strong> に落ちるときにできます（n = 3、4、5、6 から）。n = 1 に落ちると紫外線の線、n = 3 に落ちると赤外線の線になります。</p>",
      misconception: {
        // EN (option A): Falls to n = 1 release the most energy. Those lines are in the ultraviolet, which you cannot see.
        "0": "n = 1 に落ちるとき、放出されるエネルギーは最大です。その線は紫外線の領域にあり、目には見えません。",
        // EN (option C): Falls to n = 3 release little energy. Those lines are in the infrared, which you cannot see.
        "2": "n = 3 に落ちるとき、放出されるエネルギーはわずかです。その線は赤外線の領域にあり、目には見えません。",
        // EN (option D): Emission happens when an electron falls to a <em>lower</em> level. n = ∞ is the top, where the levels converge.
        "3": "発光は、電子が<em>低い</em>準位に落ちるときに起こります。n = ∞ はいちばん上で、準位が収束するところです。",
      },
    },

    // ── s1-3-q065 · mcq · foundation · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q065": {
      // EN: <p>The table shows the first four successive ionization energies of an element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">496</td><td class="num">4562</td><td class="num">6910</td><td class="num">9543</td></tr></tbody></table></div><p>In which group of the periodic table is the element?</p>
      stem: "<p>表は、ある元素の 1 番目から 4 番目までの逐次イオン化エネルギー (successive ionization energies) を示しています。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐次イオン化エネルギー / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1 番目</th><th class=\"num\" scope=\"col\">2 番目</th><th class=\"num\" scope=\"col\">3 番目</th><th class=\"num\" scope=\"col\">4 番目</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">496</td><td class=\"num\">4562</td><td class=\"num\">6910</td><td class=\"num\">9543</td></tr></tbody></table></div><p>この元素は周期表の何族ですか。</p>",
      options: [
        // EN: Group 1
        "1 族",
        // EN: Group 2
        "2 族",
        // EN: Group 13
        "13 族",
        // EN: Group 14
        "14 族",
      ],
      hints: [
        // EN: Compare each value with the one before it. Where does it become many times larger?
        "それぞれの値を 1 つ前の値とくらべましょう。何倍にも大きくなるのはどこですか。",
        // EN: The number of electrons removed <em>before</em> the large jump is the number of outer electrons.
        "大きな跳ね上がりの<em>前</em>に取り除かれた電子の数が、最外殻の電子の数です。",
      ],
      // EN: <div class="worked__math">1st → 2nd: 496 → 4562<br>&nbsp;&nbsp;(about 9 times: the large jump)</div><div class="worked__math">2nd → 3rd: 4562 → 6910<br>&nbsp;&nbsp;(about 1.5 times)</div><div class="worked__math">3rd → 4th: 6910 → 9543<br>&nbsp;&nbsp;(about 1.4 times)</div><p>Only one electron is removed before the large jump, so the atom has one outer electron. The element is in <strong>group 1</strong>. (These are the values for sodium.)</p>
      solution: "<div class=\"worked__math\">1 番目 → 2 番目: 496 → 4562<br>&nbsp;&nbsp;（約 9 倍：大きな跳ね上がり）</div><div class=\"worked__math\">2 番目 → 3 番目: 4562 → 6910<br>&nbsp;&nbsp;（約 1.5 倍）</div><div class=\"worked__math\">3 番目 → 4 番目: 6910 → 9543<br>&nbsp;&nbsp;（約 1.4 倍）</div><p>大きな跳ね上がりの前に取り除かれる電子は 1 個だけなので、この原子の最外殻の電子は 1 個です。この元素は <strong>1 族</strong>です。（これはナトリウム (Na) の値です。）</p>",
      misconception: {
        // EN (option B): A group 2 element has two outer electrons, so its large jump comes between the 2nd and 3rd values. Here 6910 is only about 1.5 times 4562.
        "1": "2 族の元素の最外殻の電子は 2 個なので、大きな跳ね上がりは 2 番目と 3 番目の値の間にきます。この表では、6910 は 4562 の約 1.5 倍しかありません。",
        // EN (option C): A group 13 element has three outer electrons, so its large jump comes between the 3rd and 4th values. Here 9543 is only about 1.4 times 6910.
        "2": "13 族の元素の最外殻の電子は 3 個なので、大きな跳ね上がりは 3 番目と 4 番目の値の間にきます。この表では、9543 は 6910 の約 1.4 倍しかありません。",
        // EN (option D): This counts all four values given. Look for the large jump and count only the electrons removed before it.
        "3": "これは、示された 4 つの値をすべて数えています。大きな跳ね上がりを探し、その前に取り除かれた電子だけを数えましょう。",
      },
    },

  }
});
