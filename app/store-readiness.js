export const storeReadinessChecklist = [
  {
    title: "Product story",
    eyebrow: "Before available",
    description: "Each future listing needs a public name, a plain-language description, and a clear reason it belongs in Soft Strange Studio before it moves out of preparing.",
    details: ["Public-safe name", "Human description", "Studio fit"]
  },
  {
    title: "Preview material",
    eyebrow: "Show the piece",
    description: "Future products should have an image, sample page, mockup, or other honest preview so visitors can understand the piece before following a shop link.",
    details: ["Image or sample", "Accurate preview", "No placeholder art"]
  },
  {
    title: "Delivery clarity",
    eyebrow: "Trust path",
    description: "Digital and physical goods should name format, size, delivery method, availability, and any outside storefront path before the Website points visitors onward.",
    details: ["Format or size", "Delivery note", "Availability state"]
  }
];

export const storeAvailabilityStates = [
  {
    label: "Preparing",
    description: "The lane has a public purpose, but listings, previews, or delivery details are not ready yet."
  },
  {
    label: "Previewing",
    description: "A product can be shown with honest samples or context, but the buying path is still being prepared."
  },
  {
    label: "Available",
    description: "The listing has a public source, preview material, delivery clarity, and a calm link out from the Website."
  }
];

export const storeFeedFields = [
  {
    label: "slug",
    description: "Stable public identifier used by Website routes and links."
  },
  {
    label: "title",
    description: "Human-facing product or product-lane name."
  },
  {
    label: "status",
    description: "One of preparing, previewing, or available; never imply a buying path before it exists."
  },
  {
    label: "summary",
    description: "Short public-safe description that explains what the piece is and why it belongs here."
  },
  {
    label: "preview",
    description: "Optional public image, sample, mockup, or page link that honestly shows the piece."
  },
  {
    label: "delivery",
    description: "Format, size, delivery method, or outside storefront note when the listing becomes available."
  }
];

export const storeFeedRules = [
  "Keep unavailable items in preparing or previewing until a real public listing exists.",
  "Use public-safe summaries and previews only; private drafts and raw product planning stay offstage.",
  "Let the Website translate Store repo data into calm studio cards instead of exposing raw feed language."
];
