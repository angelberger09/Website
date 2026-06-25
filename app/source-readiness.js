export const blogFeedReadiness = [
  {
    title: "Public index",
    eyebrow: "Feed contract",
    description: "The Blog feed should expose a posts array that the Website can read without sending visitors to a raw endpoint.",
    details: ["posts array", "public URL", "no private drafts"]
  },
  {
    title: "Published records",
    eyebrow: "Post contract",
    description: "Each visible note needs a slug, title, date, category or series context, excerpt, and published status before it appears in the Website reader.",
    details: ["slug", "title", "date", "published status"]
  },
  {
    title: "Reader files",
    eyebrow: "Single note",
    description: "Individual notes should keep a public profile file and Markdown body available through both the Pages path and raw fallback path.",
    details: ["profile.json", "content.md", "fallback path"]
  }
];

export const sourceFallbackRules = [
  {
    label: "Try the public Pages feed first",
    description: "Use the visitor-facing Blog Pages JSON feed before falling back to raw GitHub content."
  },
  {
    label: "Use raw files only as a quiet fallback",
    description: "Fallback URLs can protect the reader when Pages is delayed, but the public page should still explain the state in human language."
  },
  {
    label: "Keep future feeds staged",
    description: "Portfolio and Store should stay in readiness mode until their public feeds have real paths and safe records."
  }
];
