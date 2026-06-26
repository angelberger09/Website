import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import { aboutPathways, aboutPrinciples, aboutSections } from "../site-data";
import { PageIntro } from "../site-chrome";

export const metadata = {
  title: "About · Soft Strange Studio",
  description: "A public studio introduction for Soft Strange Studio."
};

const aboutContactSheet = aboutSections.map((section, index) => ({
  ...section,
  marker: ["Front room", "Tone", "Edges", "Motion"][index] ?? "Studio"
}));

const aboutRoomLabels = ["Start here", "Keep soft", "Hold edges", "Move gently"];

const aboutRoomFrames = [
  {
    mark: "Room",
    detail: "front door"
  },
  {
    mark: "Tone",
    detail: "warm signal"
  },
  {
    mark: "Edge",
    detail: "public line"
  },
  {
    mark: "Drift",
    detail: "gentle motion"
  }
];

const aboutPrincipleFrames = [
  {
    mark: "Soft",
    detail: "human first"
  },
  {
    mark: "Safe",
    detail: "public only"
  },
  {
    mark: "Open",
    detail: "clear paths"
  }
];

const aboutPathwayFrames = [
  {
    label: "Writing shelf",
    mark: "Notes",
    detail: "public words"
  },
  {
    label: "Archive wall",
    mark: "Work",
    detail: "public shape"
  },
  {
    label: "Prep table",
    mark: "Store",
    detail: "future lanes"
  }
];

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
            Start here for the shape of the studio: what belongs in the room,
            how it should feel, what stays offstage, and where a visitor can
            wander next.
          </p>
        </div>
        <div className="about-room-map" aria-label="Soft Strange Studio orientation notes">
          {aboutSections.map((section, index) => {
            const frame = aboutRoomFrames[index] ?? aboutRoomFrames[0];
            return (
              <article className="about-room-piece" key={section.title}>
                <span className="about-room-piece__photo" aria-hidden="true">
                  <b>{frame.mark}</b>
                  <em>{frame.detail}</em>
                </span>
                <span className="about-room-piece__path-label">{aboutRoomLabels[index] ?? "Studio note"}</span>
                <span className="about-room-piece__eyebrow">{section.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-contact-sheet-board" aria-labelledby="about-contact-sheet-title">
        <div className="about-contact-sheet-heading">
          <p className="eyebrow">Studio contact sheet</p>
          <h1 id="about-contact-sheet-title">A few soft frames before the notes.</h1>
          <p>
            These small frames show the public room in pieces: front door,
            tone, boundaries, and movement, all kept soft enough to enter.
          </p>
        </div>
        <div className="about-contact-sheet" aria-label="Soft Strange Studio orientation frames">
          {aboutContactSheet.map((frame) => (
            <article className="about-contact-card" key={frame.title}>
              <div className="about-contact-card__image" aria-hidden="true">
                <span>{frame.marker}</span>
              </div>
              <div className="about-contact-card__copy">
                <div className="about-contact-card__tags" aria-label={`${frame.marker} contact sheet marker`}>
                  <small>Studio frame</small>
                  <small>{frame.eyebrow}</small>
                </div>
                <h2>{frame.title}</h2>
                <p>{frame.description}</p>
              </div>
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
          {aboutPrinciples.map((principle, index) => {
            const frame = aboutPrincipleFrames[index] ?? aboutPrincipleFrames[0];
            return (
              <article className="about-principle-note" key={principle.title}>
                <span className="about-principle-note__photo" aria-hidden="true">
                  <b>{frame.mark}</b>
                  <em>{frame.detail}</em>
                </span>
                <span>{principle.eyebrow}</span>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-paper-board about-pathways-board" aria-labelledby="about-pathways-title">
        <div className="about-board-heading about-board-heading--compact">
          <p className="eyebrow">Where to go next</p>
          <h1 id="about-pathways-title">Choose the door that matches the mood.</h1>
        </div>
        <div className="about-pathway-collage">
          {aboutPathways.map((pathway, index) => {
            const frame = aboutPathwayFrames[index] ?? aboutPathwayFrames[0];
            return (
              <a className="about-pathway-note" href={pathway.href} key={pathway.href}>
                <span className="about-pathway-note__photo" aria-hidden="true">
                  <b>{frame.mark}</b>
                  <em>{frame.detail}</em>
                </span>
                <span className="about-pathway-note__label">{pathway.label}</span>
                <small>{pathway.description}</small>
                <i aria-hidden="true">{frame.label}</i>
              </a>
            );
          })}
        </div>
      </section>

      <NextStepBand {...pageContinuity.about} />
    </main>
  );
}
