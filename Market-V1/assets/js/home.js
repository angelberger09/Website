import { loadProducts, renderProductCard, wireCardReveal, wireImageParallax } from "./render.js?v=2";

function collectionCards(products) {
  const groups = new Map();
  for (const product of products) {
    if (!groups.has(product.collectionSlug)) groups.set(product.collectionSlug, []);
    groups.get(product.collectionSlug).push(product);
  }

  return Array.from(groups.entries()).map(([slug, items]) => {
    const lead = items[0];
    return {
      ...lead,
      id: slug,
      title: lead.collectionTitle,
      price: items[0].price,
      rating: items.reduce((sum, item) => sum + item.rating, 0) / items.length,
      shipping: `${items.length} offerings`,
      badge: "Product page",
      shortDescription: `Browse five ${lead.collectionTitle.toLowerCase()} offerings.`,
      href: `./collection.html?line=${encodeURIComponent(slug)}`,
    };
  });
}

async function main() {
  const products = await loadProducts();
  const cards = collectionCards(products);
  document.querySelector("#feedMeta").textContent = `${cards.length} pages`;
  document.querySelector("#productFeed").innerHTML = cards
    .map((card, index) =>
      renderProductCard(card, card.href, {
        index,
        actionLabel: "Open page",
      }),
    )
    .join("");
  wireImageParallax(document);
  wireCardReveal(document);
}

main();
