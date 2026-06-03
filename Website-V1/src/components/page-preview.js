import { escapeHtml } from "../lib/dom.js";

export function renderPagePreview(preview) {
  return `
    <a class="preview" href="${escapeHtml(preview.href)}">
      ${
        preview.image
          ? `
            <figure class="preview__media">
              <img
                class="preview__image"
                src="${escapeHtml(preview.image)}"
                alt="${escapeHtml(preview.title)}"
                loading="lazy"
                data-parallax
              />
            </figure>
          `
          : ""
      }
      <span class="preview__content">
        <span class="preview__eyebrow">${escapeHtml(preview.eyebrow)}</span>
        <span class="preview__title">${escapeHtml(preview.title)}</span>
        <span class="preview__summary">${escapeHtml(preview.summary)}</span>
        <span class="preview__meta">${escapeHtml(preview.meta)}</span>
      </span>
    </a>
  `;
}

export function mountPreview(container, preview) {
  if (!container) return;
  container.innerHTML = renderPagePreview(preview);
}
