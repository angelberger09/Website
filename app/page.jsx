const studioPages = [
  {
    label: "01",
    title: "Still Here Notes",
    menuTitle: "Blog Viewer",
    href: "./blog/",
    description: "Read Blog repo posts inside the main Website shell."
  },
  {
    label: "02",
    title: "Example post reader",
    menuTitle: "Post Reader",
    href: "./blog/post/?slug=learning-to-think-like-a-developer",
    description: "Open one Blog profile and Markdown file in the Website reader."
  },
  {
    label: "03",
    title: "Blog data source",
    menuTitle: "Data Source",
    href: "./blog/",
    description: "The Blog repo owns the profiles and Markdown; the Website renders them."
  },
  {
    label: "04",
    title: "Main Website shell",
    menuTitle: "Website Shell",
    href: "./",
    description: "The Website repo owns the visible route, layout, and reader UI."
  }
];

export default function HomePage() {
  return (
    <>
      <header className="floating-header" aria-label="Site header">
        <a className="identity-link" href="#top" aria-label="Back to top">
          Angel Berger
        </a>

        <details className="folder-menu">
          <summary aria-label="Open pages menu">
            <span className="folder-mark" aria-hidden="true">▰</span>
            <span>Pages</span>
          </summary>
          <nav className="folder-panel" aria-label="Studio pages">
            {studioPages.map((page) => (
              <a href={page.href} key={page.href}>
                <span>{page.menuTitle}</span>
                <small>{page.label}</small>
              </a>
            ))}
          </nav>
        </details>
      </header>

      <main id="top" className="home-page">
        <section className="scroll-title" aria-label="Welcome to Soft Strange Studio">
          <div className="title-panel">
            <p>Welcome</p>
          </div>
          <div className="title-panel title-panel--small">
            <p>To</p>
          </div>
          <div className="title-panel title-panel--final">
            <p>Soft Strange Studio</p>
            <span>Angel Berger’s minimal public studio home.</span>
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
