import NotesPageClient from "../notes/NotesPageClient";

export const metadata = {
  title: "Blog · Soft Strange Studio",
  description: "Compatibility route for public notes in the Soft Strange Studio website."
};

const blogPathNote = {
  eyebrow: "Older public path",
  title: "Blog opens the same writing shelf.",
  description:
    "This doorway keeps older Blog links useful while guiding visitors into the softer Notes room. The writing is the same public shelf; the room label simply tells people which door they used.",
  slips: ["same notes", "keeps old links", "studio reader"]
};

export default function BlogPage() {
  return (
    <NotesPageClient
      routeBase="/Website/blog"
      routeLabel="Blog path"
      pathNote={blogPathNote}
    />
  );
}
