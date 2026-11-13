/* s1-3 — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-3', {
  strings: {

    // page title (browser tab)
    "1.3 Electron configurations | Structure Lab": "1.3 電子排佈 | Structure Lab",

    // Electron configurations > page header > p
    "Structure 1.3": "Structure 1.3",

    // Electron configurations > page header > h1
    // Writing electron configurations > data-toc attribute
    "Electron configurations": "電子排佈",

    // Electron configurations > page header > span
    "How can we model the energy states of electrons in atoms?": "怎樣用模型描述原子內電子的能量狀態？",

    // What you need to be able to do > data-toc attribute
    "What you need to do": "你要做得到的事",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "不看筆記也做得到，就剔選該項。",

    // What you need to be able to do > checklist > span
    "Explain how an emission spectrum is produced: electrons in excited states return to lower energy levels and emit photons.": "解釋發射光譜怎樣產生：處於激發態的電子返回較低的能級，並發射光子。",

    // What you need to be able to do > checklist > span
    "Describe, without calculation, how colour, wavelength, frequency and energy are related across the electromagnetic spectrum.": "不用計算，描述在電磁波譜中顏色、波長、頻率和能量之間的關係。",

    // What you need to be able to do > checklist > span
    "Tell a continuous spectrum from a line spectrum.": "分辨連續光譜和線光譜。",

    // What you need to be able to do > checklist > span
    "Describe the hydrogen emission spectrum: link the lines to transitions down to n = 1, n = 2 and n = 3, and explain what the converging lines show.": "描述氫的發射光譜：把譜線與落到 n = 1、n = 2 和 n = 3 的躍遷聯繫起來，並解釋譜線會聚說明了甚麼。",

    // What you need to be able to do > checklist > span
    "Deduce the maximum number of electrons in a main energy level using 2n<sup>2</sup>.": "用 2n<sup>2</sup> 推斷一個主能級最多可容納多少個電子。",

    // What you need to be able to do > checklist > span
    "Name the sublevels s, p, d and f in order of energy, and recognize the shape and orientation of an s orbital and the three p orbitals.": "按能量由低至高寫出 s、p、d、f 亞層的名稱，並認出 s 軌態和三個 p 軌態的形狀和方向。",

    // What you need to be able to do > checklist > span
    "Apply the Aufbau principle, Hund’s rule and the Pauli exclusion principle to fill orbitals.": "應用構築原理、洪特規則和泡利不相容原理，把電子填入軌態。",

    // What you need to be able to do > checklist > span
    "Write full and condensed electron configurations and draw orbital diagrams for atoms and ions up to Z = 36, including the exceptions Cr and Cu.": "為 Z = 36 或以下的原子和離子寫出完整和簡寫電子排佈，並繪畫軌態圖，包括 Cr 和 Cu 這兩個例外。",

    // What you need to be able to do > checklist > Additional HL > span
    "Deduce the configurations of ions of the first-row d-block metals, removing 4s electrons before 3d.": "推斷第一列 d 區金屬離子的電子排佈：先移走 4s 電子，再移走 3d 電子。",

    // What you need to be able to do > checklist > Additional HL > span
    "Explain that the limit of convergence corresponds to ionization, and calculate a first ionization energy from the wavelength or frequency of that limit (and the reverse).": "解釋會聚極限對應電離，並由會聚極限的波長或頻率計算第一電離能（也要懂得反過來計算）。",

    // What you need to be able to do > checklist > Additional HL > span
    "Explain the trends and the discontinuities in first ionization energy across a period and down a group.": "解釋第一電離能在同一週期和同一族中的趨勢，以及趨勢中的不連續處。",

    // What you need to be able to do > checklist > Additional HL > span
    "Deduce the group of an element from its successive ionization energies.": "由元素的逐級電離能推斷它所屬的族。",

    // Light, photons and emission spectra > data-toc attribute
    "Light and emission spectra": "光與發射光譜",

    // Light, photons and emission spectra > h2
    "Light, photons and emission spectra": "光、光子與發射光譜",

    // Light, photons and emission spectra > p
    "Sprinkle salt into a gas flame and the flame turns yellow. A neon sign glows red. Fireworks get their colours from different metal compounds. In each case, atoms that have been given energy are giving it back out as light.": "把食鹽撒進煤氣火焰，火焰會變成黃色。霓虹燈發出紅光。煙花的顏色來自不同的金屬化合物。在這些例子中，原子都是先得到能量，再以光的形式把能量釋放出來。",

    // Light, photons and emission spectra > p
    "The pattern of light an element gives out is its <dfn data-def=\"The set of wavelengths of light given out by atoms of an element when their excited electrons return to lower energy levels.\">emission spectrum</dfn>. This section explains where that light comes from.": "元素發出的光有固定的圖樣，這就是該元素的<dfn data-def=\"元素的原子中，受激發的電子返回較低能級時所發出的一組波長的光。\">發射光譜 <span class=\"en-term\">(emission spectrum)</span></dfn>。這一節會解釋這些光從哪裏來。",

    // Light, photons and emission spectra > data-def attribute
    "The set of wavelengths of light given out by atoms of an element when their excited electrons return to lower energy levels.": "元素的原子中，受激發的電子返回較低能級時所發出的一組波長的光。",

    // Light, photons and emission spectra > h3
    "How an atom emits light": "原子怎樣發光",

    // Light, photons and emission spectra > p
    "Electrons in an atom can only have certain fixed amounts of energy. These allowed energies are called <dfn data-def=\"One of the fixed, allowed energies an electron can have in an atom.\">energy levels</dfn>. Think of a ladder: you can stand on a rung, but not between rungs.": "原子內的電子只能擁有某些固定的能量。這些容許的能量稱為<dfn data-def=\"原子內的電子可以擁有的固定能量，每一個是一個能級。\">能級 <span class=\"en-term\">(energy levels)</span></dfn>。試想像一把梯子：你可以站在梯級上，但不能站在兩級之間。",

    // Light, photons and emission spectra > data-def attribute
    "One of the fixed, allowed energies an electron can have in an atom.": "原子內的電子可以擁有的固定能量，每一個是一個能級。",

    // Light, photons and emission spectra > aria-label attribute
    "Two energy levels. The electron sits on the lower level.": "兩個能級。電子在較低的能級上。",

    // Light, photons and emission spectra > p
    "<b>1. Ground state.</b> The electron is in the lowest energy level available.": "<b>1. 基態 (ground state)。</b>電子處於可佔用的最低能級。",

    // Light, photons and emission spectra > aria-label attribute
    "The electron has moved up to the higher level. An upward arrow shows energy being absorbed.": "電子已升到較高的能級。向上的箭嘴表示吸收能量。",

    // Light, photons and emission spectra > p
    "<b>2. Excited state.</b> The atom absorbs energy, from heat or electricity. The electron moves up to a higher level.": "<b>2. 激發態 (excited state)。</b>原子從熱或電吸收能量。電子升到較高的能級。",

    // Light, photons and emission spectra > aria-label attribute
    "The electron falls back to the lower level. A wavy arrow leaving the atom shows a photon being emitted.": "電子落回較低的能級。離開原子的波浪形箭嘴表示發射出一個光子。",

    // Light, photons and emission spectra > p
    "<b>3. Emission.</b> The electron falls back to a lower level. The energy it loses leaves as one photon of light.": "<b>3. 發射 (emission)。</b>電子落回較低的能級。它失去的能量變成一個光子，離開原子。",

    // Light, photons and emission spectra > figcaption
    "A model of emission with two energy levels. The energy of the photon equals the energy gap between the two levels.": "只有兩個能級的發射模型。光子的能量等於兩個能級之間的能量差。",

    // Light, photons and emission spectra > p
    "A <dfn data-def=\"A single packet of light energy. Its energy depends on the frequency of the light.\">photon</dfn> is one packet of light energy. The excited state does not last. When the electron falls, the atom emits exactly one photon, and the photon carries away exactly the energy difference between the two levels.": "<dfn data-def=\"一小份光能。它的能量取決於光的頻率。\">光子 <span class=\"en-term\">(photon)</span></dfn>是一小份光能。激發態不能持久。電子落下時，原子剛好發射一個光子，光子帶走的能量剛好等於兩個能級的能量差。",

    // Light, photons and emission spectra > data-def attribute
    "A single packet of light energy. Its energy depends on the frequency of the light.": "一小份光能。它的能量取決於光的頻率。",

    // Light, photons and emission spectra > key idea > p
    "Emission spectra are produced by atoms emitting photons when electrons in excited states return to lower energy levels. A big energy gap gives a high-energy photon. A small gap gives a low-energy photon.": "處於激發態的電子返回較低能級時，原子會發射光子，這樣就產生發射光譜。能量差大，光子的能量就高。能量差小，光子的能量就低。",

    // Light, photons and emission spectra > h3
    "Colour, wavelength, frequency and energy": "顏色、波長、頻率和能量",

    // Light, photons and emission spectra > p
    "Light is one kind of electromagnetic radiation. So are radio waves, microwaves, infrared (IR), ultraviolet (UV), X-rays and gamma rays. Together they make up the <dfn>electromagnetic spectrum</dfn>. They differ in wavelength and frequency.": "光是電磁輻射的一種。無線電波、微波、紅外 (IR)、紫外 (UV)、X 射線和 γ 射線也是電磁輻射。它們合起來組成<dfn>電磁波譜 <span class=\"en-term\">(electromagnetic spectrum)</span></dfn>。各種電磁輻射的波長和頻率都不同。",

    // Light, photons and emission spectra > p
    "<dfn data-def=\"The distance from one wave peak to the next. Symbol λ. Often given in nanometres for light.\">Wavelength</dfn> is the distance from one wave peak to the next. <dfn data-def=\"The number of waves that pass a point each second. Symbol f. Unit hertz, Hz, which is the same as s⁻¹.\">Frequency</dfn> is the number of waves passing a point each second. All electromagnetic radiation travels at the same speed in a vacuum, so if the waves are shorter, more of them pass each second.": "<dfn data-def=\"相鄰兩個波峰之間的距離。符號是 λ。光的波長常以納米表示。\">波長 <span class=\"en-term\">(wavelength)</span></dfn>是相鄰兩個波峰之間的距離。<dfn data-def=\"每秒經過某一點的波的數目。符號是 f。單位是赫茲 (Hz)，即 s⁻¹。\">頻率 <span class=\"en-term\">(frequency)</span></dfn>是每秒經過某一點的波的數目。所有電磁輻射在真空中的速率都相同，所以波愈短，每秒經過的波就愈多。",

    // Light, photons and emission spectra > data-def attribute
    "The distance from one wave peak to the next. Symbol λ. Often given in nanometres for light.": "相鄰兩個波峰之間的距離。符號是 λ。光的波長常以納米表示。",

    // Light, photons and emission spectra > data-def attribute
    "The number of waves that pass a point each second. Symbol f. Unit hertz, Hz, which is the same as s⁻¹.": "每秒經過某一點的波的數目。符號是 f。單位是赫茲 (Hz)，即 s⁻¹。",

    // Light, photons and emission spectra > aria-label attribute
    "A wave with long wavelength: only two complete waves fit in the picture.": "波長較長的波：圖中只容得下兩個完整的波。",

    // Light, photons and emission spectra > p
    "<b>Red light.</b> Longer wavelength, lower frequency, less energy per photon.": "<b>紅光。</b>波長較長，頻率較低，每個光子的能量較少。",

    // Light, photons and emission spectra > aria-label attribute
    "A wave with short wavelength: about five complete waves fit in the same width.": "波長較短的波：同樣的寬度內約有五個完整的波。",

    // Light, photons and emission spectra > p
    "<b>Violet light.</b> Shorter wavelength, higher frequency, more energy per photon.": "<b>紫光。</b>波長較短，頻率較高，每個光子的能量較多。",

    // Light, photons and emission spectra > figcaption
    "Two waves drawn over the same distance. More waves in the same space means a shorter wavelength and a higher frequency.": "在相同距離內畫出的兩個波。同樣的空間內波愈多，波長就愈短，頻率就愈高。",

    // Light, photons and emission spectra > table > caption
    "The electromagnetic spectrum, in order": "電磁波譜（按次序排列）",

    // Light, photons and emission spectra > table > th
    // widget string (assets/js/widgets-s1-3.js)
    "Region": "區域",

    // Light, photons and emission spectra > table > th
    // widget string (assets/js/widgets-s1-3.js)
    "Wavelength": "波長",

    // Light, photons and emission spectra > table > th
    "Frequency": "頻率",

    // Light, photons and emission spectra > table > th
    "Energy per photon": "每個光子的能量",

    // Light, photons and emission spectra > table > th
    "radio waves": "無線電波",

    // Light, photons and emission spectra > table > td
    "longest": "最長",

    // Light, photons and emission spectra > table > td
    "lowest": "最低",

    // Light, photons and emission spectra > table > th
    "microwaves": "微波",

    // Light, photons and emission spectra > table > td
    "gets shorter going down the table": "愈往下愈短",

    // Light, photons and emission spectra > table > td
    "gets higher going down the table": "愈往下愈高",

    // Light, photons and emission spectra > table > th
    // The hydrogen emission spectrum > table > td
    "infrared (IR)": "紅外 (IR)",

    // Light, photons and emission spectra > table > th
    "visible: red (700 nm) to violet (400 nm)": "可見光：紅 (700 nm) 至紫 (400 nm)",

    // Light, photons and emission spectra > table > th
    // The hydrogen emission spectrum > table > td
    "ultraviolet (UV)": "紫外 (UV)",

    // Light, photons and emission spectra > table > th
    "X-rays": "X 射線",

    // Light, photons and emission spectra > table > th
    "gamma rays": "γ 射線",

    // Light, photons and emission spectra > table > td
    "shortest": "最短",

    // Light, photons and emission spectra > table > td
    "highest": "最高",

    // Light, photons and emission spectra > key idea > p
    "Energy and frequency go up together. Wavelength goes the opposite way. So: shorter wavelength = higher frequency = higher energy. Within visible light, violet has the most energy per photon and red has the least.": "能量和頻率一同上升，波長則相反。所以：波長愈短 = 頻率愈高 = 能量愈高。在可見光中，紫光每個光子的能量最多，紅光最少。",

    // Light, photons and emission spectra > data booklet note > p
    "Section 5 of the data booklet shows the electromagnetic spectrum on a wavelength scale, with an arrow for increasing energy and the visible region from 400 nm to 700 nm. Section 15 gives the wavelengths of each colour. You do not need to memorize the numbers.": "數據手冊第 5 節以波長標度列出電磁波譜，有箭嘴表示能量遞增的方向，並標出 400 nm 至 700 nm 的可見光區。第 15 節列出各種顏色的波長。這些數值不用背。",

    // Light, photons and emission spectra > h3
    "Continuous and line spectra": "連續光譜和線光譜",

    // Light, photons and emission spectra > p
    "Pass white light from a hot filament through a prism and you see every colour, merging smoothly from red to violet. That is a <dfn data-def=\"A spectrum that contains all the wavelengths (or frequencies) in a range, with no gaps.\">continuous spectrum</dfn>: it contains all the wavelengths in a range.": "讓熾熱燈絲發出的白光穿過稜鏡，你會看到所有顏色，由紅至紫平滑地過渡。這就是<dfn data-def=\"包含某範圍內所有波長（或頻率）的光譜，中間沒有空隙。\">連續光譜 <span class=\"en-term\">(continuous spectrum)</span></dfn>：它包含某範圍內的所有波長。",

    // Light, photons and emission spectra > data-def attribute
    "A spectrum that contains all the wavelengths (or frequencies) in a range, with no gaps.": "包含某範圍內所有波長（或頻率）的光譜，中間沒有空隙。",

    // Light, photons and emission spectra > p
    "Now pass an electric current through a tube of low-pressure hydrogen gas. The tube glows. Send that light through a prism and you see only a few sharp coloured lines on a dark background. That is a <dfn data-def=\"A spectrum that contains only certain separate wavelengths (or frequencies), seen as lines.\">line spectrum</dfn>: it contains only certain separate wavelengths.": "現在讓電流通過一支裝有低壓氫氣的管，管會發光。把這些光送進稜鏡，你只會在黑暗的背景上看到幾條清晰的彩色線。這就是<dfn data-def=\"只包含某些分立波長（或頻率）的光譜，看起來是一條條的線。\">線光譜 <span class=\"en-term\">(line spectrum)</span></dfn>：它只包含某些分立的波長。",

    // Light, photons and emission spectra > data-def attribute
    "A spectrum that contains only certain separate wavelengths (or frequencies), seen as lines.": "只包含某些分立波長（或頻率）的光譜，看起來是一條條的線。",

    // Light, photons and emission spectra > widget > data-title attribute
    "Continuous spectrum and line spectrum": "連續光譜和線光譜",

    // Light, photons and emission spectra > widget > figcaption
    "Move the wavelength marker. The continuous spectrum has light at every wavelength. Hydrogen emits at only four visible wavelengths. Try 656, 486, 434 and 410 nm.": "移動波長標記。連續光譜在每個波長都有光。氫在可見光區只發射四個波長的光。試試 656、486、434 和 410 nm。",

    // Light, photons and emission spectra > p
    "In the lab, the light source is a gas discharge tube and the light is split with a prism or a diffraction grating. You can record what you see (the colours and pattern of lines) and what you measure (the wavelength of each line).": "在實驗室裏，光源是氣體放電管，並用稜鏡或衍射光柵把光分開。你可以記錄看到的現象（譜線的顏色和圖樣），也可以記錄量度的結果（每條譜線的波長）。",

    // Light, photons and emission spectra > common mistake > p
    "“Shorter wavelength means lower energy” is the wrong way round. Shorter waves have a higher frequency, and a higher frequency means more energy per photon. Blue and violet photons carry more energy than red ones.": "「波長愈短，能量愈低」是說反了。波愈短，頻率愈高；頻率愈高，每個光子的能量就愈多。藍光和紫光的光子比紅光的光子帶有更多能量。",

    // Light, photons and emission spectra > exam tip (shown in English + translation) > p
    "To distinguish the two spectra, say what each contains: a continuous spectrum has <b>all wavelengths (or frequencies)</b> in a range; a line spectrum has <b>only certain, discrete wavelengths (or frequencies)</b>.": "要區分這兩種光譜，就要說明各自包含甚麼：連續光譜包含某範圍內的<b>所有波長（或頻率）</b>；線光譜<b>只包含某些分立的波長（或頻率）</b>。",

    // Light, photons and emission spectra > not needed for IB > p
    "At SL the link between energy, frequency and wavelength is descriptive only. There are no calculations with <span class=\"mono\">E = hf</span> or <span class=\"mono\">c = λf</span> in the SL part of this topic.": "在 SL，能量、頻率和波長的關係只需描述。這個課題的 SL 部分不會用 <span class=\"mono\">E = hf</span> 或 <span class=\"mono\">c = λf</span> 計算。",

    // Light, photons and emission spectra > data-title attribute
    "Light and spectra: quick check": "光與光譜：快速小測",

    // The hydrogen emission spectrum > data-toc attribute
    "The hydrogen spectrum": "氫的光譜",

    // The hydrogen emission spectrum > h2
    "The hydrogen emission spectrum": "氫的發射光譜",

    // The hydrogen emission spectrum > p
    "Hydrogen is the simplest atom: one proton and one electron. Its line spectrum is the clearest evidence we have that electrons in atoms have fixed energy levels.": "氫是最簡單的原子：只有一個質子和一個電子。氫的線光譜是最清楚的證據，證明原子內的電子有固定的能級。",

    // The hydrogen emission spectrum > h3
    "Why lines are evidence for energy levels": "為甚麼譜線是能級存在的證據",

    // The hydrogen emission spectrum > p
    "If the electron in a hydrogen atom could have any energy, it could lose any amount of energy when it falls. The atom would then emit photons of every energy, and you would see a continuous spectrum.": "假如氫原子的電子可以擁有任何能量，它落下時就可以失去任何份量的能量。這樣原子會發射出各種能量的光子，你就會看到連續光譜。",

    // The hydrogen emission spectrum > p
    "That is not what happens. Hydrogen emits only certain wavelengths. So the electron can only lose certain amounts of energy. So the electron can only have certain energies. We say the energy levels are <dfn data-def=\"Separate and fixed, with nothing allowed in between.\">discrete</dfn>.": "但事實並非如此。氫只發射某些波長的光。所以電子只能失去某些份量的能量，也就是說，電子只能擁有某些能量。我們說這些能級是<dfn data-def=\"各自分開而且固定，兩者之間不容許有其他數值。\">分立 <span class=\"en-term\">(discrete)</span></dfn>的。",

    // The hydrogen emission spectrum > data-def attribute
    "Separate and fixed, with nothing allowed in between.": "各自分開而且固定，兩者之間不容許有其他數值。",

    // The hydrogen emission spectrum > key idea > p
    "Each line in the spectrum is produced by electrons falling between one particular pair of energy levels. The line emission spectrum of hydrogen is evidence that electrons exist in discrete energy levels.": "光譜中的每一條譜線，都是電子在某一對能級之間落下而產生的。氫的線發射光譜是證據，證明電子處於分立的能級。",

    // The hydrogen emission spectrum > h3
    "The energy levels of hydrogen": "氫的能級",

    // The hydrogen emission spectrum > p
    "The main energy levels are numbered <span class=\"mono\">n = 1, 2, 3, …</span> going up in energy. <span class=\"mono\">n = 1</span> is the lowest. The levels are not evenly spaced. The gap from n = 1 to n = 2 is large. Each gap after that is smaller. The levels get closer and closer together and <dfn data-def=\"Get closer and closer together until they meet.\">converge</dfn> at high energy. The point where they meet is labelled <span class=\"mono\">n = ∞</span>.": "主能級按能量由低至高編號為 <span class=\"mono\">n = 1, 2, 3, …</span>。<span class=\"mono\">n = 1</span> 是最低的能級。能級之間的距離並不相等。n = 1 至 n = 2 的能量差很大，之後每一個能量差都較前一個小。能級愈來愈接近，在高能量處<dfn data-def=\"愈來愈接近，直至相遇。\">會聚 <span class=\"en-term\">(converge)</span></dfn>。能級相遇的那一點標示為 <span class=\"mono\">n = ∞</span>。",

    // The hydrogen emission spectrum > data-def attribute
    "Get closer and closer together until they meet.": "愈來愈接近，直至相遇。",

    // The hydrogen emission spectrum > widget > data-title attribute
    "Hydrogen: from energy levels to spectral lines": "氫：由能級到譜線",

    // The hydrogen emission spectrum > widget > data-kicker attribute
    "Model": "模型",

    // The hydrogen emission spectrum > widget > figcaption
    "Choose the level the electron falls from and the level it falls to. The arrow shows the transition, and the line appears on the spectrum below at its measured wavelength. Collect several lines to one level, then press “Show every line in this series” to see them converge. The diagram is drawn to scale. The energy values on the right are there for reference. You do not need to know them.": "選擇電子從哪個能級落下，以及落到哪個能級。箭嘴顯示該躍遷，譜線會按量度所得的波長出現在下方的光譜上。先收集幾條落到同一能級的譜線，然後按「顯示這個線系的所有譜線」，看看譜線怎樣會聚。圖是按比例繪畫的。右邊的能量數值只供參考，你不用記住。",

    // The hydrogen emission spectrum > h3
    "Three sets of lines": "三組譜線",

    // The hydrogen emission spectrum > p
    "The lines fall into sets. Each set contains all the transitions that end on the same lower level.": "譜線可以分成幾組。每一組包含所有落到同一個較低能級的躍遷。",

    // The hydrogen emission spectrum > table > caption
    "Transitions in the hydrogen emission spectrum": "氫發射光譜中的躍遷",

    // The hydrogen emission spectrum > table > th
    "Electron falls to": "電子落到",

    // The hydrogen emission spectrum > table > th
    "Size of the energy drop": "能量下降的幅度",

    // The hydrogen emission spectrum > table > th
    "Region of the spectrum": "光譜區域",

    // The hydrogen emission spectrum > table > td
    "largest": "最大",

    // The hydrogen emission spectrum > table > td
    "medium": "中等",

    // The hydrogen emission spectrum > table > td
    "visible (from n = 3, 4, 5, 6)": "可見光（來自 n = 3、4、5、6）",

    // The hydrogen emission spectrum > table > td
    "smallest": "最小",

    // The hydrogen emission spectrum > p
    "The four visible lines come from electrons falling to n = 2. The red line is the smallest of these drops (from n = 3). The violet line is the largest of the four (from n = 6).": "四條可見光譜線來自落到 n = 2 的電子。紅線對應其中最小的能量下降（來自 n = 3）。紫線對應四條之中最大的能量下降（來自 n = 6）。",

    // The hydrogen emission spectrum > h3
    "Convergence": "會聚",

    // The hydrogen emission spectrum > p
    "Within each set, the lines get closer together as the frequency gets higher. Eventually they merge. This happens because the energy levels themselves get closer together at higher energy. A drop from n = 6 is only a little bigger than a drop from n = 5, so their two lines sit close together.": "在每一組譜線中，頻率愈高，譜線愈靠近，最後合在一起。這是因為能量愈高，能級本身就愈接近。從 n = 6 落下的能量差，只比從 n = 5 落下的大一點，所以這兩條譜線靠得很近。",

    // The hydrogen emission spectrum > common mistake > p
    "The lines converge at the <b>high-energy</b> end of each set: high frequency, short wavelength. They do not converge at the low-energy end. In the visible set, the lines bunch together towards violet, not towards red.": "譜線在每一組的<b>高能量</b>一端會聚，即高頻率、短波長的一端，而不是低能量的一端。在可見光那一組，譜線向紫色一端擠在一起，而不是向紅色一端。",

    // The hydrogen emission spectrum > common mistake > p
    "The visible lines end on n = 2, not on n = 1. Drops to n = 1 release so much energy that the photons are ultraviolet, which you cannot see.": "可見光譜線落到的能級是 n = 2，不是 n = 1。落到 n = 1 時釋放的能量很大，光子屬於紫外輻射，肉眼看不見。",

    // The hydrogen emission spectrum > exam tip (shown in English + translation) > p
    "“Describe the emission spectrum of hydrogen” wants: a series of <b>lines</b> (not a continuous band); the lines <b>converge at higher frequency or energy</b>; lines arise from electron transitions from higher levels <b>down to</b> a lower level (n = 2 for visible). On a diagram, emission arrows point <b>downwards</b>. An arrow pointing up shows an electron gaining energy, which is not emission.": "「描述氫的發射光譜」要求寫出：一系列的<b>譜線</b>（不是連續的光帶）；譜線<b>在較高頻率或能量處會聚</b>；譜線來自電子由較高能級<b>向下</b>躍遷到一個較低能級（可見光是 n = 2）。在圖上，表示發射的箭嘴指向<b>下方</b>。箭嘴向上表示電子獲得能量，那不是發射。",

    // The hydrogen emission spectrum > not needed for IB > p
    "The names of the sets of lines (Lyman, Balmer, Paschen) will not be assessed. You do not need the Rydberg equation, a formula for the energy of each level, or the energy values printed on the diagram above. Transitions ending on levels above n = 3 are not required either.": "各組譜線的名稱（賴曼系、巴爾麥系、帕申系）不會考核。你不需要里德伯方程、計算各能級能量的公式，也不需要上圖所印的能量數值。落到 n = 3 以上能級的躍遷同樣不要求。",

    // The hydrogen emission spectrum > data-title attribute
    "Hydrogen spectrum: quick check": "氫的光譜：快速小測",

    // Main energy levels and 2n2 > data-toc attribute
    "Main energy levels and 2n²": "主能級與 2n²",

    // Main energy levels and 2n2 > h2
    "Main energy levels and 2n<sup>2</sup>": "主能級與 2n<sup>2</sup>",

    // Main energy levels and 2n2 > p
    "Atoms with more than one electron also have main energy levels numbered n = 1, 2, 3 and so on. Think of them as the floors of a building, with n = 1 on the ground floor, closest to the nucleus. Each floor has a limited number of places.": "有多於一個電子的原子同樣有主能級，編號為 n = 1、2、3，如此類推。可以把主能級想像成大廈的樓層，n = 1 在地下，最接近原子核。每層的位置數目有限。",

    // Main energy levels and 2n2 > equation > maths line
    "maximum number of electrons = 2<i>n</i><sup>2</sup>": "電子數目上限 = 2<i>n</i><sup>2</sup>",

    // Main energy levels and 2n2 > equation > dd
    "the number of the main energy level: a whole number, 1, 2, 3, … (no unit)": "主能級的編號：整數 1, 2, 3, …（沒有單位）",

    // Main energy levels and 2n2 > table > caption
    "How many electrons each main energy level can hold": "每個主能級可容納的電子數目",

    // Main energy levels and 2n2 > table > th
    "Working": "計算步驟",

    // Main energy levels and 2n2 > table > th
    // Sublevels and orbital shapes > table > th
    "Maximum electrons": "電子數目上限",

    // Main energy levels and 2n2 > common mistake > p
    "Square first, then double. For n = 3, <span class=\"mono\">2n<sup>2</sup></span> is <span class=\"mono\">2 × 9 = 18</span>, not <span class=\"mono\">(2 × 3)<sup>2</sup> = 36</span>. And 18 is the number that n = 3 can hold on its own, not the running total for n = 1 to 3.": "先平方，再乘以二。n = 3 時，<span class=\"mono\">2n<sup>2</sup></span> 是 <span class=\"mono\">2 × 9 = 18</span>，不是 <span class=\"mono\">(2 × 3)<sup>2</sup> = 36</span>。另外，18 是 n = 3 這一個能級可容納的數目，不是 n = 1 至 3 的累計總數。",

    // Main energy levels and 2n2 > try it > data-label attribute
    // Writing electron configurations > try it > data-label attribute
    "Number of electrons": "電子數目",

    // Main energy levels and 2n2 > try it > p
    "What is the maximum number of electrons that can occupy the n = 4 main energy level?": "n = 4 主能級最多可容納多少個電子？",

    // Main energy levels and 2n2 > try it > li
    "Use 2n<sup>2</sup>. Which do you do first: square, or multiply by 2?": "用 2n<sup>2</sup>。應該先做哪一步：平方，還是乘以 2？",

    // Main energy levels and 2n2 > try it > li
    "Square n first: <span class=\"mono\">4<sup>2</sup> = 16</span>. Then double it.": "先把 n 平方：<span class=\"mono\">4<sup>2</sup> = 16</span>。然後乘以二。",

    // Main energy levels and 2n2 > data-title attribute
    "Main energy levels: quick check": "主能級：快速小測",

    // Sublevels and orbital shapes > data-toc attribute
    "Sublevels and orbitals": "亞層和軌態",

    // Sublevels and orbital shapes > h2
    "Sublevels and orbital shapes": "亞層和軌態的形狀",

    // Sublevels and orbital shapes > p
    "Stay with the building picture. Each floor (main energy level) is divided into corridors called <dfn data-def=\"A division of a main energy level. The four types are s, p, d and f.\">sublevels</dfn>. Each corridor contains rooms called <dfn data-def=\"A region of space where there is a high probability of finding an electron. One orbital holds at most two electrons, with opposite spins.\">orbitals</dfn>. Each room holds at most two electrons.": "繼續用大廈的比喻。每一層（主能級）分成幾條走廊，稱為<dfn data-def=\"主能級之下的劃分。共有 s、p、d、f 四種。\">亞層 <span class=\"en-term\">(sublevels)</span></dfn>。每條走廊有一些房間，稱為<dfn data-def=\"找到電子的概率很高的空間區域。一個軌態最多容納兩個自旋相反的電子。\">軌態 <span class=\"en-term\">(orbitals)</span></dfn>。每個房間最多容納兩個電子。",

    // Sublevels and orbital shapes > data-def attribute
    "A division of a main energy level. The four types are s, p, d and f.": "主能級之下的劃分。共有 s、p、d、f 四種。",

    // Sublevels and orbital shapes > data-def attribute
    "A region of space where there is a high probability of finding an electron. One orbital holds at most two electrons, with opposite spins.": "找到電子的概率很高的空間區域。一個軌態最多容納兩個自旋相反的電子。",

    // Sublevels and orbital shapes > p
    "There are four types of sublevel: <span class=\"mono\">s</span>, <span class=\"mono\">p</span>, <span class=\"mono\">d</span> and <span class=\"mono\">f</span>. Within one main energy level, their energy increases in that order: s is lowest, then p, then d, then f.": "亞層有四種：<span class=\"mono\">s</span>、<span class=\"mono\">p</span>、<span class=\"mono\">d</span> 和 <span class=\"mono\">f</span>。在同一個主能級內，它們的能量按這個次序遞增：s 最低，然後是 p、d、f。",

    // Sublevels and orbital shapes > table > caption
    "The four types of sublevel": "四種亞層",

    // Sublevels and orbital shapes > table > th
    "Sublevel": "亞層",

    // Sublevels and orbital shapes > table > th
    // Sublevels and orbital shapes > try it > data-label attribute
    "Number of orbitals": "軌態數目",

    // Sublevels and orbital shapes > p
    "Main energy level n contains n types of sublevel. A sublevel is named by its level number and its letter, such as <span class=\"mono\">2p</span> or <span class=\"mono\">3d</span>.": "主能級 n 有 n 種亞層。亞層的名稱由能級編號和字母組成，例如 <span class=\"mono\">2p</span> 或 <span class=\"mono\">3d</span>。",

    // Sublevels and orbital shapes > table > caption
    "What each main energy level contains": "每個主能級包含甚麼",

    // Sublevels and orbital shapes > table > th
    "Sublevels": "亞層",

    // Sublevels and orbital shapes > table > th
    "Orbitals": "軌態",

    // Sublevels and orbital shapes > table > th
    "Maximum electrons (2n<sup>2</sup>)": "電子數目上限 (2n<sup>2</sup>)",

    // Sublevels and orbital shapes > p
    "The two tables agree. Two electrons per orbital, times the number of orbitals, gives 2n<sup>2</sup> every time.": "兩個表互相吻合。每個軌態兩個電子，乘以軌態數目，每次都得出 2n<sup>2</sup>。",

    // Sublevels and orbital shapes > h3
    "What an orbital looks like": "軌態是甚麼樣子的",

    // Sublevels and orbital shapes > p
    "An electron is not a tiny planet on a fixed track. We cannot say exactly where it is. An orbital is a region of space where there is a high probability of finding the electron. You need to recognize two shapes.": "電子不是在固定軌道上運行的小行星。我們無法確切說出電子在哪裏。軌態是找到電子的概率很高的空間區域。你要認得兩種形狀。",

    // Sublevels and orbital shapes > widget > data-title attribute
    "Shapes of the s orbital and the three p orbitals": "s 軌態和三個 p 軌態的形狀",

    // Sublevels and orbital shapes > widget > data-kicker attribute
    "Recognize only": "只需認得",

    // Sublevels and orbital shapes > widget > figcaption
    "An s orbital is a sphere. A p orbital is a dumbbell. The three p orbitals in a sublevel have the same shape and energy but point along three different axes, at right angles to each other. The nucleus is at the point where the axes cross.": "s 軌態是球形。p 軌態是啞鈴形。同一亞層的三個 p 軌態形狀和能量都相同，但分別沿着三條互相垂直的軸伸展。原子核位於三條軸相交的一點。",

    // Sublevels and orbital shapes > common mistake > p
    "“Orbit”, “orbital”, “sublevel” and “energy level” are not the same thing. An orbital is one region holding up to two electrons. A sublevel is a set of orbitals of the same type (the 2p sublevel has three orbitals). A main energy level is a set of sublevels.": "「軌道」(orbit)、「軌態」(orbital)、「亞層」(sublevel) 和「能級」(energy level) 並不是同一回事。軌態是一個區域，最多容納兩個電子。亞層是一組同類型的軌態（2p 亞層有三個軌態）。主能級是一組亞層。",

    // Sublevels and orbital shapes > not needed for IB > p
    "You only need to recognize the s shape and the three p shapes. Shapes of d and f orbitals, quantum numbers, nodes, wave functions, the Schrödinger equation and the Heisenberg uncertainty principle are not in the IB Chemistry guide.": "你只需認得 s 軌態的形狀和三個 p 軌態的形狀。d 和 f 軌態的形狀、量子數、節點、波函數、薛定諤方程和海森堡不確定性原理，都不在 IB 化學指南之內。",

    // Sublevels and orbital shapes > try it > p
    "How many orbitals are there in total in the n = 3 main energy level?": "n = 3 主能級合共有多少個軌態？",

    // Sublevels and orbital shapes > try it > li
    "List the sublevels in n = 3 first. There are three types.": "先列出 n = 3 的亞層，共有三種。",

    // Sublevels and orbital shapes > try it > li
    "3s has 1 orbital, 3p has 3 and 3d has 5. Add them.": "3s 有 1 個軌態，3p 有 3 個，3d 有 5 個。把它們加起來。",

    // Sublevels and orbital shapes > try it > maths line
    "1 (3s) + 3 (3p) + 5 (3d) = 9 orbitals": "1 (3s) + 3 (3p) + 5 (3d) = 9 個軌態",

    // Sublevels and orbital shapes > try it > p
    "Check: 9 orbitals × 2 electrons = 18 electrons, which matches 2n<sup>2</sup> for n = 3.": "驗算：9 個軌態 × 2 個電子 = 18 個電子，與 n = 3 時的 2n<sup>2</sup> 吻合。",

    // Sublevels and orbital shapes > data-title attribute
    "Sublevels and orbitals: quick check": "亞層和軌態：快速小測",

    // Writing electron configurations > h2
    "Writing electron configurations": "書寫電子排佈",

    // Writing electron configurations > p
    "An <dfn data-def=\"A list showing which sublevels the electrons of an atom or ion occupy, and how many electrons are in each.\">electron configuration</dfn> is the address list for the electrons in an atom: which sublevels are occupied, and by how many electrons. For sodium it is <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. The big number is the main energy level, the letter is the sublevel, and the superscript is the number of electrons in it.": "<dfn data-def=\"列出原子或離子的電子佔用哪些亞層、每個亞層有多少個電子的一串記號。\">電子排佈 <span class=\"en-term\">(electron configuration)</span></dfn>是原子內各電子的「地址表」：哪些亞層有電子，各有多少個。鈉的電子排佈是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>。大的數字是主能級，字母是亞層，上標是該亞層內的電子數目。",

    // Writing electron configurations > data-def attribute
    "A list showing which sublevels the electrons of an atom or ion occupy, and how many electrons are in each.": "列出原子或離子的電子佔用哪些亞層、每個亞層有多少個電子的一串記號。",

    // Writing electron configurations > h3
    "Three rules for filling orbitals": "填充軌態的三條規則",

    // Writing electron configurations > p
    "Picture people getting onto a bus. They take the nearest seats first. They each take an empty double seat before anyone sits next to a stranger. And a double seat holds two people at most. Electrons follow three rules that work the same way.": "試想像乘客登上巴士。他們先坐最近的座位。每人先各自坐一張空的雙人座位，之後才有人坐到陌生人旁邊。一張雙人座位最多坐兩個人。電子遵守三條道理相同的規則。",

    // Writing electron configurations > table > caption
    "The three rules, and what each one tells you to do": "三條規則，以及每條規則要你怎樣做",

    // Writing electron configurations > table > th
    "Rule": "規則",

    // Writing electron configurations > table > th
    "What it says": "內容",

    // Writing electron configurations > table > th
    "In a diagram": "在圖中怎樣畫",

    // Writing electron configurations > table > th
    "Aufbau principle": "構築原理 (Aufbau principle)",

    // Writing electron configurations > table > td
    "Electrons fill the lowest-energy sublevel that has space, before going into a higher one.": "電子先填入仍有空位而能量最低的亞層，然後才填入較高的亞層。",

    // Writing electron configurations > table > td
    "Fill from the bottom up.": "由下而上填。",

    // Writing electron configurations > table > th
    "Hund’s rule": "洪特規則 (Hund’s rule)",

    // Writing electron configurations > table > td
    "Within a sublevel, every orbital gets one electron before any orbital gets a second. The single electrons have the same spin.": "在同一亞層內，每個軌態先各得一個電子，之後才有軌態得到第二個。這些單獨的電子自旋方向相同。",

    // Writing electron configurations > table > td
    "One arrow in each box first, all pointing the same way. Then go back and pair.": "先在每個方格畫一個箭嘴，方向全部相同。然後才回頭配對。",

    // Writing electron configurations > table > th
    "Pauli exclusion principle": "泡利不相容原理 (Pauli exclusion principle)",

    // Writing electron configurations > table > td
    "An orbital holds at most two electrons, and the two must have opposite spins.": "一個軌態最多容納兩個電子，而且兩個電子必須自旋相反。",

    // Writing electron configurations > table > td
    "Never more than two arrows in a box: one up, one down.": "一個方格內不可多於兩個箭嘴：一個向上，一個向下。",

    // Writing electron configurations > p
    "<dfn data-def=\"A property of an electron that has two possible values, drawn as an up arrow or a down arrow.\">Spin</dfn> is a property of an electron with two possible values. We draw them as an up arrow and a down arrow.": "<dfn data-def=\"電子的一種性質，有兩個可能的數值，畫成向上或向下的箭嘴。\">自旋 <span class=\"en-term\">(spin)</span></dfn>是電子的一種性質，有兩個可能的數值。我們用向上和向下的箭嘴來表示。",

    // Writing electron configurations > data-def attribute
    "A property of an electron that has two possible values, drawn as an up arrow or a down arrow.": "電子的一種性質，有兩個可能的數值，畫成向上或向下的箭嘴。",

    // Writing electron configurations > h3
    "The filling order": "填充次序",

    // Writing electron configurations > p
    "For the elements you need (up to Z = 36), the sublevels fill in this order:": "就你需要認識的元素（Z = 36 或以下）而言，亞層按以下次序填充：",

    // Writing electron configurations > equation > dd
    "holds up to 2 electrons": "最多容納 2 個電子",

    // Writing electron configurations > equation > dd
    "holds up to 6 electrons": "最多容納 6 個電子",

    // Writing electron configurations > equation > dd
    "holds up to 10 electrons": "最多容納 10 個電子",

    // Writing electron configurations > p
    "The one surprise is that <b>4s fills before 3d</b>. In an atom where both are empty, the 4s sublevel is slightly lower in energy than 3d, so potassium and calcium put their outer electrons into 4s.": "唯一出人意表的是 <b>4s 比 3d 先填充</b>。在 4s 和 3d 都是空的原子中，4s 亞層的能量比 3d 稍低，所以鉀和鈣把最外層的電子放進 4s。",

    // Writing electron configurations > h3
    "Three ways to show a configuration": "表示電子排佈的三種方法",

    // Writing electron configurations > p
    "<b>Full configuration.</b> Every sublevel is written out: <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span> for sulfur.": "<b>完整電子排佈 (full configuration)。</b>寫出每一個亞層：硫是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup></span>。",

    // Writing electron configurations > p
    "<b>Condensed configuration.</b> The inner electrons are replaced by the symbol of the previous noble gas in square brackets: <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span> for sulfur. The noble gas cores you need are <span class=\"mono\">[He]</span> = 2 electrons, <span class=\"mono\">[Ne]</span> = 10 and <span class=\"mono\">[Ar]</span> = 18.": "<b>簡寫電子排佈 (condensed configuration)。</b>用方括號內的上一個貴氣體符號代替內層電子：硫是 <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>。你需要用到的貴氣體核心是 <span class=\"mono\">[He]</span> = 2 個電子、<span class=\"mono\">[Ne]</span> = 10 個和 <span class=\"mono\">[Ar]</span> = 18 個。",

    // Writing electron configurations > p
    "<b>Orbital diagram</b> (arrow-in-box diagram). Each orbital is a box and each electron is an arrow. Boxes for higher-energy sublevels are drawn higher up. This is the only notation that shows Hund’s rule and spin.": "<b>軌態圖 (orbital diagram)</b>，又稱箭嘴方格圖 (arrow-in-box diagram)。每個軌態畫成一個方格，每個電子畫成一個箭嘴。能量較高的亞層，方格畫得較高。只有這種表示法能顯示洪特規則和自旋。",

    // Writing electron configurations > widget > data-title attribute
    "Electron configuration builder": "電子排佈砌圖工具",

    // Writing electron configurations > widget > figcaption
    "Choose any element up to krypton, then an atom or one of its common ions. In “Fill it yourself” mode, click a box to add an electron. If you break a rule, the builder names it and the electron is not placed. Try chromium and copper.": "選擇氪或之前的任何元素，然後選擇原子或它的一種常見離子。在「自己填」模式下，按方格可加入一個電子。如果你違反了規則，工具會指出是哪一條，而該電子不會放進去。試試鉻和銅。",

    // Writing electron configurations > worked example > h3
    "Configuration and orbital diagram of iron": "鐵的電子排佈和軌態圖",

    // Writing electron configurations > worked example > p
    "Deduce the full electron configuration and the condensed electron configuration of an iron atom, Fe (Z = 26). Draw the orbital diagram for its 4s and 3d sublevels.": "推斷 (deduce) 鐵原子 Fe (Z = 26) 的完整電子排佈和簡寫電子排佈。繪畫 (draw) 它的 4s 和 3d 亞層的軌態圖。",

    // Writing electron configurations > worked example > data-title attribute
    "Count the electrons": "數出電子數目",

    // Writing electron configurations > worked example > p
    "A neutral atom has the same number of electrons as protons, and Z is the number of protons.": "中性原子的電子數目與質子數目相同，而 Z 就是質子數目。",

    // Writing electron configurations > worked example > maths line
    "Fe: Z = 26, so 26 electrons": "Fe：Z = 26，所以有 26 個電子",

    // Writing electron configurations > worked example > data-title attribute
    "Fill in order, counting as you go": "按次序填充，邊填邊數",

    // Writing electron configurations > worked example > p
    "Aufbau principle: lowest energy first. Keep a running total so you know when to stop.": "構築原理：能量最低的先填。記下累計總數，就知道甚麼時候該停。",

    // Writing electron configurations > worked example > maths line
    "6 electrons left → 3d<sup>6</sup> (26)": "餘下 6 個電子 → 3d<sup>6</sup> (26)",

    // Writing electron configurations > worked example > data-title attribute
    "Write the full configuration": "寫出完整電子排佈",

    // Writing electron configurations > worked example > p
    "Check that the superscripts add up to 26.": "檢查上標加起來是否等於 26。",

    // Writing electron configurations > worked example > data-title attribute
    "Condense with the noble gas core": "用貴氣體核心簡寫",

    // Writing electron configurations > worked example > p
    "The first 18 electrons, up to 3p<sup>6</sup>, are the configuration of argon. Replace them with [Ar].": "最初的 18 個電子（直至 3p<sup>6</sup>）就是氬的電子排佈。用 [Ar] 代替它們。",

    // Writing electron configurations > worked example > data-title attribute
    "Draw the boxes": "畫出方格",

    // Writing electron configurations > worked example > p
    "Hund’s rule: put one electron in each of the five 3d boxes first (5 electrons), then pair the sixth. Pauli: the pair has opposite spins.": "洪特規則：先在五個 3d 方格各放一個電子（5 個電子），然後第六個才配對。泡利不相容原理：成對的兩個電子自旋相反。",

    // Writing electron configurations > worked example > maths line
    "4 unpaired electrons": "4 個不成對電子",

    // Writing electron configurations > worked example > p
    "Full: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup>. Condensed: [Ar] 4s<sup>2</sup> 3d<sup>6</sup>. In a full diagram the 3d boxes are drawn slightly higher than the 4s box.": "完整：1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup>。簡寫：[Ar] 4s<sup>2</sup> 3d<sup>6</sup>。在完整的軌態圖中，3d 方格畫得比 4s 方格稍高。",

    // Writing electron configurations > exam tip (shown in English + translation) > p
    "Examiners accept the 4s and 3d sublevels in either order: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> or <span class=\"mono\">[Ar] 3d<sup>6</sup> 4s<sup>2</sup></span>. This site writes them in filling order. If the question says “full”, do not use a noble gas core.": "4s 和 3d 亞層無論先寫哪一個，考官都接受：<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> 或 <span class=\"mono\">[Ar] 3d<sup>6</sup> 4s<sup>2</sup></span>。本網站按填充次序書寫。如果題目寫明「full」（完整），就不要用貴氣體核心。",

    // Writing electron configurations > h3
    "Two exceptions: chromium and copper": "兩個例外：鉻和銅",

    // Writing electron configurations > p
    "Following the filling order, you would expect chromium to be <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span> and copper to be <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>. Both are wrong. In each atom, one electron sits in 3d instead of 4s.": "按照填充次序，你會預期鉻是 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>，銅是 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>。兩個都不對。在這兩種原子中，都有一個電子在 3d 而不在 4s。",

    // Writing electron configurations > table > caption
    "The two exceptions you must know": "必須記住的兩個例外",

    // Writing electron configurations > table > th
    "Atom": "原子",

    // Writing electron configurations > table > th
    "Expected (wrong)": "預期（錯誤）",

    // Writing electron configurations > table > th
    "Actual": "實際",

    // Writing electron configurations > table > th
    "4s and 3d boxes": "4s 和 3d 方格",

    // Writing electron configurations > table > th
    "Cr (Z = 24)": "Cr (Z = 24)",

    // Writing electron configurations > table > td
    "[Ar] 4s<sup>2</sup> 3d<sup>4</sup>": "[Ar] 4s<sup>2</sup> 3d<sup>4</sup>",

    // Writing electron configurations > table > td
    "<b>[Ar] 4s<sup>1</sup> 3d<sup>5</sup></b>": "<b>[Ar] 4s<sup>1</sup> 3d<sup>5</sup></b>",

    // Writing electron configurations > table > th
    "Cu (Z = 29)": "Cu (Z = 29)",

    // Writing electron configurations > table > td
    "[Ar] 4s<sup>2</sup> 3d<sup>9</sup>": "[Ar] 4s<sup>2</sup> 3d<sup>9</sup>",

    // Writing electron configurations > table > td
    "<b>[Ar] 4s<sup>1</sup> 3d<sup>10</sup></b>": "<b>[Ar] 4s<sup>1</sup> 3d<sup>10</sup></b>",

    // Writing electron configurations > p
    "The 4s and 3d sublevels are very close in energy. For these two atoms, the arrangement with one electron in 4s has the lower energy overall.": "4s 和 3d 亞層的能量十分接近。對這兩種原子來說，4s 只有一個電子的排佈，整體能量較低。",

    // Writing electron configurations > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Writing electron configurations > worked example > h3
    "Chromium and copper": "鉻和銅",

    // Writing electron configurations > worked example > p
    "State the condensed electron configurations of a chromium atom (Z = 24) and a copper atom (Z = 29), and the number of unpaired electrons in each.": "寫出 (state) 鉻原子 (Z = 24) 和銅原子 (Z = 29) 的簡寫電子排佈，以及兩者各有多少個不成對電子。",

    // Writing electron configurations > worked example > data-title attribute
    "Find the electrons after the argon core": "找出氬核心以外的電子",

    // Writing electron configurations > worked example > p
    "Argon accounts for 18 electrons. The rest go into 4s and 3d.": "氬佔了 18 個電子。其餘的填入 4s 和 3d。",

    // Writing electron configurations > worked example > maths line
    "Cr: 24 − 18 = 6 electrons Cu: 29 − 18 = 11 electrons": "Cr：24 − 18 = 6 個電子 Cu：29 − 18 = 11 個電子",

    // Writing electron configurations > worked example > data-title attribute
    "Spot the exception": "認出例外",

    // Writing electron configurations > worked example > p
    "Cr and Cu are the two atoms where 4s holds one electron, not two. If the filling order gives you 3d<sup>4</sup> or 3d<sup>9</sup>, stop and move one electron from 4s to 3d.": "Cr 和 Cu 這兩種原子的 4s 只有一個電子，不是兩個。如果按填充次序得出 3d<sup>4</sup> 或 3d<sup>9</sup>，就要停下來，把一個電子由 4s 移到 3d。",

    // Writing electron configurations > worked example > data-title attribute
    "Count unpaired electrons from the boxes": "從方格數出不成對電子",

    // Writing electron configurations > worked example > p
    "Hund’s rule: five d electrons occupy the five d orbitals singly. Ten d electrons fill all five orbitals in pairs.": "洪特規則：五個 d 電子各佔一個 d 軌態，全部不成對。十個 d 電子則把五個軌態全部成對填滿。",

    // Writing electron configurations > worked example > maths line
    "Cr: 1 (in 4s) + 5 (in 3d) = 6 unpaired": "Cr：1（在 4s）+ 5（在 3d）= 6 個不成對電子",

    // Writing electron configurations > worked example > maths line
    "Cu: 1 (in 4s) + 0 (in 3d) = 1 unpaired": "Cu：1（在 4s）+ 0（在 3d）= 1 個不成對電子",

    // Writing electron configurations > worked example > p
    "Cr: [Ar] 4s<sup>1</sup> 3d<sup>5</sup>, 6 unpaired electrons. Cu: [Ar] 4s<sup>1</sup> 3d<sup>10</sup>, 1 unpaired electron.": "Cr：[Ar] 4s<sup>1</sup> 3d<sup>5</sup>，有 6 個不成對電子。Cu：[Ar] 4s<sup>1</sup> 3d<sup>10</sup>，有 1 個不成對電子。",

    // Writing electron configurations > not needed for IB > p
    "Cr and Cu are the only exceptions you need, and you are asked to know them, not to explain them. You do not need configurations beyond Z = 36 (krypton), or exceptions among heavier elements.": "你只需知道 Cr 和 Cu 這兩個例外；題目只要求你記得，不要求你解釋。你不需要 Z = 36（氪）以後的電子排佈，也不需要較重元素的例外。",

    // Writing electron configurations > h3
    "Ions": "離子",

    // Writing electron configurations > p
    "For an ion, start from the atom and then change the number of electrons.": "寫離子的電子排佈時，先由原子開始，然後改變電子數目。",

    // Writing electron configurations > li
    "<b>Negative ion:</b> add electrons to the next available space. <span class=\"chem\">Cl-</span> has 17 + 1 = 18 electrons.": "<b>負離子：</b>把電子加到下一個空位。<span class=\"chem\">Cl-</span> 有 17 + 1 = 18 個電子。",

    // Writing electron configurations > li
    "<b>Positive ion:</b> remove electrons from the highest main energy level. <span class=\"chem\">Ca^2+</span> has 20 − 2 = 18 electrons.": "<b>正離子：</b>從最高的主能級移走電子。<span class=\"chem\">Ca^2+</span> 有 20 − 2 = 18 個電子。",

    // Writing electron configurations > worked example > data-kicker attribute
    "Worked example 3": "例題 3",

    // Writing electron configurations > worked example > h3
    "The ions in calcium sulfide": "硫化鈣中的離子",

    // Writing electron configurations > worked example > p
    "Calcium sulfide, <span class=\"chem\">CaS</span>, contains <span class=\"chem\">Ca^2+</span> and <span class=\"chem\">S^2-</span> ions. Deduce the full electron configuration of each ion.": "硫化鈣 <span class=\"chem\">CaS</span> 含有 <span class=\"chem\">Ca^2+</span> 和 <span class=\"chem\">S^2-</span> 離子。推斷 (deduce) 這兩種離子的完整電子排佈。",

    // Writing electron configurations > worked example > data-title attribute
    "Write the atoms first": "先寫出原子的排佈",

    // Writing electron configurations > worked example > p
    "An ion’s configuration is built from the atom’s. Ca has Z = 20 and S has Z = 16.": "離子的電子排佈是由原子的排佈得出的。Ca 的 Z = 20，S 的 Z = 16。",

    // Writing electron configurations > worked example > data-title attribute
    "Remove two electrons from Ca": "從 Ca 移走兩個電子",

    // Writing electron configurations > worked example > p
    "A 2+ ion has lost two electrons. They come from the highest main energy level, which is 4s.": "2+ 離子失去了兩個電子。這兩個電子來自最高的主能級，即 4s。",

    // Writing electron configurations > worked example > maths line
    "Ca<sup>2+</sup>: 20 − 2 = 18 electrons → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>": "Ca<sup>2+</sup>：20 − 2 = 18 個電子 → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>",

    // Writing electron configurations > worked example > data-title attribute
    "Add two electrons to S": "給 S 加上兩個電子",

    // Writing electron configurations > worked example > p
    "A 2− ion has gained two electrons. They go into the next space, which is in 3p.": "2− 離子得到了兩個電子。這兩個電子填入下一個空位，即 3p。",

    // Writing electron configurations > worked example > maths line
    "S<sup>2−</sup>: 16 + 2 = 18 electrons → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>": "S<sup>2−</sup>：16 + 2 = 18 個電子 → <b>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></b>",

    // Writing electron configurations > worked example > data-title attribute
    "Check against a noble gas": "與貴氣體對照",

    // Writing electron configurations > worked example > data-label attribute
    // Writing electron configurations > worked example > Additional HL > data-label attribute
    "Check": "檢查",

    // Writing electron configurations > worked example > p
    "Both ions have 18 electrons, the same configuration as an argon atom. That is a good sign for ions of main-group elements.": "兩種離子都有 18 個電子，電子排佈與氬原子相同。對主族元素的離子來說，這是答對的好跡象。",

    // Writing electron configurations > worked example > p
    "Both ions are 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>.": "兩種離子都是 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>。",

    // Writing electron configurations > common mistake > p
    "Do not write an ion with the atom’s configuration. <span class=\"chem\">S^2-</span> is not <span class=\"mono\">…3p<sup>4</sup></span>. Always adjust the electron count for the charge: a negative charge means extra electrons, a positive charge means fewer.": "不要把原子的電子排佈當作離子的來寫。<span class=\"chem\">S^2-</span> 不是 <span class=\"mono\">…3p<sup>4</sup></span>。一定要按電荷調整電子數目：負電荷表示電子多了，正電荷表示電子少了。",

    // Writing electron configurations > Additional HL > h3
    "Ions of the d-block metals: 4s goes first": "d 區金屬的離子：4s 電子先走",

    // Writing electron configurations > Additional HL > p
    "When a first-row d-block atom (Sc to Zn) forms a positive ion, <b>the 4s electrons are removed before any 3d electrons</b>. This seems backwards, because 4s filled first. But once the 3d sublevel contains electrons, it is lower in energy than 4s. The 4s electrons are then the outermost and the easiest to remove.": "第一列 d 區原子（Sc 至 Zn）形成正離子時，<b>先移走 4s 電子，然後才移走 3d 電子</b>。這看來次序顛倒了，因為 4s 是先填充的。但 3d 亞層一旦有了電子，能量就比 4s 低。這時 4s 電子在最外面，最容易移走。",

    // Writing electron configurations > Additional HL > p
    "The syllabus places these ions under Structure 3.1 at HL, so you will meet them again there. They also appear in questions on this topic.": "課程大綱把這些離子放在 HL 的 Structure 3.1，所以你會在那裏再遇到它們。這個課題的題目也會考到。",

    // Writing electron configurations > worked example > Additional HL > data-kicker attribute
    "Worked example 4": "例題 4",

    // Writing electron configurations > worked example > Additional HL > h3
    "Iron(II) and iron(III) ions": "鐵(II) 離子和鐵(III) 離子",

    // Writing electron configurations > worked example > Additional HL > p
    "Deduce the condensed electron configurations of <span class=\"chem\">Fe^2+</span> and <span class=\"chem\">Fe^3+</span>.": "推斷 (deduce) <span class=\"chem\">Fe^2+</span> 和 <span class=\"chem\">Fe^3+</span> 的簡寫電子排佈。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Start from the atom": "由原子開始",

    // Writing electron configurations > worked example > Additional HL > p
    "You cannot write the ion without the atom. Do not start from the electron count of the ion and fill from 1s.": "沒有原子的排佈，就寫不出離子的排佈。不要拿離子的電子數目，從 1s 開始逐一填充。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Remove two electrons, from 4s": "從 4s 移走兩個電子",

    // Writing electron configurations > worked example > Additional HL > p
    "For d-block ions, the 4s electrons are lost first.": "d 區離子先失去 4s 電子。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Remove a third electron, from 3d": "從 3d 移走第三個電子",

    // Writing electron configurations > worked example > Additional HL > p
    "4s is now empty, so the next electron comes from 3d.": "4s 已經空了，所以下一個電子來自 3d。",

    // Writing electron configurations > worked example > Additional HL > data-title attribute
    "Check the electron count": "檢查電子數目",

    // Writing electron configurations > worked example > Additional HL > p
    "Fe<sup>2+</sup> should have 26 − 2 = 24 electrons and Fe<sup>3+</sup> should have 26 − 3 = 23.": "Fe<sup>2+</sup> 應有 26 − 2 = 24 個電子，Fe<sup>3+</sup> 應有 26 − 3 = 23 個。",

    // Writing electron configurations > worked example > Additional HL > p
    "Fe<sup>2+</sup> is [Ar] 3d<sup>6</sup> and Fe<sup>3+</sup> is [Ar] 3d<sup>5</sup>.": "Fe<sup>2+</sup> 是 [Ar] 3d<sup>6</sup>，Fe<sup>3+</sup> 是 [Ar] 3d<sup>5</sup>。",

    // Writing electron configurations > common mistake > Additional HL > p
    "Writing <span class=\"chem\">Fe^2+</span> as <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span> removes the electrons from 3d. That is the most common error with these ions. Take them from 4s. For ions of Cr and Cu, start from the real atom configurations (4s<sup>1</sup>): <span class=\"chem\">Cu^2+</span> is <span class=\"mono\">[Ar] 3d<sup>9</sup></span> and <span class=\"chem\">Cr^3+</span> is <span class=\"mono\">[Ar] 3d<sup>3</sup></span>.": "把 <span class=\"chem\">Fe^2+</span> 寫成 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>，是從 3d 移走了電子。這是這類離子最常見的錯誤。電子應從 4s 移走。寫 Cr 和 Cu 的離子時，要由原子真正的電子排佈 (4s<sup>1</sup>) 開始：<span class=\"chem\">Cu^2+</span> 是 <span class=\"mono\">[Ar] 3d<sup>9</sup></span>，<span class=\"chem\">Cr^3+</span> 是 <span class=\"mono\">[Ar] 3d<sup>3</sup></span>。",

    // Writing electron configurations > try it > Additional HL > data-label attribute
    // Writing electron configurations > try it > data-label attribute
    // widget string (assets/js/widgets-s1-3.js)
    "Unpaired electrons": "不成對電子",

    // Writing electron configurations > try it > Additional HL > p
    "How many unpaired electrons are there in an <span class=\"chem\">Fe^3+</span> ion?": "<span class=\"chem\">Fe^3+</span> 離子有多少個不成對電子？",

    // Writing electron configurations > try it > Additional HL > li
    "Write the configuration of the ion first. Which electrons leave an iron atom first?": "先寫出離子的電子排佈。鐵原子最先失去哪些電子？",

    // Writing electron configurations > try it > Additional HL > li
    "<span class=\"chem\">Fe^3+</span> is [Ar] 3d<sup>5</sup>. Put five electrons into five d orbitals using Hund’s rule.": "<span class=\"chem\">Fe^3+</span> 是 [Ar] 3d<sup>5</sup>。按洪特規則把五個電子放進五個 d 軌態。",

    // Writing electron configurations > try it > Additional HL > p
    "Each of the five 3d orbitals holds one electron, so there are <strong>5</strong> unpaired electrons.": "五個 3d 軌態各有一個電子，所以有 <strong>5</strong> 個不成對電子。",

    // Writing electron configurations > try it > p
    "How many unpaired electrons are there in a phosphorus atom (Z = 15) in its ground state?": "基態的磷原子 (Z = 15) 有多少個不成對電子？",

    // Writing electron configurations > try it > li
    "Write the configuration. Only a partly filled sublevel can contain unpaired electrons.": "寫出電子排佈。只有未填滿的亞層才會有不成對電子。",

    // Writing electron configurations > try it > li
    "P is [Ne] 3s<sup>2</sup> 3p<sup>3</sup>. Place three electrons in the three 3p orbitals using Hund’s rule.": "P 是 [Ne] 3s<sup>2</sup> 3p<sup>3</sup>。按洪特規則把三個電子放進三個 3p 軌態。",

    // Writing electron configurations > try it > p
    "Hund’s rule puts one electron in each 3p orbital, so there are <strong>3</strong> unpaired electrons.": "按洪特規則，每個 3p 軌態各有一個電子，所以有 <strong>3</strong> 個不成對電子。",

    // Writing electron configurations > try it > p
    "How many electrons are in the 3d sublevel of a copper atom (Z = 29)?": "銅原子 (Z = 29) 的 3d 亞層有多少個電子？",

    // Writing electron configurations > try it > li
    "Copper is one of the two exceptions. What happens to its 4s sublevel?": "銅是兩個例外之一。它的 4s 亞層有甚麼不同？",

    // Writing electron configurations > try it > li
    "Cu is [Ar] 4s<sup>1</sup> 3d<sup>?</sup>. There are 29 − 18 = 11 electrons after the argon core, and one of them is in 4s.": "Cu 是 [Ar] 4s<sup>1</sup> 3d<sup>?</sup>。氬核心以外有 29 − 18 = 11 個電子，其中一個在 4s。",

    // Writing electron configurations > try it > p
    "The 3d sublevel holds <strong>10</strong> electrons. Following the filling order without the exception would give 9, which is wrong.": "3d 亞層有 <strong>10</strong> 個電子。如果只按填充次序而不理會例外，會得出 9，那是錯的。",

    // Writing electron configurations > data-title attribute
    "Electron configurations: quick check": "電子排佈：快速小測",

    // The convergence limit and ionization energy > Additional HL > data-toc attribute
    "Convergence limit and ionization": "會聚極限與電離",

    // The convergence limit and ionization energy > Additional HL > h2
    "The convergence limit and ionization energy": "會聚極限與電離能",

    // The convergence limit and ionization energy > Additional HL > p
    "Go back to the hydrogen energy levels. The levels converge at n = ∞. An electron that reaches n = ∞ is no longer held by the nucleus. It has left the atom. The atom has been <dfn data-def=\"Turned into an ion by removing (or adding) an electron.\">ionized</dfn>.": "回到氫的能級。能級在 n = ∞ 會聚。到達 n = ∞ 的電子不再受原子核束縛，它已經離開了原子。這個原子已<dfn data-def=\"因移走（或加入）電子而變成離子。\">被電離 <span class=\"en-term\">(ionized)</span></dfn>。",

    // The convergence limit and ionization energy > Additional HL > data-def attribute
    "Turned into an ion by removing (or adding) an electron.": "因移走（或加入）電子而變成離子。",

    // The convergence limit and ionization energy > Additional HL > p
    "The <dfn data-def=\"The minimum energy needed to remove one mole of electrons from one mole of gaseous atoms in their ground state, forming one mole of gaseous 1+ ions.\">first ionization energy</dfn> (first IE) is the minimum energy needed to remove one mole of electrons from one mole of gaseous atoms in their ground state:": "<dfn data-def=\"從一摩爾基態的氣態原子移走一摩爾電子，生成一摩爾氣態 1+ 離子所需的最少能量。\">第一電離能 <span class=\"en-term\">(first ionization energy)</span></dfn>（簡稱第一 IE）是從一摩爾基態的氣態原子移走一摩爾電子所需的最少能量：",

    // The convergence limit and ionization energy > Additional HL > data-def attribute
    "The minimum energy needed to remove one mole of electrons from one mole of gaseous atoms in their ground state, forming one mole of gaseous 1+ ions.": "從一摩爾基態的氣態原子移走一摩爾電子，生成一摩爾氣態 1+ 離子所需的最少能量。",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "one mole of gaseous atoms": "一摩爾氣態原子",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "one mole of gaseous ions with a 1+ charge": "一摩爾帶 1+ 電荷的氣態離子",

    // The convergence limit and ionization energy > equation > Additional HL > dt
    "IE": "IE",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "the energy needed for this change, in <span class=\"unit\">kJ mol-1</span>": "這個變化所需的能量，單位是 <span class=\"unit\">kJ mol-1</span>",

    // The convergence limit and ionization energy > Additional HL > p
    "For hydrogen, that means lifting the electron from n = 1 to n = ∞. Now look at the emission spectrum. The lines from transitions down to n = 1 converge at a limit. A photon at that limit has exactly the energy of a fall from n = ∞ to n = 1. That is the same energy gap as ionization, travelled in the opposite direction.": "對氫來說，這就是把電子由 n = 1 提升到 n = ∞。現在看看發射光譜。落到 n = 1 的躍遷所產生的譜線會聚到一個極限。在這個極限的光子，能量剛好等於由 n = ∞ 落到 n = 1 的能量。這與電離是同一個能量差，只是方向相反。",

    // The convergence limit and ionization energy > key idea > Additional HL > p
    "In an emission spectrum, the limit of convergence at higher frequency corresponds to ionization. Find the frequency or wavelength of that limit, and you can calculate the first ionization energy.": "在發射光譜中，較高頻率處的會聚極限對應電離。求出這個極限的頻率或波長，就可以計算第一電離能。",

    // The convergence limit and ionization energy > Additional HL > p
    "In the hydrogen explorer above, choose “falls from ∞” and “to 1” to see this limit and its calculation.": "在上面的氫能級互動工具中，選擇「從 ∞ 落下」和「落到 1」，就可以看到這個極限和有關計算。",

    // The convergence limit and ionization energy > Additional HL > h3
    "The two equations": "兩條公式",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "energy of one photon <span class=\"unit\">J</span>": "一個光子的能量 <span class=\"unit\">J</span>",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "Planck constant, <span class=\"mono\">6.63 × 10<sup>−34</sup></span> <span class=\"unit\">J s</span>": "普朗克常數，<span class=\"mono\">6.63 × 10<sup>−34</sup></span> <span class=\"unit\">J s</span>",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "frequency <span class=\"unit\">Hz</span> (the same as <span class=\"unit\">s-1</span>)": "頻率 <span class=\"unit\">Hz</span>（即 <span class=\"unit\">s-1</span>）",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "speed of light, <span class=\"mono\">3.00 × 10<sup>8</sup></span> <span class=\"unit\">m s-1</span>": "光速，<span class=\"mono\">3.00 × 10<sup>8</sup></span> <span class=\"unit\">m s-1</span>",

    // The convergence limit and ionization energy > equation > Additional HL > dd
    "wavelength <span class=\"unit\">m</span>": "波長 <span class=\"unit\">m</span>",

    // The convergence limit and ionization energy > data booklet note > Additional HL > p
    "Both equations, and the values of <i>h</i>, <i>c</i> and the Avogadro constant (<span class=\"mono\">6.02 × 10<sup>23</sup></span> <span class=\"unit\">mol-1</span>), are in the data booklet. First ionization energies of the elements are in section 9.": "這兩條公式，以及 <i>h</i>、<i>c</i> 和亞佛加德羅常數 (<span class=\"mono\">6.02 × 10<sup>23</sup></span> <span class=\"unit\">mol-1</span>) 的數值，都在數據手冊內。各元素的第一電離能在第 9 節。",

    // The convergence limit and ionization energy > Additional HL > p
    "<span class=\"mono\">E = hf</span> gives the energy of <b>one photon</b>, which ionizes <b>one atom</b>. Ionization energies are quoted <b>per mole</b> of atoms, in kJ. So there are always two extra steps: multiply by the Avogadro constant, and convert J to kJ.": "<span class=\"mono\">E = hf</span> 得出的是<b>一個光子</b>的能量，它可電離<b>一個原子</b>。電離能則是以<b>每摩爾</b>原子計算，單位是 kJ。所以一定要多做兩步：乘以亞佛加德羅常數，再把 J 換算成 kJ。",

    // The convergence limit and ionization energy > Additional HL > h3
    "Method in words": "文字說明方法",

    // The convergence limit and ionization energy > Additional HL > p
    "<b>From the convergence limit to the first IE:</b>": "<b>由會聚極限求第一 IE：</b>",

    // The convergence limit and ionization energy > Additional HL > li
    "If you are given a wavelength, convert it to metres (<span class=\"mono\">1 nm = 1 × 10<sup>−9</sup> m</span>), then find the frequency with <span class=\"mono\">f = c / λ</span>.": "如果題目給的是波長，先換算成米 (<span class=\"mono\">1 nm = 1 × 10<sup>−9</sup> m</span>)，再用 <span class=\"mono\">f = c / λ</span> 求頻率。",

    // The convergence limit and ionization energy > Additional HL > li
    "Find the energy of one photon with <span class=\"mono\">E = hf</span>. This is in joules, for one atom.": "用 <span class=\"mono\">E = hf</span> 求一個光子的能量。這是一個原子的能量，單位是焦耳。",

    // The convergence limit and ionization energy > Additional HL > li
    "Multiply by <span class=\"mono\">6.02 × 10<sup>23</sup></span> to get joules per mole.": "乘以 <span class=\"mono\">6.02 × 10<sup>23</sup></span>，得出每摩爾的焦耳數。",

    // The convergence limit and ionization energy > Additional HL > li
    "Divide by 1000 to get <span class=\"unit\">kJ mol-1</span>.": "除以 1000，得出 <span class=\"unit\">kJ mol-1</span>。",

    // The convergence limit and ionization energy > Additional HL > p
    "<b>From the first IE to the convergence limit</b> (the same steps, backwards):": "<b>由第一 IE 求會聚極限</b>（步驟相同，次序倒轉）：",

    // The convergence limit and ionization energy > Additional HL > li
    "Multiply by 1000 to convert <span class=\"unit\">kJ mol-1</span> to <span class=\"unit\">J mol-1</span>.": "乘以 1000，把 <span class=\"unit\">kJ mol-1</span> 換算成 <span class=\"unit\">J mol-1</span>。",

    // The convergence limit and ionization energy > Additional HL > li
    "Divide by <span class=\"mono\">6.02 × 10<sup>23</sup></span> to get joules for one atom.": "除以 <span class=\"mono\">6.02 × 10<sup>23</sup></span>，得出一個原子的焦耳數。",

    // The convergence limit and ionization energy > Additional HL > li
    "Find the frequency with <span class=\"mono\">f = E / h</span>.": "用 <span class=\"mono\">f = E / h</span> 求頻率。",

    // The convergence limit and ionization energy > Additional HL > li
    "Find the wavelength with <span class=\"mono\">λ = c / f</span>. Convert to nm if asked.": "用 <span class=\"mono\">λ = c / f</span> 求波長。如果題目要求，就換算成 nm。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-kicker attribute
    "Worked example 5": "例題 5",

    // The convergence limit and ionization energy > worked example > Additional HL > h3
    "From convergence limit to first ionization energy": "由會聚極限求第一電離能",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "In the emission spectrum of hydrogen, the lines from transitions to n = 1 converge at a wavelength of 91.2 nm. Calculate the first ionization energy of hydrogen, in <span class=\"unit\">kJ mol-1</span>.": "在氫的發射光譜中，落到 n = 1 的躍遷所產生的譜線在波長 91.2 nm 處會聚。計算 (calculate) 氫的第一電離能，單位為 <span class=\"unit\">kJ mol-1</span>。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert the wavelength to metres": "把波長換算成米",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "The speed of light is in m s<sup>−1</sup>, so the wavelength must be in m. Nano means × 10<sup>−9</sup>.": "光速的單位是 m s<sup>−1</sup>，所以波長必須以 m 為單位。納 (nano) 表示 × 10<sup>−9</sup>。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Find the frequency": "求頻率",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "E = hf needs a frequency. Rearrange c = λf to get f = c / λ.": "E = hf 需要頻率。把 c = λf 重排成 f = c / λ。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Find the energy for one atom": "求一個原子所需的能量",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "One photon at the limit has the energy needed to ionize one atom. Keep the unrounded frequency in your calculator.": "在會聚極限的一個光子，能量剛好足以電離一個原子。把未經四捨五入的頻率留在計算機內。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Scale up to one mole": "換算成一摩爾",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Ionization energy is per mole of atoms. One mole is 6.02 × 10<sup>23</sup> atoms.": "電離能是以每摩爾原子計算的。一摩爾有 6.02 × 10<sup>23</sup> 個原子。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert J to kJ and round": "把 J 換算成 kJ，並取適當的有效數字",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Divide by 1000. The data have 3 significant figures, so the answer does too.": "除以 1000。數據有 3 位有效數字，所以答案也取 3 位。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "1310 kJ mol<sup>−1</sup> (1.31 × 10<sup>3</sup> kJ mol<sup>−1</sup>). The data booklet value is 1312 kJ mol<sup>−1</sup>, so the answer is sensible.": "1310 kJ mol<sup>−1</sup> (1.31 × 10<sup>3</sup> kJ mol<sup>−1</sup>)。數據手冊的數值是 1312 kJ mol<sup>−1</sup>，所以答案合理。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-kicker attribute
    "Worked example 6": "例題 6",

    // The convergence limit and ionization energy > worked example > Additional HL > h3
    "From first ionization energy to wavelength": "由第一電離能求波長",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "The first ionization energy of sodium is 496 kJ mol<sup>−1</sup>. Calculate the wavelength, in nm, of the convergence limit in the emission spectrum of sodium that corresponds to this ionization.": "鈉的第一電離能是 496 kJ mol<sup>−1</sup>。計算 (calculate) 鈉的發射光譜中，與這次電離對應的會聚極限的波長，單位為 nm。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert kJ to J": "把 kJ 換算成 J",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "The Planck constant is in J s, so the energy must be in J.": "普朗克常數的單位是 J s，所以能量必須以 J 為單位。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "E = hf is about one photon and one atom. Divide by the number of atoms in a mole.": "E = hf 說的是一個光子和一個原子。所以要除以一摩爾的原子數目。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Rearrange E = hf to get f = E / h.": "把 E = hf 重排成 f = E / h。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Find the wavelength": "求波長",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "Rearrange c = λf to get λ = c / f. The answer comes out in metres.": "把 c = λf 重排成 λ = c / f。得出的答案以米為單位。",

    // The convergence limit and ionization energy > worked example > Additional HL > data-title attribute
    "Convert m to nm and round": "把 m 換算成 nm，並取適當的有效數字",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "1 nm = 1 × 10<sup>−9</sup> m, so divide by 10<sup>−9</sup>. Three significant figures in the data.": "1 nm = 1 × 10<sup>−9</sup> m，所以除以 10<sup>−9</sup>。數據有三位有效數字。",

    // The convergence limit and ionization energy > worked example > Additional HL > p
    "241 nm (2.41 × 10<sup>−7</sup> m). This is shorter than 400 nm, so the limit is in the ultraviolet.": "241 nm (2.41 × 10<sup>−7</sup> m)。這比 400 nm 短，所以會聚極限在紫外區。",

    // The convergence limit and ionization energy > common mistake > Additional HL > p
    "Three slips cost most of the marks here. Leaving the wavelength in nm gives a frequency that is 10<sup>9</sup> times too small. Forgetting the Avogadro constant gives an answer that is wrong by a factor of 6.02 × 10<sup>23</sup>. Forgetting kJ ↔ J gives an answer wrong by 1000. Write the unit on every line and you will catch them.": "這類題目失分，多數是因為三種失誤。波長沒有由 nm 換算，頻率會小了 10<sup>9</sup> 倍。忘記亞佛加德羅常數，答案會差 6.02 × 10<sup>23</sup> 倍。忘記 kJ ↔ J 的換算，答案會差 1000 倍。每一行都寫上單位，就能發現這些錯誤。",

    // The convergence limit and ionization energy > exam tip (shown in English + translation) > Additional HL > p
    "This calculation is usually worth 3 marks: one for the energy per atom (the Avogadro constant and the kJ ↔ J step), one for using <span class=\"mono\">E = hf</span>, one for using <span class=\"mono\">c = λf</span>. A wrong early step can still earn later marks if your working is clear, so show every line.": "這類計算通常佔 3 分：一分給每個原子的能量（亞佛加德羅常數和 kJ ↔ J 的換算），一分給運用 <span class=\"mono\">E = hf</span>，一分給運用 <span class=\"mono\">c = λf</span>。只要計算步驟清楚，即使前面某一步錯了，後面的步驟仍可得分，所以每一行都要寫出來。",

    // The convergence limit and ionization energy > try it > Additional HL > p
    "The convergence limit in the emission spectrum of helium that corresponds to its first ionization has a frequency of 5.94 × 10<sup>15</sup> Hz. Calculate the first ionization energy of helium in kJ mol<sup>−1</sup>.": "在氦的發射光譜中，與第一電離對應的會聚極限的頻率是 5.94 × 10<sup>15</sup> Hz。計算氦的第一電離能，單位為 kJ mol<sup>−1</sup>。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "You already have the frequency, so you can skip c = λf. Which equation turns a frequency into an energy?": "題目已經給了頻率，所以可以略過 c = λf。哪一條公式可以由頻率求出能量？",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "<span class=\"mono\">E = hf = 6.63 × 10<sup>−34</sup> × 5.94 × 10<sup>15</sup></span> gives joules for one atom. Then two more steps: per mole, and J to kJ.": "<span class=\"mono\">E = hf = 6.63 × 10<sup>−34</sup> × 5.94 × 10<sup>15</sup></span> 得出一個原子的焦耳數。然後還有兩步：換算成每摩爾，再把 J 換算成 kJ。",

    // The convergence limit and ionization energy > try it > Additional HL > p
    "The data booklet value for helium is 2372 kJ mol<sup>−1</sup>.": "數據手冊中氦的數值是 2372 kJ mol<sup>−1</sup>。",

    // The convergence limit and ionization energy > try it > Additional HL > p
    "The first ionization energy of lithium is 520 kJ mol<sup>−1</sup>. Calculate the wavelength, in nm, of the convergence limit that corresponds to this ionization.": "鋰的第一電離能是 520 kJ mol<sup>−1</sup>。計算與這次電離對應的會聚極限的波長，單位為 nm。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "Work backwards: kJ mol<sup>−1</sup> → J mol<sup>−1</sup> → J for one atom → frequency → wavelength.": "倒過來計算：kJ mol<sup>−1</sup> → J mol<sup>−1</sup> → 一個原子的 J → 頻率 → 波長。",

    // The convergence limit and ionization energy > try it > Additional HL > li
    "Energy for one atom: <span class=\"mono\">520 × 1000 / (6.02 × 10<sup>23</sup>)</span> J. Then <span class=\"mono\">f = E / h</span> and <span class=\"mono\">λ = c / f</span>. Your wavelength will be in metres.": "一個原子的能量：<span class=\"mono\">520 × 1000 / (6.02 × 10<sup>23</sup>)</span> J。然後用 <span class=\"mono\">f = E / h</span> 和 <span class=\"mono\">λ = c / f</span>。得出的波長以米為單位。",

    // The convergence limit and ionization energy > not needed for IB > Additional HL > p
    "You do not need the electronvolt, the photoelectric effect, or calculations that use a formula for the energy of each level. Everything here uses only <span class=\"mono\">E = hf</span>, <span class=\"mono\">c = λf</span> and the Avogadro constant.": "你不需要電子伏特、光電效應，也不需要用各能級能量的公式來計算。這裏的所有計算只用 <span class=\"mono\">E = hf</span>、<span class=\"mono\">c = λf</span> 和亞佛加德羅常數。",

    // The convergence limit and ionization energy > Additional HL > data-title attribute
    "Convergence limit and ionization energy: quick check": "會聚極限與電離能：快速小測",

    // Trends in first ionization energy > Additional HL > data-toc attribute
    // Trends in first ionization energy > Additional HL > h2
    "Trends in first ionization energy": "第一電離能的趨勢",

    // Trends in first ionization energy > Additional HL > p
    "How hard is it to pull the outermost electron off an atom? It depends on how strongly the nucleus attracts that electron. Three things decide that.": "把原子最外層的電子拉走有多難？這要看原子核對這個電子的吸引有多強。有三個因素決定吸引的強弱。",

    // Trends in first ionization energy > Additional HL > li
    "<b>Nuclear charge.</b> More protons means a stronger pull.": "<b>核電荷 (nuclear charge)。</b>質子愈多，引力愈強。",

    // Trends in first ionization energy > Additional HL > li
    "<b>Distance.</b> An electron in a higher main energy level is further from the nucleus, so the pull is weaker.": "<b>距離。</b>電子所在的主能級愈高，離原子核愈遠，引力就愈弱。",

    // Trends in first ionization energy > Additional HL > li
    "<b>Shielding.</b> Electrons in inner main energy levels sit between the nucleus and the outer electron. They repel the outer electron and cancel part of the pull. This is called <dfn data-def=\"The reduction in the attraction between the nucleus and an outer electron, caused by repulsion from electrons in inner energy levels.\">shielding</dfn>.": "<b>屏蔽。</b>內層主能級的電子位於原子核和外層電子之間。它們排斥外層電子，抵消了一部分引力。這稱為<dfn data-def=\"內層能級的電子產生排斥，使原子核與外層電子之間的引力減弱。\">屏蔽 <span class=\"en-term\">(shielding)</span></dfn>。",

    // Trends in first ionization energy > Additional HL > data-def attribute
    "The reduction in the attraction between the nucleus and an outer electron, caused by repulsion from electrons in inner energy levels.": "內層能級的電子產生排斥，使原子核與外層電子之間的引力減弱。",

    // Trends in first ionization energy > widget > Additional HL > data-title attribute
    "First ionization energy, hydrogen to krypton": "第一電離能：由氫至氪",

    // Trends in first ionization energy > widget > Additional HL > figcaption
    "Tap a point or move the slider. The readout compares each element with the one before it (the trend across a period) and the one above it (the trend down a group). Values are from the data booklet.": "輕按圖上的點，或移動滑桿。讀數會把每種元素與前一種元素比較（同一週期的趨勢），也與上方的元素比較（同一族的趨勢）。數值取自數據手冊。",

    // Trends in first ionization energy > Additional HL > h3
    "Across a period: a general increase": "橫越週期：大致遞增",

    // Trends in first ionization energy > Additional HL > p
    "From left to right across a period, each atom has one more proton. The extra electrons go into the same main energy level, so the shielding by inner electrons stays about the same. The outer electrons are pulled in more strongly, and more energy is needed to remove one.": "在同一週期由左至右，每種原子比前一種多一個質子。新增的電子填入同一個主能級，所以內層電子的屏蔽大致不變。外層電子受到更強的引力，移走一個電子就需要更多能量。",

    // Trends in first ionization energy > Additional HL > h3
    "Down a group: a decrease": "沿族向下：遞減",

    // Trends in first ionization energy > Additional HL > p
    "Going down a group, the outer electron is in a higher main energy level each time. It is further from the nucleus and there are more inner electrons shielding it. These two effects outweigh the larger nuclear charge, so less energy is needed to remove it.": "沿族向下，外層電子所在的主能級一次比一次高。它離原子核較遠，而且有較多內層電子屏蔽它。這兩個效應蓋過了核電荷增加的影響，所以移走它所需的能量較少。",

    // Trends in first ionization energy > Additional HL > h3
    "Two discontinuities in each period": "每個週期有兩個不連續處",

    // Trends in first ionization energy > Additional HL > p
    "The increase across a period is not smooth. A <dfn data-def=\"A break in a trend: a point where the value goes the opposite way to the general pattern.\">discontinuity</dfn> is a place where the trend briefly goes the other way. There are two in period 2, and the same two in period 3.": "橫越週期時，電離能並不是平穩地遞增。<dfn data-def=\"趨勢中斷的地方：數值的變化與整體規律相反的一點。\">不連續處 <span class=\"en-term\">(discontinuity)</span></dfn>是趨勢短暫逆轉的地方。第 2 週期有兩個，第 3 週期也有相同的兩個。",

    // Trends in first ionization energy > Additional HL > data-def attribute
    "A break in a trend: a point where the value goes the opposite way to the general pattern.": "趨勢中斷的地方：數值的變化與整體規律相反的一點。",

    // Trends in first ionization energy > table > Additional HL > caption
    "The discontinuities and their explanations": "不連續處及其解釋",

    // Trends in first ionization energy > table > Additional HL > th
    "Where": "位置",

    // Trends in first ionization energy > table > Additional HL > th
    "Data / kJ mol<sup>−1</sup>": "數據 / kJ mol<sup>−1</sup>",

    // Trends in first ionization energy > table > Additional HL > th
    "Electron removed": "被移走的電子",

    // Trends in first ionization energy > table > Additional HL > th
    "Why the second is lower": "為甚麼後者較低",

    // Trends in first ionization energy > table > Additional HL > th
    "Group 2 → 13<br>Be → B, Mg → Al": "第 2 族 → 第 13 族<br>Be → B、Mg → Al",

    // Trends in first ionization energy > table > Additional HL > td
    "Be 900, B 801<br>Mg 738, Al 578": "Be 900、B 801<br>Mg 738、Al 578",

    // Trends in first ionization energy > table > Additional HL > td
    "Be: from 2s<br>B: from 2p": "Be：來自 2s<br>B：來自 2p",

    // Trends in first ionization energy > table > Additional HL > td
    "The p sublevel is higher in energy than the s sublevel of the same main energy level. An electron that starts higher in energy needs less energy to remove.": "在同一個主能級內，p 亞層的能量比 s 亞層高。電子原本的能量較高，移走它所需的能量就較少。",

    // Trends in first ionization energy > table > Additional HL > th
    "Group 15 → 16<br>N → O, P → S": "第 15 族 → 第 16 族<br>N → O、P → S",

    // Trends in first ionization energy > table > Additional HL > td
    "N: from a singly occupied 2p orbital<br>O: from a doubly occupied 2p orbital": "N：來自只有一個電子的 2p 軌態<br>O：來自有兩個電子的 2p 軌態",

    // Trends in first ionization energy > table > Additional HL > td
    "In O, two electrons share one 2p orbital. They repel each other, so one of them is removed more easily.": "在 O 中，兩個電子共用一個 2p 軌態。它們互相排斥，所以其中一個較容易移走。",

    // Trends in first ionization energy > Additional HL > p
    "The orbital diagrams show the second case clearly:": "軌態圖清楚顯示了第二種情況：",

    // Trends in first ionization energy > key idea > Additional HL > p
    "These discontinuities are evidence that main energy levels are divided into sublevels. If n = 2 were a single level, first ionization energy would rise steadily from Li to Ne.": "這些不連續處是證據，證明主能級分為亞層。假如 n = 2 只是單一能級，第一電離能就會由 Li 至 Ne 平穩地上升。",

    // Trends in first ionization energy > worked example > Additional HL > data-kicker attribute
    "Worked example 7": "例題 7",

    // Trends in first ionization energy > worked example > Additional HL > h3
    "Explaining a discontinuity": "解釋不連續處",

    // Trends in first ionization energy > worked example > Additional HL > p
    "(a) Explain why the first ionization energy of boron (801 kJ mol<sup>−1</sup>) is lower than that of beryllium (900 kJ mol<sup>−1</sup>). (b) Explain why the first ionization energy of oxygen (1314 kJ mol<sup>−1</sup>) is lower than that of nitrogen (1402 kJ mol<sup>−1</sup>).": "(a) 解釋 (explain) 為甚麼硼的第一電離能 (801 kJ mol<sup>−1</sup>) 比鈹的 (900 kJ mol<sup>−1</sup>) 低。(b) 解釋為甚麼氧的第一電離能 (1314 kJ mol<sup>−1</sup>) 比氮的 (1402 kJ mol<sup>−1</sup>) 低。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "Write both configurations": "寫出兩者的電子排佈",

    // Trends in first ionization energy > worked example > Additional HL > p
    "The explanation is always about which electron is removed. You cannot see that without the configurations.": "解釋的關鍵永遠是：被移走的是哪一個電子。沒有電子排佈就看不出來。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(a) Name the sublevel each electron leaves": "(a) 指出每個電子離開哪個亞層",

    // Trends in first ionization energy > worked example > Additional HL > p
    "One mark is for identifying the two sublevels.": "其中一分是給指出這兩個亞層的。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "Be loses a 2s electron. B loses a 2p electron.": "Be 失去一個 2s 電子。B 失去一個 2p 電子。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(a) Give the energy reason": "(a) 寫出能量方面的原因",

    // Trends in first ionization energy > worked example > Additional HL > p
    "The second mark is for the reason, stated in terms of the energy of the electron removed.": "第二分是給原因的，要從被移走電子的能量來說明。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "2p is higher in energy than 2s,": "2p 的能量比 2s 高，",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "so less energy is needed to remove the 2p electron.": "所以移走 2p 電子所需的能量較少。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(b) Describe how the 2p orbitals are occupied": "(b) 描述 2p 軌態怎樣被佔用",

    // Trends in first ionization energy > worked example > Additional HL > p
    "Both atoms lose a 2p electron, so the sublevel is not the difference this time. Look at the orbitals.": "兩種原子失去的都是 2p 電子，所以這次的分別不在亞層。要看軌態。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "N: three 2p orbitals, each with one electron.": "N：三個 2p 軌態，各有一個電子。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "O: one 2p orbital holds a pair of electrons.": "O：其中一個 2p 軌態有一對電子。",

    // Trends in first ionization energy > worked example > Additional HL > data-title attribute
    "(b) Give the energy reason": "(b) 寫出能量方面的原因",

    // Trends in first ionization energy > worked example > Additional HL > p
    "Repulsion raises the energy of the paired electron, which makes it easier to remove.": "排斥使成對電子的能量升高，所以較容易移走。",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "The two electrons in the same orbital repel each other,": "同一軌態內的兩個電子互相排斥，",

    // Trends in first ionization energy > worked example > Additional HL > maths line
    "so less energy is needed to remove one of them.": "所以移走其中一個所需的能量較少。",

    // Trends in first ionization energy > worked example > Additional HL > p
    "(a) The electron removed from B is in the 2p sublevel, which is higher in energy than the 2s sublevel that Be loses an electron from, so it is removed more easily. (b) The electron removed from O is paired in a 2p orbital; repulsion between the two electrons in that orbital means it is removed more easily than an electron from one of the singly occupied 2p orbitals in N.": "(a) 從 B 移走的電子在 2p 亞層，Be 失去的電子則在 2s 亞層；2p 亞層的能量比 2s 亞層高，所以 B 的電子較容易移走。(b) 從 O 移走的電子在一個 2p 軌態內成對；該軌態內兩個電子互相排斥，所以它比 N 中只有一個電子的 2p 軌態內的電子較容易移走。",

    // Trends in first ionization energy > exam tip (shown in English + translation) > Additional HL > p
    "Base your explanation on <b>the energy of the electron being removed</b>. Do not write that a half-filled or full sublevel is “specially stable”: the syllabus asks you not to, and examiners have refused that kind of answer. Name the sublevels or orbitals, then say why the electron is easier to remove.": "解釋時要以<b>被移走電子的能量</b>為根據。不要寫半滿或全滿的亞層「特別穩定」：課程大綱要求不用這個說法，考官也曾拒絕接受這類答案。先指出亞層或軌態的名稱，然後說明為甚麼該電子較容易移走。",

    // Trends in first ionization energy > common mistake > Additional HL > p
    "Shielding does not increase across a period, and atoms do not get bigger across a period. The outer electrons are in the same main energy level, so the number of inner, shielding electrons stays the same while the nuclear charge rises.": "橫越週期時，屏蔽不會增加，原子也不會變大。外層電子都在同一個主能級，所以起屏蔽作用的內層電子數目不變，而核電荷則增加。",

    // Trends in first ionization energy > not needed for IB > Additional HL > p
    "You are not asked to calculate an “effective nuclear charge” or to explain the small changes across the d-block (Sc to Zn). The periodic trend in ionization energy comes back in Structure 3.1, with atomic radius and electronegativity. There, the general trend across a period and down a group is also SL content. The discontinuities stay HL only.": "題目不會要求你計算「有效核電荷」，也不會要求你解釋橫越 d 區（Sc 至 Zn）的細微變化。電離能的週期性趨勢會在 Structure 3.1 與原子半徑和電負性一起再出現。在那裏，橫越週期和沿族向下的整體趨勢也屬於 SL 內容。不連續處則仍然只屬 HL。",

    // Trends in first ionization energy > Additional HL > data-title attribute
    "Trends in first ionization energy: quick check": "第一電離能的趨勢：快速小測",

    // Successive ionization energies > Additional HL > data-toc attribute
    // Successive ionization energies > Additional HL > h2
    "Successive ionization energies": "逐級電離能",

    // Successive ionization energies > Additional HL > p
    "You can keep removing electrons from an atom, one at a time. The energies needed are the <dfn data-def=\"The energies needed to remove the first, second, third (and so on) electrons from an atom, one after another.\">successive ionization energies</dfn>: first, second, third and so on. The second ionization energy is for this change:": "你可以繼續從原子移走電子，每次一個。所需的能量就是<dfn data-def=\"從原子逐一移走第一個、第二個、第三個（如此類推）電子所需的能量。\">逐級電離能 <span class=\"en-term\">(successive ionization energies)</span></dfn>：第一、第二、第三，如此類推。第二電離能對應以下的變化：",

    // Successive ionization energies > Additional HL > data-def attribute
    "The energies needed to remove the first, second, third (and so on) electrons from an atom, one after another.": "從原子逐一移走第一個、第二個、第三個（如此類推）電子所需的能量。",

    // Successive ionization energies > equation > Additional HL > dd
    "one mole of gaseous 1+ ions": "一摩爾氣態 1+ 離子",

    // Successive ionization energies > equation > Additional HL > dd
    "one mole of gaseous 2+ ions": "一摩爾氣態 2+ 離子",

    // Successive ionization energies > Additional HL > h3
    "Two patterns to explain": "兩個需要解釋的規律",

    // Successive ionization energies > Additional HL > p
    "<b>They always increase.</b> Each electron is pulled away from an ion with a greater positive charge than the last. The same nuclear charge attracts fewer electrons, and there is less repulsion between the electrons that remain. The remaining electrons are held more strongly.": "<b>數值一定遞增。</b>每移走一個電子，離子的正電荷都比上一次大。同樣的核電荷吸引較少的電子，而餘下電子之間的排斥也較小。所以餘下的電子被吸引得更緊。",

    // Successive ionization energies > Additional HL > p
    "<b>Sometimes there is a large jump.</b> A large jump means the next electron comes from a main energy level closer to the nucleus. That electron is nearer to the nucleus and has fewer inner electrons shielding it, so it is held far more strongly.": "<b>有時會出現大幅躍升。</b>大幅躍升表示下一個電子來自較接近原子核的主能級。這個電子離原子核較近，屏蔽它的內層電子也較少，所以被吸引得緊得多。",

    // Successive ionization energies > key idea > Additional HL > p
    "Count the electrons removed <b>before</b> the first large jump. That is the number of electrons in the outer main energy level, and it tells you the group. One electron before the jump: group 1. Three before the jump: group 13.": "數出在第一次大幅躍升<b>之前</b>移走了多少個電子。這就是最外層主能級的電子數目，由此可知元素所屬的族。躍升前有一個電子：第 1 族。躍升前有三個：第 13 族。",

    // Successive ionization energies > widget > Additional HL > data-title attribute
    "Successive ionization energies detective": "逐級電離能偵探",

    // Successive ionization energies > widget > Additional HL > figcaption
    "Choose an element and find the large jumps. The brackets show which main energy level each electron comes from. Switch the scale from log(IE) to IE to see why a log scale is used. Then choose “Mystery element” and deduce its group.": "選擇一種元素，找出大幅躍升的位置。括線顯示每個電子來自哪一個主能級。把標度由 log(IE) 轉為 IE，看看為甚麼要用對數標度。然後選擇「神秘元素」，推斷它所屬的族。",

    // Successive ionization energies > Additional HL > h3
    "Why the graph uses a log scale": "為甚麼圖表用對數標度",

    // Successive ionization energies > Additional HL > p
    "Successive ionization energies cover a huge range. For sodium, the first is 496 kJ mol<sup>−1</sup> and the last is 159 076 kJ mol<sup>−1</sup>. On an ordinary scale, the small early values are squashed flat against the axis and the jumps among them disappear. Plotting <span class=\"mono\">log(IE)</span> compresses the range, so every jump is visible on one graph.": "逐級電離能的範圍極大。以鈉為例，第一個是 496 kJ mol<sup>−1</sup>，最後一個是 159 076 kJ mol<sup>−1</sup>。用普通標度時，前面的小數值會被壓扁，緊貼着軸，它們之間的躍升就看不見了。改為繪畫 <span class=\"mono\">log(IE)</span> 可以把範圍壓縮，於是在同一幅圖上能看到每一次躍升。",

    // Successive ionization energies > Additional HL > p
    "A log scale also shows what matters: how many <em>times</em> bigger each value is than the one before, not how many kJ bigger.": "對數標度還能顯示真正重要的事：每個數值是前一個的多少<em>倍</em>，而不是大了多少 kJ。",

    // Successive ionization energies > worked example > Additional HL > data-kicker attribute
    "Worked example 8": "例題 8",

    // Successive ionization energies > worked example > Additional HL > h3
    "Deducing the group from data": "由數據推斷族",

    // Successive ionization energies > worked example > Additional HL > p
    "The first six successive ionization energies of a period 3 element X, in kJ mol<sup>−1</sup>, are: <span class=\"mono\">738, 1451, 7733, 10 543, 13 630, 18 020</span>. Deduce the group of X, identify X, and state its electron configuration.": "第 3 週期元素 X 的首六個逐級電離能（單位為 kJ mol<sup>−1</sup>）是：<span class=\"mono\">738, 1451, 7733, 10 543, 13 630, 18 020</span>。推斷 (deduce) X 所屬的族，指出 X 是哪一種元素 (identify)，並寫出 (state) 它的電子排佈。",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Compare each value with the one before": "把每個數值與前一個比較",

    // Successive ionization energies > worked example > Additional HL > p
    "You are looking for one step that is much bigger than the others. Divide each value by the previous one.": "你要找的是比其他都大得多的一級。把每個數值除以前一個數值。",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Locate the large jump": "找出大幅躍升的位置",

    // Successive ionization energies > worked example > Additional HL > p
    "Most steps are less than 2 times. One step is more than 5 times.": "大部分的增幅都少於 2 倍。有一級多於 5 倍。",

    // Successive ionization energies > worked example > Additional HL > maths line
    "Large jump between the 2nd and 3rd ionization energies": "大幅躍升在第 2 和第 3 電離能之間",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Count the electrons before the jump": "數出躍升前的電子數目",

    // Successive ionization energies > worked example > Additional HL > p
    "Electrons removed before the jump are in the outer main energy level. The third electron comes from the next level in.": "躍升前移走的電子在最外層主能級。第三個電子來自再裏面的一個能級。",

    // Successive ionization energies > worked example > Additional HL > maths line
    "2 outer electrons → <b>group 2</b>": "2 個外層電子 → <b>第 2 族</b>",

    // Successive ionization energies > worked example > Additional HL > data-title attribute
    "Identify the element and write its configuration": "指出是哪一種元素，並寫出它的電子排佈",

    // Successive ionization energies > worked example > Additional HL > p
    "Period 3 means the outer electrons are in n = 3. Group 2 means there are two of them, in 3s.": "第 3 週期表示外層電子在 n = 3。第 2 族表示外層電子有兩個，在 3s。",

    // Successive ionization energies > worked example > Additional HL > p
    "X is in group 2. It is magnesium, 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>.": "X 屬於第 2 族。它是鎂，1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>。",

    // Successive ionization energies > common mistake > Additional HL > p
    "Two slips to avoid. First, off by one: if the jump is between the 3rd and 4th values, the element has 3 outer electrons, not 4. Second, do not judge by the size of the gap in kJ. In the magnesium data the gap from the 8th to the 9th value is 5992 kJ mol<sup>−1</sup>, almost as big as the true jump (6282 kJ mol<sup>−1</sup>), but it is only a 1.23 times increase.": "有兩種失誤要避免。第一，數錯一個：如果躍升在第 3 和第 4 個數值之間，元素有 3 個外層電子，不是 4 個。第二，不要按相差多少 kJ 來判斷。在鎂的數據中，第 8 和第 9 個數值相差 5992 kJ mol<sup>−1</sup>，幾乎與真正的躍升 (6282 kJ mol<sup>−1</sup>) 一樣大，但其實只增至 1.23 倍。",

    // Successive ionization energies > exam tip (shown in English + translation) > Additional HL > p
    "Give the IUPAC group number. Three outer electrons means group <b>13</b>, not group 3. Five means group 15. To explain a jump, write: the electron is removed from a main energy level <b>closer to the nucleus</b>, with <b>less shielding</b>, so it is attracted more strongly.": "寫出 IUPAC 的族編號。三個外層電子表示第 <b>13</b> 族，不是第 3 族。五個表示第 15 族。解釋躍升時要寫：該電子是從<b>較接近原子核</b>的主能級移走的，受到的<b>屏蔽較少</b>，所以被吸引得較強。",

    // Successive ionization energies > try it > Additional HL > data-label attribute
    "Group number": "族編號",

    // Successive ionization energies > try it > Additional HL > p
    "The first seven successive ionization energies of an element, in kJ mol<sup>−1</sup>, are: <span class=\"mono\">1012, 1907, 2914, 4964, 6274, 21 267, 25 431</span>. Which group of the periodic table is the element in?": "某元素的首七個逐級電離能（單位為 kJ mol<sup>−1</sup>）是：<span class=\"mono\">1012, 1907, 2914, 4964, 6274, 21 267, 25 431</span>。這種元素屬於週期表的哪一族？",

    // Successive ionization energies > try it > Additional HL > li
    "Find the step where the value becomes several times bigger. Count how many electrons were removed before it.": "找出數值變成前一個的好幾倍的那一級。數一數在它之前移走了多少個電子。",

    // Successive ionization energies > try it > Additional HL > li
    "The large jump is from 6274 to 21 267, between the 5th and 6th values. So there are 5 outer electrons. Which group has 5 outer electrons?": "大幅躍升是由 6274 到 21 267，在第 5 和第 6 個數值之間。所以有 5 個外層電子。哪一族有 5 個外層電子？",

    // Successive ionization energies > try it > Additional HL > maths line
    "21 267 / 6274 = 3.39 (all other steps are less than 2 times)": "21 267 / 6274 = 3.39（其他各級都少於 2 倍）",

    // Successive ionization energies > try it > Additional HL > p
    "The jump comes after the 5th electron, so the element has 5 outer electrons. It is in group <strong>15</strong>. (The data are for phosphorus.)": "躍升出現在第 5 個電子之後，所以這種元素有 5 個外層電子。它屬於第 <strong>15</strong> 族。（這是磷的數據。）",

    // Successive ionization energies > not needed for IB > Additional HL > p
    "You never need to remember ionization energy values. Questions give you the data, as a table or a graph. Databases are a good source if you want to plot your own.": "你永遠不用背電離能的數值。題目會以表格或圖表給你數據。如果你想自己繪圖，數據庫是很好的數據來源。",

    // Successive ionization energies > Additional HL > data-title attribute
    "Successive ionization energies: quick check": "逐級電離能：快速小測",

    // Linking it up > h2
    "Linking it up": "融會貫通",

    // Linking it up > p
    "The syllabus asks questions that connect this topic to others. Here are short answers to four of them.": "課程大綱設有一些問題，把這個課題與其他課題連繫起來。以下是其中四個問題的簡短答案。",

    // Linking it up > h3
    "How do emission spectra provide evidence for the existence of different elements?": "發射光譜怎樣為不同元素的存在提供證據？",

    // Linking it up > p
    "Every element has its own set of energy levels, because every element has a different nuclear charge and a different number of electrons. So every element emits its own pattern of lines, like a fingerprint. A set of lines that matches no known element points to a new one. Helium was detected in the spectrum of the Sun before it was found on Earth.": "每種元素的核電荷和電子數目都不同，所以各有自己的一組能級。因此每種元素都發射自己獨有的譜線圖樣，就像指紋一樣。如果一組譜線與任何已知元素都不吻合，就顯示有新元素。氦是先在太陽的光譜中被發現，然後才在地球上找到的。",

    // Linking it up > h3
    "How does an element’s highest main energy level relate to its period number?": "元素的最高主能級與它的週期數有甚麼關係？",

    // Linking it up > p
    "They are the same number. Sodium is <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>. Its highest occupied main energy level is n = 3, and it is in period 3. You will use this in Structure 3.1.": "兩者是同一個數。鈉是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></span>。它有電子佔用的最高主能級是 n = 3，而它在第 3 週期。你會在 Structure 3.1 用到這一點。",

    // Linking it up > h3
    "What is the relationship between energy sublevels and the blocks of the periodic table?": "能量亞層與週期表的區有甚麼關係？",

    // Linking it up > p
    "The block tells you which type of sublevel is being filled. Groups 1 and 2 are the s-block. Groups 13 to 18 are the p-block. Groups 3 to 12 are the d-block. The widths match the sublevels: 2 columns for s (2 electrons), 6 for p, 10 for d. This is developed in Structure 3.1.": "區告訴你正在填充的是哪一種亞層。第 1 和第 2 族是 s 區。第 13 至 18 族是 p 區。第 3 至 12 族是 d 區。區的寬度與亞層吻合：s 區有 2 行（2 個電子），p 區有 6 行，d 區有 10 行。Structure 3.1 會進一步說明。",

    // Linking it up > Additional HL > h3
    "Why are log scales useful when discussing ionization energies and [H<sup>+</sup>]?": "討論電離能和 [H<sup>+</sup>] 時，為甚麼對數標度有用？",

    // Linking it up > Additional HL > p
    "Both quantities range over many powers of ten. A log scale turns “ten times bigger” into “one unit higher”, so very large and very small values fit on one readable axis. For ionization energies that makes the jumps visible. For hydrogen ion concentration it gives the pH scale, which you will meet in Reactivity 3.1.": "這兩個量的範圍都橫跨很多個 10 的次方。對數標度把「大十倍」變成「高一個單位」，所以極大和極小的數值可以放在同一條易讀的軸上。對電離能來說，這樣可以看清躍升。對氫離子濃度來說，這樣就得出 pH 標度，你會在 Reactivity 3.1 學到。",

    // Linking it up > Additional HL > h3
    "How do successive ionization energies help to explain variable oxidation states?": "逐級電離能怎樣幫助解釋可變的氧化態？",

    // Linking it up > Additional HL > p
    "For a first-row transition element, the 4s and 3d electrons are close in energy, so the first few successive ionization energies rise gradually with no large jump between them. Several different numbers of electrons can be lost for a similar energy cost. That is why iron forms both <span class=\"chem\">Fe^2+</span> and <span class=\"chem\">Fe^3+</span>. This is developed in Structure 3.1 at HL.": "第一列過渡元素的 4s 和 3d 電子能量接近，所以最初幾個逐級電離能逐步上升，之間沒有大幅躍升。失去不同數目的電子，所需的能量代價相近。這就是鐵可以形成 <span class=\"chem\">Fe^2+</span> 和 <span class=\"chem\">Fe^3+</span> 的原因。HL 的 Structure 3.1 會進一步說明。",

    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. You get feedback after each question, and questions you have not yet answered correctly come up first.": "共三組題目，由入門到進階。每答完一題都有回饋，而你尚未答對的題目會先出現。",

    // Exam-style practice > data-title attribute
    "1.3 Foundation: one idea at a time": "1.3 基礎：每次一個概念",

    // Exam-style practice > data-title attribute
    "1.3 Exam standard": "1.3 考試程度",

    // Exam-style practice > data-title attribute
    "1.3 Challenge": "1.3 挑戰",

    // Exam-style practice > Additional HL > data-title attribute
    "1.3 Additional HL only: ionization energies": "1.3 只限 HL 附加內容：電離能",

    // widget string (assets/js/widgets-s1-3.js)
    "violet": "紫",

    // widget string (assets/js/widgets-s1-3.js)
    "blue": "藍",

    // widget string (assets/js/widgets-s1-3.js)
    "green": "綠",

    // widget string (assets/js/widgets-s1-3.js)
    "yellow": "黃",

    // widget string (assets/js/widgets-s1-3.js)
    "orange": "橙",

    // widget string (assets/js/widgets-s1-3.js)
    "red": "紅",

    // widget string (assets/js/widgets-s1-3.js)
    "ultraviolet": "紫外",

    // widget string (assets/js/widgets-s1-3.js)
    "infrared": "紅外",

    // widget string (assets/js/widgets-s1-3.js)
    "Colour": "顏色",

    // widget string (assets/js/widgets-s1-3.js)
    "Compared with red light (700 nm)": "與紅光 (700 nm) 比較",

    // widget string (assets/js/widgets-s1-3.js)
    "Hydrogen at this wavelength": "氫在這個波長",

    // widget string (assets/js/widgets-s1-3.js)
    "Two spectra on the same wavelength scale from 400 to 700 nanometres. The top strip is a continuous spectrum: an unbroken band of colour from violet to red. The bottom strip is the line emission spectrum of hydrogen: four separate bright lines at 410, 434, 486 and 656 nanometres on a dark background.": "兩個光譜畫在同一個 400 至 700 納米的波長標度上。上面一條是連續光譜：由紫至紅、沒有間斷的色帶。下面一條是氫的線發射光譜：黑暗背景上有四條分開的亮線，位於 410、434、486 和 656 納米。",

    // widget string (assets/js/widgets-s1-3.js)
    "Continuous spectrum": "連續光譜",

    // widget string (assets/js/widgets-s1-3.js)
    "Line emission spectrum of hydrogen": "氫的線發射光譜",

    // widget string (assets/js/widgets-s1-3.js)
    "wavelength / nm": "波長 / nm",

    // widget string (assets/js/widgets-s1-3.js)
    "← higher frequency, higher energy": "← 頻率較高，能量較高",

    // widget string (assets/js/widgets-s1-3.js)
    "{colour}, {nm} nm": "{colour}，{nm} nm",

    // widget string (assets/js/widgets-s1-3.js)
    "This is the red end of the visible spectrum: the longest wavelength, lowest frequency and lowest energy per photon that you can see.": "這是可見光譜的紅色一端：在你看得見的光之中，波長最長、頻率最低、每個光子的能量最低。",

    // widget string (assets/js/widgets-s1-3.js)
    "Shorter wavelength, so higher frequency and more energy per photon.": "波長較短，所以頻率較高，每個光子的能量較多。",

    // widget string (assets/js/widgets-s1-3.js)
    "Bright line. Hydrogen atoms emit light of {nm} nm.": "亮線。氫原子發射 {nm} nm 的光。",

    // widget string (assets/js/widgets-s1-3.js)
    "Dark. Hydrogen atoms emit no light of this wavelength. The continuous spectrum has light here.": "暗。氫原子不發射這個波長的光。連續光譜在這裏有光。",

    // widget string (assets/js/widgets-s1-3.js)
    "n equals infinity": "n 等於無限大",

    // widget string (assets/js/widgets-s1-3.js)
    "n equals {n}": "n 等於 {n}",

    // widget string (assets/js/widgets-s1-3.js)
    "Electron falls from n =": "電子從 n =",

    // widget string (assets/js/widgets-s1-3.js)
    "to n =": "落到 n =",

    // widget string (assets/js/widgets-s1-3.js)
    "Show every line in this series": "顯示這個線系的所有譜線",

    // widget string (assets/js/widgets-s1-3.js)
    "Clear my lines": "清除我的譜線",

    // widget string (assets/js/widgets-s1-3.js)
    "Transition": "躍遷",

    // widget string (assets/js/widgets-s1-3.js)
    "What it shows": "說明",

    // widget string (assets/js/widgets-s1-3.js)
    "Energy-level diagram of the hydrogen atom, drawn to scale. Level n = 1 is far below the others. Levels n = 2 to n = 6 get closer and closer together and converge at n = infinity, where the energy is zero. Downward arrows show the transitions you have chosen.": "按比例繪畫的氫原子能級圖。n = 1 能級遠低於其他能級。n = 2 至 n = 6 的能級愈來愈接近，在 n = 無限大處會聚，那裏的能量為零。向下的箭嘴顯示你選擇的躍遷。",

    // widget string (assets/js/widgets-s1-3.js)
    "energy": "能量",

    // widget string (assets/js/widgets-s1-3.js)
    "energy / {unit}": "能量 / {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "Arrow: electron falls, photon emitted": "箭嘴：電子落下，發射光子",

    // widget string (assets/js/widgets-s1-3.js)
    "Each arrow: one electron falls and one photon is emitted": "每個箭嘴：一個電子落下，發射一個光子",

    // widget string (assets/js/widgets-s1-3.js)
    "Spectrum strip for the chosen series, plotted against frequency. The lines get closer together towards high frequency and stop at the convergence limit.": "所選線系的光譜條，按頻率繪畫。譜線愈向高頻率愈靠近，到會聚極限為止。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lines from transitions down to n = {n}": "落到 n = {n} 的躍遷所產生的譜線",

    // widget string (assets/js/widgets-s1-3.js)
    "Dark band: visible light. Paler band on the right: ultraviolet.": "深色帶：可見光。右邊較淺的色帶：紫外。",

    // widget string (assets/js/widgets-s1-3.js)
    "All of these lines are ultraviolet (not visible).": "這些譜線全部屬於紫外（看不見）。",

    // widget string (assets/js/widgets-s1-3.js)
    "All of these lines are infrared (not visible).": "這些譜線全部屬於紅外（看不見）。",

    // widget string (assets/js/widgets-s1-3.js)
    "from n =": "來自 n =",

    // widget string (assets/js/widgets-s1-3.js)
    "frequency and energy increase →": "頻率和能量遞增 →",

    // widget string (assets/js/widgets-s1-3.js)
    "visible, blue (close to green)": "可見光，藍（接近綠）",

    // widget string (assets/js/widgets-s1-3.js)
    "visible, blue (close to violet)": "可見光，藍（接近紫）",

    // widget string (assets/js/widgets-s1-3.js)
    "visible, {colour}": "可見光，{colour}",

    // widget string (assets/js/widgets-s1-3.js)
    "This is the convergence limit of the series. The lines crowd together and stop here, because the energy levels themselves converge at n = ∞.": "這是這個線系的會聚極限。譜線擠在一起，到這裏為止，因為能級本身在 n = ∞ 會聚。",

    // widget string (assets/js/widgets-s1-3.js)
    "Drops to n = 1 are the largest, so these photons have the most energy. All of these lines are ultraviolet.": "落到 n = 1 的能量下降最大，所以這些光子的能量最多。這些譜線全部屬於紫外。",

    // widget string (assets/js/widgets-s1-3.js)
    "A drop to n = 2 from n = 3, 4, 5 or 6 gives one of the four visible lines. A bigger drop gives a shorter wavelength.": "由 n = 3、4、5 或 6 落到 n = 2，會得出四條可見光譜線之一。能量下降愈大，波長愈短。",

    // widget string (assets/js/widgets-s1-3.js)
    "Drops to n = 2 from levels above n = 6 fall just outside the visible region, in the ultraviolet.": "由 n = 6 以上的能級落到 n = 2，譜線剛好落在可見光區以外，屬於紫外。",

    // widget string (assets/js/widgets-s1-3.js)
    "Drops to n = 3 are small, so these photons have little energy. All of these lines are infrared.": "落到 n = 3 的能量下降很小，所以這些光子的能量很少。這些譜線全部屬於紅外。",

    // widget string (assets/js/widgets-s1-3.js)
    "This limit is for electrons falling to n = 1, the ground state. So this energy is the first ionization energy of hydrogen. The data booklet value is 1312 {unit}.": "這個極限屬於落到 n = 1（基態）的電子。所以這個能量就是氫的第一電離能。數據手冊的數值是 1312 {unit}。",

    // widget string (assets/js/widgets-s1-3.js)
    "This limit belongs to electrons falling to n = {n}. It is the energy needed to remove an electron that starts in n = {n}, not the first ionization energy. For that you need the limit of the lines ending on n = 1.": "這個極限屬於落到 n = {n} 的電子。它是移走原本在 n = {n} 的電子所需的能量，不是第一電離能。要求第一電離能，需要落到 n = 1 的譜線的極限。",

    // widget string (assets/js/widgets-s1-3.js)
    "This matches the gap between the two levels on the diagram. The wavelength is rounded to 3 significant figures, so the last digit can differ by 1.": "這與圖中兩個能級之間的能量差吻合。波長已取至 3 位有效數字，所以最後一位可能相差 1。",

    // widget string (assets/js/widgets-s1-3.js)
    "Additional HL": "HL 附加內容",

    // widget string (assets/js/widgets-s1-3.js)
    "Calculate this limit step by step": "逐步計算這個極限",

    // widget string (assets/js/widgets-s1-3.js)
    "Calculate this photon step by step": "逐步計算這個光子",

    // widget string (assets/js/widgets-s1-3.js)
    "{E} J per photon": "每個光子 {E} J",

    // widget string (assets/js/widgets-s1-3.js)
    "per mole: {E} J × 6.02 × 10<sup>23</sup> mol<sup>−1</sup> ÷ 1000 = {m} {unit}": "每摩爾：{E} J × 6.02 × 10<sup>23</sup> mol<sup>−1</sup> ÷ 1000 = {m} {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "s orbital": "s 軌態",

    // widget string (assets/js/widgets-s1-3.js)
    "Sphere. The same in every direction.": "球形。各個方向都一樣。",

    // widget string (assets/js/widgets-s1-3.js)
    "An s orbital: a sphere centred on the nucleus, where the x, y and z axes cross.": "s 軌態：以原子核為中心的球形，原子核位於 x、y、z 軸相交的一點。",

    // widget string (assets/js/widgets-s1-3.js)
    "p<sub>x</sub> orbital": "p<sub>x</sub> 軌態",

    // widget string (assets/js/widgets-s1-3.js)
    "Dumbbell along the x axis.": "沿 x 軸的啞鈴形。",

    // widget string (assets/js/widgets-s1-3.js)
    "A p x orbital: a dumbbell of two lobes lying along the x axis, one on each side of the nucleus.": "p x 軌態：啞鈴形，兩瓣沿 x 軸伸展，原子核兩邊各有一瓣。",

    // widget string (assets/js/widgets-s1-3.js)
    "p<sub>y</sub> orbital": "p<sub>y</sub> 軌態",

    // widget string (assets/js/widgets-s1-3.js)
    "Dumbbell along the y axis.": "沿 y 軸的啞鈴形。",

    // widget string (assets/js/widgets-s1-3.js)
    "A p y orbital: a dumbbell of two lobes lying along the y axis.": "p y 軌態：啞鈴形，兩瓣沿 y 軸伸展。",

    // widget string (assets/js/widgets-s1-3.js)
    "p<sub>z</sub> orbital": "p<sub>z</sub> 軌態",

    // widget string (assets/js/widgets-s1-3.js)
    "Dumbbell along the z axis.": "沿 z 軸的啞鈴形。",

    // widget string (assets/js/widgets-s1-3.js)
    "A p z orbital: a dumbbell of two lobes lying along the z axis.": "p z 軌態：啞鈴形，兩瓣沿 z 軸伸展。",

    // widget string (assets/js/widgets-s1-3.js)
    "Element": "元素",

    // widget string (assets/js/widgets-s1-3.js)
    "Atom or ion": "原子或離子",

    // widget string (assets/js/widgets-s1-3.js)
    "{symbol}{charge} ion": "{symbol}{charge} 離子",

    // widget string (assets/js/widgets-s1-3.js)
    "{symbol} atom": "{symbol} 原子",

    // widget string (assets/js/widgets-s1-3.js)
    "Mode": "模式",

    // widget string (assets/js/widgets-s1-3.js)
    "Show me": "示範",

    // widget string (assets/js/widgets-s1-3.js)
    "Fill it yourself": "自己填",

    // widget string (assets/js/widgets-s1-3.js)
    "Next arrow": "下一個箭嘴",

    // widget string (assets/js/widgets-s1-3.js)
    "spin up": "自旋向上",

    // widget string (assets/js/widgets-s1-3.js)
    "spin down": "自旋向下",

    // widget string (assets/js/widgets-s1-3.js)
    "Undo": "復原",

    // widget string (assets/js/widgets-s1-3.js)
    "Clear": "清除",

    // widget string (assets/js/widgets-s1-3.js)
    "Last electron removed.": "已移走最後一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram": "軌態圖",

    // widget string (assets/js/widgets-s1-3.js)
    "Full configuration": "完整電子排佈",

    // widget string (assets/js/widgets-s1-3.js)
    "Condensed configuration": "簡寫電子排佈",

    // widget string (assets/js/widgets-s1-3.js)
    "Click an orbital box to add an electron. Start with the lowest-energy sublevel. Choose the arrow direction with <b>Next arrow</b>.": "按軌態方格加入一個電子。由能量最低的亞層開始。用<b>下一個箭嘴</b>選擇箭嘴的方向。",

    // widget string (assets/js/widgets-s1-3.js)
    "A hydrogen atom has only 1 electron. It is already placed.": "氫原子只有 1 個電子，已經放好了。",

    // widget string (assets/js/widgets-s1-3.js)
    "A {name} atom has only {n} electrons. They are all placed.": "{name}原子只有 {n} 個電子，已經全部放好了。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Pauli exclusion principle broken.</b> An orbital can hold at most two electrons. This one is full.": "<b>違反了泡利不相容原理。</b>一個軌態最多容納兩個電子。這個軌態已經滿了。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Pauli exclusion principle broken.</b> Two electrons in the same orbital must have opposite spins. Switch <b>Next arrow</b> to the other direction.": "<b>違反了泡利不相容原理。</b>同一軌態內的兩個電子必須自旋相反。把<b>下一個箭嘴</b>轉為另一個方向。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Aufbau principle broken.</b> Electrons go into the lowest-energy sublevel that has space. The {lower} sublevel is lower in energy than {sub} and is not full yet.": "<b>違反了構築原理。</b>電子要填入仍有空位而能量最低的亞層。{lower} 亞層的能量比 {sub} 低，而且還未填滿。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Hund’s rule broken.</b> Every orbital in a sublevel gets one electron before any orbital gets a second. There is still an empty {sub} orbital.": "<b>違反了洪特規則。</b>同一亞層內，每個軌態先各得一個電子，之後才有軌態得到第二個。現在還有一個空的 {sub} 軌態。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Hund’s rule broken.</b> Single electrons in the same sublevel have parallel spins, so their arrows point the same way. Switch <b>Next arrow</b>.": "<b>違反了洪特規則。</b>同一亞層內單獨的電子自旋平行，所以箭嘴方向相同。請轉換<b>下一個箭嘴</b>的方向。",

    // widget string (assets/js/widgets-s1-3.js)
    "Electron added to {sub}. Electrons still to place: {n}.": "已把電子加入 {sub}。尚要放置的電子：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Complete.</b> This is the ground-state configuration of {name}: {config}. You used the exception: one electron in 4s.": "<b>完成。</b>這是{name}的基態電子排佈：{config}。你用上了例外：4s 只有一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Complete.</b> This is the ground-state configuration of {name}: {config}.": "<b>完成。</b>這是{name}的基態電子排佈：{config}。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Nearly.</b> This is what the filling order predicts, but {name} is one of the two exceptions you must know. Its real configuration is {config}. Press Undo to take one electron out of 4s, then put it in 3d.": "<b>差一點。</b>這是按填充次序預測的結果，但{name}是你必須記住的兩個例外之一。它真正的電子排佈是 {config}。按「復原」從 4s 取出一個電子，再把它放進 3d。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, empty. Add an electron.": "{sub} 軌態 {i}，空的。加入一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, empty. Add an electron.": "{sub} 軌態，空的。加入一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, full with 2 electrons.": "{sub} 軌態 {i}，已有 2 個電子，滿了。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, full with 2 electrons.": "{sub} 軌態，已有 2 個電子，滿了。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, 1 electron with spin up. Add an electron.": "{sub} 軌態 {i}，有 1 個自旋向上的電子。加入一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, 1 electron with spin up. Add an electron.": "{sub} 軌態，有 1 個自旋向上的電子。加入一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital {i}, 1 electron with spin down. Add an electron.": "{sub} 軌態 {i}，有 1 個自旋向下的電子。加入一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} orbital, 1 electron with spin down. Add an electron.": "{sub} 軌態，有 1 個自旋向下的電子。加入一個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "energy (not to scale)": "能量（不按比例）",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram you are filling for a {name} atom. {done} of {n} electrons placed.": "你正在為{name}原子填寫的軌態圖。已放置 {done} / {n} 個電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{done} of {n} electrons placed": "已放置 {done} / {n} 個電子",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram for {species}. Electrons in each sublevel: {list}.": "{species} 的軌態圖。各亞層的電子數目：{list}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Orbital diagram for {species}. It has no electrons.": "{species} 的軌態圖。它沒有電子。",

    // widget string (assets/js/widgets-s1-3.js)
    "no electrons": "沒有電子",

    // widget string (assets/js/widgets-s1-3.js)
    "none: no noble gas comes before this element": "沒有：這種元素之前沒有貴氣體",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Exception.</b> Chromium is 4s<sup>1</sup> 3d<sup>5</sup>, not 4s<sup>2</sup> 3d<sup>4</sup>. The 4s and 3d sublevels are very close in energy, and for this atom the arrangement with one 4s electron has the lower energy. Cr and Cu are the only two exceptions you need to know.": "<b>例外。</b>鉻是 4s<sup>1</sup> 3d<sup>5</sup>，不是 4s<sup>2</sup> 3d<sup>4</sup>。4s 和 3d 亞層的能量十分接近，對這種原子來說，4s 只有一個電子的排佈能量較低。你只需知道 Cr 和 Cu 這兩個例外。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Exception.</b> Copper is 4s<sup>1</sup> 3d<sup>10</sup>, not 4s<sup>2</sup> 3d<sup>9</sup>. The 4s and 3d sublevels are very close in energy, and for this atom the arrangement with one 4s electron has the lower energy. Cr and Cu are the only two exceptions you need to know.": "<b>例外。</b>銅是 4s<sup>1</sup> 3d<sup>10</sup>，不是 4s<sup>2</sup> 3d<sup>9</sup>。4s 和 3d 亞層的能量十分接近，對這種原子來說，4s 只有一個電子的排佈能量較低。你只需知道 Cr 和 Cu 這兩個例外。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species} has {n} electrons, filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Note that 4s fills before 3d.": "{species} 有 {n} 個電子，按 1s、2s、2p、3s、3p、4s、3d、4p 的次序填充。留意 4s 比 3d 先填充。",

    // widget string (assets/js/widgets-s1-3.js)
    "H has 1 electron. It goes into 1s, the lowest-energy sublevel.": "H 有 1 個電子。它填入能量最低的亞層 1s。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species} has {n} electrons, filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p.": "{species} 有 {n} 個電子，按 1s、2s、2p、3s、3p、4s、3d、4p 的次序填充。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species} is a hydrogen atom that has lost its only electron. It is a bare proton.": "{species} 是失去了唯一一個電子的氫原子，只剩下一個質子。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and add electrons to the next space. Electrons added: {k}. Total: {n}.": "{species}：由原子 ({atom}) 開始，把電子加到下一個空位。加入的電子：{k} 個。總數：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "AHL": "AHL",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and remove electrons. Electrons removed: {k}. <b>The 4s electrons are removed before any 3d electron.</b> Once 3d holds electrons it is lower in energy than 4s, which is why the diagram for this ion shows 3d below 4s. Ions of the d-block metals are assessed at HL (Structure 3.1).": "{species}：由原子 ({atom}) 開始，然後移走電子。移走的電子：{k} 個。<b>先移走 4s 電子，然後才移走 3d 電子。</b>3d 一旦有了電子，能量就比 4s 低，所以這種離子的軌態圖把 3d 畫在 4s 之下。d 區金屬的離子在 HL 考核 (Structure 3.1)。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and remove electrons from the highest main energy level, 4p first and then 4s. Electrons removed: {k}. Total left: {n}.": "{species}：由原子 ({atom}) 開始，從最高的主能級移走電子，先 4p，後 4s。移走的電子：{k} 個。餘下總數：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "{species}: start from the atom ({atom}) and remove electrons from the highest main energy level. Electrons removed: {k}. Total left: {n}.": "{species}：由原子 ({atom}) 開始，從最高的主能級移走電子。移走的電子：{k} 個。餘下總數：{n} 個。",

    // widget string (assets/js/widgets-s1-3.js)
    "That is the same configuration as a helium atom.": "這與氦原子的電子排佈相同。",

    // widget string (assets/js/widgets-s1-3.js)
    "That is the same configuration as a neon atom.": "這與氖原子的電子排佈相同。",

    // widget string (assets/js/widgets-s1-3.js)
    "That is the same configuration as an argon atom.": "這與氬原子的電子排佈相同。",

    // widget string (assets/js/widgets-s1-3.js)
    "Atomic number, Z": "原子序 Z",

    // widget string (assets/js/widgets-s1-3.js)
    "Jump to a discontinuity": "跳到不連續處",

    // widget string (assets/js/widgets-s1-3.js)
    "Join up a group": "連起同一族",

    // widget string (assets/js/widgets-s1-3.js)
    "none": "不連",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 1 (Li, Na, K)": "第 1 族 (Li, Na, K)",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 2 (Be, Mg, Ca)": "第 2 族 (Be, Mg, Ca)",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 17 (F, Cl, Br)": "第 17 族 (F, Cl, Br)",

    // widget string (assets/js/widgets-s1-3.js)
    "Group 18 (He, Ne, Ar, Kr)": "第 18 族 (He, Ne, Ar, Kr)",

    // widget string (assets/js/widgets-s1-3.js)
    "First ionization energy": "第一電離能",

    // widget string (assets/js/widgets-s1-3.js)
    "Electron removed from": "被移走的電子來自",

    // widget string (assets/js/widgets-s1-3.js)
    "Compared with the element before it": "與前一種元素比較",

    // widget string (assets/js/widgets-s1-3.js)
    "Compared with the element above it": "與上方的元素比較",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of first ionization energy against atomic number for hydrogen to krypton. The values rise across each period with small dips after groups 2 and 15, peak at each noble gas, then drop sharply at the start of the next period.": "由氫至氪的第一電離能對原子序的圖表。數值在每個週期內上升，在第 2 族和第 15 族之後稍為下跌，到貴氣體達至最高，然後在下一個週期開始時急跌。",

    // widget string (assets/js/widgets-s1-3.js)
    "period {n}": "第 {n} 週期",

    // widget string (assets/js/widgets-s1-3.js)
    "atomic number, Z": "原子序 Z",

    // widget string (assets/js/widgets-s1-3.js)
    "first IE / {unit}": "第一 IE / {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "{symbol} ({name}), Z = {z}": "{symbol}（{name}），Z = {z}",

    // widget string (assets/js/widgets-s1-3.js)
    "{sub} sublevel": "{sub} 亞層",

    // widget string (assets/js/widgets-s1-3.js)
    "Hydrogen is the first element. Its one electron is in 1s, close to the nucleus, with no inner electrons to shield it.": "氫是第一種元素。它唯一的電子在 1s，接近原子核，沒有內層電子屏蔽它。",

    // widget string (assets/js/widgets-s1-3.js)
    "Higher than H ({pv}). Helium has two protons instead of one, and both electrons are in the same 1s sublevel with no inner electrons to shield them. The attraction to the nucleus is much stronger.": "比 H ({pv}) 高。氦有兩個質子，不是一個，而兩個電子都在同一個 1s 亞層，沒有內層電子屏蔽它們。原子核的引力強得多。",

    // widget string (assets/js/widgets-s1-3.js)
    "Large drop from {prev} ({pv}). A new period starts. The electron removed is in a new main energy level (n = {n}), further from the nucleus and shielded by more inner electrons, so it is attracted less strongly.": "比 {prev} ({pv}) 大幅下跌。新的週期開始了。被移走的電子在新的主能級 (n = {n})，離原子核較遠，受到較多內層電子屏蔽，所以受到的引力較弱。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {prev} ({pv}), even though the nuclear charge is greater. This is a discontinuity. The electron removed from {el} is in the {sub} sublevel, which is higher in energy than the {ssub} sublevel that {prev} loses an electron from. A higher-energy electron needs less energy to remove.": "比 {prev} ({pv}) 低，雖然核電荷較大。這是不連續處。從 {el} 移走的電子在 {sub} 亞層，{prev} 失去的電子則在 {ssub} 亞層；{sub} 亞層的能量比 {ssub} 亞層高。電子的能量愈高，移走它所需的能量愈少。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {prev} ({pv}), even though the nuclear charge is greater. This is a discontinuity. In {prev} each {sub} orbital holds one electron. In {el} one {sub} orbital holds a pair. Two electrons in the same orbital repel each other, so one of them is removed more easily.": "比 {prev} ({pv}) 低，雖然核電荷較大。這是不連續處。在 {prev} 中，每個 {sub} 軌態各有一個電子。在 {el} 中，其中一個 {sub} 軌態有一對電子。同一軌態內的兩個電子互相排斥，所以其中一個較容易移走。",

    // widget string (assets/js/widgets-s1-3.js)
    "Part of the d-block (Sc to Zn). First ionization energy changes only a little here: {prev} is {pv}. You are not asked to explain these small rises and falls in Structure 1.3.": "屬於 d 區（Sc 至 Zn）。這裏的第一電離能變化很小：{prev} 是 {pv}。Structure 1.3 不要求你解釋這些細微的升跌。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {prev} ({pv}). The electron removed from {el} is in the {sub} sublevel, which is higher in energy than the {ssub} sublevel that {prev} loses an electron from. A higher-energy electron needs less energy to remove.": "比 {prev} ({pv}) 低。從 {el} 移走的電子在 {sub} 亞層，{prev} 失去的電子則在 {ssub} 亞層；{sub} 亞層的能量比 {ssub} 亞層高。電子的能量愈高，移走它所需的能量愈少。",

    // widget string (assets/js/widgets-s1-3.js)
    "Higher than {prev} ({pv}). This is the general trend across a period. The nuclear charge increases by one proton. The electron removed is in the same main energy level, so the shielding by inner electrons is about the same. The outer electrons are held more strongly and the atom is smaller.": "比 {prev} ({pv}) 高。這是橫越週期的整體趨勢。核電荷增加了一個質子。被移走的電子在同一個主能級，所以內層電子的屏蔽大致相同。外層電子被吸引得更緊，原子也較小。",

    // widget string (assets/js/widgets-s1-3.js)
    "No element above it within Z = 1 to 36.": "在 Z = 1 至 36 的範圍內，它上方沒有元素。",

    // widget string (assets/js/widgets-s1-3.js)
    "Nothing above it. This is period 1.": "上方沒有元素。這是第 1 週期。",

    // widget string (assets/js/widgets-s1-3.js)
    "Period 2 elements are at the top of their groups. Step down to period 3 to see the group trend.": "第 2 週期的元素在各族的頂端。移到第 3 週期，就能看到沿族向下的趨勢。",

    // widget string (assets/js/widgets-s1-3.js)
    "Lower than {above} ({av}). This is the trend down a group. The outer electron is in a higher main energy level (n = {n} instead of n = {m}), so it is further from the nucleus and shielded by more inner electrons. This outweighs the greater nuclear charge.": "比 {above} ({av}) 低。這是沿族向下的趨勢。外層電子在較高的主能級（n = {n}，而不是 n = {m}），所以離原子核較遠，受到較多內層電子屏蔽。這蓋過了核電荷較大的影響。",

    // widget string (assets/js/widgets-s1-3.js)
    "Almost the same as {above} ({av}). This is an exception to the usual decrease down a group. You will not be asked to explain it.": "與 {above} ({av}) 幾乎相同。沿族向下通常是遞減的，這是例外。題目不會要求你解釋。",

    // widget string (assets/js/widgets-s1-3.js)
    "Mystery element": "神秘元素",

    // widget string (assets/js/widgets-s1-3.js)
    "Vertical scale": "縱軸標度",

    // widget string (assets/js/widgets-s1-3.js)
    "New mystery element": "換一個神秘元素",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of successive ionization energies against the number of the electron removed.": "逐級電離能對被移走電子的序號的圖表。",

    // widget string (assets/js/widgets-s1-3.js)
    "Which group is the mystery element in?": "神秘元素屬於哪一族？",

    // widget string (assets/js/widgets-s1-3.js)
    "Group {g}": "第 {g} 族",

    // widget string (assets/js/widgets-s1-3.js)
    "Successive ionization energies / {unit}": "逐級電離能 / {unit}",

    // widget string (assets/js/widgets-s1-3.js)
    "How to read it": "怎樣解讀",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Correct.</b> The first large jump comes after electron {v}, so the number of electrons in the outer main energy level is {v}: group {g}. The element is {name}.": "<b>正確。</b>第一次大幅躍升出現在第 {v} 個電子之後，所以最外層主能級有 {v} 個電子：第 {g} 族。這種元素是{name}。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>One out.</b> Find the first large jump and count the electrons removed <em>before</em> it. If the jump is between electron 3 and electron 4, then 3 electrons are in the outer level. Count again.": "<b>差了一個。</b>找出第一次大幅躍升，數出在它<em>之前</em>移走的電子。如果躍升在第 3 和第 4 個電子之間，最外層就有 3 個電子。再數一次。",

    // widget string (assets/js/widgets-s1-3.js)
    "<b>Not yet.</b> Look for the first place where the graph steps up sharply. Ignore the small steps. A group {g} element would have that jump after electron {k}.": "<b>仍未正確。</b>找出圖表第一次急升的位置。不用理會小的升幅。第 {g} 族的元素，躍升會出現在第 {k} 個電子之後。",

    // widget string (assets/js/widgets-s1-3.js)
    "number of the electron removed": "被移走電子的序號",

    // widget string (assets/js/widgets-s1-3.js)
    "log(IE / {unit})": "log(IE / {unit})",

    // widget string (assets/js/widgets-s1-3.js)
    "IE / {unit} (k = thousand)": "IE / {unit}（k = 千）",

    // widget string (assets/js/widgets-s1-3.js)
    "Mystery element, first {n} values": "神秘元素，首 {n} 個數值",

    // widget string (assets/js/widgets-s1-3.js)
    "Find the first large jump. Count the electrons removed before it. That number is the number of outer electrons.": "找出第一次大幅躍升。數出在它之前移走的電子。這個數目就是外層電子的數目。",

    // widget string (assets/js/widgets-s1-3.js)
    "First large jump: after electron {v} (the value becomes {ratio} times bigger). Outer electrons: {v}. Group {g}.": "第一次大幅躍升：在第 {v} 個電子之後（數值增至 {ratio} 倍）。外層電子：{v} 個。第 {g} 族。",

    // widget string (assets/js/widgets-s1-3.js)
    "First large jump: after electron {v} (the value becomes {ratio} times bigger). Outer electrons: {v}. Group {g}. The brackets, read from left to right, give the electrons in each main energy level, outermost first: {list}.": "第一次大幅躍升：在第 {v} 個電子之後（數值增至 {ratio} 倍）。外層電子：{v} 個。第 {g} 族。括線由左至右顯示每個主能級的電子數目，最外層在先：{list}。",

    // widget string (assets/js/widgets-s1-3.js)
    "The smaller step after electron 1 is a change of sublevel (p to s), not a new main energy level.": "第 1 個電子之後較小的升幅，是亞層改變（由 p 到 s），不是新的主能級。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of the logarithm of successive ionization energy against the number of the electron removed, for {name}. Values in order, in kilojoules per mole: {values}.": "{name}的逐級電離能的對數，對被移走電子的序號的圖表。數值依次為（單位：千焦耳每摩爾）：{values}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of the logarithm of successive ionization energy against the number of the electron removed, for a mystery element. Values in order, in kilojoules per mole: {values}.": "神秘元素的逐級電離能的對數，對被移走電子的序號的圖表。數值依次為（單位：千焦耳每摩爾）：{values}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of successive ionization energy against the number of the electron removed, for {name}. Values in order, in kilojoules per mole: {values}.": "{name}的逐級電離能對被移走電子的序號的圖表。數值依次為（單位：千焦耳每摩爾）：{values}。",

    // widget string (assets/js/widgets-s1-3.js)
    "Graph of successive ionization energy against the number of the electron removed, for a mystery element. Values in order, in kilojoules per mole: {values}.": "神秘元素的逐級電離能對被移走電子的序號的圖表。數值依次為（單位：千焦耳每摩爾）：{values}。",

  }
});
