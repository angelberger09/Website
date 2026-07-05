import { escapeHtml } from "../lib/dom.js";

function entryButton(item, theme = "dark", options = {}) {
  const title = escapeHtml(item.title);
  const type = escapeHtml(item.type ?? "");
  const status = escapeHtml(item.status ?? "");
  const summary = escapeHtml(item.summary ?? "");
  const detail = escapeHtml(item.detail ?? item.summary ?? "");
  const note = escapeHtml(item.note ?? "");
  const price = item.price ? `<span class="entry__price">${escapeHtml(item.price)}</span>` : "";
  const themeClass = theme === "light" ? " entry--light" : "";
  const featuredClass = options.featured ? " entry--featured" : "";
  const loading = options.eager ? "eager" : "lazy";
  const titleId = options.titleId ? ` id="${escapeHtml(options.titleId)}"` : "";
  const sectionCopy = options.sectionCopy
    ? `<p class="entry__summary">${escapeHtml(options.sectionCopy)}</p>`
    : "";
  const media = item.image
    ? `
      <figure class="entry__media">
        <img
          class="entry__image"
          src="${escapeHtml(item.image)}"
          alt="${title}"
          loading="${loading}"
          data-parallax
        />
      </figure>
    `
    : "";

  return `
    <article class="entry${featuredClass}${themeClass}">
      ${media}
      <div class="entry__content">
        <header class="entry__top">
          <span class="entry__type">${type}</span>
          <span class="entry__status">${status}</span>
        </header>
        <h3 class="entry__title"${titleId}>${title}</h3>
        <p class="entry__summary">${summary}</p>
        ${sectionCopy}
        <div class="entry__bottom">
          <span class="entry__note">${note}</span>
          ${price}
          <button
            type="button"
            class="entry__button"
            data-entry-expand
            data-entry-title="${title}"
            data-entry-type="${type}"
            data-entry-status="${status}"
            data-entry-summary="${summary}"
            data-entry-detail="${detail}"
          >
            Open note
          </button>
        </div>
      </div>
    </article>
  `;
}

export function renderFeaturedEntry(item, options = {}) {
  if (!item) return "";
  return entryButton(item, options.theme ?? "dark", {
    ...options,
    featured: true,
  });
}

export function renderEntryList(items = []) {
  return items
    .map(
      (item) =>
        `<li class="entry-shell">${entryButton(item, "light")}</li>`
    )
    .join("");
}

export function mountFeaturedEntry(container, item, options = {}) {
  if (!container) return;
  container.innerHTML = renderFeaturedEntry(item, options);
}

export function mountEntryList(container, items = []) {
  if (!container) return;
  container.innerHTML = renderEntryList(items);
}
