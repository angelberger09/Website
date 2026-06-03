import { escapeHtml } from "../lib/dom.js";

export function renderVisualRail(items = []) {
  return `
    <ul class="visual-rail">
      ${items
        .map(
          (item) => `
            <li class="visual-rail__item">
              <figure class="visual-rail__figure">
                <img
                  class="visual-rail__image"
                  src="${escapeHtml(item.image)}"
                  alt="${escapeHtml(item.title)}"
                  loading="lazy"
                  data-parallax
                />
              </figure>
              <p class="visual-rail__caption">${escapeHtml(item.caption)}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

export function mountVisualRail(container, items = []) {
  if (!container) return;
  container.innerHTML = renderVisualRail(items);
}
