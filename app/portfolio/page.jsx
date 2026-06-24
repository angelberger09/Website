import { portfolioLanes, portfolioPieces, portfolioProcess } from "../site-data";
import { DetailCard, PageIntro } from "../site-chrome";

export const metadata = {
  title: "Portfolio · Soft Strange Studio",
  description: "Public work and project systems from Soft Strange Studio."
};

export default function PortfolioPage() {
  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Portfolio" title="A first archive of public work and systems.">
        <p>
          The portfolio starts as a clean set of project doors. As more public
          work becomes ready, this page can grow into a fuller archive without
          losing the quiet studio feeling.
        </p>
      </PageIntro>

      <section className="content-grid" aria-label="Portfolio pieces">
        {portfolioPieces.map((piece) => (
          <DetailCard eyebrow={piece.eyebrow} title={piece.title} status={piece.status} key={piece.title}>
            <p>{piece.description}</p>
            {piece.details && (
              <ul className="detail-list">
                {piece.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            )}
          </DetailCard>
        ))}
      </section>

      <section className="link-card wide-card" aria-labelledby="portfolio-lanes-title">
        <p className="eyebrow">Archive lanes</p>
        <h1 id="portfolio-lanes-title">The work can grow in clear public lanes.</h1>
        <p>
          Portfolio items do not need to become full case studies all at once. The
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

      <section className="link-card wide-card" aria-labelledby="portfolio-process-title">
        <p className="eyebrow">Publishing rhythm</p>
        <h1 id="portfolio-process-title">A simple path from signal to public project.</h1>
        <ol className="process-list">
          {portfolioProcess.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>
    </main>
  );
}
