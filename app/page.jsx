import { homepageCards, studioPillars } from "./site-data";
import { DetailCard } from "./site-chrome";

export default function HomePage() {
  return (
    <main id="top" className="home-page">
      <section className="scroll-title" aria-label="Welcome to Soft Strange Studio">
        <div className="title-lockup">
          <span className="hero-polaroid hero-polaroid--back" aria-hidden="true" />
          <span className="hero-polaroid hero-polaroid--frame" aria-hidden="true" />
          <p className="title-kicker">Soft Strange Studio</p>
          <ul className="title-list" aria-label="Welcome to Soft Strange Studio">
            <li><span className="title-line title-line--welcome">Welcome</span></li>
            <li><span className="title-line title-line--to">To</span></li>
            <li><span className="title-line title-line--studio">Soft Strange Studio</span></li>
          </ul>
          <p className="title-note">A soft public studio for notes, art, creature work, and gentle project paths.</p>
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
    </main>
  );
}
