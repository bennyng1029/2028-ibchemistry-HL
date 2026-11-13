/* ==========================================================================
   Structure 1 Lab — quiz.js
   Question engine for topic-page quizzes (<div data-s1-quiz>) and the
   practice arena (<div data-s1-practice>).  Load after chem.js and core.js.
   Question schema: see docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.util) { if (window.console) console.error('quiz.js needs core.js to be loaded first'); return; }
  var util = S1.util, el = util.el, doc = document;

  var TIER_LABEL = { foundation: 'Foundation', exam: 'Exam style', challenge: 'Challenge' };
  var TYPE_LABEL = { mcq: 'Multiple choice', numeric: 'Calculation', multi: 'Select all that apply', order: 'Put in order', short: 'Written answer' };
  var LETTERS = 'ABCDEFGH';

  function plainText(htmlStr, max) {
    var d = doc.createElement('div'); d.innerHTML = htmlStr;
    var t = (d.textContent || '').replace(/\s+/g, ' ').trim();
    return max && t.length > max ? t.slice(0, max - 1).trim() + '…' : t;
  }
  function feedbackHtml(tone, label, body) {
    return { cls: 'feedback feedback--' + tone, html: '<span class="feedback__label">' + label + '</span>' + (body || '') };
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = a.slice().sort(), t = b.slice().sort();
    for (var i = 0; i < s.length; i++) if (s[i] !== t[i]) return false;
    return true;
  }

  /* ---------- Building a set of questions ---------------------------------- */
  function buildPool(opts) {
    var pool;
    if (opts.mode === 'review') pool = S1.questions.filter({ ids: S1.progress.mistakes() });
    else pool = S1.questions.filter({ topics: opts.topics, level: opts.level, tier: opts.tier, type: opts.type, ids: opts.ids });
    if (opts.mode === 'review' && opts.topics && opts.topics.length) pool = pool.filter(function (q) { return opts.topics.indexOf(q.topic) > -1; });
    if (S1.level.get() === 'sl') pool = pool.filter(function (q) { return q.level !== 'ahl'; });
    return pool;
  }
  function pickSet(opts) {
    var pool = buildPool(opts);
    if (opts.ids && opts.shuffle === false) {
      pool.sort(function (a, b) { return opts.ids.indexOf(a.id) - opts.ids.indexOf(b.id); });
    } else if (opts.shuffle !== false) {
      // Shuffle, then put questions not yet answered correctly first.
      pool = util.shuffle(pool);
      var fresh = [], done = [];
      pool.forEach(function (q) { var r = S1.progress.result(q.id); (r && r.right > 0 ? done : fresh).push(q); });
      pool = fresh.concat(done);
    }
    var n = opts.count && opts.count > 0 ? Math.min(opts.count, pool.length) : pool.length;
    return { set: pool.slice(0, n), available: pool.length };
  }

  /* ---------- One question ---------------------------------------------------
     renderQuestion(q, onResult) → element.  onResult(status) fires once, on the
     first definite attempt: 'right' | 'wrong' | 'partial'.                     */
  function renderQuestion(q, hooks) {
    var uid = util.uid('q');
    var state = { attempted: false, locked: false, hintsShown: 0 };
    var card = el('article', { class: 'q', 'data-type': q.type, 'data-qid': q.id });

    var tags = el('div', { class: 'q__tags' });
    tags.appendChild(el('span', { class: 'badge badge--' + (q.level === 'ahl' ? 'ahl' : 'sl'), text: q.level === 'ahl' ? 'AHL' : 'SL', title: q.level === 'ahl' ? 'Additional HL' : 'Standard level core' }));
    tags.appendChild(el('span', { class: 'tag', text: TIER_LABEL[q.tier] || q.tier }));
    if (q.syllabus) tags.appendChild(el('span', { class: 'tag tag--mono', text: q.syllabus }));
    tags.appendChild(el('span', { class: 'q__marks', text: '[' + q.marks + (q.marks === 1 ? ' mark]' : ' marks]') }));
    card.appendChild(tags);

    var stem = el('div', { class: 'q__stem', id: uid + '-stem', tabindex: '-1', html: q.stem });
    card.appendChild(stem);

    var form = el('form', { class: 'q__form', novalidate: true });
    var feedback = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    var hintList = el('ol', { class: 'q__hints' });
    var solution = el('div', { class: 'q__solution', hidden: true, tabindex: '-1' });
    var actions = el('div', { class: 'q__actions' });
    var checkBtn = el('button', { class: 'btn btn--primary', type: 'submit', text: 'Check' });
    var hintBtn = el('button', { class: 'btn btn--small', type: 'button' });
    var solBtn = el('button', { class: 'btn btn--small btn--quiet', type: 'button', text: 'Show solution', hidden: true });
    var hints = q.hints || [];

    function say(tone, label, body) { var f = feedbackHtml(tone, label, body); feedback.className = f.cls; feedback.innerHTML = f.html; S1.enhance(feedback); }
    function first(status) {
      if (state.attempted) return;
      state.attempted = true;
      if (hooks.onResult) hooks.onResult(status);
    }
    function showSolution() {
      var h = '';
      if (q.type === 'numeric') {
        var u = q.unit ? ' <span class="unit" data-s1-done>' + S1.chem.unit(q.unit) + '</span>' : '';
        var shown = q.answerDisplay != null ? q.answerDisplay : (q.sigfigs ? S1.chem.fmt(Number(q.answer), Array.isArray(q.sigfigs) ? q.sigfigs[q.sigfigs.length - 1] : Number(String(q.sigfigs).split('-').pop())) : String(q.answer).replace('-', S1.chem.MINUS));
        h += '<p><strong>Answer:</strong> <span class="mono">' + shown + '</span>' + u + '</p>';
      }
      if (q.solution) h += q.solution;
      if (!h) return;
      solution.innerHTML = '<h4>Solution</h4>' + h;
      solution.hidden = false; solBtn.hidden = true;
      S1.enhance(solution);
    }
    function lock() {
      state.locked = true;
      Array.prototype.forEach.call(form.querySelectorAll('input, textarea, .q__move button'), function (i) { i.disabled = true; });
      Array.prototype.forEach.call(form.querySelectorAll('.q__option'), function (o) { o.classList.add('is-locked'); });
      checkBtn.hidden = true; hintBtn.hidden = true;
      showSolution();
      if (hooks.onDone) hooks.onDone();
    }
    function paintHints() {
      hintBtn.textContent = state.hintsShown === 0 ? 'Hint' : 'Next hint (' + (state.hintsShown + 1) + ' of ' + hints.length + ')';
      hintBtn.hidden = state.locked || state.hintsShown >= hints.length;
    }
    hintBtn.addEventListener('click', function () {
      if (state.hintsShown >= hints.length) return;
      var li = el('li', { html: hints[state.hintsShown] });
      hintList.appendChild(li); S1.enhance(li);
      state.hintsShown++; paintHints();
    });
    solBtn.addEventListener('click', function () { markReveal(); lock(); solution.focus(); });

    var check, markReveal = function () {};

    /* --- mcq / multi --- */
    if (q.type === 'mcq' || q.type === 'multi') {
      var multi = q.type === 'multi';
      var correct = multi ? (q.answer || []).map(Number) : [Number(q.answer)];
      var fs = el('fieldset', { class: 'q__fieldset', 'aria-describedby': uid + '-stem' });
      fs.appendChild(el('legend', { class: 'q__legend', text: multi ? 'Select every correct option.' : 'Choose one option.' }));
      var ul = el('ul', { class: 'q__options' }), rows = [];
      q.options.forEach(function (opt, i) {
        var input = el('input', { type: multi ? 'checkbox' : 'radio', name: uid, value: i });
        var row = el('label', { class: 'q__option' }, [input, el('span', { class: 'q__letter', text: LETTERS[i] + '.', 'aria-hidden': 'true' }), el('span', { class: 'q__text', html: opt })]);
        input.addEventListener('change', function () { if (!state.locked) rows.forEach(function (r) { r.row.classList.remove('is-wrong', 'is-right'); var m = r.row.querySelector('.q__mark'); if (m) m.parentNode.removeChild(m); }); });
        rows.push({ row: row, input: input });
        ul.appendChild(el('li', null, row));
      });
      fs.appendChild(ul); form.appendChild(fs);
      var flag = function (r, ok) {
        r.row.classList.add(ok ? 'is-right' : 'is-wrong');
        if (!r.row.querySelector('.q__mark')) r.row.appendChild(el('span', { class: 'q__mark', text: ok ? 'Correct' : 'Not correct' }));
      };
      markReveal = function () {
        rows.forEach(function (r, i) {
          r.row.classList.remove('is-wrong', 'is-right');
          var m = r.row.querySelector('.q__mark'); if (m) m.parentNode.removeChild(m);
          if (correct.indexOf(i) > -1) flag(r, true);
        });
      };
      check = function () {
        var chosen = []; rows.forEach(function (r, i) { if (r.input.checked) chosen.push(i); });
        if (!chosen.length) { say('partial', multi ? 'Select at least one option first.' : 'Choose an option first.', ''); return; }
        var misc = q.misconception || {};
        if (sameSet(chosen, correct)) {
          first('right'); markReveal();
          say('right', 'Correct', q.correctNote || ''); lock();
          return;
        }
        first('wrong');
        if (!multi) {
          flag(rows[chosen[0]], false);
          say('wrong', 'Not this one', (misc[chosen[0]] ? '<p>' + misc[chosen[0]] + '</p>' : '') + '<p>Pick again, or look at the solution.</p>');
        } else {
          var good = 0, bad = [], notes = '';
          chosen.forEach(function (i) { if (correct.indexOf(i) > -1) good++; else { bad.push(i); if (misc[i]) notes += '<p><strong>' + LETTERS[i] + ':</strong> ' + misc[i] + '</p>'; } });
          var msg = '<p>You have ' + good + ' of the ' + correct.length + ' correct options' + (bad.length ? ', and ' + bad.length + ' that should not be selected' : '') + '.</p>';
          say('wrong', 'Not quite', msg + notes);
        }
        solBtn.hidden = false;
      };
    }

    /* --- numeric --- */
    if (q.type === 'numeric') {
      var nid = uid + '-in';
      var nin = el('input', { class: 'input input--num', id: nid, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-describedby': uid + '-stem ' + nid + '-help' });
      form.appendChild(el('label', { class: 'field-label', for: nid, text: 'Your answer' }));
      form.appendChild(el('div', { class: 'field-row' }, [nin, q.unit ? el('span', { class: 'unit', 'data-s1-done': '', html: S1.chem.unit(q.unit) }) : null]));
      form.appendChild(el('p', { class: 'field-help', id: nid + '-help', html: 'For standard form, type <span class="mono">6.02e23</span> or <span class="mono">6.02x10^23</span>.' }));
      check = function () {
        if (!nin.value.trim()) { say('partial', 'Type your answer first.', ''); nin.focus(); return; }
        var res = S1.chem.checkNumeric(nin.value, q), d = S1.chem.describeCheck(res, q);
        if (res.status === 'correct') { first('right'); say('right', 'Correct', q.correctNote || ''); lock(); return; }
        if (res.status === 'sigfig' || res.status === 'invalid') { say(d.tone, d.label, d.html); nin.focus(); return; }
        first('wrong');
        say('wrong', d.label, (d.html ? '<p>' + d.html + '</p>' : '') + '<p>Check your working and try again' + (hints.length > state.hintsShown ? ', or take a hint' : '') + '.</p>');
        solBtn.hidden = false;
      };
    }

    /* --- order --- */
    if (q.type === 'order') {
      var n = q.options.length;
      var target = (q.answer && q.answer.length === n) ? q.answer.map(Number) : q.options.map(function (o, i) { return i; });
      var order = target.slice(), guard = 0;
      do { order = util.shuffle(target); guard++; } while (n > 1 && guard < 20 && order.join() === target.join());
      var ol = el('ol', { class: 'q__order', 'aria-describedby': uid + '-stem' });
      var live = el('p', { class: 'sr-only', role: 'status', 'aria-live': 'polite' });
      form.appendChild(el('p', { class: 'q__legend', text: 'Use the arrows to move each step up or down.' }));
      form.appendChild(ol); form.appendChild(live);
      var paintOrder = function (focus) {
        ol.innerHTML = '';
        order.forEach(function (optIndex, pos) {
          var label = plainText(q.options[optIndex], 60);
          var up = el('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Move up: ' + label, html: S1.icons.up });
          var down = el('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Move down: ' + label, html: S1.icons.down });
          up.disabled = pos === 0 || state.locked; down.disabled = pos === n - 1 || state.locked;
          up.addEventListener('click', function () { move(pos, -1); });
          down.addEventListener('click', function () { move(pos, 1); });
          var li = el('li', null, [el('span', { class: 'q__text', html: q.options[optIndex] }), el('span', { class: 'q__move' }, [up, down])]);
          ol.appendChild(li);
          if (focus && focus.pos === pos) { var b = focus.dir < 0 ? up : down; if (b.disabled) b = focus.dir < 0 ? down : up; b.focus(); }
        });
        S1.enhance(ol);
      };
      var move = function (pos, dir) {
        var to = pos + dir; if (to < 0 || to >= n) return;
        var t = order[pos]; order[pos] = order[to]; order[to] = t;
        paintOrder({ pos: to, dir: dir });
        live.textContent = 'Moved to position ' + (to + 1) + ' of ' + n + '.';
      };
      var flagOrder = function () {
        Array.prototype.forEach.call(ol.children, function (li, pos) { li.classList.add(order[pos] === target[pos] ? 'is-right' : 'is-wrong'); });
      };
      markReveal = function () { order = target.slice(); state.locked = true; paintOrder(); };
      check = function () {
        var good = 0; order.forEach(function (o, i) { if (o === target[i]) good++; });
        if (good === n) { first('right'); say('right', 'Correct', q.correctNote || 'Every step is in the right place.'); state.locked = true; paintOrder(); flagOrder(); lock(); return; }
        first('wrong');
        paintOrder(); flagOrder();
        say('wrong', 'Not quite', '<p>' + good + ' of ' + n + ' steps are in the right place. Move the others and check again.</p>');
        solBtn.hidden = false;
      };
      paintOrder();
    }

    /* --- short (self-marked) --- */
    if (q.type === 'short') {
      var tid = uid + '-ta';
      var ta = el('textarea', { class: 'input', id: tid, rows: '4', 'aria-describedby': uid + '-stem' });
      form.appendChild(el('label', { class: 'field-label', for: tid, text: 'Your answer (write it here or on paper; it is not saved)' }));
      form.appendChild(ta);
      checkBtn.textContent = 'Compare with the model answer';
      var points = q.markscheme || [];
      var model = el('div', { class: 'q__model', hidden: true });
      form.appendChild(model);
      var revealed = false;
      check = function () {
        if (!revealed) {
          revealed = true;
          var h = '<h4>Model answer</h4><div class="q__answer">' + (q.answer || '') + '</div>';
          if (points.length) {
            h += '<fieldset class="q__fieldset"><legend class="field-label">Mark your own answer. Tick each point you made' + (points.length > q.marks ? ' (maximum ' + q.marks + ')' : '') + '.</legend><ul class="q__points">';
            points.forEach(function (p, i) { h += '<li><label><input type="checkbox" value="' + i + '"><span>' + p + '</span></label></li>'; });
            h += '</ul></fieldset>';
          }
          model.innerHTML = h; model.hidden = false; S1.enhance(model);
          ta.readOnly = true;
          checkBtn.textContent = 'Record my mark';
          hintBtn.hidden = true; state.hintsShown = hints.length;
          var firstBox = model.querySelector('input'); if (firstBox) firstBox.focus();
          return;
        }
        var ticked = model.querySelectorAll('input:checked').length;
        var max = q.marks, got = points.length ? Math.min(ticked, max) : 0;
        var status = got >= max ? 'right' : got > 0 ? 'partial' : 'wrong';
        first(status);
        say(status, 'You gave yourself ' + got + ' of ' + max + (max === 1 ? ' mark' : ' marks'),
          status === 'right' ? '' : '<p>Read the points you missed, then try writing the answer again from memory later.</p>');
        lock();
      };
    }

    form.addEventListener('submit', function (e) { e.preventDefault(); if (!state.locked && check) check(); });
    actions.appendChild(checkBtn);
    if (hints.length) actions.appendChild(hintBtn);
    actions.appendChild(solBtn);
    form.appendChild(actions);
    card.appendChild(form);
    card.appendChild(hintList);
    card.appendChild(feedback);
    card.appendChild(solution);
    paintHints();
    S1.enhance(card);
    return card;
  }

  /* ---------- A run of questions with score and summary ---------------------- */
  /**
   * S1.quiz.mount(element, options) → controller
   * options: { topics: ['s1-1'], level, tier, type, ids: [...], count: 5, shuffle: true,
   *            mode: 'practice' | 'review', title: 'Quick check', emptyText }
   */
  function mount(host, opts) {
    opts = opts || {};
    host.classList.add('quiz');
    host.innerHTML = '';
    var title = el('h3', { class: 'quiz__title', text: opts.title || (opts.mode === 'review' ? 'Review my mistakes' : 'Quick check') });
    var meta = el('p', { class: 'quiz__meta', role: 'status', 'aria-live': 'polite' });
    var track = el('ol', { class: 'quiz__track', 'aria-hidden': 'true' });
    var body = el('div', { class: 'quiz__body' });
    host.appendChild(el('div', { class: 'quiz__head' }, [title, meta]));
    host.appendChild(track);
    host.appendChild(body);
    if (!host.getAttribute('aria-label')) { host.setAttribute('role', 'region'); host.setAttribute('aria-label', title.textContent); }

    var set = [], results = [], index = 0;

    function start(custom) {
      var picked = custom ? { set: custom } : pickSet(opts);
      set = picked.set; results = set.map(function () { return null; }); index = 0;
      if (!set.length) return empty();
      show(false);
    }
    function empty() {
      track.innerHTML = ''; meta.textContent = '';
      var msg = opts.emptyText || (opts.mode === 'review'
        ? 'No mistakes saved. Questions you get wrong will appear here so you can try them again.'
        : (S1.questions.all().length ? 'No questions match this selection yet.' : 'Questions for this section are on their way.'));
      body.innerHTML = '';
      body.appendChild(el('p', { class: 'quiz__empty', text: msg }));
    }
    function paintHead(finished) {
      var right = results.filter(function (r) { return r === 'right'; }).length;
      meta.textContent = finished ? 'Finished · ' + right + ' of ' + set.length + ' right'
        : 'Question ' + (index + 1) + ' of ' + set.length + ' · ' + right + ' right';
      track.innerHTML = '';
      set.forEach(function (q, i) {
        track.appendChild(el('li', { class: (results[i] ? 'is-' + results[i] : '') + (i === index && !finished ? ' is-current' : '') }));
      });
    }
    function show(moveFocus) {
      var q = set[index];
      body.innerHTML = '';
      var nextWrap = el('div', { class: 'q__next' });
      var last = index === set.length - 1;
      var next = el('button', { class: 'btn', type: 'button', text: last ? 'Finish' : 'Skip this question' });
      next.addEventListener('click', function () { if (index < set.length - 1) { index++; show(true); } else summary(); });
      nextWrap.appendChild(next);
      var card = renderQuestion(q, {
        onResult: function (status) {
          results[index] = status;
          S1.progress.recordAnswer(q, status);
          paintHead(false);
          next.textContent = last ? 'See my results' : 'Next question';
        },
        onDone: function () { next.textContent = last ? 'See my results' : 'Next question'; next.classList.add('btn--primary'); }
      });
      if (last && set.length === 1) next.textContent = 'Finish';
      body.appendChild(card);
      body.appendChild(nextWrap);
      paintHead(false);
      if (moveFocus) {
        var stem = card.querySelector('.q__stem');
        try { stem.focus({ preventScroll: true }); } catch (e) { stem.focus(); }
        var top = host.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight * 0.6) { try { host.scrollIntoView({ block: 'start', behavior: util.reducedMotion() ? 'auto' : 'smooth' }); } catch (e2) { host.scrollIntoView(); } }
      }
    }
    function summary() {
      paintHead(true);
      var right = 0, missed = [];
      results.forEach(function (r, i) { if (r === 'right') right++; else missed.push(set[i]); });
      body.innerHTML = '';
      var head = el('p', { class: 'summary__score', tabindex: '-1', html: right + ' / ' + set.length + ' <small>right first time</small>' });
      body.appendChild(head);
      var line = right === set.length ? 'All correct. Try a harder tier next, or move on.'
        : right === 0 ? 'A tough set. Go back over the worked examples, then retry the questions below.'
        : 'Good work. Retry the ones you missed while the ideas are fresh.';
      body.appendChild(el('p', { text: line }));
      var ul = el('ul', { class: 'summary__list' });
      set.forEach(function (q, i) {
        var r = results[i], word = r === 'right' ? 'Right' : r === 'partial' ? 'Part marks' : r === 'wrong' ? 'Missed' : 'Skipped';
        ul.appendChild(el('li', null, [
          el('span', { class: 'summary__status summary__status--' + (r === 'right' ? 'right' : r === 'partial' ? 'partial' : 'wrong'), text: word }),
          el('span', { class: 'summary__stem', text: plainText(q.stem, 110) })
        ]));
      });
      body.appendChild(ul);
      var row = el('div', { class: 'btn-row' });
      if (missed.length) {
        var retry = el('button', { class: 'btn btn--primary', type: 'button', text: 'Retry the ' + missed.length + ' I missed' });
        retry.addEventListener('click', function () { start(missed); focusFirst(); });
        row.appendChild(retry);
      }
      var again = el('button', { class: 'btn' + (missed.length ? '' : ' btn--primary'), type: 'button', text: 'New set' });
      again.addEventListener('click', function () { start(); focusFirst(); });
      row.appendChild(again);
      if (opts.practiceLink !== false && util.page() !== 'practice') {
        row.appendChild(el('a', { class: 'btn btn--quiet', href: util.root() + 'practice.html' + (opts.topics && opts.topics.length === 1 ? '?topic=' + opts.topics[0] : ''), text: 'More practice' }));
      }
      body.appendChild(row);
      head.focus();
      if (opts.onFinish) opts.onFinish({ right: right, total: set.length });
    }
    function focusFirst() { var s = body.querySelector('.q__stem'); if (s) s.focus(); }

    start();
    return { restart: function () { start(); }, options: opts };
  }

  /* ---------- Auto-init: <div data-s1-quiz ...> ------------------------------ */
  function list(v) { return v ? String(v).split(',').map(function (s) { return s.trim(); }).filter(Boolean) : null; }
  function initEmbeds(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-s1-quiz]:not([data-s1-ready])'), function (host) {
      host.setAttribute('data-s1-ready', '');
      var d = host.dataset, topics = list(d.topic);
      if (topics && topics.length === 1 && topics[0] === 'all') topics = null;
      var opts = {
        topics: topics, level: d.level || null, tier: d.tier || null, type: d.type || null, ids: list(d.ids),
        count: d.count ? parseInt(d.count, 10) : 5, shuffle: d.shuffle !== 'false', mode: d.mode || 'practice', title: d.title || null
      };
      var ctl = mount(host, opts), started = false;
      host.addEventListener('change', function () { started = true; }, true);
      host.addEventListener('input', function () { started = true; }, true);
      // If the SL/HL switch changes before the student has started, rebuild the set.
      S1.level.onChange(function () { if (!started) ctl.restart(); });
    });
  }

  /* ---------- Practice arena: <div data-s1-practice> -------------------------- */
  function initArena(host) {
    var params = {};
    try { (window.location.search || '').replace(/^\?/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); }); } catch (e) { /* ignore */ }
    var preTopics = list(params.topic);

    host.innerHTML = '';
    var form = el('form', { class: 'arena-filters', novalidate: true, 'aria-label': 'Choose your practice set' });
    var topicField = el('fieldset');
    topicField.appendChild(el('legend', { text: 'Topics' }));
    var chips = el('div');
    var topicInputs = [];
    S1.groups.forEach(function (g) {
      var row = el('div', { class: 'chips' });
      S1.topicsIn(g.id).forEach(function (t) {
        var n = S1.questions.byTopic(t.id).length;
        var input = el('input', { type: 'checkbox', value: t.id });
        input.checked = n > 0 && (preTopics ? preTopics.indexOf(t.id) > -1 : true);
        input.disabled = n === 0;
        topicInputs.push(input);
        row.appendChild(el('label', { class: 'chip' + (n === 0 ? ' chip--soon' : '') }, [input, el('span', { text: t.num + ' ' + t.short }), el('span', { class: 'chip__n', text: n === 0 ? 'soon' : String(n), title: n + ' questions' })]));
      });
      chips.appendChild(el('div', { class: 'chips-group', role: 'group', 'aria-label': g.name }, [el('p', { class: 'chips-group__title', text: g.name + ' \u00B7 ' + g.title }), row]));
    });
    topicField.appendChild(chips);
    form.appendChild(topicField);

    function select(label, name, options, value) {
      var id = util.uid('f');
      var s = el('select', { class: 'select', id: id, name: name });
      options.forEach(function (o) { var op = el('option', { value: o[0], text: o[1] }); if (o[0] === value) op.selected = true; s.appendChild(op); });
      return { wrap: el('div', null, [el('label', { class: 'field-label', for: id, text: label }), s]), el: s };
    }
    var level = select('Level', 'level', [['all', 'SL and AHL'], ['sl', 'SL only'], ['ahl', 'AHL only']], params.level || 'all');
    var tier = select('Difficulty', 'tier', [['all', 'Any'], ['foundation', 'Foundation'], ['exam', 'Exam style'], ['challenge', 'Challenge']], params.tier || 'all');
    var type = select('Question type', 'type', [['all', 'Any'], ['mcq', 'Multiple choice'], ['numeric', 'Calculation'], ['multi', 'Select all that apply'], ['order', 'Put in order'], ['short', 'Written answer']], params.type || 'all');
    var count = select('How many', 'count', [['5', '5 questions'], ['10', '10 questions'], ['20', '20 questions'], ['0', 'All that match']], params.count || '10');
    form.appendChild(el('div', { class: 'arena-selects' }, [level.wrap, tier.wrap, type.wrap, count.wrap]));

    var startBtn = el('button', { class: 'btn btn--primary', type: 'submit', text: 'Start practice' });
    var reviewBtn = el('button', { class: 'btn', type: 'button' });
    var match = el('p', { class: 'arena-match', role: 'status', 'aria-live': 'polite' });
    form.appendChild(el('div', { class: 'btn-row' }, [startBtn, reviewBtn, match]));
    host.appendChild(form);
    var stage = el('div', { class: 'arena-stage' });
    host.appendChild(stage);

    function current() {
      var topics = topicInputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
      return { topics: topics, level: level.el.value, tier: tier.el.value, type: type.el.value, count: parseInt(count.el.value, 10) };
    }
    function paint() {
      var o = current();
      var n = o.topics.length ? buildPool(o).length : 0;
      match.textContent = !o.topics.length ? 'Pick at least one topic.' : n === 1 ? '1 question matches' : n + ' questions match';
      startBtn.disabled = n === 0;
      var m = S1.questions.filter({ ids: S1.progress.mistakes() }).length;
      reviewBtn.textContent = 'Review my mistakes (' + m + ')';
      reviewBtn.disabled = m === 0;
      if (S1.level.get() === 'sl') { level.el.value = 'sl'; level.el.disabled = true; } else level.el.disabled = false;
    }
    function run(opts) {
      stage.innerHTML = '';
      var box = el('div');
      stage.appendChild(box);
      opts.practiceLink = false;
      mount(box, opts);
      var s = box.querySelector('.q__stem');
      if (s) { try { box.scrollIntoView({ block: 'start', behavior: util.reducedMotion() ? 'auto' : 'smooth' }); } catch (e) { box.scrollIntoView(); } s.focus({ preventScroll: true }); }
    }
    form.addEventListener('change', paint);
    form.addEventListener('submit', function (e) { e.preventDefault(); var o = current(); o.title = 'Mixed practice'; run(o); });
    reviewBtn.addEventListener('click', function () { run({ mode: 'review', count: 0, title: 'Review my mistakes' }); });
    doc.addEventListener('s1:progress', paint);
    doc.addEventListener('s1:levelchange', paint);
    paint();
  }

  S1.quiz = { mount: mount, renderQuestion: renderQuestion, pickSet: pickSet, TIER_LABEL: TIER_LABEL, TYPE_LABEL: TYPE_LABEL };

  S1.onEnhance(function (root) {
    initEmbeds(root);
    Array.prototype.forEach.call(root.querySelectorAll('[data-s1-practice]:not([data-s1-ready])'), function (host) {
      host.setAttribute('data-s1-ready', '');
      initArena(host);
    });
  });
})();
