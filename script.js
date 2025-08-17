/* ---------- Utilities ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Footer year ---------- */
(function yearInit() {
  const y = new Date().getFullYear();
  $$('#year').forEach(el => el.textContent = y);
})();