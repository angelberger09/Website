export const portfolioFeedFields = [
  {
    label: "slug",
    description: "Stable public identifier for the project record and any future Website route."
  },
  {
    label: "title",
    description: "Human-facing project name that can stand on a Portfolio card without internal shorthand."
  },
  {
    label: "status",
    description: "A calm public state such as active, preparing, archived, or held offstage."
  },
  {
    label: "summary",
    description: "One short visitor-facing paragraph that explains the work without exposing private process."
  },
  {
    label: "role",
    description: "What kind of studio contribution the record shows: system, visual direction, writing, creature work, or product-adjacent archive."
  },
  {
    label: "preview",
    description: "Optional public image, route, or asset path that is already safe to show."
  },
  {
    label: "source",
    description: "Optional public source link for deeper context, never a private draft or raw planning file."
  }
];

export const portfolioFeedRules = [
  "Only publish records with a public-safe title, status, and summary.",
  "Do not expose raw drafts, private notes, unfinished sketches, or vulnerable process context.",
  "Mark records as preparing when they need public assets, source links, or a fuller case-study frame.",
  "Keep Website copy human-facing even when the future Portfolio repo provides structured data."
];

export const portfolioRecordStates = [
  {
    label: "Card-ready",
    description: "The work can appear as a public Portfolio card with a clear summary and honest status."
  },
  {
    label: "Case-study ready",
    description: "The work has enough public images, links, and context to support a deeper route later."
  },
  {
    label: "Preparing",
    description: "The signal is real, but it still needs public-safe framing before becoming a visible record."
  },
  {
    label: "Offstage",
    description: "The material should stay out of the public archive until it is distilled or finished."
  }
];
