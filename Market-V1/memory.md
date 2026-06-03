# Market-V1 Memory

## Purpose

`Market-V1` is the standalone storefront workspace for this repo. It is a static product-line shell for handmade and digital offerings with an original visual system, not a copy of any existing marketplace UI.

## Architecture

- `index.html` is the product-line index.
- `collection.html` is the reusable collection page for one product line with five offerings.
- `product.html` is the reusable detail page for one offering.
- `assets/js/render.js` owns shared catalog loading, card rendering, money/rating formatting, reveal state, and image parallax.
- `assets/js/home.js`, `assets/js/collection.js`, and `assets/js/product.js` bind the shared renderer to each page.
- `assets/css/main.css` owns the inset-polaroid shell, the responsive gallery contract, product imagery, and motion rules.
- `data/products.json` is a flat catalog. Each offering must include `collectionSlug` and `collectionTitle`.

## Conventions

- Keep the first screen focused on product-line navigation and offering cards only.
- Avoid top action rails, category rails, search bars, and filter blocks unless explicitly requested.
- Product cards should link to their own offering detail page.
- Collection pages should show exactly five offerings.
- Use inset polaroid styling: square-radius outer frames, inset image windows, fixed aspect ratios, and subtle hover/reveal animation.
- Browsing grids should use CSS Grid `auto-fit` with an ideal card width and centered rows so the page shows only the number of columns that truly fit the available window.
- The detail page should borrow the same visual language but stay single-column and non-grid.
