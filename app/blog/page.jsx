import NotesPageClient from "../notes/NotesPageClient";

export const metadata = {
  title: "Blog · Soft Strange Studio",
  description: "Compatibility route for public notes in the Soft Strange Studio website."
};

export default function BlogPage() {
  return (
    <>
      <main className="site-shell page-layout notes-room-page notes-blog-path-page" aria-label="Blog path note">
        <section className="notes-blog-path-bridge" aria-labelledby="blog-path-title">
          <div className="notes-blog-path-bridge__copy">
            <p className="eyebrow">Older public path</p>
            <h1 id="blog-path-title">Blog opens the same writing shelf.</h1>
            <p>
              This doorway keeps older Blog links useful while guiding visitors into the softer Notes room.
              The writing is the same public shelf; this note simply tells people which door they used.
            </p>
          </div>
          <div className="notes-blog-path-bridge__slips" aria-label="Blog path notes">
            <span>same notes</span>
            <span>keeps old links</span>
            <span>studio reader</span>
          </div>
        </section>
      </main>
      <NotesPageClient routeBase="/Website/blog" routeLabel="Blog path" />
    </>
  );
}
