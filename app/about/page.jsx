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

const aboutContactRail = [
  {
    label: "Start sideways",
    detail: "Four public frames",
    mark: "First",
    frame: "first frame"
  },
  {
    label: "Stay readable",
    detail: "Soft room notes",
    mark: "Copy",
    frame: "clear copy"
  },
  {
    label: "Follow the room",
    detail: "Notes, work, store",
    mark: "Doors",
    frame: "next doors"
  }
];

const aboutRoomKey = [
  {
    label: "Enter softly",
    detail: "Start with the public room shape.",
    mark: "Enter",
    cue: "front room"
  },
  {
    label: "Read the edge",
    detail: "Notice what stays warm, clear, and offstage.",
    mark: "Edge",
    cue: "soft boundary"
  },
  {
    label: "Choose a door",
    detail: "Continue into notes, archive work, or prepared store paths.",
    mark: "Doors",
    cue: "next path"
  }
];

const aboutRoomSpine = [
  {
    label: "Room key",
    detail: "enter softly",
    mark: "Key",
    cue: "open room"
  },
  {
    label: "Studio shape",
    detail: "front room",
    mark: "Shape",
    cue: "public map"
  },
  {
    label: "Contact sheet",
    detail: "soft frames",
    mark: "Frames",
    cue: "look gently"
  },
  {
    label: "Principles",
    detail: "public promise",
    mark: "Promise",
    cue: "keep close"
  },
  {
    label: "Next doors",
    detail: "open path",
    mark: "Doors",
    cue: "leave softly"
  }
];

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
    detail: "public words",
    cue: "read next"
  },
  {
    label: "Archive wall",
    mark: "Work",
    detail: "public shape",
    cue: "open archive"
  },
  {
    label: "Prep table",
    mark: "Store",
    detail: "future lanes",
    cue: "prep table"
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

      <section className="about-room-key-board" aria-labelledby="about-room-key-title">
        <div className="about-room-key-board__heading">
          <p className="eyebrow">Room key</p>
          <h1 id="about-room-key-title">A short path through the public room.</h1>
        </div>
        <div className="about-room-key-strip" aria-label="About room reading path">
          {aboutRoomKey.map((item) => (
            <article className="about-room-key-slip" key={item.label}>
              <span className="about-room-key-slip__photo" aria-hidden="true">
                <b>{item.mark}</b>
                <em>{item.cue}</em>
              </span>
              <span className="about-room-key-slip__copy">
                <b>{item.label}</b>
                <em>{item.detail}</em>
              </span>
            </article>
          ))}
        </div>
      </section>

      <aside className="about-room-spine" aria-label="About room section path">
        {aboutRoomSpine.map((item) => (
          <span className="about-room-spine__slip" key={item.label}>
            <span className="about-room-spine__photo" aria-hidden="true">
              <b>{item.mark}</b>
              <em>{item.cue}</em>
            </span>
            <span className="about-room-spine__copy">
              <b>{item.label}</b>
              <em>{item.detail}</em>
            </span>
          </span>
        ))}
      </aside>

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
        <div className="about-contact-sheet-rail" aria-label="Contact sheet path cues">
          {aboutContactRail.map((item) => (
            <span className="about-contact-sheet-rail__slip" key={item.label}>
              <span className="about-contact-sheet-rail__photo" aria-hidden="true">
                <b>{item.mark}</b>
                <em>{item.frame}</em>
              </span>
              <span className="about-contact-sheet-rail__copy">
                <b>{item.label}</b>
                <em>{item.detail}</em>
              </span>
            </span>
          ))}
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
                <span className="about-pathway-note__door-cue" aria-hidden="true">{frame.cue}</span>
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
