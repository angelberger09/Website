import { aboutPathways, aboutPrinciples, aboutSections } from "../site-data";
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

      <section className="link-card wide-card" aria-labelledby="about-principles-title">
        <p className="eyebrow">Working principles</p>
        <h1 id="about-principles-title">The site keeps the soft parts visible and the machinery quiet.</h1>
        <p>
          This page is also a promise about how the public Website should behave:
          it can be structured and connected without sounding mechanical, and it can
          remember design lessons without exposing private material.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {aboutPrinciples.map((principle) => (
            <DetailCard eyebrow={principle.eyebrow} title={principle.title} key={principle.title}>
              <p>{principle.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="about-pathways-title">
        <p className="eyebrow">Where to go next</p>
        <h1 id="about-pathways-title">Choose the door that matches the mood.</h1>
        <div className="pathway-list">
          {aboutPathways.map((pathway) => (
            <a className="pathway-link" href={pathway.href} key={pathway.href}>
              <span>{pathway.label}</span>
              <small>{pathway.description}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
