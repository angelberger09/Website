export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function cleanPath(pathname = window.location.pathname) {
  const normalized = pathname.replace(/\/+$/, "/");
  if (normalized === "/" || normalized.endsWith("/index.html")) return "home";
  if (normalized.includes("/physical/")) return "physical";
  if (normalized.includes("/digital/")) return "digital";
  if (normalized.includes("/journal/")) return "journal";
  if (normalized.includes("/contact/")) return "contact";
  return "home";
}
