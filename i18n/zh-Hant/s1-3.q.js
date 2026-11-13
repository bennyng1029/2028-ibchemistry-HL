/* s1-3.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-3.q', {
  questions: {

    // ── s1-3-q001 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q001": {
      // EN: <p>Which statement describes a <strong>line</strong> spectrum?</p>
      stem: "<p>以下哪一項描述<strong>線</strong>光譜？</p>",
      options: [
        // EN: It contains all the wavelengths in a range, so the colours merge into each other.
        "包含某範圍內的所有波長，所以各種顏色連成一片。",
        // EN: It contains only certain separate wavelengths, seen as individual lines.
        "只包含某些分立的波長，看起來是一條條獨立的譜線。",
        // EN: It contains only one wavelength, seen as a single line.
        "只包含一個波長，看起來只有一條線。",
        // EN: It contains every wavelength of the electromagnetic spectrum.
        "包含電磁波譜的所有波長。",
      ],
      hints: [
        // EN: Picture a rainbow next to a set of thin coloured lines on a dark background. Which one is the line spectrum?
        "想像一道彩虹，旁邊是黑色背景上一組幼細的色線。哪一個是線光譜？",
      ],
      // EN: <p>A <strong>continuous</strong> spectrum contains all wavelengths (or frequencies) in a range. A <strong>line</strong> spectrum contains only certain discrete wavelengths (or frequencies), seen as separate lines.</p>
      solution: "<p><strong>連續</strong>光譜包含某範圍內的所有波長（或頻率）。<strong>線</strong>光譜只包含某些分立的波長（或頻率），看起來是一條條分開的譜線。</p>",
      misconception: {
        // EN (option A): This describes a continuous spectrum, such as the rainbow of colours from white light passed through a prism.
        "0": "這是連續光譜，例如白光穿過稜鏡後形成的彩虹色帶。",
        // EN (option C): A line spectrum usually has many lines. Each line is one wavelength, but there are several of them.
        "2": "線光譜通常有很多條線。每條線是一個波長，但線不止一條。",
        // EN (option D): This is the opposite idea. A line spectrum is missing most wavelengths. Only a few specific ones are present.
        "3": "剛好相反。線光譜缺少了大部分波長，只有少數特定的波長。",
      },
    },

    // ── s1-3-q002 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q002": {
      // EN: <p>Which colour of visible light has photons of the <strong>highest</strong> energy?</p>
      stem: "<p>哪一種顏色的可見光，光子能量<strong>最高</strong>？</p>",
      options: [
        // EN: Red
        "紅色",
        // EN: Yellow
        "黃色",
        // EN: Green
        "綠色",
        // EN: Violet
        "紫色",
      ],
      hints: [
        // EN: The data booklet shows the visible region running from violet (about 400 nm) to red (about 700 nm).
        "數據手冊顯示，可見光區由紫色（約 400 nm）延伸到紅色（約 700 nm）。",
        // EN: Shorter wavelength means higher frequency, and higher frequency means higher energy.
        "波長越短，頻率越高；頻率越高，能量越高。",
      ],
      // EN: <p>Violet light has the shortest wavelength in the visible region (about 400 nm). Shorter wavelength means higher frequency and higher energy, so violet photons have the highest energy.</p>
      solution: "<p>紫光是可見光區中波長最短的（約 400 nm）。波長越短，頻率和能量越高，所以紫光光子的能量最高。</p>",
      misconception: {
        // EN (option A): Red light has the longest wavelength in the visible region, so it has the lowest frequency and the lowest energy.
        "0": "紅光是可見光區中波長最長的，所以頻率最低，能量也最低。",
        // EN (option B): Yellow is in the middle of the visible region. Look for the colour with the shortest wavelength.
        "1": "黃色在可見光區的中間。要找波長最短的顏色。",
        // EN (option C): Green is in the middle of the visible region. Look for the colour with the shortest wavelength.
        "2": "綠色在可見光區的中間。要找波長最短的顏色。",
      },
    },

    // ── s1-3-q003 · order · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q003": {
      // EN: <p>Put these types of electromagnetic radiation in order of <strong>increasing frequency</strong> (lowest frequency first).</p>
      stem: "<p>把以下各種電磁輻射按<strong>頻率由低至高</strong>排列（頻率最低的排最先）。</p>",
      options: [
        // EN: Infrared
        "紅外線",
        // EN: Red light
        "紅光",
        // EN: Green light
        "綠光",
        // EN: Violet light
        "紫光",
        // EN: Ultraviolet
        "紫外線",
      ],
      hints: [
        // EN: Increasing frequency is the same order as increasing energy and <em>decreasing</em> wavelength.
        "頻率遞增的次序，等於能量遞增的次序，也等於波長<em>遞減</em>的次序。",
        // EN: Infrared lies next to the red end of the visible region. Ultraviolet lies next to the violet end.
        "紅外線緊接可見光區的紅色一端，紫外線緊接紫色一端。",
      ],
      // EN: <p>Infrared has the longest wavelength of these, so it has the lowest frequency. Within the visible region the wavelength falls from red (about 700 nm) through green to violet (about 400 nm), so the frequency rises. Ultraviolet has a shorter wavelength than violet, so it has the highest frequency and the highest energy.</p>
      solution: "<p>這幾種輻射中，紅外線的波長最長，所以頻率最低。在可見光區內，波長由紅色（約 700 nm）經綠色下降到紫色（約 400 nm），所以頻率上升。紫外線的波長比紫光更短，所以頻率最高，能量也最高。</p>",
    },

    // ── s1-3-q004 · short · exam · SL · Structure 1.3.1 · 2 marks
    "s1-3-q004": {
      // EN: <p>A sample of gaseous atoms is given energy by an electric discharge. Explain how one line in the emission spectrum of the element is produced.</p>
      stem: "<p>一個氣態原子樣本透過放電獲得能量。解釋 (explain) 該元素的發射光譜中，一條譜線是怎樣產生的。</p>",
      hints: [
        // EN: Start with where the electron is after the atom has absorbed energy.
        "先想想原子吸收能量後，電子在哪裏。",
        // EN: What leaves the atom when the electron drops down, and what fixes its energy?
        "電子落回較低能級時，有甚麼離開原子？它的能量由甚麼決定？",
      ],
      // EN: <p>The energy excites an electron to a higher energy level. The electron then returns (falls) to a lower energy level and emits a photon. The energy of the photon equals the difference in energy between the two levels, so the light has one specific frequency (wavelength), which is seen as a line.</p>
      answer: "<p>能量把電子激發到較高的能級。電子隨後返回（落回）較低的能級，並發射一個光子。光子的能量等於兩個能級之間的能量差，所以發出的光只有一個特定的頻率（波長），看起來就是一條譜線。</p>",
      markscheme: [
        // EN: An electron (in an excited state) returns/falls from a higher energy level to a lower energy level.
        "（處於激發態的）電子由較高能級返回／落回較低能級。",
        // EN: A photon is emitted whose energy equals the difference between the two levels (accept: light of a specific frequency/wavelength is emitted).
        "發射出一個光子，其能量等於兩個能級之差（接受：發射出特定頻率／波長的光）。",
      ],
    },

    // ── s1-3-q005 · mcq · foundation · SL · Structure 1.3.2 · 1 mark
    "s1-3-q005": {
      // EN: <p>In the emission spectrum of hydrogen, electrons fall to the first, second or third energy level. Which row gives the region of the electromagnetic spectrum for each set of lines?</p>
      stem: "<p>在氫的發射光譜中，電子落到第一、第二或第三能級。哪一行正確列出各組譜線所屬的電磁波譜區域？</p>",
      options: [
        // EN: To n = 1: visible. To n = 2: ultraviolet. To n = 3: infrared.
        "落到 n = 1：可見光。落到 n = 2：紫外線。落到 n = 3：紅外線。",
        // EN: To n = 1: ultraviolet. To n = 2: visible. To n = 3: infrared.
        "落到 n = 1：紫外線。落到 n = 2：可見光。落到 n = 3：紅外線。",
        // EN: To n = 1: infrared. To n = 2: visible. To n = 3: ultraviolet.
        "落到 n = 1：紅外線。落到 n = 2：可見光。落到 n = 3：紫外線。",
        // EN: To n = 1: ultraviolet. To n = 2: infrared. To n = 3: visible.
        "落到 n = 1：紫外線。落到 n = 2：紅外線。落到 n = 3：可見光。",
      ],
      hints: [
        // EN: Falls to the lowest level release the most energy.
        "落到最低的能級時，釋放的能量最多。",
        // EN: In order of decreasing energy: ultraviolet, visible, infrared.
        "按能量由高至低：紫外線、可見光、紅外線。",
      ],
      // EN: <p>The gap between n = 1 and the levels above it is the largest, so falls to n = 1 emit the highest-energy photons: <strong>ultraviolet</strong>. Falls to n = 2 release less energy: <strong>visible</strong>. Falls to n = 3 release less again: <strong>infrared</strong>.</p>
      solution: "<p>n = 1 與上面各能級之間的能量差最大，所以落到 n = 1 時發射的光子能量最高：<strong>紫外線</strong>。落到 n = 2 釋放的能量較少：<strong>可見光</strong>。落到 n = 3 釋放的能量更少：<strong>紅外線</strong>。</p>",
      misconception: {
        // EN (option A): The visible lines do not end at n = 1. Falls to n = 1 release the most energy, and that puts them in the ultraviolet.
        "0": "可見光譜線並不是止於 n = 1。落到 n = 1 釋放的能量最多，所以這些譜線在紫外區。",
        // EN (option C): This is the right list in the wrong direction. Falls to n = 1 are the largest drops in energy, so they give the highest-energy radiation, not the lowest.
        "2": "三個區域都對，但次序倒轉了。落到 n = 1 的能量下降最大，所以產生能量最高的輻射，不是最低的。",
        // EN (option D): Visible light has more energy than infrared, so it must come from the larger drops. Falls to n = 2 release more energy than falls to n = 3.
        "3": "可見光的能量比紅外線高，所以必定來自較大的能量下降。落到 n = 2 釋放的能量比落到 n = 3 多。",
      },
    },

    // ── s1-3-q006 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "s1-3-q006": {
      // EN: <p>Which electron transition in a hydrogen atom <strong>emits</strong> radiation of the <strong>shortest wavelength</strong>?</p>
      stem: "<p>氫原子中哪一個電子躍遷會<strong>發射</strong>出<strong>波長最短</strong>的輻射？</p>",
      options: [
        // EN: n = 4 to n = 3
        "n = 4 至 n = 3",
        // EN: n = 5 to n = 2
        "n = 5 至 n = 2",
        // EN: n = 2 to n = 1
        "n = 2 至 n = 1",
        // EN: n = 1 to n = 3
        "n = 1 至 n = 3",
      ],
      hints: [
        // EN: Shortest wavelength means highest energy, so look for the largest fall in energy.
        "波長最短即能量最高，所以要找能量下降最多的躍遷。",
        // EN: The energy levels are not evenly spaced. They get closer together as n increases.
        "能級之間的距離並不相等。n 越大，能級越接近。",
      ],
      // EN: <p>Shortest wavelength means highest frequency and highest energy. The levels converge, so the gap between n = 1 and n = 2 is by far the largest gap. Any fall to n = 1 gives ultraviolet radiation, which has more energy than the visible lines (falls to n = 2) or the infrared lines (falls to n = 3). So n = 2 to n = 1 emits the shortest wavelength of the four.</p>
      solution: "<p>波長最短即頻率最高、能量最高。能級會聚，所以 n = 1 與 n = 2 之間的能量差遠比其他的大。凡是落到 n = 1 都產生紫外輻射，能量比可見光譜線（落到 n = 2）或紅外線譜線（落到 n = 3）高。所以四個選項中，n = 2 至 n = 1 發射的波長最短。</p>",
      misconception: {
        // EN (option A): This is a fall between two levels that are close together in energy. It is a small energy change, so it gives a long wavelength (infrared).
        "0": "這兩個能級的能量很接近。能量變化小，所以波長長（紅外線）。",
        // EN (option B): This electron crosses more levels, but the levels above n = 2 are close together. The single gap from n = 2 to n = 1 is larger than the whole drop from n = 5 to n = 2.
        "1": "這個電子跨越的能級較多，但 n = 2 以上的能級彼此很接近。單是 n = 2 至 n = 1 這一個能量差，已比 n = 5 至 n = 2 的整段下降還要大。",
        // EN (option D): This electron moves <em>up</em>. The atom must absorb energy for that, so no radiation is emitted.
        "3": "這個電子是向<em>上</em>移。原子必須吸收能量才做得到，所以不會發射輻射。",
      },
    },

    // ── s1-3-q007 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "s1-3-q007": {
      // EN: <p>In each set of lines in the hydrogen emission spectrum, the lines get closer together towards the high-frequency end. What does this show?</p>
      stem: "<p>在氫發射光譜的每一組譜線中，越接近高頻一端，譜線越密。這說明了甚麼？</p>",
      options: [
        // EN: The energy levels get closer together as their energy increases.
        "能級的能量越高，彼此越接近。",
        // EN: The energy levels are equally spaced.
        "各能級之間的距離相等。",
        // EN: Electrons can have any energy inside the atom.
        "電子在原子內可以有任何能量。",
        // EN: Electrons in higher energy levels move more slowly.
        "在較高能級的電子運動得較慢。",
      ],
      hints: [
        // EN: Each line is one energy difference. If two lines are close together, what does that say about the two starting levels?
        "每條譜線代表一個能量差。如果兩條譜線很接近，這說明兩個起始能級有甚麼關係？",
      ],
      // EN: <p>Lines that are close together come from electrons falling from levels that are close in energy. The lines converge at high frequency, so the energy levels converge (get closer together) at higher energy.</p>
      solution: "<p>互相接近的譜線，是電子由能量相近的能級落下來時產生的。譜線在高頻處會聚，所以能級在能量較高處也會聚（越來越接近）。</p>",
      misconception: {
        // EN (option B): Equally spaced levels would not make the lines bunch up. The lines converge because the gaps between higher levels shrink.
        "1": "如果能級的距離相等，譜線就不會擠在一起。譜線會聚，是因為較高能級之間的能量差越來越小。",
        // EN (option C): If electrons could have any energy, the spectrum would be continuous. Separate lines show the opposite.
        "2": "如果電子可以有任何能量，光譜就會是連續的。分開的譜線說明情況剛好相反。",
        // EN (option D): The spectrum gives information about energy differences between levels. It does not tell you how fast the electrons move.
        "3": "光譜提供的是能級之間能量差的資料，不能告訴你電子運動得多快。",
      },
    },

    // ── s1-3-q008 · multi · exam · SL · Structure 1.3.2 · 2 marks
    "s1-3-q008": {
      // EN: <p>Which statements about the emission spectrum of hydrogen are correct?</p>
      stem: "<p>以下哪些關於氫發射光譜的敘述是正確的？</p>",
      options: [
        // EN: It is made of separate lines, not a continuous band of colour.
        "它由分開的譜線組成，不是一條連續的色帶。",
        // EN: Each line is produced when an electron moves from a lower to a higher energy level.
        "每條譜線都是電子由較低能級移到較高能級時產生的。",
        // EN: Within each set of lines, the lines get closer together as the frequency increases.
        "在每一組譜線中，頻率越高，譜線越密。",
        // EN: The lines in the visible region come from electrons falling to n = 2.
        "可見光區的譜線來自落到 n = 2 的電子。",
        // EN: Falls to n = 1 give lines of lower energy than falls to n = 3.
        "落到 n = 1 產生的譜線，能量比落到 n = 3 的低。",
        // EN: Each line corresponds to photons of one specific energy.
        "每條譜線對應一種特定能量的光子。",
      ],
      hints: [
        // EN: Emission means the atom gives out light. Which direction must the electron move?
        "發射是指原子放出光。電子必須向哪個方向移動？",
        // EN: Largest fall in energy gives the highest-energy radiation.
        "能量下降越多，輻射的能量越高。",
      ],
      // EN: <p>The spectrum is a line spectrum. Each line is light of one frequency, emitted when an electron falls from a higher to a lower energy level, so each line corresponds to photons of one specific energy. The visible lines come from falls to n = 2. Falls to n = 1 give ultraviolet lines (higher energy) and falls to n = 3 give infrared lines (lower energy). In each set the lines converge at high frequency.</p>
      solution: "<p>這是線光譜。每條譜線是一種頻率的光，在電子由較高能級落回較低能級時發射出來，所以每條譜線對應一種特定能量的光子。可見光譜線來自落到 n = 2。落到 n = 1 產生紫外線譜線（能量較高），落到 n = 3 產生紅外線譜線（能量較低）。在每一組譜線中，譜線在高頻處會聚。</p>",
      misconception: {
        // EN (option B): Moving up needs energy to be absorbed. Emission lines come from electrons falling from a higher level to a lower one.
        "1": "向上移需要吸收能量。發射譜線來自由較高能級落回較低能級的電子。",
        // EN (option E): Falls to n = 1 are the largest drops in energy. They give ultraviolet lines, which have more energy than the infrared lines from falls to n = 3.
        "4": "落到 n = 1 的能量下降最大，產生紫外線譜線，能量比落到 n = 3 所產生的紅外線譜線高。",
      },
    },

    // ── s1-3-q009 · short · exam · SL · Structure 1.3.2 · 3 marks
    "s1-3-q009": {
      // EN: <p>The emission spectrum of hydrogen is a line spectrum, not a continuous spectrum. Explain how this is evidence that the electron in a hydrogen atom can only be in certain energy levels.</p>
      stem: "<p>氫的發射光譜是線光譜，不是連續光譜。解釋 (explain) 這怎樣證明氫原子中的電子只能處於某些能級。</p>",
      hints: [
        // EN: What does each line tell you about the energy of the photons emitted?
        "每條譜線說明發射出來的光子有甚麼能量？",
        // EN: Link the photon energy to the two levels the electron moves between.
        "把光子的能量與電子所跨越的兩個能級聯繫起來。",
        // EN: Finish with the contrast: what would you see if any energy were allowed?
        "最後作個對比：如果任何能量都可以，你會看到甚麼？",
      ],
      // EN: <p>A line spectrum shows that the atom emits light of only certain frequencies, so only photons of certain energies are emitted. Each photon is emitted when the electron falls from a higher energy level to a lower one, and the energy of the photon equals the difference in energy between those two levels. Only certain energy differences are seen, so the electron can only have certain fixed (discrete) energies. If the electron could have any energy, every energy difference would be possible and the spectrum would be continuous.</p>
      answer: "<p>線光譜說明原子只發射某些頻率的光，所以只發射某些能量的光子。每個光子都是電子由較高能級落回較低能級時發射的，光子的能量等於這兩個能級之間的能量差。光譜中只出現某些能量差，所以電子只能有某些固定（分立）的能量。如果電子可以有任何能量，任何能量差都可能出現，光譜就會是連續的。</p>",
      markscheme: [
        // EN: Only certain/specific frequencies (or wavelengths, or photon energies) are emitted.
        "只發射某些／特定的頻率（或波長，或光子能量）。",
        // EN: Each photon/line is produced when an electron falls from a higher to a lower energy level, and its energy equals the energy difference between the two levels.
        "每個光子／每條譜線都是電子由較高能級落回較低能級時產生的，其能量等於兩個能級之間的能量差。",
        // EN: So only certain energy differences are possible, which means the energy levels are discrete/fixed (accept: if any energy were allowed the spectrum would be continuous).
        "所以只可能有某些能量差，即能級是分立／固定的（接受：如果任何能量都可以，光譜就會是連續的）。",
      ],
    },

    // ── s1-3-q010 · mcq · challenge · SL · Structure 1.3.2 · 1 mark
    "s1-3-q010": {
      // EN: <p>The diagram shows some energy levels of the hydrogen atom (not to scale) and four electron transitions, P, Q, R and S.</p><p><svg viewBox="0 0 300 210" width="300" height="210" role="img" aria-label="Energy level diagram for hydrogen, not to scale. Horizontal lines for n = 1 at the bottom up to n = 5, getting closer together, and a dashed line for n = infinity at the top. Four downward arrows: P from n = 2 to n = 1, Q from n = 3 to n = 2, R from n = 5 to n = 2, S from n = 4 to n = 3."><line x1="62" x2="286" y1="196" y2="196" stroke="currentColor" stroke-width="1.4"/><text x="54" y="200" text-anchor="end" font-size="13" fill="currentColor">n = 1</text><line x1="62" x2="286" y1="112" y2="112" stroke="currentColor" stroke-width="1.4"/><text x="54" y="116" text-anchor="end" font-size="13" fill="currentColor">n = 2</text><line x1="62" x2="286" y1="68" y2="68" stroke="currentColor" stroke-width="1.4"/><text x="54" y="72" text-anchor="end" font-size="13" fill="currentColor">n = 3</text><line x1="62" x2="286" y1="44" y2="44" stroke="currentColor" stroke-width="1.4"/><text x="54" y="48" text-anchor="end" font-size="13" fill="currentColor">n = 4</text><line x1="62" x2="286" y1="30" y2="30" stroke="currentColor" stroke-width="1.4"/><text x="54" y="34" text-anchor="end" font-size="13" fill="currentColor">n = 5</text><line x1="62" x2="286" y1="16" y2="16" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="54" y="20" text-anchor="end" font-size="13" fill="currentColor">n = ∞</text><path d="M96 112V194M91 186L96 194L101 186" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="105" y="182" font-size="14" font-weight="700" fill="currentColor">P</text><path d="M148 68V110M143 102L148 110L153 102" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="157" y="98" font-size="14" font-weight="700" fill="currentColor">Q</text><path d="M200 30V110M195 102L200 110L205 102" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="209" y="98" font-size="14" font-weight="700" fill="currentColor">R</text><path d="M252 44V66M247 58L252 66L257 58" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="261" y="60" font-size="14" font-weight="700" fill="currentColor">S</text></svg></p><p>Which transition emits <strong>visible</strong> light of the <strong>lowest frequency</strong>?</p>
      stem: "<p>圖中顯示氫原子的部分能級（不按比例）和四個電子躍遷：P、Q、R 和 S。</p><p><svg viewBox=\"0 0 300 210\" width=\"300\" height=\"210\" role=\"img\" aria-label=\"氫的能級圖，不按比例。橫線由底部的 n = 1 到 n = 5，越往上越密，頂部的虛線是 n = ∞。四個向下的箭嘴：P 由 n = 2 到 n = 1，Q 由 n = 3 到 n = 2，R 由 n = 5 到 n = 2，S 由 n = 4 到 n = 3。\"><line x1=\"62\" x2=\"286\" y1=\"196\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"200\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 1</text><line x1=\"62\" x2=\"286\" y1=\"112\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"116\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 2</text><line x1=\"62\" x2=\"286\" y1=\"68\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"72\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 3</text><line x1=\"62\" x2=\"286\" y1=\"44\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"48\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 4</text><line x1=\"62\" x2=\"286\" y1=\"30\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 5</text><line x1=\"62\" x2=\"286\" y1=\"16\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"/><text x=\"54\" y=\"20\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = ∞</text><path d=\"M96 112V194M91 186L96 194L101 186\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"105\" y=\"182\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">P</text><path d=\"M148 68V110M143 102L148 110L153 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"157\" y=\"98\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Q</text><path d=\"M200 30V110M195 102L200 110L205 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"209\" y=\"98\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">R</text><path d=\"M252 44V66M247 58L252 66L257 58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"261\" y=\"60\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">S</text></svg></p><p>哪一個躍遷發射的<strong>可見</strong>光<strong>頻率最低</strong>？</p>",
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
        "先找出產生可見光的箭嘴。它們必定止於哪個能級？",
        // EN: Then compare the lengths of those falls. Smaller fall in energy means lower frequency.
        "再比較這些箭嘴的長度。能量下降越少，頻率越低。",
      ],
      // EN: <p>Visible lines come from falls to n = 2, so only Q (n = 3 to n = 2) and R (n = 5 to n = 2) are visible. Q is the smaller fall in energy, so its photon has less energy and a lower frequency. The answer is Q. (P is ultraviolet and S is infrared.)</p>
      solution: "<p>可見光譜線來自落到 n = 2，所以只有 Q（n = 3 至 n = 2）和 R（n = 5 至 n = 2）是可見光。Q 的能量下降較少，所以光子能量較低，頻率也較低。答案是 Q。（P 是紫外線，S 是紅外線。）</p>",
      misconception: {
        // EN (option A): P ends on n = 1. Falls to n = 1 give ultraviolet radiation, which is not visible and has the highest frequency of the four.
        "0": "P 止於 n = 1。落到 n = 1 產生紫外輻射，不是可見光，而且是四者中頻率最高的。",
        // EN (option C): R does give visible light because it ends on n = 2. But it is a larger fall than Q, so its frequency is higher.
        "2": "R 止於 n = 2，確實產生可見光。但它的能量下降比 Q 大，所以頻率較高。",
        // EN (option D): S has the lowest frequency of all four, but it ends on n = 3. Falls to n = 3 give infrared radiation, which is not visible.
        "3": "S 是四者中頻率最低的，但它止於 n = 3。落到 n = 3 產生紅外輻射，不是可見光。",
      },
    },

    // ── s1-3-q011 · numeric · challenge · SL · Structure 1.3.2 · 1 mark
    "s1-3-q011": {
      // EN: <p>In a sample of hydrogen gas, atoms are excited so that the highest level reached by any electron is n = 5. The electrons can return to lower levels in one fall or in several smaller falls.</p><p>How many different lines can appear in the <strong>visible</strong> region of the emission spectrum?</p>
      stem: "<p>在一個氫氣樣本中，原子受到激發，電子所到達的最高能級是 n = 5。電子可以一次過落回較低的能級，也可以分幾次、每次落下一小段。</p><p>發射光譜的<strong>可見光</strong>區可以出現多少條不同的譜線？</p>",
      hints: [
        // EN: Visible lines come from falls that end on one particular level. Which one?
        "可見光譜線來自落到某一個能級的躍遷。是哪一個能級？",
        // EN: List every level above it that an electron could start from.
        "列出在它上面、電子可以出發的每一個能級。",
      ],
      // EN: <p>Visible lines come from falls that end on n = 2. The electron can start from n = 3, n = 4 or n = 5 (it can reach n = 3 or n = 4 by an earlier, smaller fall from n = 5).</p><div class="worked__math">n = 5 → n<br>&nbsp;&nbsp;= 2, &nbsp; n<br>&nbsp;&nbsp;= 4 → n<br>&nbsp;&nbsp;= 2, &nbsp; n<br>&nbsp;&nbsp;= 3 → n<br>&nbsp;&nbsp;= 2</div><p>That is <strong>3</strong> lines in the visible region. The other possible falls end on n = 1 (ultraviolet) or on n = 3 or n = 4 (infrared).</p>
      solution: "<p>可見光譜線來自落到 n = 2 的躍遷。電子可以由 n = 3、n = 4 或 n = 5 出發（電子可以先由 n = 5 落下一小段，到達 n = 3 或 n = 4）。</p><div class=\"worked__math\">n = 5 → n<br>&nbsp;&nbsp;= 2, &nbsp; n<br>&nbsp;&nbsp;= 4 → n<br>&nbsp;&nbsp;= 2, &nbsp; n<br>&nbsp;&nbsp;= 3 → n<br>&nbsp;&nbsp;= 2</div><p>所以可見光區有 <strong>3</strong> 條譜線。其他可能的躍遷止於 n = 1（紫外線），或止於 n = 3 或 n = 4（紅外線）。</p>",
      // EN: lines
      unit: "條譜線",
    },

    // ── s1-3-q012 · numeric · foundation · SL · Structure 1.3.3 · 1 mark
    "s1-3-q012": {
      // EN: <p>What is the maximum number of electrons that can occupy the main energy level n = 4?</p>
      stem: "<p>主能級 n = 4 最多可以容納多少個電子？</p>",
      hints: [
        // EN: A main energy level n can hold a maximum of 2n<sup>2</sup> electrons.
        "主能級 n 最多可容納 2n<sup>2</sup> 個電子。",
        // EN: Square n first, then multiply by 2.
        "先把 n 平方，再乘以 2。",
      ],
      // EN: <div class="worked__math">maximum = 2n<sup>2</sup><br>&nbsp;&nbsp;= 2 × 4<sup>2</sup><br>&nbsp;&nbsp;= 2 × 16<br>&nbsp;&nbsp;= 32 electrons</div><p>Check with the sublevels: 4s (2) + 4p (6) + 4d (10) + 4f (14) = 32.</p><p>Common slips: 2n = 8, and n<sup>2</sup> = 16 (that is the number of orbitals, each of which holds two electrons).</p>
      solution: "<div class=\"worked__math\">最多 = 2n<sup>2</sup><br>&nbsp;&nbsp;= 2 × 4<sup>2</sup><br>&nbsp;&nbsp;= 2 × 16<br>&nbsp;&nbsp;= 32 個電子</div><p>用亞層核對：4s (2) + 4p (6) + 4d (10) + 4f (14) = 32。</p><p>常見錯誤：2n = 8，以及 n<sup>2</sup> = 16（這是軌態的數目，每個軌態可容納兩個電子）。</p>",
      // EN: electrons
      unit: "個電子",
    },

    // ── s1-3-q013 · mcq · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q013": {
      // EN: <p>Which row describes the shapes of an s orbital and a p orbital?</p>
      stem: "<p>哪一行正確描述 s 軌態和 p 軌態的形狀？</p>",
      options: [
        // EN: s orbital: spherical. p orbital: dumbbell-shaped.
        "s 軌態：球形。p 軌態：啞鈴形。",
        // EN: s orbital: dumbbell-shaped. p orbital: spherical.
        "s 軌態：啞鈴形。p 軌態：球形。",
        // EN: s orbital: circular path around the nucleus. p orbital: figure-of-eight path around the nucleus.
        "s 軌態：環繞原子核的圓形路徑。p 軌態：環繞原子核的「8」字形路徑。",
        // EN: s orbital: spherical. p orbital: spherical, but larger.
        "s 軌態：球形。p 軌態：也是球形，但較大。",
      ],
      hints: [
        // EN: One of them looks the same from every direction. The other has two lobes, one on each side of the nucleus.
        "其中一種從任何方向看都一樣。另一種有兩個瓣，分別在原子核的兩側。",
      ],
      // EN: <p>An s orbital is spherical, centred on the nucleus. A p orbital is dumbbell-shaped: two lobes on opposite sides of the nucleus. There are three p orbitals in a p sublevel, pointing along the x, y and z axes.</p>
      solution: "<p>s 軌態是球形，以原子核為中心。p 軌態是啞鈴形：兩個瓣分別在原子核的相對兩側。一個 p 亞層有三個 p 軌態，分別沿 x、y、z 軸伸展。</p>",
      misconception: {
        // EN (option B): These are the right two shapes, swapped. The s orbital is the sphere.
        "1": "兩種形狀都對，但對調了。s 軌態才是球形。",
        // EN (option C): An orbital is not a path. It is a region of space where there is a high probability of finding the electron.
        "2": "軌態不是路徑，而是一個空間區域，在那裏找到電子的概率很高。",
        // EN (option D): A larger sphere describes an s orbital in a higher main energy level (2s compared with 1s). A p orbital has two lobes.
        "3": "較大的球形是較高主能級的 s 軌態（例如 2s 與 1s 相比）。p 軌態有兩個瓣。",
      },
    },

    // ── s1-3-q014 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q014": {
      // EN: <p>The diagram shows one atomic orbital. The nucleus is where the axes cross.</p><p><svg viewBox="0 0 262 196" width="262" height="196" role="img" aria-label="An orbital drawn on x, y and z axes. It has two lobes, one on each side of the nucleus, pointing along the horizontal axis, which is labelled x. The vertical axis is labelled y and the dashed diagonal axis is labelled z."><line x1="20" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="130" y1="186" x2="130" y2="14" stroke="currentColor" stroke-width="1.2"/><line x1="76" y1="154" x2="184" y2="46" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="246" y="105" font-size="14" fill="currentColor">x</text><text x="126" y="11" text-anchor="middle" font-size="14" fill="currentColor">y</text><text x="190" y="44" font-size="14" fill="currentColor">z</text><path d="M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/><path d="M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/><circle cx="130" cy="100" r="3" fill="currentColor"/></svg></p><p>Which orbital is shown?</p>
      stem: "<p>圖中顯示一個原子軌態。原子核位於各軸的交點。</p><p><svg viewBox=\"0 0 262 196\" width=\"262\" height=\"196\" role=\"img\" aria-label=\"畫在 x、y、z 軸上的一個軌態。它有兩個瓣，分別在原子核的兩側，沿着標示為 x 的橫軸伸展。直軸標示為 y，斜的虛線軸標示為 z。\"><line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"130\" y1=\"186\" x2=\"130\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"76\" y1=\"154\" x2=\"184\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/><text x=\"246\" y=\"105\" font-size=\"14\" fill=\"currentColor\">x</text><text x=\"126\" y=\"11\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">y</text><text x=\"190\" y=\"44\" font-size=\"14\" fill=\"currentColor\">z</text><path d=\"M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"currentColor\"/></svg></p><p>圖中是哪一個軌態？</p>",
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
        "有兩個瓣，就是 p 軌態。",
        // EN: A p orbital is named after the axis that its lobes lie along.
        "p 軌態以它的瓣所在的軸來命名。",
      ],
      // EN: <p>The orbital has two lobes, one on each side of the nucleus, so it is a p orbital. The lobes lie along the x axis, so it is p<sub>x</sub>. The other two p orbitals have the same shape and the same energy, but point along the y and z axes.</p>
      solution: "<p>這個軌態有兩個瓣，分別在原子核的兩側，所以是 p 軌態。兩個瓣沿 x 軸伸展，所以是 p<sub>x</sub>。另外兩個 p 軌態的形狀和能量都相同，但分別沿 y 軸和 z 軸伸展。</p>",
      misconception: {
        // EN (option A): An s orbital is a sphere centred on the nucleus. This orbital has two lobes.
        "0": "s 軌態是以原子核為中心的球形。這個軌態有兩個瓣。",
        // EN (option C): A p<sub>y</sub> orbital has its lobes along the y axis. Check which axis runs through the middle of both lobes here.
        "2": "p<sub>y</sub> 軌態的瓣沿 y 軸伸展。看看圖中哪一條軸穿過兩個瓣的中央。",
        // EN (option D): A p<sub>z</sub> orbital has its lobes along the z axis. Check which axis runs through the middle of both lobes here.
        "3": "p<sub>z</sub> 軌態的瓣沿 z 軸伸展。看看圖中哪一條軸穿過兩個瓣的中央。",
      },
    },

    // ── s1-3-q015 · mcq · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q015": {
      // EN: <p>What is the full electron configuration of a phosphorus atom (Z = 15) in its ground state?</p>
      stem: "<p>磷原子（Z = 15）處於基態時，完整電子排佈是甚麼？</p>",
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
        "上標的總和必須是 15。",
        // EN: Fill in the order 1s, 2s, 2p, 3s, 3p. An s sublevel holds 2 electrons and a p sublevel holds 6.
        "按 1s、2s、2p、3s、3p 的次序填充。s 亞層可容納 2 個電子，p 亞層可容納 6 個。",
      ],
      // EN: <p>Fill the sublevels from the lowest energy upwards (Aufbau principle): 1s (2), 2s (2), 2p (6), 3s (2). That is 12 electrons. The remaining 3 go into 3p.</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 3<br>&nbsp;&nbsp;= 15)</div>
      solution: "<p>由能量最低的亞層開始向上填充（構築原理 (Aufbau principle)）：1s (2)、2s (2)、2p (6)、3s (2)，共 12 個電子。餘下的 3 個填入 3p。</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 3<br>&nbsp;&nbsp;= 15)</div>",
      misconception: {
        // EN (option B): After 3s the next sublevel to fill is 3p, not 3d. The 3d sublevel is higher in energy than 4s.
        "1": "3s 之後要填充的亞層是 3p，不是 3d。3d 亞層的能量比 4s 還要高。",
        // EN (option C): A p sublevel has three orbitals, so it holds at most 6 electrons, not 8.
        "2": "p 亞層有三個軌態，所以最多容納 6 個電子，不是 8 個。",
        // EN (option D): Count the electrons: 2 + 2 + 6 + 2 + 5 = 17. That is chlorine. Phosphorus has 15.
        "3": "數一數電子：2 + 2 + 6 + 2 + 5 = 17，那是氯。磷有 15 個電子。",
      },
    },

    // ── s1-3-q016 · order · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q016": {
      // EN: <p>Put these sublevels in the order in which they are filled as atomic number increases (first to be filled at the top).</p>
      stem: "<p>把以下亞層按原子序增加時的填充次序排列（最先填充的放在最上面）。</p>",
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
        "電子會填入能量最低而仍有空位的亞層（構築原理 (Aufbau principle)）。",
        // EN: One sublevel of the fourth main energy level is filled before the 3d sublevel.
        "第四主能級有一個亞層比 3d 亞層先填充。",
      ],
      // EN: <p>The order of filling is 3s, 3p, 4s, 3d, 4p. The 4s sublevel is filled before 3d: potassium is <span class="mono">[Ar] 4s<sup>1</sup></span> and calcium is <span class="mono">[Ar] 4s<sup>2</sup></span>. The 3d sublevel then fills from scandium to zinc, and 4p fills from gallium to krypton.</p>
      solution: "<p>填充次序是 3s、3p、4s、3d、4p。4s 亞層比 3d 先填充：鉀是 <span class=\"mono\">[Ar] 4s<sup>1</sup></span>，鈣是 <span class=\"mono\">[Ar] 4s<sup>2</sup></span>。然後 3d 亞層由鈧填充到鋅，4p 由鎵填充到氪。</p>",
    },

    // ── s1-3-q017 · mcq · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q017": {
      // EN: <p>A student draws this orbital diagram for a beryllium atom (Z = 4).</p><p><svg viewBox="0 0 80 56" width="80" height="56" role="img" aria-label="Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains two up arrows."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 25V8M64 13L68 8L72 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>一名學生為鈹原子（Z = 4）畫了以下軌態圖。</p><p><svg viewBox=\"0 0 80 56\" width=\"80\" height=\"56\" role=\"img\" aria-label=\"軌態圖。1s 方格內有一個向上箭嘴和一個向下箭嘴。2s 方格內有兩個向上箭嘴。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 25V8M64 13L68 8L72 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text></svg></p><p>這個圖違反了哪一條規則或原理？</p>",
      options: [
        // EN: The Aufbau principle
        "構築原理 (Aufbau principle)",
        // EN: Hund’s rule
        "洪特規則 (Hund’s rule)",
        // EN: The Pauli exclusion principle
        "泡利不相容原理 (Pauli exclusion principle)",
        // EN: None. The diagram is correct.
        "沒有違反。這個圖正確。",
      ],
      hints: [
        // EN: Compare the two arrows in the 1s box with the two arrows in the 2s box.
        "比較 1s 方格內的兩個箭嘴和 2s 方格內的兩個箭嘴。",
        // EN: Which principle says that two electrons in the same orbital must have opposite spins?
        "哪一條原理指出，同一軌態內的兩個電子必須自旋相反？",
      ],
      // EN: <p>The two electrons in the 2s orbital are drawn with the same spin (both arrows up). The <strong>Pauli exclusion principle</strong> says an orbital can hold at most two electrons, and they must have opposite spins. The 2s box should show one arrow up and one arrow down.</p>
      solution: "<p>2s 軌態內的兩個電子畫成自旋相同（兩個箭嘴都向上）。<strong>泡利不相容原理</strong>指出，一個軌態最多容納兩個電子，而且兩者必須自旋相反。2s 方格應該有一個向上箭嘴和一個向下箭嘴。</p>",
      misconception: {
        // EN (option A): The Aufbau principle is about filling the lowest-energy sublevels first. Here 1s is full before 2s is used, so the order is right.
        "0": "構築原理是指先填充能量最低的亞層。圖中 1s 填滿後才用 2s，所以次序正確。",
        // EN (option B): Hund’s rule is about how electrons spread out over several orbitals of the same energy, such as the three 2p orbitals. A 2s sublevel has only one orbital.
        "1": "洪特規則是指電子怎樣分佈在幾個能量相同的軌態中，例如三個 2p 軌態。2s 亞層只有一個軌態。",
        // EN (option D): Look at the two arrows in the 2s box. They point the same way.
        "3": "看看 2s 方格內的兩個箭嘴。它們指向同一方向。",
      },
    },

    // ── s1-3-q018 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q018": {
      // EN: <p>What is the electron configuration of the sulfide ion, <span class="chem">S^2-</span>? (Sulfur has Z = 16.)</p>
      stem: "<p>硫離子 <span class=\"chem\">S^2-</span> 的電子排佈是甚麼？（硫的 Z = 16。）</p>",
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
        "先求出電子數目：由原子序開始，再按電荷調整。",
        // EN: A negative charge means extra electrons.
        "帶負電荷表示多了電子。",
      ],
      // EN: <p>A sulfur atom has 16 electrons. The 2− charge means two extra electrons: 16 + 2 = 18 electrons.</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span><br>&nbsp;&nbsp;(the same configuration as argon)</div>
      solution: "<p>硫原子有 16 個電子。2− 電荷表示多了兩個電子：16 + 2 = 18 個電子。</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span><br>&nbsp;&nbsp;（與氬的電子排佈相同）</div>",
      misconception: {
        // EN (option A): This has 14 electrons. A 2− charge means the atom has <em>gained</em> two electrons, not lost them.
        "0": "這裏只有 14 個電子。2− 電荷表示原子<em>得到</em>了兩個電子，不是失去。",
        // EN (option B): This is the sulfur atom, with 16 electrons. The ion has two more.
        "1": "這是硫原子，有 16 個電子。離子多兩個。",
        // EN (option D): This has 20 electrons. The ion has 16 + 2 = 18.
        "3": "這裏有 20 個電子。離子有 16 + 2 = 18 個。",
      },
    },

    // ── s1-3-q019 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q019": {
      // EN: <p>What is the condensed electron configuration of a chromium atom (Z = 24) in its ground state?</p>
      stem: "<p>鉻原子（Z = 24）處於基態時，簡寫電子排佈是甚麼？</p>",
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
        "氬有 18 個電子，所以還需要 6 個。",
        // EN: Chromium and copper are the two exceptions to the usual filling order.
        "鉻和銅是不跟從一般填充次序的兩個例外。",
      ],
      // EN: <p>Chromium has 24 electrons: the argon core (18) plus 6. The usual order predicts <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>, but chromium is an exception. Its ground state is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>. (Writing it as <span class="mono">[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span> is also accepted.)</p>
      solution: "<p>鉻有 24 個電子：氬核心（18 個）再加 6 個。按一般次序會得出 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>，但鉻是例外。它的基態是 <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>。（寫成 <span class=\"mono\">[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span> 也可接受。）</p>",
      misconception: {
        // EN (option A): This is what the usual filling order predicts, but chromium is one of the two exceptions you must know.
        "0": "這是按一般填充次序得出的排佈，但鉻是你必須記住的兩個例外之一。",
        // EN (option C): This has the right number of electrons, but the 4s orbital is not empty in a chromium atom.
        "2": "電子數目正確，但鉻原子的 4s 軌態並不是空的。",
        // EN (option D): The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after chromium.
        "3": "貴氣體核心必須是該元素<em>之前</em>的貴氣體。氪（Z = 36）在鉻之後。",
      },
    },

    // ── s1-3-q020 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q020": {
      // EN: <p>What is the full electron configuration of a copper atom (Z = 29) in its ground state?</p>
      stem: "<p>銅原子（Z = 29）處於基態時，完整電子排佈是甚麼？</p>",
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
        "上標的總和必須是 29。",
        // EN: Chromium and copper are the two exceptions to the usual filling order.
        "鉻和銅是不跟從一般填充次序的兩個例外。",
      ],
      // EN: <p>Copper has 29 electrons. The usual order predicts <span class="mono">4s<sup>2</sup> 3d<sup>9</sup></span> after the argon core, but copper is an exception. Its ground state is</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 6 + 1 + 10<br>&nbsp;&nbsp;= 29)</div>
      solution: "<p>銅有 29 個電子。按一般次序，氬核心之後會是 <span class=\"mono\">4s<sup>2</sup> 3d<sup>9</sup></span>，但銅是例外。它的基態是</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 6 + 1 + 10<br>&nbsp;&nbsp;= 29)</div>",
      misconception: {
        // EN (option A): This is what the usual filling order predicts, but copper is one of the two exceptions you must know.
        "0": "這是按一般填充次序得出的排佈，但銅是你必須記住的兩個例外之一。",
        // EN (option C): Count the electrons: this has 28. A copper atom has 29.
        "2": "數一數電子：這裏只有 28 個。銅原子有 29 個。",
        // EN (option D): Count the electrons: this has 30. That is zinc.
        "3": "數一數電子：這裏有 30 個。那是鋅。",
      },
    },

    // ── s1-3-q021 · numeric · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q021": {
      // EN: <p>How many <strong>unpaired</strong> electrons are there in an iron atom (Z = 26) in its ground state?</p>
      stem: "<p>鐵原子（Z = 26）處於基態時，有多少個<strong>不成對</strong>電子？</p>",
      hints: [
        // EN: Write the configuration first. Only a partly filled sublevel can contain unpaired electrons.
        "先寫出電子排佈。只有未填滿的亞層才會有不成對電子。",
        // EN: A d sublevel has five orbitals. Put one electron in each orbital before pairing any (Hund’s rule).
        "d 亞層有五個軌態。先在每個軌態各放一個電子，然後才配對（洪特規則 (Hund’s rule)）。",
      ],
      // EN: <p>Iron is <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. The 4s orbital is full, so its two electrons are paired. The 3d sublevel has five orbitals and six electrons. By Hund’s rule the first five electrons go into separate orbitals, and the sixth pairs up with one of them.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagram for iron beyond the argon core. The 4s box has one up and one down arrow. The five 3d boxes hold: an up and a down arrow, then one up arrow in each of the other four."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">4s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="78" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M93 25V8M89 13L93 8L97 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M123 25V8M119 13L123 8L127 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="123" y="50" text-anchor="middle" font-size="14" fill="currentColor">3d</text></svg></p><p>That leaves <strong>4</strong> unpaired electrons.</p>
      solution: "<p>鐵是 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>。4s 軌態已填滿，所以它的兩個電子成對。3d 亞層有五個軌態、六個電子。根據洪特規則，首五個電子分別進入不同的軌態，第六個電子與其中一個配對。</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"鐵在氬核心以外的軌態圖。4s 方格內有一個向上箭嘴和一個向下箭嘴。五個 3d 方格中，第一個有一個向上箭嘴和一個向下箭嘴，其餘四個各有一個向上箭嘴。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"78\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M93 25V8M89 13L93 8L97 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M123 25V8M119 13L123 8L127 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"123\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3d</text></svg></p><p>所以有 <strong>4</strong> 個不成對電子。</p>",
      // EN: unpaired electrons
      unit: "個不成對電子",
    },

    // ── s1-3-q022 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q022": {
      // EN: <p>A student draws this orbital diagram for a nitrogen atom (Z = 7) in its ground state.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Orbital diagram. The 1s box and the 2s box each contain one up arrow and one down arrow. Of the three 2p boxes, the first contains an up arrow and a down arrow, the second contains one up arrow, and the third is empty."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M104 25V8M100 13L104 8L108 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M114 7V24M110 19L114 24L118 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>一名學生為處於基態的氮原子（Z = 7）畫了以下軌態圖。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"軌態圖。1s 方格和 2s 方格各有一個向上箭嘴和一個向下箭嘴。三個 2p 方格中，第一個有一個向上箭嘴和一個向下箭嘴，第二個有一個向上箭嘴，第三個是空的。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M104 25V8M100 13L104 8L108 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M114 7V24M110 19L114 24L118 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>這個圖違反了哪一條規則或原理？</p>",
      options: [
        // EN: The Aufbau principle
        "構築原理 (Aufbau principle)",
        // EN: Hund’s rule
        "洪特規則 (Hund’s rule)",
        // EN: The Pauli exclusion principle
        "泡利不相容原理 (Pauli exclusion principle)",
        // EN: None. The diagram is correct.
        "沒有違反。這個圖正確。",
      ],
      hints: [
        // EN: The number of electrons (7) and the order of the sublevels are both right. Look at how the 2p electrons are arranged.
        "電子數目（7）和亞層的次序都正確。看看 2p 電子怎樣排列。",
        // EN: Which rule says orbitals of the same energy are each occupied singly before any is doubly occupied?
        "哪一條規則指出，能量相同的軌態要先各自有一個電子，然後才有軌態容納兩個電子？",
      ],
      // EN: <p><strong>Hund’s rule</strong>: orbitals in the same sublevel are each occupied by one electron, with parallel spins, before any orbital is doubly occupied. The three 2p electrons of nitrogen should be in three separate 2p orbitals, all with the same spin.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Correct orbital diagram for nitrogen. The 1s and 2s boxes each contain a pair of opposite arrows. Each of the three 2p boxes contains one up arrow."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M169 25V8M165 13L169 8L173 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p>
      solution: "<p><strong>洪特規則</strong>：同一亞層的軌態先各自容納一個電子，而且自旋平行，然後才有軌態容納兩個電子。氮的三個 2p 電子應該分別在三個 2p 軌態內，自旋全部相同。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"氮的正確軌態圖。1s 和 2s 方格各有一對方向相反的箭嘴。三個 2p 方格各有一個向上箭嘴。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M169 25V8M165 13L169 8L173 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p>",
      misconception: {
        // EN (option A): The sublevels are filled in the right order: 1s, then 2s, then 2p. The problem is inside the 2p sublevel.
        "0": "亞層的填充次序正確：先 1s，再 2s，然後 2p。問題出在 2p 亞層之內。",
        // EN (option C): Every orbital that holds two electrons shows one arrow up and one arrow down, so the Pauli exclusion principle is obeyed.
        "2": "每個容納兩個電子的軌態，都有一個向上箭嘴和一個向下箭嘴，所以符合泡利不相容原理。",
        // EN (option D): Look at the 2p sublevel. One orbital holds a pair while another orbital of the same energy is empty.
        "3": "看看 2p 亞層。一個軌態內有一對電子，而另一個能量相同的軌態卻是空的。",
      },
    },

    // ── s1-3-q023 · multi · exam · SL · Structure 1.3.5 · 2 marks
    "s1-3-q023": {
      // EN: <p>Which ions have the same electron configuration as an argon atom, <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>?</p>
      stem: "<p>以下哪些離子的電子排佈與氬原子（<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>）相同？</p>",
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
        "氬有 18 個電子。數一數每種離子的電子。",
        // EN: Electrons in an ion = atomic number − charge. For a 2− ion, subtracting −2 adds two.
        "離子的電子數 = 原子序 − 電荷。對 2− 離子來說，減去 −2 即是加兩個。",
      ],
      // EN: <p>Argon has 18 electrons. Count the electrons in each ion:</p><div class="worked__math"><span class="chem">K+</span>: 19 − 1 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">Cl-</span>: 17 + 1 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">Na+</span>: 11 − 1 = 10 &nbsp; no (neon)</div><div class="worked__math"><span class="chem">Ca^2+</span>: 20 − 2 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">O^2-</span>: 8 + 2 = 10 &nbsp; no (neon)</div><div class="worked__math"><span class="chem">S^2-</span>: 16 + 2 = 18 &nbsp; yes</div>
      solution: "<p>氬有 18 個電子。數一數每種離子的電子：</p><div class=\"worked__math\"><span class=\"chem\">K+</span>: 19 − 1 = 18 &nbsp; 相同</div><div class=\"worked__math\"><span class=\"chem\">Cl-</span>: 17 + 1 = 18 &nbsp; 相同</div><div class=\"worked__math\"><span class=\"chem\">Na+</span>: 11 − 1 = 10 &nbsp; 不同（氖）</div><div class=\"worked__math\"><span class=\"chem\">Ca^2+</span>: 20 − 2 = 18 &nbsp; 相同</div><div class=\"worked__math\"><span class=\"chem\">O^2-</span>: 8 + 2 = 10 &nbsp; 不同（氖）</div><div class=\"worked__math\"><span class=\"chem\">S^2-</span>: 16 + 2 = 18 &nbsp; 相同</div>",
      misconception: {
        // EN (option C): A sodium atom has 11 electrons, so <span class="chem">Na+</span> has 10. That is the configuration of neon, not argon.
        "2": "鈉原子有 11 個電子，所以 <span class=\"chem\">Na+</span> 有 10 個。那是氖的電子排佈，不是氬的。",
        // EN (option E): An oxygen atom has 8 electrons, so <span class="chem">O^2-</span> has 10. That is the configuration of neon, not argon.
        "4": "氧原子有 8 個電子，所以 <span class=\"chem\">O^2-</span> 有 10 個。那是氖的電子排佈，不是氬的。",
      },
    },

    // ── s1-3-q024 · numeric · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q024": {
      // EN: <p>How many <strong>orbitals</strong> are there in total in the main energy level n = 3?</p>
      stem: "<p>主能級 n = 3 內總共有多少個<strong>軌態</strong>？</p>",
      hints: [
        // EN: The third main energy level has three sublevels: 3s, 3p and 3d.
        "第三主能級有三個亞層：3s、3p 和 3d。",
        // EN: An s sublevel has 1 orbital, a p sublevel has 3 and a d sublevel has 5.
        "s 亞層有 1 個軌態，p 亞層有 3 個，d 亞層有 5 個。",
      ],
      // EN: <div class="worked__math">3s: 1 orbital &nbsp; 3p: 3 orbitals &nbsp; 3d: 5 orbitals</div><div class="worked__math">total = 1 + 3 + 5 = 9 orbitals</div><p>Check: each orbital holds 2 electrons, so n = 3 holds 9 × 2 = 18 electrons, which agrees with 2n<sup>2</sup> = 18. The common slip is to answer 18, which is the number of electrons, not orbitals.</p>
      solution: "<div class=\"worked__math\">3s: 1 個軌態 &nbsp; 3p: 3 個軌態 &nbsp; 3d: 5 個軌態</div><div class=\"worked__math\">總數 = 1 + 3 + 5 = 9 個軌態</div><p>核對：每個軌態容納 2 個電子，所以 n = 3 可容納 9 × 2 = 18 個電子，與 2n<sup>2</sup> = 18 吻合。常見錯誤是答 18，那是電子的數目，不是軌態的數目。</p>",
      // EN: orbitals
      unit: "個軌態",
    },

    // ── s1-3-q025 · mcq · challenge · SL · Structure 1.3.5 · 1 mark
    "s1-3-q025": {
      // EN: <p>Atoms of element X have the configuration <span class="mono">[Ne] 3s<sup>2</sup></span>. Atoms of element Y have the configuration <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>. X and Y form an ionic compound in which each ion has a noble gas configuration.</p><p>Which row gives the formula of the compound and the configurations of the ions?</p>
      stem: "<p>元素 X 的原子的電子排佈是 <span class=\"mono\">[Ne] 3s<sup>2</sup></span>。元素 Y 的原子的電子排佈是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>。X 和 Y 形成一種離子化合物，當中每種離子都具有貴氣體的電子排佈。</p><p>哪一行正確列出這種化合物的化學式和離子的電子排佈？</p>",
      options: [
        // EN: X<sub>3</sub>Y<sub>2</sub>. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "X<sub>3</sub>Y<sub>2</sub>。兩種離子都是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。",
        // EN: X<sub>2</sub>Y<sub>3</sub>. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "X<sub>2</sub>Y<sub>3</sub>。兩種離子都是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。",
        // EN: X<sub>3</sub>Y<sub>2</sub>. The X ion is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span> and the Y ion is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup></span>.
        "X<sub>3</sub>Y<sub>2</sub>。X 離子是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>，Y 離子是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup></span>。",
        // EN: XY. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "XY。兩種離子都是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。",
      ],
      hints: [
        // EN: X has two outer electrons. Y has five. Which loses electrons and which gains?
        "X 有兩個外層電子，Y 有五個。哪一個失去電子，哪一個得到電子？",
        // EN: Find the charge on each ion, then balance the charges to get the formula.
        "求出每種離子的電荷，再平衡電荷，得出化學式。",
      ],
      // EN: <p>X (<span class="mono">[Ne] 3s<sup>2</sup></span>, magnesium) loses its two 3s electrons to form X<sup>2+</sup>: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Y (<span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>, nitrogen) gains three electrons to form Y<sup>3−</sup>: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Balance the charges: 3 × (2+) = 6+ and 2 × (3−) = 6−, so the formula is X<sub>3</sub>Y<sub>2</sub> (<span class="chem">Mg3N2</span>).</p>
      solution: "<p>X（<span class=\"mono\">[Ne] 3s<sup>2</sup></span>，鎂）失去兩個 3s 電子，形成 X<sup>2+</sup>：<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。</p><p>Y（<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>，氮）得到三個電子，形成 Y<sup>3−</sup>：<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>。</p><p>平衡電荷：3 × (2+) = 6+，2 × (3−) = 6−，所以化學式是 X<sub>3</sub>Y<sub>2</sub>（<span class=\"chem\">Mg3N2</span>）。</p>",
      misconception: {
        // EN (option B): The configurations are right, but the formula is not. Three 2+ ions balance two 3− ions, so the numbers go the other way round.
        "1": "電子排佈正確，但化學式不對。三個 2+ 離子才能平衡兩個 3− 離子，所以兩個數字要對調。",
        // EN (option C): Y is a non-metal with five outer electrons. It gains three electrons to fill 2p. It does not lose its 2p electrons.
        "2": "Y 是非金屬，有五個外層電子。它得到三個電子來填滿 2p，不會失去 2p 電子。",
        // EN (option D): The charges are not equal in size. X forms a 2+ ion and Y forms a 3− ion, so a 1 : 1 formula is not neutral.
        "3": "兩種離子的電荷大小不相等。X 形成 2+ 離子，Y 形成 3− 離子，所以 1 : 1 的化學式不是電中性的。",
      },
    },

    // ── s1-3-q026 · mcq · challenge · SL · Structure 1.3.5 · 1 mark
    "s1-3-q026": {
      // EN: <p>Which atom has the <strong>greatest</strong> number of unpaired electrons in its ground state?</p>
      stem: "<p>哪一個原子在基態時的不成對電子數目<strong>最多</strong>？</p>",
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
        "寫出每個原子的簡寫電子排佈。記住兩個例外。",
        // EN: Use Hund’s rule in each partly filled sublevel: one electron per orbital before any pairing.
        "在每個未填滿的亞層應用洪特規則 (Hund’s rule)：每個軌態先放一個電子，然後才配對。",
      ],
      // EN: <p>Write each configuration and count the singly occupied orbitals.</p><div class="worked__math">Cr: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> &nbsp; 1 + 5<br>&nbsp;&nbsp;= 6 unpaired</div><div class="worked__math">Mn: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> &nbsp; 5 unpaired</div><div class="worked__math">Fe: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp; 4 unpaired</div><div class="worked__math">As: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> &nbsp; 3 unpaired</div><p>Chromium is an exception to the usual filling order. Its single 4s electron and its five 3d electrons are all unpaired, so it has the most: 6.</p>
      solution: "<p>寫出每個電子排佈，數一數只有一個電子的軌態。</p><div class=\"worked__math\">Cr: <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> &nbsp; 1 + 5<br>&nbsp;&nbsp;= 6 個不成對</div><div class=\"worked__math\">Mn: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> &nbsp; 5 個不成對</div><div class=\"worked__math\">Fe: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp; 4 個不成對</div><div class=\"worked__math\">As: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> &nbsp; 3 個不成對</div><p>鉻不跟從一般的填充次序。它唯一的 4s 電子和五個 3d 電子全部不成對，所以數目最多：6 個。</p>",
      misconception: {
        // EN (option B): Manganese, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>, has five unpaired electrons. One of the other atoms has more, because of an exception to the usual filling order.
        "1": "錳（<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>）有五個不成對電子。另一個原子因為不跟從一般的填充次序，所以有更多。",
        // EN (option C): Iron, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>, has four unpaired electrons. The sixth 3d electron has to pair up.
        "2": "鐵（<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>）有四個不成對電子。第六個 3d 電子必須配對。",
        // EN (option D): Arsenic, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span>, has three unpaired electrons, all in 4p. The 3d sublevel is full.
        "3": "砷（<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span>）有三個不成對電子，全部在 4p。3d 亞層已填滿。",
      },
    },

    // ── s1-3-q027 · mcq · exam · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q027": {
      // EN: <p>What is the condensed electron configuration of the <span class="chem">Fe^3+</span> ion? (Iron has Z = 26.)</p>
      stem: "<p><span class=\"chem\">Fe^3+</span> 離子的簡寫電子排佈是甚麼？（鐵的 Z = 26。）</p>",
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
        "由原子開始：<span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>。必須移走三個電子。",
        // EN: Which sublevel loses electrons first when a first-row transition element forms a positive ion?
        "第一列過渡元素形成正離子時，哪個亞層先失去電子？",
      ],
      // EN: <p>The iron atom is <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. When first-row transition elements form ions, the 4s electrons are removed before the 3d electrons. Remove the two 4s electrons, then one 3d electron:</p><div class="worked__math"><span class="chem">Fe^3+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span> &nbsp; (26 − 3<br>&nbsp;&nbsp;= 23 electrons)</div><p>This skill is listed for HL in Structure 3.1.</p>
      solution: "<p>鐵原子是 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>。第一列過渡元素形成離子時，4s 電子比 3d 電子先被移走。先移走兩個 4s 電子，再移走一個 3d 電子：</p><div class=\"worked__math\"><span class=\"chem\">Fe^3+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span> &nbsp; (26 − 3<br>&nbsp;&nbsp;= 23 個電子)</div><p>這項技能列於 Structure 3.1 的 HL 內容。</p>",
      misconception: {
        // EN (option A): This removes all three electrons from 3d. When a first-row transition element forms an ion, the 4s electrons are lost first.
        "0": "這是把三個電子全部從 3d 移走。第一列過渡元素形成離子時，先失去 4s 電子。",
        // EN (option B): This removes one 4s electron and two 3d electrons. Both 4s electrons are lost before any 3d electron.
        "1": "這是移走一個 4s 電子和兩個 3d 電子。兩個 4s 電子都失去後，才輪到 3d 電子。",
        // EN (option D): This has three <em>more</em> electrons than the atom. A 3+ charge means three electrons have been lost.
        "3": "這比原子<em>多</em>了三個電子。3+ 電荷表示失去了三個電子。",
      },
    },

    // ── s1-3-q028 · mcq · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q028": {
      // EN: <p>Which feature of the emission spectrum of an atom can be used to find its first ionization energy?</p>
      stem: "<p>原子發射光譜的哪一項特徵可以用來求出它的第一電離能？</p>",
      options: [
        // EN: The line with the lowest frequency in the visible region
        "可見光區中頻率最低的譜線",
        // EN: The total number of lines in the spectrum
        "光譜中譜線的總數",
        // EN: The limit of convergence at high frequency
        "高頻處的會聚極限 (limit of convergence)",
        // EN: The spacing between the first two lines of a set
        "一組譜線中頭兩條線之間的距離",
      ],
      hints: [
        // EN: Ionization means the electron is removed completely, to n = ∞. Where do the lines end up as the upper level gets higher and higher?
        "電離是指電子被完全移走，到達 n = ∞。當電子出發的能級越來越高，譜線最終會到哪裏？",
      ],
      // EN: <p>The lines in a set get closer together at higher frequency until they merge. This point is the <strong>limit of convergence</strong>. It corresponds to the electron moving between the lower level and n = ∞, which is ionization. Its frequency (or wavelength) gives the ionization energy using E = hf.</p>
      solution: "<p>一組譜線在頻率越高處越密，直至合而為一。這一點就是<strong>會聚極限</strong>。它對應電子在較低能級與 n = ∞ 之間的移動，也就是電離。利用 E = hf，由它的頻率（或波長）可求出電離能。</p>",
      misconception: {
        // EN (option A): A single line gives the energy difference between two levels inside the atom. Ionization means the electron leaves the atom completely.
        "0": "單一條譜線只給出原子內兩個能級之間的能量差。電離是指電子完全離開原子。",
        // EN (option B): The number of lines does not measure an energy.
        "1": "譜線的數目並不量度能量。",
        // EN (option D): The spacing between two lines gives the energy difference between two upper levels. It does not give the energy needed to remove the electron.
        "3": "兩條譜線之間的距離給出兩個較高能級之間的能量差，不能給出移走電子所需的能量。",
      },
    },

    // ── s1-3-q029 · mcq · exam · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q029": {
      // EN: <p>Why does the first ionization energy generally <strong>increase</strong> across period 3, from sodium to argon?</p>
      stem: "<p>為甚麼橫跨第 3 週期，由鈉到氬，第一電離能大致<strong>上升</strong>？</p>",
      options: [
        // EN: The number of occupied main energy levels increases.
        "有電子的主能級數目增加。",
        // EN: The nuclear charge increases while the shielding by inner electrons stays about the same.
        "核電荷增加，而內層電子的屏蔽大致不變。",
        // EN: The atoms get larger, so the outer electrons are further from the nucleus.
        "原子變大，所以外層電子離原子核較遠。",
        // EN: The shielding by inner electrons increases with each element.
        "每過一個元素，內層電子的屏蔽都增加。",
      ],
      hints: [
        // EN: What changes in the nucleus from one element to the next?
        "由一個元素到下一個元素，原子核有甚麼改變？",
        // EN: Are the extra electrons going into a new main energy level or the same one?
        "新增的電子是進入新的主能級，還是同一個主能級？",
      ],
      // EN: <p>Across the period the number of protons increases, so the nuclear charge increases. The outer electrons are all in the same main energy level (n = 3), so the shielding by the inner electrons is about the same. The outer electrons are attracted more strongly to the nucleus (and are closer to it), so more energy is needed to remove one.</p>
      solution: "<p>橫跨週期，質子數目增加，所以核電荷增加。外層電子全部在同一個主能級（n = 3），所以內層電子的屏蔽大致相同。原子核對外層電子的吸引較強（電子也較接近原子核），所以移走一個電子需要較多能量。</p>",
      misconception: {
        // EN (option A): All the period 3 elements have three occupied main energy levels. A new level starts only at the next period.
        "0": "第 3 週期的元素全部有三個有電子的主能級。到下一個週期才開始新的能級。",
        // EN (option C): The atoms get <em>smaller</em> across a period. And an electron further from the nucleus would be easier to remove, not harder.
        "2": "橫跨週期，原子會變<em>小</em>。而且電子離原子核越遠，就越容易移走，不是越難。",
        // EN (option D): Across a period the extra electrons go into the same main energy level, so the number of inner (shielding) electrons does not change. More shielding would also make ionization easier, not harder.
        "3": "橫跨週期，新增的電子進入同一個主能級，所以內層（起屏蔽作用的）電子數目不變。而且屏蔽越大，電離會越容易，不是越難。",
      },
    },

    // ── s1-3-q030 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q030": {
      // EN: <p>The first ionization energies of three group 1 elements are: Li 520, Na 496 and K 419 <span class="unit">kJ mol-1</span>.</p><p>Explain why the first ionization energy decreases down the group.</p>
      stem: "<p>三種第 1 族元素的第一電離能分別是：Li 520、Na 496 和 K 419 <span class=\"unit\">kJ mol-1</span>。</p><p>解釋 (explain) 為甚麼第一電離能沿族向下遞減。</p>",
      hints: [
        // EN: Compare where the outer electron is: 2s in Li, 3s in Na, 4s in K.
        "比較外層電子的位置：Li 在 2s，Na 在 3s，K 在 4s。",
        // EN: Two things change that both weaken the attraction to the nucleus. Name both.
        "有兩項改變都會減弱原子核的吸引。把兩項都寫出來。",
      ],
      // EN: <p>Going down the group, the outer electron is in a higher main energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove it.</p>
      answer: "<p>沿族向下，外層電子處於較高的主能級，所以離原子核較遠。內層電子也較多，所以外層電子受到的屏蔽較大。原子核與外層電子之間的吸引較弱（儘管核電荷較大），所以移走它所需的能量較少。</p>",
      markscheme: [
        // EN: The outer electron is in a higher main energy level / is further from the nucleus (accept: atomic radius increases).
        "外層電子處於較高的主能級／離原子核較遠（接受：原子半徑增大）。",
        // EN: There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker (this outweighs the increase in nuclear charge).
        "內層電子的屏蔽較大，所以原子核與外層電子之間的吸引較弱（這個影響大於核電荷的增加）。",
      ],
    },

    // ── s1-3-q031 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q031": {
      // EN: <p>The first ionization energy of beryllium is 900 <span class="unit">kJ mol-1</span> and that of boron is 801 <span class="unit">kJ mol-1</span>, even though boron has the greater nuclear charge.</p><p>Explain why boron has the lower first ionization energy.</p>
      stem: "<p>鈹的第一電離能是 900 <span class=\"unit\">kJ mol-1</span>，硼的是 801 <span class=\"unit\">kJ mol-1</span>，儘管硼的核電荷較大。</p><p>解釋 (explain) 為甚麼硼的第一電離能較低。</p>",
      hints: [
        // EN: Write the electron configuration of each atom. Which sublevel does the outermost electron come from?
        "寫出每個原子的電子排佈。最外層的電子來自哪個亞層？",
        // EN: Base the explanation on the energy of the electron that is removed.
        "解釋時要以被移走電子的能量為根據。",
      ],
      // EN: <p>Beryllium is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup></span>, so the electron removed comes from the 2s sublevel. Boron is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup></span>, so the electron removed comes from the 2p sublevel. The 2p sublevel is higher in energy than the 2s sublevel (the 2p electron is also shielded by the 2s electrons), so less energy is needed to remove it.</p>
      answer: "<p>鈹是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup></span>，所以被移走的電子來自 2s 亞層。硼是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup></span>，所以被移走的電子來自 2p 亞層。2p 亞層的能量比 2s 亞層高（2p 電子還受到 2s 電子的屏蔽），所以移走它所需的能量較少。</p>",
      markscheme: [
        // EN: The electron is removed from the 2p sublevel in B but from the 2s sublevel in Be (accept: configurations 1s² 2s² 2p¹ and 1s² 2s² used to show this).
        "B 的電子從 2p 亞層移走，而 Be 的電子從 2s 亞層移走（接受：用電子排佈 1s² 2s² 2p¹ 和 1s² 2s² 說明這一點）。",
        // EN: The 2p sublevel is higher in energy than 2s / the 2p electron is further from the nucleus and shielded by the 2s electrons, so it is easier to remove.
        "2p 亞層的能量比 2s 高／2p 電子離原子核較遠，並受到 2s 電子的屏蔽，所以較容易移走。",
      ],
    },

    // ── s1-3-q032 · short · challenge · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q032": {
      // EN: <p>The first ionization energy of nitrogen is 1402 <span class="unit">kJ mol-1</span> and that of oxygen is 1314 <span class="unit">kJ mol-1</span>. In both atoms the electron is removed from the 2p sublevel, and oxygen has the greater nuclear charge.</p><p>Explain why oxygen has the lower first ionization energy.</p>
      stem: "<p>氮的第一電離能是 1402 <span class=\"unit\">kJ mol-1</span>，氧的是 1314 <span class=\"unit\">kJ mol-1</span>。兩種原子的電子都是從 2p 亞層移走，而氧的核電荷較大。</p><p>解釋 (explain) 為甚麼氧的第一電離能較低。</p>",
      hints: [
        // EN: Draw the three 2p boxes for each atom and fill them using Hund’s rule.
        "為每個原子畫出三個 2p 方格，按洪特規則 (Hund’s rule) 填入電子。",
        // EN: What is different about the orbital that the electron leaves in oxygen?
        "在氧原子中，電子離開的那個軌態有甚麼不同？",
        // EN: Do not write about a half-filled sublevel being "stable". Explain using repulsion and the energy of the electron removed.
        "不要寫半滿的亞層「穩定」。要用排斥和被移走電子的能量來解釋。",
      ],
      // EN: <p>Nitrogen is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>: each 2p orbital holds one electron. Oxygen is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></span>: one 2p orbital holds two electrons. The electron removed from oxygen comes from this doubly occupied 2p orbital. The two electrons in the same orbital repel each other, which raises the energy of the electron, so less energy is needed to remove it.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagrams of the 2p sublevel. In nitrogen each of the three 2p boxes holds one up arrow. In oxygen the first 2p box holds an up and a down arrow and the other two hold one up arrow each."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M17 25V8M13 13L17 8L21 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M47 25V8M43 13L47 8L51 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="62" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M77 25V8M73 13L77 8L81 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="47" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p in N</text><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M118 25V8M114 13L118 8L122 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 7V24M124 19L128 24L132 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="153" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p in O</text></svg></p>
      answer: "<p>氮是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>：每個 2p 軌態各有一個電子。氧是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></span>：其中一個 2p 軌態有兩個電子。氧被移走的電子來自這個有兩個電子的 2p 軌態。同一軌態內的兩個電子互相排斥，令電子的能量升高，所以移走它所需的能量較少。</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"2p 亞層的軌態圖。氮的三個 2p 方格各有一個向上箭嘴。氧的第一個 2p 方格有一個向上箭嘴和一個向下箭嘴，其餘兩個各有一個向上箭嘴。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M17 25V8M13 13L17 8L21 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"32\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M47 25V8M43 13L47 8L51 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"62\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M77 25V8M73 13L77 8L81 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"47\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p in N</text><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M118 25V8M114 13L118 8L122 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M128 7V24M124 19L128 24L132 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"153\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p in O</text></svg></p>",
      markscheme: [
        // EN: In O the electron is removed from a doubly occupied 2p orbital / a 2p orbital containing a pair of electrons (in N each 2p orbital is singly occupied).
        "O 的電子從有兩個電子的 2p 軌態移走／從含有一對電子的 2p 軌態移走（N 的每個 2p 軌態只有一個電子）。",
        // EN: Repulsion between the two electrons in the same orbital makes the electron easier to remove (accept: raises its energy).
        "同一軌態內兩個電子之間的排斥，令該電子較容易移走（接受：令它的能量升高）。",
      ],
    },

    // ── s1-3-q033 · numeric · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q033": {
      // EN: <p>The red line in the visible emission spectrum of hydrogen has a wavelength of 656 nm.</p><p>Calculate the frequency of this light. Use c = 3.00 × 10<sup>8</sup> <span class="unit">m s-1</span> and give your answer to three significant figures.</p>
      stem: "<p>氫的可見光發射光譜中，紅色譜線的波長是 656 nm。</p><p>計算 (calculate) 這種光的頻率。使用 c = 3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>，答案取至 3 位有效數字。</p>",
      hints: [
        // EN: The data booklet gives c = λf. Rearrange it to make f the subject.
        "數據手冊提供 c = λf。把它重排，使 f 成為主項。",
        // EN: Convert the wavelength to metres first: 1 nm = 1 × 10<sup>−9</sup> m.
        "先把波長換算成米：1 nm = 1 × 10<sup>−9</sup> m。",
      ],
      // EN: <p>Convert the wavelength to metres, then use c = λf.</p><div class="worked__math">λ = 656 nm<br>&nbsp;&nbsp;= 656 × 10<sup>−9</sup> m<br>&nbsp;&nbsp;= 6.56 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (6.56 × 10<sup>−7</sup> m)</div><div class="worked__math">f = 4.57 × 10<sup>14</sup> <span class="unit">s-1</span><br>&nbsp;&nbsp;= 4.57 × 10<sup>14</sup> Hz</div><p>If you leave the wavelength in nm you get 4.57 × 10<sup>5</sup>, which is too small by a factor of 10<sup>9</sup>.</p>
      solution: "<p>先把波長換算成米，再用 c = λf。</p><div class=\"worked__math\">λ = 656 nm<br>&nbsp;&nbsp;= 656 × 10<sup>−9</sup> m<br>&nbsp;&nbsp;= 6.56 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (6.56 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">f = 4.57 × 10<sup>14</sup> <span class=\"unit\">s-1</span><br>&nbsp;&nbsp;= 4.57 × 10<sup>14</sup> Hz</div><p>如果波長仍然用 nm，會得出 4.57 × 10<sup>5</sup>，只有正確答案的 10<sup>9</sup> 分之一。</p>",
    },

    // ── s1-3-q034 · numeric · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q034": {
      // EN: <p>One line in the emission spectrum of hydrogen has a frequency of 6.17 × 10<sup>14</sup> Hz.</p><p>Calculate the energy of one photon of this light. Use h = 6.63 × 10<sup>−34</sup> J s and give your answer to three significant figures.</p>
      stem: "<p>氫發射光譜中，一條譜線的頻率是 6.17 × 10<sup>14</sup> Hz。</p><p>計算 (calculate) 這種光一個光子的能量。使用 h = 6.63 × 10<sup>−34</sup> J s，答案取至 3 位有效數字。</p>",
      hints: [
        // EN: The data booklet gives E = hf.
        "數據手冊提供 E = hf。",
        // EN: Multiply the two numbers. Add the powers of ten: −34 + 14.
        "把兩個數相乘。10 的次方相加：−34 + 14。",
      ],
      // EN: <div class="worked__math">E = hf</div><div class="worked__math">E = (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (6.17 × 10<sup>14</sup> <span class="unit">s-1</span>)</div><div class="worked__math">E = 4.09 × 10<sup>−19</sup> J</div><p>This is the energy of <em>one</em> photon, so it is the energy change of one atom. It is a very small number of joules.</p>
      solution: "<div class=\"worked__math\">E = hf</div><div class=\"worked__math\">E = (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (6.17 × 10<sup>14</sup> <span class=\"unit\">s-1</span>)</div><div class=\"worked__math\">E = 4.09 × 10<sup>−19</sup> J</div><p>這是<em>一個</em>光子的能量，所以也是一個原子的能量變化。以焦耳計，這是個很小的數值。</p>",
    },

    // ── s1-3-q035 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q035": {
      // EN: <p>In the emission spectrum of hydrogen, the lines produced by electrons falling to n = 1 converge at a wavelength of 91.2 nm.</p><p>Calculate the first ionization energy of hydrogen, in <span class="unit">kJ mol-1</span>. Use the data booklet values of h, c and the Avogadro constant.</p>
      stem: "<p>在氫的發射光譜中，電子落到 n = 1 所產生的譜線在波長 91.2 nm 處會聚。</p><p>計算 (calculate) 氫的第一電離能，單位為 <span class=\"unit\">kJ mol-1</span>。使用數據手冊中 h、c 和亞佛加德羅常數的數值。</p>",
      hints: [
        // EN: Three steps: wavelength → frequency (c = λf), frequency → energy of one photon (E = hf), energy for one atom → energy for one mole.
        "三個步驟：波長 → 頻率（c = λf），頻率 → 一個光子的能量（E = hf），一個原子的能量 → 一摩爾的能量。",
        // EN: Convert 91.2 nm to metres before you start.
        "開始之前，先把 91.2 nm 換算成米。",
        // EN: To go from J per atom to <span class="unit">kJ mol-1</span>, multiply by 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> and divide by 1000.
        "要由每個原子的 J 換算成 <span class=\"unit\">kJ mol-1</span>，先乘以 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span>，再除以 1000。",
      ],
      // EN: <p>The convergence limit corresponds to ionization, so the photon at 91.2 nm has the energy needed to ionize one atom.</p><div class="worked__math">λ = 91.2 nm = 9.12 × 10<sup>−8</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (9.12 × 10<sup>−8</sup> m)<br>&nbsp;&nbsp;= 3.289 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (3.289 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 2.181 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">for one mole: 2.181 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 1.313 × 10<sup>6</sup> <span class="unit">J mol-1</span></div><div class="worked__math">IE = 1.313 × 10<sup>6</sup> <span class="unit">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 1313 <span class="unit">kJ mol-1</span> ≈ 1310 <span class="unit">kJ mol-1</span></div><p>Check: the data booklet value for hydrogen is 1312 <span class="unit">kJ mol-1</span>. Common slips: leaving the wavelength in nm, stopping at the energy of one atom (2.18 × 10<sup>−18</sup> J), and forgetting to divide by 1000.</p>
      solution: "<p>會聚極限對應電離，所以波長 91.2 nm 的光子所具有的能量，就是電離一個原子所需的能量。</p><div class=\"worked__math\">λ = 91.2 nm = 9.12 × 10<sup>−8</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (9.12 × 10<sup>−8</sup> m)<br>&nbsp;&nbsp;= 3.289 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (3.289 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 2.181 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;（一個原子）</div><div class=\"worked__math\">一摩爾: 2.181 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 1.313 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">IE = 1.313 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 1313 <span class=\"unit\">kJ mol-1</span> ≈ 1310 <span class=\"unit\">kJ mol-1</span></div><p>核對：數據手冊中氫的數值是 1312 <span class=\"unit\">kJ mol-1</span>。常見錯誤：波長仍然用 nm；算到一個原子的能量（2.18 × 10<sup>−18</sup> J）就停下來；忘記除以 1000。</p>",
    },

    // ── s1-3-q036 · numeric · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q036": {
      // EN: <p>In the emission spectrum of helium atoms, the lines produced by electrons falling to the lowest energy level converge at a frequency of 5.94 × 10<sup>15</sup> Hz.</p><p>Calculate the first ionization energy of helium, in <span class="unit">kJ mol-1</span>.</p>
      stem: "<p>在氦原子的發射光譜中，電子落到最低能級所產生的譜線在頻率 5.94 × 10<sup>15</sup> Hz 處會聚。</p><p>計算 (calculate) 氦的第一電離能，單位為 <span class=\"unit\">kJ mol-1</span>。</p>",
      hints: [
        // EN: You already have the frequency, so go straight to E = hf.
        "題目已給出頻率，所以直接用 E = hf。",
        // EN: E = hf gives the energy for one atom in joules. The answer must be for one mole, in kilojoules.
        "E = hf 給出的是一個原子的能量，單位是焦耳。答案必須是一摩爾的能量，單位是千焦耳。",
      ],
      // EN: <div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (5.94 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 3.938 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">for one mole: 3.938 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 2.371 × 10<sup>6</sup> <span class="unit">J mol-1</span></div><div class="worked__math">IE = 2.371 × 10<sup>6</sup> <span class="unit">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 2371 <span class="unit">kJ mol-1</span> ≈ 2370 <span class="unit">kJ mol-1</span></div><p>This is the highest first ionization energy of any element. The data booklet value is 2372 <span class="unit">kJ mol-1</span>.</p>
      solution: "<div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (5.94 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 3.938 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;（一個原子）</div><div class=\"worked__math\">一摩爾: 3.938 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 2.371 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">IE = 2.371 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 2371 <span class=\"unit\">kJ mol-1</span> ≈ 2370 <span class=\"unit\">kJ mol-1</span></div><p>這是所有元素中最高的第一電離能。數據手冊的數值是 2372 <span class=\"unit\">kJ mol-1</span>。</p>",
    },

    // ── s1-3-q037 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q037": {
      // EN: <p>The first ionization energy of sodium is 496 <span class="unit">kJ mol-1</span>.</p><p>Calculate the wavelength, in nm, of the convergence limit that corresponds to the ionization of a gaseous sodium atom. Give your answer to three significant figures.</p>
      stem: "<p>鈉的第一電離能是 496 <span class=\"unit\">kJ mol-1</span>。</p><p>計算 (calculate) 與氣態鈉原子的電離對應的會聚極限的波長，單位為 nm。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: This is the usual calculation in reverse. First find the energy needed to ionize <em>one</em> atom, in joules.
        "這是把平常的計算倒過來做。先求出電離<em>一個</em>原子所需的能量，單位為焦耳。",
        // EN: kJ → J: multiply by 1000. One mole → one atom: divide by 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span>.
        "kJ → J：乘以 1000。一摩爾 → 一個原子：除以 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span>。",
        // EN: Then f = E ÷ h, and λ = c ÷ f. Convert metres to nm at the end.
        "然後 f = E ÷ h，λ = c ÷ f。最後把米換算成 nm。",
      ],
      // EN: <p>Work backwards: energy per mole → energy per atom → frequency → wavelength.</p><div class="worked__math">IE = 496 <span class="unit">kJ mol-1</span><br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class="unit">J mol-1</span></div><div class="worked__math">for one atom: E<br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class="unit">J mol-1</span> ÷ 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 8.239 × 10<sup>−19</sup> J</div><div class="worked__math">f = E ÷ h<br>&nbsp;&nbsp;= (8.239 × 10<sup>−19</sup> J)<br>&nbsp;&nbsp;÷ (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;= 1.243 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">λ = c ÷ f<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (1.243 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 2.41 × 10<sup>−7</sup> m</div><div class="worked__math">λ = 2.41 × 10<sup>−7</sup> m × 10<sup>9</sup> <span class="unit">nm m-1</span><br>&nbsp;&nbsp;= 241 nm</div><p>241 nm is in the ultraviolet region. If you forget to change kJ to J, you get a wavelength 1000 times too long.</p>
      solution: "<p>倒過來計算：每摩爾的能量 → 每個原子的能量 → 頻率 → 波長。</p><div class=\"worked__math\">IE = 496 <span class=\"unit\">kJ mol-1</span><br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">一個原子: E<br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span> ÷ 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 8.239 × 10<sup>−19</sup> J</div><div class=\"worked__math\">f = E ÷ h<br>&nbsp;&nbsp;= (8.239 × 10<sup>−19</sup> J)<br>&nbsp;&nbsp;÷ (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;= 1.243 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">λ = c ÷ f<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (1.243 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 2.41 × 10<sup>−7</sup> m</div><div class=\"worked__math\">λ = 2.41 × 10<sup>−7</sup> m × 10<sup>9</sup> <span class=\"unit\">nm m-1</span><br>&nbsp;&nbsp;= 241 nm</div><p>241 nm 在紫外區。如果忘記把 kJ 換成 J，得出的波長會是正確答案的 1000 倍。</p>",
    },

    // ── s1-3-q038 · mcq · challenge · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q038": {
      // EN: <p>Ultraviolet radiation of wavelength 200 nm shines on separate samples of gaseous sodium atoms and gaseous magnesium atoms. The first ionization energies are Na 496 <span class="unit">kJ mol-1</span> and Mg 738 <span class="unit">kJ mol-1</span>.</p><p>For which atoms does one photon of this radiation have enough energy to remove an electron from an atom in its ground state?</p>
      stem: "<p>波長 200 nm 的紫外輻射分別照射氣態鈉原子和氣態鎂原子的樣本。第一電離能是 Na 496 <span class=\"unit\">kJ mol-1</span> 和 Mg 738 <span class=\"unit\">kJ mol-1</span>。</p><p>對哪一種原子來說，這種輻射的一個光子有足夠能量，從處於基態的原子移走一個電子？</p>",
      options: [
        // EN: Both sodium and magnesium
        "鈉和鎂都可以",
        // EN: Sodium only
        "只有鈉",
        // EN: Magnesium only
        "只有鎂",
        // EN: Neither sodium nor magnesium
        "鈉和鎂都不可以",
      ],
      hints: [
        // EN: Find the energy of one photon with f = c ÷ λ and E = hf.
        "用 f = c ÷ λ 和 E = hf 求出一個光子的能量。",
        // EN: Convert to <span class="unit">kJ mol-1</span> so that you can compare it with the two ionization energies.
        "換算成 <span class=\"unit\">kJ mol-1</span>，才能與兩個電離能比較。",
      ],
      // EN: <div class="worked__math">λ = 200 nm = 2.00 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (2.00 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 1.50 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (1.50 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 9.945 × 10<sup>−19</sup> J &nbsp; (one photon)</div><div class="worked__math">per mole: 9.945 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 599 <span class="unit">kJ mol-1</span></div><p>599 <span class="unit">kJ mol-1</span> is more than 496 <span class="unit">kJ mol-1</span> (Na) but less than 738 <span class="unit">kJ mol-1</span> (Mg). So a photon has enough energy to ionize a sodium atom but not a magnesium atom.</p>
      solution: "<div class=\"worked__math\">λ = 200 nm = 2.00 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (2.00 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 1.50 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (1.50 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 9.945 × 10<sup>−19</sup> J &nbsp; （一個光子）</div><div class=\"worked__math\">每摩爾: 9.945 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 599 <span class=\"unit\">kJ mol-1</span></div><p>599 <span class=\"unit\">kJ mol-1</span> 大於 496 <span class=\"unit\">kJ mol-1</span>（Na），但小於 738 <span class=\"unit\">kJ mol-1</span>（Mg）。所以一個光子有足夠能量電離鈉原子，但不足以電離鎂原子。</p>",
      misconception: {
        // EN (option A): The energy of one mole of these photons is 5.99 × 10<sup>5</sup> <span class="unit">J mol-1</span>. That looks larger than 738, but the units are different. Convert it to <span class="unit">kJ mol-1</span> before comparing.
        "0": "一摩爾這種光子的能量是 5.99 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span>。這個數看來比 738 大，但單位不同。先換算成 <span class=\"unit\">kJ mol-1</span> 再比較。",
        // EN (option C): A photon needs <em>at least</em> the ionization energy. The atom with the lower ionization energy is the one that is easier to ionize.
        "2": "光子的能量<em>至少</em>要等於電離能。電離能較低的原子，才是較容易電離的。",
        // EN (option D): The energy of one photon is about 10<sup>−18</sup> J, which looks tiny next to 496. But 496 <span class="unit">kJ mol-1</span> is for a mole of atoms. Multiply the photon energy by the Avogadro constant before comparing.
        "3": "一個光子的能量約為 10<sup>−18</sup> J，與 496 相比看來微不足道。但 496 <span class=\"unit\">kJ mol-1</span> 是一摩爾原子的數值。先把光子能量乘以亞佛加德羅常數，再比較。",
      },
    },

    // ── s1-3-q039 · numeric · challenge · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q039": {
      // EN: <p>In the emission spectrum of hydrogen, the lines in and near the visible region are produced by electrons falling to n = 2. These lines converge at a wavelength of 365 nm.</p><p>Calculate the energy, in <span class="unit">kJ mol-1</span>, needed to remove an electron from the n = 2 level of a hydrogen atom. Give your answer to three significant figures.</p>
      stem: "<p>在氫的發射光譜中，可見光區及其附近的譜線由落到 n = 2 的電子產生。這些譜線在波長 365 nm 處會聚。</p><p>計算 (calculate) 從氫原子的 n = 2 能級移走一個電子所需的能量，單位為 <span class=\"unit\">kJ mol-1</span>。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: The method is the same as for a first ionization energy: the convergence limit of a set of lines corresponds to removing the electron from the level where those lines end.
        "方法與求第一電離能相同：一組譜線的會聚極限，對應從這組譜線所止的能級移走電子。",
        // EN: λ → f with c = λf, then E = hf, then scale from one atom to one mole and from J to kJ.
        "用 c = λf 由 λ 求 f，再用 E = hf，然後由一個原子換算到一摩爾，由 J 換算到 kJ。",
      ],
      // EN: <p>This convergence limit corresponds to an electron moving between n = 2 and n = ∞.</p><div class="worked__math">λ = 365 nm = 3.65 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (3.65 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 8.219 × 10<sup>14</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (8.219 × 10<sup>14</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 5.449 × 10<sup>−19</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">per mole: 5.449 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 328 <span class="unit">kJ mol-1</span></div><p>This is much less than the first ionization energy of hydrogen (1312 <span class="unit">kJ mol-1</span>). The first ionization energy is for an atom in its ground state, with the electron in n = 1. An electron already in n = 2 is higher in energy, so less energy is needed to remove it. To find a first ionization energy you must use the convergence limit of the lines that end on the ground state.</p>
      solution: "<p>這個會聚極限對應電子在 n = 2 與 n = ∞ 之間的移動。</p><div class=\"worked__math\">λ = 365 nm = 3.65 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (3.65 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 8.219 × 10<sup>14</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (8.219 × 10<sup>14</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 5.449 × 10<sup>−19</sup> J<br>&nbsp;&nbsp;（一個原子）</div><div class=\"worked__math\">每摩爾: 5.449 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 328 <span class=\"unit\">kJ mol-1</span></div><p>這比氫的第一電離能（1312 <span class=\"unit\">kJ mol-1</span>）小得多。第一電離能是指處於基態的原子，電子在 n = 1。已經在 n = 2 的電子能量較高，所以移走它所需的能量較少。要求出第一電離能，必須使用止於基態的那組譜線的會聚極限。</p>",
    },

    // ── s1-3-q040 · short · challenge · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q040": {
      // EN: <p>The table shows the first ionization energies of the period 3 elements.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First ionization energy / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Na</th><th class="num" scope="col">Mg</th><th class="num" scope="col">Al</th><th class="num" scope="col">Si</th><th class="num" scope="col">P</th><th class="num" scope="col">S</th><th class="num" scope="col">Cl</th><th class="num" scope="col">Ar</th></tr></thead><tbody><tr><th scope="row">First IE</th><td class="num">496</td><td class="num">738</td><td class="num">578</td><td class="num">787</td><td class="num">1012</td><td class="num">1000</td><td class="num">1251</td><td class="num">1520</td></tr></tbody></table></div><p>The values do not rise steadily. Use the data to explain how the two decreases are evidence that the third main energy level is divided into sublevels.</p>
      stem: "<p>下表列出第 3 週期元素的第一電離能。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>第一電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">元素</th><th class=\"num\" scope=\"col\">Na</th><th class=\"num\" scope=\"col\">Mg</th><th class=\"num\" scope=\"col\">Al</th><th class=\"num\" scope=\"col\">Si</th><th class=\"num\" scope=\"col\">P</th><th class=\"num\" scope=\"col\">S</th><th class=\"num\" scope=\"col\">Cl</th><th class=\"num\" scope=\"col\">Ar</th></tr></thead><tbody><tr><th scope=\"row\">第一電離能</th><td class=\"num\">496</td><td class=\"num\">738</td><td class=\"num\">578</td><td class=\"num\">787</td><td class=\"num\">1012</td><td class=\"num\">1000</td><td class=\"num\">1251</td><td class=\"num\">1520</td></tr></tbody></table></div><p>數值並不是穩定上升。利用數據解釋 (explain)，這兩次下降怎樣證明第三主能級分為多個亞層。</p>",
      hints: [
        // EN: Find the two places where the value goes down, not up.
        "找出數值下降而不是上升的兩處。",
        // EN: For each one, write the configurations of the two elements and ask which electron is removed.
        "每一處都寫出兩個元素的電子排佈，想想移走的是哪一個電子。",
        // EN: Finish by saying what the pattern would look like if there were no sublevels.
        "最後說明：如果沒有亞層，規律會是怎樣的。",
      ],
      // EN: <p>If all the n = 3 electrons had the same energy, the first ionization energy would rise steadily across the period as the nuclear charge increases. It does not.</p><p>The value falls from Mg (738) to Al (578). In Mg the electron is removed from the 3s sublevel, but in Al it is removed from the 3p sublevel. The 3p sublevel is higher in energy than 3s, so the electron is easier to remove. This shows that n = 3 contains sublevels of different energy.</p><p>The value falls from P (1012) to S (1000). In P each 3p orbital holds one electron. In S the electron is removed from a 3p orbital that holds two electrons. Repulsion between the paired electrons makes it easier to remove. This shows that the 3p sublevel is made of orbitals that fill singly before they pair.</p>
      answer: "<p>如果所有 n = 3 電子的能量都相同，隨着核電荷增加，第一電離能會橫跨週期穩定上升。但事實並非如此。</p><p>數值由 Mg（738）下降到 Al（578）。Mg 的電子從 3s 亞層移走，而 Al 的電子從 3p 亞層移走。3p 亞層的能量比 3s 高，所以電子較容易移走。這說明 n = 3 包含能量不同的亞層。</p><p>數值由 P（1012）下降到 S（1000）。P 的每個 3p 軌態各有一個電子。S 的電子則從一個有兩個電子的 3p 軌態移走。成對電子之間的排斥令它較容易移走。這說明 3p 亞層由多個軌態組成，這些軌態先各自容納一個電子，然後才配對。</p>",
      markscheme: [
        // EN: Mg to Al decrease: the electron is removed from the 3p sublevel in Al but from 3s in Mg, and 3p is higher in energy than 3s (so n = 3 is split into sublevels of different energy).
        "Mg 到 Al 的下降：Al 的電子從 3p 亞層移走，而 Mg 的電子從 3s 移走，而且 3p 的能量比 3s 高（所以 n = 3 分為能量不同的亞層）。",
        // EN: P to S decrease: the electron in S is removed from a doubly occupied 3p orbital, and repulsion between the paired electrons makes it easier to remove (in P the 3p orbitals are singly occupied).
        "P 到 S 的下降：S 的電子從有兩個電子的 3p 軌態移走，成對電子之間的排斥令它較容易移走（P 的 3p 軌態都只有一個電子）。",
        // EN: Link to evidence: with a single undivided energy level the ionization energy would increase steadily with nuclear charge / the decreases come after the 3s sublevel is full and after each 3p orbital holds one electron, which matches the s and p sublevels.
        "與證據的聯繫：如果只有單一個不分亞層的能級，電離能會隨核電荷穩定上升／兩次下降分別出現在 3s 亞層填滿之後，以及每個 3p 軌態各有一個電子之後，這與 s 和 p 亞層吻合。",
      ],
    },

    // ── s1-3-q041 · numeric · foundation · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q041": {
      // EN: <p>The table shows the first four successive ionization energies of an element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">590</td><td class="num">1145</td><td class="num">4912</td><td class="num">6491</td></tr></tbody></table></div><p>In which group of the periodic table is the element? Type the group number.</p>
      stem: "<p>下表列出某元素的首四個逐級電離能。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1st</th><th class=\"num\" scope=\"col\">2nd</th><th class=\"num\" scope=\"col\">3rd</th><th class=\"num\" scope=\"col\">4th</th></tr></thead><tbody><tr><th scope=\"row\">電離能</th><td class=\"num\">590</td><td class=\"num\">1145</td><td class=\"num\">4912</td><td class=\"num\">6491</td></tr></tbody></table></div><p>這個元素在週期表的哪一族？輸入族的編號。</p>",
      hints: [
        // EN: Look for the place where the ionization energy suddenly becomes several times larger.
        "找出電離能突然變成幾倍的地方。",
        // EN: The number of electrons removed <em>before</em> the large jump is the number of outer electrons.
        "在大幅躍升<em>之前</em>移走的電子數目，就是外層電子的數目。",
      ],
      // EN: <p>Compare each value with the one before it.</p><div class="worked__math">1st → 2nd: 590 → 1145<br>&nbsp;&nbsp;(about 2 times)</div><div class="worked__math">2nd → 3rd: 1145 → 4912<br>&nbsp;&nbsp;(about 4 times: the large jump)</div><div class="worked__math">3rd → 4th: 4912 → 6491<br>&nbsp;&nbsp;(about 1.3 times)</div><p>Two electrons are removed before the large jump, so the atom has two outer electrons. The third electron comes from a main energy level closer to the nucleus. The element is in <strong>group 2</strong>. (These are the values for calcium.)</p>
      solution: "<p>把每個數值與前一個比較。</p><div class=\"worked__math\">1st → 2nd: 590 → 1145<br>&nbsp;&nbsp;（約 2 倍）</div><div class=\"worked__math\">2nd → 3rd: 1145 → 4912<br>&nbsp;&nbsp;（約 4 倍：大幅躍升）</div><div class=\"worked__math\">3rd → 4th: 4912 → 6491<br>&nbsp;&nbsp;（約 1.3 倍）</div><p>在大幅躍升之前移走了兩個電子，所以原子有兩個外層電子。第三個電子來自較接近原子核的主能級。這個元素在<strong>第 2 族</strong>。（這些是鈣的數值。）</p>",
    },

    // ── s1-3-q042 · mcq · exam · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q042": {
      // EN: <p>The table shows the first six successive ionization energies of an element in period 3.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">787</td><td class="num">1577</td><td class="num">3232</td><td class="num">4356</td><td class="num">16 091</td><td class="num">19 805</td></tr></tbody></table></div><p>Which element is it?</p>
      stem: "<p>下表列出第 3 週期某元素的首六個逐級電離能。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1st</th><th class=\"num\" scope=\"col\">2nd</th><th class=\"num\" scope=\"col\">3rd</th><th class=\"num\" scope=\"col\">4th</th><th class=\"num\" scope=\"col\">5th</th><th class=\"num\" scope=\"col\">6th</th></tr></thead><tbody><tr><th scope=\"row\">電離能</th><td class=\"num\">787</td><td class=\"num\">1577</td><td class=\"num\">3232</td><td class=\"num\">4356</td><td class=\"num\">16 091</td><td class=\"num\">19 805</td></tr></tbody></table></div><p>這是哪一種元素？</p>",
      options: [
        // EN: Aluminium
        "鋁",
        // EN: Silicon
        "矽",
        // EN: Phosphorus
        "磷",
        // EN: Sulfur
        "硫",
      ],
      hints: [
        // EN: Find the largest jump between two neighbouring values.
        "找出相鄰兩個數值之間最大的躍升。",
        // EN: Count the electrons removed before that jump. That is the number of outer electrons.
        "數一數在這次躍升之前移走了多少個電子。那就是外層電子的數目。",
      ],
      // EN: <p>The values rise gradually up to the 4th (4356), then jump to 16 091 for the 5th. That is about 3.7 times larger. Four electrons are removed before the jump, so the atom has four outer electrons and is in group 14. The group 14 element in period 3 is <strong>silicon</strong>, <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span>. The 5th electron has to come from the n = 2 level.</p>
      solution: "<p>數值逐步上升到第 4 個（4356），然後第 5 個躍升到 16 091，約為 3.7 倍。在躍升之前移走了四個電子，所以原子有四個外層電子，屬第 14 族。第 3 週期的第 14 族元素是<strong>矽</strong>，<span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span>。第 5 個電子必須來自 n = 2 能級。</p>",
      misconception: {
        // EN (option A): Aluminium is in group 13, so its large jump comes after the 3rd electron. Here the 4th value (4356) is not much larger than the 3rd (3232).
        "0": "鋁在第 13 族，所以它的大幅躍升在第 3 個電子之後。這裏第 4 個數值（4356）並不比第 3 個（3232）大很多。",
        // EN (option C): This counts the electron <em>after</em> the jump as an outer electron. The 5th electron is the first one taken from the inner level. Phosphorus would have its large jump after the 5th electron.
        "2": "這是把躍升<em>之後</em>的那個電子也算作外層電子。第 5 個電子是第一個取自內層的電子。磷的大幅躍升會在第 5 個電子之後。",
        // EN (option D): Sulfur has six outer electrons, so all six of these values would rise gradually with no large jump.
        "3": "硫有六個外層電子，所以這六個數值都會逐步上升，不會有大幅躍升。",
      },
    },

    // ── s1-3-q043 · mcq · challenge · AHL · Structure 1.3.7 · 2 marks
    "s1-3-q043": {
      // EN: <p>The table shows successive ionization energies of two elements, X and Y. Both are in period 3.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th><th class="num" scope="col">7th</th><th class="num" scope="col">8th</th></tr></thead><tbody><tr><th scope="row">X</th><td class="num">738</td><td class="num">1451</td><td class="num">7733</td><td class="num">10 543</td><td class="num">13 630</td><td class="num">18 020</td><td class="num">21 711</td><td class="num">25 661</td></tr><tr><th scope="row">Y</th><td class="num">1251</td><td class="num">2298</td><td class="num">3822</td><td class="num">5159</td><td class="num">6542</td><td class="num">9362</td><td class="num">11 018</td><td class="num">33 604</td></tr></tbody></table></div><p>X and Y form an ionic compound. What is its formula?</p>
      stem: "<p>下表列出兩種元素 X 和 Y 的逐級電離能。兩者都在第 3 週期。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1st</th><th class=\"num\" scope=\"col\">2nd</th><th class=\"num\" scope=\"col\">3rd</th><th class=\"num\" scope=\"col\">4th</th><th class=\"num\" scope=\"col\">5th</th><th class=\"num\" scope=\"col\">6th</th><th class=\"num\" scope=\"col\">7th</th><th class=\"num\" scope=\"col\">8th</th></tr></thead><tbody><tr><th scope=\"row\">X</th><td class=\"num\">738</td><td class=\"num\">1451</td><td class=\"num\">7733</td><td class=\"num\">10 543</td><td class=\"num\">13 630</td><td class=\"num\">18 020</td><td class=\"num\">21 711</td><td class=\"num\">25 661</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">1251</td><td class=\"num\">2298</td><td class=\"num\">3822</td><td class=\"num\">5159</td><td class=\"num\">6542</td><td class=\"num\">9362</td><td class=\"num\">11 018</td><td class=\"num\">33 604</td></tr></tbody></table></div><p>X 和 Y 形成一種離子化合物。它的化學式是甚麼？</p>",
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
        "找出每種元素的大幅躍升，得出外層電子的數目。",
        // EN: X is a metal and Y is a non-metal. What charge does each ion have?
        "X 是金屬，Y 是非金屬。每種離子帶甚麼電荷？",
        // EN: Balance the charges.
        "平衡電荷。",
      ],
      // EN: <p><strong>X:</strong> the large jump is between the 2nd (1451) and 3rd (7733) values. X has two outer electrons, so it is in group 2 and forms X<sup>2+</sup>.</p><p><strong>Y:</strong> the values rise gradually until the large jump between the 7th (11 018) and 8th (33 604). Y has seven outer electrons, so it is in group 17 and gains one electron to form Y<sup>−</sup>.</p><p>One X<sup>2+</sup> ion needs two Y<sup>−</sup> ions, so the formula is XY<sub>2</sub>. (X is magnesium and Y is chlorine: <span class="chem">MgCl2</span>.)</p>
      solution: "<p><strong>X：</strong>大幅躍升在第 2 個（1451）與第 3 個（7733）數值之間。X 有兩個外層電子，所以在第 2 族，形成 X<sup>2+</sup>。</p><p><strong>Y：</strong>數值逐步上升，直至第 7 個（11 018）與第 8 個（33 604）之間才大幅躍升。Y 有七個外層電子，所以在第 17 族，得到一個電子形成 Y<sup>−</sup>。</p><p>一個 X<sup>2+</sup> 離子需要兩個 Y<sup>−</sup> 離子，所以化學式是 XY<sub>2</sub>。（X 是鎂，Y 是氯：<span class=\"chem\">MgCl2</span>。）</p>",
      misconception: {
        // EN (option A): A 1 : 1 formula needs charges of equal size. X has two outer electrons and forms a 2+ ion. Y has seven outer electrons and gains one electron to form a 1− ion.
        "0": "1 : 1 的化學式需要大小相等的電荷。X 有兩個外層電子，形成 2+ 離子。Y 有七個外層電子，得到一個電子形成 1− 離子。",
        // EN (option C): The ratio is the wrong way round. X forms X<sup>2+</sup> and Y forms Y<sup>−</sup>, so two Y ions are needed for each X ion.
        "2": "比例倒轉了。X 形成 X<sup>2+</sup>，Y 形成 Y<sup>−</sup>，所以每個 X 離子需要兩個 Y 離子。",
        // EN (option D): This uses the numbers of outer electrons (2 and 7) as if they were the ion charges. Y does not lose seven electrons. It gains one to complete its outer level.
        "3": "這是把外層電子的數目（2 和 7）當作離子的電荷。Y 不會失去七個電子，而是得到一個電子來填滿最外層。",
      },
    },

    // ── s1-3-q044 · short · exam · AHL · Structure 1.3.7 · 3 marks
    "s1-3-q044": {
      // EN: <p>The first four successive ionization energies of aluminium (Z = 13) are 578, 1817, 2745 and 11 577 <span class="unit">kJ mol-1</span>.</p><p>(a) Explain why the second ionization energy is greater than the first. [1]</p><p>(b) Explain why the fourth ionization energy is very much greater than the third. [2]</p>
      stem: "<p>鋁（Z = 13）的首四個逐級電離能是 578、1817、2745 和 11 577 <span class=\"unit\">kJ mol-1</span>。</p><p>(a) 解釋 (explain) 為甚麼第二電離能大於第一電離能。[1]</p><p>(b) 解釋為甚麼第四電離能遠大於第三電離能。[2]</p>",
      hints: [
        // EN: For (a): after one electron has gone, what is the particle that the next electron leaves?
        "(a)：移走一個電子後，下一個電子是從甚麼粒子離開的？",
        // EN: For (b): write the configuration of aluminium. Where does the fourth electron come from?
        "(b)：寫出鋁的電子排佈。第四個電子來自哪裏？",
      ],
      // EN: <p>(a) The second electron is removed from a positive ion, not from a neutral atom. The same nuclear charge now attracts fewer electrons (there is less repulsion between the remaining electrons), so each electron is held more strongly.</p><p>(b) Aluminium is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>. The first three electrons come from the third main energy level. The fourth electron comes from the second main energy level (2p), which is closer to the nucleus. It is shielded by fewer inner electrons, so it is attracted much more strongly and needs much more energy to remove.</p>
      answer: "<p>(a) 第二個電子是從正離子移走的，不是從中性原子。同樣的核電荷現在吸引較少電子（餘下電子之間的排斥較小），所以每個電子都被吸引得較緊。</p><p>(b) 鋁是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>。首三個電子來自第三主能級。第四個電子來自第二主能級（2p），較接近原子核。屏蔽它的內層電子較少，所以它受到的吸引強得多，移走它所需的能量也多得多。</p>",
      markscheme: [
        // EN: (a) The electron is removed from a positive ion / the same nuclear charge attracts fewer electrons / less electron–electron repulsion, so the attraction is stronger.
        "(a) 電子從正離子移走／同樣的核電荷吸引較少電子／電子之間的排斥較小，所以吸引較強。",
        // EN: (b) The fourth electron is removed from a main energy level closer to the nucleus / from n = 2 (2p), not n = 3.
        "(b) 第四個電子從較接近原子核的主能級移走／從 n = 2（2p）移走，而不是 n = 3。",
        // EN: (b) It is less shielded (fewer inner electrons) and so much more strongly attracted to the nucleus.
        "(b) 它受到的屏蔽較小（內層電子較少），所以原子核對它的吸引強得多。",
      ],
    },

    // ── s1-3-q045 · mcq · challenge · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q045": {
      // EN: <p>The graph shows log<sub>10</sub> of the first eight successive ionization energies of an element.</p><p><svg viewBox="0 0 310 220" width="310" height="220" role="img" aria-label="Graph of log to base 10 of ionization energy against the number of the electron removed, from 1 to 8. The points rise gently from about 3.0 for the first electron to about 3.8 for the fifth, jump sharply to about 4.3 for the sixth, then rise gently to about 4.5 for the eighth."><path d="M52 16V176H300" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="47" x2="300" y1="158.2222222222222" y2="158.2222222222222" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="162.2222222222222" text-anchor="end" font-size="12" fill="currentColor">3.0</text><line x1="47" x2="300" y1="113.77777777777776" y2="113.77777777777776" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="117.77777777777776" text-anchor="end" font-size="12" fill="currentColor">3.5</text><line x1="47" x2="300" y1="69.3333333333333" y2="69.3333333333333" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="73.3333333333333" text-anchor="end" font-size="12" fill="currentColor">4.0</text><line x1="47" x2="300" y1="24.888888888888886" y2="24.888888888888886" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="28.888888888888886" text-anchor="end" font-size="12" fill="currentColor">4.5</text><line x1="66" x2="66" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="66" y="195" text-anchor="middle" font-size="12" fill="currentColor">1</text><line x1="97.42857142857143" x2="97.42857142857143" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="97.42857142857143" y="195" text-anchor="middle" font-size="12" fill="currentColor">2</text><line x1="128.85714285714286" x2="128.85714285714286" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="128.85714285714286" y="195" text-anchor="middle" font-size="12" fill="currentColor">3</text><line x1="160.28571428571428" x2="160.28571428571428" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="160.28571428571428" y="195" text-anchor="middle" font-size="12" fill="currentColor">4</text><line x1="191.71428571428572" x2="191.71428571428572" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="191.71428571428572" y="195" text-anchor="middle" font-size="12" fill="currentColor">5</text><line x1="223.14285714285714" x2="223.14285714285714" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="223.14285714285714" y="195" text-anchor="middle" font-size="12" fill="currentColor">6</text><line x1="254.57142857142858" x2="254.57142857142858" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="254.57142857142858" y="195" text-anchor="middle" font-size="12" fill="currentColor">7</text><line x1="286" x2="286" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="286" y="195" text-anchor="middle" font-size="12" fill="currentColor">8</text><path d="M66.0 157.8L97.4 133.3L128.9 116.9L160.3 96.4L191.7 87.3L223.1 40.2L254.6 33.3L286.0 27.1" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="66.0" cy="157.8" r="4" fill="currentColor"/><circle cx="97.4" cy="133.3" r="4" fill="currentColor"/><circle cx="128.9" cy="116.9" r="4" fill="currentColor"/><circle cx="160.3" cy="96.4" r="4" fill="currentColor"/><circle cx="191.7" cy="87.3" r="4" fill="currentColor"/><circle cx="223.1" cy="40.2" r="4" fill="currentColor"/><circle cx="254.6" cy="33.3" r="4" fill="currentColor"/><circle cx="286.0" cy="27.1" r="4" fill="currentColor"/><text x="176" y="214" text-anchor="middle" font-size="12" fill="currentColor">number of the electron removed</text><text transform="translate(14 96) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">log₁₀(IE / kJ mol⁻¹)</text></svg></p><p>In which group of the periodic table is the element?</p>
      stem: "<p>圖中顯示某元素首八個逐級電離能的 log<sub>10</sub> 值。</p><p><svg viewBox=\"0 0 310 220\" width=\"310\" height=\"220\" role=\"img\" aria-label=\"電離能以 10 為底的對數，對被移走電子的序號（1 至 8）的圖表。各點由第一個電子的約 3.0 緩緩上升到第五個的約 3.8，然後急升到第六個的約 4.3，再緩緩上升到第八個的約 4.5。\"><path d=\"M52 16V176H300\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"47\" x2=\"300\" y1=\"158.2222222222222\" y2=\"158.2222222222222\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"162.2222222222222\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">3.0</text><line x1=\"47\" x2=\"300\" y1=\"113.77777777777776\" y2=\"113.77777777777776\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"117.77777777777776\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">3.5</text><line x1=\"47\" x2=\"300\" y1=\"69.3333333333333\" y2=\"69.3333333333333\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"73.3333333333333\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">4.0</text><line x1=\"47\" x2=\"300\" y1=\"24.888888888888886\" y2=\"24.888888888888886\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"28.888888888888886\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">4.5</text><line x1=\"66\" x2=\"66\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"66\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">1</text><line x1=\"97.42857142857143\" x2=\"97.42857142857143\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"97.42857142857143\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">2</text><line x1=\"128.85714285714286\" x2=\"128.85714285714286\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"128.85714285714286\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">3</text><line x1=\"160.28571428571428\" x2=\"160.28571428571428\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"160.28571428571428\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">4</text><line x1=\"191.71428571428572\" x2=\"191.71428571428572\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"191.71428571428572\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">5</text><line x1=\"223.14285714285714\" x2=\"223.14285714285714\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"223.14285714285714\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">6</text><line x1=\"254.57142857142858\" x2=\"254.57142857142858\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"254.57142857142858\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">7</text><line x1=\"286\" x2=\"286\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"286\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">8</text><path d=\"M66.0 157.8L97.4 133.3L128.9 116.9L160.3 96.4L191.7 87.3L223.1 40.2L254.6 33.3L286.0 27.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><circle cx=\"66.0\" cy=\"157.8\" r=\"4\" fill=\"currentColor\"/><circle cx=\"97.4\" cy=\"133.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"128.9\" cy=\"116.9\" r=\"4\" fill=\"currentColor\"/><circle cx=\"160.3\" cy=\"96.4\" r=\"4\" fill=\"currentColor\"/><circle cx=\"191.7\" cy=\"87.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"223.1\" cy=\"40.2\" r=\"4\" fill=\"currentColor\"/><circle cx=\"254.6\" cy=\"33.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"286.0\" cy=\"27.1\" r=\"4\" fill=\"currentColor\"/><text x=\"176\" y=\"214\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">被移走電子的序號</text><text transform=\"translate(14 96) rotate(-90)\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">log₁₀(IE / kJ mol⁻¹)</text></svg></p><p>這個元素在週期表的哪一族？</p>",
      options: [
        // EN: Group 13
        "第 13 族",
        // EN: Group 14
        "第 14 族",
        // EN: Group 15
        "第 15 族",
        // EN: Group 16
        "第 16 族",
      ],
      hints: [
        // EN: Find the one place where the graph steps up sharply.
        "找出圖表中唯一急升的地方。",
        // EN: How many points lie before the step? That is the number of outer electrons.
        "急升之前有多少個點？那就是外層電子的數目。",
        // EN: For groups 13 to 18, group number = 10 + number of outer electrons.
        "第 13 至 18 族：族的編號 = 10 + 外層電子數目。",
      ],
      // EN: <p>The first five points rise gently. Between the 5th and 6th points the graph steps up sharply. On a log scale, a step of about 0.5 means the value becomes about 3 times larger. So five electrons are removed before the large jump: the atom has five outer electrons and the element is in <strong>group 15</strong>. (The data are for phosphorus, <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>.)</p><p>A log scale is used because successive ionization energies cover a very wide range. On an ordinary scale the first few points would be squashed together at the bottom of the graph.</p>
      solution: "<p>首五個點緩緩上升。在第 5 與第 6 個點之間，圖表急升。在對數標度上，上升約 0.5 表示數值變成約 3 倍。所以在大幅躍升之前移走了五個電子：原子有五個外層電子，這個元素在<strong>第 15 族</strong>。（這些是磷的數據，<span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>。）</p><p>使用對數標度，是因為逐級電離能的範圍非常大。如果用普通標度，頭幾個點會擠在圖表底部。</p>",
      misconception: {
        // EN (option A): A group 13 element has three outer electrons, so the large jump would come between the 3rd and 4th points. Here those points rise gently.
        "0": "第 13 族元素有三個外層電子，所以大幅躍升會在第 3 與第 4 個點之間。這裏這兩個點只是緩緩上升。",
        // EN (option B): A group 14 element has four outer electrons, so the large jump would come between the 4th and 5th points. Count the points before the jump again.
        "1": "第 14 族元素有四個外層電子，所以大幅躍升會在第 4 與第 5 個點之間。再數一次躍升之前的點。",
        // EN (option D): This counts the 6th electron as an outer electron. The 6th electron is the first one <em>after</em> the jump, so it comes from the inner level.
        "3": "這是把第 6 個電子算作外層電子。第 6 個電子是躍升<em>之後</em>的第一個，所以來自內層。",
      },
    },

    // ── s1-3-q046 · mcq · challenge · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q046": {
      // EN: <p>An element has twelve successive ionization energies. There are only two large jumps. Some of the values are shown.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">10th</th><th class="num" scope="col">11th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">1451</td><td class="num">7733</td><td class="num">35 458</td><td class="num">169 988</td></tr></tbody></table></div><p>Which arrangement of electrons in main energy levels fits these data?</p>
      stem: "<p>某元素有十二個逐級電離能，當中只有兩次大幅躍升。下表列出部分數值。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">2nd</th><th class=\"num\" scope=\"col\">3rd</th><th class=\"num\" scope=\"col\">10th</th><th class=\"num\" scope=\"col\">11th</th></tr></thead><tbody><tr><th scope=\"row\">電離能</th><td class=\"num\">1451</td><td class=\"num\">7733</td><td class=\"num\">35 458</td><td class=\"num\">169 988</td></tr></tbody></table></div><p>以下哪一種電子在主能級的排列方式符合這些數據？</p>",
      options: [
        // EN: n = 1: 2 electrons. n = 2: 8 electrons. n = 3: 2 electrons.
        "n = 1：2 個電子。n = 2：8 個電子。n = 3：2 個電子。",
        // EN: n = 1: 2 electrons. n = 2: 2 electrons. n = 3: 8 electrons.
        "n = 1：2 個電子。n = 2：2 個電子。n = 3：8 個電子。",
        // EN: n = 1: 10 electrons. n = 2: 2 electrons.
        "n = 1：10 個電子。n = 2：2 個電子。",
        // EN: n = 1: 2 electrons. n = 2: 10 electrons.
        "n = 1：2 個電子。n = 2：10 個電子。",
      ],
      hints: [
        // EN: Twelve ionization energies means twelve electrons.
        "有十二個電離能，即有十二個電子。",
        // EN: Each large jump marks the start of a new main energy level, closer to the nucleus.
        "每次大幅躍升，都標誌着進入一個更接近原子核的新主能級。",
        // EN: The first electrons removed are the outermost ones.
        "最先移走的是最外層的電子。",
      ],
      // EN: <p>Twelve ionization energies means the atom has twelve electrons. The jumps split them into three groups:</p><div class="worked__math">electrons 1 and 2: easiest to remove → outer level (n<br>&nbsp;&nbsp;= 3)</div><div class="worked__math">large jump (1451 → 7733)</div><div class="worked__math">electrons 3 to 10: eight electrons → next level in (n<br>&nbsp;&nbsp;= 2)</div><div class="worked__math">large jump (35 458 → 169 988)</div><div class="worked__math">electrons 11 and 12: hardest to remove → closest to the nucleus (n<br>&nbsp;&nbsp;= 1)</div><p>So the arrangement is 2, 8, 2: the element is magnesium, <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup></span>, in group 2 and period 3.</p>
      solution: "<p>有十二個電離能，即原子有十二個電子。兩次躍升把這些電子分成三組：</p><div class=\"worked__math\">第 1 和第 2 個電子: 最容易移走 → 最外層 (n<br>&nbsp;&nbsp;= 3)</div><div class=\"worked__math\">大幅躍升 (1451 → 7733)</div><div class=\"worked__math\">第 3 至第 10 個電子: 八個電子 → 向內一層 (n<br>&nbsp;&nbsp;= 2)</div><div class=\"worked__math\">大幅躍升 (35 458 → 169 988)</div><div class=\"worked__math\">第 11 和第 12 個電子: 最難移走 → 最接近原子核 (n<br>&nbsp;&nbsp;= 1)</div><p>所以排列方式是 2, 8, 2：這個元素是鎂，<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup></span>，在第 2 族、第 3 週期。</p>",
      misconception: {
        // EN (option B): The right numbers in the wrong order. The first electrons to be removed are the outer ones, so the group of 2 before the first jump is in the highest level, not the middle one.
        "1": "數字正確，但次序錯了。最先移走的是最外層的電子，所以第一次躍升之前的那 2 個電子在最高的能級，不是中間的能級。",
        // EN (option C): This uses only the first jump. The second jump, between the 10th and 11th values, shows that the ten inner electrons are in two different main energy levels.
        "2": "這只用了第一次躍升。第二次躍升在第 10 與第 11 個數值之間，說明十個內層電子分佈在兩個不同的主能級。",
        // EN (option D): This uses only the second jump. The first jump, between the 2nd and 3rd values, shows that the first two electrons are in a different main energy level from the next eight.
        "3": "這只用了第二次躍升。第一次躍升在第 2 與第 3 個數值之間，說明頭兩個電子與其後八個電子在不同的主能級。",
      },
    },

    // ── s1-3-q047 · mcq · exam · SL · Structure 1.3.1 · 1 mark
    "s1-3-q047": {
      // EN: <p>Radiation X has a longer wavelength than radiation Y. Which row compares X with Y?</p>
      stem: "<p>輻射 X 的波長比輻射 Y 長。哪一行正確比較 X 與 Y？</p>",
      options: [
        // EN: X has the higher frequency and the higher energy per photon.
        "X 的頻率較高，每個光子的能量也較高。",
        // EN: X has the higher frequency and the lower energy per photon.
        "X 的頻率較高，但每個光子的能量較低。",
        // EN: X has the lower frequency and the higher energy per photon.
        "X 的頻率較低，但每個光子的能量較高。",
        // EN: X has the lower frequency and the lower energy per photon.
        "X 的頻率較低，每個光子的能量也較低。",
      ],
      hints: [
        // EN: Wavelength and frequency go in opposite directions.
        "波長和頻率的變化方向相反。",
        // EN: Energy per photon goes in the same direction as frequency.
        "每個光子的能量與頻率的變化方向相同。",
      ],
      // EN: <p>A longer wavelength means a lower frequency. A lower frequency means less energy per photon. So X has the lower frequency and the lower energy.</p>
      solution: "<p>波長較長，頻率就較低。頻率較低，每個光子的能量就較少。所以 X 的頻率較低，能量也較低。</p>",
      misconception: {
        // EN (option A): This is the wrong way round. Longer waves mean fewer waves pass each second, so the frequency is lower.
        "0": "這剛好相反。波長越長，每秒經過的波越少，所以頻率較低。",
        // EN (option B): Frequency and energy always change in the same direction. A higher frequency cannot go with a lower energy.
        "1": "頻率和能量總是向同一方向變化。頻率較高，能量不可能較低。",
        // EN (option C): Frequency and energy always change in the same direction. A lower frequency means less energy per photon, not more.
        "2": "頻率和能量總是向同一方向變化。頻率較低，每個光子的能量就較少，不會較多。",
      },
    },

    // ── s1-3-q048 · mcq · exam · SL · Structure 1.3.1 · 1 mark
    "s1-3-q048": {
      // EN: <p>Three elements each give a strong line in the visible part of their emission spectrum: lithium at 671 nm (red), sodium at 589 nm (orange-yellow) and barium at 554 nm (green).</p><p>Which statement is correct?</p>
      stem: "<p>三種元素的發射光譜在可見光區各有一條強譜線：鋰在 671 nm（紅色），鈉在 589 nm（橙黃色），鋇在 554 nm（綠色）。</p><p>以下哪一項正確？</p>",
      options: [
        // EN: The lithium line comes from the largest fall in energy by an electron.
        "鋰的譜線來自電子最大的能量下降。",
        // EN: The barium line comes from the largest fall in energy by an electron.
        "鋇的譜線來自電子最大的能量下降。",
        // EN: All three lines come from falls of the same size, because all light travels at the same speed.
        "三條譜線來自大小相同的能量下降，因為所有光的傳播速度都相同。",
        // EN: The sodium line has the lowest frequency.
        "鈉的譜線頻率最低。",
      ],
      hints: [
        // EN: The energy of the photon equals the energy the electron loses when it falls.
        "光子的能量等於電子落下時失去的能量。",
        // EN: Shortest wavelength = highest frequency = highest energy.
        "波長最短 = 頻率最高 = 能量最高。",
      ],
      // EN: <p>The photon carries away the energy that the electron loses. The barium line has the shortest wavelength (554 nm), so it has the highest frequency and the highest photon energy. It comes from the largest fall in energy. The lithium line (671 nm) comes from the smallest.</p>
      solution: "<p>光子帶走電子失去的能量。鋇的譜線波長最短（554 nm），所以頻率最高，光子能量也最高。它來自最大的能量下降。鋰的譜線（671 nm）來自最小的能量下降。</p>",
      misconception: {
        // EN (option A): Lithium has the longest wavelength of the three, so its photons have the lowest energy. That means the smallest fall, not the largest.
        "0": "三者中鋰的波長最長，所以它的光子能量最低。這代表能量下降最小，不是最大。",
        // EN (option C): The speed is the same, but the wavelengths are different. A different wavelength means a different frequency and a different photon energy.
        "2": "速度相同，但波長不同。波長不同，頻率和光子能量也就不同。",
        // EN (option D): The lowest frequency goes with the longest wavelength. That is the lithium line at 671 nm.
        "3": "頻率最低的，波長最長。那是 671 nm 的鋰譜線。",
      },
    },

    // ── s1-3-q049 · mcq · foundation · SL · Structure 1.3.3 · 1 mark
    "s1-3-q049": {
      // EN: <p>Which main energy level can hold a maximum of 18 electrons?</p>
      stem: "<p>哪一個主能級最多可容納 18 個電子？</p>",
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
        "主能級 n 最多容納 2n<sup>2</sup> 個電子。",
        // EN: Try n = 1, 2, 3, 4 in turn.
        "依次試 n = 1、2、3、4。",
      ],
      // EN: <div class="worked__math">n = 1: 2 × 1 = 2</div><div class="worked__math">n = 2: 2 × 4 = 8</div><div class="worked__math">n = 3: 2 × 9 = 18</div><div class="worked__math">n = 4: 2 × 16 = 32</div><p>The level that holds 18 electrons is <strong>n = 3</strong>.</p>
      solution: "<div class=\"worked__math\">n = 1: 2 × 1 = 2</div><div class=\"worked__math\">n = 2: 2 × 4 = 8</div><div class=\"worked__math\">n = 3: 2 × 9 = 18</div><div class=\"worked__math\">n = 4: 2 × 16 = 32</div><p>可容納 18 個電子的能級是 <strong>n = 3</strong>。</p>",
      misconception: {
        // EN (option A): For n = 2 the maximum is 2 × 2<sup>2</sup> = 8 electrons.
        "0": "n = 2 最多容納 2 × 2<sup>2</sup> = 8 個電子。",
        // EN (option C): For n = 4 the maximum is 2 × 4<sup>2</sup> = 32 electrons.
        "2": "n = 4 最多容納 2 × 4<sup>2</sup> = 32 個電子。",
        // EN (option D): This uses 2 × n = 18. The rule is 2n<sup>2</sup>: square n first, then double.
        "3": "這是用了 2 × n = 18。規則是 2n<sup>2</sup>：先把 n 平方，再乘以 2。",
      },
    },

    // ── s1-3-q050 · mcq · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q050": {
      // EN: <p>What is the total number of electrons needed to fill the first three main energy levels (n = 1, n = 2 and n = 3) completely?</p>
      stem: "<p>要完全填滿首三個主能級（n = 1、n = 2 和 n = 3），總共需要多少個電子？</p>",
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
        "分別計算三個能級的 2n<sup>2</sup>。",
        // EN: Then add the three numbers.
        "然後把三個數相加。",
      ],
      // EN: <div class="worked__math">n = 1: 2 × 1<sup>2</sup> = 2</div><div class="worked__math">n = 2: 2 × 2<sup>2</sup> = 8</div><div class="worked__math">n = 3: 2 × 3<sup>2</sup> = 18</div><div class="worked__math">total = 2 + 8 + 18 = 28 electrons</div>
      solution: "<div class=\"worked__math\">n = 1: 2 × 1<sup>2</sup> = 2</div><div class=\"worked__math\">n = 2: 2 × 2<sup>2</sup> = 8</div><div class=\"worked__math\">n = 3: 2 × 3<sup>2</sup> = 18</div><div class=\"worked__math\">總數 = 2 + 8 + 18 = 28 個電子</div>",
      misconception: {
        // EN (option A): This adds 2n for each level: 2 + 4 + 6. The rule is 2n<sup>2</sup>.
        "0": "這是把每個能級的 2n 相加：2 + 4 + 6。規則是 2n<sup>2</sup>。",
        // EN (option B): 18 is the number that n = 3 holds on its own. The question asks for all three levels together.
        "1": "18 是 n = 3 單獨可容納的數目。題目問的是三個能級的總和。",
        // EN (option D): This is (2 × 3)<sup>2</sup>. Square n first, then double, and do it for each level.
        "3": "這是 (2 × 3)<sup>2</sup>。先把 n 平方，再乘以 2，而且每個能級分開計算。",
      },
    },

    // ── s1-3-q051 · numeric · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q051": {
      // EN: <p>A main energy level can hold a maximum of 50 electrons. What is the value of n for this level?</p>
      stem: "<p>某主能級最多可容納 50 個電子。這個能級的 n 值是多少？</p>",
      hints: [
        // EN: Use 2n<sup>2</sup> = 50 and work backwards.
        "用 2n<sup>2</sup> = 50 倒推。",
        // EN: Divide by 2 first. Then take the square root.
        "先除以 2，再開平方根。",
      ],
      // EN: <div class="worked__math">2n<sup>2</sup> = 50</div><div class="worked__math">n<sup>2</sup> = 50 ÷ 2 = 25</div><div class="worked__math">n = 5</div><p>Check: 2 × 5<sup>2</sup> = 2 × 25 = 50.</p>
      solution: "<div class=\"worked__math\">2n<sup>2</sup> = 50</div><div class=\"worked__math\">n<sup>2</sup> = 50 ÷ 2 = 25</div><div class=\"worked__math\">n = 5</div><p>核對：2 × 5<sup>2</sup> = 2 × 25 = 50。</p>",
    },

    // ── s1-3-q052 · numeric · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q052": {
      // EN: <p>A zinc atom (Z = 30) has the configuration <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>.</p><p>How many electrons are in its third main energy level (n = 3)?</p>
      stem: "<p>鋅原子（Z = 30）的電子排佈是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>。</p><p>它的第三主能級（n = 3）有多少個電子？</p>",
      hints: [
        // EN: The first number in each term is the main energy level. Find every term that starts with 3.
        "每一項開頭的數字是主能級。找出所有以 3 開頭的項。",
        // EN: There are three of them: 3s, 3p and 3d.
        "共有三項：3s、3p 和 3d。",
      ],
      // EN: <div class="worked__math">3s<sup>2</sup> + 3p<sup>6</sup> + 3d<sup>10</sup></div><div class="worked__math">2 + 6 + 10 = 18 electrons</div><p>The third main energy level of zinc is full: 2n<sup>2</sup> = 2 × 3<sup>2</sup> = 18. The common slip is to answer 8 by leaving out the 3d electrons, which are written after 4s.</p>
      solution: "<div class=\"worked__math\">3s<sup>2</sup> + 3p<sup>6</sup> + 3d<sup>10</sup></div><div class=\"worked__math\">2 + 6 + 10 = 18 個電子</div><p>鋅的第三主能級已填滿：2n<sup>2</sup> = 2 × 3<sup>2</sup> = 18。常見錯誤是漏掉寫在 4s 之後的 3d 電子，答了 8。</p>",
      // EN: electrons
      unit: "個電子",
    },

    // ── s1-3-q053 · mcq · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q053": {
      // EN: <p>Which sublevel does <strong>not</strong> exist?</p>
      stem: "<p>哪一個亞層<strong>不</strong>存在？</p>",
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
        "主能級 n 有 n 種亞層。",
        // EN: n = 1 has s only. n = 2 has s and p. n = 3 has s, p and d.
        "n = 1 只有 s。n = 2 有 s 和 p。n = 3 有 s、p 和 d。",
      ],
      // EN: <p>Main energy level n contains n types of sublevel. The second level has only two: 2s and 2p. The d sublevels start at n = 3, so <strong>2d</strong> does not exist.</p>
      solution: "<p>主能級 n 有 n 種亞層。第二能級只有兩種：2s 和 2p。d 亞層由 n = 3 開始才有，所以 <strong>2d</strong> 不存在。</p>",
      misconception: {
        // EN (option A): Every main energy level has an s sublevel. 1s is the only sublevel in n = 1.
        "0": "每個主能級都有 s 亞層。1s 是 n = 1 唯一的亞層。",
        // EN (option B): The second main energy level has two sublevels: 2s and 2p.
        "1": "第二主能級有兩個亞層：2s 和 2p。",
        // EN (option D): The third main energy level has three sublevels: 3s, 3p and 3d.
        "3": "第三主能級有三個亞層：3s、3p 和 3d。",
      },
    },

    // ── s1-3-q054 · order · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q054": {
      // EN: <p>Put the four sublevels of the fourth main energy level in order of <strong>increasing energy</strong> (lowest energy first).</p>
      stem: "<p>把第四主能級的四個亞層按<strong>能量由低至高</strong>排列（能量最低的排最先）。</p>",
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
        "在同一個主能級內，亞層的能量次序永遠相同。",
        // EN: The order of the letters is s, p, d, f.
        "字母的次序是 s、p、d、f。",
      ],
      // EN: <p>Within one main energy level the energy of the sublevels increases in the order s, p, d, f. So the order is 4s, 4p, 4d, 4f.</p>
      solution: "<p>在同一個主能級內，亞層的能量按 s、p、d、f 的次序遞增。所以次序是 4s、4p、4d、4f。</p>",
    },

    // ── s1-3-q055 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q055": {
      // EN: <p>Which statement about the three orbitals in a 2p sublevel is correct?</p>
      stem: "<p>以下哪一項關於 2p 亞層三個軌態的敘述是正確的？</p>",
      options: [
        // EN: They have the same shape and the same energy, but point along three different axes.
        "它們的形狀和能量都相同，但分別指向三條不同的軸。",
        // EN: They have three different shapes.
        "它們有三種不同的形狀。",
        // EN: They have three different energies.
        "它們有三種不同的能量。",
        // EN: Together they can hold a maximum of three electrons.
        "它們合共最多可容納三個電子。",
      ],
      hints: [
        // EN: Think of the names p<sub>x</sub>, p<sub>y</sub> and p<sub>z</sub>. What do the letters x, y and z tell you?
        "想想 p<sub>x</sub>、p<sub>y</sub> 和 p<sub>z</sub> 這些名稱。字母 x、y、z 告訴你甚麼？",
      ],
      // EN: <p>The three p orbitals in a sublevel are all dumbbell-shaped and have the same energy. They differ only in orientation: they lie along the x, y and z axes, at right angles to each other. Each holds up to two electrons, so the sublevel holds up to six.</p>
      solution: "<p>同一亞層的三個 p 軌態都是啞鈴形，能量也相同。它們只是取向不同：分別沿 x、y、z 軸伸展，互相垂直。每個軌態最多容納兩個電子，所以這個亞層最多容納六個。</p>",
      misconception: {
        // EN (option B): All three p orbitals are dumbbell-shaped. Only their direction in space is different.
        "1": "三個 p 軌態都是啞鈴形，只是在空間中的方向不同。",
        // EN (option C): Orbitals in the same sublevel have the same energy. That is why Hund’s rule is needed to decide how they fill.
        "2": "同一亞層的軌態能量相同。正因如此，才需要洪特規則來決定電子怎樣填入。",
        // EN (option D): Each orbital can hold two electrons, so three p orbitals hold up to six.
        "3": "每個軌態可容納兩個電子，所以三個 p 軌態最多容納六個。",
      },
    },

    // ── s1-3-q056 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q056": {
      // EN: <p>Which row gives the number of sublevels and the total number of orbitals in the second main energy level (n = 2)?</p>
      stem: "<p>哪一行正確列出第二主能級（n = 2）的亞層數目和軌態總數？</p>",
      options: [
        // EN: 2 sublevels and 2 orbitals
        "2 個亞層和 2 個軌態",
        // EN: 2 sublevels and 4 orbitals
        "2 個亞層和 4 個軌態",
        // EN: 2 sublevels and 8 orbitals
        "2 個亞層和 8 個軌態",
        // EN: 3 sublevels and 9 orbitals
        "3 個亞層和 9 個軌態",
      ],
      hints: [
        // EN: Name the sublevels in n = 2 first.
        "先寫出 n = 2 的亞層名稱。",
        // EN: An s sublevel has 1 orbital. A p sublevel has 3.
        "s 亞層有 1 個軌態，p 亞層有 3 個。",
      ],
      // EN: <div class="worked__math">sublevels in n<br>&nbsp;&nbsp;= 2: 2s and 2p &nbsp; (2 sublevels)</div><div class="worked__math">orbitals: 1 (2s) + 3 (2p) = 4</div><p>Check: 4 orbitals × 2 electrons = 8 electrons, which agrees with 2n<sup>2</sup> = 8.</p>
      solution: "<div class=\"worked__math\">亞層, n<br>&nbsp;&nbsp;= 2: 2s 和 2p &nbsp; (2 個亞層)</div><div class=\"worked__math\">軌態: 1 (2s) + 3 (2p) = 4</div><p>核對：4 個軌態 × 2 個電子 = 8 個電子，與 2n<sup>2</sup> = 8 吻合。</p>",
      misconception: {
        // EN (option A): There are two sublevels, but they do not have one orbital each. The 2p sublevel has three orbitals.
        "0": "亞層確實有兩個，但並不是各有一個軌態。2p 亞層有三個軌態。",
        // EN (option C): 8 is the number of electrons that n = 2 can hold. Each orbital holds two electrons, so there are 4 orbitals.
        "2": "8 是 n = 2 可容納的電子數目。每個軌態容納兩個電子，所以有 4 個軌態。",
        // EN (option D): This describes n = 3 (3s, 3p and 3d). There is no 2d sublevel.
        "3": "這是 n = 3 的情況（3s、3p 和 3d）。2d 亞層並不存在。",
      },
    },

    // ── s1-3-q057 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q057": {
      // EN: <p>A student draws this orbital diagram for a carbon atom (Z = 6) in its ground state.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains one up arrow only. Each of the three 2p boxes contains one up arrow."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M63 25V8M59 13L63 8L67 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M169 25V8M165 13L169 8L173 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>一名學生為處於基態的碳原子（Z = 6）畫了以下軌態圖。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"軌態圖。1s 方格內有一個向上箭嘴和一個向下箭嘴。2s 方格內只有一個向上箭嘴。三個 2p 方格各有一個向上箭嘴。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M63 25V8M59 13L63 8L67 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M169 25V8M165 13L169 8L173 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>這個圖違反了哪一條規則或原理？</p>",
      options: [
        // EN: The Aufbau principle
        "構築原理 (Aufbau principle)",
        // EN: Hund’s rule
        "洪特規則 (Hund’s rule)",
        // EN: The Pauli exclusion principle
        "泡利不相容原理 (Pauli exclusion principle)",
        // EN: None. The diagram is correct.
        "沒有違反。這個圖正確。",
      ],
      hints: [
        // EN: The total number of electrons (6) is right. Check each sublevel from the lowest energy upwards.
        "電子總數（6）正確。由能量最低的亞層開始，逐一檢查。",
        // EN: Is every lower-energy sublevel full before the next one is used?
        "每個能量較低的亞層，是否都填滿了才用下一個？",
      ],
      // EN: <p>The <strong>Aufbau principle</strong> says electrons fill the lowest-energy sublevel that has space. Here the 2s sublevel holds only one electron, but there are three electrons in the higher-energy 2p sublevel. In the ground state, 2s is filled first.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Correct orbital diagram for carbon. The 1s and 2s boxes each contain a pair of opposite arrows. Two of the three 2p boxes contain one up arrow each and the third is empty."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>The correct diagram is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></span>, with the two 2p electrons in separate orbitals.</p>
      solution: "<p><strong>構築原理</strong>指出，電子會填入能量最低而仍有空位的亞層。圖中 2s 亞層只有一個電子，但能量較高的 2p 亞層卻有三個電子。在基態，2s 會先填滿。</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"碳的正確軌態圖。1s 和 2s 方格各有一對方向相反的箭嘴。三個 2p 方格中，兩個各有一個向上箭嘴，第三個是空的。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>正確的圖是 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></span>，兩個 2p 電子在不同的軌態內。</p>",
      misconception: {
        // EN (option B): Hund’s rule is obeyed inside the 2p sublevel: each 2p orbital holds one electron and the spins are parallel. The problem is that 2p is being used too early.
        "1": "2p 亞層內符合洪特規則：每個 2p 軌態各有一個電子，而且自旋平行。問題是過早使用了 2p。",
        // EN (option C): No orbital holds two electrons with the same spin, and no orbital holds more than two. The Pauli exclusion principle is obeyed.
        "2": "沒有軌態容納兩個自旋相同的電子，也沒有軌態容納多於兩個電子。所以符合泡利不相容原理。",
        // EN (option D): Count the electrons in 2s. That sublevel still has space, but an electron has been put in the higher-energy 2p sublevel.
        "3": "數一數 2s 的電子。這個亞層仍有空位，但有一個電子已放進能量較高的 2p 亞層。",
      },
    },

    // ── s1-3-q058 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q058": {
      // EN: <p>What is the condensed electron configuration of a selenium atom (Z = 34) in its ground state?</p>
      stem: "<p>硒原子（Z = 34）處於基態時，簡寫電子排佈是甚麼？</p>",
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
        "氬佔了 18 個電子，所以還需要 16 個。",
        // EN: After the argon core the order is 4s, then 3d, then 4p.
        "氬核心之後的次序是 4s，然後 3d，然後 4p。",
      ],
      // EN: <p>Selenium has 34 electrons: the argon core (18) plus 16.</p><div class="worked__math">4s<sup>2</sup> (2) &nbsp; 3d<sup>10</sup> (12) &nbsp; 4p<sup>4</sup> (16)</div><div class="worked__math"><span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span><br>&nbsp;&nbsp;(18 + 2 + 10 + 4<br>&nbsp;&nbsp;= 34)</div><p>Writing it as <span class="mono">[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></span> is also accepted.</p>
      solution: "<p>硒有 34 個電子：氬核心的 18 個，再加 16.</p><div class=\"worked__math\">4s<sup>2</sup> (2) &nbsp; 3d<sup>10</sup> (12) &nbsp; 4p<sup>4</sup> (16)</div><div class=\"worked__math\"><span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span><br>&nbsp;&nbsp;(18 + 2 + 10 + 4<br>&nbsp;&nbsp;= 34)</div><p>寫成 <span class=\"mono\">[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></span> 也可接受。</p>",
      misconception: {
        // EN (option A): Count the electrons: 18 + 2 + 4 = 24. The ten 3d electrons are missing. The 3d sublevel fills before 4p.
        "0": "數一數電子：18 + 2 + 4 = 24。漏了十個 3d 電子。3d 亞層比 4p 先填充。",
        // EN (option C): The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after selenium.
        "2": "貴氣體核心必須是該元素<em>之前</em>的貴氣體。氪（Z = 36）在硒之後。",
        // EN (option D): Count the electrons: 18 + 2 + 10 + 6 = 36. That is krypton (or the ion <span class="chem">Se^2-</span>), not a selenium atom.
        "3": "數一數電子：18 + 2 + 10 + 6 = 36。那是氪（或 <span class=\"chem\">Se^2-</span> 離子），不是硒原子。",
      },
    },

    // ── s1-3-q059 · mcq · exam · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q059": {
      // EN: <p>What is the condensed electron configuration of the <span class="chem">Cu^2+</span> ion? (Copper has Z = 29.)</p>
      stem: "<p><span class=\"chem\">Cu^2+</span> 離子的簡寫電子排佈是甚麼？（銅的 Z = 29。）</p>",
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
        "由銅原子真正的電子排佈開始。銅是兩個例外之一。",
        // EN: The atom is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>. Remove two electrons, starting with 4s.
        "原子是 <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>。移走兩個電子，由 4s 開始。",
      ],
      // EN: <p>The copper atom is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> (an exception to the usual filling order). Remove the single 4s electron first, then one 3d electron:</p><div class="worked__math"><span class="chem">Cu^2+</span>: <span class="mono">[Ar] 3d<sup>9</sup></span> &nbsp; (29 − 2<br>&nbsp;&nbsp;= 27 electrons)</div><p>This skill is listed for HL in Structure 3.1.</p>
      solution: "<p>銅原子是 <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>（不跟從一般填充次序的例外）。先移走唯一的 4s 電子，再移走一個 3d 電子：</p><div class=\"worked__math\"><span class=\"chem\">Cu^2+</span>: <span class=\"mono\">[Ar] 3d<sup>9</sup></span> &nbsp; (29 − 2<br>&nbsp;&nbsp;= 27 個電子)</div><p>這項技能列於 Structure 3.1 的 HL 內容。</p>",
      misconception: {
        // EN (option A): This keeps the 4s electrons and removes electrons from 3d. In ions of the first-row d-block metals, 4s is emptied first.
        "0": "這是保留 4s 電子，而從 3d 移走電子。第一列 d 區金屬形成離子時，4s 會先清空。",
        // EN (option B): This keeps one electron in 4s. The 4s sublevel is emptied before any 3d electron is removed.
        "1": "這是在 4s 留下一個電子。4s 亞層要先清空，然後才移走 3d 電子。",
        // EN (option D): Count the electrons: 18 + 2 + 9 = 29. That is the number in a copper atom, and it is not the atom’s real configuration either.
        "3": "數一數電子：18 + 2 + 9 = 29。那是銅原子的電子數目，而且這也不是銅原子真正的電子排佈。",
      },
    },

    // ── s1-3-q060 · mcq · challenge · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q060": {
      // EN: <p>Which pair of ions have the same electron configuration?</p>
      stem: "<p>哪一對離子的電子排佈相同？</p>",
      options: [
        // EN: <span class="chem">Mn^2+</span> and <span class="chem">Fe^2+</span>
        "<span class=\"chem\">Mn^2+</span> 和 <span class=\"chem\">Fe^2+</span>",
        // EN: <span class="chem">Mn^2+</span> and <span class="chem">Fe^3+</span>
        "<span class=\"chem\">Mn^2+</span> 和 <span class=\"chem\">Fe^3+</span>",
        // EN: <span class="chem">Cr^3+</span> and <span class="chem">Fe^3+</span>
        "<span class=\"chem\">Cr^3+</span> 和 <span class=\"chem\">Fe^3+</span>",
        // EN: <span class="chem">Ti^2+</span> and <span class="chem">Ca^2+</span>
        "<span class=\"chem\">Ti^2+</span> 和 <span class=\"chem\">Ca^2+</span>",
      ],
      hints: [
        // EN: Count the electrons in each ion: atomic number minus the charge. Mn is 25, Fe is 26, Cr is 24, Ti is 22, Ca is 20.
        "數一數每種離子的電子：原子序減去電荷。Mn 是 25，Fe 是 26，Cr 是 24，Ti 是 22，Ca 是 20。",
        // EN: Two ions with the same number of electrons, both with an empty 4s sublevel, have the same configuration.
        "兩種離子如果電子數目相同，而且 4s 亞層都是空的，電子排佈就相同。",
      ],
      // EN: <p>Write each atom, then remove the 4s electrons before any 3d electrons.</p><div class="worked__math">Mn: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> → <span class="chem">Mn^2+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span></div><div class="worked__math">Fe: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> → <span class="chem">Fe^2+</span>: <span class="mono">[Ar] 3d<sup>6</sup></span> → <span class="chem">Fe^3+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span></div><div class="worked__math">Cr: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> → <span class="chem">Cr^3+</span>: <span class="mono">[Ar] 3d<sup>3</sup></span></div><div class="worked__math">Ti: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span> → <span class="chem">Ti^2+</span>: <span class="mono">[Ar] 3d<sup>2</sup></span></div><p><span class="chem">Mn^2+</span> and <span class="chem">Fe^3+</span> both have 23 electrons and are both <span class="mono">[Ar] 3d<sup>5</sup></span>.</p>
      solution: "<p>寫出每個原子的電子排佈，然後先移走 4s 電子，再移走 3d 電子。</p><div class=\"worked__math\">Mn: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> → <span class=\"chem\">Mn^2+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span></div><div class=\"worked__math\">Fe: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> → <span class=\"chem\">Fe^2+</span>: <span class=\"mono\">[Ar] 3d<sup>6</sup></span> → <span class=\"chem\">Fe^3+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span></div><div class=\"worked__math\">Cr: <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> → <span class=\"chem\">Cr^3+</span>: <span class=\"mono\">[Ar] 3d<sup>3</sup></span></div><div class=\"worked__math\">Ti: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span> → <span class=\"chem\">Ti^2+</span>: <span class=\"mono\">[Ar] 3d<sup>2</sup></span></div><p><span class=\"chem\">Mn^2+</span> 和 <span class=\"chem\">Fe^3+</span> 都有 23 個電子，兩者都是 <span class=\"mono\">[Ar] 3d<sup>5</sup></span>。</p>",
      misconception: {
        // EN (option A): Same charge, but different numbers of electrons: <span class="chem">Mn^2+</span> has 23 and <span class="chem">Fe^2+</span> has 24.
        "0": "電荷相同，但電子數目不同：<span class=\"chem\">Mn^2+</span> 有 23 個，<span class=\"chem\">Fe^2+</span> 有 24 個。",
        // EN (option C): Same charge, but different numbers of electrons: <span class="chem">Cr^3+</span> has 21 and <span class="chem">Fe^3+</span> has 23.
        "2": "電荷相同，但電子數目不同：<span class=\"chem\">Cr^3+</span> 有 21 個，<span class=\"chem\">Fe^3+</span> 有 23 個。",
        // EN (option D): <span class="chem">Ca^2+</span> has 18 electrons, <span class="mono">[Ar]</span>. <span class="chem">Ti^2+</span> has 20 electrons, <span class="mono">[Ar] 3d<sup>2</sup></span>.
        "3": "<span class=\"chem\">Ca^2+</span> 有 18 個電子，是 <span class=\"mono\">[Ar]</span>。<span class=\"chem\">Ti^2+</span> 有 20 個電子，是 <span class=\"mono\">[Ar] 3d<sup>2</sup></span>。",
      },
    },

    // ── s1-3-q061 · mcq · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q061": {
      // EN: <p>Which equation represents the <strong>first ionization energy</strong> of magnesium?</p>
      stem: "<p>哪一條方程式代表鎂的<strong>第一電離能</strong>？</p>",
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
        "第一電離能：從一摩爾氣態原子移走一摩爾電子。",
        // EN: Check the state symbols and the number of electrons.
        "檢查物態符號和電子數目。",
      ],
      // EN: <p>The first ionization energy is the energy needed to remove one mole of electrons from one mole of gaseous atoms, forming one mole of gaseous 1+ ions:</p><div class="worked__math"><span class="chem">Mg(g) -> Mg+(g) + e-</span></div><p>Both species must have the state symbol (g).</p>
      solution: "<p>第一電離能是從一摩爾氣態原子移走一摩爾電子，形成一摩爾氣態 1+ 離子所需的能量：</p><div class=\"worked__math\"><span class=\"chem\">Mg(g) -> Mg+(g) + e-</span></div><p>兩種粒子都必須有物態符號 (g)。</p>",
      misconception: {
        // EN (option A): Ionization energy is defined for <em>gaseous</em> atoms. Starting from the solid would include the energy needed to turn the solid into separate atoms.
        "0": "電離能的定義是針對<em>氣態</em>原子的。如果由固體開始，就會包括把固體變成獨立原子所需的能量。",
        // EN (option C): This removes two electrons. The first ionization energy is for removing one electron from each atom.
        "2": "這是移走兩個電子。第一電離能是從每個原子移走一個電子。",
        // EN (option D): This atom gains an electron. Ionization means an electron is removed.
        "3": "這個原子得到一個電子。電離是指移走電子。",
      },
    },

    // ── s1-3-q062 · mcq · exam · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q062": {
      // EN: <p>The first ionization energy of phosphorus is 1012 <span class="unit">kJ mol-1</span> and that of sulfur is 1000 <span class="unit">kJ mol-1</span>. Which statement explains why the value for sulfur is lower?</p>
      stem: "<p>磷的第一電離能是 1012 <span class=\"unit\">kJ mol-1</span>，硫的是 1000 <span class=\"unit\">kJ mol-1</span>。以下哪一項解釋了為甚麼硫的數值較低？</p>",
      options: [
        // EN: The electron removed from sulfur is in a 3p orbital that holds two electrons, and these two electrons repel each other.
        "硫被移走的電子位於一個有兩個電子的 3p 軌態，這兩個電子互相排斥。",
        // EN: The electron removed from sulfur is in the 3p sublevel, but the electron removed from phosphorus is in the 3s sublevel.
        "硫被移走的電子在 3p 亞層，而磷被移走的電子在 3s 亞層。",
        // EN: Sulfur has more inner electrons than phosphorus, so its outer electrons are more shielded.
        "硫的內層電子比磷多，所以外層電子受到的屏蔽較大。",
        // EN: Sulfur has a smaller nuclear charge than phosphorus.
        "硫的核電荷比磷小。",
      ],
      hints: [
        // EN: Write both configurations. Which sublevel does each atom lose an electron from?
        "寫出兩個電子排佈。每個原子從哪個亞層失去電子？",
        // EN: Draw the three 3p boxes for each atom. What is different in sulfur?
        "為每個原子畫出三個 3p 方格。硫有甚麼不同？",
      ],
      // EN: <p>P is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>: each 3p orbital holds one electron. S is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>: one 3p orbital holds a pair. The electron removed from sulfur comes from this doubly occupied orbital. Repulsion between the two electrons in the same orbital raises the energy of the electron, so less energy is needed to remove it.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagrams of the 3p sublevel. In phosphorus each of the three 3p boxes holds one up arrow. In sulfur the first 3p box holds an up and a down arrow and the other two hold one up arrow each."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M17 25V8M13 13L17 8L21 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M47 25V8M43 13L47 8L51 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="62" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M77 25V8M73 13L77 8L81 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="47" y="50" text-anchor="middle" font-size="14" fill="currentColor">3p in P</text><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M118 25V8M114 13L118 8L122 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 7V24M124 19L128 24L132 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="153" y="50" text-anchor="middle" font-size="14" fill="currentColor">3p in S</text></svg></p>
      solution: "<p>P 是 <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>：每個 3p 軌態各有一個電子。S 是 <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>：其中一個 3p 軌態有一對電子。硫被移走的電子來自這個有兩個電子的軌態。同一軌態內兩個電子之間的排斥令電子的能量升高，所以移走它所需的能量較少。</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"3p 亞層的軌態圖。磷的三個 3p 方格各有一個向上箭嘴。硫的第一個 3p 方格有一個向上箭嘴和一個向下箭嘴，其餘兩個各有一個向上箭嘴。\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M17 25V8M13 13L17 8L21 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"32\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M47 25V8M43 13L47 8L51 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"62\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M77 25V8M73 13L77 8L81 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"47\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3p in P</text><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M118 25V8M114 13L118 8L122 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M128 7V24M124 19L128 24L132 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"153\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3p in S</text></svg></p>",
      misconception: {
        // EN (option B): Both atoms lose a 3p electron: P is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span> and S is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>. A change of sublevel explains the fall from Mg to Al, not this one.
        "1": "兩個原子失去的都是 3p 電子：P 是 <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>，S 是 <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>。亞層的改變解釋的是 Mg 到 Al 的下降，不是這一次。",
        // EN (option C): Both atoms have the same ten inner electrons (<span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>), so the shielding by inner electrons is the same.
        "2": "兩個原子都有相同的十個內層電子（<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>），所以內層電子的屏蔽相同。",
        // EN (option D): Sulfur has 16 protons and phosphorus has 15. Sulfur has the <em>greater</em> nuclear charge, which is why the lower value needs explaining.
        "3": "硫有 16 個質子，磷有 15 個。硫的核電荷<em>較大</em>，所以數值較低才需要解釋。",
      },
    },

    // ── s1-3-q063 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q063": {
      // EN: <p>The first ionization energy of sulfur is 1000 <span class="unit">kJ mol-1</span> and that of chlorine is 1251 <span class="unit">kJ mol-1</span>.</p><p>Explain why chlorine has the higher first ionization energy.</p>
      stem: "<p>硫的第一電離能是 1000 <span class=\"unit\">kJ mol-1</span>，氯的是 1251 <span class=\"unit\">kJ mol-1</span>。</p><p>解釋 (explain) 為甚麼氯的第一電離能較高。</p>",
      hints: [
        // EN: What is different about the two nuclei?
        "兩個原子核有甚麼不同？",
        // EN: Are the outer electrons in the same main energy level? What does that tell you about shielding?
        "外層電子是否在同一個主能級？這說明屏蔽有甚麼特點？",
        // EN: Do not argue from how close chlorine is to a full sublevel. Compare the attraction for the electron that is removed.
        "不要以氯有多接近填滿亞層來論證。要比較原子核對被移走電子的吸引。",
      ],
      // EN: <p>Chlorine has one more proton than sulfur, so its nuclear charge is greater. In both atoms the electron is removed from the 3p sublevel, in the same main energy level, so the shielding by inner electrons is the same. The outer electron in chlorine is attracted more strongly to the nucleus (and is slightly closer to it), so more energy is needed to remove it.</p>
      answer: "<p>氯比硫多一個質子，所以核電荷較大。兩個原子的電子都是從同一主能級的 3p 亞層移走，所以內層電子的屏蔽相同。氯的外層電子受原子核的吸引較強（也稍為較接近原子核），所以移走它所需的能量較多。</p>",
      markscheme: [
        // EN: Chlorine has a greater nuclear charge / more protons.
        "氯的核電荷較大／質子較多。",
        // EN: The electron is removed from the same main energy level (or sublevel), so shielding is the same/similar, and the attraction to the nucleus is stronger (accept: smaller atomic radius).
        "電子從同一個主能級（或亞層）移走，所以屏蔽相同／相近，而原子核的吸引較強（接受：原子半徑較小）。",
      ],
    },

    // ── s1-3-q064 · mcq · foundation · SL · Structure 1.3.2 · 1 mark
    "s1-3-q064": {
      // EN: <p>The four lines in the <strong>visible</strong> part of the hydrogen emission spectrum are produced when electrons fall to which energy level?</p>
      stem: "<p>氫發射光譜<strong>可見光</strong>區的四條譜線，是電子落到哪一個能級時產生的？</p>",
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
        "三組譜線：落到 n = 1、n = 2 和 n = 3。",
        // EN: In order of decreasing energy the regions are ultraviolet, visible, infrared.
        "按能量由高至低，三個區域依次是紫外線、可見光、紅外線。",
      ],
      // EN: <p>Visible lines come from electrons falling to <strong>n = 2</strong> (from n = 3, 4, 5 and 6). Falls to n = 1 give ultraviolet lines and falls to n = 3 give infrared lines.</p>
      solution: "<p>可見光譜線來自落到 <strong>n = 2</strong> 的電子（由 n = 3、4、5 和 6）。落到 n = 1 產生紫外線譜線，落到 n = 3 產生紅外線譜線。</p>",
      misconception: {
        // EN (option A): Falls to n = 1 release the most energy. Those lines are in the ultraviolet, which you cannot see.
        "0": "落到 n = 1 釋放的能量最多。這些譜線在紫外區，肉眼看不見。",
        // EN (option C): Falls to n = 3 release little energy. Those lines are in the infrared, which you cannot see.
        "2": "落到 n = 3 釋放的能量很少。這些譜線在紅外區，肉眼看不見。",
        // EN (option D): Emission happens when an electron falls to a <em>lower</em> level. n = ∞ is the top, where the levels converge.
        "3": "電子落回<em>較低</em>的能級時才會發射。n = ∞ 是最高處，能級在那裏會聚。",
      },
    },

    // ── s1-3-q065 · mcq · foundation · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q065": {
      // EN: <p>The table shows the first four successive ionization energies of an element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">496</td><td class="num">4562</td><td class="num">6910</td><td class="num">9543</td></tr></tbody></table></div><p>In which group of the periodic table is the element?</p>
      stem: "<p>下表列出某元素的首四個逐級電離能。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>逐級電離能 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">1st</th><th class=\"num\" scope=\"col\">2nd</th><th class=\"num\" scope=\"col\">3rd</th><th class=\"num\" scope=\"col\">4th</th></tr></thead><tbody><tr><th scope=\"row\">電離能</th><td class=\"num\">496</td><td class=\"num\">4562</td><td class=\"num\">6910</td><td class=\"num\">9543</td></tr></tbody></table></div><p>這個元素在週期表的哪一族？</p>",
      options: [
        // EN: Group 1
        "第 1 族",
        // EN: Group 2
        "第 2 族",
        // EN: Group 13
        "第 13 族",
        // EN: Group 14
        "第 14 族",
      ],
      hints: [
        // EN: Compare each value with the one before it. Where does it become many times larger?
        "把每個數值與前一個比較。哪裏變成了很多倍？",
        // EN: The number of electrons removed <em>before</em> the large jump is the number of outer electrons.
        "在大幅躍升<em>之前</em>移走的電子數目，就是外層電子的數目。",
      ],
      // EN: <div class="worked__math">1st → 2nd: 496 → 4562<br>&nbsp;&nbsp;(about 9 times: the large jump)</div><div class="worked__math">2nd → 3rd: 4562 → 6910<br>&nbsp;&nbsp;(about 1.5 times)</div><div class="worked__math">3rd → 4th: 6910 → 9543<br>&nbsp;&nbsp;(about 1.4 times)</div><p>Only one electron is removed before the large jump, so the atom has one outer electron. The element is in <strong>group 1</strong>. (These are the values for sodium.)</p>
      solution: "<div class=\"worked__math\">1st → 2nd: 496 → 4562<br>&nbsp;&nbsp;（約 9 倍：大幅躍升）</div><div class=\"worked__math\">2nd → 3rd: 4562 → 6910<br>&nbsp;&nbsp;（約 1.5 倍）</div><div class=\"worked__math\">3rd → 4th: 6910 → 9543<br>&nbsp;&nbsp;（約 1.4 倍）</div><p>在大幅躍升之前只移走了一個電子，所以原子有一個外層電子。這個元素在<strong>第 1 族</strong>。（這些是鈉的數值。）</p>",
      misconception: {
        // EN (option B): A group 2 element has two outer electrons, so its large jump comes between the 2nd and 3rd values. Here 6910 is only about 1.5 times 4562.
        "1": "第 2 族元素有兩個外層電子，所以大幅躍升在第 2 與第 3 個數值之間。這裏 6910 只是 4562 的約 1.5 倍。",
        // EN (option C): A group 13 element has three outer electrons, so its large jump comes between the 3rd and 4th values. Here 9543 is only about 1.4 times 6910.
        "2": "第 13 族元素有三個外層電子，所以大幅躍升在第 3 與第 4 個數值之間。這裏 9543 只是 6910 的約 1.4 倍。",
        // EN (option D): This counts all four values given. Look for the large jump and count only the electrons removed before it.
        "3": "這是把題目給出的四個數值全部算進去。要找出大幅躍升，只數躍升之前移走的電子。",
      },
    },

  }
});
