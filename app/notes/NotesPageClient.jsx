"use client";

import { useEffect, useMemo, useState } from "react";
import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import { blogFeedReadiness, sourceFallbackRules } from "../source-readiness";
import { INDEX_URLS, notesReaderStates, notesSupportCards } from "../site-data";
import { PageIntro } from "../site-chrome";

async function fetchPostsIndex() {
  for (const url of INDEX_URLS) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        return { data, source: url };
      }
    } catch {}
  }

  throw new Error("The public notes shelf could not be reached right now.");
}

function sortPublishedPosts(posts) {
  return posts
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
}

function sourceLabel(source) {
  if (!source) return "";
  if (source.includes("github.io")) return "public writing shelf";
  return "quiet backup shelf";
}

function notePhotoLabel(post) {
  return post.category || post.series || "note";
}

export default function NotesPageClient({ routeBase = "/Website/notes", routeLabel = "Notes" }) {
  const [state, setState] = useState({ status: "loading", posts: [], source: "", error: null });

  useEffect(() => {
    fetchPostsIndex()
      .then(({ data, source }) => {
        const posts = Array.isArray(data.posts) ? sortPublishedPosts(data.posts) : [];
        setState({ status: "ready", posts, source, error: null });
      })
      .catch((error) => setState({ status: "error", posts: [], source: "", error: error.message }));
  }, []);

  const featuredPost = useMemo(() => state.posts[0], [state.posts]);
  const archivePosts = useMemo(() => state.posts.slice(1), [state.posts]);
  const galleryPosts = useMemo(() => state.posts.slice(0, 6), [state.posts]);

  return (
    <main id="top" className="site-shell page-layout notes-room-page">
      <PageIntro eyebrow="Still Here Notes" title="Studio notes room">
        <p>
          This page is the studio reading door. The public writing shelf keeps the
          note files organized, and this page turns them into a softer reading
          experience inside the Soft Strange Studio shell.
        </p>
      </PageIntro>

      <section className="notes-reader-board" aria-labelledby="notes-title">
        <div className="notes-reader-board__copy">
          <p className="eyebrow">{routeLabel}</p>
          <h1 id="notes-title">Read the notes</h1>
          <p>
            Published posts appear here when the public writing shelf is available.
            The shelves can stay organized while visitors get a real page instead
            of a plain behind-the-scenes list.
          </p>

          {state.status === "loading" && (
            <p className="reader-state">Gathering the public notes inside the studio shell...</p>
          )}
          {state.status === "error" && (
            <div className="reader-state reader-state--error">
              <p>{state.error}</p>
              <small>The notes room stays ready even when the public shelf is temporarily unavailable.</small>
            </div>
          )}
          {state.status === "ready" && state.posts.length === 0 && (
            <p className="reader-state">No published notes are available yet. This page is ready for them when they arrive.</p>
          )}
          {state.status === "ready" && state.posts.length > 0 && (
            <p className="source-note notes-source-stamp">
              Showing {state.posts.length} published note{state.posts.length === 1 ? "" : "s"} from the {sourceLabel(state.source)}, sorted newest first.
            </p>
          )}
        </div>

        <div className="notes-paper-stack" aria-label="Published notes">
          {featuredPost && (
            <a className="source-link notes-note-card notes-note-card--featured" href={`${routeBase}/post/?slug=${featuredPost.slug}`}>
              <span className="notes-note-card__label">Latest note</span>
              <span className="notes-note-card__photo" aria-hidden="true">
                <span>{notePhotoLabel(featuredPost)}</span>
              </span>
              <strong>{featuredPost.title}</strong>
              <small>{featuredPost.category} · {featuredPost.date}</small>
              <p>{featuredPost.excerpt}</p>
              <em>Start with latest note</em>
            </a>
          )}

          {archivePosts.length > 0 && (
            <div className="notes-scroll-strip" aria-label="More published notes">
              {archivePosts.map((post) => (
                <a className="source-link notes-note-card" href={`${routeBase}/post/?slug=${post.slug}`} key={post.slug}>
                  <span className="notes-note-card__label">Open note</span>
                  <span className="notes-note-card__photo" aria-hidden="true">
                    <span>{notePhotoLabel(post)}</span>
                  </span>
                  <strong>{post.title}</strong>
                  <small>{post.category} · {post.date}</small>
                  <p>{post.excerpt}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {galleryPosts.length > 0 && (
        <section className="notes-gallery-board" aria-labelledby="notes-gallery-title">
          <div className="notes-gallery-board__intro">
            <p className="eyebrow">Writing shelf</p>
            <h1 id="notes-gallery-title">A small note contact sheet.</h1>
            <p>
              The same published notes also become a scrollable paper/photo shelf, so
              the room has a more visual reading rhythm without inventing screenshots
              or private writing material.
            </p>
          </div>
          <div className="notes-gallery-scroll" aria-label="Published note contact sheet">
            {galleryPosts.map((post, index) => (
              <a
                className={`notes-gallery-card ${index % 2 === 0 ? "notes-gallery-card--image" : "notes-gallery-card--note"}`}
                href={`${routeBase}/post/?slug=${post.slug}`}
                key={`gallery-${post.slug}`}
              >
                <span className="notes-gallery-card__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="notes-gallery-card__image" aria-hidden="true">
                  <span>{post.category || "note"}</span>
                </span>
                <span className="notes-gallery-card__copy">
                  <small>{index === 0 ? "Latest from the shelf" : "Public note"}</small>
                  <strong>{post.title}</strong>
                  <span>{post.excerpt}</span>
                  <em>{post.date}</em>
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="notes-support-strip" aria-label="Notes system details">
        {notesSupportCards.map((card, index) => (
          <article className="notes-support-note" key={card.title}>
            <span className="notes-support-note__pin" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p className="eyebrow">{card.eyebrow}</p>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="notes-source-board" aria-labelledby="notes-source-title">
        <div className="notes-source-board__intro">
          <p className="eyebrow">Writing shelf map</p>
          <h1 id="notes-source-title">Every note has a clear public shape.</h1>
          <p>
            The Notes room can stay calm while the writing shelf changes because the
            visible note pieces are named here in visitor-facing language.
          </p>
        </div>
        <div className="notes-source-ledger" aria-label="Public notes shelf needs">
          {blogFeedReadiness.map((item) => (
            <article className="notes-source-card" key={item.title}>
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="notes-source-detail-strip" aria-label={`${item.title} shelf notes`}>
                {item.details.map((detail) => (
                  <span className="notes-source-detail-slip" key={detail}>{detail}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="notes-fallback-rules" aria-label="Writing shelf backup rules">
          {sourceFallbackRules.map((rule) => (
            <div className="notes-fallback-rule" key={rule.label}>
              <span>{rule.label}</span>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="notes-state-board" aria-labelledby="notes-states-title">
        <div className="notes-state-board__intro">
          <p className="eyebrow">Reader behavior</p>
          <h1 id="notes-states-title">The notes page stays clear in every state.</h1>
        </div>
        <div className="notes-state-list">
          {notesReaderStates.map((readerState) => (
            <article className="notes-state-note" key={readerState.title}>
              <p className="eyebrow">{readerState.eyebrow}</p>
              <h2>{readerState.title}</h2>
              <p>{readerState.description}</p>
            </article>
          ))}
        </div>
      </section>

      <NextStepBand {...pageContinuity.notes} />
    </main>
  );
}
