(() => {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Dark mode toggle ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  function applyTheme(theme) {
    if (theme === "light") {
      root.classList.remove("dark");
      iconSun?.classList.remove("hidden");
      iconMoon?.classList.add("hidden");
    } else {
      root.classList.add("dark");
      iconMoon?.classList.remove("hidden");
      iconSun?.classList.add("hidden");
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(prefersLight ? "light" : "dark");
  }

  themeBtn?.addEventListener("click", () => {
    const isDark = root.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Mobile nav ---------- */
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const overlay = document.getElementById("mobile-overlay");

  function openMenu() {
    mobileNav?.classList.add("open");
    overlay?.classList.remove("hidden");
    menuBtn?.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    mobileNav?.classList.remove("open");
    overlay?.classList.add("hidden");
    menuBtn?.setAttribute("aria-expanded", "false");
  }
  menuBtn?.addEventListener("click", () => {
    mobileNav?.classList.contains("open") ? closeMenu() : openMenu();
  });
  overlay?.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- Terminal typing animation ---------- */
  const typedEl = document.getElementById("typed-code");
  if (typedEl) {
    const lines = [
      "const developer = {",
      "  name: 'Habieb Anugrah Heryza',",
      "  role: ['Web Developer', 'Student', 'Freelancer'],",
      "  stack: ['HTML', 'CSS', 'JS', 'PHP', 'Laravel', 'Tailwind'],",
      "  status: 'open to freelance work'",
      "};",
    ];
    const fullText = lines.join("\n");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      typedEl.textContent = fullText;
    } else {
      let i = 0;
      function type() {
        if (i <= fullText.length) {
          typedEl.textContent = fullText.slice(0, i);
          i++;
          setTimeout(type, 18);
        }
      }
      type();
    }
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }
})();
