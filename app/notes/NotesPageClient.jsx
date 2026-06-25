"use client";

import { useEffect, useMemo, useState } from "react";
import { pageContinuity } from "../page-continuity";
import { NextStepBand } from "../next-step-band";
import { blogFeedReadiness, sourceFallbackRules } from "../source-readiness";
import { INDEX_URLS, notesReaderStates, notesSupportCards } from "../site-data";
import { DetailCard, PageIntro } from "../site-chrome";

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

  throw new Error("The public notes source could not be reached right now.");
}

function sortPublishedPosts(posts) {
  return posts
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
}

function sourceLabel(source) {
  if (!source) return "";
  if (source.includes("github.io")) return "public Blog feed";
  return "public Blog fallback";
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

  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Still Here Notes" title="Studio notes room">
        <p>
          This page is the Website-owned reading door. The Blog repo keeps the
          published writing files, and this page turns them into a softer reader
          experience inside the Soft Strange Studio shell.
        </p>
      </PageIntro>

      <section className="link-card wide-card" aria-labelledby="notes-title">
        <p className="eyebrow">{routeLabel}</p>
        <h1 id="notes-title">Read the notes</h1>
        <p>
          Published posts appear here when the public Blog index is available.
          The source can stay structured while visitors get a real page instead
          of a raw feed.
        </p>

        {state.status === "loading" && (
          <p className="reader-state">Gathering the public notes index inside the studio shell...</p>
        )}
        {state.status === "error" && (
          <div className="reader-state reader-state--error">
            <p>{state.error}</p>
            <small>The notes room stays ready even when the public source is temporarily unavailable.</small>
          </div>
        )}
        {state.status === "ready" && state.posts.length === 0 && (
          <p className="reader-state">No published notes are available yet. This page is ready for them when they arrive.</p>
        )}
        {state.status === "ready" && state.posts.length > 0 && (
          <p className="source-note">
            Showing {state.posts.length} published note{state.posts.length === 1 ? "" : "s"} from the {sourceLabel(state.source)}, sorted newest first.
          </p>
        )}

        {featuredPost && (
          <a className="source-link" href={`${routeBase}/post/?slug=${featuredPost.slug}`}>
            <span>{featuredPost.title}</span>
            <small>{featuredPost.category} · {featuredPost.date}</small>
            <small>{featuredPost.excerpt}</small>
            <em>Start with latest note</em>
          </a>
        )}

        {archivePosts.length > 0 && (
          <div className="post-list" aria-label="More published notes">
            {archivePosts.map((post) => (
              <a className="source-link" href={`${routeBase}/post/?slug=${post.slug}`} key={post.slug}>
                <span>{post.title}</span>
                <small>{post.category} · {post.date}</small>
                <small>{post.excerpt}</small>
                <em>Open note</em>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="content-grid content-grid--small" aria-label="Notes system details">
        {notesSupportCards.map((card) => (
          <DetailCard eyebrow={card.eyebrow} title={card.title} key={card.title}>
            <p>{card.description}</p>
          </DetailCard>
        ))}
      </section>

      <section className="link-card wide-card" aria-labelledby="notes-source-title">
        <p className="eyebrow">Source readiness</p>
        <h1 id="notes-source-title">The reader knows what it needs from Blog.</h1>
        <p>
          The Notes room can stay calm even while connected repos change because the
          expected Blog feed shape is named here in visitor-facing language.
        </p>
        <div className="content-grid content-grid--small embedded-grid">
          {blogFeedReadiness.map((item) => (
            <DetailCard eyebrow={item.eyebrow} title={item.title} key={item.title}>
              <p>{item.description}</p>
              <ul className="detail-list">
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </DetailCard>
          ))}
        </div>
        <div className="pathway-list" aria-label="Source fallback rules">
          {sourceFallbackRules.map((rule) => (
            <div className="pathway-link" key={rule.label}>
              <span>{rule.label}</span>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="link-card wide-card" aria-labelledby="notes-states-title">
        <p className="eyebrow">Reader behavior</p>
        <h1 id="notes-states-title">The notes page stays clear in every state.</h1>
        <div className="content-grid content-grid--small embedded-grid">
          {notesReaderStates.map((readerState) => (
            <DetailCard eyebrow={readerState.eyebrow} title={readerState.title} key={readerState.title}>
              <p>{readerState.description}</p>
            </DetailCard>
          ))}
        </div>
      </section>

      <NextStepBand {...pageContinuity.notes} />
    </main>
  );
}
