/* ---------- Utilities ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Footer year ---------- */
(function yearInit() {
  const y = new Date().getFullYear();
  $$('#year').forEach(el => el.textContent = y);
})();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  // Toggle whole hamburger menu
  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Toggle NCERT Solutions
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      btn.parentElement.classList.toggle("open");
    });
  });

  // ✅ Toggle each Class → Subjects
  const classToggles = document.querySelectorAll(".class-toggle");
  classToggles.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      btn.parentElement.classList.toggle("open");
    });
  });
});

