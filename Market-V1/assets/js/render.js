export async function loadProducts() {
  const response = await fetch(new URL("../../data/products.json", import.meta.url));
  if (!response.ok) throw new Error("Unable to load catalog.");
  return response.json();
}

export function productImage(product) {
  if (product.imageUrl) return product.imageUrl;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <rect width="640" height="420" fill="#111820" />
      <text x="48" y="220" fill="#eff3f8" font-size="42" font-family="Inter, Arial, sans-serif">${product.title}</text>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function stars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "½" : "");
}

export function renderProductCard(product, href, options = {}) {
  const actionLabel = options.actionLabel || "Open";
  const index = Number.isFinite(options.index) ? options.index : 0;
  const externalUrl = product.externalUrl || "";
  const externalLabel = product.externalLabel || "External link";
  const footer = externalUrl
    ? `
        <footer class="card-footer">
          <a class="external-link" href="${externalUrl}" target="_blank" rel="noreferrer noopener">${externalLabel}</a>
        </footer>
      `
    : "";
  return `
    <a class="product-card" href="${href}" data-product-id="${product.id}" style="--card-index: ${index};">
      <article class="product-card-shell">
        <div class="product-art">
        <img src="${productImage(product)}" alt="${product.title}" loading="lazy" />
        <div class="floating-badge">${product.badge}</div>
        </div>
        <div class="product-copy">
          <div class="card-head">
            <span class="eyebrow">${product.category}</span>
            <span aria-hidden="true" class="card-action">${actionLabel}</span>
          </div>
          <h3>${product.title}</h3>
          <div class="meta-row">
            <span class="price">${money(product.price)}</span>
          </div>
          <p>${product.shortDescription}</p>
          ${footer}
        </div>
      </article>
    </a>
  `;
}

export function wireImageParallax(root = document) {
  root.addEventListener("pointermove", (event) => {
    const art = event.target.closest(".product-art");
    if (!art) return;
    const rect = art.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    art.style.setProperty("--pointer-x", `${x}%`);
    art.style.setProperty("--pointer-y", `${y}%`);
  });

  root.addEventListener("pointerleave", (event) => {
    const art = event.target.closest?.(".product-art");
    if (!art) return;
    art.style.setProperty("--pointer-x", "50%");
    art.style.setProperty("--pointer-y", "50%");
  }, true);
}

export function wireCardReveal(root = document) {
  const cards = Array.from(root.querySelectorAll(".product-card"));
  if (cards.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  cards.forEach((card) => observer.observe(card));
}
