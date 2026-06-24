"use client";

import { useEffect, useState } from "react";
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

export default function NotesPageClient({ routeBase = "/Website/notes", routeLabel = "Notes" }) {
  const [state, setState] = useState({ status: "loading", posts: [], source: "", error: null });

  useEffect(() => {
    fetchPostsIndex()
      .then(({ data, source }) => {
        const posts = Array.isArray(data.posts) ? data.posts.filter((post) => post.status === "published") : [];
        setState({ status: "ready", posts, source, error: null });
      })
      .catch((error) => setState({ status: "error", posts: [], source: "", error: error.message }));
  }, []);

  return (
    <main id="top" className="site-shell page-layout">
      <PageIntro eyebrow="Still Here Notes" title="Public notes, held inside the studio.">
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
          <p className="reader-state reader-state--error">{state.error}</p>
        )}
        {state.status === "ready" && state.posts.length === 0 && (
          <p className="reader-state">No published notes are available yet. This page is ready for them when they arrive.</p>
        )}
        {state.status === "ready" && state.posts.length > 0 && (
          <p className="source-note">Showing {state.posts.length} published note{state.posts.length === 1 ? "" : "s"} from the public Blog source.</p>
        )}

        <div className="post-list">
          {state.posts.map((post) => (
            <a className="source-link" href={`${routeBase}/post/?slug=${post.slug}`} key={post.slug}>
              <span>{post.title}</span>
              <small>{post.category} · {post.date}</small>
              <small>{post.excerpt}</small>
              <em>Open note</em>
            </a>
          ))}
        </div>
      </section>

      <section className="content-grid content-grid--small" aria-label="Notes system details">
        {notesSupportCards.map((card) => (
          <DetailCard eyebrow={card.eyebrow} title={card.title} key={card.title}>
            <p>{card.description}</p>
          </DetailCard>
        ))}
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
    </main>
  );
}
