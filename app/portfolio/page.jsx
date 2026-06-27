import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import { portfolioFeedFields, portfolioFeedRules, portfolioRecordStates } from "../portfolio-feed-contract";
import { portfolioLanes, portfolioPieces, portfolioProcess, portfolioReadiness } from "../site-data";
import { PageIntro } from "../site-chrome";

export const metadata = {
  title: "Portfolio · Soft Strange Studio",
  description: "Public work and project systems from Soft Strange Studio."
};

const portfolioRoomKeys = [
  {
    photo: "open",
    label: "Archive door",
    title: "Start with what is public",
    caption: "The room opens with safe project doors first, then lets deeper records wait until they have enough public shape."
  },
  {
    photo: "frame",
    label: "Preview frame",
    title: "Read the image surface",
    caption: "Abstract paper/photo centers mark structure and direction without pretending unfinished screenshots or private case studies exist."
  },
  {
    photo: "shelf",
    label: "Next shelf",
    title: "Follow the public path",
    caption: "Readiness notes, lanes, and record states show how a piece can move from held material into an open archive route."
  }
];

const portfolioGalleryFrames = [
  {
    kind: "image",
    eyebrow: portfolioPieces[0]?.eyebrow ?? "public piece",
    title: portfolioPieces[0]?.title ?? "Website room system",
    caption: "A first public archive piece, staged as a handled photo surface rather than a finished case-study spread."
  },
  {
    kind: "note",
    eyebrow: "archive note",
    title: "Public before polished",
    caption: "The gallery can show what is safely framed now while deeper images, writeups, and source records wait offstage."
  },
  {
    kind: "image",
    eyebrow: portfolioLanes[0]?.eyebrow ?? "lane",
    title: portfolioLanes[0]?.title ?? "Systems lane",
    caption: "Lane material becomes a previewable paper/photo card without pretending a private project is ready."
  },
  {
    kind: "note",
    eyebrow: "public rhythm",
    title: "Images stay honest",
    caption: "Abstract photo centers are allowed here because they represent public structure, not invented screenshots or unavailable work."
  },
  {
    kind: "image",
    eyebrow: portfolioPieces[1]?.eyebrow ?? "public piece",
    title: portfolioPieces[1]?.title ?? "Studio archive path",
    caption: "Each card can become a deeper route later, once public assets and stable card parts exist."
  }
];

const portfolioArchiveTickets = [
  {
    eyebrow: "card front",
    title: "Name the public piece",
    caption: "Each future card starts with a clear title, short role, and visitor-safe reason it belongs in the room."
  },
  {
    eyebrow: "photo place",
    title: "Add an honest preview",
    caption: "The image area can hold abstract route material or real public assets, but never invented screenshots."
  },
  {
    eyebrow: "open path",
    title: "Point to the next shelf",
    caption: "When a deeper record is ready, the card can lead to a public path without exposing private drafts."
  }
];

const portfolioRuleSlips = ["Safe facts", "Public preview", "Private drafts"];
const portfolioProcessVisuals = ["signal", "shape", "preview", "open"];
const portfolioProcessLabels = ["Read signal", "Shape card", "Add preview", "Open path"];

