const studioPages = [
  {
    label: "01",
    title: "Blog home",
    menuTitle: "Blog Home",
    href: "https://angelberger09.github.io/Blog/",
    description: "The standalone public notes site."
  },
  {
    label: "02",
    title: "Posts index",
    menuTitle: "Posts Index",
    href: "https://angelberger09.github.io/Blog/posts/",
    description: "A readable archive of published entries."
  },
  {
    label: "03",
    title: "JSON feed",
    menuTitle: "JSON Feed",
    href: "https://angelberger09.github.io/Blog/posts.json",
    description: "Structured post data for the main site."
  },
  {
    label: "04",
    title: "Example post",
    menuTitle: "Example Post",
    href: "https://angelberger09.github.io/Blog/posts/learning-to-think-like-a-developer/",
    description: "One complete entry in the public notes format."
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
            <p className="eyebrow">Studio pages</p>
            <h1 id="studio-pages-title">Four quiet doors for now.</h1>
            <p>
              Read the notes, browse the archive, inspect the feed, or open a sample
              post while the fuller studio site takes shape.
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
