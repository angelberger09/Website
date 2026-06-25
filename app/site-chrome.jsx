import { siteNavPages } from "./site-data";
import { FooterNav } from "./site-footer-nav";
import { HeaderNav } from "./site-header-nav";

const pageIntroVisuals = {
  "Soft public studio": {
    label: "About",
    title: "Studio map",
    note: "Principles, pathways, and public-safe memory.",
    status: "Open room",
    path: "Start here",
    cue: "Map first"
  },
  "Studio notes room": {
    label: "Notes",
    title: "Reader light",
    note: "Published writing gathered into one calm room.",
    status: "Reading shelf",
    path: "Newest first",
    cue: "Read gently"
  },
  "First public archive": {
    label: "Archive",
    title: "Work lanes",
    note: "Ready pieces, preparing records, offstage drafts.",
    status: "Public pieces",
    path: "Browse softly",
    cue: "No fake work"
  },
  "Future studio pieces": {
    label: "Store",
    title: "Availability path",
    note: "Prepared lanes before public shop links open.",
    status: "Preparing",
    path: "No fake stock",
    cue: "Wait for links"
  }
};

function getPageIntroVisual(title, eyebrow) {
  return pageIntroVisuals[title] || {
    label: eyebrow,
    title,
    note: "A route-specific studio card inside the paper frame.",
    status: "Studio room",
    path: "Keep going",
    cue: "Public path"
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
        <HeaderNav />
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
      <FooterNav />
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }) {
  const visual = getPageIntroVisual(title, eyebrow);

  const roomTags = [
    { label: "Room", value: visual.label },
    { label: "State", value: visual.status },
    { label: "Cue", value: visual.cue || visual.path }
  ];

  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title" className="page-hero__subtitle">
          {title}
        </h1>
        <div className="page-hero__room-tags" aria-label="Room status">
          {roomTags.map((tag) => (
            <span key={tag.label}>
              <small>{tag.label}</small>
              {tag.value}
            </span>
          ))}
        </div>
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
