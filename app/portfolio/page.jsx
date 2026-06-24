import { portfolioPieces } from "../site-data";
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
          </DetailCard>
        ))}
      </section>
    </main>
  );
}
