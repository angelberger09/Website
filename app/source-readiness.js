export const blogFeedReadiness = [
  {
    title: "Public note list",
    eyebrow: "Writing source",
    description: "The public writing source should offer a clear list of notes the Website can gather without making visitors think about the behind-the-scenes path.",
    details: ["post list", "public path", "no private drafts"]
  },
  {
    title: "Published notes",
    eyebrow: "Note shape",
    description: "Each visible note needs a slug, title, date, category or series context, excerpt, and published state before it appears in the studio reader.",
    details: ["slug", "title", "date", "published state"]
  },
  {
    title: "Readable note files",
    eyebrow: "Single note",
    description: "Individual notes should keep a public profile and readable body available through the main public path and a quiet backup path.",
    details: ["public profile", "note body", "backup path"]
  }
];

export const sourceFallbackRules = [
  {
    label: "Try the public notes path first",
    description: "Use the visitor-facing notes source before falling back to backup content."
  },
  {
    label: "Use backup files quietly",
    description: "Backup paths can protect the reader when publishing is delayed, but the public page should still explain the state in human language."
  },
  {
    label: "Keep future sources staged",
    description: "Portfolio and Store should stay in readiness mode until their public sources have real paths and safe records."
  }
];
