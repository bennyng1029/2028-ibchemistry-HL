/* ==========================================================================
   Structure 1 Lab — chem.js
   Shared chemistry helpers. Classic script, no dependencies.
   Everything lives under window.S1.chem.  Load this file FIRST.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};
  var MINUS = '−';   // true minus sign
  var TIMES = '×';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- Constants (IB Chemistry data booklet, first assessment 2025) */
  var constants = {
    NA: 6.02e23,        // Avogadro constant / mol^-1
    R: 8.31,            // gas constant / J K^-1 mol^-1
    Vm_STP: 22.7,       // molar volume of an ideal gas at STP / dm^3 mol^-1
    STP_T: 273.15,      // STP temperature / K
    STP_p: 100,         // STP pressure / kPa
    STP_p_Pa: 1.00e5,   // STP pressure / Pa
    h: 6.63e-34,        // Planck constant / J s
    c: 3.00e8,          // speed of light in vacuum / m s^-1
    zeroC: 273.15       // 0 °C in K
  };
  // Display metadata for the same constants (symbolHtml, valueHtml, unit string for S1.chem.unit).
  var constantInfo = {
    NA: { name: 'Avogadro constant', symbolHtml: '<i>N</i><sub>A</sub>', valueHtml: '6.02 ' + TIMES + ' 10<sup>23</sup>', unit: 'mol-1' },
    R: { name: 'Gas constant', symbolHtml: '<i>R</i>', valueHtml: '8.31', unit: 'J K-1 mol-1' },
    Vm_STP: { name: 'Molar volume of an ideal gas at STP', symbolHtml: '<i>V</i><sub>m</sub>', valueHtml: '22.7', unit: 'dm3 mol-1' },
    STP_T: { name: 'STP temperature', symbolHtml: '<i>T</i>', valueHtml: '273.15', unit: 'K' },
    STP_p: { name: 'STP pressure', symbolHtml: '<i>p</i>', valueHtml: '100', unit: 'kPa' },
    h: { name: 'Planck constant', symbolHtml: '<i>h</i>', valueHtml: '6.63 ' + TIMES + ' 10<sup>' + MINUS + '34</sup>', unit: 'J s' },
    c: { name: 'Speed of light in vacuum', symbolHtml: '<i>c</i>', valueHtml: '3.00 ' + TIMES + ' 10<sup>8</sup>', unit: 'm s-1' }
  };

  /* ---------- Periodic table data, Z = 1–118 ------------------------------
     ar: relative atomic mass to 2 d.p. (null for elements with no stable isotopes; massNumber is then the
         mass number of the longest-lived isotope, as periodic tables print it in brackets, where well established).
     group: 1–18 (null for the f-block rows); La and Ac are placed in group 3, as in the IB data booklet layout.
     block: 's' | 'p' | 'd' | 'f'.   category: 'metal' | 'metalloid' | 'non-metal' | 'unknown' (Z >= 113).   */
  var elements = [
    { z: 1, symbol: 'H', name: 'hydrogen', ar: 1.01, group: 1, period: 1, block: 's', category: 'non-metal' },
    { z: 2, symbol: 'He', name: 'helium', ar: 4.00, group: 18, period: 1, block: 's', category: 'non-metal' },
    { z: 3, symbol: 'Li', name: 'lithium', ar: 6.94, group: 1, period: 2, block: 's', category: 'metal' },
    { z: 4, symbol: 'Be', name: 'beryllium', ar: 9.01, group: 2, period: 2, block: 's', category: 'metal' },
    { z: 5, symbol: 'B', name: 'boron', ar: 10.81, group: 13, period: 2, block: 'p', category: 'metalloid' },
    { z: 6, symbol: 'C', name: 'carbon', ar: 12.01, group: 14, period: 2, block: 'p', category: 'non-metal' },
    { z: 7, symbol: 'N', name: 'nitrogen', ar: 14.01, group: 15, period: 2, block: 'p', category: 'non-metal' },
    { z: 8, symbol: 'O', name: 'oxygen', ar: 16.00, group: 16, period: 2, block: 'p', category: 'non-metal' },
    { z: 9, symbol: 'F', name: 'fluorine', ar: 19.00, group: 17, period: 2, block: 'p', category: 'non-metal' },
    { z: 10, symbol: 'Ne', name: 'neon', ar: 20.18, group: 18, period: 2, block: 'p', category: 'non-metal' },
    { z: 11, symbol: 'Na', name: 'sodium', ar: 22.99, group: 1, period: 3, block: 's', category: 'metal' },
    { z: 12, symbol: 'Mg', name: 'magnesium', ar: 24.31, group: 2, period: 3, block: 's', category: 'metal' },
    { z: 13, symbol: 'Al', name: 'aluminium', ar: 26.98, group: 13, period: 3, block: 'p', category: 'metal' },
    { z: 14, symbol: 'Si', name: 'silicon', ar: 28.09, group: 14, period: 3, block: 'p', category: 'metalloid' },
    { z: 15, symbol: 'P', name: 'phosphorus', ar: 30.97, group: 15, period: 3, block: 'p', category: 'non-metal' },
    { z: 16, symbol: 'S', name: 'sulfur', ar: 32.07, group: 16, period: 3, block: 'p', category: 'non-metal' },
    { z: 17, symbol: 'Cl', name: 'chlorine', ar: 35.45, group: 17, period: 3, block: 'p', category: 'non-metal' },
    { z: 18, symbol: 'Ar', name: 'argon', ar: 39.95, group: 18, period: 3, block: 'p', category: 'non-metal' },
    { z: 19, symbol: 'K', name: 'potassium', ar: 39.10, group: 1, period: 4, block: 's', category: 'metal' },
    { z: 20, symbol: 'Ca', name: 'calcium', ar: 40.08, group: 2, period: 4, block: 's', category: 'metal' },
    { z: 21, symbol: 'Sc', name: 'scandium', ar: 44.96, group: 3, period: 4, block: 'd', category: 'metal' },
    { z: 22, symbol: 'Ti', name: 'titanium', ar: 47.87, group: 4, period: 4, block: 'd', category: 'metal' },
    { z: 23, symbol: 'V', name: 'vanadium', ar: 50.94, group: 5, period: 4, block: 'd', category: 'metal' },
    { z: 24, symbol: 'Cr', name: 'chromium', ar: 52.00, group: 6, period: 4, block: 'd', category: 'metal' },
    { z: 25, symbol: 'Mn', name: 'manganese', ar: 54.94, group: 7, period: 4, block: 'd', category: 'metal' },
    { z: 26, symbol: 'Fe', name: 'iron', ar: 55.85, group: 8, period: 4, block: 'd', category: 'metal' },
    { z: 27, symbol: 'Co', name: 'cobalt', ar: 58.93, group: 9, period: 4, block: 'd', category: 'metal' },
    { z: 28, symbol: 'Ni', name: 'nickel', ar: 58.69, group: 10, period: 4, block: 'd', category: 'metal' },
    { z: 29, symbol: 'Cu', name: 'copper', ar: 63.55, group: 11, period: 4, block: 'd', category: 'metal' },
    { z: 30, symbol: 'Zn', name: 'zinc', ar: 65.38, group: 12, period: 4, block: 'd', category: 'metal' },
    { z: 31, symbol: 'Ga', name: 'gallium', ar: 69.72, group: 13, period: 4, block: 'p', category: 'metal' },
    { z: 32, symbol: 'Ge', name: 'germanium', ar: 72.63, group: 14, period: 4, block: 'p', category: 'metalloid' },
    { z: 33, symbol: 'As', name: 'arsenic', ar: 74.92, group: 15, period: 4, block: 'p', category: 'metalloid' },
    { z: 34, symbol: 'Se', name: 'selenium', ar: 78.97, group: 16, period: 4, block: 'p', category: 'non-metal' },
    { z: 35, symbol: 'Br', name: 'bromine', ar: 79.90, group: 17, period: 4, block: 'p', category: 'non-metal' },
    { z: 36, symbol: 'Kr', name: 'krypton', ar: 83.80, group: 18, period: 4, block: 'p', category: 'non-metal' },
    { z: 37, symbol: 'Rb', name: 'rubidium', ar: 85.47, group: 1, period: 5, block: 's', category: 'metal' },
    { z: 38, symbol: 'Sr', name: 'strontium', ar: 87.62, group: 2, period: 5, block: 's', category: 'metal' },
    { z: 39, symbol: 'Y', name: 'yttrium', ar: 88.91, group: 3, period: 5, block: 'd', category: 'metal' },
    { z: 40, symbol: 'Zr', name: 'zirconium', ar: 91.22, group: 4, period: 5, block: 'd', category: 'metal' },
    { z: 41, symbol: 'Nb', name: 'niobium', ar: 92.91, group: 5, period: 5, block: 'd', category: 'metal' },
    { z: 42, symbol: 'Mo', name: 'molybdenum', ar: 95.95, group: 6, period: 5, block: 'd', category: 'metal' },
    { z: 43, symbol: 'Tc', name: 'technetium', ar: null, group: 7, period: 5, block: 'd', category: 'metal', massNumber: 98 },
    { z: 44, symbol: 'Ru', name: 'ruthenium', ar: 101.07, group: 8, period: 5, block: 'd', category: 'metal' },
    { z: 45, symbol: 'Rh', name: 'rhodium', ar: 102.91, group: 9, period: 5, block: 'd', category: 'metal' },
    { z: 46, symbol: 'Pd', name: 'palladium', ar: 106.42, group: 10, period: 5, block: 'd', category: 'metal' },
    { z: 47, symbol: 'Ag', name: 'silver', ar: 107.87, group: 11, period: 5, block: 'd', category: 'metal' },
    { z: 48, symbol: 'Cd', name: 'cadmium', ar: 112.41, group: 12, period: 5, block: 'd', category: 'metal' },
    { z: 49, symbol: 'In', name: 'indium', ar: 114.82, group: 13, period: 5, block: 'p', category: 'metal' },
    { z: 50, symbol: 'Sn', name: 'tin', ar: 118.71, group: 14, period: 5, block: 'p', category: 'metal' },
    { z: 51, symbol: 'Sb', name: 'antimony', ar: 121.76, group: 15, period: 5, block: 'p', category: 'metalloid' },
    { z: 52, symbol: 'Te', name: 'tellurium', ar: 127.60, group: 16, period: 5, block: 'p', category: 'metalloid' },
    { z: 53, symbol: 'I', name: 'iodine', ar: 126.90, group: 17, period: 5, block: 'p', category: 'non-metal' },
    { z: 54, symbol: 'Xe', name: 'xenon', ar: 131.29, group: 18, period: 5, block: 'p', category: 'non-metal' },
    { z: 55, symbol: 'Cs', name: 'caesium', ar: 132.91, group: 1, period: 6, block: 's', category: 'metal' },
    { z: 56, symbol: 'Ba', name: 'barium', ar: 137.33, group: 2, period: 6, block: 's', category: 'metal' },
    { z: 57, symbol: 'La', name: 'lanthanum', ar: 138.91, group: 3, period: 6, block: 'd', category: 'metal' },
    { z: 58, symbol: 'Ce', name: 'cerium', ar: 140.12, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 59, symbol: 'Pr', name: 'praseodymium', ar: 140.91, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 60, symbol: 'Nd', name: 'neodymium', ar: 144.24, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 61, symbol: 'Pm', name: 'promethium', ar: null, group: null, period: 6, block: 'f', category: 'metal', massNumber: 145 },
    { z: 62, symbol: 'Sm', name: 'samarium', ar: 150.36, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 63, symbol: 'Eu', name: 'europium', ar: 151.96, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 64, symbol: 'Gd', name: 'gadolinium', ar: 157.25, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 65, symbol: 'Tb', name: 'terbium', ar: 158.93, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 66, symbol: 'Dy', name: 'dysprosium', ar: 162.50, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 67, symbol: 'Ho', name: 'holmium', ar: 164.93, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 68, symbol: 'Er', name: 'erbium', ar: 167.26, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 69, symbol: 'Tm', name: 'thulium', ar: 168.93, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 70, symbol: 'Yb', name: 'ytterbium', ar: 173.05, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 71, symbol: 'Lu', name: 'lutetium', ar: 174.97, group: null, period: 6, block: 'f', category: 'metal' },
    { z: 72, symbol: 'Hf', name: 'hafnium', ar: 178.49, group: 4, period: 6, block: 'd', category: 'metal' },
    { z: 73, symbol: 'Ta', name: 'tantalum', ar: 180.95, group: 5, period: 6, block: 'd', category: 'metal' },
    { z: 74, symbol: 'W', name: 'tungsten', ar: 183.84, group: 6, period: 6, block: 'd', category: 'metal' },
    { z: 75, symbol: 'Re', name: 'rhenium', ar: 186.21, group: 7, period: 6, block: 'd', category: 'metal' },
    { z: 76, symbol: 'Os', name: 'osmium', ar: 190.23, group: 8, period: 6, block: 'd', category: 'metal' },
    { z: 77, symbol: 'Ir', name: 'iridium', ar: 192.22, group: 9, period: 6, block: 'd', category: 'metal' },
    { z: 78, symbol: 'Pt', name: 'platinum', ar: 195.08, group: 10, period: 6, block: 'd', category: 'metal' },
    { z: 79, symbol: 'Au', name: 'gold', ar: 196.97, group: 11, period: 6, block: 'd', category: 'metal' },
    { z: 80, symbol: 'Hg', name: 'mercury', ar: 200.59, group: 12, period: 6, block: 'd', category: 'metal' },
    { z: 81, symbol: 'Tl', name: 'thallium', ar: 204.38, group: 13, period: 6, block: 'p', category: 'metal' },
    { z: 82, symbol: 'Pb', name: 'lead', ar: 207.20, group: 14, period: 6, block: 'p', category: 'metal' },
    { z: 83, symbol: 'Bi', name: 'bismuth', ar: 208.98, group: 15, period: 6, block: 'p', category: 'metal' },
    { z: 84, symbol: 'Po', name: 'polonium', ar: null, group: 16, period: 6, block: 'p', category: 'metal', massNumber: 209 },
    { z: 85, symbol: 'At', name: 'astatine', ar: null, group: 17, period: 6, block: 'p', category: 'metalloid', massNumber: 210 },
    { z: 86, symbol: 'Rn', name: 'radon', ar: null, group: 18, period: 6, block: 'p', category: 'non-metal', massNumber: 222 },
    { z: 87, symbol: 'Fr', name: 'francium', ar: null, group: 1, period: 7, block: 's', category: 'metal', massNumber: 223 },
    { z: 88, symbol: 'Ra', name: 'radium', ar: null, group: 2, period: 7, block: 's', category: 'metal', massNumber: 226 },
    { z: 89, symbol: 'Ac', name: 'actinium', ar: null, group: 3, period: 7, block: 'd', category: 'metal', massNumber: 227 },
    { z: 90, symbol: 'Th', name: 'thorium', ar: 232.04, group: null, period: 7, block: 'f', category: 'metal' },
    { z: 91, symbol: 'Pa', name: 'protactinium', ar: 231.04, group: null, period: 7, block: 'f', category: 'metal' },
    { z: 92, symbol: 'U', name: 'uranium', ar: 238.03, group: null, period: 7, block: 'f', category: 'metal' },
    { z: 93, symbol: 'Np', name: 'neptunium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 237 },
    { z: 94, symbol: 'Pu', name: 'plutonium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 244 },
    { z: 95, symbol: 'Am', name: 'americium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 243 },
    { z: 96, symbol: 'Cm', name: 'curium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 247 },
    { z: 97, symbol: 'Bk', name: 'berkelium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 247 },
    { z: 98, symbol: 'Cf', name: 'californium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 251 },
    { z: 99, symbol: 'Es', name: 'einsteinium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 252 },
    { z: 100, symbol: 'Fm', name: 'fermium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 257 },
    { z: 101, symbol: 'Md', name: 'mendelevium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 258 },
    { z: 102, symbol: 'No', name: 'nobelium', ar: null, group: null, period: 7, block: 'f', category: 'metal', massNumber: 259 },
    { z: 103, symbol: 'Lr', name: 'lawrencium', ar: null, group: null, period: 7, block: 'f', category: 'metal' },
    { z: 104, symbol: 'Rf', name: 'rutherfordium', ar: null, group: 4, period: 7, block: 'd', category: 'metal' },
    { z: 105, symbol: 'Db', name: 'dubnium', ar: null, group: 5, period: 7, block: 'd', category: 'metal' },
    { z: 106, symbol: 'Sg', name: 'seaborgium', ar: null, group: 6, period: 7, block: 'd', category: 'metal' },
    { z: 107, symbol: 'Bh', name: 'bohrium', ar: null, group: 7, period: 7, block: 'd', category: 'metal' },
    { z: 108, symbol: 'Hs', name: 'hassium', ar: null, group: 8, period: 7, block: 'd', category: 'metal' },
    { z: 109, symbol: 'Mt', name: 'meitnerium', ar: null, group: 9, period: 7, block: 'd', category: 'metal' },
    { z: 110, symbol: 'Ds', name: 'darmstadtium', ar: null, group: 10, period: 7, block: 'd', category: 'metal' },
    { z: 111, symbol: 'Rg', name: 'roentgenium', ar: null, group: 11, period: 7, block: 'd', category: 'metal' },
    { z: 112, symbol: 'Cn', name: 'copernicium', ar: null, group: 12, period: 7, block: 'd', category: 'metal' },
    { z: 113, symbol: 'Nh', name: 'nihonium', ar: null, group: 13, period: 7, block: 'p', category: 'unknown' },
    { z: 114, symbol: 'Fl', name: 'flerovium', ar: null, group: 14, period: 7, block: 'p', category: 'unknown' },
    { z: 115, symbol: 'Mc', name: 'moscovium', ar: null, group: 15, period: 7, block: 'p', category: 'unknown' },
    { z: 116, symbol: 'Lv', name: 'livermorium', ar: null, group: 16, period: 7, block: 'p', category: 'unknown' },
    { z: 117, symbol: 'Ts', name: 'tennessine', ar: null, group: 17, period: 7, block: 'p', category: 'unknown' },
    { z: 118, symbol: 'Og', name: 'oganesson', ar: null, group: 18, period: 7, block: 'p', category: 'unknown' }
  ];
  var bySymbol = {};
  elements.forEach(function (e) { bySymbol[e.symbol] = e; });

  /** Look up an element by symbol ('Na') or atomic number (11). Returns null if there is no such element. */
  function element(key) {
    if (typeof key === 'number') return elements[key - 1] || null;
    return bySymbol[String(key)] || null;
  }

  /* ---------- Formula / unit formatting ---------------------------------- */
  /**
   * 'H2O' → H<sub>2</sub>O.  Rules:
   *  - digits straight after a letter or ')' are subscripts; a leading number is a coefficient
   *  - '^2-' / '^3+' / '^-' are charges; a bare trailing '+' or '-' is a 1+/1− charge (Na+, Cl-)
   *    (so write oxide as O^2-, not O2-, which reads as superoxide)
   *  - '^14C' gives a mass-number superscript
   *  - '.' before a hydrate part becomes a centred dot: CuSO4.5H2O
   *  - '->' becomes →, '<=>' becomes ⇌
   */
  function formula(str) {
    var s = esc(String(str).trim());
    s = s.replace(/&lt;=&gt;/g, '⇌').replace(/-&gt;/g, '→');
    s = s.replace(/([A-Za-z)\]])(\d+)/g, '$1<sub>$2</sub>');
    s = s.replace(/\^(\d*)([+-])/g, function (m, n, sign) { return '<sup>' + n + (sign === '-' ? MINUS : '+') + '</sup>'; });
    s = s.replace(/\^(\d+)/g, '<sup>$1</sup>');
    s = s.replace(/([A-Za-z)\]]|<\/sub>)([+-])(?![A-Za-z0-9<])/g, function (m, pre, sign) { return pre + '<sup>' + (sign === '-' ? MINUS : '+') + '</sup>'; });
    s = s.replace(/([A-Za-z)\]]|<\/sub>)\.(?=\d*[A-Z])/g, '$1·');
    // An equation (it has spaces) may wrap between terms, but never inside one.
    if (/\s/.test(s)) s = s.split(/\s+/).map(function (tok) { return '<span class="chem__t">' + tok + '</span>'; }).join(' ');
    return s;
  }

  /** 'J K-1 mol-1' → J K<sup>−1</sup> mol<sup>−1</sup>;  'dm3' → dm<sup>3</sup>. */
  function unit(str) {
    var s = esc(String(str).trim());
    return s.replace(/([A-Za-zµΩ°])\^?(-?)(\d+)/g, function (m, a, sign, n) {
      return a + '<sup>' + (sign ? MINUS : '') + n + '</sup>';
    });
  }

  /** Nuclide notation: nuclide(14, 6, 'C') or nuclide(23, 11, 'Na', '+').
   *  A sits above Z, both right-aligned against the symbol, for any number of digits. Z and charge are optional. */
  function nuclide(A, Z, symbol, charge) {
    var hasZ = Z != null && Z !== '';
    var ch = charge ? '<sup>' + esc(String(charge)).replace(/-/g, MINUS) + '</sup>' : '';
    return '<span class="nuclide" data-i18n="off"><span class="nuclide__pre' + (hasZ ? '' : ' nuclide__pre--a') + '"><span>' + esc(A) + '</span>' + (hasZ ? '<span>' + esc(Z) + '</span>' : '') + '</span>' + esc(symbol) + ch + '</span>';
  }

  /** Molar mass in g mol^-1 from a formula string using the Ar table. NaN if an element is unknown or has no Ar.
   *  Handles brackets and hydrates: molarMass('Ca(OH)2'), molarMass('CuSO4.5H2O'). Ignores charges. */
  function molarMass(str) {
    var s = String(str).replace(/\s+/g, '').replace(/\^?\d*[+-]$/, '');
    var parts = s.split(/[.·]/), total = 0;
    for (var p = 0; p < parts.length; p++) {
      var m = /^(\d+)?(.*)$/.exec(parts[p]);
      var mult = m[1] ? parseInt(m[1], 10) : 1;
      total += mult * parseGroup(m[2]);
    }
    return Math.round(total * 100) / 100;

    function parseGroup(g) {
      var i = 0;
      function walk() {
        var sum = 0;
        while (i < g.length) {
          var ch = g[i];
          if (ch === '(' || ch === '[') { i++; var inner = walk(); sum += inner * num(); }
          else if (ch === ')' || ch === ']') { i++; return sum; }
          else {
            var mm = /^[A-Z][a-z]?/.exec(g.slice(i));
            if (!mm) return NaN;
            var el = bySymbol[mm[0]];
            if (!el && mm[0].length === 2) { el = bySymbol[mm[0][0]]; mm = [mm[0][0]]; }
            if (!el || el.ar == null) return NaN;
            i += mm[0].length;
            sum += el.ar * num();
          }
        }
        return sum;
      }
      function num() {
        var mm = /^\d+/.exec(g.slice(i));
        if (!mm) return 1;
        i += mm[0].length;
        return parseInt(mm[0], 10);
      }
      return walk();
    }
  }

  /* ---------- Significant figures ---------------------------------------- */
  // Decimal digits of |x| rounded HALF-UP to n significant figures (avoids binary float traps such as 310.15).
  function sigDigits(x, n) {
    var parts = Math.abs(x).toExponential(12).split('e');
    var digs = parts[0].replace('.', '').split('').map(Number);
    var exp = parseInt(parts[1], 10);
    if (digs.length > n) {
      var up = digs[n] >= 5;
      digs = digs.slice(0, n);
      if (up) {
        var i = n - 1;
        while (i >= 0) {
          if (digs[i] === 9) { digs[i] = 0; i--; } else { digs[i]++; break; }
        }
        if (i < 0) { digs.unshift(1); digs.pop(); exp++; }
      }
    }
    while (digs.length < n) digs.push(0);
    return { digits: digs.join(''), exp: exp };
  }

  /** Round x to n significant figures, returning a Number. */
  function roundSig(x, n) {
    if (!isFinite(x) || x === 0) return x;
    var d = sigDigits(x, n);
    return Number((x < 0 ? '-' : '') + d.digits[0] + (n > 1 ? '.' + d.digits.slice(1) : '') + 'e' + d.exp);
  }

  /** x to n s.f. as a plain decimal string, keeping trailing zeros: toSig(0.25, 3) → '0.250'. */
  function toSig(x, n) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return n > 1 ? '0.' + new Array(n).join('0') : '0';
    var d = sigDigits(x, n), out;
    if (d.exp < 0) out = '0.' + new Array(-d.exp).join('0') + d.digits;
    else if (d.exp + 1 >= n) out = d.digits + new Array(d.exp + 2 - n).join('0');
    else out = d.digits.slice(0, d.exp + 1) + '.' + d.digits.slice(d.exp + 1);
    return (x < 0 ? '-' : '') + out;
  }

  /** Scientific notation as HTML: sci(6.02e23, 3) → '6.02 × 10<sup>23</sup>'. */
  function sci(x, n) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return '0';
    n = n || 3;
    var d = sigDigits(x, n);
    var mant = d.digits[0] + (n > 1 ? '.' + d.digits.slice(1) : '');
    return (x < 0 ? MINUS : '') + mant + ' ' + TIMES + ' 10<sup>' + (d.exp < 0 ? MINUS : '') + Math.abs(d.exp) + '</sup>';
  }

  /** Friendly HTML number to n s.f.: plain decimal for ordinary sizes, scientific notation otherwise. */
  function fmt(x, n) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return '0';
    n = n || 3;
    var d = sigDigits(x, n);
    if (d.exp >= 5 || d.exp < -3) return sci(x, n);
    return toSig(x, n).replace('-', MINUS);
  }

  /** Fixed decimal places as HTML-safe text with a true minus sign: fixed(-5.2, 2) → '−5.20'. */
  function fixed(x, dp) {
    var r = Number(Math.abs(x).toFixed(dp == null ? 2 : dp));
    var s = Math.abs(x).toFixed(dp == null ? 2 : dp);
    return (x < 0 && r !== 0 ? MINUS : '') + s;
  }

  /** Count sig figs in a typed mantissa. Returns {min, max}; they differ only for trailing zeros with no decimal point (e.g. '1200' → 2–4). */
  function countSigFigs(mantissa) {
    var s = String(mantissa).replace(/^[+-]/, '');
    if (s.indexOf('.') > -1) {
      var d = s.replace('.', '').replace(/^0+/, '');
      var n = d.length || 1;
      return { min: n, max: n };
    }
    var t = s.replace(/^0+/, '');
    if (!t) return { min: 1, max: 1 };
    var core = t.replace(/0+$/, '');
    return { min: Math.max(core.length, 1), max: t.length };
  }

  /* ---------- Parsing typed numbers --------------------------------------- */
  var SUPER = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' };

  /**
   * Parse what a student typed. Accepts 0.0012, 1.2e-3, 1.2E-3, 1.2x10^-3, 1.2 × 10^-3, 1.2*10^-3,
   * 1.2 × 10⁻³, 10^-3, comma decimals (1,2e-3) and a trailing unit (0.25 mol).
   * Returns {value, sfMin, sfMax, text} or null if it is not a number.
   */
  function parseNumber(input) {
    if (typeof input === 'number') return isFinite(input) ? { value: input, sfMin: 1, sfMax: 15, text: String(input) } : null;
    var s = String(input == null ? '' : input).trim();
    if (!s) return null;
    s = s.replace(/[−–—‐‑]/g, '-');
    s = s.replace(/[⁰¹²³⁴-⁹⁺⁻]+/g, function (m) {
      return '^' + m.split('').map(function (ch) { return SUPER[ch]; }).join('');
    });
    s = s.replace(/\s+/g, '');
    if (s.indexOf(',') > -1) {
      if (s.indexOf('.') > -1 || (s.match(/,/g) || []).length > 1) s = s.replace(/,/g, '');
      else s = s.replace(',', '.');
    }
    s = s.replace(/(?:\*\*|[xX×*·⋅])10(?:\^|\*\*)?\(?([+-]?\d+)\)?/, 'e$1');
    s = s.replace(/^([+-]?)10(?:\^|\*\*)\(?([+-]?\d+)\)?/, '$11e$2');
    var m = /^([+-]?)(\d+\.?\d*|\.\d+)(?:[eE]([+-]?\d+))?(.*)$/.exec(s);
    if (!m) return null;
    if (m[4] && !/^[A-Za-zµ°%]/.test(m[4])) return null;
    var value = Number(m[1] + m[2] + (m[3] ? 'e' + m[3] : ''));
    if (!isFinite(value)) return null;
    var sf = countSigFigs(m[2]);
    return { value: value, sfMin: sf.min, sfMax: sf.max, text: s };
  }

  function parseTolerance(tol, answer) {
    // → absolute tolerance. Accepts '1%' (relative), {rel: 0.01}, {abs: 0.5}, a bare number or numeric string (absolute).
    var rel = null, abs = null;
    if (tol == null || tol === '') rel = 0.01;
    else if (typeof tol === 'number') abs = tol;
    else if (typeof tol === 'object') { if (tol.rel != null) rel = Number(tol.rel); if (tol.abs != null) abs = Number(tol.abs); }
    else {
      var t = String(tol).trim();
      if (/%$/.test(t)) rel = parseFloat(t) / 100;
      else abs = parseFloat(t.replace(/^abs:/i, ''));
    }
    var out = 0;
    if (rel != null && isFinite(rel)) out = Math.max(out, Math.abs(answer) * rel);
    if (abs != null && isFinite(abs)) out = Math.max(out, abs);
    if (out === 0) out = Math.abs(answer) * 1e-9 || 1e-12;
    return out;
  }

  function sfRange(sigfigs) {
    if (sigfigs == null || sigfigs === '') return null;
    if (Array.isArray(sigfigs)) return [Number(sigfigs[0]), Number(sigfigs[1])];
    var s = String(sigfigs).split(/[-–,]/).map(Number);
    return s.length > 1 ? [s[0], s[1]] : [s[0], s[0]];
  }

  /**
   * Check a typed numeric answer.
   * spec = { answer: Number, tolerance: '1%' | {rel} | {abs} | Number(absolute) (default 1 % relative),
   *          sigfigs: 3 | [2, 3] | '2-3' (optional) }
   * Returns { status: 'correct' | 'sigfig' | 'wrong' | 'invalid', value, sfMin, sfMax, clue }
   *   'sigfig' = the value is right but the number of significant figures is not.
   *   clue (only when wrong) = 'power10' | 'sign' | null
   */
  function checkNumeric(input, spec) {
    var p = parseNumber(input);
    if (!p) return { status: 'invalid', value: null, clue: null };
    var a = Number(spec.answer);
    var tol = parseTolerance(spec.tolerance, a);
    var range = sfRange(spec.sigfigs);
    var diff = Math.abs(p.value - a);
    var within = diff <= tol * (1 + 1e-9) + Math.abs(a) * 1e-12;
    var sfOK = !range || (p.sfMax >= range[0] && p.sfMin <= range[1]);
    var res = { status: 'wrong', value: p.value, sfMin: p.sfMin, sfMax: p.sfMax, clue: null };
    if (within) { res.status = sfOK ? 'correct' : 'sigfig'; return res; }
    if (range && p.sfMax >= 2) {
      // Correctly rounded to a different number of s.f. than asked for (matters when the tolerance is tight).
      for (var n = p.sfMin; n <= p.sfMax; n++) {
        if (n >= 2 && n !== range[0] && Math.abs(roundSig(a, n) - p.value) <= Math.abs(a) * 1e-9) { res.status = 'sigfig'; return res; }
      }
    }
    if (a !== 0 && p.value !== 0) {
      if (Math.abs(p.value + a) <= tol) res.clue = 'sign';
      else {
        var ratio = Math.log(Math.abs(p.value / a)) / Math.LN10, k = Math.round(ratio);
        if (k !== 0 && Math.abs(Math.abs(p.value) / Math.pow(10, k) - Math.abs(a)) <= tol && (p.value > 0) === (a > 0)) res.clue = 'power10';
      }
    }
    return res;
  }

  /** Turn a checkNumeric result into student-facing feedback: {tone: 'right'|'partial'|'wrong', label, html}. */
  function describeCheck(res, spec) {
    var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
    var range = sfRange(spec && spec.sigfigs);
    if (res.status === 'correct') return { tone: 'right', label: t('Correct'), html: '' };
    if (res.status === 'sigfig') {
      var msg = !range ? '' : range[0] !== range[1] ? t('Now check your significant figures. Give your answer to {a} or {b} significant figures.', { a: range[0], b: range[1] })
        : range[0] === 1 ? t('Now check your significant figures. Give your answer to 1 significant figure.')
        : t('Now check your significant figures. Give your answer to {n} significant figures.', { n: range[0] });
      return { tone: 'partial', label: t('Right value'), html: msg };
    }
    if (res.status === 'invalid') return { tone: 'partial', label: t('That is not a number I can read'), html: t('Type a number such as <span class="mono">0.025</span>, <span class="mono">2.5e-2</span> or <span class="mono">2.5x10^-2</span>.') };
    if (res.clue === 'power10') return { tone: 'wrong', label: t('Not yet'), html: t('Your digits look right but the power of ten is off. Check your unit conversions (for example cm<sup>3</sup> to dm<sup>3</sup>, or g to kg).') };
    if (res.clue === 'sign') return { tone: 'wrong', label: t('Not yet'), html: t('The size is right but the sign is wrong.') };
    return { tone: 'wrong', label: t('Not yet'), html: '' };
  }

  S1.chem = {
    constants: constants,
    constantInfo: constantInfo,
    elements: elements,
    element: element,
    formula: formula,
    unit: unit,
    nuclide: nuclide,
    molarMass: molarMass,
    roundSig: roundSig,
    toSig: toSig,
    sci: sci,
    fmt: fmt,
    fixed: fixed,
    countSigFigs: countSigFigs,
    parseNumber: parseNumber,
    checkNumeric: checkNumeric,
    describeCheck: describeCheck,
    escapeHtml: esc,
    MINUS: MINUS,
    TIMES: TIMES
  };
})();
