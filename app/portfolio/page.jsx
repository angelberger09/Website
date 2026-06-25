import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import { portfolioFeedFields, portfolioFeedRules, portfolioRecordStates } from "../portfolio-feed-contract";
import { portfolioLanes, portfolioPieces, portfolioProcess, portfolioReadiness } from "../site-data";
import { DetailCard, PageIntro } from "../site-chrome";

export const metadata = {
  title: "Portfolio · Soft Strange Studio",
  description: "Public work and project systems from Soft Strange Studio."
};

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

      <section className="link-card wide-card" aria-labelledby="portfolio-readiness-title">
        <p className="eyebrow">Archive readiness</p>
        <h1 id="portfolio-readiness-title">Public work gets a clear holding pattern.</h1>
        <p>
          The portfolio can show what is real now without rushing unfinished material
          into public view. These lanes make it easier to decide what belongs on the
          page, what needs a little more framing, and what should stay offstage.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {portfolioReadiness.map((item) => (
            <DetailCard eyebrow={item.eyebrow} title={item.title} key={item.title}>
              <p>{item.description}</p>
              {item.details && (
                <ul className="detail-list">
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              )}
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="portfolio-lanes-title">
        <p className="eyebrow">Archive lanes</p>
        <h1 id="portfolio-lanes-title">The work can grow in clear public lanes.</h1>
        <p>
          Portfolio items do not need to become full records all at once. The
          page can hold active systems now, then deepen each lane when public images,
          writeups, or source data are ready.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {portfolioLanes.map((lane) => (
            <DetailCard eyebrow={lane.eyebrow} title={lane.title} key={lane.title}>
              <p>{lane.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="portfolio-feed-title">
        <p className="eyebrow">Future feed shape</p>
        <h1 id="portfolio-feed-title">The Portfolio repo needs public archive fields.</h1>
        <p>
          When a Portfolio feed exists, the Website should receive only the safe,
          visitor-facing facts needed to make calm project cards and deeper routes.
          This keeps raw drafts offstage while making the future archive easier to grow.
        </p>
        <div className="pathway-list" aria-label="Future Portfolio feed fields">
          {portfolioFeedFields.map((field) => (
            <div className="pathway-link" key={field.label}>
              <span>{field.label}</span>
              <p>{field.description}</p>
            </div>
          ))}
        </div>
        <ul className="detail-list">
          {portfolioFeedRules.map((rule) => <li key={rule}>{rule}</li>)}
        </ul>
      </section>

      <section className="link-card wide-card" aria-labelledby="portfolio-states-title">
        <p className="eyebrow">Record states</p>
        <h1 id="portfolio-states-title">Archive records can open in stages.</h1>
        <div className="pathway-list" aria-label="Portfolio record states">
          {portfolioRecordStates.map((state) => (
            <div className="pathway-link" key={state.label}>
              <span>{state.label}</span>
              <p>{state.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="portfolio-process-title">
        <p className="eyebrow">Publishing rhythm</p>
        <h1 id="portfolio-process-title">A simple path from signal to public project.</h1>
        <ol className="process-list">
          {portfolioProcess.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <NextStepBand {...pageContinuity.portfolio} />
    </main>
  );
}
