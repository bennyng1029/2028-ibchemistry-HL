/* ==========================================================================
   Structure 1 Lab — core.js
   Theme, level (SL/HL) switch, header/footer injection, progress store,
   and auto-init of every component.  Classic script; load after chem.js.
   Public API is documented in docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};
  var doc = document, html = doc.documentElement;

  /* ---------- Site config and topic registry ----------------------------- */
  S1.config = {
    siteName: 'Structure 1 Lab',
    // Set to the public repository URL to show a "Source" link in the footer.
    sourceUrl: 'https://github.com/bennyng1029/2028-ibchemistry-HL'
  };

  // Single source of truth for the five topics (header nav, index cells, hero tiles, pager).
  S1.topics = [
    { id: 's1-1', num: '1.1', sym: 'Pn', short: 'Particulate matter', title: 'Introduction to the particulate nature of matter', blurb: 'Elements, compounds and mixtures. States of matter, changes of state and temperature.', href: 'topics/s1-1.html' },
    { id: 's1-2', num: '1.2', sym: 'Nu', short: 'Nuclear atom', title: 'The nuclear atom', blurb: 'Protons, neutrons and electrons. Isotopes, relative atomic mass and mass spectra.', href: 'topics/s1-2.html' },
    { id: 's1-3', num: '1.3', sym: 'Ec', short: 'Electron configurations', title: 'Electron configurations', blurb: 'Emission spectra, energy levels, orbitals and ionization energy.', href: 'topics/s1-3.html' },
    { id: 's1-4', num: '1.4', sym: 'Ml', short: 'The mole', title: 'Counting particles by mass: the mole', blurb: 'Moles, molar mass, formulas, concentration and gas volumes.', href: 'topics/s1-4.html' },
    { id: 's1-5', num: '1.5', sym: 'Ig', short: 'Ideal gases', title: 'Ideal gases', blurb: 'The ideal gas model, the gas laws and pV = nRT.', href: 'topics/s1-5.html' }
  ];
  S1.topic = function (id) {
    for (var i = 0; i < S1.topics.length; i++) if (S1.topics[i].id === id) return S1.topics[i];
    return null;
  };

  /* ---------- Small utilities -------------------------------------------- */
  var uidN = 0;
  var util = S1.util = {
    escapeHtml: function (s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },
    uid: function (prefix) { return (prefix || 's1') + '-' + (++uidN); },
    /** el('button', {class: 'btn', type: 'button', onclick: fn}, 'Text' | Node | [children]) */
    el: function (tag, attrs, children) {
      var node = doc.createElement(tag), k;
      if (attrs) for (k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k) || attrs[k] == null || attrs[k] === false) continue;
        if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
      }
      if (children != null) (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? doc.createTextNode(c) : c);
      });
      return node;
    },
    shuffle: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    },
    clamp: function (x, lo, hi) { return Math.min(hi, Math.max(lo, x)); },
    emit: function (name, detail) {
      var ev;
      try { ev = new CustomEvent(name, { detail: detail || {} }); }
      catch (e) { ev = doc.createEvent('CustomEvent'); ev.initCustomEvent(name, false, false, detail || {}); }
      doc.dispatchEvent(ev);
    },
    reducedMotion: function () {
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    },
    root: function () { return html.getAttribute('data-root') || (doc.body && doc.body.getAttribute('data-root')) || ''; },
    page: function () { return (doc.body && doc.body.getAttribute('data-page')) || ''; }
  };
  var el = util.el;

  /* ---------- Storage (never throws; falls back to memory) ---------------- */
  var mem = {};
  var store = S1.store = {
    getRaw: function (k) { try { var v = window.localStorage.getItem(k); if (v != null) return v; } catch (e) { /* blocked */ } return k in mem ? mem[k] : null; },
    setRaw: function (k, v) { mem[k] = v; try { window.localStorage.setItem(k, v); } catch (e) { /* blocked */ } },
    remove: function (k) { delete mem[k]; try { window.localStorage.removeItem(k); } catch (e) { /* blocked */ } },
    get: function (k, fallback) { var v = store.getRaw(k); if (v == null) return fallback; try { return JSON.parse(v); } catch (e) { return fallback; } },
    set: function (k, v) { store.setRaw(k, JSON.stringify(v)); }
  };

  /* ---------- Theme ------------------------------------------------------- */
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  S1.theme = {
    /** 'light' | 'dark' — the theme actually showing. */
    get: function () {
      var t = html.getAttribute('data-theme');
      if (t === 'light' || t === 'dark') return t;
      return darkQuery && darkQuery.matches ? 'dark' : 'light';
    },
    set: function (t) {
      html.setAttribute('data-theme', t);
      store.setRaw('s1.theme', t);
      syncThemeButton();
      util.emit('s1:themechange', { theme: t });
    },
    toggle: function () { S1.theme.set(S1.theme.get() === 'dark' ? 'light' : 'dark'); },
    /** Resolved value of a CSS token, e.g. S1.theme.color('--accent') → '#0A6C7D'. Use for canvas drawing. */
    color: function (token) { return getComputedStyle(html).getPropertyValue(token).trim(); },
    /** Run fn(theme) whenever the theme changes (toggle or system change). */
    onChange: function (fn) { doc.addEventListener('s1:themechange', function (e) { fn(e.detail.theme); }); }
  };
  if (darkQuery) {
    var sysChange = function () { if (!html.getAttribute('data-theme')) { syncThemeButton(); util.emit('s1:themechange', { theme: S1.theme.get() }); } };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', sysChange);
    else if (darkQuery.addListener) darkQuery.addListener(sysChange);
  }
  function syncThemeButton() {
    var dark = S1.theme.get() === 'dark';
    Array.prototype.forEach.call(doc.querySelectorAll('.theme-toggle'), function (b) {
      b.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      b.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  /* ---------- Level: SL core only / SL + HL ------------------------------- */
  S1.level = {
    /** 'all' (SL + HL, default) | 'sl' (hide Additional HL). */
    get: function () { return html.getAttribute('data-show') === 'sl' ? 'sl' : 'all'; },
    set: function (v) {
      if (v === 'sl') html.setAttribute('data-show', 'sl'); else html.removeAttribute('data-show');
      store.setRaw('s1.level', v === 'sl' ? 'sl' : 'all');
      syncLevelButtons();
      util.emit('s1:levelchange', { level: S1.level.get() });
    },
    onChange: function (fn) { doc.addEventListener('s1:levelchange', function (e) { fn(e.detail.level); }); }
  };
  function syncLevelButtons() {
    var v = S1.level.get();
    Array.prototype.forEach.call(doc.querySelectorAll('[data-s1-level-btn]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-s1-level-btn') === v));
    });
  }
  // Apply stored preferences (pages also do this in an inline head snippet to avoid a flash).
  (function () {
    var t = store.getRaw('s1.theme'), l = store.getRaw('s1.level');
    if ((t === 'light' || t === 'dark') && !html.getAttribute('data-theme')) html.setAttribute('data-theme', t);
    if (l === 'sl') html.setAttribute('data-show', 'sl');
  })();

  /* ---------- Question registry (the engine is in quiz.js) ---------------- */
  var bank = [], bankById = {};
  var TYPES = { mcq: 1, numeric: 1, multi: 1, order: 1, short: 1 };
  var TIERS = { foundation: 1, exam: 1, challenge: 1 };
  S1.questions = {
    /** S1.questions.register('s1-1', [ {...}, {...} ])  — call once per bank file. */
    register: function (topic, list) {
      (list || []).forEach(function (q, i) {
        if (!q || typeof q !== 'object') return;
        q.topic = q.topic || topic;
        q.level = q.level || 'sl';
        q.tier = q.tier || 'foundation';
        q.marks = q.marks || 1;
        var problems = [];
        if (!q.id) { q.id = topic + '-auto-' + i; problems.push('missing id'); }
        if (!TYPES[q.type]) problems.push('unknown type "' + q.type + '"');
        if (!TIERS[q.tier]) problems.push('unknown tier "' + q.tier + '"');
        if (q.level !== 'sl' && q.level !== 'ahl') problems.push('level must be "sl" or "ahl"');
        if (!q.stem) problems.push('missing stem');
        if ((q.type === 'mcq' || q.type === 'multi' || q.type === 'order') && !(q.options && q.options.length)) problems.push('missing options');
        if (q.type === 'numeric' && !isFinite(Number(q.answer))) problems.push('numeric answer must be a number');
        if (bankById[q.id]) problems.push('duplicate id');
        if (problems.length && window.console) console.warn('[S1.questions] ' + q.id + ': ' + problems.join('; '));
        if (bankById[q.id] || !TYPES[q.type] || !q.stem) return;
        bankById[q.id] = q; bank.push(q);
      });
      util.emit('s1:questions', { topic: topic });
    },
    all: function () { return bank.slice(); },
    get: function (id) { return bankById[id] || null; },
    byTopic: function (topic) { return bank.filter(function (q) { return q.topic === topic; }); },
    /** filter({topics: ['s1-1'], level: 'sl'|'ahl', tier: 'exam', type: 'numeric', ids: [...]}) — every key optional. */
    filter: function (f) {
      f = f || {};
      return bank.filter(function (q) {
        if (f.ids && f.ids.indexOf(q.id) === -1) return false;
        if (f.topics && f.topics.length && f.topics.indexOf(q.topic) === -1) return false;
        if (f.level && f.level !== 'all' && q.level !== f.level) return false;
        if (f.tier && f.tier !== 'all' && q.tier !== f.tier) return false;
        if (f.type && f.type !== 'all' && q.type !== f.type) return false;
        return true;
      });
    }
  };

  /* ---------- Progress store ---------------------------------------------- */
  var PKEY = 's1.progress.v1';
  function blank() { return { v: 1, checks: {}, totals: {}, quiz: {}, mistakes: {} }; }
  function load() {
    var d = store.get(PKEY, null);
    if (!d || typeof d !== 'object' || d.v !== 1) d = blank();
    d.checks = d.checks || {}; d.totals = d.totals || {}; d.quiz = d.quiz || {}; d.mistakes = d.mistakes || {};
    return d;
  }
  function save(d) { store.set(PKEY, d); util.emit('s1:progress', {}); }

  S1.progress = {
    getCheck: function (topic, id) { var d = load(); return !!(d.checks[topic] && d.checks[topic][id]); },
    setCheck: function (topic, id, on) {
      var d = load(); d.checks[topic] = d.checks[topic] || {};
      if (on) d.checks[topic][id] = 1; else delete d.checks[topic][id];
      save(d);
    },
    /** Remember how many checklist items a topic has, so the index can show a fraction. */
    setCheckTotal: function (topic, ids) {
      var d = load(), keep = {}, old = d.checks[topic] || {};
      ids.forEach(function (id) { if (old[id]) keep[id] = 1; });
      if (d.totals[topic] === ids.length && Object.keys(old).length === Object.keys(keep).length) return;
      d.totals[topic] = ids.length; d.checks[topic] = keep; save(d);
    },
    /** result: 'right' | 'wrong' | 'partial' (first attempt at a question). */
    recordAnswer: function (q, result) {
      var d = load(), r = d.quiz[q.id] || { topic: q.topic, right: 0, wrong: 0 };
      if (result === 'right') { r.right++; delete d.mistakes[q.id]; }
      else { r.wrong++; d.mistakes[q.id] = 1; }
      r.last = result; r.at = Date.now();
      d.quiz[q.id] = r; save(d);
    },
    result: function (id) { return load().quiz[id] || null; },
    /** Ids of questions last answered wrong (for "review my mistakes"). */
    mistakes: function () { return Object.keys(load().mistakes); },
    /** {checkDone, checkTotal, quizRight, quizTotal, percent} for one topic. */
    summary: function (topic) {
      var d = load(), checks = d.checks[topic] || {};
      var checkTotal = d.totals[topic] || 0;
      var checkDone = Math.min(Object.keys(checks).length, checkTotal);
      var qs = S1.questions.byTopic(topic), right = 0;
      qs.forEach(function (q) { if (d.quiz[q.id] && d.quiz[q.id].right > 0) right++; });
      var total = checkTotal + qs.length;
      return { checkDone: checkDone, checkTotal: checkTotal, quizRight: right, quizTotal: qs.length, percent: total ? Math.round(100 * (checkDone + right) / total) : 0 };
    },
    reset: function () { store.remove(PKEY); util.emit('s1:progress', { reset: true }); }
  };

  /* ---------- Header and footer ------------------------------------------- */
  var ICON = {
    moon: '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    sun: '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    chev: '<svg class="toc__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    up: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
  };
  S1.icons = ICON;

  function renderHeader(mount) {
    var root = util.root(), page = util.page();
    var links = S1.topics.map(function (t) {
      return '<li><a href="' + root + t.href + '"' + (page === t.id ? ' aria-current="page"' : '') + ' title="' + util.escapeHtml(t.title) + '">' +
        '<span class="site-nav__num">' + t.num + '</span><span class="site-nav__name">' + util.escapeHtml(t.title) + '</span>' +
        '<span class="sr-only site-nav__sr">' + util.escapeHtml(t.title) + '</span></a></li>';
    }).join('');
    links += '<li><a href="' + root + 'practice.html"' + (page === 'practice' ? ' aria-current="page"' : '') + '>Practice</a></li>';
    mount.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header">' +
        '<div class="site-header__bar wrap">' +
          '<a class="wordmark" href="' + root + 'index.html"' + (page === 'home' ? ' aria-current="page"' : '') + '><span class="wordmark__cell" aria-hidden="true">S<sub>1</sub></span><span>Structure 1 Lab</span></a>' +
          '<button class="btn btn--small nav-toggle" type="button" aria-expanded="false" aria-controls="s1-header-panel">Menu</button>' +
          '<div class="site-header__panel" id="s1-header-panel">' +
            '<nav class="site-nav" aria-label="Topics"><ul class="site-nav__list">' + links + '</ul></nav>' +
            '<div class="site-tools">' +
              '<div class="seg" role="group" aria-label="Which content to show">' +
                '<button class="seg__btn" type="button" data-s1-level-btn="sl" aria-pressed="false">SL core only</button>' +
                '<button class="seg__btn" type="button" data-s1-level-btn="all" aria-pressed="true">SL + <span class="seg__hl">HL</span></button>' +
              '</div>' +
              '<button class="icon-btn theme-toggle" type="button" aria-label="Switch theme">' + ICON.moon + ICON.sun + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="spectrum" aria-hidden="true"></div>' +
      '</header>';
    // On small screens the visible name replaces the sr-only copy; avoid double reading.
    var header = mount.querySelector('.site-header'), toggle = mount.querySelector('.nav-toggle');
    Array.prototype.forEach.call(mount.querySelectorAll('.site-nav__name'), function (n) { n.setAttribute('aria-hidden', 'true'); });
    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('is-open');
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) { toggle.click(); toggle.focus(); }
    });
    Array.prototype.forEach.call(mount.querySelectorAll('[data-s1-level-btn]'), function (b) {
      b.addEventListener('click', function () { S1.level.set(b.getAttribute('data-s1-level-btn')); });
    });
    mount.querySelector('.theme-toggle').addEventListener('click', S1.theme.toggle);
    syncLevelButtons(); syncThemeButton();
  }

  function renderFooter(mount) {
    var root = util.root(), src = S1.config.sourceUrl;
    mount.innerHTML =
      '<footer class="site-footer"><div class="site-footer__inner wrap">' +
        '<div><p><strong>Structure 1 Lab</strong> is an independent study guide for IB Chemistry, Structure 1.</p>' +
        '<p>It is not affiliated with, or endorsed by, the International Baccalaureate Organization. All questions and explanations are original. Always check details against the official subject guide and your teacher.</p></div>' +
        '<div><p>Code and content: <a href="' + root + 'LICENSE">MIT licence</a>.</p>' +
        '<p data-s1-source>' + (src ? '<a href="' + util.escapeHtml(src) + '">Source code</a>' : 'Source code: link coming soon.') + '</p>' +
        '<p>Your progress is saved only in this browser. Nothing is sent anywhere.</p></div>' +
      '</div></footer>';
  }

  /* ---------- Tiles, index cells, pager ----------------------------------- */
  function tileHtml(t) {
    return '<span class="tile__num">' + t.num + '</span><span class="tile__sym">' + t.sym + '</span><span class="tile__name">' + util.escapeHtml(t.short) + '</span>';
  }
  function initTile(node) {
    var t = S1.topic(node.getAttribute('data-s1-tile') || util.page());
    if (!t) return;
    node.classList.add('tile');
    node.setAttribute('role', 'img');
    node.setAttribute('aria-label', 'Topic tile ' + t.num + ': ' + t.short);
    node.innerHTML = tileHtml(t);
  }

  function initCells(mount) {
    var root = util.root();
    var ul = el('ul', { class: 'cells' });
    S1.topics.forEach(function (t) {
      var a = el('a', { class: 'cell', href: root + t.href, 'data-topic': t.id, html:
        '<span class="cell__top"><span class="cell__num">' + t.num + '</span><span class="cell__pct"></span></span>' +
        '<span class="cell__sym" aria-hidden="true">' + t.sym + '</span>' +
        '<span class="cell__name">' + util.escapeHtml(t.short) + '</span>' +
        '<span class="cell__blurb">' + util.escapeHtml(t.blurb) + '</span>' +
        '<span class="meter" aria-hidden="true"><span class="meter__fill"></span></span>' });
      ul.appendChild(el('li', null, a));
    });
    mount.innerHTML = '';
    mount.appendChild(ul);
    function paint() {
      Array.prototype.forEach.call(ul.querySelectorAll('.cell'), function (a) {
        var t = S1.topic(a.getAttribute('data-topic')), s = S1.progress.summary(t.id);
        a.querySelector('.cell__pct').textContent = s.percent + '%';
        a.querySelector('.meter__fill').style.width = s.percent + '%';
        a.setAttribute('aria-label', 'Topic ' + t.num + ', ' + t.title + '. ' + s.percent + ' percent done.');
      });
    }
    paint();
    doc.addEventListener('s1:progress', paint);
    doc.addEventListener('s1:questions', paint);
  }

  function initPager(mount) {
    var root = util.root(), page = util.page(), idx = -1;
    S1.topics.forEach(function (t, i) { if (t.id === page) idx = i; });
    if (idx < 0) return;
    var prev = S1.topics[idx - 1], next = S1.topics[idx + 1], h = '';
    if (prev) h += '<a class="pager__prev" href="' + root + prev.href + '"><span class="pager__dir">Previous</span><span class="pager__title">' + prev.num + ' ' + util.escapeHtml(prev.short) + '</span></a>';
    h += next
      ? '<a class="pager__next" href="' + root + next.href + '"><span class="pager__dir">Next</span><span class="pager__title">' + next.num + ' ' + util.escapeHtml(next.short) + '</span></a>'
      : '<a class="pager__next" href="' + root + 'practice.html"><span class="pager__dir">Next</span><span class="pager__title">Mixed practice</span></a>';
    mount.classList.add('pager');
    mount.innerHTML = h;
    var nav = mount; nav.setAttribute('role', 'navigation'); nav.setAttribute('aria-label', 'Previous and next topic');
  }

  /* ---------- In-page section nav ----------------------------------------- */
  function initToc(nav) {
    var scope = doc.querySelector('.topic-content') || doc;
    var sections = Array.prototype.filter.call(scope.querySelectorAll('.topic-section[id]'), function (s) { return !!s.querySelector('h2'); });
    if (!sections.length) { nav.hidden = true; return; }
    if (!nav.getAttribute('aria-label')) nav.setAttribute('aria-label', 'On this page');
    nav.classList.add('toc');
    var listId = util.uid('toc');
    var current = el('span', { class: 'toc__current' });
    var toggle = el('button', { class: 'toc__toggle', type: 'button', 'aria-expanded': 'false', 'aria-controls': listId });
    toggle.appendChild(el('span', { text: 'On this page' }));
    toggle.appendChild(current);
    toggle.insertAdjacentHTML('beforeend', ICON.chev);
    var ol = el('ol', { class: 'toc__list', id: listId });
    var links = {};
    sections.forEach(function (s) {
      var h2 = s.querySelector('h2');
      var label = s.getAttribute('data-toc') || h2.textContent.trim();
      var a = el('a', { href: '#' + s.id, text: label });
      a.addEventListener('click', function () { setOpen(false); });
      links[s.id] = a;
      ol.appendChild(el('li', { 'data-level': s.getAttribute('data-level') === 'ahl' ? 'ahl' : null }, a));
    });
    nav.innerHTML = '';
    nav.appendChild(el('p', { class: 'toc__title', text: 'On this page', 'aria-hidden': 'true' }));
    nav.appendChild(toggle);
    nav.appendChild(ol);
    function setOpen(open) { nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); }
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });

    function mark(id) {
      for (var k in links) { links[k].classList.toggle('is-current', k === id); if (k === id) links[k].setAttribute('aria-current', 'true'); else links[k].removeAttribute('aria-current'); }
      current.textContent = links[id] ? links[id].textContent : '';
    }
    function spy() {
      var best = sections[0].id, line = window.innerHeight * 0.3;
      sections.forEach(function (s) {
        if (s.offsetParent === null) return;           // hidden (e.g. AHL in SL mode)
        if (s.getBoundingClientRect().top <= line) best = s.id;
      });
      mark(best);
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      window.requestAnimationFrame(function () { ticking = false; spy(); });
    }, { passive: true });
    doc.addEventListener('s1:levelchange', spy);
    spy();
  }

  /* ---------- Formatting: .chem, .unit, level badges ---------------------- */
  function initFormat(root) {
    if (!S1.chem) return;
    Array.prototype.forEach.call(root.querySelectorAll('.chem:not([data-s1-done])'), function (n) {
      n.setAttribute('data-s1-done', '');
      if (n.children.length) return;                    // author wrote the HTML by hand
      n.innerHTML = S1.chem.formula(n.textContent);
    });
    Array.prototype.forEach.call(root.querySelectorAll('.unit:not([data-s1-done])'), function (n) {
      n.setAttribute('data-s1-done', '');
      if (n.children.length) return;
      n.innerHTML = S1.chem.unit(n.textContent);
    });
  }

  function initLevelBadges(root) {
    var sel = 'section[data-level="ahl"], div[data-level="ahl"], aside[data-level="ahl"], figure[data-level="ahl"], article[data-level="ahl"]';
    Array.prototype.forEach.call(root.querySelectorAll(sel), function (n) {
      if (n.hasAttribute('data-s1-flagged') || n.hasAttribute('data-no-badge')) return;
      n.setAttribute('data-s1-flagged', '');
      var p = el('p', { class: 'level-flag' }, el('span', { class: 'badge badge--ahl', text: 'Additional HL' }));
      n.insertBefore(p, n.firstChild);
    });
  }

  /* ---------- Glossary tooltips ------------------------------------------- */
  var tip = null, tipFor = null;
  function hideTip() { if (tip) tip.hidden = true; if (tipFor) tipFor.removeAttribute('aria-describedby'); tipFor = null; }
  function showTip(node) {
    if (!tip) { tip = el('div', { class: 'tooltip', role: 'tooltip', id: 's1-tooltip' }); doc.body.appendChild(tip); }
    tip.textContent = node.getAttribute('data-def');
    tip.hidden = false; tip.style.left = '0px'; tip.style.top = '0px';
    var r = node.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight, vw = html.clientWidth;
    var left = util.clamp(r.left + r.width / 2 - tw / 2, 8, vw - tw - 8);
    var top = r.top - th - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = (left + window.pageXOffset) + 'px';
    tip.style.top = (top + window.pageYOffset) + 'px';
    node.setAttribute('aria-describedby', 's1-tooltip');
    tipFor = node;
  }
  function initDefs(root) {
    Array.prototype.forEach.call(root.querySelectorAll('dfn[data-def]:not([data-s1-done]), abbr[data-def]:not([data-s1-done])'), function (n) {
      n.setAttribute('data-s1-done', '');
      n.setAttribute('tabindex', '0');
      n.addEventListener('mouseenter', function () { showTip(n); });
      n.addEventListener('mouseleave', hideTip);
      n.addEventListener('focus', function () { showTip(n); });
      n.addEventListener('blur', hideTip);
      n.addEventListener('click', function (e) { e.stopPropagation(); if (tipFor === n && !tip.hidden) hideTip(); else showTip(n); });
    });
  }
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideTip(); });
  doc.addEventListener('click', hideTip);

  /* ---------- Checklist ---------------------------------------------------- */
  function initChecklist(ul) {
    var topic = ul.getAttribute('data-s1-checklist') || util.page();
    var items = Array.prototype.filter.call(ul.children, function (c) { return c.tagName === 'LI'; });
    var ids = [];
    var count = el('p', { class: 'checklist__count', role: 'status', 'aria-live': 'polite' });
    items.forEach(function (li, i) {
      var id = li.getAttribute('data-id') || 'item-' + (i + 1);
      var level = li.getAttribute('data-level') === 'ahl' ? 'ahl' : 'sl';
      ids.push(id);
      var text = el('span', { class: 'checklist__text' });
      while (li.firstChild) text.appendChild(li.firstChild);
      var input = el('input', { type: 'checkbox' });
      input.checked = S1.progress.getCheck(topic, id);
      input.addEventListener('change', function () { S1.progress.setCheck(topic, id, input.checked); paint(); });
      var badge = el('span', { class: 'badge badge--' + level, text: level === 'ahl' ? 'AHL' : 'SL', title: level === 'ahl' ? 'Additional HL' : 'Standard level core' });
      li.appendChild(el('label', { class: 'checklist__item' }, [input, text, badge]));
    });
    S1.progress.setCheckTotal(topic, ids);
    ul.parentNode.insertBefore(count, ul.nextSibling);
    function paint() {
      var done = ul.querySelectorAll('input:checked').length;
      count.textContent = done + ' of ' + items.length + ' ticked';
    }
    paint();
    doc.addEventListener('s1:progress', function (e) {
      if (!e.detail.reset) return;
      Array.prototype.forEach.call(ul.querySelectorAll('input'), function (i) { i.checked = false; });
      S1.progress.setCheckTotal(topic, ids); paint();
    });
  }

  /* ---------- Worked example stepper --------------------------------------- */
  function initWorked(box) {
    var list = box.querySelector('.worked__steps');
    if (!list) return;
    var steps = Array.prototype.filter.call(list.children, function (c) { return c.tagName === 'LI'; });
    var answer = box.querySelector('.worked__answer');
    var total = steps.length, shown = 0;
    steps.forEach(function (li) {
      var t = li.getAttribute('data-title');
      if (t && !li.querySelector('.worked__step-title')) li.insertBefore(el('p', { class: 'worked__step-title', text: t }), li.firstChild);
    });
    var count = el('p', { class: 'worked__count' });
    var live = el('p', { class: 'sr-only', role: 'status', 'aria-live': 'polite' });
    var head = el('div', { class: 'worked__head' }, [el('p', { class: 'worked__kicker', text: box.getAttribute('data-kicker') || 'Worked example' }), count]);
    box.insertBefore(head, box.firstChild);

    var nextBtn = el('button', { class: 'btn btn--primary', type: 'button' });
    var allBtn = el('button', { class: 'btn', type: 'button', text: 'Show all steps' });
    var resetBtn = el('button', { class: 'btn btn--quiet', type: 'button', text: 'Start again' });
    var nudge = el('p', { class: 'worked__nudge', text: 'Have a go on paper first. Then reveal one step at a time and compare.' });
    var controls = el('div', { class: 'worked__controls' }, [nudge, nextBtn, allBtn, resetBtn, live]);
    box.appendChild(controls);
    box.classList.add('is-ready');

    function paint(announce, fresh) {
      steps.forEach(function (li, i) {
        var on = i < shown;
        li.classList.toggle('is-shown', on);
        li.classList.toggle('is-last-shown', on && i === shown - 1 && shown < total);
        li.classList.toggle('is-new', !!fresh && on && i >= fresh.from);
      });
      var done = shown >= total;
      if (answer) { answer.classList.toggle('is-shown', done); answer.classList.toggle('is-new', !!fresh && done); }
      count.textContent = shown + ' of ' + total + ' steps';
      nextBtn.textContent = shown === 0 ? 'Show step 1' : 'Next step (' + (shown + 1) + ' of ' + total + ')';
      nextBtn.hidden = done; allBtn.hidden = done; resetBtn.hidden = shown === 0; nudge.hidden = shown > 0;
      if (announce) {
        if (done) live.textContent = 'All ' + total + ' steps shown, with the final answer.';
        else if (shown > 0) { var t = steps[shown - 1].querySelector('.worked__step-title'); live.textContent = 'Step ' + shown + ' of ' + total + (t ? ': ' + t.textContent : '') + ' shown.'; }
        else live.textContent = 'Steps hidden.';
      }
    }
    function reveal(n) {
      var from = shown; shown = util.clamp(n, 0, total);
      paint(true, { from: from });
      var target = shown >= total && answer ? answer : steps[shown - 1];
      if (target && target.scrollIntoView && shown > from) {
        try { target.scrollIntoView({ block: 'nearest', behavior: util.reducedMotion() ? 'auto' : 'smooth' }); } catch (e) { /* old browsers */ }
      }
      if (shown >= total) { resetBtn.focus(); }
    }
    nextBtn.addEventListener('click', function () { reveal(shown + 1); });
    allBtn.addEventListener('click', function () { reveal(total); });
    resetBtn.addEventListener('click', function () { shown = 0; paint(true); nextBtn.focus(); });
    paint(false);
  }

  /* ---------- Try it: numeric check with hint ladder ------------------------ */
  function initNumeric(box) {
    var spec = {
      answer: Number(box.getAttribute('data-answer')),
      tolerance: box.getAttribute('data-tolerance'),
      sigfigs: box.getAttribute('data-sigfigs')
    };
    var unitText = box.getAttribute('data-unit') || '';
    var hintList = box.querySelector('.tryit__hints');
    var hints = hintList ? Array.prototype.filter.call(hintList.children, function (c) { return c.tagName === 'LI'; }) : [];
    var solution = box.querySelector('.tryit__solution');
    var id = util.uid('tryit'), hintsShown = 0;
    box.classList.add('tryit', 'is-ready');

    var input = el('input', { class: 'input input--num', id: id, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-describedby': id + '-help' });
    var check = el('button', { class: 'btn btn--primary', type: 'submit', text: 'Check' });
    var row = el('div', { class: 'field-row' }, [input, unitText ? el('span', { class: 'unit', html: S1.chem.unit(unitText), 'data-s1-done': '' }) : null, check]);
    var form = el('form', { class: 'tryit__form', novalidate: true }, [
      el('label', { class: 'field-label', for: id, text: box.getAttribute('data-label') || 'Your answer' }), row,
      el('p', { class: 'field-help', id: id + '-help', html: 'For standard form, type <span class="mono">6.02e23</span> or <span class="mono">6.02x10^23</span>.' })
    ]);
    var feedback = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    var hintBtn = el('button', { class: 'btn btn--small', type: 'button' });
    var solBtn = el('button', { class: 'btn btn--small btn--quiet', type: 'button', text: 'Show full solution' });
    var help = el('div', { class: 'tryit__help btn-row' }, [hints.length ? hintBtn : null, solution ? solBtn : null]);

    var anchor = hintList || solution || null;
    box.insertBefore(form, anchor);
    box.insertBefore(feedback, anchor);
    box.insertBefore(help, anchor);

    function paintHelp() {
      hints.forEach(function (li, i) { li.classList.toggle('is-shown', i < hintsShown); });
      hintBtn.textContent = hintsShown === 0 ? 'I need a hint' : 'Next hint (' + (hintsShown + 1) + ' of ' + hints.length + ')';
      hintBtn.hidden = hintsShown >= hints.length;
      if (solution) solBtn.hidden = solution.classList.contains('is-shown') || (hints.length > 0 && hintsShown === 0 && !box.hasAttribute('data-tried'));
    }
    hintBtn.addEventListener('click', function () { hintsShown++; paintHelp(); if (hintsShown >= hints.length && solution) solBtn.focus(); });
    solBtn.addEventListener('click', function () { solution.classList.add('is-shown'); solution.setAttribute('tabindex', '-1'); paintHelp(); solution.focus(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input.value.trim()) { input.focus(); return; }
      var res = S1.chem.checkNumeric(input.value, spec), d = S1.chem.describeCheck(res, spec);
      box.setAttribute('data-tried', '');
      var extra = d.html;
      if (res.status === 'wrong' && !extra) extra = hints.length && hintsShown < hints.length ? 'Check your working, or take a hint.' : 'Check each step of your working.';
      if (res.status === 'correct') extra = box.getAttribute('data-correct') || 'Nice. Compare your working with the full solution if you want to check your method.';
      feedback.className = 'feedback feedback--' + d.tone;
      feedback.innerHTML = '<span class="feedback__label">' + d.label + '</span>' + extra;
      if (res.status === 'correct' && solution) { solBtn.hidden = false; }
      paintHelp();
    });
    paintHelp();
  }

  /* ---------- Reset control -------------------------------------------------- */
  function initReset(mount) {
    mount.classList.add('reset');
    var btn = el('button', { class: 'btn btn--small', type: 'button', text: 'Reset my progress' });
    var done = el('p', { class: 'reset__done', role: 'status', 'aria-live': 'polite' });
    var confirmBox = el('div', { class: 'reset__confirm', hidden: true });
    var yes = el('button', { class: 'btn btn--small btn--danger', type: 'button', text: 'Yes, reset' });
    var no = el('button', { class: 'btn btn--small', type: 'button', text: 'Cancel' });
    confirmBox.appendChild(el('p', { text: 'This clears your ticks, quiz results and saved mistakes in this browser. It cannot be undone.' }));
    confirmBox.appendChild(yes); confirmBox.appendChild(no);
    mount.innerHTML = '';
    mount.appendChild(btn); mount.appendChild(confirmBox); mount.appendChild(done);
    btn.addEventListener('click', function () { confirmBox.hidden = false; btn.hidden = true; done.textContent = ''; no.focus(); });
    no.addEventListener('click', function () { confirmBox.hidden = true; btn.hidden = false; btn.focus(); });
    yes.addEventListener('click', function () { S1.progress.reset(); confirmBox.hidden = true; btn.hidden = false; done.textContent = 'Progress cleared.'; btn.focus(); });
  }

  /* ---------- Widgets --------------------------------------------------------- */
  var widgetRegistry = {};
  S1.widgets = {
    /** S1.widgets.register('s1-1.kelvin', function (w) { ... }) — w is the widget API (see AUTHORING.md). */
    register: function (name, initFn) {
      widgetRegistry[name] = initFn;
      if (doc.readyState !== 'loading') {
        Array.prototype.forEach.call(doc.querySelectorAll('[data-s1-widget="' + name + '"]:not([data-s1-ready])'), mountWidget);
      }
    },
    has: function (name) { return !!widgetRegistry[name]; }
  };

  function mountWidget(node) {
    var name = node.getAttribute('data-s1-widget'), initFn = widgetRegistry[name];
    if (!initFn || node.hasAttribute('data-s1-ready')) return;
    node.setAttribute('data-s1-ready', '');
    node.classList.add('widget');
    var caption = node.querySelector('figcaption, .widget__caption');
    var fallback = node.querySelector('.widget__fallback');
    if (fallback) fallback.parentNode.removeChild(fallback);
    if (caption) { caption.classList.add('widget__caption'); node.removeChild(caption); }
    var titleText = node.getAttribute('data-title') || '';
    var titleId = util.uid('widget-title');
    var head = el('div', { class: 'widget__head' }, [
      el('h4', { class: 'widget__title', id: titleId, text: titleText }),
      el('span', { class: 'widget__kicker', text: node.getAttribute('data-kicker') || 'Interactive' })
    ]);
    var controls = el('div', { class: 'widget__controls' });
    var stage = el('div', { class: 'widget__stage' });
    var readout = el('div', { class: 'widget__readout', role: 'status', 'aria-live': 'polite' });
    node.innerHTML = '';
    [head, controls, stage, readout, caption].forEach(function (n) { if (n) node.appendChild(n); });
    if (titleText) node.setAttribute('aria-labelledby', titleId); else head.hidden = true;
    if (node.tagName !== 'FIGURE') node.setAttribute('role', 'group');

    var draws = [], loops = [], visible = true;
    var api = {
      el: node, stage: stage, controls: controls, readout: readout, caption: caption,
      /** data-* attributes of the widget element, e.g. data-start="25" → w.options.start === '25'. */
      options: node.dataset,
      reducedMotion: util.reducedMotion(),
      color: S1.theme.color,
      /** Re-run every draw function registered with canvas().draw / onDraw. */
      redraw: function () { draws.forEach(function (f) { f(); }); },
      onDraw: function (fn) { draws.push(fn); },
      /** Re-run fn when the theme changes (canvas drawings are redrawn automatically). */
      onTheme: function (fn) { doc.addEventListener('s1:themechange', function (e) { fn(e.detail.theme); }); },
      /**
       * Hi-DPI canvas that fills the stage width. opts: {height: px} or {aspect: width/height}, {label: 'alt text'}.
       * Returns {el, ctx, width, height, draw(fn)} — width/height are CSS pixels; fn(ctx, width, height) is called
       * now, on resize and on theme change with the context already scaled for the device pixel ratio.
       */
      canvas: function (opts) {
        opts = opts || {};
        var c = el('canvas', { role: 'img', 'aria-label': opts.label || titleText || 'Diagram' });
        stage.appendChild(c);
        var ctx = c.getContext('2d'), obj = { el: c, ctx: ctx, width: 0, height: 0 }, fns = [];
        function size() {
          var w = Math.max(200, Math.floor(stage.clientWidth - parseFloat(getComputedStyle(stage).paddingLeft) - parseFloat(getComputedStyle(stage).paddingRight)));
          if (opts.minWidth) w = Math.max(w, opts.minWidth);
          var h = opts.height || Math.round(w / (opts.aspect || 2));
          if (opts.maxHeight) h = Math.min(h, opts.maxHeight);
          var dpr = Math.min(window.devicePixelRatio || 1, 3);
          obj.width = w; obj.height = h;
          c.style.width = w + 'px'; c.style.height = h + 'px';
          c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        function run() { ctx.clearRect(0, 0, obj.width, obj.height); fns.forEach(function (f) { f(ctx, obj.width, obj.height); }); }
        obj.draw = function (fn) { if (fn) fns.push(fn); run(); };
        obj.resize = function () { size(); run(); };
        size();
        var lastW = stage.clientWidth;
        var onResize = function () { if (stage.clientWidth === lastW) return; lastW = stage.clientWidth; size(); run(); };
        if (window.ResizeObserver) new ResizeObserver(onResize).observe(stage); else window.addEventListener('resize', onResize);
        draws.push(run);
        return obj;
      },
      /** Empty inline SVG in the stage: svg('0 0 600 240', {label}) → SVGElement (scales to the stage width). */
      svg: function (viewBox, opts) {
        var s = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
        s.setAttribute('viewBox', viewBox); s.setAttribute('role', 'img');
        s.setAttribute('aria-label', (opts && opts.label) || titleText || 'Diagram');
        s.style.width = '100%'; s.style.height = 'auto';
        stage.appendChild(s);
        return s;
      },
      /**
       * Linked slider + number box. opts: {label, min, max, step, value, unit, onInput(value)}.
       * Returns {el, value (getter), set(v, silent)}.
       */
      slider: function (opts) {
        var id = util.uid('ctl'), step = opts.step || 1;
        var range = el('input', { type: 'range', id: id, min: opts.min, max: opts.max, step: step, value: opts.value });
        var num = el('input', { class: 'input', type: 'number', min: opts.min, max: opts.max, step: step, value: opts.value, 'aria-label': opts.label + (opts.unit ? ' in ' + opts.unit : '') + ', exact value', inputmode: 'decimal' });
        var wrap = el('div', { class: 'control' }, [
          el('label', { class: 'control__label', for: id, text: opts.label }),
          el('div', { class: 'control__row' }, [range, num, opts.unit ? el('span', { class: 'control__unit', html: S1.chem ? S1.chem.unit(opts.unit) : opts.unit }) : null])
        ]);
        var val = Number(opts.value);
        function set(v, silent, from) {
          v = Number(v); if (!isFinite(v)) return;
          v = util.clamp(v, Number(opts.min), Number(opts.max)); val = v;
          if (from !== range) range.value = v;
          if (from !== num) num.value = v;
          if (!silent && opts.onInput) opts.onInput(v);
        }
        range.addEventListener('input', function () { set(range.value, false, range); });
        num.addEventListener('input', function () { if (num.value !== '' && num.value !== '-') set(num.value, false, num); });
        num.addEventListener('blur', function () { num.value = val; });
        (opts.parent || controls).appendChild(wrap);
        return { el: wrap, get value() { return val; }, set: function (v, silent) { set(v, silent); } };
      },
      /** Button in the controls area. Returns the <button>. */
      button: function (label, onClick, opts) {
        var b = el('button', { class: 'btn btn--small' + (opts && opts.primary ? ' btn--primary' : ''), type: 'button', text: label });
        b.addEventListener('click', onClick);
        controls.appendChild(b);
        return b;
      },
      /** Labelled <select>. options: [{value, label}] or ['a', 'b']. Returns {el, value (getter), set(v)}. */
      select: function (opts) {
        var id = util.uid('ctl');
        var s = el('select', { class: 'select', id: id });
        opts.options.forEach(function (o) {
          var v = typeof o === 'object' ? o.value : o, l = typeof o === 'object' ? o.label : o;
          var op = el('option', { value: v, text: l }); if (String(v) === String(opts.value)) op.selected = true; s.appendChild(op);
        });
        s.addEventListener('change', function () { if (opts.onChange) opts.onChange(s.value); });
        var wrap = el('div', { class: 'control', style: 'flex:0 1 auto' }, [el('label', { class: 'control__label', for: id, text: opts.label }), s]);
        controls.appendChild(wrap);
        return { el: wrap, get value() { return s.value; }, set: function (v) { s.value = v; } };
      },
      /** Named value in the readout strip. Returns a setter: var setT = w.readoutItem('Temperature'); setT('298 K') (HTML allowed).
       *  Pass {text: true} for a sentence rather than a number. */
      readoutItem: function (label, opts) {
        var value = el('span', { class: 'widget__readout-value' + (opts && opts.text ? ' widget__readout-value--text' : '') });
        readout.appendChild(el('div', { class: 'widget__readout-item' }, [el('span', { class: 'widget__readout-label', text: label }), value]));
        return function (htmlText) { value.innerHTML = htmlText; };
      },
      /**
       * Animation loop: fn(dtSeconds, tSeconds). Pauses when the widget is off screen or the tab is hidden.
       * With prefers-reduced-motion it does NOT start by itself: call loop.start(true) from a Play button.
       * Returns {start(userAsked), stop(), running}.
       */
      loop: function (fn) {
        var raf = 0, last = 0, t = 0, wanted = false;
        var L = { running: false,
          start: function (userAsked) { if (api.reducedMotion && !userAsked) return; wanted = true; kick(); },
          stop: function () { wanted = false; halt(); } };
        function frame(now) {
          var dt = last ? Math.min((now - last) / 1000, 0.1) : 0; last = now; t += dt;
          fn(dt, t);
          raf = window.requestAnimationFrame(frame);
        }
        function kick() { if (L.running || !wanted || !visible || doc.hidden) return; L.running = true; last = 0; raf = window.requestAnimationFrame(frame); }
        function halt() { if (!L.running) return; L.running = false; window.cancelAnimationFrame(raf); }
        L._sync = function () { if (wanted && visible && !doc.hidden) kick(); else halt(); };
        loops.push(L);
        return L;
      }
    };
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (entries) {
        visible = entries[entries.length - 1].isIntersecting;
        loops.forEach(function (L) { L._sync(); });
      }).observe(node);
    }
    doc.addEventListener('visibilitychange', function () { loops.forEach(function (L) { L._sync(); }); });
    doc.addEventListener('s1:themechange', function () { api.redraw(); });
    try { initFn(api); }
    catch (err) {
      stage.innerHTML = '';
      stage.appendChild(el('p', { class: 'widget__fallback', text: 'This interactive could not start. The rest of the page still works.' }));
      if (window.console) console.error('[S1.widgets] ' + name + ' failed:', err);
    }
  }

  /* ---------- Enhance: run every component initialiser on a subtree ---------- */
  var enhancers = [];
  /** Register an extra initialiser: S1.onEnhance(function (root) { ... }). Used by quiz.js. */
  S1.onEnhance = function (fn) { enhancers.push(fn); };

  function each(root, selector, fn) {
    Array.prototype.forEach.call(root.querySelectorAll(selector), function (n) {
      if (n.hasAttribute('data-s1-ready')) return;
      n.setAttribute('data-s1-ready', '');
      fn(n);
    });
  }
  /** Initialise components inside root (default: whole document). Safe to call again after inserting HTML. */
  S1.enhance = function (root) {
    root = root || doc;
    initFormat(root);
    initLevelBadges(root);
    initDefs(root);
    each(root, '[data-s1-header]', renderHeader);
    each(root, '[data-s1-footer]', renderFooter);
    each(root, '[data-s1-tile]', initTile);
    each(root, '[data-s1-topics]', initCells);
    each(root, '[data-s1-pager]', initPager);
    each(root, '[data-s1-checklist]', initChecklist);
    each(root, '[data-s1-worked], .worked', initWorked);
    each(root, '[data-s1-numeric]', initNumeric);
    each(root, '[data-s1-reset]', initReset);
    Array.prototype.forEach.call(root.querySelectorAll('[data-s1-widget]:not([data-s1-ready])'), mountWidget);
    each(root, '.table-scroll', function (n) { if (!n.hasAttribute('tabindex')) { n.setAttribute('tabindex', '0'); n.setAttribute('role', 'region'); if (!n.getAttribute('aria-label')) { var c = n.querySelector('caption'); n.setAttribute('aria-label', c ? c.textContent : 'Table'); } } });
    enhancers.forEach(function (fn) { fn(root); });
    each(root, '[data-s1-toc]', initToc);
  };

  var readyFns = [], isReady = false;
  /** Run fn once the page's components are initialised. */
  S1.ready = function (fn) { if (isReady) fn(); else readyFns.push(fn); };
  function boot() {
    html.classList.add('js');
    S1.enhance(doc);
    isReady = true;
    readyFns.forEach(function (fn) { fn(); });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
})();
