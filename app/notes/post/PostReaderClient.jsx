"use client";

import { useEffect, useMemo, useState } from "react";
import { NextStepBand } from "../../next-step-band";
import { pageContinuity } from "../../page-continuity";
import { DetailCard } from "../../site-chrome";
import { PAGES_BASE, RAW_BASE } from "../../site-data";

const postReaderSupportCards = [
  {
    title: "Inside the shell",
    eyebrow: "Context",
    description: "The note uses Blog files, but the reading surface stays inside the Website so it still feels like Soft Strange Studio."
  },
  {
    title: "Published only",
    eyebrow: "Boundary",
    description: "The reader checks the public profile and does not present draft or unavailable notes as finished public writing."
  },
  {
    title: "Clear way back",
    eyebrow: "Path",
    description: "Missing, loading, and error states all point visitors back toward the notes index instead of leaving them at a dead end."
  },
  {
    title: "Paper reader sheet",
    eyebrow: "Material",
    description: "The post card should read like a calm paper sheet in the studio, not a raw Markdown file or technical endpoint."
  }
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function markdownToHtml(markdown) {
  return markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("### ")) return `<h3>${escapeHtml(block.slice(4))}</h3>`;
      if (block.startsWith("## ")) return `<h2>${escapeHtml(block.slice(3))}</h2>`;
      if (block.startsWith("# ")) return `<h2>${escapeHtml(block.slice(2))}</h2>`;
      return `<p>${escapeHtml(block).replaceAll("\n", "<br />")}</p>`;
    })
    .join("");
}

async function fetchTextWithFallback(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) return await response.text();
    } catch {}
  }

  throw new Error("This public note could not be loaded right now.");
}

async function fetchJsonWithFallback(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) return await response.json();
    } catch {}
  }

  throw new Error("This public note profile could not be loaded right now.");
}

export default function PostReaderClient({ backHref = "/Website/notes/", backLabel = "Back to Notes", contextLabel = "Still Here Notes" }) {
  const [state, setState] = useState({ status: "loading", slug: "", profile: null, markdown: "", error: null });

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("slug");
    if (!slug) {
      setState({
        status: "missing",
        slug: "",
        profile: null,
        markdown: "",
        error: "Choose a note from the public notes index to open it here."
      });
      return;
    }

    setState({ status: "loading", slug, profile: null, markdown: "", error: null });

    Promise.all([
      fetchJsonWithFallback([
        `${PAGES_BASE}/posts/${slug}/profile.json`,
        `${RAW_BASE}/posts/${slug}/profile.json`,
      ]),
      fetchTextWithFallback([
        `${PAGES_BASE}/posts/${slug}/content.md`,
        `${RAW_BASE}/posts/${slug}/content.md`,
      ]),
    ])
      .then(([profile, markdown]) => {
        if (profile.status && profile.status !== "published") {
          throw new Error("This note is not public yet.");
        }

        setState({ status: "ready", slug, profile, markdown, error: null });
      })
      .catch((error) => setState({ status: "error", slug, profile: null, markdown: "", error: error.message }));
  }, []);

  const html = useMemo(() => markdownToHtml(state.markdown), [state.markdown]);

  return (
    <main id="top" className="site-shell readable-shell">
      <section className="link-card reader-card" aria-labelledby="reader-intro-title">
        <p className="eyebrow">{contextLabel}</p>
        <h1 id="reader-intro-title">A quiet reading sheet</h1>
        <p>
          Individual notes stay inside the Website shell so the writing keeps the
          same soft studio context as the rest of the site.
        </p>
      </section>

      <article className="link-card reader-card">
        <p><a href={backHref}>{backLabel}</a></p>

        {state.status === "loading" && (
          <div className="reader-state">
            <p className="eyebrow inline">Loading</p>
            <p>Gathering the public note profile and writing file inside the studio reader...</p>
          </div>
        )}

        {state.status === "missing" && (
          <div className="reader-state">
            <p className="eyebrow inline">Choose a note</p>
            <p>{state.error}</p>
            <a href={backHref}>{backLabel}</a>
          </div>
        )}

        {state.status === "error" && (
          <div className="reader-state reader-state--error">
            <p className="eyebrow inline">Reader note</p>
            <p>{state.error}</p>
            <a href={backHref}>Return to the notes index</a>
          </div>
        )}

        {state.profile && (
          <>
            <p className="eyebrow inline">{state.profile.series || state.profile.category || "Public note"}</p>
            <h1>{state.profile.title}</h1>
            <p>{state.profile.subtitle || state.profile.excerpt}</p>
            <div className="tag-row">
              {state.profile.category && <span>{state.profile.category}</span>}
              {state.profile.date && <span>{state.profile.date}</span>}
              {state.slug && <span>public note</span>}
            </div>
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
          </>
        )}
      </article>

      <section className="content-grid content-grid--small" aria-label="Post reader support">
        {postReaderSupportCards.map((card) => (
          <DetailCard eyebrow={card.eyebrow} title={card.title} key={card.title}>
            <p>{card.description}</p>
          </DetailCard>
        ))}
      </section>

      <NextStepBand {...pageContinuity.notePost} />
    </main>
  );
}
