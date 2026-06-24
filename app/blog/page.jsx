import NotesPageClient from "../notes/NotesPageClient";

export const metadata = {
  title: "Blog · Soft Strange Studio",
  description: "Compatibility route for public notes in the Soft Strange Studio website."
};

export default function BlogPage() {
  return <NotesPageClient routeBase="/Website/blog" routeLabel="Blog route" />;
}
