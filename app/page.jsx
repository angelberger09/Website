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
    label: "Enter",
    chapter: "Start here",
    roomKey: "front desk",
    title: "Front room",
    detail: "enter softly"
  },
  {
    href: "#studio-room-status",
    label: "Ready",
    chapter: "Room check",
    roomKey: "public now",
    title: "Current rooms",
    detail: "see what is ready"
  },
  {
    href: "#studio-room-doors",
    label: "Doors",
    chapter: "Choose door",
    roomKey: "four rooms",
    title: "Studio rooms",
    detail: "choose a door"
  },
  {
    href: "#studio-shape",
    label: "Shape",
    chapter: "Making rules",
    roomKey: "paper path",
    title: "Studio shape",
    detail: "read the making rules"
  },
  {
    href: "#studio-house-rules",
    label: "Rules",
    chapter: "Keep close",
    roomKey: "studio promise",
    title: "House rules",
    detail: "keep the promise"
  },
  {
    href: "#studio-next-path",
    label: "Next",
    chapter: "Leave gently",
    roomKey: "next room",
    title: "Next path",
    detail: "continue gently"
  }
];

const homepageChapterNotes = {
  frontRoom: "Start with the whole room before choosing a door.",
  roomStatus: "Check what is public now and what is warming up.",
  roomDoors: "Move from the front room into one clear destination.",
  studioShape: "Read the making rules behind the paper path.",
  houseRules: "Keep the public rooms soft, useful, and honest.",
  nextPath: "Leave by a neighboring room instead of a dead end."
};

export default function HomePage() {
  return (
    <main id="top" className="home-page">
      <section className="home-front-door" aria-labelledby="home-entry-title">
        <div className="home-front-door__board">
          <div className="home-front-door__copy">
            <p className="home-front-door__eyebrow">Soft Strange Studio</p>
            <h1 id="home-entry-title">Soft Strange Studio</h1>
            <p className="home-front-door__dek">
              A calm public room for notes, work, and small shop paths. Start here,
              then choose the room that fits what you want to read or see next.
            </p>
            <div className="home-front-door__actions" aria-label="Homepage first actions">
              <a className="home-front-door__action" href="#studio-front-room">Read the front room</a>
              <a className="home-front-door__action" href="#studio-room-doors">Choose a room</a>
            </div>
          </div>

          <nav className="home-front-door__rooms" aria-label="Open studio rooms">
            <span className="home-front-door__rooms-label">Open rooms</span>
            <div className="home-front-door__routes" role="list">
              {homepageCards.map((page) => (
                <a className="home-front-door__route" href={page.href} key={page.href} role="listitem">
                  <span>
                    <strong>{page.title}</strong>
                    <span>{page.eyebrow}</span>
                  </span>
                  <small>{page.roomCue}</small>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <nav className="home-path-map" aria-label="Homepage reading path">
        <span className="home-path-map__label">Read this page</span>
        <p className="home-path-map__note">A simple chapter trail keeps the long front page calm, ordered, and easy to scan.</p>
        <div className="home-path-map__binding" aria-hidden="true">
          <span>one room trail</span>
          <b>follow the paper spine</b>
        </div>
        <div className="home-path-map__trail" role="list">
          {homepagePathSteps.map((step) => (
            <a className="home-path-map__step" href={step.href} key={step.href} role="listitem">
              <span className="home-path-map__thread" aria-hidden="true" />
              <span className="home-path-map__photo" aria-hidden="true">
                <span className="home-path-map__chapter-slip">{step.chapter}</span>
                <b>{step.label}</b>
                <em>{step.title}</em>
              </span>
              <span className="home-path-map__number">{step.label}</span>
              <span className="home-path-map__copy">
                <span className="home-path-map__room-key">{step.roomKey}</span>
                <strong>{step.title}</strong>
                <small>{step.detail}</small>
              </span>
            </a>
          ))}
        </div>
      </nav>

      <section id="studio-front-room" className="studio-pages studio-pages--intro home-paper-field" aria-labelledby="studio-front-room-title">
        <span className="home-docket-step" aria-hidden="true">Front room</span>
        <span className="home-docket-note" aria-hidden="true">{homepageChapterNotes.frontRoom}</span>
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
        <span className="home-docket-step" aria-hidden="true">Current rooms</span>
        <span className="home-docket-note" aria-hidden="true">{homepageChapterNotes.roomStatus}</span>
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
        <span className="home-docket-step" aria-hidden="true">Studio rooms</span>
        <span className="home-docket-note" aria-hidden="true">{homepageChapterNotes.roomDoors}</span>
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
                <span className="home-door-card__cue-stack" aria-label={`${page.title} room cue`}>
                  <span className="home-door-card__room-cue">{page.roomCue}</span>
                  <span className="home-door-card__cue">Enter {page.title}</span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="studio-shape" className="studio-pages studio-pages--compact home-paper-field home-paper-field--pillars" aria-labelledby="studio-shape-title">
        <span className="home-docket-step" aria-hidden="true">Studio shape</span>
        <span className="home-docket-note" aria-hidden="true">{homepageChapterNotes.studioShape}</span>
        <div className="section-intro home-section-scrap">
          <p className="eyebrow">Studio shape</p>
          <h1 id="studio-shape-title">Built to feel handmade and clear.</h1>
        </div>

        <div className="home-pillar-strip" aria-label="Studio shape principles">
          {studioPillars.map((pillar) => (
            <article className="home-pillar-note home-pillar-note--with-photo" key={pillar.title}>
              <span className="home-pillar-note__photo" aria-hidden="true">
                <b>{pillar.eyebrow}</b>
                <em>{pillar.title}</em>
              </span>
              <span>{pillar.eyebrow}</span>
              <h2>{pillar.title}</h2>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="studio-house-rules" className="studio-pages studio-pages--compact home-studio-checks" aria-labelledby="studio-checks-title">
        <span className="home-docket-step" aria-hidden="true">House rules</span>
        <span className="home-docket-note" aria-hidden="true">{homepageChapterNotes.houseRules}</span>
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
                <span className="home-check-note__rule-slip">{frame.label}</span>
                <span className="home-check-note__eyebrow">{check.eyebrow}</span>
                <h2>{check.title}</h2>
                <p>{check.description}</p>
                <small>{check.note}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section id="studio-next-path" className="studio-pages studio-pages--compact home-next-path-room" aria-label="Where to go next">
        <span className="home-docket-step" aria-hidden="true">Next path</span>
        <span className="home-docket-note" aria-hidden="true">{homepageChapterNotes.nextPath}</span>
        <div className="home-next-path-note" aria-label="Homepage closing path note">
          <span className="home-next-path-note__tag">Leave gently</span>
          <strong>Choose the neighboring room that fits the next step.</strong>
          <p>The front page closes with a quiet path instead of a dead end, so the studio still feels like one connected place.</p>
        </div>
        <NextStepBand {...pageContinuity.home} />
      </section>
    </main>
  );
}
