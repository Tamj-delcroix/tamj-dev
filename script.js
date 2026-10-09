// =========================================
// TAMJ.DEV
// Developer Terminal Portfolio
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  // =========================================
  // MOBILE MENU
  // =========================================

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  // =========================================
  // ACTIVE NAVIGATION
  // =========================================

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const updateActiveNav = () => {
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // =========================================
  // CURRENT YEAR
  // =========================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =========================================
  // SMOOTH INTERNAL LINKS
  // =========================================

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // =========================================
  // TERMINAL CURSOR
  // =========================================

  const terminalCursors = document.querySelectorAll(".terminal-cursor");

  terminalCursors.forEach((cursor) => {
    cursor.setAttribute("aria-hidden", "true");
  });

  // =========================================
  // CONSOLE
  // =========================================

  console.log(">_ tamj.dev", "color:#39ff88;font-weight:bold;font-size:16px;");

  console.log("%cWeb Developer Student", "color:#9baaa1;font-size:12px;");

  console.log(
    "%cAlways learning, always building.",
    "color:#64b5ff;font-size:12px;",
  );
});
