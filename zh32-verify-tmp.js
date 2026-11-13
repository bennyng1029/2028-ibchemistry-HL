const { chromium } = require('playwright');
const S = __dirname;
(async () => {
  const browser = await chromium.launch();
  for (const W of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width: W, height: 900 } });
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    page.on('pageerror', e => errs.push('PAGEERR ' + e.message));
    await page.goto('file:///home/user/2028-ibchemistry-HL/topics/s3-2.html');
    await page.waitForTimeout(800);
    await page.selectOption('[data-s1-lang-select]', 'zh-Hant');
    await page.waitForTimeout(2500);
    await page.evaluate(() => { document.querySelectorAll('details').forEach(d => { d.open = true; }); });
    const widgets = await page.$$('[data-s1-widget]');
    for (const w of widgets) {
      const id = await w.getAttribute('data-s1-widget');
      await w.scrollIntoViewIfNeeded(); await page.waitForTimeout(300);
      await w.screenshot({ path: S + '/w-' + id + '-' + W + '-a.png' }).catch(e => console.log('shot fail', id));
      for (let r = 0; r < 4; r++) {
        const btns = await w.$$('button:not([disabled])');
        if (!btns.length) break;
        const b = btns[Math.min(btns.length - 1, (r * 2) % btns.length)];
        await b.click({ timeout: 1500, force: true }).catch(() => {});
        await page.waitForTimeout(250);
      }
      await w.screenshot({ path: S + '/w-' + id + '-' + W + '-b.png' }).catch(() => {});
    }
    const info = await page.evaluate(() => {
      const c = S1.i18n.coverage();
      const over = []; const vw = document.documentElement.clientWidth;
      document.querySelectorAll('main *').forEach(e => {
        const r = e.getBoundingClientRect();
        if (r.width > 0 && r.right > vw + 2) {
          let p = e.parentElement, scroll = false;
          while (p && p !== document.body) { const s = getComputedStyle(p); if (/auto|scroll|hidden/.test(s.overflowX)) { scroll = true; break; } p = p.parentElement; }
          if (!scroll) over.push(e.tagName + '.' + e.className + ' ' + Math.round(r.right) + ' ' + (e.textContent || '').slice(0, 40));
        }
      });
      return { lang: c.lang, total: c.total, missing: c.missing, missingUi: c.missingUi, docW: document.documentElement.scrollWidth, vw, over: over.slice(0, 15) };
    });
    console.log('WIDTH', W, JSON.stringify(info, null, 1)); console.log('errors', errs);
    await page.screenshot({ path: S + '/full-' + W + '.png', fullPage: true });
    await page.close();
  }
  await browser.close();
})();
