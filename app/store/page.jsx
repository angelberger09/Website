import { storeSections } from "../site-data";
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
          </DetailCard>
        ))}
      </section>
    </main>
  );
}
