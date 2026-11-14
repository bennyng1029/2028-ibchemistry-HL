/* lab-molar-mass-gas.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-molar-mass-gas.q', {
  questions: {

    // ── lab-molar-mass-gas-q001 · numeric · foundation · SL · Structure 1.4.6 · 2 marks
    "lab-molar-mass-gas-q001": {
      // EN: <p>0.0850 g of magnesium reacts with excess hydrochloric acid.</p><p><span class="chem">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>Calculate the volume of hydrogen produced at STP, in <span class="unit">cm3</span>.</p>
      stem: "<p>마그네슘 0.0850 g이 과량의 염산과 반응해요.</p><p><span class=\"chem\">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>STP(표준 온도와 압력)에서 생기는 수소의 부피를 <span class=\"unit\">cm3</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Find the amount of magnesium. The equation gives the amount of hydrogen.
        "마그네슘의 양을 구해요. 반응식에서 수소의 양을 알 수 있어요.",
        // EN: At STP one mole of an ideal gas occupies 22.7 dm³.
        "STP에서 이상 기체 1몰은 22.7 dm³를 차지해요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class="worked__math"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>
      solution: "<div class=\"worked__math\"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class=\"worked__math\"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>",
    },

    // ── lab-molar-mass-gas-q002 · numeric · foundation · SL · Structure 1.5.3 · 2 marks
    "lab-molar-mass-gas-q002": {
      // EN: <p>In an experiment, 0.0620 g of magnesium reacts with excess acid and gives 63.5 <span class="unit">cm3</span> of hydrogen at room temperature and pressure. Calculate the molar volume of hydrogen under these conditions, in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>어떤 실험에서 마그네슘 0.0620 g이 과량의 산과 반응해 실온·대기압에서 수소 63.5 <span class=\"unit\">cm3</span>를 만들어요. 이 조건에서 수소의 몰 부피를 <span class=\"unit\">dm3 mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: One mole of Mg gives one mole of H₂.
        "Mg 1몰에서 H₂ 1몰이 생겨요.",
        // EN: Molar volume = volume in dm³ ÷ amount in mol.
        "몰 부피 = dm³ 단위 부피 ÷ mol 단위 양.",
      ],
      // EN: <div class="worked__math"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>
      solution: "<div class=\"worked__math\"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class=\"worked__math\"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>",
    },

    // ── lab-molar-mass-gas-q003 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "lab-molar-mass-gas-q003": {
      // EN: <p>A student calculates the molar mass of a vapour using <i>M</i> = <i>mRT</i> / <i>PV</i> with <i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>. The mass is in g and the temperature in K, but the student uses the pressure in kPa and the volume in <span class="unit">cm3</span>. How does the student’s answer compare with the correct value?</p>
      stem: "<p>한 학생이 <i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>과 <i>M</i> = <i>mRT</i> / <i>PV</i>로 증기의 몰 질량을 계산해요. 질량은 g, 온도는 K로 썼지만, 압력은 kPa, 부피는 <span class=\"unit\">cm3</span>로 썼어요. 학생의 답은 올바른 값과 비교해 어떤가요?</p>",
      options: [
        // EN: It is 1000 times too large.
        "1000배 너무 크다.",
        // EN: It is 1000 times too small.
        "1000배 너무 작다.",
        // EN: It is 10<sup>6</sup> times too small.
        "10<sup>6</sup>배 너무 작다.",
        // EN: It is correct, because the units cancel.
        "단위가 약분되므로 맞다.",
      ],
      hints: [
        // EN: 1 kPa = 10³ Pa and 1 cm³ = 10⁻⁶ m³. What is 1 kPa cm³ in Pa m³?
        "1 kPa = 10³ Pa이고 1 cm³ = 10⁻⁶ m³예요. 1 kPa cm³는 몇 Pa m³일까요?",
      ],
      // EN: <p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup>. So the number used for <i>PV</i> is 1000 times larger than the SI value. <i>PV</i> is in the denominator, so <i>M</i> comes out 1000 times too small.</p>
      solution: "<p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup>. 따라서 <i>PV</i>에 쓴 수가 SI 값보다 1000배 커요. <i>PV</i>는 분모에 있으므로 <i>M</i>은 1000배 너무 작게 나와요.</p>",
      misconception: {
        // EN (option A): Check the direction. kPa × cm³ gives a number for <i>PV</i> that is 1000 times larger than Pa × m³. <i>PV</i> is on the bottom of the fraction.
        "0": "방향을 확인해 봐요. kPa × cm³로 구한 <i>PV</i>의 수는 Pa × m³보다 1000배 커요. <i>PV</i>는 분수의 아래쪽에 있어요.",
        // EN (option C): The two conversions partly cancel: a pressure in kPa is a number 10³ times smaller than in Pa, but a volume in cm³ is a number 10⁶ times larger than in m³. Overall <i>PV</i> is 10³ times too big as a number.
        "2": "두 단위 변환이 일부 상쇄돼요: kPa로 나타낸 압력의 수는 Pa보다 10³배 작지만, cm³로 나타낸 부피의 수는 m³보다 10⁶배 커요. 전체적으로 <i>PV</i>의 수가 10³배 너무 커요.",
        // EN (option D): <i>R</i> = 8.31 is in J K⁻¹ mol⁻¹, and 1 J = 1 Pa m³. Units of <i>P</i> and <i>V</i> must match that.
        "3": "<i>R</i> = 8.31의 단위는 J K⁻¹ mol⁻¹이고, 1 J = 1 Pa m³예요. <i>P</i>와 <i>V</i>의 단위를 이에 맞춰야 해요.",
      },
    },

    // ── lab-molar-mass-gas-q004 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "lab-molar-mass-gas-q004": {
      // EN: <p>0.211 g of a volatile liquid is injected into a gas syringe in a heating jacket at 80.0 °C. The volume of vapour formed is 73.5 <span class="unit">cm3</span> at 99.8 kPa. Calculate the molar mass of the liquid, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>휘발성 액체 0.211 g을 80.0 °C의 가열 재킷 속 기체 주사기에 주입해요. 생긴 증기의 부피는 99.8 kPa에서 73.5 <span class=\"unit\">cm3</span>예요. 이 액체의 몰 질량을 <span class=\"unit\">g mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Convert to Pa, m³ and K first.
        "먼저 Pa, m³, K로 바꿔요.",
        // EN: <i>M</i> = <i>mRT</i> / <i>PV</i>.
        "<i>M</i> = <i>mRT</i> / <i>PV</i>.",
      ],
      // EN: <div class="worked__math"><i>T</i> = 80.0 + 273.15 = 353.15 K; <i>P</i> = 9.98 × 10<sup>4</sup> Pa; <i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class="worked__math"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>M1 for the unit conversions, M2 for the amount, M3 for the answer. A correct final answer scores all three.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 80.0 + 273.15 = 353.15 K; <i>P</i> = 9.98 × 10<sup>4</sup> Pa; <i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class=\"worked__math\"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class=\"worked__math\"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>M1은 단위 변환, M2는 양, M3은 답이에요. 최종 답이 맞으면 3점을 모두 받아요.</p>",
    },

    // ── lab-molar-mass-gas-q005 · short · exam · SL · Structure 1.5.2 · 2 marks
    "lab-molar-mass-gas-q005": {
      // EN: <p>In the volatile-liquid method, the heating jacket is set at least 20 °C above the boiling point of the liquid. Explain <strong>two</strong> reasons for this.</p>
      stem: "<p>휘발성 액체 방법에서는 가열 재킷을 액체의 끓는점보다 적어도 20 °C 높게 맞춰요. 그 이유를 <strong>두 가지</strong> 설명하시오 (explain).</p>",
      hints: [
        // EN: What would happen to a drop of liquid that does not evaporate?
        "증발하지 않은 액체 방울은 어떻게 될까요?",
        // EN: Under which conditions does a real gas deviate from ideal behaviour?
        "실제 기체는 어떤 조건에서 이상 기체의 행동에서 벗어날까요?",
      ],
      // EN: <p>All of the liquid must vaporize; any liquid left over means the volume is too small. Far above its boiling point the vapour behaves more like an ideal gas, because the particles move faster and the intermolecular forces become negligible, so <i>PV</i> = <i>nRT</i> applies.</p>
      answer: "<p>액체가 모두 기화해야 해요. 액체가 남아 있으면 부피가 너무 작아요. 끓는점보다 훨씬 높은 온도에서는 입자가 더 빨리 움직이고 분자 간 힘을 무시할 수 있게 되어 증기가 이상 기체처럼 행동하므로, <i>PV</i> = <i>nRT</i>를 쓸 수 있어요.</p>",
      markscheme: [
        // EN: So that all the liquid vaporizes / no liquid remains (otherwise <i>V</i> is too small and <i>M</i> too high).
        "액체가 모두 기화하도록 / 액체가 남지 않도록 (그렇지 않으면 <i>V</i>가 너무 작고 <i>M</i>이 너무 높다).",
        // EN: Close to the boiling point the intermolecular forces are significant / the vapour is not ideal; well above it the vapour behaves (more) ideally.
        "끓는점 가까이에서는 분자 간 힘이 무시할 수 없다 / 증기가 이상 기체가 아니다; 끓는점보다 훨씬 높으면 증기가 (더) 이상 기체처럼 행동한다.",
      ],
    },

    // ── lab-molar-mass-gas-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-molar-mass-gas-q006": {
      // EN: <p>A student uses magnesium ribbon with a dull coating of magnesium oxide, without cleaning it, to find the molar volume of hydrogen. How is the result affected?</p>
      stem: "<p>한 학생이 산화 마그네슘으로 칙칙하게 덮인 마그네슘 리본을 닦지 않고 써서 수소의 몰 부피를 구해요. 결과는 어떤 영향을 받나요?</p>",
      options: [
        // EN: The molar volume is too low.
        "몰 부피가 너무 낮다.",
        // EN: The molar volume is too high.
        "몰 부피가 너무 높다.",
        // EN: No effect, because magnesium oxide also reacts with the acid.
        "산화 마그네슘도 산과 반응하므로 영향이 없다.",
        // EN: No effect, because the acid is in excess.
        "산이 과량이므로 영향이 없다.",
      ],
      hints: [
        // EN: Does magnesium oxide produce hydrogen when it reacts with acid?
        "산화 마그네슘이 산과 반응하면 수소가 생길까요?",
      ],
      // EN: <p>Part of the weighed mass is MgO, which reacts to give MgCl<sub>2</sub> and water but no hydrogen. The student calculates the amount of hydrogen from the full mass, so the amount used is too large and the volume measured too small for it. The molar volume, <i>V</i> ÷ <i>n</i>, is too low.</p>
      solution: "<p>잰 질량의 일부는 MgO인데, MgO는 반응해서 MgCl<sub>2</sub>와 물이 되지만 수소는 만들지 않아요. 학생은 전체 질량으로 수소의 양을 계산하므로, 쓴 양이 너무 크고 그에 비해 측정한 부피가 너무 작아요. 몰 부피 <i>V</i> ÷ <i>n</i>이 너무 낮아요.</p>",
      misconception: {
        // EN (option B): Follow the chain. The oxide adds mass but no hydrogen. Less gas for the same recorded mass means a smaller volume per mole.
        "1": "순서대로 따라가 봐요. 산화물은 질량은 더하지만 수소는 만들지 않아요. 기록한 질량이 같은데 기체가 적으면 1몰당 부피가 작아져요.",
        // EN (option C): Magnesium oxide does react with the acid, but it forms magnesium chloride and water, not hydrogen.
        "2": "산화 마그네슘은 산과 반응하지만, 수소가 아니라 염화 마그네슘과 물이 생겨요.",
        // EN (option D): Excess acid makes sure all the solid reacts. It cannot make the oxide produce hydrogen.
        "3": "산이 과량이면 고체가 모두 반응해요. 그렇다고 산화물이 수소를 만들게 할 수는 없어요.",
      },
    },

    // ── lab-molar-mass-gas-q007 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-molar-mass-gas-q007": {
      // EN: <p>The reaction of magnesium with hydrochloric acid is exothermic. A student reads the gas syringe as soon as the fizzing stops, while the flask is still warm, and uses the room temperature in the calculation. What is the effect on the molar volume at room conditions?</p>
      stem: "<p>마그네슘과 염산의 반응은 발열 반응이에요. 한 학생이 플라스크가 아직 따뜻한데 거품이 멈추자마자 기체 주사기를 읽고, 계산에는 실온을 써요. 실온·대기압에서의 몰 부피는 어떤 영향을 받나요?</p>",
      options: [
        // EN: It is too high, because warm gas occupies a larger volume.
        "따뜻한 기체는 부피가 더 크므로 너무 높다.",
        // EN: It is too low, because warm gas occupies a smaller volume.
        "따뜻한 기체는 부피가 더 작으므로 너무 낮다.",
        // EN: It is too low, because less hydrogen is produced at a higher temperature.
        "온도가 높으면 수소가 적게 생기므로 너무 낮다.",
        // EN: No effect, because the amount of hydrogen is the same.
        "수소의 양이 같으므로 영향이 없다.",
      ],
      hints: [
        // EN: At constant pressure, how does the volume of a gas change with temperature?
        "압력이 일정할 때 기체의 부피는 온도에 따라 어떻게 변할까요?",
      ],
      // EN: <p>The amount of hydrogen is fixed by the magnesium. Warm gas has a larger volume than the same gas at room temperature, so the volume read is too large and <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> is too high. Wait for the flask to cool before reading.</p>
      solution: "<p>수소의 양은 마그네슘으로 정해져요. 따뜻한 기체는 같은 기체가 실온에 있을 때보다 부피가 크므로, 읽은 부피가 너무 크고 <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i>이 너무 높아요. 플라스크가 식을 때까지 기다렸다가 읽으세요.</p>",
      misconception: {
        // EN (option B): At constant pressure, volume is proportional to the absolute temperature. Warmer gas takes up more space, not less.
        "1": "압력이 일정하면 부피는 절대 온도에 비례해요. 따뜻한 기체는 부피를 더 적게가 아니라 더 많이 차지해요.",
        // EN (option C): The amount of hydrogen depends only on the mass of magnesium. Temperature changes the volume that amount occupies.
        "2": "수소의 양은 마그네슘의 질량에만 달려 있어요. 온도는 그 양이 차지하는 부피를 바꿔요.",
        // EN (option D): The amount is the same, but the volume read is not the volume at room temperature. That volume is larger.
        "3": "양은 같지만, 읽은 부피는 실온에서의 부피가 아니에요. 그 부피가 더 커요.",
      },
    },

    // ── lab-molar-mass-gas-q008 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "lab-molar-mass-gas-q008": {
      // EN: <p>Data from a volatile-liquid experiment:</p><ul><li>mass of liquid (two weighings) = 0.125 ± 0.002 g</li><li>volume of vapour (two readings) = 62.0 ± 1.0 <span class="unit">cm3</span></li><li>temperature = 371.2 ± 0.5 K</li><li>pressure = 100.5 ± 0.1 kPa</li></ul><p>Calculate the percentage uncertainty in the molar mass calculated with <i>M</i> = <i>mRT</i> / <i>PV</i>.</p>
      stem: "<p>휘발성 액체 실험의 자료:</p><ul><li>액체의 질량 (두 번 측정) = 0.125 ± 0.002 g</li><li>증기의 부피 (두 번 읽기) = 62.0 ± 1.0 <span class=\"unit\">cm3</span></li><li>온도 = 371.2 ± 0.5 K</li><li>압력 = 100.5 ± 0.1 kPa</li></ul><p><i>M</i> = <i>mRT</i> / <i>PV</i>로 계산한 몰 질량의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: For products and quotients, add the percentage uncertainties.
        "곱과 몫에서는 백분율 불확도를 더해요.",
        // EN: <i>R</i> is a constant, so it has no uncertainty.
        "<i>R</i>은 상수이므로 불확도가 없어요.",
      ],
      // EN: <div class="worked__math">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class="worked__math">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class="worked__math">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %; %<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class="worked__math">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>
      solution: "<div class=\"worked__math\">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class=\"worked__math\">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class=\"worked__math\">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %; %<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class=\"worked__math\">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>",
    },

    // ── lab-molar-mass-gas-q009 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "lab-molar-mass-gas-q009": {
      // EN: <p>A student’s molar volume of hydrogen is 24.6 <span class="unit">dm3 mol-1</span> at 22.0 °C and 101.5 kPa. Calculate the molar volume this corresponds to at STP (273.15 K and 100 kPa), in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>한 학생이 구한 수소의 몰 부피는 22.0 °C, 101.5 kPa에서 24.6 <span class=\"unit\">dm3 mol-1</span>예요. 이 값에 해당하는 STP(273.15 K, 100 kPa)에서의 몰 부피를 <span class=\"unit\">dm3 mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: Use <i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂ with temperatures in kelvin.
        "<i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂를 쓰고, 온도는 켈빈으로 써요.",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class="worked__math"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>The data booklet value is 22.7 dm<sup>3</sup> mol<sup>−1</sup>, so this result is 1.8 % high.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class=\"worked__math\"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>데이터 부클릿 값은 22.7 dm<sup>3</sup> mol<sup>−1</sup>이므로, 이 결과는 1.8 % 높아요.</p>",
    },

    // ── lab-molar-mass-gas-q010 · short · challenge · SL · Structure 1.5.4 · 4 marks
    "lab-molar-mass-gas-q010": {
      // EN: <p>A student releases butane from a gas lighter into an upturned measuring cylinder full of water. The lighter is weighed before and after. The student’s molar mass for butane is 52.6 g mol<sup>−1</sup>; the accepted value is 58.14 g mol<sup>−1</sup>. Suggest <strong>two</strong> reasons why the result is too low, and an improvement for each.</p>
      stem: "<p>한 학생이 가스 라이터의 butane을 물을 가득 채워 거꾸로 세운 눈금실린더 속으로 내보내요. 라이터의 질량은 전후에 재요. 학생이 구한 butane의 몰 질량은 52.6 g mol<sup>−1</sup>이고, 인정되는 값은 58.14 g mol<sup>−1</sup>이에요. 결과가 너무 낮은 이유를 <strong>두 가지</strong> 제안하고 (suggest), 각각의 개선 방법을 쓰시오.</p>",
      hints: [
        // EN: <i>M</i> = <i>m</i> ÷ <i>n</i>. Too low a result means <i>m</i> too small or <i>n</i> too large.
        "<i>M</i> = <i>m</i> ÷ <i>n</i>. 결과가 너무 낮다는 것은 <i>m</i>이 너무 작거나 <i>n</i>이 너무 크다는 뜻이에요.",
        // EN: Which measurement could water on the lighter affect?
        "라이터에 묻은 물은 어떤 측정값에 영향을 줄 수 있을까요?",
      ],
      // EN: <p>The lighter was still wet when reweighed, so the loss in mass (the mass of butane) was too small; dry the lighter thoroughly before the second weighing. The water level inside the cylinder was above the level outside, so the gas was below atmospheric pressure and the amount calculated with atmospheric pressure was too large; raise or lower the cylinder until the levels are equal before reading. The gas also contains water vapour, so the volume is larger than the volume of butane alone.</p>
      answer: "<p>다시 잴 때 라이터가 아직 젖어 있어서 줄어든 질량(butane의 질량)이 너무 작았어요. 두 번째로 재기 전에 라이터를 완전히 말리세요. 눈금실린더 안의 수면이 바깥 수면보다 높아서 기체가 대기압보다 낮은 압력에 있었으므로, 대기압으로 계산한 양이 너무 컸어요. 읽기 전에 눈금실린더를 올리거나 내려 수면 높이를 같게 맞추세요. 또 기체에 수증기가 섞여 있으므로 부피가 butane만의 부피보다 커요.</p>",
      markscheme: [
        // EN: The lighter was wet when reweighed / water on the lighter, so the mass of butane released appears too small (<i>M</i> too low).
        "다시 잴 때 라이터가 젖어 있었다 / 라이터에 물이 묻었다. 그래서 내보낸 butane의 질량이 너무 작게 나온다 (<i>M</i>이 너무 낮다).",
        // EN: Improvement: dry the lighter thoroughly (with paper towel) before reweighing.
        "개선: 다시 재기 전에 (종이 타월로) 라이터를 완전히 말린다.",
        // EN: Water levels inside and outside the cylinder not equal, so the gas pressure is not atmospheric pressure / <i>n</i> calculated too large (<i>M</i> too low).
        "눈금실린더 안팎의 수면 높이가 같지 않아서 기체의 압력이 대기압이 아니다 / 계산한 <i>n</i>이 너무 크다 (<i>M</i>이 너무 낮다).",
        // EN: Improvement: adjust the cylinder so the water levels are equal before reading the volume.
        "개선: 부피를 읽기 전에 눈금실린더를 조절해 수면 높이를 같게 한다.",
        // EN: Accept: the collected gas contains water vapour, so the volume is too large (<i>M</i> too low); note it as a limitation.
        "인정: 모은 기체에 수증기가 섞여 있어서 부피가 너무 크다 (<i>M</i>이 너무 낮다); 한계점으로 적는다.",
        // EN: Accept: the measuring cylinder was read at the top of the meniscus / gas volume over-read; read at eye level.
        "인정: 눈금실린더를 메니스커스의 위쪽에서 읽었다 / 기체 부피를 크게 읽었다; 눈높이에서 읽는다.",
      ],
    },

    // ── lab-molar-mass-gas-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "lab-molar-mass-gas-q011": {
      // EN: <p>A student injects different masses, <i>m</i>, of one liquid into a heated gas syringe at constant temperature <i>T</i> and pressure <i>P</i>, and plots the volume of vapour, <i>V</i>, against <i>m</i>. The line passes through the origin with gradient <i>k</i>. Which expression gives the molar mass?</p>
      stem: "<p>한 학생이 온도 <i>T</i>와 압력 <i>P</i>가 일정한 가열된 기체 주사기에 한 가지 액체를 여러 질량 <i>m</i>만큼 주입하고, <i>m</i>에 대한 증기 부피 <i>V</i>의 그래프를 그려요. 직선은 원점을 지나고 기울기는 <i>k</i>예요. 몰 질량을 나타내는 식은 어느 것인가요?</p>",
      options: [
        // EN: <i>RT</i> / <i>Pk</i>
        "<i>RT</i> / <i>Pk</i>",
        // EN: <i>Pk</i> / <i>RT</i>
        "<i>Pk</i> / <i>RT</i>",
        // EN: <i>kRT</i> / <i>P</i>
        "<i>kRT</i> / <i>P</i>",
        // EN: <i>P</i> / <i>kRT</i>
        "<i>P</i> / <i>kRT</i>",
      ],
      hints: [
        // EN: Rearrange <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> into the form <i>V</i> = (something) × <i>m</i>.
        "<i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i>를 <i>V</i> = (무엇) × <i>m</i> 꼴로 바꿔 봐요.",
      ],
      // EN: <p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i>, so the gradient <i>k</i> = <i>RT</i> / <i>PM</i>. Rearranging: <i>M</i> = <i>RT</i> / <i>Pk</i>.</p>
      solution: "<p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i>이므로 기울기 <i>k</i> = <i>RT</i> / <i>PM</i>이에요. 식을 바꾸면 <i>M</i> = <i>RT</i> / <i>Pk</i>예요.</p>",
      misconception: {
        // EN (option B): This is the reciprocal. Start from <i>V</i> = <i>mRT</i> / <i>PM</i> and pick out the part that multiplies <i>m</i>.
        "1": "이것은 역수예요. <i>V</i> = <i>mRT</i> / <i>PM</i>에서 시작해 <i>m</i>에 곱해진 부분을 골라내요.",
        // EN (option C): This would be correct only if the gradient were proportional to <i>M</i>. A heavier vapour gives fewer moles per gram, so a smaller gradient.
        "2": "이것은 기울기가 <i>M</i>에 비례할 때만 맞아요. 더 무거운 증기는 1그램당 몰 수가 적으므로 기울기가 더 작아요.",
        // EN (option D): Check the dimensions: <i>RT</i> / <i>P</i> has units of volume per mole, so it must sit on top.
        "3": "차원을 확인해 봐요: <i>RT</i> / <i>P</i>는 1몰당 부피의 단위를 가지므로 분자에 있어야 해요.",
      },
    },

    // ── lab-molar-mass-gas-q012 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-molar-mass-gas-q012": {
      // EN: <p>A graph of the volume of hydrogen against the mass of magnesium (with excess acid) is a straight line through the origin with a gradient of 1015 <span class="unit">cm3</span> g<sup>−1</sup>. Calculate the molar volume of hydrogen under the conditions of the experiment, in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>(과량의 산과 반응시킨) 마그네슘 질량에 대한 수소 부피 그래프는 원점을 지나는 직선이고, 기울기는 1015 <span class=\"unit\">cm3</span> g<sup>−1</sup>이에요. 실험 조건에서 수소의 몰 부피를 <span class=\"unit\">dm3 mol-1</span> 단위로 계산하시오 (calculate).</p>",
      hints: [
        // EN: The gradient is the volume of hydrogen from 1 g of magnesium. How many grams of magnesium are in one mole?
        "기울기는 마그네슘 1 g에서 생기는 수소의 부피예요. 마그네슘 1몰은 몇 그램일까요?",
      ],
      // EN: <div class="worked__math">volume from 1 mol of Mg = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class="worked__math"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup> (1 mol of Mg gives 1 mol of H<sub>2</sub>)</div>
      solution: "<div class=\"worked__math\">Mg 1 mol에서 생기는 부피 = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class=\"worked__math\"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup> (Mg 1 mol에서 H<sub>2</sub> 1 mol이 생김)</div>",
    },

    // ── lab-molar-mass-gas-q013 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "lab-molar-mass-gas-q013": {
      // EN: <p>Why would the molar volume measured for hydrogen be the same as that for oxygen under the same conditions of temperature and pressure?</p>
      stem: "<p>온도와 압력이 같으면 수소에 대해 측정한 몰 부피가 산소와 같은 이유는 무엇인가요?</p>",
      options: [
        // EN: Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules.
        "온도와 압력이 같으면 같은 부피의 기체에는 같은 수의 분자가 들어 있다.",
        // EN: Hydrogen and oxygen molecules have the same mass.
        "수소 분자와 산소 분자의 질량이 같다.",
        // EN: Hydrogen and oxygen molecules are the same size.
        "수소 분자와 산소 분자의 크기가 같다.",
        // EN: Both gases are diatomic, so they contain the same number of atoms per gram.
        "두 기체 모두 이원자 분자이므로 1그램당 원자 수가 같다.",
      ],
      hints: [
        // EN: This is Avogadro’s law.
        "아보가드로 법칙이에요.",
      ],
      // EN: <p>Avogadro’s law: equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules. So one mole of any ideal gas occupies the same volume under the same conditions.</p>
      solution: "<p>아보가드로 법칙: 온도와 압력이 같으면 모든 기체는 같은 부피에 같은 수의 분자가 들어 있어요. 따라서 어떤 이상 기체든 1몰은 같은 조건에서 같은 부피를 차지해요.</p>",
      misconception: {
        // EN (option B): An O₂ molecule is 16 times heavier than an H₂ molecule. Mass does not decide the volume of a gas.
        "1": "O₂ 분자는 H₂ 분자보다 16배 무거워요. 기체의 부피는 질량으로 정해지지 않아요.",
        // EN (option C): In the ideal gas model the volume of the particles is negligible, so their size does not matter.
        "2": "이상 기체 모형에서는 입자의 부피를 무시하므로 입자의 크기는 상관없어요.",
        // EN (option D): A gram of hydrogen contains far more molecules than a gram of oxygen. The molar volume is about the number of molecules, not the mass.
        "3": "수소 1그램에는 산소 1그램보다 훨씬 많은 분자가 들어 있어요. 몰 부피는 질량이 아니라 분자 수와 관련 있어요.",
      },
    },

    // ── lab-molar-mass-gas-q014 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "lab-molar-mass-gas-q014": {
      // EN: <p>Why is the hydrochloric acid used in excess when finding the molar volume of hydrogen from magnesium?</p>
      stem: "<p>마그네슘으로 수소의 몰 부피를 구할 때 염산을 과량으로 쓰는 이유는 무엇인가요?</p>",
      options: [
        // EN: So that all the magnesium reacts, and the amount of hydrogen depends only on the mass of magnesium.
        "마그네슘이 모두 반응해서 수소의 양이 마그네슘의 질량에만 달려 있게 하려고.",
        // EN: So that the reaction is fast enough to finish before the gas cools.
        "기체가 식기 전에 반응이 끝날 만큼 빠르게 하려고.",
        // EN: So that the acid absorbs the heat given out by the reaction.
        "산이 반응에서 나오는 열을 흡수하게 하려고.",
        // EN: So that the hydrogen does not dissolve in the solution.
        "수소가 용액에 녹지 않게 하려고.",
      ],
      hints: [
        // EN: The calculation uses the mass of magnesium. What has to happen to all of it?
        "계산에는 마그네슘의 질량을 써요. 마그네슘이 모두 어떻게 되어야 할까요?",
      ],
      // EN: <p>The amount of hydrogen is calculated from the mass of magnesium, using the 1 : 1 ratio. That only works if all the magnesium reacts, so the magnesium must be the limiting reactant and the acid must be in excess.</p>
      solution: "<p>수소의 양은 1 : 1 비를 써서 마그네슘의 질량으로 계산해요. 이 계산은 마그네슘이 모두 반응할 때만 맞으므로, 마그네슘이 한계 반응물이고 산이 과량이어야 해요.</p>",
      misconception: {
        // EN (option B): Excess acid may speed things up a little, but that is not why it is used. The calculation needs every gram of magnesium to react.
        "1": "산이 과량이면 반응이 조금 빨라질 수는 있지만, 그 때문에 쓰는 것은 아니에요. 계산하려면 마그네슘이 1그램도 빠짐없이 반응해야 해요.",
        // EN (option C): The volume of acid has little effect on the temperature, and you wait for the gas to cool anyway.
        "2": "산의 부피는 온도에 거의 영향을 주지 않고, 어차피 기체가 식을 때까지 기다려요.",
        // EN (option D): The acid is mostly water. More of it would, if anything, dissolve slightly more hydrogen.
        "3": "산은 대부분 물이에요. 산이 더 많으면 오히려 수소가 조금 더 녹을 수도 있어요.",
      },
    },

  }
});
