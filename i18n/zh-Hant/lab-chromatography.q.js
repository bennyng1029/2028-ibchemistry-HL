/* lab-chromatography.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-chromatography.q', {
  questions: {

    // ── lab-chromatography-q001 · numeric · foundation · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q001": {
      // EN: <p>On a chromatogram, the centre of a spot is 3.4 <span class="unit">cm</span> above the baseline. The solvent front is 7.9 <span class="unit">cm</span> above the baseline. Calculate the <i>R</i><sub>F</sub> value of the spot.</p>
      stem: "<p>在一張色層譜上，一個斑點的中心在基線以上 3.4 <span class=\"unit\">cm</span>，溶劑前沿在基線以上 7.9 <span class=\"unit\">cm</span>。計算 (calculate) 這個斑點的 <i>R</i><sub>F</sub> 值。</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.
        "<i>R</i><sub>F</sub> = 斑點移動的距離 ÷ 溶劑前沿移動的距離。",
        // EN: Both distances are already measured from the baseline. Divide 3.4 by 7.9.
        "兩個距離都已經由基線量起。把 3.4 除以 7.9。",
      ],
      // EN: <div class="worked__math"><i>R</i><sub>F</sub> = 3.4 <span class="unit">cm</span> / 7.9 <span class="unit">cm</span> = 0.430…</div><div class="worked__math"><i>R</i><sub>F</sub> = <strong>0.43</strong> (no unit)</div>
      solution: "<div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.4 <span class=\"unit\">cm</span> / 7.9 <span class=\"unit\">cm</span> = 0.430…</div><div class=\"worked__math\"><i>R</i><sub>F</sub> = <strong>0.43</strong>（沒有單位）</div>",
    },

    // ── lab-chromatography-q002 · numeric · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q002": {
      // EN: <p>A student placed a ruler with its zero at the bottom edge of a TLC plate and recorded these readings.</p><div class="table-scroll"><table class="data"><caption>Ruler readings</caption><thead><tr><th scope="col">Feature</th><th scope="col" class="num">Reading / cm</th></tr></thead><tbody><tr><th scope="row">baseline</th><td class="num">1.0</td></tr><tr><th scope="row">centre of spot X</th><td class="num">4.8</td></tr><tr><th scope="row">solvent front</th><td class="num">8.6</td></tr><tr><th scope="row">top edge of plate</th><td class="num">10.0</td></tr></tbody></table></div><p>Calculate the <i>R</i><sub>F</sub> value of spot X.</p>
      stem: "<p>某學生把直尺的零點對準薄層板的底邊，記錄了以下讀數。</p><div class=\"table-scroll\"><table class=\"data\"><caption>直尺讀數</caption><thead><tr><th scope=\"col\">位置</th><th scope=\"col\" class=\"num\">讀數 / cm</th></tr></thead><tbody><tr><th scope=\"row\">基線</th><td class=\"num\">1.0</td></tr><tr><th scope=\"row\">斑點 X 的中心</th><td class=\"num\">4.8</td></tr><tr><th scope=\"row\">溶劑前沿</th><td class=\"num\">8.6</td></tr><tr><th scope=\"row\">薄層板的頂邊</th><td class=\"num\">10.0</td></tr></tbody></table></div><p>計算 (calculate) 斑點 X 的 <i>R</i><sub>F</sub> 值。</p>",
      hints: [
        // EN: Distances are measured from the baseline, not from the bottom edge.
        "距離由基線量起，不是由底邊量起。",
        // EN: The top edge of the plate is not needed.
        "不需要用到薄層板的頂邊。",
      ],
      // EN: <div class="worked__math">spot: 4.8 − 1.0 = 3.8 <span class="unit">cm</span></div><div class="worked__math">front: 8.6 − 1.0 = 7.6 <span class="unit">cm</span></div><div class="worked__math"><i>R</i><sub>F</sub> = 3.8 / 7.6 = <strong>0.50</strong></div><p>M1 for both distances from the baseline, M2 for the answer. Using the readings directly gives 4.8 / 8.6 = 0.56, and dividing by the plate length gives 0.42: both are wrong.</p>
      solution: "<div class=\"worked__math\">斑點：4.8 − 1.0 = 3.8 <span class=\"unit\">cm</span></div><div class=\"worked__math\">前沿：8.6 − 1.0 = 7.6 <span class=\"unit\">cm</span></div><div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.8 / 7.6 = <strong>0.50</strong></div><p>M1 給兩個由基線量起的距離，M2 給答案。直接用讀數會得出 4.8 / 8.6 = 0.56，除以薄層板的長度會得出 0.42：兩者都是錯的。</p>",
    },

    // ── lab-chromatography-q003 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-chromatography-q003": {
      // EN: <p>Why is the baseline of a chromatogram drawn in pencil rather than ink?</p>
      stem: "<p>為甚麼色層譜的基線要用鉛筆而不用墨水畫？</p>",
      options: [
        // EN: Pencil lines are easier to see when the paper is wet.
        "紙濕了的時候，鉛筆線較容易看見。",
        // EN: Graphite does not dissolve in the solvent, but ink would dissolve and move up the paper.
        "石墨不會溶於溶劑，但墨水會溶解並沿紙向上移動。",
        // EN: Pencil can be rubbed out after the experiment.
        "實驗後可以把鉛筆線擦掉。",
        // EN: Ink would react with the substances being separated.
        "墨水會和要分離的物質反應。",
      ],
      hints: [
        // EN: Ink is itself a mixture of dyes.
        "墨水本身就是多種染料的混合物。",
      ],
      // EN: <p>Ink is a mixture of soluble dyes. It would dissolve in the mobile phase and give extra spots or smears. Graphite is insoluble, so the baseline stays put.</p>
      solution: "<p>墨水是多種可溶染料的混合物。它會溶於流動相，產生額外的斑點或污跡。石墨不溶，所以基線保持不動。</p>",
      misconception: {
        // EN (option A): Visibility is not the problem. Think about what the moving solvent does to the line.
        "0": "問題不在於看不看得見。想想移動的溶劑會對這條線造成甚麼影響。",
        // EN (option C): Rubbing out is not needed; the baseline is used for measuring afterwards.
        "2": "不需要擦掉基線；之後量度時還要用到它。",
        // EN (option D): Chromatography is a physical separation. The problem with ink is physical: it dissolves.
        "3": "色層法是物理分離。墨水的問題是物理性的：它會溶解。",
      },
    },

    // ── lab-chromatography-q004 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-chromatography-q004": {
      // EN: <p>A student pours solvent into a beaker so that the solvent level is 0.5 <span class="unit">cm</span> <strong>above</strong> the baseline. What will happen?</p>
      stem: "<p>某學生把溶劑倒進燒杯，使溶劑液面比基線<strong>高</strong> 0.5 <span class=\"unit\">cm</span>。會發生甚麼事？</p>",
      options: [
        // EN: The spots move up the paper faster.
        "斑點沿紙向上移動得較快。",
        // EN: The spots dissolve into the solvent in the beaker, so no chromatogram forms.
        "斑點溶進燒杯的溶劑中，所以不會形成色層譜。",
        // EN: The <i>R</i><sub>F</sub> values are all larger, but the order of the spots is the same.
        "所有 <i>R</i><sub>F</sub> 值都較大，但斑點的次序不變。",
        // EN: Nothing changes, because the solvent still rises up the paper.
        "沒有改變，因為溶劑仍然會沿紙上升。",
      ],
      hints: [
        // EN: Where does the mixture go when it is covered by a lot of solvent?
        "混合物被大量溶劑淹沒時，會去了哪裏？",
      ],
      // EN: <p>The spots are submerged, so the substances dissolve into the solvent in the beaker instead of being carried up the paper. The baseline must be above the solvent level.</p>
      solution: "<p>斑點浸在溶劑中，所以物質溶進燒杯的溶劑中，而不是被帶着沿紙向上移動。基線必須高於溶劑液面。</p>",
      misconception: {
        // EN (option A): The spots are under the solvent surface, so they are not carried up from the baseline at all.
        "0": "斑點在溶劑液面以下，所以根本不會從基線被帶上去。",
        // EN (option C): The problem is not the <i>R</i><sub>F</sub> value. The mixture leaves the paper altogether.
        "2": "問題不在於 <i>R</i><sub>F</sub> 值。混合物完全離開了紙張。",
        // EN (option D): The solvent does rise, but the mixture has already left the paper and spread into the bulk solvent.
        "3": "溶劑確實會上升，但混合物已經離開紙張，散進大量的溶劑中。",
      },
    },

    // ── lab-chromatography-q005 · short · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q005": {
      // EN: <p>Explain how paper chromatography separates the components of a mixture.</p>
      stem: "<p>解釋 (explain) 紙色層法怎樣把混合物的成分分開。</p>",
      hints: [
        // EN: Name the two phases.
        "寫出兩個相的名稱。",
        // EN: Why does one component move further than another in the same time?
        "為甚麼在相同時間內，一種成分會比另一種走得更遠？",
      ],
      // EN: <p>One mark for the two phases and the idea of distribution between them; one mark for <em>different</em> attractions leading to different rates of movement. "They have different R<sub>F</sub> values" restates the result, it does not explain it.</p>
      solution: "<p>一分給兩個相以及成分在兩相之間分佈的概念；一分給<em>不同的</em>吸引力導致不同的移動速率。「它們的 R<sub>F</sub> 值不同」只是重述結果，並沒有解釋。</p>",
      // EN: <p>The components are distributed between the stationary phase (water held in the paper) and the mobile phase (the solvent). Each component has a different relative attraction to the two phases, through intermolecular forces, so each moves up the paper at a different rate and they separate.</p>
      answer: "<p>各成分分佈在固定相（保留在紙中的水）和流動相（溶劑）之間。每種成分透過分子間引力對兩個相的相對吸引力不同，所以各自以不同的速率沿紙向上移動，因而分開。</p>",
      markscheme: [
        // EN: Components distribute / partition between the stationary phase and the mobile phase (or: are continually adsorbed and released).
        "成分在固定相和流動相之間分佈／分配（或：不斷被吸附和釋放）。",
        // EN: Components have different (relative) attractions to the two phases / different solubilities in the solvent, so they move at different speeds.
        "成分對兩個相的（相對）吸引力不同／在溶劑中的溶解度不同，所以以不同的速度移動。",
      ],
    },

    // ── lab-chromatography-q006 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q006": {
      // EN: <p>A mixture of three compounds is separated on a silica TLC plate (polar stationary phase) using a non-polar mobile phase. Which compound has the <strong>largest</strong> <i>R</i><sub>F</sub> value?</p>
      stem: "<p>用非極性的流動相，在矽石薄層板（極性固定相）上分離三種化合物的混合物。哪一種化合物的 <i>R</i><sub>F</sub> 值<strong>最大</strong>？</p>",
      options: [
        // EN: The compound with three –OH groups
        "有三個 –OH 基的化合物",
        // EN: The compound with one –OH group
        "有一個 –OH 基的化合物",
        // EN: The compound with only C–H and C–C bonds
        "只有 C–H 鍵和 C–C 鍵的化合物",
        // EN: All three have the same value, because they move with the same solvent.
        "三者的數值相同，因為它們隨同一種溶劑移動。",
      ],
      hints: [
        // EN: Which compound is attracted least to the polar silica?
        "哪一種化合物受極性矽石的吸引最弱？",
      ],
      // EN: <p>The hydrocarbon-like compound has only weak London (dispersion) forces with the polar silica and dissolves well in the non-polar solvent. It spends most time in the mobile phase and travels furthest.</p>
      solution: "<p>類似烴的化合物與極性矽石之間只有微弱的倫敦（色散）力，而且易溶於非極性溶劑。它大部分時間都在流動相中，所以走得最遠。</p>",
      misconception: {
        // EN (option A): Three –OH groups form many hydrogen bonds to the silica, so this compound is held back most. It has the smallest <i>R</i><sub>F</sub>.
        "0": "三個 –OH 基與矽石形成很多氫鍵，所以這種化合物被留住得最多。它的 <i>R</i><sub>F</sub> 值最小。",
        // EN (option B): One –OH group still hydrogen-bonds to the silica. This compound is held back more than one with no polar groups.
        "1": "一個 –OH 基仍然會與矽石形成氫鍵。這種化合物被留住得比沒有極性基的化合物多。",
        // EN (option D): They move in the same solvent, but their attractions to the stationary phase differ. That is why they separate.
        "3": "它們在同一種溶劑中移動，但對固定相的吸引力不同。這就是它們會分開的原因。",
      },
    },

    // ── lab-chromatography-q007 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q007": {
      // EN: <p>A TLC run with hexane gives spots very close to the baseline. The student repeats it with a 1 : 1 mixture of hexane and ethyl acetate, which is more polar. What happens to the <i>R</i><sub>F</sub> values?</p>
      stem: "<p>用己烷進行薄層色層法，得到的斑點非常接近基線。學生改用己烷和乙酸乙酯的 1 : 1 混合物重做，這種混合物的極性較強。<i>R</i><sub>F</sub> 值會怎樣？</p>",
      options: [
        // EN: They all decrease.
        "全部減小。",
        // EN: They all increase.
        "全部增大。",
        // EN: They stay the same, because <i>R</i><sub>F</sub> depends only on the substance.
        "保持不變，因為 <i>R</i><sub>F</sub> 只取決於物質。",
        // EN: The order of the spots is reversed.
        "斑點的次序倒轉。",
      ],
      hints: [
        // EN: Which phase does a more polar solvent compete with?
        "極性較強的溶劑和哪一個相競爭？",
      ],
      // EN: <p>The polar compounds are now attracted more strongly to the mobile phase, so they spend more time moving. Every spot moves further and every <i>R</i><sub>F</sub> increases, with the order unchanged.</p>
      solution: "<p>極性化合物現在受流動相較強的吸引，所以有較多時間在移動。每個斑點都走得更遠，每個 <i>R</i><sub>F</sub> 值都增大，次序不變。</p>",
      misconception: {
        // EN (option A): A more polar mobile phase competes better with the polar silica for the compounds, so they move further, not less.
        "0": "極性較強的流動相能更有效地與極性矽石爭奪化合物，所以化合物走得更遠，而不是更近。",
        // EN (option C): <i>R</i><sub>F</sub> depends on the substance <em>and</em> on the conditions: the stationary phase, the solvent and the temperature.
        "2": "<i>R</i><sub>F</sub> 取決於物質，<em>也</em>取決於條件：固定相、溶劑和溫度。",
        // EN (option D): The stationary phase has not changed, so the most polar compound is still held most strongly. The order stays the same.
        "3": "固定相沒有改變，所以極性最強的化合物仍然被留得最牢。次序保持不變。",
      },
    },

    // ── lab-chromatography-q008 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-chromatography-q008": {
      // EN: <p>State <strong>two</strong> reasons why a lid is placed on the chromatography tank during the run.</p>
      stem: "<p>寫出 (state) 進行期間要在色層槽上加蓋的<strong>兩個</strong>原因。</p>",
      hints: [
        // EN: Think about the paper as the solvent rises through it.
        "想想溶劑沿紙上升時紙張的情況。",
        // EN: Think about safety too.
        "也想想安全。",
      ],
      // EN: <p>Without a lid, solvent evaporates from the surface of the paper, so the front moves slowly and unevenly and the <i>R</i><sub>F</sub> values are not reproducible. Many mobile phases are also volatile and flammable.</p>
      solution: "<p>沒有蓋子，溶劑會從紙的表面蒸發，所以前沿移動得慢而不均勻，<i>R</i><sub>F</sub> 值無法重現。很多流動相也易揮發和易燃。</p>",
      // EN: <p>The tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises (the front rises steadily and the results are reproducible). It also keeps flammable or harmful solvent vapour in the tank.</p>
      answer: "<p>色層槽充滿溶劑蒸氣，所以溶劑沿紙上升時不會從紙上蒸發（前沿穩定上升，結果可以重現）。蓋子也把易燃或有害的溶劑蒸氣留在槽內。</p>",
      markscheme: [
        // EN: Saturates the air in the tank with solvent vapour / stops the solvent evaporating from the paper (so the solvent front rises evenly).
        "使槽內的空氣充滿溶劑蒸氣而飽和／防止溶劑從紙上蒸發（所以溶劑前沿均勻上升）。",
        // EN: Prevents harmful / flammable vapour escaping into the room. (Accept: keeps the composition of a mixed solvent constant.)
        "防止有害／易燃的蒸氣散到房間內。（也接受：保持混合溶劑的組成不變。）",
      ],
    },

    // ── lab-chromatography-q009 · numeric · challenge · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q009": {
      // EN: <p>A spot moved 1.8 <span class="unit">cm</span> and the solvent front moved 9.0 <span class="unit">cm</span> from the baseline. Each distance has an uncertainty of ±0.1 <span class="unit">cm</span>.</p><p>Calculate the percentage uncertainty of the <i>R</i><sub>F</sub> value.</p>
      stem: "<p>一個斑點由基線移動了 1.8 <span class=\"unit\">cm</span>，溶劑前沿移動了 9.0 <span class=\"unit\">cm</span>。每個距離的不確定度都是 ±0.1 <span class=\"unit\">cm</span>。</p><p>計算 (calculate) <i>R</i><sub>F</sub> 值的百分不確定度。</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> is a division, so add the percentage uncertainties of the two distances.
        "<i>R</i><sub>F</sub> 是一個除法，所以要把兩個距離的百分不確定度相加。",
        // EN: (0.1 / 1.8) × 100 + (0.1 / 9.0) × 100
        "(0.1 / 1.8) × 100 + (0.1 / 9.0) × 100",
      ],
      // EN: <div class="worked__math">(0.1 / 1.8) × 100 = 5.56 %</div><div class="worked__math">(0.1 / 9.0) × 100 = 1.11 %</div><div class="worked__math">percentage uncertainty = 5.56 % + 1.11 % = <strong>6.7 %</strong></div><p>Most of the uncertainty comes from the short distance moved by the spot. A longer run would reduce it.</p>
      solution: "<div class=\"worked__math\">(0.1 / 1.8) × 100 = 5.56 %</div><div class=\"worked__math\">(0.1 / 9.0) × 100 = 1.11 %</div><div class=\"worked__math\">百分不確定度 = 5.56 % + 1.11 % = <strong>6.7 %</strong></div><p>大部分不確定度來自斑點移動的短距離。進行得更長可以減少不確定度。</p>",
    },

    // ── lab-chromatography-q010 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q010": {
      // EN: <p>A food colouring F and four permitted dyes were run on the same paper. The table shows the <i>R</i><sub>F</sub> values. The uncertainty of each value is ±0.02.</p><div class="table-scroll"><table class="data"><caption><i>R</i><sub>F</sub> values on one chromatogram</caption><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><i>R</i><sub>F</sub> value(s)</th></tr></thead><tbody><tr><th scope="row">F</th><td class="num">0.18, 0.47, 0.71</td></tr><tr><th scope="row">dye 1</th><td class="num">0.18</td></tr><tr><th scope="row">dye 2</th><td class="num">0.33</td></tr><tr><th scope="row">dye 3</th><td class="num">0.46</td></tr><tr><th scope="row">dye 4</th><td class="num">0.79</td></tr></tbody></table></div><p>Which conclusion is correct?</p>
      stem: "<p>在同一張紙上進行一種食用色素 F 和四種准許使用的染料的色層分析。下表列出 <i>R</i><sub>F</sub> 值。每個數值的不確定度是 ±0.02。</p><div class=\"table-scroll\"><table class=\"data\"><caption>同一張色層譜上的 <i>R</i><sub>F</sub> 值</caption><thead><tr><th scope=\"col\">樣本</th><th scope=\"col\" class=\"num\"><i>R</i><sub>F</sub> 值</th></tr></thead><tbody><tr><th scope=\"row\">F</th><td class=\"num\">0.18, 0.47, 0.71</td></tr><tr><th scope=\"row\">染料 1</th><td class=\"num\">0.18</td></tr><tr><th scope=\"row\">染料 2</th><td class=\"num\">0.33</td></tr><tr><th scope=\"row\">染料 3</th><td class=\"num\">0.46</td></tr><tr><th scope=\"row\">染料 4</th><td class=\"num\">0.79</td></tr></tbody></table></div><p>哪一個結論是正確的？</p>",
      options: [
        // EN: F contains dyes 1, 3 and 4.
        "F 含有染料 1、3 和 4。",
        // EN: F contains dyes 1 and 3 and one substance that is not dyes 1–4.
        "F 含有染料 1 和 3，以及一種不是染料 1–4 的物質。",
        // EN: F contains dyes 1, 2 and 3.
        "F 含有染料 1、2 和 3。",
        // EN: F contains only dye 1, because it is the only exact match.
        "F 只含有染料 1，因為只有它完全相符。",
      ],
      hints: [
        // EN: Two values match if their difference is within the uncertainty.
        "如果兩個數值的差異在不確定度之內，它們就相符。",
      ],
      // EN: <p>0.18 matches dye 1 exactly and 0.47 matches dye 3 (0.46) within ±0.02. 0.71 matches none of the dyes, so F also contains an unknown substance.</p>
      solution: "<p>0.18 與染料 1 完全相符，0.47 與染料 3 (0.46) 在 ±0.02 之內相符。0.71 與任何染料都不相符，所以 F 還含有一種未知物質。</p>",
      misconception: {
        // EN (option A): 0.71 and 0.79 differ by 0.08, which is far more than the ±0.02 uncertainty. They are different substances.
        "0": "0.71 和 0.79 相差 0.08，遠大於 ±0.02 的不確定度。它們是不同的物質。",
        // EN (option C): No spot of F has an <i>R</i><sub>F</sub> near 0.33.
        "2": "F 沒有任何斑點的 <i>R</i><sub>F</sub> 值接近 0.33。",
        // EN (option D): 0.47 and 0.46 differ by less than the uncertainty, so dye 3 matches as well.
        "3": "0.47 和 0.46 的差異小於不確定度，所以染料 3 也相符。",
      },
    },

    // ── lab-chromatography-q011 · short · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q011": {
      // EN: <p>Two components of a mixture give spots with <i>R</i><sub>F</sub> values of 0.92 and 0.95. Suggest <strong>two</strong> changes to the method that would improve the separation.</p>
      stem: "<p>混合物的兩種成分產生的斑點，<i>R</i><sub>F</sub> 值分別是 0.92 和 0.95。提出 (suggest) 實驗方法的<strong>兩項</strong>改變，以改進分離效果。</p>",
      hints: [
        // EN: Both spots are near the front. What makes spots move less far?
        "兩個斑點都接近前沿。怎樣可以使斑點走得較近？",
        // EN: A greater distance travelled makes the gap between spots bigger.
        "移動的距離越長，斑點之間的間距就越大。",
      ],
      // EN: <p>Spots near the front mean the components are attracted much more to the mobile phase. A less polar solvent lowers both <i>R</i><sub>F</sub> values and spreads them out. A longer run makes the same difference in <i>R</i><sub>F</sub> into a bigger distance.</p>
      solution: "<p>斑點接近前沿，表示成分受流動相的吸引強得多。極性較弱的溶劑會使兩個 <i>R</i><sub>F</sub> 值都降低，並把它們分開。進行得更長，可以把同樣的 <i>R</i><sub>F</sub> 差異變成更大的距離。</p>",
      // EN: <p>Use a less polar mobile phase, so both components are held back more by the polar stationary phase and move less far; their spots move apart. Use a longer piece of paper so the solvent can travel further. (Or: use TLC instead of paper; turn the paper 90° and run it again in a second solvent.)</p>
      answer: "<p>使用極性較弱的流動相，使兩種成分都被極性固定相留住得更多，走得較近；它們的斑點就會分開。使用較長的紙，讓溶劑可以走得更遠。（或：用薄層色層法代替紙色層法；把紙轉 90°，再用第二種溶劑進行一次。）</p>",
      markscheme: [
        // EN: Change the solvent / use a less polar mobile phase.
        "改變溶劑／使用極性較弱的流動相。",
        // EN: Use longer paper / let the solvent run further / use TLC / run again at 90° in a different solvent. (Any one.)
        "用較長的紙／讓溶劑走得更遠／用薄層色層法／轉 90° 後用另一種溶劑再進行一次。（任何一項。）",
      ],
    },

    // ── lab-chromatography-q012 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q012": {
      // EN: <p>A student takes the paper out of the tank but forgets to mark the solvent front. Ten minutes later the student marks the edge of the wet area. What is the effect on the calculated <i>R</i><sub>F</sub> values?</p>
      stem: "<p>某學生從色層槽中取出紙張，但忘記標出溶劑前沿。十分鐘後，學生標出濕區的邊緣。這對計算出來的 <i>R</i><sub>F</sub> 值有甚麼影響？</p>",
      options: [
        // EN: They are too small.
        "數值過小。",
        // EN: They are too large.
        "數值過大。",
        // EN: They are unchanged.
        "數值不變。",
        // EN: Some are too large and some too small.
        "有些過大，有些過小。",
      ],
      hints: [
        // EN: What happens to the wet area as the solvent evaporates?
        "溶劑蒸發時，濕區會怎樣？",
        // EN: Is the front distance too big or too small?
        "前沿的距離是過大還是過小？",
      ],
      // EN: <p>As the solvent evaporates, the wet area shrinks, so the front is marked too low. The front distance is too small, so every <i>R</i><sub>F</sub> is too large. This is a systematic error.</p>
      solution: "<p>溶劑蒸發時，濕區會縮小，所以前沿標得太低。前沿的距離過小，所以每個 <i>R</i><sub>F</sub> 值都過大。這是系統誤差。</p>",
      misconception: {
        // EN (option A): The front distance is the denominator. A smaller denominator gives a larger fraction.
        "0": "前沿的距離是分母。分母較小，分數就較大。",
        // EN (option C): The spots have stopped moving, but the visible edge of the wet area has moved down as the solvent evaporated.
        "2": "斑點已經停止移動，但溶劑蒸發時，濕區可見的邊緣向下移了。",
        // EN (option D): Every <i>R</i><sub>F</sub> is divided by the same wrong front distance, so they are all affected in the same direction.
        "3": "每個 <i>R</i><sub>F</sub> 都除以同一個錯誤的前沿距離，所以全都向同一方向受影響。",
      },
    },

    // ── lab-chromatography-q013 · multi · challenge · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q013": {
      // EN: <p>Which statements about <i>R</i><sub>F</sub> values are correct? Select all that apply.</p>
      stem: "<p>以下哪些有關 <i>R</i><sub>F</sub> 值的敘述是正確的？選出所有正確選項。</p>",
      options: [
        // EN: An <i>R</i><sub>F</sub> value has no unit.
        "<i>R</i><sub>F</sub> 值沒有單位。",
        // EN: An <i>R</i><sub>F</sub> value is always between 0 and 1.
        "<i>R</i><sub>F</sub> 值一定在 0 和 1 之間。",
        // EN: A substance has the same <i>R</i><sub>F</sub> value in any solvent.
        "一種物質在任何溶劑中的 <i>R</i><sub>F</sub> 值都相同。",
        // EN: A pure substance gives a single spot with one <i>R</i><sub>F</sub> value.
        "純物質只產生一個斑點，有一個 <i>R</i><sub>F</sub> 值。",
        // EN: Two substances with the same <i>R</i><sub>F</sub> in one solvent must be the same substance.
        "在一種溶劑中 <i>R</i><sub>F</sub> 值相同的兩種物質，一定是同一種物質。",
      ],
      hints: [
        // EN: <i>R</i><sub>F</sub> is a ratio of two distances.
        "<i>R</i><sub>F</sub> 是兩個距離的比值。",
        // EN: Which conditions affect how far a spot moves?
        "哪些條件會影響斑點移動的距離？",
      ],
      // EN: <p><i>R</i><sub>F</sub> is a ratio of two lengths, so it has no unit, and a spot cannot pass the solvent front, so it is at most 1. It is only constant for fixed conditions. A match in one solvent is good evidence, not proof.</p>
      solution: "<p><i>R</i><sub>F</sub> 是兩個長度的比值，所以沒有單位；斑點不可能越過溶劑前沿，所以它最大是 1。只有條件固定時，它才是常數。在一種溶劑中相符是有力的證據，但不是證明。</p>",
      misconception: {
        // EN (option C): <i>R</i><sub>F</sub> depends on the stationary phase, the solvent and the temperature. Change the solvent and it changes.
        "2": "<i>R</i><sub>F</sub> 取決於固定相、溶劑和溫度。改變溶劑，它就會改變。",
        // EN (option E): Matching <i>R</i><sub>F</sub> values in one solvent suggest the same substance, but do not prove it. Running in a second solvent makes the evidence stronger.
        "4": "在一種溶劑中 <i>R</i><sub>F</sub> 值相符，顯示可能是同一種物質，但不能證明。在第二種溶劑中再進行一次，證據會更有力。",
      },
    },

  }
});
