import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import { aboutPathways, aboutPrinciples, aboutSections } from "../site-data";
import { PageIntro } from "../site-chrome";

export const metadata = {
  title: "About · Soft Strange Studio",
  description: "A public studio introduction for Soft Strange Studio."
};

export default function AboutPage() {
  return (
    <main id="top" className="site-shell page-layout about-paper-room">
      <PageIntro eyebrow="About the studio" title="Soft public studio">
        <p>
          Soft Strange Studio is the public home for notes, creature work,
          visual systems, and gentle experiments. The page should feel warm,
          tactile, odd, and easy to understand.
        </p>
      </PageIntro>

      <section className="about-opening-board" aria-label="About Soft Strange Studio">
        <div className="about-opening-copy">
          <p className="eyebrow">Studio shape</p>
          <h1>A public room with soft edges.</h1>
          <p>
            The first About section should orient visitors without reverting to a
            generic card grid. These pieces keep the existing studio copy but place
            it as a small paper map: front door, tone, scope, and movement.
          </p>
        </div>
        <div className="about-room-map" aria-label="Soft Strange Studio orientation notes">
          {aboutSections.map((section, index) => (
            <article className="about-room-piece" key={section.title}>
              <span className="about-room-piece__index">0{index + 1}</span>
              <span className="about-room-piece__eyebrow">{section.eyebrow}</span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-paper-board about-principles-board" aria-labelledby="about-principles-title">
        <div className="about-board-heading">
          <p className="eyebrow">Working principles</p>
          <h1 id="about-principles-title">The site keeps the soft parts visible and the machinery quiet.</h1>
          <p>
            This page is also a promise about how the public Website should behave:
            it can be structured and connected without sounding mechanical, and it can
            remember design lessons without exposing private material.
          </p>
        </div>
        <div className="about-principles-collage" aria-label="Soft Strange Studio working principles">
          {aboutPrinciples.map((principle) => (
            <article className="about-principle-note" key={principle.title}>
              <span>{principle.eyebrow}</span>
              <h2>{principle.title}</h2>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-paper-board about-pathways-board" aria-labelledby="about-pathways-title">
        <div className="about-board-heading about-board-heading--compact">
          <p className="eyebrow">Where to go next</p>
          <h1 id="about-pathways-title">Choose the door that matches the mood.</h1>
        </div>
        <div className="about-pathway-collage">
          {aboutPathways.map((pathway) => (
            <a className="about-pathway-note" href={pathway.href} key={pathway.href}>
              <span>{pathway.label}</span>
              <small>{pathway.description}</small>
            </a>
          ))}
        </div>
      </section>

      <NextStepBand {...pageContinuity.about} />
    </main>
  );
}
