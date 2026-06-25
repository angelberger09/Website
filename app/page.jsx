import cardStyles from "./hero-polaroid-card-pass.module.css";
import { pageContinuity } from "./page-continuity";
import { NextStepBand } from "./next-step-band";
import { homepageRoomMarkers } from "./homepage-room-markers";
import { homepageCards, homepageHighlights, studioPillars } from "./site-data";
import { DetailCard } from "./site-chrome";

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
        </div>
      </section>

      <section className="studio-pages studio-pages--intro" aria-labelledby="studio-front-room-title">
        <div className="split-feature">
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

        <div className="content-grid content-grid--small">
          {homepageHighlights.map((highlight) => (
            <DetailCard eyebrow={highlight.eyebrow} title={highlight.title} key={highlight.title}>
              <p>{highlight.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="studio-pages studio-pages--compact" aria-labelledby="studio-room-status-title">
        <div className="section-intro">
          <p className="eyebrow">Current rooms</p>
          <h1 id="studio-room-status-title">What is ready now, and what is still preparing.</h1>
          <p>
            The front page now gives a quick status read before visitors choose a door,
            so the filled site feels honest without flattening every page into the same promise.
          </p>
        </div>

        <div className="content-grid content-grid--small">
          {homepageRoomMarkers.map((room) => (
            <DetailCard eyebrow={room.eyebrow} title={room.title} status={room.status} key={room.title}>
              <p>{room.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="studio-pages" aria-labelledby="studio-pages-title">
        <div className="section-intro">
          <p className="eyebrow">Website-owned routes</p>
          <h1 id="studio-pages-title">The studio has real doors now.</h1>
          <p>
            Each main page is filled out as a calm public entry point. The connected
            repos can still provide content later, but the Website owns the visitor
            experience, the layout, and the studio feeling.
          </p>
        </div>

        <div className="page-grid">
          {homepageCards.map((page) => (
            <a className="page-card" href={page.href} key={page.href}>
              <span className="page-card__label">{page.eyebrow}</span>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
              <span className="page-card__cue">Enter {page.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="studio-pages studio-pages--compact" aria-labelledby="studio-shape-title">
        <div className="section-intro">
          <p className="eyebrow">Studio shape</p>
          <h1 id="studio-shape-title">Built to feel authored before technical.</h1>
        </div>

        <div className="content-grid content-grid--small">
          {studioPillars.map((pillar) => (
            <DetailCard eyebrow={pillar.eyebrow} title={pillar.title} key={pillar.title}>
              <p>{pillar.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="studio-pages studio-pages--compact" aria-label="Where to go next">
        <NextStepBand {...pageContinuity.home} />
      </section>
    </main>
  );
}
