const homeCards = [
  {
    href: "/Website/notes/",
    title: "Studio Notes",
    eyebrow: "Studio Notes",
    description: "essays, updates, grief, chronic illness, and free patterns.",
    kind: "notes"
  },
  {
    href: "/Website/portfolio/",
    title: "Art",
    eyebrow: "Art",
    description: "cozy creatures, ocean studies, garden magic, and experiments.",
    kind: "art"
  },
  {
    href: "/Website/store/",
    title: "Shop",
    eyebrow: "Shop",
    description: "stickers, wearable things, paper goods, and free little things.",
    kind: "shop"
  },
  {
    href: "/Website/about/",
    title: "About",
    eyebrow: "About",
    description: "the person, grief, joy, and feelings behind the studio.",
    kind: "about"
  }
];

function ReferenceCardArt({ kind }) {
  if (kind === "notes") {
    return (
      <>
        <span className="reference-card__art-surface reference-card__art-surface--notes" aria-hidden="true" />
        <span className="reference-card__art-ribbon" aria-hidden="true" />
        <span className="reference-card__art-cup" aria-hidden="true" />
      </>
    );
  }

  if (kind === "art") {
    return (
      <>
        <span className="reference-card__art-surface reference-card__art-surface--art" aria-hidden="true" />
        <span className="reference-card__art-light" aria-hidden="true" />
        <span className="reference-card__art-mountain reference-card__art-mountain--left" aria-hidden="true" />
        <span className="reference-card__art-mountain reference-card__art-mountain--right" aria-hidden="true" />
        <span className="reference-card__art-string reference-card__art-string--left" aria-hidden="true" />
        <span className="reference-card__art-string reference-card__art-string--right" aria-hidden="true" />
      </>
    );
  }

  if (kind === "shop") {
    return (
      <>
        <span className="reference-card__art-surface reference-card__art-surface--shop" aria-hidden="true" />
        <span className="reference-card__art-shelf reference-card__art-shelf--top" aria-hidden="true" />
        <span className="reference-card__art-shelf reference-card__art-shelf--bottom" aria-hidden="true" />
        <span className="reference-card__art-pot" aria-hidden="true" />
        <span className="reference-card__art-ring" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <span className="reference-card__art-surface reference-card__art-surface--about" aria-hidden="true" />
      <span className="reference-card__art-window reference-card__art-window--vertical" aria-hidden="true" />
      <span className="reference-card__art-window reference-card__art-window--horizontal" aria-hidden="true" />
      <span className="reference-card__art-candle" aria-hidden="true" />
      <span className="reference-card__art-circle" aria-hidden="true" />
    </>
  );
}

export default function HomePage() {
  return (
    <main id="top" className="reference-home-page">
      <section className="reference-home-sheet" aria-label="Soft Strange Studio home">
        <p className="reference-home-sheet__eyebrow">Gemini</p>
        <div className="reference-home-sheet__body">
          <div className="reference-home-sheet__intro">
            <h2>
              Welcome to Soft Strange Studio - a cozy place for strange art, honest
              notes, and small comforts.
            </h2>
            <p>
              Here you&apos;ll find artwork, studio experiments, reflections on grief
              and chronic illness, and soft little things made for people who feel a lot.
            </p>
          </div>

          <span className="reference-home-sheet__ornament reference-home-sheet__ornament--left">
            made slowly
          </span>
          <span className="reference-home-sheet__ornament reference-home-sheet__ornament--right">
            breathe
          </span>
          <span className="reference-home-sheet__ornament reference-home-sheet__ornament--bottom-left">
            soft
          </span>
          <span className="reference-home-sheet__ornament reference-home-sheet__ornament--bottom-right">
            cozy harbor
          </span>

          <div className="reference-card-grid" aria-label="Studio sections">
            {homeCards.map((card, index) => (
              <a
                className={index % 2 === 0 ? "reference-card" : "reference-card reference-card--tilt"}
                href={card.href}
                key={card.title}
              >
                <span className="reference-card__tape" aria-hidden="true" />
                <div className="reference-card__art" aria-hidden="true" data-kind={card.kind}>
                  <ReferenceCardArt kind={card.kind} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </a>
            ))}
          </div>

          <p className="reference-home-sheet__copyright" id="contact">
            © 2026 Soft Strange Studio. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
