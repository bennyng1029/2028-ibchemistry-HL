/* s1-3.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-3.q', {
  questions: {

    // ── s1-3-q001 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q001": {
      // EN: <p>Which statement describes a <strong>line</strong> spectrum?</p>
      stem: "<p>다음 중 <strong>선</strong> 스펙트럼을 옳게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: It contains all the wavelengths in a range, so the colours merge into each other.
        "어떤 범위의 모든 파장을 포함하고 있어서 색깔들이 서로 이어져 섞여 보여요.",
        // EN: It contains only certain separate wavelengths, seen as individual lines.
        "서로 떨어진 특정한 파장만 포함하고 있고, 하나하나의 선으로 보여요.",
        // EN: It contains only one wavelength, seen as a single line.
        "파장을 하나만 포함하고 있고, 선 하나로 보여요.",
        // EN: It contains every wavelength of the electromagnetic spectrum.
        "전자기 스펙트럼의 모든 파장을 포함하고 있어요.",
      ],
      hints: [
        // EN: Picture a rainbow next to a set of thin coloured lines on a dark background. Which one is the line spectrum?
        "무지개와, 어두운 바탕 위에 가는 색깔 선 몇 개가 있는 모습을 나란히 떠올려 봐요. 어느 쪽이 선 스펙트럼일까요?",
      ],
      // EN: <p>A <strong>continuous</strong> spectrum contains all wavelengths (or frequencies) in a range. A <strong>line</strong> spectrum contains only certain discrete wavelengths (or frequencies), seen as separate lines.</p>
      solution: "<p><strong>연속</strong> 스펙트럼은 어떤 범위의 모든 파장(또는 진동수)을 포함해요. <strong>선</strong> 스펙트럼은 서로 떨어진(불연속적인) 특정 파장(또는 진동수)만 포함하고, 각각 따로 떨어진 선으로 보여요.</p>",
      misconception: {
        // EN (option A): This describes a continuous spectrum, such as the rainbow of colours from white light passed through a prism.
        "0": "이것은 연속 스펙트럼에 대한 설명이에요. 백색광을 프리즘에 통과시켰을 때 보이는 무지개색 띠가 그 예예요.",
        // EN (option C): A line spectrum usually has many lines. Each line is one wavelength, but there are several of them.
        "2": "선 스펙트럼에는 보통 선이 여러 개 있어요. 선 하나는 파장 하나이지만, 그런 선이 여러 개 있어요.",
        // EN (option D): This is the opposite idea. A line spectrum is missing most wavelengths. Only a few specific ones are present.
        "3": "이것은 반대되는 생각이에요. 선 스펙트럼에는 대부분의 파장이 빠져 있어요. 몇 개의 특정한 파장만 있어요.",
      },
    },

    // ── s1-3-q002 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q002": {
      // EN: <p>Which colour of visible light has photons of the <strong>highest</strong> energy?</p>
      stem: "<p>가시광선 중 광자의 에너지가 <strong>가장 큰</strong> 색깔은 무엇인가요?</p>",
      options: [
        // EN: Red
        "빨간색",
        // EN: Yellow
        "노란색",
        // EN: Green
        "초록색",
        // EN: Violet
        "보라색",
      ],
      hints: [
        // EN: The data booklet shows the visible region running from violet (about 400 nm) to red (about 700 nm).
        "데이터 부클릿을 보면 가시광선 영역은 보라색(약 400 nm)부터 빨간색(약 700 nm)까지예요.",
        // EN: Shorter wavelength means higher frequency, and higher frequency means higher energy.
        "파장이 짧을수록 진동수가 크고, 진동수가 클수록 에너지가 커요.",
      ],
      // EN: <p>Violet light has the shortest wavelength in the visible region (about 400 nm). Shorter wavelength means higher frequency and higher energy, so violet photons have the highest energy.</p>
      solution: "<p>보라색 빛은 가시광선 영역에서 파장이 가장 짧아요(약 400 nm). 파장이 짧을수록 진동수와 에너지가 크므로, 보라색 광자의 에너지가 가장 커요.</p>",
      misconception: {
        // EN (option A): Red light has the longest wavelength in the visible region, so it has the lowest frequency and the lowest energy.
        "0": "빨간색 빛은 가시광선 영역에서 파장이 가장 길어서, 진동수와 에너지가 가장 작아요.",
        // EN (option B): Yellow is in the middle of the visible region. Look for the colour with the shortest wavelength.
        "1": "노란색은 가시광선 영역의 가운데쯤에 있어요. 파장이 가장 짧은 색깔을 찾아봐요.",
        // EN (option C): Green is in the middle of the visible region. Look for the colour with the shortest wavelength.
        "2": "초록색은 가시광선 영역의 가운데쯤에 있어요. 파장이 가장 짧은 색깔을 찾아봐요.",
      },
    },

    // ── s1-3-q003 · order · foundation · SL · Structure 1.3.1 · 1 mark
    "s1-3-q003": {
      // EN: <p>Put these types of electromagnetic radiation in order of <strong>increasing frequency</strong> (lowest frequency first).</p>
      stem: "<p>다음 전자기 복사를 <strong>진동수가 커지는 순서</strong>로 나열하세요(진동수가 가장 작은 것이 맨 앞).</p>",
      options: [
        // EN: Infrared
        "적외선",
        // EN: Red light
        "빨간색 빛",
        // EN: Green light
        "초록색 빛",
        // EN: Violet light
        "보라색 빛",
        // EN: Ultraviolet
        "자외선",
      ],
      hints: [
        // EN: Increasing frequency is the same order as increasing energy and <em>decreasing</em> wavelength.
        "진동수가 커지는 순서는 에너지가 커지는 순서, 그리고 파장이 <em>짧아지는</em> 순서와 같아요.",
        // EN: Infrared lies next to the red end of the visible region. Ultraviolet lies next to the violet end.
        "적외선은 가시광선 영역의 빨간색 쪽 끝 바로 옆에 있어요. 자외선은 보라색 쪽 끝 바로 옆에 있어요.",
      ],
      // EN: <p>Infrared has the longest wavelength of these, so it has the lowest frequency. Within the visible region the wavelength falls from red (about 700 nm) through green to violet (about 400 nm), so the frequency rises. Ultraviolet has a shorter wavelength than violet, so it has the highest frequency and the highest energy.</p>
      solution: "<p>이 중에서 적외선의 파장이 가장 길기 때문에 진동수가 가장 작아요. 가시광선 영역 안에서는 빨간색(약 700 nm)에서 초록색을 거쳐 보라색(약 400 nm)으로 갈수록 파장이 짧아지므로 진동수가 커져요. 자외선은 보라색보다 파장이 짧아서 진동수와 에너지가 가장 커요.</p>",
    },

    // ── s1-3-q004 · short · exam · SL · Structure 1.3.1 · 2 marks
    "s1-3-q004": {
      // EN: <p>A sample of gaseous atoms is given energy by an electric discharge. Explain how one line in the emission spectrum of the element is produced.</p>
      stem: "<p>기체 원자 시료에 방전으로 에너지를 가했어요. 이 원소의 방출 스펙트럼에서 선 하나가 어떻게 생기는지 설명하시오 (explain).</p>",
      hints: [
        // EN: Start with where the electron is after the atom has absorbed energy.
        "원자가 에너지를 흡수한 뒤 전자가 어디에 있는지부터 시작해요.",
        // EN: What leaves the atom when the electron drops down, and what fixes its energy?
        "전자가 아래로 떨어질 때 원자에서 무엇이 나오나요? 그리고 그것의 에너지는 무엇으로 정해지나요?",
      ],
      // EN: <p>The energy excites an electron to a higher energy level. The electron then returns (falls) to a lower energy level and emits a photon. The energy of the photon equals the difference in energy between the two levels, so the light has one specific frequency (wavelength), which is seen as a line.</p>
      answer: "<p>에너지를 받으면 전자가 더 높은 에너지 준위로 들떠요. 그 뒤 전자가 더 낮은 에너지 준위로 되돌아오면서(떨어지면서) 광자를 방출해요. 광자의 에너지는 두 준위 사이의 에너지 차이와 같으므로, 빛은 특정한 진동수(파장) 하나를 가지고, 이것이 선 하나로 보여요.</p>",
      markscheme: [
        // EN: An electron (in an excited state) returns/falls from a higher energy level to a lower energy level.
        "(들뜬상태의) 전자가 더 높은 에너지 준위에서 더 낮은 에너지 준위로 되돌아온다/떨어진다.",
        // EN: A photon is emitted whose energy equals the difference between the two levels (accept: light of a specific frequency/wavelength is emitted).
        "두 준위 사이의 에너지 차이와 같은 에너지를 가진 광자가 방출된다(인정: 특정한 진동수/파장의 빛이 방출된다).",
      ],
    },

    // ── s1-3-q005 · mcq · foundation · SL · Structure 1.3.2 · 1 mark
    "s1-3-q005": {
      // EN: <p>In the emission spectrum of hydrogen, electrons fall to the first, second or third energy level. Which row gives the region of the electromagnetic spectrum for each set of lines?</p>
      stem: "<p>수소의 방출 스펙트럼에서 전자는 첫 번째, 두 번째 또는 세 번째 에너지 준위로 떨어져요. 각 선 계열이 전자기 스펙트럼의 어느 영역에 있는지 옳게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: To n = 1: visible. To n = 2: ultraviolet. To n = 3: infrared.
        "n = 1로: 가시광선. n = 2로: 자외선. n = 3으로: 적외선.",
        // EN: To n = 1: ultraviolet. To n = 2: visible. To n = 3: infrared.
        "n = 1로: 자외선. n = 2로: 가시광선. n = 3으로: 적외선.",
        // EN: To n = 1: infrared. To n = 2: visible. To n = 3: ultraviolet.
        "n = 1로: 적외선. n = 2로: 가시광선. n = 3으로: 자외선.",
        // EN: To n = 1: ultraviolet. To n = 2: infrared. To n = 3: visible.
        "n = 1로: 자외선. n = 2로: 적외선. n = 3으로: 가시광선.",
      ],
      hints: [
        // EN: Falls to the lowest level release the most energy.
        "가장 낮은 준위로 떨어질 때 에너지가 가장 많이 방출돼요.",
        // EN: In order of decreasing energy: ultraviolet, visible, infrared.
        "에너지가 큰 것부터 차례로: 자외선, 가시광선, 적외선.",
      ],
      // EN: <p>The gap between n = 1 and the levels above it is the largest, so falls to n = 1 emit the highest-energy photons: <strong>ultraviolet</strong>. Falls to n = 2 release less energy: <strong>visible</strong>. Falls to n = 3 release less again: <strong>infrared</strong>.</p>
      solution: "<p>n = 1과 그 위 준위들 사이의 간격이 가장 크므로, n = 1로 떨어질 때 에너지가 가장 큰 광자가 방출돼요: <strong>자외선</strong>. n = 2로 떨어질 때는 에너지가 더 적게 방출돼요: <strong>가시광선</strong>. n = 3으로 떨어질 때는 그보다 더 적게 방출돼요: <strong>적외선</strong>.</p>",
      misconception: {
        // EN (option A): The visible lines do not end at n = 1. Falls to n = 1 release the most energy, and that puts them in the ultraviolet.
        "0": "가시광선 선들은 n = 1에서 끝나지 않아요. n = 1로 떨어질 때 에너지가 가장 많이 방출되고, 그래서 이 선들은 자외선 영역에 있어요.",
        // EN (option C): This is the right list in the wrong direction. Falls to n = 1 are the largest drops in energy, so they give the highest-energy radiation, not the lowest.
        "2": "맞는 목록이지만 방향이 거꾸로예요. n = 1로 떨어지는 것이 에너지 낙차가 가장 크므로, 에너지가 가장 작은 복사가 아니라 가장 큰 복사가 나와요.",
        // EN (option D): Visible light has more energy than infrared, so it must come from the larger drops. Falls to n = 2 release more energy than falls to n = 3.
        "3": "가시광선은 적외선보다 에너지가 크므로, 더 큰 에너지 낙차에서 나와야 해요. n = 2로 떨어질 때가 n = 3으로 떨어질 때보다 에너지가 더 많이 방출돼요.",
      },
    },

    // ── s1-3-q006 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "s1-3-q006": {
      // EN: <p>Which electron transition in a hydrogen atom <strong>emits</strong> radiation of the <strong>shortest wavelength</strong>?</p>
      stem: "<p>수소 원자에서 <strong>파장이 가장 짧은</strong> 복사를 <strong>방출하는</strong> 전자 전이는 어느 것인가요?</p>",
      options: [
        // EN: n = 4 to n = 3
        "n = 4에서 n = 3으로",
        // EN: n = 5 to n = 2
        "n = 5에서 n = 2로",
        // EN: n = 2 to n = 1
        "n = 2에서 n = 1로",
        // EN: n = 1 to n = 3
        "n = 1에서 n = 3으로",
      ],
      hints: [
        // EN: Shortest wavelength means highest energy, so look for the largest fall in energy.
        "파장이 가장 짧다는 것은 에너지가 가장 크다는 뜻이에요. 그러니 에너지가 가장 크게 떨어지는 것을 찾아봐요.",
        // EN: The energy levels are not evenly spaced. They get closer together as n increases.
        "에너지 준위들은 같은 간격으로 놓여 있지 않아요. n이 커질수록 서로 가까워져요.",
      ],
      // EN: <p>Shortest wavelength means highest frequency and highest energy. The levels converge, so the gap between n = 1 and n = 2 is by far the largest gap. Any fall to n = 1 gives ultraviolet radiation, which has more energy than the visible lines (falls to n = 2) or the infrared lines (falls to n = 3). So n = 2 to n = 1 emits the shortest wavelength of the four.</p>
      solution: "<p>파장이 가장 짧다는 것은 진동수와 에너지가 가장 크다는 뜻이에요. 준위들은 위로 갈수록 수렴하므로, n = 1과 n = 2 사이의 간격이 단연 가장 커요. n = 1로 떨어지는 전이는 모두 자외선을 내고, 자외선은 가시광선 선(n = 2로 떨어짐)이나 적외선 선(n = 3으로 떨어짐)보다 에너지가 커요. 따라서 네 가지 중에서 n = 2에서 n = 1로의 전이가 가장 짧은 파장을 방출해요.</p>",
      misconception: {
        // EN (option A): This is a fall between two levels that are close together in energy. It is a small energy change, so it gives a long wavelength (infrared).
        "0": "이것은 에너지가 서로 가까운 두 준위 사이에서 떨어지는 전이예요. 에너지 변화가 작으므로 파장이 길어요(적외선).",
        // EN (option B): This electron crosses more levels, but the levels above n = 2 are close together. The single gap from n = 2 to n = 1 is larger than the whole drop from n = 5 to n = 2.
        "1": "이 전자는 더 많은 준위를 건너지만, n = 2 위의 준위들은 서로 가까이 붙어 있어요. n = 2에서 n = 1로의 간격 하나가 n = 5에서 n = 2까지의 전체 낙차보다 커요.",
        // EN (option D): This electron moves <em>up</em>. The atom must absorb energy for that, so no radiation is emitted.
        "3": "이 전자는 <em>위로</em> 올라가요. 그러려면 원자가 에너지를 흡수해야 하므로, 복사가 방출되지 않아요.",
      },
    },

    // ── s1-3-q007 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "s1-3-q007": {
      // EN: <p>In each set of lines in the hydrogen emission spectrum, the lines get closer together towards the high-frequency end. What does this show?</p>
      stem: "<p>수소 방출 스펙트럼의 각 선 계열에서, 진동수가 큰 쪽으로 갈수록 선들이 서로 가까워져요. 이것은 무엇을 보여 주나요?</p>",
      options: [
        // EN: The energy levels get closer together as their energy increases.
        "에너지 준위는 에너지가 커질수록 서로 가까워진다.",
        // EN: The energy levels are equally spaced.
        "에너지 준위는 같은 간격으로 놓여 있다.",
        // EN: Electrons can have any energy inside the atom.
        "원자 안에서 전자는 어떤 에너지든 가질 수 있다.",
        // EN: Electrons in higher energy levels move more slowly.
        "높은 에너지 준위에 있는 전자는 더 느리게 움직인다.",
      ],
      hints: [
        // EN: Each line is one energy difference. If two lines are close together, what does that say about the two starting levels?
        "선 하나는 에너지 차이 하나예요. 두 선이 서로 가깝다면, 두 출발 준위에 대해 무엇을 알 수 있을까요?",
      ],
      // EN: <p>Lines that are close together come from electrons falling from levels that are close in energy. The lines converge at high frequency, so the energy levels converge (get closer together) at higher energy.</p>
      solution: "<p>서로 가까운 선들은 에너지가 서로 가까운 준위에서 떨어지는 전자로부터 생겨요. 선들이 높은 진동수 쪽에서 수렴하므로, 에너지 준위도 높은 에너지 쪽에서 수렴해요(서로 가까워져요).</p>",
      misconception: {
        // EN (option B): Equally spaced levels would not make the lines bunch up. The lines converge because the gaps between higher levels shrink.
        "1": "준위들이 같은 간격으로 놓여 있다면 선들이 한쪽으로 몰리지 않을 거예요. 선들이 수렴하는 것은 높은 준위들 사이의 간격이 줄어들기 때문이에요.",
        // EN (option C): If electrons could have any energy, the spectrum would be continuous. Separate lines show the opposite.
        "2": "전자가 어떤 에너지든 가질 수 있다면 스펙트럼은 연속 스펙트럼이 될 거예요. 따로 떨어진 선들은 그 반대를 보여 줘요.",
        // EN (option D): The spectrum gives information about energy differences between levels. It does not tell you how fast the electrons move.
        "3": "스펙트럼은 준위 사이의 에너지 차이에 대한 정보를 줘요. 전자가 얼마나 빨리 움직이는지는 알려 주지 않아요.",
      },
    },

    // ── s1-3-q008 · multi · exam · SL · Structure 1.3.2 · 2 marks
    "s1-3-q008": {
      // EN: <p>Which statements about the emission spectrum of hydrogen are correct?</p>
      stem: "<p>수소의 방출 스펙트럼에 대한 설명으로 옳은 것을 모두 고르세요.</p>",
      options: [
        // EN: It is made of separate lines, not a continuous band of colour.
        "연속적인 색깔 띠가 아니라 따로 떨어진 선들로 이루어져 있다.",
        // EN: Each line is produced when an electron moves from a lower to a higher energy level.
        "각 선은 전자가 낮은 에너지 준위에서 높은 에너지 준위로 이동할 때 생긴다.",
        // EN: Within each set of lines, the lines get closer together as the frequency increases.
        "각 선 계열 안에서 진동수가 커질수록 선들이 서로 가까워진다.",
        // EN: The lines in the visible region come from electrons falling to n = 2.
        "가시광선 영역의 선들은 n = 2로 떨어지는 전자에서 생긴다.",
        // EN: Falls to n = 1 give lines of lower energy than falls to n = 3.
        "n = 1로 떨어질 때 생기는 선은 n = 3으로 떨어질 때 생기는 선보다 에너지가 작다.",
        // EN: Each line corresponds to photons of one specific energy.
        "각 선은 특정한 에너지 하나를 가진 광자에 해당한다.",
      ],
      hints: [
        // EN: Emission means the atom gives out light. Which direction must the electron move?
        "방출이란 원자가 빛을 내보낸다는 뜻이에요. 전자는 어느 방향으로 움직여야 할까요?",
        // EN: Largest fall in energy gives the highest-energy radiation.
        "에너지가 가장 크게 떨어질 때 에너지가 가장 큰 복사가 나와요.",
      ],
      // EN: <p>The spectrum is a line spectrum. Each line is light of one frequency, emitted when an electron falls from a higher to a lower energy level, so each line corresponds to photons of one specific energy. The visible lines come from falls to n = 2. Falls to n = 1 give ultraviolet lines (higher energy) and falls to n = 3 give infrared lines (lower energy). In each set the lines converge at high frequency.</p>
      solution: "<p>이 스펙트럼은 선 스펙트럼이에요. 각 선은 진동수가 하나인 빛으로, 전자가 높은 에너지 준위에서 낮은 에너지 준위로 떨어질 때 방출돼요. 그래서 각 선은 특정한 에너지 하나를 가진 광자에 해당해요. 가시광선 선들은 n = 2로 떨어질 때 생겨요. n = 1로 떨어지면 자외선 선(에너지가 더 큼)이, n = 3으로 떨어지면 적외선 선(에너지가 더 작음)이 생겨요. 각 계열에서 선들은 높은 진동수 쪽에서 수렴해요.</p>",
      misconception: {
        // EN (option B): Moving up needs energy to be absorbed. Emission lines come from electrons falling from a higher level to a lower one.
        "1": "위로 올라가려면 에너지를 흡수해야 해요. 방출 선은 전자가 높은 준위에서 낮은 준위로 떨어질 때 생겨요.",
        // EN (option E): Falls to n = 1 are the largest drops in energy. They give ultraviolet lines, which have more energy than the infrared lines from falls to n = 3.
        "4": "n = 1로 떨어지는 것이 에너지 낙차가 가장 커요. 이때 자외선 선이 생기는데, 자외선은 n = 3으로 떨어질 때 생기는 적외선 선보다 에너지가 커요.",
      },
    },

    // ── s1-3-q009 · short · exam · SL · Structure 1.3.2 · 3 marks
    "s1-3-q009": {
      // EN: <p>The emission spectrum of hydrogen is a line spectrum, not a continuous spectrum. Explain how this is evidence that the electron in a hydrogen atom can only be in certain energy levels.</p>
      stem: "<p>수소의 방출 스펙트럼은 연속 스펙트럼이 아니라 선 스펙트럼이에요. 이것이 수소 원자의 전자가 특정한 에너지 준위에만 있을 수 있다는 증거가 되는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: What does each line tell you about the energy of the photons emitted?
        "각 선은 방출된 광자의 에너지에 대해 무엇을 알려 주나요?",
        // EN: Link the photon energy to the two levels the electron moves between.
        "광자의 에너지를 전자가 오가는 두 준위와 연결해 봐요.",
        // EN: Finish with the contrast: what would you see if any energy were allowed?
        "마지막으로 대비를 들어 마무리해요: 어떤 에너지든 허용된다면 무엇이 보일까요?",
      ],
      // EN: <p>A line spectrum shows that the atom emits light of only certain frequencies, so only photons of certain energies are emitted. Each photon is emitted when the electron falls from a higher energy level to a lower one, and the energy of the photon equals the difference in energy between those two levels. Only certain energy differences are seen, so the electron can only have certain fixed (discrete) energies. If the electron could have any energy, every energy difference would be possible and the spectrum would be continuous.</p>
      answer: "<p>선 스펙트럼은 원자가 특정한 진동수의 빛만 방출한다는 것을 보여 주므로, 특정한 에너지를 가진 광자만 방출돼요. 각 광자는 전자가 높은 에너지 준위에서 낮은 에너지 준위로 떨어질 때 방출되고, 광자의 에너지는 그 두 준위 사이의 에너지 차이와 같아요. 특정한 에너지 차이만 관찰되므로, 전자는 특정하게 정해진(불연속적인) 에너지만 가질 수 있어요. 전자가 어떤 에너지든 가질 수 있다면 모든 에너지 차이가 가능할 것이고, 스펙트럼은 연속 스펙트럼이 될 거예요.</p>",
      markscheme: [
        // EN: Only certain/specific frequencies (or wavelengths, or photon energies) are emitted.
        "특정한 진동수(또는 파장, 또는 광자 에너지)만 방출된다.",
        // EN: Each photon/line is produced when an electron falls from a higher to a lower energy level, and its energy equals the energy difference between the two levels.
        "각 광자/선은 전자가 높은 에너지 준위에서 낮은 에너지 준위로 떨어질 때 생기며, 그 에너지는 두 준위 사이의 에너지 차이와 같다.",
        // EN: So only certain energy differences are possible, which means the energy levels are discrete/fixed (accept: if any energy were allowed the spectrum would be continuous).
        "따라서 특정한 에너지 차이만 가능하고, 이는 에너지 준위가 불연속적/정해져 있음을 뜻한다(인정: 어떤 에너지든 허용된다면 스펙트럼은 연속 스펙트럼일 것이다).",
      ],
    },

    // ── s1-3-q010 · mcq · challenge · SL · Structure 1.3.2 · 1 mark
    "s1-3-q010": {
      // EN: <p>The diagram shows some energy levels of the hydrogen atom (not to scale) and four electron transitions, P, Q, R and S.</p><p><svg viewBox="0 0 300 210" width="300" height="210" role="img" aria-label="Energy level diagram for hydrogen, not to scale. Horizontal lines for n = 1 at the bottom up to n = 5, getting closer together, and a dashed line for n = infinity at the top. Four downward arrows: P from n = 2 to n = 1, Q from n = 3 to n = 2, R from n = 5 to n = 2, S from n = 4 to n = 3."><line x1="62" x2="286" y1="196" y2="196" stroke="currentColor" stroke-width="1.4"/><text x="54" y="200" text-anchor="end" font-size="13" fill="currentColor">n = 1</text><line x1="62" x2="286" y1="112" y2="112" stroke="currentColor" stroke-width="1.4"/><text x="54" y="116" text-anchor="end" font-size="13" fill="currentColor">n = 2</text><line x1="62" x2="286" y1="68" y2="68" stroke="currentColor" stroke-width="1.4"/><text x="54" y="72" text-anchor="end" font-size="13" fill="currentColor">n = 3</text><line x1="62" x2="286" y1="44" y2="44" stroke="currentColor" stroke-width="1.4"/><text x="54" y="48" text-anchor="end" font-size="13" fill="currentColor">n = 4</text><line x1="62" x2="286" y1="30" y2="30" stroke="currentColor" stroke-width="1.4"/><text x="54" y="34" text-anchor="end" font-size="13" fill="currentColor">n = 5</text><line x1="62" x2="286" y1="16" y2="16" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="54" y="20" text-anchor="end" font-size="13" fill="currentColor">n = ∞</text><path d="M96 112V194M91 186L96 194L101 186" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="105" y="182" font-size="14" font-weight="700" fill="currentColor">P</text><path d="M148 68V110M143 102L148 110L153 102" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="157" y="98" font-size="14" font-weight="700" fill="currentColor">Q</text><path d="M200 30V110M195 102L200 110L205 102" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="209" y="98" font-size="14" font-weight="700" fill="currentColor">R</text><path d="M252 44V66M247 58L252 66L257 58" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="261" y="60" font-size="14" font-weight="700" fill="currentColor">S</text></svg></p><p>Which transition emits <strong>visible</strong> light of the <strong>lowest frequency</strong>?</p>
      stem: "<p>그림은 수소 원자의 에너지 준위 일부(실제 비율과 다름)와 전자 전이 4가지 P, Q, R, S를 나타낸 거예요.</p><p><svg viewBox=\"0 0 300 210\" width=\"300\" height=\"210\" role=\"img\" aria-label=\"수소의 에너지 준위 그림(실제 비율과 다름). 맨 아래 n = 1부터 n = 5까지 가로선이 있고, 위로 갈수록 간격이 좁아져요. 맨 위에는 n = 무한대를 나타내는 점선이 있어요. 아래로 향하는 화살표 4개: P는 n = 2에서 n = 1로, Q는 n = 3에서 n = 2로, R는 n = 5에서 n = 2로, S는 n = 4에서 n = 3으로.\"><line x1=\"62\" x2=\"286\" y1=\"196\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"200\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 1</text><line x1=\"62\" x2=\"286\" y1=\"112\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"116\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 2</text><line x1=\"62\" x2=\"286\" y1=\"68\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"72\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 3</text><line x1=\"62\" x2=\"286\" y1=\"44\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"48\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 4</text><line x1=\"62\" x2=\"286\" y1=\"30\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"54\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = 5</text><line x1=\"62\" x2=\"286\" y1=\"16\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"/><text x=\"54\" y=\"20\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">n = ∞</text><path d=\"M96 112V194M91 186L96 194L101 186\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"105\" y=\"182\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">P</text><path d=\"M148 68V110M143 102L148 110L153 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"157\" y=\"98\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Q</text><path d=\"M200 30V110M195 102L200 110L205 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"209\" y=\"98\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">R</text><path d=\"M252 44V66M247 58L252 66L257 58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"261\" y=\"60\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">S</text></svg></p><p><strong>진동수가 가장 작은</strong> <strong>가시광선</strong>을 방출하는 전이는 어느 것인가요?</p>",
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
        "먼저 가시광선을 내는 화살표를 찾아요. 그 화살표들은 어느 준위에서 끝나야 할까요?",
        // EN: Then compare the lengths of those falls. Smaller fall in energy means lower frequency.
        "그다음 그 낙차들의 길이를 비교해요. 에너지 낙차가 작을수록 진동수가 작아요.",
      ],
      // EN: <p>Visible lines come from falls to n = 2, so only Q (n = 3 to n = 2) and R (n = 5 to n = 2) are visible. Q is the smaller fall in energy, so its photon has less energy and a lower frequency. The answer is Q. (P is ultraviolet and S is infrared.)</p>
      solution: "<p>가시광선 선은 n = 2로 떨어질 때 생기므로, Q(n = 3에서 n = 2로)와 R(n = 5에서 n = 2로)만 가시광선이에요. Q가 에너지 낙차가 더 작으므로, 광자의 에너지가 더 작고 진동수도 더 작아요. 답은 Q예요. (P는 자외선이고 S는 적외선이에요.)</p>",
      misconception: {
        // EN (option A): P ends on n = 1. Falls to n = 1 give ultraviolet radiation, which is not visible and has the highest frequency of the four.
        "0": "P는 n = 1에서 끝나요. n = 1로 떨어지면 자외선이 나오는데, 자외선은 눈에 보이지 않고 넷 중 진동수가 가장 커요.",
        // EN (option C): R does give visible light because it ends on n = 2. But it is a larger fall than Q, so its frequency is higher.
        "2": "R는 n = 2에서 끝나므로 가시광선을 내는 것은 맞아요. 하지만 Q보다 낙차가 커서 진동수가 더 커요.",
        // EN (option D): S has the lowest frequency of all four, but it ends on n = 3. Falls to n = 3 give infrared radiation, which is not visible.
        "3": "S는 넷 중 진동수가 가장 작지만, n = 3에서 끝나요. n = 3으로 떨어지면 적외선이 나오는데, 적외선은 눈에 보이지 않아요.",
      },
    },

    // ── s1-3-q011 · numeric · challenge · SL · Structure 1.3.2 · 1 mark
    "s1-3-q011": {
      // EN: <p>In a sample of hydrogen gas, atoms are excited so that the highest level reached by any electron is n = 5. The electrons can return to lower levels in one fall or in several smaller falls.</p><p>How many different lines can appear in the <strong>visible</strong> region of the emission spectrum?</p>
      stem: "<p>수소 기체 시료에서 원자들이 들떠서, 전자가 도달한 가장 높은 준위가 n = 5예요. 전자는 한 번에 떨어지거나, 여러 번에 걸쳐 조금씩 떨어지면서 낮은 준위로 되돌아갈 수 있어요.</p><p>방출 스펙트럼의 <strong>가시광선</strong> 영역에 나타날 수 있는 서로 다른 선은 몇 개인가요?</p>",
      hints: [
        // EN: Visible lines come from falls that end on one particular level. Which one?
        "가시광선 선은 어떤 특정한 준위에서 끝나는 낙차에서 생겨요. 어느 준위일까요?",
        // EN: List every level above it that an electron could start from.
        "전자가 출발할 수 있는, 그 준위보다 위에 있는 준위를 모두 나열해 봐요.",
      ],
      // EN: <p>Visible lines come from falls that end on n = 2. The electron can start from n = 3, n = 4 or n = 5 (it can reach n = 3 or n = 4 by an earlier, smaller fall from n = 5).</p><div class="worked__math">n&nbsp;=&nbsp;5 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;4 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;3 → n&nbsp;=&nbsp;2</div><p>That is <strong>3</strong> lines in the visible region. The other possible falls end on n = 1 (ultraviolet) or on n = 3 or n = 4 (infrared).</p>
      solution: "<p>가시광선 선은 n = 2에서 끝나는 낙차에서 생겨요. 전자는 n = 3, n = 4 또는 n = 5에서 출발할 수 있어요(n = 5에서 먼저 조금 떨어지면 n = 3이나 n = 4에 도달할 수 있어요).</p><div class=\"worked__math\">n&nbsp;=&nbsp;5 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;4 → n&nbsp;=&nbsp;2, &nbsp; n&nbsp;=&nbsp;3 → n&nbsp;=&nbsp;2</div><p>따라서 가시광선 영역의 선은 <strong>3</strong>개예요. 나머지 가능한 낙차는 n = 1에서 끝나거나(자외선) n = 3 또는 n = 4에서 끝나요(적외선).</p>",
      // EN: lines
      unit: "개",
    },

    // ── s1-3-q012 · numeric · foundation · SL · Structure 1.3.3 · 1 mark
    "s1-3-q012": {
      // EN: <p>What is the maximum number of electrons that can occupy the main energy level n = 4?</p>
      stem: "<p>주 에너지 준위 n = 4에 들어갈 수 있는 전자의 최대 개수는 몇 개인가요?</p>",
      hints: [
        // EN: A main energy level n can hold a maximum of 2n<sup>2</sup> electrons.
        "주 에너지 준위 n에는 전자가 최대 2n<sup>2</sup>개 들어갈 수 있어요.",
        // EN: Square n first, then multiply by 2.
        "먼저 n을 제곱한 다음 2를 곱해요.",
      ],
      // EN: <div class="worked__math">maximum = 2n<sup>2</sup><br>&nbsp;&nbsp;= 2 × 4<sup>2</sup><br>&nbsp;&nbsp;= 2 × 16<br>&nbsp;&nbsp;= 32 electrons</div><p>Check with the sublevels: 4s (2) + 4p (6) + 4d (10) + 4f (14) = 32.</p><p>Common slips: 2n = 8, and n<sup>2</sup> = 16 (that is the number of orbitals, each of which holds two electrons).</p>
      solution: "<div class=\"worked__math\">최대 개수 = 2n<sup>2</sup><br>&nbsp;&nbsp;= 2 × 4<sup>2</sup><br>&nbsp;&nbsp;= 2 × 16<br>&nbsp;&nbsp;= 전자 32개</div><p>부껍질로 확인해 봐요: 4s (2) + 4p (6) + 4d (10) + 4f (14) = 32.</p><p>흔한 실수: 2n = 8로 계산하는 것, 그리고 n<sup>2</sup> = 16으로 답하는 것(16은 오비탈 수이고, 오비탈 하나에는 전자가 2개씩 들어가요).</p>",
      // EN: electrons
      unit: "개",
    },

    // ── s1-3-q013 · mcq · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q013": {
      // EN: <p>Which row describes the shapes of an s orbital and a p orbital?</p>
      stem: "<p>s 오비탈과 p 오비탈의 모양을 옳게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: s orbital: spherical. p orbital: dumbbell-shaped.
        "s 오비탈: 구형. p 오비탈: 아령 모양.",
        // EN: s orbital: dumbbell-shaped. p orbital: spherical.
        "s 오비탈: 아령 모양. p 오비탈: 구형.",
        // EN: s orbital: circular path around the nucleus. p orbital: figure-of-eight path around the nucleus.
        "s 오비탈: 원자핵 둘레의 원형 경로. p 오비탈: 원자핵 둘레의 8자 모양 경로.",
        // EN: s orbital: spherical. p orbital: spherical, but larger.
        "s 오비탈: 구형. p 오비탈: 구형이지만 더 큼.",
      ],
      hints: [
        // EN: One of them looks the same from every direction. The other has two lobes, one on each side of the nucleus.
        "하나는 어느 방향에서 보아도 똑같이 보여요. 다른 하나는 원자핵 양쪽에 하나씩, 두 개의 엽(lobe)이 있어요.",
      ],
      // EN: <p>An s orbital is spherical, centred on the nucleus. A p orbital is dumbbell-shaped: two lobes on opposite sides of the nucleus. There are three p orbitals in a p sublevel, pointing along the x, y and z axes.</p>
      solution: "<p>s 오비탈은 원자핵을 중심으로 한 구형이에요. p 오비탈은 아령 모양으로, 원자핵의 양쪽 반대편에 엽이 두 개 있어요. p 부껍질에는 p 오비탈이 3개 있고, 각각 x, y, z 축 방향을 향해요.</p>",
      misconception: {
        // EN (option B): These are the right two shapes, swapped. The s orbital is the sphere.
        "1": "두 모양은 맞지만 서로 바뀌었어요. 구형인 것은 s 오비탈이에요.",
        // EN (option C): An orbital is not a path. It is a region of space where there is a high probability of finding the electron.
        "2": "오비탈은 경로가 아니에요. 전자를 발견할 확률이 높은 공간 영역이에요.",
        // EN (option D): A larger sphere describes an s orbital in a higher main energy level (2s compared with 1s). A p orbital has two lobes.
        "3": "더 큰 구는 더 높은 주 에너지 준위에 있는 s 오비탈을 나타내요(1s와 비교한 2s). p 오비탈에는 엽이 두 개 있어요.",
      },
    },

    // ── s1-3-q014 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q014": {
      // EN: <p>The diagram shows one atomic orbital. The nucleus is where the axes cross.</p><p><svg viewBox="0 0 262 196" width="262" height="196" role="img" aria-label="An orbital drawn on x, y and z axes. It has two lobes, one on each side of the nucleus, pointing along the horizontal axis, which is labelled x. The vertical axis is labelled y and the dashed diagonal axis is labelled z."><line x1="20" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="130" y1="186" x2="130" y2="14" stroke="currentColor" stroke-width="1.2"/><line x1="76" y1="154" x2="184" y2="46" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><text x="246" y="105" font-size="14" fill="currentColor">x</text><text x="126" y="11" text-anchor="middle" font-size="14" fill="currentColor">y</text><text x="190" y="44" font-size="14" fill="currentColor">z</text><path d="M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/><path d="M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/><circle cx="130" cy="100" r="3" fill="currentColor"/></svg></p><p>Which orbital is shown?</p>
      stem: "<p>그림은 원자 오비탈 하나를 나타낸 거예요. 축들이 만나는 점에 원자핵이 있어요.</p><p><svg viewBox=\"0 0 262 196\" width=\"262\" height=\"196\" role=\"img\" aria-label=\"x, y, z 축 위에 그린 오비탈. 원자핵 양쪽에 엽이 하나씩, 모두 두 개 있고, x라고 표시된 가로축 방향을 향해요. 세로축은 y, 점선으로 된 대각선 축은 z라고 표시되어 있어요.\"><line x1=\"20\" y1=\"100\" x2=\"240\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"130\" y1=\"186\" x2=\"130\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"76\" y1=\"154\" x2=\"184\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/><text x=\"246\" y=\"105\" font-size=\"14\" fill=\"currentColor\">x</text><text x=\"126\" y=\"11\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">y</text><text x=\"190\" y=\"44\" font-size=\"14\" fill=\"currentColor\">z</text><path d=\"M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"currentColor\"/></svg></p><p>그림의 오비탈은 어느 것인가요?</p>",
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
        "엽이 두 개이면 p 오비탈이에요.",
        // EN: A p orbital is named after the axis that its lobes lie along.
        "p 오비탈의 이름은 엽들이 놓여 있는 축을 따라 붙여요.",
      ],
      // EN: <p>The orbital has two lobes, one on each side of the nucleus, so it is a p orbital. The lobes lie along the x axis, so it is p<sub>x</sub>. The other two p orbitals have the same shape and the same energy, but point along the y and z axes.</p>
      solution: "<p>이 오비탈은 원자핵 양쪽에 엽이 하나씩, 모두 두 개 있으므로 p 오비탈이에요. 엽들이 x 축을 따라 놓여 있으므로 p<sub>x</sub>예요. 나머지 두 p 오비탈은 모양과 에너지가 같지만, y 축과 z 축 방향을 향해요.</p>",
      misconception: {
        // EN (option A): An s orbital is a sphere centred on the nucleus. This orbital has two lobes.
        "0": "s 오비탈은 원자핵을 중심으로 한 구예요. 이 오비탈에는 엽이 두 개 있어요.",
        // EN (option C): A p<sub>y</sub> orbital has its lobes along the y axis. Check which axis runs through the middle of both lobes here.
        "2": "p<sub>y</sub> 오비탈은 엽들이 y 축을 따라 놓여 있어요. 여기서 두 엽의 가운데를 지나는 축이 어느 것인지 확인해 봐요.",
        // EN (option D): A p<sub>z</sub> orbital has its lobes along the z axis. Check which axis runs through the middle of both lobes here.
        "3": "p<sub>z</sub> 오비탈은 엽들이 z 축을 따라 놓여 있어요. 여기서 두 엽의 가운데를 지나는 축이 어느 것인지 확인해 봐요.",
      },
    },

    // ── s1-3-q015 · mcq · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q015": {
      // EN: <p>What is the full electron configuration of a phosphorus atom (Z = 15) in its ground state?</p>
      stem: "<p>바닥상태에 있는 인 원자(P, Z = 15)의 전체 전자 배치는 무엇인가요?</p>",
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
        "위첨자의 합이 15가 되어야 해요.",
        // EN: Fill in the order 1s, 2s, 2p, 3s, 3p. An s sublevel holds 2 electrons and a p sublevel holds 6.
        "1s, 2s, 2p, 3s, 3p 순서로 채워요. s 부껍질에는 전자가 2개, p 부껍질에는 6개 들어가요.",
      ],
      // EN: <p>Fill the sublevels from the lowest energy upwards (Aufbau principle): 1s (2), 2s (2), 2p (6), 3s (2). That is 12 electrons. The remaining 3 go into 3p.</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 3 = 15)</div>
      solution: "<p>에너지가 가장 낮은 부껍질부터 차례로 채워요(쌓음 원리): 1s (2), 2s (2), 2p (6), 3s (2). 여기까지 전자 12개예요. 남은 3개는 3p에 들어가요.</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 3 = 15)</div>",
      misconception: {
        // EN (option B): After 3s the next sublevel to fill is 3p, not 3d. The 3d sublevel is higher in energy than 4s.
        "1": "3s 다음에 채워지는 부껍질은 3d가 아니라 3p예요. 3d 부껍질은 4s보다 에너지가 높아요.",
        // EN (option C): A p sublevel has three orbitals, so it holds at most 6 electrons, not 8.
        "2": "p 부껍질에는 오비탈이 3개 있으므로 전자가 최대 8개가 아니라 6개 들어가요.",
        // EN (option D): Count the electrons: 2 + 2 + 6 + 2 + 5 = 17. That is chlorine. Phosphorus has 15.
        "3": "전자 수를 세어 봐요: 2 + 2 + 6 + 2 + 5 = 17. 이것은 염소예요. 인의 전자는 15개예요.",
      },
    },

    // ── s1-3-q016 · order · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q016": {
      // EN: <p>Put these sublevels in the order in which they are filled as atomic number increases (first to be filled at the top).</p>
      stem: "<p>원자 번호가 커질 때 다음 부껍질들이 채워지는 순서대로 나열하세요(가장 먼저 채워지는 것이 맨 위).</p>",
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
        "전자는 들어갈 수 있는 부껍질 중 에너지가 가장 낮은 곳으로 들어가요(쌓음 원리).",
        // EN: One sublevel of the fourth main energy level is filled before the 3d sublevel.
        "네 번째 주 에너지 준위의 부껍질 하나가 3d 부껍질보다 먼저 채워져요.",
      ],
      // EN: <p>The order of filling is 3s, 3p, 4s, 3d, 4p. The 4s sublevel is filled before 3d: potassium is <span class="mono">[Ar] 4s<sup>1</sup></span> and calcium is <span class="mono">[Ar] 4s<sup>2</sup></span>. The 3d sublevel then fills from scandium to zinc, and 4p fills from gallium to krypton.</p>
      solution: "<p>채워지는 순서는 3s, 3p, 4s, 3d, 4p예요. 4s 부껍질이 3d보다 먼저 채워져요: 칼륨(K)은 <span class=\"mono\">[Ar] 4s<sup>1</sup></span>이고 칼슘(Ca)은 <span class=\"mono\">[Ar] 4s<sup>2</sup></span>예요. 그다음 스칸듐(Sc)부터 아연(Zn)까지 3d 부껍질이 채워지고, 갈륨(Ga)부터 크립톤(Kr)까지 4p가 채워져요.</p>",
    },

    // ── s1-3-q017 · mcq · foundation · SL · Structure 1.3.5 · 1 mark
    "s1-3-q017": {
      // EN: <p>A student draws this orbital diagram for a beryllium atom (Z = 4).</p><p><svg viewBox="0 0 80 56" width="80" height="56" role="img" aria-label="Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains two up arrows."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 25V8M64 13L68 8L72 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>한 학생이 베릴륨 원자(Z = 4)의 오비탈 상자 그림을 다음과 같이 그렸어요.</p><p><svg viewBox=\"0 0 80 56\" width=\"80\" height=\"56\" role=\"img\" aria-label=\"오비탈 상자 그림. 1s 상자에는 위쪽 화살표 1개와 아래쪽 화살표 1개가 있어요. 2s 상자에는 위쪽 화살표 2개가 있어요.\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 25V8M64 13L68 8L72 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text></svg></p><p>이 그림은 어떤 규칙 또는 원리를 어기고 있나요?</p>",
      options: [
        // EN: The Aufbau principle
        "쌓음 원리",
        // EN: Hund’s rule
        "훈트 규칙",
        // EN: The Pauli exclusion principle
        "파울리 배타 원리",
        // EN: None. The diagram is correct.
        "없음. 그림이 옳다.",
      ],
      hints: [
        // EN: Compare the two arrows in the 1s box with the two arrows in the 2s box.
        "1s 상자의 두 화살표와 2s 상자의 두 화살표를 비교해 봐요.",
        // EN: Which principle says that two electrons in the same orbital must have opposite spins?
        "같은 오비탈에 있는 두 전자는 스핀이 반대여야 한다고 말하는 원리는 무엇인가요?",
      ],
      // EN: <p>The two electrons in the 2s orbital are drawn with the same spin (both arrows up). The <strong>Pauli exclusion principle</strong> says an orbital can hold at most two electrons, and they must have opposite spins. The 2s box should show one arrow up and one arrow down.</p>
      solution: "<p>2s 오비탈의 두 전자가 같은 스핀으로 그려져 있어요(두 화살표가 모두 위쪽). <strong>파울리 배타 원리</strong>에 따르면 오비탈 하나에는 전자가 최대 2개 들어갈 수 있고, 두 전자의 스핀은 반대여야 해요. 2s 상자에는 위쪽 화살표 하나와 아래쪽 화살표 하나가 있어야 해요.</p>",
      misconception: {
        // EN (option A): The Aufbau principle is about filling the lowest-energy sublevels first. Here 1s is full before 2s is used, so the order is right.
        "0": "쌓음 원리는 에너지가 가장 낮은 부껍질부터 채운다는 원리예요. 여기서는 2s를 쓰기 전에 1s가 다 채워졌으므로 순서는 맞아요.",
        // EN (option B): Hund’s rule is about how electrons spread out over several orbitals of the same energy, such as the three 2p orbitals. A 2s sublevel has only one orbital.
        "1": "훈트 규칙은 세 개의 2p 오비탈처럼 에너지가 같은 여러 오비탈에 전자가 어떻게 퍼져 들어가는지에 대한 규칙이에요. 2s 부껍질에는 오비탈이 하나뿐이에요.",
        // EN (option D): Look at the two arrows in the 2s box. They point the same way.
        "3": "2s 상자의 두 화살표를 봐요. 같은 방향을 향하고 있어요.",
      },
    },

    // ── s1-3-q018 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q018": {
      // EN: <p>What is the electron configuration of the sulfide ion, <span class="chem">S^2-</span>? (Sulfur has Z = 16.)</p>
      stem: "<p>황화 이온 <span class=\"chem\">S^2-</span>의 전자 배치는 무엇인가요? (황은 Z = 16이에요.)</p>",
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
        "먼저 전자 수를 구해요: 원자 번호에서 시작해서 전하만큼 조정해요.",
        // EN: A negative charge means extra electrons.
        "음전하는 전자가 더 많다는 뜻이에요.",
      ],
      // EN: <p>A sulfur atom has 16 electrons. The 2− charge means two extra electrons: 16 + 2 = 18 electrons.</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span><br>&nbsp;&nbsp;(the same configuration as argon)</div>
      solution: "<p>황 원자에는 전자가 16개 있어요. 2− 전하는 전자가 2개 더 있다는 뜻이에요: 16 + 2 = 18개.</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span><br>&nbsp;&nbsp;(아르곤과 같은 전자 배치)</div>",
      misconception: {
        // EN (option A): This has 14 electrons. A 2− charge means the atom has <em>gained</em> two electrons, not lost them.
        "0": "이것은 전자가 14개예요. 2− 전하는 원자가 전자 2개를 잃은 것이 아니라 <em>얻었다는</em> 뜻이에요.",
        // EN (option B): This is the sulfur atom, with 16 electrons. The ion has two more.
        "1": "이것은 전자가 16개인 황 원자예요. 이온은 전자가 2개 더 많아요.",
        // EN (option D): This has 20 electrons. The ion has 16 + 2 = 18.
        "3": "이것은 전자가 20개예요. 이온은 16 + 2 = 18개예요.",
      },
    },

    // ── s1-3-q019 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q019": {
      // EN: <p>What is the condensed electron configuration of a chromium atom (Z = 24) in its ground state?</p>
      stem: "<p>바닥상태에 있는 크로뮴 원자(Cr, Z = 24)의 축약 전자 배치는 무엇인가요?</p>",
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
        "아르곤은 전자가 18개이므로 6개가 더 필요해요.",
        // EN: Chromium and copper are the two exceptions to the usual filling order.
        "크로뮴과 구리는 일반적인 채우는 순서를 따르지 않는 두 예외예요.",
      ],
      // EN: <p>Chromium has 24 electrons: the argon core (18) plus 6. The usual order predicts <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>, but chromium is an exception. Its ground state is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>. (Writing it as <span class="mono">[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span> is also accepted.)</p>
      solution: "<p>크로뮴은 전자가 24개예요: 아르곤 핵심(18개)에 6개를 더한 것이에요. 일반적인 순서대로라면 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>4</sup></span>가 되지만, 크로뮴은 예외예요. 바닥상태는 <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span>예요. (<span class=\"mono\">[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span>로 써도 인정돼요.)</p>",
      misconception: {
        // EN (option A): This is what the usual filling order predicts, but chromium is one of the two exceptions you must know.
        "0": "이것은 일반적인 채우는 순서대로 예측한 배치예요. 하지만 크로뮴은 꼭 알아 두어야 할 두 예외 중 하나예요.",
        // EN (option C): This has the right number of electrons, but the 4s orbital is not empty in a chromium atom.
        "2": "전자 수는 맞지만, 크로뮴 원자에서 4s 오비탈은 비어 있지 않아요.",
        // EN (option D): The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after chromium.
        "3": "비활성 기체 핵심은 그 원소 <em>앞에</em> 있는 비활성 기체여야 해요. 크립톤(Z = 36)은 크로뮴보다 뒤에 있어요.",
      },
    },

    // ── s1-3-q020 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q020": {
      // EN: <p>What is the full electron configuration of a copper atom (Z = 29) in its ground state?</p>
      stem: "<p>바닥상태에 있는 구리 원자(Cu, Z = 29)의 전체 전자 배치는 무엇인가요?</p>",
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
        "위첨자의 합이 29가 되어야 해요.",
        // EN: Chromium and copper are the two exceptions to the usual filling order.
        "크로뮴과 구리는 일반적인 채우는 순서를 따르지 않는 두 예외예요.",
      ],
      // EN: <p>Copper has 29 electrons. The usual order predicts <span class="mono">4s<sup>2</sup> 3d<sup>9</sup></span> after the argon core, but copper is an exception. Its ground state is</p><div class="worked__math"><span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 6 + 1 + 10 = 29)</div>
      solution: "<p>구리는 전자가 29개예요. 일반적인 순서대로라면 아르곤 핵심 뒤에 <span class=\"mono\">4s<sup>2</sup> 3d<sup>9</sup></span>가 오지만, 구리는 예외예요. 바닥상태는 다음과 같아요.</p><div class=\"worked__math\"><span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> 3d<sup>10</sup></span><br>&nbsp;&nbsp;(2 + 2 + 6 + 2 + 6 + 1 + 10 = 29)</div>",
      misconception: {
        // EN (option A): This is what the usual filling order predicts, but copper is one of the two exceptions you must know.
        "0": "이것은 일반적인 채우는 순서대로 예측한 배치예요. 하지만 구리는 꼭 알아 두어야 할 두 예외 중 하나예요.",
        // EN (option C): Count the electrons: this has 28. A copper atom has 29.
        "2": "전자 수를 세어 봐요: 이것은 28개예요. 구리 원자는 29개예요.",
        // EN (option D): Count the electrons: this has 30. That is zinc.
        "3": "전자 수를 세어 봐요: 이것은 30개예요. 이것은 아연이에요.",
      },
    },

    // ── s1-3-q021 · numeric · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q021": {
      // EN: <p>How many <strong>unpaired</strong> electrons are there in an iron atom (Z = 26) in its ground state?</p>
      stem: "<p>바닥상태에 있는 철 원자(Fe, Z = 26)에는 <strong>홀전자</strong>가 몇 개 있나요?</p>",
      hints: [
        // EN: Write the configuration first. Only a partly filled sublevel can contain unpaired electrons.
        "먼저 전자 배치를 써요. 부분적으로 채워진 부껍질에만 홀전자가 있을 수 있어요.",
        // EN: A d sublevel has five orbitals. Put one electron in each orbital before pairing any (Hund’s rule).
        "d 부껍질에는 오비탈이 5개 있어요. 전자를 짝짓기 전에 각 오비탈에 하나씩 먼저 넣어요(훈트 규칙).",
      ],
      // EN: <p>Iron is <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. The 4s orbital is full, so its two electrons are paired. The 3d sublevel has five orbitals and six electrons. By Hund’s rule the first five electrons go into separate orbitals, and the sixth pairs up with one of them.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagram for iron beyond the argon core. The 4s box has one up and one down arrow. The five 3d boxes hold: an up and a down arrow, then one up arrow in each of the other four."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">4s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="78" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M93 25V8M89 13L93 8L97 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M123 25V8M119 13L123 8L127 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="123" y="50" text-anchor="middle" font-size="14" fill="currentColor">3d</text></svg></p><p>That leaves <strong>4</strong> unpaired electrons.</p>
      solution: "<p>철은 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>이에요. 4s 오비탈은 꽉 차 있으므로 두 전자는 짝을 이루고 있어요. 3d 부껍질에는 오비탈 다섯 개와 전자 여섯 개가 있어요. 훈트 규칙에 따라 처음 다섯 전자는 서로 다른 오비탈에 하나씩 들어가고, 여섯 번째 전자는 그중 하나와 짝을 이뤄요.</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"아르곤 핵심 바깥쪽 철의 오비탈 상자 그림. 4s 상자에는 위쪽 화살표 하나와 아래쪽 화살표 하나가 있어요. 3d 상자 다섯 개 중 첫 번째에는 위쪽과 아래쪽 화살표가 하나씩, 나머지 네 개에는 위쪽 화살표가 하나씩 있어요.\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"78\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M93 25V8M89 13L93 8L97 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M123 25V8M119 13L123 8L127 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"123\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3d</text></svg></p><p>따라서 홀전자는 <strong>4</strong>개예요.</p>",
      // EN: unpaired electrons
      unit: "개",
    },

    // ── s1-3-q022 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q022": {
      // EN: <p>A student draws this orbital diagram for a nitrogen atom (Z = 7) in its ground state.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Orbital diagram. The 1s box and the 2s box each contain one up arrow and one down arrow. Of the three 2p boxes, the first contains an up arrow and a down arrow, the second contains one up arrow, and the third is empty."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M104 25V8M100 13L104 8L108 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M114 7V24M110 19L114 24L118 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "<p>한 학생이 바닥상태에 있는 질소 원자(Z = 7)의 오비탈 상자 그림을 다음과 같이 그렸어요.</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"오비탈 상자 그림. 1s 상자와 2s 상자에는 각각 위쪽 화살표 하나와 아래쪽 화살표 하나가 있어요. 2p 상자 세 개 중 첫 번째에는 위쪽과 아래쪽 화살표가 하나씩, 두 번째에는 위쪽 화살표 하나가 있고, 세 번째는 비어 있어요.\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M104 25V8M100 13L104 8L108 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M114 7V24M110 19L114 24L118 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p><p>이 그림은 어떤 규칙 또는 원리를 어기고 있나요?</p>",
      options: [
        // EN: The Aufbau principle
        "쌓음 원리",
        // EN: Hund’s rule
        "훈트 규칙",
        // EN: The Pauli exclusion principle
        "파울리 배타 원리",
        // EN: None. The diagram is correct.
        "없음. 그림이 옳다.",
      ],
      hints: [
        // EN: The number of electrons (7) and the order of the sublevels are both right. Look at how the 2p electrons are arranged.
        "전자 수(7개)와 부껍질의 순서는 모두 맞아요. 2p 전자들이 어떻게 배열되어 있는지 봐요.",
        // EN: Which rule says orbitals of the same energy are each occupied singly before any is doubly occupied?
        "에너지가 같은 오비탈들은 어느 하나에 전자 두 개가 들어가기 전에 먼저 하나씩 채워진다고 말하는 규칙은 무엇인가요?",
      ],
      // EN: <p><strong>Hund’s rule</strong>: orbitals in the same sublevel are each occupied by one electron, with parallel spins, before any orbital is doubly occupied. The three 2p electrons of nitrogen should be in three separate 2p orbitals, all with the same spin.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Correct orbital diagram for nitrogen. The 1s and 2s boxes each contain a pair of opposite arrows. Each of the three 2p boxes contains one up arrow."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M169 25V8M165 13L169 8L173 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p>
      solution: "<p><strong>훈트 규칙</strong>: 같은 부껍질의 오비탈들은 어느 오비탈에 전자 두 개가 들어가기 전에, 먼저 각각 전자 하나씩 같은 방향의 스핀으로 채워져요. 질소의 2p 전자 세 개는 서로 다른 2p 오비탈 세 개에 하나씩, 모두 같은 스핀으로 들어가야 해요.</p><p><svg viewBox=\"0 0 186 56\" width=\"186\" height=\"56\" role=\"img\" aria-label=\"질소의 올바른 오비탈 상자 그림. 1s 상자와 2s 상자에는 각각 반대 방향 화살표 한 쌍이 있어요. 2p 상자 세 개에는 각각 위쪽 화살표가 하나씩 있어요.\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M12 25V8M8 13L12 8L16 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 7V24M18 19L22 24L26 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"17\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1s</text><rect x=\"48\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M58 25V8M54 13L58 8L62 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M68 7V24M64 19L68 24L72 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"63\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2s</text><rect x=\"94\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M109 25V8M105 13L109 8L113 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"124\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M139 25V8M135 13L139 8L143 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M169 25V8M165 13L169 8L173 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"139\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2p</text></svg></p>",
      misconception: {
        // EN (option A): The sublevels are filled in the right order: 1s, then 2s, then 2p. The problem is inside the 2p sublevel.
        "0": "부껍질은 1s, 2s, 2p의 올바른 순서로 채워졌어요. 문제는 2p 부껍질 안에 있어요.",
        // EN (option C): Every orbital that holds two electrons shows one arrow up and one arrow down, so the Pauli exclusion principle is obeyed.
        "2": "전자 두 개가 들어 있는 오비탈은 모두 위쪽 화살표 하나와 아래쪽 화살표 하나로 그려져 있으므로, 파울리 배타 원리는 지켜졌어요.",
        // EN (option D): Look at the 2p sublevel. One orbital holds a pair while another orbital of the same energy is empty.
        "3": "2p 부껍질을 봐요. 에너지가 같은 다른 오비탈이 비어 있는데 한 오비탈에는 전자쌍이 들어 있어요.",
      },
    },

    // ── s1-3-q023 · multi · exam · SL · Structure 1.3.5 · 2 marks
    "s1-3-q023": {
      // EN: <p>Which ions have the same electron configuration as an argon atom, <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>?</p>
      stem: "<p>다음 중 아르곤 원자의 전자 배치 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup></span>과 같은 전자 배치를 가진 이온을 모두 고르세요.</p>",
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
        "아르곤은 전자가 18개예요. 각 이온의 전자 수를 세어 봐요.",
        // EN: Electrons in an ion = atomic number − charge. For a 2− ion, subtracting −2 adds two.
        "이온의 전자 수 = 원자 번호 − 전하. 2− 이온은 −2를 빼므로 2를 더하는 셈이에요.",
      ],
      // EN: <p>Argon has 18 electrons. Count the electrons in each ion:</p><div class="worked__math"><span class="chem">K+</span>: 19 − 1 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">Cl-</span>: 17 + 1 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">Na+</span>: 11 − 1 = 10 &nbsp; no (neon)</div><div class="worked__math"><span class="chem">Ca^2+</span>: 20 − 2 = 18 &nbsp; yes</div><div class="worked__math"><span class="chem">O^2-</span>: 8 + 2 = 10 &nbsp; no (neon)</div><div class="worked__math"><span class="chem">S^2-</span>: 16 + 2 = 18 &nbsp; yes</div>
      solution: "<p>아르곤은 전자가 18개예요. 각 이온의 전자 수를 세어 봐요:</p><div class=\"worked__math\"><span class=\"chem\">K+</span>: 19 − 1 = 18 &nbsp; 예</div><div class=\"worked__math\"><span class=\"chem\">Cl-</span>: 17 + 1 = 18 &nbsp; 예</div><div class=\"worked__math\"><span class=\"chem\">Na+</span>: 11 − 1 = 10 &nbsp; 아니요 (네온)</div><div class=\"worked__math\"><span class=\"chem\">Ca^2+</span>: 20 − 2 = 18 &nbsp; 예</div><div class=\"worked__math\"><span class=\"chem\">O^2-</span>: 8 + 2 = 10 &nbsp; 아니요 (네온)</div><div class=\"worked__math\"><span class=\"chem\">S^2-</span>: 16 + 2 = 18 &nbsp; 예</div>",
      misconception: {
        // EN (option C): A sodium atom has 11 electrons, so <span class="chem">Na+</span> has 10. That is the configuration of neon, not argon.
        "2": "나트륨 원자는 전자가 11개이므로 <span class=\"chem\">Na+</span>은 10개예요. 이것은 아르곤이 아니라 네온의 전자 배치예요.",
        // EN (option E): An oxygen atom has 8 electrons, so <span class="chem">O^2-</span> has 10. That is the configuration of neon, not argon.
        "4": "산소 원자는 전자가 8개이므로 <span class=\"chem\">O^2-</span>은 10개예요. 이것은 아르곤이 아니라 네온의 전자 배치예요.",
      },
    },

    // ── s1-3-q024 · numeric · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q024": {
      // EN: <p>How many <strong>orbitals</strong> are there in total in the main energy level n = 3?</p>
      stem: "<p>주 에너지 준위 n = 3에는 <strong>오비탈</strong>이 모두 몇 개 있나요?</p>",
      hints: [
        // EN: The third main energy level has three sublevels: 3s, 3p and 3d.
        "세 번째 주 에너지 준위에는 3s, 3p, 3d의 세 부껍질이 있어요.",
        // EN: An s sublevel has 1 orbital, a p sublevel has 3 and a d sublevel has 5.
        "s 부껍질에는 오비탈이 1개, p 부껍질에는 3개, d 부껍질에는 5개 있어요.",
      ],
      // EN: <div class="worked__math">3s: 1 orbital &nbsp; 3p: 3 orbitals &nbsp; 3d: 5 orbitals</div><div class="worked__math">total = 1 + 3 + 5 = 9 orbitals</div><p>Check: each orbital holds 2 electrons, so n = 3 holds 9 × 2 = 18 electrons, which agrees with 2n<sup>2</sup> = 18. The common slip is to answer 18, which is the number of electrons, not orbitals.</p>
      solution: "<div class=\"worked__math\">3s: 오비탈 1개 &nbsp; 3p: 오비탈 3개 &nbsp; 3d: 오비탈 5개</div><div class=\"worked__math\">합계 = 1 + 3 + 5 = 오비탈 9개</div><p>확인: 오비탈 하나에 전자가 2개씩 들어가므로 n = 3에는 전자가 9 × 2 = 18개 들어가고, 이것은 2n<sup>2</sup> = 18과 일치해요. 흔한 실수는 18이라고 답하는 것인데, 18은 오비탈 수가 아니라 전자 수예요.</p>",
      // EN: orbitals
      unit: "개",
    },

    // ── s1-3-q025 · mcq · challenge · SL · Structure 1.3.5 · 1 mark
    "s1-3-q025": {
      // EN: <p>Atoms of element X have the configuration <span class="mono">[Ne] 3s<sup>2</sup></span>. Atoms of element Y have the configuration <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>. X and Y form an ionic compound in which each ion has a noble gas configuration.</p><p>Which row gives the formula of the compound and the configurations of the ions?</p>
      stem: "<p>원소 X의 원자는 전자 배치가 <span class=\"mono\">[Ne] 3s<sup>2</sup></span>예요. 원소 Y의 원자는 전자 배치가 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>예요. X와 Y는 각 이온이 비활성 기체의 전자 배치를 갖는 이온 결합 화합물을 만들어요.</p><p>이 화합물의 화학식과 이온들의 전자 배치를 옳게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: X<sub>3</sub>Y<sub>2</sub>. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "X<sub>3</sub>Y<sub>2</sub>. 두 이온 모두 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.",
        // EN: X<sub>2</sub>Y<sub>3</sub>. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "X<sub>2</sub>Y<sub>3</sub>. 두 이온 모두 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.",
        // EN: X<sub>3</sub>Y<sub>2</sub>. The X ion is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span> and the Y ion is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup></span>.
        "X<sub>3</sub>Y<sub>2</sub>. X 이온은 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>, Y 이온은 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup></span>.",
        // EN: XY. Both ions are <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.
        "XY. 두 이온 모두 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.",
      ],
      hints: [
        // EN: X has two outer electrons. Y has five. Which loses electrons and which gains?
        "X는 바깥 전자가 2개예요. Y는 5개예요. 어느 쪽이 전자를 잃고 어느 쪽이 전자를 얻을까요?",
        // EN: Find the charge on each ion, then balance the charges to get the formula.
        "각 이온의 전하를 구한 다음, 전하가 맞도록 해서 화학식을 구해요.",
      ],
      // EN: <p>X (<span class="mono">[Ne] 3s<sup>2</sup></span>, magnesium) loses its two 3s electrons to form X<sup>2+</sup>: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Y (<span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>, nitrogen) gains three electrons to form Y<sup>3−</sup>: <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Balance the charges: 3 × (2+) = 6+ and 2 × (3−) = 6−, so the formula is X<sub>3</sub>Y<sub>2</sub> (<span class="chem">Mg3N2</span>).</p>
      solution: "<p>X(<span class=\"mono\">[Ne] 3s<sup>2</sup></span>, 마그네슘)는 3s 전자 2개를 잃고 X<sup>2+</sup>가 돼요: <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>Y(<span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>, 질소)는 전자 3개를 얻고 Y<sup>3−</sup>이 돼요: <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>.</p><p>전하를 맞춰요: 3 × (2+) = 6+이고 2 × (3−) = 6−이므로, 화학식은 X<sub>3</sub>Y<sub>2</sub>(<span class=\"chem\">Mg3N2</span>)예요.</p>",
      misconception: {
        // EN (option B): The configurations are right, but the formula is not. Three 2+ ions balance two 3− ions, so the numbers go the other way round.
        "1": "전자 배치는 맞지만 화학식이 틀렸어요. 2+ 이온 3개가 3− 이온 2개와 전하가 맞으므로, 숫자가 반대로 되어야 해요.",
        // EN (option C): Y is a non-metal with five outer electrons. It gains three electrons to fill 2p. It does not lose its 2p electrons.
        "2": "Y는 바깥 전자가 5개인 비금속이에요. 2p를 채우기 위해 전자 3개를 얻어요. 2p 전자를 잃지 않아요.",
        // EN (option D): The charges are not equal in size. X forms a 2+ ion and Y forms a 3− ion, so a 1 : 1 formula is not neutral.
        "3": "두 전하의 크기가 같지 않아요. X는 2+ 이온, Y는 3− 이온이 되므로, 1 : 1 화학식으로는 전기적으로 중성이 되지 않아요.",
      },
    },

    // ── s1-3-q026 · mcq · challenge · SL · Structure 1.3.5 · 1 mark
    "s1-3-q026": {
      // EN: <p>Which atom has the <strong>greatest</strong> number of unpaired electrons in its ground state?</p>
      stem: "<p>바닥상태에서 홀전자 수가 <strong>가장 많은</strong> 원자는 어느 것인가요?</p>",
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
        "각 원자의 축약 전자 배치를 써요. 두 예외를 잊지 마세요.",
        // EN: Use Hund’s rule in each partly filled sublevel: one electron per orbital before any pairing.
        "부분적으로 채워진 각 부껍질에 훈트 규칙을 적용해요: 짝을 짓기 전에 오비탈마다 전자 하나씩.",
      ],
      // EN: <p>Write each configuration and count the singly occupied orbitals.</p><div class="worked__math">Cr: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> &nbsp; 1 + 5<br>&nbsp;&nbsp;= 6 unpaired</div><div class="worked__math">Mn: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> &nbsp; 5 unpaired</div><div class="worked__math">Fe: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp; 4 unpaired</div><div class="worked__math">As: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> &nbsp; 3 unpaired</div><p>Chromium is an exception to the usual filling order. Its single 4s electron and its five 3d electrons are all unpaired, so it has the most: 6.</p>
      solution: "<p>각 원자의 전자 배치를 쓰고, 전자가 하나만 들어 있는 오비탈의 수를 세어 봐요.</p><div class=\"worked__math\">Cr: <span class=\"mono\">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> &nbsp; 1 + 5<br>&nbsp;&nbsp;= 홀전자 6개</div><div class=\"worked__math\">Mn: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> &nbsp; 홀전자 5개</div><div class=\"worked__math\">Fe: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> &nbsp; 홀전자 4개</div><div class=\"worked__math\">As: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span> &nbsp; 홀전자 3개</div><p>크로뮴은 일반적인 채우는 순서의 예외예요. 4s 전자 하나와 3d 전자 다섯 개가 모두 홀전자이므로, 홀전자가 가장 많아요: 6개.</p>",
      misconception: {
        // EN (option B): Manganese, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>, has five unpaired electrons. One of the other atoms has more, because of an exception to the usual filling order.
        "1": "망가니즈 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span>는 홀전자가 5개예요. 일반적인 채우는 순서의 예외 때문에, 다른 원자 중 하나는 이보다 더 많아요.",
        // EN (option C): Iron, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>, has four unpaired electrons. The sixth 3d electron has to pair up.
        "2": "철 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>은 홀전자가 4개예요. 여섯 번째 3d 전자는 짝을 이뤄야 해요.",
        // EN (option D): Arsenic, <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span>, has three unpaired electrons, all in 4p. The 3d sublevel is full.
        "3": "비소 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup></span>은 홀전자가 3개이고, 모두 4p에 있어요. 3d 부껍질은 꽉 차 있어요.",
      },
    },

    // ── s1-3-q027 · mcq · exam · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q027": {
      // EN: <p>What is the condensed electron configuration of the <span class="chem">Fe^3+</span> ion? (Iron has Z = 26.)</p>
      stem: "<p><span class=\"chem\">Fe^3+</span> 이온의 축약 전자 배치는 무엇인가요? (철은 Z = 26이에요.)</p>",
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
        "원자에서 시작해요: <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. 전자 3개를 떼어 내야 해요.",
        // EN: Which sublevel loses electrons first when a first-row transition element forms a positive ion?
        "첫 번째 줄 전이 원소가 양이온이 될 때, 어느 부껍질의 전자가 먼저 떨어져 나갈까요?",
      ],
      // EN: <p>The iron atom is <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>. When first-row transition elements form ions, the 4s electrons are removed before the 3d electrons. Remove the two 4s electrons, then one 3d electron:</p><div class="worked__math"><span class="chem">Fe^3+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span><br>&nbsp;&nbsp;(26 − 3 = 23 electrons)</div><p>This skill is listed for HL in Structure 3.1.</p>
      solution: "<p>철 원자는 <span class=\"mono\">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span>이에요. 첫 번째 줄 전이 원소가 이온이 될 때는 3d 전자보다 4s 전자가 먼저 떨어져 나가요. 4s 전자 2개를 떼어 낸 다음, 3d 전자 1개를 떼어 내요:</p><div class=\"worked__math\"><span class=\"chem\">Fe^3+</span>: <span class=\"mono\">[Ar] 3d<sup>5</sup></span><br>&nbsp;&nbsp;(전자 26 − 3 = 23개)</div><p>이 내용은 Structure 3.1의 HL 기능으로 나와 있어요.</p>",
      misconception: {
        // EN (option A): This removes all three electrons from 3d. When a first-row transition element forms an ion, the 4s electrons are lost first.
        "0": "이것은 세 전자를 모두 3d에서 떼어 냈어요. 첫 번째 줄 전이 원소가 이온이 될 때는 4s 전자를 먼저 잃어요.",
        // EN (option B): This removes one 4s electron and two 3d electrons. Both 4s electrons are lost before any 3d electron.
        "1": "이것은 4s 전자 1개와 3d 전자 2개를 떼어 냈어요. 3d 전자를 잃기 전에 4s 전자 2개를 모두 먼저 잃어요.",
        // EN (option D): This has three <em>more</em> electrons than the atom. A 3+ charge means three electrons have been lost.
        "3": "이것은 원자보다 전자가 3개 <em>더 많아요</em>. 3+ 전하는 전자 3개를 잃었다는 뜻이에요.",
      },
    },

    // ── s1-3-q028 · mcq · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q028": {
      // EN: <p>Which feature of the emission spectrum of an atom can be used to find its first ionization energy?</p>
      stem: "<p>원자의 방출 스펙트럼에서 제1 이온화 에너지를 구하는 데 쓸 수 있는 특징은 무엇인가요?</p>",
      options: [
        // EN: The line with the lowest frequency in the visible region
        "가시광선 영역에서 진동수가 가장 작은 선",
        // EN: The total number of lines in the spectrum
        "스펙트럼에 있는 선의 전체 개수",
        // EN: The limit of convergence at high frequency
        "높은 진동수 쪽의 수렴 한계",
        // EN: The spacing between the first two lines of a set
        "한 선 계열에서 처음 두 선 사이의 간격",
      ],
      hints: [
        // EN: Ionization means the electron is removed completely, to n = ∞. Where do the lines end up as the upper level gets higher and higher?
        "이온화란 전자가 n = ∞까지 완전히 떨어져 나가는 것이에요. 위쪽 준위가 점점 더 높아지면 선들은 결국 어디로 가나요?",
      ],
      // EN: <p>The lines in a set get closer together at higher frequency until they merge. This point is the <strong>limit of convergence</strong>. It corresponds to the electron moving between the lower level and n = ∞, which is ionization. Its frequency (or wavelength) gives the ionization energy using E = hf.</p>
      solution: "<p>한 계열의 선들은 진동수가 높아질수록 서로 가까워지다가 결국 하나로 합쳐져요. 이 지점이 <strong>수렴 한계</strong>예요. 이것은 전자가 아래쪽 준위와 n = ∞ 사이를 이동하는 것, 즉 이온화에 해당해요. 이 지점의 진동수(또는 파장)로부터 E = hf를 이용해 이온화 에너지를 구할 수 있어요.</p>",
      misconception: {
        // EN (option A): A single line gives the energy difference between two levels inside the atom. Ionization means the electron leaves the atom completely.
        "0": "선 하나는 원자 안에 있는 두 준위 사이의 에너지 차이를 알려 줘요. 이온화는 전자가 원자에서 완전히 떨어져 나가는 것이에요.",
        // EN (option B): The number of lines does not measure an energy.
        "1": "선의 개수로는 에너지를 잴 수 없어요.",
        // EN (option D): The spacing between two lines gives the energy difference between two upper levels. It does not give the energy needed to remove the electron.
        "3": "두 선 사이의 간격은 위쪽 두 준위 사이의 에너지 차이를 알려 줘요. 전자를 떼어 내는 데 필요한 에너지를 알려 주지는 않아요.",
      },
    },

    // ── s1-3-q029 · mcq · exam · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q029": {
      // EN: <p>Why does the first ionization energy generally <strong>increase</strong> across period 3, from sodium to argon?</p>
      stem: "<p>3주기에서 나트륨부터 아르곤까지 갈수록 제1 이온화 에너지가 대체로 <strong>커지는</strong> 이유는 무엇인가요?</p>",
      options: [
        // EN: The number of occupied main energy levels increases.
        "전자가 들어 있는 주 에너지 준위의 수가 많아진다.",
        // EN: The nuclear charge increases while the shielding by inner electrons stays about the same.
        "핵전하는 커지지만, 안쪽 전자에 의한 가려막기는 거의 그대로이다.",
        // EN: The atoms get larger, so the outer electrons are further from the nucleus.
        "원자가 커지므로 바깥 전자가 원자핵에서 더 멀어진다.",
        // EN: The shielding by inner electrons increases with each element.
        "원소마다 안쪽 전자에 의한 가려막기가 커진다.",
      ],
      hints: [
        // EN: What changes in the nucleus from one element to the next?
        "한 원소에서 다음 원소로 갈 때 원자핵에서는 무엇이 달라지나요?",
        // EN: Are the extra electrons going into a new main energy level or the same one?
        "늘어난 전자는 새로운 주 에너지 준위로 들어가나요, 아니면 같은 준위로 들어가나요?",
      ],
      // EN: <p>Across the period the number of protons increases, so the nuclear charge increases. The outer electrons are all in the same main energy level (n = 3), so the shielding by the inner electrons is about the same. The outer electrons are attracted more strongly to the nucleus (and are closer to it), so more energy is needed to remove one.</p>
      solution: "<p>주기를 따라 갈수록 양성자 수가 많아지므로 핵전하가 커져요. 바깥 전자는 모두 같은 주 에너지 준위(n = 3)에 있으므로, 안쪽 전자에 의한 가려막기는 거의 같아요. 바깥 전자가 원자핵에 더 강하게 끌리므로(그리고 원자핵에 더 가까우므로), 전자 하나를 떼어 내는 데 더 많은 에너지가 필요해요.</p>",
      misconception: {
        // EN (option A): All the period 3 elements have three occupied main energy levels. A new level starts only at the next period.
        "0": "3주기 원소는 모두 전자가 들어 있는 주 에너지 준위가 3개예요. 새로운 준위는 다음 주기에서야 시작돼요.",
        // EN (option C): The atoms get <em>smaller</em> across a period. And an electron further from the nucleus would be easier to remove, not harder.
        "2": "주기를 따라 갈수록 원자는 <em>작아져요</em>. 그리고 전자가 원자핵에서 더 멀다면 떼어 내기가 더 어려운 것이 아니라 더 쉬워요.",
        // EN (option D): Across a period the extra electrons go into the same main energy level, so the number of inner (shielding) electrons does not change. More shielding would also make ionization easier, not harder.
        "3": "주기를 따라 갈 때 늘어난 전자는 같은 주 에너지 준위로 들어가므로, 안쪽(가려막는) 전자의 수는 변하지 않아요. 또 가려막기가 커진다면 이온화가 더 어려워지는 것이 아니라 더 쉬워질 거예요.",
      },
    },

    // ── s1-3-q030 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q030": {
      // EN: <p>The first ionization energies of three group 1 elements are: Li 520, Na 496 and K 419 <span class="unit">kJ mol-1</span>.</p><p>Explain why the first ionization energy decreases down the group.</p>
      stem: "<p>1족 원소 세 가지의 제1 이온화 에너지는 다음과 같아요: Li 520, Na 496, K 419 <span class=\"unit\">kJ mol-1</span>.</p><p>족의 아래로 갈수록 제1 이온화 에너지가 작아지는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Compare where the outer electron is: 2s in Li, 3s in Na, 4s in K.
        "바깥 전자가 어디에 있는지 비교해 봐요: Li는 2s, Na는 3s, K는 4s.",
        // EN: Two things change that both weaken the attraction to the nucleus. Name both.
        "원자핵의 인력을 약하게 만드는 두 가지가 달라져요. 둘 다 쓰세요.",
      ],
      // EN: <p>Going down the group, the outer electron is in a higher main energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove it.</p>
      answer: "<p>족의 아래로 갈수록 바깥 전자가 더 높은 주 에너지 준위에 있으므로 원자핵에서 더 멀어요. 또 안쪽 전자가 더 많으므로, 바깥 전자는 원자핵으로부터 더 많이 가려막혀요. 원자핵과 바깥 전자 사이의 인력이 (핵전하가 더 큰데도) 더 약하므로, 전자를 떼어 내는 데 필요한 에너지가 더 적어요.</p>",
      markscheme: [
        // EN: The outer electron is in a higher main energy level / is further from the nucleus (accept: atomic radius increases).
        "바깥 전자가 더 높은 주 에너지 준위에 있다 / 원자핵에서 더 멀다(인정: 원자 반지름이 커진다).",
        // EN: There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker (this outweighs the increase in nuclear charge).
        "안쪽 전자에 의한 가려막기가 더 커서, 원자핵과 바깥 전자 사이의 인력이 더 약하다(이 효과가 핵전하 증가보다 크다).",
      ],
    },

    // ── s1-3-q031 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q031": {
      // EN: <p>The first ionization energy of beryllium is 900 <span class="unit">kJ mol-1</span> and that of boron is 801 <span class="unit">kJ mol-1</span>, even though boron has the greater nuclear charge.</p><p>Explain why boron has the lower first ionization energy.</p>
      stem: "<p>베릴륨의 제1 이온화 에너지는 900 <span class=\"unit\">kJ mol-1</span>이고 붕소는 801 <span class=\"unit\">kJ mol-1</span>이에요. 붕소의 핵전하가 더 큰데도 그래요.</p><p>붕소의 제1 이온화 에너지가 더 작은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Write the electron configuration of each atom. Which sublevel does the outermost electron come from?
        "각 원자의 전자 배치를 써요. 가장 바깥 전자는 어느 부껍질에서 나오나요?",
        // EN: Base the explanation on the energy of the electron that is removed.
        "떼어 내는 전자의 에너지를 바탕으로 설명해요.",
      ],
      // EN: <p>Beryllium is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup></span>, so the electron removed comes from the 2s sublevel. Boron is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup></span>, so the electron removed comes from the 2p sublevel. The 2p sublevel is higher in energy than the 2s sublevel (the 2p electron is also shielded by the 2s electrons), so less energy is needed to remove it.</p>
      answer: "<p>베릴륨은 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup></span>이므로 떼어 내는 전자는 2s 부껍질에서 나와요. 붕소는 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup></span>이므로 떼어 내는 전자는 2p 부껍질에서 나와요. 2p 부껍질은 2s 부껍질보다 에너지가 높으므로(또 2p 전자는 2s 전자에 의해 가려막혀요), 전자를 떼어 내는 데 필요한 에너지가 더 적어요.</p>",
      markscheme: [
        // EN: The electron is removed from the 2p sublevel in B but from the 2s sublevel in Be (accept: configurations 1s² 2s² 2p¹ and 1s² 2s² used to show this).
        "B에서는 전자가 2p 부껍질에서, Be에서는 2s 부껍질에서 떨어져 나간다(인정: 전자 배치 1s² 2s² 2p¹과 1s² 2s²를 써서 이를 보인 경우).",
        // EN: The 2p sublevel is higher in energy than 2s / the 2p electron is further from the nucleus and shielded by the 2s electrons, so it is easier to remove.
        "2p 부껍질은 2s보다 에너지가 높다 / 2p 전자는 원자핵에서 더 멀고 2s 전자에 의해 가려막혀서, 떼어 내기가 더 쉽다.",
      ],
    },

    // ── s1-3-q032 · short · challenge · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q032": {
      // EN: <p>The first ionization energy of nitrogen is 1402 <span class="unit">kJ mol-1</span> and that of oxygen is 1314 <span class="unit">kJ mol-1</span>. In both atoms the electron is removed from the 2p sublevel, and oxygen has the greater nuclear charge.</p><p>Explain why oxygen has the lower first ionization energy.</p>
      stem: "<p>질소의 제1 이온화 에너지는 1402 <span class=\"unit\">kJ mol-1</span>이고 산소는 1314 <span class=\"unit\">kJ mol-1</span>이에요. 두 원자 모두 전자는 2p 부껍질에서 떨어져 나가고, 핵전하는 산소가 더 커요.</p><p>산소의 제1 이온화 에너지가 더 작은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Draw the three 2p boxes for each atom and fill them using Hund’s rule.
        "각 원자에 대해 2p 상자 세 개를 그리고, 훈트 규칙에 따라 채워 봐요.",
        // EN: What is different about the orbital that the electron leaves in oxygen?
        "산소에서 전자가 떠나는 오비탈은 무엇이 다른가요?",
        // EN: Do not write about a half-filled sublevel being "stable". Explain using repulsion and the energy of the electron removed.
        "반쯤 채워진 부껍질이 \"안정하다\"고 쓰지 마세요. 반발력과 떼어 내는 전자의 에너지를 이용해 설명해요.",
      ],
      // EN: <p>Nitrogen is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>: each 2p orbital holds one electron. Oxygen is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></span>: one 2p orbital holds two electrons. The electron removed from oxygen comes from this doubly occupied 2p orbital. The two electrons in the same orbital repel each other, which raises the energy of the electron, so less energy is needed to remove it.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagrams of the 2p sublevel. In nitrogen each of the three 2p boxes holds one up arrow. In oxygen the first 2p box holds an up and a down arrow and the other two hold one up arrow each."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M17 25V8M13 13L17 8L21 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M47 25V8M43 13L47 8L51 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="62" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M77 25V8M73 13L77 8L81 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="47" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p in N</text><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M118 25V8M114 13L118 8L122 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 7V24M124 19L128 24L132 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="153" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p in O</text></svg></p>
      answer: "<p>질소는 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></span>이에요: 2p 오비탈마다 전자가 하나씩 들어 있어요. 산소는 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></span>예요: 2p 오비탈 하나에 전자가 두 개 들어 있어요. 산소에서 떼어 내는 전자는 전자 두 개가 들어 있는 이 2p 오비탈에서 나와요. 같은 오비탈에 있는 두 전자는 서로 밀어내고, 이 반발력이 전자의 에너지를 높이므로, 전자를 떼어 내는 데 필요한 에너지가 더 적어요.</p><p><svg viewBox=\"0 0 200 56\" width=\"200\" height=\"56\" role=\"img\" aria-label=\"2p 부껍질의 오비탈 상자 그림. 질소는 2p 상자 세 개에 각각 위쪽 화살표가 하나씩 있어요. 산소는 첫 번째 2p 상자에 위쪽과 아래쪽 화살표가 하나씩 있고, 나머지 두 상자에는 위쪽 화살표가 하나씩 있어요.\"><rect x=\"2\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M17 25V8M13 13L17 8L21 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"32\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M47 25V8M43 13L47 8L51 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"62\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M77 25V8M73 13L77 8L81 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"47\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">N의 2p</text><rect x=\"108\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M118 25V8M114 13L118 8L122 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M128 7V24M124 19L128 24L132 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M153 25V8M149 13L153 8L157 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"168\" y=\"2\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M183 25V8M179 13L183 8L187 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"153\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">O의 2p</text></svg></p>",
      markscheme: [
        // EN: In O the electron is removed from a doubly occupied 2p orbital / a 2p orbital containing a pair of electrons (in N each 2p orbital is singly occupied).
        "O에서는 전자가 두 개 들어 있는 2p 오비탈 / 전자쌍이 들어 있는 2p 오비탈에서 떨어져 나간다(N에서는 2p 오비탈마다 전자가 하나씩 들어 있다).",
        // EN: Repulsion between the two electrons in the same orbital makes the electron easier to remove (accept: raises its energy).
        "같은 오비탈에 있는 두 전자 사이의 반발력 때문에 전자를 떼어 내기가 더 쉽다(인정: 전자의 에너지를 높인다).",
      ],
    },

    // ── s1-3-q033 · numeric · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q033": {
      // EN: <p>The red line in the visible emission spectrum of hydrogen has a wavelength of 656 nm.</p><p>Calculate the frequency of this light. Use c = 3.00 × 10<sup>8</sup> <span class="unit">m s-1</span> and give your answer to three significant figures.</p>
      stem: "<p>수소의 가시광선 방출 스펙트럼에서 빨간색 선의 파장은 656 nm예요.</p><p>이 빛의 진동수를 계산하시오 (calculate). c = 3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>을 이용하고, 답은 유효 숫자 3자리로 쓰세요.</p>",
      hints: [
        // EN: The data booklet gives c = λf. Rearrange it to make f the subject.
        "데이터 부클릿에 c = λf가 나와 있어요. 이 식을 f에 대해 정리해요.",
        // EN: Convert the wavelength to metres first: 1 nm = 1 × 10<sup>−9</sup> m.
        "먼저 파장을 미터로 바꿔요: 1 nm = 1 × 10<sup>−9</sup> m.",
      ],
      // EN: <p>Convert the wavelength to metres, then use c = λf.</p><div class="worked__math">λ = 656 nm<br>&nbsp;&nbsp;= 656 × 10<sup>−9</sup> m<br>&nbsp;&nbsp;= 6.56 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (6.56 × 10<sup>−7</sup> m)</div><div class="worked__math">f = 4.57 × 10<sup>14</sup> <span class="unit">s-1</span><br>&nbsp;&nbsp;= 4.57 × 10<sup>14</sup> Hz</div><p>If you leave the wavelength in nm you get 4.57 × 10<sup>5</sup>, which is too small by a factor of 10<sup>9</sup>.</p>
      solution: "<p>파장을 미터로 바꾼 다음 c = λf를 이용해요.</p><div class=\"worked__math\">λ = 656 nm<br>&nbsp;&nbsp;= 656 × 10<sup>−9</sup> m<br>&nbsp;&nbsp;= 6.56 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (6.56 × 10<sup>−7</sup> m)</div><div class=\"worked__math\">f = 4.57 × 10<sup>14</sup> <span class=\"unit\">s-1</span><br>&nbsp;&nbsp;= 4.57 × 10<sup>14</sup> Hz</div><p>파장을 nm 그대로 두면 4.57 × 10<sup>5</sup>이 나오는데, 이것은 10<sup>9</sup>배만큼 너무 작은 값이에요.</p>",
    },

    // ── s1-3-q034 · numeric · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q034": {
      // EN: <p>One line in the emission spectrum of hydrogen has a frequency of 6.17 × 10<sup>14</sup> Hz.</p><p>Calculate the energy of one photon of this light. Use h = 6.63 × 10<sup>−34</sup> J s and give your answer to three significant figures.</p>
      stem: "<p>수소의 방출 스펙트럼에 있는 한 선의 진동수는 6.17 × 10<sup>14</sup> Hz예요.</p><p>이 빛의 광자 하나의 에너지를 계산하시오 (calculate). h = 6.63 × 10<sup>−34</sup> J s를 이용하고, 답은 유효 숫자 3자리로 쓰세요.</p>",
      hints: [
        // EN: The data booklet gives E = hf.
        "데이터 부클릿에 E = hf가 나와 있어요.",
        // EN: Multiply the two numbers. Add the powers of ten: −34 + 14.
        "두 수를 곱해요. 10의 거듭제곱 지수는 더해요: −34 + 14.",
      ],
      // EN: <div class="worked__math">E = hf</div><div class="worked__math">E = (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (6.17 × 10<sup>14</sup> <span class="unit">s-1</span>)</div><div class="worked__math">E = 4.09 × 10<sup>−19</sup> J</div><p>This is the energy of <em>one</em> photon, so it is the energy change of one atom. It is a very small number of joules.</p>
      solution: "<div class=\"worked__math\">E = hf</div><div class=\"worked__math\">E = (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (6.17 × 10<sup>14</sup> <span class=\"unit\">s-1</span>)</div><div class=\"worked__math\">E = 4.09 × 10<sup>−19</sup> J</div><p>이것은 광자 <em>하나</em>의 에너지이므로, 원자 하나의 에너지 변화예요. 줄(J)로 나타내면 아주 작은 수예요.</p>",
    },

    // ── s1-3-q035 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q035": {
      // EN: <p>In the emission spectrum of hydrogen, the lines produced by electrons falling to n = 1 converge at a wavelength of 91.2 nm.</p><p>Calculate the first ionization energy of hydrogen, in <span class="unit">kJ mol-1</span>. Use the data booklet values of h, c and the Avogadro constant.</p>
      stem: "<p>수소의 방출 스펙트럼에서 n = 1로 떨어지는 전자가 만드는 선들은 파장 91.2 nm에서 수렴해요.</p><p>수소의 제1 이온화 에너지를 <span class=\"unit\">kJ mol-1</span> 단위로 계산하시오 (calculate). 데이터 부클릿에 있는 h, c, 아보가드로 상수 값을 이용하세요.</p>",
      hints: [
        // EN: Three steps: wavelength → frequency (c = λf), frequency → energy of one photon (E = hf), energy for one atom → energy for one mole.
        "3단계예요: 파장 → 진동수(c = λf), 진동수 → 광자 하나의 에너지(E = hf), 원자 하나의 에너지 → 1몰의 에너지.",
        // EN: Convert 91.2 nm to metres before you start.
        "시작하기 전에 91.2 nm를 미터로 바꿔요.",
        // EN: To go from J per atom to <span class="unit">kJ mol-1</span>, multiply by 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> and divide by 1000.
        "원자 하나당 J에서 <span class=\"unit\">kJ mol-1</span>로 바꾸려면 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span>을 곱하고 1000으로 나눠요.",
      ],
      // EN: <p>The convergence limit corresponds to ionization, so the photon at 91.2 nm has the energy needed to ionize one atom.</p><div class="worked__math">λ = 91.2 nm = 9.12 × 10<sup>−8</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (9.12 × 10<sup>−8</sup> m)<br>&nbsp;&nbsp;= 3.289 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (3.289 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 2.181 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">for one mole: 2.181 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 1.313 × 10<sup>6</sup> <span class="unit">J mol-1</span></div><div class="worked__math">IE = 1.313 × 10<sup>6</sup> <span class="unit">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 1313 <span class="unit">kJ mol-1</span> ≈ 1310 <span class="unit">kJ mol-1</span></div><p>Check: the data booklet value for hydrogen is 1312 <span class="unit">kJ mol-1</span>. Common slips: leaving the wavelength in nm, stopping at the energy of one atom (2.18 × 10<sup>−18</sup> J), and forgetting to divide by 1000.</p>
      solution: "<p>수렴 한계는 이온화에 해당하므로, 91.2 nm의 광자는 원자 하나를 이온화하는 데 필요한 에너지를 가져요.</p><div class=\"worked__math\">λ = 91.2 nm = 9.12 × 10<sup>−8</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (9.12 × 10<sup>−8</sup> m)<br>&nbsp;&nbsp;= 3.289 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (3.289 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 2.181 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(원자 하나당)</div><div class=\"worked__math\">한 몰당: 2.181 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 1.313 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">IE = 1.313 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 1313 <span class=\"unit\">kJ mol-1</span> ≈ 1310 <span class=\"unit\">kJ mol-1</span></div><p>확인: 데이터 부클릿에 나온 수소의 값은 1312 <span class=\"unit\">kJ mol-1</span>이에요. 흔한 실수: 파장을 nm 그대로 두는 것, 원자 하나의 에너지(2.18 × 10<sup>−18</sup> J)에서 멈추는 것, 1000으로 나누는 것을 잊는 것.</p>",
      // EN: 1310 (or 1313)
      answerDisplay: "1310 (또는 1313)",
    },

    // ── s1-3-q036 · numeric · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q036": {
      // EN: <p>In the emission spectrum of helium atoms, the lines produced by electrons falling to the lowest energy level converge at a frequency of 5.94 × 10<sup>15</sup> Hz.</p><p>Calculate the first ionization energy of helium, in <span class="unit">kJ mol-1</span>.</p>
      stem: "<p>헬륨 원자의 방출 스펙트럼에서 가장 낮은 에너지 준위로 떨어지는 전자가 만드는 선들은 진동수 5.94 × 10<sup>15</sup> Hz에서 수렴해요.</p><p>헬륨의 제1 이온화 에너지를 <span class=\"unit\">kJ mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: You already have the frequency, so go straight to E = hf.
        "진동수가 이미 주어졌으니 바로 E = hf로 가요.",
        // EN: E = hf gives the energy for one atom in joules. The answer must be for one mole, in kilojoules.
        "E = hf로 구한 값은 원자 하나의 에너지이고 단위는 줄이에요. 답은 1몰에 대한 값이어야 하고 단위는 킬로줄이에요.",
      ],
      // EN: <div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (5.94 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 3.938 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">for one mole: 3.938 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 2.371 × 10<sup>6</sup> <span class="unit">J mol-1</span></div><div class="worked__math">IE = 2.371 × 10<sup>6</sup> <span class="unit">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 2371 <span class="unit">kJ mol-1</span> ≈ 2370 <span class="unit">kJ mol-1</span></div><p>This is the highest first ionization energy of any element. The data booklet value is 2372 <span class="unit">kJ mol-1</span>.</p>
      solution: "<div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (5.94 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 3.938 × 10<sup>−18</sup> J<br>&nbsp;&nbsp;(원자 하나당)</div><div class=\"worked__math\">한 몰당: 3.938 × 10<sup>−18</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 2.371 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">IE = 2.371 × 10<sup>6</sup> <span class=\"unit\">J mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 2371 <span class=\"unit\">kJ mol-1</span> ≈ 2370 <span class=\"unit\">kJ mol-1</span></div><p>이것은 모든 원소 중에서 가장 큰 제1 이온화 에너지예요. 데이터 부클릿 값은 2372 <span class=\"unit\">kJ mol-1</span>이에요.</p>",
    },

    // ── s1-3-q037 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q037": {
      // EN: <p>The first ionization energy of sodium is 496 <span class="unit">kJ mol-1</span>.</p><p>Calculate the wavelength, in nm, of the convergence limit that corresponds to the ionization of a gaseous sodium atom. Give your answer to three significant figures.</p>
      stem: "<p>나트륨의 제1 이온화 에너지는 496 <span class=\"unit\">kJ mol-1</span>이에요.</p><p>기체 나트륨 원자의 이온화에 해당하는 수렴 한계의 파장을 nm 단위로 계산하시오 (calculate). 답은 유효 숫자 3자리로 쓰세요.</p>",
      hints: [
        // EN: This is the usual calculation in reverse. First find the energy needed to ionize <em>one</em> atom, in joules.
        "평소 계산을 거꾸로 하는 거예요. 먼저 원자 <em>하나</em>를 이온화하는 데 필요한 에너지를 줄 단위로 구해요.",
        // EN: kJ → J: multiply by 1000. One mole → one atom: divide by 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span>.
        "kJ → J: 1000을 곱해요. 1몰 → 원자 하나: 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span>로 나눠요.",
        // EN: Then f = E ÷ h, and λ = c ÷ f. Convert metres to nm at the end.
        "그다음 f = E ÷ h, λ = c ÷ f를 이용해요. 마지막에 미터를 nm로 바꿔요.",
      ],
      // EN: <p>Work backwards: energy per mole → energy per atom → frequency → wavelength.</p><div class="worked__math">IE = 496 <span class="unit">kJ mol-1</span><br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class="unit">J mol-1</span></div><div class="worked__math">for one atom: E<br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class="unit">J mol-1</span> ÷ 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 8.239 × 10<sup>−19</sup> J</div><div class="worked__math">f = E ÷ h<br>&nbsp;&nbsp;= (8.239 × 10<sup>−19</sup> J)<br>&nbsp;&nbsp;÷ (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;= 1.243 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">λ = c ÷ f<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (1.243 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 2.41 × 10<sup>−7</sup> m</div><div class="worked__math">λ = 2.41 × 10<sup>−7</sup> m × 10<sup>9</sup> <span class="unit">nm m-1</span><br>&nbsp;&nbsp;= 241 nm</div><p>241 nm is in the ultraviolet region. If you forget to change kJ to J, you get a wavelength 1000 times too long.</p>
      solution: "<p>거꾸로 계산해요: 몰당 에너지 → 원자 하나당 에너지 → 진동수 → 파장.</p><div class=\"worked__math\">IE = 496 <span class=\"unit\">kJ mol-1</span><br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span></div><div class=\"worked__math\">원자 하나당: E<br>&nbsp;&nbsp;= 4.96 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span> ÷ 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 8.239 × 10<sup>−19</sup> J</div><div class=\"worked__math\">f = E ÷ h<br>&nbsp;&nbsp;= (8.239 × 10<sup>−19</sup> J)<br>&nbsp;&nbsp;÷ (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;= 1.243 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">λ = c ÷ f<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (1.243 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 2.41 × 10<sup>−7</sup> m</div><div class=\"worked__math\">λ = 2.41 × 10<sup>−7</sup> m × 10<sup>9</sup> <span class=\"unit\">nm m-1</span><br>&nbsp;&nbsp;= 241 nm</div><p>241 nm는 자외선 영역이에요. kJ를 J로 바꾸는 것을 잊으면 파장이 1000배 너무 길게 나와요.</p>",
    },

    // ── s1-3-q038 · mcq · challenge · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q038": {
      // EN: <p>Ultraviolet radiation of wavelength 200 nm shines on separate samples of gaseous sodium atoms and gaseous magnesium atoms. The first ionization energies are Na 496 <span class="unit">kJ mol-1</span> and Mg 738 <span class="unit">kJ mol-1</span>.</p><p>For which atoms does one photon of this radiation have enough energy to remove an electron from an atom in its ground state?</p>
      stem: "<p>파장이 200 nm인 자외선을 기체 나트륨 원자 시료와 기체 마그네슘 원자 시료에 각각 쪼여요. 제1 이온화 에너지는 Na 496 <span class=\"unit\">kJ mol-1</span>, Mg 738 <span class=\"unit\">kJ mol-1</span>이에요.</p><p>이 복사의 광자 하나가 바닥상태 원자에서 전자 하나를 떼어 낼 만큼 충분한 에너지를 가지는 것은 어느 원자인가요?</p>",
      options: [
        // EN: Both sodium and magnesium
        "나트륨과 마그네슘 모두",
        // EN: Sodium only
        "나트륨만",
        // EN: Magnesium only
        "마그네슘만",
        // EN: Neither sodium nor magnesium
        "나트륨도 마그네슘도 아님",
      ],
      hints: [
        // EN: Find the energy of one photon with f = c ÷ λ and E = hf.
        "f = c ÷ λ와 E = hf를 이용해 광자 하나의 에너지를 구해요.",
        // EN: Convert to <span class="unit">kJ mol-1</span> so that you can compare it with the two ionization energies.
        "두 이온화 에너지와 비교할 수 있도록 <span class=\"unit\">kJ mol-1</span>로 바꿔요.",
      ],
      // EN: <div class="worked__math">λ = 200 nm = 2.00 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (2.00 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 1.50 × 10<sup>15</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (1.50 × 10<sup>15</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 9.945 × 10<sup>−19</sup> J &nbsp; (one photon)</div><div class="worked__math">per mole: 9.945 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 599 <span class="unit">kJ mol-1</span></div><p>599 <span class="unit">kJ mol-1</span> is more than 496 <span class="unit">kJ mol-1</span> (Na) but less than 738 <span class="unit">kJ mol-1</span> (Mg). So a photon has enough energy to ionize a sodium atom but not a magnesium atom.</p>
      solution: "<div class=\"worked__math\">λ = 200 nm = 2.00 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (2.00 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 1.50 × 10<sup>15</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (1.50 × 10<sup>15</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 9.945 × 10<sup>−19</sup> J &nbsp; (광자 하나)</div><div class=\"worked__math\">몰당: 9.945 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 599 <span class=\"unit\">kJ mol-1</span></div><p>599 <span class=\"unit\">kJ mol-1</span>은 496 <span class=\"unit\">kJ mol-1</span>(Na)보다 크지만 738 <span class=\"unit\">kJ mol-1</span>(Mg)보다 작아요. 따라서 광자 하나는 나트륨 원자를 이온화할 에너지는 있지만, 마그네슘 원자를 이온화할 에너지는 없어요.</p>",
      misconception: {
        // EN (option A): The energy of one mole of these photons is 5.99 × 10<sup>5</sup> <span class="unit">J mol-1</span>. That looks larger than 738, but the units are different. Convert it to <span class="unit">kJ mol-1</span> before comparing.
        "0": "이 광자 1몰의 에너지는 5.99 × 10<sup>5</sup> <span class=\"unit\">J mol-1</span>이에요. 738보다 커 보이지만 단위가 달라요. 비교하기 전에 <span class=\"unit\">kJ mol-1</span>로 바꿔요.",
        // EN (option C): A photon needs <em>at least</em> the ionization energy. The atom with the lower ionization energy is the one that is easier to ionize.
        "2": "광자는 <em>적어도</em> 이온화 에너지만큼의 에너지가 있어야 해요. 이온화 에너지가 더 작은 원자가 이온화되기 더 쉬워요.",
        // EN (option D): The energy of one photon is about 10<sup>−18</sup> J, which looks tiny next to 496. But 496 <span class="unit">kJ mol-1</span> is for a mole of atoms. Multiply the photon energy by the Avogadro constant before comparing.
        "3": "광자 하나의 에너지는 약 10<sup>−18</sup> J로, 496에 비하면 아주 작아 보여요. 하지만 496 <span class=\"unit\">kJ mol-1</span>은 원자 1몰에 대한 값이에요. 비교하기 전에 광자 에너지에 아보가드로 상수를 곱해요.",
      },
    },

    // ── s1-3-q039 · numeric · challenge · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q039": {
      // EN: <p>In the emission spectrum of hydrogen, the lines in and near the visible region are produced by electrons falling to n = 2. These lines converge at a wavelength of 365 nm.</p><p>Calculate the energy, in <span class="unit">kJ mol-1</span>, needed to remove an electron from the n = 2 level of a hydrogen atom. Give your answer to three significant figures.</p>
      stem: "<p>수소의 방출 스펙트럼에서 가시광선 영역과 그 근처에 있는 선들은 n = 2로 떨어지는 전자가 만들어요. 이 선들은 파장 365 nm에서 수렴해요.</p><p>수소 원자의 n = 2 준위에서 전자 하나를 떼어 내는 데 필요한 에너지를 <span class=\"unit\">kJ mol-1</span> 단위로 계산하시오 (calculate). 답은 유효 숫자 3자리로 쓰세요.</p>",
      hints: [
        // EN: The method is the same as for a first ionization energy: the convergence limit of a set of lines corresponds to removing the electron from the level where those lines end.
        "방법은 제1 이온화 에너지를 구할 때와 같아요: 한 선 계열의 수렴 한계는 그 선들이 끝나는 준위에서 전자를 떼어 내는 것에 해당해요.",
        // EN: λ → f with c = λf, then E = hf, then scale from one atom to one mole and from J to kJ.
        "c = λf로 λ → f, 그다음 E = hf, 그다음 원자 하나에서 1몰로, J에서 kJ로 바꿔요.",
      ],
      // EN: <p>This convergence limit corresponds to an electron moving between n = 2 and n = ∞.</p><div class="worked__math">λ = 365 nm = 3.65 × 10<sup>−7</sup> m</div><div class="worked__math">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class="unit">m s-1</span>)<br>&nbsp;&nbsp;÷ (3.65 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 8.219 × 10<sup>14</sup> <span class="unit">s-1</span></div><div class="worked__math">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (8.219 × 10<sup>14</sup> <span class="unit">s-1</span>)<br>&nbsp;&nbsp;= 5.449 × 10<sup>−19</sup> J<br>&nbsp;&nbsp;(for one atom)</div><div class="worked__math">per mole: 5.449 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 328 <span class="unit">kJ mol-1</span></div><p>This is much less than the first ionization energy of hydrogen (1312 <span class="unit">kJ mol-1</span>). The first ionization energy is for an atom in its ground state, with the electron in n = 1. An electron already in n = 2 is higher in energy, so less energy is needed to remove it. To find a first ionization energy you must use the convergence limit of the lines that end on the ground state.</p>
      solution: "<p>이 수렴 한계는 전자가 n = 2와 n = ∞ 사이를 이동하는 것에 해당해요.</p><div class=\"worked__math\">λ = 365 nm = 3.65 × 10<sup>−7</sup> m</div><div class=\"worked__math\">f = c ÷ λ<br>&nbsp;&nbsp;= (3.00 × 10<sup>8</sup> <span class=\"unit\">m s-1</span>)<br>&nbsp;&nbsp;÷ (3.65 × 10<sup>−7</sup> m)<br>&nbsp;&nbsp;= 8.219 × 10<sup>14</sup> <span class=\"unit\">s-1</span></div><div class=\"worked__math\">E = hf<br>&nbsp;&nbsp;= (6.63 × 10<sup>−34</sup> J s)<br>&nbsp;&nbsp;× (8.219 × 10<sup>14</sup> <span class=\"unit\">s-1</span>)<br>&nbsp;&nbsp;= 5.449 × 10<sup>−19</sup> J<br>&nbsp;&nbsp;(원자 하나당)</div><div class=\"worked__math\">몰당: 5.449 × 10<sup>−19</sup> J × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> ÷ 1000<br>&nbsp;&nbsp;= 328 <span class=\"unit\">kJ mol-1</span></div><p>이 값은 수소의 제1 이온화 에너지(1312 <span class=\"unit\">kJ mol-1</span>)보다 훨씬 작아요. 제1 이온화 에너지는 전자가 n = 1에 있는 바닥상태 원자에 대한 값이에요. 이미 n = 2에 있는 전자는 에너지가 더 높으므로, 떼어 내는 데 필요한 에너지가 더 적어요. 제1 이온화 에너지를 구하려면 바닥상태에서 끝나는 선들의 수렴 한계를 이용해야 해요.</p>",
    },

    // ── s1-3-q040 · short · challenge · AHL · Structure 1.3.6 · 3 marks
    "s1-3-q040": {
      // EN: <p>The table shows the first ionization energies of the period 3 elements.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>First ionization energy / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col">Element</th><th class="num" scope="col">Na</th><th class="num" scope="col">Mg</th><th class="num" scope="col">Al</th><th class="num" scope="col">Si</th><th class="num" scope="col">P</th><th class="num" scope="col">S</th><th class="num" scope="col">Cl</th><th class="num" scope="col">Ar</th></tr></thead><tbody><tr><th scope="row">First IE</th><td class="num">496</td><td class="num">738</td><td class="num">578</td><td class="num">787</td><td class="num">1012</td><td class="num">1000</td><td class="num">1251</td><td class="num">1520</td></tr></tbody></table></div><p>The values do not rise steadily. Use the data to explain how the two decreases are evidence that the third main energy level is divided into sublevels.</p>
      stem: "<p>표는 3주기 원소들의 제1 이온화 에너지를 나타낸 거예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>제1 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\">원소</th><th class=\"num\" scope=\"col\">Na</th><th class=\"num\" scope=\"col\">Mg</th><th class=\"num\" scope=\"col\">Al</th><th class=\"num\" scope=\"col\">Si</th><th class=\"num\" scope=\"col\">P</th><th class=\"num\" scope=\"col\">S</th><th class=\"num\" scope=\"col\">Cl</th><th class=\"num\" scope=\"col\">Ar</th></tr></thead><tbody><tr><th scope=\"row\">제1 IE</th><td class=\"num\">496</td><td class=\"num\">738</td><td class=\"num\">578</td><td class=\"num\">787</td><td class=\"num\">1012</td><td class=\"num\">1000</td><td class=\"num\">1251</td><td class=\"num\">1520</td></tr></tbody></table></div><p>값이 꾸준히 커지지는 않아요. 자료를 이용하여, 두 번의 감소가 세 번째 주 에너지 준위가 부껍질로 나뉘어 있다는 증거가 되는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Find the two places where the value goes down, not up.
        "값이 커지지 않고 작아지는 곳 두 군데를 찾아요.",
        // EN: For each one, write the configurations of the two elements and ask which electron is removed.
        "각각에 대해 두 원소의 전자 배치를 쓰고, 어느 전자가 떨어져 나가는지 생각해 봐요.",
        // EN: Finish by saying what the pattern would look like if there were no sublevels.
        "마지막으로, 부껍질이 없다면 경향이 어떻게 보일지 써서 마무리해요.",
      ],
      // EN: <p>If all the n = 3 electrons had the same energy, the first ionization energy would rise steadily across the period as the nuclear charge increases. It does not.</p><p>The value falls from Mg (738) to Al (578). In Mg the electron is removed from the 3s sublevel, but in Al it is removed from the 3p sublevel. The 3p sublevel is higher in energy than 3s, so the electron is easier to remove. This shows that n = 3 contains sublevels of different energy.</p><p>The value falls from P (1012) to S (1000). In P each 3p orbital holds one electron. In S the electron is removed from a 3p orbital that holds two electrons. Repulsion between the paired electrons makes it easier to remove. This shows that the 3p sublevel is made of orbitals that fill singly before they pair.</p>
      answer: "<p>n = 3의 전자가 모두 같은 에너지를 가진다면, 주기를 따라 핵전하가 커지면서 제1 이온화 에너지도 꾸준히 커질 거예요. 하지만 실제로는 그렇지 않아요.</p><p>값이 Mg(738)에서 Al(578)로 작아져요. Mg에서는 전자가 3s 부껍질에서 떨어져 나가지만, Al에서는 3p 부껍질에서 떨어져 나가요. 3p 부껍질은 3s보다 에너지가 높으므로 전자를 떼어 내기가 더 쉬워요. 이것은 n = 3에 에너지가 서로 다른 부껍질이 있다는 것을 보여 줘요.</p><p>값이 P(1012)에서 S(1000)로 작아져요. P에서는 3p 오비탈마다 전자가 하나씩 들어 있어요. S에서는 전자 두 개가 들어 있는 3p 오비탈에서 전자가 떨어져 나가요. 짝을 이룬 전자 사이의 반발력 때문에 떼어 내기가 더 쉬워요. 이것은 3p 부껍질이 여러 오비탈로 이루어져 있고, 이 오비탈들이 짝을 짓기 전에 하나씩 먼저 채워진다는 것을 보여 줘요.</p>",
      markscheme: [
        // EN: Mg to Al decrease: the electron is removed from the 3p sublevel in Al but from 3s in Mg, and 3p is higher in energy than 3s (so n = 3 is split into sublevels of different energy).
        "Mg에서 Al로의 감소: Al에서는 전자가 3p 부껍질에서, Mg에서는 3s에서 떨어져 나가며, 3p는 3s보다 에너지가 높다(따라서 n = 3은 에너지가 다른 부껍질로 나뉘어 있다).",
        // EN: P to S decrease: the electron in S is removed from a doubly occupied 3p orbital, and repulsion between the paired electrons makes it easier to remove (in P the 3p orbitals are singly occupied).
        "P에서 S로의 감소: S에서는 전자 두 개가 들어 있는 3p 오비탈에서 전자가 떨어져 나가며, 짝을 이룬 전자 사이의 반발력 때문에 떼어 내기가 더 쉽다(P에서는 3p 오비탈마다 전자가 하나씩 들어 있다).",
        // EN: Link to evidence: with a single undivided energy level the ionization energy would increase steadily with nuclear charge / the decreases come after the 3s sublevel is full and after each 3p orbital holds one electron, which matches the s and p sublevels.
        "증거와 연결: 나뉘지 않은 하나의 에너지 준위라면 이온화 에너지는 핵전하에 따라 꾸준히 커질 것이다 / 감소는 3s 부껍질이 다 찬 뒤와 3p 오비탈마다 전자가 하나씩 들어간 뒤에 나타나며, 이는 s와 p 부껍질과 들어맞는다.",
      ],
    },

    // ── s1-3-q041 · numeric · foundation · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q041": {
      // EN: <p>The table shows the first four successive ionization energies of an element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">590</td><td class="num">1145</td><td class="num">4912</td><td class="num">6491</td></tr></tbody></table></div><p>In which group of the periodic table is the element? Type the group number.</p>
      stem: "<p>표는 어떤 원소의 처음 네 개의 순차 이온화 에너지를 나타낸 거예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>순차 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">제1</th><th class=\"num\" scope=\"col\">제2</th><th class=\"num\" scope=\"col\">제3</th><th class=\"num\" scope=\"col\">제4</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">590</td><td class=\"num\">1145</td><td class=\"num\">4912</td><td class=\"num\">6491</td></tr></tbody></table></div><p>이 원소는 주기율표의 몇 족에 있나요? 족 번호를 입력하세요.</p>",
      hints: [
        // EN: Look for the place where the ionization energy suddenly becomes several times larger.
        "이온화 에너지가 갑자기 몇 배로 커지는 곳을 찾아요.",
        // EN: The number of electrons removed <em>before</em> the large jump is the number of outer electrons.
        "큰 증가가 일어나기 <em>전에</em> 떼어 낸 전자의 수가 바깥 전자의 수예요.",
      ],
      // EN: <p>Compare each value with the one before it.</p><div class="worked__math">1st → 2nd: 590 → 1145<br>&nbsp;&nbsp;(about 2 times)</div><div class="worked__math">2nd → 3rd: 1145 → 4912<br>&nbsp;&nbsp;(about 4 times: the large jump)</div><div class="worked__math">3rd → 4th: 4912 → 6491<br>&nbsp;&nbsp;(about 1.3 times)</div><p>Two electrons are removed before the large jump, so the atom has two outer electrons. The third electron comes from a main energy level closer to the nucleus. The element is in <strong>group 2</strong>. (These are the values for calcium.)</p>
      solution: "<p>각 값을 바로 앞의 값과 비교해요.</p><div class=\"worked__math\">제1 → 제2: 590 → 1145<br>&nbsp;&nbsp;(약 2배)</div><div class=\"worked__math\">제2 → 제3: 1145 → 4912<br>&nbsp;&nbsp;(약 4배: 큰 증가)</div><div class=\"worked__math\">제3 → 제4: 4912 → 6491<br>&nbsp;&nbsp;(약 1.3배)</div><p>큰 증가 전에 전자 두 개를 떼어 내므로, 이 원자의 바깥 전자는 두 개예요. 세 번째 전자는 원자핵에 더 가까운 주 에너지 준위에서 나와요. 이 원소는 <strong>2족</strong>에 있어요. (이 값들은 칼슘의 값이에요.)</p>",
    },

    // ── s1-3-q042 · mcq · exam · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q042": {
      // EN: <p>The table shows the first six successive ionization energies of an element in period 3.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">787</td><td class="num">1577</td><td class="num">3232</td><td class="num">4356</td><td class="num">16 091</td><td class="num">19 805</td></tr></tbody></table></div><p>Which element is it?</p>
      stem: "<p>표는 3주기에 있는 어떤 원소의 처음 여섯 개의 순차 이온화 에너지를 나타낸 거예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>순차 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">제1</th><th class=\"num\" scope=\"col\">제2</th><th class=\"num\" scope=\"col\">제3</th><th class=\"num\" scope=\"col\">제4</th><th class=\"num\" scope=\"col\">제5</th><th class=\"num\" scope=\"col\">제6</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">787</td><td class=\"num\">1577</td><td class=\"num\">3232</td><td class=\"num\">4356</td><td class=\"num\">16 091</td><td class=\"num\">19 805</td></tr></tbody></table></div><p>이 원소는 무엇인가요?</p>",
      options: [
        // EN: Aluminium
        "알루미늄",
        // EN: Silicon
        "규소",
        // EN: Phosphorus
        "인",
        // EN: Sulfur
        "황",
      ],
      hints: [
        // EN: Find the largest jump between two neighbouring values.
        "이웃한 두 값 사이에서 가장 크게 증가하는 곳을 찾아요.",
        // EN: Count the electrons removed before that jump. That is the number of outer electrons.
        "그 증가 전에 떼어 낸 전자의 수를 세어요. 그것이 바깥 전자의 수예요.",
      ],
      // EN: <p>The values rise gradually up to the 4th (4356), then jump to 16 091 for the 5th. That is about 3.7 times larger. Four electrons are removed before the jump, so the atom has four outer electrons and is in group 14. The group 14 element in period 3 is <strong>silicon</strong>, <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span>. The 5th electron has to come from the n = 2 level.</p>
      solution: "<p>값은 제4 이온화 에너지(4356)까지 서서히 커지다가, 제5 이온화 에너지에서 16 091로 크게 증가해요. 약 3.7배 커진 거예요. 큰 증가 전에 전자 네 개를 떼어 내므로, 이 원자의 바깥 전자는 네 개이고 14족에 있어요. 3주기의 14족 원소는 <strong>규소</strong> <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span>예요. 5번째 전자는 n = 2 준위에서 나와야 해요.</p>",
      misconception: {
        // EN (option A): Aluminium is in group 13, so its large jump comes after the 3rd electron. Here the 4th value (4356) is not much larger than the 3rd (3232).
        "0": "알루미늄은 13족이므로 3번째 전자 다음에 큰 증가가 나타나요. 여기서는 제4 값(4356)이 제3 값(3232)보다 그다지 크지 않아요.",
        // EN (option C): This counts the electron <em>after</em> the jump as an outer electron. The 5th electron is the first one taken from the inner level. Phosphorus would have its large jump after the 5th electron.
        "2": "이것은 큰 증가 <em>다음의</em> 전자를 바깥 전자로 센 거예요. 5번째 전자는 안쪽 준위에서 처음으로 떼어 낸 전자예요. 인이라면 5번째 전자 다음에 큰 증가가 나타날 거예요.",
        // EN (option D): Sulfur has six outer electrons, so all six of these values would rise gradually with no large jump.
        "3": "황은 바깥 전자가 여섯 개이므로, 이 여섯 값은 모두 큰 증가 없이 서서히 커질 거예요.",
      },
    },

    // ── s1-3-q043 · mcq · challenge · AHL · Structure 1.3.7 · 2 marks
    "s1-3-q043": {
      // EN: <p>The table shows successive ionization energies of two elements, X and Y. Both are in period 3.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th><th class="num" scope="col">5th</th><th class="num" scope="col">6th</th><th class="num" scope="col">7th</th><th class="num" scope="col">8th</th></tr></thead><tbody><tr><th scope="row">X</th><td class="num">738</td><td class="num">1451</td><td class="num">7733</td><td class="num">10 543</td><td class="num">13 630</td><td class="num">18 020</td><td class="num">21 711</td><td class="num">25 661</td></tr><tr><th scope="row">Y</th><td class="num">1251</td><td class="num">2298</td><td class="num">3822</td><td class="num">5159</td><td class="num">6542</td><td class="num">9362</td><td class="num">11 018</td><td class="num">33 604</td></tr></tbody></table></div><p>X and Y form an ionic compound. What is its formula?</p>
      stem: "<p>표는 두 원소 X와 Y의 순차 이온화 에너지를 나타낸 거예요. 둘 다 3주기 원소예요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>순차 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">제1</th><th class=\"num\" scope=\"col\">제2</th><th class=\"num\" scope=\"col\">제3</th><th class=\"num\" scope=\"col\">제4</th><th class=\"num\" scope=\"col\">제5</th><th class=\"num\" scope=\"col\">제6</th><th class=\"num\" scope=\"col\">제7</th><th class=\"num\" scope=\"col\">제8</th></tr></thead><tbody><tr><th scope=\"row\">X</th><td class=\"num\">738</td><td class=\"num\">1451</td><td class=\"num\">7733</td><td class=\"num\">10 543</td><td class=\"num\">13 630</td><td class=\"num\">18 020</td><td class=\"num\">21 711</td><td class=\"num\">25 661</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">1251</td><td class=\"num\">2298</td><td class=\"num\">3822</td><td class=\"num\">5159</td><td class=\"num\">6542</td><td class=\"num\">9362</td><td class=\"num\">11 018</td><td class=\"num\">33 604</td></tr></tbody></table></div><p>X와 Y는 이온 결합 화합물을 만들어요. 이 화합물의 화학식은 무엇인가요?</p>",
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
        "각 원소에서 큰 증가를 찾아 바깥 전자의 수를 구해요.",
        // EN: X is a metal and Y is a non-metal. What charge does each ion have?
        "X는 금속이고 Y는 비금속이에요. 각 이온의 전하는 얼마인가요?",
        // EN: Balance the charges.
        "전하를 맞춰요.",
      ],
      // EN: <p><strong>X:</strong> the large jump is between the 2nd (1451) and 3rd (7733) values. X has two outer electrons, so it is in group 2 and forms X<sup>2+</sup>.</p><p><strong>Y:</strong> the values rise gradually until the large jump between the 7th (11 018) and 8th (33 604). Y has seven outer electrons, so it is in group 17 and gains one electron to form Y<sup>−</sup>.</p><p>One X<sup>2+</sup> ion needs two Y<sup>−</sup> ions, so the formula is XY<sub>2</sub>. (X is magnesium and Y is chlorine: <span class="chem">MgCl2</span>.)</p>
      solution: "<p><strong>X:</strong> 큰 증가는 제2 값(1451)과 제3 값(7733) 사이에 있어요. X는 바깥 전자가 두 개이므로 2족이고, X<sup>2+</sup>가 돼요.</p><p><strong>Y:</strong> 값이 서서히 커지다가 제7 값(11 018)과 제8 값(33 604) 사이에서 크게 증가해요. Y는 바깥 전자가 일곱 개이므로 17족이고, 전자 하나를 얻어 Y<sup>−</sup>이 돼요.</p><p>X<sup>2+</sup> 이온 하나에는 Y<sup>−</sup> 이온 두 개가 필요하므로, 화학식은 XY<sub>2</sub>예요. (X는 마그네슘이고 Y는 염소예요: <span class=\"chem\">MgCl2</span>.)</p>",
      misconception: {
        // EN (option A): A 1 : 1 formula needs charges of equal size. X has two outer electrons and forms a 2+ ion. Y has seven outer electrons and gains one electron to form a 1− ion.
        "0": "1 : 1 화학식이 되려면 두 전하의 크기가 같아야 해요. X는 바깥 전자가 두 개이고 2+ 이온이 돼요. Y는 바깥 전자가 일곱 개이고 전자 하나를 얻어 1− 이온이 돼요.",
        // EN (option C): The ratio is the wrong way round. X forms X<sup>2+</sup> and Y forms Y<sup>−</sup>, so two Y ions are needed for each X ion.
        "2": "비가 거꾸로 되었어요. X는 X<sup>2+</sup>가 되고 Y는 Y<sup>−</sup>이 되므로, X 이온 하나마다 Y 이온 두 개가 필요해요.",
        // EN (option D): This uses the numbers of outer electrons (2 and 7) as if they were the ion charges. Y does not lose seven electrons. It gains one to complete its outer level.
        "3": "이것은 바깥 전자의 수(2와 7)를 이온의 전하처럼 썼어요. Y는 전자 일곱 개를 잃지 않아요. 바깥 준위를 채우기 위해 전자 하나를 얻어요.",
      },
    },

    // ── s1-3-q044 · short · exam · AHL · Structure 1.3.7 · 3 marks
    "s1-3-q044": {
      // EN: <p>The first four successive ionization energies of aluminium (Z = 13) are 578, 1817, 2745 and 11 577 <span class="unit">kJ mol-1</span>.</p><p>(a) Explain why the second ionization energy is greater than the first. [1]</p><p>(b) Explain why the fourth ionization energy is very much greater than the third. [2]</p>
      stem: "<p>알루미늄(Z = 13)의 처음 네 개의 순차 이온화 에너지는 578, 1817, 2745, 11 577 <span class=\"unit\">kJ mol-1</span>이에요.</p><p>(a) 제2 이온화 에너지가 제1 이온화 에너지보다 큰 이유를 설명하시오 (explain). [1]</p><p>(b) 제4 이온화 에너지가 제3 이온화 에너지보다 훨씬 더 큰 이유를 설명하시오 (explain). [2]</p>",
      hints: [
        // EN: For (a): after one electron has gone, what is the particle that the next electron leaves?
        "(a): 전자 하나가 떨어져 나간 뒤, 다음 전자는 어떤 입자에서 떨어져 나가나요?",
        // EN: For (b): write the configuration of aluminium. Where does the fourth electron come from?
        "(b): 알루미늄의 전자 배치를 써요. 네 번째 전자는 어디에서 나오나요?",
      ],
      // EN: <p>(a) The second electron is removed from a positive ion, not from a neutral atom. The same nuclear charge now attracts fewer electrons (there is less repulsion between the remaining electrons), so each electron is held more strongly.</p><p>(b) Aluminium is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>. The first three electrons come from the third main energy level. The fourth electron comes from the second main energy level (2p), which is closer to the nucleus. It is shielded by fewer inner electrons, so it is attracted much more strongly and needs much more energy to remove.</p>
      answer: "<p>(a) 두 번째 전자는 중성 원자가 아니라 양이온에서 떨어져 나가요. 같은 핵전하가 이제 더 적은 수의 전자를 끌어당기므로(남은 전자들 사이의 반발력이 더 작아요), 각 전자가 더 강하게 붙잡혀 있어요.</p><p>(b) 알루미늄은 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup></span>이에요. 처음 세 전자는 세 번째 주 에너지 준위에서 나와요. 네 번째 전자는 원자핵에 더 가까운 두 번째 주 에너지 준위(2p)에서 나와요. 이 전자는 더 적은 수의 안쪽 전자에 의해 가려막히므로, 훨씬 더 강하게 끌리고 떼어 내는 데 훨씬 더 많은 에너지가 필요해요.</p>",
      markscheme: [
        // EN: (a) The electron is removed from a positive ion / the same nuclear charge attracts fewer electrons / less electron–electron repulsion, so the attraction is stronger.
        "(a) 전자가 양이온에서 떨어져 나간다 / 같은 핵전하가 더 적은 수의 전자를 끌어당긴다 / 전자–전자 반발력이 더 작아서 인력이 더 강하다.",
        // EN: (b) The fourth electron is removed from a main energy level closer to the nucleus / from n = 2 (2p), not n = 3.
        "(b) 네 번째 전자는 원자핵에 더 가까운 주 에너지 준위에서 / n = 3이 아니라 n = 2(2p)에서 떨어져 나간다.",
        // EN: (b) It is less shielded (fewer inner electrons) and so much more strongly attracted to the nucleus.
        "(b) 가려막기가 더 작아서(안쪽 전자가 더 적어서) 원자핵에 훨씬 더 강하게 끌린다.",
      ],
    },

    // ── s1-3-q045 · mcq · challenge · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q045": {
      // EN: <p>The graph shows log<sub>10</sub> of the first eight successive ionization energies of an element.</p><p><svg viewBox="0 0 310 220" width="310" height="220" role="img" aria-label="Graph of log to base 10 of ionization energy against the number of the electron removed, from 1 to 8. The points rise gently from about 3.0 for the first electron to about 3.8 for the fifth, jump sharply to about 4.3 for the sixth, then rise gently to about 4.5 for the eighth."><path d="M52 16V176H300" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="47" x2="300" y1="158.2222222222222" y2="158.2222222222222" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="162.2222222222222" text-anchor="end" font-size="12" fill="currentColor">3.0</text><line x1="47" x2="300" y1="113.77777777777776" y2="113.77777777777776" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="117.77777777777776" text-anchor="end" font-size="12" fill="currentColor">3.5</text><line x1="47" x2="300" y1="69.3333333333333" y2="69.3333333333333" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="73.3333333333333" text-anchor="end" font-size="12" fill="currentColor">4.0</text><line x1="47" x2="300" y1="24.888888888888886" y2="24.888888888888886" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/><text x="43" y="28.888888888888886" text-anchor="end" font-size="12" fill="currentColor">4.5</text><line x1="66" x2="66" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="66" y="195" text-anchor="middle" font-size="12" fill="currentColor">1</text><line x1="97.42857142857143" x2="97.42857142857143" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="97.42857142857143" y="195" text-anchor="middle" font-size="12" fill="currentColor">2</text><line x1="128.85714285714286" x2="128.85714285714286" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="128.85714285714286" y="195" text-anchor="middle" font-size="12" fill="currentColor">3</text><line x1="160.28571428571428" x2="160.28571428571428" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="160.28571428571428" y="195" text-anchor="middle" font-size="12" fill="currentColor">4</text><line x1="191.71428571428572" x2="191.71428571428572" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="191.71428571428572" y="195" text-anchor="middle" font-size="12" fill="currentColor">5</text><line x1="223.14285714285714" x2="223.14285714285714" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="223.14285714285714" y="195" text-anchor="middle" font-size="12" fill="currentColor">6</text><line x1="254.57142857142858" x2="254.57142857142858" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="254.57142857142858" y="195" text-anchor="middle" font-size="12" fill="currentColor">7</text><line x1="286" x2="286" y1="176" y2="181" stroke="currentColor" stroke-width="1.2"/><text x="286" y="195" text-anchor="middle" font-size="12" fill="currentColor">8</text><path d="M66.0 157.8L97.4 133.3L128.9 116.9L160.3 96.4L191.7 87.3L223.1 40.2L254.6 33.3L286.0 27.1" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="66.0" cy="157.8" r="4" fill="currentColor"/><circle cx="97.4" cy="133.3" r="4" fill="currentColor"/><circle cx="128.9" cy="116.9" r="4" fill="currentColor"/><circle cx="160.3" cy="96.4" r="4" fill="currentColor"/><circle cx="191.7" cy="87.3" r="4" fill="currentColor"/><circle cx="223.1" cy="40.2" r="4" fill="currentColor"/><circle cx="254.6" cy="33.3" r="4" fill="currentColor"/><circle cx="286.0" cy="27.1" r="4" fill="currentColor"/><text x="176" y="214" text-anchor="middle" font-size="12" fill="currentColor">number of the electron removed</text><text transform="translate(14 96) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">log₁₀(IE / kJ mol⁻¹)</text></svg></p><p>In which group of the periodic table is the element?</p>
      stem: "<p>그래프는 어떤 원소의 처음 여덟 개의 순차 이온화 에너지의 log<sub>10</sub> 값을 나타낸 거예요.</p><p><svg viewBox=\"0 0 310 220\" width=\"310\" height=\"220\" role=\"img\" aria-label=\"떼어 낸 전자의 번호(1부터 8까지)에 대한 이온화 에너지의 상용로그(밑이 10인 로그) 그래프. 점들은 첫 번째 전자의 약 3.0에서 다섯 번째 전자의 약 3.8까지 완만하게 올라가다가, 여섯 번째 전자에서 약 4.3으로 급격히 뛰고, 그 뒤 여덟 번째 전자의 약 4.5까지 완만하게 올라가요.\"><path d=\"M52 16V176H300\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"47\" x2=\"300\" y1=\"158.2222222222222\" y2=\"158.2222222222222\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"162.2222222222222\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">3.0</text><line x1=\"47\" x2=\"300\" y1=\"113.77777777777776\" y2=\"113.77777777777776\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"117.77777777777776\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">3.5</text><line x1=\"47\" x2=\"300\" y1=\"69.3333333333333\" y2=\"69.3333333333333\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"73.3333333333333\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">4.0</text><line x1=\"47\" x2=\"300\" y1=\"24.888888888888886\" y2=\"24.888888888888886\" stroke=\"currentColor\" stroke-width=\"0.6\" stroke-opacity=\"0.35\"/><text x=\"43\" y=\"28.888888888888886\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">4.5</text><line x1=\"66\" x2=\"66\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"66\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">1</text><line x1=\"97.42857142857143\" x2=\"97.42857142857143\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"97.42857142857143\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">2</text><line x1=\"128.85714285714286\" x2=\"128.85714285714286\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"128.85714285714286\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">3</text><line x1=\"160.28571428571428\" x2=\"160.28571428571428\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"160.28571428571428\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">4</text><line x1=\"191.71428571428572\" x2=\"191.71428571428572\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"191.71428571428572\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">5</text><line x1=\"223.14285714285714\" x2=\"223.14285714285714\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"223.14285714285714\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">6</text><line x1=\"254.57142857142858\" x2=\"254.57142857142858\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"254.57142857142858\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">7</text><line x1=\"286\" x2=\"286\" y1=\"176\" y2=\"181\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"286\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">8</text><path d=\"M66.0 157.8L97.4 133.3L128.9 116.9L160.3 96.4L191.7 87.3L223.1 40.2L254.6 33.3L286.0 27.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><circle cx=\"66.0\" cy=\"157.8\" r=\"4\" fill=\"currentColor\"/><circle cx=\"97.4\" cy=\"133.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"128.9\" cy=\"116.9\" r=\"4\" fill=\"currentColor\"/><circle cx=\"160.3\" cy=\"96.4\" r=\"4\" fill=\"currentColor\"/><circle cx=\"191.7\" cy=\"87.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"223.1\" cy=\"40.2\" r=\"4\" fill=\"currentColor\"/><circle cx=\"254.6\" cy=\"33.3\" r=\"4\" fill=\"currentColor\"/><circle cx=\"286.0\" cy=\"27.1\" r=\"4\" fill=\"currentColor\"/><text x=\"176\" y=\"214\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">떼어 낸 전자의 번호</text><text transform=\"translate(14 96) rotate(-90)\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">log₁₀(IE / kJ mol⁻¹)</text></svg></p><p>이 원소는 주기율표의 몇 족에 있나요?</p>",
      options: [
        // EN: Group 13
        "13족",
        // EN: Group 14
        "14족",
        // EN: Group 15
        "15족",
        // EN: Group 16
        "16족",
      ],
      hints: [
        // EN: Find the one place where the graph steps up sharply.
        "그래프가 급격히 뛰어오르는 곳 한 군데를 찾아요.",
        // EN: How many points lie before the step? That is the number of outer electrons.
        "뛰어오르기 전에 점이 몇 개 있나요? 그것이 바깥 전자의 수예요.",
        // EN: For groups 13 to 18, group number = 10 + number of outer electrons.
        "13족부터 18족까지는 족 번호 = 10 + 바깥 전자의 수예요.",
      ],
      // EN: <p>The first five points rise gently. Between the 5th and 6th points the graph steps up sharply. On a log scale, a step of about 0.5 means the value becomes about 3 times larger. So five electrons are removed before the large jump: the atom has five outer electrons and the element is in <strong>group 15</strong>. (The data are for phosphorus, <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>.)</p><p>A log scale is used because successive ionization energies cover a very wide range. On an ordinary scale the first few points would be squashed together at the bottom of the graph.</p>
      solution: "<p>처음 다섯 점은 완만하게 올라가요. 5번째 점과 6번째 점 사이에서 그래프가 급격히 뛰어올라요. 로그 눈금에서 약 0.5만큼 뛰면 값이 약 3배 커진다는 뜻이에요. 따라서 큰 증가 전에 전자 다섯 개를 떼어 내므로, 이 원자의 바깥 전자는 다섯 개이고 이 원소는 <strong>15족</strong>에 있어요. (이 자료는 인 <span class=\"mono\">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>의 값이에요.)</p><p>순차 이온화 에너지는 값의 범위가 매우 넓기 때문에 로그 눈금을 써요. 보통 눈금이라면 처음 몇 개의 점이 그래프 아래쪽에 한데 몰려 버릴 거예요.</p>",
      misconception: {
        // EN (option A): A group 13 element has three outer electrons, so the large jump would come between the 3rd and 4th points. Here those points rise gently.
        "0": "13족 원소는 바깥 전자가 세 개이므로, 큰 증가가 3번째 점과 4번째 점 사이에 나타날 거예요. 여기서는 그 점들이 완만하게 올라가요.",
        // EN (option B): A group 14 element has four outer electrons, so the large jump would come between the 4th and 5th points. Count the points before the jump again.
        "1": "14족 원소는 바깥 전자가 네 개이므로, 큰 증가가 4번째 점과 5번째 점 사이에 나타날 거예요. 증가 전에 있는 점의 수를 다시 세어 봐요.",
        // EN (option D): This counts the 6th electron as an outer electron. The 6th electron is the first one <em>after</em> the jump, so it comes from the inner level.
        "3": "이것은 6번째 전자를 바깥 전자로 센 거예요. 6번째 전자는 큰 증가 <em>다음의</em> 첫 번째 전자이므로, 안쪽 준위에서 나와요.",
      },
    },

    // ── s1-3-q046 · mcq · challenge · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q046": {
      // EN: <p>An element has twelve successive ionization energies. There are only two large jumps. Some of the values are shown.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">10th</th><th class="num" scope="col">11th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">1451</td><td class="num">7733</td><td class="num">35 458</td><td class="num">169 988</td></tr></tbody></table></div><p>Which arrangement of electrons in main energy levels fits these data?</p>
      stem: "<p>어떤 원소는 순차 이온화 에너지가 열두 개 있어요. 큰 증가는 두 번뿐이에요. 그중 일부 값이 표에 나와 있어요.</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>순차 이온화 에너지 / kJ mol<sup>−1</sup></caption><thead><tr><th scope=\"col\"></th><th class=\"num\" scope=\"col\">제2</th><th class=\"num\" scope=\"col\">제3</th><th class=\"num\" scope=\"col\">제10</th><th class=\"num\" scope=\"col\">제11</th></tr></thead><tbody><tr><th scope=\"row\">IE</th><td class=\"num\">1451</td><td class=\"num\">7733</td><td class=\"num\">35 458</td><td class=\"num\">169 988</td></tr></tbody></table></div><p>이 자료에 맞는 주 에너지 준위별 전자 배치는 어느 것인가요?</p>",
      options: [
        // EN: n = 1: 2 electrons. n = 2: 8 electrons. n = 3: 2 electrons.
        "n = 1: 전자 2개. n = 2: 전자 8개. n = 3: 전자 2개.",
        // EN: n = 1: 2 electrons. n = 2: 2 electrons. n = 3: 8 electrons.
        "n = 1: 전자 2개. n = 2: 전자 2개. n = 3: 전자 8개.",
        // EN: n = 1: 10 electrons. n = 2: 2 electrons.
        "n = 1: 전자 10개. n = 2: 전자 2개.",
        // EN: n = 1: 2 electrons. n = 2: 10 electrons.
        "n = 1: 전자 2개. n = 2: 전자 10개.",
      ],
      hints: [
        // EN: Twelve ionization energies means twelve electrons.
        "이온화 에너지가 열두 개라는 것은 전자가 열두 개라는 뜻이에요.",
        // EN: Each large jump marks the start of a new main energy level, closer to the nucleus.
        "큰 증가가 나타날 때마다 원자핵에 더 가까운 새로운 주 에너지 준위가 시작돼요.",
        // EN: The first electrons removed are the outermost ones.
        "가장 먼저 떼어 내는 전자는 가장 바깥쪽에 있는 전자예요.",
      ],
      // EN: <p>Twelve ionization energies means the atom has twelve electrons. The jumps split them into three groups:</p><div class="worked__math">electrons 1 and 2: easiest to remove → outer level (n&nbsp;=&nbsp;3)</div><div class="worked__math">large jump (1451 → 7733)</div><div class="worked__math">electrons 3 to 10: eight electrons → next level in (n&nbsp;=&nbsp;2)</div><div class="worked__math">large jump (35 458 → 169 988)</div><div class="worked__math">electrons 11 and 12: hardest to remove → closest to the nucleus (n&nbsp;=&nbsp;1)</div><p>So the arrangement is 2, 8, 2: the element is magnesium, <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup></span>, in group 2 and period 3.</p>
      solution: "<p>이온화 에너지가 열두 개이므로 이 원자에는 전자가 열두 개 있어요. 큰 증가에 따라 전자를 세 무리로 나눌 수 있어요:</p><div class=\"worked__math\">전자 1과 2: 떼어 내기 가장 쉬움 → 바깥 준위 (n&nbsp;=&nbsp;3)</div><div class=\"worked__math\">큰 증가 (1451 → 7733)</div><div class=\"worked__math\">전자 3부터 10까지: 전자 여덟 개 → 그 안쪽 준위 (n&nbsp;=&nbsp;2)</div><div class=\"worked__math\">큰 증가 (35 458 → 169 988)</div><div class=\"worked__math\">전자 11과 12: 떼어 내기 가장 어려움 → 원자핵에 가장 가까움 (n&nbsp;=&nbsp;1)</div><p>따라서 배치는 2, 8, 2예요: 이 원소는 마그네슘 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup></span>이고, 2족 3주기에 있어요.</p>",
      misconception: {
        // EN (option B): The right numbers in the wrong order. The first electrons to be removed are the outer ones, so the group of 2 before the first jump is in the highest level, not the middle one.
        "1": "숫자는 맞지만 순서가 틀렸어요. 가장 먼저 떼어 내는 전자는 바깥쪽 전자이므로, 첫 번째 큰 증가 전의 전자 2개는 가운데 준위가 아니라 가장 높은 준위에 있어요.",
        // EN (option C): This uses only the first jump. The second jump, between the 10th and 11th values, shows that the ten inner electrons are in two different main energy levels.
        "2": "이것은 첫 번째 큰 증가만 이용했어요. 제10 값과 제11 값 사이의 두 번째 큰 증가는 안쪽 전자 열 개가 서로 다른 두 주 에너지 준위에 있다는 것을 보여 줘요.",
        // EN (option D): This uses only the second jump. The first jump, between the 2nd and 3rd values, shows that the first two electrons are in a different main energy level from the next eight.
        "3": "이것은 두 번째 큰 증가만 이용했어요. 제2 값과 제3 값 사이의 첫 번째 큰 증가는 처음 두 전자가 그다음 여덟 전자와 다른 주 에너지 준위에 있다는 것을 보여 줘요.",
      },
    },

    // ── s1-3-q047 · mcq · exam · SL · Structure 1.3.1 · 1 mark
    "s1-3-q047": {
      // EN: <p>Radiation X has a longer wavelength than radiation Y. Which row compares X with Y?</p>
      stem: "<p>복사 X는 복사 Y보다 파장이 길어요. X를 Y와 옳게 비교한 것은 어느 것인가요?</p>",
      options: [
        // EN: X has the higher frequency and the higher energy per photon.
        "X가 진동수가 더 크고 광자 하나의 에너지도 더 크다.",
        // EN: X has the higher frequency and the lower energy per photon.
        "X가 진동수가 더 크고 광자 하나의 에너지는 더 작다.",
        // EN: X has the lower frequency and the higher energy per photon.
        "X가 진동수가 더 작고 광자 하나의 에너지는 더 크다.",
        // EN: X has the lower frequency and the lower energy per photon.
        "X가 진동수가 더 작고 광자 하나의 에너지도 더 작다.",
      ],
      hints: [
        // EN: Wavelength and frequency go in opposite directions.
        "파장과 진동수는 서로 반대 방향으로 변해요.",
        // EN: Energy per photon goes in the same direction as frequency.
        "광자 하나의 에너지는 진동수와 같은 방향으로 변해요.",
      ],
      // EN: <p>A longer wavelength means a lower frequency. A lower frequency means less energy per photon. So X has the lower frequency and the lower energy.</p>
      solution: "<p>파장이 길수록 진동수가 작아요. 진동수가 작을수록 광자 하나의 에너지가 작아요. 따라서 X가 진동수도 더 작고 에너지도 더 작아요.</p>",
      misconception: {
        // EN (option A): This is the wrong way round. Longer waves mean fewer waves pass each second, so the frequency is lower.
        "0": "거꾸로 생각했어요. 파장이 길면 1초 동안 지나가는 파동의 수가 더 적으므로, 진동수가 더 작아요.",
        // EN (option B): Frequency and energy always change in the same direction. A higher frequency cannot go with a lower energy.
        "1": "진동수와 에너지는 항상 같은 방향으로 변해요. 진동수가 더 큰데 에너지가 더 작을 수는 없어요.",
        // EN (option C): Frequency and energy always change in the same direction. A lower frequency means less energy per photon, not more.
        "2": "진동수와 에너지는 항상 같은 방향으로 변해요. 진동수가 더 작으면 광자 하나의 에너지가 더 큰 것이 아니라 더 작아요.",
      },
    },

    // ── s1-3-q048 · mcq · exam · SL · Structure 1.3.1 · 1 mark
    "s1-3-q048": {
      // EN: <p>Three elements each give a strong line in the visible part of their emission spectrum: lithium at 671 nm (red), sodium at 589 nm (orange-yellow) and barium at 554 nm (green).</p><p>Which statement is correct?</p>
      stem: "<p>세 원소는 각각 방출 스펙트럼의 가시광선 부분에 강한 선을 하나씩 나타내요: 리튬은 671 nm(빨간색), 나트륨은 589 nm(주황색을 띤 노란색), 바륨은 554 nm(초록색)예요.</p><p>옳은 설명은 어느 것인가요?</p>",
      options: [
        // EN: The lithium line comes from the largest fall in energy by an electron.
        "리튬의 선은 전자의 에너지 낙차가 가장 클 때 생긴다.",
        // EN: The barium line comes from the largest fall in energy by an electron.
        "바륨의 선은 전자의 에너지 낙차가 가장 클 때 생긴다.",
        // EN: All three lines come from falls of the same size, because all light travels at the same speed.
        "모든 빛은 같은 속력으로 움직이므로, 세 선은 모두 같은 크기의 낙차에서 생긴다.",
        // EN: The sodium line has the lowest frequency.
        "나트륨의 선이 진동수가 가장 작다.",
      ],
      hints: [
        // EN: The energy of the photon equals the energy the electron loses when it falls.
        "광자의 에너지는 전자가 떨어질 때 잃는 에너지와 같아요.",
        // EN: Shortest wavelength = highest frequency = highest energy.
        "파장이 가장 짧음 = 진동수가 가장 큼 = 에너지가 가장 큼.",
      ],
      // EN: <p>The photon carries away the energy that the electron loses. The barium line has the shortest wavelength (554 nm), so it has the highest frequency and the highest photon energy. It comes from the largest fall in energy. The lithium line (671 nm) comes from the smallest.</p>
      solution: "<p>광자는 전자가 잃는 에너지를 가지고 나가요. 바륨의 선은 파장이 가장 짧으므로(554 nm), 진동수와 광자 에너지가 가장 커요. 이 선은 에너지 낙차가 가장 클 때 생겨요. 리튬의 선(671 nm)은 낙차가 가장 작을 때 생겨요.</p>",
      misconception: {
        // EN (option A): Lithium has the longest wavelength of the three, so its photons have the lowest energy. That means the smallest fall, not the largest.
        "0": "리튬은 셋 중 파장이 가장 길므로 광자의 에너지가 가장 작아요. 즉 낙차가 가장 큰 것이 아니라 가장 작아요.",
        // EN (option C): The speed is the same, but the wavelengths are different. A different wavelength means a different frequency and a different photon energy.
        "2": "속력은 같지만 파장이 달라요. 파장이 다르면 진동수와 광자 에너지도 달라요.",
        // EN (option D): The lowest frequency goes with the longest wavelength. That is the lithium line at 671 nm.
        "3": "진동수가 가장 작은 것은 파장이 가장 긴 것이에요. 그것은 671 nm의 리튬 선이에요.",
      },
    },

    // ── s1-3-q049 · mcq · foundation · SL · Structure 1.3.3 · 1 mark
    "s1-3-q049": {
      // EN: <p>Which main energy level can hold a maximum of 18 electrons?</p>
      stem: "<p>전자가 최대 18개 들어갈 수 있는 주 에너지 준위는 어느 것인가요?</p>",
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
        "주 에너지 준위 n에는 전자가 최대 2n<sup>2</sup>개 들어가요.",
        // EN: Try n = 1, 2, 3, 4 in turn.
        "n = 1, 2, 3, 4를 차례로 넣어 봐요.",
      ],
      // EN: <div class="worked__math">n = 1: 2 × 1 = 2</div><div class="worked__math">n = 2: 2 × 4 = 8</div><div class="worked__math">n = 3: 2 × 9 = 18</div><div class="worked__math">n = 4: 2 × 16 = 32</div><p>The level that holds 18 electrons is <strong>n = 3</strong>.</p>
      solution: "<div class=\"worked__math\">n = 1: 2 × 1 = 2</div><div class=\"worked__math\">n = 2: 2 × 4 = 8</div><div class=\"worked__math\">n = 3: 2 × 9 = 18</div><div class=\"worked__math\">n = 4: 2 × 16 = 32</div><p>전자 18개가 들어가는 준위는 <strong>n = 3</strong>이에요.</p>",
      misconception: {
        // EN (option A): For n = 2 the maximum is 2 × 2<sup>2</sup> = 8 electrons.
        "0": "n = 2의 최대 개수는 2 × 2<sup>2</sup> = 8개예요.",
        // EN (option C): For n = 4 the maximum is 2 × 4<sup>2</sup> = 32 electrons.
        "2": "n = 4의 최대 개수는 2 × 4<sup>2</sup> = 32개예요.",
        // EN (option D): This uses 2 × n = 18. The rule is 2n<sup>2</sup>: square n first, then double.
        "3": "이것은 2 × n = 18을 이용했어요. 규칙은 2n<sup>2</sup>이에요: 먼저 n을 제곱한 다음 2배 해요.",
      },
    },

    // ── s1-3-q050 · mcq · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q050": {
      // EN: <p>What is the total number of electrons needed to fill the first three main energy levels (n = 1, n = 2 and n = 3) completely?</p>
      stem: "<p>처음 세 주 에너지 준위(n = 1, n = 2, n = 3)를 완전히 채우는 데 필요한 전자는 모두 몇 개인가요?</p>",
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
        "세 준위 각각에 대해 2n<sup>2</sup>을 계산해요.",
        // EN: Then add the three numbers.
        "그다음 세 수를 더해요.",
      ],
      // EN: <div class="worked__math">n = 1: 2 × 1<sup>2</sup> = 2</div><div class="worked__math">n = 2: 2 × 2<sup>2</sup> = 8</div><div class="worked__math">n = 3: 2 × 3<sup>2</sup> = 18</div><div class="worked__math">total = 2 + 8 + 18 = 28 electrons</div>
      solution: "<div class=\"worked__math\">n = 1: 2 × 1<sup>2</sup> = 2</div><div class=\"worked__math\">n = 2: 2 × 2<sup>2</sup> = 8</div><div class=\"worked__math\">n = 3: 2 × 3<sup>2</sup> = 18</div><div class=\"worked__math\">합계 = 2 + 8 + 18 = 전자 28개</div>",
      misconception: {
        // EN (option A): This adds 2n for each level: 2 + 4 + 6. The rule is 2n<sup>2</sup>.
        "0": "이것은 각 준위에 대해 2n을 더했어요: 2 + 4 + 6. 규칙은 2n<sup>2</sup>이에요.",
        // EN (option B): 18 is the number that n = 3 holds on its own. The question asks for all three levels together.
        "1": "18은 n = 3 하나에 들어가는 수예요. 문제는 세 준위를 모두 합한 수를 묻고 있어요.",
        // EN (option D): This is (2 × 3)<sup>2</sup>. Square n first, then double, and do it for each level.
        "3": "이것은 (2 × 3)<sup>2</sup>이에요. 먼저 n을 제곱한 다음 2배 하고, 이것을 각 준위마다 해요.",
      },
    },

    // ── s1-3-q051 · numeric · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q051": {
      // EN: <p>A main energy level can hold a maximum of 50 electrons. What is the value of n for this level?</p>
      stem: "<p>어떤 주 에너지 준위에 전자가 최대 50개 들어갈 수 있어요. 이 준위의 n 값은 얼마인가요?</p>",
      hints: [
        // EN: Use 2n<sup>2</sup> = 50 and work backwards.
        "2n<sup>2</sup> = 50을 이용해 거꾸로 풀어요.",
        // EN: Divide by 2 first. Then take the square root.
        "먼저 2로 나눠요. 그다음 제곱근을 구해요.",
      ],
      // EN: <div class="worked__math">2n<sup>2</sup> = 50</div><div class="worked__math">n<sup>2</sup> = 50 ÷ 2 = 25</div><div class="worked__math">n = 5</div><p>Check: 2 × 5<sup>2</sup> = 2 × 25 = 50.</p>
      solution: "<div class=\"worked__math\">2n<sup>2</sup> = 50</div><div class=\"worked__math\">n<sup>2</sup> = 50 ÷ 2 = 25</div><div class=\"worked__math\">n = 5</div><p>확인: 2 × 5<sup>2</sup> = 2 × 25 = 50.</p>",
    },

    // ── s1-3-q052 · numeric · exam · SL · Structure 1.3.3 · 1 mark
    "s1-3-q052": {
      // EN: <p>A zinc atom (Z = 30) has the configuration <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>.</p><p>How many electrons are in its third main energy level (n = 3)?</p>
      stem: "<p>아연 원자(Z = 30)의 전자 배치는 <span class=\"mono\">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup></span>이에요.</p><p>세 번째 주 에너지 준위(n = 3)에는 전자가 몇 개 있나요?</p>",
      hints: [
        // EN: The first number in each term is the main energy level. Find every term that starts with 3.
        "각 항의 첫 번째 숫자가 주 에너지 준위예요. 3으로 시작하는 항을 모두 찾아요.",
        // EN: There are three of them: 3s, 3p and 3d.
        "모두 세 개예요: 3s, 3p, 3d.",
      ],
      // EN: <div class="worked__math">3s<sup>2</sup> + 3p<sup>6</sup> + 3d<sup>10</sup></div><div class="worked__math">2 + 6 + 10 = 18 electrons</div><p>The third main energy level of zinc is full: 2n<sup>2</sup> = 2 × 3<sup>2</sup> = 18. The common slip is to answer 8 by leaving out the 3d electrons, which are written after 4s.</p>
      solution: "<div class=\"worked__math\">3s<sup>2</sup> + 3p<sup>6</sup> + 3d<sup>10</sup></div><div class=\"worked__math\">2 + 6 + 10 = 전자 18개</div><p>아연의 세 번째 주 에너지 준위는 꽉 차 있어요: 2n<sup>2</sup> = 2 × 3<sup>2</sup> = 18. 흔한 실수는 4s 뒤에 쓰여 있는 3d 전자를 빼먹고 8이라고 답하는 거예요.</p>",
      // EN: electrons
      unit: "개",
    },

    // ── s1-3-q053 · mcq · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q053": {
      // EN: <p>Which sublevel does <strong>not</strong> exist?</p>
      stem: "<p>존재하지 <strong>않는</strong> 부껍질은 어느 것인가요?</p>",
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
        "주 에너지 준위 n에는 n가지 종류의 부껍질이 있어요.",
        // EN: n = 1 has s only. n = 2 has s and p. n = 3 has s, p and d.
        "n = 1에는 s만 있어요. n = 2에는 s와 p가 있어요. n = 3에는 s, p, d가 있어요.",
      ],
      // EN: <p>Main energy level n contains n types of sublevel. The second level has only two: 2s and 2p. The d sublevels start at n = 3, so <strong>2d</strong> does not exist.</p>
      solution: "<p>주 에너지 준위 n에는 n가지 종류의 부껍질이 있어요. 두 번째 준위에는 2s와 2p의 두 가지뿐이에요. d 부껍질은 n = 3부터 시작하므로 <strong>2d</strong>는 존재하지 않아요.</p>",
      misconception: {
        // EN (option A): Every main energy level has an s sublevel. 1s is the only sublevel in n = 1.
        "0": "모든 주 에너지 준위에는 s 부껍질이 있어요. 1s는 n = 1에 있는 유일한 부껍질이에요.",
        // EN (option B): The second main energy level has two sublevels: 2s and 2p.
        "1": "두 번째 주 에너지 준위에는 2s와 2p의 두 부껍질이 있어요.",
        // EN (option D): The third main energy level has three sublevels: 3s, 3p and 3d.
        "3": "세 번째 주 에너지 준위에는 3s, 3p, 3d의 세 부껍질이 있어요.",
      },
    },

    // ── s1-3-q054 · order · foundation · SL · Structure 1.3.4 · 1 mark
    "s1-3-q054": {
      // EN: <p>Put the four sublevels of the fourth main energy level in order of <strong>increasing energy</strong> (lowest energy first).</p>
      stem: "<p>네 번째 주 에너지 준위의 부껍질 네 개를 <strong>에너지가 커지는 순서</strong>로 나열하세요(에너지가 가장 낮은 것이 맨 앞).</p>",
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
        "한 주 에너지 준위 안에서 부껍질의 에너지 순서는 항상 같아요.",
        // EN: The order of the letters is s, p, d, f.
        "글자의 순서는 s, p, d, f예요.",
      ],
      // EN: <p>Within one main energy level the energy of the sublevels increases in the order s, p, d, f. So the order is 4s, 4p, 4d, 4f.</p>
      solution: "<p>한 주 에너지 준위 안에서 부껍질의 에너지는 s, p, d, f 순서로 커져요. 따라서 순서는 4s, 4p, 4d, 4f예요.</p>",
    },

    // ── s1-3-q055 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q055": {
      // EN: <p>Which statement about the three orbitals in a 2p sublevel is correct?</p>
      stem: "<p>2p 부껍질에 있는 오비탈 세 개에 대한 설명으로 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: They have the same shape and the same energy, but point along three different axes.
        "모양과 에너지는 같지만, 서로 다른 세 축 방향을 향한다.",
        // EN: They have three different shapes.
        "모양이 세 가지로 서로 다르다.",
        // EN: They have three different energies.
        "에너지가 세 가지로 서로 다르다.",
        // EN: Together they can hold a maximum of three electrons.
        "세 오비탈을 합쳐 전자가 최대 세 개 들어갈 수 있다.",
      ],
      hints: [
        // EN: Think of the names p<sub>x</sub>, p<sub>y</sub> and p<sub>z</sub>. What do the letters x, y and z tell you?
        "p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>라는 이름을 생각해 봐요. x, y, z라는 글자는 무엇을 알려 주나요?",
      ],
      // EN: <p>The three p orbitals in a sublevel are all dumbbell-shaped and have the same energy. They differ only in orientation: they lie along the x, y and z axes, at right angles to each other. Each holds up to two electrons, so the sublevel holds up to six.</p>
      solution: "<p>한 부껍질에 있는 p 오비탈 세 개는 모두 아령 모양이고 에너지가 같아요. 방향만 달라요: 서로 직각을 이루며 x, y, z 축을 따라 놓여 있어요. 오비탈마다 전자가 최대 두 개 들어가므로, 이 부껍질에는 최대 여섯 개가 들어가요.</p>",
      misconception: {
        // EN (option B): All three p orbitals are dumbbell-shaped. Only their direction in space is different.
        "1": "p 오비탈 세 개는 모두 아령 모양이에요. 공간에서의 방향만 달라요.",
        // EN (option C): Orbitals in the same sublevel have the same energy. That is why Hund’s rule is needed to decide how they fill.
        "2": "같은 부껍질에 있는 오비탈들은 에너지가 같아요. 그래서 전자가 어떻게 채워지는지 정하려면 훈트 규칙이 필요해요.",
        // EN (option D): Each orbital can hold two electrons, so three p orbitals hold up to six.
        "3": "오비탈 하나에 전자가 두 개 들어갈 수 있으므로, p 오비탈 세 개에는 최대 여섯 개가 들어가요.",
      },
    },

    // ── s1-3-q056 · mcq · exam · SL · Structure 1.3.4 · 1 mark
    "s1-3-q056": {
      // EN: <p>Which row gives the number of sublevels and the total number of orbitals in the second main energy level (n = 2)?</p>
      stem: "<p>두 번째 주 에너지 준위(n = 2)의 부껍질 수와 오비탈의 총수를 옳게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: 2 sublevels and 2 orbitals
        "부껍질 2개, 오비탈 2개",
        // EN: 2 sublevels and 4 orbitals
        "부껍질 2개, 오비탈 4개",
        // EN: 2 sublevels and 8 orbitals
        "부껍질 2개, 오비탈 8개",
        // EN: 3 sublevels and 9 orbitals
        "",
      ],
      hints: [
        // EN: Name the sublevels in n = 2 first.
        "",
        // EN: An s sublevel has 1 orbital. A p sublevel has 3.
        "",
      ],
      // EN: <div class="worked__math">sublevels in n&nbsp;=&nbsp;2: 2s and 2p<br>&nbsp;&nbsp;(2 sublevels)</div><div class="worked__math">orbitals: 1 (2s) + 3 (2p) = 4</div><p>Check: 4 orbitals × 2 electrons = 8 electrons, which agrees with 2n<sup>2</sup> = 8.</p>
      solution: "",
      misconception: {
        // EN (option A): There are two sublevels, but they do not have one orbital each. The 2p sublevel has three orbitals.
        "0": "",
        // EN (option C): 8 is the number of electrons that n = 2 can hold. Each orbital holds two electrons, so there are 4 orbitals.
        "2": "",
        // EN (option D): This describes n = 3 (3s, 3p and 3d). There is no 2d sublevel.
        "3": "",
      },
    },

    // ── s1-3-q057 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q057": {
      // EN: <p>A student draws this orbital diagram for a carbon atom (Z = 6) in its ground state.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains one up arrow only. Each of the three 2p boxes contains one up arrow."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M63 25V8M59 13L63 8L67 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M169 25V8M165 13L169 8L173 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>Which rule or principle does the diagram break?</p>
      stem: "",
      options: [
        // EN: The Aufbau principle
        "",
        // EN: Hund’s rule
        "",
        // EN: The Pauli exclusion principle
        "",
        // EN: None. The diagram is correct.
        "",
      ],
      hints: [
        // EN: The total number of electrons (6) is right. Check each sublevel from the lowest energy upwards.
        "",
        // EN: Is every lower-energy sublevel full before the next one is used?
        "",
      ],
      // EN: <p>The <strong>Aufbau principle</strong> says electrons fill the lowest-energy sublevel that has space. Here the 2s sublevel holds only one electron, but there are three electrons in the higher-energy 2p sublevel. In the ground state, 2s is filled first.</p><p><svg viewBox="0 0 186 56" width="186" height="56" role="img" aria-label="Correct orbital diagram for carbon. The 1s and 2s boxes each contain a pair of opposite arrows. Two of the three 2p boxes contain one up arrow each and the third is empty."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 25V8M8 13L12 8L16 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7V24M18 19L22 24L26 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="17" y="50" text-anchor="middle" font-size="14" fill="currentColor">1s</text><rect x="48" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M58 25V8M54 13L58 8L62 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M68 7V24M64 19L68 24L72 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="63" y="50" text-anchor="middle" font-size="14" fill="currentColor">2s</text><rect x="94" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M109 25V8M105 13L109 8L113 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="124" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M139 25V8M135 13L139 8L143 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="154" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="139" y="50" text-anchor="middle" font-size="14" fill="currentColor">2p</text></svg></p><p>The correct diagram is <span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></span>, with the two 2p electrons in separate orbitals.</p>
      solution: "",
      misconception: {
        // EN (option B): Hund’s rule is obeyed inside the 2p sublevel: each 2p orbital holds one electron and the spins are parallel. The problem is that 2p is being used too early.
        "1": "",
        // EN (option C): No orbital holds two electrons with the same spin, and no orbital holds more than two. The Pauli exclusion principle is obeyed.
        "2": "",
        // EN (option D): Count the electrons in 2s. That sublevel still has space, but an electron has been put in the higher-energy 2p sublevel.
        "3": "",
      },
    },

    // ── s1-3-q058 · mcq · exam · SL · Structure 1.3.5 · 1 mark
    "s1-3-q058": {
      // EN: <p>What is the condensed electron configuration of a selenium atom (Z = 34) in its ground state?</p>
      stem: "",
      options: [
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 4p<sup>4</sup></span>
        "",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span>
        "",
        // EN: <span class="mono">[Kr] 4p<sup>4</sup></span>
        "",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup></span>
        "",
      ],
      hints: [
        // EN: Argon accounts for 18 electrons, so 16 more are needed.
        "",
        // EN: After the argon core the order is 4s, then 3d, then 4p.
        "",
      ],
      // EN: <p>Selenium has 34 electrons: the argon core (18) plus 16.</p><div class="worked__math">4s<sup>2</sup> (2) &nbsp; 3d<sup>10</sup> (12) &nbsp; 4p<sup>4</sup> (16)</div><div class="worked__math"><span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup></span><br>&nbsp;&nbsp;(18 + 2 + 10 + 4 = 34)</div><p>Writing it as <span class="mono">[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></span> is also accepted.</p>
      solution: "",
      misconception: {
        // EN (option A): Count the electrons: 18 + 2 + 4 = 24. The ten 3d electrons are missing. The 3d sublevel fills before 4p.
        "0": "",
        // EN (option C): The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after selenium.
        "2": "",
        // EN (option D): Count the electrons: 18 + 2 + 10 + 6 = 36. That is krypton (or the ion <span class="chem">Se^2-</span>), not a selenium atom.
        "3": "",
      },
    },

    // ── s1-3-q059 · mcq · exam · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q059": {
      // EN: <p>What is the condensed electron configuration of the <span class="chem">Cu^2+</span> ion? (Copper has Z = 29.)</p>
      stem: "",
      options: [
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>7</sup></span>
        "",
        // EN: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>8</sup></span>
        "",
        // EN: <span class="mono">[Ar] 3d<sup>9</sup></span>
        "",
        // EN: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>9</sup></span>
        "",
      ],
      hints: [
        // EN: Start from the real configuration of the copper atom. Copper is one of the two exceptions.
        "",
        // EN: The atom is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span>. Remove two electrons, starting with 4s.
        "",
      ],
      // EN: <p>The copper atom is <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>10</sup></span> (an exception to the usual filling order). Remove the single 4s electron first, then one 3d electron:</p><div class="worked__math"><span class="chem">Cu^2+</span>: <span class="mono">[Ar] 3d<sup>9</sup></span><br>&nbsp;&nbsp;(29 − 2 = 27 electrons)</div><p>This skill is listed for HL in Structure 3.1.</p>
      solution: "",
      misconception: {
        // EN (option A): This keeps the 4s electrons and removes electrons from 3d. In ions of the first-row d-block metals, 4s is emptied first.
        "0": "",
        // EN (option B): This keeps one electron in 4s. The 4s sublevel is emptied before any 3d electron is removed.
        "1": "",
        // EN (option D): Count the electrons: 18 + 2 + 9 = 29. That is the number in a copper atom, and it is not the atom’s real configuration either.
        "3": "",
      },
    },

    // ── s1-3-q060 · mcq · challenge · AHL · Structure 1.3.5 · 1 mark
    "s1-3-q060": {
      // EN: <p>Which pair of ions have the same electron configuration?</p>
      stem: "",
      options: [
        // EN: <span class="chem">Mn^2+</span> and <span class="chem">Fe^2+</span>
        "",
        // EN: <span class="chem">Mn^2+</span> and <span class="chem">Fe^3+</span>
        "",
        // EN: <span class="chem">Cr^3+</span> and <span class="chem">Fe^3+</span>
        "",
        // EN: <span class="chem">Ti^2+</span> and <span class="chem">Ca^2+</span>
        "",
      ],
      hints: [
        // EN: Count the electrons in each ion: atomic number minus the charge. Mn is 25, Fe is 26, Cr is 24, Ti is 22, Ca is 20.
        "",
        // EN: Two ions with the same number of electrons, both with an empty 4s sublevel, have the same configuration.
        "",
      ],
      // EN: <p>Write each atom, then remove the 4s electrons before any 3d electrons.</p><div class="worked__math">Mn: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>5</sup></span> → <span class="chem">Mn^2+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span></div><div class="worked__math">Fe: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>6</sup></span> → <span class="chem">Fe^2+</span>: <span class="mono">[Ar] 3d<sup>6</sup></span> → <span class="chem">Fe^3+</span>: <span class="mono">[Ar] 3d<sup>5</sup></span></div><div class="worked__math">Cr: <span class="mono">[Ar] 4s<sup>1</sup> 3d<sup>5</sup></span> → <span class="chem">Cr^3+</span>: <span class="mono">[Ar] 3d<sup>3</sup></span></div><div class="worked__math">Ti: <span class="mono">[Ar] 4s<sup>2</sup> 3d<sup>2</sup></span> → <span class="chem">Ti^2+</span>: <span class="mono">[Ar] 3d<sup>2</sup></span></div><p><span class="chem">Mn^2+</span> and <span class="chem">Fe^3+</span> both have 23 electrons and are both <span class="mono">[Ar] 3d<sup>5</sup></span>.</p>
      solution: "",
      misconception: {
        // EN (option A): Same charge, but different numbers of electrons: <span class="chem">Mn^2+</span> has 23 and <span class="chem">Fe^2+</span> has 24.
        "0": "",
        // EN (option C): Same charge, but different numbers of electrons: <span class="chem">Cr^3+</span> has 21 and <span class="chem">Fe^3+</span> has 23.
        "2": "",
        // EN (option D): <span class="chem">Ca^2+</span> has 18 electrons, <span class="mono">[Ar]</span>. <span class="chem">Ti^2+</span> has 20 electrons, <span class="mono">[Ar] 3d<sup>2</sup></span>.
        "3": "",
      },
    },

    // ── s1-3-q061 · mcq · foundation · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q061": {
      // EN: <p>Which equation represents the <strong>first ionization energy</strong> of magnesium?</p>
      stem: "",
      options: [
        // EN: <span class="chem">Mg(s) -> Mg+(g) + e-</span>
        "",
        // EN: <span class="chem">Mg(g) -> Mg+(g) + e-</span>
        "",
        // EN: <span class="chem">Mg(g) -> Mg^2+(g) + 2e-</span>
        "",
        // EN: <span class="chem">Mg(g) + e- -> Mg-(g)</span>
        "",
      ],
      hints: [
        // EN: First ionization energy: one mole of electrons is removed from one mole of gaseous atoms.
        "",
        // EN: Check the state symbols and the number of electrons.
        "",
      ],
      // EN: <p>The first ionization energy is the energy needed to remove one mole of electrons from one mole of gaseous atoms, forming one mole of gaseous 1+ ions:</p><div class="worked__math"><span class="chem">Mg(g) -> Mg+(g) + e-</span></div><p>Both species must have the state symbol (g).</p>
      solution: "",
      misconception: {
        // EN (option A): Ionization energy is defined for <em>gaseous</em> atoms. Starting from the solid would include the energy needed to turn the solid into separate atoms.
        "0": "",
        // EN (option C): This removes two electrons. The first ionization energy is for removing one electron from each atom.
        "2": "",
        // EN (option D): This atom gains an electron. Ionization means an electron is removed.
        "3": "",
      },
    },

    // ── s1-3-q062 · mcq · exam · AHL · Structure 1.3.6 · 1 mark
    "s1-3-q062": {
      // EN: <p>The first ionization energy of phosphorus is 1012 <span class="unit">kJ mol-1</span> and that of sulfur is 1000 <span class="unit">kJ mol-1</span>. Which statement explains why the value for sulfur is lower?</p>
      stem: "",
      options: [
        // EN: The electron removed from sulfur is in a 3p orbital that holds two electrons, and these two electrons repel each other.
        "",
        // EN: The electron removed from sulfur is in the 3p sublevel, but the electron removed from phosphorus is in the 3s sublevel.
        "",
        // EN: Sulfur has more inner electrons than phosphorus, so its outer electrons are more shielded.
        "",
        // EN: Sulfur has a smaller nuclear charge than phosphorus.
        "",
      ],
      hints: [
        // EN: Write both configurations. Which sublevel does each atom lose an electron from?
        "",
        // EN: Draw the three 3p boxes for each atom. What is different in sulfur?
        "",
      ],
      // EN: <p>P is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>: each 3p orbital holds one electron. S is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>: one 3p orbital holds a pair. The electron removed from sulfur comes from this doubly occupied orbital. Repulsion between the two electrons in the same orbital raises the energy of the electron, so less energy is needed to remove it.</p><p><svg viewBox="0 0 200 56" width="200" height="56" role="img" aria-label="Orbital diagrams of the 3p sublevel. In phosphorus each of the three 3p boxes holds one up arrow. In sulfur the first 3p box holds an up and a down arrow and the other two hold one up arrow each."><rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M17 25V8M13 13L17 8L21 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M47 25V8M43 13L47 8L51 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="62" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M77 25V8M73 13L77 8L81 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="47" y="50" text-anchor="middle" font-size="14" fill="currentColor">3p in P</text><rect x="108" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M118 25V8M114 13L118 8L122 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 7V24M124 19L128 24L132 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="138" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M153 25V8M149 13L153 8L157 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="168" y="2" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M183 25V8M179 13L183 8L187 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="153" y="50" text-anchor="middle" font-size="14" fill="currentColor">3p in S</text></svg></p>
      solution: "",
      misconception: {
        // EN (option B): Both atoms lose a 3p electron: P is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span> and S is <span class="mono">[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>. A change of sublevel explains the fall from Mg to Al, not this one.
        "1": "",
        // EN (option C): Both atoms have the same ten inner electrons (<span class="mono">1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></span>), so the shielding by inner electrons is the same.
        "2": "",
        // EN (option D): Sulfur has 16 protons and phosphorus has 15. Sulfur has the <em>greater</em> nuclear charge, which is why the lower value needs explaining.
        "3": "",
      },
    },

    // ── s1-3-q063 · short · exam · AHL · Structure 1.3.6 · 2 marks
    "s1-3-q063": {
      // EN: <p>The first ionization energy of sulfur is 1000 <span class="unit">kJ mol-1</span> and that of chlorine is 1251 <span class="unit">kJ mol-1</span>.</p><p>Explain why chlorine has the higher first ionization energy.</p>
      stem: "",
      hints: [
        // EN: What is different about the two nuclei?
        "",
        // EN: Are the outer electrons in the same main energy level? What does that tell you about shielding?
        "",
        // EN: Do not argue from how close chlorine is to a full sublevel. Compare the attraction for the electron that is removed.
        "",
      ],
      // EN: <p>Chlorine has one more proton than sulfur, so its nuclear charge is greater. In both atoms the electron is removed from the 3p sublevel, in the same main energy level, so the shielding by inner electrons is the same. The outer electron in chlorine is attracted more strongly to the nucleus (and is slightly closer to it), so more energy is needed to remove it.</p>
      answer: "",
      markscheme: [
        // EN: Chlorine has a greater nuclear charge / more protons.
        "",
        // EN: The electron is removed from the same main energy level (or sublevel), so shielding is the same/similar, and the attraction to the nucleus is stronger (accept: smaller atomic radius).
        "",
      ],
    },

    // ── s1-3-q064 · mcq · foundation · SL · Structure 1.3.2 · 1 mark
    "s1-3-q064": {
      // EN: <p>The four lines in the <strong>visible</strong> part of the hydrogen emission spectrum are produced when electrons fall to which energy level?</p>
      stem: "",
      options: [
        // EN: n = 1
        "",
        // EN: n = 2
        "",
        // EN: n = 3
        "",
        // EN: n = ∞
        "",
      ],
      hints: [
        // EN: Three sets of lines: falls to n = 1, to n = 2 and to n = 3.
        "",
        // EN: In order of decreasing energy the regions are ultraviolet, visible, infrared.
        "",
      ],
      // EN: <p>Visible lines come from electrons falling to <strong>n = 2</strong> (from n = 3, 4, 5 and 6). Falls to n = 1 give ultraviolet lines and falls to n = 3 give infrared lines.</p>
      solution: "",
      misconception: {
        // EN (option A): Falls to n = 1 release the most energy. Those lines are in the ultraviolet, which you cannot see.
        "0": "",
        // EN (option C): Falls to n = 3 release little energy. Those lines are in the infrared, which you cannot see.
        "2": "",
        // EN (option D): Emission happens when an electron falls to a <em>lower</em> level. n = ∞ is the top, where the levels converge.
        "3": "",
      },
    },

    // ── s1-3-q065 · mcq · foundation · AHL · Structure 1.3.7 · 1 mark
    "s1-3-q065": {
      // EN: <p>The table shows the first four successive ionization energies of an element.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Successive ionization energies / kJ mol<sup>−1</sup></caption><thead><tr><th scope="col"></th><th class="num" scope="col">1st</th><th class="num" scope="col">2nd</th><th class="num" scope="col">3rd</th><th class="num" scope="col">4th</th></tr></thead><tbody><tr><th scope="row">IE</th><td class="num">496</td><td class="num">4562</td><td class="num">6910</td><td class="num">9543</td></tr></tbody></table></div><p>In which group of the periodic table is the element?</p>
      stem: "",
      options: [
        // EN: Group 1
        "",
        // EN: Group 2
        "",
        // EN: Group 13
        "",
        // EN: Group 14
        "",
      ],
      hints: [
        // EN: Compare each value with the one before it. Where does it become many times larger?
        "",
        // EN: The number of electrons removed <em>before</em> the large jump is the number of outer electrons.
        "",
      ],
      // EN: <div class="worked__math">1st → 2nd: 496 → 4562<br>&nbsp;&nbsp;(about 9 times: the large jump)</div><div class="worked__math">2nd → 3rd: 4562 → 6910<br>&nbsp;&nbsp;(about 1.5 times)</div><div class="worked__math">3rd → 4th: 6910 → 9543<br>&nbsp;&nbsp;(about 1.4 times)</div><p>Only one electron is removed before the large jump, so the atom has one outer electron. The element is in <strong>group 1</strong>. (These are the values for sodium.)</p>
      solution: "",
      misconception: {
        // EN (option B): A group 2 element has two outer electrons, so its large jump comes between the 2nd and 3rd values. Here 6910 is only about 1.5 times 4562.
        "1": "",
        // EN (option C): A group 13 element has three outer electrons, so its large jump comes between the 3rd and 4th values. Here 9543 is only about 1.4 times 6910.
        "2": "",
        // EN (option D): This counts all four values given. Look for the large jump and count only the electrons removed before it.
        "3": "",
      },
    },

  }
});
