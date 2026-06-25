import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import {
  storeAvailabilityStates,
  storeFeedFields,
  storeFeedRules,
  storeReadinessChecklist
} from "../store-readiness";
import { storePromises, storeSections } from "../site-data";
import { DetailCard, PageIntro } from "../site-chrome";

export const metadata = {
  title: "Store · Soft Strange Studio",
  description: "Future product paths for Soft Strange Studio."
};

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

      <section className="link-card wide-card" aria-labelledby="store-readiness-title">
        <p className="eyebrow">Launch checklist</p>
        <h1 id="store-readiness-title">Nothing moves to available without context.</h1>
        <p>
          The store can stay useful before anything is for sale by naming what each
          future product lane still needs. This keeps the page warm and honest while
          making the next public product update easier to decide.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {storeReadinessChecklist.map((item) => (
            <DetailCard eyebrow={item.eyebrow} title={item.title} key={item.title}>
              <p>{item.description}</p>
              <ul className="detail-list">
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </DetailCard>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="store-states-title">
        <p className="eyebrow">Availability states</p>
        <h1 id="store-states-title">The shop path can open in gentle stages.</h1>
        <div className="pathway-list" aria-label="Store availability states">
          {storeAvailabilityStates.map((state) => (
            <div className="pathway-link" key={state.label}>
              <span>{state.label}</span>
              <p>{state.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="store-feed-title">
        <p className="eyebrow">Future feed shape</p>
        <h1 id="store-feed-title">The Store repo needs calm, public fields.</h1>
        <p>
          When a Store feed exists, the Website should receive only the public facts
          needed to make honest product cards. This contract keeps raw planning out
          of the site while making the future data handoff easier.
        </p>
        <div className="pathway-list" aria-label="Future Store feed fields">
          {storeFeedFields.map((field) => (
            <div className="pathway-link" key={field.label}>
              <span>{field.label}</span>
              <p>{field.description}</p>
            </div>
          ))}
        </div>
        <ul className="detail-list">
          {storeFeedRules.map((rule) => <li key={rule}>{rule}</li>)}
        </ul>
      </section>

      <section className="link-card wide-card" aria-labelledby="store-promise-title">
        <p className="eyebrow">Store promise</p>
        <h1 id="store-promise-title">Prepared, honest, and easy to update.</h1>
        <p>
          This page should be useful before public links exist and trustworthy after
          they launch. It names the intended lanes, keeps availability clear, and
          leaves room for direct public paths when they exist.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {storePromises.map((promise) => (
            <DetailCard eyebrow={promise.eyebrow} title={promise.title} key={promise.title}>
              <p>{promise.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <NextStepBand {...pageContinuity.store} />
    </main>
  );
}
