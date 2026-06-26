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

const footerRoomLoopCues = {
  About: "Map room",
  Notes: "Read shelf",
  Portfolio: "Work shelf",
  Store: "Open later"
};

const footerExitReceipts = [
  {
    label: "Start",
    title: "Studio map",
    note: "Begin with the public room shape.",
    visual: "front room"
  },
  {
    label: "Read",
    title: "Notes shelf",
    note: "Move into published writing next.",
    visual: "paper note"
  },
  {
    label: "Browse",
    title: "Archive path",
    note: "Continue through ready work and future pieces.",
    visual: "next shelf"
  }
];

const footerRoomLoop = siteNavPages.map((page) => ({
  href: page.href,
  title: page.title,
  eyebrow: page.eyebrow,
  cue: footerRoomLoopCues[page.title] || "Studio path"
}));

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
      <span className="floating-header__edge floating-header__edge--left" aria-hidden="true" />
      <span className="floating-header__edge floating-header__edge--right" aria-hidden="true" />
      <span className="floating-header__lower-fiber" aria-hidden="true" />
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
        <span className="studio-footer__mark-photo" aria-hidden="true">
          <b>SSS</b>
          <em>public rooms</em>
        </span>
        <span className="studio-footer__mark-copy">
          <p>Soft Strange Studio</p>
          <small>Public rooms, gently connected.</small>
        </span>
      </div>
      <div className="studio-footer__exit-receipts" aria-label="Footer exit receipts">
        {footerExitReceipts.map((receipt) => (
          <span className="studio-footer__exit-receipt" key={receipt.label}>
            <span className="studio-footer__exit-receipt-photo" aria-hidden="true">
              <b>{receipt.visual}</b>
              <em>{receipt.label}</em>
            </span>
            <span className="studio-footer__exit-receipt-copy">
              <small>{receipt.label}</small>
              <b>{receipt.title}</b>
              <em>{receipt.note}</em>
            </span>
          </span>
        ))}
      </div>
      <FooterNav />
      <div className="studio-footer__room-loop" aria-label="Studio room loop">
        <span className="studio-footer__room-loop-label">Room loop</span>
        <div className="studio-footer__room-loop-track">
          {footerRoomLoop.map((room) => (
            <a className="studio-footer__room-loop-slip" href={room.href} key={room.href}>
              <span className="studio-footer__room-loop-photo" aria-hidden="true">
                <b>{room.cue}</b>
                <em>{room.title}</em>
              </span>
              <span className="studio-footer__room-loop-copy">
                <b>{room.title}</b>
                <small>{room.eyebrow}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }) {
  const visual = getPageIntroVisual(title, eyebrow);

  const roomShelf = [
    { label: "Open", value: visual.label, visual: "door" },
    { label: "Read", value: visual.title, visual: "page" },
    { label: "Trust", value: visual.status, visual: "source" },
    { label: "Continue", value: visual.path, visual: "path" }
  ];

  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title" className="page-hero__subtitle">
          {title}
        </h1>
        <div className="page-hero__text">{children}</div>
        <div className="page-hero__room-shelf" aria-label="Room path">
          {roomShelf.map((step) => (
            <span key={`${step.label}-${step.value}`}>
              <b className="page-hero__room-shelf-photo" aria-hidden="true">{step.visual}</b>
              <span className="page-hero__room-shelf-copy">
                <small>{step.label}</small>
                {step.value}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="page-hero__stack" aria-hidden="false">
        <span className="hero-polaroid hero-polaroid--back" aria-hidden="true" />
        <div className="page-hero__photo-card" aria-hidden="true">
          <span>{visual.label}</span>
          <strong>{visual.title}</strong>
          <small>{visual.note}</small>
          <span className="page-hero__photo-labels">
            <em>{visual.path}</em>
            <em>{visual.cue}</em>
          </span>
        </div>
        <span className="hero-polaroid hero-polaroid--frame" aria-hidden="true" />
        <aside className="page-hero__room-key" aria-label={`${visual.label} room key`}>
          <span className="page-hero__room-key-photo" aria-hidden="true">
            <b>{visual.label}</b>
            <em>{visual.path}</em>
          </span>
          <span>{visual.label} room key</span>
          <strong>{visual.status}</strong>
          <small>{visual.note}</small>
        </aside>
      </div>
    </section>
  );
}

export function DetailCard({ eyebrow, title, children, status }) {
  const faceLabel = status || eyebrow;
  const faceCaption = status && eyebrow ? eyebrow : title;

  return (
    <article className="detail-card">
      {faceLabel && (
        <span className="detail-card__paper-face" aria-hidden="true">
          <b>{faceLabel}</b>
          <em>{faceCaption}</em>
        </span>
      )}
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div>{children}</div>
      {status && <span className="status-pill">{status}</span>}
    </article>
  );
}
