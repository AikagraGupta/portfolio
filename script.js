const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const progress = document.querySelector(".reading-progress span");
const projectLinks = [...document.querySelectorAll("[data-project-link]")];
const projects = [...document.querySelectorAll("[data-project]")];

const closeMenu = () => {
  if (!menuToggle || !nav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const updatePageState = () => {
  const y = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  header?.classList.toggle("is-scrolled", y > 28);
  if (progress) progress.style.width = `${height > 0 ? (y / height) * 100 : 0}%`;
};

updatePageState();
window.addEventListener("scroll", updatePageState, { passive: true });

if ("IntersectionObserver" in window && projects.length) {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      projectLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-20% 0px -55%", threshold: [0.05, 0.2, 0.45] }
  );

  projects.forEach((project) => projectObserver.observe(project));
} else if (projectLinks[0]) {
  projectLinks[0].classList.add("is-active");
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
