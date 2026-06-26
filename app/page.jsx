import cardStyles from "./hero-polaroid-card-pass.module.css";
import { pageContinuity } from "./page-continuity";
import { NextStepBand } from "./next-step-band";
import { homepageRoomMarkers } from "./homepage-room-markers";
import { homepageCards, homepageHighlights, homepageStudioChecks, studioPillars } from "./site-data";

const homepageCheckFrames = [
  {
    label: "Paper leads",
    detail: "material first"
  },
  {
    label: "Human words",
    detail: "warm public copy"
  },
  {
    label: "Honest growth",
    detail: "no fake shelves"
  }
];

const homepagePathSteps = [
  {
    href: "#studio-front-room",
    label: "01",
    title: "Front room",
    detail: "enter softly"
  },
  {
    href: "#studio-room-status",
    label: "02",
    title: "Current rooms",
    detail: "see what is ready"
  },
  {
    href: "#studio-room-doors",
    label: "03",
    title: "Studio rooms",
    detail: "choose a door"
  },
  {
    href: "#studio-shape",
    label: "04",
    title: "Studio shape",
    detail: "read the making rules"
  },
  {
    href: "#studio-house-rules",
    label: "05",
    title: "House rules",
    detail: "keep the promise"
  },
  {
    href: "#studio-next-path",
    label: "06",
    title: "Next path",
    detail: "continue gently"
  }
];

