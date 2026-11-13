/* s1-5 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Ideal gases | Structure Lab": "",

    // Ideal gases > page header > p
    "Structure 1.5": "",

    // Ideal gases > page header > h1
    "Ideal gases": "",

    // Ideal gases > page header > span
    "How does the model of ideal gas behaviour help us to predict the behaviour of real gases?": "",

    // What you need to be able to do > h2
    "What you need to be able to do": "",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes. Everything in this topic is SL core. There is no Additional HL content in 1.5.": "",

    // What you need to be able to do > checklist > span
    "Recognize the key assumptions of the ideal gas model.": "",

    // What you need to be able to do > checklist > span
    "Explain why real gases deviate from the model, especially at low temperature and high pressure.": "",

    // What you need to be able to do > checklist > span
    "Use the molar volume of an ideal gas at STP to convert between amount and gas volume.": "",

    // What you need to be able to do > checklist > span
    "Describe and sketch how pressure, volume and temperature are related for a fixed mass of gas, and analyse graphs of these variables.": "",

    // What you need to be able to do > checklist > span
    "Use the combined gas law when the conditions of a gas change.": "",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>PV</i> = <i>nRT</i>, using consistent units.": "",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a gas from experimental data.": "",

    // The ideal gas model > h2
    "The ideal gas model": "",

    // The ideal gas model > p
    "Pump up a bicycle tyre and you can feel the gas pushing back. That push is <dfn data-def=\"The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.\">pressure</dfn>. It comes from billions of tiny particles hitting the inside of the tyre.": "",

    // The ideal gas model > data-def attribute
    "The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.": "",

    // The ideal gas model > p
    "Real gas particles are complicated. So chemists use a simplified picture called an <dfn data-def=\"A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.\">ideal gas</dfn>. It is a model: it leaves out details to make the mathematics manageable.": "",

    // The ideal gas model > data-def attribute
    "A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.": "",

    // The ideal gas model > p
    "The model makes four assumptions. Learn these four.": "",

    // The ideal gas model > li
    "The gas consists of <strong>moving particles</strong>.": "",

    // The ideal gas model > li
    "The particles have <strong>negligible volume</strong>. The particles themselves take up almost none of the space in the container.": "",

    // The ideal gas model > li
    "There are <strong>no intermolecular forces</strong>. The particles do not attract or repel each other.": "",

    // The ideal gas model > li
    "All collisions between particles are <strong>elastic</strong>.": "",

    // The ideal gas model > p
    "An <dfn data-def=\"A collision in which the total kinetic energy of the particles is the same before and after.\">elastic collision</dfn> is one where no kinetic energy is lost overall. The particles bounce apart with the same total kinetic energy they had before.": "",

    // The ideal gas model > data-def attribute
    "A collision in which the total kinetic energy of the particles is the same before and after.": "",

    // The ideal gas model > p
    "<dfn data-def=\"Small enough to be ignored without changing the answer in any way that matters.\">Negligible</dfn> means small enough to ignore. A gas at room conditions is almost entirely empty space, so ignoring the size of the particles is usually a very good approximation.": "",

    // The ideal gas model > data-def attribute
    "Small enough to be ignored without changing the answer in any way that matters.": "",

    // The ideal gas model > key idea > p
    "An ideal gas does not exist. It is a model that real gases follow closely under everyday conditions. That is why one equation works for hydrogen, oxygen and carbon dioxide alike.": "",

    // The ideal gas model > exam tip (shown in English + translation) > p
    "If you are asked to state assumptions, use the exact phrases: <em>negligible volume</em> (of the particles), <em>no intermolecular forces</em>, <em>elastic collisions</em>. Writing “the gas has no volume” loses the mark. The gas fills its container. It is the particles whose volume is negligible.": "",

    // The ideal gas model > not needed for IB > p
    "Textbooks often list more assumptions and go on to derive gas pressure from particle speeds. The four statements above are what the IB guide lists. You do not need the kinetic energy equation (<span class=\"mono\">E = 3/2 RT</span>), root-mean-square speeds or any derivation.": "",

    // The ideal gas model > data-title attribute
    "Ideal gas model: quick check": "",

    // Real gases and the limits of the model > data-toc attribute
    "Real gases": "",

    // Real gases and the limits of the model > h2
    "Real gases and the limits of the model": "",

    // Real gases and the limits of the model > p
    "Cool steam and it turns into liquid water. An ideal gas could never do that, because its particles do not attract each other. So real gases cannot be exactly ideal.": "",

    // Real gases and the limits of the model > p
    "A <dfn data-def=\"An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.\">real gas</dfn> breaks two of the assumptions. Its particles do have some volume, and they do attract each other. Under most conditions both effects are tiny. Under two conditions they are not.": "",

    // Real gases and the limits of the model > data-def attribute
    "An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.": "",

    // Real gases and the limits of the model > h3
    "High pressure: particle volume matters": "",

    // Real gases and the limits of the model > p
    "At high pressure the gas is squeezed into a small space. The particles are close together. Their own volume is now a noticeable share of the container, so it is no longer negligible. Because the particles are close, the forces between them are also more significant.": "",

    // Real gases and the limits of the model > h3
    "Low temperature: intermolecular forces matter": "",

    // Real gases and the limits of the model > p
    "At low temperature the particles have less kinetic energy and move more slowly. Slow particles are affected more by the attractions between them, so the intermolecular forces are no longer negligible. Cool a real gas far enough and those forces pull the particles together into a liquid.": "",

    // Real gases and the limits of the model > key idea > p
    "Real gases deviate most from ideal behaviour at <strong>low temperature and high pressure</strong>. They behave most like an ideal gas at <strong>high temperature and low pressure</strong>.": "",

    // Real gases and the limits of the model > widget > data-title attribute
    "Real versus ideal: when does the model break down?": "",

    // Real gases and the limits of the model > widget > data-kicker attribute
    "Qualitative model": "",

    // Real gases and the limits of the model > widget > figcaption
    "Move the temperature and pressure sliders and watch the three bars. Dashed lines mark attractions between slow, close particles. This is an illustration to build your intuition. Nothing here is calculated from an equation, and the particles are drawn far too large.": "",

    // Real gases and the limits of the model > h3
    "Which gases are closest to ideal?": "",

    // Real gases and the limits of the model > p
    "Gases with <strong>weak intermolecular forces</strong> and <strong>small particles</strong> match the model best. Helium and hydrogen are very close to ideal under ordinary conditions. Gases with stronger attractions between their molecules, such as ammonia, deviate more under the same conditions.": "",

    // Real gases and the limits of the model > p
    "You will study the types of intermolecular force in Structure 2.2. For now, one clue is enough: a gas with a higher boiling point has stronger forces between its particles.": "",

    // Real gases and the limits of the model > exam tip (shown in English + translation) > p
    "For “explain why a real gas deviates” questions, give a condition and a reason for each mark. <em>High pressure: particles are close together, so the volume of the particles is not negligible.</em> <em>Low temperature: particles move more slowly, so intermolecular forces become significant.</em>": "",

    // Real gases and the limits of the model > common mistake > p
    "Do not swap the conditions. “High temperature and low pressure” describes where a gas is <em>most</em> ideal. A quick check: think of where a gas turns into a liquid (cold and squeezed). That is where it is least ideal.": "",

    // Real gases and the limits of the model > not needed for IB > p
    "No mathematics is required for real gases. You do not need the van der Waals equation, the compressibility factor <i>Z</i>, or any calculation of how far a gas deviates. A reasoned explanation in words is all the IB asks for.": "",

    // Real gases and the limits of the model > data-title attribute
    "Real gases: quick check": "",

    // Molar volume of an ideal gas > data-toc attribute
    "Molar volume at STP": "",

    // Molar volume of an ideal gas > h2
    "Molar volume of an ideal gas": "",

    // Molar volume of an ideal gas > p
    "Picture a box a little under 30 cm along each side, about the space taken up by four footballs. At 0 °C and 100 kPa, that box holds one mole of gas. It does not matter which gas.": "",

    // Molar volume of an ideal gas > p
    "This follows from Avogadro’s law, which you met in Structure 1.4: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Turn it around: equal numbers of molecules occupy equal volumes.": "",

    // Molar volume of an ideal gas > p
    "The <dfn data-def=\"The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.\">molar volume</dfn>, <i>V</i><sub>m</sub>, is the volume of one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "",

    // Molar volume of an ideal gas > data-def attribute
    "The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "",

    // Molar volume of an ideal gas > p
    "<dfn data-def=\"Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.\">STP</dfn> stands for standard temperature and pressure: <span class=\"mono\">273.15 K</span> (0 °C) and <span class=\"mono\">100 kPa</span>. At STP the molar volume of an ideal gas is <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "",

    // Molar volume of an ideal gas > data-def attribute
    "Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.": "",

    // Molar volume of an ideal gas > equation > dd
    // The ideal gas equation > equation > dd
    "amount of gas <span class=\"unit\">mol</span>": "",

    // Molar volume of an ideal gas > equation > dd
    "volume of the gas <span class=\"unit\">dm3</span>": "",

    // Molar volume of an ideal gas > equation > dt
    "V<sub>m</sub>": "",

    // Molar volume of an ideal gas > equation > dd
    "molar volume, 22.7 at STP <span class=\"unit\">dm3 mol-1</span>": "",

    // Molar volume of an ideal gas > data booklet note > p
    "The data booklet gives the molar volume of an ideal gas at STP as <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> (also written <span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span>), with STP defined as 273.15 K and 100 kPa. The relationship <i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> is not printed, so learn it.": "",

    // Molar volume of an ideal gas > widget > data-title attribute
    "How big is a mole of gas at STP?": "",

    // Molar volume of an ideal gas > widget > data-kicker attribute
    "To scale": "",

    // Molar volume of an ideal gas > widget > figcaption
    "Move either slider. The shaded cube shows the gas at STP, drawn to the same scale as a football and a 1 dm<sup>3</sup> cube. The amount and the volume always stay in the ratio 22.7 dm<sup>3</sup> for each mole.": "",

    // Molar volume of an ideal gas > common mistake > p
    "Older books and many websites use <span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span>. That value is for 0 °C and a pressure of 101.325 kPa (1 atmosphere), which was the older standard pressure. The IB data booklet defines STP as 0 °C and 100 kPa. The pressure is slightly lower, so the gas takes up slightly more space: <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>. Using 22.4 in an IB exam gives a wrong answer.": "",

    // Molar volume of an ideal gas > h3
    // The combined gas law > h3
    // The ideal gas equation > h3
    // Molar mass of a gas from experimental data > h3
    "Method in words": "",

    // Molar volume of an ideal gas > li
    "Check the conditions are STP. If they are not, use <i>PV</i> = <i>nRT</i> instead (later on this page).": "",

    // Molar volume of an ideal gas > li
    "Put the volume in dm<sup>3</sup>. To convert from cm<sup>3</sup>, divide by 1000.": "",

    // Molar volume of an ideal gas > li
    "To find amount: <i>n</i> = <i>V</i> ÷ 22.7. To find volume: <i>V</i> = <i>n</i> × 22.7.": "",

    // Molar volume of an ideal gas > worked example > h3
    "Amount from a gas volume at STP": "",

    // Molar volume of an ideal gas > worked example > p
    "A sample of nitrogen gas occupies 568 cm<sup>3</sup> at STP. Calculate the amount of nitrogen, in mol.": "",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Convert the volume to dm³": "",

    // Molar volume of an ideal gas > worked example > p
    "The molar volume is in dm<sup>3</sup> mol<sup>−1</sup>, so the volume must be in dm<sup>3</sup> too. There are 1000 cm<sup>3</sup> in 1 dm<sup>3</sup>.": "",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Write the relationship": "",

    // Molar volume of an ideal gas > worked example > p
    "The gas is at STP, so one mole occupies 22.7 dm<sup>3</sup>.": "",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // widget string (assets/js/widgets-s1-5.js)
    "Substitute with units": "",

    // Molar volume of an ideal gas > worked example > p
    "dm<sup>3</sup> divided by dm<sup>3</sup> mol<sup>−1</sup> leaves mol. The units confirm the method.": "",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Round to the data": "",

    // Molar volume of an ideal gas > worked example > p
    "568 cm<sup>3</sup> and 22.7 both have 3 significant figures.": "",

    // Molar volume of an ideal gas > worked example > p
    "0.0250 mol of N<sub>2</sub>": "",

    // Molar volume of an ideal gas > try it > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.0420 mol of carbon dioxide at STP.": "",

    // Molar volume of an ideal gas > try it > li
    "At STP, every mole of an ideal gas occupies the same volume. Which data booklet value is that?": "",

    // Molar volume of an ideal gas > try it > li
    "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.953 dm<sup>3</sup></strong>.": "",

    // Molar volume of an ideal gas > try it > p
    "A balloon contains 1250 cm<sup>3</sup> of helium at STP. Calculate the amount of helium, in mol.": "",

    // Molar volume of an ideal gas > try it > li
    "Convert the volume first: 1250 cm<sup>3</sup> is how many dm<sup>3</sup>?": "",

    // Molar volume of an ideal gas > try it > li
    "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.0551 mol</strong>.": "",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> works only at STP. If a question gives any other temperature or pressure, such as 25 °C, the molar volume is different and you need <i>PV</i> = <i>nRT</i>.": "",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "The data booklet also lists SATP (standard ambient temperature and pressure): 298.15 K (25 °C) and 100 kPa. It gives no molar volume for SATP, so 22.7 does not apply there. Use <i>PV</i> = <i>nRT</i>.": "",

    // Molar volume of an ideal gas > data-title attribute
    "Molar volume: quick check": "",

    // How pressure, volume and temperature are related > data-toc attribute
    "P, V and T graphs": "",

    // How pressure, volume and temperature are related > h2
    "How pressure, volume and temperature are related": "",

    // How pressure, volume and temperature are related > p
    "Push the plunger of a sealed syringe and it pushes back harder. Leave a football outside on a cold night and it goes soft. These are the relationships in this section.": "",

    // How pressure, volume and temperature are related > p
    "A gas sample is described by four variables: pressure <i>P</i>, volume <i>V</i>, temperature <i>T</i> and amount <i>n</i>. To see how two of them are related, you hold the others constant. A <dfn data-def=\"A sample in which the amount of gas, n, does not change. No gas enters or leaves.\">fixed mass</dfn> of gas means <i>n</i> is constant.": "",

    // How pressure, volume and temperature are related > data-def attribute
    "A sample in which the amount of gas, n, does not change. No gas enters or leaves.": "",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Ideal gas sandbox": "",

    // How pressure, volume and temperature are related > widget > data-kicker attribute
    "Model": "",

    // How pressure, volume and temperature are related > widget > figcaption
    "Choose an experiment, then drag the highlighted variable or press “Run the experiment”. The pressure is calculated from <i>PV</i> = <i>nRT</i>. In the picture, the particle speed scales with √<i>T</i>, the number of particles with <i>n</i>, and the length of the cylinder with <i>V</i>. The particles are drawn much larger than to scale, and there are far fewer of them than in a real sample.": "",

    // How pressure, volume and temperature are related > h3
    "Pressure and volume (temperature constant)": "",

    // How pressure, volume and temperature are related > p
    "Squeeze a gas into half the volume and the particles hit the walls twice as often. The pressure doubles.": "",

    // How pressure, volume and temperature are related > p
    "Pressure is <dfn data-def=\"Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.\">inversely proportional</dfn> to volume: <span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>, so <span class=\"mono\"><i>PV</i> = constant</span>. A graph of <i>P</i> against <i>V</i> is a curve. A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin.": "",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.": "",

    // How pressure, volume and temperature are related > h3
    "Volume and temperature (pressure constant)": "",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a container with a freely moving piston. The particles move faster and push the piston out until the pressure inside matches the pressure outside again. The volume increases.": "",

    // How pressure, volume and temperature are related > p
    "Volume is <dfn data-def=\"Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.\">directly proportional</dfn> to the temperature in kelvin: <span class=\"mono\"><i>V</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>V</i>/<i>T</i> = constant</span>. A graph of <i>V</i> against <i>T</i> in kelvin is a straight line through the origin.": "",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.": "",

    // How pressure, volume and temperature are related > p
    "Plot the same data against temperature in °C and you still get a straight line, but it does not pass through the origin. Extend the line backwards (extrapolate) and it reaches zero volume at <span class=\"mono\">−273.15 °C</span>. That temperature is <dfn data-def=\"0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.\">absolute zero</dfn>, 0 K.": "",

    // How pressure, volume and temperature are related > data-def attribute
    "0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.": "",

    // How pressure, volume and temperature are related > h3
    "Pressure and temperature (volume constant)": "",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a rigid container. The particles move faster, so they hit the walls harder and more often. The pressure increases.": "",

    // How pressure, volume and temperature are related > p
    "Pressure is directly proportional to the temperature in kelvin: <span class=\"mono\"><i>P</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>P</i>/<i>T</i> = constant</span>. A graph of <i>P</i> against <i>T</i> in kelvin is a straight line through the origin.": "",

    // How pressure, volume and temperature are related > table > caption
    "Three relationships for a fixed mass of an ideal gas": "",

    // How pressure, volume and temperature are related > table > th
    "Held constant": "",

    // How pressure, volume and temperature are related > table > th
    "Relationship": "",

    // How pressure, volume and temperature are related > table > th
    "What stays the same": "",

    // How pressure, volume and temperature are related > table > th
    "Graph": "",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ 1/<i>V</i> (inverse)": "",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>V</i>: curve. <i>P</i> against 1/<i>V</i>: line through origin.": "",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> against <i>T</i>/K: line through origin.": "",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>T</i>/K: line through origin.": "",

    // How pressure, volume and temperature are related > common mistake > p
    "The direct proportions work only in kelvin. Heating a gas from 20 °C to 40 °C does not double its volume or pressure. In kelvin that is 293 K to 313 K, an increase of about 7 %.": "",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Gas-law graphs: the shapes to know": "",

    // How pressure, volume and temperature are related > widget > figcaption
    "Study the six sketches, then press “Test yourself” and match each relationship to its shape. Notice that <i>PV</i> against <i>P</i> is flat: at constant temperature the product <i>PV</i> does not change.": "",

    // How pressure, volume and temperature are related > exam tip (shown in English + translation) > p
    "When you sketch a graph, label both axes with the quantity and its unit, and make it clear whether a straight line passes through the origin. For <i>V</i> against <i>T</i> in °C, show the line meeting the temperature axis at −273 °C, usually as a dashed extrapolation.": "",

    // How pressure, volume and temperature are related > not needed for IB > p
    "These relationships have historical names (Boyle’s law, Charles’s law, Gay-Lussac’s law). The IB will not assess the names. You need the relationships and their graphs, not who discovered them.": "",

    // How pressure, volume and temperature are related > data-title attribute
    "Relationships and graphs: quick check": "",

    // The combined gas law > h2
    "The combined gas law": "",

    // The combined gas law > p
    "A weather balloon rises. The air outside gets colder and the pressure drops, both at once. To find the new volume you need one equation that handles pressure, volume and temperature together.": "",

    // The combined gas law > p
    "Putting the three relationships together gives the <dfn data-def=\"P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.\">combined gas law</dfn>. It links two sets of conditions for the same sample of gas: state 1 (before) and state 2 (after).": "",

    // The combined gas law > data-def attribute
    "P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.": "",

    // The combined gas law > equation > dd
    "pressure, same unit on both sides <span class=\"unit\">kPa</span>": "",

    // The combined gas law > equation > dd
    "volume, same unit on both sides <span class=\"unit\">dm3</span>": "",

    // The combined gas law > equation > dd
    "temperature, always in kelvin <span class=\"unit\">K</span>": "",

    // The combined gas law > equation > dd
    "before and after the change, for a fixed amount of gas": "",

    // The combined gas law > data booklet note > p
    "The combined gas law is printed in the data booklet. You do not need to memorise it, but you do need to rearrange it.": "",

    // The combined gas law > li
    "List <i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub> and <i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>. Mark the unknown with a question mark.": "",

    // The combined gas law > li
    "Convert both temperatures to kelvin: add 273.15.": "",

    // The combined gas law > li
    "Check that the two pressures share a unit and the two volumes share a unit. They do not have to be Pa or m<sup>3</sup>, because the units cancel.": "",

    // The combined gas law > li
    "If a variable is constant, it cancels. Cross it out on both sides.": "",

    // The combined gas law > li
    "Rearrange for the unknown, substitute, and round at the end.": "",

    // The combined gas law > li
    "Sense check: did the answer move in the direction you expected?": "",

    // The combined gas law > worked example > h3
    "New volume when pressure and temperature both change": "",

    // The combined gas law > worked example > p
    "A gas syringe contains 85.0 cm<sup>3</sup> of gas at 22.0 °C and 101 kPa. Calculate the volume of the gas, in cm<sup>3</sup>, at 65.0 °C and 125 kPa.": "",

    // The combined gas law > worked example > data-title attribute
    "List the two states": "",

    // The combined gas law > worked example > p
    "Sorting the data first stops you mixing up “before” and “after”.": "",

    // The combined gas law > worked example > data-title attribute
    "Convert temperatures to kelvin": "",

    // The combined gas law > worked example > p
    "The gas relationships are proportional only on the kelvin scale.": "",

    // The combined gas law > worked example > data-title attribute
    "Rearrange for V₂": "",

    // The combined gas law > worked example > p
    "Multiply both sides by <i>T</i><sub>2</sub> and divide by <i>P</i><sub>2</sub> to leave <i>V</i><sub>2</sub> alone.": "",

    // The combined gas law > worked example > p
    "kPa cancels with kPa and K with K, leaving cm<sup>3</sup>. No conversion to dm<sup>3</sup> is needed here.": "",

    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    "Round and sense check": "",

    // The combined gas law > worked example > data-label attribute
    // The ideal gas equation > worked example > data-label attribute
    "Check": "",

    // The combined gas law > worked example > p
    "Heating makes the gas expand, but the larger pressure squeezes it more. A slightly smaller volume is reasonable. The data have 3 significant figures.": "",

    // The combined gas law > worked example > p
    "78.7 cm<sup>3</sup>": "",

    // The combined gas law > try it > p
    "A gas occupies 2.40 dm<sup>3</sup> at 15.0 °C. It is heated to 80.0 °C at constant pressure. Calculate the new volume, in dm<sup>3</sup>.": "",

    // The combined gas law > try it > li
    "The pressure is constant, so <i>P</i> cancels. You are left with <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>. What must you do to the temperatures first?": "",

    // The combined gas law > try it > li
    "<i>T</i><sub>1</sub> = 288.15 K and <i>T</i><sub>2</sub> = 353.15 K. Then <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>.": "",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>2.94 dm<sup>3</sup></strong>. If you got 12.8 dm<sup>3</sup>, you used °C.": "",

    // The combined gas law > try it > p
    "A sealed, rigid steel container holds gas at 310 kPa and 20.0 °C. It is left in the sun and warms to 55.0 °C. Calculate the new pressure, in kPa.": "",

    // The combined gas law > try it > li
    "Rigid means the volume is constant, so <i>V</i> cancels: <i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>.": "",

    // The combined gas law > try it > li
    "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>.": "",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>347 kPa</strong>.": "",

    // The combined gas law > common mistake > p
    "The combined gas law is only for a fixed amount of gas. If gas is added or escapes between the two states, <i>n</i> has changed and you need <i>PV</i> = <i>nRT</i> for each state.": "",

    // The combined gas law > data-title attribute
    "Combined gas law: quick check": "",

    // The ideal gas equation > data-toc attribute
    "PV = nRT": "",

    // The ideal gas equation > h2
    "The ideal gas equation": "",

    // The ideal gas equation > p
    "The combined gas law compares a gas before and after a change. Often you have only one set of conditions and want to know how much gas is there. For that you need the <dfn data-def=\"PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.\">ideal gas equation</dfn>.": "",

    // The ideal gas equation > data-def attribute
    "PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.": "",

    // The ideal gas equation > equation > dd
    "pressure <span class=\"unit\">Pa</span> (or kPa)": "",

    // The ideal gas equation > equation > dd
    "volume <span class=\"unit\">m3</span> (or dm<sup>3</sup> with kPa)": "",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "temperature <span class=\"unit\">K</span>": "",

    // The ideal gas equation > data booklet note > p
    "The equation <i>PV</i> = <i>nRT</i> and the value <span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> are both in the data booklet.": "",

    // The ideal gas equation > h3
    "Units: the part that costs the most marks": "",

    // The ideal gas equation > p
    "<i>R</i> is given in joules. So the product <i>P</i> × <i>V</i> must come out in joules too. Two pairs of units do this.": "",

    // The ideal gas equation > table > caption
    "Two consistent unit sets for PV = nRT, both with R = 8.31 J K⁻¹ mol⁻¹": "",

    // The ideal gas equation > table > th
    "Set": "",

    // The ideal gas equation > table > th
    "Pressure": "",

    // The ideal gas equation > table > th
    "Volume": "",

    // The ideal gas equation > table > th
    "Why P × V is in joules": "",

    // The ideal gas equation > table > th
    "SI base": "",

    // The ideal gas equation > table > td
    "Pa": "",

    // The ideal gas equation > table > td
    "1 Pa = 1 N m<sup>−2</sup>, so Pa × m<sup>3</sup> = N m = J": "",

    // The ideal gas equation > table > th
    "Lab-sized": "",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "kPa": "",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "dm<sup>3</sup>": "",

    // The ideal gas equation > table > td
    "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J": "",

    // The ideal gas equation > p
    "In the second set the factor of 1000 in kPa cancels the factor of 1/1000 in dm<sup>3</sup>. Both sets give the same answer. Choose one set and convert everything into it before you substitute.": "",

    // The ideal gas equation > table > caption
    "Conversions you will use every time": "",

    // The ideal gas equation > table > th
    "From": "",

    // The ideal gas equation > table > th
    "To": "",

    // The ideal gas equation > table > th
    "Do this": "",

    // The ideal gas equation > table > th
    "Example": "",

    // The ideal gas equation > table > td
    "add 273.15": "",

    // The ideal gas equation > table > th
    "cm<sup>3</sup>": "",

    // The ideal gas equation > table > td
    "divide by 1000": "",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>": "",

    // The ideal gas equation > table > td
    "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>": "",

    // The ideal gas equation > table > td
    "divide by 1 000 000": "",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>": "",

    // The ideal gas equation > table > td
    "multiply by 1000": "",

    // The ideal gas equation > table > td
    "101 kPa = 1.01 × 10<sup>5</sup> Pa": "",

    // The ideal gas equation > li
    "List what you know (<i>P</i>, <i>V</i>, <i>n</i>, <i>T</i>) and mark the unknown.": "",

    // The ideal gas equation > li
    "Convert: <i>T</i> to K. Then either <i>P</i> to kPa and <i>V</i> to dm<sup>3</sup>, or <i>P</i> to Pa and <i>V</i> to m<sup>3</sup>.": "",

    // The ideal gas equation > li
    "If you have a mass instead of an amount, use <i>n</i> = <i>m</i> ÷ <i>M</i> (from Structure 1.4).": "",

    // The ideal gas equation > li
    "Rearrange <i>PV</i> = <i>nRT</i> for the unknown before you put numbers in.": "",

    // The ideal gas equation > li
    "Substitute with units, calculate, and round at the end.": "",

    // The ideal gas equation > table > caption
    "PV = nRT rearranged for each variable": "",

    // The ideal gas equation > table > th
    "To find": "",

    // The ideal gas equation > table > th
    "Use": "",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "pressure": "",

    // The ideal gas equation > table > td
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i>": "",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "volume": "",

    // The ideal gas equation > table > td
    "<i>V</i> = <i>nRT</i> ÷ <i>P</i>": "",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "amount": "",

    // The ideal gas equation > table > td
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i>": "",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "temperature": "",

    // The ideal gas equation > table > td
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i>": "",

    // The ideal gas equation > widget > data-title attribute
    "PV = nRT solver with unit coach": "",

    // The ideal gas equation > widget > figcaption
    "Choose what to find, type the values in the units the question gives, and read the working from top to bottom: conversions first, then the rearrangement, then the substitution. Use it to check your own working, not to replace it.": "",

    // The ideal gas equation > worked example > h3
    "Finding a volume with kPa and dm³": "",

    // The ideal gas equation > worked example > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.150 mol of carbon dioxide at 25.0 °C and 98.5 kPa.": "",

    // The ideal gas equation > worked example > data-title attribute
    "List and convert": "",

    // The ideal gas equation > worked example > p
    "The pressure is already in kPa, so the answer will come out in dm<sup>3</sup>. Only the temperature needs converting.": "",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for V": "",

    // The ideal gas equation > worked example > p
    "Divide both sides of <i>PV</i> = <i>nRT</i> by <i>P</i>.": "",

    // The ideal gas equation > worked example > p
    "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K leaves J. Then J ÷ kPa gives dm<sup>3</sup>.": "",

    // The ideal gas equation > worked example > p
    "One mole at STP is 22.7 dm<sup>3</sup>, so 0.150 mol near room conditions should be a few dm<sup>3</sup>. The data have 3 significant figures.": "",

    // The ideal gas equation > worked example > p
    "3.77 dm<sup>3</sup>": "",

    // The ideal gas equation > worked example > h3
    "Finding an amount, then a mass, with Pa and m³": "",

    // The ideal gas equation > worked example > p
    "A 2.50 dm<sup>3</sup> flask contains oxygen gas, O<sub>2</sub>, at 27.0 °C and 150 kPa. Calculate the mass of oxygen in the flask.": "",

    // The ideal gas equation > worked example > data-title attribute
    "Convert to Pa, m³ and K": "",

    // The ideal gas equation > worked example > p
    "This example uses the SI base set to show that it gives the same kind of answer. You could also keep kPa and dm<sup>3</sup>.": "",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for n": "",

    // The ideal gas equation > worked example > p
    "You need the amount before you can find a mass. Divide both sides by <i>RT</i>.": "",

    // The ideal gas equation > worked example > p
    "Pa × m<sup>3</sup> = J on top. J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup> underneath. J ÷ J mol<sup>−1</sup> leaves mol.": "",

    // The ideal gas equation > worked example > data-title attribute
    "Convert amount to mass": "",

    // The ideal gas equation > worked example > p
    "Oxygen gas is O<sub>2</sub>, so <i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup>. Keep the unrounded value of <i>n</i> in your calculator.": "",

    // The ideal gas equation > worked example > p
    "The data have 3 significant figures.": "",

    // The ideal gas equation > worked example > p
    "4.81 g of O<sub>2</sub>": "",

    // The ideal gas equation > try it > p
    "Calculate the pressure, in kPa, of 0.250 mol of gas in a 5.00 dm<sup>3</sup> container at 30.0 °C.": "",

    // The ideal gas equation > try it > li
    "The volume is in dm<sup>3</sup>, so the pressure will come out in kPa. Convert the temperature to kelvin.": "",

    // The ideal gas equation > try it > li
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>.": "",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>126 kPa</strong>.": "",

    // The ideal gas equation > try it > p
    "0.100 mol of gas occupies 2.00 dm<sup>3</sup> at a pressure of 150 kPa. Calculate the temperature of the gas, in K.": "",

    // The ideal gas equation > try it > li
    "kPa and dm<sup>3</sup> already match, so no conversion is needed. Rearrange <i>PV</i> = <i>nRT</i> for <i>T</i>.": "",

    // The ideal gas equation > try it > li
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>.": "",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>361 K</strong>. The equation always gives temperature in kelvin.": "",

    // The ideal gas equation > try it > p
    "A gas syringe holds 250 cm<sup>3</sup> of methane, CH<sub>4</sub>, at 18.0 °C and 102 kPa. Calculate the mass of methane, in g.": "",

    // The ideal gas equation > try it > li
    "Two conversions are needed before you start: cm<sup>3</sup> to dm<sup>3</sup> and °C to K.": "",

    // The ideal gas equation > try it > li
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup>.": "",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>0.169 g</strong>.": "",

    // The ideal gas equation > common mistake > p
    "The two classic errors are leaving the temperature in °C, and putting cm<sup>3</sup> straight in with kPa. The first gives an answer that is wildly out. The second is out by exactly 1000. If your amount of gas in a small flask comes out as several moles, check your volume unit.": "",

    // The ideal gas equation > exam tip (shown in English + translation) > p
    "In a 2-mark gas equation question, one mark is usually for correct unit conversions (kelvin, and matching pressure and volume units) and one for the answer. Write the conversions as separate lines so the first mark is safe even if your final answer slips.": "",

    // The ideal gas equation > not needed for IB > p
    "IB uses SI units only for pressure and volume, so you will not meet atm, mmHg, bar or litres in gas questions. Partial pressures (Dalton’s law), Graham’s law of effusion and mole fractions are not in the guide at all. If a textbook chapter turns to those, you can stop.": "",

    // The ideal gas equation > data-title attribute
    "PV = nRT: quick check": "",

    // Molar mass of a gas from experimental data > data-toc attribute
    "Molar mass from gas data": "",

    // Molar mass of a gas from experimental data > h2
    "Molar mass of a gas from experimental data": "",

    // Molar mass of a gas from experimental data > p
    "You have an unknown liquid that evaporates easily (a <dfn data-def=\"A volatile liquid is one that evaporates easily.\">volatile</dfn> liquid). Inject a weighed drop into a warm gas syringe and it turns to vapour. Read the volume, the temperature and the pressure, and you can work out its molar mass.": "",

    // Molar mass of a gas from experimental data > data-def attribute
    "A volatile liquid is one that evaporates easily.": "",

    // Molar mass of a gas from experimental data > p
    "The idea has two links. The gas equation gives the amount, <i>n</i>. Then molar mass is mass divided by amount.": "",

    // Molar mass of a gas from experimental data > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "",

    // Molar mass of a gas from experimental data > equation > dd
    "mass of the gas sample <span class=\"unit\">g</span>": "",

    // Molar mass of a gas from experimental data > equation > dd
    "amount of gas, from <i>n</i> = <i>PV</i> ÷ <i>RT</i> <span class=\"unit\">mol</span>": "",

    // Molar mass of a gas from experimental data > equation > dd
    "pressure <span class=\"unit\">kPa</span>": "",

    // Molar mass of a gas from experimental data > equation > dd
    "volume <span class=\"unit\">dm3</span>": "",

    // Molar mass of a gas from experimental data > p
    "The combined form <i>M</i> = <i>mRT</i> ÷ <i>PV</i> is not in the data booklet. You do not need to memorise it. Working in two steps (find <i>n</i>, then <i>M</i> = <i>m</i> ÷ <i>n</i>) is safer and shows your method.": "",

    // Molar mass of a gas from experimental data > li
    "Convert <i>T</i> to K, and <i>P</i> and <i>V</i> to a matching pair (kPa with dm<sup>3</sup>).": "",

    // Molar mass of a gas from experimental data > li
    "Find the amount of gas: <i>n</i> = <i>PV</i> ÷ <i>RT</i>.": "",

    // Molar mass of a gas from experimental data > li
    "Find the molar mass: <i>M</i> = <i>m</i> ÷ <i>n</i>, with the mass in g.": "",

    // Molar mass of a gas from experimental data > li
    "If you also know the empirical formula, divide <i>M</i> by the empirical formula mass to find how many empirical units make one molecule.": "",

    // Molar mass of a gas from experimental data > worked example > h3
    "Molar mass of a volatile liquid": "",

    // Molar mass of a gas from experimental data > worked example > p
    "0.180 g of a volatile liquid is injected into a gas syringe kept at 100.0 °C. It vaporises completely and the vapour occupies 95.1 cm<sup>3</sup> at 101 kPa. Calculate the molar mass of the liquid.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the units": "",

    // Molar mass of a gas from experimental data > worked example > p
    "With the pressure in kPa, the volume must be in dm<sup>3</sup>. The temperature must be in kelvin.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of vapour": "",

    // Molar mass of a gas from experimental data > worked example > p
    "The gas equation counts the moles of vapour without needing to know what the substance is.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Divide mass by amount": "",

    // Molar mass of a gas from experimental data > worked example > p
    "Molar mass is the mass of one mole, so it is grams divided by moles.": "",

    // Molar mass of a gas from experimental data > worked example > p
    "The mass, volume and pressure have 3 significant figures.": "",

    // Molar mass of a gas from experimental data > worked example > p
    "58.1 g mol<sup>−1</sup>": "",

    // Molar mass of a gas from experimental data > worked example > h3
    "From percentage composition and gas data to a molecular formula": "",

    // Molar mass of a gas from experimental data > worked example > p
    "A hydrocarbon contains 85.6 % carbon and 14.4 % hydrogen by mass. A 0.500 g sample of the gas occupies 221 cm<sup>3</sup> at 25.0 °C and 100 kPa. Determine the molecular formula of the hydrocarbon.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the empirical formula": "",

    // Molar mass of a gas from experimental data > worked example > p
    "This is the Structure 1.4 method: imagine 100 g, divide each mass by <i>A</i><sub>r</sub>, then divide by the smallest.": "",

    // Molar mass of a gas from experimental data > worked example > maths line
    "ratio H : C = 14.25… ÷ 7.127… = 2.00, so the empirical formula is CH<sub>2</sub>": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the gas data": "",

    // Molar mass of a gas from experimental data > worked example > p
    "kPa needs dm<sup>3</sup>, and the temperature must be in kelvin.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of gas": "",

    // Molar mass of a gas from experimental data > worked example > p
    "The conditions are not STP, so use the gas equation, not 22.7.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the molar mass": "",

    // Molar mass of a gas from experimental data > worked example > p
    "Mass divided by amount.": "",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Compare with the empirical formula mass": "",

    // Molar mass of a gas from experimental data > worked example > p
    "The molecular formula is a whole-number multiple of the empirical formula. Experimental data rarely give an exact whole number, so round to the nearest one.": "",

    // Molar mass of a gas from experimental data > worked example > maths line
    "molecular formula = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>": "",

    // Molar mass of a gas from experimental data > try it > p
    "1.26 g of a gas occupies 0.750 dm<sup>3</sup> at 20.0 °C and 96.0 kPa. Calculate the molar mass of the gas.": "",

    // Molar mass of a gas from experimental data > try it > li
    "Find the amount of gas first with <i>n</i> = <i>PV</i> ÷ <i>RT</i>. Remember kelvin.": "",

    // Molar mass of a gas from experimental data > try it > li
    "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>. Then <i>M</i> = 1.26 g ÷ <i>n</i>.": "",

    // Molar mass of a gas from experimental data > try it > p
    "To 3 significant figures: <strong>42.6 g mol<sup>−1</sup></strong>.": "",

    // Molar mass of a gas from experimental data > h3
    "Gas density uses the same idea": "",

    // Molar mass of a gas from experimental data > p
    "Density is mass divided by volume. If a question gives the density of a gas, it has given you the mass of a known volume. For example, a density of 1.25 g dm<sup>−3</sup> means 1.25 g occupies 1.00 dm<sup>3</sup>. Put those two values into the method above. There is no new formula to learn.": "",

    // Molar mass of a gas from experimental data > exam tip (shown in English + translation) > p
    "These questions are often chained: empirical formula in one part, molar mass from gas data in the next, molecular formula at the end. Each part is marked with “error carried forward”. If an earlier answer is wrong but you use it correctly afterwards, you still earn the later marks. So keep going, and show every line.": "",

    // Molar mass of a gas from experimental data > common mistake > p
    "Do not use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount unless the gas is at STP. Vapour in a syringe at 100 °C takes up much more space per mole than that.": "",

    // Molar mass of a gas from experimental data > data-title attribute
    "Molar mass from gas data: quick check": "",

    // Linking it up > h2
    "Linking it up": "",

    // Linking it up > p
    "The IB guide asks linking questions that connect this topic to others. Short answers to four of them:": "",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most?": "",

    // Linking it up > p
    "At low temperature and high pressure. There the particles are slow and close together, so intermolecular forces and the volume of the particles are no longer negligible. Under those conditions, equal volumes of two real gases may not contain exactly equal numbers of molecules.": "",

    // Linking it up > h3
    "Under comparable conditions, why do some gases deviate more than others?": "",

    // Linking it up > p
    "Gases whose particles attract each other more strongly deviate more, because the “no intermolecular forces” assumption fits them less well. Larger particles also make the “negligible volume” assumption less accurate. Structure 2.2 explains why some molecules attract more strongly than others.": "",

    // Linking it up > h3
    "Graphs can be sketches or accurately plotted points. What are the advantages and limitations of each?": "",

    // Linking it up > p
    "A sketch shows the shape of a relationship quickly: curve or line, through the origin or not. It carries no scale, so you cannot read values from it. Plotted data points let you find a gradient or an intercept, judge the scatter and spot anomalous results, and extrapolate (for example to absolute zero). They take longer, and they are only as reliable as the measurements and the range that was measured.": "",

    // Linking it up > h3
    "How can the ideal gas law be used to find the molar mass of a gas from experimental data?": "",

    // Linking it up > p
    "Measure the mass, pressure, volume and temperature of a gas sample. Use <i>n</i> = <i>PV</i> ÷ <i>RT</i> to find the amount, then <i>M</i> = <i>m</i> ÷ <i>n</i>. The result assumes the gas behaves ideally, so it is most accurate at high temperature and low pressure.": "",

    // Exam-style practice > h2
    "Exam-style practice": "",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. All questions are original and stay inside the syllabus. Have your data booklet and calculator ready.": "",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "",

    // Exam-style practice > data-title attribute
    "1.5 foundation": "",

    // Exam-style practice > h3
    "Exam standard": "",

    // Exam-style practice > data-title attribute
    "1.5 exam standard": "",

    // Exam-style practice > h3
    "Challenge: multi-step and unfamiliar contexts": "",

    // Exam-style practice > data-title attribute
    "1.5 challenge": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature and amount are held constant. Move the volume slider.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume and amount are held constant (a rigid container). Move the temperature slider.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure is held at {P} kPa and the amount at {n} mol. The piston is free to move. Move the temperature slider.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Experiment": "",

    // widget string (assets/js/widgets-s1-5.js)
    "P against V (T and n constant)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "P against T (V and n constant)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "V against T (P and n constant)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, T": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, V": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas, n": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause particles": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Run the experiment": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Clear graph": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, P": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, n": "",

    // widget string (assets/js/widgets-s1-5.js)
    "PV ÷ nT": "",

    // widget string (assets/js/widgets-s1-5.js)
    "This experiment": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Left: a cylinder of gas particles closed by a piston. Right: a graph of the two variables in the chosen experiment, traced as you move the slider. All values are in the readout below.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "volume / {unit}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Model of the gas": "",

    // widget string (assets/js/widgets-s1-5.js)
    "piston": "",

    // widget string (assets/js/widgets-s1-5.js)
    "extrapolated to {T} K": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Play particles": "",

    // widget string (assets/js/widgets-s1-5.js)
    "The grey line is your previous run.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "a curve that falls steeply at first and then levels off, never touching either axis": "",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line through the origin": "",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line that does not pass through the origin; extended back, it meets the horizontal axis at a negative value": "",

    // widget string (assets/js/widgets-s1-5.js)
    "a horizontal straight line": "",

    // widget string (assets/js/widgets-s1-5.js)
    "T and n constant": "",

    // widget string (assets/js/widgets-s1-5.js)
    "P is inversely proportional to V. Doubling V halves P.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to 1/V, so this plot turns the curve into a straight line.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "P and n constant": "",

    // widget string (assets/js/widgets-s1-5.js)
    "V is directly proportional to T in kelvin. Zero volume would be reached at 0 K.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Still a straight line, but 0 °C is not zero on the kelvin scale. Extended back, the line reaches V = 0 at {T} °C.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "V and n constant": "",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to T in kelvin.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "PV = nRT. With n and T fixed, PV stays the same whatever the pressure.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph of {y} against {x}: {shape}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph: {shape}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "negative": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Matching exercise": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{y} against {x}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Shape {letter}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Each relationship below is for a fixed mass of an ideal gas. Choose the shape of its graph. A shape can be used more than once.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Check my matches": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Not answered yet.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Correct. {why}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Not this shape. Ask: is it direct or inverse proportion, and is the horizontal axis zero at the origin?": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. All matched. Open the labelled gallery to see them together.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct ({blank} not answered). Change your choices and check again.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. Change your choices and check again.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Test yourself: match the shapes": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Show the labelled gallery": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape for each relationship, then press Check.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Study the six graphs, then test yourself.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Find": "",

    // widget string (assets/js/widgets-s1-5.js)
    "pressure, P": "",

    // widget string (assets/js/widgets-s1-5.js)
    "volume, V": "",

    // widget string (assets/js/widgets-s1-5.js)
    "temperature, T": "",

    // widget string (assets/js/widgets-s1-5.js)
    "amount, n": "",

    // widget string (assets/js/widgets-s1-5.js)
    "mass, m (formula known)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "molar mass, M (mass known)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas given as": "",

    // widget string (assets/js/widgets-s1-5.js)
    "amount in mol": "",

    // widget string (assets/js/widgets-s1-5.js)
    "mass in g and a formula": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Work in": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} and {v}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit for {quantity}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, {sym}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, {sym}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, {sym}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, {sym}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Mass, {sym}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "mass": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Formula of the gas": "",

    // widget string (assets/js/widgets-s1-5.js)
    "formula": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Answer": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit check": "",

    // widget string (assets/js/widgets-s1-5.js)
    "(already in {unit})": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a pressure greater than zero.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a volume greater than zero.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a temperature.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "The temperature must be above absolute zero (0 K, {T} °C).": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Type a formula using element symbols up to krypton, such as {a} or {b}.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a mass greater than zero.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter an amount greater than zero.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Waiting for valid values.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq} (the same as {eq2})": "",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too big.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too small.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} °C directly would give a zero or negative answer, which is impossible. Always add 273.15 first.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too big. 1 {dm3} = 1000 {cm3}.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too small. 1 {dm3} = 1000 {cm3}.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Mixed unit sets.</b> kPa goes with {dm3}, and Pa goes with {m3}. Pairing kPa with {m3}, or Pa with {dm3}, puts the answer out by a factor of 1000.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Convert to the units you chose": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Rearrange {eq}": "",

    // widget string (assets/js/widgets-s1-5.js)
    "({n} significant figures)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "In an exam, round to the smallest number of significant figures in the data you were given.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Classic errors to avoid here": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} {times} {v} = J, so it matches R in {Runit}.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "small particles, weak forces (for example helium)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "larger particles, stronger forces (for example ammonia)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Type of gas": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature (0 = very low, 100 = very high)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure (0 = very low, 100 = very high)": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Most ideal conditions": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Least ideal conditions": "",

    // widget string (assets/js/widgets-s1-5.js)
    "How close to ideal?": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Remember": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Far from ideal": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Noticeably non-ideal": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Fairly close to ideal": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Very close to ideal": "",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are far apart": "",

    // widget string (assets/js/widgets-s1-5.js)
    "starting to matter": "",

    // widget string (assets/js/widgets-s1-5.js)
    "significant: particles are crowded": "",

    // widget string (assets/js/widgets-s1-5.js)
    "a large share of the space": "",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are fast and far apart": "",

    // widget string (assets/js/widgets-s1-5.js)
    "significant": "",

    // widget string (assets/js/widgets-s1-5.js)
    "strong effect: particles are slow and close": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume matters": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces matter": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Close to ideal behaviour": "",

    // widget string (assets/js/widgets-s1-5.js)
    "hardly ↔ a lot": "",

    // widget string (assets/js/widgets-s1-5.js)
    "not at all ↔ very": "",

    // widget string (assets/js/widgets-s1-5.js)
    "This picture is a qualitative illustration. The bars are not calculated from any gas equation, and particle sizes are exaggerated.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "A box of gas particles. Higher pressure makes the box smaller so the particles are crowded. Lower temperature makes them slower, and dashed lines show attractions between close neighbours. Three bars below show how much particle volume and intermolecular forces matter and how close the gas is to ideal behaviour.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "volume at low pressure": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Play": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP, V": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{n} mol": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Cube side": "",

    // widget string (assets/js/widgets-s1-5.js)
    "Working": "",

    // widget string (assets/js/widgets-s1-5.js)
    "A cube holding the chosen amount of gas at STP, drawn to scale beside a football about 22 centimetres across and a 1 cubic decimetre cube. The values are in the readout below.": "",

    // widget string (assets/js/widgets-s1-5.js)
    "gas at STP": "",

    // widget string (assets/js/widgets-s1-5.js)
    "football": "",

    // widget string (assets/js/widgets-s1-5.js)
    "scale: {length} cm": "",

    // widget string (assets/js/widgets-s1-5.js)
    "{working}. The same for any ideal gas: {examples}.": "",

  }
});
