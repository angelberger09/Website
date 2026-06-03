import { cleanPath } from "../lib/dom.js";

export function syncActiveNav(root = document) {
  const current = cleanPath(window.location.pathname);
  root.querySelectorAll("[data-nav-link]").forEach((link) => {
    const key = link.getAttribute("data-nav-link");
    const active = key === current;
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}
