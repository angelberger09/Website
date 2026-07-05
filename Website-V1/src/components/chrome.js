import { cleanPath } from "../lib/dom.js";

function routeHref(item, currentPage) {
  if (item.key === currentPage) return "./";
  const prefix = currentPage === "home" ? "./" : "../";
  if (item.key === "home") return prefix;
  return `${prefix}${item.key}/`;
}

export function syncStaticChrome({ site, navItems, socialLinks }, root = document) {
  const currentPage = cleanPath(window.location.pathname);

  root.querySelectorAll(".brand").forEach((brand) => {
    brand.textContent = site.displayName;
    brand.href = routeHref({ key: "home" }, currentPage);
    brand.setAttribute("aria-label", `${site.displayName} home`);
  });

  root.querySelectorAll(".page-footer__email").forEach((email) => {
    email.textContent = site.email;
    email.href = `mailto:${site.email}`;
  });

  root.querySelectorAll(".page-footer__social .social-link").forEach((link, index) => {
    const social = socialLinks[index];
    if (!social) return;
    link.href = social.href;
    link.setAttribute("aria-label", social.label);
  });

  root.querySelectorAll("[data-nav-link]").forEach((link) => {
    const item = navItems.find((navItem) => navItem.key === link.dataset.navLink);
    if (!item) return;
    link.textContent = item.label;
    link.href = routeHref(item, currentPage);
  });
}
