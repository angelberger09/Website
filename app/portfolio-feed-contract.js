export const portfolioFeedFields = [
  {
    label: "archive key",
    description: "A stable public handle for the project card and any future studio doorway."
  },
  {
    label: "public title",
    description: "The readable project name visitors see first, without internal shorthand."
  },
  {
    label: "public stage",
    description: "A calm state such as active, preparing, archived, or held offstage."
  },
  {
    label: "gallery note",
    description: "One short visitor-facing paragraph that explains the work without private process."
  },
  {
    label: "studio hand",
    description: "The kind of contribution shown: system, visual direction, writing, creature work, or adjacent archive."
  },
  {
    label: "preview surface",
    description: "Optional public image or route-relevant visual material that is already safe to show."
  },
  {
    label: "next doorway",
    description: "Optional public link for deeper context, never a private draft or planning shelf."
  }
];

export const portfolioFeedRules = [
  "Only bring forward pieces with a public-safe title, stage, and short note.",
  "Keep raw drafts, private notes, unfinished sketches, and vulnerable process offstage.",
  "Use preparing when a piece still needs public images, public links, or a fuller case-study frame.",
  "Keep visible copy human-facing even when the future archive shelf provides structured material."
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
