/* Static entry pages keep Chinese as their no-JS fallback. */
(() => {
  const locale = window.ResearchTrackLanguage;
  if (!locale) return;
  const english = locale.lang === 'en';
  locale.mount(document.querySelector('header nav'));
  if (english) {
    document.querySelectorAll('[data-en]').forEach(node => { node.textContent = node.dataset.en; });
    document.querySelectorAll('[data-alt-en]').forEach(node => { node.alt = node.dataset.altEn; });
    document.querySelectorAll('[data-src-en]').forEach(node => { node.src = node.dataset.srcEn; });
    document.querySelectorAll('[data-href-en]').forEach(node => { node.href = node.dataset.hrefEn; });
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = 'Interactive literature maps for gastrointestinal cancer research.';
  }
  document.querySelectorAll('a[data-locale]').forEach(node => {
    node.href = locale.link(node.getAttribute('href'));
  });
})();
