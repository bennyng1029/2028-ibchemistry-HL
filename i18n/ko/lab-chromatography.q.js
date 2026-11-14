/* lab-chromatography.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-chromatography.q', {
  questions: {

    // ── lab-chromatography-q001 · numeric · foundation · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q001": {
      // EN: <p>On a chromatogram, the centre of a spot is 3.4 <span class="unit">cm</span> above the baseline. The solvent front is 7.9 <span class="unit">cm</span> above the baseline. Calculate the <i>R</i><sub>F</sub> value of the spot.</p>
      stem: "<p>크로마토그램에서 점의 중심은 출발선에서 3.4 <span class=\"unit\">cm</span> 위에 있어요. 용매 전선은 출발선에서 7.9 <span class=\"unit\">cm</span> 위에 있어요. 이 점의 <i>R</i><sub>F</sub> 값을 계산하시오 (calculate).</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.
        "<i>R</i><sub>F</sub> = 점이 이동한 거리 ÷ 용매 전선이 이동한 거리.",
        // EN: Both distances are already measured from the baseline. Divide 3.4 by 7.9.
        "두 거리 모두 이미 출발선에서부터 잰 값이에요. 3.4를 7.9로 나누세요.",
      ],
      // EN: <div class="worked__math"><i>R</i><sub>F</sub> = 3.4 <span class="unit">cm</span> / 7.9 <span class="unit">cm</span> = 0.430…</div><div class="worked__math"><i>R</i><sub>F</sub> = <strong>0.43</strong> (no unit)</div>
      solution: "<div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.4 <span class=\"unit\">cm</span> / 7.9 <span class=\"unit\">cm</span> = 0.430…</div><div class=\"worked__math\"><i>R</i><sub>F</sub> = <strong>0.43</strong> (단위 없음)</div>",
    },

    // ── lab-chromatography-q002 · numeric · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q002": {
      // EN: <p>A student placed a ruler with its zero at the bottom edge of a TLC plate and recorded these readings.</p><div class="table-scroll"><table class="data"><caption>Ruler readings</caption><thead><tr><th scope="col">Feature</th><th scope="col" class="num">Reading / cm</th></tr></thead><tbody><tr><th scope="row">baseline</th><td class="num">1.0</td></tr><tr><th scope="row">centre of spot X</th><td class="num">4.8</td></tr><tr><th scope="row">solvent front</th><td class="num">8.6</td></tr><tr><th scope="row">top edge of plate</th><td class="num">10.0</td></tr></tbody></table></div><p>Calculate the <i>R</i><sub>F</sub> value of spot X.</p>
      stem: "<p>한 학생이 TLC 판의 아래쪽 끝에 자의 0을 맞추고 다음 눈금을 기록했어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>자 눈금</caption><thead><tr><th scope=\"col\">위치</th><th scope=\"col\" class=\"num\">눈금 / cm</th></tr></thead><tbody><tr><th scope=\"row\">출발선</th><td class=\"num\">1.0</td></tr><tr><th scope=\"row\">점 X의 중심</th><td class=\"num\">4.8</td></tr><tr><th scope=\"row\">용매 전선</th><td class=\"num\">8.6</td></tr><tr><th scope=\"row\">판의 위쪽 끝</th><td class=\"num\">10.0</td></tr></tbody></table></div><p>점 X의 <i>R</i><sub>F</sub> 값을 계산하시오 (calculate).</p>",
      hints: [
        // EN: Distances are measured from the baseline, not from the bottom edge.
        "거리는 아래쪽 끝이 아니라 출발선에서부터 재요.",
        // EN: The top edge of the plate is not needed.
        "판의 위쪽 끝은 필요 없어요.",
      ],
      // EN: <div class="worked__math">spot: 4.8 − 1.0 = 3.8 <span class="unit">cm</span></div><div class="worked__math">front: 8.6 − 1.0 = 7.6 <span class="unit">cm</span></div><div class="worked__math"><i>R</i><sub>F</sub> = 3.8 / 7.6 = <strong>0.50</strong></div><p>M1 for both distances from the baseline, M2 for the answer. Using the readings directly gives 4.8 / 8.6 = 0.56, and dividing by the plate length gives 0.42: both are wrong.</p>
      solution: "<div class=\"worked__math\">점: 4.8 − 1.0 = 3.8 <span class=\"unit\">cm</span></div><div class=\"worked__math\">전선: 8.6 − 1.0 = 7.6 <span class=\"unit\">cm</span></div><div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.8 / 7.6 = <strong>0.50</strong></div><p>M1은 출발선에서 잰 두 거리, M2는 답이에요. 눈금을 그대로 쓰면 4.8 / 8.6 = 0.56이 되고, 판의 길이로 나누면 0.42가 돼요: 둘 다 틀린 답이에요.</p>",
    },

    // ── lab-chromatography-q003 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-chromatography-q003": {
      // EN: <p>Why is the baseline of a chromatogram drawn in pencil rather than ink?</p>
      stem: "<p>크로마토그램의 출발선을 잉크가 아니라 연필로 긋는 이유는 무엇인가요?</p>",
      options: [
        // EN: Pencil lines are easier to see when the paper is wet.
        "연필 선은 종이가 젖었을 때 더 잘 보여요.",
        // EN: Graphite does not dissolve in the solvent, but ink would dissolve and move up the paper.
        "흑연은 용매에 녹지 않지만, 잉크는 녹아서 종이 위로 올라가요.",
        // EN: Pencil can be rubbed out after the experiment.
        "연필은 실험 뒤에 지울 수 있어요.",
        // EN: Ink would react with the substances being separated.
        "잉크는 분리하려는 물질과 반응해요.",
      ],
      hints: [
        // EN: Ink is itself a mixture of dyes.
        "잉크 자체가 염료의 혼합물이에요.",
      ],
      // EN: <p>Ink is a mixture of soluble dyes. It would dissolve in the mobile phase and give extra spots or smears. Graphite is insoluble, so the baseline stays put.</p>
      solution: "<p>잉크는 녹는 염료의 혼합물이에요. 잉크는 이동상에 녹아서 점이나 번진 자국을 더 만들어요. 흑연은 녹지 않으므로 출발선이 그대로 있어요.</p>",
      misconception: {
        // EN (option A): Visibility is not the problem. Think about what the moving solvent does to the line.
        "0": "보이는지가 문제가 아니에요. 움직이는 용매가 선에 무슨 일을 하는지 생각해 보세요.",
        // EN (option C): Rubbing out is not needed; the baseline is used for measuring afterwards.
        "2": "지울 필요는 없어요. 출발선은 나중에 거리를 잴 때 써요.",
        // EN (option D): Chromatography is a physical separation. The problem with ink is physical: it dissolves.
        "3": "크로마토그래피는 물리적 분리예요. 잉크의 문제도 물리적이에요: 잉크가 녹아요.",
      },
    },

    // ── lab-chromatography-q004 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-chromatography-q004": {
      // EN: <p>A student pours solvent into a beaker so that the solvent level is 0.5 <span class="unit">cm</span> <strong>above</strong> the baseline. What will happen?</p>
      stem: "<p>한 학생이 비커에 용매를 부어 용매 표면이 출발선보다 0.5 <span class=\"unit\">cm</span> <strong>위</strong>에 오게 했어요. 어떤 일이 일어날까요?</p>",
      options: [
        // EN: The spots move up the paper faster.
        "점이 종이 위로 더 빨리 이동해요.",
        // EN: The spots dissolve into the solvent in the beaker, so no chromatogram forms.
        "점이 비커 속 용매에 녹아 버려서 크로마토그램이 생기지 않아요.",
        // EN: The <i>R</i><sub>F</sub> values are all larger, but the order of the spots is the same.
        "<i>R</i><sub>F</sub> 값은 모두 커지지만 점의 순서는 같아요.",
        // EN: Nothing changes, because the solvent still rises up the paper.
        "용매가 여전히 종이를 따라 올라가므로 아무것도 달라지지 않아요.",
      ],
      hints: [
        // EN: Where does the mixture go when it is covered by a lot of solvent?
        "혼합물이 많은 용매에 잠기면 어디로 갈까요?",
      ],
      // EN: <p>The spots are submerged, so the substances dissolve into the solvent in the beaker instead of being carried up the paper. The baseline must be above the solvent level.</p>
      solution: "<p>점이 용매에 잠기므로, 물질이 종이 위로 운반되지 않고 비커 속 용매에 녹아 버려요. 출발선은 용매 표면보다 위에 있어야 해요.</p>",
      misconception: {
        // EN (option A): The spots are under the solvent surface, so they are not carried up from the baseline at all.
        "0": "점이 용매 표면 아래에 있으므로 출발선에서 위로 전혀 운반되지 않아요.",
        // EN (option C): The problem is not the <i>R</i><sub>F</sub> value. The mixture leaves the paper altogether.
        "2": "<i>R</i><sub>F</sub> 값이 문제가 아니에요. 혼합물이 종이에서 아예 떠나 버려요.",
        // EN (option D): The solvent does rise, but the mixture has already left the paper and spread into the bulk solvent.
        "3": "용매는 올라가지만, 혼합물은 이미 종이를 떠나 용기 속 용매 전체로 퍼졌어요.",
      },
    },

    // ── lab-chromatography-q005 · short · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q005": {
      // EN: <p>Explain how paper chromatography separates the components of a mixture.</p>
      stem: "<p>종이 크로마토그래피로 혼합물의 성분이 분리되는 원리를 설명하시오 (explain).</p>",
      hints: [
        // EN: Name the two phases.
        "두 상의 이름을 말하세요.",
        // EN: Why does one component move further than another in the same time?
        "같은 시간 동안 한 성분이 다른 성분보다 더 멀리 이동하는 이유는 무엇인가요?",
      ],
      // EN: <p>One mark for the two phases and the idea of distribution between them; one mark for <em>different</em> attractions leading to different rates of movement. "They have different R<sub>F</sub> values" restates the result, it does not explain it.</p>
      solution: "<p>1점은 두 상과 두 상 사이에 나뉘어 분포한다는 생각, 1점은 끌리는 정도가 <em>달라서</em> 이동 속도가 달라진다는 것에 줘요. \"R<sub>F</sub> 값이 다르다\"는 결과를 다시 말한 것이지 설명이 아니에요.</p>",
      // EN: <p>The components are distributed between the stationary phase (water held in the paper) and the mobile phase (the solvent). Each component has a different relative attraction to the two phases, through intermolecular forces, so each moves up the paper at a different rate and they separate.</p>
      answer: "<p>성분은 고정상(종이에 붙잡혀 있는 물)과 이동상(용매) 사이에 나뉘어 분포해요. 각 성분은 분자 간 힘을 통해 두 상에 끌리는 상대적인 정도가 달라서, 종이 위로 서로 다른 속도로 이동하고 분리돼요.</p>",
      markscheme: [
        // EN: Components distribute / partition between the stationary phase and the mobile phase (or: are continually adsorbed and released).
        "성분이 고정상과 이동상 사이에 분포한다 / 분배된다 (또는: 계속 흡착되었다가 떨어진다).",
        // EN: Components have different (relative) attractions to the two phases / different solubilities in the solvent, so they move at different speeds.
        "성분마다 두 상에 대한 (상대적인) 인력이 다르다 / 용매에 대한 용해도가 다르므로 서로 다른 속도로 이동한다.",
      ],
    },

    // ── lab-chromatography-q006 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q006": {
      // EN: <p>A mixture of three compounds is separated on a silica TLC plate (polar stationary phase) using a non-polar mobile phase. Which compound has the <strong>largest</strong> <i>R</i><sub>F</sub> value?</p>
      stem: "<p>세 화합물의 혼합물을 실리카 TLC 판(극성 고정상)에서 무극성 이동상으로 분리해요. <i>R</i><sub>F</sub> 값이 <strong>가장 큰</strong> 화합물은 어느 것인가요?</p>",
      options: [
        // EN: The compound with three –OH groups
        "–OH기가 3개 있는 화합물",
        // EN: The compound with one –OH group
        "–OH기가 1개 있는 화합물",
        // EN: The compound with only C–H and C–C bonds
        "C–H 결합과 C–C 결합만 있는 화합물",
        // EN: All three have the same value, because they move with the same solvent.
        "같은 용매와 함께 이동하므로 셋 모두 값이 같아요.",
      ],
      hints: [
        // EN: Which compound is attracted least to the polar silica?
        "극성인 실리카에 가장 적게 끌리는 화합물은 어느 것인가요?",
      ],
      // EN: <p>The hydrocarbon-like compound has only weak London (dispersion) forces with the polar silica and dissolves well in the non-polar solvent. It spends most time in the mobile phase and travels furthest.</p>
      solution: "<p>탄화수소에 가까운 화합물은 극성 실리카와 약한 런던 분산력만 작용하고, 무극성 용매에 잘 녹아요. 이 화합물은 이동상에 머무는 시간이 가장 길어서 가장 멀리 이동해요.</p>",
      misconception: {
        // EN (option A): Three –OH groups form many hydrogen bonds to the silica, so this compound is held back most. It has the smallest <i>R</i><sub>F</sub>.
        "0": "–OH기 3개는 실리카와 수소 결합을 많이 만들어서 이 화합물이 가장 많이 붙잡혀요. <i>R</i><sub>F</sub>가 가장 작아요.",
        // EN (option B): One –OH group still hydrogen-bonds to the silica. This compound is held back more than one with no polar groups.
        "1": "–OH기 1개도 실리카와 수소 결합을 해요. 이 화합물은 극성기가 없는 화합물보다 더 많이 붙잡혀요.",
        // EN (option D): They move in the same solvent, but their attractions to the stationary phase differ. That is why they separate.
        "3": "같은 용매에서 이동하지만, 고정상에 끌리는 정도가 달라요. 그래서 분리되는 거예요.",
      },
    },

    // ── lab-chromatography-q007 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q007": {
      // EN: <p>A TLC run with hexane gives spots very close to the baseline. The student repeats it with a 1 : 1 mixture of hexane and ethyl acetate, which is more polar. What happens to the <i>R</i><sub>F</sub> values?</p>
      stem: "<p>hexane으로 TLC를 전개했더니 점들이 출발선에 아주 가까이 있어요. 학생은 극성이 더 큰 hexane과 ethyl acetate의 1 : 1 혼합물로 다시 전개해요. <i>R</i><sub>F</sub> 값은 어떻게 될까요?</p>",
      options: [
        // EN: They all decrease.
        "모두 작아져요.",
        // EN: They all increase.
        "모두 커져요.",
        // EN: They stay the same, because <i>R</i><sub>F</sub> depends only on the substance.
        "<i>R</i><sub>F</sub>는 물질에만 달려 있으므로 그대로예요.",
        // EN: The order of the spots is reversed.
        "점의 순서가 거꾸로 돼요.",
      ],
      hints: [
        // EN: Which phase does a more polar solvent compete with?
        "극성이 더 큰 용매는 어느 상과 경쟁하나요?",
      ],
      // EN: <p>The polar compounds are now attracted more strongly to the mobile phase, so they spend more time moving. Every spot moves further and every <i>R</i><sub>F</sub> increases, with the order unchanged.</p>
      solution: "<p>이제 극성 화합물이 이동상에 더 강하게 끌려서 움직이는 시간이 더 길어져요. 모든 점이 더 멀리 이동하고 모든 <i>R</i><sub>F</sub>가 커지며, 순서는 바뀌지 않아요.</p>",
      misconception: {
        // EN (option A): A more polar mobile phase competes better with the polar silica for the compounds, so they move further, not less.
        "0": "극성이 더 큰 이동상은 극성 실리카와 화합물을 두고 더 잘 경쟁하므로, 화합물은 덜이 아니라 더 멀리 이동해요.",
        // EN (option C): <i>R</i><sub>F</sub> depends on the substance <em>and</em> on the conditions: the stationary phase, the solvent and the temperature.
        "2": "<i>R</i><sub>F</sub>는 물질<em>과</em> 조건(고정상, 용매, 온도)에 따라 달라져요.",
        // EN (option D): The stationary phase has not changed, so the most polar compound is still held most strongly. The order stays the same.
        "3": "고정상은 바뀌지 않았으므로 극성이 가장 큰 화합물이 여전히 가장 강하게 붙잡혀요. 순서는 그대로예요.",
      },
    },

    // ── lab-chromatography-q008 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-chromatography-q008": {
      // EN: <p>State <strong>two</strong> reasons why a lid is placed on the chromatography tank during the run.</p>
      stem: "<p>전개하는 동안 크로마토그래피 전개 용기에 뚜껑을 덮는 이유를 <strong>두 가지</strong> 쓰시오 (state).</p>",
      hints: [
        // EN: Think about the paper as the solvent rises through it.
        "용매가 종이를 따라 올라갈 때 종이에 무슨 일이 일어나는지 생각해 보세요.",
        // EN: Think about safety too.
        "안전도 생각해 보세요.",
      ],
      // EN: <p>Without a lid, solvent evaporates from the surface of the paper, so the front moves slowly and unevenly and the <i>R</i><sub>F</sub> values are not reproducible. Many mobile phases are also volatile and flammable.</p>
      solution: "<p>뚜껑이 없으면 용매가 종이 표면에서 증발해서 전선이 천천히, 고르지 않게 이동하고 <i>R</i><sub>F</sub> 값이 재현되지 않아요. 또 많은 이동상은 휘발성이고 불이 잘 붙어요.</p>",
      // EN: <p>The tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises (the front rises steadily and the results are reproducible). It also keeps flammable or harmful solvent vapour in the tank.</p>
      answer: "<p>전개 용기가 용매 증기로 차서, 용매가 올라가는 동안 종이에서 증발하지 않아요(전선이 고르게 올라가고 결과가 재현돼요). 또 불이 잘 붙거나 해로운 용매 증기를 용기 안에 가둬 둬요.</p>",
      markscheme: [
        // EN: Saturates the air in the tank with solvent vapour / stops the solvent evaporating from the paper (so the solvent front rises evenly).
        "용기 안 공기를 용매 증기로 포화시킨다 / 용매가 종이에서 증발하지 않게 한다 (그래서 용매 전선이 고르게 올라간다).",
        // EN: Prevents harmful / flammable vapour escaping into the room. (Accept: keeps the composition of a mixed solvent constant.)
        "해롭거나 / 불이 잘 붙는 증기가 실험실로 새어 나가지 않게 한다. (인정: 혼합 용매의 조성을 일정하게 유지한다.)",
      ],
    },

    // ── lab-chromatography-q009 · numeric · challenge · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q009": {
      // EN: <p>A spot moved 1.8 <span class="unit">cm</span> and the solvent front moved 9.0 <span class="unit">cm</span> from the baseline. Each distance has an uncertainty of ±0.1 <span class="unit">cm</span>.</p><p>Calculate the percentage uncertainty of the <i>R</i><sub>F</sub> value.</p>
      stem: "<p>출발선에서 점은 1.8 <span class=\"unit\">cm</span>, 용매 전선은 9.0 <span class=\"unit\">cm</span> 이동했어요. 각 거리의 불확도는 ±0.1 <span class=\"unit\">cm</span>예요.</p><p><i>R</i><sub>F</sub> 값의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> is a division, so add the percentage uncertainties of the two distances.
        "<i>R</i><sub>F</sub>는 나눗셈이므로 두 거리의 백분율 불확도를 더하세요.",
        // EN: (0.1 / 1.8) × 100 + (0.1 / 9.0) × 100
        "(0.1 / 1.8) × 100 + (0.1 / 9.0) × 100",
      ],
      // EN: <div class="worked__math">(0.1 / 1.8) × 100 = 5.56 %</div><div class="worked__math">(0.1 / 9.0) × 100 = 1.11 %</div><div class="worked__math">percentage uncertainty = 5.56 % + 1.11 % = <strong>6.7 %</strong></div><p>Most of the uncertainty comes from the short distance moved by the spot. A longer run would reduce it.</p>
      solution: "<div class=\"worked__math\">(0.1 / 1.8) × 100 = 5.56 %</div><div class=\"worked__math\">(0.1 / 9.0) × 100 = 1.11 %</div><div class=\"worked__math\">백분율 불확도 = 5.56 % + 1.11 % = <strong>6.7 %</strong></div><p>불확도의 대부분은 점이 이동한 짧은 거리에서 나와요. 더 길게 전개하면 줄어들어요.</p>",
    },

    // ── lab-chromatography-q010 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q010": {
      // EN: <p>A food colouring F and four permitted dyes were run on the same paper. The table shows the <i>R</i><sub>F</sub> values. The uncertainty of each value is ±0.02.</p><div class="table-scroll"><table class="data"><caption><i>R</i><sub>F</sub> values on one chromatogram</caption><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><i>R</i><sub>F</sub> value(s)</th></tr></thead><tbody><tr><th scope="row">F</th><td class="num">0.18, 0.47, 0.71</td></tr><tr><th scope="row">dye 1</th><td class="num">0.18</td></tr><tr><th scope="row">dye 2</th><td class="num">0.33</td></tr><tr><th scope="row">dye 3</th><td class="num">0.46</td></tr><tr><th scope="row">dye 4</th><td class="num">0.79</td></tr></tbody></table></div><p>Which conclusion is correct?</p>
      stem: "<p>식용 색소 F와 허가된 염료 4가지를 같은 종이에 전개했어요. 표는 <i>R</i><sub>F</sub> 값을 보여 줘요. 각 값의 불확도는 ±0.02예요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>크로마토그램 하나에서 얻은 <i>R</i><sub>F</sub> 값</caption><thead><tr><th scope=\"col\">시료</th><th scope=\"col\" class=\"num\"><i>R</i><sub>F</sub> 값</th></tr></thead><tbody><tr><th scope=\"row\">F</th><td class=\"num\">0.18, 0.47, 0.71</td></tr><tr><th scope=\"row\">염료 1</th><td class=\"num\">0.18</td></tr><tr><th scope=\"row\">염료 2</th><td class=\"num\">0.33</td></tr><tr><th scope=\"row\">염료 3</th><td class=\"num\">0.46</td></tr><tr><th scope=\"row\">염료 4</th><td class=\"num\">0.79</td></tr></tbody></table></div><p>옳은 결론은 어느 것인가요?</p>",
      options: [
        // EN: F contains dyes 1, 3 and 4.
        "F에는 염료 1, 3, 4가 들어 있어요.",
        // EN: F contains dyes 1 and 3 and one substance that is not dyes 1–4.
        "F에는 염료 1과 3, 그리고 염료 1–4가 아닌 물질 하나가 들어 있어요.",
        // EN: F contains dyes 1, 2 and 3.
        "F에는 염료 1, 2, 3이 들어 있어요.",
        // EN: F contains only dye 1, because it is the only exact match.
        "정확히 일치하는 것은 염료 1뿐이므로 F에는 염료 1만 들어 있어요.",
      ],
      hints: [
        // EN: Two values match if their difference is within the uncertainty.
        "두 값의 차이가 불확도 안에 있으면 일치하는 거예요.",
      ],
      // EN: <p>0.18 matches dye 1 exactly and 0.47 matches dye 3 (0.46) within ±0.02. 0.71 matches none of the dyes, so F also contains an unknown substance.</p>
      solution: "<p>0.18은 염료 1과 정확히 일치하고, 0.47은 ±0.02 안에서 염료 3 (0.46)과 일치해요. 0.71은 어떤 염료와도 일치하지 않으므로 F에는 모르는 물질도 들어 있어요.</p>",
      misconception: {
        // EN (option A): 0.71 and 0.79 differ by 0.08, which is far more than the ±0.02 uncertainty. They are different substances.
        "0": "0.71과 0.79는 0.08 차이가 나는데, 이는 ±0.02의 불확도보다 훨씬 커요. 서로 다른 물질이에요.",
        // EN (option C): No spot of F has an <i>R</i><sub>F</sub> near 0.33.
        "2": "F의 점 가운데 <i>R</i><sub>F</sub>가 0.33 근처인 것은 없어요.",
        // EN (option D): 0.47 and 0.46 differ by less than the uncertainty, so dye 3 matches as well.
        "3": "0.47과 0.46은 불확도보다 적게 차이 나므로 염료 3도 일치해요.",
      },
    },

    // ── lab-chromatography-q011 · short · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q011": {
      // EN: <p>Two components of a mixture give spots with <i>R</i><sub>F</sub> values of 0.92 and 0.95. Suggest <strong>two</strong> changes to the method that would improve the separation.</p>
      stem: "<p>혼합물의 두 성분이 <i>R</i><sub>F</sub> 값 0.92와 0.95인 점을 만들어요. 분리를 더 좋게 할 방법의 변화를 <strong>두 가지</strong> 제안하시오 (suggest).</p>",
      hints: [
        // EN: Both spots are near the front. What makes spots move less far?
        "두 점 모두 전선 근처에 있어요. 점이 덜 멀리 이동하게 하려면 어떻게 해야 할까요?",
        // EN: A greater distance travelled makes the gap between spots bigger.
        "이동한 거리가 길어지면 점 사이의 간격도 커져요.",
      ],
      // EN: <p>Spots near the front mean the components are attracted much more to the mobile phase. A less polar solvent lowers both <i>R</i><sub>F</sub> values and spreads them out. A longer run makes the same difference in <i>R</i><sub>F</sub> into a bigger distance.</p>
      solution: "<p>점이 전선 근처에 있다는 것은 성분이 이동상에 훨씬 더 끌린다는 뜻이에요. 극성이 더 작은 용매를 쓰면 두 <i>R</i><sub>F</sub> 값이 모두 작아지고 서로 벌어져요. 더 길게 전개하면 같은 <i>R</i><sub>F</sub> 차이가 더 큰 거리 차이가 돼요.</p>",
      // EN: <p>Use a less polar mobile phase, so both components are held back more by the polar stationary phase and move less far; their spots move apart. Use a longer piece of paper so the solvent can travel further. (Or: use TLC instead of paper; turn the paper 90° and run it again in a second solvent.)</p>
      answer: "<p>극성이 더 작은 이동상을 써서 두 성분이 극성 고정상에 더 많이 붙잡혀 덜 멀리 이동하게 해요. 그러면 두 점이 벌어져요. 더 긴 종이를 써서 용매가 더 멀리 이동하게 해요. (또는: 종이 대신 TLC를 써요. 종이를 90° 돌려 두 번째 용매로 다시 전개해요.)</p>",
      markscheme: [
        // EN: Change the solvent / use a less polar mobile phase.
        "용매를 바꾼다 / 극성이 더 작은 이동상을 쓴다.",
        // EN: Use longer paper / let the solvent run further / use TLC / run again at 90° in a different solvent. (Any one.)
        "더 긴 종이를 쓴다 / 용매를 더 멀리 전개한다 / TLC를 쓴다 / 90° 돌려 다른 용매로 다시 전개한다. (아무거나 하나.)",
      ],
    },

    // ── lab-chromatography-q012 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q012": {
      // EN: <p>A student takes the paper out of the tank but forgets to mark the solvent front. Ten minutes later the student marks the edge of the wet area. What is the effect on the calculated <i>R</i><sub>F</sub> values?</p>
      stem: "<p>한 학생이 종이를 전개 용기에서 꺼냈지만 용매 전선 표시를 잊었어요. 10분 뒤 학생은 젖은 부분의 가장자리를 표시해요. 계산한 <i>R</i><sub>F</sub> 값에 어떤 영향이 있나요?</p>",
      options: [
        // EN: They are too small.
        "너무 작아요.",
        // EN: They are too large.
        "너무 커요.",
        // EN: They are unchanged.
        "변하지 않아요.",
        // EN: Some are too large and some too small.
        "일부는 너무 크고 일부는 너무 작아요.",
      ],
      hints: [
        // EN: What happens to the wet area as the solvent evaporates?
        "용매가 증발하면 젖은 부분은 어떻게 될까요?",
        // EN: Is the front distance too big or too small?
        "전선의 거리는 너무 큰가요, 너무 작은가요?",
      ],
      // EN: <p>As the solvent evaporates, the wet area shrinks, so the front is marked too low. The front distance is too small, so every <i>R</i><sub>F</sub> is too large. This is a systematic error.</p>
      solution: "<p>용매가 증발하면 젖은 부분이 줄어들어서 전선이 너무 낮게 표시돼요. 전선의 거리가 너무 작으므로 모든 <i>R</i><sub>F</sub>가 너무 커요. 이것은 계통 오차예요.</p>",
      misconception: {
        // EN (option A): The front distance is the denominator. A smaller denominator gives a larger fraction.
        "0": "전선의 거리는 분모예요. 분모가 작아지면 분수는 커져요.",
        // EN (option C): The spots have stopped moving, but the visible edge of the wet area has moved down as the solvent evaporated.
        "2": "점은 이동을 멈췄지만, 용매가 증발하면서 젖은 부분의 보이는 가장자리는 아래로 내려왔어요.",
        // EN (option D): Every <i>R</i><sub>F</sub> is divided by the same wrong front distance, so they are all affected in the same direction.
        "3": "모든 <i>R</i><sub>F</sub>를 똑같이 잘못된 전선 거리로 나누므로 모두 같은 방향으로 영향을 받아요.",
      },
    },

    // ── lab-chromatography-q013 · multi · challenge · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q013": {
      // EN: <p>Which statements about <i>R</i><sub>F</sub> values are correct? Select all that apply.</p>
      stem: "<p><i>R</i><sub>F</sub> 값에 대한 설명으로 옳은 것은 어느 것인가요? 해당하는 것을 모두 고르세요.</p>",
      options: [
        // EN: An <i>R</i><sub>F</sub> value has no unit.
        "<i>R</i><sub>F</sub> 값에는 단위가 없어요.",
        // EN: An <i>R</i><sub>F</sub> value is always between 0 and 1.
        "<i>R</i><sub>F</sub> 값은 항상 0과 1 사이예요.",
        // EN: A substance has the same <i>R</i><sub>F</sub> value in any solvent.
        "어떤 물질은 어떤 용매에서든 <i>R</i><sub>F</sub> 값이 같아요.",
        // EN: A pure substance gives a single spot with one <i>R</i><sub>F</sub> value.
        "순물질은 <i>R</i><sub>F</sub> 값이 하나인 점 하나를 만들어요.",
        // EN: Two substances with the same <i>R</i><sub>F</sub> in one solvent must be the same substance.
        "한 용매에서 <i>R</i><sub>F</sub>가 같은 두 물질은 반드시 같은 물질이에요.",
      ],
      hints: [
        // EN: <i>R</i><sub>F</sub> is a ratio of two distances.
        "<i>R</i><sub>F</sub>는 두 거리의 비예요.",
        // EN: Which conditions affect how far a spot moves?
        "점이 이동하는 거리에 영향을 주는 조건은 무엇인가요?",
      ],
      // EN: <p><i>R</i><sub>F</sub> is a ratio of two lengths, so it has no unit, and a spot cannot pass the solvent front, so it is at most 1. It is only constant for fixed conditions. A match in one solvent is good evidence, not proof.</p>
      solution: "<p><i>R</i><sub>F</sub>는 두 길이의 비이므로 단위가 없고, 점은 용매 전선을 넘어갈 수 없으므로 최대 1이에요. 조건이 정해져 있을 때만 일정해요. 한 용매에서 일치하는 것은 좋은 증거이지 증명은 아니에요.</p>",
      misconception: {
        // EN (option C): <i>R</i><sub>F</sub> depends on the stationary phase, the solvent and the temperature. Change the solvent and it changes.
        "2": "<i>R</i><sub>F</sub>는 고정상, 용매, 온도에 따라 달라져요. 용매를 바꾸면 달라져요.",
        // EN (option E): Matching <i>R</i><sub>F</sub> values in one solvent suggest the same substance, but do not prove it. Running in a second solvent makes the evidence stronger.
        "4": "한 용매에서 <i>R</i><sub>F</sub> 값이 일치하면 같은 물질일 가능성이 있지만, 증명하지는 못해요. 두 번째 용매로 전개하면 증거가 더 강해져요.",
      },
    },

  }
});
