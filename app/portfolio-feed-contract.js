export const portfolioFeedFields = [
  {
    label: "public id",
    description: "Stable public identifier for the project record and any future studio route."
  },
  {
    label: "project name",
    description: "Human-facing project name that can stand on a Portfolio card without internal shorthand."
  },
  {
    label: "public state",
    description: "A calm public state such as active, preparing, archived, or held offstage."
  },
  {
    label: "short note",
    description: "One short visitor-facing paragraph that explains the work without exposing private process."
  },
  {
    label: "studio role",
    description: "What kind of studio contribution the record shows: system, visual direction, writing, creature work, or product-adjacent archive."
  },
  {
    label: "preview place",
    description: "Optional public image, route, or asset path that is already safe to show."
  },
  {
    label: "public path",
    description: "Optional public link for deeper context, never a private draft or raw planning file."
  }
];

export const portfolioFeedRules = [
  "Only publish records with a public-safe title, status, and summary.",
  "Do not expose raw drafts, private notes, unfinished sketches, or vulnerable process context.",
  "Mark records as preparing when they need public assets, public links, or a fuller case-study frame.",
  "Keep Website copy human-facing even when the future Portfolio shelf provides structured material."
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
