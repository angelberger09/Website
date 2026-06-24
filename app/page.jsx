const studioPages = [
  {
    label: "01",
    title: "Studio notes",
    menuTitle: "Notes",
    href: "./blog/",
    description: "Read public notes inside the main Website shell."
  },
  {
    label: "02",
    title: "Sample note",
    menuTitle: "Sample",
    href: "./blog/post/?slug=learning-to-think-like-a-developer",
    description: "Open one note as a full reader experience."
  },
  {
    label: "03",
    title: "Notes source",
    menuTitle: "Source",
    href: "./blog/",
    description: "The Blog repo stays as the public source; this site renders the reader."
  },
  {
    label: "04",
    title: "Home base",
    menuTitle: "Home",
    href: "./",
    description: "The Website repo owns the visible route, layout, and studio feel."
  }
];

export default function HomePage() {
  return (
    <>
      <header className="floating-header" aria-label="Site header">
        <a className="identity-link" href="#top" aria-label="Back to top">
          Angel Berger
        </a>

        <div className="folder-menu" aria-label="Studio pages">
          <nav className="folder-panel" aria-label="Studio pages">
            {studioPages.map((page) => (
              <a href={page.href} key={page.href}>
                <span>{page.menuTitle}</span>
                <small>{page.label}</small>
              </a>
            ))}
          </nav>
          <span className="pages-chip" aria-hidden="true">
            <span className="folder-mark">▰</span>
            <span>Pages</span>
          </span>
        </div>
      </header>

      <div className="atmosphere-layer" aria-hidden="true">
        <span className="atmosphere-layer__grain" />
        <span className="atmosphere-layer__dust" />
        <span className="atmosphere-layer__scratches" />
        <span className="atmosphere-layer__gloss" />
      </div>

      <main id="top" className="home-page">
        <section className="scroll-title" aria-label="Welcome to Soft Strange Studio">
          <div className="title-lockup">
            <p className="title-kicker">Soft Strange Studio</p>
            <ul className="title-list" aria-label="Welcome to Soft Strange Studio">
              <li><span className="title-line title-line--welcome">Welcome</span></li>
              <li><span className="title-line title-line--to">To</span></li>
              <li><span className="title-line title-line--studio">Soft Strange Studio</span></li>
            </ul>
            <p className="title-note">Angel Berger’s minimal public studio home.</p>
          </div>
        </section>

        <section className="studio-pages" aria-labelledby="studio-pages-title">
          <div className="section-intro">
            <p className="eyebrow">Website-owned routes</p>
            <h1 id="studio-pages-title">The main Website holds the viewer.</h1>
            <p>
              Visitors read notes at the Website blog route. The separate Blog repo stays
              as the public JSON and Markdown source.
            </p>
          </div>

          <div className="page-grid">
            {studioPages.map((page) => (
              <a className="page-card" href={page.href} key={page.href}>
                <span className="page-card__label">{page.label}</span>
                <h2>{page.title}</h2>
                <p>{page.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
