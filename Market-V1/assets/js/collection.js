import { loadProducts, renderProductCard, wireCardReveal, wireImageParallax } from "./render.js?v=2";

function currentLine() {
  return new URL(window.location.href).searchParams.get("line") || "yarn";
}

async function main() {
  const products = await loadProducts();
  const line = currentLine();
  const offerings = products.filter((product) => product.collectionSlug === line).slice(0, 5);
  const title = offerings[0]?.collectionTitle || "Offerings";

  document.title = `${title} - Market-V1`;
  document.querySelector("#feedTitle").textContent = title;
  document.querySelector("#feedMeta").textContent = `${offerings.length} offerings`;
  document.querySelector("#productFeed").innerHTML = offerings
    .map((product, index) =>
      renderProductCard(product, `./product.html?id=${encodeURIComponent(product.id)}`, {
        index,
        actionLabel: "Open item",
      }),
    )
    .join("");

  wireImageParallax(document);
  wireCardReveal(document);
}

main();
