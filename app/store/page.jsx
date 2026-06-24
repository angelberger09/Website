import { storePromises, storeSections } from "../site-data";
import { DetailCard, PageIntro } from "../site-chrome";

export const metadata = {
  title: "Store · Soft Strange Studio",
  description: "Future product paths for Soft Strange Studio."
};

export default function StorePage() {
  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Store" title="A calm doorway for future shop pieces.">
        <p>
          The store page is filled out as a public placeholder with real product
          lanes, not empty filler. When listings are ready, this page can point
          visitors toward them without breaking the studio atmosphere.
        </p>
      </PageIntro>

      <section className="content-grid" aria-label="Store paths">
        {storeSections.map((section) => (
          <DetailCard eyebrow={section.eyebrow} title={section.title} key={section.title}>
            <p>{section.description}</p>
            {section.details && (
              <ul className="detail-list">
                {section.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            )}
          </DetailCard>
        ))}
      </section>

      <section className="link-card wide-card" aria-labelledby="store-promise-title">
        <p className="eyebrow">Store promise</p>
        <h1 id="store-promise-title">Prepared, honest, and easy to update.</h1>
        <p>
          This page should be useful before the shop is live and trustworthy after
          it launches. It names the intended lanes, keeps availability clear, and
          leaves room for direct public links when they exist.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {storePromises.map((promise) => (
            <DetailCard eyebrow={promise.eyebrow} title={promise.title} key={promise.title}>
              <p>{promise.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>
    </main>
  );
}
