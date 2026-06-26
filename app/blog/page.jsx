import NotesPageClient from "../notes/NotesPageClient";

export const metadata = {
  title: "Blog · Soft Strange Studio",
  description: "Compatibility route for public notes in the Soft Strange Studio website."
};

const blogPathCards = [
  {
    label: "same notes",
    title: "One writing shelf",
    description: "The older Blog doorway opens the same public notes that now live in the softer Notes room.",
    visual: "notes"
  },
  {
    label: "keeps old links",
    title: "Old paths stay kind",
    description: "Existing public links still land somewhere clear instead of dropping visitors into a dead end.",
    visual: "path"
  },
  {
    label: "studio reader",
    title: "Read inside the room",
    description: "The page keeps the writing wrapped in the shared studio shell, route intro, and next-step trail.",
    visual: "room"
  }
];

const blogPathSlips = ["older door", "same shelf", "soft landing"];

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
            <div className="notes-blog-path-bridge__slips" aria-label="Blog path reminders">
              {blogPathSlips.map((slip) => (
                <span key={slip}>{slip}</span>
              ))}
            </div>
          </div>
          <div className="notes-blog-path-bridge__photo" aria-hidden="true">
            <span>Blog</span>
            <strong>same shelf</strong>
          </div>
          <div className="notes-blog-path-bridge__cards" aria-label="Blog path notes">
            {blogPathCards.map((card) => (
              <article className="notes-blog-path-card" key={card.label}>
                <span className="notes-blog-path-card__image" aria-hidden="true">
                  <span>{card.visual}</span>
                </span>
                <span className="notes-blog-path-card__copy">
                  <small>{card.label}</small>
                  <strong>{card.title}</strong>
                  <span>{card.description}</span>
                </span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <NotesPageClient routeBase="/Website/blog" routeLabel="Blog path" />
    </>
  );
}
