import { loadProducts, money, productImage, stars, wireImageParallax } from "./render.js?v=2";

function findProductId() {
  return new URL(window.location.href).searchParams.get("id");
}

async function main() {
  const products = await loadProducts();
  const product = products.find((entry) => entry.id === findProductId()) || products[0];

  const image = document.querySelector("#productPageImage");
  const title = document.querySelector("#productPageTitle");
  const price = document.querySelector("#productPagePrice");
  const rating = document.querySelector("#productPageRating");
  const shipping = document.querySelector("#productPageShipping");
  const description = document.querySelector("#productPageDescription");
  const highlights = document.querySelector("#productPageHighlights");
  const backLink = document.querySelector(".back-link");

  document.title = `${product.title} - Market-V1`;
  image.src = productImage(product);
  image.alt = product.title;
  title.textContent = product.title;
  price.textContent = money(product.price);
  rating.textContent = `${stars(product.rating)} ${product.rating.toFixed(1)}`;
  shipping.textContent = product.shipping;
  description.textContent = product.longDescription;
  highlights.innerHTML = product.highlights.map((point) => `<li>${point}</li>`).join("");
  backLink.href = `./collection.html?line=${encodeURIComponent(product.collectionSlug)}`;
  backLink.textContent = `Back to ${product.collectionTitle}`;
  wireImageParallax(document);
}

main();
