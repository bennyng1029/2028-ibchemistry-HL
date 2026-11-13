/* ==========================================================================
   Structure Lab — periodic-data.js   (optional; load after chem.js)
   Property data for trend plots and the periodic table widgets: S1.periodic.

   VALUES AND SOURCES
   Every number in DATA except the one listed under "Not from the booklet" is the
   value printed in the IB Chemistry data booklet, first assessment 2025
   (version 1.1, updated February 2024).  The values were machine-read from an
   unofficial mirror of the booklet PDF and compared by eye with the rendered
   pages: "IB data booklet 2025 (mirror), verified 2026-11-13".  The mirror is
   not an official IB download, so re-check against the official booklet if in
   doubt.  null means the booklet prints no value.  Coverage is Z = 1–103;
   Z = 104–118 have a configuration only.

   en      Electronegativity (Pauling scale), 1 d.p.
           Booklet section 9 — IB data booklet 2025 (mirror), verified 2026-11-13.
           The booklet prints no value for He, Ne, Ar, Kr, Xe, Rn, Pm, Eu, Tb, Yb
           or Am–Lr.
   ie1     First ionization energy / kJ mol^-1.
           Booklet section 9 — IB data booklet 2025 (mirror), verified 2026-11-13.
           No value for At.
   ea      First electron affinity / kJ mol^-1, with the booklet's sign (negative:
           energy is released).  ea2 is the second electron affinity, which the
           booklet prints in brackets for O (+753) and S (+545) only.
           Booklet section 9 — IB data booklet 2025 (mirror), verified 2026-11-13.
           null where the booklet cell is blank (for example He, Be, N, Ne, Mg, Ar,
           Mn, Zn, Kr, Cd, Xe, Hg, Rn).  Dy is printed as "< 0" and is null here.
           Yb is printed as 2 (positive).
   radius  Atomic radius / pm.  The booklet states that these are covalent radii.
           Booklet section 10 — IB data booklet 2025 (mirror), verified 2026-11-13.
   ions    Ionic radius / pm with the ion charge, in the order the booklet prints
           them (S1.periodic.series('ionRadius', …) uses the first).
           Booklet section 10 — IB data booklet 2025 (mirror), verified 2026-11-13.
           The booklet prints "(+3)" for In and Ho; read here as 3+.
   mpC bpC Melting and boiling point / °C at 101.325 kPa, exactly as printed.
           Booklet section 8 — IB data booklet 2025 (mirror), verified 2026-11-13.
           No melting point for He, Fm, No, Lr; no boiling point for Cf–Lr.
           est lists the values the booklet prints in brackets ('mp' and/or 'bp':
           Pm, Pa, Np, Am, Bk boiling points and the Es melting point).
           The booklet gives C as 3500 / 4827 and As as 816.8 / 613.0 without
           comment: carbon and arsenic sublime at this pressure.
   mp bp   The same two values in kelvin: booklet value + 273.15, rounded to the
           nearest kelvin.  Derived from the booklet, not printed in it.
   config  Ground-state electron configuration, built by the Aufbau order with the
           accepted exceptions listed in EXCEPTIONS (Cr, Cu, Nb, Mo, Ru, Rh, Pd, Ag,
           La, Ce, Gd, Pt, Au, Ac, Th, Pa, U, Np, Cm, Lr).  NOT from the booklet,
           which has no configurations.  Z = 1–36 checked against a hand-written
           list and Z = 1–108, 112–118 against an independent periodic-table
           data set on 2026-11-13; Ds and Rg are unmeasured and follow plain Aufbau.

   Not from the booklet (S1.periodic.nonBooklet):
     Xe en = 2.6   The booklet leaves Xe blank.  2.60 is the Pauling-scale value
                   in the CRC Handbook electronegativity table (checked through
                   secondary listings of that table, 2026-11-13).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};

  var DATA = {
    1: {"en": 2.2, "ie1": 1312, "radius": 32, "ions": [], "mp": 14, "bp": 20, "ea": -73, "mpC": -259.2, "bpC": -252.9},
    2: {"en": null, "ie1": 2372, "radius": 37, "ions": [], "mp": null, "bp": 4, "ea": null, "mpC": null, "bpC": -268.9},
    3: {"en": 1.0, "ie1": 520, "radius": 130, "ions": [{"charge": 1, "radius": 76}], "mp": 454, "bp": 1615, "ea": -60, "mpC": 180.5, "bpC": 1342},
    4: {"en": 1.6, "ie1": 900, "radius": 99, "ions": [{"charge": 2, "radius": 45}], "mp": 1560, "bp": 2741, "ea": null, "mpC": 1287, "bpC": 2468},
    5: {"en": 2.0, "ie1": 801, "radius": 84, "ions": [{"charge": 3, "radius": 27}], "mp": 2350, "bp": 4273, "ea": -27, "mpC": 2077, "bpC": 4000},
    6: {"en": 2.6, "ie1": 1086, "radius": 75, "ions": [{"charge": 4, "radius": 16}], "mp": 3773, "bp": 5100, "ea": -122, "mpC": 3500, "bpC": 4827},
    7: {"en": 3.0, "ie1": 1402, "radius": 71, "ions": [{"charge": -3, "radius": 146}], "mp": 63, "bp": 77, "ea": null, "mpC": -210.0, "bpC": -195.8},
    8: {"en": 3.4, "ie1": 1314, "radius": 64, "ions": [{"charge": -2, "radius": 140}], "mp": 54, "bp": 90, "ea": -141, "ea2": 753, "mpC": -218.8, "bpC": -183.0},
    9: {"en": 4.0, "ie1": 1681, "radius": 60, "ions": [{"charge": -1, "radius": 133}], "mp": 53, "bp": 85, "ea": -328, "mpC": -219.7, "bpC": -188.1},
    10: {"en": null, "ie1": 2081, "radius": 62, "ions": [], "mp": 25, "bp": 27, "ea": null, "mpC": -248.6, "bpC": -246.0},
    11: {"en": 0.9, "ie1": 496, "radius": 160, "ions": [{"charge": 1, "radius": 102}], "mp": 371, "bp": 1156, "ea": -53, "mpC": 97.79, "bpC": 882.9},
    12: {"en": 1.3, "ie1": 738, "radius": 140, "ions": [{"charge": 2, "radius": 72}], "mp": 923, "bp": 1363, "ea": null, "mpC": 650.0, "bpC": 1090},
    13: {"en": 1.6, "ie1": 578, "radius": 124, "ions": [{"charge": 3, "radius": 54}], "mp": 933, "bp": 2792, "ea": -42, "mpC": 660.3, "bpC": 2519},
    14: {"en": 1.9, "ie1": 787, "radius": 114, "ions": [{"charge": 4, "radius": 40}], "mp": 1687, "bp": 3538, "ea": -134, "mpC": 1414, "bpC": 3265},
    15: {"en": 2.2, "ie1": 1012, "radius": 109, "ions": [{"charge": 5, "radius": 38}], "mp": 317, "bp": 554, "ea": -72, "mpC": 44.15, "bpC": 280.5},
    16: {"en": 2.6, "ie1": 1000, "radius": 104, "ions": [{"charge": -2, "radius": 184}], "mp": 388, "bp": 718, "ea": -200, "ea2": 545, "mpC": 115.2, "bpC": 444.6},
    17: {"en": 3.2, "ie1": 1251, "radius": 100, "ions": [{"charge": -1, "radius": 181}], "mp": 172, "bp": 239, "ea": -349, "mpC": -101.5, "bpC": -34.04},
    18: {"en": null, "ie1": 1520, "radius": 101, "ions": [], "mp": 84, "bp": 87, "ea": null, "mpC": -189.3, "bpC": -185.8},
    19: {"en": 0.8, "ie1": 419, "radius": 200, "ions": [{"charge": 1, "radius": 138}], "mp": 337, "bp": 1032, "ea": -48, "mpC": 63.38, "bpC": 758.8},
    20: {"en": 1.0, "ie1": 590, "radius": 174, "ions": [{"charge": 2, "radius": 100}], "mp": 1115, "bp": 1757, "ea": -2, "mpC": 842.0, "bpC": 1484},
    21: {"en": 1.4, "ie1": 633, "radius": 159, "ions": [{"charge": 3, "radius": 75}], "mp": 1814, "bp": 3109, "ea": -18, "mpC": 1541, "bpC": 2836},
    22: {"en": 1.5, "ie1": 659, "radius": 148, "ions": [{"charge": 2, "radius": 86}, {"charge": 4, "radius": 61}], "mp": 1943, "bp": 3560, "ea": -8, "mpC": 1670, "bpC": 3287},
    23: {"en": 1.6, "ie1": 651, "radius": 144, "ions": [{"charge": 2, "radius": 79}, {"charge": 5, "radius": 54}], "mp": 2183, "bp": 3680, "ea": -51, "mpC": 1910, "bpC": 3407},
    24: {"en": 1.7, "ie1": 653, "radius": 130, "ions": [{"charge": 3, "radius": 62}, {"charge": 6, "radius": 44}], "mp": 2180, "bp": 2944, "ea": -64, "mpC": 1907, "bpC": 2671},
    25: {"en": 1.6, "ie1": 717, "radius": 129, "ions": [{"charge": 2, "radius": 83}, {"charge": 4, "radius": 53}], "mp": 1519, "bp": 2334, "ea": null, "mpC": 1246, "bpC": 2061},
    26: {"en": 1.8, "ie1": 762, "radius": 124, "ions": [{"charge": 2, "radius": 61}, {"charge": 3, "radius": 55}], "mp": 1811, "bp": 3134, "ea": -15, "mpC": 1538, "bpC": 2861},
    27: {"en": 1.9, "ie1": 760, "radius": 118, "ions": [{"charge": 2, "radius": 65}, {"charge": 3, "radius": 55}], "mp": 1768, "bp": 3200, "ea": -64, "mpC": 1495, "bpC": 2927},
    28: {"en": 1.9, "ie1": 737, "radius": 117, "ions": [{"charge": 2, "radius": 69}], "mp": 1728, "bp": 3186, "ea": -112, "mpC": 1455, "bpC": 2913},
    29: {"en": 1.9, "ie1": 745, "radius": 122, "ions": [{"charge": 1, "radius": 77}, {"charge": 2, "radius": 73}], "mp": 1358, "bp": 2833, "ea": -119, "mpC": 1085, "bpC": 2560},
    30: {"en": 1.6, "ie1": 906, "radius": 120, "ions": [{"charge": 2, "radius": 74}], "mp": 693, "bp": 1180, "ea": null, "mpC": 419.5, "bpC": 907.0},
    31: {"en": 1.8, "ie1": 579, "radius": 123, "ions": [{"charge": 3, "radius": 62}], "mp": 303, "bp": 2502, "ea": -41, "mpC": 29.77, "bpC": 2229},
    32: {"en": 2.0, "ie1": 762, "radius": 120, "ions": [{"charge": 4, "radius": 53}, {"charge": -4, "radius": 272}], "mp": 1211, "bp": 3106, "ea": -119, "mpC": 938.2, "bpC": 2833},
    33: {"en": 2.2, "ie1": 944, "radius": 120, "ions": [{"charge": 3, "radius": 58}, {"charge": 5, "radius": 46}], "mp": 1090, "bp": 886, "ea": -78, "mpC": 816.8, "bpC": 613.0},
    34: {"en": 2.6, "ie1": 941, "radius": 118, "ions": [{"charge": -2, "radius": 198}], "mp": 494, "bp": 958, "ea": -195, "mpC": 220.8, "bpC": 684.8},
    35: {"en": 3.0, "ie1": 1140, "radius": 117, "ions": [{"charge": -1, "radius": 196}], "mp": 266, "bp": 332, "ea": -325, "mpC": -7.05, "bpC": 58.78},
    36: {"en": null, "ie1": 1351, "radius": 116, "ions": [], "mp": 116, "bp": 120, "ea": null, "mpC": -157.4, "bpC": -153.4},
    37: {"en": 0.8, "ie1": 403, "radius": 215, "ions": [{"charge": 1, "radius": 152}], "mp": 312, "bp": 961, "ea": -47, "mpC": 39.3, "bpC": 687.8},
    38: {"en": 1.0, "ie1": 549, "radius": 190, "ions": [{"charge": 2, "radius": 118}], "mp": 1042, "bp": 1650, "ea": -5, "mpC": 768.8, "bpC": 1377},
    39: {"en": 1.2, "ie1": 600, "radius": 176, "ions": [{"charge": 3, "radius": 90}], "mp": 1795, "bp": 3618, "ea": -30, "mpC": 1522, "bpC": 3345},
    40: {"en": 1.3, "ie1": 640, "radius": 164, "ions": [{"charge": 4, "radius": 72}], "mp": 2127, "bp": 4679, "ea": -41, "mpC": 1854, "bpC": 4406},
    41: {"en": 1.6, "ie1": 652, "radius": 156, "ions": [{"charge": 3, "radius": 72}, {"charge": 5, "radius": 64}], "mp": 2750, "bp": 5014, "ea": -88, "mpC": 2477, "bpC": 4741},
    42: {"en": 2.2, "ie1": 684, "radius": 146, "ions": [{"charge": 4, "radius": 65}], "mp": 2895, "bp": 4912, "ea": -72, "mpC": 2622, "bpC": 4639},
    43: {"en": 2.1, "ie1": 702, "radius": 138, "ions": [{"charge": 4, "radius": 65}], "mp": 2430, "bp": 4535, "ea": -53, "mpC": 2157, "bpC": 4262},
    44: {"en": 2.2, "ie1": 710, "radius": 136, "ions": [{"charge": 3, "radius": 68}, {"charge": 4, "radius": 62}], "mp": 2606, "bp": 4420, "ea": -101, "mpC": 2333, "bpC": 4147},
    45: {"en": 2.3, "ie1": 720, "radius": 134, "ions": [{"charge": 3, "radius": 67}, {"charge": 4, "radius": 60}], "mp": 2236, "bp": 3968, "ea": -110, "mpC": 1963, "bpC": 3695},
    46: {"en": 2.2, "ie1": 804, "radius": 130, "ions": [{"charge": 2, "radius": 86}, {"charge": 4, "radius": 62}], "mp": 1828, "bp": 3236, "ea": -54, "mpC": 1555, "bpC": 2963},
    47: {"en": 1.9, "ie1": 731, "radius": 136, "ions": [{"charge": 1, "radius": 115}], "mp": 1235, "bp": 2435, "ea": -126, "mpC": 961.8, "bpC": 2162},
    48: {"en": 1.7, "ie1": 868, "radius": 140, "ions": [{"charge": 2, "radius": 95}], "mp": 594, "bp": 1040, "ea": null, "mpC": 321.1, "bpC": 766.8},
    49: {"en": 1.8, "ie1": 558, "radius": 142, "ions": [{"charge": 3, "radius": 80}], "mp": 430, "bp": 2300, "ea": -29, "mpC": 156.6, "bpC": 2027},
    50: {"en": 2.0, "ie1": 709, "radius": 140, "ions": [{"charge": 2, "radius": 118}, {"charge": 4, "radius": 69}], "mp": 505, "bp": 2859, "ea": -107, "mpC": 231.9, "bpC": 2586},
    51: {"en": 2.0, "ie1": 831, "radius": 140, "ions": [{"charge": 3, "radius": 76}], "mp": 904, "bp": 1860, "ea": -101, "mpC": 630.6, "bpC": 1587},
    52: {"en": 2.1, "ie1": 869, "radius": 137, "ions": [{"charge": -2, "radius": 221}], "mp": 723, "bp": 1261, "ea": -190, "mpC": 449.5, "bpC": 987.8},
    53: {"en": 2.7, "ie1": 1008, "radius": 136, "ions": [{"charge": -1, "radius": 220}], "mp": 387, "bp": 458, "ea": -295, "mpC": 113.7, "bpC": 184.4},
    54: {"en": 2.6, "ie1": 1170, "radius": 136, "ions": [], "mp": 161, "bp": 165, "ea": null, "mpC": -111.8, "bpC": -108.1},
    55: {"en": 0.8, "ie1": 376, "radius": 238, "ions": [{"charge": 1, "radius": 167}], "mp": 302, "bp": 944, "ea": -46, "mpC": 28.44, "bpC": 670.8},
    56: {"en": 0.9, "ie1": 503, "radius": 206, "ions": [{"charge": 2, "radius": 135}], "mp": 998, "bp": 2118, "ea": -14, "mpC": 725.0, "bpC": 1845},
    57: {"en": 1.1, "ie1": 538, "radius": 194, "ions": [{"charge": 3, "radius": 103}], "mp": 1193, "bp": 3737, "ea": -45, "mpC": 920.0, "bpC": 3464},
    58: {"en": 1.1, "ie1": 534, "radius": 184, "ions": [{"charge": 3, "radius": 101}, {"charge": 4, "radius": 87}], "mp": 1068, "bp": 3706, "ea": -63, "mpC": 795, "bpC": 3433},
    59: {"en": 1.1, "ie1": 528, "radius": 190, "ions": [{"charge": 3, "radius": 99}, {"charge": 4, "radius": 85}], "mp": 1208, "bp": 3783, "ea": -93, "mpC": 935, "bpC": 3510},
    60: {"en": 1.1, "ie1": 533, "radius": 188, "ions": [{"charge": 3, "radius": 98}], "mp": 1297, "bp": 3347, "ea": -185, "mpC": 1024, "bpC": 3074},
    61: {"en": null, "ie1": 539, "radius": 186, "ions": [{"charge": 3, "radius": 97}], "mp": 1315, "bp": 3003, "ea": null, "mpC": 1042, "bpC": 2730, "est": ["bp"]},
    62: {"en": 1.2, "ie1": 545, "radius": 185, "ions": [{"charge": 3, "radius": 96}], "mp": 1345, "bp": 2064, "ea": null, "mpC": 1072, "bpC": 1791},
    63: {"en": null, "ie1": 547, "radius": 183, "ions": [{"charge": 2, "radius": 117}, {"charge": 3, "radius": 95}], "mp": 1099, "bp": 1869, "ea": -83, "mpC": 826, "bpC": 1596},
    64: {"en": 1.2, "ie1": 593, "radius": 182, "ions": [{"charge": 3, "radius": 94}], "mp": 1586, "bp": 3546, "ea": null, "mpC": 1313, "bpC": 3273},
    65: {"en": null, "ie1": 566, "radius": 181, "ions": [{"charge": 3, "radius": 92}, {"charge": 4, "radius": 76}], "mp": 1633, "bp": 3503, "ea": -112, "mpC": 1360, "bpC": 3230},
    66: {"en": 1.2, "ie1": 573, "radius": 180, "ions": [{"charge": 3, "radius": 91}], "mp": 1683, "bp": 2840, "ea": null, "mpC": 1410, "bpC": 2567},
    67: {"en": 1.2, "ie1": 581, "radius": 179, "ions": [{"charge": 3, "radius": 90}], "mp": 1745, "bp": 2967, "ea": null, "mpC": 1472, "bpC": 2694},
    68: {"en": 1.2, "ie1": 589, "radius": 177, "ions": [{"charge": 3, "radius": 89}], "mp": 1802, "bp": 3173, "ea": null, "mpC": 1529, "bpC": 2900},
    69: {"en": 1.3, "ie1": 597, "radius": 177, "ions": [{"charge": 3, "radius": 88}], "mp": 1818, "bp": 2223, "ea": -99, "mpC": 1545, "bpC": 1950},
    70: {"en": null, "ie1": 603, "radius": 178, "ions": [{"charge": 3, "radius": 87}], "mp": 1097, "bp": 1467, "ea": 2, "mpC": 824, "bpC": 1194},
    71: {"en": 1.0, "ie1": 524, "radius": 174, "ions": [{"charge": 3, "radius": 86}], "mp": 1936, "bp": 3675, "ea": -33, "mpC": 1663, "bpC": 3402},
    72: {"en": 1.3, "ie1": 659, "radius": 164, "ions": [{"charge": 4, "radius": 71}], "mp": 2506, "bp": 4873, "ea": -1, "mpC": 2233, "bpC": 4600},
    73: {"en": 1.5, "ie1": 728, "radius": 158, "ions": [{"charge": 5, "radius": 64}], "mp": 3290, "bp": 5728, "ea": -31, "mpC": 3017, "bpC": 5455},
    74: {"en": 1.7, "ie1": 759, "radius": 150, "ions": [{"charge": 4, "radius": 66}, {"charge": 6, "radius": 60}], "mp": 3687, "bp": 5828, "ea": -79, "mpC": 3414, "bpC": 5555},
    75: {"en": 1.9, "ie1": 756, "radius": 141, "ions": [{"charge": 4, "radius": 63}, {"charge": 7, "radius": 53}], "mp": 3726, "bp": 6173, "ea": -14, "mpC": 3453, "bpC": 5900},
    76: {"en": 2.2, "ie1": 814, "radius": 136, "ions": [{"charge": 4, "radius": 63}, {"charge": 6, "radius": 55}], "mp": 3306, "bp": 5281, "ea": -106, "mpC": 3033, "bpC": 5008},
    77: {"en": 2.2, "ie1": 865, "radius": 132, "ions": [{"charge": 3, "radius": 68}, {"charge": 4, "radius": 63}], "mp": 2719, "bp": 4701, "ea": -151, "mpC": 2446, "bpC": 4428},
    78: {"en": 2.2, "ie1": 864, "radius": 130, "ions": [{"charge": 2, "radius": 80}, {"charge": 4, "radius": 63}], "mp": 2041, "bp": 4098, "ea": -205, "mpC": 1768, "bpC": 3825},
    79: {"en": 2.4, "ie1": 890, "radius": 130, "ions": [{"charge": 1, "radius": 137}, {"charge": 3, "radius": 85}], "mp": 1337, "bp": 3109, "ea": -223, "mpC": 1064, "bpC": 2836},
    80: {"en": 1.9, "ie1": 1007, "radius": 132, "ions": [{"charge": 1, "radius": 119}, {"charge": 2, "radius": 102}], "mp": 234, "bp": 630, "ea": null, "mpC": -38.83, "bpC": 356.6},
    81: {"en": 1.8, "ie1": 589, "radius": 144, "ions": [{"charge": 1, "radius": 150}, {"charge": 3, "radius": 89}], "mp": 577, "bp": 1746, "ea": -36, "mpC": 303.8, "bpC": 1473},
    82: {"en": 1.8, "ie1": 716, "radius": 145, "ions": [{"charge": 2, "radius": 119}, {"charge": 4, "radius": 78}], "mp": 601, "bp": 2022, "ea": -35, "mpC": 327.5, "bpC": 1749},
    83: {"en": 1.9, "ie1": 703, "radius": 150, "ions": [{"charge": 3, "radius": 103}, {"charge": 5, "radius": 76}], "mp": 545, "bp": 1837, "ea": -91, "mpC": 271.4, "bpC": 1564},
    84: {"en": 2.0, "ie1": 812, "radius": 142, "ions": [{"charge": 4, "radius": 97}], "mp": 527, "bp": 1235, "ea": -183, "mpC": 253.8, "bpC": 962.0},
    85: {"en": 2.2, "ie1": null, "radius": 148, "ions": [], "mp": 575, "bp": 610, "ea": -270, "mpC": 301.8, "bpC": 336.8},
    86: {"en": null, "ie1": 1037, "radius": 146, "ions": [], "mp": 202, "bp": 211, "ea": null, "mpC": -71.15, "bpC": -61.85},
    87: {"en": 0.7, "ie1": 393, "radius": 242, "ions": [], "mp": 300, "bp": 950, "ea": -47, "mpC": 27.0, "bpC": 676.8},
    88: {"en": 0.9, "ie1": 509, "radius": 211, "ions": [], "mp": 973, "bp": 1413, "ea": -10, "mpC": 699.8, "bpC": 1140},
    89: {"en": 1.1, "ie1": 499, "radius": 201, "ions": [], "mp": 1323, "bp": 3473, "ea": -34, "mpC": 1050, "bpC": 3200},
    90: {"en": 1.3, "ie1": 609, "radius": 190, "ions": [{"charge": 4, "radius": 94}], "mp": 2023, "bp": 5061, "ea": null, "mpC": 1750, "bpC": 4788},
    91: {"en": 1.5, "ie1": 568, "radius": 184, "ions": [{"charge": 3, "radius": 104}, {"charge": 4, "radius": 90}], "mp": 1845, "bp": 4273, "ea": null, "mpC": 1572, "bpC": 4000, "est": ["bp"]},
    92: {"en": 1.7, "ie1": 598, "radius": 183, "ions": [{"charge": 4, "radius": 89}, {"charge": 6, "radius": 73}], "mp": 1408, "bp": 4091, "ea": null, "mpC": 1135, "bpC": 3818},
    93: {"en": 1.3, "ie1": 605, "radius": 180, "ions": [{"charge": 3, "radius": 101}, {"charge": 4, "radius": 87}], "mp": 910, "bp": 4173, "ea": null, "mpC": 637, "bpC": 3900, "est": ["bp"]},
    94: {"en": 1.3, "ie1": 581, "radius": 180, "ions": [{"charge": 3, "radius": 100}, {"charge": 4, "radius": 86}], "mp": 913, "bp": 3503, "ea": null, "mpC": 640, "bpC": 3230},
    95: {"en": null, "ie1": 576, "radius": 173, "ions": [{"charge": 3, "radius": 98}, {"charge": 4, "radius": 85}], "mp": 1449, "bp": 2340, "ea": null, "mpC": 1176, "bpC": 2067, "est": ["bp"]},
    96: {"en": null, "ie1": 578, "radius": 168, "ions": [{"charge": 3, "radius": 97}], "mp": 1613, "bp": 3383, "ea": null, "mpC": 1340, "bpC": 3110},
    97: {"en": null, "ie1": 598, "radius": 168, "ions": [{"charge": 3, "radius": 96}], "mp": 1259, "bp": 2896, "ea": null, "mpC": 986, "bpC": 2623, "est": ["bp"]},
    98: {"en": null, "ie1": 606, "radius": 168, "ions": [{"charge": 3, "radius": 95}], "mp": 1173, "bp": null, "ea": null, "mpC": 900, "bpC": null},
    99: {"en": null, "ie1": 619, "radius": 165, "ions": [], "mp": 1133, "bp": null, "ea": null, "mpC": 860, "bpC": null, "est": ["mp"]},
    100: {"en": null, "ie1": 627, "radius": 167, "ions": [], "mp": null, "bp": null, "ea": null, "mpC": null, "bpC": null},
    101: {"en": null, "ie1": 635, "radius": 173, "ions": [], "mp": 1100, "bp": null, "ea": null, "mpC": 827, "bpC": null},
    102: {"en": null, "ie1": 642, "radius": 176, "ions": [{"charge": 2, "radius": 110}], "mp": null, "bp": null, "ea": null, "mpC": null, "bpC": null},
    103: {"en": null, "ie1": 473, "radius": 161, "ions": [], "mp": null, "bp": null, "ea": null, "mpC": null, "bpC": null}
  };
  // Values in DATA that the data booklet does not print: {Z: [property, ...]}
  var NON_BOOKLET = { 54: ['en'] };

  var ORDER = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'];
  var CAP = { s: 2, p: 6, d: 10, f: 14 };
  var CORES = [[2, 'He'], [10, 'Ne'], [18, 'Ar'], [36, 'Kr'], [54, 'Xe'], [86, 'Rn']];
  // Changes relative to the simple Aufbau filling: {sublevel: electrons}
  var EXCEPTIONS = {
    24: { '4s': 1, '3d': 5 }, 29: { '4s': 1, '3d': 10 },
    41: { '5s': 1, '4d': 4 }, 42: { '5s': 1, '4d': 5 }, 44: { '5s': 1, '4d': 7 }, 45: { '5s': 1, '4d': 8 }, 46: { '5s': 0, '4d': 10 }, 47: { '5s': 1, '4d': 10 },
    57: { '4f': 0, '5d': 1 }, 58: { '4f': 1, '5d': 1 }, 64: { '4f': 7, '5d': 1 },
    78: { '6s': 1, '5d': 9 }, 79: { '6s': 1, '5d': 10 },
    89: { '5f': 0, '6d': 1 }, 90: { '5f': 0, '6d': 2 }, 91: { '5f': 2, '6d': 1 }, 92: { '5f': 3, '6d': 1 }, 93: { '5f': 4, '6d': 1 }, 96: { '5f': 7, '6d': 1 },
    103: { '6d': 0, '7p': 1 }
  };

  /** Occupied sublevels of the neutral atom: [{sub: '1s', n: 2}, ...] in filling order. */
  function occupancy(z) {
    var left = z, occ = {}, i;
    for (i = 0; i < ORDER.length && left > 0; i++) { var c = Math.min(CAP[ORDER[i][1]], left); occ[ORDER[i]] = c; left -= c; }
    var ex = EXCEPTIONS[z];
    if (ex) for (var k in ex) occ[k] = ex[k];
    return ORDER.filter(function (s) { return occ[s] > 0; }).map(function (s) { return { sub: s, n: occ[s] }; });
  }
  /**
   * Electron configuration string.
   * opts.condensed (default true): start from the noble gas core, e.g. '[Ar] 3d5 4s1'.
   * opts.order: 'shell' (default, sublevels sorted by n: 3d before 4s) or 'filling' (4s before 3d).
   * opts.html: superscript the electron counts.
   */
  function config(z, opts) {
    opts = opts || {};
    var occ = occupancy(z), core = null, i;
    if (opts.condensed !== false) for (i = 0; i < CORES.length; i++) if (CORES[i][0] < z) core = CORES[i];
    if (core) { var coreSubs = occupancy(core[0]).map(function (o) { return o.sub; }); occ = occ.filter(function (o) { return coreSubs.indexOf(o.sub) < 0; }); }
    if (opts.order !== 'filling') occ.sort(function (a, b) { return a.sub[0] - b.sub[0] || 'spdf'.indexOf(a.sub[1]) - 'spdf'.indexOf(b.sub[1]); });
    var parts = occ.map(function (o) { return opts.html ? o.sub + '<sup>' + o.n + '</sup>' : o.sub + o.n; });
    return (core ? '[' + core[1] + '] ' : '') + parts.join(' ');
  }

  S1.periodic = {
    data: DATA,
    nonBooklet: NON_BOOKLET,
    /** get('Na') or get(11) → {z, symbol, name, ar, group, period, block, category, en, ie1, ea, ea2, radius, ions, mp, bp, mpC, bpC, est, config}. Missing values are null (ions and est: []). */
    get: function (key) {
      var el = S1.chem && S1.chem.element(key);
      if (!el) return null;
      var d = DATA[el.z] || {}, out = {}, k;
      for (k in el) out[k] = el[k];
      out.en = d.en == null ? null : d.en; out.ie1 = d.ie1 == null ? null : d.ie1; out.radius = d.radius == null ? null : d.radius;
      out.ions = d.ions || []; out.mp = d.mp == null ? null : d.mp;
      out.bp = d.bp == null ? null : d.bp; out.ea = d.ea == null ? null : d.ea; out.ea2 = d.ea2 == null ? null : d.ea2;
      out.mpC = d.mpC == null ? null : d.mpC; out.bpC = d.bpC == null ? null : d.bpC; out.est = d.est || [];
      out.config = config(el.z);
      return out;
    },
    /** series('ie1', 3, 10) → [{z, symbol, value}] for a trend plot (elements with null are left out). prop 'ionRadius' uses the first listed ion. */
    series: function (prop, zFrom, zTo) {
      var out = [];
      for (var z = zFrom; z <= zTo; z++) {
        var e = S1.periodic.get(z); if (!e) continue;
        var v = prop === 'ionRadius' ? (e.ions[0] ? e.ions[0].radius : null) : e[prop];
        if (v != null) out.push({ z: z, symbol: e.symbol, value: v });
      }
      return out;
    },
    config: config,
    occupancy: occupancy
  };
})();
