/* lab-bonding-properties.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-bonding-properties.q', {
  questions: {

    // ── lab-bonding-properties-q001 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q001": {
      // EN: <p>Four solids were tested.</p><div class="table-scroll"><table class="data"><caption>Test results (control, distilled water: 0.1 mA)</caption><thead><tr><th scope="col">Solid</th><th scope="col">Melting</th><th scope="col" class="num">Solid / mA</th><th scope="col" class="num">With water / mA</th></tr></thead><tbody><tr><th scope="row">A</th><td>melts below 100 °C</td><td class="num">0.0</td><td class="num">0.1</td></tr><tr><th scope="row">B</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">21.7</td></tr><tr><th scope="row">C</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">0.1</td></tr><tr><th scope="row">D</th><td>does not melt in a Bunsen flame</td><td class="num">59.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Which solid is most likely to be ionic?</p>
      stem: "<p>고체 4가지를 시험했어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>시험 결과 (대조군, 증류수: 0.1 mA)</caption><thead><tr><th scope=\"col\">고체</th><th scope=\"col\">녹는 모습</th><th scope=\"col\" class=\"num\">고체 / mA</th><th scope=\"col\" class=\"num\">물과 섞은 뒤 / mA</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>100 °C 아래에서 녹음</td><td class=\"num\">0.0</td><td class=\"num\">0.1</td></tr><tr><th scope=\"row\">B</th><td>분젠 버너 불꽃에서 녹지 않음</td><td class=\"num\">0.0</td><td class=\"num\">21.7</td></tr><tr><th scope=\"row\">C</th><td>분젠 버너 불꽃에서 녹지 않음</td><td class=\"num\">0.0</td><td class=\"num\">0.1</td></tr><tr><th scope=\"row\">D</th><td>분젠 버너 불꽃에서 녹지 않음</td><td class=\"num\">59.4</td><td class=\"num\">0.1</td></tr></tbody></table></div><p>이온 결합 물질일 가능성이 가장 큰 고체는 어느 것인가요?</p>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: An ionic solid does not conduct as a solid. When does it conduct?
        "이온 결합 고체는 고체일 때 전기가 통하지 않아요. 언제 통할까요?",
      ],
      // EN: <p>B has a high melting point, does not conduct as a solid, and its mixture with water conducts far more than distilled water. This is the pattern of an ionic lattice: the ions are fixed in the solid but free to move once the solid dissolves.</p>
      solution: "<p>B는 녹는점이 높고, 고체일 때 전기가 통하지 않고, 물과 섞으면 증류수보다 훨씬 잘 통해요. 이것이 이온 격자의 패턴이에요: 고체에서는 이온이 고정되어 있지만, 고체가 용해되면 자유롭게 움직여요.</p>",
      misconception: {
        // EN (option A): A low melting point and no current in any test fit a covalent molecular solid, with weak forces between molecules.
        "0": "녹는점이 낮고 어떤 시험에서도 전류가 없으면, 분자 사이의 힘이 약한 공유 분자 고체에 맞아요.",
        // EN (option C): C has a high melting point but its mixture with water reads the same as the control. No ions are released, so it fits a covalent network.
        "2": "C는 녹는점이 높지만, 물과 섞어도 측정값이 대조군과 같아요. 이온이 나오지 않으므로 공유 결정에 맞아요.",
        // EN (option D): D conducts as a solid. Ions in a lattice are fixed, so an ionic solid cannot do this. D is a metal (or graphite).
        "3": "D는 고체 상태에서 전기가 통해요. 격자 속 이온은 고정되어 있으므로 이온 결합 고체는 이렇게 할 수 없어요. D는 금속(또는 흑연)이에요.",
      },
    },

    // ── lab-bonding-properties-q002 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q002": {
      // EN: <p>Why does solid potassium iodide not conduct electricity?</p>
      stem: "<p>고체 아이오딘화 칼륨에 전기가 통하지 않는 이유는 무엇인가요?</p>",
      options: [
        // EN: It contains no charged particles.
        "전하를 띤 입자가 없다.",
        // EN: Its ions are held in fixed positions in the lattice.
        "이온이 격자 속 정해진 자리에 붙잡혀 있다.",
        // EN: Its electrons are all held in covalent bonds.
        "전자가 모두 공유 결합에 붙잡혀 있다.",
        // EN: Its ions are too large to move.
        "이온이 너무 커서 움직일 수 없다.",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move.
        "전기가 통하려면 자유롭게 움직일 수 있는 전하를 띤 입자가 있어야 해요.",
      ],
      // EN: <p>Solid potassium iodide contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate, so they cannot carry charge through the solid.</p>
      solution: "<p>고체 아이오딘화 칼륨에는 이온이 있지만, 강한 정전기적 인력 때문에 격자 속 정해진 자리에 붙잡혀 있어요. 이온은 진동만 할 수 있으므로 고체 속으로 전하를 나를 수 없어요.</p>",
      misconception: {
        // EN (option A): Potassium iodide is made of K<sup>+</sup> and I<sup>−</sup> ions. The charged particles are there, but they cannot move.
        "0": "아이오딘화 칼륨은 K<sup>+</sup> 이온과 I<sup>−</sup> 이온으로 이루어져 있어요. 전하를 띤 입자는 있지만 움직일 수 없어요.",
        // EN (option C): Potassium iodide is ionic, not covalent. Conduction in an ionic compound is by moving ions, not electrons.
        "2": "아이오딘화 칼륨은 공유 결합 물질이 아니라 이온 결합 물질이에요. 이온 결합 화합물에서는 전자가 아니라 이온이 움직여서 전기가 통해요.",
        // EN (option D): Size is not the reason. The same ions move freely when the solid is melted or dissolved.
        "3": "크기는 이유가 아니에요. 고체를 녹이거나 용해시키면 같은 이온이 자유롭게 움직여요.",
      },
    },

    // ── lab-bonding-properties-q003 · short · exam · SL · Structure 2.1.3 · 2 marks
    "lab-bonding-properties-q003": {
      // EN: <p>Sodium chloride does not conduct as a solid, but a mixture of sodium chloride and water conducts. Explain this difference.</p>
      stem: "<p>염화 나트륨은 고체일 때 전기가 통하지 않지만, 염화 나트륨과 물의 혼합물은 전기가 통해요. 이 차이를 설명하시오 (explain).</p>",
      hints: [
        // EN: Both states contain the same ions. What is different about them?
        "두 상태 모두 같은 이온이 들어 있어요. 무엇이 다를까요?",
      ],
      // EN: <p>In the solid, the ions are held in fixed positions in the lattice, so they cannot move. When sodium chloride dissolves, the lattice breaks up and the ions are free to move through the solution, so they can carry charge.</p>
      answer: "<p>고체에서는 이온이 격자 속 정해진 자리에 붙잡혀 있어서 움직일 수 없어요. 염화 나트륨이 용해되면 격자가 무너지고 이온이 용액 속을 자유롭게 움직일 수 있으므로 전하를 나를 수 있어요.</p>",
      markscheme: [
        // EN: Solid: ions in fixed positions / cannot move. Do not accept: “no ions” or “no free electrons” alone.
        "고체: 이온이 정해진 자리에 있다 / 움직일 수 없다. 불인정: “이온이 없다”나 “자유 전자가 없다”만 쓴 경우.",
        // EN: In solution: ions are free to move (and carry charge). Do not accept: “electrons move”.
        "용액: 이온이 자유롭게 움직인다 (그리고 전하를 나른다). 불인정: “전자가 움직인다”.",
      ],
    },

    // ── lab-bonding-properties-q004 · mcq · exam · SL · Structure 2.2.7 · 1 mark
    "lab-bonding-properties-q004": {
      // EN: <p>An unknown grey solid conducts electricity as a solid, does not melt in a Bunsen flame, and leaves a grey mark when tapped. It is graphite. Why does graphite conduct?</p>
      stem: "<p>모르는 회색 고체가 고체 상태에서 전기가 통하고, 분젠 버너 불꽃에서 녹지 않고, 두드리면 회색 자국을 남겨요. 이 고체는 흑연이에요. 흑연에 전기가 통하는 이유는 무엇인가요?</p>",
      options: [
        // EN: It contains positive ions that move through the layers.
        "층 사이를 움직이는 양이온이 있다.",
        // EN: Each carbon atom forms three covalent bonds, and the fourth outer electron is delocalized within its layer, so it can move along the layers.
        "각 탄소 원자가 공유 결합을 3개 만들고, 네 번째 바깥 전자는 층 안에서 비편재화되어 층을 따라 움직일 수 있다.",
        // EN: It has metallic bonding between its carbon atoms.
        "탄소 원자 사이에 금속 결합이 있다.",
        // EN: Its layers are held together by strong covalent bonds.
        "층들이 강한 공유 결합으로 서로 붙어 있다.",
      ],
      hints: [
        // EN: How many covalent bonds does each carbon atom form in graphite? What happens to its other outer electron?
        "흑연에서 탄소 원자 하나는 공유 결합을 몇 개 만들까요? 나머지 바깥 전자는 어떻게 될까요?",
      ],
      // EN: <p>In graphite each carbon atom is covalently bonded to three others in a flat layer. The fourth outer electron of each atom is delocalized, so it can move along the layers and carry charge.</p>
      solution: "<p>흑연에서 각 탄소 원자는 평평한 층 안에서 다른 원자 3개와 공유 결합해요. 각 원자의 네 번째 바깥 전자는 비편재화되어 있어서 층을 따라 움직이며 전하를 나를 수 있어요.</p>",
      misconception: {
        // EN (option A): Graphite contains no ions. The current is carried by electrons.
        "0": "흑연에는 이온이 없어요. 전류는 전자가 날라요.",
        // EN (option C): Graphite is a non-metal element with covalent bonds. It conducts because of delocalized electrons, but it is not malleable like a metal.
        "2": "흑연은 공유 결합을 하는 비금속 원소예요. 비편재화된 전자 때문에 전기가 통하지만, 금속처럼 펴짐성이 있지는 않아요.",
        // EN (option D): The forces between the layers are weak. Strong bonds alone do not give conduction: diamond has strong bonds and does not conduct.
        "3": "층 사이의 힘은 약해요. 강한 결합만으로는 전기가 통하지 않아요: 다이아몬드는 결합이 강하지만 전기가 통하지 않아요.",
      },
    },

    // ── lab-bonding-properties-q005 · short · exam · SL · Structure 2.2.9 · 2 marks
    "lab-bonding-properties-q005": {
      // EN: <p>Sucrose dissolves well in water, but the solution reads the same current as distilled water. Explain both observations.</p>
      stem: "<p>수크로스는 물에 잘 녹지만, 그 용액의 전류는 증류수와 같아요. 두 관찰 결과를 설명하시오 (explain).</p>",
      hints: [
        // EN: What particles are in a sugar solution? Do they carry a charge?
        "설탕 용액에는 어떤 입자가 있을까요? 그 입자는 전하를 띠고 있을까요?",
      ],
      // EN: <p>Sucrose is a covalent molecular substance. Its molecules have many –OH groups, so they form hydrogen bonds with water molecules, which is why it dissolves. The solution contains neutral molecules, not ions, so there are no charged particles free to move and it does not conduct.</p>
      answer: "<p>수크로스는 공유 분자 물질이에요. 분자에 –OH기가 많아서 물 분자와 수소 결합을 하므로 물에 녹아요. 용액에는 이온이 아니라 중성 분자가 들어 있으므로, 자유롭게 움직이는 전하를 띤 입자가 없어서 전기가 통하지 않아요.</p>",
      markscheme: [
        // EN: Dissolves: (polar) sucrose molecules form hydrogen bonds with water. Accept: attractions between sucrose and water molecules.
        "용해됨: (극성) 수크로스 분자가 물과 수소 결합을 한다. 인정: 수크로스 분자와 물 분자 사이의 인력.",
        // EN: No conduction: the solution contains (neutral) molecules, not ions / no charged particles free to move.
        "전기가 통하지 않음: 용액에는 이온이 아니라 (중성) 분자가 들어 있다 / 자유롭게 움직이는 전하를 띤 입자가 없다.",
      ],
    },

    // ── lab-bonding-properties-q006 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "lab-bonding-properties-q006": {
      // EN: <p>A piece of copper flattens without breaking when it is hammered. Which statement explains this?</p>
      stem: "<p>구리 조각을 망치로 두드리면 깨지지 않고 납작해져요. 이것을 설명하는 것은 어느 것인가요?</p>",
      options: [
        // EN: The copper atoms are joined by strong, directional covalent bonds.
        "구리 원자들이 방향성이 있는 강한 공유 결합으로 이어져 있다.",
        // EN: Layers of cations can slide over each other, and the attraction to the delocalized electrons holds them together in any position.
        "양이온 층이 서로 미끄러질 수 있고, 비편재화된 전자에 대한 인력이 어떤 위치에서든 층을 붙잡아 준다.",
        // EN: Copper ions of the same charge repel each other when the layers move.
        "층이 움직이면 같은 전하의 구리 이온이 서로 밀어낸다.",
        // EN: The delocalized electrons move away from the hammer.
        "비편재화된 전자가 망치에서 멀어진다.",
      ],
      hints: [
        // EN: Is metallic bonding directional? What happens to it when the layers move?
        "금속 결합에는 방향성이 있을까요? 층이 움직이면 금속 결합은 어떻게 될까요?",
      ],
      // EN: <p>In a metal the bonding is the attraction between a lattice of cations and delocalized electrons. It acts in all directions, so when the layers of cations slide, the bonding stays intact and the metal changes shape without breaking.</p>
      solution: "<p>금속에서 결합은 양이온 격자와 비편재화된 전자 사이의 인력이에요. 이 인력은 모든 방향으로 작용하므로, 양이온 층이 미끄러져도 결합이 그대로 유지되어 금속이 깨지지 않고 모양이 바뀌어요.</p>",
      misconception: {
        // EN (option A): Metallic bonding is not directional. Directional covalent bonds would break, so the solid would be brittle.
        "0": "금속 결합은 방향성이 없어요. 방향성이 있는 공유 결합이라면 끊어져서 고체가 잘 부서질 거예요.",
        // EN (option C): That is why an ionic crystal shatters. In a metal the delocalized electrons stay between the cations, so the layers stay bonded.
        "2": "그것은 이온 결정이 산산조각 나는 이유예요. 금속에서는 비편재화된 전자가 양이온 사이에 머물러서 층이 계속 결합되어 있어요.",
        // EN (option D): The electrons do not move away. They stay delocalized around the cations as the layers slide.
        "3": "전자는 멀어지지 않아요. 층이 미끄러지는 동안에도 양이온 주위에 비편재화된 채로 있어요.",
      },
    },

    // ── lab-bonding-properties-q007 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "lab-bonding-properties-q007": {
      // EN: <p>Use the data booklet values <i>χ</i>(Ca) = 1.0 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference, Δ<i>χ</i>, for calcium chloride, <span class="chem">CaCl2</span>.</p>
      stem: "<p>데이터 부클릿 값 <i>χ</i>(Ca) = 1.0, <i>χ</i>(Cl) = 3.2를 쓰세요. 염화 칼슘(<span class=\"chem\">CaCl2</span>)의 전기 음성도 차이 Δ<i>χ</i>를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Subtract the smaller value from the larger. The 2 in the formula is not used.
        "큰 값에서 작은 값을 빼요. 화학식의 2는 쓰지 않아요.",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.0 = 2.2</div><p>A large difference: calcium chloride is in the ionic region of the triangle, so it should conduct when dissolved but not as a solid.</p>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 1.0 = 2.2</div><p>차이가 커요: 염화 칼슘은 삼각형의 이온 결합 영역에 있으므로, 고체일 때는 전기가 통하지 않고 용해되면 통할 거예요.</p>",
    },

    // ── lab-bonding-properties-q008 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "lab-bonding-properties-q008": {
      // EN: <p>Use the data booklet values <i>χ</i>(Al) = 1.6 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for aluminium chloride, <span class="chem">AlCl3</span>, used as the horizontal coordinate of the bonding triangle.</p>
      stem: "<p>데이터 부클릿 값 <i>χ</i>(Al) = 1.6, <i>χ</i>(Cl) = 3.2를 쓰세요. 결합 삼각형의 가로 좌표로 쓰는 염화 알루미늄(<span class=\"chem\">AlCl3</span>)의 평균 전기 음성도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Average = (χ<sub>a</sub> + χ<sub>b</sub>) / 2, using one value for each element.
        "평균 = (χ<sub>a</sub> + χ<sub>b</sub>) / 2. 원소마다 값을 하나씩 써요.",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.6 + 3.2) / 2 = 2.4</div><p>With Δ<i>χ</i> = 1.6, this point lies towards the polar covalent part of the triangle, well below sodium chloride. This fits aluminium chloride’s much lower melting and sublimation temperature.</p>
      solution: "<div class=\"worked__math\">평균 <i>χ</i> = (1.6 + 3.2) / 2 = 2.4</div><p>Δ<i>χ</i> = 1.6이므로 이 점은 삼각형의 극성 공유 결합 쪽에 있고, 염화 나트륨보다 한참 아래에 있어요. 이것은 염화 알루미늄의 녹는점과 승화 온도가 훨씬 낮은 것과 맞아요.</p>",
    },

    // ── lab-bonding-properties-q009 · short · exam · SL · Structure 2.1.3 · 2 marks
    "lab-bonding-properties-q009": {
      // EN: <p>Before testing the solids, a student measures the current when the electrodes are dipped in distilled water alone. Explain why this is done, and why the electrodes are rinsed with distilled water between tests.</p>
      stem: "<p>고체를 시험하기 전에, 한 학생이 증류수에만 전극을 담갔을 때의 전류를 재요. 그렇게 하는 이유와, 시험 사이마다 전극을 증류수로 헹구는 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: What would you compare each reading with? What could be left on the electrodes after dipping them in salt solution?
        "각 측정값을 무엇과 비교할까요? 소금물에 담근 뒤 전극에는 무엇이 남을 수 있을까요?",
      ],
      // EN: <p>Distilled water is a control: it shows the small reading that is not caused by the solid, so each mixture can be compared with it. Rinsing removes ions left on the electrodes from the previous solution, which would otherwise give a higher current in the next test.</p>
      answer: "<p>증류수는 대조군이에요: 고체 때문이 아닌 작은 측정값을 보여 주므로, 각 혼합물을 이것과 비교할 수 있어요. 헹구면 앞 용액에서 전극에 남은 이온이 없어져요. 그렇지 않으면 다음 시험에서 전류가 더 높게 나와요.</p>",
      markscheme: [
        // EN: Control / baseline: shows the current without any dissolved solid, to compare with. Accept: water itself may conduct slightly.
        "대조군 / 기준값: 녹은 고체가 없을 때의 전류를 보여 주어 비교할 수 있다. 인정: 물 자체도 전기가 조금 통할 수 있다.",
        // EN: Rinsing removes ions carried over from the previous test, which would raise the next reading / contaminate it.
        "헹구면 앞 시험에서 옮겨 온 이온이 없어진다. 남아 있으면 다음 측정값을 높인다 / 오염시킨다.",
      ],
    },

    // ── lab-bonding-properties-q010 · numeric · exam · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q010": {
      // EN: <p>Three readings for one solution are 18.2, 18.8 and 18.5 mA. Using half the range as the uncertainty, calculate the percentage uncertainty in the mean current.</p>
      stem: "<p>한 용액에 대한 측정값 3개는 18.2, 18.8, 18.5 mA예요. 범위의 절반을 불확도로 하여 평균 전류의 백분율 불확도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: Mean = 18.5 mA. Half the range = (18.8 − 18.2) ÷ 2.
        "평균 = 18.5 mA. 범위의 절반 = (18.8 − 18.2) ÷ 2.",
        // EN: Percentage uncertainty = uncertainty ÷ mean × 100.
        "백분율 불확도 = 불확도 ÷ 평균 × 100.",
      ],
      // EN: <div class="worked__math">mean = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA</div><div class="worked__math">uncertainty = (18.8 − 18.2) ÷ 2 = ±0.3 mA</div><div class="worked__math">% uncertainty = 0.3 ÷ 18.5 × 100 = 1.6 %</div>
      solution: "<div class=\"worked__math\">평균 = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA</div><div class=\"worked__math\">불확도 = (18.8 − 18.2) ÷ 2 = ±0.3 mA</div><div class=\"worked__math\">% 불확도 = 0.3 ÷ 18.5 × 100 = 1.6 %</div>",
    },

    // ── lab-bonding-properties-q011 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "lab-bonding-properties-q011": {
      // EN: <p>Two grey, shiny unknown solids both conduct electricity as solids and do not melt in a Bunsen flame. One is a metal and the other is graphite. Which test distinguishes them?</p>
      stem: "<p>광택이 있는 회색의 모르는 고체 2가지가 모두 고체 상태에서 전기가 통하고 분젠 버너 불꽃에서 녹지 않아요. 하나는 금속이고 다른 하나는 흑연이에요. 둘을 구별하는 시험은 어느 것인가요?</p>",
      options: [
        // EN: Shaking with water
        "물과 함께 흔들기",
        // EN: Tapping with a hammer
        "망치로 두드리기",
        // EN: Measuring the conductivity of the solid again with a higher voltage
        "더 높은 전압으로 고체의 전기 전도성을 다시 재기",
        // EN: Shaking with hexane
        "hexane과 함께 흔들기",
      ],
      hints: [
        // EN: Which property of metals comes from layers of cations that can slide?
        "금속의 어떤 성질이 미끄러질 수 있는 양이온 층에서 나올까요?",
      ],
      // EN: <p>A metal is malleable: it flattens when hammered. Graphite is not malleable: it flakes and crumbles, because its layers separate easily. So the hammer test tells them apart.</p>
      solution: "<p>금속은 펴짐성이 있어서 망치로 두드리면 납작해져요. 흑연은 펴짐성이 없어요: 층이 쉽게 떨어지므로 얇게 벗겨지고 부스러져요. 그래서 망치 시험으로 둘을 구별할 수 있어요.</p>",
      misconception: {
        // EN (option A): Neither a metal nor graphite dissolves in water, so both give the same result.
        "0": "금속도 흑연도 물에 녹지 않으므로 둘 다 같은 결과를 보여요.",
        // EN (option C): Both conduct as solids, because both have delocalized electrons. A higher voltage does not separate them.
        "2": "둘 다 비편재화된 전자가 있으므로 고체 상태에서 전기가 통해요. 전압을 높여도 구별되지 않아요.",
        // EN (option D): Neither dissolves in hexane.
        "3": "둘 다 hexane에 녹지 않아요.",
      },
    },

    // ── lab-bonding-properties-q012 · mcq · exam · SL · Structure 2.2.9 · 1 mark
    "lab-bonding-properties-q012": {
      // EN: <p>Paraffin wax dissolves in hexane but not in water. Which is the best explanation?</p>
      stem: "<p>파라핀 왁스는 hexane에는 녹지만 물에는 녹지 않아요. 가장 알맞은 설명은 어느 것인가요?</p>",
      options: [
        // EN: Wax is ionic and hexane is polar.
        "왁스는 이온 결합 물질이고 hexane은 극성이다.",
        // EN: Wax molecules are non-polar. London forces between wax and hexane molecules are similar in strength to those they replace, but wax cannot break the hydrogen bonds between water molecules.
        "왁스 분자는 무극성이다. 왁스와 hexane 분자 사이의 런던 분산력은 대신하게 되는 힘과 세기가 비슷하지만, 왁스는 물 분자 사이의 수소 결합을 끊을 수 없다.",
        // EN: Wax has a covalent network structure.
        "왁스는 공유 결정 구조이다.",
        // EN: Water is denser than hexane.
        "물은 hexane보다 밀도가 크다.",
      ],
      hints: [
        // EN: “Like dissolves like.” Is wax polar or non-polar? What forces hold water molecules together?
        "“비슷한 것끼리 녹는다.” 왁스는 극성일까요, 무극성일까요? 물 분자들을 붙잡고 있는 힘은 무엇일까요?",
      ],
      // EN: <p>Wax is made of long non-polar hydrocarbon molecules held by London forces. Hexane is also non-polar, so wax and hexane molecules can mix with similar attractions. Water molecules are held together by hydrogen bonds, which non-polar wax molecules cannot replace, so wax does not dissolve in water.</p>
      solution: "<p>왁스는 런던 분산력으로 붙잡혀 있는 긴 무극성 탄화수소 분자로 이루어져 있어요. hexane도 무극성이므로 왁스 분자와 hexane 분자는 비슷한 인력으로 섞일 수 있어요. 물 분자들은 수소 결합으로 서로 붙잡혀 있는데, 무극성인 왁스 분자는 이를 대신할 수 없으므로 왁스는 물에 녹지 않아요.</p>",
      misconception: {
        // EN (option A): Wax is a covalent molecular substance, and hexane is non-polar.
        "0": "왁스는 공유 분자 물질이고, hexane은 무극성이에요.",
        // EN (option C): A network solid would not dissolve in anything, and would not melt below 100 °C.
        "2": "공유 결정 고체라면 어디에도 녹지 않고, 100 °C 아래에서 녹지도 않을 거예요.",
        // EN (option D): Density decides whether the wax floats, not whether it dissolves.
        "3": "밀도는 왁스가 뜨는지를 정할 뿐, 녹는지를 정하지는 않아요.",
      },
    },

    // ── lab-bonding-properties-q013 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "lab-bonding-properties-q013": {
      // EN: <p>Which precaution is needed when testing the solubility of solids in hexane?</p>
      stem: "<p>고체가 hexane에 녹는지 시험할 때 필요한 안전 수칙은 어느 것인가요?</p>",
      options: [
        // EN: Heat the hexane in a Bunsen flame to make the solid dissolve faster.
        "고체가 빨리 녹도록 hexane을 분젠 버너 불꽃으로 가열한다.",
        // EN: Use the hexane in a fume cupboard with no flames nearby.
        "근처에 불꽃이 없는 흄 후드 안에서 hexane을 쓴다.",
        // EN: Pour the used hexane down the sink with plenty of water.
        "쓴 hexane을 많은 물과 함께 개수대에 버린다.",
        // EN: Use a larger volume of hexane to dilute it.
        "hexane을 묽히려고 더 많은 부피를 쓴다.",
      ],
      hints: [
        // EN: What is the main hazard of hexane?
        "hexane의 가장 큰 위험은 무엇일까요?",
      ],
      // EN: <p>Hexane is highly flammable and its vapour is harmful. Use small volumes in a fume cupboard, keep all flames away, and put the waste in a labelled organic waste container.</p>
      solution: "<p>hexane은 불이 아주 잘 붙고 증기가 해로워요. 흄 후드 안에서 적은 양만 쓰고, 불꽃을 모두 멀리하고, 폐액은 이름표가 붙은 유기 폐액 용기에 넣으세요.</p>",
      misconception: {
        // EN (option A): Hexane is highly flammable. It must never be heated with a flame.
        "0": "hexane은 불이 아주 잘 붙어요. 절대 불꽃으로 가열하면 안 돼요.",
        // EN (option C): Hexane does not mix with water and is harmful to the environment. It goes in an organic waste container.
        "2": "hexane은 물과 섞이지 않고 환경에 해로워요. 유기 폐액 용기에 버려요.",
        // EN (option D): More hexane means more flammable vapour, not less hazard.
        "3": "hexane이 많을수록 위험이 줄어드는 것이 아니라 불이 붙는 증기가 많아져요.",
      },
    },

    // ── lab-bonding-properties-q014 · short · challenge · SL · Structure 2.2.9 · 2 marks
    "lab-bonding-properties-q014": {
      // EN: <p>A student finds that solid Y has a high melting point and dissolves in water. The student concludes that Y is ionic. Evaluate this conclusion and state one further test that would support it.</p>
      stem: "<p>한 학생이 고체 Y가 녹는점이 높고 물에 녹는다는 것을 알아내요. 학생은 Y가 이온 결합 물질이라고 결론 내려요. 이 결론을 평가하고 (evaluate), 이 결론을 뒷받침할 추가 시험을 하나 쓰시오 (state).</p>",
      hints: [
        // EN: Can you think of a non-ionic solid that dissolves in water?
        "물에 녹는 이온 결합 물질이 아닌 고체를 떠올릴 수 있나요?",
        // EN: Which property depends on whether there are ions that can move?
        "움직일 수 있는 이온이 있는지에 따라 달라지는 성질은 무엇일까요?",
      ],
      // EN: <p>The evidence is not enough: some covalent molecular substances (for example sucrose) dissolve in water, and network or metallic solids also have high melting points. Test the conductivity: if Y does not conduct as a solid but the solution conducts clearly more than distilled water, Y releases ions and is ionic.</p>
      answer: "<p>증거가 충분하지 않아요: 일부 공유 분자 물질(예를 들어 수크로스)은 물에 녹고, 공유 결정이나 금속 고체도 녹는점이 높아요. 전기 전도성을 시험하세요: Y가 고체일 때는 전기가 통하지 않지만 용액은 증류수보다 확실히 잘 통하면, Y는 이온을 내놓는 이온 결합 물질이에요.</p>",
      markscheme: [
        // EN: Not sufficient: dissolving in water / a high melting point is also shown by other types (for example a polar molecular solid dissolves).
        "충분하지 않다: 물에 녹는 것 / 높은 녹는점은 다른 종류의 물질에서도 나타난다 (예를 들어 극성 분자 고체는 물에 녹는다).",
        // EN: Further test: conductivity of the solution (compared with distilled water) AND of the solid: solution conducts, solid does not → ionic.
        "추가 시험: 용액의 전기 전도성 (증류수와 비교) 그리고 고체의 전기 전도성: 용액은 통하고 고체는 통하지 않으면 → 이온 결합 물질.",
      ],
    },

  }
});
