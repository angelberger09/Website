import cardStyles from "./hero-polaroid-card-pass.module.css";
import { pageContinuity } from "./page-continuity";
import { NextStepBand } from "./next-step-band";
import { homepageRoomMarkers } from "./homepage-room-markers";
import { homepageCards, homepageHighlights, homepageStudioChecks, studioPillars } from "./site-data";

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
          <nav className="home-hero-route-strip" aria-label="Start with a studio room">
            <span className="home-hero-route-strip__label">Start here</span>
            <div className="home-hero-route-strip__links">
              {homepageCards.map((page) => (
                <a className="home-hero-route-slip" href={page.href} key={page.href}>
                  <span>{page.eyebrow}</span>
                  <strong>{page.title}</strong>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="studio-pages studio-pages--intro home-paper-field" aria-labelledby="studio-front-room-title">
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
          {homepageHighlights.map((highlight, index) => (
            <article className="home-note-piece" key={highlight.title}>
              <span className="home-note-piece__pin" aria-hidden="true" />
              <span className="home-note-piece__eyebrow">{highlight.eyebrow}</span>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
              <span className="home-note-piece__count">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-pages studio-pages--compact home-room-status" aria-labelledby="studio-room-status-title">
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
            <article className="home-room-slip" key={room.title}>
              <span className="home-room-slip__status">{room.status}</span>
              <span className="home-room-slip__eyebrow">{room.eyebrow}</span>
              <h2>{room.title}</h2>
              <p>{room.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-pages home-door-section" aria-labelledby="studio-pages-title">
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

      <section className="studio-pages studio-pages--compact home-paper-field home-paper-field--pillars" aria-labelledby="studio-shape-title">
        <div className="section-intro home-section-scrap">
          <p className="eyebrow">Studio shape</p>
          <h1 id="studio-shape-title">Built to feel authored before technical.</h1>
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

      <section className="studio-pages studio-pages--compact home-studio-checks" aria-labelledby="studio-checks-title">
        <div className="home-studio-checks__intro">
          <p className="eyebrow">Studio checks</p>
          <h1 id="studio-checks-title">What every room should keep doing.</h1>
          <p>
            These small notes make the current review targets visible on the page:
            paper should lead, copy should stay human, and unfinished work should
            stay honest without looking empty.
          </p>
        </div>

        <div className="home-check-rail" aria-label="Current studio quality checks">
          {homepageStudioChecks.map((check) => (
            <article className="home-check-note" key={check.title}>
              <span className="home-check-note__eyebrow">{check.eyebrow}</span>
              <h2>{check.title}</h2>
              <p>{check.description}</p>
              <small>{check.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-pages studio-pages--compact" aria-label="Where to go next">
        <NextStepBand {...pageContinuity.home} />
      </section>
    </main>
  );
}
