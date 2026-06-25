import { siteNavPages } from "./site-data";

const pageIntroVisuals = {
  "Soft public studio": {
    label: "About",
    title: "Studio map",
    note: "Principles, pathways, and public-safe memory."
  },
  "Studio notes room": {
    label: "Notes",
    title: "Reader light",
    note: "Published writing gathered into one calm room."
  },
  "First public archive": {
    label: "Archive",
    title: "Work lanes",
    note: "Ready pieces, preparing records, offstage drafts."
  },
  "Future studio pieces": {
    label: "Store",
    title: "Availability path",
    note: "Prepared lanes before public shop links open."
  }
};

function getPageIntroVisual(title, eyebrow) {
  return pageIntroVisuals[title] || {
    label: eyebrow,
    title,
    note: "A route-specific studio card inside the paper frame."
  };
}

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
    <footer className="studio-footer studio-footer--paper" aria-label="Site footer">
      <div className="studio-footer__mark">
        <span className="studio-footer__pin" aria-hidden="true" />
        <p>Soft Strange Studio</p>
        <small>Public rooms, gently connected.</small>
      </div>
      <nav className="studio-footer__trail" aria-label="Footer pages">
        {siteNavPages.map((page) => (
          <a href={page.href} key={page.href}>
            {page.title}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }) {
  const visual = getPageIntroVisual(title, eyebrow);

  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title" className="page-hero__subtitle">
          {title}
        </h1>
        <div className="page-hero__text">{children}</div>
      </div>
      <div className="page-hero__stack" aria-hidden="true">
        <span className="hero-polaroid hero-polaroid--back" />
        <div className="page-hero__photo-card">
          <span>{visual.label}</span>
          <strong>{visual.title}</strong>
          <small>{visual.note}</small>
        </div>
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