export default function PortfolioPage() {
  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Portfolio" title="First public archive">
        <p>
          The portfolio starts as a clean set of project doors. As more public
          work becomes ready, this page can grow into a fuller archive without
          losing the quiet studio feeling.
        </p>
      </PageIntro>

      <section className="portfolio-room-key-board" aria-labelledby="portfolio-room-key-title">
        <div className="portfolio-room-key-board__heading">
          <p className="eyebrow">Archive room key</p>
          <h1 id="portfolio-room-key-title">How to read the archive.</h1>
          <p>
            The Portfolio room is intentionally staged: start with safe public pieces,
            read the preview surfaces as orientation, then follow the shelf notes only
            where the public path is ready.
          </p>
        </div>
        <div className="portfolio-room-key-strip" aria-label="Portfolio archive reading path">
          {portfolioRoomKeys.map((key) => (
            <article className="portfolio-room-key-slip" key={key.title}>
              <div className="portfolio-room-key-slip__photo" aria-hidden="true">
                <b>{key.photo}</b>
                <em>{key.label}</em>
              </div>
              <div className="portfolio-room-key-slip__copy">
                <b>{key.title}</b>
                <em>{key.caption}</em>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-archive-board" aria-labelledby="portfolio-pieces-title">
        <div className="portfolio-board-heading">
          <p className="eyebrow">Portfolio pieces</p>
          <h1 id="portfolio-pieces-title">Public work sits as staged archive pieces.</h1>
          <p>
            These are the first visible project doors: honest public records, studio systems,
            and future visual-world lanes arranged as handled paper/photo pieces instead of
            a generic card grid.
          </p>
        </div>
        <div className="portfolio-piece-collage">
          {portfolioPieces.map((piece, index) => (
            <article className="portfolio-piece-card" data-archive-index={index + 1} key={piece.title}>
              <span className="portfolio-piece-card__tape" aria-hidden="true" />
              <div className="portfolio-piece-card__image" aria-hidden="true">
                <span>{piece.eyebrow}</span>
              </div>
              <div className="portfolio-piece-card__body">
                <div className="portfolio-piece-card__meta">
                  <span>{piece.status}</span>
                  <small>{piece.eyebrow}</small>
                </div>
                <h2>{piece.title}</h2>
                <p>{piece.description}</p>
                {piece.details && (
                  <ul className="portfolio-piece-card__details">
                    {piece.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-gallery-board" aria-labelledby="portfolio-gallery-title">
        <div className="portfolio-board-heading portfolio-board-heading--compact">
          <p className="eyebrow">Gallery path</p>
          <h1 id="portfolio-gallery-title">A sideways stack of public archive moments.</h1>
          <p>
            This scroll strip alternates abstract photo cards with short paper notes, giving the
            Portfolio room a real gallery rhythm while keeping unfinished project assets and
            private case-study drafts offstage.
          </p>
        </div>
        <div className="portfolio-gallery-scroll" aria-label="Scrollable Portfolio gallery preview">
          {portfolioGalleryFrames.map((frame, index) => (
            <article className={`portfolio-gallery-card portfolio-gallery-card--${frame.kind}`} key={`${frame.kind}-${frame.title}`}>
              <span className="portfolio-gallery-card__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {frame.kind === "image" && (
                <div className="portfolio-gallery-card__image" aria-hidden="true">
                  <span>{frame.eyebrow}</span>
                </div>
              )}
              <div className="portfolio-gallery-card__copy">
                <p className="portfolio-note-label">{frame.eyebrow}</p>
                <h2>{frame.title}</h2>
                <p>{frame.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-readiness-board portfolio-paper-board" aria-labelledby="portfolio-readiness-title">
        <div className="portfolio-board-heading portfolio-board-heading--compact">
          <p className="eyebrow">Archive readiness</p>
          <h1 id="portfolio-readiness-title">Public work gets a clear holding pattern.</h1>
          <p>
            The portfolio can show what is real now without rushing unfinished material
            into public view. These lanes make it easier to decide what belongs on the
            page, what needs a little more framing, and what should stay offstage.
          </p>
        </div>
        <div className="portfolio-readiness-notes">
          {portfolioReadiness.map((item, index) => (
            <article className="portfolio-readiness-note" data-readiness-index={index + 1} key={item.title}>
              <span className="portfolio-note-tape" aria-hidden="true" />
              <div className="portfolio-readiness-note__photo" aria-hidden="true">
                <span>{item.eyebrow}</span>
              </div>
              <div className="portfolio-readiness-note__copy">
                <p className="portfolio-note-label">{item.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.details && (
                  <ul className="portfolio-chip-list">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-lane-board portfolio-paper-board" aria-labelledby="portfolio-lanes-title">
        <div className="portfolio-board-heading portfolio-board-heading--compact">
          <p className="eyebrow">Archive lanes</p>
          <h1 id="portfolio-lanes-title">The work can grow in clear public lanes.</h1>
          <p>
            Portfolio items do not need to become full records all at once. The
            page can hold active systems now, then deepen each lane when public images,
            writeups, or shelf details are ready.
          </p>
        </div>
        <div className="portfolio-lane-strip">
          {portfolioLanes.map((lane, index) => (
            <article className="portfolio-lane-piece" data-lane-index={index + 1} key={lane.title}>
              <div className="portfolio-lane-piece__image" aria-hidden="true">
                <span>{lane.eyebrow}</span>
              </div>
              <div className="portfolio-lane-piece__copy">
                <p className="portfolio-note-label">{lane.eyebrow}</p>
                <h2>{lane.title}</h2>
                <p>{lane.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-feed-board portfolio-paper-board portfolio-feed-board--shelf" aria-labelledby="portfolio-feed-title">
        <div className="portfolio-board-heading portfolio-board-heading--compact">
          <p className="eyebrow">Future archive shelf</p>
          <h1 id="portfolio-feed-title">The archive shelf needs public-facing cards.</h1>
          <p>
            When deeper Portfolio material is ready, this page should receive only the safe,
            visitor-facing facts needed to make calm project cards and studio routes. Unready
            drafts stay offstage; the public shelf stays warm and legible.
          </p>
        </div>
        <aside className="portfolio-feed-shelf-intro" aria-label="Portfolio archive shelf boundary">
          <p className="portfolio-note-label">Public boundary</p>
          <h2>Only framed material comes forward.</h2>
          <p>
            This shelf is a promise to future archive work: name the piece, explain the public
            shape, show only safe preview material, and leave private process outside the room.
          </p>
        </aside>
        <div className="portfolio-archive-ticket-board" aria-label="Future Portfolio archive card path">
          {portfolioArchiveTickets.map((ticket, index) => (
            <article className="portfolio-archive-ticket" data-ticket-index={index + 1} key={ticket.title}>
              <div className="portfolio-archive-ticket__photo" aria-hidden="true">
                <span>{ticket.eyebrow}</span>
              </div>
              <div className="portfolio-archive-ticket__copy">
                <p className="portfolio-note-label">{ticket.eyebrow}</p>
                <h2>{ticket.title}</h2>
                <p>{ticket.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-feed-ledger portfolio-feed-ledger--visitor" aria-label="Future Portfolio archive card parts">
          {portfolioFeedFields.map((field) => (
            <article className="portfolio-feed-card" key={field.label}>
              <span>{field.label}</span>
              <p>{field.description}</p>
            </article>
          ))}
        </div>
        <div className="portfolio-rule-tapes portfolio-rule-tapes--visitor portfolio-rule-slip-board" aria-label="Future Portfolio archive rules">
          {portfolioFeedRules.map((rule, index) => (
            <article className="portfolio-rule-slip" key={rule}>
              <span>{portfolioRuleSlips[index] ?? "Public rule"}</span>
              <p>{rule}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-state-board portfolio-paper-board portfolio-state-photo-board" aria-labelledby="portfolio-states-title">
        <div className="portfolio-board-heading portfolio-board-heading--compact">
          <p className="eyebrow">Record states</p>
          <h1 id="portfolio-states-title">Archive records can open in stages.</h1>
        </div>
        <div className="portfolio-state-stack" aria-label="Portfolio record states">
          {portfolioRecordStates.map((state, index) => (
            <article className="portfolio-state-note portfolio-state-photo" data-state-index={index + 1} key={state.label}>
              <div className="portfolio-state-photo__image" aria-hidden="true">
                <span>{state.label}</span>
              </div>
              <div className="portfolio-state-photo__copy">
                <span>{state.label}</span>
                <p>{state.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-process-board portfolio-paper-board portfolio-process-photo-board" aria-labelledby="portfolio-process-title">
        <div className="portfolio-board-heading portfolio-board-heading--compact">
          <p className="eyebrow">Publishing rhythm</p>
          <h1 id="portfolio-process-title">A simple path from signal to public project.</h1>
        </div>
        <ol className="portfolio-process-ribbon portfolio-process-photo-ribbon">
          {portfolioProcess.map((step, index) => (
            <li data-step-index={index + 1} key={step}>
              <div className="portfolio-process-ribbon__image" aria-hidden="true">
                <span>{portfolioProcessVisuals[index] ?? "step"}</span>
              </div>
              <div className="portfolio-process-ribbon__copy">
                <span className="portfolio-process-ribbon__phase">{portfolioProcessLabels[index] ?? "Next step"}</span>
                <p>{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <NextStepBand {...pageContinuity.portfolio} />
    </main>
  );
}
