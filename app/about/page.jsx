import { aboutSections } from "../site-data";
import { DetailCard, PageIntro } from "../site-chrome";

export const metadata = {
  title: "About · Soft Strange Studio",
  description: "A public studio introduction for Soft Strange Studio."
};

export default function AboutPage() {
  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="About the studio" title="A soft public place for creative work.">
        <p>
          Soft Strange Studio is the public home for notes, creature work,
          visual systems, and gentle experiments. The page should feel warm,
          tactile, odd, and easy to understand.
        </p>
      </PageIntro>

      <section className="content-grid" aria-label="About Soft Strange Studio">
        {aboutSections.map((section) => (
          <DetailCard eyebrow={section.eyebrow} title={section.title} key={section.title}>
            <p>{section.description}</p>
          </DetailCard>
        ))}
      </section>
    </main>
  );
}
