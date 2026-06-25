import { siteNavPages } from "./site-data";

export function AtmosphereLayer() {
  return (
    <div className="atmosphere-layer" aria-hidden="true">
      <span className="atmosphere-layer__grain" />
      <span className="atmosphere-layer__dust" />
      <span className="atmosphere-layer__scratches" />
      <span className="atmosphere-layer__gloss" />
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="floating-header" aria-label="Site header">
      <a className="identity-link" href="/Website/" aria-label="Soft Strange Studio home">
        Angel Berger
      </a>

      <div className="folder-menu" aria-label="Studio pages">
        <nav className="folder-panel" aria-label="Studio pages">
          {siteNavPages.map((page) => (
            <a href={page.href} key={page.href}>
              <span>{page.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function StudioFooter() {
  return (
    <footer className="studio-footer" aria-label="Site footer">
      <p>Soft Strange Studio</p>
      <nav aria-label="Footer pages">
        {siteNavPages.map((page) => (
          <a href={page.href} key={page.href}>{page.title}</a>
        ))}
      </nav>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1
          id="page-title"
          style={{
            maxWidth: "12ch",
            fontSize: "clamp(2rem, 4.4vw, 3.6rem)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.045em",
            whiteSpace: "nowrap"
          }}
        >
          {title}
        </h1>
        <div className="page-hero__text">{children}</div>
      </div>
      <div className="page-hero__stack" aria-hidden="true">
        <span className="hero-polaroid hero-polaroid--back" />
        <span className="hero-polaroid hero-polaroid--frame" />
      </div>
    </section>
  );
}

export function DetailCard({ eyebrow, title, children, status }) {
  return (
    <article className="detail-card">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div>{children}</div>
      {status && <span className="status-pill">{status}</span>}
    </article>
  );
}
