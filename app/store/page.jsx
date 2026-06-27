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
const storeEntryReceipts = [
  {
    eyebrow: "Preview room",
    title: "Mood before listing",
    description: "The store can show tone, materials, and future paths without pretending a shelf is open."
  },
  {
    eyebrow: "Trust rule",
    title: "No fake inventory",
    description: "Pieces stay in preparation until a real public listing, delivery note, and context are ready."
  },
  {
    eyebrow: "Opening path",
    title: "Linked when ready",
    description: "When a piece can be visited or purchased, the card can point to that public path directly."
  }
];
const storeEntryCueLabels = ["Preview path", "Trust note", "Open when ready"];
const storeLaneCueLabels = ["Download shelf", "Coloring shelf", "Creature shelf", "Link shelf"];
const storeShotCueLabels = ["Digital files", "Color pages", "Creature goods"];
const storeGalleryCueLabels = ["Digital files", "Color pages", "Creature goods", "Link shelf", "Preview rule", "Launch rule"];
const storeChecklistCueLabels = ["Story ready", "Preview proof", "Delivery note"];
const storeAvailabilityCueLabels = ["Preparing room", "Preview room", "Open room"];
const storeFeedCueLabels = ["Handle", "Name", "Status", "Note", "Preview", "Delivery"];
const storePromiseCueLabels = ["Useful before links", "Clear after launch", "Quiet source path"];
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
const storePathCards = pageContinuity.store.steps;

export default function StorePage() {
  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Store" title="Future studio pieces">
        <p>
          This room gathers the product paths being prepared for later: soft
          previews, honest stage notes, and clear public doors when they exist.
        </p>
      </PageIntro>

      <section className="store-entry-receipts" aria-label="Store trust notes">
        {storeEntryReceipts.map((receipt, index) => (
          <article className="store-entry-receipt" key={receipt.title}>
            <div className="store-entry-receipt__photo" aria-hidden="true">
              <span>{receipt.eyebrow}</span>
              <i />
              <i />
            </div>
            <span className="store-entry-receipt__pin" aria-hidden="true">{storeEntryCueLabels[index] ?? "Store cue"}</span>
            <p className="store-entry-receipt__eyebrow">{receipt.eyebrow}</p>
            <h2>{receipt.title}</h2>
            <p>{receipt.description}</p>
          </article>
        ))}
      </section>

      <section className="store-lane-collage" aria-label="Store paths">
        {storeSections.map((section, index) => (
          <article className="store-lane-piece" key={section.title}>
            <div className="store-lane-piece__photo" aria-hidden="true">
              <span>{storeLaneCueLabels[index] ?? section.eyebrow}</span>
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
                <span className="store-shot-card__mark">{storeShotCueLabels[index] ?? lane.eyebrow}</span>
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
                {storeGalleryCueLabels[index] ?? item.eyebrow}
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
              <span className="store-checklist-note__pin" aria-hidden="true">{storeChecklistCueLabels[index] ?? item.eyebrow}</span>
              <div className="store-checklist-note__visual" aria-hidden="true">
                <b>{item.eyebrow}</b>
                <i />
                <i />
                <i />
              </div>
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
        <div className="store-availability-board__intro">
          <p className="eyebrow">Availability states</p>
          <h1 id="store-states-title">The shop path can open in gentle stages.</h1>
        </div>
        <div className="store-availability-collage store-availability-status-path store-snippet-list" aria-label="Store availability states">
          {storeAvailabilityStates.map((state, index) => (
            <article className="store-state-snippet store-availability-status" key={state.label}>
              <span className="store-availability-status__stage">{storeAvailabilityCueLabels[index] ?? state.label}</span>
              <div className="store-availability-status__visual" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="store-availability-status__copy">
                <span className="store-availability-status__label">{state.label}</span>
                <p>{state.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="store-editorial-section store-feed-contract-section store-feed-ledger-board" aria-labelledby="store-feed-title">
        <div className="store-feed-ledger-board__intro">
          <p className="eyebrow">Future shelf shape</p>
          <h1 id="store-feed-title">Future Store cards need calm public parts.</h1>
          <p>
            When the store shelf is ready, this page should receive only the public
            facts needed to make honest product cards. The private planning stays
            offstage; the visitor sees clear names, previews, and delivery notes.
          </p>
        </div>
        <div className="store-feed-ledger-grid" aria-label="Future Store card parts">
          {storeFeedFields.map((field, index) => (
            <article className="store-feed-ledger-card" key={field.label}>
              <span className="store-feed-ledger-card__tab" aria-hidden="true">{storeFeedCueLabels[index] ?? field.label}</span>
              <div className="store-feed-ledger-card__photo" aria-hidden="true">
                <b>{field.label}</b>
                <i />
                <i />
              </div>
              <span className="store-feed-ledger-card__label">{field.label}</span>
              <p>{field.description}</p>
            </article>
          ))}
        </div>
        <ul className="store-feed-rule-tape" aria-label="Future Store shelf rules">
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
          {storePromises.map((promise, index) => (
            <article className="store-promise-note" key={promise.title}>
              <div className="store-promise-note__photo" aria-hidden="true">
                <b>{storePromiseCueLabels[index] ?? promise.eyebrow}</b>
                <i />
                <i />
                <i />
              </div>
              <span>{promise.eyebrow}</span>
              <h2>{promise.title}</h2>
              <p>{promise.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="store-path-photo-board" aria-labelledby="store-path-photo-title">
        <div className="store-path-photo-board__intro">
          <p className="eyebrow">Shop path</p>
          <h1 id="store-path-photo-title">The store still points back to the studio.</h1>
          <p>
            Since the shelf is not live inventory, the strongest next steps are the
            rooms that explain where the pieces come from and what kind of studio is
            holding them.
          </p>
        </div>
        <div className="store-path-photo-grid" aria-label="Store next room photo cards">
          {storePathCards.map((step) => (
            <a className="store-path-photo-card" href={step.href} key={step.href}>
              <div className="store-path-photo-card__image" aria-hidden="true">
                <b>{step.eyebrow}</b>
                <span className="store-path-photo-card__cue">Open room</span>
              </div>
              <div className="store-path-photo-card__copy">
                <span>{step.eyebrow}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <NextStepBand {...pageContinuity.store} />
    </main>
  );
}
