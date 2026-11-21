/* Site-wide locale, shared by the index and all interactive maps. */
(() => {
  'use strict';
  const key = 'researchTrack.lang';
  const valid = value => value === 'en' || value === 'zh';
  const requested = new URL(location.href).searchParams.get('lang');
  let saved;
  try { saved = localStorage.getItem(key); } catch (_) { /* Storage may be disabled. */ }
  const lang = valid(requested) ? requested : valid(saved) ? saved : 'zh';
  const remember = value => {
    try { localStorage.setItem(key, value); } catch (_) { /* The URL still carries the locale. */ }
  };
  remember(lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  function set(value) {
    if (!valid(value) || value === lang) return;
    const url = new URL(location.href);
    url.searchParams.set('lang', value);
    remember(value);
    location.assign(url.href);
  }
  function link(href) {
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return href;
    url.searchParams.set('lang', lang);
    return url.href;
  }
  function mount(anchor) {
    if (!anchor || anchor.querySelector('.rt-language')) return;
    if (!document.getElementById('rt-language-style')) {
      const style = document.createElement('style');
      style.id = 'rt-language-style';
      style.textContent = '.rt-language{display:inline-flex;gap:2px;padding:2px;background:#fff;border:1px solid #c4d7df;border-radius:999px;color:#174762;vertical-align:middle;max-width:100%}.rt-language button{margin:0;min-height:32px;padding:3px 10px;border:0;border-radius:999px;background:#fff;color:#174762;font:600 13px/1.25 system-ui,sans-serif;letter-spacing:0;cursor:pointer}.rt-language button[aria-pressed="true"]{background:#215970;color:#fff}.rt-language button:focus-visible{outline:2px solid #126a67;outline-offset:2px}';
      document.head.append(style);
    }
    const group = document.createElement('span');
    group.className = 'rt-language';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', lang === 'en' ? 'Display language' : '显示语言');
    for (const [value, label] of [['zh', '中文'], ['en', 'English']]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.lang = value === 'zh' ? 'zh-CN' : 'en';
      button.textContent = label;
      button.setAttribute('aria-pressed', String(lang === value));
      button.addEventListener('click', () => set(value));
      group.append(button);
    }
    anchor.append(group);
  }
  window.ResearchTrackLanguage = Object.freeze({lang, set, link, mount});
})();
