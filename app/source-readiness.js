export const blogFeedReadiness = [
  {
    title: "Public note list",
    eyebrow: "Writing shelf",
    description: "The public writing shelf should offer a clear list of notes this room can gather without making visitors think about the behind-the-scenes path.",
    details: ["public list", "visitor path", "no private drafts"]
  },
  {
    title: "Published notes",
    eyebrow: "Note shape",
    description: "Each visible note needs a readable title, date, category or series context, excerpt, and published state before it appears in the studio reader.",
    details: ["readable title", "date", "context", "published marker"]
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
    description: "Use the visitor-facing notes shelf before falling back to backup content."
  },
  {
    label: "Use backup files quietly",
    description: "Backup paths can protect the reader when publishing is delayed, but the public page should still explain the state in human language."
  },
  {
    label: "Keep future shelves staged",
    description: "Portfolio and Store should stay in readiness mode until their public shelves have real paths and safe records."
  }
];
