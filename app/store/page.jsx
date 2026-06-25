import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import {
  storeAvailabilityStates,
  storeFeedFields,
  storeFeedRules,
  storeReadinessChecklist
} from "../store-readiness";
import { storePromises, storeSections } from "../site-data";
import { PageIntro } from "../site-chrome";

export const metadata = {
  title: "Store · Soft Strange Studio",
  description: "Future product paths for Soft Strange Studio."
};

const visualStoreLanes = storeSections.slice(0, 3);
const storeGalleryItems = [
  ...storeSections.map((lane) => ({ ...lane, kind: "lane" })),
  {
    kind: "note",
    eyebrow: "Readiness rule",
    title: "Preview is not inventory",
    description:
      "These pieces can show mood, materials, and public paths without pretending that a product listing already exists."
  },
  {
    kind: "note",
    eyebrow: "Launch rule",
    title: "Available means linked",
    description:
      "A store item should only move into an available state after the public source, delivery path, and listing context are ready."
  }
];

export default function StorePage() {
  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Store" title="Future studio pieces">
        <p>
          The store page is filled out as a public readiness page with real lanes,
          not empty filler. When public links are ready, this page can point
          visitors toward them without breaking the studio atmosphere.
        </p>
      </PageIntro>

      <section className="store-lane-collage" aria-label="Store paths">
        {storeSections.map((section, index) => (
          <article className="store-lane-piece" key={section.title}>
            <div className="store-lane-piece__photo" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="store-lane-piece__copy">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              {section.details && (
                <ul className="store-lane-piece__details">
                  {section.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="store-visual-board" aria-labelledby="store-visual-board-title">
        <div className="store-visual-board__copy">
          <p className="eyebrow">Preview board</p>
          <h1 id="store-visual-board-title">Visual lanes without fake listings.</h1>
          <p>
            These image-like paper pieces show the kinds of store paths being prepared
            while staying clearly in preview mode. They are mood and readiness cues,
            not product photos or live inventory.
          </p>
        </div>
        <div className="store-shot-strip" aria-label="Store visual preview lanes">
          {visualStoreLanes.map((lane, index) => (
            <article className="store-shot-card" key={lane.title}>
              <div className="store-shot-card__image" aria-hidden="true">
                <span className="store-shot-card__mark">{String(index + 1).padStart(2, "0")}</span>
                <div className="store-shot-card__staged-pieces">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="store-shot-card__caption">
                <span>{lane.eyebrow}</span>
                <p>{lane.title}</p>
                <ul className="store-shot-card__materials" aria-label={`${lane.title} preview material`}>
                  {lane.details.slice(0, 2).map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="store-gallery-board" aria-labelledby="store-gallery-title">
        <div className="store-gallery-board__intro">
          <p className="eyebrow">Scrollable preview shelf</p>
          <h1 id="store-gallery-title">A slower look at what is being prepared.</h1>
          <p>
            The shelf turns the existing Store lanes and launch rules into a horizontal
            paper/photo sequence. It gives the page a more visual path while keeping
            every card honest about preparation instead of availability.
          </p>
        </div>
        <div className="store-gallery-scroll" aria-label="Scrollable Store preview shelf">
          {storeGalleryItems.map((item, index) => (
            <article
              className={`store-gallery-card${item.kind === "note" ? " store-gallery-card--note" : ""}`}
              key={`${item.kind}-${item.title}`}
            >
              <span className="store-gallery-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.kind === "lane" && (
                <div className="store-gallery-card__image" aria-hidden="true">
                  <span>{item.eyebrow}</span>
                  <div className="store-gallery-card__pieces">
                    {item.details.slice(0, 3).map((detail) => <i key={detail} />)}
                  </div>
                </div>
              )}
              <div className="store-gallery-card__copy">
                <p className="eyebrow">{item.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.kind === "lane" && item.details && (
                  <ul className="store-gallery-card__details" aria-label={`${item.title} staged materials`}>
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="store-editorial-section store-launch-checklist-card store-checklist-collage" aria-labelledby="store-readiness-title">
        <div className="store-checklist-collage__intro">
          <p className="eyebrow">Launch checklist</p>
          <h1 id="store-readiness-title">Nothing moves to available without context.</h1>
          <p>
            The store can stay useful before anything is for sale by naming what each
            future product lane still needs. This keeps the page warm and honest while
            making the next public product update easier to decide.
          </p>
        </div>
        <div className="store-checklist-note-stack" aria-label="Store launch checklist">
          {storeReadinessChecklist.map((item, index) => (
            <article className="store-checklist-note" key={item.title}>
              <span className="store-checklist-note__pin" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <span className="store-checklist-note__eyebrow">{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <ul className="store-checklist-note__details">
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="store-editorial-section store-availability-card store-availability-board" aria-labelledby="store-states-title">
        <p className="eyebrow">Availability states</p>
        <h1 id="store-states-title">The shop path can open in gentle stages.</h1>
        <div className="store-availability-collage store-snippet-list" aria-label="Store availability states">
          {storeAvailabilityStates.map((state) => (
            <article className="store-state-snippet" key={state.label}>
              <span>{state.label}</span>
              <p>{state.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="store-editorial-section store-feed-contract-section store-feed-ledger-board" aria-labelledby="store-feed-title">
        <div className="store-feed-ledger-board__intro">
          <p className="eyebrow">Future feed shape</p>
          <h1 id="store-feed-title">The Store repo needs calm, public fields.</h1>
          <p>
            When a Store feed exists, the Website should receive only the public facts
            needed to make honest product cards. This contract keeps raw planning out
            of the site while making the future data handoff easier.
          </p>
        </div>
        <div className="store-feed-ledger-grid" aria-label="Future Store feed fields">
          {storeFeedFields.map((field, index) => (
            <article className="store-feed-ledger-card" key={field.label}>
              <span className="store-feed-ledger-card__tab" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="store-feed-ledger-card__label">{field.label}</span>
              <p>{field.description}</p>
            </article>
          ))}
        </div>
        <ul className="store-feed-rule-tape" aria-label="Future Store feed rules">
          {storeFeedRules.map((rule) => <li key={rule}>{rule}</li>)}
        </ul>
      </section>

      <section className="store-editorial-section store-promise-section store-promise-board" aria-labelledby="store-promise-title">
        <div className="store-promise-board__intro">
          <p className="eyebrow">Store promise</p>
          <h1 id="store-promise-title">Prepared, honest, and easy to update.</h1>
          <p>
            This page should be useful before public links exist and trustworthy after
            they launch. It names the intended lanes, keeps availability clear, and
            leaves room for direct public paths when they exist.
          </p>
        </div>
        <div className="store-promise-note-stack" aria-label="Store promise notes">
          {storePromises.map((promise) => (
            <article className="store-promise-note" key={promise.title}>
              <span>{promise.eyebrow}</span>
              <h2>{promise.title}</h2>
              <p>{promise.description}</p>
            </article>
          ))}
        </div>
      </section>

      <NextStepBand {...pageContinuity.store} />
    </main>
  );
}
