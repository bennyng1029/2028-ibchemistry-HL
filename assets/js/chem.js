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

  /* ---------- Periodic table data, Z = 1–36 (Ar to 2 d.p.) --------------- */
  var elements = [
    { z: 1, symbol: 'H', name: 'hydrogen', ar: 1.01 },
    { z: 2, symbol: 'He', name: 'helium', ar: 4.00 },
    { z: 3, symbol: 'Li', name: 'lithium', ar: 6.94 },
    { z: 4, symbol: 'Be', name: 'beryllium', ar: 9.01 },
    { z: 5, symbol: 'B', name: 'boron', ar: 10.81 },
    { z: 6, symbol: 'C', name: 'carbon', ar: 12.01 },
    { z: 7, symbol: 'N', name: 'nitrogen', ar: 14.01 },
    { z: 8, symbol: 'O', name: 'oxygen', ar: 16.00 },
    { z: 9, symbol: 'F', name: 'fluorine', ar: 19.00 },
    { z: 10, symbol: 'Ne', name: 'neon', ar: 20.18 },
    { z: 11, symbol: 'Na', name: 'sodium', ar: 22.99 },
    { z: 12, symbol: 'Mg', name: 'magnesium', ar: 24.31 },
    { z: 13, symbol: 'Al', name: 'aluminium', ar: 26.98 },
    { z: 14, symbol: 'Si', name: 'silicon', ar: 28.09 },
    { z: 15, symbol: 'P', name: 'phosphorus', ar: 30.97 },
    { z: 16, symbol: 'S', name: 'sulfur', ar: 32.07 },
    { z: 17, symbol: 'Cl', name: 'chlorine', ar: 35.45 },
    { z: 18, symbol: 'Ar', name: 'argon', ar: 39.95 },
    { z: 19, symbol: 'K', name: 'potassium', ar: 39.10 },
    { z: 20, symbol: 'Ca', name: 'calcium', ar: 40.08 },
    { z: 21, symbol: 'Sc', name: 'scandium', ar: 44.96 },
    { z: 22, symbol: 'Ti', name: 'titanium', ar: 47.87 },
    { z: 23, symbol: 'V', name: 'vanadium', ar: 50.94 },
    { z: 24, symbol: 'Cr', name: 'chromium', ar: 52.00 },
    { z: 25, symbol: 'Mn', name: 'manganese', ar: 54.94 },
    { z: 26, symbol: 'Fe', name: 'iron', ar: 55.85 },
    { z: 27, symbol: 'Co', name: 'cobalt', ar: 58.93 },
    { z: 28, symbol: 'Ni', name: 'nickel', ar: 58.69 },
    { z: 29, symbol: 'Cu', name: 'copper', ar: 63.55 },
    { z: 30, symbol: 'Zn', name: 'zinc', ar: 65.38 },
    { z: 31, symbol: 'Ga', name: 'gallium', ar: 69.72 },
    { z: 32, symbol: 'Ge', name: 'germanium', ar: 72.63 },
    { z: 33, symbol: 'As', name: 'arsenic', ar: 74.92 },
    { z: 34, symbol: 'Se', name: 'selenium', ar: 78.97 },
    { z: 35, symbol: 'Br', name: 'bromine', ar: 79.90 },
    { z: 36, symbol: 'Kr', name: 'krypton', ar: 83.80 }
  ];
  var bySymbol = {};
  elements.forEach(function (e) { bySymbol[e.symbol] = e; });

  /** Look up an element by symbol ('Na') or atomic number (11). Returns null if not in Z = 1–36. */
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

  /** Molar mass in g mol^-1 from a formula string using the Ar table (Z ≤ 36). NaN if unknown element.
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
            if (!el) return NaN;
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
