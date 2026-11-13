/* dev — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'dev', {
  strings: {

    // page title (browser tab)
    "Component test page | Structure Lab": "",

    // Introduction to the particulate nature of matter > page header > p
    "Structure 1.1": "",

    // Introduction to the particulate nature of matter > page header > h1
    "Introduction to the particulate nature of matter": "",

    // Introduction to the particulate nature of matter > page header > span
    "How can we model the particulate nature of matter?": "",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "",

    // What you need to be able to do > checklist > span
    "Tell apart elements, compounds and mixtures, and say whether a mixture is homogeneous or heterogeneous.": "",

    // What you need to be able to do > checklist > span
    "Choose a suitable method to separate a mixture.": "混合物を分離するのに適した方法を選ぶ。",

    // What you need to be able to do > checklist > span
    "Use the kinetic molecular theory to explain the properties of solids, liquids and gases, and changes of state.": "",

    // What you need to be able to do > checklist > span
    "Convert between degrees Celsius and kelvin, and link temperature to average kinetic energy.": "",

    // What you need to be able to do > checklist > Additional HL > span
    "Template example of an Additional HL item. Topic 1.1 itself has no AHL content.": "",

    // Elements, compounds and mixtures > h2
    "Elements, compounds and mixtures": "",

    // Elements, compounds and mixtures > p
    "An <dfn data-def=\"A substance made of only one type of atom. It cannot be broken down into simpler substances by chemical means.\">element</dfn> contains only one type of atom. A <dfn data-def=\"A substance made of atoms of two or more different elements, chemically bonded in a fixed ratio.\">compound</dfn> contains atoms of different elements bonded in a fixed ratio, such as <span class=\"chem\">H2O</span> or <span class=\"chem\">CuSO4.5H2O</span>. A <dfn>mixture</dfn> contains more than one element or compound, in no fixed ratio, and they are not chemically bonded to each other.": "<dfn data-def=\"1 種類の原子だけでできた物質。\">元素 <span class=\"en-term\">(element)</span></dfn>は 1 種類の原子だけをふくみます。<dfn data-def=\"異なる元素の原子が一定の比で化学結合した物質。\">化合物 <span class=\"en-term\">(compound)</span></dfn>は、異なる元素の原子が一定の比で結合したもので、<span class=\"chem\">H2O</span> や <span class=\"chem\">CuSO4.5H2O</span> などがあります。<dfn>混合物 <span class=\"en-term\">(mixture)</span></dfn>は 2 種類以上の元素や化合物をふくみ、その比は一定でなく、たがいに化学結合していません。",

    // Elements, compounds and mixtures > data-def attribute
    "A substance made of only one type of atom. It cannot be broken down into simpler substances by chemical means.": "",

    // Elements, compounds and mixtures > data-def attribute
    "A substance made of atoms of two or more different elements, chemically bonded in a fixed ratio.": "",

    // Elements, compounds and mixtures > key idea > p
    "A compound has different properties from the elements in it. A mixture keeps the properties of its parts, so it can be separated by physical methods.": "",

    // Elements, compounds and mixtures > table > caption
    "Three kinds of matter": "物質の 3 つの種類",

    // Elements, compounds and mixtures > table > th
    "Type": "",

    // Elements, compounds and mixtures > table > th
    "Example": "",

    // Elements, compounds and mixtures > table > th
    "Fixed ratio?": "",

    // Elements, compounds and mixtures > table > th
    "How to separate": "",

    // Elements, compounds and mixtures > table > th
    "Element": "",

    // Elements, compounds and mixtures > table > td
    "copper, <span class=\"chem\">O2</span>": "",

    // Elements, compounds and mixtures > table > td
    "one type of atom": "",

    // Elements, compounds and mixtures > table > td
    "cannot be separated": "",

    // Elements, compounds and mixtures > table > th
    "Compound": "",

    // Elements, compounds and mixtures > table > td
    "<span class=\"chem\">NaCl</span>, <span class=\"chem\">CO2</span>": "",

    // Elements, compounds and mixtures > table > td
    "yes": "",

    // Elements, compounds and mixtures > table > td
    "chemical reaction only": "",

    // Elements, compounds and mixtures > table > th
    "Mixture": "混合物",

    // Elements, compounds and mixtures > table > td
    "air, sea water": "",

    // Elements, compounds and mixtures > table > td
    "no": "",

    // Elements, compounds and mixtures > table > td
    "physical methods": "",

    // Elements, compounds and mixtures > common mistake > p
    "“Pure” in everyday speech means natural or clean. In chemistry a pure substance is a single element or a single compound. Pure orange juice is a mixture.": "",

    // Elements, compounds and mixtures > not needed for IB > p
    "You do not need to know about colloids, suspensions or alloys as separate categories of mixture here. Homogeneous and heterogeneous are enough.": "",

    // Temperature and the kelvin scale > h2
    "Temperature and the kelvin scale": "温度とケルビン目盛り",

    // Temperature and the kelvin scale > p
    "Temperature measures the average kinetic energy of the particles. The kelvin scale starts at absolute zero, so a temperature in kelvin is directly proportional to that average kinetic energy.": "",

    // Temperature and the kelvin scale > equation > dd
    "temperature on the kelvin scale <span class=\"unit\">K</span>": "",

    // Temperature and the kelvin scale > equation > dd
    "temperature on the Celsius scale <span class=\"unit\">°C</span>": "",

    // Temperature and the kelvin scale > widget > data-title attribute
    "Celsius and kelvin, side by side": "セルシウス温度とケルビンを並べて見る",

    // Temperature and the kelvin scale > widget > figcaption
    "Drag the slider or type a value. Both scales have the same step size, so a change of 1 °C is a change of 1 K. Only the zero point differs.": "",

    // Temperature and the kelvin scale > data booklet note > p
    "The conversion is not printed as a formula, but the data booklet gives STP as 273.15 K and 100 kPa. That tells you 0 °C = 273.15 K.": "",

    // Temperature and the kelvin scale > exam tip (shown in English + translation) > p
    "Write temperatures in kelvin as <span class=\"mono\">298 K</span>, with no degree sign. In gas calculations, always convert to kelvin before you substitute.": "ケルビンの温度は <span class=\"mono\">298 K</span> のように、度の記号を付けずに書きます。",

    // Temperature and the kelvin scale > worked example > h3
    "Converting a boiling point to kelvin": "",

    // Temperature and the kelvin scale > worked example > p
    "Liquid oxygen boils at −182.96 °C. Give this temperature in kelvin, to an appropriate number of decimal places.": "",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Write the relationship": "関係式を書く",

    // Temperature and the kelvin scale > worked example > p
    "Starting from the formula shows the examiner your method.": "",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Substitute, keeping the sign": "",

    // Temperature and the kelvin scale > worked example > p
    "The Celsius value is negative. Losing the minus sign is the most common slip.": "",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Round sensibly": "",

    // Temperature and the kelvin scale > worked example > p
    "When you add, the answer keeps the smallest number of decimal places in the data. Both values have two decimal places, so keep two.": "",

    // Temperature and the kelvin scale > try it > p
    "Normal human body temperature is about 37 °C. What is this in kelvin? Give your answer to 3 significant figures.": "",

    // Temperature and the kelvin scale > try it > li
    "Which is bigger, the number in kelvin or the number in °C? Decide before you calculate.": "",

    // Temperature and the kelvin scale > try it > li
    "Add 273.15 to the Celsius value: <span class=\"mono\">37 + 273.15</span>.": "",

    // Temperature and the kelvin scale > try it > p
    "To 3 significant figures: <strong>310 K</strong>.": "",

    // How Additional HL content looks > Additional HL > h2
    "How Additional HL content looks": "",

    // How Additional HL content looks > Additional HL > p
    "This section exists only to show the style. Topic 1.1 has no Additional HL content, so the finished page will not include it. Any section, callout, worked example or question can be marked as Additional HL, and the switch in the header hides them all.": "",

    // Quick check > h2
    "Quick check": "",

    // Quick check > p
    "Five questions on this topic. You get feedback after each one.": "",

    // Quick check > data-title attribute
    "1.1 quick check": "",

    // Quick check > h3
    "Pinned questions": "",

    // Quick check > data-title attribute
    "Pinned check": "",

    // Quick check > p
    "Nuclides: <span id=\"nuc\"></span>": "",

    // widget string (dev/widgets-dev.js)
    "Celsius": "セルシウス温度",

    // widget string (dev/widgets-dev.js)
    "Kelvin": "ケルビン",

    // widget string (dev/widgets-dev.js)
    "What it means": "",

    // widget string (dev/widgets-dev.js)
    "Temperature": "温度",

    // widget string (dev/widgets-dev.js)
    "Absolute zero": "",

    // widget string (dev/widgets-dev.js)
    "Water freezes": "水の凝固点",

    // widget string (dev/widgets-dev.js)
    "Room temperature": "",

    // widget string (dev/widgets-dev.js)
    "Water boils": "水の沸点",

    // widget string (dev/widgets-dev.js)
    "Thermometer scale from absolute zero to 150 degrees Celsius, labelled in both degrees Celsius and kelvin": "",

    // widget string (dev/widgets-dev.js)
    "Lowest possible temperature": "",

    // widget string (dev/widgets-dev.js)
    "Below the freezing point of water": "",

    // widget string (dev/widgets-dev.js)
    "Water is liquid (at 100 kPa)": "",

    // widget string (dev/widgets-dev.js)
    "At or above the boiling point of water": "水の沸点以上",

  }
});
