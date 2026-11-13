/* ==========================================================================
   Structure Lab — quiz.js
   Question engine for topic-page quizzes (<div data-s1-quiz>) and the
   practice arena (<div data-s1-practice>).  Load after chem.js and core.js.
   Question schema: see docs/AUTHORING.md.
   All visible text is a "live" binding, so a language switch re-renders the
   current question in place without losing the student's answer.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.util) { if (window.console) console.error('quiz.js needs core.js to be loaded first'); return; }
  var util = S1.util, el = util.el, doc = document;
  var t = S1.i18n.ui, tp = S1.t, live = S1.i18n.live, liveAttr = S1.i18n.liveAttr, render = S1.i18n.render, Q = S1.i18n.q;

  var TIER_LABEL = { foundation: 'Foundation', exam: 'Exam style', challenge: 'Challenge' };   // i18n
  var TYPE_LABEL = { mcq: 'Multiple choice', numeric: 'Calculation', multi: 'Select all that apply', order: 'Put in order', short: 'Written answer' };   // i18n
  var LETTERS = 'ABCDEFGH';
  var STD_FORM_HELP = 'For standard form, type <span class="mono">6.02e23</span> or <span class="mono">6.02x10^23</span>.';   // i18n

  function plainText(htmlStr, max) {
    var d = doc.createElement('div'); d.innerHTML = htmlStr;
    var s = (d.textContent || '').replace(/\s+/g, ' ').trim();
    return max && s.length > max ? s.slice(0, max - 1).trim() + '…' : s;
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = a.slice().sort(), u = b.slice().sort();
    for (var i = 0; i < s.length; i++) if (s[i] !== u[i]) return false;
    return true;
  }
  function marksText(n) { return t.n(n, { one: '[1 mark]', other: '[{n} marks]' }); }
  // English wording first (it is what earns marks), translation beneath when there is one.
  function bilingual(q, field, index) {
    var en = index != null ? (q[field] || [])[index] : q[field], tr = Q(q, field, index);
    return tr !== en ? en + '<span class="i18n-tr" lang="' + S1.i18n.get() + '">' + tr + '</span>' : en;
  }

  /* ---------- Building a set of questions ---------------------------------- */
  function buildPool(opts) {
    var pool;
    if (opts.mode === 'review') pool = S1.questions.filter({ ids: S1.progress.mistakes() });
    else pool = S1.questions.filter({ topics: opts.topics, level: opts.level, tier: opts.tier, type: opts.type, ids: opts.ids });
    if (opts.mode === 'review' && opts.topics && opts.topics.length) pool = pool.filter(function (q) { return opts.topics.indexOf(q.topic) > -1; });
    if (opts.syllabus && opts.syllabus.length) pool = pool.filter(function (q) { return opts.syllabus.indexOf(q.syllabus) > -1; });
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
     renderQuestion(q, {onResult, onDone}) → element.  onResult(status) fires once,
     on the first definite attempt: 'right' | 'wrong' | 'partial'.               */
  function renderQuestion(q, hooks) {
    hooks = hooks || {};
    var uid = util.uid('q');
    var state = { attempted: false, locked: false, hintsShown: 0 };
    var card = el('article', { class: 'q', 'data-type': q.type, 'data-qid': q.id, 'data-i18n': 'off' });

    var tags = el('div', { class: 'q__tags' });
    tags.appendChild(el('span', { class: 'badge badge--' + (q.level === 'ahl' ? 'ahl' : 'sl'), text: q.level === 'ahl' ? 'AHL' : 'SL', tTitle: q.level === 'ahl' ? 'Additional HL' : 'Standard level core' }));
    tags.appendChild(el('span', { class: 'tag', t: TIER_LABEL[q.tier] || q.tier }));
    if (q.syllabus) tags.appendChild(el('span', { class: 'tag tag--mono', text: q.syllabus }));
    tags.appendChild(live(el('span', { class: 'q__marks' }), function () { return marksText(q.marks); }));
    card.appendChild(tags);

    var stem = live(el('div', { class: 'q__stem', id: uid + '-stem', tabindex: '-1' }), function () { return Q(q, 'stem'); });
    card.appendChild(stem);

    var form = el('form', { class: 'q__form', novalidate: true });
    var feedback = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    var hintList = el('ol', { class: 'q__hints' });
    var solution = el('div', { class: 'q__solution', hidden: true, tabindex: '-1' });
    var actions = el('div', { class: 'q__actions' });
    var checkBtn = el('button', { class: 'btn btn--primary', type: 'submit', t: 'Check' });
    var hintBtn = el('button', { class: 'btn btn--small', type: 'button' });
    var solBtn = el('button', { class: 'btn btn--small btn--quiet', type: 'button', t: 'Show solution', hidden: true });
    var hints = q.hints || [];

    // say(tone, fn): fn() returns {label, body} in the current language each time it is called.
    function say(tone, fn) {
      feedback.className = 'feedback feedback--' + tone;
      live(feedback, function () { var m = fn(); return '<span class="feedback__label">' + m.label + '</span>' + (m.body || ''); });
      S1.enhance(feedback);
    }
    function first(status) {
      if (state.attempted) return;
      state.attempted = true;
      if (hooks.onResult) hooks.onResult(status);
    }
    function showSolution() {
      if (q.type !== 'numeric' && !q.solution) return;
      live(solution, function () {
        var h = '';
        if (q.type === 'numeric') {
          var unitText = Q(q, 'unit');
          var u = unitText ? ' <span class="unit" data-s1-done>' + S1.chem.unit(unitText) + '</span>' : '';
          var shown = q.answerDisplay != null ? Q(q, 'answerDisplay') : (q.sigfigs ? S1.chem.fmt(Number(q.answer), Array.isArray(q.sigfigs) ? q.sigfigs[q.sigfigs.length - 1] : Number(String(q.sigfigs).split('-').pop())) : String(q.answer).replace('-', S1.chem.MINUS));
          h += '<p><strong>' + t('Answer:') + '</strong> <span class="mono">' + shown + '</span>' + u + '</p>';
        }
        if (q.solution) h += Q(q, 'solution');
        return '<h4>' + t('Solution|quiz') + '</h4>' + h;
      });
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
    live(hintBtn, function () { return state.hintsShown === 0 ? t('Hint') : t('Next hint ({n} of {total})', { n: state.hintsShown + 1, total: hints.length }); });
    function paintHints() { render(hintBtn); hintBtn.hidden = state.locked || state.hintsShown >= hints.length; }
    hintBtn.addEventListener('click', function () {
      if (state.hintsShown >= hints.length) return;
      var i = state.hintsShown;
      var li = live(el('li'), function () { return Q(q, 'hints', i); });
      hintList.appendChild(li); S1.enhance(hintList);
      state.hintsShown++; paintHints();
    });
    solBtn.addEventListener('click', function () { markReveal(); lock(); solution.focus(); });

    var check, markReveal = function () {};

    /* --- mcq / multi --- */
    if (q.type === 'mcq' || q.type === 'multi') {
      var multi = q.type === 'multi';
      var correct = multi ? (q.answer || []).map(Number) : [Number(q.answer)];
      var fs = el('fieldset', { class: 'q__fieldset', 'aria-describedby': uid + '-stem' });
      fs.appendChild(el('legend', { class: 'q__legend', t: multi ? 'Select every correct option.' : 'Choose one option.' }));
      var ul = el('ul', { class: 'q__options' }), rows = [];
      var unflag = function (r) { r.row.classList.remove('is-wrong', 'is-right'); var m = r.row.querySelector('.q__mark'); if (m) m.parentNode.removeChild(m); };
      q.options.forEach(function (opt, i) {
        var input = el('input', { type: multi ? 'checkbox' : 'radio', name: uid, value: i });
        var text = live(el('span', { class: 'q__text' }), function () { return Q(q, 'options', i); });
        var row = el('label', { class: 'q__option' }, [input, el('span', { class: 'q__letter', text: LETTERS[i] + '.', 'aria-hidden': 'true' }), text]);
        input.addEventListener('change', function () { if (!state.locked) rows.forEach(unflag); });
        rows.push({ row: row, input: input });
        ul.appendChild(el('li', null, row));
      });
      fs.appendChild(ul); form.appendChild(fs);
      var flag = function (r, ok) {
        r.row.classList.add(ok ? 'is-right' : 'is-wrong');
        if (!r.row.querySelector('.q__mark')) r.row.appendChild(el('span', { class: 'q__mark', t: ok ? 'Correct' : 'Not correct' }));
      };
      markReveal = function () { rows.forEach(function (r, i) { unflag(r); if (correct.indexOf(i) > -1) flag(r, true); }); };
      check = function () {
        var chosen = []; rows.forEach(function (r, i) { if (r.input.checked) chosen.push(i); });
        if (!chosen.length) { say('partial', function () { return { label: multi ? t('Select at least one option first.') : t('Choose an option first.') }; }); return; }
        var has = function (i) { return q.misconception && q.misconception[i]; };
        if (sameSet(chosen, correct)) {
          first('right'); markReveal();
          say('right', function () { return { label: t('Correct'), body: q.correctNote ? Q(q, 'correctNote') : '' }; }); lock();
          return;
        }
        first('wrong');
        if (!multi) {
          var pick = chosen[0];
          flag(rows[pick], false);
          say('wrong', function () { return { label: t('Not this one'), body: (has(pick) ? '<p>' + Q(q, 'misconception', pick) + '</p>' : '') + '<p>' + t('Pick again, or look at the solution.') + '</p>' }; });
        } else {
          var good = 0, bad = [];
          chosen.forEach(function (i) { if (correct.indexOf(i) > -1) good++; else bad.push(i); });
          say('wrong', function () {
            var msg = '<p>' + (bad.length
              ? t('You have {good} of the {total} correct options, and {bad} that should not be selected.', { good: good, total: correct.length, bad: bad.length })
              : t('You have {good} of the {total} correct options.', { good: good, total: correct.length })) + '</p>';
            bad.forEach(function (i) { if (has(i)) msg += '<p><strong>' + LETTERS[i] + ':</strong> ' + Q(q, 'misconception', i) + '</p>'; });
            return { label: t('Not quite'), body: msg };
          });
        }
        solBtn.hidden = false;
      };
    }

    /* --- numeric --- */
    if (q.type === 'numeric') {
      var nid = uid + '-in';
      var nin = el('input', { class: 'input input--num', id: nid, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-describedby': uid + '-stem ' + nid + '-help' });
      form.appendChild(el('label', { class: 'field-label', for: nid, t: 'Your answer' }));
      var unitSpan = q.unit ? live(el('span', { class: 'unit', 'data-s1-done': '' }), function () { return S1.chem.unit(Q(q, 'unit')); }) : null;
      form.appendChild(el('div', { class: 'field-row' }, [nin, unitSpan]));
      form.appendChild(el('p', { class: 'field-help', id: nid + '-help', t: STD_FORM_HELP }));
      check = function () {
        if (!nin.value.trim()) { say('partial', function () { return { label: t('Type your answer first.') }; }); nin.focus(); return; }
        var res = S1.chem.checkNumeric(nin.value, q), tone = S1.chem.describeCheck(res, q).tone;
        if (res.status === 'correct') { first('right'); say('right', function () { return { label: t('Correct'), body: q.correctNote ? Q(q, 'correctNote') : '' }; }); lock(); return; }
        if (res.status === 'sigfig' || res.status === 'invalid') { say(tone, function () { var d = S1.chem.describeCheck(res, q); return { label: d.label, body: d.html }; }); nin.focus(); return; }
        first('wrong');
        var moreHints = hints.length > state.hintsShown;
        say('wrong', function () {
          var d = S1.chem.describeCheck(res, q);
          return { label: d.label, body: (d.html ? '<p>' + d.html + '</p>' : '') + '<p>' + (moreHints ? t('Check your working and try again, or take a hint.') : t('Check your working and try again.')) + '</p>' };
        });
        solBtn.hidden = false;
      };
    }

    /* --- order --- */
    if (q.type === 'order') {
      var n = q.options.length;
      var target = (q.answer && q.answer.length === n) ? q.answer.map(Number) : q.options.map(function (o, i) { return i; });
      var order = target.slice(), guard = 0, flagged = false;
      do { order = util.shuffle(target); guard++; } while (n > 1 && guard < 20 && order.join() === target.join());
      var ol = el('ol', { class: 'q__order', 'aria-describedby': uid + '-stem' });
      var liveMsg = el('p', { class: 'sr-only', role: 'status', 'aria-live': 'polite' });
      form.appendChild(el('p', { class: 'q__legend', t: 'Use the arrows to move each step up or down.' }));
      form.appendChild(ol); form.appendChild(liveMsg);
      var paintOrder = function (focus) {
        ol.innerHTML = '';
        order.forEach(function (optIndex, pos) {
          var up = el('button', { class: 'icon-btn', type: 'button', html: S1.icons.up });
          var down = el('button', { class: 'icon-btn', type: 'button', html: S1.icons.down });
          liveAttr(up, 'aria-label', function () { return t('Move up: {step}', { step: plainText(Q(q, 'options', optIndex), 60) }); });
          liveAttr(down, 'aria-label', function () { return t('Move down: {step}', { step: plainText(Q(q, 'options', optIndex), 60) }); });
          up.disabled = pos === 0 || state.locked; down.disabled = pos === n - 1 || state.locked;
          up.addEventListener('click', function () { move(pos, -1); });
          down.addEventListener('click', function () { move(pos, 1); });
          var li = el('li', null, [live(el('span', { class: 'q__text' }), function () { return Q(q, 'options', optIndex); }), el('span', { class: 'q__move' }, [up, down])]);
          if (flagged) li.classList.add(order[pos] === target[pos] ? 'is-right' : 'is-wrong');
          ol.appendChild(li);
          if (focus && focus.pos === pos) { var b = focus.dir < 0 ? up : down; if (b.disabled) b = focus.dir < 0 ? down : up; b.focus(); }
        });
        S1.enhance(ol);
      };
      var move = function (pos, dir) {
        var to = pos + dir; if (to < 0 || to >= n) return;
        var tmp = order[pos]; order[pos] = order[to]; order[to] = tmp;
        flagged = false;
        paintOrder({ pos: to, dir: dir });
        live(liveMsg, function () { return t('Moved to position {n} of {total}.', { n: to + 1, total: n }); });
      };
      markReveal = function () { order = target.slice(); state.locked = true; flagged = false; paintOrder(); };
      check = function () {
        var good = 0; order.forEach(function (o, i) { if (o === target[i]) good++; });
        flagged = true;
        if (good === n) { first('right'); say('right', function () { return { label: t('Correct'), body: q.correctNote ? Q(q, 'correctNote') : t('Every step is in the right place.') }; }); state.locked = true; paintOrder(); lock(); return; }
        first('wrong');
        paintOrder();
        say('wrong', function () { return { label: t('Not quite'), body: '<p>' + t('{good} of {total} steps are in the right place. Move the others and check again.', { good: good, total: n }) + '</p>' }; });
        solBtn.hidden = false;
      };
      paintOrder();
    }

    /* --- short (self-marked) --- */
    if (q.type === 'short') {
      var tid = uid + '-ta';
      var ta = el('textarea', { class: 'input', id: tid, rows: '4', 'aria-describedby': uid + '-stem' });
      form.appendChild(el('label', { class: 'field-label', for: tid, t: 'Your answer (write it here or on paper; it is not saved)' }));
      form.appendChild(ta);
      var revealed = false;
      live(checkBtn, function () { return revealed ? t('Record my mark') : t('Compare with the model answer'); });
      var points = q.markscheme || [];
      var model = el('div', { class: 'q__model', hidden: true });
      form.appendChild(model);
      check = function () {
        if (!revealed) {
          revealed = true;
          model.appendChild(el('h4', { t: 'Model answer' }));
          model.appendChild(live(el('div', { class: 'q__answer' }), function () { return bilingual(q, 'answer') || ''; }));
          if (points.length) {
            var fsp = el('fieldset', { class: 'q__fieldset' });
            fsp.appendChild(live(el('legend', { class: 'field-label' }), function () {
              return t('Mark your own answer. Tick each point you made.') + (points.length > q.marks ? ' ' + t('(maximum {n})', { n: q.marks }) : '');
            }));
            var pl = el('ul', { class: 'q__points' });
            points.forEach(function (p, i) {
              pl.appendChild(el('li', null, el('label', null, [el('input', { type: 'checkbox', value: i }), live(el('span'), function () { return bilingual(q, 'markscheme', i); })])));
            });
            fsp.appendChild(pl); model.appendChild(fsp);
          }
          model.hidden = false; S1.enhance(model);
          ta.readOnly = true;
          render(checkBtn);
          hintBtn.hidden = true; state.hintsShown = hints.length;
          var firstBox = model.querySelector('input'); if (firstBox) firstBox.focus();
          return;
        }
        var ticked = model.querySelectorAll('input:checked').length;
        var max = q.marks, got = points.length ? Math.min(ticked, max) : 0;
        var status = got >= max ? 'right' : got > 0 ? 'partial' : 'wrong';
        first(status);
        say(status, function () {
          return { label: t.n(max, { one: 'You gave yourself {got} of 1 mark', other: 'You gave yourself {got} of {max} marks' }, { got: got, max: max }),
            body: status === 'right' ? '' : '<p>' + t('Read the points you missed, then try writing the answer again from memory later.') + '</p>' };
        });
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
   * options: { topics: ['s1-1'], level, tier, type, ids: [...], syllabus: ['Structure 1.4.2'], count: 5, shuffle: true,
   *            mode: 'practice' | 'review', title: 'Quick check', emptyText }
   */
  function mount(host, opts) {
    opts = opts || {};
    host.classList.add('quiz');
    host.setAttribute('data-i18n', 'off');
    host.innerHTML = '';
    // A title given by the page author is page text; the defaults are shell text.
    var titleDefault = opts.mode === 'review' ? 'Review my mistakes' : 'Quick check';   // i18n
    var titleText = function () { return opts.title ? (opts.titleScope === 'ui' ? t(opts.title) : tp(opts.title)) : t(titleDefault); };
    var title = live(el('h3', { class: 'quiz__title' }), titleText);
    var meta = el('p', { class: 'quiz__meta', role: 'status', 'aria-live': 'polite' });
    var track = el('ol', { class: 'quiz__track', 'aria-hidden': 'true' });
    var body = el('div', { class: 'quiz__body' });
    host.appendChild(el('div', { class: 'quiz__head' }, [title, meta]));
    host.appendChild(track);
    host.appendChild(body);
    if (!host.getAttribute('aria-label') || host.__s1attrs) { host.setAttribute('role', 'region'); liveAttr(host, 'aria-label', titleText); }

    var set = [], results = [], index = 0, finished = false;
    function rightCount() { return results.filter(function (r) { return r === 'right'; }).length; }
    live(meta, function () {
      if (!set.length) return '';
      return finished ? t('Finished · {right} of {total} right', { right: rightCount(), total: set.length })
        : t('Question {n} of {total} · {right} right', { n: index + 1, total: set.length, right: rightCount() });
    });

    function start(custom) {
      var picked = custom ? { set: custom } : pickSet(opts);
      set = picked.set; results = set.map(function () { return null; }); index = 0; finished = false;
      if (!set.length) return empty();
      show(false);
    }
    function empty() {
      track.innerHTML = ''; render(meta);
      var key = opts.emptyText || (opts.mode === 'review'
        ? 'No mistakes saved. Questions you get wrong will appear here so you can try them again.'   // i18n
        : (S1.questions.all().length ? 'No questions match this selection yet.' : 'Questions for this section are on their way.'));   // i18n
      body.innerHTML = '';
      body.appendChild(opts.emptyText ? el('p', { class: 'quiz__empty', tp: key }) : el('p', { class: 'quiz__empty', t: key }));
    }
    function paintHead() {
      render(meta);
      track.innerHTML = '';
      set.forEach(function (q, i) {
        track.appendChild(el('li', { class: (results[i] ? 'is-' + results[i] : '') + (i === index && !finished ? ' is-current' : '') }));
      });
    }
    function show(moveFocus) {
      var q = set[index];
      body.innerHTML = '';
      var nextWrap = el('div', { class: 'q__next' });
      var last = index === set.length - 1, stage = 0;      // 0 untouched, 1 attempted or done
      var next = el('button', { class: 'btn', type: 'button' });
      live(next, function () { return stage === 0 ? (last ? t('Finish') : t('Skip this question')) : (last ? t('See my results') : t('Next question')); });
      next.addEventListener('click', function () { if (index < set.length - 1) { index++; show(true); } else summary(); });
      nextWrap.appendChild(next);
      var card = renderQuestion(q, {
        onResult: function (status) {
          results[index] = status;
          S1.progress.recordAnswer(q, status);
          paintHead();
          stage = 1; render(next);
        },
        onDone: function () { stage = 1; render(next); next.classList.add('btn--primary'); }
      });
      body.appendChild(card);
      body.appendChild(nextWrap);
      paintHead();
      if (moveFocus) {
        var stem = card.querySelector('.q__stem');
        try { stem.focus({ preventScroll: true }); } catch (e) { stem.focus(); }
        var top = host.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight * 0.6) { try { host.scrollIntoView({ block: 'start', behavior: util.reducedMotion() ? 'auto' : 'smooth' }); } catch (e2) { host.scrollIntoView(); } }
      }
    }
    function summary() {
      finished = true;
      paintHead();
      var right = rightCount(), missed = [];
      results.forEach(function (r, i) { if (r !== 'right') missed.push(set[i]); });
      body.innerHTML = '';
      var head = live(el('p', { class: 'summary__score', tabindex: '-1' }), function () { return right + ' / ' + set.length + ' <small>' + t('right first time') + '</small>'; });
      body.appendChild(head);
      body.appendChild(el('p', { t: right === set.length ? 'All correct. Try a harder tier next, or move on.'   // i18n
        : right === 0 ? 'A tough set. Go back over the worked examples, then retry the questions below.'   // i18n
        : 'Good work. Retry the ones you missed while the ideas are fresh.' }));   // i18n
      var ul = el('ul', { class: 'summary__list' });
      set.forEach(function (q, i) {
        var r = results[i], word = r === 'right' ? 'Right' : r === 'partial' ? 'Part marks' : r === 'wrong' ? 'Missed' : 'Skipped';   // i18n
        ul.appendChild(el('li', null, [
          el('span', { class: 'summary__status summary__status--' + (r === 'right' ? 'right' : r === 'partial' ? 'partial' : 'wrong'), t: word }),
          live(el('span', { class: 'summary__stem' }), function () { return util.escapeHtml(plainText(Q(q, 'stem'), 110)); })
        ]));
      });
      body.appendChild(ul);
      var row = el('div', { class: 'btn-row' });
      if (missed.length) {
        var retry = live(el('button', { class: 'btn btn--primary', type: 'button' }), function () { return t('Retry the {n} I missed', { n: missed.length }); });
        retry.addEventListener('click', function () { start(missed); focusFirst(); });
        row.appendChild(retry);
      }
      var again = el('button', { class: 'btn' + (missed.length ? '' : ' btn--primary'), type: 'button', t: 'New set' });
      again.addEventListener('click', function () { start(); focusFirst(); });
      row.appendChild(again);
      if (opts.practiceLink !== false && util.page() !== 'practice') {
        row.appendChild(el('a', { class: 'btn btn--quiet', href: util.root() + 'practice.html' + (opts.topics && opts.topics.length === 1 ? '?topic=' + opts.topics[0] : ''), t: 'More practice' }));
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
        syllabus: list(d.syllabus), count: d.count ? parseInt(d.count, 10) : 5, shuffle: d.shuffle !== 'false', mode: d.mode || 'practice', title: d.title || null
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

    host.setAttribute('data-i18n', 'off');
    host.innerHTML = '';
    var form = el('form', { class: 'arena-filters', novalidate: true, tLabel: 'Choose your practice set' });
    var topicField = el('fieldset');
    topicField.appendChild(el('legend', { t: 'Topics' }));
    var chips = el('div');
    var topicInputs = [];
    S1.groups.forEach(function (g) {
      var row = el('div', { class: 'chips' });
      S1.topicsIn(g.id).forEach(function (tp) {
        var n = S1.questions.byTopic(tp.id).length;
        var input = el('input', { type: 'checkbox', value: tp.id });
        input.checked = n > 0 && (preTopics ? preTopics.indexOf(tp.id) > -1 : true);
        input.disabled = n === 0;
        topicInputs.push(input);
        var name = el('span', null, live(el('span'), function () { return tp.num + ' ' + t(tp.short); }));
        if (tp.level === 'ahl') name.appendChild(el('span', { class: 'badge badge--ahl hl-tag', text: 'HL' }));
        var num = n === 0 ? el('span', { class: 'chip__n', t: 'soon' }) : el('span', { class: 'chip__n', text: String(n) });
        row.appendChild(el('label', { class: 'chip' + (n === 0 ? ' chip--soon' : ''), 'data-level': tp.level === 'ahl' ? 'ahl' : null }, [input, name, num]));
      });
      var gt = live(el('p', { class: 'chips-group__title' }), function () { return t(g.name) + ' · ' + t(g.title); });
      chips.appendChild(liveAttr(el('div', { class: 'chips-group', role: 'group' }, [gt, row]), 'aria-label', function () { return t(g.name); }));
    });
    topicField.appendChild(chips);
    form.appendChild(topicField);

    function select(label, name, options, value) {
      var id = util.uid('f');
      var s = el('select', { class: 'select', id: id, name: name });
      options.forEach(function (o) { var op = el('option', { value: o[0], t: o[1] }); if (o[0] === value) op.selected = true; s.appendChild(op); });
      return { wrap: el('div', null, [el('label', { class: 'field-label', for: id, t: label }), s]), el: s };
    }
    var level = select('Level', 'level', [['all', 'SL and AHL'], ['sl', 'SL only'], ['ahl', 'AHL only']], params.level || 'all');   // i18n
    var tier = select('Difficulty', 'tier', [['all', 'Any'], ['foundation', 'Foundation'], ['exam', 'Exam style'], ['challenge', 'Challenge']], params.tier || 'all');   // i18n
    var type = select('Question type', 'type', [['all', 'Any'], ['mcq', 'Multiple choice'], ['numeric', 'Calculation'], ['multi', 'Select all that apply'], ['order', 'Put in order'], ['short', 'Written answer']], params.type || 'all');   // i18n
    var count = select('How many', 'count', [['5', '5 questions'], ['10', '10 questions'], ['20', '20 questions'], ['0', 'All that match']], params.count || '10');   // i18n
    form.appendChild(el('div', { class: 'arena-selects' }, [level.wrap, tier.wrap, type.wrap, count.wrap]));

    var startBtn = el('button', { class: 'btn btn--primary', type: 'submit', t: 'Start practice' });
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
    function matches() { var o = current(); return o.topics.length ? buildPool(o).length : 0; }
    function mistakes() { return S1.questions.filter({ ids: S1.progress.mistakes() }).length; }
    live(match, function () {
      var n = matches();
      return !current().topics.length ? t('Pick at least one topic.') : t.n(n, { one: '1 question matches', other: '{n} questions match' });
    });
    live(reviewBtn, function () { return t('Review my mistakes ({n})', { n: mistakes() }); });
    function paint() {
      render(match); render(reviewBtn);
      startBtn.disabled = matches() === 0;
      reviewBtn.disabled = mistakes() === 0;
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
    form.addEventListener('submit', function (e) { e.preventDefault(); var o = current(); o.title = 'Mixed practice'; o.titleScope = 'ui'; run(o); });   // i18n
    reviewBtn.addEventListener('click', function () { run({ mode: 'review', count: 0, title: 'Review my mistakes', titleScope: 'ui' }); });   // i18n
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