export default function HomePage() {
  const heroCardClassName = ["hero-polaroid", "hero-polaroid--frame", cardStyles.card].join(" ");

  return (
    <main id="top" className="home-page">
      <section className="scroll-title" aria-label="Welcome to Soft Strange Studio">
        <div className="title-lockup">
          <aside className={heroCardClassName} aria-label="Studio card preview">
            <span className={cardStyles.label}>Open rooms</span>
            <strong className={cardStyles.title}>Notes, archive, store</strong>
            <span className={cardStyles.note}>Four calm doors, already framed for visitors.</span>
          </aside>
          <p className="title-kicker">Soft Strange Studio</p>
          <ul className="title-list" aria-label="Welcome to Soft Strange Studio">
            <li><span className="title-line title-line--welcome">Welcome</span></li>
            <li><span className="title-line title-line--to">To</span></li>
            <li><span className="title-line title-line--studio">Soft Strange Studio</span></li>
          </ul>
          <p className="title-note">A soft public studio for notes, art, creature work, and gentle project paths.</p>
          <nav className="home-hero-route-strip home-hero-contact-sheet" aria-label="Start with a studio room">
            <span className="home-hero-route-strip__label">Start here</span>
            <div className="home-hero-route-strip__links" role="list">
              {homepageCards.map((page) => (
                <a className="home-hero-route-slip" href={page.href} key={page.href} role="listitem">
                  <span className="home-hero-route-slip__preview" aria-hidden="true">
                    <span>{page.eyebrow}</span>
                    <strong>{page.title}</strong>
                  </span>
                  <span className="home-hero-route-slip__copy">
                    <span>{page.eyebrow}</span>
                    <strong>{page.title}</strong>
                    <small>Open room</small>
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <nav className="home-path-map" aria-label="Homepage reading path">
        <span className="home-path-map__label">Read this page</span>
        <div className="home-path-map__trail" role="list">
          {homepagePathSteps.map((step) => (
            <a className="home-path-map__step" href={step.href} key={step.href} role="listitem">
              <span className="home-path-map__number">{step.label}</span>
              <span className="home-path-map__copy">
                <strong>{step.title}</strong>
                <small>{step.detail}</small>
              </span>
            </a>
          ))}
        </div>
      </nav>

      <section id="studio-front-room" className="studio-pages studio-pages--intro home-paper-field" aria-labelledby="studio-front-room-title">
        <span className="home-docket-step" aria-hidden="true">01 / Front room</span>
        <div className="split-feature home-paper-field__intro">
          <div>
            <p className="eyebrow">Front room</p>
            <h1 id="studio-front-room-title">A calm place to enter the work.</h1>
          </div>
          <p>
            Soft Strange Studio now has a filled public shape: a welcome, a clear
            map, a notes reader, a first archive, and a store doorway that is honest
            about what is still being prepared.
          </p>
        </div>

        <div className="home-note-board home-note-board--highlights" aria-label="Homepage highlights">
          {homepageHighlights.map((highlight) => (
            <article className="home-note-piece home-note-piece--with-visual" key={highlight.title}>
              <span className="home-note-piece__pin" aria-hidden="true" />
              <span className="home-note-piece__visual" aria-hidden="true">
                <span>{highlight.eyebrow}</span>
                <strong>{highlight.title}</strong>
              </span>
              <span className="home-note-piece__eyebrow">{highlight.eyebrow}</span>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
              <span className="home-note-piece__cue">Studio note</span>
            </article>
          ))}
        </div>
      </section>

      <section id="studio-room-status" className="studio-pages studio-pages--compact home-room-status" aria-labelledby="studio-room-status-title">
        <span className="home-docket-step" aria-hidden="true">02 / Current rooms</span>
        <div className="section-intro home-section-scrap">
          <p className="eyebrow">Current rooms</p>
          <h1 id="studio-room-status-title">What is ready now, and what is still preparing.</h1>
          <p>
            The front page now gives a quick status read before visitors choose a door,
            so the filled site feels honest without flattening every room into the same promise.
          </p>
        </div>

        <div className="home-room-board" aria-label="Current room states">
          {homepageRoomMarkers.map((room) => (
            <article className="home-room-slip home-room-slip--with-photo" key={room.title}>
              <span className="home-room-slip__image" aria-hidden="true">
                <span>{room.eyebrow}</span>
                <strong>{room.title}</strong>
              </span>
              <span className="home-room-slip__status">{room.status}</span>
              <span className="home-room-slip__eyebrow">{room.eyebrow}</span>
              <h2>{room.title}</h2>
              <p>{room.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="studio-room-doors" className="studio-pages home-door-section" aria-labelledby="studio-pages-title">
        <span className="home-docket-step" aria-hidden="true">03 / Studio rooms</span>
        <div className="section-intro home-section-scrap">
          <p className="eyebrow">Studio rooms</p>
          <h1 id="studio-pages-title">The studio has real doors now.</h1>
          <p>
            Each main page is filled out as a calm public entry point. The deeper
            back rooms can keep growing quietly, while this Website keeps the
            visitor path warm, readable, and easy to follow.
          </p>
        </div>

        <div className="home-door-board" aria-label="Studio room doors">
          {homepageCards.map((page) => (
            <a className="home-door-card" href={page.href} key={page.href}>
              <span className="home-door-card__image" aria-hidden="true">
                <span>{page.eyebrow}</span>
                <strong>{page.title}</strong>
              </span>
              <span className="home-door-card__copy">
                <span className="home-door-card__label">{page.eyebrow}</span>
                <h2>{page.title}</h2>
                <p>{page.description}</p>
                <span className="home-door-card__cue">Enter {page.title}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="studio-shape" className="studio-pages studio-pages--compact home-paper-field home-paper-field--pillars" aria-labelledby="studio-shape-title">
        <span className="home-docket-step" aria-hidden="true">04 / Studio shape</span>
        <div className="section-intro home-section-scrap">
          <p className="eyebrow">Studio shape</p>
          <h1 id="studio-shape-title">Built to feel handmade and clear.</h1>
        </div>

        <div className="home-pillar-strip" aria-label="Studio shape principles">
          {studioPillars.map((pillar) => (
            <article className="home-pillar-note" key={pillar.title}>
              <span>{pillar.eyebrow}</span>
              <h2>{pillar.title}</h2>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="studio-house-rules" className="studio-pages studio-pages--compact home-studio-checks" aria-labelledby="studio-checks-title">
        <span className="home-docket-step" aria-hidden="true">05 / House rules</span>
        <div className="home-studio-checks__intro">
          <p className="eyebrow">House rules</p>
          <h1 id="studio-checks-title">What every room should keep close.</h1>
          <p>
            These small studio slips keep the public rooms grounded: paper should
            lead, the language should feel human, and unfinished work should stay
            honest without looking empty.
          </p>
        </div>

        <div className="home-check-rail" aria-label="Soft Strange Studio house rules">
          {homepageStudioChecks.map((check, index) => {
            const frame = homepageCheckFrames[index] ?? homepageCheckFrames[0];
            return (
              <article className="home-check-note home-check-note--with-photo" key={check.title}>
                <span className="home-check-note__photo" aria-hidden="true">
                  <b>{frame.label}</b>
                  <em>{frame.detail}</em>
                </span>
                <span className="home-check-note__eyebrow">{check.eyebrow}</span>
                <h2>{check.title}</h2>
                <p>{check.description}</p>
                <small>{check.note}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section id="studio-next-path" className="studio-pages studio-pages--compact" aria-label="Where to go next">
        <span className="home-docket-step" aria-hidden="true">06 / Next path</span>
        <NextStepBand {...pageContinuity.home} />
      </section>
    </main>
  );
}
